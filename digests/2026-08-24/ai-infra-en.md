# AI Infrastructure Digest 2026-08-24

> Generated: 2026-08-23 23:10 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# Cross-Project Comparison Report — AI Infrastructure Ecosystem
**Date: 2026-08-24**

## 1. Ecosystem Overview

The inference stack is in a hardening phase: speculative decoding for hybrid architectures (DeepSeek-V4, Kimi-K3, Qwen GDN, GLM-4.5) is the dominant source of critical bugs across vLLM, SGLang, and llama.cpp, while a widening hardware surface (Blackwell SM120+, AMD MI355X/gfx1151, Apple MLX) forces every engine to maintain redundant kernel fallbacks. Local-runtime release velocity (llama.cpp: 9 builds in 24h) contrasts sharply with serving-engine stability work — vLLM and SGLang shipped zero releases and focused on regressions and internal refactors (e.g., vLLM's Model Runner V2 migration). The gateway layer is consolidating on supply-chain security (LiteLLM cosign-signed images) while fighting production-availability fires (event-loop blocking, false budget exhaustion, credential overwrite). Fast weight reload and persistent prefill caches are emerging as first-class competitive metrics, with SGLang's Weight Cache Daemon cutting multi-hundred-second loads to under one second.

## 2. Activity Comparison

Counts reflect issues and PRs referenced in the 24-hour digests, not total repository traffic.

| Project | Issues | PRs | Release status |
|---|---|---|---|
| vLLM | ~21 | ~20 | None in 24h; 0.27.0 is current reference |
| SGLang | ~14 | ~16 | None in 24h; 0.5.18 referenced |
| llama.cpp | ~9 | ~22 | **9 builds** (b10588–b10603) |
| Ollama | ~16 | ~12 | None in 24h; v0.32.15 current, hang regression unresolved |
| LiteLLM | ~14 | ~9 | **2 shipped**: v1.98.0 stable + v1.99.0-rc.1 |
| Unsloth | ~16 | ~12 | None in 24h; `0.1.801-beta` snapshots |

Interpretation: llama.cpp has by far the highest iteration cadence; vLLM shows the largest combined issue+PR volume (mature surface, heavy regression load); LiteLLM is the only project shipping tagged releases; Ollama and Unsloth are spending most cycles on product-layer regressions rather than new capability.

## 3. Model Support Race

| Project | Shipped / merged | In flight / requested |
|---|---|---|
| **vLLM** | Meta OmniASR (encoder-decoder, 1600+ langs); Orthrus checkpoint support; Kimi-K3 KDA fixes; DeepSeek-V4 SM12x Triton fallback; Gemma 4 MoE+LoRA fix | Granite Switch native support (request); Whisper (open) |
| **SGLang** | Humming MoE `w4afp8` native checkpoints; LTX-2.5 diffusion parallel tiling; Qwen3.5 MTP throughput fix on MI355X | Qwen3-Next MTP via EAGLE v2 (prototype); MLX runner RFC |
| **llama.cpp** | **GLM-4.5-Air MTP speculation** (b10603); HrmTextForCausalLM (DFM Mimir 1B); DFlash2 spec decoding; DeepSeek4 tensor-split; dots3note draft-MTP | MOOV-at-end MP4 fix; tool-call prefill fix |
| **Ollama** | Qwen3 `<think>` block parsing into `message.thinking`; MLX runtime bump | OpenAI Responses namespace tools |
| **LiteLLM** | Anthropic Workload Identity Federation; GigaChat passthrough; Bedrock Nova 2 geo prefixes; Databricks→Gemini 2.5 reasoning mapping | — |
| **Unsloth** | Studio audio models: Higgs TTS 2/3B, MOSS-TTS Local/Nano, Higgs Audio v3, MiniMax Music3 | MLX speculative decoding; Qwen3.8 reasoning-aware defaults |

**Verdict:** llama.cpp has the highest raw model-support velocity (new architectures land in daily builds). vLLM carries the broadest enterprise surface including ASR and hybrid-model hardening. SGLang is first to prototype Qwen3-Next MTP and leads on diffusion/multimodal serving. Unsloth is differentiating on audio/TTS. The hybrid-architecture race (MTP/GDN/KDA speculation) is being fought simultaneously on all three compute engines — with vLLM and llama.cpp both still fixing correctness in that area, not just adding models.

## 4. Performance Frontier

| Area | Where effort is concentrated |
|---|---|
| **Speculative decoding** | vLLM: GDN/KDA crash fixes + padded full-CUDA-graph decode dispatch (eliminates eager fallback for ~half of spec-decode batch sizes). llama.cpp: CUDA MoE fusion extended to 2–8 spec tokens; Vulkan `MUL_MAT_VEC_ID` density gate (+36% at batch 9, +27% at batch 16). SGLang: skips full-vocab softmax in EAGLE topk==1 on ROCm. Unsloth: MLX draft-verify path for Apple Silicon |
| **Weight loading / restart** | SGLang Weight Cache Daemon Phase 1: Qwen3-235B FP8 load from ~306–327s → **<1s**. vLLM: Zero-JIT-at-runtime tracking. Ollama: `OLLAMA_PREFILL_CACHE` (8 GiB LRU) + runner-reload KV save/restore |
| **KV cache** | vLLM: MRV2 CUDA-graph memory profiling factored into KV auto-sizing. SGLang: NVFP4 + spec-decode dequant crash (blocking). llama.cpp: MTP arena OOM — shared gallocr as fix. Ollama: persistent prefill across unload/reload |
| **Batching / scheduling** | vLLM: Elastic EP warmup deferral to commit phase. Ollama: `/api/embed` fan-out bounding. SGLang: warmup-calibrated residency promotion in `--performance-mode auto` |
| **Quantization kernels** | vLLM: DSv4 `fp8_einsum`/`o_proj` Triton fallback for SM12x/GB10. SGLang: one MXFP8 SRT adapter across NVIDIA/ROCm/Ascend; Humming `w4afp8`. llama.cpp: AVX-512/VNNI dual-block kernels for Q5_K/Q6_K |
| **Hardware-specific** | llama.cpp: SYCL residual fusion, OpenCL Adreno fixes, HIP corruption on gfx1151 (Vulkan as workaround). SGLang: AMD CI image caching (saves ~49 GPU-machine-hrs/night). vLLM: adaptive spin + WFET/WAITPKG for `shm_broadcast` CPU idle |

## 5. Layer Positioning

| Layer | Projects | Distinctive role |
|---|---|---|
| **Production serving engines** | vLLM, SGLang | Multi-GPU, high-throughput, KV/paging management, PD disaggregation, spec decode. vLLM = maturity + Model Runner V2 refactor and stability. SGLang = faster feature iteration, stronger weight-cache and AMD story |
| **Local runtime / library** | llama.cpp | Single-binary edge-to-desktop runtime; broadest backend coverage (CUDA/Vulkan/Metal/SYCL/OpenCL); daily builds; reference for small-footprint deployment |
| **Local product layer** | Ollama | Developer-facing convenience layer atop llama.cpp (scheduler, parser conveniences, prefill cache); product regressions ship at product cadence |
| **LLM gateway / proxy** | LiteLLM | Provider routing, auth/credentials, budgets, observability, supply-chain verification; zero GPU/kernel work, but security and reliability issues are production-blocking |
| **Fine-tuning + inference convenience** | Unsloth | QLoRA fine-tuning + Studio serving; expanding into audio models and MLX; less production-consolidated than the serving engines |

## 6. Trend Signals

1. **Speculative decoding is the integration tax of 2026.** Every engine is either shipping new spec-decode support (llama.cpp GLM/Dflash2, SGLang Qwen3-Next, Unsloth MLX) or firefighting regressions (vLLM: three critical bugs; SGLang: NVFP4 crash; Ollama: Qwen3.8 tool-loop 500). Agent workloads combining MTP/EAGLE with long context are the most exposed — **pin versions and load-test before upgrading.**

2. **Hybrid architectures are outpacing engine hardening.** DeepSeek-V4, Kimi-K3, Qwen3.5/3.6 GDN, and GLM-4.5-Air are new enough that correctness bugs (NaN logits, degenerate token loops, corrupted KV) are still being chased. Production adoption of these models carries a 2–4 week hardening lag.

3. **Fast restart is the new performance metric.** SGLang's sub-second weight reload, Ollama's prefill KV persistence, and vLLM's Zero-JIT goal all target the same economics: autoscaling, rolling restarts, and RL-training churn. This is becoming a tier-1 differentiator for serving engines.

4. **Hardware fragmentation is permanent.** Blackwell consumer (SM120/121), AMD gfx1151/MI355X, and Apple MLX each need bespoke kernels and fallbacks. Watch items: vLLM DSv4-on-GB10 (not deployment-ready), llama.cpp HIP corruption on Strix Halo, Unsloth AMD VRAM misdetection, SGLang gfx950 AITER pinning.

5. **Gateway-layer security is now a production blocker.** LiteLLM's credential-overwrite vulnerability ([#38033](https://github.com/BerriAI/litellm/issues/38033)), event-loop-blocking prompt-injection heuristics ([#19499](https://github.com/BerriAI/litellm/issues/19499)), and false `BudgetExceededError` ([#36926](https://github.com/BerriAI/litellm/issues/36926)) directly threaten availability. **Audit `/credentials` route exposure and budget headroom before the next upgrade.**

6. **Multimodal is expanding beyond image/text.** ASR (OmniASR, 1600+ languages), TTS/audio (Higgs, MOSS, MiniMax Music3), video (LTX-2.5, MOOV-at-end MP4 fixes), and diffusion-quantization alignment (SGLang MXFP8/AutoRound) mark the next integration wave — but multimodal correctness (vision-token parse bugs in SGLang/Ollama) is still maturing.

**Bottom line for decision-makers:** llama.cpp offers the fastest path to new models for local/edge deployment; vLLM remains the enterprise default but demands pinning and spec-decode caution on hybrid models; SGLang is the strongest bet for fast weight reload, AMD, and bleeding-edge features; LiteLLM needs a security pass before rollout; Ollama is suitable for dev loops but not yet for Qwen3.8 agentic production paths.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest — 2026-08-24

## Today's Highlights
No releases landed in the last 24 hours, but activity concentrated on two fronts: fixing hybrid-architecture speculative-decode breakage (Kimi-K3, Qwen/GDN MTP, DeepSeek-V4) and pushing the Model Runner V2 migration forward. A DSv4 Triton fallback for consumer Blackwell (SM12x/GB10) has been closed ([#52357](https://github.com/vllm-project/vllm/pull/52357)), and a fix for Kimi-K3's long-context degeneration is in review ([#51483](https://github.com/vllm-project/vllm/pull/51483)). MRV2 gained CUDA-graph memory reservation ([#53306](https://github.com/vllm-project/vllm/pull/53306)) and padded full-CUDA-graph decode dispatch ([#53407](https://github.com/vllm-project/vllm/pull/53407)) as it heads toward being the default runner.

## Releases & Breaking Changes
- **No new vLLM releases in the last 24 hours.**
- Official `vllm/vllm-openai:latest` (vLLM 0.27.0) fails to start Gemma 4 when Transformers 5.15.0 is present in the image ([#51744](https://github.com/vllm-project/vllm/issues/51744)).
- Config-parsing bug: a boolean `false` is silently discarded when the YAML key uses underscores, applying the opposite of the intended setting; fix in [#53478](https://github.com/vllm-project/vllm/pull/53478).
- RFCs in flight: build-base migration from Ubuntu 20.04 to manylinux (closed, [#26118](https://github.com/vllm-project/vllm/issues/26118)) and standardized entrypoint error handling ([#48227](https://github.com/vllm-project/vllm/issues/48227)).

## New Model & Hardware Support
- **Meta OmniASR** (omnilingual ASR, 1600+ languages): initial encoder-decoder support — PR [#36864](https://github.com/vllm-project/vllm/pull/36864).
- **Orthrus**: checkpoint support with `OrthrusConfig` plus `OrthrusLM`/`OrthrusForCausalLM` registration — [#44792](https://github.com/vllm-project/vllm/pull/44792).
- **Granite Switch** (`GraniteSwitchForCausalLM`): native-support feature request opened — [#53445](https://github.com/vllm-project/vllm/issues/53445).
- **Gemma 4 MoE + LoRA**: engine-start `AttributeError` when serving LoRA against MoE Gemma 4 fixed via `get_expert_mapping` ([#53482](https://github.com/vllm-project/vllm/pull/53482)).
- **Kimi-K3**: KDA mixer split out of piecewise CUDA graphs ([#53487](https://github.com/vllm-project/vllm/pull/53487)); stateless first chunks no longer classified as decode ([#51483](https://github.com/vllm-project/vllm/pull/51483)).
- **DeepSeek-V4**: performance-optimization checklist tracking multiple landed PRs ([#45861](https://github.com/vllm-project/vllm/issues/45861)); SM12x Triton fallback for `fp8_einsum`/`o_proj` ([#52357](https://github.com/vllm-project/vllm/pull/52357)); IndexCache extension request ([#45350](https://github.com/vllm-project/vllm/issues/45350)).
- **Whisper**: feature-request tracking issue remains open ([#25750](https://github.com/vllm-project/vllm/issues/25750)).

## Performance & Optimization
- **MRV2**: CUDA-graph memory profiled at startup and factored into KV-cache auto-sizing, unblocking MRV2-by-default ([#53306](https://github.com/vllm-project/vllm/pull/53306)); uniform decode dispatched to a padded full CUDA graph, eliminating eager-attention fallback for ~half of decode batch sizes under spec decode ([#53407](https://github.com/vllm-project/vllm/pull/53407)).
- **Elastic EP**: target-group warmup deferred to the synchronized commit phase on ROCm graph execution ([#53010](https://github.com/vllm-project/vllm/pull/53010)); new groups initialized without warmup collectives to avoid overlap with serving collectives ([#53483](https://github.com/vllm-project/vllm/pull/53483)).
- **Determinism**: `fuse_allreduce_rms` disabled under `VLLM_BATCH_INVARIANT` — bit-stability was broken under TP>1 ([#51292](https://github.com/vllm-project/vllm/pull/51292)).
- **CPU efficiency**: adaptive spin grace plus bounded arch waits (aarch64 WFET, x86 WAITPKG) for `shm_broadcast` to stop idle deployments burning cores ([#52917](https://github.com/vllm-project/vllm/pull/52917)).
- **Zero JIT at runtime**: tracking issue for model-level de-JITification, with DeepSeek-V4 items still outstanding ([#49349](https://github.com/vllm-project/vllm/issues/49349)).
- **Observability**: `operation` label added to Prometheus latency histograms for OTel `gen_ai.*` remapping ([#52249](https://github.com/vllm-project/vllm/pull/52249)).
- **KV-cache sizing**: feature request to prevent overallocation when `max_num_seqs`/sequence length are restricted ([#33263](https://github.com/vllm-project/vllm/issues/33263)).

## Stability & Regressions
Ranked by severity. Fix PRs noted where they exist.

- **Critical — Kimi-K3 long-context degeneration**: after a ~240K-token prefill, the deployment serves a single repeated degenerate token for every subsequent request (NaN logits; packed KDA prefill suspected) ([#51039](https://github.com/vllm-project/vllm/issues/51039)). Fix in review: don't classify stateless first chunks as decode ([#51483](https://github.com/vllm-project/vllm/pull/51483)).
- **Critical — MTP spec-decode crash**: illegal memory access on long sequences with Qwen3.6-27B-FP8, `num_spec_tokens=5` ([#40756](https://github.com/vllm-project/vllm/issues/40756)).
- **Critical — GDN/KDA spec-decode CUDA fault**: `CUDA error: unspecified launch failure` within 7–10 requests on hybrid GDN models with align-mode prefix caching; fix bounds accepted-token state lookups ([#50021](https://github.com/vllm-project/vllm/pull/50021)).
- **High — DSv4-Flash on SM120**: FlashInfer sparse MLA decode kernel routing fails on RTX PRO 6000 Blackwell ([#50720](https://github.com/vllm-project/vllm/issues/50720)).
- **High — DSv4 won't start on GB10/sm_121**: DeepGEMM assumed available with no working fallback ([#52732](https://github.com/vllm-project/vllm/issues/52732)); Triton fallback PR closed ([#52357](https://github.com/vllm-project/vllm/pull/52357)).
- **High — Gemma 4 startup failure** with Transformers 5.15.0 in the official Docker image ([#51744](https://github.com/vllm-project/vllm/issues/51744)).
- **High — DFlash2 acceptance collapse on ROCm**: default `ROCM_ATTN` draft backend collapses acceptance under batching; switching to `TRITON_ATTN` more than doubles throughput ([#53323](https://github.com/vllm-project/vllm/issues/53323)).
- **High — Align-mode prefix caching never hits** on hybrid GDN with `--scheduling-policy priority`; fix materializes a state at every boundary and drops the speculative one-block back-off ([#52897](https://github.com/vllm-project/vllm/issues/52897), [#53479](https://github.com/vllm-project/vllm/pull/53479)).
- **High — Gemma 4 Unsloth LoRAs silently ignored** despite successful loading; `get_expert_mapping` fix landed ([#41754](https://github.com/vllm-project/vllm/issues/41754), [#53482](https://github.com/vllm-project/vllm/pull/53482)).
- **Medium — Trailing `<turn|>` token regression** in 0.26.0 for Gemma 4 (worked in 0.25.1) ([#49955](https://github.com/vllm-project/vllm/issues/49955)).
- **Medium — OffloadingConnector stores but never serves** with MTP/EAGLE spec decode on hybrid GDN, XPU ([#52735](https://github.com/vllm-project/vllm/issues/52735)).
- **Medium — PD multi-tier discards parked KV after 60s**, forcing recompute for queued consumers ([#53128](https://github.com/vllm-project/vllm/issues/53128)).
- **Medium — DFlash fused-KV projection breaks weight-quantized drafters**: `F.linear` on a sliced `qkv_proj` can silently corrupt quantized draft weights ([#51581](https://github.com/vllm-project/vllm/issues/51581)).
- **Medium — DSv4 `--enable-return-routed-experts` crash** at worker init: `UniformTypeKVCacheSpecs` not unwrapped when selecting routed-experts KV group; fix closed ([#53240](https://github.com/vllm-project/vllm/pull/53240)).
- **Low — MLPSpeculatorConfig missing `num_attention_heads`**; fix closed ([#34163](https://github.com/vllm-project/vllm/pull/34163)).
- **Low — batched chat `echo=true` echoes the user prompt** instead of the assistant turn ([#52529](https://github.com/vllm-project/vllm/pull/52529)).

## What This Means for Application Developers
- **Pin vLLM versions and stress-test long-context/spec-decode paths before upgrading.** Every critical bug this cycle involves hybrid models (Kimi-K3, Qwen3.5/3.6 GDN, DSv4) combined with MTP/EAGLE speculation or long context — precisely the configuration used by agent workloads.
- **Gemma 4 users: avoid LoRA adapters and the latest `latest` image for now.** Both LoRA inference ([#41754](https://github.com/vllm-project/vllm/issues/41754)) and Docker startup with Transformers 5.15.0 ([#51744](https://github.com/vllm-project/vllm/issues/51744)) are broken; pin the 0.25.x/0.26.x image until fixes roll out.
- **DeepSeek-V4 on consumer Blackwell (GB10/RTX PRO 6000) is not deployment-ready.** Watch [#52357](https://github.com/vllm-project/vllm/pull/52357) and [#50720](https://github.com/vllm-project/vllm/issues/50720) before committing.
- **YAML configs: avoid underscore-style boolean keys set to `false`** until [#53478](https://github.com/vllm-project/vllm/pull/53478) merges — the option is silently discarded and the opposite behavior is applied.
- **Multi-task serving remains unsupported**: the request for combined generation + embeddings on one model ([#11905](https://github.com/vllm-project/vllm/issues/11905)) is still open; keep separate deployments for now.
- **Reasoning-loop protection is in review**: forcing the reasoning-end sequence when models enter exact repeating token cycles ([#52677](https://github.com/vllm-project/vllm/pull/52677)) will matter for production Qwen/Kimi deployments at high reasoning effort.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest — 2026-08-24

## Today’s Highlights
No new release was published in the last 24 hours. The biggest infrastructure signal is the Weight Cache Daemon roadmap (#33522): Phase 1 (#27139) has landed and cuts post-quantized weight load on Qwen3-235B FP8 from ~306–327s to <1s. On the bug side, the most serious reports are AMD DSA DP-attention producing all-NaN logits (#36071), NVFP4 KV cache + speculative decoding crashes (#36010), and missing NIXL prefill→decode failure notification (#36033).

## Releases & Breaking Changes
- **No releases in the last 24h.**
- [#36110](https://github.com/sgl-project/sglang/pull/36110) adds `SGLANG_DISABLE_MULTIMEM_AG` to force the NCCL all-gather path on GB300 NVL72 when multimem is unreliable.
- [#36063](https://github.com/sgl-project/sglang/pull/36063) and [#36068](https://github.com/sgl-project/sglang/pull/36068) move diffusion quantization configs onto shared SRT contracts — watch for config/flag compatibility changes.
- [#33111](https://github.com/sgl-project/sglang/pull/33111) adds a Mooncake-native scale-down path for elastic-EP deployments.

## New Model & Hardware Support
- [#36112](https://github.com/sgl-project/sglang/pull/36112) — Prototype native Qwen3-Next MTP path using EAGLE v2 orchestration.
- [#32033](https://github.com/sgl-project/sglang/pull/32033) — Humming MoE backend now loads native `quant_method: w4afp8` checkpoints without JSON overrides.
- [#36063](https://github.com/sgl-project/sglang/pull/36063) — Reuses one SRT-backed MXFP8 adapter across NVIDIA, ROCm, and Ascend for diffusion.
- [#36026](https://github.com/sgl-project/sglang/pull/36026) — Adds diffusion decoder parallel tiling support for LTX-2.5.
- [#32321](https://github.com/sgl-project/sglang/issues/32321) — RFC to replace the MLX runner-stub split with one Torch-owned SRT path and an exported whole-model MLX region.
- [#36110](https://github.com/sgl-project/sglang/pull/36110) — Improves GB300 NVL72 colocated multi-engine reliability via NCCL all-gather fallback.

## Performance & Optimization
- [#33522](https://github.com/sgl-project/sglang/issues/33522) / [#27139](https://github.com/sgl-project/sglang/pull/27139) — Weight Cache Daemon Phase 1 lands: weight load drops from ~306–327s to <1s on Qwen3-235B FP8.
- [#34487](https://github.com/sgl-project/sglang/pull/34487) — AMD CI image caching on mi30x runners avoids re-pulling per job, saving ~49 GPU-machine-hours/night in container setup.
- [#35719](https://github.com/sgl-project/sglang/pull/35719) — Fixes Qwen3.5 MTP dropping fused shared-expert weights on MI355X; recovers ~12% throughput loss.
- [#35872](https://github.com/sgl-project/sglang/pull/35872) — Skips full-vocab softmax in EAGLE topk==1 draft path on ROCm.
- [#35969](https://github.com/sgl-project/sglang/pull/35969) — Replaces handwritten LingBot Video RMSNorm with existing diffusion Triton kernels for `quality=high`.
- [#35335](https://github.com/sgl-project/sglang/pull/35335) — Warmup-calibrated auto residency promotion prevents needless offload in `--performance-mode auto`.
- [#34803](https://github.com/sgl-project/sglang/pull/34803) — New `sgl_lora` MoE execution engine with JSON config resolution, removing the Blackwell-only constraint of the TRT-LLM expert-LoRA path.

## Stability & Regressions
- [#36071](https://github.com/sgl-project/sglang/issues/36071) — **Open, severe**: AMD DSA dense/k-only decode graph emits all-NaN logits with DP attention on GLM-5.2. No fix PR yet.
- [#36010](https://github.com/sgl-project/sglang/issues/36010) — **Open, severe**: `--kv-cache-dtype nvfp4` + speculative decoding crashes in the FlashInfer dequant workspace (`extend_prefix_lens_cpu is None`). No fix PR yet.
- [#36033](https://github.com/sgl-project/sglang/issues/36033) — **Open**: NIXL PD transfer backend sends no prefill→decode failure notification, unlike Mooncake and mori; decode only discovers failure via timeout.
- [#34737](https://github.com/sgl-project/sglang/issues/34737) — Stale staging watermark subscribers survive prefill failure in heterogeneous-TP disaggregation.
- [#35582](https://github.com/sgl-project/sglang/issues/35582) — Qwen-VL parses literal `<|vision_start|><|image_pad|><|vision_end|>` in text as an extra image, causing HTTP 500.
- [#35949](https://github.com/sgl-project/sglang/issues/35949) — Qwen 3.8 27B NVFP4 reports incorrect coordinate detection on images.
- [#36081](https://github.com/sgl-project/sglang/issues/36081) — DSV4F0731 + DSPARK error in SGLang 0.5.18.
- [#35591](https://github.com/sgl-project/sglang/issues/35591) — ROCm images pin AITER below FlyDSL MXFP4 MoE kernels, making tuned `AITER_CONFIG_FMOE` tables unusable on gfx950.
- [#34455](https://github.com/sgl-project/sglang/pull/34455) — Fix PR exists for DSA metadata row count on DP-padded idle speculative batches; resolves a nightly AMD MI355X workflow failure.
- [#18397](https://github.com/sgl-project/sglang/pull/18397) — Fixes ReDoS vulnerability in `PythonicDetector` by replacing the vulnerable regex with an O(n) algorithm.
- [#36058](https://github.com/sgl-project/sglang/issues/36058) — Build failure: `/usr/bin/ld: cannot find -lcuda`.
- [#17050](https://github.com/sgl-project/sglang/issues/17050) — CI tracker: 3 broken, 11 flaky, 670 recently fixed. Active coredump tracking continues in [#26340](https://github.com/sgl-project/sglang/issues/26340).

## What This Means for Application Developers
- **Avoid combining NVFP4 KV cache with speculative decoding** until [#36010](https://github.com/sgl-project/sglang/issues/36010) is fixed — it crashes at verify time.
- **If you rely on NIXL for PD disaggregation**, add client-side timeouts or health checks: prefill failures are not propagated to decode.
- **AMD/MI355X users** should pick up [#35719](https://github.com/sgl-project/sglang/pull/35719) and [#34455](https://github.com/sgl-project/sglang/pull/34455) to recover MTP throughput and fix nightly DSA failures.
- **Fast engine restart is becoming practical**: the Weight Cache Daemon (#33522) makes sub-second weight reload viable, which is valuable for autoscaling, rolling restarts, and RL training workloads.
- **Expert-LoRA serving is expanding beyond Blackwell**: the new `sgl_lora` MoE engine (#34803) is worth evaluating if you previously needed the experimental TRT-LLM path.
- **Diffusion quantization is converging on SRT conventions** (#36063, #36068). If you manage diffusion model configs, plan for MXFP8/AutoRound config alignment in upcoming releases.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp Digest — 2026-08-24

## Today’s Highlights
- **b10603 landed with MTP support for GLM-4.5-Air** ([#26534](https://github.com/ggml-org/llama.cpp/pull/26534)), extending speculative decoding to the GLM MoE family.
- **DeepSeek4 multi-sequence rollback was fixed** in b10593 ([#26756](https://github.com/ggml-org/llama.cpp/pull/26756)), closing the garbled-output regression with parallel processing + speculation ([#26741](https://github.com/ggml-org/llama.cpp/issues/26741)).
- **Multimodal video handling is being stabilized**: the MOOV-at-end MP4 failure now has an open fix PR ([#27596](https://github.com/ggml-org/llama.cpp/pull/27596)), and b10598 switches mtmd resize to a pillow-accurate algorithm ([#27594](https://github.com/ggml-org/llama.cpp/pull/27594)).

## Releases & Breaking Changes
- **b10603** — model: support MTP in GLM-4.5-Air ([#26534](https://github.com/ggml-org/llama.cpp/pull/26534))
- **b10599** — test: move tools/parser to tests ([#27548](https://github.com/ggml-org/llama.cpp/pull/27548))
- **b10598** — mtmd: use pillow-accurate resize algorithm, correct `resize_algo` for all models + speed optimization ([#27594](https://github.com/ggml-org/llama.cpp/pull/27594))
- **b10595** — server: add `LLAMA_SERVER_SLOTS_N_DIFF` ([#27600](https://github.com/ggml-org/llama.cpp/pull/27600))
- **b10594** — common: skip device_info loop when output is suppressed ([#26692](https://github.com/ggml-org/llama.cpp/pull/26692))
- **b10593** — DeepseekV4: fix rollback with multi-seq ([#26756](https://github.com/ggml-org/llama.cpp/pull/26756))
- **b10590** — vendor: update subprocess.h ([#27409](https://github.com/ggml-org/llama.cpp/pull/27409))
- **b10589** — cuda: add POOL_1D support ([#27573](https://github.com/ggml-org/llama.cpp/pull/27573))
- **b10588** — common: json.h clang LTO fix ([#27575](https://github.com/ggml-org/llama.cpp/pull/27575))

No explicit breaking changes, but **b10598 changes mtmd image-resize behavior**; multimodal serving output may shift slightly for models relying on the previous resize algorithm.

## New Model & Hardware Support
- **GLM-4.5-Air / GLM-4.5 MTP speculation** — merged via b10603, including converter/loader support for combined, trunk-only, and MTP-only GGUF layouts ([#26534](https://github.com/ggml-org/llama.cpp/pull/26534)).
- **HrmTextForCausalLM (“DFM Mimir 1B”)** — new model architecture PR with conversion support ([#27625](https://github.com/ggml-org/llama.cpp/pull/27625)).
- **DFlash2 speculative decoding** — adds grouped dynamic depthwise convolution + candidate selector ([#27342](https://github.com/ggml-org/llama.cpp/pull/27342)).
- **DeepSeek4 `-sm tensor`** — tensor-split support for DeepSeek4 ([#26490](https://github.com/ggml-org/llama.cpp/pull/26490)).
- **dots3note draft-mtp** — speculation support for the dots3note architecture ([#27618](https://github.com/ggml-org/llama.cpp/pull/27618)).
- **CUDA POOL_1D** op support shipped in b10589 ([#27573](https://github.com/ggml-org/llama.cpp/pull/27573)).

## Performance & Optimization
- **CUDA MoE fusion extended to spec-dec 2–8 tokens** — gate, GLU, NVFP4 scales, and topk-router fusion now cover MTP/Dflash-like paths ([#27621](https://github.com/ggml-org/llama.cpp/pull/27621)).
- **Vulkan MoE decode density gate** for `MUL_MAT_VEC_ID`: replaces the fixed 8-token cutoff; measured **+36% at batch 9, +27% at batch 16, +21% at batch 64**, neutral at batch ≤8 ([#27332](https://github.com/ggml-org/llama.cpp/pull/27332)).
- **AVX-512 / VNNI dot-product paths for Q5_K / Q6_K** — new x86 kernel processes two 256-element K-quant blocks per iteration ([#27590](https://github.com/ggml-org/llama.cpp/pull/27590)).
- **SYCL residual fusion** — fuses RMS_NORM+MUL+ADD and ADD+ADD chains, gated by `GGML_SYCL_ENABLE_FUSION` ([#27610](https://github.com/ggml-org/llama.cpp/pull/27610)).
- **Avoid unnecessary CUDA device-info context creation** when device info is not printed ([#26692](https://github.com/ggml-org/llama.cpp/pull/26692)).
- **mtmd resize speed optimization** included in b10598 ([#27594](https://github.com/ggml-org/llama.cpp/pull/27594)).

## Stability & Regressions
Ranked by severity:

1. **HIP/ROCm produces corrupted output on gfx1151 (Strix Halo / RDNA3.5)** while Vulkan is correct with byte-identical flags ([#27579](https://github.com/ggml-org/llama.cpp/issues/27579)). No fix PR yet; Vulkan is the recommended workaround.
2. **CUDA kernel stall killed by watchdog** on RTX Pro 6000 Blackwell Max-Q during eval ([#27102](https://github.com/ggml-org/llama.cpp/issues/27102)). Open, help wanted.
3. **Qwen3.8-27B-NVFP4 decode hangs on Blackwell (RTX 5090D)** — CPU spin, no GPU work ([#27329](https://github.com/ggml-org/llama.cpp/issues/27329)). Open.
4. **Windows Vulkan server cannot start in b10587** — `llama-server.exe` fails immediately ([#27576](https://github.com/ggml-org/llama.cpp/issues/27576)). Open; no fix PR yet.
5. **Native MTP reserves separate CUDA compute arena, causing OOM**; shared gallocr reportedly fixes it ([#27282](https://github.com/ggml-org/llama.cpp/issues/27282)). Open.
6. **MTP draft acceptance 1 of 633** — extremely low speculation acceptance on llama-server ([#27151](https://github.com/ggml-org/llama.cpp/issues/27151)). Open.
7. **Multimodal + speculative draft-dflash**: image chunks leave positional holes in draft KV cache, causing HTTP 500 ([#27408](https://github.com/ggml-org/llama.cpp/issues/27408)). Open.
8. **OpenCL fixes for Adreno GPUs** — out-of-contract image-kernel reads ([#27632](https://github.com/ggml-org/llama.cpp/pull/27632)) and several backend-abort bugs ([#27630](https://github.com/ggml-org/llama.cpp/pull/27630)). Both open PRs.
9. **Fixed today**: DeepSeek4 garbled output under parallel processing + speculation was closed by the b10593 rollback fix ([#26741](https://github.com/ggml-org/llama.cpp/issues/26741), [#26756](https://github.com/ggml-org/llama.cpp/pull/26756)).
10. **Fix in flight**: Silent mtmd video failure on MOOV-at-end MP4s ([#24394](https://github.com/ggml-org/llama.cpp/issues/24394)) has an open fix PR ([#27596](https://github.com/ggml-org/llama.cpp/pull/27596)).

## What This Means for Application Developers
- **Upgrade to b10603 if you serve GLM-4.5-Air or GLM-4.5** — MTP speculative decoding is now available, but verify your GGUF layout (combined/trunk/MTP-only) with the updated converter/loader.
- **DeepSeek4 serving with parallel slots or speculation should pick up b10593** to avoid the rollback corruption bug.
- **On AMD Strix Halo / gfx1151, prefer the Vulkan backend over HIP/ROCm** for now; the HIP corruption issue is unresolved.
- **If your app accepts user-uploaded MP4s**, track [#27596](https://github.com/ggml-org/llama.cpp/pull/27596) — MOOV-at-end files currently fail silently on some setups.
- **Server slot behavior is evolving**: `LLAMA_SERVER_SLOTS_N_DIFF` was added in b10595 ([#27600](https://github.com/ggml-org/llama.cpp/pull/27600)), and an LRU-slot stale-state fix is in review ([#27624](https://github.com/ggml-org/llama.cpp/pull/27624)).
- **Tool-call correctness**: a fix for tool calls being dropped from trailing assistant messages with `--prefill-assistant` is up as [#27626](https://github.com/ggml-org/llama.cpp/pull/27626) — relevant for agent-style workloads.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Digest — 2026-08-24

## 1. Today's Highlights

Two serious regressions dominate the tracker: a generation-hang regression introduced in v0.32.11 (long completions never stop) remains unfixed in v0.32.15 ([#17910](https://github.com/ollama/ollama/issues/17910)), and Qwen3.8 tool-calling loops produce 500 "no user query found" errors during streaming ([#17778](https://github.com/ollama/ollama/issues/17778)). On the infrastructure side, the scheduler is getting a robustness pass — refusing exited runners and bounding `/api/embed` fan-out ([#17954](https://github.com/ollama/ollama/pull/17954)) — and two PRs target persistent prefill KV caches across runner reloads to avoid repeat prefill costs ([#17953](https://github.com/ollama/ollama/pull/17953), [#17278](https://github.com/ollama/ollama/pull/17278)).

## 2. Releases & Breaking Changes

No new releases in the last 24h. Notable changes in flight or recently closed:

- **`ollama launch --config`** becomes truly config-only (no prompt-and-execute), and cloud defaults for Claude/OpenClaw/Hermes/Copilot/launcher move from `minimax-m2.7:cloud` to `minimax-m3:cloud` with updated context-length metadata ([#16546](https://github.com/ollama/ollama/pull/16546)).
- **New opt-in `OLLAMA_PREFILL_CACHE`** persists prefill KV across model unload/reload (8 GiB LRU cap, fail-open behavior) ([#17278](https://github.com/ollama/ollama/pull/17278)).

## 3. New Model & Hardware Support

- **Qwen3 parser: explicit thinking support** — `<think>...</think>` blocks can now be split into `message.thinking` (disabled by default), fixing HF-imported models like `RuadaptQwen3-8B-Hybrid` where reasoning leaked into content ([#17945](https://github.com/ollama/ollama/pull/17945), closes [#17937](https://github.com/ollama/ollama/issues/17937)).
- **MLX:** version bump ([#17955](https://github.com/ollama/ollama/pull/17955)) and CUDA runtime payload deduplication so MLX CUDA builds share libs with the sibling `cuda_v13` payload instead of duplicating them ([#17956](https://github.com/ollama/ollama/pull/17956)).
- **Docs:** NVIDIA driver version guidance by compute capability added for older-GPU support ([#17940](https://github.com/ollama/ollama/pull/17940)).
- **HF-import caveat:** automatic `stop` parameter derivation is incorrect for `Muse-Glimmer-30B` GGUFs, truncating output to ~3 tokens ([#17939](https://github.com/ollama/ollama/issues/17939)).

## 4. Performance & Optimization

- **Prefill cache persistence:** [#17953](https://github.com/ollama/ollama/pull/17953) adds experimental runner-reload KV persistence via llama-server slot save/restore; [#17278](https://github.com/ollama/ollama/pull/17278) is the scheduler-owned variant with fingerprinting and an 8 GiB LRU. Both are opt-in and would eliminate full prefill cost after keep-alive expiry or model switches.
- **Embed API concurrency bound:** the scheduler will refuse exited runners and bound `/api/embed` fan-out so large batches cannot spawn thousands of concurrent requests ([#17954](https://github.com/ollama/ollama/pull/17954)).
- **MLX-C build fix:** external compat patches made idempotent so CMake reruns don't fail against retained source dirs ([#17948](https://github.com/ollama/ollama/pull/17948)).
- **AMD Strix Halo (gfx1151):** keeping ≥2 runner processes resident pins the GPU at max clock (~25 W package power) even when fully idle; exactly one resident model idles cleanly — under investigation ([#17958](https://github.com/ollama/ollama/issues/17958)).

## 5. Stability & Regressions

Ranked by severity:

1. **Generation hangs (HIGH, no fix PR yet):** regression in v0.32.11–v0.32.15 — long completions run past any natural end until killed; v0.32.9 unaffected ([#17910](https://github.com/ollama/ollama/issues/17910)).
2. **Qwen3.8 tool-loop 500:** "no user query found in messages" during streaming chat when tools are invoked in a loop ([#17778](https://github.com/ollama/ollama/issues/17778)).
3. **Wrong stop params on HF import:** Muse-Glimmer-30B outputs truncated to ~3 tokens due to bad automatic `stop` derivation ([#17939](https://github.com/ollama/ollama/issues/17939)).
4. **Grammar parse failure:** ornith-1.5:35b fails with "failed to initialize samplers: failed to parse grammar" when response format + tools are combined; qwen3.6:35b handles the same request ([#17957](https://github.com/ollama/ollama/issues/17957)).
5. **Sharded GGUF import:** blobs are copied into storage before invalid shard naming is detected; fix [#17949](https://github.com/ollama/ollama/pull/17949) validates filenames/metadata pre-upload.
6. **Vulkan gfx1151 watchdog timeout:** amdgpu compute-ring timeout / ErrorDeviceLost on long-prompt prefill; `num_batch=128` works around it ([#17870](https://github.com/ollama/ollama/issues/17870)).
7. **HF pull timeouts:** "context deadline exceeded" when pulling large GGUF files ([#17484](https://github.com/ollama/ollama/issues/17484)).
8. **Draft memory misreport:** Gemma 4 E2B + MTP drafter reports 315 MB in `/api/ps` for a 4.4 GB model ([#17951](https://github.com/ollama/ollama/issues/17951)).

Recently closed/stabilized: qwen3.8 system-message-ordering 500 ([#17754](https://github.com/ollama/ollama/issues/17754)), q4_0 KV quantization garbage output ([#17614](https://github.com/ollama/ollama/issues/17614)), Gemma 4 repeated `<unused49>` tokens with `think=false` ([#17459](https://github.com/ollama/ollama/issues/17459)), `/api/generate` "token repeat limit" regression since 0.32.1 ([#17270](https://github.com/ollama/ollama/issues/17270)), inconsistent 400/200 over-length context handling ([#17889](https://github.com/ollama/ollama/issues/17889)), CUDA errors after 0.31.2 ([#17116](https://github.com/ollama/ollama/issues/17116)), and gemma4:e2b CUDA_Host memory over-allocation on Windows ([#17386](https://github.com/ollama/ollama/issues/17386)).

## 6. What This Means for Application Developers

- **Qwen3.8 + tool calling is currently risky:** the "no user query found" 500 fires inside tool loops, and Claude Code integration hits a related system-message-ordering 500. Pin known-good versions and add retry/fallback logic if you run agentic workloads on Qwen3.8 ([#17778](https://github.com/ollama/ollama/issues/17778), [#17754](https://github.com/ollama/ollama/issues/17754)).
- **Over-length prompts are silently truncated:** the API returns 200 even when input is shortened, making truncation indistinguishable from normal processing. Set `num_ctx` explicitly and validate `prompt_eval_count` against input length ([#17889](https://github.com/ollama/ollama/issues/17889), docs PR [#17944](https://github.com/ollama/ollama/pull/17944)).
- **Embed batch limits are coming:** once [#17954](https://github.com/ollama/ollama/pull/17954) lands, huge `/api/embed` batches will be concurrency-bounded rather than fanning out unboundedly — size client batches accordingly.
- **Prefill cache opt-in is on the way:** `OLLAMA_PREFILL_CACHE` can cut repeated prefill cost after keep-alive expiry — worth evaluating for multi-tenant or interactive workloads with shared prompt prefixes ([#17278](https://github.com/ollama/ollama/pull/17278), [#17953](https://github.com/ollama/ollama/pull/17953)).
- **HF imports remain fragile:** validate third-party GGUF stop-token metadata and shard naming before depending on them in production ([#17939](https://github.com/ollama/ollama/issues/17939), [#17946](https://github.com/ollama/ollama/issues/17946)).
- **OpenAI Responses namespace tools** support is in progress — Ollama will preserve namespace tool wire contracts in streaming and continuation requests ([#16263](https://github.com/ollama/ollama/pull/16263)).

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-08-24

## 1. Today's Highlights

Two releases shipped: stable **v1.98.0** and release candidate **v1.99.0-rc.1**, both with cosign-signed Docker images ([v1.98.0](https://github.com/BerriAI/litellm/releases/tag/v1.98.0), [v1.99.0-rc.1](https://github.com/BerriAI/litellm/releases/tag/v1.99.0-rc.1)). On the security side, a newly reported bug lets any non-admin with `/credentials` route access overwrite config.yaml-defined credentials by reusing their names ([#38033](https://github.com/BerriAI/litellm/issues/38033)); a fix rejecting duplicates with HTTP 409 is already open ([#38034](https://github.com/BerriAI/litellm/pull/38034)). Meanwhile, the most-upvoted performance issue — slow `import litellm` (42 👍) — was closed as stale, and a production stability bug where prompt-injection heuristics block the event loop and restart Kubernetes pods ([#19499](https://github.com/BerriAI/litellm/issues/19499)) remains unfixed.

## 2. Releases & Breaking Changes

- **v1.98.0 (stable)** and **v1.99.0-rc.1**: Both releases focus on Docker supply-chain verification — every image is signed with the cosign key introduced in [commit `0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0). No API/config breaking changes were called out in the release notes.
- **Watch item**: Redis-backed deployments on ≥ v1.93.0 are hitting `TypeError: unexpected keyword argument 'ssl_check_hostname'` ([#34614](https://github.com/BerriAI/litellm/issues/34614)) — still open, so pin accordingly if you use Redis caching/budget counters.

## 3. New Model & Hardware Support

- **Anthropic Workload Identity Federation** ([PR #38013](https://github.com/BerriAI/litellm/pull/38013)): Pluggable identity sources and provider-level setup eliminate the need for long-lived `sk-ant` static keys for Anthropic-direct auth — the missing piece that Vertex/Azure already had.
- **GigaChat passthrough route** ([PR #25886](https://github.com/BerriAI/litellm/pull/25886)): New native passthrough for the GigaChat provider.
- **Bedrock Nova 2 geo prefixes** ([PR #33775](https://github.com/BerriAI/litellm/pull/33775)): `_is_nova_2_model` detection extended to `jp.` and `global.` prefixes.
- **Databricks → Gemini 2.5 reasoning** ([PR #34001](https://github.com/BerriAI/litellm/pull/34001)): Translates `reasoning_effort` to Gemini `thinking` for Databricks-served Gemini 2.5.
- No CUDA/ROCm/Metal/CPU or quantization-format work appeared in this window.

## 4. Performance & Optimization

- **Import speed closed as stale** ([#7605](https://github.com/BerriAI/litellm/issues/7605)): The long-running request to cut `import litellm` from ~1s was closed after 34 comments and 42 upvotes, with no landed optimization.
- **Rerank observability** ([PR #35419](https://github.com/BerriAI/litellm/pull/35419)): `/rerank` will soon emit latency and cost headers and honor `LITELLM_DETAILED_TIMING`, letting operators separate proxy overhead from provider time.
- **Prompt-injection event-loop blocking** ([#19499](https://github.com/BerriAI/litellm/issues/19499)): The built-in heuristics check blocks the event loop, causing pod restarts under Kubernetes load — an availability hazard, still no fix PR.
- **Windows CLI probe fix** ([PR #37597](https://github.com/BerriAI/litellm/pull/37597)): `lite autoroute down` on Windows was calling `os.kill(pid, 0)` — which is Ctrl-C, not a probe — crashing with tracebacks and misreporting dead processes; the PR probes without signalling.

## 5. Stability & Regressions

Ranked by severity:

1. **Credential overwrite via `/credentials`** ([#38033](https://github.com/BerriAI/litellm/issues/38033), security): Any key holder granted the `/credentials` route can replace a config.yaml-defined credential by reusing its name. Fix PR [#38034](https://github.com/BerriAI/litellm/pull/38034) rejects duplicates with 409 and maps DB race conditions to the same response.
2. **Prompt-injection detection blocks event loop** ([#19499](https://github.com/BerriAI/litellm/issues/19499), open): Kubernetes pod restarts under load; no fix PR yet.
3. **False `BudgetExceededError` under sustained load** ([#36926](https://github.com/BerriAI/litellm/issues/36926), open): ~100–130 requests over 40 min triggers 429s; reported "current cost" = max_budget + recent spend; self-heals in ~2 min. No Redis involved, pointing to a local accounting bug.
4. **Azure Responses API streaming broken** ([#28553](https://github.com/BerriAI/litellm/issues/28553), open): `stream_options.include_usage` is forwarded to Azure and rejected — blocks OpenAI Codex against Azure models.
5. **Responses API strips `cache_control` unconditionally** ([#37474](https://github.com/BerriAI/litellm/issues/37474), open): Affects self-hosted OpenAI-compatible gateways bridging to Claude, where Chat Completions has a custom-endpoint carve-out but Responses does not.
6. **`bedrock_mantle` ignores per-model static AWS keys** ([#38028](https://github.com/BerriAI/litellm/issues/38028), open): Requests can inherit proxy host identity. Fix PR [#38032](https://github.com/BerriAI/litellm/pull/38032) forwards deployment credentials to request signing.
7. **Streaming 500 on Responses-API models via `/chat/completions`** ([PR #34382](https://github.com/BerriAI/litellm/pull/34382)): Trailing bridge chunks without a `choices` key crash `stream_chunk_builder`; the PR guards all `.get("choices")` accesses.
8. **Anthropic passthrough multi-turn tool calls** ([#26167](https://github.com/BerriAI/litellm/issues/26167), closed): `/v1/responses` bridged to Anthropic failed on follow-up turns — verify the closing fix if you use this path.
9. **SSO role inconsistency** ([#33690](https://github.com/BerriAI/litellm/issues/33690), open): `internal_user_view_only` vs `internal_user_viewer` differs across docs and code in the Generic OIDC setup guide.
10. **Price-map data errors** ([#37255](https://github.com/BerriAI/litellm/issues/37255), [#37823](https://github.com/BerriAI/litellm/issues/37823), [#37584](https://github.com/BerriAI/litellm/issues/37584)): DeepSeek V4 Pro/Flash flat rates are stale; Azure `gpt-4o-2024-11-20` data-zone entries are missing `cache_read_input_token_cost`; `novita/openai/gpt-oss-120b` entry needs corrections in both price-map files.

Also worth noting: [#21540](https://github.com/BerriAI/litellm/issues/21540) (open) — empty `models` list on a virtual key grants access to *all* models, while empty MCP list grants *none*; inconsistent defaults with a security implication.

## 6. What This Means for Application Developers

- **Budget enforcement can false-positive**: The `BudgetExceededError` bug ([#36926](https://github.com/BerriAI/litellm/issues/36926)) can interrupt long batch runs for ~2 minutes. If you run sustained workloads, leave headroom above `max_budget` until the fix lands. DeepSeek spend will also be misreported until prices are refreshed ([#37255](https://github.com/BerriAI/litellm/issues/37255)).
- **Audit `/credentials` exposure now**: The overwrite bug ([#38033](https://github.com/BerriAI/litellm/issues/38033)) is live for any non-admin key with that route; restrict access until v1.99.0 with [#38034](https://github.com/BerriAI/litellm/pull/38034) ships.
- **Agentic clients need path checks**: OpenAI Codex against Azure is still blocked by the `stream_options.include_usage` regression ([#28553](https://github.com/BerriAI/litellm/issues/28553)), and Claude-Code-style traffic through custom OpenAI-compatible gateways loses `cache_control` on the Responses API ([#37474](https://github.com/BerriAI/litellm/issues/37474)) — verify your provider routes before upgrading.
- **Upgrade with verification**: v1.98.0 is the current stable; verify the cosign signature before pulling Docker images. If you run Redis-backed caching/counters, stay alert for the `ssl_check_hostname` regression ([#34614](https://github.com/BerriAI/litellm/issues/34614)) and pin to a version that predates it if affected.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

## Unsloth Digest — 2026-08-24

### 1. Today’s Highlights

Unsloth did not ship a new release in the last 24 hours; activity is concentrated in Studio reliability, test-infrastructure cleanup, and in-flight performance features. A Studio server deadlock ([#9008](https://github.com/unslothai/unsloth/issues/9008)) was closed, and a red main caused by serving-slot pricing was fixed via [#9594](https://github.com/unslothai/unsloth/pull/9594). In-flight PRs add MLX speculative decoding ([#9589](https://github.com/unslothai/unsloth/pull/9589)), estimated memory usage before model load ([#9525](https://github.com/unslothai/unsloth/pull/9525)), and Qwen3.8 reasoning-mode sampling defaults ([#9595](https://github.com/unslothai/unsloth/pull/9595)).

### 2. Releases & Breaking Changes

No releases were published in the last 24 hours. No API/config changes or migration notes are available in this batch.

### 3. New Model & Hardware Support

- **New Studio audio models**: PR [#8794](https://github.com/unslothai/unsloth/pull/8794) adds native support for Higgs TTS 2/3B, MOSS-TTS Local Transformer, MOSS-TTS Nano, Higgs Audio v3, and MiniMax Music3.
- **MLX speculative decoding**: PR [#9589](https://github.com/unslothai/unsloth/pull/9589) adds speculative decoding for the MLX inference backend, using a drafter model verified by the target model, with MTP support.
- **Qwen3.8 reasoning-aware defaults**: PR [#9595](https://github.com/unslothai/unsloth/pull/9595) adds separate sampling defaults for thinking and non-thinking modes.
- **AMD still lacking Docker support**: Feature request [#9581](https://github.com/unslothai/unsloth/issues/9581) asks for an AMD Docker image; AMD VRAM detection is also reported broken on RDNA3 in [#9551](https://github.com/unslothai/unsloth/issues/9551).

### 4. Performance & Optimization

- **MLX speculative decoding** ([#9589](https://github.com/unslothai/unsloth/pull/9589)) is positioned as a throughput win on Apple Silicon, where memory bandwidth is the main bottleneck.
- **Estimated Memory Usage in Load Model panel** ([#9525](https://github.com/unslothai/unsloth/pull/9525)) gives a pre-load estimate of memory cost and context fit.
- **Download speed/ETA stabilization** ([#9593](https://github.com/unslothai/unsloth/pull/9593)) fixes estimator math and surfaces that were bypassing it.
- **Prompt processing progress for GGUF** ([#9597](https://github.com/unslothai/unsloth/pull/9597)) exposes progress during large prompt evaluation instead of showing only “Generating.”
- **Serving-slot reduction pricing** ([#9594](https://github.com/unslothai/unsloth/pull/9594)) fixes incorrect cost calculation that had turned main red.
- No concrete throughput/latency benchmark numbers were published in this dataset.

### 5. Stability & Regressions

Ranked by severity:

- **Studio server deadlock**: [#9008](https://github.com/unslothai/unsloth/issues/9008) — every thread blocked in `sqlite3.connect()`/`close()`, server stops accepting connections. Closed.
- **Release-blocking main failure**: [#9594](https://github.com/unslothai/unsloth/pull/9594) — 26 backend test failures across slot-refit tests traced back to [#9492](https://github.com/unslothai/unsloth/pull/9492). Fix closed.
- **Chat persistence failure**: [#9518](https://github.com/unslothai/unsloth/issues/9518) — AppImage/WebKitGTK build cannot persist chat messages to IndexedDB; backend API works fine via direct `curl`.
- **Model Hub crash**: [#9480](https://github.com/unslothai/unsloth/issues/9480) — WebKitWebProcess SIGABRT on Fedora/Wayland, tied to a Skia COLRv1 font assert.
- **MLX reasoning models return blank content**: [#9288](https://github.com/unslothai/unsloth/pull/9288) — OpenAI-compatible clients read empty `content` while the full answer is in `reasoning_content`; fix PR is open.
- **Tool calling failure on custom endpoints**: [#9039](https://github.com/unslothai/unsloth/issues/9039) — every tool call fails with `invalid_request_error`. Closed.
- **AMD/VRAM and context behavior**: [#9551](https://github.com/unslothai/unsloth/issues/9551) (VRAM detection wrong on W7900), [#9549](https://github.com/unslothai/unsloth/issues/9549) (loading into RAM despite VRAM checks), [#9550](https://github.com/unslothai/unsloth/issues/9550) (MTP dropped to fit context), [#9546](https://github.com/unslothai/unsloth/issues/9546) (original model context pinned to 4096 after switch-back).
- **Studio UI/persistence bugs**: [#9500](https://github.com/unslothai/unsloth/issues/9500) (presets return 400), [#9600](https://github.com/unslothai/unsloth/issues/9600) (IndexedDB unavailable), [#9588](https://github.com/unslothai/unsloth/issues/9588) (special characters in Windows home path break installs), [#9543](https://github.com/unslothai/unsloth/issues/9543) (voice dictation records 0 bytes on Linux).
- **Stale Docker llama.cpp**: [#9583](https://github.com/unslothai/unsloth/issues/9583) — `docker.io/unsloth/unsloth:latest` still carries a llama.cpp release from May 26, 2026.
- **Test shared-state pollution**: [#9585](https://github.com/unslothai/unsloth/issues/9585) and [#9586](https://github.com/unslothai/unsloth/issues/9586) document tests writing into shared machine/process state; fix PR [#9587](https://github.com/unslothai/unsloth/pull/9587) contains installer-test venv writes.
- **studiobench measurement defects**: [#9542](https://github.com/unslothai/unsloth/pull/9542), [#9575](https://github.com/unslothai/unsloth/pull/9575), and [#9439](https://github.com/unslothai/unsloth/pull/9439) fix several benchmark instruments that published incorrect numbers or dropped rows.
- **Other closed regressions**: markdown chunk crash ([#9235](https://github.com/unslothai/unsloth/issues/9235)), canceled prompts producing consecutive user messages ([#9484](https://github.com/unslothai/unsloth/issues/9484)), image-generation parameter mismatch after model swap ([#9448](https://github.com/unslothai/unsloth/issues/9448)), and Deep Research failures with external models ([#8838](https://github.com/unslothai/unsloth/issues/8838)).

### 6. What This Means for Application Developers

- **Pin versions until a stable release cuts**: no release landed in the last 24h, and main was red until [#9594](https://github.com/unslothai/unsloth/pull/9594) was merged. Studio users should treat current `0.1.801-beta` snapshots with caution.
- **Agent tool-call paths are fragile**: [tool-call validation on custom endpoints](https://github.com/unslothai/unsloth/issues/9039) and [chat persistence](https://github.com/unslothai/unsloth/issues/9518) both failed without backend errors. If you build on Studio’s OpenAI-compatible API, add end-to-end regression tests for tool-calling and chat history writes.
- **Apple Silicon agent deployments could benefit soon**: [MLX speculative decoding](https://github.com/unslothai/unsloth/pull/9589) and [Qwen3.8 reasoning-aware defaults](https://github.com/unslothai/unsloth/pull/9595) should improve local throughput and output quality once merged.
- **Watch AMD/ROCm before committing to Studio on RDNA3**: [VRAM detection](https://github.com/unslothai/unsloth/issues/9551) and [RAM-vs-VRAM loading](https://github.com/unslothai/unsloth/issues/9549) are still open, so memory sizing on AMD is not reliable yet.
- **Memory estimation is coming**: [Estimated Memory Usage in the Load Model panel](https://github.com/unslothai/unsloth/pull/9525) will make capacity planning easier, but is not merged yet.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*