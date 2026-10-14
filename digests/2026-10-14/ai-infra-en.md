# AI Infrastructure Digest 2026-10-14

> Generated: 2026-10-14 01:21 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-10-14**

---

### **1. Ecosystem Overview**  
The AI infrastructure landscape in Q4 2026 is defined by a convergence of **high-performance inference engines**, **multi-platform hardware abstraction**, and **agent-native serving patterns**. Projects are rapidly maturing beyond basic model serving, with deep investments in speculative decoding, heterogeneous vocabularies, and disaggregated memory architectures. A clear bifurcation is emerging: low-latency, high-concurrency engines (vLLM, SGLang) target cloud-scale deployments, while local-first tools (llama.cpp, Unsloth) prioritize cross-device compatibility and edge deployment. Meanwhile, gateways like LiteLLM and Ollama are evolving into full-stack orchestration platforms, integrating cost tracking, tool calling, and agent routing—blurring the lines between inference engine and application runtime.

---

### **2. Activity Comparison**  

| Project       | Issues Opened (Last 24h) | PRs Merged (Last 24h) | Release Status |
|---------------|----------------------------|--------------------------|----------------|
| **vLLM**      | 12                         | 8                        | None           |
| **SGLang**    | 7                          | 6                        | None           |
| **llama.cpp** | 9                          | 5                        | Two behavioral fixes (non-versioned) |
| **Ollama**    | 10                         | 3                        | None           |
| **LiteLLM**   | 8                          | 5                        | v1.106.0-rc.2 (security-hardened) |
| **Unsloth**   | 6                          | 4                        | v0.1.907-beta (performance-focused) |

> ✅ *Observation*: vLLM leads in technical depth and integration velocity, particularly around MoE, draft models, and multi-GPU optimizations. LiteLLM stands out for production-grade security and telemetry maturity.

---

### **3. Model Support Race**  

| New Model / Architecture         | Supported By                     | Notes |
|----------------------------------|----------------------------------|-------|
| **Qwen4exp** (dynamic expert width, 64-bit metadata) | ✅ **llama.cpp** (PR #30316) | First to support; critical for future MoE scaling |
| **MiniCPM-V 4.7** (3D RoPE)      | ✅ **llama.cpp** (PR #29416), ❌ Ollama (Issue #18983) | llama.cpp leads; Ollama has load failure on Windows |
| **K2 Horizon (MoE)**             | ⚠️ Requested (Ollama #18698) | No implementation yet — high demand from MBZUAI IFM ecosystem |
| **Gemini-4-Argon (auto-continuation)** | ✅ **LiteLLM** (PR #46240) | Only project with native long-output continuation support |
| **OpenInfer** (self-hosted OpenAI API) | ✅ **LiteLLM** (PR #41034) | Enables direct proxying to custom inference backends |
| **MiniMax-H3/H3-Max (video gen)** | ✅ **LiteLLM** (PR #43705) | Unique video generation endpoint support |

> 🏆 **Leaderboard**:  
> - **llama.cpp**: Best in class for model compatibility and low-level innovation (e.g., Qwen4exp).  
> - **LiteLLM**: Most forward-looking in API extension and multi-provider capabilities.  
> - **vLLM/SGLang**: Focused on optimizing top-tier LLMs (DeepSeek-V4, Qwen3.8) rather than new models.

---

### **4. Performance Frontier**  

| Optimization Focus               | Leading Projects                                  | Key Developments |
|----------------------------------|---------------------------------------------------|------------------|
| **KV Cache Efficiency**          | vLLM, SGLang                                      | Unified DeepGEMM MegaMoE experts (vLLM); HiCache host pooling (SGLang) |
| **Speculative Decoding**         | vLLM, SGLang                                      | Heterogeneous-vocab draft models (vLLM PR #61536); BCG auto-enable (SGLang PR #44022) |
| **Quantization & Low-Precision** | vLLM, SGLang                                      | NVFP4 vs FP8 prefill regression (vLLM #50416); ROCm-native FP8 (SGLang PR #61091) |
| **Multi-GPU/Distributed Serving**| vLLM, SGLang                                      | P/D disaggregation scalability (vLLM #55434); PCP expansion (SGLang #33226) |
| **Local/Edge Inference Speed**   | Unsloth, llama.cpp                                | 5x inference speedup (Unsloth); Vulkan Flash Attention (llama.cpp PR #29357) |
| **Startup & Cold-Start Latency** | SGLang, Ollama                                    | Weight cache daemon (SGLang); `n_threads` cgroup fix (Ollama #17916) |

> 🔍 *Trend*: The performance frontier is shifting from raw throughput to **systemic efficiency**—reducing memory overhead, improving cache hit rates, and enabling scalable agent pipelines via speculative and disaggregated architectures.

---

### **5. Layer Positioning**  

| Project       | Primary Layer                    | Role Summary |
|---------------|----------------------------------|--------------|
| **vLLM**      | **High-Performance Serving Engine** | Optimized CUDA/ROCm kernels, MoE, speculative decoding, GPU-centric |
| **SGLang**    | **Scalable Agent Serving Framework** | Prefill-disaggregation, HiCache, PCP/DCP, designed for long-context agents |
| **llama.cpp** | **Universal Local Runtime**       | Cross-platform, WebGPU/Vulkan/SYCL, ideal for edge, mobile, and embedded |
| **Ollama**    | **Developer-Focused Gateway + Runtime** | CLI-first, agent-ready, integrates tool calling, cloud, and NPU support |
| **LiteLLM**   | **Enterprise LLM Gateway & Proxy** | Multi-provider routing, cost tracking, MCP tooling, observability |
| **Unsloth**   | **Agent-Optimized UI/UX Runtime** | High-speed chat, real-time feedback, desktop/web hybrid, training-friendly |

> 💡 *Positioning Insight*:  
> - **vLLM/SGLang** = "Infrastructure layer" for large-scale inference.  
> - **llama.cpp** = "Universal substrate" for local deployment.  
> - **Ollama/LiteLLM** = "Application enablement layer" for developers and ops teams.  
> - **Unsloth** = "Agent experience layer" focused on interactivity and usability.

---

### **6. Trend Signals**  

#### **Emerging Industry Trends**  
1. **Agent-Native Inference Architectures**: Heterogeneous-vocab draft models (vLLM), PCP/DCP (SGLang), and HiCache disaggregation signal a shift toward **specialized agent workflows**—not just prompt-response systems.
2. **Hardware Diversification**: AMD ROCm (vLLM, SGLang), Intel XPU (vLLM), T-Head PPU (SGLang), Snapdragon NPU (Ollama), and Apple Silicon (Unsloth) indicate **multi-platform parity is now a baseline expectation**.
3. **Security & Compliance as Core Features**: LiteLLM’s signed Docker images, air-gapped telemetry, and label deduplication reflect growing need for **supply chain integrity and auditability** in enterprise deployments.
4. **Model Compatibility Overhead**: Multiple projects report issues with new model variants (e.g., MiniCPM-V 4.7, K2 Horizon), suggesting **model evolution is outpacing tooling stability**—developers must expect frequent patching.
5. **Performance Regressions Are a Major Risk**: vLLM’s NVFP4 slowdown, Ollama’s 30% t/s drop, and SGLang’s `fa4` crash highlight that **optimization is not linear**—even mature projects face hidden bottlenecks.

#### **What Developers Should Watch**  
- ✅ **Adopt vLLM or SGLang early** for agentic systems requiring speculative decoding and long-context scaling.  
- ✅ **Use LiteLLM for production gateways** with multi-provider routing, cost control, and compliance needs.  
- ✅ **Leverage llama.cpp for edge/local deployment** where portability and minimal dependencies matter.  
- ⚠️ **Avoid `glm-5.3-flash:cloud`** (Ollama) and **NVFP4 causal prefill on Blackwell** (vLLM) until fixes land.  
- 🔮 **Monitor unsloth’s beta releases** for rapid UI/UX improvements in agent-facing applications.

> 📌 **Bottom Line**: The infrastructure stack is no longer just about running models—it’s about **orchestrating agents at scale across diverse hardware, with predictable performance, security, and cost control**. Choose your stack based on whether you’re building **infrastructure**, **applications**, or **experiences**.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest – 2026-10-14

---

### **1. Today's Highlights**  
vLLM continues its aggressive push toward multi-architecture parity and advanced speculative decoding capabilities, with critical fixes for ROCm (AMD) and CUDA stability on high-concurrency workloads. Key developments include the unification of DeepGEMM MegaMoE experts for DeepSeek-V4/DSv4.1/Kimi-K3, enabling NVFP4 support and improved MoE efficiency, and a major PR introducing heterogeneous-vocabulary draft model support in Model Runner V2—essential for next-gen agentic systems.

---

### **2. Releases & Breaking Changes**  
*No new releases or breaking changes detected in the last 24 hours.*

---

### **3. New Model & Hardware Support**  
- **SM8x (Ampere: A100/A800, RTX 30xx)**: [Issue #50576](https://github.com/vllm-project/vllm/issues/50576) tracks urgent feature request to enable `DeepSeek-V4-Flash` and `DeepSeek-V4-Flash-0731` on SM8x GPUs — currently unsupported due to missing kernel compatibility.  
- **ROCm (AMD MI355X, gfx950)**: Multiple performance optimization trackers ([#57149](https://github.com/vllm-project/vllm/issues/57149), [#59575](https://github.com/vllm-project/vllm/issues/59575)) are active for `Qwen3.8-2.4T-A95B` and `Qwen3.8-Flash-Next`, targeting native FP8 and MXFP4 kernels.  
- **Intel GPU (XPU)**: [PR #58297](https://github.com/vllm-project/vllm/pull/58297) integrates XPU MLA support into `FLASH_ATTN_MLA`, extending multi-platform attention backend coverage.  
- **Heterogeneous Vocabulary Draft Models**: [PR #61536](https://github.com/vllm-project/vllm/pull/61536) enables `use_heterogeneous_vocab=True` in MRV2, allowing draft models with different vocabularies than target (e.g., MiniMax-M3 → Qwen).

---

### **4. Performance & Optimization**  
- **NVFP4 vs FP8 Causal Prefill**: [Issue #50416](https://github.com/vllm-project/vllm/issues/50416) reports a **1.7–1.8× slowdown** in FlashInfer attention with NVFP4 KV cache on SM120 (Blackwell) compared to FP8 — a critical regression for low-precision inference workflows.  
- **ROCm Native FP8 Triton Backend**: [PR #61091](https://github.com/vllm-project/vllm/pull/61091) introduces a tuned per-token FP8 linear backend for Radeon AI PRO R9700 (gfx1201), promising dynamic scaling improvements.  
- **KV Cache Efficiency**: [PR #61538](https://github.com/vllm-project/vllm/pull/61538) unifies three DeepGEMM MegaMoE expert implementations into one layer, reducing code duplication and improving kernel fusion opportunities.  
- **P/D Disaggregation Scalability**: [Issue #55434](https://github.com/vllm-project/vllm/issues/55434) highlights NIXL descriptor overhead (~112k per rank-transfer) on GB200, slowing MNNVL/cuda_ipc relative to RDMA — a key bottleneck for large-scale inference.

---

### **5. Stability & Regressions**  
- **CUDA Graph Deadlock**: [Issue #60845](https://github.com/vllm-project/vllm/issues/60845) reports intermittent deadlocks in `fully-sharded-loras` mode under TP=2/4 when serving Qwen3.5-compatible MoE models — reproducible with concurrent traffic.  
- **GLM-5.3-Flash KPool Indexer Corruption**: [Issue #54359](https://github.com/vllm-project/vllm/issues/54359) reveals silent KV cache overwrites due to mismatched block size assumptions on ROCm — degrades long-context recall without crashing.  
- **MiniCPM-V-4.6 Load Failure**: [Issue #48449](https://github.com/vllm-project/vllm/issues/48449) shows `qkqkv_proj` module not found error in vLLM 0.25.0; likely due to structural changes in the model’s attention layer.  
- **vLLM OpenAI Image Startup Crash**: [Issue #60406](https://github.com/vllm-project/vllm/issues/60406) identifies a runtime failure in `vllm/vllm-openai:v0.31.0-cu129` due to bundled `torchcodec 0.17.0` built against CUDA 13, incompatible with CUDA 12.9.  
- **Fixes in Progress**:  
  - [PR #61495](https://github.com/vllm-project/vllm/pull/61495): Fixes YaRN cos/sin cache truncation bug affecting models with `max_position_embeddings > cache_size`.  
  - [PR #61537](https://github.com/vllm-project/vllm/pull/61537): Ensures DFlash2 full-attention layers remain bidirectional in speculators.  
  - [PR #61091](https://github.com/vllm-project/vllm/pull/61091): Adds ROCm-native FP8 linear backend to avoid fallbacks.

---

### **6. What This Means for Application Developers**  
- **Agentic Systems**: The introduction of heterogeneous-vocab draft models via [PR #61536](https://github.com/vllm-project/vllm/pull/61536) enables more flexible, efficient agent architectures using mismatched draft/target models — essential for Claude Code-style tool calling.  
- **Multi-Platform Deployment**: With ROCm optimizations and XPU integration underway, developers should begin testing AMD and Intel GPU paths early, especially for models like Qwen3.8 and Kimi-K3.  
- **Memory & Concurrency**: Be cautious with `max_num_seqs` above 256 on H20 (per [Issue #56389](https://github.com/vllm-project/vllm/issues/56389)), and monitor for CUDA graph deadlocks in MoE + LoRA setups.  
- **Quantization Strategy**: Avoid NVFP4 for causal prefill on Blackwell until [Issue #50416](https://github.com/vllm-project/vllm/issues/50416) is resolved — FP8 remains the preferred low-precision option for now.  
- **CI/CD Practices**: Leverage the new CI sharding ([PR #61475](https://github.com/vllm-project/vllm/pull/61475)) and compatibility matrix for MiniMax-M3 ([PR #61370](https://github.com/vllm-project/vllm/pull/61370)) to validate deployments across topologies.

---  
*Digest generated from GitHub activity: vllm-project/vllm — 2026-10-14*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

---

### **1. Today's Highlights**  
The SGLang project continues to advance its scalability and reliability for large-scale LLM serving, with a strong focus on **prefill context parallelism (PCP)** and **HiCache host memory management** in preparation for Q4 2026. Key developments include progress on **DeepSeek-V4.1 optimization**, new support for **T-Head PPU** and **AMD ROCm DCP**, and ongoing efforts to stabilize CI/CD infrastructure under increasing load.

---

### **2. Releases & Breaking Changes**  
None reported in the last 24 hours. No new versions or breaking API/config changes were released.

---

### **3. New Model & Hardware Support**  
- **T-Head PPU Support**: A roadmap (#37519) is tracking first-class integration of T-Head Zhenwu 810/810E and M890P cards into SGLang. This enables deployment on China-native hardware. [Issue #37519](https://github.com/sgl-project/sglang/issues/37519)
- **AMD ROCm DCP Support**: PR #42618 adds decode context parallelism (DCP) support for GLM-5 and DeepSeek-V3.2 on ROCm, expanding multi-GPU inference options beyond NVIDIA. [PR #42618](https://github.com/sgl-project/sglang/pull/42618)
- **DeepSeek-V4.1 Optimization**: Active work underway to improve performance and compatibility, including mHC SP + engram fusion and faster FP8 kernels. [Issue #42170](https://github.com/sgl-project/sglang/issues/42170)

---

### **4. Performance & Optimization**  
- **Weight Cache Daemon (Phase 1)**: The per-rank daemon now serves post-quantized weights via CUDA IPC, reducing weight load time from **~306–327 seconds to <1 second** on Qwen3-235B FP8. [Issue #33522](https://github.com/sgl-project/sglang/issues/33522)
- **Prefill Context Parallelism (PCP)**: Progress continues on expanding PCP support across attention backends and models:
  - FlashInfer backend support in progress: #33226
  - Qwen3.8-Flash-Next and Kimi-K3 model support pending: #39724, #38344
- **Speculative Decoding & BCG**: PR #44022 automatically enables breakable CUDA graphs (BCG) for supported PCP configurations — improving throughput and reducing latency in speculative decoding pipelines. [PR #44022](https://github.com/sgl-project/sglang/pull/44022)
- **Host Memory Pooling**: PR #43978 introduces opt-in, parallel, THP-backed host pool allocation for HiCache, reducing allocation contention and improving scalability on large-memory systems. [PR #43978](https://github.com/sgl-project/sglang/pull/43978)

---

### **5. Stability & Regressions**  
- **Critical Crash in GLM-5.3-Flash**: On SM120 (RTX PRO 6000), `fa4` attention backend crashes during CUDA graph capture due to hybrid extend reshape failure; only Triton backend works reliably. [Issue #42012](https://github.com/sgl-project/sglang/issues/42012)
- **Stale KV in PD Prefill with HiCache**: Early cached-prefix send (`SGLANG_DISAGG_PREFILL_EARLY_SEND_CACHED_PREFIX=1`) can transfer KV before HiCache load-back completes, causing silent decode errors. [Issue #44070](https://github.com/sgl-project/sglang/issues/44070)
- **gRPC Output Cap at 128 Tokens**: Native gRPC `generate` endpoint defaults to 128 tokens when `max_new_tokens` is unset, violating user expectations. [Issue #44121](https://github.com/sgl-project/sglang/issues/44121)
- **NVFP4 W4A4 Checkpoint Crash**: `--fp4-gemm-backend marlin` fails on SM100 due to missing `marlin` backend in `mm_fp4`. [Issue #43988](https://github.com/sgl-project/sglang/issues/43988)

> ✅ *Fixes are actively being developed or merged for several of these issues.*

---

### **6. What This Means for Application Developers**  
Developers building high-throughput agents or production-grade LLM apps should:
- **Leverage HiCache and PD disaggregation** for long-context inference — it’s now stable across most model families and parallel strategies.
- **Avoid `fa4` backend on SM120** until #42012 is resolved; use **Triton** as fallback for GLM-5.3-Flash.
- **Set `max_new_tokens` explicitly** when using native gRPC to prevent unexpected truncation (issue #44121).
- **Expect improved startup times** with the weight cache daemon — ideal for cold-start-heavy applications.
- **Monitor for stale KV in prefill-disaggregated setups** if using early prefix sends with HiCache enabled.
- **Plan for AMD ROCm support** in upcoming deployments, especially for GLM-5 and DeepSeek-V3.2 models.

> 🔗 For real-time updates, follow [CI tracker #17050](https://github.com/sgl-project/sglang/issues/17050) and [flaky test tracker #42752](https://github.com/sgl-project/sglang/issues/42752).

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-10-14**

---

### **1. Today's Highlights**  
The latest updates focus on critical stability fixes for the server and WebGPU backends, including a stack overflow crash caused by recursive regex handling in `d1-omni`/`kev` prompts (#30243), and a WebGPU matmul ID bug with duplicate expert IDs (#30451). Concurrently, significant progress was made in model compatibility—support added for Qwen4exp’s padding and 64-bit metadata, and MiniCPM-V 4.7 (with 3D RoPE) is now natively supported.

---

### **2. Releases & Breaking Changes**  
No new release versions were published today. However, two key behavioral changes landed:  
- **Server**: Special token escaping no longer uses `std::regex_replace`, avoiding stack overflow on large inputs ([PR #30243](https://github.com/ggml-org/llama.cpp/pull/30243)).  
- **WebGPU**: `mul_mat_id` now correctly handles duplicate expert IDs, fixing a CI failure and preventing silent computation errors ([PR #30451](https://github.com/ggml-org/llama.cpp/pull/30451)).

> ⚠️ **Migration Note**: If using `d1-omni` or `kev` models via HTTP API with long `<|name|>` fields, ensure you're on commit `b11608+` to avoid thread stack overflows.

---

### **3. New Model & Hardware Support**  
- ✅ **Model Support**:  
  - Added support for **Qwen4exp** models with dynamic expert projection width and 64-bit array metadata ([PR #30316](https://github.com/ggml-org/llama.cpp/pull/30316)).  
  - Native support for **MiniCPM-V 4.7**, including 3D RoPE handling ([PR #29416](https://github.com/ggml-org/llama.cpp/pull/29416)).  
- ✅ **Hardware & Backend**:  
  - **Hexagon**: Configurable HTP DCVS/HMX power mode via `--hex-power-mode` flag ([PR #30423](https://github.com/ggml-org/llama.cpp/pull/30423)).  
  - **Vulkan**: Intel Flash Attention prefill kernel added for improved performance on Intel GPUs ([PR #29357](https://github.com/ggml-org/llama.cpp/pull/29357)).  
  - **SYCL**: New graph recording/replay functionality ported from CUDA ([PR #28725](https://github.com/ggml-org/llama.cpp/pull/28725)).

---

### **4. Performance & Optimization**  
- **Vulkan**: Optimized `pool_2d` kernel for large pooling windows by leveraging whole subgroups, improving throughput on RDNA3 and newer GPUs ([PR #30119](https://github.com/ggml-org/llama.cpp/pull/30119)).  
- **SYCL**: Fixed memory errors in `mul_mat`, split buffer, and host pool operations ([PR #29889](https://github.com/ggml-org/llama.cpp/pull/29889)), reducing instability during multi-GPU inference.  
- **Meta**: Recreated all subgraphs on arena reallocation to prevent state corruption ([PR #30453](https://github.com/ggml-org/llama.cpp/pull/30453)).  
- **Chat Output**: Replaced monolithic output string with an array of parts to enable selective parsing of tokens in future ([PR #30389](https://github.com/ggml-org/llama.cpp/pull/30389)).

---

### **5. Stability & Regressions**  
Critical issues reported today include:  
- 🔴 **Vulkan**: `decode() failed: vk::Queue::submit: ErrorDeviceLost` under long context + high `ubatch` (e.g., Strix Halo, gfx1151) — likely due to GPU queue exhaustion ([Issue #30010](https://github.com/ggml-org/llama.cpp/issues/30010)).  
- 🔴 **Vulkan/Intel**: Flash Attention fallback to SCALAR path causes O(N²) prompt processing degradation and device loss ([Issue #27638](https://github.com/ggml-org/llama.cpp/issues/27638)).  
- 🔴 **CUDA**: SM_60 quality loss observed with FP16 math silently falling back to FP32; fix already merged in forks ([Issue #25593](https://github.com/ggml-org/llama.cpp/issues/25593)).  
- 🟡 **Server**: High log spam (`llama-server`) when running on FreeBSD ([Issue #30455](https://github.com/ggml-org/llama.cpp/issues/30455)).  
- 🟡 **OpenVINO**: Crashes on AVX-512 instruction set (Core Ultra 7) due to illegal instruction ([Issue #28726](https://github.com/ggml-org/llama.cpp/issues/28726)).

> ✅ **Fixes in Progress**: PRs addressing `std::regex` recursion and WebGPU `mul_mat_id` duplicates are merged (see #30243, #30451).

---

### **6. What This Means for Application Developers**  
- **Use `--cache-ram -1` cautiously**: It does not disable limits entirely—RAM usage still grows (~640 MiB per short prompt) due to internal token caps ([Issue #29324](https://github.com/ggml-org/llama.cpp/issues/29324)). Consider explicit limits.  
- **Avoid `std::regex` in user-provided input**: If your app sends prompts with long names (e.g., `d1-omni`/`kev`), ensure they’re escaped via custom logic—not `std::regex_replace`.  
- **Monitor Vulkan/Intel deployments**: Long contexts may trigger device loss if Flash Attention falls back to scalar kernels. Use `--flash-attn off` as a workaround until [PR #29357](https://github.com/ggml-org/llama.cpp/pull/29357) is widely deployed.  
- **Leverage new chat output structure**: The shift to “parts” in chat responses enables fine-grained control over special token parsing—ideal for agents requiring structured output (e.g., JSON schema validation).  

👉 **Recommended Action**: Upgrade to `b11608+` immediately if serving `d1-omni` or `kev` models via HTTP. Monitor logs for `ErrorDeviceLost` on AMD/Intel Vulkan setups.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-10-14**

---

### **1. Today's Highlights**  
The Ollama ecosystem continues to expand its agent and cloud integration capabilities, with the addition of **Wirken** as a launchable gateway in `ollama launch` (PR #18989). Critical stability issues are emerging around model performance regression (up to 30% lower t/s) and intermittent CUDA crashes on Blackwell GPUs, while several high-priority bugs related to tool calling, JSON formatting, and NPU support on Snapdragon X Elite systems remain open.

---

### **2. Releases & Breaking Changes**  
*None reported in the last 24 hours.*  
No new releases or breaking API/config changes were published. However, ongoing work includes refactoring cloud documentation (#18972, #18981) and improving error messaging for payment failures (#18986).

---

### **3. New Model & Hardware Support**  
- **K2 Horizon models** (architecture: `k2-horizon`) requested for support (Issue #18698), including 0.9B to 36B MoE variants from MBZUAI IFM.  
- **Snapdragon X Elite NPU & GPU** support sought on Windows (Issue #5360), highlighting growing demand for ARM-based acceleration on AIPC devices.  
- **MLX-only models** like `embeddinggemma-2:740m-nvfp4` now correctly display their MLX badge (Issue #18971), improving visibility for Apple Silicon users.

---

### **4. Performance & Optimization**  
- **Performance regression confirmed**: Users report **25–30% drop in tokens per second (t/s)** across all models since v0.40.1 (Issue #18968), with benchmark logs showing measurable degradation.  
- **CUDA kernel optimization**: The root cause of `CUDA error: shared object initialization failed` on Blackwell RTX 5060 Ti has been isolated to `num_ctx` affecting Flash Attention MMA kernel shared memory allocation (Issue #18232).  
- **CPU throttling in containers**: Default `n_threads` ignores cgroup CPU quotas, causing up to **45x throughput collapse** under CPU-limited environments (Issue #17916).  

---

### **5. Stability & Regressions**  
- **Critical**: `glm-5.3-flash:cloud` exhibits **massive generation degeneration** (repeating "the = the =") starting 10-12 (CET), with cluster-level data corruption suspected (Issue #18980).  
- **High severity**: `openbmb/minicpm-v4.7:35b-a3b` fails to load due to `"unknown projector type: minicpmv4_7"` on Windows (Issue #18983), blocking vision model usage.  
- **Tool call failure**: Models fail to use tool calls when `format: json` is set (Issue #18944), despite correct schema.  
- **Windows Defender false positives**: Long-standing issue #2519 remains unresolved despite 62 comments; affects deployment reliability.  
- **Intermittent CUDA crashes** on RTX 5070 Ti and Blackwell GPUs linked to memory allocation in Flash Attention kernels (Issues #17380, #18232).  

> ✅ *Fix PRs exist for some issues*:  
> - Tool call + JSON format: PR #18975  
> - System prompt handling: PR #18990  
> - Decision model CLI support: PR #18962

---

### **6. What This Means for Application Developers**  
- **Avoid `glm-5.3-flash:cloud` until further notice** — expect unreliable outputs due to systemic degeneration.  
- **Be cautious with `format: json`** — avoid it if tool calling is required; use `format: "tool"` instead until PR #18975 lands.  
- **For containerized deployments**, explicitly set `n_threads` to match cgroup CPU limits to prevent catastrophic throughput drops (Issue #17916).  
- **Monitor performance regressions**: If using v0.40.2+, expect reduced inference speed — investigate with benchmarks before deploying.  
- **Consider alternative backends**: For Snapdragon X Elite systems, external NPU offloading may be necessary until native support arrives (Issue #5360).  
- **Integrate Wirken early**: With official `ollama launch` support (PR #18989), developers can now easily connect agents to messaging channels via secure, audited gateways.

---

*Digest generated from [github.com/ollama/ollama](https://github.com/ollama/ollama) — 2026-10-14*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-10-14**

---

### **1. Today's Highlights**  
The LiteLLM proxy continues to evolve with significant improvements in telemetry, cost tracking, and stability for multi-provider routing. Key updates include enhanced observability via new telemetry sinks and admin UI controls, fixes for critical billing inaccuracies (e.g., cross-region Bedrock pricing), and robust handling of MCP tool pinning drift detection. These changes strengthen production readiness for enterprise-grade LLM gateways.

---

### **2. Releases & Breaking Changes**  
- **v1.106.0-rc.2** released today: includes security hardening via signed Docker images using [cosign](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0). All releases are now cryptographically verifiable.
- **Breaking Change**: `custom_prometheus_metadata_labels` now skips duplicate label assignment; previously caused Prometheus metric ingestion failures ([PR #46267](https://github.com/BerriAI/litellm/pull/46267)).
- **Migration Note**: Air-gapped deployments must now handle telemetry locally — a new persistent local report table was added ([PR #45490](https://github.com/BerriAI/litellm/pull/45490)).

---

### **3. New Model & Hardware Support**  
- ✅ **OpenInfer** added as an OpenAI-compatible provider (`openinfer/<model>`), enabling direct integration with self-hosted inference engines via standard OpenAI API format ([PR #41034](https://github.com/BerriAI/litellm/pull/41034)).
- ✅ **MiniMax-H3 and H3-Max** video generation models now supported via `/v1/videos` endpoint ([PR #43705](https://github.com/BerriAI/litellm/pull/43705)).
- ✅ **Gemini-4-Argon** auto-continuation support via `continuationToken` for long outputs beyond 32K tokens per call ([PR #46240](https://github.com/BerriAI/litellm/pull/46240)).
- ✅ **Databricks non-Claude models** now properly send plain text blocks instead of malformed JSON objects ([PR #45686](https://github.com/BerriAI/litellm/pull/45686)).

---

### **4. Performance & Optimization**  
- **Telemetry Optimization**: Introduced `AggregatingSink` and fixed-bucket histograms to reduce per-request telemetry volume by ~90% while preserving statistical fidelity ([PR #45487](https://github.com/BerriAI/litellm/pull/45487)).
- **Cost Accuracy**: Cross-region AWS Bedrock profiles (e.g., `eu.anthropic.claude-haiku-4-5`) now priced at the correct deployment rate, avoiding underbilling ([PR #46288](https://github.com/BerriAI/litellm/pull/46288)).
- **Router Efficiency**: Complexity router no longer overrides caller’s `max_tokens` with tier ceilings — proposed clamping behavior now under discussion ([Issue #44869](https://github.com/BerriAI/litellm/issues/44869)).

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Fix PR |
|--------|------|--------|--------|
| 🔴 High | **Proxy crashes on `count_tokens` with missing `items` in array schema** (JSON Schema valid) → HTTP 500 | Open | [Issue #46052](https://github.com/BerriAI/litellm/issues/46052) |
| 🔴 High | **MCP tool pin ignores `outputSchema` and `readOnlyHint`, risking destructive changes without alert** | Open | [Issue #44093](https://github.com/BerriAI/litellm/issues/44093) |
| 🟡 Medium | **OpenRouter streaming reports incorrect model name (router name instead of actual served model)** | Open | [Issue #46095](https://github.com/BerriAI/litellm/issues/46095) |
| 🟡 Medium | **Bedrock Mantle cross-region profile returns empty `output`** | Open | [Issue #46247](https://github.com/BerriAI/litellm/issues/46247) |
| 🟡 Medium | **Dashboard floods logs with ERROR stacktraces for non-admin users calling license endpoint** | Open | [Issue #46198](https://github.com/BerriAI/litellm/issues/46198) |
| 🟢 Low | **Flaky test: `test_cold_concurrent_schema_validation_accepts_valid_arguments`** | Open | [Issue #46212](https://github.com/BerriAI/litellm/issues/46212) |

> ✅ **Fixes merged today**:  
> - Hidden database errors during project creation ([PR #46330](https://github.com/BerriAI/litellm/pull/46330))  
> - Fixed `ModuleNotFoundError: No module named 'mcp'` when tools are enabled ([PR #46045](https://github.com/BerriAI/litellm/issues/46045))

---

### **6. What This Means for Application Developers**  
- **Telemetry is now actionable**: Use the new `/ui/telemetry` settings page to control what data is collected and exported — ideal for compliance and debugging in regulated environments ([PR #45494](https://github.com/BerriAI/litellm/pull/45494)).
- **Avoid silent cost mispricing**: If you use AWS Bedrock cross-region inference profiles (e.g., `us.openai.gpt-6.1-sol`), ensure your proxy is updated to v1.106.0-rc.2 or later to prevent underbilling ([PR #46288](https://github.com/BerriAI/litellm/pull/46288)).
- **MCP tool safety**: Be cautious with pinned tools — current implementation does not validate `outputSchema` or `readOnlyHint`. Monitor upstream drift alerts carefully.
- **Streaming reliability**: Avoid `count_tokens` requests with incomplete JSON Schema (`array` without `items`). Consider pre-validating schemas in your client code until [PR #46052](https://github.com/BerriAI/litellm/issues/46052) lands.

> 👉 *Recommendation*: Upgrade to `v1.106.0-rc.2` immediately if using multiple providers, MCP tooling, or complex routing strategies. Verify image signatures using cosign for supply chain integrity.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

---

### **Unsloth Digest — 2026-10-14**

#### **1. Today's Highlights**  
The latest `v0.1.907-beta` release delivers major performance improvements across the board, with up to **10x faster UI/UX interactions** and **up to 5x faster inference** due to enhanced caching (95% cache hit rate), MoE Strata-style optimizations, and critical slowdown fixes. These gains are now reflected in both the desktop app and web UI, significantly improving real-time chat responsiveness and model serving efficiency.

#### **2. Releases & Breaking Changes**  
- **v0.1.907-beta** (GitHub: [Release](https://github.com/unslothai/unsloth/releases/tag/v0.1.907-beta))  
  - Major performance uplifts in UI/UX and inference speed.  
  - No breaking API changes reported; backward compatibility preserved.  
  - Beta status indicates ongoing optimization—users should test in staging environments before production use.

#### **3. New Model & Hardware Support**  
- **No new model architectures added** in this release.  
- **AMD GPU support remains limited**: RX 5700XT still not recognized in Unsloth Desktop ([Issue #8529](https://github.com/unslothai/unsloth/issues/8529)), indicating ongoing ROCm/LLM runtime compatibility challenges.  
- **Windows GPU support improved**: PR #13671 adds automatic fallback to Vulkan or CPU-based `llama.cpp` bundles when CUDA 12+ drivers are unavailable on older NVIDIA cards ([PR #13671](https://github.com/unslothai/unsloth/pull/13671)).  
- **Apple Silicon (macOS)**: PR #13349 ensures `sd.cpp` runs on performance cores by default, avoiding underutilization on Apple Silicon Macs ([PR #13349](https://github.com/unslothai/unsloth/pull/13349)).

#### **4. Performance & Optimization**  
- **Up to 10x faster UI/UX** for multi-chat workflows due to optimized state management and reduced re-renders.  
- **Inference speedup: up to 5x** via:  
  - **95% cache hit rate** in key-value memory management (MoE Strata-inspired).  
  - Fixes to micro-batch spill logic and kernel dispatch bottlenecks.  
  - PR #13674 introduces final MoE cache placement guards and restores spill micro-batch checks ([PR #13674](https://github.com/unslothai/unsloth/pull/13674)).  
- **H100-specific optimization**: PR #13619 skips xformers FA3 on H100 if no `sm_90a` kernels are available, preventing crashes during training ([PR #13619](https://github.com/unslothai/unsloth/pull/13619)).

#### **5. Stability & Regressions**  
- **High severity**:  
  - **Long-context chat lag** reported on Windows 10 (Issue #12552) – user-facing degradation in response time during extended conversations.  
  - **Gemma 4e2b not runnable on Windows** (Issue #13388) – blocking deployment in cross-platform setups.  
- **Moderate severity**:  
  - **Image-only GGUF models fail silently** when sending images to Claude CLI (Issue #13652) – session state corrupted after rejected vision input.  
  - **Duplicate LAN/Remote access settings** in API panel (Issue #9519) – UX bloat causing confusion.  
- **Fixes in progress**:  
  - PR #13652 addresses image session persistence bug.  
  - PR #13671 resolves CUDA driver fallback issue on legacy GPUs.

#### **6. What This Means for Application Developers**  
- **Build faster, more responsive agent UIs**: Leverage the 10x UI speedups in unsloth studio for real-time agent interaction flows.  
- **Optimize inference cost**: The 5x inference gain enables higher concurrency on existing hardware—ideal for deploying low-latency agents at scale.  
- **Plan around platform constraints**: Avoid AMD RX 5700XT and Windows Gemma 4e2b deployments until upstream fixes land. Use `llama.cpp` fallback via Vulkan where needed.  
- **Future-proof training pipelines**: With MoE cache stability now hardened (PR #13674), train large sparse models with confidence. Monitor PRs like #13539 (scheduled workflows) for automated agent orchestration.  

> 🔗 *For developers: Review [PR #13674](https://github.com/unslothai/unsloth/pull/13674) and [PR #13619](https://github.com/unslothai/unsloth/pull/13619) for critical runtime fixes affecting scalability and stability.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*