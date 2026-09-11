# AI Infrastructure Digest 2026-09-11

> Generated: 2026-09-11 00:29 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-09-11**

---

### **1. Ecosystem Overview**  
The AI inference and serving ecosystem is entering a phase of high specialization and convergence, driven by next-generation models (e.g., DeepSeek-V4.1, GLM-5.3-Flash, Kimi-K3) and hardware advancements (Blackwell sm_121, ROCm7.0+, RDNA3.5). Projects are increasingly focused on distributed efficiency, structured output reliability, and cross-platform stability—especially across NVIDIA and AMD ecosystems. While vLLM and SGLang lead in low-latency, high-throughput inference for large-scale deployments, tools like Ollama and LiteLLM are cementing their roles as accessible gateways for developers and agents. Meanwhile, Unsloth pushes boundaries in fine-tuning speed and model quantization, particularly for video and multimodal workloads.

---

### **2. Activity Comparison**

| Project       | Open Issues | Open PRs | Releases (Last 24h) | Notes |
|---------------|-------------|----------|------------------------|-------|
| **vLLM**      | 82          | 124      | None                   | High focus on speculative decoding correctness and ROCm stability |
| **SGLang**    | 79          | 143      | None                   | Active integration of DSV4.1; CI/CD blockers slowing progress |
| **llama.cpp** | 131         | 118      | `b10901`, `b10899`     | Frequent minor releases; strong Vulkan/CPU optimization momentum |
| **Ollama**    | 112         | 67       | None                   | Critical CVEs and UX regressions dominate issue load |
| **LiteLLM**   | 69          | 54       | `v1.100.1`, `v1.101.0-rc.2` | Security-focused release; stability issues in health checks and cost tracking |
| **Unsloth**   | 87          | 89       | None                   | Major performance wins in LoRA training and NVFP4 support |

> ✅ *Insight*: **SGLang** leads in contribution velocity, while **llama.cpp** shows the most active release cadence. **Ollama** has the highest number of open issues relative to activity—indicating growing instability at scale.

---

### **3. Model Support Race**

| Model / Architecture         | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|------------------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek-V4.1 (FP8, TP8)** | ✅ (PRs in progress) | ✅ (active integration) | ✅ (experimental) | ⚠️ Requested (Issue #18360) | ❌ | ❌ |
| **Kimi-K3 (ROCm, multi-stream)** | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| **GLM-5.3-Flash (DFlash, vision)** | 🔧 (partial ROCm) | 🔧 (tracking) | ✅ (multimodal) | ✅ (cloud) | ❌ | ❌ |
| **Qwen3.8-Flash-Next (GDN, hybrid)** | ✅ (fixes landed) | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Vulkan Backend (AMD UMA APUs)** | ✅ (stable) | ⚠️ (wedge reported) | ✅ (small-M opt) | 🛑 (wedge, Issue #18370) | ❌ | ❌ |
| **NVFP4 Video Diffusion (Wan2.2, Hunyuan)** | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ (hosted pre-quantized) |

> 🏆 **Leaderboard**:  
> - **vLLM & SGLang** are neck-and-neck in upstream model support, with vLLM slightly ahead on GPU-specific optimizations.  
> - **llama.cpp** leads in cross-platform availability (Windows ARM64, Vulkan, SYCL), but lacks cloud-native or agent-ready tooling.  
> - **Unsloth** dominates in niche, high-performance use cases (video diffusion, LoRA fine-tuning).

---

### **4. Performance Frontier**

| Optimization Focus            | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|-------------------------------|------|--------|-----------|--------|---------|---------|
| **KV Cache Management**       | ✅ (prefix-cache, PCP sharding) | ✅ (HiCache + encoder replay) | ✅ (async copy fixes) | ⚠️ (context window scaling) | ❌ | ❌ |
| **Speculative Decoding**      | ✅ (hybrid GDN, MTP fixes) | ✅ (worker staging) | ⚠️ (divergence under greedy) | ❌ | ❌ | ❌ |
| **Kernel Fusion & Low-Level** | ✅ (CUTLASS Lamport GEMM) | ✅ (DSA indexer fusion) | ✅ (A/B swapping, small-M) | ❌ | ✅ (HTTP/2, offload) | ✅ (bitsandbytes stream refactoring) |
| **Quantization & Memory**     | ✅ (persistent_topk, FP8) | ✅ (shared-experts fusion) | ✅ (NVFP4, fp8 K cache) | ❌ | ❌ | ✅ (NVFP4, MoE fusion) |
| **Distributed Serving (MoE, TP)** | ✅ (PCP decode sharding, fixed-order AllReduce) | ✅ (MoE fusions, DCP) | ❌ | ❌ | ❌ | ❌ |

> 🔥 **Trend**: The frontier is shifting toward **structured output-aware scheduling**, **multi-stream overlap**, and **hardware-agnostic kernel fusion**—with vLLM and SGLang leading in distributed and high-throughput scenarios.

---

### **5. Layer Positioning**

| Project       | Primary Layer               | Secondary Role                             | Key Differentiator |
|---------------|-----------------------------|--------------------------------------------|--------------------|
| **vLLM**      | Inference Engine            | Model Serving, LLM Gateway                 | Industry-standard for large-scale, low-latency inference |
| **SGLang**    | Inference Engine + Agentic Runtime | Distributed Serving, Tool Calling        | Full-stack agentic support via RFCs and unified eval pipelines |
| **llama.cpp** | Local Runtime / Edge Inference | Cross-platform inference (CPU/Vulkan/SYCL) | Unmatched portability and lightweight deployment |
| **Ollama**    | LLM Gateway / Developer CLI | Agent Orchestration, Cloud Integration   | User-friendly interface; growing role in local-to-cloud workflows |
| **LiteLLM**   | API Gateway / Proxy Layer   | Cost Tracking, Observability, OCR Pipeline | Enterprise-grade guardrails and spend visibility |
| **Unsloth**   | Fine-Tuning Framework       | Training Acceleration, Model Quantization | World-leading LoRA speedup and NVFP4 video support |

> 📊 **Strategic Insight**:  
> - **vLLM/SGLang** → infrastructure backbone for scalable production systems.  
> - **llama.cpp/Ollama** → developer-facing tools for prototyping and edge deployment.  
> - **LiteLLM/Unsloth** → specialized enablers for security, compliance, and high-performance training.

---

### **6. Trend Signals**

#### **Emerging Industry Trends (from 2026-09-11 activity):**
1. **Structured Output Reliability is Now a First-Class Concern**  
   Multiple projects (vLLM, SGLang, Ollama) report bugs where `tool_choice="required"` fails or `thinking=true` breaks FSM logic — signaling that agent frameworks must now treat structured outputs as non-negotiable.

2. **Hardware Convergence is Driving Forked Development Paths**  
   ROCm support is no longer optional—it’s a requirement for major models (Kimi-K3, DeepSeek-V4 Vision). However, inconsistencies between backends (e.g., GLM-5.3-Flash on ROCm vs CUDA) reveal fragmentation risks.

3. **Security & Supply Chain Integrity Are No Longer Optional**  
   LiteLLM’s cosign-signed images and Ollama’s CVE-12 critical Go binary highlight that trust in inference stacks extends beyond model accuracy to runtime integrity.

4. **Agent Workflows Are Exposing Latency Bottlenecks**  
   Full context reprocessing after tool calls (Unsloth) and streaming response corruption (Ollama) indicate that agent logic is pushing the limits of current inference engines.

5. **Fine-Tuning Speed Is Becoming Competitive**  
   Unsloth’s 1.28x faster Qwen3.5-9B LoRA training on B200 GPUs suggests that training acceleration is now a key differentiator—especially for video and multimodal models.

---

### **Recommendations for Application Developers**
- **For Production Inference**: Use **vLLM `0.29.0+`** with `VLLM_TP_FIXED_ORDER_ALLREDUCE=1` and avoid `persistent_topk` edge cases.
- **For Agents & Structured Outputs**: Test with **SGLang** or **Ollama** only after verifying tool calling behavior; expect instability until PRs #38963, #18351, and #55552 land.
- **For Edge/Local Deployment**: Choose **llama.cpp** for maximum portability, but verify quantization compatibility (e.g., `Q4_K_M` determinism).
- **For Cost-Controlled Environments**: Adopt **LiteLLM v1.101.0-rc.2** with pod-local spend tracking and cosign verification.
- **For Video & Multimodal Agents**: Leverage **Unsloth’s NVFP4 pre-quantized models** for 2× inference speed—just ensure P2P is disabled on non-NVLink cards.

> ✅ **Final Takeaway**: The ecosystem is maturing rapidly—but with increasing complexity. **Prioritize stability over novelty** when selecting stack components, especially for agent applications. Monitor upstream PRs closely: today’s “experimental” feature may be tomorrow’s production blocker.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-09-11**

---

### **1. Today's Highlights**  
The vLLM project continues to accelerate support for next-generation models and hardware, with critical fixes for speculative decoding on hybrid GDN architectures (Qwen3.5/3.8) and robust ROCm integration for Kimi-K3 and DeepSeek-V4 Vision. A major focus remains on stability and correctness—especially around `persistent_topk` determinism and GPU memory management—while performance optimizations target MoE, DFlash, and multi-stream inference on both NVIDIA and AMD platforms.

---

### **2. Releases & Breaking Changes**  
*None reported in the last 24 hours.*  
No new releases or breaking API/config changes were published. The latest stable version remains `0.29.0`, with ongoing work in `main` targeting `0.30.0` features like full Blackwell (`sm_121`) support and enhanced structured output compatibility.

---

### **3. New Model & Hardware Support**  
- ✅ **DeepSeek-V4 Vision** enabled on ROCm via PR #55107 — supports multimodal input through `DeepseekV4ForConditionalGeneration`.  
- ✅ **Kimi-K3** now supports shared-expert multi-stream overlap in TP deployments on ROCm (PR #56167).  
- 🔧 **GLM-5.3-Flash-DFlash** is being actively evaluated on ROCm, though missing `SupportsEagle3` and non-causal sparse-MLA paths remain blockers (Issue #54451).  
- 🚧 **SM8x (Ampere: A100/A800/RTX 30xx)** support for **DeepSeek-V4-Flash-0731** is under active development (Issue #50576, 107 comments), currently blocked due to kernel compatibility issues.  
- ⚠️ **NVIDIA DGX Spark (GB10, sm_121)** lacks full CUDA 13.0 + PyTorch 2.11.0 support; stale Triton cache causes silent corruption (Issue #41871).

---

### **4. Performance & Optimization**  
- 📈 **Hybrid GDN + MTP Speculative Decoding**: Fixes landed in PR #52244 restore prefix-cache hit efficiency, eliminating ~30–40% throughput loss on repeated prompts.  
- 💡 **Prefetching & mmap sharing**: PR #56357 introduces asynchronous engram lookup prefetch and host table sharing via `mmap` for DeepSeek V4.1, reducing I/O latency during CPU offload.  
- ⚙️ **PCP Decode Sharding**: PR #52162 shards decode requests across PCP ranks, avoiding redundant computation in `DCP=1` setups — improves scalability for large-scale deployments.  
- 🔥 **CUTLASS Lamport GEMM + AllReduce**: RFC #55261 proposes integrating SM100-native fused kernels for improved communication efficiency in large-scale MoE and tensor-parallel training/inference.  
- 🔄 **Fixed-order TP reduction**: PR #56358 adds opt-in `VLLM_TP_FIXED_ORDER_ALLREDUCE=1` to improve determinism and reduce contention in distributed settings.

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Fix PR |
|--------|------|-------|--------|
| 🔴 High | `Qwen3.8-Flash-Next`: greedy decoding non-deterministic when prompt nears `indexer_budget` (due to `persistent_topk` bin collision) | Open | [Issue #54521](https://github.com/vllm-project/vllm/issues/54521) |
| 🔴 High | `GlmMoeDsa` + `decode-context-parallel`: crashes on `0.28.0`, returns random tokens on `0.29.0` | Open | [Issue #54300](https://github.com/vllm-project/vllm/issues/54300) |
| 🟡 Medium | `GLM-5.3-Flash`: recurring CUDA illegal memory access across multiple kernels (KDA linear-attention, MHC TileLang, TRT-LLM fused MoE) | Open | [Issue #54317](https://github.com/vllm-project/vllm/issues/54317) |
| 🟡 Medium | `tool_choice="required"` not enforced with `enable_thinking=false` (streaming); FSM errors with `thinking=true` + MTP | Open | [Issue #55552](https://github.com/vllm-project/vllm/issues/55552) |
| 🟢 Low | `GLM5.3-Flash v0.29.0` loading error from safetensors shard failure | Closed | [PR #56007](https://github.com/vllm-project/vllm/pull/56007) |

---

### **6. What This Means for Application Developers**  
- **Use caution with speculative decoding on Qwen3.5/3.8 hybrid GDN models** — ensure you're on `v0.29.0+` or later to avoid up to 40% throughput loss due to prefix-cache misses (fixed in PR #52244).  
- **Avoid `persistent_topk` edge cases** when using `Qwen3.8-Flash-Next` with long prompts — expect non-deterministic outputs if context length approaches `indexer_budget`.  
- **Enable `VLLM_TP_FIXED_ORDER_ALLREDUCE=1`** in distributed environments where reproducibility and reduced contention matter.  
- **Monitor ROCm builds carefully** — while Kimi-K3 and DeepSeek-V4 Vision are now supported, some model backends (e.g., GLM-5.3-Flash) lack full functionality on ROCm.  
- **Test tool calling and structured output** with `enable_thinking=false` and `MTP` enabled — known bugs may cause enforcement failures (see #55552).  

> ✅ *Recommendation*: Pin your deployment to `v0.29.0` or nightly builds with recent patches until `0.30.0` stabilizes. Use `--disable-async-scheduling` as a workaround for `MRV1 + PP>1 + structured output` conflicts (PR #56250).

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-09-11**

---

### **1. Today's Highlights**  
The SGLang project is advancing key infrastructure for next-generation LLM serving, with critical progress on DeepSeek-V4.1 integration and CUDA/ROCm stability. High-priority PRs focus on fixing speculative decoding issues, enabling HiCache with encoder replay in DSV4.1, and unifying evaluation pipelines across benchmarks. A major effort to sync with upstream main (PR #38818) is underway, blocking the release of DeepSeek-V4.1.

---

### **2. Releases & Breaking Changes**  
*None*  

---

### **3. New Model & Hardware Support**  
- **DeepSeek-V4.1 (FP8, mxfp4 experts, TP8)**: Active integration via PRs #38798, #38954, #38962. Key focus areas include shared-experts fusion, indexer execution unification, and HiCache compatibility with encoder SWA replay (PR #38957).  
- **SenseNova-U1/U1.5**: Tracking issue #37742 now active; support aligned with OpenSenseNova/SenseNova-U1 reference implementation.  
- **MiniMax-M3 (ROCm)**: Added support for fp8 K cache allocation (PR #36549) and shared-experts fusion on gfx942+ (PR #36576).  
- **GLM-5.3-Flash (SM120)**: Tracking issue #37813 details required fixes for deployment on two 96GB RTX PRO 6000 Blackwell GPUs (TP2, W4A16, FP8 KV, MTP).  
- **Kimi-K3**: Strict tool-call grammar bug reported (Issue #38587); impacts schema validation in structured outputs.

---

### **4. Performance & Optimization**  
- **Distributed Speculative Decoding**: PR #38554 enables speculative workers to stage prefill reads before target replay, improving pipeline efficiency.  
- **Kernel Fusion**:  
  - AMD ROCm: Fused DSA indexer q/k prep into single kernel launch (PR #34394), reducing decode overhead by ~11 kernels per layer.  
  - Qwen3.5 GDN: Fused `in_proj_qkvz` and `in_proj_ba` into one GEMM when quantized identically (PR #33068), eliminating redundant kernel launches.  
- **MoE Optimization**: PR #38700 proposes fusing shared → sparse experts in DSV4 DeepGEMM MegaMoE, targeting higher throughput for large MoE models.  
- **Unified Evaluation**: PR #38953 consolidates GSM8K and MMLU evaluation logic under `sgl-eval`, improving consistency and reducing test drift.

---

### **5. Stability & Regressions**  
- **Critical Crash (CUDA)**: Decode retraction crashes during CPU backup due to index-space mismatch (Issue #38645, PR #38961). A fix PR (#38961) hardens deferred KV release to prevent premature page deallocation.  
- **Model-Specific Crashes**:  
  - H20 8-card failure launching Qwen3.8-Flash-Next-FP8 (Issue #38793).  
  - DSV4.1 logits corrupted with `--enforce-shared-experts-fusion` (PR #38963, currently open).  
- **Memory Corruption / Undefined Behavior**:  
  - GLM-5.3 checkpoints silently drop MoE/mHC/KDA weights (Issue #38618).  
  - `stop_regex` buffer bound incorrectly treats `[^x]` as unbounded (Issue #30932).  
- **CI/Build Issues**:  
  - `NVSHMEM_IB_GID_INDEX` missing in bundled 3.4.5 (Issue #38769), blocking InfiniBand use in IDC.  
  - `--log-level` uppercase values crash HTTP server (Issue #30353).  

> 🔥 *Severity Ranking*:  
> 1. DSV4.1 shared-experts fusion crash (PR #38963)  
> 2. HiCache + encoder replay incompatibility (PR #38957)  
> 3. Decode retraction crash (PR #38961)  
> 4. GLM-5.3 weight loss (Issue #38618)

---

### **6. What This Means for Application Developers**  
- **Agentic Workloads**: Expect improved KV-cache management with RFC #36224 (versioned KV hint envelope), enabling more robust trajectory-aware scheduling.  
- **Multi-Modal & Structured Output Apps**: Be cautious with Kimi-K3 strict tool schemas — a known bug may allow invalid input types (Issue #38587). Use `additionalProperties` carefully.  
- **High-Concurrency Deployments**: Avoid `--dcp-size > 1` with `breakable` CUDA graphs until PR #38943 is merged.  
- **Hardware-Specific Builds**: On ROCm, ensure you're using latest wheels (PR #38767 retired rocm700). For Minimax-M3 or SenseNova-U1, verify backend compatibility.  
- **Benchmarking**: Use unified `sgl-eval` (PR #38953) for consistent GSM8K/MMLU scores across CI and local runs.  

👉 *Actionable Tip*: Monitor PR #38818 (sync to upstream main) — DeepSeek-V4.1 support hinges on this merge. Delay model deployments until resolved.  
🔗 [View all PRs](https://github.com/sgl-project/sglang/pulls?q=is%3Aopen+sort%3Aupdated-desc) | [Track CI Status](https://github.com/sgl-project/sglang/issues/17050)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-09-11**

---

### **1. Today’s Highlights**  
The latest updates focus on Vulkan backend stability and performance for Qwen-family models, with critical fixes for speculative decoding correctness and memory management. Notably, the `b10901` release resolves CPU-write issues in async tensor copying, while new optimizations improve small-M matrix handling—key for efficient MoE and flash attention workloads.

---

### **2. Releases & Breaking Changes**  
- **`b10901`**: Fixed `ggml_backend_vk_cpy_tensor_async` to use CPU writes when context is idle (#28618) — prevents potential race conditions during asynchronous transfers.
- **`b10899`**: Enhanced top-k MoE fusion support via `add_alloc_dep` for prefill (#28422), improving speculative decoding efficiency on large MoE models.
- **`b10897`**: Optimized small-M matrix operations (M=1) for Qwen via A/B swapping and dynamic tile selection based on M (#28457).  
  → *Migration Note*: These changes may affect performance characteristics of speculative decoding pipelines using small M matrices; verify behavior with DFlash/MTP.

---

### **3. New Model & Hardware Support**  
- **Model Support**:  
  - Added experimental support for **DeepSeek-V4.1-Flash** (`deepseek41` architecture) via PR #28696.  
  - Added **GLM-5.3-Flash** (320B hybrid text+vision model) in PR #27773, supporting both text and multimodal inference.
  - Introduced dedicated parser for **Ling 3.0 (Bailing V3)** in chat mode (PR #28682), fixing incorrect tool call parsing due to early `<think>` emission.

- **Backend/Hardware**:  
  - Enabled **Windows ARM64 builds with MSVC cl.exe** (PR #28362), removing dependency on LLVM/Clang for native compilation.
  - Added **SYCL graph record/replay** support (PR #28725), enabling deterministic execution across SYCL devices (Intel Arc, etc.).

---

### **4. Performance & Optimization**  
- **Vulkan**:  
  - Small-M optimizations reduce overhead in `mul_mat_vec` by swapping operands and dynamically selecting tiles based on M size (#28457). Improves throughput by ~15–25% in low-M scenarios typical of draft models.
  - Enabled `split_k` for small M matrices, allowing better utilization of compute units.
- **CPU**:  
  - Tiled `mul_mat` implementation using VNNI for k-quants (PR #27851) shows **3–7x speedup** over baseline on modern x86 CPUs.
- **CUDA**:  
  - RDNA3.5 wmma batched kernels now supported (PR #28714), targeting AMD GPUs with enhanced matrix multiplication throughput.

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Fix PR |
|---------|------|--------|--------|
| High | Speculative decoding divergence under greedy sampling on quantized targets (Q4_K_M) | Open (#25618) | None |
| High | CUDA illegal memory access in `flash-attn` path with partial expert offload (Qwen3.6-35B MoE) | Open (#26609) | None |
| Medium | Vulkan garbage output on Intel Arc 140V (Windows) with batch-dependent behavior | Open (#28648) | None |
| Medium | SYCL crash in `scratchpad` pool due to LIFO order violation | Open (#28660) | None |
| Low | DFlash + vision models fail to allocate drafter tokens due to image offset copy | Fixed (#28587) | ✅ [PR #28587](https://github.com/ggml-org/llama.cpp/pull/28587) |

> ⚠️ **Critical Note**: The `--cache-disk` feature request (#20697) remains open — disk-based context checkpointing is still not available, limiting long-context scalability.

---

### **6. What This Means for Application Developers**  
- **Speculative Decoding Users**: Avoid `Q4_K_M` or similar quantizations if strict determinism is required under greedy sampling. Use `bf16` targets until #25618 is resolved.
- **MoE & Flash Attention Workloads**: Leverage `b10899+` releases for improved `topk_moe` fusion and reduced decode latency on Qwen3.8-Flash-Next and similar models.
- **Cross-Platform Deployments**: Use Windows ARM64 builds with MSVC (via #28362) for easier local development on Surface devices or Arm64 servers.
- **Performance-Critical Apps**: Enable tiled `mul_mat` (CPU) and `rdna35 wmma` (CUDA) paths for significant gains on target hardware.
- **Future-Proofing**: Monitor PRs like #28725 (SYCL graphs) and #28699 (QSA indexer caching) — they will unlock higher-throughput, lower-latency inference in production deployments.

🔗 [View full release notes](https://github.com/ggml-org/llama.cpp/releases) | [Track issues](https://github.com/ggml-org/llama.cpp/issues)

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-09-11**

---

### **1. Today's Highlights**  
The Ollama ecosystem continues to expand its cloud and local inference capabilities, with critical progress on context window support (up to 1M tokens) and improved tooling for agents. High-priority stability fixes were merged for streaming responses and GPU backend reliability, while new PRs target model parser robustness and memory safety in MLX and Vulkan backends.

---

### **2. Releases & Breaking Changes**  
*No new releases in the past 24 hours.*  
However, two key PRs address breaking changes:  
- **PR #18351** (`server: propagate cloud stream failures`) fixes a critical issue where partial cloud responses were silently treated as complete, impacting `glm-5.3:cloud`’s reliability in agent workflows. [Link](https://github.com/ollama/ollama/pull/18351)  
- **PR #18374** (`llm: raise token repeat limit to 100`) increases the threshold for detecting repetitive token loops, reducing premature truncation during OCR or long-form generation. [Link](https://github.com/ollama/ollama/pull/18374)

---

### **3. New Model & Hardware Support**  
- **DeepSeek-V4.1-Flash** added to Cloud request list via **Issue #18360** and **#18178**, signaling strong community demand for high-throughput, low-latency models. [Link](https://github.com/ollama/ollama/issues/18360)  
- **Vulkan ggml backend** now under scrutiny due to a reported wedge in AMD UMA APUs (**Issue #18370**) — a regression affecting GPU-accelerated inference on Linux systems.  
- **MLX backend enhancements**: PRs #18376 (`keep gemma3n projector off CPU`) and #18327 (`scope array lifetimes`) improve CPU/GPU memory safety and reduce silent corruption risks.

---

### **4. Performance & Optimization**  
- **Context Window Scaling**: PR #18364 adds UI support for 512K and 1M context lengths in settings, addressing user frustration from #18352. This enables full utilization of 1M-capable models like `glm-5.3:flash`. [Link](https://github.com/ollama/ollama/pull/18364)  
- **Streaming Efficiency**: PR #18351 ensures incomplete cloud streams are properly terminated, improving client-side error handling and resource cleanup.  
- **Model Loading**: Users report performance regressions post-0.23.4 (**Issue #18373**), indicating potential bottlenecks in model load pipelines — ongoing investigation.  

---

### **5. Stability & Regressions**  
| Severity | Issue | Summary | Fix Status |
|---------|------|--------|-----------|
| 🔴 CRITICAL | #16033 ([bug] CVEs in Go binary) | 12 high/severe vulnerabilities in `/usr/local/bin/ollama`, including path traversal risks. | Open — urgent patch needed |
| 🟡 HIGH | #18370 ([bug] Vulkan ggml backend wedges) | One thread at 100% CPU, GPU idle; generations stall indefinitely on AMD UMA APUs. | In progress — no fix yet |
| 🟡 HIGH | #18368 ([bug] macOS GUI fails silently after 6k tokens) | Long prompts fail without UI feedback; reproducible on M4 Pro with 48GB RAM. | Open — affects agent UX |
| 🟡 HIGH | #18193 ([bug] glm-5.3:cloud enters endless reasoning) | Model hangs during code generation tasks despite working fine on official Z.AI API. | Fixed via #18351 |
| 🟡 MEDIUM | #18344 ([bug] fd leak in `ollama serve`) | One file descriptor leaked per successful `/api/generate` request → eventual exhaustion. | Open — high impact on long-running servers |

---

### **6. What This Means for Application Developers**  
- **Avoid using `gemma3nTools:e4b` or `qwen2.5vl:3b` with complex tool schemas** until PRs #18357 and #18369 are resolved — structured output may be lost or corrupted.  
- **Enable 1M context windows only if your app handles large input buffers** — recent UI updates (#18364) allow selection, but ensure your backend can manage memory spikes.  
- **Do not rely on `finish_reason` being non-null** — persistent issues in #7547 and #8967 indicate inconsistent behavior across models; validate response structure explicitly.  
- **Use `ANTHROPIC_BASE_URL=http://localhost:11434` cautiously** — complex tool schemas may cause literal text emission instead of structured `tool_use` blocks (**Issue #18346**).  
- **Monitor memory usage closely** — both `ollama ps` and `top` may not reflect actual memory pressure due to leaks in MLX runners (**PR #18345**) and Vulkan drivers.

> ✅ **Recommendation**: Upgrade to latest stable release when available, especially if using cloud models or agent integrations. Audit all model-specific parsing logic, particularly for `gemma4`, `qwen2.5-coder`, and `glm-5.3`.

---  
*Data sourced from GitHub: ollama/ollama — 2026-09-11*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-09-11**

---

### **1. Today's Highlights**  
The LiteLLM ecosystem continues to mature with strong focus on stability, observability, and enterprise-grade guardrails. Key developments include the introduction of *ConductGuard* integration, a new e2e memory regression test to prevent OOM issues from slipping into releases, and significant improvements in OCR pipeline support via Azure and Vertex AI adapters. The release of `v1.101.0-rc.2` underscores ongoing efforts toward secure, verifiable deployments through cosign-signed Docker images.

---

### **2. Releases & Breaking Changes**  
- **v1.100.1** and **v1.101.0-rc.2** released today. Both versions include enhanced security via [cosign signature verification](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0) for all Docker images.  
- No breaking API changes reported; backward compatibility preserved.  
- **Note**: Users upgrading from v1.88.0 should verify `/metrics` endpoint behavior (see #30079), as redirect issues may cause empty data collection.

> 🔗 [GitHub Release v1.100.1](https://github.com/BerriAI/litellm/releases/tag/v1.100.1) | [Release v1.101.0-rc.2](https://github.com/BerriAI/litellm/releases/tag/v1.101.0-rc.2)

---

### **3. New Model & Hardware Support**  
- ✅ **Azure Document Intelligence** added via PR [#40534](https://github.com/BerriAI/litellm/pull/40534), enabling structured document parsing with bounded polling and normalized output.  
- ✅ **Azure Mistral** and **Vertex Mistral** adapters now supported via PRs [#40533](https://github.com/BerriAI/litellm/pull/40533) and [#40507](https://github.com/BerriAI/litellm/pull/40507).  
- ✅ **Reducto legacy & v3 OCR adapters** introduced in [#40535](https://github.com/BerriAI/litellm/pull/40535), expanding support for high-volume document processing workflows.  
- ✅ **AWS Session Tags** now supported in Bedrock role assumption for CUR 2.0 cost attribution (PR [#34069](https://github.com/BerriAI/litellm/pull/34069)).

> 📌 *No new LLM models or hardware backends (e.g., GPU architectures) were added this week.*

---

### **4. Performance & Optimization**  
- **Streaming mock response optimization** (PR [#40637](https://github.com/BerriAI/litellm/pull/40637)): Emits admission-time usage chunk during streaming, reducing post-stream re-tokenization overhead by ~100–200ms on 50k–100k token inputs.  
- **HTTP/2 for Vertex AI Search** (PR [#40631](https://github.com/BerriAI/litellm/pull/40631)): Enables concurrent vector store queries without connection queuing bottlenecks.  
- **Spend tracking offload** (PR [#40545](https://github.com/BerriAI/litellm/pull/40545)): Offloads cost logging to pod-local sidecar, reducing inference worker latency spikes caused by DB/Redis writes — critical for low-tail-latency environments.

> ⚡ These optimizations are particularly impactful in high-throughput proxy deployments using Redis-backed cost tracking or large-scale OCR pipelines.

---

### **5. Stability & Regressions**  
| Issue | Severity | Status | Fix PR? | Description |
|------|----------|--------|---------|-------------|
| [#37611](https://github.com/BerriAI/litellm/issues/37611) | Critical | Open | ❌ | Background health checks load entire `LiteLLM_HealthCheckTable` into every worker → near-OOM memory use at scale |
| [#34281](https://github.com/BerriAI/litellm/issues/34281) | High | Open | ❌ | Health checks fail hard when hosts go offline — no graceful fallback for ad-hoc infra |
| [#30079](https://github.com/BerriAI/litellm/issues/30079) | Medium | Open | ❌ | `/metrics` returns empty data after upgrade to v1.88.0 due to 307 redirect |
| [#35563](https://github.com/BerriAI/litellm/issues/35563) | High | Open | ❌ | Reused `x-litellm-call-id` silently drops spend-log rows → cost inaccuracies |
| [#30208](https://github.com/BerriAI/litellm/issues/30208) | Low | Open | ❌ | Missing general-purpose fake streaming toggle for providers that break on real streaming |

> ⚠️ **Critical risk**: Multiple issues around cost tracking (`#35563`, `#37611`) could lead to undetected financial discrepancies in production systems.

---

### **6. What This Means for Application Developers**  
- **Use `v1.101.0-rc.2` with cosign verification** for production deployments requiring supply-chain integrity.  
- **Leverage new OCR integrations** (Azure, Vertex, Reducto) if your app processes scanned documents — they’re now more reliable and better instrumented.  
- **Enable the pod-local spend collector** (opt-in via `offload_spend_tracking: true`) to avoid tail latency inflation under load.  
- **Avoid `x-litellm-call-id` reuse** until `#35563` is fixed — it can silently corrupt cost logs.  
- **Monitor `/spend/logs/ui` access**: `internal_user` roles still don’t see own request data even with `store_prompts_in_spend_logs=true` (#34099).  
- **Consider adding ConductGuard** (via PR [#38143](https://github.com/BerriAI/litellm/pull/38143)) for policy-enforced LLM safety in regulated environments.

> ✅ **Pro Tip**: Use the new `GET /auto_router/session` endpoint (PR [#40330](https://github.com/BerriAI/litellm/pull/40330)) to show developers real-time routing savings in Claude Code/Codex — improves user trust and adoption.

---  
*Digest generated: 2026-09-11 | Source: [BerriAI/litellm GitHub](https://github.com/BerriAI/litellm)*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-09-11**

---

### **1. Today's Highlights**  
The Unsloth project continues its aggressive optimization push with major performance improvements in the Studio UI and backend, including full NVFP4 support for video diffusion models and faster LoRA fine-tuning on Blackwell GPUs. Critical stability fixes were merged to address model corruption on non-NVLink GPUs and a persistent issue causing full context reprocessing after tool calls — both of which impact production-grade agent workflows.

---

### **2. Releases & Breaking Changes**  
*No new releases announced in the past 24 hours.*  
However, several high-impact PRs were merged or are pending that may require configuration updates:
- **PR #10730**: Introduces per-layer NVFP4 policies for image DiTs and flashinfer FP4 backend — may affect model loading behavior if `auto` quantization is used.
- **PR #10745**: Refactors bitsandbytes native calls to use live PyTorch streams — could affect custom GPU kernels relying on cached stream references.
- **PR #10765**: Fixes Windows installer issues when user profiles contain spaces — users on Windows should upgrade to avoid installation failures.

> 🔗 [PR #10765](https://github.com/unslothai/unsloth/pull/10765) | [PR #10745](https://github.com/unslothai/unsloth/pull/10745)

---

### **3. New Model & Hardware Support**  
- ✅ **NVFP4 for Video Diffusion Models**: Full-model NVFP4 support added for Wan2.2-TI2V-5B, Wan2.2-T2V-A14B, and HunyuanVideo-1.5 (480p/720p) via hosted pre-quantized denoisers. No on-the-fly quantization required.
- ✅ **Qwen3.5-9B LoRA SFT Acceleration**: Experimental PR shows **1.28x faster training step** on NVIDIA B200 GPUs using unsloth-cli.py with optimized memory layout and kernel fusion.
- ✅ **MLX MoE Optimizations**: Optional integration of MLX MoE gate/up fusion and recurrent decode fusion now available in Studio (`perf(studio)`).

> 🔗 [PR #10729](https://github.com/unslothai/unsloth/pull/10729) | [PR #10733](https://github.com/unslothai/unsloth/pull/10733)

---

### **4. Performance & Optimization**  
- **LoRA Training Speedup**: Qwen3.5-9B LoRA fine-tuning achieves **1.28x faster step time** on B200 due to improved memory access patterns and kernel optimizations.
- **Image Pipeline Optimization**: Official BF16 image models now use FP8/INT8 fast path on supported GPUs (e.g., Hopper+), enabling faster inference without model conversion.
- **Model Load Time Reduction**: PR #10648 prevents redundant re-validation of llama.cpp, whisper.cpp, and Node installs during `studio update`, reducing startup overhead by ~5–10 seconds per run.
- **Context Management Improvements**: Work ongoing on rolling context window and compaction (Issue #7472) to enable long-context chat without full re-prefill.

> 🔗 [PR #10744](https://github.com/unslothai/unsloth/pull/10744) | [PR #10648](https://github.com/unslothai/unsloth/pull/10648) | [Issue #7472](https://github.com/unslothai/unsloth/issues/7472)

---

### **5. Stability & Regressions**  
⚠️ **Critical Issues Reported**:
- **Model Corruption on Non-NVLink GPUs** (Issue #10613): `GGML_CUDA_P2P=1` incorrectly enabled on RTX 6000 Ada, L40/L40S, and L4 — silently corrupting output.  
  → *Fix: PR #10613 already closed; patch applied in recent builds.*
- **Full Context Reprocessing After Tool Calls** (Issue #10698): With `set_seed`, entire context is reprocessed after every tool call — causing 3–5 minute delays at 30k tokens.  
  → *No fix yet; high priority for next release.*
- **Studio CLI Fails on Windows** (Issue #10699): `unsloth start codex` fails with `stdout is not a terminal` even in interactive console.  
  → *PR #10699 open; workaround: use `--no-tui` flag.*

🟡 **Other Notable Bugs**:
- Long GGUF chats lose prompt state after reload (Issue #9037) — causes ~11-minute full prefill.
- Image generation controls missing/invisible in Studio (Issue #10695).
- PDF uploads reject scans or omit image-only pages (Issue #10619).

> 🔗 [Issue #10613](https://github.com/unslothai/unsloth/issues/10613) | [Issue #10698](https://github.com/unslothai/unsloth/issues/10698) | [Issue #10699](https://github.com/unslothai/unsloth/issues/10699)

---

### **6. What This Means for Application Developers**  
- **Use NVFP4 for Video Agents**: If building AI video generators, leverage pre-quantized NVFP4 models via Studio’s `auto` ladder for up to 2× faster inference.
- **Avoid P2P Flags on Non-NVLink Cards**: Ensure `GGML_CUDA_P2P=0` is enforced in your environment if using RTX 6000 Ada or L-series GPUs — this is now auto-handled but worth validating.
- **Optimize Long-Context Workflows**: Watch for rolling context window support (Issue #7472); until then, expect high latency from full context reprocessing after tool calls.
- **Handle Installer Edge Cases**: For Windows deployments, ensure usernames don’t contain spaces — or upgrade to latest build with PR #10765 applied.
- **Leverage Live Dataset Previews**: Use the new live dataset preview (PR #10737) to debug data recipes in real time during training runs.

> 📌 Pro Tip: Monitor `UNSLOTH_SMART_OFFLOAD` and `UNSLUTH_NVFP4_AUTO` flags — they control advanced offload and quantization logic critical for performance tuning.

---  
*Digest generated: 2026-09-11 | Source: [unslothai/unsloth GitHub](https://github.com/unslothai/unsloth)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*