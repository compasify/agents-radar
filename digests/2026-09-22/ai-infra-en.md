# AI Infrastructure Digest 2026-09-22

> Generated: 2026-09-22 01:06 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-09-22**

---

### **1. Ecosystem Overview**  
The AI inference and serving ecosystem is entering a new phase of specialization and hardware convergence, with projects rapidly adapting to next-generation architectures like NVIDIA SM120 (RTX 5090), AMD MI355X, and Apple Silicon. A clear bifurcation is emerging: **high-throughput, distributed serving platforms** (vLLM, SGLang) are pushing the limits of disaggregation and speculative decoding, while **local runtime engines** (llama.cpp, Ollama, Unsloth) focus on memory efficiency, cross-platform portability, and agent-friendly UX. Meanwhile, **gateways and orchestration layers** (LiteLLM) are prioritizing security, cost control, and compliance—critical for enterprise adoption. The pace of innovation remains breakneck, with kernel-level optimizations and model-specific fixes dominating daily activity.

---

### **2. Activity Comparison**

| Project       | Open Issues | Open PRs | Releases (Past 24h) | Status |
|---------------|-------------|----------|----------------------|--------|
| **vLLM**      | 87          | 142      | None                 | Active development; critical regressions in long-context workflows |
| **SGLang**    | 92          | 138      | None                 | High CI instability (13 flaky/broken tests); major stability issues on Blackwell |
| **llama.cpp** | 118         | 156      | None                 | Strong focus on backend stability (Metal/CUDA/Vulkan); GPU-resident MoE cache imminent |
| **Ollama**    | 123         | 107      | None                 | High-severity MLX/structured output bugs; performance gains on M5 Max |
| **LiteLLM**   | 105         | 114      | None                 | Critical PII/data leak fix merged; telemetry opt-in introduced |
| **Unsloth**   | 132         | 148      | None                 | Severe performance gap vs. ggml CUDA builds; ROCm/Intel Vulkan instability |

> ✅ *All projects are actively developing with no recent releases—focus remains on stability, hardware integration, and feature refinement.*

---

### **3. Model Support Race**

| New Model / Architecture           | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|------------------------------------|------|--------|-----------|--------|---------|---------|
| **Qwen3.8-Flash-Next (UD-IQ4_XS)** | ❌    | ❌     | ⚠️ (load crash) | ❌    | ❌     | ✅ (partial support) |
| **Gemma 4 26B A4B QAT**            | ❌    | ❌     | ✅        | ❌    | ❌     | ✅ (high mem usage) |
| **Ling-3.0-flash-VL (124B MoE)**   | ❌    | ❌     | ✅        | ❌    | ❌     | ❌ |
| **GLM-5.3-Flash (SM120/ROCm)**     | ✅ (proto) | ✅ (fixes) | ❌        | ❌    | ❌     | ❌ |
| **SenseNova-U1/U1.5**              | ❌    | ✅ (roadmap) | ❌        | ❌    | ❌     | ❌ |
| **Prism Ternary GGUF (PQ2_0/PTQ1_0)** | ❌    | ❌     | ❌        | ✅ (tracked) | ❌     | ❌ |

> 🏆 **Winner**: **llama.cpp** leads in novel model support, especially multimodal and large MoE variants.  
> 🥈 **Runner-up**: **SGLang** shows strong forward momentum in GLM and SenseNova integration.  
> ⚠️ **Caution**: **vLLM** and **Unsloth** face significant regressions with GLM-5.3-Flash despite experimental support.

---

### **4. Performance Frontier**

| Focus Area               | vLLM                             | SGLang                          | llama.cpp                       | Ollama                        | LiteLLM                     | Unsloth                      |
|--------------------------|----------------------------------|----------------------------------|----------------------------------|-------------------------------|------------------------------|-------------------------------|
| **KV Cache Optimization** | ✅ `nvfp4` on SM120 (245K context) | ✅ Agent-aware design (RFC #24656) | ❌                               | ❌                            | ❌                           | ❌                            |
| **Batching & Scheduling** | ✅ Prefill schedule interval (outside DP) | ✅ PD disaggregation + host receive | ✅ LRU MoE expert caching (GPU-resident) | ✅ Gated-delta kernel boost (+19%) | ✅ Group-scoped routing       | ✅ Skip redundant kbit prep   |
| **Quantization**          | ✅ `nvfp4`, FlashInfer kernels    | ✅ DSA sparse-MLA, FP4/MXFP4       | ✅ "sophia" tokenizer, Hexagon HMX | ✅ PQ2_0/PTQ1_0 support         | ✅ Updated pricing for OpenRouter | ✅ MiCA LoRA support         |
| **Distributed Serving**   | ✅ Disaggregated serving (P/D)     | ✅ Pipeline parallelism roadmap    | ❌                               | ❌                            | ✅ Multi-provider proxy       | ❌                            |
| **Kernel-Level Optimizations** | ✅ MXFP8 GEMM+reduce-scatter fusion | ✅ cuDNN attention proposal        | ✅ Vulkan fused F32 loading      | ✅ MLX gated_delta_update     | ❌                           | ❌ (bundled CUDA 13.4 slow)   |

> 🔥 **Top Performers**:  
> - **vLLM** dominates high-throughput, long-context inference via kernel fusion and KV cache advances.  
> - **llama.cpp** leads in local runtime efficiency with GPU-resident MoE caching and hardware-specific kernels.  
> - **Ollama** delivers tangible speedups on Apple Silicon via targeted kernel optimization.

---

### **5. Layer Positioning**

| Project       | Primary Layer                | Secondary Role                         | Key Differentiator |
|---------------|------------------------------|----------------------------------------|--------------------|
| **vLLM**      | **Inference Engine**         | Model Serving, Distributed Serving     | Industry standard for high-throughput, multi-node inference |
| **SGLang**    | **Inference Engine + Gateway** | Agent-aware scheduling, PD disaggregation | Built for agentic workloads with phase-aware KV cache |
| **llama.cpp** | **Local Runtime / Edge Engine** | Cross-platform inference, low-level optimization | Unmatched portability; ideal for mobile/IoT |
| **Ollama**    | **Local Runtime + Gateway**  | Developer-friendly CLI, JSON schema parsing | Simplified dev experience; strong MLX integration |
| **LiteLLM**   | **Gateway / Orchestration**  | Cost control, PII masking, routing     | Enterprise-grade observability and compliance |
| **Unsloth**   | **Training/Fine-tuning Stack** | Local inference, Studio UX             | Fast training + improved error visibility; growing PEFT support |

> 📊 **Strategic Positioning**:  
> - **Engineers building scalable agents**: prioritize **vLLM** or **SGLang**.  
> - **Edge/mobile deployment**: **llama.cpp** is unmatched.  
> - **Enterprise gateways**: **LiteLLM** offers best-in-class security and auditability.  
> - **Fine-tuning workflows**: **Unsloth** is rapidly catching up with MiCA and trainer optimizations.

---

### **6. Trend Signals**

🔍 **Key Industry Trends Extracted from Today’s Activity**:

1. **Hardware Convergence Is Real**:  
   - **SM120 (RTX 5090)** and **MI355X** are now active development targets across vLLM, SGLang, and llama.cpp.  
   - **Apple Silicon (MLX)** and **Intel Arc** are gaining traction but remain unstable—expect gradual maturation.

2. **Long-Context & Agent Workloads Are Driving Innovation**:  
   - **Speculative decoding**, **disaggregation (P/D)**, and **agent-aware KV cache** are central to vLLM and SGLang.  
   - **Structured output reliability** (JSON schema, tool calls) is a top concern—Ollama, LiteLLM, and Unsloth all addressing this.

3. **Security & Compliance Are No Longer Optional**:  
   - **PII masking leaks** in LiteLLM and **infinite whitespace generation** in Ollama signal rising stakes in production deployments.  
   - **Per-user cost breakdowns** and **opt-in telemetry** indicate shift toward auditable, compliant systems.

4. **Memory Efficiency Is the Next Battleground**:  
   - **GPU-resident LRU MoE caching** (llama.cpp) and **MiCA LoRA** (Unsloth) point to smarter weight management.  
   - **Quantization diversity** (nvfp4, IQ4_XS, PTQ1_0) reflects demand for precision vs. speed trade-offs.

5. **Stability > Speed in Production**:  
   - Despite breakthroughs, **critical regressions** dominate issue trackers—especially around **long-context reasoning**, **MoE models**, and **mixed GPU setups**.  
   - Developers must **test rigorously** before upgrading, especially on GLM-5.3-Flash and Qwen3.8 variants.

---

### ✅ **Recommendations for Application Developers**

- **For Agents**: Use **vLLM** or **SGLang** for scalability; **enable `--nodraft`** (Ollama) or monitor **agent-aware KV cache** (SGLang) for deterministic behavior.
- **For Edge/Local Apps**: Prefer **llama.cpp** for cross-platform consistency and **GPU-resident MoE caching**.
- **For Enterprise Gateways**: Choose **LiteLLM** for built-in cost controls and PII protection.
- **For Training Workflows**: Evaluate **Unsloth** for fast fine-tuning and MiCA support—but avoid bundled CUDA 13.4 builds.
- **Always Validate**: Test against known regressions (e.g., GLM-5.3-Flash word salad, Qwen3.8 Vulkan crashes) before production rollout.

> 🛠️ **Pro Tip**: Monitor **PR #49011 (vLLM)**, **PR #42351 (LiteLLM)**, and **Issue #11453 (Unsloth)**—these represent today’s most impactful stability risks.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

---

### **vLLM Digest — 2026-09-22**

#### **1. Today's Highlights**  
The vLLM project continues to advance its support for next-generation hardware and inference patterns, with significant progress on **ROCm/Metal integration**, **disaggregated serving**, and **speculative decoding**. Critical stability fixes were merged for **GLM-5.3-Flash** and **DeepSeek-V4**, while new PRs address kernel-level optimizations for **SM120 (RTX 5090)** and **MI355X** GPUs. A major focus remains on enabling **high-throughput long-context workloads** across multi-node clusters.

#### **2. Releases & Breaking Changes**  
*No new releases in the past 24 hours.*  
- **Note**: The `vllm/vllm-openai-rocm:nightly` image (2026-08-12) is currently under active testing; users on ROCm should expect breaking changes in upcoming nightly builds due to ongoing CI/compatibility improvements.
- **Migration Note**: `--kv-cache-dtype nvfp4` now supports SM120 via FlashInfer kernels (see #49011), but requires `flashinfer-python>=0.6.13` and `vLLM>=0.25.1`.

#### **3. New Model & Hardware Support**  
- ✅ **SM120 (RTX 5090)**: Experimental support for `nvfp4` KV cache via FlashInfer (`#49011`, prototype). Achieves **245K context length** on 5090.
- ✅ **ROCm/gfx950 / MI355X**: Active development for Qwen3.8-2.4T-A95B and DeepSeek-V4.1 (`#57149`, `#50519`). Unit tests added for Kimi-K3 on MI355 (`#58012`).
- ✅ **Multi-modal models**: Enhanced support for hybrid Mamba+Attention models (e.g., Qwen3.5-35B-A3B) with improved scheduling (`#40707`).
- ✅ **Model Formats**: Full DFlash2 draft model support for GLM-5.3-Flash (`#56983`), enabling speculative decoding with block-diffusion drafter.

#### **4. Performance & Optimization**  
- 🔥 **SM120 Kernel Fusion**: `#57428` fuses MXFP8 GEMM + reduce-scatter for DeepSeek-V4.1, reducing HBM round trips and boosting throughput under sequence parallelism.
- 🚀 **NVFP4 on SM120**: Prototype achieves **245K context length** on RTX 5090 with `--kv-cache-dtype nvfp4`, leveraging FlashInfer kernels (`#49011`).
- ⚙️ **Graph Optimization**: `#57586` enables breakable CUDA graphs by default under `VLLM_BATCH_INVARIANT=1`, improving matmul tuning accuracy on Hopper/Blackwell.
- 📈 **Disaggregation Metrics**: `#58004` adds gauges for KV blocks pinned by pending transfers in P/D disaggregation, enabling better monitoring of decode stalls.
- 💡 **Prefill Scheduling**: `#54627` applies `prefill_schedule_interval` outside data parallelism, allowing longer uninterrupted decode windows.

#### **5. Stability & Regressions**  
| Severity | Issue | Status | Fix PR |
|---------|------|--------|--------|
| 🔴 **Critical** | GLM-5.3-Flash degenerates into "word salad" after long reasoning (multi-turn agentic use) | Open (`#56605`) | No fix yet |
| 🔴 **Critical** | GLM-5.3-Flash long-decode degeneration after accumulated reasoning | Open (`#56868`) | No fix yet |
| 🟡 **High** | DeepSeek-V3.2 / GLM-5.x DSA sparse-MLA decode emits garbage under CUDA graphs in PD-disaggregation | Open (`#57064`) | In progress |
| 🟡 **High** | Intel Arc B70 (Battlemage): GP fault + XE BCS engine reset on `vllm:0.17.0-xpu` | Closed (`#41663`) | Fixed in `0.17.0-xpu` |
| 🟡 **Medium** | Out-of-bounds `attrIdxs` in C++ batch memcpy path (`cache_kernels.cu`) | Open (`#53863`) | No fix yet |

> **Note**: Several regressions affect **long-context, multi-turn, or speculative decoding workflows**—especially on GLM and DeepSeek models.

#### **6. What This Means for Application Developers**  
- If you're building **agents using tool calling or structured output**, ensure you’re using `vLLM>=0.25.1` and avoid `--enable-mtp` with Qwen3.6-27B until `#46249` is resolved.
- For **long-context applications**, test against `nvfp4` KV cache on SM120 only if using `flashinfer-python>=0.6.13`. Avoid `nvfp4` on GLM-5.3-Flash due to known degeneration issues.
- **Disaggregated serving** is maturing: use `/render` → `/generate` → `/derender` pipeline carefully; monitor pinned KV blocks via new metrics (`#58004`).
- **ROCm users** should expect frequent updates—check `#58012`, `#50519`, and `#57149` for latest compatibility notes.
- Use `--sleep-preserve-parameter-names` (`#57891`) if you rely on frozen weights in sleep-mode scenarios.

> 🔗 **Key Resources**:  
> - [Issue #49011 – NVFP4 on SM120](https://github.com/vllm-project/vllm/issues/49011)  
> - [PR #57428 – MXFP8 GEMM-RS fusion](https://github.com/vllm-project/vllm/pull/57428)  
> - [Issue #56605 – GLM-5.3-Flash word salad](https://github.com/vllm-project/vllm/issues/56605)  
> - [PR #58004 – KV pinning metrics](https://github.com/vllm-project/vllm/pull/58004)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-09-22**

---

### **1. Today's Highlights**  
The SGLang project continues advancing its infrastructure for large-scale, high-throughput LLM serving with significant progress in **pipeline parallelism**, **prefill-decode disaggregation**, and **agent-aware KV cache design**. Key developments include a new RFC for agent-aware KV cache phase 1 (#24656), active work on PD disaggregation roadmap (#21703), and multiple PRs targeting performance fixes for GLM-5.3-Flash on Blackwell GPUs (#39340, #37813). The CI pipeline remains under scrutiny with 3 broken and 10 flaky tests reported (#17050).

---

### **2. Releases & Breaking Changes**  
*None.* No new releases were published in the last 24 hours. No API or configuration changes are noted.

---

### **3. New Model & Hardware Support**  
- **GLM-5.3-Flash** support is actively being tracked and refined for **Blackwell (SM120)** GPUs, with ongoing fixes for DSA backend issues and top-k width mismatches (#37813, #39340).
- **SenseNova-U1/U1.5** integration is now being tracked via a dedicated roadmap (#37742), based on upstream OpenSenseNova/SenseNova-U1.
- **AMD ROCm** support is expanding: `aiter allreduce fusion` enabled for GLM models (#39790), and unified KV zeroing tests registered in CI (#40123).
- **Apple Silicon (MLX)**: Progress continues on Gemma 4 MTP speculative decoding and text generation, though still experimental (#32101, #32264).
- **Intel XPU**: The NIXL disaggregation test was temporarily disabled due to missing UCX/NIXL build support (#40540).

---

### **4. Performance & Optimization**  
- **Pipeline Parallelism (PP)**: A critical roadmap issue (#11857) highlights the importance of PP for reducing TTFT on long-context inputs (e.g., 1M tokens). Work is underway to stabilize and scale PP across architectures.
- **Prefill-Decode Disaggregation (PD)**: Multiple PRs enhance PD robustness:
  - Added decode host receive for custom transfer backends via threshold-based activation (#40238).
  - Fixes to avoid health check interference with request routing (#35721).
- **Kernel Optimizations**:
  - Fix for flash decoding kernel slowness on long contexts (2k+ tokens): current speed drops from ~147 → ~126 token/s; optimization targeted (#2271).
  - Proposal to integrate **cuDNN attention backend** for faster inference on supported hardware (#2272).
- **Memory Efficiency**: Unified radix cache now supports LMCache persistence (#38652); eviction batching reduces scheduler latency (#36370).

---

### **5. Stability & Regressions**  
- **Critical Bug**: `KeyError: 'model.layers.14.mlp.shared_expert.gate_gate_up_proj.weight'` in model loading — affects MoE models; no fix yet (#13214).
- **GPU-Specific Issues**:
  - FlashInfer backend fails on **Blackwell GPUs** due to unsupported ops (#35080).
  - GLM-5.3-Flash crashes on RTX PRO 6000 (SM120) due to DSA backend blockers (#37105).
- **Memory/Concurrency Bugs**:
  - HiCache staged write-back faults when using `cudaMemcpyBatchAsync` with unregistered pointers (#40232).
  - Abort cleanup hook ordering issue causes session leaks in FlexKV vs. LMCache (#40360).
- **CI Stability**: 3 broken, 10 flaky tests detected in main branch CI (#17050); ongoing triage.

---

### **6. What This Means for Application Developers**  
Developers building agentic systems should track **agent-aware KV cache** (RFC #24656) and **PD disaggregation** improvements, which will enable more scalable, low-latency workflows. For production deployments, expect tighter integration with **GLM-5.3-Flash** on Blackwell and **ROCm** platforms—monitor CI status (#17050) before upgrading. Use `--disaggregation-decode-host-receive-threshold` for better PD efficiency. Be cautious with MoE models and shared experts in FP4/MXFP4 quantization until PR #40628 lands. For Apple Silicon users, focus on MLX-based Gemma 4 paths but anticipate stability gaps.  

👉 *Stay tuned for updates on the SGLang Simulator (#21891) — a key tool for optimizing model/hardware/configuration choices without costly GPU clusters.*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-09-22**

---

### **1. Today's Highlights**  
The latest updates focus on critical stability fixes for Metal, CUDA, and Vulkan backends, including a fix for a Flash Attention mask bounds issue on Apple Silicon and a compilation error on Volta GPUs. Significant progress continues in GPU memory management with a new PR introducing a GPU-resident LRU cache for MoE expert weights—potentially enabling faster inference on large MoE models like Qwen3.8.

---

### **2. Releases & Breaking Changes**  
No new tagged releases were published in the last 24 hours. However, several configuration and API-related changes landed:  
- ✅ `--temp`, `--top-p`, `--min-p`, and penalty parameters can now be set via environment variables (`LLAMA_ARG_*`) ([#27380](https://github.com/ggml-org/llama.cpp/pull/27380)). This enables full control of `llama-server` via `EnvironmentFile` (e.g., systemd).  
- ✅ The `--api-key-file` is no longer forwarded to child router instances in multi-process mode, improving security in server deployments ([#28938](https://github.com/ggml-org/llama.cpp/pull/28938)).

---

### **3. New Model & Hardware Support**  
- ✅ Added support for **Ling-3.0-flash-VL**, a 124B hybrid KDA + gated MLA vision-language model with 512-expert MoE ([#29151](https://github.com/ggml-org/llama.cpp/pull/29151)).  
- ✅ Introduced **"sophia" pre-tokenizer type** for GGUF models using regex-free byte-level BPE ([#29211](https://github.com/ggml-org/llama.cpp/pull/29211)), essential for running *Sophia* (~1B parameter) models.  
- ✅ Enhanced **Hexagon HMX optimization** for `GATED_DELTA_NET` quantization, delivering **1.5–3X prompt speedup** on Galaxy S26/S25/S24 and VentunoQ devices ([#29199](https://github.com/ggml-org/llama.cpp/pull/29199)).  
- ✅ Experimental support for **MUSA (MTT S5000)** backend with initial fixes ([#29193](https://github.com/ggml-org/llama.cpp/pull/29193)).

---

### **4. Performance & Optimization**  
- 🔥 **GPU-resident LRU cache for MoE expert weights** ([#27861](https://github.com/ggml-org/llama.cpp/pull/27861)): Addresses decode bottlenecks when MoE experts are offloaded to CPU RAM by caching recently used weights directly on GPU. Expected to reduce host bandwidth pressure significantly.  
- 🚀 **Vulkan**: Fused F32 matrix loading 2-at-a-time for Intel GPUs ([#29254](https://github.com/ggml-org/llama.cpp/pull/29254)), improving compute efficiency on Intel Arc hardware.  
- ⚙️ **SYCL**: Improved attention and decode paths on Intel Arc Pro B70 with persistent reordered layouts for IQ3_S/IQ3_XXS MMVQ ([#29107](https://github.com/ggml-org/llama.cpp/pull/29107)).  
- 📦 **Memory**: Added `--no-mmap-prefetch` to skip `MADV_WILLNEED` on macOS, preventing long hangs during load of large models (> half RAM) ([#29250](https://github.com/ggml-org/llama.cpp/pull/29250)).

---

### **5. Stability & Regressions**  
Critical issues reported today include:  
- ❌ **Metal**: Flash Attention block pre-pass had incorrect mask bounds on Apple Silicon ([#29220](https://github.com/ggml-org/llama.cpp/pull/29220)) — fixed in `b11093`.  
- ❌ **CUDA**: Volta (`sm_70`) tile compilation failed due to mismatched `load_ldmatrix` tile shapes ([#29224](https://github.com/ggml-org/llama.cpp/pull/29224)) — resolved.  
- ❌ **Vulkan**: Severe prompt processing slowdown after `b10780` on RDNA3 GPUs ([#28752](https://github.com/ggml-org/llama.cpp/issues/28752)) — under investigation.  
- ❌ **Vulkan**: OOB token ID (`n_vocab`) crash on Qwen3.8 DFlash/MTP models ([#28158](https://github.com/ggml-org/llama.cpp/issues/28158)) — confirmed, fix pending.  
- ❌ **SYCL**: Multi-GPU crash on Intel Arc Pro B50 + A770 ([#27888](https://github.com/ggml-org/llama.cpp/issues/27888)) — stale but active.

---

### **6. What This Means for Application Developers**  
- **Use `LLAMA_ARG_*` env vars** to manage server parameters without CLI complexity—ideal for containerized or systemd-managed deployments.  
- **Leverage GPU-resident MoE caching** once available in stable builds to run large MoE models (e.g., Qwen3.8) efficiently on high-end GPUs.  
- **Expect better performance on Intel Arc and Snapdragon platforms** thanks to new SYCL/HMX optimizations.  
- **Avoid `b10780+` on Vulkan if using RDNA3**—a known regression affecting prompt throughput.  
- **Monitor for crashes with Qwen3.8 DFlash/MTP models on Vulkan**—use older builds until fix lands.  
- **For multimodal apps**, ensure `media_marker` is not exposed via `/props` (see [#27249](https://github.com/ggml-org/llama.cpp/issues/27249)) to avoid tokenization failures.

👉 [Official Website](https://llama.app) | [GitHub Repository](https://github.com/ggml-org/llama.cpp)

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

---

### **1. Today's Highlights**  
Ollama’s development momentum continues with critical fixes for MLX engine stability and structured output handling, particularly around JSON schema parsing and infinite whitespace generation. Key PRs address long-standing issues in Qwen3-Coder tool call parsing and `max_tokens` enforcement in the OpenAI-compatible API, ensuring more predictable agent behavior. A major performance boost of **+19% prompt TPS** on M5 Max via gated-delta kernel optimization highlights ongoing low-level improvements.

---

### **2. Releases & Breaking Changes**  
*None reported in the last 24 hours.*  
No new releases or breaking changes were published. The latest stable version remains **0.34.2**, with no migration notes or deprecations announced.

---

### **3. New Model & Hardware Support**  
- ✅ **Prism Ternary GGUF (PQ2_0/PTQ1_0)**: Support is now tracked via [Issue #18521](https://github.com/ollama/ollama/issues/18521) and [PR #18573](https://github.com/ollama/ollama/pull/18573), which reworks tensor type detection to avoid misleading "size overflow" errors.  
- 🛠️ **MLX Engine Enhancements**: Continued work on MLX-specific optimizations, including improved memory management ([PR #18556](https://github.com/ollama/ollama/pull/18556)) and support for advanced quantization formats.  
- ⚠️ **AMD Mixed GPU (gfx1200 + gfx1201)**: MoE models crash due to ROCm kernel image unavailability ([Issue #18162](https://github.com/ollama/ollama/issues/18162)); not yet resolved but under investigation.

---

### **4. Performance & Optimization**  
- 🔥 **+19% Prompt Throughput (MLX)**: [PR #18550](https://github.com/ollama/ollama/pull/18550) introduces MLX’s `gated_delta_update` kernel and dense MLP scale folding, boosting prompt TPS from **715 → 848** (2k tokens) and **695 → 828** (8k tokens) on M5 Max.  
- 📈 **Speculative Decoding Control**: Proposal for a `--nodraft` flag ([Issue #18517](https://github.com/ollama/ollama/issues/18517)) enables deterministic evaluation and debugging by disabling speculative decoding.  
- 🧩 **Benchmarking Improvements**: [PR #17480](https://github.com/ollama/ollama/pull/17480) replaces synthetic prompts with real HumanEval code snippets to better reflect actual agent workloads.

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Fix PR |
|--------|------|--------|-------|
| 🔴 Critical | `qwen3coder` parser fails on long file-write tool calls, returns error as response | [Issue #18563](https://github.com/ollama/ollama/issues/18563) | [PR #18571](https://github.com/ollama/ollama/pull/18571) |
| 🔴 Critical | MLX engine generates infinite whitespace during structured output (`format: json_schema`) | [Issue #18567](https://github.com/ollama/ollama/issues/18567) | [PR #18569](https://github.com/ollama/ollama/pull/18569) |
| 🟡 High | `/v1/chat/completions` ignores `max_tokens` and overrides `num_predict` defaults | [Issue #18575](https://github.com/ollama/ollama/issues/18575) | Pending |
| 🟡 High | Windows `FROM *` wildcard fails with unmatched pattern | [Issue #18568](https://github.com/ollama/ollama/issues/18568) | [PR #18572](https://github.com/ollama/ollama/pull/18572) |
| 🟡 Medium | Gemma4 image processing broken on Windows | [Issue #16532](https://github.com/ollama/ollama/issues/16532) | No fix yet |

> **Note**: Several crashes persist on mixed AMD GPUs and Vulkan drivers — [Issue #18557](https://github.com/ollama/ollama/issues/18557) reports access violations on RX 6800 XT with driver 32.0.21045.5002.

---

### **6. What This Means for Application Developers**  
- ✅ **Agent Reliability**: Fixing `qwen3coder` tool call parsing ([PR #18571](https://github.com/ollama/ollama/pull/18571)) and structured output termination ([PR #18569](https://github.com/ollama/ollama/pull/18569)) ensures agents won’t fail silently due to malformed responses.  
- ⚠️ **Output Control**: Until [Issue #18575](https://github.com/ollama/ollama/issues/18575) is fixed, **do not rely on `max_tokens` in `/v1/chat/completions`** — responses may be unbounded even if set. Use `num_predict` in Modelfile instead.  
- 💡 **Debugging & Reproducibility**: The proposed `--nodraft` flag ([Issue #18517](https://github.com/ollama/ollama/issues/18517)) will help developers isolate issues caused by speculative decoding in agentic workflows.  
- 🖥️ **Cross-Platform Caution**: Avoid using `FROM *.gguf` wildcards on Windows until [PR #18572](https://github.com/ollama/ollama/pull/18572) merges. Also verify model loading on mixed AMD GPU setups — MoE models are currently unstable.

> **Pro Tip**: For production agents, prefer `ollama run --nodraft` (once available) and validate JSON schema outputs locally before deployment. Monitor Ollama Cloud for embedding/reranker model availability ([Issue #17129](https://github.com/ollama/ollama/issues/17129)).

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-09-22**

---

### **1. Today's Highlights**  
The LiteLLM project continues to strengthen its core infrastructure with critical fixes to streaming guardrails, budgeting logic, and model routing reliability. Key PRs address PII masking in `/v1/messages` streams (fixing a high-risk data leak), resolve zero-cost budget bypasses that could lead to unbounded spending, and introduce per-user cost breakdowns in team usage exports—essential for enterprise compliance and auditability.

---

### **2. Releases & Breaking Changes**  
*No new releases were published in the last 24 hours.*  
However, several breaking changes are in flight via active PRs:  
- **PR #42374**: Config.yaml-owned settings are now *frozen* in the UI to prevent silent loss on restart — admins must edit config directly. [GitHub](https://github.com/BerriAI/litellm/pull/42374)  
- **PR #42373**: Opt-in anonymous telemetry is introduced via `LITELLM_TELEMETRY=true` — this enables usage insights without requiring user consent or tracking. [GitHub](https://github.com/BerriAI/litellm/pull/42373)  

> ⚠️ **Migration Note**: If using `config.yaml`, ensure you’re aware of immutable fields in the dashboard. Telemetry is opt-in and non-invasive.

---

### **3. New Model & Hardware Support**  
- **Added Models**:  
  - `fal-ai/flux-lora-depth` (image editing with control image support)  
  - `fal-ai/moondream3-preview/query` (vision Q&A model)  
  [PR #42334](https://github.com/BerriAI/litellm/pull/42334)  
- **Updated Pricing**: OpenRouter prices updated for `openrouter/~z-ai/glm-latest` (input cost reduced from $0.84M → $0.784M). [PR #42381](https://github.com/BerriAI/litellm/pull/42381)  
- **New Proxy Route**: `/openrouter/typesafe/jev-1.13` now supported with correct pricing. [PR #42301](https://github.com/BerriAI/litellm/pull/42301)

---

### **4. Performance & Optimization**  
- **Latency & Throughput**: No direct kernel-level optimizations reported today.  
- **Routing Efficiency**:  
  - **PR #42378** introduces *group-scoped priority routing*, allowing teams to define preferred models and fallback chains without affecting global routing. This reduces latency by avoiding unnecessary fallbacks. [GitHub](https://github.com/BerriAI/litellm/pull/42378)  
- **Cache Precision**: Redis semantic threshold restored to `f32` precision after merge drift; native Qdrant batch writes re-enabled. [PR #42379](https://github.com/BerriAI/litellm/pull/42379)

---

### **5. Stability & Regressions**  
Critical stability issues reported today include:  
1. **[High Risk]** `Presidio` PII masking skipped on streaming `/v1/messages` — raw card numbers leaked in Claude Code responses.  
   - ✅ **Fix PR**: [PR #42351](https://github.com/BerriAI/litellm/pull/42351) and [PR #42335](https://github.com/BerriAI/litellm/pull/42335) (duplicate fix, same issue).  
2. **[High Risk]** Zero-cost budget bypass allows paid fallbacks to trigger unbounded spend.  
   - ✅ **Fix PR**: [PR #42170](https://github.com/BerriAI/litellm/pull/42170) (in progress).  
3. **[Medium Risk]** Responses→Chat bridge loses tool calls on multi-turn replay and leaks reasoning as assistant text.  
   - ❌ No fix yet; ongoing investigation. [Issue #42005](https://github.com/BerriAI/litellm/issues/42005)  
4. **[Medium Risk]** Databricks non-GPT models reject `reasoning.summary` unless it’s a string.  
   - ❌ Pending fix; currently breaks LLM reasoning workflows. [Issue #42347](https://github.com/BerriAI/litellm/issues/42347)

---

### **6. What This Means for Application Developers**  
- **Security**: Enable `output_parse_pii: true` and verify it applies consistently across all endpoints — especially `/v1/messages` and streaming paths. Use latest builds to avoid PII leakage.  
- **Cost Control**: Avoid relying on zero-cost budgets with fallbacks; validate fallbacks are priced and monitored. Use **PR #42378** to enforce predictable model selection per group.  
- **Auditability**: Leverage **PR #42367** to export per-user spend — essential for internal billing and compliance (e.g., EU AI Act Article 12).  
- **Reliability**: Avoid `vertex_ai/xai/grok-*` on `/v1beta/models/{model}:generateContent` if using `/v1/chat/completions` works — known endpoint mismatch.  
- **Telemetry**: Consider enabling `LITELLM_TELEMETRY=true` to help the project improve stability and feature prioritization.

> 🔗 **Pro Tip**: Monitor [PR #42373](https://github.com/BerriAI/litellm/pull/42373) for future debugging insights — even if not enabled, it helps surface patterns in OSS deployments.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-09-22**

---

### **1. Today's Highlights**  
Unsloth continues to strengthen its multi-GPU, cross-platform inference and training stack with critical UI/UX refinements and backend stability fixes. Key focus areas include resolving high-severity crashes on AMD ROCm (Strix Halo), improving error visibility in Studio for failed loads and training jobs, and advancing support for emerging models like Qwen3.8-Flash-Next and Gemma 4 26B A4B QAT. The team also pushed improvements to model loading reliability and logging transparency.

---

### **2. Releases & Breaking Changes**  
*No new releases in the last 24 hours.*  
However, several PRs address backward compatibility and runtime safety:  
- **PR #11467** resolves `ValueError` when loading `Qwen/Qwen3-Omni-30B-A3B-Instruct` due to unrecognized config class ([#11467](https://github.com/unslothai/unsloth/pull/11467)).  
- **PR #11469** restores deprecated image processor re-exports from `transformers==4.x`, fixing load failures for `microsoft/Phi-4-reasoning-vision-15B` ([#11469](https://github.com/unslothai/unsloth/pull/11469)).  
- **PR #11468** prevents automatic padding-free batching on models that cannot accept `packed_seq_lengths` — a regression risk in model forwarding ([#11468](https://github.com/unslothai/unsloth/pull/11468)).

---

### **3. New Model & Hardware Support**  
- **Model Support**:  
  - Added support for **Qwen3.8-Flash-Next UD-IQ4_XS** (reported crash at load; fix pending).  
  - **Gemma 4 26B A4B QAT** now supported, though memory usage exceeds expectations (~15 GB RAM on 16 GB system) ([#11435](https://github.com/unslothai/unsloth/issues/11435)).  
  - **Phi-4-reasoning-vision-15B** now loads successfully thanks to restored image processing imports ([#11469](https://github.com/unslothai/unsloth/pull/11469)).  

- **Hardware & Backend**:  
  - Continued ROCm support for **AMD Strix Halo (gfx1151)**, though performance regressions persist in prebuilt `b10079` ([#7371](https://github.com/unslothai/unsloth/issues/7371)).  
  - **Intel Arc B60 dual GPU** experiences `ErrorDeviceLost` mid-generation on Vulkan, indicating driver or kernel-level instability ([#11453](https://github.com/unslothai/unsloth/issues/11453)).  
  - **Vulkan training/fine-tuning** remains unsupported but is under feature request ([#11184](https://github.com/unslothai/unsloth/issues/11184)).

---

### **4. Performance & Optimization**  
- **CUDA 13.4 vs Official CUDA 12 Build**: Unsloth’s bundled `b11030-mix` build runs **~5–6x slower** than official `ggml-org` CUDA 12 build on RTX 5070 Ti (sm_120) — a major concern for Blackwell-era GPUs ([#11349](https://github.com/unslothai/unsloth/issues/11349)).  
- **Memory Efficiency**:  
  - `FastLanguageModel.get_peft_model()` now supports MiCA (Minor Component Adaptation), a LoRA-compatible method gaining traction in Hugging Face PEFT ([#6730](https://github.com/unslothai/unsloth/issues/6730)).  
  - Tool-result text capped at **256 KB before reaching the model** to prevent context overflow ([#11430](https://github.com/unslothai/unsloth/pull/11430)).  
- **Training Optimization**:  
  - **PR #11494** skips redundant kbit prep steps already handled by Unsloth, reducing trainer memory footprint by ~5 GB for 27B models ([#11494](https://github.com/unslothai/unsloth/pull/11494)).

---

### **5. Stability & Regressions**  
| Severity | Issue | Impact | Fix Status |
|--------|------|-------|----------|
| Critical | MTP aborts during load of Qwen3.8-Flash-Next (`hc_head_norm` mismatch post-rebase) | Inference failure | [Closed](https://github.com/unslothai/unsloth/issues/11143) |
| High | Crash on T4 Kaggle environment during Qwen 3.5 0.8b BF16 training | Training failure | [Open](https://github.com/unslothai/unsloth/issues/7506) |
| High | `GGML_ASSERT(ggml_can_repeat(b, a))` during graph build (RTX 5080, b11007-mix) | Inference crash | [Closed](https://github.com/unslothai/unsloth/issues/11219) |
| Medium | Performance regression on Strix Halo + ROCm (prebuilt b10079) | Slower inference | [Open](https://github.com/unslothai/unsloth/issues/7371) |
| Medium | Intel Arc B60 Vulkan hits `ErrorDeviceLost` mid-generation | Session lockup | [Open](https://github.com/unslothai/unsloth/issues/11453) |

---

### **6. What This Means for Application Developers**  
- **Expect higher memory overhead** on large quantized models (e.g., Gemma 4 26B A4B QAT), especially on systems with <16 GB VRAM. Consider explicit layer splitting or offloading.  
- **Avoid using bundled CUDA 13.4 builds** on RTX 50xx series until performance is addressed — prefer external `ggml` builds for production.  
- **Leverage improved error visibility**: Recent PRs (#8804, #11460) ensure logs are accessible and failure reasons are surfaced, aiding debugging in agent pipelines.  
- **Design around tool call deduplication**: Use `tool_call_dedup=False` if your app requires repeated identical tool calls ([#10379](https://github.com/unslothai/unsloth/issues/10379)).  
- **Future-proof for MiCA**: With MiCA now in Hugging Face PEFT, consider integrating it via `get_peft_model()` for efficient fine-tuning workflows ([#6730](https://github.com/unslothai/unsloth/issues/6730)).  

> *Recommendation*: Monitor [Unsloth Studio issues](https://github.com/unslothai/unsloth/issues) and [PRs](https://github.com/unslothai/unsloth/pulls) for real-time updates on hardware-specific bugs and new features.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*