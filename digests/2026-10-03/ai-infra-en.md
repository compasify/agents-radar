# AI Infrastructure Digest 2026-10-03

> Generated: 2026-10-03 01:23 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-10-03**

---

### **1. Ecosystem Overview**  
The AI inference and serving ecosystem is entering a phase of intense specialization and hardware convergence, with next-generation GPUs like NVIDIA’s Blackwell (SM120) and AMD’s MI355X driving both innovation and instability. While vLLM, SGLang, and llama.cpp lead in low-level kernel optimization and performance tuning for high-throughput inference, Ollama and LiteLLM are increasingly focused on enterprise-grade proxying, cost control, and cross-provider compatibility. Unsloth continues to bridge the gap between local runtime efficiency and agent-native workflows. However, widespread regressions—particularly around speculative decoding, memory management, and cloud service stability—highlight growing technical debt and testing gaps as the stack evolves rapidly.

---

### **2. Activity Comparison**

| Project       | Issues Open (Today) | PRs Merged (Today) | Releases (Past 24h) | Status Summary |
|---------------|---------------------|--------------------|---------------------|----------------|
| **vLLM**      | 12                  | 8                  | None                | High activity in SM120/ROCm fixes; critical regressions blocking production use |
| **SGLang**    | 9                   | 7                  | None                | Focused on speculative decoding stability and ROCm/Metal expansion |
| **llama.cpp** | 11                  | 5                  | 3 (b11364, b11362, b11355) | Active release cadence; new model/hardware support but serious crashes reported |
| **Ollama**    | 10                  | 2                  | None                | Critical cloud outage + installer signature issues; core infrastructure under stress |
| **LiteLLM**   | 7                   | 6                  | 1 (`v1.105.0-dev.2`) | Security-focused release; high-severity budget enforcement bugs open |
| **Unsloth**   | 8                   | 4                  | None                | Performance regression in tensor split decoding; fine-tuning VRAM inefficiency |

> ✅ *vLLM and llama.cpp show highest engineering velocity; Ollama faces systemic reliability challenges.*

---

### **3. Model Support Race**

| New Model / Architecture         | Project(s) Supporting | Notes |
|----------------------------------|------------------------|-------|
| **GLM-5.3-Flash (NVFP4)**        | vLLM, SGLang, Unsloth    | vLLM leads with full SM120 support; SGLang reports prefix reuse collapse |
| **DeepSeek-V4.1-Flash**          | vLLM, SGLang, Ollama     | vLLM has decode throughput issues on SM120; SGLang fixes shared-expert fusion |
| **Qwen3.8-2.4T-A95B**            | vLLM, SGLang             | ROCm kernel tuning underway in both |
| **Nimble Decision Model**        | **llama.cpp** (b11364)   | First project to ship native support via `/v1/systemone` API |
| **CoralBricks (GLM 5.3, DS-V4.1)** | **LiteLLM**              | Enables cost-aware routing without manual `api_base` overrides |
| **Reka, QuickSilver Pro**        | **LiteLLM**              | First-class OpenAI-compatible providers added |
| **Gemma 3 (text-only)**          | **Unsloth**              | Experimental support in progress; vision-capable variant remains challenging |
| **Qwen3-TTS**                    | **Unsloth** (feature request) | LoRA fine-tuning not yet supported |

> 🏆 *LiteLLM and llama.cpp are leading in niche model adoption; vLLM dominates mainstream LLM hardware integration.*

---

### **4. Performance Frontier**

Optimization efforts are sharply polarized across projects:

| Focus Area               | Leading Projects                          | Key Developments |
|--------------------------|-------------------------------------------|------------------|
| **KV Cache & Prefix Caching** | vLLM, SGLang                            | Async KV loading race fixes (vLLM #59504), cache consistency in HiCache (SGLang #42295) |
| **Speculative Decoding** | vLLM, SGLang, llama.cpp                 | vLLM: 0% MTP acceptance on SM120; SGLang: EAGLE collapses prefix reuse; llama.cpp: MTP crash on Qwen3.8 Flash |
| **Kernel-Level Optimization** | vLLM, llama.cpp, SGLang                 | vLLM: FlashInfer SM120 backend; llama.cpp: Metal flash attention with ALiBi/logit softcap |
| **Quantization Efficiency** | Unsloth, vLLM, SGLang                   | Unsloth: VRAM overuse during fine-tuning; vLLM: NVFP4/GLM-5.x support |
| **Distributed & Tiered Serving** | vLLM, SGLang                           | vLLM: CUDA graph offload in sleep mode (#59160); SGLang: UnifiedRadixCache for streaming |

> 🔥 *SM120 GPU support is the dominant performance frontier—critical for future scalability but currently unstable.*

---

### **5. Layer Positioning**

| Project       | Layer Position                        | Core Differentiation |
|---------------|----------------------------------------|------------------------|
| **vLLM**      | **High-performance serving engine**   | Optimized for scale, latency, and hardware abstraction (SM120, ROCm) |
| **SGLang**    | **Advanced inference orchestration**  | Specializes in speculative decoding, multi-model routing, and agent logic |
| **llama.cpp** | **Local runtime & edge inference**    | Lightweight, portable, strong Apple Silicon/Metal support; ideal for embedded systems |
| **Ollama**    | **Developer gateway & CLI toolchain** | Aggregates models into a unified interface; struggles with reliability at scale |
| **LiteLLM**   | **Enterprise inference proxy**        | Cost tracking, budget enforcement, OpenTelemetry, multi-provider routing |
| **Unsloth**   | **Agent-optimized local runtime**     | Focuses on fine-tuning efficiency, JSONL fidelity, and multi-model residency |

> 📌 *vLLM and SGLang are pushing the envelope in distributed inference; LiteLLM and Ollama serve as application-facing gateways with diverging maturity.*

---

### **6. Trend Signals**

**Industry Trends Extracted from Today’s Activity:**
1. **Hardware-Specific Instability Is the New Norm**: SM120 and ROCm support are now primary sources of regressions—indicating that **performance gains come at the cost of stability**.
2. **Agent Workloads Are Driving Infrastructure Changes**: Tools like `EAGLE`, `HiCache`, and `UnifiedRadixCache` reflect growing demand for **multi-turn state preservation**, **tool call fidelity**, and **streaming resilience**.
3. **Security & Compliance Are Now Mandatory**: LiteLLM’s cosign-signed images and Ollama’s Authenticode mismatch highlight increasing regulatory pressure on **supply chain integrity**.
4. **Fine-Tuning Memory Overhead Is a Hidden Bottleneck**: Unsloth’s VRAM consumption issue reveals a broader problem: **fine-tuning tooling often misrepresents resource needs**.
5. **Model Diversity Requires Robust Routing Logic**: The addition of Reka, QuickSilver Pro, CoralBricks, and Nimble Decision Models shows that **proxy layers (LiteLLM) must evolve beyond simple API wrappers**.

> 🚨 **For Application Developers**:  
> - Avoid **nightly builds** on SM120 until vLLM/SGLang fix MTP issues.  
> - Use **`v1.105.0-dev.2` or later** for LiteLLM in regulated environments.  
> - **Pin to stable releases** (e.g., Ollama v0.34.4, llama.cpp b11364) if reliability is critical.  
> - Expect **increased complexity in model routing and cost tracking**—design for observability early.  
> - Monitor **memory behavior closely**, especially during fine-tuning and long-running agents.

---  
*Prepared by Senior Analyst, AI Infrastructure Ecosystem — October 3, 2026*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-10-03**

---

### **1. Today's Highlights**  
The vLLM project continues to prioritize stability and performance for next-generation hardware, with critical fixes for Blackwell (SM120) GPU support and speculative decoding correctness. Key PRs include a fix for MTP acceptance rate drops on GLM-5.3-Flash under SM120 and improvements to async KV loading race conditions. The community is actively addressing high-severity regressions affecting DeepSeek-V4.1-Flash and GLM-5.3-Flash on ROCm and CUDA.

---

### **2. Releases & Breaking Changes**  
*No new releases in the past 24 hours.*  
However, ongoing work on `vllm/vllm-openai:nightly` builds indicates that upcoming changes may affect:
- **CUDA Graph Pool Offload**: Opt-in via `sleep_mode_offload_cudagraph` (PR #59160), now enabled by default in some nightly images.
- **FlashInfer Kernel Management**: New `vllm download-kernels` CLI command (PR #58765) reduces startup overhead on Hopper+ GPUs.

> 🔗 [PR #59160](https://github.com/vllm-project/vllm/pull/59160) | [PR #58765](https://github.com/vllm-project/vllm/pull/58765)

---

### **3. New Model & Hardware Support**  
- **SM120 (Blackwell RTX 6000 Pro / 5080)**: Active optimization efforts for DeepSeek-V4.1-Flash, Qwen3-VL-8B-FP8, and GLM-5.3-Flash. Issues #56892 and #59724 highlight low decode throughput and 0% MTP acceptance rates.
- **ROCm (gfx950 / MI355X)**: Performance tracking for Qwen3.8-2.4T-A95B (Issue #57149), with active kernel-level tuning via PRs like #59333 and #56679.
- **Model Additions**: Kimi K3 tracking issue (#50001), GLM-5.x NVFP4 quantization support (PR #59833), and Qwen3.8-Flash-Next unified-memory GPU compatibility (PR #58439).

> 🔗 [Issue #56892](https://github.com/vllm-project/vllm/issues/56892) | [PR #59833](https://github.com/vllm-project/vllm/pull/59833) | [PR #58439](https://github.com/vllm-project/vllm/pull/58439)

---

### **4. Performance & Optimization**  
- **Speculative Decoding**: MTP acceptance rate drops to 0% on SM120 due to native FLASHINFER_MLA_SPARSE_SM120 backend issues (Issue #59724). Fix pending.
- **Async KV Loading**: PR #59504 addresses zeroing races during async load — improves efficiency in disaggregated serving.
- **Kernel-Level Gains**: ROCm PRs #59333 and #54916 enhance padding correctness and fp32 router GEMM performance for small M matrices.
- **Memory Efficiency**: PR #59160 enables CUDA graph pool offload on sleep, reducing memory footprint by GiBs per GPU in large MoE deployments.

> 🔗 [Issue #59724](https://github.com/vllm-project/vllm/issues/59724) | [PR #59504](https://github.com/vllm-project/vllm/pull/59504) | [PR #59160](https://github.com/vllm-project/vllm/pull/59160)

---

### **5. Stability & Regressions**  
| Severity | Issue | Summary | Fix Status |
|---------|------|--------|-----------|
| Critical | [#59724](https://github.com/vllm-project/vllm/issues/59724) | 0% MTP acceptance rate on GLM-5.3-Flash (SM120, nightly) | ✅ *PR open* (PR #59833 not yet merged) |
| High | [#56892](https://github.com/vllm-project/vllm/issues/56892) | Extremely low decode throughput on DeepSeek-V4.1-Flash (SM120) | ⚠️ *No fix yet; prioritized* |
| High | [#59413](https://github.com/vllm-project/vllm/issues/59413) | Gibberish output at low concurrency (ROCm, GLM-5.3-Flash) | ⚠️ *No fix; reproducible on nightly* |
| Medium | [#54359](https://github.com/vllm-project/vllm/issues/54359) | Kpool indexer overwrites own KV cache (ROCm) | ❌ *No PR yet* |

> Note: Multiple issues relate to **prefix caching**, **speculative decoding**, and **async KV offloading**—core components of high-throughput inference pipelines.

---

### **6. What This Means for Application Developers**  
- **Avoid nightly builds on SM120 GPUs** until PRs #59724 and #56892 are resolved—expect severe performance degradation or crashes.
- **Use `vllm download-kernels`** post-installation to avoid runtime compilation delays on Blackwell GPUs.
- **Monitor prefix cache behavior** closely when using hybrid attention models (e.g., DeepSeek-V4.1) with speculative decoding—some configurations silently disable reuse (Issue #57032).
- **Enable `sleep_mode_offload_cudagraph`** if running long-lived inference services with limited GPU memory (PR #59160).
- For **disaggregated or tiered systems**, consider testing with `--enforce-eager` and monitor admission policies (PR #51240 design proposal).

> 🔗 [PR #59160](https://github.com/vllm-project/vllm/pull/59160) | [Issue #57032](https://github.com/vllm-project/vllm/issues/57032) | [RFC #51240](https://github.com/vllm-project/vllm/issues/51240)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

---

### **SGLang Digest — 2026-10-03**

#### **1. Today's Highlights**  
The SGLang project continues to deepen its support for speculative decoding and multi-model serving, with critical fixes to `EAGLE` and `DSpark` affecting prefix reuse and CUDA graph stability. Key PRs today focus on stabilizing `HiCache`, `UnifiedRadixCache`, and `DeepSeek-V4` performance under high concurrency, while new work accelerates AMD ROCm integration and expands diffusion model capabilities.

#### **2. Releases & Breaking Changes**  
None. No new releases or breaking changes were published in the last 24 hours.

#### **3. New Model & Hardware Support**  
- **AMD ROCm (gfx1151/gfx1250)**: New CI testing and experimental support for Quark MXFP4 MoE models on RDNA GPUs via Triton kernels (`PR #41389`).  
- **Apple Silicon (Metal)**: Ongoing efforts to integrate Metal backend; `PR #42270` updates memory cache behavior for future Metal compatibility.  
- **Diffusion Models**: Expanded support for LTX-2 and DiffusionGemma (with pending runtime validation); `PR #42254` adds Foundry adapter documentation.  
- **New Model**: DeepSeek V4.1 tracking issue opened (`#42170`) with ongoing refactor and optimization work.

#### **4. Performance & Optimization**  
- **HiCache/UnifiedRadixCache**: Fixes to write-back SWA insert backups (`PR #42264`) and improved session handling (`PR #42295`) enhance cache reliability under streaming workloads.  
- **DeepSeek-V4**: Critical fix for shared-expert fusion in NVFP4 LoRA/FP4 backends (`PR #42203`) prevents incorrect weight access and improves throughput.  
- **MoE Optimization**: Unified MoE router GEMM layer (`#38695`) aims to reduce precision overhead and improve routing efficiency across experts.  
- **CUDA Graph Stability**: Workarounds for `fa4` attention crashes on SM120 (RTX PRO 6000) continue to rely on `triton` backend (`#42012`).  

#### **5. Stability & Regressions**  
| Issue | Severity | Description | Fix Status |
|------|----------|-------------|------------|
| [#42012](https://github.com/sgl-project/sglang/issues/42012) | Critical | `fa4` attention backend crashes during hybrid extend capture on GLM-5.3-Flash (SM120) | ✅ Workaround: Use `triton` backend |
| [#42146](https://github.com/sgl-project/sglang/issues/42146) | High | C4 indexer row-chunk planner disabled by default `SGLANG_FP8_PAGED_MQA_LOGITS_TORCH=True`, increasing memory usage by ~3.3–3.8 GiB at 128k context | ⚠️ Investigating root cause |
| [#32459](https://github.com/sgl-project/sglang/issues/32459) | High | EAGLE speculative decoding collapses radix prefix reuse silently (97% → 40-53%) on GLM-DSA NVFP4 | ❌ No fix yet; affects multi-turn agents |
| [#42143](https://github.com/sgl-project/sglang/issues/42143) | Medium | HarmonyParser emits tool call arguments as reasoning during streaming | 🟡 In progress |
| [#42269](https://github.com/sgl-project/sglang/issues/42269) | Medium | Tool calls silently dropped when `response_format` is JSON + `glm47` parser | 🟡 In progress |

#### **6. What This Means for Application Developers**  
- **Use `triton` backend** for `GLM-5.3-Flash` on SM120 (RTX PRO 6000) until `fa4` crash is resolved (`#42012`).  
- **Avoid `SGLANG_FP8_PAGED_MQA_LOGITS_TORCH=True`** for DeepSeek-V4 if memory footprint is a concern—this disables C4 indexing and increases memory use significantly (`#42146`).  
- **Monitor tool call behavior** with `glm47` parser and `response_format`: tool calls may be silently dropped if both are enabled (`#42269`).  
- **Expect prefix reuse degradation** when using `EAGLE` speculative decoding with multi-turn traffic on GLM-DSA NVFP4 (`#32459`).  
- **Leverage `UnifiedRadixCache`** for stable streaming sessions; avoid mixing non-streaming tree caches (`PR #42295`).  

> 🔗 *Explore recent PRs: [42295](https://github.com/sgl-project/sglang/pull/42295), [42203](https://github.com/sgl-project/sglang/pull/42203), [42264](https://github.com/sgl-project/sglang/pull/42264)*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-10-03**

---

### **1. Today's Highlights**  
The latest release (`b11364`) introduces support for the *Nimble Decision Model*, expanding the range of specialized reasoning models that can be served via `llama.cpp`. On the performance front, Metal now includes a new flash attention kernel for F16 KV with support for attention sinks, ALiBi, and logit softcap—critical for efficient speculative decoding in large-context scenarios.

---

### **2. Releases & Breaking Changes**  
- **Release b11364**: Added runtime support for the *Nimble Decision Model* via `model: support nimble decision model` ([#29844](https://github.com/ggml-org/llama.cpp/pull/29844)).  
- **Release b11362**: Introduced Metal tensor API flash attention kernel for F16 KV with full feature parity (attention sinks, ALiBi, logit softcap) — no config changes required, but expect improved speculative decode efficiency on Apple Silicon.  
- **Release b11355**: Disabled large matmul tile on Samsung GPUs with 32KB shared memory to prevent pipeline stalls ([#28531](https://github.com/ggml-org/llama.cpp/pull/28531)).

> 🔗 [GitHub Releases](https://github.com/ggml-org/llama.cpp/releases)

---

### **3. New Model & Hardware Support**  
- ✅ **Model Support**:  
  - `clef` decision model (text-only) added via `/v1/systemone` API ([#29818](https://github.com/ggml-org/llama.cpp/pull/29818), [#29831](https://github.com/ggml-org/llama.cpp/pull/29831)).  
  - `Prism Bonsai 2 27B` now supported at runtime ([#29600](https://github.com/ggml-org/llama.cpp/pull/29600)).  
- ✅ **Hardware & Backend**:  
  - **Hexagon**: Added `q2_k` and `q3_k` quant type support for Qualcomm HTP ([#29717](https://github.com/ggml-org/llama.cpp/pull/29717)), enabling low-bit quantization on edge devices.  
  - **Vulkan**: Improved logging during pipeline compilation ([#29794](https://github.com/ggml-org/llama.cpp/pull/29794)) and disabled problematic matmul tiles on Samsung GPUs ([#28531](https://github.com/ggml-org/llama.cpp/pull/28531)).  
  - **SYCL**: Continued optimization for Intel Arc B70 and integration of MKL-based flash attention for GLM-4.7 ([#29171](https://github.com/ggml-org/llama.cpp/pull/29171)).  

---

### **4. Performance & Optimization**  
- **Metal Flash Attention**: New tensor API kernel enables faster speculative decoding with reduced latency on Apple Silicon, particularly effective for models using attention sinks or ALiBi ([#29570](https://github.com/ggml-org/llama.cpp/pull/29570)).  
- **CUDA**: Optimized multi-row TOP_K with segmented radix sort ([#29883](https://github.com/ggml-org/llama.cpp/pull/29883)) — expected to improve top-k sampling throughput by ~15–20% on high-concurrency workloads.  
- **Vulkan**: RMS norm optimized using subgroup reductions ([#29882](https://github.com/ggml-org/llama.cpp/pull/29882)) — early benchmarks show 12% improvement on Intel Arc B70.  
- **SYCL**: Reordered IQ3_S/IQ3_XXS layouts and dequant paths yield up to 2.1x speedup on Intel Arc Pro B70 ([#29107](https://github.com/ggml-org/llama.cpp/pull/29107)).  
- **Qwen4exp**: Mask construction optimizations applied to both Qwen4exp and GLM5-next ([#29824](https://github.com/ggml-org/llama.cpp/pull/29824)) — reduces prefill overhead in hybrid architectures.

---

### **5. Stability & Regressions**  
⚠️ **Critical Issues Reported Today**:  
- **[#29811]**: Assertion failure at startup when running Qwen 3.8 Flash with MTP draft mode — likely due to mismatched tensor dimensions or improper state initialization. No fix PR yet.  
- **[#29786]**: Vulkan crashes silently on Qualcomm Adreno driver (`SIGABRT`, no error output) with `-ngl >= 1`. Affects mobile and embedded deployments. No fix available.  
- **[#29521]**: macOS Metal OOM and compute error (-3) on Gemma 4 31B with default `n_ctx` — may require manual context size reduction or VRAM allocation tuning.  
- **[#27428]**: Draft-MTP halves prompt processing speed on multi-GPU layer splits (single GPU OK) — suspected backend sync issue; reported by multiple users.

> 🔗 [Issue #29811](https://github.com/ggml-org/llama.cpp/issues/29811) | [Issue #29786](https://github.com/ggml-org/llama.cpp/issues/29786) | [Issue #29521](https://github.com/ggml-org/llama.cpp/issues/29521) | [Issue #27428](https://github.com/ggml-org/llama.cpp/issues/27428)

---

### **6. What This Means for Application Developers**  
- **Use `draft-mtp` cautiously**: While speculative decoding is powerful, recent regressions in MTP + Vulkan/Metal suggest it remains unstable on certain hardware (especially AMD/Radeon and Adreno). Avoid in production until fixes land.  
- **Prioritize Metal flash attention**: If serving Apple Silicon clients with long-context models (e.g., Laya, Julia-1), enable the new F16 KV flash kernel—it improves speculation throughput significantly.  
- **Watch out for Qwen3.8 Flash + MTP**: The crash in `#29811` indicates a serious compatibility gap—avoid this combination until resolved.  
- **Prepare for model-specific configs**: With growing support for niche models like Clef, Prism Bonsai, and Nimble Decision Models, ensure your app dynamically handles `/v1/systemone` and new APIs.  
- **Monitor memory usage on M5 Max**: High-memory models like Gemma 4 31B may trigger OOMs even on 128GB systems—tune `n_ctx` or use `--memory-fraction` aggressively.

> 📌 **Recommendation**: Use `b11364` for Apple Silicon inference with speculative decoding, but avoid MTP + Qwen3.8 Flash until issue #29811 is patched.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-10-03**

---

### **1. Today's Highlights**  
A critical regression in Ollama Cloud Pro has surfaced, with users reporting a 95% failure rate across all cloud-hosted models, rendering the service effectively unusable. Concurrently, multiple stability issues have emerged on Windows and macOS, including Vulkan GPU detection failures, MLX engine memory paging behavior, and a newly reported Authenticode signature mismatch in the v0.35.1 Windows installer. These issues highlight growing instability in core infrastructure, particularly around cross-platform hardware support and runtime integrity.

---

### **2. Releases & Breaking Changes**  
*None*  
No new releases were published in the last 24 hours. However, **v0.35.1** is under scrutiny due to a reported **Authenticode HashMismatch** in the Windows installer (see [#18765](https://github.com/ollama/ollama/issues/18765)), which may block enterprise deployments relying on signed executables.

---

### **3. New Model & Hardware Support**  
- **MLX Engine Expansion**: PR [#18755](https://github.com/ollama/ollama/pull/18755) introduces Strands Decider integration for decision models, enabling more sophisticated agent logic on Apple Silicon via MLX.
- **Granite Model Support**: PR [#17972](https://github.com/ollama/ollama/pull/17972) adds experimental support for `GraniteForCausalLM` architecture in MLX runner, expanding compatibility with IBM’s Granite 4.1/4.2 series.
- **ROCm + CUDA Dual Runtime Support**: Feature request [#18545](https://github.com/ollama/ollama/issues/18545) calls for dual runtime downloads on Linux — a key enabler for multi-GPU systems (e.g., 7800XT + 4060Ti).

---

### **4. Performance & Optimization**  
- **GPU Memory Efficiency**: Issue [#18756](https://github.com/ollama/ollama/issues/18756) reports ROCm GPUs ignoring available VRAM during model eviction, leading to premature unloading despite sufficient space — a significant performance bottleneck for multi-model inference.
- **MLX Memory Management**: PR [#18744](https://github.com/ollama/ollama/issues/18744) reveals that MLX engine unwires model weights ~2 seconds post-request on macOS, causing page-ins under memory pressure and increasing latency for idle restarts.
- **Parallelism Limitation**: Issue [#18750](https://github.com/ollama/ollama/issues/18750) shows that `nimble:latest` forces `numParallel=1` even when set via environment, severely limiting throughput on high-core systems.

---

### **5. Stability & Regressions**  
| Severity | Issue | Impact | Fix Status |
|---------|-------|--------|------------|
| 🔴 Critical | [#15453](https://github.com/ollama/ollama/issues/15453) | 95% failure rate on Ollama Cloud Pro — all models inaccessible | No fix yet; major service disruption |
| 🔴 Critical | [#18765](https://github.com/ollama/ollama/issues/18765) | Windows installer fails Authenticode verification | No fix yet; blocks trusted deployment |
| 🟡 High | [#18754](https://github.com/ollama/ollama/issues/18754) | MLX not using full GPU on M4 Pro (48GB RAM) | No fix; performance degradation observed |
| 🟡 High | [#18672](https://github.com/ollama/ollama/issues/18672) | Intel UHD iGPU not detected via Vulkan on Windows | No fix; limits low-end GPU usage |
| 🟡 Medium | [#18762](https://github.com/ollama/ollama/issues/18762) | Tool results associated by position instead of `tool_call_id` | PR [#18763](https://github.com/ollama/ollama/pull/18763) submitted — pending review |
| 🟡 Medium | [#18756](https://github.com/ollama/ollama/issues/18756) | ROCm VRAM ignored during model eviction | Duplicate of #16462; no resolution |

---

### **6. What This Means for Application Developers**  
- **Avoid Ollama Cloud Pro** until [#15453](https://github.com/ollama/ollama/issues/15453) is resolved — it is currently non-functional for production use.
- **Local inference is safer**: Use self-hosted instances (`localhost:11434`) to avoid cloud instability. Ensure your CI/CD pipeline validates against v0.35.1 due to the installer signature issue.
- **Be cautious with MLX on macOS**: Expect latency spikes after idle periods due to memory paging (see [#18744](https://github.com/ollama/ollama/issues/18744)). Consider pre-warming models or avoiding MLX for long-running agents.
- **Tool call reliability**: Do not assume tool results are correctly linked by `tool_call_id` in `/v1/chat/completions`. The current behavior is unreliable unless you apply the fix from PR [#18763](https://github.com/ollama/ollama/pull/18763).
- **Hardware diversity**: If using mixed GPU setups (NVIDIA + AMD), ensure manual runtime selection or wait for [#18545](https://github.com/ollama/ollama/issues/18545) to be addressed.

> ✅ *Recommendation*: Pin to v0.34.4 temporarily if stability is paramount. Monitor PRs [#18763](https://github.com/ollama/ollama/pull/18763) and [#18755](https://github.com/ollama/ollama/pull/18755) for upcoming fixes.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-10-03**

---

### **1. Today's Highlights**  
LiteLLM continues to strengthen its enterprise-grade inference proxy with critical fixes for budget enforcement, cost tracking, and stability in high-load scenarios. Key PRs today address long-standing issues around model routing consistency, vector store access control, and OpenTelemetry trace fidelity—particularly for Bedrock and Anthropic integrations. New provider support for Reka and QuickSilver Pro expands the ecosystem of OpenAI-compatible backends.

---

### **2. Releases & Breaking Changes**  
- **v1.105.0-dev.2** released today with enhanced security: all Docker images are now signed via [cosign](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0), using a consistent key introduced in commit `0112e53`.  
  🔐 **Verify signature**: Use `cosign verify` with the public key from the repo’s `.sigstore/` directory.  
  📌 *Note: No breaking API changes in this release; focus is on integrity and compliance.*

---

### **3. New Model & Hardware Support**  
- ✅ **Reka** added as first-class OpenAI-compatible provider via [PR #44278](https://github.com/BerriAI/litellm/pull/44278). Now supports `reka/` routing with full cost tracking.
- ✅ **QuickSilver Pro** integrated as JSON-configured OpenAI-compatible provider via [PR #44303](https://github.com/BerriAI/litellm/pull/44303).
- ✅ **CoralBricks** (GLM 5.3, DeepSeek V4.1 Flash) added via [PR #35957](https://github.com/BerriAI/litellm/pull/35957) — enables cost-aware routing without manual `api_base` overrides.
- ✅ **Amazon Nova 2 Pro (Preview)** now priced correctly at standard tier rates in catalog ([PR #44302](https://github.com/BerriAI/litellm/pull/44302)).

---

### **4. Performance & Optimization**  
- ⚡ **Reduced prompt-cache eligibility overhead**: [PR #44221](https://github.com/BerriAI/litellm/pull/44221) stops tokenizing entire conversations during cache eligibility checks—improves latency for long-context prompts.
- 📊 **Optimized OTEL spans for DB operations**: [PR #44240](https://github.com/BerriAI/litellm/pull/44240) names PostgreSQL spans by operation and table, enabling better observability in tracing systems.
- 🧠 **Improved agent stream resilience**: [PR #44276](https://github.com/BerriAI/litellm/pull/44276) retries `/v1/messages` streams when the provider drops the connection before the first content chunk—critical for Databricks AI and other unreliable backends.

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Fix PR |
|--------|------|-------|--------|
| 🔴 High | Budget enforcement bypassed in v1.82.3 (`max_budget` ignored despite spend exceeding limit) | Open | [Issue #26672](https://github.com/BerriAI/litellm/issues/26672) |
| 🔴 High | `model_max_budget` enforcement not working for end-users | Open | [Issue #31842](https://github.com/BerriAI/litellm/issues/31842) |
| 🔴 High | `RateLimitError` incorrectly used for non-retryable `insufficient_quota` errors → infinite retry loops | Open | [Issue #32785](https://github.com/BerriAI/litellm/issues/32785) |
| 🟡 Medium | S3 log filenames mismatch `request_id` in RDS | Open | [Issue #32028](https://github.com/BerriAI/litellm/issues/32028) |
| 🟡 Medium | OTLP span events silently dropped before ClickHouse storage | Open | [Issue #44274](https://github.com/BerriAI/litellm/issues/44274) |
| 🟡 Medium | In-memory state poisoning: non-standard params re-injected into all subsequent requests | Open | [Issue #32112](https://github.com/BerriAI/litellm/issues/32112) |

> 💡 **Note**: Several high-severity bugs are actively being addressed in PRs, but no fixes have been merged yet. Avoid v1.82.3+ until patched.

---

### **6. What This Means for Application Developers**  
- **Use `v1.105.0-dev.2` or later** for secure, verifiable deployments—especially in regulated environments. Always validate image signatures via cosign.
- **Avoid `max_budget` and `model_max_budget`** if you’re on v1.82.3–v1.90.x due to known enforcement bugs—upgrade immediately or implement client-side checks.
- **Leverage new providers (Reka, QuickSilver Pro, CoralBricks)** for multi-vendor LLM routing with native cost tracking—no more manual `api_base` hacks.
- **Expect improved reliability in agentic workflows**: Stream recovery logic ([#44276](https://github.com/BerriAI/litellm/pull/44276)) and better error handling will reduce silent failures in agent pipelines.
- **Monitor your traces carefully**: The fix for OTLP event loss ([#44274](https://github.com/BerriAI/litellm/issues/44274)) is pending—until resolved, custom span data may be lost in ClickHouse.

👉 **Recommendation**: Pin to `litellm:v1.105.0-dev.2` or later, and audit all budgeting logic in production proxies.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# **Unsloth Digest – 2026-10-03**

---

### **1. Today's Highlights**  
The Unsloth ecosystem continues to expand its agent and multi-model capabilities, with key PRs enabling JSONL export fidelity, tool call retention in chat history, and support for multiple resident GGUF models. However, critical performance regressions have emerged—most notably a **2.9x slowdown in tensor split decoding** since `b10715-mix-86bd2d3`, impacting inference throughput on dual-GPU setups. Meanwhile, VRAM overuse during fine-tuning remains a top concern, with users reporting OOM errors even when significant memory is unused.

---

### **2. Releases & Breaking Changes**  
None reported in the last 24 hours. No new releases or breaking changes were published.

---

### **3. New Model & Hardware Support**  
- ✅ **Qwen3-TTS**: Feature request (#3951) for LoRA fine-tuning support has been raised; model is already compatible with Hugging Face Transformers.  
- ✅ **Gemma 3 (text-only variant)**: Issue #12554 highlights challenges saving/loading text-only versions of vision-capable LLMs—indicating ongoing work toward full VLM flexibility.  
- ✅ **Qwen-Image-2.1**: PR #12470 proposes adding text encoder selection during GGUF download to avoid forced high-memory dense encoders (~17GB).  
- ✅ **Windows Desktop**: PR #11327 enables configurable backend installation directory (previously locked to `%USERPROFILE%\.unsloth\studio`).  

> 🔗 [Issue #3951](https://github.com/unslothai/unsloth/issues/3951) | [PR #12470](https://github.com/unslothai/unsloth/pull/12470) | [PR #11327](https://github.com/unslothai/unsloth/pull/11327)

---

### **4. Performance & Optimization**  
- ⚠️ **Severe Inference Regression**: Since `b10715-mix-86bd2d3`, tensor split decoding (`--split-mode tensor`) on dual RTX 5070 Ti GPUs shows **~2.9x slower performance**, dropping from **115–118 t/s** (stable builds) to **~48 t/s**. This impacts both native Windows and WSL2 environments.  
  > 🔗 [Issue #12468](https://github.com/unslothai/unsloth/issues/12468)  
- 📈 **Multi-Model Serving**: PR #10876 introduces experimental support for **multiple resident GGUF models**, each running in isolated `llama-server` processes—enabling concurrent model serving without reload overhead.  
- 🛠️ **Fine-tuning Memory Overhead**: Issue #4504 reports that fine-tuning uses significantly more VRAM than advertised, causing OOMs even on large GPUs (e.g., 24GB T4), despite only 1/3 being used.  
  > 🔗 [Issue #4504](https://github.com/unslothai/unsloth/issues/4504)

---

### **5. Stability & Regressions**  
| Severity | Issue | Description | Fix Status |
|--------|------|------------|-----------|
| 🔴 High | [Issue #12468](https://github.com/unslothai/unsloth/issues/12468) | 2.9x slowdown in tensor split decoding post-b10715-mix-86bd2d3 | ❌ Pending |
| 🔴 High | [Issue #4504](https://github.com/unslothai/unsloth/issues/4504) | Fine-tuning consumes excessive VRAM → OOMs on big models | ❌ Pending |
| 🟡 Medium | [Issue #9867](https://github.com/unslothai/unsloth/issues/9867) | Qwen3.8-27B bnb-4bit training crashes due to shape error in `bitsandbytes` quantized weights | ✅ Patched via #10017 / #10276 |
| 🟡 Medium | [Issue #12518](https://github.com/unslothai/unsloth/issues/12518) | "Generation stopped making progress" + `chat_generation_run_lease_expired` | ❌ Pending |
| 🟡 Medium | [Issue #12364](https://github.com/unslothai/unsloth/issues/12364) | OpenAI-compatible API adds ~1.2s fixed latency per request | ❌ Pending |

> Note: Several stability issues stem from recent CI/CD and build pipeline changes, including regression in CUDA graph handling and incorrect quantization state loading.

---

### **6. What This Means for Application Developers**  
- **Avoid recent builds (`b10715-mix-*` onward)** if you rely on high-throughput tensor-split inference—use `b10687-mix-67dfc8b` or official `ggml-org` builds until the regression is resolved.  
- **Do not assume stable fine-tuning memory usage**—expect up to 2× higher VRAM consumption than advertised; plan GPU allocation accordingly.  
- **Leverage new multi-model residency (PR #10876)** for agent systems requiring concurrent model access (e.g., routing agents to different models).  
- **Be cautious with tool call preservation**: Recent exports (JSONL, Markdown) may lose earlier tool results unless explicitly retained—use PR #12574 to ensure fidelity.  
- **Use local models via desktop apps**: PR #12582 enables agent desktop apps (OpenCode, OpenClaw, Hermes) to directly connect to locally served Unsloth models—ideal for low-latency, private AI workflows.

> 🔗 [PR #10876](https://github.com/unslothai/unsloth/pull/10876) | [PR #12574](https://github.com/unslothai/unsloth/pull/12574) | [PR #12582](https://github.com/unslothai/unsloth/pull/12582)

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*