# AI Infrastructure Digest 2026-10-04

> Generated: 2026-10-04 01:57 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

⚠️ Comparative analysis generation failed.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

---

### **vLLM Digest — 2026-10-04**

#### **1. Today's Highlights**  
The vLLM project continues to prioritize stability and performance in high-throughput, speculative decoding workloads, with critical fixes for Marlin quantization corruption and MTP prefix-cache recompute issues. Key PRs address silent data corruption in `int8-activation` paths and restore hybrid GDN prefix-cache efficiency under speculative decoding, directly impacting inference reliability for models like Qwen3.5-122B and Qwen3.8 GDN.

#### **2. Releases & Breaking Changes**  
*None.* No new releases were published in the last 24 hours. The latest stable version remains **v0.30.0**, with ongoing development focused on pre-release fixes and feature stabilization in `main`.

#### **3. New Model & Hardware Support**  
- **ROCm (gfx942)**: GLM-5.3-Flash now boots successfully after fixing missing `ROCMAiterMLASparseImpl` record (#59027).  
- **Intel GPU (XPU)**: Fused input normalization fixed for multimodal models via PR #59865.  
- **Quantization**: NVFP4 support extended to Nemotron-3.5-Lightning on Blackwell (SM121), though a regression was reported in decode speed (#59770).  
- **Model Updates**: Qwen3.8-Flash-Next (Qwen4Exp) now loads correctly post-fixes (#59756).

#### **4. Performance & Optimization**  
- **Speculative Decoding Efficiency**: PR #52244 restores hybrid GDN prefix-cache hits under MTP speculative decoding, preventing up to **~30–40% batch throughput loss** on repeated prompts.  
- **Memory & Throughput**: Dynamic speculative decoding (`num_speculative_tokens_per_batch_size`) causes **catastrophic aggregate-throughput collapse** at batch-size thresholds due to cudagraph downgrade (#49548).  
- **Kernel Optimization**: PR #51406 enables fused QK-norm+RoPE+gate Triton kernel for Qwen3-Next, improving forward pass efficiency across backends.  
- **CPU Offload**: UVA weight offload on quantized MoE wastes ~35% host RAM due to power-of-two rounding (#58178); fix pending.

#### **5. Stability & Regressions**  
- **Critical**: Marlin `int8-activation` path corrupts weights when group scales are negative—impacts W4A8 and W4A16 checkpoints (#59403, #48905). ✅ **Fix in progress**: PR #59895 (depends on #48926).  
- **Severe**: `prompt_logprobs` silently corrupted with MTP speculative decoding enabled (#53488).  
- **High**: `NixlPushModeConnector` reliability issues affecting large-scale deployments (#48633).  
- **Moderate**: Silent image drop in multimodal requests when `chat_template_kwargs` is present (#59876).  
- **Regression**: `Nemotron-3.5-Lightning` decode ~16% slower since v0.29.0 on DGX Spark (#59770).  
- **Recovery**: PR #59895 and #48926 jointly address the Marlin scale corruption root cause.

#### **6. What This Means for Application Developers**  
- **Avoid `VLLM_MARLIN_INPUT_DTYPE=int8`** on checkpoints with negative group scales until PR #59895 lands—this will cause silent output corruption.  
- **Enable hybrid GDN + MTP speculative decoding cautiously**: Ensure you’re on a recent nightly build to avoid ~30–40% throughput loss from cache misses (#52244).  
- **Use `--api-key` with care**: Routes not explicitly guarded may be exposed; PR #58948 ensures API key protection aligns with registered routes.  
- **Monitor for regressions in `nvidia/NVIDIA-Nemotron-3.5-Lightning`**: Expect ~16% decode slowdown unless patched.  
- **Prepare for `Responses API` streaming changes**: PR #59859 fixes ID reuse in final harmony responses—critical for strict OpenAI clients.

> 🔗 [GitHub Issues](https://github.com/vllm-project/vllm/issues) | [PRs](https://github.com/vllm-project/vllm/pulls)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-10-04**

---

### **1. Today's Highlights**  
The SGLang project continues to accelerate its support for next-generation hardware, with critical performance fixes and feature work focused on **SM120 (RTX PRO 6000)** and **GB10 (DGX Spark)** platforms. Major stability issues have emerged around **NVFP4 KV cache corruption**, **FA4 attention crashes in hybrid extend mode**, and **misaligned token accounting in MLX chained decode paths**, all requiring urgent attention. Meanwhile, PRs are advancing key optimizations for DeepSeek V4.1 and AMD’s MiniMax-M3, particularly in sparse attention and FP8 kernel fusion.

---

### **2. Releases & Breaking Changes**  
None reported in the last 24 hours. No new releases or breaking API/config changes observed.

---

### **3. New Model & Hardware Support**  
- ✅ **SM120 (NVIDIA RTX PRO 6000)**: Active perf tracking and bug reporting for `GLM-5.3-Flash` and `DeepSeek-V4-Flash` models under `--kv-cache-dtype nvfp4` and `fa4` backend.
- ✅ **GB10 (DGX Spark / NVIDIA GB10)**: Ongoing optimization for `Qwen4Exp`, `MiniMax-M3`, and `DeepSeek-V4.1`, including AITER ASM prefill, sparse MLA decode, and FP8 block selection.
- ✅ **AMD gfx950 / MI35x/MI355X**: Enhanced support via AITER kernels for `MiniMax-M3` and `DeepSeek-V4.1`, with new nightly accuracy tests added.
- ✅ **OCI Registry Support**: `oci://` model path resolution now supported via `llmman serve` (PR #37161), enabling secure, air-gapped model deployment workflows.

> 🔗 [PR #37161](https://github.com/sgl-project/sglang/pull/37161) | 🔗 [Issue #42369](https://github.com/sgl-project/sglang/issues/42369)

---

### **4. Performance & Optimization**  
- 🚀 **NVFP4 + SM120**: File-backed PLE table introduced (PR #42392) enables **6.8x lower cold-prefill TTFT** on GB10 by allowing concurrent host reads for cold rows.
- ⚙️ **Sparse Attention (AMD)**: AITER FP8 block selection reduces index-cache time; fused QK norm + RoPE + cache writes improve throughput (PRs #35357, #41707).
- 📈 **MoE Optimization (AMD)**: Small-batch MoE expert-count gate improves sorting efficiency on MI355X, addressing bottlenecks in low-concurrency inference (PR #41982).
- 🔧 **Kernel Fusion**: FLUX.3 rowwise FP8 quantization now fused with Triton (PR #41671); DFlash draft layers now built under checkpoint names (PR #40884).

> 🔗 [PR #42392](https://github.com/sgl-project/sglang/pull/42392) | 🔗 [PR #41982](https://github.com/sgl-project/sglang/pull/41982)

---

### **5. Stability & Regressions**  
⚠️ **Critical (High Severity)**  
- **NVFP4 KV Cache Corruption (SM120)**: Silently reuses fp8-calibrated `k/v_scale` as global scale → deterministic long-context corruption (PR #42369). *Fix pending.*
- **FA4 Attention Crash (SM120)**: `GLM-5.3-Flash` crashes during CUDA-graph capture in hybrid extend mode — only `triton` backend works (Issue #42012). *No fix yet.*
- **MLX Chained Decode Bug**: Per-token accounting skipped → stale `req_to_token` slots cause silent KV pool corruption (Issue #30093). *Patch in review.*

⚠️ **Medium Severity**  
- **DeepSeek-V4-Flash DSPARK**: Fails on topk=192 due to unsupported sparse-MLA config (Issue #33134).  
- **OpenAI API Inconsistency**: Non-streaming error responses don’t match OpenAI standard format (Issue #33504).

> 🔗 [Issue #42369](https://github.com/sgl-project/sglang/issues/42369) | 🔗 [Issue #42012](https://github.com/sgl-project/sglang/issues/42012)

---

### **6. What This Means for Application Developers**  
- **Avoid `--kv-cache-dtype nvfp4` on SM120** until #42369 is fixed — risk of silent context corruption in long-running or multi-request scenarios.
- **Use `triton` backend for `GLM-5.3-Flash` on SM120** if using speculative decoding or CUDA graphs — FA4 is unstable.
- **Enable `SGLANG_CAKE_ROUTES` (PR #42416)** to opt-in to high-performance kernel paths (e.g., sparse MLA decode, Mamba2 SSD/SSU) without breaking existing code.
- **Leverage file-backed PLE tables** (#42392) for large-scale, low-latency inference on GB10 systems — especially beneficial for cold-start-heavy workloads.
- **Validate your model configs** when using `--json-model-override-args` — current implementation doesn’t recursively update nested fields (Issue #33505).

> 💡 Pro Tip: Monitor CI health via [Issue #17050](https://github.com/sgl-project/sglang/issues/17050) — 1 broken, 8 flaky tests reported today indicate potential instability in core pipelines.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-10-04**

---

### **1. Today's Highlights**  
The latest development focus centers on speculative decoding stability, WebGPU and CUDA performance improvements, and critical fixes for MoE models and GPU memory management. Notable progress includes f16 support in WebGPU `fill/set_rows`, a fix for MTP draft acceptance collapse under parallel slots (`-np N`), and a new GPU cache mechanism for MoE experts to reduce host memory pressure.

---

### **2. Releases & Breaking Changes**  
No formal release was published today, but **b11379–b11382** were pushed with critical bug fixes:  
- **b11379**: Fixed `laya abort` by limiting `n_batch` to `n_ubatch` in server mode ([#29903](https://github.com/ggml-org/llama.cpp/pull/29903))  
- **b11382**: Added f16 support to WebGPU `fill/set_rows` to prevent CI failures in `glm5-next` with FA enabled ([#29897](https://github.com/ggml-org/llama.cpp/pull/29897))  
- **b11380**: Updated `cpp-httplib` to v0.59.0 ([#29886](https://github.com/ggml-org/llama.cpp/pull/29886))  

> ⚠️ Developers using speculative decoding (MTP/draft-mtp) with multi-ubatch (`-np N`) should upgrade to b11379 or later to avoid silent draft acceptance collapse.

---

### **3. New Model & Hardware Support**  
- **GLM5Next**: Added MTP support with graph optimizations ([#29928](https://github.com/ggml-org/llama.cpp/pull/29928))  
- **Qwen4Exp**: Optimized for MoE inference with reduced indexer score memory usage ([#29825](https://github.com/ggml-org/llama.cpp/pull/29825))  
- **WebGPU**: Expanded support for `f16` tensors in `fill/set_rows`, enabling better compatibility with quantized models like `glm5-next`  
- **SYCL/CUDA**: Ongoing work to fix memory errors in `mul_mat` and improve Q2_K performance via VGPR spill reduction ([#29910](https://github.com/ggml-org/llama.cpp/pull/29910))

---

### **4. Performance & Optimization**  
- **CUDA (AMD)**: Q2_K MMQ spills significantly reduced via gentler loop unrolling; benchmarks show improved throughput on gfx906 (MI50) ([#29910](https://github.com/ggml-org/llama.cpp/pull/29910))  
- **ROCm/HIP**: Use of `__builtin_amdgcn_perm` for `q1_0` unpacking improves performance ([#29927](https://github.com/ggml-org/llama.cpp/pull/29927))  
- **MoE**: New GPU cache for offloaded experts reduces host memory overhead; small batches (≤32 tokens) benefit from LRU caching ([#29887](https://github.com/ggml-org/llama.cpp/pull/29887))  
- **Vulkan**: Matmul dispatch now respects `maxComputeWorkGroupCount` to prevent overflow crashes ([#29533](https://github.com/ggml-org/llama.cpp/pull/29533))

---

### **5. Stability & Regressions**  
High-severity issues reported today include:  
- **Speculative decoding divergence** under greedy sampling when target is quantized (e.g. Q4_K_M); matches only on bf16 ([#25618](https://github.com/ggml-org/llama.cpp/issues/25618))  
- **MTP draft acceptance collapses to 0.0** under `-np N` with long prompts — async `t_h_nextn` race condition ([#27572](https://github.com/ggml-org/llama.cpp/issues/27572))  
- **GLM-5.3-Flash decode stalls on Metal** due to Lightning Indexer falling back to CPU ([#29867](https://github.com/ggml-org/llama.cpp/issues/29867))  
- **Qwen3.8-Flash-Next + MTP crash** on startup with specific config ([#29811](https://github.com/ggml-org/llama.cpp/issues/29811))  
- **Qwen4Exp decode slows linearly with context** on CUDA ([#28734](https://github.com/ggml-org/llama.cpp/issues/28734))  

> ✅ Fix PRs exist for several regressions: [#29924](https://github.com/ggml-org/llama.cpp/pull/29924) (n-gram draft rejection), [#29897](https://github.com/ggml-org/llama.cpp/pull/29897) (WebGPU f16), and [#29889](https://github.com/ggml-org/llama.cpp/pull/29889) (SYCL memory safety).

---

### **6. What This Means for Application Developers**  
- **Use `b11379+` for production speculative decoding** — earlier versions may silently fail under `-np N`.  
- **Avoid `draft-mtp` with long prompts on multi-slot setups** until the `t_h_nextn` race is resolved.  
- **Leverage MoE GPU caching** ([#29887](https://github.com/ggml-org/llama.cpp/pull/29887)) for faster inference on large MoE models (e.g. Qwen4Exp, GLM5Next) with small batch sizes.  
- **Expect performance gains on AMD GPUs** with Q2_K and Q1_0 via recent CUDA/ROCm PRs ([#29910](https://github.com/ggml-org/llama.cpp/pull/29910), [#29927](https://github.com/ggml-org/llama.cpp/pull/29927)).  
- **Monitor Vulkan/Metal backend behavior** — known instability in matmul dispatch and indexers remains an open risk for high-context inference.  

> 📌 **Recommendation**: Pin to `b11382` or later for stable WebGPU and speculative decoding workflows. Monitor [issue #25618](https://github.com/ggml-org/llama.cpp/issues/25618) for quantization-related correctness risks.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-10-04**

---

### **1. Today's Highlights**  
A surge in critical performance regressions has emerged post-*b10715-mix-86bd2d3*, with tensor-split inference on dual-GPU setups (especially RTX 5070 Ti) dropping to ~48 tokens/s—down from 115–120 t/s in earlier builds. This regression is tied to changes around `max_cuda_graphs = 64` and CUDA graph handling, impacting both native Windows and WSL2 environments. Simultaneously, multiple UI/UX and stability issues have surfaced in Unsloth Studio, including TTS formatting leaks, context meter inaccuracies, and tool call lifecycle bugs.

---

### **2. Releases & Breaking Changes**  
*None reported in the last 24 hours.*  
However, several breaking changes are pending in active PRs:  
- **PR #12600**: Splitting the single "Audio" page into *Speak*, *Music*, and *Transcribe* workspaces — a major UI restructuring that may affect integrations relying on audio workflow routing. [GitHub PR #12600](https://github.com/unslothai/unsloth/pull/12600)  
- **PR #12641**: Enforces robust fallback for SageAttention/FlashAttention 4 requests, preventing silent failures or noise during image/video generation. [GitHub PR #12641](https://github.com/unslothai/unsloth/pull/12641)

---

### **3. New Model & Hardware Support**  
- **SageAttention 2 & FlashAttention 4**: Now dynamically probed and loaded via kernel hub; supports fresh Studio installs with proper dependency resolution. [GitHub PR #12654](https://github.com/unslothai/unsloth/pull/12654)  
- **Pre-quantized diffusion models**: Support for `.safetensors` format across torchao 0.17–0.18 and main branches, enabling safer loading of pre-quantized denoisers/text encoders. [GitHub PR #12645](https://github.com/unslothai/unsloth/pull/12645)  
- **Vulkan Mixed GPU Pinning**: Fix ensures discrete GPUs are prioritized over iGPUs in mixed configurations (e.g., RX 7700 XT + integrated GPU). [GitHub PR #12650](https://github.com/unslothai/unsloth/pull/12650)  

---

### **4. Performance & Optimization**  
- **Tensor-Split Inference Regression**: Dual-GPU `--split-mode tensor` now runs at **~48 t/s** on RTX 5070 Ti (Win/WSL2), down from **115–120 t/s** in prior versions (*b10687-mix-67dfc8b* and official ggml builds). Root cause linked to `max_cuda_graphs = 64` and CUDA graph mismanagement. [GitHub Issue #12468](https://github.com/unslothai/unsloth/issues/12468)  
- **Automatic Step Skipping**: Introduces per-model automatic step skip (1.44x to 1.81x speedup across five models by default; MiniMax-H3 up to 1.81x). Enabled only on `speed_mode=max` for models with ≥20 steps. [GitHub PR #12652](https://github.com/unslothai/unsloth/pull/12652)  
- **FBCache Optimization**: Maintains fullgraph compile and CUDA graphs for static cache, improving throughput without user intervention. [GitHub PR #12652](https://github.com/unslothai/unsloth/pull/12652)

---

### **5. Stability & Regressions**  
| Severity | Issue | Impact | Status |
|---------|------|--------|--------|
| 🔴 High | Tensor split decode slowdown (~48 t/s vs 115–120 t/s) | Dual-GPU inference degraded; affects all builds since `b10715-mix-86bd2d3` | Open ([#12468](https://github.com/unslothai/unsloth/issues/12468)) |
| 🔴 High | `--mlock` rejected + mmproj-F16.gguf reloaded from disk | Severe latency spike in Studio; model state not preserved | Closed ([#12372](https://github.com/unslothai/unsloth/issues/12372)) |
| 🟡 Medium | Live Monitor overlaps with download popovers | UI z-index collision; visual clutter in Studio | Open ([#12623](https://github.com/unslothai/unsloth/issues/12623)) |
| 🟡 Medium | Tool calls under `tool_choice="none"` lack terminal events | Streaming clients may hang or misinterpret response lifecycle | Open ([#12626](https://github.com/unslothai/unsloth/issues/12626)) |
| 🟡 Medium | TTS reads out markdown formatting (e.g., "asterisk asterisk") | Poor UX in voice output; breaks natural speech flow | Open ([#12547](https://github.com/unslothai/unsloth/issues/12547)) |

---

### **6. What This Means for Application Developers**  
- **Avoid `b10715-mix-86bd2d3` and later builds** if using tensor-split inference on multi-GPU systems—opt for `b10687-mix-67dfc8b` or official ggml builds until the `max_cuda_graphs` issue is resolved.  
- **Expect instability in Studio workflows involving tools, audio, or vision models**—particularly around `tool_choice="none"` and `--mlock`. Use stable build tags for production pipelines.  
- **Leverage new auto-step skipping and attention kernel probing** (`SageAttention`, `FlashAttention`) for improved image/video generation performance without manual tuning.  
- **Design for dynamic model loading**—the shift toward modular audio workspaces and safe `.safetensors` loading implies a move toward more resilient, modular runtime environments.  
- **Monitor context meter behavior closely**—new feature requests highlight growing demand for real-time visibility into compaction and tool-handoff states, suggesting need for richer telemetry in agent frameworks.

---  
*Digest compiled from GitHub data: unslothai/unsloth, 2026-10-04.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*