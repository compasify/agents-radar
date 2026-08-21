# AI Infrastructure Digest 2026-08-21

> Generated: 2026-08-20 23:15 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# Cross-Project AI Infrastructure Comparison Report
**Date:** 2026-08-21 | **Scope:** vLLM, SGLang, llama.cpp, Ollama, LiteLLM, Unsloth

---

## 1. Ecosystem Overview

The inference stack today is dominated by speculative decoding (MTP, DFlash2, DSpark) and low-precision quantization (FP8, MXFP4, NVFP4), with nearly every project shipping draft-model architectures and hitting correctness regressions on them simultaneously. The Qwen model family is the single largest integration pressure point across all six projects — spanning Qwen3.5/3.6/3.8 variants plus DeepSeek V3.2/V4 derivatives — and is implicated in the majority of critical bugs (MTP crashes, token loops, KV contamination, tool-call corruption). GPU portability is the second major theme: ROCm/gfx950, XPU, Ascend, MUSA, and Blackwell sm120 paths are all in active flight, but AMD and Intel backends remain visibly less stable than CUDA. Finally, tool-calling correctness has emerged as a production-critical concern — raw control-token leakage (DSML), malformed tool-call wrappers, and agent-loop cost explosions appear across vLLM, SGLang, Ollama, and Unsloth. The ecosystem is shipping fast, but operational discipline (pin versions, validate outputs, cap agent costs) is now mandatory.

---

## 2. Activity Comparison

*Counts reflect issues/PRs explicitly cited in each project digest (last 24h), not full GitHub totals.*

| Project | Issues Cited | PRs Cited | Releases (24h) | Notable Signals |
|---|---|---|---|---|
| **vLLM** | 16 (3 closed) | 12 | None | Critical MTP crash (#40756, 41 comments, no fix); 76% latency regression open |
| **SGLang** | 17 (2 closed) | 13 | None | NIXL/UCX segfault unfixed; v0.5.17 token-loop regression; heavy CI infra work |
| **llama.cpp** | 23 | 17 | **9** (b10505–b10520) | Dense release train; many open stability issues (watchdog, Vulkan, SM_60 FP16) |
| **Ollama** | 17 (2 closed) | 7 | None* | 2 critical ROCm gfx1151 correctness bugs; 0.32.15 pre-release flagged as fix |
| **LiteLLM** | 12 (4 closed) | 13 | None | Batch double-billing fix; `/health` secret leak unpatched; Rust core expansion |
| **Unsloth** | 15 | 15 | **v0.1.801-beta** | 200+ PRs merged; 71 failing repo tests; macOS M3 system flicker |

\* Ollama: 0.32.15 exists as a pre-release mentioned for verification, not a general release.

**Release cadence leaders:** llama.cpp (9 releases/24h, rolling binary train) and Unsloth (single beta with 200+ merges). vLLM, SGLang, Ollama, and LiteLLM all had no release in the window — a notable quiet period for production serving stacks.

---

## 3. Model Support Race

| Project | New Models / Architectures | Competitive Position |
|---|---|---|
| **vLLM** | DFlash2DraftModel drafter (grouped dynamic depthwise conv); Humming MoE MXFP4 + block-FP8; ROCm AITER DeepSeek V4 heterogeneous MoE; GLM-5.2/DeepSeek-V3.2 PCP NVLS fusion; Kimi-K3 ROCm roadmap | **Broadest serving coverage** — new drafter architectures plus AMD/Intel paths, but DeepSeek V4 ROCm and Kimi-K3 remain unmerged/in-flight |
| **SGLang** | Qwen3.8-2.4T-A95B MXFP4 with DCP; ROCm 7.14 (gfx942/gfx950) release pipeline; Ascend A5 MXFP8/MXFP4 RFC; Qwen3.8-27B DFlash2 docs | Strong **Qwen-specific velocity** and AMD pipeline automation; DCP for MXFP4 ahead of vLLM; but token-loop regression on Qwen3.5-arch undermines confidence |
| **llama.cpp** | Granite SWA/Granite MoE SWA conversion; ggml_rope_set_offset new core op; DSpark for LFM2; DFlash2; GLM-4.5-Air MTP; adaptive MTP draft depth; dots3-note in progress | **Fastest model breadth of any local runtime** — new GGML op + 3 draft architectures in one 24h window |
| **Ollama** | Qwen3.5 vision on MLX (closed PR); server-side MLX imports (open); unified GGUF capability metadata | **MLX focus**; behind on multi-backend model breadth but improving macOS coverage |
| **LiteLLM** | fal.ai gpt-image-2 image generation | **Not a model runner** — adding gateway routing for new provider/model combos instead |
| **Unsloth** | Qwen3.8-27B acknowledged; Ling 3.0 requested; NVIDIA Linux desktop fix | **Fine-tuning layer**; model support is via Studio/GGUF integration, not new inference archs |

**Who is ahead:** vLLM for production serving breadth (drafter architectures, MXFP4 MoE, PCP fusion), llama.cpp for raw model-format coverage in the local runtime space, SGLang for Qwen-family depth (MXFP4 + DCP). Ollama trails on new architecture support but is catching up via MLX and capability-detection refactors.

---

## 4. Performance Frontier

Optimization effort clusters into five areas:

1. **Speculative decoding efficiency** (dominant): vLLM is sharding sampler inputs along TP (#50465, ~1/P memory reduction), adding single-global-read fused RMSNorm+FP8 quantization (#45428), and capturing widest uniform decode batches (#50488). llama.cpp added **adaptive MTP draft depth** and is optimizing DSpark/DFlash2 kernels. SGLang is tuning W4AFP8 DeepEP requant launch geometry. Key caveat: vLLM reports a 76% latency regression with MTP on Qwen3-Next-80B-FP8 (#35387) — the optimization push is racing the correctness debt.

2. **KV cache — quantization and memory**: Vulkan/Metal q8_0 KV-cache dequant optimizations landed in llama.cpp; Unsloth fixed quantized KV cache with tensor splitting (previously silently dropped); SGLang removed a device sync in SWA allocator free path. Ollama is fighting KV-cache memory growth on MLX.

3. **Batching and scheduling**: vLLM's uniform decode-batch capture and spec-decode warmup consolidate; SGLang's PrefillDelayer has a feedback-loop collapse under DP attention + chunked prefill (open); Ollama unblocked parallel requests for qwen35/qwen35moe.

4. **Quantization formats**: MXFP4 is the hot format — SGLang (Qwen3.8 MXFP4 DCP), vLLM (Humming MoE MXFP4, DeepSeek V4 MXFP4 routed experts), Unsloth (NVFP4 issues on RTX 5060 Ti). FP8 remains the workhorse but is fragile on Blackwell (vLLM #51884 "Unknown SF transformation" on sm120).

5. **Distributed serving / multi-node**: vLLM's PCP NVLS multicast fusion (#53173) reduces collectives; SGLang's cyclic DCP KV transfer packs per-token RDMA into page-sized blocks (#35762); both are optimizing for DeepSeek/GLM-scale multi-node MoE. Cost/latency wins here are the biggest lever for frontier-class models.

**Non-inference frontier:** LiteLLM is optimizing the control plane — event-loop-safe token counting, off-event-loop `/metrics` rendering, multi-pod job election — while Unsloth's `studiobench` adds statistically rigorous A/B benchmarking. The Weight Cache Daemon (SGLang, sub-second load for 235B-class models) is the most operationally impactful near-term win in this batch.

---

## 5. Layer Positioning

| Project | Layer | Core Value Proposition | Primary Users |
|---|---|---|---|
| **vLLM** | Production serving engine | High-throughput multi-GPU serving with paged KV, spec-decode, and continuous batching; broadest hardware/quantization coverage | Teams deploying at scale on NVIDIA/AMD/Intel |
| **SGLang** | Production serving engine | RadixAttention prefix caching, DCP, tight DeepSeek/Qwen optimization; strong AMD CI investment | Teams running Qwen/DeepSeek families, especially with PD-disaggregation |
| **llama.cpp** | Local/edge inference runtime | Single-binary multi-backend (CUDA, Vulkan, Metal, SYCL, CPU) GGML execution; fastest release cadence | Developers embedding LLMs in desktop/mobile/edge products |
| **Ollama** | Local developer runtime | Zero-config UX on top of llama.cpp/MLX; model management; API compatibility | Individual developers, prototypes, local agent clients |
| **LiteLLM** | AI gateway / proxy | Provider routing, billing, auth, caching, load balancing across 100+ backends | Platform teams standardizing LLM access for multiple internal apps |
| **Unsloth** | Training/fine-tuning + desktop app | Fast LoRA/CPT fine-tuning (2-5× speedups), plus the Studio desktop harness for local chat/tools | Fine-tuning practitioners and desktop users; increasingly agentic chat builders |

Gateway (LiteLLM) and training (Unsloth) layers are both converging on serving concerns: LiteLLM now routes `/chat/completions` through a Rust core, and Unsloth Studio is effectively becoming a local serving product with benchmark tooling.

---

## 6. Trend Signals

1. **Speculative decoding is now table-stakes — and a top production risk.** Every engine shipped or is shipping MTP/DFlash2/DSpark support, yet vLLM has an unfixed critical MTP crash, SGLang users must build from `main` to avoid token loops, and llama.cpp reports spec-decode divergence from greedy on quantized targets. **Watch:** per-request acceptance telemetry (vLLM #48915) — it will finally make spec-decode ROI measurable.

2. **Agentic workloads are the new correctness battleground.** Tool-call corruption is systemic: vLLM's DSML wrapper corruption, SGLang's raw DSML leakage with `tool_choice="none"`, Ollama's 193-identical-tool-calls / ~31M-token burn on DeepSeek cloud, LiteLLM's MCP auto-execution hijack risk. **Watch:** hard cost/iteration caps in agent loops; response-side tool-call validation is now an architectural requirement, not a nice-to-have.

3. **MXFP4 is the next quantization format to standardize on.** vLLM, SGLang, and Unsloth all touched MXFP4 this week. But it's a moving target — ROCm AITER pins, XPU INC variants, and Blackwell sm120 failures all indicate that "format support" today means "fragile early support." **Watch:** whether the DFlash2/MXFP4 combinations stabilize before end of 2026.

4. **Non-NVIDIA hardware is real but not production-safe yet.** ROCm Strix Halo (gfx1151) has silent KV contamination and long-prompt corruption (Ollama); gfx950 has MTP acceptance failures (vLLM) and AITER pin issues (SGLang). Intel XPU and Ascend are earlier still. **Watch:** the ROCm 7.14 pipeline (SGLang #35319) and vLLM's Kimi-K3 ROCm roadmap (#50682) as bellwethers.

5. **Distributed memory is the scaling bottleneck.** DCP KV transfers are being packed from per-token RDMA into page-sized blocks (SGLang), PCP/NVLS multicast fusion reduces collectives (vLLM), and weight loading is being daemonized for sub-second cold starts (SGLang). Multi-node efficiency, not single-GPU kernel speed, is where frontier-model serving costs will be won.

6. **The Qwen ecosystem is best treated as a pin-to-version environment.** Every project had Qwen-family-specific regressions this week, and several required specific builds (SGLang `main`, Unsloth beta, Ollama pre-release). **Watch:** the release notes for Qwen3.6/3.8 stabilizations before standardizing a serving stack on those models.

---

**Bottom line for technical decision-makers:** No project in this ecosystem is safe to upgrade blindly this week. Pin known-good versions, validate tool-call outputs on both sides, cap agent spend, measure prefix-cache hit rates and spec-decode acceptance explicitly, and treat ROCm/XPU/Blackwell paths as early-access until the fix PRs for the issues named above actually land.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

## 1. Today's Highlights

Speculative decoding is the dominant theme across the vLLM project today: an active MTP crash on Qwen3.6-FP8 remains the most-commented issue ([#40756](https://github.com/vllm-project/vllm/issues/40756)), while a new Step-3.5 MTP + structured-outputs bugfix is open ([#53174](https://github.com/vllm-project/vllm/pull/53174)). On the performance side, multiple open PRs target spec-decode memory efficiency, uniform decode-batch capture, and fused normalization/quantization kernels. ROCm and XPU support also continues to expand with DeepSeek V4 and Intel INC paths in flight.

## 2. Releases & Breaking Changes

No releases were published in the last 24 hours.

The main in-flight behavior change is [PR #53139](https://github.com/vllm-project/vllm/pull/53139), which removes FlashInfer DSpark support for decode context parallelism while preserving the TP-only FlashInfer DSpark path introduced for Kimi K3. Teams relying on DSpark + DCP should watch this PR before upgrading.

## 3. New Model & Hardware Support

- [PR #52816](https://github.com/vllm-project/vllm/pull/52816) adds a new `DFlash2DraftModel` drafter architecture with grouped dynamic depthwise convolution and a candidate selector. Existing `DFlashDraftModel` checkpoints are unaffected.
- [PR #50501](https://github.com/vllm-project/vllm/pull/50501) adds an Intel XPU INC backend for int4 weights + dynamic int8 activations (`w4a8`), reusing the existing w4a16 weight layout.
- [PR #51332](https://github.com/vllm-project/vllm/pull/51332) enables Humming MoE GEMM with MXFP4 weights and block-FP8 group-128 activations.
- [PR #53161](https://github.com/vllm-project/vllm/pull/53161) adds a ROCm AITER heterogeneous fused MoE path for DeepSeek V4, combining native FP8 shared experts with MXFP4 routed experts. It is explicitly marked “do not merge” until the matching AITER pin lands.
- [PR #53173](https://github.com/vllm-project/vllm/pull/53173) fuses cache dispatch with NVLS multicast for the GLM-5.2 / DeepSeek-V3.2 PCP path, reducing collectives and intermediate memory traffic.
- [Issue #50682](https://github.com/vllm-project/vllm/issues/50682) tracks the upstream ROCm enablement and performance roadmap for Kimi-K3.

## 4. Performance & Optimization

- [PR #45428](https://github.com/vllm-project/vllm/pull/45428) adds a single-global-read fast path for fused RMSNorm + dynamic per-token FP8 quantization, replacing a three-read pattern. This should reduce input-memory bandwidth pressure on every decoded token.
- [PR #50465](https://github.com/vllm-project/vllm/pull/50465) shards sampler inputs and target logits along the TP dimension during speculative decoding, reducing per-step memory allocation by roughly `1/P` versus the current `O(batch_size * (num_spec_tokens + 1) * vocab_size)` materialization.
- [PR #50488](https://github.com/vllm-project/vllm/pull/50488) makes spec-decode capture the widest uniform decode batch by default, consolidating warmup and dispatch fixes.
- [PR #52807](https://github.com/vllm-project/vllm/pull/52807) fixes a KV-offload connector bug that discarded valid host-tier eagle/MTP hits and could trigger load-path asserts.
- [PR #45683](https://github.com/vllm-project/vllm/pull/45683) makes MoE combine reduction deterministic under DP + EP when `VLLM_BATCH_INVARIANT=1`.
- Regression report: [Issue #35387](https://github.com/vllm-project/vllm/issues/35387) reports a **76% latency regression** when MTP is enabled on Qwen3-Next-80B-A3B-Instruct-FP8, still open.
- [Issue #38182](https://github.com/vllm-project/vllm/issues/38182) reports that enabling MTP on Qwen3.5-35B-A3B reduces prefix-cache hit rate; root cause remains under investigation.

## 5. Stability & Regressions

Ranked by likely production impact:

- **Critical — MTP illegal-memory-access crash on long sequences**: [Issue #40756](https://github.com/vllm-project/vllm/issues/40756) affects Qwen3.6-27B-FP8 with `num_spec_tokens=5` on v0.19.1. 41 comments; no fix PR is linked yet.
- **Critical — TurboQuant KV-cache crash on chunked continuation prefill**: [Issue #41726](https://github.com/vllm-project/vllm/issues/41726) occurs on a recent nightly after workspace lock, in the PR #39931 TurboQuant-on-hybrid-attention path.
- **High — Align-mode prefix caching never hits**: [Issue #52897](https://github.com/vllm-project/vllm/issues/52897) reports 0 hits across 996k queries with `--scheduling-policy priority` on a hybrid GDN model after #51113.
- **High — Malformed DSML tool-call wrappers**: [Issue #51914](https://github.com/vllm-project/vllm/issues/51914) shows DeepSeek-V4-Flash intermittently emitting corrupted tool-call openers such as `<｜DSML｜toolcalls>` instead of `<｜DSML｜tool_calls>` on v0.27.1 + DSpark.
- **High — Spec-decode init crash under TP>1**: [Issue #52023](https://github.com/vllm-project/vllm/issues/52023) crashes when `draft_model` hidden size exceeds the target model’s, because the fused allreduce+RMSNorm workspace is sized from the target only.
- **High — Cross-node CUDA graph capture failure on GB10**: [Issue #46253](https://github.com/vllm-project/vllm/issues/46253) fails with illegal memory access at `capture_end()` because a host-staged NCCL all-reduce is captured; `splitting_ops` is not honored.
- **Medium — FP8 block-scaled weights fail on RTX 5090**: [Issue #51884](https://github.com/vllm-project/vllm/issues/51884) hits DeepGEMM “Unknown SF transformation” on sm120 during `process_weights_after_loading`.
- **Medium — GLM-5.2 MTP on ROCm MI355X**: [Issue #52833](https://github.com/vllm-project/vllm/issues/52833) reports 0% draft acceptance, and disabling expert parallelism triggers `hipErrorIllegalAddress`.
- **Medium — OpenAI `strict` flag changes tool behavior**: [Issue #52741](https://github.com/vllm-project/vllm/issues/52741) shows `tools[].function.strict` being rendered into the model-visible chat template, altering tool-call behavior.

Also closed/cleaned up in the last 24h: the Mistral3 composite-VLM `tie_word_embeddings` resolution bug ([#51063](https://github.com/vllm-project/vllm/issues/51063)), the prefill-warmup 3.4 GiB GPU memory leak ([#36973](https://github.com/vllm-project/vllm/issues/36973)), and a ROCm gfx950 BF16 MLA breakage ([#52312](https://github.com/vllm-project/vllm/issues/52312)).

## 6. What This Means for Application Developers

- **MTP on FP8 Qwen models is risky right now.** If you depend on MTP with `num_spec_tokens=5`, test long-sequence paths carefully and track [#40756](https://github.com/vllm-project/vllm/issues/40756) before rolling out new versions.
- **Tool-calling output validation is essential.** The DeepSeek-V4-Flash DSML corruption ([#51914](https://github.com/vllm-project/vllm/issues/51914)) and the `strict`-flag chat-template leak ([#52741](https://github.com/vllm-project/vllm/issues/52741)) are both correctness bugs that can silently change agent behavior. Add response-side validation and retry logic if you serve these models.
- **Verify prefix-cache hit rates after scheduler/priority changes.** The 0/996k miss pattern in [#52897](https://github.com/vllm-project/vllm/issues/52897) shows that cache-effectiveness regressions can be invisible unless you are explicitly measuring hit rates.
- **ROCm MTP/fused-quantization paths are still maturing.** DeepSeek V4 and GLM-5.2 on MI355X/gfx950 have known defects; watch the Kimi-K3 ROCm roadmap ([#50682](https://github.com/vllm-project/vllm/issues/50682)) for upstream status.
- **Spec-decode observability is coming.** [PR #48915](https://github.com/vllm-project/vllm/pull/48915) adds per-request acceptance statistics to OpenAI API responses, which will make it much easier to validate speculative-decoding ROI in production.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest — 2026-08-21

## 1. Today's Highlights

No release shipped in the last 24h, but the project saw heavy CI/infra work: an AMD CI image-caching PR ([#34487](https://github.com/sgl-project/sglang/pull/34487)) targets ~49 GPU-machine-hours/night of wasted container setup, and a dead-apt-index fix ([#35764](https://github.com/sgl-project/sglang/pull/35764)) addresses the largest AMD CI blast radius of the day. On the model-support front, Qwen3.8 MXFP4 continues to land (DCP support in [#35297](https://github.com/sgl-project/sglang/pull/35297), AMD MI35x nightly in [#35383](https://github.com/sgl-project/sglang/pull/35383)), while two high-severity stability items stand out: the NIXL/UCX prefill segfault is confirmed **not fixed** on v0.5.17/B200 ([#35189](https://github.com/sgl-project/sglang/issues/35189)), and 0.5.17 is reported to regress into token loops on Qwen3.5-architecture models ([#35723](https://github.com/sgl-project/sglang/issues/35723)).

## 2. Releases & Breaking Changes

- **No new releases in the last 24h.**
- **Regression alert for v0.5.17 (PyPI wheel):** generation degenerates into token loops on Qwen3.5-arch models (NVFP4) with DFLASH2 draft; user reports v0.5.6.dev works fine with identical config ([#35723](https://github.com/sgl-project/sglang/issues/35723)). Docs PR [#35753](https://github.com/sgl-project/sglang/pull/35753) now tells Qwen3.8-27B DFLASH2 users to build from `main` — DFlash2 ([#35371](https://github.com/sgl-project/sglang/pull/35371)) and quantized `lm_head` support ([#35496](https://github.com/sgl-project/sglang/pull/35496)) are newer than the published `lmsysorg/sglang:qwen38-27b` image tag.

## 3. New Model & Hardware Support

- **Qwen3.8-2.4T-A95B MXFP4:** DCP support via registering Qwen3.5 text-only archs in mamba radix-cache whitelists ([#35297](https://github.com/sgl-project/sglang/pull/35297)); AMD MI35x nightly coverage added ([#35383](https://github.com/sgl-project/sglang/pull/35383)).
- **ROCm 7.14 (gfx942/gfx950):** new release pipeline assembled from AMD pip wheels + `ubuntu:24.04`, since `repo.radeon.com` has no apt repo for 7.14 ([#35319](https://github.com/sgl-project/sglang/pull/35319)).
- **Ascend NPU:** new tracking issue for Ascend A5 MXFP8/MXFP4 kernel/model coverage ([#34559](https://github.com/sgl-project/sglang/issues/34559)) plus an RFC for cross-generation device adaptation (operator providers, dtypes/layouts, KV representations, quantization metadata) ([#35709](https://github.com/sgl-project/sglang/issues/35709)).
- **Moore Threads (MUSA) GPU:** first-class support roadmap remains open, 12 👍 ([#16565](https://github.com/sgl-project/sglang/issues/16565)).
- **Same-GPU model replicas (RFC):** experimental mode for multiple homogeneous replicas per NVIDIA GPU via data-parallel routing, managed CUDA MPS, and a shared KV pool; initial target Qwen3-0.6B x2 ([#35648](https://github.com/sgl-project/sglang/issues/35648)).
- **Weight Cache Daemon (roadmap):** Phase 1 landed in [#27139](https://github.com/sgl-project/sglang/pull/27139) — per-rank daemon serves post-quantized weights over CUDA IPC; Qwen3-235B FP8 weight load drops from ~306–327s to **<1s** ([#33522](https://github.com/sgl-project/sglang/issues/33522)).

## 4. Performance & Optimization

- **W4AFP8 DeepEP requant launch geometry tuning:** pure streaming pass (2 bytes moved + 2 multiplies/elem) feeding the first CUTLASS W4A8 grouped GEMM; PR adjusts launch configs for the per-token-group → per-tensor fp8 conversion ([#35760](https://github.com/sgl-project/sglang/pull/35760)).
- **DCP KV transfer packing:** cyclic DCP ownership currently emits one RDMA per token; proposal gathers owned MLA rows on prefill so Mooncake/NIXL can send page-sized blocks ([#35762](https://github.com/sgl-project/sglang/pull/35762)).
- **SWA allocator host-side liveness:** removing the device-side `swa_indices > 0` filter from `free_swa` eliminates a device sync on the scheduler's free path ([#35592](https://github.com/sgl-project/sglang/pull/35592)).
- **Beam search (WIP):** per-request `sampling_params.beam_width = k`; shares batches/memory pools with ordinary requests; benchmarked at `beam_width=5000` on H200 ([#31626](https://github.com/sgl-project/sglang/pull/31626)).
- **CI efficiency:** AMD MI30x image caching avoids re-pulling per job, saving ~49 GPU-machine-hours/night across nightly and ROCm 7.2 pipelines ([#34487](https://github.com/sgl-project/sglang/pull/34487)).
- **Open perf issues:** PrefillDelayer can enter a persistent mixed-state feedback loop and collapse prefill progress under DP Attention + chunked prefill ([#35241](https://github.com/sgl-project/sglang/issues/35241)); PP8 disaggregated prefill shows a load-independent ~30s TTFT floor on Kimi-K3 ([#34815](https://github.com/sgl-project/sglang/issues/34815)).

## 5. Stability & Regressions

Ranked by severity; fix PRs noted where they exist.

1. **NIXL/UCX prefill segfault still unfixed** (`nixlUcxSharedThread -> cuEventQuery`) — reproduces on v0.5.17 / CUDA 13.0 / B200; #23489 and #23499 were closed without root cause ([#35189](https://github.com/sgl-project/sglang/issues/35189)).
2. **v0.5.17 token-loop regression** on Qwen3.5-arch NVFP4 + DFLASH2; bisects to a change between 0.5.6.dev and 0.5.17 ([#35723](https://github.com/sgl-project/sglang/issues/35723)).
3. **Scheduler crash:** `AttributeError: 'list' object has no attribute 'tolist'` in `move_logprobs_to_cpu` ([#35705](https://github.com/sgl-project/sglang/issues/35705)).
4. **Cancelling the tail request in a chunked-prefill batch** leaks one visible token and leaves negative scheduler output ids ([#34112](https://github.com/sgl-project/sglang/issues/34112)).
5. **DeepSeek-V4 leaks raw DSML** when `tool_choice="none"` ([#35736](https://github.com/sgl-project/sglang/issues/35736)).
6. **EAGLE + DP Attention + PD disaggregation deadlock** during warmup when `index_share_for_mtp_iteration=True` (GLM-5.2) ([#32527](https://github.com/sgl-project/sglang/issues/32527)).
7. **Global `--attention-backend` kills the server** for non-DiT components that don't declare it (MiniMax-H3 audio_vae) ([#35743](https://github.com/sgl-project/sglang/issues/35743)).
8. **Qwen3.5 GDN + speculative decode on XPU:** `causal_conv1d_update_xpu()` unexpected kwarg `intermediate_conv_window` ([#34720](https://github.com/sgl-project/sglang/issues/34720)).
9. **ROCm images pin AITER too old** for gfx950 FlyDSL MXFP4 MoE kernels (`AITER_COMMIT_DEFAULT` predates the 2026-08-04 FlyDSL MxMoE v2 commit) ([#35591](https://github.com/sgl-project/sglang/issues/35591)).
10. **Closed with fixes:**
    - Quantized `lm_head` uninitialized logits with compressed-tensors — ParallelLMHead not dispatched ([#35358](https://github.com/sgl-project/sglang/issues/35358), closed).
    - DeepSeek V3.2/V4 tool-call parsers dropping calls on two-chunk streamed output ([#35563](https://github.com/sgl-project/sglang/issues/35563), closed).
    - Duplicate `routed_experts` payload in OpenAI responses when `return_meta_info=True` — fixed in [#35323](https://github.com/sgl-project/sglang/pull/35323).
    - gfx950 Triton compiler crash on fp8 KV-cache attention — fix PR open ([#35428](https://github.com/sgl-project/sglang/pull/35428)).
    - `_GenerationStreamAccumulator` logprob-end off-by-one under retract — fixed ([#26510](https://github.com/sgl-project/sglang/pull/26510)).
    - Graceful shutdown bypassed by group-delivered stop signals — fix in [#35202](https://github.com/sgl-project/sglang/pull/35202).
- **CI health (tracker):** 3 broken, 11 flaky, 671 recently fixed on scheduled `main` runs ([#17050](https://github.com/sgl-project/sglang/issues/17050)).

## 6. What This Means for Application Developers

- **Avoid pinning the 0.5.17 PyPI wheel for Qwen3.5/3.8-arch models** — the token-loop regression and missing DFlash2/lm_head support mean building from `main` is required; docs now say so explicitly ([#35753](https://github.com/sgl-project/sglang/pull/35753)).
- **Watch for DSML leakage on DeepSeek-V4** if you pass `tool_choice="none"`; the raw stream leaks model-side control tokens into visible output ([#35736](https://github.com/sgl-project/sglang/issues/35736)).
- **Treat NIXL/UCX-based prefill as unstable on B200/CUDA 13.0** — the segfault is reproducible and root-caused fixes keep getting closed without resolution; plan fallback transport if you depend on NIXL ([#35189](https://github.com/sgl-project/sglang/issues/35189)).
- **Long-prefill cancellation has correctness bugs:** cancelling a tail request in chunked prefill can leak tokens and corrupt scheduler state — worth regression-testing cancel-heavy workloads before any 0.5.x upgrade ([#34112](https://github.com/sgl-project/sglang/issues/34112)).
- **Operationally, the Weight Cache Daemon is the biggest near-term win:** sub-second weight load for 235B-class models vs. ~5min cold start; track Phase 2/3 in the roadmap ([#33522](https://github.com/sgl-project/sglang/issues/33522)).

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp Digest — 2026-08-21

## 1. Today's Highlights

A dense release train (`b10505`–`b10520`) landed with notable server, Vulkan/Metal, and model-support changes: the server can now serve `/metrics` during sleep, Vulkan and Metal gained q8_0 KV-cache dequant optimizations, and Granite SWA / Granite MoE SWA conversion support was added. On the risk side, there are new or updated reports of CUDA watchdog kills on Blackwell, a ~30% in-generation decode throughput drop on RTX 5090, and a Vulkan regression affecting Step 3.7 on newer builds.

## 2. Releases & Breaking Changes

- Releases `b10520`, `b10519`, `b10517`, `b10516`, `b10514`, `b10509`, `b10507`, `b10506`, and `b10505` shipped in the last 24 hours.
- No hard breaking changes were called out. The most operator-relevant change is the server sleep refactor: `/metrics` is now available during sleep, responses are cached, and the metrics task no longer resets the sleep timer ([#27376](https://github.com/ggml-org/llama.cpp/pull/27376)).
- A new server preset option, `dedup-cache-models`, was added ([#27346](https://github.com/ggml-org/llama.cpp/pull/27346)).
- `ggml_rope_set_offset` was introduced as a new GGML op with Metal support in `b10509` ([#27120](https://github.com/ggml-org/llama.cpp/pull/27120)); CUDA support also landed ([#27121](https://github.com/ggml-org/llama.cpp/pull/27121)), and OpenCL/SYCL/WebGPU/Hexagon support was prepared ([#27345](https://github.com/ggml-org/llama.cpp/pull/27345)). Backend/kernel maintainers should treat this as a new core-op addition.
- Vulkan flash-attention scratch exhaustion now falls back instead of aborting when exceeding `maxStorageBufferRange` ([#25494](https://github.com/ggml-org/llama.cpp/pull/25494)).

## 3. New Model & Hardware Support

- **Granite SWA / Granite MoE SWA**: conversion support for `GraniteSWAForCausalLM` / `GraniteMoeSWAForCausalLM` landed in `b10514` ([#25505](https://github.com/ggml-org/llama.cpp/pull/25505)).
- **`ggml_rope_set_offset` backend rollout**: Metal supported in `b10509` ([#27120](https://github.com/ggml-org/llama.cpp/pull/27120)), CUDA in ([#27121](https://github.com/ggml-org/llama.cpp/pull/27121)), and OpenCL/SYCL/WebGPU/Hexagon in ([#27345](https://github.com/ggml-org/llama.cpp/pull/27345)). A follow-up model integration PR is also open ([#27382](https://github.com/ggml-org/llama.cpp/pull/27382)).
- **Speculative decoding / drafter support**:
  - DSpark support for LFM2 models with partial recurrent-state rollback ([#27383](https://github.com/ggml-org/llama.cpp/pull/27383)).
  - DFlash2 support with local convolution + candidate selector ([#27342](https://github.com/ggml-org/llama.cpp/pull/27342)).
  - MTP support for GLM-4.5-Air ([#26534](https://github.com/ggml-org/llama.cpp/pull/26534)).
  - Adaptive MTP draft depth (`--spec-type draft-mtp-adaptive`) ([#27210](https://github.com/ggml-org/llama.cpp/pull/27210)).
- **dots3-note** model support is in progress ([#27060](https://github.com/ggml-org/llama.cpp/pull/27060)).
- **Multimodal**: `mtmd_bitmap_set_mergeable` was added in `b10507` ([#27348](https://github.com/ggml-org/llama.cpp/pull/27348)).
- **Hardware/CPU**: ARM `__fp16` usage is now gated on `__ARM_FP16_FORMAT_IEEE`, fixing 32-bit Arm NEON builds ([#26860](https://github.com/ggml-org/llama.cpp/pull/26860)).

## 4. Performance & Optimization

- **Landed**:
  - Vulkan: q8_0 KV-cache dequant is now performed once in the coopmat1 flash-attention path ([#25494](https://github.com/ggml-org/llama.cpp/pull/25494)).
  - Metal: q8_0 dequantization uses packed types ([#27370](https://github.com/ggml-org/llama.cpp/pull/27370)).
- **In progress**:
  - AVX2 prompt-processing speedup for IQ models at large batch sizes; the author notes that a 512-token batch currently decodes every weight 512 times ([#27402](https://github.com/ggml-org/llama.cpp/pull/27402)).
- **Performance regressions to watch**:
  - Qwen3.8-27B decode throughput degrades ~30% within a single generation on CUDA/RTX 5090 ([#27444](https://github.com/ggml-org/llama.cpp/issues/27444)).
  - MTP performance has been dropping since `b9935` ([#25489](https://github.com/ggml-org/llama.cpp/issues/25489)).
  - SYCL MTP on Intel Arc produces correct output but no speed gain over baseline ([#23533](https://github.com/ggml-org/llama.cpp/issues/23533)).
  - SYCL shows degraded performance with MTP and Q3 quants ([#27373](https://github.com/ggml-org/llama.cpp/issues/27373)).

## 5. Stability & Regressions

Ranked by severity:

- **Hangs / watchdog kills**:
  - CUDA kernel stall during model execution killed by watchdog on RTX Pro 6000 Blackwell ([#27102](https://github.com/ggml-org/llama.cpp/issues/27102)).
  - Vulkan `vk::Queue::submit: ErrorDeviceLost` on AMD iGPU after ~50K context ([#26447](https://github.com/ggml-org/llama.cpp/issues/26447)).
  - Blackwell CUDA SOFT_MAX crash and MMQ crashes remain open ([#25060](https://github.com/ggml-org/llama.cpp/issues/25060), [#23385](https://github.com/ggml-org/llama.cpp/issues/23385)).
- **Crashes / load failures**:
  - Step 3.7 fails to run on Vulkan builds `b10509+`; reported and closed as unconfirmed ([#27447](https://github.com/ggml-org/llama.cpp/issues/27447)).
  - llama-server crashes on CUDA with Qwen3.6-27B ([#23210](https://github.com/ggml-org/llama.cpp/issues/23210)).
  - Multi-node CUDA RPC crash with GLM-5.2: `invalid data ptr` / `graph_compute failed` ([#26583](https://github.com/ggml-org/llama.cpp/issues/26583)).
  - `cublasCreate_v2` resource allocation failure on first inference, regression between `b9553` and `b9870` ([#25304](https://github.com/ggml-org/llama.cpp/issues/25304)).
  - gemma4-assistant MTP draft model fails to load with “invalid vector subscript” ([#24795](https://github.com/ggml-org/llama.cpp/issues/24795)).
- **Correctness / garbled output**:
  - SM_60 quality loss: FP32 math silently done in FP16; fix merged only in two forks upstream, not yet in llama.cpp ([#25593](https://github.com/ggml-org/llama.cpp/issues/25593)).
  - Speculative decoding with draft-MTP/draft-DSpark diverges from greedy on quantized targets ([#25618](https://github.com/ggml-org/llama.cpp/issues/25618)).
  - Multi-client CPU inference with `-np > 1` produces garbled output on `b9922+` ([#26031](https://github.com/ggml-org/llama.cpp/issues/26031)).
  - Vulkan/RADV RX590 warm-server streaming produces clustered garbage output ([#24812](https://github.com/ggml-org/llama.cpp/issues/24812)).
  - Vulkan `no-kv-offload` with Qwen3-Coder-Next / Qwen3.6-35B-A3B produces gibberish ([#23321](https://github.com/ggml-org/llama.cpp/issues/23321)).
  - Gemma 4 31B enters an infinite `<unused49>` generation loop ([#26088](https://github.com/ggml-org/llama.cpp/issues/26088)).
  - Agent mode regression: llama-server generates infinite `/` tokens after commit `c7d8722` ([#26209](https://github.com/ggml-org/llama.cpp/issues/26209)).
- **Stability / system issues**:
  - SYCL host-pinned memory causes high CPU utilization for large allocations ([#27038](https://github.com/ggml-org/llama.cpp/issues/27038)).
  - Vulkan `GGML_ASSERT(tensor->data != NULL)` since `b9318` ([#23737](https://github.com/ggml-org/llama.cpp/issues/23737)).
  - Level Zero headers not found during SYCL builds on OpenSuse Slowroll ([#27257](https://github.com/ggml-org/llama.cpp/issues/27257)).

Most of these issues do not yet have an upstream fix PR in this batch. The Vulkan scratch-exhaustion fallback ([#25494](https://github.com/ggml-org/llama.cpp/pull/25494)) addresses one class of Vulkan abort, but not the reported DeviceLost/assert failures.

## 6. What This Means for Application Developers

- **Upgrade deliberately**: the `b10505`–`b10520` range is generally low-risk, but the server sleep refactor and new `dedup-cache-models` preset option can affect deployment scripts that assume old `/metrics` or sleep behavior ([#27376](https://github.com/ggml-org/llama.cpp/pull/27376), [#27346](https://github.com/ggml-org/llama.cpp/pull/27346)).
- **Blackwell/CUDA users should benchmark before rolling out**: the watchdog stall ([#27102](https://github.com/ggml-org/llama.cpp/issues/27102)) and 30% decode-throughput degradation ([#27444](https://github.com/ggml-org/llama.cpp/issues/27444)) are serious enough to warrant pinning to a known-good build until fixed.
- **Vulkan users on AMD/Adreno should watch the large-context and Strix Halo paths**: several issues point to ongoing backend fragility around FA scratch and KV-cache layout ([#26447](https://github.com/ggml-org/llama.cpp/issues/26447), [#27447](https://github.com/ggml-org/llama.cpp/issues/27447)).
- **Speculative decoding is evolving fast**: DSpark, DFlash2, adaptive MTP, and GLM-4.5-Air MTP are all moving, but correctness on quantized targets is not guaranteed — validate greedy outputs when enabling draft-based decoding ([#25618](https://github.com/ggml-org/llama.cpp/issues/25618)).
- **For multimodal/agent workloads**: `mtmd_bitmap_set_mergeable` and the proposed `--mmproj-device` offload option ([#23255](https://github.com/ggml-org/llama.cpp/pull/23255)) are useful for controlling where vision components run, especially on large unified-memory devices.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Digest — 2026-08-21

## Today's Highlights
The most serious news is AMD Strix Halo (gfx1151): the ROCm backend is now implicated in two severe correctness bugs — KV-state contamination across sequential requests and wrong model output on prompts above ~4k tokens. On the fix side, PRs landed for the qwen3.8 tool-loop 500 error ([#17894](https://github.com/ollama/ollama/pull/17894)), the CORS preflight `OPTIONS` regression ([#17890](https://github.com/ollama/ollama/pull/17890)), and MLX prefix-cache restoration for cancelled prefills ([#17901](https://github.com/ollama/ollama/pull/17901)). Qwen-family models dominate both the regressions and the roadmap, with 8+ issues and 4 PRs in the last 24h.

## Releases & Breaking Changes
No new releases in the last 24h. Note that [issue #17884](https://github.com/ollama/ollama/issues/17884) reports the 0.32.15 pre-release restores MLX prefill throughput that regressed ~3× in 0.32.14 — MLX users should test the pre-release rather than staying on 0.32.14.

## New Model & Hardware Support
- **[#14968](https://github.com/ollama/ollama/pull/14968) (closed): MLX runner now supports Qwen3.5 vision.**
- **[#14969](https://github.com/ollama/ollama/pull/14969) (open): server-side MLX imports** — safetensors through the MLX create pipeline, with GGUF create restricted to wrapping existing GGUF inputs.
- **[#17858](https://github.com/ollama/ollama/pull/17858): unified capability detection** — GGUF metadata extracted once per blob into `<OLLAMA_MODELS>/metadata/sha256-<hex>.json`, replacing two inconsistent capability implementations.
- Model requests: Upstage Solar Pro 4 (524K context, [#17773](https://github.com/ollama/ollama/issues/17773)) and Qwen3.8 on cloud ([#17720](https://github.com/ollama/ollama/issues/17720)).

## Performance & Optimization
- **MLX prefill regression traced**: ~3× slower in v0.32.14, largely restored in v0.32.15 pre-release; GGUF path unaffected ([#17884](https://github.com/ollama/ollama/issues/17884)).
- **MLX prefix cache now survives cancelled/resumed prefills** ([#17901](https://github.com/ollama/ollama/pull/17901)) — targets the agent-client pattern where 40k-token prefills are cancelled and retried from zero, appearing as an infinite hang.
- **Parallel requests for qwen35/qwen35moe unblocked** ([#17144](https://github.com/ollama/ollama/pull/17144)): the `numParallel = 1` hardcode is removable now that the upstream llama.cpp crash (fixed 2026-03-08) is resolved.

## Stability & Regressions
Ranked by severity:

1. **Critical — ROCm KV-state bleed on gfx1151 (Strix Halo)**: responses contaminated by previous requests' content ([#17847](https://github.com/ollama/ollama/issues/17847)). A data-isolation bug; no fix PR yet.
2. **Critical — ROCm wrong output above ~4k tokens on gfx1151**: model ignores instructions on long prompts; Vulkan and CPU correct on the same machine ([#17895](https://github.com/ollama/ollama/issues/17895)).
3. **High — DeepSeek cloud agent loops**: `deepseek-v4-flash:cloud` produced 193 identical tool calls (~31M tokens) via the Anthropic-compat endpoint ([#17617](https://github.com/ollama/ollama/issues/17617)); `:0731` repeated the same thinking block 221 times ([#17892](https://github.com/ollama/ollama/issues/17892)). No fix PR yet — treat both as active.
4. **High — qwen3.8 tool-loop 500 error**: `no user query found in messages` when tool responses overflow context ([#17778](https://github.com/ollama/ollama/issues/17778)). Fix PR exists: [**#17894**](https://github.com/ollama/ollama/pull/17894) preserves the most recent user message during truncation.
5. **High — qwen3.6 JSON regression**: `think: false` + `format: "json"` returns `{"thought": ...}` instead of the requested schema; regression from 0.31.2 → 0.32.x ([#17871](https://github.com/ollama/ollama/issues/17871)).
6. **Medium — CORS preflight `OPTIONS` returns 405** on recent releases, breaking browser `fetch()` against `/api/generate` ([#17887](https://github.com/ollama/ollama/issues/17887)). Fix PR exists: [**#17890**](https://github.com/ollama/ollama/pull/17890) returns `204` on loopback/private hosts.
7. **Medium — MLX KV-cache memory growth** per request on dense models, unreleased short of restart ([#17875](https://github.com/ollama/ollama/issues/17875)) — closed, appears fixed.
8. **Medium — Vulkan compute-ring watchdog timeout** on gfx1151 long-prompt prefill (`ErrorDeviceLost`); `num_batch=128` works around it ([#17870](https://github.com/ollama/ollama/issues/17870)).
9. **Medium — Image generation rejected** via `/api/generate` while `/api/tags` still advertises `"capabilities": ["image"]` — capability metadata now inconsistent with behavior ([#17893](https://github.com/ollama/ollama/issues/17893)).
10. **Low — Qwen3.6 35B Q4_K_M memory spikes** on RTX 5070 Ti since recent updates, hitting ceiling without filling VRAM ([#17517](https://github.com/ollama/ollama/issues/17517)).

Also closed today: qwen3.5 concurrent-call bug on DGX Spark ([#14621](https://github.com/ollama/ollama/issues/14621)) and qwen3.x vision chroma loss on the non-MLX path ([#17872](https://github.com/ollama/ollama/issues/17872)).

## What This Means for Application Developers
- **Avoid ROCm on Strix Halo (gfx1151) for correctness-critical workloads** — KV bleed and long-prompt corruption are silent. Pin to Vulkan or CPU backends, or gate on gfx1151 until fixes land. The same hardware is also hitting Vulkan watchdog timeouts, so validate thoroughly.
- **Tool-calling loops against Qwen renderer-based models** ("no user query found") should be resolved by [#17894](https://github.com/ollama/ollama/pull/17894) — truncation now preserves the latest user turn. Worth a focused regression test once merged.
- **Agent loops on cloud reasoning models are live**: the DeepSeek incidents burned ~31M tokens with zero usable output and no literal `</think>` involved. Put hard iteration/cost caps in your agent loop — do not rely on the server.
- **Browser-based frontends** hitting a local Ollama from web pages: `OPTIONS` preflight regressed on recent releases; the [#17890](https://github.com/ollama/ollama/pull/17890) fix restores 204s on loopback/private hosts.
- **MLX/Apple Silicon users**: skip 0.32.14 if prefill performance matters; the 0.32.15 pre-release restores throughput and adds prefix-cache persistence across cancelled requests — relevant for agent clients with short timeouts.
- **Monitoring gap persists**: the `/metrics` endpoint request ([#3144](https://github.com/ollama/ollama/issues/3144), 114 👍, open since March 2024) still has no PR. GPU/request metrics remain observable only via external scraping or debug logs.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-08-21

## 1. Today's Highlights

No new release shipped in the last 24h. The project focused on multi-pod billing correctness and proxy availability: PRs landed for atomic batch-cost claiming (#37685), event-loop-safe token counting (#37697), and faster `/metrics` rendering (#37702), plus an e2e suite pinning recent cache/tier billing fixes (#37607). A security-sensitive `/health` leak (#36898) and a stale-spend budget enforcement bug (#27735) remain open.

## 2. Releases & Breaking Changes

None in the last 24h — no new versions, API/config changes, or migration notes to report.

## 3. New Model & Hardware Support

- **fal.ai / gpt-image-2** — Added support for `gpt-image-2` image generation via fal.ai, including mapping for `n`, `size`, `quality`, `output_format`, and a cost-map entry.  
  [PR #37729](https://github.com/BerriAI/litellm/pull/37729)

## 4. Performance & Optimization

- **Event-loop safety** — `token_counter` now encodes long text in bounded chunks and caps tiktoken work, preventing large/low-entropy prompts from blocking the proxy event loop.  
  [PR #37697](https://github.com/BerriAI/litellm/pull/37697)

- **Faster `/metrics`** — Registry rendering and gzip now happen off the event loop; concurrent scrapes are coalesced and `?name[]=` filters are honored.  
  [PR #37702](https://github.com/BerriAI/litellm/pull/37702)

- **Multi-pod job election** — Consolidating maintenance work so every pod/replica does not run the same job:
  - Owner election for auxiliary DB jobs: [PR #36618](https://github.com/BerriAI/litellm/pull/36618)
  - Single `reset_budget_job` sweeper per tick with bounded scan: [PR #36497](https://github.com/BerriAI/litellm/pull/36497)
  - Elected-job stagger fixes: [PR #36686](https://github.com/BerriAI/litellm/pull/36686)

- **DB pool config** — Read-replica URL now inherits configured writer connection/pool params instead of falling back to Prisma's CPU-based default.  
  [PR #37691](https://github.com/BerriAI/litellm/pull/37691)

- **JWKS resilience** — Fetch retries, stale-key fallback, and a 503 instead of a misleading 401 when the IdP is unreachable.  
  [PR #37690](https://github.com/BerriAI/litellm/pull/37690)

- **Rust core expansion** — `/chat/completions` is now routed through the Rust core for Anthropic and Bedrock deployments when `rust: true`.  
  [PR #37241](https://github.com/BerriAI/litellm/pull/37241)

## 5. Stability & Regressions

Ranked by severity:

- **Security / secret exposure** — `GET /health` still returns `extra_headers` and `aws_session_token` in plaintext. Open; no fix PR in this batch. Avoid exposing this endpoint publicly.  
  [#36898](https://github.com/BerriAI/litellm/issues/36898)

- **Billing correctness (multi-pod)** — Concurrent batch-cost polling can double-bill a completed batch. Fix PR claims rows atomically before billing.  
  [PR #37685](https://github.com/BerriAI/litellm/pull/37685)

- **Availability** — Large token counts could stall the event loop and trip liveness probes; fixed by #37697. Slow `/metrics` rendering was similarly fixed by #37702.

- **Budget enforcement** — Virtual keys can be rejected with `BudgetExceededError` while `/key/info` reports spend below budget; stale-spend root cause still open.  
  [#27735](https://github.com/BerriAI/litellm/issues/27735)

- **Closed cache/billing regressions** — OpenAI cache-write tokens dropped from cost calc (#33772), Responses API cache cost breakdown always null (#34309), Anthropic `/v1/messages` bridge reporting zero `cache_read_input_tokens` (#36091), and managed batch retrieve/cancel 403 (#32580) are all closed.

- **Translation correctness** — Anthropic system-role hoist invalidating the prompt-cache prefix was fixed (#36559). OpenAI gpt-5.6-family function-tool `reasoning_effort` errors were fixed (#33221). Open: `token_counter` rejects OpenAI-style `video_url` content blocks (#28071), and Snowflake Cortex streaming drops tool-calls (#30762).

- **Proxy/control plane** — Open issues: MCP auto-execute (`require_approval: "never"`) hijacks client-side tools from Claude Code (#37031); `provider_budget_config` reports `budget_reset_at` ~57 years out when Redis is absent (#37261); proxy fails to start after `uv tool update` due to FastAPI `get_flat_dependant` incompatibility (#36922); UI login broken (#23451).

- **Redis auth** — Azure AD/GCP IAM auth was missing from async Redis clients; PR applies credentials to all async client paths.  
  [PR #37740](https://github.com/BerriAI/litellm/pull/37740)

## 6. What This Means for Application Developers

- **Upgrade for billing truth** — If you rely on cache-cost breakdowns or batch spend, the closed fixes around OpenAI cache-write/Responses API and Anthropic bridge cache accounting are directly relevant; the batch double-billing fix (#37685) matters for multi-pod deployments.

- **Watch `/health` exposure** — Until #36898 lands, restrict network access to `/health`; it can leak configured `extra_headers` and AWS session tokens.

- **MCP auto-execution is risky with agentic clients** — Avoid `require_approval: "never"` when the same request also carries client-side tools (e.g. Claude Code Read/Bash/Edit), or wait for the fix to #37031.

- **Prompt caching** — If you use older Claude models without mid-conversation `system` support, hoisting system messages invalidates the cache prefix; the fix is in from #36559.

- **Ops/security** — Salt-key rotation is now safer with `LITELLM_SALT_KEY_PREVIOUS` (#37698), and JWKS/Redis auth hardening makes multi-cloud deployments more robust.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth Digest — 2026-08-21

## Today's Highlights

Unsloth shipped **v0.1.801-beta** with experimental Auto Compaction for long chats and preview LAN Remote Access, merging 200+ PRs. A major share of current PR activity is around `studiobench`, a real-path performance benchmark and A/B simulator for Studio, while CI regressions (71 failing repo tests, Anthropic SDK 1.0 breakage) already have open fix PRs. The most urgent user-facing bug is a macOS M3 system-wide flicker/instability when loading Qwen3.8-27B.

## Releases & Breaking Changes

- **v0.1.801-beta** — [release notes](https://github.com/unslothai/unsloth/releases)
  - **Auto Compaction (Experimental)** for continuing chats beyond context limits — closes the earlier [compaction feature request #7472](https://github.com/unslothai/unsloth/issues/7472).
  - **Remote & LAN Access (Preview)** for network access to Unsloth instances.
  - No explicit migration notes in the release body. If enabling LAN/remote access, review binding behavior; see the macOS `-H 0.0.0.0` security issue below.

## New Model & Hardware Support

- Release notes acknowledge **Qwen3.8-27B** and **Unsloth Desktop** as recently supported — [v0.1.801-beta](https://github.com/unslothai/unsloth/releases).
- **NVIDIA Linux desktop fixes in flight:** [PR #8884](https://github.com/unslothai/unsloth/pull/8884) disables the WebKitGTK dmabuf renderer on NVIDIA (not just Wayland), addressing desktop freezes on two Ubuntu/NVIDIA systems.
- **Open hardware/model gaps:**
  - **NVFP4 on RTX 5060 Ti 16 GB** fails to load — [Issue #8246](https://github.com/unslothai/unsloth/issues/8246).
  - **Ling 3.0** support requested for Studio — [Issue #8532](https://github.com/unslothai/unsloth/issues/8532).
  - **Reasoning effort slider / selector** missing for Qwen3.8-27B in Studio — [Issue #8881](https://github.com/unslothai/unsloth/issues/8881).
  - **Mac stability problem with Qwen3.8-27B** on Apple Silicon (see Stability).

## Performance & Optimization

- **`studiobench` is the main performance focus:**
  - [PR #9296](https://github.com/unslothai/unsloth/pull/9296) adds a real-path Studio benchmark and A/B simulator using real backend/SSE/rendering paths.
  - [PR #9297](https://github.com/unslothai/unsloth/pull/9297) adds verdict/statistical tools to prove a performance difference is real.
  - [PR #9341](https://github.com/unslothai/unsloth/pull/9341) adds math content to the corpus — previously **zero** dollar signs across 519,859 characters, making LaTeX costs unmeasurable.
  - [PR #9351](https://github.com/unslothai/unsloth/pull/9351) correctly measures per-character streaming cost and fixes mislabeled gap windows.
  - [PR #9356](https://github.com/unslothai/unsloth/pull/9356) makes the 500K-character rung actually produce data; the previous bench died during setup.
- **Run settings improvements** landed via [PR #9410](https://github.com/unslothai/unsloth/pull/9410): Mmap/Mlock options, draft KV cache dtype, checkpoints and cache RAM controls. [PR #9416](https://github.com/unslothai/unsloth/pull/9416) adds fallback to the legacy `--swa-checkpoints` spelling for compatibility.
- **Quantized KV cache with tensor splitting** is fixed in [PR #8939](https://github.com/unslothai/unsloth/pull/8939) — previously quantized KV cache types were silently dropped when tensor parallelism was enabled.
- **User-reported performance issue:** when context exceeds estimated VRAM capacity (13,056 tokens), the app falls back to system RAM, dropping throughput from ~50 tps to ~0.2 tps — [Issue #9343](https://github.com/unslothai/unsloth/issues/9343). No fix yet; no option to disable RAM fallback.

## Stability & Regressions

**Critical / system-level:**

- **macOS M3 + Qwen3.8-27B causes screen flickering, app-wide corruption, and “MacBook dying” behavior** — [Issue #9279](https://github.com/unslothai/unsloth/issues/9279). No fix PR yet.
- **`-H 0.0.0.0` serves the wrong IP address on macOS**, a security-relevant binding bug — [Issue #8868](https://github.com/unslothai/unsloth/issues/8868).
- **NVIDIA Linux desktop freeze** has a fix in [PR #8884](https://github.com/unslothai/unsloth/pull/8884).

**Training correctness:**

- **`embed_tokens` / `lm_head` are silently dropped from `target_modules` during CPT** — no warning, no training — [Issue #9326](https://github.com/unslothai/unsloth/issues/9326).

**CI / regression fixes in flight:**

- **71 repo tests are failing on `main`** after the #9410 merge; [PR #9437](https://github.com/unslothai/unsloth/pull/9437) repairs the suites.
- **Anthropic SDK 1.0 broke inference smoke workflows**; [PR #9432](https://github.com/unslothai/unsloth/pull/9432) pins `anthropic<1.0`.

**Functional bugs reported today:**

- Studio reports a local model is loaded, but every message returns HTTP 400 — [Issue #9398](https://github.com/unslothai/unsloth/issues/9398).
- Tool calling fails with NVIDIA Nemotron API because `tool_calls[0].function.arguments` is not valid JSON — [Issue #9338](https://github.com/unslothai/unsloth/issues/9338).
- Failed to load `ggml-org/sesame-csm-1b-GGUF` in Studio — [Issue #9430](https://github.com/unslothai/unsloth/issues/9430).
- macOS desktop app text encoding errors — [Issue #8594](https://github.com/unslothai/unsloth/issues/8594).
- Studio cannot run two consecutive web searches in the same chat — [Issue #9108](https://github.com/unslothai/unsloth/issues/9108).
- Intel backend reports a PyTorch/KernelPreference mismatch — [Issue #8972](https://github.com/unslothai/unsloth/issues/8972).
- Some models bypass `HF_ENDPOINT` and still download from `huggingface.co` — [Issue #1353](https://github.com/unslothai/unsloth/issues/1353).
- Model list API does not expose quantization variants (`Q8` vs `Q4_K_M`) — [Issue #9340](https://github.com/unslothai/unsloth/issues/9340).

**Stability fixes in flight:**

- [PR #8866](https://github.com/unslothai/unsloth/pull/8866) — queue media generation behind model teardown to prevent races.
- [PR #9433](https://github.com/unslothai/unsloth/pull/9433) — keep unrunnable speech GGUFs out of model pickers.
- [PR #9436](https://github.com/unslothai/unsloth/pull/9436) — LoRA finetune layer flags default to `True` so API/MCP callers do not silently train on nothing.

## What This Means for Application Developers

- **Tool-calling agents should validate JSON argument strings** when using cloud/API models; Unsloth Studio currently can emit malformed `tool_calls[0].function.arguments` with the NVIDIA Nemotron API — [Issue #9338](https://github.com/unslothai/unsloth/issues/9338).
- **If you drive training through the API/MCP interface, update clients now**: `finetune_language_layers`, `finetune_attention_modules`, and `finetune_mlp_modules` are being turned on by default in [PR #9436](https://github.com/unslothai/unsloth/pull/9436), changing behavior for callers that omitted them.
- **Local chat sessions are becoming more robust for long-lived agents**: [PR #9187](https://github.com/unslothai/unsloth/pull/9187) adds resume-after-disconnect for local Studio generation, and Auto Compaction in v0.1.801-beta helps beyond-context conversations.
- **Be explicit about model quantization** when using the model list API; the current API does not expose `Q8` vs `Q4_K_M` variants, so pin exact model IDs — [Issue #9340](https://github.com/unslothai/unsloth/issues/9340).
- **Avoid unbounded remote exposure**: with LAN Remote Access now in preview, verify the bound interface, especially on macOS where `-H 0.0.0.0` can serve the wrong address — [Issue #8868](https://github.com/unslothai/unsloth/issues/8868).
- **If you run on Apple Silicon, do not load Qwen3.8-27B on this build** until the system-level flickering issue is resolved — [Issue #9279](https://github.com/unslothai/unsloth/issues/9279).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*