# AI Infrastructure Digest 2026-10-02

> Generated: 2026-10-02 01:47 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-10-02**

---

### **1. Ecosystem Overview**  
The AI infrastructure landscape in October 2026 is defined by a sharp bifurcation between **high-performance inference engines** and **developer-facing agent platforms**, with rapid convergence on next-gen hardware (NVIDIA Blackwell, Intel Arc B70, AMD MI350X) and emerging model architectures (Qwen4Exp, DeepSeek-V4.1-Flash, GLM-5.3-Flash). While vLLM and SGLang lead in low-level kernel optimization and speculative decoding maturity, Ollama and LiteLLM dominate developer experience and API abstraction—especially for agents and tooling. Security and stability are now central concerns, as recent PyPI compromises and GPU-specific crashes underscore the fragility of production-grade deployment pipelines.

---

### **2. Activity Comparison**

| Project         | Issues Open (Last 24h) | PRs Merged (Last 24h) | Release Status       |
|------------------|--------------------------|-------------------------|------------------------|
| **vLLM**         | 8                        | 12                      | None                   |
| **SGLang**       | 12                       | 9                       | v0.5.21 (active cycle) |
| **llama.cpp**    | 10                       | 11                      | b11330–b11332 (patch series) |
| **Ollama**       | 10                       | 3                       | v0.35.0 (regression)   |
| **LiteLLM**      | 5                        | 6                       | v1.103.2 (security fix) |
| **Unsloth**      | 7                        | 6                       | v0.1.902-beta (beta)   |

> 🔍 *Observation*: SGLang leads in momentum with high-volume contributions; vLLM shows focused engineering rigor; Ollama’s release cycle reveals growing instability despite strong community engagement.

---

### **3. Model Support Race**

| Model                     | vLLM             | SGLang           | llama.cpp        | Ollama           | LiteLLM          | Unsloth          |
|----------------------------|------------------|------------------|------------------|------------------|------------------|------------------|
| **DeepSeek-V4.1-Flash**   | ✅ SM120/SM121    | ✅ Full support    | ✅ MTP enabled     | ❌ Requested       | ❌ Not listed      | ❌ Not listed      |
| **Qwen4Exp (skinny decode)**| ✅ SM12x kernels   | ⚠️ Partial         | ✅ MTP + draft head| ❌ No support      | ❌ No support      | ❌ No support      |
| **GLM-5.3-Flash (ROCm)**  | ✅ Fixed (gfx950)  | ⚠️ Infinite loop   | ✅ Vision/text     | ❌ No support      | ❌ No support      | ✅ Text encoder sel |
| **LTX-2.3**               | ❌                | ❌                | ✅ Native gen      | ❌                | ❌                | ❌                |
| **Clef Decision Model**   | ❌                | ❌                | ✅ Custom API      | ❌                | ❌                | ❌                |
| **Gemini Live Avatar**    | ❌                | ❌                | ❌                | ❌                | ✅ GA support      | ❌                |

> 🏆 **Leaderboard**:  
> - **vLLM** leads in **Blackwell & ROCm** hardware readiness.  
> - **SGLang** excels in **model cookbook completeness** and **multimodal integration**.  
> - **llama.cpp** wins in **local GGUF flexibility** and **multi-model runtime**.  
> - **LiteLLM** is ahead in **cloud-native model access** (Anthropic, Bedrock, Vertex).

---

### **4. Performance Frontier**

| Focus Area                  | vLLM                          | SGLang                         | llama.cpp                    | Ollama               | LiteLLM               | Unsloth               |
|------------------------------|-------------------------------|--------------------------------|------------------------------|----------------------|------------------------|------------------------|
| **KV Cache Optimization**    | ✅ Async sharing, sparse prefill| ✅ HiCache/HiSparse, fused kernels| ✅ Sparse Flash Attention (Vulkan)| ⚠️ Limited           | ⚠️ High-level only     | ✅ Fused norm dequant  |
| **Speculative Decoding**     | ✅ ngram_hint, MTP, graph capture| ⚠️ Crashes on SM120/MI350X     | ✅ MTP (Qwen4Exp/GLM-5.3-Flash)| ⚠️ Avoid `dflash`     | ✅ Mid-stream fallback  | ✅ Command Palette     |
| **Quantization & Kernel Fusion**| ✅ FP8 KV cache, SM12x GEMM     | ✅ Per-token FP8, MLA+RoPE fusions| ✅ q2_K/q3_K (OpenCL), BF16 compute| ⚠️ CUDA memory errors| ✅ Budget-aware batching| ✅ 4-bit LoRA retention |
| **Distributed Serving**      | ✅ Multi-node gRPC              | ✅ Multi-GPU, hybrid scheduling| ⚠️ Only via external wrappers| ❌ Local-only         | ✅ MCP orchestration   | ✅ WSL2 vLLM/SGLang    |
| **Memory Efficiency**        | ✅ Reduced host transfers       | ✅ Unified SWA pool             | ✅ mmap optimizations        | ⚠️ CPU overload (M4 Max)| ✅ Spend log indexing | ✅ Cached int8 checkpoints |

> 📈 **Trend**: **Kernel fusion**, **sparse attention**, and **shared KV caching** are now baseline optimizations across all projects—indicating maturation of inference efficiency.

---

### **5. Layer Positioning**

| Project         | Primary Layer                  | Key Differentiators                                  |
|------------------|-------------------------------|-------------------------------------------------------|
| **vLLM**         | Inference Engine              | Low-latency, high-throughput GPU kernels; Blackwell-first |
| **SGLang**       | Inference Engine / Orchestrator | Speculative decoding stack; HiCache/HiSparse; multi-backend |
| **llama.cpp**    | Local Runtime / Edge Inference | GGUF-centric; cross-platform; CPU/Vulkan/ROCm focus |
| **Ollama**       | Gateway / Developer Platform  | Simplified CLI; local-first UX; model registry; proxy issues |
| **LiteLLM**      | LLM Gateway / Control Plane   | Unified API layer; cost tracking; guardrails; MCP support |
| **Unsloth**      | Fine-tuning / Agent Studio    | Training acceleration (LoRA); UI/UX; hosted decision APIs |

> 💡 **Positioning Insight**:  
> - **vLLM/SGLang** = Foundation layer (hardware-optimized inference).  
> - **llama.cpp** = Edge/low-resource execution.  
> - **Ollama/LiteLLM** = Developer abstraction (APIs, billing, security).  
> - **Unsloth** = Agent lifecycle builder (training → deployment → orchestration).

---

### **6. Trend Signals**

#### **Key Industry Trends Extracted:**
1. **Hardware Acceleration is Now a First-Class Concern**: All projects now actively target **NVIDIA SM120/SM121 (Blackwell)** and **AMD gfx950 (MI350X)**, indicating that next-gen GPUs are no longer experimental—they’re production-ready.
2. **Speculative Decoding is Still Unstable**: Despite progress, **crashes in MTP, graph capture, and MoE routing** plague vLLM and SGLang, revealing that speculative decoding remains a high-risk, high-reward frontier.
3. **Security is Non-Negotiable**: The **PyPI compromise** in LiteLLM and **unpatched CVEs in Ollama binaries** signal that trust in open-source packages is eroding—cryptographic signing (cosign) is becoming mandatory.
4. **Agent Workflows Demand Integrated Tooling**: Projects like **Unsloth (Command Palette)**, **LiteLLM (MCP)**, and **SGLang (recipes)** are shifting from pure inference to **agent orchestration frameworks**—a clear sign of application evolution.
5. **Hybrid Scheduling & Memory Management Are Critical**: Issues around **shared KV loads**, **host-GPU data movement**, and **memory pooling** indicate that scaling beyond single requests requires architectural innovation.

#### **What Developers Should Watch:**
- ✅ **Pin versions carefully**: Avoid `v0.35.0` (Ollama), `v1.82.7/8` (LiteLLM), and unstable `main` branches until regressions are resolved.
- ✅ **Prioritize security verification**: Always use `cosign verify` for LiteLLM images and audit Ollama binaries.
- ✅ **Test speculative decoding cautiously**: Especially on **RTX PRO 6000 (SM120)** and **MiMo-V2.6/MXFP4** models—expect crashes until fixes land.
- ✅ **Leverage new tooling**: Use **Unsloth’s Command Palette**, **LiteLLM’s mid-stream fallback**, and **llama.cpp’s cached int8 checkpoints** for faster agent development.
- ✅ **Monitor for OS/hardware compatibility**: Windows + Blackwell drivers, macOS M-series + MLX, and AMD ROCm + Qwen-Image-2.1 remain fragile.

---

> 📌 **Final Takeaway**: The AI infrastructure stack is maturing rapidly—but not uniformly. Engineers must now act as **platform architects**, selecting tools based not just on performance, but on **stability, security, and composability** across layers. The future belongs to those who can stitch together vLLM’s speed, LiteLLM’s observability, and Unsloth’s agent workflow—while avoiding the traps of untested releases and broken dependencies.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-10-02**

---

### **1. Today's Highlights**  
The vLLM project continues to accelerate its support for next-generation hardware, with critical fixes and performance improvements targeting **NVIDIA Blackwell (SM120/SM121)** and **Intel Arc GPUs**, particularly for DeepSeek-V4.1-Flash and Qwen4Exp models. Key developments include a new `ngram_hint` speculative decoding feature to improve tool call drafting accuracy, and the Rust frontend nearing parity with Python through enhanced gRPC integration and GLM parser fixes.

---

### **2. Releases & Breaking Changes**  
None reported in the last 24 hours. No new releases or breaking API changes observed.

---

### **3. New Model & Hardware Support**  
- ✅ **DeepSeek-V4.1-Flash**: Active optimization work on SM120/SM121 (RTX PRO 6000 Blackwell, DGX Spark) — see #56892, #57156, #59689.
- ✅ **Qwen4Exp (skinny decode)**: New SM12x kernel plans introduced to prevent fallback to slower cuBLAS kernels (#59632).
- ✅ **GLM-5.3-Flash (ROCm)**: Fix for gibberish output at low concurrency on gfx950 (#59413).
- ✅ **Rust Frontend**: Enhanced stability with whitespace preservation in GLM tool calls (#59654), and gRPC port exposure for multi-node setups (#59659).
- ✅ **Intel GPU (Arc B70)**: Critical crash fix merged upstream for TP=2 graph capture + MTP speculative decoding (#56917).

---

### **4. Performance & Optimization**  
- 🚀 **SM12x Kernel Optimization**: PR #59632 adds dedicated plans for Qwen4Exp skinny decode GEMM on SM121, eliminating fallback to SM80 WMMA and restoring high-throughput decoding.
- 🔧 **Kernel Fusion**: PR #52968 introduces attention residual + sigmoid_mul + conv fusions for ROCm builds, improving latency via reduced kernel launches.
- ⚙️ **KV Cache Efficiency**: PR #57420 optimizes MiniMax-M3 sparse prefill by query-tiled launching, reducing kernel overhead for adjacent queries.
- 📈 **Async KV Load Sharing**: PR #57418 enables shared external-prefix KV loads across concurrent requests, reducing redundant transfers and memory pressure.

---

### **5. Stability & Regressions**  
| Issue | Severity | Status | Fix PR |
|------|----------|--------|--------|
| [Bug] FlashInfer + MTP crashes on SM121 (GB10) with GQA=16 | Critical | Open | #37754 |
| [Bug] Prefix caching + MTP corrupts output on hybrid Mamba/GDN | High | Open | #53912 |
| [Bug] Silent garbage output in Confidential Computing mode (TDX guest) | High | Open | #57224 |
| [Bug] FP8 KV cache + prefix caching truncates generation on Qwen3.5-NVFP4 | Medium | Open | #47349 |
| [Bug] GLM-5.3-Flash outputs gibberish at low concurrency (ROCm) | Medium | Open | #59413 |

> 💡 *Note*: Several regressions are tied to Blackwell-specific behavior (SM120/SM121), indicating ongoing challenges with new compute capabilities. Fixes are actively being developed.

---

### **6. What This Means for Application Developers**  
- **Use DeepSeek-V4.1-Flash on Blackwell?** Proceed with caution — while performance is promising, use `--enforce-eager` or avoid MTP speculative decoding until #56892 and #59689 are applied.
- **Build agents with tool calling?** The `ngram_hint` spec-decoding feature (#59712) will significantly improve draft accuracy for JSON schema-based tools.
- **Deploying on Intel Arc GPUs?** Expect crashes with graph capture unless you patch with #56917’s fix (or use community forks).
- **Leverage Rust frontend?** It’s now stable enough for production integrations — use `--grpc-port` to enable gRPC alongside HTTP for scalable, disaggregated serving (#59659).
- **Optimize for high-concurrency inference?** Monitor async KV load metrics via new gauges (#58874) to detect bottlenecks in large-scale deployments.

> 🔗 *See full details:* [GitHub Issues](https://github.com/vllm-project/vllm/issues) | [Pull Requests](https://github.com/vllm-project/vllm/pulls)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-10-02**

---

### **1. Today's Highlights**  
The SGLang ecosystem continues to expand its support for next-generation LLM serving with the addition of **DeepSeek-V4.1 Flash** and **GigaChat 3.5**, both now available in the official cookbook. A major focus remains on stability and performance across diverse hardware, particularly AMD ROCm (MI350X, GB300) and NVIDIA SM120 (RTX PRO 6000), where multiple high-severity crashes and memory issues were reported today.

---

### **2. Releases & Breaking Changes**  
- **v0.5.21** released with **779 PRs from 227 contributors**, marking one of the most active release cycles to date.  
- No breaking API or config changes announced; backward compatibility maintained across all supported model types and backends.

> 🔗 [GitHub Release v0.5.21](https://github.com/sgl-project/sglang/releases/tag/v0.5.21)

---

### **3. New Model & Hardware Support**  
- ✅ **New Models Added**:  
  - [`DeepSeek-V4.1 Flash`](https://docs.sglang.io/cookbook/autoregressive/DeepSeek/DeepSeek-V4_1) – full support with optimized prefill/decode paths.  
  - [`GigaChat 3.5`](https://docs.sglang.io/cookbook/autoregressive/gigachat/GigaChat-3_5) – supports multimodal and agentic workflows via new recipe integrations.  

- ✅ **Hardware & Backend Enhancements**:  
  - **ROCm (AMD)**: Active development on HiCache, HiSparse, and fused kernels for gfx950 (MI350X/GB300).  
  - **NVIDIA SM120 (RTX PRO 6000)**: Multiple critical bugs reported on GLM-5.3-Flash and MiMo-V2.6, indicating early adoption on new architectures.  
  - **Intel XPU**: Progress on shared Triton decode-metadata kernel integration ([#42112](https://github.com/sgl-project/sglang/pull/42112)).

---

### **4. Performance & Optimization**  
- **HiCache/HiSparse Stack**:  
  - PRs [#42169](https://github.com/sgl-project/sglang/pull/42169), [#42168](https://github.com/sgl-project/sglang/pull/42168), and [#41781](https://github.com/sgl-project/sglang/pull/41781) target efficient page management and logical KV pool binding on ROCm — crucial for reducing host-GPU data movement.  
  - Fused MLA + RoPE + KV-write kernels now applied only at decode/verify scale ([#41533](https://github.com/sgl-project/sglang/pull/41533)), improving throughput on gfx950.  

- **Quantization & Memory**:  
  - Per-token FP8 activation quant fused into RMSNorm for per-channel attention on AMD ([#34502](https://github.com/sgl-project/sglang/pull/34502)).  
  - Unified hybrid-SWA pool now supports post-capture KV sizing ([#41961](https://github.com/sgl-project/sglang/pull/41961)), enabling better memory planning during graph capture.

---

### **5. Stability & Regressions**  
**Critical Issues Reported (Severity Rank)**:

1. **CUDA Coredump Tracker (#26340)** – *321 comments*  
   Auto-collected CUDA coredumps from CI runs. High volume indicates instability in GPU runtime under load. No fix yet; requires deep analysis.  
   > 🔗 [Issue #26340](https://github.com/sgl-project/sglang/issues/26340)

2. **GLM-5.3-Flash NVFP4 Loops on B200/B300 (#41939)** – *1 comment*  
   Model enters infinite reasoning loop without final output at TP4. Likely due to MoE routing or state management bug.  
   > 🔗 [Issue #41939](https://github.com/sgl-project/sglang/issues/41939)

3. **MiMo-V2.6 Crashes on SM90 (H200) with MXFP4 Experts (#42162)** – *0 comments*  
   Automatic MoE runner selection leads to Triton FP8 backend crash. Requires immediate investigation.  
   > 🔗 [Issue #42162](https://github.com/sgl-project/sglang/issues/42162)

4. **GLM-5.3-Flash on SM120: FA4 Attention Backend Crashes During CUDA Graph Capture (#42012)**  
   Only Triton backend works reliably on RTX PRO 6000 (SM120). FA4 failure blocks speculative decoding.  
   > 🔗 [Issue #42012](https://github.com/sgl-project/sglang/issues/42012)

> ⚠️ **Note**: Several regression reports are tied to **speculative decoding**, **hybrid scheduling**, and **KV cache layout** changes — areas under heavy optimization.

---

### **6. What This Means for Application Developers**  
- **Use caution with speculative decoding** on **SM120 (RTX PRO 6000)** and **MiMo-V2.6/MXFP4 models** — avoid `--enable-dflash` until fixes land.  
- **For AMD users**: Ensure you're using `--hicache-mem-layout page_first_direct` and `--hicache-io-backend direct` for optimal HiCache performance. Monitor for crashes during long context inference.  
- **Model-specific recipes** (e.g., GLM-5.2 AgentX, DeepSeek-V4.1) are now well-documented — use them as reference for production deployment.  
- **Beware of non-reproducible greedy decoding** when `FlashInfer autotune` is enabled (`#39597`) — disable for deterministic outputs.  
- **CI instability** is a known risk; expect flaky test results — check [CI Test Failures Tracker](https://github.com/sgl-project/sglang/issues/17050) before deploying from `main`.

> 📌 **Recommendation**: Pin to `v0.5.20` for stable inference on H200/H2000 until these regressions are resolved. Monitor issue tracker daily.

---  
*Digest generated by AI Infrastructure Analyst | October 2, 2026*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-10-02**

---

### **1. Today's Highlights**  
The latest updates focus on stabilizing MTP (Multi-Token Prediction) support for Qwen4Exp and GLM-5.3-Flash, with critical fixes for recurrent memory handling and CUDA compute type selection. Significant progress is also underway in backend optimization—especially around Flash Attention on Vulkan and sparse attention for quantized K/V caches—while new PRs extend support to q2_K/q3_K via OpenCL and add system-level decision APIs.

---

### **2. Releases & Breaking Changes**  
- **`b11332`**: Fixed invalid `assert` in recurrent memory (#29799). No API changes; backward-compatible.  
  [GitHub Release](https://github.com/ggml-org/llama.cpp/releases/tag/b11332)  
- **`b11331`**: Enhanced CUDA compute type handling for NVFP4 and BF16 fallbacks on capable hardware. Improves compatibility with quantized models.  
  [GitHub Release](https://github.com/ggml-org/llama.cpp/releases/tag/b11331)  
- **`b11330`**: Added MTP support for Qwen4Exp and cleaned up internal state logic (removed `has_state`, now inferred from `ctx_bufs`).  
  [GitHub Release](https://github.com/ggml-org/llama.cpp/releases/tag/b11330)

> ✅ *No breaking changes reported today. All updates are additive or stability-focused.*

---

### **3. New Model & Hardware Support**  
- **Model Support**:  
  - ✅ **Qwen4Exp**: Full MTP support added via #29761 and #29819.  
    [PR #29761](https://github.com/ggml-org/llama.cpp/pull/29761)  
  - ✅ **GLM-5.3-Flash**: Added support for both text and vision, including NextN draft head for speculative decoding.  
    [PR #27773](https://github.com/ggml-org/llama.cpp/pull/27773), [PR #27917](https://github.com/ggml-org/llama.cpp/pull/27917)  
  - ✅ **LTX-2.3**: Native image/video/audio generation support introduced via #28540.  
    [PR #28540](https://github.com/ggml-org/llama.cpp/pull/28540)  
  - ✅ **Clef Decision Model**: New model support with a custom API path for selective scoring.  
    [PR #29831](https://github.com/ggml-org/llama.cpp/pull/29831)  

- **Hardware & Backend Enhancements**:  
  - ✅ **OpenCL**: Initial support for `q2_K` and `q3_K` matrix multiplication.  
    [PR #28577](https://github.com/ggml-org/llama.cpp/pull/28577)  
  - ✅ **Vulkan**: Sparse Flash Attention now enabled for quantized K/V caches (e.g., Qwen3.8-Flash-Next).  
    [PR #29639](https://github.com/ggml-org/llama.cpp/pull/29639)  
  - ✅ **Hexagon**: Rebuilt HTP skels now installed during incremental builds.  
    [PR #29828](https://github.com/ggml-org/llama.cpp/pull/29828)  
  - ✅ **SYCL**: Fixes for host-pinned memory high CPU utilization and `dev2dev_memcpy` crashes on dual Arc Pro B70.  
    [Issue #27198](https://github.com/ggml-org/llama.cpp/issues/27198), [PR #29781](https://github.com/ggml-org/llama.cpp/pull/29781)

---

### **4. Performance & Optimization**  
- **Flash Attention**:  
  - Vulkan: Sparse attention now activates on quantized K/V, avoiding dense computation over full context (~2k active tokens vs. full history).  
    [PR #29639](https://github.com/ggml-org/llama.cpp/pull/29639)  
  - CPU: Flash attention on CPU (one-chunk) now uses F32 accumulator instead of F16 to prevent overflow to inf/NaN.  
    [Issue #29774](https://github.com/ggml-org/llama.cpp/issues/29774)  

- **Kernel & Memory Efficiency**:  
  - CUDA: Avoid repeated warmup after stable graph replay (critical for unified-KV decode).  
    [PR #29768](https://github.com/ggml-org/llama.cpp/pull/29768)  
  - mmap: Reduced second full-size tensor copy via direct-I/O optimizations.  
    [PR #29749](https://github.com/ggml-org/llama.cpp/pull/29749)  
  - MTP: Unified decode mask built in one cache scan (faster causal masking).  
    [PR #29769](https://github.com/ggml-org/llama.cpp/pull/29769)  

- **Quantization & Compute**:  
  - CUDA: Use BF16 compute if hardware supports it (reduces precision loss in quantized models).  
    [PR #29173](https://github.com/ggml-org/llama.cpp/pull/29173)  
  - SYCL: Optimized `--split-mode tensor` performance (currently slow on multi-GPU setups).  
    [Issue #26409](https://github.com/ggml-org/llama.cpp/issues/26409)

---

### **5. Stability & Regressions**  
- ⚠️ **Critical Crashes**:  
  - **Qwen3.6-27B-MTP**: Repeated `////` output after long sessions (33 comments).  
    [Issue #23577](https://github.com/ggml-org/llama.cpp/issues/23577)  
  - **CUDA + Qwen3.5-122B-A10B (sm_70)**: Instant kernel-launch rejection at first request — no prefill progress.  
    [Issue #29783](https://github.com/ggml-org/llama.cpp/issues/29783)  
  - **Vulkan + Adreno Driver**: Silent abort (`SIGABRT`) with no diagnostics on `-ngl >= 1`.  
    [Issue #29786](https://github.com/ggml-org/llama.cpp/issues/29786)  

- ⚠️ **Backend-Specific Issues**:  
  - **SYCL**: `--split-mode tensor` hangs with quantized KV cache; 3x slower than single GPU.  
    [Issue #26409](https://github.com/ggml-org/llama.cpp/issues/26409)  
  - **ROCm**: Windows release missing `hipblas.dll` — GPU not detected.  
    [Issue #26996](https://github.com/ggml-org/llama.cpp/issues/26996)  
  - **Vulkan + AMD iGPU**: Massive RAM reservation when discrete GPU present.  
    [Issue #28093](https://github.com/ggml-org/llama.cpp/issues/28093)  

> 🛠️ *Fixes in progress: PR #29781 (CUDA strided ops) may help some regression cases; no known PRs yet for the top crashers.*

---

### **6. What This Means for Application Developers**  
- **MTP is now production-ready for Qwen4Exp and GLM-5.3-Flash**, enabling faster speculative decoding with minimal configuration changes. Use `--spec-type draft-mtp` confidently.  
- **Avoid using `--split-mode tensor` on SYCL/CUDA until performance issues are resolved**—expect regressions on multi-GPU and older architectures.  
- **Enable `BF16` compute where available (via CUDA/ROCm)** for better accuracy in quantized models.  
- **Watch out for silent failures on Qualcomm Adreno drivers (Vulkan)**—no error output means debugging requires external logging.  
- **Use `gguf-dump` with caution**: Crafted GGUF files can inject terminal escape sequences (CVE-like risk). Always sanitize input.  
- **New `/v1/systemone` API** allows running decision models (laya, julia-1, clef, etc.) without fine-tuning—ideal for agent orchestration.  
  [PR #29832](https://github.com/ggml-org/llama.cpp/pull/29832)

> 🔧 *Recommendation: Pin your llama.cpp build to `b11330+` for MTP stability and avoid `b11324-b11327` if using complex flash attention pipelines.*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-10-02**

---

### **1. Today's Highlights**  
The Ollama ecosystem continues to expand with active development on GPU backend support and infrastructure stability, particularly around proxy handling and model serving reliability. Critical issues have emerged in the latest release cycle regarding proxy bypasses during model pulls (fixing #18729) and CUDA memory access errors on RTX 5090 systems. Meanwhile, ongoing performance optimizations target CPU utilization in llama-server under high load.

---

### **2. Releases & Breaking Changes**  
*No new releases were published in the last 24 hours.*  
However, **v0.35.0** has introduced a regression: model downloads now bypass `HTTPS_PROXY` when pulling from Cloudflare R2 endpoints (see [Issue #18729](https://github.com/ollama/ollama/issues/18729)), which impacts enterprise environments. A fix is underway via PRs [#18730](https://github.com/ollama/ollama/pull/18730), [#18731](https://github.com/ollama/ollama/pull/18731), and [#18733](https://github.com/ollama/ollama/pull/18733).

Additionally, **v0.34.1** removed support for the `typical_p` parameter, breaking compatibility with clients like SillyTavern ([Issue #18542](https://github.com/ollama/ollama/issues/18542)) — users relying on this feature must update their clients or pin older versions.

---

### **3. New Model & Hardware Support**  
- **MLX SystemOne Support**: PR [#18701](https://github.com/ollama/ollama/pull/18701) adds experimental MLX backend support for SystemOne models on Apple Silicon (M-series chips), including test coverage.
- **Cohere MoE Architecture on CUDA**: Issue #18642 reports consistent crashes on RTX 5090 due to illegal memory access during prompt evaluation; no fix yet.
- **Windows CUDA Discovery Failure**: NVIDIA Blackwell drivers (616.92) cause Ollama to report `total_vram="0 B"` and fall back to CPU-only mode ([Issue #18581](https://github.com/ollama/ollama/issues/18581)); likely driver-level compatibility issue.
- **Qwen3.8-Flash-Next**: Community request (#18071) highlights demand for official cloud availability of this high-performance model.

---

### **4. Performance & Optimization**  
- **CPU Overload on Mac M4 Max**: Users report ~560% CPU usage during token generation with `llama-cpp` on Mac Studio M4 Max ([Issue #18038](https://github.com/ollama/ollama/issues/18038)). A potential fix is proposed in PR [#18613](https://github.com/ollama/ollama/pull/18613), which passes `--poll 0` to `llama-server` when GPU is available to reduce polling overhead.
- **Thread Management in Containers**: PR [#17916](https://github.com/ollama/ollama/issues/17916) reveals that `n_threads` defaults to host core count, ignoring cgroup CPU quotas and cpusets — causing up to **~45x throughput collapse** in CPU-limited containers.
- **JSON Property Order Preservation**: PR [#18721](https://github.com/ollama/ollama/pull/18721) fixes incorrect reordering of JSON fields during API marshaling, improving consistency for downstream clients.

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Impact |
|---------|-------|--------|--------|
| 🔴 CRITICAL | **Proxy Bypass in Model Pulls (v0.35.0)** | Open | Enterprise deployments behind proxies fail silently |
| 🔴 CRITICAL | **CUDA Illegal Memory Access (RTX 5090)** | Open | System crashes during inference on new GPUs |
| 🟡 HIGH | **MLX Kernel Load Failure (macOS M5)** | Closed | Metal kernel fails to load despite VRAM allocation |
| 🟡 HIGH | **Vulnerabilities in Go Binary (CVEs)** | Open | 12 high-severity CVEs found in static binary (`/usr/local/bin/ollama`) ([Issue #16033](https://github.com/ollama/ollama/issues/16033)) |
| 🟡 HIGH | **Orphaned Blob Storage Leak (macOS)** | Closed | 21GB of unused data left behind after manifest audit ([Issue #18595](https://github.com/ollama/ollama/issues/18595)) |

Fixes exist for some regressions:
- Proxy bypass: PRs [#18730](https://github.com/ollama/ollama/pull/18730), [#18731](https://github.com/ollama/ollama/pull/18731), [#18733](https://github.com/ollama/ollama/pull/18733)
- MLX error: Fixed in closed issue #14118

---

### **6. What This Means for Application Developers**  
- **Avoid v0.35.0** in production if using proxies — use v0.34.4 or apply patch via environment variable override until fix lands.
- If deploying in containerized environments, explicitly set `n_threads` and ensure cgroup CPU limits are respected; otherwise, expect severe performance degradation.
- For agents relying on `typical_p`, migrate to alternative sampling parameters or pin to `v0.34.1`.
- Monitor for security updates: the current Go binary contains unpatched vulnerabilities — consider building from source or using signed packages.
- Expect instability with **newer hardware (RTX 5090, Blackwell)** and **Apple M5/M4 systems** until driver/kernel compatibility is resolved.
- Consider integrating with community tools like [PageGrok](https://www.pagegrok.org), [oxi](https://github.com/maziluiosif/oxi), or [OpenNodes](https://github.com/opennodes/ollama-router) for enhanced agent workflows.

> ✅ *Recommendation*: Use `OLLAMA_HOST` + proxy-aware deployment patterns; validate model pulls in staging before rollout.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-10-02

---

### **1. Today's Highlights**  
The LiteLLM ecosystem continues to strengthen its security posture following the recent PyPI compromise (Issue #24518), with all current releases verified via cosign signatures using a consistent key. Significant progress is underway in MCP (Model Control Plane) stability and observability, including enhanced logging for failed sessions and preservation of tool state during refactoring. New PRs also introduce critical improvements in trace visibility, budget management, and guardrail reliability—key for production-grade agent systems.

---

### **2. Releases & Breaking Changes**  
- **v1.103.2 & v1.101.4** released with hardened Docker image signing via [cosign](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0). All images are now cryptographically signed; verify using `cosign verify` per [docs](https://docs.sigstore.dev/cosign/overview/).  
- **Security Note**: The compromised `v1.82.7` and `v1.82.8` packages have been removed from PyPI. No current release contains malicious code. See [Security Townhall](https://docs.litellm.ai/blog/security-townhall-updates) for full context.

> 🔐 **Verify Image Signature**:  
> `cosign verify --certificate-oidc-issuer=https://token.actions.githubusercontent.com --certificate-identity=github.com/BerriAI/litellm ghcr.io/berriai/litellm:latest`

---

### **3. New Model & Hardware Support**  
- **Gemini Live Avatar (GA)**: Added support for `avatar_config` in real-time Gemini/Vertex integration ([Issue #43166](https://github.com/BerriAI/litellm/issues/43166)). Enables lip-synced talking-head avatars in live sessions.
- **Anthropic Workload Identity Federation**: Experimental support added for OIDC JWT-bearer token exchange via `workload_identity_federation` auth method ([Issue #28607](https://github.com/BerriAI/litellm/issues/28607))—ideal for secure cloud-native deployments.
- **Bedrock Mantle Auth Fix**: Corrected SigV4 service name from `"bedrock"` to `"bedrock-mantle"` ([PR #44112](https://github.com/BerriAI/litellm/pull/44112)), enabling proper authentication for OCI-backed models.

---

### **4. Performance & Optimization**  
- **Mid-stream Fallback Continuation**: Introduced opt-in feature (`mid_stream_fallback`) to continue streaming on fallback models after interruption ([PR #41127](https://github.com/BerriAI/litellm/pull/41127)). Prevents partial responses from being discarded due to upstream failure.
- **Spend Logs Index Build Opt-In**: Now controlled by environment variable `LITELLM_BUILD_SPEND_LOGS_INDEXES` ([PR #44124](https://github.com/BerriAI/litellm/pull/44124)), reducing startup overhead on large-scale deployments with partitioned `LiteLLM_SpendLogs`.
- **Prompt Cache Breakpoint Preservation**: Fixed issue where `prompt_cache_breakpoint` markers were dropped during chat-to-responses bridge ([PR #44119](https://github.com/BerriAI/litellm/pull/44119)), restoring cache efficiency in multi-turn tool-calling workflows.

---

### **5. Stability & Regressions**  
| Issue | Severity | Status | Fix PR |
|------|----------|--------|--------|
| `gpt-6.1-sol`: Unsupported `reasoning_effort: "none"` passed to OpenAI | High | Open | [PR #43935](https://github.com/BerriAI/litellm/pull/43935) |
| MCP Stdio services not working (UI shows no tools) | Medium | Open | [Issue #15560](https://github.com/BerriAI/litellm/issues/15560) |
| Partial generic streaming chunk raises `KeyError` | High | Open | [Issue #43487](https://github.com/BerriAI/litellm/issues/43487) |
| S3 V2 logger drops most streaming Anthropic messages | High | Open | [Issue #32019](https://github.com/BerriAI/litellm/issues/32019) |
| Virtual key re-admitted after `max_budget` hit (idle >60s) | Medium | Open | [Issue #43732](https://github.com/BerriAI/litellm/issues/43732) |

> ⚠️ **Critical**: Several high-severity bugs affect core functionality (streaming, caching, billing). Users relying on these features should monitor PRs closely.

---

### **6. What This Means for Application Developers**  
- **Security First**: Always verify Docker image signatures post-update. Avoid installing older versions (especially `v1.82.7/8`)—they’re tainted.
- **Agent Systems**: Leverage mid-stream fallbacks and improved MCP resilience to build fault-tolerant agents. Ensure `prompt_cache_breakpoint` handling is preserved when bridging between `/v1/messages` and `/v1/responses`.
- **Observability**: Use new tracing enhancements ([PR #43968](https://github.com/BerriAI/litellm/pull/43968)) to avoid silent trace ID reuse and improve cross-team visibility.
- **Cost Management**: Upgrade to `v1.103.x+` to benefit from granular index control and better spend log integrity. Consider disabling automatic index builds if using large, partitioned tables.
- **Cloud Integration**: Enable `workload_identity_federation` for Anthropic and use updated Bedrock/Mantle auth paths for secure, identity-based access.

👉 **Recommended Actions**:  
- Audit all active keys for `max_budget` behavior.  
- Update to `v1.103.2` or later.  
- Test streaming flows involving tool calls and prompt caching.  
- Review [Security Townhall](https://docs.litellm.ai/blog/security-townhall-updates) if you’ve used affected versions.

---  
*Digest generated from GitHub data: github.com/BerriAI/litellm | 2026-10-02*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# **Unsloth Digest – 2026-10-02**

---

### **1. Today's Highlights**  
The latest `v0.1.902-beta` release introduces a **Command Palette (Cmd)** for faster navigation and improved UI/UX in Unsloth Desktop, alongside **4x faster Laya decision-making** and expanded hosted Decision API support. Key performance gains include 4-bit LoRA training retention for NVFP4, INT4, and MXFP4 checkpoints, and critical fixes for Qwen-Image-2.1 GGUF loading on Windows and AMD systems.

---

### **2. Releases & Breaking Changes**  
- **v0.1.902-beta**: Adds Command Palette (Cmd), shareable run settings, clearer error messages, and 4x speedup in Laya decisions. Maintains 4-bit precision during LoRA training for NVFP4, INT4, and MXFP4 models.  
  🔗 [GitHub Release v0.1.902-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.902-beta)  
- **v0.1.901-beta** (previously released): Same core features as v0.1.902-beta; now superseded.  
  🔗 [GitHub Release v0.1.901-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.901-beta)

> 💡 *No breaking changes to APIs or configs reported today. Users should upgrade to v0.1.902-beta for best UX and performance.*

---

### **3. New Model & Hardware Support**  
- **Qwen-Image-2.1-GGUF**: Now supports explicit **text encoder selection** in Studio/Desktop UI (PR #12470), avoiding forced ~17GB dense TE downloads.  
  🔗 [Issue #12470](https://github.com/unslothai/unsloth/issues/12470)  
- **AMD ROCm Support**: Improved handling of `Qwen-Image-2.1` with FP8 text encoders on Windows (ROCm). Fix includes proper fallback logic and 404 resolution.  
  🔗 [Issue #11638](https://github.com/unslothai/unsloth/issues/11638)  
- **Windows + WSL2**: Experimental support for running **vLLM and SGLang** inference engines inside private WSL2 distros via PR #12024.  
  🔗 [PR #12024](https://github.com/unslothai/unsloth/pull/12024)

---

### **4. Performance & Optimization**  
- **Laya Decision Speed**: 4x improvement in decision latency due to optimized inference pipeline.  
  🔗 [Release v0.1.902-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.902-beta)  
- **Qwen-Image-2.1 Inference**:  
  - **Int8 GEMM fusion** (PR #12448): Up to **14–17% faster per step** vs prior.  
  - **Cached int8 checkpoint usage** (PR #12455): 2x faster generation on 12GB/8GB cards by skipping repeated dequantization.  
  - **Fused norm dequant + epilogue** (PR #12449): Fixes 1-D norm weight dequantization failure on no-conversion load path.  
  🔗 [PR #12448](https://github.com/unslothai/unsloth/pull/12448) | 🔗 [PR #12455](https://github.com/unslothai/unsloth/pull/12455) | 🔗 [PR #12449](https://github.com/unslothai/unsloth/pull/12449)  
- **Tensor Split Decoding**: Regression identified — **2.9x slower decode** since commit `b10715-mix-86bd2d3` due to CUDA graph limit (`max_cuda_graphs = 64`).  
  🔗 [Issue #12468](https://github.com/unslothai/unsloth/issues/12468)

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Link |
|---------|------|--------|------|
| Critical | Qwen-Image-2.1 GGUF fails to load on Windows: 1-D norm weights not dequantized | Open | 🔗 [Issue #12445](https://github.com/unslothai/unsloth/issues/12445) |
| High | AMD GPU resets on Linux during QLoRA training (RX 7900 XTX) | Open | 🔗 [Issue #11498](https://github.com/unslothai/unsloth/issues/11498) |
| High | On-device GGUF model loading blocks offline due to HF quant discovery | Open | 🔗 [Issue #12415](https://github.com/unslothai/unsloth/issues/12415) |
| Medium | OpenAI-compatible API adds ~1.2s fixed latency per request | Open | 🔗 [Issue #12364](https://github.com/unslothai/unsloth/issues/12364) |
| Medium | Japanese IME Enter key prematurely saves chat title | Open | 🔗 [Issue #12474](https://github.com/unslothai/unsloth/issues/12474) |
| Low | Sandbox creates phantom `nul` file on Windows, blocking tools | Open | 🔗 [Issue #12473](https://github.com/unslothai/unsloth/issues/12473) |

> ✅ **Fixes merged**:  
> - PR #12449: Resolves Qwen-Image-2.1 1-D norm dequant issue.  
> - PR #12451: Fixes offline On Device GGUF discovery blocking.  
> 🔗 [PR #12449](https://github.com/unslothai/unsloth/pull/12449) | 🔗 [PR #12451](https://github.com/unslothai/unsloth/pull/12451)

---

### **6. What This Means for Application Developers**  
- **Optimize for multi-model serving**: Use **per-model llama.cpp INI configs** (PR #10783) to fine-tune inference behavior across diverse models without interference.  
- **Leverage new inference backends**: Enable **vLLM and SGLang support** (PR #11491) for advanced features like concurrent API requests and vision model inference — ideal for scalable agent workloads.  
- **Avoid latency traps**: Be aware of the **~1.2s fixed overhead in the OpenAI-compatible API** (Issue #12364); use direct `unsloth start` calls for low-latency local agents.  
- **Design robust RAG pipelines**: Use environment-variable-configurable `UPLOAD_EXTS` (Issue #11385) to control which files are indexed in your RAG system.  
- **Enable user isolation**: Watch for **chat history sharing across users** (Issue #8602); implement "no history" toggle in apps until this is resolved.  

> 🛠️ **Best Practice**: For high-throughput image gen, ensure you’re using the **cached int8 checkpoint path** (PR #12455) and avoid full dequantization loops on constrained VRAM.

---  
*Digest compiled from GitHub activity: unslothai/unsloth (2026-10-02)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*