# AI Infrastructure Digest 2026-09-29

> Generated: 2026-09-29 02:15 UTC | Projects covered: 6

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

# vLLM Digest — 2026-09-29

---

### **1. Today's Highlights**  
The vLLM project continues to deepen its support for **DeepSeek V4.1** on ROCm (gfx950), with multiple PRs landing to enable MXFP4 sparse indexing, KV cache reading, and improved performance via shard-based prefill distribution. A critical bug fix addresses a FlashInfer warmup crash caused by incorrect M-rounding during speculative decoding, preventing engine startup on SM100/SM103 hardware. Meanwhile, the team advances disaggregated serving with new RFCs around programmable KV caching and request-level derendering.

---

### **2. Releases & Breaking Changes**  
*No new releases or breaking changes reported in the last 24 hours.*

---

### **3. New Model & Hardware Support**  
- **DeepSeek V4.1** now has full ROCm (gfx950) support:  
  - [PR #58671](https://github.com/vllm-project/vllm/pull/58671): Adds ROCm path for paged MXFP4 sparse indexer using aiter’s MQA-logits kernel.  
  - [PR #57523](https://github.com/vllm-project/vllm/pull/57523): Enables reading of DeepSeek-V4.1’s MXFP8 sliding-window KV cache.  
  - [PR #57463](https://github.com/vllm-project/vllm/pull/57463): Fixes `--kv-cache-dtype nvfp4_ds_mla` support on ROCm by replacing PTX-only packing logic.  
- **GLM-5.3**: Performance improvements for P/D disaggregation on GB200 via optimized descriptor handling ([Issue #55434](https://github.com/vllm-project/vllm/issues/55434)).  
- **Intel GPU (XPU)**: Bug reported for dual Intel Arc Pro B70 (Battlemage) systems under TP=2, causing GPU fault and engine reset ([Issue #41663](https://github.com/vllm-project/vllm/issues/41663)).

---

### **4. Performance & Optimization**  
- **Prefill Scaling**:  
  - [PR #54951](https://github.com/vllm-project/vllm/pull/54951): Shards long-context indexer prefill rows across tensor parallelism (TP) ranks, reducing redundant computation and improving scalability on GLM-5.3.  
- **Decode Efficiency**:  
  - [PR #52162](https://github.com/vllm-project/vllm/pull/52162): For PCP-only deployments (`DCP == 1`), shards decode requests across PCP ranks instead of replicating them—eliminating redundant work.  
- **Quantization & Kernel**:  
  - [PR #58165](https://github.com/vllm-project/vllm/pull/58165): Fixes FlashInfer warmup crash due to incorrect M-rounding in MXFP8 split-K tactic, enabling stable spec-decoding on Blackwell-class GPUs.  
- **Multi-modal**:  
  - [PR #58122](https://github.com/vllm-project/vllm/pull/58122): Adds fixed-resolution LLaVA encoder CUDA graph support for vision tower and projector, improving multimodal inference throughput.

---

### **5. Stability & Regressions**  
- **Critical Crash**:  
  - [PR #58165](https://github.com/vllm-project/vllm/pull/58165): Fixed FlashInfer warmup crash on SM100/SM103 GPUs when speculative decoding is enabled (caused by `autotune(tuning_buckets=...)` rounding M down).  
- **Memory Corruption / Output Errors**:  
  - [Issue #53912](https://github.com/vllm-project/vllm/issues/53912): Prefix caching + MTP still corrupts output in hybrid Mamba/GDN models (v0.28.0); closed issue #43559 remains unfixed.  
- **GPU Faults**:  
  - [Issue #41663](https://github.com/vllm-project/vllm/issues/41663): XPU TP=2 on dual Intel Arc Pro B70 triggers GP fault and BCS engine reset; reproducible in `intel/vllm:0.17.0-xpu`.  
- **Invalid Device Assertions**:  
  - [Issue #57719](https://github.com/vllm-project/vllm/issues/57719): `prompt_embeds` + any penalty causes device-side assert (`scatter gather kernel index out of bounds`).  
  - [Issue #45604](https://github.com/vllm-project/vllm/issues/45604): CUDA invalid argument in FlashInfer AllReduce norm fusion on MiniMax-M3 MXFP8, 4x H200.

---

### **6. What This Means for Application Developers**  
- **Disaggregated Serving**: The `/render` → `/generate` → `/derender` pipeline is maturing. Expect more control via RFCs like [#56851](https://github.com/vllm-project/vllm/issues/56851) (request-level text/derender output) and [#42729](https://github.com/vllm-project/vllm/issues/42729) (derender endpoints for detokenization).  
- **Multi-Lora & Agentic Workloads**: Use cases involving classification heads or multi-lora are gaining traction ([Issue #12829](https://github.com/vllm-project/vllm/issues/12829)), but expect limited support until further RFCs land.  
- **Hardware-Specific Tuning**: If deploying on AMD ROCm (gfx950), ensure you’re on the latest vLLM main branch for DeepSeek V4.1 optimizations. On Intel XPU, avoid TP=2 for now due to known crashes.  
- **Speculative Decoding**: Be cautious with `--speculative-decoding` on newer GPUs (e.g., Blackwell) unless using recent builds—FlashInfer autotuning fixes are essential.  

> 💡 *Recommendation*: Monitor [PR #58165](https://github.com/vllm-project/vllm/pull/58165) and [Issue #53912](https://github.com/vllm-project/vllm/issues/53912) closely if running hybrid Mamba/GDN or MTP workloads.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest – 2026-09-29

---

### **1. Today's Highlights**  
SGLang continues advancing its distributed inference stack with major progress on **Prefill Context Parallelism (CP)** and the **Distributed KVCache system for agentic workloads**, addressing scalability bottlenecks in high-throughput, long-context applications. Critical stability fixes were merged for AMD ROCm support, including resolved crashes in sparse attention paths and improved kernel compatibility across gfx950/gfx1250 GPUs.

---

### **2. Releases & Breaking Changes**  
None. No new releases or breaking API/config changes reported in the last 24 hours.

---

### **3. New Model & Hardware Support**  
- ✅ **T-Head PPU** support is now tracked via [RFC #37519](https://github.com/sgl-project/sglang/issues/37519), with upstreaming of first-class support for ZW810/810E and ZW-M890P cards planned.
- ✅ **AMD ROCm 10 (MI30X / gfx942)** nightly testing added via [PR #41605](https://github.com/sgl-project/sglang/pull/41605), expanding coverage beyond MI35X.
- ✅ **GLM-5.3-Flash FP8/MXFP4** now fully supported on gfx950 with zero-RoPE sparse attention and graph-enabled EAGLE via [PR #39273](https://github.com/sgl-project/sglang/pull/39273).
- ✅ **HiSparse** roadmap finalized for long-context sparse serving ([#28874](https://github.com/sgl-project/sglang/issues/28874)), enabling sub-linear memory scaling during decode.

---

### **4. Performance & Optimization**  
- 🔧 **Prefill CP** is now compatible with allreduce fusion and supports MLA models (Dpsk v3/Kimi-K2.5); remaining work focuses on FlashInfer/TRTLLM-MHA backends ([#21788](https://github.com/sgl-project/sglang/issues/21788)).
- 🚀 **KV Cache Sharding** extended to DSA indexer and MTP via [PRs #40925](https://github.com/sgl-project/sglang/pull/40925) and [#40911](https://github.com/sgl-project/sglang/pull/40911), improving memory efficiency in distributed setups.
- ⚙️ **PTX KDA Prefill Fix**: Resolved NaN issues in `ptx_kda` prefill path and workspace growth problems on B200 ([#41572](https://github.com/sgl-project/sglang/pull/41572)).
- 💡 **KDA Fusion Gate Stability**: Ongoing investigation into logprob drift in GLM-5.3-Flash-NVFP4 post-#39688 ([#41609](https://github.com/sgl-project/sglang/issues/41609)) may impact correctness under high context lengths.

---

### **5. Stability & Regressions**  
- ⚠️ **Critical Crash Risk**: `create_custom_parallel_group` uses `all_gather_object` without explicit group, causing non-deterministic device selection and CUDA errors on non-NVIDIA backends ([#32751](https://github.com/sgl-project/sglang/issues/32751)).
- ⚠️ **Server Crashes on Invalid Input**: Inkling multimodal endpoints return HTTP 500 instead of 400 for malformed image/audio URLs ([#40897](https://github.com/sgl-project/sglang/issues/40897)).
- ⚠️ **DoS Vulnerability**: Unbounded `top_k`, `logprobs`, and `n` values can crash the server ([#41482](https://github.com/sgl-project/sglang/issues/41482)).
- ⚠️ **Model-Specific Failures**:  
  - Severe repetition/degenerate loops in GLM-5.3 with DFLASH speculative decoding ([#40843](https://github.com/sgl-project/sglang/issues/40843)).  
  - Falcon-H1 tied embeddings fail due to in-place `.float()` upcast ([#41463](https://github.com/sgl-project/sglang/issues/41463)).  
  - MiMo-V2 selects FP8 MoE runner incorrectly for MXFP4 experts on SM100 ([#41569](https://github.com/sgl-project/sglang/issues/41569)).
- ✅ **Fixes in Progress**: PRs like [#41572](https://github.com/sgl-project/sglang/pull/41572) and [#41610](https://github.com/sgl-project/sglang/pull/41610) address key edge-case stability issues.

---

### **6. What This Means for Application Developers**  
- **Agentic apps** should prepare for upcoming **distributed KVCache** improvements ([#21846](https://github.com/sgl-project/sglang/issues/21846)) to scale long-running sessions efficiently.
- **Multi-modal developers** must validate input formats carefully—invalid media inputs currently trigger 500 errors instead of 400s ([#40897](https://github.com/sgl-project/sglang/issues/40897)).
- **Performance-sensitive deployments** should avoid unbounded request parameters (`top_k`, `n`, etc.) until fix lands ([#41482](https://github.com/sgl-project/sglang/issues/41482)).
- **AMD users** benefit from expanded ROCm 10 support and stable sparse attention paths—test with `gfx950` and `gfx1250` for full coverage.
- **Future-proofing**: Monitor `prefill cp` and `hisparse` roadmap items for next-gen long-context optimization.

> 🔗 *All issues and PRs linked directly to GitHub for tracking.*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-09-29**

---

### **1. Today's Highlights**  
The latest updates focus on stabilizing speculative decoding and multimodal input handling, with critical fixes for GCC 15 CI issues and Vulkan backend robustness. Key progress includes support for typed content in `/v1/embeddings`, enabling OpenAI-style wrapped arrays for Qwen3-VL-Embedding models, and the introduction of `--cpu-mtp` to offload MTP drafters to CPU—ideal for VRAM-constrained systems.

---

### **2. Releases & Breaking Changes**  
- **b11242**: Fixed GCC 15 `stringop-overflow` in `decode_embd_batch` ([#29607](https://github.com/ggml-org/llama.cpp/pull/29607)).  
- **b11239**: Added support for typed content (vision/audio/video) in `/v1/embeddings` endpoint for Qwen3-VL-Embedding models ([#29556](https://github.com/ggml-org/llama.cpp/pull/29556)).  
- **b11238**: Introduced `ggml_pad_ext` for left-padding in audio encoders (Parakeet, LFM2-Audio, Granite Speech, Gemma 4), improving compatibility with models using roll-based padding.  
- **b11237**: Marked unaligned batch-stride views as unsupported in OpenVINO backend ([#29603](https://github.com/ggml-org/llama.cpp/pull/29603)) — expect stricter validation on inputs.

> 🔧 *Note: No breaking API changes reported today. All updates are additive or corrective.*

---

### **3. New Model & Hardware Support**  
- ✅ **Qwen3-VL-Embedding**: Full support for multimodal embeddings via OpenAI-style wrapped content arrays (`{"content": [...]}`) in `/v1/embeddings`.  
- ✅ **GraniteSpeech5ForCTC (Turbo CTC)**: Added model architecture support for IBM’s non-autoregressive speech-to-text model ([#29446](https://github.com/ggml-org/llama.cpp/pull/29446)).  
- ✅ **K2 Horizon (0.9B–36B MoVA)**: Feature request opened for future support ([#29104](https://github.com/ggml-org/llama.cpp/issues/29104)).  
- ✅ **Hexagon (Snapdragon 7 Gen 4)**: Ongoing work to address HMX MUL_MAT inf errors and FLASH_ATTN_EXT failures ([#29473](https://github.com/ggml-org/llama.cpp/issues/29473)).

---

### **4. Performance & Optimization**  
- **Speculative Decoding**:  
  - `--cpu-mtp` introduced for VRAM-constrained systems ([#29620](https://github.com/ggml-org/llama.cpp/pull/29620)), offloading MTP drafter state to CPU (~1GB VRAM savings).  
  - Vulkan backend now avoids MMVQ on AMD during speculative steps to prevent performance degradation ([#25666](https://github.com/ggml-org/llama.cpp/pull/25666)).  
- **Kernel-Level Improvements**:  
  - Vulkan GDN kernel tuned: **6.3% faster** on RTX 3090 at ubatch=4096 ([#29476](https://github.com/ggml-org/llama.cpp/pull/29476)).  
  - GPU-backed tiled flash attention extended to non-vector-multiple head dims on x86 ([#29423](https://github.com/ggml-org/llama.cpp/pull/29423)).  
- **Batching**: Migration of `mtmd`, `speculative`, and `server` to `batch_ext` continues ([#29385](https://github.com/ggml-org/llama.cpp/pull/29385)), enabling unified batch handling.

---

### **5. Stability & Regressions**  
| Issue | Severity | Status | Fix PR? | Notes |
|------|----------|--------|---------|-------|
| `Server forces full prompt re-processing` after first request | ⚠️ High | Closed | ❌ | Affects SWA/recurrent memory; 53 comments, 30 upvotes ([#21831](https://github.com/ggml-org/llama.cpp/issues/21831)) |
| `DFlash2 + --split-mode tensor` fails with assertion | ⚠️ High | Open | ❌ | Critical for multi-GPU setups ([#27819](https://github.com/ggml-org/llama.cpp/issues/27819)) |
| `Qwen3.8 DFlash/MTP emits OOB token (n_vocab)` on Vulkan | 🛑 Critical | Open | ❌ | Crashes decode; affects AMD Strix Point ([#28158](https://github.com/ggml-org/llama.cpp/issues/28158)) |
| `Vulkan long-running decode degrades → empty EOS replies` | ⚠️ High | Open | ❌ | After ~7–8h on Intel Arc A770 ([#29526](https://github.com/ggml-org/llama.cpp/issues/29526)) |
| `HIP/ROCm: Gated Delta Net carries state across requests` | ⚠️ Medium | Open | ❌ | Leads to prior text leakage in completions ([#29092](https://github.com/ggml-org/llama.cpp/issues/29092)) |

> 📌 *Critical stability risks remain in DFlash/MTP and Vulkan backends. Developers should avoid production use of these features until patches land.*

---

### **6. What This Means for Application Developers**  
- **Use `--cpu-mtp`** if running Qwen3.5/MoE drafts on consumer GPUs (<12GB VRAM). It enables speculative decoding without exhausting GPU memory.  
- **Migrate to `llama_batch_ext`** for new projects—future APIs will phase out `llama_batch`. The shift is already underway in examples and server code.  
- **Validate multimodal embeddings** using the new OpenAI-style format (`"content": [...]`) for vision/audio models like Qwen3-VL-Embedding.  
- **Avoid DFlash2 with `--split-mode tensor`** and **long-lived Vulkan servers** until fix PRs land—expect crashes or silent failures.  
- **Monitor latency spikes** from large `json_schema` grammars ([#29457](https://github.com/ggml-org/llama.cpp/issues/29457)): they can cause core pinning and DoS-like behavior.

> 💡 *Build pipelines should integrate GCC 15 and Vulkan testing early—new CI fixes indicate growing focus on compiler and backend robustness.*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-09-29**

---

### **1. Today's Highlights**  
Ollama v0.35.0 introduces **System One**, a new `/v1/systemone` API for structured decision-making, enabling models to return choices, probabilities, and scores—ideal for routing, classification, and triage. This marks a strategic shift toward AI orchestration, moving beyond text generation into executable logic. The release also includes critical fixes for GPU memory handling, CUDA crashes on RTX 5090, and improved model loading stability.

---

### **2. Releases & Breaking Changes**  
- **v0.35.0**: Official release with full support for the **System One API** (`/v1/systemone`) based on TypeSafe’s Jev framework.  
  - *Impact*: Existing OpenAI-compatible clients must now explicitly handle `top_p: 1.0` overrides (see #18690).  
  - *Migration note*: Models using `PARAMETER top_p` in Modelfiles may behave unexpectedly if not specified in requests.  
  🔗 [GitHub Release v0.35.0](https://github.com/ollama/ollama/releases/tag/v0.35.0)

---

### **3. New Model & Hardware Support**  
- **K2 Horizon (k2-horizon)**: Feature request (#18698) calls for support of MBZUAI IFM’s new 0.9B–36B MoE models (Apache 2.0), including official GGUF variants.  
  🔗 [Issue #18698](https://github.com/ollama/ollama/issues/18698)  
- **MLX Backend**: System One support added via PR #18701; MLX now enables decision models with local inference.  
  🔗 [PR #18701](https://github.com/ollama/ollama/pull/18701)  
- **GraniteForCausalLM**: Experimental support added for IBM’s Granite 4.1/4.2 models via MLXrunner.  
  🔗 [PR #17972](https://github.com/ollama/ollama/pull/17972)  

> ✅ *Note*: No new quantization formats or hardware backends (e.g., ROCm, CUDA 12.5+) introduced today.

---

### **4. Performance & Optimization**  
- **Memory Efficiency**: PR #13244 improves VRAM estimation by using max graph memory allocation during compute graph setup, reducing over-allocation risks.  
  🔗 [PR #13244](https://github.com/ollama/ollama/pull/13244)  
- **Flash Attention**: Automatically enabled when supported and safe (no CPU fallback), improving throughput across text, vision, and embedding models.  
  🔗 [PR #13448](https://github.com/ollama/ollama/pull/13448)  
- **KV Cache Reuse**: MTP models now reuse cache across non-thinking turns, reducing redundant computation.  
  🔗 [PR #17496](https://github.com/ollama/ollama/pull/17496)  
- **GPU Overhead Control**: Fix for `OLLAMA_GPU_OVERHEAD` being ignored (PR #18679) ensures proper VRAM reservation for large models like `qwen3.6:35b-a3b`.  
  🔗 [Issue #18679](https://github.com/ollama/ollama/issues/18679)  

> ⚠️ *Pending*: Full performance benchmarking data for System One models not yet available.

---

### **5. Stability & Regressions**  
| Severity | Issue | Description | Status |
|---------|------|-------------|--------|
| Critical | #18642 | CUDA illegal memory access crash on **RTX 5090** with Cohere MoE models (Windows) | Open |
| High | #16532 | Image processing failure (`gemma4`) on **Windows** (JPEG OCR fails silently) | Open (53 comments) |
| High | #18690 | `/v1/chat/completions` forces `top_p: 1.0` even when `Modelfile PARAMETER top_p` is set | Open |
| Medium | #17916 | `n_threads` ignores cgroup CPU quota → ~45x throughput collapse in containers | Open |
| Low | #18683 | Billing loop issue with Stripe → accounts stuck in retry cycle | Open |

> ✅ *Fixes in progress*: PRs #18679 (GPU overhead), #18697 (truncation logic), and #18702 (docs) are addressing key issues.

---

### **6. What This Means for Application Developers**  
- **Build Decision Engines**: Use `/v1/systemone` to power automated workflows—e.g., ticket triage, model routing, content filtering—with confidence in structured outputs.  
  🔗 [API Docs Draft](https://github.com/ollama/ollama/pull/18702)  
- **Avoid Silent Overrides**: Explicitly set `top_p` in API requests—do not rely on Modelfile defaults.  
- **Optimize for Edge & Cloud**: Ensure containerized deployments respect cgroup limits; avoid `n_threads` default behavior.  
- **Expect GPU Stability Risks**: Avoid RTX 5090 + Cohere MoE models until #18642 is resolved.  
- **Enhance UX**: Use upcoming CLI tab completion (#925, #1653) and chat history export features (#18700) in desktop apps.

> 💡 *Pro Tip*: For high-throughput agents, leverage Flash Attention and KV cache reuse via MLX backend (PR #13448, #17496) to reduce latency and cost.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-09-29**

---

### **1. Today's Highlights**  
The LiteLLM ecosystem continues to mature with significant enhancements in cost transparency, routing intelligence, and security. Key developments include the addition of a **model leaderboard UI**, support for **per-second pricing**, and new guardrail timeouts—critical for production-grade agent systems. Meanwhile, critical fixes address long-standing issues in budget persistence, Redis SSL handling, and tool schema translation.

---

### **2. Releases & Breaking Changes**  
- **v1.104.0-rc.1** and **v1.103.0** released today.  
  - All Docker images are now signed via [cosign](https://docs.sigstore.dev/cosign/overview/) using the same key introduced in [commit `0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0).  
  - Verify signatures: [v1.104.0-rc.1](https://github.com/BerriAI/litellm/releases/tag/v1.104.0-rc.1) | [v1.103.0](https://github.com/BerriAI/litellm/releases/tag/v1.103.0)

> ✅ **Action Required**: Validate image signatures in CI/CD pipelines immediately.

---

### **3. New Model & Hardware Support**  
- **Bedrock Mantle** support expanded with cost entries for `anthropic.claude-opus-5.5` and `sonnet-5.5` (including GovCloud variants).  
  - PR: [#43647](https://github.com/BerriAI/litellm/pull/43647)  
- **llmman** added as an OpenAI-compatible local provider (serves `/v1` on port 17434).  
  - PR: [#38925](https://github.com/BerriAI/litellm/pull/38925)  
- **DashScope Realtime WebSocket** support now available.  
  - PR: [#40579](https://github.com/BerriAI/litellm/pull/40579)  
- **OpenAI Live sessions** (`gpt-live-1`) now proxied via new `/v1/live/sessions` route.  
  - PR: [#43621](https://github.com/BerriAI/litellm/pull/43621)

---

### **4. Performance & Optimization**  
- **Per-second pricing** now correctly aggregates `input_cost_per_second` and `output_cost_per_second` without double-billing.  
  - PR: [#43614](https://github.com/BerriAI/litellm/pull/43614)  
- **Batch processing** enhanced with:  
  - `max_batch_file_records` (rejects oversized files with 413)  
  - Daily upload caps and per-file download limits  
  - PR: [#43632](https://github.com/BerriAI/litellm/pull/43632)  
- **Redis cache performance** improved by reducing query overhead when looking up spend logs.  
  - PR: [#43656](https://github.com/BerriAI/litellm/pull/43656)

---

### **5. Stability & Regressions**  
| Issue | Severity | Status | Fix PR |
|------|----------|--------|--------|
| `Redis cache fails with unexpected ssl_check_hostname` (v1.93.0+) | Critical | Open | — |
| `sanitize_input_schema_for_anthropic` drops root `anyOf`/`$ref`, breaks tool calls | High | Open | [#43157](https://github.com/BerriAI/litellm/issues/43157) |
| `Gemini tool translate` maps empty args to `{"type": "object"}` instead of `{}` | Medium | Open | [#43156](https://github.com/BerriAI/litellm/issues/43156) |
| `max_end_user_budget_id` not persisted to DB → budget resets ignored | High | Open | [#25386](https://github.com/BerriAI/litellm/issues/25386) |
| `Azure GPT-4.1` rejects both `max_tokens` and `max_completion_tokens` simultaneously | Medium | Open | [#31614](https://github.com/BerriAI/litellm/issues/31614) |

> ⚠️ **Note**: Several regressions affect core cost tracking and model routing logic; users relying on accurate billing or fallback chains should monitor these closely.

---

### **6. What This Means for Application Developers**  
- **Build more reliable agents**: With per-second pricing, real-time session proxying, and better guardrail timeouts ([#43648](https://github.com/BerriAI/litellm/pull/43648)), your apps can now enforce tighter resource controls and avoid silent failures.  
- **Enhanced observability**: The new **model leaderboard page** ([#43649](https://github.com/BerriAI/litellm/pull/43649)) gives admins clear visibility into actual model usage—ideal for cost optimization and SLM distillation workflows.  
- **Avoid hidden costs**: Use `bedrock_mantle` cost rows for accurate AWS CUR attribution. Ensure you’re not overpaying due to misaligned pricing (e.g., #37631).  
- **Secure deployments**: Enable Oso-based authorization ([#42416](https://github.com/BerriAI/litellm/pull/42416)) for fine-grained model access control in multi-team environments.  

> 🔧 **Pro Tip**: If using Azure PTU deployments, enable `ptu_shares` for team-level allocation ([#43043](https://github.com/BerriAI/litellm/pull/43043)) to prevent cost drift and improve accountability.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-09-29**

---

### **1. Today's Highlights**  
Unsloth v0.1.900-beta introduces *Laya Decision Models* and a unified **Library for docs and media**, enabling local deployment of open-source reasoning agents like Jev (Laya). The release delivers ~4.5× faster image and video generation, especially on Apple Silicon, alongside major improvements to the Skills Editor and document viewer.  

---

### **2. Releases & Breaking Changes**  
- **v0.1.900-beta**: Official launch with support for **Decision Models (Laya)**, **Skills Editor**, **document/media library**, and enhanced Apple Silicon performance.  
  - [GitHub Release](https://github.com/unslothai/unsloth/releases/tag/v0.1.900-beta)  
  - No breaking changes reported; backward compatibility preserved for existing workflows.

---

### **3. New Model & Hardware Support**  
- **Decision Models**: Native support for Laya-style decision agents via `unsloth_zoo` and new `systemone` API endpoint.  
  - [PR #12232](https://github.com/unslothai/unsloth/pull/12232): Enables chat models to invoke Laya through MCP.  
- **Idefics3 Architecture**: Feature request pending ([#4079](https://github.com/unslothai/unsloth/issues/4079)) for IBM Granite Docling VLM support.  
- **Hardware**:  
  - **Apple Silicon (MLX)**: fp16 inference now supported for Laya checkpoints ([#12256](https://github.com/unslothai/unsloth/pull/12256)).  
  - **Mixed NVIDIA+AMD Systems**: Multiple PRs address GPU visibility and backend routing (e.g., [#12246](https://github.com/unslothai/unsloth/issues/12246), [#12248](https://github.com/unslothai/unsloth/issues/12248)).  
  - **Windows ARM64**: Installer issue fixed in `winget` package ([#11913](https://github.com/unslothai/unsloth/issues/11913)).

---

### **4. Performance & Optimization**  
- **Image/Video Generation**: ~4.5× speedup on Apple Silicon due to optimized kernel execution and offload planning.  
  - [PR #12043](https://github.com/unslothai/unsloth/pull/12043): Dynamic activation-based offload improves VRAM efficiency.  
- **Laya Inference**: Up to 2.5× faster via marker-only heads and CUDA graphs (no `torch.compile`).  
  - [PR #12224](https://github.com/unslothai/unsloth/pull/12224)  
- **Memory Management**: Reduced overhead in multi-GPU setups by smarter VRAM budgeting per megapixel.  
- **Model Loading**: Local scan-folder copies now prioritized over Hub cache ([#12254](https://github.com/unslothai/unsloth/pull/12254)), reducing redundant downloads.

---

### **5. Stability & Regressions**  
- **Critical Issues**:  
  - **Tool Call Hangs**: Tool calls can freeze indefinitely past max duration ([#12048](https://github.com/unslothai/unsloth/issues/12048)) — fix PR in progress ([#12234](https://github.com/unslothai/unsloth/pull/12234)).  
  - **Base64 Image Parsing Failures**: Random "Invalid base64 value" errors cause reprocessing, despite valid image output ([#12058](https://github.com/unslothai/unsloth/issues/12058)) — fix PR under review ([#12236](https://github.com/unslothai/unsloth/pull/12236)).  
- **Installation & AV Conflicts**:  
  - Bitdefender false-positive blocks Windows installer ([#12140](https://github.com/unslothai/unsloth/issues/12140)).  
  - Antivirus interferes with one-liner install (`install.ps1`) on Windows ([#11397](https://github.com/unslothai/unsloth/issues/11397)).  
- **CUDA OOM in WSL**: Still occurs despite unused VRAM ([#1797](https://github.com/unslothai/unsloth/issues/1797)) — no fix yet.

---

### **6. What This Means for Application Developers**  
- **Build AI Agents**: Use **Laya Decision Models** directly in your apps via the new `systemone` API and MCP integration.  
- **Optimize Multi-GPU Workloads**: On mixed NVIDIA+AMD systems, explicitly route inference (llama.cpp) and training (ROCm/CUDA) to different GPUs using settings.  
- **Improve UX**: Disable auto-scroll during chat streaming ([#9761](https://github.com/unslothai/unsloth/issues/9761)) and export fine-tuned configs to Ollama format ([#4660](https://github.com/unslothai/unsloth/issues/4660)).  
- **Avoid Pitfalls**:  
  - Avoid `CUDA_VISIBLE_DEVICES=""` on ROCm systems — it hides AMD cards ([#12245](https://github.com/unslothai/unsloth/issues/12245)).  
  - Manually manage model exports to prevent sensitive paths from leaking to Hugging Face Hub ([#12239](https://github.com/unslothai/unsloth/pull/12239)).  
- **Future-Proofing**: Monitor Idefics3 support and MLX fp16 optimization for Apple Silicon deployments.

---  
*Digest generated: 2026-09-29 | Source: [unslothai/unsloth GitHub](https://github.com/unslothai/unsloth)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*