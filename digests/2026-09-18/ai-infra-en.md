# AI Infrastructure Digest 2026-09-18

> Generated: 2026-09-18 00:45 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-09-18**

---

### **1. Ecosystem Overview**  
The AI inference and serving ecosystem is rapidly maturing into a multi-layered, hardware-aware stack optimized for next-generation models—particularly MoE, multimodal, and Flash-architecture variants. Projects are converging on performance-critical primitives like speculative decoding, FP8/INT8 quantization, and distributed tensor parallelism, while diverging in their target layers: from low-level kernels (llama.cpp) to full-stack gateways (Ollama, LiteLLM) and high-throughput engines (vLLM, SGLang). AMD ROCm and Blackwell-era SM120 support are now central battlegrounds, with stability and correctness issues underscoring the growing complexity of cross-architecture deployment.

---

### **2. Activity Comparison**

| Project       | Issues Open (24h) | PRs Merged (24h) | Recent Release | Status |
|---------------|-------------------|------------------|----------------|--------|
| **vLLM**      | 7                 | 12               | None           | Stable (RC pending) |
| **SGLang**    | 10                | 8                | None           | Active development |
| **llama.cpp** | 15                | 13               | `b11028`       | Patch-focused |
| **Ollama**    | 12                | 5                | None           | Feature-driven |
| **LiteLLM**   | 11                | 7                | None           | Config & security focus |
| **Unsloth**   | 9                 | 10               | v0.1.810-beta  | Beta release |

> ✅ *vLLM and llama.cpp lead in technical velocity; Ollama and LiteLLM show strong feature momentum but higher instability.*

---

### **3. Model Support Race**

| New Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|--------------------------|------|--------|-----------|--------|---------|---------|
| **Qwen3.8-Flash-Next**   | ✅ (MTP, fp8_e4m3 KV cache) | ✅ (MTP, hybrid) | ✅ (MTP, flash attention) | ✅ (MTP) | ❌ | ✅ (UD-IQ4_XS) |
| **DeepSeek-V4.1-Flash**  | ✅ (speculative decoding) | ✅ (DSA sparse-MLA) | ⚠️ (partial) | ❌ | ❌ | ❌ |
| **Kimi K2.5/K3**         | ✅ (multi-modal) | ✅ (GB300/GB200 SP) | ❌ | ❌ | ❌ | ❌ |
| **GLM-5.3-Flash**        | ✅ (ROCm, ViT CUDA graph) | ✅ (Quark-MXFP4) | ✅ (ROCm) | ✅ (Vulkan crash) | ❌ | ✅ (ROCm) |
| **spark2_5**             | ❌ | ❌ | ❌ | ✅ (requested) | ❌ | ❌ |
| **Nemotron (MTP)**       | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |

> 🏆 **Leader**: **vLLM** leads in model diversity and optimization depth, especially for Qwen and GLM families.  
> 🔥 **Emerging Edge**: **Unsloth** is fastest to adopt new quantized formats (MXFP4, FP8) and supports Qwen3.8-Flash-Next with advanced MTP handling.

---

### **4. Performance Frontier**

| Optimization Focus          | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|------------------------------|------|--------|-----------|--------|---------|---------|
| **KV Cache Efficiency**      | ✅✅ (fp8_e4m3, incremental offloading) | ✅ (HiCache write-back) | ✅ (flash attention) | ⚠️ (memory leaks) | ⚠️ (streaming loss) | ✅ (buffer release every 256 tokens) |
| **Speculative Decoding**     | ✅✅ (SM120 fixes) | ✅ (correctness issues) | ⚠️ (limited) | ❌ (no control) | ❌ | ⚠️ (stall risk) |
| **Quantization & Kernels**   | ✅✅ (TurboQuant/HIGGS, MLA) | ✅ (MXFP8, deferred routing) | ✅✅ (DP4A, MFMA, OpenCL) | ✅ (Bonsai 1/2-bit) | ❌ | ✅✅ (FP8/INT8, GGUF) |
| **Distributed Serving**      | ✅✅ (pipeline-parallel, TP) | ✅ (collectives) | ❌ | ❌ | ✅ (multi-provider) | ❌ |
| **Kernel-Level Optimizations** | ✅✅ (CUDA graphs, fused Triton) | ✅ (DSA sparse-MLA) | ✅✅ (Intel Xe, CDNA2) | ⚠️ (ARM64 Vulkan) | ❌ | ✅ (CPU kernel reduction) |

> 💡 **Top Performers**: **vLLM** and **llama.cpp** dominate at the kernel and system level.  
> 📈 **Specialist Leaders**: **Unsloth** excels in CPU overhead reduction and LoRA training speed; **SGLang** leads in cache semantics and speculative decoding design.

---

### **5. Layer Positioning**

| Project       | Primary Layer                     | Key Differentiators |
|---------------|------------------------------------|---------------------|
| **vLLM**      | High-performance inference engine | Best-in-class batching, MoE, CUDA graph integration |
| **SGLang**    | Advanced inference runtime + gateway | Unified cache semantics, DSA backend, speculative decoding rigor |
| **llama.cpp** | Local, portable inference runtime | Cross-backend support (Vulkan, SYCL, OpenVINO), lightweight, open-source |
| **Ollama**    | Developer-friendly local gateway | Simple CLI, tool calling, MLX/ARM64 expansion |
| **LiteLLM**   | Enterprise-grade API gateway      | Multi-provider proxy, cost tracking, JWT/OAuth, observability |
| **Unsloth**   | Full-stack fine-tuning + inference | Training acceleration, Docker-native, multi-user support |

> 🧩 **Strategic Divide**:  
> - **Engineers building agents**: vLLM/SGLang for scale, unsloth for training efficiency.  
> - **Developers prototyping locally**: Ollama + llama.cpp for ease.  
> - **Enterprises managing costs**: LiteLLM + Ollama for billing and access control.

---

### **6. Trend Signals**

#### 🔍 **Key Industry Trends Extracted**
1. **Hardware Specialization Is Accelerating**:  
   - AMD ROCm (MI350X/MI355X) and NVIDIA Blackwell (SM120) are now first-class targets — not afterthoughts.
   - Projects like **vLLM**, **SGLang**, and **Unsloth** are investing heavily in GPU-specific kernels (sparse-MLA, DSA, MFMA).

2. **MoE & MTP Are No Longer Experimental**:  
   - All major projects now support MTP (Multi-Token Processing) or MoE experts — with **vLLM** and **Unsloth** leading in optimizations (e.g., incremental offloading, fp8_e4m3 KV cache).

3. **Speculative Decoding Is Becoming Production-Ready (But Not Yet Reliable)**:  
   - While **vLLM** and **SGLang** ship fixes, **Ollama** lacks control (`--nodraft`) and **LiteLLM** has no visibility into draft states — a red flag for agent systems.

4. **Tool Calling & Agent Fidelity Are Breaking Down**:  
   - Multiple regressions in **Ollama** (tool call parsing), **SGLang** (cache misrouting), and **LiteLLM** (missing logs) indicate that agent workflows are fragile despite growing demand.

5. **Security & Compliance Gaps Are Emerging**:  
   - **LiteLLM**’s `GET /v1/models` bypassing team restrictions and **Ollama**’s missing copyright notices signal rising scrutiny over enterprise readiness.

#### ✅ **What Developers Should Watch**
- **Stability > Features**: Prioritize vLLM (for production inference) and Unsloth (for training) over Ollama/LiteLLM until core bugs are resolved.
- **Benchmark Carefully**: Use identical cache settings and avoid `--split-mode tensor` on SYCL unless patched.
- **Monitor For**:  
  - `v0.29.1rc0` (vLLM) – expected stabilization for ROCm/GLM-5.3-Flash.  
  - `--nodraft` flag in Ollama (#18517) – essential for debugging.  
  - Unified Radix Cache adoption (SGLang) – improves scalability.

> 🛠 **Bottom Line**: The infrastructure is shifting from "can we run it?" to "can we run it safely and predictably?" — expect stricter QA and more rigorous testing in upcoming releases.

---  
*Compiled by Senior AI Infrastructure Analyst | 2026-09-18*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-09-18**

---

### **1. Today's Highlights**  
The vLLM project continues to accelerate its support for next-generation multimodal and MoE models, with key work on ViT CUDA graph integration (#38175) and incremental MoE expert offloading (#38256). Critical performance fixes landed for GLM-5.3-Flash on ROCm (#57424, #57227) and DeepSeek-V4.1 speculative decoding on SM120 (#56771), while new profiling controls were unified across platforms (#57460).

---

### **2. Releases & Breaking Changes**  
*No new releases or breaking API changes detected in the past 24 hours.*

---

### **3. New Model & Hardware Support**  
- **Multimodal**: Added `SupportsEncoderCudaGraph` for **LLaVA-OneVision**, enabling full vision tower + projector CUDA graph capture (PR #57379).  
- **Hardware**: Enhanced ROCm support for **GLM-5.3-Flash** on AMD MI350X/MI355X (gfx950), including sparse-indexer fixes and FP32 router enablement on SM120 (PR #56152).  
- **Quantization**: Ongoing progress on **TurboQuant/HIGGS attention backend** for hybrid models (e.g., Qwen3.5, mamba+attention) and MLA support (Issue #40069).  
- **Model Families**: Active development on **DeepSeek-V4.1-Flash**, **Qwen3.8-Flash-Next**, and **Kimi K2.5** with multi-modality and quantization optimizations.

---

### **4. Performance & Optimization**  
- **GLM-5.3-Flash**: Reduced sparse-MLA preparation overhead via query reuse and elimination of redundant `torch.cat` operations (PR #57458).  
- **Qwen3.8-Flash-Next**: Successfully enabled **fp8_e4m3 KV cache** on QSA path, doubling effective KV pool size (measured: ~2x throughput on GB10, sm_121) (Issue #54426).  
- **MiniMax-M3**: Optimized decode indexing and routing on SM120 with fused kernels and chunk-bound logic (PR #56151, #56149, #56150).  
- **Speculative Decoding**: Improved pipeline-parallel auxiliary-state handling and draft state isolation (PR #57197, #57290).  
- **Profiling**: Unified platform-aware torch profiler with configurable activities and per-session controls (PR #57460, #56542).

---

### **5. Stability & Regressions**  
| Severity | Issue | Summary | Fix Status |
|---------|------|--------|------------|
| 🔴 High | [#57424](https://github.com/vllm-project/vllm/issues/57424) | GLM-5.3-Flash fails to boot on ROCm nightly due to missing `forward_cuda` in `SparseAttnIndexerKpool` → `NotImplementedError` | ❌ Pending |
| 🔴 High | [#57227](https://github.com/vllm-project/vllm/issues/57227) | GPU memory-access fault during lazy CUDA-graph capture on 16K-token prefill (ROCm, gfx950) | ❌ Pending |
| 🟡 Medium | [#56771](https://github.com/vllm-project/vllm/issues/56771) | Illegal memory access in SM120 sparse-MLA prefill during DSpark speculative decoding (DeepSeek-V4.1-Flash) | ❌ Pending |
| 🟡 Medium | [#56370](https://github.com/vllm-project/vllm/issues/56370) | Batch invariance broken when sequence parallelism + async TP are enabled (`VLLM_BATCH_INVARIANT=1`) | ⚠️ Partial fix in PR #57197 |
| 🟡 Medium | [#54426](https://github.com/vllm-project/vllm/issues/54426) | `qk_rope_head_dim=0` fails on SM120 — no working attention/KV path for rope-free sparse MLA | ❌ Pending |

---

### **6. What This Means for Application Developers**  
- **Deploying on AMD GPUs?** Expect instability with GLM-5.3-Flash and DeepSeek-V4.1 on ROCm; avoid nightly builds until #57424 and #57227 are resolved. Use `--enforce-eager` as a workaround.  
- **Building agents with long-context reasoning?** The `incremental MoE expert offloading` RFC (#38256) enables running large MoE models on smaller hardware — monitor progress for production use.  
- **Using speculative decoding?** Ensure you’re not hitting the `SM120 sparse-MLA` issues in DeepSeek-V4.1; validate with small contexts first.  
- **Optimizing inference?** Leverage the new `fp8_e4m3 KV cache` support in Qwen3.8-Flash-Next for up to 2× higher throughput.  
- **Debugging performance?** Enable unified profiling via `torch_profiler_activities` and `profile_prefix` in Python/Rust frontends (PR #57460).  

👉 *Stay tuned for v0.29.1rc0 and future releases that may stabilize these high-priority fixes.*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-09-18**

---

### **Today's Highlights**  
The SGLang ecosystem continues to advance in support for next-generation hardware and inference patterns, with critical work on **Blackwell-era CUDA optimizations**, **speculative decoding correctness**, and **cross-architecture compatibility**. Key developments include a major fix for GPU memory corruption via the `CUDA Coredump Tracker` (Issue #26340), ongoing stabilization of **T-Head PPU** and **SenseNova-U1/U1.5** integration, and progress toward unified cache semantics across backends.

---

### **Releases & Breaking Changes**  
*None reported in the last 24 hours.*

---

### **New Model & Hardware Support**  
- ✅ **T-Head PPU (ZW810/ZW810E/ZW-M890P)**: First-class support is being tracked in [Issue #37519](https://github.com/sgl-project/sglang/issues/37519). This enables deployment on China’s emerging high-performance AI accelerators.
- ✅ **SenseNova-U1/U1.5**: Integration tracking underway ([Issue #37742](https://github.com/sgl-project/sglang/issues/37742)), leveraging official OpenSenseNova repo as reference.
- ✅ **AMD GLM-5.3-Flash Quark-MXFP4**: PR #39317 ensures proper handling of fused/per-expert quantization exclusions during model loading.
- ✅ **Kimi K3 (GB300/GB200) TP4/TP16 SP collectives**: Enabled via PR #35330 for large-scale multi-node inference.

---

### **Performance & Optimization**  
- 🔧 **Optimistic Prefill + HiCache Write-Back**: PR #40043 enables *buffer-only L3 write-through HiCache* for optimistic prefill, improving prefix cache utilization under high contention.
- 🚀 **DSA Sparse-MLA Backend (SM120/90)**: PR #32779 adds fused Triton path for DSA prefill, addressing poor kernel fit on high-head-count models (e.g., GLM-5.x).
- ⚙️ **MXFP8 & Deferred Routing in DeepEP v2**: PR #40030 introduces support for MXFP8 experts and opt-in FP32 SiLU policy, enabling higher precision routing in MoE models.
- 💡 **Hybrid Recurrent State Commit Fix**: PR #40001 resolves incorrect state management in PP × speculative decoding for GDN/KDA/Mamba-style models.

---

### **Stability & Regressions**  
| Severity | Issue | Description | Status |
|---------|-------|-------------|--------|
| Critical | [#26340](https://github.com/sgl-project/sglang/issues/26340) | Auto-collected CUDA coredumps from CI indicate potential memory corruption or kernel crashes; 313 comments suggest widespread impact. | Active investigation |
| High | [#39830](https://github.com/sgl-project/sglang/issues/39830) | Hierarchical cache returns wrong output on hybrid (GDN/Mamba) models due to host-tier hit misrouting. | No fix PR yet |
| High | [#39651](https://github.com/sgl-project/sglang/issues/39651) | Benchmark tool doesn’t control or record radix cache state — leads to silent mismatch between CI and user runs. | Inactive |
| Medium | [#39684](https://github.com/sgl-project/sglang/issues/39684) | `sgl-deep-gemm 0.2.0` returns non-owning alias in weight-scale transform; breaks downstream tensor ownership. | Patch expected |
| Medium | [#39922](https://github.com/sgl-project/sglang/issues/39922) | `/v1/messages` never reports `cache_creation_input_tokens`, leading to incorrect billing. | Duplicate of #39900 |

> 🔍 **Note**: Several regressions are tied to **KV cache behavior**, **speculative decoding**, and **multi-device coordination** — core components of high-throughput serving.

---

### **What This Means for Application Developers**  
- If you’re deploying on **Blackwell GPUs (SM120)**, expect instability with **GLM-5.x NoPE MLA** and **DSA backends** until PRs like #32779 land. Use `--dsa-prefill-backend flashmla_sparse` cautiously.
- For **agent systems using speculative decoding**, be aware of:
  - Missing OTel spans (`#37128`)
  - Incorrect token splicing when requests are retracted (`#39645`)
  - Hybrid model cache inconsistencies (`#39830`)
- Use `--optimistic-prefill-attempts` only after confirming HiCache setup via PR #40043.
- Billing accuracy depends on correct `cache_creation_input_tokens` — currently broken in Anthropic-compatible endpoints (`#39900`, `#39922`). Monitor for updates.
- Consider adopting **Unified Radix Cache** (PR #40043, #39915) for better scalability and observability in production clusters.

> ✅ **Actionable Tip**: Always verify that your benchmark commands match CI settings — especially cache protocol — to avoid misleading performance results ([#39651](https://github.com/sgl-project/sglang/issues/39651)).

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# **llama.cpp Digest – 2026-09-18**

---

### **1. Today's Highlights**  
The latest release cycle (b11028–b11017) focuses on stabilizing MoE (Mixture-of-Experts) support for Qwen3 and Nemotron models, with key fixes to tensor loading and memory management across Vulkan, SYCL, and OpenVINO backends. Critical stability improvements were made in the Vulkan backend to prevent incorrect attention cache reads and device loss errors, while new kernel optimizations are advancing performance on Intel Xe and AMD CDNA2 hardware.

---

### **2. Releases & Breaking Changes**  
- **Latest Release: `b11028`** ([GitHub](https://github.com/ggml-org/llama.cpp/releases/tag/b11028))  
  - Fixed missing file eviction in CI (`ci: add missing evict-old-files #29041`) — prevents disk bloat in automated builds.  
- **`b11027`**: Skips ACCEL devices in RPC (#29020) — avoids undefined behavior on unsupported hardware.  
- **`b11026`**: Adds conditional skip of `gate_up_exps` when `TENSOR_SKIP` is set (#29014), essential for proper Qwen3.5-MoE handling when fused MTP tensors aren’t loaded.  
- **`b11025`**: Extends Nemotron MTP support with cleanup and first fix (#29018).  

> 🔔 **Migration Note**: Users of Qwen3.5-MoE or Nemotron models with fused MTP layers should upgrade to `b11026+` to avoid silent corruption during model load.

---

### **3. New Model & Hardware Support**  
- ✅ **Qwen3.5-MoE & Qwen3.8-Flash-Next (MTP)**: Full MTP support now active via PRs like [#28243](https://github.com/ggml-org/llama.cpp/pull/28243), enabling shared token embeddings and up to 2x faster inference.
- ✅ **Nemotron**: Expanded MTP support with clean-up and alignment fixes (#29018).
- ✅ **Intel Xe (LPG Plus/Xe2/Xe3)**: PR [#24406](https://github.com/ggml-org/llama.cpp/pull/24406) introduces flash attention kernels — critical for high-throughput generation on Intel Arc GPUs.
- ✅ **AMD CDNA2 (gfx90a)**: PRs [#29050](https://github.com/ggml-org/llama.cpp/pull/29050) and [#29047](https://github.com/ggml-org/llama.cpp/pull/29047) add matrix-core (MFMA) lightning indexer support — unlocks full hardware utilization for DeepSeek-V3.2/V4.
- ✅ **Hexagon NPU (Windows Arm64)**: CI build enabled via PR [#29052](https://github.com/ggml-org/llama.cpp/pull/29052) — opens door for mobile AI deployment.

---

### **4. Performance & Optimization**  
- 🚀 **Intel Xe Flash Attention Kernels** (PR #24406): Early benchmarks suggest up to **1.8x higher throughput** on Xe2/Xe3 GPUs during long-context generation.
- ⚡ **DP4A Bin Kernels for OpenCL** (PRs #29057, #29056, #29055): Optimized GEMM kernels for Q6_K/Q4_K/Q4_0 quantizations — expected **~25% speedup** on compatible OpenCL devices.
- 💥 **Flash Attention Binary Support (OpenCL)** (PR #29046): Enables low-latency attention computation on heterogeneous platforms.
- 🔍 **Lightning Indexer (CDNA2/MFMA)** (PR #29050): Eliminates scalar fallback; leverages matrix cores for near-linear scaling on AMD Instinct GPUs.

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Fix/Workaround |
|--------|------|-------|--------------|
| Critical | Vulkan: `DeviceLostError` on Linux 7.x + RADV Strix Halo (#25664) | Open | No PR yet — likely driver-level issue |
| High | Vulkan: Incorrect attention cache reads → wrong outputs (#28956) | Open | Patched in PR #28956 (pending merge) |
| High | SYCL: Excessive scratchpad allocation (>2GB) with ngram-mod enabled (#28860) | Open | Workaround: disable `--ngram-mod` |
| Medium | CUDA: RTX 5090D hangs during decode (Qwen3.8-27B-NVFP4) (#27329) | Open | Investigating GPU-specific kernel race |
| Medium | Host memory grows unbounded during chat (Qwen4_exp, 128GB unified mem) (#28933) | Open | Memory leak suspected in KV cache management |
| Low | `ggml_backend_sycl_split_buffer_type` function signature mismatch (#28980) | Open | Typo in header — easy fix |

> ⚠️ **Note**: Several issues affect MoE models (Qwen3.5/3.8-MoE, Nemotron) under Vulkan/SYCL — users should monitor `b11026+` releases closely.

---

### **6. What This Means for Application Developers**  
- **Use `b11026+` for Qwen3.5-MoE and Nemotron models** — earlier versions risk silent data corruption due to improper tensor skipping.
- **Enable `--split-mode tensor` cautiously on SYCL** — it’s significantly slower than single-GPU mode and may hang with quantized KV caches (#26409).
- **For Intel Arc B70 users**: Avoid `--split-mode tensor` until #28953 is merged — current SYCL implementation has a 19.3GB memory cap bug.
- **Leverage new DP4A/OpenCL kernels** for faster inference on OpenCL-capable devices — expect ~25% latency reduction on Q4_K/Q6_K models.
- **Monitor `/v1/completions` logprobs behavior** — current version returns only generated token logprobs, breaking LM-eval pipelines (#27174).

> ✅ **Actionable Tip**: If using `llama-server`, enable `--errors-only` in CI via PR #29040 to reduce noise in test logs.

---  
*Digest compiled from GitHub activity (2026-09-18). Source: [llama.cpp GitHub](https://github.com/ggml-org/llama.cpp)*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-09-18**

---

### **1. Today's Highlights**  
The Ollama ecosystem continues to expand its support for emerging models and hardware backends, with critical work underway on MLX-based inference stability and new model architecture recognition. Key developments include native support for the *spark2_5* architecture (requested in #18195), progress on Vulkan ARM64 inference (#18502), and a growing focus on tooling flexibility—evidenced by multiple feature requests around custom roles (#18483, #18509) and speculative decoding control (#18517). A major licensing concern has resurfaced regarding missing copyright notices in release artifacts (#3185).

---

### **2. Releases & Breaking Changes**  
None reported in the last 24 hours.

---

### **3. New Model & Hardware Support**  
- ✅ **New Architecture Support**: Native support for `spark2_5` (Spark-X2.5-4B / 1.7B) is now actively requested (#18195); currently blocked by runtime recognition issues.
- 🚀 **MLX Backend Enhancements**: 
  - Added support for Bonsai’s low-bit (1-bit/2-bit) quantized weights via MLX backend (#18515).
  - Experimental progress toward improved load-time stall detection and buffer management (#17834).
- 💻 **Hardware & Platform Expansion**:
  - Fixing Vulkan inference on Linux ARM64 systems (Apple Silicon M1/Asahi Linux) — PR merged (#18502).
  - AMD RX 6750 XT Vulkan crashes under multi-model load are under investigation (#18494).

---

### **4. Performance & Optimization**  
- ⚙️ **Speculative Decoding Control**: Feature request for `--nodraft` flag to disable speculative decoding (#18517) enables debug and performance benchmarking.
- 🔍 **Memory & Load Efficiency**:
  - Draft model memory measurement failure for Gemma 4 MTP leads to incorrect reporting (~315 MB vs. 4.4 GB) — impacting monitoring (#17951).
  - MLX runner now releases KV buffers during speculative decode every 256 tokens, improving memory lifecycle management (#18510).
- 📈 **Startup Optimization**: Warm-up compile paths now pre-populated on model load to reduce cold-start latency without affecting TTFT (#16085).

---

### **5. Stability & Regressions**  
| Severity | Issue | Description | Fix Status |
|--------|------|-------------|------------|
| 🔴 High | `glm-ocr` infinite loop | Model enters endless text repetition; reproducible with simple inputs like `hi` (#16892) | Open |
| 🔴 High | `qwen3-vl:8b-instruct` crash on Vulkan (AMD RX 6750 XT) | Crashes after loading second VL model (`0xc0000005`) on Windows 0.34.1 (#18494) | Open |
| 🔴 High | `mlx` nvfp4 stalls during sustained single-slot load | Request hangs indefinitely with zero token output, requiring SIGTERM to recover (#18505) | Open |
| 🟡 Medium | `glm-5.3-flash` emits malformed JSON string-encoded tool calls | Intermittent corruption in `calls` field due to improper serialization (#18506) | Open |
| 🟡 Medium | `minicpm5-2b` native tool calls never parse | Tool response contains malformed XML fragments (`name="get_weather"> name="city...`) (#18483) | Open |
| 🟡 Medium | Ollama Cloud login blocked for anonaddy.me aliases | Users receive "Access blocked" error despite valid credentials (#18513) | Open |

> *Note: Several regressions affect tool calling and model serving fidelity across both local and cloud deployments.*

---

### **6. What This Means for Application Developers**  
- **Tooling Flexibility Is Critical**: Multiple issues highlight that current restrictions on role types (`system`, `user`, `assistant`) and tool call parsing are breaking real-world agent workflows. Expect community-driven proposals (e.g., #18509, #18483) to push for more permissive, structured input handling.
- **Performance Debugging Needs Tools**: The lack of `--nodraft` flag makes it hard to isolate speculative decoding effects. Developers should prepare for custom patching or forked builds until #18517 lands.
- **Cloud & Enterprise Use Cases Are Under Scrutiny**: Removal of the built-in CLI agent (#18490) and licensing gaps (#3185) signal growing tension between privacy, compliance, and usability—enterprise users must audit dependencies carefully.
- **Cross-Platform Reliability Remains Fragile**: Vulkan support on AMD GPUs and ARM64 Linux remains unstable; developers relying on these platforms should expect manual intervention or fallbacks.

> 🔗 **Key Links**:  
> - [Issue #18195: spark2_5 support](https://github.com/ollama/ollama/issues/18195)  
> - [PR #18505: MLX nvfp4 stall fix](https://github.com/ollama/ollama/pull/18505)  
> - [Issue #16892: glm-ocr infinite loop](https://github.com/ollama/ollama/issues/16892)  
> - [PR #18517: --nodraft flag proposal](https://github.com/ollama/ollama/pull/18517)

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

---

### **1. Today's Highlights**  
LiteLLM continues to expand its enterprise-grade proxy capabilities with critical fixes for authentication, cost tracking, and observability—particularly around JWT caching, model access control, and streaming guardrails. Notable PRs include improved handling of Bedrock audio transcription (PR #41565) and enhanced error clustering for better debugging (PR #41715), while community demand remains high for expanded SSO scalability (Issue #25762).

---

### **2. Releases & Breaking Changes**  
*No new releases in the last 24 hours.*  
However, several configuration and behavioral changes are actively being addressed:  
- **`LITELLM_JOB_ROLE`** is documented but not present in code (Issue #39722), indicating potential future deprecation or rework.  
- The `cache_control_injection_points` setting now persists on model updates (PR #40632), preventing silent misconfigurations that could affect caching behavior.

---

### **3. New Model & Hardware Support**  
*No new models or hardware backends added today.*  
Ongoing requests highlight growing demand for:  
- **fal.ai video models** (Sora 2, Veo 3.1) via Issue #16073  
- **Alibaba Cloud DashScope image generation models** (Qwen-Image, Wan) via Issue #28763  
- **Bourse** as an OpenAI-compatible provider (Issue #41042) — already functional but not officially documented  

These reflect broader integration trends toward diverse multimodal and cost-optimized inference providers.

---

### **4. Performance & Optimization**  
*No direct throughput/latency improvements landed today.*  
But progress is visible in:  
- **Streaming efficiency**: PR #41711 ensures intercepted web searches inherit parent session context, enabling accurate cost attribution and trace correlation.  
- **Cost precision**: PR #41694 ensures model renames propagate across all access controls (keys, teams, orgs), preventing silent failures due to outdated allowlists.  
- **API consistency**: PR #41448 preserves upstream query parameters in passthrough routes (e.g., Vertex AI), avoiding unintended spend logging failures.

---

### **5. Stability & Regressions**  
Top stability concerns today involve **authentication**, **cost accounting**, and **streaming correctness**:  

1. **Prisma reconnection failure** (Issue #26886): Persistent instability in proxy pods due to Prisma engine crashes; affects reliability in Kubernetes deployments.  
2. **Streaming usage loss** (Issue #36168): Final stream chunks with non-empty `choices` lose `cached_tokens`, leading to incorrect billing (up to full input rate). *Fix pending.*  
3. **Missing logs for `/cursor/chat/completions`** (Issue #30126): Successful requests not logged in SpendLogs despite provider charges—critical for audit trails.  
4. **Azure deployment pricing recorded as $0** (Issue #41605): Intermittent zero-cost logging for Azure AI Foundry, risking budget overruns.  
5. **`/v1/models` bypasses team model restrictions** (Issue #41595): Users can discover models they cannot invoke—security and operational risk.  

*Fix PRs exist for some issues*:  
- PR #41707: Evicts JWT key mapping cache on deletion (addresses stale auth state).  
- PR #41710: Honors team/user MCP Tool Search settings for JWT users.  
- PR #41715: Adds normalized error cluster keys for better observability.

---

### **6. What This Means for Application Developers**  
Developers using LiteLLM in production should:  
- **Verify cost tracking** for streaming and pass-through endpoints—especially if using Azure, Bedrock, or Cursor integrations—due to known gaps in usage logging (Issues #36168, #41605).  
- **Avoid relying on `GET /v1/models`** for access control; implement client-side filtering since team-level `allowed_models` are not enforced at discovery time (Issue #41595).  
- **Update configurations carefully** when renaming models—ensure `model allowlists` are updated automatically (PR #41694 addresses this).  
- **Monitor JWT-based authentication flows** closely; stale mappings may persist post-deletion unless explicitly cleared (PR #41707).  
- **Consider using the latest proxy version** to benefit from recent fixes in OAuth, MCP, and error reporting (e.g., PR #41715, #41709).  

👉 *For immediate action*: Review [Issue #25762](https://github.com/BerriAI/litellm/issues/25762) if you're on the Standard Plan with SSO and expect more than 5 users.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-09-18**

---

### **1. Today's Highlights**  
Unsloth releases **v0.1.810-beta**, introducing full **multi-user support**, **AMD RDNA1+2 GPU compatibility**, and expanded **FP8/INT8 diffusion support** in its new Docker image. The update also brings ARM64 CUDA on Windows, enhancing cross-platform accessibility for inference and training workflows.

---

### **2. Releases & Breaking Changes**  
- **v0.1.810-beta** ([Release Notes](https://github.com/unslothai/unsloth/releases/tag/v0.1.810-beta)) includes:  
  - Multi-user accounts and enhanced container isolation  
  - Full AMD ROCm support (RDNA1+, FP8/INT8) via updated `unsloth/unsloth-rocm` image  
  - ARM64 CUDA support on Windows (experimental)  
  - Updated Docker Hub images with latest llama.cpp and runtime components  

> ⚠️ **Migration Note**: Users relying on outdated Docker images should upgrade immediately — several issues (e.g., #6180, #9583) stem from stale builds.

---

### **3. New Model & Hardware Support**  
- **AMD GPUs**: Full support for RDNA1+2 (including RTX 5060Ti, 5080, 5090) via ROCm backend  
- **Quantization Formats**: FP8, INT8, MXFP4, and Q4_K_M (via GGUF) now supported across training and inference  
- **New Models**:  
  - Qwen3.8-Flash-Next (UD-IQ4_XS) tested with MTP and draft attention  
  - GPT-OSS-120B-K4-KM now supported in Studio (though output format mismatch reported in #10252)  
- **Model Sources**: Added request for ModelScope integration (#2969, #9117), though not yet implemented

---

### **4. Performance & Optimization**  
- **LoRA SFT Speedup**:  
  - 0.83 s → 0.66 s per step on B200 (1 GPU) for Qwen3.5-9B LoRA SFT ([#10744](https://github.com/unslothai/unsloth/pull/10744))  
  - Further optimized to 0.77 s per step with model-independent CPU overhead reduction ([#11238](https://github.com/unslothai/unsloth/pull/11238))  
- **CPU Kernel Launch Reduction**: ~20,000 kernel launches per step reduced via Python-side optimization  
- **Studio Startup**: macOS update delay reduced by avoiding redundant binary re-probing ([#11237](https://github.com/unslothai/unsloth/pull/11237))

---

### **5. Stability & Regressions**  
| Issue | Severity | Status | Fix PR? |  
|------|----------|--------|--------|  
| `LLVM ERROR: Unsupported rounding mode for conversion` (f16→f16) [#2491](https://github.com/unslothai/unsloth/issues/2491) | Critical | Closed | ✅ [PR #11222](https://github.com/unslothai/unsloth/pull/11222) |  
| MTP aborts during load: `nextn.hc_head_norm still [hc_dim] after rebase` [#11143](https://github.com/unslothai/unsloth/issues/11143) | High | Open | ❌ |  
| Qwen3.5-2B QLoRA worker crashes after first chat generation [#7843](https://github.com/unslothai/unsloth/issues/7843) | High | Closed | ✅ (patched in v0.1.810-beta) |  
| Studio fails to start on `0.0.0.0` binding [#11187](https://github.com/unslothai/unsloth/issues/11187) | Medium | Open | ❌ |  
| GGML_ASSERT error during graph build (RTX 5080) [#11219](https://github.com/unslothai/unsloth/issues/11219) | High | Open | ❌ |  

> 🔥 **Critical Note**: Several stability issues involve `llama.cpp` runtime corruption or AV quarantining — see [#10494](https://github.com/unslothai/unsloth/pull/10494) for repair logic.

---

### **6. What This Means for Application Developers**  
- **Multi-user environments** are now viable — use the new Docker image (`unsloth/unsloth:latest`) for secure, isolated inference/training workloads.  
- **AMD users** can now run full-stack workflows (training + inference) via ROCm, including local Studio UI access (with upcoming PR #11218).  
- **Performance-sensitive apps** should adopt `unsloth-cli.py` with recent patches to reduce CPU overhead — expect ~20% faster SFT steps on B200.  
- **Vision models** require careful handling of multimodal kwargs (see #11031); ensure `image_position_ids`, `spatial_shapes`, and `num_tiles` are passed through GRPO pipelines.  
- **Avoid stale Docker images** — many bugs originate from outdated `llama.cpp` or `unsloth_zoo` versions; always pull latest `unsloth/unsloth` or `unsloth/unsloth-rocm`.

> 📌 **Pro Tip**: Use `unsloth run --model qwen3.8-flash-next` with `--quantize mxfp4` for best performance on high-context models like GPT-OSS-120B.

---  
*Data source: [unslothai/unsloth GitHub](https://github.com/unslothai/unsloth)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*