# AI Infrastructure Digest 2026-10-06

> Generated: 2026-10-06 02:28 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-10-06**

---

### **1. Ecosystem Overview**  
The AI inference infrastructure landscape in Q4 2026 is rapidly maturing, characterized by deep specialization across serving engines, model runtime optimization, and agent-native tooling. Projects are converging on high-performance, low-latency inference for next-gen models (e.g., GLM-5.3-Flash, Qwen3.8-series, DeepSeek-V4.1) with strong focus on distributed execution, mixed modalities, and speculative decoding. AMD ROCm support has become a strategic battleground, while NVIDIA SM100/GB10 hardware adoption accelerates. The ecosystem is now bifurcated between *high-throughput, multi-GPU serving platforms* (vLLM, SGLang) and *lightweight, local-first runtimes* (llama.cpp, Ollama), with LiteLLM and Unsloth filling critical integration and fine-tuning roles.

---

### **2. Activity Comparison**  

| Project       | Issues Open (↑) | PRs Merged (↑) | Release Status       |
|---------------|------------------|------------------|------------------------|
| **vLLM**      | 98               | 717              | v0.31.0 (stable)       |
| **SGLang**    | 87               | ~200             | No new release         |
| **llama.cpp** | 115              | 112              | v0.6.0 (major update)  |
| **Ollama**    | 124              | ~100             | No new release         |
| **LiteLLM**   | 112              | ~150             | Patch releases pending |
| **Unsloth**   | 94               | ~120             | No new release         |

> ✅ *vLLM and llama.cpp lead in active development velocity; Ollama and Unsloth show higher issue density indicating stability challenges.*

---

### **3. Model Support Race**  

| New Model / Architecture       | Supported By                          | Notes |
|-------------------------------|----------------------------------------|------|
| **GLM-5.3-Flash (320B hybrid)** | ✅ **vLLM**, ✅ **llama.cpp**, ⚠️ SGLang (tracking) | Only vLLM and llama.cpp offer full native support; llama.cpp leads in MTP spec + vision input |
| **Qwen3.8-2.4T-A95B (ROCm)**   | ✅ **vLLM** (ROCm), ✅ **SGLang** (partial) | vLLM is the only project with full ROCm+MXFP8 fusion support |
| **DeepSeek-V4.1-Flash**        | ✅ **vLLM** (SM100 + NVFP4 KV cache), ✅ **SGLang** (tracking), ⚠️ **llama.cpp** (MTP spec) | vLLM dominates in performance optimization |
| **Clef Decision Model (vision+text)** | ✅ **llama.cpp** (native), ⚠️ Ollama (limited) | Only llama.cpp fully supports multimodal input natively |
| **Kimi-K3 Quark FP8/MXFP4**    | ✅ **SGLang** (ROCm), ⚠️ vLLM (experimental) | SGLang leads in AMD-specific fusion workloads |

> 🏆 **Winner: vLLM** – Most comprehensive model & hardware support, especially for NVIDIA SM100 and ROCm-optimized architectures.

---

### **4. Performance Frontier**  

| Optimization Focus           | Leading Projects                     | Key Developments |
|-------------------------------|---------------------------------------|------------------|
| **KV Cache Efficiency**       | ✅ vLLM (NVFP4 + FlashMLA), ✅ SGLang (DCP) | vLLM achieves ~2x memory savings via NVFP4 compression |
| **Speculative Decoding**      | ✅ vLLM, ✅ SGLang, ✅ llama.cpp (MTP) | vLLM leads in throughput gains (+11% decode); SGLang advances DCP |
| **Batching & Context Parallelism** | ✅ SGLang (Prefill CP for MLA), ✅ vLLM (multi-GPU data parallel) | SGLang pushing boundaries in prefill CP for large MLA models |
| **Quantization & Kernel Fusion** | ✅ vLLM (MXFP8 + inverse RoPE), ✅ SGLang (Kimi-K3 FP8 fusion), ✅ llama.cpp (MMQ/NVFP4) | vLLM and SGLang dominate in backend-specific kernel optimizations |
| **Multi-GPU & Disaggregation** | ✅ vLLM (/derender), ✅ SGLang (DCP/CP), ⚠️ Ollama (limited) | vLLM offers most mature disaggregated serving API |

> 🔥 **Frontier Focus**: High-efficiency inference on **SM100 GPUs** (NVIDIA) and **ROCm GCN/MI355X** (AMD), with increasing emphasis on **context-aware batching** and **MoE-aware scheduling**.

---

### **5. Layer Positioning**  

| Project       | Primary Layer                | Role Summary |
|---------------|-------------------------------|-------------|
| **vLLM**      | **Serving Engine**            | High-throughput, GPU-optimized inference engine; core of cloud-scale LLM serving |
| **SGLang**    | **Serving Engine + Runtime**  | Specialized for context parallelism and speculative decoding; bridges inference and orchestration |
| **llama.cpp** | **Local Runtime / Embedded**  | Lightweight, cross-platform inference engine optimized for edge and desktop deployment |
| **Ollama**    | **Gateway / Local Runtime**   | Developer-friendly CLI/toolchain; acts as gateway to multiple backends with MLX/CUDA/ROCm support |
| **LiteLLM**   | **API Gateway / Orchestration** | Universal proxy layer for cost tracking, routing, and multi-provider management |
| **Unsloth**   | **Fine-Tuning & Training UX** | End-to-end LoRA training and export workflow; focuses on developer experience for model adaptation |

> 📊 *vLLM and SGLang are the dominant high-performance inference engines; llama.cpp and Ollama serve as accessible runtime layers; LiteLLM and Unsloth operate at the integration and training layers.*

---

### **6. Trend Signals**  

#### 🔍 **Key Industry Trends Extracted from Today’s Activity**:
1. **ROCm Is Now a First-Class Target** – vLLM and SGLang have made significant strides in AMD hardware support (ROCm 101 RC, MI355X, A95B), signaling that **NVIDIA dominance is being challenged**.
2. **Speculative Decoding Is Maturing Beyond Drafting** – MTP-style speculation (llama.cpp), hybrid GDN layouts (vLLM), and context parallelism (SGLang) indicate a shift toward **predictive, stateful inference** for agents.
3. **Hybrid Models Demand Hybrid APIs** – The rise of **GLM-5.3-Flash (320B)** and **Clef (vision+text)** necessitates **mixed-input batch APIs** (`llama_batch_ext`, `VLLM_USE_RUST_FRONTEND`), pushing developers toward more expressive interfaces.
4. **Stability > Speed in Production** – Multiple high-severity regressions in Ollama, SGLang, and Unsloth suggest that **performance gains are being offset by growing complexity in model-specific parsing and memory handling**.
5. **Rust Frontend Is Near Parity** – vLLM’s `VLLM_USE_RUST_FRONTEND=1` nearing full engine integration signals a **move toward lower-latency, high-throughput deployments** in mission-critical systems.

#### 🎯 **What Application Developers Should Watch**:
- **Adopt `llama_batch_ext` immediately** if using MTP or multimodal inputs — legacy APIs are deprecated.
- **Prioritize vLLM for production inference** on NVIDIA SM100/GPUs with high concurrency needs.
- **Monitor Ollama Cloud billing metrics carefully** — usage reporting remains misaligned post-migration.
- **Avoid `glm-ocr:latest` and `Muse-Glimmer-30B` until patches land** — both have severe output quality issues.
- **Use LiteLLM’s self-serve budgeting** (`self_serve_budget_policy`) to prevent overage costs in multi-tenant environments.

> ✅ **Bottom Line**: The infrastructure stack is evolving fast—**choose your stack based on use case**:  
> - **High-scale, low-latency serving? → vLLM**  
> - **Agent workflows with speculation? → SGLang + vLLM**  
> - **Edge/local deployment? → llama.cpp**  
> - **Developer convenience + multi-backend access? → Ollama + LiteLLM**  
> - **Fine-tuning & LoRA exports? → Unsloth**

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-10-06**

---

### **1. Today's Highlights**  
The vLLM v0.31.0 release introduces major performance improvements for **DeepSeek-V4.1-Flash**, enabling SM100 default support via FlashMLA with NVFP4 compressed KV cache and DeepGEMM sparse MQA logits. Key stability fixes address speculative decoding correctness, MoE kernel correctness under quantization, and multi-GPU coordination in data-parallel setups. A surge in PRs focuses on disaggregated serving, tool calling robustness, and ROCm/AMD hardware optimization.

---

### **2. Releases & Breaking Changes**  
- **v0.31.0** (Released: 2026-10-05)  
  - [GitHub Release](https://github.com/vllm-project/vllm/releases/tag/v0.31.0)  
  - Includes 717 commits from 307 contributors (96 new).  
  - No breaking API changes reported; backward compatibility maintained.  
  - **Note**: `VLLM_USE_RUST_FRONTEND=1` remains experimental but now supports full engine integration.

---

### **3. New Model & Hardware Support**  
- **Model Support**:  
  - Full support for **Qwen3.8-2.4T-A95B-gfx950 / MI355X** (ROCm) via dedicated optimization tracker ([#57149](https://github.com/vllm-project/vllm/issues/57149)).  
  - Experimental support for **GLM-5.3-Flash** on ROCm ([#59413](https://github.com/vllm-project/vllm/issues/59413)) and native inference with W4A16 quantization ([#56868](https://github.com/vllm-project/vllm/issues/56868)).  
  - **Qwen3-Omni** now correctly handles interleaved M-RoPE boundaries with audio/video inputs ([PR #59842](https://github.com/vllm-project/vllm/pull/59842)).  

- **Hardware & Backend**:  
  - **ROCm (AMD)**: Fused QK-norm+RoPE+gate Triton kernel enabled for Qwen3-Next/Qwen3.5 ([PR #51406](https://github.com/vllm-project/vllm/pull/51406)), and MXFP8 + inverse RoPE fusion for DeepSeek-V4/V4.1 aiter backend ([PR #60154](https://github.com/vllm-project/vllm/pull/60154)).  
  - **CUDA (NVIDIA)**: SM100 default FlashMLA with NVFP4 compressed KV cache for DeepSeek-V4.1 ([#56935](https://github.com/vllm-project/vllm/issues/56935)).  
  - **GB10 (DGX Spark)**: Performance profiling and weight loading optimizations underway ([#58726](https://github.com/vllm-project/vllm/issues/58726)).

---

### **4. Performance & Optimization**  
- **DeepSeek-V4.1-Flash**: FlashMLA + NVFP4 KV cache enables ~2x memory efficiency and faster prefill/decode on SM100 GPUs ([#56935](https://github.com/vllm-project/vllm/issues/56935)).  
- **Speculative Decoding**:  
  - Reduced redundant DFlash metadata rebuilds during full graph replay → **+11% decode throughput** ([PR #54485](https://github.com/vllm-project/vllm/pull/54485)).  
  - Fixed prefix-cache hit loss in hybrid GDN layouts under MTP spec decoding → **~30–40% batch throughput gain** on reuse-heavy workloads ([PR #52244](https://github.com/vllm-project/vllm/pull/52244)).  
- **Kernel-Level**:  
  - Two-row tiles for small Engram lookups improve latency by **6.1–28.1%** across GB300 user loads ([PR #57893](https://github.com/vllm-project/vllm/pull/57893)).  
  - Triton attention preserves small FP8 softmax weights via reversible scaling → prevents token corruption ([PR #60156](https://github.com/vllm-project/vllm/pull/60156)).  
- **Startup Time**: Preload FlashInfer autotune table via daemon → reduces cold-start latency for high-concurrency deployments ([PR #60085](https://github.com/vllm-project/vllm/pull/60085)).

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Fix PR(s) |
|---------|------|--------|----------|
| 🔴 High | **GLM-5.3-Flash long-decode degeneration** after accumulated reasoning decode | Open ([#56868](https://github.com/vllm-project/vllm/issues/56868)) | Pending |
| 🔴 High | **Qwen3.8-flash-next 0% MTP acceptance rate** in disaggregated PD serving | Open ([#59642](https://github.com/vllm-project/vllm/issues/59642)) | Pending |
| 🟡 Medium | **DeepSeek-V4-Flash fails to start on B300 (SM100)** due to kernel launch failure | Open ([#46796](https://github.com/vllm-project/vllm/issues/46796)) | In progress |
| 🟡 Medium | **`prompt_logprobs` silently corrupted** with MTP speculative decoding | Open ([#53488](https://github.com/vllm-project/vllm/issues/53488)) | In progress |
| 🟢 Low | **FlashInfer sampler JIT crashes** if `nvcc` not found | Open ([#49497](https://github.com/vllm-project/vllm/issues/49497)) | Workaround: use native sampler |

---

### **6. What This Means for Application Developers**  
- **For agents & LLM apps**: Expect better performance and stability on **DeepSeek-V4.1-Flash** and **Qwen3.8-series** models with reduced latency and higher throughput. Use `VLLM_BATCH_INVARIANT=1` with caution — recent fixes ensure consistency in MoE gate routing and attention kernels ([PR #59985](https://github.com/vllm-project/vllm/pull/59985), [#60122](https://github.com/vllm-project/vllm/pull/60122)).  
- **For production serving**: Enable **disaggregated inference** (`/render`, `/inference/v1/generate`, `/derender`) for fine-grained control over tokenization and detokenization — now more robust with RFC-driven endpoint design ([#56851](https://github.com/vllm-project/vllm/issues/56851), [#42729](https://github.com/vllm-project/vllm/issues/42729)).  
- **For model ops teams**: Monitor the **Rust frontend roadmap** ([#44280](https://github.com/vllm-project/vllm/issues/44280)) — it’s nearing parity with Python API for low-latency, high-throughput deployments.  
- **For developers using tools or code generation**: The **tool call parser** is now more resilient to malformed JSON ([PR #54844](https://github.com/vllm-project/vllm/pull/54844), [#50933](https://github.com/vllm-project/vllm/pull/50933)), improving reliability with Claude Code and other agentic clients.

> 💡 **Pro Tip**: If deploying on AMD ROCm, prioritize **Qwen3.8-2.4T-A95B** and apply the latest PRs for fused kernels and MXFP8 quantization. For NVIDIA users, enable `--kv-cache-dtype fp8` and `--enable-sleep-mode` for efficient memory management.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-10-06**

---

### **1. Today's Highlights**  
The SGLang project continues advancing inference optimization for next-gen models and hardware, with significant progress on **prefill context parallelism (CP)** for MLA architectures like Dpsk v3/Kimi-K2.5 and ongoing work to extend CP support to MHA/GQA backends including FlashInfer and TRTLLM-MHA. New PRs highlight growing ROCm/AMD ecosystem support, particularly for **decode context parallelism (DCP)** in GLM-5 and DeepSeek-V3.2, alongside critical fixes for LoRA merging in diffusion pipelines and stability improvements in the scheduler.

---

### **2. Releases & Breaking Changes**  
*No new releases or breaking changes reported in the last 24 hours.*

---

### **3. New Model & Hardware Support**  
- ✅ **ROCm/AMD Support**:  
  - Added **Decode Context Parallelism (DCP)** for GLM-5 and DeepSeek-V3.2 via PR #42618 ([#42618](https://github.com/sgl-project/sglang/pull/42618)).  
  - Continued integration of **Kimi-K3 Quark FP8/MXFP4 fusion** on AMD via PR #41794 ([#41794](https://github.com/sgl-project/sglang/pull/41794)).  
  - ROCm 101 RC now tracked in PR #42016 ([#42016](https://github.com/sgl-project/sglang/pull/42016)).

- ✅ **Hardware & Architecture**:  
  - Full **SM12.x GPU** support (RTX PRO 6000 Blackwell, RTX 50xx, DGX Spark GB10) enabled for diffusion workflows via PR #30705 ([#30705](https://github.com/sgl-project/sglang/pull/30705)).  
  - Experimental **B300 support** for MegaMoE with MXFP8/W4A8 quantization (note: CUDA_ERROR_ILLEGAL_ADDRESS bug still active per #37559).

- ✅ **Model-Specific**:  
  - **DeepSeek-V4.1** tracking and optimization underway via Issue #42170 ([#42170](https://github.com/sgl-project/sglang/issues/42170)).  
  - **MiniMax-H3** now supports `quality=high` tier on 8×B300 (previously topology-locked to 4×H200), though deployment requires validation bypass ([#33720](https://github.com/sgl-project/sglang/issues/33720)).

---

### **4. Performance & Optimization**  
- 🔧 **Prefill CP Progress**:  
  - Prefill CP now fully supported for **MLA models (Dpsk v3/Kimi-K2.5)** and **SWA-enabled models**.  
  - Ongoing work to expand to **FlashInfer/TRTLLM-MHA backends** (#31732).  
  - Roadmap milestone: **Prefill Context Parallelism (Q3 2026)** — issue #21788 ([#21788](https://github.com/sgl-project/sglang/issues/21788)).

- ⚡ **Kernel & Memory Optimizations**:  
  - **Cake-based projection caching** introduced for Kimi-K3 FP8 path, reducing per-call host overhead from ~100μs to sub-microsecond levels on GB300 ([#42698](https://github.com/sgl-project/sglang/pull/42698)).  
  - **SplitK support added** for CuteDSL SM10X BF16 GEMM to improve small-N throughput ([#33893](https://github.com/sgl-project/sglang/pull/33893)).  
  - **Shared-to-sparse experts fusion** for Qwen3.5/Qwen3.6 MoE on SM120 under development ([#33706](https://github.com/sgl-project/sglang/issues/33706)).

- 📈 **Throughput Improvements**:  
  - **GLM-5.3-Flash** shows up to **1.3 gsm8k points better** with `deep_gemm` vs `flashinfer_trtllm` backend (per #39797), suggesting potential optimization opportunities in FlashInfer path.

---

### **5. Stability & Regressions**  
⚠️ **Critical Bugs (High Severity)**:  
- **Scheduler Deadlock / Hangs**:  
  - `double free or corruption` in idle-loop invariant check leads to permanent server hang ([#42508](https://github.com/sgl-project/sglang/issues/42508)).  
  - **HiCache + DeepSeek-V4** with `write_through` causes TP rank deadlock under long prefills; scheduler/detokenizer go silent ([#42465](https://github.com/sgl-project/sglang/issues/42465)).  

⚠️ **Functional & Correctness Issues**:  
- **KV Cache Event Schema Misalignment**: Hybrid-SWA + radix cache triggers admission livelock due to SWA prefix lock pinning trimmed chunks ([#41579](https://github.com/sgl-project/sglang/issues/41579)).  
- **Health Check Orphaning**: `/health` handler timeout doesn’t cancel request → paged-prefill batching crashes ([#35884](https://github.com/sgl-project/sglang/issues/35884)).  
- **LoRA Merge Crash**: `--lora-merge-mode auto` statically merges post-load FP8 weights → crash ([#35970](https://github.com/sgl-project/sglang/issues/35970); fixed in [#35975](https://github.com/sgl-project/sglang/pull/35975)).

🛠️ **Known Inactive Issues**:  
- CUDA_ERROR_ILLEGAL_ADDRESS in MXFP8FP4/W4A8 MegaMoE path on B300 ([#37559](https://github.com/sgl-project/sglang/issues/37559)) — no fix yet.  
- Kimi-K3 KDA prefill hangs on MI350X with DSPARK speculative decoding ([#33846](https://github.com/sgl-project/sglang/issues/33846)).

---

### **6. What This Means for Application Developers**  
- **Leverage DCP & CP**: Use `--dcp-size` and `prefill_cp` flags for large MLA models (e.g., Kimi-K3, Dpsk v3) to reduce KV cache memory footprint and scale out across GPUs.  
- **Avoid LoRA Merge Pitfalls**: Set `--lora-merge-mode dynamic` when using online FP8 quantization to prevent static merge crashes.  
- **Be Cautious with HiCache + write_through**: Avoid this config under bursty long prompts until #42465 is resolved.  
- **Monitor Health Checks**: If using `/health` endpoints in orchestration (e.g., Kubernetes), be aware of orphaned requests causing batch failures.  
- **Use Latest Nightly Builds**: For latest ROCm/AMD support and performance patches (especially around DCP and kernel fusion).  

> 🔗 **Recommended Tracking**: Follow [Issue #21788](https://github.com/sgl-project/sglang/issues/21788) for prefill CP progress and [PR #42618](https://github.com/sgl-project/sglang/pull/42618) for DCP support in GLM-5/DeepSeek-V3.2.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# **llama.cpp Digest – 2026-10-06**

---

### **1. Today's Highlights**  
The `v0.6.0` release introduces a major overhaul of the batch API with `llama_batch_ext`, enabling mixed token/embedding inputs and support for MTP/deepstack state embeddings—critical for advanced speculative decoding workflows. This release also adds native support for the **GLM-5.3-Flash (GLM5-Next) 320B hybrid model**, the **Clef decision model (text + vision)**, and foundational enhancements to Hexagon, Vulkan, and CUDA backends for improved scalability and correctness.

---

### **2. Releases & Breaking Changes**  
- **`v0.6.0`** ([Release Notes](https://github.com/ggml-org/llama.cpp/releases/tag/v0.6.0))  
  - Introduces `llama_batch_ext` extended batch API with `llama_process` for mixed input types (tokens + embeddings), essential for models like Clef and MTP spec.
  - Adds support for **GLM-5.3-Flash (GLM5-Next) 320B**, **Clef (vision+text)**, and **MTP specification**.
  - Migration note: Existing batch APIs using `llama_batch` are deprecated in favor of `llama_batch_ext`. See [PR #29622](https://github.com/ggml-org/llama.cpp/pull/29622) for migration guidance.

---

### **3. New Model & Hardware Support**  
- **Models**:  
  - ✅ **GLM-5.3-Flash (GLM5-Next) 320B** – Hybrid architecture now fully supported via `llama_batch_ext` and MTP spec.  
  - ✅ **Clef Decision Model** – Vision and text modalities now natively supported in server (`server: support vision input for Clef` – [PR #29969](https://github.com/ggml-org/llama.cpp/pull/29969)).  
  - ✅ **MTP Spec** – Formalized support for MTP-style speculative decoding with deepstack state embeddings.  

- **Hardware & Backends**:  
  - ✅ **Hexagon (Qualcomm)**: Added `POOL_1D`/`POOL_2D` support (required for Gemma 4 CLIP), optimized HTP DMA pipelining and boundary handling ([PR #29995](https://github.com/ggml-org/llama.cpp/pull/29995)).  
  - ✅ **CUDA**: Optimized `mmq` accumulation for NVFP4; fixes `alloc_deps` batch independence ([PR #29986](https://github.com/ggml-org/llama.cpp/pull/29986), [PR #29857](https://github.com/ggml-org/llama.cpp/pull/29857)).  
  - ✅ **Vulkan**: Fixed out-of-bounds write in Flash Attention and stale prealloc_y reuse ([PR #29988](https://github.com/ggml-org/llama.cpp/pull/29988), [PR #29591](https://github.com/ggml-org/llama.cpp/pull/29591)).  
  - ✅ **ROCm/HIP**: PRs targeting GCN tuning and MMQ config optimization ([PR #30022](https://github.com/ggml-org/llama.cpp/pull/30022), [PR #30021](https://github.com/ggml-org/llama.cpp/pull/30021)).

---

### **4. Performance & Optimization**  
- **Hexagon**:  
  - `HMX matmul` now supports F16 activation + F16/F32 weights with non-multiple-of-32 row counts ([PR #29626](https://github.com/ggml-org/llama.cpp/pull/29626)).  
  - Flattened 3D matmul into 2D for better multi-sequence throughput on HMX ([PR #29779](https://github.com/ggml-org/llama.cpp/pull/29779)).  
- **Vulkan**:  
  - RMSNorm optimized using subgroup reductions (WIP – Intel B70 Arc Pro & RTX 4060 Ti tested) ([PR #29882](https://github.com/ggml-org/llama.cpp/pull/29882)).  
- **CUDA**:  
  - `mmq` performance improvements for NVFP4 type ([PR #29857](https://github.com/ggml-org/llama.cpp/pull/29857)).  
  - Stream-k algorithm tuned for AMD GCN arch ([PR #30022](https://github.com/ggml-org/llama.cpp/pull/30022)).  
- **General**:  
  - `ggml-rpc`: Prevented remote OOB write in `PAD_REFLECT_1D` ([PR #29915](https://github.com/ggml-org/llama.cpp/pull/29915)).  
  - `llama_server`: Refactored modality handling and grouped model modalities into one struct ([PR #30015](https://github.com/ggml-org/llama.cpp/pull/30015), [PR #30011](https://github.com/ggml-org/llama.cpp/pull/30011)).

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Fix/PR |  
|---------|------|--------|--------|  
| ⚠️ High | **Qwen3.8-Flash-Next crash on startup with MTP** (`assert at startup`) | Open (#29811) | No fix yet |  
| ⚠️ High | **Vulkan decode degradation after ~7–8h (empty EOS replies)** | Open (#29526) | In progress; GPU fence issue suspected |  
| ⚠️ Medium | **CUDA decode slowdown linearly with context length (Qwen4exp)** | Open (#28734) | No fix yet |  
| ⚠️ Medium | **Multi-GPU tensor mode crash on 3 GPUs** | Open (#26837) | Reproduced on 3×3090; likely graph or memory layout issue |  
| ⚠️ Medium | **Prompt processing ~2x slower on Qwen3.6-35B-A3B since #29184** | Closed (#29980) | Regression from fused shared experts; under investigation |  
| ⚠️ Low | **Partial media truncation rejected** | Closed (#24076) | Fix merged; no longer allowed |  

> 🔥 *Critical stability issues persist in multi-GPU, long-running, and high-context scenarios—especially on Vulkan and CUDA.*

---

### **6. What This Means for Application Developers**  
- **Use `llama_batch_ext` immediately** for any application requiring **mixed input types** (e.g., vision + text prompts, MTP draft inference). The old `llama_batch` API is being phased out.  
- **Leverage new MTP spec support** for low-latency speculative decoding with large models like GLM-5.3-Flash and Qwen3.8-Flash-Next.  
- **Avoid long-running Vulkan servers** until #29526 is resolved—expect empty EOS replies after ~8 hours.  
- **Be cautious with multi-GPU tensor mode**—crashes reported on 3+ GPUs; consider using `--split-mode layer` instead.  
- **Optimize for Hexagon devices** if deploying on Qualcomm SoCs (e.g., Snapdragon X Elite); recent pool and matmul optimizations boost efficiency.  
- **Expect higher reliability with Clef and GLM-5.3-Flash** due to dedicated model support and vision input handling in `llama-server`.

👉 **Actionable Tip**: Update to `v0.6.0` and audit all batch logic for compatibility with `llama_batch_ext`. Use `--spec-type draft-mtp` with caution—verify against known regressions in Qwen3.8-Flash-Next.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-10-06**

---

### **1. Today's Highlights**  
The Ollama ecosystem continues to mature with focused improvements in MLX engine stability and performance, particularly around GPU memory residency and speculative decoding. Critical regressions affecting `glm-ocr`, `clef-flash`, and `Muse Glimmer` models have been reported, highlighting ongoing challenges in model-specific parser compatibility and quantization handling. Meanwhile, core infrastructure PRs address long-standing issues in request streaming, environment configuration overflow, and cloud usage reporting.

---

### **2. Releases & Breaking Changes**  
*No new releases were published in the last 24 hours.*  
However, **Ollama Cloud** has undergone a **pay-as-you-go migration**, but the API still exposes outdated subscription-based usage metrics (see [Issue #18653](https://github.com/ollama/ollama/issues/18653)). This may affect billing dashboards and cost monitoring tools until the backend is fully aligned.

---

### **3. New Model & Hardware Support**  
- **MLX Engine**: Added support for **Kolibri 1** via PR [#18780](https://github.com/ollama/ollama/pull/18780), expanding inference capabilities on Apple Silicon devices.
- **CUDA**: The `gemma4:12b` model now leverages **MLX SDPA** for CUDA prefill with wide head dimensions (>128), enabling faster prompt processing (~12x speedup on e2b, ~2–4x on 12b) — see PR [#18809](https://github.com/ollama/ollama/pull/18809).
- **ROCm (Windows)**: Expanded AMD GPU support in Windows builds to include `gfx1030`, `gfx1150`, `gfx1151`, `gfx1200`, and `gfx1201` — see PR [#18623](https://github.com/ollama/ollama/pull/18623).

---

### **4. Performance & Optimization**  
- **MLX Memory Management**: A fix was merged ([PR #18807](https://github.com/ollama/ollama/pull/18807)) to mitigate high latency after GPU idle by refreshing residency every second, addressing issue [#18744](https://github.com/ollama/ollama/issues/18744).
- **Model Lookup & Decision Overhead**: Reduced redundant manifest decoding and re-used Metal scratch buffers between decision requests — see PR [#18806](https://github.com/ollama/ollama/pull/18806).
- **Speculative Decoding**: Optimized recurrent state compaction after rollback via PR [#18805](https://github.com/ollama/ollama/pull/18805), reducing memory footprint during speculative inference.

---

### **5. Stability & Regressions**  
| Severity | Issue | Description | Fix Status |
|---------|-------|-------------|------------|
| 🔴 High | [#18810](https://github.com/ollama/ollama/issues/18810) | `glm-ocr:latest` regression in 0.35.1: returns plain text instead of HTML tables, loops, "token repeat limit reached" | Open |
| 🔴 High | [#18769](https://github.com/ollama/ollama/issues/18769) | `clef-flash` model fails on `/v1/systemone` (CUDA: non-finite logit; CPU: cannot open model), despite working on `/v1/chat/completions` | Open |
| 🔴 High | [#18808](https://github.com/ollama/ollama/issues/18808) | `Muse-Glimmer-30B-GGUF` produces no response; likely due to internal Jinja templates | Open |
| 🟡 Medium | [#18685](https://github.com/ollama/ollama/issues/18685) | `llama-server` wedges on full-cache-hit task; all subsequent requests hang until unload | Open |
| 🟡 Medium | [#18770](https://github.com/ollama/ollama/issues/18770) | `mistral-medium-3.5:128b` consumes excessive RAM (>127GB) and runs at <1 word/min on M4 Mac | Open |

> ✅ **Fixed**: PRs merged for MLX residency ([#18807](https://github.com/ollama/ollama/pull/18807)) and envconfig overflow ([#18800](https://github.com/ollama/ollama/pull/18800)).

---

### **6. What This Means for Application Developers**  
- **Avoid `glm-ocr:latest` on 0.35.1** — use older versions or wait for patch. Expect degraded output quality.
- **Use `gemma4` with caution on limited VRAM** — `LLAMA_ARG_FIT` is disabled by default; override manually if needed (PR [#16831](https://github.com/ollama/ollama/pull/16831)).
- **Streaming API users must account for `output_index` reuse** — PR [#18804](https://github.com/ollama/ollama/pull/18804) fixes message closure and order mismatch in tool-call sequences.
- **Cloud integrations should expect inconsistent cached token reporting** — even when caching is active, `prompt_eval_cached_count` is dropped in usage extractors (see [Issue #18795](https://github.com/ollama/ollama/issues/18795)).
- **Optimize for MLX on macOS**: Enable `OLLAMA_KEEP_ALIVE` carefully — integer-second durations can wrap into short timeouts (fix in progress via [PR #18800](https://github.com/ollama/ollama/pull/18800)).

> 💡 **Recommendation**: Monitor `mlx` and `gemma4` behavior closely; consider pinning versions until regressions are resolved.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-10-06**

---

### **1. Today's Highlights**  
The LiteLLM project saw a flurry of critical bug fixes and integration test improvements, particularly around model routing, cost attribution, and concurrency safety in the proxy layer. Key PRs addressed high-severity issues like `dictionary changed size during iteration` under load (`#44748`) and incorrect billing for streaming requests (`#42161`), while new integration tests now validate core endpoints including `/model_management`, `/budget/update`, and `/responses`. A major fix ensures model group pricing is correctly attributed to serving deployments (`#44732`).

---

### **2. Releases & Breaking Changes**  
No new releases were published in the last 24 hours. However, several patch releases are pending across stable branches:  
- `v1.100.5`, `v1.101.5`, `v1.102.3`, `v1.103.4`, and `v1.104.1` are scheduled for release with dependency refreshes (`#44774`, `#44773`, `#44775`, `#44776`, `#44777`). These updates resolve outdated Python and dashboard dependencies but do not introduce breaking changes.

> 🔗 [Dependency Refresh PRs](https://github.com/BerriAI/litellm/pulls?utf8=%E2%9C%93&q=is%3Aopen+label%3Achore%28release%29)

---

### **3. New Model & Hardware Support**  
None reported today. The focus remains on improving compatibility and correctness for existing providers (e.g., Gemini, Anthropic, Bedrock, OpenAI-compatible backends) rather than adding new models or hardware backends.

---

### **4. Performance & Optimization**  
- **Concurrency & Memory**: A critical race condition causing `500 {"error": "dictionary changed size during iteration"}` during concurrent `/v1/messages` calls has been identified (`#44748`). This affects reliability at scale and will be resolved in an upcoming fix.  
- **Cost Accuracy**: Fixes ensure `input_cost_per_character` is no longer silently ignored (`#44200`) and that spend logs reflect correct costs even when `provider_response_model` is a non-standard slug (`#42161`).  
- **Connection Management**: Ongoing work continues on idle connection cleanup (`#41420`) and unbounded pass-through endpoint registry growth (`#26081`), both of which impact long-term stability under low-to-moderate traffic.

> 🔗 [Fix: Concurrent /v1/messages race](https://github.com/BerriAI/litellm/pull/44748)  
> 🔗 [Fix: Cost misattribution in streaming requests](https://github.com/BerriAI/litellm/pull/42161)

---

### **5. Stability & Regressions**  
Top stability concerns today:  

| Issue | Severity | Description | Fix Status |
|------|----------|-------------|------------|
| [`#44748`](https://github.com/BerriAI/litellm/issues/44748) | Critical | Concurrent `/v1/messages` calls cause `dictionary changed size during iteration` → 500 errors despite successful spend logging | ✅ PR open (`#44748`) |
| [`#42161`](https://github.com/BerriAI/litellm/issues/42161) | High | Streaming requests log `spend = 0` due to missing price map entry for model slugs (e.g., dated Anthropic builds) | ✅ PR open (`#44732`) |
| [`#44535`](https://github.com/BerriAI/litellm/issues/44535) | High | Missing usage object from Anthropic triggers retry loop → HTTP 500 | ✅ PR open (`#44531`) |
| [`#44546`](https://github.com/BerriAI/litellm/issues/44546) | Medium | `aspeech` calls synchronous TTS provider twice → double billing (Gemini) | ✅ PR open (`#44546`) |

These issues collectively affect billing accuracy, system stability, and user experience—especially in production-scale deployments.

---

### **6. What This Means for Application Developers**  
- **Avoid using model slugs without verified price mappings** — if you’re using custom or versioned model names (e.g., `anthropic/claude-3-opus-2026-01-01`), ensure they’re explicitly defined in your `price_map` to prevent zero-cost logging (`#42161`).  
- **Be cautious with streaming requests** — if your deployment uses non-standard model names or relies on downstream providers returning incomplete `usage` objects, expect potential cost miscalculations or retries.  
- **Do not assume idempotency in concurrent `/v1/messages` calls** — until `#44748` is merged, avoid high-concurrency use cases without rate limiting or request deduplication.  
- **Enable self-serve budgeting** via `general_settings.self_serve_budget_policy` (`#44763`) to empower users to manage their own budgets without admin intervention.  
- **Use integration tests** — recent additions to `test(integration)` (`#44684`, `#44733`, `#44736`) provide confidence in contract-level behavior; consider adopting them in CI pipelines.

> 🔗 [Self-Serve Budgets Feature](https://github.com/BerriAI/litellm/pull/44763)  
> 🔗 [Integration Test Suite](https://github.com/BerriAI/litellm/pulls?utf8=%E2%9C%93&q=is%3Aopen+label%3Atest%28integration%29)

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-10-06**

---

### **1. Today's Highlights**  
The Unsloth team has prioritized critical stability fixes and UX improvements across the desktop and web UI, particularly around model handling in fine-tuning, export workflows, and context management. Key PRs include preserving chat templates for Mac-trained LoRAs, fixing audio download behavior in the desktop app, and ensuring Qwen3 thinking mode sampling is consistent between Chat and API clients.

---

### **2. Releases & Breaking Changes**  
*No new releases or breaking changes detected in the past 24 hours.*  
However, several high-priority PRs are addressing regressions that may affect backward compatibility:
- [PR #12794](https://github.com/unslothai/unsloth/pull/12794): Fixes incorrect chat template usage when exporting Mac-trained LoRAs.
- [PR #12795](https://github.com/unslothai/unsloth/pull/12795): Restores default prompts for `EmbeddingGemma` and `Qwen3-Embedding` during fine-tuning.
- [PR #12791](https://github.com/unslothai/unsloth/pull/12791): Aligns API sampling parameters with Studio’s Qwen3 thinking mode (temperature 0.6, top_p 0.95).

---

### **3. New Model & Hardware Support**  
*No new models or hardware backends added today.*  
But progress continues on MoE support:
- [PR #12742](https://github.com/unslothai/unsloth/pull/12742) enables `fast_inference=True` (vLLM) for **Qwen3.5/3.6 MoE** and **Gemma-4 MoE** with LoRA applied to expert layers — a major step toward scalable Mixture-of-Experts inference.

---

### **4. Performance & Optimization**  
*No direct throughput or latency improvements landed today*, but ongoing optimizations are focused on memory efficiency:
- [PR #12752](https://github.com/unslothai/unsloth/pull/12752): Allows **Qwen-Image-2.1 edits** to run on 16GB GPUs by refining memory budgeting logic.
- [PR #12753](https://github.com/unslothai/unsloth/pull/12753): Improves streaming behavior for MiniMax-H3 on high-memory systems by deferring unpinned block loading until needed.
- [PR #12805](https://github.com/unslothai/unsloth/pull/12805): Introduces a compact ring-based context usage indicator (`3.2k / 131.1k`) to improve real-time feedback without clutter.

---

### **5. Stability & Regressions**  
Several critical issues reported today, primarily affecting user experience and model fidelity:
- **[Issue #12708](https://github.com/unslothai/unsloth/issues/12708)**: *Think Toggle fails to suppress reasoning in `gemma-4-E4B-it-qat-GGUF`* — output contains only internal thought process; no workaround yet.
- **[Issue #12737](https://github.com/unslothai/unsloth/issues/12737)**: *Qwen3.5 SFT loss goes NaN at deterministic step* — reproducible across LR/optimizer/seed; likely due to gradient instability in fine-tuning pipeline.
- **[Issue #12727](https://github.com/unslothai/unsloth/issues/12727)**: *Studio pages `mmproj-F16.gguf` from disk during generation* — causes severe token/sec regression; users report >50% drop in throughput post-update.
- **[Issue #12680](https://github.com/unslothai/unsloth/issues/12680)**: *ARM64 Linux build mislabeled as macOS* — download links point to wrong binary; affects Linux ARM64 users.

> ✅ **Fixes in progress**: PRs like #12794, #12795, and #12791 aim to resolve core stability issues related to model state preservation and configuration drift.

---

### **6. What This Means for Application Developers**  
Developers building agent workflows should:
- Avoid using `fast_inference=True` with MoE models unless explicitly supported via vLLM (current support limited to Qwen3.5/3.6 MoE and Gemma-4 MoE).
- Expect inconsistent behavior when exporting LoRAs trained on Mac — ensure you’re using updated versions of `unsloth` and `unsloth_zoo` to avoid template loss ([PR #12794](https://github.com/unslothai/unsloth/pull/12794)).
- Monitor context consumption closely — recent bugs (e.g., #12727) can silently degrade performance; use the new ring indicator ([PR #12805](https://github.com/unslothai/unsloth/pull/12805)) for better visibility.
- For production deployments, avoid relying on the current version of `unsloth-studio` if using custom quantizations or long-context models — consider pinning to a stable release until regressions are resolved.

> 🔗 **Key resources**:  
> - [Unsloth GitHub Issues](https://github.com/unslothai/unsloth/issues)  
> - [Unsloth PRs](https://github.com/unslothai/unsloth/pulls)  
> - [Unsloth Studio Release Notes](https://github.com/unslothai/unsloth/releases)

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*