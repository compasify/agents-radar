# AI Infrastructure Digest 2026-10-18

> Generated: 2026-10-18 00:14 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-10-18**

---

### **1. Ecosystem Overview**  
The AI inference and serving ecosystem is entering a phase of high specialization and hardware convergence, with next-generation accelerators like NVIDIA Blackwell (SM120) and AMD RDNA4 (gfx1201) driving deep architectural optimization. Projects are increasingly diverging in focus: low-level engines (vLLM, llama.cpp) prioritize kernel efficiency and memory control; runtime platforms (SGLang, Unsloth) emphasize agent-native workflows and UI integration; gateways (LiteLLM) enforce cross-provider consistency and security; while fine-tuning tools (Unsloth) target developer experience for local training. Stability remains a key challenge, particularly on ROCm and multi-GPU setups, as performance gains come at the cost of increased complexity.

---

### **2. Activity Comparison**

| Project       | Issues Opened (Last 24h) | PRs Merged (Last 24h) | Releases | Breaking Changes |
|---------------|----------------------------|------------------------|----------|------------------|
| **vLLM**      | 5                          | 7                      | None     | None             |
| **SGLang**    | 9                          | 5                      | None     | None             |
| **llama.cpp** | 6                          | 6                      | None     | 1 (Migration Note) |
| **Ollama**    | 8                          | 2                      | None     | 1 (Version Lock) |
| **LiteLLM**   | 5                          | 4                      | v1.103.5 | 2                |
| **Unsloth**   | 7                          | 5                      | None     | 2 (Imminent)     |

> ✅ *vLLM leads in active engineering velocity; LiteLLM shows strong release discipline with security hardening.*

---

### **3. Model Support Race**

| New Model / Architecture       | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------------------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek-V4.1-Flash (SM120)** | ✅   | ✅     | ❌        | ❌     | ❌      | ❌      |
| **Kimi-K3 (ROCm gfx1201)**      | ✅   | ✅     | ❌        | ❌     | ❌      | ❌      |
| **Kolibri-1 (78B MoE)**         | ✅   | ⚠️ (In Progress) | ✅       | ✅ (In Progress) | ❌ | ❌ |
| **TR-HASH Checkpoint**          | ✅   | ❌     | ❌        | ❌     | ❌      | ❌      |
| **PPLX Decider v1.2 (MLX)**     | ❌   | ❌     | ❌        | ✅     | ❌      | ❌      |
| **Gemini Live Avatar (3.8)**    | ❌   | ❌     | ❌        | ❌     | ✅      | ❌      |

> 🏆 **Winner**: **vLLM** maintains clear leadership in cutting-edge model + hardware support, especially for Blackwell and ROCm. **llama.cpp** excels in open-source quantization breadth (Q1_0/Q2_0), while **LiteLLM** leads in provider-specific feature enablement (e.g., Gemini avatar).

---

### **4. Performance Frontier**

| Optimization Focus            | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|-------------------------------|------|--------|-----------|--------|---------|---------|
| **KV Cache Efficiency**       | ✅✅  | ✅     | ✅        | ❌     | ❌      | ❌      |
| **Speculative Decoding**      | ✅    | ✅✅   | ✅        | ❌     | ❌      | ❌      |
| **Quantization (FP8/MXFP8)**  | ✅✅  | ✅     | ✅✅      | ❌     | ❌      | ❌      |
| **Distributed Serving (TP/PP)**| ✅✅  | ✅     | ✅        | ❌     | ❌      | ❌      |
| **Kernel-Level Tuning (CUTLASS)** | ✅✅ | ❌     | ✅        | ❌     | ❌      | ❌      |
| **Memory Offload / Disk Cache**| ✅✅  | ❌     | ✅        | ❌     | ❌      | ✅ (Virtualized History) |

> 🔥 **Key Trend**: **vLLM** dominates in kernel-level optimizations (CUTLASS, hybrid MLA pairing), while **SGLang** pushes speculative decoding innovation. **llama.cpp** leads in low-bit quantization across diverse backends (Hexagon, AMD GCN). **Unsloth** innovates in memory abstraction via virtualized chat history.

---

### **5. Layer Positioning**

| Project       | Primary Layer                     | Key Differentiator |
|---------------|------------------------------------|--------------------|
| **vLLM**      | Inference Engine (Low-Level)       | SM120/ROCm kernel mastery, FP8/GEMM tuning, Paged KV cache |
| **SGLang**    | Agent-Native Runtime               | DSpark draft models, speculative decode pipeline, low-latency design |
| **llama.cpp** | Local Runtime & Quantized Inference | Cross-backend portability, ultra-low-bit support, edge device readiness |
| **Ollama**    | Developer-Facing Gateway           | Unified CLI, MLX/ROCm/Vulkan integration, model catalog |
| **LiteLLM**   | API Gateway & Proxy Layer          | Multi-provider routing, guardrails, cost tracking, security (Cosign) |
| **Unsloth**   | Training + Studio Experience       | MCP agents, hosted encoders, UI-driven workflow, distributed training stability |

> 📊 **Positioning Insight**: The stack is clearly layered—**engine (vLLM)** → **runtime (SGLang, llama.cpp)** → **gateway (LiteLLM, Ollama)** → **studio (Unsloth)**—with increasing abstraction and user-centricity moving up the stack.

---

### **6. Trend Signals**

#### **Emerging Industry Trends**:
1. **Hardware-Centric Optimization** – All major projects now have dedicated PRs for **Blackwell (SM120)** and **AMD gfx1201**, signaling that performance differentiation is increasingly tied to low-level GPU architecture.
2. **ROCm Instability as a Bottleneck** – Multiple critical issues across **vLLM, SGLang, Ollama, Unsloth** indicate that AMD’s ROCm stack remains fragile, especially for new architectures (RDNA4), delaying production adoption.
3. **Agent Workflows Driving Innovation** – Features like **speculative decoding (SGLang)**, **virtualized chat history (Unsloth)**, and **adaptive MTP (llama.cpp)** reflect a shift from static inference to dynamic, stateful agent execution.
4. **Security & Supply Chain Integrity** – **LiteLLM**’s signed Docker images (Cosign) mark a turning point: trust is becoming a first-class concern in AI infrastructure.
5. **Model Caching & Memory Abstraction** – From disk offload (vLLM) to virtualized histories (Unsloth), memory pressure is being addressed not just through hardware but through architectural innovation.

#### **Actionable Advice for Developers**:
- **Avoid `--enforce-eager` on SM120** until vLLM fixes regression (#56892).
- **Pin to stable commits** in SGLang and Unsloth due to severe stability regressions.
- **Use `OLLAMA_METRICS=1`** and monitor `/metrics` for observability in agent-heavy deployments.
- **Leverage adaptive speculative decoding** (`--spec-type draft-mtp-adaptive`) for throughput gains in large models.
- **Audit seed handling** if using Ollama — avoid integers > 2⁵³ due to precision loss.

> ✅ **Bottom Line**: The ecosystem is maturing rapidly—but at the cost of fragmentation. Choose your stack based on **hardware targets**, **use case (agent vs batch)**, and **tolerance for instability**. For production, **vLLM + LiteLLM + metrics monitoring** offers the most reliable path forward today.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest – 2026-10-18

---

### **1. Today's Highlights**  
vLLM continues to advance support for next-generation hardware, with critical fixes for Blackwell (SM120) and ROCm on AMD R9700 (gfx1201). Key PRs include a fix for non-deterministic greedy decoding due to cuBLAS split-K behavior, a performance optimization for small-M FP8 GEMMs on SM12x using CUTLASS, and enhancements to hybrid MLA block pairing for Kimi-K3 on ROCm. The project is also streamlining CI/CD pipelines and improving reproducibility for benchmarking.

---

### **2. Releases & Breaking Changes**  
*None reported in the last 24 hours.*  
No new releases or breaking API/config changes observed. The `v0.31.1rc1.dev159+g4274ae956` release remains active, with no immediate deprecation notices.

---

### **3. New Model & Hardware Support**  
- **SM120 (Blackwell)**: Active development and bug fixes for RTX PRO 6000 Blackwell (GB10/SM120), including DeepSeek-V4.1-Flash decode performance tuning via [PR #61868](https://github.com/vllm-project/vllm/pull/61868) and support for NVFP4 KV cache.
- **ROCm (AMD gfx1201/RDNA4)**: Critical progress on Kimi-K3 support ([Issue #50682](https://github.com/vllm-project/vllm/issues/50682)), including AITER fused-MoE integration and TP-agnostic connector work.
- **New Models**: Native TR-HASH checkpoint support added via [PR #60431](https://github.com/vllm-project/vllm/pull/60431); Inkling model now supported on SM120 with paged-KV compatibility under review ([Issue #51405](https://github.com/vllm-project/vllm/issues/51405)).
- **Quantization**: MXFP8 MoE now correctly uses `FLASHINFER_TRTLLM` backend on SM121 (DGX Spark) instead of falling back to MARLIN ([Issue #43906](https://github.com/vllm-project/vllm/issues/43906)).

---

### **4. Performance & Optimization**  
- **SM120 FP8 Optimization**: [PR #61331](https://github.com/vllm-project/vllm/pull/61331) replaces inefficient cuBLASLt split-K kernels with CUTLASS for small-M per-tensor FP8 GEMMs, reducing overhead from memset initialization.
- **Hybrid MLA Block Pairing**: [PR #61002](https://github.com/vllm-project/vllm/pull/61002) enables non-divisible block sizes (e.g., P=TP2, D=TP1) in hybrid MLA models on ROCm, fixing handshake failures for Kimi-K3.
- **MoE Fusion**: [PR #62174](https://github.com/vllm-project/vllm/pull/62174) fuses GLM-5.x MoE finalize into the next RMSNorm’s all-reduce, reducing kernel launches and improving decode throughput.
- **Disk Offload**: [PR #59958](https://github.com/vllm-project/vllm/pull/59958) adds `--engram-config '{"disk_offload": true}'` for Qwen4Exp, reducing memory usage by ~27 GiB on DGX Spark (GB10).
- **KV Cache Efficiency**: [PR #59053](https://github.com/vllm-project/vllm/pull/59053) gathers MiMo fused-QKV FP8 rows exactly by default, reducing unnecessary memory movement.

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Fix PR |
|--------|------|-------|-------|
| 🔴 High | **TP=2 deadlock on dual AMD R9700 (gfx1201)** — GPUs spin at 100% inference blocked | Open (#40980) | No PR yet |
| 🔴 High | **DeepSeek-V4.1-Flash decode throughput ~1.7–1.8x slower on SM120 with --enforce-eager**; CUDA graphs unusable | Open (#56892) | [PR #61868](https://github.com/vllm-project/vllm/pull/61868) (in progress) |
| 🟡 Medium | **NVFP4 KV cache causal prefill ~1.7–1.8x slower than FP8 on SM120** | Open (#50416) | No PR yet |
| 🟡 Medium | **TurboQuant workspace locked at 3.06 MB** — fails on prompts >4096 tokens (Qwen3.6-27B NVFP4) | Open (#43357) | No PR yet |
| 🟡 Medium | **Nemotron-3.5-Lightning NVFP4 decode ~16% slower on DGX Spark since v0.29.0** | Open (#59770) | No PR yet |
| 🟢 Low | **Non-deterministic greedy decoding across repeated generate() calls** | Fixed ([PR #61440](https://github.com/vllm-project/vllm/pull/61440)) |

> ⚠️ **Critical Note**: The `--enforce-eager` mode regression on SM120 severely impacts real-time agentic workloads. Prioritize [PR #61868](https://github.com/vllm-project/vllm/pull/61868) for production stability.

---

### **6. What This Means for Application Developers**  
- **Use `--enforce-eager` cautiously on SM120**: Avoid it until [PR #61868](https://github.com/vllm-project/vllm/pull/61868) lands—expect severe throughput degradation.
- **Leverage disk offload for large models**: Enable `--engram-config '{"disk_offload": true}'` for Qwen4Exp to reduce memory pressure on GB10 systems.
- **Ensure deterministic outputs**: Use recent builds (post-[PR #61440](https://github.com/vllm-project/vllm/pull/61440)) if you rely on consistent logprobs/logits across runs.
- **Monitor ROCm support for Kimi-K3**: Expect improved performance and fewer crashes as [Issue #50682](https://github.com/vllm-project/vllm/issues/50682) progresses.
- **Test on mixed TP configurations**: For hybrid MLA models on ROCm, verify that non-divisible block sizes are handled—use [PR #61002](https://github.com/vllm-project/vllm/pull/61002) in your CI if targeting multi-TP setups.

> ✅ **Pro Tip**: Use `VLLM_RELOAD_CORE=1` (per [RFC #59502](https://github.com/vllm-project/vllm/issues/59502)) for more efficient weight reloading in dynamic serving environments.

---  
*Data source: [vLLM GitHub Repository](https://github.com/vllm-project/vllm)*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-10-18**

---

### **1. Today’s Highlights**  
The SGLang project continues its aggressive optimization push for DeepSeek-V4.1 on Blackwell (SM120) and GB300 hardware, with multiple PRs landing in low-latency decode and speculative decoding paths. Critical stability fixes were introduced for AMD ROCm and GPU memory management under long-context workloads, while a new feature proposal aims to reduce KV cache overhead during short prefills with long cached prefixes.

---

### **2. Releases & Breaking Changes**  
*No new releases or breaking changes detected in the last 24 hours.*

---

### **3. New Model & Hardware Support**  
- **DeepSeek-V4.1-Flash** now has production-grade support on **8× RTX PRO 6000 (SM120, PCIe-only)**, with validated topology and throughput measurements ([#40877](https://github.com/sgl-project/sglang/issues/40877)).  
- **AMD ROCm support** is advancing with critical fixes for encoder SWA bounded replay behavior ([#44870](https://github.com/sgl-project/sglang/issues/44870)) and MoE correction bias handling ([#44797](https://github.com/sgl-project/sglang/pull/44797)).  
- **Muse Spark** open development is underway, with initial PRs merged to enable native support ([#44678](https://github.com/sgl-project/sglang/issues/44678)).

---

### **4. Performance & Optimization**  
- **Low-latency decode optimization**: DSpark draft model + sampling on low-latency decode paths achieved significant gains on GB300 nodes ([#44626](https://github.com/sgl-project/sglang/pull/44626), [#44628](https://github.com/sgl-project/sglang/pull/44628)).  
- **Speculative decoding improvements**: A new megakernel plugin design enables unified DSpark draft proposal execution ([#44935](https://github.com/sgl-project/sglang/pull/44935)), reducing kernel launch overhead.  
- **KV Cache Efficiency**: Proposal [#44885](https://github.com/sgl-project/sglang/issues/44885) targets reduced bandwidth usage by passing only Q instead of full KV for short prefills with long cached prefixes.  
- **Throughput gap observed**: DeepSeek-V4 prefill on SM120 (4× RTX PRO 6000) still lags behind vLLM/Marlin (~2–7K tok/s vs ~12.5K), indicating ongoing kernel-level tuning needs ([#33422](https://github.com/sgl-project/sglang/issues/33422)).

---

### **5. Stability & Regressions**  
- **Critical crash under long context**: `GB10` systems experience silent worker rank death above ~54k tokens due to unified memory exhaustion with no OOM trace ([#36941](https://github.com/sgl-project/sglang/issues/36941)).  
- **CUDA coredump storm**: Auto-collected CUDA crashes from CI (`pr-test.yml`) are flooding the tracker — 345 comments on [#26340](https://github.com/sgl-project/sglang/issues/26340), likely tied to unstable test environments.  
- **Agent reasoning corruption**: GLM-5.3-Flash produces endless `!` characters under complex multi-tool agentic prompts ([#36669](https://github.com/sgl-project/sglang/issues/36669)).  
- **Reproducibility issues**: Greedy decoding outputs vary across server restarts when FlashInfer autotune is enabled ([#39597](https://github.com/sgl-project/sglang/issues/39597)).  
- **Request routing bugs**: `/v1/messages` returns HTTP 500 for `gpt-oss` when history contains thinking blocks; reasoning content is dropped in replay ([#44932](https://github.com/sgl-project/sglang/issues/44932), [#44931](https://github.com/sgl-project/sglang/issues/44931)).  
- **Server hangs**: `pause_generation(in_place)` followed by `pause_generation(abort)` causes indefinite hang until watchdog kill ([#44835](https://github.com/sgl-project/sglang/issues/44835)).

---

### **6. What This Means for Application Developers**  
- **Use caution with long contexts (>40k tokens)**: On GB10 or SM120, expect silent failures due to memory exhaustion — monitor unified memory usage closely.  
- **Avoid `--enable-encoder-swa-bounded-replay` on ROCm** until fix lands ([#44870](https://github.com/sgl-project/sglang/issues/44870)); it corrupts cached KV.  
- **Disable FlashInfer autotune if reproducibility is critical**, especially with speculative decoding ([#39597](https://github.com/sgl-project/sglang/issues/39597)).  
- **For high-throughput agents**, consider using `--ep-dispatch-algorithm fake` cautiously — it may introduce route biases ([#44897](https://github.com/sgl-project/sglang/issues/44897)).  
- **Expect API instability**: The `/v1/chat/completions` and `/v1/messages` endpoints have known bugs with agent reasoning flows — validate prompt structure carefully.  

> ✅ **Recommendation**: Pin to a stable main commit (e.g., `b15a78a881`) until critical regressions are resolved. Monitor issue trackers for real-time updates.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-10-18**

---

### **1. Today's Highlights**  
The latest updates focus on expanding quantization support for Hexagon and AMD GCN backends, with critical performance improvements in CUDA and Vulkan kernels for low-bit quantized models (Q4_0, Q6_K). New features include adaptive speculative decoding, multi-GPU MoE cache support, and enhanced model discovery via Hugging Face Hub integration.

---

### **2. Releases & Breaking Changes**  
No new tagged releases were published today. However, the following changes are notable:  
- `b11715`: HIP backend now uses `__builtin_amdgcn_perm` for efficient Q1_0 unpacking on AMD GCNs ([PR #29927](https://github.com/ggml-org/llama.cpp/pull/29927)).  
- `b11710`: Added grouped experts top-k fusion to CUDA graph optimization pipeline ([PR #29181](https://github.com/ggml-org/llama.cpp/pull/29181)).  
- `b11709`: Added full support for **Kolibri-1**, a 78B bilingual MoE reasoning model from Aleph-Alpha ([PR #30673](https://github.com/ggml-org/llama.cpp/pull/30673)).  

> ⚠️ **Migration Note**: The `--spec-type draft-mtp-adaptive` option is now available; avoid setting `--spec-draft-n-max < 7` due to instability ([PR #27210](https://github.com/ggml-org/llama.cpp/pull/27210)).

---

### **3. New Model & Hardware Support**  
- ✅ **Model Support**:  
  - Kolibri-1 (Aleph-Alpha): 78B parameter MoE model with 3.46B active experts per token ([PR #30673](https://github.com/ggml-org/llama.cpp/pull/30673)).  
  - Granite switch decision 256 options: Enhanced support for semantic option markers in switch models ([PR #30693](https://github.com/ggml-org/llama.cpp/pull/30693)).  
  - GLM-5.3 next: Added `-sm tensor` support ([PR #30499](https://github.com/ggml-org/llama.cpp/pull/30499)).  

- ✅ **Hardware & Backend Support**:  
  - **Hexagon**: Full Q1_0 and Q2_0 quantization support across HVX/HMX kernels ([PR #30122](https://github.com/ggml-org/llama.cpp/pull/30122)).  
  - **AMD ROCm/HIP**: Optimized Q1_0 unpacking via `__builtin_amdgcn_perm`, tuned MMQ configs for GCN arch ([PR #30021](https://github.com/ggml-org/llama.cpp/pull/30021), [PR #29927](https://github.com/ggml-org/llama.cpp/pull/29927)).  
  - **Vulkan**: Added fast-path dequant+transpose for Q4_0 KV cache in flash attention ([PR #30738](https://github.com/ggml-org/llama.cpp/pull/30738)).  

---

### **4. Performance & Optimization**  
- **CUDA**:  
  - Faster MMVQ for low-bit types (Q4_0, Q6_K) via optimized kernel dispatch ([PR #30517](https://github.com/ggml-org/llama.cpp/pull/30517)).  
  - Improved cuBLAS compatibility with legacy Kepler GPUs (CC 3.5+) via algorithm fallbacks ([PR #30727](https://github.com/ggml-org/llama.cpp/pull/30727)).  
- **OpenCL**: Cooperative-k DP4A GEMM added for Q4_0/Q4_K/Q6_K — improves pp2/pp3/pp4 throughput ([PR #30741](https://github.com/ggml-org/llama.cpp/pull/30741)).  
- **SYCL**: Merged fp16/fp32 dequant switches via templating; reduced code duplication ([PR #30740](https://github.com/ggml-org/llama.cpp/pull/30740)).  
- **CPU**: F32 gelu_quick/geglu_quick now computed without FP16 table lookup → higher precision, lower error (~1e-3) ([PR #30737](https://github.com/ggml-org/llama.cpp/pull/30737)).  

> 🔥 **Note**: A revert of `#30584` was proposed ([PR #30733](https://github.com/ggml-org/llama.cpp/pull/30733)) due to severe performance regression in CUDA/Vulkan, especially for Mellum models.

---

### **5. Stability & Regressions**  
- 🛑 **Critical Crashes**:  
  - `llama-server` crashes with `STATUS_STACK_BUFFER_OVERRUN` during long `xhigh` generation when hitting busy slots ([Issue #27456](https://github.com/ggml-org/llama.cpp/issues/27456)).  
  - `ggml-rpc` has a heap OOB write vulnerability via `op_params/ne` mismatch in 6 ops ([Issue #30734](https://github.com/ggml-org/llama.cpp/issues/30734)) — **security risk**.  
- ⚠️ **Performance Regressions**:  
  - ~3x decode slowdown on multi-device Vulkan systems after commit `e0bcacc` (`vulkan: allow multiple devices to access gpu-visible host memory`) ([Issue #30695](https://github.com/ggml-org/llama.cpp/issues/30695)).  
  - Metal stalls up to 50x wall time during large-context prompt processing (qwen4exp) despite normal compute speed ([Issue #30726](https://github.com/ggml-org/llama.cpp/issues/30726)).  
- 🐞 **Correctness Bugs**:  
  - CPU backend: `llama_batch.embd` decoding non-deterministic vs. bitwise deterministic token path ([Issue #28963](https://github.com/ggml-org/llama.cpp/issues/28963)).  
  - Qwen3.5 mmproj inference quality significantly lower than HF transformers on identical prompts ([Issue #30742](https://github.com/ggml-org/llama.cpp/issues/30742)).  

> ✅ **Fixes in Progress**: PRs exist for SYCL IQ3 crash ([#30604](https://github.com/ggml-org/llama.cpp/pull/30604)), argsort/top-k on strided tensors ([#30743](https://github.com/ggml-org/llama.cpp/pull/30743)), and Vulkan MoE cache crash ([#30697](https://github.com/ggml-org/llama.cpp/issues/30697)).

---

### **6. What This Means for Application Developers**  
- **Use adaptive MTP speculative decoding** (`--spec-type draft-mtp-adaptive`) for better throughput on large models — but avoid `draft-n-max < 7`.  
- **Leverage new Q1_0/Q2_0 support on Hexagon** for ultra-low-bit efficiency on mobile edge devices.  
- **Avoid `--moe-cache-mib` on Vulkan** until fix lands ([#30697](https://github.com/ggml-org/llama.cpp/issues/30697)).  
- **Monitor GPU memory usage per device** via `/metrics` and `/memory` endpoints — now exposed per-GPU ([PR #26130](https://github.com/ggml-org/llama.cpp/pull/26130)).  
- **Be cautious with RPC**: Unreachable endpoints now fail gracefully, but ensure security hardening for `ggml-rpc` due to OOB write risk ([#30734](https://github.com/ggml-org/llama.cpp/issues/30734)).  
- **For multimodal apps**: Validate `mmproj` outputs carefully — known accuracy gap vs. HF Transformers persists ([#30742](https://github.com/ggml-org/llama.cpp/issues/30742)).  

> 💡 **Pro Tip**: Use `--model-download` with `<quant>-<sidecar>` tags to auto-resolve auxiliary files (e.g., `Q4_0-mtp` downloads `mmproj` if present) ([PR #29584](https://github.com/ggml-org/llama.cpp/pull/29584)).

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-10-18**

---

### **1. Today's Highlights**  
A surge in critical stability issues has emerged, particularly around GPU inference on AMD Radeon Pro cards (ROCm and Vulkan) and model generation failures with `glm-5.3-flash:cloud`. The root cause for the `glm` regression points to a suspected cluster-level data corruption event on Oct 12 (UTC), affecting ~5–8% of inference jobs. Meanwhile, new PRs focus on API reliability—especially precision handling for large integers (e.g., seeds > 2⁵³) and embedding endpoint validation—while progress continues on MLX runner improvements and metrics exposure.

---

### **2. Releases & Breaking Changes**  
*None*  
No new releases or breaking changes were published in the last 24 hours. However, **Issue #19085** highlights that `bonsai-2:9b` requires Ollama v0.40.5+, indicating potential future version dependency enforcement for newer models.

> 🔗 [Issue #19085 – Model pull error due to version requirement](https://github.com/ollama/ollama/issues/19085)

---

### **3. New Model & Hardware Support**  
- **MLX Backend**: PR #19072 adds support for **PPLX Decider v1.2**, a Qwen3.5-based decision scorer with noncausal attention and image handling. Models are now available in the library under `pplx-decider`.
- **Kolibri 1** support is being added via PR #18780 (in progress).
- **Vulkan**: New issue #19060 reports GPT-OSS 20B fails on AMD Radeon Pro 5700 XT (16 GB VRAM) via Vulkan despite working on CPU.
- **ROCm**: Issue #19075 confirms a crash on Radeon Pro W5700 (gfx1010) using ROCm 7.2 backend due to `GGML_ASSERT(max_blocks_per_sm > 0)` failure.

> 🔗 [PR #19072 – PPLX Decider v1.2 support](https://github.com/ollama/ollama/pull/19072)  
> 🔗 [Issue #19075 – ROCm crash on gfx1010](https://github.com/ollama/ollama/issues/19075)

---

### **4. Performance & Optimization**  
- **Memory Efficiency**: PR #19091 enforces embedding capability checks at runtime, preventing silent errors when calling `/api/embed` on non-embedding models.  
- **Profiling & Debugging**: PR #16611 enhances `bench.go` to support direct profiling of underlying runners (mlx/llama-server), enabling deeper GPU kernel analysis.
- **Model Load Feedback**: PR #17834 introduces load progress reporting and stall detection for MLX runners, reducing false timeouts during long model loads.
- **Context Caching**: PR #17953 enables experimental prefill cache persistence across runner reloads (`OLLAMA_PREFILL_CACHE=1`), potentially reducing latency on repeated prompt processing.

> 🔗 [PR #17953 – Prefill cache persistence](https://github.com/ollama/ollama/pull/17953)  
> 🔗 [PR #16611 – Enhanced profiling support](https://github.com/ollama/ollama/pull/16611)

---

### **5. Stability & Regressions**  
**Critical**  
- **#18980** – Massive generation degeneration (~5–8% failure rate) with `glm-5.3-flash:cloud` since Oct 12 (GER). Cluster 829’s probe2.img shows all-zero data — *host-side corruption confirmed*. No fix PR yet.  
- **#19075** – ROCm crash on AMD Radeon Pro W5700 (gfx1010) due to `max_blocks_per_sm > 0` assertion failure. High severity; impacts edge and desktop users.

**High Severity**  
- **#19060** – GPT-OSS 20B returns empty responses on AMD Radeon Pro 5700 XT (16 GB) via Vulkan, while CPU works. No workaround reported.  
- **#19090** – One request over ~6.5k tokens corrupts `d1-omni:600m` Vulkan iGPU runner; subsequent requests return wrong answers silently until unload.

**Medium**  
- **#18131 / #17924** – MLX prefix cache grows uncontrollably (~0.147 GiB/request), pushing 32 GB Apple Silicon systems into heavy swap during agent workloads. Fix in progress via budget tuning.
- **#19084** – Memory exhaustion (OOM freeze) on NVIDIA Jetson Orin (8 GB RAM) due to unconstrained prompt caching. Even with `keep_alive=0`, memory saturates.

> 🔗 [Issue #18980 – glm-5.3-flash cloud corruption](https://github.com/ollama/ollama/issues/18980)  
> 🔗 [Issue #19075 – ROCm crash on gfx1010](https://github.com/ollama/ollama/issues/19075)  
> 🔗 [Issue #19090 – d1-omni Vulkan state corruption](https://github.com/ollama/ollama/issues/19090)

---

### **6. What This Means for Application Developers**  
- **Avoid large seeds (>2⁵³)**: Use string-based seeds or lower values until PR #19081 (fixing int64 precision in JSON decoding) lands. Otherwise, distinct seeds may produce identical outputs.
- **Be cautious with `OLLAMA_CONTEXT_LENGTH`**: It is not reflected in `/api/show` or `/api/tags` — apps relying on these endpoints must manually track effective context length.
- **Monitor GPU backends carefully**: Avoid Vulkan/ROCm on older AMD GPUs (Pro 5700 XT, W5700) if stability is critical. Prefer CPU fallback or CUDA where possible.
- **Enable metrics (`OLLAMA_METRICS=1`)**: Use the new `/metrics` endpoint (PR #16998) for observability in production deployments, especially for agent workflows.
- **Expect instability with high-context agents**: On edge devices (Jetson Orin) or Apple Silicon, consider lowering `cache_state` or disabling caching entirely to avoid OOM.

> ✅ **Recommended Action**: Audit your deployment for `seed`, `context_length`, and GPU backend usage — especially if using `glm`, `d1-omni`, or `gpt-oss` models. Monitor logs for `token repeat limit reached` or `prediction aborted` errors (see #18609).

---  
*Digest compiled from GitHub activity: ollama/ollama | 2026-10-18*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-10-18**

---

### **1. Today's Highlights**  
The latest release, **v1.103.5**, introduces enhanced security via signed Docker images using Cosign, ensuring integrity across all deployments. Key stability fixes address critical issues in batch processing, streaming responses, and guardrail integration—particularly for Gemini, Anthropic, and Bedrock backends. Notably, a high-severity fix ensures proper logging of `prompt_cache_breakpoint` for Claude via the new `cache_control` mapping.

---

### **2. Releases & Breaking Changes**  
- **v1.103.5**: Released with verified image signatures via [Cosign](https://github.com/BerriAI/litellm/commit/0112e53). All images are now cryptographically signed using the same key introduced in that commit.  
- **Breaking Change (PR #46601)**: `reasoning_effort_levels` now apply universally across providers and routes. Non-numeric `thinking.budget_tokens` will now return `400` or drop under `drop_params`. Upgrade caution advised for hosted_vllm, non-Claude `/v1/messages`, and adapter completions.  
- **Breaking Change (PR #46777)**: `count_tokens()` now includes `litellm_count_source` in response headers to clarify if count is real or estimated. Models like Bedrock Sonnet/Haiku 5.5 and Kimi K3 now return accurate counts.  

> 🔗 [Release v1.103.5](https://github.com/BerriAI/litellm/releases/tag/v1.103.5) | [Cosign Signature Docs](https://docs.sigstore.dev/cosign/overview/)

---

### **3. New Model & Hardware Support**  
- **Gemini Live Avatar (Gemini 3.8)**: Native support added for `avatar_config` in realtime Gemini/Vertex integration (PR #43166). Enables lip-synced talking-head video avatars alongside audio.  
- **SAP GenAI Hub**: Added support for `sap/` model routing with dynamic deployment URL discovery via AICORE API (Issue #47096), though performance overhead (~870ms per call) noted.  
- **FunASR Audio Transcription**: Feature request opened to integrate FunASR as an audio transcription provider (Issue #29367), pending toolkit licensing clarity.  
- **OpenInfer Provider**: Proposal to add native OpenInfer integration for cost-efficient, OpenAI-compatible inference (Issue #34357).

> 🔗 [PR #43166 – Gemini Live Avatar](https://github.com/BerriAI/litellm/pull/43166) | [Issue #29367 – FunASR Integration](https://github.com/BerriAI/litellm/issues/29367)

---

### **4. Performance & Optimization**  
- **Headroom Prompt Compression**: Opt-in headers now return compressed prompts and omission reasons without truncation (PR #47200). Improves prompt efficiency without sacrificing visibility.  
- **Batch Reconciliation Efficiency**: PRs #47192 and #47190 ensure recoverable spend is preserved even during malformed output or metadata failures, preventing poll starvation and cost loss.  
- **Latency Benchmarking**: New test suite (PR #46955) measures SpendLog-backed UI query latency across 48 routes, enabling repeatable performance monitoring and outlier detection.  
- **Redis Connection Leak Fix**: Upgrading `redis-py` to 8.1.0 (PR #47203) resolves async cluster connection leaks that caused `MaxConnectionsError` under load.

> 🔗 [PR #47200 – Headroom Compression Headers](https://github.com/BerriAI/litellm/pull/47200) | [PR #46955 – Perf Test Suite](https://github.com/BerriAI/litellm/pull/46955)

---

### **5. Stability & Regressions**  
| Severity | Issue | Description | Fix Status |
|--------|------|-------------|------------|
| ⚠️ High | [Issue #47011](https://github.com/BerriAI/litellm/issues/47011) | `/key/generate` and `/user/new` return bare 500 errors for `get_spend_routes` permission without Enterprise license; error message only logged. | Pending |
| ⚠️ High | [Issue #46958](https://github.com/BerriAI/litellm/issues/46958) | `GET /v1/batches/{batch_id}` returns 403 for team-scoped models post-v1.103.0 due to mismatch in model name resolution. | In progress (PR #47190) |
| ⚠️ High | [Issue #47014](https://github.com/BerriAI/litellm/issues/47014) | Streamed response cache stores `finish_reason: "stop"` instead of `"length"` when truncated, leading to incorrect replay behavior. | In progress (PR #47190) |
| ⚠️ High | [Issue #46074](https://github.com/BerriAI/litellm/issues/46074) | Forcible `tool_choice` passed verbatim to models like Opus/Sonnet 5.5 that reject it, causing 400 errors. | In progress (PR #46391) |
| 🟡 Medium | [Issue #47096](https://github.com/BerriAI/litellm/issues/47096) | SAP GenAI Hub re-fetches deployment URL on every LLM call (~870ms overhead). | Under investigation |

> 🔗 [All Issues Summary](https://github.com/BerriAI/litellm/issues?q=is%3Aissue+updated%3A%3E2026-10-17)

---

### **6. What This Means for Application Developers**  
- **Critical for production gateways**: Ensure you’re on **v1.103.5+** and verify image signatures to prevent supply-chain risks.  
- **Guardrails & Streaming**: If using guardrails with streaming responses, expect improved error signaling (via PR #46953) — avoid silent disconnects in agent workflows.  
- **Cost Accuracy**: Be cautious with team-scoped models (`v1.103.0+`) and `get_spend_routes` permissions — unauthorized access now raises clear 403s (though full error details may be missing).  
- **Model Routing**: Use `avatar_config` for real-time avatar generation with Gemini 3.8. Avoid `tool_choice` on models like Sonnet 5.5 unless validated via `drop_params`.  
- **Helm Deployments**: The migration Job OOMKilled at 1Gi (Issue #47076) indicates memory constraints — increase resource limits in Helm charts for stable upgrades.

> ✅ **Actionable Takeaway**: Audit your proxy config for `reasoning_effort_levels`, `tool_choice`, and team-scoped model usage. Apply PR #46601 and #46777 changes before upgrading to avoid breaking changes.

---  
*Digest generated: 2026-10-18 | Source: [BerriAI/litellm GitHub](https://github.com/BerriAI/litellm)*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-10-18**

---

### **1. Today's Highlights**  
The Unsloth project continues rapid iteration on its Studio UI and backend infrastructure, with major PRs focused on improving model management (MCP agent enhancements), reducing memory overhead via virtualized chat histories, and enhancing stability across AMD ROCm and Windows environments. Critical issues around PyTorch GPU binding on AMD RDNA2 and window resizing in AppImage are actively being addressed.

---

### **2. Releases & Breaking Changes**  
*None* — No new releases were published in the past 24 hours. However, several breaking changes are imminent due to ongoing PRs:

- **#14088**: Introduces a new `Keep multiple models loaded` mode (`Always`, `When they fit`, `Off`) that affects how models are managed during inference. This may impact workflows relying on automatic model unloading.
- **#14077**: Adds one-command MCP setup and model catalog integration, which restructures how agents interact with models and tools. Existing agent configurations may require updates.

> 🔗 [PR #14088](https://github.com/unslothai/unsloth/pull/14088) | [PR #14077](https://github.com/unslothai/unsloth/pull/14077)

---

### **3. New Model & Hardware Support**  
- **AMD ROCm Support**: Multiple issues highlight instability after recent updates:  
  - **#14057**: PyTorch ROCm/GPU binding fails on AMD Radeon RX 6800 XT (gfx1030) after studio update.  
  - **#14085**: ROCm launch failures on Windows with gfx1201 GPUs, causing display flashing and system lockups post-llama.cpp b11696 update.  
- **Windows ARM**: CI pipeline now pins `pyarrow` and `sqlite-vec` tags for secure wheel signing (**#14092**).
- **Video/Image Models**: All components now pulled from `unsloth/*` repos by default (e.g., quantized text encoders for image/video families).  
  > 🔗 [PR #14000](https://github.com/unslothai/unsloth/pull/14000) | [PR #14009](https://github.com/unslothai/unsloth/pull/14009)

---

### **4. Performance & Optimization**  
- **Memory Efficiency**:  
  - **#14001**: Virtualizing long chat histories reduces memory use significantly—ideal for LLM agents handling extended dialogues.  
- **Model Loading Speed**:  
  - **#14009**, **#14000**: Defaulting to hosted quantized text encoders improves load times and reduces VRAM usage by ~30–40% vs. dense bf16 versions.  
- **Build & Download Optimization**:  
  - **#14051**: Downloads prebuilt kernel wheels only once, cutting install time by ~50% on slow connections.  
- **Kernel-Level Improvements**:  
  - **#14006**: Fixes incorrect fake quantization in fused cross-entropy loss path, ensuring proper QAT training accuracy.  
  - **#14002**: Corrects Nemotron loss normalization across gradient accumulation steps, preventing biased gradients.

> 🔗 [PR #14001](https://github.com/unslothai/unsloth/pull/14001) | [PR #14051](https://github.com/unslothai/unsloth/pull/14051) | [PR #14006](https://github.com/unslothai/unsloth/pull/14006)

---

### **5. Stability & Regressions**  
| Severity | Issue | Description | Fix Status |
|--------|------|------------|-----------|
| 🔴 High | **#14057**, **#14085** | ROCm GPU crashes on AMD RDNA2/gfx1201 after update; PyTorch binds fail. | ❌ Not yet fixed |
| 🔴 High | **#14063** | `CheckpointError` in distributed training when `UNSLOTH_BLOCK_COMPILE=1` (new per-layer compile). | ✅ Workaround: `UNSLOTH_BLOCK_COMPILE=0` |
| 🟡 Medium | **#14055** | JS error `"undefined is not an object (evaluating 't.scrollbarGutter.includes')"` on macOS 15.0.1. | ❌ Pending |
| 🟡 Medium | **#14086** | Downloaded audio models don’t appear in inventory after download. | ❌ Pending |
| 🟡 Medium | **#14068** | Sampling settings corrupted on preset save. | ❌ Pending |
| 🟡 Medium | **#14061** | Progress bars show inconsistent values across UI elements. | ❌ Pending |

> 🔗 [Issue #14057](https://github.com/unslothai/unsloth/issues/14057) | [Issue #14063](https://github.com/unslothai/unsloth/issues/14063)

---

### **6. What This Means for Application Developers**  
- **Avoid `UNSLOTH_BLOCK_COMPILE=1` in distributed setups** until #14063 is resolved—use `UNSLOTH_BLOCK_COMPILE=0` for stable multi-GPU training.
- **Expect model loading behavior changes** with the new `Keep multiple models loaded` mode (#14088)—reconfigure agent workflows accordingly.
- **Use hosted quantized encoders** (image/video) for faster startup and lower VRAM footprint—default behavior now favors them.
- **Monitor AMD ROCm support** if targeting RDNA2 or newer hardware—current builds are unstable; avoid production use until fixes land.
- **Leverage virtualized chat history (#14001)** for building long-context agents without memory bloat.
- **Update tool integrations** to handle new OpenUI toggle proposal (#14054) if planning UI extensibility.

> ✅ Recommended: Pin to stable release until #14057, #14085, and #14063 are resolved. Monitor GitHub closely for patch releases.

---  
*Digest generated: 2026-10-18 | Source: github.com/unslothai/unsloth*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*