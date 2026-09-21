# AI Infrastructure Digest 2026-09-21

> Generated: 2026-09-21 00:36 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-09-21**

---

### **1. Ecosystem Overview**  
The AI inference infrastructure landscape in September 2026 is marked by intense specialization, rapid innovation in distributed serving and hardware-specific optimizations, and growing pains around stability in high-performance paths. While vLLM and SGLang lead in advanced multi-GPU and speculative decoding capabilities, local runtimes like llama.cpp and Unsloth are pushing boundaries in VRAM efficiency and edge deployment. Gateway platforms such as LiteLLM focus on cost accuracy and interoperability, while agent-centric tooling (e.g., Ollama, Unsloth) reveals deeper integration challenges. Despite progress, widespread regressions—especially in MoE, quantization, and long-context inference—highlight the fragility of cutting-edge performance under real-world load.

---

### **2. Activity Comparison**

| Project        | Issues Open (High+Severity) | PRs Merged (Last 7 Days) | Releases (Last 24h) | Status |
|----------------|------------------------------|----------------------------|----------------------|--------|
| **vLLM**       | 13                           | 18                         | None                 | Stable but unstable in `v0.28.x` |
| **SGLang**     | 15                           | 16                         | None                 | Active dev; CI flakiness |
| **llama.cpp**  | 14                           | 12                         | 3 (b11065–b11063)    | Frequent incremental updates |
| **Ollama**     | 16                           | 6                          | None                 | Critical stability issues |
| **LiteLLM**    | 11                           | 10                         | 1 (`v1.103.0-rc.1`)  | Security-hardened release |
| **Unsloth**    | 14                           | 9                          | None                 | High-severity regression |

> 🔍 *Note: Ollama and vLLM show the highest number of high-severity open issues, signaling instability in production-grade workloads.*

---

### **3. Model Support Race**

| New Model / Architecture      | vLLM         | SGLang         | llama.cpp       | Ollama       | LiteLLM         | Unsloth       |
|-------------------------------|--------------|----------------|------------------|--------------|------------------|---------------|
| **DeepSeek V4.1**             | ✅ TP fusion + final norm | ❌             | ❌               | ❌           | ❌               | ❌            |
| **Qwen3.8-Flash-Next**        | ❌           | ✅ Pipeline-parallel | ❌              | ❌           | ❌               | ❌            |
| **Qwen3.8 MoE (UD-Q6_K)**     | ⚠️ Streaming support via `--load-mode streaming` | ✅ Full support | ✅ Streaming experts (Vulkan/HIP) | ❌           | ❌               | ❌            |
| **GLM-5.3-Flash**             | ⚠️ FP8 KV cache, repeated output | ❌             | ❌               | ❌           | ❌               | ❌            |
| **Kimi-K3 Native Dynamo**     | ❌           | ✅ Enabled       | ❌               | ❌           | ❌               | ❌            |
| **Snapdragon X Elite NPU**    | ❌           | ❌             | ❌               | ✅ Feature request | ❌               | ❌            |
| **Prism Ternary GGUFs**       | ❌           | ❌             | ❌               | ⚠️ Import failure | ❌               | ❌            |

> 🏆 **Leader**: **llama.cpp** leads in model diversity and hardware-agnostic support (especially Vulkan/HIP), with strong MoE and long-context optimizations.  
> 🥈 **Runner-up**: **SGLang** excels in scalable pipeline-parallel serving for next-gen models like Qwen3.8-Flash-Next.

---

### **4. Performance Frontier**

| Optimization Focus          | vLLM                  | SGLang                     | llama.cpp                | Ollama             | LiteLLM               | Unsloth             |
|------------------------------|-----------------------|----------------------------|--------------------------|--------------------|------------------------|---------------------|
| **KV Cache Efficiency**      | ✅ Context-parallel sparse indexing (ROCm), draft step fixes | ✅ Draft head slicing optimization | ✅ Streaming expert loading (VRAM reduction) | ⚠️ Silent truncation risk | ⚠️ Cost tracking bugs | ⚠️ No explicit cache control |
| **Batching & Parallelism**   | ✅ TP fusion, mHC overlap | ✅ Decode CP, PD-prefill MTP | ✅ Batched FlashAttention tuning | ❌ Regression in CUDA | ✅ Stream-aware routing | ⚠️ Concurrency limits |
| **Quantization & Precision** | ⚠️ GLM-5.3-Flash FP8 issues | ✅ MXFP4, MoE/MLA fixes | ✅ int8 coopmat1, F16 input | ⚠️ `typical_p` handling | ✅ Tokenizer migration to Rust | ⚠️ GGUF throughput regression |
| **Distributed Serving**      | ✅ Multi-GPU, TP fusion | ✅ Pipeline-parallel, weight cache daemon | ❌ Limited | ❌             | ✅ Auto-routing across providers | ❌ |
| **Kernel-Level Gains**       | ✅ Fused kernels (attention + RMSNorm) | ✅ InstantTensor loader | ✅ FlashAttention tuning | ❌             | ✅ Token counter split | ⚠️ Triton kernel test coverage added |

> 🔥 **Hotspots**:  
> - **vLLM**: Kernel fusion and speculative decoding.  
> - **SGLang**: Engine recovery speed (weight cache daemon).  
> - **llama.cpp**: VRAM efficiency via streaming expert loading.  
> - **Unsloth**: Performance regression post-v0.1.810-beta — a critical red flag.

---

### **5. Layer Positioning**

| Project        | Primary Layer                      | Key Differentiator                                      |
|----------------|------------------------------------|---------------------------------------------------------|
| **vLLM**       | **Serving Engine**                 | Best-in-class for large-scale, multi-GPU inference with speculative decoding and TP fusion |
| **SGLang**     | **Serving Engine + Router**        | Unique blend of engine recovery, session-aware routing, and DCP — ideal for long-running agents |
| **llama.cpp**  | **Local Runtime / Embedded Inference** | Dominant for edge, consumer GPU, and low-VRAM environments; strongest cross-backend support |
| **Ollama**     | **Gateway / Developer CLI**        | Simplifies local model access but suffers from stability regressions and semantic bugs |
| **LiteLLM**    | **API Gateway / Cost Orchestration** | Industry leader in cost accuracy, guardrails, and provider abstraction |
| **Unsloth**    | **Agent UI + Local Runtime**       | Blends inference runtime with agent workflow tools; strong UX but performance issues |

> 💡 **Strategic Insight**: The ecosystem is bifurcating: **engine-focused (vLLM/SGLang)** vs. **developer-friendly (Ollama/Unsloth)** vs. **cost-orchestration (LiteLLM)**.

---

### **6. Trend Signals**

#### 🔹 **Emergent Trends**
1. **MoE and Hybrid Models Are Breaking Systems**: Multiple regressions (GLM-5.3-Flash, Qwen-MoE) reveal that MoE architectures remain fragile in inference stacks—especially under quantization, `torch.compile`, and long sessions.
2. **Hardware-Specific Optimizations Are Now Table-Stakes**: ROCm (MiniMax-M3, GLM-5.2), AMD RDNA3/RDNA4 (int8 matmul), Intel XPU, Snapdragon X Elite—all now actively targeted, indicating demand for non-NVIDIA dominance.
3. **Streaming Expert Loading Is a Game-Changer**: llama.cpp’s streaming expert loading enables >96K context on 24GB GPUs—a new benchmark for long-context inference on consumer hardware.
4. **Security & Isolation Are Moving to Frontend**: Unsloth’s MXC sandboxing and Ollama’s MLX memory budgeting reflect rising concerns over untrusted code execution in agent workflows.
5. **Cost Accuracy Is Non-Negotiable**: LiteLLM’s focus on spend logging, virtual keys, and alias accounting shows that financial oversight is now a core feature—not an afterthought.

#### 🔹 **What Developers Should Watch**
- **Avoid `v0.28.x` in vLLM** and **`v0.1.810-beta` in Unsloth** due to severe regressions.
- **Monitor Ollama’s CUDA slowdown** (v0.33.x) — it may require downgrading until fixed.
- **Use `--load-mode streaming` in llama.cpp** for MoE models to reduce VRAM pressure.
- **Enable `--enable-weight-cache-daemon` in SGLang** for fast cold starts on large models.
- **Verify image signatures** in LiteLLM v1.103.0-rc.1 before deploying.
- **Expect silent truncation in Ollama** — implement custom context windowing logic.

> 📌 **Final Recommendation**: For **production agents**, combine **SGLang (engine)** + **LiteLLM (gateway)** + **llama.cpp (local fallback)**. For **edge/local apps**, prioritize **llama.cpp** or **Unsloth** (with version pinning). Avoid all-in-one solutions until stability improves.

--- 

✅ *Report generated by Senior AI Infrastructure Analyst — 2026-09-21*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-09-21**

---

### **1. Today's Highlights**  
The vLLM project continues to advance speculative decoding and multi-GPU optimization with key PRs enabling TP fusion in DeepSeek V4.1 and context-parallel sparse indexing on ROCm. Critical stability issues persist for GLM-5.3-Flash (repeated output, fp8 KV cache support) and Intel GPU deployments (XPU reset crashes), while a growing number of regressions highlight the challenges of maintaining correctness across quantization, tool-calling, and mixed-precision inference paths.

---

### **2. Releases & Breaking Changes**  
*None reported in the last 24 hours.*  
No new releases or breaking API/config changes were published. Users should remain cautious about `v0.28.0` and `v0.28.1rc1`, which have been linked to multiple correctness and performance regressions (e.g., #56605, #56868, #56900).

---

### **3. New Model & Hardware Support**  
- **ROCm Support Expansion**:  
  - Context-parallel sparse indexing now enabled for MiniMax-M3’s AITER and sparse lightning indexers on gfx950 (ROCm) via #57832 and #57840 (opt-in).  
  - DeepSeek V4.1 decode metadata + final norm fused on ROCm (#57756), improving throughput for large models.
- **Intel GPU (XPU)**:  
  - Continued focus on Intel Arc B70/B60 support; ongoing XPU TP=2 crash issue persists (#41663).
- **Multi-modality**:  
  - Vision preprocessing context now passed to `llm-multimodal` via Rust frontend (#57634), enabling model-specific image processing.

---

### **4. Performance & Optimization**  
- **DeepSeek V4.1 Optimizations**:  
  - #57643 fuses TP all-reduce, mHC post-mixing, and RMSNorm into one kernel launch — reducing latency and improving compute overlap.  
  - #57603 overlaps mHC coefficient generation with attention/FFN for small TP batches, minimizing idle time.
- **Speculative Decoding**:  
  - #43091 adds draft model support in Model Runner V2, enabling faster speculative decoding pipelines.  
  - #56734 fixes KV-cache corruption from dummy draft steps under data parallelism — critical for stable long-running agents.
- **KV Offload & Chunking**:  
  - #57813 proposes preserving offloaded chunks for unfinished requests, improving resumption efficiency in high-throughput scenarios.

---

### **5. Stability & Regressions**  
| Issue | Severity | Summary | Fix PR? |
|------|----------|--------|--------|
| [#56605](https://github.com/vllm-project/vllm/issues/56605) | High | GLM-5.3-Flash degenerates into “word salad” in agentic use cases | ❌ No fix yet |
| [#56868](https://github.com/vllm-project/vllm/issues/56868) | High | Long-decode degeneration after accumulated reasoning in W4A16 quantized GLM-5.3-Flash | ❌ No fix yet |
| [#57713](https://github.com/vllm-project/vllm/issues/57713) | Medium | GLM-5.3-Flash does not support `fp8` KV cache on Hopper | ❌ No fix yet |
| [#55279](https://github.com/vllm-project/vllm/issues/55279) | Critical | DFlash2 engine crashes with CUDA IMA/Xid 31 after ~11k decode steps | ❌ No fix yet |
| [#56900](https://github.com/vllm-project/vllm/issues/56900) | High | Qwen1.5-MoE-A2.7B produces degenerate output with `torch.compile` | ❌ No fix yet |
| [#41663](https://github.com/vllm-project/vllm/issues/41663) | Critical | Intel Arc B70 dual-card XPU TP=2 crashes with GP fault + BCS engine reset | ❌ No fix yet |

> ⚠️ Multiple regressions in `v0.28.x` versions suggest instability in recent code paths involving MoE, quantization, and `torch.compile`.

---

### **6. What This Means for Application Developers**  
- **Avoid `v0.28.0` and `v0.28.1rc1`** for production workloads involving GLM-5.3-Flash, Qwen-MoE, or `torch.compile`. Use `v0.27.1` or earlier if stability is critical.  
- **Enable `--disable-kv-cache` only when necessary**, as KV cache management remains fragile under long-lived sessions (see #39996).  
- **Use `VLLM_BATCH_INVARIANT=1` cautiously** — it’s not fully supported on sparse indexers or MoE models (see #55881); verify behavior with your model stack.  
- **For multi-GPU inference**, prefer ROCm-based optimizations (MiniMax-M3, DeepSeek V4.1) where available; avoid Intel GPU setups until #41663 is resolved.  
- **Build agent pipelines with structured output** using caution — malformed schema definitions trigger silent HTTP 500 errors (#57725), and `prompt_embeds` with penalties can cause device-side asserts (#57719).

> 🔗 *Monitor [GitHub Issues](https://github.com/vllm-project/vllm/issues) and [PRs](https://github.com/vllm-project/vllm/pulls) for real-time stability updates.*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

---

### **1. Today's Highlights**  
The SGLang project continues to advance its infrastructure for large-scale LLM serving, with significant progress on **fast engine recovery via weight cache daemon** (Phase 1 shipped in #27139) and ongoing work on **Decode Context Parallelism (DCP)** and **pipeline-parallel support for Qwen3.8-Flash-Next**. Critical stability fixes were merged around CUDA memory handling and speculative decoding correctness, while new PRs focus on optimizing multi-modal inference, CPU offload, and router-level session-awareness.

---

### **2. Releases & Breaking Changes**  
*None.* No new releases were published in the past 24 hours. The latest stable version remains v0.5.20, which includes known issues related to `--quantization humming` (see #40393). Developers should expect potential regressions when upgrading or using experimental flags like `--enable-expert-distribution-metrics`.

---

### **3. New Model & Hardware Support**  
- **Qwen3.8-Flash-Next**: Pipeline-parallel serving and PD-prefill MTP support now being reintegrated via [PR #40501](https://github.com/sgl-project/sglang/pull/40501), enabling scalable inference across multiple GPU nodes.
- **SenseNova-U1/U1.5**: Tracking issue [#37742](https://github.com/sgl-project/sglang/issues/37742) confirms active development for integration with official SenseNova repositories.
- **AMD ROCm (MI355X)**: PRs [#40189](https://github.com/sgl-project/sglang/pull/40189) introduce MXFP4 dense expert support and MoE/MLA launch fixes for GLM-5.2, expanding ROCm compatibility beyond Hopper.
- **Kimi-K3 Native Dynamo Support**: Enabled via [PR #40390](https://github.com/sgl-project/sglang/pull/40390), allowing native token routing and input-ID forwarding for improved cache efficiency.

---

### **4. Performance & Optimization**  
- **Engine Recovery Speedup**: Weight load time dropped from **~306–327 seconds to <1 second** on Qwen3-235B FP8 using the per-rank weight cache daemon (#27139, tracked in #33522).
- **KV Cache Efficiency**: PRs like [#40500](https://github.com/sgl-project/sglang/pull/40500) optimize draft KV head slicing transfers in DCP, reducing redundant Mooncake copies during prefill-to-decode migration.
- **CPU Offload & KPool Planning**: Optimizations in [#39695](https://github.com/sgl-project/sglang/pull/39695) reduce synchronization overhead in KPool planning and overlap indexer preparation, improving throughput under high concurrency.
- **Kernel-Level Gains**: InstantTensor loader integration ([#40453](https://github.com/sgl-project/sglang/pull/40453)) enables pipelined, distributed weight loading — critical for large models like Qwen3-235B.

---

### **5. Stability & Regressions**  
| Severity | Issue | Description | Fix Status |
|--------|------|-------------|------------|
| High | [#40393](https://github.com/sgl-project/sglang/issues/40393) | `--quantization humming` crashes at startup due to missing `format_ue8m0` attribute in `BlockQuantScaleParameter` | Open; blocking v0.5.20 usage |
| High | [#37633](https://github.com/sgl-project/sglang/issues/37633) | CUDA illegal memory access in QSA extend forward under 8 concurrent requests (H20 TP8) | Unresolved; workaround: `CUDA_LAUNCH_BLOCKING=1`, `--disable-overlap-schedule` |
| Medium | [#40401](https://github.com/sgl-project/sglang/issues/40401) | Unclear CUDA version in `lmsysorg/sglang:dev-qwen38-next-local` image | Question raised; no fix yet |
| Medium | [#39971](https://github.com/sgl-project/sglang/issues/39971) | Fused intra-chunk prefill collapses due to ±126 clamp in exp2 factorization | Under investigation; affects strong per-channel decays |
| Low | [#40360](https://github.com/sgl-project/sglang/issues/40360) | Abort cleanup hook ordering conflict between FlexKV and LMCache (session leak) | Open; impacts long-running sessions |

---

### **6. What This Means for Application Developers**  
- **Use `--enable-weight-cache-daemon`** for faster cold-start performance on large models (e.g., Qwen3-235B); it’s now production-ready after Phase 1 rollout.
- **Avoid `--quantization humming`** until #40393 is resolved — this flag currently breaks model loading.
- **Leverage new router features**: Use `--stream-idle-timeout-secs`, session-aware policies, and cache-aware bucket selection (`#40271`, `#40366`) to build more robust, low-latency agents with better state management.
- **Multi-modal apps benefit from**: Shared prefix KV reuse in Qwen-Image 2.1 ([#40489](https://github.com/sgl-project/sglang/pull/40489)), and `--vae-slicing` now honored in native decoding ([#40493](https://github.com/sgl-project/sglang/pull/40493)).
- **Monitor CI stability**: The pipeline has 1 broken, 9 flaky tests (as of #17050), so consider pinning to stable commits if reliability is critical.

> 🔗 *Full context: [SGLang GitHub Issues](https://github.com/sgl-project/sglang/issues) | [Pull Requests](https://github.com/sgl-project/sglang/pulls)*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-09-21**

---

### **1. Today’s Highlights**  
The latest updates focus on performance tuning for **Gemma 4** on **Ampere+ GPUs** via CUDA FlashAttention optimization (#29152), and critical fixes for Metal GPU support on Apple Silicon, including arbitrary `hc` in `dsv4_hc_pre` kernels (#29169). A major new feature enables **streaming expert loading for Qwen3.8 MoE models** on Vulkan and HIP backends, significantly reducing VRAM usage while enabling large-context inference.

---

### **2. Releases & Breaking Changes**  
- **v11065 (b11065)**:  
  - CUDA: Tuned FlashAttention for Gemma 4 on Ampere or newer GPUs (`head_size=256/512`, batch size 1–4) — improves prompt processing throughput. [PR #29152](https://github.com/ggml-org/llama.cpp/pull/29152)  
- **v11064 (b11064)**:  
  - Metal: Added support for arbitrary `hc` (hardware channels) in `dsv4_hc_pre` kernel — resolves fallback to CPU when `hc ≠ 4`. Fixes inference for Kimi-K3 and similar hybrid models. [PR #29169](https://github.com/ggml-org/llama.cpp/pull/29169)  
- **v11063 (b11063)**:  
  - PEG parser now handles invalid UTF-8 sequences gracefully per Unicode recommendations, returning maximal subparts without crashing. [PR #29161](https://github.com/ggml-org/llama.cpp/pull/29161)  

> ✅ *No breaking API changes; all are backward-compatible improvements.*

---

### **3. New Model & Hardware Support**  
- **Model**:  
  - **Qwen3.8 MoE (UD-Q6_K)** now supports `--load-mode streaming` + `--gpu-pill` for efficient offloading of experts to GPU during prefill, enabling >96K context windows on 24GB VRAM. [PR #29191](https://github.com/ggml-org/llama.cpp/pull/29191)  
- **Hardware / Backend**:  
  - **Intel Xe-LPG Plus/Xe2/Xe3**: Vulkan backend adds flash attention optimizations (PR #24406).  
  - **AMD RDNA3/RDNA4**: Vulkan now supports int8 `coopmat1` matmul for quantized models (q4_0 to q6_k, mxfp4, nvfp4, iq4_nl). [PR #27952](https://github.com/ggml-org/llama.cpp/pull/27952)  
  - **SYCL**: DPCT emulation layer removed; native out-of-order queues with `sycl::event` dependencies now used. [PR #29190](https://github.com/ggml-org/llama.cpp/pull/29190)  
  - **Apple Metal**: F16 input added to FWHT kernel — avoids costly float32 conversion. [PR #29094](https://github.com/ggml-org/llama.cpp/pull/29094)

---

### **4. Performance & Optimization**  
- **Gemma 4 (CUDA)**:  
  - FlashAttention tuned for head sizes 256/512 and batch sizes 1–4 — favors larger CUDA blocks and `mma` kernel for batch 1 → **~5–10% faster prompt processing** on RTX 4090/A100. [PR #29152](https://github.com/ggml-org/llama.cpp/pull/29152)  
- **Qwen3.8 MoE (Vulkan/HIP)**:  
  - Streaming expert loading reduces peak VRAM usage by ~50% vs. full-load; allows 85GB model to run on 24GB GPU with NVMe swap. [PR #29191](https://github.com/ggml-org/llama.cpp/pull/29191)  
- **SYCL**:  
  - Removal of dpct layer improves scheduling efficiency and reduces overhead in multi-GPU scenarios. [PR #29190](https://github.com/ggml-org/llama.cpp/pull/29190)  
- **Mamba**:  
  - Time-step projection input now made contiguous → eliminates unnecessary copy after normalization. [PR #28832](https://github.com/ggml-org/llama.cpp/pull/28832)

---

### **5. Stability & Regressions**  
- **Critical (High Priority)**:  
  - **Qwen3.8-27B Hybrid DeltaNet**: Decode throughput collapses ~25x at context >80K despite fast prompt processing. [Issue #27623](https://github.com/ggml-org/llama.cpp/issues/27623) *(No fix PR yet)*  
  - **Qwen3.5 / Qwen3.5MoE (HIP/ROCm)**: Recurrent state leakage across requests causes earlier prompts’ text to be emitted verbatim in later completions. [Issue #29092](https://github.com/ggml-org/llama.cpp/issues/29092) *(No fix PR yet)*  
- **Moderate**:  
  - **Vulkan (RDNA3)**: Severe drop in prompt speed post-b10780. [Issue #28752](https://github.com/ggml-org/llama.cpp/issues/28752) *(Regression introduced recently)*  
  - **SYCL (Arc B60)**: Dual-GPU load stalls due to memory accounting flaw in `--fit`. [Issue #27547](https://github.com/ggml-org/llama.cpp/issues/27547)  
- **Minor**:  
  - **Metal (Apple Silicon)**: `FWHT` kernel now accepts F16 input directly — no more conversion cost. [PR #29094](https://github.com/ggml-org/llama.cpp/pull/29094)

---

### **6. What This Means for Application Developers**  
- **Use `--load-mode streaming --gpu-pill`** for Qwen3.8 MoE models to reduce VRAM pressure and enable long-context inference on consumer-grade hardware.  
- **Upgrade to b11065+** if using Gemma 4 on Ampere+ GPUs — expect measurable prompt processing gains.  
- **Avoid `--fit` for dense models** unless you’re willing to accept CPU-bound layer transfer; use `--fit` only for very large models where CPU offload is necessary.  
- **Be cautious with hybrid/recurrent models** (e.g., Qwen3.5 Next) — context checkpoints may be invalidated on slot restore; monitor behavior under load.  
- **For SYCL users**: Upgrade to latest builds to benefit from native event-based execution and reduced overhead.  
- **For Metal developers**: Use the latest build to avoid deprecated SDK warnings and ensure F16 input support in FWHT kernels.

> 🔗 [Latest Releases](https://github.com/ggml-org/llama.cpp/releases) | [GitHub Issues](https://github.com/ggml-org/llama.cpp/issues) | [PRs](https://github.com/ggml-org/llama.cpp/pulls)

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-09-21**

---

### **Today's Highlights**  
Critical stability issues emerged around Vulkan GPU support (AMD RX 6800 XT) and MLX memory management on macOS, with multiple crash reports and memory exhaustion cases. A major regression in token generation speed was reported for CUDA users (RTX 3090), showing ~5x slowdown from v0.32.13 to v0.33.x. Meanwhile, new PRs address core inference correctness—separating thinking output from response content—and improve compatibility with emerging hardware like Snapdragon X Elite NPU.

---

### **Releases & Breaking Changes**  
None. No new releases were published in the last 24 hours.

---

### **New Model & Hardware Support**  
- ✅ **Snapdragon X Elite NPU & GPU**: Feature request #5360 calls for native support on ARM-based Windows devices (e.g., Microsoft AIPC). Currently unsupported despite hardware availability.  
- 📌 **Prism Ternary GGUFs (PQ2_0/PTQ1_0)**: Issue #18521 tracks import failure due to unsupported tensor size overflow; model architecture is recognized but quantization not yet handled.  
- 🔧 **Vulkan Backend (AMD)**: PR #18562 proposes enabling `graphics` capability in Docker for Vulkan support, addressing driver-level access violations seen in #18557.

---

### **Performance & Optimization**  
- ⚠️ **Severe Regression on CUDA (RTX 3090)**: Users report ~5x slower token generation in v0.33.x vs v0.32.13 under identical conditions (#18225). Root cause pending investigation.  
- 💡 **MLX Memory Management**: PR #18556 introduces configurable prefix-cache memory budget to prevent system-wide unresponsiveness on M1 Pro Macs with 16GB RAM.  
- 🚀 **Kernel Optimization**: PR #18550 adds a prefill-shaped gated delta kernel for Qwen models, improving prompt processing efficiency by avoiding fallbacks to unrolled graphs.

---

### **Stability & Regressions**  
| Severity | Issue | Status | PR / Notes |
|--------|------|-------|----------|
| Critical | Access violation (`0xc0000005`) loading any model on Vulkan (AMD RX 6800 XT) | Open | #18557 — Likely same underlying issue as #18494; no fix yet |
| High | Ollama crashes or hangs when using `gemma4:e4b` with vision — returns blank all-black image | Open | #18560 — Vision tower present in GGUF but unused |
| High | `/api/generate` with `think:true` leaks reasoning into `response`, breaking structured parsing | Open | #18554 — Fix proposed in PR #18561 |
| Medium | Tool call handling broken: responses marked as "user" or "assistant" instead of "tool" | Open | #18509 — Contradicts semantic intent of tool role |
| Medium | Silent truncation of chat history and embeddings without user indication | Open | #14259 — Logs only at debug level; impacts trust in output completeness |

---

### **What This Means for Application Developers**  
- **Avoid `typical_p` in API requests**: PR #18551 reverts strict rejection of `typical_p`, now warning and ignoring it instead—critical for backward compatibility with clients like SillyTavern.  
- **Expect inconsistent tool calling behavior**: The `tool` role is not properly distinguished in responses; use `system` or custom routing until #18509 is resolved.  
- **Handle truncated outputs explicitly**: With silent truncation in chat history (#14259), apps must monitor context length and implement their own windowing logic.  
- **Watch for regressions in v0.33+ on CUDA**: If performance drops significantly, consider downgrading to v0.32.13 temporarily until root cause is patched.  
- **Use caution with MLX + structured output**: Output may be prefixed with stray `.` (PR #18441), rendering JSON invalid—validate and sanitize before parsing.

> 🔗 [GitHub Issues Summary](https://github.com/ollama/ollama/issues) | [PRs Summary](https://github.com/ollama/ollama/pulls)

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-09-21**

---

### **1. Today's Highlights**  
The LiteLLM ecosystem continues to mature with a focus on stability, cost accuracy, and guardrail robustness. Key developments include the resolution of critical budget tracking bugs affecting virtual keys, fixes for streaming cost accounting when using model aliases, and improvements in handling mid-conversation `system` messages for Gemini. Additionally, automated syncs with OpenRouter’s latest pricing ensure accurate spend reporting.

---

### **2. Releases & Breaking Changes**  
- **v1.103.0-rc.1** released today with security hardening via signed Docker images (verified via [cosign](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0)).  
  - All releases are now cryptographically signed using the same key introduced in commit `0112e53`.  
  - **Action Required**: Verify image signatures in production environments using `cosign verify`.

---

### **3. New Model & Hardware Support**  
- **OpenRouter models updated**: 13 new or refreshed entries synced from official pricing pages, including `deepseek-flash-latest`, `gemini-3.1-flash-tts-preview`, and others.  
  - Updated max context windows (e.g., `llama-3.1-70b-instruct` now correctly set to 8192 tokens).  
  - Pricing data now reflects real-time rates across peak/off-peak tiers.  
  - [PR #42179](https://github.com/BerriAI/litellm/pull/42179), [PR #42178](https://github.com/BerriAI/litellm/pull/42178), [PR #42175](https://github.com/BerriAI/litellm/pull/42175), [PR #42169](https://github.com/BerriAI/litellm/pull/42169)  
- **DeepSeek V4 reasoning_effort support**: Full pass-through of `"high"` and `"max"` values via `reasoning_effort` parameter now enabled.  
  - [Issue #27439](https://github.com/BerriAI/litellm/issues/27439), [PR #42158](https://github.com/BerriAI/litellm/pull/42158)

---

### **4. Performance & Optimization**  
- **Tokenizer performance**: Migration from Python-based tokenizers to Rust-backed implementations is underway ([PR #42174](https://github.com/BerriAI/litellm/pull/42174)), promising significant speedups and reduced memory overhead.  
- **Token counter backend split**: Separated fast, Hugging Face, and tiktoken backends into distinct crates ([PR #42165](https://github.com/BerriAI/litellm/pull/42165)) to prevent silent incorrect counts and improve maintainability.  
- **MCP tool caching**: Fix for repeated `list_tools` calls on every tool invocation reduces latency by up to 50% in high-frequency scenarios ([Issue #23544](https://github.com/BerriAI/litellm/issues/23544), [PR #42173](https://github.com/BerriAI/litellm/pull/42173)).

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Fix PR |
|--------|------|--------|-------|
| High | Virtual key `BudgetExceededError` uses stale spend despite valid usage | Open | [Issue #27735](https://github.com/BerriAI/litellm/issues/27735) |
| High | Streaming requests logged as `spend = 0` when using model aliases | Open | [PR #42176](https://github.com/BerriAI/litellm/pull/42176) |
| Medium | Mid-conversation `system` messages break Gemini prompt caching | Open | [PR #42126](https://github.com/BerriAI/litellm/pull/42126) |
| Medium | Guardrails fail to block MCP tools sent via Anthropic `/v1/messages` | Open | [Issue #40583](https://github.com/BerriAI/litellm/issues/40583) |
| Low | Responses-to-Chat bridge loses native tool calls on multi-turn replay | Open | [Issue #42005](https://github.com/BerriAI/litellm/issues/42005) |

> 🔴 **Critical Note**: Multiple issues impact cost accuracy and guardrail reliability—especially relevant for billing-sensitive deployments.

---

### **6. What This Means for Application Developers**  
- **Use v1.103.0-rc.1 only after verifying image signatures** — mandatory for secure production use.  
- **Avoid alias-based routing in streaming workflows** until [PR #42176](https://github.com/BerriAI/litellm/pull/42176) ships; otherwise, spend may be misreported as zero.  
- **Be cautious with `system` messages inside `messages[]`** when using Vertex AI/Gemini — they disable prompt caching and increase costs. Use `system_instruction` instead.  
- **Guardrails like Presidio and LLM-as-a-Judge require careful configuration** — PII unmasking currently misses tool arguments ([Issue #31950](https://github.com/BerriAI/litellm/issues/31950)), and `llm_as_a_judge` defaults to passing if score missing ([Issue #30731](https://github.com/BerriAI/litellm/issues/30731)).  
- **Monitor OpenRouter pricing updates** — automatic sync ensures accurate cost estimation, but custom providers should validate their own mappings ([Issue #29961](https://github.com/BerriAI/litellm/issues/29961)).

> ✅ **Best Practice**: Enable `strict_stream_completion` (proposed in [Issue #42085](https://github.com/BerriAI/litellm/issues/42085)) to detect truncated SSE streams early in your pipeline.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-09-21**

---

### **1. Today's Highlights**  
A major regression in GGUF inference throughput has been reported post-v0.1.810-beta, impacting local model performance on identical hardware—this is the top priority issue today. Concurrently, several high-severity stability and security fixes are underway, including Windows MXC sandboxing integration, Metal GPU queue recovery, and a critical fix for tool call parsing failures that cause massive token bloat (see #11358). Meanwhile, new UI/UX refinements enable drag-and-drop reordering and tool call folding, improving workflow clarity.

---

### **2. Releases & Breaking Changes**  
None. No new releases in the past 24 hours. The latest version remains `v0.1.811-beta` (package: `2026.9.7`). No breaking API or config changes were introduced.

---

### **3. New Model & Hardware Support**  
- **Windows MXC Sandbox**: PR #11357 and #11390 introduce native Windows tool isolation using Microsoft’s MXC ProcessContainer, removing reliance on Node.js and enabling secure execution of Python/Terminal commands. [PR #11357](https://github.com/unslothai/unsloth/pull/11357), [PR #11390](https://github.com/unslothai/unsloth/pull/11390)  
- **ARM64 Linux Build**: Long-awaited support for aarch64 Linux (e.g., DGX Spark) is still pending; see tracking issue #10332.  
- **SDXL Fine-tune Loading**: Feature request #11391 seeks to allow loading community SDXL fine-tunes (GGUF/safetensors) directly in the Images page.

---

### **4. Performance & Optimization**  
- **GGUF Inference Regression**: Users report ~2x–3x slower inference after v0.1.810-beta update despite unchanged models and hardware. [Issue #11221](https://github.com/unslothai/unsloth/issues/11221)  
- **Bundled llama.cpp Build Slowness**: Unsloth’s CUDA 13.4 build (`b11030-mix-5ff778e`) runs 5–6x slower than official ggml-org CUDA 12 builds on RTX 5070 Ti (sm_120). [Issue #11349](https://github.com/unslothai/unsloth/issues/11349)  
- **Kernel Test Coverage**: PR #9573 adds GPU test coverage for Triton kernels (`geglu`, `swiglu`, `rms_layernorm`) — critical for future optimization.  
- **Memory Efficiency**: PR #11368 addresses false-positive healthy load detection on Windows due to host-RAM spill during `cudaMalloc`.  

---

### **5. Stability & Regressions**  
| Severity | Issue | Description | Fix Status |
|---------|-------|-------------|------------|
| ⚠️ High | [Issue #11221](https://github.com/unslothai/unsloth/issues/11221) | GGUF inference throughput regression post v0.1.810-beta | Open |
| ⚠️ High | [Issue #11358](https://github.com/unslothai/unsloth/issues/11358) | MCP image data output as raw text (1.5M+ chars), causing generation failure | PR #11367 (fix merged) |
| ⚠️ Medium | [Issue #11343](https://github.com/unslothai/unsloth/issues/11343) | GGUF loader fails on non-standard filenames via incorrect resolver logic | Open |
| ⚠️ Medium | [Issue #11387](https://github.com/unslothai/unsloth/issues/11387) | Created API keys cannot be copied in Firefox/Brave | Open |
| ⚠️ Low | [Issue #11376](https://github.com/unslothai/unsloth/issues/11376) | Marked inline tokenizer hangs on long backslash lines (~seconds per render) | Open |

---

### **6. What This Means for Application Developers**  
- **Avoid v0.1.810-beta if using GGUF locally** — expect significant latency degradation until #11221 is resolved.  
- **Expect tighter sandboxing** with upcoming MXC integration (PR #11357), which will improve security for agent workflows but may require adjustments in custom tool execution logic.  
- **Use `UNSLOTH_API_MAX_CONCURRENCY`** (via PR #5482) to control inference throttling in production APIs — default is safe (1 concurrent request).  
- **Watch for link rendering bugs** (e.g., #9540, #9633, #11375) when building rich-text UIs with long markdown references.  
- **Do not rely on absolute paths in remote access error messages** — PR #11388 aims to remove sensitive path exposure in password tooltips.  

> ✅ *Recommendation*: Pin your unsloth version to `0.1.803-beta` temporarily if GGUF performance is critical. Monitor PRs #11221 and #11367 for resolution.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*