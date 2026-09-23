# AI Infrastructure Digest 2026-09-23

> Generated: 2026-09-23 00:59 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-09-23**

---

### **1. Ecosystem Overview**  
The AI inference and serving ecosystem is rapidly maturing into a multi-layered, hardware-aware stack where performance, correctness, and developer experience are increasingly interdependent. Projects like **vLLM**, **SGLang**, and **llama.cpp** are converging on high-efficiency inference engines with deep GPU kernel specialization, while **Ollama**, **LiteLLM**, and **Unsloth** are positioning themselves as accessible, end-to-end platforms for local deployment and agent workflows. A clear divide has emerged: low-level engine projects focus on raw throughput and memory efficiency, whereas higher-layer tools prioritize usability, multimodal support, and tooling integration—especially for agents and structured outputs.

---

### **2. Activity Comparison**

| Project       | Issues Open (24h) | PRs Merged (24h) | Release Status        |
|---------------|-------------------|------------------|------------------------|
| vLLM          | 18                | 52               | v0.30.0 (stable)       |
| SGLang        | 12                | 47               | None (internal changes)|
| llama.cpp     | 14                | 38               | b11115 (patch release) |
| Ollama        | 10                | 25               | None (critical fixes merged) |
| LiteLLM       | 12                | 21               | v1.102.0 (security-focused) |
| Unsloth       | 16                | 32               | v0.1.814-beta (experimental) |

> ✅ **Insight**: vLLM leads in both activity volume and stability delivery; LiteLLM shows strong security posture; Unsloth is pushing rapid beta iteration for vision-agent capabilities.

---

### **3. Model Support Race**

| Model / Architecture         | vLLM                     | SGLang                  | llama.cpp              | Ollama                 | LiteLLM             | Unsloth               |
|-------------------------------|--------------------------|-------------------------|------------------------|------------------------|---------------------|------------------------|
| **DeepSeek-V4.1-Flash**       | ✅ Full (MXFP8, FlashMLA V4.1) | ✅ Backend + IndexCache   | ❌ Not supported        | ❌ Not supported        | ❌ Not listed         | ❌ Not supported        |
| **Kimi-K3 (MXFP4)**           | ⚠️ Tracking (ROCm CI)      | ✅ MXFP4 ROCm support     | ❌ No mention           | ❌ No mention           | ❌ No mention         | ❌ No mention           |
| **Qwen-Image-2.1**            | ❌ Not supported           | ❌ Not supported          | ❌ Not supported        | ❌ Not supported        | ❌ Not supported      | ✅ Local support (beta) |
| **Gemma 4 Vision**            | ✅ One-pass sampler stats | ❌ Not mentioned          | ❌ Not mentioned        | ✅ Dynamic `max_soft_tokens` | ❌ Not mentioned    | ❌ Not mentioned        |
| **DiffusionGemma**            | ✅ One-pass stats kernel   | ❌ Not mentioned          | ❌ Not mentioned        | ❌ Not mentioned        | ❌ Not mentioned      | ❌ Not mentioned        |
| **SM120 (Blackwell)**         | ⚠️ GLM-5.3-Flash partial   | ❌ Not mentioned          | ❌ Not mentioned        | ❌ Not mentioned        | ❌ Not mentioned      | ❌ Not mentioned        |
| **AMD MI355X (gfx950)**       | ✅ Paged scorers + tiles    | ✅ Small-M MXFP4 kernel   | ✅ A8 Q4_K DP4A binary  | ❌ Not mentioned        | ❌ Not mentioned      | ✅ RDNA1 training (RX 5700 XT) |

> 🏆 **Winner**: **vLLM** leads in cutting-edge model & hardware support, especially for SM100/Blackwell and ROCm. **Unsloth** is ahead in *local* vision-agent readiness (Qwen-Image-2.1), while **SGLang** excels in distributed inference integrations.

---

### **4. Performance Frontier**

| Optimization Focus         | vLLM                                  | SGLang                              | llama.cpp                          | Ollama                           | LiteLLM                         | Unsloth                       |
|----------------------------|---------------------------------------|-------------------------------------|------------------------------------|----------------------------------|----------------------------------|-------------------------------|
| **KV Cache & Memory**      | ✅ MXFP8, paged scorers, FlashMLA V4.1 | ✅ DCP/PD disaggregation, event schema alignment | ✅ Flash Attention (Vulkan), L1 carveout | ✅ BF16/MXFP8 in Qwen3.8 Flash Next | ✅ Rust cost engine (image/video pricing) | ✅ VAE decode compilation (DiT) |
| **Batching & Throughput**  | ✅ Async Engram prefetching, Mega-mHC   | ✅ DCP, state transfer efficiency    | ✅ Top-k fusion (MoE), CUDA flash attention | ✅ MLX kernel optimizations (Qwen3.8) | ✅ Secret resolution via Rust backend | ✅ 2× faster reasoning blocks (60 FPS) |
| **Quantization**           | ✅ AWQ-W4A16 fused GEMM, FP8 reuse     | ✅ NVFP4 (whole-model), MXFP4 ROCm   | ✅ A8 Q4_K DP4A, IQ4_NL support    | ✅ MXFP8, BF16 expert paths       | ✅ Image/OCR/video pricing models | ✅ NVFP4 (flashinfer), INT4/INT8 load |
| **Distributed Serving**    | ✅ Multi-node (via async pref).        | ✅ PD/DCP, IPC migration to msgpack | ❌ Limited (single-node focus)     | ❌ Not applicable                 | ✅ Gateway routing (model aliases) | ❌ Not applicable               |
| **Kernel Specialization**  | ✅ FlashMLA V4.1, DeepGEMM Mega-mHC    | ✅ Fused MoE (small-M), JIT tuning   | ✅ Vulkan/Xe Flash Attention, SYCL   | ✅ MLX-specific kernels           | ✅ Native Rust diagnostics       | ✅ FlashInfer NVFP4 backend     |

> 🔥 **Trend**: The frontier is shifting toward **hardware-specific kernel fusion** (e.g., MXFP8, NVFP4), **distributed context parallelism (DCP)**, and **Rust-based performance layers** for cost, secrets, and logging.

---

### **5. Layer Positioning**

| Project       | Primary Layer                  | Key Differentiators                                                                 |
|---------------|--------------------------------|--------------------------------------------------------------------------------------|
| **vLLM**      | **Serving Engine**             | High-throughput, low-latency inference; optimized for large-scale cloud deployments; strong GPU kernel specialization. |
| **SGLang**    | **Distributed Inference Stack**| Advanced PD/DCP disaggregation; IPC standardization; designed for scalable, multi-node inference clusters. |
| **llama.cpp** | **Local Runtime / Cross-Backend**| Heterogeneous backend support (Vulkan, OpenCL, SYCL, MUSA); ideal for edge/local inference; minimal dependencies. |
| **Ollama**    | **Local Developer Platform**   | User-friendly CLI/UI; multimodal support; fast iteration for agents; tight integration with `llama.cpp`. |
| **LiteLLM**   | **LLM Gateway / Orchestration**| Unified API abstraction; cost tracking; model aliasing; security via cosign signing; production-grade observability. |
| **Unsloth**   | **Agent-Focused Local Runtime**| Vision-language agent skills; real-time reasoning (60 FPS); studio-first UX; targeted at creative AI workflows. |

> 🧩 **Positioning Insight**: vLLM and SGLang are becoming the **de facto engines** for high-performance inference. LiteLLM acts as the **production gateway layer**, while Ollama and Unsloth serve as **developer-facing platforms**—with Unsloth uniquely focused on **vision-agent workflows**.

---

### **6. Trend Signals**

#### 🔍 **Key Industry Trends Extracted from Activity**
1. **Hardware-Aware Optimization is Now Mandatory**  
   - SM100/Blackwell (SM120) support is being prioritized across vLLM, SGLang, and llama.cpp.
   - AMD ROCm (gfx950) gains significant attention: paged scorers, narrow tiles, MXFP4 kernels—all aimed at reducing decode overhead and memory pressure.

2. **Quantization Is Evolving Beyond FP8/AWQ**  
   - NVFP4 (Unsloth), MXFP4 (SGLang), and mixed-precision hybrid approaches (vLLM) signal a move toward **application-tuned quantization** rather than one-size-fits-all.

3. **Distributed Serving Is Maturing Beyond Batching**  
   - SGLang’s DCP/PD disaggregation and vLLM’s async prefetching indicate a shift toward **logical capacity planning** and **state-aware scheduling** in large-scale inference.

4. **Security & Trust Are Non-Negotiable in Production**  
   - LiteLLM’s adoption of **cosign-signed Docker images** and **Rust-backed secret resolution** reflects growing demand for verifiable, audit-ready deployments—especially in regulated environments.

5. **Agents Demand Integrated Tooling**  
   - Unsloth’s native agent skills, Ollama’s dynamic image resolution, and LiteLLM’s structured output parsing show that **agent workloads are driving full-stack innovation**, not just inference speed.

#### 📌 **What Application Developers Should Watch**
- **Avoid unstable combinations**: Do not use GLM-5.3-Flash in long-decode or agentic flows (vLLM/SGLang regressions).
- **Monitor AMD ROCm stability**: While progress is strong (MI355X, RX 5700 XT), training on RX 7900 XTX remains risky (Unsloth #11498).
- **Leverage new cost transparency**: Use LiteLLM’s Rust cost engine and Ollama’s `max_soft_tokens` exposure for better budget control and vision pipeline design.
- **Prepare for hybrid deployments**: Combine vLLM/SGLang (engine) with LiteLLM (gateway) and Ollama/Unsloth (local runtime) for flexible, secure, and high-performance agent stacks.

> ✅ **Final Recommendation**: For production agents, adopt a **tiered architecture**:  
> **Engine (vLLM/SGLang)** → **Gateway (LiteLLM)** → **Runtime (Ollama/Unsloth)** — ensuring performance, security, and usability at scale.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-09-23**

---

### **1. Today's Highlights**  
The vLLM v0.30.0 release introduces full support for **DeepSeek-V4.1-Flash**, leveraging **MXFP8 storage** and **FlashMLA V4.1** on SM100 architectures, alongside significant optimizations in **async Engram prefetching** and **DeepGEMM Mega-mHC**. Key PRs focus on fixing critical correctness issues in **GLM-5.3-Flash** long-decode scenarios and improving **ROCm performance** on AMD MI355X (gfx950) via new paged scorers and narrower attention tiles.

---

### **2. Releases & Breaking Changes**  
- **v0.30.0**: Major release with 762 commits from 315 contributors (104 new).  
  - *No breaking API changes reported*; backward compatibility preserved.  
  - [Release Notes](https://github.com/vllm-project/vllm/releases/tag/v0.30.0)

---

### **3. New Model & Hardware Support**  
- **Models**:  
  - ✅ **DeepSeek-V4.1-Flash** now fully supported with MXFP8 KV caching and FlashMLA V4.1 on SM100.  
  - ✅ **Kimi K3** model tracking ongoing ([#50001](https://github.com/vllm-project/vllm/issues/50001)); CI tests added for AMD ([#58012](https://github.com/vllm-project/vllm/pull/58012)).  
  - ✅ **DiffusionGemma** now has one-pass sampler stats kernel ([#58226](https://github.com/vllm-project/vllm/pull/58226)) and fixed shape mismatch under concurrency ([#58035](https://github.com/vllm-project/vllm/issues/58035)).  

- **Hardware & Backends**:  
  - ✅ **ROCm/gfx950 (MI355X)**: New paged candidate-only scorers for DSA sparse indexer decode ([#57859](https://github.com/vllm-project/vllm/pull/57859)), narrower Triton prefill tiles ([#58225](https://github.com/vllm-project/vllm/pull/58225)).  
  - ✅ **Intel XPU**: All-to-all EP backend for batched MoE remains WIP ([#46871](https://github.com/vllm-project/vllm/pull/46871)).  
  - ✅ **SM120 (Blackwell)**: GLM-5.3-Flash now has partial support; rope-free sparse MLA path still missing ([#53963](https://github.com/vllm-project/vllm/issues/53963)).

- **Quantization**:  
  - ✅ **AWQ-W4A16**: Fused dequant-GEMM kernel on SM89 (`VLLM_BATCH_INVARIANT=1`) reduces memory bandwidth usage ([#57047](https://github.com/vllm-project/vllm/pull/57047)).  
  - ✅ **FP8 weight transforms** made reusable pure functions ([#57732](https://github.com/vllm-project/vllm/pull/57732)).

---

### **4. Performance & Optimization**  
- **Throughput/Latency**:  
  - **ROCm gfx950 (MI355X)**: Paged scorers reduce decode overhead in sparse indexing ([#57859](https://github.com/vllm-project/vllm/pull/57859)).  
  - **SM100 (Blackwell)**: DeepGEMM Mega-mHC and async Engram prefetching improve inference efficiency for DeepSeek-V4.1-Flash.  
  - **CUDA Graphs**: `VLLM_BATCH_INVARIANT=1` now uses breakable graphs by default to preserve tuned matmul configs ([#57586](https://github.com/vllm-project/vllm/pull/57586)).

- **Memory & Kernel**:  
  - **One-pass sampler stats kernel** for DiffusionGemma improves decoding efficiency at high concurrency ([#58226](https://github.com/vllm-project/vllm/pull/58226)).  
  - **Context-parallel scoring** on ROCm for MiniMax-M3 reduces redundant work under TP>1 ([#57832](https://github.com/vllm-project/vllm/pull/57832)).

---

### **5. Stability & Regressions**  
- **Critical Bugs**:  
  1. **GLM-5.3-Flash long-decode degeneration after accumulated reasoning** → Corrupted output after multiple decodes ([#56868](https://github.com/vllm-project/vllm/issues/56868), 22 comments).  
  2. **GLM-5.3-Flash multi-turn agentic use generates "word salad"** → Repeated token loops in agent workflows ([#56605](https://github.com/vllm-project/vllm/issues/56605), 19 comments).  
  3. **DeepSeek-V4-Flash silent retrieval corruption on ROCm ≥4k tokens** → AITER sparse indexer fails silently ([#52109](https://github.com/vllm-project/vllm/issues/52109), 11 comments).  
  4. **Gemma4 on Turing GPUs (SM7.5)** hits shared memory limits across all attention backends ([#38918](https://github.com/vllm-project/vllm/issues/38918), 22 comments).  
  5. **DiffusionGemma crashes under concurrent decode** due to tensor shape mismatch ([#58035](https://github.com/vllm-project/vllm/issues/58035), 6 comments).

- **Fixes in Progress**:  
  - [#52244](https://github.com/vllm-project/vllm/pull/52244): Restores hybrid GDN prefix-cache hits under MTP spec decoding.  
  - [#56995](https://github.com/vllm-project/vllm/pull/56995): Fixes `get_top_tokens()` crash in generic MTP drafter.  
  - [#57553](https://github.com/vllm-project/vllm/pull/57553): Prevents phantom tool calls in Qwen3 due to fenced code parsing.

---

### **6. What This Means for Application Developers**  
- **For agents & structured outputs**: Use `VLLM_BATCH_INVARIANT=1` + breakable CUDA graphs for better performance consistency, especially with large models like DeepSeek-V4.1-Flash.  
- **For multi-turn/RL workflows**: Opt-in `SessionAffinityScheduler` ([#51384](https://github.com/vllm-project/vllm/pull/51384)) and `routed-expert prefix omission` ([#57966](https://github.com/vllm-project/vllm/pull/57966)) can reduce redundant routing and transfer costs.  
- **Avoid known regressions**: Do not run **Gemma4** on **Turing GPUs (SM7.5)**; avoid **GLM-5.3-Flash** in long-decode or agentic scenarios until fixes land.  
- **AMD users**: Expect improved decode performance on **MI355X (gfx950)** with recent PRs; test with **Kimi-K3** on ROCm via updated CI jobs ([#58012](https://github.com/vllm-project/vllm/pull/58012)).  

> 🔗 *Monitor key issues*: [#56868](https://github.com/vllm-project/vllm/issues/56868), [#56605](https://github.com/vllm-project/vllm/issues/56605), [#53963](https://github.com/vllm-project/vllm/issues/53963) — stability critical for production deployments.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest — 2026-09-23

---

### **1. Today's Highlights**  
SGLang continues rapid progress in distributed inference infrastructure, with key advancements in **PD (Prefill-Decode) disaggregation**, **DCP (Decode Context Parallelism)**, and **AMD ROCm support**. Major work is underway to unify KV cache semantics across backends and fully migrate IPC to `msgpack`, improving stability and performance. The community is actively addressing critical regressions in EAGLE speculative decoding and DCP communication paths.

---

### **2. Releases & Breaking Changes**  
*None.* No new releases were published in the last 24 hours. However, ongoing changes to internal APIs are expected to impact downstream users:
- **IPC migration**: `SGLANG_USE_PICKLE_IPC=0` is now opt-in; full removal of `PickleWrapper` is tracked in [#29465](https://github.com/sgl-project/sglang/issues/29465), which will eventually make `msgpack` the default.
- **KV cache event schema alignment**: PRs like [#39991](https://github.com/sgl-project/sglang/issues/39991) aim to standardize KV cache events with vLLM for interoperability.

---

### **3. New Model & Hardware Support**  
- **Kimi-K3 MXFP4** support added via ROCm: PR [#40811](https://github.com/sgl-project/sglang/pull/40811) enables serving Quark-quantized Kimi-K3 on AMD GPUs using MXFP4 precision.
- **DeepSeek-V4** gains enhanced backend integration:
  - Aiter MegaMoEv2 backend for AMD (PR [#35619](https://github.com/sgl-project/sglang/pull/35619))
  - Full IndexCache support under PD/CP/HiCache (PR [#32771](https://github.com/sgl-project/sglang/pull/32771))
- **NPU (Ascend)**: CANN version updated to 9.1.0 with Python 3.12 (PR [#40524](https://github.com/sgl-project/sglang/pull/40524)).
- **SenseNova-U1/U1.5**: Tracking issue [#37742](https://github.com/sgl-project/sglang/issues/37742) outlines roadmap based on official reference implementation.

---

### **4. Performance & Optimization**  
- **DCP & PD Disaggregation**: Multiple PRs in the stack ([#39743](https://github.com/sgl-project/sglang/pull/39743), [#39731](https://github.com/sgl-project/sglang/pull/39731), [#39749](https://github.com/sgl-project/sglang/pull/39749)) improve state transfer efficiency by aligning admission logic with logical token capacity and preserving draft KV during CPU retraction.
- **AMD ROCm Optimizations**:
  - Small-M MXFP4 fused-MoE kernel for gfx950 (Qwen) improves decode latency for small batches (PR [#40204](https://github.com/sgl-project/sglang/pull/40204)).
  - L1 carveout preference added to preserve occupancy in JIT kernels (PR [#40767](https://github.com/sgl-project/sglang/pull/40767)).
- **Speculative Decoding**: Work continues on low-ratio index layers (DeepSeek-V4.1) and two-level candidate indexing (PR [#40574](https://github.com/sgl-project/sglang/pull/40574)) to reduce memory pressure and improve throughput.

---

### **5. Stability & Regressions**  
Critical issues reported today include:

| Issue | Severity | Status | Link |
|------|----------|--------|------|
| Illegal memory access in Triton fused-MoE + EAGLE (GLM-5.2-NVFP4) | High | Open | [#40623](https://github.com/sgl-project/sglang/issues/40623) |
| FP8 KV-cache decode slowdown due to unfused quantization | Medium | Open | [#30815](https://github.com/sgl-project/sglang/issues/30815) |
| Zombie request leak after disconnected streaming client | High | Open | [#36333](https://github.com/sgl-project/sglang/issues/36333) |
| GLM-5.3-Flash vision broken on main due to pinned transformers==5.12.1 | Medium | Open | [#39831](https://github.com/sgl-project/sglang/issues/39831) |

> ⚠️ **Note**: Several regressions stem from recent merges or reverted changes (e.g., #34160 revert). Developers should avoid `--moe-a2a-backend flashinfer_megamoe` with EAGLE until fix lands.

---

### **6. What This Means for Application Developers**  
- **Use `msgpack` IPC**: If you're building custom backends or debugging IPC issues, set `SGLANG_USE_PICKLE_IPC=0` and expect future removal of pickle fallback.
- **Avoid experimental flags**: Avoid `--moe-a2a-backend flashinfer_megamoe` with EAGLE speculative decoding due to known crashes (PR #40623).
- **Monitor CI health**: The pipeline has 2 broken and 5 flaky tests (tracked in [#17050](https://github.com/sgl-project/sglang/issues/17050)); expect transient failures in nightly builds.
- **Leverage new metrics**: Recent PRs (#40255, #40164) add granular tracking of request outcomes and transferred bytes—ideal for observability in production deployments.
- **Prepare for DCP/PD shifts**: As DCP becomes default (`fi_a2a`), ensure your deployment scripts handle context parallelism and logical capacity planning.

---  
*Digest generated from GitHub data: [sgl-project/sglang](https://github.com/sgl-project/sglang)*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# **llama.cpp Digest – 2026-09-23**

---

### **1. Today's Highlights**  
The latest updates focus on critical stability fixes for the `llama-server` router and eviction logic, preventing race conditions during model loading under concurrency. On the performance front, Intel Xe Flash Attention optimizations were merged for Vulkan, and new A8 Q4_K DP4A binary kernels were added for OpenCL—both targeting high-efficiency inference on modern hardware.

---

### **2. Releases & Breaking Changes**  
- **b11115**: Added OpenCL binary kernel `kernel_gemm_noshuffle_q4_k_q8_1_dp4a_ila_a8_bin` for A8 quantized models (Q4_K non-MoE, DP4A acceleration).  
  🔗 [PR #29056](https://github.com/ggml-org/llama.cpp/pull/29056)  
- **b11114**: Fixed router eviction race condition in `llama-server` by routing all model loads through the queue.  
  🔗 [PR #29217](https://github.com/ggml-org/llama.cpp/pull/29217)  
- **b11113**: Prevented log file inheritance in child processes (`--no-log`, `--log-file`).  
  🔗 [PR #29212](https://github.com/ggml-org/llama.cpp/pull/29212)  
- **b11112**: Added support for `input_image` in `function_call_output` via server API.  
  🔗 [PR #20663](https://github.com/ggml-org/llama.cpp/pull/20663)

> ✅ *No breaking API changes detected; these are additive or stabilizing improvements.*

---

### **3. New Model & Hardware Support**  
- **Vulkan (Intel Xe)**: Added Flash Attention optimization kernels for split-k path on Xe-LPG Plus/Xe2/Xe3 architectures.  
  🔗 [PR #24406](https://github.com/ggml-org/llama.cpp/pull/24406)  
- **OpenCL (AMD)**: Introduced A8-optimized Q4_K non-MoE DP4A binary kernel with improved memory access patterns.  
  🔗 [PR #29056](https://github.com/ggml-org/llama.cpp/pull/29056)  
- **SYCL (Intel Arc B70)**: Continued performance work with IQ3 code reordering and persistent layout optimization.  
  🔗 [PR #29107](https://github.com/ggml-org/llama.cpp/pull/29107)  
- **MUSA (Phased 1)**: Fixed operator failures and build issues for MTT S5000 (MUSA `31`) architecture.  
  🔗 [PR #29193](https://github.com/ggml-org/llama.cpp/pull/29193)  

> 📌 *Support now extends to Intel Arc Pro B70, AMD Radeon RX 7000 series, and upcoming Blackwell GPUs (RTX 50xx), with ongoing attention to heterogeneous backends.*

---

### **4. Performance & Optimization**  
- **Flash Attention (Vulkan)**: Intel Xe flash attention kernels improve latency on split-k paths—specifically for large context windows.  
  🔗 [PR #24406](https://github.com/ggml-org/llama.cpp/pull/24406)  
- **SYCL (Intel Arc)**: IQ3_S/MMVQ reorder-aware dequantization and persistent layouts reduce redundant computation.  
  🔗 [PR #29107](https://github.com/ggml-org/llama.cpp/pull/29107)  
- **CUDA (MoE)**: Top-k fusion for grouped experts recovers ~90% of lost throughput in MoE layers.  
  🔗 [PR #29181](https://github.com/ggml-org/llama.cpp/pull/29181)  
- **GPU Memory Management**: Added optional Vulkan device keepalive (`GGML_VK_KEEPALIVE_MS`) to prevent idle GPU eviction.  
  🔗 [PR #29267](https://github.com/ggml-org/llama.cpp/pull/29267)  
- **Quantization**: IQ4_NL support being added to CUDA flash attention KV cache.  
  🔗 [PR #29293](https://github.com/ggml-org/llama.cpp/pull/29293)  

> ⚡ *Performance gains observed up to 2–3x in MoE decoding and reduced memory pressure in multimodal pipelines.*

---

### **5. Stability & Regressions**  
| Severity | Issue | Summary | Status | Fix PR |
|--------|------|--------|--------|--------|
| Critical | #25618 | Speculative decoding diverges from vanilla on quantized targets (Q4_K_M) under greedy sampling | Open | No fix yet |
| High | #28752 | Severe prompt speed drop post-b10780 on RDNA3 Vulkan | Open | In progress |
| High | #28581 | IQ3_S produces garbage on RTX 5060TI (Blackwell) | Open | No fix |
| High | #28158 | Qwen3.8 DFlash/MTP speculative emits OOB token ID (== n_vocab) on Vulkan | Open | No fix |
| Medium | #29104 | Server silently stops processing when scraped by VictoriaMetrics | Open | No fix |
| Medium | #29288 | OpenVINO fails to run Gemma on Intel Core 7 155h | Open | No fix |

> ❗ *Multiple critical correctness bugs reported in speculative decoding and quantized inference—especially affecting Qwen3.5/3.8 and newer Blackwell GPUs.*

---

### **6. What This Means for Application Developers**  
- **Use `--cache-disk` sparingly**: Disk-based context offloading remains a feature request (#20697), so expect high RAM usage for long contexts.
- **Avoid speculative decoding on quantized models until #25618 is resolved**—results may be inconsistent even under `temperature=0`.
- **For multi-GPU deployments**, avoid `--device Vulkan0` on RDNA3 without testing due to regression in #28752.
- **Enable `GGML_VK_KEEPALIVE_MS`** if running long-lived servers on Vulkan to prevent silent GPU eviction.
- **Leverage new MTP draft vocab trimming support** (`d2t` mapping) for efficient Qwen3.5/MTP workflows—available in recent PRs (#29290, #29143).
- **Monitor release notes before upgrading**—especially for Metal, Vulkan, and SYCL users—due to instability in newer backends.

> 💡 *Developers building LLM gateways should prioritize b11114+ builds for stable server routing and consider using `--no-log` to avoid child process issues.*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# **Ollama Digest – 2026-09-23**

---

### **1. Today's Highlights**  
The Ollama project continues to advance multimodal inference capabilities, with key PRs enabling dynamic image resolution selection for Gemma 4 and performance optimizations for Qwen 3.8 on MLX. Critical stability fixes were merged to address macOS UI hangs and silent failures in structured output parsing, while ongoing work focuses on expanding model support (including MIMO v2.5) and improving tooling compatibility with OpenAI/Anthropic standards.

---

### **2. Releases & Breaking Changes**  
*None*  
No new releases were published in the last 24 hours. However, several critical fixes were merged into main that may impact behavior in upcoming versions:

- **PR #18603**: Dynamic image resolution selection in Gemma 4 (`max_soft_tokens` now per-image, not hardcoded).  
  🔗 [GitHub PR #18603](https://github.com/ollama/ollama/pull/18603)
- **PR #18576 / #18550**: Performance improvements for Qwen 3.8 Flash Next via MLX kernel optimizations (gated-delta, fold dense MLP scales).  
  🔗 [GitHub PR #18550](https://github.com/ollama/ollama/pull/18550)

> ⚠️ Developers using `qwen3.8:flash-next` or high-res vision inputs should expect improved speed and accuracy post-merge.

---

### **3. New Model & Hardware Support**  
- **Gemma 4 Vision Models**: Support for dynamic `max_soft_tokens` across resolutions (70, 140, 280, 560, 1120), resolving OCR issues with high-resolution images.  
  🔗 [Issue #17152](https://github.com/ollama/ollama/issues/17152), [PR #18603](https://github.com/ollama/ollama/pull/18603)
- **Qwen 3.8 Audio/MLX Support**: Active development on audio input (Issue #11798) and MLX-specific optimizations.
- **New Model Requests**: Proposal to add **MIMO v2.5** (1M+ token context) to Ollama Cloud ([Issue #15887](https://github.com/ollama/ollama/issues/15887)).
- **System 1 Models**: Request to support lightweight models like **Kev** and **Laya** ([Issue #18594](https://github.com/ollama/ollama/issues/18594)).

> ✅ *Future-proofing*: Users should monitor for `max_soft_tokens` exposure in API responses once released.

---

### **4. Performance & Optimization**  
- **Qwen 3.8 Prompt Processing (MLX)**: Up to **+19.1% TPS** on M5 Max (8k prompt):  
  - `2k tokens`: 715 → 848 TPS (+18.7%)  
  - `8k tokens`: 695 → 828 TPS (+19.1%)  
  🔗 [PR #18550](https://github.com/ollama/ollama/pull/18550)
- **Memory Efficiency (Qwen 3.8 Flash Next)**: Use of BF16 for expert paths and MXFP8 for non-expert weights reduces memory pressure without sacrificing long-generation quality.  
  🔗 [PR #18078](https://github.com/ollama/ollama/pull/18078)
- **LLM Backend Updates**:  
  - `llama.cpp` updated to upstream b11081 (fixes memory allocation logs, removes obsolete patches).  
    🔗 [PR #18577](https://github.com/ollama/ollama/pull/18577)

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Fix PR |
|--------|------|--------|--------|
| High | macOS app freezes on launch (v0.34.1) due to `osascript` on main thread | Closed | [PR #18593](https://github.com/ollama/ollama/pull/18593) |
| High | Silent failure in `/api/generate` when `think=true` and `format` set | Closed | [Issue #17544](https://github.com/ollama/ollama/issues/17544) |
| High | Structured output broken in homebrew-installed MLX models (missing xgrammar) | Open | [Issue #18597](https://github.com/ollama/ollama/issues/18597) |
| Medium | Windows CUDA detection fails on NVIDIA Blackwell (Driver 616.92) → falls back to CPU | Open | [Issue #18581](https://github.com/ollama/ollama/issues/18581) |
| Medium | Long chats fail silently after 60 seconds (macOS GUI) | Open | [Issue #18368](https://github.com/ollama/ollama/issues/18368) |
| Low | `top_logprobs` capped at 20 despite backend support for higher values | Open | [Issue #18590](https://github.com/ollama/ollama/issues/18590) |

> 🛠️ **Note**: Several regressions are tied to recent version bumps (e.g., v0.33.x → v0.34.x), suggesting potential instability in transition paths.

---

### **6. What This Means for Application Developers**  
- **Use `max_soft_tokens` dynamically**: If building vision agents, avoid hardcoding `280`—expect future APIs to expose this as a runtime parameter ([PR #18603](https://github.com/ollama/ollama/pull/18603)).
- **Avoid `think: true` + `format` in `/api/generate`**: This combination is currently broken; use `/api/chat` instead until fix is released.
- **Be cautious with homebrew MLX builds**: The current install method lacks `xgrammar` support—consider using official Docker or direct binary installs.
- **Monitor for CUDA/Blackwell compatibility**: If deploying on Windows with RTX 50-series, expect fallback to CPU unless patched via [PR #18581](https://github.com/ollama/ollama/issues/18581).
- **Plan for enhanced tooling**: With upcoming JSON schema support ([PR #18488](https://github.com/ollama/ollama/pull/18488)) and custom tools ([Issue #17673](https://github.com/ollama/ollama/issues/17673)), agent workflows will gain more expressive power.

> 💡 **Pro Tip**: For production agents, prefer `docker run --gpus all` with explicit library selection (`OLLAMA_LLM_LIBRARY=vulkan`) to ensure consistent hardware access.  
> 🔗 [PR #18592](https://github.com/ollama/ollama/pull/18592) adds missing Vulkan/MLX deps for Docker.

---  
*Digest compiled from GitHub activity — ollama/ollama @ 2026-09-23*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-09-23**

---

### **1. Today's Highlights**  
The latest release, **v1.102.0**, introduces enhanced security via **cosign-signed Docker images** (verified via sigstore), reinforcing trust in production deployments. Critical fixes address budget enforcement failures for on-prem models (#14004), double-counting in rate limiting (#34140), and cost miscalculations in streaming requests with model aliases (#42161). A major PR (#42619) improves secret resolution by routing it through native Rust backends, reducing latency and improving reliability.

---

### **2. Releases & Breaking Changes**  
- **v1.102.0**: All Docker images are now signed using [cosign](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0) — verify signatures using `cosign verify` to ensure integrity.  
- **Breaking Change**: The `stable/1.102.x` branch now includes backported fixes from #42388 and #41462, including proper handling of upstream handshake refusal and nested metadata promotion to OTEL spans. See [PR #42618](https://github.com/BerriAI/litellm/pull/42618) for details.

---

### **3. New Model & Hardware Support**  
- **Azure Models Added**: 20 new Azure AI models added to the pricing catalog, including `gpt-5.x`, `Grok`, and `azure_ai` variants ([PR #42594](https://github.com/BerriAI/litellm/pull/42594)).  
- **Fireworks AI Sync**: Two additional models now supported with full pricing tracking ([PR #42590](https://github.com/BerriAI/litellm/pull/42590)).  
- **Ollama**: Non-streaming completions now correctly extract `thinking` field from Ollama responses ([PR #41970](https://github.com/BerriAI/litellm/pull/41970)).

---

### **4. Performance & Optimization**  
- **Rust Cost Engine Expansion**: Standalone Rust-based cost calculation now supports image, OCR, video, batch, custom, tiered, and Gemini grounding pricing ([PR #42620](https://github.com/BerriAI/litellm/pull/42620)). This reduces Python overhead and improves throughput in high-volume environments.  
- **Secret Resolution Optimization**: Secrets now resolved via native Rust backends, avoiding repeated Python-level configuration re-parsing ([PR #42619](https://github.com/BerriAI/litellm/pull/42619)), reducing per-request latency.  
- **Logging Efficiency**: Python logs are now dispatched through a shared Rust diagnostics processor ([PR #42616](https://github.com/BerriAI/litellm/pull/42616)), enabling consistent redaction and truncation across services.

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Fix PR | Link |
|--------|------|-------|--------|------|
| High | Budgets not enforced for free (on-prem) models when exceeded | Closed | N/A | [#14004](https://github.com/BerriAI/litellm/issues/14004) |
| High | Per-team per-model rate limits enforced at half configured RPM/TPM | Open | In progress | [#34140](https://github.com/BerriAI/litellm/issues/34140) |
| High | Streaming requests costed as $0 when `model_name` is an alias | Open | In progress | [#42161](https://github.com/BerriAI/litellm/issues/42161) |
| Medium | `/metrics` endpoint exposes PII due to unauthenticated default | Open | N/A | [#24530](https://github.com/BerriAI/litellm/issues/24530) |
| Medium | Response IDs (`resp_<base64>`) break S3/LangFuse logging | Open | N/A | [#31055](https://github.com/BerriAI/litellm/issues/31055) |

---

### **6. What This Means for Application Developers**  
- **Security**: Always validate Docker image signatures using `cosign` before deploying in production.  
- **Cost Accuracy**: Avoid using model aliases in streaming requests — they may be logged as free calls. Use canonical model names where possible.  
- **Budgeting**: Ensure on-prem models are explicitly marked as cost-free in your config; otherwise, budget checks may incorrectly apply even if no external charges exist.  
- **Telemetry & Audit**: Enable `require_auth_for_metrics_endpoint: true` in production. For EU AI Act compliance, consider implementing post-call receipt middleware ([#29895](https://github.com/BerriAI/litellm/issues/29895)) to enable tamper-evident audit trails.  
- **Deployment Reliability**: Use official images with `opentelemetry-instrumentation` installed (fix pending in [#22762](https://github.com/BerriAI/litellm/issues/22762)) or build custom images with it included.

> ✅ **Pro Tip**: Use `config.yaml` schema validation (requested in [#23022](https://github.com/BerriAI/litellm/issues/23022)) — consider generating your config via IDE autocomplete once available.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-09-23**

---

### **1. Today's Highlights**  
Unsloth has released **v0.1.814-beta**, bringing full local inference support for **Qwen-Image-2.1** with integrated agent skills, faster reasoning (60 FPS vs 30 FPS), and improved Linux install reliability. Major progress continues in AMD ROCm training stability and multi-GPU scalability, while new PRs advance NVFP4 quantization for diffusion models and remote code compatibility.

---

### **2. Releases & Breaking Changes**  
- **v0.1.814-beta**: Full Qwen-Image-2.1 support with custom Agent Skills, chat/project management improvements, and 2× faster reasoning blocks (60 FPS).  
- **v0.1.813-beta / v0.1.812-beta**: Same feature set as v0.1.814-beta; likely part of a rapid release cycle to stabilize Qwen-Image-2.1 integration.  
- **Migration Note**: Users encountering model loading issues post-update should check cache integrity—some older model downloads may miss `mmproj` or MTP head files ([#10599](https://github.com/unslothai/unsloth/issues/10599)).

---

### **3. New Model & Hardware Support**  
- ✅ **Qwen-Image-2.1**: Fully supported locally via Unsloth Desktop and Studio. Includes vision-language reasoning, image input handling, and agent skill orchestration.  
- ✅ **AMD RDNA1 (gfx101x)**: Training now works on RX 5700 XT series after PR #11615 disables Triton buffer ops before load ([#11615](https://github.com/unslothai/unsloth/pull/11615)).  
- ✅ **NVFP4 Quantization**: Experimental support for whole-model NVFP4 quantization in DiT and video diffusion models (e.g., Wan2.2-TI2V-5B) via flashinfer backend ([#10729](https://github.com/unslothai/unsloth/pull/10729)).  
- ✅ **NVIDIA ModelOpt FP8**: Loading FP8 checkpoints (`sarvamai/sarvam-105b-fp8`) now supported via transformers’ FP8 quantizer ([#11592](https://github.com/unslothai/unsloth/pull/11592)).  
- ⚠️ **Intel XPU / Vulkan**: Training still fails due to `adamw_8bit` optimizer crashes and tensor offloading bugs ([#10021](https://github.com/unslothai/unsloth/issues/10021), [#9524](https://github.com/unslothai/unsloth/issues/9524)).

---

### **4. Performance & Optimization**  
- 🔥 **2× Faster Reasoning**: Qwen-Image-2.1 now achieves **60 FPS** vs previous 30 FPS thanks to optimized reasoning block scheduling.  
- 🚀 **VAE Decode Compilation**: Studio now compiles VAE decode kernels for DiT families, reducing per-frame latency by up to 15% in benchmarks ([#10889](https://github.com/unslothai/unsloth/pull/10889)).  
- 💡 **FlashInfer NVFP4 Backend**: Introduced per-layer and whole-model NVFP4 support for image/video models, enabling lower memory footprint without quality loss ([#10730](https://github.com/unslothai/unsloth/pull/10730)).  
- 📦 **Compressed INT4/INT8 Checkpoints**: Direct loading into `bitsandbytes` 4-bit format now supported—no pre-conversion needed ([#11537](https://github.com/unslothai/unsloth/pull/11537)).

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Link |
|--------|------|--------|------|
| 🔴 High | AMD GPU detection broken in latest `llama.cpp` build | Closed | [Issue #7485](https://github.com/unslothai/unsloth/issues/7485) |
| 🔴 High | AMD ROCm QLoRA training triggers VM fault/reset on RX 7900 XTX | Open | [Issue #11498](https://github.com/unslothai/unsloth/issues/11498) |
| 🔴 High | Qwen-Image-2.1 requires manual steps to run despite beta status | Open | [Issue #11567](https://github.com/unslothai/unsloth/issues/11567) |
| 🟡 Medium | API keys cannot be copied in Firefox/Brave | Closed | [Issue #11387](https://github.com/unslothai/unsloth/issues/11387) |
| 🟡 Medium | Image generation fails on AMD GPUs (repost) | Open | [Issue #9897](https://github.com/unslothai/unsloth/issues/9897) |
| 🟡 Medium | Hugging Face search fails in blocked regions (e.g., China) | Open | [Issue #11529](https://github.com/unslothai/unsloth/issues/11529) |

> *Note: Several regressions are tied to AMD ROCm stack instability—fixes under active development.*

---

### **6. What This Means for Application Developers**  
- **Build AI Agents with Vision + Skills**: Use Qwen-Image-2.1’s native agent skills and project management tools for end-to-end vision-based workflows.  
- **Target AMD GPUs Carefully**: While RDNA1 is now functional, avoid RX 7900 XTX for QLoRA training until #11498 is resolved. Use dedicated ROCm-enabled cards.  
- **Leverage NVFP4 for Diffusion Apps**: Enable whole-model NVFP4 quantization in Studio for lower-latency image/video generation—ideal for real-time TTS/visual agents.  
- **Avoid Unstable Backends**: Do not use Intel XPU or Vulkan for training—expect crashes due to optimizer and offloading issues.  
- **Prepare for Dynamic Model Loading**: With new `/responses` API selection and multi-model serving enabled ([#11591](https://github.com/unslothai/unsloth/pull/11591)), design apps that can route requests across multiple models dynamically.  

> ✅ **Pro Tip**: Use `--tensor-split` flags explicitly when running MoE models on multi-GPU setups—Studio currently strips them silently ([#11330](https://github.com/unslothai/unsloth/issues/11330)).

---  
*Source: [unslothai/unsloth GitHub](https://github.com/unslothai/unsloth)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*