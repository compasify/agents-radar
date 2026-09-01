# AI Infrastructure Digest 2026-09-01

> Generated: 2026-09-01 01:23 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-09-01**

---

### **1. Ecosystem Overview**  
The AI inference and serving ecosystem is entering a phase of *deep specialization and cross-layer integration*. Projects are diverging in focus: vLLM and SGLang lead in high-performance distributed inference, llama.cpp dominates local edge and Apple Silicon optimization, Ollama consolidates developer-friendly access to models, LiteLLM acts as the universal proxy layer, and Unsloth positions itself at the intersection of training, fine-tuning, and secure agent execution. A clear trend toward **multi-architecture support (Intel XPU, AMD ROCm, Apple Metal)** and **structured output reliability** is evident, driven by demand for production-grade agentic systems.

---

### **2. Activity Comparison**  

| Project       | Issues Open (Today) | PRs Merged/Active | Releases (Past 24h) |
|---------------|---------------------|-------------------|----------------------|
| **vLLM**      | 15                  | 8                 | None                 |
| **SGLang**    | 13                  | 7                 | None                 |
| **llama.cpp** | 10                  | 6                 | None                 |
| **Ollama**    | 10                  | 5                 | None                 |
| **LiteLLM**   | 9                   | 4                 | None                 |
| **Unsloth**   | 12                  | 6                 | None                 |

> 🔍 *Observation*: All projects report no new releases in the past day, indicating a focus on stability and feature refinement rather than incremental updates. vLLM leads in active PR volume, reflecting its role as a performance anchor.

---

### **3. Model Support Race**  

| New Model / Architecture             | Supported By                     | Notes |
|--------------------------------------|----------------------------------|-------|
| **DeepSeek-V4-Pro (DSA/MLA)**        | ✅ vLLM (Intel XPU), ✅ SGLang     | First major Intel XPU enablement across frameworks |
| **Qwen3.8-Flash-Next**               | ✅ vLLM, ✅ SGLang, ✅ llama.cpp   | Full MoE + prefix caching in vLLM; QSA+NEXTN decode corruption in SGLang |
| **GLM-5.3-Flash (GLM-5-Next)**       | ✅ SGLang, ✅ llama.cpp           | GLM-5.3 vision config now supported via SGLang |
| **DeepSeek-V4-Flash-Vision-Exp**     | ✅ llama.cpp                      | Only project with full vision model support |
| **Wan2.2-TI2V-5B**                   | ✅ Unsloth                        | High VRAM usage due to SDPA fallback |
| **Qwen3.8-Flash-Next-GGUF**          | ❌ Unsloth (blocked), ⚠️ Others (partial) | Lacking `qwen4exp` support in `llama.cpp` backend |

> 🏆 **Leader**: **vLLM** and **SGLang** are ahead in cutting-edge model support, particularly for MoE and hybrid architectures. **llama.cpp** leads in GGUF and vision-capable model availability, while **Unsloth** lags on newer GGUF variants.

---

### **4. Performance Frontier**  

| Optimization Focus                | Primary Projects                          | Key Developments |
|-----------------------------------|-------------------------------------------|------------------|
| **KV Cache & Speculative Decoding** | vLLM, SGLang                              | Overlap between draft sync and prefill (vLLM), HiSparse sparse attention (SGLang), suffix_gpu drafter (vLLM) |
| **Quantization & Backend Fusion**   | vLLM, llama.cpp                           | FlashInfer SM90 MXFP4 x FP8 fused MoE (vLLM), XOR swizzle flash attention (cuda), radix TOP_K (ROCm) |
| **Batching & Kernel Efficiency**    | vLLM, llama.cpp                           | Split-row Triton pipeline (small batches), AVX2 vectorized IQ decode |
| **Distributed Serving & Scalability** | SGLang                                    | PD disaggregation unification, HiCache L3 storage, weight cache daemon (<1s startup) |
| **Edge & Local Runtime**            | llama.cpp, Unsloth                        | Metal (M1 Ultra), ROCm (gfx950), MLX context length fix (Unsloth) |

> 🚀 **Trend**: The frontier is shifting from raw throughput to **efficient state management**—especially long-context, low-latency speculative decoding and memory-aware KV cache strategies.

---

### **5. Layer Positioning**  

| Project       | Layer Position                             | Core Differentiator |
|---------------|--------------------------------------------|---------------------|
| **vLLM**      | **High-Performance Serving Engine**        | Optimized kernel scheduling, MTP, structured output |
| **SGLang**    | **Distributed Inference Framework**        | PD disaggregation, HiCache, multi-model orchestration |
| **llama.cpp** | **Local Runtime / Edge Inference**         | Cross-platform backends (Metal, CUDA, ROCm), GGUF-first approach |
| **Ollama**    | **Developer Gateway / Model Orchestrator** | Unified CLI/API, MLX/llama.cpp integration, agent-friendly UX |
| **LiteLLM**   | **Universal Proxy & Routing Layer**        | Multi-provider routing, team-level observability, virtual keys |
| **Unsloth**   | **Agent Training & Secure Execution Studio** | Sandboxed tool execution, Ollama integration, fine-tuning workflow |

> 💡 **Insight**: The stack is becoming increasingly layered—developers now choose not just *what* runs, but *where*, *how*, and *with what security guarantees*.

---

### **6. Trend Signals**  

#### 🔹 **Key Industry Trends Extracted**:
1. **Hardware Diversification is Now Mainstream**: Intel XPU, AMD ROCm (gfx1200/gfx1201), Apple M1 Ultra all have dedicated optimizations—indicating no single architecture dominates.
2. **Structured Output Reliability is a Critical Bottleneck**: Multiple projects report tool call parsing failures (vLLM, SGLang, Ollama), signaling that agentic workflows are hitting API-level fragility.
3. **Speculative Decoding is Becoming Production-Ready**: Overlapping kernels, GPU/CPU offload, and async scheduling (suffix_gpu) show this is no longer experimental.
4. **Security Hardening is Mandatory**: Unsloth’s mandatory sandboxing (bubblewrap/Seatbelt) reflects growing concern over unsafe tool execution in agents.
5. **Observability is Shifting Upward**: Metrics like `prompt_eval_cached_count`, `request_timeout` enforcement, and team-level logging are being exposed via APIs—critical for cost control and debugging.

#### 📌 **What Application Developers Should Watch**:
- **Avoid v0.33.0 Ollama on Windows/NVIDIA** due to TDR crashes.
- **Validate tool call parsers under concurrency**—expect instability in Qwen3/Gemma4 until fixes land.
- **Pre-warm engines for deterministic inference** (vLLM’s new sampler warmup increases cold-start latency).
- **Monitor memory leaks in MLX-based backends** (Ollama, Unsloth).
- **Plan for breaking changes around response format semantics** (e.g., `strict=false` disables guided decoding in vLLM).

> ✅ **Final Takeaway**: The infrastructure is maturing rapidly—but **stability, correctness, and observability** are now the primary differentiators. Choose tools not just for speed, but for resilience in real-world agent workloads.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-09-01**

---

### **1. Today's Highlights**  
The vLLM project continues to strengthen its support for speculative decoding (MTP) and structured output parsing across diverse models, with critical fixes for Qwen3 and Gemma4 tool call reliability. Key progress includes enabling DeepSeek-V4-Pro on Intel XPU and advancing multi-config sampler warmup for seeded inference paths—essential for deterministic agent workflows.

---

### **2. Releases & Breaking Changes**  
*No new releases in the past 24 hours.*  
However, ongoing changes in PRs suggest potential breaking shifts in behavior around:  
- **Seeded sampling**: PR [#54630](https://github.com/vllm-project/vllm/pull/54630) introduces per-path kernel warmup, which may affect cold-start latency for seeded requests.  
- **Structured outputs**: PR [#50544](https://github.com/vllm-project/vllm/pull/50544) modifies `strict=false` handling in `response_format`, aligning with OpenAI semantics—users relying on relaxed schema validation must now explicitly disable guided decoding.

---

### **3. New Model & Hardware Support**  
- ✅ **Intel XPU Support Expansion**:  
  - PR [#54460](https://github.com/vllm-project/vllm/pull/54460) enables serving **DeepSeek-V4-Pro (DSA/MLA)** on Intel Arc Pro B70 (XPU), including FP8 block-scaled weights and CPU offload.  
  - PR [#49303](https://github.com/vllm-project/vllm/pull/49303) adds **sequence parallelism (SP)** support for MXFP8 quantized models on XPU.  
- ✅ **New Quantization Backends**:  
  - PR [#54032](https://github.com/vllm-project/vllm/pull/54032) introduces a new **FlashInfer SM90 MXFP4 x FP8 fused MoE backend**, targeting high-performance inference on Blackwell GPUs.  
- ✅ **Qwen3-Next (GDN) Hybrid Models**:  
  - PR [#50172](https://github.com/vllm-project/vllm/pull/50172) enables full **prefix caching with MTP speculative decoding** for `mamba_cache_mode="all"` models on V1 engine.

---

### **4. Performance & Optimization**  
- 🚀 **Speculative Decoding Overlap**:  
  - PR [#54656](https://github.com/vllm-project/vllm/pull/54656) enables **overlap between draft continuation DP sync and prefill**, reducing idle time in data-parallel setups.  
  - PR [#52097](https://github.com/vllm-project/vllm/pull/52097) adds **suffix_gpu drafter** support for async scheduling—improving CPU/GPU overlap in repetitive agentic workloads.  
- 🔧 **Kernel-Level Optimizations**:  
  - PR [#49529](https://github.com/vllm-project/vllm/pull/49529) adopts PTX 9.4’s `ldmatrix.s8.s4` for W4A8-INT8 paths, enabling hardware-accelerated INT4→INT8 sign extension—expected to boost throughput on newer architectures.  
  - PR [#54651](https://github.com/vllm-project/vllm/pull/54651) introduces a **split-row Triton pipeline** for small-batch top-p masking, improving efficiency for low-throughput scenarios.  

---

### **5. Stability & Regressions**  
⚠️ **Critical Crashes & Correctness Bugs Reported**:  
- **[Bug #54521](https://github.com/vllm-project/vllm/issues/54521)**: Non-deterministic greedy decoding in `Qwen3.8-Flash-Next-FP8` due to `persistent_topk` when prompt nears `indexer_budget`. *Fix pending.*  
- **[Bug #54225](https://github.com/vllm-project/vllm/issues/54225)**: CUDA illegal memory access on sm_120 with NVFP4 + FP8 KV cache; crashes on 16-token requests. TRITON_ATTN unaffected. *High severity, no fix yet.*  
- **[Bug #42426](https://github.com/vllm-project/vllm/issues/42426)**: Kimi-K2.6 intermittently outputs only `"!!!!!!!!!!"` with null content. *Widespread impact; fix under investigation.*  

📌 **Tool Call Parsing Reliability Issues**:  
- Multiple issues highlight instability in parser logic:  
  - PR [#53365](https://github.com/vllm-project/vllm/pull/53365) restores missing `tool_call_parser_invocations_total` metrics.  
  - PRs like [#39056](https://github.com/vllm-project/vllm/issues/39056) and [#39392](https://github.com/vllm-project/vllm/issues/39392) report XML tool-call parsing failures inside `<think>` and concurrent request corruption.

---

### **6. What This Means for Application Developers**  
- **Use caution with seeded or deterministic inference**: The new sampler warmup in PR [#54630](https://github.com/vllm-project/vllm/pull/54630) may increase cold-start latency—consider pre-warming engines for production agents.  
- **Validate tool call parsers under concurrency**: Avoid `gemma4` and `qwen3` tool-call parsers in high-concurrency environments until PRs like [#54225](https://github.com/vllm-project/vllm/issues/54225) land.  
- **Leverage new backends for performance**: Enable `--moe-backend flashinfer_cutlass_humming` (PR [#54032](https://github.com/vllm-project/vllm/pull/54032)) and `suffix_gpu` drafter (PR [#52097](https://github.com/vllm-project/vllm/pull/52097)) for better throughput in agent and batched workloads.  
- **Update your response format logic**: With PR [#50544](https://github.com/vllm-project/vllm/pull/50544), `strict=false` now disables guided decoding—ensure your app handles schema relaxation correctly.

> 🔗 *Follow key issues and PRs at:* [vLLM GitHub](https://github.com/vllm-project/vllm)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-09-01**

---

### **1. Today's Highlights**  
The SGLang project continues to accelerate its focus on **distributed inference scalability**, with major progress on **PD disaggregation unification**, **HiCache L3 storage integration**, and **multi-model support for Qwen3.8-Flash-Next and GLM-5.3-Flash**. Critical stability fixes were merged for CUDA coredumps, speculative decoding under PD disaggregation, and silent output corruption in QSA+NEXTN decode graphs—highlighting ongoing efforts to stabilize production-grade agentic workloads.

---

### **2. Releases & Breaking Changes**  
*None* — No new releases were published in the last 24 hours. However, several high-priority PRs targeting runtime stability and compatibility are actively being reviewed (e.g., #37322, #37321).

---

### **3. New Model & Hardware Support**  
- **Qwen3.8-Flash-Next**: Full support now includes `nextn` draft handling and `qsa` decoding paths; PRs #37322 and #37316 address quantization and weight loading issues.
- **GLM-5.3-Flash**: Added support for optional vision config and NextN weight loading (#37321), resolving initialization failures.
- **MiniMax-M3**: Enhanced MXFP8/MXFP4 quantization support via fused norms and MoE all-reduce folding (#36575, #36574).
- **AMD ROCm**: Performance optimizations for gfx950 (MiMo-V2.5-Pro) with improved rope_cache kernel grouping (#37315).
- **Intel XPU**: Weekly enablement updates included in #37193, expanding cross-architecture support.

---

### **4. Performance & Optimization**  
- **Weight Cache Daemon (Phase 1)**: Reduced engine startup time from ~327s to **<1s** on Qwen3-235B FP8 ([blog](https://www.lmsys.org/blog/2026-08-21-sglang-weight-cache-daemon)).
- **HiSparse**: Enables long-context sparse attention with significantly lower GPU memory usage during decode by retaining only a hot working set in HBM (#28874).
- **ROCm Optimization**: Fused rope_cache + cache kernel achieves **2.15–2.5x speedup** on gfx950 at gpt-oss shapes (813 GB/s measured).
- **Speculative Decoding**: Windowed draft-decode attention reduces KV read overhead in MTP/EAGLE drafts, improving efficiency under long prefixes (#32673).

---

### **5. Stability & Regressions**  
**Critical Issues Reported Today**:
- 🔴 **Qwen3.8-Flash-Next QSA+NEXTN Decode Graph Corruption** (`#37111`): Silent semantic corruption observed on GB10 TP2; no fix yet.  
- 🔴 **DFLASH Speculative Decoding Crash Under PD Disaggregation** (`#36140`): Crashes due to `spec_info` being `None`; workaround required until PR lands.
- 🔴 **CUDA Coredump Tracker** (`#26340`): Auto-collected crashes across CI runs; 269 comments indicate widespread instability in GPU kernels.
- 🟡 **HiCache Prefetch Deadlock** (`#30760`): TP=4, no PP setup triggers deadlock in `check_prefetch_progress`.
- 🟡 **SGLANG_SIMULATE_ACC_LEN Degradation** (`#34740`): Silent O(n²) detokenization due to fallback token logic.

> ✅ *Fixes in flight*: PRs #37322 (#36599), #37321, and #37316 aim to resolve key model and state management bugs.

---

### **6. What This Means for Application Developers**  
- **Agentic Workloads**: The distributed KVCache system roadmap (#21846) and session-aware router module (#25760) signal strong momentum toward scalable, low-latency agent serving.
- **Model Flexibility**: Expect smoother integration of multimodal models like MiMo-V2.5 and GLM-5.3-Flash, especially with upcoming HiSparse and HiCache L3 support.
- **Stability Caution**: Avoid `--disaggregation-mode decode` with DFLASH speculative decoding until #36140 is resolved. Monitor for silent corruptions in Qwen3.8-Flash-Next outputs.
- **CI Reliability**: The growing number of flaky tests (11 reported in #17050) suggests that pre-release validation may require manual verification for critical deployments.

> 👉 *Recommendation*: Pin to latest main (`sglang:dev-cu13-mimo-v2.5`) for known-good behavior, and use `--disable-cuda-graph` temporarily if encountering garbled outputs or hangs.

---  
*Source: [github.com/sgl-project/sglang](https://github.com/sgl-project/sglang)*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-09-01**

---

### **1. Today's Highlights**  
The latest updates focus on performance and stability across multiple backends, with critical kernel optimizations for Metal (M1/M1 Ultra), CUDA (XOR swizzle flash attention), and ROCm (radix TOP_K). New support for DeepSeek-V4-Flash-Vision-Exp and GLM-5.3-Flash expands model compatibility, while ongoing work targets decode efficiency in large-context models like Qwen3.8-Flash-Next.

---

### **2. Releases & Breaking Changes**  
No new tagged releases or breaking API changes were issued in the last 24 hours. However, PRs indicate upcoming changes:  
- `llama-server` will transition from port `8080` to `9931` (leetspeak for GGML) — see [PR #26508](https://github.com/ggml-org/llama.cpp/pull/26508) for notice.

---

### **3. New Model & Hardware Support**  
- ✅ **New Models**:  
  - Added support for **DeepSeek-V4-Flash-Vision-Exp** ([PR #28133](https://github.com/ggml-org/llama.cpp/pull/28133))  
  - Added **GLM-5.3-Flash (GLM-5-Next)** with hybrid linear/sparse MoE and vision tower ([PR #27754](https://github.com/ggml-org/llama.cpp/pull/27754), [PR #27773](https://github.com/ggml-org/llama.cpp/pull/27773))  
- ✅ **Hardware Backends**:  
  - M1 Ultra Metal tuning added ([PR #28088](https://github.com/ggml-org/llama.cpp/pull/28088))  
  - M1 Metal tuning updated ([PR #28078](https://github.com/ggml-org/llama.cpp/pull/28078))  
  - ROCm now supports **radix TOP_K for long rows** ([PR #27466](https://github.com/ggml-org/llama.cpp/pull/27466))  
- ✅ **Quantization**:  
  - Metal now includes optimized `fa-vec` paths for quantized types ([PR #28116](https://github.com/ggml-org/llama.cpp/pull/28116))

---

### **4. Performance & Optimization**  
- **Metal (Apple Silicon)**:  
  - M1 Ultra gains dedicated `fa-vec` tunings; layout moved after M1 Max section for consistency ([PR #28088](https://github.com/ggml-org/llama.cpp/pull/28088))  
- **CUDA**:  
  - XOR swizzle flash attention K/V smem fp16 tiles improve memory coalescing ([PR #25635](https://github.com/ggml-org/llama.cpp/pull/25635))  
  - Extended MOE fusion to speculative decoding (previously limited to single token) ([PR #27621](https://github.com/ggml-org/llama.cpp/pull/27621))  
- **ROCm**:  
  - Radix-based TOP_K enables faster top-k selection on long rows, improving context scalability ([PR #27466](https://github.com/ggml-org/llama.cpp/pull/27466))  
- **OpenCL (Intel Xe-LP)**:  
  - Optimized Q4_K/Q5_K kernels with `N_DST=8` and `8x8` tile sizes increase activation reuse by 2x ([PR #26438](https://github.com/ggml-org/llama.cpp/pull/26438))  
- **General**:  
  - AVX2: Speedup in large batch prompt processing for IQ quantized models via vectorized IQ panel decode ([PR #27402](https://github.com/ggml-org/llama.cpp/pull/27402))  
  - KV cache: Batched scatter reads during non-contiguous state restore reduce overhead ([PR #27991](https://github.com/ggml-org/llama.cpp/pull/27991))  

---

### **5. Stability & Regressions**  
Critical stability issues reported today include:  
- 🔴 **SYCL Crashes on Intel Arc A770/B70**: Multiple reports of crashes with `dev2dev_memcpy(DEVICE_LOST)` and GPU hangs under load ([#27063](https://github.com/ggml-org/llama.cpp/issues/27063), [#25692](https://github.com/ggml-org/llama.cpp/issues/25692))  
- 🔴 **Vulkan Pipeline Hang**: Compilation hang on gfx1103 (RADV 780M) prevents server startup ([#27998](https://github.com/ggml-org/llama.cpp/issues/27998))  
- 🔴 **ROCm TOP_K Crash**: `invalid configuration argument` when `ncols > 1024` due to bitonic kernel block-size overflow ([#27021](https://github.com/ggml-org/llama.cpp/issues/27021))  
- 🔴 **DeepSeek-V4 Garbled Output on ROCm**: Unconfirmed but high-severity bug affecting Strix Halo systems ([#25436](https://github.com/ggml-org/llama.cpp/issues/25436))  
- ⚠️ **WebGPU Crash on Non-Multiple-of-4 Offset**: Fixed in [PR #28045](https://github.com/ggml-org/llama.cpp/pull/28045) — no fix yet for SYCL multi-GPU hangs or Qwen4exp decode slowdown beyond 1K context ([#27856](https://github.com/ggml-org/llama.cpp/issues/27856))  

---

### **6. What This Means for Application Developers**  
- **Use Metal for Apple Silicon**: M1 Ultra and M1 now have dedicated flash attention and quantized path optimizations — prioritize Metal backend for best performance on Macs.  
- **Avoid SYCL on Intel Arc A770/B70**: Known GPU hangs and crashes are unresolved — consider fallback to Vulkan or CPU for production deployments.  
- **Monitor Context Lengths on ROCm**: Avoid `ctx_size > 131072` with DeepSeek-V4-Flash until [#27021](https://github.com/ggml-org/llama.cpp/issues/27021) is resolved.  
- **Leverage New Model Support**: Integrate **GLM-5.3-Flash** and **DeepSeek-V4-Flash-Vision-Exp** via `mtmd` and conversion tools — both require `NVIDIA_TF32_OVERRIDE=0` for correct output.  
- **Prepare for Port Change**: Update configs and proxies to accommodate `llama-server` moving from port `8080` to `9931` (per [PR #26508](https://github.com/ggml-org/llama.cpp/pull/26508)).  

> *Recommendation*: For high-throughput inference, use CUDA or Metal with `--flash-attn` enabled. Avoid SYCL and Vulkan on Intel/AMD discrete GPUs until stability patches land.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-09-01**

---

### **1. Today's Highlights**  
The Ollama ecosystem continues to expand its support for advanced multimodal and MoE (Mixture-of-Experts) models, with critical stability fixes for MLX-backed inference on Apple Silicon and AMD GPUs. A high-priority regression in the 0.33.0 release—causing GPU driver crashes during multi-turn conversations on Windows/NVIDIA—is now actively being addressed. Meanwhile, developers are pushing for deeper observability via API-accessible cloud usage stats and improved error reporting.

---

### **2. Releases & Breaking Changes**  
*No new releases in the last 24 hours.*  
However, **v0.33.0** introduced a known regression (Issue #18152) causing `VIDEO_TDR_TIMEOUT_DETECTED` crashes on Windows when transitioning from single-turn to multi-turn requests—affecting NVIDIA users. This has been reported across multiple hardware configurations and is under active investigation. No migration guidance or workaround yet available.

---

### **3. New Model & Hardware Support**  
- ✅ **Granite 4.1 series** added to experimental MLX support (PR #17972). These dense models are now importable via `ollama create` using safetensors format.
- 📌 **Qwen3-VL and video-capable models** remain unusable due to missing input pipeline (Issue #18151); users currently must pre-process video into frames manually.
- ⚠️ **AMD ROCm support** for MoE models remains fragile: mixed-gfx architecture splits (e.g., gfx1200 + gfx1201) trigger `ROCm error: no kernel image is available` (Issue #18162), blocking scalable inference across heterogeneous AMD setups.
- 🔧 **MLX-C** and **llama.cpp** backends updated to latest upstream versions (PRs #18160, #18080), enabling future compatibility with newer model formats.

---

### **4. Performance & Optimization**  
- 💡 **Memory leak mitigation**: MLX runner shows persistent memory growth (~0.147 GiB per request) at fixed context, plateauing near 28.5 GiB (Issue #17924). Impactful for long-running agent workloads.
- 📊 **Cache visibility improvements**: PRs #16916 and #17943 add `prompt_eval_cached_count` and `cache_n` metrics to API responses—enabling precise tracking of cache hit rates and effective throughput in both local and cloud environments.
- ⏱️ **Streaming optimization**: PR #18156 introduces repeat token detection in streamed MLX completions, preventing runaway generations and improving reliability during long-form output.

---

### **5. Stability & Regressions**  
| Severity | Issue | Summary | Fix Status |
|---------|-------|--------|------------|
| 🔴 Critical | [#18152](https://github.com/ollama/ollama/issues/18152) | GPU driver crash (`VIDEO_TDR_TIMEOUT_DETECTED`) on Windows + NVIDIA during multi-turn transitions after v0.33.0 upgrade | Open — regression confirmed between 0.32.15 and 0.33.0 |
| 🔴 High | [#18162](https://github.com/ollama/ollama/issues/18162) | MoE models crash on mixed AMD GPU architectures (gfx1200 + gfx1201) due to missing ROCm kernel images | Open — affects scalability on AMD systems |
| 🟡 Medium | [#17778](https://github.com/ollama/ollama/issues/17778) | Qwen 3.8 fails chat streaming with "no user query found in messages" (500 error) | Open — tool-calling loop issue |
| 🟡 Medium | [#14493](https://github.com/ollama/ollama/issues/14493) | Qwen 3.5 27B: tool calling broken, repetition penalties ignored | Open — impacts agentic workflows |
| 🟢 Low | [#18146](https://github.com/ollama/ollama/issues/18146) | `ollama create` fails on Qwen3.8-Flash-Next GGUF due to validation mismatch | Open — likely requires patching llama-quantize compatibility |

---

### **6. What This Means for Application Developers**  
- **Avoid v0.33.0 on Windows/NVIDIA** if running multi-turn or long-context applications—use 0.32.15 until the TDR regression is resolved.
- **Do not rely on tool calling or repetition control** with Qwen 3.5/3.8 models until issues #14493 and #17778 are patched—these break core agent logic.
- **For macOS/M1/M2/M3/M4 users**, use MLX backend with caution: monitor memory usage (Issue #17924) and avoid long-running sessions without restarts.
- **Use `prompt_eval_cached_count`** in your monitoring stack (via `/api/chat`, OpenAI-compatible endpoints) to measure real-time cache efficiency and optimize prompt design.
- **Expect limited progress on video inputs**—Qwen3-VL cannot ingest raw video yet (Issue #18151); pre-frame extraction remains mandatory.
- **Request cloud usage stats via `/api/me`** (Issue #12532)—this is critical for cost-aware deployment planning; consider voting to prioritize it.

> 🔗 *Track key issues:* [12532](https://github.com/ollama/ollama/issues/12532), [18152](https://github.com/ollama/ollama/issues/18152), [18162](https://github.com/ollama/ollama/issues/18162), [17778](https://github.com/ollama/ollama/issues/17778)

---  
*Digest generated: 2026-09-01 | Source: github.com/ollama/ollama*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-09-01**

---

### **1. Today's Highlights**  
The LiteLLM project continues its momentum in stabilizing core proxy and routing logic, with key PRs focused on observability, security, and correctness in team-level configurations. Critical fixes address model alias visibility, credential leakage, and silent failures in logging—especially for `GET /v2/team/list` and virtual key handling. Notably, the UI now surfaces runtime-registered callbacks, improving transparency for monitoring integrations.

---

### **2. Releases & Breaking Changes**  
*No new releases in the last 24 hours.*  
However, several breaking-change-prone updates are under review:  
- **PR #39045**: Adds `litellm_model_table` to `/v2/team/list`, enabling retrieval of model aliases via API (fixes Issue #26312).  
- **PR #38979**: Wire team-level logging callbacks into passthrough endpoints (e.g., `/gemini`, `/anthropic`) — critical for observability in multi-tenant deployments.  
- **PR #39046**: Reverts a prior change due to unexpected side effects; underscores caution around UI state persistence in credential selection.  

👉 [PR #39045](https://github.com/BerriAI/litellm/pull/39045) | [PR #38979](https://github.com/BerriAI/litellm/pull/38979) | [PR #39046](https://github.com/BerriAI/litellm/pull/39046)

---

### **3. New Model & Hardware Support**  
*No new models or hardware backends added today.*  
But ongoing progress includes:  
- **PR #39039**: Adds experimental support for **Milvus gRPC search**, enabling secure, high-performance vector storage integration for gRPC-only Milvus deployments.  
- **PR #38952**: Extends MCP spec parsing to accept **YAML OpenAPI specs**, improving compatibility with tooling ecosystems using YAML-based contracts.  

👉 [PR #39039](https://github.com/BerriAI/litellm/pull/39039) | [PR #38952](https://github.com/BerriAI/litellm/pull/38952)

---

### **4. Performance & Optimization**  
*No direct performance improvements landed today*, but foundational work continues:  
- **PR #39021**: Introduces validation of release wheel contracts (symbols, imports, size < 20MB), preventing future regressions in native extension loading.  
- **PR #39026**: Refactors Rust-Python interop layer into a domain-neutral crate (`litellm-python-interop`), reducing coupling and improving maintainability for future optimizations.  

👉 [PR #39021](https://github.com/BerriAI/litellm/pull/39021) | [PR #39026](https://github.com/BerriAI/litellm/pull/39026)

---

### **5. Stability & Regressions**  
Top stability issues reported today (ranked by impact):  

1. **Model Access Groups leak into `/v1/models` response** *(Issue #25550)*  
   - **Severity**: High  
   - **Impact**: Security risk: access group names exposed even when referenced models don’t exist.  
   - **Fix Status**: Pending merge (no fix PR yet).  

2. **`output_parse_pii` has no effect with Presidio** *(Issue #14516)*  
   - **Severity**: Medium  
   - **Impact**: PII masking not enforced despite configuration.  
   - **Fix Status**: Closed; likely requires re-evaluation of middleware pipeline order.  

3. **`request_timeout` never fires on silent upstreams** *(Issue #38358)*  
   - **Severity**: High  
   - **Impact**: Requests hang indefinitely if upstream accepts TCP but never sends data.  
   - **Fix Status**: PR pending — see [PR #38358](https://github.com/BerriAI/litellm/issues/38358).  

4. **Gemini reasoning content leaks into output_text** *(Issue #36929)*  
   - **Severity**: Medium  
   - **Impact**: Breaks strict `json_schema` enforcement when `reasoning.effort=medium|high`.  
   - **Fix Status**: No fix PR yet.  

👉 [Issue #25550](https://github.com/BerriAI/litellm/issues/25550) | [Issue #14516](https://github.com/BerriAI/litellm/issues/14516) | [Issue #38358](https://github.com/BerriAI/litellm/issues/38358) | [Issue #36929](https://github.com/BerriAI/litellm/issues/36929)

---

### **6. What This Means for Application Developers**  
- **Use `GET /v2/team/list` only after updating to latest stable**: Until PR #39045 merges, model aliases won’t be visible in team responses — this impacts agent routing and audit tools relying on metadata.  
- **Avoid setting `output_parse_pii=True` with Presidio until confirmed**: The current behavior is inconsistent, risking compliance gaps.  
- **Monitor timeouts carefully**: If your app uses slow or unreliable providers (e.g., custom endpoints), ensure `request_timeout` is properly configured — it may not trigger as expected.  
- **Leverage new logging enhancements**: With PRs like #38979 and #38974, you can now enforce per-team observability across all provider routes, enabling better cost and usage tracking.  
- **Prepare for stricter credential management**: Future versions will enforce credential scope at the team level (PR #38932), so validate your deployment configurations early.

➡️ **Actionable Tip**: Audit your virtual key usage and `model_aliases` setup now — missing alias visibility could break production routing logic.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# **Unsloth Digest – 2026-09-01**

---

### **1. Today's Highlights**  
The Unsloth ecosystem continues to mature with a strong focus on **security hardening**, **multi-model compatibility**, and **UX polish** in Studio. Key developments include the introduction of OS-level sandboxes for tool execution (via bubblewrap/Seatbelt), fixes for AMD ROCm BF16 detection and training crashes, and critical improvements to MLX context length handling. The team is actively addressing model loading issues across GGUF variants—particularly Qwen3.8-Flash-Next-GGUF—and improving Ollama integration reliability.

---

### **2. Releases & Breaking Changes**  
*No new releases in the last 24 hours.*  
However, several PRs indicate upcoming breaking changes:
- **PR #7101** introduces mandatory sandboxing for `python` and `terminal` tools in Studio (Linux: `bubblewrap`, macOS: `Seatbelt`). This will affect workflows relying on direct filesystem access or environment variables.
- **PR #9858** changes GPU visibility reporting to reflect actual OS-detected devices—not just PyTorch-opened ones—potentially altering UI behavior on multi-GPU systems.
- **PR #10104** adjusts shutdown logic by informing the browser about the bootstrap deadline, preventing silent failures during initial setup.

> 🔗 [PR #7101](https://github.com/unslothai/unsloth/pull/7101) | [PR #9858](https://github.com/unslothai/unsloth/pull/9858) | [PR #10104](https://github.com/unslothai/unsloth/pull/10104)

---

### **3. New Model & Hardware Support**  
#### ✅ **Newly Supported Models**
- **Qwen3.8-Flash-Next-GGUF**: Currently blocked due to unsupported architecture (`qwen4exp`) in `llama.cpp`. Issue [#10015](https://github.com/unslothai/unsloth/issues/10015) tracks progress.
- **Wan2.2-TI2V-5B**: Identified as requiring ~66.5 GB VRAM on 16 GB cards due to SDPA fallback; not a model issue but a backend memory inefficiency.
- **Deepseek models**: Issue [#10047](https://github.com/unslothai/unsloth/issues/10047) reports unexpected re-downloads during runtime.

#### 🧠 **Backend & Hardware Advances**
- **AMD ROCm (gfx1032/gfx1200/gfx1201)**: Multiple PRs address hardware-specific issues:
  - Fix BF16 support detection ([#7682](https://github.com/unslothai/unsloth/pull/7682))
  - Prevent `torch.compile` on Windows when Triton can’t JIT ([#7704](https://github.com/unslothai/unsloth/pull/7704))
  - Gate GPU selection based on torch build arch coverage ([#8791](https://github.com/unslothai/unsloth/pull/8791))

> 🔗 [Issue #10015](https://github.com/unslothai/unsloth/issues/10015) | [PR #7682](https://github.com/unslothai/unsloth/pull/7682) | [PR #8791](https://github.com/unslothai/unsloth/pull/8791)

---

### **4. Performance & Optimization**  
#### ⚡ **Latency & Memory Improvements**
- **MLX Context Length Fix**: PR [#8125](https://github.com/unslothai/unsloth/pull/8125) resolves a critical bug where MLX-served models ran at a hardcoded 4096-token limit regardless of actual model config. Now uses real context length from model metadata.
- **Prompt Cache Reuse**: Issue [#10031](https://github.com/unslothai/unsloth/issues/10031) highlights that MLX prompt cache isn't reused for Qwen3.8-27B due to `ArraysCache` layout mismatch—impacting inference speed for long sequences.

#### 📈 **Inference Efficiency**
- **Ollama Integration**: PRs like [#10110](https://github.com/unslothai/unsloth/pull/10110) and [#10051](https://github.com/unslothai/unsloth/issues/10051) aim to unify and stabilize Ollama inventory scanning, reducing redundant model indexing and improving load times.

> 🔗 [PR #8125](https://github.com/unslothai/unsloth/pull/8125) | [Issue #10031](https://github.com/unslothai/unsloth/issues/10031) | [PR #10110](https://github.com/unslothai/unsloth/pull/10110)

---

### **5. Stability & Regressions**  
| Severity | Issue | Impact | Status |
|---------|-------|--------|--------|
| 🔴 High | **Studio: SQLite deadlock under concurrent DB access** ([#10022](https://github.com/unslothai/unsloth/issues/10022)) | Backend becomes unresponsive; affects multi-user/local workflows | Open |
| 🔴 High | **Qwen3.5 bnb-4bit crash on forward pass** ([#9867](https://github.com/unslothai/unsloth/issues/9867)) | Training fails immediately due to undequantized packed weights | Open |
| 🟡 Medium | **Studio corrupts parallel tool-call arguments into malformed JSON** ([#9807](https://github.com/unslothai/unsloth/issues/9807)) | Causes HTTP 400 errors in subsequent turns | Closed |
| 🟡 Medium | **Ollama models show wrong source, crash schema** ([#9986](https://github.com/unslothai/unsloth/issues/9986)) | Inventory fails to populate; breaks UI state | Open |
| 🟡 Medium | **Deepresearch hardcoded to 127.0.0.1** ([#10109](https://github.com/unslothai/unsloth/issues/10109)) | Prevents remote deployment via LAN | Open |

> 🔗 [Issue #10022](https://github.com/unslothai/unsloth/issues/10022) | [Issue #9867](https://github.com/unslothai/unsloth/issues/9867) | [Issue #9807](https://github.com/unslothai/unsloth/issues/9807)

---

### **6. What This Means for Application Developers**  
- **Security-first deployments**: Expect stricter sandboxing in Studio (via `bubblewrap`/`Seatbelt`). If your agent relies on file system or env var access, test now—this may break existing tool scripts.
- **Model portability**: Be cautious with newer GGUF models (especially Qwen variants). Always verify `llama.cpp` compatibility before deployment.
- **Cross-platform stability**: AMD users should avoid `BF16` on gfx10 GPUs until PR [#7682](https://github.com/unslothai/unsloth/pull/7682) lands. Use `--disable-bf16` if needed.
- **API resilience**: Tool call argument formatting bugs (e.g., [#9807](https://github.com/unslothai/unsloth/issues/9807)) suggest robust error handling is essential—don’t assume valid JSON input.
- **Future-proofing**: Monitor the unified Ollama inventory effort ([#10051](https://github.com/unslothai/unsloth/issues/10051)) to avoid double-scanning or missing models.

> ✅ Pro Tip: Use `--fit-target` (from PR #4882) to optimize GGUF loading for specific hardware—critical for edge deployments.

---  
*Digest generated: 2026-09-01 | Source: [unslothai/unsloth GitHub](https://github.com/unslothai/unsloth)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*