# AI Infrastructure Digest 2026-09-03

> Generated: 2026-09-03 01:56 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-09-03**

---

### **1. Ecosystem Overview**

The AI inference infrastructure landscape in September 2026 is defined by rapid convergence between high-performance serving engines, lightweight local runtimes, and intelligent gateways—each targeting distinct deployment tiers while increasingly overlapping in capabilities. A clear bifurcation is emerging: **vLLM** and **SGLang** are pushing the envelope in distributed, high-throughput inference with deep kernel-level optimizations; **llama.cpp** and **Unsloth** dominate edge and local inference with strong hardware-specific tuning and memory efficiency; **Ollama** consolidates usability and developer experience for agent workflows; and **LiteLLM** acts as a unifying proxy layer, now aggressively migrating to Rust for sub-millisecond latency. The race is no longer just about speed—it's about *resilience*, *multi-modality*, and *cross-platform stability*.

---

### **2. Activity Comparison**

| Project       | Open Issues (High+ Severity) | PRs Merged (Last 7 Days) | Releases (Last 24h) | Release Strategy |
|---------------|-------------------------------|-----------------------------|----------------------|------------------|
| vLLM          | 12                            | 8                           | None                 | Beta/stability focus (v0.28.0 issues) |
| SGLang        | 10                            | 7                           | None                 | Stable (`v0.5.18`) |
| llama.cpp     | 10                            | 6                           | b10774               | Patch releases (bug fixes) |
| Ollama        | 8                             | 5                           | None                 | Feature-focused updates |
| LiteLLM       | 5                             | 6                           | v1.99.1 / v1.97.1    | Docker-only (no PyPI) |
| Unsloth       | 7                             | 6                           | v0.1.806-beta        | Beta release (performance boost) |

> 🔍 **Insight**: Despite lower issue counts, **LiteLLM** and **Unsloth** show highest momentum in active development—with LiteLLM’s Docker-only strategy signaling strict CI/CD control, and Unsloth’s beta release highlighting aggressive performance gains.

---

### **3. Model Support Race**

| New Model / Architecture      | vLLM         | SGLang       | llama.cpp     | Ollama         | LiteLLM        | Unsloth       |
|-------------------------------|--------------|--------------|---------------|----------------|----------------|---------------|
| Qwen3.8-Flash-Next            | ✅ (PR #28243)| ⚠️ (Crash #37633) | ✅ (b10774)   | ✅ (MLX)        | —              | ✅ (MTP default) |
| GLM-5.3-Flash                 | ✅ (SM8x/Ada) | ⚠️ (Crash #37559) | ⚠️ (FP8 crash) | ✅ (MLX)        | —              | ✅ (MTP default) |
| DeepSeek-V4-Flash             | ✅ (Blocked)  | —            | —             | —              | —              | —             |
| K2-Horizon                    | ✅ (#53806)   | —            | —             | —              | —              | —             |
| Gemma4 Vision & Audio (MLX)   | —            | —            | —             | ✅ (PR #17650)  | —              | —             |
| Zamba2-2.7B (SSM/Transformer) | —            | —            | ✅ (Feature req #8795) | —              | —              | —             |
| Spark-X2.5 (4B/1.7B)          | —            | —            | —             | 🆕 (Request #18195) | —              | —             |

> 🏁 **Leaderboard**:  
> - **Unsloth** leads in *speed-to-market* for new Flash models (Qwen/GLM), enabling MTP by default.  
> - **Ollama** wins in *multi-modal accessibility* (Gemma4 vision/audio on MLX).  
> - **vLLM** leads in *hardware diversity* (ROCm, Intel XPU, ARM64), though some support is blocked.

---

### **4. Performance Frontier**

| Optimization Focus         | vLLM                     | SGLang                   | llama.cpp                | Ollama                  | LiteLLM                  | Unsloth               |
|-----------------------------|--------------------------|--------------------------|--------------------------|-------------------------|--------------------------|------------------------|
| KV Cache Management         | ✅ Prefix caching, dtype handling, SHMConnector | ✅ HiCache IPC, chunked KV | ✅ `--cache-disk` (persistent) | ✅ Prompt cache stats | ✅ Cache read sync (Redis) | ✅ VRAM reporting fix |
| Batching & Pipeline         | ✅ V1 BF16 streaming, PLE metadata | ✅ Dynamic chunking, DSA fusion | ✅ Direct PLE table reads | —                       | ✅ Auto-router reasoning | ✅ MTP (default) |
| Quantization & Kernel Fusion| ✅ MXFP4 FP8 MoE, NVFP4 GEMM | ✅ Fused DSA metadata | ✅ SYCL L2_NORM, CUDA MMVQ crossover | ✅ MXFP8 + BF16 retention | ✅ Cortex Claude normalization | ✅ MXFP8 + BF16 retention |
| Distributed Serving         | ✅ Multi-node, TP=4, hangs fixed | ✅ HiCache data plane RFC | —                        | —                       | ✅ Session-aware routing | —                      |
| Low-Latency Engine          | —                        | —                        | —                        | —                       | ✅ Rust migration (sub-1ms) | —                      |

> 🚀 **Trend**: **Kernel-level fusion** (MoE, attention, quantized GEMMs) dominates vLLM and Unsloth. **Persistent state management** (disk-backed caches, session tracking) is key across llama.cpp, LiteLLM, and Ollama. **Rust migration** in LiteLLM signals a shift toward ultra-low-latency gateway infrastructure.

---

### **5. Layer Positioning**

| Project       | Primary Layer                          | Secondary Role                                | Key Differentiator |
|---------------|------------------------------------------|------------------------------------------------|--------------------|
| **vLLM**      | High-performance inference engine        | Distributed serving, model serving           | Kernel-level optimization (FlashInfer, Triton) |
| **SGLang**    | Inference engine + gateway (HiCache)     | Multi-GPU coordination, spec decoding         | Device-memory IPC (HiCache), ROCm maturity |
| **llama.cpp** | Local runtime / edge inference           | Cross-platform portability, CPU/Metal/Vulkan  | Native backends, persistent disk cache |
| **Ollama**    | Developer-friendly gateway + CLI         | Agent workflow orchestration, multi-modal UI  | MLX integration, shell tab completion |
| **LiteLLM**   | Unified inference gateway (proxy)        | Routing, cost tracking, API abstraction      | Rust migration, OpenAPI/YAML tooling |
| **Unsloth**   | High-speed inference runtime (local)     | Training/fine-tuning acceleration             | Default MTP, audio model auto-load |

> 💡 **Positioning Summary**:  
> - **vLLM/SGLang**: For large-scale, cluster-based inference.  
> - **llama.cpp/Unsloth**: For efficient local or edge deployment.  
> - **Ollama**: For rapid prototyping and agent development.  
> - **LiteLLM**: For production-grade routing and telemetry at scale.

---

### **6. Trend Signals**

#### 🔮 **Key Industry Trends Extracted from Today’s Activity**:
1. **Stability > Speed**: High-severity crashes in vLLM (hangs), SGLang (hard crashes), and Ollama (infinite loops) indicate that **production readiness is now a top-tier requirement**, not an afterthought.
2. **Multi-Modal Expansion Accelerating**: Ollama and Unsloth are leading in **vision/audio support via MLX**, while vLLM and SGLang are catching up with LoRA and encoder caching work.
3. **Hardware Diversification**: ROCm/AMD GPU support is maturing rapidly (vLLM nightly images, SGLang HiCache on ROCm), but still fragile. Intel XPU and ARM64 remain niche but actively developed.
4. **Persistent State is Non-Negotiable**: `--cache-disk` (llama.cpp), prompt caching (Ollama), and Redis blocking reads (LiteLLM) all point to demand for **crash-resilient context persistence**.
5. **Rust Migration = Next-Gen Proxy Layer**: LiteLLM’s full-scale Rust push signals a move toward **sub-millisecond inference gateways**, critical for real-time agents.

#### 📌 **Actionable Guidance for Application Developers**:
- **Avoid v0.28.0 (vLLM)** and **Qwen3.8-Flash-Next on H20 (SGLang)** until regressions are patched.
- **Use `--cache-disk` in llama.cpp** for long-running agents requiring recovery resilience.
- **Leverage MTP in Unsloth** for 2x speedup on Qwen/GLM Flash models—no config needed.
- **Monitor LiteLLM’s Rust beta** if you need <1ms gateway latency.
- **Prefer Ollama for agent workflows** with vision/audio needs, especially on Apple Silicon.
- **Enable `num_ctx` explicitly in Ollama** and use `cmd/model diff` for audit-ready deployments.

---

> ✅ **Final Takeaway**: The AI inference stack is evolving from "fast" to "reliable, resilient, and adaptive." Choose your stack based on **deployment tier** (edge vs. cloud), **modality needs**, and **latency requirements**—but always prioritize **stability over novelty** in production.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

---

### **vLLM Digest — 2026-09-03**

---

#### **1. Today's Highlights**  
The vLLM project continues to accelerate support for next-generation models and hardware, with critical work on **DeepSeek-V4-Flash** and **GLM-5.3-Flash** across SM8x (Ampere) and Ada (RTX 4090) platforms. A major focus is on **multi-modality**, **speculative decoding optimizations**, and **ROCm/AMD GPU integration**, including new pipeline transports and NIXL EP kernel integration. Notably, several high-priority stability issues—especially around **prefix caching corruption**, **KV cache dtype handling**, and **distributed inference hangs**—have surfaced in v0.28.0.

---

#### **2. Releases & Breaking Changes**  
None. No new releases were published in the past 24 hours. However, ongoing changes to `--kv-cache-dtype` resolution and `torch.compile` config hashing suggest potential breaking behavior in future versions, particularly when using `auto` or custom quantization schemes.

---

#### **3. New Model & Hardware Support**  
- **K2-Horizon model** added via PR #53806 — supports a new LLM architecture from K2 AI.
- **SM8x (Ampere: A100/A800/RTX 30xx)**: Active development for DeepSeek-V4-Flash-0731 (#50576), currently blocked due to lack of kernel support.
- **ROCm / AMD**:  
  - New V1 BF16 pipeline transport for ROCm (#55032) improves streaming efficiency.  
  - Nightly ROCm Docker images now built and published (#55014).  
  - Support for **MI325X / gfx942** and **Kimi-K3** roadmap tracking ongoing (#52803).
- **Intel GPU (XPU)**: Custom all-reduce implementation under RFC (#54766); speculative decoding offloading bug reported (#52735).
- **ARM64 / aarch64**: Distributed inference stalls observed on GB10/sm_121 systems (#51921).

---

#### **4. Performance & Optimization**  
- **Speculative Decoding**: Optimized PLE metadata transfers reduce stream sync overhead (#55054), improving decode throughput on Qwen4Exp.
- **Kernel-Level**:  
  - Added FlashInfer-backed MXFP4 FP8 fused MoE kernel for SM90 (#54032), enabling higher-throughput expert routing.  
  - Triton-based NVFP4 GEMM reference kernel proposed for SM120 (#21014).  
  - ROCm RMSNorm+Quant fusion patterns improved performance by ~4–5% on MI325 (#32419).
- **Memory & Pipeline**:  
  - V1 BF16 streaming pipeline reduces per-step metadata overhead on ROCm (#55032).  
  - SHMConnector introduced for low-latency encoder cache transfer between nodes (#33714).

---

#### **5. Stability & Regressions**  
High-severity regressions reported in v0.28.0 and latest nightly:
- **#53894**: v0.28.0 **hangs indefinitely** during distributed inference with DeepSeek-V4-Pro on 2×8 H100 nodes — works in v0.25.0.  
- **#51921**: Engine **permanently stalls after 1 min idle** on 4-node TP=4 (GB10/aarch64), caused by `shm_broadcast` writer starvation.  
- **#54317**: Recurring **CUDA illegal memory access** on GLM-5.3-Flash (4xB200) across unrelated kernels (KDA linear-attention, MHC TileLang, TRT-LLM MoE).  
- **#53912**: Prefix caching + MTP corrupts output on hybrid Mamba/GDN models — unresolved despite closed issue #43559.  
- **#54059**: No sparse-MLA attention path available on Ada (sm_89, RTX 4090) for GLM-5.3-Flash.  
- **#50576**: DeepSeek-V4-Flash fails on SM8x due to missing backend support.

> ✅ *Fix PRs not yet merged; developers should avoid v0.28.0 in production until resolved.*

---

#### **6. What This Means for Application Developers**  
- **Avoid v0.28.0** for production deployments involving multi-node inference, DeepSeek-V4-Pro, or GLM-5.3-Flash — known hangs and crashes are unresolved.
- **Enable explicit `--kv-cache-dtype`** (e.g., `fp8_e5m2`) instead of `auto` when using Qwen-VL or similar models to prevent silent output corruption (#41343).
- **For multi-modal apps**: Monitor progress on RFC #4194 and PR #31479 — LoRA support for tower/connector in MM models is limited to a few architectures.
- **Use SHMConnector** (#33714) for low-latency encoder cache sharing in distributed agents.
- **Track ROCm support closely** — new nightly builds and pipeline improvements enable better AMD GPU utilization, but stability remains fragile.
- **Prefer v0.27.1 or earlier** if running hybrid Mamba/GDN models with prefix caching and explicit block sizes — known corruption exists (#53142).

👉 [GitHub Issues](https://github.com/vllm-project/vllm/issues) | [PRs](https://github.com/vllm-project/vllm/pulls)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-09-03**

---

### **1. Today's Highlights**  
The SGLang ecosystem continues to strengthen its foundation for large-scale, high-throughput LLM serving with critical stability improvements across CUDA and ROCm backends. Major focus areas include resolving persistent crashes in Qwen3.8-Flash-Next under concurrency (Issue #37633), advancing HiCache’s device-memory IPC design (RFC #37372), and accelerating CI reliability via PRs that fix dynamic chunking logic and apt package handling (PRs #37675, #37689). These efforts reflect ongoing momentum toward production-grade inference stability.

---

### **2. Releases & Breaking Changes**  
*None*  
No new releases were published in the last 24 hours. The latest stable version remains `v0.5.18`, with no breaking changes reported.

---

### **3. New Model & Hardware Support**  
- ✅ **T-Head PPU Support (Roadmap)**: A new feature request (#37519) initiates upstreaming first-class support for T-Head ZW810/ZW810E/ZW-M890P PPUs, signaling expansion beyond NVIDIA/AMD hardware.  
- ✅ **NemotronH_Omni_Reasoning_V3**: Added model support via PR #35599, enabling correct loading of MTP and quantized vision weights.  
- ✅ **ROCm + AMD GPU Enhancements**: Multiple PRs land key fixes for ROCm compatibility:  
  - HiCache IO backend now works on ROCm (PR #37152)  
  - Fused DSA metadata kernels reduce redundant work (PR #37124)  
  - Chunked KV support added for ROCm FA MHA (PR #37691)  

> 🔗 [Issue #37519](https://github.com/sgl-project/sglang/issues/37519) | [PR #35599](https://github.com/sgl-project/sglang/pull/35599) | [PR #37152](https://github.com/sgl-project/sglang/pull/37152)

---

### **4. Performance & Optimization**  
- ⚙️ **Dynamic Chunking Improvements**: PR #37675 ensures all ranks disable dynamic chunking together after a failure, preventing silent performance degradation due to misaligned chunk sizing.  
- 📈 **CUDA Graph Optimization**: PR #37124 reduces overhead in DSA decode path by fusing metadata kernels — benchmarked on GLM-5.2-MXFP4 / MI355X at concurrency 4 (no numbers provided, but labeled as "improvement").  
- 💡 **CPU Kernel Addition**: PR #35604 introduces native CPU MurmurHash32 kernel, improving hashing performance on Intel Xeon CPUs without relying on external libraries.  
- 🔁 **HiCache Data Plane RFC**: PR #37372 proposes out-of-process HiCache data plane using device-memory IPC, aiming to decouple storage from compute and improve scalability.

> 🔗 [PR #37675](https://github.com/sgl-project/sglang/pull/37675) | [PR #37124](https://github.com/sgl-project/sglang/pull/37124) | [PR #35604](https://github.com/sgl-project/sglang/pull/35604)

---

### **5. Stability & Regressions**  
High-severity issues dominating today’s activity:

| Issue | Severity | Summary | Fix Status |
|------|----------|--------|------------|
| [#37633](https://github.com/sgl-project/sglang/issues/37633) | Critical | Hard crash in QSA prefill kernel at ~22 concurrent requests on H20 TP8 (Qwen3.8-Flash-Next-FP8) | ❌ No fix yet |
| [#37559](https://github.com/sgl-project/sglang/issues/37559) | Critical | CUDA_ERROR_ILLEGAL_ADDRESS on B300 (SM100) after `sgl-deep-gemm` bump | ❌ No fix yet |
| [#36537](https://github.com/sgl-project/sglang/issues/36537) | High | Infinite token loop (ID 0) in Qwen3.8-Flash-Next tool parser | ❌ No fix yet |
| [#37379](https://github.com/sgl-project/sglang/issues/37379) | High | FP8 KV cache + `--quantization-param-path` causes RuntimeError on Qwen3.5-MoE | ❌ No fix yet |
| [#37554](https://github.com/sgl-project/sglang/issues/37554) | Medium | Gateway registers failed workers as `model_id: "unknown"` — traffic loss | ❌ No fix yet |

> ⚠️ **Note**: The top 3 issues are **not resolved**, with several affecting production-grade deployments (e.g., Qwen3.8-Flash-Next, DeepSeek-V4, HiCache).

---

### **6. What This Means for Application Developers**  
- **Avoid Qwen3.8-Flash-Next on H20 TP8 until #37633 is fixed** — expect hard crashes under moderate concurrency. Use lower TP or disable speculative decoding temporarily.
- **Do not enable `--kv-cache-dtype fp8_e4m3` with `--quantization-param-path` on Qwen3.5-MoE** — this triggers a runtime error (see #37379).
- **Monitor worker registration in IGW**: A failed metadata discovery leads to permanent `model_id: unknown`, silently reducing effective fleet size (issue #37554).
- **Expect improved stability on ROCm** with recent PRs, especially for HiCache and DSA paths — ideal for users targeting AMD GPUs.
- **Leverage new test automation**: Use `/rerun-test --changed` (PR #37618) to auto-trigger tests for modified files, speeding up CI feedback.

> 🔗 [Developer Guidance](https://github.com/sgl-project/sglang/discussions) | [Slack Community](https://slack.sglang.ai)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# **llama.cpp Digest – 2026-09-03**

---

### **1. Today's Highlights**  
The latest updates focus on critical stability fixes for Metal and Vulkan backends, including memory query robustness on Apple Silicon (M3/M4) and low-memory conditions. Key performance improvements emerge in Flash Attention support for Qwen3.8-Flash-Next via direct PLE table reads, delivering >2x prefill speedups on GB10 GPUs. A major new feature—persistent disk-backed prompt cache—is now available via `--cache-disk`, enabling resilient context checkpointing across restarts.

---

### **2. Releases & Breaking Changes**  
- **b10774**: Fixed missing KV cache during fine-tuning (`#27199`) — critical for training stability.  
- **b10773**: Added `data:` URL support for `input_video` and `input_audio` in server mode (`#27735`).  
- **b10769**: Patched Metal memory query under low-memory scenarios (`#27701`) — prevents crashes on M3/M4 devices with constrained VRAM.  
- **b10763**: Enabled `preserve_reasoning` by default in chat templates (`#28174`) — improves consistency in reasoning workflows; log output now reflects effective state.

> 🔗 [GitHub Release b10774](https://github.com/ggml-org/llama.cpp/releases/tag/b10774) | [PR #27199](https://github.com/ggml-org/llama.cpp/pull/27199)

---

### **3. New Model & Hardware Support**  
- ✅ **Qwen3.8-Flash-Next**: Full model support added via `#28243` (MTP shared modules), enabling up to 2x faster inference through optimized tensor reuse.  
- ✅ **DeepSeek-V4 Vision**: Correctly handles input vision in `deepseek4` model (`#28154`).  
- ✅ **Zyphra/Zamba2-2.7B**: Feature request opened for hybrid SSM/Transformer support (`#8795`) — pending implementation.  
- ✅ **Hexagon HTP Backend**: F16 unary ops extended with `ABS` support (`#28228`) — enables richer computation on Qualcomm AI chips.  
- ✅ **WebGPU**: Experimental backward kernels added (`#28269`) — opens path for browser-based fine-tuning via WebAssembly.

> 🔗 [PR #28243](https://github.com/ggml-org/llama.cpp/pull/28243) | [PR #28228](https://github.com/ggml-org/llama.cpp/pull/28228) | [PR #28269](https://github.com/ggml-org/llama.cpp/pull/28269)

---

### **4. Performance & Optimization**  
- 🚀 **Qwen3.8-Flash-Next Prefill Speedup**: Direct PLE table reads reduce overhead in `qwen4exp` PR (`#28136`) — benchmarks show **>2x improvement** on GB10 (sm_121).  
- ⚡ **SYCL L2_NORM Batched Kernel**: Reduces dispatches from 12,480 → 6,240 on Arc B70 (`#28222`) — cuts kernel launch cost significantly.  
- 🔧 **CUDA MMVQ/MMQ Crossover Tuning**: SM87-specific threshold added (`#28285`) — optimizes Jetson Orin quantized inference efficiency.  
- 💾 **Persistent Disk Cache**: `--cache-disk` (`#28092`) enables mmap-backed KV state storage, reducing heap pressure and enabling crash-resilient context checkpoints.  

> 🔗 [PR #28136](https://github.com/ggml-org/llama.cpp/pull/28136) | [PR #28222](https://github.com/ggml-org/llama.cpp/pull/28222) | [PR #28092](https://github.com/ggml-org/llama.cpp/pull/28092)

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Impact | Fix / PR |
|--------|------|--------|--------|---------|
| ⚠️ High | **AMD Strix Halo + Vulkan**: Instant segfault on model load (`#27189`) | Open | System crash | No fix yet |
| ⚠️ High | **ROCm gfx1151**: Inefficient defaults cause massive prefill slowdown (`#21284`) | Open | ~30–50% latency loss | PRs under review |
| ⚠️ High | **Vulkan Flash Attention**: Unexpected performance drop (`#25207`) | Open | Degraded throughput | Investigation ongoing |
| ⚠️ High | **SYCL on Lunar Lake iGPU**: Device memory query fails (`#28134`) | Open | Early failure at startup | No fix |
| ⚠️ Medium | **ROCm TOP_K Crash**: Block-size overflow with ctx > 128K (`#27021`) | Closed | Context limit breakage | Patch merged |
| ⚠️ Medium | **CUDA: Qwen3.8-27B Q6_K**: RTX 5090 display loss + GSP reset (`#27910`) | Open | Hardware-level instability | Reproducible, under investigation |

> 🔗 [Issue #27189](https://github.com/ggml-org/llama.cpp/issues/27189) | [Issue #21284](https://github.com/ggml-org/llama.cpp/issues/21284) | [Issue #25207](https://github.com/ggml-org/llama.cpp/issues/25207) | [Issue #28134](https://github.com/ggml-org/llama.cpp/issues/28134)

---

### **6. What This Means for Application Developers**  
- **Prioritize `--cache-disk`** for long-running agents or multi-session services — it enables durable context persistence without relying on RAM.
- **Avoid `data:` URLs** in video/audio inputs unless you’re on `b10773+` — earlier versions treat them as raw base64, leading to parsing errors.
- **Monitor AMD/Vulkan users**: If running on Strix Halo (gfx1151), expect degraded performance due to inefficient ROCm defaults — consider patching `#21284` or downgrading to stable release until resolved.
- **Leverage `preserve_reasoning` by default** — no need to explicitly set it; logs now confirm its active state.
- **For edge deployment on ARM**: The Pi 5’s decode bandwidth plateau (~10 GB/s) suggests memory wall behavior — optimize quantization and use lower-precision models (e.g., Q4_K_M) for better throughput.

> 📌 **Pro Tip**: Use `--reasoning-preserve` and `--cache-disk` together for agent pipelines requiring both consistent reasoning and recovery resilience.

---  
*Data sourced from [ggml-org/llama.cpp GitHub](https://github.com/ggml-org/llama.cpp) — updated 2026-09-03.*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-09-03**

---

### **1. Today's Highlights**  
The Ollama ecosystem continues to strengthen vision and audio support on MLX, with recent PRs enabling full image and audio input for Gemma4 and Qwen3.5 models via the MLX engine. Critical stability fixes are underway for `glm-5.3:cloud` and `deepseek-v4-flash`, which were observed entering infinite reasoning loops during agent workflows—issues now under active investigation. Additionally, new developer-facing tools like shell tab completion and model diff utilities are being introduced to improve usability.

---

### **2. Releases & Breaking Changes**  
*No new releases in the past 24 hours.*  
However, ongoing changes include:
- **PR #18205**: Added shell tab completion for `ollama run <model>` (now supports autocomplete).
- **PR #18202**: Introduced a new `cmd/model` tool for offline comparison of Ollama models, GGUF, and safetensors files.
- **PR #18196**: Enforces configured `num_ctx` instead of defaulting to max architecture context length — critical for memory-constrained deployments.

> 🔗 [PR #18205](https://github.com/ollama/ollama/pull/18205) | [PR #18202](https://github.com/ollama/ollama/pull/18202) | [PR #18196](https://github.com/ollama/ollama/pull/18196)

---

### **3. New Model & Hardware Support**  
- ✅ **Gemma4 Vision & Audio (MLX)**: Full image and audio input now supported via `gemma4:12b-mlx` thanks to PRs [#17650](https://github.com/ollama/ollama/pull/17650), [#18079](https://github.com/ollama/ollama/pull/18079). Supports both transformer tower and encoder-free embedder variants.
- ✅ **Qwen3.5 Flash Next (MLX)**: Optimized memory usage via MXFP8 quantization for non-critical weights; BF16 retained for expert paths (`qwen3.8-flash-next:125b-a6b-nvfp4`, `qwen3.8-flash-next:125b-mlx`).
- 🆕 **spark2_5 Architecture**: Requested support for Spark-X2.5 series (4B/1.7B) via Issue #18195 — currently blocked by missing runtime recognition.
- 🖥️ **AMD iGPU Radeon 680M**: Still not reliably detected; issue #9184 remains open despite HSA parameter adjustments.

> 🔗 [PR #17650](https://github.com/ollama/ollama/pull/17650) | [PR #18079](https://github.com/ollama/ollama/pull/18079) | [Issue #18195](https://github.com/ollama/ollama/issues/18195)

---

### **4. Performance & Optimization**  
- **VRAM Reporting & Allocation**: PRs [#18197](https://github.com/ollama/ollama/pull/18197), [#18201](https://github.com/ollama/ollama/pull/18201) enhance `/api/ps` and `/api/info` endpoints to report per-device VRAM usage and available memory, improving visibility in multi-GPU setups.
- **Memory-Efficient Inference**: PR #18078 implements targeted BF16 retention and MXFP8 quantization for Qwen3.8 Flash Next, reducing GPU memory pressure without sacrificing long-generation fidelity.
- **Prompt Caching Feedback**: PR #17943 adds `prompt_eval_cached_count` to native responses and exposes cached token stats through OpenAI/Anthropic-compatible APIs — aligning with OpenAI’s prompt caching spec.

> 🔗 [PR #18197](https://github.com/ollama/ollama/pull/18197) | [PR #17943](https://github.com/ollama/ollama/pull/17943)

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Impact |
|--------|------|--------|--------|
| ⚠️ High | `glm-5.3:cloud` enters endless reasoning loop, aborting tasks (ZCode/OpenCode) | Open (#18193) | Breaks agent workflows; no workaround yet |
| ⚠️ High | `deepseek-v4-flash:0731` repeats same thinking block indefinitely (~221 times in ~1m45s) | Open (#17892) | Renders complex agent tasks unusable |
| ⚠️ Medium | `gemma3:12b` truncates structured output when double-quoted terms appear in input | Open (#18094) | Invalid JSON output in schema-based flows |
| ⚠️ Medium | `gemma4:12b-mlx` reports only `completion` capability despite having `vision`, `audio`, etc. | Closed (#16700) | UI inconsistency; fix merged but may require client refresh |
| ⚠️ Low | Control characters flood `ollama run` output (no escape option) | Open (#14571) | Affects scripting and automation |

> 🔗 [Issue #18193](https://github.com/ollama/ollama/issues/18193) | [Issue #17892](https://github.com/ollama/ollama/issues/17892) | [Issue #18094](https://github.com/ollama/ollama/issues/18094)

---

### **6. What This Means for Application Developers**  
- **Agent Builders**: Avoid `glm-5.3:cloud` and `deepseek-v4-flash` for long-running or tool-heavy agents until regressions are resolved. Consider local inference with `gemma4:12b-mlx` for vision/audio use cases.
- **CLI Tooling**: Use `ollama run <model><tab>` with shell completion enabled (via PR #18205) for faster interaction and reduced typos.
- **Memory Management**: Leverage improved VRAM reporting (`/api/ps`) to monitor GPU utilization across devices and tune `num_ctx` explicitly via config (PR #18196).
- **Prompt Efficiency**: Monitor `cached_tokens` in API responses (PR #17943) to optimize cost and latency in high-throughput applications.
- **Model Comparison**: Use the new `cmd/model diff` tool (PR #18202) to audit model differences before deployment.

> 🔗 [PR #18205](https://github.com/ollama/ollama/pull/18205) | [PR #18202](https://github.com/ollama/ollama/pull/18202) | [PR #18196](https://github.com/ollama/ollama/pull/18196)

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

---

### **LiteLLM Digest — 2026-09-03**

---

#### **1. Today's Highlights**  
LiteLLM continues its strategic shift toward high-performance infrastructure with the ongoing Rust migration initiative, now gaining momentum via a dedicated parent issue (#31263) and early beta sign-ups. Critical stability fixes have been merged to address Python 3.10+ compatibility (PR #39399), streaming timeouts misreported as successes (PR #39464), and session ID inconsistency in spend logging (PR #39458). These updates ensure greater reliability for production proxy deployments.

---

#### **2. Releases & Breaking Changes**  
- **v1.99.1 & v1.97.1**: Both released as **Docker-only**, with no PyPI packages available.  
  - `pip install litellm==1.99.1` or `1.97.1` will fail. Users must use container images only.  
  - Purpose: Ensures image traceability to exact Git commits; avoid version mismatches in CI/CD.  
  - 🔗 [Release v1.99.1](https://github.com/BerriAI/litellm/releases/tag/v1.99.1) | [Release v1.97.1](https://github.com/BerriAI/litellm/releases/tag/v1.97.1)

---

#### **3. New Model & Hardware Support**  
No new models or hardware backends announced today. However, ongoing work includes:  
- **Cortex Claude request normalization** (PR #39453): Fixes shape inconsistencies when bridging Anthropic requests through Cortex.  
- **OpenAPI YAML spec support** (Issue #38951): Now under active development to allow OpenAPI specs in `.yaml` format for MCP tool registration.  
- **Azure Storage credential chain support** (PR #39229): Enables Workload Identity Federation and keyless authentication in Azure deployments.

---

#### **4. Performance & Optimization**  
- **Rust Migration Progress** (Issue #31263):  
  - Goal: Achieve sub-1ms overheads in LiteLLM Gateway.  
  - Early beta testing underway; full performance benchmarks expected Q4 2026.  
  - 🔗 [Blog Post: Rust Launch](https://docs.litellm.ai/blog/litellm-rust-launch) | [Beta Signup](https://docs.google.com/forms/d/e/1FAIpQLSecWdOjkzjEson2UiZpD...)

- **Cache Read Optimization** (PR #39358):  
  - Switches sync Redis reads to blocking client usage to prevent connection pool corruption.  
  - Maintains circuit-breaker protection during high-load scenarios.

- **Auto-Router Reasoning Effort** (PR #39459):  
  - Enables per-classifier reasoning effort configuration, improving routing precision without affecting global deployment settings.

---

#### **5. Stability & Regressions**  
| Issue | Severity | Status | Fix PR | Description |
|------|----------|--------|--------|-------------|
| [#39464](https://github.com/BerriAI/litellm/pull/39464) | High | Open | ✅ Merged | Fixed upstream error status propagation (e.g., 404/401 → 500) in container routes |
| [#39458](https://github.com/BerriAI/litellm/pull/39458) | High | Open | ✅ Merged | Prevents fabricated `session_id` in SpendLogs; aligns with Langfuse expectations |
| [#39399](https://github.com/BerriAI/litellm/pull/39399) | High | Open | ✅ Merged | Restores Python 3.10–3.14 compatibility; resolves Pydantic validation failures |
| [#39466](https://github.com/BerriAI/litellm/pull/39466) | High | Open | ✅ Merged | Kills entire Prisma process group on timeout to prevent stuck migrations |
| [#39454](https://github.com/BerriAI/litellm/pull/39454) | Medium | Open | ✅ Merged | Adds opt-in override for modality pin exemptions (fixes image turn 400s) |

> ⚠️ **Note**: Several high-severity bugs remain open but are being actively addressed in PRs with clear TLDR summaries.

---

#### **6. What This Means for Application Developers**  
- **Avoid `pip install litellm==1.99.1` or `1.97.1`** — use Docker images only. This is not a bug, but a deliberate release strategy for reproducibility.
- **Ensure Python 3.10+ compatibility** — if using older versions, upgrade or pin to `1.96.2` until full support stabilizes.
- **Monitor proxy logs closely** — recent changes improve telemetry accuracy (e.g., `session_id`, `spend_logs`) but may require schema adjustments in downstream tools like Langfuse.
- **Prepare for Rust migration** — start testing with the beta (via signup link) if you rely on low-latency inference or high-throughput routing.
- **Use `modality_pin_override`** when deploying agents that mix text and image modalities — prevents unexpected 400 errors due to pinned sessions.

👉 **Action Items**:  
- Update your CI/CD pipelines to pull from `ghcr.io/berriai/litellm` instead of PyPI for `1.99.x`.  
- Review dashboard logs for `session_id` consistency after upgrading.  
- Join the Rust beta if you need <1ms latency in inference gateways.

--- 

*Digest compiled from GitHub data — BerriAI/litellm repo, 2026-09-03.*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-09-03**

---

### **1. Today's Highlights**  
Unsloth released **v0.1.806-beta**, delivering up to **2x faster inference** for `Qwen3.8-Flash-Next` and `GLM-5.3-Flash` via default-enabled MTP (Multi-Threaded Packing). The update includes 170+ improvements across training, chat, hardware, and performance. Critical fixes address AMD GPU detection issues on Strix Halo (gfx1151) and VRAM misreporting in Studio.

---

### **2. Releases & Breaking Changes**  
- **v0.1.806-beta** ([GitHub](https://github.com/unslothai/unsloth/releases/tag/v0.1.806-beta)):  
  - MTP enabled by default for `Qwen3.8-Flash-Next` and `GLM-5.3-Flash`, boosting throughput up to 2x.  
  - Downgrade to `v0.1.805-beta` if MTP causes instability (disabled via config).  
  - Smoother model loading with reduced errors across local deployments.  

> 📌 *Migration Note:* Users relying on custom MTP settings should verify behavior post-upgrade; disable via `UNSLOTH_MTP_ENABLED=0` if needed.

---

### **3. New Model & Hardware Support**  
- **AMD Strix Halo (gfx1151)**: Partial support restored after prebuilt crashes due to bundled ROCm runtime segfaults.  
  - Fix: Use system ROCm instead of bundled `rocm-gfx1151` binaries ([#6276](https://github.com/unslothai/unsloth/issues/6276)).  
- **ROCm on Windows**: Improved compatibility with WSL2 via `HSA_ENABLE_DXG_DETECTION=1` ([#9729](https://github.com/unslothai/unsloth/issues/9729)).  
- **New Models**:  
  - `MiniMax-H3-GGUF` now supported in Studio (issue #8814).  
  - Audio models (e.g., `MiniMax-Music3`) now auto-load on request ([#10207](https://github.com/unslothai/unsloth/issues/10207), PR #10217).  

---

### **4. Performance & Optimization**  
- **2x Faster Inference**: Achieved for `Qwen3.8-Flash-Next` and `GLM-5.3-Flash` using MTP (default-enabled).  
- **Memory Efficiency**:  
  - Fixed VRAM overinflation reporting on AMD iGPUs ([#8942](https://github.com/unslothai/unsloth/issues/8942)).  
  - Mac memory reporting now reflects actual free GPU memory, not total system RAM ([#10224](https://github.com/unslothai/unsloth/pull/10224)).  
- **Latency Reduction**:  
  - Deep Research now respects the actual model context window, avoiding premature truncation ([#10220](https://github.com/unslothai/unsloth/pull/10220)).  
  - Speech model loading triggered on audio API requests ([#10217](https://github.com/unslothai/unsloth/pull/10217)).

---

### **5. Stability & Regressions**  
| Issue | Severity | Status | Notes |
|------|----------|--------|-------|
| [#3526](https://github.com/unslothai/unsloth/issues/3526) | High | Closed | ROCm `hip_global.cpp` module error; fixed in latest beta. |
| [#7449](https://github.com/unslothai/unsloth/issues/7449) | High | Open | Studio uses system RAM instead of VRAM despite GPU recognition. |
| [#6276](https://github.com/unslothai/unsloth/issues/6276) | High | Open | Segfault on Strix Halo (gfx1151) with bundled ROCm runtime. |
| [#7371](https://github.com/unslothai/unsloth/issues/7371) | Medium | Open | Performance regression on Strix Halo + ROCm after `b10079` update. |
| [#8471](https://github.com/unslothai/unsloth/issues/8471) | Medium | Closed | AppImage fails to detect RX 7600 GPU. |
| [#7485](https://github.com/unslothai/unsloth/issues/7485) | Medium | Open | Latest llama.cpp build breaks AMD GPU detection. |

> ✅ **Fixes in Progress**: PRs addressing Hangul search (#10200), audio model loading (#10217), and prompt continuation bugs (#10219) are under review.

---

### **6. What This Means for Application Developers**  
- **Leverage MTP by Default**: Expect up to 2x speedup for `Qwen3.8-Flash` and `GLM-5.3-Flash` models—no configuration needed. Monitor for edge cases in long-context scenarios.  
- **AMD GPU Workarounds Required**: For Strix Halo (gfx1151), avoid bundled ROCm; use system ROCm or wait for updated prebuilts.  
- **Audio & Multi-Modal Extensibility**: The new audio model auto-load feature enables richer agent workflows—build agents that dynamically switch between text, image, video, and audio models.  
- **Robust Local Deployment**: Address VRAM misreporting and memory overallocation issues when deploying locally. Use `UNSLOTH_STUDIO_NO_AUTH` for trusted LAN setups ([#5031](https://github.com/unslothai/unsloth/issues/5031)).  
- **API Design Tip**: Use `/v1/audio/speech` with explicit `model` field—previously ignored. Ensure your agent clients pass model names correctly.

---

*Source: [unslothai/unsloth GitHub](https://github.com/unslothai/unsloth)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*