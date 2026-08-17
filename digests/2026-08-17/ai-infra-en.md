# AI Infrastructure Digest 2026-08-17

> Generated: 2026-08-16 23:09 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# AI Infrastructure Ecosystem Cross-Project Report — 2026-08-17

## 1. Ecosystem Overview

The AI infrastructure stack is in a "correctness-hardening" phase: every major serving engine and local runtime is spending more cycles on caching bugs, memory safety, and regression control than on headline features. Serving engines (vLLM, SGLang) are consolidating internal abstractions (KV-cache layouts, model registration, scheduler invariants) while absorbing new hardware targets (NVIDIA Rubin, AMD MI45x, Intel XPU). Local runtimes (llama.cpp, Ollama) are shipping maintenance releases and patching memory-safety issues, but are simultaneously exposed to a wave of new-architecture integration pressure (Kimi, DeepSeek V4, Qwen3.x, Motif 3, BailingMoE3). The gateway layer (LiteLLM) is the only segment shipping stable releases, but shows the most churn in Anthropic-compatible and agent-facing surface area. Cross-cutting themes: speculative decoding is a persistent correctness liability, deterministic/greedy serving is not guaranteed, and AMD/ROCm is receiving a coordinated enablement push across all layers.

## 2. Activity Comparison

Counts reflect issues/PRs *referenced in the 24-hour digests*, not full GitHub totals.

| Project | Issues (referenced) | PRs (referenced) | Release status (24h) | Layer |
|---|---|---|---|---|
| vLLM | ~20 | ~18 | None — heavy refactoring | Production serving engine |
| SGLang | ~18 | ~15 | None — stability convergence | Production serving engine |
| llama.cpp | ~18 | ~18 | **3 releases** (b10451–b10453) | Local runtime / edge inference |
| Ollama | ~24 | ~12 | None — regression cluster | Local runtime + desktop |
| LiteLLM | ~17 | ~12 | **2 releases** (v1.97.0, v1.98.0-rc.1) | LLM gateway / proxy |
| Unsloth | ~24 | ~18 | None — Studio perf batch in review | Fine-tuning + local Studio app |

**Read:** llama.cpp and LiteLLM are in release mode; vLLM, SGLang, and Unsloth are in merge-pending hardening phases; Ollama is effectively frozen pending tool-calling fixes.

## 3. Model Support Race

| Project | New model / architecture support | Hardware enablement | Status |
|---|---|---|---|
| **vLLM** | Kimi-K2.6 (broken, #42426), DeepSeek V4 flash (regression, #51758), FlashInfer ReplaySSM for SSM/hybrid (#52506), Whisper (open help-wanted) | **NVIDIA Rubin sm_107** (CUDA 13.4rc1, #52379); ROCm Kimi-K3 roadmap (#50682); MatrixHub model source | Hardware-forward; model correctness lagging |
| **SGLang** | **SenseNova U1** native multimodal incl. T2I/IT2I APIs (#35038, landed); MAGI-2-preview diffusion (request, open); Kimi BCG CUDA graphs (#34245, landed) | AMD Q3 2026: MI45x, Ryzen AI Halo, Helios (#35003); Intel XPU blocked by pointer overflow (#35047); W4A8/NVFP4 on SM90 closed as inactive | Fastest model surface expansion; determinism broken on SM100 (#34683) |
| **llama.cpp** | **BailingMoE3** w/ Ling 3.0 + MTP (#26608); **Motif 3 Beta** GDLA attention (#26298); DSpark `speculators`-format draft checkpoints (#26275) | ROCm 7.14.0 / Ubuntu 26.04 base (#27145); Metal DIAG_MASK_INF (#27197); SYCL TILE decode on BMG (+42–169%) | Most aggressive new-arch adoption with 3 maintenance releases |
| **Ollama** | Qwen3-VL video (open PR); Solar Pro 4 request; DeepSeek V4 Pro request closed | MLX runner (macOS, broken); Vulkan multi-GPU desync; Jetson Orin regression | No meaningful model-support velocity; regression management dominates |
| **LiteLLM** | OpenCode provider (`opencode_go`, `opencode_zen`, 3 wire formats, #37103); ElevenLabs WebSocket TTS (#37084); Azure `gpt-realtime-2` pricing (#31565) | N/A (gateway) | Provider-surface expansion; gpt-5.4 Responses path still broken |
| **Unsloth** | Higgs TTS, MOSS TTS, MiniMax Music3 in Studio (#8794); MiniMax-H3 blocked by stale stable-diffusion.cpp build (#8507) | Docker for sm_80–sm_120 + aarch64 (#5748); Windows ROCm via `repo.radeon.com` (#4958) | Consumer/local-first enablement; Studio UX ahead of model depth |

**Who is ahead:** *llama.cpp* for raw model-architecture breadth (BailingMoE3, Motif 3 GDLA, DSpark formats). *SGLang* for multimodal/diffusion serving (SenseNova U1 landed during the window). *vLLM* for next-gen hardware readiness (Rubin/sm_107) and distributed serving infrastructure, but with visible model-specific regressions (Kimi-K2.6 corruption, DeepSeek V4 flash). Ollama is the laggard — its digest is dominated by qwen3.8 regressions and closed-by-rollback issues.

## 4. Performance Frontier

Optimization work clusters into four areas:

**KV cache & memory systems** (highest structural effort)
- **vLLM:** `KVCacheLayout` standardization ([L,B,H,N,C] vocabulary) across NVIDIA/ROCm/Intel/CPU/KV-connector paths (#51718, 6/N series); Mooncake KV-connector use-after-free fix (#52372).
- **SGLang:** unified full-attention + sliding-window pools with independent page tables (#35000); post-capture decode reserve raised 512→1536 MiB (#34996).
- **llama.cpp:** quantized KV decode (q4_0/q8_0) moved to SYCL TILE path — +42% to +169% decode on Qwen3.6-35B / Gemma-4 at 32K–118K context (#26689).
- **Ollama:** gemma4 memory regression on Jetson Orin (8GB exhausted even at low `num_ctx`, #17787) — unresolved.

**Kernels & quantization**
- **SGLang:** I-quant GGUF prefill 4–6× slower than llama.cpp — no MMQ kernel (#35019); Kimi-Linear Cake kernels pending FlashInfer #4535.
- **llama.cpp:** SYCL Q4_K multi-column MMVQ (#27062); Vulkan flash-attn tuning skipped on Vega (~17% slowdown, #26163); MMQ prefill unoptimized on gfx1201 (#27181).
- **vLLM:** SM120 NVFP4 GEMM workspace use-after-free fixed (#52553); PCIe-safe multi-GPU comms + FlashInfer spec-decode FULL CUDA graphs (#47979).

**Batching & scheduling**
- **vLLM:** opt-in `batched` EPLB policy for vectorized MoE packing (#52556); custom all-reduce ceiling raised for 8192-token prefill chunks (TP=2, #52555).
- **SGLang:** device-to-host sync removed via request-offset-derived multimodal placeholder counts (#34995); GC freeze after warmup to eliminate request-time pauses (#34999).
- **llama.cpp:** multi-GPU prefill pipeline scheduling RFC (#24219) — early stage.

**Distributed serving**
- **SGLang:** TP16 MNNVL regression — multinode fallback disables custom all-reduce v2 (#35061, fix open).
- **vLLM:** batch invariance tracking open (#27433); incompatible with CUDA graphs on SM<90 (#39096).
- **Ollama:** Vulkan multi-GPU VRAM desync (scheduler sees 15GB, llama-server sees 1.1GB, #17802).

## 5. Layer Positioning

| Layer | Projects | Core competence | Key differentiator | Current bottleneck |
|---|---|---|---|---|
| **Production serving engine** | vLLM, SGLang | Multi-GPU inference, continuous batching, prefix caching, spec decoding | vLLM: hardware breadth + KV-connector ecosystem; SGLang: radix cache + diffusion/multimodal | Caching/determinism correctness; regression velocity at minor upgrades |
| **Local runtime** | llama.cpp | GGUF, quantized kernels, broad edge hardware (CPU/SYCL/Vulkan/Metal/HIP) | New-arch adoption speed + quantized decode perf | Multi-GPU correctness; spec-divergence on quantized weights |
| **Local runtime + desktop distro** | Ollama | Consumer/developer-friendly model management, OpenAI-compat API | Distribution reach and UX | Tool-calling regressions; endpoint inconsistency (`/api/chat` vs `/v1/chat/completions`) |
| **Gateway / proxy** | LiteLLM | Model routing, auth, cost accounting, provider abstraction | Provider breadth + release cadence | Anthropic `/v1/messages` semantics; cost/token under-reporting blind spots |
| **Training / fine-tuning** | Unsloth | Memory-efficient fine-tuning, Studio local chat/tooling | Fine-tuning + inference in one desktop app | Studio UI scaling; tool-call failures via custom endpoints |

Positioning shifts to watch: **vLLM** is generalizing from a serving engine into a multi-backend inference platform (model registration rework, MatrixHub, KV connectors). **SGLang** is pushing toward unified generation+diffusion serving. **Unsloth** is the only player bridging training and inference UX, though its Studio layer currently lags the training core. **Ollama** and **LiteLLM** increasingly overlap at the API-compatibility boundary, but Ollama's instability there is pushing agent developers toward LiteLLM as the trustworthy intermediary.

## 6. Trend Signals

1. **Correctness has overtaken raw throughput as the top risk.** The most severe open issues are all silent-corruption class: SGLang radix-cache flips temperature=0 greedy outputs (#34683), vLLM Kimi-K2.6 emits `"!!!!!!!!!!"` (#42426), llama.cpp speculative decoding diverges on quantized weights (#25618), Ollama qwen3.8 tool-loop 500s (#17778). For production agents, **validated output stability now matters more than benchmark tokens/sec.**

2. **Determinism is not guaranteed by any serving stack.** SGLang's deterministic mode fails to boot on SM100; vLLM batch invariance breaks on SM<90 with CUDA graphs; cache hits can change outputs. Application developers relying on reproducible generation should add output-validation layers and pin versions.

3. **Speculative decoding is a cross-stack liability.** Draft-model crashes (vLLM TP>1 hidden-size mismatch), CUDA-graph capture failures (SGLang Inkling MTP), and quantized-weight divergence (llama.cpp) span every project. Treat spec decoding as experimental for quantized/TP>1 production paths until this settles.

4. **AMD/Intel enablement is coordinated but uneven.** ROCm work spans vLLM (Kimi-K3 baseline), SGLang (Q3 MI45x/Halo/Helios roadmap), llama.cpp (ROCm 7.14), and Unsloth (Windows ROCm, HIP/ROCR retry) — but Intel XPU is blocked by a single Triton pointer-table bug (SGLang #35047), and SGLang closed AMD dp-attention issues as inactive. Accelerator diversity will remain gated on vendor kernel maturity.

5. **Agent-facing API semantics are the new battleground.** LiteLLM's `/v1/messages` issues (dropped `stop_sequences`, misrouting to Responses API), Ollama's broken tool calls, and vLLM's echo/JSON-body frontend fixes all point to one conclusion: **the OpenAI/Anthropic wire formats are now the product surface**, and infrastructure teams are paying the cost of semantic drift between providers.

6. **Security hardening is back on the agenda.** LiteLLM ships cosign-verified images; vLLM is fixing API-key log redaction; llama.cpp landed LoRA bounds-checking against OOB reads and is merging GGUF/mmproj overflow fixes. If you serve untrusted model files or expose gateways, upgrade for the security fixes even when features look unchanged.

**Bottom line for decision-makers:** pin aggressively (vLLM 0.27.0 risky for DeepSeek V4; Ollama broken since 0.32.4; LiteLLM Bedrock rerank broken since v1.85); add output-validation and cost-accounting guards at the application layer; and allocate engineering time to re-testing cached/speculative paths after every minor upgrade. The next 4–6 weeks of vLLM KV-layout standardization and SGLang stability work should materially improve the baseline, but today's ecosystem favors conservative rollout.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest — 2026-08-17

## Today's Highlights
No new releases landed in the last 24 hours; the project is in a heavy refactoring/hardening phase. The most significant activity is the KV-cache layout standardization series ([#51718](https://github.com/vllm-project/vllm/pull/51718)), CUDA 13.4 prerelease enablement for NVIDIA Rubin (`sm_107`) ([#52379](https://github.com/vllm-project/vllm/pull/52379)), and a root-cause fix for GEMM workspace use-after-free crashes affecting SM120 NVFP4 serving ([#52553](https://github.com/vllm-project/vllm/pull/52553)). On the bug side, the long-running Kimi-K2.6 reasoning-output corruption issue ([#42426](https://github.com/vllm-project/vllm/issues/42426)) remains open at 93 comments, and a fresh upgrade regression with DeepSeek V4 flash on 0.26.0→0.27.0 ([#51758](https://github.com/vllm-project/vllm/issues/51758)) is drawing attention.

## Releases & Breaking Changes
None in the last 24 hours. For upgrade planning: [#51758](https://github.com/vllm-project/vllm/issues/51758) reports a new runtime error serving DeepSeek V4 flash after upgrading from 0.26.0 to 0.27.0 — pin versions until root-caused.

## New Model & Hardware Support
- **NVIDIA Rubin (`sm_107`) enablement**: CUDA 13.4rc1 prerelease image pipeline, including compatible PyTorch/torchaudio nightlies and driver-stub handling ([#52379](https://github.com/vllm-project/vllm/pull/52379)).
- **ROCm Kimi-K3 roadmap**: tracking issue for upstream feature enablement and performance on AMD; Day-0 baselines include AITER fused-MoE a16w4 (GENERAL) and a8w4 (INTERLEAVE) ([#50682](https://github.com/vllm-project/vllm/issues/50682)).
- **FlashInfer ReplaySSM**: WIP addition relevant to SSM/hybrid models ([#52506](https://github.com/vllm-project/vllm/pull/52506)).
- **Model registration rework**: capabilities can now be registered directly, moving model inspection further out of the parent process ([#52459](https://github.com/vllm-project/vllm/pull/52459)).
- **MatrixHub** documented as a self-hosted model-loading source alongside HF Hub and ModelScope ([#50492](https://github.com/vllm-project/vllm/pull/50492)).
- Whisper feature tracking remains an open help-wanted area ([#25750](https://github.com/vllm-project/vllm/issues/25750)).

## Performance & Optimization
- **KV-cache layout refactor (6/N)**: standardizes all KV-cache allocations on the logical `[L, B, H, N, C]` vocabulary via `KVCacheLayout` (RFC [#42082](https://github.com/vllm-project/vllm/issues/42082)); touches NVIDIA, ROCm, Intel GPU, CPU, and KV-connector paths ([#51718](https://github.com/vllm-project/vllm/pull/51718)).
- **Opt-in custom all-reduce ceiling for same-node TP=2**: new option to raise the 8 MiB default; motivated by 8192-token prefill chunks with hidden size 5120 in bf16 exceeding the ceiling ([#52555](https://github.com/vllm-project/vllm/pull/52555)).
- **SM120 PCIe serving stack**: SP/async-TP enablement, FlashInfer spec-decode FULL CUDA graphs, and PCIe-safe multi-GPU comms; behavior is feature-detected at runtime so it merges safely with older FlashInfer ([#47979](https://github.com/vllm-project/vllm/pull/47979)).
- **Vectorized EPLB packing**: opt-in `batched` policy vectorizes balanced MoE packing across layers on CPU, leaving the default policy unchanged ([#52556](https://github.com/vllm-project/vllm/pull/52556)).
- **Batch invariance tracking** ([#27433](https://github.com/vllm-project/vllm/issues/27433)) remains open with follow-up work; note the SM<90 incompatibility below.
- **FusedMoE custom-op unwrapping** remains an open feature for torch.compile compatibility and CPU-overhead reduction ([#31985](https://github.com/vllm-project/vllm/issues/31985)).
- **Prefix-cache observability**: additive local-vs-external hit breakdown in `prompt_tokens_details` (closes [#52137](https://github.com/vllm-project/vllm/issues/52137)) ([#52199](https://github.com/vllm-project/vllm/pull/52199)).

## Stability & Regressions
Ranked by severity; fix PRs noted where they exist.

1. **Kimi-K2.6 corrupted reasoning output**: intermittently emits only `"!!!!!!!!!!"` with null content under `--reasoning-parser kimi_k2` on 8×B200; open at 93 comments, no fix PR (affects v0.20.0 and v0.18.1) ([#42426](https://github.com/vllm-project/vllm/issues/42426)).
2. **DeepSeek V4 flash regression** after 0.26.0→0.27.0 upgrade; 20 comments, open ([#51758](https://github.com/vllm-project/vllm/issues/51758)).
3. **SM120 NVFP4 serving crashes**: root-caused to a shared GEMM workspace changing device address after CUDA-graph capture → use-after-free on replay. Fix PR keeps workspace addresses stable ([#52553](https://github.com/vllm-project/vllm/pull/52553), fixes [#52540](https://github.com/vllm-project/vllm/issues/52540)/[#34948](https://github.com/vllm-project/vllm/issues/34948)).
4. **Incorrect KV-cache hits after token truncation**: stale `Request.block_hashes` violates scheduler/prefix-hashing invariants; reproduced on `main` without a GPU ([#49377](https://github.com/vllm-project/vllm/issues/49377)).
5. **Hybrid-model prefix caching silently drops to 0%** for Mamba/attention models in `mamba_cache_mode="align"` when the checkpoint lands in request-unique tokens ([#45238](https://github.com/vllm-project/vllm/issues/45238)).
6. **Draft-model speculative decoding crashes at init under TP>1** when draft hidden_size > target; TRT-LLM fused allreduce+RMSNorm workspace is sized from target only ([#52023](https://github.com/vllm-project/vllm/issues/52023)).
7. **`ParallelLMHead` AttributeError** (`output_size_per_partition`) on aarch64 ([#52434](https://github.com/vllm-project/vllm/issues/52434)); plus **MoE expert-divisibility assertion** when 256 physical experts aren't divisible by `ep_size=3` ([#52435](https://github.com/vllm-project/vllm/issues/52435)).
8. **Partial LoRA regression** on Qwen3.5/3.6 GatedDeltaNet (`in_proj_qkv` without `in_proj_z`) crashes in `expand_packed_lora`; regression from [#37912](https://github.com/vllm-project/vllm/pull/37912) ([#47639](https://github.com/vllm-project/vllm/issues/47639)).
9. **Batch invariance breaks with torch.compile/CUDA graphs on SM<90** (L4/Ampere/Ada) ([#39096](https://github.com/vllm-project/vllm/issues/39096)).
10. **Mooncake KV-connector data corruption**: async store jobs could read freed GPU blocks and mis-key data; fixed by referencing blocks for in-flight jobs and keying the ledger by `store_job_id` ([#52372](https://github.com/vllm-project/vllm/pull/52372), fixes [#52360](https://github.com/vllm-project/vllm/issues/52360)/[#51637](https://github.com/vllm-project/vllm/issues/51637)).
11. **Frontend fixes in flight**: batched chat `echo=true` prepends the user prompt instead of the assistant turn ([#52529](https://github.com/vllm-project/vllm/pull/52529)); non-object JSON bodies surface as HTTP 500 instead of a validation error ([#52528](https://github.com/vllm-project/vllm/pull/52528)); oversized media is now rejected before full download ([#51896](https://github.com/vllm-project/vllm/pull/51896)); `api_key` redaction in startup logs ([#52523](https://github.com/vllm-project/vllm/pull/52523)).
12. **Model Runner V2 fixes**: ROCm FULL CUDA-graph capture now bound to the `graph_capture` stream ([#52538](https://github.com/vllm-project/vllm/pull/52538)); Gumbel sampling handles non-finite logits ([#43249](https://github.com/vllm-project/vllm/pull/43249)).

Also notable: closed MTP streamed-text corruption (words dropped at quote/byte-merge boundaries) ([#52469](https://github.com/vllm-project/vllm/issues/52469)), and a V1 scheduler fix for priority-queue preemption re-admission omitting `num_preemptions` ([#51574](https://github.com/vllm-project/vllm/pull/51574), fixes [#41951](https://github.com/vllm-project/vllm/issues/41951)).

## What This Means for Application Developers
- **If you serve Kimi-K2.6**: the `"!!!!!!!!!!"` reasoning-field corruption is a known, unfixed issue — pin versions and add output validation until [#42426](https://github.com/vllm-project/vllm/issues/42426) is resolved.
- **Log hygiene**: `--api-key` / `VLLM_API_KEY` is currently printed verbatim in the non-default args log; the redaction fix ([#52523](https://github.com/vllm-project/vllm/pull/52523)) matters for any production deployment using API-key auth.
- **Before upgrading across minor versions**: track [#51758](https://github.com/vllm-project/vllm/issues/51758) if you serve DeepSeek V4 flash; the 0.26.0→0.27.0 path is currently risky.
- **Speculative decoding users**: the MTP streaming corruption has been closed out ([#52469](https://github.com/vllm-project/vllm/issues/52469)), but draft-model TP>1 deployments with hidden-size mismatch still crash at init ([#52023](https://github.com/vllm-project/vllm/issues/52023)).
- **Cache observability**: once [#52199](https://github.com/vllm-project/vllm/pull/52199) lands, `prompt_tokens_details` will expose local vs external prefix-cache hits — useful for debugging multi-node KV-connector setups and catching issues like [#45238](https://github.com/vllm-project/vllm/issues/45238).
- **Frontend hardening**: several 500-class errors (non-object JSON bodies, oversized media, echo behavior) have fixes in review; expect cleaner error semantics in an upcoming release.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest — 2026-08-17

## 1. Today's Highlights

Serving-stability work is converging: PR #34996 raises the post-CUDA-graph-capture decode memory reserve from 512 MiB to 1536 MiB, and #34999 proposes freezing GC after warmup to eliminate request-time pauses. The model surface expands with native SenseNova U1 support (#35038) and a request to add the MAGI-2-preview audio-video diffusion model (#35011), while the AMD Q3 roadmap (#35003) previews MI45x, Ryzen AI Halo, and Helios support. On the risk side, a new report shows radix-cache hits flipping temperature=0 greedy outputs on Gemma-4 (#34683), and CI tracking stands at 3 broken / 11 flaky tests with 671 recently fixed (#17050).

## 2. Releases & Breaking Changes

No releases in the last 24 hours. Two config-surface changes are in flight:

- **[Merged] #34998 — EPLB balancedness reporting modes**: replaces the boolean Prometheus env-var toggle with explicit `--expert-balancedness-*` reporting modes, decoupling logging from model-path sync work. ([PR #34998](https://github.com/sgl-project/sglang/pull/34998))
- **[Open] #35062 — `python/sglang` package restructure**: removes the obsolete eval package and moves frontend config under `sglang.lang`; internal import renames will affect downstream forks that reach into these paths. **Migration note:** pin before upgrading if you touch `sglang.lang` internals. ([PR #35062](https://github.com/sgl-project/sglang/pull/35062))
- **[Open] #35060 — environ.py cleanup**: unifies env-var deprecation handling and removes dead descriptors; expected to change warning behavior for deprecated vars. ([PR #35060](https://github.com/sgl-project/sglang/pull/35060))

## 3. New Model & Hardware Support

- **SenseNova U1 (multimodal)**: PR #35038 adds native language/multimodal execution, bounded flow matching for image generation, OpenAI-compatible T2I/IT2I APIs, and scheduler-owned flow-prefill CUDA graph replay. ([PR #35038](https://github.com/sgl-project/sglang/pull/35038))
- **MAGI-2-preview (diffusion)**: request #35011 asks for joint audio-video generation support for SandAI's 114B MoE diffusion model — open. ([Issue #35011](https://github.com/sgl-project/sglang/issues/35011))
- **AMD Q3 2026 roadmap**: #35003 commits to Helios rack-scale systems, MI45x (gfx1250), and Ryzen AI Halo (gfx1151/1152) platforms. ([Issue #35003](https://github.com/sgl-project/sglang/issues/35003))
- **Kimi archs**: BCG (prefill breakable CUDA graph) enabled for Kimi architecture configs (#34245, landed); Kimi-Linear routing through native Cake kernels is pending FlashInfer #4535 (#34946, open). ([PR #34245](https://github.com/sgl-project/sglang/pull/34245), [PR #34946](https://github.com/sgl-project/sglang/pull/34946))
- **Intel XPU**: new bug #35047 reports Triton device-pointer tables overflowing `int64` on USM addresses — an XPU bring-up blocker. ([Issue #35047](https://github.com/sgl-project/sglang/issues/35047))
- **W4A8/NVFP4 on SM90**: the feature request for non-Blackwell NVFP4 MoE kernels was closed as inactive (#22459) — Hopper users should not expect this in the near term. ([Issue #22459](https://github.com/sgl-project/sglang/issues/22459))

## 4. Performance & Optimization

- **Memory**: post-capture decode reserve raised from 512 MiB to 1536 MiB (fixed floor) to protect runtime decode buffers after CUDA graph capture. ([PR #34996](https://github.com/sgl-project/sglang/pull/34996))
- **Tail latency**: #34999 freezes GC after warmup so tokenizer/scheduler/detokenizer processes avoid generation-2 collection pauses during serving. ([PR #34999](https://github.com/sgl-project/sglang/pull/34999))
- **Scheduler overhead**: #34995 removes a device-to-host synchronization by deriving multimodal placeholder counts from request offsets instead of the device mask. ([PR #34995](https://github.com/sgl-project/sglang/pull/34995))
- **Attention metadata**: #35000 adds support for unified full-attention + sliding-window pools with independent page tables (decode metadata no longer assumes legacy full-to-SWA slot mapping). ([PR #35000](https://github.com/sgl-project/sglang/pull/35000))
- **Speculative decoding**: #35058 simplifies `compute_spec_v2_logprobs` and skips identity gathers for linear-chain callers (DFLASH/DSPARK). ([PR #35058](https://github.com/sgl-project/sglang/pull/35058))
- **Correctness-linked perf fix**: #34997 fixes world-size-one aliasing in MLP batch sync where `expand().contiguous()` could alias fallback storage and corrupt masked writes. ([PR #34997](https://github.com/sgl-project/sglang/pull/34997))
- **Known gap**: I-quant GGUF checkpoints (`IQ1_*`–`IQ4_*`) have no MMQ kernel, making prefill **4-6× slower than llama.cpp** on identical weights; K-quant and legacy Q\* are unaffected. ([Issue #35019](https://github.com/sgl-project/sglang/issues/35019))
- **HiCache**: #34519 narrows `load_back_pending_id` to write-back mode only, reducing unnecessary pending-state scope. ([PR #34519](https://github.com/sgl-project/sglang/pull/34519))

## 5. Stability & Regressions

Ranked by severity:

1. **Radix cache changes greedy outputs + deterministic mode broken on SM100** — #34683: cache hits flip 18/40 temperature=0 generations on Gemma-4, and `--enable-deterministic-inference` fails to boot on SM100. No fix PR yet. High impact for anyone relying on reproducible serving. ([Issue #34683](https://github.com/sgl-project/sglang/issues/34683))
2. **Inkling MTP startup crash** — #35039: draft-extend CUDA graph capture fails with `AttributeError: 'NoneType' object has no attribute 'shape'` because `extend_prefix_lens` is `None` in the short-conv path. Blocks serving with Inkling+MTP. ([Issue #35039](https://github.com/sgl-project/sglang/issues/35039))
3. **Intel XPU pointer-table overflow** — #35047: `int64` Triton device-pointer tables truncate USM addresses; affects all XPU inference. ([Issue #35047](https://github.com/sgl-project/sglang/issues/35047))
4. **Diffusion CFG state leaks** — #35054 (TeaCache double-resets serial CFG and leaks state into CFG-parallel runs) and #35053 (Spectrum CFG parallel skips negative-branch init, reusing forecaster state across requests). Both new, no fixes yet. ([Issue #35054](https://github.com/sgl-project/sglang/issues/35054), [Issue #35053](https://github.com/sgl-project/sglang/issues/35053))
5. **HiCache timeout ignored** — #35012: `can_terminate_prefetch` doesn't honor timeout when `pool_transfers_done` is false, allowing prefetch to hang. ([Issue #35012](https://github.com/sgl-project/sglang/issues/35012))
6. **TP16 MNNVL all-reduce regression** — #35061: #32541's multinode fallback disables custom all-reduce v2 for eligible TP16 MNNVL groups; fix PR is open. ([PR #35061](https://github.com/sgl-project/sglang/pull/35061))
7. **`max_new_tokens` clipping at context boundary** — #33814: requests that fit are silently clipped by two tokens near `--context-length`; fix PR open. ([PR #33814](https://github.com/sgl-project/sglang/pull/33814))
8. **Community multi-node GGUF MoE report** — #30122: SGLang 0.5.14 multi-node Qwen3-235B GGUF deployment claimed to have 9 bugs; validate before relying on 0.5.14 for multi-node GGUF MoE. ([Issue #30122](https://github.com/sgl-project/sglang/issues/30122))

**Notable inactive closures** (auto-closed, no visible resolution): PD-disaggregation KV corruption (#23020), HiCache crash on Qwen3.5/3.6 Mamba-hybrid (#24121), NEXTN + structured output crash on Mamba-hybrid (#28407), and AMD dp-attention HIP kernel aborts (#31350, #31594). Users on these configs should re-test on current main. **CI health**: 3 broken, 11 flaky, 671 recently fixed ([#17050](https://github.com/sgl-project/sglang/issues/17050)).

## 6. What This Means for Application Developers

- **Deterministic serving is not guaranteed today**: with #34683, radix-cache hits can flip greedy outputs on Gemma-4 and deterministic mode is unusable on SM100. If you serve temperature=0 with caching enabled, validate output stability before upgrading and consider pinning a known-good commit.
- **GGUF I-quants are a prefill trap**: expect 4-6× slower prefill than llama.cpp with `IQ*` checkpoints. For production GGUF MoE, prefer K-quant or legacy Q\* while an MMQ kernel is missing.
- **Speculative decoding + structured output on hybrid models remains risky**: the NEXTN/xgrammar Mamba-hybrid crash (#28407) was closed inactive, not fixed — re-test that combination before relying on it.
- **Watch the tail-latency work**: GC freeze after warmup (#34999) and the larger post-capture memory reserve (#34996) are aimed squarely at long-running serving stability; both are worth adopting as soon as they merge.
- **Multi-node GGUF MoE on 0.5.14**: the community bug report (#30122) suggests real rough edges; upgrade and verify if you run Qwen3-235B-class GGUF across nodes.
- **Diffusion CFG parallelism has state-isolation bugs** (#35053/#35054): if you run TeaCache or Spectrum with CFG parallel, expect cross-request state leaks until fixed.
- **AMD/Intel users**: MI45x, Ryzen AI Halo, and Helios support is on the Q3 roadmap, but XPU currently has a blocking pointer-table bug (#35047) — plan around it for Intel accelerators.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp Digest — 2026-08-17

## Today's Highlights

Three maintenance releases landed (b10451–b10453) focused on robustness: LoRA tensor bounds validation, chat content handling refactor, and graph cleanup. A strong set of PRs addresses memory-safety bugs (integer overflows, mmproj metadata validation) and MTP/–fit-target correctness. On the model side, BailingMoE3 and Motif 3 Beta support are in flight, and SYCL TILE kernels show double-digit decode gains on BMG.

## Releases & Breaking Changes

- **b10451** — `llama : check LoRA tensor data is within file bounds` ([#27056](https://github.com/ggml-org/llama.cpp/pull/27056))  
  Prevents out-of-bounds reads when loading malformed LoRA adapters.
- **b10452** — `chat: refactor handling supports_string_content / supports_typed_content` ([#27130](https://github.com/ggml-org/llama.cpp/pull/27130))  
  Improves capability detection for chat content types; affects how string vs. typed content is normalized in server/chat paths.
- **b10453** — `model : remove some ggml_concat` ([#27176](https://github.com/ggml-org/llama.cpp/pull/27176))  
  Internal graph simplification; no user-facing behavior change.

No explicit breaking config/API changes were announced.

## New Model & Hardware Support

- **BailingMoE3** — PR [#26608](https://github.com/ggml-org/llama.cpp/pull/26608) adds support for BailingMoE 3, enabling Ling 3.0 with MTP.
- **Motif 3 Beta** — PR [#26298](https://github.com/ggml-org/llama.cpp/pull/26298) implements GDLA (Grouped Differential Latent Attention), an MLA-style low-rank attention with 16 GQA KV heads.
- **DSpark speculators-format checkpoints** — PR [#26275](https://github.com/ggml-org/llama.cpp/pull/26275) enables loading draft checkpoints exported via vLLM’s `speculators` format.
- **ROCm 7.14.0 Docker/backend** — PR [#27145](https://github.com/ggml-org/llama.cpp/pull/27145) updates the ROCm base image to Ubuntu 26.04 and adds newer GPU support.
- **Metal backend** — PR [#27197](https://github.com/ggml-org/llama.cpp/pull/27197) adds `GGML_OP_DIAG_MASK_INF` support, closing a long-standing Metal gap.
- **KleidiAI integration rework** — PR [#26077](https://github.com/ggml-org/llama.cpp/pull/26077) simplifies ARM CPU kernel integration via KleidiAI’s own CMake.

## Performance & Optimization

- **SYCL TILE for quantized KV decode** — PR [#26689](https://github.com/ggml-org/llama.cpp/pull/26689) gates decode with q4_0/q8_0 KV into the TILE path on BMG. Measured **+42% to +169%** decode improvement on Qwen3.6-35B, Gemma 4 26B and 12B at 32K/118K context, with zero regressions.
- **SYCL Q4_K multi-column MMVQ** — PR [#27062](https://github.com/ggml-org/llama.cpp/pull/27062) reduces redundant Q4_K weight reconstruction, improving SYCL performance for DFlash-style models.
- **Multi-GPU prefill scheduling RFC** — PR [#24219](https://github.com/ggml-org/llama.cpp/pull/24219) proposes intra-prompt pipeline scheduling to better utilize multiple GPUs during prefill.
- **Open performance regressions**:
  - HIP `GGML_HIP_ROCWMMA_FATTN=ON` causes up to **−41%** prefill regression on gfx1151 at long context ([#24437](https://github.com/ggml-org/llama.cpp/issues/24437)).
  - Vulkan flash-attention tuning is skipped on Vega/gfx90c when the driver reports 32768 B shared memory, causing ~17% slowdown ([#26163](https://github.com/ggml-org/llama.cpp/issues/26163)).
  - MMQ prefill on gfx1201 uses unoptimized paths for Q2_K/Q6_K ([#27181](https://github.com/ggml-org/llama.cpp/issues/27181)).

## Stability & Regressions

**Correctness bugs (highest severity):**

- **Speculative decoding output divergence** — greedy sampling with draft-MTP/draft-dspark diverges from vanilla on quantized targets (e.g. Q4_K_M); matches on bf16. Open: [#25618](https://github.com/ggml-org/llama.cpp/issues/25618).
- **Completions `logprobs` broken for eval** — `/v1/completions` with `echo: true` returns logprobs only for generated tokens, silently breaking lm-eval and similar harnesses. Open: [#27174](https://github.com/ggml-org/llama.cpp/issues/27174).
- **SM_60 (P100) quality loss** — FP32 math silently executed in FP16 on Pascal; fix merged in two forks but not upstream. Open: [#25593](https://github.com/ggml-org/llama.cpp/issues/25593).
- **Gemma 4 crashes with MTP** on CUDA (2080 Ti). Open: [#25522](https://github.com/ggml-org/llama.cpp/issues/25522).
- **Vulkan `--no-kv-offload`** produces gibberish or immediate EOS on Qwen3-Coder-Next / Qwen3.6-27B / 35B-A3B. Open: [#23321](https://github.com/ggml-org/llama.cpp/issues/23321), [#24519](https://github.com/ggml-org/llama.cpp/issues/24519).
- **Dual-GPU CUDA correctness** — Qwen3.6-27B garbled output on RTX 5060 Ti + RTX 3060; single GPU works. Open: [#26257](https://github.com/ggml-org/llama.cpp/issues/26257).
- **Qwen3-Coder parser** — lazy tool-call trigger never fires when model omits `<tool_call>` and `<function=`. Open: [#26987](https://github.com/ggml-org/llama.cpp/issues/26987).

**Crashes:**

- **ROCm TOP_K crash** — RPC worker crashes during DeepSeek V4 prefill after 4096 tokens ([#26746](https://github.com/ggml-org/llama.cpp/issues/26746)); related bitonic block-size overflow when `ncols > 1024` blocks ctx > 128K ([#27021](https://github.com/ggml-org/llama.cpp/issues/27021)).
- **SYCL split-mode tensor crash** — `dev2dev_memcpy` DEVICE_LOST on dual Arc Pro B70 ([#27198](https://github.com/ggml-org/llama.cpp/issues/27198)).
- **Vulkan load crash** on RX 7900 XTX with Gemma 4 / Muse Glimmer ([#27072](https://github.com/ggml-org/llama.cpp/issues/27072)).
- **CUDA kernel stall** killed by watchdog on RTX Pro 6000 Blackwell with Qwen3.8-27B Q8 ([#27102](https://github.com/ggml-org/llama.cpp/issues/27102)).
- **3-GPU tensor split crash** on 3×3090; works on 2 GPUs ([#26837](https://github.com/ggml-org/llama.cpp/issues/26837)).

**Fixes/PRs addressing stability:**

- **Tensor dimension overflow** — [#27204](https://github.com/ggml-org/llama.cpp/pull/27204) protects against overflow in shape validation.
- **Block-quantized `ggml_nbytes` integer overflow** (heap OOB read) — [#27200](https://github.com/ggml-org/llama.cpp/pull/27200).
- **mmproj/clip loader fuzz fixes** — validate scalar metadata types and layer counts in `clip_model_loader` ([#27202](https://github.com/ggml-org/llama.cpp/pull/27202)).
- **`llama-finetune` KV cache crash** — training graph no longer accesses missing KV cache ([#27199](https://github.com/ggml-org/llama.cpp/pull/27199)).
- **MTP/–fit-target memory allocation fixes** — include NextN/MTP layers in VRAM fitting and fix layer-position alignment ([#26605](https://github.com/ggml-org/llama.cpp/pull/26605), [#27207](https://github.com/ggml-org/llama.cpp/pull/27207)).
- **MinGW/GCC build break** from cpp-httplib update was closed ([#27144](https://github.com/ggml-org/llama.cpp/issues/27144)); verify your Windows toolchain after upgrading.

## What This Means for Application Developers

- **Validate speculative decoding carefully.** If you rely on greedy sampling with draft models on quantized checkpoints, outputs may differ from non-speculative runs; add consistency tests or wait for a fix on [#25618](https://github.com/ggml-org/llama.cpp/issues/25618).
- **Watch logprobs in eval pipelines.** lm-eval-style harnesses using `/v1/completions` with `echo: true` and `logprobs` will silently under-report prompt likelihoods; pin a known-good build or track [#27174](https://github.com/ggml-org/llama.cpp/issues/27174).
- **MTP deployments should pick up the fit fixes.** The `--n-cpu-moe` / `--fit-target` path with MTP models now correctly accounts for NextN layer placement; upgrade to a build containing [#26605](https://github.com/ggml-org/llama.cpp/pull/26605) and [#27207](https://github.com/ggml-org/llama.cpp/pull/27207).
- **Be cautious with `--no-kv-offload` on Vulkan.** Several Qwen3.x models produce incorrect output or EOS immediately; prefer full KV offload on AMD Vulkan until [#24519](https://github.com/ggml-org/llama.cpp/issues/24519) is resolved.
- **Security-conscious GGUF/multimodal loading.** The overflow and mmproj fixes are not yet released; if you serve untrusted model or projector files, upgrade to a build containing [#27200](https://github.com/ggml-org/llama.cpp/pull/27200), [#27204](https://github.com/ggml-org/llama.cpp/pull/27204), and [#27202](https://github.com/ggml-org/llama.cpp/pull/27202) once merged.
- **New architectures are en route.** Support for BailingMoE3 and Motif 3 Beta is in review — useful for early evaluations of Ling 3.0 and Motif-class model families.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Digest — 2026-08-17

## Today's Highlights
No releases landed in the last 24 hours; the tracker is dominated by a cluster of qwen3.8 regressions — tool-call loops returning HTTP 500, a hanging `/v1/chat/completions` endpoint, and system-message ordering — plus a confirmed tool-calling regression in 0.32.4/0.32.5 where rollback to 0.32.1 is the only workaround. Two deterministic CUDA illegal-memory-access crashes during large prefills were reported on DGX Spark and consumer GPUs, while a batch of agent-facing fixes (thinking-token budget, tool-call recovery, incomplete-response status) remain open as PRs.

## Releases & Breaking Changes
None. No new Ollama releases in the last 24 hours.

## New Model & Hardware Support
- **Qwen3-VL / Qwen2.5-VL video mode** support remains open — adds video understanding for Qwen multimodal models ([PR #12962](https://github.com/ollama/ollama/pull/12962)).
- **MoltenVK for Intel Macs** with AMD GPUs still pending ([PR #15000](https://github.com/ollama/ollama/pull/15000)).
- **Model requests:** Upstage Solar Pro 4 (524K context, long-horizon/agentic workloads) ([#17773](https://github.com/ollama/ollama/issues/17773)); DeepSeek V4 Pro 0813 ([#17775](https://github.com/ollama/ollama/issues/17775), closed); newer cloud catalog models ([#17796](https://github.com/ollama/ollama/issues/17796)).
- Long-standing **multi-modal (audio/live video) support** request remains open ([#11243](https://github.com/ollama/ollama/issues/11243)).

## Performance & Optimization
- **Speculative-decoding benchmark calibration:** HumanEval patch prompts replace synthetic word lists so draft models see code-like continuations; prompt-count calibration now uses `PromptEvalCount` ([PR #17480](https://github.com/ollama/ollama/pull/17480)).
- **Dual-GPU scheduling under investigation:** RTX 5060 Ti + RTX 5090 setup shows unexpected VRAM placement when targeting the 5090 ([#17780](https://github.com/ollama/ollama/issues/17780)).
- **Offload/layer-split anomaly** in 0.32.13: `ollama ps` shows a 2%/98% CPU/GPU split for Qwen3-Coder-Next despite 47GB resident ([#17788](https://github.com/ollama/ollama/issues/17788)).

## Stability & Regressions
1. **Tool calling broken in 0.32.4/0.32.5** — VS Code GitHub Copilot harness; rollback to 0.32.1 confirmed as the only workaround; 33 comments ([#17444](https://github.com/ollama/ollama/issues/17444)).
2. **qwen3.8 tool-loop 500s** — `no user query found in messages` during chat streaming when the model calls tools in a loop ([#17778](https://github.com/ollama/ollama/issues/17778)); same error breaks web search in Ollama Desktop ([#17812](https://github.com/ollama/ollama/issues/17812)).
3. **CUDA illegal memory access during large prefill** — deterministic on DGX Spark (GB10) in `ggml_cuda_flash_attn_ext_mma_f16_case` with head-size-256 models ([#17596](https://github.com/ollama/ollama/issues/17596)); separate `launch_mul_mat_q` crash on qwen3.6:35b, regression between 0.31.2 and 0.32.9 ([#17740](https://github.com/ollama/ollama/issues/17740)).
4. **`/v1/chat/completions` hangs** for qwen3.8:27b while `/api/chat` and `ollama run` work fine ([#17790](https://github.com/ollama/ollama/issues/17790)).
5. **Pascal GPU regression** (P6000/P4000 unsupported in 0.32.11–13) — closed ([#17766](https://github.com/ollama/ollama/issues/17766)).
6. **MLX runner issues on macOS** — `ollama stop` reports success but the runner stays resident holding RAM ([#17792](https://github.com/ollama/ollama/issues/17792)); vision runner requests ~125GB Metal buffer and crashes on 24.5MP input with Qwen3.8-27B on a 48GB M5 Pro ([#17804](https://github.com/ollama/ollama/issues/17804)).
7. **Vulkan multi-GPU VRAM desync** — scheduler sees 15GB free, llama-server sees 1.1GB, forcing unnecessary CPU fallback on a 4× Radeon Instinct system ([#17802](https://github.com/ollama/ollama/issues/17802)).
8. **`/save` fails** with `pull model manifest: file does not exist` for nemotron-3.5-lightning despite a valid local manifest ([#17735](https://github.com/ollama/ollama/issues/17735)); fix PR falls back to the current model when the parent is unavailable ([PR #17806](https://github.com/ollama/ollama/pull/17806)).
9. **gemma4 memory regression on Jetson Orin Nano** since v0.32.2 — even low `num_ctx` exhausts 8GB unified memory ([#17787](https://github.com/ollama/ollama/issues/17787)).
10. **qwen3.8:27b system-message ordering** (`system message must be at the beginning`) — reported via `ollama launch claude`, now closed ([#17754](https://github.com/ollama/ollama/issues/17754)).
11. **`ollama launch dsh` clobbers settings.yaml** on browser connect, wiping user fixes for `contextWindow`/`maxTokens` ([#17800](https://github.com/ollama/ollama/issues/17800)); fix PR derives values from served `num_ctx` ([PR #17801](https://github.com/ollama/ollama/pull/17801)).
12. **Nemotron 3 reasoning controls silently ignored** — `enable_thinking`, `low_effort`, `reasoning_budget` dropped on both `/v1/chat/completions` and `/api/chat` ([#17785](https://github.com/ollama/ollama/issues/17785)).
13. **Other notable reports:** `context deadline exceeded` on many HF-sourced GGUF imports ([#17484](https://github.com/ollama/ollama/issues/17484)); qwen3.5 fine-tune with `think=true` stops mid-thinking and never emits content ([#17777](https://github.com/ollama/ollama/issues/17777)); intermittent connection resets on `:cloud` model proxy after upgrade to 0.22.0 ([#15910](https://github.com/ollama/ollama/issues/15910)).

## What This Means for Application Developers
- **Pin Ollama if you depend on tool calling.** 0.32.4/0.32.5 are confirmed broken for VS Code Copilot harness; validate agent stacks against 0.32.1 until a fix ships ([#17444](https://github.com/ollama/ollama/issues/17444)).
- **qwen3.8:27b is not yet safe for production agents.** Endpoint-specific failures include 500s on tool loops, hangs on `/v1/chat/completions`, and web-search failures. Test through both `/api/chat` and the OpenAI-compatible endpoint before rollout ([#17778](https://github.com/ollama/ollama/issues/17778), [#17790](https://github.com/ollama/ollama/issues/17790), [#17812](https://github.com/ollama/ollama/issues/17812)).
- **Thinking-token budget API is in flight.** [PR #17566](https://github.com/ollama/ollama/pull/17566) proposes bounding reasoning per-request or per-model — directly relevant if you've seen models loop inside thinking blocks and burn the full context window. Companion fixes address truncated tool calls ([PR #17564](https://github.com/ollama/ollama/pull/17564)), missing closing braces ([PR #17565](https://github.com/ollama/ollama/pull/17565)), and false-positive repetitive-payload detection ([PR #17563](https://github.com/ollama/ollama/pull/17563)).
- **`/v1/responses` status will become honest.** [PR #17239](https://github.com/ollama/ollama/pull/17239) will report `incomplete` with details when `max_output_tokens` truncates output, instead of the current hardcoded `completed`.
- **Embedding truncation becomes visible.** Two PRs add warnings when `/api/embed` silently truncates over-length input ([PR #17799](https://github.com/ollama/ollama/pull/17799), [PR #17543](https://github.com/ollama/ollama/pull/17543)).

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-08-17

## Today's Highlights

LiteLLM shipped **v1.97.0** and release candidate **v1.98.0-rc.1**, with both release notes centering on cosign-verified Docker image signatures. The most impactful correctness work is still in review: [#31332](https://github.com/BerriAI/litellm/pull/31332) fixes the long-running `gpt-5.4` empty Responses output / `completion()` bridge failure ([#25429](https://github.com/BerriAI/litellm/issues/25429)). This window also surfaced several proxy-layer regressions around `/v1/messages`, Bedrock rerank, token accounting, and MCP/auth behavior that teams should validate before upgrading.

## Releases & Breaking Changes

- **v1.98.0-rc.1** — [release](https://github.com/BerriAI/litellm/releases/tag/v1.98.0-rc.1)  
- **v1.97.0** — [release](https://github.com/BerriAI/litellm/releases/tag/v1.97.0)  

No explicit breaking changes or migration notes are included in the release notes. Both releases document that all Docker images are signed with [cosign](https://docs.sigstore.dev/cosign/overview/), using the key introduced in commit [`0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0). If you verify image signatures, use that key.

## New Model & Hardware Support

No hardware/quantization/backend work landed in this window. Provider/model-facing additions are mostly in-flight PRs:

- **[#37103](https://github.com/BerriAI/litellm/pull/37103) — OpenCode first-class provider**: adds `opencode_go` and `opencode_zen`, supporting Chat Completions, Anthropic Messages, and OpenAI Responses wire formats.
- **[#37084](https://github.com/BerriAI/litellm/pull/37084) — ElevenLabs WebSocket streaming TTS**: exposes low-latency streaming-input TTS instead of only batch HTTP.
- **[#31565](https://github.com/BerriAI/litellm/pull/31565) — Azure `gpt-realtime-2` pricing family**: adds cost-map entries and correct realtime image-input pricing.

Open feature requests, not yet implemented: Azure AI Foundry Agents v2 ([#25372](https://github.com/BerriAI/litellm/issues/25372)), OpenAI/Azure OpenAI Skills routing ([#37074](https://github.com/BerriAI/litellm/issues/37074)), and model “group of groups” composition ([#28125](https://github.com/BerriAI/litellm/issues/28125)).

## Performance & Optimization

No kernel, throughput, or memory benchmarks were reported in this window. The notable latency work is:

- **[#37084](https://github.com/BerriAI/litellm/pull/37084)** — ElevenLabs WebSocket streaming-input TTS aims to remove the need to buffer full LLM output before synthesizing speech, cutting hundreds of milliseconds of latency for streaming pipelines. No concrete benchmark numbers are attached yet.

Cost-accounting correctness also improved:

- **[#36397](https://github.com/BerriAI/litellm/pull/36397)** — Fixes Gemini grounding billing so `web_search_billing_unit: "per_query"` charges per unique web search query rather than summing duplicate grounding entries.

## Stability & Regressions

Ranked roughly by severity:

- **`gpt-5.4` Responses output remains broken** — [#25429](https://github.com/BerriAI/litellm/issues/25429): empty final Responses output and `completion()` bridge failure with “Unknown items in responses API response”. A fix exists in review: [#31332](https://github.com/BerriAI/litellm/pull/31332) backfills `response.completed` from `output_item.done` events.
- **Bedrock rerank regression after upgrade** — [#28561](https://github.com/BerriAI/litellm/issues/28561): requests fail with `Unable to map Bedrock request to provider` after upgrading from `v1.83.14` to `v1.85+`. No fix PR is listed.
- **`/v1/messages` routing regression for custom `api_base`** — [#37088](https://github.com/BerriAI/litellm/issues/37088): `openai/` models with a custom `api_base` are routed to the Responses API; `use_chat_completions_api` returns empty content.
- **`/v1/messages` drops `stop_sequences`** — [#37118](https://github.com/BerriAI/litellm/issues/37118): observed on proxy `1.96.2`; affects Anthropic/Claude Code-style callers.
- **Bedrock CountTokens silently undercounts** — [#37102](https://github.com/BerriAI/litellm/issues/37102): when CountTokens is unsupported for current Anthropic models, the proxy silently returns understated token counts.
- **Pass-through cost/token headers discarded** — [#37105](https://github.com/BerriAI/litellm/issues/37105): upstream-reported `x-litellm-response-cost` / `x-litellm-total-tokens` are ignored on non-streaming `/v1/messages`.
- **MCP routes return 500 instead of 401** — [#37080](https://github.com/BerriAI/litellm/issues/37080): missing/malformed Authorization on `/mcp/{server}` leaks a generic 500 instead of 401.
- **Admin-only denials misreported** — [#37108](https://github.com/BerriAI/litellm/issues/37108): non-admin calls to admin routes return 401 instead of 403, and Prometheus records `exception_status="None"`.
- **`GET /v1/models` ignores `user.models`** — [#26420](https://github.com/BerriAI/litellm/issues/26420): restricted users can see all proxy models despite access-group restrictions.
- **`interactions.create()` drops `response_format` via proxy** — [#36928](https://github.com/BerriAI/litellm/issues/36928): Gemini requests lose `response_format` when `litellm_proxy` is enabled.
- **Payload `tags` no longer recognized** — [#27460](https://github.com/BerriAI/litellm/issues/27460): regression after `v1.83.9-nightly`.
- **Cost savings metrics always $0** — [#37117](https://github.com/BerriAI/litellm/issues/37117): `compression_savings_spend` and `prompt_caching_savings_spend` are zero with `cost-based-routing`.
- **Logging URL format regression** — [#37121](https://github.com/BerriAI/litellm/issues/37121): proxy startup prints `%s://%s://%s:%d` instead of a real URL; fixes are open in [#37122](https://github.com/BerriAI/litellm/pull/37122) and [#37123](https://github.com/BerriAI/litellm/pull/37123).

Other stability fixes in review: blocked-model requests now fall through to healthy fallbacks ([#36672](https://github.com/BerriAI/litellm/pull/36672)), Bedrock batch cancellation via `StopModelInvocationJob` ([#34087](https://github.com/BerriAI/litellm/pull/34087)), batch pricing from the deployment’s own rates ([#37077](https://github.com/BerriAI/litellm/pull/37077)), and no crash when a completed batch has no output file ([#34067](https://github.com/BerriAI/litellm/pull/34067)).

## What This Means for Application Developers

- **Avoid relying on the `gpt-5.4` Responses/`completion()` bridge path** until [#31332](https://github.com/BerriAI/litellm/pull/31332) merges; track that PR if you need the fix.
- **Anthropic-compatible `/v1/messages` traffic is risky on recent proxy versions**: `stop_sequences` can be dropped, and custom `api_base` OpenAI models may be misrouted to the Responses API. Pin and test before upgrading.
- **Bedrock rerank users should stay on `v1.83.14`** until the regression in [#28561](https://github.com/BerriAI/litellm/issues/28561) is fixed.
- **Token and cost accounting has known blind spots**: Bedrock CountTokens unsupported models under-report usage, pass-through cost headers are lost on non-streaming, and savings metrics can be zero under cost-based routing. Validate spend against upstream provider dashboards.
- **MCP gateway routes have broken auth semantics** — use a valid `Authorization: Bearer` key or expect 500s; do not expose MCP endpoints publicly until [#37080](https://github.com/BerriAI/litellm/issues/37080) is resolved.
- **Realtime app developers should watch [#36151](https://github.com/BerriAI/litellm/pull/36151)** — it registers WebSocket passthrough for OpenAI prefixes, unblocking `client.realtime.connect()` and `client.responses.connect()` through the proxy.
- **v1.98.0-rc.1 is available for early testing**; no breaking changes are documented, but RC behavior should be validated against your routing, auth, and cost flows.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth Digest — 2026-08-17

## 1. Today's Highlights
No releases shipped in the past 24h, but a large batch of Studio performance fixes is in review. Daniel Han's team opened a profiling-driven PR series targeting chat-thread slowdowns: opening a message menu on a 500-message thread drops from **42s to ~0.5s** ([#8992](https://github.com/unslothai/unsloth/pull/8992)), with dedicated fixes for streaming re-renders, message deletion, and code-block rendering. On the feature side, **rolling context windows for local GGUF chat** are in review ([#8961](https://github.com/unslothai/unsloth/pull/8961)), and AMD/ROCm support received three targeted fixes ([#9002](https://github.com/unslothai/unsloth/pull/9002), [#9044](https://github.com/unslothai/unsloth/pull/9044), [#4958](https://github.com/unslothai/unsloth/pull/4958)).

## 2. Releases & Breaking Changes
None — no releases in the last 24 hours. Relevant in-flight dependency/installer changes (all open PRs):

- [#6955](https://github.com/unslothai/unsloth/pull/6955): adds a `torch2110` CUDA extra family (torch 2.11.0 + xformers 0.0.35) mirroring the `torch2100` layout; the newest training extras remain `cu*-ampere-torch2100`/`cu*-torch2100`.
- [#7474](https://github.com/unslothai/unsloth/pull/7474): pins torchcodec per torch minor and covers torch 2.11 in the compatibility guard — fresh CUDA installs on `main` can currently pull a torchcodec mismatched to torch.
- [#8835](https://github.com/unslothai/unsloth/pull/8835): relands post-update version verification *without* base64-encoded probe payloads; previously reverted over antivirus-heuristic concerns.
- [#8841](https://github.com/unslothai/unsloth/pull/8841): makes Studio fail fast when the installed llama.cpp prebuilt has no kernels for the present GPU — currently it retries ~8 times with misleading errors when an install baked on one GPU (e.g., T4) lands on another (e.g., H100).

## 3. New Model & Hardware Support
- [#8794](https://github.com/unslothai/unsloth/pull/8794): adds native Studio audio support for Higgs TTS (`higgs-tts-2-3b-base`, `higgs-audio-v3-tts-4b-transformers`), MOSS TTS (`Local-Transformer-v1.5`, `Nano-100M`), and MiniMax Music3.
- [#5748](https://github.com/unslothai/unsloth/pull/5748): Docker images (base + Studio) for any NVIDIA GPU host from Ampere to Blackwell (sm_80–sm_120: A100, RTX 30/40, H100, B100/B200, RTX 50-series) plus native aarch64 (GB10/DGX Spark).
- [#4958](https://github.com/unslothai/unsloth/pull/4958): enables ROCm PyTorch on Windows AMD via `repo.radeon.com`; Windows AMD installs currently fall back to CPU-only PyTorch because the installers only detect `nvidia-smi`.
- MiniMax-H3: closed issue [#8507](https://github.com/unslothai/unsloth/issues/8507) reports the stable-diffusion.cpp build shipped with Unsloth Desktop predates MiniMax-H3 support (RTX 5090, 96GB DDR5).
- Feature request: [#9041](https://github.com/unslothai/unsloth/issues/9041) asks for cortecs.ai (OpenAI-compatible EU gateway) as a built-in cloud provider alongside OpenAI/Anthropic/OpenRouter.

## 4. Performance & Optimization
- [#8992](https://github.com/unslothai/unsloth/pull/8992): **message-menu open on a 500-message thread: 42s → 0.5s on Windows, flat in thread length** (fixes [#8977](https://github.com/unslothai/unsloth/issues/8977)).
- [#9014](https://github.com/unslothai/unsloth/pull/9014): streaming assistant replies rebuilt all already-finished message parts on every chunk, so per-chunk cost grew with reply length — a key cause of sluggish long generations with code/text.
- [#9042](https://github.com/unslothai/unsloth/pull/9042): message delete re-rendered the whole thread: **98ms at 25K chars of content, 472ms at 300K** (503ms of 505ms was script, 1.9ms style).
- [#9047](https://github.com/unslothai/unsloth/pull/9047): lets settled threads skip code blocks not currently shown, removing a CSS override that disabled streamdown's rendering optimization on every code block.
- [#9038](https://github.com/unslothai/unsloth/pull/9038): four streaming-path prefix checks used `startsWith` (full scan); slicing to prefix length lets V8 reject on length and compare natively.
- [#8935](https://github.com/unslothai/unsloth/pull/8935): streaming code fences already reuse highlighted lines above 2,000 chars with a 250ms refresh, but each refresh re-tokenizes the *entire* block in Shiki — this PR makes tokenization incremental.
- [#9016](https://github.com/unslothai/unsloth/pull/9016): adds a benchmark harness whose axis is **characters of thread content** (not message count) to quantify heavy-thread stalls across engines.
- Bug: [#9037](https://github.com/unslothai/unsloth/issues/9037) — long Qwen3.8 GGUF chats lose reusable prompt state after model reload, forcing an **~11-minute full prefill**.
- Bug ([#8988](https://github.com/unslothai/unsloth/issues/8988), from a maintainer): `_estimate_kv_cache_bytes` has a **dead `ctx_checkpoints` knob**, and the KV estimator **models host RAM as VRAM** — two arithmetic errors if the knob is ever wired up.

## 5. Stability & Regressions
- **ROCm backend can't load any models** ([#8998](https://github.com/unslothai/unsloth/issues/8998)) — fix PR [#9002](https://github.com/unslothai/unsloth/pull/9002) retries llama-server with bundled HIP on HIP/ROCR mismatch (`hsa_amd_queue_create@ROCR_1` lookup failure); related fix [#9044](https://github.com/unslothai/unsloth/pull/9044) for Windows ROCm VRAM reporting showing "Unknown" on single-GPU + iGPU hosts.
- **Desktop stops working while executing prompts** ([#8945](https://github.com/unslothai/unsloth/issues/8945)) — Windows Strix Halo, Qwen 3.8 27B UD-Q8_K_XL, connected via Claude Code.
- **"Partial Download. Click to continue." does nothing** ([#8927](https://github.com/unslothai/unsloth/issues/8927)) — stuck download state with no recovery path.
- **`crypto.randomUUID` crashes Studio web UI over non-secure HTTP** ([#9046](https://github.com/unslothai/unsloth/issues/9046), Debian 13, `main` @ `c87fe20`).
- **Microphone permission can't be re-granted** after blocking ([#9001](https://github.com/unslothai/unsloth/issues/9001), Windows 11); Ubuntu Mate `.deb` build lacks WebKitGTK media-stream ([#8678](https://github.com/unslothai/unsloth/issues/8678)).
- **Install/update failures**: Windows `uv\cache` path collision (os error 183, [#8991](https://github.com/unslothai/unsloth/issues/8991)); proxy-related failures on Windows 10 and Linux Mint ([#9043](https://github.com/unslothai/unsloth/issues/9043)); Intel backend mismatch (`KernelPreference` enum under `torch.compile`, [#8972](https://github.com/unslothai/unsloth/issues/8972)).
- **Tool calling**: `invalid_request_error` on every tool call via custom OpenAI-compatible endpoint ([#9039](https://github.com/unslothai/unsloth/issues/9039)); "list all files in thread" throws tool error ([#8854](https://github.com/unslothai/unsloth/issues/8854)).
- **UI regressions**: title generation doesn't work on web UI ([#9045](https://github.com/unslothai/unsloth/issues/9045)); image drag-and-drop fails intermittently ([#9036](https://github.com/unslothai/unsloth/issues/9036)); settings-menu Z-clipping ([#9040](https://github.com/unslothai/unsloth/issues/9040)); Ideogram 4 fails with `'_Noop' object is not iterable` on macOS 26.5.2 / 0.1.800-beta ([#8940](https://github.com/unslothai/unsloth/issues/8940)); RAM spike during model download ([#9032](https://github.com/unslothai/unsloth/issues/9032)).
- **Security**: closed issue [#8868](https://github.com/unslothai/unsloth/issues/8868) — `-H 0.0.0.0` serves the wrong IP address on macOS; verify before relying on LAN bindings. Related LAN feature request: [#8934](https://github.com/unslothai/unsloth/issues/8934). Fix PR [#8884](https://github.com/unslothai/unsloth/pull/8884) disables the WebKitGTK dmabuf renderer on NVIDIA (not only Wayland) to address desktop freezes.

## 6. What This Means for Application Developers
- **Long-running local agent sessions are about to get viable**: rolling context windows for Studio GGUF chat ([#8961](https://github.com/unslothai/unsloth/pull/8961)) drop oldest turns while preserving system instructions, the active task, and atomic tool-call/result exchanges — no transcript history deleted. Combined with the thread-latency fixes, this unblocks persistent chat on consumer hardware.
- **Studio UI latency is being rebuilt around content size**: the [#8992](https://github.com/unslothai/unsloth/pull/8992)/[#9014](https://github.com/unslothai/unsloth/pull/9014)/[#9042](https://github.com/unslothai/unsloth/pull/9042) series makes heavy code/text threads feel flat in cost. If you're embedding or scripting Studio, these land soon and will materially change perceived responsiveness.
- **AMD/ROCm is becoming a real deployment target**: native Windows ROCm installs ([#4958](https://github.com/unslothai/unsloth/pull/4958)) and HIP/ROCR mismatch handling ([#9002](https://github.com/unslothai/unsloth/pull/9002)) are in review — test Radeon hosts against these PRs if you service them.
- **Custom OpenAI-compatible endpoints are risky for tool calling** right now: current Studio builds fail every tool call with `invalid_request_error` ([#9039](https://github.com/unslothai/unsloth/issues/9039)). Pin and regression-test tool-calling if you route Studio through a gateway.
- **Docker is coming for the full NVIDIA range** ([#5748](https://github.com/unslothai/unsloth/pull/5748)): Ampere through Blackwell plus native aarch64 — the most practical path to reproducible serving stacks.
- **LAN/mobile access remains a recurring demand**: direct `0.0.0.0` LAN connections ([#8934](https://github.com/unslothai/unsloth/issues/8934)) and an official Android client ([#8973](https://github.com/unslothai/unsloth/issues/8973)) are both open requests — expect more movement on remote-access UX.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*