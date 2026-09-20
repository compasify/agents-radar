# AI Infrastructure Digest 2026-09-19

> Generated: 2026-09-19 13:11 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-09-19**

---

### **1. Ecosystem Overview**  
The AI inference and serving ecosystem is rapidly maturing into a multi-layered, hardware-aware stack driven by hybrid architectures (DSA+Mamba, MoE), disaggregated inference, and specialized acceleration. Projects are converging on high-performance, low-latency execution for long-context agents and multimodal workflows, while grappling with stability in emerging backends like ROCm, AMD NPU, and Windows ARM64 CUDA. A clear divide is emerging between *highly optimized engines* (vLLM, SGLang) and *developer-friendly gateways* (Ollama, LiteLLM), each targeting distinct deployment profiles.

---

### **2. Activity Comparison**

| Project       | Open Issues (High/Critical) | PRs Merged (Last 24h) | Releases (Last 24h) | Stability Health |
|---------------|-----------------------------|------------------------|----------------------|------------------|
| vLLM          | 5 (3 🔴)                    | 7                      | None                 | ⚠️ Moderate       |
| SGLang        | 6 (3 🔴)                    | 8                      | v0.5.20              | ⚠️ Low            |
| llama.cpp     | 6 (2 🔴)                    | 6                      | b11052–b11045        | ⚠️ Low            |
| Ollama        | 5 (2 🔴)                    | 5                      | v0.34.3-rc1          | ❌ Poor           |
| LiteLLM       | 5 (4 🔴)                    | 4                      | None                 | ⚠️ Critical       |
| Unsloth       | 5 (3 🔴)                    | 5                      | v0.1.811-beta        | ⚠️ Moderate       |

> ✅ **Trend**: SGLang leads in release velocity and feature delivery; Ollama and LiteLLM face systemic stability issues despite active development.

---

### **3. Model Support Race**

| New Model / Architecture       | vLLM         | SGLang       | llama.cpp    | Ollama         | LiteLLM       | Unsloth        |
|-------------------------------|--------------|--------------|--------------|----------------|---------------|----------------|
| **GLM-5.3-Flash (KDA + sparse MLA)** | ✅ CPU support | ✅ Full      | ❌            | ❌             | ❌            | ❌             |
| **GLM-5.3-Flash (DSA + Mamba)**   | ❌           | ✅ First-class | ❌           | ❌             | ❌            | ❌             |
| **Qwen4Exp (HC_PRE/POST)**        | ✅ Metal/SYCL/CUDA | ❌           | ✅ Full      | ❌             | ❌            | ❌             |
| **Qwen3.8-Flash-Next (MTP)**      | ❌           | ❌           | ❌           | ❌             | ❌            | ✅ Hotfix (v0.1.811-beta) |
| **DFlash Speculative Decoding**   | ✅ (HunyuanOCR) | ✅ (GLM-5.3-Flash) | ✅ (HunyuanOCR) | ❌             | ❌            | ❌             |
| **Prism Ternary GGUF (PQ2_0/PTQ1_0)** | ❌           | ❌           | ❌           | ❌             | ✅ Added        | ❌             |
| **Bonsai 1-bit/2-bit Quant (MLX)** | ❌           | ❌           | ❌           | ✅ Proposed     | ❌            | ❌             |

> 🏆 **Winner: SGLang** — fastest to integrate cutting-edge hybrid models (GLM-5.3-Flash DSA+Mamba).  
> 🥈 **Runner-up: vLLM** — leads in cross-platform correctness (CPU backends, ROCm, Intel XPU).  
> 🥉 **Notable Gap**: Ollama lags in model-specific optimizations; LiteLLM lacks native support for new quant formats.

---

### **4. Performance Frontier**

| Optimization Focus               | vLLM                          | SGLang                        | llama.cpp                     | Ollama                       | LiteLLM                      | Unsloth                     |
|----------------------------------|-------------------------------|-------------------------------|-------------------------------|------------------------------|------------------------------|-----------------------------|
| **KV Cache & Transfer**          | ✅ Shared planning primitives | ✅ HiCache auto-sizing        | ❌ Context persistence bugs   | ❌ State leaks (ROCm)        | ❌ Streaming fallback issues | ✅ Improved for 200k context |
| **Batching & Parallelism**       | ✅ Sequence-parallel fusion   | ✅ MoE expert parallelism     | ✅ Batch tuning (ROCm)        | ✅ Per-device VRAM tracking  | ✅ Hosted vLLM batch support | ✅ Multi-GPU offloading     |
| **Quantization & Kernels**       | ✅ FP8 CUTLASS, MXFP8 GEMM    | ✅ W4A8 MoE, unified kernels  | ✅ q5_k, tiled VNNI, Hexagon  | ✅ Implicit tool call parsing | ✅ Cost-aware batching       | ✅ FP8/INT8 diffusion       |
| **Speculative Decoding**         | ✅ Hybrid GDN, kpool fixes    | ✅ DFlash, EAGLE, anchor validation | ✅ DFlash (HunyuanOCR)     | ❌ Silent discards           | ❌ Fallback corruption       | ✅ MTP hotfix (2x speedup)  |
| **Distributed & Disaggregated**  | ✅ CPU backends, RayExecutor  | ✅ DSA decode context PP      | ❌ Limited                   | ❌ No explicit support       | ✅ Proxy-level routing       | ✅ Multi-user Docker        |

> 🔥 **Top Focus Areas**:  
> - **vLLM/SGLang**: Cross-engine coordination and speculative decoding correctness.  
> - **Unsloth**: MTP drafting and GPU offloading for real-time agents.  
> - **llama.cpp**: Backend specialization (Metal, SYCL, Hexagon).

---

### **5. Layer Positioning**

| Project       | Primary Layer                | Key Differentiator                                 | Target User Profile                     |
|---------------|------------------------------|----------------------------------------------------|-----------------------------------------|
| **vLLM**      | **Serving Engine**           | High-throughput, stable, production-grade kernel fusion | Enterprise inference, cloud-scale LLM apps |
| **SGLang**    | **Serving Engine + Gateway** | Hybrid spec-decoding, deep MoE integration         | Agent systems, high-latency reasoning   |
| **llama.cpp** | **Local Runtime / Edge**     | Universal backend support, lightweight, CPU/GPU/NPU | On-device, edge, embedded systems        |
| **Ollama**    | **Gateway / CLI Tool**       | Developer-first UX, local-first model management   | Devs, researchers, hobbyists            |
| **LiteLLM**   | **API Gateway / Proxy**      | Unified API, cost tracking, provider abstraction  | SaaS platforms, multi-provider billing  |
| **Unsloth**   | **Training + Inference SDK** | Fast training/inference combo, MTP optimization   | ML engineers, fine-tuning teams         |

> 💡 **Strategic Insight**: The stack is bifurcating—**engineers** use vLLM/SGLang for scale, **developers** use Ollama/LiteLLM for agility, **edge teams** lean on llama.cpp, and **researchers** rely on Unsloth.

---

### **6. Trend Signals**

1. **Hybrid Architectures Are Mainstream**  
   GLM-5.3-Flash (DSA+Mamba+MoE+FP8) is now live across vLLM, SGLang, and llama.cpp—indicating that next-gen models demand heterogeneous backends and careful kernel orchestration.

2. **Disaggregation Is the Future**  
   CPU backends for GLM-5.3-Flash (vLLM), multi-node RayExecutor (vLLM), and tensor offloading (Unsloth) signal a shift toward **hybrid CPU-GPU inference**, enabling cold-start and edge deployment.

3. **Speculative Decoding Is Fragile**  
   Multiple high-severity bugs in `DFLASH`, `EAGLE`, and `MTP` highlight that **speculative decoding remains error-prone**, especially under TP>1 or mixed hardware. Developers must validate output rigorously.

4. **Cost Transparency Drives Adoption**  
   LiteLLM’s focus on accurate pricing (GPT-5.6 Luna, DeepSeek Flash) and Ollama’s `thinking` controls show that **cost and reasoning control** are becoming non-negotiable for agent workflows.

5. **Stability Trumps Features**  
   Despite rapid innovation, projects like Ollama, LiteLLM, and Unsloth are plagued by critical regressions—**stability is the new bottleneck**. Teams should prioritize testing over novelty.

---

### **Recommendations for Application Developers**
- **For production agents**: Use **vLLM or SGLang** with validated models (e.g., GLM-5.3-Flash) and avoid speculative decoding until open issues are resolved.
- **For edge/local inference**: Prefer **llama.cpp** with `q5_k` and `tiled mul_mat` for CPU efficiency.
- **For developer speed**: Use **Ollama** only with pinned versions (`0.32.6`) and avoid `deepseek-v4.1-flash:cloud` and ROCm MoE models.
- **For cost-aware SaaS**: Leverage **LiteLLM** with updated pricing files and disable `?model=` query bypasses.
- **For real-time agents**: Test **Unsloth’s MTP mode** carefully—use `--draft-mode mtp` only after verifying against #11143.

> 📌 **Bottom Line**: The infrastructure is powerful—but **correctness, stability, and cost predictability** are now the key differentiators. Choose based on your risk tolerance, not just raw speed.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-09-19**

---

### **1. Today's Highlights**  
The vLLM project continues to deepen its support for hybrid and disaggregated serving, with key PRs enabling CPU execution paths for GLM-5.3-Flash (KDA & sparse MLA) and refining KV transfer semantics across engines. Critical stability fixes address silent CUDA memory access issues in GLM-5.3-Flash on 4x B200 systems and a long-standing OOM during CUDA graph capture under high GPU utilization.

---

### **2. Releases & Breaking Changes**  
None reported in the last 24 hours. No new releases or breaking API/config changes observed.

---

### **3. New Model & Hardware Support**  
- ✅ **GLM-5.3-Flash (GLM5Next)**: Draft PRs #57496 and #57687 introduce correctness-first **CPU backends** for both KDA (gated delta-rule linear attention) and sparse MLA/keypool components, enabling full CPU inference support for this hybrid model.  
- ✅ **ROCm Support**: PR #57526 adds dedicated ROCm path for Hy4 model, compiling backbone with `@support_torch_compile` to avoid silent fallback to `cudagraph_mode=NONE`.  
- ✅ **Intel GPU (XPU)**: PR #57692 fixes RayExecutorV2 GCS propagation race and extends Intel CI coverage, improving reliability for multi-node deployments.  
- ✅ **Multimodal Expansion**: PR #57441 adds **video input support** to the Transformers backend via `processor._get_num_multimodal_tokens(video_sizes=...)`, following prior audio support.

---

### **4. Performance & Optimization**  
- 🔧 **Kernel Fusion**: PR #57428 fuses MXFP8 `wo_b` GEMM with sequence-parallel reduce-scatter for DeepSeek-V4.1, reducing HBM round trips and kernel launches—critical for large MoE models under TP.  
- 🚀 **ROCm Optimizations**: PR #53623 enables AITER GDN decode fast path for flat QKVZ layouts (e.g., Qwen3.5), removing unnecessary fallback to generic kernels.  
- ⚡ **FP8 Efficiency**: PR #53400 switches SM100 per-tensor FP8 linear kernels from FlashInfer to CUTLASS, achieving ~2× speedup in prefill throughput.  
- 📊 **KV Transfer Planning**: PR #57373 proposes sharing transfer planning primitives across KV connectors to improve cross-engine coordination efficiency.

---

### **5. Stability & Regressions**  
| Severity | Issue | Impact | Fix Status | Link |
|--------|------|--------|-----------|------|
| 🔴 High | Silent CUDA illegal memory access on 4x B200 (GLM-5.3-Flash) | Crashes after long decode; affects production workloads | Open | [#54317](https://github.com/vllm-project/vllm/issues/54317) |
| 🔴 High | OOM during CUDA graph capture at `--gpu-memory-utilization 0.98` | Fails startup despite passing allocation check | Open | [#57475](https://github.com/vllm-project/vllm/issues/57475) |
| 🟡 Medium | Speculative decoding silently disables prefix-cache hits in hybrid GDN models | Degraded performance for long-context reasoning | Open | [#54360](https://github.com/vllm-project/vllm/issues/54360) |
| 🟡 Medium | GLM-5.3-Flash kpool indexer overwrites KV cache on ROCm | Silent data corruption; long-context recall degrades | Open | [#54359](https://github.com/vllm-project/vllm/issues/54359) |
| 🟢 Low | Tool parser drops tool calls in chunked streams | Incorrect output in streaming scenarios | Fixed | [#57551](https://github.com/vllm-project/vllm/pull/57551) |

---

### **6. What This Means for Application Developers**  
- **For long-context agents**: Be cautious with `--gpu-memory-utilization > 0.97` on high-end GPUs—use 0.96–0.97 to avoid silent OOM during graph capture ([#57475](https://github.com/vllm-project/vllm/issues/57475)).  
- **For hybrid/disaggregated apps**: The new CPU backends for GLM-5.3-Flash (PRs #57496, #57687) open doors for cold-start inference and edge deployment—but verify correctness first.  
- **For tool-using agents**: Ensure `response_format` and `tool_choice: "auto"` are used carefully—this combo can suppress tool calls ([#39929](https://github.com/vllm-project/vllm/issues/39929)).  
- **For real-time systems**: Use `try-finally` wrappers around connection handlers (fixed in [#57690](https://github.com/vllm-project/vllm/pull/57690)) to prevent resource leaks.  

> 💡 *Pro tip*: Monitor `NIXL_TELEMETRY_ENABLE=1` when using NIXL connectors—missing telemetry can trigger crashes in transfer tracking ([#57403](https://github.com/vllm-project/vllm/pull/57403)).

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-09-19**

---

### **1. Today's Highlights**  
The SGLang ecosystem saw significant momentum in speculative decoding and GLM-5.3-Flash integration, with v0.5.20 releasing support for the new hybrid DSA+Mamba+FP8 MoE model. Critical fixes were merged to stabilize HiCache, improve draft layout validation, and address memory corruption risks in MoE expert parallelism. Notably, multiple PRs advanced DFlash and EAGLE spec-decoding correctness across diverse hardware backends.

---

### **2. Releases & Breaking Changes**  
- **v0.5.20** released today with full support for **GLM-5.3-Flash (DSA+mamba hybrid)** and improved DFlash V2 behavior under TP>1.  
  🔗 [Release Notes](https://github.com/sgl-project/sglang/releases/tag/v0.5.20)  
  ✅ *No breaking API changes reported; backward compatibility preserved.*

---

### **3. New Model & Hardware Support**  
- **GLM-5.3-Flash**: First-class support added via #36507, enabling hybrid DSA + Mamba + FP8 MoE (289 experts) inference on Hopper and Blackwell GPUs.  
  🔗 [Cookbook Entry](https://docs.sglang.io/cookbook#glm-53-flash)  
- **ROCm Support Expansion**:  
  - Fix for `int32` overflow in paged cache indexing on MI300X (gfx942) — #40351  
  - Addressed ROCm-specific quantization saturation issues in all-reduce paths — #40084  
- **NPU / Ascend Support**:  
  - Fixed FP32 routing weight downcasting in `AscendTPDispatcher` — #39394  
  - Added decode context parallel support for DSA models — #37787  

---

### **4. Performance & Optimization**  
- **Speculative Decoding Improvements**:  
  - Optimized draft embedding and LM-head copy release timing to prevent premature KV pool shrinking — #36452  
  - Fused dense prefill indexer candidate masks into top-k selection for DeepSeek-V4.1 — #40352  
- **MoE & Memory Efficiency**:  
  - Prevented FlashInfer autotune cache discarding at boot under EP>1 due to per-rank shape mismatches — #40320  
  - Improved HiCache host pool auto-sizing to avoid OOM in memory-constrained environments — #40135  
- **Kernel-Level Optimizations**:  
  - Optimized W4A8 MoE kernels for GLM-5.2 on H200 — #38220  
  - Unified kernel fusion for GLM-5.3-Flash KDA projections and metadata — #39688  

---

### **5. Stability & Regressions**  
| Severity | Issue | Summary | Status | PR/Link |
|--------|------|---------|--------|--------|
| 🔴 High | `DFLASH` draft layout assumed but not validated | Anchor-first checkpoint shifts silently → incorrect token alignment | Open | [#40144](https://github.com/sgl-project/sglang/issues/40144) |
| 🔴 High | `EAGLE` spec-decode: `num_token_non_padded = 0` | Masks all draft topk IDs → corrupts MoE dispatch | Open | [#40156](https://github.com/sgl-project/sglang/issues/40156) |
| 🔴 High | GLM-5.3-Flash: No usable DSA attention backend on SM121 | TRTLLM only supports SM100; tilelang exceeds smem; Triton ROCm-only | Open | [#40286](https://github.com/sgl-project/sglang/issues/40286) |
| 🟡 Medium | `hicache` staged write-back faults on `cudaMemcpyBatchAsync` | Host VA passed where `CanUseHostPointerForRegisteredMem == 0` | Open | [#40232](https://github.com/sgl-project/sglang/issues/40232) |
| 🟡 Medium | `Qwen3CoderDetector`: duplicated tag truncates arguments | Silent overwrite of earlier matches during parameter parsing | Open | [#39836](https://github.com/sgl-project/sglang/issues/39836) |

---

### **6. What This Means for Application Developers**  
- **Build robust agents using GLM-5.3-Flash**: Leverage its hybrid DSA+Mamba architecture for low-latency, high-throughput reasoning — especially effective in long-context or multi-turn settings.  
- **Avoid silent correctness bugs**: Be cautious with `DFLASH` drafts and `EAGLE` speculative decoding — validate output when using `--enable-dp-attention` or `--speculative-decoding`.  
- **Ensure proper memory management**: Use `SGLANG_DEBUG_MEMORY_POOL` (now being made effective on default allocators — #40305) to debug memory pool leaks.  
- **Watch for backend-specific gotchas**: On ROCm (MI300X), expect potential float saturation in all-reduce; on NPU, verify FP32 routing precision.  
- **Optimize tool calling**: The Python/Rust prompt discrepancy (#39843) may affect agent consistency — consider rendering prompts offline before submission.

👉 For production use, pin to **v0.5.20** and monitor open issues related to `EAGLE`, `DFLASH`, and `HiCache` stability.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# **llama.cpp Digest – 2026-09-19**

---

### **1. Today's Highlights**  
The latest development cycle shows strong momentum in backend specialization and model-specific optimizations, particularly for Qwen4Exp and DSV4-style models across Metal, SYCL, and CUDA. Critical fixes address GPU stability issues on AMD Strix Halo (ROCm) and RTX 5090 (CUDA), while new support for `q5_k` quantization and `DFlash` speculative decoding expands deployment flexibility.

---

### **2. Releases & Breaking Changes**  
- **b11052**: Fixed JSON schema regex parsing to accept escaped hyphens (`\-`) — a compatibility fix for grammar-based validation systems ([PR #29127](https://github.com/ggml-org/llama.cpp/pull/29127)).  
- **b11050**: Patched Metal FA support checks to prevent misconfiguration on Apple Silicon devices ([PR #29122](https://github.com/ggml-org/llama.cpp/pull/29122)).  
- **b11048**: Added full support for Qwen4Exp’s new `hc_pre` (gated sigmoid) and `hc_post` (identity mixing) ops in Metal backend ([PR #29000](https://github.com/ggml-org/llama.cpp/pull/29000)).  
- **b11045–b11044**: Hexagon backend now supports `ROLL` op and enhanced `IM2COL` with 1D/padded kernels and blocked staging ([PR #29105](https://github.com/ggml-org/llama.cpp/pull/29105), [PR #29103](https://github.com/ggml-org/llama.cpp/pull/29103)).

> ✅ *No breaking API changes reported today; all updates are additive or corrective.*

---

### **3. New Model & Hardware Support**  
- **Models**:  
  - Full support for **Qwen4Exp** (including DSV4 HC variants) on Metal, SYCL, and CUDA backends ([PR #29000](https://github.com/ggml-org/llama.cpp/pull/29000), [PR #29132](https://github.com/ggml-org/llama.cpp/pull/29132)).  
  - Added **DFlash** speculative decoding support for **HunyuanOCR** via GGUF conversion pipeline ([PR #28890](https://github.com/ggml-org/llama.cpp/pull/28890)).  
- **Hardware & Backends**:  
  - **Hexagon NPU**: New `q5_k` quant support and advanced `IM2COL`/`ROLL` kernel improvements ([PR #29123](https://github.com/ggml-org/llama.cpp/pull/29123), [PR #29105](https://github.com/ggml-org/llama.cpp/pull/29105)).  
  - **SYCL**: Experimental support for gated DSV4_HC_PRE and optional HC_POST comb matrices ([PR #29132](https://github.com/ggml-org/llama.cpp/pull/29132)).  
  - **OpenCL**: Added `flash_attn_f32_f16_bin` and `kernel_gemm_noshuffle_q6_k_f32_32b_trans_ila_a8_bin` kernels ([PR #29046](https://github.com/ggml-org/llama.cpp/pull/29046), [PR #28678](https://github.com/ggml-org/llama.cpp/pull/28678)).  
  - **CUDA**: Added F16 kernel support for `CONV_2D_DW` op ([PR #29064](https://github.com/ggml-org/llama.cpp/pull/29064)).

---

### **4. Performance & Optimization**  
- **Metal**: Optimized flash attention tuning via family-based keying (`fa_vec_tuned_table`) improves cache hit rate across Apple GPUs ([PR #29075](https://github.com/ggml-org/llama.cpp/pull/29075)).  
- **CPU**: Tiled `mul_mat` using VNNI enables **3–7x speedup** for k-quants on modern x86 CPUs ([PR #27851](https://github.com/ggml-org/llama.cpp/pull/27851)).  
- **HIP/ROCm**: Tuned MMVQ batch thresholds for RDNA3.5 GPUs improves throughput in batched generation scenarios ([PR #28613](https://github.com/ggml-org/llama.cpp/pull/28613)).  
- **SYCL**: Avoids slow oneDNN fallbacks on unsupported architectures (e.g., Xe-LP), preventing **80x performance degradation** ([PR #28890](https://github.com/ggml-org/llama.cpp/pull/28890)).

---

### **5. Stability & Regressions**  
- **Critical Crashes**:  
  - **CUDA graphs hang GPU channel** on RTX 5090 sm_120 (likely due to improper kernel launch configuration); workaround: `GGML_CUDA_DISABLE_GRAPHS=1` ([Issue #27330](https://github.com/ggml-org/llama.cpp/issues/27330)).  
  - **Qwen4Exp aborts at first decode on Vulkan (gfx1151)** — reproducible on RADV driver; no fix yet ([Issue #29028](https://github.com/ggml-org/llama.cpp/issues/29028)).  
- **Correctness Bugs**:  
  - **ROCm/Gfx1151**: Wrong logits returned when prompt length exceeds `n_ubatch`, affecting accuracy ([Issue #28211](https://github.com/ggml-org/llama.cpp/issues/28211)).  
  - **Hybrid Models**: Context checkpoints silently invalidated; prompt reuse lost across sessions ([Issue #25700](https://github.com/ggml-org/llama.cpp/issues/25700), [Issue #25913](https://github.com/ggml-org/llama.cpp/issues/25913)).  
- **Memory Issues**:  
  - **SYCL dual-GPU stuck during model load**; likely due to improper memory synchronization ([Issue #27547](https://github.com/ggml-org/llama.cpp/issues/27547)).  
  - **SYCL `sysman` free-memory query may be unavailable**, causing incorrect memory estimation ([Issue #28239](https://github.com/ggml-org/llama.cpp/issues/28239)).

> ⚠️ *Fix PRs exist for some issues (e.g., #29064, #28890), but critical regressions like Qwen4Exp Vulkan crash remain unresolved.*

---

### **6. What This Means for Application Developers**  
- **Use `--fit` with caution on SYCL** — memory estimation is still unreliable; consider manual allocation tuning.  
- **Avoid CUDA graphs on RTX 5090** until the issue is patched; disable via `GGML_CUDA_DISABLE_GRAPHS=1`.  
- **Leverage new Qwen4Exp support** on Metal/SYCL/CUDA for high-performance inference on vision-language models.  
- **Optimize CPU inference** with `q5_k` quantization and tiled matmuls (via `ggml-cpu` improvements).  
- **Expect slower performance on Intel Arc under SYCL** compared to Vulkan — this remains an open gap ([Issue #26010](https://github.com/ggml-org/llama.cpp/issues/26010)).  
- **Validate model loading on AMD Strix Halo (ROCm)** — known perf regression on CPU input layers; monitor for updates.

> 📌 *For production deployments: prefer stable builds (e.g., b11045+), avoid experimental features on edge hardware, and test context persistence in hybrid/recurrent models.*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# **Ollama Digest – 2026-09-19**

---

### **1. Today's Highlights**  
The latest release, `v0.34.3-rc1`, introduces explicit **thinking controls** via `GET /api/show`, enabling clients to query a model’s reasoning configuration (`low`, `high`, `max`) and default behavior—critical for agent workflows. Meanwhile, urgent stability issues have emerged around **DeepSeek-v4.1-flash:cloud** silently discarding image inputs despite advertising vision capabilities, and **Qwen3.8 MoE models on ROCm** suffering from cross-request state leaks, both impacting production inference reliability.

---

### **2. Releases & Breaking Changes**  
- **`v0.34.3-rc1`**: Now exposes model-specific `thinking` settings through `/api/show`:  
  ```json
  {
    "thinking": {
      "values": ["low", "high", "max"],
      "default": "max"
    }
  }
  ```
  [GitHub Issue #18509](https://github.com/ollama/ollama/issues/18509) | [PR #17566](https://github.com/ollama/ollama/pull/17566)

> 💡 *Note: This change enables dynamic control of reasoning depth per model, but requires client updates to leverage the new field.*

---

### **3. New Model & Hardware Support**  
- **Mistral Small 4**: Requested for inclusion in Ollama Models ([#15142](https://github.com/ollama/ollama/issues/15142)) — open-source successor to Mistral Small 3.2 with improved efficiency and performance.
- **MLX Backend Expansion**:  
  - Added support for `gliner-small-v2.1` via MLX runner ([#18535](https://github.com/ollama/ollama/pull/18535)).  
  - Proposed support for **Bonsai’s 1-bit/2-bit quantized weights** in MLX backend ([#18515](https://github.com/ollama/ollama/issues/18515)).
- **Prism Ternary GGUFs (PQ2_0/PTQ1_0)**: Import fails due to unsupported tensor size overflows; tracking issue opened ([#18521](https://github.com/ollama/ollama/issues/18521)).

---

### **4. Performance & Optimization**  
- **Memory Management Improvements**:  
  - PRs [#18197](https://github.com/ollama/ollama/pull/18197), [#18198](https://github.com/ollama/ollama/pull/18198), and [#18201](https://github.com/ollama/ollama/pull/18201) now report per-device VRAM usage and available memory — crucial for multi-GPU systems.  
  - Predictive VRAM estimation based on head dimensions and load history is being integrated into runtime planning.
- **Tool Call Parsing Optimizations**:  
  - PRs [#18538](https://github.com/ollama/ollama/pull/18538) and [#18532](https://github.com/ollama/ollama/pull/18532) add support for **implicit `<function=...>` tool call openers** in Qwen3-Coder, reducing parsing failures when models omit the `<tool_call>` tag.

---

### **5. Stability & Regressions**  
| Severity | Issue | Impact | Fix Status |
|--------|------|--------|------------|
| 🔴 Critical | `deepseek-v4.1-flash:cloud` silently discards image input despite `vision` in `capabilities` | Breaks multimodal agents using DeepSeek Cloud | [Closed #18527](https://github.com/ollama/ollama/issues/18527) |
| 🔴 Critical | ROCm: Qwen3.5-family hybrid GDN models leak prior request state across sessions | Incorrect responses, security risk | [Open #18528](https://github.com/ollama/ollama/issues/18528) |
| 🟡 High | MLX: Gemma 4 MoE fails to load with “missing MoE expert weights” | Blocks local execution of cutting-edge models | [Open #18540](https://github.com/ollama/ollama/issues/18540) |
| 🟡 High | Vulkan iGPU (Intel Iris Xe): `qwen2.5:14b` fails with `ErrorOutOfDeviceMemory` on 0.33.3+ | Regression from 0.32.6; affects low-RAM laptops | [Open #18531](https://github.com/ollama/ollama/issues/18531) |
| 🟡 Medium | `gpt-oss:20b` (MXFP4) crashes during CUDA ADD_ID in short two-message chat | Deterministic crash under sustained load | [Open #18522](https://github.com/ollama/ollama/issues/18522) |

> ⚠️ Multiple regressions tied to recent releases (`0.34.2`, `0.34.3-rc1`) indicate instability in GPU backends (ROCm, Vulkan, MLX).

---

### **6. What This Means for Application Developers**  
- **Agent Builders**: The new `thinking` control via `/api/show` enables **fine-grained reasoning budgeting**—useful for optimizing cost and latency in LLM agents. However, ensure your clients parse `reasoning_content` (not just `reasoning`) to avoid silent data loss ([#18534](https://github.com/ollama/ollama/issues/18534), [PR #18536](https://github.com/ollama/ollama/pull/18536)).
- **Multimodal Apps**: Avoid `deepseek-v4.1-flash:cloud` until fix is released—image input is not processed, even if advertised.
- **Hardware-Specific Workarounds**:  
  - Use `OLLAMA_NUM_PARALLEL=1` cautiously on MLX/NVIDIA—some configurations stall indefinitely ([#18505](https://github.com/ollama/ollama/issues/18505)).  
  - On Intel iGPUs, downgrade to `0.32.6` if `qwen2.5:14b` fails due to KV cache allocation.
- **Model Portability**: Consider fallback strategies for models like `qwen3-coder:30b` that may omit tool-call openers—implement robust parser logic or use patched versions.

> ✅ **Recommendation**: Monitor `v0.34.3` stable release closely; expect hotfixes for critical GPU backend bugs before widespread adoption.

---  
*Digest generated from GitHub data: [github.com/ollama/ollama](https://github.com/ollama/ollama)*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-09-19**

---

### **1. Today's Highlights**  
The LiteLLM ecosystem continues to expand its proxy and cost-tracking capabilities, with critical updates to model pricing synchronization (OpenRouter, Azure), improved batch handling for hosted vLLM deployments, and enhanced support for OpenAI project tagging in file/batch operations. Key stability fixes address long-standing issues in virtual key rate limiting, streaming fallback behavior, and incorrect cost calculation for high-context models like GPT-5.6 Luna.

---

### **2. Releases & Breaking Changes**  
*No new releases were published in the last 24 hours.*  

However, several **critical CI/CD PRs** were merged or submitted that impact production usage:  
- ✅ [`#41833`](https://github.com/BerriAI/litellm/pull/41833): Synced 173 OpenRouter models and added 2 new ones; addresses drift from provider pricing pages.  
- ✅ [`#41842`](https://github.com/BerriAI/litellm/pull/41842): Updated Azure pricing with 5 new models and 5 deprecation dates — required for accurate billing.  
- 🔧 [`#41949`](https://github.com/BerriAI/litellm/pull/41949): Fixed `/key/bulk_update` to avoid unintended nullification of `max_budget`, `team_id`, and `budget_id`.  
- 🔧 [`#41942`](https://github.com/BerriAI/litellm/pull/41942): Enables hosted_vLLM batch processing via LiteLLM proxy — resolves 404 errors on `/v1/batches`.

> ⚠️ **Migration Note**: Users relying on OpenRouter or Azure model pricing should ensure their `model_prices_and_context_window.json` is updated post-PRs.

---

### **3. New Model & Hardware Support**  
- 🟢 Added **TopxAI** as a JSON-configured OpenAI-compatible provider ([`#41919`](https://github.com/BerriAI/litellm/pull/41919)) with 9 supported models.  
- 🟢 Added **Prism** provider (internal copy) — likely targeting enterprise or private inference backends ([`#41961`](https://github.com/BerriAI/litellm/pull/41961)).  
- 🟢 Supported **Kimi-K2.6** in Together AI’s model catalog ([`#27450`](https://github.com/BerriAI/litellm/issues/27450), now resolved).  
- 🟢 Added **gpt-5.6-sol** from OpenRouter to model catalog ([`#40102`](https://github.com/BerriAI/litellm/issues/40102), fix PR pending).

> 💡 *Note*: The addition of `gpt-5.6-sol` and `gpt-5.6-luna-*` snapshots requires careful cost mapping — fixed via [`#41423`](https://github.com/BerriAI/litellm/pull/41423) and [`#35783`](https://github.com/BerriAI/litellm/pull/35783).

---

### **4. Performance & Optimization**  
- ✅ [`#41955`](https://github.com/BerriAI/litellm/pull/41955): Introduced durable cross-pod settlement for background interaction billing — ensures consistent spend tracking across replicas.  
- ✅ [`#41960`](https://github.com/BerriAI/litellm/pull/41960): Applies off-peak pricing to DeepSeek V4.1 Flash and V4 Pro outside peak hours — reduces billing by up to 50% during non-peak windows.  
- ✅ [`#39861`](https://github.com/BerriAI/litellm/pull/39861): Correctly bills long-context OpenAI batches (>272K tokens) at tiered rates — previously underbilled by 2x input, 1.5x output.  
- 🚀 [`#41567`](https://github.com/BerriAI/litellm/pull/41567): Added `GunzipRequestMiddleware` to decompress gzip-encoded request bodies — prevents 400 errors on compressed payloads.

---

### **5. Stability & Regressions**  
High-severity bugs reported today include:  
- 🔴 **Virtual Key TPM Limiting Failure** ([#24677](https://github.com/BerriAI/litellm/issues/24677)): Rate limits not enforced after virtual key caching — impacts multi-tenant billing integrity. *Fix PRs exist but not yet merged*.  
- 🔴 **Per-Customer RPM Limits Ignored After Cache Hit** ([#39713](https://github.com/BerriAI/litellm/issues/39713)): Budget-based RPM limits fail when virtual keys are cached — risk of overbilling. *No fix PR yet*.  
- 🔴 **Mid-Stream Fallback Sends Invalid Assistant Prefill Block** ([#27967](https://github.com/BerriAI/litellm/issues/27967)): Breaks fallbacks on Claude Sonnet 4.6 / Opus 4.7 due to unsupported `prefix=True`. *Resolved in PR #31067, but context corruption remains a risk*.  
- 🔴 **GPT-5.6 Cross-Region Bedrock Fails on Image Input** ([#40080](https://github.com/BerriAI/litellm/issues/40080)): Incorrect routing to Converse endpoint instead of OpenAI-compatible path — blocks image-capable models. *Pending fix*.  
- 🔴 **`/v1/messages` Ignores Timeout Settings** ([#30836](https://github.com/BerriAI/litellm/issues/30836)): Hard-capped at 600s regardless of `timeout` config — kills long-running streams. *Critical for real-time agents*.

> ⚠️ These regressions suggest ongoing challenges in **rate-limiting consistency**, **streaming fallback logic**, and **provider-specific routing edge cases**.

---

### **6. What This Means for Application Developers**  
- **Avoid relying on `?model=` query strings** for model access control — a known bypass vulnerability ([#41810](https://github.com/BerriAI/litellm/issues/41810)). Use API keys with explicit `model_allowlist` or `model_blocklist`.  
- **Monitor cost discrepancies** for GPT-5.6 variants and DeepSeek models — recent fixes ensure accurate billing, but older deployments may still be mischarged.  
- **Use `enable_azure_ad_token_refresh` consistently** — it’s now honored for non-chat paths (e.g., image generation) via [`#37727`](https://github.com/BerriAI/litellm/issues/37727).  
- **Handle large batch inputs carefully** — use `batch_size` and `context_length` checks to avoid hitting OpenAI’s long-context tier without proper cost modeling.  
- **Expect intermittent failures with Claude Code 2.1.104** until upstream issue is resolved — consider pinning to stable versions or using alternative providers.

> ✅ **Pro Tip**: Leverage the latest `model_prices_and_context_window.json` syncs (`#41833`, `#41842`) to prevent silent cost miscalculations in production systems.

---  
*Digest compiled from GitHub activity (BerriAI/litellm) — 2026-09-19*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# **Unsloth Digest – 2026-09-19**

---

### **1. Today's Highlights**  
The **v0.1.811-beta** release introduces major enhancements to Docker, multi-user support, and expanded hardware compatibility—including RDNA1+2 GPUs, FP8/INT8 diffusion, ARM64 CUDA on Windows, and improved training/inference workflows. A critical **Qwen3.8-Flash-Next MTP hotfix delivers up to 2x faster inference**, addressing a high-priority performance regression reported in the community.

---

### **2. Releases & Breaking Changes**  
- **v0.1.811-beta** (GitHub: [Release](https://github.com/unslothai/unsloth/releases/tag/v0.1.811-beta))  
  - Introduces **multi-user account support** in Docker deployments.  
  - Adds **AMD RDNA1+2 GPU support**, **ARM64 CUDA on Windows**, and **FP8/INT8 diffusion model inference**.  
  - Includes **Qwen3.8-Flash-Next MTP hotfix** (2x faster MTP) via `--draft-mode mtp` and optimized kernel scheduling.  
  - *Migration Note:* Users upgrading from v0.1.810-beta should verify their GGUF loading logic due to regression reports around inference throughput.

---

### **3. New Model & Hardware Support**  
- **New Models**: Qwen3.8-Flash-Next (with MTP optimization), support for **UD-IQ4_XS**, **UD-Q4_K_XL** GGUF variants.  
- **Hardware Backends**:  
  - Full **AMD RDNA1+2** GPU support (via ROCm).  
  - **ARM64 CUDA** on Windows (preview).  
  - **Vulkan training/fine-tuning** now under feature request (#11184); no implementation yet.  
- **Quantization Formats**: FP8, INT8, IQ4_XS, Q4_K_XL (GGUF), with offloading support for large models (e.g., MoE).

---

### **4. Performance & Optimization**  
- **Qwen3.8-Flash-Next MTP Inference**: Up to **2x speedup** post-hotfix (#11143).  
- **MTP Drafting**: Optimized for low-latency speculative decoding; reduced graph build overhead.  
- **Multi-GPU Offloading**: Improved tensor splitting (`--tensor-split`) handling—though a bug exists where Studio strips flags (#11330).  
- **GPU Memory Efficiency**: Enhanced KV cache management for 200k context windows on RTX 5090 (32GB VRAM).  
- **Build-Time Optimizations**: `uv` reuse during updates (#10659), and removal of redundant Colab `.devN` markers (#11326) improve CI stability.

---

### **5. Stability & Regressions**  
| Severity | Issue | Summary | Fix Status |
|---------|------|--------|------------|
| 🔴 High | [#11143](https://github.com/unslothai/unsloth/issues/11143) | Qwen3.8-Flash-Next MTP aborts at load due to `hc_head_norm` rebase error | ❌ Open |
| 🔴 High | [#11221](https://github.com/unslothai/unsloth/issues/11221) | GGUF inference throughput regression after v0.1.810-beta | ❌ Open |
| 🔴 High | [#11219](https://github.com/unslothai/unsloth/issues/11219) | MTP drafter crashes on RTX 5080 with `ggml_can_repeat` assertion | ❌ Open |
| 🟡 Medium | [#11330](https://github.com/unslothai/unsloth/issues/11330) | Studio strips `--tensor-split`, causing OOM on multi-GPU MoE + CPU offload | ❌ Open |
| 🟡 Medium | [#11308](https://github.com/unslothai/unsloth/issues/11308) | DFlash sidecar + `--split-mode tensor` asserts on ROCm (gfx1201) | ✅ Fixed upstream (#27858), awaiting patch |
| 🟢 Low | [#11327](https://github.com/unslothai/unsloth/issues/11327) | No config option for backend install dir on Windows | ✅ Feature request |

> **Note:** Backend CI is red due to Python 3.13 l-r test failures (#11241), linked to state leakage from prior tests—no fix PR yet.

---

### **6. What This Means for Application Developers**  
- **For LLM Agents & Apps**: Leverage the **Qwen3.8-Flash-Next MTP acceleration** for sub-100ms latency in speculative decoding—ideal for real-time chat and agent workflows. Use `--draft-mode mtp` with caution until #11143 is resolved.  
- **For Multi-User Deployments**: The new Docker + multi-user support enables secure, isolated inference environments—critical for SaaS or enterprise gateways.  
- **For Cross-Platform DevOps**: ARM64 CUDA on Windows and AMD RDNA1+2 support expand deployment options beyond NVIDIA. However, **Vulkan training remains unsupported**—consider alternative frameworks if needed.  
- **For Model Serving**: Avoid using `--tensor-split` in Studio unless you're confident about your setup—current behavior strips it silently (#11330). Prefer explicit CLI control.  
- **For Debugging**: Enable full prompt logging via API monitor (#11282) and use `--ctx-checkpoints` for long-context stability. Monitor `studio.setup.ps1` for path issues in spaces-in-username environments (#11290).  

> **Pro Tip**: Pin to `v0.1.811-beta` only after validating against your workload—some regressions are still active. Watch #11143 and #11221 for critical fixes.

---  
*Digest generated: 2026-09-19 | Source: [unslothai/unsloth GitHub](https://github.com/unslothai/unsloth)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*