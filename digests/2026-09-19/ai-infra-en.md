# AI Infrastructure Digest 2026-09-19

> Generated: 2026-09-19 00:35 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-09-19**

---

### **1. Ecosystem Overview**  
The AI inference infrastructure landscape in Q3 2026 is characterized by rapid specialization and convergence toward production-grade, multi-hardware deployment. vLLM, SGLang, and Unsloth are pushing the envelope in high-throughput serving and low-latency inference, while Ollama consolidates user-facing accessibility and LiteLLM strengthens enterprise proxy capabilities. A clear shift toward disaggregated, agent-aware, and encrypted reasoning pipelines is evident, with increasing emphasis on stability under long-context and multi-turn workloads. The ecosystem is no longer just about speed—it's about reliability, observability, and secure orchestration across hybrid hardware.

---

### **2. Activity Comparison**

| Project       | Open Issues (↑) | Open PRs (↑) | Release Status             |
|---------------|------------------|---------------|----------------------------|
| **vLLM**      | 87               | 142           | v0.28.x in progress        |
| **SGLang**    | 112              | 205           | v0.5.20 released           |
| **llama.cpp** | 158              | 189           | b11046+ builds available   |
| **Ollama**    | 143              | 98            | v0.34.3-rc0 released       |
| **LiteLLM**   | 91               | 127           | v1.103.0-dev.2 released    |
| **Unsloth**   | 119              | 138           | v0.1.811-beta released     |

> ✅ *SGLang leads in contributor engagement (237 contributors), while llama.cpp shows the highest volume of open issues—indicating broad but unstable hardware support.*

---

### **3. Model Support Race**

| New Model / Architecture       | Supported By                          | Status & Notes |
|----------------------------------|----------------------------------------|----------------|
| **GLM-5.3-Flash**                | SGLang ✅, vLLM 🟡 (pending patch)      | SGLang leads; vLLM has vision bug |
| **Qwen3.8-Flash-Next**           | Unsloth ✅ (with MTP fix), SGLang 🟡     | Unsloth delivers 2x speedup via MTP hotfix |
| **Gemma4 on Turing GPUs (SM 7.5)** | None — unsupported due to SM limits   | vLLM issue #38918 remains unresolved |
| **Ternary Bonsai Models**        | Unsloth 🟡 (manual install), Ollama 🟡   | No native support yet; community effort needed |
| **FP8/INT8 Diffusion Inference** | Unsloth ✅, llama.cpp 🟡 (OpenCL)       | Unsloth pioneers in diffusion + quantization fusion |

> 🏆 **Winner: Unsloth** – leads in novel model performance (Qwen3.8-Flash-Next MTP), diffusion support, and cross-platform reach (ARM64 CUDA on Windows).

---

### **4. Performance Frontier**

| Optimization Focus          | Leading Projects                              | Key Advances |
|-------------------------------|------------------------------------------------|--------------|
| **KV Cache Efficiency**       | vLLM, SGLang                                   | FlashInfer integration (vLLM), pre-SM100 paged updates |
| **Speculative Decoding**      | vLLM (NGram GPU speculator), SGLang            | GPU-accelerated n-gram prediction; early draft release fixes |
| **Quantization & Kernels**    | llama.cpp (OpenCL/HMX), Unsloth (FP8/INT8)     | Binary kernels (`flash_attn_f32_f16_bin`), fused FP8 MoE folding |
| **Distributed & Disaggregated Serving** | vLLM (NIXL), SGLang (sgl-router)         | `/render`, `/responses`, dynamic engine routing |
| **Memory & Latency Tradeoffs**| SGLang (prefill CUDA graph contention), Ollama (RAM spikes) | Memory pressure driving auto-disable logic |

> 🔥 **Hotspot**: vLLM and SGLang are competing head-to-head on speculative decoding efficiency and distributed scalability—critical for agent systems.

---

### **5. Layer Positioning**

| Project       | Primary Layer                     | Role Summary |
|---------------|------------------------------------|--------------|
| **vLLM**      | High-Performance Serving Engine     | Core inference engine with advanced scheduling, MoE, and speculation |
| **SGLang**    | Agent-First Runtime & Gateway       | Bridges models and agents with policy routing, tool calling, and async control flow |
| **llama.cpp** | Local, Cross-Platform Runtime       | Edge and embedded inference; strong NPU/Vulkan/Metal support |
| **Ollama**    | Developer-Focused Local Gateway     | Simplified CLI/model management; shifting from agent to API-first |
| **LiteLLM**   | Enterprise Proxy & Orchestration    | Multi-provider routing, budget enforcement, encryption affinity |
| **Unsloth**   | High-Speed Training + Inference Stack | Optimized fine-tuning + inference pipeline with Docker/multi-user support |

> 💡 **Strategic Insight**: The stack is bifurcating—**engine-level innovation** (vLLM/SGLang) vs. **application-layer abstraction** (LiteLLM/Ollama) vs. **edge runtime** (llama.cpp).

---

### **6. Trend Signals**

#### **Emerging Industry Trends (from 2026-09-19 activity):**
1. **Agent-Centric Design Is Now Mainstream**  
   - SGLang’s `sgl-router`, vLLM’s `/render`, and Ollama’s `thinking` controls signal that agents are no longer a niche use case—they’re driving core architectural decisions.
   
2. **Disaggregation & Observability Are Non-Negotiable**  
   - vLLM’s NIXL metrics, SGLang’s PD disaggregation, and LiteLLM’s streaming guardrails show that distributed inference requires deep observability and state tracking.

3. **Hardware Fragmentation Demands Cross-Backend Agility**  
   - Projects like llama.cpp (OpenCL, Hexagon, Vulkan) and Unsloth (AMD RDNA1/2, ARM64 CUDA) are building portable backends faster than model providers can keep up.

4. **Security & Cost Control Are Production Requirements**  
   - LiteLLM’s cosign-signed images, project-level budgets, and virtual key allowlisting reflect growing need for auditability and financial governance.

#### **What Application Developers Should Watch:**
- **Avoid "vision" claims without runtime validation** — e.g., DeepSeek-V4.1 Flash silently discards images (Ollama #18527).
- **Enable `--max-num-partial-prefills` cautiously** — vLLM’s RFC suggests it may break long-context RAG unless tuned.
- **Monitor for silent data corruption** — Metal truncation (llama.cpp #28805), ROCm logits errors (#28211), and context leaks (Ollama #18528) can break production apps undetected.
- **Upgrade to signed dev builds** (LiteLLM v1.103.0-dev.2) and beta releases (Unsloth v0.1.811-beta) to access critical stability fixes.

> ✅ **Final Recommendation**: For production agent systems, **pair vLLM or SGLang as the engine** with **LiteLLM as the gateway**, and **validate all multimodal inputs at runtime**—no model capability should be trusted blindly.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-09-19**

---

### **1. Today's Highlights**  
The vLLM project continues to push the boundaries of efficient LLM serving with key progress in speculative decoding and disaggregated inference. Notably, a new NGram GPU speculator is being introduced for V1 engine, while critical stability fixes address silent CUDA IMA crashes under high-load decode scenarios. Meanwhile, ongoing work on incremental MoE expert offloading and native text watermarking signals growing support for large-scale, production-grade deployments.

---

### **2. Releases & Breaking Changes**  
*No new releases or breaking changes detected in the last 24 hours.*  
However, several PRs are advancing toward v0.28.x:  
- [PR #57416](https://github.com/vllm-project/vllm/pull/57416) improves prefill throughput by aligning logit row allocation for diffusion models — expected to land in next release.  
- [PR #57647](https://github.com/vllm-project/vllm/pull/57647) corrects a DFlash acceptance-length test reference, fixing a flaky CI regression (not a breaking change but impacts test reliability).

---

### **3. New Model & Hardware Support**  
- **Gemma4 on Turing GPUs (SM 7.5)**: Still unsupported due to shared memory limits in all attention backends ([Issue #38918](https://github.com/vllm-project/vllm/issues/38918)). Workarounds may require model pruning or backend modifications.
- **GLM-5.3-Flash on SM120 (RTX PRO 6000 Blackwell)**: Fails to start due to missing `rope-free sparse MLA` path ([Issue #53963](https://github.com/vllm-project/vllm/issues/53963)). A fix is pending.
- **ROCm Support**: Continued enhancements for AMD GPUs, including gfx950 DPX tolerance adjustments ([PR #57599](https://github.com/vllm-project/vllm/pull/57599)) and fused kernels for Qwen3-Next ([PR #51406](https://github.com/vllm-project/vllm/pull/51406)).
- **Intel GPU**: Active investigation into MTP and multi-card issues with quantized Qwen3.6-35B-A3B-int4-mixed-AutoRound ([Issue #53119](https://github.com/vllm-project/vllm/issues/53119)).

---

### **4. Performance & Optimization**  
- **Speculative Decoding**: The new **NGram GPU speculator** ([PR #40704](https://github.com/vllm-project/vllm/pull/40704)) enables faster draft token generation with GPU-accelerated n-gram prediction, improving speculation efficiency.
- **Prefill Optimization**: [PR #57416](https://github.com/vllm-project/vllm/pull/57416) eliminates unnecessary full passes in prefill-only batches for diffusion models, yielding measurable latency gains.
- **KV Cache Efficiency**: FlashInfer integration now extends to pre-SM100 NVFP4 paged KV cache updates ([PR #46963](https://github.com/vllm-project/vllm/pull/46963)), enabling smaller memory footprint on older architectures like RTX 3090.
- **MoE Scalability**: Incremental MoE expert offloading via GPU cache + async pipeline ([RFC #38256](https://github.com/vllm-project/vllm/issues/38256)) could enable running >100B MoE models on sub-40GB VRAM hardware.

---

### **5. Stability & Regressions**  
- **Silent CUDA IMA Crashes** on RTX 3090 under hybrid GDN + MTP k=3 + async scheduling ([Issue #53726](https://github.com/vllm-project/vllm/issues/53726)): Persistent crash despite prior fixes; no known resolution yet.
- **DFlash2 OOB Crash** after ~11k decode steps on sm_80 (RTX 3090), causing engine death with Xid 31 ([Issue #55279](https://github.com/vllm-project/vllm/issues/55279)): High-severity, affects long-context inference; requires urgent attention.
- **GLM-5.3-Flash Long-Decode Degeneration** after accumulated reasoning ([Issue #56868](https://github.com/vllm-project/vllm/issues/56868)): Output quality degrades over time; likely tied to KV cache management.
- **NIXL LoadRemoteMD Crash** post-prefill pod restart in P/D disaggregation ([Issue #49238](https://github.com/vllm-project/vllm/issues/49238)): Critical for distributed systems; fix PRs in review ([PR #57389](https://github.com/vllm-project/vllm/pull/57389)).

---

### **6. What This Means for Application Developers**  
- **Production Systems**: Use `--max-num-partial-prefills` cautiously — recent RFCs suggest restoring concurrent partial prefill limits for long-context RAG workloads ([Issue #57413](https://github.com/vllm-project/vllm/issues/57413)). Monitor for regressions in V1 scheduler.
- **Agent & Tooling Workflows**: Multi-turn conversation support remains experimental ([Issue #33089](https://github.com/vllm-project/vllm/issues/33089)); consider using external state management until native OpenAI `/responses` API is available.
- **Long-Context Apps**: Avoid Gemma4 on Turing GPUs; use smaller models or refactor prompt handling. For GLM-5.3-Flash, expect limitations on newer Blackwell cards unless patched.
- **Disaggregated Serving**: Leverage the `/render` endpoint ([PR #42729](https://github.com/vllm-project/vllm/pull/42729)) and NIXL metrics aggregation ([PR #41230](https://github.com/vllm-project/vllm/pull/41230)) for observability in split-tier deployments.
- **Future-Proofing**: Enable `torch.compile` where possible — but be aware of FusedMoE wrapper limitations ([Issue #31985](https://github.com/vllm-project/vllm/issues/31985)) that block optimizations.

> *Stay vigilant: multiple high-severity bugs persist in long-decode and multi-GPU workflows. Always test under production-like loads before deployment.*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-09-19**

---

### **1. Today's Highlights**  
The SGLang ecosystem saw significant momentum in engine architecture refinement, with the launch of a new `sgl-router` policy reorganization initiative aimed at enabling dynamic engine selection and load-based routing. Concurrently, critical stability fixes were merged for GPU memory management (e.g., CUDA graph prefill starvation) and model-specific bugs affecting DeepSeek V4/V3.2 and GLM-5.3-Flash vision. The release of v0.5.20 introduced support for the new **GLM-5.3-Flash** model and marked a major milestone in community-driven development with over 700 PRs from 237 contributors.

---

### **2. Releases & Breaking Changes**  
- **v0.5.20** released: [GitHub Release](https://github.com/sgl-project/sglang/releases/tag/v0.5.20)  
  - Introduces **GLM-5.3-Flash** as a supported autoregressive model.  
  - Includes foundational changes to the engine-selection pipeline via the `policies_reorg` module.  
  - No breaking API changes reported; backward compatibility maintained.  

---

### **3. New Model & Hardware Support**  
- **New Models**:  
  - ✅ **GLM-5.3-Flash** (autoregressive) — now officially supported via [cookbook](https://docs.sglang.io/cookbook).  
  - 📌 *Gigachat 3.5* support is under active development ([PR #29189](https://github.com/sgl-project/sglang/pull/29189)).  
- **Hardware & Backend Enhancements**:  
  - **ROCm** improvements: `ROCM_QUICK_REDUCE_QUANTIZATION=INT8` path now handles low-amplitude BF16 inputs more robustly ([Issue #40084](https://github.com/sgl-project/sglang/issues/40084)).  
  - **AMD** optimizations: MiniMax-M3 stack includes fused FP8 quantization, MoE all-reduce folding, and Triton-based sparse attention ([PRs #36574–#36559](https://github.com/sgl-project/sglang/pulls?q=is%3Aopen+is%3Apr+label%3A%22amd%22+author%3Azcnrex)).  
  - **NPU** support: Shared selection state moved into `src/state` to unify control flow ([PR #40272](https://github.com/sgl-project/sglang/pull/40272)).

---

### **4. Performance & Optimization**  
- **Prefill Memory Efficiency**:  
  - Prefill CUDA graphs now reserve ~1.8 GB, causing contention with quantized-KV long-context workloads on small GPUs ([Issue #40094](https://github.com/sgl-project/sglang/issues/40094)).  
  - Proposed fix: auto-disable prefill CUDA graphs when free VRAM falls below threshold (no rule yet implemented).  
- **Speculative Decoding**:  
  - Draft embed_tokens/lm_head copies are released too early, shrinking `max_total_num_tokens` ([Issue #36452](https://github.com/sgl-project/sglang/issues/36452)).  
  - Fix pending in performance review phase.  
- **Kernel & Quantization**:  
  - **MiniMax-M3** stack enables per-token FP8 quant fusion with RMSNorm and MoE all-reduce folding ([PR #36575](https://github.com/sgl-project/sglang/pull/36575)).  
  - AMD-specific kernels optimized for wave64 histogram-select top-k decoding ([PR #36560](https://github.com/sgl-project/sglang/pull/36560)).  
  - **DFLASH draft layout** validation missing — silent position shifts during anchor-first checkpointing ([Issue #40144](https://github.com/sgl-project/sglang/issues/40144)).

---

### **5. Stability & Regressions**  
- **Critical Crashes & Bugs**:  
  1. **DeepSeek V4/V3.2 tool call parsing failure**: Tool calls returned as raw content with malformed syntax ([Issue #40236](https://github.com/sgl-project/sglang/issues/40236)).  
  2. **GLM-5.3-Flash vision misclassification**: Single JPEG URL misidentified as bird image on 8x H20 ([Issue #38821](https://github.com/sgl-project/sglang/issues/38821)).  
  3. **Qwen3.6-27B AWQ degenerates at temperature 0** on multi-turn prompts ([Issue #31720](https://github.com/sgl-project/sglang/issues/31720)).  
- **Stability Fixes Merged**:  
  - Fixed `is_musa()` graph-breaking issue in TorchDynamo tracing path ([PR #40067](https://github.com/sgl-project/sglang/pull/40067)).  
  - Resolved `KeyError` crash due to duplicate `bootstrap_room` in PD disaggregation ([Issue #40125](https://github.com/sgl-project/sglang/issues/40125)).  
- **CI Health**: 1 broken, 6 flaky tests detected; 1,051 recent fixes applied ([Issue #17050](https://github.com/sgl-project/sglang/issues/17050)).

---

### **6. What This Means for Application Developers**  
- **Engine Selection Flexibility**: The `sgl-router` redesign ([PRs #40241–#40272](https://github.com/sgl-project/sglang/pulls?q=is%3Aopen+is%3Apr+label%3A%22sgl-router%22)) enables future dynamic routing based on load, latency, or cost — crucial for agent systems requiring adaptive inference paths.  
- **Model-Specific Risks**: Avoid `GLM-5.3-Flash` vision mode until #38821 is patched; prefer `temperature > 0` for Qwen3.6-27B-AWQ in multi-turn scenarios.  
- **Memory Constraints**: On small-GPU deployments, disable `--enable-prefill-cp` or monitor VRAM usage closely to avoid prefill stalls ([Issue #40094](https://github.com/sgl-project/sglang/issues/40094)).  
- **Tool Calling Reliability**: Expect inconsistent tool call rendering between Python and Rust frontends until #39843 is resolved — use consistent frontend layers in production.  

> 🔗 **Actionable Links**:  
> - [v0.5.20 Release Notes](https://github.com/sgl-project/sglang/releases/tag/v0.5.20)  
> - [SGLang Cookbook (Models)](https://docs.sglang.io/cookbook)  
> - [Open Issues (Top 10)](https://github.com/sgl-project/sglang/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-09-19**

---

### **1. Today's Highlights**  
The latest updates focus on expanding hardware acceleration across multiple backends, with major strides in OpenCL and Hexagon support for advanced attention kernels and tensor operations. Key improvements include `flash_attn_f32_f16_bin` on OpenCL, ROLL op support on Hexagon, and enhanced HMX flash-attention padding for non-multiple-of-64 head dimensions. These advances improve compatibility and performance on diverse edge and AI accelerators.

---

### **2. Releases & Breaking Changes**  
- **b11046 (OpenCL)**: Added binary kernel `flash_attn_f32_f16_bin` (#29046), enabling optimized flash attention for mixed-precision workloads.  
  🔗 [PR #29046](https://github.com/ggml-org/llama.cpp/pull/29046)  
- **b11045 (Hexagon)**: Added `ROLL` op support for f32 tensors, critical for models relying on position shifting (e.g., MTP, sliding window).  
  🔗 [PR #29105](https://github.com/ggml-org/llama.cpp/pull/29105)  
- **b11043 (Hexagon)**: Enhanced HMX flash-attention to handle `head_dim = 72` (e.g., SigLIP), using zero-padded lanes for alignment to 64.  
  🔗 [PR #26539](https://github.com/ggml-org/llama.cpp/pull/26539)  
- **b11042 (OpenCL)**: Introduced A8 Q6_K non-MoE binary kernel (`kernel_gemm_noshuffle_q6_k_f32_32b_trans_ila_a8_bin`) for improved quantized inference efficiency.  
  🔗 [PR #28678](https://github.com/ggml-org/llama.cpp/pull/28678)  

> ✅ *No breaking API changes reported; all updates are additive or backward-compatible.*

---

### **3. New Model & Hardware Support**  
- **Hexagon (Qualcomm NPU)**: Full support for multi-NPU devices (IQ9/IQ10) via asynchronous backend (PR #26501), enabling scalable deployment on mobile SoCs.  
  🔗 [PR #26501](https://github.com/ggml-org/llama.cpp/pull/26501)  
- **Vulkan**: Added IQ3_S MMQ matmul kernels for RDNA3/RDNA4 GPUs (e.g., Strix Halo, AMD Radeon 7900 XT).  
  🔗 [PR #28822](https://github.com/ggml-org/llama.cpp/pull/28822)  
- **SYCL (Intel Arc)**: Experimental graph recording/replay added (PR #28725), paving the way for low-latency inference on Intel GPUs.  
  🔗 [PR #28725](https://github.com/ggml-org/llama.cpp/pull/28725)  
- **Metal (Apple Silicon)**: New small-batch mat-vec kernels for Q4_0/Q8_0 with `ne11=2..8`, reducing latency for lightweight inference.  
  🔗 [PR #29110](https://github.com/ggml-org/llama.cpp/pull/29110)

---

### **4. Performance & Optimization**  
- **Flash Attention**: `flash_attn_f32_f16_bin` on OpenCL reduces kernel launch overhead and improves throughput for high-throughput models like Qwen3.8-27B.  
- **Hexagon IM2COL**: Updated kernels now support 1D and padded operations, improving patch-embedding speed by up to 15% in benchmarks.  
  🔗 [PR #29103](https://github.com/ggml-org/llama.cpp/pull/29103)  
- **SYCL (Intel Arc B70)**: IQ3_S/IQ3_XXS code reordering improves decode path efficiency by ~20% in prefill stages.  
  🔗 [PR #29107](https://github.com/ggml-org/llama.cpp/pull/29107)  
- **Vulkan (RDNA3/RDNA4)**: New int8 coopmat1 kernels (PR #27952) deliver up to 2x faster prompt processing vs. generic paths.  
  🔗 [PR #27952](https://github.com/ggml-org/llama.cpp/pull/27952)

---

### **5. Stability & Regressions**  
- **Critical GPU Crashes (CUDA/SYCL/Vulkan)**:  
  - **RTX 5090**: CUDA graphs cause GPU hang/XID 8 errors (Issue #27330), mitigated by `GGML_CUDA_DISABLE_GRAPHS=1`.  
    🔗 [Issue #27330](https://github.com/ggml-org/llama.cpp/issues/27330)  
  - **AMD Strix Halo (Vulkan)**: `DeviceLostError` on Linux 7.x kernels (Issue #25664).  
    🔗 [Issue #25664](https://github.com/ggml-org/llama.cpp/issues/25664)  
  - **Intel Arc Pro B70 (SYCL)**: `dev2dev_memcpy` crashes due to `DEVICE_LOST` (Issue #27198).  
    🔗 [Issue #27198](https://github.com/ggml-org/llama.cpp/issues/27198)  
- **Silent Data Corruption**:  
  - **HIP/ROCm (gfx1151)**: Logits incorrect for long prompts (>n_ubatch) (Issue #28211).  
    🔗 [Issue #28211](https://github.com/ggml-org/llama.cpp/issues/28211)  
  - **Metal (M1/M2)**: Silent output truncation at long context (Issue #28805).  
    🔗 [Issue #28805](https://github.com/ggml-org/llama.cpp/issues/28805)  
- **Memory Issues**:  
  - Graph buffer reservation failure (Issue #26070), leading to allocation crashes.  
    🔗 [Issue #26070](https://github.com/ggml-org/llama.cpp/issues/26070)  

> ⚠️ *Fixes pending for most regressions; PRs under review or experimental.*

---

### **6. What This Means for Application Developers**  
- **Use `--split-mode tensor` cautiously** on multi-GPU systems—known to trigger crashes (e.g., Issue #27198, #27330). Prefer `--split-mode layer` until stable.  
- **Enable `GGML_CUDA_DISABLE_GRAPHS=1`** if running on RTX 5090 or newer to avoid GPU hangs.  
- **For edge deployment**, prioritize Hexagon builds (b11045+) for better support of MTP, SWA, and rolling-window models.  
- **Leverage new binary kernels** (`flash_attn_f32_f16_bin`, `A8 Q6_K`) on OpenCL platforms for higher throughput.  
- **Monitor model-specific bugs**—Qwen3.8-Flash-Next shows decoding issues on Metal and Vulkan (Issues #28805, #29028); use `--no-ctx-checkpoints` as workaround.  

> 📌 *Always test with latest `b11046+` builds for stability on new hardware.*  
> 🔗 [Latest Releases](https://github.com/ggml-org/llama.cpp/releases) | [GitHub Issues](https://github.com/ggml-org/llama.cpp/issues)

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

---

### **Ollama Digest — 2026-09-19**

---

#### **1. Today's Highlights**  
Ollama v0.34.3-rc0 introduces explicit support for model-specific *thinking controls*, exposing available levels (`low`, `high`, `max`) and defaults via the `/api/show` endpoint—critical for agent frameworks needing reasoning-level configuration. Concurrently, multiple high-severity issues were reported around tool call parsing (Qwen3-Coder), image handling in cloud models (DeepSeek-V4.1 Flash), and state leaks in ROCm/GDN hybrid models, highlighting ongoing challenges with multimodal and advanced inference patterns.

---

#### **2. Releases & Breaking Changes**  
- **v0.34.3-rc0** (latest release):  
  - Added `thinking` metadata to `/api/show` response:  
    ```json
    {
      "thinking": {
        "values": ["low", "high", "max"],
        "default": "max"
      }
    }
    ```
    [PR #18473](https://github.com/ollama/ollama/pull/18473) | [Issue #18473](https://github.com/ollama/ollama/issues/18473)  
  - **Breaking**: The built-in CLI agent has been removed entirely ([PR #18393](https://github.com/ollama/ollama/pull/18393)), requiring users to opt-in via external tools or custom scripts. Enterprise workflows relying on it may require reconfiguration.

---

#### **3. New Model & Hardware Support**  
- **New Models Requested**:  
  - Mistral Small 4: [Issue #15142](https://github.com/ollama/ollama/issues/15142) – Open-source successor to Mistral Small 3.2, expected to be added soon.  
  - Prism Ternary GGUFs (PQ2_0/PTQ1_0): [Issue #18521](https://github.com/ollama/ollama/issues/18521) – Import fails due to unsupported tensor size overflows; upstream MLX backend support needed.  
- **Hardware & Backend Updates**:  
  - **MLX**: Active development on 1-bit/2-bit quantized weights (Bonsai models) via [Issue #18515](https://github.com/ollama/ollama/issues/18515).  
  - **ROCm**: Hybrid GDN models (Qwen3.5-family) exhibit cross-request state leaks on gfx1151 GPUs ([Issue #18528](https://github.com/ollama/ollama/issues/18528)).  
  - **Vulkan**: Intel Iris Xe iGPU detection fails intermittently ([Issue #18482](https://github.com/ollama/ollama/issues/18482)); memory allocation errors observed on qwen2.5:14b ([Issue #18531](https://github.com/ollama/ollama/issues/18531)).

---

#### **4. Performance & Optimization**  
- **Memory Management**:  
  - Users report excessive RAM usage with large models on low-RAM systems (8–16GB); [Feature Request #13601](https://github.com/ollama/ollama/issues/13601) calls for dynamic offloading and smart quantization.  
  - More granular memory split control desired for multi-GPU setups ([Issue #18525](https://github.com/ollama/ollama/issues/18525)).  
- **Throughput & Latency**:  
  - High latency (~50s) reported when using Claude Desktop integration ([Issue #18474](https://github.com/ollama/ollama/issues/18474)).  
  - MLX nvfp4 stalls during prefill under sustained load ([Issue #18505](https://github.com/ollama/ollama/issues/18505)) — intermittent hangs lasting minutes.  
  - CUDA ADD_ID failures in `gpt-oss:20b` (MXFP4) under short two-message chats ([Issue #18522](https://github.com/ollama/ollama/issues/18522)) indicate kernel-level instability.

---

#### **5. Stability & Regressions**  
| Severity | Issue | Description | Fix Status |
|---------|------|-------------|------------|
| 🔴 Critical | [#17778](https://github.com/ollama/ollama/issues/17778) | Qwen 3.8 crashes with `no user query found in messages` (500 error) during streaming chat. | Open, 32 comments |
| 🔴 Critical | [#18528](https://github.com/ollama/ollama/issues/18528) | ROCm hybrid GDN models leak prior request context across sessions — visible text from earlier prompts appears in new responses. | Open, tracking upstream bug |
| 🔴 Critical | [#18527](https://github.com/ollama/ollama/issues/18527) | `deepseek-v4.1-flash:cloud` silently discards all image inputs despite advertising `vision` capability. | Open |
| 🟡 High | [#18509](https://github.com/ollama/ollama/issues/18509) | Ollama refuses valid `tool` role messages, breaking tool-use workflows. | Open |
| 🟡 High | [#18530](https://github.com/ollama/ollama/issues/18530) | Qwen3-Coder loses tool calls if reasoning precedes `<function=...>` tag (parser misses implicit opener). | Open, PR #18532 proposed |
| 🟡 Medium | [#18526](https://github.com/ollama/ollama/issues/18526) | Intermittent redirect failures pulling HF models (502 Bad Gateway). | Fixed by [PR #18533](https://github.com/ollama/ollama/pull/18533) |

---

#### **6. What This Means for Application Developers**  
- **Agent Frameworks**: Use `/api/show` to dynamically expose thinking level controls (e.g., `max` for deep reasoning) — essential for fine-grained agent behavior. Avoid hardcoding values.  
- **Tool Integration**: Expect silent tool call loss in Qwen3-Coder and invalid `tool` role rejection in recent builds. Implement fallbacks or use parser patches (like [PR #18532](https://github.com/ollama/ollama/pull/18532)) until official fixes land.  
- **Multimodal Apps**: Do not assume `vision` capability implies functional image input — `deepseek-v4.1-flash:cloud` currently ignores images silently. Validate capabilities at runtime.  
- **Cloud vs Local**: With no local-only filter in UI, use `ollama list --local` or API checks to distinguish offline-capable models ([Issue #16833](https://github.com/ollama/ollama/issues/16833)).  
- **Enterprise Deployments**: The removal of the built-in agent ([PR #18393](https://github.com/ollama/ollama/pull/18393)) means CLI automation must now rely on external runners or wrappers.

> ✅ **Actionable Tip**: For production agents, always validate model capabilities via `/api/show` and implement robust error handling for tool calls and image inputs. Monitor GitHub for updates on Qwen3-Coder and DeepSeek-V4.1 Flash regressions.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-09-19**

---

### **1. Today's Highlights**  
The LiteLLM ecosystem continues to strengthen its enterprise-grade proxy and inference infrastructure with critical fixes to encryption affinity, streaming guardrails, and budget enforcement. Notable progress includes support for GitGot as a new OpenAI-compatible provider and improvements to MCP gateway security via JWT scope mappings and client allowlisting. A key PR addresses WebSocket relay issues in `/v1/responses` that were causing `encrypted_content` rejections due to length limits.

---

### **2. Releases & Breaking Changes**  
- **v1.103.0-dev.2**: Released today with enhanced security via cosign-signed Docker images (verified using [commit `0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0)). All releases are now signed using Sigstore’s cosign — ensure verification before deployment.
- **Security Note**: The proxy now enforces project-level budgets alongside team member budgets ([#35723](https://github.com/BerriAI/litellm/pull/35723)), preventing overages when using scoped keys.

---

### **3. New Model & Hardware Support**  
- **GitGot added** as a JSON-configured OpenAI-compatible provider ([#40810](https://github.com/BerriAI/litellm/pull/40810)):  
  - Base URL: `https://inference.gitgot.ai/v1`  
  - Supports models like `gitgot/gpt-4o-mini`, `gitgot/codellama-34b`, etc.  
  - Fully compatible with existing LiteLLM routing logic.
- **Vertex AI Chirp Speech-to-Text Streaming** now supported on `/v1/realtime` ([#41721](https://github.com/BerriAI/litellm/pull/41721)) — enables live captioning during audio transcription.
- **Databricks service_tier** now preserved through request, streaming, and cost calculation ([#41837](https://github.com/BerriAI/litellm/pull/41837)) — ensures correct billing for priority-tier workloads.

---

### **4. Performance & Optimization**  
- **Response Timing Accuracy Improved**: Proxy now anchors response duration and overhead at the *exact* time of proxy receive, not SDK call start ([#41891](https://github.com/BerriAI/litellm/pull/41891)). This provides more accurate latency metrics, especially under high Redis load or slow routing paths.
- **HTTP Client Pooling in Rust OCR Route**: Introduced shared HTTP client pool injected into OCR pipeline ([#41897](https://github.com/BerriAI/litellm/pull/41897)), eliminating per-route client instantiation and improving connection reuse.
- **OpenRouter & Azure Price Sync**: Automated sync of pricing data (15 OpenRouter models, 5 Azure deprecations) ensures accurate cost tracking ([#41842](https://github.com/BerriAI/litellm/pull/41842), [#41833](https://github.com/BerriAI/litellm/pull/41833)).

---

### **5. Stability & Regressions**  
| Issue | Severity | Status | Fix PR | Notes |
|------|----------|--------|--------|-------|
| `encrypted_content_affinity` breaks after model switch on Bedrock | Critical | Open | [#41792](https://github.com/BerriAI/litellm/issues/41792) | Regression in encrypted reasoning handling; affects multi-model workflows |
| Virtual-key model allowlist bypass via `?model=` query string | High | Open | [#41810](https://github.com/BerriAI/litellm/issues/41810) | Security risk; allows unauthorized model access |
| Per-customer RPM limits ignored after virtual key caching | High | Open | None | Impacts rate-limiting consistency; reported in v1.82.3+ |
| Streaming guardrails can skip sensitive content split across SSE chunks | Medium | Open | [#41611](https://github.com/BerriAI/litellm/issues/41611) | Guardrail bypass vulnerability in long streams |
| `/v1/messages` ignores `timeout` / `stream_timeout` (hard-capped at 600s) | High | Open | [#30836](https://github.com/BerriAI/litellm/issues/30836) | Breaks long-running stream use cases |

> 🔴 **Critical Note**: Several open bugs affect core security, billing, and stability — prioritize testing if using encrypted reasoning, virtual keys, or long-streaming scenarios.

---

### **6. What This Means for Application Developers**  
- **Use `encrypted_content_affinity` cautiously** — avoid switching models mid-session on Bedrock if using encrypted reasoning; consider using dedicated keys per model.
- **Secure your virtual keys**: Avoid exposing `?model=` in URLs; use proper API key validation and enforce allowlists via `litellm_params.model_list`.
- **Enable project-level budgets** ([#35723](https://github.com/BerriAI/litellm/pull/35723)) to prevent cost overruns in multi-user environments.
- **Upgrade to latest dev build** (`v1.103.0-dev.2`) to benefit from improved timing, security signing, and updated model pricing.
- **Leverage new features**: Use `/claude_code_gateway` ([#34267](https://github.com/BerriAI/litellm/pull/34267)) for self-hosted Claude Code integration, and `JWT scope mapping` ([#41896](https://github.com/BerriAI/litellm/pull/41896)) for fine-grained access control without managing keys.

👉 **Recommended Actions**: Audit virtual key usage, test streaming guardrails with split inputs, verify encrypted reasoning behavior across model switches, and enable upgrade banners via [#40429](https://github.com/BerriAI/litellm/pull/40429) for team visibility.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

---

### **Unsloth Digest — 2026-09-19**

#### **1. Today's Highlights**  
The v0.1.811-beta release delivers major advances in multi-user Docker support, AMD GPU (RDNA1/2) and ARM64 CUDA on Windows, alongside FP8/INT8 diffusion inference and a critical 2x speedup for **Qwen3.8-Flash-Next** via MTP hotfix. This update strengthens Unsloth’s position as a high-performance, cross-platform LLM serving stack.

#### **2. Releases & Breaking Changes**  
- **v0.1.811-beta**: Introduces multi-user Docker environments, full AMD RDNA1/2 support, ARM64 CUDA on Windows, and enhanced training/inference optimizations.  
- **Docker + Multi-User**: Enables secure, isolated user sessions in containerized deployments ([GitHub Release](https://github.com/unslothai/unsloth/releases/tag/v0.1.811-beta)).  
- **MTP Hotfix**: Qwen3.8-Flash-Next now runs **2x faster** under MTP draft mode—critical for low-latency inference pipelines.  
- **Note**: Users upgrading from `v0.1.810-beta` should verify GGUF model loading behavior due to reported regression in inference throughput (see *Stability & Regressions*).

#### **3. New Model & Hardware Support**  
- **AMD ROCm (RDNA1/2)**: Full support added for `b11030-mix-5ff778e` llama.cpp fork with DFlash sidecar fallback.  
- **ARM64 CUDA on Windows**: Now supported in Docker images—enables deployment on Apple Silicon or ARM-based Windows machines.  
- **Quantization**: FP8 and INT8 diffusion support introduced for stable diffusion pipelines.  
- **Model Architecture**: Experimental support for **Kimi K3** (text causal) via fine-tuning; not yet fully integrated (see [Issue #11078](https://github.com/unslothai/unsloth/issues/11078)).  
- **Ternary Bonsai Models**: Not yet supported—users must manually install custom `llama.cpp` forks (see [Feature Request #9059](https://github.com/unslothai/unsloth/issues/9059)).

#### **4. Performance & Optimization**  
- **Qwen3.8-Flash-Next MTP**: Achieves **2x inference speedup** post-hotfix (reported by users and confirmed in CI).  
- **GGUF Inference Throughput**: A regression in `v0.1.810-beta` reduced throughput—users report slowdowns even with identical hardware/model settings ([Issue #11221](https://github.com/unslothai/unsloth/issues/11221)).  
- **Memory Efficiency**: Offloading to CPU/GPU with `--ctx-checkpoints 64 --checkpoint-min-step 256` improves memory usage for 200k context windows (see [Issue #11278](https://github.com/unslothai/unsloth/issues/11278)).  
- **Kernel-Level Optimizations**: PR #5933 adds **Muon optimizer** (Newton-Schulz orthogonalization) for full fine-tuning—improves convergence for linear projection layers.

#### **5. Stability & Regressions**  
- **Critical**: **Qwen3.8-Flash-Next MTP aborts at load** due to `nextn.hc_head_norm` mismatch after rebase ([Issue #11143](https://github.com/unslothai/unsloth/issues/11143)). Fixed in PR #11309 (pending merge).  
- **High Severity**: **MTP drafter crashes** on RTX 5080 with `ggml_can_repeat(b, a)` assertion during graph build ([Issue #11219](https://github.com/unslothai/unsloth/issues/11219)).  
- **ROCm Asserts**: DFlash sidecar + `--split-mode tensor` causes silent failure on ROCm (gfx1201), falling back to layer split ([Issue #11308](https://github.com/unslothai/unsloth/issues/11308)).  
- **Windows Installer Bugs**: PowerShell script fails due to space in username (`HOMEPC~1`) and App Execution Aliases blocking Python ([Issue #11290](https://github.com/unslothai/unsloth/issues/11290), [PR #5959](https://github.com/unslothai/unsloth/pull/5959)).  
- **UI Regression**: Studio inference throughput dropped after `v0.1.810-beta`—likely due to changes in backend scheduling ([Issue #11221](https://github.com/unslothai/unsloth/issues/11221)).

#### **6. What This Means for Application Developers**  
- **Prioritize v0.1.811-beta** for production inference—especially if using Qwen3.8-Flash-Next or AMD GPUs.  
- Avoid `v0.1.810-beta` for GGUF workloads due to throughput regression; test with `--max-concurrency=1` until PR #5482 is merged.  
- For **multi-user deployments**, use the new Docker image with `UNSLOTH_API_MAX_CONCURRENCY` to control resource isolation.  
- If deploying on **AMD**, ensure you’re using `b11030-mix` or later; avoid `--split-mode tensor` until upstream fixes land.  
- **Custom model support** (e.g., Ternary Bonsai) requires manual `llama.cpp` builds—consider contributing to PR #9059 for native integration.  
- Monitor API logs closely: `max_tokens` vs `max_completion_tokens` mismatch may break downstream clients ([Issue #10787](https://github.com/unslothai/unsloth/issues/10787)).  

> ✅ **Actionable Tip**: Use `UNSLOTH_API_QUEUE_POLICY=reject` to prevent overload in high-throughput apps until concurrency controls are stabilized.  
> 🔗 [GitHub Issues Dashboard](https://github.com/unslothai/unsloth/issues?q=is%3Aopen+sort%3Aupdated-desc) | [Release Notes](https://github.com/unslothai/unsloth/releases/tag/v0.1.811-beta)

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*