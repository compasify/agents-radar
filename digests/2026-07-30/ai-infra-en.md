# AI Infrastructure Digest 2026-07-30

> Generated: 2026-07-30 01:19 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# Cross-Project AI Infrastructure Comparison Report — 2026-07-30

## 1. Ecosystem Overview

The AI inference infrastructure landscape is entering a phase of intense specialization and concurrent instability. Across the six tracked projects, three dynamics dominate: speculative decoding is becoming table-stakes across engines, hardware diversity (Blackwell, AMD ROCm, Apple Silicon MLX, NPU) is fragmenting optimization efforts, and model architecture complexity (Kimi K3, MiniCPM5, GLM-5.2) is outpacing framework stability. The day's activity reveals a tension between rapid model support and production-grade reliability: cutting-edge features land alongside critical regressions that could impact revenue pipelines. Agentic workloads (tool-calling, MCP, parallel chat) are driving feature development across the stack, while the industry shifts toward disaggregated serving and asynchronous storage backends to meet latency demands.

## 2. Activity Comparison

| Project | Issues (Open/Total Today) | PRs (Open/Merged Today) | Release Status |
|---------|--------------------------|------------------------|----------------|
| **vLLM** | ~12 high-severity; 1 tracking issue (Kimi K3 #50001) | ~8 in flight; 0 merged today | No new release |
| **SGLang** | ~10 open (3 high-severity) | ~6 in flight; 0 merged today | No new release |
| **llama.cpp** | ~12 open (1 critical, 3 high) | ~8 in flight; 6 merged across b10174–b10182 | 9 tagged releases today |
| **Ollama** | ~8 open (2 critical reliability) | ~6 in flight; 2 merged | No new release |
| **LiteLLM** | ~6 open (2 high) | ~8 merged/active; 1 RC tagged | v1.95.0-rc.1 |
| **Unsloth** | ~10 open (3 high) | ~6 in flight; 0 merged | v0.1.51-beta |

**Key observations**: llama.cpp is the most rapidly shipping project today with 9 releases, reflecting its mature CI and low-barrier release model. LiteLLM is close behind with a release candidate. The serving engines (vLLM, SGLang) show high bug-report churn but zero new releases, suggesting focus on stability engineering rather than feature velocity. Unsloth’s beta release signals experimental feature confidence but with acknowledged rough edges.

## 3. Model Support Race

| Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|---------------------|------|--------|-----------|--------|---------|---------|
| **Kimi K3** | Tracking (#50001); KV cache, kernels, DCP in flight | Roadmap published (#32607); PR #32837 adds PD + DCP | PR #26185 (hybrid KDA+MLA) | — | — | v0.1.51-beta (Dynamic GGUF) |
| **MiniCPM5** | XML tool parser PR (#50198) | — | — | — | — | — |
| **GLM-5.2 (DSA)** | — | — | b10174 (NextN/MTP) | — | — | — |
| **MiniMax-M3** | — | PR #31989 (NVFP4) | Prefill improvement PR #26297 | `minimax-m3:cloud` added | — | — |
| **Qwen3.5 / 3.6** | MTP issues (#39573, #46249) | — | MTP tensor load bug (#26290) | MLX MTP spec decode (#17454) | — | Qwen3.6 GGUF routing bug (#7623) |
| **Motif 3** | — | — | PR #26298 (GDLA, 16 GQA heads) | — | — | — |
| **Qwen3-TTS** | — | — | PR #26254 (mtmd) | — | — | — |

**Who is ahead**: vLLM and SGLang are neck-and-neck on Kimi K3, but vLLM has a more detailed task breakdown. llama.cpp is the clear leader in raw architecture diversity, adding GLM-5.2, Motif 3, and Qwen3-TTS in a single day — though with stability debts (MTP loading, Blackwell garbled output). Unsloth wins on user-facing "just works" deployment of Kimi K3. Ollama and LiteLLM focus on model *access* rather than engine-level support, making direct comparison less meaningful.

## 4. Performance Frontier

Optimization effort clusters into six areas today:

| Area | Key Projects | Notable Work |
|------|-------------|--------------|
| **Speculative decoding scheduling** | vLLM, SGLang, llama.cpp, Ollama | vLLM RFC #48627 (context-length-aware K); SGLang EAGLE collapses prefix reuse (#32459); llama.cpp suffix decode (#26283); Ollama MTP for Qwen3.5 MLX (#17454) |
| **KV cache management** | vLLM, SGLang, llama.cpp | vLLM tiered offload promotion fills DRAM (#49902); SGLang HiCache NIXL async backend RFC (#32841); Kimi K3 KV tasks across all three |
| **Quantization & kernels** | vLLM, SGLang, llama.cpp | vLLM PTX 9.4 `ldmatrix.s8.s4` for W4A8 (#49529); NVFP4 load-time dequant (#50335); SGLang Blackwell FP8 regression fix; llama.cpp MMQ threshold for shared memory (#26285) |
| **Distributed serving** | SGLang, vLLM | SGLang AMD `flydsl-a2a` for DeepSeek MoE (#32726); vLLM Kimi K3 DCP disaggregation; both working on linear PD patterns |
| **Batching / concurrency** | vLLM, Ollama, Unsloth | vLLM chunked prefill hangs on Blackwell; Ollama CPU backend re-evaluates all tokens (#14780); Unsloth Parallel Chat (#7406) |
| **MoE tuning** | SGLang, llama.cpp | SGLang LFM2.5-8B-A1B has 23.3% headroom on H200 (#32806); llama.cpp duplicate expert-id compaction fixes (#26295) |

**Leading effort**: Speculative decoding is the single most active optimization frontier, with all six projects contributing. KV cache evolution toward tiered/hierarchical designs is the second major theme, driven by the memory demands of Kimi K3 and DeepSeek-V4.

## 5. Layer Positioning

```
+------------------+     +------------------+     +------------------+
|  Serving Engines  |     |   Local Runtimes  |     |     Gateways     |
|  (vLLM, SGLang)   |     | (llama.cpp, Ollama)|     |   (LiteLLM)      |
+------------------+     +------------------+     +------------------+
|                    |     |                    |     |                    |
| • Model serving    |     | • Single-machine   |     | • API routing      |
| • CUDA kernel opt  |     | • GGUF/MLX focused |     | • Spend mgmt       |
| • KV cache mgmt    |     | • Broad HW support |     | • MCP integration  |
| • Disaggregation   |     | • Edge deployments |     | • Provider agnostic |
| • Batching engines |     | • macOS/Linux/Win  |     | • Access control   |
+------------------+     +------------------+     +------------------+
        ^                          ^                          ^
        |                          |                          |
        +--------------------------+--------------------------+
                                   |
                      +------------------+
                      |  Training/FT     |
                      |  (Unsloth)       |
                      +------------------+
                      | • Fine-tuning    |
                      | • LoRA/QLoRA     |
                      | • Inference mode |
                      | • Web UI/agents  |
                      +------------------+
```

**Positioning differences**: vLLM and SGLang compete head-to-head on the high-performance serving tier, both targeting datacenter GPUs with advanced kernel engineering. llama.cpp occupies the local deployment niche with unmatched hardware breadth (CUDA, SYCL, Vulkan, RPC). Ollama simplifies this further for macOS/developer use. LiteLLM is the only pure gateway — no inference engine, but critical for production multi-provider orchestration. Unsloth uniquely bridges training and inference, with inference as a secondary capability to its fine-tuning core.

## 6. Trend Signals

**1. Speculative decoding is becoming a prerequisite, not a differentiator.** Every project now supports at least one variant (EAGLE, MTP, NextN, suffix decode). The engineering challenge has shifted from *whether* to support it to *how to make it production-safe* — grammar enforcement fails (#49694), prefix caching collapses (#32459), thinking budgets break (#39573). Application developers should treat spec decode as experimental unless explicitly validated with their exact workload.

**2. MCP (Model Context Protocol) is the new integration battleground.** LiteLLM shipped enterprise MCP features (per-user entitlements, result guardrails, OAuth discovery). Unsloth’s MCP tool-call lifecycle is fragile (#7625). Ollama has 220👍 for MCP support (#7865). This signals that agent-tool wiring is migrating from ad-hoc implementations to a standardized protocol — expect gateway and serving engines to compete on MCP depth over the next quarter.

**3. Tool-call format fragmentation is accelerating.** MiniCPM5’s XML parser (#50198), Gemma4’s JSON-only tool calling, and Qwen3.6’s base64 image requirement (#7596) show that the industry has not converged on a single tool schema. For agent builders, this means abstraction layers (LiteLLM, custom middleware) become critical — direct engine integration is increasingly model-specific.

**4. Blackwell (GB10/sm_121) readiness is behind schedule.** Three projects report hangs, illegal memory access, and missing kernel paths on Blackwell hardware (vLLM #40969, #50067; SGLang #32830; llama.cpp #26027). The NVIDIA platform transition is creating a stability gap that will persist for 2–4 weeks based on the "family-120" tracking issue. Shops requiring Blackwell must budget for degraded uptime or pin to Hopper.

**5. Hardware diversity is straining unified codebases.** AMD ROCm (SGLang #32726, Unsloth #7624), Intel SYCL (llama.cpp #24168, #26105), Apple MLX (Ollama #17454), and NPU (SGLang #32150) each require dedicated kernel paths and carry project-specific regressions. This fragmentation benefits llama.cpp and SGLang (most platform coverage) but creates risk for shops running heterogeneous clusters without per-hardware CI validation.

**6. Streaming reliability remains fragile.** Cross-request contamination (LiteLLM #35023), streaming cost loss (LiteLLM #16021), reasoning chunk logprobs dropped (SGLang #26778), and API streaming hangs (Unsloth #7617) all appear in a single day. For real-time applications (chat, agents, edge), streaming correctness is not yet a solved problem — expect continued low-severity but production-impactful bugs.

**Recommendation for decision-makers**: If shipping to production today, prefer vLLM or SGLang on Hopper GPUs with speculative decoding disabled. For edge/local deployments, llama.cpp offers the widest model support but watch the GLM-5.2 MTP force-load regression. LiteLLM is the safest gateway choice, but audit your MCP entitlements and OTEL configuration post-upgrade. Unsloth is best suited for fine-tuning workflows; its inference mode is functional but not yet production-grade for high-throughput serving.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest – 2026-07-30

## Today’s Highlights
DeepSeek-V4-Flash (sm_121/GB10) hits a stability wall – two new bugs report hangs (cudagraph_mode + chunked prefill) and a missing fp32 router GEMM kernel path that blocks full inference on Blackwell-based DGX Spark. On the performance front, a RFC for context-length‑aware speculative token scheduling (extending `num_speculative_tokens_per_batch_size`) and a PTX 9.4 `ldmatrix.s8.s4` proposal promise deeper batching control and faster W4A8 kernels. Kimi K3 tracking issue (#50001) consolidates work across KV cache manager, kernels, and DCP support – a model to watch.

## Releases & Breaking Changes
No new releases or version bumps in the last 24 hours.

## New Model & Hardware Support
- **Kimi K3** – Tracking issue #50001 collects tasks for KV cache management (mamba prefix caching), KDA prefill kernels, FP8 KV cache fixes (PR #50181), and DCP support (PR #50055). Slack channel linked.
- **MiniCPM5** – New XML tool parser PR (#50198) for the MinicPM5 model; tool‑call format uses `<function name="..."><param name="...">value</param></function>` – not expressible as JSON, requires dedicated parser.
- **GigaToken accelerated tokenizer** – RFC #49411 proposes integrating the Stanford GigaToken engine for higher‑throughput tokenization. Experimental, community‑driven.
- **NVFP4 load‑time dequantization** – PR #50335 adds an opt‑in path for Hopper (no native FP4 tensor cores) that dequantizes weights at load time to BF16, reducing runtime overhead for large encode/prefill batches.

## Performance & Optimization
1. **Context‑length‑aware speculative token scheduling** – RFC #48627 extends `num_speculative_tokens_per_batch_size` with an optional context‑length range so the runtime picks speculative depth K from a `(batch, ctx)` table. Backward‑compatible.
2. **PTX 9.4 `ldmatrix.s8.s4` for W4A8** – Issue #49529 proposes adopting the new hardware INT4→INT8 expanding load (CUDA 13.4.0 DP) in W4A8‑INT8 paths, potentially halving shared‑memory reads.
3. **FA4 mm_prefix range lookup** – PR #50294 optimizes Gemma4’s FA4 attention backend by better range‑search logic and CuTe JIT stability, targeting both sliding‑ and global‑attention layers.
4. **Benchmark**: A performance optimization tracking issue for DeepSeek V4 (#45861) lists several merged PRs (e.g., #45061, #45863, #44577). No absolute numbers given yet.

## Stability & Regressions
- **High severity** – **DeepSeek-V4-Flash hang** (#40969): hangs after ~6 requests with `cudagraph_mode=FULL_AND_PIECEWISE` + chunked prefill on GB10 (sm_121). No fix PR yet.
- **High severity** – **FlashMLA assertion failure** (#49922): regression in v0.26.0 – `CUDA_SUCCESS` assertion fails in FlashMLA’s `phase1.cuh` for DeepSeek-V4-Pro. Works in v0.25.0. Fix urgently needed.
- **High severity** – **Kimi K3 illegal memory access** (#50147): recurring crashes under concurrent load with TP=8 + prefix caching. Investigated in parallel with KV‑transfer fixes.
- **Medium severity** – **MTP speculative decoding breakdowns**:
  - Qwen3.5 thinking token budget not enforced with MTP (#39573) – fix exists? Not yet.
  - Qwen3.6-27B tool calls fail when MTP is enabled (#46249) – regression.
  - Gemma4 MTP crashes at engine init in v0.25.1 (#48848) – regression from v0.21.0.
  - ngram_gpu spec decode + xgrammar: verifier accepts grammar‑illegal draft tokens (#49694) → HTTP 500s.
- **Medium severity** – **Tiered KV offload promotion fills DRAM** (#49902): every waiting request promoted to primary tier, defeating offload goals. RFC #49413 proposes provenance‑carrying events and key‑only removals as refactor.
- **Medium severity** – **GB10/sm_121 silent engine death** (#50067): `EngineCore` dies during warmup (dense model, FLASH_ATTN) on DGX Spark; workaround `CUDA_LAUNCH_BLOCKING=1`.
- **Low severity** – **ROCm hang** (#39010): CUDA graph capture hangs on ROCm 0.19; stale but tracked.
- **Low severity** – **FlashInfer JIT crash** (#49497): engine fails to start when nvcc not found – no fallback to native sampler.
- **Fix PRs in flight**:
  - **Kimi-K3 FP8 KV cache prefill query quantization** (#50181) fixes false error message and selection logic.
  - **P/D preemption race** (#50297) corrects a small race where a prefill request could be preempted during its final step with async scheduling.
  - **MoRIIO per‑layer READ barrier** (#48534) fixes decode correctness in KV transfer.

## What This Means for Application Developers
- **DeepSeek-V4 on Blackwell hardware (DGX Spark / GB10) is risky**: hangs and missing router GEMM kernel paths mean production deployments may need to wait for the "family‑120" GPU kernel support (tracked in #49921). Stick to Hopper for now.
- **MTP speculative decoding remains fragile across models**: If you rely on structured outputs or tool‑calling (especially with Qwen3.6 or Gemma4), test carefully with MTP disabled. The regression reports suggest that grammar enforcement and thinking‑budget logic are not yet race‑safe.
- **KV offload concurrency is immature**: If you push heavy request concurrency with multi‑tier offload, monitor for dead‑letter scenarios (`HIT_PENDING` stalls, #49829) and full‑DRAM promotion (#49902). The ongoing refactors (#49413) should improve predictability.
- **Tool‑call formats are diversifying**: The addition of MiniCPM5 XML parser (#50198) signals that the tool‑call abstraction layer is expanding beyond JSON – if you build agents on top of vLLM, ensure your application handles XML‑formatted tool calls.
- **Performance tuning tip**: For speculative decoding on variable‑context workloads, consider adopting the upcoming context‑length‑aware scheduling (RFC #48627) once merged – it gives finer control over speculation depth under mixed prompt lengths.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest — 2026-07-30

**Data Source:** [github.com/sgl-project/sglang](https://github.com/sgl-project/sglang)

---

## 1. Today’s Highlights

- A [critical bug in EAGLE speculative decoding](#32459) silently collapses radix prefix reuse from 97% to 40–53% on multi-turn agentic traffic, affecting any model using GLM-DSA NVFP4.  
- The Kimi K3 roadmap ([#32607](https://github.com/sgl-project/sglang/issues/32607)) was published, outlining kernel optimizations, and a companion PR ([#32837](https://github.com/sgl-project/sglang/pull/32837)) ports Kimi Linear PD disaggregation with DCP to main.  
- A major RFC ([#32841](https://github.com/sgl-project/sglang/issues/32841)) proposes an asynchronous completion backend for the HiCache NIXL storage layer, aiming to reduce poll overhead.

---

## 2. Releases & Breaking Changes

*None in the last 24 hours.*

---

## 3. New Model & Hardware Support

- **Kimi K3** – Full roadmap with day‑0 support, cookbook, and blog published ([#32607](https://github.com/sgl-project/sglang/issues/32607)). PR [#32837](https://github.com/sgl-project/sglang/pull/32837) adds Kimi Linear PD + DCP support.  
- **MiniMax‑M3‑NVFP4** – Support PR opened ([#31989](https://github.com/sgl-project/sglang/pull/31989)).  
- **Hygon HCU GPUs** – Phased roadmap issue ([#31015](https://github.com/sgl-project/sglang/issues/31015)).  
- **NPU Quantization** – PR [#32150](https://github.com/sgl-project/sglang/pull/32150) adapts Qwen3.5 dense model with MXFP8/MXFP4 on SM NPU; PR [#30318](https://github.com/sgl-project/sglang/pull/30318) adds W4A8 MXFP MoE support for Ascend NPU.  
- **Diffusion** – PR [#32667](https://github.com/sgl-project/sglang/pull/32667) adds K/V‑gather sequence‑parallel attention for diffusion models.  
- **AMD/ROCm** – Intranode `flydsl-a2a` enabled for DeepSeek‑style MoE on AMD ([#32726](https://github.com/sgl-project/sglang/pull/32726)). Two PRs fix DeepSeek‑V4 fused‑RMS FP8 scale metadata on gfx950 ([#32839](https://github.com/sgl-project/sglang/pull/32839), [#31727](https://github.com/sgl-project/sglang/pull/31727)).  
- **MLX (Apple Silicon)** – Request capacity now sized by attention DP ([#32115](https://github.com/sgl-project/sglang/pull/32115)).

---

## 4. Performance & Optimization

- **MoE Tuning for H200** – LFM2.5‑8B‑A1B lacks a tuned config; kernel headroom is 1.37×–1.74× and end‑to‑end throughput can improve **23.3%** once tuned ([#32806](https://github.com/sgl-project/sglang/issues/32806)).  
- **Blackwell FP8 Regression Fixed** – PR [#28333](https://github.com/sgl-project/sglang/pull/28333) regressed Llama‑3.3‑70B TP8 decode; fix was merged in [#29201](https://github.com/sgl-project/sglang/pull/29201) ([#32787](https://github.com/sgl-project/sglang/issues/32787)).  
- **Nemotron Decode Fix** – PR [#32555](https://github.com/sgl-project/sglang/pull/32555) fixes stale tail reads in CUDA‑graph track buffers for Mamba2‑hybrid models (e.g. Nemotron‑H).  
- **Port Collision Prevention** – PR [#31731](https://github.com/sgl-project/sglang/pull/31731) eliminates random `EADDRINUSE` launch failures from self‑collision.  
- **Kernel Inventory Cleanup** – PR [#32788](https://github.com/sgl-project/sglang/pull/32788) adds inventory guards and reorganises benchmarks, improving CI throughput.  
- **HiCache NIXL Async Backend** – RFC [#32841](https://github.com/sgl-project/sglang/issues/32841) details measurements and design for asynchronous completion, building on poll‑cost data from [#27359](https://github.com/sgl-project/sglang/pull/27359).

---

## 5. Stability & Regressions

| Issue / PR | Severity | Description | Status |
|------------|----------|-------------|--------|
| [#32459](https://github.com/sgl-project/sglang/issues/32459) | **High** | EAGLE speculative decoding collapses radix prefix reuse (97%→40‑53%) on multi‑turn traffic; silent, no crash. | Open |
| [#32655](https://github.com/sgl-project/sglang/issues/32655) | **Medium** | Piecewise prefill CUDA graph (#30889) regresses Kimi‑K2.6 NVFP4 throughput by ~3.7% at 1K/1K, concurrency 1. | Open, cc @mickqian |
| [#32830](https://github.com/sgl-project/sglang/issues/32830) | **Medium** | NVIDIA compiler segfault when serving DeepSeek‑V4 under CUDA graphs. | Open |
| [#26747](https://github.com/sgl-project/sglang/issues/26747) | **Medium** | HiCache persistent storage ignores `extra_key`/cache namespace, causing incorrect KV page lookup. | Closed, inactive |
| [#26789](https://github.com/sgl-project/sglang/issues/26789) | **Critical** | Unauthenticated RCE in `/load_lora_adapter_from_tensors` – CVE reserved, CVSS 9.8/10.0. | Closed, patch expected |
| [#26778](https://github.com/sgl-project/sglang/issues/26778) | **Low** | Streaming reasoning chunks drop `logprobs` in `/v1/chat/completions`. | Closed, inactive |
| [#32316](https://github.com/sgl-project/sglang/issues/32316) | **Low** | FlashInfer workspace size check fails with `use_oneshot` keyword error. | Closed |
| [#32536](https://github.com/sgl-project/sglang/issues/32536) | **Low** | `poolside_v1` reasoning parser doesn’t separate reasoning for Laguna‑S‑2.1. | Closed |
| [#32807](https://github.com/sgl-project/sglang/issues/32807) | **Low** | Gemma‑3 RMSNorm fused kernel skipped for higher‑rank inputs; mixed‑dtype returns NaNs. | Open |
| [#28219](https://github.com/sgl-project/sglang/pull/28219) | **Medium** | Hybrid SWA memory pool sizing missing draft KV cache for EAGLE models; merged. | Merged |
| [#32829](https://github.com/sgl-project/sglang/pull/32829) | **Low** | CI graceful teardown for `kv_canary` and EAGLE spec fixtures to prevent false failures. | Open |

Additional fix PRs in flight:  
- [#31700](https://github.com/sgl-project/sglang/pull/31700) fixes DeepSeek‑V4 DP‑attention gather semantics when `moe_a2a_backend=none`.  
- [#32828](https://github.com/sgl-project/sglang/pull/32828) fixes OOB bug in DCP + DSPARK speculative decoding.

---

## 6. What This Means for Application Developers

- **If you rely on radix prefix caching for multi‑turn agents**, disable EAGLE speculative decoding until [#32459](https://github.com/sgl-project/sglang/issues/32459) is resolved, or expect a 2× TTFT increase.  
- **When upgrading SGLang**, watch for regressions in CUDA‑graph‑enabled workflows (e.g., Kimi‑K2.6, DeepSeek‑V4). Consider pinning to a known good version if using piecewise prefill or EAGLE.  
- **Secure your deployment** – the `/load_lora_adapter_from_tensors` endpoint has a critical unauthenticated RCE (CVE reserved). Update to a patched version as soon as it ships.  
- **New model adoption** is accelerating: Kimi K3, MiniMax‑M3‑NVFP4, and NPU‑quantized Qwen3.5 are nearing production readiness. Expect day‑0 support in the next few weeks.  
- **MLX users** – request capacity is now correctly derived from attention DP; revalidate your `--max-running-requests` setting.  
- **AMD GPU users** – DeepSeek‑V4 FP8 scale metadata fixes are landing; expect better accuracy and performance on gfx950. Intranode `flydsl-a2a` unlocks higher MoE throughput.

---

*Generated from GitHub data updated 2026-07-30 12:00 UTC.*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp Digest — 2026-07-30

## Today’s Highlights
- **b10182 moves `suppress_tokens` handling into `common/sampling`**, addressing a security issue and removing the now-unnecessary `has_logit_bias` field — API consumers must update their integration paths.
- **b10181 disables matrix-multiply quantized (MMQ) kernels on CUDA devices with less than 48 KiB shared memory**, which unexpectedly affects RTX 3090 (Ampere) and may cause prefill slowdowns; a related issue [#26285](https://github.com/ggml-org/llama.cpp/issues/26285) has been filed.
- **b10174 adds NextN/MTP speculative decoding support for GLM-5.2 (GLM_DSA)**, but a regression ([[#26290]](https://github.com/ggml-org/llama.cpp/issues/26290)) forces MTP tensor loading even when not needed — a fix is already up in PR [#26296](https://github.com/ggml-org/llama.cpp/pull/26296).

## Releases & Breaking Changes
- **[b10182](https://github.com/ggml-org/llama.cpp/releases/tag/b10182)** – `llama: move suppress_tokens handling to common/sampling`  
  **Breaking**: The `suppress_tokens` logic is no longer part of the core library. API users must migrate to the new `common/sampling` interface. Security fixes included.
- **[b10181](https://github.com/ggml-org/llama.cpp/releases/tag/b10181)** – `ggml-cuda: disable MMQ on devices with less than 48 KiB shared memory`  
  **Breaking**: MMQ decode is now forcibly disabled on GPUs with insufficient shared memory. RTX 3090 (48 KiB exactly) may be incorrectly flagged – see [issue #26285](https://github.com/ggml-org/llama.cpp/issues/26285).
- **[b10180](https://github.com/ggml-org/llama.cpp/releases/tag/b10180)** – SYCL contiguous fast path + 32‑bit index math for unary elementwise ops. Performance improvement, no API break.
- **[b10179](https://github.com/ggml-org/llama.cpp/releases/tag/b10179)** – Vendor update: BoringSSL → 0.20260728.0. Build system change only.
- **[b10178](https://github.com/ggml-org/llama.cpp/releases/tag/b10178)** – Server: trace logging for slot similarity checking (debugging aid, no breaking change).
- **[b10176](https://github.com/ggml-org/llama.cpp/releases/tag/b10176)** – RPC: add `tensor_memset` for remote memory initialization.
- **[b10175](https://github.com/ggml-org/llama.cpp/releases/tag/b10175)** – Add RDNA 3.5 and RDNA 3 to MMQ configs for independent tuning. AMD GPU users can now fine‑tune per generation.
- **[b10174](https://github.com/ggml-org/llama.cpp/releases/tag/b10174)** – Model: NextN/MTP speculative decoding for GLM-5.2 (GLM_DSA). **Note**: MTP tensors are now loaded by default for all GLM-5.2 GGUFs – use `--spec-type` (or upcoming opt‑out in b10183) to disable.

## New Model & Hardware Support
- **GLM-5.2 (GLM_DSA) NextN/MTP** – Merged in b10174 via PR [#25980](https://github.com/ggml-org/llama.cpp/pull/25980). Fifth in‑tree `draft-mtp` implementation.
- **Motif 3 Beta** – PR [#26298](https://github.com/ggml-org/llama.cpp/pull/26298) adds support for the new architecture using GDLA (Grouped Differential Latent Attention) with 16 GQA KV heads.
- **Kimi‑K3 text model** – PR [#26185](https://github.com/ggml-org/llama.cpp/pull/26185) adds hybrid KDA+MLA attention, cross-layer residual attention, latent MoE, and situ activation.
- **Qwen3‑TTS** – PR [#26254](https://github.com/ggml-org/llama.cpp/pull/26254) adds `mtmd` support for the talker backbone, speaker encoder, and encoder pass.
- **MXFP4 / NVFP4 quantization** – PR [#25878](https://github.com/ggml-org/llama.cpp/pull/25878) completes dense MXFP4, MoE NVFP4, and both quantization routines.
- **SYCL iGPU classification** – PR [#26105](https://github.com/ggml-org/llama.cpp/pull/26105) fixes integrated vs discrete GPU detection on Intel Arc and prevents segfaults when iGPUs are incorrectly included.

## Performance & Optimization
- **SYCL unary elementwise ops** – b10180 introduces a contiguous fast path with 32‑bit index math, reducing overhead for activation functions.
- **CUDA MVQ→MMQ decode crossover tuning** – PR [#26079](https://github.com/ggml-org/llama.cpp/pull/26079) adds per‑HW/per‑quant‑type switch points to dynamically choose between `mul_mat_vec_q` and MMQ, improving decode throughput on many GPUs.
- **CUDA backend penalty sampling** – PR [#25262](https://github.com/ggml-org/llama.cpp/pull/25262) moves repeat/frequency/presence penalties to GPU, avoiding the costly CPU sync for the sampler chain.
- **Suffix Decode (speculative decoding)** – PR [#26283](https://github.com/ggml-org/llama.cpp/pull/26283) introduces a model‑free tree‑based speculative decoder that reuses matched suffixes from the current request.
- **Minimax M3 prefill improvement** – PR [#26297](https://github.com/ggml-org/llama.cpp/pull/26297) replaces a CPU‑only MSA block selection operation with pure ggml ops, eliminating a GPU→CPU→GPU sync during prefill.
- **Host config file** – PR [#26118](https://github.com/ggml-org/llama.cpp/pull/26118) allows defining common flags (multi‑GPU, threads, API keys) in a config file to avoid repetitive CLI arguments.

## Stability & Regressions
| Issue / PR | Description | Severity | Fix Status |
|------------|-------------|----------|------------|
| [#21831](https://github.com/ggml-org/llama.cpp/issues/21831) | Server forces full prompt re‑processing on subsequent requests (SWA/recurrent memory error) – 49 comments, affects many users | **Critical** | No fix PR yet |
| [#26285](https://github.com/ggml-org/llama.cpp/issues/26285) | MMQ incorrectly disabled on RTX 3090 (shared memory check) – direct regression from b10181 | **High** | Reported, fix expected |
| [#26290](https://github.com/ggml-org/llama.cpp/issues/26290) | MTP tensors forced on load for GLM-5.2 GGUFs – regression from b10174 / PR#25980 | **High** | PR #26296 submitted |
| [#26027](https://github.com/ggml-org/llama.cpp/issues/26027) | GLM-5.2 dense‑MLA CUDA path produces garbled output on Blackwell GPUs | **High** | Under investigation |
| [#24168](https://github.com/ggml-org/llama.cpp/issues/24168) | SYCL: empty/gibberish output on qwen3next models on Intel Arc Pro B60 | **High** | No fix |
| [#24440](https://github.com/ggml-org/llama.cpp/issues/24440) | Gemma 4 31B with MTP crashes after editing system message (CUDA) | **Medium** | Open |
| [#24795](https://github.com/ggml-org/llama.cpp/issues/24795) | Gemma4‑assistant MTP draft model fails to load – regression between b9553 and b9702 | **Medium** | Open |
| [#25067](https://github.com/ggml-org/llama.cpp/issues/25067) | Premature `reasoning‑budget: deactivated` before prompt processing (Vulkan) | **Medium** | Open |
| [#26257](https://github.com/ggml-org/llama.cpp/issues/26257) | Qwen3.6‑27B garbled on dual‑GPU CUDA (RTX 5060 Ti + RTX 3060) | **Medium** | Open |
| [#26206](https://github.com/ggml-org/llama.cpp/issues/26206) | Gemma 4 12B garbled on large prompts, Intel Arc Pro B70 (SYCL) | **Medium** | Open |
| [#26295](https://github.com/ggml-org/llama.cpp/pull/26295) / [#26294](https://github.com/ggml-org/llama.cpp/pull/26294) | Duplicate expert‑id compaction fixes for MoE in CUDA `mul_mat_id` – fixes [#24591](https://github.com/ggml-org/llama.cpp/issues/24591) | **Medium** | PRs awaiting merge |

## What This Means for Application Developers
- **`suppress_tokens` relocation** (b10182) requires you to update any custom sampling pipelines to use the new `common/sampling` entry point. The old code path is removed for security.
- **MMQ threshold** (b10181) may degrade prefill performance on RTX 3090 and other Ampere GPUs. Monitor your token‑generation throughput and consider pinning to a build before b10181 if you see a regression. Workaround is being tracked in #26285.
- **GLM-5.2 / MTP loading** (b10174 and #26290) – if you use GLM-5.2 models without MTP, upgrade to a build containing PR #26296 (expected b10183) to avoid unnecessary memory overhead. For now, specify `--spec-type none` if available.
- **New model support** – Kimi‑K3, Motif 3, and Qwen3‑TTS are landing in PR review. If you need these architectures, watch for the merges. The MXFP4/NVFP4 quantization will enable smaller footprint deployments once merged.
- **SYCL iGPU fix** (PR #26105) – if you run on Intel Arc with both iGPU and dGPU, upgrade to avoid segfaults during model load.
- **Configuration management** – The upcoming host config file (PR #26118) will simplify deployment scripts, especially for multi‑GPU or multi‑thread setups.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Digest — 2026-07-30

## Today’s Highlights
Speculative decoding for Qwen‑3.5 models via the MLX engine landed (PR #17454), promising significant throughput gains on Apple Silicon. The long‑running MCP support request (Issue #7865) continues to attract community attention (220👍). Critical stability issues surfaced: a 95% failure rate for Ollama Cloud Pro (Issue #15453) and a reproducible CUDA illegal memory access when using JSON‑schema formatting with `qwen3.6:35b` (Issue #17434). A major PR adds server‑side MLX imports for safetensors, deprecating GGUF conversion (PR #14969).

## Releases & Breaking Changes
*No new releases in the last 24 hours.*

## New Model & Hardware Support
- **minimax-m3:cloud** – Added to the default recommended models list (PR [#17448](https://github.com/ollama/ollama/pull/17448)).  
- **MLX safetensors imports** – PR [#14969](https://github.com/ollama/ollama/pull/14969) adds server‑side MLX create pipeline for safetensors, reducing reliance on GGUF conversion.  
- **Qwen‑3.5 MTP speculative decoding** – PR [#17454](https://github.com/ollama/ollama/pull/17454) enables automatic speculative decoding using the built‑in MTP head in Qwen‑3.5 checkpoints (Apple Silicon MLX engine).

## Performance & Optimization
- **Speculative decoding on MLX** – PR [#17454](https://github.com/ollama/ollama/pull/17454) reports measurable throughput improvement on M5 Max (exact numbers not yet disclosed in the PR description).  
- **Speculation logging** – PR [#17455](https://github.com/ollama/ollama/pull/17455) upgrades speculation round stats to `info` level for easier debugging.  
- **Feature request: TurboQuant / RotorQuant** – Issue [#15051](https://github.com/ollama/ollama/issues/15051) (235👍) proposes extreme compression via Google’s TurboQuant and RotorQuant techniques; under discussion.  
- **BERT embeddings for non‑ASCII text** – PR [#15627](https://github.com/ollama/ollama/pull/15627) fixes the dropped `strip_accents` step in GGUF conversion, restoring correct embeddings for text with combining diacritics.

## Stability & Regressions
- **Ollama Cloud Pro – 95% failure rate** – Issue [#15453](https://github.com/ollama/ollama/issues/15453) reports that all cloud models are effectively unusable; 51 comments, no fix PR yet.  
- **CUDA illegal memory access** – Issue [#17434](https://github.com/ollama/ollama/issues/17434): `qwen3.6:35b` with JSON‑schema `format` and `think:false` crashes 100% reproducibly.  
- **Qwen‑3.6 freezes macOS on Apple M5** – Issue [#17452](https://github.com/ollama/ollama/issues/17452): system becomes unresponsive, requiring force restart.  
- **gemma4:e4b tool‑calling still broken** – Issue [#15315](https://github.com/ollama/ollama/issues/15315): tool‑parsing errors persist even after Ollama 0.20.1.  
- **CPU backend KV cache non‑functional** – Issue [#14780](https://github.com/ollama/ollama/issues/14780): every `/api/chat` request re‑evaluates all tokens from scratch.  
- **OLLAMA_MODELS envar ignored on Windows** – Fixed by PR [#17401](https://github.com/ollama/ollama/pull/17401).  
- **BERT embedding incorrect for non‑ASCII** – Fix in PR [#15627](https://github.com/ollama/ollama/pull/15627) (linked above).  
- **AMD iGPU not used on Linux** – Issue [#17447](https://github.com/ollama/ollama/issues/17447) provides a systemd‑based fix.  
- **Data race fixes** – PR [#17445](https://github.com/ollama/ollama/pull/17445) resolves races in progress bars/spinners; PR [#17446](https://github.com/ollama/ollama/pull/17446) fixes updater goroutine leaks.

## What This Means for Application Developers
- **MCP support is imminent** – With 220👍 and steady discussion, integrating Model Context Protocol for external data sources will simplify agent‑tool wiring.  
- **Token routing for streaming** – Issue [#17366](https://github.com/ollama/ollama/issues/17366) proposes a native API to isolate `<think>` tokens for real‑time edge/AR pipelines.  
- **Model metadata in API** – Once PR [#17422](https://github.com/ollama/ollama/pull/17422) merges, `/v1/models` will include `context_length`, enabling client‑side context‑window checks.  
- **Environment variable control** – `OLLAMA_TOOLS_ALL_ALLOWED` (PR [#17412](https://github.com/ollama/ollama/pull/17412)) lets operators bypass approval for agent tool calls; `OLLAMA_MODELS` now works on all platforms.  
- **Cloud reliability remains a risk** – Until the Pro service failure (Issue #15453) is resolved, developers relying on Ollama Cloud should prepare fallback strategies.  
- **Speculative decoding for free** – If you run Qwen‑3.5 on Apple Silicon, the MLX engine will automatically use the MTP head for faster generation without configuration changes.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

Here is the LiteLLM digest for 2026-07-30.

---

## LiteLLM Digest – 2026-07-30

### Today’s Highlights
The team is heavily invested in hardening the Model Context Protocol (MCP) integration, shipping three features today: post-call tool-result guardrails, per-user tool-call entitlements, and sustainable OAuth discovery without corrupting server config. A critical cross-request streaming contamination bug affecting CJK characters (reported against v1.93.0/v1.94.0) was independently reported and closed. On the operational side, a race condition that could double-bill teams when running without Redis was patched, and an OTEL metrics fix prevents infinite series cardinality growth by capping request-specific label values.

### Releases & Breaking Changes
- **v1.95.0-rc.1** released. The primary change is the introduction of **cosign-based Docker image signing**. All future images will be signed with a shared key (introduced in commit `0112e53`). Production operators should update their image pull and verification pipelines to check signatures. No breaking API/config changes in this release. ([Release](https://github.com/BerriAI/litellm/releases/tag/v1.95.0-rc.1))

### New Model & Hardware Support
- **Mixlayer Provider** added as a new inference backend via the JSON provider registry. Supports `/chat/completions` and `/responses` with eight open-source models. No new Python code. ([PR #33143](https://github.com/BerriAI/litellm/pull/33143))
- **Cloudflare Workers AI** expanded to support **audio** (speech-to-text, transcription, text-to-speech) and **image generation** modalities. Both features are proposed via open PRs. ([Audio PR #35056](https://github.com/BerriAI/litellm/pull/35056), [Image PR #35055](https://github.com/BerriAI/litellm/pull/35055))
- **Azure AI Foundry Agents v2** support requested for the new Responses API with `agent_reference`. ([Issue #25372](https://github.com/BerriAI/litellm/issues/25372))
- **Fireworks AI models** (DeepSeek V3.2, Kimi K2.5, MiniMax M2.5) requested for Azure Foundry. ([Issue #26618](https://github.com/BerriAI/litellm/issues/26618))

### Performance & Optimization
- **OTEL cardinality bounding**: `GenAIMetricRecorder._common_attributes` was dumping the entire per-request `hidden_params` object as a label value, creating a unique series for every call. Fixed by capping the serialized value and filtering out high-cardinality fields. ([PR #35166](https://github.com/BerriAI/litellm/pull/35166))
- **Complexity router spend logging**: Fixed a bug where classifier request bodies were logged as `{}`, and semantic keyword query-embedding sub-calls were not being captured. The fix passes the actual request payload into the spend log. ([PR #35164](https://github.com/BerriAI/litellm/pull/35164))
- **No-Redis spend-counter race**: Two code paths could concurrently seed an in-memory spend counter with the same DB spend data, resulting in double-billing for the team. The fix serializes counter reseed writes. ([PR #35150](https://github.com/BerriAI/litellm/pull/35150))
- **Startup resilience**: A transient `httpx.ReadError` on the first Prisma read of `general_settings` would crash the proxy. Now routed through the existing `call_with_db_retry` path. ([PR #33305](https://github.com/BerriAI/litellm/pull/33305))

### Stability & Regressions
**(Ranked by severity)**

1. **[HIGH] Cross-request streaming contamination**: CJK characters from one request bleeding into an unrelated concurrent stream. Confirmed in v1.93.0 and v1.94.0 and **not** a regression of the latest upgrade. The issue is now **CLOSED**, suggesting a fix was merged. ([Issue #35023](https://github.com/BerriAI/litellm/issues/35023))
2. **[HIGH] OpenRouter streaming cost loss**: `usage.cost` from OpenRouter is dropped in streaming responses but works in non-streaming. 17 comments, open. ([Issue #16021](https://github.com/BerriAI/litellm/issues/16021))
3. **[HIGH] Max parallel requests not enforced consistently**: Virtual keys can exceed their configured parallel limit. 11 comments, now closed. ([Issue #16011](https://github.com/BerriAI/litellm/issues/16011))
4. **[MEDIUM] Anthropic Claude Opus 4.7 temperature rejection**: LiteLLM still advertises `temperature` as a supported param for a model that rejects it. 7 comments, open. ([Issue #26444](https://github.com/BerriAI/litellm/issues/26444))
5. **[MEDIUM] Prisma binary download blocking startup**: v1.92.0+ downloads Prisma binaries at startup, causing failures in air-gapped networks. 7 upvotes, open. ([Issue #33167](https://github.com/BerriAI/litellm/issues/33167))
6. **[MEDIUM] Cache token cost tracking broken**: Custom pricing and OpenAI-compatible providers do not correctly account for prompt-cache tokens. 4 comments, open. ([Issue #27191](https://github.com/BerriAI/litellm/issues/27191))

### What This Means for Application Developers
- **Upgrade for critical fixes**: The CJK streaming contamination and double-billing bugs directly impact production reliability and billing accuracy. Plan to test and deploy the latest release candidate as soon as possible.
- **MCP is now enterprise-ready**: You can now attach MCP tool entitlements to individual users, scan tool results for sensitive data before they reach the caller, and lean on a robust OAuth discovery mechanism that won't silently break forwarding. Review your MCP permission model against the new per-user `object_permission` field.
- **New inference backends**: Mixlayer and Cloudflare Workers AI (audio/image) expand the range of open-source and edge-deployed models you can route through a single gateway. Evaluate the Cloudflare PRs if your workload relies on multimodal generation.
- **Watch your OTEL costs**: The cardinality fix for `hidden_params` will significantly reduce the number of time series emitted per request. If you use OTEL, verify your dashboards and alerts don't break on the new attribute schema after the update.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth Digest — 2026-07-30

## Today's Highlights

The **v0.1.51-beta** release brings three major features: local inference of **Kimi K3**, a **Parallel Chat** mode that runs multiple conversations concurrently, and a **Deep Research** mode that plans, reads and cites sources using the local model. On the stability front, the team closed a critical dtype mismatch bug (`Half` vs `BFloat16`) during GRPO training with 4‑bit quantization, and several PRs are in flight to fix DiffusionGemma VRAM over‑allocation and AMD/ROCm multi‑GPU crashes.

---

## Releases & Breaking Changes

- **[v0.1.51-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.51-beta)** – “Kimi K3 + Deep Research + Parallel Chat”  
  - Kimi K3 can now run locally via Unsloth Dynamic GGUFs.  
  - Parallel Chat enables multiple chat sessions to generate simultaneously under the inference backend’s concurrency cap.  
  - Deep Research mode orchestrates planning, reading and citation gathering using the local model.  
  - Included: improved AMD support and unspecified additional fixes.

No API or config breaking changes noted in the release.

---

## New Model & Hardware Support

- **Kimi K3** – first‑class support via Dynamic GGUF.  
- **ROCm** – limited support for iGPU/dGPU selection; ongoing work to fix heuristic that prefers shared‑memory iGPUs (see issues [#7624](https://github.com/unslothai/unsloth/issues/7624), [#7307](https://github.com/unslothai/unsloth/issues/7307)).  
- **RDNA4** (Radeon AI PRO R9700) – prebuilt `llama-server` segfaults on startup; still open ([#7307](https://github.com/unslothai/unsloth/issues/7307)).  
- **DiffusionGemma** – GPU‑layer setting now honoured via PR [#7575](https://github.com/unslothai/unsloth/pull/7575) (requires companion `unsloth-zoo` PR).  
- **Qwen3.6** series – `.gguf` files with “qwen3.6” in filename are incorrectly routed through transformers loader instead of `llama-server` when added via custom scan folder (bug [#7623](https://github.com/unslothai/unsloth/issues/7623)).

---

## Performance & Optimization

- **Parallel Chat** (in v0.1.51‑beta) – replaces the singleton prompt queue with per‑chat queues that survive navigation, allowing multiple ready chats to dispatch under the backend’s concurrency limit (PRs [#7406](https://github.com/unslothai/unsloth/pull/7406), [#7629](https://github.com/unslothai/unsloth/pull/7629)).  
- **GGUF export** – PR [#6107](https://github.com/unslothai/unsloth/pull/6107) adds user‑controllable shard size, save directory override and fixes for private Hub pushes.  
- **Training worker teardown** – PR [#7610](https://github.com/unslothai/unsloth/pull/7610) prevents workers from hanging after training completion by reaping them with a bounded watchdog.

No concrete throughput or latency numbers were published in the current batch.

---

## Stability & Regressions

| Severity | Issue / PR | Description | Status |
|----------|------------|-------------|--------|
| **Critical** | [#4891](https://github.com/unslothai/unsloth/issues/4891) | `RuntimeError: self and mat2 must have the same dtype (Half and BFloat16)` in `matmul_lora` during GRPO with 4‑bit quantisation | **Closed** |
| **High** | [#7574](https://github.com/unslothai/unsloth/issues/7574) / [#7575](https://github.com/unslothai/unsloth/pull/7575) | DiffusionGemma hardcodes `NGL=99`, causing OOM on smaller GPUs; Studio’s GPU‑layer setting is ignored | Open; fix PR exists |
| **High** | [#7624](https://github.com/unslothai/unsloth/issues/7624) | Multi‑GPU auto‑selection on ROCm picks iGPU over dGPU by free‑memory heuristic, crashing | Open |
| **High** | [#7307](https://github.com/unslothai/unsloth/issues/7307) | RDNA4 `llama-server` segfaults on startup; iGPU/HIP crash not guarded | Open |
| **Medium** | [#7596](https://github.com/unslothai/unsloth/issues/7596) | HTTP(S) image URLs not processed via OpenAI‑compatible API for Qwen3.6‑35B‑A3B (base64 works) | **Closed** |
| **Medium** | [#7374](https://github.com/unslothai/unsloth/issues/7374) / [#7375](https://github.com/unslothai/unsloth/pull/7375) | “No Model Detected” after hitting Send; default model fails to load | Open; fix PR restores cached models hidden by dangling HF ref |
| **Medium** | [#7522](https://github.com/unslothai/unsloth/issues/7522) | Extremely laggy WebUI on Windows | **Closed** |
| **Low** | [#7585](https://github.com/unslothai/unsloth/issues/7585) | SFT dataset load fails when HF repo contains sidecar JSON files | **Closed** |
| **Low** | [#7631](https://github.com/unslothai/unsloth/pull/7631) | Uninstaller ignores `--help` and proceeds to uninstall | Open; PR fixes |
| **Low** | [#7623](https://github.com/unslothai/unsloth/issues/7623) | Custom scan‑folder GGUFs with “qwen3.6” in name routed through wrong loader | Open |
| **Low** | [#7617](https://github.com/unslothai/unsloth/issues/7617) | API streaming to Pi agent hangs and requires manual restart | Open |
| **Low** | [#7630](https://github.com/unslothai/unsloth/pull/7630) | Ctrl+C disarmed in agents launched by `unsloth start` | Open; PR fixes |
| **Low** | [#7625](https://github.com/unslothai/unsloth/pull/7625) | Stopping an MCP tool call kills the entire stdio server | Open; PR keeps session alive |

---

## What This Means for Application Developers

- **Parallel Chat** now allows agentic workloads to serve multiple concurrent user sessions without a separate load‑balancer – review the concurrency cap and per‑chat queue design in PRs [#7406](https://github.com/unslothai/unsloth/pull/7406) / [#7629](https://github.com/unslothai/unsloth/pull/7629).
- **Deep Research** mode is available out‑of‑the‑box; developers can leverage its planning and citation pipeline for retrieval‑augmented generation flows.
- If you target **AMD/ROCm** hardware, be aware of the iGPU/dGPU selection bug ([#7624](https://github.com/unslothai/unsloth/issues/7624)) – a workaround is disabling the iGPU in the system BIOS or via HIP_VISIBLE_DEVICES.
- For **DiffusionGemma** deployments on constrained GPUs, the upcoming fix in PR [#7575](https://github.com/unslothai/unsloth/pull/7575) will respect the `GPU layers` setting; until then, avoid using DiffusionGemma on cards with less than full‑model VRAM.
- When building tools that use the OpenAI‑compatible API, note that image URLs need to be base64‑encoded for Qwen3.6 models (bug [#7596](https://github.com/unslothai/unsloth/issues/7596) fixed in the latest build).
- **Token usage analytics** and **global usage guardrails** have been requested ([#7214](https://github.com/unslothai/unsloth/issues/7214)) – if you need per‑model metering, consider implementing a local middleware or tracking the final release of this feature.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*