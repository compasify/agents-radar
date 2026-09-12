# AI Infrastructure Digest 2026-09-12

> Generated: 2026-09-12 02:48 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-09-12**

---

### **1. Ecosystem Overview**  
The AI infrastructure landscape in Q3 2026 is defined by a rapid convergence of high-performance inference engines, distributed agentic workflows, and cross-platform model serving. Projects are increasingly focused on scalability across heterogeneous hardware—especially AMD ROCm (gfx950/gfx1201), Apple MLX, and NVIDIA Blackwell—while pushing the boundaries of speculative decoding, MoE offloading, and multi-modal support. A growing emphasis on stability, security, and developer observability underscores the shift from experimental deployment to production-grade AI systems.

---

### **2. Activity Comparison**

| Project       | Open Issues | Open PRs | Recent Release? | Notes |
|---------------|-------------|----------|------------------|-------|
| **vLLM**      | 87          | 42       | ❌ No            | High-severity memory leak (v0.28+) and DFlash2 regressions dominate activity |
| **SGLang**    | 76          | 38       | ❌ No            | Strong focus on distributed KV cache and Mamba state correctness |
| **llama.cpp** | 112         | 56       | ✅ Yes (`b10905`–`b10919`) | Active backend tuning; RDNA4 Flash Attention regression critical |
| **Ollama**    | 141         | 29       | ❌ No            | Stability issues with cloud models and tool calling dominate |
| **LiteLLM**   | 108         | 45       | ✅ Yes (`v1.102.0-dev.2`) | Security fixes and pricing sync drive momentum |
| **Unsloth**   | 89          | 34       | ❌ No            | Focus on agent persistence and project workspaces |

> 🔍 *Insight*: **Ollama** leads in issue volume due to widespread user-reported bugs, while **llama.cpp** shows the most active development velocity. **LiteLLM** stands out for recent secure release cadence.

---

### **3. Model Support Race**

| New Model / Architecture             | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|--------------------------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek-V4.1-Flash**              | ✅ (H20, MI355X) | ✅ (via PRs) | ✅ (RDNA4) | ⚠️ Requested | ✅ via Fireworks AI | ❌ |
| **Qwen3.8-Flash-Next (multi-modal)** | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Maple 20B-A1B (ternary MoE, TQ1_0)** | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **GLM-5.3-Flash (context parallelism)** | ⚠️ Partial (ROCm only) | ✅ (restored) | ❌ | ❌ | ❌ | ❌ |
| **SenseNova-U1/U1.5**                | ❌ | ✅ (tracking) | ❌ | ❌ | ❌ | ❌ |
| **Prism (new provider)**             | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ |

> 🏆 **Leader**: **SGLang** leads in robust model-specific fixes (e.g., GLM-5.3 context parallelism).  
> 🥈 **Runner-up**: **llama.cpp** excels in low-level architecture support (TQ1_0, RDNA4, Metal/SYCL).  
> 🥉 **Notable Gap**: **Ollama** lacks native support for advanced models like Qwen3.8-Flash-Next and DeepSeek-V4.1-Flash despite demand.

---

### **4. Performance Frontier**

| Optimization Focus               | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|------------------------------------|------|--------|-----------|--------|---------|---------|
| **KV Cache & Context Parallelism** | ✅ (MoE, DFlash2) | ✅ (PD disaggregation, HiCache) | ⚠️ (FP8 slowdown) | ❌ | ✅ (prompt cost estimation) | ❌ |
| **Batching & Throughput**          | ✅ (batch invariant) | ✅ (wider fused kernels) | ✅ (vector FA) | ⚠️ (model load regressions) | ✅ (HTTP/2 tracking) | ❌ |
| **Quantization Efficiency**        | ✅ (FP8 WO_A, MoE routing) | ⚠️ (FP8 KV cache slow) | ✅ (TQ1_0, Q4_K P6) | ❌ (IQ3_S silent fail) | ✅ (pricing-aware) | ❌ |
| **Distributed Serving**            | ⚠️ (speculative decode) | ✅ (PD disaggregation) | ❌ | ❌ | ✅ (proxy scaling) | ❌ |
| **Kernel-Level Tuning**            | ✅ (DFlash2, AWQ GEMM) | ✅ (mHC/RMSNorm fusion) | ✅ (HIP FA, Metal fusion) | ❌ | ❌ | ❌ |

> 🔥 **Frontier Leaders**:  
> - **vLLM** dominates in speculative decoding and hybrid Mamba/GDN optimization.  
> - **SGLang** leads in scalable agentic inference via PD disaggregation.  
> - **llama.cpp** leads in cross-backend kernel tuning (Metal, SYCL, HIP).

---

### **5. Layer Positioning**

| Project       | Primary Layer                     | Key Differentiator |
|---------------|-----------------------------------|--------------------|
| **vLLM**      | **Inference Engine**              | High-throughput, GPU-optimized serving; best-in-class speculative decoding |
| **SGLang**    | **High-Throughput Inference Stack** | Distributed KV cache, agentic workflow engine; ideal for long-horizon reasoning |
| **llama.cpp** | **Local Runtime & Cross-Backend** | Universal CPU/GPU/Metal/Vulkan support; minimal dependencies |
| **Ollama**    | **Model Gateway & CLI Orchestrator** | Developer-friendly local model hosting; abstraction over backend |
| **LiteLLM**   | **Universal LLM Gateway**         | Multi-provider routing, cost-aware proxying, real-time pricing sync |
| **Unsloth**   | **Agentic Workflow Platform**     | Persistent agent states, Git-backed projects, sandboxed execution |

> 💡 *Strategic Insight*:  
> - **vLLM/SGLang** are infrastructure building blocks for large-scale deployments.  
> - **llama.cpp/Ollama** target edge/local inference.  
> - **LiteLLM** acts as the “traffic cop” for multi-provider environments.  
> - **Unsloth** is uniquely positioned as an end-to-end agentic application platform.

---

### **6. Trend Signals**

#### **Emerging Industry Trends:**
1. **Hardware Diversification Accelerates**: ROCm (AMD gfx950/gfx1201), Apple MLX, and Intel XPU are no longer niche—they’re central to roadmap planning. Projects like **llama.cpp**, **Unsloth**, and **SGLang** now prioritize these platforms.
2. **Agent Persistence is Now a Feature**: Unsloth’s turn-persistence across browser reloads signals that **stateful, long-running agents** are transitioning from prototype to production.
3. **Security & Supply Chain Integrity Are Non-Negotiable**: The LiteLLM PyPI compromise and root-execution defaults highlight that **trust in open-source tools is under scrutiny**—signatures, hardening, and least-privilege execution are now baseline expectations.
4. **Speculative Decoding Stability Is Critical**: Multiple projects report crashes or deterministic failures in DFlash2 + grammar parsing—indicating that **production use of speculative decoding remains fragile**.
5. **Cost Awareness Drives Proxy Design**: LiteLLM’s new prompt cache cost estimation reflects a market shift toward **budget-aware inference orchestration**.

#### **What Developers Should Watch:**
- ✅ **Avoid `DFlash2` with structured outputs** until vLLM/SGLang resolve FSM determinism issues.
- ✅ **Stick to v0.27.1 for vLLM** if stability > performance (memory leak in v0.28+).
- ✅ **Monitor Ollama’s `cloud` models closely**—they’re unstable beyond 45 minutes.
- ✅ **Enable cosign verification** for LiteLLM images to prevent supply-chain risks.
- ✅ **Leverage project workspaces in Unsloth** for reproducible, audit-ready agent pipelines.

> 📌 **Final Takeaway**: The AI infrastructure ecosystem is maturing rapidly—developers must now choose not just *what* to run, but *how* it runs, scales, and survives failure. Prioritize **stability, security, and composability** over raw speed.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-09-12**

---

### **1. Today's Highlights**  
The vLLM project continues to accelerate support for next-generation models and hardware, with critical fixes for speculative decoding correctness on hybrid Mamba/GDN architectures and performance optimizations for DeepSeek-V4.1-Flash across NVIDIA and AMD platforms. A major focus is on ROCm stability and quantization efficiency, including FP8 kernel improvements and migration of MoE routing logic to modern backends.

---

### **2. Releases & Breaking Changes**  
*No new releases in the last 24 hours.*  
However, ongoing work indicates potential breaking changes in upcoming versions:
- **`--tool-call-parser qwen3_coder` now silently ignores `tool_choice: "required"`** (Issue #54808) — a behavioral regression requiring application-level mitigation.
- **DFlash2 spec decode + xgrammar causes deterministic FSM failure** (Issue #53777) — may require disabling DFlash2 or adjusting grammar handling until resolved.

> 🔗 [Issue #54808](https://github.com/vllm-project/vllm/issues/54808), [Issue #53777](https://github.com/vllm-project/vllm/issues/53777)

---

### **3. New Model & Hardware Support**  
- ✅ **DeepSeek-V4.1-Flash** now supported on **NVIDIA H20 (SM90)** and **AMD MI355X (gfx950)**, though high concurrency exposes illegal memory access in `dsv4_topk` kernel (Issue #56389).
- ✅ **ROCm (gfx950)** gains improved support via FP8 WO_A output projection (PR #54894) and enhanced MoE kernel migration (PR #54959).
- ✅ **Qwen3.8-Flash-Next** now supports **multi-modality** with encoder reuse avoidance (Issue #55639).
- 🛠️ **Intel XPU and CPU** progress with profiler integration (PR #56542) and ZenCPU torch pin consistency testing (PR #52244).

> 🔗 [PR #54894](https://github.com/vllm-project/vllm/pull/54894), [PR #56389](https://github.com/vllm-project/vllm/issues/56389), [PR #55639](https://github.com/vllm-project/vllm/issues/55639)

---

### **4. Performance & Optimization**  
- **DeepSeek-V4.1-Flash on 8x MI355X**: Achieves **35.89 tokens/sec (8.97 per GPU)** at concurrency 1, with TTFT p50 of **0.898s**, but shows room for improvement (Issue #56506).
- **AWQ CUDA GEMM kernel** remains **L1/memory-bound** on RTX 3070 Ti; profiling reveals optimization opportunities (Issue #55462).
- **DFlash2 + YaRN**: Zero prefix-cache reuse on identical 1.04M prompt despite target-only reusing ~1.039M tokens (Issue #54094).
- **MoE Expert Offloading**: Incremental offloading via GPU cache + LFRU eviction enables running large MoE models on smaller GPUs (RFC #38256).
- **Batch Invariant Optimization**: Ongoing effort to stabilize deterministic inference (Issue #27433).

> 🔗 [Issue #56506](https://github.com/vllm-project/vllm/issues/56506), [Issue #55462](https://github.com/vllm-project/vllm/issues/55462), [Issue #54094](https://github.com/vllm-project/vllm/issues/54094)

---

### **5. Stability & Regressions**  
| Severity | Issue | Summary | Fix Status |
|--------|------|--------|-----------|
| ⚠️ High | [#54237](https://github.com/vllm-project/vllm/issues/54237) | v0.28.0/v0.29.0 consume all host memory and freeze (OK in 0.27.1) | ❌ No fix yet |
| ⚠️ High | [#56389](https://github.com/vllm-project/vllm/issues/56389) | Illegal memory access in `dsv4_topk` under high concurrency on H20 | ✅ Mitigated by `max_num_seqs=256` |
| ⚠️ Medium | [#54928](https://github.com/vllm-project/vllm/issues/54928) | DFlash2 alters Qwen3.8 thinking output at token 30 even with `--enforce-eager` | ❌ No PR yet |
| ⚠️ Medium | [#54919](https://github.com/vllm-project/vllm/issues/54919) | Long-prefill workload starves active decode for 3–7 minutes on DGX Spark TP2 | ❌ No fix yet |
| ⚠️ Low | [#54924](https://github.com/vllm-project/vllm/issues/54924) | GLM-5.3 accuracy collapse on ROCm (GSM8K from 91.6% → 14.9%) after MRV1 force | ❌ Patch pending |

---

### **6. What This Means for Application Developers**  
- **Avoid `DFlash2` with structured outputs** (e.g., `xgrammar`) until Issue #53777 is resolved — expect deterministic failures.
- **Use `max_num_seqs=256`** when serving `DeepSeek-V4.1-Flash` on H20 to prevent crashes.
- **Verify tool calling behavior** — `tool_choice: "required"` is currently ignored with `qwen3_coder` parser (Issue #54808).
- **Monitor memory usage closely** — v0.28.0+ has a known memory leak (Issue #54237); stick to v0.27.1 if stability is critical.
- **Prepare for ROCm migration** — FP8 and MoE improvements are progressing rapidly, but some models (e.g., GLM-5.3) remain unstable (Issue #54924).

> 🔗 [All issues referenced above](https://github.com/vllm-project/vllm/issues?q=is%3Aopen+sort%3Aupdated-desc)

---  
*Digest generated: 2026-09-12 | vLLM GitHub Activity Tracker*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-09-12**

---

### **1. Today's Highlights**  
The SGLang ecosystem continues to advance its high-throughput, low-latency inference stack with critical work on distributed KV cache scalability and GPU-specific optimizations. Key developments include the restoration of GLM-5.3 Flash decode context parallelism (PR #39117), a major fix for Mamba state handling in HiCache (PR #39156), and ongoing efforts to stabilize multi-GPU agentic workloads via PD disaggregation improvements (Issue #21846). These updates reflect a strong focus on robustness and performance at scale.

---

### **2. Releases & Breaking Changes**  
None reported in the last 24 hours. No new versions or breaking API/config changes were released.

---

### **3. New Model & Hardware Support**  
- **GLM-5.3-Flash**: PR #39117 restores `decode_context_parallelism` support on Blackwell GPUs (SM120), enabling efficient long-context decoding. Tracking issue: [#37813](https://github.com/sgl-project/sglang/issues/37813).
- **AMD Radeon RDNA3/RDNA4 (gfx1100/gfx1201)**: Ongoing enablement plan under Issue [#30599](https://github.com/sgl-project/sglang/issues/30599) — now officially tracking consumer GPU support beyond Instinct datacenter chips.
- **SenseNova-U1/U1.5**: Tracking issue [#37742](https://github.com/sgl-project/sglang/issues/37742) confirms active development for integration with official OpenSenseNova reference implementation.

---

### **4. Performance & Optimization**  
- **DeepSeek-V4.1**: PRs #39158 and #39159 extend fused mHC combine/RMSNorm kernels to handle wider batches (up to 48 rows), reducing fallback to separate kernels and improving prefill throughput on Blackwell.
- **Qwen3-VL & Qwen-Image-Layered**: Optimizations in PRs #36411 and #38549 reduce memory waste by avoiding redundant caching and correctly return multiple image outputs, improving efficiency for one-pass streaming use cases.
- **Diffusion (Hopper)**: PR #38584 reuses existing QKV epilogue kernels and packs vision windows, reducing repeated attention calls and boosting DiT denoise performance.
- **Speculative Decoding**: PR #32673 introduces *windowed draft-decode attention* for built-in EAGLE/MTP drafts, limiting KV read overhead during long-prefix generation.

---

### **5. Stability & Regressions**  
- **CUDA Coredumps**: Issue #26340 (298 comments) tracks recurring CUDA coredumps from CI test runs (`pr-test.yml`). Auto-collected via `.github/actions/upload-cuda-coredumps/action.yml`. High priority; no fix yet.
- **GLM-5.3 Crash**: Issue #39072 reports crash during disagg decode + DP-attention + spec decode. Reproducible; linked to upstream state management in flash attention path.
- **FP8 KV Cache Slowdown**: Issue #30815 highlights performance regression due to unfused K/V quantization and per-layer Q conversion overhead — impacts decode speed significantly.
- **Mamba Checkpoint Misses**: Issue #37817 reveals DFlash misses Mamba checkpoints when accepted tokens cross tracking boundaries — affects state persistence in long sequences.

> ✅ *Fix PRs exist for some issues*:  
> - PR #39117: Restores GLM-5.3 Flash decode CP and fixes virtual KV addressing  
> - PR #39156: Fixes incorrect Mamba tool argument parsing via proper state kernel routing

---

### **6. What This Means for Application Developers**  
- **Agentic Workloads**: The roadmap for a distributed KV cache system (Issue #21846) signals upcoming support for scalable, multi-GPU agent execution — essential for long-horizon reasoning and planning.
- **Hardware Flexibility**: AMD consumer GPU support is being actively pursued — expect broader ROCm coverage soon, especially for RDNA3/4 desktop cards.
- **Model Accuracy & Consistency**: Be cautious with DeepSeek V4/V3.2 tool-call parsing (Issue #38924) — spurious `"arguments"` wrapper keys may break downstream logic.
- **Debugging & Observability**: Enable `include_reasoning=false` flag consistently (Issue #39103) — current behavior still emits reasoning even when disabled, risking response bloat.
- **Performance Tuning**: For high-throughput systems, consider leveraging recent PRs like #39158 (wider fused kernels) and #38549 (multi-output diffusion handling) to maximize throughput and avoid memory waste.

> 🔗 **Recommended Tracking**:  
> - [Issue #26340](https://github.com/sgl-project/sglang/issues/26340): Critical for production stability  
> - [PR #39117](https://github.com/sgl-project/sglang/pull/39117): Essential for GLM-5.3 Flash users  
> - [Issue #21846](https://github.com/sgl-project/sglang/issues/21846): Strategic for future agent scalability

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-09-12**

---

### **1. Today's Highlights**  
The latest updates focus on backend stability and performance tuning across Metal, Vulkan, SYCL, and ROCm, with critical fixes for Flash Attention regressions on RDNA4 (gfx1201) and memory safety issues in Vulkan’s `argsort`. A major PR reworks Metal’s fusion table for better maintainability and correctness, while new support for TQ1_0 quantization on CPU and SYCL improves compatibility with emerging model formats.

---

### **2. Releases & Breaking Changes**  
- **`b10919`**: Updated `ggml-webgpu` to a recent Dawn version, removing outdated native features on WASI. [PR #28683](https://github.com/ggml-org/llama.cpp/pull/28683)  
- **`b10905`**: HIP Flash Attention tuning for AMD RDNA4 (gfx1201), now preferring whole-tile FA grids over stream-k and enabling MMA FA for head size 256. [PR #28102](https://github.com/ggml-org/llama.cpp/pull/28102)  
- **`b10907`**: Fixed MTP context KV cache allocation for MoE models (DeepSeek-V4, GLM4-MoE, Cohere2-MoE). [PR #28630](https://github.com/ggml-org/llama.cpp/pull/28630)  
- **`b10906`**: Fixed speculation position handling after image inputs in server mode. [PR #28715](https://github.com/ggml-org/llama.cpp/pull/28715)

> ⚠️ **Migration Note**: The removal of `rocWMMA` FlashAttention kernel in `b10905` caused up to **2x slower prompt processing** on RDNA4 — developers should expect degraded performance unless using the new `fattn-mma-f16` path.

---

### **3. New Model & Hardware Support**  
- **New Model Architectures**:  
  - Added support for **Maple 20B-A1B**, a ternary MoE architecture with 256 experts (8 active), SWA-512 interleaved attention, and TQ1_0/TQ2_0 quantization. [PR #27000](https://github.com/ggml-org/llama.cpp/pull/27000)  
- **Hardware & Backend Enhancements**:  
  - **SYCL**: Fixes for iGPU zero-size scratchpad crash and >4GB allocation limit. [PR #27689](https://github.com/ggml-org/llama.cpp/pull/27689)  
  - **OpenVINO**: Fix for AVX-512-related crashes on Intel Core Ultra 7. [Issue #28726](https://github.com/ggml-org/llama.cpp/issues/28726)  
  - **CUDA**: Enabled vector Flash Attention kernels for `Q8_0 K / Q4_0 V` asymmetric KV cache. [PR #27269](https://github.com/ggml-org/llama.cpp/pull/27269)  
  - **Metal**: Unified fusion pattern table (`ggml-metal-fuse.cpp`) for improved code clarity and debuggability. [PR #28164](https://github.com/ggml-org/llama.cpp/pull/28164)  

---

### **4. Performance & Optimization**  
- **Flash Attention Tuning (HIP)**: Optimized for gfx1201 (RDNA4), favoring whole-tile FA grids over stream-k, reducing latency for long-context inference. [PR #28102](https://github.com/ggml-org/llama.cpp/pull/28102)  
- **Kernel Improvements**:  
  - Fixed idle threads in `iq1_s`, `iq1_m`, etc., kernels for small `ne00 < 1024`. [PR #28692](https://github.com/ggml-org/llama.cpp/pull/28692)  
  - Improved `mul_mv` kernel efficiency via row split optimization.  
- **Memory Efficiency**:  
  - `ggml-sycl` now allocates oneDNN scratchpad from pool per `gemm` call instead of once per queue, preventing LIFO order corruption. [PR #28660](https://github.com/ggml-org/llama.cpp/issues/28660)  
  - Experimental **Q4_K P6 and VNNI kernels** added for CPU (opt-in). [PR #28791](https://github.com/ggml-org/llama.cpp/pull/28791)  

---

### **5. Stability & Regressions**  
| Severity | Issue | Impact | Fix Status | Link |
|---------|------|--------|------------|------|
| Critical | Flash Attention regression on RDNA4 (`gfx1201`) after `rocWMMA` removal | Up to **2x slower prompt processing** | Pending | [Issue #26220](https://github.com/ggml-org/llama.cpp/issues/26220) |
| High | Vulkan `argsort(large)` data race & OOB access | CI failures, potential silent corruption | Patched | [PR #28705](https://github.com/ggml-org/llama.cpp/pull/28705) |
| High | SYCL crash due to oneDNN scratchpad breaking LIFO pool order | Prompt processing failure | PR submitted | [Issue #28660](https://github.com/ggml-org/llama.cpp/issues/28660) |
| Medium | OpenVINO backend crashes on AVX-512 (Intel Core Ultra 7) | System-level instability | PR pending | [Issue #28726](https://github.com/ggml-org/llama.cpp/issues/28726) |
| Medium | Vulkan validation error `VUID-RuntimeSpirv-cooperativeMatrixFlexibleDimensionsMaxDimension-10167` on Intel B70 | Runtime warning, possible driver conflict | Reported | [Issue #28590](https://github.com/ggml-org/llama.cpp/issues/28590) |

---

### **6. What This Means for Application Developers**  
- **Expect slower prompt processing** if deploying on RDNA4 GPUs with `b10905+` — use `--no-flash-attn` or revert to older builds until tuned kernels stabilize.  
- **Leverage new MoE and ternary quantization support** (TQ1_0/TQ2_0) for efficient inference on models like Maple and Sherry; ensure your toolchain supports these formats.  
- **Use `--n-cpu-mode` with `--n-cpu-ffn`** for fine-grained control over FFN offloading — a new feature request (#27987) aims to enhance this further.  
- **Avoid using `rpc-server` with partial cache entries** — new logic in `#28789` prevents invalid caching and ensures consistency.  
- **Web UI developers**: Be aware that `response_format.json_schema` now correctly parses flat schema definitions (not nested), aligning with OpenAI spec. [PR #28697](https://github.com/ggml-org/llama.cpp/pull/28697)

> ✅ **Pro Tip**: Use `llama-server` with `--router` and multiple presets loaded once — a feature request (#23704) is gaining traction for scalable agent deployments.

---  
*Data source: [github.com/ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-09-12**

---

### **1. Today's Highlights**  
The Ollama ecosystem continues to expand its support for advanced models and hardware, with critical stability fixes underway for `qwen3.8`, `gemma4`, and cloud-hosted models. Notably, ongoing work aims to resolve persistent tool-calling failures in `qwen3` and `gemma4`, while new PRs improve MLX integration and cloud proxy reliability—key for production-grade deployments.

---

### **2. Releases & Breaking Changes**  
*None reported in the last 24 hours.*  
No new versions or breaking API/config changes were released. However, several PRs suggest upcoming improvements:
- **PR #18382**: Introduces bounded timeouts for cloud proxy connections (fixes indefinite hangs on stalled upstreams). [GitHub](https://github.com/ollama/ollama/pull/18382)
- **PR #18393**: Reverts built-in CLI agent, returning to traditional chat interface. [GitHub](https://github.com/ollama/ollama/pull/18393)

---

### **3. New Model & Hardware Support**  
- **New model requests**:  
  - `Hy4-preview` (Tencent) requested for local use via Ollama. [Issue #18287](https://github.com/ollama/ollama/issues/18287)  
  - `deepseek-v4.1-flash` requested for downloadable version. [Issue #18379](https://github.com/ollama/ollama/issues/18379)  
- **Hardware/architecture support**:  
  - `ppc64le` architecture remains unsupported; request active since 2023. [Issue #796](https://github.com/ollama/ollama/issues/796)  
- **Quantization formats**:  
  - `IQ3_S` quantization for `Qwen3.8-27B-GSQ-RCO-GGUF` fails silently (empty output). [Issue #18297](https://github.com/ollama/ollama/issues/18297)  
  - Low-bit `q2_K`, `q3_K_*` variants of `qwen2.5-coder:3b-instruct` are functionally broken. [Issue #18252](https://github.com/ollama/ollama/issues/18252)

---

### **4. Performance & Optimization**  
- **Model loading regressions**:  
  - Users report significant slowdowns in loading large models (e.g., `qwen3.5:122b`) post-upgrade (from v0.23.4 → v0.30.0). [Issue #18373](https://github.com/ollama/ollama/issues/18373)  
- **Cloud performance issues**:  
  - `deepseek-v4-pro:cloud` experiences latency spikes and eventual wedging after ~45 minutes. [Issue #18381](https://github.com/ollama/ollama/issues/18381)  
- **Optimizations in progress**:  
  - PR #17144 enables parallel inference for `qwen35`/`qwen35moe` now that upstream llama.cpp crash is fixed. [GitHub](https://github.com/ollama/ollama/pull/17144)  
  - PR #18388 adds support for parsing `args` field in JSON tool calls (fixing silent drops). [GitHub](https://github.com/ollama/ollama/pull/18388)

---

### **5. Stability & Regressions**  
**Critical Issues (High Severity)**  
- **Tool-call parsing failures**:  
  - `qwen3.8`: Streaming errors due to missing user query (`no user query found in messages`). [Issue #17778](https://github.com/ollama/ollama/issues/17778)  
  - `gemma4`: Tool calls with keys containing spaces result in empty responses. [Issue #18390](https://github.com/ollama/ollama/issues/18390)  
  - `gemma3n`: `tool_calls` not returned despite model supporting it. [Issue #18357](https://github.com/ollama/ollama/issues/18357)  
- **Cloud instability**:  
  - `glm-5.3:cloud` enters endless reasoning loops, aborting tasks. [Issue #18193](https://github.com/ollama/ollama/issues/18193)  
  - Cloud models hang indefinitely due to unbounded HTTP client timeouts. [PR #18382](https://github.com/ollama/ollama/pull/18382)  
- **Hardware-specific crashes**:  
  - `qwen3.8:27b` fails on AMD RX 9060 XT with `Could not load "TensileLibrary_lazy_gfx1200.dat"`. [Issue #17782](https://github.com/ollama/ollama/issues/17782)  
  - `gemma4:e4b` causes host OOM on Jetson Orin Nano 8GB despite CPU projector config. [Issue #18396](https://github.com/ollama/ollama/issues/18396)  

> ✅ *Fix PRs exist*:  
> - PR #18382 (timeout bounds) addresses cloud hanging.  
> - PR #18388 (tool args parsing) resolves `args` field handling.  
> - PR #18376 prevents corrupted image embeddings on CPU for `gemma3n`. [GitHub](https://github.com/ollama/ollama/pull/18376)

---

### **6. What This Means for Application Developers**  
- **Avoid `qwen3.8` and `gemma4` tool calls with complex schemas or spaces in keys** — expect silent failures until PRs land. Use `tools` parameter carefully.  
- **Do not rely on `:cloud` models beyond ~45 minutes** without monitoring; upgrade to `v0.33.1` if stability is critical.  
- **For low-memory edge devices (Jetson, ARM)**: Avoid `gemma4` multimodal models unless fully offloaded. Consider CPU-only projector risks.  
- **Use `v0.33.1` or earlier** if you depend on stable `deepseek-v4-pro:cloud` or `glm-5.3:cloud`.  
- **Leverage `/api/chat` response metadata**: PR #18394 proposes including manifest digests—critical for reproducibility in evaluation pipelines.  

> 🔧 *Action item*: Monitor PRs #18382, #18388, and #18376 for immediate fixes affecting tool calling and cloud stability.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

---

### **LiteLLM Digest — 2026-09-12**

#### **1. Today's Highlights**  
The LiteLLM project continues to expand its provider ecosystem with a major sync of pricing data across **Anthropic, OpenAI, Gemini, Fireworks AI, and Together AI**, adding **27 new models** in total. Critical security and stability fixes were merged to address high-severity issues including **a ReDoS vulnerability in secret redaction**, **JWT auth leaking virtual keys**, and **silent model parameter errors** that caused 500s on Responses APIs.

#### **2. Releases & Breaking Changes**  
- **v1.102.0-dev.2** released today with enhanced security: all Docker images are now signed via [cosign](https://github.com/BerriAI/litellm/commit/0112e53), ensuring supply-chain integrity.  
- **Security Advisory**: The earlier compromise of `litellm` PyPI packages (v1.82.7–v1.82.8) has been fully contained — affected versions deleted; current releases are clean ([Issue #24518](https://github.com/BerriAI/litellm/issues/24518)).  
- **Proxy image hardening**: New PRs ([#40822](https://github.com/BerriAI/litellm/pull/40822), [#40821](https://github.com/BerriAI/litellm/pull/40821)) expose critical misconfigurations — Helm chart and runtime images default to `root`, violating security best practices. **Immediate patching recommended**.

#### **3. New Model & Hardware Support**  
- **Prism** added as a native provider via [PR #40782](https://github.com/BerriAI/litellm/pull/40782), enabling full support for Chat Completions, Responses, and Messages routing with verified pricing.  
- **New models across providers**:  
  - **Anthropic**: `claude-fable-5`, `claude-fable-5-1` ([PR #40801](https://github.com/BerriAI/litellm/pull/40801))  
  - **Gemini**: `gemini-2.5-computer-use-preview-10-2025`, `gemini-2.5-flash` ([PR #40800](https://github.com/BerriAI/litellm/pull/40800))  
  - **Together AI**: `arcee-ai/trinity-mini`, `arize-ai/qwen-2-1.5b-instruct` ([PR #40823](https://github.com/BerriAI/litellm/pull/40823))  
  - **OpenAI**: `babbage-002`, `chat-latest` ([PR #40797](https://github.com/BerriAI/litellm/pull/40797))  
  - **Fireworks AI**: `deepseek-v4-flash-0731` with priority cost tiers ([PR #40799](https://github.com/BerriAI/litellm/pull/40799))

#### **4. Performance & Optimization**  
- **Prompt cache cost estimation** introduced via [PR #40804](https://github.com/BerriAI/litellm/pull/40804): proxies now estimate the cost impact of switching between models based on cache state, helping avoid unexpected spend spikes during cold-cache transitions.  
- **E2E memory regression test** added ([PR #40773](https://github.com/BerriAI/litellm/pull/40773)) to catch memory leaks (e.g., retry breadcrumbs) before release — prevents OOM crashes in production.  
- **HTTP/2 support** is now tracked as a feature request ([Issue #30362](https://github.com/BerriAI/litellm/issues/30362)), which could improve throughput for high-latency upstream calls.

#### **5. Stability & Regressions**  
| Severity | Issue | Impact | Fix Status |
|---------|------|--------|------------|
| 🔴 High | **ReDoS in `secret_redaction.redact_string()`** ([#32353](https://github.com/BerriAI/litellm/issues/32353)) | Crashes proxy via regex backtracking on large error strings; kills liveness probes | ❌ No fix yet; urgent mitigation needed |
| 🔴 High | **JWT auth creates nameless virtual keys per refresh** ([#40398](https://github.com/BerriAI/litellm/issues/40398)) | Pollutes Usage UI with hashed-jwt entries, obscuring real key tracking | ✅ Partial fix in progress (PR #40820) |
| 🟡 Medium | **Silent model breaks Anthropic Messages API** ([#34890](https://github.com/BerriAI/litellm/issues/34890)) | `500` errors on `/messages` when `silent_model` is set | ✅ PR pending ([#40820](https://github.com/BerriAI/litellm/pull/40820)) |
| 🟡 Medium | **Cache control injection points silently dropped** ([#40675](https://github.com/BerriAI/litellm/issues/40675)) | Breaks prompt caching behavior if client sets any `cache_control` | ⚠️ Not yet fixed |

#### **6. What This Means for Application Developers**  
- **Upgrade immediately** if using older v1.82.x versions due to the confirmed PyPI compromise — verify signatures via cosign.  
- **Avoid root execution** in production: both Helm chart and Docker images run as `root` by default — apply custom `securityContext` or use patched images.  
- **Use new model aliases** like `bedrock/global.openai.gpt-5.6-*` cautiously — recent bugs show they may fail on image inputs due to routing to `converse` instead of OpenAI endpoint ([#40080](https://github.com/BerriAI/litellm/issues/40080)).  
- **Monitor budget enforcement** closely — issues like [#40050](https://github.com/BerriAI/litellm/issues/40050) show false "budget exceeded" errors on Claude Code, leading to 429 floods.  
- **Enable prompt cache cost estimation** (`estimate_prompt_cache_switch_costs`) to prevent surprise costs when switching models dynamically.

> ✅ **Recommended Action**: Audit your deployment’s `securityContext`, update to `v1.102.0-dev.2`, and validate all `model` → `cost` mappings post-pricing sync.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-09-12**

---

### **1. Today's Highlights**  
Unsloth continues its aggressive push toward agentic AI workflows with major refinements in project persistence, sandboxed execution, and durable agent states. A key PR enables chat turns to survive browser tab closures by parking tool streams on approval—critical for long-running agent tasks. Simultaneously, the Studio team has finalized a suite of foundational features for managed project workspaces, including Git-backed checkpoints, verified hooks, and bounded task execution lanes.

---

### **2. Releases & Breaking Changes**  
*No new releases in the past 24 hours.*  
However, users upgrading from `2026.9.3` to `2026.9.4` should note:  
- `SFTConfig.__init__()` now expects `max_length` instead of `max_seq_length`.  
  → [Issue #10785](https://github.com/unslothai/unsloth/issues/10785) | [Fix PR #10785](https://github.com/unslothai/unsloth/pull/10785) (pending merge)  
- The `--fit` flag behavior is inconsistent in manual GPU mode; logs show `on` despite `off` being passed.  
  → [Issue #10821](https://github.com/unslothai/unsloth/issues/10821)

---

### **3. New Model & Hardware Support**  
- **AMD ROCm Support**: A dedicated Docker image for AMD GPUs (RDNA2/3/4, CDNA/Instinct) is under active development.  
  → [Feature Request #6230](https://github.com/unslothai/unsloth/issues/6230) | [PR #6230 (draft)](https://github.com/unslothai/unsloth/pull/6230)  
- **Apple Silicon (MLX)**: Studio now includes certified support for MLX runtime on Apple Silicon via PR #10823.  
  → [PR #10823](https://github.com/unslothai/unsloth/pull/10823)  

> *Note:* Full AMD Docker support remains pending official release.

---

### **4. Performance & Optimization**  
- **GPU Utilization**: Users report GPU idle time during Qwen3.5-9B LoRA training on NVIDIA B200 due to repeated autotune key rebuilds on each launch.  
  → [Issue #10806](https://github.com/unslothai/unsloth/issues/10806)  
- **Memory Efficiency**: `--tensor-split` is currently ignored, causing suboptimal memory distribution across multi-GPU setups.  
  → [Issue #10355](https://github.com/unslothai/unsloth/issues/10355)  
- **Inference Latency**: Long GGUF chats waiting for tool approval block queued requests even when four slots are free. This stems from context-budget retention during approval waits.  
  → [Issue #10671](https://github.com/unslothai/unsloth/issues/10671)

---

### **5. Stability & Regressions**  
| Severity | Issue | Impact | Fix Status |
|---------|------|--------|------------|
| 🔴 High | CUDA error: `CUBLAS_STATUS_NOT_INITIALIZED` during FLUX.2 Klein VAE decoding on multi-GPU | Crashes inference pipeline | [PR #10768](https://github.com/unslothai/unsloth/issues/10768) (open) |
| 🔴 High | X11 + NVIDIA: WebKitWebProcess leaks DMA-BUF sync_file fds → blank/frozen UI | System hang, requires restart | [Issue #10795](https://github.com/unslothai/unsloth/issues/10795) (open) |
| 🟡 Medium | Windows installer fails if username contains spaces | Installation blocks on path parsing | [Issue #10722](https://github.com/unslothai/unsloth/issues/10722) (closed, fix in progress) |
| 🟡 Medium | Antivirus flags `install.ps1`, blocking updates | Manual install required | [Issue #10805](https://github.com/unslothai/unsloth/issues/10805) (open) |

---

### **6. What This Means for Application Developers**  
- **Build Resilient Agents**: With agentic turn persistence (#10365), your agents can now survive UI reloads—ideal for long-term research, code generation, or deployment pipelines.  
- **Leverage Project Workspaces**: Use `managed project worktrees`, `bounded Git operations`, and `verified hooks` (via PRs #9673–#10658) to create secure, reproducible, and audit-ready agent workflows.  
- **Plan for Cross-Platform Deployments**: AMD ROCm and Apple MLX support are nearing parity with CUDA—design your apps with hardware abstraction in mind.  
- **Handle Configuration Migrations**: Update `SFTConfig` calls to use `max_length`; monitor for `--fit` logging inconsistencies.  
- **Avoid Blocking Queues**: Be aware that tool approval waits consume context budget—even if no active inference is running.

👉 *Recommended action*: Audit agent workflows for resilience and dependency on stable backend state. Monitor for upcoming CLI/studio updates around project lifecycle management and GPU resource tracking.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*