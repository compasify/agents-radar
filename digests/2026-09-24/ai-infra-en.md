# AI Infrastructure Digest 2026-09-24

> Generated: 2026-09-24 00:50 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-09-24**

---

### **1. Ecosystem Overview**  
The AI inference and serving ecosystem is entering a phase of *deep specialization and cross-platform convergence*. Projects are no longer just competing on raw throughput—they are differentiating through architectural innovation (e.g., hybrid Mamba/GDN, HiCache), hardware-specific optimizations (Blackwell SM120, ROCm 7.x/10, AMD NPU), and agent-native features (structured outputs, tool calling, decision APIs). With major releases from vLLM, llama.cpp, and Unsloth—alongside critical stability fixes in Ollama and LiteLLM—the landscape is maturing rapidly, shifting focus from "can it run?" to "can it scale reliably under production workloads?"

---

### **2. Activity Comparison**

| Project       | Open Issues | Open PRs | Release Status         | Notes |
|---------------|-------------|----------|------------------------|-------|
| **vLLM**      | 38          | 147      | No new release (pending) | High activity in kernel optimization & stability fixes; strong momentum on hybrid models |
| **SGLang**    | 41          | 122      | No new release         | Active in dLLM roadmap; high severity regressions in speculative decoding & KV cache |
| **llama.cpp** | 57          | 164      | ✅ **v0.5.0** released   | Most active in model/hardware support; robust backend fixes post-v0.5.0 |
| **Ollama**    | 52          | 108      | 🟡 **v0.34.4-rc1** (RC) | Focus on MLX engine stability; structured output fixes critical for agents |
| **LiteLLM**   | 48          | 113      | Dev-only (`v1.104.0-dev.1`) | High-severity cost/rate-limiting bugs; security hardening in progress |
| **Unsloth**   | 68          | 135      | ✅ **v0.1.815-beta** released | Rapid iteration in multimodal/local runtime; NPU/ROCm support emerging |

> 🔍 *Insight*: **llama.cpp** leads in volume of contributions, while **Unsloth** shows the most aggressive pace in feature delivery and beta releases.

---

### **3. Model Support Race**

| New Model / Architecture       | Supported By                          | Status | Key Differentiator |
|-------------------------------|----------------------------------------|--------|--------------------|
| **Qwen3 series (hybrid Mamba/GDN)** | vLLM (partial), SGLang (Qwen3.8-Flash-Next), Unsloth (Qwen-Image-2.1) | ✅ Early adoption | vLLM leads with prefix caching & speculative decoding |
| **GLM-5.3-Flash**             | vLLM (partial), SGLang (roadmap), llama.cpp (no) | ⚠️ Partial | vLLM has attention recognition; SGLang has FP8/HiCache plans |
| **Gemma4 DSpark**             | ✅ **llama.cpp** (full support) | ✅ Stable | First project to fully enable tied weights, SWA, metadata |
| **HRM-Text (DFM Mimir 1B)**   | ✅ **llama.cpp** (GGUF) | ✅ Available | Targeted for low-latency draft models |
| **Ling-3.0-flash-VL**         | ✅ **llama.cpp** | ✅ Added | Vision-language model support |
| **Qwen-Image-2.1**            | ✅ **Unsloth** (beta) | ✅ Local support | Full GGUF + FP8 encoder integration; agent skills enabled |
| **SenseNova-U1/U1.5**         | ✅ **SGLang** (tracking) | 🔄 Roadmap | Open-source reference model being evaluated |
| **Inkling Multimodal**        | ✅ **SGLang** | ✅ HTTP 400 error handling | Structured response for invalid inputs |

> 🏆 **Winner**: **llama.cpp** leads in breadth of model support, especially for novel or lightweight backbones (DSpark, HRM-Text).  
> 🏅 **Runner-up**: **Unsloth** dominates in *multimodal local inference*, particularly for image generation with Qwen-Image-2.1.

---

### **4. Performance Frontier**

| Optimization Area               | Leading Projects                              | Key Innovations |
|----------------------------------|-----------------------------------------------|-----------------|
| **KV Cache Efficiency**           | vLLM (HiSparse), SGLang (FP8), Ollama (NVFP4) | ROCm HiSparse hot-buffering; FP8 precision; NVFP4 fusion |
| **Speculative Decoding**          | vLLM (MTP fused decode), SGLang (DFLASH)      | Reduced metadata rebuild; multi-step fusion |
| **Kernel Fusion & Memory**        | vLLM (fused QK-norm+RoPE+gate), SGLang (DSA indexer) | Fewer launches; unified MoE routing |
| **Batching & Throughput**         | vLLM (prefix caching), Unsloth (static step skip) | 7.58x prefill speedup; video gen acceleration |
| **Quantization Flexibility**      | vLLM (`int4_per_token_head` non-power-of-two), llama.cpp (ternary GGUF) | Adaptive head dims; ultra-low memory |
| **Long-Context Stability**        | llama.cpp (Metal, Vulkan), vLLM (OOM fix)     | Suballocation tuning; memory resizing post-profiling |

> 🔥 **Trend**: The frontier is shifting from *single-kernel speed* to *system-level coherence*—where memory management, scheduling, and quantization interplay critically.

---

### **5. Layer Positioning**

| Project       | Primary Layer                     | Role Summary |
|---------------|-----------------------------------|--------------|
| **vLLM**      | **High-Performance Serving Engine** | GPU-optimized inference; focus on scalability, latency, and hybrid model support |
| **SGLang**    | **dLLM (distributed LLM) Gateway** | Multi-protocol frontend; abstraction over backends; agent-centric design |
| **llama.cpp** | **Local Runtime & Embedded Inference** | Cross-platform, low-footprint execution; ideal for edge, mobile, and offline use |
| **Ollama**    | **Developer-Focused Local Gateway** | Simplified CLI/API; strong MLX/NPU integration; agent-ready structured outputs |
| **LiteLLM**   | **Multi-Provider API Gateway** | Unified interface across cloud providers; cost tracking, guardrails, rate limiting |
| **Unsloth**   | **Agent-First Local Runtime** | Built-in skill system, project/chat mgmt; optimized for image/video generation |

> 🧩 **Strategic Insight**:  
> - **vLLM/SGLang** = Production-scale inference engines  
> - **llama.cpp/Ollama** = Developer & edge-first deployment  
> - **LiteLLM** = Enterprise API orchestration  
> - **Unsloth** = Agent workflow platform

---

### **6. Trend Signals**

#### 🔹 **Key Industry Trends Extracted**
1. **Hybrid Architectures Are Mainstream**: Mamba/GDN hybrids (Qwen3, GLM-5.3-Flash) are now core targets—projects are racing to optimize prefix caching and speculative decoding.
2. **Hardware Abstraction Is Maturing**: ROCm 7.x/10, AMD NPU (XDNA 2), and Blackwell SM120 are no longer experimental—optimizations are now production-grade.
3. **Agent-Native Features Are Non-Negotiable**: Structured outputs, tool calling, decision APIs, and state persistence are becoming baseline expectations.
4. **Cost & Security Are Top Concerns**: LiteLLM’s budget enforcement and guardrail issues reflect growing need for auditability and financial control in multi-provider setups.
5. **Local First ≠ Lightweight Only**: Unsloth and llama.cpp show that “local” now includes high-performance, multimodal, and agent-enabled workflows.

#### ✅ **Actionable Guidance for Application Developers**
- **For agentic systems**: Prioritize **vLLM** (for scalable inference) + **Unsloth** (for local multimodal reasoning) + **LiteLLM** (for cost-aware routing).
- **For edge/deployment flexibility**: Use **llama.cpp** for hardware-agnostic local runs; **Ollama** for developer experience.
- **For enterprise gateways**: Build on **LiteLLM** with `--validate_config` and `cosign` verification for compliance.
- **Watch**: **AMD NPU (XDNA 2)** support via Unsloth/llama.cpp — early adopters can gain latency advantages in mobile and embedded environments.

> 💬 **Final Note**: The future isn’t about one-size-fits-all inferencing—it’s about *orchestrating specialized tools at the right layer*. Choose your stack based on workload type: **scale → vLLM/SGLang**, **locality → llama.cpp/Ollama**, **agent logic → Unsloth**, **multi-cloud → LiteLLM**.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

---

### **1. Today's Highlights**  
The vLLM project continues to advance its support for hybrid Mamba/GDN models with significant progress on prefix caching and speculative decoding optimizations, particularly for Qwen3 series. Critical stability fixes were merged for ROCm (MI355X) and CUDA environments, addressing KV cache OOM issues and graph profiling memory leaks. A major performance enhancement landed for Blackwell GPUs (SM120), enabling occupancy-adaptive Triton split-K segmentation.

---

### **2. Releases & Breaking Changes**  
*No new releases in the past 24 hours.*  
- **Pending**: The `vllm:admission_rejections_total` metric was added via PR [#55812](https://github.com/vllm-project/vllm/pull/55812), introducing granular rejection tracking (`reason` label) for `max_num_queued_reqs` vs `max_num_queued_tokens`. This change improves observability but may require updates to monitoring dashboards.

---

### **3. New Model & Hardware Support**  
- **New Models**:  
  - GLM-5.3-Flash: Partial support now includes attention architecture recognition; missing `Glm5NextTextLinearAttention` remains a blocker ([#54062](https://github.com/vllm-project/vllm/issues/54062)).  
  - Kimi-K3 (TP8): ROCm support enabled with MXFP4 quantization, though crashes observed under HIP 700 ([#50347](https://github.com/vllm-project/vllm/issues/50347)).  
- **Hardware & Backends**:  
  - **ROCm (gfx950 / MI355X)**: HiSparse sparse MLA hot-buffering enabled ([#57602](https://github.com/vllm-project/vllm/pull/57602)), improving memory efficiency for large MoE models.  
  - **NVIDIA SM120 (Blackwell)**: Triton kernel now dynamically adjusts split-K segment count based on SM occupancy ([#58482](https://github.com/vllm-project/vllm/pull/58482)).  
- **Quantization**:  
  - `int4_per_token_head` now supports non-power-of-two head dimensions ([#56198](https://github.com/vllm-project/vllm/pull/56198)).  

---

### **4. Performance & Optimization**  
- **Hybrid Mamba/GDN**:  
  - Three PRs implementing *Application-Directed Mamba Prefix Checkpointing* ([#55873](https://github.com/vllm-project/vllm/pull/55873), [#55875](https://github.com/vllm-project/vllm/pull/55875), [#55876](https://github.com/vllm-project/vllm/pull/55876)) enable **7.58x faster prefill throughput** for shared-prefix workloads (e.g., catalog attribute extraction).  
- **Speculative Decoding**:  
  - MTP fused multi-step decode removes eager metadata rebuild ([#58463](https://github.com/vllm-project/vllm/pull/58463)), reducing overhead for DeepSeek V4 and similar models.  
- **Kernel-Level**:  
  - Fused QK-norm+RoPE+gate Triton kernel for Qwen3-Next/Qwen3.5 ([#51406](https://github.com/vllm-project/vllm/pull/51406)) reduces kernel launches and improves latency.  
- **Memory Efficiency**:  
  - ROCm fix ([#58483](https://github.com/vllm-project/vllm/pull/58483)) prevents KV cache OOM by resizing to actual free memory post-profiling.  

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Fix PR |
|--------|------|--------|-------|
| 🔴 High | GLM-5.3-Flash long-decode degeneration after accumulated reasoning decode | Open ([#56868](https://github.com/vllm-project/vllm/issues/56868)) | None |
| 🔴 High | Scheduler permanently stops admitting requests when `running + skipped_waiting` hits `max_num_seqs` | Open ([#53130](https://github.com/vllm-project/vllm/issues/53130)) | None |
| 🟡 Medium | FlashInfer autotune wedges forever on SM103 (GB300) due to missing PTX in cubin | Open ([#58031](https://github.com/vllm-project/vllm/issues/58031)) | Root cause retracted; still unresolved |
| 🟡 Medium | Whisper `verbose_json` silently drops words after last complete segment in long audio | Open ([#58029](https://github.com/vllm-project/vllm/issues/58029)) | None |

> ⚠️ **Note**: Multiple open regressions impact production inference stability, especially for GLM-5.3-Flash and long-context streaming tasks.

---

### **6. What This Means for Application Developers**  
- **For Agentic Workloads**: Use `--enable-mamba-prefix-caching` with Qwen3.5-35B-A3B or similar hybrid models — recent PRs significantly improve performance on shared-prefix scenarios.  
- **For Multi-Tenant Serving**: Monitor admission metrics via `vllm:admission_rejections_total` to distinguish between queue cap limits (`max_num_queued_reqs` vs `max_num_queued_tokens`).  
- **For Long-Context Apps**: Avoid `GLM-5.3-Flash` for extended reasoning until [#56868](https://github.com/vllm-project/vllm/issues/56868) is resolved. Consider using `--max-num-seqs` carefully to prevent scheduler deadlocks.  
- **For Cross-Platform Deployments**: On AMD ROCm (MI355X), expect improved memory usage with HiSparse ([#57602](https://github.com/vllm-project/vllm/pull/57602)), but validate model compatibility with HIP 700.  
- **For Tool-Calling Apps**: Parser state persistence is being stabilized via PRs like [#57571](https://github.com/vllm-project/vllm/issues/57571); avoid retrying streams if stable tool call IDs are required.  

👉 **Actionable Tip**: If using `--speculative-decoding`, ensure you’re not on `DeepSeek-V4` with MTP > 1 unless you’ve applied the latest patches from [#58463](https://github.com/vllm-project/vllm/pull/58463).

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest – 2026-09-24

---

### **1. Today's Highlights**  
SGLang continues to advance its dLLM serving roadmap with key progress on **HiCache**, **FP8 KV cache**, and **AMD/ROCm DSpark support**, particularly for Qwen3.5 and GLM-5.3-Flash. Critical stability fixes were landed for **speculative decoding + NVFP4 KV cache** and **DeepSeek chunked-prefix prefill accuracy**, while new PRs enhance **MoE kernel fusion**, **multi-protocol frontend abstraction**, and **model decision APIs**.

---

### **2. Releases & Breaking Changes**  
None reported in the last 24 hours. No new releases or breaking API/config changes observed.

---

### **3. New Model & Hardware Support**  
- **AMD/ROCm DSpark Support**: Progress on `GLM-5.2` and `GLM-5.3-Flash` via ROCm 7.x, targeting AMD MI350/MI355X (PRs #34394, #40878).  
- **Qwen3.8-Flash-Next**: Roadmap tracks FP8 KV cache (landed), Hicache, and kernel optimizations (Issue #38731).  
- **SenseNova-U1/U1.5**: Official tracking started based on OpenSenseNova/SenseNova-U1 reference (Issue #37742).  
- **Inkling Multimodal**: Now supports structured error responses (`HTTP 400`) for invalid image inputs (PR #40897).  
- **NPU Optimization**: MXFP8 low-latency dispatch enabled for FP4 experts via Fp8MoEMethod (PR #40519).

---

### **4. Performance & Optimization**  
- **AMD ROCm Optimization**:  
  - Fused `DSA indexer q/k prep` into a single kernel launch (PR #34394), reducing decode overhead.  
  - Added small-batch MXFP4 MoE kernel for gfx950 (Qwen) to improve throughput at low batch sizes (PR #40204).  
- **Kernel Fusion & Memory Efficiency**:  
  - Unified MoE router GEMM path (Issue #38695) to reduce CPU overhead and improve precision control.  
  - HiSparse slot preparation now done once per attention metadata (PR #40782).  
- **Benchmarking & Inference Speed**:  
  - Added `--gsp-input-ids` to skip server tokenization in benchmarks (PR #40900), enabling faster synthetic testing.  
  - Updated CUDA 13.4 image with latest `deepgemm`, `deep-ep`, and `sgl-kernel` (PR #40987).

---

### **5. Stability & Regressions**  
| Severity | Issue | Description | Fix Status |
|---------|------|-------------|------------|
| 🔴 High | [#40921](https://github.com/sgl-project/sglang/issues/40921) | `trtllm_mha` backend on H200 (SM90) returns incorrect completions when used for both prefill and decode | Open |
| 🔴 High | [#40843](https://github.com/sgl-project/sglang/issues/40843) | Severe repetition and degenerate loops in GLM-5.3 with DFLASH speculative decoding | Open |
| 🔴 High | [#36333](https://github.com/sgl-project/sglang/issues/36333) | Zombie request after disconnected streaming client; floods "state was deleted" logs | Regression from #34160 revert |
| 🟡 Medium | [#36830](https://github.com/sgl-project/sglang/issues/36830) | `--kv-cache-dtype fp8_e4m3` fails on GLM-5.3-Flash due to `index_kpool: 4` conflict | Open |
| 🟡 Medium | [#30815](https://github.com/sgl-project/sglang/issues/30815) | FP8 KV cache decode slowdown due to unfused K/V quantization + per-layer Q conversion | Open |
| 🟡 Medium | [#39831](https://github.com/sgl-project/sglang/issues/39831) | GLM-5.3-Flash vision model silently broken due to pinned `transformers==5.12.1` lacking `glm5_next` | Open |

---

### **6. What This Means for Application Developers**  
- **Use `--gsp-input-ids`** in benchmarks to bypass tokenization and isolate inference performance.  
- **Avoid `trtllm_mha` for both prefill/decode** on H200 until #40921 is resolved — use `flashinfer` or `cuda` instead.  
- **Speculative decoding with NVFP4 KV cache is currently broken** — do not enable together until #36010 is fixed.  
- **Multi-modal apps should expect HTTP 400 errors** on invalid image input (thanks to #40897).  
- **New `/v1/decisions` endpoint (PR #40992)** enables typed, structured decision-making without parsing generated text — ideal for agent workflows.  
- **AMD users benefit from optimized MoE kernels and fused indexing** — expect better decode efficiency on MI355X and MI45x.  

> 💡 *Pro Tip*: Monitor the [dLLM Serving roadmap (#39499)](https://github.com/sgl-project/sglang/issues/39499) for upcoming support of diffusion LLMs and Jev-style decisions.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-09-24**

---

### **1. Today's Highlights**  
The `v0.5.0` release delivers critical backend improvements, broadens model and hardware support—including HRM-Text (DFM Mimir 1B), MiMo-V2.6, HunyuanOCR, and Gemma4 DSpark—while enhancing server stability with multi-address HTTP binding and robust token counting. Key performance fixes include CUDA sparse flash attention recovery and Metal kernel optimizations for long-context decoding.

---

### **2. Releases & Breaking Changes**  
- **v0.5.0**: Official release focused on backend correctness, model coverage, and server resilience.  
  - [Release Notes](https://github.com/ggml-org/llama.cpp/releases/tag/v0.5.0)  
  - Introduces `--multi-address` for HTTP binding (useful in multi-node deployments).  
  - Fixes crash in `/v1/responses` endpoint due to unhandled `text.format` → `response_format` translation ([#29346](https://github.com/ggml-org/llama.cpp/pull/29346)).  
  - No breaking API changes reported; backward compatibility preserved.

---

### **3. New Model & Hardware Support**  
- **Models**:  
  - Added **HRM-Text (DFM Mimir 1B)** support via GGUF conversion.  
  - Full **Gemma4 DSpark draft backbone** support (including tied output weights, SWA, and boolean metadata) ([#29226](https://github.com/ggml-org/llama.cpp/pull/29226)).  
  - **Ling-3.0-flash-VL** vision-language model added ([#29151](https://github.com/ggml-org/llama.cpp/pull/29151)).  
  - **MiMo-V2.6** and **HunyuanOCR** GGUF conversion support now available.  
- **Backends & Hardware**:  
  - **OpenCL**: A8 Q6_K non-MoE dp4a binary kernel added for improved efficiency on AMD GPUs ([#29057](https://github.com/ggml-org/llama.cpp/pull/29057)).  
  - **Hexagon NPU**: CI build now enabled for Windows Arm64 ([#29052](https://github.com/ggml-org/llama.cpp/pull/29052)).  
  - **Vulkan**: Int8 coopmat1 matmul for AMD RDNA3/RDNA4 (Strix Halo) improves prompt processing speed ([#27952](https://github.com/ggml-org/llama.cpp/pull/27952)).

---

### **4. Performance & Optimization**  
- **CUDA**: Sparse flash attention prefill performance restored after regression in b11047–b11062 ([#29298](https://github.com/ggml-org/llama.cpp/pull/29298)).  
- **Metal**: Fix for threadgroup memory overflow in quantized flash attention enables stable long-context decoding (>512 tokens) on Apple Silicon ([#29340](https://github.com/ggml-org/llama.cpp/pull/29340)).  
- **SYCL**: IQ3 code reordering improves Intel Arc Pro B70 performance by reducing latency in attention paths ([#29107](https://github.com/ggml-org/llama.cpp/pull/29107)).  
- **Qwen4exp**: Direct lazy tensor row reads improve prompt processing speed by up to **~20%** on integrated platforms like Strix Halo ([#29030](https://github.com/ggml-org/llama.cpp/pull/29030)).  

---

### **5. Stability & Regressions**  
- **Critical Crashes**:  
  - **Metal**: Silent EOS emission at long context (~131k tokens) on M3 Ultra — reproducible across multiple models ([#29335](https://github.com/ggml-org/llama.cpp/issues/29335)).  
  - **Vulkan**: Decode throughput drops ~78% at 131k context due to suballocation fragmentation; workaround: `GGML_VK_SUBALLOCATION_BLOCK_SIZE=4 GiB` ([#27734](https://github.com/ggml-org/llama.cpp/issues/27734)).  
- **Correctness Bugs**:  
  - **CUDA**: `qwen4exp` decode slows linearly with context length ([#28734](https://github.com/ggml-org/llama.cpp/issues/28734)).  
  - **HIP/ROCm**: Wrong logits observed on gfx1151 (RDNA3) with long prompts ([#28211](https://github.com/ggml-org/llama.cpp/issues/28211)).  
- **Regression**: CUDA sparse FA decode is **1.6x slower** post-b11047 ([#29281](https://github.com/ggml-org/llama.cpp/issues/29281)) — fix PR pending.  
- **Fixes in Progress**:  
  - Server wake-up logic corrected to prevent token-counting crashes during sleep ([#29309](https://github.com/ggml-org/llama.cpp/pull/29309)).  
  - Draft model deduplication via cache ensures efficient router operation ([#27934](https://github.com/ggml-org/llama.cpp/pull/27934)).

---

### **6. What This Means for Application Developers**  
- **Deployment**: Use `v0.5.0` for production-grade stability, especially when running llama-server in router mode or with multiple GPUs. Enable `--multi-address` for scalable, distributed inference.  
- **Performance Tuning**: For long-context models (e.g., Qwen4exp, Ling-3.0), set `GGML_VK_SUBALLOCATION_BLOCK_SIZE=4 GiB` on Vulkan and leverage `--prefetch-weights` (CUDA-only) for reduced latency.  
- **Model Choice**: Leverage new **Gemma4 DSpark** and **HRM-Text** support for high-efficiency, low-latency draft models. Consider **ternary GGUFs** (via #29077) for ultra-low-memory deployment.  
- **Debugging**: Watch out for silent performance regressions in CUDA sparse attention and Metal decode—verify with `--log-level debug`.  
- **Future-Proofing**: Monitor PRs like [#29346](https://github.com/ggml-org/llama.cpp/pull/29346) and [#29335](https://github.com/ggml-org/llama.cpp/issues/29335) for OpenAI-compatible response formatting and long-context stability.  

> ✅ **Recommended Action**: Upgrade to `v0.5.0`, validate long-context behavior under your workload, and consider tuning `GGML_VK_SUBALLOCATION_BLOCK_SIZE` if using Vulkan.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-09-24**

---

### **1. Today's Highlights**  
The latest release, **v0.34.4-rc1**, addresses critical stability issues including intermittent "model not found" errors and persistent hangs during structured output generation on MLX-backed models. Key improvements include optimized structured output handling in a single pass for thinking models and fixes for GPU memory pressure and CPU utilization spikes—particularly relevant for users on macOS and high-load inference scenarios.

---

### **2. Releases & Breaking Changes**  
- **v0.34.4-rc1**: Fixes:  
  - Intermittent "model not found" errors in server (`#18438`) — [PR #18438](https://github.com/ollama/ollama/pull/18438)  
  - Structured outputs now applied in a single pass on thinking models (`#18479`) — [PR #18479](https://github.com/ollama/ollama/pull/18479)  
- **No breaking API changes**; backward compatibility maintained across minor releases.

---

### **3. New Model & Hardware Support**  
- **MLX Engine**: Continued enhancements with support for **Nemotron** layer names, global F32 scaling, and improved Mamba softplus stability (`#18614`).  
- **New Model Requests**:  
  - Urgent demand for **MIMO v2.5** (MIT-licensed, million-token context) — [Issue #15887](https://github.com/ollama/ollama/issues/15887)  
  - Request for **Mimo-v2.6-Pro/Flash** models — [Issue #18616](https://github.com/ollama/ollama/issues/18616)  
- **Hardware**: ROCm v10 update completed with broader Linux/Windows support (`#16446`).

---

### **4. Performance & Optimization**  
- **CPU Utilization Fix**: v0.32.14+ was causing excessive CPU usage (~50–80%) even when models fully fit in VRAM (`#17833`). A fix is pending in `#18613` — *passing `--poll 0` to `llama-server` when GPU is present* to eliminate polling overhead.  
- **Memory Pressure Handling**: Feature request for idle model VRAM release under GPU memory pressure (`#18612`) highlights growing need for dynamic resource management.  
- **Embedding Efficiency**: Optimized `/api/embed` path by avoiding unnecessary JSON round-trips (`#18610`) — reduces latency and memory churn for batched embeddings.

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | PR / Note |
|--------|------|--------|----------|
| 🔴 Critical | MLX nvfp4 stalls during prefill at `processed=total-1`, no progress for minutes (`#18505`) | Open | No fix yet; impacts sustained single-slot loads |
| 🔴 Critical | Structured output never terminates on MLX — emits whitespace indefinitely (`#18567`) | Closed | Fixed via `#18569` (cap whitespace), updated in `#18615` (XGrammar v0.2.7) |
| 🟡 High | Homebrew Ollama fails to provide structured output with MLX models (`#18597`) | Open | Due to missing `xgrammar` library binding |
| 🟡 Medium | `glm-ocr` returns HTTP 500 on 0.34.1+ due to token repeat limit (`#18609`) | Open | Regression from 0.34.0; fixed in `#17195` (EOT token registration) |
| 🟡 Medium | Gemma 4 tool calls dropped with >45 string values (`#18605`) | Closed | Fixed via parser collision mitigation |

---

### **6. What This Means for Application Developers**  
- **Structured Output Reliability**: Use `v0.34.4-rc1` or later if relying on MLX + JSON schema outputs — avoid older versions where infinite whitespace loops occur. Ensure `xgrammar` is properly linked (especially in Homebrew builds).  
- **GPU Memory Management**: Be aware that idle models may not yield VRAM dynamically under memory pressure — consider using `#18612`-style policies in custom runners or orchestration layers.  
- **Model Portability**: With `#18578` (export/import), you can now manually transfer models between machines offline — ideal for air-gapped environments or CI/CD pipelines.  
- **Tooling & Agent Development**: The new `POST /v1/systemone` endpoint (`#18606`) enables local decision-making with probabilistic scoring — useful for agent logic without cloud dependencies.  

> ✅ **Recommendation**: Upgrade to `v0.34.4-rc1` immediately if using MLX engines or structured outputs. Monitor `#18505` and `#18597` for runtime issues in production deployments.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-09-24**

---

### **1. Today's Highlights**  
LiteLLM continues its rapid evolution with critical fixes to cost accounting, budget enforcement, and model pricing accuracy—especially for Azure, Vertex AI, and OpenRouter. New PRs have added support for Gemini preview models, Llama 3.3 70B, Veo 2/3, and FLUX.2 image editing billing, while improving observability via enhanced logging and search in the UI. The proxy now enforces admin-only control over global guardrail bypasses, tightening security.

---

### **2. Releases & Breaking Changes**  
No new stable releases today; focus remains on pre-release `v1.104.0-dev.1` and earlier patch versions (`v1.102.1`, `v1.101.2`, etc.). All Docker images are cryptographically signed via [cosign](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0) using a consistent key—verify signatures before deployment. No breaking changes reported in this cycle.

---

### **3. New Model & Hardware Support**  
- ✅ **Gemini**: Added preview aliases and Deep Research (04-2026) rows to cost map ([PR #42833](https://github.com/BerriAI/litellm/pull/42833)).  
- ✅ **Vertex AI**: Added `vertex_ai/llama-3.3-70b`, `veo-2`, `veo-3`, `virtual-try-on`, and `tts-2.5` cost entries ([PR #42837](https://github.com/BerriAI/litellm/pull/42837)).  
- ✅ **OpenAI**: Added `chat-latest`, `codex`, and 11 missing model IDs from official docs ([PR #42834](https://github.com/BerriAI/litellm/pull/42834)).  
- ✅ **OpenRouter**: Synced 18 drifting pricing rows and restored tiered Qwen pricing ([PR #42832](https://github.com/BerriAI/litellm/pull/42832)).  
- ✅ **Azure AI**: Corrected FLUX.2 edit billing to include reference image pixel count ([PR #42829](https://github.com/BerriAI/litellm/pull/42829)).

---

### **4. Performance & Optimization**  
- 🔧 **Caching & Logging**: Fixed sync cache-hit logs to properly stamp provider name, enabling accurate spend attribution ([PR #42830](https://github.com/BerriAI/litellm/pull/42830)).  
- 🚀 **Cost Tracking**: Introduced native batch JSONL passthrough with cost tracking for Vertex AI, eliminating unnecessary transformation overhead ([PR #42810](https://github.com/BerriAI/litellm/pull/42810)).  
- ⚙️ **CI/Testing**: Split tests into tiers and fixed memory/timeouts in streaming peak-memory tests ([PR #42831](https://github.com/BerriAI/litellm/pull/42831)).  
- 💡 **Rust Porting**: Expanded standalone cost calculation logic to Rust (`litellm-cost`) for cross-language consistency ([PR #42620](https://github.com/BerriAI/litellm/pull/42620)).

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Fix PR |  
|--------|------|-------|--------|  
| 🔴 High | Budget enforcement bypassed in v1.82.3 due to `max_budget` misbehavior | Open | [Issue #26672](https://github.com/BerriAI/litellm/issues/26672) |  
| 🔴 High | v3 rate limiter double-counts team per-model limits → effective RPM/TPM halved | Open | [Issue #34140](https://github.com/BerriAI/litellm/issues/34140) |  
| 🔴 High | Coordination Redis probe fails at startup → budgets per-pod stale | Open | [Issue #42653](https://github.com/BerriAI/litellm/issues/42653) |  
| 🟡 Medium | Streaming drops upstream `usage` when final chunk has non-empty `choices` → cached_tokens lost | Open | [Issue #36168](https://github.com/BerriAI/litellm/issues/36168) |  
| 🟡 Medium | Ghost models persist across workers when `--num_workers > 1` due to Redis Pub/Sub sync issue | Closed | [Issue #27852](https://github.com/BerriAI/litellm/issues/27852) |  

> Note: Several high-severity issues impact enterprise-grade cost control and rate limiting—upgrade recommended if using v1.82.3+ or multi-worker setups.

---

### **6. What This Means for Application Developers**  
- **Avoid cost blind spots**: Ensure you’re using `v1.102.1+` to prevent silent $0 billing for new models (e.g., Gemini, Vertex AI, OpenRouter). Use `GET /v1/models` + cost map validation in CI.  
- **Secure your guardrails**: Do not allow non-admin users to disable global guardrails—this is now restricted post-PR #42699.  
- **Monitor caching behavior**: Cache hits now correctly log provider info—verify your cost dashboards reflect real usage.  
- **Use `--validate_config`**: With PR #41705, validate configs early in CI pipelines to avoid boot-time crashes.  
- **Prepare for EU compliance**: Post-PR #29895, consider implementing tamper-evident audit trails for regulated use cases under the EU AI Act.  

👉 *Recommended action*: Audit all model aliases, cost maps, and budget configurations immediately—especially if running multi-region, multi-provider deployments.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-09-24**

---

### **1. Today's Highlights**  
Unsloth v0.1.815-beta launches with full local support for **Qwen-Image-2.1**, including custom Agent Skills and improved chat/project management. Key performance gains include **2x faster reasoning blocks (60 FPS vs 30 FPS)** and enhanced training reliability. New optimizations for AMD ROCm and NPU inference are also underway, signaling a major push toward cross-platform AI acceleration.

---

### **2. Releases & Breaking Changes**  
- **v0.1.815-beta**: Official release adding **Qwen-Image-2.1** support with GGUF and FP8 text encoder integration. Includes agent skills, chat/project management, and stability fixes.  
  🔗 [Release Notes](https://github.com/unslothai/unsloth/releases/tag/v0.1.815-beta)  
- **No breaking API changes** reported in this release cycle. However, users on AMD systems may need to manually resolve ROCm version mismatches (see Issue #11638).

---

### **3. New Model & Hardware Support**  
- ✅ **Qwen-Image-2.1** now fully supported locally via GGUF and FP8 quantization.  
- 🟡 **AMD Ryzen AI NPU (XDNA 2)**: Experimental support added via FastFlowLM + Lemonade stack (PR #11743). Enables on-device inference on Strix Halo/Point without model download until enabled.  
- ⚠️ **ROCm 10** support is pending; users on ROCm 7.14 face issues due to installer misidentification (Issue #10657, PR #11736).  
- 📌 **Adreno GPU support** under discussion (Issue #11674), leveraging GenieX and llama.cpp backend compatibility.

---

### **4. Performance & Optimization**  
- **2x faster reasoning blocks**: Achieved through static step caching and CUDA graph optimization (PR #11737, #11748).  
- **VAE decode progress reporting**: Fixed latency perception issue where decode stage appeared "hung" (PR #11740, Issue #11739).  
- **NVFP4 flashinfer backend**: Now auto-enabled on demand (PR #11730), reducing reliance on slower torchao path.  
- **Per-layer NVFP4 policies**: Introduced for image DiTs (PR #10730), enabling fine-grained precision control.  
- **Static step skip for video generation**: Extends speedups from image models to video (PR #11748).  
- **Max-speed tier recompilation fix**: Prevents redundant compilation per prompt length (PR #11731).

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Fix PR |
|---------|------|--------|--------|
| Critical | AMD: VAE decode crashes server process due to uncaught `terminate` (hipErrorLaunchFailure) | Open | PR #9130 |
| High | Qwen-Image-2.1 requires manual steps to run (missing assets) | Open | Issue #11567 |
| High | Windows ROCm: torch.distributed missing → FP8 encoder fails (404) | Open | Issue #11638 |
| Medium | Unsloth Studio crashes during image gen on RDNA1 (gfx1010) | Open | Issue #11614 |
| Medium | CPU usage spikes indefinitely after startup | Open | Issue #10390 |
| Low | Bottom UI strip unresponsive in maximized Windows window | Open | Issue #11734 |

> 💡 *Fixes in progress*: PRs #11736 (ROCm installer), #11740 (VAE progress), #11731 (recompile prevention), and #11733 (orphan tool repair) address key stability concerns.

---

### **6. What This Means for Application Developers**  
- **Build agents with richer tooling**: Use the new **Skill system** (Issue #11742) to define reusable, declarative agent behaviors directly in the UI—no file-based YAML required.  
- **Optimize for low-latency inference**: Leverage **static step caching** (PR #11737/#11748) and **NVFP4 flashinfer** to reduce image/video generation latency by up to 50%.  
- **Target heterogeneous hardware**: With NPU (PR #11743) and ROCm 7.14/10 support emerging, your apps can now run efficiently across AMD, Intel, and mobile platforms.  
- **Avoid silent failures**: The upcoming **benchmarking suite** (Issue #11646, superseding #5867) will allow you to track model performance (MMLU, GSM8K, HellaSwag) and validate config sweeps.  
- **Use raw llama.cpp APIs**: Enable native access via PR #11705 to bypass OpenAI wrapper for advanced local tools (e.g., Cursor, Continue).  

👉 *Actionable takeaway*: Start testing **Qwen-Image-2.1** with dynamic prompting and skill chaining today—performance is now competitive with cloud inference. Monitor PR #11743 for NPU deployment readiness.

---  
*Data sourced from GitHub: [unslothai/unsloth](https://github.com/unslothai/unsloth)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*