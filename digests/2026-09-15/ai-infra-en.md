# AI Infrastructure Digest 2026-09-15

> Generated: 2026-09-15 00:52 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-09-15**

---

### **1. Ecosystem Overview**  
The AI inference infrastructure landscape in Q3 2026 is characterized by rapid specialization and convergence toward agentic workloads, with a clear shift from monolithic serving to modular, distributed systems optimized for long-context, speculative decoding, and multi-model orchestration. Projects are increasingly focused on performance at scale—especially on emerging hardware like AMD MI35x, NVIDIA H20/SM120, and Apple Silicon—while also addressing critical stability issues in high-concurrency environments. The rise of MoE architectures, hybrid quantization (e.g., MXFP8/NVFP4), and distributed KV cache systems underscores a move toward efficient, scalable deployment of trillion-parameter models across diverse hardware.

---

### **2. Activity Comparison**  

| Project       | Issues Open (↑) | PRs Merged (↑) | Recent Release | Status |
|---------------|------------------|------------------|----------------|--------|
| vLLM          | 18               | 27               | `v0.29.0`      | Stable |
| SGLang        | 22               | 19               | None           | Active Dev |
| llama.cpp     | 15               | 14               | **v0.4.1**     | Breaking Change |
| Ollama        | 16               | 11               | `v0.34.1-rc1`  | RC |
| LiteLLM       | 12               | 10               | None           | Patched |
| Unsloth       | 11               | 13               | v0.1.808-beta  | Beta |

> 🔍 *vLLM leads in both issue volume and PR activity, reflecting intense engineering focus on core inference optimizations. llama.cpp’s release of v0.4.1 signals a major milestone in model support and backend stability.*

---

### **3. Model Support Race**  

| Model / Architecture             | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------------------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek-V4.1-Flash**         | ✅ (SWA-bounded replay) | ❌ | ❌ | ❌ | ❌ | ❌ |
| **MoE (Nemotron-3, MegaMoE)**   | ✅ (RFC: incremental offloading) | ✅ (crashes on B300/H20) | ❌ | ❌ | ❌ | ❌ |
| **Qwen3.8-Flash-Next-FP8**     | ✅ (stability fix in progress) | ❌ (critical crash) | ❌ | ❌ | ❌ | ❌ |
| **SenseNova-U1/U1.5**           | ⚠️ (tracking) | ✅ (CI testing) | ✅ (via PR #28919) | ✅ (feature request) | ❌ | ✅ (catalog sync) |
| **Maple 20B-A1B, Tencent Hy 4** | ❌ | ❌ | ✅ (v0.4.1) | ❌ | ❌ | ❌ |
| **Gemma 4**                     | ❌ | ❌ | ❌ | ❌ | ✅ (Mantle) | ❌ |
| **GLM-5.3-Flash**               | ❌ (word salad) | ❌ (crash with spec decode) | ❌ | ❌ | ❌ | ❌ |

> 🏆 **Winner: llama.cpp** — fastest adoption of new GGUF models (Maple, Hy 4, Spark2.5).  
> 🥈 **Runner-up: SGLang & vLLM** — strong momentum on DeepSeek-V4.1 and MoE support, but with notable stability regressions.  
> 🥉 **Emerging: Unsloth** — leading in local model discovery and UI integration, especially in Dockerized environments.

---

### **4. Performance Frontier**  

| Focus Area                 | Leading Projects                          | Key Developments |
|----------------------------|-------------------------------------------|------------------|
| **KV Cache Optimization**  | vLLM, SGLang, llama.cpp                   | SWA-bounded replay (vLLM), HiCache hybrid pooling (SGLang), DFlash re-scan fixes (vLLM), FP4/KV storage (SGLang) |
| **Speculative Decoding**   | vLLM, SGLang                              | FlashMLA + DFlash tuning (vLLM), PP + EAGLE/MTP compatibility (SGLang), SM120 crash mitigation |
| **Quantization & Precision** | vLLM, SGLang, llama.cpp               | MXFP8/NVFP4 (vLLM), FP4 KV (SGLang), CUDA F32 fallback (llama.cpp) |
| **Distributed Serving**    | SGLang, vLLM                              | Distributed KV cache (SGLang roadmap), async TP + sequence parallelism (vLLM) |
| **Kernel-Level Optimization** | vLLM, SGLang, llama.cpp              | Triton kernel fixes (vLLM), RDNA3 fused MoE (llama.cpp), FlashInfer + MTP crashes (SGLang) |

> 📈 **Trend**: Kernel-level tuning (Triton, FlashMLA, FlashInfer) is now central to achieving peak throughput—especially on high-end GPUs (H20, SM120, MI355X).

---

### **5. Layer Positioning**  

| Project       | Primary Layer                | Key Differentiators |
|---------------|------------------------------|---------------------|
| **vLLM**      | **High-Performance Serving Engine** | Optimized for throughput, low latency, MoE, and speculative decoding on GPU clusters |
| **SGLang**    | **Agentic Inference Framework** | Built for agent pipelines: distributed KV, speculative decoding, async execution, tool call fidelity |
| **llama.cpp** | **Local Runtime / Edge Execution** | CPU/GPU flexibility, GGUF support, Vulkan/SYCL/CUDA backends; ideal for edge and offline use |
| **Ollama**    | **Developer-Friendly Local Gateway** | Simplified CLI, MLX/Apple Silicon optimization, model management via API/server |
| **LiteLLM**   | **Multi-Provider Inference Gateway** | Unified API layer for cost tracking, rate limiting, budgeting, and cross-cloud routing |
| **Unsloth**   | **Agent Studio & UX Platform** | End-to-end agent experience: sandboxing, chat replay, model discovery, Docker integration |

> 🧩 **Layer Insight**: The ecosystem is no longer just about inference engines—developers now need **orchestration layers** (LiteLLM), **agent platforms** (Unsloth), and **local runtime wrappers** (Ollama, llama.cpp) to build production-grade applications.

---

### **6. Trend Signals & Developer Guidance**  

#### **Industry Trends Extracted**:
1. **MoE Scaling Is Real**: Incremental expert offloading (vLLM RFC #38256) and full MoE support (SGLang, vLLM) signal that >100B models are becoming deployable on mid-tier hardware.
2. **Hybrid Quantization Dominance**: MXFP8, NVFP4, FP4, and W4A8 are now standard—not just for compression, but for performance (vLLM, SGLang).
3. **Distributed Agentic Workloads Are the New Benchmark**: SGLang’s focus on distributed KV cache and pipeline parallelism reflects the shift from single-model inference to multi-stage agent workflows.
4. **Stability Over Features**: Despite aggressive feature pushes, multiple projects report **critical crashes** (H20, SM120, B300) — indicating that performance gains are being offset by instability in real-world deployments.
5. **Hardware Diversification**: ROCm expansion (vLLM, SGLang, Unsloth), NPU support (Ollama), and Apple Silicon optimization (Ollama, Unsloth) show a move beyond NVIDIA dominance.

#### **What Developers Should Watch**:
- ✅ **Prioritize stability over cutting-edge features** — avoid `max_num_seqs > 256` on H20 (vLLM), disable `mixed-chunk` with Mamba (SGLang), and monitor MLX memory on Apple Silicon (Ollama).
- ✅ **Plan for MoE scalability** — vLLM’s incremental offloading RFC will enable deployment of models like Nemotron-3 Super-120B on 8x A100s.
- ✅ **Use LiteLLM for multi-tenant gateways** — recent fixes ensure accurate billing and rate limiting, crucial for SaaS and API products.
- ✅ **Leverage Unsloth’s local model discovery** if using Docker-based agent stacks — seamless integration with Ollama/LM Studio saves bandwidth and time.
- ✅ **Monitor nightly builds** — vLLM and SGLang are rapidly evolving; stable releases may lag behind critical fixes.

> 🔮 **Bottom Line**: The future of AI infrastructure lies not in isolated engines, but in **cohesive, observable, and resilient stacks** where serving engines, gateways, and agent platforms interoperate seamlessly under real-world load.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest — 2026-09-15

---

### **1. Today's Highlights**  
The vLLM project continues to deepen its support for DeepSeek-V4.1 and MoE architectures, with multiple PRs advancing speculative decoding (SWA-bounded replay), FlashMLA KV record optimization, and DFlash performance tuning. Critical stability fixes address illegal memory access in Triton kernels under high concurrency on H20 and SM120 GPUs, while new telemetry and error handling improvements enhance observability in distributed deployments.

---

### **2. Releases & Breaking Changes**  
*None reported in the last 24 hours.*  
No new releases or breaking API/config changes were published. The latest stable version remains `v0.29.0`.

---

### **3. New Model & Hardware Support**  
- ✅ **DeepSeek-V4.1-Flash**: Full encoder-side SWA bounded replay support merged via [#56227](https://github.com/vllm-project/vllm/pull/56227) and decoder-side completion via [#56752](https://github.com/vllm-project/vllm/pull/56752). This enables efficient prefix caching and reduces redundant KV storage.  
- ✅ **FlashMLA V4.1 KV Records**: Added MXFP8/NVFP4 support and fused attention kernel for improved precision and throughput ([#56893](https://github.com/vllm-project/vllm/pull/56893)).  
- ✅ **ROCm Support Expansion**: Fixes for misrouting race conditions in multi-decode P/D disagg ([#51681](https://github.com/vllm-project/vllm/pull/51681)), and AITER QK-norm fusion enabled for MiniMax-M3 ([#54535](https://github.com/vllm-project/vllm/pull/54535)).  
- ✅ **CPU Memory Utilization CLI Alias**: Added `--cpu-memory-utilization` as an alias for `--gpu-memory-utilization` to reduce confusion in CPU-only mode ([#56547](https://github.com/vllm-project/vllm/pull/56547)).

---

### **4. Performance & Optimization**  
- 📈 **DFlash Speculative Decoding Optimization**: Addressing a net slowdown at long contexts (~185k tokens) due to full KV re-scan per cycle in hybrid GDN models ([#54691](https://github.com/vllm-project/vllm/issues/54691)); ongoing work to add per-sequence-length disable hooks.  
- ⚡ **DeepSeek-V4.1 on ROCm (MI355X)**: Measured 35.89 tok/s at concurrency 1 across 8x MI355X (TP4); ~8.97 tok/s per GPU — highlighting untapped potential for further optimization ([#56506](https://github.com/vllm-project/vllm/issues/56506)).  
- 🔍 **Profiling Enhancements**: CUDA graph capture profiling extended to V2 model runner and encoder path ([#54061](https://github.com/vllm-project/vllm/pull/54061)), enabling deeper insight into inference bottlenecks.  
- 🧠 **MoE Expert Offloading RFC**: Incremental MoE expert offloading with GPU cache + async pipeline proposed ([#38256](https://github.com/vllm-project/vllm/issues/38256)) — critical for running > VRAM-capacity models on smaller hardware.

---

### **5. Stability & Regressions**  
- ❌ **Critical Crash**: Illegal memory access in `dsv4_topk` MoE routing kernel under high concurrency on **NVIDIA H20 (SM90)** when `max_num_seqs > 256` — mitigated by reducing `max_num_seqs` to 256 ([#56389](https://github.com/vllm-project/vllm/issues/56389)).  
- ❌ **SM120 GPU Crash**: FlashInfer + MTP speculative decoding crashes on DGX Spark (SM121) with GQA=16 models due to illegal memory access; Triton backend works correctly ([#37754](https://github.com/vllm-project/vllm/issues/37754)).  
- ❌ **GLM-5.3-Flash "Word Salad" Degradation**: Multi-turn agentic use leads to repeated-token output — suspected sampling or context accumulation issue ([#56605](https://github.com/vllm-project/vllm/issues/56605)).  
- ❌ **Batch Invariance Breakage**: With sequence parallelism + async TP enabled (`VLLM_BATCH_INVARIANT=1`), batch outputs vary inconsistently — impacts deterministic inference ([#56370](https://github.com/vllm-project/vllm/issues/56370)).  
- ⚠️ **RDNA3 Fused MoE Bug**: Hardcoded 2x gated-activation factor breaks non-gated (ReLU2) models like Nemotron-3 on gfx1100 — fixed in PR [#56790](https://github.com/vllm-project/vllm/pull/56790).  

> ✅ **Fixes in Progress**: PRs #56790 (RDNA3), #56389 (H20), #56370 (batch invariance) are actively being addressed.

---

### **6. What This Means for Application Developers**  
- **Use caution with high-concurrency DeepSeek-V4.1 deployments on H20** — limit `max_num_seqs` to 256 until fix lands.  
- **Leverage new SWA-bounded replay** for DeepSeek-V4.1 to reduce KV cache overhead and improve efficiency in long-context scenarios.  
- **Expect instability on SM120/GPU-121 hardware with FlashInfer + MTP speculative decoding** — fall back to Triton backend if needed.  
- **Monitor batch invariance behavior** when using async TP or sequence parallelism; consider disabling `VLLM_BATCH_INVARIANT=1` temporarily if deterministic output is required.  
- **Plan for future MoE scalability** via incremental offloading — this will enable deployment of large MoE models (e.g., Nemotron-3 Super-120B) on mid-tier hardware.  
- **Upgrade to latest nightly builds** to benefit from ROCm and CUDA optimizations, especially for multimodal and spec-decoding workloads.

---  
*Data source: [vLLM GitHub](https://github.com/vllm-project/vllm)*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest — 2026-09-15

---

### **1. Today's Highlights**

SGLang continues its aggressive push toward scalable, high-performance inference for agentic workloads, with critical progress on distributed KV cache systems and speculative decoding compatibility. Key developments include the resolution of a major crash in Qwen3.8-Flash-Next-FP8 under concurrent load and ongoing efforts to stabilize HiCache’s hybrid cache pooling behavior. The project is also actively addressing performance bottlenecks under NVIDIA Confidential Computing (CC) and enhancing support for AMD ROCm and NPU backends.

---

### **2. Releases & Breaking Changes**

*No new releases or breaking changes reported in the last 24 hours.*

---

### **3. New Model & Hardware Support**

- **SenseNova-U1/U1.5**: Tracking integration via [Issue #37742](https://github.com/sgl-project/sglang/issues/37742), leveraging official reference implementation.
- **AMD ROCm Support**: Expanded CI testing for `AgentX Qwen3.5 MXFP4 + MTP tp2` on MI35x ([PR #38812](https://github.com/sgl-project/sglang/pull/38812)), including PTPC FP8 KDA projections on gfx950 ([PR #38764](https://github.com/sgl-project/sglang/pull/38764)).
- **NPU Optimizations**: Added device sync avoidance in Ascend sampling ([PR #39404](https://github.com/sgl-project/sglang/pull/39404)) and fixed router GEMM output type on NPU ([PR #34861](https://github.com/sgl-project/sglang/pull/34861)).
- **Diffusion Runtime**: CLI now avoids loading diffusion runtime during backend auto-detection ([PR #39407](https://github.com/sgl-project/sglang/pull/39407)).

---

### **4. Performance & Optimization**

- **Speculative Decoding & Pipeline Parallelism**: PRs advancing compatibility between PP and EAGLE/MTP speculative decoding ([PR #30775](https://github.com/sgl-project/sglang/pull/30775)), enabling better scaling on PCIe-only multi-GPU systems.
- **Confidential Computing (CC)**: Fixes for D2H readback serialization under CC on Blackwell GPUs ([PR #36810](https://github.com/sgl-project/sglang/pull/36810), [PR #31447](https://github.com/sgl-project/sglang/pull/31447)), restoring decode overlap and scheduler throughput.
- **Memory Efficiency**: PRs optimizing HiCache index storage by compacting DSA indexer host layers ([PR #38426](https://github.com/sgl-project/sglang/pull/38426)) and fixing KV id widening in MLA retraction ([PR #39487](https://github.com/sgl-project/sglang/pull/39487)).
- **DeepSeek-V4 Perf**: Continued focus on SM100/SM103 optimizations, including TRT-LLM attention integration ([Issue #33636](https://github.com/sgl-project/sglang/issues/33636)) and FP4 KV storage ([Issue #38902](https://github.com/sgl-project/sglang/issues/38902)).

---

### **5. Stability & Regressions**

| Issue | Severity | Summary | Fix Status |
|------|----------|--------|------------|
| [Issue #37633](https://github.com/sgl-project/sglang/issues/37633) | Critical | Hard crash in QSA prefill path at ~22 concurrent requests (Qwen3.8-Flash-Next-FP8, H20 TP8) | No fix PR yet; suppressed by `CUDA_LAUNCH_BLOCKING=1` |
| [Issue #39342](https://github.com/sgl-project/sglang/issues/39342) | High | `--enable-mixed-chunk` corrupts Mamba radix cache checkpoints on hybrid GDN models | No fix PR yet |
| [Issue #39147](https://github.com/sgl-project/sglang/issues/39147) | High | HiCacheFile reports unrestorable prefix due to incorrect hybrid pool restoration logic | No fix PR yet |
| [Issue #39072](https://github.com/sgl-project/sglang/issues/39072) | Medium | GLM-5.3 crashes with disagg decode + dp-attention + spec decode | No fix PR yet |
| [Issue #37559](https://github.com/sgl-project/sglang/issues/37559) | Medium | CUDA illegal memory access in MXFP8FP4/W4A8 MegaMoE path on B300 | No fix PR yet |

> ⚠️ Multiple critical stability issues persist in FP8/MegaMoE paths and hybrid model handling—especially on B300 and H20 hardware.

---

### **6. What This Means for Application Developers**

- **Agentic Workloads**: Prioritize using `--dcp-size > 1` and monitor HiCache behavior; expect instability in hybrid cache pools until fixes land.
- **High-Concurrency Deployment**: Avoid `--enable-mixed-chunk` with Mamba hybrid models until [PR #39342](https://github.com/sgl-project/sglang/pull/39342) is resolved. Use `CUDA_LAUNCH_BLOCKING=1` as temporary workaround for Qwen3.8 crashes.
- **Multi-GPU Scaling**: If you’re on PCIe-only systems without NVLink, enable pipeline parallelism with speculative decoding—this is now actively being stabilized via [PR #30775](https://github.com/sgl-project/sglang/pull/30775).
- **Model Compatibility**: For SenseNova-U1, AMD MI35x, and NPU deployments, ensure your environment matches the latest CI test configurations in PRs like [#38812](https://github.com/sgl-project/sglang/pull/38812) and [#38764](https://github.com/sgl-project/sglang/pull/38764).
- **Router & Tokenizer**: The router now uses `hf-hub` 1.0 ([PR #39496](https://github.com/sgl-project/sglang/pull/39496)), improving token handling for gated repos—update your deployment scripts accordingly.

> ✅ **Recommendation**: Monitor [Issue #21846](https://github.com/sgl-project/sglang/issues/21846) for roadmap updates on distributed KV cache—critical for large-scale agentic systems.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# **llama.cpp Digest – 2026-09-15**

---

### **1. Today's Highlights**  
The release of **v0.4.1** brings critical support for new models including *Maple 20B-A1B*, *Tencent Hy 4*, and *Spark2.5*, alongside major improvements in JSON schema handling, chat parsing, and server process management. Key performance and stability fixes were landed across Vulkan, SYCL, and CUDA backends—particularly around Flash Attention fallbacks, GPU memory allocation, and speculative decoding correctness.

---

### **2. Releases & Breaking Changes**  
- **v0.4.1** released: [GitHub Release](https://github.com/ggml-org/llama.cpp/releases/tag/v0.4.1)  
  - `llama_sampler_chain_n()` now returns `int32_t` instead of `int` — a breaking API change requiring downstream updates.  
  - Updated `ggml` to v0.24.0 with improved backend compatibility and memory safety fixes.  
  - CI now includes Ubuntu-CUDA builds (12.8/13.3) for x64+arm64 platforms.  
  - Added GCC 14 support for CUDA arm64 builds in CI pipeline.

---

### **3. New Model & Hardware Support**  
- ✅ **New Models**:  
  - *Maple 20B-A1B* ([Hugging Face](https://huggingface.co/maple-ai/Maple-20B-A1B-GGUF))  
  - *Tencent Hy 4* ([Hugging Face](https://huggingface.co/TencentAI/Hy-4-GGUF))  
  - *Spark2.5* ([Hugging Face](https://huggingface.co/Spark-ai/Spark2.5-GGUF))  
  - *SenseNova U1* added via PR #28919 ([PR](https://github.com/ggml-org/llama.cpp/pull/28919)) — supports text/image-to-text generation.

- ✅ **Backends & Hardware**:  
  - HIP: Enabled FP32 accumulation on CDNA devices via fattn-mma (#28576).  
  - SYCL: Improved radix-select-based top-k for large k values; better multi-GPU support on Intel Arc Pro B50/B70 (#28670).  
  - Vulkan: Continued work on Flash Attention fallback path stabilization (#24066, #28752).

---

### **4. Performance & Optimization**  
- **CUDA**: Fallback to F32 precision on devices lacking BF16 hardware (NVIDIA ≥ AMPERE, AMD ≥ RDNA3 / CDNA), improving compatibility without sacrificing correctness (#28846).  
- **SYCL**:  
  - Coalesced MKL-FA softmax loads to reduce kernel launch overhead (#28918).  
  - Introduced radix select for top_k to avoid CPU round-trip fallbacks (#28670).  
- **Vulkan**: Ongoing optimization of flash attention path to prevent O(N²) degradation during prompt processing (#27638).  
- **GPU Memory**: Addressed excessive scratchpad allocations (>2GB) when `ngram-mod` is enabled under SYCL (#28860).

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Impact | Fix PR? |
|--------|------|--------|--------|---------|
| High | Vulkan: Performance drop in recent builds (RX 6600, Qwen3.5-9B-Q5_K_M) | Open (#24066) | ~44 comments, widespread user impact | No |
| High | SYCL: Multi-GPU crash on Intel Arc Pro B50 + A770 | Open (#27888) | Reproducible on dual-GPU systems | No |
| High | Vulkan: Severe prompt processing speed drop after b10780 (RDNA3) | Open (#28752) | Critical for latency-sensitive apps | No |
| Medium | SYCL: TDR reset on dual Arc Pro B70 with DFlash2 draft model | Open (#28778) | Windows-only, driver-level crash | No |
| Medium | ggml: Heap corruption due to PCH on macOS Apple Silicon | Open (#28858) | Affects local builds on M-series Macs | Fixed in #28882 (but not yet merged) |
| Low | Garbled output with Vulkan + Hexagon backend combo (`--device Vulkan0,HTP0`) | Closed (#28891) | Deterministic but invalid output | Patched |

> ⚠️ **Note**: Multiple issues indicate instability in SYCL and Vulkan backends under mixed-mode or high-load scenarios.

---

### **6. What This Means for Application Developers**  
- **API Users**: Update your code to handle the `llama_sampler_chain_n()` return type change from `int` to `int32_t`.  
- **Agent Frameworks**: The new `model: SenseNova U1` support expands multimodal capabilities. Use `--model-draft` cautiously with SYCL due to known TDR risks.  
- **Deployment**: Avoid `--device Vulkan0,HTP0` until the backend interaction bug is resolved. Prefer single-backend inference unless testing hybrid setups.  
- **Monitoring**: Use `/metrics` endpoint safely—PR #28915 exempts it from API key checks, enabling Prometheus scraping.  
- **Model Management**: Planning underway for server-side model APIs (#21779); expect future integrations with dynamic reload/download endpoints.

👉 **Recommendation**: For production use, stick to stable v0.4.1 builds with validated backends (CPU, CUDA). Monitor [issue #24066](https://github.com/ggml-org/llama.cpp/issues/24066) and [PR #28918](https://github.com/ggml-org/llama.cpp/pull/28918) for Vulkan/SYCL performance improvements.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-09-15**

---

### **1. Today's Highlights**  
The latest release, `v0.34.1-rc1`, introduces critical stability fixes for MLX-based inference on Apple Silicon, including prefix cache eviction improvements and OOM handling during model loading. Key issues around tool-call parsing, structured output formatting, and concurrent decode correctness have been spotlighted in active PRs and bug reports, indicating ongoing refinement of the MLX backend and API contract fidelity.

---

### **2. Releases & Breaking Changes**  
- **`v0.34.1-rc1`** (GitHub: [Release](https://github.com/ollama/ollama/releases/tag/v0.34.1-rc1))  
  - Fixed ChatGPT model selector UI spacing.  
  - Enhanced MLX runner memory safety: now checks free system memory before loading new models and evicts prefix cache snapshots proactively.  
  - Raised token repeat limit to 100 and now returns an error instead of silently truncating input.  

> ⚠️ *No breaking API changes in this release, but `typical_p` is being deprecated in upcoming versions (see #18448).*

---

### **3. New Model & Hardware Support**  
- **New Feature Request**: Add support for **Qualcomm IQ-9075 NPU/GPU** (via #18445) — relevant for devices like Raxda Fogwise Airband.  
- **Feature Request**: Add support for **Rockchip NPU (RK3588/RK3576)** — targeted at edge AI deployments (#9268).  
- **ROCm 10 for Windows** support requested (#18435), expanding AMD GPU availability beyond Linux.  
- **Q2_0 GGUF tensor support** added via PR #18443 — enables use of newer, more efficient quantization formats in GGUF models.

---

### **4. Performance & Optimization**  
- **MLX Prefix Cache Memory Management**: A hard-coded 8 GiB budget causes heavy swap on 32 GB Apple Silicon systems during agent workloads (#18131). Work in progress to make this dynamic or configurable.  
- **Model Loading Performance Regression**: Users report ~5x slower load times post-`0.32.13`, especially on CUDA (RTX 3090) — confirmed in #18373 with reproducible test case.  
- **Concurrent Decode Issues**: `gemma4:26b` shows EOS loss under concurrent decoding; `qwen3.8-27b` performs cleanly on same hardware (#18442), suggesting model-specific kernel inefficiencies.  
- **Prefill Cache Persistence (Experimental)**: PR #17953 enables saving KV cache across runner reloads via `OLLAMA_PREFILL_CACHE=1`, reducing recompute overhead on long context restarts.

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | PR/Link |
|--------|------|--------|--------|
| Critical | MLX runner crashes mid-request due to OOM during long-context loads with paged-out snapshots (#18231) | Open | [PR #18438](https://github.com/ollama/ollama/pull/18438) |
| High | `kimi-k3:cloud` crashes on image content in tool-role messages (#18426) | Open | — |
| High | Intermittent "model not found" errors due to case-insensitive canonicalization bug (#18447) | Open | [PR #18438](https://github.com/ollama/ollama/pull/18438) |
| Medium | Stray `.` prepended to JSON output in structured responses with thinking enabled (#18441) | Open | — |
| Medium | Tool-call object keys with spaces cause silent drop (#18390) | Open | — |
| Medium | Anthropic-compatible endpoint hoists `system` role into top block, breaking prefix cache (#18431) | Open | — |
| Low | `previous_response_id` returns empty response despite valid input (#18419) | Open | [PR #18439](https://github.com/ollama/ollama/pull/18439) |

> ✅ *Fixes underway for model lookup (`#18438`) and `previous_response_id` behavior (`#18439`).*

---

### **6. What This Means for Application Developers**  
- **Use `OLLAMA_PREFILL_CACHE=1`** experimentally to reduce latency on repeated long-context queries — especially useful for agents and chat apps.  
- **Avoid `typical_p`** in new model definitions; it will be removed in future releases.  
- **Be cautious with tool calls containing spaces in object keys** — they may be silently dropped (see #18390).  
- **Monitor MLX memory usage** on Apple Silicon — the 8 GiB prefix cache cap can trigger heavy swapping during sustained agent workloads.  
- **For cloud/local hybrid workflows**, expect instability with `kimi-k3:cloud` when using image inputs — avoid until #18426 is resolved.  
- **Consider using LLMxRay** (PR #18444) for local observability: real-time token streaming diagnostics, prompt-cache reuse analysis, and multi-endpoint protocol comparison.

> 🛠️ *Developers building agents should validate tool-call parsing, structured output, and state continuity under concurrency and long contexts.*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-09-15**

---

### **1. Today's Highlights**  
The LiteLLM project saw a wave of critical fixes focused on cost accuracy, rate limiting correctness, and proxy stability—especially around budgeting, streaming, and API key handling. Key PRs addressed double-charging in Gemini embeddings (#41157, #41151), corrected per-team rate limits that were halved due to double-counting (#34140), and improved logging control via `LITELLM_LOG` (#10788). These changes are vital for production-grade inference gateways managing multi-tenant workloads.

---

### **2. Releases & Breaking Changes**  
*No new releases in the last 24 hours.*  
However, several breaking-quality fixes were merged:
- **Cost billing consistency**: Fixed double-charging of `gemini-embedding-2` across modalities (audio/token) via #41157 and #41151.
- **Rate limiter logic**: Resolved v3 rate limiter incorrectly enforcing half the configured `model_per_team` limit (#34140).
- **Logging behavior**: Addressed inability to disable `INFO` request logs despite `LITELLM_LOG=ERROR` (#10788).

> 🔗 [PR #41157](https://github.com/BerriAI/litellm/pull/41157) | [PR #34140](https://github.com/BerriAI/litellm/pull/34140) | [Issue #10788](https://github.com/BerriAI/litellm/issues/10788)

---

### **3. New Model & Hardware Support**  
- Added support for **Gemma 4** via the Mantle endpoint (#30657).
- Synced pricing for **4 Vertex AI models**, including updated batch and audio costs (#41154).
- Backfilled missing fields (context window, tool flags) for **Fireworks serverless models** like `glm-5p3-fast` (#41152).

> 🔗 [PR #30657](https://github.com/BerriAI/litellm/pull/30657) | [PR #41154](https://github.com/BerriAI/litellm/pull/41154) | [PR #41152](https://github.com/BerriAI/litellm/pull/41152)

---

### **4. Performance & Optimization**  
- Optimized aggregated usage queries by restricting `api_key` rollups to top keys, preventing OOM crashes on large deployments with thousands of keys (#41155).
- Introduced **stateless replay identity** for testing, improving replay accuracy by matching headers, queries, and exact values (#41149).
- Refactored Rust bridge lifecycle to centralize token counting at public API boundaries, enabling more predictable performance profiling (#41153).

> 🔗 [PR #41155](https://github.com/BerriAI/litellm/pull/41155) | [PR #41149](https://github.com/BerriAI/litellm/pull/41149) | [PR #41153](https://github.com/BerriAI/litellm/pull/41153)

---

### **5. Stability & Regressions**  
High-severity issues reported today:
1. **BudgetExceededError with stale spend** — Virtual keys reject requests even when current spend is below budget (#27735). *Fix pending.*
2. **Health checks fail hard on offline hosts** — Causes proxy downtime during ad-hoc availability (e.g., HomeLab setups) (#34281). *Fix in progress.*
3. **Streaming reasoning state lost** — Cache hits drop `reasoning_text` in both streaming and non-streaming responses (#40654, #40887). *Fix PRs open.*
4. **Admin UI triggers 404 prefetch storm** — Full page reloads on sidebar navigation cause client-side flooding (#41029). *Fix merged.*

> 🔗 [Issue #27735](https://github.com/BerriAI/litellm/issues/27735) | [Issue #34281](https://github.com/BerriAI/litellm/issues/34281) | [PR #40654](https://github.com/BerriAI/litellm/pull/40654) | [PR #41029](https://github.com/BerriAI/litellm/pull/41029)

---

### **6. What This Means for Application Developers**  
- **Billing accuracy is now stricter**: If you're using `gemini-embedding-2`, ensure your cost tracking aligns with the new per-modality charge model. Avoid over-provisioning budgets.
- **Use `LITELLM_LOG=ERROR` consistently**: The fix for #10788 ensures log suppression works as expected—ideal for reducing noise in high-throughput systems.
- **Avoid relying on cached reasoning** if your app depends on incremental reasoning states—this data may be dropped on cache hits (#40654).
- **Update deployment configs**: If using team-based rate limits, verify actual RPM/TPM caps match expectations—current behavior enforces only half the configured value until #34140 is deployed.
- **Monitor UI behavior**: In large-scale deployments, avoid rapid sidebar navigation in the Admin UI to prevent unnecessary load.

> 🛠️ Pro tip: Prioritize merging latest changes from `main` to avoid regressions in rate limiting, budgeting, and logging. Use the new `fix(spend_logs)` PR to ensure user emails appear in request logs for auditability.

---  
*Digest generated: 2026-09-15 | Source: GitHub @ BerriAI/litellm*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-09-15**

---

### **1. Today's Highlights**  
The Unsloth ecosystem continues to mature with significant UX and security improvements, particularly around sandboxing, tool call fidelity, and model visibility in Docker environments. Key PRs include enhanced chat replay accuracy, improved handling of nested tool call parameters, and a fix for local model discovery in containerized Studio instances. A critical regression in memory management on slow CPUs has been addressed via a streaming stability patch.

---

### **2. Releases & Breaking Changes**  
*None reported in the last 24 hours.*  
No new releases or breaking API/config changes were published. The latest stable version remains v0.1.808-beta (2026.9.4), with ongoing refinements in the `main` branch focused on internal stability and user experience.

---

### **3. New Model & Hardware Support**  
- ✅ **AMD ROCm Support**: Progress continues on full AMD GPU compatibility via the `feature/docker-rocm-support` branch (#6230). This enables symmetric Docker image parity between NVIDIA and AMD backends.
- ✅ **Local Model Discovery in Docker**: PR #10936 adds support for detecting and exposing LM Studio, Ollama, and Hermes models when running Unsloth Studio in Docker — enabling seamless use of locally hosted GGUF/MLX models without re-downloading.
- ✅ **Multi-API Provider Catalog**: PR #10957 extends the models.dev catalog to include reasoning effort levels and image support details from OpenRouter and other providers, improving UI accuracy across APIs.

> 🔗 [PR #10936](https://github.com/unslothai/unsloth/pull/10936) | [PR #10957](https://github.com/unslothai/unsloth/pull/10957)

---

### **4. Performance & Optimization**  
- 🚀 **Memory Usage Stability**: A high-severity issue (#10921) reported by users on low-CPU systems showed persistent memory growth post-llama.cpp update. Fixed via PR #10911, which maintains an active SSE stream during prefill to prevent premature termination.
- ⚙️ **Build Cache Cleanup**: PR #10959 removes build caches from Docker publish jobs, reducing registry storage footprint by **68.9 GB** across `unsloth/unsloth` tags — critical for CI/CD efficiency and hub compliance.
- 🔍 **Tool Call Parsing Efficiency**: PR #10927 optimizes blocked command detection by pre-compiling regex patterns, eliminating redundant `re.escape` calls per execution — improving latency in high-throughput agent workflows.

> 🔗 [PR #10911](https://github.com/unslothai/unsloth/pull/10911) | [PR #10959](https://github.com/unslothai/unsloth/pull/10959) | [PR #10927](https://github.com/unslothai/unsloth/pull/10927)

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Fix PR |
|--------|------|--------|-------|
| 🔴 High | `llama-server` crashes on image input with Gemma 4 due to small default `ubatch` (#10559) | Closed | N/A |
| 🔴 High | `unsloth start pi` fails repeatedly on slow CPU hosts (`Error: terminated`) (#10912) | Open | [PR #10911](https://github.com/unslothai/unsloth/pull/10911) |
| 🔴 High | MLX model auto-switch fails with 404 unless preloaded (#10951) | Open | N/A |
| 🟡 Medium | Tool call truncation due to internal deduplication logic (#10839) | Open | N/A |
| 🟡 Medium | Safety checks bypassed for destructive commands like `rm` (#10835) | Closed | N/A |

> 🔗 [Issue #10559](https://github.com/unslothai/unsloth/issues/10559) | [Issue #10912](https://github.com/unslothai/unsloth/issues/10912) | [Issue #10951](https://github.com/unslothai/unsloth/issues/10951)

---

### **6. What This Means for Application Developers**  
- **Enhanced Agent Reliability**: Faithful replay of durable runs (PR #10910) ensures that agents can resume exactly where they left off — including streamed outputs, pending approvals, and card states — crucial for long-running or multi-step workflows.
- **Secure Sandboxing is Now Enforced**: PR #10907 introduces explicit permission prompts before any tool accesses files outside the sandbox, mitigating risks from malicious or misconfigured tools.
- **Better Model Integration in Containers**: With PR #10936, developers using Docker can now seamlessly integrate local models from LM Studio/Ollama/Hermes into their pipelines without additional setup steps.
- **Avoid Pitfalls in Tool Design**: Be cautious with parameter ordering in tool calls (e.g., `start_cursor` vs `page_size`) — PR #10935 fixes silent field loss due to llama.cpp’s strict schema order.

> 💡 **Actionable Tip**: If deploying Unsloth Studio in Docker, ensure `/workspace/work` is mounted persistently to avoid losing downloaded models (#10923).

---  
*Digest compiled from GitHub activity: unslothai/unsloth · 2026-09-15*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*