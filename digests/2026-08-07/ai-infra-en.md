# AI Infrastructure Digest 2026-08-07

> Generated: 2026-08-07 02:02 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# Cross-Project AI Infrastructure Comparison Report
**Date:** 2026-08-07 | **Coverage:** vLLM, SGLang, llama.cpp, Ollama, LiteLLM, Unsloth

*Note: Activity counts refer to issues/PRs referenced in each project's 24-hour digest, not necessarily opened in the last 24h.*

---

## 1. Ecosystem Overview

The inference stack is converging on **DeepSeek-V4-family enablement** as the primary battleground, with every major engine racing to stabilize DSpark speculative decoding while SM8x (A100/A800) support remains a glaring gap — vLLM still cannot serve DeepSeek-V4-Flash on Ampere, and SGLang only recently resolved its A800 blockers. Blackwell (SM100/103/120) optimization programs are expanding across all engines, but TP8 CUDA-graph memory-safety issues and reasoning-model edge cases are generating a steady stream of high-severity regressions. Kimi-K3, GLM-5.2, Qwen3.5/3.6, and Gemma-4 are the secondary model families driving architectural work (DCP, FA4, FP8 kernels, MTP). At the platform layer, multi-agent tooling is moving into serving and gateway infrastructure via agent launches (Ollama), deployment-level session affinity (LiteLLM), and distributed-KV roadmaps (SGLang).

---

## 2. Activity Comparison

| Project | Issues cited | PRs cited | Releases (24h) | Layer / Role |
|---|---|---|---|---|
| **vLLM** | 17 | 16 | None | High-throughput serving engine |
| **SGLang** | 17 | 13 | None | Serving engine (frontier models) |
| **llama.cpp** | 10 | 13 | **5** (b10291–b10298) | Local/edge runtime |
| **Ollama** | 12 | 7 | None | Local developer runtime + cloud |
| **LiteLLM** | 13 | 14 | None | Gateway / LLM proxy |
| **Unsloth** | 15 | 11 | None | Fine-tuning + Studio serving |

**Observations:**
- **llama.cpp is the only project shipping daily** — 5 maintenance releases (Vulkan DeviceLost diagnostics, ROCm CI gfx1151, MTMD chunk save/load, quantized stride fix, CORS proxy fix) — reflecting a mature, high-cadence maintenance mode.
- **vLLM and SGLang have the highest issue/PR intensity with zero releases** — both are deep in stabilization cycles (DeepSeek-V4 enablement, DSpark memory safety) before the next cut.
- **Ollama has the lowest PR velocity** but the most consumer-visible breakage (macOS perf regression, cloud auth outage, Windows tokenizer garbage).
- **LiteLLM's queue is almost entirely router hardening** (fallback-walk bounding, session affinity, TPM reservation) rather than new model support.
- **Unsloth is in a Studio-hardening phase** — desktop packaging, watchdog logic, event-loop blocking, and cache reliability dominate over new model architectures.

---

## 3. Model Support Race

*None of the projects shipped full new-model releases in the last 24h; the table reflects merged PRs, open PRs, and in-flight work.*

| Model family | vLLM | SGLang | llama.cpp | Ollama |
|---|---|---|---|---|
| **DeepSeek-V4 (Flash/Pro/0731)** | ⚠️ Partial — SM8x unsupported (#50576); SM120 FlashInfer routing bug (#50720) | ✅ **Most advanced** — DSpark on CUDA + AMD HIP (#30964); TRT-LLM SM100/103 attention (#30805); A800 blockers resolved | ✅ Functional — DSpark ~50% over MTP (#25784); CUDA FA "repeat `<`" bug open (#26509) | — Not mentioned |
| **Kimi-K3** | ✅ **Leader (GPU)** — DCP with A2A/NVLS (#50484); ROCm gap tracked | ✅ Ascend NPU port (#33465) | — Not mentioned | — Not mentioned |
| **GLM-5.2 / 4.7** | ✅ Sprint ongoing (#46654); MTP skip_topk fix (#48528) | ✅ GLM-4.7-Flash FA4 backend (#33436) | ⚠️ KV-cache type-enforcement bug (#26382) | — Not mentioned |
| **Qwen3-Next / 3.5 / 3.6** | — Not highlighted | 🔄 MoE expert fusion planned (#33706) | ✅ Qwen3-Next MTP + scale tensors (#25589) | ⚠️ Qwen3-Next crash on DGX Spark (#17596); Qwen3.6 macOS regression (#17583) |
| **Gemma-4** | ✅ FA4 FP8 kernel + FP8 KV-dequant, SM90 (#48666) | — Not highlighted | ✅ OpenCL cluster decode for DK=512 (#26430) | ✅ Thinking-budget cap (#17566) |
| **MiniMax-H3** | — Not highlighted | ✅ Cross-node SP + Turbo LoRA merging (#33327, #33875) | — Not mentioned | — Not mentioned |
| **Nemotron-H** | — Not mentioned | ✅ ModelOpt mixed-precision routing fix (#33543) | — Not mentioned | — Not mentioned |
| **BailingMoE3 / Ling 3.0** | — Not mentioned | — Not mentioned | ✅ Support added (#26608) | — Not mentioned |
| **Mistral (MLX)** | — Not mentioned | — Not mentioned | — Not mentioned | ✅ MLX runner support (#17068) |

**Who is ahead:**
- **SGLang leads on DeepSeek-V4 breadth** (CUDA + HIP + TRT-LLM attention + resolved A800) — but TP8 stability issues undercut production readiness.
- **vLLM leads on distributed serving** (Kimi-K3 DCP) **and kernel work** (Gemma-4 FA4, batch-sharded sampling).
- **llama.cpp leads on local/quantized model breadth** — Qwen3-Next MTP, BailingMoE3, and DeepSeek-V4 DSpark are all functional today on commodity hardware.
- **Ollama trails on new architecture support** but is the only project adding agent-launch integrations (Muse, Talos).

---

## 4. Performance Frontier

Optimization effort is concentrated in five areas:

### 1. Speculative Decoding (hottest area)
- **DSpark is displacing MTP** as the preferred DeepSeek-V4 path: llama.cpp reports ~50% speedup (#25784); DeepSeek did not ship MTP in the 0731 models.
- **SGLang shows the risk profile:** TP8 CUDA-graph illegal memory access (#33356, #31023), context-boundary RoPE crash (#33454), and an AIME accuracy regression under speculation (97.08 → 93.96, #32038).
- **vLLM** fixed the prefix-caching + MTP ~20% accuracy drop (#43559) with e2e regression tests (#48970).

### 2. KV Cache (FP8 / quantized / persistence)
- vLLM: FP8 KV-dequant for Gemma-4 FA4 on SM90 (#48666).
- llama.cpp: quantized KV (`q4_0`/`q8_0`) TILE decode kernels on SYCL — +42% to +169% on Qwen3.6-35B / Gemma-4 (#26689).
- llama.cpp b10298: MTMD chunk save/load for multimodal persistence (#26645).
- SGLang: HiCache batch pipeline-parallel write/load sync (#33473).
- SGLang: distributed-KV roadmap for agentic workloads (#21846) is a strong community signal.

### 3. Distributed Serving (multi-node/Blackwell)
- vLLM: Kimi-K3 DCP — symmetric-memory A2A reduction, fused MLA DCP, NVLS-multicast query gather (#50484).
- SGLang: cross-node sequence parallelism for MiniMax-H3 — node-local Ulysses + cross-node Ring attention (#33327).
- vLLM RFC: CUDA checkpoint/restore for near-zero cold starts via multi-model swap (#34303, draft).

### 4. Batching / Scheduling / Routing
- vLLM: Model Runner V2 batch-sharded sampling cuts speculative-decode logit memory by `1/P` under TP (#50465); DFlash scheduling-budget fix (#51256); thinking-token budget (#46727).
- SGLang: warmup autotuning fix so large prefill batches don't fall outside tuned FlashInfer ranges (#32556).
- LiteLLM: bounded fallback-walk work — one malformed request produced **456 MB of logs in 9 minutes** and stalled `/health/liveliness` (#36148); configurable TPM output-token estimates (#36143).

### 5. Quantization & Kernels
- SGLang Blackwell/SM120 roadmap: per-tensor FP8 GEMM (#33632), blockwise FP8 GEMM (#33629), Qwen3.5/3.6 shared-to-sparse MoE expert fusion (#33706).
- vLLM Intel XPU: native `torch._scaled_mm` blockwise FP8 linear (#50826).
- SGLang: W4A16 NVFP4 MoE experts routed to Marlin vs SM100 default (#33543).
- Kernel blockages remain severe: head-size-256 flash attention deterministically crashes Ollama on DGX Spark (#17596); FlashInfer sparse MLA fails on SM120 in vLLM (#50720); TurboQuant KV cache crashes vLLM on RTX 5080 (#41726).

---

## 5. Layer Positioning

| Layer | Projects | Primary concern today |
|---|---|---|
| **Serving engines** (multi-node, production throughput) | vLLM, SGLang | TP8 CUDA-graph memory safety, DCP/SP for Blackwell, speculative-decoding accuracy & stability |
| **Local/edge runtime** (broad hardware, low latency) | llama.cpp | Widest hardware reach (CUDA, Vulkan, OpenCL, SYCL, ROCm, CPU); daily release cadence; quantization breadth |
| **Local developer runtime + cloud** (UX + API surface) | Ollama | OpenAI Responses API compatibility, agent launches (Muse/Talos), consumer-grade stability across macOS/Windows/Linux |
| **Gateway / proxy** (routing, auth, rate limits, conversions) | LiteLLM | Router hardening, TPM enforcement accuracy, guardrail enforcement, OpenAI↔Anthropic conversion regressions |
| **Fine-tuning / training + serving** | Unsloth | Studio reliability (watchdog, event-loop, X11 crash), memory controls (`--mlock`), ROCm/Linux packaging |

**Boundary blurring:** LiteLLM is absorbing serving-adjacent responsibilities (prompt-cache-warm session affinity, Anthropic usage accounting); vLLM/SGLang are adding gateway-adjacent features (reasoning budgets, health semantics); Ollama is the only project pushing into the *agent launcher* layer rather than deeper into kernel work.

---

## 6. Trend Signals

1. **DSpark is the new speculative-decoding default for DeepSeek-V4 — but TP8 readiness is the gating risk.** Every engine is investing here; SGLang's repeated illegal-memory-access bugs at TP8 and vLLM's SM120 routing failure are the top stability themes. **Action:** pin CUDA-graph batch sizes conservatively and re-validate accuracy before scaling TP8.

2. **A100/SM8x is being left behind for frontier models.** vLLM still cannot serve DeepSeek-V4-Flash on A100; SGLang just resolved its blockers; llama.cpp has no SM8x-specific gap. **Action:** if your fleet is Ampere-heavy, plan Blackwell migration or accept a model-generation gap of 1–2 quarters.

3. **Reasoning models are forcing serving-layer redesign.** Thinking-token budgets (vLLM, Ollama, Unsloth), `reasoning_effort` off-by-one mapping (SGLang #33185), health-check false negatives from `max_tokens=1` (LiteLLM #26987), and unreliable `think:false` (Ollama #17588) all indicate reasoning models require explicit budget, health, and output-suppression handling at the platform layer — not just at the model layer.

4. **Multi-agent workloads are the new target workload.** Ollama's Muse/Talos launches, LiteLLM's deployment-granular session affinity (keeping provider prompt caches warm across multi-turn agent sessions), and SGLang's distributed-KV roadmap (#21846) all point the same direction: single-turn chat is no longer the design center.

5. **Hardware diversity is expanding but operationally fragile.** Intel XPU, AMD ROCm (MI350X, gfx1151, RDNA4), and consumer Blackwell (SM120/121) all have active enablement, but recurring crashes/hangs (XPU IPC failures, ROCm RDNA4 multimodal load failure, SM121 illegal instructions) mean heterogeneous fleets still carry real reliability risk.

6. **Security and operational resilience are now digest-level differentiators.** LiteLLM is shipping dependency bumps (`h2`, `js-yaml`) and login rate limiting; llama.cpp is documenting RCE exposure via `--tools`/`-ag`; Ollama fixed a `log.Fatal`-on-blob-read bug that killed the entire server; Unsloth now fails closed on misconfigured Windows Defender. Expect platform teams to weigh these more heavily in vendor selection.

---

### Bottom Line for Technical Decision-Makers

| If you run... | Recommended posture |
|---|---|
| DeepSeek-V4 at TP8 with DSpark | **Do not promote to production** — wait for SGLang #33356/#31023 fixes; pin batch sizes ≤32 |
| A100/A800 fleets serving DeepSeek-V4-Flash | Use SGLang (A800 resolved) or llama.cpp; vLLM still blocked |
| Ollama 0.32.5 on macOS | **Pin/rollback** — Qwen3.6-35B-A3B regression is confirmed (#17583) |
| LiteLLM v1.83.7 (Claude Code) | **Pin to known-good** — `tool_call.function.arguments` dropped in OpenAI→Anthropic conversion (#27469) |
| Production serving on Intel XPU / consumer Blackwell | **Hold** — recurring IPC, host-memory, and FlashInfer routing bugs; wait for next stable releases |
| Agent workloads with multi-turn sessions | Adopt LiteLLM session affinity (#36146) when merged; monitor SGLang distributed-KV roadmap |

The next 2–4 weeks will be defined by whether SGLang and vLLM can stabilize TP8 DSpark serving and close the DeepSeek-V4 SM8x gap. Until then, conservative version pinning and application-level fallbacks remain the safest strategy.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest — 2026-08-07

## 1. Today's Highlights
No releases shipped in the last 24 hours, but issue/PR activity remains intense around DeepSeek-V4-Flash enablement: SM8x (A100/A800) support is the most-discussed open thread ([#50576](https://github.com/vllm-project/vllm/issues/50576), 71 comments), with a new report showing the 0731 checkpoint also fails on SM120 RTX PRO 6000 via FlashInfer sparse MLA routing ([#50720](https://github.com/vllm-project/vllm/issues/50720)). On the correctness front, the ~20% accuracy drop from prefix caching + MTP speculative decoding ([#43559](https://github.com/vllm-project/vllm/issues/43559)) is now closed, with e2e regression tests landing in [#48970](https://github.com/vllm-project/vllm/pull/48970). Speculative-decoding and Kimi-K3 work continue to dominate PRs: DFlash scheduling budget fix ([#51256](https://github.com/vllm-project/vllm/pull/51256)), checkpoint-declared draft method handling ([#51338](https://github.com/vllm-project/vllm/pull/51338)), and Kimi-K3 DCP support ([#50484](https://github.com/vllm-project/vllm/pull/50484)).

## 2. Releases & Breaking Changes
None in the last 24 hours. Watch items on the horizon:
- **NaN-in-logits async copy (MRV1)** — [#51304](https://github.com/vllm-project/vllm/pull/51304) moves NaN counting to an asynchronous host copy so that enabling NaN checking by default in CI won't disable async scheduling. No user-facing config change, but behavior around `VLLM_COMPUTE_NANS_IN_LOGITS` will shift.
- **Python 3.14 compat (CI)** — [#51312](https://github.com/vllm-project/vllm/pull/51312) upgrades `torchao` to 0.18.0 to fix a `__module__` assignment error on the AMD test group.

## 3. New Model & Hardware Support
- **DeepSeek-V4-Flash-0731**: SM8x (A100/A800) still unsupported — tracked in [#50576](https://github.com/vllm-project/vllm/issues/50576) / [#40851](https://github.com/vllm-project/vllm/issues/40851). On SM120 (RTX PRO 6000), DSpark fails in FlashInfer sparse MLA decode kernel routing ([#50720](https://github.com/vllm-project/vllm/issues/50720)).
- **Kimi-K3**: Decode context parallelism (DCP) support — symmetric-memory A2A output/LSE reduction, fused MLA DCP, NVLS-multicast query gather — lands in [#50484](https://github.com/vllm-project/vllm/pull/50484). ROCm gap/roadmap tracking continues in [#50682](https://github.com/vllm-project/vllm/issues/50682).
- **Gemma-4**: FA4 FP8 kernel PR ([#48666](https://github.com/vllm-project/vllm/pull/48666)) wires the CuTeDSL FA4 kernel with FP8 KV-dequant on SM90 for 512-wide full-attention heads (sliding attention stays at 256-wide).
- **DFlash**: Bring-up tracker closed ([#46105](https://github.com/vllm-project/vllm/issues/46105)); follow-up scheduling fix in [#51256](https://github.com/vllm-project/vllm/pull/51256).
- **Intel XPU**: Enables native `torch._scaled_mm` blockwise FP8 linear backend ([#50826](https://github.com/vllm-project/vllm/pull/50826)); config-driven XPUGraph mode fix for unset env vars ([#50389](https://github.com/vllm-project/vllm/pull/50389)).
- **ROCm**: LMCache kv-connector packages added to the docker image (WIP, [#51208](https://github.com/vllm-project/vllm/pull/51208)).

## 4. Performance & Optimization
- **Model Runner V2 batch-sharded sampling** ([#50465](https://github.com/vllm-project/vllm/pull/50465)): eliminates full `O(batch × (num_spec_tokens+1) × vocab)` logit materialization before sampling; per-step memory drops by a factor of `1/P` under TP.
- **Gemma-4 FA4 FP8 kernel** ([#48666](https://github.com/vllm-project/vllm/pull/48666)): full-attention layers on SM90 upgrade from FA3 to FA4 CuTeDSL with FP8 KV cache dequant.
- **Kimi-K3 DCP** ([#50484](https://github.com/vllm-project/vllm/pull/50484)): direct symmetric-memory A2A reduction with empty-KV-shard masking plus NVLS-multicast query gather for the fused MLA layer.
- **GLM-5.2 optimization sprint**: [#46654](https://github.com/vllm-project/vllm/issues/46654) continues with several tasks checked off (e.g., [#36559](https://github.com/vllm-project/vllm/pull/36559), [#46642](https://github.com/vllm-project/vllm/pull/46642)); fix for MTP index-share `skip_topk` on the fused DSA path in [#48528](https://github.com/vllm-project/vllm/pull/48528).
- **`thinking_token_budget` in Model Runner V2** ([#46727](https://github.com/vllm-project/vllm/pull/46727)): caps long reasoning traces in quantized models (GLM-5.2/Qwen FP8).
- **RFC — CUDA Checkpoint/Restore** ([#34303](https://github.com/vllm-project/vllm/issues/34303)): proposal for near-zero cold starts via multi-model swap, v1 engine only, still in draft.

## 5. Stability & Regressions
Ranked by severity:

1. **Prefix-caching + MTP accuracy drop (~20%)** — [#43559](https://github.com/vllm-project/vllm/issues/43559) is **closed**; fix verified, e2e regression coverage for hybrid-Mamba prefix-cache corruption lands in [#48970](https://github.com/vllm-project/vllm/pull/48970).
2. **DeepSeek-V4-Flash-0731 + DSpark on SM120** — [#50720](https://github.com/vllm-project/vllm/issues/50720): FlashInfer sparse MLA decode kernel routing failure on RTX PRO 6000 Blackwell, open.
3. **GLM-5.2-FP8 + DSpark RPC timeout** — [#48752](https://github.com/vllm-project/vllm/issues/48752): `sample_tokens` timeout with TP=8 across 2×GB200 nodes, open.
4. **TurboQuant KV cache crash** — [#41726](https://github.com/vllm-project/vllm/issues/41726): large chunked continuation prefill crash after workspace lock on RTX 5080, open.
5. **Qwen3.5 GDN kernel illegal memory access** — [#34948](https://github.com/vllm-project/vllm/issues/34948): nightly build on H200, open.
6. **Intel Arc B50 TP=2 — `zeMemOpenIpcHandle` INVALID_ARGUMENT** — [#48953](https://github.com/vllm-project/vllm/issues/48953): worker init failure on dual Battlemage, open.
7. **Mamba-2 Triton illegal instruction on SM121 (DGX Spark)** — [#37431](https://github.com/vllm-project/vllm/issues/37431): async-mode only; workaround `CUDA_LAUNCH_BLOCKING=1`, open.
8. **ROCm RDNA4 multimodal load failure** — [#49851](https://github.com/vllm-project/vllm/issues/49851): `vit_torch_sdpa_wrapper` fails on gfx1201; text-only models fine, open.
9. **XPU host memory not released after load** — [#50269](https://github.com/vllm-project/vllm/issues/50269), open.

Closed in the last 24h: Gemma-4 31B incoherent high-context responses ([#51140](https://github.com/vllm-project/vllm/issues/51140)), XPU multi-GPU TP hang on Arc B60 with torch 2.13 ([#50545](https://github.com/vllm-project/vllm/issues/50545)), Intel B60 endless-`!` long-context output ([#43428](https://github.com/vllm-project/vllm/issues/43428)).

New fix PRs to watch: [#51338](https://github.com/vllm-project/vllm/pull/51338) (spec decode trusts checkpoint-declared method over path heuristics), [#51256](https://github.com/vllm-project/vllm/pull/51256) (DFlash bonus-query slot reservation), [#51337](https://github.com/vllm-project/vllm/pull/51337) (XPU CI segfault workaround via `VLLM_DISABLE_COMPILE_CACHE=1`).

## 6. What This Means for Application Developers
- **A100/A800 operators still can't serve DeepSeek-V4-Flash or -0731** — plan around Hopper/Blackwell or follow [#50576](https://github.com/vllm-project/vllm/issues/50576) / [#40851](https://github.com/vllm-project/vllm/issues/40851) for the SM8x bring-up timeline. SM120 (RTX PRO 6000) users hit a separate FlashInfer routing bug ([#50720](https://github.com/vllm-project/vllm/issues/50720)).
- **If you combined prefix caching with MTP/EAGLE on hybrid-Mamba models** (e.g., Qwen3.6-35B-A3B), upgrade to a build containing the [#43559](https://github.com/vllm-project/vllm/issues/43559) fix; the new e2e tests in [#48970](https://github.com/vllm-project/vllm/pull/48970) make this a guarded path going forward.
- **DFlash users**: the scheduling-budget fix ([#51256](https://github.com/vllm-project/vllm/pull/51256)) resolves a one-slot-per-request shortfall — relevant when tuning `max_num_batched_tokens`/`max_num_seqs`.
- **Kimi-K3 and GLM-5.2 deployments are converging on production-grade support** — DCP ([#50484](https://github.com/vllm-project/vllm/pull/50484)) and the GLM-5.2 sprint ([#46654](https://github.com/vllm-project/vllm/issues/46654)) are the threads to watch for multi-node/Blackwell performance.
- **Intel XPU multi-GPU serving remains fragile**: several TP bugs were closed, but new IPC and host-memory issues ([#48953](https://github.com/vllm-project/vllm/issues/48953), [#50269](https://github.com/vllm-project/vllm/issues/50269)) suggest holding off on production XPU TP=2 until the next stable release.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest — 2026-08-07

## Today's Highlights

No new releases landed in the last 24 hours; activity is concentrated on two fronts. First, the **DSpark-on-TP8 CUDA-graph memory-safety cluster** remains the most severe open stability risk for DeepSeek-V4-Pro/Flash deployments, with two distinct illegal-memory-access bugs under investigation ([#31023](https://github.com/sgl-project/sglang/issues/31023), [#33356](https://github.com/sgl-project/sglang/issues/33356)). Second, the **Blackwell/SM120 optimization program** continues to expand with new FP8 GEMM and Qwen3.5/3.6 MoE expert-fusion work items ([#33632](https://github.com/sgl-project/sglang/issues/33632), [#33706](https://github.com/sgl-project/sglang/issues/33706)). Notable infrastructure PRs in flight include TRT-LLM DeepSeek-V4 attention for SM100/103 ([#30805](https://github.com/sgl-project/sglang/pull/30805)) and cross-node sequence parallelism for MiniMax-H3 ([#33327](https://github.com/sgl-project/sglang/pull/33327)).

## Releases & Breaking Changes

None. No releases or API/config changes were published in the last 24 hours.

## New Model & Hardware Support

- **[PR #33465](https://github.com/sgl-project/sglang/pull/33465)** — Kimi-K3 support for Ascend NPU, building on the GPU integration from #32541, with NPU-specific paths dispatched through the Ascend backend and extracted Triton kernels.
- **[PR #30805](https://github.com/sgl-project/sglang/pull/30805)** — Integration of TRT-LLM DeepSeek-V4 attention for SM100/SM103 (Blackwell), targeting the flashinfer_trtllm path.
- **[PR #30964](https://github.com/sgl-project/sglang/pull/30964)** — DeepSeek-V4 DSpark support for AMD HIP, following the existing CUDA implementation.
- **[PR #33436](https://github.com/sgl-project/sglang/pull/33436)** — FA4 (FlashAttention-4) backend support for GLM-4.7-Flash.
- **[PR #33543](https://github.com/sgl-project/sglang/pull/33543)** — Correct backend routing for Nemotron-H ModelOpt mixed-precision checkpoints: W4A16 NVFP4 MoE experts now go through Marlin while regular NVFP4/W4A4 keeps the SM100 flashinfer_trtllm default.
- **[PR #33875](https://github.com/sgl-project/sglang/pull/33875)** — Fixes 4/8-step distilled MiniMax-H3 Turbo LoRA merging, enabling low-step T2VA serving on the FL2VA base.

## Performance & Optimization

- **[Issue #19637](https://github.com/sgl-project/sglang/issues/19637)** — SM120 performance roadmap tracks several Blackwell items; newly added: per-tensor FP8 GEMM ([#33632](https://github.com/sgl-project/sglang/issues/33632)), FP8 blockwise GEMM ([#33629](https://github.com/sgl-project/sglang/issues/33629)), and shared-to-sparse expert fusion for Qwen3.5/3.6 MoE ([#33706](https://github.com/sgl-project/sglang/issues/33706)).
- **[PR #32556](https://github.com/sgl-project/sglang/pull/32556)** — Warmup autotuning for FlashInfer only ran decode-shaped forwards; this fixes extend buckets so large prefill batches don't fall outside tuned ranges at serving time.
- **[PR #33327](https://github.com/sgl-project/sglang/pull/33327)** — Cross-node sequence parallelism for MiniMax-H3: node-local Ulysses combined with cross-node Ring attention, plus `--nnodes`/`--node-rank` launch infra. Relatedly, **[PR #33923](https://github.com/sgl-project/sglang/pull/33923)** migrates remaining zimage/hunyuanvideo attention to USPAttention.
- **[PR #33924](https://github.com/sgl-project/sglang/pull/33924)** and **[PR #33921](https://github.com/sgl-project/sglang/pull/33921)** — Multimodal transport optimization: large CPU feature tensors move over Gloo collectives instead of pickle, and Kimi-K3 CPU-transport images defer resize/normalize/H2D until the vision-owner rank is chosen.
- **[PR #33473](https://github.com/sgl-project/sglang/pull/33473)** — Batch pipeline-parallel write/load completion sync in HiCache to reduce scheduler overhead.
- **[PR #25199](https://github.com/sgl-project/sglang/pull/25199)** — Removes the silent ×0.85 `mem_fraction_static` derate for the aiter backend on context lengths >8K.

## Stability & Regressions

Ranked by severity:

1. **DSpark large-decode CUDA-graph capture fails with non-deterministic illegal memory on TP8** ([#33356](https://github.com/sgl-project/sglang/issues/33356)) — Reproduced on the official v0.5.16 image with DeepSeek-V4-Pro-DSpark at TP8 for decode batch sizes beyond the stable `bs <= 32` range. No fix PR yet.
2. **DSpark compact target-verify CUDA-graph illegal memory on TP8** ([#31023](https://github.com/sgl-project/sglang/issues/31023)) — Cross-TP planning inconsistency plus a timing-sensitive secondary bug in the compact ragged verify path. Still open.
3. **DSpark verify window crossing the model context boundary** ([#33454](https://github.com/sgl-project/sglang/issues/33454)) — Causes an illegal RoPE read when the ragged verify window extends past the context limit.
4. **DSpark speculative decoding accuracy regression on DeepSeek-V4-Flash** ([#32038](https://github.com/sgl-project/sglang/issues/32038)) — AIME25 drops from 97.08 to 93.96 under speculation.
5. **`inference_mode` mismatch breaks lazy buffers** ([#33470](https://github.com/sgl-project/sglang/issues/33470)) — Warmup/autotune runs under `torch.inference_mode()` while real forward doesn't, making lazy-allocated buffers unsafe for inplace updates. Closed — fix available.
6. **MiniMax-H3 `/health` bypasses `warmup_done.wait()`** ([#33719](https://github.com/sgl-project/sglang/issues/33719)) — Health checks report green while inference POSTs block ~264s during warmup.
7. **DeepSeek-V4-Flash `reasoning_effort` mapped one level off** ([#33185](https://github.com/sgl-project/sglang/issues/33185)) — `high` is a no-op and the vendor `max` level is unreachable in v0.5.16 and main.
8. **W4AFP8 + DeepEP crashes with `routed_scaling_factor` TypeError** ([#33660](https://github.com/sgl-project/sglang/issues/33660)) — All DP/TP/EP ranks crash at first inference.
9. **Kimi-K3 KDA prefill hang on MI350X (ROCm)** ([#33846](https://github.com/sgl-project/sglang/issues/33846)) — Intermittent hang in `chunk_kda_fwd → tolist() → hipMemcpy D2H` at batch size 1 with DSpark speculation.
10. **Nightly-dev image revision mismatch** ([#33628](https://github.com/sgl-project/sglang/issues/33628)) — The nightly image label/attestation commit can differ from the installed source; closed.

Also reopened/closed: the Qwen3.6 tool-call-parser issue ([#25242](https://github.com/sgl-project/sglang/issues/25242)) was closed as inactive, and the A800/SM80 DeepSeek-V4-Flash blockers ([#33194](https://github.com/sgl-project/sglang/issues/33194)) were resolved.

## What This Means for Application Developers

- **DSpark + TP8 is not safe for production yet on v0.5.16.** If you serve DeepSeek-V4-Pro/Flash with DSpark at TP8, pin your CUDA-graph batch sizes conservatively or wait for the fixes around [#33356](https://github.com/sgl-project/sglang/issues/33356) / [#31023](https://github.com/sgl-project/sglang/issues/31023). Expect intermittent illegal-memory-access failures on large decode batches.
- **DeepSeek-V4-Flash `reasoning_effort` mapping is off-by-one** ([#33185](https://github.com/sgl-project/sglang/issues/33185)) — if you rely on `high`/`max` effort tiers, verify your request actually triggers the vendor max behavior; the current mapping silently no-ops.
- **Don't trust `/health` on MiniMax-H3 until warmup completes** ([#33719](https://github.com/sgl-project/sglang/issues/33719)) — a green health check can precede a ~4-minute inference blackhole. Add readiness gating on the application side if your orchestrator probes health before routing traffic.
- **Nightly images may not match their advertised commit** ([#33628](https://github.com/sgl-project/sglang/issues/33628)) — for reproducible serving, prefer release images over `nightly-dev` and verify the installed `sglang.__version__`/commit at runtime.
- **The distributed-KV and simulator roadmaps are the medium-term trends to watch** — [#21846](https://github.com/sgl-project/sglang/issues/21846) (distributed KV cache for agentic workloads) and [#21891](https://github.com/sgl-project/sglang/issues/21891) (SGLang simulator) both have strong community support and active discussion, signaling where the project is heading for large-scale agent deployments.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp Digest — 2026-08-07

## Today's Highlights

Multiple maintenance releases landed today, headlined by **b10298** adding MTMD chunk save/load support (#26645) and **b10291** bringing Vulkan DeviceLost diagnostics plus a submission batching fix (#26371). New AMD ROCm CI coverage with gfx1151 fixes was also merged (#26544), and the project saw active work on DeepSeek-V4 DSpark, MTP support for additional architectures, and OpenCL/SYCL performance kernels.

## Releases & Breaking Changes

- **b10298** — `mtmd: add chunk save/load function (#26645)`, including tests.  
  https://github.com/ggml-org/llama.cpp/pull/26645
- **b10297** — `server: fix empty response for /cors-proxy (#26656)`.  
  https://github.com/ggml-org/llama.cpp/pull/26656
- **b10295** — `model-loader: fix quantized reshaped tensor strides (#26672)`.  
  https://github.com/ggml-org/llama.cpp/pull/26672
- **b10293** — CI onboarding for AMD ROCm with gfx1151 fixes (#26544).  
  https://github.com/ggml-org/llama.cpp/pull/26544
- **b10291** — Vulkan: fix submission batching size and add debug tooling for diagnosing DeviceLost errors (#26371).  
  https://github.com/ggml-org/llama.cpp/pull/26371

No breaking API changes were noted in these releases.

## New Model & Hardware Support

- **BailingMoE3 support** — PR #26608 adds support for BailingMoE 3, enabling Ling 3.0 flash models with MTP.  
  https://github.com/ggml-org/llama.cpp/pull/26608
- **DeepSeek-V4 MTP + DSpark** — PR #25784 notes DeepSeek did not ship MTP with the latest 0731 models; DSpark is recommended and provides roughly ~50% speedup with `--spec`-style decoding.  
  https://github.com/ggml-org/llama.cpp/pull/25784
- **Qwen3-Next MTP support** — PR #25589 adds MTP support for Qwen3-Next, including optional `.scale` tensors passed through to attention/MoE matmuls.  
  https://github.com/ggml-org/llama.cpp/pull/25589
- **AMD ROCm CI** — b10293 adds ROCm CI coverage with gfx1151-related fixes.  
  https://github.com/ggml-org/llama.cpp/pull/26544
- **OpenCL FA expansion** — PR #26430 extends MQ/cluster decode flash-attention to head sizes 64–512 and GQA 2–16; PR #26428 optimizes FA prefill K-tile transposition in local memory.  
  https://github.com/ggml-org/llama.cpp/pull/26430  
  https://github.com/ggml-org/llama.cpp/pull/26428
- **SYCL TILE for quantized KV decode** — PR #26689 enables TILE kernels for quantized KV (`q4_0`/`q8_0`) decode on SYCL.  
  https://github.com/ggml-org/llama.cpp/pull/26689

## Performance & Optimization

- **DeepSeek-V4 DSpark** — ~50% speedup over MTP path for 0731 models.  
  https://github.com/ggml-org/llama.cpp/pull/25784
- **SYCL TILE decode** — Measured +42% to +169% on Qwen3.6-35B, Gemma 4 26B, and Gemma 4 12B at 32K and 118K context with quantized KV decode.  
  https://github.com/ggml-org/llama.cpp/pull/26689
- **OpenCL cluster decode** — Moving Gemma-4 DK=512 decode onto the GPU via flash attention yields large token-generation gains.  
  https://github.com/ggml-org/llama.cpp/pull/26430
- **CUDA routed MoE MMQ sizing** — PR #24546 sizes MMQ N-tiles from typical routed expert width on RDNA3, improving prefill performance.  
  https://github.com/ggml-org/llama.cpp/pull/24546
- **Expert caching** — PR #26563 proposes a CUDA expert heat-map cache (`-ehs N`), keeping hot experts on GPU and cold experts on CPU, off by default.  
  https://github.com/ggml-org/llama.cpp/pull/26563

## Stability & Regressions

- **High: DeepSeek-V4 "repeat `<`" eval bug** — #26509 reports repeated `<` output whenever a prompt spans more than one forward pass with CUDA flash attention; clean on CPU and with `-fa off`.  
  https://github.com/ggml-org/llama.cpp/issues/26509
- **High: Vulkan DeviceLost on DeepSeek-V4-Flash** — #25664 and #26447 both report `DeviceLost` errors. The release of #26371 in b10291 adds `VK_EXT_device_fault`-based diagnostics and fixes a submission threshold bug that likely contributes to these failures.  
  https://github.com/ggml-org/llama.cpp/issues/25664  
  https://github.com/ggml-org/llama.cpp/issues/26447  
  https://github.com/ggml-org/llama.cpp/pull/26371
- **Medium: ROCm loading/library errors** — #25807 reports `libhipblas.so.3` missing with ROCm 7.14; #19482 reports hangs when loading larger models on ROCm (gfx1151).  
  https://github.com/ggml-org/llama.cpp/issues/25807  
  https://github.com/ggml-org/llama.cpp/issues/19482
- **Medium: GLM-5.2 KV cache type enforcement** — #26382: same K/V cache type is incorrectly enforced even for models without a V cache.  
  https://github.com/ggml-org/llama.cpp/issues/26382
- **Medium: DeepSeek-V4 Flash regression** — #26664 reports ~50% slowdown after #26531; closed, but worth tracking for affected 0731 users.  
  https://github.com/ggml-org/llama.cpp/issues/26664
- **Low: Windows Defender false positive** — #26343 on `b10195-bin-win-cpu-x64`.  
  https://github.com/ggml-org/llama.cpp/issues/26343
- **Low: Security documentation** — #26639: `--tools` and `-ag` can expose RCE to API callers; request to document clearly in `--help`.  
  https://github.com/ggml-org/llama.cpp/issues/26639

## What This Means for Application Developers

- **Update to b10298+** to pick up MTMD chunk save/load functionality, the server CORS proxy empty-response fix, and the quantized reshape stride fix — the latter may affect correctness when loading certain quantized/reshaped GGUF tensors.
- **Vulkan users, especially on AMD and iGPUs**, should move to b10291 or newer. The DeviceLost diagnostics added in #26371 are the first practical tool for identifying which tensor/submission is causing timeouts; the submission batching fix may itself reduce crash frequency.
- **DeepSeek-V4 0731 users should prefer DSpark over MTP**; the ~50% speculative-decoding speedup is the main supported path going forward.
- **For multimodal/MTMD-based products**, the new chunk save/load API in b10298 is directly relevant to persistence workflows; watch for follow-up docs or examples.
- **Router/server operators** should monitor #21678 (model loading queue behavior) and keep the `--tools`/`-ag` RCE warning in mind when exposing endpoints.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Digest — 2026-08-07

## Today's Highlights

No releases landed in the last 24 hours, but the tracker is busy: a deterministic CUDA illegal memory access on DGX Spark (GB10) with head-size-256 models, a macOS performance regression for Qwen3.6-35B-A3B after upgrading to 0.32.5, and a server-resilience fix that converts fatal blob-read errors into request failures instead of process exits. Cloud-side, an 8+ hour 403/login-loop outage ([#17471](https://github.com/ollama/ollama/issues/17471)) and a subscriber quota complaint ([#17435](https://github.com/ollama/ollama/issues/17435)) continue to draw heat.

## Releases & Breaking Changes

None in the last 24 hours. Note that release 0.32.5 is implicated in the macOS performance regression below ([#17583](https://github.com/ollama/ollama/issues/17583)).

## New Model & Hardware Support

- **PR [#17068](https://github.com/ollama/ollama/pull/17068)** — adds `MistralForCausalLM` to the MLX runner; unblocks `ollama create --experimental` for Mistral safetensors models on Apple Silicon (previously failed with "unsupported architecture").
- **PR [#17594](https://github.com/ollama/ollama/pull/17594)** — adds `ollama launch muse` integration for Meta's Muse Code CLI (writes a private settings.json because Muse requires a provider catalog).
- **PR [#17589](https://github.com/ollama/ollama/pull/17589)** — adds `ollama launch talos` for the Talos agent with its deterministic permission kernel.
- **Issue [#17585](https://github.com/ollama/ollama/issues/17585)** — DocTags missing from output when using Docling (`granite_docling:258m`) with Ollama; no resolution yet.

## Performance & Optimization

- **macOS regression: [#17583](https://github.com/ollama/ollama/issues/17583)** — Qwen3.6-35B-A3B on Mac Studio M2 (64GB) dropped from ~72 T/s to "much slower" after upgrading Ollama (0.32.5), same model/prompt/context/hardware. No fix PR yet.
- **MoE expert offload request: [#17557](https://github.com/ollama/ollama/issues/17557)** — feature request to keep MoE experts in host RAM with on-demand GPU compute. Notes that a 16B MoE with a 6GB file currently requires ~23GB VRAM because all expert weights are loaded like llama.cpp defaults, blocking 8GB/12GB GPUs.
- **Thinking token budget: PR [#17566](https://github.com/ollama/ollama/pull/17566)** — adds a per-request or per-model budget cap on `think` blocks, preventing reasoning loops (e.g., Gemma 4) from exhausting the context window without producing an answer.
- **Benchmark quality: PR [#17480](https://github.com/ollama/ollama/pull/17480)** — replaces degenerate word-salad prompt generation with MIT-licensed HumanEval patch prompts (signature + docstring, mid-line truncation).

## Stability & Regressions

Ranked by severity:

1. **CUDA illegal memory access (deterministic, critical)** — [#17596](https://github.com/ollama/ollama/issues/17596): large prefills against `qwen3-coder-next:q4_K_M` (Qwen3-Next 80B-A3B, head size 256) crash the runner with `ggml_cuda_flash_attn_ext_mma_f16_case<256, 256, 8, 8>` on NVIDIA DGX Spark (GB10, aarch64). No fix PR yet.
2. **Cloud auth outage** — [#17471](https://github.com/ollama/ollama/issues/17471): 8+ hour 403 Forbidden and login verification loop across web, API/CLI (`ollama list`, `ollama ps`) on ollama.com; persists across devices/OSes. No fix noted.
3. **Windows tokenizer garbage output** — [#17587](https://github.com/ollama/ollama/issues/17587) (open; [#17586](https://github.com/ollama/ollama/issues/17586) closed duplicate): Qwen2.5-3B GGUF emits repeated ASCII (`@@@@@`, `!!!!!`) for Chinese input on CPU; tokenizer mis-detection suspected.
4. **NTFS mount-point creation failure** — [#17591](https://github.com/ollama/ollama/issues/17591): `ollama create` fails with `400 Bad Request: invalid model name` when the GGUF is referenced through an NTFS volume mount point on Windows 11 (0.32.6).
5. **Server crash on digest read errors — fix PR available** — [#17590](https://github.com/ollama/ollama/pull/17590): `GetSHA256Digest` called `log.Fatal` on `io.Copy` failure, killing the entire server and all in-flight requests; the PR returns the error instead.
6. **Tool-parameter enum not enforced** — [#17597](https://github.com/ollama/ollama/issues/17597): `enum` reaches the model but is not constrained during decoding (unlike `response_format`); the model can emit values outside the enum.
7. **`think:false` unreliable for Qwen3** — [#17588](https://github.com/ollama/ollama/issues/17588) (closed): reasoning still generated and exposed via API despite `think:false`, breaking user-controlled "Reasoning" toggles in apps.
8. **Cloud quota cut without notice** — [#17435](https://github.com/ollama/ollama/issues/17435): annual Pro subscriber reports ~70% quota reduction with no email, blog post, or dashboard warning.
9. **Launcher Claude context-window handling** — [#17584](https://github.com/ollama/ollama/issues/17584): `ollama launch claude` rejects the documented `[1m]` suffix and can't set cloud-model context windows differing from Claude Code's 200k default.

## What This Means for Application Developers

- **OpenAI Responses API namespace tools are being repaired**: PR [#17593](https://github.com/ollama/ollama/pull/17593) propagates the nested `tools` array from namespace-type tool declarations; today the array is dropped, leaving a schema-less pseudo-function that makes every namespaced call undeclarable.
- **Validate tool-call arguments yourself**: `enum` is descriptive only ([#17597](https://github.com/ollama/ollama/issues/17597)) — enforce schema constraints in your application layer until decoding-time enforcement lands.
- **Don't rely on `think:false`**: reasoning suppression through the API is inconsistent for Qwen3 models ([#17588](https://github.com/ollama/ollama/issues/17588)); defensively strip `thinking` blocks if your UI promises a reasoning toggle.
- **Server resilience is an upgrade worth taking**: after PR [#17590](https://github.com/ollama/ollama/pull/17590), a bad sector or flaky network during blob hashing fails one request instead of terminating the server and every in-flight request.
- **Cloud auth is a live availability risk**: the ongoing 403/login-loop outage ([#17471](https://github.com/ollama/ollama/issues/17471)) and quota reduction ([#17435](https://github.com/ollama/ollama/issues/17435)) affect `ollama list`/`ollama ps` and cloud usage — keep local fallbacks if your pipeline depends on cloud auth.
- **Avoid large prefills of Qwen3-Next / head-size-256 models on DGX Spark** until the flash-attention kernel crash in [#17596](https://github.com/ollama/ollama/issues/17596) is fixed.
- **MoE-on-8GB is still a feature request**, not a capability ([#17557](https://github.com/ollama/ollama/issues/17557)) — don't plan small-GPU deployments around host-RAM expert offloading yet.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-08-07

## 1. Today's Highlights

No new release was cut in the last 24 hours, but the PR queue is heavily focused on router hardening, rate-limit accuracy, and managed-file/batch API consistency. The most impactful incoming changes are **#36148** (`fix(router): bound fallback-walk work and error-log volume`), which stops cyclic fallbacks from generating 456 MB of logs in 9 minutes and starving the event loop, **#36146** (`feat(router): deployment-granular session affinity`), which keeps provider prompt caches warm by pinning sessions to a deployment, and **#36143** (`feat(rate limiting): configurable estimated output tokens`), which makes TPM reservation less blunt. Security/ops work also landed as PRs: **#36147** bumps `h2` and `js-yaml` to clear OSV findings, and **#36116** limits Admin UI login attempts.

---

## 2. Releases & Breaking Changes

- **No new releases, tags, or migration notes in the last 24h.**
- `chore: promote staging to main` (**[#36057](https://github.com/BerriAI/litellm/pull/36057)**) suggests an internal dev release is being prepared, but no public version was published today.

---

## 3. New Model & Hardware Support

- **No merged model/hardware support today.**
- **Open PR — SCX.ai provider**: `feat(providers): add SCX.ai as a JSON-configured OpenAI-compatible provider` (**[#34752](https://github.com/BerriAI/litellm/pull/34752)**) registers `scx-ai`, maps `max_tokens` vs `max_completion_tokens`, and caps `temperature`.
- Model-price table update requests for `openrouter/xiaomi/mimo-v2.5-pro` (**[#27325](https://github.com/BerriAI/litellm/issues/27325)**) and `venice/grok-code-fast-1` (**[#24229](https://github.com/BerriAI/litellm/issues/24229)**) were opened earlier but have not been merged.

---

## 4. Performance & Optimization

- **Bound fallback-walk and error-log volume** — **PR #36148**: cyclic `fallbacks` caused repeated retries and re-logged entire chained tracebacks; one malformed request produced **456 MB of logs in 9 minutes** and the event loop stopped serving `/health/liveliness`. The PR bounds walk work and error-log volume.  
  https://github.com/BerriAI/litellm/pull/36148

- **Deployment-granular session affinity** — **PR #36146**: auto-router `session_affinity` previously pinned only the model group, so a group fanned across deployments spread one session’s turns and caused provider prompt-cache cold misses. This pins the deployment itself.  
  https://github.com/BerriAI/litellm/pull/36146

- **Configurable TPM reservation** — **PR #36143**: adds per-key, per-team, and per-model expected-output-token estimates so TPM limits are neither overrun nor over-throttled.  
  https://github.com/BerriAI/litellm/pull/36143

- **Streaming TTS through the proxy** — **PR #33976** (open): streams OpenAI TTS responses through the LiteLLM proxy to reduce time-to-first-audio.  
  https://github.com/BerriAI/litellm/pull/33976

- **Stale router cooldown cache entries** — **PR #34508** (open): addresses inconsistent cooldown recovery across replicas in Redis-backed router deployments.  
  https://github.com/BerriAI/litellm/pull/34508

- **Skip Redis writes for keys without rate limits** — **PR #32179** (open): avoids post-call Redis writes when no rate limits are configured.  
  https://github.com/BerriAI/litellm/pull/32179

---

## 5. Stability & Regressions

**Reported issues ranked by severity:**

- **[High] Guardrails ignored on `/v1/messages`** — Model-level guardrails configured via the Admin UI are not applied on the Anthropic-messages route; `applied_guardrails` is empty. Policy-relevant for anyone using guardrails as a hard control. No fix PR in this set.  
  https://github.com/BerriAI/litellm/issues/36085

- **[High] Anthropic bridge drops cache accounting** — When an upstream is served via the OpenAI Responses API (`openai/gpt-5.x` reasoning models), `cache_read_input_tokens` is always `0` in the Anthropic-format usage. Impacts cost tracking and cache-attribution. No fix PR visible.  
  https://github.com/BerriAI/litellm/issues/36091

- **[High] Concurrent requests bypass TPM rate limits** — Closed issue; combined concurrent token usage can far exceed configured TPM limits. No direct fix PR; **#36143** may mitigate by improving reservation behavior.  
  https://github.com/BerriAI/litellm/issues/18730

- **[High regression] `v1.83.7` loses `tool_call.function.arguments`** — During OpenAI→Anthropic response conversion, correct function arguments are dropped, breaking Claude Code-style agent loops.  
  https://github.com/BerriAI/litellm/issues/27469

- **[Medium regression] `1.81.14` fails thinking/tools with Claude Code** — Kimi-k2.5 and similar thinking models fail after upgrading from `1.81.12`.  
  https://github.com/BerriAI/litellm/issues/22997

- **[Medium] DeepSeek Anthropic-compatible endpoint 400s in thinking mode** — Multi-turn conversations whose assistant history is missing `reasoning_content` fail against `api.deepseek.com/anthropic`.  
  https://github.com/BerriAI/litellm/issues/31439

- **[Medium] `/health` misflags reasoning models** — Health ping uses `max_tokens=1`, which gets consumed entirely by `reasoning_tokens`, making healthy models appear unhealthy.  
  https://github.com/BerriAI/litellm/issues/26987

- **[Medium] `batches.create` falls back across model groups and leaks wrong provider errors** — Invalid requests against an OpenAI group are retried against an Azure group, returning misleading errors.  
  https://github.com/BerriAI/litellm/issues/35359

- **[Medium] Soft-budget alerts not sent for standalone virtual keys** — `soft_budget_crossed` Slack alerts are missing even after subsequent valid requests.  
  https://github.com/BerriAI/litellm/issues/35800

- **[Low/dependency] `python-multipart` pinned to vulnerable version** — `0.0.20` is affected by CVE-2026-40347 (CVSS 5.3). No fix PR in this set.  
  https://github.com/BerriAI/litellm/issues/27472

- **[Low] Request INFO logging cannot be disabled** — `LITELLM_LOG=ERROR` does not suppress per-request INFO logs.  
  https://github.com/BerriAI/litellm/issues/10788

**Stability PRs opened or updated today:**

- **#36148** — bounds fallback-walk work and error-log volume.  
  https://github.com/BerriAI/litellm/pull/36148
- **#35978** — stops A2A requests from writing per-caller headers onto the shared cached httpx client, preventing eviction of other providers’ cached clients.  
  https://github.com/BerriAI/litellm/pull/35978
- **#36021** — skips unparseable rows in `GET /v1/files` instead of 500-ing the entire list.  
  https://github.com/BerriAI/litellm/pull/36021
- **#36049** — returns unified output file IDs from `GET /v1/batches`, preventing provider file-ID leaks for cancelled batches.  
  https://github.com/BerriAI/litellm/pull/36049
- **#36141** — suppresses `db_exceptions` alerts caused by planned Prisma engine-restart races.  
  https://github.com/BerriAI/litellm/pull/36141

---

## 6. What This Means for Application Developers

- **If you rely on guardrails or cache accounting via the Anthropic `/v1/messages` bridge, validate before deploying prompts in production.** Issues **#36085** and **#36091** can silently let guardrails be skipped and underreport cache usage.  
  https://github.com/BerriAI/litellm/issues/36085  
  https://github.com/BerriAI/litellm/issues/36091

- **TPM enforcement can be bypassed under concurrency** (issue **#18730**). Until **#36143** lands, keep per-key/team TPM budgets conservative if you are using them as hard limits.  
  https://github.com/BerriAI/litellm/issues/18730  
  https://github.com/BerriAI/litellm/pull/36143

- **Claude Code users should be wary of the OpenAI→Anthropic conversion regressions** in `v1.83.7` (**#27469**) and `1.81.14` (**#22997**). If you see dropped `function.arguments` or tool-call failures, pin to the known-good version and watch for a fix PR.  
  https://github.com/BerriAI/litellm/issues/27469  
  https://github.com/BerriAI/litellm/issues/22997

- **Managed file/batch endpoints are getting consistency fixes** — `GET /v1/files` and `GET /v1/batches` behavior is changing around unparseable rows and unified file IDs. If you parse raw provider IDs from batch results, plan to consume the unified IDs after **#36049** merges.  
  https://github.com/BerriAI/litellm/pull/36049  
  https://github.com/BerriAI/litellm/pull/36021

- **Security hardening is in flight**: bump `h2`/`js-yaml` (**#36147**) and Admin UI login rate limiting (**#36116**) are pending review. If you run the proxy publicly, you may want to front it with your own auth/rate-limit layer until these merge.  
  https://github.com/BerriAI/litellm/pull/36147  
  https://github.com/BerriAI/litellm/pull/36116

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth Digest — 2026-08-07

## Today's Highlights
No new Unsloth release landed in the past 24 hours; activity is concentrated on Unsloth Studio hardening, desktop packaging, and ROCm/Linux stability. Notable fixes in flight address a silent Linux desktop X11 crash ([#8062](https://github.com/unslothai/unsloth/issues/8062) / [#8063](https://github.com/unslothai/unsloth/pull/8063)), watchdog kills during backend startup ([#7958](https://github.com/unslothai/unsloth/pull/7958)), and event-loop blocking in `/api/inference/status` that could pause SSE streaming ([#7944](https://github.com/unslothai/unsloth/pull/7944)). A performance patch also makes local model inventory scans linear ([#8043](https://github.com/unslothai/unsloth/pull/8043)).

## Releases & Breaking Changes
- None in the last 24 hours.
- The Docker Hub image is ~2 months old; a rebuild has been requested in [#7999](https://github.com/unslothai/unsloth/issues/7999).

## New Model & Hardware Support
No new model architectures or official backend additions were announced in the last 24 hours. Relevant model/hardware compatibility work:

- **AMD gfx10 ROCm BF16 detection**: PR [#7682](https://github.com/unslothai/unsloth/pull/7682) gates HIP BF16 support off for RDNA 1/2 and patches `torch.cuda.is_bf16_supported()` accordingly.
- **Windows ROCm / Studio image-video models**: Open bug [#7992](https://github.com/unslothai/unsloth/issues/7992) — diffusion models fail on Windows ROCm with `torch.distributed has no attribute 'Work'`.
- **AutoRound model loading**: Open bug [#7997](https://github.com/unslothai/unsloth/issues/7997) — AutoRound models cannot be loaded even with `auto-round` installed.
- **Gemma 4 tokenizer**: Open bug [#7903](https://github.com/unslothai/unsloth/issues/7903) — base models are missing `<bos>` in tokenizer config.
- **LFM2.5 230M fine-tuning on Mac M5**: Open bug [#7306](https://github.com/unslothai/unsloth/issues/7306).

## Performance & Optimization
- **Linear local-model inventory scanning**: PR [#8043](https://github.com/unslothai/unsloth/pull/8043) fixes the Studio local-model inventory scaling issue, coalesces concurrent scans, and avoids read-only probes. Fixes [#7849](https://github.com/unslothai/unsloth/issues/7849).
- **Inference status probes off the event loop**: PR [#7944](https://github.com/unslothai/unsloth/pull/7944) moves llama.cpp capability discovery and release freshness checks from `/api/inference/status` off the FastAPI event loop. This should prevent cold subprocess probes or unreachable GitHub checks from stalling SSE token streaming.
- **Cap llama.cpp source build parallelism by RAM**: PR [#8061](https://github.com/unslothai/unsloth/pull/8061) stops passing logical core count straight to `cmake -j`. On a 20-thread / 16 GB machine this previously caused `-j20` and near-2 GB nvcc translation units, oversubscribing memory until the machine stopped responding.
- **Model memory controls**: PR [#8002](https://github.com/unslothai/unsloth/pull/8002) adds “keep model in GPU memory” and related `--mlock` support to veto idle auto-unload TTLs, giving developers explicit VRAM retention control.

## Stability & Regressions
Ranked by severity:

1. **Silent Linux desktop crash on X11 I/O error**: [#8062](https://github.com/unslothai/unsloth/issues/8062) — packaged desktop app exits with `rc=1` immediately after backend spawn, with no output. Fix PR [#8063](https://github.com/unslothai/unsloth/pull/8063) makes the fatal error visible via an environment variable on the Linux launch path.
2. **Health watchdog bypassing startup grace period**: PR [#7958](https://github.com/unslothai/unsloth/pull/7958) fixes the watchdog killing slow-starting but healthy backends. The conditional was always true for the health-check branch, so the 5-minute startup grace period never applied.
3. **Studio API streaming hangs for Pi agent**: Closed bug [#7617](https://github.com/unslothai/unsloth/issues/7617) — streaming to a Pi agent frequently hung and required manual intervention.
4. **Windows install.ps1 venv rollback failure**: Closed bug [#7810](https://github.com/unslothai/unsloth/issues/7810) — a failed venv rollback move could split the environment in two and strand it.
5. **Windows Defender release scan failure**: PR [#8059](https://github.com/unslothai/unsloth/pull/8059) skips Defender scanning only when Defender is unavailable; detected malware or misconfigured Defender still fails closed.
6. **Cached dataset load failing on bookkeeping write**: PR [#8057](https://github.com/unslothai/unsloth/pull/8057) prevents an uncaught failure after dataset load when `mark_app_processed_dataset_cache_complete` fails.
7. **Cached resources stuck at “Downloading 99%”**: Fixed by PR [#7864](https://github.com/unslothai/unsloth/pull/7864) via manifest-less cache entry handling in `snapshot_progress.py`. Closes [#7858](https://github.com/unslothai/unsloth/issues/7858).
8. **CI regression with latest transformers/TRL**: Closed issue [#7708](https://github.com/unslothai/unsloth/issues/7708) — `_DummyTrainer` missing `data_collator` was breaking `main` CPU jobs.
9. **Open UI/load correctness bugs**: [#8001](https://github.com/unslothai/unsloth/issues/8001) repeated GGUF diffusion model downloads; [#7962](https://github.com/unslothai/unsloth/issues/7962) ANSI escape codes rendered as literal text in Studio tool output; [#7961](https://github.com/unslothai/unsloth/issues/7961) chat model selector showing raw HF snapshot paths; [#8039](https://github.com/unslothai/unsloth/issues/8039) per-model load settings not reconciled on same-model reload.

## What This Means for Application Developers
- **If you serve through Unsloth Studio’s OpenAI-compatible API**, PR [#7944](https://github.com/unslothai/unsloth/pull/7944) is the most important upcoming improvement: status polling should no longer pause token streaming. PR [#8064](https://github.com/unslothai/unsloth/pull/8064) also adds “continue response” capability for early-stopped chat generations.
- **For Linux desktop deployments**, wait for [#8063](https://github.com/unslothai/unsloth/pull/8063) before diagnosing any silent `rc=1` exits; it converts the X11 fatal error from invisible to observable.
- **For AMD Windows ROCm users**, image and video model loading in Studio remains blocked ([#7992](https://github.com/unslothai/unsloth/issues/7992)); avoid relying on that path until fixed.
- **For automation around cached datasets/models**, fixes in [#8057](https://github.com/unslothai/unsloth/pull/8057) and [#7864](https://github.com/unslothai/unsloth/pull/7864) matter if you pre-populate HF caches or use Studio-managed manifests.
- **No stable release contains these fixes yet**; teams tracking Unsloth for production should monitor `main` or wait for the next release.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*