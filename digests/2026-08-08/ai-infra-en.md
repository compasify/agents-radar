# AI Infrastructure Digest 2026-08-08

> Generated: 2026-08-08 00:46 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# Cross-Project Digest Comparison — 2026-08-08

## 1. Ecosystem Overview

The inference stack is fully in "hardening" mode: no major architectural breakthroughs landed today, but every engine is actively patching speculative decoding, KV-cache correctness, and Blackwell/ROCm bring-up. The model battleground is DeepSeek-V4-Flash/0731 and Kimi K3 — the former still unstable across vLLM, SGLang, llama.cpp, and Ollama; the latter shipped day-0 in SGLang while vLLM is still enabling ROCm paths. A recurring pattern is that performance work (MTP draft sharing, DFlash block diffusion, NVFP4 kernels) is outpacing correctness — Gemma-4 KV corruption, DSpark CUDA-graph crashes, and AMD/Vulkan silent wrong-output bugs remain open across multiple projects. Gateway and fine-tuning layers are compensating: LiteLLM is adding cache-warmth-aware routing and Unsloth is fixing Studio streaming/reliability rather than pushing new training features.

## 2. Activity Comparison

Counts reflect issues/PRs explicitly referenced in each digest, not project-wide totals.

| Project | Issues referenced | PRs referenced | Release status | Layer |
|---|---|---|---|---|
| vLLM | ~15 | ~12 | No release | Serving engine |
| SGLang | ~15 | ~16 | **v0.5.17 shipped** (Kimi K3 day-0) | Serving engine |
| llama.cpp | ~14 | ~18 | **9 releases** (b10308 → b10326) | Local/edge runtime |
| Ollama | ~18 | ~12 | No release | Local runtime (+MLX runner) |
| LiteLLM | ~15 | ~14 | v1.97.0-dev.2 (dev only) | Gateway/proxy |
| Unsloth | ~14 | ~15 | No release (Docker Hub ~2 months stale) | Fine-tuning/Studio |

**Signal:** llama.cpp is shipping at the fastest cadence (9 releases/24h); SGLang is the most PR-active serving engine; vLLM and Ollama are in stabilization cycles with no release pressure.

## 3. Model Support Race

| Model/Architecture | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|---|---|---|---|---|---|
| **Kimi K3** (2.8T LatentMoE) | ROCm enablement only (gluon MLA, gfx950 FP8 tests) | **Shipped day-0** in v0.5.17; long-context PAD/NaN bug requires #32477 fix | — | — | — |
| **DeepSeek-V4-Flash/0731** | Blocked on Ampere/SM8x; 56 B/token KV overhead on H20 | Multiple open bugs (hierarchical cache corruption, watchdog timeouts, DP-attention corruption) | Vulkan device loss on Strix Halo; garbled over RPC+Vulkan | KV cache loss after idle under investigation | — |
| **Qwen3.6-35B-A3B** | XPU FP8 issue closed | — | CUDA SM120 NVFP4 MoE prefill (experimental) | VRAM scheduling regression (fix PR open) | — |
| **Gemma 4** | KV-cache corruption (int8 + prefix caching) | — | MTP "tensor in buffer" error (open) | Gemma4:e2b crash on WSL2; 12B corruption on ROCm/gfx1151 | Missing `<bos>` in tokenizer config |
| **TML Inkling** (new arch) | — | — | In-flight: conversion, graph build, banded FA (#25731) | — | — |
| **Nemotron 3** | — | — | — | MLX port in progress (#17060) | Attention handling bug (#7527) |

**Who's ahead:** SGLang on day-0 model support (Kimi K3); llama.cpp on architecture breadth (TML Inkling, Deepseek 4 `-sm tensor`, experimental CUTLASS MoE prefill); vLLM on quantization consolidation (ModelOpt, FlashInfer NVFP4) rather than new models; Ollama on Apple Silicon innovation (MLX vision + DFlash spec decode).

## 4. Performance Frontier

Optimization effort is concentrated in five areas:

- **Speculative decoding** — the single hottest topic. vLLM optimizes MTP draft top-k sharing (#49793) and fixes DSD K-lookup (#51466); SGLang unifies ragged-verify layouts (#34031/#34047); Ollama proposes **DFlash block-diffusion** (#17571), a draft model predicting a whole token block in one pass; llama.cpp still has open MTP correctness issues (Qwen3.6 repeated `////`). Per-request spec-decode acceptance metrics are coming to vLLM's OpenAI API (#48915).
- **KV-cache efficiency** — DeepSeek-V4-Flash-0731's ~56 B/token KV cost is a blocking issue on vLLM (only ~150K tokens in 7.7 GiB). SGLang fixes KV oversizing from resident IPC caches (#34053); Ollama investigates KV loss after idle and q4_0 KV garbage. Hierarchical/SWA cache position corruption (#33656) is a high-severity correctness blocker.
- **Scheduling & batching** — llama.cpp matured multi-model routing with an LRU scheduler (#26572) and no-eviction-of-busy-models (#26567). SGLang gates SWA eviction on accumulated tokens to kill latency spikes (#33404). LiteLLM proposes default-on deployment affinity to keep provider prompt caches warm across multi-turn conversations (#36146).
- **Quantization & kernels** — vLLM consolidates ModelOpt linear methods (#49381) and prefers FlashInfer CuTe-DSL NVFP4 on Blackwell (#49775). llama.cpp lands experimental SM120 CUTLASS MoE prefill for MXFP4/NVFP4 (#26704) and a 1.85× SYCL SSM_CONV speedup via coalesced loads (#26612).
- **Distributed serving** — SGLang auto-selects CUDA VMM transport for multi-node GB200/GB300 MNNVL (#33936) and is fixing DSpark + prefill context-parallel compatibility (#33865). vLLM removes blocking GPU→CPU syncs from per-forward paths (#51458).

## 5. Layer Positioning

The six projects occupy distinct layers, with emerging overlap:

- **Serving engines (vLLM, SGLang)** — Directly competing for production GPU workloads. vLLM emphasizes broad hardware (CUDA/ROCm/TPU/XPU) and quantization backend consolidation; SGLang prioritizes day-0 model support and Blackwell/DeepSeek-specific optimization. Both are struggling with the same DeepSeek-V4-Flash correctness class, suggesting the bottleneck is upstream model maturity, not engine capability.
- **Local runtimes (llama.cpp, Ollama)** — llama.cpp is the broadest backend portability play (SYCL, Metal, Vulkan, OpenCL, WebGPU, HIP) with the fastest release cadence; Ollama is the user-facing wrapper that innovates at the runner level (MLX DFlash, vision) but inherits llama.cpp stability issues (Gemma4 crash, AMD corruption) and adds its own scheduler regressions (Qwen VRAM misprediction).
- **Gateway (LiteLLM)** — The control plane for multi-provider routing, cost accounting, and guardrails. Its current pain points are telling: cost regressions (Azure 5× under-report, Fireworks cached-token billing ignored) and tool-call argument loss during provider translation — problems that only appear at the orchestration layer.
- **Fine-tuning/Studio (Unsloth)** — Owns the training/adapter lifecycle, increasingly with an inference proxy and agent-style workloads (Deep Research). Its activity is about operational reliability (event-loop blocking, inventory scan complexity, auth loops) rather than new training algorithms — a sign that fine-tuning tooling is commoditizing toward studio UX.

## 6. Trend Signals

1. **Speculative decoding is becoming table-stakes, and correctness is lagging.** Every engine is investing (MTP, DSD, ragged-verify, DFlash), but corruption bugs at concurrency ≥4 (vLLM #35288) and draft-depth-specific failures (SGLang #33800) remain open. Agent developers should re-validate output integrity after every spec-decode-related upgrade.
2. **Ampere is being left behind.** DeepSeek-V4-Flash is unsupported on SM80/SM8x in both vLLM (#50576) and SGLang (#33194). The frontier has moved to Blackwell (SM120) and beyond — budget holders still on A100/A800 should expect increasingly poor model support.
3. **Cost accounting for cached tokens is unreliable.** LiteLLM's Fireworks cached-token billing bug and Azure GPT-5.6 5× under-report show that metering hasn't caught up with prompt-cache economics. Billing dashboards need reconciliation against provider invoices.
4. **Cache-warmth-aware routing is the next gateway feature.** LiteLLM's deployment affinity PR (#36146) directly addresses the "cold cache every other turn" problem — expect this to become a differentiator for multi-turn agent workloads, and watch for it to interact with vLLM/SGLang prefix-caching internals.
5. **AMD/ROCm is still not production-safe.** Corruption on Radeon 8060S/gfx1151 in Ollama, ROCm correctness remnants in vLLM, pathologically slow ROCm diffusion in Unsloth, and active ROCm refactors in SGLang — the ecosystem is investing, but today the safe recommendation is CPU or CUDA fallback on AMD hardware.
6. **Tool-calling correctness is now a cross-layer concern.** Ollama's enum non-enforcement and Laguna parser false-positives, LiteLLM's lost `function.arguments`, and llama.cpp's LFM2.5 quote handling all break agent loops. Application developers must schema-validate tool arguments client-side regardless of which engine is used.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

## vLLM Digest — 2026-08-08

### Today’s Highlights
No vLLM release was cut in the last 24 hours; activity centered on DeepSeek-V4-Flash/0731 enablement, speculative-decoding fixes, and ROCm/Kimi-K3 enablement. The most-heated thread remains DeepSeek-V4-Flash on Ampere/SM8x, which is still unsupported, and a new report shows the 0731 checkpoint using roughly 8× more KV cache per token than the preview. Several MTP/spec-decode PRs and two Gemma-4 KV-cache corruption reports are the main correctness signals to watch.

### Releases & Breaking Changes
- **No new releases** in the last 24 hours.
- No new production-affecting API/config migration notes to report.

### New Model & Hardware Support
- **DeepSeek-V4-Flash / DeepSeek-V4-Flash-0731 on SM8x remains blocked.** [Issue #50576](https://github.com/vllm-project/vllm/issues/50576) requests Ampere A100/A800 support and has 87 comments; earlier tracking is in [Issue #40851](https://github.com/vllm-project/vllm/issues/40851).
- **DeepSeek-V4-Flash-0731 KV-cache overhead** is drawing attention: [Issue #51041](https://github.com/vllm-project/vllm/issues/51041) reports ~56 bytes/token, only ~150K tokens fitting in 7.7 GiB, and `max_model_len` capping around 121K on H20 TP=2.
- **Kimi-K3 on ROCm** is being tracked in [Issue #50682](https://github.com/vllm-project/vllm/issues/50682). [PR #51464](https://github.com/vllm-project/vllm/pull/51464) updates the ROCm base Docker Triton for gluon MLA kernel compatibility, and [PR #51457](https://github.com/vllm-project/vllm/pull/51457) adds a gfx950 AITER FP8 MLA prefill accuracy test.
- **Kimi ViT on TPU**: [PR #51196](https://github.com/vllm-project/vllm/pull/51196) disables dynamic `torch.compile` for `kimi_vit` on TPU.
- **Intel XPU**: [Issue #50850](https://github.com/vllm-project/vllm/issues/50850) covering Qwen3.6-35B-A3B / FP8 inference on Intel B70 XPUs was closed during the period.
- **Quantization backends**: [PR #49381](https://github.com/vllm-project/vllm/pull/49381) consolidates ModelOpt linear method classes into a single QuantKey-driven implementation; [PR #49775](https://github.com/vllm-project/vllm/pull/49775) adds a FlashInfer CuTe-DSL NVFP4 backend and makes it preferred on Blackwell when available.

### Performance & Optimization
- **MTP draft decoding**: [PR #49793](https://github.com/vllm-project/vllm/pull/49793) optimizes the MTP draft path by sharing top-k indices across draft steps; [PR #47352](https://github.com/vllm-project/vllm/pull/47352) does the same for Model Runner v2.
- **Dynamic spec decode**: [PR #51466](https://github.com/vllm-project/vllm/pull/51466) fixes DSD K-lookup to count sampling-only requests, preventing K thrashing at batch boundaries.
- **GPU sync reduction**: [PR #51458](https://github.com/vllm-project/vllm/pull/51458) removes several blocking GPU→CPU syncs from per-forward-pass paths.
- **MRv2 staging**: [PR #51334](https://github.com/vllm-project/vllm/pull/51334) keeps staged write payloads as typed NumPy chunks until transfer time.
- **Per-request spec-decode metrics**: [PR #48915](https://github.com/vllm-project/vllm/pull/48915) exposes per-request speculative-decoding acceptance stats in OpenAI API responses, rather than only server-wide `/metrics` averages.
- **Closed perf item**: [Issue #34391](https://github.com/vllm-project/vllm/issues/34391) notes qknorm+rope fusion was slower than unfused on H100; currently closed/stale.

### Stability & Regressions
Ranked by severity:

1. **Gemma-4 hybrid + int8 KV-cache corruption** — [Issue #50702](https://github.com/vllm-project/vllm/issues/50702) reports corrupted output when int8_per_token_head KV is combined with prefix caching and a fully pinned KV pool. [Issue #50749](https://github.com/vllm-project/vllm/issues/50749) reports corruption of the first generated tokens even with prefix caching disabled. [Issue #51140](https://github.com/vllm-project/vllm/issues/51140) also reports incoherent Gemma-4 output at high context. No dedicated fix PR is visible in this batch.
2. **MTP/spec-decode corruption at concurrency ≥ 4** — [Issue #35288](https://github.com/vllm-project/vllm/issues/35288) remains open. Related fixes in flight: [PR #49652](https://github.com/vllm-project/vllm/pull/49652) fixes autoregressive draft capture with dynamic SD, and [PR #51466](https://github.com/vllm-project/vllm/pull/51466) fixes DSD K-lookup.
3. **Blackwell FP8 load crash** — [Issue #47436](https://github.com/vllm-project/vllm/issues/47436): block-scaled FP8 (compressed-tensors W8A8) fails on SM120 (RTX PRO 6000) with a DeepGEMM “Unknown SF transformation” assertion; still open.
4. **Scheduler hang risk** — [Issue #35465](https://github.com/vllm-project/vllm/issues/35465): “No available shared memory broadcast block found in 60 seconds,” typically caused by hanging processes or time-consuming compile/quantization work.
5. **Gemma-4 torch.compile failure** — [Issue #38884](https://github.com/vllm-project/vllm/issues/38884): Dynamo fails to run FX node with fake tensors.
6. **ROCm correctness remnants** — [Issue #30167](https://github.com/vllm-project/vllm/issues/30167): `vision_embeddings` inaccurate on ROCm without math SDP; [Issue #32434](https://github.com/vllm-project/vllm/issues/32434): gpt-oss produces no output with TRITON_ATTN backend + spec decode on ROCm.

### What This Means for Application Developers
- **DeepSeek-V4-Flash on Ampere is not ready.** Do not plan A100/A800 deployments until [Issue #50576](https://github.com/vllm-project/vllm/issues/50576) or [Issue #40851](https://github.com/vllm-project/vllm/issues/40851) lands. On H20-class hardware, validate `max_model_len` and KV-cache sizing against the 56 bytes/token reported in [Issue #51041](https://github.com/vllm-project/vllm/issues/51041).
- **Gemma-4 + int8_per_token_head KV is risky** in v0.26.0. If you are serving hybrid-attention Gemma-4, consider disabling int8 KV cache or pinning prefix caching until the corruption bugs are fixed.
- **Speculative decoding / MTP clusters should re-test after the next release.** The combination of [PR #49652](https://github.com/vllm-project/vllm/pull/49652), [PR #51466](https://github.com/vllm-project/vllm/pull/51466), and [PR #49793](https://github.com/vllm-project/vllm/pull/49793) addresses several correctness and performance issues in flight.
- **ROCm Kimi-K3 users should watch for updated Docker images** containing the Triton fix from [PR #51464](https://github.com/vllm-project/vllm/pull/51464); the overall ROCm gap/roadmap is tracked in [Issue #50682](https://github.com/vllm-project/vllm/issues/50682).
- **Per-request spec-decode acceptance stats** from [PR #48915](https://github.com/vllm-project/vllm/pull/48915) will be valuable for validating quality after upgrading MTP/spec-decode behavior.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest — 2026-08-08

## 1. Today's Highlights

SGLang shipped **v0.5.17**, headlined by day-0 support for **Kimi K3** — a 2.8T-parameter multimodal LatentMoE model with a 1M-token context and a hybrid 69 KDA + 24 MLA attention stack. The project is heavily focused on hardening DeepSeek-V4/Flash and DSpark paths on Blackwell, with several in-flight PRs consolidating ragged-verify layouts, WAR read-done gating, and DSpark + prefill context-parallel compatibility. CI tracking reports **3 broken, 11 flaky, and 671 recently fixed tests**, while 51 issues and 417 PRs were updated in the last 24 hours.

## 2. Releases & Breaking Changes

- **v0.5.17** — [release](https://github.com/sgl-project/sglang/releases/tag/v0.5.17)  
  582 PRs from 194 contributors. The headline feature is **Kimi K3 day-0 support**: 2.8T-parameter multimodal LatentMoE, 896 experts with top-16 routing in a 3584-dim latent space, 1M-token context, 69 KDA linear-attention layers interleaved with 24 MLA layers, and a MoonViT3d vision tower. No explicit migration notes or breaking API changes were present in the provided release payload.

## 3. New Model & Hardware Support

- **Kimi K3** — [v0.5.17](https://github.com/sgl-project/sglang/releases/tag/v0.5.17)  
  Day-0 support for the 2.8T multimodal LatentMoE architecture and MoonViT3d vision tower.
- **ROCm DeepSeek path refactor** — [PR #31531](https://github.com/sgl-project/sglang/pull/31531)  
  Separates ROCm-specific DeepSeek MHA and MLA forward paths, improving maintainability for AMD.
- **NVFP4 W4A16 on SM120** — [Issue #33711](https://github.com/sgl-project/sglang/issues/33711)  
  Open feature request for dense NVFP4 linear layers with bf16 activations on Blackwell SM120.
- **CUDA VMM multimodal transport on multi-node MNNVL** — [PR #33936](https://github.com/sgl-project/sglang/pull/33936)  
  Auto-selects CUDA VMM for validated multi-node GB200/GB300 MNNVL deployments when an IMEX channel is mounted.
- **gpt-oss vocab for NPU Docker** — [PR #21831](https://github.com/sgl-project/sglang/pull/21831)  
  Adds vocabulary installation for gpt-oss in NPU container images.

## 4. Performance & Optimization

- **Correct KV sizing with resident weights** — [PR #34053](https://github.com/sgl-project/sglang/pull/34053)  
  Accounts for pre-resident IPC weight-cache daemon memory in `pre_model_load_memory`, preventing KV-cache oversizing.
- **Always capture default prefill CUDA graph** — [PR #33352](https://github.com/sgl-project/sglang/pull/33352)  
  Removes the 4 GiB runtime gate added in #31204, avoiding silent eager fallback for prefill.
- **SWA eviction batching** — [PR #33404](https://github.com/sgl-project/sglang/pull/33404)  
  Gates SWA eviction on accumulated tokens instead of every decode iteration, targeting periodic latency spikes on large batches.
- **VLM multimodal transport work** — [PR #33921](https://github.com/sgl-project/sglang/pull/33921), [PR #33924](https://github.com/sgl-project/sglang/pull/33924), [PR #33952](https://github.com/sgl-project/sglang/pull/33952), [PR #33949](https://github.com/sgl-project/sglang/pull/33949)  
  Deferred image preprocessing to vision-owner ranks, Gloo-based broadcast of large CPU features, lazy encoder-DP feature materialization for Qwen3-VL/Qwen3.5, and stream-order CUDA IPC feature-pool lifecycle fixes.
- **AMD memory derate removal** — [PR #25199](https://github.com/sgl-project/sglang/pull/25199)  
  Removes the silent 0.85× `mem_fraction_static` derate for aiter with >8K context.
- **Roadmaps**: Distributed KVCache for agentic workloads — [Issue #21846](https://github.com/sgl-project/sglang/issues/21846); Decode Context Parallelism and Helix Parallelism — [Issue #29736](https://github.com/sgl-project/sglang/issues/29736).

No new benchmark numbers were available in today's data.

## 5. Stability & Regressions

- **High — DSpark CUDA-graph illegal memory on TP8** — [Issue #33356](https://github.com/sgl-project/sglang/issues/33356)  
  DeepSeek-V4-Pro-DSpark on B300/TP8 can hit non-deterministic illegal memory during large decode CUDA-Graph capture; small-scale capture is stable. No direct fix PR appears yet.
- **High — DeepSeek-V4 hierarchical cache corruption** — [Issue #33656](https://github.com/sgl-project/sglang/issues/33656)  
  Deterministic SWA KV position corruption in `TAIL_K_SWA` write position, followed by NaN sampling crashes.
- **High — Kimi-K3 long-context PAD storms and DSPARK NaN asserts** — [Issue #32968](https://github.com/sgl-project/sglang/issues/32968)  
  Released `kimi-k3` image predates fix #32477; `[PAD]` is not stopped/filtered and can contaminate logits with NaN.
- **Medium — DSpark draft-depth-5 corruption on SM120** — [Issue #33800](https://github.com/sgl-project/sglang/issues/33800)  
  Default draft depth 5 corrupts output on SM120 while depths 3, 4, 6, and 7 are clean.
- **Medium — DeepSeek-V4-Flash-0731 progressive corruption on 2×H200** — [Issue #33397](https://github.com/sgl-project/sglang/issues/33397)  
  Output corruption under concurrency with dsv4 + DP attention.
- **Medium — dsv4-flash-0731 watchdog timeout** — [Issue #33393](https://github.com/sgl-project/sglang/issues/33393)  
  Watchdog timeout observed under v0.5.16.
- **Medium — Decode starvation under chunked prefill** — [Issue #32549](https://github.com/sgl-project/sglang/issues/32549)  
  Decode degraded to roughly one batch per 24s under strict prefill-first scheduling with spec decode.
- **Medium — MiniMax-H3 args error** — [Issue #33466](https://github.com/sgl-project/sglang/issues/33466)  
  Open bug report for MiniMax-H3 argument handling.
- **Medium — MiniMax-H3 `/health` blackhole** — [Issue #33719](https://github.com/sgl-project/sglang/issues/33719)  
  `/health` bypasses `warmup_done.wait()`, allowing health checks to pass while POSTs block for ~264s. Closed after diagnosis.
- **Lower — DeepSeek-V4-Flash on Ampere/SM80** — [Issue #33194](https://github.com/sgl-project/sglang/issues/33194)  
  Multiple blockers on 8×A800 after the `deep_gemm` NameError; listed as closed, likely after triage rather than a confirmed fix.
- **CI health** — [Issue #17050](https://github.com/sgl-project/sglang/issues/17050)  
  Tracking issue: 3 broken, 11 flaky, 671 recently fixed. Unit-test coverage improvements are tracked in [Issue #20865](https://github.com/sgl-project/sglang/issues/20865).

Active fix PRs in the same area include DSpark + DeepSeek-V4 prefill CP compatibility — [PR #33865](https://github.com/sgl-project/sglang/pull/33865); unified WAR read-done gating — [PR #34052](https://github.com/sgl-project/sglang/pull/34052); and ragged-verify layout unification — [PR #34031](https://github.com/sgl-project/sglang/pull/34031), [PR #34047](https://github.com/sgl-project/sglang/pull/34047).

## 6. What This Means for Application Developers

- **Kimi K3 is now supported in v0.5.17**, but if you serve it with DSPARK speculative decoding, validate long-context behavior and ensure you are on a build containing the #32477 logits fix before relying on it in production.
- **DeepSeek-V4/Flash on Blackwell remains high-risk today.** The combination of TP8/DP attention, hierarchical cache, and CUDA graphs has multiple open correctness bugs. Pin versions, run output-integrity checks under concurrency, and avoid relying on default CUDA-graph batch ceilings until the current fix PRs land.
- **Do not trust `/health` alone during warmup.** The MiniMax-H3 issue shows health checks can pass before inference is actually ready; use readiness gates that wait for warmup completion.
- **Gateway users should watch DP-aware routing.** [PR #33565](https://github.com/sgl-project/sglang/pull/33565) restores `data_parallel_rank` alias behavior on native `/generate`; dp-aware routing can otherwise be silently dropped.
- **CI is still flaky.** For contributors, the project is explicitly calling for more unit coverage in `managers/`, `mem_cache/`, `sampling/`, and `parser/` — see [Issue #20865](https://github.com/sgl-project/sglang/issues/20865).

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp Digest — 2026-08-08

## Today's Highlights

llama-server router scheduling matured with an LRU scheduler ([#26572](https://github.com/ggml-org/llama.cpp/pull/26572)) and a guard against evicting busy models ([#26567](https://github.com/ggml-org/llama.cpp/pull/26567)), improving multi-model serving behavior. On the compute side, the SYCL backend saw a 1.85× SSM_CONV speedup via coalesced window loads ([#26612](https://github.com/ggml-org/llama.cpp/pull/26612)), and Metal NORM/RMS_NORM handling for partial SIMD groups was fixed ([#26708](https://github.com/ggml-org/llama.cpp/pull/26708)). Releases advanced from b10308 to b10326, including TTS timing corrections and a Windows MSYS2/UCRT64 crash mitigation.

## Releases & Breaking Changes

Latest releases in the last 24h, with no explicit API/configuration breaking changes:

- **b10326** — tts: account for the vocoder pass in timings line ([#26733](https://github.com/ggml-org/llama.cpp/pull/26733))
- **b10322** — sycl: coalesce SSM_CONV window loads ([#26612](https://github.com/ggml-org/llama.cpp/pull/26612))
- **b10321** — metal: fix NORM/RMS_NORM for row lengths leaving a partial SIMD group ([#26708](https://github.com/ggml-org/llama.cpp/pull/26708))
- **b10319** — mtmd: fix `longest_edge` ignoring min/max pixels ([#26638](https://github.com/ggml-org/llama.cpp/pull/26638))
- **b10318** — sync: ggml
- **b10313** — server: router LRU scheduler ([#26572](https://github.com/ggml-org/llama.cpp/pull/26572))
- **b10312** — server: router no longer evicts busy models ([#26567](https://github.com/ggml-org/llama.cpp/pull/26567))
- **b10311** — mtmd: stop feeding text stream during Qwen3-TTS generation ([#26706](https://github.com/ggml-org/llama.cpp/pull/26706))
- **b10310** — ggml: aarch64 HWCAP fallbacks and fp16 variant detection fix ([#25554](https://github.com/ggml-org/llama.cpp/pull/25554))
- **b10308** — mitigate crashing issue on Windows MSYS2 UCRT64 / GCC 16.1.0 ([#26555](https://github.com/ggml-org/llama.cpp/pull/26555))

Router eviction behavior changed in b10312/b10313; operators with custom model-swap workloads should validate queueing behavior after upgrading.

## New Model & Hardware Support

No release added a brand-new model architecture today, but notable support work is in flight:

- **TML Inkling architecture** support: safetensors→GGUF conversion, graph build, kernels, and banded flash attention ([#25731](https://github.com/ggml-org/llama.cpp/pull/25731))
- **Deepseek 4 `-sm tensor`** support, including mirrored flash attention for the single K head configuration ([#26490](https://github.com/ggml-org/llama.cpp/pull/26490))
- **CUDA experimental SM120 CUTLASS MoE prefill** for MXFP4 and NVFP4, disabled by default; supports GPT-OSS MXFP4 and Qwen3.6-35B-A3B NVFP4 ([#26704](https://github.com/ggml-org/llama.cpp/pull/26704))
- **HIP/RDNA4 documentation** added for gfx1200/gfx1201 target selection ([#26745](https://github.com/ggml-org/llama.cpp/pull/26745))
- **OpenCL flash-attention prefill** K-tile transpose optimization for local-memory efficiency ([#26428](https://github.com/ggml-org/llama.cpp/pull/26428))
- **WebGPU** flash-attention shader simplification/refactor ([#26134](https://github.com/ggml-org/llama.cpp/pull/26134))

## Performance & Optimization

Landed:

- **SYCL SSM_CONV window-load coalescing** ([#26612](https://github.com/ggml-org/llama.cpp/pull/26612)): on Arc Pro B70, `ne_a=[515,3328,1,1] ne_b=[4,3328,1,1], n_t=512` improved from 97.68 → 52.95 us/run, **1.85×**.

In progress / open PRs:

- **CUDA SM120 CUTLASS MoE prefill** for MXFP4/NVFP4 with fused W13 and grouped W13/W2 CUDA epilogues ([#26704](https://github.com/ggml-org/llama.cpp/pull/26704))
- **Metal chunked SSD MMA** for Mamba-2-style prefill using 64-token chunks and parallel SIMD-group matmuls ([#26647](https://github.com/ggml-org/llama.cpp/pull/26647))
- **HIP CUB path via hipCUB** for ARGSORT/TOP_K, replacing the shared-memory bitonic-sort fallback ([#26592](https://github.com/ggml-org/llama.cpp/pull/26592))
- **Expert caching** for large performance gains, self-contained and off by default with `-ehs N` ([#26563](https://github.com/ggml-org/llama.cpp/pull/26563))
- **MoE expert weights served from host RAM over PCIe DMA** to avoid H2D copies, targeting low-VRAM MoE deployments ([#26448](https://github.com/ggml-org/llama.cpp/issues/26448))

## Stability & Regressions

Issues updated in the last 24h, roughly ranked by severity:

- **Crash / device loss**: `vk::DeviceLostError` on Strix Halo (RADV) within a few turns on DeepSeekV4-Flash ([#25664](https://github.com/ggml-org/llama.cpp/issues/25664)) — open.
- **Generation correctness**: Qwen3.6 27B MTP outputs repeated `////` after long sessions ([#23577](https://github.com/ggml-org/llama.cpp/issues/23577)) — open.
- **Generation correctness**: DeepSeek V4 garbled output over RPC + Vulkan ([#26685](https://github.com/ggml-org/llama.cpp/issues/26685)) — open.
- **TTS repetition**: Qwen3-TTS repeating phrase and not stopping on `codec_eos` ([#26700](https://github.com/ggml-org/llama.cpp/issues/26700)) — closed; b10311 fixes the text-stream issue ([#26706](https://github.com/ggml-org/llama.cpp/pull/26706)).
- **Tool-call correctness**: LFM2.5-2.6B-GGUF tool calls fail due to quote handling ([#26658](https://github.com/ggml-org/llama.cpp/issues/26658)) — open.
- **Load/runtime errors**: Gemma MTP "Tensor in buffer cannot run" ([#24366](https://github.com/ggml-org/llama.cpp/issues/24366)) — open/stale.
- **Cache config**: Same K/V cache type enforced for models without a V cache, affecting GLM-5.2 ([#26382](https://github.com/ggml-org/llama.cpp/issues/26382)) — open.
- **Windows backend**: OpenVINO cannot use GPU device on Windows ([#26393](https://github.com/ggml-org/llama.cpp/issues/26393)) — open.
- **Build regression**: `unknown type name '__fp16'` in `simd-mappings.h` ([#26677](https://github.com/ggml-org/llama.cpp/issues/26677)) — open.
- **Router behavior**: In-progress requests aborted on model swap ([#24849](https://github.com/ggml-org/llama.cpp/issues/24849)) and model-load queueing instead of unloading active queries ([#21678](https://github.com/ggml-org/llama.cpp/issues/21678)) — both closed; b10312/b10313 appear to address this.
- **Performance regression**: AMD Strix Halo input layers on CPU causing decreased performance ([#25700](https://github.com/ggml-org/llama.cpp/issues/25700)) — open.
- **Security/trust**: Windows Defender flags `b10195-bin-win-cpu-x64` ([#26343](https://github.com/ggml-org/llama.cpp/issues/26343)) — open.
- **CI/infra**: Winget package update job failing due to `ggml-bot-2` permissions ([#18509](https://github.com/ggml-org/llama.cpp/issues/18509)) — closed.

## What This Means for Application Developers

- **Update to b10326+ for TTS workloads**: timing now includes the vocoder pass, and the Qwen3-TTS repetition issue is addressed. If you run TTS behind an API, regenerate audio timing metrics after upgrading.
- **Multi-model gateways should benefit from b10313/b10312**: LRU scheduling plus no-eviction of busy models reduces surprise request aborts during model swaps. Re-test any custom router/load-balancing assumptions.
- **MTP remains a risk area**: Qwen3.6 MTP and Gemma MTP issues are still open; pin releases and run long-session soak tests if speculative decoding is part of your serving stack.
- **Tool-calling agents need validation**: both the LFM2.5 quote problem ([#26658](https://github.com/ggml-org/llama.cpp/issues/26658)) and the Responses API dropping `namespace`/`web_search` tool types ([#24295](https://github.com/ggml-org/llama.cpp/issues/24295)) can break agent tool loops — not just server internals.
- **Windows/MSYS2 users**: b10308 mitigates a GCC 16.1.0 crash; upgrade if you build or run in the UCRT64 environment.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Digest — 2026-08-08

## Today's Highlights
The MLX runner (Apple Silicon) is the center of gravity today: a new DFlash block-diffusion speculative decoding architecture ([#17571](https://github.com/ollama/ollama/pull/17571)) and image input support ([#17600](https://github.com/ollama/ollama/pull/17600)) are both in flight, the latter carrying the former. On the stability side, a cluster of GPU-backend correctness bugs is getting attention — deterministic CUDA illegal memory access on DGX Spark ([#17596](https://github.com/ollama/ollama/issues/17596)), corrupted AMD ROCm/Vulkan output on Radeon 8060S ([#17604](https://github.com/ollama/ollama/issues/17604), [#17498](https://github.com/ollama/ollama/issues/17498)) — plus two fix PRs for the Laguna parser false-tool-call bug ([#17603](https://github.com/ollama/ollama/pull/17603), [#17616](https://github.com/ollama/ollama/pull/17616)).

## Releases & Breaking Changes
No releases were published in the last 24 hours. No API or configuration migration notes to report. Note that two regressions are tracked against the current line: `CUDA_VISIBLE_DEVICES` behavior changed since 0.24 ([#17609](https://github.com/ollama/ollama/issues/17609)) and a Qwen-model VRAM scheduling regression with a root-caused fix PR already open ([#17517](https://github.com/ollama/ollama/issues/17517), [#17615](https://github.com/ollama/ollama/pull/17615)).

## New Model & Hardware Support
- **MLX vision support (in progress):** [#17600](https://github.com/ollama/ollama/pull/17600) adds image input to the mlx runner. MLX vision checkpoints were already exposed as image-capable, but media was never sent to the runner and prompts were processed as plain text. The implementation preserves prefix caching and speculative decoding.
- **MLX Nemotron 3 (in progress):** [#17060](https://github.com/ollama/ollama/pull/17060) brings Nemotron 3 to MLX with custom NVFP4/MXFP8 expert kernels, including possible refinement of the `GatherQMM` Metal kernel for routed experts.
- **New launcher integrations (in progress):** `ollama launch muse` for Meta's Muse Code CLI ([#17594](https://github.com/ollama/ollama/pull/17594)) and `ollama launch talos` for the Talos permission-kernel agent ([#17589](https://github.com/ollama/ollama/pull/17589)).
- **Rerankers still unsupported:** the long-standing reranking-model request ([#3368](https://github.com/ollama/ollama/issues/3368), 285 👍, open since March 2024) remains unimplemented — LLM and embedding support only.

## Performance & Optimization
- **DFlash block-diffusion speculative decoding:** [#17571](https://github.com/ollama/ollama/pull/17571) proposes a draft model that predicts a whole block of tokens in a single forward pass, attending over hidden states tapped from target layers. It borrows the target's embedding table and output head, which avoids duplicating large parameter tensors.
- **MoE expert offloading (feature request):** [#17557](https://github.com/ollama/ollama/issues/17557) asks for MoE expert weights to live in host RAM with on-demand GPU compute — a 16B MoE (6 GB file) currently requires ~23 GB VRAM, blocking deployment on 8–12 GB GPUs.
- **Qwen VRAM prediction fix:** [#17615](https://github.com/ollama/ollama/pull/17615) identifies the regression's root cause in `llm.PredictServerVRAM` (`llm/llama_server.go`), the Go-side memory estimate the scheduler uses for GGML models served by the upstream `llama-server` subprocess. The KV cache term is mis-accounted, causing models like Qwen3.6 35B to hit the memory ceiling without filling the GPU.
- **Local-to-cloud speculative decoding (feature request):** [#17612](https://github.com/ollama/ollama/issues/17612) proposes using a local draft model with a cloud-hosted target, letting users with local GPUs contribute draft compute to cloud inference.
- **DeepSeek-V4 KV cache investigation:** [#17577](https://github.com/ollama/ollama/issues/17577) reports prompt KV cache loss after idle despite identical prefixes; testing with `LLAMA_ARG_SWA_FULL=1` and 393K context is underway.

## Stability & Regressions
Ranked by severity; fix PRs noted where they exist.

**Critical / high severity**
- **Deterministic CUDA illegal memory access on DGX Spark (GB10):** [#17596](https://github.com/ollama/ollama/issues/17596) — `ggml_cuda_flash_attn_ext_mma_f16_case<256, 256, 8, 8>` fails during large prefill of `qwen3-coder-next:q4_K_M` (Qwen3-Next 80B-A3B, head size 256) on aarch64/128 GB unified memory.
- **Gemma4:e2b crashes on WSL2:** [#16506](https://github.com/ollama/ollama/issues/16506) — llama-server aborts with `GGML_ASSERT(n_inputs < GGML_SCHED_MAX_SPLIT_INPUTS)`, surfacing as HTTP 500.
- **Incorrect output on AMD Radeon 8060S / Ryzen AI MAX+ 395:** [#17604](https://github.com/ollama/ollama/issues/17604) — semantically wrong generations with both Vulkan and ROCm acceleration (closed as reported; reproduction may be tracked via [#17498](https://github.com/ollama/ollama/issues/17498), which shows Gemma 4 12B corruption on ROCm/gfx1151 at ~1,166–1,200 prompt tokens).

**Medium severity**
- **Qwen3.6 35B memory regression:** [#17517](https://github.com/ollama/ollama/issues/17517) — recent update breaks loading on 12 GB GPUs; fix PR [#17615](https://github.com/ollama/ollama/pull/17615) is open.
- **CUDA env-var regression:** [#17609](https://github.com/ollama/ollama/issues/17609) — `CUDA_VISIBLE_DEVICES` is ignored in the newest Ollama, breaking GPU segmentation via systemd.
- **MLX cross-request contamination:** [#17599](https://github.com/ollama/ollama/issues/17599) — with `OLLAMA_KEEP_ALIVE=-1`, a long-lived mlx runner intermittently returns a verbatim earlier answer to a different prompt.
- **Qwen2.5-3B garbage output for Chinese input on Windows CPU:** [#17587](https://github.com/ollama/ollama/issues/17587) — tokenizer mis-detection on CPU emits repeated ASCII (`@@@@@`, `!!!!!`).
- **Garbage output with low KV quantization:** [#17614](https://github.com/ollama/ollama/issues/17614) — switching KV cache from `q8_0` to `q4_0` produces incoherent repeated tokens for one model.
- **`ollama create` fails through NTFS volume mount points:** [#17591](https://github.com/ollama/ollama/issues/17591) — 400 `invalid model name` on Windows 11 (0.32.6) when the GGUF path crosses a junction. Fix PRs: [#17607](https://github.com/ollama/ollama/pull/17607) (closed) and [#17608](https://github.com/ollama/ollama/pull/17608) (open) resolve mount points/symlinks in `fileDigestMap`.
- **`context deadline exceeded` for HF GGUFs:** [#17484](https://github.com/ollama/ollama/issues/17484) — pull/load timeouts on large Hugging Face models.

**Lower severity / edge cases**
- **Laguna parser misclassifies JSON content as tool calls:** [#17602](https://github.com/ollama/ollama/issues/17602) — ordinary JSON bodies starting with `{"` can abort or corrupt replies. Fixes: [#17603](https://github.com/ollama/ollama/pull/17603) and [#17616](https://github.com/ollama/ollama/pull/17616).
- **Tool-parameter `enum` not enforced during decoding:** [#17597](https://github.com/ollama/ollama/issues/17597) — the model sees the enum but can still emit values outside it, unlike `response_format` enforcement.
- **DeepSeek-V4 KV cache lost after idle:** [#17577](https://github.com/ollama/ollama/issues/17577).
- **Docling DocTags missing:** [#17585](https://github.com/ollama/ollama/issues/17585) — output lacks DocTags when using `granite_docling:258m`.
- **Mac "Restart to update" fails for non-admin accounts:** [#11972](https://github.com/ollama/ollama/issues/11972).
- **Panic in model-conversion goroutine:** [#17606](https://github.com/ollama/ollama/pull/17606) fixes [#17179](https://github.com/ollama/ollama/issues/17179) — `POST /api/create` runs converters in a background goroutine not covered by Gin's recovery middleware.
- **Cloud-auth sign-in loop:** [#17613](https://github.com/ollama/ollama/pull/17613) fixes [#17471](https://github.com/ollama/ollama/issues/17471) by treating definitive 4xx responses from local cloud-auth endpoints as non-retryable.

## What This Means for Application Developers
- **Validate tool calls at the application layer.** Two independent gaps surfaced today: `enum` constraints on tool parameters are not enforced during decoding ([#17597](https://github.com/ollama/ollama/issues/17597)), and the Laguna parser can misclassify ordinary JSON in model output as tool calls ([#17602](https://github.com/ollama/ollama/issues/17602)). Both have fixes in flight, but schema-checking tool arguments client-side remains necessary.
- **GPU backend selection matters more than ever on AMD.** If you target Radeon 8060S / Ryzen AI MAX+ 395 (gfx1151), expect corrupted or semantically wrong output with ROCm/Vulkan today ([#17604](https://github.com/ollama/ollama/issues/17604), [#17498](https://github.com/ollama/ollama/issues/17498)) — pin CPU fallback on that hardware until fixed.
- **Qwen/MoE memory planning should improve in the next release** — the scheduler VRAM misprediction is root-caused ([#17615](https://github.com/ollama/ollama/pull/17615)). If you're hitting OOM or context ceiling issues with large Qwen GGUFs on small GPUs, the fix is the direct mitigation.
- **MLX users get the most forward progress:** vision inputs and DFlash speculative decoding are landing for Apple Silicon, plus Nemotron 3 support — worth tracking if you run long-lived MLX runners, though note the current `keep_alive -1` cross-request contamination bug ([#17599](https://github.com/ollama/ollama/issues/17599)).
- **Windows model creation across volumes/junctions is currently broken** in 0.32.6; the NTFS mount-point fix ([#17608](https://github.com/ollama/ollama/pull/17608)) is the one to watch if you store GGUFs on secondary drives.
- **VS Code UX guidance:** Ollama allocates a smaller runtime context than the model's advertised maximum; set Ollama context to ≥64k and reload the VS Code window if local models appear truncated ([#17610](https://github.com/ollama/ollama/pull/17610)).

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-08-08

## 1. Today's Highlights
Router intelligence and cost-accounting correctness dominate this cycle. The team shipped two open router PRs targeting deployment-level affinity and per-model-group routing strategy to keep provider prompt caches warm for multi-turn workloads, while multiple open issues flag cost-tracking regressions — notably Azure `gpt-5.6-luna` under-reporting spend by ~5x. On the admin side, access-group resolution was fixed across `/v1/models` and the team-config UI.

## 2. Releases & Breaking Changes
- **v1.97.0-dev.2** — No functional changelog; reiterates that all Docker images are cosign-signed, pointing to the key introduced in [commit `0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0). Dev builds only; no API/config changes or migration notes.

## 3. New Model & Hardware Support
- **Vertex AI Chirp 3 HD STT/TTS** ([PR #36233](https://github.com/BerriAI/litellm/pull/36233)) — Adds Chirp 3 HD TTS voices and Chirp/Chirp_2/Chirp Telephony STT over gRPC streaming + WebSocket. The existing REST paths error for these models, so this is required transport support, not an incremental addition.
- **Bedrock Nova Sonic realtime tool calling** ([PR #35716](https://github.com/BerriAI/litellm/pull/35716)) — Prefers `toolUse.content` over `toolUse.input` for tool args and fixes response/item IDs for `role=TOOL` turns; tool calls previously never reached the realtime client with arguments.
- **Bedrock Mantle SigV4 service name** ([PR #31988](https://github.com/BerriAI/litellm/pull/31988)) — Corrects signing to `service_name="bedrock-mantle"`; using `"bedrock"` caused IAM permission errors.
- **NVIDIA NIM ranking** ([PR #34177](https://github.com/BerriAI/litellm/pull/34177)) — Preserves native image/text passage fields in reranking (previously silently converted to JSON text) and stops sending unsupported `top_k` to `/v1/ranking`, applying `top_n` after provider response conversion.

## 4. Performance & Optimization
- **Deployment affinity for the auto-router** ([PR #36146](https://github.com/BerriAI/litellm/pull/36146)) — Proposed default-on affinity pins a conversation's turns to the same deployment. The problem statement is concrete: a model group fanned across deployments causes the provider prompt cache to go cold "roughly every other turn." If merged, expect better cache hit rates and lower TTFT for multi-turn agent sessions.
- **Per-model-group routing strategy** ([PR #36115](https://github.com/BerriAI/litellm/pull/36115)) — Adds `model_info.routing_strategy` so load-balancing behavior is set on the model definition itself; also makes Routing Groups' callable group names functional (they previously "silently did nothing").
- **Bedrock guardrail chunking** ([PR #36119](https://github.com/BerriAI/litellm/pull/36119), open) — Fixes oversized `ApplyGuardrail` requests by chunking instead of failing. Note that the current split/merge path "tripled billed calls and latency" — an existing performance tax for large guardrailed payloads.
- **Auto-router benchmark tier tracking** ([PR #36209](https://github.com/BerriAI/litellm/pull/36209)) — Backend stamps complexity tier into each turn's routing decision for per-tier rollups (LIT-5302); frontend dashboard is a follow-up.
- **TPM rate-limit bypass** ([Issue #18730](https://github.com/BerriAI/litellm/issues/18730), closed, stale-labelled) — Concurrent requests could bypass TPM limits entirely. Treat with caution: confirm your deployed version actually enforces per-minute token caps under concurrency before relying on it.

## 5. Stability & Regressions
Ranked by severity.

1. **Azure GPT-5.6 cost under-reporting (~5x)** ([Issue #36094](https://github.com/BerriAI/litellm/issues/36094), open) — Regression after v1.95.0 on `main`/v1.96.0 RCs affecting `azure/gpt-5.6-luna` and `azure/us/gpt-5.6-luna`. Related: [Issue #36192](https://github.com/BerriAI/litellm/issues/36192) reports Azure terra/luna cost-map rows still carry OpenAI's post-cut prices from #35481 instead of Azure meters. Billing dashboards for these models are unreliable right now.
2. **Fireworks AI cached-token billing** ([Issue #32496](https://github.com/BerriAI/litellm/issues/32496), open) — `cost_per_token()` bills 100% of prompt tokens at the full input price, ignoring `prompt_tokens_details.cached_tokens`. [PR #23805](https://github.com/BerriAI/litellm/pull/23805) (stale) separately addresses `response_cost_calculator` ignoring `custom_pricing` when providers return `usage.cost` (OpenRouter et al.).
3. **Claude Code: thinking + tools broken on v1.81.14** ([Issue #22997](https://github.com/BerriAI/litellm/issues/22997), open) — Regression since v1.81.12 with thinking models (e.g., kimi-k2.5). Downgrading is the documented workaround.
4. **OpenAI→Anthropic tool_call arguments lost** ([Issue #27469](https://github.com/BerriAI/litellm/issues/27469), open) — v1.83.7+ regression dropping `function.arguments` during response conversion in a Claude Code → OpenAI provider chain (e.g., glm-5.1).
5. **Batches fallback mis-routing** ([Issue #35359](https://github.com/BerriAI/litellm/issues/35359), open) — `batches.create` retries against a fallback model group and surfaces the wrong provider's error, obscuring the original failure.
6. **Lakera v2 guardrail config ignored** ([Issue #34396](https://github.com/BerriAI/litellm/issues/34396), open) — `skip_system_message_in_guardrail` / `skip_tool_message_in_guardrail` are not honored by the Lakera v2 integration.
7. **INFO logging cannot be disabled** ([Issue #10788](https://github.com/BerriAI/litellm/issues/10788), open) — `LITELLM_LOG=ERROR` does not suppress per-request INFO lines; long-standing (May 2025), 12 comments, still unresolved.
8. **Responses API adapter crash** ([PR #27496](https://github.com/BerriAI/litellm/pull/27496), stale) — `translate_response` fails on `GenericResponseOutputItem`; affects DeepSeek/Kimi via `use_chat_completions_api: true`.
9. **Dependency pin/CVE churn** — python-dotenv pinned `==1.0.1` (CVE-2026-28684, [#26333](https://github.com/BerriAI/litellm/issues/26333) / [#25210](https://github.com/BerriAI/litellm/issues/25210)), python-multipart pinned `0.0.20` (CVE-2026-40347, [#27472](https://github.com/BerriAI/litellm/issues/27472)), and uvicorn `^0.29.0` too low ([#11484](https://github.com/BerriAI/litellm/issues/11484)) — all closed. [#25280](https://github.com/BerriAI/litellm/issues/25280) (closed, 15 comments) asks whether the pinning change in commit `5f63873` was intentional. Python 3.14 install failure from litellm-rust/PyO3 0.23.5 ([#33116](https://github.com/BerriAI/litellm/issues/33116)) also closed.

Recent fixes merged/active in the last 24h: Bedrock websearch snippet restoration ([PR #36228](https://github.com/BerriAI/litellm/pull/36228), fixes 400s on replayed search turns), entity access-group resolution in model listing ([PR #36230](https://github.com/BerriAI/litellm/pull/36230)), UI support for access-group-only teams ([PR #36234](https://github.com/BerriAI/litellm/pull/36234)), and Vertex passthrough batch cost attribution to key/team/tags ([PR #34456](https://github.com/BerriAI/litellm/pull/34456)).

## 6. What This Means for Application Developers
- **Audit cost/spend data if you use Azure GPT-5.6 or Fireworks AI.** The 5x under-report and ignored cached-token pricing mean dashboards can be materially wrong; reconcile against provider invoices until fixes land.
- **Multi-turn agent builders should test the new router affinity and `routing_strategy` options.** If your traffic fans one conversation across deployments behind a model group, prompt cache hit rates are likely poor today; the incoming defaults are designed to fix exactly that.
- **Claude Code users: pin to v1.81.12** if you hit thinking/tool failures on v1.81.14, and validate `function.arguments` preservation on OpenAI↔Anthropic bridging paths for v1.83.7+.
- **Do not rely on LiteLLM TPM enforcement as a hard quota mechanism** — concurrent request patterns have historically bypassed it. Add client-side throttling for external customer guarantees.
- **Library consumers face ongoing dependency friction** from exact pins (`python-dotenv==1.0.1`, `python-multipart==0.0.20`, `uvicorn` `<0.30.0`); bundle/override these in your environment before upgrading.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth Digest — 2026-08-08

## Today's Highlights

Studio reliability is the main theme today: PR #8129 fixes Deep Research progress reporting, loopback auth, and model retries; PR #7944 keeps inference status probes off the event loop to protect token streaming; and PR #8043 makes local model inventory scans linear. On the feature side, Studio is gaining MiniMax H3 video generation (#7989) and real context-length enforcement for MLX models (#8125). No new releases were published in the last 24 hours.

## Releases & Breaking Changes

None in the last 24 hours. No new tags, releases, or migration notes were published. Note that the Docker Hub image is reportedly ~2 months stale, tracked by #7999.

## New Model & Hardware Support

- **MiniMax H3 text-to-video for Studio** — PR #7989 adds MiniMax H3 video generation with synchronized audio, supporting the official BF16 model via Diffusers and quantized GGUF variants via stable-diffusion.cpp.  
  https://github.com/unslothai/unsloth/pull/7989

- **MLX context-length support** — PR #8125 makes Studio size, report, and enforce a real context length for MLX models instead of silently using the app-default `4096`.  
  https://github.com/unslothai/unsloth/pull/8125

- **Non-CUDA verification examples requested** — Issue #8099 asks for end-to-end example scripts so users can validate Unsloth on Intel XPU and AMD ROCm. No merged implementation yet.  
  https://github.com/unslothai/unsloth/issues/8099

- **Apple Silicon/MLX config gap** — Issue #8126 reports four Unsloth mirrors shipping a `config.json` missing a key `mlx-lm` requires, preventing model loading on macOS Metal.  
  https://github.com/unslothai/unsloth/issues/8126

## Performance & Optimization

- **Linear local-model inventory scans** — PR #8043 fixes #7849 by making Studio’s local-model inventory scale with repositories plus state entries instead of the full cache tree; it also coalesces concurrent scans.  
  https://github.com/unslothai/unsloth/pull/8043

- **Status probes off the event loop** — PR #7944 prevents `/api/inference/status` from running llama.cpp capability discovery and release-freshness checks on FastAPI’s event loop. The UI polls this every five seconds, and cold probes were pausing SSE token streaming.  
  https://github.com/unslothai/unsloth/pull/7944

- **AMD ROCm diffusion is pathologically slow** — Issue #8081: a 20-step 1024×1024 Z-Image GGUF request on a 16 GB Windows ROCm card completed in 48m25s. Only 1m47s was actual sampling at 5.40 s/it; the rest is whole-module offload paging and tiled VAE decoding.  
  https://github.com/unslothai/unsloth/issues/8081

## Stability & Regressions

Ranked roughly by severity:

1. **Studio uses system RAM instead of VRAM for local inference** — Issue #7449: GPU compute is used, but VRAM is not, so inference runs through system RAM. Open; no fix PR is linked.  
   https://github.com/unslothai/unsloth/issues/7449

2. **Apple Silicon load failure from missing `mlx-lm` config key** — Issue #8126 affects four Unsloth mirrors/configs. Open.  
   https://github.com/unslothai/unsloth/issues/8126

3. **AMD diffusion offload regression** — Issue #8081, described above; effectively unusable for high-res multi-step generation on ROCm. Open.  
   https://github.com/unslothai/unsloth/issues/8081

4. **Gemma 4 base models missing `<bos>` in tokenizer config** — Issue #7903; open and can cause incorrect generation if unpatched.  
   https://github.com/unslothai/unsloth/issues/7903

5. **Nemotron attention handling bug** — Issue #7527; open, though the title suggests a fix is in progress.  
   https://github.com/unslothai/unsloth/issues/7527

6. **Speculative decoding model not detected in custom folders** — Issue #8077; open.  
   https://github.com/unslothai/unsloth/issues/8077

7. **Studio may silently substitute the Unsloth Hub version of a local model** — Issue #8113; important to verify before fine-tuning.  
   https://github.com/unslothai/unsloth/issues/8113

Closed in the last 24h, likely fixed on `main`:

- **Linux desktop silent X11 crash** — #8062: packaged desktop app exits `rc=1` immediately after backend spawn due to a GTK-swallowed X11 I/O error.  
  https://github.com/unslothai/unsloth/issues/8062

- **Deep Research max_tokens and zero-output stream budget issues** — #7965 and #7964 closed; #8129 further addresses Deep Research progress/auth/retries.  
  https://github.com/unslothai/unsloth/issues/7965  
  https://github.com/unslothai/unsloth/issues/7964

- **Tool calling through Studio** — #4999 closed after discussion. The original report worked against raw `llama-server` but failed through Studio’s proxy.  
  https://github.com/unslothai/unsloth/issues/4999

Notable fix PRs in flight:

- #8128 — torchvision compiled ops mismatch breaking imports.  
  https://github.com/unslothai/unsloth/pull/8128
- #8127 — attach `save_lora` even without a vLLM engine, fixing a GRPO final-save `AttributeError`.  
  https://github.com/unslothai/unsloth/pull/8127
- #7951 — stop padding-free SFT from tripping the TRL ≥ 1.0.0 `max_length` guard.  
  https://github.com/unslothai/unsloth/pull/7951
- #8124 — broken TensorFlow installs no longer break the Unsloth import.  
  https://github.com/unslothai/unsloth/pull/8124
- #8121 — report the real network error when an offline retry finds nothing cached.  
  https://github.com/unslothai/unsloth/pull/8121
- #8057 — cached dataset loads no longer fail on bookkeeping write errors.  
  https://github.com/unslothai/unsloth/pull/8057
- #8119 — reconcile per-model load settings after same-checkpoint reloads.  
  https://github.com/unslothai/unsloth/pull/8119
- #8050 — fall back to CPU when auto-selected Vulkan crashes.  
  https://github.com/unslothai/unsloth/pull/8050
- #8046 — block HTTP loopback requests from untrusted Hub README images.  
  https://github.com/unslothai/unsloth/pull/8046
- #8108 — verify TLS against the OS trust store at runtime for corporate TLS-inspection proxies.  
  https://github.com/unslothai/unsloth/pull/8108

## What This Means for Application Developers

- **Studio is getting more reliable for agent-style workloads.** The Deep Research fixes (#8129) and event-loop fix (#7944) should reduce stalled streams, phantom API-monitor triggers, and unreliable progress reporting.

- **If you use Studio as an OpenAI-compatible proxy, re-test any tool-calling paths.** Issue #4999 was closed, and the earlier failure mode was specific to Studio’s proxy. Compare against direct `llama-server` if issues persist.

- **MLX/Apple Silicon users should verify model configs.** Issue #8126 can block loading entirely. PR #8125 will at least make the served context length explicit instead of silently defaulting to 4096.

- **AMD/ROCm visual-generation workloads are not viable yet for high-res multi-step generation.** The 48-minute 20-step image from #8081 means CUDA or smaller quantized models remain the practical path until the offload behavior is fixed.

- **If you automate fine-tunes with Studio, confirm which model is actually training.** Issue #8113 shows Studio may download the Unsloth Hub variant instead of using the local model you selected.

- **Python API users should update after these PRs merge** if they use GRPO with `fast_inference=False` (#8127), padding-free SFT with TRL ≥ 1.0 (#7951), or mixed torch/torchvision environments (#8128). Since there is no release yet, pinning to `main` may be necessary to get these fixes early.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*