# AI Infrastructure Digest 2026-09-26

> Generated: 2026-09-26 00:49 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-09-26**

---

### **1. Ecosystem Overview**  
The AI inference and serving ecosystem is entering a phase of *deep specialization and hardware convergence*, with projects increasingly diverging by target layer (local runtime, cloud gateway, training engine) while converging on performance-critical optimizations. vLLM and SGLang lead in high-throughput, kernel-optimized inference for large models on NVIDIA Hopper and AMD gfx950, while Ollama and llama.cpp dominate on-device and edge deployment. LiteLLM anchors the multi-provider orchestration layer with growing focus on cost accuracy and security. Unsloth remains a niche but powerful player in fine-tuning and local model management, particularly for AMD users. The landscape reflects a clear bifurcation: *scale-driven* engines (vLLM/SGLang) vs. *accessibility-first* platforms (Ollama/llama.cpp), all racing to support next-gen architectures like Mamba, FP8 MoE, and hybrid SSMs.

---

### **2. Activity Comparison**

| Project        | Issues Open (Last 7d) | PRs Merged (Last 7d) | Releases (Last 24h) | Status |
|----------------|------------------------|------------------------|----------------------|--------|
| **vLLM**       | 32                     | 28                     | None                 | Stable + Nightly |
| **SGLang**     | 27                     | 24                     | None                 | Active Dev |
| **llama.cpp**  | 41                     | 33                     | 4 (b11182–b11192)    | Release Cycle |
| **Ollama**     | 22                     | 16                     | 1 (v0.40.0-rc0)      | RC Phase |
| **LiteLLM**    | 18                     | 12                     | 4 (v1.98.1–v1.104.0-dev.2) | Frequent Dev |
| **Unsloth**    | 25                     | 11                     | None                 | Feature Focus |

> ✅ **Insight**: **llama.cpp** leads in release velocity and issue volume due to its broad hardware support and community-driven fixes. **vLLM** and **SGLang** show highest engineering intensity per PR, focused on kernel-level optimizations. **LiteLLM** exhibits rapid iteration for stability and compliance.

---

### **3. Model Support Race**

| New Model / Architecture       | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|-------------------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek-V4.1**             | ✅ (SM100/SM103 + MXFP8) | ✅ (CUDA/ROCm + sparse attention) | ❌ | ✅ (MLX fallback) | ✅ (via Fireworks) | ⚠️ (in progress) |
| **Qwen3.8-Flash-Next**        | ⚠️ (A100 FP8 bug) | ✅ (with tool parser fix) | ⚠️ (tool loop crash) | 🔴 (silent image drop) | ✅ (via Databricks) | ⚠️ (V3 GGUF crash) |
| **Mamba / SSM Models**        | ✅ (6x speedup via fused align kernel) | ✅ (hybrid SSM + hicache) | ❌ | ⚠️ (crashes) | ❌ | ✅ (Hadamard rotation, Qwen-Image-2.1) |
| **FP8 MoE & Quantization**    | ✅ (MoE block size handling) | ✅ (MXFP4/MXFP8 on RTX 4090) | ✅ (Prism PQ2_0/PTQ1_0) | ⚠️ (MLX limits) | ✅ (Fireworks pricing) | ⚠️ (4-bit dequant race) |
| **Apple Silicon (MLX)**       | ⚠️ (Rust frontend) | ⚠️ (MPS memory issues) | ✅ (Metal kernels) | ✅ (native MLX) | ❌ | ✅ (Studio integration) |

> 🏆 **Leader**: **SGLang** and **vLLM** are ahead in *model-specific kernel optimization* (especially DeepSeek-V4.1, Mamba).  
> 🏅 **Edge Winner**: **Ollama** wins on *user-friendly access* to Apple Silicon via automatic MLX routing.  
> 🚩 **Caution**: **Ollama’s `deepseek-v4.1-flash`** silently drops images — critical regression for agents.

---

### **4. Performance Frontier**

| Optimization Focus          | vLLM                          | SGLang                        | llama.cpp                    | Ollama               | LiteLLM               | Unsloth              |
|------------------------------|-------------------------------|-------------------------------|------------------------------|----------------------|-----------------------|----------------------|
| **KV Cache Management**      | ✅ LayerSplit RFC (KVPP)      | ✅ Decode Context Parallelism (DCP) | ✅ Auto-fitting + unified KV   | ⚠️ Fixed 8GiB cache   | ✅ Redis caching       | ✅ Dynamic planning    |
| **Batching & Throughput**    | ✅ Speculative decoding (host overhead) | ✅ Fused ratio-2 pooling + RMSNorm | ✅ Tiled mul_mat (VNNI)       | ❌ No batch control   | ✅ Fail-closed rate limit | ✅ GPU memory reuse    |
| **Quantization Efficiency**  | ✅ MXFP8 + WO-A fusion        | ✅ MXFP4/MXFP8 + per-token quant | ✅ Prism PQ2_0, PTQ1_0       | ⚠️ MLX precision limits | ✅ Cost-aware routing   | ✅ INT8 rotation (LPIPS) |
| **Distributed Serving**      | ✅ KV Pipeline Parallelism    | ✅ Helix Parallelism (Q3 2026) | ❌ No distributed support     | ❌ Single-node only   | ✅ Multi-provider routing | ❌ No distributed train |
| **Kernel-Level Tuning**      | ✅ Triton fusions (align, RoPE) | ✅ SM90/Hopper fusions         | ✅ Metal/Vulkan FA kernels    | ⚠️ CUDA fallback     | ✅ HttpClientPool refactor | ✅ cuDNN benchmark reuse |

> 🔥 **Hotspot**: **vLLM and SGLang** are leading in *distributed, low-latency inference* via advanced KV and speculative techniques. **llama.cpp** excels in *low-level GPU kernel tuning* across diverse backends. **Unsloth** focuses on *training efficiency* and *memory reuse* for local workflows.

---

### **5. Layer Positioning**

| Project        | Primary Layer                | Key Differentiator                                  | Use Case Focus                     |
|----------------|------------------------------|-----------------------------------------------------|------------------------------------|
| **vLLM**       | High-Throughput Inference Engine | Kernel-optimized, scalable, supports speculative decoding | Cloud-scale LLM serving, API gateways |
| **SGLang**     | High-Performance Inference Engine | Hybrid parallelism (DCP, Helix), strong ROCm/CUDA support | Enterprise inference, research labs |
| **llama.cpp**  | Local Runtime / Edge Inference | Multi-backend (Metal, Vulkan, HIP), GGUF-native | On-device, privacy-focused, low-end devices |
| **Ollama**     | Developer Gateway / CLI Tool | One-click model access, MLX acceleration on Mac     | Local development, prototyping, agent dev |
| **LiteLLM**    | Multi-Provider Orchestration | Unified API, cost tracking, guardrails, telemetry | Production API routing, billing systems |
| **Unsloth**    | Fine-Tuning & Studio Platform | UI-driven training, model pinning, GGUF tuning       | Local model customization, research |

> 🧩 **Strategic Insight**: The stack is now layered: *Unsloth* (fine-tune) → *vLLM/SGLang* (serve) → *LiteLLM* (route) → *Ollama* (dev/test). **llama.cpp** spans from edge inference to local training.

---

### **6. Trend Signals**

| Trend                              | Evidence from Digest                                                                 | Action for Developers |
|-----------------------------------|---------------------------------------------------------------------------------------|------------------------|
| **Hardware Specialization**       | vLLM/SGLang optimize for SM100/SM103; Ollama auto-uses MLX on M-series; llama.cpp adds Metal/Vulkan kernels | Choose backend based on target hardware (NVIDIA vs AMD vs Apple) |
| **FP8 & Mixed Precision Dominance** | vLLM, SGLang, and llama.cpp all push MXFP8/MXFP4; LiteLLM updates pricing accordingly | Validate precision support before deployment; avoid `fp8_e4m3` on unstable backends |
| **Structured Outputs & Agents**   | vLLM/SGLang fix tool-call parsing; LiteLLM warns about field stripping; Ollama has silent failures | Validate parser alignment; never assume `tool_choice='none'` is safe |
| **Security & Cost Integrity**     | LiteLLM hardens secrets, fixes pricing bugs; cosign-signed Docker images | Audit cost maps; use signed images in production |
| **Stability Over Features**       | Multiple regressions in Ollama, SGLang, and Unsloth (crashes, silent failures) | Avoid RC/stable releases with known critical bugs; test edge cases rigorously |
| **Open Source Tooling Maturation** | Unsloth Studio benchmarks, LiteLLM model diff, Ollama prefix cache tools | Leverage new CLI/debug tools for auditing and tuning |

> ✅ **Final Recommendation**: For production inference, **use vLLM or SGLang** with validated model versions. For local agent workloads, **Ollama + MLX on Apple Silicon** offers best UX—but verify tool calling. For cost-sensitive orchestration, **LiteLLM v1.100+** is essential. Always **validate model behavior under stress**, especially around structured outputs and long-running sessions.

---  
*Report compiled from GitHub activity: 2026-09-26 | Target audience: Infrastructure Engineers, ML Ops, Technical Decision-Makers*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

---

### **1. Today's Highlights**  
The vLLM project continues strong momentum in speculative decoding and structured output improvements, with critical bug fixes for draft token validation and streaming logprobs preservation. Performance optimizations for DeepSeek-V4.1 and Mamba alignment kernels are delivering up to 6x speedups, while new work on batch invariance and KV pipeline parallelism signals deeper architectural refinements for scalable inference.

---

### **2. Releases & Breaking Changes**  
*No new releases in the last 24 hours.*  
However, **vLLM v0.28.1rc1.dev337+g27a94d1ce** (nightly) is now actively used by developers testing structured outputs — note that `guidance` backend issues (e.g., `KeyError: 'triggers'`) may affect tool-calling workflows until PRs land. No breaking changes were introduced in recent PRs, but users should monitor `--tool-call-parser` behavior across versions (see [Issue #46493](https://github.com/vllm-project/vllm/issues/46493)).

---

### **3. New Model & Hardware Support**  
- **AMD ROCm**: Active performance optimization for `Qwen3.8-2.4T-A95B` on gfx950 / MI355X (see [Issue #57149](https://github.com/vllm-project/vllm/issues/57149)).  
- **NVIDIA**: Enhanced support for `DeepSeek-V4.1` on SM100/SM103 with MXFP8 quantization and fused WO-A + inverse RoPE (see [PR #58634](https://github.com/vllm-project/vllm/pull/58634)).  
- **Quantization**: FP8 MoE support now includes better handling of block sizes and memory access patterns (see [Issue #43396](https://github.com/vllm-project/vllm/issues/43396), fixed in PRs).  
- **Frontend**: Rust frontend (`VLLM_USE_RUST_FRONTEND=1`) remains experimental but is feature-parity tracked (see [Issue #44280](https://github.com/vllm-project/vllm/issues/44280)).

---

### **4. Performance & Optimization**  
- **Mamba**: Fusing the `align` block-table gather into a single Triton kernel achieves **6x speedup** across all shapes (see [PR #58737](https://github.com/vllm-project/vllm/pull/58737)).  
- **DeepSeek-V4.1**: On SM100/SM103, fusing WO-A with inverse RoPE and MXFP8 quant reduces latency by **~11–12 µs per decode step** (see [PR #58634](https://github.com/vllm-project/vllm/pull/58634)).  
- **Speculative Decoding**: Optimizations reduce host dispatch overhead by **~11 µs/step** in GDN metadata build (see [PR #58732](https://github.com/vllm-project/vllm/pull/58732)).  
- **KV Pipeline Parallelism (KVPP)**: RFC proposal for LayerSplit-style KV cache management aims to improve scalability in large models (see [Issue #58329](https://github.com/vllm-project/vllm/issues/58329)).  
- **Graph Profiling**: Fix ensures workspace retention during profiling doesn’t under-estimate KV cache needs (see [PR #57865](https://github.com/vllm-project/vllm/pull/57865)).

---

### **5. Stability & Regressions**  
- **Critical**: `DraftTokensHandler.get_draft_tokens` can hang indefinitely if `VLLM_EXECUTE_MODEL_TIMEOUT_SECONDS` is not respected — fixed in [PR #58779](https://github.com/vllm-project/vllm/pull/58779).  
- **Serious**: Draft slots not proposed by drafter are being filled incorrectly in MRV2 — leads to invalid speculative tokens; fix in progress ([PR #58784](https://github.com/vllm-project/vllm/pull/58784)).  
- **Regression**: `tool_choice='none'` silently discards tool-call-shaped content — affects agent logic (see [Issue #55080](https://github.com/vllm-project/vllm/issues/55080)).  
- **Crash**: `FlashInfer sampler JIT` crashes engine startup when `nvcc` is missing (no fallback to native sampler); reported in [Issue #49497](https://github.com/vllm-project/vllm/issues/49497).  
- **GPU-Specific**: `Qwen3.8-Flash-Next-FP8` fails on A100 (SM80) due to `fp8e4nv` unsupported — workaround needed (see [Issue #54318](https://github.com/vllm-project/vllm/issues/54318)).

---

### **6. What This Means for Application Developers**  
- **Agent Workflows**: Use `--tool-call-parser inkling` with caution — ensure `reasoning-parser` and `tool-call-parser` are aligned to avoid content leakage (fixed in [PR #58792](https://github.com/vllm-project/vllm/pull/58792)).  
- **Structured Outputs**: Expect improved stability in streaming derendering and parser caching (tracked in [Issue #57571](https://github.com/vllm-project/vllm/issues/57571)); use `parser_cache` flag for deterministic IDs.  
- **Performance**: Optimize for `DeepSeek-V4.1` and Mamba models using SM100/SM103 with MXFP8 — expect significant latency gains.  
- **Deployment**: Avoid `tool_choice='none'` if you rely on tool call structure; consider explicit parsing. For multi-GPU setups, watch for KV offloading and SP conflicts under batch invariance (see [PR #56377](https://github.com/vllm-project/vllm/pull/56377)).  
- **Future-Proofing**: Monitor the **KVPP (LayerSplit)** RFC ([#58329](https://github.com/vllm-project/vllm/issues/58329)) for next-gen scaling in high-throughput serving environments.

---  
*Digest generated from GitHub data: vllm-project/vllm — 2026-09-26*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-09-26**

---

### **1. Today's Highlights**  
The SGLang project continues to advance its support for **DeepSeek-V4.1** across CUDA and ROCm backends, with multiple kernel-level optimizations targeting Hopper (SM90) and AMD gfx950 hardware. Critical stability fixes were merged for Qwen3.8-Flash-Next’s tool parser and FP8 inference on GLM-5.3-Flash, while CI infrastructure remains under active maintenance due to persistent flakiness. New work on **Decode Context Parallelism (DCP)** and **Helix Parallelism** is progressing toward Q3 2026 delivery.

---

### **2. Releases & Breaking Changes**  
None. No new releases in the past 24 hours.  

---

### **3. New Model & Hardware Support**  
- **DeepSeek-V4.1**: Full kernel stack now integrated on both **CUDA (SM90)** and **AMD (gfx950)**, including sparse attention, top-k sorting, and ratio-1/2 index handling. See [PR #41291](https://github.com/sgl-project/sglang/pull/41291), [PR #41019](https://github.com/sgl-project/sglang/pull/41019), [PR #41020](https://github.com/sgl-project/sglang/pull/41020).  
- **Apple Silicon (MPS/Metal)**: Ongoing improvements to memory management ([#21443](https://github.com/sgl-project/sglang/issues/21443)) and device capacity detection ([#39675](https://github.com/sgl-project/sglang/issues/39675)), though full GPU memory reporting remains broken.  
- **Hybrid SSM/Mamba Models**: Added `--enable-hierarchical-cache --hicache-storage-backend dynamic` support, but crashes persist on host memory registration ([#40926](https://github.com/sgl-project/sglang/issues/40926)).  
- **XGrammar Lark Syntax**: Now supported via [PR #39380](https://github.com/sgl-project/sglang/pull/39380), enabling more flexible prompt parsing.

---

### **4. Performance & Optimization**  
- **Gemma3n**: Optimized shared-KV attention by skipping unused K/V computation — reduces unnecessary memory allocation and rotation on RoPE kernels ([PR #41295](https://github.com/sgl-project/sglang/pull/41295)).  
- **Hopper V4.1**: Fused ratio-2 decode pooling and RMSNorm into a single kernel for SM90, improving decode throughput for batch sizes 1–64 ([PR #41294](https://github.com/sgl-project/sglang/pull/41294)).  
- **MXFP4 MoE on RTX 4090 (SM89)**: Fixed suboptimal `num_warps` in triton_kernels, restoring ~6x decode performance vs. prior degraded baseline ([PR #41292](https://github.com/sgl-project/sglang/pull/41292)).  
- **MiniMax-M3**: Integrated fused all-reduce + RMSNorm + per-token FP8 quant for MXFP8 ptpc decode GEMM, enabling high-throughput inference on ROCm ([PR #36575](https://github.com/sgl-project/sglang/pull/36575)).

---

### **5. Stability & Regressions**  
- **Critical Crash**: `Qwen3.8-Flash-Next`’s thinking + tool parser loops indefinitely on token ID 0 ([#36537](https://github.com/sgl-project/sglang/issues/36537)); resolved via [PR #41156](https://github.com/sgl-project/sglang/pull/41156) (detector hardening).  
- **CUDA OOM**: `GLM-5.3-Flash` fails during long-context prefill due to FP8 MQA logits overflow, killing all TP ranks ([#37712](https://github.com/sgl-project/sglang/issues/37712)); no fix yet.  
- **HiCache Crash**: Dynamic hierarchical cache startup aborts entire instance on secondary host pool failure due to `cudaHostRegister` error and unhandled `TypeError` ([#40926](https://github.com/sgl-project/sglang/issues/40926)).  
- **MLX Backend**: Hunyuan fails to serve due to `auto_map` failure in KV cache builder ([#32521](https://github.com/sgl-project/sglang/issues/32521)); regression from recent changes.  
- **CI Health**: CI remains in maintenance mode ([#21065](https://github.com/sgl-project/sglang/issues/21065)) with 1 broken, 7 flaky tests; pipeline stabilization ongoing.

---

### **6. What This Means for Application Developers**  
- **Use DeepSeek-V4.1 with confidence on Hopper/AMD GPUs** — performance is now competitive, especially with `--enable-prefill-cp` and optimized layouts.  
- **Avoid `--kv-cache-dtype fp8_e4m3` with `tilelang` backend** — inconsistent behavior detected ([#31774](https://github.com/sgl-project/sglang/issues/31774)); use `fp16` or `bfloat16` until resolved.  
- **Handle Qwen3.8-Flash-Next tool parsing carefully**: If using `qwen3_coder`, ensure detector is updated (`PR #41156`) to avoid infinite loops.  
- **Monitor hybrid models (SSM/Mamba)**: `hicache` with dynamic storage may crash silently — disable or monitor host memory usage closely.  
- **Expect instability on Apple Silicon**: MPS memory detection is flawed; `mem_fraction_static` defaults to 0.95 and can cause prefill OOMs ([#39675](https://github.com/sgl-project/sglang/issues/39675)).  

> 💡 *Recommendation*: For production deployments, stick to stable model variants (e.g., Qwen3.5, DeepSeek-V3) until DeepSeek-V4.1 and hybrid model support matures. Monitor CI health before merging critical changes.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-09-26**

---

### **1. Today's Highlights**  
The latest release cycle focuses on backend stability and performance across GPU backends, with critical fixes for HIP/ROCm and Vulkan builds. Notably, a regression in audio processing for LFM2 has been resolved, and new Metal kernels enable wider block support on Apple Silicon. A key optimization introduces model-driven W4A4 quantization paths via `llama_prec_policy`, improving inference efficiency on supported hardware.

---

### **2. Releases & Breaking Changes**  
- **`b11192`**: Updated `cpp-httplib` to v0.58.0 (#29407) — minor dependency update with no API changes.  
- **`b11191`**: Fixed `fs_create_directory_with_parents()` on Windows for Unicode paths; now correctly creates last directory without trailing separator (#29432).  
- **`b11188`**: Resolved legacy Vulkan build failure on older glslc versions lacking cooperative matrix support via `GGML_VULKAN_COOPMAT_GLSLC_SUPPORT` macro check (#29409).  
- **`b11182`**: Introduced `llama_prec_policy` + model-driven W4A4 path (#24364), enabling dynamic precision selection based on model capabilities — a significant shift toward adaptive inference scheduling.

> 🔗 [GitHub Release b11192](https://github.com/ggml-org/llama.cpp/releases/tag/b11192)

---

### **3. New Model & Hardware Support**  
- ✅ **New Model Support**: Added support for **Limite 1B - Violetto** (via PR #29433) and **GraniteSpeech5ForCTC** (Turbo CTC encoder-only model) (#29446).  
- ✅ **Hardware/Backend Enhancements**:
  - **Metal**: Added FWHT kernels for block widths >512 (#29095); split FA kernels into per-dtype libraries (#29329).  
  - **OpenCL**: Added binary kernels for A8 Q5_K non-MoE + dp4a variants (#29401).  
  - **HIP**: Improved compatibility with gfx1151 (Strix Halo APU) and fixed FP8 support requiring HIP ≥6.2 (#29231).  
  - **Vulkan**: Added Intel prefill FA kernel for improved performance on Intel platforms (#29357).  
- ✅ **Quantization**: Added experimental support for **Prism PQ2_0 (GGML type 142)** and **PTQ1_0 (type 143)** used by Ternary-Bonsai-2 (#29058).

> 🔗 [PR #29433: Limite 1B-Violetto](https://github.com/ggml-org/llama.cpp/pull/29433)  
> 🔗 [PR #29446: GraniteSpeech5ForCTC](https://github.com/ggml-org/llama.cpp/pull/29446)

---

### **4. Performance & Optimization**  
- **CPU**: Tiled `mul_mat` using VNNI shows **3–7x speedup** for k-quants on x86 CPUs (#27851).  
- **GPU**:  
  - Metal: Splitting FA kernels by dtype improves memory layout flexibility and enables more efficient dispatch (#29329).  
  - Vulkan: Intel-specific prefill FA kernel reduces latency on Intel GPUs (#29357).  
  - OpenCL: New binary kernels improve Q5_K inference throughput on AMD GPUs.  
- **Memory & VRAM**:  
  - BF16/FP16 → F32 conversion now supports chunking (`GGML_CUDA_CUBLAS_CONVERT_CHUNK_SIZE`) to reduce peak VRAM usage without sacrificing full performance (#29442).  
  - Auto-fitting now attempts up to model context length × parallel slots for unified KV, increasing concurrency capacity (#28849).

> 🔗 [PR #27851: VNNI-tiled mul_mat](https://github.com/ggml-org/llama.cpp/pull/27851)  
> 🔗 [PR #29442: Chunked FP16/BF16 conversion](https://github.com/ggml-org/llama.cpp/pull/29442)

---

### **5. Stability & Regressions**  
- **Critical Bug**: Audio mel preprocessor in LFM2 was producing incorrect greedy transcripts (4.5% English, 6.5% Japanese) due to improper log clamping. Fixed by switching to `log(x + 2^-24)` (#29403).  
- **HIP/ROCm**: Multiple regressions reported:
  - Wrong logits on long prompts (`--np 4 --kv-unified`) on gfx1151 (Issue #28211).
  - Silent response corruption under mixed load (Issue #25992).
  - Memory corruption and OOMs during MTP draft context allocation (Issue #26038).
- **CUDA**: Persistent crashes with `gemma-4-E4B-it-Q4_0.gguf` due to `n_inputs < GGML_SCHED_MAX_SPLIT_INPUTS` assertion failure (Issue #24132).
- **Windows**: Server silently halts when VictoriaMetrics scrapes `/metrics` endpoint (Issue #29104).

> ⚠️ **Note**: Several of these are actively being triaged; fix PRs exist for some (e.g., audio bug in #29403), but others remain open.

---

### **6. What This Means for Application Developers**  
- **Adopt `llama_prec_policy`** to dynamically select optimal precision (W4A4) based on model and hardware — expect better throughput on NVIDIA Hopper+ and AMD MI300X.  
- **Use `--repack` in `llama-bench`** for consistent benchmarking across backends (PR #28968).  
- **Avoid `--kv-unified` on integrated GPUs (gfx1151)** until stability patches land — known to return stale responses.  
- **Enable `GGML_CUDA_CUBLAS_CONVERT_CHUNK_SIZE`** if facing OOMs during large batch inference with FP16/BF16 models.  
- **Monitor WebUI behavior**: Known issues with payload manipulation (Issue #27532) may affect agent tool calling pipelines.

> 📌 **Pro Tip**: For production inference on AMD APUs or dual-GPU systems, prefer `--kv-split` over `--kv-unified` until further stability updates are released.

---  
*Digest compiled from GitHub activity on 2026-09-26 | Source: [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

---

### **1. Today's Highlights**  
Ollama 0.40.0-rc0 introduces native MLX acceleration for Apple Silicon devices, automatically leveraging the MLX runtime for supported models like `qwen3.8`. This marks a significant step toward optimized on-device inference on Macs with M-series chips. Meanwhile, critical stability issues around image handling in cloud models and silent failures during long-running chats have been reported, highlighting ongoing challenges in edge-case robustness.

---

### **2. Releases & Breaking Changes**  
- **v0.40.0-rc0**: Now defaults to **MLX runtime on Apple Silicon** for compatible model architectures (e.g., `qwen3.8:27b-mlx`, `gemma4:31b-mlx`). No user action required—models will auto-select MLX if available.  
  🔗 [Release Notes](https://github.com/ollama/ollama/releases/tag/v0.40.0-rc0)  
- **API Change**: OpenAI-compatible `/v1/chat/completions` now silently ignores `max_tokens` and overrides `num_predict` from Modelfiles — this can lead to unbounded generation. A fix PR (#18656) is pending.  
  🔗 [Issue #18575](https://github.com/ollama/ollama/issues/18575)

---

### **3. New Model & Hardware Support**  
- **Apple Silicon (MLX)**: Full automatic runtime selection for MLX-supported models on M-series chips.  
  - Models: `qwen3.8`, `gemma4`, `deepseek-v4.1-flash` (though see regression below).  
  - Backend: MLX v0.7.3+ via PR #18651.  
- **Intel GPU (SYCL)**: Feature request (#16930) and draft integration PR (#17621) underway; opt-in via `-DOLLAMA_LLAMA_BACKENDS=sycl`. Not yet enabled by default.  
- **CUDA (RTX 50-Series)**: NVIDIA Blackwell driver (616.92) compatibility issues persist: VRAM detection fails → falls back to CPU. Reported in #18581.  
  🔗 [PR #17621](https://github.com/ollama/ollama/pull/17621)

---

### **4. Performance & Optimization**  
- **MLX Kernel Porting**: PR #18657 ports Metal-specific kernels (`mamba2_scan`, `depthwise_conv_silu`) to CUDA — previously fell back to graph ops. Expect improved throughput on CUDA-enabled systems.  
- **Memory Efficiency**: PR #17956 deduplicates CUDA runtime payloads across MLX builds, reducing binary size and improving load times.  
- **Model Diff Tool**: PR #18202 adds `ollama model diff` for comparing GGUF/safetensors files — useful for auditing quantization differences or drift.  
- **Prefix Cache**: Issue #18131 highlights that fixed 8 GiB MLX prefix cache budget causes heavy swap on 32GB Apple Silicon systems under agent workloads — a known memory pressure concern.

---

### **5. Stability & Regressions**  
| Severity | Issue | Impact | Fix Status |
|--------|------|--------|-----------|
| 🔴 High | [#18637](https://github.com/ollama/ollama/issues/18637) `deepseek-v4.1-flash` silently discards image input despite reporting `vision` capability | Agents fail silently when processing multimodal prompts | Regression of #18527; no fix yet |
| 🔴 High | [#18642](https://github.com/ollama/ollama/issues/18642) CUDA illegal memory access crash on RTX 5090 with Cohere MoE models | Frequent server crashes on high-end GPUs | No fix PR; reproducible on Windows |
| 🟡 Medium | [#18368](https://github.com/ollama/ollama/issues/18368) Long chat processing fails silently after 60s (macOS GUI) | User sees no feedback during long prefill phase | Fix PR #18654 merged — addresses WKWebView timeout |
| 🟡 Medium | [#18644](https://github.com/ollama/ollama/issues/18644) MLX pull fails silently on disk full | No error shown until write time; hard to debug | Fix PR #18648 merged — propagates disk-full errors |

---

### **6. What This Means for Application Developers**  
- ✅ **Optimize for Apple Silicon**: Use `qwen3.8:27b-mlx` or similar MLX-tagged models for best local performance on M-series Macs — no config needed.  
- ⚠️ **Avoid Cloud Vision Models Until Fixed**: Do not rely on `deepseek-v4.1-flash:cloud` for image input — it silently drops images. Use alternative models or self-host.  
- ⚠️ **Guard Against Unbounded Output**: The `/v1/chat/completions` endpoint does **not** respect `max_tokens`. Enforce limits at the application layer or use `num_predict` in Modelfiles.  
- 🛠 **Use CLI Tools for Debugging**: Leverage new `ollama model diff` and `show --modelfile` tools for inspecting model parameters and detecting drift.  
- 📌 **Prepare for API Changes**: Response IDs are limited to 999 values (`rand.Intn(999)`), risking collisions in monitoring/proxy systems. Use PR #18656 (UUID-based IDs) in production.  

> 🔗 [Fix PR: UUID response IDs](https://github.com/ollama/ollama/pull/18656)  
> 🔗 [Fix PR: Prevent silent 60s timeouts](https://github.com/ollama/ollama/pull/18654)

---  
*Digest generated: 2026-09-26 | Source: [github.com/ollama/ollama](https://github.com/ollama/ollama)*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-09-26**

---

### **1. Today's Highlights**  
The LiteLLM project continues its rapid evolution with a focus on **cost accuracy**, **security hardening**, and **multi-provider reliability**. Key updates include fixes for critical billing inconsistencies (e.g., DeepSeek V4 Pro pricing, Databricks-Gemini `id:null` collisions), enhanced Prometheus/OTel telemetry alignment, and new support for Sail and OpenRouter’s `typesafe/jev-router`. Security improvements now enforce encryption of guardrail secrets and pass-through config policies at rest.

---

### **2. Releases & Breaking Changes**  
- **v1.104.0-dev.2**, **v1.100.3**, **v1.99.4**, and **v1.98.1** released in the last 24h.  
- All Docker images are signed via **cosign** using a consistent key introduced in [commit `0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0).  
- **No breaking API changes** reported today; all releases are backward-compatible.  
- *Recommendation*: Validate image signatures before deployment: [Verify Docker Image Signature](https://docs.sigstore.dev/cosign/overview/).

---

### **3. New Model & Hardware Support**  
- ✅ **Sail** added as an OpenAI-compatible provider (`sail/<model>`), with `metadata.completion_window` mapped to completion window limits.  
- ✅ **OpenRouter**: Added `openrouter/typesafe/jev-router` to cost map, enabling routing-aware cost tracking.  
- ✅ **Gemini Live Avatar** support proposed via `avatar_config` field in `/v1/messages` (PR #43166).  
- ✅ **Fireworks AI**: Updated priority-tier pricing for `muse-glimmer-30b` and `deepseek-v4-flash-vision-exp` (PR #43252).  

> 🔗 [PR #42840 – Add Sail Provider](https://github.com/BerriAI/litellm/pull/42840)  
> 🔗 [PR #43248 – OpenRouter typesafe/jev-router](https://github.com/BerriAI/litellm/pull/43248)  
> 🔗 [PR #43166 – Gemini Live Avatar](https://github.com/BerriAI/litellm/pull/43166)

---

### **4. Performance & Optimization**  
- **Latency & Throughput**:  
  - PR #43251 introduces `fail_closed_rate_limit_enforcement`, preventing unbounded request bursts when Redis is unreachable—critical for high-availability deployments.  
  - PR #43245 refactors HTTP client pooling to centralize TLS, proxy, and timeout configuration, reducing drift and improving consistency across providers.  
- **Cost Accuracy**:  
  - PR #43253 corrects Fireworks AI DeepSeek V4.1 Flash pricing (was undercharging by ~27% input / 45% output).  
  - PR #43254 fixes Azure AI MAI-Image-2.5-Flash output price to match retail rate (~70% overcharge previously).  
- **Streaming Efficiency**:  
  - PR #43223 validates `stream_chunk_size` early (before prompt hooks), avoiding unnecessary processing of invalid values like `"sixty-four"` or `0`.

> 🔗 [PR #43251 – Rate Limit Enforcement](https://github.com/BerriAI/litellm/pull/43251)  
> 🔗 [PR #43245 – HttpClientPool Refactor](https://github.com/BerriAI/litellm/pull/43245)  
> 🔗 [PR #43253 – Fireworks Pricing Fix](https://github.com/BerriAI/litellm/pull/43253)

---

### **5. Stability & Regressions**  
| Severity | Issue | Impact | Status |
|--------|------|--------|--------|
| 🚨 Critical | **Router fallback returns `null` body after timeout** (#43165) | Non-streaming requests fail silently; breaks fallback logic | Open — **Fix pending** |
| 🚨 High | **Redis cache fails with `ssl_check_hostname` error** (#34614) | Breaks caching/budgeting in v1.93.0+ | Open — **Fix PR pending** |
| ⚠️ Medium | **Spend logs dropped due to `request_id = "None"` collision** (#39749) | Data loss in spend tracking for Databricks-Gemini | Open — **High risk for billing integrity** |
| ⚠️ Medium | **Tool/instruction fields dropped during translation** (#41913) | Loss of `const`, `parallel_tool_calls`, `allowed_callers`, etc. | Open — Affects agent precision |
| ⚠️ Medium | **Bedrock passthrough bypasses `key.models` access control** (#26399) | Security bypass for internal models | Open — **Critical access control flaw** |

> 🔗 [Issue #43165 – Router Fallback Null Response](https://github.com/BerriAI/litellm/issues/43165)  
> 🔗 [Issue #34614 – Redis ssl_check_hostname Error](https://github.com/BerriAI/litellm/issues/34614)  
> 🔗 [Issue #39749 – Spend Logs Dropped](https://github.com/BerriAI/litellm/issues/39749)  
> 🔗 [Issue #26399 – Bedrock Passthrough Bypass](https://github.com/BerriAI/litellm/issues/26399)

---

### **6. What This Means for Application Developers**  
- **Use v1.100.3+** to avoid known issues with Redis, Databricks, and spending logs. Avoid `v1.93.0` if using Redis with SSL.  
- **Update your model aliases** — Databricks Unity Gateway now requires updated names (see #43146).  
- **Monitor cost reporting closely** — recent fixes confirm that pricing for DeepSeek, Fireworks, and Azure AI was previously inaccurate.  
- **Enable OTel export** — PR #39774 pushes for full spend/budget metrics over OTel (not just Prometheus), aligning with observability best practices.  
- **Avoid relying on `request_id = null` behaviors** — ensure upstreams return valid IDs to prevent primary key conflicts.  
- **For agents**: Be cautious with `tool` and `instruction` fields — they may be stripped during translation (see #41913). Use explicit schema validation.

> 💡 **Pro Tip**: Audit your `model_prices_and_context_window.json` file — outdated entries (e.g., DeepSeek V4 Pro, Bedrock cross-region) can cause incorrect cost calculations. Subscribe to the [LiteLLM Cost Map Sync Bot](https://github.com/BerriAI/litellm/blob/main/.github/workflows/cost-map-sync.yml) for automatic updates.

---  
*Digest generated from GitHub data: [BerriAI/litellm](https://github.com/BerriAI/litellm)*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# **Unsloth Digest – 2026-09-26**

---

### **1. Today's Highlights**  
The Unsloth team continues to prioritize stability and performance on AMD hardware, with critical fixes for ROCm 7.14/7.2 compatibility, GPU memory management, and training reliability across RDNA1/RDNA2 cards. New UI polish in Studio—including model pinning, smarter tooltips, and project sorting—enhances usability for developers managing fine-tuned models and complex workflows.

---

### **2. Releases & Breaking Changes**  
*No new releases or breaking changes detected in the last 24 hours.*  

However, ongoing work includes:
- **PR #11137**: Lifting TRL version cap from `<=0.24.0` to `1.13.0`, enabling support for newer reinforcement learning features (pending merge). [GitHub PR #11137](https://github.com/unslothai/unsloth/pull/11137)
- **PR #11808**: Introducing a new *Benchmarks page* in Studio to sweep speculative decoding, KV cache, and RAM offload settings on loaded GGUF models—critical for tuning inference pipelines. [GitHub PR #11808](https://github.com/unslothai/unsloth/pull/11808)

---

### **3. New Model & Hardware Support**  
- **AMD ROCm 10 support tracking**: Users request support for ROCm 7.14 and ROCm 10 via **Issue #9932**, as AMD has officially launched ROCm 10. [GitHub Issue #9932](https://github.com/unslothai/unsloth/issues/9932)  
- **Vulkan training support**: A feature request (**Issue #11184**) calls for Vulkan-based training via external projects like `necas/vulkan-training`. This would enable full AMD GPU utilization beyond ROCm. [GitHub Issue #11184](https://github.com/unslothai/unsloth/issues/11184)  
- **ModelScope integration**: Studio now supports ModelScope as an alternative model source when Hugging Face is blocked, plus custom HF endpoints via Settings. [GitHub PR #11761](https://github.com/unslothai/unsloth/pull/11761)  
- **vLLM & SGLang opt-in support**: Added as optional inference engines in Studio with multi-GPU, quantization, and vision capabilities. Not installed by default due to dependency complexity. [GitHub PR #11491](https://github.com/unslothai/unsloth/pull/11491)

---

### **4. Performance & Optimization**  
- **GPU memory reuse optimization**: **PR #11843** ensures image/video denoises run on a single render thread, reusing cuDNN benchmarks and SDPA execution plans—reducing latency in repeated generations. [GitHub PR #11843](https://github.com/unslothai/unsloth/pull/11843)  
- **Dynamic dimension compilation fix**: **PR #11842** prevents second-prompt recompilation delays in Qwen-Image pipelines when using INT8/FP8. Reduces stall time from 15–50 seconds. [GitHub PR #11842](https://github.com/unslothai/unsloth/pull/11842)  
- **Memory planning accuracy**: **PR #11922** adjusts image memory planning based on actual loaded dtype (e.g., bf16/fp16), not disk size—preventing unnecessary offloading on 24GB cards. [GitHub PR #11922](https://github.com/unslothai/unsloth/pull/11922)  
- **Hadamard rotation for Qwen-Image-2.1**: **PR #11835** improves int8 transformer accuracy by rotating inputs to match bf16 behavior—LPIPS dropped from 0.066 to ~0.04. [GitHub PR #11835](https://github.com/unslothai/unsloth/pull/11835)

---

### **5. Stability & Regressions**  
Critical stability issues reported today focus on **AMD GPU crashes and memory mismanagement**:

| Severity | Issue | Summary | Fix Status |
|--------|------|--------|-----------|
| ⚠️ High | **Issue #9130** | GPU crash during image generation (`hipErrorLaunchFailure`) causes Studio server to terminate unexpectedly. | No fix yet; requires C++ exception handling improvements. [GitHub Issue #9130](https://github.com/unslothai/unsloth/issues/9130) |
| ⚠️ High | **Issue #11498** | QLoRA training on RX 7900 XTX triggers AMDGPU VM fault and GPU reset. | Reproducible after update; linked to stream handling bug in `utils.py`. [GitHub Issue #11498](https://github.com/unslothai/unsloth/issues/11498) |
| ⚠️ High | **Issue #10563** | 4-bit dequantize uses cached GPU stream, leading to race conditions during training. | Identified root cause; pending fix in `unsloth/kernels/utils.py`. [GitHub Issue #10563](https://github.com/unslothai/unsloth/issues/10563) |
| ⚠️ Medium | **Issue #9792** | Qwen3.8-27B V3 GGUF crashes post-prefill on R9700 (Vulkan); V2 works. | Workaround: roll back to `408fcc1807ab`. [GitHub Issue #9792](https://github.com/unslothai/unsloth/issues/9792) |
| ⚠️ Medium | **Issue #7449** | Unsloth Studio loads models into system RAM instead of VRAM on Strix Halo (Windows). | GPU compute visible but VRAM unused; likely driver or context setup issue. [GitHub Issue #7449](https://github.com/unslothai/unsloth/issues/7449) |

---

### **6. What This Means for Application Developers**  
- **For AMD users**: Avoid ROCm 7.2 if you’re on older GPUs (e.g., R9700, RX 7600). Use ROCm 7.14 or earlier until official support is confirmed. Monitor **Issue #9932** for future PyTorch builds.
- **For inference engineers**: Use **Studio’s Benchmarks page (PR #11808)** to tune speculative decoding, KV cache types, and offload strategies for real-world performance.
- **For fine-tuning pipelines**: Be cautious with QLoRA training on RDNA1/RDNA2 GPUs—expect GPU resets until **PR #10563** is merged. Prefer stable models like Qwen3.5-V2 over V3.
- **For app integrators**: Leverage **vLLM/SGLang opt-in support (PR #11491)** for high-throughput, multi-GPU serving—but manage dependencies manually.
- **For model packaging**: Use `save_pretrained_gguf` carefully—**Issue #11698** shows LoRA weights may not be merged unless explicitly handled. Always verify output.

> ✅ **Actionable Tip**: If deploying on AMD, test with `ROCm 7.14` and avoid `ROCm 7.2` until Unsloth updates its PyTorch stack. Use `--no-cache-dir` in Docker to avoid stale downloads (e.g., **Issue #11638**).

---  
*Digest generated: 2026-09-26 | Source: [unslothai/unsloth GitHub](https://github.com/unslothai/unsloth)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*