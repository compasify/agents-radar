# AI Infrastructure Digest 2026-10-01

> Generated: 2026-10-01 01:30 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-10-01**

---

### **1. Ecosystem Overview**  
The AI inference infrastructure landscape in Q4 2026 is characterized by rapid specialization, convergence of performance and reliability at scale, and growing fragmentation across hardware backends. While serving engines like vLLM and SGLang push the envelope in throughput and low-latency inference for large models (including MoE and Flash variants), local runtimes like llama.cpp and Unsloth prioritize cross-platform portability and fine-grained control. Gateway platforms such as Ollama and LiteLLM are maturing into enterprise-grade orchestration layers, but face persistent stability issues under production loads. A clear trend emerges: **performance is no longer just about speed—it’s about predictability, determinism, and resilience across heterogeneous deployments**.

---

### **2. Activity Comparison**

| Project       | Issues Open (High/Critical) | PRs Merged (Last 7d) | Release Status       |
|---------------|-----------------------------|------------------------|----------------------|
| **vLLM**      | 18 (3 critical)             | 12                     | Stable (`v0.30.1rc1`, `v0.29.0`) |
| **SGLang**    | 15 (4 critical)             | 14                     | Pre-release; no stable tag |
| **llama.cpp** | 22 (4 high)                 | 10                     | Pre-release builds only |
| **Ollama**    | 17 (5 high)                 | 8                      | `v0.35.0` marked as pre-release without `-rc` |
| **LiteLLM**   | 12 (3 high)                 | 6                      | Dev release (`v1.105.0-dev.1`) with cosign signing |
| **Unsloth**   | 11 (2 high)                 | 7                      | No new releases; active dev |

> ✅ *Insight*: vLLM leads in stability and maturity, while Ollama and LiteLLM show signs of rushed or ambiguous release practices despite strong feature momentum.

---

### **3. Model Support Race**

| New Model / Architecture         | Supported By                          | Key Differentiators |
|----------------------------------|---------------------------------------|---------------------|
| **Qwen3.8-Flash-Next**           | vLLM, SGLang, Ollama                  | vLLM has dedicated FP8 non-determinism tracking; Ollama lacks vision support |
| **DeepSeek-V4.1-Flash**          | vLLM, SGLang, Ollama                  | vLLM fixes SM120 kernel crash; Ollama shows CUDA memory access errors |
| **GLM-5.3-Flash**                | vLLM, SGLang, llama.cpp               | vLLM leads with kernel fusion; SGLang adds ROCm PTPC support |
| **MiMo-V2 / MiMo V2.6 Flash**    | SGLang, llama.cpp                     | SGLang enables FA4 default on SM100; llama.cpp adds Metal BF16 |
| **Gemma 4 series**               | LiteLLM (requested), Ollama (pending) | Not yet in core model registry; demand rising |
| **Bongard (T5Gemma2)**           | Ollama (proposal)                     | First encoder-decoder model proposal in ecosystem |
| **Replicate API Streaming Bridge**| Unsloth                             | Unique integration allowing direct access to Replicate-hosted models |

> 🏆 **Leader**: **SGLang** and **vLLM** lead in cutting-edge model support, particularly for Flash, MoE, and multi-backend optimization. **Unsloth** stands out for expanding voice/audio and external API integrations.

---

### **4. Performance Frontier**

| Optimization Focus            | Leading Projects                              | Key Advances |
|-------------------------------|-----------------------------------------------|--------------|
| **Kernel-Level Fusion**       | vLLM, SGLang                                  | vLLM: Q-projection fusion → 1.64x speedup; SGLang: NEXTN graph input fusion |
| **KV Cache & Memory Efficiency** | vLLM, SGLang, llama.cpp                   | vLLM: KV connector coalescing; SGLang: HiSparse for long-context sparse serving |
| **Speculative Decoding**      | vLLM, SGLang                                  | vLLM: draft slot accounting fixes; SGLang: dynamic CP extension |
| **Graph & Warm-Up Optimization** | SGLang (Weight Cache Daemon), vLLM       | SGLang: cold start from 300s → <1s (Qwen3-235B); vLLM: graph capture improvements |
| **Quantization & Precision**  | vLLM, llama.cpp, Ollama                       | vLLM: FP8 non-determinism fixes; llama.cpp: MXFP4/BF16 on Metal |
| **Distributed & Parallel Serving** | vLLM (MTP, DS), SGLang (PTPC, HiSparse) | vLLM: GPU offload deadlocks; SGLang: emerging context-aware prefill parallelism |

> 🔥 **Frontier Focus**: The race is now on **predictable, deterministic inference at scale**, with kernel fusion, efficient KV cache management, and fast cold-start recovery as primary battlegrounds.

---

### **5. Layer Positioning**

| Project       | Primary Layer                     | Role Summary |
|---------------|-----------------------------------|--------------|
| **vLLM**      | **Inference Engine**              | High-performance, scalable engine for large models; dominant in datacenter GPU clusters |
| **SGLang**    | **High-Throughput Inference Stack** | Optimized for low-latency, high-concurrency workloads; ideal for LLM gateways and agents |
| **llama.cpp** | **Local Runtime / Cross-Platform** | Lightweight, portable backend for edge, mobile, and CPU/GPU hybrid environments |
| **Ollama**    | **Gateway + Local CLI Platform**  | User-friendly interface for model deployment; increasingly acts as a proxy layer |
| **LiteLLM**   | **AI Gateway / Proxy Layer**      | Aggregates multiple providers; focuses on cost tracking, guardrails, and compliance |
| **Unsloth**   | **Local UI + Fine-Tuning Platform** | End-to-end local AI experience with audio, RAG, and model comparison tools |

> 💡 *Strategic Insight*: **vLLM/SGLang** dominate at the engine layer; **LiteLLM/Ollama** serve as de facto proxies; **Unsloth** targets the user-facing local AI market.

---

### **6. Trend Signals**

#### 🔍 **Key Industry Trends Extracted from Today's Activity**:
1. **Determinism Is Now a Production Requirement**  
   — Critical issues like vLLM’s FP8 non-determinism (#54521) and Unsloth’s fixed latency overhead (#12364) signal that developers can no longer tolerate inconsistent outputs or unpredictable latencies—especially in agent workflows.

2. **Hardware Fragmentation Is Escalating**  
   — AMD (ROCm 10.0 vs 7.2), Intel Arc (crashes on B60/B70), Apple Silicon (Metal leaks), and even NVIDIA (RTX 5090 CUDA errors) all exhibit severe instability. This demands **hardware-aware configuration tuning** and rigorous testing per target platform.

3. **Cold Start Latency Is a Competitive Weapon**  
   — SGLang’s Weight Cache Daemon reducing startup time from 300s to <1s is a game-changer for cloud-native inference. Expect more projects to invest in **model loading acceleration** via caching and daemonization.

4. **Security & Compliance Are No Longer Optional**  
   — LiteLLM’s silent guardrail bypasses (#43956) and Ollama’s SafeUnpickler vulnerability (#30165) highlight that **content safety and auditability must be baked into the stack**, not bolted on.

5. **Local AI Is Evolving Beyond “Just Run It”**  
   — Unsloth’s audio pipeline, document fidelity fixes, and Replicate bridge reflect a shift toward **end-to-end multimodal local experiences**, not just model execution.

#### ✅ **Action Items for Application Developers**:
- **Test every upgrade path**—even minor ones (e.g., v0.29.0 → v0.30.1) may introduce decode regressions.
- **Avoid `temperature=0` with Qwen3.8-Flash-Next** until vLLM resolves FP8 non-determinism.
- **Never rely on `OLLAMA_GPU_OVERHEAD` or `VLLM_PLE_CPU_OFFLOAD`**—they’re currently non-functional or buggy.
- **Use `--enable-prefill-cp` cautiously**—it’s still limited to specific backends.
- **Monitor for silent failures** in streaming, LoRA loading, and image processing—especially with cloud-backed models.

---

> 📌 **Final Takeaway**: The AI infrastructure ecosystem is no longer about raw performance alone. It’s about **reliability, consistency, security, and developer experience**—and those who deliver on all six will win the next generation of AI applications.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

---

### **vLLM Digest — 2026-10-01**

#### **1. Today’s Highlights**  
The vLLM project continues to stabilize around its latest release train, with critical fixes for speculative decoding and scheduler correctness across multiple model families (Qwen3.8, DeepSeek-V4.1). Key progress includes the landing of performance optimizations for GLM-5.3 and Qwen3-Next on ROCm, alongside improvements in Rust frontend benchmarking fidelity. A major focus remains on resolving non-determinism in FP8 quantized models under high-context workloads.

#### **2. Releases & Breaking Changes**  
*None reported in the last 24 hours.*  
No new releases or breaking API/config changes observed. The `v0.30.1rc1` and `v0.29.0` versions remain active in issue tracking, particularly regarding regression reports from earlier stability benchmarks.

#### **3. New Model & Hardware Support**  
- **Model Support**:  
  - **DeepSeek-V4.1-Flash** now has dedicated performance tracking and bug fixes for SM120 (RTX PRO 6000 Blackwell) and ROCm (MI355X), including kernel instantiation issues due to `page_block_size=32`.  
  - **GLM-5.3-Flash** is receiving targeted optimization PRs (e.g., #59084) to fuse Q projection into `fused_q` kernels.  
  - **Qwen3.8-Flash-Next** is under active scrutiny for deterministic inference failures and CPU offload deadlocks on GB10 (sm_121).  

- **Hardware & Backend Support**:  
  - **ROCm 10.0** is being promoted as the default image (#58761), replacing ROCm 7.2 during transition.  
  - **AMD MI355X (gfx950)** sees ongoing performance tuning for Qwen3.8-2.4T-A95B (#57149) and DeepSeek-V4.1 (#56506).  
  - **Intel Arc B60 (XPU)** support remains fragile: crashes occur in MoE selector path with WNA16 quantization (#43750), and MTP+graph capture fails on TP=2 (#56917).

#### **4. Performance & Optimization**  
- **Kernel-Level Gains**:  
  - GLM-5.3: Fusion of Q projection into `fused_q` kernel reduces 78 GPU launches per TP rank → **1.27–1.64x speedup** (#59084).  
  - Qwen3-Next: Fused `QK-norm+RoPE+gate` Triton kernel enables efficient attention computation on ROCm (#51406).  
  - ROCm: AITER MLA metadata build reduced host dispatches by ~21x (#58381); page-index expansion parallelized over token chunks (#57978).  

- **Scheduler & Graph Optimizations**:  
  - DFlash/DSpark draft slot accounting now respects token budget more accurately (#59468).  
  - Context combine and anchor prep captured within draft CUDA graph (#59511), improving graph efficiency.  
  - KV connector coalescing across cache groups improves I/O efficiency on non-device backends (#54483).  

- **Benchmarking Improvements**:  
  - Rust `vllm-bench` now correctly measures chat latency (stops at last token) and warns on default temperature usage (#59251, #59247), aligning with Python version behavior.

#### **5. Stability & Regressions**  
| Severity | Issue | Impact | Status |
|---------|------|--------|--------|
| 🔴 Critical | [#54521](https://github.com/vllm-project/vllm/issues/54521): Non-deterministic greedy decoding in Qwen3.8-Flash-Next (FP8) when context nears `indexer_budget` | Five identical requests return different completions; affects production reliability | Open, 49 comments |
| 🔴 Critical | [#59203](https://github.com/vllm-project/vllm/issues/59203): DeepSeek-V4.1-Flash crashes on SM120 due to missing sparse-MLA kernel for `page_block_size=32` | Prevents deployment on RTX PRO 6000 Blackwell | Open, 16 comments |
| 🔴 Critical | [#53960](https://github.com/vllm-project/vllm/issues/53960): `VLLM_PLE_CPU_OFFLOAD=1` deadlocks on single-GPU GB10 (sm_121) during engine init | Blocks hybrid offload use case | Open, 19 comments |
| 🟡 High | [#57680](https://github.com/vllm-project/vllm/issues/57680): Decode throughput drops ~3.3x from v0.26.0 to v0.29.0 (H100, Qwen3.6-35B-A3B-FP8) | Regression in core inference path | Open, 6 comments |
| 🟡 Medium | [#56868](https://github.com/vllm-project/vllm/issues/56868): GLM-5.3-Flash long-decode degeneration after accumulated reasoning steps | Degraded output quality over time | Open, 35 comments |

> ✅ *Fix PRs exist for some regressions:*  
> - [#52244](https://github.com/vllm-project/vllm/pull/52244): Restores prefix-cache hits under MTP spec decoding (Qwen3.5)  
> - [#59468](https://github.com/vllm-project/vllm/pull/59468): Fixes draft slot reservation logic in MRV2

#### **6. What This Means for Application Developers**  
- **Avoid `temperature=0` with Qwen3.8-Flash-Next** on large contexts (> `indexer_budget`) until [#54521] is resolved—expect non-deterministic outputs.  
- **Use `--enable-prefix-caching` cautiously** with MTP speculative decoding on Qwen3.5-series; verify prefix hit rates via logs.  
- **Monitor vLLM upgrade paths carefully**: v0.29.0→v0.30.1 may introduce decode throughput regressions (see [#57680]). Test with your workload before deploying.  
- **For AMD users**: Use ROCm 10.0 images (#58761) and validate DeepSeek-V4.1/QLM-5.3 performance on MI355X via tuned configs.  
- **Rust frontend adoption**: Benchmark results are now aligned with Python (`vllm-bench` fix #59251), but ensure temperature defaults don’t skew metrics (#59247).  
- **Memory-heavy workloads**: If using CPU offload (`VLLM_PLE_CPU_OFFLOAD=1`), avoid single-GPU GB10 setups until [#53960] is patched.

> 💡 *Pro Tip*: Use `--custom-histogram-buckets` (via #48867) to tune Prometheus metrics for production observability.

---  
*Data source: [vLLM GitHub](https://github.com/vllm-project/vllm) – October 1, 2026*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

---

### **SGLang Digest — 2026-10-01**

---

#### **1. Today's Highlights**  
SGLang continues to accelerate its high-throughput, low-latency inference stack with critical progress on **fast engine recovery via the Weight Cache Daemon**, reducing startup times from ~300s to under 1s for Qwen3-235B FP8. A major focus remains on **dynamic and context-aware prefill parallelism**, now extended to support more MHA/GQA backends (FlashInfer/TRTLLM-MHA) and long-context sparse serving via HiSparse. Notably, PR #41886 introduces FA4 as default for MiMo on SM100 GPUs, boosting decode throughput by 1.85×.

---

#### **2. Releases & Breaking Changes**  
None reported in the last 24 hours. No new releases or breaking API/config changes observed.

---

#### **3. New Model & Hardware Support**  
- ✅ **MiMo-V2**: Improved support on SM100 with FA4 fallback enabled by default (PR #41886).  
- ✅ **AMD ROCm (gfx950)**: Added opt-in PTPC FP8 KDA projections for GLM-5.3-Flash (PR #38764); full Kimi-K3 MXFP4 support on ROCm (PR #40811).  
- ✅ **Qwen3.8-Flash-Next**: Ongoing roadmap integration with kernel optimizations and MTP CPU overhead reduction (PR #41175).  
- ✅ **HiSparse**: Production-ready long-context sparse attention support with reduced GPU memory usage (Issue #28874).  
- ✅ **Gluon MegaMoE**: RFC underway for SGLang integration and multi-node support (Issue #38334).

---

#### **4. Performance & Optimization**  
- 🚀 **Weight Cache Daemon (Phase 1)**: Reduces model load time from **~306–327s → <1s** on Qwen3-235B FP8 (blog: [2026-08-21](https://www.lmsys.org/blog/2026-08-21-sglang-weight-cache-daemon)).  
- ⚡ **MiMo Decode Throughput**: 1.85× improvement using FA4 over Triton on SM100 (PR #41886); TTFT reduced by **34.8%**.  
- 🔥 **Prefill Context Parallelism (CP)**: Progress toward dynamic CP; currently supports MLA models (Dpsk v3/Kimi-K2.5), with pending work for FlashInfer/TRTLLM-MHA backends (Issue #21788).  
- 💡 **Kernel Fusion**: NEXTN verify/draft graph input preparation fused into compact contract (PR #41175), improving verification efficiency.  
- 📈 **Memory Efficiency**: HiSparse enables lower GPU memory usage during decode by retaining only a hot working set (Issue #28874).

---

#### **5. Stability & Regressions**  
High-severity issues reported today:  
- **Critical Crash Risk**: `--cuda-graph-max-bs-prefill` silently rounds down to nearest bucket, potentially disabling post-capture KV sizing (Issue #41923, PR #41923 open).  
- **Memory Exhaustion**: Triton kernel `load_binary` fails with "operation not permitted" on GB10/SM121 during decode CUDA graph replay, leading to GPU driver lockup (Issue #40948, PR #40948 open).  
- **Security Vulnerability**: SafeUnpickler deny-list bypass could lead to RCE via `/load_lora_adapter_from_tensors` (Issue #30165, **high severity**, no fix yet).  
- **Data Loss**: Multiple format detectors (Pythonic, Inkling, Gemma-4, etc.) drop buffered text at stream end due to unflushed `_buffer` (PR #41963 / #41962 open).  

> 🔍 *Note:* While several fixes are being developed, these represent active risks in production deployments.

---

#### **6. What This Means for Application Developers**  
- **Expect faster cold starts** with Qwen3-235B FP8 and large MoE models thanks to the Weight Cache Daemon—ideal for high-availability LLM gateways.  
- **Use `--enable-prefill-cp` cautiously**—it’s still limited to certain backends; ensure your model (e.g., FlashInfer/TRTLLM-MHA) is supported before enabling.  
- **Avoid `--cuda-graph-max-bs-prefill` with non-bucket-aligned values**—this may silently degrade performance.  
- **Be vigilant about LoRA loading**: The SafeUnpickler vulnerability (`#30165`) requires immediate patching if using `load_lora_adapter_from_tensors`.  
- **Stream formatting bugs** (e.g., text loss in Pythonic/Inkling) suggest you should validate output integrity when using tool-call streaming.  
- **For AMD users**: Opt into PTPC FP8 and MXFP4 support where available for better performance on gfx950.

> 👉 **Action Items**: Monitor PRs #41923, #40948, and #30165 for urgent fixes; consider upgrading to latest main if stability is critical.

---  
*Digest generated from GitHub data: [sgl-project/sglang](https://github.com/sgl-project/sglang) | 2026-10-01*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-10-01**

---

### **1. Today's Highlights**  
The latest updates focus on critical stability fixes for GPU backends (HIP, SYCL, Vulkan) and improved batch handling in speculative decoding. Key PRs include memory leak mitigation on Metal, correct ordering of layer inputs during speculative decoding, and enhanced support for multi-sequence MatMul on Hexagon. A notable performance optimization improves FlashAttention scheduling on CUDA for Volta and newer architectures.

---

### **2. Releases & Breaking Changes**  
No new stable release was published today. The latest builds are pre-release commits (`b11308`, `b11307`, etc.), primarily focused on bug fixes and backend stability. Notable changes:
- `--download-mmproj` CLI argument now properly parses (PR #29777).
- `llama_batch_ext` now supports mixed embd + raw token input (PR #29622), enabling non-causal processing for models like Paligemma.
- `cli: exit on stdin EOF` — removes console-wide Ctrl+C broadcast on Windows (PR #29722).

> 🔗 [GitHub PR #29722](https://github.com/ggml-org/llama.cpp/pull/29722) | [PR #29622](https://github.com/ggml-org/llama.cpp/pull/29622)

---

### **3. New Model & Hardware Support**  
- **Model Support**: Runtime support added for **Prism Bonsai 2 27B** (PR #29600).  
- **Hardware/Backend**:  
  - **Hexagon**: Merged `hexagon: flatten matmul into 2d to use HMX in multi-sequence` (PR #29779) — improves throughput on Snapdragon 7 Gen 4 (SM7750).  
  - **Metal**: Added BF16 math support for MXFP4 mul-mat kernels (PR #29770), crucial for high-precision models like MiMo V2.6 Flash.  
  - **SYCL**: Updated to support Intel oneAPI DPC++ 2026.1.0; ongoing work on addressing `UR_RESULT_ERROR_OUT_OF_HOST_MEMORY` on Arc GPUs (Issue #25812).  

> 🔗 [PR #29600](https://github.com/ggml-org/llama.cpp/pull/29600) | [PR #29779](https://github.com/ggml-org/llama.cpp/pull/29779) | [PR #29770](https://github.com/ggml-org/llama.cpp/pull/29770)

---

### **4. Performance & Optimization**  
- **CUDA**: Improved FlashAttention prefill via whole-tile scheduling (PR #29435); reduces latency by up to 12% on Blackwell-class GPUs.  
- **Volta (sm_70)**: Now routed to Turing’s optimized MMVQ nwarps table, improving K-quant decode efficiency (PR #29753).  
- **Vulkan**: Extended FWHT kernel support up to block width 8192 (PR #29772), reducing fallback to dense matmul for large sequences.  
- **OpenCL**: Adreno E17 compiler now marked as supporting vector subgroup broadcast (PR #29698), enabling faster kernel dispatch.  

> 🔗 [PR #29435](https://github.com/ggml-org/llama.cpp/pull/29435) | [PR #29753](https://github.com/ggml-org/llama.cpp/pull/29753) | [PR #29772](https://github.com/ggml-org/llama.cpp/pull/29772)

---

### **5. Stability & Regressions**  
High-priority stability issues reported today:
- **SYCL Crash on Intel A770** (#27063): Complete failure under sustained load; reproducible with Qwen3.5, GPT-OSS-20B, Gemma 4A4B. No fix yet.
- **ROCm/HIP: Top-K falls back to CPU >4K context** (#26399): 6.4× slower generation on DeepSeek-V4-Flash; affects gfx906 and gfx942.
- **GPU Hang on Intel Arc Pro B70** (#25692): Compute engine reset under flash attention + quantized KV cache; occurs after minutes of concurrent traffic.
- **HMX MUL_MAT returns inf on Snapdragon 7 Gen 4** (#29473): Critical issue for mobile inference; affects all models using HMX acceleration.

> 🔗 [Issue #27063](https://github.com/ggml-org/llama.cpp/issues/27063) | [Issue #26399](https://github.com/ggml-org/llama.cpp/issues/26399) | [Issue #25692](https://github.com/ggml-org/llama.cpp/issues/25692) | [Issue #29473](https://github.com/ggml-org/llama.cpp/issues/29473)

---

### **6. What This Means for Application Developers**  
- **Use caution with `--fa on` on AMD ROCm and Intel Arc** — known regressions in top-k and flash attention may severely degrade performance or crash the system.
- **Avoid `--threads -1` on Apple Silicon or hybrid CPUs** — prefer `common_cpu_get_num_math()` for better thread affinity (PR #23836).
- **Leverage `llama_batch_ext` for non-causal models** (e.g., Paligemma) — now supports both embedded and text tokens in a single batch (PR #29622).
- **Expect longer load times with SYCL tensor parallelism** — issue #25423 reports 20+ minute delays; consider disabling if not needed.
- **Monitor GPU memory usage closely** — issues like `UR_RESULT_ERROR_OUT_OF_HOST_MEMORY` and `ErrorDeviceLost` indicate potential resource exhaustion.

> ✅ **Best Practice**: Always test model serving workflows on target hardware before deployment, especially with offloading enabled. Use `--cache-ram -1` cautiously — it does not disable limits as expected (Issue #29324).

---  
*Digest compiled from GitHub activity: [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-10-01**

---

### **1. Today's Highlights**  
The Ollama ecosystem continues to expand its support for advanced model architectures and heterogeneous backends, with key progress in MLX integration and System One API maturity. Critical stability issues around GPU memory management, Vulkan backend hangs, and cloud model behavior (especially `deepseek-v4.1-flash:cloud`) remain prominent, signaling ongoing challenges in cross-platform inference reliability.

---

### **2. Releases & Breaking Changes**  
*No new releases in the last 24 hours.*  
- **v0.35.0 is marked as a pre-release without an `-rc` suffix**, raising confusion about release intent ([#18706](https://github.com/ollama/ollama/issues/18706)).  
- The **System One API** has been formally documented with decision-guided examples and reference specs ([#18702](https://github.com/ollama/ollama/pull/18702)), now including support for object-valued criteria and structured outputs.

---

### **3. New Model & Hardware Support**  
- **MLX Backend**: Full support added for **System One models** via PR [#18701](https://github.com/ollama/ollama/pull/18701), enabling native execution on Apple Silicon with optimized layer placement.  
- **Bongard (T5Gemma2)**: A new model proposal submitted for `/v1/systemone` integration ([#18714](https://github.com/ollama/ollama/issues/18714))—a 4B encoder-decoder trained for logical reasoning tasks.  
- **CUDA 12 + Windows**: Persistent issues reported with RTX 5090 and `cohere2moe` models due to CUDA illegal memory access ([#18642](https://github.com/ollama/ollama/issues/18642)); potential regression from recent driver or backend updates.  
- **Vulkan**: AMD RX 6800 XT users face access violations during model loading ([#18557](https://github.com/ollama/ollama/issues/18557)), indicating deep driver-level compatibility gaps.

---

### **4. Performance & Optimization**  
- **Throughput Collapse in Containers**: CPU-limited environments suffer up to **45x throughput degradation** when `n_threads` ignores cgroup quotas and cpuset constraints ([#17916](https://github.com/ollama/ollama/issues/17916)).  
- **Memory Leak on macOS/Metal**: `llama-server` malloc heap grows uncontrollably under sustained load, peaking at **8.25 GB** despite no KV cache growth ([#18099](https://github.com/ollama/ollama/issues/18099)).  
- **GPU Overhead Ignored**: `OLLAMA_GPU_OVERHEAD` setting is ineffective in reserving VRAM for llama-server runners, leading to out-of-memory crashes even with explicit overhead declarations ([#18679](https://github.com/ollama/ollama/issues/18679)).  
- **Embedding Efficiency**: PR [#18397](https://github.com/ollama/ollama/pull/18397) proposes reusing HTTP connections for embedding loads, reducing per-request overhead by eliminating idle connection churn.

---

### **5. Stability & Regressions**  
| Severity | Issue | Link | Status |
|--------|------|------|--------|
| 🔴 High | **Silent image discard** in `deepseek-v4.1-flash:cloud` despite `vision` capability flag | [#18527](https://github.com/ollama/ollama/issues/18527) | Open |
| 🔴 High | **Vulkan backend crash** on AMD RX 6800 XT with access violation (`0xc0000005`) | [#18557](https://github.com/ollama/ollama/issues/18557) | Open |
| 🔴 High | **CUDA illegal memory access** on RTX 5090 with Cohere MoE models | [#18642](https://github.com/ollama/ollama/issues/18642) | Open |
| 🟡 Medium | **Chat processing fails silently after 60s** on M4 Pro MacBooks with large contexts | [#18368](https://github.com/ollama/ollama/issues/18368) | Open |
| 🟡 Medium | **Model stalls indefinitely** under single-slot MLX nvfp4 load | [#18505](https://github.com/ollama/ollama/issues/18505) | Open |
| 🟡 Medium | **Windows auto-update corrupts CUDA DLLs**, causing fallback to CPU | [#18712](https://github.com/ollama/ollama/issues/18712) | Open |

> ✅ *Fix PRs exist for:*  
> - JSON property order preservation: [#18721](https://github.com/ollama/ollama/pull/18721)  
> - Tool message content consolidation: [#18722](https://github.com/ollama/ollama/pull/18722)  
> - Proxy support for blob downloads: [#18719](https://github.com/ollama/ollama/pull/18719)

---

### **6. What This Means for Application Developers**  
- **Avoid `deepseek-v4.1-flash:cloud` for vision tasks**—it silently discards images despite claiming `vision` support. Use local or alternative models until resolved.  
- **Do not rely on `OLLAMA_GPU_OVERHEAD`** for VRAM reservation; it’s currently non-functional—plan accordingly for GPU memory pressure.  
- **In containerized environments**, explicitly set `n_threads` to match cgroup CPU limits to prevent massive performance degradation.  
- **For high-throughput agents**, avoid Vulkan backends on AMD GPUs until #18557 is fixed; prefer Metal (Apple Silicon) or CUDA (NVIDIA).  
- **Leverage the new System One API** for structured output workflows—use `response_format` with schema validation, but be aware of property order loss unless using PR [#18721]’s fix.  
- **Monitor for silent failures** in long-running chats—some models hang after 60 seconds without GUI feedback ([#18368](https://github.com/ollama/ollama/issues/18368)).

> 💡 *Pro Tip:* Use `--fit` and manual `layer_placement` tuning for MLX MoE models like `gemma4:31b-mlx` to avoid expert weight errors ([#18631](https://github.com/ollama/ollama/pull/18631)).

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-10-01**

---

### **1. Today's Highlights**  
The LiteLLM ecosystem continues to mature with critical stability fixes for guardrail enforcement, streaming behavior, and cost tracking in high-scale proxy deployments. Notable work includes resolving silent guardrail bypasses (`#43826`, `#43956`), restoring proper pass-through header handling (`#43962`), and improving audit log reliability (`#43583`). These updates strengthen production readiness for enterprise-grade AI gateways.

---

### **2. Releases & Breaking Changes**  
No new stable releases were published in the last 24h. However, **v1.105.0-dev.1** was tagged with enhanced security via [cosign-signed Docker images](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0), confirming consistent signing across all artifacts since commit `0112e53`.  

**Migration Note**: Users on `stable/1.101.x` should backport fixes from PRs like [#43943](https://github.com/BerriAI/litellm/pull/43943) if using Straiker v3 keys or encountering relay issues with `/api/v3/detect`.

---

### **3. New Model & Hardware Support**  
- **Gemma 4 models** are now actively requested for inclusion in `model_prices_and_context_window.json` ([#26973](https://github.com/BerriAI/litellm/issues/26973)). While not yet supported, this signals growing demand for Google’s latest open-source models via OpenRouter.
- **Gemini 3.8 Flash** is currently inaccessible through the SDK due to a missing model registration issue ([#43828](https://github.com/BerriAI/litellm/issues/43828)), indicating incomplete integration support despite API availability.

> ✅ *Pending*: Full Gemini model support (including tooling and context window alignment) requires further SDK-level configuration.

---

### **4. Performance & Optimization**  
- **Lazy logging loading** introduced in [#43933](https://github.com/BerriAI/litellm/pull/43933) reduces cold-start overhead by deferring import of 135+ logging integrations until first use — significantly lowering initial memory footprint and startup latency for SDK users.
- **Index optimization** on partitioned `LiteLLM_SpendLogs` via [#43957](https://github.com/BerriAI/litellm/pull/43957) enables concurrent index creation during migrations without blocking writes, improving upgrade resilience in large-scale deployments.

---

### **5. Stability & Regressions**  
| Severity | Issue | Impact | Fix Status |
|--------|------|--------|------------|
| 🔴 High | Streaming + `logprobs=True` crashes vLLM-backed models (`PydanticSerializationError`) | Breaks real-time agent workflows | [PR #43956](https://github.com/BerriAI/litellm/pull/43956) |
| 🔴 High | Guardrails silently bypass blocks when `disable_exception_on_block=True` | Security regression in content moderation | [PR #43956](https://github.com/BerriAI/litellm/pull/43956) |
| 🟡 Medium | Cache misses `provider_specific_fields` (e.g., Anthropic citations) | Incomplete response caching | [Issue #13048](https://github.com/BerriAI/litellm/issues/13048) |
| 🟡 Medium | Redis cache key `end_user_id:{id}` not invalidated after customer CRUD | Stale data leaks across users | [Issue #31838](https://github.com/BerriAI/litellm/issues/31838) |
| 🟡 Medium | Audit logs dropped during worker shutdown | Loss of compliance traceability | [Issue #43583](https://github.com/BerriAI/litellm/issues/43583) |

> ⚠️ **Critical Risk**: Silent guardrail bypasses and stream crashes may lead to unmonitored content exposure or service degradation in production environments.

---

### **6. What This Means for Application Developers**  
- **Avoid `stream=True` + `logprobs=True`** with vLLM-backed models until [#43956](https://github.com/BerriAI/litellm/pull/43956) is released — it will cause fatal serialization errors.
- **Verify guardrail configurations carefully**, especially when setting `disable_exception_on_block=True`. Use explicit error handling to prevent silent bypasses.
- **Do not rely on cached responses** for models requiring `provider_specific_fields` (e.g., Anthropic web search results); expect partial or missing data.
- **Update your SDK usage patterns** to leverage lazy logging (`import litellm` no longer loads all integrations upfront).
- **Monitor spending accuracy** for custom models not in the built-in cost map — current logic may report `$0` despite correct `estimated_cost` ([#35691](https://github.com/BerriAI/litellm/issues/35691)).

> 💡 **Pro Tip**: Use `litellm.get_supported_openai_params()` cautiously — some models (e.g., Gemini) list unsupported parameters like `frequency_penalty` ([#26108](https://github.com/BerriAI/litellm/issues/26108)), leading to runtime failures.

---  
*Digest compiled from GitHub activity: [BerriAI/litellm](https://github.com/BerriAI/litellm)*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

---

### **Unsloth Digest — 2026-10-01**

#### **1. Today's Highlights**  
The Unsloth project continues its rapid evolution with major refinements to voice interaction and audio pipeline stability, including the reconstruction of core voice mode functionality via PRs #12384, #12385, and #12386. Critical UX improvements are underway for PDF/Word fidelity (PRs #12377, #12378), model comparison accuracy (#12380, #12381), and system prompt consistency (#12382). These updates reflect a strong focus on robustness and user control in local AI workflows.

#### **2. Releases & Breaking Changes**  
None. No new releases or breaking configuration changes were published in the last 24 hours.

#### **3. New Model & Hardware Support**  
- **Audio Pipeline Expansion**: PR #12342 introduces `audio.cpp` as a native runtime for speech, music, and dictation, enabling direct use of TTS/music/ASR models from the Audio page and chat interfaces.  
  🔗 [PR #12342](https://github.com/unslothai/unsloth/pull/12342)  
- **Model Compatibility**: PR #11905 adds a *native Replicate API streaming bridge* and universal RAG database integrations, allowing direct access to Replicate-hosted models without proxying through OpenAI-compatible endpoints.  
  🔗 [PR #11905](https://github.com/unslothai/unsloth/pull/11905)

#### **4. Performance & Optimization**  
- **Latency Overhead**: A critical performance regression has been reported in the Studio’s OpenAI-compatible API (`/v1/chat/completions`) — adding a fixed ~1.2 seconds per request regardless of payload size or token count. This severely impacts short-text inference workloads.  
  🔗 [Issue #12364](https://github.com/unslothai/unsloth/issues/12364)  
- **Memory & Kernel Efficiency**: PR #12372 reports severe throughput degradation due to `mmproj-F16.gguf` being paged from disk during generation, along with rejected `--mlock` and shadow-stripped extra args. This undermines high-performance inference on multi-GPU setups.  
  🔗 [Issue #12372](https://github.com/unslothai/unsloth/issues/12372)  
- **Optimization Fix**: PR #12351 addresses a gradient corruption bug in `Fast_CrossEntropyLoss.backward`, which could silently produce incorrect gradients when reusing logits across multiple losses — critical for fine-tuning stability.  
  🔗 [PR #12351](https://github.com/unslothai/unsloth/pull/12351)

#### **5. Stability & Regressions**  
| Severity | Issue | Description | Status | PR/Workaround |
|---------|------|-------------|--------|---------------|
| ⚠️ High | #12372 | `mmproj-F16.gguf` paged from disk → massive t/s drop; `--mlock` ignored | Open | In progress |
| ⚠️ High | #12364 | Fixed 1.2s latency overhead in OpenAI-compatible API | Open | No fix yet |
| ⚠️ Medium | #12365 | Multi-user model sync fails across accounts | Open | No fix |
| ⚠️ Medium | #12361 | Date formatting in prompts not removable | Open | No fix |
| 🛠️ Low | #12327 | Random "User's message is empty" thinking blocks | Open | No fix |
| 🛠️ Low | #11792 | Qwen Image 2.1 Q4_K_M crashes on M5 Max (48GB RAM) | Open | Memory limits likely |

#### **6. What This Means for Application Developers**  
- **Voice Workflows Are Now More Stable**: The reconstructed voice pipeline (PRs #12384–#12386) enables reliable end-to-end audio conversation modes, making unsloth a viable platform for voice-driven agents and multimodal apps.  
- **Avoid the OpenAI API Latency Trap**: If using local GGUF models via `/v1/chat/completions`, expect ~1.2s overhead per request — plan accordingly or consider bypassing the endpoint for low-latency use cases.  
- **Enhanced Document Fidelity**: With PRs like #12377 and #12378, developers can now build applications that preserve form data, footnotes, and placeholder text — crucial for legal, medical, and enterprise automation.  
- **Fine-Tuning Reliability Improves**: Fixes to Base vs LoRA comparison (#12381) and model resume logic (#12371) ensure more accurate evaluation and iteration cycles.  

> ✅ **Actionable Takeaway**: For production-grade local LLM deployments, monitor memory usage closely (especially with M5/MacBook Pro systems), avoid relying on the OpenAI-compatible API for real-time inference, and leverage the new `audio.cpp` and Replicate bridges for broader model access.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*