# AI Infrastructure Digest 2026-09-14

> Generated: 2026-09-14 00:22 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-09-14**

---

### **1. Ecosystem Overview**  
The AI infrastructure landscape in September 2026 is characterized by rapid convergence between high-performance inference engines, agent-native tooling, and distributed serving systems. Projects are increasingly focused on **speculative decoding**, **semantic caching**, **cross-platform hardware support**, and **agent-grade reliability**, reflecting the shift from standalone LLMs to integrated, real-time AI workflows. While vLLM and SGLang lead in advanced inference optimizations, LiteLLM and Ollama dominate local developer experience and cloud gateway abstraction. Unsloth anchors the fine-tuning layer with growing RAG and agent-centric features, signaling a maturing full-stack ecosystem.

---

### **2. Activity Comparison**

| Project       | Issues Open (24h) | PRs Merged (24h) | Releases (24h) | Key Activity Focus |
|---------------|-------------------|------------------|----------------|--------------------|
| **vLLM**      | 8                 | 7                | 0              | Speculative decoding, DFlash/DSpark stability, MRV2 kernel optimization |
| **SGLang**    | 12                | 5                | 0              | DeepSeek-V4.1 integration, HiCache observability, client disconnect fixes |
| **llama.cpp** | 5                 | 4                | 0              | Backend stability (SYCL/Vulkan/Metal), grammar parsing, CPU threading |
| **Ollama**    | 10                | 3                | 0              | Cross-platform regressions (Windows, Jetson), quantization cleanup |
| **LiteLLM**   | 7                 | 6                | 1 (rc.1)       | Rust migration, security hardening, provider compatibility |
| **Unsloth**   | 9                 | 4                | 0              | Training config deprecation, RAG stability, Studio performance |

> 🔍 *Note:* vLLM and SGLang show highest technical depth; LiteLLM leads in release velocity and security posture.

---

### **3. Model Support Race**

| New Model / Architecture       | Project(s) Supporting | Status & Notes |
|-------------------------------|------------------------|----------------|
| **DeepSeek-V4.1**             | SGLang (#38798), llama.cpp (#28696) | SGLang has native model class; llama.cpp via conversion script |
| **DeepSeek-V4-Flash-Vision-Exp** | vLLM (#55683) | LoRA request pending integration |
| **Hybrid GDN/Mamba**          | vLLM (#56646) | Partial support; prefix caching unstable in multi-node TP |
| **SenseNova-U1/U1.5**         | SGLang (#37742) | Official roadmap tracking, no code yet |
| **Kimi-K2.7-Code**            | LiteLLM (#32613) | Azure deployment ready |
| **Nemotron-H series**         | llama.cpp (#28779) | Critical zero-divide fix applied |

> 🏆 **Leader**: **SGLang** and **vLLM** are leading in cutting-edge model coverage, particularly for hybrid and vision-augmented architectures.

---

### **4. Performance Frontier**

| Optimization Area           | Primary Focus Projects | Key Developments |
|----------------------------|------------------------|------------------|
| **KV Cache & Prefix Caching** | vLLM, SGLang | DFlash/DSpark integration, YaRN + prefix cache conflicts (high-severity bugs), semantic radix cache in SGLang |
| **Speculative Decoding**     | vLLM, SGLang | Top-k/p-aware drafting, draft config collapse fixes, CUDA graph capture progress |
| **Kernel-Level Optimization** | vLLM, llama.cpp | Intel XPU fused QK-norm+RoPE+gate kernels, Triton JIT warmup parallelization |
| **Memory & Batching Efficiency** | SGLang, LiteLLM | Shared byte budgeting, sharded KV pools, unified hybrid-SWA memory |
| **Quantization & Memory Layout** | vLLM, llama.cpp | NVFP4 MoE `input_scale` handling, improved q4_K/q5_K alignment |

> ⚙️ *Trend*: The frontier is shifting from raw throughput to **predictable, deterministic behavior under complex configurations**—especially in distributed setups.

---

### **5. Layer Positioning**

| Project       | Layer Position                     | Core Differentiation |
|---------------|------------------------------------|------------------------|
| **vLLM**      | High-performance inference engine  | Industry standard for speculative decoding, DFlash/DSpark, MRV2 |
| **SGLang**    | Distributed inference + agent runtime | Native support for HiCache, semantic reuse, PD disaggregation |
| **llama.cpp** | Local, cross-platform inference runtime | Lightweight, supports SYCL/Vulkan/Metal, strong CPU optimization |
| **Ollama**    | Developer-friendly local gateway     | Desktop agent integrations (Genie, Clips Kitty), simple CLI UX |
| **LiteLLM**   | Universal AI API gateway           | Cloud-agnostic routing, Rust migration, secure signing, provider extensibility |
| **Unsloth**   | Fine-tuning & agent training platform | Agent profiles, RAG workflow stabilization, CLI/Studio UX focus |

> 🧩 *Strategic Insight*: vLLM and SGLang are converging on the **inference engine layer**; LiteLLM and Ollama occupy **gateway/abstraction**; Unsloth owns **training-to-agent** workflows.

---

### **6. Trend Signals**

#### ✅ **Key Industry Trends Extracted:**
1. **Agent-Centric Infrastructure Is Now Mainstream**  
   - SGLang’s semantic caching, LiteLLM’s MCP guardrail gaps, and Unsloth’s agent profiles signal that **real-time, stateful agents** are driving infrastructure evolution.
   
2. **Hardware Diversity Demands Deep Integration**  
   - Intel XPU (vLLM, Unsloth), AMD ROCm (Unsloth), Ascend NPU (SGLang), and ARM64 (Unsloth) highlight that **platform-specific kernels and installers** are now non-negotiable.

3. **Security & Trust Are Becoming Non-Functional Requirements**  
   - LiteLLM’s use of **Cosign-signed Docker images** and vLLM’s breaking change warnings reflect growing pressure to ensure supply-chain integrity.

4. **Speculative Decoding Is Maturing Beyond Proof-of-Concept**  
   - vLLM’s top-k/p-aware drafting and CUDA graph capture indicate that **drafting is now production-ready** for chat and agent workloads.

5. **Stability Over Novelty Is the New Priority**  
   - Despite innovation, **critical regressions** (e.g., vLLM hangs, Ollama image crashes) dominate issue trackers — suggesting that **reliability at scale** is the next frontier.

#### 📌 **What Application Developers Should Watch:**
- **Avoid `dev-dsv41`, `nightly`, or `b10948+` builds in production** until stability fixes land (SGLang, llama.cpp).
- **Audit model input types** (especially numbers > int64) — Qwen3-Coder bugs show structured output risks.
- **Prepare for Rust-based gateways** — LiteLLM’s migration could redefine low-latency proxy performance.
- **Monitor GPU driver-level issues** (SYCL TDR, Metal OOM) when deploying on Intel Arc or Apple Silicon.
- **Leverage cache observability** (SGLang’s metrics dashboard) and **semantic reuse** for cost-effective, scalable agent systems.

> 🛠️ **Bottom Line**: The era of "just run an LLM" is over. Today’s infrastructure demands **deep validation, cross-layer coordination, and proactive monitoring** — especially as agents become mission-critical components.

---  
*Compiled from GitHub activity (2026-09-14) — Data-driven insights for infrastructure engineers and technical decision-makers.*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest — 2026-09-14

---

### **1. Today's Highlights**  
The vLLM project continues to advance its speculative decoding and model runner V2 (MRV2) infrastructure, with key fixes addressing KV-cache corruption and correctness issues in DFlash/DSpark under complex configurations like PCP+DCP. Critical stability improvements include a fix for stale HPC QK-norm weights after weight refit and a patch to prevent dummy draft steps from writing invalid KV data in data-parallel setups. Meanwhile, new support is emerging for hybrid GDN/Mamba models and enhanced prefix caching across distributed deployments.

---

### **2. Releases & Breaking Changes**  
No new releases were published in the last 24 hours.  

However, several PRs indicate upcoming breaking changes:
- `--enable-prompt-embeds` will now be rejected for encoder-only models (#55233), preventing silent failures during warmup.
- A fix has been merged for DeepSeek-V4-Pro startup errors requiring expert parallelism (#55914), which may affect existing launch scripts without `--enable-expert-parallel`.

> 🔗 [PR #55233](https://github.com/vllm-project/vllm/pull/55233) | [PR #55914](https://github.com/vllm-project/vllm/pull/55914)

---

### **3. New Model & Hardware Support**  
- **Model**: Added support for `DeepSeek-V4-Flash-Vision-Exp` via LoRA request (#55683), pending integration.
- **Hardware**: Continued expansion of Intel GPU (XPU) support with fused QK-norm+RoPE+gate Triton kernel enabled on Arc Pro B70 (#53989).
- **Backends**: Ongoing work to extend KV-cache update extraction across all attention backends, including AiterFlashAttention (#32335).
- **Quantization**: NVFP4 MoE support remains active; missing `input_scale` handling is being addressed to avoid NaN outputs (#45212).

> 🔗 [Issue #55683](https://github.com/vllm-project/vllm/issues/55683) | [PR #53989](https://github.com/vllm-project/vllm/pull/53989) | [Issue #32335](https://github.com/vllm-project/vllm/issues/32335)

---

### **4. Performance & Optimization**  
Significant performance work focused on speculative decoding and CUDA graph optimization:
- **DFlash/DSpark**: Fixes to collapse DCP with PCP when deriving draft configs (#56723), enabling higher concurrency.
- **Speculative Decoding**: Drafting within top-k/top-p constraints now supported (#56724), improving efficiency for chat clients like Qwen3.5.
- **Kernel Optimization**: Parallelized mHC pre-norm JIT warmup using `par_compile()` improves compile time for large models (#56683).
- **CUDA Graphs**: Full CUDA graph capture for microbatched steps (DBO) in MRV2 is progressing toward production readiness (#51700).

> 🔗 [PR #56723](https://github.com/vllm-project/vllm/pull/56723) | [PR #56724](https://github.com/vllm-project/vllm/pull/56724) | [PR #56683](https://github.com/vllm-project/vllm/pull/56683) | [PR #51700](https://github.com/vllm-project/vllm/pull/51700)

---

### **5. Stability & Regressions**  
Critical stability issues reported today:

| Severity | Issue | Summary | Fix Status |
|--------|------|--------|-----------|
| 🟠 High | [#56370](https://github.com/vllm-project/vllm/issues/56370) | Batch invariance broken with sequence parallelism + async TP (`VLLM_BATCH_INVARIANT=1`) | ✅ PR pending |
| 🟠 High | [#56605](https://github.com/vllm-project/vllm/issues/56605) | GLM-5.3-Flash produces "word salad" in multi-turn agent use | ❌ No fix yet |
| 🟡 Medium | [#54094](https://github.com/vllm-project/vllm/issues/54094) | Zero prefix-cache reuse with DFlash2 + YaRN at 1.04M context | ⚠️ Investigation ongoing |
| 🟡 Medium | [#54691](https://github.com/vllm-project/vllm/issues/54691) | DFlash spec decode becomes net slowdown at 185k context due to full KV re-scan | ⚠️ Root cause identified |
| 🔴 Critical | [#17676](https://github.com/vllm-project/vllm/issues/17676) | vLLM hangs indefinitely waiting for engine process start | ❌ No fix yet |

> 🔗 [Issue #56370](https://github.com/vllm-project/vllm/issues/56370) | [Issue #56605](https://github.com/vllm-project/vllm/issues/56605) | [Issue #54094](https://github.com/vllm-project/vllm/issues/54094) | [Issue #54691](https://github.com/vllm-project/vllm/issues/54691) | [Issue #17676](https://github.com/vllm-project/vllm/issues/17676)

---

### **6. What This Means for Application Developers**  
- **Avoid `--enable-prefix-caching` on hybrid GDN/Mamba models** until #56646 is resolved—this can cause crashes in multi-node TP setups.
- **Do not rely on deterministic throughput with speculative decoding** if using temperature=0 and fixed seed—run-to-run variance is confirmed (#53436).
- **Use `--enable-prompt-embeds` only with decoder-only models**; encoder-only models will fail silently otherwise (#55233).
- **Expect improved speculative decoding performance** with upcoming MRV2 features: top-k/p-aware drafting (#56724) and better DFlash/DSpark integration.
- **Monitor for silent output corruption on Intel XPU** (e.g., endless "!" tokens) under sustained load (#53480); consider disabling concurrent decode temporarily.

> 💡 Pro Tip: For long-context applications, test with both DFlash2 + YaRN and prefix caching disabled until #54094 is patched. Use `vllm collect_env.py` to validate your runtime environment before scaling.

---  
*Data sourced from GitHub: [vllm-project/vllm](https://github.com/vllm-project/vllm)*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-09-14**

---

### **1. Today's Highlights**  
The SGLang ecosystem continues to mature with active development in high-priority areas: **DeepSeek-V4.1 support is now in PR (#38798)**, and significant work on **cache locality observability and hierarchical HiCache improvements** (PRs #39325–#39327, #37507) enables better performance visibility for large-scale deployments. Critical stability fixes are underway for **CUDA coredumps (#26340)** and **request lifecycle handling**, particularly around client disconnects and health-check timeouts.

---

### **2. Releases & Breaking Changes**  
*No new releases in the past 24 hours.*  
However, ongoing changes may impact users deploying `sglang:dev-dsv41` or `nightly` images:
- **Client disconnect handling** now risks crashes due to uncaught `asyncio.CancelledError` (#39216).
- The `/health` endpoint may leak requests under timeout conditions, leading to resource exhaustion (#35884).

> 🔗 [Issue #35884](https://github.com/sgl-project/sglang/issues/35884) | [Issue #39216](https://github.com/sgl-project/sglang/issues/39216)

---

### **3. New Model & Hardware Support**  
- ✅ **DeepSeek-V4.1** support is actively being added via PR #38798, including native model class registration and tokenizer integration.
- 📌 **SenseNova-U1/U1.5** support is now tracked officially (#37742), with roadmap aligned to OpenSenseNova’s reference implementation.
- ⚠️ **Ascend NPU** support for DeepSeek V4 remains incomplete; no official documentation or tutorials yet (#29599).
- 🛠️ **Intel CPU backend** progress continues toward production-grade single-node serving in Q2 2026 (#24921).

> 🔗 [PR #38798](https://github.com/sgl-project/sglang/pull/38798) | [Issue #37742](https://github.com/sgl-project/sglang/issues/37742) | [Issue #29599](https://github.com/sgl-project/sglang/issues/29599)

---

### **4. Performance & Optimization**  
- **HiCache L2/L3 enhancements**: Unified radix-cache metrics per rank (#39280), request-attempt-scoped prefetch state (#39318), and cache-locality dashboard updates (#39325–#39327) improve debugging and scalability.
- **Memory pooling optimizations**: Shared byte budget for unified hybrid-SWA memory (#36729) and sharded KV pools (#37615) aim to reduce fragmentation and improve utilization.
- **Semantic KV reuse**: PR #31057 introduces pluggable fuzzy-match radix backend for meaning-based cache sharing across paraphrased prompts — a major step toward efficient RAG and multi-user workloads.
- **EAGLE verify accuracy**: PR #39253 addresses benchmark accuracy gaps by enabling temperature sampling during verification.

> 🔗 [PR #31057](https://github.com/sgl-project/sglang/pull/31057) | [PR #39253](https://github.com/sgl-project/sglang/pull/39253) | [PR #36729](https://github.com/sgl-project/sglang/pull/36729)

---

### **5. Stability & Regressions**  
- **Critical CUDA coredump tracker**: Issue #26340 reports widespread auto-collected coredumps from CI (`pr-test.yml`) — likely tied to recent GPU kernel changes; requires urgent investigation.
- **Request starvation in PD disaggregation**: DeepSeek-V4 hybrid SWA pool can silently starve when budget exceeds capacity (#31205); currently unresolved.
- **Client disconnect crash**: Unhandled `CancelledError` causes engine-wide failure (#39216); patch needed before deployment.
- **Health check timeout leaks**: Orphaned health-check requests pile up and crash paged-prefill batching (#35884).
- **Image placeholder parsing error**: User text containing `<｜deepseek_image｜>` is rejected even if not intended as a placeholder (#39274).

> 🔗 [Issue #26340](https://github.com/sgl-project/sglang/issues/26340) | [Issue #31205](https://github.com/sgl-project/sglang/issues/31205) | [Issue #39216](https://github.com/sgl-project/sglang/issues/39216) | [Issue #35884](https://github.com/sgl-project/sglang/issues/35884) | [Issue #39274](https://github.com/sgl-project/sglang/issues/39274)

---

### **6. What This Means for Application Developers**  
- **Use caution with `dev-dsv41` and nightly builds**: Known issues with client disconnects, health checks, and image token parsing could break production workflows.
- **Leverage upcoming cache observability**: The new `/metrics` and Grafana dashboard stack will allow fine-grained tuning of cache affinity and locality in distributed setups.
- **Prepare for semantic caching**: The fuzzy-match radix backend (#31057) enables smarter reuse in RAG, multi-turn agents, and high-throughput inference — ideal for cost-sensitive applications.
- **Monitor for regression hotspots**: If using PD disaggregation with DeepSeek-V4 or Qwen3-VL, be aware of known starvation and video frame double-sampling bugs (#31205, #31200).
- **Expect faster model rollout**: With DeepSeek-V4.1 and SenseNova-U1 support in flight, expect broader model coverage soon — ideal for multi-vendor AI agent backends.

> 🔗 [All Issues](https://github.com/sgl-project/sglang/issues) | [All PRs](https://github.com/sgl-project/sglang/pulls)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# **llama.cpp Digest – 2026-09-14**

---

### **1. Today's Highlights**  
The latest updates focus on backend stability and correctness, particularly in SYCL, Vulkan, and Metal. Critical fixes address GPU driver TDR resets (SYCL), queue submission races (Vulkan), and zero-divisor crashes in MoE models. New PRs introduce thread-local buffers for CPU performance and improve grammar parsing speed by up to 1.3×.

---

### **2. Releases & Breaking Changes**  
No new tagged releases were published today. However, several commits address critical runtime issues:
- **`b10948`**: Excludes `HY_V4` from WebGPU tests due to instability ([PR #28855](https://github.com/ggml-org/llama.cpp/pull/28855)).
- **`b10947`**: Guards against zero divisor in expert FFN size fallback for *Nemotron-H* models ([PR #28779](https://github.com/ggml-org/llama.cpp/pull/28779)).
- **`b10946`**: Adds safety guards for VXE-only repack helpers on s390x ([PR #28775](https://github.com/ggml-org/llama.cpp/pull/28775)).

> ⚠️ **Migration Note**: Users of `Nemotron-3-Nano-30B-A3B` or `HY_V4`-based models should ensure they are not relying on unguarded expert FFN size calculations.

---

### **3. New Model & Hardware Support**  
- **New Model**: Added support for **DeepSeek-V4.1-Flash** (`DeepseekV41ForCausalLM`) via conversion script ([PR #28696](https://github.com/ggml-org/llama.cpp/pull/28696)).
- **Hardware/Backend**: 
  - Added `nrc = 2` testing for ARM architectures ([PR #28850](https://github.com/ggml-org/llama.cpp/pull/28850)).
  - Extended CI coverage for `s390x` without VXE intrinsics ([PR #28776](https://github.com/ggml-org/llama.cpp/pull/28776)).
- **Quantization**: No new quant types introduced; improvements to existing ones via alignment rules.

---

### **4. Performance & Optimization**  
- **CPU**: Thread-local buffer allocation in `ggml-cpu` reduces false sharing, improving multi-threaded throughput ([PR #28861](https://github.com/ggml-org/llama.cpp/pull/28861)).
- **Grammar Parsing**: Single lookup optimization yields **1.2–1.3× speedup** in token generation for structured outputs ([PR #26885](https://github.com/ggml-org/llama.cpp/pull/26885)).
- **Memory**: Improved row-alignment rule applied to `q4_K`, `q5_K`, and `q8_0` — aligns with `q6_K` behavior ([PR #28575](https://github.com/ggml-org/llama.cpp/pull/28575)).

---

### **5. Stability & Regressions**  
Critical regressions reported today:
1. **SYCL TDR Reset**: Dual Intel Arc B70 GPUs crash with `VIDEO_TDR_TIMEOUT_DETECTED` when loading draft models ([Issue #28778](https://github.com/ggml-org/llama.cpp/issues/28778)).  
   → *Fix pending; workaround: avoid `--model-draft` on SYCL.*
2. **Vulkan Queue Race**: Simultaneous queue submissions can break internal sync — mitigated with mutex lock ([Issue #28830](https://github.com/ggml-org/llama.cpp/issues/28830)).  
   → *Fixed in `b10938`; confirmed stable.*
3. **Metal OOM Crash**: Server reports "model loaded" after fatal Metal OOM, then returns 500s on every request ([Issue #27309](https://github.com/ggml-org/llama.cpp/issues/27309)).  
   → *No fix yet; monitor for `ggml_metal_init` error propagation.*

> 🔴 **High Priority**: Avoid `--model-draft` on SYCL with dual Arc Pro B70 until fix lands.

---

### **6. What This Means for Application Developers**  
- **Use `b10948+`** if running Qwen3-Coder or Nemotron-H models — avoids potential zero-divide crashes.
- **Avoid `HY_V4` on WebGPU** — test environments should exclude it until the issue is resolved.
- **Leverage improved grammar parsing** for agents using structured output formats (e.g., JSON, code).
- **Watch out for SYCL crashes** when using draft models on Intel Arc hardware — consider fallback to CUDA/Vulkan.
- **Enable `LOG_JSON` macro** (new in `b10935`) for better observability in production logging pipelines.

> ✅ **Recommendation**: Update to latest commit (`b10948`) and audit all model-serving workflows involving `--model-draft`, `--mmproj`, or vision-enabled models.

---  
🔗 [GitHub Repository](https://github.com/ggml-org/llama.cpp) | 📊 [Attestations](https://github.com/ggml-org/llama.cpp/attestations) | 🌐 [Official Site](https://llama.app)

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-09-14**

---

### **1. Today's Highlights**  
The Ollama ecosystem continues to expand its support for multimodal and cloud-native workflows, with new integrations like Genie (macOS) and Clips Kitty (Windows) enriching the desktop agent landscape. Critical stability issues have emerged around model parsing correctness (Qwen3-Coder tool args), image handling on Windows (Gemma 4), and memory management on resource-constrained edge devices (Jetson Orin Nano). These highlight ongoing challenges in maintaining cross-platform consistency and robustness under complex inference workloads.

---

### **2. Releases & Breaking Changes**  
*No new releases or breaking changes detected in the past 24 hours.*

---

### **3. New Model & Hardware Support**  
- **New Model Requests**:  
  - [SARVAM-30b and 105b](https://github.com/ollama/ollama/issues/14319) requested for inclusion.  
  - [Gnani Evon-v3.3](https://github.com/ollama/ollama/issues/18427) added to community feature requests.  
- **Hardware & Backend**:  
  - **Integrated Vulkan GPU support** restored via PR [#18124](https://github.com/ollama/ollama/pull/18124), fixing regression in VM environments (e.g., Virtio-GPU/Venus).  
  - **Jetson Orin Nano 8GB** now under scrutiny for OOM crashes during multimodal projection (Gemma 4 E4B); not yet resolved but actively reported ([#18396](https://github.com/ollama/ollama/issues/18396)).

---

### **4. Performance & Optimization**  
- **Quantization Cleanup**: PR [#18424](https://github.com/ollama/ollama/pull/18424) introduces cleanup of intermediate F16 blobs post-quantization, preventing massive disk bloat (e.g., 830 GB unreferenced blobs observed).  
- **Memory Efficiency**: Focus on reducing storage footprint from `create --quantize` operations; long-term impact expected on local model management.  
- **Tool Schema Consistency**: Fixes underway to prevent prompt cache misses due to randomized schema key order ([#18430](https://github.com/ollama/ollama/issues/18430)).

---

### **5. Stability & Regressions**  
| Severity | Issue | Link | Status |
|---------|------|------|--------|
| 🔴 High | `qwen3-coder:30b` tool parser corrupts `number` arguments outside `int64` range (e.g., `1e20` → `9223372036854775807`) | [#18421](https://github.com/ollama/ollama/issues/18421) | ✅ Fix PR submitted: [#18422](https://github.com/ollama/ollama/pull/18422) |
| 🔴 High | `gemma4` fails to process images on Windows; returns "cannot see JPEG" despite correct attachment | [#17778](https://github.com/ollama/ollama/issues/17778) | ❌ No fix yet |
| 🟡 Medium | `kimi-k3:cloud` crashes on image content in `tool-role` messages (regression from `kimi-k2.6`) | [#18426](https://github.com/ollama/ollama/issues/18426) | ❌ No fix yet |
| 🟡 Medium | Jetson Orin Nano 8GB OOMs during Gemma 4 E4B multimodal projector load despite CPU-projector config | [#18396](https://github.com/ollama/ollama/issues/18396) | ❌ No fix yet |
| 🟡 Medium | `qwen3.8` reports `no user query found in messages` error during chat streaming (status 500) | [#17778](https://github.com/ollama/ollama/issues/17778) | ❌ No fix yet |
| 🟡 Medium | `JSON reply schema ignored` by `qwen3-coder:480b-cloud` — response deviates from defined schema | [#12362](https://github.com/ollama/ollama/issues/12362) | ❌ No fix yet |

> ⚠️ Multiple regressions affecting cloud models and edge hardware suggest a growing complexity surface in distributed and heterogeneous inference environments.

---

### **6. What This Means for Application Developers**  
- **Use caution with Qwen3-Coder tools**: Avoid passing `number` values beyond `int64` range (e.g., `1e20`) until PR [#18422](https://github.com/ollama/ollama/pull/18422) lands — otherwise, your app may receive incorrect or truncated values.  
- **Avoid `kimi-k3:cloud` and `gemma4` with images on Windows** until fixes are released — expect silent failures or crashes.  
- **Monitor disk usage**: The quantization blob leak issue ([#18424](https://github.com/ollama/ollama/pull/18424)) can cause severe storage bloat; clean up manually if needed.  
- **Cloud model reliability**: Expect inconsistent behavior when using JSON schemas or system-role messages inside `messages` (`anthropic-compat` endpoint) — these are being hoisted and breaking cache semantics ([#18431](https://github.com/ollama/ollama/issues/18431)).  
- **Integrate with emerging agents**: Consider leveraging new desktop tools like [Genie](https://github.com/ollama/ollama/pull/18428) and [Clips Kitty](https://github.com/ollama/ollama/pull/18423) for local AI-powered productivity workflows.

> 💡 **Recommendation**: For production-grade apps, stick to well-tested local models (e.g., `qwen3-coder:30b`, `phi3-mini`) and avoid cloud variants with known instability until patches are merged.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-09-14**

---

### **1. Today’s Highlights**  
The LiteLLM ecosystem continues its momentum toward high-performance, secure AI infrastructure with the release of `v1.102.0-rc.1`, now cryptographically signed via Cosign for trust and integrity. The most significant development is the ongoing **Rust migration initiative** (Issue #31263), aiming to deliver sub-1ms overheads and position LiteLLM as the fastest, lightest AI gateway. Critical fixes have also landed around streaming reliability, budget accounting, and provider-specific edge cases—especially in Anthropic/Vertex AI integrations.

---

### **2. Releases & Breaking Changes**  
- **`v1.102.0-rc.1`** released today with enhanced security: all Docker images are now signed using [Cosign](https://docs.sigstore.dev/cosign/overview/) via the key established in [commit `0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0).  
  🔐 *Verify signatures using:* `cosign verify --key <key> <image>`  
- No breaking API changes reported in this release cycle; however, expect upcoming shifts during the **Rust migration** (see below).

---

### **3. New Model & Hardware Support**  
- **Kimi-K2.7-Code** added to Azure support via PR #32613 (Microsoft Foundry deployment).  
  📌 *Relevant Issue:* [#32613](https://github.com/BerriAI/litellm/issues/32613)  
- **Nanobridge** now supported as an OpenAI-compatible provider (PR #29591).  
  📌 *Relevant PR:* [#29591](https://github.com/BerriAI/litellm/pull/29591)  
- **CometAPI** expanded to cover image, audio, and moderation endpoints (PR #29580).  
  📌 *Relevant PR:* [#29580](https://github.com/BerriAI/litellm/pull/29580)

---

### **4. Performance & Optimization**  
- **Rust Migration Initiative** (#31263) launched as a top priority: target is sub-1ms overheads and minimal memory footprint. Early Beta signups open via [Google Form](https://docs.google.com/forms/d/e/1FAIpQLSecWdOjkzjEson2UiZpD...).  
  🚀 *Expected impact:* Near-zero latency overhead in inference routing, ideal for agent systems and real-time LLM applications.  
- **Valkey Semantic Cache Fix** (#32324): resolves duplicate `**kwargs` forwarding that caused incorrect embedding caching behavior.  
  📌 *Fix PR:* [#32324](https://github.com/BerriAI/litellm/pull/32324)  
- **Bedrock Mantle IAM Auth** (#29711): enables SigV4/IAM role-based auth for `/openai/v1/responses`, critical for secure EKS/ECS deployments.  
  📌 *Fix PR:* [#29711](https://github.com/BerriAI/litellm/pull/29711)

---

### **5. Stability & Regressions**  
| Severity | Issue | Summary | Fix Status |
|---------|-------|--------|-----------|
| ⚠️ High | #40583 ([Bug]: Guardrails miss MCP tools in Anthropic `/v1/messages`) | Pre-call guardrails fail to inspect or block MCP tools when using Anthropic’s new endpoint format. | ❌ Pending |
| ⚠️ High | #40471 ([Bug]: `reasoning_effort=xhigh` silently downgraded) | Unsupported effort levels are downgraded instead of rejected—risking silent misbehavior. | ❌ Pending |
| ⚠️ Medium | #39354 ([Bug]: Responses-to-Chat bridge forwards dict-form `reasoning_effort`) | Strict providers (e.g., Codex CLI) reject requests due to malformed `reasoning_effort`. | ❌ Pending |
| ⚠️ Medium | #41026 ([Fix]: Fall back to call ID if provider returns `null` response.id) | Provider responses with `"id": null` cause spend logs to be dropped due to duplicate keys. | ✅ Fixed in PR #41026 |
| ⚠️ Medium | #41025 ([Fix]: Filter internal params at provider boundaries) | Internal parameters leaking into request bodies trigger Bedrock/Anthropic HTTP 400s. | ✅ Fixed in PR #41025 |
| ⚠️ Low | #40363 ([Bug]: Vertex AI Claude max_tokens defaults incorrectly) | Versioned IDs get 4096 default max_tokens; some models capped at 8192 instead of 64k. | ❌ Pending |

---

### **6. What This Means for Application Developers**  
- **Adopt early**: If you're building agents or low-latency services, consider joining the **Rust migration beta** (Issue #31263) for future performance gains.  
- **Secure your proxy**: Use signed Docker images (`cosign verify`) to prevent supply-chain tampering.  
- **Watch out for model compatibility**: Anthropic’s `/v1/messages` and MCP tooling are still fragile—guardrails may not catch malicious inputs.  
- **Avoid billing blind spots**: Budget reservations can fail silently if cost cannot be estimated (#35524); validate pricing maps (e.g., DashScope Qwen models missing pricing in #29922).  
- **Use updated SDKs**: Ensure you’re on `v1.102.0-rc.1` to benefit from stability fixes in streaming (`#31332`), spending logging (`#41026`), and parameter sanitization (`#41025`).  

👉 *Stay ahead*: Monitor [GitHub Issues #31263](https://github.com/BerriAI/litellm/issues/31263) and [PR #41026](https://github.com/BerriAI/litellm/pull/41026) for real-time updates.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-09-14**

---

### **1. Today's Highlights**  
The Unsloth ecosystem continues to evolve with a focus on improving stability, developer experience, and RAG capabilities. Key developments include critical fixes for Intel XPU Triton handling, persistent issues in model training configuration (notably `max_seq_length` deprecation), and growing momentum around agent-centric features in Studio. Notably, PR #10861 resolves a long-standing SQLite compatibility issue affecting dense retrieval in RAG workflows.

---

### **2. Releases & Breaking Changes**  
No new releases were published in the last 24 hours. However, a breaking change has been reported in the latest Docker image (`2026.9.4`):  
- `SFTConfig.__init__()` now rejects `max_seq_length`, which has been renamed to `max_length`.  
  🔗 [Issue #10785](https://github.com/unslothai/unsloth/issues/10785) | [Fix pending in PR #10839]  

Developers using custom SFT configs must update their code accordingly to avoid runtime errors.

---

### **3. New Model & Hardware Support**  
- **AMD ROCm**: PR #9316 improves AMD GPU detection by querying HIP directly for LUIDs, enhancing VRAM monitoring accuracy on Windows.  
  🔗 [PR #9316](https://github.com/unslothai/unsloth/pull/9316)  
- **Intel XPU**: Installer fixes continue to address silent failures in Triton replacement (`setup.ps1:4717`). Issue #10844 confirms partial resolution but highlights ongoing edge cases.  
  🔗 [Issue #10844](https://github.com/unslothai/unsloth/issues/10844)  
- **ARM64 Windows**: Desktop installer fails during PyArrow install despite CLI success — a known blocker for ARM64 users.  
  🔗 [Issue #10875](https://github.com/unslothai/unsloth/issues/10875)

---

### **4. Performance & Optimization**  
Significant performance improvements are being prioritized in core infrastructure:
- **Studio Update Speedup**: PR #10649 introduces dependency pass caching, skipping redundant steps when dependencies haven’t changed — reducing `studio update` time from ~60 seconds to sub-second on repeated runs.  
  🔗 [PR #10649](https://github.com/unslothai/unsloth/pull/10649)  
- **Llama.cpp & Whisper.cpp Validation**: PR #10648 eliminates unnecessary re-validation of prebuilt binaries on every update, cutting startup overhead by up to 60% on macOS and Windows.  
  🔗 [PR #10648](https://github.com/unslothai/unsloth/pull/10648)  
- **KV Cache Estimator Cleanup**: PR #8994 removes unused `ctx_checkpoints` term from VRAM estimation, simplifying memory budgeting logic.  
  🔗 [PR #8994](https://github.com/unslothai/unsloth/pull/8994)

---

### **5. Stability & Regressions**  
Critical regressions reported today:

| Severity | Issue | Description | Fix Status |
|--------|-------|-------------|------------|
| ⚠️ High | #10806 | GPU idle during Qwen3.5-9B LoRA training due to autotune key rebuild on every launch (B200). | In progress |
| ⚠️ High | #946 | Single-token classification loss collapses to zero during Phi3.5 fine-tuning. | No fix yet |
| ⚠️ Medium | #10355 | `--tensor-split` flag ignored silently. | No fix yet |
| ⚠️ Medium | #10853 | Local HF-cache models fail to train due to missing weight filename (`model-00000-of-00001.safetensors`) in allowlist. | Closed with workaround |
| ⚠️ Low | #10877 | Missing UI fields for GPU split control; forces use of extra args. | Feature request open |

---

### **6. What This Means for Application Developers**  
- **RAG Applications**: The fix for SQLite KNN query limits (#10861) is essential for reliable dense retrieval in older environments. Ensure your RAG pipeline uses SQLite ≥3.41 or apply the patch.
- **Agent Builders**: Native agent profiles (Issue #10773) and folder-based projects (Issue #10873) signal a shift toward persistent, reusable agent configurations — expect deeper tool orchestration support soon.
- **CLI Users**: Be cautious with `max_seq_length` — it’s deprecated in favor of `max_length`. Update configs immediately to avoid breakage.
- **Cross-Platform Deployments**: ARM64 and Intel XPU users should monitor installer issues closely; current behavior may block production deployments.

> 💡 **Pro Tip**: Use `--no-validate` flags temporarily during development if validation steps cause delays, especially on slow networks or disk-bound systems.

---  
*Digest compiled from GitHub activity (unslothai/unsloth) — 2026-09-14.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*