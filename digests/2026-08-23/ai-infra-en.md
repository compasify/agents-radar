# AI Infrastructure Digest 2026-08-23

> Generated: 2026-08-22 23:10 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# Cross-Project Comparison Report — 2026-08-23

## 1. Ecosystem Overview

The inference stack is consolidating around a shared set of hard reliability problems rather than raw speed: speculative decoding correctness, KV-cache lifecycle, and disaggregated serving dominate the combined issue trackers. The 24-hour window saw only two shipping events — SGLang **v0.5.18** (710 PRs, 212 contributors) and llama.cpp **b10576–b10587** — while vLLM, Ollama, LiteLLM, and Unsloth all remained in fix-and-harden mode. A striking pattern across every project is *silent failure*: model repetition loops, ignored `tool_choice`, scheduler admission deadlocks, and "healthy but dead" workers. Agentic workloads are visibly reshaping priorities — tool-call fidelity, prompt-cache observability, and API-bridge correctness are now first-class engineering concerns.

## 2. Activity Comparison

Counts below reflect issues/PRs explicitly referenced in each project's 24-hour digest, not repo-wide totals.

| Project | Issues cited | PRs cited | Release status |
|---|---|---|---|
| vLLM | ~24 | ~16 | No release; 1 deprecation landed (`--attention-config.use_prefill_decode_attention`) |
| SGLang | ~9 | ~13 | **v0.5.18 shipped** — 710 PRs, 212 contributors |
| llama.cpp | ~14 | ~11 | **12 releases** (b10576–b10587) |
| Ollama | ~22 | ~10 | No release; 0.32.15 current, 0.32.14/0.32.15 under regression scrutiny |
| LiteLLM | ~15 | ~9 | No release; v1.96.2 referenced as current, v1.93.0 has an open Redis regression |
| Unsloth | ~13 | ~15 | No release; Studio hardening cycle |

llama.cpp has the fastest cadence; SGLang has the largest single release; vLLM and Ollama have the most open stability surface this window.

## 3. Model Support Race

- **SGLang is ahead on new datacenter-scale architectures.** v0.5.18 shipped native **Muse Glimmer** (multimodal), **Spark3** (with TP/PP), **LLaDA2.2 Block Routing MoE**, and **FastWan VSA Cake Stage-2** for SM100/SM103. Kimi-K3 AMD Radix-4 top-k routing and PP-for-PD+DSpark are in flight.
- **llama.cpp leads on release velocity and edge coverage.** Shipped **Bailingmoe3 DSpark** (b10581) and **dots3-note vision+audio** (b10580); open PRs add **GigaChat 3.5** (432B-A28B MoE, MLA), **DFlash2** speculative decoding, and a Hexagon NPU backend.
- **vLLM is optimizing depth over breadth.** No new architectures shipped this window — Qwen3-Omni DSpark framework support landed as a closed PR. Focus is on making existing models correct on new hardware: DeepSeek-V4-Flash (DP8 vs TP8 benchmark), GLM-5.2 MTP on MI355X, Qwen3.5-122B, MiniMax-M3 on ROCm.
- **Ollama and LiteLLM are trailing on compute but adding availability/pricing surfaces:** Qwen3.8-27B cloud tag and Muse Glimmer cloud requests (Ollama); Databricks model pricing additions and Telnyx model requests (LiteLLM).
- **Unsloth has no new model support** — Ling 3.0 remains an open feature request; XPU qLoRA is still broken.

**Bottom line:** SGLang is the architecture leader; llama.cpp is the iteration leader; vLLM is the correctness/performance leader on models already in production.

## 4. Performance Frontier

- **KV cache.** The single most contested area. vLLM is patching KV-offload P2P supply/demand mismatches and `HIT_PENDING` key drops; INT8 KV-cache quantization is requested (FP8-only today, 12 👍). SGLang added HiCache load-back conflict rejection and unified-memory eviction stops. Ollama adds `prompt_eval_cached_count` observability. llama.cpp fixes draft-context sizing in non-unified KV setups.
- **Speculative decoding.** Correctness > speed this cycle. vLLM has fix PRs for TurboQuant+MTP repetition/illegal access, MRV2 ROCm CUDA-graph fallbacks, and hybrid MTP prefix-cache misses. llama.cpp adds adaptive draft depth (`draft-mtp-adaptive`) and DFlash2, but warns of greedy-sample divergence on quantized targets. SGLang's NVFP4 + spec-decode path is actively crashing.
- **Quantization.** NVFP4 is the problem child: llama.cpp CUDA Blackwell decode hang, SGLang FlashInfer dequant workspace crash, vLLM BF16/NVFP4 Marlin garbled output on non-FP4 hardware. FP8/FP4 weight loading is becoming an ops problem, not just a kernel problem — SGLang's Weight Cache Daemon cut Qwen3-235B FP8 load from ~306–327s to **<1s**.
- **Distributed serving.** vLLM's DP8-over-TP8 result for DeepSeek-V4-Flash (single-KV-head MLA) is the headline: **7.7x KV efficiency, 3.4x faster 1M-context TTFT** at c=8. Counter-evidence remains: Ray TP8 wedge, mnnvl allreduce hangs, NIXL P/D role-replacement failures.
- **Kernels.** vLLM batch-invariant persistent matmul (~3x decode speedup on Qwen3-1.7B shapes); llama.cpp row-level ggml concat memcpy and restored SYCL Q2_K kernels; Intel Xe-LP OpenCL tuning reports **+11–12% TG/PP**.

## 5. Layer Positioning

| Project | Layer | Core function | Direct competition |
|---|---|---|---|
| vLLM | Datacenter serving engine | High-throughput distributed inference, P/D disaggregation, KV offload, MLA optimization | SGLang |
| SGLang | Datacenter serving engine | Same layer, differentiated on scheduling (RadixAttention/HiCache), weight caching, fastest new-architecture adoption | vLLM |
| llama.cpp | Local/edge runtime | GGUF inference across CUDA/ROCm/Vulkan/SYCL/OpenCL/NPU; llama-server for lightweight serving | Ollama (as wrapper) |
| Ollama | Developer-facing runtime | Wraps llama.cpp + cloud models behind OpenAI/Anthropic-compatible APIs; scheduler and runner lifecycle | llama.cpp; local LLM APIs |
| LiteLLM | Gateway / control plane | Multi-provider routing, billing, caching, API-dialect translation; no compute of its own | — (orthogonal) |
| Unsloth | Fine-tuning framework | qLoRA training, GGUF export, Studio productized UI with chat/agent-run execution | Axolotl, HF TRL (adjacent) |

The notable structural observation: vLLM and SGLang are converging on the same feature set from different directions, while Ollama and llama.cpp form a layered pair (UX wrapper over raw runtime). LiteLLM is the only true control-plane player — and its bug list shows that translation-layer correctness is now a bottleneck for multi-provider agent apps.

## 6. Trend Signals

1. **Speculative decoding is the new correctness frontier.** Every engine is patching silent repetition, divergence, or crashes in MTP/DSpark/EAGLE3 paths. Production users should validate spec-decode output against non-speculative baselines, especially with quantized targets.
2. **"Healthy but dead" failure modes are pervasive.** vLLM's scheduler admission deadlock, Ray `shm_broadcast` wedge, SGLang's orphaned `/health` requests, and Ollama's phantom loaded runners all evade standard health checks. **Liveness probes must exercise real token generation.**
3. **KV-cache economics are driving the roadmap.** Cached-token billing (LiteLLM Databricks fixes), cached-token reporting (Ollama), INT8 KV demand (vLLM), and offload P2P reliability (vLLM/SGLang) all point to cache-hit rate becoming a first-class SLO for agent-loop economics.
4. **Data parallelism is displacing tensor parallelism for MLA models.** DP8's 7.7x KV-efficiency / 3.4x TTFT win over TP8 on DeepSeek-V4-Flash is large enough to reshape deployment patterns for MLA-based MoE models.
5. **Gateway translation layers are a correctness bottleneck.** LiteLLM's fixes for `/v1/responses` item IDs, `previous_response_id` chaining, thinking-block round-tripping, and concatenated tool-call JSON parsing are essential reading for anyone running multi-provider agents. Pin gateway versions and regression-test bridge paths on every upgrade.
6. **Weight loading is becoming an ops problem.** SGLang's Weight Cache Daemon (300s+ → <1s) signals that crash recovery, multi-tenant reuse, and rapid model swap are now as important as kernel throughput for large FP8/FP4 deployments.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest — 2026-08-23

## 1. Today's Highlights

Speculative decoding correctness is the dominant theme: fixes are in flight for TurboQuant MTP crashes/repetition, MRV2 ROCm decode CUDA-graph fallbacks, hybrid GDN prefix-cache misses, and DSpark attribute loading. KV-offload P2P handoff bugs are also being patched ([#53330](https://github.com/vllm-project/vllm/pull/53330), [#53329](https://github.com/vllm-project/vllm/pull/53329)), and new head-to-head data shows DP8 beating TP8 for single-KV-head MLA models by up to 7.7x in KV efficiency and 3.4x in 1M-context TTFT. No new releases were published in the last 24 hours.

## 2. Releases & Breaking Changes

No releases in the last 24 hours. One deprecation landed: PR [#52557](https://github.com/vllm-project/vllm/pull/52557) removes the dead `--attention-config.use_prefill_decode_attention` flag, which had been accepted and documented but had no effect since ROCm attention became the unconditional first priority on ROCm.

## 3. New Model & Hardware Support

- **Qwen3-Omni DSpark**: framework support for the Qwen3OmniDSparkModel draft architecture with a Qwen3-Omni thinker target ([#52560](https://github.com/vllm-project/vllm/pull/52560), closed).
- **ROCm/Kimi-K3**: gfx942 / MI325X gap-and-roadmap tracker filed as sibling to the gfx950-focused #50682 ([#52803](https://github.com/vllm-project/vllm/issues/52803)).
- **Sparse MLA on older GPUs**: feature request for a `TRITON_MLA_SPARSE` backend targeting sm80/120/121 ([#38006](https://github.com/vllm-project/vllm/issues/38006)).
- **INT8 KV-cache quantization** requested (currently FP8-only); 17 comments and 12 👍 indicate momentum ([#33480](https://github.com/vllm-project/vllm/issues/33480)).
- **ROCm CI**: MI355 MTP/spec-decode acceptance coverage and supporting runtime changes proposed ([#53399](https://github.com/vllm-project/vllm/pull/53399)); TheRock 7.14 preview Docker updates keep Python 3.12/Ubuntu 22.04 while moving to The Rock wheels ([#49925](https://github.com/vllm-project/vllm/pull/49925)).

## 4. Performance & Optimization

- **DeepSeek-V4-Flash (304B/13B active, MLA, FP4+FP8) on 8x B200**: DP8 vs TP8 measured at 7.7x KV advantage and 3.4x faster 1M-context TTFT at concurrency c=8 ([#51454](https://github.com/vllm-project/vllm/issues/51454)).
- **Batch-invariant persistent matmul**: per-device tuned launch configs for RTX 4090D and H20 deliver ~3x decode-kernel speedup across Qwen3-1.7B weight shapes ([#53247](https://github.com/vllm-project/vllm/pull/53247)).
- **GPT-OSS MoE**: reuse `topk()` SparseMatrix routing metadata to avoid recomputation on the Triton v3.6+ path ([#45457](https://github.com/vllm-project/vllm/pull/45457)).
- **ROCm / MiniMax-M3**: enable AITER PA gluon decode for MTP and dense layers so EAGLE3 no longer falls back to native attention ([#52849](https://github.com/vllm-project/vllm/pull/52849)).
- **Hybrid GDN prefix cache**: fix restores MTP prefix-cache hits on Qwen3.5-122B-A10B; prompts whose length is a multiple of the hash unit previously got no hit at all ([#52244](https://github.com/vllm-project/vllm/pull/52244)).
- **MLARoPEKVCacheCatFusionPass** ported to manual fusion as part of the torch.compile fusion tracker ([#45573](https://github.com/vllm-project/vllm/pull/45573)).

## 5. Stability & Regressions

Ranked by severity; fix PRs noted where available.

- **Scheduler admission deadlock**: the scheduler permanently stops admitting requests once `running + skipped_waiting` reaches `max_num_seqs`; engine reports healthy and KV cache is mostly free, and only a restart recovers ([#53130](https://github.com/vllm-project/vllm/issues/53130)). No fix PR yet — critical production risk.
- **Ray TP8 wedge on GLM-5.2-FP8 (v0.26.0)**: ~60s of `shm_broadcast` starvation followed by `RayWorkerProc rank=[0] died unexpectedly` and `RuntimeError: cancelled`; API stays up but generation is dead ([#53157](https://github.com/vllm-project/vllm/issues/53157)).
- **TurboQuant + MTP**: spec-decode batches silently collapse into repetition; `num_speculative_tokens: 1` triggers illegal memory access. Fix: stop FULL CUDA-graph capture for spec-decode batches ([#52475](https://github.com/vllm-project/vllm/issues/52475) → [#53406](https://github.com/vllm-project/vllm/pull/53406)).
- **KV offload P2P**: producer/consumer supply-demand mismatch can park requests until timeout ([#53083](https://github.com/vllm-project/vllm/issues/53083) → [#53330](https://github.com/vllm-project/vllm/pull/53330)); `HIT_PENDING` primary-tier keys are permanently dropped from request-level cascade ([#53062](https://github.com/vllm-project/vllm/issues/53062) → [#53329](https://github.com/vllm-project/vllm/pull/53329)).
- **Hybrid Mamba**: illegal memory access on prefix-cache resume with explicit `--block-size`; state column seeded with wrong block size ([#53142](https://github.com/vllm-project/vllm/issues/53142)).
- **BF16 NVFP4 Marlin** produces garbled output on GPUs without native FP4 support ([#34694](https://github.com/vllm-project/vllm/issues/34694)).
- **DSpark spec decode broken on H200/current main**; multiple code paths assume only `"dflash"` ([#50851](https://github.com/vllm-project/vllm/issues/50851)); attribute-loading fix in ([#49617](https://github.com/vllm-project/vllm/pull/49617), needs rebase).
- **Qwen3.5 122B (A10)**: Triton illegal memory access after startup while the engine reports healthy ([#51297](https://github.com/vllm-project/vllm/issues/51297)).
- **LoRA correctness**: mismatched module-name prefixes silently produce base-model output with no error ([#34186](https://github.com/vllm-project/vllm/issues/34186)).
- **Single-GPU regression**: v0.19.1→v0.24.0 regresses bs=1 decode ~28% on small dense models; official FP8 checkpoint is ~18% slower than runtime FP8 quant on Qwen3-4B/RTX 4090 ([#48035](https://github.com/vllm-project/vllm/issues/48035)).
- **GLM-5.2 MTP on MI355X (gfx950)**: 0% draft acceptance; disabling expert parallelism triggers `hipErrorIllegalAddress` ([#52833](https://github.com/vllm-project/vllm/issues/52833)).
- **ROCm spec decode**: half of all decode batch sizes silently fall back to eager attention; fix dispatches them to padded FULL CUDA graphs ([#53407](https://github.com/vllm-project/vllm/pull/53407)).
- **mnnvl allreduce**: workspace init hangs 30s and leaks GPU memory on IB-only multi-node ([#51986](https://github.com/vllm-project/vllm/issues/51986)).
- **Streaming input**: per-chunk arrival cost is O(cumulative prompt), making long multimodal sessions quadratic (~150 ms added per turn) ([#52471](https://github.com/vllm-project/vllm/issues/52471)).
- **Tool-calling/structured outputs**: DeepSeek V4 streamed tool calls can leak partial `</｜DSML｜parameter>` closing tags into arguments ([#53405](https://github.com/vllm-project/vllm/pull/53405)); Muse Glimmer JSON schemas are silently skipped when `enable_in_reasoning` is false ([#52594](https://github.com/vllm-project/vllm/issues/52594) → [#53404](https://github.com/vllm-project/vllm/pull/53404)); inconsistent `thinking` vs `enable_thinking` parameter names yield `content: null` ([#43728](https://github.com/vllm-project/vllm/issues/43728)).

## 6. What This Means for Application Developers

- **If you run MTP/DSpark/EAGLE3 spec decode at scale**, today's fixes target exactly the failure modes you're likely hitting: silent repetition, illegal memory access, and eager CUDA-graph fallbacks. Watch the TurboQuant ([#53406](https://github.com/vllm-project/vllm/pull/53406)), MRV2 ROCm ([#53407](https://github.com/vllm-project/vllm/pull/53407)), and DSpark ([#49617](https://github.com/vllm-project/vllm/pull/49617)) PRs.
- **The "healthy but dead" failure mode is a recurring theme** — scheduler admission deadlock ([#53130](https://github.com/vllm-project/vllm/issues/53130)) and the Ray shm_broadcast wedge ([#53157](https://github.com/vllm-project/vllm/issues/53157)) both evade health checks. Add liveness probes that exercise actual generation rather than just `/health`, and pin versions until these are resolved.
- **Disaggregated serving is maturing**: the KV-offload P2P fixes, the derender-detokenization RFC ([#42729](https://github.com/vllm-project/vllm/issues/42729)), and the expanded multimodal metadata RFC ([#51472](https://github.com/vllm-project/vllm/issues/51472)) all point to first-class prefill/decode tier splits with explicit render/detokenize boundaries.
- **Agentic workloads are becoming first-class**: the Agentic API RFC ([#52567](https://github.com/vllm-project/vllm/issues/52567)) plus the DSML tag and Muse Glimmer parser fixes indicate vLLM is actively hardening streaming tool-call paths.
- **DP8 over TP8 for DeepSeek-style MLA models** deserves a look: the reported 3.4x TTFT improvement at 1M context is substantial if your workload can tolerate data-parallel placement.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest — 2026-08-23

## Today's Highlights
SGLang released **v0.5.18** with 710 PRs from 212 contributors, including new model support and the **Muse Glimmer** multimodal architecture. The **Weight Cache Daemon** Phase 1 landed, cutting weight-load time for Qwen3-235B FP8 from ~306–327s to under 1s. Several high-severity regressions were reported against NVFP4 KV cache + speculative decoding and a Kimi-K3 crash in the new release.

## Releases & Breaking Changes
- **v0.5.18** — [Release](https://github.com/sgl-project/sglang/releases/tag/v0.5.18)  
  710 PRs from 212 contributors. New model additions, cookbook updates, and the usual accumulation of fixes. No explicit migration notes or intentional breaking changes were included in the posted summary.

## New Model & Hardware Support
- **Muse Glimmer** (autoregressive multimodal) — [v0.5.18 release notes](https://github.com/sgl-project/sglang/releases/tag/v0.5.18)
- **Spark3 model architecture** — native serving support with sliding-window/full attention and TP/PP — [PR #35963](https://github.com/sgl-project/sglang/pull/35963)
- **LLaDA2.2 Block Routing MoE** — serving-side implementation for capacity-limited block-local expert routing — [PR #31768](https://github.com/sgl-project/sglang/pull/31768)
- **FastWan VSA Cake Stage-2 backend** for SM100/SM103 — [PR #35490](https://github.com/sgl-project/sglang/pull/35490)
- **Strict FlashInfer SSD and Cake Mamba prefill backends** — [PR #35444](https://github.com/sgl-project/sglang/pull/35444)
- **AMD Radix-4 MoE top-k router** for Kimi-K3 — [PR #34490](https://github.com/sgl-project/sglang/pull/34490)
- **PP support for PD + DSpark** — in progress — [PR #33863](https://github.com/sgl-project/sglang/pull/33863)

## Performance & Optimization
- **Weight Cache Daemon Phase 1** — per-rank daemon holds post-quantized weights and serves them over CUDA IPC; weight load for Qwen3-235B FP8 dropped from **~306–327s to <1s** — [Issue #33522](https://github.com/sgl-project/sglang/issues/33522)
- **HiCache load-back conflict rejection** — reject specs claiming nodes pinned by an in-flight load-back, avoiding corrupted hierarchical cache states — [PR #35931](https://github.com/sgl-project/sglang/pull/35931)
- **Unified memory eviction stop** — stop eviction from shared allocation when capacity is sufficient; open PR — [PR #33091](https://github.com/sgl-project/sglang/pull/33091)
- **Diffusion benchmark improvements** — explicit quality/BCG controls and cache isolation — [PR #36016](https://github.com/sgl-project/sglang/pull/36016)

## Stability & Regressions
Ranked by severity:

1. **Kimi-K3 crash in v0.5.18** — no repro details or fix PR yet — [Issue #36018](https://github.com/sgl-project/sglang/issues/36018)
2. **NVFP4 KV cache + speculative decoding crashes** — `extend_prefix_lens_cpu is None` in FlashInfer dequant workspace; duplicate reports for DFLASH and native MTP/NEXTN — [Issue #36001](https://github.com/sgl-project/sglang/issues/36001), [Issue #36010](https://github.com/sgl-project/sglang/issues/36010)
3. **Diffusion LoRA auto mode merges post-load FP8 weights and crashes** — `--lora-merge-mode auto` incompatible with online FP8 runtime layouts — [Issue #35970](https://github.com/sgl-project/sglang/issues/35970)
4. **`/health` timeout orphans scheduler-side requests** — can pile up and crash paged-prefill batching — [Issue #35884](https://github.com/sgl-project/sglang/issues/35884)
5. **NIXL P/D stops serving after one role is replaced** — both roles report Ready but requests time out — [Issue #33789](https://github.com/sgl-project/sglang/issues/33789)
6. **Qwen3.8-27B NVFP4 wrong coordinate detection on images** — correctness bug — [Issue #35949](https://github.com/sgl-project/sglang/issues/35949)
7. **Logprob mismatch between prefill and decode exactly at index 96 with FP8 KV cache on H100** — [Issue #25790](https://github.com/sgl-project/sglang/issues/25790)

Fix PRs to watch:
- Diffusion extension loader facade regression — [PR #36017](https://github.com/sgl-project/sglang/pull/36017)
- Mamba DCP index assertion fix — [PR #36005](https://github.com/sgl-project/sglang/pull/36005)
- DSpark/Dflash state divergence across TP ranks — [PR #33614](https://github.com/sgl-project/sglang/pull/33614)

## What This Means for Application Developers
- **v0.5.18 is a major upgrade**, but verify your exact execution path if you use **NVFP4 KV cache + any speculative decoding** or **Kimi-K3**; both have active crash reports with no landed fix as of today.
- The **Weight Cache Daemon** is a significant operational win for large-model recovery, especially for FP8 models in multi-GPU deployments. Track [Issue #33522](https://github.com/sgl-project/sglang/issues/33522) for roadmap updates.
- A major **ServerArgs config refactor** is in flight ("resolve once, publish into config bags") — [PR #35917](https://github.com/sgl-project/sglang/pull/35917). Expect changes in how configuration is resolved/validated; follow the stacked PR series if you maintain custom launchers or deep integrations.
- If you operate **NIXL P/D deployments**, avoid live role replacement until [Issue #33789](https://github.com/sgl-project/sglang/issues/33789) is fixed.
- Health-check-heavy workloads using paged-prefill batching should be aware of the orphaned `/health` request bug — [Issue #35884](https://github.com/sgl-project/sglang/issues/35884).

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp Digest — 2026-08-23

## Today's Highlights
The 24h release train landed **b10576–b10587**, with notable additions including Vulkan `PAD_REFLECT_1D`, a new `common/json.h` abstraction, DSpark support for Bailingmoe3, and dots3-note vision+audio support. On the stability side, the tracker is dominated by **SYCL multi-GPU and driver issues**, a **CUDA Blackwell decode hang**, and a **speculative-decoding correctness divergence** on quantized targets — no fix PRs are linked yet for the most severe items.

## Releases & Breaking Changes
- **b10587** — Vulkan: added `GGML_OP_PAD_REFLECT_1D` shader and backend wiring.  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10587
- **b10586** — mtmd: use `ggml_rope_set_offset`.  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10586
- **b10585** — common: new `json.h` pimpl abstraction, migrating server/jinja/tests off direct `nlohmann::json`. Internal refactor; watch for build-system/compiler edge cases.  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10585 | https://github.com/ggml-org/llama.cpp/pull/27511
- **b10584** — `fit` now accounts for `n_streams`; draft context follows target context size in non-unified KV cache setups.  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10584
- **b10582** — CI: ROCm Ubuntu job restored with ccache content-based compiler check.  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10582
- **b10581** — model: DSpark support for Bailingmoe3.  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10581
- **b10580** — mtmd: dots3-note vision+audio support.  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10580
- **b10578** — ggml: concat rewritten from per-element to row-level memcpy.  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10578
- **b10577** — common: fix draft-MTP with embeddings (#26352, #27299).  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10577
- **b10576** — SYCL: re-add Q2_K reordered MMVQ and ESIMD kernels with gate params.  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10576

No migrations beyond a clean rebuild are expected.

## New Model & Hardware Support
- **Bailingmoe3** DSpark speculative-decoding support landed in b10581.  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10581
- **dots3-note** vision+audio multimodal support landed in b10580.  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10580
- **GigaChat 3.5** (432B-A28B MoE, MLA + DeepSeek-style MoE) — open PR.  
  https://github.com/ggml-org/llama.cpp/pull/25342
- **DFlash2** speculative decoding (local convolution + candidate selector) — open PR.  
  https://github.com/ggml-org/llama.cpp/pull/27342
- **Alternative Hexagon NPU backend** (FastRPC-based) — open PR.  
  https://github.com/ggml-org/llama.cpp/pull/27535
- **WebP via ffmpeg** for mtmd — open PR.  
  https://github.com/ggml-org/llama.cpp/pull/27520

## Performance & Optimization
- **ggml concat** now uses row-level memcpy instead of per-element copies (b10578).  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10578
- **SYCL Q2_K** reordered MMVQ and ESIMD kernels restored in b10576.  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10576
- **OpenCL decode/quant work** in progress: K-quant GEMV/GEMM for speculative decoding/MTP (Adreno), Intel Xe-LP tuning reporting **+11–12% TG/PP**, and widened MQ/cluster flash-attention for head sizes 64–512 and GQA 2–16.  
  https://github.com/ggml-org/llama.cpp/pull/26477 | https://github.com/ggml-org/llama.cpp/pull/26438 | https://github.com/ggml-org/llama.cpp/pull/26430
- **CUDA `SUM_ROWS`** row-contiguous support — open PR.  
  https://github.com/ggml-org/llama.cpp/pull/26308
- **CUDA `POOL_1D`** support (avg/max, 216/216 tests pass) — open PR.  
  https://github.com/ggml-org/llama.cpp/pull/27573
- **Adaptive MTP draft depth** (`--spec-type draft-mtp-adaptive`) — open PR.  
  https://github.com/ggml-org/llama.cpp/pull/27210

## Stability & Regressions
Ranked by likely production impact:

- **CUDA kernel stall → watchdog kill** on RTX Pro 6000 Blackwell with Qwen3.8-27B-GGUF — open, no fix PR.  
  https://github.com/ggml-org/llama.cpp/issues/27102
- **SYCL completely broken on Arc A770** for multiple models — open, no fix PR.  
  https://github.com/ggml-org/llama.cpp/issues/27063
- **Speculative decoding divergence** (draft-mtp/dspark) vs. vanilla on quantized targets — open, no fix PR.  
  https://github.com/ggml-org/llama.cpp/issues/25618
- **RAM-backed prompt cache cross-contamination** under concurrent load (`--cache-ram`) — open; high severity for server deployments.  
  https://github.com/ggml-org/llama.cpp/issues/27148
- **Responses API drops `namespace`/`web_search` tool types** — Codex CLI MCP tools unreachable — open.  
  https://github.com/ggml-org/llama.cpp/issues/24295
- **CUDA Blackwell NVFP4 decode hang** (RTX 5090D, CPU spin, no GPU work) — open.  
  https://github.com/ggml-org/llama.cpp/issues/27329
- **HIP/ROCm prompt-processing regression** on MI210 — open.  
  https://github.com/ggml-org/llama.cpp/issues/26435
- **Dual-GPU CUDA garbled output** (RTX 5060 Ti + RTX 3060, Qwen3.6-27B) — open.  
  https://github.com/ggml-org/llama.cpp/issues/26257
- **SYCL: second-prompt garbage** on Arc Pro B60 — open.  
  https://github.com/ggml-org/llama.cpp/issues/26845
- **SYCL new host-pinned memory high CPU utilization** for large allocations — open.  
  https://github.com/ggml-org/llama.cpp/issues/27038
- **SYCL `--split-mode tensor` crashes in `dev2dev_memcpy`** on dual Arc Pro B70 — open.  
  https://github.com/ggml-org/llama.cpp/issues/27198
- **SYCL fails on Iris Xe** with “program was built for 1 devices” — open.  
  https://github.com/ggml-org/llama.cpp/issues/27412
- **mtmd video ingestion:** MOOV-at-end MP4s yield 0 frames; Windows probe deadlock also tracked — open.  
  https://github.com/ggml-org/llama.cpp/issues/24394 | https://github.com/ggml-org/llama.cpp/issues/24429

## What This Means for Application Developers
- If you run `llama-server` with `--cache-ram` under concurrent load, **assume prompt-cache cross-slot contamination until #27148 is fixed**; disable the feature or pin single-slot serving if correctness matters.
- **Responses API users relying on Codex-style tools** (`namespace`, `web_search`) are still blocked; only function tools are reliably passed through.
- **Speculative decoding with quantized targets remains risky**: `draft-mtp`/`dspark` can diverge under greedy sampling. Validate output equality with a non-speculative run, or use bf16 targets.
- The **`json.h` abstraction in b10585** is intended to be a drop-in replacement, but it touches server/jinja/tests — run your custom build and server integration tests before rolling out.
- New speculative-decoding depth control (`draft-mtp-adaptive`) and DFlash2 are in-flight; expect more tuning options soon, but stay on stable releases if you are affected by SYCL or multi-GPU stability issues.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Digest — 2026-08-23

## 1. Today's Highlights

No release landed in the last 24 hours, but a meaningful batch of correctness and observability work is in flight: the server will soon evict stale llama-server runners that wedge the scheduler ([#17516](https://github.com/ollama/ollama/pull/17516)), cached prompt tokens will be reported across all API surfaces ([#17943](https://github.com/ollama/ollama/pull/17943)), and `tool_choice` will finally be honored on both OpenAI and Anthropic compat layers ([#17935](https://github.com/ollama/ollama/pull/17935)). On the regression side, 0.32.14/0.32.15 introduced a CPU overuse bug on VRAM-resident models ([#17833](https://github.com/ollama/ollama/issues/17833)), silently ignored `tool_choice` ([#17921](https://github.com/ollama/ollama/issues/17921)) and MLX structured outputs ([#17933](https://github.com/ollama/ollama/issues/17933)), and a cloud-model thinking loop that produced zero usable output ([#17892](https://github.com/ollama/ollama/issues/17892)) — fix PRs exist for the first three.

## 2. Releases & Breaking Changes

None in the last 24h. Latest versions referenced across issues: **0.32.15** (current, MLX reports) and **0.32.14** (CPU regression). No API/config changes or migration notes.

## 3. New Model & Hardware Support

- **MLX structured output support** ([#17929](https://github.com/ollama/ollama/pull/17929), open): enforces `format`/JSON Schema on the MLX runner via XGrammar logit masking; supersedes the closed earlier attempt ([#17697](https://github.com/ollama/ollama/pull/17697)).
- **NVIDIA driver guidance by compute capability** ([#17940](https://github.com/ollama/ollama/pull/17940)): docs PR adding concrete driver-version examples for older GPUs; closes [#17789](https://github.com/ollama/ollama/issues/17789).
- **New integration**: RemiAI added to integrations list ([#17938](https://github.com/ollama/ollama/pull/17938)).
- **Cloud model requests gaining traction**: Qwen3.8-27B cloud tag and Muse Glimmer on Ollama Cloud ([#17926](https://github.com/ollama/ollama/issues/17926), [#17796](https://github.com/ollama/ollama/issues/17796) — 16 👍).

## 4. Performance & Optimization

- **Cached prompt-token reporting** ([#17943](https://github.com/ollama/ollama/pull/17943)): adds `prompt_eval_cached_count` to native responses and cached-token fields to OpenAI/Anthropic-compat APIs; excludes cache hits from CLI/benchmark prefill rates while keeping `prompt_eval_count` as the logical input total — important for measuring real throughput in agent loops.
- **KV-cache preservation for Claude Code** ([#17918](https://github.com/ollama/ollama/pull/17918), closed): disables the "tokens left" system message Claude Code injects after every tool result, which was invalidating the KV cache on every request because Ollama hoists system messages to the prompt front.
- **Stale-runner eviction** ([#17516](https://github.com/ollama/ollama/pull/17516)): fixes the failure class where a crashed/wedged llama-server stays in `s.loaded` — `ollama ps` showed the model loaded and health checks passed because the port still accepted connections. Addresses [#17428](https://github.com/ollama/ollama/issues/17428)/[#17509](https://github.com/ollama/ollama/issues/17509).

## 5. Stability & Regressions

Ranked by severity for infrastructure operators:

1. **`tool_choice` silently ignored** ([#17921](https://github.com/ollama/ollama/issues/17921), open) — on 0.32.15, forced tool calls return plain text and `"none"` still invokes tools, on both OpenAI and Anthropic compat layers. Silent wrong behavior for agents; fix PR [#17935](https://github.com/ollama/ollama/pull/17935).
2. **Cloud: deepseek-v4-flash:0731 infinite thinking loop** ([#17892](https://github.com/ollama/ollama/issues/17892), open) — same reasoning paragraph generated 221× over ~1m45s, zero usable output, only 4 tool calls on a complex agent task.
3. **MLX structured outputs silently no-op** ([#17933](https://github.com/ollama/ollama/issues/17933), closed) — `format`/`response_format` accepted but ignored; invalid schema returns 200. Fix in [#17929](https://github.com/ollama/ollama/pull/17929).
4. **0.32.14 CPU overuse with VRAM-resident models** ([#17833](https://github.com/ollama/ollama/issues/17833), open, 3 👍) — 50–80% CPU spike while `ollama ps` reports 100% GPU bound; 0.32.13 unaffected.
5. **HF-imported Muse-Glimmer-30B truncated to ~3 tokens** ([#17939](https://github.com/ollama/ollama/issues/17939), open) — Ollama derives incorrect automatic `stop` parameters from GGUF metadata.
6. **`PARSER qwen3` not splitting thinking on HF imports** ([#17937](https://github.com/ollama/ollama/issues/17937), open) — RuadaptQwen3-8B-Hybrid outputs `<think>` inline instead of `message.thinking`.
7. **Inconsistent no-`num_ctx` handling** ([#17889](https://github.com/ollama/ollama/issues/17889), open) — same over-length prompt, same server: some models return 400 citing 4096, others return 200 with `prompt_eval_count` 2050 (0.32.9 Windows).
8. **Windows NTFS mount-point create failure** ([#17591](https://github.com/ollama/ollama/issues/17591), open) — `ollama create` 400s when GGUF is referenced via NTFS volume mount point.
9. **`context deadline exceeded` on many HF models** ([#17484](https://github.com/ollama/ollama/issues/17484), open, 2 👍).
10. **Slow Docker Hub pulls via CloudFront** ([#17932](https://github.com/ollama/ollama/issues/17932), open) — ~5.1 MiB/s on the 3GiB image; user requests quay.io mirror.

Closed within 24h: MLX per-request memory leak (~0.147 GiB growth/req, plateau ~28.5 GiB, [#17924](https://github.com/ollama/ollama/issues/17924)), false 401 auth error on local `/api/embed` and `/api/generate` ([#17822](https://github.com/ollama/ollama/issues/17822)), Gemma 4 not reading images ([#17931](https://github.com/ollama/ollama/issues/17931)), model identity spoofing on ornith-1.5 ([#17904](https://github.com/ollama/ollama/issues/17904)).

Other fixes in flight: renderer no longer overrides a model's own template ([#17930](https://github.com/ollama/ollama/pull/17930), fixes [#14560](https://github.com/ollama/ollama/issues/14560)); data-race fixes in `progress` ticker/states — 111 race-detector warnings ([#16629](https://github.com/ollama/ollama/pull/16629)); sidebar open animation ([#17528](https://github.com/ollama/ollama/pull/17528), fixes [#12954](https://github.com/ollama/ollama/issues/12954)).

## 6. What This Means for Application Developers

- **Don't trust silent success on 0.32.15**: `tool_choice` and MLX `format` are accepted but ignored today. If you depend on forced tool calls or schema-constrained output, pin to GGUF backends or wait for [#17935](https://github.com/ollama/ollama/pull/17935)/[#17929](https://github.com/ollama/ollama/pull/17929).
- **Prompt-cache observability is coming**: [#17943](https://github.com/ollama/ollama/pull/17943) lets you separate cached vs. newly-processed prefill tokens — essential for evaluating agent-loop economics and preparing for Ollama Cloud prompt caching ([#16714](https://github.com/ollama/ollama/issues/16714)).
- **Keep system messages stable**: Ollama moves system messages to the prompt front, so any per-turn system churn (e.g., Claude Code's token countdown) silently destroys KV-cache reuse. Follow the pattern in [#17918](https://github.com/ollama/ollama/pull/17918): avoid variable system content in tool loops.
- **HF-imported GGUFs are still risky**: incorrect `stop` derivation ([#17939](https://github.com/ollama/ollama/issues/17939)) can truncate output to a few tokens, and qwen3 thinking-split can be missing ([#17937](https://github.com/ollama/ollama/issues/17937)). Validate stop/parser behavior on imported models before production use.
- **Scheduler reliability improves**: [#17516](https://github.com/ollama/ollama/pull/17516) prevents phantom loaded runners after llama-server crashes — relevant if you've seen requests hang against "loaded" models that are actually dead.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-08-23

## Today's Highlights

No releases shipped in the last 24h, but the PR queue is heavily focused on cost/billing correctness and API-bridge reliability: Databricks cached-token billing, Google Interactions API spend tracking, and several `/v1/responses` ↔ Anthropic/Chat Completions compatibility fixes are all in flight. The most severe operational issues reported right now are a memory-leak/OOM pattern in the proxy, Prisma migration failures in the `litellm-non_root` image, and a Redis cache regression in v1.93.0.

## Releases & Breaking Changes

- No new releases in the last 24h.
- No explicit migration or breaking-change notes in the current data.

## New Model & Hardware Support

No new hardware/quantization backends appeared in this window, but there are notable pricing/model support changes:

- Databricks billing fixes: cached tokens will now be billed at cache rates, and previously unpriced models — Claude Opus 4.7/4.8/5, Sonnet 5, Fable 5 — are being added. PR: [#37975](https://github.com/BerriAI/litellm/pull/37975)
- Community request to add Telnyx inference models (Kimi K2.6, GLM-5.1-FP8) to `model_prices_and_context_window.json`. Issue: [#28006](https://github.com/BerriAI/litellm/issues/28006)
- Cost-map feature: time-based off-peak per-token pricing for providers with daily discount windows. PR: [#31725](https://github.com/BerriAI/litellm/pull/31725)

## Performance & Optimization

- **Least-busy router counter clamp**: `least_busy` routing counters can drift negative under races; a fix clamps them at zero to avoid skewed routing. PR: [#34444](https://github.com/BerriAI/litellm/pull/34444)
- **Upstream cancellation gap**: non-streaming requests don’t cancel upstream provider work when the client disconnects, potentially keeping LLM calls running after the caller is gone. Issue: [#37140](https://github.com/BerriAI/litellm/issues/37140)
- **Stop double-billing stored response reads**: response read/management calls are currently logged and billed as new LLM calls; a fix prices them at $0 and removes fake prompt payloads from spans. PR: [#36890](https://github.com/BerriAI/litellm/pull/36890)
- **Wasted log volume**: DeepSeek `reasoning_content` placeholder warnings are emitted per historical assistant message per request; a PR aggregates them to one warning per request. PR: [#37728](https://github.com/BerriAI/litellm/pull/37728)

## Stability & Regressions

### Critical / high severity

- **Heavy RAM usage → pod OOM**: LiteLLM reaches max pod RAM over time and crashes; no fix PR is linked in the current data. Issue: [#27954](https://github.com/BerriAI/litellm/issues/27954)
- **`litellm-non_root` image cannot run Prisma migrations** after upgrade (v1.84.0 → v1.92.1) because `@prisma/engines` is not writable; this can block proxy boot for database-backed deployments. Issue: [#34236](https://github.com/BerriAI/litellm/issues/34236)
- **Proxy fails to start after `uv tool update`** to v1.96.2 due to FastAPI `get_flat_dependant` incompatibility. Issue: [#36922](https://github.com/BerriAI/litellm/issues/36922)
- **Redis cache regression in v1.93.0**: `TypeError: AbstractConnection.__init__() got an unexpected keyword argument 'ssl_check_hostname'` breaks Redis caching and budget counters. Issue: [#34614](https://github.com/BerriAI/litellm/issues/34614)

### Cost / spend correctness

- **Usage dashboard underreports spend** on multi-page views and attributes failed requests as $0. Issue: [#11929](https://github.com/BerriAI/litellm/issues/11929)
- **Anthropic batch API costs are always $0**; `CheckBatchCost` silently drops completed batch cost/token data. Issue: [#27944](https://github.com/BerriAI/litellm/issues/27944)
- **Provider budgets don’t count embedding/rerank calls**; `RouterBudgetLimiting` raises `"custom_llm_provider is required"` on every such call. Issue: [#37877](https://github.com/BerriAI/litellm/issues/37877)
- **`compression_savings_spend` / `prompt_caching_savings_spend` stay $0** with cost-based routing across multiple deployments per model. Issue: [#37117](https://github.com/BerriAI/litellm/issues/37117)
- Fix in progress for Databricks cache-rate underbilling/overbilling. PR: [#37975](https://github.com/BerriAI/litellm/pull/37975)

### API bridge / translation correctness

- **Anthropic `/v1/messages` bridge loses cache accounting** when upstream is OpenAI Responses API; `cache_read_input_tokens` always 0. Closed issue, but worth verifying in staging. Issue: [#36091](https://github.com/BerriAI/litellm/issues/36091)
- **Bridged `/v1/responses` item IDs are wrong**: output items carry `chatcmpl-*` IDs instead of `msg_*`/`ig_*`, breaking native OpenAI replay/continuation. Fix PR: [#37946](https://github.com/BerriAI/litellm/pull/37946)
- **Conversation history is lost when chaining `previous_response_id`** through the responses bridge; fix PR preserves the conversation for streaming and non-streaming turns. PR: [#37956](https://github.com/BerriAI/litellm/pull/37956)
- **Thinking blocks are dropped or flattened** when Anthropic `/v1/messages` is backed by OpenAI-family providers; PR round-trips thinking blocks for both Responses and Chat Completions paths. PR: [#37953](https://github.com/BerriAI/litellm/pull/37953)
- **Gemini multi-turn reasoning duplication**: assistant messages carrying both `reasoning_content` and `thinking_blocks` send the same reasoning text twice; fix makes the two branches mutually exclusive. PR: [#37977](https://github.com/BerriAI/litellm/pull/37977)
- **`is_thinking_enabled` crashes** when `thinking` is a bare bool rather than a dict (Claude Code shorthand). Closed issue: [#37712](https://github.com/BerriAI/litellm/issues/37712)
- **Malformed concatenated tool-call JSON aborting an entire multi-tool-call turn**: `split_concatenated_json_objects` raises `JSONDecodeError` on a truncated object. Closed issue: [#37699](https://github.com/BerriAI/litellm/issues/37699)
- **Fireworks AI rejects tool schemas containing `"default": null` / `"title"`** in nested properties; `drop_params` doesn’t sanitize nested schemas. Open: [#27821](https://github.com/BerriAI/litellm/issues/27821)

### Security

- **UI auth cookie JWT contains reusable API key material**; if copied/replayed it can authenticate another session. Tracked as closed. Issue: [#35664](https://github.com/BerriAI/litellm/issues/35664)

## What This Means for Application Developers

- **Validate upgrades before rolling out**: the v1.93.0 Redis regression, v1.96.2 FastAPI startup failure, and non-root Prisma migration issue are likely to affect anyone on Docker or `uv`-managed upgrades. Pin versions and test migrations in CI.
- **Don’t trust spend dashboards/budgets in current builds yet**: batch costs, cached-token savings, embedding/rerank provider budgets, and response-read billing are all actively being fixed. Reconcile spend data from the provider console until these land.
- **If you use the Anthropic `/v1/messages` bridge with OpenAI-backend models**, watch for missing cache accounting and dropped/duplicated thinking blocks; the fix PRs are landing now but are not in a release yet.
- **For agentic apps relying on `/v1/responses` continuation**, the `previous_response_id` chaining is currently unreliable; the conversation-preserving fix is in flight.
- **Cluster operators on Kubernetes** should treat the RAM growth issue as a high-priority monitoring item, and ensure OOM eviction policies are in place until root cause is addressed.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth Digest — 2026-08-23

## 1. Today's Highlights
No new releases landed in the last 24 hours; activity is concentrated in Unsloth Studio hardening. The team is actively fixing chat runs being cancelled on view navigation ([#9129](https://github.com/unslothai/unsloth/pull/9129)), a crash triggered by failed markdown/Mermaid chunk loads ([#9236](https://github.com/unslothai/unsloth/pull/9236)), and a long-thread rendering bottleneck measured at 3175ms ([#9058](https://github.com/unslothai/unsloth/pull/9058)). A batch of open Studio bugs — IndexedDB persistence failures, GGUF export 524s, and preset-save 400s — remain unresolved.

## 2. Releases & Breaking Changes
None in the last 24h. No version bumps, API changes, or migration notes to report.

## 3. New Model & Hardware Support
- **Ling 3.0 support requested** ([#8532](https://github.com/unslothai/unsloth/issues/8532)): open feature request for download/load/configure/serve of Ling 3.0 in Unsloth Studio; no implementation yet.
- **XPU backend active but unstable**: qLora training on Intel XPU fails with tensor device mismatch (`xpu:0` vs `cpu`) during offloading ([#9524](https://github.com/unslothai/unsloth/issues/9524)); no fix PR yet.
- No new quantization formats, model families, or CUDA/ROCm/Metal backend changes were released this cycle.

## 4. Performance & Optimization
- **Long-thread rendering** ([#9058](https://github.com/unslothai/unsloth/pull/9058)): re-opening a 300K-character thread took **3175ms on Chromium (2817ms script)**, scaling **7.1x from 25K to 300K**. PR makes painting incremental so newest messages render immediately instead of rebuilding the full thread.
- **studiobench harness** ([#9296](https://github.com/unslothai/unsloth/pull/9296), [#9439](https://github.com/unslothai/unsloth/pull/9439), [#9356](https://github.com/unslothai/unsloth/pull/9356)): new real-path performance benchmark/A-B simulator running the actual backend, SSE stream, parser, autoscroll, Streamdown, and Shiki. Adds a readiness gate that handles virtualized (windowed) threads and new 500K/1M message rungs — the 500K rung previously never produced data due to a Playwright setup failure.
- **Estimated Memory Usage panel** ([#9525](https://github.com/unslothai/unsloth/pull/9525)): Load Model dialog now shows a weight + KV cache memory breakdown above Context Length, letting operators see cost before loading.
- **SSE over POST** ([#9533](https://github.com/unslothai/unsloth/pull/9533)): Cloudflare Quick Tunnels buffer streamed GET responses, stalling training progress, export logs, and RAG jobs. Adds POST routes for first-party streams; GET aliases retained for existing clients.

## 5. Stability & Regressions
Ranked by severity:

1. **XPU qLora training broken** ([#9524](https://github.com/unslothai/unsloth/issues/9524)): device mismatch during tensor offload; open, no fix.
2. **Model load fails on 16GB RAM iGPU** ([#9482](https://github.com/unslothai/unsloth/issues/9482)): ~10GB doesn't fit; workaround is `UNSLOTH_ALLOW_HOST_OFFLOAD=1`; open.
3. **Chat persistence broken in AppImage build** ([#9518](https://github.com/unslothai/unsloth/issues/9518)): every send fails to write to IndexedDB; backend healthy via direct `curl`; open.
4. **GGUF export to HF fails with 524** ([#9516](https://github.com/unslothai/unsloth/issues/9516)): Cloudflare timeout on export; LoRA export works; open.
5. **Presets can't be saved** ([#9500](https://github.com/unslothai/unsloth/issues/9500)): 400 on `PUT /api/chat/settings`; open.
6. **Tasks cancelled on page switch** ([#9510](https://github.com/unslothai/unsloth/issues/9510)): navigating to API/settings while an agent task runs cancels it; redundant reload when switching to the same model. Fix PR [#9129](https://github.com/unslothai/unsloth/pull/9129) keeps project chat runs alive across view switches; not yet merged.
7. **Host RAM not released after GGUF load** ([#9033](https://github.com/unslothai/unsloth/issues/9033)): full offload (`-ngl -1`) still leaves system RAM occupied; open.

**Fixed this cycle**: vite build break from missing exports in commit `e0ae131` ([#9521](https://github.com/unslothai/unsloth/issues/9521)); Linux AppImage 0.1.801-beta freeze on Model Hub tab ([#9453](https://github.com/unslothai/unsloth/issues/9453)); RAM spike during model download ([#9032](https://github.com/unslothai/unsloth/issues/9032)); failed markdown chunk taking down the whole app ([#9236](https://github.com/unslothai/unsloth/pull/9236)); flaky load_freeze tests now assert the event-loop property directly ([#9532](https://github.com/unslothai/unsloth/pull/9532)); backend pytest sessions bounded against wedged xdist workers ([#9530](https://github.com/unslothai/unsloth/pull/9530)); leftover incomplete isolated Node tree reuse ([#9361](https://github.com/unslothai/unsloth/pull/9361)).

## 6. What This Means for Application Developers
- **If you expose Studio's API to other machines**: it currently binds to `127.0.0.1` with no setting to change it, blocking LAN/WSL access ([#9522](https://github.com/unslothai/unsloth/issues/9522)); a duplicated Remote & LAN / API settings section is flagged as UI bloat ([#9519](https://github.com/unslothai/unsloth/issues/9519)).
- **Expect task interruption on navigation**: agent/chat runs are cancelled when you leave the project page — PR [#9129](https://github.com/unslothai/unsloth/pull/9129) fixes this in-tree but hasn't landed; avoid navigating during long generations or vendor a patched build.
- **Export path caveat**: GGUF export to HF is currently unreliable (524); LoRA export is the safer path until fixed ([#9516](https://github.com/unslothai/unsloth/issues/9516)).
- **Memory-constrained hosts**: use `UNSLOTH_ALLOW_HOST_OFFLOAD=1` when the model exceeds available VRAM ([#9482](https://github.com/unslothai/unsloth/issues/9482)); be aware of the known host-RAM-never-released issue after offloaded GGUF loads ([#9033](https://github.com/unslothai/unsloth/issues/9033)).
- **RAG/embedding config**: embedding model dropdown only listed one option, and per-mount state could drop saves; PRs [#9514](https://github.com/unslothai/unsloth/pull/9514) and [#9531](https://github.com/unslothai/unsloth/pull/9531) fix listing and state duplication but are not yet merged.
- **MCP ecosystem**: pre-registered OAuth client support ([#7665](https://github.com/unslothai/unsloth/pull/7665)) and rendering MCP Apps interactive widgets in chat ([#9301](https://github.com/unslothai/unsloth/pull/9301)) are in flight — relevant if you build MCP servers returning `ui://` resources.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*