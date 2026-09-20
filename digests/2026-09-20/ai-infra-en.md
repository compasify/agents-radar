# AI Infrastructure Digest 2026-09-20

> Generated: 2026-09-20 00:27 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-09-20**

---

### **1. Ecosystem Overview**  
The AI inference and serving ecosystem is entering a phase of *deep specialization and cross-layer integration*, driven by the rise of multimodal, MoE, and structured-output models. Key projects are converging on high-performance execution across diverse hardware—NVIDIA, AMD, Intel, and mobile SoCs—while simultaneously addressing stability in distributed workflows, speculative decoding, and agent reliability. Critical infrastructure gaps persist in tool call parsing, memory safety, and cross-GPU runtime handling, signaling that robustness remains a top-tier challenge despite performance gains.

---

### **2. Activity Comparison**  

| Project       | Issues Open (High/Critical) | PRs Merged (Last 72h) | Releases (Last 24h) | Status |
|---------------|-----------------------------|------------------------|---------------------|--------|
| **vLLM**      | 13 (4 × 🔴)                 | 8                      | None                | Stable |
| **SGLang**    | 15 (3 × 🔴)                 | 6                      | None                | Active |
| **llama.cpp** | 14 (3 × ⚠️/🔴)              | 9                      | 1 (v.b11057)        | Patched |
| **Ollama**    | 12 (4 × 🔴)                 | 3                      | None                | Regressing |
| **LiteLLM**   | 8 (2 × ⚠️/🔴)               | 5                      | None                | Evolving |
| **Unsloth**   | 10 (4 × 🔴)                 | 7                      | None                | Feature-rich |

> ✅ *Insight*: vLLM and llama.cpp lead in activity volume, but Ollama and Unsloth show higher concentrations of critical regressions, indicating instability in user-facing deployment pipelines.

---

### **3. Model Support Race**  

| Model / Architecture         | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|------------------------------|------|--------|-----------|--------|---------|---------|
| **Qwen3.5 / Qwen3.6**        | ✅ (Speculative Decoding issues) | ✅ (DSA backend missing on SM121) | ✅ (ROCm state leak) | ⚠️ (Tool call loss) | ✅ | ✅ |
| **GLM-5.3-Flash (glm5next)** | ✅ (CPU/KDA path) | ✅ (No DSA on SM121) | ✅ | ❌ (Not listed) | ✅ (via proxy) | ⚠️ (MTP load crash) |
| **Ling 3.0 (Bailing V3)**    | ❌ | ❌ | ✅ (v.b11057) | ❌ | ❌ | ❌ |
| **DeepSeek-V4.1-Flash**      | ❌ | ✅ (Stable) | ❌ | ✅ (DGX Spark DSA issue) | ✅ | ❌ |
| **MoE Models (e.g., Kimi-K3, Gemma-4-26B-A4B-it)** | ✅ (Mixed precision, MLA) | ✅ (Opt-in dedup) | ✅ (MoE support) | ⚠️ (Missing expert weights) | ✅ | ✅ (EXL3 backend) |
| **Vision-Language (VL)**     | ✅ (ViT CUDA graphs) | ❌ | ✅ (Ling 3.0 VL) | ❌ | ❌ | ❌ |

> 🏆 **Leader**: **llama.cpp** leads in on-device and edge model support (Ling 3.0, Hexagon), while **vLLM** dominates in large-scale MoE and multimodal serving. **Unsloth** is emerging as a leader in *quantized MoE* deployment via EXL3.

---

### **4. Performance Frontier**  

| Optimization Focus          | vLLM                          | SGLang                        | llama.cpp                     | Ollama                  | LiteLLM                   | Unsloth                    |
|-------------------------------|--------------------------------|-------------------------------|-------------------------------|-------------------------|---------------------------|----------------------------|
| **KV Cache & Offloading**     | ✅ Replicated layout detection | ✅ Unified sparsity, HiCache TMA staging | ❌ (State leak in ROCm) | ❌ (MTP regression)     | ✅ Prompt cache tracking  | ✅ Tensor-split preservation |
| **Batching & Prefill**        | ✅ Prefill-only batch alignment | ✅ Eager conv fusions         | ✅ BF16 prefill optimization  | ❌ (MTP regression)     | ✅ Headroom guardrail     | ✅ Multi-resident GGUF     |
| **Quantization & Kernels**    | ✅ Mixed `mxfp4`+`fp8`, XPU MRV2 | ✅ FlashInfer autotune fix    | ✅ NEON, AVX-VNNI, Hexagon ops | ❌ (SYCL race)          | ✅ FUSE v2 routing forecasts | ✅ EXL3 (2–8 bits, fractional) |
| **Distributed Serving**       | ✅ Elastic EP, CUDA graphs     | ✅ DP scheduler, MoE parallelism | ❌ (Multi-GPU races)        | ❌ (Mixed GPU runtime)  | ✅ MCP budgeting logic    | ✅ ROCm Docker parity      |
| **Structured Output**         | ⚠️ Tool call suppression       | ✅ JSON schema compilation    | ✅ `thinks` parser fix        | ⚠️ Silent tool loss     | ✅ Streaming null handling | ✅ Draft-vocab trimming fix |

> 🔥 **Frontier Hotspots**:  
> - **CUDA graph + ViT encoder** (vLLM)  
> - **HiCache staging + unified KV sparsity** (SGLang)  
> - **EXL3 quantization for MoE** (Unsloth)  
> - **Prompt caching + cost visibility** (LiteLLM)

---

### **5. Layer Positioning**  

| Project       | Primary Layer             | Core Differentiator                                  | Deployment Role                     |
|---------------|----------------------------|-------------------------------------------------------|-------------------------------------|
| **vLLM**      | **Inference Engine**       | High-throughput, low-latency serving for MoE/Multimodal | Production inference (cloud/datacenter) |
| **SGLang**    | **High-Performance Gateway** | Unified cache, dynamic routing, structured output     | Agent orchestration, LLM gateways   |
| **llama.cpp** | **Local Runtime / Edge**   | On-device inference, Hexagon/QC support, CPU/ARM acceleration | Edge devices, privacy-sensitive apps |
| **Ollama**    | **Developer Gateway**      | CLI-first UX, local model hosting, easy setup          | Dev environments, prototyping       |
| **LiteLLM**   | **Proxy & Orchestration**  | Cost control, multi-provider routing, observability   | Enterprise API gateways, billing   |
| **Unsloth**   | **Fine-Tuning + Studio**   | Training resumption, export safety, multi-model server | Research, training pipelines        |

> 🧩 **Strategic Insight**: The stack is bifurcating—**engineers** use vLLM/SGLang for production; **developers** rely on Ollama/llama.cpp for rapid iteration; **ops teams** depend on LiteLLM for cost control and routing.

---

### **6. Trend Signals**  

1. **MoE is the New Benchmark**: All major projects now prioritize MoE support—vLLM (mixed precision), SGLang (deduplication), Unsloth (EXL3)—indicating a shift toward efficient, scalable expert routing at scale.

2. **Structured Output Stability is a Bottleneck**: Persistent issues in tool calling (`qwen3-coder`, `minicpm5-2b`) and JSON schema parsing reveal that *agent reliability* is lagging behind model capability—expect more focus on validation layers.

3. **Hardware Diversity is Accelerating**: Support for Hexagon (Qualcomm), ROCm (AMD), Intel XPU, and WSL2 DXG bridge shows a clear move toward *cross-platform inference*, especially for edge and mobile use cases.

4. **Cost Visibility > Raw Speed**: LiteLLM’s focus on prompt caching savings, FUSE v2 forecasting, and rate-limiting fixes signals that *cost-aware inference* is now a core requirement—not just performance.

5. **Training-Fine-Tuning-Serving Convergence**: Unsloth’s integration of training resume, export hygiene, and multi-GGUF support reflects a growing trend: developers want *end-to-end lifecycle management* from fine-tuning to deployment.

> 💡 **Actionable Guidance for Developers**:  
> - Use **vLLM** or **SGLang** for high-throughput agent backends.  
> - Leverage **llama.cpp** for on-device or privacy-preserving inference.  
> - Monitor **Ollama** and **LiteLLM** for tool call integrity before deploying agents.  
> - Prioritize **EXL3 (Unsloth)** or **mixed-precision (vLLM)** for MoE efficiency.  
> - Audit all deployments for **prompt leakage risks** (e.g., ROCm state corruption) and **rate limit misconfigurations**.

---  
*Report compiled from GitHub digests: 2026-09-20 | For infrastructure engineers and technical decision-makers.*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-09-20**

---

### **1. Today's Highlights**  
The vLLM project continues to prioritize stability and performance for multimodal and large-scale MoE models, with key activity focused on resolving speculative decoding issues in Qwen3.5/3.6 and GLM-5.3-Flash under complex configurations (e.g., MTP, DP/TP, mixed quantization). A major PR (#57710) addresses a critical cancellation safety bug in Elastic EP state management, while ongoing work tracks full CUDA graph support for ViT encoders and improved KV transfer planning across engines.

---

### **2. Releases & Breaking Changes**  
*None*  
No new releases or breaking API/config changes were published in the last 24 hours. The latest stable release remains `v0.28.1rc1.dev580+g385dce36b`.

---

### **3. New Model & Hardware Support**  
- **GLM-5.3-Flash (glm5next)**: Active development for CPU backend support via KDA (Kimi Delta Attention), including tracking of `cpu_kda` path for hybrid MLA/KDA models ([#57346](https://github.com/vllm-project/vllm/issues/57346)).  
- **ROCm (gfx950 / MI355X)**: Ongoing optimization for `Qwen3.8-2.4T-A95B-Quark-MXFP4` model; performance gap identified between `AITER` and `ROCM_ATTN` backends ([#57149](https://github.com/vllm-project/vllm/issues/57149)).  
- **Mixed Precision**: ROCm support for mixed `mxfp4` + `fp8` checkpoints now in progress ([#57048](https://github.com/vllm-project/vllm/pull/57048)), enabling serving of Kimi-K3 models with heterogeneous expert routing.  
- **Intel GPU (XPU)**: MRV2 sampler now supports fused top-k/top-p sampling kernel on XPU ([#57277](https://github.com/vllm-project/vllm/pull/57277)).

---

### **4. Performance & Optimization**  
- **Speculative Decoding**: Full CUDA graph support for ViT encoder forward pass is being tracked as an RFC ([#38175](https://github.com/vllm-project/vllm/issues/38175)), expected to reduce decode step overhead by ~15–18% in multimodal workflows.  
- **Prefill Efficiency**: A PR improves prefill-only batch handling by aligning logit row count with model state, reducing unnecessary computation in diffusion models ([#57416](https://github.com/vllm-project/vllm/pull/57416)).  
- **KV Offloading**: Expanded replicated layout detection for multi-group MLA models enables more efficient offloading across TP ranks ([#57652](https://github.com/vllm-project/vllm/pull/57652)).  
- **Compiler Fusions**: Progress on porting compiler fusions to manual fusion (tracked in [#43224](https://github.com/vllm-project/vllm/issues/43224)) aims to improve kernel stability and control.

---

### **5. Stability & Regressions**  
| Severity | Issue | Description | Fix Status |
|--------|------|-------------|------------|
| 🔴 Critical | [#57691](https://github.com/vllm-project/vllm/issues/57691) | Task cancellation during `_commit_scale_down_elastic_ep` corrupts cluster state without rollback | ✅ Fixed in PR [#57710](https://github.com/vllm-project/vllm/pull/57710) |
| 🔴 High | [#57493](https://github.com/vllm-project/vllm/issues/57493) | ROCm `ROCM_ATTN` returns inconsistent outputs across requests on gfx1151 | ❌ Open |
| 🔴 High | [#57688](https://github.com/vllm-project/vllm/issues/57688) | DFlash2 speculative decoding fails deterministically with xgrammar JSON schema | ❌ Open (linked issue #53777) |
| 🟡 Medium | [#57413](https://github.com/vllm-project/vllm/issues/57413) | V1 scheduler lacks concurrent partial prefill limits — impacts long-context RAG workloads | ⚠️ Feature request |
| 🟡 Medium | [#57423](https://github.com/vllm-project/vllm/issues/57423) | FlashInfer autotune config cache deadlocks on rank 0 during engine launch | ❌ Open |

---

### **6. What This Means for Application Developers**  
- **Multimodal Apps**: If using Qwen3-VL, GLM-V, or Kimi K2.5 with ViT encoders, expect upcoming improvements in CUDA graph support for inference speedups. Monitor [#38175](https://github.com/vllm-project/vllm/issues/38175) for updates.  
- **Structured Output & Tool Calling**: Be cautious with `response_format` + `tool_choice: "auto"` on Qwen3.5/3.6 — known regression causing suppressed tool calls ([#39929](https://github.com/vllm-project/vllm/issues/39929)); workaround: explicitly set `tool_choice`.  
- **Production Workloads**: Long-context RAG systems (e.g., >100k tokens) should track [#57413](https://github.com/vllm-project/vllm/issues/57413) for restoring concurrent prefill limits in V1 scheduler.  
- **GPU-Specific Deployment**: Avoid `ROCM_ATTN` on gfx1151 until fix lands; prefer `AITER` path for consistent results. For Intel XPU users, MRV2 sampler support is now available ([#57277](https://github.com/vllm-project/vllm/pull/57277)).  
- **Elastic Scaling**: Use latest builds to benefit from cancellation-safe elastic EP commit logic ([#57710](https://github.com/vllm-project/vllm/pull/57710)) to prevent resource leaks during scale-down operations.

---  
*Digest compiled from GitHub data at 2026-09-20. Subscribe to [vLLM Issues](https://github.com/vllm-project/vllm/issues) for real-time updates.*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-09-20**

---

### **1. Today's Highlights**  
The SGLang project continues to advance its high-performance inference stack with significant progress in memory and cache management, particularly around HiCache staging and unified KV-cache sparsity. Critical stability fixes are underway for GPU kernel races, MoE expert parallelism, and JSON schema compilation—highlighting ongoing focus on robustness under complex workloads. A major refactoring of the routing system (sgl-router) is progressing through a series of modular PRs to improve policy expressiveness and scalability.

---

### **2. Releases & Breaking Changes**  
*None reported in the last 24 hours.*  
No new releases or breaking API/config changes were published. The latest stable version remains `v0.5.20`.

---

### **3. New Model & Hardware Support**  
- ✅ **DeepSeek-V4.1-Flash**: Tracking now on main branch via #40152; support is being stabilized post-preview integration (#38798).  
- ⚠️ **GLM-5.3-Flash**: First-class support landed in v0.5.20, but **no usable DSA attention backend exists on SM121 (DGX Spark)** due to TRTLLM/TileLang/FlashInfer limitations — see #40286.  
- 🛠️ **Nemotron Labs Diffusion**: Upstreaming pipeline tracked in #25802; initial model (`nvidia/Nemotron-Labs-Diffusion-8B`) is accessible without gated access.  
- 🔧 **Video Input Pre-Sampling**: Feature request #31828 proposes decoupling video preprocessing from decoding for better latency control.

---

### **4. Performance & Optimization**  
- **HiCache TMA Staging**: Kernel-level optimization (#40278) achieves **~2x improvement in host<->device transfer bandwidth** (H2D: 97 → 192 GB/s; D2H: 93 → 183 GB/s) on sm_90+ GPUs, hitting the copy-engine ceiling.  
- **Unified Cache Deduplication**: Opt-in MLA load deduplication (#39565) reduces KV cache loading time by up to **12.6%** on GLM-5.2 W4AFP8 (8× H20, TP8), improving cold-start efficiency.  
- **FlashInfer Autotune Cache Fix**: PR #40320 addresses persistent autotune cache discarding during MoE EP>1 boot, preventing re-tuning overhead at startup.  
- **Linear Attention Fusions**: PR #40388 enables lossless SANA-Video eager conv fusions, reducing latency by **12.6%** via optimized convolution-bias fusion.

---

### **5. Stability & Regressions**  
| Severity | Issue | Description | Status |
|---------|-------|-------------|--------|
| 🔴 High | #40320 | FlashInfer autotune cache discarded every boot under MoE EP>1 due to shape mismatch | Open |
| 🔴 High | #40364 | DP scheduler SIGQUIT terminates DataParallelController instead of notifying Engine | Open |
| 🔴 High | #39125 | DFA state explosion in JSON Schema grammar compilation with deeply nested schemas | Open |
| 🟡 Medium | #40360 | LMCache MP session leak on pre-load-back abort; abort hook cannot safely finalize | Open |
| 🟡 Medium | #40156 | EAGLE speculative decode: `num_token_non_padded` = 0 → MoE dispatch corruption | Open |
| 🟡 Medium | #40285 / #40286 | GLM-5.3-Flash fails to load due to layer name mismatch and missing DSA backend on SM121 | Open |
| 🟢 Low | #31473 | Optimistic prefill cross-stage capacity stall (potential deadlock) | Closed |

> ✅ *Note:* No fix PRs have been merged yet for the top-tier regressions. Immediate risk to large-scale deployments using MoE, JSON schema, or complex spec-decoding workflows.

---

### **6. What This Means for Application Developers**  
- **Use caution with DeepSeek-V4.1 and GLM-5.3-Flash on DGX Spark (SM121)**: While models load, DSA attention is unavailable — fallback to non-sparse backends may hurt throughput.  
- **Enable `--enable-linker-mla-dedup`** when deploying large MoE models across TP ranks to reduce KV cache loading time.  
- **Avoid deeply nested or cyclic JSON schemas** in constrained decoding until #39125 is resolved — expect CPU hangs or OOMs.  
- **Leverage HiCache staging kernels** (#40278) for high-throughput prefix caching scenarios, especially with large context lengths.  
- **Expect routing flexibility improvements** from the ongoing sgl-router refactor stack (#39867–#40379): future support for session-aware, cache-aware, and SLO-based bucket selection will enable smarter workload placement.

👉 *Recommended action:* Monitor #40320, #40364, and #39125 closely if running production inference with MoE, distributed engines, or structured outputs.

---  
*Digest generated from GitHub data: [sgl-project/sglang](https://github.com/sgl-project/sglang)*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-09-20**

---

### **1. Today's Highlights**  
The latest updates focus on robust support for **Ling 3.0 (Bailing V3)** and its vision-language variant, including dedicated parser logic to handle pre-opened `<think>` blocks in generation prompts—critical for correct tool use. On the backend side, significant progress was made in **Hexagon (Qualcomm AI) support**, with new ops like `TOP_K`, `GEGLU_QUICK`, and `I32 GET_ROWS` enabled, expanding on-device inference capabilities.

---

### **2. Releases & Breaking Changes**  
- **v.b11057**: Added dedicated parser for **Ling 3.0 (Bailing V3)** to fix incorrect `tool_calls` handling due to pre-opened `<think>` tags.  
  🔗 [PR #28682](https://github.com/ggml-org/llama.cpp/pull/28682) | [Release b11057](https://github.com/ggml-org/llama.cpp/releases/tag/b11057)  
- **v.b11056–b11054**: Hexagon backend enhancements:  
  - Enabled `I32 GET_ROWS` (#29116)  
  - Added support for `GEGLU_QUICK` (#29114)  
  - Enabled `TOP_K` op with optimizations and row partitioning fixes (#29113)  
  🔗 [Hexagon PRs](https://github.com/ggml-org/llama.cpp/pulls?q=is%3Aopen+label%3Ahexagon+updated%3A%3E%3D2026-09-19)

---

### **3. New Model & Hardware Support**  
- ✅ **Ling 3.0 Flash (Bailing V3)**: Full chat parsing support added for models using this template.  
  🔗 [PR #28682](https://github.com/ggml-org/llama.cpp/pull/28682)  
- ✅ **Ling 3.0 VL (BailingMoeV3VL)**: Vision-language model support added (124B total, 5.1B active, hybrid KDA + gated MLA).  
  🔗 [PR #29151](https://github.com/ggml-org/llama.cpp/pull/29151)  
- ✅ **Hexagon (Qualcomm)**: Expanded operator support now includes `TOP_K`, `GEGLU_QUICK`, and `I32 GET_ROWS`.  
  🔗 [PR #29113](https://github.com/ggml-org/llama.cpp/pull/29113), [PR #29114](https://github.com/ggml-org/llama.cpp/pull/29114), [PR #29116](https://github.com/ggml-org/llama.cpp/pull/29116)  
- ✅ **Qwen4Exp HC Ops**: Added support for `hc_pre` (sigmoid gate) and `hc_post` (identity mixing) variants used in Qwen4Exp.  
  🔗 [PR #29000](https://github.com/ggml-org/llama.cpp/pull/29000)  

---

### **4. Performance & Optimization**  
- **CUDA**: `ggml-cuda` now converts contiguous tensors four elements at a time (BF16 prefill), improving throughput.  
  🔗 [PR #29155](https://github.com/ggml-org/llama.cpp/pull/29155)  
- **Metal**: Fixed deprecation warnings from macOS 27 SDK (`MTLDevice.location`, `MTLGPUFamilyCommon`).  
  🔗 [PR #29136](https://github.com/ggml-org/llama.cpp/pull/29136)  
- **CPU (NEON)**: Added vectorized `q8_K_4x4` and `q8_K_4x8` quantization kernels for ARM64.  
  🔗 [PR #29153](https://github.com/ggml-org/llama.cpp/pull/29153)  
- **SYCL**: Pinned memory now uses correct device context (fixes OOM on multi-GPU systems).  
  🔗 [PR #28895](https://github.com/ggml-org/llama.cpp/pull/28895)  
- **AVX-VNNI**: MSVC now detects and enables AVX-VNNI instructions automatically.  
  🔗 [PR #28297](https://github.com/ggml-org/llama.cpp/pull/28297)  

---

### **5. Stability & Regressions**  
- ⚠️ **Critical**: **HIP/ROCm** regression: Fused Gated Delta Net op carries recurrent state across requests → earlier prompt text emitted verbatim in later completions (**Qwen3.5 / MoE models**).  
  🔗 [Issue #29092](https://github.com/ggml-org/llama.cpp/issues/29092) — *No fix yet; high severity.*  
- ⚠️ **High**: **CUDA graphs** hang GPU channel (RC watchdog + Xid 8) on RTX 5090 Laptop (sm_120); workaround: `GGML_CUDA_DISABLE_GRAPHS=1`.  
  🔗 [Issue #27330](https://github.com/ggml-org/llama.cpp/issues/27330) — *Regression likely introduced in recent CUDA graph optimizations.*  
- ⚠️ **Medium**: **SYCL dual-GPU** load hangs; possible memory allocation race.  
  🔗 [Issue #27547](https://github.com/ggml-org/llama.cpp/issues/27547)  
- ⚠️ **Medium**: **Gemma 4** crashes with MTP (Unsloth) on CUDA.  
  🔗 [Issue #25522](https://github.com/ggml-org/llama.cpp/issues/25522)  
- ⚠️ **Low**: **Invalid UTF-8** in generated text can cause parse failures.  
  🔗 [PR #28724](https://github.com/ggml-org/llama.cpp/pull/28724), [PR #29161](https://github.com/ggml-org/llama.cpp/pull/29161) — *Fixes exist, but not yet merged.*

---

### **6. What This Means for Application Developers**  
- 🛠️ **Tool Use Reliability**: If using **Ling 3.0 (Bailing V3)** or **Qwen4Exp**, ensure you're on `b11057+`—earlier versions may misparse tool calls due to unhandled `<think>` pre-opening.  
- 📊 **Performance Wins**: Expect improved BF16 prefill speed on CUDA and better NEON acceleration on ARM devices. Enable `--threads -1` for automatic thread count (fixes CPU oversubscription).  
- ⚠️ **Avoid Pitfalls**: Do **not** use `CUDA graphs` on RTX 5090 laptops until fixed. Avoid `--fit` with SYCL on large models—memory accounting is still flawed.  
- 🌐 **Multi-GPU & Cross-Platform**: Fixes to SYCL pinned memory and OpenHarmony compatibility improve portability. Consider testing on mixed-platform setups if deploying to diverse hardware.  
- 🔒 **Safety**: Always sanitize output for invalid UTF-8 when building agents—this is now handled in AST via `sanitized_text()` (see PRs #28724, #29161).

> 💡 **Pro Tip**: For production use of **MoE models** on ROCm, avoid `b11057` until #29092 is resolved—state leakage could expose sensitive prompt data.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-09-20**

---

### **1. Today's Highlights**  
Ollama continues to evolve its support for advanced model features, with critical fixes for tool call parsing and reasoning content handling across Qwen3 and DeepSeek models. A growing number of issues highlight regressions in speculative decoding (MTP) and GPU runtime detection, particularly on multi-GPU systems with mixed CUDA/ROCm setups. Meanwhile, new PRs are actively addressing compatibility with DeepSeek’s `reasoning_content` field and improving MLX MoE model loading.

---

### **2. Releases & Breaking Changes**  
*None*  
No new releases or breaking changes were published in the last 24 hours. However, several high-impact bugs in v0.34.x versions have been reported, including silent tool call loss and MTP regression — users should monitor for updates.

---

### **3. New Model & Hardware Support**  
- **MLX Support**: PR #18535 adds native GLiNER-small-v2.1 support via MLX runner (`POST /api/extract`), enabling entity extraction in Apple Silicon environments. [GitHub PR #18535](https://github.com/ollama/ollama/pull/18535)  
- **Multi-GPU Runtime Support**: PR #18545 requests installer-level support for downloading both CUDA and ROCm runtimes simultaneously, crucial for users with dual-GPU systems (e.g., RTX 4060 Ti + Radeon 7800 XT). [GitHub PR #18545](https://github.com/ollama/ollama/pull/18545)  
- **MoE Model Loading**: Issue #18540 reports failure to load `mlx-community/gemma-4-26B-A4B-it-qat-4bit` due to missing MoE expert weights (`experts.switch_glu` layout), indicating incomplete support for quantized MoE variants on MLX. [GitHub Issue #18540](https://github.com/ollama/ollama/issues/18540)

---

### **4. Performance & Optimization**  
- **Speculative Decoding Regression**: Issue #18541 confirms a performance regression in MTP speculative decoding with `qwen3-coder:30b`, impacting inference speed and stability. This affects clients relying on fast draft generation. [GitHub Issue #18541](https://github.com/ollama/ollama/issues/18541)  
- **Benchmarking Improvements**: PR #17480 introduces HumanEval patch prompts into the benchmark suite, allowing more realistic evaluation of speculative draft models on code-generation workloads. [GitHub PR #17480](https://github.com/ollama/ollama/pull/17480)  
- **Memory Estimation**: PRs #18197, #18198, and #18201 aim to improve VRAM reporting and prediction by leveraging head dimensions and measured loads — critical for dynamic resource allocation in multi-GPU deployments. [GitHub PR #18197](https://github.com/ollama/ollama/pull/18197)

---

### **5. Stability & Regressions**  
| Severity | Issue | Description | Fix Status |
|--------|------|------------|-----------|
| 🔴 High | #18541 | MTP speculative decoding regression in `qwen3-coder:30b` | Open |
| 🔴 High | #18522 | CUDA `ADD_ID` abort in `gpt-oss:20b` (MXFP4) on RTX 4000 Ada | Closed (likely patched) |
| 🔴 High | #18509 | Tool calls rejected despite valid format; incorrect role assignment | Open |
| 🟡 Medium | #18548 | Intel QuickSync iGPU not utilized in Docker + OpenWebUI setup | Open |
| 🟡 Medium | #18547 | Model download failure in v0.34.2 (works in v0.34.1) | Open |
| 🟡 Medium | #18539 | "Chat, Code & Work" UI option missing after upgrade | Closed |

> ⚠️ Notable: Multiple regressions affect tool call parsing (`qwen3-coder`, `minicpm5-2b`) and reasoning content handling (`deepseek-v4.1-flash`, `reasoning_content` field), indicating instability in agent workflows.

---

### **6. What This Means for Application Developers**  
- **Tool Call Reliability**: Avoid relying on `tool_calls` with `qwen3-coder` or `minicpm5-2b` until PR #18538 is merged — models may omit required delimiters like `<tool_call>`, leading to silent parser failures. Implement fallback logic or validate output structure. [GitHub PR #18538](https://github.com/ollama/ollama/pull/18538)  
- **Reasoning Content Handling**: Clients using DeepSeek’s API contract must now account for `reasoning_content` as a fallback — Ollama currently ignores it unless explicitly mapped. PR #18536 and #18543 propose fixes. [GitHub PR #18536](https://github.com/ollama/ollama/pull/18536)  
- **Multi-GPU Deployments**: If using both NVIDIA and AMD GPUs, expect inconsistent runtime selection — manual intervention or future installer improvements (PR #18545) will be needed.  
- **Model Download Issues**: If encountering model pull failures in v0.34.2, downgrade to v0.34.1 temporarily. Monitor #18547 for resolution.  

> ✅ **Actionable Takeaway**: Audit tool call and reasoning content handling in your agents. Test against `qwen3-coder`, `deepseek-v4.1-flash`, and `minicpm5-2b`—all show active parsing bugs. Use `/api/info` and `/api/ps` to verify GPU memory allocation when scaling.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-09-20**

---

### **1. Today's Highlights**  
The LiteLLM ecosystem continues to mature with significant improvements in observability, routing precision, and security enforcement. Key updates include enhanced UI visibility into prompt caching savings and FUSE v2 routing forecasts, along with critical fixes for budgeting logic in MCP tool discovery and Responses API stream integrity. A notable bug in rate limiting (Issue #34140) was flagged where per-team model limits were enforced at half capacity — a high-severity issue impacting cost control.

---

### **2. Releases & Breaking Changes**  
*No new releases in the last 24 hours.*  
However, several PRs address backward-compatible but impactful changes:
- **PR #42057**: Adds visibility into Capability and FUSE v2 routing forecasts in the Admin UI — improves decision-making during model selection.
- **PR #42055**: Introduces request-level tracking of prompt caching injections and net token savings — enables granular cost optimization analysis.
- **PR #42011**: Removes `sk-1234` as default master key in examples; now reads from `LITELLM_MASTER_KEY` environment variable — mitigates risk of credential leakage in production deployments.

> 🔗 [PR #42057](https://github.com/BerriAI/litellm/pull/42057), [PR #42055](https://github.com/BerriAI/litellm/pull/42055), [PR #42011](https://github.com/BerriAI/litellm/pull/42011)

---

### **3. New Model & Hardware Support**  
*No new models or hardware backends added today.*  
However, ongoing work includes:
- **PR #42006**: Synced OpenRouter pricing for `deepseek-v4-flash` and `gpt-5.6-sol`, confirming support for these models via proxy.
- **Issue #40102**: Request to add `openrouter/openai/gpt-5.6-sol` to `model_prices_and_context_window.json` — pending resolution.

> 🔗 [PR #42006](https://github.com/BerriAI/litellm/pull/42006), [Issue #40102](https://github.com/BerriAI/litellm/issues/40102)

---

### **4. Performance & Optimization**  
Significant progress in efficiency and resource utilization:
- **PR #42017**: Introduces `min_tokens_threshold` for Headroom guardrail compression — skips unnecessary round trips on short conversations, reducing latency for lightweight requests.
- **PR #42055**: Enables real-time monitoring of prompt cache savings — allows developers to quantify performance gains from caching strategies.
- **PR #41886**: Integrates JEV dashboard usage tracking — supports accurate cost attribution for evaluation workflows.

> 🔗 [PR #42017](https://github.com/BerriAI/litellm/pull/42017), [PR #42055](https://github.com/BerriAI/litellm/pull/42055), [PR #41886](https://github.com/BerriAI/litellm/pull/41886)

---

### **5. Stability & Regressions**  
Critical stability issues reported and addressed:

| Severity | Issue | Summary | Fix Status |
|--------|------|--------|-----------|
| ⚠️ High | [#34140](https://github.com/BerriAI/litellm/issues/34140) | Per-team per-model rate limits are halved due to double-counting in `model_per_team` enforcement | ❌ Unresolved (reported Sept 19, 2026) |
| ⚠️ High | [#41972](https://github.com/BerriAI/litellm/issues/41972) | Responses API stream events lose `null` values due to `exclude_none` filtering | ✅ Fixed in [PR #41983](https://github.com/BerriAI/litellm/pull/41983) |
| ⚠️ Medium | [#41954](https://github.com/BerriAI/litellm/issues/41954) | Tool result `cache_control` field misrouted to `content` in Anthropic bridge → 400 errors | ✅ Fix in progress ([PR #41983](https://github.com/BerriAI/litellm/pull/41983)) |
| ⚠️ Medium | [#41963](https://github.com/BerriAI/litellm/issues/41963) | `/v1/responses` fails if input is string (not list) — provider rejection | ✅ Patch under review |

> 🔗 [Issue #34140](https://github.com/BerriAI/litellm/issues/34140), [PR #41983](https://github.com/BerriAI/litellm/pull/41983)

---

### **6. What This Means for Application Developers**  
- **Cost Control**: Be cautious with team-level rate limits — current behavior may cut effective RPM/TPM by 50%. Monitor for #34140 until fixed.
- **Observability**: Leverage new UI features in #42055 and #42057 to track prompt caching savings and FUSE v2 routing decisions — essential for optimizing agent cost-efficiency.
- **Stream Reliability**: If using `/v1/responses` streams, expect potential loss of `null` fields unless patched via #41983. Ensure downstream systems handle optional fields gracefully.
- **Security & Compliance**: The removal of `sk-1234` as default master key in docs reduces exposure risk — enforce secrets via env vars in all deployments.
- **Future-Proofing**: Watch for updates around MCP 2.x SDK compatibility (#35306) and Claude Apps Gateway support (#34924).

> 💡 *Recommendation*: Audit your proxy’s rate limit configurations immediately; consider upgrading to latest main to benefit from streaming fixes and improved UI insights.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-09-20**

---

### **1. Today's Highlights**  
The Unsloth team has made significant progress in stabilizing multi-GPU and cross-platform support, with critical fixes for Windows performance regressions and ROCm Docker image parity. New PRs enhance Studio’s reliability—adding auto-reload on reconnect, improved model persistence, and better handling of Hugging Face dataset recipes—while addressing long-standing issues around file attachment retention and export safety.

---

### **2. Releases & Breaking Changes**  
*No new releases in the last 24 hours.*  
However, several **breaking changes are pending** in active PRs:
- `PR #11301`: Brings back the *Resume* button for past training runs by fixing a model revision attestation issue tied to `huggingface_hub` 1.32’s shared download folder behavior. [Link](https://github.com/unslothai/unsloth/pull/11301)
- `PR #11299`: Restricts exports to only pushed files (no metadata or old artifacts), preventing accidental leakage of local paths. [Link](https://github.com/unslothai/unsloth/pull/11299)

> 🔔 Developers using `huggingface_hub` 1.32+ should verify their training run resumption logic is compatible.

---

### **3. New Model & Hardware Support**  
- **ROCm Docker Image Parity**: Two major PRs now bring full Studio functionality to AMD users via Docker:
  - `PR #11218`: Ships Unsloth Studio in `unsloth/unsloth-rocm` (previously CUDA-only). [Link](https://github.com/unslothai/unsloth/pull/11218)
  - `PR #11286`: Adds JupyterLab, SSHD, and supervisord to the ROCm Studio image, matching the CUDA experience. [Link](https://github.com/unslothai/unsloth/pull/11286)
- **EXL3 Backend Progress**: `PR #7115` continues integration of ExLlamaV3 (EXL3) as a quantization backend with MoE support and sub-8-bit precision (2–8 bits, fractional). This enables efficient deployment of Mixture-of-Experts models previously incompatible with bitsandbytes. [Link](https://github.com/unslothai/unsloth/pull/7115)

> ✅ Now supports: ROCm (via WSL2 DXG bridge), EXL3 quantization, and multi-resident GGUF models.

---

### **4. Performance & Optimization**  
- **Multi-GPU Memory Management**: `PR #11330` addresses OOM crashes during CPU offload in MoE models by preserving user-specified `--tensor-split` flags. Without this fix, studio strips the flag, causing memory exhaustion on multi-GPU systems. [Link](https://github.com/unslothai/unsloth/pull/11330)
- **Inference Speed Improvements**:
  - `PR #11341`: Introduces automatic model reload on reconnect, reducing latency in dynamic llama.cpp workflows.
  - `PR #11340`: Removes 12k-character prompt truncation in API monitor; now copies full prompts up to 64 MiB. [Link](https://github.com/unslothai/unsloth/pull/11340)
- **Model Loading Efficiency**: `PR #10876` enables multiple resident GGUF models simultaneously, each running in isolated `llama-server` processes, improving inference throughput for agent-based applications. [Link](https://github.com/unslothai/unsloth/pull/10876)

---

### **5. Stability & Regressions**  
**Critical Issues Reported (Severity Rank):**
1. **Qwen3.8-Flash-Next MTP Load Crash** (`#11143`)  
   - **Cause**: `nextn.hc_head_norm` dimension mismatch post-rebase.  
   - **Impact**: Model load aborts at startup on CLI/inference endpoints.  
   - **Status**: Open | Fix pending. [Link](https://github.com/unslothai/unsloth/issues/11143)

2. **Qwen 3.5 FastMTP Draft-Vocab Trim Crash** (`#11335`)  
   - **Cause**: `d2t` draft-to-target mapping causes vocabulary dimension mismatch in `llama.cpp`.  
   - **Impact**: GGUF loader crash during model load.  
   - **Status**: Open | High priority. [Link](https://github.com/unslothai/unsloth/issues/11335)

3. **Windows Desktop Performance Regression** (`#11336`)  
   - **Issue**: App significantly slower than Linux despite identical hardware.  
   - **Status**: Open | No fix yet. [Link](https://github.com/unslothai/unsloth/issues/11336)

4. **Deep Research "Review Plan" Inert Until Reload** (`#10676`)  
   - **Impact**: UI state fails to update without manual refresh.  
   - **Status**: Open | Low severity. [Link](https://github.com/unslothai/unsloth/issues/10676)

---

### **6. What This Means for Application Developers**  
- **For agents & multi-model apps**: Use `PR #10876` to run multiple GGUF models in parallel—ideal for routing, fallback, or ensemble inference. Ensure you’re not relying on default model loading behavior if using `--tensor-split`.
- **For Hugging Face integrations**: Be cautious with `export_metadata.json` and dataset recipe exports—`PR #11299` ensures only intended files are pushed.
- **For AMD/ROCm users**: Docker images now fully support Studio + JupyterLab. Use `unsloth/unsloth-rocm` with WSL2 DXG bridge for GPU access. See `PR #11212` for setup details. [Link](https://github.com/unslothai/unsloth/pull/11212)
- **For fine-tuning pipelines**: Avoid `Qwen3.5` and `Qwen3.8` Flash-Next MTP models until `#11143` and `#11335` are resolved. Consider EXL3 (`PR #7115`) for MoE models requiring <8-bit quantization.

> 🛠️ **Action Item**: Audit your model loading pipeline for `--tensor-split`, `d2t` vocab trimming, and Hugging Face Hub export hygiene.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*