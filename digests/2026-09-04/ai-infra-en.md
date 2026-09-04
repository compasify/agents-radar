# AI Infrastructure Digest 2026-09-04

> Generated: 2026-09-04 00:19 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-09-04**

---

### **1. Ecosystem Overview**  
The AI inference infrastructure landscape in Q3 2026 is characterized by rapid specialization and convergence toward high-throughput, low-latency serving for next-generation LLMs. Projects are increasingly focused on enabling complex workloads—speculative decoding, structured outputs, multi-model routing, and agent workflows—while aggressively optimizing kernel-level performance across diverse hardware. A clear bifurcation is emerging: foundational engines (vLLM, SGLang, llama.cpp) are pushing the envelope in model-specific optimizations and distributed execution, while gateways (LiteLLM) and runtime platforms (Ollama, Unsloth) prioritize developer experience, deployment flexibility, and integration with agent ecosystems.

---

### **2. Activity Comparison**

| Project       | Issues Open (High+Severity) | PRs Merged (Last 7 Days) | Releases | Status |
|---------------|-----------------------------|----------------------------|----------|--------|
| **vLLM**      | 12                          | 8                          | None     | Stable, focused on correctness & optimization |
| **SGLang**    | 15                          | 10                         | None     | Active development; breaking changes imminent |
| **llama.cpp** | 11                          | 7                          | None     | High stability concerns on AMD/ROCm/Vulkan |
| **Ollama**    | 10                          | 5                          | None     | Stability issues in v0.33.3; regression-heavy |
| **LiteLLM**   | 6                           | 9                          | v1.101.0-dev.2 | Early Rust migration underway |
| **Unsloth**   | 8                           | 6                          | None     | Strong AMD ROCm focus; UI/stability improvements |

> 🔍 *Observation*: SGLang and vLLM lead in engineering velocity, while Ollama and llama.cpp face significant stability challenges despite active contributions.

---

### **3. Model Support Race**

| New Model / Architecture         | Supported By                     | Notes |
|----------------------------------|----------------------------------|-------|
| **Qwen3.8-Flash-Next**          | vLLM ✅, SGLang ✅, Ollama ✅, llama.cpp ✅ | All support experimental features; vLLM has best speculative decode handling |
| **Hy4-preview**                  | SGLang ✅                        | First-class support for sparse attention + gated MoE |
| **GLM-5.3-Flash (GLM5-Next)**   | llama.cpp ✅, SGLang ✅, Ollama ✅ | SGLang has critical FP8/KV cache crash; llama.cpp fixes pending |
| **Gemma 4 26B A4B**             | Ollama ❌ (infinite loop bug)    | Not stable in v0.33.3 — use v0.33.2 |
| **DeepSeek-v4-Flash-0731**      | vLLM ✅, SGLang ✅                | Both have targeted tool-calling fixes |
| **Granite 4.1 (causal)**        | Ollama ✅                        | New MLX backend support |
| **T-Head PPU (ZW810/ZW-M890P)** | SGLang 🚧                        | Roadmap initiated; no code yet |
| **AMD Strix Halo (gfx1151)**   | Multiple projects ⚠️             | ROCm/HIP fails on MoE/dense models; Vulkan works |

> 🏆 **Winner**: **SGLang** leads in architectural innovation with Hy4-preview and PD disaggregation support.  
> 🥈 **Runner-up**: **vLLM** for breadth and depth of model-specific optimizations (e.g., GDN, MTP).

---

### **4. Performance Frontier**

| Focus Area                   | Leading Projects                              | Key Developments |
|-----------------------------|-----------------------------------------------|------------------|
| **KV Cache Optimization**   | vLLM, SGLang                                  | FlashInfer CuteDSL mxfp8/mxfp4 support; hybrid SWA row frees |
| **Speculative Decoding**    | vLLM ✅, SGLang ✅, Ollama ✅                    | Dynamic MTP adaptive depth; GDN prefix-cache fixes |
| **Kernel-Level Efficiency** | vLLM (Model Runner V2), llama.cpp (Metal FA), SGLang (ROCm DSA) | Fused kernels, GEMM folding, sparse attention |
| **Quantization & Precision**| vLLM, llama.cpp, LiteLLM                      | mxfp8/mxfp4 support; selective BF16 layer tuning |
| **Distributed Serving**     | SGLang ✅, vLLM ✅                             | Pipeline parallelism, decode context parallelism (DCP), PD disaggregation |
| **Memory Efficiency**       | Unsloth (AMD ROCm), vLLM (batch invariance)   | 50% VRAM reduction on AMD via AOTriton; batch invariant scheduling |

> 💡 **Key Insight**: The performance frontier is now defined not just by raw throughput but by **memory efficiency at scale**, especially for hybrid and MoE models.

---

### **5. Layer Positioning**

| Project       | Primary Layer                     | Role in Stack |
|---------------|-----------------------------------|---------------|
| **vLLM**      | Inference Engine (GPU-focused)    | Core engine for high-throughput, low-latency serving; optimized for modern GPUs |
| **SGLang**    | Distributed Serving Framework     | Enables pipeline/decode parallelism, PD disaggregation, multi-backend routing |
| **llama.cpp** | Local Runtime / Cross-Platform    | CPU/GPU hybrid execution; strong mobile/iGPU support; ideal for edge devices |
| **Ollama**    | Developer-Focused Runtime Platform | CLI-first, easy-to-use interface; integrates agents, fine-tuning, and local models |
| **LiteLLM**   | AI Gateway / Proxy Layer          | Aggregates multiple backends; enables fusion routers, cost control, and auto-routing |
| **Unsloth**   | Full-Stack Studio + Runtime       | Combines model serving, GUI, audio/LLM integration, and Docker portability |

> 📊 **Strategic Implication**: The stack is becoming modular—engine (vLLM/SGLang) + gateway (LiteLLM) + runtime (Ollama/Unsloth) can be composed for optimal performance and UX.

---

### **6. Trend Signals**

| Trend | Evidence from Today's Digest | Developer Guidance |
|------|-------------------------------|--------------------|
| **Rise of Hybrid Architectures** | vLLM/SGLang support for GDN, Mamba, MoE, sparse attention | Avoid speculative decoding on hybrid models until fixes land; validate with `--max-num-batched-tokens` |
| **Hardware Specialization Accelerating** | AMD ROCm AOTriton (Unsloth), Metal sparse FA (llama.cpp), Intel Arc corruption (vLLM) | Use platform-specific backends; avoid single-GPU PLE offload on AMD/Intel until resolved |
| **Rust Migration for Low-Latency Gateways** | LiteLLM’s sub-1ms overhead initiative | Join early beta if building real-time agents or inference proxies |
| **Agent Workflows Driving Feature Demand** | Speculative decoding under structured output (Ollama), Talos integration (Ollama), fusion routers (LiteLLM) | Prioritize tools with agent-native design (e.g., Ollama, LiteLLM) |
| **Stability Over Features** | Multiple regressions in Ollama/vLLM/SGLang despite feature growth | Pin to stable versions; test critical paths before production rollout |

> ✅ **Final Recommendation**: For production-grade agent systems, **combine vLLM/SGLang as engine + LiteLLM as gateway + Ollama/Unsloth for local dev and agent UX**. Monitor vLLM and SGLang for PD/disaggregation stability, and adopt LiteLLM’s Rust gateway early for latency-sensitive applications.

---  
*Report generated: 2026-09-04 | Source: GitHub project digests (vLLM, SGLang, llama.cpp, Ollama, LiteLLM, Unsloth)*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

---

### **vLLM Digest — 2026-09-04**

#### **1. Today's Highlights**  
The vLLM project continues to advance speculative decoding and hybrid model support with critical fixes for MTP (Multi-Token Prediction) and GDN (Gated DeltaNet) models, including a high-impact PR restoring prefix-cache hits under speculative decode. New work on Model Runner V2 delivers decode-path optimizations for Qwen3-Next 80B, while ongoing efforts in batch invariance and LoRA classification support signal deeper architectural maturity.

#### **2. Releases & Breaking Changes**  
*None.* No new releases or breaking API/config changes were published in the last 24 hours.

#### **3. New Model & Hardware Support**  
- **New Model Support**:  
  - Added experimental support for **Qwen3.8-Flash-Next** with `VLLM_PLE_CPU_OFFLOAD`, though startup deadlocks persist on single-GPU setups (*Issue #53960*).  
  - **DeepSeek-v4-Flash-0731** now receives targeted fixes for DSML leakage in tool-calling workflows (*PR #54686*).  
- **Hardware & Backend Advances**:  
  - ROCm 10.0 + AITER 0.1.21.post1 integration now live in CI (`docker/Dockerfile.rock_base`), enabling future testing on newer AMD hardware (*PR #55246*).  
  - Intel Arc Pro B70 (XPU) now under active investigation for persistent output corruption during sustained decode (*Issue #53480*).

#### **4. Performance & Optimization**  
- **Model Runner V2**: Four performance-focused commits landed in **PR #55260**, delivering:  
  - Packed QKV, fused index prep, weight de-interleave, and GEMM folding for GDN all-mode decode paths.  
  - Measured cumulative throughput gains on **Qwen3-Next-80B-A3B-Instruct-NVFP4 (B200)** — specific numbers pending benchmark release.  
- **Kernel-Level Optimizations**:  
  - Updated FlashInfer CuteDSL MoE API to support mxfp8/mxfp4 dtypes and improve low-latency decode; enables **GPT-OSS-120B** support (*PR #55015*).  
  - Migration of W4A16 FlyDSL MoE to AITER API for better kernel tuning and sorting control (*PR #51563*).  
- **Quantization Improvements**:  
  - Fix for `--enable-prompt-embeds` misbehavior on encoder-only models (e.g., BAAI/bge-large-en-v1.5) via *PR #55233*.  

#### **5. Stability & Regressions**  
- **Critical Regressions (High Severity)**:  
  - **Deadlock at startup with `VLLM_PLE_CPU_OFFLOAD=1` on single GPU** (Qwen3.8-Flash-Next, GB10/sm_121) — process hangs silently after engine init (*Issue #53960*, 17 comments).  
  - **Hybrid Mamba (align) corrupts under speculative decoding** even with zero retrieved tokens — leads to garbage output (*Issue #53505*, 9 comments).  
  - **Prefill misdispatched into spec-decode FULL cudagraph** when prompt length = `uniform_decode_query_len * num_reqs`, causing silent GDN state loss (*Issue #53051*, 6 comments).  
- **Fixes in Progress**:  
  - **PR #52244** restores hybrid GDN prefix-cache hits under MTP speculative decoding — already merged into mainline.  
  - **PR #55260** includes fixes for GDN decode-path correctness and performance.  

#### **6. What This Means for Application Developers**  
- **Speculative Decoding Users**: Avoid `Qwen3.8-Flash-Next` with `PLE_CPU_OFFLOAD` on single GPUs until *Issue #53960* is resolved. Use MTP only with models where prefix-cache reuse is critical — verify with `--max-num-batched-tokens` tuning.  
- **Multi-LoRA & Classification Workloads**: Expect limited support — current issues (#19623, #12829, #23719) indicate no native multi-LoRA classification path exists yet. Consider using external routing logic.  
- **Tool Calling Reliability**: Ensure you’re using `xgrammar` backend via Rust frontend (*PR #55258*) for structured outputs — legacy backends may leak state.  
- **Production Deployments**: Monitor for silent corruption on Intel Arc GPUs (*Issue #53480*) and avoid mixed-speculative decode workloads with hybrid models until fix lands.  

> 🔗 **Key Links**:  
> - [Batch Invariant Feature Tracking](https://github.com/vllm-project/vllm/issues/27433)  
> - [MTP + GDN Prefix Cache Fix](https://github.com/vllm-project/vllm/pull/52244)  
> - [Model Runner V2 GDN Optimizations](https://github.com/vllm-project/vllm/pull/55260)  
> - [ROCm 10.0 Integration](https://github.com/vllm-project/vllm/pull/55246)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest — 2026-09-04

---

### **1. Today's Highlights**  
SGLang continues to advance its infrastructure for large-scale, high-throughput LLM serving with key progress in **pipeline and decode context parallelism (DCP)**, **PD disaggregation stability**, and **multi-backend support**. A major focus remains on **CUDA/ROCm crash diagnostics**, with a new coredump tracking system now active (#26340), while critical fixes land for speculative decoding under PD disaggregation and memory corruption issues in MoE models.

---

### **2. Releases & Breaking Changes**  
*None reported in the last 24 hours.*  
However, ongoing work on **DeepSeek V3.2 CP v1 deprecation** (#36223, #36228, #36229, #36230) signals upcoming breaking changes: legacy `--cp-strategy v1` flags will be removed, replaced by canonical `zigzag`/`interleave` layouts. Developers should migrate configurations ahead of next release.

> 🔗 [PR #36223](https://github.com/sgl-project/sglang/pull/36223) | [PR #36230](https://github.com/sgl-project/sglang/pull/36230)

---

### **3. New Model & Hardware Support**  
- ✅ **Hy4-preview (text-only)**: Full support added for *Hy4-preview* architecture (MLA + DSA sparse attention, iHC, gated MLA, sigmoid-gated MoE, MTP/NextN draft).  
  > 🔗 [PR #36805](https://github.com/sgl-project/sglang/pull/36805)  
- ✅ **T-Head PPU (ZW810/ZW810E/ZW-M890P)**: Roadmap initiated for first-class support in SGLang.  
  > 🔗 [Issue #37519](https://github.com/sgl-project/sglang/issues/37519)  
- ✅ **SenseNova-U1/U1.5**: Tracking issue open for feature parity with official reference implementation.  
  > 🔗 [Issue #37742](https://github.com/sgl-project/sglang/issues/37742)  
- ✅ **AMD ROCm**: Improved Kimi-K3 path for `qlen > 1` and gfx950 prefill optimization via Triton.  
  > 🔗 [PR #37601](https://github.com/sgl-project/sglang/pull/37601) | [PR #35770](https://github.com/sgl-project/sglang/pull/35770)

---

### **4. Performance & Optimization**  
- 🚀 **Decode Throughput Consistency**: Fixes underway to align `bench_serving` results with engine logs (#3050), improving benchmark reliability.  
- ⚙️ **Memory Efficiency**: Hybrid SWA full-side KV row frees now routed through `free_segment`, enabling unified cache management.  
  > 🔗 [PR #37876](https://github.com/sgl-project/sglang/pull/37876)  
- 🔥 **GPU Utilization**: ROCm DSA decode path optimized with fused metadata kernels; reduces redundant work in absorb path.  
  > 🔗 [PR #37124](https://github.com/sgl-project/sglang/pull/37124)  
- 📈 **Scheduler Visibility**: Exporting scheduler stage wall time for deeper profiling of scheduling bottlenecks.  
  > 🔗 [PR #37636](https://github.com/sgl-project/sglang/pull/37636)

---

### **5. Stability & Regressions**  
**Critical Crashes Reported (High Priority):**  
1. **Qwen3.8-Flash-Next FP8 KV Cache Crash**: Assertion failure in QSA sparse-attention path due to dtype mismatch (BF16 query vs FP8 K/V).  
   > 🔗 [Issue #36545](https://github.com/sgl-project/sglang/issues/36545)  
2. **CUDA Illegal Memory Access in QSA Prefill**: Hard crash at ~22 concurrent requests on H20 (TP8). Suppressed by `CUDA_LAUNCH_BLOCKING=1`.  
   > 🔗 [Issue #37633](https://github.com/sgl-project/sglang/issues/37633)  
3. **GLM-5.3-Flash Degenerates into '!' Output**: Multi-tool agentic prompts cause output corruption.  
   > 🔗 [Issue #36669](https://github.com/sgl-project/sglang/issues/36669)  
4. **DPFASHP Speculative Decoding Crash under PD Disaggregation**: `spec_info` is `None`, leading to watchdog self-kill.  
   > 🔗 [Issue #36140](https://github.com/sgl-project/sglang/issues/36140)  

✅ **Fixes in Progress**:  
- PD transfer engine init now bounded by `SGLANG_DISAGGREGATION_ENGINE_INIT_TIMEOUT` (60s default).  
  > 🔗 [PR #37874](https://github.com/sgl-project/sglang/pull/37874)

---

### **6. What This Means for Application Developers**  
- **Avoid `--kv-cache-dtype fp8_e4m3` with GLM-5.3-Flash or Qwen3.8-Flash-Next** until fixes land (#36545, #37633). Use BF16 if stability is critical.  
- **Enable `--enable-deterministic-inference` cautiously**: The current rejection sampling draws from global RNG—this will be fixed in #33395.  
- **Prepare for DeepSeek CP v1 deprecation**: Update configs to use `--cp-strategy zigzag` or `interleave` before next release.  
- **Monitor CI health**: Active maintenance mode (issue #21065) may delay PR validation—check status before merging.  
- **Use `--disable-overlap-schedule` temporarily** if encountering crashes in high-concurrency streaming scenarios.

> 💬 Join the discussion: [Slack](https://slack.sglang.ai/) | Track roadmap: [Issue #11857](https://github.com/sgl-project/sglang/issues/11857)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-09-04**

---

### **1. Today's Highlights**  
The latest updates focus on critical performance optimizations for speculative decoding and sparse attention across GPU backends, with significant improvements in Metal (sparse FA) and OpenCL (GEMV/MTP). A key fix resolves a full rebuild issue during development (`#28278`), improving build efficiency. Meanwhile, multiple stability reports surface for AMD Strix Halo (gfx1151) on ROCm/HIP and Vulkan, particularly affecting MoE and DFlash models.

---

### **2. Releases & Breaking Changes**  
- **No new release version** was published today.  
- **Build ID b10793** includes a fix to prevent full source code rebuilds on every commit ([#28278](https://github.com/ggml-org/llama.cpp/pull/28278)), improving local dev iteration speed.  
- **Note**: No API-breaking changes reported; all updates are non-breaking fixes or feature enhancements.

---

### **3. New Model & Hardware Support**  
- **GLM-5.3-Flash (GLM5-Next)** support added via PR [#27773](https://github.com/ggml-org/llama.cpp/pull/27773) — a 320B hybrid model with multimodal (text + vision) capabilities.  
- **Sparse Flash Attention (FA)** now supported on **Apple Metal** ([#28098](https://github.com/ggml-org/llama.cpp/pull/28098)) and **CUDA** ([#27970](https://github.com/ggml-org/llama.cpp/pull/27970)).  
- **Qwen3.8 DFlash/MTP** now supports sparse FA path via `n_kv_max` propagation in `build_attn_qsa` ([#28349](https://github.com/ggml-org/llama.cpp/pull/28349)).  
- **Snapdragon X Elite (Adreno X1)**: Vulkan backend now under active investigation due to `unpack8()` corruption issues ([#28290](https://github.com/ggml-org/llama.cpp/issues/28290)).

---

### **4. Performance & Optimization**  
- **Metal**: Sparse FA adds ~25% decode throughput gain on M2 Ultra for DSv4 models ([#28098](https://github.com/ggml-org/llama.cpp/pull/28098)).  
- **OpenCL**: GEMV and medium-batch GEMM optimizations enable faster speculative decoding (MTP) on Adreno GPUs ([#26477](https://github.com/ggml-org/llama.cpp/pull/26477)).  
- **CUDA/HIP**: MMVQ kernel now derives `nwarps` from runtime compute capability instead of hardcoded arch macros, fixing misalignment on gfx11-generic builds ([#28339](https://github.com/ggml-org/llama.cpp/pull/28339)).  
- **ROCm**: TOP_K kernels improved for gfx1151 (Strix Halo), reducing latency in top-k selection operations ([#28313](https://github.com/ggml-org/llama.cpp/pull/28313)).  
- **Multi-GPU CUDA**: Concurrent streams per split now enabled for multi-GPU setups, improving scalability ([#28198](https://github.com/ggml-org/llama.cpp/pull/28198)).

---

### **5. Stability & Regressions**  
High-severity regressions reported on **AMD Strix Halo (gfx1151)** systems:
- **HIP/ROCm** produces corrupted output for two dense architectures (e.g., Qwen3.8), while Vulkan works correctly ([#27579](https://github.com/ggml-org/llama.cpp/issues/27579)).  
- **MoE models** fail on RDNA3.5 since #27621 ([#28113](https://github.com/ggml-org/llama.cpp/issues/28113)).  
- **Qwen3.8 DFlash/MTP** emits out-of-bounds token ID `248320` (equal to vocab size) on Vulkan ([#28158](https://github.com/ggml-org/llama.cpp/issues/28158)).  
- **Vulkan**: `GGML_ASSERT(wg0 <= ctx->device->properties.limits.maxComputeWorkGroupCount)` failure on Intel Arc A770 ([#28247](https://github.com/ggml-org/llama.cpp/issues/28247)).  
- **Windows/Vulkan**: `llama-server` crashes with `0xC0000005` on default context checkpoints ([#27560](https://github.com/ggml-org/llama.cpp/issues/27560)).  

> ✅ *Fixes in progress*: Several PRs target these (e.g., [#28349](https://github.com/ggml-org/llama.cpp/pull/28349) for DFlash OOB token, [#28313](https://github.com/ggml-org/llama.cpp/pull/28313) for TOP_K).

---

### **6. What This Means for Application Developers**  
- **Use `--spec-type draft-mtp-adaptive`** (PR [#27210](https://github.com/ggml-org/llama.cpp/pull/27210)) for dynamic speculative depth tuning — ideal for variable-latency workloads.  
- **Leverage sparse FA** on Metal and CUDA for large-context models (e.g., Qwen3.8 DFlash) — expect up to 25% decode speedups.  
- **Avoid HIP/ROCm on gfx1151** for MoE/dense models until regression is fixed. Prefer Vulkan or CPU fallback.  
- **Disable `--split-mode tensor`** if using DFlash drafts on CUDA — known assertion failure ([#27858](https://github.com/ggml-org/llama.cpp/pull/27858)).  
- **Expect instability on Snapdragon X Elite** with Vulkan: avoid `unpack8()` paths until patch is merged ([#28290](https://github.com/ggml-org/llama.cpp/issues/28290)).  
- **Enable `--mmproj-evict-draft`** (PR [#28346](https://github.com/ggml-org/llama.cpp/pull/28346)) to manage VRAM pressure in multimodal apps.

> 🔗 [Official Website](https://llama.app) | [GitHub Repository](https://github.com/ggml-org/llama.cpp)

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-09-04**

---

### **1. Today's Highlights**  
The Ollama ecosystem continues to evolve with growing focus on stability, performance, and developer experience—especially around Apple Silicon (MLX), iGPU support, and agent workflows. Key developments include a critical fix for `Gemma 4 26B A4B` entering reasoning loops post-update, ongoing work to enforce `num_ctx` limits in MLX runners to prevent Metal watchdog panics, and new PRs enabling speculative decoding under structured output and improving memory efficiency for Qwen3.8 Flash Next models.

---

### **2. Releases & Breaking Changes**  
*None reported in the last 24 hours.*  
No new releases or breaking changes were published. However, several regressions were identified in v0.33.3, including model-specific reasoning loops and GPU fallback issues, suggesting potential instability in recent builds.

---

### **3. New Model & Hardware Support**  
- ✅ **GraniteForCausalLM architecture support added** via PR #17972: Enables use of IBM’s Granite 4.1 series models (`granite-4.1`) on MLX backend.  
- ✅ **Talos integration now supported** as an official `ollama launch` integration (PR #18093): Adds permission-gated personal agent capabilities with role-based access control.  
- ✅ **Non-root Linux installation now documented** (PR #18207): Manual install instructions now available without `sudo`, targeting shared/managed environments.  
- ⚠️ **AMD Radeon 680M iGPU still not reliably used** (Issue #9184): Despite HSA parameters, users report poor performance and slow loading; no resolution yet.

---

### **4. Performance & Optimization**  
- 📈 **Qwen3.8 Flash Next optimized for MLX**: PR #18078 introduces selective BF16 precision for key layers (QSA projections, MTP path), reducing memory pressure while maintaining generation quality—critical for long-context inference on Apple Silicon.  
- ⚡ **Speculative decoding enabled under structured output** (PR #18105): Allows faster token generation during grammar-guided responses, improving throughput by up to ~50% on dense 27B models.  
- 🔻 **High CPU usage observed**: Users report ~560% CPU utilization during token generation on Mac Studio M4 Max (Issue #18038), indicating a regression in `llama-server` performance.  
- 🧠 **Reasoning budget bounded per line** (PR #18212): Prevents mid-word truncation during thinking blocks, improving readability and predictability in agent workflows.

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Impact |
|---------|------|--------|--------|
| 🔴 High | `Gemma 4 26B A4B` enters infinite reasoning loop after update (v0.33.3) | Open (#18220) | Breaks agent tool calling; affects Cline/VSCODE workflows |
| 🔴 High | `deepseek-v4-flash:0731` loops indefinitely without `</think>` marker (Cloud) | Open (#17892) | Renders complex agent tasks unusable |
| 🔴 High | `glm-5.3:cloud` enters endless reasoning and aborts tasks | Open (#18193) | Production-grade agents fail; works fine on Z.AI API |
| 🟡 Medium | `Gemma4:e2b` crashes at startup with `GGML_ASSERT(n_inputs < GGML_SCHED_MAX_SPLIT_INPUTS)` | Open (#16506) | WSL2 Ubuntu 24.04 users blocked |
| 🟡 Medium | `--hidethinking` flag ineffective with `maternion/ling-3.0-tiny:8b-Q4_K_M` | Open (#18221) | Non-interactive CLI use broken |
| 🟡 Medium | Long-lived runner (`keep_alive=-1`) emits corrupted `<unused49>` tokens | Open (#18208) | Persistent corruption until restart |
| 🟡 Medium | macOS GPU reset leaves runner in broken state with empty responses | Open (#18213) | Requires full restart to recover |

> 💡 *Fixes are in progress:* PR #18212 (line-bound budgets), #18105 (speculative decoding), #18078 (memory optimization). No fixes yet for Gemma/DeepSeek/Glm looping bugs.

---

### **6. What This Means for Application Developers**  
- **Avoid v0.33.3 if using Gemma 4 26B A4B or DeepSeek/ glm-5.3 cloud models**—these exhibit severe reasoning loops that break agent logic. Pin to v0.33.2 temporarily.
- **Use `--hidethinking` cautiously**: It may be ineffective with certain quantized models (e.g., `ling-3.0-tiny`). Validate behavior in non-interactive pipelines.
- **Enable `OLLAMA_DEBUG_LOG_REQUESTS` only for debugging**: It logs full prompts unredacted—high risk for data exposure in production (Issue #18210 / #18211).
- **Optimize for Apple Silicon**: Use Qwen3.8 Flash Next with MLX backend for better memory efficiency and longer context handling.
- **Monitor GPU health**: On macOS, a GPU reset can leave the runner in a silent error state—implement retry logic or monitor `/api/generate` response validity.
- **Leverage new integrations**: Talos and agy (via PR #16329) expand CLI agent ecosystems—ideal for building self-hosted AI assistants.

> 🔗 [GitHub Issues](https://github.com/ollama/ollama/issues) | [Pull Requests](https://github.com/ollama/ollama/pulls)

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-09-04**

---

### **1. Today’s Highlights**  
The LiteLLM project is accelerating its strategic shift toward a high-performance, Rust-based inference gateway, with the official launch of the **Rust migration initiative (#31263)** now in early beta testing. This effort aims to reduce overhead to sub-1ms levels and unlock near-native performance for AI gateways. Simultaneously, significant progress has been made in proxy stability, including fixes for budget resets, trace routing, and pagination issues across the UI and backend.

---

### **2. Releases & Breaking Changes**  
- **v1.101.0-dev.2** released today with enhanced security via [Cosign-signed Docker images](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0), ensuring cryptographic integrity of all builds.  
- No breaking API changes reported in this release cycle; however, ongoing work on the **Rust migration** will likely introduce future-breaking changes—developers should monitor #31263 for migration guidance.  
- The `max_budget` reset behavior has been addressed in PRs like #39675 and #39654, improving reliability for cost-aware deployments.

---

### **3. New Model & Hardware Support**  
- **SGLang rerank endpoint support** added via PR #29156 (fix), enabling integration with advanced ranking pipelines.  
- **Fine-tuned Gemini endpoints** now properly supported in Vertex AI batch jobs via #39668, allowing users to leverage custom models in managed batch workflows.  
- **AWS External ID support** for Bedrock embeddings is now tracked in #27835 — pending implementation.  
- No new hardware backends (CUDA/ROCm/Metal/CPU) or quantization formats introduced today.

---

### **4. Performance & Optimization**  
- **Sub-1ms overhead target** announced via the Rust migration initiative (#31263), positioning LiteLLM as a low-latency inference gateway for real-time agent systems.  
- **Auto-router zero-setup configuration** (PR #39658) reduces configuration time and enables faster deployment of dynamic model routing.  
- **Fusion routers** (PR #39224) allow concurrent execution of multiple models per turn, improving response quality at the cost of higher compute use—ideal for multi-agent reasoning.  
- **In-container PgBouncer** (PR #39683) reduces database connection overhead in scaled deployments, preventing connection exhaustion under load.

---

### **5. Stability & Regressions**  
- **Critical**: `ResetBudgetJob` crashes globally when `budget_limits` are set (PR #27171). Fixed in PR #39671 (pooler fallback fix).  
- **High severity**: `/user/update` fails with 400 on `blocked` param due to missing DB column (#39564); workaround: avoid using `blocked`.  
- **Medium severity**: Streaming timeouts logged as success instead of failure (#29602) — affects observability and billing accuracy.  
- **UI regressions**: Pagination miscounts rows vs. sessions (#38060), table scrolling breaks sticky headers (#39684), and page size selectors missing (#39680). All fixed in recent PRs.  
- **Memory leaks post-OOM restart** observed in #38193 — persistent memory growth despite restarts; requires deeper investigation.

---

### **6. What This Means for Application Developers**  
- **Adopt the Rust gateway early**: If you're building latency-sensitive agents or real-time LLM applications, sign up for the [early beta](https://docs.google.com/forms/d/e/1FAIpQLSecWdOjkzjEson2UiZpD...) to test sub-1ms overhead and prepare for migration.  
- **Upgrade to v1.101.0-dev.2** to ensure image integrity via Cosign signatures—critical for production environments.  
- **Use fusion routers and auto-config** for complex agent workflows requiring dynamic model selection or multi-model concurrency.  
- **Avoid `blocked` field in user updates** until #39564 is resolved.  
- **Monitor logs closely** for streaming timeout misclassification and budget-related errors until fixes land in stable releases.  
- **Optimize database scaling** by enabling PgBouncer in containers (#39683) if running in Kubernetes or similar orchestration platforms.

> 🔗 *GitHub Links*:  
> - Rust Migration: [#31263](https://github.com/BerriAI/litellm/issues/31263)  
> - Budget Reset Fix: [#39671](https://github.com/BerriAI/litellm/pull/39671)  
> - Fusion Router: [#39224](https://github.com/BerriAI/litellm/pull/39224)  
> - Auto-Router Config: [#39658](https://github.com/BerriAI/litellm/pull/39658)  
> - PgBouncer: [#39683](https://github.com/BerriAI/litellm/pull/39683)

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# **Unsloth Digest – 2026-09-04**

---

### **1. Today's Highlights**  
The Unsloth ecosystem continues to mature with key improvements in model serving stability and UI responsiveness, particularly around AMD ROCm support and audio/LLM integration. Critical fixes are underway for memory leaks during image generation and model context handling in Deep Research workflows. Notably, PRs now enable per-request model switching for audio APIs and improve Docker portability across NVIDIA GPU generations.

---

### **2. Releases & Breaking Changes**  
*No new releases in the past 24 hours.*  
However, ongoing changes affect API behavior:
- **PR #10142** introduces stricter token enforcement for Hub write paths, requiring explicit Hugging Face tokens for API-key callers — a security hardening step that may impact existing automation pipelines.
- **PR #10257** prevents `unsloth chat` from reloading models already loaded in Studio, reducing unnecessary latency and warm-up cycles.

> 🔗 [PR #10142](https://github.com/unslothai/unsloth/pull/10142) | [PR #10257](https://github.com/unslothai/unsloth/pull/10257)

---

### **3. New Model & Hardware Support**  
- **AMD ROCm AOTriton Attention Gate**: Two major PRs (**#8323**, **#8821**) unlock high-performance attention kernels on AMD GPUs by enabling experimental PyTorch AOTriton support, resolving excessive VRAM usage (e.g., 16GB card requesting 66GiB).
- **Docker Multi-GPU Support**: **PR #5748** adds official Docker images supporting *all* NVIDIA GPUs from Ampere (sm_80) through Blackwell (sm_120), including aarch64 (Grace/GPU) variants.
- **Audio Model Routing**: **PR #10217** enables model-specific speech synthesis via `/v1/audio/speech`, allowing dynamic model loading based on request headers — essential for multi-modal agents.

> 🔗 [PR #8323](https://github.com/unslothai/unsloth/pull/8323) | [PR #5748](https://github.com/unslothai/unsloth/pull/5748) | [PR #10217](https://github.com/unslothai/unsloth/pull/10217)

---

### **4. Performance & Optimization**  
- **Memory Efficiency**: AMD GPU users report up to **~50% reduction in VRAM footprint** after applying AOTriton fixes (**#8323**, **#8821**), critical for low-memory systems.
- **Export Timeout Fix**: **PR #10258** removes arbitrary one-hour timeouts on exports, preventing premature worker termination during long-running tasks.
- **Model Reload Avoidance**: **PR #10257** eliminates redundant model reloads when using `unsloth chat` alongside an active Studio instance, improving cold-start performance.
- **Cache Management**: **PR #10188** moves regenerable caches (Torch, Triton, Numba) into the Studio root directory, simplifying deployment and debugging.

> 🔗 [PR #10258](https://github.com/unslothai/unsloth/pull/10258) | [PR #10188](https://github.com/unslothai/unsloth/pull/10188)

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Fix PR |  
|--------|------|--------|--------|  
| ⚠️ High | **Qwen3.8-27B V3 GGUF crashes on AMD** after prefill | Open (#9792) | Pending |  
| ⚠️ High | **Memory leak in Z-Image-Turbo** causing RAM growth → SIGKILL | Open (#10156) | In progress |  
| ⚠️ Medium | **Deep Research reports cut off at 16K tokens** | Open (#10254) | PR #10254 submitted |  
| ⚠️ Medium | **GPT-OSS-120b output format mismatch** | Open (#10252) | No fix yet |  
| ⚠️ Low | **Windows toolbar hidden by tooltips** | Open (#10226) | No fix yet |  

> 🔗 [Issue #9792](https://github.com/unslothai/unsloth/issues/9792) | [Issue #10156](https://github.com/unslothai/unsloth/issues/10156) | [PR #10254](https://github.com/unslothai/unsloth/pull/10254)

---

### **6. What This Means for Application Developers**  
- **Build robust agents on AMD**: Use **ROCm-enabled Docker images** and ensure AOTriton is enabled (`TORCH_ROCM_AOTRITON_ENABLE_EXPERIMENTAL=1`) to avoid VRAM overprovisioning.
- **Avoid model thrashing**: When integrating CLI tools with Studio, disable auto-reload via `--max-seq-length` override or use `unsloth chat` only when Studio is closed.
- **Handle long outputs safely**: For Deep Research workflows, expect truncated reports unless you patch the 16K limit (tracked in #10254).
- **Secure API access**: With the new HF token requirement on Hub writes, ensure your backend services explicitly authenticate — ambient tokens will no longer be inherited.
- **Support audio modalities**: Leverage **PR #10217** to route `/audio/speech` requests to specific speech models dynamically.

> ✅ **Recommendation**: Pin to stable versions until #9792 and #10156 are resolved; test audio and vision workflows on non-AMD systems until further notice.

---  
*Digest generated: 2026-09-04 | Source: [unslothai/unsloth GitHub](https://github.com/unslothai/unsloth)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*