# AI Infrastructure Digest 2026-08-31

> Generated: 2026-08-31 00:48 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-08-31**

---

### **1. Ecosystem Overview**  
The AI inference infrastructure landscape in Q3 2026 is rapidly maturing, defined by aggressive hardware abstraction, convergence on Blackwell-class GPUs (NVIDIA B200/GB10), and growing support for speculative decoding across MoE models. Projects are no longer just competing on raw throughput—they’re differentiating through stability, long-context efficiency, and multi-backend portability. The rise of hybrid architectures (e.g., Qwen3.8-Flash-Next, GLM-5.3-Flash) demands deeper integration with KV cache optimization, distributed serving, and heterogeneous compute. With vLLM, SGLang, and LiteLLM leading the charge in kernel-level innovation, and Ollama/Unsloth focusing on usability and edge deployment, the ecosystem is bifurcating into high-performance engines and developer-friendly platforms.

---

### **2. Activity Comparison**

| Project       | Issues Open (↑/↓) | PRs Merged (↑/↓) | Release Status         |
|---------------|-------------------|------------------|------------------------|
| **vLLM**      | 42 (↑)            | 12 (↑)           | None in last 24h       |
| **SGLang**    | 37 (↑)            | 9 (↑)            | None in last 24h       |
| **llama.cpp** | 48 (↑)            | 10 (↑)           | None in last 24h       |
| **Ollama**    | 52 (↑)            | 7 (↑)            | None in last 24h       |
| **LiteLLM**   | 41 (↑)            | 8 (↑)            | **v1.100.0-rc.1 / v1.99.0-rc.2** released |
| **Unsloth**   | 49 (↑)            | 5 (↑)            | None in last 24h       |

> ✅ *LiteLLM stands out with two RC releases in 24 hours, signaling active production readiness testing.*

---

### **3. Model Support Race**

| New Model               | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|-------------------------|------|--------|-----------|--------|---------|---------|
| **Qwen3.8-Flash-Next** | ✅ (MTP, DFlash2) | ⚠️ (Decode graph corruption, token loop) | ✅ (`draft-mtp`) | 🟡 (Under discussion) | ❌ | ❌ (Fails to load) |
| **GLM-5.3-Flash**      | ✅ (MoE, KDA, TileLang) | ⚠️ (`fp8` KV cache failure) | ✅ (Hybrid MoE + vision) | ❌ | ❌ | ❌ (Missing `quant_state`) |
| **LTX-2-GGUF (Video)** | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ (Feature request) |

> 🏆 **Winner: vLLM** — fastest and most stable integration across both new models and advanced features like speculative decoding and MoE routing.  
> 🔥 **Emerging Challenge**: Unsloth’s video model ambitions highlight a gap in multimodal readiness among mainstream engines.

---

### **4. Performance Frontier**

| Optimization Focus             | vLLM                          | SGLang                         | llama.cpp                 | Ollama                   | LiteLLM                     | Unsloth              |
|-------------------------------|-------------------------------|--------------------------------|----------------------------|--------------------------|------------------------------|-----------------------|
| **KV Cache & Memory**         | INT8, FP8, batch-invariant, prefix reuse | FP8, HiCache, unified pool     | Lazy mode, `--cache-ram` | MLX memory leak (critical) | Streaming tool-call fixes    | Prompt cache mismatch |
| **Batching & Inference**      | Batch-invariant, streaming prefill | JIT fusions, unified attention | Multi-GPU/MoE, AVX2          | Agent context bloat      | Rust migration (sub-1ms)     | Context size regression |
| **Kernel-Level Optimizations**| FlashInfer SM90 MXFP4 x FP8, PTX 9.4 `ldmatrix` | JIT fusions (QKV, norm, bias) | HIP RDNA3 dot-product       | N/A                      | Sub-1ms via Rust             | N/A                   |
| **Distributed Serving**       | ROCm GB10, AITER sparse MLA   | Disaggregated prefill, DP attn | N/A                        | N/A                      | Multi-provider routing       | N/A                   |
| **Quantization Efficiency**   | W4A8-INT8 sign extension     | NVFP4, FP8, fused norms        | Q2_0 (HIP), AVX2            | GGUF alignment issues    | Native quant-aware routing   | bnb-4bit shape errors |

> 📈 **Top Performer**: **vLLM** leads in kernel-level innovation, especially for Blackwell and AMD GPU workloads.  
> 💡 **Key Trend**: **JIT fusion** (SGLang) and **sparse attention** (vLLM) are becoming critical for scaling large MoE models efficiently.

---

### **5. Layer Positioning**

| Project       | Primary Layer                     | Role Summary                                                                 |
|---------------|-----------------------------------|------------------------------------------------------------------------------|
| **vLLM**      | **Inference Engine**              | Low-level engine focused on maximum throughput, kernel optimization, and hardware abstraction (CUDA/ROCm). Targets cloud-scale deployments. |
| **SGLang**    | **High-Throughput Inference Runtime** | Hybrid runtime combining engine logic with application-level orchestration. Strong focus on correctness, long-context, and CUDA graph replay robustness. |
| **llama.cpp** | **Local Runtime / Embedded Inference** | Cross-platform inference engine optimized for edge devices (Apple Silicon, AMD, Vulkan). Prioritizes compatibility and low-latency local execution. |
| **Ollama**    | **Developer-Facing Gateway / CLI** | Unified interface for model management, local inference, and agent workflows. Acts as a gateway between users and underlying engines (vLLM, llama.cpp, etc.). |
| **LiteLLM**   | **AI Gateway / Abstraction Layer** | Multi-provider API gateway enabling seamless switching between local and cloud backends. Pushing toward sub-1ms latency via Rust migration. |
| **Unsloth**   | **Fine-Tuning & Local UI Platform** | Full-stack toolkit focused on fine-tuning, model editing, and desktop UX—serving niche but growing needs in research and private deployment. |

> 🧩 **Strategic Insight**: The stack is evolving from monolithic engines to layered, composable systems—where **vLLM/SGLang** power the core, **LiteLLM/Ollama** abstract access, and **Unsloth** enables customization.

---

### **6. Trend Signals**

1. **Hardware Convergence on Blackwell & GB10**: All major projects now prioritize NVIDIA B200 and AMD GB10 support. vLLM and SGLang lead in ROCm integration, signaling that **AMD is no longer a second-class citizen** in enterprise inference.

2. **Speculative Decoding is Now Production-Ready**: MTP, DFlash2, and MLA are actively supported across vLLM, SGLang, and llama.cpp — but **regressions in output correctness and memory safety remain widespread**, indicating caution is still required in production use.

3. **KV Cache Optimization is the New Battleground**: From FP8 to INT8 to batch-invariant caching, projects are investing heavily in reducing memory footprint and improving reuse — especially for long-context applications.

4. **Rust Migration = Future of Gateways**: LiteLLM’s sub-1ms goal via Rust highlights a shift toward **low-overhead, high-throughput gateways** — essential for real-time agents and streaming applications.

5. **Stability Over Features**: Despite rapid feature growth, **stability regressions dominate issue trackers** (e.g., silent corruption, deadlocks, memory leaks). This signals that the industry is transitioning from "feature velocity" to **production reliability**.

> 🔍 **Actionable Advice for Developers**:  
> - **For cloud-scale inference**: Use **vLLM** with ROCm or CUDA on Blackwell. Avoid `VLLM_PLE_CPU_OFFLOAD` and `fp8` KV cache until fixes land.  
> - **For agent pipelines**: Prefer **LiteLLM** with `stream_options.include_usage=true` only after verifying fix PRs; consider **llama.cpp** for offline, low-latency runs.  
> - **For edge/local apps**: **Ollama** and **llama.cpp** are best suited, but monitor Apple MLX memory leaks and context bloat.  
> - **Avoid unstable integrations**: Do not deploy **Unsloth** or **SGLang** with Qwen3.8-Flash-Next until decode graph issues are resolved.

---

*Report compiled from GitHub activity (2026-08-31). For real-time tracking, follow [vLLM](https://github.com/vllm-project/vllm), [SGLang](https://github.com/sgl-project/sglang), [llama.cpp](https://github.com/ggml-org/llama.cpp), [Ollama](https://github.com/ollama/ollama), [LiteLLM](https://github.com/BerriAI/litellm), and [Unsloth](https://github.com/unslothai/unsloth).*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest – 2026-08-31

---

### **1. Today's Highlights**  
vLLM continues its aggressive push toward full V1 engine parity and hardware abstraction, with key progress in ROCm support for AMD’s Blackwell-class GPUs (GB10/sm_121) and new model additions including **GLM-5.3-Flash** and **Qwen3.8-Flash-Next**. Critical stability fixes were merged for speculative decoding (DCP/MLA) and KV cache management, while ongoing work on batch-invariant inference and INT8 KV cache quantization signals deeper optimization focus ahead of v0.27.

---

### **2. Releases & Breaking Changes**  
*No new releases in the last 24h.*  
- **Migration Note**: The `VLLM_USE_RUST_FRONTEND=1` experimental flag remains active but not yet feature-complete ([#44280](https://github.com/vllm-project/vllm/issues/44280)).  
- **Breaking Config Change**: The `AITERConfig` object has been introduced to consolidate ROCm AITER toggles previously controlled by scattered env vars — expect future deprecation of `VLLM_ROCM_USE_AITER*` flags ([#54474](https://github.com/vllm-project/vllm/pull/54474)).

---

### **3. New Model & Hardware Support**  
- ✅ **New Models Added**:  
  - [`zai-org/GLM-5.3-Flash`](https://huggingface.co/zai-org/GLM-5.3-Flash) via PR [#53906](https://github.com/vllm-project/vllm/pull/53906)  
  - [`Qwen/Qwen3.8-Flash-Next`](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) via PR [#53896](https://github.com/vllm-project/vllm/pull/53896), supporting MTP speculative decoding and prefix caching  
- 🚧 **Hardware & Backend Expansion**:  
  - Initial ROCm/gfx950 support for **Hy4-preview** (PR [#54432](https://github.com/vllm-project/vllm/pull/54432))  
  - ROCm AITER sparse MLA now supports attention sinks and context parallelism for Kimi-K3 DSpark ([#51705](https://github.com/vllm-project/vllm/pull/51705))  
  - **AMD GB10/sm_121** now enables MoE DFlash2 draft models via PR [#54475](https://github.com/vllm-project/vllm/pull/54475)

---

### **4. Performance & Optimization**  
- 🔥 **Kernel-Level Gains**:  
  - PR [#54032](https://github.com/vllm-project/vllm/pull/54032) introduces a new **FlashInfer SM90 MXFP4 x FP8 fused MoE backend**, enabling optimized routing for DeepSeek-V4-family models on Blackwell GPUs.  
  - PR [#49529](https://github.com/vllm-project/vllm/pull/49529) adopts PTX 9.4 `ldmatrix.s8.s4` for W4A8-INT8 paths, enabling **in-flight sign extension from packed INT4 to INT8** during shared-memory loads — critical for efficient low-bit inference.  
- ⚙️ **System-Level Improvements**:  
  - PR [#53733](https://github.com/vllm-project/vllm/pull/53733) adds **streaming prompt prefill support** in V1, allowing incremental prompt injection and early KV cache buildup.  
  - PR [#53692](https://github.com/vllm-project/vllm/pull/53692) expands **batch-invariant testing** to include `google/gemma-3-1b-it` and `microsoft/phi-4`, improving reliability across diverse models.  
- 📈 **Memory & Throughput**:  
  - Ongoing efforts in [#27433](https://github.com/vllm-project/vllm/issues/27433) aim to eliminate nondeterminism in batch-invariant inference via deterministic scheduling and state tracking.

---

### **5. Stability & Regressions**  
| Issue | Severity | Status | Fix PR? | Notes |
|------|----------|--------|---------|-------|
| [#42426](https://github.com/vllm-project/vllm/issues/42426): Kimi-K2.6 outputs "!!!!!!!!!!" with null reasoning | High | Open | ❌ | Reproducible on B200; likely tied to parser misalignment or output truncation |
| [#54317](https://github.com/vllm-project/vllm/issues/54317): GLM-5.3-Flash CUDA illegal memory access (3 kernels) | Critical | Open | ❌ | Occurs on 4xB200; affects MoE, KDA linear attention, and TileLang |
| [#53960](https://github.com/vllm-project/vllm/issues/53960): `VLLM_PLE_CPU_OFFLOAD` deadlocks at startup (TP=1) | High | Open | ❌ | Hangs after engine init completes — impacts Qwen3.8-Flash-Next deployments |
| [#49922](https://github.com/vllm-project/vllm/issues/49922): FlashMLA assertion failure in v0.26.0 (DeepSeek-V4) | High | Open | ❌ | Regression vs v0.25.0; blocks production use of DeepSeek-V4-Flash |
| [#54094](https://github.com/vllm-project/vllm/issues/54094): Zero prefix-cache reuse with DFlash2 + YaRN | Medium | Open | ❌ | Despite identical prompts, ~1.039M tokens not reused — impacts long-context efficiency |

> **Note**: Several recent PRs address underlying causes:  
> - [#54465](https://github.com/vllm-project/vllm/pull/54465): Fixes BLHNC addressing in sparse MLA → resolves some flash memory issues  
> - [#54472](https://github.com/vllm-project/vllm/pull/54472): Adds fallback for unsupported A2A layouts → improves robustness

---

### **6. What This Means for Application Developers**  
- **Build for Multi-GPU & Heterogeneous Environments**: With growing ROCm support (GB10, gfx950), consider using vLLM on AMD infrastructure — especially for large MoE models like GLM-5.3-Flash or Qwen3.8-Flash-Next. Use `--attention-config '{"indexer_kv_dtype": "float16"}'` cautiously until [#54466](https://github.com/vllm-project/vllm/pull/54466) is resolved.  
- **Leverage Speculative Decoding with Confidence**: DFlash2 and MTP are now supported for MoE models on both NVIDIA and AMD. However, avoid `VLLM_PLE_CPU_OFFLOAD` with `tensor_parallel_size=1` due to known deadlock risks ([#53960](https://github.com/vllm-project/vllm/issues/53960)).  
- **Optimize Long-Context Workloads**: Use streaming prefill (`--enable-streaming-prefill`) and prefix caching to reduce TTFT. Monitor for zero-reuse cases like [#54094](https://github.com/vllm-project/vllm/issues/54094).  
- **Prepare for v1 Migration**: If you rely on V0 features like partial prefills or custom Mamba layers, track porting progress ([#23957](https://github.com/vllm-project/vllm/issues/23957), [#14003](https://github.com/vllm-project/vllm/issues/14003)).  
- **Avoid Unstable Flags**: Do not use `VLLM_USE_RUST_FRONTEND` in production until it reaches parity with Python API ([#44280](https://github.com/vllm-project/vllm/issues/44280)).

---  
*Digest compiled from GitHub activity as of 2026-08-31. For real-time updates, follow [vLLM GitHub Issues](https://github.com/vllm-project/vllm/issues).*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest – 2026-08-31

---

### **1. Today's Highlights**  
SGLang continues to advance its support for high-throughput, long-context inference on Blackwell and GB10 hardware, with critical fixes to speculative decoding correctness and memory safety in full CUDA graph replay. Key PRs include a fix for silent output corruption in Qwen3.8-Flash-Next on GB10 (PR #37111), a resolution to HiCache consistency issues under disaggregated prefill (Issue #22607), and ongoing work to stabilize FP8 KV cache usage across models like GLM-5.3-Flash (Issue #36830).

---

### **2. Releases & Breaking Changes**  
None reported in the last 24 hours. No new versions or breaking API/config changes were released.

---

### **3. New Model & Hardware Support**  
- **Qwen3.8-Flash-Next**: Active investigation into decode graph corruption (`#37111`) and token ID 0 looping (`#36537`) on GB10 TP2 systems.
- **GLM-5.3-Flash**: Ongoing issues with `--kv-cache-dtype fp8` (`#36830`) and worker hangs during warmup with `--enable-dp-attention` (`#36802`).
- **AMD MI355X**: Performance improvements via tuned FlyDSL fp4 indexer score (+28–66% decode) in PR #37173.
- **Apple Silicon (MLX)**: Fix for startup crash when reporting preloaded weights (#37035), restoring stability for MLX backend users.
- **Ascend NPU**: Speculative decoding adaptation in progress (#35629); documentation updates pending.

---

### **4. Performance & Optimization**  
- **Blackwell Optimization**: Multiple JIT kernel fusions for Qwen-Image diffusion models:
  - FP8 QKV projection fusion (**PR #37123**)
  - Norm + activation quantization fusion (**PR #37156**)
  - Residual norm + NVFP4 quantization fusion (**PR #37129**)
  - Output bias absorption reduces BF16 add kernels by ~33% (673 → 449 per step) (**PR #37116**)
- **Unified Memory & Cache**: Refactor to route KV reads through a single id translator (**PR #35247**) and migration of attention backends to unified pool read path (**PR #34613**).
- **Triton Tuning**: New GB300 Triton MoE configs added for GLM-4.5-FP8 (**PR #37159**), improving kernel efficiency on high-end clusters.

---

### **5. Stability & Regressions**  
| Severity | Issue | Description | Fix Status |
|---------|------|-------------|------------|
| 🔴 High | [#37111](https://github.com/sgl-project/sglang/issues/37111) | Silent semantic corruption in Qwen3.8-Flash-Next full decode graph on GB10 TP2 | Open |
| 🔴 High | [#36830](https://github.com/sgl-project/sglang/issues/36830) | GLM-5.3-Flash fails with `fp8` KV cache due to `index_kpool > 1` exclusion | Open |
| 🔴 High | [#36537](https://github.com/sgl-project/sglang/issues/36537) | Qwen3.8-Flash-Next loops indefinitely on token ID 0 | Open |
| 🟡 Medium | [#36941](https://github.com/sgl-project/sglang/issues/36941) | Long prefill (>40k tokens) exhausts unified memory and silently kills worker rank | Open |
| 🟡 Medium | [#36550](https://github.com/sgl-project/sglang/issues/36550) | Worker aborts at first decode token after cold prefill >262k tokens | Open |
| 🟡 Medium | [#36894](https://github.com/sgl-project/sglang/issues/36894) | `/unload_lora_adapter` deadlocks scheduler after parallel sampling traffic | Open |

> ✅ **Fixed**: HiCache consistency plan merged in #22607; `MLX server crash` resolved in #37035.

---

### **6. What This Means for Application Developers**  
- **Avoid `--kv-cache-dtype fp8` on GLM-5.3-Flash** until #36830 is resolved — it will fail silently or cause crashes.
- **Use `--disable-cuda-graph`** if encountering decode graph corruption on Qwen3.8-Flash-Next (e.g., #37111, #37152) until stable patches are released.
- **Monitor long-context requests (>40k tokens)** — memory exhaustion risks are real on GB10 and Spark systems (see #36941).
- **Leverage new JIT fusions** (Qwen-Image diffusion) for up to 30%+ latency reduction on Blackwell GPUs — enable via `--jit-kernel` and ensure Triton 3.7+ is installed.
- **Ensure proper Triton versioning** — current warning from #35785 indicates `triton==3.4.0` is incompatible; use `.github/scripts/install_triton.sh` to upgrade.

👉 **Pro Tip**: Use `--enable-lmcache --lmcache-config-file` cautiously — #37160 reveals tenant isolation may be broken due to ignored `cache_salt`. Consider disabling or auditing storage keys manually.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# **llama.cpp Digest – 2026-08-31**

---

### **1. Today's Highlights**  
The latest development cycle focuses on critical stability fixes for speculative decoding and multi-GPU/MoE inference, particularly around `draft-dflash` and `MTP` support for Qwen3.8-Flash-Next. Key optimizations landed for AMD RDNA3 (HIP) and Apple M3 Ultra (Metal), improving tensor throughput and memory efficiency across diverse hardware targets.

---

### **2. Releases & Breaking Changes**  
- **`--tensor-read-lazy` renamed to `--lazy-mode`** with shorthand `-lzm` (#27969):  
  This CLI change aligns the flag name with internal parameter semantics; existing scripts must be updated. [PR #27969](https://github.com/ggml-org/llama.cpp/pull/27969)

---

### **3. New Model & Hardware Support**  
- **GLM-5-Next (GLM-5.3-Flash)** added: A 321.3B hybrid MoE model with vision support via PR #27754.  
  [PR #27754](https://github.com/ggml-org/llama.cpp/pull/27754)  
- **Qwen3.8-Flash-Next (qwen4exp)**: Added draft-MTP head support via PR #27836 and follow-up fixes in #27941 (sequence key corruption).  
  [PR #27836](https://github.com/ggml-org/llama.cpp/pull/27836), [PR #27941](https://github.com/ggml-org/llama.cpp/pull/27941)  
- **AMD RDNA3 (gfx1201)**: HIP-specific Q2_0 dot-product optimization enabled via native amdgcn perm.  
  [PR #26753](https://github.com/ggml-org/llama.cpp/pull/26753)  
- **Apple M3 Pro & M3 Ultra**: New fa-vec tunings improve attention performance.  
  [PR #27963](https://github.com/ggml-org/llama.cpp/pull/27963), [PR #27999](https://github.com/ggml-org/llama.cpp/pull/27999)  

---

### **4. Performance & Optimization**  
- **HIP (RDNA3)**: Optimized Q2_0 path reduces latency by up to ~12% on gfx1201.  
  [PR #26753](https://github.com/ggml-org/llama.cpp/pull/26753)  
- **Vulkan (Strix Halo)**: Tuning of `rm_kq_int`/`rm_stdq_int` improves batched decode throughput at B=5–8.  
  [PR #27909](https://github.com/ggml-org/llama.cpp/pull/27909)  
- **AVX2 CPU**: Speedups for IQ quant models at large batch sizes (e.g., imatrix/perplexity).  
  [PR #27402](https://github.com/ggml-org/llama.cpp/pull/27402)  
- **RMS Norm Fusion**: Vulkan backend gains ~4% improvement on Gemma4 via fused ops.  
  [PR #28024](https://github.com/ggml-org/llama.cpp/pull/28024)  
- **CUDA**: Fast `mm_ids_helper` path now used for any `n_expert_used`, removing fallback to generic path.  
  [PR #27978](https://github.com/ggml-org/llama.cpp/pull/27978)  

---

### **5. Stability & Regressions**  
- **Critical**: `draft-dflash` + image input causes HTTP 500 due to positional holes in draft KV cache.  
  Root cause: MTMD image chunks leave gaps in draft context.  
  [Issue #27408](https://github.com/ggml-org/llama.cpp/issues/27408)  
- **Severe**: Qwen3.8-Flash-Next decode throughput collapses beyond ~1K context on gfx1151 (Strix Halo).  
  [Issue #27856](https://github.com/ggml-org/llama.cpp/issues/27856)  
- **Regression**: `llama-server` slot restore is a no-op — KV state restored from file but not applied.  
  [Issue #26676](https://github.com/ggml-org/llama.cpp/issues/26676)  
- **Crash**: Vulkan GATED_DELTA_NET pipeline compile hangs on gfx1103 (RADV 780M).  
  [Issue #27998](https://github.com/ggml-org/llama.cpp/issues/27998)  
- **Memory Leak**: Reported in Vulkan engine under long-running workloads.  
  [Issue #28008](https://github.com/ggml-org/llama.cpp/issues/28008)  

> ✅ **Fixes in progress**: PR #28058 addresses cross-request KV-cache contamination on integrated GPUs.

---

### **6. What This Means for Application Developers**  
- **Use `--lazy-mode` instead of `--tensor-read-lazy`** in all new deployments.  
- **Enable `--spec-type draft-mtp` for Qwen3.8-Flash-Next** to unlock speculative decoding benefits — but avoid image inputs until #27408 is resolved.  
- **Tune `rm_kq_int`/`rm_stdq_int` values** when running batched inference on AMD Strix Halo (gfx1151) for optimal throughput.  
- **Avoid `--cache-ram` under high concurrency** — it may restore unrelated conversation data into fresh slots ([#27148](https://github.com/ggml-org/llama.cpp/issues/27148)).  
- **Monitor VRAM usage** for `qwen3-tts` — default context size (32768) allocates 3.5 GB KV cache; reduce via `--n-cpu-context` if needed ([#27937](https://github.com/ggml-org/llama.cpp/issues/27937)).  

> 🔧 **Pro Tip**: For edge cases involving `--n-cpu-ffn`, consider using `--n-cpu-mode` to explicitly control FFN layer assignment ([#27987](https://github.com/ggml-org/llama.cpp/issues/27987)).

---  
*Data source: [ggml-org/llama.cpp GitHub](https://github.com/ggml-org/llama.cpp)*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-08-31**

---

### **1. Today's Highlights**  
The Ollama ecosystem continues to mature with active development focused on stability, performance, and usability for edge and cloud deployments. Key efforts include resolving critical MLX memory leaks on Apple Silicon, improving proxy support for enterprise environments, and enhancing agent workflows via new tooling integrations. Notably, PRs have landed that expose system GPU and memory metrics via `/api/info`, addressing long-standing developer visibility needs.

---

### **2. Releases & Breaking Changes**  
*No new releases in the past 24 hours.*  
However, ongoing work indicates potential breaking changes in upcoming versions:  
- **MLX backend**: The hard-coded 8 GiB prefix cache budget (tracked in #17924, #18131) may be reevaluated to prevent heavy swap usage on 32 GB Macs during agent workloads.  
- **Tool schema validation**: A fix (#18140) now allows nested object `required` fields in OpenAI-compatible tool definitions — a change that may affect agents relying on complex schemas.

---

### **3. New Model & Hardware Support**  
- **New model added**: `qwen3.8-flash-next` is under discussion for inclusion in the cloud catalog (#18128), noted for its ~30–40% lower resource footprint vs. DeepSeek-V4-Flash while maintaining strong reasoning.  
- **Hardware support**:  
  - NVIDIA Orin AGX 64GB (Jetpack 7.2 R39) remains problematic due to `cudaSetDevice err: 801` (#18067).  
  - RTX 5060 Ti users report GPU reset issues (Xid 62/154) after upgrading to v0.33.1–0.33.2 (#18144).  
  - Jetson Orin Nano now exhibits excessive memory use for `gemma4:e2b/e4b` models starting from v0.32.2 (#17787).

---

### **4. Performance & Optimization**  
- **Memory growth**:  
  - MLX runner shows **~0.147 GiB resident growth per request** at fixed context (#17924), plateauing at ~28.5 GiB on 48 GB unified memory systems.  
  - Fixed 8 GiB prefix cache causes **heavy swap (>32 GB)** on 32 GB Apple Silicon machines during agent workflows (#18131, #18132, #18133).  
- **Prompt caching**: PR #16916 adds `cache_n` and cache hit metrics to API responses, enabling better observability of prompt reuse efficiency.  
- **GPU discovery**: PR #18142 introduces `/api/info` and `ollama info` CLI, exposing VRAM totals/free, system memory, and GPU details — crucial for cluster orchestration.

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Link |
|--------|------|-------|------|
| 🔴 High | `digest mismatch` during `ollama pull` (rare but persistent) | Open | [#941](https://github.com/ollama/ollama/issues/941) |
| 🔴 High | `qwen3.8` crashes with "no user query found" on streaming chat | Open | [#17778](https://github.com/ollama/ollama/issues/17778) |
| 🔴 High | `ollama create` fails on Qwen3.8-Flash-Next GGUF due to validation error | Open | [#18146](https://github.com/ollama/ollama/issues/18146) |
| 🟡 Medium | MLX KV cache not released between requests → memory accumulation (75 GB on 64 GB system) | Closed | [#16698](https://github.com/ollama/ollama/issues/16698) |
| 🟡 Medium | `web_fetch` returns incorrect HTTP status codes | Open | [#18143](https://github.com/ollama/ollama/issues/18143) |
| 🟡 Medium | `mlxrunner`: `num_ctx` from Modelfile ignored → Metal watchdog panic on long prefill | Open | [#18125](https://github.com/ollama/ollama/issues/18125) |

> ✅ **Fixes merged**:  
> - Proxy support for manifest downloads (#18145)  
> - Tool schema validation for nested `required` objects (#18140)  
> - System info exposure via `/api/info` (#18142)

---

### **6. What This Means for Application Developers**  
- **Agent developers**: Be cautious with `qwen3.8-mlx` and `gemma4` models on Apple Silicon and Jetson devices — memory usage can exceed expectations due to prefix cache and context handling. Monitor RAM/Swap via `/api/info` once available.  
- **API consumers**: Expect improved observability with `cached_tokens` and `cache_n` in response payloads. Use `GET /api/info` to validate hardware availability in CI/CD or remote deployment scripts.  
- **Tooling integrators**: Validate tool schemas carefully — recent changes allow nested `required` objects, but older clients may break. Also, ensure proxies are properly configured (`http_proxy`) for model downloads (#15358).  
- **Model creators**: If using GGUF quantizations, verify alignment values are declared as `uint32` in the file header — current parser silently defaults to 32 if misdeclared (#18130).

> 🛠️ **Pro tip**: For production deployments behind firewalls, use `OLLAMA_HTTP_PROXY` and test model pulls early to avoid runtime failures.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-08-31**

---

### **1. Today's Highlights**  
The LiteLLM project is accelerating its shift toward high-performance infrastructure with the ongoing Rust migration initiative, now actively discussed in **#31263**, aiming for sub-1ms overheads. Critical stability fixes were merged today, including a fix for `langfuse_tags` parsing (#38929) and a fix for streaming tool-call argument aggregation (#38928), addressing regressions reported in #38926 and #38927. Additionally, support for the new **llmman** provider was added via PR #38924/#38925, expanding local inference options.

---

### **2. Releases & Breaking Changes**  
- **v1.100.0-rc.1** and **v1.99.0-rc.2** released (last 24h).  
  - All Docker images are signed with [cosign](https://docs.sigstore.dev/cosign/overview/) using the same key introduced in commit [`0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0).  
  - **Migration Note**: These release candidates include breaking changes related to stream handling and guardrail response formatting. Review changelogs before upgrading: [GitHub Release Notes](https://github.com/BerriAI/litellm/releases).

---

### **3. New Model & Hardware Support**  
- **New Provider**: Added **[llmman](https://github.com/llmmanorg/llmman)** as an OpenAI-compatible local inference backend, serving models at `/v1` on port `17434`. Ideal for developers running LLMs locally with low-latency, high-throughput access.  
  - GitHub PR: [#38924](https://github.com/BerriAI/litellm/pull/38924)  
- **Enhanced Gemini Integration**: PR #29275 introduces support for Google Maps response format in Gemini model outputs, enabling richer agent-driven tool use.  

---

### **4. Performance & Optimization**  
- **Rust Migration Initiative** (**#31263**) is progressing rapidly — the goal is to achieve **sub-1ms overhead** in the AI gateway layer by replacing Python-based routing with native Rust. Early benchmarks show promise; sign up for beta access: [Early Beta Signup](https://docs.google.com/forms/d/e/1FAIpQLSecWdOjkzjEson2UiZpD...).  
- **Streaming Optimization**: PR #38928 adds regression tests for `stream_options.include_usage=true` to prevent collapsed tool-call deltas into end-of-stream bursts (see #38926). This ensures granular, real-time feedback in streaming agents.  

---

### **5. Stability & Regressions**  
| Issue | Severity | Status | Fix PR |  
|-------|----------|--------|--------|  
| `stream_options.include_usage=true` collapses tool-call arguments into burst | High | Open | [PR #38928](https://github.com/BerriAI/litellm/pull/38928) |  
| `langfuse_tags` header crashes router retry/fallback | Medium | Open | [PR #38929](https://github.com/BerriAI/litellm/pull/38929) |  
| `InfinityError` uses mutable default `headers` arg | Medium | Open | [PR #38909](https://github.com/BerriAI/litellm/pull/38909) |  
| Guardrail error surfaces as HTTP 500 instead of 400 | High | Open | [PR #38936](https://github.com/BerriAI/litellm/pull/38936) |  
| `claude` returns `[System: Empty message content sanitised...]` | High | Open | No fix yet |  

> ⚠️ Critical: Several issues affect core agent workflows (tool calls, guardrails, streaming), especially with Claude and vLLM backends.

---

### **6. What This Means for Application Developers**  
- **Prioritize testing** if using `stream_options.include_usage`, `guardrails`, or `tool_calls` in streaming scenarios — recent bugs may cause silent data loss or incorrect chunking.  
- **Explore llmman** for low-latency, local inference without external dependencies — ideal for private or offline agent deployments.  
- **Monitor the Rust migration** — expect major performance gains in 2026 Q4; early adopters can join the beta to influence shaping.  
- **Use `langfuse_tags` carefully** until PR #38929 is merged — malformed comma-separated values can crash retry logic.  
- **Avoid relying on `x-litellm-api-key` alone** with OAuth2 MCP servers — current behavior returns 500 instead of 401 (see #29261).  

👉 **Actionable Tip**: Update to `v1.99.0-rc.2` or later and verify Docker image signatures via cosign for security compliance.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-08-31**

---

### **1. Today's Highlights**  
The Unsloth project continues to expand its multimodal and cross-platform capabilities, with key work on video model support (LTX-2-GGUF) and Ollama integration stability. Critical regressions in Windows installer behavior and SQLite deadlock risks have emerged, alongside growing demand for AMD GPU (Radeon) and Intel XPU support.

---

### **2. Releases & Breaking Changes**  
*None* — No new releases were published in the last 24 hours.

---

### **3. New Model & Hardware Support**  
- ✅ **Video Model Support**: [Issue #10013](https://github.com/unslothai/unsloth/issues/10013) requests native video analysis in chat and API — a major step toward full multimodal parity with modern LLMs.  
- ⚠️ **Qwen3.8-Flash-Next-GGUF & Qwen3.8-27B**: Both models fail to load due to unsupported architectures (`qwen4exp`) or missing `quant_state` in hybrid attention layers ([#10015](https://github.com/unslothai/unsloth/issues/10015), [#10010](https://github.com/unslothai/unsloth/issues/10010)).  
- 📌 **Intel XPU**: Multiple issues highlight instability in Triton integration ([#10018](https://github.com/unslothai/unsloth/issues/10018)), optimizer crashes ([#10021](https://github.com/unslothai/unsloth/issues/10021)), and silent fallbacks.  
- 🔧 **AMD GPU (Radeon)**: Feature request for Romcom support ([#10005](https://github.com/unslothai/unsloth/issues/10005)) signals growing community interest in ROCm compatibility.

---

### **4. Performance & Optimization**  
- 📈 **Prompt Cache Inefficiency**: MLX prompt cache is not reused for `Qwen3.8-27B` due to `ArraysCache` layout mismatch ([#10031](https://github.com/unslothai/unsloth/issues/10031)).  
- 💡 **Context Size Regression**: Users report context size reduced by ~50% post-1.50 release despite available VRAM ([#7877](https://github.com/unslothai/unsloth/issues/7877)).  
- ⏱️ **Model Response Timeout**: Feature request for configurable timeouts to handle CPU/GPU memory swaps during inference ([#5756](https://github.com/unslothai/unsloth/issues/5756)).  
- 🔄 **Quantization Overhead**: Pre-quantized bnb-4bit checkpoints fail on Windows due to `quant_state=None`, causing shape errors ([#10017](https://github.com/unslothai/unsloth/issues/10017)).

---

### **5. Stability & Regressions**  
| Severity | Issue | Link | Status |
|--------|------|------|--------|
| Critical | **Windows installer fails to replace running `unsloth.exe`** due to file lock; update breaks silently. | [#7697](https://github.com/unslothai/unsloth/issues/7697) | Open |
| Critical | **SQLite mutex deadlock** under concurrent DB access causes Studio backend to hang indefinitely. | [#10022](https://github.com/unslothai/unsloth/issues/10022) | Open |
| High | **Unsloth Desktop crashes on LTX-2-GGUF video model load** (Windows, access violation `0xc0000005`). | [#9977](https://github.com/unslothai/unsloth/issues/9977) | Open |
| High | **Regeneration duplicates user message + attachments**, inflating context and token count. | [#9984](https://github.com/unslothai/unsloth/issues/9984) | Open |
| Medium | **Ollama models disappear from inventory** after recent updates; incorrect `source` tagging causes schema crash. | [#9986](https://github.com/unslothai/unsloth/issues/9986), [#10015](https://github.com/unslothai/unsloth/issues/10015) | Open |
| Medium | **AppImage E2E test fails intermittently** due to race conditions in model download flow. | [#10032](https://github.com/unslothai/unsloth/issues/10032) | Open |

> *Note: Several PRs address underlying causes (e.g., [#9988](https://github.com/unslothai/unsloth/pull/9988), [#10025](https://github.com/unslothai/unsloth/pull/10025)), but no fixes are merged yet.*

---

### **6. What This Means for Application Developers**  
- **Avoid deploying on Windows** if using dynamic model loading or regeneration-heavy workflows — known crashes and installer locks are unresolved.  
- **Use caution with Ollama-integrated models**: The current integration is fragile and may hide models or crash the frontend due to misattributed `source` fields.  
- **Monitor context size settings**: Recent regressions could silently reduce effective context window — verify via logs or explicit config overrides.  
- **Plan for multimodal expansion**: Video model support is in early development — expect breaking changes until [#10013](https://github.com/unslothai/unsloth/issues/10013) is addressed.  
- **Prepare for hardware diversity**: If targeting Intel XPU or AMD GPUs, expect unstable training/inference paths; consider CUDA-only deployment for production reliability.

> 👉 *Recommendation: Pin to stable versions and avoid `main` branch for critical deployments until ongoing CI/CD stability issues are resolved.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*