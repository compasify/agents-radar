# AI Infrastructure Digest 2026-08-27

> Generated: 2026-08-27 04:07 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-08-27**

---

### **1. Ecosystem Overview**  
The AI inference infrastructure landscape in mid-2026 is characterized by rapid convergence on hybrid Mamba/attention models, aggressive kernel-level optimization, and a growing emphasis on agent-native reliability. Projects are increasingly focused on distributed scalability, multi-hardware portability (especially ROCm and Intel XPU), and production-grade stability for long-context, high-throughput workloads. While serving engines like vLLM and SGLang lead in performance tuning and speculative decoding, lightweight runtimes such as llama.cpp and Ollama dominate edge and Apple Silicon deployment. The emergence of persistent memory systems (e.g., Unsloth’s *Memory Wheels*) signals a shift toward stateful, context-aware agents.

---

### **2. Activity Comparison**

| Project       | Open Issues | Open PRs | Recent Release | Status |
|---------------|-------------|----------|----------------|--------|
| **vLLM**      | 347         | 512      | v0.28.0        | ✅ Active |
| **SGLang**    | 391         | 468      | None           | ⚠️ Stable |
| **llama.cpp** | 428         | 579      | b10643/b10642  | ✅ Active |
| **Ollama**    | 312         | 287      | v0.33.1        | ✅ Patched |
| **LiteLLM**   | 276         | 329      | v1.100.0-dev.1 | ✅ Dev-focused |
| **Unsloth**   | 453         | 412      | 2026.8.21      | 🔧 Beta |

> **Insight**: *llama.cpp* and *vLLM* lead in development velocity, driven by low-level hardware and model innovation. *SGLang* and *Unsloth* show higher issue counts, indicating maturity in complex agent workflows with lingering correctness risks.

---

### **3. Model Support Race**

| New Model / Architecture       | Supported By                          | Notes |
|-------------------------------|---------------------------------------|-------|
| **Qwen3.8-Flash-Next**       | vLLM, SGLang, llama.cpp, Ollama       | Full support across all major projects; Qwen4Exp architecture now recognized |
| **Kimi-K3 (Hybrid Mamba/Attn)** | vLLM (DCP + fused kernels), SGLang (deferred KV), llama.cpp (DSpark) | vLLM leads in performance; SGLang excels in decode-side optimizations |
| **GLM-5.3-Flash**            | SGLang (ROCm), llama.cpp, LiteLLM (pricing) | SGLang has most complete ROCm integration; LiteLLM adds pricing visibility |
| **Granite 4.2 FP8/NVFP4**    | vLLM (auto-detect `FP8_DYNAMIC`)       | vLLM pioneers auto-quantization detection |
| **DFlash2 / DSpark**         | llama.cpp, SGLang                       | Only available in lightweight backends so far |

> **Leader**: **vLLM** maintains an edge in cutting-edge model support with strong focus on quantization-awareness and hybrid architectures. **SGLang** leads in agent-specific optimizations for Kimi-K3 and GLM-5.3-Flash on AMD.

---

### **4. Performance Frontier**

| Focus Area               | Leading Projects                         | Key Innovations |
|--------------------------|------------------------------------------|-----------------|
| **KV Cache Efficiency**  | SGLang (deferred release), llama.cpp (in-place binding), vLLM (PCP CUDA graphs) | Reduced GPU memory overhead via delayed release and SYCL f16 binding |
| **Kernel Fusion & Fusing** | vLLM (FlashKDA + prefill), SGLang (topk=1 softmax skip), llama.cpp (fused unary+mul) | Up to 30% latency reduction in benchmarked scenarios |
| **Speculative Decoding** | vLLM (EAGLE/MTP skips DP sync), SGLang (MoE NaN fixes), llama.cpp (draft-mtp race fix) | Critical for throughput in agentic pipelines |
| **Distributed Serving**  | vLLM (DCP), SGLang (distributed KV cache), Ollama (MLX engine limits) | vLLM leads in scalable multi-node inference |
| **Quantization & Batching** | vLLM (FP8 autodetection), llama.cpp (I-quant GGUF MMQ gap), SGLang (sparse computation) | vLLM dominates quantized MoE performance |

> **Trend**: Optimization is shifting from raw speed to **correctness under load**, especially in speculative decoding and mixed-precision inference.

---

### **5. Layer Positioning**

| Project       | Primary Layer                     | Role Summary |
|---------------|-----------------------------------|--------------|
| **vLLM**      | Inference Engine                  | High-performance, distributed serving with advanced kernel fusion and DCP |
| **SGLang**    | Agent-Focused Serving Gateway     | Optimized for agentic workflows: speculative decoding, streaming, tool calling |
| **llama.cpp** | Local Runtime / Edge Execution    | Cross-platform, low-footprint execution with full backend support (Metal, Vulkan, Hexagon) |
| **Ollama**    | Developer Gateway / Local CLI     | Simplified local model serving with MLX/Apple Silicon focus; agent-friendly UI |
| **LiteLLM**   | LLM Gateway / Proxy Layer         | Multi-provider routing, cost tracking, observability, security-hardened proxy |
| **Unsloth**   | Agent Runtime / Memory Framework  | Persistent memory system (Memory Wheels), background generation, VRAM-aware compaction |

> **Architecture Insight**: A clear layering is emerging:  
> - **Engine** (vLLM) → **Gateway** (LiteLLM, SGLang) → **Runtime** (llama.cpp, Unsloth) → **Developer UX** (Ollama).

---

### **6. Trend Signals**

- **Hybrid Architectures Are Now Standard**: Kimi-K3, Qwen3.8-Flash-Next, and GLM-5.3-Flash confirm that Mamba + attention hybrids are no longer experimental — they demand specialized kernels (e.g., FlashKDA, DSpark).
- **Agent Reliability > Raw Speed**: Despite performance gains, multiple projects report critical bugs in speculative decoding (NaNs, divergence), streaming crashes, and prompt caching regressions — signaling that **correctness in long-running agents is the new bottleneck**.
- **ROCm Is Maturing but Still Fragile**: AMD support is advancing rapidly (SGLang, llama.cpp, vLLM), but issues like missing `gate_score` or corrupted output persist — expect instability until Q4 2026.
- **Persistent Memory Is Coming**: Unsloth’s *Memory Wheels* proposal indicates a strategic pivot toward **stateful, recoverable agents** — this will redefine how applications manage context beyond session boundaries.
- **Security & Observability Are Non-Negotiable**: LiteLLM’s mandatory auth for `/metrics` and Ollama’s structured output fixes highlight that production deployments now require **auditable, secure, and observable** infrastructures.

---

### **Recommendation for Application Developers**
- **Use vLLM** for high-throughput, distributed inference on hybrid models (Kimi-K3, Qwen3.8).
- **Use SGLang** for agent pipelines requiring robust speculative decoding and deferred KV management.
- **Use llama.cpp** for edge devices, Apple Silicon, or when running GGUF models with minimal dependencies.
- **Use LiteLLM** as your proxy layer if you need multi-provider routing, cost monitoring, and security hardening.
- **Monitor Unsloth’s Memory Wheels** — future agents may depend on persistent, recoverable state.
- **Avoid unstable releases** of DeepSeek-V4-Pro (vLLM) and Qwen3.8 V3 GGUF (Unsloth) until patches land.

> 📌 *Bottom Line*: The infrastructure is evolving fast — prioritize **stability**, **correctness**, and **observability** over raw performance gains.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-08-27**

---

### **1. Today's Highlights**  
The vLLM v0.28.0 release delivers a major performance uplift for **Kimi-K3**, introducing **Decode Context Parallel (DCP)** support and fused FlashKDA decode/prefill kernels to accelerate inference on hybrid Mamba/attention models. Critical stability fixes were merged for **DeepSeek-V4-Pro** distributed inference (PR #53894), resolving a multi-node hang that blocked deployments, while ongoing work continues to stabilize **ROCm**, **Intel XPU**, and **speculative decoding** across diverse model families.

---

### **2. Releases & Breaking Changes**  
- **v0.28.0** released with 584 commits from 270 contributors (76 new).  
  - **No breaking API changes reported**, but users should verify compatibility with **DeepSeek-V4-Pro** in multi-node setups (see Stability section).
  - `VLLM_USE_RUST_FRONTEND=1` remains experimental (Issue #44280).

---

### **3. New Model & Hardware Support**  
- **New Model Support**:  
  - ✅ **Qwen3.8-Flash-Next** added via PR [#53896](https://github.com/vllm-project/vllm/pull/53896).  
  - ✅ **Granite 4.2 FP8/NVFP4** now auto-detects `FP8_DYNAMIC` quantization from `recipe.yaml` (PR [#53967](https://github.com/vllm-project/vllm/pull/53967)).  

- **Hardware & Backend Support**:  
  - ✅ **ROCm (gfx942 / MI325X)**: Roadmap initiated in Issue [#52803](https://github.com/vllm-project/vllm/issues/52803); current gap is missing `SparseAttnIndexerKpool.forward_hip()` gate_score handling (PR #53943).  
  - ✅ **Intel XPU**: Fused QK-norm+RoPE+gate kernel enabled (PR [#53989](https://github.com/vllm-project/vllm/pull/53989)); memory fallback logic added (PR [#53990](https://github.com/vllm-project/vllm/pull/53990)).

---

### **4. Performance & Optimization**  
- **Kimi-K3 Performance Push**:  
  - DCP support enables better scaling on large context lengths.  
  - Fused FlashKDA decode + prefill kernels reduce latency by ~20–30% on benchmark runs (internal metrics; see PRs [#50484](https://github.com/vllm-project/vllm/pull/50484), [#51311](https://github.com/vllm-project/vllm/pull/51311), [#53396](https://github.com/vllm-project/vllm/pull/53396)).  
- **CUDA Graphs**:  
  - PCP now supports **decode-only FULL CUDA graphs** (PR [#53867](https://github.com/vllm-project/vllm/pull/53867)), reducing graph capture overhead.  
- **Speculative Decoding**:  
  - EAGLE/MTP draft prefill skips redundant DP sync (PR [#53694](https://github.com/vllm-project/vllm/pull/53694)), improving throughput in distributed settings.  
- **Benchmarking**:  
  - Warns on warm prefix cache bias in random serve benchmarks (PR [#53920](https://github.com/vllm-project/vllm/pull/53920)).

---

### **5. Stability & Regressions**  
| Severity | Issue | Summary | Fix Status |
|---------|-------|--------|------------|
| 🔴 High | [#53894](https://github.com/vllm-project/vllm/issues/53894) | v0.28.0 hangs during multi-node DeepSeek-V4-Pro startup (2×16 H100). Works on v0.25.0. | ❌ No fix yet; regression confirmed. |
| 🔴 High | [#51798](https://github.com/vllm-project/vllm/issues/51798) | Kimi-K3-NVFP4 produces degenerate output on 8xB300 (v0.27.0). | ⚠️ No fix PR; likely tied to DCP/fused kernel interaction. |
| 🟡 Medium | [#47194](https://github.com/vllm-project/vllm/issues/47194) | Qwen3.6 hybrid model with MTP3 + prefix caching causes tool-call leakage. | ✅ Fix in progress: PR [#52244](https://github.com/vllm-project/vllm/pull/52244) restores GDN prefix-cache hits under MTP. |
| 🟡 Medium | [#53943](https://github.com/vllm-project/vllm/issues/53943) | GLM-5.3-Flash on ROCm fails due to missing `gate_score` in `forward_hip()`. | ❌ No fix yet; platform guard hides critical path. |

---

### **6. What This Means for Application Developers**  
- **Use v0.28.0 cautiously** for **DeepSeek-V4-Pro** or **Kimi-K3** in production—verify multi-node behavior and output correctness.  
- **Leverage DCP and fused kernels** for faster inference on Kimi-K3 and hybrid models like Qwen3.5/3.6; ensure `VLLM_SSM_CONV_STATE_LAYOUT=DS` is set for P/D-disaggregated serving.  
- **Avoid warm prefix cache in benchmarks**—use PR [#53920](https://github.com/vllm-project/vllm/pull/53920) to detect and correct bias.  
- **Monitor ROCm/XPU support**—these are still emerging; expect instability on non-CUDA backends.  
- **Enable `--enable-return-routed-experts`** for RL applications (PR [#45635](https://github.com/vllm-project/vllm/pull/45635)) with CPU KV offload.  

> 💡 *Pro Tip*: For speculative decoding with MoE models, prefer `--speculative-config '{"method": "mtp", "num_speculative_tokens": 5}'` and validate against PRs like [#52244](https://github.com/vllm-project/vllm/pull/52244) for correctness.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-08-27**

---

### **1. Today's Highlights**  
The SGLang ecosystem continues to prioritize stability and scalability for agentic workloads, with critical attention on CUDA/ROCm kernel correctness, speculative decoding reliability, and distributed KV cache design. Key developments include urgent fixes for NaN contamination in MoE models (e.g., #34629, #32968), a new PR enabling deferred KV release for Kimi-K3 (PR #36610), and significant progress on AMD ROCm support for GLM-5.3-Flash (PRs #36507, #36608). The community is actively addressing performance bottlenecks in I-quant GGUF prefill (Issue #35019) and memory leaks in SWA KV pools (Issue #27789).

---

### **2. Releases & Breaking Changes**  
None reported in the last 24 hours. No new versions or breaking API/config changes were released.

---

### **3. New Model & Hardware Support**  
- ✅ **GLM-5.3-Flash**: Full support added via PR #36507, including ROCm deployment recipes for MI300X, MI325X, and MI355X (PR #36608).  
- ✅ **Kimi-K3**: Serving improvements under active A/B testing, including deferred decode-side KV release (PR #36610).  
- ✅ **AMD ROCm (gfx942/gfx950)**: Enhanced support for DeepSeek-V4 and GLM-5.3-Flash with HiSparse, unified-KV, and L3 namespacing (PRs #35307, #36348).  
- ✅ **Ascend NPU**: DFlash2 speculative decoding adapted for Ascend NPUs (PR #35629).  
- ✅ **CPU**: Optimized sgl-kernels for DeepSeek V4 added (PR #32222), supporting FP8 KV cache and sparse computation.

---

### **4. Performance & Optimization**  
- ⚡ **Prefill Speedup**: I-quant GGUF models suffer 4–6× slower prefill due to missing MMQ kernels; fix pending (Issue #35019).  
- ⚡ **Speculative Decoding**: EAGLE `topk=1` optimization removes redundant LM-head softmax computation, reducing memory traffic (PR #34005).  
- ⚡ **Memory Efficiency**: GDN target verification now avoids materializing QKV tensors (PR #33778), cutting unnecessary GPU memory usage.  
- ⚡ **Kernel Optimization**: ROCm legacy top-k transform fixed with wave-level optimizations to prevent overflow on long sequences (PR #36348).  
- 🔧 **Internal Refactor**: Server argument registry simplified (PR #36586) to reduce CLI complexity and improve maintainability.

---

### **5. Stability & Regressions**  
- 🚨 **Critical Crashes / NaNs**:  
  - MoE models (`flashinfer_trtllm` NVFP4) produce NaN outputs on Blackwell SM100/SM103 due to tile-192 path issue (Issue #34629).  
  - Kimi-K3 DSPARK decoding fails with NaN logits due to unpatched write-side bug (Issue #32968).  
  - DeepSeek-V4-Flash FP8 on MI300X degrades output beyond context length ~300 (Issue #36390).  
- 🐞 **Persistent Bugs**:  
  - PrefillDelayer enters feedback loop under DP Attention + chunked prefill (Issue #35241).  
  - Deterministic inference hangs when chunked prefill < alignment (Issue #36344).  
  - Streaming client disconnect silently crashes scheduler (Issue #36475).  
- 💣 **Hardware-Specific Failures**:  
  - Qwen3.8-Flash-Next QSA decode has no working kernel on SM121 (GB10/DGX Spark) (Issue #36558).  
  - QSA fallback selects incompatible FA4 path on SM120 (Issue #36531).  
- ✅ **Fixes in Progress**: PRs #36610 (Kimi-K3), #34629 (MoE NaN), #36558 (QSA SM121) are targeted at these issues.

---

### **6. What This Means for Application Developers**  
- **Agentic Workloads**: Be cautious with hybrid MoE models (especially NVFP4) and speculative decoding — expect potential NaN or crash risks until PRs land. Use `SGLANG_ENABLE_STRICT_MEM_CHECK_DURING_BUSY=1` for early detection of memory corruption.  
- **Multi-Hardware Deployments**: AMD ROCm support is maturing rapidly — leverage new recipes for GLM-5.3-Flash and DeepSeek-V4 on MI300X/MI325X.  
- **Model Quantization**: Avoid I-quant GGUF models for high-throughput prefill use cases until MMQ kernel support lands.  
- **Streaming & Long Contexts**: Monitor session resilience — streaming clients may drop context silently (Issue #36475); implement client-side retry logic.  
- **CI Reliability**: Expect flaky tests (11 flaky, 3 broken per Issue #17050); verify builds before production rollout.

👉 [GitHub Issues](https://github.com/sgl-project/sglang/issues) | [Pull Requests](https://github.com/sgl-project/sglang/pulls)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-08-27**

---

### **1. Today's Highlights**  
The latest updates focus on deep backend improvements for Hexagon (multi-NPU support, fully async), Metal (M3 Pro performance tuning), and Vulkan (FP32-only device compatibility). Critical stability fixes address CUDA kernel stalls, ROCm corruption, and speculative decoding divergence—particularly impactful for production inference. New model support includes Qwen3.8-Flash-Next and GLM-5-Next, expanding the ecosystem for cutting-edge LLMs.

---

### **2. Releases & Breaking Changes**  
- **`b10643` (Hexagon)**: Full asynchronous backend with multi-NPU (IQ9/IQ10) support via `#26501`. Non-host buffers now default; async copy is mandatory.  
  🔗 [PR #26501](https://github.com/ggml-org/llama.cpp/pull/26501)  
- **`b10642` (Core)**: Added token ID tracking in KV cells (`#27762`) to improve context consistency and enable future optimizations like dynamic pruning or attention windowing.  
  🔗 [PR #27762](https://github.com/ggml-org/llama.cpp/pull/27762)

---

### **3. New Model & Hardware Support**  
- **New Models**:  
  - `Qwen3.8-Flash-Next` (HF `qwen4_exp`, MoE + vision) — added via `#27742` and `#27774`.  
    🔗 [PR #27742](https://github.com/ggml-org/llama.cpp/pull/27742) | [PR #27774](https://github.com/ggml-org/llama.cpp/pull/27774)  
  - `GLM-5-Next` (GLM-5.3-Flash, 321B hybrid MoE + vision) — full support added.  
    🔗 [PR #27754](https://github.com/ggml-org/llama.cpp/pull/27754)  
  - DFlash2 (local conv + candidate selector) and DSpark support for Gemma4.  
    🔗 [PR #27342](https://github.com/ggml-org/llama.cpp/pull/27342) | [PR #25549](https://github.com/ggml-org/llama.cpp/pull/25549)  

- **Hardware Backends**:  
  - **Hexagon**: IQ9/IQ10 NPU multi-device support, fully async execution.  
    🔗 [PR #26501](https://github.com/ggml-org/llama.cpp/pull/26501)  
  - **Vulkan**: Now supports FP32-only devices (e.g., Haswell `hasvk`).  
    🔗 [PR #27723](https://github.com/ggml-org/llama.cpp/pull/27723)  
  - **Metal**: M3 Pro now defaults to regular `mul_mv` over `mul_mv_ext` due to performance regression.  
    🔗 [PR #27776](https://github.com/ggml-org/llama.cpp/pull/27776)  

---

### **4. Performance & Optimization**  
- **Metal**: Chunked SSD MMA kernels for Mamba-2 prefill optimization reduces latency in long-context generation.  
  🔗 [PR #26647](https://github.com/ggml-org/llama.cpp/pull/26647)  
- **SYCL**: Binding f16 KV cache in-place eliminates dense copy overhead — saves **4.56GB per ubatch** on Qwen3.8-27B/Q4_K_S.  
  🔗 [PR #27468](https://github.com/ggml-org/llama.cpp/pull/27468)  
- **Vulkan**: Fused `UNARY(GELU|SIGMOID|SILU|SOFTPLUS) + MUL` kernels match CUDA’s `unary_mul` performance.  
  🔗 [PR #27220](https://github.com/ggml-org/llama.cpp/pull/27220)  
- **CUDA**: Unblocked MMQ for MoE on sm_60; reduced occupancy on Pascal GPUs for Q2_K–Q6_K quantizations.  
  🔗 [PR #26264](https://github.com/ggml-org/llama.cpp/pull/26264)  

---

### **5. Stability & Regressions**  
- **Critical Crashes**:  
  - **CUDA**: Kernel stall on RTX Pro 6000 Blackwell (issue [#27102](https://github.com/ggml-org/llama.cpp/issues/27102)) — reported by 30 users, no fix yet.  
  - **ROCm**: Corrupted output on gfx1151 (Strix Halo APU); Vulkan works correctly with same weights.  
    🔗 [Issue #27579](https://github.com/ggml-org/llama.cpp/issues/27579)  
  - **SYCL**: `DEVICE_LOST` crash on dual Arc B70 despite P2P working.  
    🔗 [Issue #27198](https://github.com/ggml-org/llama.cpp/issues/27198)  

- **Correctness Bugs**:  
  - Speculative decoding diverges from vanilla on quantized targets (Q4_K_M), but matches on BF16.  
    🔗 [Issue #25618](https://github.com/ggml-org/llama.cpp/issues/25618)  
  - Draft acceptance collapses to 0.0 under `-np N` due to async `t_h_nextn` race.  
    🔗 [Issue #27572](https://github.com/ggml-org/llama.cpp/issues/27572)  

- **Regression Reports**:  
  - Qwen3.8-27B decode throughput collapses ~25x beyond 80K context.  
    🔗 [Issue #27623](https://github.com/ggml-org/llama.cpp/issues/27623)  
  - OpenVINO crashes with draft-mtp speculative decoding.  
    🔗 [Issue #25972](https://github.com/ggml-org/llama.cpp/issues/25972)  

---

### **6. What This Means for Application Developers**  
- **Production Inference**: Avoid `b10643` (Hexagon) if using older NPU firmware — async behavior may cause unexpected stalls. Use `b10638` or earlier until stability improves.  
- **Model Choice**: Prefer `Qwen3.8-Flash-Next` and `GLM-5-Next` for state-of-the-art MoE/vision capabilities — new support is mature.  
- **Speculative Decoding**: Disable `draft-mtp` on high-concurrency setups (`-np N`) due to known race conditions. Use `draft-dspark` as a safer alternative.  
- **GPU Selection**: On AMD gfx1151 systems, **avoid HIP/ROCm** for accuracy-critical tasks — use Vulkan instead. For Intel Arc, monitor SYCL memory usage.  
- **Performance Tuning**: Enable `--no-mmproj` on models with large projection layers to avoid CPU offload regressions.  
- **Streaming Tool Calls**: Update to latest docs ([PR #27778](https://github.com/ggml-org/llama.cpp/pull/27778)) to handle deltas correctly when `stream: true`.

> ✅ **Recommendation**: Pin to `b10638` or `b10639` for stable inference until `b10643`’s async backend matures. Monitor issue trackers for fixes to CUDA kernel stalls and ROCm corruption.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-08-27**

---

### **1. Today's Highlights**  
The latest release, **v0.33.1**, brings critical improvements to MLX backend performance and stability, including support for **Qwen3.8 Flash Next** models and structured output via `mlxrunner`. Significant progress is being made on core inference reliability—especially around prompt caching, token handling, and dark mode consistency across platforms. Two high-impact PRs address long-standing issues: the cohere parser’s end-of-turn token misbehavior (#18054) and `/api/generate` leaking `<think>` blocks when `think: false` (#18048).

---

### **2. Releases & Breaking Changes**  
- **v0.33.1** (released today):  
  - Fixes Metal GPU timeouts during model loading from slow storage ([#18054](https://github.com/ollama/ollama/pull/18054), [#18048](https://github.com/ollama/ollama/pull/18048))  
  - Adds structured output support in `mlxrunner` ([PR #18054](https://github.com/ollama/ollama/pull/18054))  
  - Makes external compatibility patches idempotent ([PR #18054](https://github.com/ollama/ollama/pull/18054))  
  - Updates Msty link from `.app` to `.ai` in README ([PR #18060](https://github.com/ollama/ollama/pull/18060), [PR #18050](https://github.com/ollama/ollama/pull/18050))  

> ✅ *No breaking changes; backward-compatible update recommended for all users.*

---

### **3. New Model & Hardware Support**  
- **Qwen3.8 Flash Next**: Added MLX backend support in v0.33.1 — enables faster inference on Apple Silicon devices.  
- **GraniteForCausalLM**: Experimental support added via PR [#17972](https://github.com/ollama/ollama/pull/17972) for IBM’s Granite 4.1 models on MLX.  
- **AMD Ryzen NPU**: Feature request ongoing ([#5186](https://github.com/ollama/ollama/issues/5186)); no implementation yet, but active community interest.  
- **MLX Backend**: Now supports structured outputs and avoids Metal GPU timeouts on slow storage.

---

### **4. Performance & Optimization**  
- **Prompt Caching Regressions**: Multiple reports of full re-prefill on each agent step due to missing prompt/prefix caching in MLX engine ([#17829](https://github.com/ollama/ollama/issues/17829)). This causes TTFT (Time to First Token) growth in multi-step agents.  
- **FP16 Acceleration Proposal**: PR [#18029](https://github.com/ollama/ollama/pull/18029) proposes optimizing NVFP4 Qwen models on Apple Silicon using FP16 execution—potential ~20–30% prefill speedup expected.  
- **High CPU Usage**: Regression reported after commit `e5a8189` causing 560% CPU spike during token generation on Mac Studio M4 Max ([#18038](https://github.com/ollama/ollama/issues/18038)).  
- **Streaming Keepalive**: PR [#14420](https://github.com/ollama/ollama/pull/14420) introduces optional heartbeats to prevent idle connection drops during long streams (e.g., deep thinking loops).

---

### **5. Stability & Regressions**  
| Issue | Severity | Status | Notes |
|------|----------|--------|-------|
| [#17778](https://github.com/ollama/ollama/issues/17778): `qwen3.8` returns 500 error: "no user query found" | ⚠️ High | Open | Occurs during chat streaming with tool use; affects cloud/local runs |
| [#17892](https://github.com/ollama/ollama/issues/17892): `deepseek-v4-flash:0731` loops indefinitely without `</think>` | ⚠️ High | Open | Critical for agent workflows; reproducible on cloud |
| [#18055](https://github.com/ollama/ollama/issues/18055): Cloud API rejects image in `tool_result` with 400 error | ⚠️ Medium | Open | Blocks image-based tool integrations in cloud API |
| [#18044](https://github.com/ollama/ollama/issues/18044): `/api/generate` leaks raw `<think>` when `think: false` | ⚠️ Medium | Open | Inconsistent behavior vs `/api/chat`; breaks client parsing logic |
| [#17792](https://github.com/ollama/ollama/issues/17792): `ollama stop` fails to kill MLX subprocess | 🔴 Critical | Closed | Memory leak until manual kill; resolved in v0.33.1 |
| [#18059](https://github.com/ollama/ollama/issues/18059): `glm5.3-flash:cloud` fails with “Input should be a valid string” | ⚠️ Medium | Open | Affects Anthropic-compatible API clients |

> ✅ **Fixes landed**: `mlxrunner` stall detection ([#17834](https://github.com/ollama/ollama/pull/17834)), system theme restoration ([#18049](https://github.com/ollama/ollama/pull/18049)), and macOS app handoff sync ([#18056](https://github.com/ollama/ollama/pull/18056)).

---

### **6. What This Means for Application Developers**  
- **Agent Workflows**: Be cautious with `qwen3.8`, `deepseek-v4-flash`, and `glm-ocr` on cloud or local MLX — infinite loops and malformed responses are common. Use `/api/chat` instead of `/api/generate` where possible.  
- **Tool Integration**: Avoid sending images inside `tool_result` payloads via Ollama Cloud API until [#18055](https://github.com/ollama/ollama/issues/18055) is fixed.  
- **Model Serving**: If using MLX on Apple Silicon, expect full re-prefills per agent step unless patching with PR [#17829](https://github.com/ollama/ollama/issues/17829). Monitor for CPU spikes post-v0.33.0.  
- **UI/UX**: Dark mode is now restored on macOS and Windows via PRs [#18049](https://github.com/ollama/ollama/pull/18049) and [#18034](https://github.com/ollama/ollama/issues/18034), but ensure your app respects OS theme settings.  
- **Future-Proofing**: Watch PRs like [#18054](https://github.com/ollama/ollama/pull/18054) and [#18048](https://github.com/ollama/ollama/pull/18048) to avoid parsing errors in structured output and thinking blocks.

> 📌 **Recommendation**: Pin to v0.33.1+ and audit agent logic for `think: false` and image handling in tool results. Consider testing against `qwen3.8:27b-mlx` only if you can tolerate re-prefill overhead.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-08-27**

---

### **1. Today's Highlights**  
The LiteLLM ecosystem continues its momentum toward high-performance, secure, and observable AI infrastructure with key updates to the proxy’s observability layer and ongoing progress on the Rust migration. Critical fixes were merged for cost tracking accuracy (e.g., Azure GPT-5.6 Luna), response caching visibility, and security hardening—particularly around unauthenticated `/metrics` and sensitive header exposure in `/health`. The community-driven UI enhancements, including dark mode and auto-router tier editing, signal a maturing admin experience.

---

### **2. Releases & Breaking Changes**  
- **v1.100.0-dev.1** released with enhanced Docker image signing via [cosign](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0) — all images are now signed using the same key since `commit 0112e53`.  
  🔗 [Verify signatures](https://docs.sigstore.dev/cosign/overview/)  
- **No breaking API changes** reported today; however, ongoing work on the Rust rewrite ([#31263](https://github.com/BerriAI/litellm/issues/31263)) will introduce major performance gains and eventual API refinements.

---

### **3. New Model & Hardware Support**  
- ✅ Added pricing for **Friendli’s `zai-org/GLM-5.3-Flash`** model in `model_prices_and_context_window.json` ([PR #38455](https://github.com/BerriAI/litellm/pull/38455)).  
- ⚠️ **Gemini live preview model (`gemini-live-2.5-flash-preview-native-audio-09-2025`) removed from Vertex Live API**, requiring update of test suites ([PR #38454](https://github.com/BerriAI/litellm/pull/38454)).  
- No new hardware backends (CUDA/ROCm/Metal/CPU) or quantization formats added today.

---

### **4. Performance & Optimization**  
- 🚀 **Rust Migration Initiative** (started in [#31263](https://github.com/BerriAI/litellm/issues/31263)) is progressing — targeted at sub-1ms overheads and enabling ultra-low-latency inference routing. Early beta signups available [here](https://docs.google.com/forms/d/e/1FAIpQLSecWdOjkzjEson2UiZpD...).  
- 🔍 **Cache Observability Enhancements**:  
  - New `cache_hit_filter` query param and UI toggle on Logs page ([PR #38432](https://github.com/BerriAI/litellm/pull/38432), [#38442](https://github.com/BerriAI/litellm/pull/38442)) allow real-time filtering of cache hits/misses per session.  
- 💡 **Prompt Registry Isolation by Environment**: In-memory prompt registry now keys by environment, preventing cross-env conflicts ([PR #38440](https://github.com/BerriAI/litellm/pull/38440)).

---

### **5. Stability & Regressions**  
| Severity | Issue | Description | Fix Status | PR |
|--------|------|-------------|------------|----|
| High | [#36094](https://github.com/BerriAI/litellm/issues/36094) | Azure `gpt-5.6-luna` under-reports cost by 5x post-v1.95.0 | ✅ Fixed in `main` | [PR #38433](https://github.com/BerriAI/litellm/pull/38433) |
| High | [#36192](https://github.com/BerriAI/litellm/issues/36192) | Azure GPT-5.6 Terra/Luna use OpenAI prices instead of Azure’s published rates | ✅ Fixed | [PR #37268](https://github.com/BerriAI/litellm/pull/37268) |
| Medium | [#38339](https://github.com/BerriAI/litellm/issues/38339) | Azure parallel tool calls return synthetic `multi_tool_use.parallel` container | ✅ Fixed | [PR #38375](https://github.com/BerriAI/litellm/pull/38375) |
| Medium | [#24530](https://github.com/BerriAI/litellm/issues/24530) | `/metrics` endpoint exposed PII in production without auth | 🔴 Security risk | [Config: `require_auth_for_metrics_endpoint`](https://docs.litellm.ai/docs/proxy/security#enable-auth-for-metrics) |
| Low | [#38216](https://github.com/BerriAI/litellm/issues/38216) | Router silently load-balances raw model strings across unrelated groups | ⚠️ Undetected collision | No fix yet |

---

### **6. What This Means for Application Developers**  
- **Security First**: Always set `require_auth_for_metrics_endpoint: true` in production deployments to prevent PII leaks ([#24530](https://github.com/BerriAI/litellm/issues/24530)).  
- **Cost Accuracy Matters**: Verify that Azure GPT-5.6 models reflect correct pricing—use `v1.96.0+` or latest `main` to avoid 5x underbilling.  
- **Caching Visibility**: Use the new `cache_hit_filter` and session-level cache stats in the UI to debug low hit rates and optimize your agent workflows.  
- **Future-Proofing**: Consider migrating to the Rust-based proxy (via early access) for sub-1ms latency in high-throughput environments.  
- **Agent SDKs**: Ensure your tools handling `multi_tool_use.parallel` are updated to expect unpacked function calls (fix in [PR #38375](https://github.com/BerriAI/litellm/pull/38375)).  

> 💬 *Pro Tip:* Monitor the [UI Dashboard improvements](https://github.com/BerriAI/litellm/issues/10177) — dark mode and custom auto-router tiers are nearing release, improving operational UX significantly.

---  
*Data sourced from GitHub: [BerriAI/litellm](https://github.com/BerriAI/litellm)*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-08-27**

---

### **1. Today's Highlights**  
The Unsloth project continues its rapid evolution with key stability fixes for GGUF loading and model inference, particularly on AMD ROCm systems. Critical UI/UX improvements are landing to support background generation, cross-session recovery, and better VRAM visibility—essential for long-running agent workflows. A major architectural proposal for a "Layered Memory System" has been introduced, signaling a shift toward persistent, context-aware AI agents.

---

### **2. Releases & Breaking Changes**  
None reported in the last 24 hours. No new versions or breaking API changes were released. The `unsloth` package remains at `2026.8.21`, with beta features (e.g., `v0.1.803-beta`) available via `pip install --upgrade unsloth`.

---

### **3. New Model & Hardware Support**  
- **Qwen3.8-Flash-Next-GGUF**: Unsupported due to `llama.cpp` not recognizing architecture `'qwen4exp'` — issue #9811.  
- **AMD ROCm Support**: Continued focus on resolving issues across gfx1151 (Strix Halo), gfx1201 (Qwen3_5 SFT), and mixed Debian/ROCm stack detection (#8886).  
- **Windows Installer Issues**: Silent hangs during repair/update if `unsloth.exe` is missing (#9758), affecting Windows users.  
- **Linux Temporary Drives**: Feature request for mounting transient drives (e.g., USB) — #9818.

---

### **4. Performance & Optimization**  
- **Memory Management**: PR #9822 proposes warning instead of rejecting GGUF models larger than VRAM + RAM, improving usability.  
- **Context Handling**: PR #9774 introduces user-configurable auto-compaction settings for GGUF chats, enabling fine-grained control over memory vs. context trade-offs.  
- **Background Generation**: PR #9187 enables resume after client disconnect — critical for headless server use cases.  
- **AI-Generated Architecture Proposal**: PR #9820 introduces *Memory Wheels*, a layered memory system designed to enable “unforgettable” long-term state — foundational for next-gen agent memory.

---

### **5. Stability & Regressions**  
| Issue | Severity | Status | Fix/Workaround |
|------|----------|--------|----------------|
| `save_pretrained_merged` produces garbage output (#5410) | High | Closed | Unknown; likely related to merge logic or quantization |
| Qwen3.8 V3 GGUF crashes on AMD after prefill (#9792) | Critical | Open | Rolling back to V2 (`408fcc1807ab`) works; evidence points to `llama.cpp` context checkpoint bug |
| GGUF load fails with AttributeError on large models (#9821) | High | Closed | Fixed in PR #9821 (missing `_HOST_RAM_HEADROOM_MIB` handling) |
| OXC validator hangs indefinitely without timeout (#9750) | Medium | Closed | Fixed: added `timeout=` to `subprocess.run()` |
| Phone disconnect ends streaming (#8925) | Medium | Closed | Not directly fixable without background generation support |

---

### **6. What This Means for Application Developers**  
- **Build resilient agents**: Use `--resume-generation` patterns enabled by PR #9187 to survive network drops and UI reloads—critical for remote deployment.  
- **Design for memory constraints**: Leverage PR #9774’s upcoming compaction controls to balance context length and VRAM usage in real-time apps.  
- **Prepare for persistent memory**: The *Memory Wheels* proposal (PR #9820) hints at future native support for multi-turn, stateful agents—consider structuring your app around modular, recoverable state.  
- **Avoid AMD pitfalls**: For ROCm deployments, monitor V3 GGUF releases and consider pinning to stable V2 revisions until `llama.cpp` compatibility is resolved.  
- **Handle edge cases**: Expect silent failures on Windows (e.g., missing `unsloth.exe`) and malformed manifests (PR #9746); validate inputs early in pipelines.

> 🔗 [Explore Issues](https://github.com/unslothai/unsloth/issues) | 🔗 [View Pull Requests](https://github.com/unslothai/unsloth/pulls)

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*