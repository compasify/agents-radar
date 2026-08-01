# AI Infrastructure Digest 2026-08-01

> Generated: 2026-08-01 01:47 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# Cross-Project AI Infrastructure Report — 2026-08-01

## 1. Ecosystem Overview

The inference stack is converging on a handful of frontier architectures — Kimi-K3 (hybrid KDA + MLA attention, latent MoE) and the DeepSeek-V4 family — forcing every engine into kernel-level porting work rather than mere checkpoint compatibility. Correctness now gates adoption more than raw throughput: prefix-cache boundary misses, illegal memory accesses, tool-call ID collisions, and stop-sequence protocol bugs dominate the issue trackers, with several critical failures still open across all three serving engines. Release cadence has bifurcated sharply — llama.cpp shipped ten tagged builds in 24 hours, while vLLM and SGLang accumulate unshipped features on `main` — which complicates production pinning. Meanwhile, hardware diversity (ROCm gfx942/gfx950, Intel Arc/XPU, Apple M5, RTX 5090-class consumer GPUs) is expanding faster than correctness coverage, and the gateway layer (LiteLLM) is absorbing the cost/routing implications of new model families before the serving engines fully stabilize them.

## 2. Activity Comparison

Counts below are issues/PRs **cited in the 24-hour digest**, not full-repo totals. They are directional indicators of activity and risk concentration.

| Project | Layer | Issues Cited | PRs Cited | Releases (24h) | Release Status | Risk Concentration |
|---|---|---|---|---|---|---|
| **vLLM** | Production serving engine | ~17 | ~10 | 0 | No tagged release; features accumulate on `main` | Kimi-K3 crash/correctness cluster (illegal memory access, prefix-cache misses, tool-call ID repetition); speculative-decode regressions |
| **SGLang** | Production serving engine | ~14 | ~15 | 0 | No tagged release; Kimi-K3 port staged behind kernel PRs | DSpark TP8 CUDA-graph illegal memory access; Kimi-K3 NaN/PAD storms; reasoning/stop-sequence protocol gaps |
| **llama.cpp** | Local/edge runtime | ~18 | ~27 | **10** (b10207→b10216) | Active daily release train | SYCL/Intel Arc correctness; GLM-5.2 dense-MLA CUDA corruption; MTP tensor loading behavior change |
| **Ollama** | Local runtime + distribution | ~19 | ~14 | 0 | No tagged release; MLX runner work in flight | Qwen3.6 CUDA illegal memory access; MLX hangs on Apple M5; Gemma 4 tool-calling |
| **LiteLLM** | Gateway / model router | ~20 | ~15 | 3 (v1.95.0-rc.2/rc.3, v1.96.0-dev.2) | RC/dev builds, cosign-signed | Redis TLS detection; Responses API streaming failures; batch cost accounting; MCP auth/session bugs |
| **Unsloth** | Fine-tuning framework + Studio | ~20 | ~13 | 0 | No tagged release; CI red on `main` | AMD iGPU misselection crash; Windows Triton JIT failure; vLLM incompatibility with fine-tuned Qwen3.5 |

Directional takeaway: llama.cpp is shipping continuously and broad; vLLM/SGLang are in a feature-accumulation phase where the next releases will likely be large but carry the K3/DSpark correctness burden; LiteLLM is mid-RC-cycle with mostly accounting/protocol bugs rather than kernel issues.

## 3. Model Support Race

**Kimi-K3 — vLLM is clearly ahead.** vLLM landed ROCm gfx942 support (MXFP4 expert path via AITER bf16×int4 FlyDSL kernels, TP-sharded MLA head padding) and a gfx950 MLA persistent-decode backend, alongside active triage of three K3-specific correctness bugs. SGLang is porting standalone kernels first (JIT/TMA groundwork, Day0 PR open) with model/scheduler integration still to come. llama.cpp has only a **proposal** PR (hybrid KDA + MLA + latent MoE). LiteLLM has pricing entries but no execution support.

**DeepSeek-V4 family — SGLang has the broadest coverage.** SGLang shipped an FP4 reference recipe for 8× RTX 5090, has an open DSpark-on-AMD-HIP PR, and is hardening DSpark CUDA-graph replay. vLLM aligned the 0731 reasoning-effort prompt renderers and gained +2.8% throughput via batch-sharded rejection sampling, but the Flash variant remains **blocked on A100/A800** by a `deepgemm` assertion. llama.cpp has MTP speculative decoding in progress. Ollama only has a weight-update request.

**Gemma 4 — Ollama leads on surface area, but quality is shaky.** MLX vision wiring landed, but tool-parsing failures, `<unused49>` token leaks with `think: false`, and ROCm `gfx1151` corruption remain open. vLLM reports FP8_BLOCK checkpoints producing garbage (double-applied scales), and llama.cpp has SYCL garbled-output reports.

**Qwen3.5/3.6 — fragmented and immature.** Ollama has MLX-side MTP speculative decoding and cache-reuse fixes, but Qwen3.6 hits a 100%-reproducible CUDA illegal memory access with JSON-schema `format` + `think: false`, plus macOS freezes on M5. Unsloth can fine-tune Qwen3.5 but the resulting checkpoints **fail to serve on vLLM**.

**Others:** EuroBERT native support (vLLM), Granite SWA/MoE-SWA docs (SGLang), MiniCPM-SALA in progress (SGLang), Qwen3-TTS via mtmd in progress (llama.cpp), Nemotron 3 MLX with custom NVFP4/MXFP8 kernels in progress (Ollama).

**Net assessment:** vLLM owns the frontier-datacenter race (K3 on ROCm) at the cost of a live bug cluster; SGLang owns DeepSeek variant breadth and consumer-GPU FP4; llama.cpp/Ollama own local/edge breadth (Vulkan/SYCL/MLX) and release velocity; LiteLLM is ahead only on pricing/config coverage, which is expected for a gateway.

## 4. Performance Frontier

Optimization effort is concentrated in five areas:

- **Batching / continuous scheduling.** vLLM's Model Runner V2 batch-sharded rejection sampling delivered the only hard end-to-end numbers this window: **+2.8% request throughput (2.90→2.98 req/s) and +2.5% output throughput (5948→6098 tok/s)** on DeepSeek-V4 + DSpark at 2K/2K, concurrency 64. Real-time external-router queue signals (`NUM_REQUESTS_RUNNING/WAITING`) are still missing, blocking kvc-aware routing for orchestrators like verl.

- **Speculative decoding is now table stakes but destabilizing.** llama.cpp made MTP tensor loading conditional on actual use (`b10212`) and is seeing ~50% speedups with DeepSeek-V4 MTP (`--spec-draft-n-max 2`); Ollama is adding MTP draft heads on MLX plus cross-turn cache reuse. Meanwhile vLLM reports substantial P99 TTFT regressions with EAGLE3/DFlash despite TPOT gains, and MTP+prefix-cache+tool-calling corrupts tool-call emission on repeated identical prompts. The pattern: speculative decoding helps throughput but hurts interactive latency and agent correctness.

- **Quantization is moving from FP8 to FP4/MXFP4, unevenly.** SGLang added per-tensor FP8→FlashInfer routing on SM90 and a DeepSeek-V4 FP4 recipe; vLLM added MXFP4/groupwise-int4 expert paths for K3 on ROCm and is proposing per-layer online quantization config. But correctness lags: Gemma 4 FP8_BLOCK garbage (vLLM), BF16 NVFP4 Marlin garbling, and uninitialized rows reaching block-FP8 GEMMs (SGLang/FlashInfer). The only clean wins are llama.cpp's CUDA Q2_0/Q1_0 `__byte_perm` unpacking: **+15–40% single-decode token/s, +8% prefill**.

- **Kernels and attention backends.** Attention-backend consolidation is underway: vLLM's RFC proposes deprecating FlexAttention for TritonAttention; SGLang is expanding Breakable CUDA Graph to `megamoe`/`flashinfer` A2A backends and fixing a TGV cluster-barrier bug on SM103; llama.cpp is adding SYCL oneMKL GEMM-flash-attention for XMX prompt processing and a device-wide argsort top-k for models like MiniMax M3. ROCm/AITER kernel work for K3 is the largest single kernel effort across all projects.

- **KV cache and distributed serving.** llama.cpp shipped rotated KV-cache quantization; SGLang is porting HiCache L2 prefetch from the K3 branch and fixing a HiCache deadlock; Ollama is fixing cross-turn cache reuse on MTP models. On the distributed side, vLLM fixed Elastic EP non-contiguous weight transfers corrupting strided views, while SGLang is still chasing a DSpark TP8 CUDA-graph transition race and llama.cpp's `split-mode=tensor` has been broken since b10054.

## 5. Layer Positioning

| Project | Layer | Core Value | Primary Users |
|---|---|---|---|
| **vLLM** | Production serving engine | Multi-GPU serving, prefix caching, quantized inference, broad model/hardware matrix | Datacenter GPU fleets, OpenAI-compatible APIs |
| **SGLang** | Production serving engine | Data-parallel decoding (DSpark), disaggregated prefill/decode, HiCache, kernel-first model bring-up | High-throughput multi-GPU deployments, reasoning-model serving |
| **llama.cpp** | Local/edge runtime | GGUF format, CPU-to-GPU scaling across CUDA/Vulkan/SYCL/Metal, minimal deps | Edge, on-prem, single-node inference, embedders |
| **Ollama** | Local runtime + distribution layer | Wraps llama.cpp/MLX; model distribution and OpenAI-compatible local API | Developer desktops, Apple Silicon, prototyping |
| **LiteLLM** | Gateway / LLM router | Multi-provider routing, fallback, spend tracking/auth, MCP bridging, model pricing | Platform teams managing heterogeneous providers/backends |
| **Unsloth** | Fine-tuning + tuned-model serving | LoRA/QLoRA on consumer GPUs, GGUF export, Studio GUI with llama-server backend | Fine-tuning workflows; AMD/consumer-GPU users |

Key overlaps to watch: **vLLM vs SGLang** is now a direct head-to-head on the same frontier models (K3, DeepSeek-V4/DSpark), with SGLang explicitly porting kernels rather than adopting vLLM's. **Ollama and llama.cpp** are converging in capability but diverging in audience — Ollama survives by hiding llama.cpp complexity. **Unsloth and the serving engines** have a friction point: Unsloth fine-tunes and exports, but the outputs are not reliably consumable by vLLM (Qwen3.5), and its `/v1/completions` + logprobs endpoint is GGUF-only, blocking lm-evaluation-harness against non-GGUF backends. **LiteLLM is neutral upstream** of all of them and is absorbing the cost/routing consequences of the new model families, including pricing for Kimi-K3 and KAT-Coder.

## 6. Trend Signals

1. **Kimi-K3 is the new frontier benchmark for engine readiness.** Every project has K3 work in flight, and the architecture (hybrid KDA + MLA attention, latent MoE, MXFP4) is forcing genuinely new kernels rather than config tweaks. Application developers should treat K3 support as a per-engine, per-GPU validation exercise — do not assume parity between vLLM and SGLang, and expect llama.cpp to lag.

2. **Speculative decoding is standardizing on MTP — and breaking agent workloads.** Conditional MTP loading (llama.cpp), MLX MTP drafts (Ollama), and DeepSeek-V4 MTP speedups signal MTP is becoming a default feature. But the vLLM reports of tool-call corruption under MTP + prefix caching, and P99 TTFT regressions, mean **latency-sensitive and agentic applications should benchmark spec decode per model before enabling it** — or disable it for interactive traffic.

3. **FP4/MXFP4 is the next quantization battleground, with correctness lagging.** DeepSeek-V4 FP4 recipes on consumer GPUs and K3 MXFP4 expert paths point to FP4 as the next density standard. But the accumulation of garbage-output bugs (FP8_BLOCK Gemma, NVFP4 Marlin, block-FP8 NaN propagation) means quantization paths must be validated on the exact target hardware; don't trust a checkpoint just because it loads.

4. **AMD and Intel are becoming first-class, but immature.** ROCm work spans gfx942/gfx950 (vLLM AITER), HIP DSpark (SGLang), gfx1100/gfx1151 (Ollama/Unsloth crashes), while Intel Arc/XPU still has open gibberish/crash issues across llama.cpp and Unsloth's Triton JIT failure on Windows/AMD. Multi-GPU AMD hosts also hit iGPU-vs-dGPU misselection. The trajectory is right, but production-grade ROCm/XPU support is still weeks behind CUDA for every project.

5. **Reasoning-model protocols are in flux, and the protocol layer is where applications break.** Across four projects, the same class of bugs appears: stop strings matching inside thinking blocks, `enable_thinking` being ignored, reasoning tokens leaking into `content`, tool-call IDs repeating across turns, and `</think>` injection via user messages (fixed in Unsloth). This is the highest-leverage thing for agent application developers to track — the serving engines are converging on fixes, but **pin to the specific fix PRs** rather than upgrading blindly.

6. **Release-cadence divergence will shape pinning strategy.** llama.cpp ships a new tag per day — practical for consuming fixes but churn-heavy. vLLM/SGLang are accumulating large unfinished feature sets with critical K3/DSpark bugs still open, meaning `main` carries both the newest features and the newest crashes. For production: pin llama.cpp to a known-good `b` tag, pin vLLM/SGLang to builds that include the K3/DSpark fix sets, and treat LiteLLM RC builds as the stability frontier for gateway-layer logic.

**Bottom line for technical decision-makers:** no single engine covers the current frontier. Expect to run at least two serving backends, validate K3/DeepSeek-V4 support per hardware target, keep speculative decoding off for agent workloads until the correctness fixes mature, and budget for the FP4/FP8 quantization paths to be hardware-specific rather than universal.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest — 2026-08-01

## 1. Today's Highlights
Kimi-K3 remains the dominant workstream: the team is landing ROCm/AITER kernel support for gfx942 and gfx950 while triaging a cluster of K3-specific correctness bugs (prefix-cache boundary misses, illegal-memory-access under load, and tool-call parser repetition). On the serving side, Model Runner V2's batch-sharded rejection sampling shows a clean ~2.5–2.8% throughput gain for DeepSeek-V4 + DSpark, and a new RFC proposes deprecating the FlexAttention backend in favor of TritonAttention.

## 2. Releases & Breaking Changes
No releases were published in the last 24 hours.

Proposed API/config changes worth tracking:
- **FlexAttention backend deprecation RFC** — FlexAttention is no longer selected by default on ROCm and ranks behind TritonAttention on CUDA; the RFC proposes removing it ([#50324](https://github.com/vllm-project/vllm/issues/50324)).
- **Per-layer online quantization configuration RFC** — would replace today's coarse `linear`/`moe` controls plus `ignore` list with per-layer overrides ([#50281](https://github.com/vllm-project/vllm/issues/50281)).

## 3. New Model & Hardware Support
- **Kimi-K3 on ROCm gfx942** — enables the MXFP4 expert path by converting expert weights to groupwise int4 at load time and dispatching AITER bf16×int4 FlyDSL kernels; also pads TP-sharded MLA query heads to AITER's 16-head minimum ([PR #50319](https://github.com/vllm-project/vllm/pull/50319)).
- **Kimi-K3 12-head MLA persistent decode on gfx950** — ROCm AITER MLA backend for the TP8 decode shape ([PR #50371](https://github.com/vllm-project/vllm/pull/50371)).
- **DeepSeek-V4-Flash on sm_80 (A100/A800)** — feature request remains open; init fails on a `deepgemm` assertion, so Ampere users are still blocked ([#40851](https://github.com/vllm-project/vllm/issues/40851)).
- **DeepSeek-V4 0731 reasoning-effort prompts** — aligns Python and Rust renderers with the new `low`/`high`/`max` prompt variants ([PR #50580](https://github.com/vllm-project/vllm/pull/50580)).
- **EuroBERT embedding model** — adds native support via the Llama building blocks ([PR #47660](https://github.com/vllm-project/vllm/pull/47660)).
- **GPT-OSS strict tool-call constrained decoding** — in progress, needs rebase ([PR #45560](https://github.com/vllm-project/vllm/pull/45560)).

## 4. Performance & Optimization
- **Model Runner V2 batch-sharded rejection sample** — measured on DSV4 + DSpark, 2K/2K, concurrency 64: +2.8% request throughput (2.90→2.98 req/s) and +2.5% output throughput (5948→6098 tok/s) ([PR #50465](https://github.com/vllm-project/vllm/pull/50465)).
- **Elastic EP non-contiguous weight transfers** — fixes PyNccl flat-contiguous sends corrupting strided weight views (e.g., some DeepSeek-V3 tensors) when spinning up new workers ([PR #50641](https://github.com/vllm-project/vllm/pull/50641)).
- **Helion kernel benchmark hygiene** — snapshots mutated inputs and restores them between repetitions so benchmark timing is fair ([PR #50635](https://github.com/vllm-project/vllm/pull/50635)).
- **Real-time queue signal for external routers** — feature request for low-latency `NUM_REQUESTS_RUNNING/WAITING` metrics to support kvc-aware routing (e.g., verl) ([#49538](https://github.com/vllm-project/vllm/issues/49538)).
- **Speculative decode TTFT regressions** — EAGLE3/DFlash show substantial P99 TTFT increase despite TPOT gains ([#39790](https://github.com/vllm-project/vllm/issues/39790)); Eagle3 latency regression also reported between v0.18 and v0.19 on H200 ([#39940](https://github.com/vllm-project/vllm/issues/39940)).

## 5. Stability & Regressions
Ranked by severity:

- **Kimi-K3 TP=8 + prefix caching: illegal memory access** under concurrent load — recurring and crash-level ([#50147](https://github.com/vllm-project/vllm/issues/50147)).
- **Kimi-K3 prefix cache miss at exact 1536-token boundaries** — cache reuse fails when the prompt length lands precisely on a block boundary ([#50235](https://github.com/vllm-project/vllm/issues/50235)).
- **Kimi-K3 tool-call IDs repeat across turns** — parser builds message-scoped IDs, breaking multi-turn agents; closed with a fix in flight that forwards `model_config` to nested reasoning parsers ([#50295](https://github.com/vllm-project/vllm/issues/50295), [PR #50642](https://github.com/vllm-project/vllm/pull/50642)). Related user report: infinite tool-call retry loops under Jenkins ([#50203](https://github.com/vllm-project/vllm/issues/50203)).
- **XPU GDN attention memory corruption** — fix is merged in `vllm-xpu-kernels`, but `requirements/xpu.txt` pins an older release; upgrade the pin ([#49924](https://github.com/vllm-project/vllm/issues/49924)).
- **MTP spec decode + prefix caching + tool calling** — corrupts tool-call emission on repeated identical prompts ([#50188](https://github.com/vllm-project/vllm/issues/50188)).
- **MiniMax-M3 reasoning tokens leak into `content`** on v0.26.0 and main ([#46042](https://github.com/vllm-project/vllm/issues/46042)).
- **Gemma 4 31B FP8_BLOCK garbage output** — double-applied absorbed activation scales cause logit saturation at the softcap wall ([#39407](https://github.com/vllm-project/vllm/issues/39407)).
- **BF16 NVFP4 Marlin garbled output** on GPUs without native FP4 support ([#34694](https://github.com/vllm-project/vllm/issues/34694)).
- **GLM-5.2 fp8_ds_mla crash at max_model_len ≥ ~325K** — sparse indexer off-by-one under concurrent decode; closed ([#46074](https://github.com/vllm-project/vllm/issues/46074)).
- **DeepSeek-V4-Flash fails on A800** at initialization in `vllm-openai:deepseekv4-cu129` ([#40851](https://github.com/vllm-project/vllm/issues/40851)).

CI fixes in flight: preventing common-ops imports from re-initializing CUDA in forked subprocess ([PR #50639](https://github.com/vllm-project/vllm/pull/50639)); llava-onevision transformer test hang resolved via `default_torch_num_threads=1` ([#50130](https://github.com/vllm-project/vllm/issues/50130)).

## 6. What This Means for Application Developers
- **Kimi-K3 tool-calling agents:** multi-turn agents can break because tool-call IDs repeat across turns. Upgrade once [#50642](https://github.com/vllm-project/vllm/pull/50642) merges, and be aware of the related infinite-retry symptom in [#50203](https://github.com/vllm-project/vllm/issues/50203).
- **Prefix caching on K3:** expect cache misses (not corruption) at prompt lengths that are exact multiples of 1536 tokens; padding prompts slightly avoids the boundary condition ([#50235](https://github.com/vllm-project/vllm/issues/50235)).
- **Speculative decoding:** EAGLE3/DFlash introduce meaningful P99 TTFT regressions — latency-sensitive services should benchmark per-model and consider disabling spec decode for interactive workloads.
- **XPU/Arc deployments:** the GDN attention corruption fix is upstream but not yet pinned; manually bump `vllm-xpu-kernels` to a post-fix release ([#49924](https://github.com/vllm-project/vllm/issues/49924)).
- **FP8_BLOCK Gemma 4 checkpoints** currently produce gibberish; avoid in production until the double-scaling fix lands ([#39407](https://github.com/vllm-project/vllm/issues/39407)).
- **External routers/RL orchestrators** still lack a real-time per-engine queue signal — upvote or contribute to [#49538](https://github.com/vllm-project/vllm/issues/49538) if you need it for kvc-aware dispatch.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest — 2026-08-01

## Today's Highlights
No release tags landed in the last 24 hours. Active development is concentrated on porting Kimi K3 kernels to `main` ([#32890](https://github.com/sgl-project/sglang/pull/32890)), hardening DSpark / CUDA graph replay correctness ([#31023](https://github.com/sgl-project/sglang/issues/31023), [#32432](https://github.com/sgl-project/sglang/issues/32432)), and fixing reasoning/stop-sequence protocol handling ([#33151](https://github.com/sgl-project/sglang/pull/33151), [#33152](https://github.com/sgl-project/sglang/pull/33152), [#33154](https://github.com/sgl-project/sglang/pull/33154)). A new DeepSeek-V4 FP4 reference recipe for 8× RTX 5090 was also added ([#33157](https://github.com/sgl-project/sglang/pull/33157)).

## Releases & Breaking Changes
None. No new releases or breaking config/API changes were observed in the 24h window.

## New Model & Hardware Support
- **Kimi K3**: Roadmap tracked in [#32607](https://github.com/sgl-project/sglang/issues/32607); Day0 PR is [#32541](https://github.com/sgl-project/sglang/pull/32541). Standalone kernels are being ported first via [#32890](https://github.com/sgl-project/sglang/pull/32890), with model/scheduler/serving integration to follow.
- **DeepSeek-V4 on RTX 5090**: New recipe for FP4 checkpoint serving on a single node with 8× RTX 5090 (32GB) ([#33157](https://github.com/sgl-project/sglang/pull/33157)).
- **DeepSeek V4 DSpark on AMD HIP**: Open PR adds DSpark support on AMD HIP platform ([#30964](https://github.com/sgl-project/sglang/pull/30964)).
- **Granite SWA / MoE SWA**: Documentation/support PR added for GraniteSWA and GraniteMoeSWA models ([#33156](https://github.com/sgl-project/sglang/pull/33156)).
- **Per-tensor FP8 → FlashInfer**: Feature request for routing per-tensor FP8 checkpoints to FlashInfer on SM89/SM90 ([#32993](https://github.com/sgl-project/sglang/issues/32993)); SM90 PR is [#33148](https://github.com/sgl-project/sglang/pull/33148).
- **MiniCPM-SALA**: In-progress native serving support ([#30360](https://github.com/sgl-project/sglang/pull/30360)).
- **DCP + HiCache L2**: Ported from the Kimi K3 branch and opened as a standalone feature PR ([#33112](https://github.com/sgl-project/sglang/pull/33112)).
- **Apple Silicon**: Roadmap remains open ([#19137](https://github.com/sgl-project/sglang/issues/19137)); MLX runner-stub redesign proposed in [#32321](https://github.com/sgl-project/sglang/issues/32321).

## Performance & Optimization
- **Breakable CUDA Graph (BCG) expansion**: BCG is now enabled for `megamoe` and `flashinfer` A2A backends in addition to `deepep`; validated on 4× GB300 ([#33150](https://github.com/sgl-project/sglang/pull/33150)).
- **Startup-time reduction**: `KvVmmArena` allocator stub no longer pulls in unused PyTorch headers, cutting `load_inline` overhead ([#33126](https://github.com/sgl-project/sglang/pull/33126)).
- **Wide SiLU clamp kernel support**: Activation rows larger than one CUDA block are now split correctly, with CUDA coverage for `H=16384` ([#33074](https://github.com/sgl-project/sglang/pull/33074)).
- **Disaggregation observability**: Added `queues.prealloc_ready` counter to the decode-side load snapshot to distinguish waiting-for-handshake vs ready requests ([#33133](https://github.com/sgl-project/sglang/pull/33133)).
- **Kimi K3 kernel groundwork**: Shared JIT/TMA support and standalone kernels landed in preparation for the full model integration ([#32890](https://github.com/sgl-project/sglang/pull/32890)).

## Stability & Regressions
Ranked by severity:

- **Critical — DSpark TP8 CUDA graph illegal memory access**: Timing-sensitive failure in the compact ragged target-verify path. Two root causes: cross-TP planning inconsistency and a CUDA graph transition race ([#31023](https://github.com/sgl-project/sglang/issues/31023)). A follow-up RFC proposes explicit metadata/workspace/stream-ownership contracts for dynamic CUDA graph replay ([#32432](https://github.com/sgl-project/sglang/issues/32432)).
- **Critical — Kimi K3 NaN contamination / PAD storms**: Long-context runs hit `[PAD]` token storms and DSpark inf/nan asserts; released image predates fix [#32477](https://github.com/sgl-project/sglang/issues/32477), and `allowed_special="all"` makes the PAD token injectable ([#32968](https://github.com/sgl-project/sglang/issues/32968)).
- **High — TGV kernel cluster barrier missing**: `cutedsl_bf16_gemm` 2-CTA TGV kernel causes `CUDBG_EXCEPTION_CLUSTER_BLOCK_NOT_PRESENT` on SM103 with PDL + CUDA graph ([#32907](https://github.com/sgl-project/sglang/issues/32907)).
- **High — Uninitialized rows reaching block-FP8 GEMMs**: With `--moe-a2a-backend deepep`, uninitialized rows are masked by DeepGEMM but produce NaNs with FlashInfer ([#33106](https://github.com/sgl-project/sglang/issues/33106)).
- **High — GLM5 health-check failure on 2×H100**: Server cannot get a response from detokenizer for 20 seconds; reported against v0.5.10 ([#22511](https://github.com/sgl-project/sglang/issues/22511)).
- **Medium — HiCache deadlock**: Prefetch `all_reduce` deadlock under TP=4, no PP, caused by mismatched call count in `check_prefetch_progress` ([#30760](https://github.com/sgl-project/sglang/issues/30760)).
- **Medium — PP+TP tensor corruption**: `send_tensor_dict` all-gather optimization silently corrupts non-TP-replicated tensors in `PPProxyTensors` ([#30015](https://github.com/sgl-project/sglang/issues/30015)).
- **Medium — AMD HIP / ROCm**: Qwen3.5 + dp-attention hits HIP “invalid configuration argument” in both GatedDeltaNet state path ([#31594](https://github.com/sgl-project/sglang/issues/31594)) and zero-sized-grid Triton kernel ([#31350](https://github.com/sgl-project/sglang/issues/31350)).
- **Medium — HiCache request mix-up**: Possible request mix-up in v0.5.15 ([#32605](https://github.com/sgl-project/sglang/issues/32605)).
- **Workaround landed**: Breakable CUDA graph is disabled for NemotronH pending root-cause resolution ([#33130](https://github.com/sgl-project/sglang/pull/33130)).
- **Open fix PRs for reasoning/stop correctness**: skip user stop checks during reasoning ([#33152](https://github.com/sgl-project/sglang/pull/33152)), avoid empty content when reasoning is truncated ([#33154](https://github.com/sgl-project/sglang/pull/33154)), trim stop string at actual hit point ([#33151](https://github.com/sgl-project/sglang/pull/33151)), honor top-level `enable_thinking` ([#33155](https://github.com/sgl-project/sglang/pull/33155)), and report `stop_sequence` in Anthropic adapter ([#33153](https://github.com/sgl-project/sglang/pull/33153)).

CI health tracker: [#17050](https://github.com/sgl-project/sglang/issues/17050) — last auto-update reports 2 broken, 5 flaky, 639 recently fixed.

## What This Means for Application Developers
- **No new release today**: If you need Kimi K3 kernel port, FP8 FlashInfer routing, or BCG fixes, pin to `main` or wait for the next cut.
- **Reasoning + `stop_sequences` is fragile**: Current releases can drop the final answer or return empty content when a stop string appears inside thinking. Track [#33151](https://github.com/sgl-project/sglang/pull/33151), [#33152](https://github.com/sgl-project/sglang/pull/33152), and [#33154](https://github.com/sgl-project/sglang/pull/33154), or avoid stop strings that may appear in reasoning text.
- **OpenAI-compatible `enable_thinking` may be ignored**: The top-level field is currently dropped by pydantic for qwen3/glm-5.2-style templates; [#33155](https://github.com/sgl-project/sglang/pull/33155) adds support.
- **Anthropic `stop_reason` semantics are being fixed**: Once [#33153](https://github.com/sgl-project/sglang/pull/33153) merges, user stop sequences will be reported as `stop_sequence` instead of `end_turn`.
- **Careful with DSpark/Kimi-K3 in production**: Ensure the serving image includes fix [#32477](https://github.com/sgl-project/sglang/issues/32477), and watch [#31023](https://github.com/sgl-project/sglang/issues/31023) / [#32432](https://github.com/sgl-project/sglang/issues/32432) before relying on TP8 CUDA graph replay.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp Digest — 2026-08-01

## Today’s Highlights

llama.cpp shipped a dense release train from `b10207` to `b10216`, with notable Vulkan, CUDA, and SYCL work: a Windows Intel Vulkan crash guard ([#25192](https://github.com/ggml-org/llama.cpp/pull/25192)), CUDA Q2_0/Q1_0 decode speedups ([#25603](https://github.com/ggml-org/llama.cpp/pull/25603), [#25628](https://github.com/ggml-org/llama.cpp/pull/25628)), SYCL oneMKL GEMM flash attention for XMX prompt processing ([#25025](https://github.com/ggml-org/llama.cpp/pull/25025)), and a behavior change to load MTP tensors only when actually used ([#26296](https://github.com/ggml-org/llama.cpp/pull/26296)). The main open risk surface remains SYCL/Intel Arc correctness issues and CUDA corruption with GLM-5.2 dense-MLA, with no fix PRs attached yet.

## Releases & Breaking Changes

- `b10216` — Vulkan: add `POOL_1D` op ([#25431](https://github.com/ggml-org/llama.cpp/pull/25431))
- `b10215` — Vulkan: add Windows Intel driver version check to mitigate crashing ([#25192](https://github.com/ggml-org/llama.cpp/pull/25192))
- `b10214` — mtmd: add `n_embd_head` ([#26342](https://github.com/ggml-org/llama.cpp/pull/26342))
- `b10213` — Support rotated KV cache quantization ([#26180](https://github.com/ggml-org/llama.cpp/pull/26180))
- `b10212` — MTP tensors are now loaded only if actually used ([#26296](https://github.com/ggml-org/llama.cpp/pull/26296)). This changes model loading behavior: MTP/NextN tensors are skipped when speculative decoding is not being used, saving load time and VRAM. This also addresses the MTP-loading regression discussed in [#26290](https://github.com/ggml-org/llama.cpp/issues/26290).
- `b10211` — Vulkan: update SDK to 1.4.357.0 ([#26303](https://github.com/ggml-org/llama.cpp/pull/26303)). Local Vulkan builds may need a newer SDK.
- `b10210` — Server: correct accepted token accounting when draft-token replay is needed ([#26320](https://github.com/ggml-org/llama.cpp/pull/26320))
- `b10209` — CUDA: extract Q2_0 elements via `__byte_perm` ([#25603](https://github.com/ggml-org/llama.cpp/pull/25603))
- `b10208` — SYCL: add oneMKL GEMM flash attention for XMX-accelerated prompt processing ([#25025](https://github.com/ggml-org/llama.cpp/pull/25025))
- `b10207` — SYCL: support missed types in `cpy` ([#26005](https://github.com/ggml-org/llama.cpp/pull/26005))

## New Model & Hardware Support

- Qwen3-TTS support is in progress via mtmd: talker backbone and speaker encoder conversion are mostly done ([#26254](https://github.com/ggml-org/llama.cpp/pull/26254))
- Kimi-K3 text model support is proposed, adding hybrid KDA + MLA attention, cross-layer residual attention, and latent MoE ([#26185](https://github.com/ggml-org/llama.cpp/pull/26185))
- DeepSeek-V4 MTP support is in progress, with roughly ~50% speedup at `--spec-draft-n-max 2` on the author’s setup ([#25784](https://github.com/ggml-org/llama.cpp/pull/25784))
- MiniMax M3 prefill work replaces a CPU-only MSA selection op with stock ggml ops, avoiding GPU→CPU→GPU syncs ([#26297](https://github.com/ggml-org/llama.cpp/pull/26297))
- Vulkan `POOL_1D` op added in `b10216` ([#25431](https://github.com/ggml-org/llama.cpp/pull/25431)), a building block for audio/TTS-style frontends
- Rotated KV cache quantization support landed in `b10213` ([#26180](https://github.com/ggml-org/llama.cpp/pull/26180))

## Performance & Optimization

- CUDA Q2_0 `__byte_perm` unpacking is released in `b10209`: **+15–40% token/s on single decode, +8% prefill** ([#25603](https://github.com/ggml-org/llama.cpp/pull/25603))
- Companion CUDA Q1_0 `__byte_perm` PR is closed: **+5–10% token/s, +1–2.5% prefill** ([#25628](https://github.com/ggml-org/llama.cpp/pull/25628))
- SYCL oneMKL GEMM flash attention for XMX prompt processing landed in `b10208` ([#25025](https://github.com/ggml-org/llama.cpp/pull/25025))
- Batched CUDA top-k via device-wide argsort is open and targets multi-row workloads like MiniMax M3 ([#26390](https://github.com/ggml-org/llama.cpp/pull/26390))
- CUDA row-contiguous `SUM_ROWS` support is in review ([#26308](https://github.com/ggml-org/llama.cpp/pull/26308))
- HIP builds should get faster device-wide primitives through hipCUB/CUB enablement ([#26388](https://github.com/ggml-org/llama.cpp/pull/26388))
- Speculative decoding observability is being improved: Prometheus spec-decode counters matching vLLM conventions are proposed ([#26389](https://github.com/ggml-org/llama.cpp/pull/26389)), and KV cache cell usage metrics are also in review ([#24010](https://github.com/ggml-org/llama.cpp/pull/24010))
- Windows unbuffered model loading is open and looking for testers ([#26014](https://github.com/ggml-org/llama.cpp/pull/26014))

## Stability & Regressions

High severity, open:

- **GLM-5.2 dense-MLA CUDA corruption**: output becomes subtly corrupted for any real transformer layer offloaded to GPU; open, no fix PR attached ([#26027](https://github.com/ggml-org/llama.cpp/issues/26027))
- **SYCL hybrid model gibberish/crash**: empty/gibberish output and `ggml_sycl_op_mul_mat` crash on Intel Arc Pro B60; regression introduced between `b9128` and `b9159` ([#24168](https://github.com/ggml-org/llama.cpp/issues/24168))
- **Gemma 4 12B garbled output on large prompts**: Intel Arc Pro B70 / SYCL, open ([#26206](https://github.com/ggml-org/llama.cpp/issues/26206))
- **DeepSeek-V4 Flash forgets everything**: Windows/CUDA, open ([#25171](https://github.com/ggml-org/llama.cpp/issues/25171))
- **`split-mode = tensor` broken since b10054**: open with first bad commit identified ([#25829](https://github.com/ggml-org/llama.cpp/issues/25829))

Moderate / recently closed or fixed:

- **MTP tensor loading regression** from [#25980](https://github.com/ggml-org/llama.cpp/issues/25980) is addressed by `b10212` / [#26296](https://github.com/ggml-org/llama.cpp/pull/26296)
- **CUDA `GGML_ASSERT` on DeepSeek-V4-Flash**: closed; manual tensor split works as a workaround ([#25851](https://github.com/ggml-org/llama.cpp/issues/25851))
- **CUDA timeout in MTP speculative draft path**: closed, but relevant to long-context MTP serving ([#24576](https://github.com/ggml-org/llama.cpp/issues/24576))
- **SYCL fence expiration hang** at a fixed prompt position: closed ([#25350](https://github.com/ggml-org/llama.cpp/issues/25350))
- **CUDA MMVQ `MUL_MAT_ID` invalid launch** on SM75 with SM61-only builds: closed ([#24064](https://github.com/ggml-org/llama.cpp/issues/24064))

Fixes in flight:

- HIP integrated GPUs: avoid ROCm host-buffer path because it corrupts prompt input on AMD APUs ([#25863](https://github.com/ggml-org/llama.cpp/pull/25863))
- SYCL iGPU classification: prevents segfault when both dGPU and iGPU are present ([#26105](https://github.com/ggml-org/llama.cpp/pull/26105))
- OpenCL backend: missing `ref_count` increment in `ggml_backend_opencl_init()` ([#26162](https://github.com/ggml-org/llama.cpp/pull/26162))
- Jinja parser hardening: recursion depth guards ([#26387](https://github.com/ggml-org/llama.cpp/pull/26387)) and zero-divisor / `INT64_MIN % -1` guards ([#26386](https://github.com/ggml-org/llama.cpp/pull/26386)) — relevant for servers loading untrusted GGUF chat templates

## What This Means for Application Developers

- **MTP/NextN model loading changed**: after `b10212`, MTP tensors are not loaded unless speculative decoding actually uses them. If your serving path relies on MTP tensors being resident, verify your draft/spec flags and measure VRAM impact. See [#26296](https://github.com/ggml-org/llama.cpp/pull/26296).
- **Speculative decoding metrics are more trustworthy**: `b10210` fixes accepted-token accounting during draft replay ([#26320](https://github.com/ggml-org/llama.cpp/pull/26320)); upcoming `/metrics` additions will add spec-decode and KV cache pressure counters ([#26389](https://github.com/ggml-org/llama.cpp/pull/26389), [#24010](https://github.com/ggml-org/llama.cpp/pull/24010)).
- **Be cautious with SYCL/Intel Arc for production**: known correctness and throughput issues remain for hybrid models, Gemma 4, and Qwen hybrids ([#24168](https://github.com/ggml-org/llama.cpp/issues/24168), [#26206](https://github.com/ggml-org/llama.cpp/issues/26206), [#26010](https://github.com/ggml-org/llama.cpp/issues/26010)). Vulkan may be a better path on Intel Arc today.
- **RAG + SWA models**: context checkpoint invalidation loops with dynamic RAG prompts were reported on Qwen SWA models ([#24587](https://github.com/ggml-org/llama.cpp/issues/24587)). Keep prompt/context layouts stable if you rely on KV cache reuse.
- **Server roadmap is moving toward model management APIs**: model management ([#21779](https://github.com/ggml-org/llama.cpp/issues/21779)), file upload ([#23948](https://github.com/ggml-org/llama.cpp/issues/23948)), router-mode presets ([#23704](https://github.com/ggml-org/llama.cpp/issues/23704)), and server-side tool registry work ([#20673](https://github.com/ggml-org/llama.cpp/issues/20673)) are all active.
- **Agent/tooling behavior**: autoparser support for tools combined with `response_format` is in review ([#25454](https://github.com/ggml-org/llama.cpp/pull/25454)), and tool calls during DeepSeek-4 reasoning are being enabled ([#26269](https://github.com/ggml-org/llama.cpp/pull/26269)).
- If you use `libllama` directly, check the maintained API changelog before upgrading ([#9289](https://github.com/ggml-org/llama.cpp/issues/9289)).

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Digest — 2026-08-01

Data source: `github.com/ollama/ollama`

## Today's Highlights

No release was published in the last 24 hours. The MLX runner is the main focus: Qwen3.5 MTP speculative decoding ([#17454](https://github.com/ollama/ollama/pull/17454)), cross-turn cache reuse for MTP models ([#17496](https://github.com/ollama/ollama/pull/17496)), and a fix for Gemma4/Qwen3.6 hangs ([#17494](https://github.com/ollama/ollama/pull/17494)). On the API side, [#17485](https://github.com/ollama/ollama/pull/17485) aligns streaming with OpenAI’s wire format and [#17453](https://github.com/ollama/ollama/pull/17453) preserves JSON Schema tool constraints, while stability remains a concern with Qwen3.6 CUDA faults ([#17434](https://github.com/ollama/ollama/issues/17434)) and Gemma 4 tool-calling issues ([#15315](https://github.com/ollama/ollama/issues/15315)).

## Releases & Breaking Changes

None in the last 24 hours — no tagged releases, so no new versions or migration notes.

In-progress changes to watch:

- **OpenAI streaming wire format**: [#17485](https://github.com/ollama/ollama/pull/17485) reworks `/v1/chat/completions` streaming to match `api.openai.com` chunk-for-chunk.
- **Tool parameter schema preservation**: [#17453](https://github.com/ollama/ollama/pull/17453) keeps JSON Schema constraints such as `minimum`, `maximum`, `default`, and `multipleOf`.
- **Runner manifest support**: [#16590](https://github.com/ollama/ollama/pull/16590) adds manifest-list storage so runner-specific model manifests can coexist under one tag.
- **Desktop config honor `OLLAMA_MODELS`**: [#17401](https://github.com/ollama/ollama/pull/17401) fixes the Windows desktop app overriding the environment variable with a saved settings path.

## New Model & Hardware Support

- **MLX — Gemma 4 vision**: [#17487](https://github.com/ollama/ollama/pull/17487) adds temporary multimodal wiring for Gemma 4 in the MLX runner.
- **MLX — Nemotron 3**: [#17060](https://github.com/ollama/ollama/pull/17060) is open with custom NVFP4/MXFP8 expert kernels.
- **MLX — Qwen3.5 MTP speculative decoding**: [#17454](https://github.com/ollama/ollama/pull/17454) was closed; it loads the MTP head and uses it as a draft model automatically when present.
- **DeepSeek Flash V4 0731**: weight update requested in [#17493](https://github.com/ollama/ollama/issues/17493).
- **Hardware surfaces in active reports**: AMD Radeon 8060S `gfx1151` ([#17498](https://github.com/ollama/ollama/issues/17498)), AMD Radeon 680M iGPU ([#9184](https://github.com/ollama/ollama/issues/9184)), DGX Spark GB10 arm64 ([#17434](https://github.com/ollama/ollama/issues/17434)), and Apple M5/M5 Pro ([#17452](https://github.com/ollama/ollama/issues/17452), [#17494](https://github.com/ollama/ollama/pull/17494)).

## Performance & Optimization

- **MTP cache reuse**: [#17496](https://github.com/ollama/ollama/pull/17496) fixes MLX cache reuse across non-thinking turns on MTP models, avoiding unnecessary re-prefill.
- **MTP speculative decoding**: [#17454](https://github.com/ollama/ollama/pull/17454) uses the Qwen3.5 MTP head as a draft model on Apple Silicon. No concrete benchmark number was included in the provided PR description.
- **MLX `num_ctx` fix**: [#17494](https://github.com/ollama/ollama/pull/17494) fixes the MLX runner discarding the request’s `num_ctx`, which let open-ended generations run unbounded and hang.
- **CI coverage**: [#17022](https://github.com/ollama/ollama/pull/17022) wires MLX unit tests into PR CI with `-race` coverage for server, llm, and discovery packages.

## Stability & Regressions

Ranked by severity.

**Critical / high impact**

- **Qwen3.6:35b CUDA illegal memory access** — 100% reproducible with JSON-schema `format` + `think: false` on Ollama 0.32.5 / DGX Spark GB10 arm64 ([#17434](https://github.com/ollama/ollama/issues/17434)). No fix PR yet.
- **Qwen3.6 freezes macOS on Apple M5** — inference hangs and the entire system becomes unresponsive ([#17452](https://github.com/ollama/ollama/issues/17452)). No fix PR yet.
- **MLX hangs on large models** — Gemma4:31b / Qwen3.6:35b hang indefinitely on Apple M5 Pro; workaround is `OLLAMA_LLM_LIBRARY=cpu`. Fix proposed in [#17494](https://github.com/ollama/ollama/pull/17494).

**High**

- **Gemma 4 12B corrupted output on ROCm `gfx1151`** — appears around 1,166–1,200 prompt tokens on AMD Radeon 8060S ([#17498](https://github.com/ollama/ollama/issues/17498)). No fix PR yet.
- **Gemma 4 tool parsing errors persist** — issue [#15315](https://github.com/ollama/ollama/issues/15315) remains open even after Ollama 0.20.1. A related parser panic fix for lone delimiter tool values is in [#17492](https://github.com/ollama/ollama/pull/17492).
- **Gemma 4 repeated `<unused49>` tokens with `think: false`** ([#17459](https://github.com/ollama/ollama/issues/17459)). No fix PR yet.
- **Structured outputs ignored on MLX** — `/api/chat` JSON schema constraints are not enforced for MLX models, affecting Qwen3.5 and Gemma 4 ([#16563](https://github.com/ollama/ollama/issues/16563)). No fix PR yet.
- **Ollama not using GPU** — 0.32.4 container stays on CPU with CUDA 12.1 ([#17431](https://github.com/ollama/ollama/issues/17431)). No fix PR yet.

**Medium**

- **`ollama create` hangs** with two `FROM` lines, including mmproj projector setups ([#17491](https://github.com/ollama/ollama/issues/17491)).
- **Safetensors compressed-tensors import routes to MLX on Linux** and fails with “MLX not available” ([#17490](https://github.com/ollama/ollama/issues/17490)).
- **`context deadline exceeded`** for many HF-imported GGUF models ([#17484](https://github.com/ollama/ollama/issues/17484)).
- **Ollama.com 403 / login loop** — persistent `HTTP 403 {"error":"Forbidden"}` on CLI and web for 8+ hours ([#17471](https://github.com/ollama/ollama/issues/17471)).
- **Kimi2.7 cloud not reading images** — image input works for Kimi2.6 but fails for Kimi2.7 cloud ([#16727](https://github.com/ollama/ollama/issues/16727)).

Closed in the last 24h without resolution details in the provided data: [#14423](https://github.com/ollama/ollama/issues/14423), [#16328](https://github.com/ollama/ollama/issues/16328), [#16564](https://github.com/ollama/ollama/issues/16564), [#16704](https://github.com/ollama/ollama/issues/16704).

## What This Means for Application Developers

- **Gemma 4 tool-calling remains risky for agents**. Test with `think: false` and watch for `<unused49>` tokens or parser failures ([#15315](https://github.com/ollama/ollama/issues/15315), [#17459](https://github.com/ollama/ollama/issues/17459)). The parser panic fix in [#17492](https://github.com/ollama/ollama/pull/17492) should reduce crash risk.
- **Avoid Qwen3.6 + JSON schema + `think: false` on CUDA** until [#17434](https://github.com/ollama/ollama/issues/17434) is fixed. Consider `think: true`, CPU, or a different backend.
- **On Apple Silicon MLX, pin `OLLAMA_LLM_LIBRARY=cpu` as a stopgap** for hangs; track [#17494](https://github.com/ollama/ollama/pull/17494) and [#17496](https://github.com/ollama/ollama/pull/17496) for the real fix.
- **OpenAI-compatible clients should prepare for streaming changes**: [#17485](https://github.com/ollama/ollama/pull/17485) will make Ollama’s `/v1/chat/completions` streaming match OpenAI exactly, and [#17422](https://github.com/ollama/ollama/pull/17422) adds `context_length` to `/v1/models`.
- **Tool schemas will retain numeric constraints** after [#17453](https://github.com/ollama/ollama/pull/17453), which matters for SDKs and code-gen tools that rely on `minimum`, `maximum`, `default`, and `multipleOf`.
- **Cloud model discovery is improving**: CLI will suggest `:cloud` tags when no default tag exists ([#17483](https://github.com/ollama/ollama/pull/17483), [#17495](https://github.com/ollama/ollama/pull/17495)). Cloud prompt caching remains an open request ([#16714](https://github.com/ollama/ollama/issues/16714)).

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-08-01

## Today's Highlights

LiteLLM published new v1.95 release candidates and a v1.96 dev build, with all Docker images cosign-signed. Model ecosystem work is active: Kimi K3 pricing, OpenRouter KAT-Coder pricing, and a new Monet OpenAI-compatible provider are in flight. Stability work is focused on aiohttp transport issues and the Responses API streaming bridge, while several Redis TLS and cost-accounting bugs remain open.

## Releases & Breaking Changes

- [v1.96.0-dev.2](https://github.com/BerriAI/litellm/releases/tag/v1.96.0-dev.2)
- [v1.95.0-rc.3](https://github.com/BerriAI/litellm/releases/tag/v1.95.0-rc.3)
- [v1.95.0-rc.2](https://github.com/BerriAI/litellm/releases/tag/v1.95.0-rc.2)

Release notes only cover cosign Docker image signature verification; no explicit migration notes were included. One upcoming breaking change is worth tracking: [PR #35423](https://github.com/BerriAI/litellm/pull/35423) would gate all mock-testing request parameters behind a single config flag.

## New Model & Hardware Support

- [PR #35427](https://github.com/BerriAI/litellm/pull/35427) — Adds Monet as an OpenAI-compatible provider via `providers.json`.
- [PR #33812](https://github.com/BerriAI/litellm/pull/33812) — Adds Kimi K3 pricing for Moonshot and OpenRouter prefixes.
- [PR #33662](https://github.com/BerriAI/litellm/pull/33662) — Adds OpenRouter Kwaipilot KAT-Coder Air V2.5 / Pro V2.5 pricing.
- [Issue #33921](https://github.com/BerriAI/litellm/issues/33921) — Feature request for native Kimi K3, Inkling, and Tinker platform support.
- [Issue #35410](https://github.com/BerriAI/litellm/issues/35410) — Feature request for Kimi K3, GLM 5.2 and other models via Morph.
- [Issue #26765](https://github.com/BerriAI/litellm/issues/26765) — Requests `azure_ai/gpt-image-2` pricing entries.

No hardware/backend-specific work (CUDA/ROCm/Metal/CPU/quantization) was reported in this window.

## Performance & Optimization

- [PR #35340](https://github.com/BerriAI/litellm/pull/35340) — Routers now read model rows through a shared `DualCache`; deletes and edits propagate to sibling pods faster, reducing stale-model serving.
- [PR #35422](https://github.com/BerriAI/litellm/pull/35422) — Fixes v3 dynamic rate limiting for TPM-only models when the pre-call increment is zero; model-wide TPM caps and priority reservations are now enforced.
- [PR #35343](https://github.com/BerriAI/litellm/pull/35343), [PR #35391](https://github.com/BerriAI/litellm/pull/35391), [PR #35393](https://github.com/BerriAI/litellm/pull/35393) — Adds PTU flat-cost daily rollups, spend metrics on the activity read path, and PTU configuration in the admin UI (cost-accounting work, not request-path latency).
- [PR #35402](https://github.com/BerriAI/litellm/pull/35402) — Cost-optimization dashboard now nets auto-router model-switch savings against cold-cache rewrites.

No concrete throughput/latency/memory numbers landed in this window.

## Stability & Regressions

Ranked by likely impact:

1. **aiohttp connection-pool poisoning** — [Issue #33820](https://github.com/BerriAI/litellm/issues/33820) (closed): cross-provider `Connection timed out` failures after `aiohttp>=3.14.1` pin in v1.91.0+. Related ClientSession leak [Issue #24230](https://github.com/BerriAI/litellm/issues/24230) also closed.
2. **Redis `ssl=False` forces SSLConnection** — [Issue #16587](https://github.com/BerriAI/litellm/issues/16587) (open): non-TLS Redis with host/port/password is broken via presence-based TLS detection. No fix PR surfaced.
3. **Responses API failover sends hardcoded `metadata`** — [Issue #25402](https://github.com/BerriAI/litellm/issues/25402) (open): `/v1/responses/compact` fails against Azure fallback with `Unknown parameter: metadata`.
4. **Responses API streaming AttributeError** — [Issue #35411](https://github.com/BerriAI/litellm/issues/35411) (open): mid-stream provider error raises `LiteLLMCompletionStreamingIterator has no attribute completed_response` and hides the real failure. Fix PR: [PR #35425](https://github.com/BerriAI/litellm/pull/35425).
5. **Batch cost accounting** — [Issue #35357](https://github.com/BerriAI/litellm/issues/35357): one failing batch aborts the entire `CheckBatchCost` poll cycle. [Issue #35358](https://github.com/BerriAI/litellm/issues/35358): a reconciled managed batch can silently produce no spend row.
6. **End-user cost tracking flag ignored** — [Issue #27038](https://github.com/BerriAI/litellm/issues/27038) (open): `disable_end_user_cost_tracking` does not prevent `SpendLogs.end_user` or `DailyEndUserSpend` writes.
7. **Managed files API failure** — [Issue #35362](https://github.com/BerriAI/litellm/issues/35362) (open): `client.files.list()` returns 500 with `api_key client option must be set`.
8. **MCP auth/session bugs** — [Issue #35403](https://github.com/BerriAI/litellm/issues/35403): per-request `x-mcp-{server}-authorization` not applied. [Issue #35383](https://github.com/BerriAI/litellm/issues/35383): stateful session cap is bucketed by API key, collapsing shared-key users.
9. **`/tag/list` HTTP 500** — [Issue #30972](https://github.com/BerriAI/litellm/issues/30972) (open): `find_many(select=...)` incompatible with prisma-client-py.
10. **Other notable regressions** — double logging of image generation callbacks ([#29638](https://github.com/BerriAI/litellm/issues/29638)), Chat UI 404 ([#27048](https://github.com/BerriAI/litellm/issues/27048)), UI Ask AI model-alias handling ([#27046](https://github.com/BerriAI/litellm/issues/27046)), non-admin key budget display ([#35404](https://github.com/BerriAI/litellm/issues/35404)).

In-flight fixes worth watching: [PR #34481](https://github.com/BerriAI/litellm/pull/34481) stops toolless Bedrock requests leaking `tool_choice`/parallel-tool-use config; [PR #34445](https://github.com/BerriAI/litellm/pull/34445) strips non-OpenAI-spec message fields before Azure AI requests; [PR #35424](https://github.com/BerriAI/litellm/pull/35424) fixes hook-filtered file listing; [PR #35426](https://github.com/BerriAI/litellm/pull/35426) removes stale wildcard deployments from the pattern router.

## What This Means for Application Developers

- If you upgraded past v1.89 and saw sporadic provider timeouts, verify you are on a build containing the aiohttp fixes from [#33820](https://github.com/BerriAI/litellm/issues/33820) / [#24230](https://github.com/BerriAI/litellm/issues/24230).
- Non-TLS Redis users should track [#16587](https://github.com/BerriAI/litellm/issues/16587) before adopting `ssl=False` configs.
- Responses API users should watch for the [#35425](https://github.com/BerriAI/litellm/pull/35425) fix; the compact/failover path with Azure is still fragile.
- Kimi K3 users on Fireworks tripped an upstream-compatible `tool_choice` rejection ([#35382](https://github.com/BerriAI/litellm/issues/35382)), and pricing entries are still pending in [#33812](https://github.com/BerriAI/litellm/pull/33812).
- Multi-pod proxy deployments should benefit from the shared model-list cache in [#35340](https://github.com/BerriAI/litellm/pull/35340), reducing stale model-serving after CRUD operations.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth Digest — 2026-08-01

## Today's Highlights
The cycle is dominated by Unsloth Studio hardening for ROCm and the desktop app. PR #7670 stops llama-server from being launched on AMD iGPUs the bundled build has no kernels for (fixing crashes #7624 and #7669), PR #7704 fixes Triton's clang-cl JIT failure on Windows/AMD, and PR #7706 adds Intel Arc GPU detection to the Windows installer. On the feature side, PR #7701 lands first-class reasoning-budget controls for GGUF loads, and Windows updater/desktop save/download paths receive long-overdue fixes.

## Releases & Breaking Changes
No new releases in the last 24h. Two compatibility notes:
- transformers has deprecated `modeling_attn_mask_utils` in favor of `masking_utils`, with removal scheduled for v5.10; the tracking issue is closed, but verify your pins before upgrading transformers — Issue #6860 (https://github.com/unslothai/unsloth/issues/6860).
- Current observed package/llama.cpp versions in the field: Unsloth 2026.7.4–2026.7.6 (v0.1.501-beta), llama.cpp b10079–b10194.

## New Model & Hardware Support
- **Intel Arc / XPU**: Windows installer gains WMI-based Intel GPU detection (Arc, Iris, UHD, HD) with a PyTorch XPU availability check before falling back to CPU — PR #7706 (https://github.com/unslothai/unsloth/pull/7706).
- **AMD ROCm Docker**: ROCm container variant added alongside the NVIDIA/Blackwell image — PR #6231 (https://github.com/unslothai/unsloth/pull/6231).
- **Qwen3.6 MTP GGUF** models (e.g. `Qwen3.6-27B-UD-Q6_K_XL.gguf`) are being loaded via custom scan folders; a filename-routing bug that sent them through the transformers/PeftConfig loader instead of llama-server was reported and closed — Issue #7623 (https://github.com/unslothai/unsloth/issues/7623).
- **Qwen3.5** (0.8B, 4B Vision) fine-tuning is working, but serving the fine-tuned artifacts with vLLM currently fails (see Stability) — Issue #7681 (https://github.com/unslothai/unsloth/issues/7681).
- **DiffusionGemma GGUF**: support in progress, but a hardcoded `NGL=99` ignores Studio's GPU-layer split and OOMs on partial offload — Issue #7574 (https://github.com/unslothai/unsloth/issues/7574); fix PR #7575 (https://github.com/unslothai/unsloth/pull/7575) awaits unsloth-zoo#958.

## Performance & Optimization
- **Reasoning budget controls**: PR #7701 adds first-class `reasoning_budget` / `reasoning_budget_message` GGUF load settings persisted across reloads and model switches — bounds reasoning loops to cap latency and compute. Request: Issue #7524 (https://github.com/unslothai/unsloth/issues/7524), PR: https://github.com/unslothai/unsloth/pull/7701.
- **Benchmarking**: built-in model benchmarks (HellaSwag, GSM8K) requested in Issue #5867 (https://github.com/unslothai/unsloth/issues/5867); a Recipe Studio "Train on this dataset" card toward a generate→train→benchmark loop is in progress — PR #7395 (https://github.com/unslothai/unsloth/pull/7395).
- **GGUF export**: user-controllable shard sizing, save-directory override, and private Hub push fix — PR #6107 (https://github.com/unslothai/unsloth/pull/6107).
- **Evaluation API gap**: `/v1/completions` + logprobs return 503 on non-GGUF backends (MLX/Transformers), blocking lm-evaluation-harness log-likelihood evals — Issue #7703 (https://github.com/unslothai/unsloth/issues/7703).
- No kernel-level throughput/latency numbers landed in this window.

## Stability & Regressions
Ranked by severity:

1. **CI broken on main** — Core (HF=latest + TRL=latest) fails with `'_DummyTrainer' object has no attribute 'data_collator'`, red-marking every open PR. Issue #7708 (https://github.com/unslothai/unsloth/issues/7708). No fix PR yet.
2. **vLLM cannot serve fine-tuned Qwen3.5** while the base checkpoint works — Issue #7681 (https://github.com/unslothai/unsloth/issues/7681).
3. **ROCm multi-GPU misselection on iGPU+dGPU hosts**: free-memory heuristic picks the iGPU, llama-server dies with `device kernel image is invalid` — Issues #7624 (https://github.com/unslothai/unsloth/issues/7624) and #7669 (https://github.com/unslothai/unsloth/issues/7669); fix: PR #7670 (https://github.com/unslothai/unsloth/pull/7670).
4. **Segfault on startup** during RAG embedding warmup on AMD Radeon 8060S (gfx1100) / ROCm 6.3, fresh 2026.7.4 install — Issue #7331 (https://github.com/unslothai/unsloth/issues/7331).
5. **DiffusionGemma OOM**: hardcoded `NGL=99` forces full-VRAM load; fix PR #7575 exists but depends on unsloth-zoo#958 merging first — Issue #7574 (https://github.com/unslothai/unsloth/issues/7574).
6. **Windows AMD Triton JIT failure**: `'stdlib.h' file not found` on first `torch.compile`; root cause is a missing MSVC environment for clang-cl, fixed by PR #7704 (https://github.com/unslothai/unsloth/pull/7704) — Issue #7595 (https://github.com/unslothai/unsloth/issues/7595).
7. **AMD GPU detection regressed** in the latest llama.cpp build — Issue #7485 (https://github.com/unslothai/unsloth/issues/7485).
8. **VRAM total/usage stops updating on RDNA3** (W7900/W7500, ROCm 7.13) — Issue #7452 (https://github.com/unslothai/unsloth/issues/7452).
9. **Windows in-app updater fails** with WinError 32 (cannot replace running `unsloth.exe`); mitigation exists but fails the same way. Fix: PR #7705 keeps the installer alive (https://github.com/unslothai/unsloth/pull/7705) — Issue #7697 (https://github.com/unslothai/unsloth/issues/7697).
10. **Desktop save/download paths broken**: native saves fail with `"content must be binary"` (chat export, Recents/Projects, canvas artifacts, tool cells, Markdown) and several remaining downloads are silently dropped — fixes PR #7695 (https://github.com/unslothai/unsloth/pull/7695) and PR #7710 (https://github.com/unslothai/unsloth/pull/7710).
11. **Chat-template injection**: a literal `</think>` in a user message was treated as the structural end of the reasoning block, leaking thought content into the visible answer; neutralized in PR #7334 (https://github.com/unslothai/unsloth/pull/7334).
12. **Loopback traffic routed through system proxy** in the desktop app, potentially breaking backend validation; fix in PR #7709 (https://github.com/unslothai/unsloth/pull/7709).
13. **Legacy**: 4-bit Gemma3 + vLLM incompatibility (`No module named 'language_model'`) remains open after 16 months — Issue #2274 (https://github.com/unslothai/unsloth/issues/2274).
14. **Cosmetic/UX**: download ETA reading "753d 5h left" (#7667), sidebar fade artifact in dark mode (#7672), local model missing from list (#7676), file drops captured by GGUF overlay (closed, #7661).

## What This Means for Application Developers
- **AMD/ROCm users should update as soon as #7670 and #7704 merge**: the iGPU-selection crash and the Windows Triton `stdlib.h` failure block Studio entirely on affected hosts. Until then, explicitly pin the dGPU and avoid in-app updates on Windows (WinError 32; prefer shell-based `unsloth studio update --local`).
- **Don't assume fine-tuned Qwen3.5 checkpoints are vLLM-serveable yet** — budget for a conversion or fallback path if your serving stack is vLLM (#7681).
- **Log-likelihood evals against Studio's API are GGUF-only today**: if your agent/eval tooling relies on `/v1/completions` + logprobs with MLX/Transformers backends, you're limited to `/v1/chat/completions` until #7703 lands.
- **Reasoning-budget controls are coming to GGUF loads** (#7701) — useful for bounding over-thinking and cost in agent workloads that run long llama-server sessions.
- **Chat-template markup leakage is fixed** (#7334): if you render user-controlled text containing `</think>` or special tokens, upgrade to avoid reasoning-block content bleeding into visible responses.
- **Main is currently red** (#7708); production users should stay on the latest 2026.7.x release rather than installing from source until the `_DummyTrainer` CI regression is fixed.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*