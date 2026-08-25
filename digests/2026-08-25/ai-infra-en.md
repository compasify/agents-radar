# AI Infrastructure Digest 2026-08-25

> Generated: 2026-08-24 23:13 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# Cross-Project Comparison Report — AI Inference Infrastructure
**Date: 2026-08-25 · Coverage: vLLM, SGLang, llama.cpp, Ollama, LiteLLM, Unsloth**

---

## 1. Ecosystem Overview

The inference stack is in a stabilization-and-hardening phase: no new releases landed in vLLM, SGLang, Ollama, LiteLLM, or Unsloth in the last 24 hours, while llama.cpp continued its high-cadence train with 7 tags (b10604–b10615). The dominant engineering themes are speculative-decoding reliability, enablement for next-gen accelerators (NVIDIA Rubin/Blackwell variants, AMD gfx950, Ascend NPU, Intel XPU), and agent/tool-calling correctness at the serving and gateway layers. The sharpest tension is between optimization momentum and regression risk: quantization and KV-cache work advance on paper, while production teams face concrete breakages (DeepSeek-V4-Flash 8× KV-cache regression, SGLang unified-cache throughput drop, Ollama Qwen3.8 tool-loop 500s) that argue for strict version pinning and workload-specific benchmarking. Cold-start performance is emerging as a new competitive frontier — SGLang cut post-quantized weight loading from ~306–327s to under 1s via a CUDA-IPC weight-cache daemon.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status |
|---|---|---|---|
| **llama.cpp** | 63 updated | 105 updated | **7 releases** (b10604–b10615) |
| **vLLM** | ~26 referenced | ~12 referenced | No release; v0.27.1 current |
| **SGLang** | ~10 referenced | ~17 referenced | No release; v0.5.18 referenced |
| **Unsloth** | ~23 referenced | ~19 referenced | No release; release prep in flight (deterministic bench, CI gates) |
| **Ollama** | ~12 referenced | ~7 referenced | No release |
| **LiteLLM** | ~13 referenced | ~11 referenced | No release |

*llama.cpp reports explicit 24h totals; other counts reflect items referenced in the digest and undercount true activity.*

Key observations: llama.cpp's release cadence is unmatched — 7 tags in 24 hours, driven by Metal kernel work and correctness fixes (MP4 MOOV, ggml_clamp). vLLM is mid-architectural migration with the Model Runner V2 default flip, generating churn (CUDA-graph memory reservation already reverted for B200 MoE CI). Unsloth is stabilizing a tagged release, with maintainer PRs targeting studio-bench determinism and CI gates. SGLang's CI health is a liability (3 broken, 11 flaky on `main`).

---

## 3. Model Support Race

| Project | New Models / Architectures This Window | Notes |
|---|---|---|
| **SGLang** | Nemotron 3.5 Lightning spec decode (ModelOpt W4A16 NVFP4); **NVIDIA Rubin sm_107** first enablement; LLaDA2.2 Block Routing MoE; GLM5.1 DSA on Intel XPU; MiniMax H3 on Ascend NPU; GLM5.2 MLA MXFP4 on gfx950 | Broadest hardware reach of the window |
| **vLLM** | Kimi-K3 on ROCm (gfx942/MI325X + AITER fused-MoE); Qwen GDN on consumer Blackwell (sm120); MiniMax-M3 ROCm EAGLE3 path; FlexOlmo/Olmo3/Hunyuan migrated to Transformers backend (−3K lines) | Production-hardware consolidation |
| **llama.cpp** | **DeepSeek 4 tensor-split** (`-sm tensor`, shipped); DFlash2 architecture (PR); HRM-Text / DFM Mimir 1B; MXFP4/NVFP4 quantization routines; MoE expert streaming from disk | Fastest local/long-tail coverage |
| **Ollama** | GraniteForCausalLM on MLX (Granite 4.1); ornith/qwen35 renderer auto-detection | Apple-silicon focused |
| **LiteLLM** | None merged — MiniMax-H3 via vLLM OMNI passthrough blocked on open issue | Gateway layer, no engine work |
| **Unsloth** | None merged — DGX Spark (GB10) blocked for Qwen3.5-class models by stale transformers 4.57.1 pin | Training-side gap |

**Verdict:** SGLang leads on new-hardware breadth — it is the only project with explicit Rubin sm_107 enablement plus NPU and XPU coverage in the same window. llama.cpp leads on release velocity and long-tail architecture/format adoption, though most items are PR-stage. vLLM leads on production GPU coverage (Blackwell consumer, ROCm datacenter). The notable gap: LiteLLM merged no model support at all, and Unsloth's model support is gated by upstream dependency pins.

---

## 4. Performance Frontier

**KV cache**
- vLLM: INT8 KV-cache remains an open feature request (FP8-only today); chasing an ~8× per-token regression in DeepSeek-V4-Flash-0731 (56 bytes/token vs preview).
- SGLang: MLA reserved-slot safety fix; HiCache host-pool refactor models host memory as a shared layer across L3→L1 staging, L2 caching, and model-state backup.
- Ollama: MLX KV-cache memory leak (grows per request, not released until restart); persistent prefill cache PR adds opt-in save/restore with 8 GiB LRU cap.
- Unsloth: open PR preserves quantized KV cache (q8_0-class) under tensor parallelism instead of silently dropping to f16/bf16/f32.

**Batching & execution graphs**
- vLLM: fixed half of decode batch sizes silently running eager attention under spec decode (padded FULL cudagraph dispatch); batch-sharded sampling cuts per-step target-logits memory by 1/P under TP; MRV2 flip will change memory/perf characteristics broadly.
- llama.cpp: Vulkan MoE density gate replaces fixed 8-token cutoff — **+36% at B=9, +27% at B=16, +21% at B=64**, neutral at B≤8; Mamba2 in/out projections flattened for GEMM dispatch.

**Quantization**
- SGLang: absorbed MLA K/V projections stay in MXFP4 on gfx950; MXFP8 scale-row strides honor TMA-aligned physical layout; MegaMoE MXFP8 path.
- llama.cpp: dense MXFP4 and MoE NVFP4 quantization routines in progress.
- vLLM: MXFP4 spec-decode produces malformed tool calls on Qwen 122B; TurboQuant KV cache on Gemma 4 blocked by a 5-gate stack on consumer Blackwell.

**Distributed serving**
- vLLM: opt-in same-node all-reduce size ceiling for TP=2 (default 8 MiB); PP scheduler still not splitting sequences into micro-batches; multi-node gloo deadlock regression in Ray executor.
- SGLang: PD-disaggregation hardening — NIXL backend lacks failure notification (timeout-only discovery); DFLASH spec decode crashes under PD (EAGLE/DSPARK work).
- llama.cpp: DeepSeek 4 tensor-split with delayed allreduce for shared experts; SSD streaming of routed-expert weights to exceed RAM.

**Kernel work**
- llama.cpp Metal is the standout: per-device tuned flash-attention vectors, 53 new f16 instantiations (80→133), metallib split into 8 parallel-loaded libraries.
- AMD AITER fused-MoE kernels (a16w4, a8w4) integrated into both vLLM and SGLang paths; SGLang removed redundant GDN QKV materialization and deduplicated DeepGEMM JIT compilation across ranks.

---

## 5. Layer Positioning

- **vLLM — Production serving engine.** The reference for multi-GPU, high-throughput deployment: TP/PP, PD disaggregation, speculative decoding (EAGLE3, DSD), and the largest model codebase at scale. Architectural risk this quarter is the MRV2 default migration.
- **SGLang — Production serving engine, hardware breadth leader.** Competes directly with vLLM on serving performance but differentiates on fast engine recovery (weight-cache daemon), early next-gen hardware support (Rubin, Ascend, XPU), and CP/PD ergonomics. Unified-cache default flip is its main regression risk.
- **llama.cpp — Local/edge runtime and performance laboratory.** The reference for GGUF, broad backend support (CUDA, Metal, Vulkan, SYCL, HIP, Hexagon), and long-tail architectures. High release velocity; production users treat it as the local-execution building block (Ollama depends on it).
- **Ollama — Local/edge distribution layer.** Wraps llama.cpp and MLX into a managed runtime + API product. Value is UX and model management, not kernel innovation. Risks surface at the API layer with limited user control (Qwen3.8 family issues).
- **LiteLLM — Gateway / translation layer.** Sits above providers and self-hosted engines; levers are protocol translation, routing, guardrails, spend/budget controls, and MCP integration. No kernel or model work — reliability concerns are stream assembly, tool-call semantics, and passthrough correctness.
- **Unsloth — Fine-tuning/training framework with desktop Studio.** Differentiated from serving engines; occupies the model-prep niche (fast fine-tuning, GGUF export, quantization). Studio's Tauri/WebKitGTK desktop layer is currently the primary stability liability (IndexedDB failures, WebKit SIGABRT, RAM-over-VRAM loading).

---

## 6. Trend Signals

1. **Speculative decoding is the least reliable feature in the stack.** Unresolved across vLLM (DSD throughput cliffs, eager-attention fallbacks), SGLang (DFLASH crashes under PD), and llama.cpp (greedy divergence on quantized targets, CUDA crashes under KV saturation). Treat it as beta; benchmark at production concurrency before adopting.
2. **Hardware readiness is the new differentiation axis.** Rubin (sm_107), consumer Blackwell (sm_120/sm_103), gfx950/MI325X, Ascend NPU, and Intel XPU all have enablement in flight. Early-adopter hazards are visible: SGLang's SM10x family check breaks B300 (sm_103), vLLM's quantization stack has consumer-Blackwell gaps.
3. **Cold start is the next optimization frontier.** SGLang's <1s weight loading and Ollama's persistent prefill cache attack the same pain. This becomes decisive as serving moves toward scale-to-zero and multi-model pools.
4. **Agent/tool-calling correctness is the new integration front.** LiteLLM's MCP auto-execution hijack (breaks all client-side tools), Ollama's Qwen3.8 tool-loop 500s, vLLM's MXFP4 malformed tool calls, and SGLang's `"strict": null` 400 all point to systemic gaps across protocol translation, structured output, and quantized inference. Build retry and validation logic into agent clients.
5. **Quantized KV cache is the biggest lever and the biggest gap.** FP8 is table stakes; INT8 KV-cache is still open in vLLM, q8_0 preservation under TP is unmerged in Unsloth, and the DeepSeek-V4-Flash-0731 8× regression shows how fragile checkpoint KV assumptions are. Verify per-token cache cost before provisioning.
6. **The local/edge stack is maturing and being deployed server-side.** MLX structured output makes Apple Silicon viable for constrained generation; llama.cpp's Metal and Vulkan work closes gaps on consumer GPUs; Ollama's cgroup-aware threading PR signals local runtimes are now expected to behave in containers.
7. **The stack is reorganizing around agent workloads.** MCP integration, tool-call semantics, reasoning-effort control (broken for Qwen3 via Ollama's OpenAI endpoint), and multi-turn streaming dominate activity across all six projects — plain chat-completion serving is no longer the driving use case.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest — 2026-08-25

## 1. Today's Highlights
No new release shipped in the last 24h, but activity converged on Model Runner V2 and speculative decoding: MRV2 is being pushed to default for all models ([#53183](https://github.com/vllm-project/vllm/pull/53183)), while separate fixes address CUDA-graph decode fallbacks, draft Gumbel noise coupling, and adaptive verification for all draft-model speculators. Stability concerns dominate the issue tracker: DeepSeek-V4-Flash non-determinism at temperature=0, a broken Gemma4 startup path in the `latest` container (Transformers 5.15.0), and a ~8× KV-cache regression in the DeepSeek-V4-Flash-0731 checkpoint.

## 2. Releases & Breaking Changes
- **No new release in the last 24h.** Current versions referenced in issues: vLLM 0.26.0, 0.27.0, 0.27.1.
- **In-flight migration:** MRV2 becomes the default engine path for all models (except specific ROCm stragglers) via [#53183](https://github.com/vllm-project/vllm/pull/53183). A revert of the MRV2 CUDA-graph memory reservation ([#53306](https://github.com/vllm-project/vllm/pull/53306)) is already required to unbreak B200 MoE CI ([#53644](https://github.com/vllm-project/vllm/pull/53644)).
- **Model code migration:** FlexOlmo, Olmo3, and Hunyuan V1/VL move to the Transformers modeling backend, deleting ~3K lines of native vLLM code ([#53615](https://github.com/vllm-project/vllm/pull/53615)).
- The RFC for opting out of individual startup kernel warmups was closed without landing ([#53208](https://github.com/vllm-project/vllm/issues/53208)).

## 3. New Model & Hardware Support
- **Kimi-K3 on ROCm:** general upstream roadmap tracking ([#50682](https://github.com/vllm-project/vllm/issues/50682)) plus a gfx942/MI325X-specific plan ([#52803](https://github.com/vllm-project/vllm/issues/52803)); AITER fused-MoE kernels (a16w4 general, a8w4 interleave) integrated for performance.
- **Qwen GDN on sm120:** new FlashInfer fused GDN decode kernel for consumer Blackwell CUDA ([#53645](https://github.com/vllm-project/vllm/pull/53645)).
- **MiniMax-M3 on ROCm:** AITER gluon paged-attention decode enabled for MTP and dense layers, so EAGLE3 spec decode no longer falls back to native unified attention ([#52849](https://github.com/vllm-project/vllm/pull/52849)).
- **Quantization gaps:** INT8 KV-cache quantization remains an open feature request (FP8-only today) ([#33480](https://github.com/vllm-project/vllm/issues/33480)); TurboQuant KV cache on Gemma 4 multimodal is blocked by a 5-gate stack on consumer Blackwell ([#41403](https://github.com/vllm-project/vllm/issues/41403)).
- **VLA models** (Vision-Language-Action, e.g., robotics) are still not first-class and remain an open feature request ([#42100](https://github.com/vllm-project/vllm/issues/42100)).

## 4. Performance & Optimization
- **Dynamic spec decode (DSD) is under scrutiny:** all DSD arms pay a large baseline tax vs no-spec under production defaults, with the PIECEWISE cudagraph override identified as one factor ([#49986](https://github.com/vllm-project/vllm/issues/49986)). A related report shows catastrophic aggregate-throughput collapse at the batch-size threshold under concurrency, on top of the documented ~14% single-stream PIECEWISE cost ([#49548](https://github.com/vllm-project/vllm/issues/49548)).
- **Decode CUDA-graph coverage:** half of all decode batch sizes under spec decode silently run eager attention; a fix dispatches them to a padded FULL cudagraph ([#53407](https://github.com/vllm-project/vllm/pull/53407)).
- **Batch-sharded sampling (MRV2)** reduces per-step target-logits memory by `1/P` under tensor parallelism ([#50465](https://github.com/vllm-project/vllm/pull/50465)).
- **Same-node TP=2** gains an opt-in custom all-reduce size ceiling (default stays 8 MiB), targeting prefill-heavy workloads ([#52555](https://github.com/vllm-project/vllm/pull/52555)).
- **Regression:** ~18% pooling throughput regression on H100 starting with torch 2.11 / vLLM v0.20.0+ ([#52630](https://github.com/vllm-project/vllm/issues/52630)).
- **Streaming input:** per-chunk arrival cost is O(cumulative prompt), making long multimodal sessions quadratic ([#52471](https://github.com/vllm-project/vllm/issues/52471)).
- An offline prefix-cache workload analyzer is in RFC stage ([#47993](https://github.com/vllm-project/vllm/issues/47993)).

## 5. Stability & Regressions
Ranked by severity:

1. **DeepSeek-V4-Flash: non-deterministic output at temperature=0**, rate scales with concurrency ([#53257](https://github.com/vllm-project/vllm/issues/53257)).
2. **`vllm/vllm-openai:latest` (0.27.0) fails to start Gemma4** with Transformers 5.15.0 ([#51744](https://github.com/vllm-project/vllm/issues/51744)).
3. **DeepSeek-V4-Flash-0731 uses ~8× more KV cache per token** (56 bytes/token) than the preview checkpoint; max_model_len capped at ~121K on H20 TP=2 ([#51041](https://github.com/vllm-project/vllm/issues/51041)).
4. **MiMoV2 fused `qkv_proj` loading** chunks along the wrong dim, silently misplacing Q values into K/V slots ([#42803](https://github.com/vllm-project/vllm/issues/42803)).
5. **Spec decode + Qwen 122B MXFP4 produces malformed tool calls** ([#35800](https://github.com/vllm-project/vllm/issues/35800)).
6. **DFlash fused-KV projection** calls `F.linear` on a sliced qkv weight, breaking (and potentially corrupting) weight-quantized drafters ([#51581](https://github.com/vllm-project/vllm/issues/51581)).
7. **Multi-node startup deadlock** in the gloo barrier at 2×TP-16 with the Ray executor; regression between 0.26.1rc1.dev78 and dev148 ([#52907](https://github.com/vllm-project/vllm/issues/52907)).
8. **Hybrid Mamba/attention prefix cache** silently drops to 0% hit rate under `mamba_cache_mode="align"` ([#45238](https://github.com/vllm-project/vllm/issues/45238)).
9. **Pipeline parallelism** scheduler does not split sequences into micro-batches under PP>1 ([#41682](https://github.com/vllm-project/vllm/issues/41682)).
10. **Draft hidden_size > target crashes at init under TP>1** ([#52023](https://github.com/vllm-project/vllm/issues/52023)) — closed; fix available.
11. **DeepSeek V4 Pro fails to run with TP16** ([#40955](https://github.com/vllm-project/vllm/issues/40955)).
12. **KV connector state not restored after load rejection** — fix PR open ([#53298](https://github.com/vllm-project/vllm/pull/53298)).

Also this cycle: MRV2 CUDA-graph memory reservation reverted to fix daily B200 MoE CI failures (`DeepSeek-V4-Flash-deepgemm-mega-moe`) ([#53644](https://github.com/vllm-project/vllm/pull/53644)); flex-attention tolerance bumped for MI355 CI stability ([#53646](https://github.com/vllm-project/vllm/pull/53646)); DeepSeek YaRN max-model-length double-scaling fix ([#53634](https://github.com/vllm-project/vllm/pull/53634)); Qwen3.5 `thinking_token_budget` leaking `reasoning_end_str` into content ([#39697](https://github.com/vllm-project/vllm/issues/39697)).

## 6. What This Means for Application Developers
- **Pin images, don't use `latest` for Gemma4** until the Transformers 5.15.0 incompatibility is resolved ([#51744](https://github.com/vllm-project/vllm/issues/51744)).
- **Budget for ~8× KV cache** if serving DeepSeek-V4-Flash-0731; verify context length fits, or pin the preview checkpoint ([#51041](https://github.com/vllm-project/vllm/issues/51041)).
- **Don't rely on deterministic DeepSeek-V4-Flash output** yet; temperature=0 is non-deterministic under concurrency ([#53257](https://github.com/vllm-project/vllm/issues/53257)).
- **Speculative decoding remains the riskiest config** — malformed tool calls, throughput cliffs at concurrency thresholds, and eager-attention fallbacks are all under active repair. Benchmark dynamic spec-decode schedules at production concurrency before adopting ([#49548](https://github.com/vllm-project/vllm/issues/49548), [#35800](https://github.com/vllm-project/vllm/issues/35800), [#53407](https://github.com/vllm-project/vllm/pull/53407)).
- **The MRV2 default flip will change memory/perf characteristics.** Test your models early, especially with spec decode and CUDA graphs enabled ([#53183](https://github.com/vllm-project/vllm/pull/53183)).
- For custom serving stacks: an external post-generation classifier hook API ([#43999](https://github.com/vllm-project/vllm/issues/43999)), expanded multimodal prompt metadata ([#51472](https://github.com/vllm-project/vllm/issues/51472)), and per-iteration scheduler metrics ([#38760](https://github.com/vllm-project/vllm/issues/38760)) are all in RFC — worth tracking if you build orchestration or agent tooling on top of vLLM.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest — 2026-08-25

## Today's Highlights
No new releases landed in the last 24 hours, but the project remains highly active: the Fast Engine Recovery weight-cache daemon roadmap reports a major win — post-quantized weight load dropping from ~306–327s to under 1s on Qwen3-235B FP8 ([#33522](https://github.com/sgl-project/sglang/issues/33522)). On the hardware front, CUDA 13.4 container support for initial Rubin (sm_107) was opened ([#36233](https://github.com/sgl-project/sglang/pull/36233)), while a unified-cache default flip is being tracked as a long-prefix decode throughput regression on Spark and Thor ([#36131](https://github.com/sgl-project/sglang/issues/36131)).

## Releases & Breaking Changes
- No new releases in the last 24 hours.
- No formal migration notes were published, but prefill context-parallel cleanup PRs are actively renaming APIs and removing the generic v1 runtime: `is_cp_v2_active` → `is_cp_active`, CP round-robin APIs renamed to `interleave`, and generic v1 CP branches removed ([#36229](https://github.com/sgl-project/sglang/pull/36229), [#36228](https://github.com/sgl-project/sglang/pull/36228), [#36230](https://github.com/sgl-project/sglang/pull/36230)). Downstream users of CP-specific internals should watch for those changes.

## New Model & Hardware Support
- **NVIDIA Nemotron 3.5 Lightning speculative decoding** — PR adds clean support with ModelOpt W4A16 NVFP4 integration ([#36186](https://github.com/sgl-project/sglang/pull/36186)).
- **NVIDIA Rubin (sm_107) initial support** — New CUDA 13.4 developer-preview container proposed ([#36233](https://github.com/sgl-project/sglang/pull/36233)).
- **LLaDA2.2 Block Routing MoE** — Serving-side implementation for block-local expert routing ([#31768](https://github.com/sgl-project/sglang/pull/31768)).
- **MiniMax H3 on Ascend NPU** — Extends the native pipeline to NPU with packed variable-length attention and CI coverage ([#33569](https://github.com/sgl-project/sglang/pull/33569)).
- **GLM5.1 DSA attention on Intel XPU** — Long-running enablement PR for `GlmMoeDsaForCausalLM` ([#24959](https://github.com/sgl-project/sglang/pull/24959)).
- **Strict FlashInfer SSD and Cake Mamba prefill backends** — Added as opt-in backends while preserving the existing FlashInfer default ([#35444](https://github.com/sgl-project/sglang/pull/35444)).

## Performance & Optimization
- **Weight Cache Daemon phase 1** landed via [#27139](https://github.com/sgl-project/sglang/issues/33522): per-rank daemon serves post-quantized weights over CUDA IPC, cutting Qwen3-235B FP8 weight load from ~306–327s to <1s ([#33522](https://github.com/sgl-project/sglang/issues/33522)).
- **AMD GLM5.2 MLA absorbed BMM with MXFP4 kernels** — Keeps absorbed K/V projections in MXFP4 and runs them on tuned gfx950 kernels ([#34317](https://github.com/sgl-project/sglang/pull/34317)).
- **MegaMoE MXFP8 scale row strides** — Pre-dispatch now honors physical TMA-aligned scale row strides instead of assuming packed rows ([#36007](https://github.com/sgl-project/sglang/pull/36007)).
- **GDN speculative decoding QKV materialization removed** — Avoids redundant `fused_qkv_split_gdn_prefill_kernel` launches since `causal_conv1d_update` already produces packed QKV ([#33778](https://github.com/sgl-project/sglang/pull/33778)).
- **DeepGEMM JIT precompile deduplication** — Cache-local file locks prevent multiple ranks compiling identical kernels concurrently ([#36231](https://github.com/sgl-project/sglang/pull/36231)).
- **MLA KV cache reserved-slot safety** — MLA-specific writers now skip reserved physical slot 0, consistent with generic KV stores ([#36003](https://github.com/sgl-project/sglang/pull/36003)).
- **Kimi-K3 AMD MoE path cleanup** — Removes three per-layer copy/cast kernels from the AITER path ([#33916](https://github.com/sgl-project/sglang/pull/33916)).
- **HiCache host pool refactor** — Host memory is now modeled as a shared layer across staging (L3→L1), L2 caching, and model-state backup/restore ([#36232](https://github.com/sgl-project/sglang/pull/36232)).

## Stability & Regressions
Regressions and bugs are ordered roughly by severity:

1. **Unified-cache default flip regresses long-prefix decode throughput** on Spark and Thor, introduced by PR #34653 / commit `ebc144ce3f7dfca68d5e705c05051ab8f93ec158`. No fix PR is linked yet ([#36131](https://github.com/sgl-project/sglang/issues/36131)).
2. **DFLASH speculative decoding crashes under PD disaggregation** — `spec_info` is None on decode side, followed by watchdog self-kill. EAGLE and DSPARK work under PD; DFLASH has no disaggregation wiring yet ([#36140](https://github.com/sgl-project/sglang/issues/36140)).
3. **AMD custom all-reduce graph registration corrupts DSA DP-attention replay** — On GLM-5.2 TP8/DP4 this can produce NaN logits and repeated token ID 0; no fix PR is linked ([#36071](https://github.com/sgl-project/sglang/issues/36071)).
4. **Tool-calling API regression** — `/v1/responses` and `/v1/chat/completions` return 400 when a function tool includes `"strict": null` ([#36194](https://github.com/sgl-project/sglang/issues/36194)).
5. **NIXL PD transfer backend lacks failure notification** — Unlike Mooncake and mori, NIXL pushes nothing to decode on prefill failure, so failures are only discovered via timeout ([#36033](https://github.com/sgl-project/sglang/issues/36033)).
6. **SM10x-gated kernels fail on B300 (sm_103)** — `is_sm100_supported()` is a family check, so cutedsl TGV BF16 GEMM and trtllm-gen MoE finalize hit SM100-specific paths on sm_103 ([#34340](https://github.com/sgl-project/sglang/issues/34340)).
7. **WSL2 multimodal failure** — CUDA IPC multimodal feature transport is auto-selected even though WSL2 does not support CUDA IPC, crashing the scheduler with no hint about `--mm-feature-transport` ([#35385](https://github.com/sgl-project/sglang/issues/35385)).
8. **Kimi-K3 crash in v0.5.18 release** reported without a linked fix ([#36018](https://github.com/sgl-project/sglang/issues/36018)).
9. **CI health tracking** — Currently 3 broken, 11 flaky, 670 recently fixed on scheduled `main` CI ([#17050](https://github.com/sgl-project/sglang/issues/17050)).

A small fix landed for a red ratchet test related to MiniCPM-SALA config reads ([#36178](https://github.com/sgl-project/sglang/pull/36178)).

## What This Means for Application Developers
- **Pin or test against the unified-cache default change** if you serve long-prefix workloads; the current regression on Spark/Thor is significant and not yet fixed ([#36131](https://github.com/sgl-project/sglang/issues/36131)).
- **Avoid DFLASH under PD disaggregation for now** — use EAGLE or DSPARK when speculative decoding is needed on the decode side ([#36140](https://github.com/sgl-project/sglang/issues/36140)).
- **Sanitize tool definitions**: if your clients send `"strict": null`, the server currently rejects the request with a 400; remove the field or coerce it to a boolean until the bug is fixed ([#36194](https://github.com/sgl-project/sglang/issues/36194)).
- **If you use the NIXL PD transfer backend**, ensure decode-side timeouts are tuned to catch prefill-side failures, since NIXL does not propagate transfer-failure notifications ([#36033](https://github.com/sgl-project/sglang/issues/36033)).
- **The weight-cache daemon is a promising upgrade for cold-start/recovery**, especially for very large FP8 models like Qwen3-235B — expect follow-up roadmap work in this area ([#33522](https://github.com/sgl-project/sglang/issues/33522)).
- **Early Rubin support is coming** via the CUDA 13.4 container; if you run on future NVIDIA hardware, track that PR ([#36233](https://github.com/sgl-project/sglang/pull/36233)).

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp Digest — 2026-08-25

Based on GitHub activity in `ggml-org/llama.cpp` as of 2026-08-25. 63 issues and 105 PRs were updated in the last 24h.

---

## 1. Today's Highlights

- Metal backend received per-device flash-attention vector tuning and a 53-instantiation expansion (80 → 133) in [b10615](https://github.com/ggml-org/llama.cpp/releases/tag/b10615), plus per-op source splitting with parallel kernel compilation in [b10614](https://github.com/ggml-org/llama.cpp/releases/tag/b10614).
- DeepSeek 4 tensor-split support (`-sm tensor`) landed in [b10604](https://github.com/ggml-org/llama.cpp/releases/tag/b10604), enabling finer expert/head placement and delayed allreduce for shared experts.
- Correctness fixes shipped for mtmd video files with trailing MOOV atoms ([b10608](https://github.com/ggml-org/llama.cpp/releases/tag/b10608)) and `ggml_clamp` / `ggml-alloc` ([b10606](https://github.com/ggml-org/llama.cpp/releases/tag/b10606)).

---

## 2. Releases & Breaking Changes

- [b10615](https://github.com/ggml-org/llama.cpp/releases/tag/b10615) — Metal: per-device tuned `(Q, NE)` for flash-attn vec; rebases generic FA vec body from `01dc93607`, adds 53 f16 instantiations.
- [b10614](https://github.com/ggml-org/llama.cpp/releases/tag/b10614) — Metal: per-op source split + parallel compile. Metallib split into 8 libs loaded in parallel; kernel→library routing derived from `functionNames`. Internal change, no config break expected.
- [b10612](https://github.com/ggml-org/llama.cpp/releases/tag/b10612) — Tests: disables DOTS3NOTE arch test for WebGPU.
- [b10610](https://github.com/ggml-org/llama.cpp/releases/tag/b10610) — Shortens virtual device naming in CUDA and Metal; device description now built at init. Tooling that parses backend/device names may need updates.
- [b10608](https://github.com/ggml-org/llama.cpp/releases/tag/b10608) — mtmd: fix MOOV atom at end of MP4; also fixes SIGPIPE / broken-pipe handling on Windows.
- [b10606](https://github.com/ggml-org/llama.cpp/releases/tag/b10606) — Fixes `ggml_clamp` and updates `ggml-alloc`.
- [b10605](https://github.com/ggml-org/llama.cpp/releases/tag/b10605) — Mamba2: flattens in/out projections to dispatch GEMM instead of GEMV.
- [b10604](https://github.com/ggml-org/llama.cpp/releases/tag/b10604) — DeepSeek 4: `-sm tensor` support, finer head-split granularity, delayed allreduce for shared experts.

No hard API/config breaking changes were identified beyond the device-naming change in [b10610](https://github.com/ggml-org/llama.cpp/releases/tag/b10610).

---

## 3. New Model & Hardware Support

- **DeepSeek 4 tensor-split mode** — `-sm tensor` landed in [b10604](https://github.com/ggml-org/llama.cpp/releases/tag/b10604).
- **DFlash2 architecture** — support for local convolution + candidate selector proposed in [PR #27342](https://github.com/ggml-org/llama.cpp/pull/27342).
- **HRM-Text / DFM Mimir 1B** — new model conversion and fused GQKV projection support in [PR #27625](https://github.com/ggml-org/llama.cpp/pull/27625).
- **MXFP4 / NVFP4 quantization** — dense MXFP4 and MoE NVFP4 quantization routines in progress in [PR #26869](https://github.com/ggml-org/llama.cpp/pull/26869).
- **MoE expert streaming from disk** — optional SSD streaming of routed-expert weights to run models larger than RAM in [PR #25294](https://github.com/ggml-org/llama.cpp/pull/25294).
- **Hexagon backend overhaul** — multi-NPU devices (IQ9/IQ10) and fully async execution in [PR #26501](https://github.com/ggml-org/llama.cpp/pull/26501).
- **SYCL** — Q2_K reordered MMVQ and ESIMD kernels added in [PR #27509](https://github.com/ggml-org/llama.cpp/pull/27509).

---

## 4. Performance & Optimization

- **Metal flash-attn vec tuning** — [b10615](https://github.com/ggml-org/llama.cpp/releases/tag/b10615) adds per-device tuned `(Q, NE)` tables and grows flash-attn vec instantiations from 80 to 133.
- **Metal parallel compile / load** — [b10614](https://github.com/ggml-org/llama.cpp/releases/tag/b10614) splits the metallib into 8 parallel-loaded libraries; improves build iteration and load latency.
- **Mamba2 GEMM dispatch** — [b10605](https://github.com/ggml-org/llama.cpp/releases/tag/b10605) flattens in/out projections so batched prefill uses GEMM instead of GEMV.
- **Vulkan MoE density gate** — [PR #27332](https://github.com/ggml-org/llama.cpp/pull/27332) replaces the fixed 8-token cutoff with a density gate for `MUL_MAT_VEC_ID`. Measured: **+36% at B=9, +27% at B=16, +21% at B=64**, neutral at B≤8 on AMD RADV.
- **HIP RDNA2 tile-width expansion** — [PR #27558](https://github.com/ggml-org/llama.cpp/pull/27558) allows `J=128` for Q5_K/Q6_K, with noticeable benchmark gains.
- **CUDA MoE fusion extension** — [PR #27621](https://github.com/ggml-org/llama.cpp/pull/27621) extends single-token MoE fusions to specdec batches of 2–8 tokens (MTP/Dflash).
- **CUDA MoE MMQ tile sizing** — [PR #24546](https://github.com/ggml-org/llama.cpp/pull/24546) sizes MMQ N-tiles from typical routed expert width on RDNA3, improving MoE prefill.

---

## 5. Stability & Regressions

Ranked by severity:

1. **CUDA kernel stall / watchdog kill** during model execution on RTX Pro 6000 Blackwell — [Issue #27102](https://github.com/ggml-org/llama.cpp/issues/27102). No fix PR yet.
2. **HIP/ROCm corrupted output on gfx1151** (Strix Halo RDNA3.5), while Vulkan produces correct output with identical flags — [Issue #27579](https://github.com/ggml-org/llama.cpp/issues/27579). No fix PR yet.
3. **SYCL GPU hang / xe engine reset** with flash attention + quantized KV cache under sustained server load on Arc Pro B70 — [Issue #25692](https://github.com/ggml-org/llama.cpp/issues/25692). No fix PR yet.
4. **Speculative decoding divergence** — greedy `draft-mtp` / `draft-dspark` output differs from vanilla on quantized targets; matches on bf16 — [Issue #25618](https://github.com/ggml-org/llama.cpp/issues/25618). Open.
5. **Vulkan batched decode cliff at n_tokens=9** on many-expert MoE models — [Issue #25356](https://github.com/ggml-org/llama.cpp/issues/25356). Fix exists as [PR #27332](https://github.com/ggml-org/llama.cpp/pull/27332) (density gate).
6. **MTP/speculative-decode stability on CUDA** — hard crash `cublasSgemm INVALID_VALUE` under KV-cache saturation ([#26558](https://github.com/ggml-org/llama.cpp/issues/26558)), native MTP CUDA OOM due to separate compute arena ([#27282](https://github.com/ggml-org/llama.cpp/issues/27282)), draft acceptance collapse under `-np N` ([#27572](https://github.com/ggml-org/llama.cpp/issues/27572)). No consolidated fix yet.
7. **mtmd video silent failure** when MOOV atom is at end of MP4 — [Issue #24394](https://github.com/ggml-org/llama.cpp/issues/24394) / [Issue #24429](https://github.com/ggml-org/llama.cpp/issues/24429). Fixed in [b10608](https://github.com/ggml-org/llama.cpp/releases/tag/b10608).
8. **SYCL dual-GPU stuck during model load** — [Issue #27547](https://github.com/ggml-org/llama.cpp/issues/27547). No fix PR yet.
9. **SYCL compile segfault with `GGML_SYCL_DEVICE_ARCH=xe2`** — [Issue #25808](https://github.com/ggml-org/llama.cpp/issues/25808). Open.
10. **Vulkan split-mode row regression on hybrid AMD/Intel Windows** — [Issue #25884](https://github.com/ggml-org/llama.cpp/issues/25884). Open.

Also open: Vulkan Flash Attention large performance drop on AMD Strix Halo ([#25207](https://github.com/ggml-org/llama.cpp/issues/25207)), gemma4-assistant MTP draft load regression ([#24795](https://github.com/ggml-org/llama.cpp/issues/24795)), and Mac x86 Vulkan garbage output since b8143 ([#20029](https://github.com/ggml-org/llama.cpp/issues/20029)).

---

## 6. What This Means for Application Developers

- **If you serve with `draft-mtp` or `draft-dspark`**, especially with parallel slots (`-np N`) or quantized targets, test acceptance rates on your exact workload. Issues [#27572](https://github.com/ggml-org/llama.cpp/issues/27572) and [#25618](https://github.com/ggml-org/llama.cpp/issues/25618) are still open.
- **Vulkan MoE serving on AMD** — if you see a throughput cliff at ~9 concurrent sequences, [PR #27332](https://github.com/ggml-org/llama.cpp/pull/27332) directly addresses it with substantial gains at batch sizes 9–64.
- **Multimodal/video pipelines** — update to at least [b10608](https://github.com/ggml-org/llama.cpp/releases/tag/b10608) to handle MP4 files with trailing MOOV atoms, and to avoid Windows broken-pipe issues.
- **Metal users** — [b10614](https://github.com/ggml-org/llama.cpp/releases/tag/b10614) and [b10615](https://github.com/ggml-org/llama.cpp/releases/tag/b10615) bring faster metal library loading and better flash-attention vec performance. Be aware of the shortened CUDA/Metal device names from [b10610](https://github.com/ggml-org/llama.cpp/releases/tag/b10610) if you parse backend names.
- **New model bring-up** — DFlash2 ([PR #27342](https://github.com/ggml-org/llama.cpp/pull/27342)), HRM-Text ([PR #27625](https://github.com/ggml-org/llama.cpp/pull/27625)), and DeepSeek 4 `-sm tensor` ([b10604](https://github.com/ggml-org/llama.cpp/releases/tag/b10604)) are the main additions to track.
- **Large MoE deployments** — [PR #25294](https://github.com/ggml-org/llama.cpp/pull/25294) is worth watching if you need to run models larger than RAM by streaming routed experts from disk.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Digest — 2026-08-25

## Today's Highlights
No new Ollama releases landed in the last 24 hours. The main reliability theme is the Qwen3.8 family: multiple open issues report tool-loop API 500s, garbage generation on AMD ROCm, and incomplete responses under Claude Code. On the positive side, MLX gained structured output enforcement and GraniteForCausalLM support, while a new PR adds cgroup-aware thread-count detection for containerized deployments.

## Releases & Breaking Changes
None. No new releases, API changes, or migration notes in the last 24 hours.

## New Model & Hardware Support
- **GraniteForCausalLM on MLX** — PR [#17972](https://github.com/ollama/ollama/pull/17972) adds dense `GraniteForCausalLM` architecture support to the MLX backend, enabling IBM Granite 4.1 models.
- **Auto-detection for ornith/qwen35 renderer/parser** — PR [#17965](https://github.com/ollama/ollama/pull/17965) fixes models like `ornith-1.5:35b` being forced into native chat-template mode when tools + response format are used.
- **MLX structured output** — PR [#17929](https://github.com/ollama/ollama/pull/17929) makes the MLX runner actually enforce the API `format` field via xgrammar logit masking.
- **MLX dependency bump** — PR [#17955](https://github.com/ollama/ollama/pull/17955).

## Performance & Optimization
- **cgroup-aware thread count** — PR [#17962](https://github.com/ollama/ollama/pull/17962) derives `NumThread` from cgroup CPU quota, fixing Docker/Kubernetes containers where llama-server over-subscribes host cores.
- **Persistent prefill cache** — PR [#17278](https://github.com/ollama/ollama/pull/17278) adds opt-in `OLLAMA_PREFILL_CACHE` to save/restore prefill KV across model unload/reload, with an 8 GiB LRU cap.
- **MLX lacks prefix caching** — Issue [#17829](https://github.com/ollama/ollama/issues/17829): every agent step re-prefills 20–30K tokens on MLX, causing growing TTFT. Open.
- **MLX KV-cache memory leak** — Issue [#17875](https://github.com/ollama/ollama/issues/17875): resident memory grows with request count on dense MLX models and is not released until restart. Open.
- **AMD Strix Halo power-gating** — Issue [#17958](https://github.com/ollama/ollama/issues/17958): keeping ≥2 resident models pins GPU at max clock (~25 W) even idle. Open.
- **Partial GPU memory utilization** — Issue [#17971](https://github.com/ollama/ollama/issues/17971): models use <40% of available VRAM, forcing fallback to system RAM and slower output. Open.

## Stability & Regressions
Ranked by severity:

- **High — Qwen3.8 tool-loop API 500** — Issue [#17778](https://github.com/ollama/ollama/issues/17778): `/api/chat` streaming returns `no user query found in messages` (500) during tool-call loops. No fix PR attached.
- **High — Qwen3.8 garbage output on AMD MI210** — Issue [#17968](https://github.com/ollama/ollama/issues/17968): `qwen3.8:27b` produces endless garbage on AMD Instinct MI210/ROCm while other models work. No fix PR attached.
- **Medium — `ornith-1.5:35b` fails with format + tools** — Issue [#17957](https://github.com/ollama/ollama/issues/17957): `Failed to initialize samplers: failed to parse grammar`. Fix PR [#17965](https://github.com/ollama/ollama/pull/17965) is open.
- **Medium — Qwen3.8 incomplete responses under Claude Code** — Issue [#17961](https://github.com/ollama/ollama/issues/17961): responses stop after ~20–30 seconds. No fix PR attached.
- **Medium — Silent tool-call parse failure** — Issue [#17274](https://github.com/ollama/ollama/issues/17274): when a tool call fails to parse, output is discarded with no `tool_calls` and no error surfaced. No fix PR attached.
- **Medium — Qwen3 thinking cannot be disabled via OpenAI endpoint** — Issue [#17969](https://github.com/ollama/ollama/issues/17969): `/no_think` and `reasoning_effort` are ignored on `/v1/chat/completions`. No fix PR attached.
- **Lower — Gemma4 special-token tokenization** — Issue [#15931](https://github.com/ollama/ollama/issues/15931): special tokens like `<|channel>` in user input are tokenized as-is. No fix PR attached.
- **Lower — HF GGUF pull fails after successful download** — Issue [#15447](https://github.com/ollama/ollama/issues/15447): returns `Error: 400 (empty body)` and never creates a manifest. No fix PR attached.
- **Stability fix in flight** — PR [#17954](https://github.com/ollama/ollama/pull/17954) detects exited runners, refuses to hand them out, and bounds `/api/embed` fan-out concurrency.

## What This Means for Application Developers
- **Be careful with Qwen3.8 in production.** Tool-loop 500s, AMD ROCm garbage output, and Claude Code truncation all remain open. Validate against your exact stack before rolling out.
- **Tool-call failures can be silent.** Issue [#17274](https://github.com/ollama/ollama/issues/17274) means clients should detect empty `content` + missing `tool_calls` and implement retries instead of assuming a model error was returned.
- **OpenAI-compatible Qwen3 thinking control is broken.** If you need non-thinking Qwen3 through `/v1/chat/completions`, work around it with the native API or wait for [#17969](https://github.com/ollama/ollama/issues/17969).
- **MLX is risky for long-horizon agents.** Missing prefix caching and per-request KV growth ([#17829](https://github.com/ollama/ollama/issues/17829), [#17875](https://github.com/ollama/ollama/issues/17875)) can degrade long agent sessions on Apple Silicon.
- **Container CPU limits need explicit thread control today.** Until [#17962](https://github.com/ollama/ollama/pull/17962) lands, set thread counts explicitly when running under cgroup CPU quotas.
- **MLX structured output is now viable.** PR [#17929](https://github.com/ollama/ollama/pull/17929) enables JSON/JSON-Schema enforcement on MLX, and Granite 4.1 models can run via [#17972](https://github.com/ollama/ollama/pull/17972).

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-08-25

## Today's Highlights

No new release shipped in the last 24h. The main theme is streaming and translation-layer reliability: PR #38153 adds mid-stream fallback for `anthropic_messages`, and the long-running `stream_chunk_builder` 500s on Responses-API chunks were addressed by merged fixes (#32954, #32198, #34382). On the risk side, issue #37031 reports that MCP auto-execution can hijack client-side tool calls from Claude Code, breaking all non-MCP tools.

## Releases & Breaking Changes

None in the last 24h.

## New Model & Hardware Support

No new model/hardware support or quantization formats were merged in this window. Closest items:

- [Issue #38050](https://github.com/BerriAI/litellm/issues/38050): user deploying MiniMax-H3 via vLLM OMNI behind LiteLLM hits a passthrough error — still open.
- [PR #38143](https://github.com/BerriAI/litellm/pull/38143): adds ConductGuard as a first-class LiteLLM guardrail integration.
- [PR #38155](https://github.com/BerriAI/litellm/pull/38155): fixes `/v1/videos/edits` so uploaded source videos are actually forwarded to the provider.

## Performance & Optimization

No throughput/latency numbers landed in the last 24h, but several efficiency and reliability improvements are in flight:

- [PR #38153](https://github.com/BerriAI/litellm/pull/38153): enables mid-stream fallback for `anthropic_messages` instead of surfacing raw `overloaded_error`/`internal_server_error` SSE events.
- [PR #38082](https://github.com/BerriAI/litellm/pull/38082): closes abandoned Anthropic stream responses, preventing provider connection-pool exhaustion on repeated client disconnects.
- [PR #38145](https://github.com/BerriAI/litellm/pull/38145): complexity router now bounds the whole classifier context block instead of shredding every turn to 200 chars.
- [PR #37899](https://github.com/BerriAI/litellm/pull/37899): CI gate to ban row-rewriting `UPDATE`/`DELETE`/`MERGE` in Prisma migrations, reducing proxy-boot downtime risk.
- [PR #37208](https://github.com/BerriAI/litellm/pull/37208): aggregates reasoning tokens and per-line pass/fail counts for completed batches.

## Stability & Regressions

Open issues ranked by severity, with fix status where known:

1. **MCP auto-execute hijacks client-side tools** — [Issue #37031](https://github.com/BerriAI/litellm/issues/37031) (OPEN). `require_approval: "never"` causes the proxy to auto-execute MCP tools server-side, which takes over agentic client tool calls (Claude Code Read/Bash/Edit) and breaks non-MCP tools. No fix PR yet.
2. **`bedrock_mantle` passthrough fails** — [Issue #38054](https://github.com/BerriAI/litellm/issues/38054) (OPEN). Native Bedrock `/invoke` for `bedrock_mantle/` models fails with `Provider bedrock_mantle not found`.
3. **Stale spend causes false `BudgetExceededError`** — [Issue #27735](https://github.com/BerriAI/litellm/issues/27735) (OPEN). Virtual keys can be rejected while `/key/info` shows spend below budget; related to #27639.
4. **Bedrock rerank ignores `return_documents`** — [Issue #38006](https://github.com/BerriAI/litellm/issues/38006) (OPEN). Results never include `document.text`.
5. **Anthropic→OpenAI translation drops reasoning content** — [Issue #27946](https://github.com/BerriAI/litellm/issues/27946) (CLOSED) and [Issue #27492](https://github.com/BerriAI/litellm/issues/27492) (OPEN). Multi-turn reasoning requests can lose `reasoning_content` or drop `content` when converting between Anthropic Messages and OpenAI Chat Completions.
6. **Whitespace-only system messages break Anthropic calls** — [Issue #28706](https://github.com/BerriAI/litellm/issues/28706) (OPEN). Proxy should drop these before forwarding; currently Anthropic rejects them.
7. **MCP server re-probes unsupported capabilities on every request** — [Issue #35460](https://github.com/BerriAI/litellm/issues/35460) (OPEN). `list_prompts`/`list_resources` are called repeatedly against servers that don't implement them.
8. **GitHub Copilot premium request overuse** — [Issue #18155](https://github.com/BerriAI/litellm/issues/18155) (OPEN). Long-running multi-turn agentic flows trigger excessive premium requests.
9. **`stream_chunk_builder` 500s fixed** — [Issue #32951](https://github.com/BerriAI/litellm/issues/32951), [Issue #32051](https://github.com/BerriAI/litellm/issues/32051) (CLOSED). Fixed by [PR #32954](https://github.com/BerriAI/litellm/pull/32954), [PR #32198](https://github.com/BerriAI/litellm/pull/32198), and [PR #34382](https://github.com/BerriAI/litellm/pull/34382).
10. **Bedrock Converse trailing empty chunk regression** — [Issue #36767](https://github.com/BerriAI/litellm/issues/36767) (CLOSED). Regression in v1.94.0 / PR #32255; appears resolved.

## What This Means for Application Developers

- If you run Claude Code or similar agentic clients through LiteLLM, avoid `require_approval: "never"` on MCP tool references until [Issue #37031](https://github.com/BerriAI/litellm/issues/37031) is fixed — it can silently break all client-side tools.
- Multi-turn reasoning workloads relying on Anthropic-to-OpenAI conversion remain fragile; validate that thinking/reasoning blocks survive round-trips before upgrading ([#27946](https://github.com/BerriAI/litellm/issues/27946), [#27492](https://github.com/BerriAI/litellm/issues/27492)).
- If you stream Responses-API models through `/v1/chat/completions`, pick up the merged `stream_chunk_builder` fixes ([#32954](https://github.com/BerriAI/litellm/pull/32954), [#32198](https://github.com/BerriAI/litellm/pull/32198), [#34382](https://github.com/BerriAI/litellm/pull/34382)) to avoid 500s.
- Bedrock users should avoid relying on `return_documents` for rerank ([#38006](https://github.com/BerriAI/litellm/issues/38006)) and `bedrock_mantle` passthrough ([#38054](https://github.com/BerriAI/litellm/issues/38054)) until fixes land.
- For Kubernetes/Prisma users, [PR #38152](https://github.com/BerriAI/litellm/pull/38152) restores database-backed operations after initial Prisma startup failure — worth tracking for the next release.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth Digest — 2026-08-25

**Data source:** [github.com/unslothai/unsloth](https://github.com/unslothai/unsloth)

## Today's Highlights
No release shipped in the last 24 hours; effort is concentrated on Unsloth Studio stability and CI/test hardening. The most severe open items are a Model Hub WebKitWebProcess SIGABRT ([#9480](https://github.com/unslothai/unsloth/issues/9480)) and IndexedDB persistence failures across Tauri desktop builds ([#9518](https://github.com/unslothai/unsloth/issues/9518), [#9600](https://github.com/unslothai/unsloth/issues/9600)), following this week's server deadlock in sqlite3 connect/close ([#9008](https://github.com/unslothai/unsloth/issues/9008)). A large batch of maintainer PRs targets studio-bench determinism and CI gates, while AMD-specific fixes (RDNA1 torch index support, training GPU selection gating) continue to advance.

## Releases & Breaking Changes
None in the last 24 hours.

## New Model & Hardware Support
- **DGX Spark (GB10, aarch64) blocked for Qwen3.5-class models:** the published DGX Spark image pins transformers 4.57.1 (~7 months behind) and cannot load Qwen3.8; earlier report [#4867](https://github.com/unslothai/unsloth/issues/4867) documents three manual transformers patches required for inference and Studio. ([#9650](https://github.com/unslothai/unsloth/issues/9650), [#4867](https://github.com/unslothai/unsloth/issues/4867))
- **AMD RDNA1 → TheRock:** `UNSLOTH_TORCH_INDEX_URL` can now carry package extras (e.g. `torch[device-gfx1010]`), letting RDNA1 reach AMD's unified TheRock index. ([#9138](https://github.com/unslothai/unsloth/pull/9138))
- **AMD training GPU selection gated on torch arch coverage:** training now respects the installed torch build's supported arch list instead of ranking by free VRAM alone, preventing `device_map="balanced"` from landing on an uncovered iGPU; closes #8792. ([#8791](https://github.com/unslothai/unsloth/pull/8791))
- **Multimodal projector discovery:** hand-added `mmproj` files placed at the HF cache repo root are now found by the companion-model walk (fixes #9286). ([#9365](https://github.com/unslothai/unsloth/pull/9365))

## Performance & Optimization
- **Quantized KV cache with tensor parallelism:** open PR stops `load_model` from silently dropping quantized KV cache types (anything outside f16/bf16/f32) when tensor split is enabled, preserving q8_0-class memory savings on multi-GPU setups (fixes #8888). ([#8939](https://github.com/unslothai/unsloth/pull/8939))
- **Log-volume reduction:** follow-up to #8690 — a measured 4h idle desktop session produced 5308 lines / 1.14 MB of `tauri.log`, of which 76% were `request_completed` access records and 63% came from six repeated polls. The PR quiets those polls and drops duplicated access lines. ([#8763](https://github.com/unslothai/unsloth/pull/8763))
- **Diagnostics:** backend session logs will now be included in the support diagnostics report, making future Windows ROCm / Strix Halo crashes actually diagnosable. ([#8877](https://github.com/unslothai/unsloth/pull/8877))

## Stability & Regressions
Ranked by severity:

- **Server deadlock, all threads in sqlite3 (closed):** after a few minutes of operation the Studio server stops accepting connections; every thread blocked in `sqlite3.connect()`/`close()`. Marked closed — verify the fix before upgrading. ([#9008](https://github.com/unslothai/unsloth/issues/9008))
- **Model Hub SIGABRT on Linux:** WebKitWebProcess crashes via a Skia COLRv1 font assert on Fedora 44 KDE/Wayland; maintainers note this is distinct from #9393. ([#9480](https://github.com/unslothai/unsloth/issues/9480))
- **IndexedDB persistence broken on desktop builds:** chat send-and-persist path cannot write to local IndexedDB on Tauri/WebKitGTK 0.1.800-beta, independent of model/provider ([#9518](https://github.com/unslothai/unsloth/issues/9518)); separate `UnknownError: Unable to establish IDB database file` ([#9600](https://github.com/unslothai/unsloth/issues/9600)).
- **Models loaded into RAM despite VRAM-only checks:** observed with AMD Radeon PRO W7900/W7500 (ROCm 7.13) while loading Qwen3.8. ([#9549](https://github.com/unslothai/unsloth/issues/9549))
- **Context length not honored:** selecting 256k context in Studio web UI loads only 4k (macOS M3). ([#9653](https://github.com/unslothai/unsloth/issues/9653))
- **Silent training/data bugs:** `embed_tokens`/`lm_head` silently dropped from `target_modules` during continued pretraining with no warning (closed, [#9326](https://github.com/unslothai/unsloth/issues/9326)); `to_sharegpt` blanks the input column when no `merged_prompt` is given (fix PR, [#8277](https://github.com/unslothai/unsloth/pull/8277)); raw JSONL export is not valid JSONL ([#8733](https://github.com/unslothai/unsloth/issues/8733)); GGUF export still requires a 16-bit intermediate save before conversion ([#8717](https://github.com/unslothai/unsloth/issues/8717)).
- **Studio RAG/file tools:** asking a model to list files in a thread/project throws a tool error — models cannot enumerate project files. ([#8854](https://github.com/unslothai/unsloth/issues/8854))
- **Windows installer/uninstaller:** installer asks for D: but installs on C: anyway ([#9648](https://github.com/unslothai/unsloth/issues/9648)); uninstall does not free space — only `uv cache clean` does ([#9651](https://github.com/unslothai/unsloth/issues/9651)).
- **Markdown link-definition edge cases:** labels over 200 chars ([#9540](https://github.com/unslothai/unsloth/issues/9540)) and multi-line labels ([#9633](https://github.com/unslothai/unsloth/issues/9633)) are not held in the streaming live tail, breaking link references in chat rendering.
- **Ollama thinking controls missing:** Studio hides Thinking controls for Ollama-connected models and does not forward `reasoning_effort` through the Ollama proxy. ([#9649](https://github.com/unslothai/unsloth/issues/9649))
- **Minor UI:** Model Hub "On Device" list-by-date is non-functional on Windows 25H2. ([#9617](https://github.com/unslothai/unsloth/issues/9617))
- **Fix PRs in flight:** Windows extensionless npm shim resolution now prefers the `.cmd` sibling, fixing WinError 193 ([#9238](https://github.com/unslothai/unsloth/pull/9238)); installer no longer rolls back a successful install when a shell profile cannot be written, fixes #9254 ([#9269](https://github.com/unslothai/unsloth/pull/9269)); PowerShell resolved by absolute path in the update gate ([#9452](https://github.com/unslothai/unsloth/pull/9452)); denied `--parallel` extra args now point users at the `n_parallel` load field ([#9512](https://github.com/unslothai/unsloth/pull/9512)).

## What This Means for Application Developers
- **Treat Studio desktop persistence as unreliable today:** IndexedDB write failures, WebKit crashes, and RAM-over-VRAM loading all point at the Tauri/WebKitGTK desktop layer, not the Python backend. If you build on Studio, persist chat/data through the backend API rather than relying on local desktop storage, and wait for a verified fix for the #9008 deadlock before upgrading.
- **API surface: healthy chat, flaky embeddings, loopback-only:** direct `curl` to `/v1/chat/completions` is confirmed working, but `/embeddings` is unreliable ([#9128](https://github.com/unslothai/unsloth/issues/9128)) and the server binds to 127.0.0.1 with no settings toggle — LAN/WSL serving still requires a workaround ([#9522](https://github.com/unslothai/unsloth/issues/9522)).
- **AMD and DGX Spark users should pin expectations:** RDNA1 and iGPU-selection fixes are in review but not merged ([#9138](https://github.com/unslothai/unsloth/pull/9138), [#8791](https://github.com/unslothai/unsloth/pull/8791)); DGX Spark cannot load Qwen3.8 until the transformers pin is updated ([#9650](https://github.com/unslothai/unsloth/issues/9650)).
- **Release prep is underway:** maintainer PRs making studio-bench deterministic ([#9603](https://github.com/unslothai/unsloth/pull/9603), [#9608](https://github.com/unslothai/unsloth/pull/9608), [#9575](https://github.com/unslothai/unsloth/pull/9575), [#9610](https://github.com/unslothai/unsloth/pull/9610)), fixing CI gates ([#9654](https://github.com/unslothai/unsloth/pull/9654), [#9655](https://github.com/unslothai/unsloth/pull/9655), [#9656](https://github.com/unslothai/unsloth/pull/9656)), and adding duplicate-name linting ([#9618](https://github.com/unslothai/unsloth/pull/9618)) suggest a tagged release is being stabilized — watch for it.
- **Feature gaps with traction:** GRPO/RL training in Studio ([#8777](https://github.com/unslothai/unsloth/issues/8777)), video upload ([#7588](https://github.com/unslothai/unsloth/issues/7588)), native inline MCP media rendering ([#9584](https://github.com/unslothai/unsloth/issues/9584)), and external TTS endpoints ([#9136](https://github.com/unslothai/unsloth/issues/9136)) are the most-cited gaps for agent/workflow builders.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*