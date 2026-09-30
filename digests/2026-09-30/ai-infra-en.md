# AI Infrastructure Digest 2026-09-30

> Generated: 2026-09-30 01:29 UTC | Projects covered: 6

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

**vLLM Digest – 2026-09-30**

---

### **1. Today's Highlights**  
The vLLM project continues to deepen its support for multimodal and speculative decoding workloads, with critical fixes for GLM-5.3-Flash stability under high concurrency and MTP (Multi-Token Prediction). A key PR introduces **programmable KV cache policies**, enabling composable, agentic-serving-aware memory management. Meanwhile, ROCm performance optimization efforts for Qwen3.8-2.4T-A95B on AMD MI355X are advancing through stacked PRs.

---

### **2. Releases & Breaking Changes**  
None reported in the last 24 hours. No new releases or breaking API/config changes were issued.

---

### **3. New Model & Hardware Support**  
- **ROCm (AMD)**: Active optimization for `amd/Qwen3.8-2.4T-A95B-Quark-MXFP4` on gfx950 / MI355X; see [Issue #57149](https://github.com/vllm-project/vllm/issues/57149) and [PR #51406](https://github.com/vllm-project/vllm/pull/51406) for fused kernel support.
- **Intel XPU**: Ongoing CI/CI testing via [PR #58817](https://github.com/vllm-project/vllm/pull/58817), though host memory reduction issues persist ([Issue #50269](https://github.com/vllm-project/vllm/issues/50269)).
- **Models**: Enhanced support for **Qwen3-VL**, **GLM-5.3-Flash**, **Kimi K2.5**, and **DeepSeek-V4.1-Flash** across CUDA and ROCm backends.

---

### **4. Performance & Optimization**  
- **Kernel Fusion**: Fused `QK-norm + RoPE + gate` Triton kernel now enabled for Qwen3-Next/Qwen3.5 on ROCm ([PR #51406](https://github.com/vllm-project/vllm/pull/51406)), reducing kernel launch overhead.
- **MoE Dispatch**: Dynamic layout selection per forward in DeepEP v2 improves memory utilization under CUDA graphs ([PR #59337](https://github.com/vllm-project/vllm/pull/59337)).
- **KV Cache Management**: Programmable policies introduced via [RFC #57103](https://github.com/vllm-project/vllm/issues/57103), allowing custom retention, movement, and quota logic—critical for long-running agentic workflows.
- **Prefix Caching**: Improved precision via block hash tagging by LoRA path ([PR #59335](https://github.com/vllm-project/vllm/pull/59335)) and source identifiers ([PR #51899](https://github.com/vllm-project/vllm/pull/51899)).

---

### **5. Stability & Regressions**  
High-severity issues reported today:
- **GLM-5.3-Flash**: Illegal memory access during long-context chunked prefill persists in v0.30.0 (4x B200, MTP enabled); confirmed reproducible despite prior fixes ([Issue #59115](https://github.com/vllm-project/vllm/issues/59115)).
- **DeepSeek-V4.1-Flash**: CUDA illegal memory access under high concurrency (>256 `max_num_seqs`) on H20 GPUs; mitigated by limiting `max_num_seqs=256` ([Issue #56389](https://github.com/vllm-project/vllm/issues/56389)).
- **Tool Calling**: Silent failure of `tool_choice="required"` enforcement on `/v1/chat/completions` for Qwen3.6 hybrid models with prefix caching + MTP3 ([Issue #47194](https://github.com/vllm-project/vllm/issues/47194)).
- **Speculative Decoding**: `prompt_logprobs` corruption when MTP is enabled on Qwen3.5-family models ([Issue #53488](https://github.com/vllm-project/vllm/issues/53488)).

*Note: Fix PRs exist for some regressions (e.g., #59286 for LoRA naming conflict), but core stability issues remain open.*

---

### **6. What This Means for Application Developers**  
- **Agentic Workflows**: Use **programmable KV cache policies** ([RFC #57103](https://github.com/vllm-project/vllm/issues/57103)) to control cache retention and reduce drift in long reasoning chains.
- **Multimodal Apps**: Be cautious with ViT encoder offloading—**full CUDA graph support is under RFC** ([Issue #38175](https://github.com/vllm-project/vllm/issues/38175)); expect performance tradeoffs until resolved.
- **Production Deployments**: Avoid `max_num_seqs > 256` for DeepSeek-V4.1-Flash on H20; monitor GLM-5.3-Flash for crashes under long-context loads.
- **Tool Calling**: If using `tool_choice="required"`, avoid MTP + prefix caching on hybrid models (Qwen3.6, Kimi) until fix lands.
- **Model Serving**: For AMD users, track progress on [Qwen3.8-2.4T-A95B performance](https://github.com/vllm-project/vllm/issues/57149)—expect optimized inference soon.

> ✅ **Action Item**: Audit your deployment’s `max_num_seqs`, tool call handling, and KV cache settings if using MTP or hybrid models.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-09-30**

---

### **1. Today's Highlights**  
The SGLang ecosystem continues to mature with active work on hybrid Mamba/GDN and DSA-backed inference, particularly for large-scale models like GLM-5.3-Flash and Qwen3.5-397B. Key focus areas include stability fixes for speculative decoding and radix cache behavior, as well as foundational improvements in AMD ROCm support and memory management under high concurrency.

---

### **2. Releases & Breaking Changes**  
None reported in the last 24 hours. No new versions or breaking API/config changes were released.

---

### **3. New Model & Hardware Support**  
- **AMD ROCm Support Expansion**: PR [#39595](https://github.com/sgl-project/sglang/pull/39595) adds FlyDSL GDN prefill backend for AMD gfx95 (e.g., MI300), enabling optimized inference for models with heavy Gated DeltaNet layers (e.g., Qwen3.5-397B).  
- **Moore Threads (MUSA)**: Issue [#16565](https://github.com/sgl-project/sglang/issues/16565) tracks first-class support for Moore Threads GPUs — a long-term roadmap item with growing community interest.  
- **Diffusion Model Enhancements**: PRs [#41794](https://github.com/sgl-project/sglang/pull/41794) and [#41797](https://github.com/sgl-project/sglang/pull/41797) introduce Quark weight layout optimizations and customizable libx264 presets for video generation workflows.

---

### **4. Performance & Optimization**  
- **Hybrid Mamba Models**: PR [#27220](https://github.com/sgl-project/sglang/pull/27220) eliminates up to **17.8x TTFT regression** caused by radix cache in hybrid Mamba models (e.g., Qwen3.5-35B-A3B), restoring performance parity with disabled cache.  
- **Speculative Decoding Efficiency**: PR [#38213](https://github.com/sgl-project/sglang/pull/38213) reduces redundant attention setup during speculative decoding, improving throughput in draft-based inference pipelines.  
- **Kernel-Level Optimizations**:  
  - PR [#29720](https://github.com/sgl-project/sglang/pull/29720) fixes integer overflow in `merge_state_v2` kernel using 64-bit indexing, critical for long-context batched workloads.  
  - PR [#41671](https://github.com/sgl-project/sglang/pull/41671) fuses Flux3 rowwise FP8 quantization with Triton kernels, accelerating diffusion model decoding on supported hardware.

---

### **5. Stability & Regressions**  
- **Critical GPU Memory Corruption / Crash**:  
  - Issue [#41617](https://github.com/sgl-project/sglang/issues/41617): `--strip-thinking-cache + retraction` causes double-free in KV cache due to incorrect ownership tracking in radix tree. *Fix pending*.  
  - Issue [#41494](https://github.com/sgl-project/sglang/issues/41494): GLM-5.3-Flash DSA k-pool indexer corrupts long-context (16K) NIAH needle digits; vLLM/transformers read same input correctly → indicates SGLang-specific bug. *No fix yet*.  
- **Model-Specific Crashes**:  
  - Issue [#41609](https://github.com/sgl-project/sglang/issues/41609): Bit-identical drift in teacher-forced logprobs on `nvidia/GLM-5.3-Flash-NVFP4` after `2026-09-18`, suspected linked to KDA fusion gate (#39688).  
  - Issue [#41539](https://github.com/sgl-project/sglang/issues/41539): Worker process sends SIGQUIT to PID 1 when launcher dies — can destabilize supervisor processes.  
- **CI Infrastructure**: Issue [#17050](https://github.com/sgl-project/sglang/issues/17050) reports 1 broken, 10 flaky CI jobs on `main`, including AMD-specific failures tracked in [#37451](https://github.com/sgl-project/sglang/issues/37451).

---

### **6. What This Means for Application Developers**  
- **Use caution with `--strip-thinking-cache` and retraction** — it may trigger undefined behavior in KV cache management. Avoid in production until #41617 is resolved.  
- **Hybrid Mamba models (e.g., Qwen3.5-397B)** benefit significantly from radix cache *if* you avoid `--disable-radix-cache`. Use PR [#27220]’s fix path to maintain low TTFT.  
- **AMD users** should monitor PR [#39595] for early access to GDN-optimized inference on MI300 systems.  
- **For video-generation apps**, PR [#41797] enables customization of `libx264` presets — crucial for balancing latency vs. quality in real-time streaming.  
- **Expect potential instability** with GLM-5.3-Flash NVFP4 on SM100 after `2026-09-18`; consider pinning to `v0.5.20` if reproducible drift impacts accuracy.

> 🔗 **Join the discussion**: [Slack.sglang.io](https://slack.sglang.io)  
> 📌 Track major issues: [#21302](https://github.com/sgl-project/sglang/issues/21302), [#17050](https://github.com/sgl-project/sglang/issues/17050), [#39595](https://github.com/sgl-project/sglang/issues/39595)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-09-30**

---

### **1. Today's Highlights**  
The latest development cycle focuses on Vulkan backend stability and performance tuning for MoE and high-core-count workloads, with critical fixes for Intel GPU performance and Adreno 750 compatibility. New support for FP32 GELU_ERF/GEGLU_ERF on Hexagon and ZDNN backend CI integration signal expanding hardware reach, while ongoing efforts to stabilize speculative decoding and long-running inference continue.

---

### **2. Releases & Breaking Changes**  
No new tagged releases in the past 24h. However, **b11269–b11260** include notable changes:
- `b11269`: Added ZDNN backend build (not tested) and updated CI to use Ubuntu 26.04 + Bash shell — *potential impact on CI reliability and cross-platform consistency*.
- `b11264`: Enforced stricter input tensor validation (`GGML_OP_NONE`) — may break existing code relying on invalid tensor states.
- `b11263`: Modified EOG token heuristic to preserve `</s> NORMAL` in PLaMo-2/3 vocabularies — affects prompt handling for these models.

> 🔗 [GitHub PR #29541](https://github.com/ggml-org/llama.cpp/pull/29541), [PR #29504](https://github.com/ggml-org/llama.cpp/pull/29504), [PR #29580](https://github.com/ggml-org/llama.cpp/pull/29580)

---

### **3. New Model & Hardware Support**  
- **Hexagon**: Added full FP32 support for `GELU_ERF` and `GEGLU_ERF` kernels, enabling better accuracy for non-autoregressive models like GraniteSpeech5ForCTC ([#29446](https://github.com/ggml-org/llama.cpp/pull/29446)).
- **ZDNN**: Initial CI integration for ZDNN backend (no test yet), indicating early-stage support for AI accelerators from IBM’s Z-series systems.
- **Vulkan**: Added opt-in compatibility guard for Adreno 750 (Galaxy S24) to prevent shader compiler segfaults ([#29165](https://github.com/ggml-org/llama.cpp/pull/29165)).

> 🔗 [PR #29631](https://github.com/ggml-org/llama.cpp/pull/29631), [PR #29165](https://github.com/ggml-org/llama.cpp/pull/29165), [PR #29446](https://github.com/ggml-org/llama.cpp/pull/29446)

---

### **4. Performance & Optimization**  
- **Vulkan (Intel)**: Tuned GDN kernel and optimized F32 A-matrix loading (2-at-a-time for 2-aligned tensors), improving throughput on Intel Arc GPUs ([#29476](https://github.com/ggml-org/llama.cpp/pull/29476)).
- **Vulkan (MoE)**: Fixed tile selection logic in `mat_mul_id` to account for per-expert row counts — resolves throughput cliff at B=9 for many-expert MoEs ([#29182](https://github.com/ggml-org/llama.cpp/pull/29182)).
- **AVX512-FP16**: Accumulated f16 dot products in f32 for higher precision — improves numerical stability during inference ([#29545](https://github.com/ggml-org/llama.cpp/pull/29545)).
- **Metal**: Added MoE and SSM_CONV fusion optimizations (top-k routing, RMS_NORM+SCALE, SSM_CONV+silu) — expected to boost throughput on Apple Silicon ([#28948](https://github.com/ggml-org/llama.cpp/pull/28948)).

> 🔗 [PR #29476](https://github.com/ggml-org/llama.cpp/pull/29476), [PR #29182](https://github.com/ggml-org/llama.cpp/pull/29182), [PR #29545](https://github.com/ggml-org/llama.cpp/pull/29545), [PR #28948](https://github.com/ggml-org/llama.cpp/pull/28948)

---

### **5. Stability & Regressions**  
Critical issues reported today:
- **Vulkan (AMD Strix Halo)**: Batched decode throughput drops sharply at `n_tokens = 9` due to incorrect MMV dispatch thresholds — confirmed in Qwen3-Coder-Next 30B-A3B ([#25356](https://github.com/ggml-org/llama.cpp/issues/25356)).
- **Qwen3.8 DFlash/MTP on Vulkan**: OOB token ID error (`token[1] = 248320 == n_vocab`) — crashes decode; tied to invalid memory access in draft generation ([#28158](https://github.com/ggml-org/llama.cpp/issues/28158)).
- **Long-running Vulkan (A770)**: Decode degradation after ~7–8 hours — empty EOS replies due to fence timeout or resource leak ([#29526](https://github.com/ggml-org/llama.cpp/issues/29526)).
- **Hexagon (Snapdragon 7 Gen 4)**: HMX MUL_MAT returns `inf`, FLASH_ATTN_EXT fails, garbled output — likely driver/compiler issue ([#29473](https://github.com/ggml-org/llama.cpp/issues/29473)).

> 🔗 [Issue #25356](https://github.com/ggml-org/llama.cpp/issues/25356), [Issue #28158](https://github.com/ggml-org/llama.cpp/issues/28158), [Issue #29526](https://github.com/ggml-org/llama.cpp/issues/29526), [Issue #29473](https://github.com/ggml-org/llama.cpp/issues/29473)

---

### **6. What This Means for Application Developers**  
- **Avoid `--no-kv-offload` on Vulkan** if using large context models (e.g., Qwen3.6-27B); it may trigger immediate EOS due to known bug ([#24519](https://github.com/ggml-org/llama.cpp/issues/24519)).
- **Use `--cache-ram -1` cautiously** — it does not disable limits; RAM grows linearly with prompts (~640 MiB per short prompt) — consider setting explicit caps ([#29324](https://github.com/ggml-org/llama.cpp/issues/29324)).
- **Expect instability in long-running inference jobs** on AMD Radeon A770 (Vulkan) beyond 8 hours — implement restart logic or monitor for `empty EOS`.
- **Enable `--spec-type draft-mtp` only if testing with supported backends** — OpenVINO and Vulkan show crashes under speculative decoding ([#25972](https://github.com/ggml-org/llama.cpp/issues/25972)).
- **Monitor for model-specific regressions** — e.g., Qwen3.8 DFlash/MTP fails on Vulkan unless patched; verify builds before deployment.

> 🔗 [Issue #24519](https://github.com/ggml-org/llama.cpp/issues/24519), [Issue #29324](https://github.com/ggml-org/llama.cpp/issues/29324), [Issue #25972](https://github.com/ggml-org/llama.cpp/issues/25972)

---  
*Data source: [github.com/ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)*  
*Digest generated: 2026-09-30*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-09-30**

---

### **1. Today's Highlights**  
Ollama v0.35.1-rc0 introduces expanded web search support (up to 10 per response) and updates to `llama.cpp` (b11232) and MLX backend, enhancing multimodal and inference stability. Critical bug fixes address long-running hangs in CUDA and MLX backends, while new System One model support lays groundwork for decision-only AI workflows.

---

### **2. Releases & Breaking Changes**  
- **v0.35.1-rc0** released with:  
  - ✅ Increased web search limit from 1 to **10 per response** ([#18602](https://github.com/ollama/ollama/pull/18602))  
  - 🔧 `llama.cpp` updated to **b11232** ([#18652](https://github.com/ollama/ollama/pull/18652))  
  - 📦 MLX version bump ([#18651](https://github.com/ollama/ollama/pull/18651))  
- ⚠️ **Note**: v0.35.0 was mistakenly marked as a pre-release without `-rc` suffix — confirmed as an issue ([#18706](https://github.com/ollama/ollama/issues/18706)).

---

### **3. New Model & Hardware Support**  
- **System One models** now supported via `create` API and `MLX` backend ([#18708](https://github.com/ollama/ollama/pull/18708), [#18701](https://github.com/ollama/ollama/pull/18701)). Enables lightweight, decision-focused models like Kev and Laya.  
- **GraniteForCausalLM** architecture added to MLX backend ([#17972](https://github.com/ollama/ollama/pull/17972)), enabling IBM’s Granite 4.1/4.2 models on Apple Silicon.  
- **Audio input support** requested for multimodal models (e.g., Qwen2-Audio) — currently pending ([#11798](https://github.com/ollama/ollama/issues/11798)).

---

### **4. Performance & Optimization**  
- **VRAM-based context length** now auto-tuned based on available GPU memory (≥47 GiB → 256k; ≥23 GiB → 32k; else 4k) — documented in FAQ ([#18710](https://github.com/ollama/ollama/pull/18710)).  
- **Tool-call parsing improvements** prevent premature emission of incomplete tool calls ([#18289](https://github.com/ollama/ollama/pull/18289), [#18624](https://github.com/ollama/ollama/pull/18624)), reducing client-side errors.  
- **Thinking budget control** introduced to prevent infinite reasoning loops ([#17566](https://github.com/ollama/ollama/pull/17566)).

---

### **5. Stability & Regressions**  
- **Critical**: `llama-server` wedges under sustained single-slot load (MLX nvfp4), causing requests to hang indefinitely until SIGTERM ([#18505](https://github.com/ollama/ollama/issues/18505)). No fix PR yet.  
- **High severity**: Windows tray app fails to start server despite visible icon (`OLLAMA_NUM_PARALLEL=1`) — manual `ollama serve` works ([#18507](https://github.com/ollama/ollama/issues/18507)).  
- **Medium**: macOS GUI silently fails after 60s during long document processing ([#18368](https://github.com/ollama/ollama/issues/18368)); affects high-context models (128k).  
- **Minor**: Chat history column not resizable on macOS ([#18709](https://github.com/ollama/ollama/issues/18709)).

---

### **6. What This Means for Application Developers**  
- **Enable more reliable agents**: Use `CAPABILITY` declarations and System One APIs to build lightweight, rule-driven decision pipelines with guaranteed output types ([#18708](https://github.com/ollama/ollama/pull/18708), [#18702](https://github.com/ollama/ollama/pull/18702)).  
- **Avoid hanging requests**: Implement token budgeting (`thinking_budget`) or monitor for `llama-server` stalls in MLX/CUDA environments.  
- **Prepare for audio/multimodal workloads**: Track [#11798](https://github.com/ollama/ollama/issues/11798) for future integration.  
- **Export/import models offline**: Use new `ollama export/import` commands ([#18578](https://github.com/ollama/ollama/pull/18578)) for secure, air-gapped deployment.  

> 💡 *Pro tip*: For production systems, avoid `v0.35.0` due to incorrect release tagging; use `v0.35.1-rc0` or later stable releases.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-09-30**

---

### **1. Today's Highlights**  
The LiteLLM ecosystem continues rapid evolution with a focus on security, observability, and cross-provider consistency. Key developments include improved handling of encrypted reasoning in router workflows, enhanced guardrail scanning for Azure services, and critical fixes for model-specific streaming and cost tracking issues—especially around OpenAI’s gpt-5.6 family and Bedrock Converse routing. The proxy now returns proper 400 errors for malformed requests, improving client-side error detection.

---

### **2. Releases & Breaking Changes**  
- **v1.104.0-rc.2**, **v1.103.1**, **v1.102.2**, **v1.101.3**, and **v1.100.4** released within the last 24 hours.  
- All Docker images are signed via [cosign](https://github.com/BerriAI/litellm/commit/0112e53) using a consistent key — verify with `cosign verify` (see [docs](https://docs.sigstore.dev/cosign/overview/)).  
- No breaking API changes reported; updates are primarily bug fixes and stability improvements.

> 🔗 [GitHub Release Page](https://github.com/BerriAI/litellm/releases)

---

### **3. New Model & Hardware Support**  
- **Anthropic Workload Identity Federation (OIDC JWT-bearer)**: Added support via Issue [#28607](https://github.com/BerriAI/litellm/issues/28607), enabling secure identity-based auth for enterprise deployments.  
- **Gemini Robotics ER-2 Preview**: Model pricing now correctly reflects token billing (Issue [#43575](https://github.com/BerriAI/litellm/issues/43575)), though still under review due to double-costing risk.  
- **Bedrock Converse Routing**: Enhanced metadata handling for regional aliases (PR #43785) ensures correct routing for Converse-compatible models like Claude 3.5.  

> 🔗 [Feature Request: OIDC Auth](https://github.com/BerriAI/litellm/issues/28607) | [Bedrock Fix PR](https://github.com/BerriAI/litellm/pull/43785)

---

### **4. Performance & Optimization**  
- **Auth Management Optimization**: PR [#43776](https://github.com/BerriAI/litellm/pull/43776) reduces per-key auth refresh latency by batching Redis calls via pipeline — cuts ~16 serial Redis trips per request.  
- **OTel V2 Improvements**: PR [#43278](https://github.com/BerriAI/litellm/pull/43278) introduces `excluded_services` opt-out for datastore spans (Redis/Postgres), reducing telemetry noise and ingestion costs for multi-tenant setups.  
- **Batch Line Item Persistence**: PR [#41691](https://github.com/BerriAI/litellm/pull/41691) enables callback storage of individual batch JSONL line items, preserving audit trails even after provider file expiration.

> 🔗 [Auth Pipeline Fix](https://github.com/BerriAI/litellm/pull/43776) | [OTel Span Filtering](https://github.com/BerriAI/litellm/pull/43278)

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Impact |
|---------|------|--------|--------|
| ⚠️ High | `gpt-5.6-*` models fail with function tools due to `reasoning_effort` error | [Issue #33221](https://github.com/BerriAI/litellm/issues/33221) | Streaming breaks on self-hosted proxies |
| ⚠️ High | Repeated chunk detection floods logging callbacks (telemetry spam) | [Issue #13786](https://github.com/BerriAI/litellm/issues/13786) | System instability under load |
| ⚠️ Medium | `PromptTokensDetailsWrapper` crashes when `cache_creation_tokens` unset (DashScope first-turn) | [Issue #43756](https://github.com/BerriAI/litellm/issues/43756) | Fails initial conversation setup |
| ⚠️ Medium | `gemini-robotics-er-2-preview` bills thinking tokens at 2× output rate | [Issue #43575](https://github.com/BerriAI/litellm/issues/43575) | Cost overruns if unmonitored |
| 🟡 Low | Silent drop of `document` content blocks when routing Anthropic → Bedrock Converse | [Issue #43737](https://github.com/BerriAI/litellm/issues/43737) | Data loss in multimodal flows |

✅ **Fixes in Progress**:  
- PR [#43781](https://github.com/BerriAI/litellm/pull/43781): Strips encrypted reasoning if pinned deployment can’t decrypt (critical for hybrid routing).  
- PR [#43787](https://github.com/BerriAI/litellm/pull/43787): Returns 400 instead of 500 for missing params/pagination errors — improves client resilience.

---

### **6. What This Means for Application Developers**  
- **Security & Compliance**: Enable OIDC federation (via `anthropic_workload_identity`) for zero-trust access in regulated environments. Use `cosign` verification to ensure image integrity in CI/CD pipelines.  
- **Cost Control**: Monitor `gemini-robotics-er-2-preview` pricing carefully — its current configuration inflates costs. Ensure `include_cost_in_streaming_usage` is enabled via config (`litellm_settings`) for real-time cost visibility.  
- **Agent Reliability**: Avoid `max_iterations`/`max_budget_per_session` sharing across agents in same trace (Issue #43190). Use unique session IDs or enforce isolation.  
- **Debugging & Observability**: Leverage new `x-litellm-call-id` surface in logs (PR #42436) and OTEL spans to correlate traces across UI, backend, and provider systems.  
- **Streaming Robustness**: Validate that tool calls and structured outputs are properly supported on newer models (e.g., Haiku 4.5 — Issue #25308), and avoid relying on auto-conversion without explicit allowlisting.

> 🔗 [Developer Guide: Cost Tracking](https://docs.litellm.ai/docs/proxy/usage_tracking) | [Guardrails Integration](https://docs.litellm.ai/docs/guardrails)

---  
*Generated: 2026-09-30 | Source: [BerriAI/litellm GitHub](https://github.com/BerriAI/litellm)*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-09-30**

---

### **1. Today's Highlights**  
The Unsloth ecosystem continues to expand its vision and inference capabilities, with critical improvements in GGUF model handling and UI/UX stability. Key PRs focus on fixing long-standing issues around model loading (e.g., `Qwen-Image-2.1` memory spikes), enabling better support for mixed GPU environments (NVIDIA + AMD), and enhancing the chat experience through interactive HTML widgets and real-time prefill monitoring.

---

### **2. Releases & Breaking Changes**  
*None reported in the last 24 hours.*  
No new releases or breaking API/config changes were published. However, several PRs address regressions in model loading and runtime behavior—particularly around `llama.cpp` backend selection and multi-GPU coordination—which may affect users upgrading from older versions.

---

### **3. New Model & Hardware Support**  
- ✅ **Mixed GPU Support**: Users now have clearer visibility into which GPU (`CUDA`, `ROCm`) is being used by `llama.cpp` vs. training (via #12247, #12248).  
- ✅ **AMD ROCm + CUDA Coexistence**: Fixes enable simultaneous use of NVIDIA (for `llama.cpp`) and AMD (for training) cards (#12248, #12246).  
- ✅ **GGUF Vision Models**: Enhanced rendering for transparent images (e.g., PNG/WebP) ensures dark text remains legible against transparent backgrounds (#12310).  
- 🚧 **M5 Max / M5 Ultra Limitations**: Reports indicate memory constraints when running Qwen-Image-2.1-Q4_K_M (~19 GB additional assets), suggesting hardware-specific bottlenecks (#11792, #12257).

> 🔗 [Issue #11792](https://github.com/unslothai/unsloth/issues/11792) | [Issue #12257](https://github.com/unslothai/unsloth/issues/12257)

---

### **4. Performance & Optimization**  
- ⚙️ **vLLM INT4 Inference Fix**: A critical PR (#12320) addresses packed INT4 inference crashes in vLLM 0.29 by correctly building `marlin_gemm` calls from op schema—essential for high-throughput, low-memory LLM serving.  
- ⚙️ **FP8 Linear Block Size Honor**: Ensures correct block size (`32x32`) is passed during FP8 kernel execution, preserving precision and performance in quantized models (#12317).  
- ⚙️ **Gradient Checkpointing Fix**: Forces non-reentrant checkpointing for DeepSeek-V4.1 to prevent state corruption during training (#12318).  
- 📈 **Prefill Progress Monitoring**: Real-time prefill progress is now exposed via API monitor, allowing clients to track long prompt processing delays (e.g., 64k context models) (#11141, #11161).

> 🔗 [PR #12320](https://github.com/unslothai/unsloth/pull/12320) | [PR #12317](https://github.com/unslothai/unsloth/pull/12317) | [PR #12318](https://github.com/unslothai/unsloth/pull/12318) | [Issue #11141](https://github.com/unslothai/unsloth/issues/11141)

---

### **5. Stability & Regressions**  
- 🔥 **Critical Crash**: `FastLanguageModel.from_pretrained()` fails during state dict extraction with `LFM2.5` models when `fast_inference=True`, despite successful vLLM load (#4073).  
- 🔥 **Memory Overflow**: Running `Qwen-Image-2.1-Q4_K_M` on M5 Max (48GB RAM) triggers insufficient memory errors due to unexplained ~19 GB "Required assets" download post-initial fetch (#11792).  
- 🔥 **UI Freeze**: Terminal tool dispatches containing two self-referential assignments (`VAR=$VAR`) cause hard freezes due to unbounded recursion in `tools.py:4012` (#12084).  
- 🔥 **Training Failure**: `Muse-Glimmer` fine-tuning fails to compile due to data-dependent `if frames > 1` in generated `get_vision_pixel_shuffle_index` (#11434).  
- 🔥 **Gradle Build Breakage**: Recent updates break Gradle project builds with `Error loading java.security file` on Linux (#12260); fix in progress (#12294).

> 🔗 [Issue #4073](https://github.com/unslothai/unsloth/issues/4073) | [Issue #11792](https://github.com/unslothai/unsloth/issues/11792) | [Issue #12084](https://github.com/unslothai/unsloth/issues/12084) | [Issue #11434](https://github.com/unslothai/unsloth/issues/11434) | [PR #12294](https://github.com/unslothai/unsloth/pull/12294)

---

### **6. What This Means for Application Developers**  
- **Build robust agent pipelines**: Use the new `X-Unsloth-Monitor-ID` and prefill progress tracking (#11161) to implement client-side feedback for long-running prompts—critical for UX in large-context applications.  
- **Avoid silent failures**: Monitor for `eval_steps` misconfiguration (issue #3177), and ensure `eval_strategy="steps"` is set when using `eval_steps`.  
- **Handle mixed GPU setups carefully**: If deploying on systems with both NVIDIA and AMD GPUs, explicitly configure `llama.cpp` and training backends to avoid unintended fallbacks (e.g., CUDA on ROCm-only hosts).  
- **Prepare for model-specific quirks**: Expect unpredictable memory usage with vision models (e.g., `Qwen-Image-2.1`) and verify asset downloads are complete before attempting inference.  
- **Validate tools and code outputs**: The system may re-prompt completed code answers (#12309), so agents should guard against redundant tool calls or unexpected retries.

> 🔗 [PR #12309](https://github.com/unslothai/unsloth/pull/12309) | [Issue #3177](https://github.com/unslothai/unsloth/issues/3177) | [Issue #11792](https://github.com/unslothai/unsloth/issues/11792)

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*