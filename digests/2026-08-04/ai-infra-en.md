# AI Infrastructure Digest 2026-08-04

> Generated: 2026-08-04 01:22 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# Cross-Project Comparison Report — AI Infrastructure Ecosystem
**Date:** 2026-08-04

## 1. Ecosystem Overview

The ecosystem is in a high-velocity hardening phase: frontier MoE/MLA models (DeepSeek-V4-Flash/DSpark, Kimi-K3, GLM-5.2) are now the forcing function across every layer, and hardware-specific kernel work is struggling to keep pace. Across the six digests, **88 issues and 88 PRs** were referenced, with vLLM and SGLang carrying most of the frontier-inference risk, llama.cpp delivering a dense release train, and LiteLLM/Ollama focusing on API compatibility and operational trust. Activity is no longer primarily “can we serve this model?” — it is shifting toward **stability, correctness, distributed serving, and agent/tool-calling reliability**. Unsloth remains the principal training/fine-tuning player, spending this cycle on installer/hardware detection and LoRA-to-GGUF export correctness.

## 2. Activity Comparison

Counts are **digest-referenced unique issue/PR numbers**, not full repository totals. They indicate where maintainer and community attention was concentrated in the last 24 hours.

| Project | Digest-referenced Issues | Digest-referenced PRs | Release Status |
|---|---|---|---|
| **vLLM** | 20 | 19 | No release in window; regression traced to weight-loading refactor |
| **SGLang** | 11 | 15 | No release in window |
| **llama.cpp** | 11 | 22 | Dense release train b10238–b10248; upcoming default port change |
| **Ollama** | 15 | 10 | No official release |
| **LiteLLM** | 15 | 15 | 4 releases (v1.93.1 → v1.96.0-rc.1); v1.94.1/v1.95.0 missing git tags |
| **Unsloth** | 16 | 7 | No release in window |

> Note: LiteLLM PR cluster #35513–#35517 is counted as five PRs. Counts are activity signals, not absolute repo metrics.

## 3. Model Support Race

- **vLLM** is the most advanced on frontier-model enablement: `DeepseekV4ForCausalLM` and Kimi-K3 are in-tree or tracked, but Ampere is unsupported and Blackwell SM120 crashes in the sparse-MLA route. vLLM also landed targeted fixes for Qwen3-Omni TP sharding and Gemma4 routed-experts.
- **SGLang** is close behind, with a Kimi-K3 roadmap, DeepSeek-V4/DSpark CUDA-graph work, and strong AMD/ROCm gfx950 progress (DSA kernels, sparse MLA backends, MI355X RDMA ABI fixes). It is ahead on **consumer Radeon enablement** as a formal tracking effort.
- **llama.cpp** is not competing on day-0 frontier kernels, but is shipping compatibility fast: Qwen3-Next MTP support, DeepSeek-V4-Flash-0731 chat template, GLM-4.5-Air MTP in PR, and proposed MXFP4/NVFP4 quantization. Its release cadence is the fastest of any project in this report.
- **Ollama** is a lagging indicator for model support because it inherits llama.cpp. It is still handling Qwen 3.5 GGUF load failures, awaiting DeepSeek-V4-Flash availability, and has the most-upvoted feature request around reranking.
- **LiteLLM** is ahead on **gateway-level model coverage**: Vertex AI Grok 4.3 pricing/metadata, gpt-5.6 reasoning-effort translation, Gemini Flash 3.6, and claude-fable-5 cache metadata. This is adapter/catalog work, not inference-kernel work.
- **Unsloth** is advancing training-side support: Seq2Seq vision encoder-decoder models, image-generation LoRA workflows, and CUDA/ROCm installer detection fixes.

**Who is ahead:** vLLM/SGLang for cutting-edge serving of new MoE architectures; llama.cpp for release velocity and cross-backend local support; LiteLLM for provider/model catalog breadth; Unsloth for fine-tuning and export tooling.

## 4. Performance Frontier

Optimization effort is concentrated in six areas:

- **Sparse MLA / DSA kernels** — vLLM removed 16-way atomic contention in sparse-MLA index remap; SGLang added DSA decode fast paths, dense-MHA short-context fallbacks, and fused Hadamard+FP8 quant kernels.
- **KV cache and memory efficiency** — vLLM upstreamed TurboQuant 4-bit KV-cache kernels for ROCm; llama.cpp reduced indexer cache allocation and proposed `--pin-hot-experts` to avoid page-cache eviction; SGLang introduced aggregate-KV-pool DCP accounting.
- **Distributed serving / multi-GPU topology** — vLLM proposed island-aware hierarchical allreduce for PCIe-only boxes; llama.cpp fixed wide-MoE split-graph crashes with dynamic allocation; SGLang hardened DCP/FlashMLA reduction correctness.
- **Speculative decoding / MTP** — vLLM is pushing MTP under pipeline parallelism; llama.cpp shipped Qwen3-Next MTP and is adding multi-output backend sampling; SGLang has an EAGLE/overlap-scheduler roadmap, though EAGLE currently harms radix-cache prefix reuse.
- **Per-request serving overhead** — LiteLLM is attacking eager debug-log string formatting, hiredis C parsing for redis-py, and GC-unsafe task retention; Unsloth is moving to per-chat async queues.
- **Local/edge kernels** — llama.cpp added OpenCL q6_K lm_head routing, Intel Xe ESIMD DMMV kernels, and Vulkan coopmat enhancements for Battlemage/PVC.

## 5. Layer Positioning

| Project | Layer | Primary Role |
|---|---|---|
| **vLLM** | Serving engine | High-throughput GPU inference, paged KV caching, distributed kernels, OpenAI-compatible serving |
| **SGLang** | Serving engine | Radix-cache/prefix reuse, CUDA graphs, speculative decoding, frontier MoE + AMD enablement |
| **llama.cpp** | Local runtime | GGUF inference across CPU/CUDA/Metal/Vulkan/OpenCL/SYCL; edge and quantized serving |
| **Ollama** | Local runtime / model manager | llama.cpp wrapper; model distribution, OpenAI-compatible local API, CLI/desktop UX |
| **LiteLLM** | Gateway / proxy | Provider aggregation, auth/routing, spend tracking, logging, OTEL, multi-tenant controls |
| **Unsloth** | Training / fine-tuning | LoRA/QLoRA acceleration, GGUF export, Unsloth Studio chat and fine-tuning workflows |

vLLM and SGLang are direct serving-engine competitors. llama.cpp and Ollama occupy the local/edge runtime layer, with Ollama depending on llama.cpp upstream. LiteLLM is backend-agnostic and sits in front of both hosted APIs and self-hosted engines. Unsloth is the only training/fine-tuning framework in this cohort.

## 6. Trend Signals

- **New frontier models are outrunning stable kernels.** DeepSeek-V4-Flash/DSpark and Kimi-K3 are generating hardware-specific crashes on Ampere, Blackwell SM120, and ROCm MI355X. Applications should pin GPU-class-specific versions and follow upstream issues before deploying on new MoE checkpoints.
- **Agent/tool-calling correctness is now a release blocker.** Ollama is fixing OpenAI wire-format streaming, LiteLLM is fixing broken Ollama→Anthropic tool-call streams, and vLLM has a regression around inline system messages. Agent builders should test tool loops before upgrading any layer.
- **Distributed serving and KV-connector reliability are the next scaling bottleneck.** Activity around island-aware allreduce, split-graph allocation, DCP resource accounting, and Mooncake/NIXL async lifecycle suggests multi-GPU and long-context serving remain fragile under churn and abort/cancel paths.
- **Operational trust is becoming a differentiator.** LiteLLM has GHCR tags without matching git tags; Ollama is hardening blob digest verification; llama.cpp is changing its default server port. Engineers should verify artifacts, digests, and version pins rather than trusting release names.
- **Alternative hardware is advancing but still not production-safe.** ROCm/gfx950, RDNA3/RDNA4, Intel Battlemage/PVC, Vulkan/OpenCL, and MLX are all moving quickly, but issue counts remain high. Keep them for edge pilots and validated use cases, not as drop-in defaults.

**For agent/application developers specifically:** validate streaming behavior against OpenAI-compatible clients after the next Ollama/LiteLLM releases; add correctness checks for quantized DeepSeek-V4 outputs; benchmark prefix-cache hit rates before enabling EAGLE; and expect tenant-scoped OTEL logging and spend-report changes in LiteLLM.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest — 2026-08-04

## 1. Today's Highlights

DeepSeek-V4-Flash-0731 and Kimi-K3 continue to dominate the tracker: the new DSpark checkpoint still lacks Ampere (SM8x) support ([#50576](https://github.com/vllm-project/vllm/issues/50576)) and crashes on Blackwell SM120 via the FlashInfer sparse-MLA decode route ([#50720](https://github.com/vllm-project/vllm/issues/50720)), while Kimi-K3 reports span a closed CUDA crash ([#50147](https://github.com/vllm-project/vllm/issues/50147)) and an open ROCm MI355X failure ([#50347](https://github.com/vllm-project/vllm/issues/50347)). On the engineering side, a new sparse-MLA kernel PR removes 16-way atomic contention in the index remap ([#50365](https://github.com/vllm-project/vllm/pull/50365)), and island-aware hierarchical allreduce for PCIe-only multi-GPU boxes is proposed ([#50941](https://github.com/vllm-project/vllm/pull/50941)). No releases landed in the last 24 hours.

## 2. Releases & Breaking Changes

No new releases in the last 24 hours, and no announced deprecations or migration notes. One regression traces back to the weight-loading refactor in [#47058](https://github.com/vllm-project/vllm/pull/47058): models with unused bias tensors now fail with `AttributeError: 'RoutedExperts' object has no attribute 'w2_bias'` — a fix is open in [#50937](https://github.com/vllm-project/vllm/pull/50937).

## 3. New Model & Hardware Support

- **DeepSeek-V4-Flash / DeepSeek-V4-Flash-0731** (`DeepseekV4ForCausalLM`): Ampere support explicitly requested in [#50576](https://github.com/vllm-project/vllm/issues/50576); SM120 (Blackwell) currently crashes in sparse-MLA kernel routing ([#50720](https://github.com/vllm-project/vllm/issues/50720)).
- **Kimi-K3**: upstream enablement tracked in [#50001](https://github.com/vllm-project/vllm/issues/50001); ROCm Day-0 baselines (AITER fused-moe a16w4/a8w4) and gap roadmap tracked in [#50682](https://github.com/vllm-project/vllm/issues/50682).
- **Intel Arc Pro B70 (Battlemage) XPU**: dual-GPU TP=2 GP fault + BCS engine reset issue closed ([#41663](https://github.com/vllm-project/vllm/issues/41663)).
- **Rust frontend**: Holo2 reasoning parser added to the parity roadmap ([#50763](https://github.com/vllm-project/vllm/pull/50763), tracked in [#44280](https://github.com/vllm-project/vllm/issues/44280)).
- **Qwen3-Omni**: audio-encoder TP sharding now disabled when `heads % TP != 0` (e.g., 20 heads under TP=8) ([#50858](https://github.com/vllm-project/vllm/pull/50858)).
- **Gemma4**: routed-expert manager initialization fixed for `--enable-return-routed-experts` ([#50460](https://github.com/vllm-project/vllm/pull/50460)).
- New-model request open: OmniLingual ASR (>1,600 languages) ([#28509](https://github.com/vllm-project/vllm/issues/28509)).

## 4. Performance & Optimization

- **Sparse MLA index remap** ([#50365](https://github.com/vllm-project/vllm/pull/50365)): eliminates the 16-way atomic contention on the per-row valid-count counter when splitting 2048-wide rows into 16 column tiles, and cleans up the DCP compaction path's atomic slot allocation.
- **Distributed allreduce** ([#50941](https://github.com/vllm-project/vllm/pull/50941)): island-aware hierarchical allreduce for PCIe-only boxes (e.g., 2×4 A100/A800 where halves are PIX-connected and bridged by the CPU), avoiding NCCL-ring fallback; [#39633](https://github.com/vllm-project/vllm/pull/39633) separately fixes PCIe custom-allreduce eligibility on >2-GPU topologies.
- **ROCm kernels**: FlyDSL TurboQuant 4-bit KV-cache decode kernel upstreamed for agentic serving ([#47896](https://github.com/vllm-project/vllm/pull/47896)); MLA decode accuracy/determinism CI tests added for MI300/MI355 ([#50480](https://github.com/vllm-project/vllm/pull/50480)).
- **GLM 5.2 optimization sprint** tracked in [#46654](https://github.com/vllm-project/vllm/issues/46654) — multiple PRs landed.
- **Speculative decoding**: MTP support under pipeline parallelism for DeepSeek-V3/GLM-5.2/Qwen3.5/3.6 in progress ([#46994](https://github.com/vllm-project/vllm/pull/46994)).
- **Regression report**: Qwen3.5 with MTP enabled is *slower* than without — prompt throughput 967 tok/s vs. baseline under concurrency ([#39680](https://github.com/vllm-project/vllm/issues/39680)).
- Design RFCs still open: CUDA Checkpoint/Restore for near-zero cold starts ([#34303](https://github.com/vllm-project/vllm/issues/34303)), incremental MoE expert offloading ([#38256](https://github.com/vllm-project/vllm/issues/38256)), Mooncake Store connector roadmap ([#45036](https://github.com/vllm-project/vllm/issues/45036)).

## 5. Stability & Regressions

Ranked by severity:

1. **DeepSeek-V4-Flash-0731 + DSpark crash on RTX PRO 6000 (SM120)** — FlashInfer sparse-MLA decode kernel routing failure, CUDA 13.2 ([#50720](https://github.com/vllm-project/vllm/issues/50720)). No fix PR yet.
2. **Kimi-K3 TP=8 illegal-memory-access under concurrent load** with prefix caching — closed ([#50147](https://github.com/vllm-project/vllm/issues/50147)); the related ROCm MI355X TP8 crash (`ROCM_AITER_MLA`, HIP code 700) remains open ([#50347](https://github.com/vllm-project/vllm/issues/50347)).
3. **Qwen3.6-35B-A3B-FP8 codegen regression on vLLM 0.23.0/0.24.0** — HTTP 400 "Unterminated string starting at" ([#47761](https://github.com/vllm-project/vllm/issues/47761)). Open.
4. **DeepSeekV4-Flash wrong output with inline system messages** after PR [#46025](https://github.com/vllm-project/vllm/pull/46025) — chat-template behavior split into three paths; "preserved in-place" path is broken ([#46710](https://github.com/vllm-project/vllm/issues/46710)). Open.
5. **EngineCore assertion crash** — `_update_from_kv_xfer_finished` fires for an aborted/freed request when an async KV connector reports a finished transfer ([#43226](https://github.com/vllm-project/vllm/issues/43226)). Open.
6. **Server hangs indefinitely** with Qwen3.5-27B-FP8 on nightly ([#35502](https://github.com/vllm-project/vllm/issues/35502)). Open.
7. **Gemma4 vision encoder crash** — `Expected hidden_size to be 5376, but found: 72` ([#39061](https://github.com/vllm-project/vllm/issues/39061)). Open.
8. **CI: Gemma3 OOMs** with the transformers backend on MI250 ([#37736](https://github.com/vllm-project/vllm/issues/37736)).

Fixed or fixed-in-PR this cycle: empty-bias `AttributeError` on load ([#50937](https://github.com/vllm-project/vllm/pull/50937)); macOS Apple Silicon build failure (`std::sqrt` not constexpr under libc++) ([#50915](https://github.com/vllm-project/vllm/pull/50915)); flaky `test_store_orders_after_compute_write` ([#50926](https://github.com/vllm-project/vllm/pull/50926)); fire-and-forget `asyncio` task GC hazard in the frontend ([#50555](https://github.com/vllm-project/vllm/pull/50555)); MiniMax M3 reasoning parser treating in-content `<mm:think>` as a block open ([#48690](https://github.com/vllm-project/vllm/pull/48690)); Mooncake DP engine index crash on headless wide-TP followers ([#48061](https://github.com/vllm-project/vllm/pull/48061)); draft-model quant-target matching under a root prefix ([#49900](https://github.com/vllm-project/vllm/pull/49900)); gpt-oss-120b no-output issue closed ([#26480](https://github.com/vllm-project/vllm/issues/26480)).

## 6. What This Means for Application Developers

- **Pin vLLM builds to your GPU class if you run the new frontier MoE models.** DeepSeek-V4-Flash is blocked on SM8x/Ampere ([#50576](https://github.com/vllm-project/vllm/issues/50576)) and crashes on SM120 Blackwell ([#50720](https://github.com/vllm-project/vllm/issues/50720)); Kimi-K3 is fragile on ROCm MI355X TP8 ([#50347](https://github.com/vllm-project/vllm/issues/50347)). Expect fast-moving fixes — track #50001 and #50682 before committing to a deployment.
- **Test tool/code workloads before upgrading to 0.23/0.24.** The Qwen3.6-35B-A3B-FP8 codegen regression ([#47761](https://github.com/vllm-project/vllm/issues/47761)) and the DeepSeekV4-Flash inline-system-message break ([#46710](https://github.com/vllm-project/vllm/issues/46710)) both affect agentic workloads specifically.
- **KV-connector users should re-test abort/cancel paths.** The EngineCore assertion on aborted transfers ([#43226](https://github.com/vllm-project/vllm/issues/43226)) and the asyncio task-GC fix ([#50555](https://github.com/vllm-project/vllm/pull/50555)) indicate the Mooncake/NIXL async lifecycle is still being hardened; MLA/DCP support is in flight ([#50611](https://github.com/vllm-project/vllm/pull/50611)).
- **The Rust frontend** (`VLLM_USE_RUST_FRONTEND=1`) is gaining parity (truncation params, Holo2 parser) but remains experimental — validate feature-by-feature before adopting ([#44280](https://github.com/vllm-project/vllm/issues/44280)).
- **External router / RL-rollout builders:** a real-time per-engine `NUM_REQUESTS_RUNNING/WAITING` signal for kvc-aware load balancing is under discussion ([#49538](https://github.com/vllm-project/vllm/issues/49538)) — worth engaging early if you dispatch across vLLM engines from verl or similar.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest — 2026-08-04

## Today's Highlights

No releases landed in the last 24 hours. Active work is concentrated on DeepSeek-V4/DSpark CUDA-Graph stability on TP8, AMD/ROCm gfx950 and consumer Radeon enablement, DCP/FlashMLA correctness, and CI infrastructure improvements such as building Rust extensions once per CI run. Several severe correctness bugs remain open, including silent garbage output on quantized DeepSeek-V4 and EAGLE-induced radix-cache reuse collapse.

## Releases & Breaking Changes

- None.

## New Model & Hardware Support

- **Kimi K3 roadmap** — Day-0 support, DSpark variant, and bug tracking: [Issue #32607](https://github.com/sgl-project/sglang/issues/32607)
- **AMD consumer Radeon RDNA3/RDNA4** — Official-support tracking and enablement plan for `gfx1100`/`gfx1201`: [Issue #30599](https://github.com/sgl-project/sglang/issues/30599)
- **ROCm/gfx950 DSA kernels** — Triton sparse MLA backend: [PR #30575](https://github.com/sgl-project/sglang/pull/30575); dense-MHA short-context prefill fallback: [PR #30808](https://github.com/sgl-project/sglang/pull/30808); fused DSA indexer Hadamard + FP8 quant: [PR #30715](https://github.com/sgl-project/sglang/pull/30715); DSA decode indexer fast path for `kv_len <= index_topk`: [PR #31324](https://github.com/sgl-project/sglang/pull/31324); MI355X RDMA ABI fix in nightly launcher: [PR #33374](https://github.com/sgl-project/sglang/pull/33374)
- **XPU** — Add fused `q_norm_rope`/`k_norm_rope_flashmla` APIs: [PR #32594](https://github.com/sgl-project/sglang/pull/32594); Intel XPU / Arc B documentation: [PR #33369](https://github.com/sgl-project/sglang/pull/33369)
- **Quantization formats** — Route per-tensor FP8 checkpoints to FlashInfer on SM90: [PR #33148](https://github.com/sgl-project/sglang/pull/33148); propagate EP metadata to MXFP4 Marlin: [PR #33396](https://github.com/sgl-project/sglang/pull/33396)
- **Diffusion** — Enable BCG under tensor parallelism: [PR #33421](https://github.com/sgl-project/sglang/pull/33421)

## Performance & Optimization

- **DSA/DeepSeek-V4 decode** — Skip DSA indexer entirely when `kv_len <= index_topk`, using a k-only dense path: [PR #31324](https://github.com/sgl-project/sglang/pull/31324)
- **DSA prefill on gfx950** — Dense-MHA fallback for short contexts avoids sparse-indexer overhead: [PR #30808](https://github.com/sgl-project/sglang/pull/30808)
- **DSA indexer kernel fusion** — Fuse query-side Hadamard + FP8 quant into one Triton kernel to cut per-kernel launch/HBM overhead: [PR #30715](https://github.com/sgl-project/sglang/pull/30715)
- **FlashMLA + DCP** — Honor natural-log LSE in DCP reduction; incorrect cross-rank softmax weights otherwise: [PR #33065](https://github.com/sgl-project/sglang/pull/33065)
- **DCP resource accounting** — Bound requests by aggregate KV pool, not one rank's share: [PR #33448](https://github.com/sgl-project/sglang/pull/33448)
- **CI efficiency** — Build Rust extension modules once per CI run instead of in every CUDA job: [PR #33384](https://github.com/sgl-project/sglang/pull/33384)
- **Overlap speculative decoding** — Roadmap for EAGLE/overlap-scheduler feature support: [Issue #11762](https://github.com/sgl-project/sglang/issues/11762)

## Stability & Regressions

- **Critical — DSpark CUDA-Graph illegal memory access on TP8**  
  Large decode graph capture can fail non-deterministically during server startup: [Issue #33356](https://github.com/sgl-project/sglang/issues/33356). Also affects the compact target-verify path: [Issue #31023](https://github.com/sgl-project/sglang/issues/31023). A related RFC defines metadata/stream-ownership contracts for dynamic CUDA Graph replay: [Issue #32432](https://github.com/sgl-project/sglang/issues/32432). No fix PRs yet.

- **Critical — Quantized DeepSeek-V4 silently produces garbage**  
  Fused `wq_a+wkv` path drops every layer's packed weights; server runs but output is garbage: [Issue #33245](https://github.com/sgl-project/sglang/issues/33245)

- **High — DSV4 indexer torch fallback OOM past ~128K context**  
  Allocates a `num_heads`-times-oversized intermediate: [Issue #33246](https://github.com/sgl-project/sglang/issues/33246)

- **High — EAGLE collapses radix-cache prefix reuse**  
  GLM-DSA NVFP4 multi-turn traffic sees prefix reuse drop from 97% to 40–53% with EAGLE enabled, silently hurting TTFT/throughput: [Issue #32459](https://github.com/sgl-project/sglang/issues/32459)

- **High — MLX overlap chained decode skips token accounting**  
  Steady-state chained decode never runs per-token accounting; decode-KV sync can write to stale or unallocated slots: [Issue #30093](https://github.com/sgl-project/sglang/issues/30093)

- **High — Gemma-4 multimodal crash**  
  A single non-RGB image can crash the vision tower/scheduler and kill unrelated in-flight requests: [Issue #26751](https://github.com/sgl-project/sglang/issues/26751)

- **Medium — FlashMLA LSE base mismatch in DCP**  
  Natural-log LSE treated as base-2; fix in [PR #33065](https://github.com/sgl-project/sglang/pull/33065)

- **Medium — Chunked GDN kernel reads padded state slots**  
  `forward_metadata` poisons padded rows with state index `-1`; fix in [PR #33431](https://github.com/sgl-project/sglang/pull/33431)

- **Medium — EXIF orientation ignored for phone JPEGs**  
  Models receive raw sensor pixels instead of correctly rotated images; fix in [PR #33449](https://github.com/sgl-project/sglang/pull/33449)

## What This Means for Application Developers

- If you serve **DeepSeek-V4/DSpark on TP8**, run large-CUDA-Graph soak tests before rollout; both compact and large decode graph paths currently show timing-sensitive illegal memory access.
- For **quantized DeepSeek-V4**, validate outputs with a small correctness suite — the fused `wq_a+wkv` bug returns garbage without crashing.
- **EAGLE + multi-turn agent traffic** may silently destroy radix-cache reuse. Benchmark prefix hit rates with and without draft decoding before enabling it in production.
- **Multimodal applications** should sanitize unusual image formats (grayscale/RGBA, EXIF rotation) or isolate vision traffic; a single bad image can currently take down the whole batch.
- **AMD/ROCm and XPU support are advancing quickly**, but consumer Radeon enablement is still a tracking issue rather than a supported configuration. Watch [Issue #30599](https://github.com/sgl-project/sglang/issues/30599) if you depend on RDNA3/RDNA4.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp Digest — 2026-08-04

## 1. Today’s Highlights

A dense release train (`b10238`–`b10248`) landed with important scheduler, model-layout, and CUDA/OpenCL fixes. The headline change is `b10247`, which replaces fixed-size split-graph input arrays with dynamic allocation, fixing wide-MoE crashes on multi-GPU systems ([#22789](https://github.com/ggml-org/llama.cpp/pull/22789)). On the community side, the most critical reports are a DeepSeek-V4 CUDA flash-attention correctness issue producing repeated `<` tokens ([#26509](https://github.com/ggml-org/llama.cpp/issues/26509)) and a GLM-5.2 ROCm/HIP regression causing ~6× slower prefill after the Indexer PR ([#26445](https://github.com/ggml-org/llama.cpp/issues/26445)).

---

## 2. Releases & Breaking Changes

- **b10248** — `vocab : validate default special token ids` ([#26506](https://github.com/ggml-org/llama.cpp/pull/26506)).  
  Release: [b10248](https://github.com/ggml-org/llama.cpp/releases/tag/b10248)
- **b10247** — `ggml : use dynamic allocation for split graph inputs` ([#22789](https://github.com/ggml-org/llama.cpp/pull/22789)). Replaces fixed-size `GGML_SCHED_MAX_SPLIT_INPUTS` arrays; fixes crashes when loading wide MoE models. Likely addresses [issue #24657](https://github.com/ggml-org/llama.cpp/issues/24657).  
  Release: [b10247](https://github.com/ggml-org/llama.cpp/releases/tag/b10247)
- **b10246** — `opencl : route large q6_K lm_head to the flat GEMV` ([#26427](https://github.com/ggml-org/llama.cpp/pull/26427)). Handles oversized q6_K lm_head weights such as Gemma-4 E2B’s `[1536, 262144]`.  
  Release: [b10246](https://github.com/ggml-org/llama.cpp/releases/tag/b10246)
- **b10245** — `graph : fix unused input tensors in minimax m3 graph` ([#26519](https://github.com/ggml-org/llama.cpp/pull/26519)).  
  Release: [b10245](https://github.com/ggml-org/llama.cpp/releases/tag/b10245)
- **b10244** — `model : M3: Move MSA into a new memory implementation` ([#26338](https://github.com/ggml-org/llama.cpp/pull/26338)).  
  Release: [b10244](https://github.com/ggml-org/llama.cpp/releases/tag/b10244)
- **b10243** — `llama : allocate indexer cache only in "full" indexer layers` ([#26474](https://github.com/ggml-org/llama.cpp/pull/26474)).  
  Release: [b10243](https://github.com/ggml-org/llama.cpp/releases/tag/b10243)
- **b10242** — `CUDA : Add backend sampler for penalties sampler` ([#25262](https://github.com/ggml-org/llama.cpp/pull/25262)).  
  Release: [b10242](https://github.com/ggml-org/llama.cpp/releases/tag/b10242)
- **b10241** — `CUDA : Fix data-races when reusing SMEM in block_reduce` ([#26385](https://github.com/ggml-org/llama.cpp/pull/26385)).  
  Release: [b10241](https://github.com/ggml-org/llama.cpp/releases/tag/b10241)
- **b10240** — `server : add notice for upcoming default port change 8080 --> 9931` ([#26508](https://github.com/ggml-org/llama.cpp/pull/26508)). **Breaking change notice:** pin `--port` explicitly before upgrading.  
  Release: [b10240](https://github.com/ggml-org/llama.cpp/releases/tag/b10240)
- **b10238** — `model : MTP support for Qwen3-Next` ([#25589](https://github.com/ggml-org/llama.cpp/pull/25589)).  
  Release: [b10238](https://github.com/ggml-org/llama.cpp/releases/tag/b10238)

There are no other hard API/config breaks in this window, but the default port change is the main migration item to track.

---

## 3. New Model & Hardware Support

- **Qwen3-Next MTP support** landed in conversion and model code via [b10238 / #25589](https://github.com/ggml-org/llama.cpp/pull/25589).
- **GLM-4.5-Air MTP support** is in progress in open PR [#26534](https://github.com/ggml-org/llama.cpp/pull/26534).
- **DeepSeek V4 Flash 0731 chat template** is covered in PR [#26398](https://github.com/ggml-org/llama.cpp/pull/26398), including new reasoning-level prompts.
- **MXFP4 / NVFP4 quantization** — dense MXFP4 and MoE NVFP4 quantization support is proposed in PR [#25878](https://github.com/ggml-org/llama.cpp/pull/25878).
- **Intel Xe / Battlemage / PVC kernels**:
  - Vulkan coopmat1 `SHMEM_STRIDE_PAD` / `APPLY_SLM_A_RESHAPE` support in PR [#25380](https://github.com/ggml-org/llama.cpp/pull/25380).
  - Intel Xe flash-attention optimization kernels for Xe-LPG Plus / Xe2 / Xe3 in PR [#24406](https://github.com/ggml-org/llama.cpp/pull/24406).
  - ESIMD DMMV Q4_K and Q6_K kernels in PR [#25942](https://github.com/ggml-org/llama.cpp/pull/25942).
- **RPC transport** — Apple RDMA support proposed in PR [#26421](https://github.com/ggml-org/llama.cpp/pull/26421).
- **Causal-LM rerankers** — server-side `/v1/rerank` support via logit-margin scoring in PR [#25448](https://github.com/ggml-org/llama.cpp/pull/25448).
- **OpenCL / Adreno** — quant `lm_head`, decode GEMV, and medium-batch GEMM optimizations targeting speculative decoding / MTP in PR [#26477](https://github.com/ggml-org/llama.cpp/pull/26477).

---

## 4. Performance & Optimization

- **Wide MoE scheduler fix** — `b10247` replaces static split-input arrays with dynamic allocation, removing the `GGML_SCHED_MAX_SPLIT_INPUTS` overflow crash on wide models ([#22789](https://github.com/ggml-org/llama.cpp/pull/22789)).
- **OpenCL q6_K lm_head routing** — `b10246` sends large q6_K lm_head weights straight to the flat GEMV path; the old dimension-only condition caused slowdowns on `[1536, 262144]` Gemma-4 E2B tensors ([#26427](https://github.com/ggml-org/llama.cpp/pull/26427)).
- **Indexer cache memory reduction** — `b10243` only allocates the indexer cache in full indexer layers, reducing memory waste ([#26474](https://github.com/ggml-org/llama.cpp/pull/26474)).
- **MoE expert pinning** — PR [#26414](https://github.com/ggml-org/llama.cpp/pull/26414) adds `--pin-hot-experts N` to `mlock()` the hottest MoE experts and avoid page-cache eviction/disk reload latency spikes.
- **Intel Xe ESIMD DMMV kernels** — PR [#25942](https://github.com/ggml-org/llama.cpp/pull/25942) reports Qwen3-14B Q4_K_M throughput gains:
  - B70: 1.05× vs MMVQ, 1.46× vs DMMV.
  - PVC: 1.31× vs MMVQ, 1.76× vs DMMV.
- **OpenCL decode / MTP optimization** — PR [#26477](https://github.com/ggml-org/llama.cpp/pull/26477) targets skinny GEMMs used by speculative decoding and MTP on Adreno GPUs.
- **Backend sampling multi-output** — PR [#25532](https://github.com/ggml-org/llama.cpp/pull/25532) extends backend sampling to multiple outputs per sequence, enabling backend sampling during speculative decoding.

---

## 5. Stability & Regressions

Ranked roughly by severity:

- **Critical: DeepSeek-V4 repeated `<` on CUDA flash attention** — [#26509](https://github.com/ggml-org/llama.cpp/issues/26509). Reproduced on multiple builds; clean on CPU and clean with `-fa off`. No fix merged yet. Closely related: [closed #26471](https://github.com/ggml-org/llama.cpp/issues/26471) for `n_ubatch` splitting.
- **High: Multi-GPU split-graph assert** — `GGML_ASSERT(n_inputs < GGML_SCHED_MAX_SPLIT_INPUTS)` on 2× Tesla V100 with Gemma-4-E[2/4]B ([#24657](https://github.com/ggml-org/llama.cpp/issues/24657)). Likely resolved by `b10247` ([#22789](https://github.com/ggml-org/llama.cpp/pull/22789)).
- **High: HIP/ROCm TOP_K CPU fallback** — [#26399](https://github.com/ggml-org/llama.cpp/issues/26399). Above ~3–4K context, `GGML_OP_TOP_K` falls back to CPU, causing 6.4× token-generation loss on DeepSeek-V4-Flash.
- **High: GLM-5.2 ROCm regression after Indexer PR** — [#26445](https://github.com/ggml-org/llama.cpp/issues/26445). Prefill ~6× slower, load time ~40× longer on 8× MI300X.
- **High: SIGSEGV on Intel Arc B70 with DS4F** — [#26462](https://github.com/ggml-org/llama.cpp/issues/26462), suspected missing SYCL f16 conversion.
- **Medium: `-devd CUDA0` with draft-dspark crashes** — [#26475](https://github.com/ggml-org/llama.cpp/issues/26475).
- **Medium: Gemma 4 12B garbled output on Intel Arc Pro B70** — [#26206](https://github.com/ggml-org/llama.cpp/issues/26206), large prompt / SYCL issue.
- **Medium: DSV4-Flash SWA KV-cache exhaustion** — [#25452](https://github.com/ggml-org/llama.cpp/issues/25452), crash + stall on churned/reuse scenarios.
- **Medium: Metal decode regression** — [#26470](https://github.com/ggml-org/llama.cpp/issues/26470). Gemma 4 E4B Q8_0 decode ~13% slower between `b9730` and `b10219`; Qwen models unaffected.
- **Older but active: Qwen 3.6 27B full prompt re-processing** — [#22746](https://github.com/ggml-org/llama.cpp/issues/22746) remains open with high community engagement.

Stability fix landed in this window: `b10241` fixes CUDA `block_reduce` SMEM data races when reusing shared memory across reductions ([#26385](https://github.com/ggml-org/llama.cpp/pull/26385)).

---

## 6. What This Means for Application Developers

- **Pin your server port now.** The default is changing from `8080` to `9931` in an upcoming release ([#26508](https://github.com/ggml-org/llama.cpp/pull/26508)). Explicitly pass `--port` to avoid surprise breakage.
- **Update to `b10247+` if you serve wide MoE models on multi-GPU.** The dynamic split-graph allocation fix removes a real crash path for Gemma-4-class models ([#22789](https://github.com/ggml-org/llama.cpp/pull/22789)).
- **Be cautious with DeepSeek-V4 on CUDA flash attention.** If you see repeated `<` on long prompts, disable flash attention (`-fa off`) as a workaround until a fix lands ([#26509](https://github.com/ggml-org/llama.cpp/issues/26509)).
- **ROCm/HIP deployments should watch for two known regressions:** TOP_K CPU fallback on long contexts ([#26399](https://github.com/ggml-org/llama.cpp/issues/26399)) and GLM-5.2 Indexer-related slowdowns ([#26445](https://github.com/ggml-org/llama.cpp/issues/26445)). Consider pinning known-good builds if affected.
- **MoE serving on mmap-backed models:** evaluate `--pin-hot-experts` once [PR #26414](https://github.com/ggml-org/llama.cpp/pull/26414) merges — it directly targets tail-latency spikes from OS page-cache eviction.
- **Speculative decoding / MTP is expanding:** Qwen3-Next MTP is already in release ([#25589](https://github.com/ggml-org/llama.cpp/pull/25589)), and GLM-4.5-Air MTP ([#26534](https://github.com/ggml-org/llama.cpp/pull/26534)) plus multi-output backend sampling ([#25532](https://github.com/ggml-org/llama.cpp/pull/25532)) will improve spec-decode throughput.
- **If you rely on `/v1/rerank`:** watch for causal-LM reranker score fixes in [PR #25448](https://github.com/ggml-org/llama.cpp/pull/25448), and for better HTTP error semantics on mid-decode context exhaustion in [PR #26545](https://github.com/ggml-org/llama.cpp/pull/26545).

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

## Ollama Digest — 2026-08-04

### Today's Highlights
No new Ollama release landed in the last 24 hours, but the tree is moving on several important fronts: a major OpenAI-compatible streaming wire-format fix is now closed ([#17485](https://github.com/ollama/ollama/pull/17485)), a new `llama.cpp` update is open ([#17545](https://github.com/ollama/ollama/pull/17545)), and blob corruption handling is being hardened with digest verification on cache hits ([#17537](https://github.com/ollama/ollama/pull/17537)). The most visible unresolved stability issue is a CUDA illegal-memory-access crash with `gpt-oss:20b` during context checkpoint creation ([#17534](https://github.com/ollama/ollama/issues/17534)).

### Releases & Breaking Changes
- No official releases in the last 24 hours.
- Upcoming breaking change: the closed PR [ollama/ollama#17485](https://github.com/ollama/ollama/pull/17485) reworks `/v1/chat/completions` streaming to match OpenAI's wire format exactly — `role` will no longer repeat in every chunk, and `finish_reason` will move to its own terminal chunk. Clients doing strict OpenAI compatibility should plan for this once it ships.

### New Model & Hardware Support
- **Intel SYCL / oneAPI GPU backend** is still progressing as a proposal ([#16930](https://github.com/ollama/ollama/issues/16930)), with a first implementation PR to recognize `ggml-sycl` in GPU discovery ([#16939](https://github.com/ollama/ollama/pull/16939)).
- **DeepSeek V4 Flash 0731** was requested for local availability ([#17510](https://github.com/ollama/ollama/issues/17510)).
- **Reranking model support** remains the most popular open feature request, now with 285 upvotes ([#3368](https://github.com/ollama/ollama/issues/3368)).
- **MLX support for `glm-ocr`** was requested for Apple Silicon, following the existing `qwen3.6:27b-mlx` pattern ([#17535](https://github.com/ollama/ollama/issues/17535)).
- **Multimodal embedding support** is still in draft via a PR targeting Cohere-compatible `/v2/embed` ([#15166](https://github.com/ollama/ollama/pull/15166)).
- **Unresolved model support gap:** Qwen 3.5 GGUF models from HuggingFace fail to load with `Error: 500 unable to load model`; the issue remains open pending more info ([#14575](https://github.com/ollama/ollama/issues/14575)).

### Performance & Optimization
- A feature request for **`dspark`-style acceleration** was filed, citing open-source implementations that significantly increase LLM result speed; no maintainer decision yet ([#17016](https://github.com/ollama/ollama/issues/17016)).
- The open **`llama.cpp` update** ([#17545](https://github.com/ollama/ollama/pull/17545)) likely brings upstream kernel and scheduling improvements, though no concrete numbers are available yet.
- Benchmark tooling is being improved with **Python patch-continuation prompt generation** for more realistic prompt workloads ([#17480](https://github.com/ollama/ollama/pull/17480)).
- A low-level **CUDA out-of-bounds read in `gated_delta_net_cuda`** on Pascal GPUs was reported under Compute Sanitizer, typically as context fills up ([#17546](https://github.com/ollama/ollama/issues/17546)).

### Stability & Regressions
Ranked by severity:

- **Critical — CUDA crash:** `gpt-oss:20b` consistently crashes `llama-server` with an illegal memory access while creating/updating a context checkpoint on NVIDIA A10. No fix PR yet ([#17534](https://github.com/ollama/ollama/issues/17534)).
- **High — corrupted blobs accepted:** A blob whose contents do not match its filename digest is silently kept; `ollama pull` reports success while leaving bad data on disk. A fix PR adds digest verification before trusting same-size cache hits ([#17520](https://github.com/ollama/ollama/issues/17520), [PR #17537](https://github.com/ollama/ollama/pull/17537)).
- **High — Qwen 3.5 load failures:** GGUF versions of Qwen 3.5 from HuggingFace return `500 unable to load model` on Windows CPU systems; still needs maintainer triage ([#14575](https://github.com/ollama/ollama/issues/14575)).
- **High — degraded long-running serving:** `laguna-xs-2.1` starts returning empty/null HTTP 200 responses after ~30–70 minutes of continuous agentic use, while `ollama ps` still reports the model loaded; `ollama stop` recovers ([#17524](https://github.com/ollama/ollama/issues/17524)).
- **Medium — `/v1/responses` silent stream termination:** Streams can close without `response.completed`, `response.incomplete`, or `response.failed`. A fix PR emits `response.failed` when generation fails mid-stream ([#17118](https://github.com/ollama/ollama/issues/17118), [PR #17531](https://github.com/ollama/ollama/pull/17531)).
- **Medium — `/api/generate` ignores `think` with `format`:** `think: true` is silently dropped when `format` is set, producing wrong answers; `/api/chat` handles the same case correctly ([#17544](https://github.com/ollama/ollama/issues/17544)).
- **Medium — cloud stub model failed:** `nemotron-3-ultra:cloud` returns a "pull cloud stub model" error and does not appear in `ollama list`, preventing use with external agents ([#17388](https://github.com/ollama/ollama/issues/17388)).
- **Low — OpenAI stream compatibility:** `role` was incorrectly repeated in every `/v1/chat/completions` chunk; closed by [PR #17485](https://github.com/ollama/ollama/pull/17485).
- **Low — listing models error:** A downstream library bug broke `llm-ollama`/`llm`; Ollama-side issue closed ([#17541](https://github.com/ollama/ollama/issues/17541)).
- **Low — app input lag with images:** Text input becomes very slow when images are attached, likely due to per-keystroke processing ([#17540](https://github.com/ollama/ollama/issues/17540)).

### What This Means for Application Developers
- **OpenAI-compatible clients should decouple from Ollama's current streaming quirks.** The closed [PR #17485](https://github.com/ollama/ollama/pull/17485) brings `/v1/chat/completions` in line with OpenAI's actual response chunks, so agents and SDKs relying on repeated `role` fields will need updating after the next release.
- **Treat `/v1/responses` EOF as an error.** Until [PR #17531](https://github.com/ollama/ollama/pull/17531) ships, a clean EOF without a terminal event can mean failure, not completion — add timeout or incomplete-response handling.
- **Watch for embedding truncation warnings.** [PR #17543](https://github.com/ollama/ollama/pull/17543) adds server-side warnings when `/api/embed` silently truncates input; applications should start surfacing or pre-truncating long inputs themselves.
- **Tool-calling reliability is improving.** [PR #17536](https://github.com/ollama/ollama/pull/17536) fixes dropped `function_call` tool calls when the model ends the stream before emitting the closing tag — important for agent loops.
- **Pull validation is getting stronger.** Once [PR #17537](https://github.com/ollama/ollama/pull/17537) lands, corrupted blobs are less likely to survive as "successful" pulls, so model-hosting pipelines should re-verify or re-pull if they suspect disk corruption.
- **CLI cloud workflows are changing.** [PR #17497](https://github.com/ollama/ollama/pull/17497) adds cloud-tag suggestions to `ollama launch`, which will affect scripted launch commands.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-08-04

## 1. Today's Highlights

Four releases landed in the last 24 hours (v1.93.1 → v1.96.0-rc.1), all cosign-signed — but two GHCR image tags (`v1.94.1`, `v1.95.0`) have no matching git tag or GitHub Release, breaking the documented provenance-verification flow ([#35683](https://github.com/BerriAI/litellm/issues/35683), [#35684](https://github.com/BerriAI/litellm/issues/35684)). The most significant code movement is a coordinated multi-PR effort to make OTEL trace routing tenant-scoped (resolved from team/org identity at auth time, with admin-owned logging credentials and UI management), plus two performance PRs targeting per-request overhead: lazy debug-log construction ([#35727](https://github.com/BerriAI/litellm/pull/35727)) and the hiredis C parser for redis-py ([#35709](https://github.com/BerriAI/litellm/pull/35709)).

## 2. Releases & Breaking Changes

- **v1.96.0-rc.1, v1.95.0, v1.94.1, v1.93.1** published. Release notes contain only the cosign Docker-signature boilerplate; no API/config changes or migration notes included.
- **Release-hygiene gap:** [Issue #35683](https://github.com/BerriAI/litellm/issues/35683) and [Issue #35684](https://github.com/BerriAI/litellm/issues/35684) report that `ghcr.io/berriai/litellm:v1.94.1` and `:v1.95.0` are published and signature-valid, but no corresponding git tags or GitHub Releases exist (only `-dev`/`-rc` tags for v1.95.0). **Action:** verify image digests against repo tags before pinning in production.

## 3. New Model & Hardware Support

- **Vertex AI — Grok 4.3:** pricing and model metadata added in [PR #35728](https://github.com/BerriAI/litellm/pull/35728), including 200K-context boundary tests and bundled-map parity checks.
- Model families now referenced in the support matrix via open issues: OpenAI **gpt-5.6** (sol/luna/terra) with reasoning-effort translation ([#33221](https://github.com/BerriAI/litellm/issues/33221)), **Gemini Flash 3.6** ([#35236](https://github.com/BerriAI/litellm/issues/35236)), and **claude-fable-5** cache-min-token metadata ([#35011](https://github.com/BerriAI/litellm/issues/35011)).
- No new hardware/quantization (CUDA/ROCm/Metal/CPU) work appeared today.

## 4. Performance & Optimization

- **Lazy log construction:** [Issue #35699](https://github.com/BerriAI/litellm/issues/35699) identifies 1,347 eager `verbose_logger.debug(...)` f-string call sites across 291 files — disabled debug logs still pay string-interpolation cost on every request. Fix rebased onto latest staging in [PR #35727](https://github.com/BerriAI/litellm/pull/35727).
- **hiredis C parser:** [PR #35709](https://github.com/BerriAI/litellm/pull/35709) adds hiredis to the `proxy` extra so redis-py stops parsing every reply in pure Python; cache reads and pipelines pay that cost per request today.
- **RedisCache task retention:** [PR #35347](https://github.com/BerriAI/litellm/pull/35347) holds strong references to 30 `create_task()` results for service-logging hooks that were weakly referenced and could be GC'd mid-flight, silently dropping Redis telemetry under load.
- **Spend/cost analytics:** [PR #35521](https://github.com/BerriAI/litellm/pull/35521) adds net auto-router savings to the cost-optimization dashboard with distinct cold-cache vs. compression math; caller-scoped spend-report endpoints land in [PR #35725](https://github.com/BerriAI/litellm/pull/35725).
- No concrete throughput/latency benchmark numbers were attached to any of today's perf PRs.

## 5. Stability & Regressions

Ranked by severity:

- **Migration/upgrade breakage (high):** [Issue #22998](https://github.com/BerriAI/litellm/issues/22998) (closed-stale) — `litellm_proxy_extras` migrations recorded as applied but columns never created, causing silent 500s on `/v2/login` and empty `/v1/mcp/server` responses. Closed as stale; operators on v1.81.14-era should verify migrations actually executed.
- **Tool-calling correctness (high):**
  - [Issue #33221](https://github.com/BerriAI/litellm/issues/33221) — gpt-5.6 family + function tools fails with a `reasoning_effort` error on `/chat/completions`.
  - [Issue #34692](https://github.com/BerriAI/litellm/issues/34692) — `ollama_chat` → Anthropic `/v1/messages` streaming emits `stop_reason: "end_turn"` instead of `"tool_use"` plus a spurious empty text block, breaking Claude Code tool-call loops.
- **Bedrock:**
  - [Issue #31947](https://github.com/BerriAI/litellm/issues/31947) — `aws_bedrock_project_id` sent as `"anthropic-workspace"` header instead of `"anthropic-workspace-id"` to Bedrock Mantle.
  - [PR #35688](https://github.com/BerriAI/litellm/pull/35688) — stops forwarding no-op `toolSpec.strict`, which 400s Bedrock Converse on Claude models lacking `bedrock_converse_supports_strict_tools` (currently Sonnet 5).
- **Provider adapters (medium):** [Issue #35236](https://github.com/BerriAI/litellm/issues/35236) — Gemini Flash 3.6 rejects `image_url` in tool responses. [Issue #27187](https://github.com/BerriAI/litellm/issues/27187) — Snowflake Cortex base URLs are outdated. [PR #35650](https://github.com/BerriAI/litellm/pull/35650) — fixes dict-form `reasoning_effort` from the Anthropic adapter causing Fireworks AI 400s.
- **Ollama vision:** [Issue #27183](https://github.com/BerriAI/litellm/issues/27183) — VLM calls fail because the container image lacks `pillow`.
- **S3 logging:** [PR #35726](https://github.com/BerriAI/litellm/pull/35726) — generic `SigV4Auth` double-encodes canonical paths, causing 403s on s3_v2 for aliases/keys containing spaces; fix uses botocore's `S3SigV4Auth`.
- **Release provenance:** [Issue #35683](https://github.com/BerriAI/litellm/issues/35683) / [#35684](https://github.com/BerriAI/litellm/issues/35684) — GHCR tags without matching releases.
- **Other open bugs:** [Issue #18060](https://github.com/BerriAI/litellm/issues/18060) — unauthorized/incorrect requests can trigger infinite retry loops; [Issue #27193](https://github.com/BerriAI/litellm/issues/27193) — deprecated API keys rejected immediately despite grace-period row; [Issue #24498](https://github.com/BerriAI/litellm/issues/24498) — Claude responses returning literal `[System: Empty message content sanitised to satisfy protocol]`; [Issue #35011](https://github.com/BerriAI/litellm/issues/35011) — `prompt_cache_min_tokens` metadata contradictions (claude-fable-5 keys disagree; 499 entries missing minimums).
- **UI:** [Issue #23636](https://github.com/BerriAI/litellm/issues/23636) (closed-stale) — spend-logs UI shows "Request/Response Data Not Available" despite `store_prompts_in_spend_logs: true`; [PR #35705](https://github.com/BerriAI/litellm/pull/35705) rejects empty auto-router keyword rules instead of silently dropping them.

## 6. What This Means for Application Developers

- **Watch tool-calling paths:** if you serve `ollama_chat` models to Anthropic clients (Claude Code), streaming tool calls are currently broken ([#34692](https://github.com/BerriAI/litellm/issues/34692)); gpt-5.6 family + function tools fails on `/chat/completions` ([#33221](https://github.com/BerriAI/litellm/issues/33221)). For Bedrock, pin Claude/Sonnet 5 combinations until [#35688](https://github.com/BerriAI/litellm/pull/35688) ships.
- **S3 log consumers:** if you use s3_v2 with team/alias/key paths containing spaces, expect 403s until [PR #35726](https://github.com/BerriAI/litellm/pull/35726) lands.
- **Verify release provenance:** after the [#35683](https://github.com/BerriAI/litellm/issues/35683)/[#35684](https://github.com/BerriAI/litellm/issues/35684) findings, don't assume a GHCR tag equals a GitHub Release — check the git tag/digest mapping in security-sensitive deployments.
- **Plan for tenant-scoped OTEL routing:** the PR cluster [#35513](https://github.com/BerriAI/litellm/pull/35513)–[#35517](https://github.com/BerriAI/litellm/pull/35517) moves trace destinations from proxy-global to team/org-scoped resolution at auth time (clients can no longer influence where traces go), adds admin-owned `credential_type: "logging"` credentials, and surfaces `resolved_logging_exporters` on `/team/info` and `/organization/info`. Logging/OTEL configuration will change when this lands.
- **Performance:** after [#35727](https://github.com/BerriAI/litellm/pull/35727), proxies running with debug logging disabled should see reduced per-request overhead; [#35709](https://github.com/BerriAI/litellm/pull/35709)'s hiredis change cuts redis-py parse time on cache hot paths.
- **Self-serve spend reporting:** non-admin callers will soon be able to pull key/user/team/org-scoped spend reports ([#35725](https://github.com/BerriAI/litellm/pull/35725)) — useful for building tenant-facing dashboards.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth Digest — 2026-08-04

## 1. Today's Highlights

This 24h window was dominated by Unsloth Studio hardware-detection and installer reliability work: PRs were opened for ROCm iGPU shadowing (#7778), CUDA wheel selection by GPU architecture (#7801), and guarding llama-server against ROCm devices without kernels (#7670). On the model side, a serious correctness bug was reported for Gemma-2 attention-only LoRA-to-GGUF exports (#7792), and Studio's API still lacks `/v1/completions` support for non-GGUF backends (#7703). No new releases were cut in the last 24h.

## 2. Releases & Breaking Changes

No releases in the last 24h. No API/config changes or migration notes to report.

## 3. New Model & Hardware Support

- **Seq2Seq / vision encoder-decoder support:** [PR #7795](https://github.com/unslothai/unsloth/pull/7795) adds Seq2Seq support for encoder-decoder vision models, specifically T5Gemma2, covering `FastVisionModel`, VLM, and trainer paths. Open/in-progress.
- **Image generation workflows:** [PR #6763](https://github.com/unslothai/unsloth/pull/6763) proposes image generation/editing workflows and LoRA training with Unsloth GGUFs. Open integration branch.
- **Hardware install/detection fixes affecting supported backends:**
  - [PR #7801](https://github.com/unslothai/unsloth/pull/7801): select CUDA wheels by actual GPU architecture, fixing cases where a Tesla V100 (`sm_70`) receives a `cu130` wheel that requires `sm_75+`.
  - [PR #7778](https://github.com/unslothai/unsloth/pull/7778): on mixed AMD APU + dGPU hosts, don't install for a shadowing iGPU.
  - [PR #7670](https://github.com/unslothai/unsloth/pull/7670): don't run llama-server on ROCm GPUs where the build has no kernels.

## 4. Performance & Optimization

No benchmark numbers landed in this window.

- [PR #7629](https://github.com/unslothai/unsloth/pull/7629) replaces the singleton active-chat prompt queue with independent per-chat queues, preserving FIFO order per chat while allowing ready chats to dispatch in parallel under the backend concurrency cap. This is the most meaningful concurrency work active right now.
- [#7022](https://github.com/unslothai/unsloth/issues/7022) remains open: `--fit on` prevents loading large MoE GGUFs like DeepSeek-V4-Flash-Q2_K_XL (~100GB) on consumer hardware, with users requesting UI control over llama-server flags for memory/fit behavior.

## 5. Stability & Regressions

Ranked roughly by severity.

- **High — Gemma-2 attention-only LoRA merge → GGUF export produces incoherent output** ([#7792](https://github.com/unslothai/unsloth/issues/7792)). Fine-tuned `q_proj/k_proj/v_proj/o_proj` adapter merged and exported produces fluent "word-salad" despite bit-exact weights/metadata/tokenization. No fix PR yet.
- **High — Linux/WSL installer can install Python 3.13.8, breaking `import torch`** ([#7803](https://github.com/unslothai/unsloth/issues/7803)). A CPython regression silently disables Train/Export on working multi-GPU boxes. No fix PR yet.
- **High — Large MoE loading blocked by `--fit on`** ([#7022](https://github.com/unslothai/unsloth/issues/7022)). Open; affects ~100GB GGUF models on consumer hardware.
- **Medium — API streaming to Pi agent hangs frequently** ([#7617](https://github.com/unslothai/unsloth/issues/7617)). Open, still reproduced on latest Studio.
- **Medium — Tesla V100 no longer loads models into VRAM** ([#7765](https://github.com/unslothai/unsloth/issues/7765)). Closed. The CUDA wheel architecture fix in [#7801](https://github.com/unslothai/unsloth/pull/7801) appears targeted at this class of issue.
- **Medium — AMD GPU not loading into VRAM / not detected** ([#7776](https://github.com/unslothai/unsloth/issues/7776)). Open; fix PR exists in [#7778](https://github.com/unslothai/unsloth/pull/7778).
- **Medium — Regeneration branch history reset after 5–6 refreshes** ([#7732](https://github.com/unslothai/unsloth/issues/7732)). Open; fix PR exists in [#7796](https://github.com/unslothai/unsloth/pull/7796).
- **Medium — Windows installer installs Python 3.14 + uv venv** ([#7802](https://github.com/unslothai/unsloth/issues/7802)). Open UX/installer regression report.
- **Process / CI failures on `main`:**
  - [#7727](https://github.com/unslothai/unsloth/issues/7727) — closed; legacy inventory filter test failing on main.
  - [#7708](https://github.com/unslothai/unsloth/issues/7708) — open; `_DummyTrainer` leaves `data_collator` unassigned when HF/TRL are latest.
- **Closed minor issues:** download ETA showing `753d 5h left` ([#7667](https://github.com/unslothai/unsloth/issues/7667)), token count disappearing after model switch ([#7450](https://github.com/unslothai/unsloth/issues/7450)), `</think>` token breaking generation ([#7066](https://github.com/unslothai/unsloth/issues/7066)), and `FastLlamaModel` ignoring `revision` ([#3544](https://github.com/unslothai/unsloth/issues/3544)).

## 6. What This Means for Application Developers

- **If you rely on `/v1/completions` or `logprobs` for non-GGUF models, beware:** [#7703](https://github.com/unslothai/unsloth/issues/7703) is still open. Non-GGUF backends like MLX return 503; you'll need GGUF or wait for the feature.
- **Validate GGUF exports after attention-only LoRA merges**, especially on Gemma-2. [#7792](https://github.com/unslothai/unsloth/issues/7792) shows a case where weights are bit-exact but generation is incoherent.
- **For multi-client/agent chat apps, per-chat async prompt queues are coming**: track [PR #7629](https://github.com/unslothai/unsloth/pull/7629) for parallel dispatch without cross-chat head-of-line blocking.
- **Before upgrading Studio on V100 or mixed AMD iGPU/dGPU hosts**, wait for or test [#7801](https://github.com/unslothai/unsloth/pull/7801) and [#7778](https://github.com/unslothai/unsloth/pull/7778). Also avoid Python 3.13.8 on Linux/WSL due to the torch import regression ([#7803](https://github.com/unslothai/unsloth/issues/7803)).
- **Tool calling for external/Ollama connections is still not supported** ([#7761](https://github.com/unslothai/unsloth/issues/7761)); plan agent tool loops around chat completions only for now.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*