# AI Infrastructure Digest 2026-10-19

> Generated: 2026-10-19 00:26 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-10-19**

---

### **1. Ecosystem Overview**

The AI infrastructure landscape in late 2026 is defined by a convergence of high-performance inference engines, agent-native tooling, and distributed serving abstractions. Projects like **vLLM**, **SGLang**, and **llama.cpp** are pushing the boundaries of low-latency, high-throughput inference on next-gen hardware—especially NVIDIA Blackwell (SM120) and AMD MI355X. Meanwhile, **Ollama**, **LiteLLM**, and **Unsloth** are evolving into full-stack orchestration platforms with enhanced local execution, model management, and agent workflow support. The emergence of structured output APIs (`/v1/systemone`), speculative decoding correctness fixes, and MCP integration signals a shift toward production-grade agentic systems, where reliability, determinism, and composability are paramount.

---

### **2. Activity Comparison**

| Project       | Issues Open (Today) | PRs Merged (Today) | Release Status     |
|---------------|---------------------|--------------------|--------------------|
| vLLM          | 47                  | 82                 | v0.32.0 (Stable)   |
| SGLang        | 58                  | 91                 | None               |
| llama.cpp     | 64                  | 12                 | b11721+ (Nightly)  |
| Ollama        | 52                  | 18                 | v0.40.7-rc0 (RC)   |
| LiteLLM       | 32                  | 15                 | v1.107.0-rc.1 (RC) |
| Unsloth       | 67                  | 14                 | No new release     |

> 🔍 *Insight:* SGLang leads in development velocity, with 91 PRs merged today—driven by deep optimization for DeepSeek-V4.1 and MoE routing. In contrast, **llama.cpp** shows focused, high-impact contributions despite lower volume, reflecting its role as a foundational runtime.

---

### **3. Model Support Race**

| New Model / Architecture      | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|-------------------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek-V4.1-Flash**       | ✅ (Full) | ✅ (Full w/ SWA replay) | ✅ (Qwen4-Exp fusion) | ❌ | ❌ | ❌ |
| **NVIDIA Nemotron 3.5 ASR**   | ⚠️ (Experimental) | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Qwen3.5-Next / Llama4**     | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Mamba-2 Hybrids**           | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ (via extension-free wheel) |
| **PPLX Decider v1.2**         | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ |
| **Hexagon v73 NPU**           | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **Apple Foundation Models**   | ❌ | ❌ | ❌ | ❌ | ❌ | 🟡 (Requested) |

> 🏆 **Leader**: **SGLang** leads in model-specific innovation, particularly for **DeepSeek-V4.1**, with end-to-end support for multimodal and speculative workflows.  
> 🏁 **Emerging Edge**: **Unsloth** gains traction in niche hardware (Hexagon, Mamba-2) and UX-driven model access, while **vLLM** dominates mainstream model compatibility.

---

### **4. Performance Frontier**

| Optimization Focus            | vLLM                          | SGLang                         | llama.cpp                     | Ollama             | LiteLLM              | Unsloth               |
|-------------------------------|-------------------------------|--------------------------------|-------------------------------|--------------------|----------------------|------------------------|
| **KV Cache & Caching**        | CUDA graphs, TP all-reduce fusing | Radix + overlap scheduler fixes | Flash attention, non-contiguous SUM | —                  | Batch cost buffering | —                      |
| **Batching & Throughput**     | Bitwise batch invariance (DSv4.1) | Breakable prefill CUDA graphs | Fused kernels (Qwen4-Exp)     | Distributed RPC    | —                    | Context parallelism    |
| **Quantization**              | NVFP4 MoE, XPU FP8 per-token  | Marlin/FastMoE LoRA, FP8 tile tables | Q4_0/Q8_0 DP4a GEMMs, q8_fast_dequant | MLX MXFP4          | —                    | FP8 fallback logic     |
| **Distributed Serving**       | Ray V2 executor removal       | —                              | llama.cpp RPC                 | ✅ Active dev      | —                    | —                      |
| **Kernel-Level Tuning**       | Hybrid MLA pairing, MoE finalize | NGRAM spec decode fix, stack refactors | MMQ tuning, `dp4a` GEMMs | —                  | Rust message handling | CPU stall reduction |

> 📈 **Trend**: The frontier is shifting from raw throughput to **correctness under complexity**—especially around speculative decoding, MoE routing, and quantized kernel consistency. **SGLang** and **vLLM** lead in this space, with multiple critical fixes for correctness bugs.

---

### **5. Layer Positioning**

| Project       | Primary Layer                  | Key Differentiator |
|---------------|--------------------------------|--------------------|
| **vLLM**      | **Inference Engine**           | Optimized for SM120, massive MoE, and deterministic batching |
| **SGLang**    | **High-Performance Serving + Agent Runtime** | Full-stack agentic support: speculative decoding, replay, LoRA, MCP |
| **llama.cpp** | **Local Runtime / Cross-Backend Engine** | Broadest backend support (Vulkan, SYCL, WebGPU, Hexagon), low-level kernel control |
| **Ollama**    | **LLM Gateway / Local CLI Platform** | Developer-friendly interface, multi-backend abstraction, growing agent support |
| **LiteLLM**   | **API Gateway / Proxy Layer**  | Unified API surface, security via cosign signing, batch processing |
| **Unsloth**   | **Agent UI + Orchestration Layer** | Rich UX, model persistence, mobile-first design, MCP visibility |

> 💡 **Strategic Insight**: The ecosystem is stratifying:
> - **Engineers** use **vLLM/SGLang** for core inference.
> - **Developers** rely on **Ollama/LiteLLM** for rapid prototyping and API standardization.
> - **Product teams** depend on **Unsloth** for agent interfaces and user-facing workflows.

---

### **6. Trend Signals**

**Key Industry Trends Extracted from Today’s Activity:**

1. **Blackwell (SM120) Stability Crisis**: All major projects report severe regressions (vLLM, llama.cpp, SGLang) on RTX PRO 6000 Blackwell GPUs. This indicates **early-stage instability in next-gen hardware adoption**—a red flag for production deployments.
   
2. **Structured Output Is Now Standard**: vLLM’s default `POST /v1/systemone` endpoint signals that **structured reasoning** (decision trees, scoring, slot filling) is no longer experimental—it's becoming a baseline feature for agents.

3. **Speculative Decoding Correctness Over Speed**: Multiple fixes across SGLang and vLLM emphasize **correctness over performance**—e.g., fixing KV cache corruption in NGRAM speculation. This reflects a maturity shift: stability is now prioritized over raw throughput.

4. **Security & Supply Chain Integrity**: LiteLLM’s adoption of **cosign-signed Docker images** marks a turning point—security is moving from "nice-to-have" to **mandatory in production-grade deployments**.

5. **Agent-Centric Development**: The rise of MCP tool pinning, LoRA stacks, and model persistence in Unsloth/Ollama/SGLang confirms that **the agent layer is now the primary application boundary**—not the model itself.

---

### **Recommendations for Application Developers**

- **Avoid SM120 GPUs for production** until vLLM/SGLang patches land—current builds exhibit crashes and extreme performance degradation.
- **Pin to stable versions**: Use `v0.32.0` (vLLM), `b11721+` (llama.cpp), `v0.40.7-rc0` (Ollama), or `v1.107.0-rc.1` (LiteLLM) only if you’re not using speculative decoding or complex quantizations.
- **Test agent workflows rigorously**: Expect subtle output divergence in speculative paths—even after fixes—due to ongoing kernel-level race conditions.
- **Plan for supply-chain verification**: Require `cosign verify` for LiteLLM and other proxy-layer tools in regulated environments.
- **Monitor model loading behavior**: Unsloth’s `Always` keep-loaded mode and Ollama’s cloud stability issues highlight the need for resilient model lifecycle management.

> 🚨 **Bottom Line**: The infrastructure is maturing—but not yet stable. Prioritize **correctness, reproducibility, and security** over bleeding-edge performance.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest – 2026-10-19

---

### **1. Today's Highlights**

The vLLM project released **v0.32.0**, marking a major milestone with over 800 commits from 363 contributors (121 new). This release introduces the `POST /v1/systemone` endpoint for structured decision-making—supporting `choice`, `noul`, and `score` queries over structured state—now enabled by default. Significant progress continues on Blackwell (SM120) support, with multiple PRs targeting CUDA graph stability, KV offloading, and quantization correctness.

> 🔗 [v0.32.0 Release](https://github.com/vllm-project/vllm/releases/tag/v0.32.0)

---

### **2. Releases & Breaking Changes**

- **v0.32.0** is now live with the following key changes:
  - Default activation of the new `POST /v1/systemone` endpoint for structured output inference.
  - Removal of the obsolete `VLLM_USE_RAY_V2_EXECUTOR_BACKEND` environment variable (#62228).
  - Improved handling of hybrid MLA block sizes in NixlConnector (#61002, #59746).

> 🔗 [Release Notes](https://github.com/vllm-project/vllm/releases/tag/v0.32.0)  
> 🔗 [PR: Remove Ray V2 executor flag](https://github.com/vllm-project/vllm/pull/62228)

---

### **3. New Model & Hardware Support**

- **New model support**: 
  - Added full support for **DeepSeek-V4.1-Flash** (including DSpark, MegaMoE, DEP4) with improved bitwise batch invariance under CUDA graphs (#62365).
  - Experimental support for **NVIDIA Nemotron 3.5 ASR Streaming** (600M) via Issue #47455.
  - Added `Qwen3.5-Next`, `Llama4`, `Glm5Next`, `Inkling`, and `Laguna` to `supported_models.md` via PR #62361.

- **Hardware & backend advances**:
  - **ROCm**: CI improvements for MI355 DP+EP; fixes to Inductor pointwise autotuning (#62286, #62280).
  - **CPU**: Experimental MRV2 CPU execution without Triton via custom sampler + NumPy-to-Numba transpilation (#60924).
  - **Intel GPU (XPU)**: Per-token dynamic FP8 activation quantization introduced (#61362).

> 🔗 [PR: Add Qwen3.5-Next/Llama4/etc. to supported models](https://github.com/vllm-project/vllm/pull/62361)  
> 🔗 [PR: XPU FP8 per-token quantization](https://github.com/vllm-project/vllm/pull/61362)

---

### **4. Performance & Optimization**

- **Throughput & Latency**:
  - **DeepSeek-V4.1-Flash** now achieves bitwise batch-invariant inference under CUDA graphs across all configurations (DSpark, MTP, MegaMoE), critical for deterministic serving (#62365).
  - **Beam model optimization**: Fused TP all-reduce with sandwich norms and MoE finalize operations to reduce kernel overhead (#62366).

- **Memory & Kernel Efficiency**:
  - Hybrid MLA block pairing fixes improve compatibility between different P/D block sizes across TP shards on ROCm (#61002, #59746).
  - **TurboQuant workspace reduction** targeted: issue #43357 reports excessive workspace usage (12MB vs expected 3MB) on Qwen3.6-27B NVFP4 — ongoing fix work.

> 🔗 [PR: Bitwise batch invariance for DSv4.1-Flash](https://github.com/vllm-project/vllm/pull/62365)  
> 🔗 [PR: Fuse Beam’s TP all-reduce with norms/MoE finalize](https://github.com/vllm-project/vllm/pull/62366)

---

### **5. Stability & Regressions**

Critical issues reported today involve **Blackwell (SM120) stability**, especially with DeepSeek-V4.1-Flash and NVFP4 MoE:

| Severity | Issue | Summary | Fix Status |
|--------|------|--------|----------|
| ⚠️ High | [#56892](https://github.com/vllm-project/vllm/issues/56892) | Extremely low decode throughput on RTX PRO 6000 Blackwell (SM120) with `--enforce-eager`; CUDA graphs unusable | ❌ No fix yet; high comment count (21) |
| ⚠️ High | [#58910](https://github.com/vllm-project/vllm/issues/58910) | Xid 31 illegal memory access during long prefill (>35K tokens) on SM120 with CUDA graphs | ❌ No fix yet |
| ⚠️ High | [#48898](https://github.com/vllm-project/vllm/issues/48898) | NVFP4 garbage output due to misaligned K in pipeline/TP mode on SM120 | ❌ Regression confirmed |
| ⚠️ Medium | [#47365](https://github.com/vllm-project/vllm/issues/47365) | NVFP4 flashinfer_b12x MoE produces garbage output on SM120 under TP | ❌ Regression between dev552 → dev601 |

> 🔗 [Issue: SM120 CUDA graph capture failure (DSv4.1)](https://github.com/vllm-project/vllm/issues/56892)  
> 🔗 [Issue: Illegal memory access during long prefill (DSv4.1)](https://github.com/vllm-project/vllm/issues/58910)

---

### **6. What This Means for Application Developers**

- **Use `POST /v1/systemone`** for structured outputs (e.g., decision trees, scoring, slot filling) in agent workflows—now enabled by default in v0.32.0.
- **Avoid SM120 for production** until fixes land: current builds exhibit severe performance degradation and crashes with DeepSeek-V4.1-Flash and NVFP4 MoE models. Monitor [#56892](https://github.com/vllm-project/vllm/issues/56892) and [#58910](https://github.com/vllm-project/vllm/issues/58910).
- **Expect better determinism** with v0.32.0: bitwise batch-invariant inference now supported across complex configs (DSpark, MegaMoE, DEP4).
- **Consider CPU sandboxing**: The experimental MRV2 CPU path may enable lightweight agent testing in Colab/T4 environments (#62257).
- **Watch for LoRA bugs**: Silent output corruption when using `enable_lora=True` on hybrid-MoE models (e.g., Qwen3.6-35B-A3B) remains unresolved (#49063).

> ✅ **Actionable Tip**: Pin your vLLM version to `v0.32.0` only if you’re not deploying on SM120 GPUs. Otherwise, use `v0.31.0` or earlier pending patch releases.

--- 

*Digest generated: 2026-10-19 | Source: [vLLM GitHub](https://github.com/vllm-project/vllm)*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-10-19**

---

### **1. Today's Highlights**  
The SGLang ecosystem continues to accelerate its DeepSeek-V4.1 optimization efforts, with critical PRs enabling encoder SWA bounded replay support for image and multimodal workloads, and adding prompt logprob returns in replay contexts. A major fix has been merged to resolve speculative decoding corruption in the NGRAM algorithm when using radix caching and the overlap scheduler—critical for correctness in high-throughput inference. Meanwhile, ongoing refinements in MoE routing and LoRA runtime stacks expand hardware-specific optimizations across NVIDIA Blackwell and AMD MI355X.

---

### **2. Releases & Breaking Changes**  
None. No new releases or breaking changes were published in the last 24 hours.

---

### **3. New Model & Hardware Support**  
- ✅ **DeepSeek-V4.1**: Full support now includes:  
  - Encoder SWA bounded replay for image and text inputs ([PR #45048](https://github.com/sgl-project/sglang/pull/45048))  
  - External linker pool integration via HiCache ([PR #44623](https://github.com/sgl-project/sglang/pull/44623))  
  - Prompt logprob return under replay ([PR #45050](https://github.com/sgl-project/sglang/pull/45050))  
- ✅ **NVIDIA GB300 / H200 / B200**: Enhanced support via NVIDIA megakernels ([PR #44945](https://github.com/sgl-project/sglang/pull/44945)) and FP8 Marlin fallback on Ampere ([PR #44944](https://github.com/sgl-project/sglang/pull/44944)).  
- ✅ **AMD MI355X (gfx950)**: Opt-in PTPC FP8 projections for GLM5 ([PR #33602](https://github.com/sgl-project/sglang/pull/33602)), though performance remains behind B200/B300 in agentic workloads ([Issue #34596](https://github.com/sgl-project/sglang/issues/34596)).

---

### **4. Performance & Optimization**  
- 🔧 **Speculative Decoding**: NGRAM speculative decoding now correctly handles KV cache consistency when requests end on stop tokens, fixing a critical correctness issue ([PR #45049](https://github.com/sgl-project/sglang/pull/45049)).  
- 🔧 **MoE Routing & Quantization**: Stack of PRs ([#44994](https://github.com/sgl-project/sglang/pull/44994), [#44993](https://github.com/sgl-project/sglang/pull/44993), [#44991](https://github.com/sgl-project/sglang/pull/44991), [#44480](https://github.com/sgl-project/sglang/pull/44480)) refactors MoE routing logic for better expert placement and mixed-precision support.  
- 🔧 **LoRA Runtime**: Final parts of the 21-part LoRA stack landed:  
  - NVFP4 MoE LoRA on Marlin vendor ([PR #42888](https://github.com/sgl-project/sglang/pull/42888))  
  - CuTeDSL FP8 tile tables and grouped GEMMs for SM90/SM100 ([PR #42887](https://github.com/sgl-project/sglang/pull/42887), [#42886](https://github.com/sgl-project/sglang/pull/42886))  
  - Triton FP8 MoE LoRA support ([PR #42885](https://github.com/sgl-project/sglang/pull/42885))  
- 📈 **Prefill Optimization**: Breakable prefill CUDA graphs now support arbitrary context lengths on GB300 ([PR #43733](https://github.com/sgl-project/sglang/pull/43733)), eliminating eager fallback for long sequences.

---

### **5. Stability & Regressions**  
- ⚠️ **Critical Correctness Bug**: `NGRAM` speculative decoding corrupts radix-cached KV when requests end on stop tokens ([Issue #44997](https://github.com/sgl-project/sglang/issues/44997)). **Fixed in PR #45049**.  
- ⚠️ **Incorrect Outputs**: FP8 block-quantized checkpoints intermittently produce wrong tokens with the overlap scheduler ([Issue #45000](https://github.com/sgl-project/sglang/issues/45000)). Reproducible on RTX 3090; no fix yet.  
- ⚠️ **CUDA Coredump Tracker**: 347 comments from auto-collected coredumps ([Issue #26340](https://github.com/sgl-project/sglang/issues/26340)) — ongoing debugging for GPU kernel crashes.  
- ⚠️ **Runner Out of Disk**: Self-hosted runner `5090-vast-no-0` failed due to disk exhaustion ([Issue #44479](https://github.com/sgl-project/sglang/issues/44479)) — impacting CI reliability until resolution.  
- ⚠️ **Memory Access Crash**: Runtime role switch (`decode` → `prefill` → `decode`) causes illegal memory access with `--disaggregation-mode decode` ([Issue #43557](https://github.com/sgl-project/sglang/issues/43557)).

---

### **6. What This Means for Application Developers**  
- **Use `--enable-encoder-swa-bounded-replay` safely with DeepSeek-V4.1 image and multimodal workloads** — recent fixes ensure proper handling of metadata and replay.  
- **Avoid `NGRAM` speculative decoding with radix cache + overlap scheduler** unless using latest builds (post-PR #45049); otherwise, expect incorrect outputs.  
- **Enable `--enable-nvidia-megakernel` on GB300/H200/B200** for faster Flash-decode steps, especially in high-concurrency scenarios.  
- **Leverage the new LoRA stack** for advanced fine-tuning workflows on FP8/Marlin/NVFP4 — ideal for cost-sensitive deployments.  
- **Monitor CI runners**: If you rely on self-hosted runners, verify disk space and consider scaling storage or switching to cloud-based CI (e.g., GitHub Actions) to avoid pipeline failures.  

> 🔗 *For stability: Always test speculative decoding paths with `--speculative-algorithm NEXTN` or `NGRAM` in production-like loads.*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# **llama.cpp Digest – 2026-10-19**

---

### **1. Today's Highlights**  
The latest updates focus on critical performance and correctness improvements across multiple backends, particularly in **Vulkan**, **SYCL**, and **CUDA**. Key advancements include fused quantized kernel optimizations for Qwen4-Exp, non-contiguous tensor support across all backends, and enhanced dequantization bandwidth on Intel Arc GPUs. A major stability fix addresses speculative decoding divergence under greedy sampling when using quantized models.

---

### **2. Releases & Breaking Changes**  
- **`b11721`**: Introduced fusion of `SCALE -> SIGMOID -> SCALE -> HC_POST` chain in CUDA backend for Qwen4-Exp, improving efficiency in high-capacity MoE models. [PR #30602](https://github.com/ggml-org/llama.cpp/pull/30602)  
- **`b11720`**: Added full support for **non-contiguous SUM operations** across CPU, CUDA, Vulkan, and WebGPU backends — essential for dynamic batching and complex graph layouts. [PR #28851](https://github.com/ggml-org/llama.cpp/pull/28851)  
- **`b11719`**: Fixed out-of-bounds check in Flash Attention (`fattn`) when `k_VKQ_max = (k_VKQ_max - nbatch_fa)` — prevents potential memory corruption on large batch sizes. [PR #30572](https://github.com/ggml-org/llama.cpp/pull/30572)

> ⚠️ **Migration Note**: Users relying on speculative decoding with quantized models (e.g., Q4_K_M) should upgrade to `b11721+` to avoid output divergence.

---

### **3. New Model & Hardware Support**  
- **Qwen4-Exp (Qwen3.8-Flash-Next)**: Full support for fused `hc_post` gate chains via `SCALE -> SIGMOID -> SCALE`, now available on CUDA and Vulkan. [PR #30602](https://github.com/ggml-org/llama.cpp/pull/30602)  
- **Hexagon v73 NPU**: Added support for **hadamard MUL_MAT** and **GET_ROW** operations on flat/tiled `Q1_0` and `Q2_0` quantizations, enabling efficient inference on Qualcomm AI accelerators. [PR #30627](https://github.com/ggml-org/llama.cpp/pull/30627)  
- **Intel Arc Pro B70 (SYCL)**: Experimental support for **multi-stream Flash Attention** and optimized `q8_fast_dequant` kernels (up to **636.9 GB/s**). [PR #30775](https://github.com/ggml-org/llama.cpp/pull/30775)

---

### **4. Performance & Optimization**  
- **SYCL (Intel Arc B70)**: `q8_fast_dequant` kernel achieves **~2.11%–5.5% higher TPS** and **+200 GB/s raw bandwidth** (from 437.4 → 636.9 GB/s), with no PPL degradation. [PR #30775](https://github.com/ggml-org/llama.cpp/pull/30775)  
- **Vulkan (D700 / GCN1)**: Fast path added for **Q4_0 KV cache dequant + transpose** in flash attention, resolving severe latency bottlenecks. [PR #30738](https://github.com/ggml-org/llama.cpp/pull/30738)  
- **CUDA (Blackwell sm_100)**: Ongoing tuning of MMQ configs for GCN arch (HIP) and Stream-K grid caps to reduce launch overhead. [PR #30021](https://github.com/ggml-org/llama.cpp/pull/30021), [PR #30553](https://github.com/ggml-org/llama.cpp/pull/30553)  
- **OpenCL**: Added `dp4a` GEMM variants for `int4` quant types (Q4_0/Q8_0/Q4_K…), boosting performance on Adreno without external lib dependency. [PR #30753](https://github.com/ggml-org/llama.cpp/pull/30753)

---

### **5. Stability & Regressions**  
| Issue | Severity | Status | Fix PRs? | Notes |
|------|----------|--------|----------|-------|
| [#25618](https://github.com/ggml-org/llama.cpp/issues/25618): Speculative decoding divergence on quantized targets | 🔴 Critical | Open | ❌ | Greedy output differs from vanilla run on Q4_K_M; affects agent reasoning. |
| [#27329](https://github.com/ggml-org/llama.cpp/issues/27329): Qwen3.8-27B-NVFP4 decode hangs on RTX 5090D (Blackwell) | 🔴 Critical | Open | ❌ | CPU spins, no GPU work — blocks deployment on next-gen hardware. |
| [#28933](https://github.com/ggml-org/llama.cpp/issues/28933): Memory growth during chat on 128GB unified-memory system | 🟡 High | Open | ❌ | RSS+swap grows unbounded — risk of OOM on long sessions. |
| [#28056](https://github.com/ggml-org/llama.cpp/issues/28056): KV-cache contamination on integrated GPUs | 🟡 High | Closed | ✅ Partial | Race condition in zero-copy graph inputs; fixed in PR #28056 (patched). |
| [#27079](https://github.com/ggml-org/llama.cpp/issues/27079): Server error with `dry_penalty_last_n` on Vulkan/ROCm | 🟡 Medium | Closed | ✅ Fixed | Resolved via patch release. |

> ✅ **Note**: Several regressions are already being addressed via active PRs (e.g., #30757, #30761), but **critical stability issues remain open**.

---

### **6. What This Means for Application Developers**  
- **Use `b11721+` or later** if you're running **speculative decoding** (e.g., draft-mtp/draft-dspark) with **quantized models** — older versions may produce inconsistent outputs.  
- **Leverage non-contiguous SUM support** (`b11720`) for advanced batching strategies, especially in multi-agent systems where tensor views are dynamically reshaped.  
- **Target Intel Arc B70 and AMD RDNA4** for best-in-class inference performance — recent SYCL/Vulkan optimizations deliver measurable gains in throughput and memory efficiency.  
- **Avoid `--split-mode tensor` on multi-GPU setups** until #29466 is resolved — it can crash with `GGML_ASSERT(bcj.nodes[i])`.  
- **Monitor model loading errors closely** — issue #30706 highlights a need for clearer failure diagnostics when models fail to load (especially on Vulkan/SYCL).

> 💡 **Pro Tip**: For production LLM gateways, prioritize **`b11721`+ builds with validated backends** and disable speculative decoding temporarily if stability is critical.

---  
*Digest generated from [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) — last updated 2026-10-19*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-10-19**

---

### **1. Today's Highlights**  
The latest release, **v0.40.7-rc0**, introduces critical fixes for speculative decoding inference and improved OpenAI-compatible response handling on non-thinking models. Key PRs address streaming correctness in `qwen3`, `olmo3-think`, and `anthropic` parsers, ensuring proper handling of `thinking` blocks and tool calls during real-time generation. These updates significantly improve reliability for agent workflows and RAG systems using structured reasoning.

---

### **2. Releases & Breaking Changes**  
- **v0.40.7-rc0** (GitHub: [PR #19010](https://github.com/ollama/ollama/pull/19010), [PR #19064](https://github.com/ollama/ollama/pull/19064))  
  - ✅ *OpenAI API*: Enables `Responses` effort on non-thinking models via `openai` provider fix.  
  - ✅ *Llama Server*: Automatically infers draft speculative type to reduce manual configuration burden.  
  - ✅ *MLX Backend*: Adds support for **PPLX Decider v1.2**, expanding decision model integration options.

> 📌 No breaking changes reported; all updates are additive or bug-fix focused.

---

### **3. New Model & Hardware Support**  
- **MLX**: Officially added support for **PPLX Decider v1.2** (via [PR #19064](https://github.com/ollama/ollama/pull/19064)).  
- **Rockchip NPU**: Community-driven interest surges with two feature requests ([#15393](https://github.com/ollama/ollama/issues/15393), [#9268](https://github.com/ollama/ollama/issues/9268)) calling for native integration, citing existing work in `rkllama`.  
- **Apple Foundation Models**: Requested for macOS-native integration ([#19116](https://github.com/ollama/ollama/issues/19116)) to enable seamless use of Apple’s on-device models through Ollama’s CLI/API.

---

### **4. Performance & Optimization**  
- **Distributed Inference**: Progress continues on distributed inference across devices via llama.cpp RPC mechanism ([#10844](https://github.com/ollama/ollama/pull/10844)), now tested and working on macOS. This enables multi-GPU scaling — a major step toward cluster deployment.  
- **MLX Quantization**: Users report **quantized decision models (e.g., MXFP4) slower than BF16 at prefill** on M5 Pro ([#18833](https://github.com/ollama/ollama/issues/18833)), indicating potential optimization gaps in low-precision kernels.  
- **Jetson Orin Nano**: Regression observed where `gemma4:e4b-it-qat` fails at `num_ctx=16384` on v0.40.5 (vs. stable in v0.35.1) due to NvMap error 12 ([#19115](https://github.com/ollama/ollama/issues/19115)), suggesting memory allocator regression.

---

### **5. Stability & Regressions**  
| Severity | Issue | Impact | Fix Status |
|---------|------|--------|------------|
| 🔴 High | **Cloud API hangs / no HTTP response** (`/v1/chat/completions`) | Ollama Cloud Pro users blocked; requests queue indefinitely → 429 errors ([#19111](https://github.com/ollama/ollama/issues/19111)) | ❌ Not yet resolved |
| 🔴 High | **Model corruption / manifest errors** (`corrupt manifests detected, skipping prune`) | Persistent warnings after re-pull; may affect disk cleanup ([#13885](https://github.com/ollama/ollama/issues/13885)) | ⚠️ Partial workaround only |
| 🟡 Medium | **AMD Vulkan GPU failure** (`gpt-oss:20b` returns empty response on Radeon Pro 5700 XT) | Fails on Vulkan backend despite working on CPU ([#19060](https://github.com/ollama/ollama/issues/19060)) | ❌ No fix yet |
| 🟡 Medium | **VRAM usage misreported** by `ollama ps` vs actual `rocm-smi` ([#17251](https://github.com/ollama/ollama/issues/17251)) | Misleading monitoring data for large models | ❌ Unresolved |
| 🟡 Medium | **Seed precision loss >2^53** ([#19078](https://github.com/ollama/ollama/issues/19078)) | Integer seeds rounded to float → identical outputs from different seeds | ✅ Fix PR pending ([#19078](https://github.com/ollama/ollama/issues/19078)) |

---

### **6. What This Means for Application Developers**  
- **Streaming agents must account for broken thinking block boundaries**: Fixes like [#19110](https://github.com/ollama/ollama/pull/19110) and [#19108](https://github.com/ollama/ollama/pull/19108) show that `thinking` content after text/tool calls is now properly streamed — but earlier versions silently dropped it. Update clients to handle delayed `thinking` blocks.  
- **Avoid relying on `created_at` timestamps across stream events**: The `/v1/responses` stream now emits distinct `created_at` values per chunk ([#19106](https://github.com/ollama/ollama/pull/19106)); don’t assume consistency across `in_progress` and `completed` events.  
- **Monitor cloud stability**: The recent `/v1/chat/completions` outage on Ollama Cloud ([#19111](https://github.com/ollama/ollama/issues/19111)) suggests instability under load — consider fallback logic or local model failover in production.  
- **Prepare for distributed inference**: With active development on RPC-based multi-machine inference ([#10844](https://github.com/ollama/ollama/pull/10844)), plan for horizontal scaling in future deployments.  

> ✅ **Recommendation**: Use `v0.40.7-rc0` if you rely on OpenAI-compatible streaming, MLX decision models, or structured reasoning — but avoid cloud endpoints until [#19111] is resolved.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# **LiteLLM Digest – 2026-10-19**

---

### **1. Today's Highlights**  
The LiteLLM project released **v1.107.0-rc.1**, the first release candidate for the upcoming stable version, with enhanced security via **cosign-signed Docker images**—a consistent practice since commit `0112e53`. Critical fixes were merged to address **MCP tool pinning drift detection**, **Claude model compatibility** in OpenAI-format providers, and **OOM risks in batch processing**, particularly affecting image-generation workloads.

---

### **2. Releases & Breaking Changes**  
- **v1.107.0-rc.1** (GitHub: [Release](https://github.com/BerriAI/litellm/releases/tag/v1.107.0-rc.1))  
  - All Docker images are now signed using **cosign** with a consistent key introduced in [commit `0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0).  
  - This marks a formal step toward supply-chain integrity; users should verify signatures before deployment.  
- **v1.106.0** (GitHub: [Release](https://github.com/BerriAI/litellm/releases/tag/v1.106.0))  
  - Includes foundational stability improvements and is the last version prior to v1.107.0-rc.1.  

> 🔐 **Security Note**: Verify all images using `cosign verify` as per [docs.sigstore.dev](https://docs.sigstore.dev/cosign/overview/).

---

### **3. New Model & Hardware Support**  
- ✅ **OceanToken added** as a JSON-configured OpenAI-compatible provider via PR [#47287](https://github.com/BerriAI/litellm/pull/47287):  
  - Supports `oceantoken/<publisher>/<model>` routing with API endpoint `https://api.oceantoken.ai/v1`.  
- 🚫 **GLM 5.3 removed** from cost map and model registry (PR [#47286](https://github.com/BerriAI/litellm/pull/47286)) due to deprecation by CoralBricks.  
- ⚠️ **No new hardware backends or quantization formats** introduced today.

---

### **4. Performance & Optimization**  
- ✅ **Rust-based message handling** optimized with PRs [#47284](https://github.com/BerriAI/litellm/pull/47284) and [#47217–47215](https://github.com/BerriAI/litellm/pulls?utf8=%E2%9C%93&q=is%3Apr+author%3Ayujonglee-berri+refactor+rust+prepare):  
  - Native `cache_control` injection now works in `/v1/messages` path.  
  - Refactored Rust prepare stages into handlers to improve consistency and reduce latency.  
- ❗ **Critical OOM risk mitigated** in batch processing:  
  - PR [#33955](https://github.com/BerriAI/litellm/issues/33955) highlights that `CheckBatchCost` fully buffers base64-encoded image data across workers — a known cause of pod restarts. While no fix has shipped yet, this issue is actively tracked and likely to be addressed in v1.107.0.

---

### **5. Stability & Regressions**  
| Issue | Severity | Status | Fix PR |  
|------|----------|--------|--------|  
| #44093: MCP tool pin ignores `outputSchema`, `readOnlyHint` | High | Open | No fix yet |  
| #33075: `stop_sequences` fails on OpenAI-compatible providers | High | Closed | PR [#33075](https://github.com/BerriAI/litellm/pull/33075) merged |  
| #46045: `ModuleNotFoundError: No module named 'mcp'` | High | Open | No fix yet |  
| #46074: `tool_choice` not downgraded for models rejecting it (Opus/Sonnet 5.5) | High | Open | No fix yet |  
| #46958: Batch retrieve returns 403 for team-scoped models | Medium | Closed | PR [#46958](https://github.com/BerriAI/litellm/pull/46958) merged |  
| #47261: Ollama embeddings ignore `api_key`, headers, timeout | Medium | Open | No fix yet |  
| #33955: Batch output buffering causes OOM | Critical | Open | No fix yet |

> 💡 **Top Priority**: Fixes for `tool_choice` forwarding and MCP tool pinning are critical for agent reliability and must be addressed before v1.107.0 final release.

---

### **6. What This Means for Application Developers**  
- **Use `cosign` to validate your LiteLLM images** — especially if running in regulated environments.  
- Avoid `stop_sequences` when routing through OpenAI-compatible backends (e.g., Azure AI, OpenRouter); use `stop` instead until you upgrade past v1.106.0.  
- If building agents with **MCP tools**, avoid relying on `readOnlyHint` or `outputSchema` in pinned tools — these are currently ignored.  
- For **batch processing with images**, expect potential memory pressure — monitor `CheckBatchCost` usage and consider limiting concurrent batches.  
- Use `LITELLM_DETAILED_TIMING=true` for debugging, but note that timing metrics are **not exported to Prometheus yet** (tracked in #33959).  
- The proxy’s **UI model management** still has limitations (e.g., can’t remove keys), so prefer direct config updates via API or YAML.

> 🔧 **Pro Tip**: Pin your LiteLLM version to `v1.106.0` or `v1.107.0-rc.1` for stability during production rollout. Watch for v1.107.0 final release early next week.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# **Unsloth Digest – 2026-10-19**

---

### **1. Today's Highlights**  
The Unsloth ecosystem continues to evolve with major UI/UX refinements and deeper support for multi-model management, particularly around model persistence and GPU resource tracking. Critical fixes address stability issues on AMD ROCm (gfx1030/gfx1201) and Windows desktop clients, while new PRs lay the groundwork for advanced inference orchestration via MCP agents and enhanced model loading controls.

---

### **2. Releases & Breaking Changes**  
*No new releases in the past 24 hours.*  
However, several high-impact changes were merged or proposed:
- **PR #14128** resolves a regression where preset sampling settings were incorrectly overwritten by per-model remembered settings — critical for consistent inference behavior ([#14068](https://github.com/unslothai/unsloth/issues/14068)).
- **PR #14163** fixes mobile layout issues where download indicators overlap the send button, improving usability on touch devices ([#14146](https://github.com/unslothai/unsloth/issues/14146)).
- **PR #14088** introduces an `Always` mode for "Keep multiple models loaded", enabling deterministic multi-model residency and visibility into which models are unloaded during load operations — a key change for production agent workflows.

---

### **3. New Model & Hardware Support**  
- **AMD ROCm**: Ongoing efforts to stabilize PyTorch + ROCm binding on RDNA2 (Radeon RX 6800 XT) and gfx1201 hardware; recent crashes linked to `llama.cpp` b11696 update ([#14057](https://github.com/unslothai/unsloth/issues/14057), [#14085](https://github.com/unslothai/unsloth/issues/14085)).
- **Mamba-2 Hybrids**: Enhanced support for Mamba-2-based models (e.g., Nemotron-H, Falcon-H1, Granite-4.0-H) via extension-free `mamba-ssm` wheels when running on Triton, reducing install size from ~230–594 MB to 224 KB ([#14160](https://github.com/unslothai/unsloth/pull/14160)).
- **Audio Models**: Audio.cpp models now appear across relevant pages (TTS, Voice Clone) based on runtime spec — previously limited to one page only ([#14072](https://github.com/unslothai/unsloth/pull/14072)).

---

### **4. Performance & Optimization**  
- **Context Parallelism**: Refactored trainer patching logic ensures `patch_sft_trainer()` only wraps methods when CP is enabled, avoiding unnecessary overhead on non-CP runs ([#14152](https://github.com/unslothai/unsloth/pull/14152)).
- **Model Export Efficiency**: For Qwen3.5-0.8B on T4 (sm75), causal-conv1d restoration improved decode speed by **4.4%** (19.10 → 19.95 tok/s), highlighting fine-grained kernel optimization gains ([#13971](https://github.com/unslothai/unsloth/pull/13971)).
- **CPU Stall Reduction**: RAG tool call archiving now uses space positions instead of exhaustive word splits, eliminating long CPU stalls in large conversations ([#14098](https://github.com/unslothai/unsloth/pull/14098)).

---

### **5. Stability & Regressions**  
*High-severity issues reported today:*
1. **Windows AMD ROCm Crashes** ([#14057](https://github.com/unslothai/unsloth/issues/14057), [#14085](https://github.com/unslothai/unsloth/issues/14085)): Updates break PyTorch ROCm/GPU binding on RDNA2 (gfx1030) and cause display flashing/hard lockups after `llama.cpp` b11696 update.
2. **Desktop App Crashes on P100** ([#14109](https://github.com/unslothai/unsloth/issues/14109)): CUDA error `invalid argument` during `ggml_cuda_kernel_launch` — likely due to improper tensor handling in newer `llama.cpp` versions.
3. **Memory Overload on macOS M4 Max** ([#14120](https://github.com/unslothai/unsloth/issues/14120)): Loading large GGUF models (Qwen 3.8 27B, Gemma 4 12B) simultaneously causes host crash due to memory exhaustion despite unified memory architecture.
4. **UI Freezes / Input Loss** ([#13604](https://github.com/unslothai/unsloth/issues/13604)): Chat input disappears after first reply post-update (v0.1.906-beta), affecting Windows users.

> ✅ *Fixes in progress:* PRs #14152, #14098, #14163 already address some root causes.

---

### **6. What This Means for Application Developers**  
Developers building AI agents or LLM-powered apps on Unsloth should:
- **Plan for multi-model resilience**: Use the new `Always` keep-loaded mode (via PR #14128) to avoid unexpected unloading during agent workflows.
- **Avoid FP8-only loads**: Be cautious with `load_in_fp8=True` — if no FP8 repo exists, it silently fails instead of falling back to `bf16`; use explicit fallback logic ([#14093](https://github.com/unslothai/unsloth/pull/14093)).
- **Prepare for dynamic model scheduling**: With MCP agents gaining visibility into model loads/unloads (PRs #14089, #14090), design stateful agents that can handle transient model availability.
- **Test on AMD/RDMA2**: If targeting ROCm, expect instability until upcoming patches land — monitor [issue #14057](https://github.com/unslothai/unsloth/issues/14057) for updates.
- **Optimize for mobile UX**: Ensure image pickers and chat inputs don’t clash on narrow screens — PR #14163 provides immediate fix.

> 📌 **Pro Tip**: Leverage the new `mamba-ssm` extension-free wheel for faster deployment of Mamba-2 hybrids in constrained environments.

---  
*Data source: [unslothai/unsloth GitHub](https://github.com/unslothai/unsloth)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*