# AI Infrastructure Digest 2026-08-28

> Generated: 2026-08-28 01:34 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-08-28**

---

### **1. Ecosystem Overview**  
The AI inference infrastructure landscape in August 2026 is characterized by rapid hardware specialization, convergence of model serving and local execution, and growing pressure on stability at scale. Next-gen GPUs (Blackwell SM120/SM121, RTX 5090, GB10) are driving deep kernel-level optimizations across all major projects, while emerging architectures like Ascend 950 and Apple Silicon demand platform-specific fixes. The race is no longer just about raw speed—**correctness, memory efficiency, and distributed reliability** have become non-negotiable for production-grade systems. Projects are increasingly converging on shared abstractions (e.g., `nvfp4`, `DSpark`, `PCP`) but remain fragmented in implementation quality, particularly around ROCm and multi-node consistency.

---

### **2. Activity Comparison**

| Project       | Open Issues | Open PRs | Recent Release | Status |
|---------------|-------------|----------|----------------|--------|
| **vLLM**      | 37          | 142      | v0.27.1        | Stable (no new release) |
| **SGLang**    | 58          | 93       | `qwen38flashnext` (dev image) | Unstable (critical bugs) |
| **llama.cpp** | 89          | 114      | None           | Active dev; config changes only |
| **Ollama**    | 38          | 45       | v0.33.2-rc1    | RC — dark mode & catalog fixes |
| **LiteLLM**   | 22          | 67       | None           | Feature-focused; Rust migration |
| **Unsloth**   | 41          | 38       | v0.1.804-beta  | Beta — high RAM use, AMD issues |

> ✅ *Insight:* **llama.cpp** leads in open issue volume due to broad hardware support and speculative decoding instability. **SGLang** shows highest risk with 3 critical bugs in its flagship `qwen38flashnext` build. **Unsloth** stands out with a stable beta release despite significant AMD/GPU crashes.

---

### **3. Model Support Race**

| Model / Architecture         | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|------------------------------|------|--------|-----------|--------|---------|---------|
| **Qwen3.8-Flash-Next (qwen4exp)** | ✅ (SM120/SM121) | 🚨 Critical bugs (issue #36716) | ✅ Full GGUF + MTP draft support | ✅ Protected quantization | ❌ Under dev | ✅ Full local support |
| **GLM-5.3-Flash**             | ✅ (partial ROCm) | 🟡 Fragile (silent corruption) | ✅ Text-only + KDA attention | ⚠️ In development (`glm-5.3-flash:cloud`) | ❌ Pending | ✅ Full GGUF support |
| **DeepSeek-V4-Flash (SM_80)** | ✅ Fixed (PR #54008) | ❌ No support | ❌ Not yet supported | ❌ No support | ❌ No support | ❌ No support |
| **Nemotron3.5-Lightning (DSpark)** | ❌ No support | ❌ No support | ✅ DSpark + NVFP4 (+23%) | ❌ No support | ❌ No support | ❌ No support |
| **Gemma 4 (Vision/Audio)**     | ❌ No support | ❌ No support | ❌ No support | ✅ MLX vision/audio | ❌ No support | ❌ No support |

> 🏆 **Winner**: **Unsloth** leads in **local model availability**, especially for Qwen3.8-Flash-Next and GLM-5.3-Flash.  
> 🥈 **Runner-up**: **llama.cpp** delivers fastest **GGUF ecosystem coverage**, enabling early adoption across platforms.  
> ⚠️ **Caution**: **SGLang**’s `qwen38flashnext` image is currently **unreliable** for production use despite full feature claims.

---

### **4. Performance Frontier**

| Optimization Focus         | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------------------------|------|--------|-----------|--------|---------|---------|
| **KV Cache Efficiency**     | ✅ PCP+DP, direct SymmetricMemory writes | ❌ DFlash2 state corruption | ⚠️ KV restore failure | ⚠️ Prefill cache experimental | ⚠️ Streaming rate-limiting | ⚠️ Auto compaction triggers too early |
| **Batching & Parallelism**  | ✅ PCP + DP, expert-parallel MoE | ✅ MoonEP, DCP | ⚠️ Draft-MTP crashes | ❌ Limited batching | ✅ Auto-router cost optimization | ⚠️ RAG CPU underutilization |
| **Quantization & Offload**  | ✅ HiSparse, NVFP4, MXFP4 | ✅ FP4/NVFP4 correctness issues | ✅ I-quant regression (4–6x slower) | ✅ MXFP8 + BF16 protection | ❌ No native support | ✅ 5x faster RAM offloading |
| **Distributed Serving**     | ✅ Multi-node DSpark, shard-aware precomputation | ❌ No multi-node focus | ❌ No distributed training | ❌ No cluster scaling | ✅ Enterprise OIDC auth | ❌ No distributed support |
| **Kernel-Level Optimizations** | ✅ Fused kernels, `fused_gdn_decode_post_conv_mtp` | ✅ Triton compile failures | ✅ Speculative Prefill (ICML 2025) | ⚠️ CUDA Flash Attention bug | ✅ Rust migration (sub-1ms overhead) | ⚠️ AMD PyTorch GPU visibility issues |

> 🔥 **Top Focus Areas**:  
> - **vLLM** dominates **distributed inference** and **kernel fusion**.  
> - **Unsloth** leads in **RAM-based offloading** and **local performance**.  
> - **LiteLLM** is pioneering **gateway performance** via **Rust migration**.  
> - **llama.cpp** is pushing **speculative decoding** and **multi-backend support**.

---

### **5. Layer Positioning**

| Project       | Primary Layer                     | Key Differentiator |
|---------------|-----------------------------------|--------------------|
| **vLLM**      | **Inference Engine (GPU-optimized)** | Production-grade, multi-node, PCP/DP integration |
| **SGLang**    | **High-Performance Serving Framework** | Experimental features, next-gen hardware testing, strong tooling focus |
| **llama.cpp** | **Local Runtime & Cross-Platform Engine** | Universal GGUF support, low-level control, hardware agnostic |
| **Ollama**    | **Developer-Focused Local Gateway** | Apple Silicon-first UX, agent-ready, integrated model catalog |
| **LiteLLM**   | **AI Gateway & Routing Layer** | Enterprise security, cost control, multi-provider orchestration |
| **Unsloth**   | **High-Speed Local Runtime (RAM Offload)** | Ultra-fast inference via smart RAM offloading, minimal dependencies |

> 📊 **Positioning Summary**:  
> - **Engine Layer**: vLLM, SGLang, llama.cpp  
> - **Runtime Layer**: Unsloth, llama.cpp  
> - **Gateway Layer**: LiteLLM  
> - **Application Layer**: Ollama  

> 🧩 **Hybrid Trend**: Projects like **Unsloth** and **Ollama** blur the line between runtime and gateway, offering local inference with API compatibility.

---

### **6. Trend Signals**

#### **Key Industry Trends Extracted from Today’s Activity**:
1. **Hardware-Specific Optimization Is Now Table-Stakes**  
   → Every project now has SM120/SM121, RTX 5090, or Blackwell-specific patches. Success depends on **early hardware alignment**, not just model support.

2. **Correctness Over Features**  
   → Multiple critical regressions (SGLang silent garbage decode, vLLM hangs, llama.cpp repeated tokens) show that **feature velocity is outpacing stability**. Developers must validate outputs rigorously.

3. **RAM Offloading Is the New Frontier for Local Inference**  
   → Unsloth’s 5x speedup via RAM offloading signals a shift toward **hybrid CPU-RAM-GPU inference**, especially for large MoE models on consumer hardware.

4. **Distributed Serving Is Still Fragile at Scale**  
   → vLLM’s multi-node hang in v0.28.0 and SGLang’s DFlash2 corruption highlight that **scaling beyond 1 node remains a high-risk path** without extensive testing.

5. **Rust Migration = Future Performance Threshold**  
   → LiteLLM’s sub-1ms overhead goal via Rust migration indicates that **low-latency gateways will soon dominate enterprise inference pipelines**.

#### **What Application Developers Should Watch**:
- ✅ **Avoid `qwen38flashnext` on DGX Spark (SGLang)** until #36716 is fixed.
- ✅ **Use `v0.27.1` over `v0.28.0` for vLLM multi-node deployments**.
- ✅ **Enable `OLLAMA_PREFILL_CACHE=1`** for reduced latency on repeated prompts.
- ✅ **Monitor Rust migration in LiteLLM** — expect major performance uplifts in late 2026.
- ✅ **Prepare for hybrid RAM-offloaded inference** via Unsloth or llama.cpp’s MoE DMA proposals.

> 🎯 **Final Takeaway**: The AI infrastructure stack is maturing rapidly—but **stability, correctness, and cross-platform consistency remain the top hurdles**. Choose tools based on **proven stability**, not just cutting-edge features.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest — 2026-08-28

---

### **1. Today's Highlights**  
The vLLM project is advancing deep hardware-specific optimizations for next-gen GPUs, with critical fixes for DeepSeek-V4-Flash on SM_80 (A100/A800) and emerging support for RTX 5090 (SM120) via nvfp4 KV cache integration. A major stability regression in v0.28.0—causing hangs during multi-node startup with DeepSeek-V4-Pro—is actively being addressed, highlighting the complexity of distributed inference at scale.

---

### **2. Releases & Breaking Changes**  
None reported in the last 24 hours. No new releases or breaking API/config changes were published.

---

### **3. New Model & Hardware Support**  
- ✅ **RTX 5090 (SM120)**: Experimental `nvfp4` KV cache support now active (PR #49011), enabling up to 245K context on a single 32GB card using Qwen3.6-27B-NVFP4.
- ✅ **DeepSeek-V4-Flash (SM_80)**: Fix merged for A100/A800 compatibility (PR #54008); previously failed due to `fused_gdn_decode_post_conv_mtp` build failure.
- 🟡 **ROCm (gfx950/gfx942)**: Partial support for GLM-5.3-Flash and Kimi-K3 remains fragile; silent corruption observed in long-context prefill (Issue #53943, #52442).
- 🔧 **Multi-node DSpark**: PRs (#54036, #53592) enable shard-aware context-KV precomputation across PCP ranks for DeepSeek-V4, improving scalability.

> [Issue #40851](https://github.com/vllm-project/vllm/issues/40851) | [PR #54008](https://github.com/vllm-project/vllm/pull/54008) | [PR #54036](https://github.com/vllm-project/vllm/pull/54036)

---

### **4. Performance & Optimization**  
- ⚙️ **PCP + DP Integration**: PR #54131 enables Prefill Context Parallelism (PCP) with Data Parallelism (DP), including expert-parallel MoE execution—critical for scaling large models across nodes.
- 💥 **HiSparse Optimization**: PR #53592 adds native HiSparse support for DeepSeek-V4 C4 sparse MLA, reducing memory footprint while preserving split FP8 value/scale layout during host backup.
- 📈 **KV Cache Efficiency**: PR #52863 introduces direct PyTorch SymmetricMemory writes to skip AllGather in PCP paths (opt-in via `VLLM_USE_PCP_DIRECT_KV=1`), reducing communication overhead.
- 🚀 **Speculative Decoding**: PR #54127 fixes breakable CUDA graph handling—now only intercepting `PIECEWISE` dispatches, restoring full graph efficiency for `FULL_AND_PIECEWISE`.

> [PR #54131](https://github.com/vllm-project/vllm/pull/54131) | [PR #53592](https://github.com/vllm-project/vllm/pull/53592) | [PR #52863](https://github.com/vllm-project/vllm/pull/52863)

---

### **5. Stability & Regressions**  
| Severity | Issue | Description | Fix Status |
|--------|-------|-------------|------------|
| Critical | [#53894](https://github.com/vllm-project/vllm/issues/53894) | v0.28.0 hangs indefinitely on 2-node × 16 H100 setup with DeepSeek-V4-Pro | ❌ Open, regression from v0.25.0 |
| High | [#51921](https://github.com/vllm-project/vllm/issues/51921) | v0.27.0 stalls after ~1 min idle on 4-node TP=4 (aarch64, GB10) due to shm_broadcast writer starvation | ❌ Open, no fix yet |
| High | [#53960](https://github.com/vllm-project/vllm/issues/53960) | `VLLM_PLE_CPU_OFFLOAD=1` deadlocks at kernel warmup on single GPU (TP=1) | ❌ Open |
| Medium | [#52109](https://github.com/vllm-project/vllm/issues/52109) | ROCm silently corrupts DeepSeek-V4-Flash outputs ≥4k tokens | ❌ Open |
| Medium | [#51869](https://github.com/vllm-project/vllm/issues/51869) | Qwen3.x GDN lacks varlen support under DSpark | ❌ Open |

---

### **6. What This Means for Application Developers**  
- **Avoid v0.28.0** for production multi-node deployments involving DeepSeek-V4-Pro—use v0.27.1 or earlier until [#53894](https://github.com/vllm-project/vllm/issues/53894) is resolved.
- **Leverage NVFP4 on RTX 5090** for ultra-long context (245K+) serving with Qwen3.6-27B-NVFP4—enable via `--kv-cache-dtype nvfp4`.
- **Enable PCP+DP** for high-throughput inference across clusters; use `VLLM_USE_PCP_DIRECT_KV=1` to reduce inter-GPU traffic.
- **Watch for silent correctness bugs** in ROCm builds (GLM/Kimi-K3) and ensure model output validation, especially with long prompts.
- **Prepare for future DSpark+PCP** integrations—expect improved throughput and reduced TTFT for long-context models.

> 👉 Pro tip: Use `--disable-cuda-graph` temporarily if encountering hangs with `cudagraph_mode=FULL_AND_PIECEWISE` on SM12.x (GB10).

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-08-28**

---

### **1. Today's Highlights**  
The SGLang ecosystem continues to prioritize stability and performance on next-generation hardware, with critical fixes for Qwen3.8-Flash-Next on Blackwell (SM120/SM121) and Kimi-K3 speculative decoding paths. A major focus is on resolving latent correctness issues in FP4/NVFP4 quantization and DFlash2 state corruption under concurrency—key hurdles for production-grade LLM serving.

---

### **2. Releases & Breaking Changes**  
*None reported in the last 24 hours.*  
No new releases or breaking API/config changes were published. The latest stable image (`lmsysorg/sglang:qwen38flashnext`) remains under active scrutiny due to multiple unresolved bugs on DGX Spark (GB10, SM121).

---

### **3. New Model & Hardware Support**  
- **Qwen3.8-Flash-Next**: Now under intensive testing across SM120 (RTX PRO 6000 Blackwell) and SM121 (DGX Spark), though several kernel paths remain non-functional.
- **Kimi-K3**: Active integration of MoonEP (static-shape dispatch + dynamic redundant experts) and DCP (Dynamic Chunked Prefill) support on multi-GPU systems.
- **AMD ROCm 7.2.0**: Triton compilation failure in `store_cache_4d` kernel identified; requires fix for full ROCm compatibility.
- **Ascend 950 (Atlas A5)**: PR #33030 adds backend paths for DeepSeek-V4, including MXFP4/MXFP8 quantized operators and DSV4 attention metadata.
- **Apple Silicon (MLX)**: RFC #32321 outlines a redesign for Torch-owned SRT path with exported MLX model regions—future roadmap for native Apple silicon inference.

> 🔗 [Qwen3.8-Flash-Next on SM121](https://github.com/sgl-project/sglang/issues/36716) | [Ascend 950 Backend](https://github.com/sgl-project/sglang/pull/33030) | [Apple Silicon RFC](https://github.com/sgl-project/sglang/issues/32321)

---

### **4. Performance & Optimization**  
- **I-quant GGUF**: Severe performance regression detected—prefill up to **4–6x slower than llama.cpp** due to missing MMQ kernel fallback. High-priority fix underway (#35019).
- **Qwen3.5 GDN**: Optimizations landed via #36267 to eliminate redundant QKV layout copies during prefill, reducing data movement overhead at long context lengths.
- **Qwen3.5 EAGLE**: PR #34005 introduces top-k1 optimization by pruning LM-head computation when softmax output doesn’t affect token selection—reduces memory traffic without accuracy loss.
- **Diffusion Models**: PR #36680 fuses small Qwen-Image TP collectives into single custom-all-reduce kernels, improving bandwidth utilization in multi-GPU setups.

> 🔗 [I-quant Performance Fix](https://github.com/sgl-project/sglang/issues/35019) | [GDN Layout Optimization](https://github.com/sgl-project/sglang/pull/36267) | [EAGLE Top-k1 Pruning](https://github.com/sgl-project/sglang/pull/34005)

---

### **5. Stability & Regressions**  
| Severity | Issue | Summary | Status |
|--------|------|--------|--------|
| 🚨 Critical | [#36716](https://github.com/sgl-project/sglang/issues/36716) | Four distinct failures on `qwen38flashnext` image (SM121): silent garbage decode, TMA-O varlen boot crash, non-compacting `_compact_kv`, FP8 `tl.dot` in sparse prefill | Open |
| 🚨 Critical | [#36558](https://github.com/sgl-project/sglang/issues/36558) | QSA decode has no working kernel path on SM121 (GB10); blocked by TRTLLM arch gate and missing FA2 kernels | Open |
| 🚨 Critical | [#36548](https://github.com/sgl-project/sglang/issues/36548) | DFlash2 state corruption under concurrent requests — leads to memory inconsistency and potential crashes | Open |
| 🟡 High | [#36599](https://github.com/sgl-project/sglang/issues/36599) | `deepseek_nextn.py` hardcodes `quant_config=None` for `modelopt_fp4`, breaking quantized draft generation | Open |
| 🟡 High | [#36596](https://github.com/sgl-project/sglang/issues/36596) | `ModelOptFp4Config.is_layer_excluded` fails to match fused/module-prefixed names → crashes on mixed-precision NVFP4 checkpoints | Open |

> ✅ *Fixes in progress:* PRs addressing SWA KV pool leaks (#36637), tool schema resolution (#36626), and GDN QKV materialization (#33778) are being reviewed.

---

### **6. What This Means for Application Developers**  
- **Avoid `qwen38flashnext` on DGX Spark (GB10, SM121)** until issue #36716 is resolved—expect silent garbage outputs and crashes.
- Use `--kv-cache-dtype fp8_e4m3` cautiously with Qwen3.8-Flash-Next: it triggers dtype mismatch asserts unless QSA path is patched (#36545).
- For **mixed-precision NVFP4 models (e.g., GLM-5.3-Flash)**, ensure `is_layer_excluded` logic is correctly configured—current parser will crash otherwise (#36596).
- **Tool call parsing** may fail on complex JSON schemas using `oneOf`/`anyOf` unless updated via PR #36626.
- Consider upgrading to `v0.5.17.dev36` only if you’re aware of known drift in greedy outputs vs v0.5.12 (#36480).

> 💡 *Pro Tip:* Monitor CI status via #17050 for real-time visibility into test reliability. Use Slack ([slack.sglang.ai](https://slack.sglang.ai)) for urgent support on production failures.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-08-28**

---

### **1. Today's Highlights**  
The latest updates focus on expanding support for next-generation models like *Qwen3.8-Flash-Next (qwen4exp)* and *Nemotron3.5-DSpark*, alongside critical backend improvements for Hexagon (HTP) and Vulkan. New optimizations in speculative decoding and unified KV cache management signal growing maturity in high-throughput, low-latency inference workflows.

---

### **2. Releases & Breaking Changes**  
No new stable release was published today. However, the following **configurable behavior changes** were introduced:  
- `--kv-unified-per-slot`: Replaces `--ctx-pool-slots` with a per-slot context allocation model, enabling finer-grained control over memory usage in server deployments ([#24124](https://github.com/ggml-org/llama.cpp/pull/24124)).  
- `--tensor-read-lazy` now takes precedence over `--load-mode`, ensuring lazy-loading via mmap regardless of load strategy ([#27794](https://github.com/ggml-org/llama.cpp/pull/27794), [PR #27837](https://github.com/ggml-org/llama.cpp/pull/27837)).

> ✅ **Migration Note**: Existing scripts using `--ctx-pool-slots` should switch to `--kv-unified-per-slot` for consistent slot-based context handling.

---

### **3. New Model & Hardware Support**  
- **Model Architecture Support Added**:  
  - `qwen4exp` (Qwen3.8-Flash-Next): Full GGUF converter, text graph, sparse attention, vision, and MTP draft head support ([#27742](https://github.com/ggml-org/llama.cpp/pull/27742), [#27836](https://github.com/ggml-org/llama.cpp/pull/27836)).  
  - `glm5next` (GLM-5.3-Flash): Text-only support added; includes KDA linear attention and hybrid structure ([#27752](https://github.com/ggml-org/llama.cpp/pull/27752), [#27773](https://github.com/ggml-org/llama.cpp/pull/27773)).  
  - DSpark support for *Nemotron3.5-Lightning* (NVFP4 variant) with performance gains up to **+23% speed** vs baseline ([#27804](https://github.com/ggml-org/llama.cpp/pull/27804)).

- **Hardware Backend Enhancements**:  
  - **Hexagon HTP**: Added HVX-accelerated `ABS` and `LOG` unary ops ([#27786](https://github.com/ggml-org/llama.cpp/pull/27786)), improving CPU-side inference on Apple Silicon.  
  - **ROCm/HIP**: Enabled AllReduce for multi-GPU training scenarios ([#27825](https://github.com/ggml-org/llama.cpp/pull/27825)); HIP runtime DLLs now bundled with Windows ROCm releases ([#26973](https://github.com/ggml-org/llama.cpp/pull/26973)).  
  - **Vulkan**: Fused `UNARY(GELU|SIGMOID|SILU|SOFTPLUS) + MUL` operations for improved kernel efficiency ([#27220](https://github.com/ggml-org/llama.cpp/pull/27220)).

---

### **4. Performance & Optimization**  
- **Speculative Decoding**:  
  - Introduced **Speculative Prefill** based on ICML 2025 paper (*"Speculative Prefill: Turbocharging TTFT..."*) — reduces time-to-first-token by estimating token importance without training ([#27692](https://github.com/ggml-org/llama.cpp/pull/27692)).  
- **Memory & Kernel Efficiency**:  
  - Quantization now caps working memory to prevent RAM overflow during large tensor loading ([#27795](https://github.com/ggml-org/llama.cpp/pull/27795)).  
  - Row-chunk streaming during quantization prevents thread starvation in high-core-count environments ([#27830](https://github.com/ggml-org/llama.cpp/pull/27830)).  
- **MoE Offloading**:  
  - Feature request (#26448) proposes PCIe DMA direct access to MoE expert weights from host RAM — could enable 23GB MoE models on 1.6GB VRAM GPUs.

---

### **5. Stability & Regressions**  
Critical issues reported today include:  
- **CUDA Flash Attention Bug** (Issue #26509): DeepSeek-V4 emits repeated `<` tokens when prompt exceeds one forward pass — reproducible on CUDA but not CPU. No fix PR yet.  
- **SYCL Crash on Dual Arc Pro B70** (Issue #27198): `dev2dev_memcpy` fails with `DEVICE_LOST` despite P2P working — likely due to improper memory mapping or context transfer.  
- **Vulkan DeviceLost During Prompt** (Issue #27306): AMD RADV crashes mid-prompt (`decode() failed: vk::Queue::submit: ErrorDeviceLost`) under `--spec-type draft-mtp`.  
- **KV Cache Restore Failure** (Issue #27813): `POST /slots/{id}?action=restore` reports success but fails to reuse prefix on hybrid/recurrent models — context checkpoints are not persisted.  
- **DRAFT-MTP Crash on Low `--n-cpu-moe`** (Issue #27717): Crashes with "invalid vector subscript" when offloading MoE layers below threshold.

> ⚠️ **High Priority**: Multiple regressions in speculative decoding, MoE offloading, and GPU backends suggest instability in advanced inference paths.

---

### **6. What This Means for Application Developers**  
- **Build robust agents**: Use `--kv-unified-per-slot` and `--tensor-read-lazy` to manage context and memory efficiently across long-running sessions.  
- **Leverage new models early**: Deploy `qwen4exp` and `glm5next` with full speculatively-generated drafts enabled via `--spec-type draft-mtp` for faster response times.  
- **Avoid unstable paths**: Do not rely on `draft-mtp` with `--n-cpu-moe` below threshold or on AMD Vulkan until fixes land.  
- **Optimize MoE workloads**: Monitor progress on PCIe DMA offloading (#26448) for ultra-large MoE models on constrained hardware.  
- **Test on diverse backends**: Given active Vulkan/Metal/SYCL bugs, validate your app’s stability across platforms before production deployment.

> 🔗 For real-time tracking: [GitHub Issues](https://github.com/ggml-org/llama.cpp/issues) | [Pull Requests](https://github.com/ggml-org/llama.cpp/pulls) | [Official Website](https://llama.app)

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-08-28**

---

### **1. Today's Highlights**  
The latest release candidate `v0.33.2-rc1` introduces critical fixes for macOS dark mode and model catalog stability during proxy operations. Key developments include enhanced MLX engine support for *Gemma 4* vision/audio inputs and improved quantization safeguards for Qwen3.8 Flash Next, signaling strong momentum in Apple Silicon and multi-modal inference capabilities.

---

### **2. Releases & Breaking Changes**  
- **`v0.33.2-rc1`** (GitHub: [#18049](https://github.com/ollama/ollama/pull/18049), [#18058](https://github.com/ollama/ollama/pull/18058))  
  - Restores system-wide dark mode on macOS and Windows (fixes #18008, #18068).  
  - Ensures continuous request handling when the model catalog updates (e.g., during cloud sync).  
  - *Note:* The desktop app still fails to launch its built-in server silently on Windows (`#18061`) — manual `ollama serve` is required.

---

### **3. New Model & Hardware Support**  
- **MLX Engine Enhancements**:  
  - Full image and audio input support for **Gemma 4 (12B)** via MLX (`#18079`). Covers both transformer tower and encoder-free embedder variants.  
  - Added support for **Qwen3.8 Flash Next** with protected quantization quality (`#18078`): preserves BF16 precision in key projections, uses MXFP8 elsewhere, avoids NVFP4 degradation in long generations.  
- **New Models Requested**:  
  - `qwen3.8-flash-next` (cloud and local) requested by users (`#18071`, `#18075`).  
  - `glm-5.3-flash:cloud` and `glm-5.3:cloud` under active development (`#17741`, `#18069`).

---

### **4. Performance & Optimization**  
- **MLX Optimizations**:  
  - `mlxrunner`: Adds load progress reporting and stall detection (`#17834`) to prevent premature timeouts on slow loads.  
  - `mlxc`: Version bump to latest revisions (`#18080`), enabling upstream bug fixes and performance improvements.  
- **CUDA Fixes**:  
  - Forces `fp32 cuBLAS accumulation` for `qwen2.5-vl` runners to eliminate deterministic garbage decoding (`#18070`).  
- **Memory & Cache**:  
  - Experimental prefill/KV cache persistence across runner reloads (`OLLAMA_PREFILL_CACHE=1`) now available (`#17953`). Reduces redundant prefill computation on model reloads.

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Impact | Fix PR |
|---------|------|--------|--------|--------|
| Critical | `gemma4:12b` hangs, slow generation (>8 min), OOM on Apple Silicon | Open (`#16562`) | Blocks usability of popular model | Pending |
| High | Granite 4.2 models (3B/8B) trigger OOM due to incorrect context length (131k) override | Open (`#18074`) | Immediate crashes on consumer hardware | Pending |
| High | `glm-5.3-flash:cloud` enters infinite token repetition ("lock") during reasoning | Open (`#18069`) | Requests hang indefinitely | Pending |
| Medium | Agent integrations hang with local Qwen models on macOS despite working API | Closed (`#17839`) | Affects agent tooling workflows | Fixed in RC |
| Medium | Vision support broken in MLX after v0.32.15 (`#18076`) | Open | Blocks image input on Apple silicon | Pending |
| Low | `minimax-m3:cloud` splits JSON output between `.reasoning` and `.content` | Open (`#17987`) | Breaks parsing in client apps | Pending |

---

### **6. What This Means for Application Developers**  
- **For agents & tooling**: Avoid `gemma4:12b` and `glm-5.3-flash:cloud` until fixes land—both exhibit severe reliability issues. Use `qwen3.5:2b` or `llama3.2:3b` as stable alternatives on macOS.  
- **For vision applications**: Ensure you're on `v0.33.2-rc1` or later; `gemma4` image/audio support is now functional on MLX.  
- **For cloud deployments**: Be cautious with `granite4.2:8b/3b`—set `--num-gpu-layers` explicitly to avoid OOM. Consider using `context_length=4096` overrides if supported.  
- **For performance-sensitive workloads**: Enable `OLLAMA_PREFILL_CACHE=1` to reduce latency on repeated prompts. Monitor CPU usage—recent regressions observed in `llama-server` (see `#18038`).  
- **For developers building custom models**: Validate quantization types before upload (`#18083`) to catch errors early.

> 🔗 **Key Resources**:  
> - [Release Notes: v0.33.2-rc1](https://github.com/ollama/ollama/releases/tag/v0.33.2-rc1)  
> - [MLX Vision Support: PR #18079](https://github.com/ollama/ollama/pull/18079)  
> - [Quantization Safeguards: PR #18078](https://github.com/ollama/ollama/pull/18078)

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-08-28**

---

### **1. Today’s Highlights**  
The LiteLLM project is advancing rapidly in both stability and feature depth, with critical fixes to PostgreSQL connection handling, Bedrock streaming reliability, and rate-limiting logic. A major focus remains on the **Rust migration initiative (Issue #31263)**, which aims to deliver sub-1ms overheads for inference serving — positioning LiteLLM as a high-performance AI gateway for production systems.

---

### **2. Releases & Breaking Changes**  
*No new releases in the past 24 hours.*  
However, several breaking changes are in progress:  
- `PATCH /management/v1/users/{user_id}` is being introduced to allow clearing user settings (PR #38599), replacing silent null drops in `POST /user/update`.  
- The `enforce_fallback_model_access` flag (PR #38572) will soon be opt-in by default, improving security by ensuring fallback models respect calling key permissions.

> 🔗 [PR #38599](https://github.com/BerriAI/litellm/pull/38599) | [PR #38572](https://github.com/BerriAI/litellm/pull/38572)

---

### **3. New Model & Hardware Support**  
- **Vertex AI RAG Engine** support is being added as a first-class vector store provider for `/rag/ingest` and `/vector_stores/search` (Issue #36285).  
- **QwenCloud** integration is under active development via an official migration path from the existing DashScope provider (Issue #36150).  
- **OpenAI Workload Identity Federation (OIDC token exchange)** is now being supported via PR #31649, enabling secure identity-based auth for enterprise deployments.

> 🔗 [Issue #36285](https://github.com/BerriAI/litellm/issues/36285) | [Issue #36150](https://github.com/BerriAI/litellm/issues/36150) | [PR #31649](https://github.com/BerriAI/litellm/pull/31649)

---

### **4. Performance & Optimization**  
- **Rust Migration (Issue #31263)** is progressing toward sub-1ms overheads, targeting the fastest possible inference gateway. Early beta access available via [Google Form](https://docs.google.com/forms/d/e/1FAIpQLSecWdOjkzjEson2UiZpD...).  
- **Rate-limiting improvements**: RPM and TPM counters now use independent time windows (PR #38523), eliminating false 429s at window boundaries.  
- **Auto-router optimizations**: Client housekeeping calls (e.g., title generation) are now routed to the cheapest tier (PR #38598), reducing cost without sacrificing performance.

> 🔗 [Issue #31263](https://github.com/BerriAI/litellm/issues/31263) | [PR #38523](https://github.com/BerriAI/litellm/pull/38523) | [PR #38598](https://github.com/BerriAI/litellm/pull/38598)

---

### **5. Stability & Regressions**  
Critical issues reported today include:  
1. **Bedrock Realtime Streaming Crashes** (`x-amzn-RequestId` missing from headers) — affects monitoring and debugging (Issue #38357).  
   → *Fix in progress*: PR #38597 surfaces raw response headers correctly.  
2. **Streaming Error Handler Crashes** due to missing `completed_response` attribute — masks original errors (Issue #38511).  
   → *Fix in progress*: PR #38606 ensures mid-stream errors trigger proper SSE error events.  
3. **PostgreSQL Idle Connection Drops** on AWS RDS due to missing `max_idle_connection_lifetime` (Issue #22289).  
   → *Resolved*: PR #38600 sets default lifetime to prevent stale connections.

> 🔗 [Issue #38357](https://github.com/BerriAI/litellm/issues/38357) | [PR #38597](https://github.com/BerriAI/litellm/pull/38597) | [PR #38606](https://github.com/BerriAI/litellm/pull/38606) | [PR #38600](https://github.com/BerriAI/litellm/pull/38600)

---

### **6. What This Means for Application Developers**  
- **Security & Compliance**: Enable `enforce_fallback_model_access` to prevent unauthorized model access during fallbacks. Use `LITELLM_ENFORCE_SAFETY_IDENTIFIER=TRUE` to enforce immutable `user_id` tracking (Issue #14505).  
- **Cost Control**: Avoid zero-cost model blocks after budget exhaustion (Issue #38515); ensure `budget_duration` resets spend properly (Issue #34492).  
- **Reliability**: Update to latest proxy versions to benefit from improved stream error handling and connection resilience.  
- **Future-Proofing**: Prepare for Rust-based deployment (early beta available) and expect enhanced auto-routing capabilities with custom tier definitions (PRs #38602, #38603).

> 🚀 *Recommended actions*: Test `PATCH /management/v1/users/{user_id}` for configuration clarity; validate Bedrock streaming behavior post-PR #38597; monitor the Rust migration roadmap for performance gains.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

---

### **Unsloth Digest — 2026-08-28**

#### **1. Today's Highlights**  
The latest `v0.1.804-beta` release brings full local support for **Qwen3.8-Flash-Next** and **GLM-5.3-Flash**, with up to **5x faster inference via RAM offloading** and "infinite" repeated compaction now functional. Critical stability fixes address AMD GPU crashes in Qwen3.8-27B V3 GGUFs and improve offload planner efficiency on consumer hardware.

#### **2. Releases & Breaking Changes**  
- **v0.1.804-beta**: Officially supports `unsloth/Qwen3.8-Flash-Next-GGUF` and `unsloth/GLM-5.3-Flash-GGUF`. Requires **75GB RAM** (Qwen) or **102GB+ VRAM/RAM** (GLM).  
  - *Migration note*: Users of `Qwen3.8-27B-GGUF` should avoid V3 builds due to AMD-specific crashes; roll back to `408fcc1807ab` (V2) if encountering issues.  
  - [GitHub Release v0.1.804-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.804-beta)

#### **3. New Model & Hardware Support**  
- ✅ **New Models**:  
  - `Qwen3.8-Flash-Next-GGUF` (Q4_K_XL, Q5_K_M) – fully supported locally.  
  - `GLM-5.3-Flash-GGUF` – available with dedicated RAM/VRAM requirements.  
  - [Issue #9811](https://github.com/unslothai/unsloth/issues/9811) confirms support post-v0.1.803-beta.  
- ✅ **Hardware Backends**:  
  - **AMD ROCm (gfx1201)**: Fixes for PyTorch GPU visibility (`#8620`, `#8886`) and AOTriton attention gate exposure (`#8821`).  
  - **Apple Silicon (arm64)**: Prebuilt binaries now link `librdma.dylib` correctly (fixes `#9874`).  
- ⚠️ **Pending**: Ascend NPU support requested (`#2171`), but no progress reported.

#### **4. Performance & Optimization**  
- **5x Faster Inference**: RAM offloading performance improved significantly via optimized memory layout and compaction logic.  
- **Smart Offload Planner Optimization**:  
  - Reported slower than `--fit on` on 40/43 cells on a 6-core desktop (`#9861`).  
  - PR `#9872` proposes smarter cost evaluation between spill overhead and llama.cpp’s internal fitter—pending review.  
- **RAG Indexing**: Sequential processing causes CPU/GPU underutilization (`#9869`) — proposed fix pending.  
- **Vision/Video Generation**: Still broken on AMD (`#9727`, `#9897`) — blocking user workflows.

#### **5. Stability & Regressions**  
| Severity | Issue | Status | Fix Progress |  
|---------|------|--------|--------------|  
| 🔴 High | **AMD Crash**: `Qwen3.8-27B-V3 GGUF` crashes after prefill on AMD gfx1151 (`#9792`) | Open | Roll back to V2 (`408fcc1807ab`) works |  
| 🔴 High | **Auto Compaction Trigger**: Fires at ~75% context regardless of VRAM/RAM (`#9671`) | Closed | No UI control yet; workaround: manual compaction |  
| 🟡 Medium | **Model Load Failure**: `qwen4exp` architecture unsupported by `llama.cpp` (`#9811`) | Closed | Use valid `qwen` variants only |  
| 🟡 Medium | **Desktop App Crashes**: macOS display wake cancels long generations (`#8911`) | Open | Unrecoverable blank response after wake |  
| 🟡 Medium | **Tool Call Grammar Error**: `Qwen3.8-Flash-Next-GGUF` fails to compile tool grammar (`#9888`) | Open | Likely config/quant mismatch |  

#### **6. What This Means for Application Developers**  
- **Local LLM Serving**: `v0.1.804-beta` enables high-throughput, low-latency inference for **Qwen3.8-Flash-Next** and **GLM-5.3-Flash** on local machines — ideal for agent pipelines with persistent state.  
- **Cross-Platform Reliability**: AMD users must **avoid Qwen3.8-27B-V3 GGUF** and stick to V2; expect frequent updates to ROCm compatibility.  
- **API Design**: Use `/v1/models` to list image/video models (PR `#9892`) and `/v1/videos` for video generation (PR `#9891`) — now OpenAI-compatible.  
- **Memory Management**: Auto compaction is aggressive (~75% threshold); consider disabling or tuning via future UI controls (`#9671`).  
- **DevOps Note**: Keyless API access may not work (`#9846`); ensure environment variables are properly set when using CLI tools.  

> 💡 **Pro Tip**: For AMD users, monitor `#9874` and `#8620` for stable ROCm integration. For production agents, use `--fit on` instead of smart planner until `#9872` lands.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*