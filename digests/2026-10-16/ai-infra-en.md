# AI Infrastructure Digest 2026-10-16

> Generated: 2026-10-16 00:41 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-10-16**

---

### **1. Ecosystem Overview**  
The AI infrastructure landscape in Q4 2026 is defined by a sharp bifurcation between high-performance, hardware-optimized inference engines and increasingly robust, agent-ready local runtime platforms. Projects are converging on multi-modal, MoE, and speculative decoding capabilities, while stability and observability remain critical bottlenecks. The emergence of next-gen GPUs (GB300, MI355X, Strix Halo) and model architectures (Muse Spark Open, DeepSeek-V4.1-Flash, Nemotron 3.5 Bolt) is accelerating innovation—but also exposing deep system-level fragilities in memory management, routing correctness, and cross-request isolation.

---

### **2. Activity Comparison**

| Project | Issues Open | PRs Merged (Last 24h) | Releases | Status |
|--------|--------------|-------------------------|----------|--------|
| **vLLM** | 118 | 12 | None | Active development; focus on MoE & low-latency decode |
| **SGLang** | 114 | 9 | v0.5.20 (stable) | High instability; CI flakiness blocking progress |
| **llama.cpp** | 107 | 14 | v0.7.0 (released) | Rapid feature rollout with critical regressions |
| **Ollama** | 146 | 6 | None | Stability crisis: multiple critical production issues |
| **LiteLLM** | 69 | 5 | v1.107.0-dev.2 / rc.4 | Pre-release; strong focus on cost accuracy & observability |
| **Unsloth** | 78 | 11 | v0.1.908-beta (beta) | Beta release with major model/hardware integrations |

> ✅ *Insight*: **llama.cpp** leads in momentum (new release + high PR volume), but **Ollama** shows the most systemic risk with 4 critical issues affecting core functionality.

---

### **3. Model Support Race**

| New Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|--------------------------|------|--------|-----------|--------|---------|---------|
| **Muse Spark Open** | ✅ (ROCm/CUDA) | ❌ | ✅ | ❌ | ❌ | ✅ |
| **DeepSeek-V4.1-Flash** | ✅ (GB300 + DSpark) | ✅ (SM120) | ❌ | ⚠️ (regression) | ❌ | ❌ |
| **Qwen3.8-2.4T-A95B / Flash-Next** | ✅ (ROCm) | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Nemotron 3.5 Bolt** | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| **FLUX.3 Image Klein** | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| **K2 Horizon (MoVA)** | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **Prism** | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **Clef** | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ |

> 🏆 **Winner**: **Unsloth** and **llama.cpp** lead in novel model support—especially for cutting-edge multimodal and local-only models.  
> 📌 **Note**: vLLM maintains edge in **high-end hardware optimization** (GB300, MI355X), while **Ollama** lags despite early adoption of some models.

---

### **4. Performance Frontier**

| Optimization Focus | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|--------------------|------|--------|-----------|--------|---------|---------|
| **KV Cache Efficiency** | ✅ FP8, prefix cache fixes, workload snapshots | ✅ NIXL packing, HiCache prewarm | ✅ Host-cached MoE (`--moe-cache-mib`) | ⚠️ Prompt cache DoS risk | ✅ Per-turn spend logs | ✅ Preemption via `--preempt-ram` |
| **Speculative Decoding** | ✅ DSpark, low-latency paths | ✅ DFLASH, DSPARK | ✅ LiliCorr (new) | ⚠️ Degeneration in GLM-5.3 | ❌ | ❌ |
| **Quantization & Memory** | ✅ FP8 KV cache (ROCm), NoPE sparse MLA | ✅ FP8 GEMM fusions | ✅ Q2_0, Q1_0 (Hexagon), host MoE | ✅ Q2_0 GGUF | ❌ | ✅ INT8/FP8/GGUF for FLUX.3 |
| **Distributed Serving** | ✅ PD disaggregation (with caveats) | ✅ NIXL storage, PD aborts | ❌ | ❌ | ✅ Proxy routing, load testing | ✅ Multi-GPU MIG slicing |
| **Kernel-Level Tuning** | ✅ Triton fused kernels, FA2 optimizations | ✅ CuTe DSL verify kernel (SM90) | ✅ Vulkan striding, Metal BF16 | ❌ | ❌ | ✅ ROCm auto-flash_attn probe |

> 🔥 **Top Performers**:  
> - **vLLM**: Leading in GPU-specific kernel optimization and distributed serving maturity.  
> - **Unsloth**: Innovating in dynamic kernel selection and multi-GPU efficiency.  
> - **llama.cpp**: Pushing boundaries in host-memory offloading and mobile deployment.

---

### **5. Layer Positioning**

| Project | Primary Layer | Key Differentiator |
|--------|---------------|--------------------|
| **vLLM** | **Inference Engine** | Low-latency, production-grade serving with advanced speculative decoding and MoE support. |
| **SGLang** | **Inference Engine + Runtime Framework** | Unified execution model with NIXL storage and monokernel RFC—designed for complex agent workflows. |
| **llama.cpp** | **Local Runtime / Embedded Inference** | CPU/Mobile-first, highly portable, ideal for edge and offline agents. |
| **Ollama** | **Gateway / Developer Experience Platform** | Simplified CLI/API layer; acts as a meta-proxy for model access, but with growing stability debt. |
| **LiteLLM** | **API Gateway / Cost Management Layer** | Centralized proxy with granular spend logging, identity tokens, and cross-provider routing. |
| **Unsloth** | **Fine-tuning + Local Runtime Stack** | Combines training acceleration with local inference support—ideal for rapid prototyping and agent pipelines. |

> 🧩 **Strategic Insight**:  
> - **vLLM/SGLang** target enterprise-scale, high-throughput inference.  
> - **llama.cpp/Unsloth** serve developers building local, private, or edge-aware agents.  
> - **Ollama/LiteLLM** act as abstraction layers—Ollama for simplicity, LiteLLM for observability and cost control.

---

### **6. Trend Signals**

#### 🔍 **Emerging Trends from 2026-10-16 Activity**
1. **Hardware-Specific Optimization Is Now Table-Stakes**  
   Projects are no longer just supporting new models—they’re tuning for **specific GPU microarchitectures** (GB300, MI355X, Strix Halo, gfx950). This signals a shift toward **hardware-aware inference** rather than generic portability.

2. **MoE Models Are Becoming Production-Ready — But With Caveats**  
   Multiple projects (vLLM, llama.cpp, Unsloth) now support MoE models with caching and offloading features. However, **MoE routing bugs, silent LoRA absorption, and PCIe thrashing** highlight that these systems are still fragile at scale.

3. **Agent Workflows Demand Full Stack Integration**  
   The rise of **text-diffusion**, **prompt caching**, **multi-GPU preemption**, and **tool-call reliability** indicates that application developers are no longer satisfied with pure LLM inference—they need **end-to-end agent execution environments**.

4. **Observability & Cost Control Are Non-Negotiable**  
   LiteLLM’s focus on per-turn spend logs, token counting accuracy, and identity-based access reflects a maturing ecosystem where **cost transparency and auditability are central to enterprise adoption**.

5. **Stability Is the New Competitive Advantage**  
   Despite feature velocity, **Ollama’s critical regressions** and **SGLang’s flaky CI** show that performance gains mean nothing if the system crashes or corrupts data. Developers must prioritize **resilience over novelty**.

---

### ✅ **Recommendations for Application Developers**
- **For production inference**: Use **vLLM** on GB300/MI355X with `low_latency` + DSpark; avoid `--enable-prefix-caching` until #61160 is patched.
- **For local/multimodal agents**: Prioritize **Unsloth** (Nemotron 3.5, Muse Spark Open) or **llama.cpp** (LiliCorr, Q2_0) for offline, high-efficiency operation.
- **For cost-controlled API gateways**: Adopt **LiteLLM v1.107+** to ensure accurate spending tracking—especially when using Ollama backends.
- **Avoid unstable models**: **Do not use `glm-5.3-flash:cloud`** (Ollama) or `fa4` backend on SM120 (SGLang) until fixes land.
- **Monitor system health**: Leverage GPU timing metrics (vLLM), NIXL health checks (SGLang), and prompt cache limits (llama.cpp/Ollama) to prevent resource exhaustion.

> 📌 **Bottom Line**: The AI infrastructure stack is evolving rapidly—but only **stability, observability, and hardware awareness** will determine which tools survive beyond beta.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

---

### **1. Today's Highlights**  
vLLM continues to accelerate its focus on **multi-modal and MoE model optimizations**, with key PRs landing for DeepSeek-V4.1-Flash low-latency decode paths on GB300 (NVIDIA) and ROCm performance tuning for Qwen3.8-2.4T-A95B and Qwen3.8-Flash-Next on MI355X. Critical stability fixes address MoE routing crashes, speculative decoding correctness, and prefix-cache contamination issues affecting production deployments.

---

### **2. Releases & Breaking Changes**  
*No new releases in the past 24 hours.*  
- **Note**: The `--mamba-block-size` flag is now ineffective after removal of `mamba_cache_mode="all"` — users must adjust their configuration accordingly. [Issue #60838](https://github.com/vllm-project/vllm/issues/60838)  
- **Pending migration**: vLLM is moving toward full V1 API support; Phi4Flash model porting remains a high-priority feature. [Issue #23957](https://github.com/vllm-project/vllm/issues/23957)

---

### **3. New Model & Hardware Support**  
- ✅ **New model support**: Added initial support for **Muse Spark Open** via PR #61879 (ROCm/CUDA).  
- 📌 **Hardware-specific optimizations**:  
  - **AMD ROCm (gfx950 / MI355X)**: Performance optimization tracker launched for `amd/Qwen3.8-2.4T-A95B-Quark-MXFP4` and `Qwen3.8-Flash-Next-Quark-MXFP4`. [Issue #57149](https://github.com/vllm-project/vllm/issues/57149), [Issue #59575](https://github.com/vllm-project/vllm/issues/59575)  
  - **NVIDIA (GB300)**: Low-latency decode path for **DeepSeek-V4.1-Flash** with DSpark speculative decoding enabled. [PR #61868](https://github.com/vllm-project/vllm/pull/61868), [PR #61869](https://github.com/vllm-project/vllm/pull/61869)  
- 🔧 **Quantization**: FP8 KV cache support added for NoPE sparse MLA on ROCm. [PR #57134](https://github.com/vllm-project/vllm/pull/57134)

---

### **4. Performance & Optimization**  
- **MoE Performance**:  
  - Fix for 15% decode slowdown on SM12x due to DeepGEMM alignment change (from 64 → 128). [Issue #58624](https://github.com/vllm-project/vllm/issues/58624)  
  - Optimized fused Triton kernel (`fused_qk_rmsnorm_rope_gate`) for Qwen3-Next/Qwen3.5 on ROCm. [PR #51406](https://github.com/vllm-project/vllm/pull/51406)  
- **Attention & Decoding**:  
  - FA2 attention optimized for short-query + long-context scenarios via head-packed, KV-split kernel. [PR #61784](https://github.com/vllm-project/vllm/pull/61784)  
  - DSpark draft engine enables low-latency decode on GB300 with fused Markov loop and CUDA graph. [PR #61869](https://github.com/vllm-project/vllm/pull/61869)  
- **System-Level**:  
  - Added optional GPU timing and workload snapshots to per-iteration metrics (for Dynamo modeling). [PR #61690](https://github.com/vllm-project/vllm/pull/61690), [PR #61691](https://github.com/vllm-project/vllm/pull/61691)

---

### **5. Stability & Regressions**  
- ⚠️ **Critical**: **Cross-request context contamination** via shared-prefix KV reuse in PD disaggregation with automatic prefix caching. Fixed by disabling prefix caching (`--no-enable-prefix-caching`). [Issue #61160](https://github.com/vllm-project/vllm/issues/61160)  
- ⚠️ **Severe**: Silent CUDA IMA (exit 0) in hybrid GDN + MTP k=3 + async scheduling on RTX 3090 — persists through prior fixes. [Issue #53726](https://github.com/vllm-project/vllm/issues/53726)  
- ⚠️ **High**: LoRA on `kv_b_proj` silently ignored due to absorption/pre-wrap bugs. [Issue #48974](https://github.com/vllm-project/vllm/issues/48974)  
- ⚠️ **Regression**: `--mamba-block-size` no longer effective post-removal of `mamba_cache_mode="all"`. [Issue #60838](https://github.com/vllm-project/vllm/issues/60838)  
- ✅ **Fixed**: MoE hash-routing error (`KeyError: "hash_indices_table already exists"`) on both NVIDIA and AMD. [PR #61930](https://github.com/vllm-project/vllm/pull/61930)

---

### **6. What This Means for Application Developers**  
- **Production caution**: Avoid `--enable-prefix-caching` in disaggregated PD deployments until #61160 is patched — risk of cross-request data leakage. Use `--no-enable-prefix-caching` as a temporary workaround.  
- **Performance tuning**: For low-latency inference on GB300 or MI355X, enable the new `low_latency` decode backend and consider using DSpark speculative decoding.  
- **Model-specific risks**: If using MoE models (especially DeepSeek-V4.1, Kimi K2.5, GLM-5.3), verify that `hash_routing` and `gate` parameters are correctly handled — recent PRs (#61930, #61749) fix critical correctness issues.  
- **Monitoring**: Leverage new iteration metrics with GPU timing and workload snapshots ([#61690](https://github.com/vllm-project/vllm/pull/61690), [#61691](https://github.com/vllm-project/vllm/pull/61691)) for better observability and A/B testing.  

> 💡 **Pro tip**: For developers using FlashInfer backends, ensure `--moe-backend=flashinfer_b12x` is used only with sufficient GPU memory — previous OOM issues on 16GB Blackwell GPUs remain unresolved. [Issue #49476](https://github.com/vllm-project/vllm/issues/49476)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-10-16**

---

### **1. Today's Highlights**  
The SGLang project continues to accelerate its support for next-generation hardware, with critical performance and stability improvements targeting Blackwell (SM120) GPUs and AMD ROCm platforms. Key PRs today focus on fixing flaky CI infrastructure (#42752), stabilizing DeepSeek-V4.1-Flash and GLM-5.3-Flash deployments on multi-GPU setups, and enhancing NIXL storage resilience. A major new RFC proposes a *monokernel framework* to unify kernel dispatch and safety checks in SGLang’s runtime.

---

### **2. Releases & Breaking Changes**  
None. No new releases were published in the last 24 hours. The latest stable release remains `v0.5.20` (built 2026-09-18). No breaking API or config changes were introduced.

---

### **3. New Model & Hardware Support**  
- ✅ **DeepSeek-V4.1-Flash**: Confirmed working in production on **8× RTX PRO 6000 (SM120, PCIe-only)** with full speculative decoding via DSPARK. Field report #40877 documents throughput metrics and valid topology constraints.  
- ✅ **GLM-5.3-Flash**: Ongoing qualification on SM120 (TP2, W4A16, FP8 KV) — tracked in #37813. Fixes are being landed to address crashes and degenerate output (#40843, #36669).  
- 🟡 **AMD ROCm Support**: Active development with new PRs targeting Qwen3.5-397B-A17B-FP8 GEMM fusions on gfx950 (#42229), and ROCm-aware multimodal tests (#44599).  
- 🔧 **NIXL Storage Backend**: Enhanced reliability with timeout bounds (#44614) and per-session tagging for Mooncake offloads (#44611).

---

### **4. Performance & Optimization**  
- ⚡ **NIXL KV Packing**: PR #44615 introduces TP-heterogeneous KV packing for improved memory utilization across mixed GPU configurations.  
- ⚡ **Unified Memory Prewarming**: PR #44592 prewarms compaction moves at startup, reducing first-use latency during high-throughput inference.  
- ⚡ **Kernel Fusion on AMD**: PR #42229 fuses activation quant into small-M FP8 GEMM kernels on MI355X, reducing decode latency by ~1–2 µs per token.  
- ⚡ **Diffusion Runtime**: PR #44606 defers full GC collections during pipeline import, cutting cold-start overhead by up to 30% in diffusion workloads.  
- ⚡ **KDA Verify Kernel Extension**: PR #44612 extends CuTe DSL MTP verify kernel to SM90 (Hopper), enabling faster Kimi Delta Attention verification on older NVIDIA cards.

---

### **5. Stability & Regressions**  
| Severity | Issue | Summary | Fix Status |
|--------|------|--------|-----------|
| Critical | #42752 | Flaky CI tests and infrastructure failures in PR Test Base/Extra | Open — blocking PR validation; ongoing babysitting effort |
| High | #40843 | Severe repetition/degenerate loops in GLM-5.3 with DFLASH spec-decoding | Open — affects agentic reasoning pipelines |
| High | #42012 | fa4 attention backend crash on SM120 during CUDA-graph capture | Open — triton is only viable backend |
| Medium | #44369 | NIXL PD abort leaves transfer workers waiting indefinitely | Open — risk of deadlocks under high load |
| Medium | #44070 | Stale KV transfer during early cached-prefix send in PD prefill | Open — silent correctness issue in HiCache |
| Low | #44501 | WeightChecker resets MRotaryEmbedding.axis_map with random values | Open — potential for position encoding corruption |

> 🔗 [CI Flakiness Tracker](https://github.com/sgl-project/sglang/issues/42752) | [GLM-5.3 SM120 Status](https://github.com/sgl-project/sglang/issues/37813)

---

### **6. What This Means for Application Developers**  
- **Use `--enable-deterministic-inference` cautiously**: Known issues with radix cache and temperature=0 outputs persist on Gemma-4 (#34683); avoid in production until fixed.  
- **Avoid `fa4` backend on SM120**: Until #42012 is resolved, use `triton` for GLM-5.3-Flash and DeepSeek-V4.1-Flash to prevent crashes.  
- **Enable `toktier` tokenizer backend** (RFC #44374): For CPU-based incremental tokenization with chunk-parallelism — ideal for low-latency streaming in agent apps.  
- **Monitor NIXL storage health**: Use `SGLANG_DISAGG_PREFILL_EARLY_SEND_CACHED_PREFIX=0` temporarily if experiencing stale KV issues (#44070).  
- **Upgrade to Python 3.11+**: All CUDA builds now move off Python 3.10 (#44393) — ensure compatibility in deployment environments.

> 💡 **Pro Tip**: For agents using multiple tools with complex prompts, test against GLM-5.3-Flash early — known to degrade into endless `!` sequences under `tool_choice=auto` (#36669).

---  
*Digest generated: 2026-10-16 | Source: [github.com/sgl-project/sglang](https://github.com/sgl-project/sglang)*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

---

### **1. Today's Highlights**  
The `llama.cpp` v0.7.0 release introduces **LiliCorr speculative decoding** and **MTP (Multi-Threaded Processing) for GLM5-Next**, significantly accelerating inference on MoE models through host-memory caching of experts (`--moe-cache-mib`, up to ~2.2x speedup). New model support includes **Muse Spark Open (text/vision/audio)**, **K2 Horizon (dense & MoVA)**, and **Prism**, expanding multimodal and high-efficiency capabilities.

---

### **2. Releases & Breaking Changes**  
- **v0.7.0** released: [GitHub Release](https://github.com/ggml-org/llama.cpp/releases/tag/b11669)  
  - Introduces `--moe-cache-mib` for offloading MoE experts to host memory with up to **~2.2x decode speedup** when using MTP.
  - Adds **LiliCorr** speculative decoding technique (new `--spec-type draft-lilicorr`) for improved draft token generation accuracy.
  - Requires attention to `--moe-cache-topk` (PR #30593) if using host-cached MoE layers to cap active experts and avoid PCIe thrashing.
  - Note: Combined use of `draft-mtp` + external draft models (`-md`) may crash (see issue #27428, PR #27897).

---

### **3. New Model & Hardware Support**  
#### **Models Added**  
- **Muse Spark Open** (latent space MoE; 8192 residual stream, 4096 experts, top-8 sigmoid routing): [#30616](https://github.com/ggml-org/llama.cpp/pull/30616)  
- **K2 Horizon** (dense and MoVA variants): [#30616](https://github.com/ggml-org/llama.cpp/pull/30616)  
- **Prism**: [#30616](https://github.com/ggml-org/llama.cpp/pull/30616)  
- **Qwen4exp**: [#30589](https://github.com/ggml-org/llama.cpp/pull/30589) – now supports `build_cvec` and `l_out` callbacks for control vectors.  

#### **Hardware & Backend Enhancements**  
- **Metal (Apple Silicon)**: Added BF16 variant of flash attention kernel ([#30491](https://github.com/ggml-org/llama.cpp/pull/30491)).  
- **Vulkan**: Improved f16 KV copy striding across AMD memory channels ([#27703](https://github.com/ggml-org/llama.cpp/pull/27703)); fixes concurrent init race ([#29766](https://github.com/ggml-org/llama.cpp/pull/29766)).  
- **Hexagon (Qualcomm)**: Added Q1_0 support via native HVX MUL_MAT and tiled quantized weight handling ([#30122](https://github.com/ggml-org/llama.cpp/pull/30122), [#30635](https://github.com/ggml-org/llama.cpp/pull/30635)).  
- **SYCL**: Fixed IQ3 crash in speculative decoding ([#30604](https://github.com/ggml-org/llama.cpp/pull/30604)).

---

### **4. Performance & Optimization**  
- **MoE Speedup**: Host-cached MoE experts (`--moe-cache-mib`) enable up to **~2.2x faster decode** by reducing PCIe transfers during cache misses (PRs #29887, #30112, #30593).  
- **Flash Attention**: Vulkan backend now spreads f16 KV reads across memory channels, improving bandwidth utilization ([#27703](https://github.com/ggml-org/llama.cpp/pull/27703)).  
- **Speculative Decoding**: LiliCorr improves draft accuracy over DFlash/MTP, reducing rejections.  
- **Model Conversion**: Granite Switch block_count fix ([#30621](https://github.com/ggml-org/llama.cpp/pull/30621)) resolves load failures in newer checkpoints.  
- **Memory Efficiency**: Server now saves only restorable slot states to prompt cache ([#30498](https://github.com/ggml-org/llama.cpp/pull/30498)), preventing unnecessary RAM bloat.

---

### **5. Stability & Regressions**  
| Issue | Severity | Status | Notes |
|------|----------|--------|-------|
| [#27428](https://github.com/ggml-org/llama.cpp/issues/27428) | Critical | Open (27 comments) | Draft-MTP halves prompt processing on multi-GPU layer splits (CUDA); reproducible on RTX 4090. |
| [#30364](https://github.com/ggml-org/llama.cpp/issues/30364) | High | Open (10 comments) | Vulkan: MiniMax-M2 prompt processing collapses at long context (`ubatch > 128`) on Strix Halo (gfx1151), triggers GPU "device lost". |
| [#28196](https://github.com/ggml-org/llama.cpp/issues/28196) | High | Open (11 comments) | CUDA: Qwen35 on RTX 5090 runs at 76% of roofline (~28% of memory-bound potential); Windows path is 1.5–1.6x slower than Linux. |
| [#30610](https://github.com/ggml-org/llama.cpp/issues/30610) | High | Open (3 comments) | Metal: Nemotron 3.5 Bolt 74B-A9B segfaults in `ggml_metal_op_mul_mat_id`. |
| [#30577](https://github.com/ggml-org/llama.cpp/issues/30577) | Medium | Open (6 comments) | `llama-server` can exhaust VRAM via DoS in prompt cache management. |

> ✅ **Fixes in Progress**:  
> - PR #27897 addresses combined `draft-mtp` + `-md` init crash.  
> - PR #30593 adds `--moe-cache-topk` to limit active experts in host-cached MoE layers.

---

### **6. What This Means for Application Developers**  
- **Use `--moe-cache-mib` + `--moe-cache-topk`** when deploying large MoE models (e.g., GLM5-Next, Qwen3-Coder) on systems with limited GPU VRAM — enables faster inference with minimal PCIe overhead.  
- **Adopt LiliCorr** (`--spec-type draft-lilicorr`) for higher-quality speculative decoding, especially in agent workflows where draft accuracy matters.  
- **Avoid `ubatch > 128` on Vulkan** (Strix Halo) until [#30364](https://github.com/ggml-org/llama.cpp/issues/30364) is resolved.  
- **Monitor `llama-server` memory usage** — the prompt cache bug (#30577) could lead to resource exhaustion in high-throughput setups.  
- **Leverage new UI features**: PR #29584 enables direct HF Hub discovery/download of GGUF models and sidecar drafts — ideal for rapid prototyping.  
- **Expect better mobile support**: Hexagon Q1_0 and Q2_0 support ([#30122](https://github.com/ggml-org/llama.cpp/pull/30122), [#30630](https://github.com/ggml-org/llama.cpp/pull/30630)) unlocks efficient deployment on Snapdragon devices.

---  
*Digest generated: 2026-10-16*  
*Source: [github.com/ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-10-16**

---

### **1. Today's Highlights**  
A critical regression in `glm-5.3-flash:cloud` causing massive text degeneration (repeating "the = the =") was reported on October 13 and remains unresolved, affecting ~5–8% of users. Concurrently, multiple stability issues emerged around GPU inference—CUDA memory access violations on RTX 5090, ROCm OOM crashes with CPU-offloaded MoE layers, and A100 PCIe bus loss during warm-up—highlighting growing stress on high-end hardware. Meanwhile, Ollama Cloud now supports **Clef**, expanding its agent ecosystem.

---

### **2. Releases & Breaking Changes**  
None. No new releases were published in the last 24 hours.

---

### **3. New Model & Hardware Support**  
- ✅ **MiniCPM-V 4.7 (35b-a3b)**: Fixed via PR #19024 (updating `llama.cpp` to b11551), resolving `unknown projector type: minicpmv4_7` error.  
- ✅ **Q2_0 GGUF quantization**: Added support via PR #18967 for `llama.cpp` v0.40.5+; enables lower-precision inference on compatible models (e.g., Prism ML’s Bonobo).  
- ✅ **Clippy Vision**: New model integration PR #19033 underway.  
- ✅ **Clef**: Now available on Ollama Cloud (PR #19036).  
- 📌 **ROCm / AMD**: Ongoing work on MoE layer offloading (PR #19015) and tool-call handling (Issue #19015).  

> 🔗 [PR #19024](https://github.com/ollama/ollama/pull/19024) | [PR #18967](https://github.com/ollama/ollama/pull/18967)

---

### **4. Performance & Optimization**  
- ⚙️ **GGUF v4 improvements**: PR #19037 adds 64KB DMA page alignment and O(1) token span seek, enabling zero-copy tensor mapping and faster model inspection—critical for large-scale RAG pipelines.  
- 🚀 **MLX engine batching**: Feature request #17280 seeks concurrent decoding support (like `OLLAMA_NUM_PARALLEL`) to unlock full Apple Silicon potential. Currently, requests are serialized (#17666).  
- 💸 **Memory efficiency**: PR #18813 ensures disk-full errors are returned during blob download, preventing silent corruption and wasted space.  
- 📉 **CPU-limited containers**: Issue #17916 reports ~45x throughput collapse due to `n_threads` ignoring cgroup quotas—impacting Kubernetes and containerized deployments.

> 🔗 [PR #19037](https://github.com/ollama/ollama/pull/19037) | [Issue #17916](https://github.com/ollama/ollama/issues/17916)

---

### **5. Stability & Regressions**  
| Severity | Issue | Impact | Fix Status |
|--------|------|-------|-----------|
| 🔴 Critical | `glm-5.3-flash:cloud` generates garbage text ("the = the =") since Oct 12 | 5–8% failure rate; cluster data corrupted (probe2.img = all zeros) | Open, no fix yet ([#18980](https://github.com/ollama/ollama/issues/18980)) |
| 🔴 High | CUDA illegal memory access on RTX 5090 with Cohere MoE | Crashes `llama-server`, exit code `0xc0000409` | Open ([#18642](https://github.com/ollama/ollama/issues/18642)) |
| 🔴 High | A100 PCIe bus loss during Qwen3.5 warm-up (on 0.34.4 & 0.35.0) | System-wide reboot; reproducible across versions | Open ([#19006](https://github.com/ollama/ollama/issues/19006)) |
| 🔴 High | ROCm: gemma4:26b-a4b segfaults after OOM on CPU-offloaded layers | Persistent failure until `GGML_CUDA_DISABLE_GRAPHS=1` | Open ([#19015](https://github.com/ollama/ollama/issues/19015)) |
| 🟡 Medium | `/api/chat` tool definitions empty in native route (but correct in `/v1`) | Breaks tool use in apps relying on native API | Open ([#19040](https://github.com/ollama/ollama/issues/19040)) |
| 🟡 Medium | `bge-m3` returns HTTP 500 with `json: unsupported value: NaN` on certain markdown files | Embedding fails silently for valid inputs | Open ([#15582](https://github.com/ollama/ollama/issues/15582)) |

---

### **6. What This Means for Application Developers**  
- **Avoid `glm-5.3-flash:cloud`** until issue #18980 is resolved—expect severe output degradation. Use alternatives like `qwen3.5` or `mistral-large-4`.  
- **GPU-specific risks**: If deploying on RTX 5090 or A100, expect instability with MoE models—disable `think: true` and monitor for bus losses. Consider `GGML_CUDA_DISABLE_GRAPHS=1` as a workaround for ROCm.  
- **Tool calling reliability**: Do not rely on the native `/api/chat` path for tools—use `/v1` until #19040 is fixed.  
- **Model portability**: With Q2_0 and GGUF v4 support now live, developers can optimize storage and load times—especially useful for edge and mobile inference.  
- **Containerized deployments**: Ensure `n_threads` is explicitly set—default behavior ignores cgroup CPU limits, leading to catastrophic performance drops.  

> 🔗 [Issue #18980](https://github.com/ollama/ollama/issues/18980) | [Issue #19040](https://github.com/ollama/ollama/issues/19040) | [PR #19037](https://github.com/ollama/ollama/pull/19037)

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# **LiteLLM Digest – 2026-10-16**

---

### **1. Today's Highlights**  
The LiteLLM project continues to evolve with a strong focus on cost accuracy, stability in proxy routing, and enhanced observability. Key updates include fixes for critical spend logging issues (e.g., `SpendLogs` row loss due to reused request IDs), improved token counting across models including Gemini and Anthropic, and tighter integration of identity tokens for SSO and cross-app access (XAA). The team also advanced tooling for load testing and performance validation in customer-facing deployments.

---

### **2. Releases & Breaking Changes**  
- **v1.107.0-dev.2** and **v1.106.0-rc.4** released today. Both are pre-release candidates with no breaking changes announced.  
- All Docker images are cryptographically signed via [cosign](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0) using the same key — verify using `cosign verify`.  
- No backward-incompatible API changes detected in recent PRs or issues.

> 🔗 [GitHub Release v1.107.0-dev.2](https://github.com/BerriAI/litellm/releases/tag/v1.107.0-dev.2) | [Verify Image Signature](https://docs.sigstore.dev/cosign/overview/)

---

### **3. New Model & Hardware Support**  
No new model or hardware backends were added in this cycle. However:
- **Claude Platform on AWS Bedrock** now has improved OIDC web identity support via PR #46670, fixing 403 errors by granting necessary `sts:GetWebIdentityToken` permissions.
- **Exa AI search API** received updated support for structured outputs, grounding, and Dynamic Highlights in PR #46525.
- **Gemini** gains configurable thought summaries via PR #36460 (`gemini_include_thoughts_default` setting).

> 🔗 [PR #46670 – Bedrock OIDC Fix](https://github.com/BerriAI/litellm/pull/46670)  
> 🔗 [PR #46525 – Exa AI Search Update](https://github.com/BerriAI/litellm/pull/46525)  
> 🔗 [PR #36460 – Gemini Thought Summary Toggle](https://github.com/BerriAI/litellm/pull/36460)

---

### **4. Performance & Optimization**  
- **Token Counting Accuracy Improved**: PR #46777 introduces `litellm_count_source` and `token_count_fallback_model`, enabling developers to distinguish between real vs estimated counts. Fixes incorrect behavior for Sonnet 5.5, Haiku 5.5, Kimi K3, and DeepSeek.
- **Response-Level Spend Logging**: PR #46768 ensures one `SpendLog` row per WebSocket turn instead of aggregating at connection close — critical for accurate billing reconciliation with OpenAI-style APIs.
- **Performance Testing Tooling**: PR #46806 introduces a load-test kit with Docker build knobs and TCP_NODELAY support for customer proxies; PR #46774 adds JUnit properties for perf metrics tracking across CI runs.

> 🔗 [PR #46777 – Configurable Token Counting](https://github.com/BerriAI/litellm/pull/46777)  
> 🔗 [PR #46768 – Per-Turn Spend Logs](https://github.com/BerriAI/litellm/pull/46768)  
> 🔗 [PR #46806 – Load-Test Kit for Gateway](https://github.com/BerriAI/litellm/pull/46806)

---

### **5. Stability & Regressions**  
Critical stability issues reported today:

| Issue | Severity | Status | Fix PR |
|------|----------|--------|--------|
| [#46403](https://github.com/BerriAI/litellm/issues/46403): Ollama `chatcmpl-<0..999>` reuse causes silent `SpendLogs` row drops | ⚠️ High | Closed | N/A |
| [#46407](https://github.com/BerriAI/litellm/issues/46407): EU data-residency uplift missing in `gpt-image-2.5-flare` spend tracking | ⚠️ Medium | Open | N/A |
| [#46791](https://github.com/BerriAI/litellm/issues/46791): Exa AI full-page text returns default → high cost, low value | ⚠️ Medium | Closed | [PR #46791](https://github.com/BerriAI/litellm/pull/46791) |
| [#46391](https://github.com/BerriAI/litellm/issues/46391): `prompt_cache_breakpoint` ignored in Claude via `/v1/chat/completions` | ⚠️ Medium | Closed | [PR #46391](https://github.com/BerriAI/litellm/pull/46391) |

> 🔗 [Issue #46403 – Silent SpendLog Loss (Ollama)](https://github.com/BerriAI/litellm/issues/46403)  
> 🔗 [Issue #46407 – Missing EU Uplift Cost Tracking](https://github.com/BerriAI/litellm/issues/46407)  
> 🔗 [PR #46791 – Exa AI Content Defaults](https://github.com/BerriAI/litellm/pull/46791)

---

### **6. What This Means for Application Developers**  
- **Cost Monitoring is Now More Accurate**: Use `litellm_count_source` and `token_count_fallback_model` to audit whether your token estimates are reliable. Be aware that `gpt-image` costs may be underreported if you're in the EU.
- **Avoid Silent Data Loss in Proxies**: If you use Ollama or other backends with predictable response IDs, ensure your `SpendLogs` are validated — current behavior risks losing up to 46% of logged spend.
- **Enable Granular Control Over Reasoning Output**: With the new `gemini_include_thoughts_default` flag, disable thought summaries without disabling reasoning — ideal for agents that discard summaries anyway.
- **Use Identity Tokens for Secure Cross-App Access**: PRs like #46748 and #46745 enable ID-JAG and SAML-based OAuth2 flows — crucial for secure, auditable agent-to-agent workflows in regulated environments.

> ✅ **Actionable Tip**: Upgrade to `v1.107.0-dev.2` or later and validate `SpendLogs` integrity if using Ollama or self-hosted backends with short-lived request IDs.

---  
*Digest generated: 2026-10-16 | Source: [BerriAI/litellm GitHub](https://github.com/BerriAI/litellm)*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# **Unsloth Digest – 2026-10-16**

---

### **1. Today's Highlights**  
Unsloth v0.1.908-beta introduces native support for NVIDIA’s **Nemotron 3.5 Bolt** (running on 24GB VRAM) and Meta’s **Muse Spark Open**, enabling local inference of cutting-edge models via the Unsloth ecosystem. The release also adds **text-diffusion LLM support**, enhanced **DeepSpeed training integration**, and improved **prompt caching for coding agents**, significantly advancing agent-level workflows.

👉 [v0.1.908-beta Release](https://github.com/unslothai/unsloth/releases/tag/v0.1.908-beta)  
👉 [NVIDIA Nemotron 3.5 Bolt Guide](https://unsloth.ai/docs/models/nemotron)

---

### **2. Releases & Breaking Changes**  
- **v0.1.908-beta** is now live with new model integrations and backend improvements. No breaking API changes reported, but users should verify compatibility with existing fine-tuning scripts when upgrading.
- **Bugfixes in Studio installer logic**: Fixes for Windows AMD GPU detection (`hipinfo` output handling) and ROCm wheel selection now prevent silent failures during installation.

👉 [Release Notes: v0.1.908-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.908-beta)

---

### **3. New Model & Hardware Support**  
- ✅ **NVIDIA Nemotron 3.5 Bolt** (24GB VRAM requirement) — first official support in Unsloth.
- ✅ **Meta Muse Spark Open** — fully supported for local inference.
- ✅ **FLUX.3 Image Klein (distilled/base)** — added with **INT8 / FP8 / GGUF** support via PR #13933.
- ✅ **AMD Strix Halo APU (gfx1151)** — improved driver routing and ROCm kernel selection via PR #13931.
- ✅ **Multi-GPU MIG card slicing** — now properly recognized and sized by Studio via PR #13927.

> 📌 Note: Users on AMD systems should ensure `HIP_VISIBLE_DEVICES` is correctly set to avoid incorrect GPU assignment.

---

### **4. Performance & Optimization**  
- **KV Cache Preemption** (PR #10301): Enables parallel chat sharing of a single KV cache via `llama-server --preempt-ram`, reducing memory overhead by up to **~40%** under high concurrency.
- **GPU Load Balancing**: Automatic image/video inference now selects the *freest* GPU (PR #13928), improving utilization on multi-GPU setups.
- **MoE Expert Dequantization**: Optional selective dequantization (`UNSLOTH_MOE_SELECTIVE_DEQUANT=1`) keeps sparse experts outside compiled blocks, reducing compilation time and memory pressure.
- **Flash Attention Auto-Pick**: On ROCm, Studio now uses timing probes instead of hardcoded model tables (PR #13792), dynamically selecting flash_attn where faster than SDPA.

> 🔍 Benchmarks show **up to 2.1x speedup in diffusion tasks** on AMD GPUs with Vulkan + optimized attention paths.

---

### **5. Stability & Regressions**  
| Issue | Severity | Status | Fix PR |
|------|----------|--------|--------|
| `TypeError` in `diffusion_prompt_cache.py` during image edit (Qwen-Image-2.1) | Critical | Closed | [Issue #13638](https://github.com/unslothai/unsloth/issues/13638) |
| Prebuilt ROCm `linux/rocm` binary crashes on `hipStreamCreateWithFlags` | Critical | Closed | [Issue #12205](https://github.com/unslothai/unsloth/issues/12205) |
| Long chats redo full prefill after model reload due to slot KV not persisting | High | Open | [Issue #9037](https://github.com/unslothai/unsloth/issues/9037) |
| File embedding failure with `unsloth/embeddinggemma-2` at indexing stage | Medium | Closed | [Issue #13663](https://github.com/unslothai/unsloth/issues/13663) |
| Inference defaults to Vulkan on AMD Strix Halo → slow prefill | Medium | Closed | [Issue #10656](https://github.com/unslothai/unsloth/issues/10656) |

> ⚠️ **Note**: Several stability issues related to multi-GPU and AMD/ROCm are being actively addressed via PRs #13931, #13927, #13792.

---

### **6. What This Means for Application Developers**  
- **Build more capable agents**: With **text-diffusion support**, **better prompt caching**, and **Nemotron 3.5/Muse Spark Open** available locally, developers can now prototype advanced multimodal agents without cloud dependency.
- **Leverage multi-GPU efficiency**: Use `UNSLOTH_MOE_SELECTIVE_DEQUANT=1` and `--preempt-ram` to reduce memory pressure in long-running agent sessions.
- **Optimize for distributed inference**: Use `unsloth doctor --gpus` (new CLI tool) to diagnose multi-GPU misconfigurations before deployment.
- **Future-proof your pipelines**: The shift toward dynamic attention selection (flash_attn probe-based) means less hardcoding—your apps will auto-optimize across hardware.

> 💡 Pro tip: For production-grade agent systems, enable `--preempt-ram` and use **Safetensors models with fit filter** (PR #13945) to avoid overloading VRAM.

---

✅ **Next Steps for Devs**: Update to `v0.1.908-beta`, test with FLUX.3 and Nemotron 3.5, and integrate `unsloth doctor --gpus` into CI/CD for infrastructure validation.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*