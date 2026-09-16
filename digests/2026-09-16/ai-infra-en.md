# AI Infrastructure Digest 2026-09-16

> Generated: 2026-09-16 00:45 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

---

### **1. Ecosystem Overview**  
The AI inference and serving landscape in September 2026 is characterized by rapid specialization, cross-platform convergence, and a growing emphasis on correctness at scale. Projects are increasingly diverging along functional lines—serving engines like vLLM and SGLang push the boundaries of low-latency, high-throughput inference with advanced kernel optimizations; local runtimes such as llama.cpp and Unsloth prioritize portability and edge deployment; while gateways like LiteLLM and Ollama focus on enterprise-grade observability, cost control, and unified API abstractions. A clear trend toward hybrid architectures (MoE, Mamba/GDN) and speculative decoding is driving both innovation and stability challenges, underscoring the need for rigorous validation in production workflows.

---

### **2. Activity Comparison**

| Project       | Issues Open (↑/↓) | PRs Merged (↑/↓) | Release Status        |
|---------------|-------------------|------------------|------------------------|
| **vLLM**      | 98 (+3)           | 14 (+2)          | No new release         |
| **SGLang**    | 127 (+5)          | 18 (+4)          | No new release         |
| **llama.cpp** | 156 (+8)          | 12 (+3)          | No new tagged release  |
| **Ollama**    | 84 (+4)           | 9 (+2)           | `v0.34.2-rc0` (patch)  |
| **LiteLLM**   | 139 (+6)          | 11 (+2)          | `v1.101.0` (security fix) |
| **Unsloth**   | 142 (+7)          | 13 (+3)          | No new release         |

> ✅ *Observation:* High issue volume across all projects reflects active stabilization efforts post-major feature rollouts. LiteLLM leads in security-focused releases; vLLM and SGLang show strongest momentum in PR activity, signaling aggressive optimization cycles.

---

### **3. Model Support Race**

| New Model / Architecture     | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|-------------------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek-V4.1**             | ✅ (FP4 MoE) | ✅ (Hopper FP8, 16-head attn) | ❌ | ❌ | ❌ | ❌ |
| **Qwen3.5-MoE**               | ❌ | ✅ (under test) | ❌ | ❌ | ❌ | ❌ |
| **GLM-5.3-Flash**             | ⚠️ (degenerates) | ✅ (with fix pending) | ❌ | ❌ | ❌ | ❌ |
| **Gluon MegaMoE**             | ❌ | ✅ (RFC proposal) | ❌ | ❌ | ❌ | ❌ |
| **Hybrid Mamba/GDN**          | ✅ (speculative decoding fixes) | ⚠️ (partial support) | ❌ | ❌ | ❌ | ❌ |
| **Qwen3.8-Flash-Next-FP8**   | ⚠️ (16 tok/s at 185k context) | ✅ (H20 TP8 w/ QSA extend) | ❌ | ❌ | ❌ | ✅ (context cap fix in progress) |

> 🏆 **Leader:** **SGLang** is ahead in model architecture diversity, particularly in supporting next-gen MoE and hybrid models with optimized kernels. **vLLM** leads in performance maturity for large-scale inference, especially with MoE and speculative decoding.

---

### **4. Performance Frontier**

| Optimization Focus          | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|------------------------------|------|--------|-----------|--------|---------|---------|
| **KV Cache Quantization**    | ✅ UltraQuant 4-bit (FlyDSL D=256) | ✅ FP8 + custom params | ✅ Vulkan Flash Attention | ✅ — | ✅ S3 prompts-only logging | ✅ Context budget tuning |
| **Kernel Fusion & Fused Ops**| ✅ Intel XPU fused attention (55% latency ↓) | ✅ KDA CuTe DSL transpose (~3x speedup) | ✅ CUDA MMVQ-MMQ crossover | ✅ Memory budgeting (95%) | ✅ Daily spend aggregation | ✅ Metal memory accounting |
| **Batching & Parallelism**   | ✅ SP/async TP, MoE collectives | ✅ Hierarchical cache, TP4 16-head attn | ✅ Graph replay (SYCL) | ✅ Single-pass structured output | ✅ Rate limiting per day | ✅ GRPO training stability |
| **Distributed Serving**      | ✅ Tensor-parallel MoE via `torch.compile` | ✅ Multi-node MoE RFC | ❌ | ❌ | ✅ Cost-based routing | ❌ |
| **Speculative Decoding**     | ⚠️ Hybrid Mamba/GDN issues | ⚠️ QSA extend crash (H20 TP8) | ✅ Scheduler overflow fix | ❌ | ✅ Guardrail execution | ⚠️ Infinite loop in Qwen3 fine-tuning |

> 🔥 **Frontier Leaders:**  
> - **vLLM** dominates in kernel-level optimizations and MoE scalability.  
> - **SGLang** excels in hybrid model support and novel caching strategies (HiCache).  
> - **Unsloth** focuses on local runtime usability and context-aware memory management.

---

### **5. Layer Positioning**

| Project       | Primary Layer              | Key Differentiators |
|---------------|-------------------------------|---------------------|
| **vLLM**      | **Inference Engine**          | High-throughput, low-latency serving; strong MoE/speculative decoding; GPU-optimized kernels (CUDA/ROCm/XPU) |
| **SGLang**    | **Inference Engine + Runtime** | Next-gen model support (MoE, SSM), hierarchical caching, unified radix tree, Rust core |
| **llama.cpp** | **Local Runtime / Embedded**  | Cross-platform portability (Android, Vulkan, SYCL); file descriptor loading; lightweight, CPU/GPU agnostic |
| **Ollama**    | **Gateway + Local Runtime**   | Developer-friendly CLI; structured outputs; MLX/MLIR integration; edge device optimization |
| **LiteLLM**   | **LLM Gateway / Enterprise Proxy** | Security (cosign-signed images), cost tracking, guardrails, S3 logging controls, rate limiting |
| **Unsloth**   | **Training/Fine-Tuning Stack** | Fast SFT/GRPO trainers; Studio UI; macOS/Windows support; multimodal input handling |

> 📊 **Positioning Summary:**  
> - **Engine Layer**: vLLM, SGLang  
> - **Runtime Layer**: llama.cpp, Ollama  
> - **Gateway Layer**: LiteLLM  
> - **Fine-Tuning Layer**: Unsloth  

---

### **6. Trend Signals**

#### **Emerging Industry Trends:**
1. **Hybrid Architectures Are Now Mainstream** – Mamba/GDN, MoE, and SWA/SSM are no longer experimental. Projects must now validate correctness under speculative decoding and prefix caching.
2. **Speculative Decoding Is Still Risky** – Despite widespread adoption, correctness bugs persist (e.g., vLLM #53912, SGLang #37633), especially with mixed-model pipelines.
3. **Edge & Mobile Deployment Is Prioritized** – File descriptor loading (llama.cpp), Vulkan ARM64 (Ollama), and Apple Silicon tuning (Unsloth) signal rising demand for secure, embedded inference.
4. **Security & Compliance Are Non-Negotiable** – LiteLLM’s cosign signing and Ollama’s memory budgeting reflect growing regulatory and operational pressure.
5. **Cost Visibility Drives Adoption** – LiteLLM’s cost tracking improvements and Ollama’s structured output optimizations indicate that enterprises are demanding full lifecycle observability.

#### **What Developers Should Watch:**
- **Avoid speculative decoding on hybrid models until fixes land** (vLLM #52244, SGLang #37633).
- **Pin to stable versions** (e.g., Ollama v0.34.1, LiteLLM v1.100.x) for production workloads.
- **Monitor AMD ROCm prebuilts** — bundled runtimes fail on newer Ryzen AI chips (Unsloth #6276).
- **Leverage UltraQuant 4-bit KV cache (vLLM)** or **S3 prompts-only logging (LiteLLM)** for cost and memory savings.
- **Use `--disable-overlap-schedule` or `CUDA_LAUNCH_BLOCKING=1`** if encountering crashes on H20 GPUs (SGLang).

> 🛠️ **Final Recommendation:** For production agents and LLM gateways, **vLLM + LiteLLM + Ollama** form a robust stack—prioritize vLLM for performance, LiteLLM for security/cost control, and Ollama for developer experience. Use **Unsloth only for fine-tuning**, not production inference, due to ongoing stability issues.

---  
*Generated: 2026-09-16 | Source: Project Digests from GitHub*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-09-16**

---

### **1. Today's Highlights**  
The vLLM project continues to accelerate its support for advanced inference patterns, with critical fixes for speculative decoding correctness on hybrid Mamba/GDN models and MoE expert offloading stability. New PRs introduce ultra-low-latency KV cache quantization (UltraQuant 4-bit) and kernel optimizations for Intel XPU and ROCm, signaling strong momentum in cross-platform performance.

---

### **2. Releases & Breaking Changes**  
None reported in the last 24 hours. No new releases or breaking API/config changes observed.

---

### **3. New Model & Hardware Support**  
- **ROCm**: Added experimental support for `mxfp4` MoE kernels in DeepSeek-V4 and gpt-oss via #55934, enabling efficient FP4 inference on AMD MI300/MI355.
- **Intel XPU**: Improved support for Qwen-family models (including audio variants) with fixes for long audio inputs (#56912) and ongoing kernel routing for fused attention ops (#56096).
- **Quantization**: Introduction of **UltraQuant 4-bit KV cache** backend (FlyDSL D=256) in #57057 — targets 2× higher density than FP8, ideal for long-context agentic workloads.
- **Model Architectures**: Enhanced handling of hybrid GDN/Mamba models (e.g., Qwen3.8-27B) under speculative decoding and prefix caching (#52244, #56736).

---

### **4. Performance & Optimization**  
- **Intel XPU**: Fused kernel (`fused_qk_rmsnorm_rope_gate`) reduces decode latency by **55%** (2.42 ms → 1.09 ms) and prefill by **23%** (31.93 ms → 24.57 ms) on B70 GPU.
- **CUDA**: AWQ dequant + GEMM fusion on SM89 via #57047 eliminates intermediate FP16 materialization, improving batch-invariant mode throughput.
- **MoE Optimization**: Ongoing work to optimize collectives in tensor-parallel MoE cases using `torch.compile` (#29139), aiming to reduce redundant computation.
- **Speculative Decoding**: DFlash2 now shows reduced output drift at token 30 for Qwen3.8 (fixes #54928), though long-context performance remains suboptimal (~16 tok/s at 185k context).

---

### **5. Stability & Regressions**  
- **Critical Crashes**:  
  - `EngineCore` crash during `wake_up` on DGX Spark (GB10) with unified memory (#50011). *Fix pending*.
  - Silent output corruption ("!" token loops) on Intel Arc Pro B70 under sustained decode (#53480). *High severity, no fix yet*.
- **Correctness Bugs**:  
  - Speculative decoding corrupts output in hybrid Mamba/GDN models when combined with prefix caching (#53912). *Fix merged: #52244*.
  - Batch-invariance broken under SP/async TP with `VLLM_BATCH_INVARIANT=1` (#56370). *Fix PR open: #57092*.
  - GLM-5.3-Flash degenerates into “word salad” in multi-turn use (#56605). *No fix yet*.
- **Configuration Issues**:  
  - `--otlp-traces-endpoint` initializes tracer but never sends spans due to uninvoked instrumentation (#56696). *Fix PR pending*.

---

### **6. What This Means for Application Developers**  
- **Use caution with speculative decoding on hybrid models** (especially Qwen3.8+), as correctness issues persist despite recent patches. Avoid `DFlash` in production until #56736 and #52244 are widely deployed.
- **Leverage UltraQuant 4-bit KV cache** for long-context agents where memory is constrained — expect ~2× compression over FP8.
- **Monitor Intel XPU deployments closely**: While performance gains are significant, silent corruption risks remain on B70 hardware.
- **Enable `VLLM_BATCH_INVARIANT=1` only if you’re aware of its impact on MoE outputs** — current behavior can lead to non-deterministic results across batches.
- **Consider upgrading to `v0.29.0`** for improved tool calling and OpenAI compatibility, but validate against known regressions like the `openai_harmony.HarmonyError` (#23567).

> 🔗 [Full Issue Tracker](https://github.com/vllm-project/vllm/issues) | [PR Dashboard](https://github.com/vllm-project/vllm/pulls)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-09-16**

---

### **1. Today's Highlights**  
The SGLang project continues to advance its support for next-generation inference infrastructure, with significant progress on DeepSeek-V4.1 optimizations and hybrid cache systems. Critical stability fixes are underway for Hopper/Blackwell GPU paths, including a high-severity CUDA coredump issue (#26340) and a 4% decode performance regression on Blackwell due to `tiny_gemm` integration (#38628). New PRs also introduce native 16-head attention for small TP4 batches and optimize Mamba/SSM model support via unified radix caching.

---

### **2. Releases & Breaking Changes**  
*No new releases in the past 24 hours.*  
However, ongoing changes may affect users deploying models with:
- `--moe-runner-backend flashinfer_trtllm` (see #36711, #39299)
- `--enable-hierarchical-cache` on hybrid SWA/SSM models (see #38634)
- FP8 KV cache with custom quantization parameters (see #37379)

> 🔗 [Issue #26340](https://github.com/sgl-project/sglang/issues/26340): Auto-collected CUDA coredumps indicate instability in core execution paths; potential impact on all GPU deployments.

---

### **3. New Model & Hardware Support**  
- **New Model Support**:  
  - `Qwen3.5-MoE` (FP8 KV cache + quant param path) – now under active testing (#37379)  
  - `GLM-5.3-Flash` (glm5_next) – supported with MoE runner backend (`flashinfer_trtllm`) pending fix for index bounds error (#36711)  
  - **Gluon MegaMoE**: RFC proposal for full integration with multi-node support ([#38334](https://github.com/sgl-project/sglang/issues/38334))  

- **Hardware & Backend Updates**:  
  - **ROCm/MI355X**: HiCache IO/backend alignment updated for kernel-based I/O and `page_first` layout ([#39572](https://github.com/sgl-project/sglang/pull/39572))  
  - **Apple Silicon**: CI workflow updates for JIT kernel compatibility ([#39619](https://github.com/sgl-project/sglang/pull/39619))  
  - **NPU (Ascend)**: Sampling optimization to avoid device sync ([#39404](https://github.com/sgl-project/sglang/pull/39404))

---

### **4. Performance & Optimization**  
- **DeepSeek-V4.1 Optimizations**:  
  - Native 16-head attention added for TP4 decode batches → reduces padding overhead and improves throughput on small workloads ([#39674](https://github.com/sgl-project/sglang/pull/39674))  
  - Hopper FP8 matmul kernels introduced with tuning for H200 — includes `SWAP_AB`, `SPLIT_K`, and TF32 partial reduction ([#39657](https://github.com/sgl-project/sglang/pull/39657))  
  - Standalone kernels extracted from DSV4.1 stack for faster compilation and reuse ([#39646](https://github.com/sgl-project/sglang/pull/39646))  

- **Kernel-Level Improvements**:  
  - KDA CuTe DSL decode state transpose coalesced → ~3x speedup, bit-identical output ([#39680](https://github.com/sgl-project/sglang/pull/39680))  
  - Unified radix tree core synchronized between Python and Rust for consistent behavior ([#39627](https://github.com/sgl-project/sglang/pull/39627))  

- **Memory & Cache Efficiency**:  
  - Hybrid cache (HiCache) now supports L2/L3 metrics per rank and splits “shrunk” prefetch reasons for observability ([#39280](https://github.com/sgl-project/sglang/pull/39280))  
  - Decode-side HiCache enabled for Mamba/SSM models via unified radix tree ([#38634](https://github.com/sgl-project/sglang/pull/39680))

---

### **5. Stability & Regressions**  
| Issue | Severity | Description | Fix Status |
|------|----------|-------------|------------|
| [#26340](https://github.com/sgl-project/sglang/issues/26340) | Critical | Repeated CUDA coredumps from `pr-test.yml` pipeline | In progress; auto-collected logs available |
| [#38628](https://github.com/sgl-project/sglang/issues/38628) | High | 4% decode regression on Blackwell after `tiny_gemm` switch | Not yet reverted; PR #34693 under review |
| [#37633](https://github.com/sgl-project/sglang/issues/37633) | High | Illegal memory access in QSA extend forward at 8 concurrent requests (H20 TP8) | Root cause unconfirmed; workaround: `CUDA_LAUNCH_BLOCKING=1` |
| [#36711](https://github.com/sgl-project/sglang/issues/36711) | Medium | GLM-5.3-Flash crashes during load with `flashinfer_trtllm` | Patch in development |
| [#39412](https://github.com/sgl-project/sglang/issues/39412) | Low | PD bootstrap params dropped silently in Rust frontend | Minor; affects only specific deployment patterns |

---

### **6. What This Means for Application Developers**  
- **Avoid `flashinfer_trtllm`** for MoE models like GLM-5.3-Flash or Qwen3.5-MoE until #36711 and #39299 are resolved. Use `trtllm` or `flashinfer_cutedsl` as fallbacks.  
- **Use `--disable-overlap-schedule` or `CUDA_LAUNCH_BLOCKING=1`** if experiencing crashes with Qwen3.8-Flash-Next-FP8 on H20 GPUs.  
- **Expect better performance on DeepSeek-V4.1** with TP4 and Hopper GPUs due to native 16-head attention and optimized FP8 kernels.  
- **Monitor CI health**: The project is in maintenance mode due to flaky tests (#21065); expect delays in merging non-critical PRs.  
- **Plan for future upgrades**: The move to Rust-based radix tree core ([#39627](https://github.com/sgl-project/sglang/pull/39627)) will improve consistency but may require minor config adjustments.

> 💡 *Pro Tip*: For production deployments, pin to stable versions (e.g., v0.5.16) until critical issues like #26340 and #38628 are resolved. Monitor the [CI Failure Tracker](https://github.com/sgl-project/sglang/issues/17050) for real-time status.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-09-16**

---

### **1. Today's Highlights**  
The latest updates focus on performance and stability across multiple backends, with critical fixes for speculative decoding, Vulkan Flash Attention, and ROCm/AMD GPU optimizations. Notably, Hexagon and SYCL backends received targeted improvements for memory access patterns and kernel scheduling, while new support for loading models from file descriptors enables better integration in Android and sandboxed environments.

---

### **2. Releases & Breaking Changes**  
No new tagged releases were published today. However, the following PRs address key runtime behaviors:  
- **[PR #28972](https://github.com/ggml-org/llama.cpp/pull/28972)**: Fixes a scheduler hash set overflow in speculative decoding (e.g., `draft-mtp`) by dynamically growing the hash set instead of asserting—critical for long-context or high-concurrency workloads.  
- **[PR #28956](https://github.com/ggml-org/llama.cpp/pull/28956)**: Corrects incorrect KV cache reads in Vulkan backend when slicing attention states—previously causing silent corruption in multi-head inference.  

> ✅ *Recommended for all users running speculative decoding or long-context inference on Vulkan/CUDA.*

---

### **3. New Model & Hardware Support**  
- **Android Integration**: [PR #28973](https://github.com/ggml-org/llama.cpp/pull/28973) adds `llama_model_load_from_fd()` and `llama_adapter_lora_init_from_fd()`, enabling direct model/LoRA loading from open file descriptors—essential for secure, sandboxed Android apps.  
- **Vulkan (Intel Xe)**: Continued optimization with [PR #24406](https://github.com/ggml-org/llama.cpp/pull/24406) adding flash attention kernels for Xe-LPG Plus/Xe2/Xe3 architectures.  
- **Hexagon (Qualcomm)**: [PR #28886](https://github.com/ggml-org/llama.cpp/pull/28886) restores contiguous fast-path DMA and `hvx_copy_uu` for improved performance on Qwen3.x models.  
- **ROCm/HIP**: [PR #28943](https://github.com/ggml-org/llama.cpp/pull/28943) skips masked KV tiles in WMMA Flash Attention—reduces redundant computation on shared KV caches.

---

### **4. Performance & Optimization**  
- **HIP/Radeon (gfx1201)**: [PR #28943](https://github.com/ggml-org/llama.cpp/pull/28943) eliminates unnecessary WMMA iterations, improving prefill efficiency in multi-slot scenarios.  
- **CUDA (Volta SM70)**: [PR #28912](https://github.com/ggml-org/llama.cpp/pull/28912) introduces a tuned MMVQ-to-MMQ crossover threshold—improves throughput for K-quants on older Volta GPUs.  
- **SYCL (Intel Arc)**: [PR #28725](https://github.com/ggml-org/llama.cpp/pull/28725) adds graph recording/replay capability—enables deterministic execution and profiling for future optimization.  
- **OpenCL**: [PR #28881](https://github.com/ggml-org/llama.cpp/pull/28881) adds generic `ssm_scan` support—enhances compatibility with state-space models like Mamba.  

> 📈 *Expected gains: up to 15–25% faster prefill on AMD/Intel GPUs with sparse attention; reduced latency in speculative decode pipelines.*

---

### **5. Stability & Regressions**  
Critical issues reported today include:  
- **#21831** ([open](https://github.com/ggml-org/llama.cpp/issues/21831)): Server forces full prompt reprocessing on subsequent requests—causing severe performance degradation in chat applications. *(52 comments, high impact)*  
- **#25618** ([open](https://github.com/ggml-org/llama.cpp/issues/25618)): Speculative decoding diverges from vanilla output on quantized targets (Q4_K_M)—a correctness issue affecting draft-model accuracy. *(24 comments, high severity)*  
- **#28753** ([open](https://github.com/ggml-org/llama.cpp/issues/28753)): `ggml_backend_sched_alloc_splits` crash during graph reallocation—reported on Intel Arc GPUs. *(8 comments, potential OOM risk)*  
- **#28778** ([open](https://github.com/ggml-org/llama.cpp/issues/28778)): SYCL DFlash2 draft model triggers GPU TDR reset on dual Arc Pro B70—indicates driver-level instability. *(8 comments, hardware-specific)*  

> ⚠️ *Fixes are not yet merged; developers using speculative decoding or large context models should monitor these issues closely.*

---

### **6. What This Means for Application Developers**  
- **For AI Agents & LLM Gateways**: Prioritize updating to the latest `master` if using speculative decoding (`--draft-mtp`)—the recent scheduler fix prevents crashes under load. Avoid `Q4_K_M` drafts until #25618 is resolved.  
- **For Mobile & Embedded Apps**: Leverage `load_from_fd()` ([PR #28973](https://github.com/ggml-org/llama.cpp/pull/28973)) for secure, zero-copy model loading—ideal for Android or containerized deployments.  
- **For DevOps & Inference Platforms**: Monitor Vulkan and HIP backends for correctness regressions (#28956, #28943). Use `--spec-draft` only with stable builds until the scheduler fix is released.  
- **For Performance Tuning**: Enable `GGML_HIP_ROCWMMA_FATTN=ON` cautiously—some users report prefill regressions on gfx1151 (see #24437). Consider disabling it for long-context tasks.

> 🔗 **Resources**:  
> - [GitHub Issues](https://github.com/ggml-org/llama.cpp/issues)  
> - [Release Attestations](https://github.com/ggml-org/llama.cpp/attestations/)  
> - [Official Website](https://llama.app)

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-09-16**

---

### **1. Today's Highlights**  
The latest release, `v0.34.2-rc0`, includes critical updates to `llama.cpp` and addresses multiple stability issues affecting high-memory models on edge devices like the Jetson Orin Nano. Significant progress is underway in optimizing structured outputs for reasoning models—particularly with MLX and native Jinja templates—while several PRs aim to fix long-standing bugs in cloud integration, tool call parsing, and memory management across backends.

---

### **2. Releases & Breaking Changes**  
- **`v0.34.2-rc0`**: Minor patch focused on `llama.cpp` updates; no breaking changes reported.  
  🔗 [Changelog](https://github.com/ollama/ollama/compare/v0.34.1...v0.34.2-rc0)

---

### **3. New Model & Hardware Support**  
- **Qualcomm IQ-9075 NPU/GPU support requested** via #18445 — targeting Dragonwing™ platforms (e.g., Raxda Fogwise Airb).  
  🔗 [Issue #18445](https://github.com/ollama/ollama/issues/18445)  
- **Vulkan backend now enabled on Linux ARM64**, fixing prior omission in Docker images.  
  🔗 [PR #18466](https://github.com/ollama/ollama/pull/18466)  
- **MLX CUDA runtime deduplication** improves compatibility and reduces binary size.  
  🔗 [PR #17956](https://github.com/ollama/ollama/pull/17956)

---

### **4. Performance & Optimization**  
- **Memory budgeting for CUDA devices** introduced: allocators now reserve 95% of free GPU memory at load time to prevent OOM crashes during model loading.  
  🔗 [PR #18481](https://github.com/ollama/ollama/pull/18481)  
- **Single-pass structured output application** on thinking models (via #18479) eliminates redundant prefill cycles, reducing latency by ~50% in testing.  
- **Gemma 4 tool call parser enhancements** (#18471) improve robustness against malformed `BEGIN_ARG`/`END_ARG` syntax.  
- **Cloud stream failure propagation** ensures partial responses are not treated as success, improving client reliability.  
  🔗 [PR #18475](https://github.com/ollama/ollama/pull/18475)

---

### **5. Stability & Regressions**  
- **Critical OOM on Jetson Orin Nano 8GB** when loading Gemma 4 E4B with `--load-mode dio` (#18396); regression confirmed post-v0.32.2.  
  🔗 [Issue #18396](https://github.com/ollama/ollama/issues/18396)  
- **Concurrent decode EOS loss in gemma4:26b** under heavy load; identical test with qwen3.8-27b passes cleanly.  
  🔗 [Issue #18442](https://github.com/ollama/ollama/issues/18442)  
- **MLX structured output prefixes JSON with stray `.`** due to decoder lookahead (fixed in #18459).  
  🔗 [Issue #18441](https://github.com/ollama/ollama/issues/18441)  
- **Vulkan iGPU runner wedges after cancelled prefill**, hanging all subsequent requests until restart.  
  🔗 [Issue #18477](https://github.com/ollama/ollama/issues/18477)  
- **Claude integration shows ~50s latency** and malformed tool calls despite clean model setup.  
  🔗 [Issue #18474](https://github.com/ollama/ollama/issues/18474)

> ✅ **Fixes in Progress**: PRs #18459 (MLX), #18479 (structured output), #18481 (CUDA budgeting), #18466 (Vulkan ARM64).

---

### **6. What This Means for Application Developers**  
- **Avoid `--load-mode dio` on Jetson Orin Nano** until v0.34.3+ if using Gemma 4 E4B/E2B. Use CPU-projector mode instead.  
- **Use structured outputs cautiously with thinking-enabled models**—expect two-generation overhead unless you’re on a recent build with single-pass support.  
- **Tool call parsers are fragile**: ensure tool names don’t conflict with reserved keywords (`description`, `type`, etc.) or malformed syntax will silently drop output.  
- **Cloud integrations may fail silently** if upstream truncates mid-stream—implement client-side stream validation.  
- **MLX users should upgrade to avoid JSON prefix bugs**; expect improved performance and correctness in upcoming releases.  

🔧 **Actionable Tip**: Monitor PRs #18479 and #18459 for production-ready fixes to structured output + reasoning workflows.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

---

### **LiteLLM Digest – 2026-09-16**

#### **1. Today's Highlights**  
The LiteLLM project continues to strengthen its enterprise-grade infrastructure with critical fixes for cost tracking, security, and observability. Key updates include enhanced proxy-level rate limiting (including per-day caps), improved guardrail execution across MCP tool flows, and new configuration controls for AI capabilities in the UI. A notable focus on stability in streaming responses and model routing ensures robustness for production deployments.

#### **2. Releases & Breaking Changes**  
- **v1.101.0**: Released today with a major emphasis on security—**all Docker images are now signed via cosign**, using a consistent key introduced in commit [`0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0). This is mandatory for verifying image integrity in production environments.  
  🔗 [GitHub Release v1.101.0](https://github.com/BerriAI/litellm/releases/tag/v1.101.0)  
  🔐 [Verify Image Signature Guide](https://docs.sigstore.dev/cosign/overview/)  

No breaking API changes were reported in this release cycle.

#### **3. New Model & Hardware Support**  
- **GreenPT provider added** as an OpenAI-compatible backend ([#29844](https://github.com/BerriAI/litellm/issues/29844)) — enables integration with GreenPT’s inference stack.  
- **Azure AI DeepSeek v4 models** (`azure_ai/deepseek-v4-flash`, `azure_ai/deepseek-v4-pro`) now officially supported in pricing and context window data ([#30129](https://github.com/BerriAI/litellm/issues/30129)).  
- **Fireworks AI** now correctly accounts for *cache-write*, *reasoning*, and *audio* tokens in cost calculations via shared cost calculator ([#41339](https://github.com/BerriAI/litellm/pull/41339)).  

No new hardware backends (CUDA/ROCm/Metal/CPU) or quantization formats were added.

#### **4. Performance & Optimization**  
- **Daily spend rollup optimization**: Introduced `LiteLLM_DailyGlobalSpend` key-free aggregation to reduce query load on large tenants ([#41324](https://github.com/BerriAI/litellm/pull/41324)), preventing OOMs and timeouts during usage dashboard rendering.  
- **S3 logging optimization**: New `s3_log_prompts_only` option allows teams to store only prompts in S3, reducing storage costs by up to ~60% when full responses aren’t needed ([#41327](https://github.com/BerriAI/litellm/pull/41327)).  
- **Memory efficiency**: Gateway memory now supports independent admin control over saving vs. recall, reducing unnecessary state bloat ([#40894](https://github.com/BerriAI/litellm/pull/40894)).

#### **5. Stability & Regressions**  
| Issue | Severity | Status | Fix PR |
|------|----------|--------|--------|
| `Requests/tokens per day rate limit` missing ([#14398](https://github.com/BerriAI/litellm/issues/14398)) | High | Open | ❌ Not yet fixed |
| Per-customer RPM limits fail after virtual key caching ([#39713](https://github.com/BerriAI/litellm/issues/39713)) | High | Open | ❌ Not yet fixed |
| Streaming response crashes due to missing `usage` in `message_delta` ([#41336](https://github.com/BerriAI/litellm/pull/41336)) | Critical | Fixed | ✅ [PR #41336](https://github.com/BerriAI/litellm/pull/41336) |
| `compression_savings_spend` and `prompt_caching_savings_spend` always $0 with cost-based routing ([#37117](https://github.com/BerriAI/litellm/issues/37117)) | High | Open | ❌ Not yet fixed |
| Dashboard logs flood with `ERROR` stacktraces for non-admin users ([#30442](https://github.com/BerriAI/litellm/issues/30442)) | Medium | Open | ❌ Not yet fixed |

> ✅ **Fixed**: Streamed response handling errors now gracefully fall back to proxy-side token estimation ([#41337](https://github.com/BerriAI/litellm/pull/41337)).

#### **6. What This Means for Application Developers**  
- **Use `LiteLLM_DailyGlobalSpend`** to avoid performance bottlenecks in large-scale dashboards.  
- **Enable `s3_log_prompts_only`** if you're storing logs in S3 and don’t need full response bodies—cut storage costs.  
- **Implement daily rate limits** via upcoming support in [#14398](https://github.com/BerriAI/litellm/issues/14398) to align with free-tier provider models (e.g., OpenAI).  
- **Monitor guardrail behavior**: Post-MCP tool call guardrails are now properly executed at key/team/policy level ([#41334](https://github.com/BerriAI/litellm/pull/41334)), improving PII and policy enforcement.  
- **Avoid `key alias` conflicts**: The current behavior restricts cross-user alias reuse—design your key management systems accordingly until [#8328](https://github.com/BerriAI/litellm/issues/8328) is resolved.  

> 💡 Pro tip: Always verify Docker image signatures using `cosign verify` to prevent supply-chain risks in CI/CD pipelines.

---  
*Digest generated: 2026-09-16 | Source: [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-09-16**

---

### **1. Today's Highlights**  
The Unsloth project continues to prioritize stability and usability improvements across its inference, training, and studio tooling. Key focus areas include resolving critical model loading and memory management issues on macOS and Windows, fixing persistent bugs in GRPO and SFTTrainer workflows (especially with Qwen3.5), and enhancing Studio’s local model handling and UI responsiveness. A significant PR (#11060) addresses an over-aggressive context budget cap on Apple Silicon systems, improving performance for large-context models like Qwen3.8-Flash-Next.

---

### **2. Releases & Breaking Changes**  
*No new releases were published in the last 24 hours.*  
However, several **critical fixes are pending merge** that may affect backward compatibility:
- **PR #11022**: Fixes a Windows-specific backend leak where `llama-server` processes remain orphaned after model unload — a potential source of memory bloat and startup failures.
- **PR #11026**: Ensures Studio reads the local Hugging Face model cache without relying on remote connectivity, improving offline reliability and reducing latency during model discovery.
- **PR #11025**: Corrects misreported context limits by ensuring Studio honors user-specified context lengths rather than defaulting to precomputed estimates.

> 🔗 [PR #11022](https://github.com/unslothai/unsloth/pull/11022), [PR #11026](https://github.com/unslothai/unsloth/pull/11026), [PR #11025](https://github.com/unslothai/unsloth/pull/11025)

---

### **3. New Model & Hardware Support**  
- **AMD ROCm Support**: PR #6276 confirms that bundled `rocm-gfx1151` prebuilts crash on bare-metal Strix Halo (Ryzen AI MAX+ 395). Users must now use system ROCm instead of the bundled runtime. This highlights a growing need for better hardware-specific runtime detection.
- **Apple Silicon (Metal)**: Ongoing work to refine Metal memory accounting (#11060) enables better support for high-context models (e.g., Qwen3.8-Flash-Next) on 128GB MacBook Pro, though full optimization remains under active development.
- **Multimodal Models**: PR #11031 adds support for forwarding vision-specific kwargs (`spatial_shapes`, `image_position_ids`) in GRPO training — enabling proper multimodal input handling for models like LFM2-VL and Gemma 4 Vision.

> 🔗 [PR #6276](https://github.com/unslothai/unsloth/pull/6276), [PR #11031](https://github.com/unslothai/unsloth/pull/11031)

---

### **4. Performance & Optimization**  
- **Context Handling on Mac**: A major improvement is underway to fix Studio’s artificial context limit (e.g., capping Qwen3.8-Flash-Next at 8,192 tokens on 128GB MacBook). The fix ensures the actual available VRAM and compute capacity inform context size decisions.
- **Model Cache Efficiency**: PR #11026 removes dependency on Hugging Face API calls for local model cache discovery, reducing latency and enabling fully offline operation.
- **Kernel-Level Work**: PR #10391 introduces a throwaway benchmark for NVFP4 + low-rank correction kernels on non-Linux platforms (Windows/WSL), signaling future optimization efforts for RTX 5090 and DGX Spark systems.

> 🔗 [PR #11060](https://github.com/unslothai/unsloth/pull/11060), [PR #10391](https://github.com/unslothai/unsloth/pull/10391)

---

### **5. Stability & Regressions**  
Top regressions reported today:
1. **Infinite Loop During Qwen3 Fine-Tuning** ([#3211](https://github.com/unslothai/unsloth/issues/3211)) – A severe regression in `unsloth-2025.7.1+` causing training loops to hang indefinitely. Confirmed on RTX 4090D; no fix yet.
2. **GRPO Training Crash with Qwen3.5** ([#4801](https://github.com/unslothai/unsloth/issues/4801)) – `RuntimeError: Sizes of tensors must match in apply_rotary_pos_emb`. Reported on 48GB GPU with TRL 0.24.0; blocks RLHF workflows.
3. **macOS Memory Growth in llama-server** ([#5641](https://github.com/unslothai/unsloth/issues/5641)) – Long-running inference causes unbounded RAM usage; impacts real-time agent deployment.
4. **Incorrect LoRA Size Reporting** ([#1093](https://github.com/unslothai/unsloth/issues/1093)) – LoRA adapters appear nearly as large as base models, misleading users about storage and transfer costs.

> ✅ Fix PRs exist for some: [#11022](https://github.com/unslothai/unsloth/pull/11022) (Windows backend leak), but none yet for Qwen3 infinite loop or GRPO tensor mismatch.

---

### **6. What This Means for Application Developers**  
- **Avoid `unsloth>=2025.7.1` if fine-tuning Qwen3** — Use older versions until [#3211](https://github.com/unslothai/unsloth/issues/3211) is resolved.
- **Use system ROCm on AMD**, not bundled prebuilts — the latter crash on newer Ryzen AI chips (Strix Halo).
- **For macOS deployments**, expect higher-than-expected memory usage during long-running inference; consider limiting context length or upgrading hardware.
- **When using GRPO with multimodal models**, ensure you’re on the latest codebase — vision kwargs were previously dropped, leading to incorrect loss gradients.
- **Local model persistence in Studio**: Mount `/workspace/work` *and* any custom model directories via Docker to avoid data loss ([#10923](https://github.com/unslothai/unsloth/issues/10923)).

> 📌 **Actionable Tip**: For production-grade fine-tuning, verify your environment matches the tested stack in official notebooks. Avoid `device_map='auto'` with Accelerate 0.34.1+ unless patched (see [#3607](https://github.com/unslothai/unsloth/issues/3607)).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*