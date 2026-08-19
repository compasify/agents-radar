# AI Infrastructure Digest 2026-08-19

> Generated: 2026-08-18 23:11 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# Cross-Project AI Infrastructure Comparison Report — 2026-08-19

## 1. Ecosystem Overview

The LLM infrastructure ecosystem is in a "new model wave" phase: Kimi K3, DeepSeek V4, GLM-5.2, and Qwen3.8-class models are driving intense kernel-level optimization work across engines, but correctness trails enablement. No major releases landed in the last 24 hours — only llama.cpp shipped tags/nightlies (v0.1.2, b10483–b10488); vLLM, SGLang, Ollama, LiteLLM, and Unsloth all have fixes in-flight but unreleased. Production risk is concentrated in data-corruption and cross-request contamination bugs (Ollama ROCm KV-state bleed, llama.cpp `--kv-unified` response leak) and a fragile speculative-decoding stack (MTP crashes, deadlocks, tool-calling regressions). Agent/tool-calling workloads are the implicit target of most stability and observability work.

## 2. Activity Comparison

| Project | Notable Issues (24h digest) | Notable PRs (24h digest) | Release Status |
|---|---|---|---|
| **vLLM** | ~10 ranked open; 3 critical: Kimi K3 CUDA-graph corruption at batch=1 (#52531), MTP illegal memory access (#40756), GLM-5.2 MTP ROCm deadlock (#48568) | ~16, incl. flashinfer fused GEMM+allreduce (#52687), Rust gRPC LoRA (#52840), GLM-5.2 TurboQuant (#52472), DFlash2 (#52816), 15 ROCm CI mirrors (#44969) | No release in 24h |
| **SGLang** | ~10 open; 3 high: sm_103/B300 kernel crashes (#35388, #34340), DSV4 scheduler hang on H20/FP8 (#34235) | ~15, incl. Kimi K3 NVFP4 checkpoint (#35077), Qwen3.8-MXFP4 DCP (#35297), XGrammar MistralCommon (#35215), NIXL dtype adaptation (#35294) | No release in 24h |
| **llama.cpp** | ~13 open; critical: HIP `--kv-unified` cross-request leak (#25992), SM_60 FP32 quality loss (#25593), Blackwell CUDA stall (#27102) | ~14, incl. CUDA FFN gate+GLU epilogue fusion (#27341), Vulkan density gate +36% @ batch 9 (#27332), OpenCL fused SSM_SCAN (#26439), DFlash2 support (#27342) | **v0.1.2** (b10485) + nightlies b10483, b10486, b10488 |
| **Ollama** | ~15 open; critical: ROCm KV-state bleed on Strix Halo (#17847), sm_86 silent CPU fallback (#17841), Qwen3.8 tool-loop 500 (#17778) | ~11, incl. model metadata cache −300 ms/request (#17752), stream-abort error surfacing (#17846), stale-runner eviction (#17516) | No release in 24h; 0.32.14 regressions vs. 0.32.13 known-good |
| **LiteLLM** | ~13 open; critical: double `content_block_stop` in `/v1/messages` streaming (#37273), GPT-5.4 Responses bridge failure (#25429), `/health` secret leak (#36898) | ~11, incl. vector-store log secret redaction (#37373), OTEL tracer thread/memory cleanup (#36591), semantic-cache truncation (#37367) | No release in 24h |
| **Unsloth** | ~12 open, mostly Studio/Desktop: Markdown chunk crash (#9235), MCP history corruption (#9022), aarch64 container images (#4198) | ~13, incl. SQLite off event loop (#9234), bounded Shiki token cache (#9228), unified-memory context-length guard (#9172), test suite repair (#9192) | No release in 24h |

## 3. Model Support Race

- **Kimi K3** — **vLLM leads**: dedicated tracking issue (#50001), flashinfer fused GEMM+allreduce for MLA/KDA on 8×B300, DCP/PCP op consolidation. **SGLang is close**: active roadmap, official `nvidia/Kimi-K3-NVFP4` ModelOpt checkpoint support, MoE JIT front-end optimization. Both are blocked by correctness gaps (vLLM CUDA-graph corruption at batch=1; SGLang pending TRT-LLM attention integration for SM100/103).
- **DeepSeek V4** — **SGLang leads** the kernel race: FlashInfer MN path complete, with TRT-LLM SM100/103 attention the top remaining perf item. vLLM enabled the ROCm fused autoregressive draft-metadata path. llama.cpp trails with ROCm TOP_K crashes blocking >128K context.
- **GLM-5.2** — vLLM added the TurboQuant sparse MLA backend (needs rebase); SGLang runs GLM-5.2-FP8 on 8×MI35x TP8; llama.cpp closed its support request; Ollama only touches legacy glm-ocr GGUFs.
- **Qwen3.8/3.6** — **Nobody has reliable support yet**: Ollama is rolling out qwen3.8 but with tool-calling 500s, corrupted MoE layer counts, and `EOF` download failures; vLLM has MTP + tool-calling regressions; SGLang is enabling Qwen3.8-MXFP4 DCP. 
- **DFlash2** — vLLM and llama.cpp landed draft-architecture support simultaneously (vLLM as checkpoint-dispatched PR #52816; llama.cpp as PR #27342) — the first notable cross-stack convergence on a new speculative-decoding architecture.
- **Speculative decoding overall** is the most actively contested capability: llama.cpp added adaptive MTP draft depth (`--spec-type draft-mtp-adaptive`); SGLang fixed EAGLE/NEXTN TP=2 warmup on XPU; vLLM has three critical MTP-family bugs open.

## 4. Performance Frontier

Optimization effort this cycle splits into five areas:

- **Kernels for new silicon**: fused GEMM+allreduce for MLA/KDA o_proj (vLLM/FlashInfer, 8×B300 microbenchmarked); TRT-LLM DSv4 attention for SM100/103 (SGLang, top priority); CUDA MMQ gate+GLU epilogue fusion and Vulkan density-gated decode (+36% at batch 9, +27% at batch 16) in llama.cpp; OpenCL fused SSM_SCAN for Mamba-2 in llama.cpp.
- **Speculative decoding efficiency**: async spec-decode to eliminate two Host↔GPU syncs (vLLM proposal #29134); adaptive MTP draft depth (llama.cpp); DCP/MTP plumbing (vLLM GLM-5.2, SGLang).
- **Prefix/cache reliability**: cache-eviction ordering fix to prevent never-hit block starvation (vLLM #51909); Mamba radix-cache 0-hit degradation (SGLang #22935); missing MLX prefix caching makes Ollama agent TTFT grow linearly with context (~20–30K tokens re-prefilled per step).
- **Scheduling/batching**: Model Runner V2 skips logits/sampling for unfinished chunked prefill (vLLM #49171); host-side page-aligned allocation to remove `torch.unique` device round-trips from KV freeing (SGLang #35223); PrefillDelayer feedback-loop collapse fix (SGLang #35241).
- **Per-request observability**: per-request spec-decode acceptance stats in OpenAI API responses (vLLM #48915, replacing server-wide averages); eval_count semantics clarified to include thinking tokens (Ollama).

KV cache remains the dominant cross-cutting concern, but the energy has shifted from raw capacity to *hybrid-model correctness* (Mamba align tails, radix-cache whitelists, block-size sync) and *spec-decode integration*.

## 5. Layer Positioning

| Layer | Projects | Positioning |
|---|---|---|
| **Production serving engines** | vLLM, SGLang | Direct head-to-head competition: same models (Kimi K3, DSV4, GLM-5.2), same levers (spec-decode, DCP/PD-disaggregation, prefix caching), same pain points (Blackwell kernels, ROCm gaps). vLLM differentiates with Rust frontend maturity and ROCm CI breadth; SGLang with a unified scheduler and DCP fixes. |
| **Local/edge runtimes** | llama.cpp | The kernel-level foundation: CPU/CUDA/Vulkan/OpenCL/OpenVINO/WebGPU/ROCm, plus quantization innovation (IQ2_NL/IQ3_NL) and the most release cadence (nightly tags). Also the upstream engine for Ollama. |
| **Local deployment + UX wrapper** | Ollama | Sits on llama.cpp/MLX and competes on distribution/developer experience, but is currently the weakest on correctness — data-corruption bugs (KV bleed), silent CPU fallback, masked aborted generations. |
| **Gateway / orchestration** | LiteLLM | The only pure gateway in the set: multi-provider translation, routing, budgets, semantic cache, MCP. Its issue profile is API-contract correctness and secret handling — no kernel work at all. |
| **Training/fine-tuning + Studio** | Unsloth | The only fine-tuning framework, but activity is now dominated by Studio (frontend/server hardening) and a forming Local Gateway/MCP play. The recent shift suggests a pivot from "train fast" to "run agents locally." |

## 6. Trend Signals

1. **Speculative decoding is both the biggest lever and the biggest risk.** Every engine advanced spec-decode capability (adaptive MTP in llama.cpp, DFlash2 in vLLM/llama.cpp, EAGLE fixes in SGLang), yet the three most severe serving-engine bugs today are MTP crashes/deadlocks/tool-call regressions. Treat `num_spec_tokens >= 5` as high-risk until #40756/#48568/#46249 (vLLM) and #34786 (SGLang) are closed.
2. **Data-corruption severity bugs are appearing in the ROCm/integrated-GPU path.** Ollama's KV-state bleed (#17847) and llama.cpp's `--kv-unified` cross-request leak (#25992) both break multi-tenant isolation on Strix Halo/gfx1151. This is the ecosystem's "security moment": pin versions, isolate instances, validate per-request outputs.
3. **The new model wave (Kimi K3, DSV4, GLM-5.2, Qwen3.8) is ahead of stable kernel support.** sm_103/B300 crashes (SGLang), CUDA-graph corruption (vLLM), silent CPU fallback on sm_86 (Ollama) — enablement is no longer the bottleneck; *reliable* enablement is.
4. **Agent workloads are the de facto target, and MCP is becoming the integration surface.** Tool-calling regressions (vLLM MTP+Responses, Ollama Qwen3.8 500s), double tool-execution in LiteLLM's `/v1/messages` streaming, prefix-cache degradation on long agentic sessions (SGLang HiCache/DSpark), and MCP work in both LiteLLM and Unsloth all point here. Agent-loop reliability — idempotent tools, cached-token monitoring, deterministic output — is the new battleground.
5. **ROCm/AMD is improving in CI but still trails in production.** vLLM added 15 AMD test mirrors; SGLang moved GLM-5.2 to 8×MI35x; yet deadlocks, TOP_K crashes, and missing hipblas.dll releases persist. Multi-vendor fleets should maintain per-backend feature matrices and expect CUDA/ROCm behavioral drift.
6. **The ecosystem is maturing from speed to safety.** Secret leakage in LiteLLM `/health` and debug logs, license-compliance debt at Ollama (269👍), GGUF parsing hardening, and explicit determinism caveats at vLLM (`temperature=0` + prefix cache) are hygiene signals infrastructure buyers should reward.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest — 2026-08-19

## Today's Highlights

Kimi K3 continues to dominate upstream work: a flashinfer GEMM+allreduce fused kernel (PR #52687) targets MLA/KDA attention on 8x B300, while a silent CUDA-graph output-corruption bug at batch=1 (issue #52531) is under investigation. Speculative decoding remains the most fragile area — Qwen3.6 MTP crashes, GLM-5.2 ROCm deadlocks, and a Responses API tool-calling regression all remain open. The Rust frontend crossed a milestone with gRPC LoRA lifecycle control (PR #52840) alongside a detailed feature-parity roadmap (issue #44280). No releases landed in the last 24 hours.

## Releases & Breaking Changes

None in the last 24 hours.

## New Model & Hardware Support

- **Kimi K3** — New top-level tracking issue ([#50001](https://github.com/vllm-project/vllm/issues/50001)) with dedicated workstreams for KV cache management and KDA kernels; ROCm gap/roadmap tracked separately ([#50682](https://github.com/vllm-project/vllm/issues/50682)). A refactor consolidates DCP and PCP attention ops ([#52839](https://github.com/vllm-project/vllm/pull/52839)).
- **GLM-5.2 TurboQuant** — Sparse MLA backend with packed 4-bit latent KV storage, fused sparse decode/prefill, and DCP/MTP plumbing ([#52472](https://github.com/vllm-project/vllm/pull/52472), needs rebase).
- **DFlash2** — New checkpoint-dispatched draft architecture adding grouped dynamic depthwise convolution and a candidate selector; existing DFlash checkpoints are unaffected ([#52816](https://github.com/vllm-project/vllm/pull/52816)).
- **DeepSeek V4 on ROCm** — Fused autoregressive draft-metadata updates enabled on the AMD path ([#52628](https://github.com/vllm-project/vllm/pull/52628)).
- **ROCm CI** — 15 AMD test mirrors added as Stage D gating, covering plugin tests, speculator correctness, and distributed model tests ([#44969](https://github.com/vllm-project/vllm/pull/44969)).
- **XPU** — Eight `tests/kernels/` suites made device-agnostic so Triton kernels get XPU coverage ([#51968](https://github.com/vllm-project/vllm/pull/51968)).
- Long-running feature requests: Whisper support tracking ([#25750](https://github.com/vllm-project/vllm/issues/25750)) and sentence-transformers embeddings ([#17493](https://github.com/vllm-project/vllm/issues/17493)) remain open with no linked PRs.

## Performance & Optimization

- **Kimi K3 fused GEMM+allreduce** — Flashinfer cutedsl fused kernel for `o_proj` + allreduce in MLA/KDA attention, enabled at `num_tokens >= 256`; microbenchmarked on 8x B300 (N=7168, K=1536) with speedup table in the PR ([#52687](https://github.com/vllm-project/vllm/pull/52687)).
- **Model Runner V2** — Skips logits and sampling for chunked-prefill requests whose prefill doesn't finish in the current step, eliminating wasted sampling work ([#49171](https://github.com/vllm-project/vllm/pull/49171)).
- **Fully async spec-decode** — Proposal to remove two Host↔GPU syncs (`_get_valid_sampled_token_count`, `seq_lens_cpu`) that currently block input-prep overlap with the forward pass ([#29134](https://github.com/vllm-project/vllm/issues/29134)).
- **DFlash regression** — Speedup far below paper at concurrency=1 and *slower than baseline* at concurrency>8 on Qwen3.5-35B-A3B/v0.20.1 ([#42505](https://github.com/vllm-project/vllm/issues/42505)).
- **Cache eviction order** — Never-hit cached blocks appended to the free list first, avoiding starvation of frequently-hit blocks ([#51909](https://github.com/vllm-project/vllm/pull/51909)).
- **Spec-decode observability** — Per-request acceptance stats in OpenAI API responses (vs. today's server-wide `/metrics` average) to diagnose draft-model quality ([#48915](https://github.com/vllm-project/vllm/pull/48915)).
- **Multimodal payload reduction** — RFC to defer `pixel_values` preprocessing to `/generate` to shrink token-in/token-out payloads for disaggregated serving ([#46722](https://github.com/vllm-project/vllm/issues/46722)).

## Stability & Regressions

Ranked by severity; all open unless noted:

1. **Kimi K3 CUDA-graph silent corruption at batch=1** — Three distinct failure modes across cudagraph modes; no fix PR yet ([#52531](https://github.com/vllm-project/vllm/issues/52531)).
2. **MTP illegal memory access** — Qwen3.6-27B-FP8, `num_spec_tokens=5`, long sequences ([#40756](https://github.com/vllm-project/vllm/issues/40756)); related `cudaErrorIllegalAddress` in `gdn_attn.py:237` under load ([#37035](https://github.com/vllm-project/vllm/issues/37035)).
3. **GLM-5.2-FP8 MTP deadlock on 8x MI300X** — Vocab-parallel logits all-gather stalls on first spec-decode step (RCCL `no transport for peer`) ([#48568](https://github.com/vllm-project/vllm/issues/48568)).
4. **Qwen3.5-27B-FP8 server hang** — Indefinite inference with no error output (nightly) ([#35502](https://github.com/vllm-project/vllm/issues/35502)).
5. **DeepSeek-V4-Flash prefix cache 0% hit** — First-block cache keys lost on every request reassignment for hybrid groups ([#42948](https://github.com/vllm-project/vllm/issues/42948)).
6. **Qwen3.6-27B tool calls fail with MTP** — Responses API regression; structured output interaction ([#46249](https://github.com/vllm-project/vllm/issues/46249)).
7. **Draft-model init crash under TP>1** — Crashes when draft `hidden_size > target` (TRT-LLM fused allreduce+RMSNorm workspace sized from target only) ([#52023](https://github.com/vllm-project/vllm/issues/52023)).
8. **V1 embedding KeyError** — Concurrent embedding requests crash the engine ([#25991](https://github.com/vllm-project/vllm/issues/25991)).
9. **`strict` flag leaks into chat template** — OpenAI `tools[].function.strict` changes model-visible tool-call behavior ([#52741](https://github.com/vllm-project/vllm/issues/52741)).
10. **Garbled JSON schema output** — Qwen3.5 with `response_format json_schema` emits spaces ([#38696](https://github.com/vllm-project/vllm/issues/38696)).

**Fixes landed or in progress:**
- XGrammar now stops token batches at termination, fixing structured-output over-generation ([#52805](https://github.com/vllm-project/vllm/pull/52805)).
- Mooncake/KV-connector: offload producer partial Mamba `align` tails on request finish ([#52832](https://github.com/vllm-project/vllm/pull/52832)).
- AMD OffloadingConnector: a GPU→CPU KV transfer fault now degrades the cache instead of taking down the engine ([#52838](https://github.com/vllm-project/vllm/pull/52838)).
- `mamba_block_size` is now synced via `EngineCoreReadyResponse`, fixing hybrid-model runtime block-size mismatches ([#50809](https://github.com/vllm-project/vllm/pull/50809)).
- ROCm CI shallow-fetch git race fixed ([#52810](https://github.com/vllm-project/vllm/pull/52810)).

## What This Means for Application Developers

- **MTP spec decode is the top production risk.** Qwen3.6 and GLM-5.2 with `num_spec_tokens>=5` show crash, hang, and tool-call regressions. If you serve tool-calling or structured-output traffic, consider disabling MTP until #40756/#46249 are resolved, or pin to versions without the flagged interactions.
- **Kimi K3 perf is improving fast, but verify outputs.** Kernel fusion work is landing rapidly, yet CUDA-graph corruption at batch=1 is unresolved — run correctness checks before any latency-driven rollout.
- **The Rust frontend is becoming real.** gRPC LoRA load/unload/list support (#52840) plus the explicit parity roadmap (#44280) mean `VLLM_USE_RUST_FRONTEND=1` is worth evaluating for low-footprint serving, especially if you need LoRA lifecycle management.
- **Determinism caveat: cold vs. warm prefix cache.** vLLM now documents that `temperature=0` can produce different outputs depending on whether the prefix is cached ([#52701](https://github.com/vllm-project/vllm/pull/52701)) — relevant for anyone building reproducible evaluation or agent loops. The long-running Batch Invariant effort ([#27433](https://github.com/vllm-project/vllm/issues/27433)) is the upstream fix to watch.
- **Observability win coming.** Per-request spec-decode acceptance stats (#48915) will let you measure draft-model ROI per request instead of guessing from cluster averages.
- **ROCm still trails for spec-decode.** MI300X users should expect MTP gaps on GLM-5.2 and DeepSeek V4 despite expanding CI gating; plan for CUDA/ROCm behavior differences in multi-vendor fleets.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest — 2026-08-19

## Today's Highlights

SGLang shipped no release in the last 24h; the project is in a heavy correctness-fix and performance-enablement phase. DeepSeek-V4/Kimi-K3 work leads: FlashInfer MN is complete for DSV4 while TRT-LLM SM100/103 attention remains the top perf item ([#33636](https://github.com/sgl-project/sglang/issues/33636)), and a Kimi K3 MoE front-end optimization is up ([#35406](https://github.com/sgl-project/sglang/pull/35406)). The most urgent stability theme is Blackwell sm_103/B300 kernel crashes ([#34340](https://github.com/sgl-project/sglang/issues/34340), [#35388](https://github.com/sgl-project/sglang/issues/35388)), alongside a wave of DCP/PD fixes ([#35384](https://github.com/sgl-project/sglang/pull/35384), [#35298](https://github.com/sgl-project/sglang/pull/35298), [#34457](https://github.com/sgl-project/sglang/pull/34457)) and improving CI health (668 tests recently fixed, [#17050](https://github.com/sgl-project/sglang/issues/17050)).

## Releases & Breaking Changes

- **No new SGLang release** in the last 24h.
- **NIXL EP dtype change**: [PR #35294](https://github.com/sgl-project/sglang/pull/35294) now queries the installed `nixl_ep.topk_idx_t` instead of hardcoding `torch.int64`, because upstream `ai-dynamo/nixl#1751` changes the default EP top-k index from 64-bit to 32-bit. SGLang remains compatible with both, but NIXL EP users should verify dtype assumptions when upgrading.
- **DeepEP dependency update**: [PR #34923](https://github.com/sgl-project/sglang/pull/34923) applies the latest DeepEP branch — sets `NVSHMEM_QP_DEPTH` before CUDA DeepEP low-latency init and forces `nvidia-nccl-cu13` reinstall (flagged `release-highlight`).

## New Model & Hardware Support

- **Kimi K3**: active roadmap ([#32607](https://github.com/sgl-project/sglang/issues/32607)) with Day-0 support, cookbook, and DSpark variant; [PR #35077](https://github.com/sgl-project/sglang/pull/35077) adds support for the official `nvidia/Kimi-K3-NVFP4` ModelOpt mixed NVFP4/FP8 checkpoint (SiTU NVFP4 experts, weight-only FP8 attention projections).
- **Qwen3.8-MXFP4 DCP**: [PR #35297](https://github.com/sgl-project/sglang/pull/35297) registers Qwen3_5 text-only archs in mamba radix-cache whitelists to enable Qwen3.8-2.4T-A95B with DCP.
- **AMD**: [PR #32570](https://github.com/sgl-project/sglang/pull/32570) replaces GLM-5.1 MI35x nightly coverage with GLM-5.2-FP8 on 8× MI35x / ROCm 7.2 (TP8 TileLang DSA).
- **Intel XPU**: [PR #29935](https://github.com/sgl-project/sglang/pull/29935) adds memory-saver (release/resume memory occupation) support via upstream `torch_memory_saver`.
- **NVIDIA**: [PR #35405](https://github.com/sgl-project/sglang/pull/35405) fixes SM107 MXFP8 activation prep; per-tensor FP8 GEMM optimization on SM120 is tracked in [#33632](https://github.com/sgl-project/sglang/issues/33632).
- **Constrained decoding**: [PR #35215](https://github.com/sgl-project/sglang/pull/35215) adds MistralCommon tokenizer support to the XGrammar backend — previously `json_schema`/`regex`/`ebnf` requests were rejected with 400 errors.

## Performance & Optimization

- **DeepSeek-V4 perf tracking** ([#33636](https://github.com/sgl-project/sglang/issues/33636)): FlashInfer MN path is complete; integrating TRT-LLM DSv4 attention for SM100/103 ([#30805](https://github.com/sgl-project/sglang/issues/30805)) is the top remaining high-priority item.
- **Kimi K3 MoE**: [PR #35406](https://github.com/sgl-project/sglang/pull/35406) lands JIT-kernel MoE front-end optimization.
- **VLM qkv path**: [PR #35336](https://github.com/sgl-project/sglang/pull/35336) feeds packed qkv projection output to vision backends uncopied — eliminating slicing + three dense copies in the `use_qkv_parallel` branch.
- **Diffusion residency**: [PR #35335](https://github.com/sgl-project/sglang/pull/35335) replaces static pre-load thresholds with warmup-calibrated auto residency promotion in `--performance-mode auto`.
- **Host allocator**: tracking issue [#35223](https://github.com/sgl-project/sglang/issues/35223) proposes page-aligned allocation with host-side bookkeeping to remove device round-trips (`torch.unique` free-index reads) from KV freeing.
- **AMD gap flagged**: MI355X (gfx950) Qwen3.5 MTP throughput trails B200/B300 on realistic agentic workloads ([#34596](https://github.com/sgl-project/sglang/issues/34596)).
- **Experimental**: [PR #31820](https://github.com/sgl-project/sglang/pull/31820, do-not-merge) adopts the standalone `piecewise-cuda-graphs` package.

## Stability & Regressions

**High severity**
- [#35388](https://github.com/sgl-project/sglang/issues/35388) — DeepEP FP8 MoE on GB300/sm_103 crashes in `m_grouped_fp8_fp4_gemm_nt_contiguous` (UE8M0 scale-format mismatch, CUDA 719 assert). New; no fix PR yet.
- [#34340](https://github.com/sgl-project/sglang/issues/34340) — two SM10x-gated kernels fail on B300 (sm_103): cutedsl TGV BF16 GEMM raises Xid 13, trtllm-gen MoE finalize hangs silently. Root cause: `is_sm100_supported()` is a family-level check (`major == 10`).
- [#34235](https://github.com/sgl-project/sglang/issues/34235) — scheduler hang in DSV4 sparse prefill (watchdog abort) on DeepSeek-V4 FP8 / H20 with hierarchical cache + 16K chunked prefill; also a sampling device-side assert on 0.5.16+PR.

**Medium**
- [#35129](https://github.com/sgl-project/sglang/issues/35129) — DeepSeek-V4-Flash-0731 + HiCache: long agentic sessions get `#cached-token: 0` every turn despite stable 50%+ prefix (short requests hit ~98%).
- [#35150](https://github.com/sgl-project/sglang/issues/35150) — Qwen3.8 DSpark forced-reject is not lossless: accumulated GDN state drift vs base decode.
- [#35385](https://github.com/sgl-project/sglang/issues/35385) — multimodal CUDA IPC transport auto-selected on WSL2 (where CUDA IPC is unsupported) → scheduler crashes at startup with no hint at `--mm-feature-transport`.
- [#35241](https://github.com/sgl-project/sglang/issues/35241) — PrefillDelayer enters a persistent mixed-state feedback loop and collapses prefill progress under DP Attention + chunked prefill.
- [#34786](https://github.com/sgl-project/sglang/issues/34786) — `TypeError` in `set_mamba_track_indices_from_reqs` during NEXTN verify (`mamba_next_track_idx is None`; hybrid-mamba + speculative decoding).
- [#22935](https://github.com/sgl-project/sglang/issues/22935) — Mamba radix cache can turn a valid fresh-prefill prefix match into an effective 0-hit after split.

**Fix PRs in flight**
- [#35401](https://github.com/sgl-project/sglang/pull/35401) — writes `req_to_token` page tails so stale occupant indices don't leak into valid rows.
- [#35298](https://github.com/sgl-project/sglang/pull/35298) — DCP advertises the logical KV-event block size (physical `page_size` vs logical `page_size * dcp_size`).
- [#35384](https://github.com/sgl-project/sglang/pull/35384) — DCP rejects `fa3` for MLA (no decode path / LSE for cross-rank reduction) and stops defaulting to it on Hopper; stacked on #35298.
- [#34457](https://github.com/sgl-project/sglang/pull/34457) — enforces `SGLANG_REQ_WAITING_TIMEOUT`/`SGLANG_REQ_RUNNING_TIMEOUT` in PD-disaggregation mode (previously silently ignored).
- [#35228](https://github.com/sgl-project/sglang/pull/35228) — loads compressed-tensors quantized `lm_head` checkpoints correctly instead of value-casting to gibberish.
- [#35182](https://github.com/sgl-project/sglang/pull/35182) — diffusion now rejects unsupported ModelOpt checkpoint algorithms before backend construction.
- Closed: [#35144](https://github.com/sgl-project/sglang/issues/35144) — EAGLE/NEXTN TP=2 warmup hang on Intel XPU fixed by moving the verify-decision TP broadcast out of the sampling branch.

**CI**: [#17050](https://github.com/sgl-project/sglang/issues/17050) reports **3 broken, 11 flaky, 668 recently fixed**; the unit-test coverage drive ([#20865](https://github.com/sgl-project/sglang/issues/20865), good-first-issue) targets core modules such as `managers/`, `mem_cache/`, `sampling/`, `parser/`, and `function_call/`.

## What This Means for Application Developers

- **DeepSeek-V4 on H20/FP8**: avoid hierarchical cache + 16K chunked prefill until [#34235](https://github.com/sgl-project/sglang/issues/34235) is fixed; this is a scheduler hang, not a throughput degradation.
- **Long agentic sessions on DSV4 + HiCache/DSpark**: prefix caching can silently degrade to `#cached-token: 0` every turn ([#35129](https://github.com/sgl-project/sglang/issues/35129)), and forced-reject speculative paths can drift from base decode ([#35150](https://github.com/sgl-project/sglang/issues/35150)). Monitor cached-token metrics rather than assuming stable prefix reuse.
- **PD-disaggregation deployments**: request timeouts are effectively not enforced today; a stuck request on a prefill worker can wait forever. Apply [#34457](https://github.com/sgl-project/sglang/pull/34457) or pin a build containing it.
- **DCP + MLA users**: don't select `fa3` — it has no DCP decode path; the guard in [#35384](https://github.com/sgl-project/sglang/pull/35384) will enforce this and prevent silent misconfiguration.
- **WSL2 users**: multimodal serving is broken out-of-the-box because CUDA IPC transport is auto-selected; explicitly configure `--mm-feature-transport` until [#35385](https://github.com/sgl-project/sglang/issues/35385) lands.
- **NIXL EP users**: verify top-k index dtype when upgrading NIXL — SGLang now adapts to both 32- and 64-bit indices ([#35294](https://github.com/sgl-project/sglang/pull/35294)).

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp Digest — 2026-08-19

## Today's Highlights

llama.cpp tagged **v0.1.2** (nightly `b10485`), with the OpenVINO backend updated to 2026.3 and an mtmd fix for LFM2 image tiling landing in nightlies. The most substantive work is in-flight: CUDA FFN gate+GLU epilogue fusion, Vulkan decode-path density gating (+36% at batch 9), adaptive MTP draft depth, and early DFlash2 architecture support. Stability remains the main watch-item: several serious CUDA/HIP correctness bugs are open, including a Blackwell CUDA kernel stall and a cross-request response leak when using `--kv-unified` on integrated HIP GPUs.

## Releases & Breaking Changes

- **[v0.1.2](https://github.com/ggml-org/llama.cpp/releases/tag/v0.1.2)** — Semantic versioning is still WIP. Change log since v0.1.1 is limited to a ggml sync and version-bump; nightly build is [`b10485`](https://github.com/ggml-org/llama.cpp/releases/tag/b10485).
- **[b10488](https://github.com/ggml-org/llama.cpp/releases/tag/b10488)** — OpenVINO updated to 2026.3; the Nemotron-H rollback test is skipped because the OpenVINO backend does not support `SSM_SCAN`. OpenVINO users should verify recurrent/hybrid model behavior after upgrading. ([#27292](https://github.com/ggml-org/llama.cpp/pull/27292))
- **[b10486](https://github.com/ggml-org/llama.cpp/releases/tag/b10486)** — mtmd: fix LFM2 image tiling threshold. ([#27057](https://github.com/ggml-org/llama.cpp/pull/27057))
- **[b10483](https://github.com/ggml-org/llama.cpp/releases/tag/b10483)** — Build fix for xcframework and CMake clean-up for the vendor hash target. ([#27304](https://github.com/ggml-org/llama.cpp/pull/27304))

No explicit migration notes beyond the OpenVINO `SSM_SCAN` caveat.

## New Model & Hardware Support

- **DFlash2 architecture support** — PR adds local convolution + candidate selector support. ([#27342](https://github.com/ggml-org/llama.cpp/pull/27342))
- **Adaptive MTP draft depth** — New speculative decoding mode `--spec-type draft-mtp-adaptive`. ([#27210](https://github.com/ggml-org/llama.cpp/pull/27210))
- **IQ2_NL and IQ3_NL quantization types** — Initial CPU quantization support. Useful for tensors whose row lengths are not multiples of 256. ([#27322](https://github.com/ggml-org/llama.cpp/pull/27322))
- **WebGPU mulmat with overlapping src0/src1** — Enables `minimax-01` graph execution on WebGPU. ([#27321](https://github.com/ggml-org/llama.cpp/pull/27321))
- **OpenCL fused SSM_SCAN** — Ports Mamba-2 SSM scan (`d_state` 128/256) from CPU to GPU. ([#26439](https://github.com/ggml-org/llama.cpp/pull/26439))
- **XDNA backend** — Feature request remains open with 30 👍. ([#21725](https://github.com/ggml-org/llama.cpp/issues/21725))
- **GLM 5.2 support** — Request closed; validate current nightly against your GLM 5.2 workloads. ([#24730](https://github.com/ggml-org/llama.cpp/issues/24730))

## Performance & Optimization

- **CUDA MMQ epilogue fusion** — Fuses FFN gate + SwiGLU/GEGLU into the `mul_mat_q` write-back epilogue, matching the existing decode path and removing an extra gate tensor read. ([#27341](https://github.com/ggml-org/llama.cpp/pull/27341))
- **Vulkan density gate for MUL_MAT_VEC_ID** — Replaces the fixed 8-token cutoff with the density gate. Reported gains: **+36% at batch 9, +27% at batch 16, +21% at batch 64**, neutral for batch ≤8; validated on gfx1151/RDNA3/gfx1013. ([#27332](https://github.com/ggml-org/llama.cpp/pull/27332))
- **OpenCL fused SSM_SCAN** — Should remove CPU fallback for Mamba-2 scan-heavy workloads. ([#26439](https://github.com/ggml-org/llama.cpp/pull/26439))
- **Vulkan flash-attention tuning regression** — FA tuning is skipped when the driver reports 32 KB shared memory instead of 64 KB, costing ~17% on Vega iGPU. ([#26163](https://github.com/ggml-org/llama.cpp/issues/26163))
- **KV cache quantization proposal** — Closed issue reports q4_0 KV cache is lossless on hybrid models and +8% quality on standard models with per-head adaptive bit allocation. ([#21385](https://github.com/ggml-org/llama.cpp/issues/21385))

## Stability & Regressions

Ranked by severity:

- **Cross-request data leak on HIP `--kv-unified`** — `server -np 4 --kv-unified` on gfx1151 returns responses that verbatim belong to a different request. Critical for multi-tenant serving. ([#25992](https://github.com/ggml-org/llama.cpp/issues/25992))
- **SM_60 FP32 quality loss** — FP32 math silently executed in FP16 on Tesla P100-class hardware; fix exists only in two forks, not upstream. ([#25593](https://github.com/ggml-org/llama.cpp/issues/25593))
- **CUDA kernel stall / watchdog kill on Blackwell** — `llama-server` hangs on RTX Pro 6000 Blackwell with Qwen3.8-27B; open and `help wanted`. ([#27102](https://github.com/ggml-org/llama.cpp/issues/27102))
- **CUDA illegal memory access in flash-attn path** — Seen with Qwen3.6-35B MoE + partial expert offload; deterministic across builds, disappears with `-fa off`. ([#26609](https://github.com/ggml-org/llama.cpp/issues/26609))
- **Multi-GPU tensor-split assert** — Glimmer Q8_0 on 4×Tesla T10 fails in `ggml-backend-meta` with `GGML_ASSERT(ret.axis != GGML_BACKEND_SPLIT_AXIS_UNKNOWN)`. ([#26902](https://github.com/ggml-org/llama.cpp/issues/26902))
- **Dual-GPU garbled output** — Qwen3.6-27B on RTX 5060 Ti + RTX 3060 produces garbled text; single-GPU is fine. ([#26257](https://github.com/ggml-org/llama.cpp/issues/26257))
- **ROCm TOP_K crashes** — gfx1151 worker crashes in `GGML_OP_TOP_K` during DeepSeek V4 prefill past 4096 tokens, and `TOP_K` fails with `ncols > 1024`, blocking context sizes >128K. ([#26746](https://github.com/ggml-org/llama.cpp/issues/26746), [#27021](https://github.com/ggml-org/llama.cpp/issues/27021))
- **Windows ROCm release missing `hipblas.dll`** — `llama-b10400-bin-win-rocm-7.14` cannot detect GPU. ([#26996](https://github.com/ggml-org/llama.cpp/issues/26996))
- **JSON schema under peg-native** — 35–40% of `response_format: json_schema` requests fail with HTTP 500. ([#27279](https://github.com/ggml-org/llama.cpp/issues/27279))
- **Vulkan MTP crash and segfault** — Gemma 4 31B MTP draft crashes on Vulkan; multi-buffer handling can segfault. ([#24492](https://github.com/ggml-org/llama.cpp/issues/24492), [#22197](https://github.com/ggml-org/llama.cpp/issues/22197))
- **Context checkpoint invalidation** — Hybrid/recurrent models always invalidate context checkpoints. ([#24055](https://github.com/ggml-org/llama.cpp/issues/24055))
- **MTP draft load regression** — gemma4-assistant draft fails with “invalid vector subscript” on recent Windows CUDA builds; last known good is b9553. ([#24795](https://github.com/ggml-org/llama.cpp/issues/24795))

Fix/robustness PRs to track:

- **Validation of expert IDs in `mul_mat_id`** — Prevents heap out-of-bounds writes in release builds. ([#27286](https://github.com/ggml-org/llama.cpp/pull/27286))
- **mtmd optional tensor null checks** — Fixes NULL-page SIGSEGV from crafted mmproj GGUFs. ([#27285](https://github.com/ggml-org/llama.cpp/pull/27285))
- **OpenCL flash-attention WAR race fix** — Closed. ([#26434](https://github.com/ggml-org/llama.cpp/pull/26434))
- **OpenVINO `GGML_NATIVE=OFF`** — Avoids build-machine-specific instruction-set faults. ([#27338](https://github.com/ggml-org/llama.cpp/pull/27338))

## What This Means for Application Developers

- **Multi-tenant serving on integrated HIP GPUs (Strix Halo/gfx1151):** avoid `--kv-unified` with `-np 4` until the response-leak bug is fixed, or add strict per-request response validation.
- **CUDA MoE with expert offload:** if you see “illegal memory access”, disable flash attention (`-fa off`) as a workaround.
- **DeepSeek V4 / large-context ROCm users:** stay below ~128K context or chunk prefill until the TOP_K bitonic kernel fix lands.
- **JSON-schema generation with `peg-native`:** expect intermittent 500s; use a grammar-based path or add retry logic.
- **Multi-GPU tensor-split on older Turing cards:** test models like Glimmer Q8_0 before deploying; upstream backend-meta split handling is still fragile.
- **Windows ROCm users:** avoid the b10400 ROCm zip or verify `hipblas.dll` is bundled before using GPU features.
- **Performance watch:** the CUDA MMQ fusion and Vulkan density gate should land soon; both look beneficial for batch decode and MoE serving workloads.

For more context, see the [llama.cpp releases](https://github.com/ggml-org/llama.cpp/releases) and [open issues](https://github.com/ggml-org/llama.cpp/issues).

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Digest — 2026-08-19

## Today's Highlights

The 0.32.14 release line is drawing multiple regression reports: sm_86 GPUs (RTX 30 / A40 / A6000) silently fall back to CPU because CUDA 13 builds omit compute capability 8.6 kernels and the CUDA 12 fallback is broken ([#17841](https://github.com/ollama/ollama/issues/17841)), while CPU usage spikes even when models fit fully in VRAM ([#17833](https://github.com/ollama/ollama/issues/17833)). The Qwen3.8 family rollout is also rocky — tool-calling loops error with 500 ([#17778](https://github.com/ollama/ollama/issues/17778)), MoE models show corrupted layer counts ([#17856](https://github.com/ollama/ollama/issues/17856)), and a ROCm KV-state bleed on Strix Halo ([#17847](https://github.com/ollama/ollama/issues/17847)) risks cross-request data contamination. Several fixes are in flight, including a model metadata cache that removes ~300 ms of per-request overhead ([#17752](https://github.com/ollama/ollama/pull/17752)) and a fix for truncated streaming responses that currently masquerade as successful API calls ([#17846](https://github.com/ollama/ollama/pull/17846) → [#17836](https://github.com/ollama/ollama/issues/17836)).

## Releases & Breaking Changes

- No new releases in the last 24 hours; llama.cpp update ([#17851](https://github.com/ollama/ollama/pull/17851), closed) and MLX update ([#17850](https://github.com/ollama/ollama/pull/17850), open) were pushed but not shipped.
- The current release, **0.32.14**, carries the sm_86 GPU silent-CPU-fallback regression and the CPU-spike regression below; **0.32.13** is the known-good reference point in today's reports.

## New Model & Hardware Support

- No official new model or hardware announcements.
- Qwen3.8/Qwen3.5 family continues to roll out (qwen3.5:4b-mlx, qwen3.8:27b, qwen3.8:27b-mlx, qwen3.5:35b-a3b), but with multiple open defects — see Stability.
- MLX engine update in progress, carrying upstream [mlx-c PR #127](https://github.com/ml-explore/mlx-c/pull/127) ([#17850](https://github.com/ollama/ollama/pull/17850)).
- glm-ocr legacy GGUF compatibility: PR registers `<|user|>` as end-of-generation token for legacy `glmocr` blobs that lack it, fixing runaway/repeated output ([#17195](https://github.com/ollama/ollama/pull/17195)).
- Open feature requests: Intel Integrated GPU support ([#3113](https://github.com/ollama/ollama/issues/3113), 75👍), legacy macOS (12.x) support ([#17842](https://github.com/ollama/ollama/issues/17842)).

## Performance & Optimization

- **Model metadata cache (PR [#17752](https://github.com/ollama/ollama/pull/17752), closed):** caches resolved GGUF metadata/capabilities with automatic invalidation on manifest change, eliminating ~300 ms of per-request overhead. Significant for short interactive/agent calls.
- **MLX prefix caching missing ([#17829](https://github.com/ollama/ollama/issues/17829)):** every agent step re-prefills the full prompt (roughly 20–30K tokens) from scratch — TTFT grows linearly with context on Apple silicon. No fix yet.
- **CPU regression in 0.32.14 ([#17833](https://github.com/ollama/ollama/issues/17833)):** 50–80% CPU usage even when `ollama ps` reports 100% GPU-bound; not reproduced on 0.32.13.
- **Telemetry docs corrected:** `eval_count` includes thinking tokens, not just the `response` field ([#17843](https://github.com/ollama/ollama/pull/17843)) — relevant for token-billing and usage accounting.

## Stability & Regressions

Ranked by severity:

1. **ROCm KV-state bleed on Strix Halo (gfx1151)** — responses are contaminated by previous, unrelated requests on `0.32.14-rocm`, even with alternating short/long prompts. Data-corruption severity; no fix yet ([#17847](https://github.com/ollama/ollama/issues/17847)).
2. **Silent CPU fallback on sm_86 GPUs in 0.32.14** — CUDA 13 archs omit 8.6 and CUDA 12 fallback is broken; RTX A6000 measured at ~7 tok/s CPU, 0 VRAM allocated ([#17841](https://github.com/ollama/ollama/issues/17841)). Older Tesla V100 (CC 7.0) users are likewise hit ([#16533](https://github.com/ollama/ollama/issues/16533), closed).
3. **Qwen3.8 tool-calling loop 500** — `no user query found in messages` during streaming chat with 205K context, model calling tools in a loop ([#17778](https://github.com/ollama/ollama/issues/17778)).
4. **qwen35moe corrupted layer descriptors** — `n_layer=4294967274` and similar garbage affects all Qwen3.5/3.6 35B MoE models since 0.31.x; issue closed but root cause unclear ([#17856](https://github.com/ollama/ollama/issues/17856)).
5. **`/api/chat` masks aborted generations** — `stream:false` returns HTTP 200 with `done:false`, empty content, and no error when llama-server aborts internally. Fix PR [#17846](https://github.com/ollama/ollama/pull/17846) (open) returns an explicit error when the SSE stream ends without a final response ([#17836](https://github.com/ollama/ollama/issues/17836)).
6. **Agent integrations hang indefinitely** with local Qwen models on macOS while the raw API (including OpenAI-compatible, streaming, reasoning, tool calls) works correctly ([#17839](https://github.com/ollama/ollama/issues/17839)). Also: Claude Code warns on unrecognized cloud models and force-falls back to a 200K auto-compact window ([#17717](https://github.com/ollama/ollama/issues/17717)).
7. **qwen3.8 download failure** — `ollama run qwen3.8` fails with `Error: EOF` and the API reports `model not found` ([#17816](https://github.com/ollama/ollama/issues/17816)).
8. **CUDA_VISIBLE_DEVICES ignored** in 0.32.14 systemd service on multi-GPU H200 hosts ([#17832](https://github.com/ollama/ollama/issues/17832)).
9. **think-mode CLI/backend mismatch** — `/set think true|false` accepted by CLI, backend rejects with 400; closed, but the error message's own valid list includes `true` ([#17837](https://github.com/ollama/ollama/issues/17837)).
10. **License compliance debt** — release artifacts still don't distribute MIT notices for statically linked deps (llama.cpp); open since 2024, 269👍 ([#3185](https://github.com/ollama/ollama/issues/3185)).

Notable fix PRs in flight: stale-runner eviction when llama-server has exited/wedged ([#17516](https://github.com/ollama/ollama/pull/17516)); GGUF parsing hardened against malformed inputs to prevent runtime panics ([#14489](https://github.com/ollama/ollama/pull/14489), closed); path handling for drag-dropped images on Linux ([#17701](https://github.com/ollama/ollama/pull/17701), closed); default-registry auth delegation to ollama.com ([#17532](https://github.com/ollama/ollama/pull/17532), open).

## What This Means for Application Developers

- **Validate GPU utilization before adopting 0.32.14 on sm_86 or older**: `ollama ps` can report "100% GPU" while inference actually runs on CPU — check `nvidia-smi` for real VRAM allocation, or pin 0.32.13 ([#17841](https://github.com/ollama/ollama/issues/17841), [#17833](https://github.com/ollama/ollama/issues/17833)).
- **Do not run shared/sequential workloads on ROCm Strix Halo (0.32.14-rocm)** until the KV-state bleed is fixed; if you must, isolate instances per request stream ([#17847](https://github.com/ollama/ollama/issues/17847)).
- **Harden client-side response validation**: treat `200 + done:false + empty content` as an aborted generation, not a successful completion — server-side fix is pending in [#17846](https://github.com/ollama/ollama/pull/17846) ([#17836](https://github.com/ollama/ollama/issues/17836)).
- **Exercise caution with Qwen3.8 in production agent loops**: test multi-turn tool calling, MoE 35B variants, model pulls, and don't assume fresh downloads will succeed yet ([#17778](https://github.com/ollama/ollama/issues/17778), [#17856](https://github.com/ollama/ollama/issues/17856), [#17816](https://github.com/ollama/ollama/issues/17816)). The Qwen3.8 system-message normalization fix ([#17855](https://github.com/ollama/ollama/pull/17855)) is important if you serve chat histories with post-base system messages.
- **On MLX (Apple silicon), budget for full re-prefill on every request** — no prefix caching exists yet, so long agent sessions degrade in TTFT roughly linearly with context length ([#17829](https://github.com/ollama/ollama/issues/17829)).
- **Watch `eval_count` semantics**: it includes thinking tokens, so any usage-based billing or context accounting must treat reasoning output as billable tokens ([#17843](https://github.com/ollama/ollama/pull/17843)).
- **`ollama launch` integrations remain rough**: cross-machine setups (Ollama on server, CLI tool on laptop) aren't supported yet ([#17835](https://github.com/ollama/ollama/issues/17835)), Claude Code's stdin/prompt handling has a failure mode ([#17811](https://github.com/ollama/ollama/issues/17811)), and agy (Antigravity CLI) integration is still a feature request ([#16329](https://github.com/ollama/ollama/issues/16329)).

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-08-19

## Today's Highlights

No release shipped in the last 24h. The most significant movement is around correctness and security: a new `/v1/messages` streaming bug can double-deliver `content_block_stop` for one tool call ([#37273](https://github.com/BerriAI/litellm/issues/37273)), and a long-running GPT-5.4 Responses bridge failure remains open ([#25429](https://github.com/BerriAI/litellm/issues/25429)). On the fix side, PRs are available for secret leakage in vector-store debug logs ([#37373](https://github.com/BerriAI/litellm/pull/37373)), OTEL tracer-provider thread/memory cleanup ([#36591](https://github.com/BerriAI/litellm/pull/36591)), and semantic-cache embedding truncation ([#37367](https://github.com/BerriAI/litellm/pull/37367)).

## Releases & Breaking Changes

None in the last 24h. No new versions, API changes, or migration notes to report.

## New Model & Hardware Support

No new hardware/quantization/backend support was listed in the last 24h. Model-related PRs/issues updated in the last 24h include:

- [#37369](https://github.com/BerriAI/litellm/pull/37369) — Adds `reasoning_effort` to supported OpenAI params for custom reasoning models and fills missing ModelInfo fields.
- [#37375](https://github.com/BerriAI/litellm/pull/37375) — Prevents Bedrock Mantle `/responses` from silently dropping `web_search*` tools.
- [#37268](https://github.com/BerriAI/litellm/issues/37268) — Flags incorrect pricing/capability metadata for `azure/gpt-5.6-sol`.

## Performance & Optimization

- [#36591](https://github.com/BerriAI/litellm/pull/36591) — Fixes an unbounded, unsynchronized `TracerProvider` cache in the OTEL logger. Each cached provider owned a `BatchSpanProcessor` worker thread that was never shut down, so this should remove a long-running thread/memory leak.
- [#36595](https://github.com/BerriAI/litellm/pull/36595) — Attributes Prisma database spans to PostgreSQL instead of `localhost`, improving OTEL/APM visibility.
- [#37367](https://github.com/BerriAI/litellm/pull/37367) — Truncates semantic-cache embedding inputs and sends `extra_body` top-level, avoiding silent cache misses and strict-server rejections on vLLM/NIM.
- [#32004](https://github.com/BerriAI/litellm/issues/32004) (closed) — Reported Bedrock Converse streaming buffering `input_json_delta` for the whole duration of large `tool_use` calls, causing 60–150s+ silent SSE gaps on `/v1/messages`. Confirm whether your LiteLLM release includes the fix.

## Stability & Regressions

### Critical

- [#25429](https://github.com/BerriAI/litellm/issues/25429) — `chatgpt/gpt-5.4` returns an empty final Responses output, and the `completion()` bridge fails with `Unknown items in responses API response: []`. Open with 20 comments; no fix PR in this data set.
- [#37273](https://github.com/BerriAI/litellm/issues/37273) — `/v1/messages` streaming emits two `content_block_stop` events for one `tool_use` block, causing tools to execute twice. Open and new; no fix PR visible.

### Security / Availability

- [#36898](https://github.com/BerriAI/litellm/issues/36898) — `GET /health` returns `extra_headers` and `aws_session_token` in plaintext. Open; no fix PR in this data set.
- [#35590](https://github.com/BerriAI/litellm/issues/35590) — A single persisted alpha/beta=0 cell in `adaptive_router` bricks the whole router with `gammavariate: alpha and beta must be > 0.0`. Open; no fix PR visible.
- [#27735](https://github.com/BerriAI/litellm/issues/27735) — Virtual-key `BudgetExceededError` uses stale spend while management APIs report spend below `max_budget`. Open; related to #27639.
- [#37261](https://github.com/BerriAI/litellm/issues/37261) — With `provider_budget_config` and no Redis, `budget_reset_at` is ~57 years in the future, so monthly budgets never reset. Open and new.

### Billing / Provider Correctness

- [#37102](https://github.com/BerriAI/litellm/issues/37102) — Bedrock `CountTokens` is unsupported for Claude Opus 5 / Sonnet 5, so the proxy silently understates token counts. Open.
- [#37377](https://github.com/BerriAI/litellm/pull/37377) — Fixes DashScope nested `cache_creation_input_tokens` not being mapped to canonical `cache_write_tokens`, which previously under-billed cache-write usage.
- [#27967](https://github.com/BerriAI/litellm/issues/27967) — Mid-stream fallback includes an assistant prefill block with `prefix=True`, which can break fallback models that don't support `prefix`. Open.
- [#23741](https://github.com/BerriAI/litellm/issues/23741) — Anthropic API rejects requests containing `vector_store_ids` / vector-store params with `400 Extra inputs are not permitted`. Open with 12 👍.
- [#27473](https://github.com/BerriAI/litellm/issues/27473) — `auto_router/complexity_router` in `litellm_params` returns `400 Unmapped LLM provider`. Open.

### MCP

- [#37258](https://github.com/BerriAI/litellm/issues/37258) — `PUT /v1/mcp/server` silently nulls `authorization_url`, `token_url`, and `oauth2_flow` when `delegate_auth_to_upstream=true`. Open and new.
- [#37384](https://github.com/BerriAI/litellm/pull/37384) — Fixes DCR bridge OAuth challenges for MCP clients.
- [#34787](https://github.com/BerriAI/litellm/pull/34787) — Attaches per-user BYOK credentials when listing MCP tools for non-OAuth auth types.

### Other Fixes in Flight

- [#37373](https://github.com/BerriAI/litellm/pull/37373) — Stops Valkey vector-store direct-search debug logs from leaking stored credentials/auth objects.
- [#37380](https://github.com/BerriAI/litellm/pull/37380) — Caps date windows on `/guardrails/usage` endpoints to prevent unbounded scans and malformed-date 500s.
- [#37382](https://github.com/BerriAI/litellm/pull/37382) — Marks shadow-eval jobs complete when the turn budget is spent instead of leaving them "running" forever.

## What This Means for Application Developers

- If you serve agent/tool workloads through LiteLLM's Anthropic-compatible `/v1/messages` streaming, do not assume 1:1 tool-call events until [#37273](https://github.com/BerriAI/litellm/issues/37273) is fixed. Make tool execution idempotent.
- The ChatGPT GPT-5.4 Responses bridge is still not reliable ([#25429](https://github.com/BerriAI/litellm/issues/25429)); test that path explicitly or bypass LiteLLM's Responses bridge for production.
- Do not expose `/health` externally without stripping `extra_headers` / `aws_session_token` ([#36898](https://github.com/BerriAI/litellm/issues/36898)).
- Budget enforcement has known stale-spend and reset-time bugs ([#27735](https://github.com/BerriAI/litellm/issues/27735), [#37261](https://github.com/BerriAI/litellm/issues/37261)); if exact limits matter, verify with external monitoring.
- Several meaningful fixes are only in PRs, not in a release: OTEL memory cleanup ([#36591](https://github.com/BerriAI/litellm/pull/36591)), semantic-cache fixes ([#37367](https://github.com/BerriAI/litellm/pull/37367)), and MCP OAuth/BYOK fixes ([#37384](https://github.com/BerriAI/litellm/pull/37384), [#34787](https://github.com/BerriAI/litellm/pull/34787)). Plan to test them once merged.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth Digest — 2026-08-19

## 1. Today's Highlights

No release shipped in the last 24 hours; activity is concentrated on Unsloth Studio hardening and frontend performance. Several PRs target real memory/event-loop regressions: SQLite reads moved off the event loop, Shiki token cache growth bounded, and the streaming reasoning pane’s Markdown rendering windowed. Multiple crash-level issues also have fix PRs in flight, including a unified-memory context panic on Apple Silicon and a failed Markdown chunk that could take the entire Studio app down.

## 2. Releases & Breaking Changes

- **None in the last 24h.** No new versions, API changes, or migration notes to report.

## 3. New Model & Hardware Support

No new model families or quantization formats were announced in this window. Relevant in-flight compatibility work:

- **ROCm detection on split Debian stacks** — [PR #8886](https://github.com/unslothai/unsloth/pull/8886) fixes older `hipconfig` masking a newer HSA runtime on Debian 13 / LMDE.
- **AMD VRAM reporting on Windows** — [PR #8863](https://github.com/unslothai/unsloth/pull/8863) joins adapter counters on LUID to report used/free VRAM for ROCm on Windows.
- **aarch64 container images** — [Issue #4198](https://github.com/unslothai/unsloth/issues/4198) remains open; useful for ARM cluster users.
- **Ollama models in the Studio model picker** — [PR #9237](https://github.com/unslothai/unsloth/pull/9237) surfaces Ollama-pulled models and their manifest refs.
- **NVFP4 on RTX 5060 Ti 16 GB** — [Issue #8246](https://github.com/unslothai/unsloth/issues/8246) reports load failures; still open.
- **MLX Train/Export falsely greyed out on macOS** — [Issue #9120](https://github.com/unslothai/unsloth/issues/9120) points to a startup thread race, not a broken install.

## 4. Performance & Optimization

Notable performance work landed or in review:

- **SQLite reads off the event loop** — [PR #9234](https://github.com/unslothai/unsloth/pull/9234). Follow-up to #9008; prevents file-operation stalls from blocking `/api/liveness` and the whole Studio backend.
- **Windowed streaming reasoning pane** — [PR #9231](https://github.com/unslothai/unsloth/pull/9231). Long reasoning output previously hit ~15,000 mounted elements and ~14,000 Shiki highlight spans in a 256px scroller, collapsing frame rate.
- **Bounded Shiki token cache** — [PR #9228](https://github.com/unslothai/unsloth/pull/9228). Streaming a 32 KB code fence retained ~0.28 MB per 250 ms refresh window; a ~83-second stream retained **+82.71 MB** in JS heap. The PR bounds the cache to stop unbounded retention.
- **Stop regrouping chat history on every sidebar refresh** — [PR #9227](https://github.com/unslothai/unsloth/pull/9227). `groupThreads` was unmemoized and re-allocated per row per sidebar refresh.
- **Lazy-mount model picker tooltips and menus** — [PR #9233](https://github.com/unslothai/unsloth/pull/9233). Avoids mounting three tooltips plus a dropdown menu per cached repo row before first contact.
- **Sidebar menus off the body modal layer** — [PR #9229](https://github.com/unslothai/unsloth/pull/9229). Removes three frequently used sidebar menus from the expensive global modal layer.
- **Partial GGUF download pricing** — [PR #8989](https://github.com/unslothai/unsloth/pull/8989). Prices partial downloads by remaining bytes only, avoiding confusion around re-fetching.

## 5. Stability & Regressions

Ranked by severity; fix PRs noted where available.

- **Failed Markdown chunk can crash the whole Studio app** — [Issue #9235](https://github.com/unslothai/unsloth/issues/9235), fix in [PR #9236](https://github.com/unslothai/unsloth/pull/9236). `React.lazy` rejection inside a streamed reply is not contained.
- **Hand-set context length can kernel-panic M1 Max** — [PR #9172](https://github.com/unslothai/unsloth/pull/9172) refuses context sizes unified memory cannot hold. Reported with `Qwen3.8-27B-UD-Q4_K_XL.gguf` on a 32 GB M1 Max.
- **Studio crashes when Claude Code takes too long to respond** — [Issue #8916](https://github.com/unslothai/unsloth/issues/8916), still open.
- **Parallel MCP tool calls corrupt assistant history** — [Issue #9022](https://github.com/unslothai/unsloth/issues/9022). Concatenated JSON arguments cause persistent `Extra data` errors; issue is closed, but no fix PR was linked in the data.
- **Two consecutive web searches fail in one chat** — [Issue #9108](https://github.com/unslothai/unsloth/issues/9108), open.
- **`/embeddings` endpoint rarely works** — [Issue #9128](https://github.com/unslothai/unsloth/issues/9128), open.
- **Studio setup fails on first launch: cannot acquire lock** — [Issue #9140](https://github.com/unslothai/unsloth/issues/9140), open.
- **macOS app fails on second launch** — [Issue #8610](https://github.com/unslothai/unsloth/issues/8610), open.
- **Self-signed certs not trusted by Desktop** — [Issue #9218](https://github.com/unslothai/unsloth/issues/9218), open.
- **Whisper.cpp fails to install with `--with-llama-cpp-dir`** — [Issue #9179](https://github.com/unslothai/unsloth/issues/9179), open.
- **Main branch test suite is red** — [PR #9192](https://github.com/unslothai/unsloth/pull/9192) repairs four source-text/shape tests that were failing and contaminating every open PR.

## 6. What This Means for Application Developers

- **Local Gateway / MCP users should test the next Studio build carefully.** The MCP argument-concatenation fix and `0.0.0.0`/LAN serving requests are moving, but the issues were only closed or in-review during this window.
- **Long streaming responses are getting safer to embed.** The Shiki cache bound and windowed reasoning pane directly address the two worst memory/rendering blowups in chat UIs with code blocks and long reasoning traces.
- **On-device Apple Silicon and AMD users should avoid hand-setting context length until [PR #9172](https://github.com/unslothai/unsloth/pull/9172) lands.** Auto context is the safe path; manual overrides can panic unified-memory machines.
- **If you run Studio as a backend dependency, watch the SQLite event-loop fix.** [PR #9234](https://github.com/unslothai/unsloth/pull/9234) is important for liveness and request responsiveness under filesystem stalls.
- **No new release today.** Teams relying on Unsloth Desktop/Studio stability should either track main or wait for the next release containing the current cluster of Studio hardening PRs.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*