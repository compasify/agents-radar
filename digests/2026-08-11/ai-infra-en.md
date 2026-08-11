# AI Infrastructure Digest 2026-08-11

> Generated: 2026-08-11 00:52 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# AI Infrastructure Cross-Project Comparison Report — 2026-08-11

## 1. Ecosystem Overview

The inference stack is in a high-velocity, correctness-constrained phase. DeepSeek-V4 variants are the dominant production workload across every layer, forcing kernel-level enablement (Blackwell SM120, FlashInfer routing) and exposing distributed instability at TP8 scale. A new wave of open-weight frontier models — Meta's Muse Glimmer and Kimi K3 — triggered a multi-project support race within 48 hours, but several shipped integrations are incomplete (wrong weight formats, missing architectures, ROCm gaps). Simultaneously, the ecosystem is converging on speculative decoding (MTP/DSpark), KV-cache efficiency, and tool-calling reliability as the three battlegrounds that determine production viability, while gateways and fine-tuning tools harden for security and multi-replica correctness.

## 2. Activity Comparison

| Project | Issues (signal) | PRs (signal) | Release Status |
|---|---|---|---|
| **vLLM** | 131 issues updated / 24h; DeepSeek-V4 Ampere gap (#50576) at 94 comments | 465 PRs updated / 24h; 64 new contributors | **v0.27.0** — 561 commits, full-stack Kimi K3 |
| **SGLang** | 3 open severe DSpark bugs; 3 broken / 11 flaky CI tests | ~10 high-impact PRs (DP sync, SM120, sparse-MLA) | **No release** in 24h; FlashInfer 0.6.16.post2 pending |
| **llama.cpp** | Top issue at 59 comments (Qwen3.5 tool-calling); 10 ranked stability items | 11+ fix/feature PRs referenced | **b10355** — multi-output sampling; 6 releases since b10336 |
| **Ollama** | 10 ranked issues incl. 1 data-loss class (#17661); MLX contamination (#17599) | ~12 PRs (tool parsing, WoA, Nemotron MLX) | **v0.32.7** + **v0.32.8-rc0** — Muse Glimmer |
| **LiteLLM** | ~15 open regressions incl. critical budget bypass (#26672) | ~10 PRs (Redis dedupe, redaction, Responses API fix) | **v1.96.0** — cosign-signed images |
| **Unsloth** | 10 ranked issues; Windows Studio regression (#8368) unfixed | ~10 PRs (reasoning preservation, checkpoint portability) | **v0.1.61-beta** — Muse Glimmer + Dynamic quants |

vLLM remains the highest-velocity project by raw issue/PR throughput; llama.cpp ships the most frequent releases; Ollama and Unsloth are release-synced to new model launches.

## 3. Model Support Race

| Model / Arch | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|---|---|---|---|---|---|
| **Kimi K3** | ✅ Full-stack in v0.27.0 (core, AttnRes, Python/Rust) | 🔶 Roadmap tracked (#32607) | — | — | — |
| **DeepSeek-V4-Flash / DSpark** | ⚠️ Dominant thread; SM8x unsupported; KV 8× inflation | ⚠️ SM120 3.4× decode win; TP8 CUDA-graph bugs | ⚠️ ROCm garbled output (Strix Halo) | 🔶 inherits via llama.cpp sync | 🔶 via llama.cpp |
| **Muse Glimmer** | — | 🔶 PR #34262 (CUDA+MLX) | ⚠️ Vulkan build missing support; GGUF arch not yet Studio-loadable | ✅ **First**: v0.32.7 MLX, v0.32.8-rc0 NVIDIA/AMD | ✅ v0.1.61-beta + Dynamic quants; Studio blocked |
| **Granite-Switch** | — | — | ✅ b10342 (per-token LoRA adapters) | — | — |
| **Nemotron MTP / 3** | — | — | ✅ b10344 MTP support | 🔶 MLX PR #17060 | 🔶 attention detection fix |

**Who's ahead:** vLLM leads on frontier-model full-stack support (Kimi K3) and DeepSeek-V4 kernel depth. Ollama wins the *distribution* race (Muse Glimmer shipped to end users first), but its MLX tag quality is questionable (`:30b-mlx` = NVFP4 weights). llama.cpp carries the broadest architecture coverage but trails on Blackwell/DeepSeek-V4 floor performance. Unsloth is the fastest to quantized fine-tuning readiness, not raw serving.

## 4. Performance Frontier

Optimization effort concentrates in five areas:

- **Blackwell SM120 kernels** — the single hottest topic. vLLM adds opt-in B12X backends (#51696) and DeepGEMM revision pins (#51382); SGLang enables DeepSeek-V4 on SM120 with up to **3.4× decode speedup** (#29927). Both projects treat this as must-have for 2026 GPU fleets.
- **Speculative decoding / MTP** — vLLM isolated a **−10.6% spec-decode acceptance** regression from a "redundant repeat/copy" removal (#48137); SGLang faces nondeterministic CUDA-graph crashes in DSpark; llama.cpp adds multi-output backend sampling (b10355). The frontier shifted from *whether* to speculate to *how to keep it deterministic*.
- **KV-cache efficiency** — DeepSeek-V4-Flash-0731's **~8× KV inflation** (#51041 in vLLM) caps context length at ~121K on H20 TP=2, making KV compression urgent. vLLM adds back-pressure-aware offload tiering (#50045); SGLang extends decode context parallelism to ~4.25M tokens/rank (#31821).
- **Quantization** — MXFP4/NVFP4 routines land in llama.cpp (#26869); vLLM pursues W4A8-INT8 via PTX 9.4 `ldmatrix.s8.s4` (#49529) and FP8 descale fixes (#51363); block-scaled FP8 crashes on SM120 are addressed via DeepGEMM pinning.
- **Write-path / control-plane efficiency** — LiteLLM attacks Redis/DB write amplification (skip no-op rate-limit writes #31880, `disable_entity_spend_updates` #31866); SGLang collapses DP attention scheduling to a single device sync (#34338). These matter at high QPS for gateway and disaggregated serving.

## 5. Layer Positioning

| Layer | Projects | Core Focus Today |
|---|---|---|
| **Production serving engine** | vLLM, SGLang | Distributed execution (TP/EP/PD), kernel enablement, spec-decode stability, KV offload. Both are converging on DeepSeek-V4-class MoE workloads with CUDA-graph-heavy paths. |
| **Local / edge runtime** | llama.cpp, (Ollama core) | Quantization breadth, CPU/GPU/ROCm/Metal portability, GGUF packaging, low-footprint inference. llama.cpp is the upstream; Ollama distributes it with an MLX engine and model registry. |
| **End-user distribution / local server** | Ollama | Model pull/run UX, Apple Silicon MLX, tool-call parsing, desktop/IDE integration. Layer value is packaging + runner lifecycle, not kernels. |
| **Gateway / control plane** | LiteLLM | Multi-provider routing, budgets/rate limits, spend tracking, auth, security hardening. No model execution; correctness is about accounting, streaming deltas, and multi-replica consistency. |
| **Training / fine-tuning** | Unsloth | Quantized fine-tuning (Dynamic quants), GRPO/logps correctness, Studio product (chat + LoRA + TTS/STT). Sits upstream of serving; its GGUF outputs feed llama.cpp/Ollama. |

**Overlap note:** Ollama and Unsloth both bundle llama.cpp, creating a dependency chain — Unsloth Studio's Muse Glimmer GGUF support waits on llama.cpp architecture support, and Ollama's VRAM behavior is capped by llama.cpp's weight-loading design.

## 6. Trend Signals

1. **DeepSeek-V4 is the ecosystem's stress test.** Every project has an open DeepSeek-V4 issue class: KV inflation, SM8x gaps, TP8 illegal memory, ROCm garbled output, quant-divergence. Teams deploying it must validate per-hardware, not per-model.
2. **Muse Glimmer launches are half-baked across the stack.** Wrong MLX manifests (Ollama), blocked Studio loading (Unsloth), Vulkan build gaps (llama.cpp). The model is real; the ecosystem integration is 2–4 weeks out. Kimi K3 is farther ahead in vLLM but absent everywhere else.
3. **Tool-calling/reasoning correctness has become table stakes.** Ollama fixed 5 parsers, SGLang fixed greedy-regex cross-boundary bugs, llama.cpp still has Qwen3.5 thinking-block XML failures, LiteLLM fixes dropped text deltas in streaming reasoning responses. Agent builders should treat tool-call parsing as a *prod dependency*, not an SDK detail.
4. **Speculative decoding is spreading but nondeterministic.** MTP/DSpark appear across vLLM, SGLang, llama.cpp, and Ollama (feature request). Expect a wave of determinism and state-leak bugs (llama.cpp MTP inter-request state; SGLang CUDA-graph replay) as adoption widens.
5. **Memory efficiency is the new quantization.** Host-RAM MoE experts (Ollama #17557, llama.cpp #26448) would let 16B MoE run on 8 GB GPUs; KV-cache compression and 8× inflation fixes address the same constraint from the runtime side.
6. **Security hardening is moving down the stack.** LiteLLM ships cosign-signed images, Redis log redaction (#36484), MCP payload redaction (#36474), and has an open cross-tenant authorization bug (#27722). Gateways are being treated as security boundaries now.
7. **MLX/Apple Silicon is a real, growing target.** Ollama added Muse Glimmer MLX, Nemotron 3 MLX, Gemma4 vision MLX; SGLang is adding Muse Glimmer on MLX. Expect macOS to become a first-class citizen for local agents.

**For agent/application developers, the practical takeaways:** pin versions — this is a high-regression environment (Ollama 0.32.7 deletes models; Unsloth Studio 2026.8.12 breaks Windows chat; precompiled FlashInfer wheels crash without nvcc). Validate tool-call parsing and reasoning-content streaming with your exact model + gateway combo. Treat speculative decoding as experimental unless you control the target quant. And budget for DeepSeek-V4's KV-cache footprint before committing to memory-bound GPUs.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest — 2026-08-11

## 1. Today's Highlights

v0.27.0 shipped with full-stack Kimi K3 support (561 commits, 242 contributors, 64 new), spanning core model files, AttnRes kernels, and both Python and Rust frontends. DeepSeek-V4-Flash / -0731 remains the dominant support thread: the Ampere (SM8x) enablement request ([#50576](https://github.com/vllm-project/vllm/issues/50576)) continues to attract the most traffic, while new reports detail an SM120 FlashInfer routing failure ([#50720](https://github.com/vllm-project/vllm/issues/50720)) and an ~8× KV cache size inflation versus the preview checkpoint ([#51041](https://github.com/vllm-project/vllm/issues/51041)). On the kernel side, notable activity includes opt-in B12X backends for Blackwell ([#51696](https://github.com/vllm-project/vllm/pull/51696)), a per-head FP8 descale fix for FA4 ([#51363](https://github.com/vllm-project/vllm/pull/51363)), and a DeepGEMM SM120 revision pin ([#51382](https://github.com/vllm-project/vllm/pull/51382)) targeting the block-scaled FP8 crash from [#47436](https://github.com/vllm-project/vllm/issues/47436).

## 2. Releases & Breaking Changes

- **[v0.27.0](https://github.com/vllm-project/vllm/releases)** — 561 commits from 242 contributors (64 new). Headline feature is **Kimi K3** support: core model files and kernels ([#50089](https://github.com/vllm-project/vllm/pull/50089), [#50000](https://github.com/vllm-project/vllm/pull/50000)), Python ([#50093](https://github.com/vllm-project/vllm/pull/50093)) and Rust ([#50104](https://github.com/vllm-project/vllm/pull/50104)) frontends, plus AttnRes kernels ([#50090](https://github.com/vllm-project/vllm/pull/50090)). No explicit breaking changes or migration notes in the release notes; 131 issues and 465 PRs updated in the last 24h suggests a high-velocity post-release cycle.

## 3. New Model & Hardware Support

- **Kimi K3** — full-stack support landed in v0.27.0, with a follow-up PR ([#50487](https://github.com/vllm-project/vllm/pull/50487)) tapping the pre-norm AttnRes mixture as the DFlash aux state — the current capture site reads the post-mixture stream, which mismatches drafter training.
- **B12X backends (SM120/SM121)** — opt-in linear, MoE, and causal attention backends for Blackwell using vLLM's existing backend interfaces; no new abstractions ([#51696](https://github.com/vllm-project/vllm/pull/51696)).
- **ROCm / DeepSeek-V4** — preserve native 384-wide MXFP4 TP8 shard allocation instead of rounding to 512 on the generic ROCm path, fixing physical padding in parameter allocation/checkpoint loading ([#51473](https://github.com/vllm-project/vllm/pull/51473)).
- **XPU / Intel** — new `INCXPUW4A8LinearMethod` for INC int4 weights + dynamic per-token int8 activations, reusing the w4a16 layout and falling back to oneDNN `int4_gemm_w4a16` ([#50501](https://github.com/vllm-project/vllm/pull/50501)).
- **DeepSeek-V4-Flash-0731** — checkpoint is recognized but **not runnable on SM8x (A100/A800)**; the tracking issue [#50576](https://github.com/vllm-project/vllm/issues/50576) (94 comments) remains open. ROCm-side Kimi-K3 gap/roadmap tracked in [#50682](https://github.com/vllm-project/vllm/issues/50682).
- **DeepGEMM SM120** — minimal revision pin combining the previously working SM120 commit plus the SITU change, directly addressing the RTX PRO 6000 load failure ([#51382](https://github.com/vllm-project/vllm/pull/51382)).

## 4. Performance & Optimization

- **DeepSeek-V4-Flash spec-decode regression isolated** (production A/B on 2× DGX Spark GB10, TP=2): [#48137](https://github.com/vllm-project/vllm/pull/48137) ("Remove redundant repeat and copy for dsv4") costs **~10.6% spec-decode acceptance**, independently from [#48660](https://github.com/vllm-project/vllm/pull/48660), which shifts output distributions ([#49927](https://github.com/vllm-project/vllm/issues/49927)).
- **KV cache efficiency concern** — DeepSeek-V4-Flash-0731 consumes **~56 bytes/token (≈8× more than the preview)**, capping `max_model_len` at ~121K on H20 TP=2 despite 7.7 GiB of KV cache ([#51041](https://github.com/vllm-project/vllm/issues/51041)).
- **W4A8-INT8 kernel opportunity** — adopt PTX 9.4 `ldmatrix.s8.s4` (hardware INT4→INT8 expanding load) to cut shared-memory traffic in W4A8-INT8 paths ([#49529](https://github.com/vllm-project/vllm/issues/49529)).
- **KV offload tiering** — back-pressure detection in the tiering manager stops cascading stores to slow secondary tiers (disk/shared/P2P) via store-completion latency, preventing unbounded queuing ([#50045](https://github.com/vllm-project/vllm/pull/50045)). Companion RFC refactors the KV offload event path with provenance-carrying events and key-only removals ([#49413](https://github.com/vllm-project/vllm/issues/49413)).
- **Profiling** — minimal Triton Proton backend for NVIDIA (CUPTI, graph-free) as an optional worker profiler alongside PyTorch/CUDA ([#48789](https://github.com/vllm-project/vllm/pull/48789)).
- **EPLB ergonomics** — default `num_redundant_experts` to the lowest valid value derivable from startup config instead of requiring manual choice ([#30075](https://github.com/vllm-project/vllm/issues/30075)).
- **Mooncake connector** — BlockStored events now describe exact hash-edge objects and publish only for successful PUTs, improving cache coherence visibility ([#50361](https://github.com/vllm-project/vllm/pull/50361)).

## 5. Stability & Regressions

Ranked by severity:

- **DeepSeek-V4-Flash-0731 + DSpark on SM120** — FlashInfer sparse MLA decode kernel routing failure on 2× RTX PRO 6000 Blackwell (CUDA 13.2, vLLM 0.26.0) ([#50720](https://github.com/vllm-project/vllm/issues/50720)). No fix PR linked yet; related to the Ampere gap in [#50576](https://github.com/vllm-project/vllm/issues/50576).
- **FlashInfer sampler JIT crash without nvcc** — precompiled/wheel installs fail at engine startup when `nvcc` isn't discoverable; no fallback to the native sampler ([#49497](https://github.com/vllm-project/vllm/issues/49497)).
- **Mistral3 composite VLM weight resolution bug** — `tie_word_embeddings` read from the wrong (top-level) config silently discards a real `lm_head.weight`, yielding coherent-vocabulary-but-incoherent output ([#51063](https://github.com/vllm-project/vllm/issues/51063)).
- **Hybrid multi-group KV crash** — `_update_requests_with_invalid_blocks` raises `ValueError: too many values to unpack` when a connector reports load-error blocks ([#50687](https://github.com/vllm-project/vllm/issues/50687)).
- **Intel Arc B50 (Battlemage) TP=2** — `zeMemOpenIpcHandle` INVALID_ARGUMENT during worker init on dual Arc B50 ([#48953](https://github.com/vllm-project/vllm/issues/48953)).
- **Qwen3.6-35B-A3B-FP8 code generation** — "400 Unterminated string" failure in vLLM 0.23/0.24 ([#47761](https://github.com/vllm-project/vllm/issues/47761)).
- **Block-scaled FP8 (compressed-tensors) on SM120** — DeepGEMM "Unknown SF transformation" assertion on load; fix PR [#51382](https://github.com/vllm-project/vllm/pull/51382) pins the required revision ([#47436](https://github.com/vllm-project/vllm/issues/47436)).

Fix PRs in flight:

- **FA4 per-head FP8 descales** — FA3 forwarded Q/K/V descales but FA4 dropped them; now forwarded into the CuTe forward kernel ([#51363](https://github.com/vllm-project/vllm/pull/51363)).
- **Spec-decode per-group slot mapping** — `ExtractHiddenStatesProposer` used the main attention group's `slot_mapping`, breaking CacheOnly layers with different block sizes; now uses per-group mapping ([#51328](https://github.com/vllm-project/vllm/pull/51328)).
- **Hybrid Mamba block sync** — `mamba_block_size` aligned at runtime isn't synced via `EngineCoreReadyResponse`, same bug class as the earlier `block_size` fix ([#50809](https://github.com/vllm-project/vllm/pull/50809)).
- **BlockPool LIFO regression** — #48017's "pure no-op" condition routes every freed block through `append_n` instead of `prepend_n` when prefix caching is disabled, breaking reuse order; restored ([#51482](https://github.com/vllm-project/vllm/pull/51482)).
- **Ernie-4.5-VL encoder CG** — postprocess fix for multi-path encoder outputs, avoiding a revert of the original crash fix ([#51461](https://github.com/vllm-project/vllm/pull/51461)).
- **Mooncake KV events** — now published only for successful PUTs with exact hash-edge objects ([#50361](https://github.com/vllm-project/vllm/pull/50361)). Multi-layer MTP KV support for Model Runner V2 is in flight ([#50062](https://github.com/vllm-project/vllm/pull/50062)).
- **MiniJinja 2.22** — Rust frontend upgrade fixing method-lookup precedence for mapping keys such as `items`; merged ([#51235](https://github.com/vllm-project/vllm/pull/51235)).
- **Qwen3.5-35B-A3B-FP8 all-exclamation-points output** — closed as stale ([#38527](https://github.com/vllm-project/vllm/issues/38527)); `/v1/responses` protocol drift closed ([#39426](https://github.com/vllm-project/vllm/issues/39426)); UVA offload WSL crashes closed ([#37883](https://github.com/vllm-project/vllm/issues/37883)).
- **RFC: bitsandbytes / GGUF to OOT plugins** — proposed migration due to very low usage (≈0.5% / 0.1%) and pre-`weight_loader_v2` maintenance burden ([#39583](https://github.com/vllm-project/vllm/issues/39583)).
- **Observability RFC** — coarse-grained per-request/per-iteration tracker (engine-step metrics) for e2e optimization, positioned against PyTorch Profiler ([#39979](https://github.com/vllm-project/vllm/issues/39979)).

## 6. What This Means for Application Developers

- **Kimi K3 is now usable via vLLM 0.27.0** — but if you serve it on AMD, expect gaps; ROCm enablement is explicitly tracked as a follow-up roadmap ([#50682](https://github.com/vllm-project/vllm/issues/50682)).
- **DeepSeek-V4-Flash-0731 needs validation before adoption**: 8× KV cache growth materially reduces effective context length on memory-bound GPUs ([#51041](https://github.com/vllm-project/vllm/issues/51041)), Blackwell SM120 users hit a FlashInfer MLA routing bug ([#50720](https://github.com/vllm-project/vllm/issues/50720)), and Ampere users are unsupported entirely ([#50576](https://github.com/vllm-project/vllm/issues/50576)). If you're on the preview checkpoint, also verify spec-decode acceptance — last week's perf work costs ~10.6% and changes output distributions ([#49927](https://github.com/vllm-project/vllm/issues/49927)).
- **FlashInfer wheels need a discoverable `nvcc`** at engine startup; if your container strips CUDA toolkits, either install the toolkit or expect the sampler JIT to crash — and consider forcing the native sampler until a fallback lands ([#49497](https://github.com/vllm-project/vllm/issues/49497)).
- **SM120 Blackwell FP8 serving** is stabilizing: the DeepGEMM pin ([#51382](https://github.com/vllm-project/vllm/pull/51382)) unblocks block-scaled compressed-tensors loads, and the B12X backends ([#51696](https://github.com/vllm-project/vllm/pull/51696)) offer an opt-in path for SM120/SM121. The FA4 descale fix ([#51363](https://github.com/vllm-project/vllm/pull/51363)) matters if you use per-head FP8 QKV.
- **KV cache connector integrations (Mooncake, etc.)** should upgrade for accurate success-only events and back-pressure handling before relying on them in production ([#50361](https://github.com/vllm-project/vllm/pull/50361), [#50045](https://github.com/vllm-project/vllm/pull/50045)). If you observe out-of-order block reuse after disabling prefix caching, the LIFO restore fix ([#51482](https://github.com/vllm-project/vllm/pull/51482)) is the likely cure.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest — 2026-08-11

## Today's Highlights
DeepSeek-V4/DSpark CUDA-graph instability on TP8 remains the dominant stability theme: two open illegal-memory bugs ([#31023](https://github.com/sgl-project/sglang/issues/31023), [#33356](https://github.com/sgl-project/sglang/issues/33356)) plus a new RFC for dynamic graph replay contracts ([#32432](https://github.com/sgl-project/sglang/issues/32432)), with a control-plane fix already available in [#31195](https://github.com/sgl-project/sglang/pull/31195). On performance, new work collapses the DP attention scheduler to a single device sync ([#34338](https://github.com/sgl-project/sglang/pull/34338)), enables DeepSeek-V4 on SM120 with up to 3.4x faster decode ([#29927](https://github.com/sgl-project/sglang/pull/29927)), and adds a fused Triton sparse-MLA prefill backend ([#32779](https://github.com/sgl-project/sglang/pull/32779)). New model support for Muse Glimmer on CUDA+MLX is in flight ([#34262](https://github.com/sgl-project/sglang/pull/34262)).

## Releases & Breaking Changes
- **No releases in the last 24h.**
- Pending dependency bump with a caveat: FlashInfer `0.6.16.post2` ([#33092](https://github.com/sgl-project/sglang/pull/33092)). **Plain `0.6.16` must be skipped** — its prebuilt `flashinfer-jit-cache` wheel is ABI-incompatible with the pinned `apache-tvm-ffi==0.1.11`.
- In-flight config changes to plan for: `--moe-runner-backend megamoe` accepted as an alias and normalized to `moe_runner_backend=auto` + `moe_a2a_backend=megamoe` ([#34326](https://github.com/sgl-project/sglang/pull/34326)); per-token FP8 quantization migrating from the AOT `sgl_kernel` wheel to the JIT kernel path ([#34257](https://github.com/sgl-project/sglang/pull/34257)).

## New Model & Hardware Support
- **Muse Glimmer** native support added across CUDA and MLX backends ([#34262](https://github.com/sgl-project/sglang/pull/34262), high priority).
- **DeepSeek-V4 on SM120 Blackwell**: DeepGEMM paged-MQA indexer + FP4 MoE + page-split enables 4x RTX PRO 6000 boxes that previously only ran the torch fallback ([#29927](https://github.com/sgl-project/sglang/pull/29927)).
- **Decode context parallelism for DSA models** (DeepSeek V3.2, GLM-5.x): extends MLA DCP to sparse attention, interleaving KV across ranks and raising logical capacity from ~2.29M to ~4.25M tokens/rank ([#31821](https://github.com/sgl-project/sglang/pull/31821)).
- **AMD**: prefill context-parallel two-batch overlap for DeepSeek V4 ([#33480](https://github.com/sgl-project/sglang/pull/33480)).
- **Kimi K3** roadmap and Day-0 support tracked in [#32607](https://github.com/sgl-project/sglang/issues/32607); Wide-EP deployment on GB200/B200 for GLM5-2/Kimi-K3 still has open issues ([#34120](https://github.com/sgl-project/sglang/issues/34120)).

## Performance & Optimization
- **DP attention scheduler sync collapse** ([#34338](https://github.com/sgl-project/sglang/pull/34338)): replaces 5 separate device syncs (two `.cpu()` column copies + three `.item()` reductions) with one D2H copy. Supersedes [#23011](https://github.com/sgl-project/sglang/pull/23011).
- **SM120 DeepSeek-V4**: decode latency reduced up to **3.4x** via DeepGEMM/FlashInfer enablement ([#29927](https://github.com/sgl-project/sglang/pull/29927)).
- **Fused Triton sparse-MLA prefill for DSA** on SM90/SM120+: removes the zero-padding workaround for `flash_mla_sparse_fwd` head-count divisibility constraints (`%64`/`%128`) after TP ([#32779](https://github.com/sgl-project/sglang/pull/32779)).
- **FlashInfer 0.6.16.post2** bump includes performance and correctness fixes ([#33092](https://github.com/sgl-project/sglang/pull/33092)).
- **Context Parallelism Q3 roadmap** ([#21788](https://github.com/sgl-project/sglang/issues/21788)) remains the central tracking item for prefill/decode CP coverage gaps.

## Stability & Regressions
Ranked by severity:

1. **DSpark large decode CUDA-graph capture — nondeterministic illegal memory / SIGSEGV on TP8 (v0.5.16)** ([#33356](https://github.com/sgl-project/sglang/issues/33356)): fails during server startup on B300/B30Z; first failing shape varies across launches. Open.
2. **DSpark compact target-verify CUDA-graph transition — timing-sensitive illegal memory on TP8** ([#31023](https://github.com/sgl-project/sglang/issues/31023)): includes cross-TP planning inconsistency; control-plane fix in [#31195](https://github.com/sgl-project/sglang/pull/31195), issue still open.
3. **DeepSeek-V4 DSPARK TP=8 on 8×H20 hangs at ~245K context** ([#33549](https://github.com/sgl-project/sglang/issues/33549)): all GPUs spin at 100% util/low power during decode; watchdog kills server. Open.
4. **Kimi-K3 DSPARK Xid 13 crash at ~218K context on B300** ([#32855](https://github.com/sgl-project/sglang/issues/32855)): closed.
5. **Z-Image BCG single-GPU illegal memory on first replay after warmup capture** ([#34183](https://github.com/sgl-project/sglang/issues/34183)): closed; TP=2 unaffected.
6. **Prefill FLOPs metric ignores `prefix_lens`**, so `est. prefill TFLOPS/s` degenerates to 1/latency across chunked-prefill chunks ([#34298](https://github.com/sgl-project/sglang/issues/34298)).
7. **GLM-5.2 hard-to-reproduce MoE operator bug** ([#29160](https://github.com/sgl-project/sglang/issues/29160)).
8. **CI health** ([#17050](https://github.com/sgl-project/sglang/issues/17050)): 3 broken, 11 flaky, 672 recently fixed. Also merged: `wait_port_available` now actually waits the configured timeout — previously it slept 1/10 of `timeout_s`, causing spurious CI failures ([#33086](https://github.com/sgl-project/sglang/pull/33086)).
9. **Tool-call parser fixes**: KimiK2Detector greedy regex crossing tool-call boundaries ([#22173](https://github.com/sgl-project/sglang/pull/22173)) and PythonicDetector dropping calls with negative-number arguments ([#27910](https://github.com/sgl-project/sglang/issues/27910)) are closed/merged.

A related **RFC for explicit metadata/workspace/stream-ownership contracts in dynamic CUDA graph replay** ([#32432](https://github.com/sgl-project/sglang/issues/32432)) aims to codify fixes for the DSpark bug class. Separately, an open enhancement requests better unit test coverage for core modules (`managers/`, `mem_cache/`, `entrypoints/`, `sampling/`, `parser/`, `function_call/`, `utils/`), since the 600+ tests are mostly E2E ([#20865](https://github.com/sgl-project/sglang/issues/20865)).

## What This Means for Application Developers
- **If you serve DeepSeek-V4/DSpark at TP8:** long-context decode (>~218K tokens) and startup CUDA-graph capture are known risk areas. Track [#31023](https://github.com/sgl-project/sglang/issues/31023) and [#33356](https://github.com/sgl-project/sglang/issues/33356) before rolling out new versions, and review the graph-replay contract RFC ([#32432](https://github.com/sgl-project/sglang/issues/32432)) if you build on dynamic graph paths.
- **Tool-calling reliability improved:** KimiK2Detector no longer mis-parses multi-tool-call responses with greedy regex, and function-call parsing now handles negative-number literals ([#22173](https://github.com/sgl-project/sglang/pull/22173), [#27910](https://github.com/sgl-project/sglang/issues/27910)) — relevant for agentic workloads using parallel Read/Bash/Write patterns.
- **Prefix-heavy workloads:** HiCache consistency planning for disaggregated prefill ([#22607](https://github.com/sgl-project/sglang/issues/22607)) and session-aware routing for PD serving ([#25760](https://github.com/sgl-project/sglang/issues/25760)) are the near-term levers for long shared prefixes; recoverable KV-placement state for the router is also under RFC ([#33394](https://github.com/sgl-project/sglang/issues/33394)).
- **Model Gateway:** an opt-in bounded-load routing-key affinity policy is proposed so consistent-hashing session affinity also accounts for worker load ([#33625](https://github.com/sgl-project/sglang/issues/33625)).
- **If you bump FlashInfer**, skip plain `0.6.16` and use `0.6.16.post2` to avoid the `apache-tvm-ffi` ABI break ([#33092](https://github.com/sgl-project/sglang/pull/33092)).

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp Digest — 2026-08-11

## Today's Highlights
Two substantial features landed: **b10355** adds multi-output backend sampling with token speculation, and **b10342** introduces the Granite-Switch architecture (dense Granite-4.1 with per-token LoRA adapters). On correctness, **b10353** now rejects non-contiguous ROLL inputs on CUDA/Metal, where kernels previously produced silently wrong results, and a HIP build-flag revert ([PR #26870](https://github.com/ggml-org/llama.cpp/pull/26870)) addresses Q8 garbage output on ROCm. The issue tracker remains dominated by AMD Strix Halo/ROCm problems — garbled DeepSeek V4 output ([#25436](https://github.com/ggml-org/llama.cpp/issues/25436)) and CPU-bound input layers ([#25700](https://github.com/ggml-org/llama.cpp/issues/25700)) are the top open reports.

## Releases & Breaking Changes
- **b10355** — Multi-output backend sampling with token speculation ([release](https://github.com/ggml-org/llama.cpp/releases/tag/b10355), [PR #25532](https://github.com/ggml-org/llama.cpp/pull/25532)). Adds a numeric context parameter declaring the max outputs per sequence — check custom sampling code for API impact.
- **b10354** — Fixes CPU affinity mask being ignored on Android ([release](https://github.com/ggml-org/llama.cpp/releases/tag/b10354), [PR #26838](https://github.com/ggml-org/llama.cpp/pull/26838)).
- **b10353** — **Breaking correctness fix**: `ggml_roll` now asserts contiguous src on CUDA and Metal ([release](https://github.com/ggml-org/llama.cpp/releases/tag/b10353), [PR #25928](https://github.com/ggml-org/llama.cpp/pull/25928)). Strided/permuted inputs previously ran with garbage output; they now fail loudly.
- **b10338** — Model-saver fix: shared/chunk FFN length KV key was clobbered in saved GGUFs ([release](https://github.com/ggml-org/llama.cpp/releases/tag/b10338), [PR #26693](https://github.com/ggml-org/llama.cpp/pull/26693)). Re-export affected models.
- **b10343** — cpp-httplib bumped to 0.53.0 ([release](https://github.com/ggml-org/llama.cpp/releases/tag/b10343), [PR #26821](https://github.com/ggml-org/llama.cpp/pull/26821)).

## New Model & Hardware Support
- **Granite-Switch** (b10342, [PR #25107](https://github.com/ggml-org/llama.cpp/pull/25107)): new architecture — all-attention Granite-4.1 with N embedded LoRA adapters selected per-token via control tokens. CPU backend POC; new GGUF schema/arch keys.
- **Nemotron MTP** (b10344, [PR #26725](https://github.com/ggml-org/llama.cpp/pull/26725)): multi-token-prediction support with new `mtp_flags`.
- **EXAONE 4.5 SWA fix** ([PR #26848](https://github.com/ggml-org/llama.cpp/pull/26848)): sliding-window attention was never enabled — caused KV cache blowup and nonsense outputs; marked merge-ready.
- **pocket-tts** ([PR #26871](https://github.com/ggml-org/llama.cpp/pull/26871)): mtmd support, moving from discrete audio codes to continuous embeddings.
- **MXFP4 / NVFP4 quantization** ([PR #26869](https://github.com/ggml-org/llama.cpp/pull/26869)): adds dense MXFP4 and MoE NVFP4 (incl. `MXFP4_MOE`, `NVFP4_MOE`) quantization routines.
- **Alternative Hexagon NPU backend** ([PR #26373](https://github.com/ggml-org/llama.cpp/pull/26373)): new `ggml-hexagon-jz` implementation for Qualcomm NPUs on Android, coexisting with the official backend.
- **WebGPU** (b10336, [PR #26134](https://github.com/ggml-org/llama.cpp/pull/26134)): WGSL refactor with simplified flash-attention shader.

## Performance & Optimization
- **soft_max fusion** ([PR #26468](https://github.com/ggml-org/llama.cpp/pull/26468)): fuses sweeps into fewer passes — lossless CPU speedup via reduced memory traffic across attention softmax (non-FA), MoE expert routing, and sampler logits.
- **cuBLAS static workspace** ([PR #26574](https://github.com/ggml-org/llama.cpp/pull/26574)): per-device static workspace for cuBLAS handles, removing repeated allocations.
- **HIP unsafe-math opt-in** ([PR #26696](https://github.com/ggml-org/llama.cpp/pull/26696)): `-funsafe-math-optimizations` now gated behind `GGML_HIP_UNSAFE_MATH` (default OFF) for IEEE conformance — verify perf if you relied on the old default.
- **Reported regression**: input layers running on CPU cause ~30% CPU usage on AMD Strix Halo ([#25700](https://github.com/ggml-org/llama.cpp/issues/25700)); DFlash speculation is ~2× slower than baseline on AMD APU + quantized MoE ([#25117](https://github.com/ggml-org/llama.cpp/issues/25117)).
- **Notable feature request**: run MoE expert weights from host RAM over PCIe DMA without H2D copy ([#26448](https://github.com/ggml-org/llama.cpp/issues/26448)) — claims 23 GB MoE on 1.6 GB VRAM; worth watching for memory-constrained serving.

## Stability & Regressions
*Ranked by severity; fix PRs noted where they exist.*

1. **Qwen3.5 9B tool-calling breakage** ([#20837](https://github.com/ggml-org/llama.cpp/issues/20837)) — 59 comments, 17 👍, active. Model emits XML tool calls inside thinking blocks and halts; chat-parser bug, not yet fixed.
2. **DeepSeek V4 garbled output on Strix Halo/ROCm** ([#25436](https://github.com/ggml-org/llama.cpp/issues/25436)) — open, 27 comments, IQ3_XXS quant involved.
3. **llama-server crashes on CUDA with Qwen3.6-27B** ([#23210](https://github.com/ggml-org/llama.cpp/issues/23210)) — open, Windows + RTX 5060 Ti.
4. **MTP retains inter-request state** → non-deterministic output and model degradation on Qwen3.6-35B-A3B-MTP ([#26425](https://github.com/ggml-org/llama.cpp/issues/26425)) — open.
5. **Speculative decoding diverges from greedy on quantized targets** ([#25618](https://github.com/ggml-org/llama.cpp/issues/25618)) — draft-MTP/dspark match on bf16 but not Q4_K_M targets; ngram unaffected.
6. **Context checkpoints always invalidated on hybrid/recurrent models** ([#24055](https://github.com/ggml-org/llama.cpp/issues/24055)) — open, affects server checkpointing.
7. **llama-spec failure at 16K boundary** ([#26478](https://github.com/ggml-org/llama.cpp/issues/26478)) — non-consecutive KV position tracking (`Y != X + 1`).
8. **ROCm runtime breakage**: missing `libhipblas.so.3` with ROCm 7.14 ([#25807](https://github.com/ggml-org/llama.cpp/issues/25807)) and VRAM not allocated on gfx1201 ([#26208](https://github.com/ggml-org/llama.cpp/issues/26208)).
9. **HIP Q8 degeneration** ("////"/"????" output) — fix PR open: [PR #26870](https://github.com/ggml-org/llama.cpp/pull/26870) reverts the offending build flag.
10. **32-bit ARM build failure** (`unknown type name '__fp16'`) ([#26677](https://github.com/ggml-org/llama.cpp/issues/26677)) — fix PR [PR #26860](https://github.com/ggml-org/llama.cpp/pull/26860) gates `__fp16` on `__ARM_FP16_FORMAT_IEEE`.
11. **Fixed today**: ROLL silent corruption on CUDA/Metal (b10353); Vulkan build missing Muse Glimmer support ([#26865](https://github.com/ggml-org/llama.cpp/issues/26865), closed). Closed workaround: NVIDIA CMP 70HX AI-throttle bypassed via PTX `__dp4a` emulation ([#26810](https://github.com/ggml-org/llama.cpp/issues/26810)), related to the open dp4a-via-dp2a request ([#24616](https://github.com/ggml-org/llama.cpp/issues/24616)).

## What This Means for Application Developers
- **Speculative decoding upgrades are coming**: multi-output backend sampling (b10355) should improve draft acceptance; if you use the sampling API, account for the new max-outputs-per-sequence parameter.
- **Qwen-family tool calling remains fragile**: with thinking enabled, Qwen3.5 can emit XML tool calls inside the reasoning block and stop. Parse defensively or disable thinking for function-calling workloads.
- **ROCm/RDNA3+ (Strix Halo, gfx1201) is still risky**: garbled outputs and perf regressions persist; pin known-good builds and smoke-test Q8/MoE models before rollout. Note `GGML_HIP_UNSAFE_MATH` now defaults OFF — re-enable explicitly if you accept non-IEEE behavior for speed.
- **Don't assume greedy determinism** across quantized targets when speculation is enabled ([#25618](https://github.com/ggml-org/llama.cpp/issues/25618)) — validate equivalence if reproducibility matters.
- **Watch for new memory-efficiency options**: MXFP4/NVFP4 quantization ([PR #26869](https://github.com/ggml-org/llama.cpp/pull/26869)) and host-RAM MoE experts ([#26448](https://github.com/ggml-org/llama.cpp/issues/26448)) could meaningfully reduce VRAM requirements for MoE deployments.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Digest — 2026-08-11

## 1. Today's Highlights

Muse Glimmer (Meta's newest open model) shipped in v0.32.7 with initial Apple Silicon MLX support, and v0.32.8-rc0 extends coverage to NVIDIA, AMD, and other platforms. Tool-calling reliability remains the dominant concern: a regression affecting VS Code Copilot Harness has been open since 0.32.4, while several incoming PRs harden Qwen/harmony tool-call parsing and error reporting. The MLX engine drew multiple correctness reports this cycle, including cross-request response contamination on long-lived runners and a `muse-glimmer:30b-mlx` tag that points at NVFP4 weights rather than real MLX layers.

## 2. Releases & Breaking Changes

- **v0.32.7** — Muse Glimmer initial support via Ollama's MLX engine on Apple Silicon. [Release](https://github.com/ollama/ollama/releases/tag/v0.32.7) · [Release PR](https://github.com/ollama/ollama/pull/17646)
- **v0.32.8-rc0** — Muse Glimmer support for NVIDIA, AMD, and additional platforms. [Release](https://github.com/ollama/ollama/releases/tag/v0.32.8-rc0)
- **llama.cpp sync merged** ([#17659](https://github.com/ollama/ollama/pull/17659)) — routine upstream update, no release notes attached.
- **Watch items:**
  - Upgrading to 0.32.7 reportedly removed 4 of 5 local models on Jetson AGX Orin 64 ([#17661](https://github.com/ollama/ollama/issues/17661)).
  - Pulling `muse-glimmer:30b-q8_0` on 0.32.7 returns a 412 requiring a pre-release client ([#17645](https://github.com/ollama/ollama/issues/17645)).
  - The `muse-glimmer:30b-mlx` manifest is built from NVFP4 layers despite its MLX tag ([#17656](https://github.com/ollama/ollama/issues/17656)).
- **In progress:** Windows/Linux installer bundle splitting to reduce artifact sizes with CUDA v13 ([#12277](https://github.com/ollama/ollama/pull/12277), draft). Docs bump VS Code extension minimum to 1.127 — earlier versions do not reliably cancel provider requests ([#17655](https://github.com/ollama/ollama/pull/17655)).

## 3. New Model & Hardware Support

- **Muse Glimmer (Meta)** — MLX on Apple Silicon in v0.32.7; NVIDIA/AMD and additional platforms in v0.32.8-rc0.
- **Nemotron 3 (MLX)** — [PR #17060](https://github.com/ollama/ollama/pull/17060) adds Mamba2/recurrent blocks, MoE routing, and quantized NVFP4/MXFP8 expert paths with Metal-optimized block-mapped kernels.
- **Gemma4 image input (MLX)** — [PR #17650](https://github.com/ollama/ollama/pull/17650) adds vision preprocessing/embeddings through `base.MediaModel`, supporting both `vision_embedder.*` and transformer-based `vision_tower.*` checkpoints.
- **Apertus 1.5 (8B/70B)** — [PR #17555](https://github.com/ollama/ollama/pull/17555) adds native chat handling for the Swiss AI Initiative's open multimodal models.
- **Bailing MoE V3 (MLX)** — [PR #17643](https://github.com/ollama/ollama/pull/17643) adds safetensors import with hybrid KDA/MLA attention and dense/MoE FFN layers.
- **Windows-on-Arm CPU build** — [PR #17654](https://github.com/ollama/ollama/pull/17654) sets `GGML_CPU_ARM_ARCH`; the shipped baseline `armv8-a` build currently has zero dot-product or matrix instructions.

## 4. Performance & Optimization

- **TTFT regression on Windows/CUDA** ([#17631](https://github.com/ollama/ollama/issues/17631)) — vs 0.24.0, warm TTFT increased by a flat per-request toll (+156ms Gemma E4B, +44ms Qwen3) while generation throughput *improved*. The toll doesn't scale with prompt size and survives identical repeat requests, ruling out prompt reprocessing — looks like per-request fixed overhead.
- **MoE VRAM footprint** ([#17557](https://github.com/ollama/ollama/issues/17557)) — request to keep MoE experts in host RAM with on-demand GPU compute: a 16B MoE with a 6GB file currently requires ~23GB VRAM because llama.cpp loads all expert weights. Would enable 16B/35B MoEs on 8GB GPUs.
- **dspark option requested** ([#17016](https://github.com/ollama/ollama/issues/17016)) — native integration of the dspark speculative-decoding approach.
- **Windows dual-socket bottleneck** ([#16873](https://github.com/ollama/ollama/issues/16873)) — high CPU, low GPU utilization across CPU-only, GPU-only, and hybrid configs.
- **Benchmark harness improved** — [PR #17480](https://github.com/ollama/ollama/pull/17480) replaces word-salad prompts with MIT-licensed HumanEval code-continuation tasks, which should make regression measurements more meaningful.

## 5. Stability & Regressions

Ranked by severity:

1. **Models deleted after 0.32.7 update** ([#17661](https://github.com/ollama/ollama/issues/17661)) — Jetson AGX Orin 64; 4 of 5 models (Qwen3.6 27B, GPT-OSS 20B, Laguna-XS, ornith 35B) disappeared post-update. Data-loss class; no fix PR yet.
2. **MLX cross-request response contamination** ([#17599](https://github.com/ollama/ollama/issues/17599)) — with `OLLAMA_KEEP_ALIVE=-1`, a long-lived MLX runner intermittently returns a *verbatim answer to an earlier prompt*. Severe correctness issue; no fix PR.
3. **Tool calling broken in VS Code Copilot Harness** ([#17444](https://github.com/ollama/ollama/issues/17444)) — regression since 0.32.4/0.32.5, 32 comments; rolling back to 0.32.1 confirmed as workaround.
4. **Deterministic CUDA illegal memory access on DGX Spark** ([#17596](https://github.com/ollama/ollama/issues/17596)) — `qwen3-coder-next:q4_K_M` (head size 256) during large prefill crashes in `ggml_cuda_flash_attn_ext_mma_f16_case<256, 256, 8, 8>` on GB10.
5. **Runner accepts TCP but request never reaches work loop** ([#15950](https://github.com/ollama/ollama/issues/15950)) — recurrence of the #15258 pattern on 0.20.5: hang after large models pinned in memory for hours, zero bytes returned on `/api/generate`.
6. **Laguna-S 2.1 MLX BF16 degeneration** ([#17632](https://github.com/ollama/ollama/issues/17632)) — intermittent failure to terminate, degrading into stream-of-consciousness output.
7. **`/api/generate` silently ignores `think` when `format` is set** ([#17544](https://github.com/ollama/ollama/issues/17544)) — `/api/chat` handles the identical request correctly.
8. **Qwen3.6 35B load regression on 12GB GPUs** ([#17517](https://github.com/ollama/ollama/issues/17517)) — hits the memory ceiling without filling VRAM even at 4K context; bisect not yet done.
9. **`ollama create` hangs with two FROM lines** ([#17491](https://github.com/ollama/ollama/issues/17491)) — no working path for attaching a separate GGUF vision projector; silent hashing phase is a likely UX culprit.
10. **`hf.co` pulls skip built-in RENDERER/PARSER** ([#17636](https://github.com/ollama/ollama/issues/17636)) — tool capability is detected but native tool formatting/parsing isn't attached.

**Fix PRs in flight:** harmony tool-call malformed JSON tolerance ([#17642](https://github.com/ollama/ollama/pull/17642)); client-facing tool-call parser error context across five parsers ([#17651](https://github.com/ollama/ollama/pull/17651)); per-file SHA-256 progress during `ollama create` ([#17649](https://github.com/ollama/ollama/pull/17649)); ANSI escape suppression for non-TTY stdout (closed) ([#17644](https://github.com/ollama/ollama/pull/17644)); skill-scan diagnostic improvements ([#17657](https://github.com/ollama/ollama/pull/17657)).

## 6. What This Means for Application Developers

- **Prefer `/api/chat` over `/api/generate`** when combining structured output with thinking — the latter silently drops `think: true` when `format` is set ([#17544](https://github.com/ollama/ollama/issues/17544)).
- **Treat MLX long-lived runners as unsafe for production** until the contamination bug is fixed ([#17599](https://github.com/ollama/ollama/issues/17599)). Pin `keep_alive`, or add response-consistency checks against conversation history.
- **Tool-call handling is getting materially better**: progressive argument streaming for Qwen3 ([#17658](https://github.com/ollama/ollama/pull/17658)), malformed-JSON tolerance for gpt-oss/harmony ([#17642](https://github.com/ollama/ollama/pull/17642)), and parser error context that will finally identify the failure stage ([#17651](https://github.com/ollama/ollama/pull/17651)).
- **Verify Muse Glimmer tags before deployment** — `:30b-mlx` currently resolves to NVFP4 weights ([#17656](https://github.com/ollama/ollama/issues/17656)) and stable-channel pulls return 412 ([#17645](https://github.com/ollama/ollama/issues/17645)). Pin the exact tag and inspect with `ollama show`.
- **Multi-file GGUF import remains the top community blocker** ([#5245](https://github.com/ollama/ollama/issues/5245), 156 👍) — plan around single-file GGUFs for large models or use `safetensors` paths where supported.
- **Cloud users**: prompt-cache support ([#16714](https://github.com/ollama/ollama/issues/16714)) and usage stats via `/api/me` ([#12532](https://github.com/ollama/ollama/issues/12532)) are the most-requested endpoints — budget for workarounds in agentic workloads.
- **VS Code extension users**: minimum version moves to 1.127 ([#17655](https://github.com/ollama/ollama/pull/17655)); if context limits look wrong, set Ollama context to ≥64k and reload the window ([#17610](https://github.com/ollama/ollama/pull/17610)).
- **`num_gpu` is confirmed still valid in Modelfiles** ([#17648](https://github.com/ollama/ollama/pull/17648)) — the only way to force CPU-only execution without changing API requests; docs restored.
- **Windows users** should watch the TTFT regression ([#17631](https://github.com/ollama/ollama/issues/17631)) — generation is faster, but per-request overhead has grown. The Windows-on-Arm ARM_ARCH fix ([#17654](https://github.com/ollama/ollama/pull/17654)) should bring large CPU-inference gains to WoA once landed.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

## 1. Today's Highlights
LiteLLM shipped **v1.96.0** with cosign-signed Docker images, while the active PR queue focuses on reducing Redis/DB write amplification in rate limiting and spend tracking, plus fixing multi-replica alert duplication. On the stability side, a critical budget-enforcement bypass remains open, and streaming usage accounting for reasoning models is still undercounted. Security/redaction fixes are also in flight for Redis log leakage and MCP tool payloads.

## 2. Releases & Breaking Changes
- **[v1.96.0](https://github.com/BerriAI/litellm/releases/tag/v1.96.0)** – All LiteLLM Docker images are now signed with [cosign](https://docs.sigstore.dev/cosign/overview/); every release uses the same key introduced in [commit `0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0). No API/config breaking changes were called out in this snapshot.
- The Rust-backed pip binary rollout is still being tracked in [#31261](https://github.com/BerriAI/litellm/issues/31261); no packaging change landed today.
- CI will start gating PRs on OpenAPI breaking changes via `oasdiff` ([#36481](https://github.com/BerriAI/litellm/pull/36481)), so future public API changes will be more visible upstream.

## 3. New Model & Hardware Support
No new models, hardware backends, or quantization formats landed in this snapshot. Provider-compatibility work is in progress:

- Z.AI `glm-5.2[1m]` returns `Unknown Model` despite docs advertising it ([#32218](https://github.com/BerriAI/litellm/issues/32218)).
- Bedrock structured output fails for GLM-5 and DeepSeek V3.2 ([#35655](https://github.com/BerriAI/litellm/issues/35655)).
- GPUStack-deployed models fail connectivity testing with a 500 ([#25833](https://github.com/BerriAI/litellm/issues/25833)).
- Lemonade provider `api_key` handling is fixed in [#25404](https://github.com/BerriAI/litellm/pull/25404).

## 4. Performance & Optimization
- **Skip unnecessary Redis rate-limiter writes** – [#31880](https://github.com/BerriAI/litellm/issues/31880) proposes skipping post-call Redis counter writes for keys/users/teams with no rate limits configured. This avoids wasted writes at high throughput.
- **Spend-tracking write amplification** – [#31866](https://github.com/BerriAI/litellm/issues/31866) adds `disable_entity_spend_updates` to suppress entity counter `UPDATE`s while preserving raw spend log `INSERT`s.
- **Router cooldown policy** – [#31876](https://github.com/BerriAI/litellm/issues/31876) adds per-deployment `allowed_fails_policy` and fixes DualCache TTL handling.
- **Tag-scoped rate limits** – [#36459](https://github.com/BerriAI/litellm/pull/36459) adds token/request/dollar/concurrency rate limits per arbitrary caller-supplied tag with rolling-window semantics.
- **Required-AND tag routing** – [#36193](https://github.com/BerriAI/litellm/pull/36193) adds a `&` tag prefix and `allow_fail_open` flag for tag-constrained routing.

No concrete benchmark numbers were included in this data.

## 5. Stability & Regressions
Ranked by severity:

- **Critical – Budget enforcement bypass** – Key/user `max_budget` is not enforced in v1.82.3 even when spend exceeds the limit ([#26672](https://github.com/BerriAI/litellm/issues/26672)). Open, no fix PR visible yet.
- **High – Streaming usage undercounted** – Provider-independent streaming usage is severely undercounted; root cause is in the stream aggregation layer, not provider translation ([#36114](https://github.com/BerriAI/litellm/issues/36114)). Open.
- **High – Memory CRUD authorization** – Team 2 can read/update/delete Team 1 keys via `/v1/memory` endpoints without authorization ([#27722](https://github.com/BerriAI/litellm/issues/27722)). Open.
- **High – Anthropic `max_parallel_requests` unreliable** – Redis counter monotonically increases when clients cancel streaming `/v1/messages` requests, eventually blocking all requests ([#27955](https://github.com/BerriAI/litellm/issues/27955)). Open.
- **Medium – Per-pod TPM enforcement** – Deployment-level TPM limits become `tpm_limit × N_replica` in multi-replica deployments ([#27736](https://github.com/BerriAI/litellm/issues/27736)). Open.
- **Medium – Duplicate Slack spend reports** – Scheduled spend reports fire once per pod in multi-replica deployments ([#14809](https://github.com/BerriAI/litellm/issues/14809)). Fix PR [#36489](https://github.com/BerriAI/litellm/pull/36489) races on the shared `PodLockManager` to dedupe.
- **Medium – Responses API drops text deltas** – Chunks carrying both reasoning and content lose visible text; fix PR [#36330](https://github.com/BerriAI/litellm/pull/36330) splits them into reasoning-then-content deltas.
- **Medium – Websearch param leakage** – Web-search interception leaks internal kwargs to Bedrock Converse, causing 400s on intercepted requests; fix PR [#36480](https://github.com/BerriAI/litellm/pull/36480).
- **Security – Redis write-failure log leak** – Redis write timeouts could log raw cached values, including the admin master key ([#36484](https://github.com/BerriAI/litellm/pull/36484)).
- **Security – MCP payload redaction gap** – MCP tool arguments/results were reaching logging backends unredacted; fix PR [#36474](https://github.com/BerriAI/litellm/pull/36474).
- **Other open regressions** – OpenAI-compatible translation returns empty output ([#25848](https://github.com/BerriAI/litellm/issues/25848)); `completion_model` overrides client-specified model instead of acting as fallback ([#21554](https://github.com/BerriAI/litellm/issues/21554)); `api_base` dropped in `acount_tokens` ([#26323](https://github.com/BerriAI/litellm/issues/26323)); empty `Bearer` header with literal `api_key` strings ([#27434](https://github.com/BerriAI/litellm/issues/27434)); streaming `TypeError` with reasoning deltas ([#27670](https://github.com/BerriAI/litellm/issues/27670)); Responses-API cache accounting always reports `cache_read_input_tokens: 0` ([#36091](https://github.com/BerriAI/litellm/issues/36091)); duplicate virtual-key secrets do not error ([#20494](https://github.com/BerriAI/litellm/issues/20494)); SpendLogs timezone-naive timestamps make Request Logs appear hours behind ([#25234](https://github.com/BerriAI/litellm/issues/25234)).

## 6. What This Means for Application Developers
- **Budget/TPM enforcement needs verification** in multi-replica setups; both budget bypass ([#26672](https://github.com/BerriAI/litellm/issues/26672)) and per-pod TPM enforcement ([#27736](https://github.com/BerriAI/litellm/issues/27736)) can silently break capacity controls.
- **Streaming applications using reasoning models** should validate usage and delta delivery carefully; [#36114](https://github.com/BerriAI/litellm/issues/36114) affects usage accounting, and [#36330](https://github.com/BerriAI/litellm/pull/36330) fixes dropped text deltas.
- **Security hardening**: upgrade to v1.96.0, and watch for [#36484](https://github.com/BerriAI/litellm/pull/36484) and [#36474](https://github.com/BerriAI/litellm/pull/36474) if you use Redis logging or MCP tools. Prefer `os.environ` references over literal `api_key` strings to avoid the empty Bearer header bug ([#27434](https://github.com/BerriAI/litellm/issues/27434)).
- **High-throughput users** should track [#31880](https://github.com/BerriAI/litellm/issues/31880) and [#31866](https://github.com/BerriAI/litellm/issues/31866); both can meaningfully reduce Redis/DB write load once merged.
- **Multi-replica deployments** should expect the Slack spend-report dedupe fix in [#36489](https://github.com/BerriAI/litellm/pull/36489) to remove duplicate alert noise.
- **Model lifecycle planning** gets easier with the proposed deprecation alerts and `/model/deprecations` endpoint in [#26900](https://github.com/BerriAI/litellm/pull/26900).

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth Digest — 2026-08-11

## 1. Today's Highlights

Meta's Muse Glimmer 30B — the first open model from Meta Superintelligence Labs, Apache-2.0, aimed at local agentic/coding workflows — is the headline: Unsloth v0.1.61-beta adds support with Dynamic quants, though Studio's bundled llama.cpp b10333 cannot load the `muse-glimmer` GGUF architecture yet ([#8345](https://github.com/unslothai/unsloth/issues/8345)). A Studio 2026.8.12 Windows regression breaks chat for every local GGUF with a drive-letter path, returning `503 model_switch_failed` ([#8368](https://github.com/unslothai/unsloth/issues/8368), [#8375](https://github.com/unslothai/unsloth/issues/8375)); no fix PR is open yet. On the positive side, the long-running Qwen3.x/Muse Glimmer reasoning-preservation bug is closed ([#5846](https://github.com/unslothai/unsloth/issues/5846)) via two Studio fixes ([#8366](https://github.com/unslothai/unsloth/pull/8366), [#7758](https://github.com/unslothai/unsloth/pull/7758)).

## 2. Releases & Breaking Changes

- **v0.1.61-beta / v0.1.60-beta — Muse Glimmer**: Support for Meta's 30B dense model (Apache 2.0), including Unsloth Dynamic quants. Both tags carry identical release notes.
- **Studio 2026.8.12 Windows regression**: Absolute GGUF paths (`C:\...`) are split at the drive letter in `split_model_ref`, so all local chat completions fail with `503 model_switch_failed` ([#8368](https://github.com/unslothai/unsloth/issues/8368), [#8375](https://github.com/unslothai/unsloth/issues/8375)). Pin the previous Studio build on Windows until a fix lands.
- **Behavior change**: The loaded-models indicator now ships off by default ([#8346](https://github.com/unslothai/unsloth/pull/8346), closed).
- **Installers**: `install.sh`/`install.ps1` now correctly honor `base.txt` instead of skipping the base Python stack ([#8195](https://github.com/unslothai/unsloth/pull/8195)).

## 3. New Model & Hardware Support

- **Muse Glimmer 30B** — supported in the Python package and Dynamic quants; Studio GGUF loading is blocked pending a llama.cpp update ([#8345](https://github.com/unslothai/unsloth/issues/8345)).
- **MiniMax M3 GGUF** — the `UD-Q5_K_XL` variant fails to load on Apple Silicon: missing `indexer.head_count` metadata ([#8360](https://github.com/unslothai/unsloth/issues/8360)).
- **NemotronH / trust_remote_code** — attention support detection fixed so `unsloth/NVIDIA-Nemotron-3-Nano-4B` loads with Flash Attention instead of raising `ValueError` ([#8229](https://github.com/unslothai/unsloth/pull/8229), fixes [#7527](https://github.com/unslothai/unsloth/issues/7527)).
- **Linux CPU** — PR adds torch 2.11 to the CPU index plus a portable/immutable AppImage for SteamOS/Bazzite hosts without WebKitGTK ([#8343](https://github.com/unslothai/unsloth/pull/8343)).
- **macOS** — venv creation no longer triggers the Xcode Command Line Tools prompt when no compiler is needed ([#8380](https://github.com/unslothai/unsloth/pull/8380)).
- **ROCm** — Windows Whisper slim bundle pairing fix ([#8379](https://github.com/unslothai/unsloth/pull/8379)); AMD RX 6800 users still hit a missing `hipblaslt` kernel catalog when updating Whisper ([#8364](https://github.com/unslothai/unsloth/issues/8364)).
- **Z-Image** — Studio LoRA training only exposes the distilled `Z-Image-Turbo`; the upstream recipe trains on undistilled `Tongyi-MAI/Z-Image`, which is absent from the trusted-base allowlist ([#8270](https://github.com/unslothai/unsloth/issues/8270), closed).

## 4. Performance & Optimization

- **MTP probe caching is stale**: Studio caches the llama-server MTP support probe until restart. In the reported case, MTP and OFF both decoded at ~6.5 tok/s, and the cached inconclusive result blocked faster decoding for the rest of the session ([#8317](https://github.com/unslothai/unsloth/issues/8317)).
- **Chat streaming stall fixed**: For already-loaded GGUFs, Studio spent ~16s searching for model files before output, while the model was ready in <0.5s. The model-discovery look-ahead is being reworked in ([#8371](https://github.com/unslothai/unsloth/pull/8371)).
- **GRPO matmul dispatch**: `_get_per_token_logps_and_entropies` now dispatches on width at the remaining `lm_head` matmuls, preventing real logits from being handed to `chunked_hidden_states` when the forward pass is not Unsloth-generated ([#8204](https://github.com/unslothai/unsloth/pull/8204)).
- **Idle auto-unload**: Now gated so models loaded from the UI are spared; only API-loaded models are auto-unloaded after idle ([#8146](https://github.com/unslothai/unsloth/pull/8146), closed).

## 5. Stability & Regressions

Ranked by severity:

1. **Windows local-GGUF chat 503 regression** — all local GGUFs that worked before Studio 2026.8.12 fail with `model_switch_failed` because `C:\` paths are split ([#8368](https://github.com/unslothai/unsloth/issues/8368), [#8375](https://github.com/unslothai/unsloth/issues/8375)). No fix PR yet.
2. **Muse Glimmer GGUF blocked in Studio** — bundled llama.cpp b10333 does not recognize the `muse-glimmer` architecture; the model downloads but won't load ([#8345](https://github.com/unslothai/unsloth/issues/8345)).
3. **MiniMax M3 GGUF load failure on Apple Silicon** — `UD-Q5_K_XL` missing `indexer.head_count` ([#8360](https://github.com/unslothai/unsloth/issues/8360)).
4. **TRL checkpoint save crash** — `PicklingError: Can't pickle SFTConfig` at the first checkpoint; fixed by making checkpoint saves portable ([#8344](https://github.com/unslothai/unsloth/pull/8344)).
5. **Images 409 after model swap** — first Generate after switching diffusion models fails with "Diffusion generation was cancelled"; reproducible, traced to a teardown fence in the diffusion path ([#8309](https://github.com/unslothai/unsloth/issues/8309)).
6. **AMD video-generation SIGABRT** — `sd-cli` aborts under the Auto/group memory policy with `ggml_abort: alloc compute params backend buffer failed` on RX 7800 XT ([#8322](https://github.com/unslothai/unsloth/issues/8322)).
7. **ROCm Whisper update failure** — paired ROCm runtime missing its `hipblaslt` kernel catalog ([#8364](https://github.com/unslothai/unsloth/issues/8364)); pairing fix in ([#8379](https://github.com/unslothai/unsloth/pull/8379)).
8. **API silently ignores unknown models** — querying a non-existent model returns neither confirmation nor error on ROCm ([#8376](https://github.com/unslothai/unsloth/issues/8376)).
9. **Studio cannot reload a model it launched itself** — a local model loaded via Studio fails when the same server instance is asked to switch back to it ([#8365](https://github.com/unslothai/unsloth/issues/8365)).
10. **Long-running / environment-specific** — GLM-OCR fails to load in the DeepSeek_OCR2 notebook flow ([#4269](https://github.com/unslothai/unsloth/issues/4269)); sampling inside `TrainingCallback` raises `Invalid target device: None` ([#3538](https://github.com/unslothai/unsloth/issues/3538)); Qwen 3.5 0.8B BF16 training crashes on Kaggle T4 ([#7506](https://github.com/unslothai/unsloth/issues/7506)); AMD Ryzen AI install bug ([#8335](https://github.com/unslothai/unsloth/issues/8335)).

**Fixed this cycle:** Qwen 3.6 35B A3B "Preserve Think" — Studio now forwards client `reasoning_content` to llama-server ([#7758](https://github.com/unslothai/unsloth/pull/7758)) and persists local reasoning blocks across chat turns ([#8366](https://github.com/unslothai/unsloth/pull/8366)), closing ([#5846](https://github.com/unslothai/unsloth/issues/5846)).

## 6. What This Means for Application Developers

- **Muse Glimmer is a strong new base-model candidate for local agentic/coding apps**: Apache-2.0, 30B dense, and immediately available via Unsloth + Dynamic quants. Caveat: Studio desktop users cannot run the GGUF yet ([#8345](https://github.com/unslothai/unsloth/issues/8345)), so notebook/API paths are the reliable way in today.
- **Windows users serving local GGUFs from Studio should pin pre-2026.8.12** until the `split_model_ref` drive-letter fix ships ([#8368](https://github.com/unslothai/unsloth/issues/8368)).
- **Reasoning transparency is now usable**: with ([#8366](https://github.com/unslothai/unsloth/pull/8366)) and ([#7758](https://github.com/unslothai/unsloth/pull/7758)), `reasoning_content` survives chat turns on OpenAI-compatible endpoints — important for agents that feed prior reasoning (Muse Glimmer included) back into the prompt.
- **Audio endpoints are coming**: a Studio Audio page with TTS/STT create + train tabs and OpenAI-compatible audio endpoints is in review ([#7984](https://github.com/unslothai/unsloth/pull/7984)).
- **Training pipeline footguns removed**: TRL checkpoint saves no longer crash ([#8344](https://github.com/unslothai/unsloth/pull/8344)), and GRPO logps extraction is correct for non-Unsloth forward paths ([#8204](https://github.com/unslothai/unsloth/pull/8204)) — both matter for teams building custom fine-tuning infrastructure on Unsloth.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*