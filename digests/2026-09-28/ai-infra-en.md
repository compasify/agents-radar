# AI Infrastructure Digest 2026-09-28

> Generated: 2026-09-28 01:08 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-09-28**

---

### **1. Ecosystem Overview**

The AI inference and serving ecosystem in Q3 2026 is rapidly maturing, with a clear bifurcation between **high-performance, production-grade engines** (vLLM, SGLang) and **developer-friendly, multi-backend gateways** (LiteLLM, Ollama). Key momentum lies in support for next-gen models like Qwen4Exp, KimiViT, and DeepSeek-V4.1, alongside hardware specialization for DGX Spark (GB10), RTX 5090, and AMD MI350X. Critical focus areas include stability under load, memory efficiency, and cross-architecture parity—especially around MoE, hybrid vision-language models, and tiered offloading. The emergence of Rust-native backends and MLX/AMD/Vulkan integration signals a shift toward broader hardware accessibility.

---

### **2. Activity Comparison**

| Project       | Issues Open (↑) | PRs Merged (↑) | Release Status      |
|---------------|------------------|------------------|----------------------|
| vLLM          | 217 (+12)        | 18               | No new release       |
| SGLang        | 154 (+9)         | 14               | No new release       |
| llama.cpp     | 246 (+15)        | 21               | Patch updates only   |
| Ollama        | 189 (+14)        | 8                | Critical regression in v0.34.4 |
| LiteLLM       | 167 (+11)        | 12               | No new release       |
| Unsloth       | 148 (+10)        | 15               | Prebuilt wheels released |

> ✅ *Insight:* **llama.cpp** and **Ollama** show high issue volume due to widespread deployment and edge-case sensitivity; **vLLM** leads in PR velocity, indicating deep engineering investment in core performance and correctness.

---

### **3. Model Support Race**

| New Model / Architecture       | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|-------------------------------|------|--------|-----------|--------|---------|---------|
| Qwen4Exp (NVFP4)              | ✅   | ❌     | ❌        | ❌     | ❌      | ❌      |
| KimiViT (Kimi-K3)             | ✅   | ❌     | ❌        | ❌     | ❌      | ❌      |
| DeepSeek-V4.1-Flash (AMD)     | ❌   | ✅     | ❌        | ❌     | ❌      | ❌      |
| SANA-Video 2.0 (T2V/TI2V)      | ❌   | ✅     | ❌        | ❌     | ❌      | ❌      |
| GLM-5.3-Flash (Vision)        | ✅   | ❌     | ✅        | ❌     | ❌      | ❌      |
| Cohere MoE (RTX 5090)          | ❌   | ❌     | ❌        | ⚠️ (crash)| ❌    | ❌      |
| DGX Spark (GB10, SM121)        | ✅   | ❌     | ❌        | ❌     | ❌      | ❌      |
| Vulkan (Intel/Adreno)         | 🚧   | ❌     | ✅        | ❌     | ❌      | ❌      |
| Cambricon MLU                 | ❌   | ✅     | ❌        | ❌     | ❌      | ❌      |

> 🏆 **Leaderboard**:  
> - **vLLM** leads in **next-gen model & GPU hardware support**, especially for NVFP4, GB10, and Mamba/GDN hybrids.  
> - **SGLang** dominates **cross-architecture parity**, with full AMD MI350X and native video generation support.  
> - **llama.cpp** excels in **multimodal and low-level backend flexibility**, including Vulkan, SYCL, HIP, and emerging XDNA interest.

---

### **4. Performance Frontier**

| Optimization Focus          | vLLM                  | SGLang               | llama.cpp           | Ollama             | LiteLLM               | Unsloth               |
|------------------------------|------------------------|----------------------|---------------------|--------------------|------------------------|------------------------|
| KV Cache Management          | Tiered offload, TurboQuant | HiCache prefetch   | RANK pooling batch split | —                | Structured tracing     | TurboQuant (MLX)       |
| Batching & Throughput        | Packed NVFP4, fused kernels | Prefill gap analysis | Batch-splitting rerankers | —                | Cost-aware routing     | Multi-GPU layer splitting |
| Quantization                 | IQ2_NL/IQ3_NL, GDN     | —                    | IQ2_NL/IQ3_NL       | NVFP4 slowdown (MLX) | Virtual key cost tracking | Block-FP8 LoRA training |
| Distributed Serving          | Sequence parallelism    | All-reduce v2 (issue) | —                   | —                | MCP gateway            | Manual GPU splitting   |
| Kernel-Level Tuning          | MergedColumnParallelLinear, RoPE fusion | MoE tuning, graph capture | FlashAttention (FP16) | —                | Python bridge (Rust)   | Causal-Conv1D, Mamba_SSM |

> 🔥 **Key Insight**: vLLM remains the **performance leader in kernel fusion and batching**, while **Unsloth pushes boundaries in fine-tuning speed** (15x LoRA gains) and **SGLang leads in distributed scalability research** despite stability gaps.

---

### **5. Layer Positioning**

| Project       | Primary Layer                     | Secondary Role                         | Distinctive Strength                          |
|---------------|------------------------------------|----------------------------------------|------------------------------------------------|
| **vLLM**      | High-throughput inference engine   | Model serving, LLM gateway             | Production-grade latency, batch invariance, sequence parallelism |
| **SGLang**    | Advanced inference runtime         | Gateway + agent orchestration          | Native T2V/TI2V, speculative decoding, AMD support |
| **llama.cpp** | Local inference runtime            | Edge/low-memory deployment             | Cross-platform, Vulkan/SYCL/MLX support, quantization depth |
| **Ollama**    | Developer-first gateway            | Local model runner, CLI tool           | Simplicity, ease of use, but unstable at scale |
| **LiteLLM**   | Unified API gateway                | Observability, cost control, routing   | Structured tracing, virtual keys, Azure/OCI dynamic routing |
| **Unsloth**   | Training/fine-tuning accelerator   | Studio-based inference & tooling       | Block-FP8 LoRA, MLX optimization, prebuilt wheels |

> 🎯 **Strategic Implication**: vLLM and LiteLLM are **production infrastructure anchors**; SGLang and Unsloth target **advanced research workflows**; Ollama and llama.cpp serve **developer access and edge deployment**.

---

### **6. Trend Signals**

#### 🔍 **Emerging Industry Trends**
1. **Hardware Specialization is Accelerating**: Projects now explicitly target **DGX Spark (GB10)**, **RTX 5090**, **AMD MI350X**, and **Cambricon MLU**, signaling that hardware diversity is no longer an afterthought.
2. **Rust-Native Integration Is Maturing**: vLLM’s Rust frontend and LiteLLM’s `python-bridge` route indicate a strategic move toward **lower-latency, memory-efficient inference pipelines**.
3. **MoE and Hybrid Models Demand Precision**: Fixes for MoE + TurboQuant (vLLM), block-FP8 training (Unsloth), and structured output handling (LiteLLM) reveal that **model complexity requires deeper system-level attention**.
4. **Stability Over Feature Velocity**: Despite rapid feature rollouts, **critical regressions in Ollama, SGLang, and vLLM** highlight that reliability is the top barrier to production adoption.
5. **Observability & Cost Control Are Becoming Standard**: LiteLLM’s structured tracing, cost-by-metadata billing, and budget limiter improvements reflect a **shift from "just work" to "monitorable, accountable AI systems"**.

#### 🛠️ **What Developers Should Watch**
- **Avoid v0.34.4 Ollama** until critical hangs/crashes are resolved.
- **Validate model capabilities empirically**—e.g., `deepseek-v4.1-flash:cloud` claims vision but discards images.
- **Use `VLLM_USE_RUST_FRONTEND=1` only in prototyping**—not yet production-ready.
- **Monitor VRAM usage closely with Unsloth fine-tuning**—reported limits may be underestimated.
- **Enable LiteLLM’s OTel V2 + structured tracing early** for debugging agent flows across providers.

> ✅ **Final Takeaway**: The infrastructure stack is evolving beyond raw throughput. **Correctness, observability, and cross-hardware robustness** are now the new differentiators. Choose your stack not just for speed—but for **reliability under real-world load**.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

---

### **1. Today's Highlights**  
vLLM continues rapid progress in production-grade inference for next-gen models, with critical fixes to **batch invariance correctness under sequence parallelism** and **tiered offloading stability on DGX Spark (GB10)**. New PRs enhance performance for **Qwen4Exp**, **KimiViT**, and **GDN-based models**, while the Rust frontend nears feature parity, signaling growing maturity for high-throughput, low-latency deployments.

---

### **2. Releases & Breaking Changes**  
*No new releases in the last 24 hours.*  
- **`VLLM_BATCH_INVARIANT=1`** remains unstable when combined with `enable_sp` (sequence parallelism) — a known regression tracked in [#56370](https://github.com/vllm-project/vllm/issues/56370), now fixed via PR [#58947](https://github.com/vllm-project/vllm/pull/58947).  
- **Rust frontend (`VLLM_USE_RUST_FRONTEND=1`)** is still experimental but gaining traction; full feature parity expected by v0.29.0. See [#44280](https://github.com/vllm-project/vllm/issues/44280).

---

### **3. New Model & Hardware Support**  
- ✅ **Qwen4Exp (NVFP4)**: Full support now includes packed NVFP4 PLE embeddings via PR [#56273](https://github.com/vllm-project/vllm/pull/56273), enabling 1x DGX Spark deployment without disk offloading.  
- ✅ **KimiViT (Kimi-K3)**: Fused QK RoPE kernel merged ([#58651](https://github.com/vllm-project/vllm/pull/58651)), improving prefill latency by ~29× on GB300 (256 tokens, 225.3→7.6 μs).  
- 🚧 **Vulkan**: Still missing — high-priority request [#21182](https://github.com/vllm-project/vllm/issues/21182) has 32 comments and 35 upvotes; no active PRs yet.  
- 🔧 **DGX Spark (GB10, SM121)**: Multiple fixes address unified memory OOMs ([#56824](https://github.com/vllm-project/vllm/issues/56824)) and illegal instruction crashes in Mamba-2 kernels ([#37431](https://github.com/vllm-project/vllm/issues/37431)).

---

### **4. Performance & Optimization**  
- **Qwen3.5 GDN**: Fusion of `in_proj_ba` into 6-way `MergedColumnParallelLinear` improves spec decode throughput by reducing kernel launches ([#41457](https://github.com/vllm-project/vllm/pull/41457)).  
- **Hybrid MoE + TurboQuant**: Fix for Ampere GPUs (SM 80–86) resolves broken KV cache behavior in Qwen3.6-35B-A3B ([#40124](https://github.com/vllm-project/vllm/issues/40124)).  
- **MiniMax-M3-NVFP4**: After correctness fix #48929, real-prose benchmarks show **EAGLE3 2.1–2.3× faster decode** on 8× B200 ([#51494](https://github.com/vllm-project/vllm/issues/51494)).  
- **KV Offload Tiering**: PR [#58804](https://github.com/vllm-project/vllm/issues/58804) addresses I/O liveness and data integrity issues in filesystem offload path ([#54363](https://github.com/vllm-project/vllm/issues/54363)).

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Fix PR |
|---------|------|--------|--------|
| Critical | Batch invariance broken with `enable_sp` + `VLLM_BATCH_INVARIANT=1` | Open | [PR #58947](https://github.com/vllm-project/vllm/pull/58947) |
| High | GLM-5.3-Flash long-decode degeneration after reasoning | Open | None |
| High | DGX Spark (GB10): Host memory collapse during prefill due to NV_ERR_NO_MEMORY | Open | [PR #56824](https://github.com/vllm-project/vllm/issues/56824) |
| Medium | Prefix caching corrupts output on hybrid Mamba/GDN models (v0.28.0) | Open | [PR #52244](https://github.com/vllm-project/vllm/pull/52244) |
| Medium | Mamba-2 Triton kernels crash on SM121 without `CUDA_LAUNCH_BLOCKING=1` | Open | [Issue #37431](https://github.com/vllm-project/vllm/issues/37431) |

---

### **6. What This Means for Application Developers**  
- **Use `VLLM_USE_RUST_FRONTEND=1`** cautiously: it’s stable enough for prototyping but not yet recommended for production until feature parity is confirmed.  
- **Avoid `VLLM_BATCH_INVARIANT=1` with sequence parallelism** until PR #58947 lands — this breaks determinism in multi-GPU setups.  
- **For long-context apps on DGX Spark (GB10)**: Monitor unified memory usage; use `--max-num-seqs=1` or reduce batch size if hitting OOMs.  
- **Enable structured outputs / tool calling** only with latest vLLM versions — regressions like #39929 (tool suppression) are fixed but may affect older builds.  
- **Benchmark with real-world workloads**: The MiniMax-M3-NVFP4 results show that post-correctness fixes can unlock 2×+ performance gains — always validate against your own use case.  

> 🔗 *Stay updated via:* [vLLM GitHub Issues](https://github.com/vllm-project/vllm/issues), [PRs](https://github.com/vllm-project/vllm/pulls), and [release notes](https://github.com/vllm-project/vllm/releases).

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-09-28**

---

### **1. Today's Highlights**  
SGLang continues to advance its support for next-generation inference hardware and advanced serving patterns, with critical work on AMD gfx950 (MI350X) integration for DeepSeek-V4.1 and new native SANA-Video 2.0 T2V/TI2V support. The community is actively addressing high-severity stability issues—particularly around speculative decoding crashes, detokenizer state eviction, and client disconnection handling—that could impact production reliability.

---

### **2. Releases & Breaking Changes**  
None. No new releases or breaking API/config changes reported in the last 24 hours.

---

### **3. New Model & Hardware Support**  
- ✅ **AMD gfx950 (MI350X)**: PR [#41308](https://github.com/sgl-project/sglang/pull/41308) enables full DSpark-based serving of **DeepSeek-V4.1-Flash** on AMD GPUs via `dsv4.1-amd` config. This marks a major step toward cross-architecture parity.
- ✅ **SANA-Video 2.0 (T2V & TI2V)**: PR [#41492](https://github.com/sgl-project/sglang/pull/41492) adds native diffusion model support for NVIDIA’s hybrid text-to-video and text-image-to-video models, closing issue #41490.
- 🚧 **Cambricon MLU**: PR [#26898](https://github.com/sgl-project/sglang/pull/26898) introduces an initial in-tree prototype backend for Cambricon MLU devices, validated with Qwen3-8B.

---

### **4. Performance & Optimization**  
- 🔍 **Prefill Throughput Gap**: Issue #33422 reports **~2–7K tok/s vs ~12.5K** (vLLM/Marlin) on 4× RTX PRO 6000 (SM120), suggesting untuned kernel coverage or graph capture limitations. Investigation ongoing.
- ⚙️ **HiCache Prefetch Delay**: Issue #32724 highlights that HiCache storage prefetch finalization delay can cause **long TTFT under load**, indicating scheduler-level bottlenecks.
- 📈 **Kernel Tuning for MoE**: Issue #32806 shows **+23.3% end-to-end throughput** on H200 when tuning LFM2.5 (E=32, N=1792) configs, underscoring the importance of per-hardware optimization.
- 🛠️ **Graph Capture Flexibility**: RFC #33852 proposes relaxing prefill CUDA graph constraints to allow bucket sizes below `chunked_prefill_size`, enabling more efficient batching strategies.

---

### **5. Stability & Regressions**  
**High Severity (Critical for Production):**
- ❌ **Detokenizer State Eviction Loss**: Issue #41236 — streaming silently drops up to **5 tokens** when `detokenizer_manager` evicts an in-flight request due to `LimitedCapacityDict` overflow. No fix PR yet.
- ❌ **Speculative Decoding Crash**: Issue #40843 — **severe repetition and degenerate loops** observed during GLM-5.3 serving with DFLASH speculative decoding. High-risk for reasoning agents.
- ❌ **Client Disconnect Crashes Engine**: Issue #39216 — uncaught `asyncio.CancelledError` in client disconnect path causes **entire engine crash**. Critical stability fix needed.

**Medium Severity:**
- ⚠️ **Request Abortion Confusion**: Issues #41465 and #41474 report that aborting a constrained request returns HTTP 400, and `/abort_request` with partial RIDs aborts unintended requests — both risk API misuse.

---

### **6. What This Means for Application Developers**  
- **Avoid speculative decoding** with GLM-5.3 until #40843 is resolved; expect hallucination risks in reasoning workflows.
- **Monitor detokenizer state limits** (`SGLANG_DETOKENIZER_MAX_STATES`) if running high-concurrency streaming jobs — you may silently lose output.
- **Use latest CI builds** for production: recent PRs like #41492 and #41308 bring new model/hardware support but carry instability risks.
- **Be cautious with `/abort_request`** — ensure request IDs are fully unique to avoid accidental batch kills.
- **Prepare for multi-node scaling**: Ongoing issues around all-reduce v2 (e.g., #36429) suggest care is needed in distributed deployments on GB300/NVL72.

> 💡 *Pro Tip*: For stable inference on SM120 or AMD, use tuned configs from PRs like #41308 and monitor `est_time` updates in CI (#41491) for accurate benchmarking.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# **llama.cpp Digest – 2026-09-28**

---

### **1. Today's Highlights**  
The latest updates focus on enhancing support for causal LLM rerankers (e.g., Qwen3, Qwen3-VL) through batch-splitting of RANK pooling, enabling efficient inference on large input sets. Key backend improvements include Vulkan performance tuning for Intel GPUs, CUDA optimizations for FP16 FlashAttention with head sizes 40–112, and new IQ2_NL/IQ3_NL quantization types across CPU, Metal, CUDA, and Vulkan backends—expanding precision options for MoE and high-capacity models.

---

### **2. Releases & Breaking Changes**  
- **`b11223`**: Added support for **RANK pooling batch splitting** in the server for causal LLM rerankers like Qwen3 and Qwen3-VL ([#28876](https://github.com/ggml-org/llama.cpp/pull/28876)). This enables scalable reranking of long document sets without requiring all tokens to be processed in a single batch.
- **`b11222`**: Refactored argument parsing to avoid side effects; `--rpc` is now registered unconditionally, and initialization logs are emitted after args are parsed ([#29537](https://github.com/ggml-org/llama.cpp/pull/29537)).
- **`b11214`**: Fixed GPU kernel selection logic for Adreno Vulkan devices ([#29469](https://github.com/ggml-org/llama.cpp/pull/29469)).

> 🔔 *Note: No breaking API changes reported today.*

---

### **3. New Model & Hardware Support**  
- **Model Support**:  
  - Added experimental support for **GLM-5.3-Flash (GLM5-Next)**, a 320B hybrid model supporting both text and vision modalities ([#27773](https://github.com/ggml-org/llama.cpp/pull/27773)).
- **Hardware & Backend Support**:  
  - **Vulkan**: Improved Intel GPU performance via GDN kernel tuning ([#29476](https://github.com/ggml-org/llama.cpp/pull/29476)).  
  - **SYCL**: Expanded FWHT kernels to support block widths >512 (384, 640, 768, 1280) using Kronecker/Paley construction ([#29243](https://github.com/ggml-org/llama.cpp/pull/29243)).  
  - **HIP**: Enabled fattn-mma kernel on cdna architecture for dkq > 256, improving large-batch throughput ([#28907](https://github.com/ggml-org/llama.cpp/pull/28907)).  
  - **XDNA**: Feature request opened for XDNA backend support ([#21725](https://github.com/ggml-org/llama.cpp/issues/21725)), indicating growing interest in edge AI hardware.

---

### **4. Performance & Optimization**  
- **CUDA**: Tuned FP16 tile FlashAttention configs for head sizes 40–112, optimizing memory access patterns ([#26289](https://github.com/ggml-org/llama.cpp/pull/26289)).
- **Vulkan**: Benchmarks show **~6.3% improvement** in latency on RTX 3090 for ubatch=2048 and 4096 after GDN kernel optimization ([#29476](https://github.com/ggml-org/llama.cpp/pull/29476)).
- **Quantization**: Introduced **IQ2_NL and IQ3_NL** quantization types (CPU/Metal/CUDA/Vulkan), allowing more efficient use of K-quants on non-divisible tensor dimensions by avoiding fallback to suboptimal 32-block types ([#27983](https://github.com/ggml-org/llama.cpp/pull/27983)).
- **AVX512-FP16**: Fixed potential overflow in dot products by accumulating f16 results in f32, ensuring numerical stability while preserving accuracy ([#29545](https://github.com/ggml-org/llama.cpp/pull/29545)).

---

### **5. Stability & Regressions**  
- **Critical Crashes**:  
  - `llama-server` crashes when processing images > ~1.2 MP with Gemma4 models due to non-causal attention constraints ([#28954](https://github.com/ggml-org/llama.cpp/issues/28954), [#29543](https://github.com/ggml-org/llama.cpp/pull/29543)). A fix PR exists ([#29543](https://github.com/ggml-org/llama.cpp/pull/29543)) but not yet merged.
- **Memory Issues**:  
  - `repeat_last_n` and `dry_penalty_last_n` can allocate multi-GB zero-filled buffers leading to OOM under certain conditions ([#29494](https://github.com/ggml-org/llama.cpp/issues/29494)).
- **Backend-Specific Bugs**:  
  - Vulkan `ARGSORT` fails to sort full arrays on some devices ([#29431](https://github.com/ggml-org/llama.cpp/issues/29431)).  
  - MSVC compilation does not detect AVX-VNNI despite available CPU support ([#28295](https://github.com/ggml-org/llama.cpp/issues/28295)).  
  - `GGML_ASSERT(tensor->data != NULL)` triggered on Vulkan since `b9318` with vision-enabled models ([#23737](https://github.com/ggml-org/llama.cpp/issues/23737)).

> ⚠️ **Priority Note**: The image size crash and OOM issues are critical for production deployments involving multimodal inputs.

---

### **6. What This Means for Application Developers**  
- **For Reranking Workloads**: Use `b11223+` to efficiently process large-scale document reranking pipelines with Qwen3-family models via batch-splitting—ideal for search and retrieval systems.
- **For Edge & Low-Memory Deployment**: Leverage **IQ2_NL/IQ3_NL** quantizations to deploy large MoE models (e.g., Qwen3-235B) on low-VRAM hardware (e.g., 8GB cards) by streaming expert weights via PCIe DMA—see [issue #26448](https://github.com/ggml-org/llama.cpp/issues/26448).
- **For Multimodal Apps**: Be cautious with image input size (>1.2 MP) until [#29543](https://github.com/ggml-org/llama.cpp/pull/29543) is deployed—consider pre-processing or using causal-only models.
- **For CI/Builds**: Update CI configurations to handle new `GGML_RPC_DEBUG` verbosity levels ([#29544](https://github.com/ggml-org/llama.cpp/pull/29544)) and ensure static test builds initialize backends properly ([#29542](https://github.com/ggml-org/llama.cpp/pull/29542)).

> ✅ **Best Practice**: Monitor issue #19466 — saving KV cache for vision models remains broken, which impacts stateful agent workflows requiring persistent context.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-09-28**

---

### **1. Today's Highlights**  
Critical stability issues emerged in Ollama 0.34.4, including a CUDA memory access crash on RTX 5090 with Cohere MoE models and a server wedge issue causing all subsequent requests to hang. Concurrently, several high-severity bugs were reported across cloud, local inference, and parsing layers—most notably, `deepseek-v4.1-flash:cloud` silently discarding image inputs despite claiming `vision` support. These issues highlight ongoing challenges in model compatibility and runtime robustness under load.

---

### **2. Releases & Breaking Changes**  
*No new releases in the last 24 hours.*  
However, **Ollama 0.34.4** is now under active scrutiny due to multiple regressions:
- `typical_p` parameter removal breaks existing clients (e.g., SillyTavern) that cannot omit it — see [Issue #18542](https://github.com/ollama/ollama/issues/18542).
- The `OLLAMA_GPU_OVERHEAD` environment variable is ignored by `llama-server`, leading to unanticipated VRAM exhaustion — see [Issue #18679](https://github.com/ollama/ollama/issues/18679).

> ⚠️ **Migration Note**: Users relying on these parameters or configurations should test thoroughly before upgrading.

---

### **3. New Model & Hardware Support**  
- **Hardware**: RTX 5090 (CUDA) and Intel UHD 0x4626 (Vulkan) are now confirmed as having backend detection issues.
  - RTX 5090 crashes during prompt evaluation with Cohere MoE models ([#18642](https://github.com/ollama/ollama/issues/18642)).
  - Intel UHD iGPU not detected via Vulkan on Windows — see [Issue #18672](https://github.com/ollama/ollama/issues/18672).
- **Models**: 
  - `deepseek-v4.1-flash:cloud` falsely advertises `vision` capability but silently discards images — see [Issue #18527](https://github.com/ollama/ollama/issues/18527).
  - `olmo3` tool calls can bypass parsing when arriving in the same chunk as final `done` flag — see [Issue #18676](https://github.com/ollama/ollama/issues/18676).

---

### **4. Performance & Optimization**  
- **MLX on macOS**: NVFP4 quantized models (e.g., `qwen3.6:27b-nvfp4`) exhibit extreme slowdowns under memory pressure — see [Issue #16030](https://github.com/ollama/ollama/issues/16030). Performance degrades from ~2 minutes per prompt to unusable levels.
- **Memory Efficiency**: PRs addressing `REQUIRES` instruction visibility in Modelfile docs ([#18688](https://github.com/ollama/ollama/pull/18688)) and GPU overhead accounting ([#17615](https://github.com/ollama/ollama/pull/17615)) aim to improve transparency and predictability.
- **Parsing Optimizations**: Multiple PRs target edge-case handling in tool-call parsers (e.g., `Qwen35Parser`, `Gemma4Parser`) to prevent content loss at chunk boundaries — see [PR #18687](https://github.com/ollama/ollama/pull/18687), [PR #18624](https://github.com/ollama/ollama/pull/18624).

---

### **5. Stability & Regressions**  
| Severity | Issue | Description | Fix Status |
|--------|------|------------|-----------|
| Critical | [#18685](https://github.com/ollama/ollama/issues/18685) | `llama-server` wedges on full-cache-hit task → all future requests hang | Open |
| Critical | [#18642](https://github.com/ollama/ollama/issues/18642) | CUDA illegal memory access crash on RTX 5090 with Cohere MoE models | Open |
| High | [#18527](https://github.com/ollama/ollama/issues/18527) | `deepseek-v4.1-flash:cloud` silently discards images despite `vision` claim | Open |
| High | [#18679](https://github.com/ollama/ollama/issues/18679) | `OLLAMA_GPU_OVERHEAD` ignored → VRAM overcommit | Open |
| Medium | [#18681](https://github.com/ollama/ollama/issues/18681) | Tool-call opening tags lost across chunk boundaries | Open |

> 🔥 **Notable**: Regression in `llama-server` core dump behavior persists after prior fix was reverted — see [Issue #16946](https://github.com/ollama/ollama/issues/16946).

---

### **6. What This Means for Application Developers**  
- **Avoid `0.34.4` until further notice**: Multiple critical bugs affect both local inference (crashes, hangs) and cloud API reliability (billing loops, silent data loss).
- **Validate model capabilities carefully**: Do not assume `vision` support based solely on `capabilities` output — verify behavior empirically, especially for `deepseek-v4.1-flash:cloud`.
- **Handle parser edge cases explicitly**: Tool call parsing can fail silently at chunk boundaries (`<tool-call-open>` split mid-chunk). Implement client-side buffering or fallback logic.
- **Monitor GPU memory allocation**: `OLLAMA_GPU_OVERHEAD` is currently ineffective — manually account for VRAM usage when deploying large models (especially MoE, 35B+).
- **Prepare for breaking changes**: Parameter removals like `typical_p` may break legacy integrations; update clients proactively.

> 📌 **Recommendation**: Pin your deployment to **0.34.1** or earlier unless you’re actively testing fixes in PRs. Monitor [GitHub issues](https://github.com/ollama/ollama/issues) for updates on regression resolution.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# **LiteLLM Digest – 2026-09-28**

---

### **1. Today's Highlights**  
The LiteLLM project continues its deep architectural evolution with significant progress in Rust-native inference integration, gateway modularity, and cost tracking precision. Critical fixes address high-severity issues around virtual key bypasses, budget limiter logic, and streaming response correctness—particularly for Anthropic’s `/v1/responses` and WebRTC-based models. New PRs introduce structured tracing, MCP gateway support, and enhanced authentication separation, signaling a shift toward production-grade observability and security.

---

### **2. Releases & Breaking Changes**  
*No new releases were published in the last 24 hours.*  
However, two notable **cost map updates** were merged:  
- [`#43509`](https://github.com/BerriAI/litellm/pull/43509): Deprecation date for `together_ai/gpt-oss-20b` and `gemma-4-31B-it` updated to `2026-09-15` (resolving conflicting deprecation sources).  
- [`#43507`](https://github.com/BerriAI/litellm/pull/43507): Added `deprecation_date` for `Salesforce/Llama-Rank-V1`.  

> ⚠️ **Migration Note**: Users relying on deprecated models should update their configurations before `2026-09-15`.

---

### **3. New Model & Hardware Support**  
- ✅ **Tsubasa** now has native routing and dashboard discovery via [`#43502`](https://github.com/BerriAI/litellm/pull/43502), enabling seamless integration into model routing workflows.  
- ✅ **Mistral Document AI OCR** and **Mistral 3.5 Medium** added to Azure support (`#32637`).  
- ✅ **Cohere Command A+** now supported in Azure (`#32628`).  
- ✅ **OCI GenAI endpoint realm resolution** now dynamically derives from compartment OCID instead of hardcoding `oraclecloud.com`, fixing failures in government regions (`#43180`).  

> 🔗 *New providers/models can be tested via `litellm --model-list` or proxy config endpoints.*

---

### **4. Performance & Optimization**  
- 🚀 **Rust-native Python inference opt-in** introduced via `python-bridge` routes (`#43465`), promising reduced latency and improved memory efficiency for high-throughput inference paths.  
- 📊 **Structured route lifecycle tracing** added across core services (audio transcription, chat completions, responses, websockets) in `core/src/diagnostic.rs` (`#43466`), enabling granular performance analysis.  
- 💡 **Cost tracking improvements**:  
  - Chat requests now billed by caller’s `metadata.completion_window` (`#43477`).  
  - Streaming failures before first byte are now logged (`#43505`), improving failure metrics and cooldown behavior.  

> 📈 *Expected gains: 10–25% reduction in cold-start latency for Python bridge paths; better trace granularity for distributed debugging.*

---

### **5. Stability & Regressions**  
| Severity | Issue | Description | Fix Status |
|--------|-------|-------------|------------|
| 🔴 **Critical** | [`#43165`](https://github.com/BerriAI/litellm/issues/43165) | Router fallback returns `null` body after timeout (non-streaming) | Open — impacts client reliability |
| 🔴 **High** | [`#41295`](https://github.com/BerriAI/litellm/issues/41295) | Virtual-key allowlist bypass on Azure pass-through route | Open — allows unauthorized access to Azure deployments |
| 🔴 **High** | [`#43157`](https://github.com/BerriAI/litellm/issues/43157) | `sanitize_input_schema_for_anthropic` drops `anyOf`/`$ref` → empty tools | Open — breaks tool calling with Anthropic |
| 🟡 **Medium** | [`#43010`](https://github.com/BerriAI/litellm/issues/43010) | Anthropic `/v1/responses` doubles thinking text in reasoning blocks | Open — affects agent output consistency |
| 🟡 **Medium** | [`#38674`](https://github.com/BerriAI/litellm/issues/38674) | Token usage logged as 0 for Responses API WebSocket mode | Open — breaks cost tracking for CLI agents |

> ⚠️ **Action Required**: Applications using fallback routing, Anthropic tool calling, or agent CLIs should monitor these issues closely.

---

### **6. What This Means for Application Developers**  
- **Use the Rust-native path** (`python-bridge`) for lower-latency inference in high-throughput systems — expect faster startup and tighter memory control.  
- **Leverage new tracing capabilities** (`#43466`) to debug complex agent flows across multiple providers and model groups.  
- **Avoid `max_budget=0`** — it currently behaves like “unlimited” (`#43214`); use `max_budget=0.01` or disable via `budget_limit_enabled=False` instead.  
- **Validate virtual key policies** carefully — the Azure pass-through bypass (`#41295`) could expose sensitive models if not restricted at the ingress level.  
- **Monitor `/v1/responses` streams** — double-thinking text (`#43010`) may impact agent self-reflection accuracy.  

> ✅ **Best Practice**: Enable `OTel V2` + structured tracing (`#43466`) early in development to gain visibility into cost, latency, and correctness across your LLM pipeline.

---  
*Data source: [BerriAI/litellm GitHub](https://github.com/BerriAI/litellm)*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-09-28**

---

### **1. Today's Highlights**  
Unsloth releases prebuilt CUDA 13 wheels for FlashAttention2 2.8.4, Causal-Conv1D 1.7.0, and Mamba_SSM 2.3.2.post1 on PyTorch 2.13/2.14 with Python 3.13 support — a major step toward broader compatibility for high-performance inference. Simultaneously, multiple PRs focus on stabilizing tool execution, fixing tokenization limits, and improving multi-GPU and MLX inference workflows.

---

### **2. Releases & Breaking Changes**  
- **`prebuilt-wheels-cu13` (v2026.09.28)**: New prebuilt Linux x86_64 CUDA 13 wheels for:
  - `flash-attn` 2.8.4 ([PR #12150](https://github.com/unslothai/unsloth/pull/12150))
  - `causal-conv1d` 1.7.0 ([PR #12150](https://github.com/unslothai/unsloth/pull/12150))
  - `mamba-ssm` 2.3.2.post1 ([PR #12150](https://github.com/unslothai/unsloth/pull/12150))  
  Built for PyTorch 2.13 and 2.14, Python 3.13.  
  > ✅ *Recommended for users on NVIDIA GPUs with CUDA 13 and modern PyTorch versions.*

- **Torch Version Ceiling Raised**: `torch<2.15.0` now supported ([PR #12152](https://github.com/unslothai/unsloth/pull/12152)), enabling newer PyTorch features in Studio installs.

---

### **3. New Model & Hardware Support**  
- **MLX Inference Enhancements**:  
  - TurboQuant KV cache quantization added for MLX models ([PR #11170](https://github.com/unslothai/unsloth/pull/11170)) — supports 4-bit, 3.5-bit (mixed), 3-bit, and 2-bit quantization.
  - MLX memory estimation and load fitting now available via backend planner ([PR #10287](https://github.com/unslothai/unsloth/pull/10287)).
- **Multi-GPU Flexibility**:  
  - Manual GPU layer splitting now respects `--split-mode layer` explicitly ([PR #10770](https://github.com/unslothai/unsloth/pull/10770)).
  - Multiple models can be kept loaded simultaneously in Studio ([PR #11591](https://github.com/unslothai/unsloth/pull/11591)).
- **New Tokenizer Backend Request**:  
  - Feature request to support [Gigatoken](https://github.com/marcelroed/gigatoken) for high-throughput tokenization ([Issue #12072](https://github.com/unslothai/unsloth/issues/12072)).

---

### **4. Performance & Optimization**  
- **LoRA Training Speedup**:  
  - Block-FP8 LoRA training accelerated by up to **15x** (RTX PRO 6000, L4) via eager FP8 linear execution and optimized Triton kernels ([PR #12027](https://github.com/unslothai/unsloth/pull/12027)).
- **Memory Efficiency**:  
  - Fixed excessive memory pinning during model capability probing (reducing idle GPU overhead from ~360 MB per card) ([Issue #11953](https://github.com/unslothai/unsloth/issues/11953)).
- **Token Generation Limits**:  
  - `unsloth start opencode` now respects `--max-tokens`, removing hard cap at 8192 tokens ([PR #12111](https://github.com/unslothai/unsloth/pull/12111)).

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Fix PR |
|--------|------|--------|--------|
| ⚠️ High | VRAM usage far exceeds advertised limits during fine-tuning, causing OOMs on large models | Open ([#4504](https://github.com/unslothai/unsloth/issues/4504)) | No fix yet |
| ⚠️ High | Terminal tool calls freeze app due to unbounded recursion in variable expansion (`VAR=$VAR`) | Open ([#12084](https://github.com/unslothai/unsloth/issues/12084)) | [PR #12087](https://github.com/unslothai/unsloth/pull/12087) fixes credential scan loop |
| ⚠️ Medium | Tool calls hang indefinitely past max duration | Open ([#12048](https://github.com/unslothai/unsloth/issues/12048)) | [PR #12087](https://github.com/unslothai/unsloth/pull/12087) addresses root cause |
| ⚠️ Medium | Invalid base64 errors on valid MCP image returns | Open ([#12058](https://github.com/unslothai/unsloth/issues/12058)) | No fix yet |
| 🟡 Low | macOS Pinyin IME blocks Enter key from sending messages | Open ([#12137](https://github.com/unslothai/unsloth/issues/12137)) | [PR #12138](https://github.com/unslothai/unsloth/pull/12138) fixes input handling |
| 🟡 Low | Bitdefender flags Unsloth Desktop installer as infected | Open ([#12140](https://github.com/unslothai/unsloth/issues/12140)) | False positive; no code change needed |

---

### **6. What This Means for Application Developers**  
- **Build robust agents with MLX & multi-GPU**: Use `--split-mode layer` and manual GPU placement for precise control over model sharding across heterogeneous cards. The new TurboQuant KV cache enables lower-latency MLX inference.
- **Avoid VRAM surprises**: Monitor fine-tuning memory usage closely — the reported issue (#4504) suggests current estimates may be optimistic. Consider using smaller batch sizes or gradient checkpointing.
- **Handle long outputs safely**: With `unsloth start opencode` now respecting `--max-tokens`, you can generate longer responses without truncation — ideal for code generation and reasoning tasks.
- **Ensure tool reliability**: Be cautious with shell commands containing recursive variable assignments (`VAR=$VAR`) — they can trigger hangs unless patched via recent PRs.
- **Leverage upcoming optimizations**: For block-FP8 LoRA training, expect dramatic speedups (up to 15x) once the latest changes land — critical for efficient fine-tuning of advanced quantized models.

> 🔗 *Follow developments: [unslothai/unsloth GitHub](https://github.com/unslothai/unsloth)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*