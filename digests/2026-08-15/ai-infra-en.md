# AI Infrastructure Digest 2026-08-15

> Generated: 2026-08-14 23:11 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# Cross-Project AI Infrastructure Report — 2026-08-15

*Data window: 24-hour digests from vLLM, SGLang, llama.cpp, Ollama, LiteLLM, Unsloth*

---

## 1. Ecosystem Overview

The ecosystem is in "Day-0 chase" mode: all major inference engines are racing to enable the Kimi-K3 and DeepSeek-V4 architecture class (hybrid linear/MLA attention, latent MoE, multi-token prediction), while the local tier — llama.cpp, Ollama, Unsloth — shipped 14 releases in 24 hours and pushed Qwen3.8-27B and MiniMax-Text-01 onto laptops and developer machines. Speculative decoding (MTP, EAGLE3, DSpark, ReplaySSM) is now the default latency lever across serving engines, but the cluster of spec-decode bugs in this window indicates the machinery is young. AMD/ROCm enablement consumes a disproportionate share of attention across all six projects; it is simultaneously the fastest-growing hardware target and the largest source of production-blocking correctness defects. Gateway infrastructure is hardening into a control plane — LiteLLM's stability sprint and multi-tenant auth work signal the proxy layer has become critical-path infrastructure rather than an optional convenience layer.

---

## 2. Activity Comparison

*Counts reflect items referenced in each project's 24h digest, not full-repo totals.*

| Project | Issues (referenced) | PRs (referenced) | Releases (24h) |
|---|---|---|---|
| vLLM | 18 | 17 | 0 (nightly v0.26.x track) |
| SGLang | 24 | 17 | 0 |
| llama.cpp | 16 | 19 | 10 (b10425–b10435) |
| Ollama | 10 | 6 | 3 (v0.32.11–v0.32.13) |
| LiteLLM | 15 | 14 | 0 |
| Unsloth | 16 | 14 | 1 (v0.1.800-beta) |

**Interpretation:**

- **vLLM and SGLang are in feature-development mode** — high PR throughput, no tags, many ready-to-review patches. Expect behavior shifts across nightlies.
- **llama.cpp has the highest release cadence** (10 builds/day), consistent with a rolling local-runtime model; its PR count is also the highest, heavily weighted toward kernel fusions and correctness.
- **Ollama and Unsloth shipped user-facing value** in the same window — Qwen3.8 served locally and fine-tunable.
- **LiteLLM is in a stabilization sprint** — 14 PRs, zero releases, one critical regression (#36837) with both a revert and targeted fix open. Gateway users should expect build-level churn.
- **SGLang's issue count leads**, including CI health (3 broken / 11 flaky, #17050) — a signal that quality investment is catching up to feature velocity.

---

## 3. Model Support Race

| Model / Architecture | Shipped this window | In flight | Leader / momentum |
|---|---|---|---|
| **DeepSeek-V4 family** (sparse MLA, MTP, DSpark) | — | vLLM: gfx950 sparse-MLA decode (#52212), SM120 fixes (#51538), CUDA-graph region fix (#52401), adaptive verification (#52228). SGLang: TRT-LLM fused norm+RoPE (#32975), FlashInfer fused top-k (#33006). | **vLLM** leads on kernel depth and serving breadth; ROCm long-context correctness (#52109) is the production gate. |
| **Kimi-K3** (hybrid KDA + MLA, latent MoE) | — | vLLM: partial prefix cache (#50493), RecoverSSM (#51855), torch.compile on ROCm (#52190), ROCm tracking (#50682). SGLang: standard installs (#34886), DeepGEMM `situ` activation (#34883), PP8 TTFT bug (#34815). llama.cpp: core architecture PR in review (#26185). | **vLLM** has the broadest enablement surface; nothing shipped yet — SGLang's Day-0 latency issue and llama.cpp's review status keep the race open. |
| **Qwen3.8-27B / 2.4T** | **Ollama** v0.32.12/v0.32.13 (incl. MLX variant, developer-instruction handling). **Unsloth** v0.1.800-beta (Dynamic GGUFs at 17GB RAM, NVFP4 quants, fine-tuning). | — | **Co-lead, different layers**: Ollama for chat/serving; Unsloth for fine-tuning + local inference. |
| **MiniMax-Text-01 / MiniMax-M1** (lightning attention) | **llama.cpp** PR #27018 landed, closing #11290. | — | **llama.cpp** (first to support). |
| **NemotronLabs Voicechat 11B (S2S)** | — | SGLang PR #34873 (previously vLLM-only). | **SGLang**, pending merge. |
| **Granite4 Vision** | **llama.cpp** mtmd image-assembly fix (#26653). | — | **llama.cpp**. |

**Takeaway:** No engine has shipped production-ready Kimi-K3 or DeepSeek-V4 support yet — all are in pre-release enablement, with vLLM furthest ahead on kernel/serving work but blocked on ROCm correctness. Qwen3.8 is the only frontier-class model to reach shipped status this window, via the local tier (Ollama + Unsloth), not the datacenter engines.

---

## 4. Performance Frontier

Optimization effort this window is concentrated in five areas:

**1. Speculative decoding & MTP — the dominant theme.**
- vLLM: adaptive verification for non-dspark paths (#52228), 96.0s → 81.3s on DeepSeek-V4-Flash + MTP=3 at 2K/2K, concurrency 64; ReplaySSM state recovery (#51855); EAGLE3/dflash/dspark under pipeline parallelism unblocked (#50514).
- SGLang: GDN MTP cache mode with FlashInfer + overlapped CUDA-graph recovery (#30967).
- llama.cpp: MTP still crashing on Vulkan (#24492); spec-draft validation hardening (#27071).
- Maturity gap: vLLM's `bad_words` off-by-one in MRV2 spec decode (#52311) shipped silently since #33433.

**2. Quantization & numerical precision.**
- NVFP4 → MXFP4 online requantization for AMD MI355x (SGLang #29328); Unsloth shipped NVFP4 quants for Qwen3.8.
- Correctness watch: llama.cpp CUDA 13.2 corrupts IQ2_M/IQ3_S/IQ3_XXS outputs (Unsloth #4849) — pin CUDA < 13.0.
- DeepSeek router GEMM must stay fp32 on NPU, ROCm, and deterministic paths (SGLang #34861/#34857/#34758) — all three currently broken.

**3. Kernel specialization per silicon.**
- vLLM: gfx950 sparse-MLA decode (MI355X), workload-aware split policy (#52212); DeepGEMM gap mapping for SM120/SM121 consumer Blackwell (#41063).
- llama.cpp: SYCL dense FFN GLU fusion +2.8% (b10427); SYCL gated-delta-net writeback fusion (b10425); TILE quantized-KV decode **+42% to +169%** on Battlemage across Qwen3.6-35B, Gemma 4 (#26689).
- SGLang: DeepGEMM `activation="situ"` for MegaMoE (#34883).

**4. Serving-path latency & memory.**
- Ollama: metadata cache PR cuts ~300 ms per request by skipping repeated GGUF reads (#17752).
- llama.cpp: `/metrics` and `/slots` now non-blocking during `llama_decode()` (b10429) — monitors no longer stall generation; Jinja `gather_string_parts` quadratic fixed (b10435).
- vLLM: CPU/tiered KV offload connector assertion fixed (#52397).

**5. Distributed serving / disaggregation.**
- SGLang: PP8 disaggregated prefill on Kimi-K3 exposed a load-independent ~30s TTFT floor (#34815); Qwen3 MoE now supports DeepEP-class backends (Mooncake EP, EPLB) (#34810); Context Parallelism 2026 Q3 roadmap still open (#21788).
- vLLM: MRV1 vs MRV2 eager CUDA-graph region split affects ROCm DSV4 performance (#52401).

---

## 5. Layer Positioning

| Project | Layer | Primary deployment | Notable 24h signal |
|---|---|---|---|
| **vLLM** | High-throughput serving engine (model runner v2, CUDA graphs, tensor/pipeline parallel, spec decode) | Datacenter GPUs (H100/B300/MI3xx), DGX-class | Deepest kernel work; production blocked by ROCm correctness issues |
| **SGLang** | Serving engine with router-first design (disaggregated prefill/decode, NPU/ROCm coverage) | Datacenter + NPU + AMD | Kimi-K3 Day-0 topology bugs; DeepEP MoE backends |
| **llama.cpp** | Local/edge runtime (ggml, GGUF, CPU/GPU/Vulkan/SYCL/Metal/WASI) | Single-node edge, laptops, Intel/AMD iGPU | 10 releases in 24h; MiniMax + SYCL kernel wins |
| **Ollama** | Local developer runtime + model distribution + agent launcher | Dev machines, small servers, agent workflows | `ollama launch` now supports DeepSeek Harness and Muse Code; Qwen3.8 shipped |
| **LiteLLM** | LLM gateway / control plane (auth, budgets, routing, observability) | In front of any upstream provider | Critical Admin UI regression; stability sprint declared |
| **Unsloth** | Fine-tuning framework + local inference (Studio, Dynamic GGUFs, MLX serving) | Training workstations, local servers | Qwen3.8 fine-tune + 17GB RAM local inference; ROCm/AMD fixes in review |

**Overlaps:** llama.cpp is the reference backend underneath both Ollama and Unsloth Studio — the CUDA 13.2 IQ-quant corruption (#4849) surfaced in Unsloth but is an upstream llama.cpp toolchain bug. vLLM and SGLang are head-to-head at the serving layer; SGLang differentiates on NPU coverage and router-centric architecture, vLLM on model-runner maturity and CUDA-graph depth. LiteLLM is provider-agnostic and sits above all of them, which is why gateway regressions (brotli passthrough, Admin UI auth) ripple across every downstream deployment.

---

## 6. Trend Signals

1. **Day-0 architecture support is the competitive frontier.** Kimi-K3 and DeepSeek-V4 dominate every engine's activity; correctness on ROCm/consumer silicon is now the gating factor, not feature count. Watch vLLM #52109 (silent DSV4 retrieval corruption on MI325X) and SGLang #34718 (sparse-attention indexer illegal memory access on long context).

2. **Speculative decoding is table stakes but not yet stable.** Every engine is investing — MTP, EAGLE3, DSpark, ReplaySSM, adaptive verification — yet off-by-one sampling (#52311), model-class rejection under PP (#50514), and Vulkan MTP crashes (#24492) show the stack needs hardening. Test spec-decode paths explicitly, especially with banned-token suppression.

3. **AMD/ROCm is the top production risk.** Silent corruption (#52109), illegal memory access (#34718), VRAM misdetection (#16462), and CPU-only fallbacks (#8473) appear across vLLM, SGLang, Ollama, and Unsloth. The ecosystem is shipping fast on AMD; validation must go beyond "it launches" to long-context and determinism checks.

4. **Quantization is splitting into two tracks with different risk profiles.** Datacenter track shifts to NVFP4/MXFP4 (SGLang #29328, Unsloth NVFP4 quants); local track remains IQ/GGUF with the CUDA 13.2 corruption bug (#4849) as a reminder that quant correctness is toolchain-fragile. Pin builds, validate outputs.

5. **The local tier crossed a usability threshold.** Qwen3.8-27B runs in 17GB RAM via Dynamic GGUFs; MiniMax-Text-01 landed in llama.cpp; MLX models are now servable via OpenAI-compatible APIs (Unsloth #8768); Ollama added first-class agent integrations (`launch dsh`, `launch muse`). Application developers should re-baseline their local fallback tier — it is no longer a toy.

6. **Gateway layer is becoming reliability-critical.** LiteLLM's Admin UI lockout (#36837), brotli passthrough corruption (#36977), and Langfuse credential leak (#36862) show the proxy layer is now in the critical path. Stability sprints and CI-quality initiatives (SGLang #20865, LiteLLM #30484) indicate the industry is paying down feature-velocity debt.

**Actionable watchlist:**

- **Do not serve DeepSeek-V4 on MI325X/MI350-class ROCm** until #52109 (vLLM) / #34718 (SGLang) are fixed — validate long-prompt behavior first.
- **Pin llama.cpp/Unsloth builds on Intel/oneAPI** — A770 is fully broken at b10428 (#27063); Lunar Lake has a confirmed null-ptr crash (#27046).
- **Avoid LiteLLM builds containing PR #36837** until #36982/#36976 merges; the Admin UI will 404.
- **Pin quant toolchains to CUDA < 13.0** for IQ quants (#4849).
- **Track Ollama #17752** — the metadata cache is a ~300 ms/request latency win for short calls once merged.
- **Freeze a known-good commit for DSV4/Kimi-K3 serving** — vLLM nightly behavior is shifting with MRV1/MRV2 CUDA-graph changes (#52401).

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest — 2026-08-15

Source: [github.com/vllm-project/vllm](https://github.com/vllm-project/vllm) · Activity window: last 24h

## 1. Today's Highlights

No release was cut in the last 24 hours, but a surge of ready-to-review bugfix PRs landed covering DeepSeek V4 CUDA-graph region selection, an MRV2 spec-decode sampler off-by-one, the `/inference/v1/generate` `n>1` frontend bug, and a ROCm Docker pybind11 incompatibility. On the issue side, attention remains concentrated on DeepSeek-V4 and Kimi-K3 enablement for ROCm, plus a fresh `libcudart.so.13` import failure affecting `vllm==0.21.0`.

## 2. Releases & Breaking Changes

None. No new tags or releases in the last 24 hours; the project remains on the `v0.26.x` nightly track.

## 3. New Model & Hardware Support

- **Kimi-K3 on ROCm** — Upstream enablement is tracked in [#50682](https://github.com/vllm-project/vllm/issues/50682), covering AITER fused-MoE baselines and Day-0 features on MI300/MI325.
- **Kimi-K3 partial prefix cache hit under DCP** — [PR #50493](https://github.com/vllm-project/vllm/pull/50493) (ready) adds hash-aligned partial-prefix reuse for FullAttention plus aligned Mamba, fixing MRV2 block-table geometry.
- **Kimi-K3 RecoverSSM (ReplaySSM)** — [PR #51855](https://github.com/vllm-project/vllm/pull/51855) adds a state-recovery path for speculative KDA decoding with DSpark under Model Runner V2 (`--use-replayssm`, `mamba_cache_mode=align`).
- **Kimi-K3 torch.compile on ROCm** — [PR #52190](https://github.com/vllm-project/vllm/pull/52190) enables `torch.compile` so AITER post-grad fusion passes (`fused_qk_rmsnorm_kernel`, `allreduce_fusion_kernel_1stage`) can fire.
- **DeepGEMM SM 12.x coverage** — [#41063](https://github.com/vllm-project/vllm/issues/41063) maps remaining kernel gaps for DeepSeek-V4-Flash on consumer Blackwell (RTX 50 / GB10).
- **DeepSeek-V4 ROCm roadmap** — [#41820](https://github.com/vllm-project/vllm/issues/41820) tracks end-to-end enablement of mHC/HCA/CSA/MoE/MTP on ROCm.
- **ViT full CUDA graph (multimodal)** — RFC [\#38175](https://github.com/vllm-project/vllm/issues/38175) proposes full CUDA-graph capture of the ViT encoder for Qwen3-VL/3.5, GLM-V, and Kimi K2.5 production serving.

## 4. Performance & Optimization

- **MRV2 adaptive verification** — [PR #52228](https://github.com/vllm-project/vllm/pull/52228) adds acceptance estimation for non-dspark adaptive verification. Reported speed-bench 2K/2K, concurrency 64, DeepSeek-V4-Flash + MTP=3: 256/256 successful requests with durations of 96.0s vs. 81.3s across two runs.
- **gfx950 sparse-MLA decode** — [PR #52212](https://github.com/vllm-project/vllm/pull/52212) optimizes the in-tree Triton DeepSeek-V4 sparse-MLA decode path for MI355X, adding a gfx950 specialization and workload-aware split policy (no change to non-gfx950 paths).
- **DeepSeek V4 eager CUDA-graph region** — [PR #52401](https://github.com/vllm-project/vllm/pull/52401) picks the eager cudagraph region per model runner instead of a global default. This restores MRV1 on ROCm (still faster for DSV4 there) after [#51430](https://github.com/vllm-project/vllm/issues/51430) narrowed the region.
- **Erratic MI325X MTP performance** — [#51853](https://github.com/vllm-project/vllm/issues/51853) reports poor, scattered DeepSeek-V4-Pro MTP results on gfx942 (TP8) on agentic-trace workloads; ROCm kernels flagged as untuned.
- **Qwen3.5-35B-A3B dflash** — [#50722](https://github.com/vllm-project/vllm/issues/50722) reports poor throughput with and without dflash; draft accepted length is only 5–6.

## 5. Stability & Regressions

Ranked by severity:

- **DeepSeek-V4-Flash silent retrieval corruption on ROCm** — [#52109](https://github.com/vllm-project/vllm/issues/52109) (new): prompts ≥4–5k tokens on MI325X with AITER sparse indexer silently corrupt retrieval; reproduces even with the open-PR backports removed. No fix PR yet.
- **`libcudart.so.13` ImportError** — [#52300](https://github.com/vllm-project/vllm/issues/52300) (new): `pip install vllm==0.21.0` fails at import on CUDA 12.6/PyTorch 2.11; likely a wheel/CUDA-version mismatch in the 0.21.0 artifact.
- **ROCm worker crash past 2048 tokens** — [#48266](https://github.com/vllm-project/vllm/issues/48266): GPU memory access fault on MI325X TP=4 with DeepSeek-V4 flash arch, `sparse_attn_indexer` + fp8 KV cache. No fix PR.
- **DeepSeekV4-Flash inline system messages** — [#46710](https://github.com/vllm-project/vllm/issues/46710): post-[#46025](https://github.com/vllm-project/vllm/pull/46025) behavior diverges across chat-template paths, producing incorrect output for in-place-preserved system messages.
- **Mamba-2 illegal instruction on SM121** — [#37431](https://github.com/vllm-project/vllm/issues/37431): DGX Spark (GB10) crashes in async Triton ops without `CUDA_LAUNCH_BLOCKING=1`.
- **Negative CUDA-graph memory estimate** — [#44740](https://github.com/vllm-project/vllm/issues/44740): MTP on Qwen3.6-35B/GB10 computes −35.7 GiB, causing KV-cache over-allocation and OOM.
- **Garbled DSV4 output under CUDA graph** — [#41331](https://github.com/vllm-project/vllm/issues/41331): concurrent identical requests produce corrupted output; 3 👍.
- **Ineffective prefix caching on Mamba-2/GDN hybrid** — [#51250](https://github.com/vllm-project/vllm/issues/51250): Qwen3.6-35B-A3B ignores prefix cache on GB10.

**Fix PRs in flight:**

- [PR #52311](https://github.com/vllm-project/vllm/pull/52311) — off-by-one in `bad_words` draft-prefix matching for MRV2 spec decode (present since #33433).
- [PR #52399](https://github.com/vllm-project/vllm/pull/52399) — `/inference/v1/generate` now returns all choices when `n > 1` (closes [#52398](https://github.com/vllm-project/vllm/issues/52398)).
- [PR #52397](https://github.com/vllm-project/vllm/pull/52397) — fixes `max_offload_tokens` assertion failure in the CPU/tiered KV offload connector.
- [PR #52396](https://github.com/vllm-project/vllm/pull/52396) — no longer raises on non-dict `hf_overrides` when resolving DSpark draft quant config.
- [PR #52395](https://github.com/vllm-project/vllm/pull/52395) — disables `supports_mm_prefix` on ROCm attention (prefix-LM not implemented).
- [PR #51538](https://github.com/vllm-project/vllm/pull/51538) — fixes seven defects blocking DSV4 sparse MLA on SM120 across plain decode, MTP, and DSpark.
- [PR #50272](https://github.com/vllm-project/vllm/pull/50272) — fixes spec decode for `short_conv` (LFM2) models.
- [PR #50514](https://github.com/vllm-project/vllm/pull/50514) — lifts the blanket rejection of EAGLE3/dflash/dspark under pipeline parallelism.
- [PR #52400](https://github.com/vllm-project/vllm/pull/52400) — drops pybind11 from `Dockerfile.rocm` to fix an AITER build incompatibility breaking Kimi-K2.6/K3.

## 6. What This Means for Application Developers

- **Pin and test before serving DeepSeek-V4 on ROCm.** Silent retrieval corruption ([#52109](https://github.com/vllm-project/vllm/issues/52109)) and worker crashes past 2K tokens ([#48266](https://github.com/vllm-project/vllm/issues/48266)) are production blockers; validate long-prompt behavior on MI325X before rollout.
- **Check your vLLM wheel's CUDA flavor.** If you hit `libcudart.so.13` errors with `vllm==0.21.0`, your runtime's CUDA 12.6 libs don't match the wheel's expectations — verify the wheel build matrix or upgrade the driver/runtime before filing new reports.
- **Spec-decode output filtering had a subtle off-by-one.** Applications relying on `bad_words`/banned-token suppression under MRV2 spec decode should track [PR #52311](https://github.com/vllm-project/vllm/pull/52311); it affects draft-prefix matching, not just final sampling.
- **`n>1` non-streaming responses were silently truncated** on `/inference/v1/generate`; [PR #52399](https://github.com/vllm-project/vllm/pull/52399) fixes it, but until merged, prefer `n=1` or streaming for multi-choice batches.
- **DSV4 lineage is in active flux.** The eager CUDA-graph region change ([PR #52401](https://github.com/vllm-project/vllm/pull/52401)) plus in-flight MRV2 fixes mean DeepSeek-V4 users should expect behavior shifts across nightly versions; freeze a known-good commit for production.
- **Two RFCs worth weighing in on:** standardized entrypoint error handling ([#48227](https://github.com/vllm-project/vllm/issues/48227)) and race-free port management ([#51275](https://github.com/vllm-project/vllm/issues/51275)) — both directly affect multi-instance and agentic serving deployments.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest — 2026-08-15

## Today's Highlights
No new releases were published in the last 24h. Kimi-K3 and DeepSeek-V4 dominate activity: a PP8 disaggregated-prefill deployment shows a load-independent ~30s TTFT floor ([#34815](https://github.com/sgl-project/sglang/issues/34815)), while a cluster of three issues flags that the DeepSeek router GEMM must stay fp32 on NPU, ROCm, and deterministic-inference paths ([#34861](https://github.com/sgl-project/sglang/issues/34861), [#34857](https://github.com/sgl-project/sglang/issues/34857), [#34758](https://github.com/sgl-project/sglang/issues/34758)). On bring-up, Kimi-K3 moves to standard install paths ([#34886](https://github.com/sgl-project/sglang/pull/34886)) and NemotronLabs Voicechat S2S support is landing via PR ([#34873](https://github.com/sgl-project/sglang/pull/34873)). CI on `main` is currently 3 broken / 11 flaky with 672 recently fixed ([#17050](https://github.com/sgl-project/sglang/issues/17050)).

## Releases & Breaking Changes
- **No releases in the last 24h.**
- **torchao removal pending:** the RFC to remove `--torchao-config` has been closed ([#34295](https://github.com/sgl-project/sglang/issues/34295)). The flag has been broken since 2026-04-19 (every value raises `ImportError`), has no CI coverage, and no upstream commits since 2024-12-20. Workloads still using it should migrate off now.
- **Loader-class routing fix:** automatic quantization routing can currently override an explicitly passed model-loader class; fix PR [#34880](https://github.com/sgl-project/sglang/pull/34880) resolves class-valued load formats before AutoRound/ModelOpt routing — relevant for programmatic callers of the serving API.

## New Model & Hardware Support
- **Kimi-K3:** now installable via standard Python/Docker paths instead of prerelease model-specific images ([#34886](https://github.com/sgl-project/sglang/pull/34886)); MegaMoE activation switches to an explicit DeepGEMM `activation="situ"` call ([#34883](https://github.com/sgl-project/sglang/pull/34883)).
- **NemotronLabs Voicechat 11B (S2S):** new PR adds SGLang support for a model whose deployment path previously supported only vLLM ([#34873](https://github.com/sgl-project/sglang/pull/34873)).
- **Qwen3.8-27B-FP8:** validated on a single DGX Spark (GB10/SM121) at `mem-fraction-static 0.70` ([#34872](https://github.com/sgl-project/sglang/issues/34872)).
- **AMD:** online NVFP4→MXFP4 requantization for ModelOpt/Quark checkpoints on MI355x, part 4/N ([#29328](https://github.com/sgl-project/sglang/pull/29328)); Kimi-K3 8-GPU MI35x nightly accuracy CI ([#32568](https://github.com/sgl-project/sglang/pull/32568)); GPT-OSS perf coverage added to the ROCm 7.2 nightly ([#34645](https://github.com/sgl-project/sglang/pull/34645)).
- **NPU:** LTX-2/2.3 diffusion inference optimization for NPU ([#34722](https://github.com/sgl-project/sglang/pull/34722)).
- **Apple Silicon:** RFC proposes replacing the MLX runner-stub split with a single Torch-owned SRT path plus an exported whole-model MLX region ([#32321](https://github.com/sgl-project/sglang/issues/32321)).

## Performance & Optimization
- **DeepSeek-V4 (TRT-LLM backend):** fused norm + RoPE + uniform fp8 store for the DSv4 sparse-attention path, in progress ([#32975](https://github.com/sgl-project/sglang/pull/32975)).
- **FlashInfer fused top-k** is now used for packed PAGED rows in DSA, replacing an SGL-kernel fallback ([#33006](https://github.com/sgl-project/sglang/pull/33006)).
- **GDN:** MTP cache mode for final-state recompute with FlashInfer kernel integration and overlapped CUDA-graph state recovery ([#30967](https://github.com/sgl-project/sglang/pull/30967)).
- **MiniMax-H3 `quality="high"`** validated on 8×B300 with a retuned Cache-DiT schedule `(4, 0.24, 3)` vs. the conservative H200 `(4, 0.04, 1)` ([#34841](https://github.com/sgl-project/sglang/pull/34841)).
- **M3 performance on MI350** improvement in progress ([#34014](https://github.com/sgl-project/sglang/pull/34014)).
- **CI efficiency:** Qwen3.5 FP8 GB300 nightly trimmed — TP4+MTP runs only at BS 1/4; TP4+DP4+DPA+MTP at BS 16 ([#34882](https://github.com/sgl-project/sglang/pull/34882)).
- **Roadmaps still open:** Context Parallelism 2026 Q3 ([#21788](https://github.com/sgl-project/sglang/issues/21788), 16 👍) and Decode CP + Helix Parallelism ([#29736](https://github.com/sgl-project/sglang/issues/29736)); kernel auto-tuner ([#13363](https://github.com/sgl-project/sglang/issues/13363)) and NCCL 2.30 integration ([#32774](https://github.com/sgl-project/sglang/issues/32774)) remain open as well.

## Stability & Regressions
Ranked by severity; all touched in the last 24h.

1. **DeepSeek-V4 sparse-attention indexer (`fp8_paged_mqa_logits`) illegal memory access on long-context requests** — crash; no fix PR yet ([#34718](https://github.com/sgl-project/sglang/issues/34718)).
2. **Diffusion attention-backend fallback change broke most models** — broad regression in the diffusion backend ([#34389](https://github.com/sgl-project/sglang/issues/34389)).
3. **Kimi-K3 PP8 disaggregated prefill: ~30s load-independent TTFT floor** — severe latency bug on a Day-0 topology ([#34815](https://github.com/sgl-project/sglang/issues/34815)).
4. **Hybrid-mamba + NEXTN speculative decode + lazy buffer: `TypeError` (`mamba_next_track_idx is None`) in `set_mamba_track_indices_from_reqs`** at `schedule_batch.py:1594`; duplicate closed as #34787 ([#34786](https://github.com/sgl-project/sglang/issues/34786)).
5. **DeepSeek-V4-Flash on GB200 aborts at startup with duplicate TVM FFI registration** — closed; confirm root cause before adopting ([#34858](https://github.com/sgl-project/sglang/issues/34858)).
6. **FlashInfer `RadixTopKRenormProbKernel_MultiCTA` CUDA coredump** ([#32283](https://github.com/sgl-project/sglang/issues/32283)).
7. **Router GEMM fp32 correctness:** NPU emits bf16 router output ([#34861](https://github.com/sgl-project/sglang/issues/34861)); ROCm casts the expert-correction bias to bf16 ([#34857](https://github.com/sgl-project/sglang/issues/34857)); deterministic inference lacks fp32 enforcement ([#34758](https://github.com/sgl-project/sglang/issues/34758)).
8. **`/v1/responses` `created_at` type inconsistency** — int in non-streaming, float in streaming events; breaks strict response schemas ([#34716](https://github.com/sgl-project/sglang/issues/34716)).
9. **`SGLANG_SIMULATE_ACC_LEN` degrades detokenization to O(n²)** — byte-fallback token prevents incremental-detokenization offsets from advancing ([#34740](https://github.com/sgl-project/sglang/issues/34740)).
10. **XPU:** Qwen3.5 GDN + speculative decode fails with `causal_conv1d_update_xpu()` unexpected kwarg `intermediate_conv_window` ([#34720](https://github.com/sgl-project/sglang/issues/34720)).
11. **HiCache L1+L2+Mooncake(SSD):** cache-hit rate drops under benchmark despite 2TB SSD with no eviction ([#33984](https://github.com/sgl-project/sglang/issues/33984)); cp=8 `num_requests_running` metric incorrect ([#31896](https://github.com/sgl-project/sglang/issues/31896)).
- **Fixes landed/ready:** Qwen3 MoE now supports DeepEP-class backends (Mooncake EP, EPLB) ([#34810](https://github.com/sgl-project/sglang/pull/34810)); single-prompt LoRA validation fixed with explicit `ValueError` ([#34885](https://github.com/sgl-project/sglang/pull/34885)); BaseConnector signal disposition and temp-dir cleanup fixed ([#34884](https://github.com/sgl-project/sglang/pull/34884)); Cache-DiT/breakable-CUDA-graph interaction closed ([#34177](https://github.com/sgl-project/sglang/issues/34177)).
- **Quality initiative:** [#20865](https://github.com/sgl-project/sglang/issues/20865) (83 comments) tracks adding unit coverage to core modules (`managers/`, `mem_cache/`, `entrypoints/`, `sampling/`, `parser/`, `function_call/`, `utils/`) — most of the 600+ current tests are E2E.

## What This Means for Application Developers
- **Kimi-K3 adopters:** use standard SGLang install paths now, and validate PP8 prefill latency before committing — the ~30s TTFT floor is load-independent ([#34815](https://github.com/sgl-project/sglang/issues/34815)).
- **DeepSeek-family users:** long-context serving on the sparse-attention path (`fp8_paged_mqa_logits`) is unsafe until [#34718](https://github.com/sgl-project/sglang/issues/34718) is fixed; router precision is also unresolved on NPU/ROCm and under deterministic inference.
- **API clients:** normalize `created_at` across `/v1/responses` streaming/non-streaming paths defensively ([#34716](https://github.com/sgl-project/sglang/issues/34716)).
- **torchao users:** the integration is dead and the removal RFC is closed; drop `--torchao-config` from launch scripts ([#34295](https://github.com/sgl-project/sglang/issues/34295)).
- **AMD MI350/MI355x users:** NVFP4 checkpoints will be loadable via online requantization to MXFP4 for efficient inference — track [#29328](https://github.com/sgl-project/sglang/pull/29328).
- **Voice/multimodal builders:** the NemotronLabs Voicechat S2S model is landing in SGLang; the vLLM-only constraint is going away ([#34873](https://github.com/sgl-project/sglang/pull/34873)).

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp Digest — 2026-08-15

## Today's Highlights

Ten releases landed in the last 24 hours. The server stack is the headline: `/metrics` and `/slots` are now readable during `llama_decode()` (b10429), eliminating head-of-line blocking for monitors, and `reasoning_effort` is now threaded from OpenAI Chat Completions into Jinja templates (b10434). Performance work continues on SYCL with two new kernel fusions, the Jinja parser's quadratic `gather_string_parts` was fixed, and MiniMax-Text-01/M1 support landed — while SYCL is reported *completely broken* on Intel A770 at b10428.

## Releases & Breaking Changes

- **b10435** — Jinja: fix quadratic cost in `gather_string_parts` ([#27034](https://github.com/ggml-org/llama.cpp/pull/27034))
- **b10434** — Chat: `reasoning_effort` added to `common_chat_templates_inputs`; available to Jinja templates with model-specific translations ([release](https://github.com/ggml-org/llama.cpp/releases/tag/b10434))
- **b10433** — ggml sync
- **b10431** — ggml: recurrent state rollback for `ggml_ssm_scan` (Nemotron); CPU rollback deferred to follow-up PRs ([#26623](https://github.com/ggml-org/llama.cpp/pull/26623))
- **b10430** — llama: allow virtual iGPU devices ([#26953](https://github.com/ggml-org/llama.cpp/pull/26953))
- **b10429** — server: `/metrics` and `/slots` accessible during `llama_decode()` ([#27041](https://github.com/ggml-org/llama.cpp/pull/27041))
- **b10428** — tests: scrub developer home paths from docs/fixtures ([#27043](https://github.com/ggml-org/llama.cpp/pull/27043))
- **b10427** — SYCL: fuse mul_mat(gate) + mul_mat(up) + GLU for q4_K dense FFN ([#26779](https://github.com/ggml-org/llama.cpp/pull/26779))
- **b10426** — ggml: force single thread on WASI ([#25686](https://github.com/ggml-org/llama.cpp/pull/25686))
- **b10425** — SYCL: fuse gated-delta-net state writeback cpy ([#26643](https://github.com/ggml-org/llama.cpp/pull/26643))

No breaking API/config changes. The only watch item: custom Jinja templates now receive a new `reasoning_effort` input field (b10434) — templates that iterate over inputs should tolerate unknown keys.

## New Model & Hardware Support

- **MiniMax-Text-01 / MiniMax-M1** — lightning-attention models supported via PR [#27018](https://github.com/ggml-org/llama.cpp/pull/27018), closing the long-standing request [#11290](https://github.com/ggml-org/llama.cpp/issues/11290)
- **Kimi-K3 text model** — hybrid KDA (linear) + MLA attention, cross-layer residual attention, latent MoE, situ activation ([#26185](https://github.com/ggml-org/llama.cpp/pull/26185))
- **Granite4 Vision** — mtmd image sequence assembly fix for image-description looping ([#26653](https://github.com/ggml-org/llama.cpp/pull/26653))
- **Virtual iGPU devices** — enabled in b10430 ([#26953](https://github.com/ggml-org/llama.cpp/pull/26953))

## Performance & Optimization

- **SYCL dense FFN fusion** (b10427): qwen2.5-3B-Instruct Q4_K_M **154.18 → 158.53 t/s (+2.8%)** at tg128; gemma-2-2b-it Q4_K_M also improved, on Arc Pro B70 ([#26779](https://github.com/ggml-org/llama.cpp/pull/26779))
- **SYCL gated-delta-net writeback fusion** (b10425): port of CUDA PR #23940; Qwen 3.6 27B Q4_K tg128 improved from 23.91 t/s on Arc Pro B70 ([#26643](https://github.com/ggml-org/llama.cpp/pull/26643))
- **SYCL quantized-KV TILE decode** ([#26689](https://github.com/ggml-org/llama.cpp/pull/26689)): TILE kernel wins decode across the board on Battlemage — **+42% to +169%** on Qwen3.6-35B, Gemma 4 26B/12B at 32K and 118K context, zero regressions
- **Jinja parser fix**: removes quadratic `vector::erase`/`string::append` behavior in `gather_string_parts` — significant for long multi-turn prompt assembly ([#27034](https://github.com/ggml-org/llama.cpp/pull/27034))
- **Arm CPU FA tuning**: `-fa auto` now resolves to *off* on Neoverse V1/V2 (Graviton3/4), where tiled flash-attention is slower than the direct path ([#27092](https://github.com/ggml-org/llama.cpp/pull/27092))
- **DSA RoPE optimization**: indexer head layouts for ds3.2/glm-dsa/dsv4 reworked to avoid `ggml_concat` on large tensors ([#27091](https://github.com/ggml-org/llama.cpp/pull/27091))
- **Weight prefetch PoC** — CUDA-only `--prefetch-weights` flag overlaps tensor-override prefetch with current-layer compute ([#21067](https://github.com/ggml-org/llama.cpp/pull/21067))
- Prefill-shaped `FLASH_ATTN_EXT` perf cases added to the test sweep ([#27088](https://github.com/ggml-org/llama.cpp/pull/27088))

## Stability & Regressions

**High severity:**

- **SYCL completely broken on Intel A770** — crashes at b10428 across multiple models (Qwen 3.5 9B, GPT-OSS-20B, Gemma 4 A4B); works on B60, suggesting an A770-specific regression. No fix PR yet ([#27063](https://github.com/ggml-org/llama.cpp/issues/27063))
- **SIGSEGV (null-ptr jump) on Intel Lunar Lake iGPU (Arc 140V)** — `resolve_fused_ops` false-positives; reproduces on gemma4/qwen2 and across builds b10050–b10423 ([#27046](https://github.com/ggml-org/llama.cpp/issues/27046))
- **Remote unauthenticated NULL-pointer dereference in ggml-rpc** — `graph_compute()` accepts node id 0 → nullptr in `cgraph->nodes`; remote DoS if RPC is exposed ([#25299](https://github.com/ggml-org/llama.cpp/issues/25299))
- **Windows ROCm 7.14 release missing `hipblas.dll`** — GPU not detected, `--list-devices` empty ([#26996](https://github.com/ggml-org/llama.cpp/issues/26996)); related report: ROCm release not using GPU at all ([#26964](https://github.com/ggml-org/llama.cpp/issues/26964))

**Medium severity:**

- **Gemma 4 31B MTP (draft-mtp) crashes on Vulkan** — "pre-allocated tensor cannot run operation NONE" ([#24492](https://github.com/ggml-org/llama.cpp/issues/24492))
- **llama-server crashes on CUDA with Qwen3.6-27B** — Windows, RTX 5060 Ti ([#23210](https://github.com/ggml-org/llama.cpp/issues/23210))
- **DeepSeek-V4-Flash degenerates into repetition and leaks special tokens** in long agentic chats on Metal ([#26694](https://github.com/ggml-org/llama.cpp/issues/26694))
- **ROCm gfx1151 RPC worker crash** in `GGML_OP_TOP_K` during DeepSeek V4 prefill past 4096 tokens ([#26746](https://github.com/ggml-org/llama.cpp/issues/26746))
- **SYCL host-pinned memory: high CPU utilization** for large allocations ([#27038](https://github.com/ggml-org/llama.cpp/issues/27038))
- **Gemma4Assistant init failure** — `llama_init_from_model` fails; 32 👍, still open ([#24343](https://github.com/ggml-org/llama.cpp/issues/24343))
- **Qwen3-VL image embedding doesn't work** on Vulkan ([#25088](https://github.com/ggml-org/llama.cpp/issues/25088))
- **KV cache `/slots/{id}?action=save` broken for vision models** ([#19466](https://github.com/ggml-org/llama.cpp/issues/19466))
- **Vulkan performance drop in recent builds** — open with 39 comments; no root cause yet ([#24066](https://github.com/ggml-org/llama.cpp/issues/24066))

**Fixes landed / in progress:**

- MTMD hardening merged: reject `n_merge <= 0`, enforce attention-window limits, reject negative `--spec-draft-n-max` ([#27071](https://github.com/ggml-org/llama.cpp/pull/27071))
- LoRA loader bounds check so truncated/corrupted adapters error instead of silently zero-padding ([#27056](https://github.com/ggml-org/llama.cpp/pull/27056))
- Context checkpoint preservation across slot save/restore for SWA/hybrid/recurrent models — addresses the Qwen3.6-27B full re-prefill problem ([#26004](https://github.com/ggml-org/llama.cpp/pull/26004), [#25592](https://github.com/ggml-org/llama.cpp/pull/25592); issue [#22746](https://github.com/ggml-org/llama.cpp/issues/22746) closed)

## What This Means for Application Developers

- **Polling `/metrics` and `/slots` is now non-blocking.** Monitor agents and control planes can sample slot state during active decode without stalling generation — a meaningful win for multi-slot server deployments (b10429).
- **`reasoning_effort` is template-accessible.** If you serve OpenAI-compatible `/chat/completions` with variable reasoning effort, custom Jinja templates can now react to it. Update custom templates to consume or safely ignore the new field (b10434).
- **New architectures to evaluate.** MiniMax-Text-01/M1 (lightning attention) landed, and Kimi-K3 (hybrid linear+MLA with latent MoE) is in review — both relevant for long-context and MoE serving ([#27018](https://github.com/ggml-org/llama.cpp/pull/27018), [#26185](https://github.com/ggml-org/llama.cpp/pull/26185)).
- **Pin builds on Intel/oneAPI stacks.** A770 is fully broken at b10428 and Lunar Lake has a confirmed null-ptr crash. If you ship SYCL binaries, hold at a known-good revision and track [#27063](https://github.com/ggml-org/llama.cpp/issues/27063) / [#27046](https://github.com/ggml-org/llama.cpp/issues/27046).
- **Security hygiene:** the ggml-rpc null-pointer dereference is a remote DoS if the RPC port is reachable; apply the MTMD input-validation fixes and the upcoming LoRA bounds check. Validate LoRA adapters before deployment ([#25299](https://github.com/ggml-org/llama.cpp/issues/25299), [#27071](https://github.com/ggml-org/llama.cpp/pull/27071), [#27056](https://github.com/ggml-org/llama.cpp/pull/27056)).
- **KV-cache save/restore for vision models remains broken**, and checkpoint preservation across slot save/restore is still landing — plan for full re-prefill on slot restore if you use SWA or hybrid/recurrent models with vision inputs ([#19466](https://github.com/ggml-org/llama.cpp/issues/19466), [#26004](https://github.com/ggml-org/llama.cpp/pull/26004)).

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Digest — 2026-08-15

## Today's Highlights

Ollama shipped three patch releases in the last 24 hours, headlined by Qwen 3.8 27B support in v0.32.12 and improved Qwen3.8 developer-instruction handling in v0.32.13. The `ollama launch` surface expanded to DeepSeek Harness and Meta's Muse Code, while a metadata-cache PR promises to cut per-request GGUF overhead by roughly 300 ms. Stability focus is on multiple AMD/CUDA regressions and an Ollama Cloud API 503 incident.

## Releases & Breaking Changes

- **v0.32.13** — Adds Qwen3.8 support for developer instructions.  
  https://github.com/ollama/ollama/releases/tag/v0.32.13
- **v0.32.12** — Adds Qwen 3.8 27B model support, with optimization for Apple Silicon.  
  https://github.com/ollama/ollama/releases/tag/v0.32.12
- **v0.32.11** — `ollama launch dsh` now supports DeepSeek Harness; `ollama launch muse` supports Meta's Muse Code.  
  https://github.com/ollama/ollama/releases/tag/v0.32.11

No explicit migration notes or intentional breaking changes were included in these releases.

## New Model & Hardware Support

- **Qwen 3.8 27B** is now supported in v0.32.12, including an MLX variant (`qwen3.8:27b-mlx`).  
  https://github.com/ollama/ollama/releases/tag/v0.32.12
- Qwen3.8 renderer and MLX import support landed in PR #17745, preserving Qwen3.5 architecture/parser behavior while adding reasoning-effort and preserved-thinking semantics.  
  https://github.com/ollama/ollama/pull/17745
- Qwen3.8 developer-instruction handling for OpenAI-compatible clients was added in PR #17749 and further hardened in PR #17757 by tolerating non-leading system messages.  
  https://github.com/ollama/ollama/pull/17749  
  https://github.com/ollama/ollama/pull/17757
- `ollama launch` now supports DeepSeek Harness and Muse Code as first-class agent integrations.  
  https://github.com/ollama/ollama/releases/tag/v0.32.11
- PR #17743 adds initial support for pulling sharded (multi-part) GGUF models from Hugging Face.  
  https://github.com/ollama/ollama/pull/17743

## Performance & Optimization

- **PR #17752** adds a model-metadata cache that avoids repeated GGUF metadata reads on every chat/generate call, reducing per-request overhead by approximately **300 ms**. It invalidates automatically when the model manifest changes.  
  https://github.com/ollama/ollama/pull/17752
- v0.32.12 describes Qwen 3.8 as specifically optimized for Apple Silicon, though no concrete throughput/latency numbers were published.  
  https://github.com/ollama/ollama/releases/tag/v0.32.12
- Related work on reducing front-end overhead includes optional embedding-normalization control in `/api/embed` (PR #17747), which also avoids a full re-embedding path when raw embeddings are required.  
  https://github.com/ollama/ollama/pull/17747

## Stability & Regressions

Ranked roughly by severity/impact:

- **CUDA illegal memory access in `launch_mul_mat_q` on qwen3.6:35b during prefill** — prompt-size dependent; regression between v0.31.2 and v0.32.9.  
  https://github.com/ollama/ollama/issues/17740
- **AMD Strix Halo VRAM detection regression in 0.30+ container images** — only 2 GB VRAM reported instead of system memory.  
  https://github.com/ollama/ollama/issues/16462
- **AMD Radeon 780M Vulkan regression in v0.32.11** — `ErrorDeviceLost` / “Not enough memory for command submission” on larger models.  
  https://github.com/ollama/ollama/issues/17748
- **Quantized KV cache causes mid-turn generation stops / missing tool calls** on qwen3.5/qwen3.6 under ROCm; severity tracks quant precision.  
  https://github.com/ollama/ollama/issues/17347
- **SillyTavern Text Completion returns empty responses** on recent versions; reverting to v0.32.7 restores behavior.  
  https://github.com/ollama/ollama/issues/17700
- **Nemotron3.5-lightning:30b stalls** after a number of tokens on AMD AI395+ (Framework Desktop).  
  https://github.com/ollama/ollama/issues/17692
- **Ollama Cloud API returning 503** — `api.ollama.cloud` down since Aug 14; website/proxied path partially working but slow.  
  https://github.com/ollama/ollama/issues/17756
- **qwen3.8:27b system-message 500 with Claude Code** — closed by developer-instruction handling PRs.  
  https://github.com/ollama/ollama/issues/17754  
  https://github.com/ollama/ollama/pull/17757
- **`/save` fails with “pull model manifest: file does not exist”** for nemotron-3.5-lightning despite a valid local manifest.  
  https://github.com/ollama/ollama/issues/17735
- **Modelfile `PARAMETER temperature` ignored on `/v1/chat/completions`** — OpenAI-compatible endpoint samples while `/api/chat` decodes greedily.  
  https://github.com/ollama/ollama/issues/17744

## What This Means for Application Developers

- **Coding agents using Qwen3.8 should upgrade to v0.32.13+** — developer-instruction handling and non-leading system-message fixes directly affect Claude Code, Codex, and similar OpenAI-compatible clients.  
  https://github.com/ollama/ollama/releases/tag/v0.32.13
- **The OpenAI-compatible endpoint still has edge-case gaps:** the `temperature` Modelfile issue (#17744) means applications should explicitly pass request-level sampling parameters if deterministic output matters.  
  https://github.com/ollama/ollama/issues/17744
- **If you rely on Ollama Cloud,** the `api.ollama.cloud` 503 is an active incident; plan fallback to local/self-hosted endpoints.  
  https://github.com/ollama/ollama/issues/17756
- **The upcoming metadata cache is a meaningful latency win** for short requests — roughly 300 ms removed per inference call once merged.  
  https://github.com/ollama/ollama/pull/17752
- **For AMD/Radeon users, pin known-good versions if you hit regressions:** Strix Halo detection and Vulkan `DeviceLost` issues are both version-specific.  
  https://github.com/ollama/ollama/issues/16462  
  https://github.com/ollama/ollama/issues/17748

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-08-15

## Today's Highlights
No releases shipped in the last 24 hours, but the PR queue is dense with high-impact fixes. The most urgent item is a **critical Admin UI regression**: PR #36837 ("stop the team fallback from widening model access") locks every user out of the dashboard with 404s, and both a revert ([#36982](https://github.com/BerriAI/litellm/pull/36982)) and a targeted auth fix ([#36976](https://github.com/BerriAI/litellm/pull/36976)) are open. Also notable: a fix for GPT-5.x `max_tokens: 1` health-probe 400s ([#36859](https://github.com/BerriAI/litellm/pull/36859)) and a passthrough bug where brotli-compressed Anthropic responses became unreadable ([#36977](https://github.com/BerriAI/litellm/pull/36977)). Maintainers also published a [Stability Sprint Roadmap](https://github.com/BerriAI/litellm/issues/30484), confirming stability work as first-class including a fix for inconsistent `/v1/model/info` responses.

## Releases & Breaking Changes
None in the last 24 hours.

## New Model & Hardware Support
No new model/hardware support landed this window. Relevant open/closed requests:
- **Fireworks AI models in Azure Foundry** (DeepSeek V3.2, gpt-oss-120b, Kimi K2.5, MiniMax M2.5) — closed feature request [Issue #26618](https://github.com/BerriAI/litellm/issues/26618)
- **Telnyx provider pricing/models** in `model_prices_and_context_window.json` (Kimi K2.6, GLM-5.1-FP8) — [Issue #28006](https://github.com/BerriAI/litellm/issues/28006)
- **Ollama text-to-image** via `litellm.image_generation` (x/flux2-klein) — [Issue #28026](https://github.com/BerriAI/litellm/issues/28026)
- **Azure AI Foundry Agents v2** (Responses API with `agent_reference`) — [Issue #25372](https://github.com/BerriAI/litellm/issues/25372)
- **Auto-populate `max_input_tokens`/`max_output_tokens`** for hosted vLLM/OpenAI-compatible backends — [Issue #27830](https://github.com/BerriAI/litellm/issues/27830)

## Performance & Optimization
No throughput/latency/memory figures landed this window. Optimization-adjacent work in progress:
- **Auto Router v2 `session_key_fallback`** derivation when `session_id` is absent — [PR #36930](https://github.com/BerriAI/litellm/pull/36930)
- **Shadow eval scoping**: jobs can now cover multiple keys with per-key turn budgets ([PR #36871](https://github.com/BerriAI/litellm/pull/36871)) and run in reverse direction to detect router-quality regressions after key adoption ([PR #36865](https://github.com/BerriAI/litellm/pull/36865))
- **MCP logging metadata hygiene** — dropping caller `host` and configured upstream headers from logged metadata reduces PII leakage in observability pipelines — [PR #36901](https://github.com/BerriAI/litellm/pull/36901)
- **Bedrock spend attribution** — opt-in forwarding of LiteLLM identity/metadata into Bedrock `requestMetadata` — [PR #36861](https://github.com/BerriAI/litellm/pull/36861)

## Stability & Regressions
Ordered by severity:

1. **CRITICAL: Admin UI fully locked out** — PR #36837 reads the UI's reserved session team as deleted, so every dashboard request 404s. Revert: [PR #36982](https://github.com/BerriAI/litellm/pull/36982); targeted fix exempting the reserved UI team: [PR #36976](https://github.com/BerriAI/litellm/pull/36976). Avoid builds containing #36837 until merged.
2. **Langfuse credential leak via trace steering** — `update_trace_keys` allowed copying any request-metadata key (including team Langfuse credentials) unfiltered onto traces. Fixed by restricting steering keys to real Langfuse trace fields: [PR #36862](https://github.com/BerriAI/litellm/pull/36862) (closed).
3. **Vertex AI custom `api_base` still requires Google credentials** — non-Vertex proxies crash with `DefaultCredentialsError`; credential-skip logic missing in `vertex_llm_base.py` — [Issue #19138](https://github.com/BerriAI/litellm/issues/19138)
4. **Anthropic prompt-cache invalidation** — mid-conversation system-role hoisting invalidates the entire prompt-cache prefix for pre-4.8 Claude models — [Issue #36559](https://github.com/BerriAI/litellm/issues/36559)
5. **GPT-5.x `max_tokens: 1` probes 400** — provider rejects `max_tokens` fitting no visible token; agent probes misread it as "model unavailable." Fix returns a length-truncated 200: [PR #36859](https://github.com/BerriAI/litellm/pull/36859)
6. **Passthrough brotli corruption** — client `Accept-Encoding` forwarded upstream; proxy can't decode brotli, `Content-Encoding` stripped → unreadable JSON. Fix: [PR #36977](https://github.com/BerriAI/litellm/pull/36977)
7. **Gemini `count_tokens` returns 0** — `litellm.acount_tokens()` returns `total_tokens=0` for `vertex_ai/gemini-*` because messages are never converted to Gemini contents. Fix PR: [PR #36981](https://github.com/BerriAI/litellm/pull/36981)
8. **Prisma crash on Windows** (LiteLLM 1.82.x / 1.83.0) — query engine crashes on first query; 1.81.16 is last working version — [Issue #25260](https://github.com/BerriAI/litellm/issues/25260)
9. **`store_prompts_in_spend_logs` broken in v1.93.0** — `LiteLLM_SpendLogs.messages` persisted as `{}` for both `acompletion` and `aresponses` — [Issue #34747](https://github.com/BerriAI/litellm/issues/34747)
10. **Anthropic `/v1/models` drops token limits** — missing nullable keys rejected by strict clients. Fix always emits `max_input_tokens`/`max_tokens` as `null` when unknown: [PR #36961](https://github.com/BerriAI/litellm/pull/36961)
11. **`response.incomplete` unhandled** in Responses→chat streaming transform (Azure OpenAI), dropping `content_filters` — [Issue #27186](https://github.com/BerriAI/litellm/issues/27186)
12. **`org_admin` gets 401 on `POST /team/update`** despite authorization — [Issue #27294](https://github.com/BerriAI/litellm/issues/27294)
13. **Tag budgets never reset** — `ResetBudgetJob` has no tag handler; tags stay blocked permanently after first overage — [Issue #27481](https://github.com/BerriAI/litellm/issues/27481)
14. **MCP guardrails invisible in monitoring** — 0 evaluations/blocks reported for MCP tool traffic; fix threads evaluations into monitor: [PR #36978](https://github.com/BerriAI/litellm/pull/36978)

Also closed this window: OpenAI gpt-5.6 family (`gpt-5.6-sol/luna/terra`) function-tool `reasoning_effort` failure ([#33221](https://github.com/BerriAI/litellm/issues/33221)); Python 3.14 uvloop startup crash ([#20933](https://github.com/BerriAI/litellm/issues/20933)).

## What This Means for Application Developers
- **If you run the Admin UI, verify your build**: anything including #36837 (~Aug 13–14) will 404 the dashboard. Pin before the regression or wait for the revert/fix to ship.
- **Don't probe GPT-5.x availability with `max_tokens: 1`** — it 400s. The #36859 fix is pending; workaround is probing with `max_tokens: 4`.
- **Anthropic passthrough users**: brotli-compressed upstream bodies may arrive unreadable until #36977 merges; the fix stops forwarding `Accept-Encoding`.
- **Vertex AI proxy deployments** relying on custom `api_base` without Google credentials remain broken (#19138) — plan credential injection until the skip logic lands.
- **Long-running tool-calling agents on Claude**: the system-role hoist silently defeats prompt caching, raising cost/latency; watch #36559.
- **Observability**: MCP guardrail eval/block counts are under-reported until #36978; spend-log prompt storage is unreliable on v1.93.0 — validate dashboards before relying on them.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth Digest — 2026-08-15

## Today's Highlights

Unsloth shipped **v0.1.800-beta** adding Qwen3.8-27B / Qwen3.8-2.4T local inference via Dynamic GGUFs on as little as 17GB RAM, plus NVFP4 quants and fine-tuning support. A wave of AMD-targeted fixes landed or entered review — including a ROCm AOTriton attention-gate fix ([#8821](https://github.com/unslothai/unsloth/pull/8821)) and Windows AMD VRAM reporting ([#8863](https://github.com/unslothai/unsloth/pull/8863)) — while a llama.cpp CUDA 13.2 regression was confirmed to corrupt IQ quant outputs ([#4849](https://github.com/unslothai/unsloth/issues/4849)). Studio also gained MLX model serving through its OpenAI-compatible API ([#8768](https://github.com/unslothai/unsloth/pull/8768)) and a partial-offload MTP performance fix ([#8875](https://github.com/unslothai/unsloth/pull/8875)).

## Releases & Breaking Changes

- **v0.1.800-beta** — Qwen3.8-27B and Qwen3.8-2.4T now run locally, including on 17GB RAM via Unsloth Dynamic GGUFs; NVFP4 quants uploaded; fine-tuning supported. [Documentation](https://unsloth.ai/docs/models/qwen3.8) · [Releases](https://github.com/unslothai/unsloth/releases)
- **CUDA 13.2 warning** — llama.cpp built with CUDA 13.2 produces gibberish for IQ3_S / IQ3_XXS / IQ2_M quants. Use CUDA 12.8 or 13.0 binaries (or Unsloth Studio, which compiles with 13.0). ([#4849](https://github.com/unslothai/unsloth/issues/4849))

## New Model & Hardware Support

- **Qwen3.8-27B / Qwen3.8-2.4T** — local inference, Dynamic GGUF (17GB RAM), NVFP4 quants, and fine-tuning in Unsloth. ([Guide](https://unsloth.ai/docs/models/qwen3.8))
- **MLX models via OpenAI-compatible API** — installed MLX models were invisible to `/v1/models` and chat-completions returned 404; PR [#8768](https://github.com/unslothai/unsloth/pull/8768) fixes listing and serving (fixes [#8748](https://github.com/unslothai/unsloth/issues/8748)).
- **Non-GGUF image/video models in Studio hub** — PR [#8855](https://github.com/unslothai/unsloth/pull/8855) enables the hub Run button for safetensors models (e.g., `Z-Image-Turbo`), not just GGUF variants.
- **Tracked, not yet shipped** — Ling 3.0 support request ([#8532](https://github.com/unslothai/unsloth/issues/8532)); AutoRound model loading fails despite `auto-round` installed ([#7997](https://github.com/unslothai/unsloth/issues/7997)).

## Performance & Optimization

- **Embedded MTP partial-offload fix** — Studio produced ~3.5 tok/s with Qwen3.8-27B UD-IQ2_M and default settings because the MTP head followed the main model's placement; PR [#8875](https://github.com/unslothai/unsloth/pull/8875) addresses placement under partial offload.
- **ROCm AOTriton attention gate** — PR [#8821](https://github.com/unslothai/unsloth/pull/8821) enables flash/mem-efficient SDPA for library users on ROCm; with the gate shut, SDPA falls through to MATH and finetuning OOMs at a fraction of held context ([#8819](https://github.com/unslothai/unsloth/issues/8819)).
- **Chat stream coalescing** — PR [#8845](https://github.com/unslothai/unsloth/pull/8845) merges streamed chunks that arrive before the browser's next frame so fast local replies no longer leave the UI rebuilding messages in a backlog.
- **Performance regression reported** — Qwen3.8-27B-NVFP4 shows extremely slow inference on RTX 5090 / Windows Studio web UI. ([#8861](https://github.com/unslothai/unsloth/issues/8861))

## Stability & Regressions

Ranked by severity:

1. **CUDA 13.2 IQ-quant gibberish** — correctness break affecting IQ2_M/IQ3_S/IQ3_XXS; closed with a workaround (CUDA < 13.0 or Studio). ([#4849](https://github.com/unslothai/unsloth/issues/4849))
2. **Windows installer 2-hour cap** — silent kill while downloading cu126 PyTorch, with no progress output; closed. ([#8698](https://github.com/unslothai/unsloth/issues/8698))
3. **ROCm SDPA fallback OOM** — training OOMs at a fraction of context on AMD; fix PR [#8821](https://github.com/unslothai/unsloth/pull/8821) in review. ([#8819](https://github.com/unslothai/unsloth/issues/8819))
4. **macOS desktop app** — second-launch failure on M4 ([#8610](https://github.com/unslothai/unsloth/issues/8610)); llama-server fails to start and idle RAM usage is excessive on M4/16GB ([#8566](https://github.com/unslothai/unsloth/issues/8566)).
5. **Transformers ≥4.43 in-place loss crash** — fatal `RuntimeError` during CPT/SFT; PR [#8869](https://github.com/unslothai/unsloth/pull/8869) proposed.
6. **Media generation races model teardown** — Studio image/video generation can race a model swap/unload; PR [#8866](https://github.com/unslothai/unsloth/pull/8866) queues generation behind teardown (fixes [#8309](https://github.com/unslothai/unsloth/issues/8309)).
7. **AMD detection/VRAM inconsistencies** — RX 5700XT not recognized ([#8529](https://github.com/unslothai/unsloth/issues/8529)); installer reports AMD GPU but backend runs CPU-only ([#8473](https://github.com/unslothai/unsloth/issues/8473)); Bazzite/Fedora installs CPU PyTorch on gfx1201 ([#8731](https://github.com/unslothai/unsloth/issues/8731)); Windows VRAM reporting fixed via LUID adapter counter join ([#8863](https://github.com/unslothai/unsloth/pull/8863)).
8. **Misc** — V1 endpoint setup issues and broken MCPs ([#8790](https://github.com/unslothai/unsloth/issues/8790)); WebKitGTK microphone permission failure on Ubuntu Mate ([#8678](https://github.com/unslothai/unsloth/issues/8678)); PDF attachments trigger tool-call errors ([#8858](https://github.com/unslothai/unsloth/issues/8858)); duplicate `.dist-info` metadata during Studio updates ([#8515](https://github.com/unslothai/unsloth/pull/8515)); version-verification probe relanded without encoded payloads after antivirus concerns ([#8835](https://github.com/unslothai/unsloth/pull/8835)); hardened pip/uv policy handling for installer dependencies ([#8781](https://github.com/unslothai/unsloth/pull/8781)); Agents-tab copy/remote-server error fix ([#8857](https://github.com/unslothai/unsloth/pull/8857)).

## What This Means for Application Developers

- **Qwen3.8-27B at 17GB RAM** makes a strong local model viable on developer laptops and CPU-bound edge hosts via Dynamic GGUFs — worth re-baselining your local-inference fallback tier.
- **Tool-using agents**: PR [#8581](https://github.com/unslothai/unsloth/pull/8581) preserves pre-tool reasoning inside the GGUF tool loop (fixes repeated MCP web searches), and PR [#8879](https://github.com/unslothai/unsloth/pull/8879) adds a current-date injection setting so agents stop planning searches around stale training cutoffs.
- **MLX on macOS**: Studio now exposes installed MLX models through `/v1/models` and chat-completions — no manual load step required.
- **IQ quant deployments**: pin llama.cpp to CUDA < 13.0 until the 13.2 corruption issue is resolved upstream.
- **Studio media APIs**: wait for the queued-teardown fix ([#8866](https://github.com/unslothai/unsloth/pull/8866)) before relying on image/video generation in automations that swap models.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*