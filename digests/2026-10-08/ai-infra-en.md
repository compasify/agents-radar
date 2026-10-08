# AI Infrastructure Digest 2026-10-08

> Generated: 2026-10-08 02:14 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

---

### **Cross-Project AI Infrastructure Ecosystem Report – 2026-10-08**

---

#### **1. Ecosystem Overview**  
The AI inference and serving landscape in Q4 2026 is defined by **hardware specialization**, **speculative decoding maturity**, and a growing divide between **high-performance engines** and **developer-friendly gateways**. Projects are increasingly focused on optimizing for next-gen architectures like NVIDIA Blackwell (SM120), AMD MI355X, and Apple M-series chips, while also addressing deep stability regressions that undermine production readiness. The rise of decision models (e.g., *Clef*, *Kimi-K3 MTP*) and agent-specific workflows signals a shift from generic LLM serving to structured, multi-step reasoning pipelines.

---

#### **2. Activity Comparison**

| Project       | Open Issues | PRs (Last 24h) | Release Status        |
|---------------|-------------|----------------|------------------------|
| **vLLM**      | 112         | 7              | Stable: v0.31.0; no new release |
| **SGLang**    | 98          | 12             | Pending v0.5.21; no formal changelog |
| **llama.cpp** | 105         | 6              | No new release; b11481 active |
| **Ollama**    | 127         | 5              | **v0.40.1 released** (critical fixes) |
| **LiteLLM**   | 79          | 9              | v1.106.0-dev.1 + cosign-signed images |
| **Unsloth**   | 93          | 10             | v0.1.904-beta (decision model launch) |

> 🔍 *Insight:* Ollama leads in **release velocity** with a stable patch update, while SGLang and Unsloth show strong **development momentum** in feature innovation. vLLM remains the most stable but least active in releases.

---

#### **3. Model Support Race**

| New Model / Architecture       | Project(s) with Support | Key Differentiator |
|-------------------------------|--------------------------|--------------------|
| **Kimi-K3 (MLA/MTP)**         | vLLM, SGLang, Unsloth     | vLLM enables `VLLM_CAKE_ROUTES=1` for faster paths; SGLang adds DCP support via sharded KV cache |
| **Qwen4Exp / Qwen3.8-2.4T-A95B** | vLLM, SGLang            | vLLM improves CPU-offload via shared PLE table; SGLang adds hybrid-SWA memory safety |
| **Coher2 Vision (Multimodal)** | **llama.cpp** ✅           | First project to add full vision encoder support via `mtmd` |
| **GLM5-Next MTP**             | **llama.cpp** ✅           | Only project with native graph-level MTP support |
| **Databricks ai_decide**      | **LiteLLM** ✅             | First gateway to natively expose `/v1/decisions` provider routing |
| **Decision Models (Jev-style)** | **Unsloth** ✅             | Launches end-to-end training, export, and serve pipeline — unmatched capability |

> 🏆 **Winner:** *Unsloth* leads in **model specialization** (decision agents); *llama.cpp* leads in **multimodal** and **low-level architecture** support; *LiteLLM* dominates in **provider diversity**.

---

#### **4. Performance Frontier**

| Optimization Focus         | Leading Projects                          | Key Developments |
|-----------------------------|-------------------------------------------|------------------|
| **KV Cache & Memory Management** | vLLM, SGLang, Unsloth                  | vLLM fixes GDN+MTP corruption; SGLang avoids redundant terminal decodes; Unsloth auto-sizes MoE cache |
| **Speculative Decoding**    | vLLM, SGLang, llama.cpp                 | vLLM faces 0% acceptance rate on GLM-5.3-Flash; SGLang introduces cost-guided adaptive steps |
| **Quantization & Kernels**  | vLLM, llama.cpp, Unsloth                | vLLM achieves 2.5x speedup with FP8 GEMM tuning; llama.cpp optimizes Q6_K dequant; Unsloth uses `llama-server` for embeddings |
| **Batching & Throughput**   | vLLM, LiteLLM, SGLang                   | vLLM gains +29% decode throughput via reduced draft vocab; LiteLLM improves streaming fidelity |
| **Distributed Serving**     | SGLang, LiteLLM                         | SGLang advances multi-node scheduling; LiteLLM enhances retry logic and observability |

> 🚀 **Hotspot:** *FP8 GEMM tuning on SM120* (vLLM) and *MoE expert caching under memory pressure* (Unsloth, vLLM) are now critical performance differentiators.

---

#### **5. Layer Positioning**

| Project       | Primary Layer                     | Role Summary |
|---------------|------------------------------------|--------------|
| **vLLM**      | **Inference Engine**               | High-throughput, kernel-optimized serving; targets datacenter-scale deployments |
| **SGLang**    | **Inference Engine + Orchestrator**| Hybrid scheduler with speculative control, diffusion support, and multi-node coordination |
| **llama.cpp** | **Local Runtime / Embedded Engine**| CPU/GPU hybrid inference; ideal for edge, mobile, and local deployment |
| **Ollama**    | **Gateway / Developer Experience** | Unified CLI/API layer; abstracts engine complexity for dev-onboarding |
| **LiteLLM**   | **API Gateway / Multi-Provider Router** | Centralized routing, security, billing, and observability across providers |
| **Unsloth**   | **Fine-Tuning + Agent Training Platform** | End-to-end workflow for converting LLMs into decision engines; bridges training and serving |

> 🧩 **Strategic Insight:** The ecosystem is bifurcating — **engineers** use vLLM/SGLang for performance; **developers** lean on Ollama/LiteLLM for ease; **researchers** rely on Unsloth for agent creation.

---

#### **6. Trend Signals**

- **Agent-Centric Design**: Decision models (*Clef*, *Kimi-K3 MTP*) and tools like Unsloth’s `DecisionModelTrainer` signal that **structured reasoning** is replacing raw generation as the primary application pattern.
- **Hardware Specialization Is Now Mandatory**: Projects are diverging by target hardware (Blackwell, ROCm, Apple Silicon, NPU), requiring developers to choose engines based on infrastructure.
- **Security Hardening Becomes Standard**: Cosign signing (LiteLLM), `np.load` prompts (Unsloth), and input validation (llama.cpp) reflect rising concern over runtime integrity.
- **Stability Over Features**: Despite rapid innovation, **regressions dominate**—especially in speculative decoding and memory management—indicating that production readiness is still a bottleneck.
- **Observability & Billing Integration**: LiteLLM and SGLang are embedding real-time metrics, retries, and usage tracking—essential for enterprise adoption.

> ✅ **Actionable Guidance for Developers**:  
> - Use **vLLM** for high-throughput, GPU-optimized inference (avoid v0.30/0.31 if using Qwen3.8 NVFP4 + prefix caching).  
> - Choose **Unsloth** for building AI agents with decision logic.  
> - Use **LiteLLM** for multi-provider routing with audit trails and billing.  
> - Avoid unstable builds (e.g., `b11481`, `v0.40.0–0.40.1`) until regressions are patched.  
> - Always verify image signatures (LiteLLM) and test long-context behavior (llama.cpp, Ollama).

---

**Final Note:** The AI infrastructure stack is maturing—but not yet stable. Success will go to those who prioritize **correctness**, **security**, and **interoperability** over raw feature velocity.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

---

### **vLLM Digest — 2026-10-08**

#### **1. Today's Highlights**  
The vLLM project continues to prioritize stability and performance for next-gen inference on Blackwell (SM120) and ROCm platforms, with critical fixes for speculative decoding correctness and KV cache corruption in hybrid GDN + MTP configurations. Key PRs address long-standing issues in FlashInfer integration, MoE kernel alignment, and CPU memory cgroup handling—ensuring robustness across diverse deployment topologies.

#### **2. Releases & Breaking Changes**  
*None.* No new releases were published in the last 24 hours. The latest stable version remains **v0.31.0**, with ongoing work focused on nightly builds and regression mitigation.

#### **3. New Model & Hardware Support**  
- **Kimi-K3**: Opt-in Cake kernel support via `VLLM_CAKE_ROUTES` (PR #60470) enables faster MLA and KDA decode paths on NVIDIA GPUs.  
- **Qwen4Exp**: Shared PLE table between co-located replicas improves CPU-offloaded inference efficiency (PR #60390).  
- **ROCm (gfx1201/gfx950)**: Ongoing optimizations for DeepSeek-V4.1 and Qwen3.8-2.4T-A95B on AMD MI355X (PR #57773, #57149), including DBO prefill overlap and AITER MLA padding fixes (PR #59966).  
- **Intel GPU / CPU**: Enhanced NUMA-aware memory management via cgroup headroom respect (PR #60520).

#### **4. Performance & Optimization**  
- **FP8 GEMM Tuning**: Qwen3.5 GDN block-FP8 kernels tuned for SM120 and H20 show **1.67x–2.50x speedups** over generic kernels (PR #54182).  
- **MoE Efficiency**: Reduced draft vocabulary for shared LM-head MTP drafters yields **+25–29% decode throughput** (PR #58578).  
- **Kernel Alignment Fix**: Reverting DeepGEMM’s contiguous-layout alignment from 128 to 64 on SM12x recovers ~15% MoE decode performance lost since #56876 (PR #58624).  
- **Humming Optimization**: Skips redundant MoE input copy when no quantization/activation is applied (PR #59340).  

#### **5. Stability & Regressions**  
- **Critical Bug**: **DFlash2/DSpark + prefix caching corrupts output after cache hit on Qwen3.8-27B NVFP4 (compressed-tensors)** in v0.30/0.31 (Issue #60174). *Fix pending; reproducible only on SM120*.  
- **Speculative Decoding Failure**: Acceptance rate drops to **0% on GLM-5.3-Flash** with native FLASHINFER_MLA_SPARSE_SM120 backend (Issue #59724).  
- **Decode Throughput Drop**: **~3.3x slowdown** from v0.26.0 to v0.29.0 on H100 (Qwen3.6-35B-A3B-FP8) (Issue #57680).  
- **Silent CUDA IMA**: Silent exit during hybrid GDN + MTP k=3 + async scheduling on RTX 3090 (Issue #53726); persists despite prior fixes.  
- **FlashInfer Autotune Wedge**: Forever-wedged autotuning on GB300 due to missing PTX in `trtllm_gemm.cubin` (Issue #58031).  

> ✅ *Fix PRs exist for:*  
> - Speculative decode state recovery in MRV2 (#59600)  
> - Hybrid GDN prefix-cache hit restoration under MTP (#52244)  
> - RecoverSSM state indexing at block boundaries (#59962)

#### **6. What This Means for Application Developers**  
- **Avoid v0.30.0/v0.31.0** if using **Qwen3.8-27B NVFP4 with DFlash2/DSpark and prefix caching**—expect corrupted outputs. Stick to v0.29.0 or wait for patch.  
- **Use `VLLM_CAKE_ROUTES=1`** to unlock faster Kimi-K3 decoding paths where applicable.  
- **Monitor speculative decoding behavior** on SM120 and ROCm—acceptance rates may be severely degraded in current nightlies.  
- **Enable `VLLM_BATCH_INVARIANT=1`** for better consistency in batch-invariant inference across ROCm and multi-GPU setups.  
- **For agent developers:** Be cautious with `tool_choice='none'`—it silently deletes tool-call-shaped content (Issue #55080). Use explicit `tool_calls` instead.  

👉 [View Issues](https://github.com/vllm-project/vllm/issues) | [Review PRs](https://github.com/vllm-project/vllm/pulls)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-10-08**

---

### **1. Today's Highlights**  
The SGLang project continues to deepen its support for advanced speculative decoding and multi-node inference, with key PRs landing in the scheduler (e.g., `avoid redundant terminal decodes`) and diffusion pipeline (`deduplicate FLUX RoPE application`). A major focus remains on stabilizing high-performance backends like FlashInfer and HiCache, particularly for emerging hardware such as B200/B300 and Ascend NPU. Critical CI stability issues persist, with flaky tests and infrastructure failures reported in multiple workflows.

---

### **2. Releases & Breaking Changes**  
*No new releases were published in the last 24 hours.*  
- **Pending**: The upcoming v0.5.21 release is expected to include fixes for `--enable-unified-memory` crashes (#42653) and MTP draft KV pool sizing issues (#42510), but no formal changelog has been issued yet.

---

### **3. New Model & Hardware Support**  
- ✅ **Apple Silicon Serving Redesign** ([#32321](https://github.com/sgl-project/sglang/issues/32321)): Major redesign underway to enable Torch-owned SRT path with exported MLX model regions — critical for native Apple Silicon performance.
- ✅ **Ascend NPU Support Expansion**: 
  - Full DCP (Decode Context Parallelism) support for Kimi-K3 via sharded MLA KV cache ([#40825](https://github.com/sgl-project/sglang/pull/40825))
  - Fix for packed MTP KV transfers in HiCache ([#43031](https://github.com/sgl-project/sglang/pull/43031))
- ✅ **New Model Integration**: Added support for Clef and Clef-Flash decision models on `/v1/systemone` ([#42721](https://github.com/sgl-project/sglang/pull/42721))

---

### **4. Performance & Optimization**  
- 🔧 **Speculative Decoding Enhancements**:
  - Throughput-aware adaptive speculative steps: introduced a cost-guided policy to dynamically adjust speculative steps based on throughput ([#28045](https://github.com/sgl-project/sglang/pull/28045))
  - Overlap scheduling for FDFO diffusion models: enables CPU/GPU overlap during denoise steps, reducing idle time ([#40756](https://github.com/sgl-project/sglang/pull/40756))
- 📈 **Kernel-Level Optimizations**:
  - Deduplicated FLUX positional embedding logic across platforms ([#43002](https://github.com/sgl-project/sglang/pull/43002))
  - Eliminated redundant FP8 scale relayout copies on gfx95 AMD GPUs ([#41030](https://github.com/sgl-project/sglang/pull/41030))
- ⚙️ **Memory & Scheduling Improvements**:
  - Avoided redundant terminal decodes via output-budget reservations ([#42720](https://github.com/sgl-project/sglang/pull/42720))
  - Improved token slot allocation for hybrid-SWA models under unified memory ([#42653](https://github.com/sgl-project/sglang/issues/42653))

---

### **5. Stability & Regressions**  
⚠️ **High Severity**:
- **Hybrid-SWA + Radix Cache Admission Livelock** ([#41579](https://github.com/sgl-project/sglang/issues/41579)): Scheduler can permanently block requests due to SWA prefix lock pinning finished chunks — affects MiMo-V2.6-Flash users.
- **DeepSeek-V4 on SM120: C4 Indexer Row-Chunk Planner Disabled** ([#42146](https://github.com/sgl-project/sglang/issues/42146)): Default `SGLANG_FP8_PAGED_MQA_LOGITS_TORCH=True` disables optimization, causing 3.3–3.8 GiB memory bloat at 128k context.
- **EAGLE/MTP Speculative Decoding OOM at Startup** ([#42510](https://github.com/sgl-project/sglang/issues/42510)): Redundant `embed_tokens`/`lm_head` copies cause under-sized KV pool → startup OOM on large models.

⚠️ **Medium Severity**:
- **GLM-5.3-Flash NVFP4 Crashes on B200/B300** ([#41939](https://github.com/sgl-project/sglang/issues/41939)): Loops in reasoning without final answer at TP4.
- **FlashInfer Autotune Cache Discarded Every Boot** ([#40320](https://github.com/sgl-project/sglang/issues/40320)): Per-rank MoE shape mismatches trigger full re-tuning on every restart — significant cold-start latency.

🛠️ **Fixes in Progress**:
- PRs addressing GLM-5.3-Flash crashes and MoE weight loading issues are under review ([#36711](https://github.com/sgl-project/sglang/issues/36711), [#36653](https://github.com/sgl-project/sglang/issues/36653)).
- CI infrastructure improvements ongoing ([#42752](https://github.com/sgl-project/sglang/issues/42752)).

---

### **6. What This Means for Application Developers**  
- **Avoid `SGLANG_FP8_PAGED_MQA_LOGITS_TORCH=True` on SM120** unless you’re benchmarking — it disables an important memory optimization.
- **Use `--enable-unified-memory` cautiously** with hybrid-SWA models; it may trigger out-of-memory errors due to improper slot allocation.
- **Monitor speculative decoding behavior** on models like DeepSeek-V4 and GLM-5.3-Flash — known regressions in accuracy and stability exist.
- **Leverage the latest PRs** for improved scheduling (e.g., avoiding redundant decodes) and better diffusion performance (FDFO overlap).
- **Expect frequent CI instability** — test PRs locally before merging, especially those touching FlashInfer or MoE kernels.

> 💡 *Pro Tip*: Use `/update_weights_from_disk` with caution — parameters like `is_async` and `keep_pause` currently have no effect ([#42544](https://github.com/sgl-project/sglang/issues/42544)). Wait for fix or implement workaround until resolved.

---  
*Digest generated from [sgl-project/sglang](https://github.com/sgl-project/sglang) — October 8, 2026*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-10-08**

---

### **1. Today's Highlights**  
The latest updates focus on expanding multimodal support with Coher2 Vision and GLM5-Next MTP (Multi-Token-Prediction), alongside critical performance improvements for MoE expert caching on GPU and enhanced Metal/MetalFX kernel optimizations. New security hardening in `mtmd` prevents audio memory exhaustion attacks, while ongoing work accelerates Q4_K/Q6_K dequantization and improves Flash Attention stability across backends.

---

### **2. Releases & Breaking Changes**  
No breaking changes or new release versions were tagged today. However, **b11481** introduced full Coher2 Vision model support via `mtmd`, requiring updated model GGUFs with proper vision-specific tensor mappings. Ensure compatibility if using `--vision-model` flags.

- [PR #30062](https://github.com/ggml-org/llama.cpp/pull/30062) – Add Coher2 Vision support
- [PR #29928](https://github.com/ggml-org/llama.cpp/pull/29928) – Add GLM5-Next MTP graph support

---

### **3. New Model & Hardware Support**  
- ✅ **Cohere2 Vision**: Full integration into `mtmd` pipeline with new vision encoder handling.
- ✅ **GLM5-Next MTP**: Added multi-token-prediction head as `graph_mtp`, enabling faster speculative decoding for this architecture.
- ✅ **Apple Metal**: Expanded few-row MMA matmul to support BF16, Q1_0, Q2_0, MXFP4, Q2_K, Q3_K, TQ2_0, and IQ quant types.
- ✅ **MUSA (MediaTek)**: Enabled tile lightning indexer kernel for improved offload performance.
- ✅ **Hexagon (Qualcomm)**: Improved Q6_K dequant speedup, GELU accuracy, and added tiled GET_ROWS support.

> 📌 *Note:* These are runtime enhancements—models must be converted with compatible GGUF headers.

---

### **4. Performance & Optimization**  
- **MoE Expert Caching**: PR #29887 adds GPU-resident cache for MoE experts kept in host memory, reducing CPU-GPU data transfers by up to 40% in high-expert-count models (e.g., Qwen3.8-Flash-Next).
- **Metal Optimization**: Generic few-row MMA now supports 16-weight dequantizers across multiple types (including Q3_K, Q4_K), improving throughput on Apple Silicon by ~18–25% for mixed-precision inference.
- **CUDA/HIP**: 
  - PR #29609 fixes NaN propagation in MoE selection, preventing silent correctness issues during speculative decoding.
  - PR #29050 adds MFMA path for CDNA2 (ROCm), unlocking matrix-core utilization in DeepSeek-V3.2/V4 indexing.
- **Hexagon**: Q6_K dequantization sped up by ~2.1x; GELU accuracy improved via HVX tanh approximation.

---

### **5. Stability & Regressions**  
Top severity issues reported today:

| Issue | Severity | Status | Fix PR |
|------|----------|--------|--------|
| [#29811](https://github.com/ggml-org/llama.cpp/issues/29811): Qwen 3.8 Flash + MTP eval crash at startup | High | Open | ❌ No fix yet |
| [#30091](https://github.com/ggml-org/llama.cpp/issues/30091): `llama-server` crashes due to "bad allocation" in long conversations | High | Open | ❌ No fix yet |
| [#30078](https://github.com/ggml-org/llama.cpp/issues/30078): Stochastic tool-call emission + silent drops in Qwen4Exp | Medium | Open | ❌ No fix yet |
| [#28734](https://github.com/ggml-org/llama.cpp/issues/28734): CUDA decode slows linearly with context | Medium | Open | ❌ No fix yet |

> 🔥 Critical note: Multiple users report **silent EOS** beyond 130k context on Qwen3.5-hybrid models — likely tied to recurrent state depth × layer count degradation.

---

### **6. What This Means for Application Developers**  
- **Use MTP carefully**: While GLM5-Next MTP is now supported, ensure your spec-draft pipelines use consistent heads and avoid mixing layouts (e.g., Gemma DSpark vs. Qwen DFlash).
- **Security-first input handling**: With the `mtmd` audio chunking fix (PR #30130), always validate media input length—malicious files can still trigger DoS if not bounded.
- **GPU MoE caching is ready**: For large MoE models (e.g., Qwen3.8-Flash-Next), enable `--moe-cache-gpu` and monitor memory usage—this reduces latency and avoids host bottlenecks.
- **Avoid unstable builds**: Do not deploy `b11481` or `b11471` in production if using Qwen3.8-Flash-Next with MTP or long-context inference until #29811 is resolved.
- **Consider backend-specific tuning**: Use `--n-gpu-layers` strategically—Metal and MUSA benefit from higher layer splits; Vulkan may require Resizable BAR enabled.

> 💡 Pro tip: Monitor `--log-level=4` output for early signs of MoE misbehavior or token corruption in speculative flows.

---  
*Source: [github.com/ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-10-08**

---

### **1. Today's Highlights**  
The latest release, **v0.40.1**, addresses critical stability issues in MLX and Windows symlink handling, while improving cloud API proxying for billing and usage tracking. A surge in user-reported regressions around `clef-flash`, `qwen3.6:35b-mlx`, and model pulling behind proxies highlights ongoing challenges with recent engine migrations—particularly on macOS M-series chips and Windows systems.

---

### **2. Releases & Breaking Changes**  
- **v0.40.1 (Released)**:  
  - Fixed MLX runtime panic due to threadgroup limit overflow (`mlx: Maximum threads per threadgroup is 896 but requested 1024`) — [Issue #18846](https://github.com/ollama/ollama/issues/18846), [PR #18844](https://github.com/ollama/ollama/pull/18844)  
  - Resolved Windows symlink corruption after auto-update that rendered models unusable — [Issue #18847](https://github.com/ollama/ollama/issues/18847), [PR #18852](https://github.com/ollama/ollama/pull/18852)  
  - Enabled cloud usage and balance API proxying via server-side middleware — [PR #18829](https://github.com/ollama/ollama/pull/18829)  
  - Removed CLI account step during onboarding; direct launcher access now defaults — [PR #18826](https://github.com/ollama/ollama/pull/18826)

> ⚠️ **Migration Note**: Users upgrading from 0.35.x may encounter model pull failures behind HTTP proxies or MLX crashes on Macs — see regression reports below.

---

### **3. New Model & Hardware Support**  
- **New Model Request**: Community push for **MIMO v2.5 (1M context window)** on Ollama Cloud — MIT-licensed, available at [Hugging Face](https://huggingface.co/XiaomiMiMo/MiMo-V2.5) — [Issue #15887](https://github.com/ollama/ollama/issues/15887)  
- **MLX Backend Enhancements**:  
  - Support for mixed-precision quantization (4-bit + per-layer 8-bit overrides) now being tested — [Issue #18789](https://github.com/ollama/ollama/issues/18789)  
  - `qwen3.6:35b-mlx` and `clef-flash` now supported on Apple Silicon (M-series) via MLX backend — though stability remains fragile post-0.40.0

---

### **4. Performance & Optimization**  
- **MLX Inference Speed**: Quantized decision models (e.g., `mxfp8`) are **slower than bf16** during prefill on M5 Pro — likely due to kernel overhead — [Issue #18833](https://github.com/ollama/ollama/issues/18833)  
- **Connection Reuse**: PR #18397 proposes reusing `llama-server` HTTP connections for embeddings, reducing latency and connection churn under high load — [PR #18397](https://github.com/ollama/ollama/pull/18397)  
- **Context Window Tuning**: Proposal to dynamically set `CLAUDE_CODE_MAX_CONTEXT_TOKENS` based on model’s actual context length (vs. default 180k) — [PR #18855](https://github.com/ollama/ollama/pull/18855)

---

### **5. Stability & Regressions**  
| Severity | Issue | Description | Fix Status |
|---------|-------|-------------|------------|
| 🔴 High | [Issue #18846](https://github.com/ollama/ollama/issues/18846) | MLX runner panics with "Maximum threads" error on M-series Macs after 0.40.0 upgrade | ✅ Patched in v0.40.1 |
| 🔴 High | [Issue #18856](https://github.com/ollama/ollama/issues/18856) | `qwen3.6:35b-mlx` crashes on MLX backend in 0.40.x — works fine in 0.35.0 | ❌ No fix yet |
| 🔴 High | [Issue #18840](https://github.com/ollama/ollama/issues/18840) | `/api/chat` returns HTTP 500 “unexpected end of JSON input” with `qwen3.8:27b` | 🟡 Partial fix in PR #18849 |
| 🔴 High | [Issue #18847](https://github.com/ollama/ollama/issues/18847) | Windows symlinks fail after migration → model becomes untrustworthy | ✅ Fixed in PR #18852 |
| 🟡 Medium | [Issue #18769](https://github.com/ollama/ollama/issues/18769) | `clef-flash` fails on `/v1/systemone` with “non-finite logit” on both CPU/GPU | ❌ No fix yet |
| 🟡 Medium | [Issue #18825](https://github.com/ollama/ollama/issues/18825) | `embeddinggemma-2:740m` fails to pull on Linux without MLX support | ⚠️ Clarify MLX requirement in docs |

---

### **6. What This Means for Application Developers**  
- **Avoid v0.40.0–0.40.1** if running `qwen3.6:35b-mlx`, `clef-flash`, or other MLX-optimized models on Apple Silicon — downgrade to **0.35.1** until regressions are resolved.  
- **Handle streaming errors explicitly**: The `unexpected end of JSON input` bug (PR #18849) suggests unreliable stream termination — validate response integrity in your clients.  
- **Use `/v1/systemone` cautiously**: Decision models like `clef-flash` show instability in newer versions — test thoroughly before production use.  
- **Model naming matters**: GGUF models lacking “12b” in the name may be misclassified as small variants — e.g., Gemma 4 12B → uses wrong renderer — [Issue #18824](https://github.com/ollama/ollama/issues/18824).  
- **Cloud integrations**: Consider migrating to `hf.co` or `ollama.com` model references with explicit tags; avoid legacy `dd20bb89...r2.cloudflarestorage.com` redirects — [Issue #18831](https://github.com/ollama/ollama/issues/18831).

> 💡 **Pro Tip**: Use `ollama serve --log-level debug` to trace proxy and manifest resolution issues when pulling models behind firewalls.

---  
*Data source: github.com/ollama/ollama | Updated: 2026-10-08*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-10-08**

---

### **1. Today’s Highlights**  
The LiteLLM project continues its rapid evolution with a focus on **security hardening**, **Rust migration progress**, and **enhanced observability** for multi-tenant deployments. Key developments include the rollout of **cosign-signed Docker images** across all releases (v1.100.5–v1.106.0-dev.1), a major PR to support **Databricks ai_decide** as a `/v1/decisions` provider, and critical fixes to **streaming behavior**, **JWT validation**, and **response handling in real-time audio workflows**.

---

### **2. Releases & Breaking Changes**  
- **All recent releases (v1.100.5 through v1.106.0-dev.1)** are signed using [cosign](https://github.com/BerriAI/litellm/commit/0112e53) with a consistent key — ensure you verify image integrity before deployment.
- **v1.105.0-rc.2** includes early stabilization for new features like `/v1/decisions` provider routing and enhanced retry logic; intended for testing prior to GA.
- **Migration Note**: The ongoing Rust migration (tracked in [#31263](https://github.com/BerriAI/litellm/issues/31263)) is progressing toward sub-1ms overheads. Early beta access available via [Google Form](https://docs.google.com/forms/d/e/1FAIpQLSecWdOjkzjEson2UiZpD...).

---

### **3. New Model & Hardware Support**  
- **New Provider Added**: `microsoft_365_copilot` now supported via OAuth token exchange ([PR #45158](https://github.com/BerriAI/litellm/pull/45158)), enabling secure integration with Microsoft Graph Copilot Chat API.
- **GitHub Copilot per-user OAuth**: `github_copilot` models now support **per-user GitHub OAuth credentials** ([PR #45241](https://github.com/BerriAI/litellm/pull/45241)), improving privacy and access control.
- **Databricks ai_decide**: Added as a native `/v1/decisions` provider and auto-router decider ([PR #45200](https://github.com/BerriAI/litellm/pull/45200)).

---

### **4. Performance & Optimization**  
- **Rust Migration Progress**: The core proxy engine is being rewritten in Rust ([#31263](https://github.com/BerriAI/litellm/issues/31263)). Initial benchmarks show potential for **sub-1ms overheads** — critical for high-throughput agent systems.
- **Efficient Context Caching**: Vertex AI context cache storage now billed explicitly per token-hour ([PR #45019](https://github.com/BerriAI/litellm/pull/45019)), aligning spend tracking with Google Cloud billing.
- **Streaming Efficiency**: Fixes to tool call finish reasons during streaming (`response_format`) and input audio bridging reduce unnecessary retries and improve fidelity ([PR #45147](https://github.com/BerriAI/litellm/pull/45147), [#45224](https://github.com/BerriAI/litellm/pull/45224)).

---

### **5. Stability & Regressions**  
- **Critical**: `gpt-5` thinking outputs missing in OpenWebUI due to OpenRouter compatibility gap ([#13419](https://github.com/BerriAI/litellm/issues/13419), 51 comments). No fix yet — affects developers using structured reasoning.
- **High Severity**: Virtual key updates fail with "enterprise-only" error despite no enterprise usage ([#15230](https://github.com/BerriAI/litellm/issues/15230), 39 comments). Fix PR pending.
- **Streaming Bug**: Partial generic chunks cause `KeyError` due to incomplete field validation ([#43487](https://github.com/BerriAI/litellm/issues/43487), 7 comments).
- **Real-Time Audio**: Duplicate `response.create` injection causes `conversation_already_has_active_response` in voice sessions without guardrails ([#31726](https://github.com/BerriAI/litellm/issues/31726), 3 comments).
- **Fixes Merged**: 
  - Retry-after headers respected in completion calls ([#45247](https://github.com/BerriAI/litellm/pull/45247))
  - JWT team ID verification added ([#44182](https://github.com/BerriAI/litellm/pull/44182))

---

### **6. What This Means for Application Developers**  
- **Security First**: Use `cosign verify` on all LiteLLM Docker images — signing is now mandatory across all releases.
- **Multi-Tenant Control**: Leverage the new **team-based token budgets** ([#44555](https://github.com/BerriAI/litellm/issues/44555)) and per-user OAuth for granular model access.
- **Avoid Pitfalls**: Avoid `gpt-5` + OpenWebUI until [#13419](https://github.com/BerriAI/litellm/issues/13419) is resolved; use alternative endpoints or disable thinking output if needed.
- **Future-Proof Your Stack**: Begin evaluating the **Rust-based LiteLLM** (via early access) for low-latency inference pipelines. Expect performance gains in high-frequency agent workloads.
- **Observability Upgrades**: New `/lens/feedback` API ([#45171](https://github.com/BerriAI/litellm/pull/45171)) and per-status-code failure tracking ([#45244](https://github.com/BerriAI/litellm/pull/45244)) enable deeper debugging and user experience insights.

---  
*Digest generated from GitHub activity: [BerriAI/litellm](https://github.com/BerriAI/litellm)*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

---

### **Unsloth Digest — 2026-10-08**

#### **1. Today's Highlights**  
Unsloth v0.1.904-beta introduces **decision model training**, enabling users to transform any text or vision LLM into a high-accuracy (up to 80%) Jev-style decision engine—complete with end-to-end train, test, export, and serve workflows. The release also brings native ComfyUI support, improved diffusion pipelines, and a refined desktop browser experience.

New PRs focus on critical UI/UX refinements: fixing dropdown glow performance, enhancing video attachment handling, improving security around `np.load` and `whisper-server`, and optimizing MoE expert caching for large models under memory pressure.

---

#### **2. Releases & Breaking Changes**  
- **v0.1.904-beta**:  
  - ✅ **Train your own Decision Model**: Convert any LLM into a structured decision agent via prompt engineering and fine-tuning. Accuracy improves from ~30% to 80%.  
  - 🖼️ Native ComfyUI integration for visual workflow orchestration.  
  - 🔧 Enhanced desktop browser: supports video attachments in-panel, download tracking, and macOS right-click downloads.  
  - 🔐 Security hardening: `np.load(..., allow_pickle=True)` now prompts before execution; `whisper-server` served under random per-launch paths.  
  - [GitHub Release](https://github.com/unslothai/unsloth/releases/tag/v0.1.904-beta)

> *Note: No breaking API changes reported; backward compatibility maintained.*

---

#### **3. New Model & Hardware Support**  
- **Model Architectures**:  
  - Full support for **Qwen3.5/3.6** in safetensors and MLX formats with preserved tool call arguments and reasoning control.  
  - Experimental support for **Bonsai models** (ternary, 1bit) via updated loader logic.  
  - Expanded **vision dataset training** to handle mixed-image/text rows (e.g., ScienceQA).  

- **Hardware & Backends**:  
  - **ROCm (AMD)**: Improved `pip install "unsloth[amd]"` stability; prevents accidental CUDA torch override from PyPI.  
  - **Apple M4 Pro (MPS)**: Fixes VAE tiling issues when generating images from input images.  
  - **Windows App Containers (MXC)**: Robust fallback to user-space Python paths to avoid `ReadGrantError` during sandbox init.  
  - **CPU/GPU Hybrid**: Auto-detects MoE expert spill to RAM and dynamically adjusts cache size (`--moe-cache-mib auto`) and micro-batch (`--ubatch-size 2048`).  

---

#### **4. Performance & Optimization**  
- **MoE Efficiency**:  
  - When MoE experts spill to system RAM, Studio now uses `--ubatch-size 2048` (vs default 512), increasing throughput by up to **~4x** on large models.  
  - Dynamic GPU cache sizing via `--moe-cache-mib auto` reduces thrashing and improves latency under heavy RAG workloads.  
  - [PR #12950](https://github.com/unslothai/unsloth/pull/12950), [PR #12951](https://github.com/unslothai/unsloth/pull/12951)

- **Embedding Pipeline**:  
  - `unsloth/embeddinggemma-2` and `embeddinggemma-300m` now use **llama-server** instead of CPU-based `sentence-transformers`, boosting indexing speed from ~5 chunks/s to **~129 chunks/s** on NVIDIA/AMD GPUs.  
  - [PR #13005](https://github.com/unslothai/unsloth/pull/13005), [PR #13006](https://github.com/unslothai/unsloth/pull/13006)

- **Latency Reduction**:  
  - Fixed excessive CPU usage (~95% across all cores) in idle state on Windows (Ryzen 9 7900X + ROCm).  
  - [Issue #12942](https://github.com/unslothai/unsloth/issues/12942) → Fix pending in PR pipeline.

---

#### **5. Stability & Regressions**  
| Severity | Issue | Status | Fix PR / Notes |
|---------|------|--------|----------------|
| ⚠️ High | **Long-context chat lag** on Windows 10 (Geforce RTX) | Open | [Issue #12552](https://github.com/unslothai/unsloth/issues/12552) |
| ⚠️ High | **Qwen Image 2.1 Q4_K_M fails on M5 Max (48GB RAM)** | Open | [Issue #11792](https://github.com/unslothai/unsloth/issues/11792) – likely memory fragmentation or quantization mismatch |
| ⚠️ High | **Models fail to load after update (v0.1.903-beta)** | Open | [Issue #12842](https://github.com/unslothai/unsloth/issues/12842) – possible cache corruption or dependency conflict |
| ⚠️ High | **Int4 loader does not validate `group_size` vs `weight_scale` shape** | Open | [Issue #12955](https://github.com/unslothai/unsloth/issues/12955) – could lead to silent inference errors |
| ⚠️ Medium | **System TTS reads markdown formatting aloud (asterisk, underscore)** | Closed | [Issue #12547](https://github.com/unslothai/unsloth/issues/12547) – fixed in v0.1.902-beta |
| ⚠️ Medium | **Live Monitor widget overlaps with popover** | Closed | [Issue #12623](https://github.com/unslothai/unsloth/issues/12623) – resolved in recent UI refactor |

> **Note**: Several regressions are tied to new MoE, embedding, and Web search logic. Priority fixes expected in next beta.

---

#### **6. What This Means for Application Developers**  
- **Build decision agents directly in Unsloth**: Use the new `DecisionModelTrainer` API to convert LLMs into deterministic, high-accuracy decision engines—ideal for AI agents requiring structured outputs.
- **Leverage MoE optimizations**: For large models (>30B), rely on dynamic `--ubatch-size` and `--moe-cache-mib auto` to achieve near-native performance even when experts spill to RAM.
- **Secure embeddings & inference**: Use `llama-server` backend for fast, GPU-accelerated embeddings. Avoid `sentence-transformers` for production-grade RAG.
- **Enhanced UX patterns**: Use the new browser panel features—video playback, right-click downloads, inline file editing—to build richer agent interfaces.
- **Watch for regression risks**: Avoid `int4` checkpoints with inconsistent `group_size` metadata; monitor model loading post-updates until v0.1.904 stabilizes.

> 💡 *Best Practice*: Always validate model loads post-update and use `unsloth[amd]` only with ROCm-compatible torch builds.

---  
*Digest generated: 2026-10-08 | Source: [unslothai/unsloth GitHub](https://github.com/unslothai/unsloth)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*