# AI Infrastructure Digest 2026-09-05

> Generated: 2026-09-05 00:21 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

---

### **Cross-Project AI Infrastructure Ecosystem Report – 2026-09-05**

---

#### **1. Ecosystem Overview**  
The AI inference infrastructure landscape in September 2026 is marked by rapid specialization and convergence at the edges: high-performance serving engines (vLLM, SGLang) are pushing speculative decoding and KV cache efficiency to new limits; local runtimes (llama.cpp, Unsloth) are gaining parity with cloud-grade capabilities through heterogeneous backend support and on-demand loading; LLM gateways (LiteLLM) are evolving into intelligent routing and observability platforms; while fine-tuning frameworks (Unsloth) are expanding into distributed multi-node inference. Critical stability issues—particularly around long-context handling, quantization, and speculative decoding—reveal growing complexity in production-grade deployment. The ecosystem is no longer just about speed—it’s about *predictable*, *resilient*, and *orchestratable* inference across hybrid environments.

---

#### **2. Activity Comparison**

| Project       | Issues Open (24h) | PRs Merged (24h) | New Release? | Key Activity Focus |
|---------------|-------------------|------------------|--------------|--------------------|
| **vLLM**      | 7                 | 8                | No           | Speculative decoding, FP8 stability, Triton AOT |
| **SGLang**    | 5                 | 6                | No           | Prefill CP deprecation, HiCache data plane |
| **llama.cpp** | 6                 | 5                | ✅ v0.4.0     | MoE & Qwen3.8-Flash-Next support, Metal/Vulkan tuning |
| **Ollama**    | 5                 | 2                | No           | CUDA regression, context-length misalignment |
| **LiteLLM**   | 5                 | 4                | No           | OTEL trace propagation, MongoDB vector store |
| **Unsloth**   | 7                 | 6                | No           | Multi-node clustering, ARM64/ROCm support |

> 🔍 *Observation*: Despite no new releases from most projects, **llama.cpp** stands out with a major `v0.4.0` release enabling MoE and FlashAttention on-device. vLLM and SGLang lead in PR velocity, reflecting deep architectural refinements.

---

#### **3. Model Support Race**

| New Model / Architecture        | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------------------------------|------|--------|-----------|--------|---------|---------|
| **Qwen3.8-Flash-Next**          | ✅ (FP8, MTP fixes) | ❌ (tracking) | ✅ (v0.4.0) | ✅ (regression risk) | ✅ (Azure GPT-6-Astra proxy) | ✅ (MTP load failure) |
| **Nemotron-3-Puzzle-75B-A9B**   | ❌ | ❌ | ✅ (MoE) | ❌ | ❌ | ❌ |
| **GLM-5.3-Flash**               | ✅ (FP8, ROCm) | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Cohere2MoE Eagle3**            | ✅ (draft support) | ❌ | ❌ | ❌ | ❌ | ❌ |
| **DFlash2 Draft Models**        | ✅ (Cohere) | ✅ (MLX, Ascend) | ❌ | ✅ | ❌ | ✅ (MLX-only) |

> 🏆 **Leaderboard**:  
> - **llama.cpp** leads in *new model access* (Nemotron-MoE, Qwen3.8-Flash-Next).  
> - **vLLM** leads in *production readiness for speculative decoding* (Cohere, Qwen3.8 variants).  
> - **SGLang** leads in *integrated model serving stack* (GLM-5.3-Flash, SenseNova-U1).  
> - **Unsloth** leads in *distributed agent-ready architectures* (DGX Spark two-node).

---

#### **4. Performance Frontier**

| Optimization Focus         | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|-----------------------------|------|--------|-----------|--------|---------|---------|
| **KV Cache Efficiency**     | 🔥 (adaptive planning, prefix caching) | 🔥 (HiCache + IPC) | ⚠️ (per-slot limits) | ⚠️ (OOM on large contexts) | ❌ | 🔥 (`--kv-unified`) |
| **Batching & Throughput**   | 🔥 (cudagraph sync fix) | 🔥 (prefill CP v2) | ⚠️ (vectorized alloc) | ⚠️ (5x regression) | 🔥 (auto-router compression) | ⚠️ (parallel chat) |
| **Quantization (FP8/MoE)**  | 🔥 (FP8 dtype, MTP) | ⚠️ (MXFP8/W4A8) | ✅ (q4_0/q5_1, IQ2_M) | ⚠️ (GGUF validation) | ❌ | ⚠️ (bitsandbytes fallback) |
| **Distributed Serving**     | ⚠️ (scaling via batching) | 🔥 (out-of-process HiCache) | ❌ | ❌ | ❌ | ✅ (DGX Spark clustering) |
| **Kernel-Level Tuning**     | 🔥 (Triton precompile) | 🔥 (CUDA IPC, weight daemon) | 🔥 (Vulkan, Metal, SYCL) | ⚠️ (Blackwell crash) | ❌ | ⚠️ (ARM64 CUDA) |

> 📈 **Frontier Summary**:  
> - **vLLM** dominates in *speculative decoding and kernel optimization*.  
> - **SGLang** leads in *distributed caching and memory offloading*.  
> - **llama.cpp** leads in *cross-platform low-level kernel tuning*.  
> - **Unsloth** leads in *multi-node inference orchestration*.

---

#### **5. Layer Positioning**

| Project       | Primary Layer             | Secondary Role                     | Distinctive Differentiator |
|---------------|----------------------------|------------------------------------|----------------------------|
| **vLLM**      | **High-Performance Serving Engine** | GPU kernel optimization, speculative decode | Industry standard for scalable inference |
| **SGLang**    | **Advanced Serving Engine + Caching Platform** | Prefill CPU, HiCache, weight daemon | Full-stack engine with IPC-based scalability |
| **llama.cpp** | **Local Runtime / Edge Inference** | On-device, on-demand tensor loading | Universal binary support, zero-dependency execution |
| **Ollama**    | **User-Friendly Gateway / CLI Runner** | Local inference UI, Modelfile system | Simplified UX with embedded model management |
| **LiteLLM**   | **Inference Gateway / Orchestration Layer** | Cost tracking, routing, observability | Central hub for multi-provider, multi-model workflows |
| **Unsloth**   | **Fine-Tuning Framework + Distributed Agent Runtime** | RAG, embedding routing, multi-GPU | Bridges training → inference → agent deployment |

> 🧩 **Layer Clarity**:  
> - **vLLM/SGLang** = Core inference engines.  
> - **llama.cpp/Ollama** = Local inference platforms.  
> - **LiteLLM** = Cross-provider orchestrator.  
> - **Unsloth** = Training-to-agent pipeline enabler.

---

#### **6. Trend Signals**

> 🔮 **Key Industry Trends Extracted from Activity**:

1. **Speculative Decoding is Now Production-Critical**  
   vLLM and SGLang are racing to stabilize speculative decoding—especially for MoE and hybrid models. Regressions in draft acceptance and KV cache alignment signal that this is not yet reliable at scale.

2. **Quantization Stability is the New Bottleneck**  
   FP8 non-determinism (vLLM), GGUF compatibility (Ollama), and SYCL crashes (llama.cpp) reveal that quantization is no longer just about size—it’s about correctness under stress.

3. **Multi-Node Inference is Moving Beyond Research**  
   Unsloth’s DGX Spark two-node clustering and SGLang’s out-of-process HiCache show that distributed inference is transitioning from lab experiments to production-ready patterns.

4. **Edge Runners Are Catching Up to Cloud Engines**  
   llama.cpp’s MoE support, Metal tuning, and on-demand loading mean local inference is now viable for complex models—reducing dependency on cloud APIs.

5. **Gateway Complexity Is Rising Fast**  
   LiteLLM’s expanded routing, cost tracking, and vector store integrations reflect a shift: gateways are becoming full-fledged AI middleware—not just proxies.

> 💡 **Developer Action Items**:
> - **Avoid `0.33.x` in Ollama** until CUDA regressions are fixed.
> - **Use `v0.4.0` of llama.cpp** for cutting-edge MoE and FlashAttention on edge devices.
> - **Leverage `--kv-unified` in Unsloth** for high-concurrency agents.
> - **Enable `VLLM_USE_AOT_COMPILE=1` only after validating LoRA hashing**.
> - **Monitor `service_tier` and `cache_control` in LiteLLM**—they’re currently being stripped.

---

✅ **Final Takeaway**: The AI infrastructure stack is maturing beyond raw throughput. Today’s leaders are those who balance performance with **stability**, **distribution**, and **observability**—not just speed. For application developers, the future lies in *orchestration over selection*: choosing tools that work together, not just perform well in isolation.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-09-05**

---

### **1. Today's Highlights**  
The vLLM project continues to deepen its support for speculative decoding and hybrid attention models, with critical fixes to prefix caching behavior in MTP (Multi-Token Prediction) workflows—especially for Qwen3.8 variants—addressing up to 40% throughput loss. A new PR introduces precompiled Triton kernel variants to eliminate runtime JIT overhead, while ongoing work tracks deterministic inference via batch-invariant features and improved KV cache planning across architectures.

---

### **2. Releases & Breaking Changes**  
*None*  
No new releases or breaking API/config changes were published in the last 24 hours.

---

### **3. New Model & Hardware Support**  
- ✅ **Qwen3.8-Flash-Next-FP8**: Added experimental support for `--dtype fp8` on SM121/GB10, though non-determinism under high context length remains a known issue (#54521).  
- ✅ **GLM-5.3-Flash**: Fixes landed for `--kv-cache-dtype fp8` on SM90 sparse MLA backend and kpool indexer layout mismatch on ROCm (#55222, #54359).  
- ✅ **AMD MI325X + ROCm**: Continued improvements to TurboQuant layout compatibility and build pipeline safety (#54988, #55099).  
- ✅ **Cohere2MoE Eagle3**: Draft model now supports auxiliary hidden states required for speculating Cohere target models (#49819).  
- 🚧 **Intel XPU**: DFlash2 draft acceptance fails at `--dtype float16` (works in `bf16`) — regression under investigation (#55250).

---

### **4. Performance & Optimization**  
- 🔥 **Speculative Decoding Efficiency**: PR #55404 eliminates device sync during cudagraph metadata capture, improving GPU utilization in high-throughput scenarios.  
- ⚙️ **JIT Reduction**: PR #55414 precompiles split top-p kernel variants (5 power-of-two buckets), removing runtime JIT compilation delays.  
- 📈 **KV Cache Planning**: Ongoing RFCs (#52906, #44276) propose adaptive prefill budgets and model-customized KV cache layouts to optimize scheduling pressure and reduce memory fragmentation.  
- 💡 **Model-Specific Optimizations**: PR #55404 and #55414 target GDN and MTP performance; #55222 improves FP8 plan dtype handling on SM90.

---

### **5. Stability & Regressions**  
| Issue | Severity | Status | Fix PR |
|------|----------|--------|--------|
| #54521: Non-deterministic greedy decoding on Qwen3.8-Flash-Next-FP8 when prompt nears `indexer_budget` | Critical | Open | No |
| #55250: DFlash2 draft gets 0% acceptance with `--dtype float16` on XPU | High | Open | No |
| #55291: Qwen3.6-27B-FP8 collapses into repeated `!` tokens after sustained use | Critical | Open | No |
| #55312: Speculative decode draft/target backends may have disjoint KV cache layouts | Medium | Open | No |
| #54359: GLM-5.3-Flash kpool indexer silently overwrites KV cache on ROCm | High | Open | No |

> ⚠️ Several stability issues affect production-grade inference on Qwen and GLM models, particularly around quantization, speculative decoding, and long-context handling.

---

### **6. What This Means for Application Developers**  
- **Avoid `--dtype float16` on Intel XPU** until #55250 is resolved—use `bf16` instead for DFlash2.  
- **Enable `VLLM_USE_AOT_COMPILE=1` only if you’ve verified LoRA state hashing**—PR #55386 highlights that LoRA wrapping affects cache keys.  
- **Use `disable_spec_decode=True` per request** via `SamplingParams` (PR #55412) to selectively disable speculative decoding for short or structured outputs.  
- **Monitor prefix cache hits closely** when using MTP with hybrid GDN models—PR #52244 restores expected behavior but is not yet merged.  
- **Consider adaptive `max_num_batched_tokens`** based on scheduling pressure (RFC #52906)—ideal for dynamic workloads with variable context lengths.

🔗 [GitHub Issues](https://github.com/vllm-project/vllm/issues) | [Pull Requests](https://github.com/vllm-project/vllm/pulls)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest — 2026-09-05

---

### **1. Today's Highlights**  
SGLang continues its aggressive optimization momentum with key work on **prefill CPU (CP) deprecation**, now in its final stages, and critical fixes to **HiCache + prefill CP interactions** that were causing test failures and potential runtime corruption. The project is also advancing **out-of-process HiCache data plane** design via device-memory IPC, targeting faster engine recovery and scalable caching.  

---

### **2. Releases & Breaking Changes**  
No new releases in the past 24 hours. However, the **deprecation of legacy prefill CP v1** is nearing completion:  
- PR #36228 removes generic v1 runtime paths; use of `--enable-prefill-cp` now defaults to canonical v2 layout.  
- PR #36230 updates documentation to reflect updated CLI semantics and remove obsolete aliases.  
➡️ **Migration Note**: Users relying on older `--cp-strategy round-robin` or `is_cp_v2_active` logic must update to `interleave` and versionless APIs. See [PR #36228](https://github.com/sgl-project/sglang/pull/36228), [PR #36230](https://github.com/sgl-project/sglang/pull/36230).

---

### **3. New Model & Hardware Support**  
- ✅ **GLM-5.3-Flash** support merged via [PR #36507](https://github.com/sgl-project/sglang/pull/36507).  
- ✅ **SenseNova-U1/U1.5** support tracking initiated ([Issue #37742](https://github.com/sgl-project/sglang/issues/37742)) — reference implementation from OpenSenseNova/SenseNova-U1.  
- 📌 **Ascend NPU** adaptation for DFlash2 speculative decoding underway ([PR #35629](https://github.com/sgl-project/sglang/pull/35629)).  
- 🔧 **Apple Silicon** and **AMD** support included in CI scope for multiple features ([PR #36507](https://github.com/sgl-project/sglang/pull/36507), [PR #35629](https://github.com/sgl-project/sglang/pull/35629)).

---

### **4. Performance & Optimization**  
- **Weight Cache Daemon** enables near-instant model load (~<1s) for Qwen3-235B FP8 on B300 GPUs by offloading post-quantized weights to per-rank daemons via CUDA IPC ([Issue #33522](https://github.com/sgl-project/sglang/issues/33522), [blog](https://www.lmsys.org/blog/2026-08-21-sglang-weights-cache-daemon)).  
- **HiCache L1/L2 + SSD** path now supports out-of-process data plane via device-memory IPC ([RFC #37372](https://github.com/sgl-project/sglang/issues/37372)) — improves scalability and reduces host memory pressure.  
- **Memory Pool Vectorization**: PR #37938 replaces Python loop in `alloc_extend_naive` with vectorized C++ kernel — expected to reduce per-request allocation overhead significantly.  
- **Prefill CP Optimization**: Multiple PRs fix token ordering and sharding bugs under prefill CP (e.g., [PR #38078](https://github.com/sgl-project/sglang/pull/38078), [PR #38077](https://github.com/sgl-project/sglang/pull/38077)), restoring correctness and performance for Qwen3 models.

---

### **5. Stability & Regressions**  
Critical stability issues reported today:  
1. **Scheduler Hang / Watchdog Abort** in DSV4 sparse prefill with hierarchical cache + chunked prefill (16K tokens): [Issue #34235](https://github.com/sgl-project/sglang/issues/34235) — confirmed on H20 + DeepSeek-V4 FP8.  
2. **CUDA_ERROR_ILLEGAL_ADDRESS** in MXFP8FP4/W4A8 MegaMoE path on B300: [Issue #37559](https://github.com/sgl-project/sglang/issues/37559) — affects sgl-deep-gemm 0.1.7 users.  
3. **KV-Pool Full Retraction Livelock** in unified radix cache test: [Issue #38019](https://github.com/sgl-project/sglang/issues/38019) — blocks CI pipelines; fixed in [PR #38070](https://github.com/sgl-project/sglang/pull/38070).  
4. **NextN Draft Acceptance Decay** over server uptime: [Issue #37326](https://github.com/sgl-project/sglang/issues/37326) — fully restored after restart; root cause under investigation.

---

### **6. What This Means for Application Developers**  
- **Upgrade early** on prefill CP changes: migrate away from deprecated `round-robin`, `v1` flags, and `is_cp_v2_active`. Use `interleave` and versionless APIs.  
- **Leverage HiCache improvements**: For long-running services, expect better cache hit rates and reduced startup time thanks to weight cache daemon and out-of-process data planes.  
- **Avoid unstable configurations**: Do not use `--enable-hierarchical-cache` with `--enable-prefill-cp` on Qwen3 until PRs like #38070 are merged into stable releases.  
- **Monitor GPU memory**: Use `--flashinfer-allreduce-fusion-backend auto` cautiously — MNNVL can degrade GLM-5 NEXTN acceptance on Blackwell (see [Issue #37745](https://github.com/sgl-project/sglang/issues/37745)).  
- **Plan for multi-node**: Use `feat(kv-events): advertise per-rank publisher endpoints` ([PR #38032](https://github.com/sgl-project/sglang/pull/38032)) if building external KV routers across nodes.

---  
*Digest generated: 2026-09-05 | Source: github.com/sgl-project/sglang*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# **llama.cpp Digest – 2026-09-05**

---

### **1. Today's Highlights**  
The `v0.4.0` release introduces foundational support for **Qwen3.8-Flash-Next** and **Nemotron-3-Puzzle**, marking a major leap in multimodal and high-efficiency model inference. Key infrastructure upgrades include on-demand tensor loading, per-slot context limits, video input handling, and a significant update to `ggml` (0.23.0) with sparse flash attention and RDMA optimizations—critical for scalable, low-latency deployment.

---

### **2. Releases & Breaking Changes**  
- **`v0.4.0` released** ([#28386](https://github.com/ggml-org/llama.cpp/pull/28386))  
  - Introduces `llama_lazy_mode` for deferred tensor loading, improving memory efficiency during model warm-up.
  - Adds `n_expert_used_max()` API function to track MoE layer utilization.
  - Build info output now configurable via `FILE*` parameter ([#28322](https://github.com/ggml-org/llama.cpp/pull/28322)), enabling better logging integration.

> 🔗 [GitHub Release v0.4.0](https://github.com/ggml-org/llama.cpp/releases/tag/v0.4.0)

---

### **3. New Model & Hardware Support**  
- **New Models**:  
  - ✅ **Qwen3.8-Flash-Next** (including FlashAttention variants)  
  - ✅ **Nemotron-3-Puzzle-75B-A9B** (NemotronHPuzzle) — first full MoE support in llama.cpp  
  - ✅ **Spark2_5ForCausalLM** (via PR [#27868](https://github.com/ggml-org/llama.cpp/pull/27868))  

- **Hardware & Backends**:  
  - 🚀 **Metal (Apple Silicon M3)**: Added FA-vec tuning for `q4_0`, `q4_1`, `q5_0`, `q5_1` quantizations ([#28396](https://github.com/ggml-org/llama.cpp/pull/28396))  
  - 🖥️ **OpenCL**: Extended elementwise ops (sgn, step, elu, hardswish, etc.) and Adreno xmem SDPA path ([#27633](https://github.com/ggml-org/llama.cpp/pull/27633), [#26331](https://github.com/ggml-org/llama.cpp/pull/26331))  
  - ⚙️ **SYCL**: Fusion of RMS_NORM+MUL+ADD and ADD+ADD chains; global `GGML_SYCL_ENABLE_MKL_FA` variable refactored ([#27610](https://github.com/ggml-org/llama.cpp/pull/27610), [#26863](https://github.com/ggml-org/llama.cpp/pull/26863))  
  - 🌐 **WebGPU**: Fixed GET_ROWS binding alignment to type block size ([#28382](https://github.com/ggml-org/llama.cpp/pull/28382))

---

### **4. Performance & Optimization**  
- **Vulkan**: Custom `iq4_xs` kernel improves token generation from **~36 t/s to ~37.2 t/s** on `unsloth/Qwen3.8-27B-UD-Q3_K_XL` ([#28417](https://github.com/ggml-org/llama.cpp/pull/28417))  
- **CUDA/HIP**: Ongoing work to optimize MoE models on RDNA3.5 (gfx1151); performance gap vs. RTX 4090 noted (~1.06x vs ~1.8x on RTX 5090) ([#28196](https://github.com/ggml-org/llama.cpp/issues/28196))  
- **Memory Efficiency**: On-demand tensor reading reduces initial memory pressure; `ggml` 0.23.0 includes sparse flash attention and RDMA support for distributed inference.  
- **Build System**: Docker images now updated to ROCm 7.14.0 + Ubuntu 26.04, with GPU support fixes ([#27145](https://github.com/ggml-org/llama.cpp/pull/27145))

---

### **5. Stability & Regressions**  
- ⚠️ **Critical**: `SYCL` crash on Intel Arc Pro B60 (`b9128` → `b9159`) causing empty/gibberish output in hybrid models ([#24168](https://github.com/ggml-org/llama.cpp/issues/24168), 27 comments). No fix PR yet.  
- ⚠️ **High Priority**: Vulkan backend crashes GPU firmware on Google Pixel 11 Pro (PowerVR C-series) during prompt processing ([#28214](https://github.com/ggml-org/llama.cpp/issues/28214)).  
- ⚠️ **Regression**: Qwen3.8-Flash-Next (qwen4_exp) fails to load 51B N-gram embedding table after build 10665, causing severe prefill slowdown ([#28355](https://github.com/ggml-org/llama.cpp/issues/28355)).  
- ⚠️ **Stability**: Multiple issues reported on AMD RDNA3.5 (gfx1151): NaNs in MMVQ, synccheck divergences in CUDA FlashAttention ([#25620](https://github.com/ggml-org/llama.cpp/issues/25620), [#27678](https://github.com/ggml-org/llama.cpp/issues/27678)).  
- ⚠️ **UI/Server**: Segfault in "Ubuntu x64 (Vulkan)" build ([#28312](https://github.com/ggml-org/llama.cpp/issues/28312)); final peg-native parse failure discards completions ([#27733](https://github.com/ggml-org/llama.cpp/issues/27733)).

---

### **6. What This Means for Application Developers**  
- **Build robust agents**: With new **Qwen3.8-Flash-Next** and **Nemotron-3-Puzzle** support, you can now deploy cutting-edge hybrid and MoE models directly on-device or in edge clusters. Use `llama_lazy_mode` to reduce cold-start memory overhead.  
- **Optimize for heterogeneous backends**: Leverage Metal (M3) and OpenCL improvements for Apple Silicon and mobile GPUs. Monitor SYCL performance regressions on Intel Arc hardware.  
- **Enhanced UI tooling**: The new `models-discover` UI stack ([PR #28418](https://github.com/ggml-org/llama.cpp/pull/28418), [#28409](https://github.com/ggml-org/llama.cpp/pull/28409)) enables rich model browsing and download workflows—ideal for app developers building LLM gateways.  
- **Watch for stability risks**: Avoid `b10809` builds if using Intel Arc Pro B60 or PowerVR C-series GPUs. Prioritize testing with stable `v0.4.0` releases until regression fixes land.

> 💡 **Pro Tip**: Use `--model-cache-dir` and `--sidecar-cache` (via PR [#28405](https://github.com/ggml-org/llama.cpp/pull/28405)) to avoid redundant downloads in CI/CD pipelines.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

---

### **Ollama Digest — 2026-09-05**

#### **1. Today's Highlights**  
Critical context-length handling issues are emerging across multiple backends (CUDA, MLX, Vulkan), with models like Granite 4.2 and Gemma 4 26B A4B triggering OOM kills or regression in behavior due to misaligned default context settings. Concurrently, a new CUDA crash on Blackwell RTX 5060 Ti has been reported, tied to Flash Attention MMA kernel memory allocation under high context loads—highlighting growing instability in long-context inference paths.

#### **2. Releases & Breaking Changes**  
None reported in the last 24 hours. However, **v0.33.x** is now confirmed as a regression release for users on CUDA (RTX 3090), with token generation speed dropping by ~5x compared to v0.32.13 ([#18225](https://github.com/ollama/ollama/issues/18225)). Users should consider pinning to `0.32.13` until this is resolved.

#### **3. New Model & Hardware Support**  
- **MLX**: PR #17865 adds native support for `DFlash2DraftModel` checkpoints, enabling dynamic short convolution and parallel path selection on Apple Silicon.  
- **CUDA**: PR #18232 identifies a root cause of CUDA crashes on Blackwell GPUs (RTX 5060 Ti) linked to `num_ctx` affecting Flash Attention MMA shared memory allocation—critical for future compatibility.  
- **Quantization**: GGUF validation fails for `GLM-5.2-IQ2_M/UD-IQ2_M` models due to `llama-quantize` compatibility checks ([#17279](https://github.com/ollama/ollama/issues/17279)); no official fix yet.

#### **4. Performance & Optimization**  
- **Regression**: Token generation performance dropped ~5× on RTX 3090 between `0.32.13` and `0.33.x` ([#18225](https://github.com/ollama/ollama/issues/18225)), despite identical model files and GPU.  
- **Memory Efficiency**: PR #18234 introduces documentation for rootless Linux installs, improving deployment flexibility.  
- **Context Handling**: PR #18243 proposes blocking oversized model pulls by default (MLX-only initially), preventing user-side VRAM exhaustion.

#### **5. Stability & Regressions**  
| Severity | Issue | Impact | Fix Status |
|---------|------|--------|------------|
| 🔴 High | **Gemma 4 26B A4B enters reasoning loop instead of tool calls** after update to `0.33.3` ([#18220](https://github.com/ollama/ollama/issues/18220)) | Breaks tool-using workflows in Cline/VS Code | Closed; likely patch pending |
| 🔴 High | **CUDA crash (`0xc0000409`) on Blackwell RTX 5060 Ti** due to Flash Attention MMA kernel allocation failure at high `num_ctx` ([#18232](https://github.com/ollama/ollama/issues/18232)) | Prevents use on new hardware | Open; root cause identified |
| 🟡 Medium | **Granite 4.2 models trigger OOM kills** due to hardcoded `context_length=131072` overriding safe defaults ([#18074](https://github.com/ollama/ollama/issues/18074)) | Consumer-grade hardware failure | Closed; workaround via env override |
| 🟡 Medium | **Cloud API corrupts literal `</think>` in user messages** ([#17248](https://github.com/ollama/ollama/issues/17248)) | Breaks prompt fidelity in reasoning models | Open; requires API-level fix |

#### **6. What This Means for Application Developers**  
- **Avoid `0.33.x`** if using CUDA-based inference—stick to `0.32.13` for stable throughput.  
- **Explicitly set `OLLAMA_CONTEXT_LENGTH`** when working with large models (e.g., 98304) or non-standard contexts—env vars may not be respected due to tiered logic ([#18242](https://github.com/ollama/ollama/issues/18242)).  
- **Validate tool schemas carefully**: Avoid `\/` or `\–` inside `array.items.pattern` in Anthropic-compatible APIs—these trigger grammar parse failures ([#18226](https://github.com/ollama/ollama/issues/18226)).  
- **Use Modelfile `num_ctx` explicitly**—the GUI preset system does not allow fine-grained control, and environment variables do not override Modelfile values ([#18229](https://github.com/ollama/ollama/issues/18229)).  

> 💡 **Pro Tip**: For long-context workloads, consider disabling prefix caching on MLX runners to avoid silent eviction-related OOMs ([#18231](https://github.com/ollama/ollama/issues/18231)).

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-09-05**

---

### **1. Today's Highlights**  
LiteLLM continues to evolve as a central inference gateway with critical improvements in observability, cost tracking, and model routing. Key PRs today focus on fixing broken trace propagation for team-level OpenTelemetry (OTEL) data (#39654), enabling per-model scope in shadow evaluation jobs (#39828), and resolving long-standing issues around cache control and parameter handling across providers like Anthropic and Mistral. A new MongoDB vector store provider is introduced (#39811), expanding LiteLLM’s backend flexibility.

---

### **2. Releases & Breaking Changes**  
*No new releases were published in the last 24 hours.*  
However, **breaking changes are active in v1.96+**:
- **Managed MCP OAuth2 flow now redirects to LiteLLM UI instead of vendor auth page** (#39665): This may affect integrations relying on external identity providers.
- **`LITELLM_JOB_ROLE` is documented but not implemented** (#39722): Documentation misalignment could lead to configuration errors in production deployments.

> 🔗 [Issue #39665](https://github.com/BerriAI/litellm/issues/39665) | 🔗 [Issue #39722](https://github.com/BerriAI/litellm/issues/39722)

---

### **3. New Model & Hardware Support**  
- **Azure GPT-6-Astra (Foundry)**: Added support with standard pricing in `model_prices_and_context_window.json` (#39827).
- **Mistral Text-to-Speech (TTS)**: Native `/v1/audio/speech` support added via `mistral` provider config (#38755).
- **MongoDB Vector Store**: New `mongodb` provider for Atlas and self-managed deployments enables full `$vectorSearch` integration via pymongo (#39811).

> 🔗 [PR #39827](https://github.com/BerriAI/litellm/pull/39827) | 🔗 [PR #38755](https://github.com/BerriAI/litellm/pull/38755) | 🔗 [PR #39811](https://github.com/BerriAI/litellm/pull/39811)

---

### **4. Performance & Optimization**  
- **Auto-router compression decoupling**: Introduced to allow independent compression of routing decisions vs. model calls, improving latency and flexibility in high-throughput agent systems (#39823).
- **Complexity router auto-escalation**: Stalled tasks now automatically escalate to fallback models, reducing risk of infinite loops during complex reasoning (#39809).
- **Shadow eval job scoping enhancement**: Jobs can now target specific model groups *in addition to* keys/teams, enabling more precise A/B testing and monitoring (#39828).

> 🔗 [PR #39823](https://github.com/BerriAI/litellm/pull/39823) | 🔗 [PR #39809](https://github.com/BerriAI/litellm/pull/39809) | 🔗 [PR #39828](https://github.com/BerriAI/litellm/pull/39828)

---

### **5. Stability & Regressions**  
Critical stability issues reported today include:

| Issue | Severity | Status | Fix PR |
|------|----------|--------|--------|
| **Cache-control ignored for Qwen models** (#29322) | High | Open | ❌ |
| **`service_tier` silently dropped for Azure gpt-4.1/4o family** (#39719) | High | Open | ❌ |
| **`tool_choice` object lost in Mistral API calls** (#39736) | High | Open | ❌ |
| **Per-customer RPM limits fail after key caching** (#39713) | Medium-High | Open | ❌ |
| **`gen_ai.system` metric value set to `None` crashes OTEL exporter** (#36759) | High | Open | ⚠️ Partial fix in #24516, but not fully resolved |

> 🔗 [Issue #36759](https://github.com/BerriAI/litellm/issues/36759) | 🔗 [Issue #39719](https://github.com/BerriAI/litellm/issues/39719) | 🔗 [Issue #39736](https://github.com/BerriAI/litellm/issues/39736) | 🔗 [Issue #39713](https://github.com/BerriAI/litellm/issues/39713)

---

### **6. What This Means for Application Developers**  
- **Use caution with v1.96+ upgrades** — especially if using managed OAuth2 flows or MCP integrations; expect redirect behavior changes.
- **Enable granular model targeting in shadow evaluation** using the new `models` field in job definitions (#39828) to validate performance across diverse model groups.
- **Ensure correct `service_tier` and `cache_control` settings** when deploying on Azure OpenAI or Qwen via OpenRouter — these values are currently being stripped or ignored.
- **Leverage new MongoDB vector store support** for building scalable retrieval pipelines with self-hosted or Atlas-backed search.
- **Monitor for silent failures in tool calling and streaming** — bugs in `tool_choice`, `reasoning_effort`, and `cache_control` may result in undetected logic loss or billing inaccuracies.

> 🛠️ Pro Tip: Use `forward_spend_logs_metadata_to_upstream_proxy` (#39824) to maintain end-user attribution across proxy hierarchies — essential for multi-tier deployments.

---  
*Digest generated from GitHub activity (2026-09-05). For real-time updates, monitor [BerriAI/litellm](https://github.com/BerriAI/litellm).*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-09-05**

---

### **1. Today's Highlights**  
The Unsloth project continues its aggressive expansion into multi-node inference and cross-platform compatibility, with key PRs enabling DGX Spark two-node clustering (#10280, #10323) and improved ARM64 CUDA support on Windows (#10282). Critical stability fixes were introduced for GPU memory budgeting (#10283), KV cache contention in parallel chats (#10301), and model loading failures with Qwen3.8-Flash-Next-GGUF (#10322), while new features enhance RAG flexibility and embedding routing.

---

### **2. Releases & Breaking Changes**  
*No new releases or breaking changes reported in the last 24 hours.*  
However, ongoing work in `unsloth-zoo` and core runtime (e.g., #10324, #10315) may affect behavior in future v0.1.807+ builds—users should monitor dependencies.

---

### **3. New Model & Hardware Support**  
- ✅ **DGX Spark Two-Node Clustering**: First-class support for dual DGX Spark systems linked via ConnectX-7 200GbE, with auto-topology selection and async replica routing (#10280, #10323).  
- ✅ **Windows-on-ARM NVIDIA Hosts**: Native ARM64 CUDA stack now properly installed via `install.ps1` on GB10/N1X laptops (#10282).  
- ✅ **ROCm 7.13 / sm_121a Support**: Verified training stability on AMD GPUs with ROCm 6.1/7.13; fix for SIGSEGV during bitsandbytes fallback (#10273).  
- ✅ **MLX Batched Serving**: MLX path now supports decoding multiple replies simultaneously, improving throughput for agents (#10310).  
- ⚠️ **Ollama Integration Fixes**: Addressing schema crashes due to incorrect model source metadata (#9986), though full reliability remains pending.

---

### **4. Performance & Optimization**  
- 📈 **KV Cache Sharing Across Parallel Chats**: Introduced `--kv-unified` + `--parallel N` to allow shared KV cache pooling, reducing memory pressure and avoiding "cache exhaustion" crashes (#10301).  
- 🧠 **Reduced Redundant GGUF Conversions**: Exporting to Hub now skips duplicate conversion steps—improves export speed by ~50% on large models (#10317).  
- 🔍 **Efficient Embedding Routing**: `/v1/embeddings` now uses configured embedding model instead of falling back to chat model or OpenAI (#10315).  
- 💾 **Unified-Memory Budgeting Fix**: Correctly sizes memory budgets on NVIDIA unified-memory devices (e.g., RTX 4080), preventing OOM errors (#10283).

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Fix PR |
|--------|------|-------|-------|
| 🔴 High | Studio deadlocks after minutes: all threads blocked in `sqlite3.connect()`/`close()` | Open (#9008) | — |
| 🔴 High | MTP fails to load Qwen3.8-Flash-Next-GGUF model | Open (#10322) | — |
| 🟡 Medium | Crash on "New Chat": `tapClientLookup: Index 1 out of bounds (length: 0)` | Open (#10288) | — |
| 🟡 Medium | Model tool error when listing files in RAG projects | Open (#8854) | — |
| 🟡 Medium | `--H 0.0.0.0` serves wrong IP on macOS (security risk) | Closed (#8868) | Fixed |
| 🟡 Medium | Transcribe fails with mlx models on macOS | Open (#10272) | — |
| 🟢 Low | Non-GPU selector in Windows desktop app | Closed (#8785) | Fixed |

> *Note: Several regressions involve model loading, threading, and file system access—critical for local inference and agent workflows.*

---

### **6. What This Means for Application Developers**  
- **Build resilient agents**: Use `--kv-unified` and `--parallel` flags to avoid cache thrashing in high-concurrency scenarios.  
- **Leverage multi-GPU setups**: DGX Spark two-node support enables distributed inference at scale—ideal for LLM gateways and fine-tuning pipelines.  
- **Avoid embedded model misrouting**: Ensure your apps use the correct embedding model via settings; `/v1/embeddings` now respects config over chat model.  
- **Watch for RAG limitations**: File indexing and extension handling remain restricted—extend via custom data recipes (#9211) or manual preprocessing.  
- **Prepare for ARM64 & ROCm growth**: With native Windows-on-ARM and ROCm support maturing, consider testing deployments on heterogeneous hardware.

👉 [Browse Issues](https://github.com/unslothai/unsloth/issues) | [View PRs](https://github.com/unslothai/unsloth/pulls)

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*