# AI Infrastructure Digest 2026-09-02

> Generated: 2026-09-02 00:29 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-09-02**

---

### **1. Ecosystem Overview**  
The AI inference and serving ecosystem in Q3 2026 is characterized by rapid convergence between high-performance engines, local runtime optimization, and agent-centric infrastructure. Projects are increasingly focused on **multi-modal support**, **speculative decoding stability**, and **distributed scalability**—with vLLM and SGLang leading in production-grade inference at scale. Meanwhile, llama.cpp and Ollama dominate the edge and developer-first space with strong Apple Silicon and GGUF integration. LiteLLM and Unsloth reflect a growing emphasis on **observability**, **security**, and **agent workflow fidelity**, signaling maturity beyond raw throughput.

---

### **2. Activity Comparison**  

| Project       | Open Issues (Critical + High) | PRs Merged (Last 24h) | Release Status        |
|---------------|-------------------------------|--------------------------|------------------------|
| **vLLM**      | 8 (5 Critical)                | 6                        | None                   |
| **SGLang**    | 5 (2 Critical)                | 7                        | None                   |
| **llama.cpp** | 4 (4 Critical)                | 5                        | No new release         |
| **Ollama**    | 5 (3 Critical)                | 5                        | v0.33.3-rc0 (RC)       |
| **LiteLLM**   | 6 (3 Critical)                | 6                        | v1.101.0-dev.1 & v1.99.0 |
| **Unsloth**   | 5 (2 High)                    | 4                        | None                   |

> ✅ **Insight**: vLLM and SGLang lead in active development velocity; Ollama’s RC release reflects imminent production rollout. LiteLLM maintains steady cadence with security-focused releases.

---

### **3. Model Support Race**  

| New Model / Architecture       | Project(s) with Support | Notable Features |
|----------------------------------|--------------------------|------------------|
| **Qwen3-VL / Qwen3.8 Flash Next** | vLLM, Ollama, llama.cpp | Full multimodal support, optimized BF16/NVFP4 paths |
| **Kimi K2.5 / GLM-V / GLM-5.3-Flash** | vLLM, llama.cpp | LoRA for towers/connector, hybrid attention |
| **Idefics3 (Vision-Language)**   | Unsloth (Feature Request) | Pending native fine-tuning pipeline |
| **Qwen4exp (Sparse Attention)**  | llama.cpp                | Gather-based decoding, direct PLE table access |
| **Mistral OCR / TTS Models**     | LiteLLM                  | Azure-hosted OCR, Voxtral TTS via API |
| **GraniteForCausalLM (IBM)**     | Ollama (Experimental)    | MLX backend support |
| **Doubao Embedding Vision**      | LiteLLM (Feature Request) | Missing implementation |

> 🏆 **Leader**: **vLLM** and **llama.cpp** are ahead in multi-model coverage, especially for cutting-edge Qwen variants and sparse architectures. **Ollama** leads in user-facing accessibility of new models (e.g., video input), while **LiteLLM** dominates model-agnostic routing.

---

### **4. Performance Frontier**  

| Optimization Focus           | Leading Projects               | Key Developments |
|-------------------------------|--------------------------------|------------------|
| **KV Cache Efficiency**       | vLLM, SGLang, llama.cpp        | Flat array scans (llama.cpp), PIECEWISE graph baking (vLLM), HiSparse/Weight Cache Daemon (SGLang) |
| **Speculative Decoding**      | vLLM, SGLang                   | Correct KV baking under PIECEWISE graphs (vLLM #54851), EAGLE logit pruning (SGLang #35546) |
| **Quantization & Kernel Fusion** | llama.cpp, SGLang, LiteLLM   | AVX2/VNNI fused dot products (llama.cpp), NVFP4 GEMMs (SGLang), FLUX.2 kernel fusion (SGLang) |
| **Distributed Serving**       | vLLM, SGLang                   | Multi-node TP stability fixes, `shm_broadcast` starvation (vLLM #51921), PD disaggregation (SGLang #30010) |
| **Memory & Offload Management** | Unsloth, Ollama, vLLM         | Smart offload planner tuning (Unsloth #9861), MTP CPU fallback bugs (Ollama #18186), PLE offload deadlock (vLLM #53960) |

> 🔥 **Trend**: **MoE optimization** and **context-length-aware scheduling** are emerging as critical differentiators—especially in large-scale deployments.

---

### **5. Layer Positioning**  

| Project       | Primary Layer                     | Differentiating Strength |
|---------------|------------------------------------|---------------------------|
| **vLLM**      | High-Performance Inference Engine  | Production-grade distributed serving, speculative decoding, FlashInfer integration |
| **SGLang**    | High-Performance Inference Engine  | CUDA/ROCm kernel robustness, HiCache, PD disaggregation, advanced speculation |
| **llama.cpp** | Local Runtime / Edge Inference     | Apple Metal maturity, GGUF optimization, CPU/Metal performance focus |
| **Ollama**    | Developer Gateway / CLI Runtime    | Seamless GGUF model management, macOS-native video input, tooling UX |
| **LiteLLM**   | LLM Gateway / Proxy & Observability | Unified API routing, cost tracking, Datadog observability, SCIM sync |
| **Unsloth**   | Agent-Focused Training & Studio    | Tool-call safety, chat truncation handling, prompt injection hardening |

> 📌 **Positioning Insight**:  
> - **vLLM/SGLang** = Cloud-scale inference engines  
> - **llama.cpp/Ollama** = Edge/local dev stacks  
> - **LiteLLM** = Enterprise API abstraction layer  
> - **Unsloth** = Agent training and Studio experience

---

### **6. Trend Signals**  

#### 🔹 **Emerging Trends from Today’s Activity**:
1. **Speculative Decoding Stability is a Bottleneck**  
   Multiple critical regressions across vLLM and SGLang indicate that **speculative inference remains fragile at scale**, especially on Blackwell (`sm_121`) and B200 GPUs. Developers must treat speculative decoding as experimental in production until fixes land.

2. **Hardware Diversity is Driving Fragmentation**  
   Issues on Intel Arc (B50/B70), AMD MI300X/MI355, Lunar Lake iGPUs, and Apple A18 Pro highlight that **no single stack is universally stable**. Cross-platform testing is now non-negotiable.

3. **Security & Compliance Are Front-Loaded**  
   Signed Docker images (LiteLLM), prompt injection hardening (Unsloth), and DoS protection (vLLM) show that **supply chain integrity and runtime safety** are no longer afterthoughts.

4. **Agent Workflows Demand Full Stack Integration**  
   The rise of video input (Ollama), tool-call parsing (Unsloth), streaming reliability (LiteLLM), and cache reuse (llama.cpp) reveals that **agent apps require end-to-end coherence**—not just fast inference.

#### ✅ **What Application Developers Should Watch**:
- ⚠️ **Avoid speculative decoding on DGX Spark (sm_121) and B200** until vLLM/SGLang patches are applied.
- 🛑 **Audit GPU memory offloading logic**—Ollama’s `MTP CPU fallback` bug (#18186) and vLLM’s `PLE offload deadlock` (#53960) can silently degrade performance.
- 🔐 **Enforce secure tool-call parsing**—Unsloth’s recent RCE fix (#6967) is a warning: agent outputs must be sanitized.
- 📊 **Monitor streaming and billing accuracy**—LiteLLM’s open issues (#14457, #16582) could cause revenue leakage in production gateways.
- 🧪 **Test on diverse hardware**—Even mature projects like vLLM and SGLang have unpatched crashes on ROCm, XPU, and Apple Silicon.

---

> ✅ **Final Recommendation**: Prioritize **stability over feature velocity** in production deployments. Use **vLLM or SGLang for cloud inference**, **llama.cpp for edge**, **Ollama for prototyping**, and **LiteLLM for unified routing**—but always verify against known regressions before scaling.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-09-02**

---

### **1. Today's Highlights**  
The vLLM project continues to deepen its support for multi-modal and speculative inference, with key progress on Rust frontend parity and FlashInfer integration for multimodal models. Critical stability fixes were merged for **PIECEWISE CUDA graphs** in DSA models (e.g., DeepSeek-V3.2, GLM-5.x), resolving silent output corruption on multi-node TP deployments. Additionally, security hardening was applied to endpoint request limits across `/pooling`, `/score`, and `/classify`.

---

### **2. Releases & Breaking Changes**  
None. No new releases or breaking API/config changes were reported in the last 24 hours.

---

### **3. New Model & Hardware Support**  
- ✅ **Multi-modal support**: Expanded LoRA support for tower/connector in more MM models (tracked in [#31479](https://github.com/vllm-project/vllm/issues/31479)), including Kimi K2.5, Qwen3-VL, and GLM-V.  
- ✅ **Rust Frontend**: Now feature-parity tracked via [RFC #44280](https://github.com/vllm-project/vllm/issues/44280), enabling drop-in use with `VLLM_USE_RUST_FRONTEND=1`.  
- ✅ **Intel GPU (XPU)**: Active debugging of `zeMemOpenIpcHandle` errors on dual Arc B50 (Battlemage) systems ([#48953](https://github.com/vllm-project/vllm/issues/48953)).  
- ✅ **AMD ROCm**: CI improvements for MI300X/MI355 testing; ongoing work on host access to VMM allocations in sleep mode ([#51369](https://github.com/vllm-project/vllm/pull/51369)).

---

### **4. Performance & Optimization**  
- 🚀 **Speculative Decoding**: PR [#54851](https://github.com/vllm-project/vllm/pull/54851) enables correct KV cache baking into captured Triton kernels under PIECEWISE graphs — critical for low-latency DSA models on multi-node TP.  
- ⚙️ **Context-Length-Aware Scheduling**: RFC [#48627](https://github.com/vllm-project/vllm/issues/48627) proposes extending `num_speculative_tokens_per_batch_size` with context-length ranges for dynamic depth tuning.  
- 🔍 **FlashInfer Compilation**: PR [#38246](https://github.com/vllm-project/vllm/issues/38246) adds logging to avoid perceived hangs during long FlashInfer compilation phases.  
- 💡 **Dynamic SD (DSD)**: Benchmarks show a “baseline tax” in performance when using speculative schedules — tied to PIECEWISE override behavior ([#49986](https://github.com/vllm-project/vllm/issues/49986)).

---

### **5. Stability & Regressions**  
| Issue | Severity | Status | Fix PR | Notes |
|------|----------|--------|--------|-------|
| [#54521](https://github.com/vllm-project/vllm/issues/54521) | Critical | Open | None | Non-deterministic greedy decoding in `Qwen3.8-Flash-Next` near `indexer_budget` threshold due to sparse attention switching. |
| [#53960](https://github.com/vllm-project/vllm/issues/53960) | Critical | Open | None | `VLLM_PLE_CPU_OFFLOAD=1` deadlocks at kernel warmup on single-GPU (`TP=1`) setups. |
| [#51921](https://github.com/vllm-project/vllm/issues/51921) | Critical | Open | None | Engine stalls after 1 min idle on 4-node TP=4 (GB10/aarch64): scheduler blocked due to `shm_broadcast` writer starvation. |
| [#54317](https://github.com/vllm-project/vllm/issues/54317) | Critical | Open | None | Recurring CUDA illegal memory access on 4x B200 GPUs across multiple kernels (KDA linear-attention, MHC TileLang, TRT-LLM MoE). |
| [#53130](https://github.com/vllm-project/vllm/issues/53130) | High | Open | None | Scheduler halts admitting new requests once `running + skipped_waiting` hits `max_num_seqs`; only recoverable by restart. |
| [#52735](https://github.com/vllm-project/vllm/issues/52735) | High | Open | None | OffloadingConnector fails to serve when MTP/EAGLE speculative decoding is enabled on XPU. |

> 🔥 **Note**: Several high-severity issues impact production stability on GB10 (SM121), B200, and Intel Arc hardware — especially in multi-node and speculative inference scenarios.

---

### **6. What This Means for Application Developers**  
- ✅ **Use caution with speculative decoding** on `sm_121` (DGX Spark) and `b200` — known crashes with FlashInfer + MTP (`#37754`, `#35288`). Use Triton backend as fallback.  
- ✅ **Avoid `VLLM_PLE_CPU_OFFLOAD=1` on single-GPU setups** until fix lands (`#53960`).  
- ✅ **Ensure consistent `reasoning_effort` values** — client-side mismatches now handled gracefully via PR [#52739](https://github.com/vllm-project/vllm/pull/52739).  
- ✅ **Secure endpoints**: The fix for unbounded fan-out in `/pooling`, `/score`, etc. via PR [#53473](https://github.com/vllm-project/vllm/pull/53473) should be pulled immediately to prevent DoS risks.  
- ⚠️ **Multi-node deployments**: Avoid PIECEWISE graphs with DSA models unless using PR [#54851](https://github.com/vllm-project/vllm/pull/54851) — otherwise expect silent garbage output.  

> 📌 **Recommendation**: Audit all production services using `TP > 1`, speculative decoding, or CPU offload for these regressions. Prioritize upgrading to latest `main` if stability is critical.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-09-02**

---

### **1. Today's Highlights**  
The SGLang project continues to advance its high-performance inference stack with critical improvements in stability and scalability, particularly around **PD disaggregation**, **HiCache**, and **CUDA/ROCm kernel robustness**. Notably, a new PR (#37329) enhances CUDA graph and speculative execution output handling, while a high-severity ROCm bug (#37478) affecting large logits has been identified and is under investigation.

---

### **2. Releases & Breaking Changes**  
None reported in the last 24 hours. No new releases or breaking API/config changes.

---

### **3. New Model & Hardware Support**  
- **Ascend NPU**: PR #36426 adds proper support for `Qwen3.8-27B-W8A8` loading on Ascend NPU, fixing fused projection and vision encoder quantization issues.  
- **ROCm**: Issue #37478 highlights a critical bug in `IndexerKPool` where unbounded `fp8_mqa_logits` calls can cause process aborts on large tensors (>2 GiB).  
- **Diffusion Models**: PR #37422 introduces a new *cumulative three-tier quality contract* (`high`, `extra-high`, `lossless`) to decouple kernel fusions from model-specific approximations.  
- **Blackwell (SM12.0)**: PR #36865 adds KDA NVFP4 GEMM kernels for Qwen3.x, enabling optimized inference on next-gen GPUs.

---

### **4. Performance & Optimization**  
- **Speculative Decoding**: PRs #35546 and #35544 optimize EAGLE draft extension by pruning unused logits and amortizing ReplaySSM checkpoint materialization, reducing decode overhead.  
- **CUDA Graphs**: PR #37329 improves state capture accuracy by sizing decode graphs from actual token buckets and preserving custom tensor outputs across overlapping forwards.  
- **Memory Efficiency**: The **HiSparse** roadmap (#28874) and **Weight Cache Daemon** (Phase 1 landed in #27139) continue to drive low-memory decode for long-context models—weight load time dropped from ~327s to <1s on Qwen3-235B FP8.  
- **Kernel Fusion**: PR #37096 fuses FLUX.2 NVFP4 FC1 → SwiGLU → FC2 into a single path for `quality="high"`, improving throughput without sacrificing precision.

---

### **5. Stability & Regressions**  
- **Critical (ROCm)**: [#37478](https://github.com/sgl-project/sglang/issues/37478) — Unbounded `aiter.fp8_mqa_logits` call causes LLVM assertion failure and process abort when logits exceed 2 GiB on ROCm.  
- **High (CUDA)**: [#26340](https://github.com/sgl-project/sglang/issues/26340) — Auto-collected CUDA coredumps indicate recurring crashes; 285 comments suggest systemic instability in CI test runs.  
- **Medium (DP Disaggregation)**: [#30010](https://github.com/sgl-project/sglang/issues/30010) — Decode deadlock at high per-rank batch sizes due to CUDA graph contention in `flashinfer moeA2ACombineKernel`.  
- **Minor (Multimodal)**: [#29008](https://github.com/sgl-project/sglang/issues/29008) — FlashInfer MLA chunked prefix ragged prefill off-by-one crash during multimodal request processing.

> ✅ **Fixes in Progress**: PR #37494 addresses a missing radix lock skip in unified-cache cleanup; PR #37483 fixes PD decode preallocation polling behavior.

---

### **6. What This Means for Application Developers**  
- **Use caution with HiCache + long sessions**: Ensure you’re not hitting the `#cached-token: 0` issue (#35129) in agentic workflows—especially with DeepSeek-V4-Flash-0731.  
- **Avoid large logits on ROCm**: If using `IndexerKPool` with large sequences, expect crashes unless patched via #37478.  
- **Optimize speculative decoding**: Leverage PRs #35546 and #35544 to reduce memory and latency in draft extensions.  
- **Enable `quality="extra-high"`** for diffusion models to unlock fused kernels without compromising fidelity.  
- **Monitor PD disaggregation scaling**: High batch sizes may trigger deadlocks (#30010); consider tuning `--max-batch-size` or disabling CUDA graphs temporarily.  

> 📌 **Pro Tip**: Use `--grpc-mode` cautiously—issue #29957 reports potential deadlocks under sustained load. Test with `--disable-cuda-graphs` if stability is priority.

---  
*Data source: [github.com/sgl-project/sglang](https://github.com/sgl-project/sglang)*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-09-02**

---

### **1. Today’s Highlights**  
The latest development cycle centers on **Apple Metal backend maturity**, with new `metallib` xcframework support and targeted tuning for M2 Pro, M2 Max, and A18 Pro (MacBook Neo), significantly improving performance on Apple Silicon. Concurrently, key optimizations land in CUDA and CPU paths—most notably, a **MoE weighted expert fusion** that reduces global memory traffic, and AVX2/VNNI-accelerated quantized dot products—boosting inference efficiency across multiple hardware tiers.

---

### **2. Releases & Breaking Changes**  
No new releases were published today. However, several critical fixes and feature integrations are merged:  
- ✅ **Metal**: Added `metallib` build support for xcframework via [PR #28163](https://github.com/ggml-org/llama.cpp/pull/28163) (SDK 26+ only).  
- ✅ **Model Loading**: Fixed inconsistent `n_layer()` returns due to premature `hparams.n_layer_nextn` access ([PR #28159](https://github.com/ggml-org/llama.cpp/pull/28159)).  
- ⚠️ **Memory Safety**: Changed `state_write` from `GGML_ABORT` to `throw` on fragmented on-device state saves ([PR #28209](https://github.com/ggml-org/llama.cpp/pull/28209))—a non-breaking change but requires handling in client code.

---

### **3. New Model & Hardware Support**  
- **Models**:  
  - Added full support for **GLM-5.3-Flash (glm5next)**, including hybrid linear/sparse attention and vision tower ([PRs #27752, #27773, #27917, #27754](https://github.com/ggml-org/llama.cpp/pulls?q=glm5next)).  
  - Introduced **Qwen4exp** sparse attention via gather-based decoding and direct PLE table reads ([PRs #28213, #28136](https://github.com/ggml-org/llama.cpp/pulls?q=qwen4exp)).  
- **Hardware Backends**:  
  - **Apple Metal**: New fa-vec tuning profiles for **M2 Pro**, **M2 Max**, and **A18 Pro (MacBook Neo)** ([PRs #28122, #28152, #28015](https://github.com/ggml-org/llama.cpp/pulls?q=metal+fa-vec)).  
  - **CUDA/ROCm**: HIP now uses 64-row MMQ tiles on RDNA3.5 for better occupancy ([PR #28195](https://github.com/ggml-org/llama.cpp/pull/28195)).  
  - **SYCL**: Added support for limiting host-pinned memory to ≤2GB ([PR #27559](https://github.com/ggml-org/llama.cpp/pull/27559)).

---

### **4. Performance & Optimization**  
- **CUDA**: Fused MoE weighted expert reduction (`mul + view + add`) eliminates intermediate global memory writes—critical for reducing latency in MoE models like Qwen3.8-27B ([PR #25952](https://github.com/ggml-org/llama.cpp/pull/25952)).  
- **CPU**: AVX2 paths now leverage VNNI fused `madd_epi16 + add_epi32` via `vpdpwssd` instruction ([PR #28212](https://github.com/ggml-org/llama.cpp/pull/28212)), improving q4_K/q5_K dot product throughput.  
- **Metal**: `fa-vec` tuning for M2 Max (30 GPU cores) enables higher utilization; early benchmarks suggest up to **~20% decode speedup** at long context (130k tokens).  
- **KV Cache**: Replaced `std::set` walk with flat array scan in `get_prev_tokens()`—reducing CPU usage by ~17% at high context lengths ([PR #28128](https://github.com/ggml-org/llama.cpp/pull/28128)).

---

### **5. Stability & Regressions**  
High-severity issues reported today include:  
- 🔴 **SYCL Crash on Lunar Lake iGPU (Arc 140V)**: Device memory query fails via both Level Zero and SYCL APIs, causing abort at model load ([Issue #28134](https://github.com/ggml-org/llama.cpp/issues/28134)).  
- 🔴 **CUDA Lockups with Qwen3.8-27B under MTP + --split-mode tensor**: Reproducible GPU hang on RTX 5070TI ([Issue #27122](https://github.com/ggml-org/llama.cpp/issues/27122)).  
- 🔴 **Vulkan Pipeline Compile Hang on gfx1103 (RADV 780M)**: Server never reaches listening state due to pipeline compilation freeze ([Issue #27998](https://github.com/ggml-org/llama.cpp/issues/27998)).  
- 🔴 **Blackwell (sm_100) Decode Hang**: Qwen3.8-27B-NVFP4 hangs during decode with CPU spinning, no GPU activity ([Issue #27329](https://github.com/ggml-org/llama.cpp/issues/27329)).  

*Note: No PRs have been merged yet to resolve these; they represent active stability risks for production use.*

---

### **6. What This Means for Application Developers**  
- 🛠 **For Apple Silicon Users**: Expect improved performance and reduced memory overhead—especially on M2 Max/M2 Pro and upcoming A18 Pro devices—with new `metallib` support enabling native integration into iOS/macOS apps.  
- 📈 **For High-Context Applications**: Use `--kv-cache-disk` (if available) and prefer `fa-vec` tuned kernels for longer sequences. The flat-pos-array optimization will help maintain low-latency decode even at 130k+ tokens.  
- ⚠️ **For Production Deployments**: Avoid using `--split-mode tensor` with MoE or Qwen4exp models on CUDA until the known lockup and memory overflow bugs are patched. Monitor SYCL and Vulkan backends closely on newer Intel GPUs (Lunar Lake, Arc B70).  
- 💡 **For Agents & Reasoning Apps**: Enable `preserve_reasoning` by default (now auto-enabled) and consider leveraging **Self-Speculative Biased Decoding (SSBD)** ([PR #28138](https://github.com/ggml-org/llama.cpp/pull/28138)) for faster re-translation workflows.

> 🔗 [Full GitHub Repo](https://github.com/ggml-org/llama.cpp) | [Official Website](https://llama.app)

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-09-02**

---

### **1. Today's Highlights**  
The latest release, **v0.33.3-rc0**, introduces critical improvements in GGUF model parameter handling and updates core inference backends (MLX, MLX-C, llama.cpp). A major focus this week has been on stabilizing multi-modal support—especially for video input on macOS—while addressing high-severity regressions in GPU memory management and model offloading behavior.

---

### **2. Releases & Breaking Changes**  
- **v0.33.3-rc0**:  
  - ✅ **Honor GGUF-defined default parameters** — Model-specific sampler defaults (e.g., `temperature`, `top_p`) are now respected unless overridden via Modelfile or request. [PR #16471](https://github.com/ollama/ollama/pull/16471)  
  - 🔄 **MLX, MLX-C, and llama.cpp updated** to latest upstream revisions: `b10729` (llama.cpp), `c74db53` (MLX-C), and corresponding MLX backend patches. [PR #18160](https://github.com/ollama/ollama/pull/18160), [PR #18080](https://github.com/ollama/ollama/pull/18080)  
  - ⚠️ **No breaking API changes**, but users relying on model-level defaults should verify their Modelfiles or requests aren’t inadvertently overriding them.

---

### **3. New Model & Hardware Support**  
- **Qwen3.8 Flash Next**: Optimized for memory efficiency via BF16 for key projections and MXFP8 quantization of non-expert MTP paths. [PR #18078](https://github.com/ollama/ollama/pull/18078)  
- **GraniteForCausalLM**: Experimental support added for IBM’s Granite 4.1 series via MLX backend. [PR #17972](https://github.com/ollama/ollama/pull/17972)  
- **Video Input on macOS**: `/api/chat` and `/api/generate` now accept video inputs, decoding frames and audio for multimodal models like `qwen3-vl`. [PR #18179](https://github.com/ollama/ollama/pull/18179)  
- **MLX Backend Enhancements**: Improved context length enforcement and support for newer architectures.

---

### **4. Performance & Optimization**  
- **GPU Memory Efficiency**: Qwen3.8 Flash Next now avoids NVFP4 degradation during long generations by retaining critical layers in BF16. Expected to improve sustained throughput by ~15–20% under long-context loads.  
- **Prompt Evaluation Caching**: Cached prompt tokens are now reported in responses (`prompt_eval_cached_count`) and surfaced through OpenAI/Anthropic-compatible APIs. [PR #17943](https://github.com/ollama/ollama/pull/17943)  
- **Streaming Latency Fix**: Parser state is now flushed at end-of-stream, eliminating silent truncation of final output. [PR #18173](https://github.com/ollama/ollama/pull/18173)  
- **Keep-Alive Safety**: Prevents integer overflow in `keep_alive` durations that could cause immediate model unloading. [PR #18181](https://github.com/ollama/ollama/pull/18181)

---

### **5. Stability & Regressions**  
| Issue | Severity | Status | Notes |
|------|----------|--------|-------|
| [#18152](https://github.com/ollama/ollama/issues/18152) | Critical | Regression | GPU driver crash (`VIDEO_TDR_TIMEOUT_DETECTED`) on Windows + NVIDIA when switching from single-turn to multi-turn requests (0.32.15 → 0.33.0). No fix yet. |
| [#17833](https://github.com/ollama/ollama/issues/17833) | High | Regression | CPU spike (50–80%) despite full VRAM fit in v0.32.14. Likely tied to async scheduling. |
| [#17099](https://github.com/ollama/ollama/issues/17099) | High | Regression | `gemma4:31b` memory estimate inflated by ~1.2 GiB post-0.31.2 → generation drops from 33.8→4.7 tok/s. |
| [#14493](https://github.com/ollama/ollama/issues/14493) | Medium | Bug | Tool calling disabled and repetition penalties ignored in Qwen 3.5 27B. |
| [#18186](https://github.com/ollama/ollama/issues/18186) | Medium | Bug | MTP settings cause offloading to CPU even with sufficient VRAM (NVIDIA 5090). |

> 🔴 **Critical Note**: Multiple GPU-related regressions affecting performance and stability across Windows and macOS environments indicate a need for cautious upgrade testing.

---

### **6. What This Means for Application Developers**  
- ✅ **Leverage model-defined defaults** — Avoid hardcoding `temperature`, `top_p`, etc., if your GGUF models include metadata; Ollama will now honor them automatically.  
- 📹 **Build video-aware agents**: With video input support on macOS, you can now pass real-time video streams to models like `qwen3-vl` without preprocessing. Use `/api/chat` with `video` field.  
- ⚠️ **Avoid `keep_alive` values >~10^15 seconds** due to int64 overflow risk. Set realistic durations.  
- 🛠 **Handle silent fallbacks**: If you see unexpected CPU usage despite VRAM availability, check logs for `GPU-to-CPU fallback` warnings (currently only visible in debug mode). Consider adding explicit `num_gpu_layers` or `num_ctx` overrides.  
- 🧩 **Design for streaming completeness**: Ensure downstream apps consume entire stream response, as partial content may be buffered and lost if not flushed (fixed in PR #18173).

> 🔗 *Recommendation*: Monitor [issue #18152](https://github.com/ollama/ollama/issues/18152) closely if deploying on Windows/NVIDIA stacks. Consider pinning to v0.32.15 until resolution.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-09-02**

---

### **1. Today's Highlights**  
The LiteLLM project continues to strengthen its proxy and observability stack with critical fixes to streaming reliability, caching semantics, and cost accounting. Key PRs address long-standing issues in token tracking during early client disconnects and improve Datadog LLM observability by properly forwarding tool calls and cache metadata. Security remains a focus with verified Docker image signing via cosign across all releases.

---

### **2. Releases & Breaking Changes**  
- **v1.101.0-dev.1** and **v1.99.0** released (last 24h).  
- All Docker images are cryptographically signed using [cosign](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0), ensuring supply chain integrity.  
- No breaking API changes reported; migration notes not required for current release cycle.

---

### **3. New Model & Hardware Support**  
- ✅ **Mistral OCR models**: Support added for `azure/mistral-ocr-4-0` via Issue [#32033](https://github.com/BerriAI/litellm/issues/32033) and PR [#39229](https://github.com/BerriAI/litellm/pull/39229).  
- ✅ **Text-to-Speech (TTS)**: Added support for Mistral Voxtral TTS via PR [#38755](https://github.com/BerriAI/litellm/pull/38755).  
- ✅ **Volcanic Ark**: Feature request opened for `doubao-embedding-vision-251215` ([#29570](https://github.com/BerriAI/litellm/issues/29570)), pending implementation.  
- ✅ **Azure Storage**: Credential chain support now available for keyless deployments ([#39229](https://github.com/BerriAI/litellm/pull/39229)).

---

### **4. Performance & Optimization**  
- 📈 **Prometheus Metrics**: New gauges expose per-key and per-team rate limit usage (`allowed` and `used`) — enabling proactive alerting ([#39236](https://github.com/BerriAI/litellm/pull/39236)).  
- ⚡ **SCIM Efficiency**: Group member resolution reduced from N+1 queries to one lookup per member, drastically improving SCIM sync performance ([#39228](https://github.com/BerriAI/litellm/pull/39228)).  
- 🔍 **OCR Wire Format**: Payloads preserved as shared bytes instead of JSON strings, reducing serialization overhead and memory pressure ([#39235](https://github.com/BerriAI/litellm/pull/39235)).  
- 🔄 **Cost Map Recovery**: Boot-time fetches now retry transient failures, preventing stale config drops during network blips ([#39230](https://github.com/BerriAI/litellm/pull/39230)).

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Fix PR |
|--------|------|--------|--------|
| Critical | Streaming usage lost on early client disconnect ([#14457](https://github.com/BerriAI/litellm/issues/14457)) | Open | ❌ No fix yet |
| High | Spend log cleanup fails silently ([#16582](https://github.com/BerriAI/litellm/issues/16582)) | Open | ❌ No fix yet |
| High | `asyncio.CancelledError` bypasses retries/logging ([#22100](https://github.com/BerriAI/litellm/issues/22100)) | Open | ❌ No fix yet |
| Medium | `tiktoken.encode()` blocks liveness probes ([#26193](https://github.com/BerriAI/litellm/issues/26193)) | Open | ❌ No fix yet |
| Medium | Bedrock headers missing (`x-amzn-RequestId`) ([#38357](https://github.com/BerriAI/litellm/issues/38357)) | Open | ❌ No fix yet |
| Low | Infinite loop in `RecursiveCharacterTextSplitter` when `chunk_overlap >= chunk_size` ([#38980](https://github.com/BerriAI/litellm/issues/38980)) | Open | ❌ No fix yet |

> *Note: Several stability issues impact billing accuracy, streaming correctness, and system resilience—urgent attention recommended.*

---

### **6. What This Means for Application Developers**  
- **Billing Accuracy**: Be cautious with streaming requests — early disconnects may cause unrecorded usage. Monitor [#14457](https://github.com/BerriAI/litellm/issues/14457) for updates.  
- **Observability**: Upgrade to latest builds to get full tool call and cache telemetry in Datadog ([#39222](https://github.com/BerriAI/litellm/pull/39222)).  
- **Security & Compliance**: Use signed Docker images from v1.99.0 onward; verify signatures via [cosign](https://docs.sigstore.dev/cosign/overview/).  
- **Routing & Telemetry**: If using cascaded proxies, enable `forward_tags` and `session_id` propagation ([#31875](https://github.com/BerriAI/litellm/issues/31875)) to maintain routing fidelity.  
- **Rate Limiting**: Leverage new Prometheus metrics ([#39236](https://github.com/BerriAI/litellm/pull/39236)) for real-time SRE monitoring and alerting.

> **Actionable Tip**: Audit your deployment’s spend logging and streaming error handling today — several open issues could lead to revenue leakage or debugging blind spots.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

---

### **Unsloth Digest — 2026-09-02**

#### **1. Today's Highlights**  
The Unsloth ecosystem continues to evolve with a strong focus on Studio UX improvements and stability fixes for local inference, particularly around model state management, memory leaks, and multi-user support. Critical security hardening was introduced via PR #6967 to prevent prompt injection via unguarded tool-call parsing. Meanwhile, new PRs enhance multimodal agent workflows by enabling models to receive images from MCP tools (PR #10088) and preserve user input during chat truncation (PR #10165).

#### **2. Releases & Breaking Changes**  
*None* — No new releases or breaking API/config changes reported in the last 24 hours.

#### **3. New Model & Hardware Support**  
- **Idefics3 Architecture**: Feature request (#4079) for native support of Idefics3 (e.g., IBM Granite Docling VLM) is open; this would enable fine-tuning of vision-language models using Unsloth’s optimized training pipeline.
- **Qwen3-TTS**: Requested support (#3951, #3961) for fine-tuning Qwen3-TTS via Unsloth, with interest in adapting existing notebooks for audio tasks.
- **aarch64 Container Images**: A long-standing feature request (#4198) calls for official `aarch64` Docker images to simplify deployment on ARM-based clusters.
- **ROCm Stability**: Multiple issues (#9801, #8731, #7922) highlight ongoing challenges with ROCm on AMD GPUs (gfx1032/gfx1201), including crashes when VRAM is exceeded and CPU-only PyTorch installs due to missing ROCm version detection.

#### **4. Performance & Optimization**  
- **Smart Offload Planner Slower than `--fit on`**: Issue #9861 reports that the default smart offload planner (`-ot`) is slower than `--fit on` in 40/43 measured cases on a 6-core desktop (i5-12400F), suggesting suboptimal decisions for consumer-grade hardware.
- **KV Cache Sizing Improvements**: PR #9931 reworks VRAM budget estimation to reflect actual GPU-resident weights instead of GGUF file size, improving accuracy for models with host-stored embeddings (e.g., `token_embd`).
- **Fast Inference for LFM/Mamba Models**: Bug report #4073 indicates that `fast_inference=True` fails during state dict extraction for LFM2.5 models, blocking performance gains despite successful vLLM loading.
- **MLX Prompt Cache Reuse Failure**: Issue #10031 shows MLX backend fails to reuse prompt cache for `Qwen3.8-27B`, likely due to `ArraysCache` layout mismatch, impacting latency in repeated prompts.

#### **5. Stability & Regressions**  
| Severity | Issue | Description | Fix Status |
|--------|-------|-------------|------------|
| 🔴 High | #10156 | Memory leak during repeated Z-Image-Turbo generations causes linear RAM growth and eventual SIGKILL (RTX 4070 Ti). | Open |
| 🔴 High | #6967 | Two validated prompt-injection-to-RCE vulnerabilities due to markerless tool-call promotion (e.g., `call:NAME{...}` parsed anywhere). | PR merged (auto-review failed) |
| 🟡 Medium | #9861 | Smart offload planner underperforms vs. `--fit on` on consumer CPUs. | Open |
| 🟡 Medium | #9915 | Checkpoint compaction fires every turn on agent threads, causing sticky boundary failures. | Closed |
| 🟡 Medium | #7477 | Custom model settings ignored on auto-load in Studio. | Closed |
| 🟡 Medium | #9948 | Settings not saved across app restarts (system prompt, sampling, presets lost). | Closed |

#### **6. What This Means for Application Developers**  
- **Security First**: Avoid exposing unsanitized tool-call patterns in agent outputs—Unsloth Studio now enforces stricter parsing (PR #6967), so ensure your agent logic doesn’t rely on raw `call:` syntax.
- **Model State Management**: Be cautious with long chats involving images or tools—issues like #10165 and #10162 show that edits can corrupt message structure; consider saving full context before editing.
- **Local Inference Caution**: If running on AMD GPUs, expect instability with large models (VRAM overflow crashes). Use `--fit on` or disable smart offloading until #9801 is resolved.
- **Fine-Tuning Flexibility**: For TTS or multimodal models (Qwen3-TTS, Idefics3), expect limited out-of-the-box support—check issue trackers for community workarounds or notebook templates.
- **Studio API Reliability**: The API may ignore custom settings unless explicitly applied *during* model load (issue #10160); design workflows accordingly.

> 🔗 [GitHub Issues](https://github.com/unslothai/unsloth/issues) | [Pull Requests](https://github.com/unslothai/unsloth/pulls)

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*