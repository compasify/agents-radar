# AI Infrastructure Digest 2026-09-13

> Generated: 2026-09-13 00:29 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-09-13**

---

### **1. Ecosystem Overview**  
The AI inference and serving ecosystem is entering a phase of high specialization and hardware convergence, with deep optimization for next-generation GPUs (Blackwell sm_120/121, GB10, MI355X) driving innovation. Projects are diverging in focus: some prioritize low-latency, production-grade serving (vLLM, SGLang), others emphasize developer experience and agent workflows (Ollama, LiteLLM), while training-focused tools like Unsloth push boundaries in fine-tuning efficiency. A clear trend toward speculative decoding, MoE offloading, and structured output reliability underscores the shift from raw model performance to robust, scalable deployment—especially for agentic systems.

---

### **2. Activity Comparison**

| Project       | Issues Open (↑) | PRs Merged (↑) | Release Status       |
|---------------|------------------|------------------|------------------------|
| **vLLM**      | 87               | 42               | `v0.28.1rc1` → `v0.29.0` pending |
| **SGLang**    | 123              | 37               | No new release; stability issues critical |
| **llama.cpp** | 141              | 35               | `b10934`, `b10933`, `b10930` (beta builds) |
| **Ollama**    | 118              | 19               | No new release; several high-severity regressions |
| **LiteLLM**   | 134              | 24               | Stable v1.83.x; v1.84.0 regression unresolved |
| **Unsloth**   | 96               | 26               | No release; Docker fix #10825 critical |

> 🔺 *Note*: High activity correlates with complex hardware integration (e.g., Blackwell, GB10) and agent workflow maturity. Ollama and LiteLLM show strong community engagement but lag in stability fixes.

---

### **3. Model Support Race**

| Model / Architecture           | vLLM     | SGLang   | llama.cpp | Ollama   | LiteLLM         | Unsloth       |
|-------------------------------|----------|----------|-----------|----------|------------------|----------------|
| **DeepSeek-V4.1-Flash**       | ✅ Finalizing | ✅ SM121 support | ❌ (GPU fallback) | ⚠️ Context overflow | ✅ via provider | 🟡 Requested (#10838) |
| **Qwen3.5 / Qwen4Exp**        | ✅ Supported | ✅ Supported | ⚠️ MTP slowdown | ✅ Supported | ✅ Supported | ✅ Supported |
| **Gemma 4 E4B Multimodal**    | ✅ Supported | ✅ Supported | ✅ Supported | ❌ OOM on Jetson | ✅ Supported | ✅ Supported |
| **MoE Models (WNA16 INT4)**   | ✅ Offload RFC | ✅ DeepGEMM backend | ❌ Silent corruption | ✅ Supported | ✅ Supported | ✅ EXL3 support |
| **Blackwell (sm_120/121)**     | 🚧 DFlash2 crash | 🔴 FP8 correctness bugs | ✅ CUDA fallback | ⚠️ Context bleed | ✅ Gateway support | ✅ ROCm/Docker support |

> 🏆 **Leader**: **vLLM** leads in model-specific optimization (e.g., DeepSeek-V4.1 Flash), especially for speculative decoding and MoE.  
> 🥈 **Runner-up**: **SGLang** is fastest in enabling Blackwell-specific features (FP8, VibeCUDA), though plagued by correctness issues.  
> 🛠 **Niche Innovator**: **Unsloth** stands out with EXL3 quantization and AMD ROCm Docker support—ideal for edge and research use cases.

---

### **4. Performance Frontier**

| Focus Area                  | vLLM                     | SGLang                    | llama.cpp             | Ollama               | LiteLLM                 | Unsloth               |
|----------------------------|--------------------------|---------------------------|------------------------|----------------------|--------------------------|------------------------|
| **KV Cache Optimization**   | mHC fusion, SWA tuning   | Unified KV cache (FP8)    | —                      | Session metadata     | Live model discovery     | —                      |
| **Batching & Invariance**   | Batch-invariant inference | Session ID routing        | —                      | Context truncation   | Budget-aware routing     | Prompt progress UI     |
| **Quantization Efficiency** | Marlin W4A8-FP8          | FP8 two-pool cache        | IQ quants (fallback)   | —                    | Cost tracking            | EXL3 (2–8-bit MoE)     |
| **Distributed Serving**     | Async TP + SP            | GPU cache + async pipeline| —                      | —                    | Multi-provider gateway   | —                      |
| **Kernel-Level Tuning**     | DFlash2, HiSparse P/D     | MLA target reuse, FP8 GEMM | CUDA graph hangs       | Vulkan slowdown      | JWT claim flexibility    | TRL patch fixes        |

> 🔍 **Trend**: The frontier is shifting from general throughput to **hardware-specific kernel tuning**, **structured output integrity**, and **distributed state management**—especially for agents using speculative decoding and tool calling.

---

### **5. Layer Positioning**

| Project       | Primary Layer                     | Key Differentiator                                  |
|---------------|------------------------------------|-----------------------------------------------------|
| **vLLM**      | **Inference Engine**               | Highest throughput, optimized for H20/GB10, MoE offloading |
| **SGLang**    | **Inference Engine + Agent Runtime** | Advanced speculative decoding, session-aware routing |
| **llama.cpp** | **Local Runtime / Edge Backend**   | Cross-platform, CPU/GPU hybrid, lightweight tooling |
| **Ollama**    | **Developer Gateway / Local CLI**  | Simple UX, agent-first design, web UI integration |
| **LiteLLM**   | **Orchestration & Gateway Layer**  | Multi-provider routing, cost budgeting, live discovery |
| **Unsloth**   | **Fine-Tuning & Training Platform**| Fast LoRA SFT, Docker Studio, EXL3 quantization |

> 💡 **Strategic Insight**: The stack is becoming modular: **engine** (vLLM/SGLang) → **runtime** (llama.cpp) → **gateway/orchestrator** (LiteLLM) → **training layer** (Unsloth). Developers now compose pipelines across these layers.

---

### **6. Trend Signals**

1. **Hardware-Specific Crashes Are the New Bottleneck**:  
   - GB10 (sm_121a), Blackwell (sm_120/121), and AMD MI355X are revealing deep kernel-level incompatibilities (e.g., FP8 corruption, CUDA graph failures).  
   → *Watch*: Projects shipping stable kernels per architecture—not just model support.

2. **Speculative Decoding Is Now Production-Critical, Not Experimental**:  
   - All major engines (vLLM, SGLang, Ollama) are investing heavily in DFlash2, MTP, and MLA optimizations.  
   → *Watch*: Stability of draft acceptance logic and token consistency under long context.

3. **Structured Outputs Are the New QA Metric**:  
   - JSON schema, grammar-based parsing, and tool call ordering are failing silently (e.g., `json_object`, `anyOf` serialization).  
   → *Watch*: Validate output fidelity—not just speed—when using agent workflows.

4. **Budget Enforcement Is Broken in Multi-Provider Systems**:  
   - LiteLLM’s `model_max_budget` bypasses shared Redis spend, risking overbilling across replicas.  
   → *Watch*: Implement external monitoring until [#33325](https://github.com/BerriAI/litellm/issues/33325) is resolved.

5. **Agent Workflows Require End-to-End Validation**:  
   - From model loading (Ollama `qwen3.8`) to tool emission order (Ollama #18411) to reasoning state (LiteLLM #40887), the chain is fragile.  
   → *Watch*: Test full agent loops—not individual components.

---

> ✅ **Actionable Takeaways for Developers**:  
> - **For production inference**: Pin to `v0.28.1rc1` (vLLM) or `v1.83.x` (LiteLLM) until stability fixes land.  
> - **For agent apps**: Avoid `--moe-runner-backend deep_gemm` (SGLang), `max_num_seqs > 256` (vLLM), and `qwen3.8` (Ollama) until regressions are patched.  
> - **For edge/fine-tuning**: Use Unsloth’s EXL3 backend and AMD Docker image for memory-constrained or ROCm environments.  
> - **For multi-provider gateways**: Monitor LiteLLM’s budget enforcement and implement rate limiting at the API level.

*Data source: GitHub digests, PRs, and issue trackers as of 2026-09-13.*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

---

### **vLLM Digest — 2026-09-13**

---

#### **1. Today's Highlights**  
The vLLM project is intensifying its focus on **DeepSeek-V4.1-Flash** support across multiple frontends, with critical performance and stability fixes for high-concurrency workloads on H20 and GB10 hardware. Concurrently, key optimizations are advancing in speculative decoding (DFlash2), MoE expert offloading, and batch-invariant inference—critical for production-grade LLM serving at scale.

---

#### **2. Releases & Breaking Changes**  
*None reported in the last 24 hours.*  
No new releases or breaking API/config changes were published. The latest stable release remains `v0.28.1rc1`, with ongoing work toward `v0.29.0`.

---

#### **3. New Model & Hardware Support**  
- ✅ **DeepSeek-V4.1-Flash**: Full support now being finalized via PRs like [#56227](https://github.com/vllm-project/vllm/pull/56227) (SWA-bounded replay) and [#56633](https://github.com/vllm-project/vllm/pull/56633) (mHC post-block fusion).  
- 🚧 **SM8x (Ampere: A100/A800/RTX 30xx)**: Active feature request [#50576](https://github.com/vllm-project/vllm/issues/50576) for DeepSeek-V4-Flash support—currently blocked due to kernel compatibility.  
- 🌐 **ROCm (AMD MI355X)**: Performance optimization efforts underway for DeepSeek-V4.1-Flash ([#56506](https://github.com/vllm-project/vllm/issues/56506)), including CI improvements ([#51057](https://github.com/vllm-project/vllm/issues/51057)) and model-specific tuning.  
- 🔧 **GB10 (sm_121a)**: Multiple issues reported on GB10 (e.g., [#56461](https://github.com/vllm-project/vllm/issues/56461), [#56457](https://github.com/vllm-project/vllm/issues/56457)) affecting DFlash2, Qwen4Exp, and SWA cache behavior—indicating early-stage hardware-specific challenges.

---

#### **4. Performance & Optimization**  
- ⚡ **Speculative Decoding (DFlash2)**:  
  - PR [#56633](https://github.com/vllm-project/vllm/pull/56633): Merges mHC post-block into delayed pre-projection—reduces redundant kernel launches in DSv4.1.  
  - PR [#56464](https://github.com/vllm-project/vllm/pull/56464): Integrates **DeepSelect TopK** for sparse attention, enabling faster, selectable top-k routing.  
- 📈 **MoE & Offloading**:  
  - RFC [#38256](https://github.com/vllm-project/vllm/issues/38256): Incremental MoE expert offloading with GPU cache + async pipeline—enables running large MoE models on smaller GPUs.  
- 🔄 **Batch Invariance**:  
  - Issue [#27433](https://github.com/vllm-project/vllm/issues/27433) tracks ongoing work to stabilize batch-invariant inference; recent regression detected when SP/async TP enabled ([#56370](https://github.com/vllm-project/vllm/issues/56370)).  
- 📊 **Throughput Gains**:  
  - PR [#55398](https://github.com/vllm-project/vllm/pull/55398): HiSparse P/D transfers now land directly on GPU when possible—reduces host memory bottlenecks.  
  - PR [#53867](https://github.com/vllm-project/vllm/pull/53867): Enables FULL CUDA graphs for decode-only mode in PCP, improving throughput consistency.

---

#### **5. Stability & Regressions**  
- 🔥 **Critical Crashes**:  
  - [#56389](https://github.com/vllm-project/vllm/issues/56389): Illegal memory access in `dsv4_topk` MoE kernel under high concurrency on **H20 (SM90)**—mitigated by limiting `max_num_seqs=256`.  
  - [#56461](https://github.com/vllm-project/vllm/issues/56461): Kernel crashes on **GB10 (sm_121a)** due to mismatched cache block/page sizes (SWA vs. DeepGEMM).  
- ❌ **Correctness Bugs**:  
  - [#55927](https://github.com/vllm-project/vllm/issues/55927): Deterministic wrong token output in DeepSeek-V4-Flash-0731 at specific prompt lengths (mod 4), reproducible across providers.  
  - [#53777](https://github.com/vllm-project/vllm/issues/53777): DFlash2 + xgrammar fails deterministically on `json_object` grammar due to FSM advance failure.  
  - [#56605](https://github.com/vllm-project/vllm/issues/56605): GLM-5.3-Flash degenerates into repeated-token "word salad" in agentic workflows.  
- ⚠️ **Silent Corruption**:  
  - [#49546](https://github.com/vllm-project/vllm/issues/49546): `VLLM_MARLIN_INPUT_DTYPE=fp8` silently corrupts output on GB10 with WNA16 INT4 MoE—kernel runs ~2.5% faster but emits endless `</think>` loops.

---

#### **6. What This Means for Application Developers**  
- **Avoid `max_num_seqs > 256`** when using DeepSeek-V4.1-Flash on H20 until [#56389] is resolved.  
- **Use `VLLM_BATCH_INVARIANT=1` cautiously**—it’s broken when sequence parallelism is enabled ([#56370]), which may affect deterministic inference in multi-GPU setups.  
- **Monitor quantization choices carefully**: FP8 Marlin (W4A8-FP8) can cause silent corruption on GB10 ([#49546]); prefer verified quantizations like NVFP4 or use CPU-based fallbacks.  
- **Enable structured outputs (e.g., `json_object`) only after testing DFlash2 + xgrammar**—current behavior is unstable ([#53777]).  
- **Plan for hardware-specific tuning**: GB10 and AMD MI355X show unique performance cliffs—use dedicated profiling and consider disabling speculative decoding at long contexts if needed ([#54691]).

> 💡 *Pro Tip*: For production deployments, pin to `v0.28.1rc1` or wait for `v0.29.0` until these regressions are patched. Use `--disable-log-stats` and `--disable-microbatch` during debugging to isolate engine-level issues.

---  
*Data source: [vLLM GitHub](https://github.com/vllm-project/vllm)*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest — 2026-09-13

---

### **1. Today's Highlights**  
SGLang continues to advance speculative decoding and Blackwell GPU support, with critical fixes for DeepSeek-V4.1 inference correctness on SM121 (GB10), including FP8 GEMM precision issues and CUDA graph capture failures. A major PR (#39232) optimizes TRTLLM MLA target verification by reusing fused FP8 KV/Q preparation, improving speculative decode efficiency. Meanwhile, CI stability remains a focus, with ongoing tracking of flaky tests and infrastructure issues.

---

### **2. Releases & Breaking Changes**  
*None reported in the last 24 hours.*  
No new releases or breaking API/config changes were merged today. The project maintains backward compatibility, though several high-severity bugs (e.g., #39193, #39226) may impact users relying on `--moe-runner-backend deep_gemm` or FP8 quantization on Blackwell GPUs.

---

### **3. New Model & Hardware Support**  
- ✅ **Blackwell (SM121/120)**: Enhanced support via multiple PRs:
  - Integration of **VibeCUDA MSA provider** for Blackwell (`#39233`) — enables efficient offloading and fail-closed routing.
  - **FP8 two-pool unified_kv cache** enabled on AMD gfx950 (`#37413`).
  - **DeepSeek-V4.1** now supports `--moe-runner-backend deep_gemm` on SM121, though it requires careful validation due to recent kernel-level crashes (`#39226`, `#39193`).
- ✅ **AMD ROCm**: Continued work on gfx942 DSA fusion decoupling (`#39243`) and unified KV cache support (`#37413`).
- ✅ **MiniMax H3 GGUF**: Partial support added; note that Conv3D patch embedding loading still fails (`#38904`).

> 🔗 [PR #39233](https://github.com/sgl-project/sglang/pull/39233) | [PR #37413](https://github.com/sgl-project/sglang/pull/37413)

---

### **4. Performance & Optimization**  
- 🚀 **Speculative Decoding Efficiency**: PR #39232 reuses fused FP8 KV/Q preparation during TRTLLM MLA target verification, eliminating redundant kernel launches and reducing decode overhead.
- ⚡ **Diffusion Inference**: PR #34122 enables vectorized JointThreshold decoding on CUDA, replacing per-row Python execution to reduce serialization and host-device sync latency at scale.
- 💾 **Memory Pooling**: PR #37382 adds NPU-host memory cache management for DeepSeek-V4, enabling better control over offloaded KV states.
- 📈 **Batching & Routing**: PR #37482 introduces `session_id` metadata for KV cache blocks, enabling external routers to track session-specific state and improve batching fairness.

> 🔗 [PR #39232](https://github.com/sgl-project/sglang/pull/39232) | [PR #34122](https://github.com/sgl-project/sglang/pull/34122)

---

### **5. Stability & Regressions**  
Critical stability issues reported today:

| Severity | Issue | Impact | Fix Status |
|--------|------|-------|-----------|
| 🔴 High | [#39193](https://github.com/sgl-project/sglang/issues/39193) | FP8 `wo_a` absorb GEMM returns **~25% wrong results** on SM121 when `DEEPGEMM_SCALE_UE8M0=false` — silent failure, no error. | ❌ Not yet fixed |
| 🔴 High | [#39226](https://github.com/sgl-project/sglang/issues/39226) | `deep_gemm` backend loads weights but fails during CUDA graph capture due to layout assertion (`layout.hpp:108`). | ❌ Not yet fixed |
| 🔴 High | [#39173](https://github.com/sgl-project/sglang/issues/39173) | Engram + Flash + DeepSeek-V4.1 profiled SPS table dies in CUDA graph capture with "one equal block per request" error. | ❌ Not yet fixed |
| 🟡 Medium | [#39235](https://github.com/sgl-project/sglang/issues/39235) | DeepSeek-V4 decode pads `q` to 64 heads on SM120, causing **0.5% decode step loss** despite bit-identical kernels. | ⚠️ Under review |
| 🟡 Medium | [#39087](https://github.com/sgl-project/sglang/issues/39087) | Quantized DFlash2 draft yields ~0% acceptance silently — no warnings or errors. | ❌ Not yet fixed |

> 🔗 [Issue #39193](https://github.com/sgl-project/sglang/issues/39193) | [Issue #39226](https://github.com/sgl-project/sglang/issues/39226)

---

### **6. What This Means for Application Developers**  
- **Avoid `--moe-runner-backend deep_gemm`** on Blackwell (SM121) until #39226 and #39193 are resolved — expect silent correctness failures.
- **Validate FP8 quantization settings carefully**, especially if using non-UE8M0 scales — current behavior can introduce up to **25% output error**.
- Use `session_id` metadata (via PR #37482) to enable advanced KV cache routing and agent session persistence.
- For diffusion workflows, ensure E2E metrics are included in CI — PR #39206 enforces this as terminal.
- Monitor CI health via #17050: **3 broken, 9 flaky tests** remain active; expect intermittent pipeline instability.

> 🔗 [CI Tracking Issue #17050](https://github.com/sgl-project/sglang/issues/17050) | [Discussion: SGLang Slack](https://slack.sglang.io)

---  
*Digest generated: 2026-09-13 | Source: [github.com/sgl-project/sglang](https://github.com/sgl-project/sglang)*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-09-13**

---

### **1. Today's Highlights**  
The latest updates focus on critical stability fixes for GPU backends (CUDA, Vulkan, ROCm) and improved JSON schema handling in tool calling workflows. Notable progress includes support for dot-notation integer literals in Jinja templates and a key fix for IQ quants on Blackwell GPUs (sm_120), which was causing incorrect results. The community continues to address performance regressions affecting large models like Qwen3.5 and MTP speculative decoding.

---

### **2. Releases & Breaking Changes**  
- **`b10934`**: Introduces `common_schema` internal representation for JSON schemas, enabling better type resolution and optimization in `json-schema-to-grammar`. This is a foundational change that may affect custom tool parsers. [PR #28736](https://github.com/ggml-org/llama.cpp/pull/28736)  
- **`b10933`**: Adds support for dot-property integer literals in Jinja templates (e.g., `{% set x = [1,2,3].0 %}`), improving compatibility with complex tool call schemas. [PR #28817](https://github.com/ggml-org/llama.cpp/pull/28817)  
- **`b10930`**: Fixes model download limits in server mode, resolving issue #26809 where concurrent downloads could be blocked. [PR #28530](https://github.com/ggml-org/llama.cpp/pull/28530)  
- **`b10926`**: Gracefully handles unsupported `tq1_0` quantizations, preventing crashes during model loading. [PR #28681](https://github.com/ggml-org/llama.cpp/pull/28681)

---

### **3. New Model & Hardware Support**  
- **Model Support**: Added ELMOD 2.7b (GPTNeoX-based German research model) via PR #28818.  
- **Hardware Backends**:  
  - AMD GCN-specific config added for HIP backend (`ggml-cuda: hip add specific config table for AMD GCN`) — improves compatibility with newer AMD cards. [PR #27841](https://github.com/ggml-org/llama.cpp/pull/27841)  
  - **Blackwell (sm_120)**: CUDA now falls back to cuBLAS for IQ1_S, IQ2_XXS/XS/S, IQ3_XXS/S, IQ4_XS/NL quants to avoid incorrect outputs. [PR #28823](https://github.com/ggml-org/llama.cpp/pull/28823)  
- **Quantization**: No new quant formats added; however, `tq1_0` now handled gracefully (non-fatal).

---

### **4. Performance & Optimization**  
- **Qwen3.5 on RTX 5090**: Reported 28% of memory bandwidth utilization on Windows (vs 86% on RTX 4090 Linux). Likely due to suboptimal kernel dispatch or MTP path inefficiencies. [Issue #28196](https://github.com/ggml-org/llama.cpp/issues/28196)  
- **MTP Speculative Decoding**: On Windows MSVC + CUDA 12.8, `--spec-type draft-mtp` causes ~57x prefill slowdown (32.7 tok/s vs 1867 tok/s). Official builds (Clang + CUDA 13.3) do not exhibit this. [Issue #28790](https://github.com/ggml-org/llama.cpp/issues/28790)  
- **CUDA Graphs**: Hangs GPU channel (RC watchdog + Xid 8) on RTX 5090 Laptop (sm_120); workaround: `GGML_CUDA_DISABLE_GRAPHS=1`. [Issue #27330](https://github.com/ggml-org/llama.cpp/issues/27330)  
- **Vulkan RDNA3**: Severe prompt processing slowdown after `b10780`. [Issue #28752](https://github.com/ggml-org/llama.cpp/issues/28752)  

---

### **5. Stability & Regressions**  
- **Critical Crashes**:  
  - **CUDA**: `rocWMMA` removal regressed prompt processing up to 2x on RDNA4 (`gfx1201`). Native `fattn-mma-f16` kernel is slower at deep context. [Issue #26220](https://github.com/ggml-org/llama.cpp/issues/26220)  
  - **ROCm**: `libhipblas.so.3` missing error on ROCm 7.14. [Issue #25807](https://github.com/ggml-org/llama.cpp/issues/25807)  
  - **SYCL**: `-cb` flag pins Intel Arc Battlemage GPU at full power state, preventing idle savings. [Issue #24946](https://github.com/ggml-org/llama.cpp/issues/24946)  
- **Correctness Bugs**:  
  - **Tool Parsing**: Qwen3 Coder `anyOf` object args serialized as strings instead of nested JSON. [PR #26833](https://github.com/ggml-org/llama.cpp/pull/26833)  
  - **Reasoning Budget**: Premature deactivation before prompt processing. [Issue #25067](https://github.com/ggml-org/llama.cpp/issues/25067)  
- **Fixes in Progress**:  
  - `tq1_0` quants now fail gracefully. [PR #28681](https://github.com/ggml-org/llama.cpp/pull/28681)  
  - K/V state cleanup after failed restores. [PR #27530](https://github.com/ggml-org/llama.cpp/pull/27530)  

---

### **6. What This Means for Application Developers**  
- **Use `GGML_CUDA_DISABLE_GRAPHS=1`** if running on RTX 5090 (sm_120) until kernel optimizations land.  
- **Avoid MTP speculation on Windows MSVC builds** — expect severe prefill degradation; use official Clang builds instead.  
- **Update Jinja templates** to leverage dot-property integer literals (e.g., `.0`, `.1`) for cleaner tool argument access.  
- **Monitor `common_schema` changes** — upcoming schema-driven tool parsing improvements will enable more robust agent behavior.  
- **Check for `tq1_0` support** in your model pipelines; while no longer crashing, it may fall back to CPU.  
- **Prefer `--skip-chat-parsing`** when building custom tool integrations to bypass default parser logic. [PR #20289](https://github.com/ggml-org/llama.cpp/pull/20289)  

> ✅ **Recommendation**: For production inference on new hardware (especially Blackwell), stick to stable releases and test with `GGML_CUDA_DISABLE_GRAPHS=1` and `GGML_CUDA_FA_ALL_QUANTS=ON` enabled.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-09-13**

---

### **1. Today's Highlights**  
Critical fixes for model inference stability and streaming correctness were proposed in PRs addressing `qwen3.8` context overflow issues (#17894), improper tool call ordering during web search (#18413), and malformed JSON parsing in Gemma 4 tool schemas (#18400, #18398). These improvements are essential for reliable agent-based workflows and structured output generation.

---

### **2. Releases & Breaking Changes**  
*No new releases or breaking changes detected in the last 24 hours.*  
However, ongoing work on model versioning and API behavior (e.g., `OLLAMA_CONTEXT_SHIFT`, #18399) may introduce backward-incompatible behaviors in future versions — developers should monitor [issue #18414](https://github.com/ollama/ollama/issues/18414) for undocumented model-specific Ollama version requirements.

---

### **3. New Model & Hardware Support**  
- **Model Support**:  
  - *Hy4-preview* model request submitted ([#18287](https://github.com/ollama/ollama/issues/18287)), pending official integration.  
  - *Gemma 4 E4B multimodal* support reported to fail on Jetson Orin Nano 8GB due to projector OOM ([#18396](https://github.com/ollama/ollama/issues/18396)).  

- **Hardware Backends**:  
  - ROCm backend instability observed on AMD Strix Halo iGPU (gfx1151): KV state bleeding across requests ([#17847](https://github.com/ollama/ollama/issues/17847)).  
  - Linux hybrid GPU systems (Intel iGPU + NVIDIA RTX 4080) experience `SIGABRT` crashes during device loading ([#18412](https://github.com/ollama/ollama/issues/18412)).

---

### **4. Performance & Optimization**  
- **Memory Efficiency**:  
  - Unquantized F16 model blobs remain in `blobs/` after `--quantize` (`q4_K_M`) due to unreferenced files ([#18416](https://github.com/ollama/ollama/issues/18416)). This can cause ~50 GB of unused storage per 26B model import.  
  - Sustained `/api/embed` load exhausts loopback ports on Windows due to disabled keep-alive in llama-server HTTP client ([#18392](https://github.com/ollama/ollama/issues/18392)).

- **Latency & Throughput**:  
  - Context truncation silently drops messages without user feedback ([#14259](https://github.com/ollama/ollama/issues/14259)).  
  - Tool call emission order breaks Codex-style replay when reasoning is incomplete ([#18411](https://github.com/ollama/ollama/issues/18411)).

---

### **5. Stability & Regressions**  
| Severity | Issue | Description | Fix Status |
|---------|------|-------------|------------|
| High | [#17778](https://github.com/ollama/ollama/issues/17778) | `qwen3.8`: `500: no user query found in messages` during tool loops | ✅ PR #17894 in progress |
| High | [#17847](https://github.com/ollama/ollama/issues/17847) | ROCm iGPU: KV state bleed across requests | ⚠️ No fix yet |
| High | [#18396](https://github.com/ollama/ollama/issues/18396) | Jetson Orin Nano: Gemma 4 E4B projector causes host OOM | ⚠️ No fix yet |
| Medium | [#18412](https://github.com/ollama/ollama/issues/18412) | Linux hybrid GPU: `SIGABRT` on startup | ⚠️ No fix yet |
| Medium | [#18411](https://github.com/ollama/ollama/issues/18411) | Tool calls emitted before reasoning completion | ✅ PR #18413 in progress |
| Medium | [#18392](https://github.com/ollama/ollama/issues/18392) | Loopback port exhaustion under bulk embed load | ⚠️ No fix yet |

---

### **6. What This Means for Application Developers**  
- **Agent Workflows**: Avoid `qwen3.8` and `gemma3:12b` in long-running tool loops until PRs #17894 and #18413 land — they risk silent failures or malformed outputs.  
- **Structured Output**: Be cautious with double-quoted terms in inputs using `gemma3:12b` (`#18094`) — responses may truncate prematurely.  
- **Embedding Pipelines**: On Windows, expect intermittent `HTTP 400` errors under high-throughput embedding loads (`#18392`). Consider rate limiting or connection pooling.  
- **Deployment Planning**: Avoid ROCm on gfx1151 (Strix Halo) and Jetson Orin Nano 8GB for multimodal models until stability fixes are released.  
- **Storage Management**: After quantizing models, manually clean up leftover F16 blobs in `~/.ollama/models/blobs/` to prevent disk bloat (`#18416`).  

> 💡 **Pro Tip**: Monitor [PR #18413](https://github.com/ollama/ollama/pull/18413) and [PR #17894](https://github.com/ollama/ollama/pull/17894) for immediate improvements in tool-call reliability and chat streaming robustness.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

---

### **1. Today's Highlights**  
LiteLLM continues to evolve as a critical inference and orchestration layer for LLM applications, with today’s focus on **security hardening**, **budgeting reliability**, and **gateway integration improvements**. Key developments include PRs addressing request ID propagation in error responses, enhanced JWT claim flexibility, and live model discovery for third-party gateways—critical for multi-provider deployments.

---

### **2. Releases & Breaking Changes**  
*None reported in the last 24 hours.*  
No new releases or breaking changes were published. Users should monitor the [v1.84.0 regression](https://github.com/BerriAI/litellm/issues/28206) affecting Vertex AI health checks, which remains unresolved but is actively discussed.

---

### **3. New Model & Hardware Support**  
- ✅ **Tencent TokenHub** added to provider dropdown via [#40924](https://github.com/BerriAI/litellm/pull/40924), enabling easier integration with Tencent’s OpenAI-compatible API.
- ✅ **Live model catalog discovery** now supports dynamic metadata (pricing, context window, modalities) for gateway providers through [#40928](https://github.com/BerriAI/litellm/pull/40928).
- 🔜 **Cohere Command A+**, **Mistral Document AI OCR**, and **Mistral 3.5 Medium** are pending Azure support ([#32628](https://github.com/BerriAI/litellm/issues/32628), [#32637](https://github.com/BerriAI/litellm/issues/32637)) — currently blocked by backend integration work.
- 🔜 **OpenRouter video generation models** remain unsupported ([#27724](https://github.com/BerriAI/litellm/issues/27724)) despite upstream availability.

---

### **4. Performance & Optimization**  
- 🚀 **Cost tracking optimization**: Two PRs ([#40922](https://github.com/BerriAI/litellm/pull/40922), [#40912](https://github.com/BerriAI/litellm/pull/40912)) address high-volume logging failures due to Redis timeouts, reducing log noise and improving stability under burst loads.
- ⚙️ **Tool call efficiency**: [#40918](https://github.com/BerriAI/litellm/pull/40918) fixes incorrect tool choice handling in `gpt-5.4+/gpt-6` responses via the Responses bridge, preventing client misinterpretation of agent behavior.
- 💡 **Budget reservation precision**: [#35524](https://github.com/BerriAI/litellm/issues/35524) highlights a gap where budget reservations are skipped when cost can’t be estimated—impacting cost control for complex or non-standard models.

---

### **5. Stability & Regressions**  
| Issue | Severity | Status | Fix PR? | Link |
|------|----------|--------|---------|------|
| `AnthropicException 400` due to `vector_store_ids` | High | Open | ❌ | [#23741](https://github.com/BerriAI/litellm/issues/23741) |
| Vertex AI models marked "Unhealthy" post-v1.84.0 | High | Closed | ✅ (partial) | [#28206](https://github.com/BerriAI/litellm/issues/28206) |
| Self-hosted install fails due to `prisma generate` block | Medium | Open | ❌ | [#26097](https://github.com/BerriAI/litellm/issues/26097) |
| Responses-to-Chat streaming loses reasoning state | Medium | Open | ❌ | [#40887](https://github.com/BerriAI/litellm/issues/40887), [#40854](https://github.com/BerriAI/litellm/issues/40854) |
| `model_max_budget` bypasses shared Redis spend | Critical | Open | ❌ | [#33325](https://github.com/BerriAI/litellm/issues/33325) |

> 🔥 **Critical Concern**: Multiple budget enforcement issues (e.g., [#33325](https://github.com/BerriAI/litellm/issues/33325), [#36940](https://github.com/BerriAI/litellm/issues/36940)) indicate risk of **overbilling** and **budget exhaustion across replicas**, particularly in distributed proxy setups.

---

### **6. What This Means for Application Developers**  
- **Use caution with budgeting** in production: The current implementation of `model_max_budget` and `max_budget` may allow overspending due to pod-local state inconsistency. Monitor spend logs closely and avoid relying solely on these checks until [#33325](https://github.com/BerriAI/litellm/issues/33325) and [#36940](https://github.com/BerriAI/litellm/issues/36940) are resolved.
- **Ensure consistent routing logic**: If using the `responses` endpoint or agent workflows, verify that reasoning outputs aren’t being dropped during streaming—this impacts debugging and agent traceability.
- **Leverage new discovery features**: Use the live catalog support ([#40928](https://github.com/BerriAI/litellm/pull/40928)) to dynamically discover models from external gateways like Merge or Starveri, improving agility in multi-provider setups.
- **Security-first deployment**: Address the root cause of [#35536](https://github.com/BerriAI/litellm/issues/35536) (unauthorized access to raw response IDs) if your app handles sensitive data or uses public-facing endpoints.

> ✅ **Recommendation**: Pin to stable versions (e.g., v1.83.x) until v1.85.0 stabilizes. Review all open budget and security issues before deploying to production.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-09-13**

---

### **1. Today's Highlights**  
Unsloth continues to expand its support for advanced inference and fine-tuning workflows, with key improvements in model serving stability and multi-backend compatibility. Critical fixes have been merged to restore GPU training in Docker Studio and prevent crashes during model loading on AMD ROCm systems, while new features enable better control over tool call deduplication and MCP integration.

---

### **2. Releases & Breaking Changes**  
*No new releases were published in the last 24 hours.*  
However, **PR #10825** (`docker/unsloth:latest`): Fixes a critical regression where `UNSLOTH_ALLOW_CPU=1` disabled TRL patches on GPU hosts, breaking all training workflows. This fix restores functionality for GPU-based training in the official Docker image.  
👉 [PR #10825 – Fix GPU training in Docker Studio](https://github.com/unslothai/unsloth/pull/10825)

---

### **3. New Model & Hardware Support**  
- **AMD ROCm Support**: PR #10820 adds a dedicated Docker image for AMD GPUs (RDNA2–RDNA4, CDNA), enabling full support on Windows and Linux with ROCm.  
  👉 [PR #10820 – Add AMD ROCm image](https://github.com/unslothai/unsloth/pull/10820)  
- **EXL3 Quantization Backend**: PR #7115 introduces ExLlamaV3 (EXL3) as an alternative quantization backend with support for 2/3/4/6/8-bit and MoE models—ideal for low-memory deployments.  
  👉 [PR #7115 – Add EXL3 quantization backend](https://github.com/unslothai/unsloth/pull/7115)  
- **Deepseek v4.1 Flash GGUF Request**: Issue #10838 calls for native support of Deepseek v4.1 Flash GGUF models in Unsloth Studio.  
  👉 [Issue #10838 – Request Deepseek v4.1 Flash GGUF support](https://github.com/unslothai/unsloth/issues/10838)

---

### **4. Performance & Optimization**  
- **LoRA SFT Speedup**: PR #10744 reports a **~22% improvement** in training time (0.85s → 0.66s per step) on NVIDIA B200 for Qwen3.5-9B LoRA SFT, primarily due to reduced CPU-side overhead.  
  👉 [PR #10744 – Perf: Qwen3.5-9B LoRA SFT on B200](https://github.com/unslothai/unsloth/pull/10744)  
- **Prompt Processing Visibility**: PR #10834 enhances Studio’s API monitor with real-time feedback: `Prompt processing · N%` during llama.cpp input processing, improving debugging visibility.  
  👉 [PR #10834 – Show prompt-processing progress](https://github.com/unslothai/unsloth/pull/10834)

---

### **5. Stability & Regressions**  
- **Critical Crash on New Chat**: Issue #10288 reports a crash (`tapClientLookup: Index 1 out of bounds`) when clicking "New chat" in the desktop app, requiring restart. A follow-up with repro steps is pending.  
  👉 [Issue #10288 – New chat crash](https://github.com/unslothai/unsloth/issues/10288)  
- **Model Download Failure (AppImage)**: Issue #10840 shows the AppImage version fails to download large models (e.g., Qwen 3.8 Flash Next at Q5_K_XL) due to missing `hf_xet` package.  
  👉 [Issue #10840 – AppImage missing hf_xet](https://github.com/unslothai/unsloth/issues/10840)  
- **Tool Permission Bypass**: Issue #10835 warns that “Run automatically” or “Full access” tool permissions bypass safety checks, allowing dangerous commands like `rm` or `reboot` without confirmation.  
  👉 [Issue #10835 – Safety check bypass in tool permissions](https://github.com/unslothai/unsloth/issues/10835)  
- **Studio UI Conflicts**: Issue #10817 documents a silent disagreement between Run Settings sidebar and dropdown panels, leading to inconsistent behavior.  
  👉 [Issue #10817 – Run settings sync issue](https://github.com/unslothai/unsloth/issues/10817)

---

### **6. What This Means for Application Developers**  
- **Use the latest Docker image** (`unsloth/unsloth:latest`) immediately after #10825 to avoid training failures on GPU hosts.  
- **Enable EXL3 quantization** via PR #7115 for Mixture-of-Experts models or memory-constrained environments.  
- **Disable tool call deduplication** if your agent relies on repeated tool invocations (request tracked in #10379).  
- **Avoid `trust_remote_code=False` in remote inference** until #10830 resolves async Hub calls blocking event loops.  
- **Monitor for crashes in the desktop app**, especially on macOS/Linux, and report repro steps for #10288 and #10840.  

> ✅ *Recommendation*: Upgrade to the latest unsloth-cli and Studio builds, and verify tool permission policies in production-facing agents.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*