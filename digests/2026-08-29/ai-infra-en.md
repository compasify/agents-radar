# AI Infrastructure Digest 2026-08-29

> Generated: 2026-08-29 03:50 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-08-29**

---

### **1. Ecosystem Overview**  
The AI inference infrastructure landscape in August 2026 is defined by rapid convergence on next-generation models (Qwen3.8-Flash-Next, GLM-5.3-Flash, Gemma4) and hardware (NVIDIA GB10/Blackwell, AMD gfx1250/gfx1151). While performance optimization remains central, stability challenges—especially around speculative decoding, multi-GPU coordination, and GPU backend correctness—are now the primary bottlenecks to production adoption. The ecosystem is bifurcating: high-performance serving engines (vLLM, SGLang) are pushing boundaries in throughput and low-latency inference, while developer-facing platforms (Ollama, LiteLLM, Unsloth) focus on usability, agent tooling, and security—often at the cost of underlying reliability.

---

### **2. Activity Comparison**

| Project       | Issues Open (High/Critical) | PRs Merged (Last 24h) | Releases (Latest) |
|---------------|-----------------------------|------------------------|-------------------|
| **vLLM**      | 7 (4 critical)              | 8                      | None              |
| **SGLang**    | 6 (3 critical)              | 6                      | None              |
| **llama.cpp** | 6 (2 critical)              | 8                      | `b10679`, `b10678` |
| **Ollama**    | 9 (3 high)                  | 2                      | v0.33.1 (unstable)|
| **LiteLLM**   | 5 (1 critical)              | 5                      | v1.100.0-dev.2    |
| **Unsloth**   | 6 (2 high)                  | 4                      | None              |

> ✅ *vLLM and llama.cpp lead in technical activity; Ollama’s latest release is a known risk zone.*

---

### **3. Model Support Race**

| Model / Architecture       | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------------------------|------|--------|-----------|--------|---------|---------|
| **Qwen3.8-Flash-Next**     | ✅ (SM12.x, ROCm) | ✅ (AMD) | ✅ (CPU/Metal) | ⚠️ (no CUDA) | ✅ (pricing) | ✅ (TTS) |
| **GLM-5.3-Flash**          | ✅ (SM12.x, ROCm) | ⚠️ (path gaps) | ✅ (MoE + vision) | ❌ (ROCm corrupt) | ✅ (pricing) | ✅ (TTS) |
| **Gemma4**                 | ⚠️ (limited) | ⚠️ (long prompts) | ✅ (MLX/audio) | ✅ (vision/audio) | ✅ (OpenAI compat) | ✅ (TTS) |
| **Apple M4/M5 (Metal)**    | ⚠️ (Rust frontend) | ⚠️ (MLX path) | ✅ (fa-vec tuning) | ✅ (MLX engine) | — | ✅ (context compaction) |
| **AMD gfx1250 (ROCm 10)**  | ⚠️ (partial) | ✅ (experimental) | ⚠️ (corruption) | ❌ (output errors) | — | ⚠️ (loading fail) |
| **NVIDIA GB10 (SM12.x)**   | 🔴 (hangs) | 🔴 (crash >40k tokens) | ✅ (correct) | 🔴 (corrupt output) | — | — |

> 🏆 **Winner**: **llama.cpp** leads in cross-platform model support with robust CPU/GPU/MLX backends.  
> 📉 **Laggard**: **Ollama** lacks official CUDA support for Qwen3.8-Flash-Next despite working in llama.cpp builds.

---

### **4. Performance Frontier**

| Focus Area               | Leading Projects                     | Key Developments (Aug 29) |
|--------------------------|--------------------------------------|----------------------------|
| **KV Cache Efficiency**  | vLLM, SGLang, llama.cpp             | `async_tensor_h2d` pinning (vLLM), residency planning (SGLang), pinned embeddings (Unsloth) |
| **Batching & Throughput**| vLLM, SGLang                        | Adaptive DSpark (vLLM), unified memory handling (SGLang), tiled `mul_mat` (llama.cpp) |
| **Quantization**         | SGLang, llama.cpp                   | FP8 fusion (SGLang), MXFP4 validation (SGLang), `fa-vec` tuning (M4/M5) |
| **Distributed Serving**  | vLLM, SGLang                        | Ray executor deadlock (vLLM), unified memory exhaustion (SGLang) |
| **Kernel Optimization**  | vLLM, llama.cpp                     | FP16→NaN fix (vLLM), OOB access fix (Vulkan), GDN kernel fusion (SGLang) |

> 🔥 **Most Active**: **vLLM** and **SGLang** are investing heavily in speculative decoding and distributed scalability—despite instability risks.  
> 💡 **Emerging Edge**: **llama.cpp** dominates on low-level kernel optimizations for Apple Silicon and AMD.

---

### **5. Layer Positioning**

| Project       | Primary Layer             | Key Differentiators |
|---------------|-----------------------------|---------------------|
| **vLLM**      | **Serving Engine**          | High-throughput inference, CUDA graph, spec-decoding, enterprise-grade routing |
| **SGLang**    | **Serving Engine + Agent Framework** | Unified memory, long-prompt stability, agent-native execution (e.g., tool calling) |
| **llama.cpp** | **Local Runtime / Embedded** | Cross-platform portability, minimal dependencies, device-optimized kernels (Metal/Vulkan) |
| **Ollama**    | **Developer Gateway / CLI** | User-friendly UX, local-first deployment, MLX integration, agent launchers |
| **LiteLLM**   | **Gateway / Orchestration Layer** | Multi-provider routing, cost control, security hardening, observability |
| **Unsloth**   | **Agent Studio / UI Platform** | Visual agent builder, RAG, persistent state, TTS/voice support |

> 🧩 **Layer Clarity**: The ecosystem is maturing into distinct roles—engine (vLLM/SGLang), runtime (llama.cpp), gateway (LiteLLM), and agent studio (Unsloth)—with Ollama straddling gateway and local runtime.

---

### **6. Trend Signals**

#### 🔹 **Critical Trends Extracted from Today’s Digest**
1. **Hardware Fragmentation Is the New Bottleneck**: Despite model advances, GPU-specific bugs (GB10 hangs, gfx1151 corruption, ROCm failures) are blocking production rollouts—indicating that **hardware abstraction layers are still fragile**.
2. **Speculative Decoding Is Becoming Standard but Unstable**: All major projects (vLLM, SGLang, llama.cpp, Ollama) are enabling or enhancing speculative decoding—but with unresolved crashes and hangs, signaling it’s **not yet ready for high-stakes workloads**.
3. **Security & Observability Are Now Non-Negotiable**: LiteLLM’s image signing and `/metrics` PII exposure highlight that **enterprise-grade deployments demand verifiable integrity and data hygiene**.
4. **Agent Workflows Are Driving Innovation**: Tool calling, structured outputs, RAG, and TTS are no longer niche—they’re core features in Unsloth, SGLang, and Ollama, indicating **agent-centric design is the new standard**.

#### 🛠 **What Application Developers Should Watch**
- ✅ **Avoid v0.33.1 of Ollama**—it has memory leaks and forced CPU fallbacks.
- ✅ **Monitor ROCm on gfx1151/gfx1250**—multiple projects report silent corruption or crashes.
- ✅ **Do not assume speculative decoding is stable**—test thoroughly across vLLM, SGLang, and llama.cpp.
- ✅ **Use LiteLLM’s per-request budget caps** to prevent runaway costs in agent systems.
- ✅ **Prioritize llama.cpp or vLLM for production inference**—they offer better stability and feature maturity than Ollama or SGLang at this stage.

> 🎯 **Bottom Line**: The AI infrastructure stack is advancing fast—but **stability, hardware correctness, and security must be validated before scaling**. Choose your stack based on **production readiness**, not just feature parity.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-08-29**

---

### **1. Today's Highlights**  
The vLLM project continues to accelerate support for next-generation models and hardware, with key progress on **Qwen3.8-Flash-Next** and **GLM-5.3-Flash** model integration across NVIDIA and ROCm platforms. Critical stability fixes have landed for speculative decoding (DSpark, MTP) and CUDA graph capture on SM 12.x (GB10), addressing hangs that were blocking production deployments. The Rust frontend is maturing rapidly with new API parity features.

---

### **2. Releases & Breaking Changes**  
*None* — No new releases or breaking configuration changes reported in the last 24 hours.

---

### **3. New Model & Hardware Support**  
- ✅ **Qwen3.8-Flash-Next**: Full model support merged via [PR #53896](https://github.com/vllm-project/vllm/pull/53896), including prefix caching and speculative decoding (MTP).  
- ✅ **GLM-5.3-Flash (glm5_next)**: Added ROCm (gfx950) and SM120 (RTX PRO 6000 Blackwell) support, though several attention path gaps remain unresolved ([#53943](https://github.com/vllm-project/vllm/issues/53943), [#53963](https://github.com/vllm-project/vllm/issues/53963)).  
- ✅ **Rust Frontend**: Expanded feature parity with Python API — stop-string support added in `/inference/v1/generate` ([PR #51904](https://github.com/vllm-project/vllm/pull/51904)), now usable with `VLLM_USE_RUST_FRONTEND=1`.

---

### **4. Performance & Optimization**  
- ⚡ **Speculative Decoding Improvements**:  
  - Adaptive DSpark verification enabled for Qwen GDN ([PR #53929](https://github.com/vllm-project/vllm/pull/53929)) improves throughput under ragged batch conditions.  
  - Fixed over-aggressive kernel capture in `BreakableCUDAGraphWrapper`, now only intercepts `PIECEWISE` dispatches ([PR #54127](https://github.com/vllm-project/vllm/pull/54127)).  
- 🔧 **Kernel-Level Optimizations**:  
  - Prevented FP16 overflow → NaN in gated-delta-net (GDN) decode by preserving FP32 SSM state precision ([PR #54146](https://github.com/vllm-project/vllm/pull/54146)).  
  - Maintained packed GDN beta in FP32 to avoid BF16 rounding artifacts ([PR #53877](https://github.com/vllm-project/vllm/pull/53877)).  
- 📈 **KV Connector Efficiency**:  
  - `async_tensor_h2d` now pins `token_indices` before H2D transfers in HF3FS connector ([PR #54293](https://github.com/vllm-project/vllm/pull/54293)), reducing CPU-GPU sync overhead.

---

### **5. Stability & Regressions**  
- 🔴 **Critical Hangs on SM 12.x (GB10)**:  
  DeepSeek-V4-Flash hangs after ~6 requests with `cudagraph_mode=FULL_AND_PIECEWISE + chunked prefill` ([#40969](https://github.com/vllm-project/vllm/issues/40969)). No fix PR yet — high priority for inference teams using GB10.  
- 🔴 **Deadlock in Multi-node Ray Setup**:  
  2-node TP-16 deployment deadlocks during initialization due to `in_the_same_node_as()` gloo barrier ([#52907](https://github.com/vllm-project/vllm/issues/52907)). Fix pending in Ray executor revamp ([#35848](https://github.com/vllm-project/vllm/issues/35848)).  
- 🔴 **CPU Offload Deadlock**:  
  `VLLM_PLE_CPU_OFFLOAD=1` hangs permanently during engine init on single GPU (TP=1) with Qwen3.8-Flash-Next ([#53960](https://github.com/vllm-project/vllm/issues/53960)). Related to kernel warmup timing.  
- ⚠️ **Incorrect Logits in Async Scheduling**:  
  Stateful logits processors see `-1` placeholders due to incorrect `logitsprocs_need_output_token_ids` logic ([#52461](https://github.com/vllm-project/vllm/issues/52461)). Patch expected soon.

---

### **6. What This Means for Application Developers**  
- Use **Qwen3.8-Flash-Next** with confidence in production — full spec-decoding and prefix caching are now supported.  
- Avoid `cudagraph_mode=FULL_AND_PIECEWISE` on **NVIDIA GB10 (SM 12.x)** until [#40969](https://github.com/vllm-project/vllm/issues/40969) is resolved; consider `FULL_ONLY` or `NONE`.  
- For **multi-node setups**, delay Ray executor adoption until `RayExecutorV2` stabilizes — current version has known deadlock risks ([#52907](https://github.com/vllm-project/vllm/issues/52907)).  
- Leverage the **Rust frontend** for low-latency, high-throughput inference pipelines — it now supports stop strings and is ready for staging.  
- Monitor **GLM-5.3-Flash** on ROCm and SM120 carefully: critical path issues persist ([#53943](https://github.com/vllm-project/vllm/issues/53943), [#53963](https://github.com/vllm-project/vllm/issues/53963)) — use with caution in production.  

> 💡 *Pro Tip*: If building agents with tool calling (e.g., Gemma4), ensure you’re on a recent vLLM build — known validation bugs ([#39072](https://github.com/vllm-project/vllm/issues/39072)) have been reported but may be fixed in nightly builds.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-08-29**

---

### **1. Today's Highlights**  
The SGLang project continues to accelerate its support for advanced inference patterns and heterogeneous hardware, with critical work on AMD ROCm compatibility, long-prompt stability, and high-throughput optimizations. Key developments include a new PR enabling `gfx1250` support on ROCm 10, a fix for Qwen3.8-Flash-Next token ID 0 looping, and ongoing efforts to stabilize unified memory handling under extreme prefill lengths (40k+ tokens).

---

### **2. Releases & Breaking Changes**  
*None*  
No new releases were published in the last 24 hours. No breaking changes or migration notes are currently active.

---

### **3. New Model & Hardware Support**  
- **AMD ROCm 10 + gfx1250**: PR [#36871](https://github.com/sgl-project/sglang/pull/36871) adds experimental support for AMD’s `gfx1250` architecture on ROCm 10, expanding GPU coverage for DeepSeek and Qwen models.
- **Qwen3.8-Flash-Next (MXFP4)**: PR [#36919](https://github.com/sgl-project/sglang/pull/36919) introduces validated recipes for FP8 and Quark MXFP4 quantization on AMD, addressing prior validation gaps.
- **Apple Silicon (MLX/Torch integration)**: RFC [#32321](https://github.com/sgl-project/sglang/issues/32321) outlines a redesign for Apple Silicon serving using Torch-owned SRT paths and exported MLX model regions—critical for native M-series deployment.
- **Boogu-Image (T2I Diffusion)**: PR [#33182](https://github.com/sgl-project/sglang/pull/33182) adds full inference support for the 10B DiT-based Boogu-Image model, including Qwen3-VL-8B vision conditioning.

---

### **4. Performance & Optimization**  
- **FlashInfer Upgrade**: PR [#36954](https://github.com/sgl-project/sglang/pull/36954) bumps FlashInfer to v0.6.18, unlocking performance improvements in kernel fusion and memory management.
- **FP8 Quantization Fusion**: PR [#36501](https://github.com/sgl-project/sglang/pull/36501) fuses static FP8 quantization into FlashInfer’s allreduce path, reducing overhead in distributed training/inference pipelines.
- **GDN Kernel Optimization**: PR [#33778](https://github.com/sgl-project/sglang/pull/33778) eliminates redundant QKV tensor materialization during speculative decoding, improving throughput for GDN-based models.
- **Residency Planning**: PRs [#35335](https://github.com/sgl-project/sglang/pull/35335) and [#36703](https://github.com/sgl-project/sglang/pull/36703) enhance auto-residency promotion and planning in diffusion workflows, reducing H2D transfers and improving load balancing.

---

### **5. Stability & Regressions**  
- **Critical Crash**: Issue [#36941](https://github.com/sgl-project/sglang/issues/36941) reports that long prefills (>40k tokens) on GB10 (DGX Spark) exhaust unified memory silently, killing worker ranks without traceback—**high severity**, no fix yet.
- **Qwen3.8-Flash-Next Looping**: Issue [#36537](https://github.com/sgl-project/sglang/issues/36537) shows infinite loop on token ID 0 during thinking + tool parsing; **high priority**, actively being investigated.
- **Kimi-K3 Crash**: Issue [#36018](https://github.com/sgl-project/sglang/issues/36018) reports crash in v0.5.18 release; confirmed reproducible but no fix PR submitted.
- **UnifiedRadixCache Crash**: Issue [#32331](https://github.com/sgl-project/sglang/issues/32331) causes `TypeError: object of type 'NoneType' has no len()` under high concurrency on B200—linked to `hicache_transfer` commit path.

---

### **6. What This Means for Application Developers**  
Developers should **avoid long prompts (>40k tokens)** on GB10 systems until [#36941](https://github.com/sgl-project/sglang/issues/36941) is resolved—expect silent worker termination. For AMD deployments, use the newly validated MXFP4/FP8 recipes in [#36919](https://github.com/sgl-project/sglang/pull/36919) to ensure correctness. If using speculative decoding or tools with Qwen3.8-Flash-Next, monitor for token ID 0 loops—this may break agent logic. Consider upgrading to FlashInfer v0.6.18 via [#36954](https://github.com/sgl-project/sglang/pull/36954) for better kernel efficiency and reduced memory churn.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# **llama.cpp Digest – 2026-08-29**

---

### **1. Today's Highlights**  
The latest development in `llama.cpp` centers on critical performance and stability improvements across multiple backends, particularly for AMD’s Strix Halo (gfx1151) and Apple M4/M5 chips. Key updates include optimized Vulkan and Metal kernels for new Apple silicon, fixes to speculative decoding crashes involving MTP + external drafts, and a major fix for GPU memory corruption in ROCm/HIP on gfx1151 — which was causing incorrect output despite identical flags.

---

### **2. Releases & Breaking Changes**  
- **`b10679`**: Added `--tensor-read-lazy` flag (via `LLAMA_LAZY_MODE_*`) to bench tool for delayed tensor loading; removes aliasing confusion.  
  🔗 [PR #27881](https://github.com/ggml-org/llama.cpp/pull/27881)  
- **`b10678`**: Reduced graph splits in `qwen4exp` model by merging PLE embd lookup with `build_inp_embd`, improving execution efficiency.  
  🔗 [PR #27880](https://github.com/ggml-org/llama.cpp/pull/27880)  

> ⚠️ No breaking API changes reported today.

---

### **3. New Model & Hardware Support**  
- **Apple Silicon (M4, M5, M5 Pro)**: Added `fa-vec` tunings for F16, Q4_0–Q8_0 quantizations in Metal backend.  
  🔗 [PR #27875](https://github.com/ggml-org/llama.cpp/pull/27875), [PR #27863](https://github.com/ggml-org/llama.cpp/pull/27863)  
- **GLM-5-Next (GLM-5.3-Flash)**: Full model support added, including hybrid linear/sparse attention MoE and vision tower.  
  🔗 [PR #27754](https://github.com/ggml-org/llama.cpp/pull/27754)  
- **Qwen3.5 Embedding Models**: `convert_hf_to_gguf.py` now supports Hugging Face `Qwen3_5TextModel` variants like `Rebine/Qwen3.5-Embedding-0.8B`.  
  🔗 [PR #27920](https://github.com/ggml-org/llama.cpp/pull/27920)  
- **OpenVINO Backend**: Updated to 2026.3.1; adds support for Whisper.cpp, Qwen3.5 on NPU, and new ops (including fused IM2COL+MatMul).  
  🔗 [PR #27843](https://github.com/ggml-org/llama.cpp/pull/27843)

---

### **4. Performance & Optimization**  
- **Metal (M4/M5)**: `fa-vec` tuning enables up to **~3x faster decode** on M4 (10-core GPU) for Q4_K_S and other quants.  
  🔗 [PR #27875](https://github.com/ggml-org/llama.cpp/pull/27875)  
- **Vulkan**: Fixed K-padding vs N-padding in `mul_mat_id`, eliminating OOB access risks.  
  🔗 [PR #27925](https://github.com/ggml-org/llama.cpp/pull/27925)  
- **CPU (ARM)**: Introduced tiled `mul_mat` for k-quants using VNNI, achieving **3–7x speedup** over scalar dot products.  
  🔗 [PR #27851](https://github.com/ggml-org/llama.cpp/pull/27851)  
- **SYCL**: Enabled `TILE` path for quantized KV decode on Xe2 (BMG), preserving VEC fallback until validation completes.  
  🔗 [PR #26689](https://github.com/ggml-org/llama.cpp/pull/26689)  
- **Speculative Decoding**: `draft-mtp-adaptive` introduces dynamic draft depth control based on token importance estimation.  
  🔗 [PR #27210](https://github.com/ggml-org/llama.cpp/pull/27210)

---

### **5. Stability & Regressions**  
- **Critical**: **ROCm/HIP corruption on gfx1151 (Strix Halo)** — produces wrong output while Vulkan is correct under same config.  
  🔗 [Issue #27579](https://github.com/ggml-org/llama.cpp/issues/27579) *(No fix PR yet)*  
- **Crash**: `--spec-type draft-mtp + -md` fails due to shared context type mismatch.  
  🔗 [Issue #27850](https://github.com/ggml-org/llama.cpp/issues/27850), [PR #27897](https://github.com/ggml-org/llama.cpp/pull/27897) *(Fix merged)*  
- **Crash**: `DFlash2` fails with `--split-mode tensor` due to axis validation error.  
  🔗 [Issue #27819](https://github.com/ggml-org/llama.cpp/issues/27819) *(No fix PR yet)*  
- **Performance Cliff**: Batched decode throughput drops sharply at `n_tokens=9` on many-expert MoE models (e.g., Qwen3-Coder-Next 30B-A3B).  
  🔗 [Issue #25356](https://github.com/ggml-org/llama.cpp/issues/25356) *(No fix PR yet)*

---

### **6. What This Means for Application Developers**  
- **Use `--tensor-read-lazy`** in benchmarks to reduce early memory pressure and avoid false negatives in latency measurements.  
- **Leverage M4/M5 Metal optimizations** immediately — expect significant gains on Apple devices using Q4_K_S and similar quantizations.  
- **Avoid `--spec-type draft-mtp + -md`** unless you’re on a stable build with the fix (`b10679+`). Use `draft-dflash` alone or disable MTP if instability persists.  
- **Be cautious with DFlash2 + `--split-mode tensor`** — it’s currently unstable; fall back to `--split-mode layer` until fixed.  
- **Monitor ROCm builds on gfx1151** — even with identical flags, output may be corrupted. Prefer Vulkan for correctness until issue is resolved.  
- **Enable `GGML_CUDA_FA_ALL_QUANTS`** by default in CUDA builds to unlock FlashAttention for all quant types (especially beneficial on RTX 3090/4080).  
  🔗 [PR #27907](https://github.com/ggml-org/llama.cpp/pull/27907)

> ✅ *Recommended workflow*: Always test against known-good weights and backends before deploying speculative decoding or multi-GPU setups.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-08-29**

---

### **1. Today's Highlights**  
The Ollama ecosystem continues to expand its support for advanced inference architectures and multi-modal models, with key progress on **structured output performance**, **MLX engine enhancements**, and **Claude Desktop integration on Windows**. Critical memory leaks in `llama-server` (host-side heap growth) and GPU detection issues on **NVIDIA Orin AGX** and **RTX 50-series (Blackwell)** have surfaced, indicating ongoing challenges in low-level backend stability.

---

### **2. Releases & Breaking Changes**  
*No new releases were published in the last 24 hours.*  
However, **v0.33.1** remains a focal point of instability:  
- `--load-mode none` is now **force-enabled regardless of GPU availability** (#18095), breaking GPU offloading expectations.  
- **Windows desktop app fails to launch built-in server silently** despite log entries suggesting startup (`server.log` remains empty) (#18061).  
> 🔗 [Issue #18095](https://github.com/ollama/ollama/issues/18095) | [Issue #18061](https://github.com/ollama/ollama/issues/18061)

---

### **3. New Model & Hardware Support**  
- ✅ **Gemma4** now supports image and audio input via MLX engine (#18079).  
- ✅ **Talos** added as official `ollama launch` integration, enabling permission-gated personal AI agents (#18093).  
- ✅ **Remuda** (macOS local model tester) added to community integrations list (#18089).  
- ⚠️ **Qwen3.8 Flash-Next** lacks official CUDA/NVIDIA support on DGX Spark despite working in llama.cpp builds (#18096).  
- ❌ **ROCm backend** returns incorrect outputs for prompts >4k tokens on gfx1151 (Strix Halo), while CPU/Vulkan work correctly (#17895).  

---

### **4. Performance & Optimization**  
- 📈 **Speculative decoding enabled under structured output** via PR #18105 — previously blocked due to grammar enforcement during verification. This enables ~2x throughput on dense 27B MTP models.  
- 🧠 **Experimental prefill cache persistence across runner reloads** introduced in #17953 — avoids recomputing full prompt state after restarts.  
- 💡 **LlamaCPP parameter GUI** proposed for desktop app (#18100), inspired by Maid’s F-Droid UI.  
- 📉 **Host memory leak in `llama-server` runner**: grows linearly (~5–12 MiB per request), invisible in RSS but consuming GBs over time (#18106).  

---

### **5. Stability & Regressions**  
| Severity | Issue | Impact | Fix Status |
|--------|------|--------|------------|
| 🔴 High | `llama-server` host memory leak (~5–12 MiB/request) | Long-lived servers hit memory limits; no release since v0.32.15 | Open (#18106) |
| 🔴 High | GPU not detected on Jetpack 7.2 R39 (Nvidia Orin AGX 64GB) | CUDA init failure (`cudaSetDevice err: 801`) | Open (#18067) |
| 🔴 High | RTX 50-series (Blackwell): Typhoon OCR 1.5 3B produces `"@" repeated` output | Deterministic corruption on GPU only | Open (#17687) |
| 🟡 Medium | Qwen3.8 truncates Solana mint addresses | Critical for blockchain use cases | Open (#18007) |
| 🟡 Medium | Gemma3:12b structured output (`format`) truncates prematurely with quoted terms | Breaks JSON schema validation | Open (#18094) |
| 🟡 Medium | ROCm backend fails on long prompts (>4k tokens) | Model ignores instructions | Open (#17895) |

> 🔗 [Issue #18106](https://github.com/ollama/ollama/issues/18106) | [Issue #18067](https://github.com/ollama/ollama/issues/18067) | [Issue #17687](https://github.com/ollama/ollama/issues/17687)

---

### **6. What This Means for Application Developers**  
- **Avoid v0.33.1** if using GPU offloading or running long-lived inference servers — expect forced `--load-mode none` and potential crashes.  
- **Expect memory bloat** when scaling inference workloads: monitor `llama-server` host memory usage closely.  
- **Use MLX for vision/audio models** (e.g., Gemma4) on Apple Silicon — stable and feature-rich. Avoid ROCm for long prompts until #17895 is resolved.  
- **Structured output workflows** can now leverage speculative decoding (#18105), improving latency for complex reasoning pipelines.  
- **Integrate Talos or Remuda** for enhanced local agent development and testing environments.  
- **Verify cloud model access** — API errors 401/403 are now documented, but missing auth still breaks workflows (#18092).  

> 🛠 Pro Tip: For Windows users, manually running `ollama serve` bypasses silent startup failures in v0.33.1 (#18061).

---  
*Data source: [github.com/ollama/ollama](https://github.com/ollama/ollama)*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-08-29**

---

### **1. Today's Highlights**  
The LiteLLM ecosystem continues to expand its support for next-generation LLMs and enterprise-grade security, with key updates focused on **AI provider integrations**, **security hardening**, and **stable inference routing**. Critical fixes address long-standing issues in cost attribution, authentication, and model compatibility—especially for OpenAI’s gpt-5.6 family and Anthropic’s reasoning models—while new PRs introduce support for AI Power Grid and enhanced MCP gateway token validation.

---

### **2. Releases & Breaking Changes**  
- **v1.100.0-dev.2**: Released today with a major emphasis on **signature verification via cosign**. All Docker images are now signed using the same key introduced in [commit `0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0).  
  🔐 *Verification guide: [cosign docs](https://docs.sigstore.dev/cosign/overview/)*

> 🛠️ **Migration Note**: Teams using self-hosted proxies should verify image signatures before deployment. No breaking API changes were announced.

---

### **3. New Model & Hardware Support**  
- ✅ **AI Power Grid** added as a JSON-based OpenAI-compatible provider via [#38725](https://github.com/BerriAI/litellm/pull/38725), supporting `/chat/completions` and `/responses` APIs with native pricing metadata.
- ✅ **Bedrock Web Search** now supported for GPT models via [#37995](https://github.com/BerriAI/litellm/pull/37995), enabling grounding and citations through AWS Bedrock’s native tooling.
- ✅ **GLM-5.3-Flash** added to pricing metadata in [`model_prices_and_context_window.json`](https://github.com/BerriAI/litellm/blob/6e569ee0c7a5a6487e7261d7e388bc112e6bb10f/model_prices_and_context_window.json) via [#38608](https://github.com/BerriAI/litellm/pull/38608).

---

### **4. Performance & Optimization**  
- 🚀 **Per-request budget reservation cap** introduced in [#38647](https://github.com/BerriAI/litellm/pull/38647): prevents overestimation of costs (e.g., coding agents with high `max_tokens`) by allowing opt-in cost caps at request time.
- 📊 **OTel v2 span enhancements** via [#38716](https://github.com/BerriAI/litellm/pull/38716): emits `gen_ai.usage.cache_tokens` in traces, improving downstream cost analytics accuracy.
- ⚙️ **Redis optimization**: Unconfigured keys now skip post-call Redis writes ([#33010](https://github.com/BerriAI/litellm/pull/33010)), reducing I/O overhead in low-traffic deployments.

---

### **5. Stability & Regressions**  
| Issue | Severity | Status | Fix PR |
|------|----------|--------|--------|
| [Bug #11929](https://github.com/BerriAI/litellm/issues/11929): Spend reporting undercounts across paginated dashboard views | High | Closed | N/A |
| [Bug #33221](https://github.com/BerriAI/litellm/issues/33221): Function tools fail on OpenAI gpt-5.6 models due to `reasoning_effort` error | High | Closed | N/A |
| [Security #24530](https://github.com/BerriAI/litellm/issues/24530): `/metrics` endpoint exposes PII in production (unauthenticated by default) | Critical | Open | ❗ Requires immediate attention |
| [Bug #27944](https://github.com/BerriAI/litellm/issues/27944): Anthropic batch costs always show $0 | Medium | Closed | N/A |
| [Bug #34301](https://github.com/BerriAI/litellm/issues/34301): GPT-5.5/5.6 models don’t validate temperature | High | Closed | N/A |

> 🔴 **Critical Risk**: The unauthenticated `/metrics` endpoint (Issue #24530) remains open—teams using multi-tenant proxy deployments must enable `require_auth_for_metrics_endpoint: true` immediately.

---

### **6. What This Means for Application Developers**  
- 🧩 **Build more reliable agent systems**: With fixes to function tools, reasoning parameters, and response handling (e.g., [#38623](https://github.com/BerriAI/litellm/pull/38623), [#38721](https://github.com/BerriAI/litellm/pull/38721)), your agents will now correctly handle fallbacks and guardrails across providers.
- 🔒 **Enforce security defaults**: Never rely on unauthenticated endpoints—enable `require_auth_for_metrics_endpoint` and audit user_id propagation (see [#14505](https://github.com/BerriAI/litellm/issues/14505)) to ensure immutable safety tracking.
- 🔄 **Leverage new features**: Use the **per-request budget cap** (#38647) to prevent runaway costs in agent workflows, and integrate **AI Power Grid** (#38725) for diversified inference routing.
- 📈 **Improve observability**: Enable OTel v2 spans and cache token tracking (#38716) to gain accurate cost and performance insights in production.

> 💡 **Pro Tip**: Always verify Docker image signatures using `cosign verify`—critical for secure CI/CD pipelines.  
> 🔗 [Verify Image Signatures Guide](https://docs.sigstore.dev/cosign/overview/)

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# **Unsloth Digest – 2026-08-29**

---

### **1. Today's Highlights**  
The Unsloth ecosystem continues to mature with significant UI/UX refinements and stability improvements, particularly around context handling, model persistence, and RAG functionality. Critical fixes have been merged for TTS endpoint testing (#9905), excessive `studio.db` I/O during inference (#9945), and tool-calling grammar compilation failures (#9923). These address core user pain points in agent workflows and long-running chat sessions.

---

### **2. Releases & Breaking Changes**  
None reported in the last 24 hours. No new releases or breaking API changes were published.

---

### **3. New Model & Hardware Support**  
- ✅ **Audio Model Integration**: Native support added for Higgs, MOSS, and MiniMax TTS models via PR [#8794](https://github.com/unslothai/unsloth/pull/8794), expanding Studio’s multimodal capabilities.
- ✅ **OpenAI-Compatible Routing**: PR [#9892](https://github.com/unslothai/unsloth/pull/9892) now exposes non-chat models (image, video, speech-to-text) through `/v1/models`, enabling full OpenAI SDK compatibility.
- ⚠️ **ROCm Backend Limitations**: Persistent issues reported on AMD GPUs (e.g., RX 7600, gfx1201) — model loading fails entirely on ROCm backend ([#9926](https://github.com/unslothai/unsloth/issues/9926), [#9931](https://github.com/unslothai/unsloth/issues/9931)), indicating ongoing GPU driver/runtime challenges.
- 📌 **ARM64 macOS Prebuilt Issue**: The latest prebuilt `b10639` links against an obsolete `librdma.dylib`, causing crashes on macOS < 26 ([#9874](https://github.com/unslothai/unsloth/issues/9874)).

---

### **4. Performance & Optimization**  
- 🔧 **VRAM Budgeting Fix**: PR [#9931](https://github.com/unslothai/unsloth/pull/9931) stops counting host-pinned embeddings toward VRAM budget — improves accuracy of memory estimation for large models.
- 🔄 **Context Compaction Expansion**: PR [#9399](https://github.com/unslothai/unsloth/pull/9399) extends automatic context compaction to MLX backend on Apple Silicon, improving performance on ARM devices.
- 📉 **Disk I/O Optimization**: PR [#9945](https://github.com/unslothai/unsloth/pull/9945) reduces excessive `studio.db` writes by reusing WAL connections and adjusting SQLite sync settings — critical for NVMe longevity and inference smoothness.
- 🚀 **Model Load Flexibility**: PR [#9920](https://github.com/unslothai/unsloth/pull/9920) clarifies that GGUF files exceeding VRAM+RAM limits are not OOM — they can page from disk, correcting misleading "Won't fit" warnings.

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | PR / Fix |
|--------|------|--------|--------|
| 🔴 High | Tool-calling grammar fails due to repetition bounds exceeding llama.cpp limit | Open | [PR #9923](https://github.com/unslothai/unsloth/pull/9923) *(fixed)* |
| 🔴 High | Settings/Presets not saved across restarts (desktop app) | Open | [Issue #9948](https://github.com/unslothai/unsloth/issues/9948) *(no fix yet)* |
| 🟡 Medium | KV cache quantization not reflected in context length under TP | Open | [Issue #9697](https://github.com/unslothai/unsloth/issues/9697) *(no fix yet)* |
| 🟡 Medium | AMD GPU detection broken in latest `llama.cpp` build | Open | [Issue #7485](https://github.com/unslothai/unsloth/issues/7485) *(no fix yet)* |
| 🟢 Low | Tokenizer config exports `TokenizersBackend` class — incompatible with Transformers | Closed | [PR #8444](https://github.com/unslothai/unsloth/pull/8444) *(fixed)* |

> **Note**: Several regressions impact agent development workflows (RAG, tool calling, persistent state), but key fixes are actively being delivered.

---

### **6. What This Means for Application Developers**  
- **Agent Builders**: Be cautious when using tool-calling with Qwen3.8 or other models — schema complexity may trigger grammar compilation errors. Use simplified schemas until PR #9923 is released.
- **RAG & Knowledge Workflows**: Expect instability in file listing and project source access ([#8854](https://github.com/unslothai/unsloth/issues/8854)); avoid relying on dynamic file introspection until resolved.
- **Deployment Strategy**: On AMD systems, avoid ROCm backend for now — use CUDA or CPU fallback. For Apple Silicon, ensure macOS 26+ to avoid `librdma` crashes.
- **Persistence & State Management**: Do not assume presets or system prompts will survive restarts — implement client-side backup logic until #9948 is fixed.
- **Performance Tuning**: Leverage the updated context compaction and reduced DB I/O for long-running agents; expect smoother inference on NVMe drives.

👉 **Recommendation**: Monitor PRs #9945 (disk I/O), #9923 (tool grammar), and #9948 (settings persistence) closely — these are high-impact fixes for production-grade agent apps.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*