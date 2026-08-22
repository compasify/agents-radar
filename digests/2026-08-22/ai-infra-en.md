# AI Infrastructure Digest 2026-08-22

> Generated: 2026-08-21 23:13 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# Cross-Project AI Infrastructure Report — 2026-08-22

## 1. Ecosystem Overview

Agent workloads are now the primary stress-test for the entire inference stack: KV-cache reliability, streaming protocol correctness, and speculative decoding dominate the bug trackers across all six projects. DeepSeek-V4-family support is the de-facto proving ground for serving maturity, from FP4/MXFP4 kernels to Ampere compatibility gaps. Optimization focus continues to shift from raw token throughput toward deterministic, cache-efficient, and agent-loop-safe behavior. Meanwhile, AMD/ROCm/XPU enablement moved from "experimental" to "actively invested" across every layer, and supply-chain/cost-telemetry hygiene (stale installs, signed images, accurate Azure meters) is becoming a visible production concern. No major stable release landed from the serving-layer projects in the last 24h; only llama.cpp shipped a tagged milestone.

## 2. Activity Comparison

*Counts reflect issues/PRs cited in each project's 24h digest, not total open counts.*

| Project | Issues Cited | PRs Cited | Release Status |
|---|---|---|---|
| vLLM | ~17 | ~17 | No release; Model Runner V2 default ([#53183]) still in CI |
| SGLang | ~20 | ~13 | No release; `uv < 0.12` install caveat active |
| llama.cpp | ~9 | ~17 | **v0.2.0 cut** + nightly tag **b10566** |
| Ollama | ~19 | ~17 | **v0.33.0-rc0** (MLX fixes + Claude Desktop support) |
| LiteLLM | ~18 | ~13 | **v1.99.0-dev.2**; all images now cosign-signed |
| Unsloth | ~16 | ~12 | No release; Desktop v0.1.801-beta implicated in several regressions |

**Read:** llama.cpp and Ollama are in release cadence; vLLM, SGLang, and Unsloth are in a heavy fix/PR phase with no tagged stability point in the last 24h; LiteLLM is iterating at dev-release velocity.

## 3. Model Support Race

| Project | New Model / Architecture Support This Cycle |
|---|---|
| **vLLM** | Nothing shipped. DeepSeek-V4-Flash on Ampere still blocked by DeepGEMM asserts ([#50576], [#40851]); Cohere ChatV2 render endpoint, ROCm MLA spec-decode for Kimi-K3 DSpark, FlashInfer MLA migration all in PR stage |
| **SGLang** | **DeepSeek V4 FP4 now defaults to the FlashInfer MXFP4 MoE runner** ([#35919]) — the only shipped frontier-model forward step today; MiniCPM-SALA and Cosmos3 transfer in progress; Kimi-K3 + MoonEP roadmap filed |
| **llama.cpp** | **LFM2/LFM2MOE multi-GPU tensor split shipped** ([#26993]); DFlash2 spec-decode proposed; Zamba2 open PR; `--mmproj-device` shipped for multimodal projector placement |
| **Ollama** | **MLX DFlash2 native loading shipped** ([#17865]); Llama 4 tokenizer split fix ([#17791]); Qwen3.5 on Vulkan still unreliable |
| **LiteLLM** | No new model support (gateway layer). GPT-5.6 reasoning-effort levels and Azure cost-map entries in flight; DeepSeek V4 `reasoning_effort` still stripped upstream ([#27439]) |
| **Unsloth** | **GRPO reinforcement learning added to the Train page** ([#9310]); multi-image edit pipelines for QwenImageEditPlus/FluxKontext ([#9205]); portable Agent Skills bundles ([#9355]); ROCm AOTriton attention kernels unlocked for library users |

**Who is ahead:** SGLang made the most visible serving-side advance (MXFP4 default for DeepSeek-V4 FP4); vLLM retains the broadest frontier-model coverage but has a conspicuous Ampere gap. llama.cpp leads on locally runnable new architectures (LFM2 shipped, Zamba2 queued). Unsloth leads on the training/RL side. Ollama and LiteLLM are derivative of their upstream runtimes.

## 4. Performance Frontier

Optimization effort is concentrated in five areas:

- **KV cache & context management (dominant theme).** SGLang's HiCache plan, distributed KVCache roadmap, and weight-cache daemon (Qwen3-235B FP8 weight load cut from ~300s to <1s, [#33522]) are the most aggressive investments. vLLM has three KV-offload correctness PRs in flight ([#53329], [#53330], [#53240]). Ollama's MLX prefix-cache gap ([#17829]) and Claude Code KV-preservation fix ([#17918]) show agent loops are the forcing function. llama.cpp optimized Metal KV dequant batching ([#27438]).
- **Speculative decoding hardening.** vLLM routes spec-decode batches into full CUDA graphs ([#52000]) and captures widest uniform decode batches ([#50488]); SGLang is fixing Dspark/Dflash state divergence across TP ranks ([#33614]); llama.cpp proposed adaptive MTP depth ([#27210]); Ollama added MLX DFlash2. But correctness bugs dominate: prefill misdispatch ([#53051]), zero-probability draft acceptance ([#35771]), and a `cublasSgemm` crash under KV saturation ([#26558]).
- **Quantization dispatch.** SGLang's FlashInfer MXFP4 MoE runner is the headline; vLLM continues the QuantKey-based dispatch migration ([#52958], [#51808]); llama.cpp shipped a Vulkan FP32 quantization correctness fix ([#27413]).
- **Distributed serving.** vLLM's `sharded_rdt` P2P weight-transfer backend ([#43375]) lets workers pull only needed shards; SGLang's MoonEP roadmap targets static-shape dispatch; llama.cpp added LFM2 tensor split but still has a multi-node RPC crash open ([#26583]).
- **Kernel specialization.** vLLM fused MoonViT Q/K complex RoPE on SM90+ ([#53168]); SGLang added a fused SANA-Video RoPE kernel; Unsloth unblocked sub-quadratic ROCm attention; llama.cpp flattened Mamba2 in/out projections to GEMM dispatch ([#27513]).

## 5. Layer Positioning

| Project | Layer | Primary Role |
|---|---|---|
| **vLLM** | Serving engine | High-throughput multi-GPU inference; tensor parallel, spec-decode, production OpenAI/Cohere-compatible APIs |
| **SGLang** | Serving engine | Throughput serving plus agentic infrastructure: distributed KV cache (HiCache), semantic cache reuse, MoE routing (MoonEP) |
| **llama.cpp** | Local runtime | GGUF execution across CUDA/Metal/Vulkan/ROCm/SYCL; `llama-server` for edge/on-prem; tight release cadence |
| **Ollama** | Local dev runtime | UX layer over llama.cpp + MLX; desktop app, model management, Claude Desktop integration; inherits upstream backend bugs |
| **LiteLLM** | Gateway/proxy | Provider-agnostic routing, auth/rate limits, MCP bridging, cost tracking, observability; no inference of its own |
| **Unsloth** | Training/fine-tuning | SFT/GRPO tuning, Desktop app for local serving, AMD/ROCm/Vulkan enablement, GGUF conversion |

The interesting boundary shift: **SGLang and vLLM are converging** on agentic KV-cache infrastructure, while **Ollama and llama.cpp are converging** on local agent-loop support (prefix caching, streaming cancellation). **LiteLLM's MCP/auth work** makes it the de-facto control plane for multi-provider agent deployments.

## 6. Trend Signals

- **Agent workloads are rewriting the cache roadmap.** Distributed KV cache (SGLang), KV-offload correctness (vLLM), prefix-cache persistence across cancelled requests (Ollama), and KV-cache preservation for Claude Code are all active this cycle. Application developers should assume cache internals will break across upgrades — pin versions.
- **Speculative decoding is spreading faster than it is stabilizing.** New support landed at every layer (DFlash2 in llama.cpp/Ollama, MTP/DFlash in serving engines), but critical correctness bugs remain unmerged. Treat spec-decode as a non-default optimization in production.
- **DeepSeek-V4 is the ecosystem's stress-test model.** FP4/MXFP4 defaults (SGLang), Ampere incompatibility (vLLM), weight-loading errors, garbled outputs on ROCm, and `reasoning_effort` stripping (LiteLLM) — every project has a DeepSeek-V4 issue open. Its support status is a reliable maturity indicator.
- **Streaming/agent protocol correctness is the new competitive surface.** Trailing empty chunks (LiteLLM/Bedrock), unregistered `chatcmpl-<id>` deltas, Gemma4 reasoning/content channel splits, and dropped `xhigh` reasoning effort (Ollama) — all break agent loops in ways throughput benchmarks miss.
- **Multi-vendor hardware enablement is real but rough.** ROCm 7.14 (SGLang), AOTriton attention (Unsloth), Vulkan UMA accounting (Unsloth), ROCm MLA (vLLM), plus ongoing XPU/Battlemage and Strix Halo issues — AMD is investable; Intel XPU is not yet.
- **Cost telemetry accuracy is becoming a production risk.** Azure GPT-5.6 price entries are wrong (LiteLLM [#36192]); health-check loads can near-OOM the DB ([#37611]). Multi-model deployments now need gateways with auditable cost maps.
- **RL is entering the fine-tuning layer.** Unsloth's GRPO support and the cluster of rolling-context/auto-compaction requests signal the next wave: post-training and context management at the application level, not just token serving.

**What to watch next:** vLLM's Model Runner V2 default switch ([#53183]), SGLang's HiCache milestones, llama.cpp's post-v0.2.0 stabilization, Ollama's MLX prefix-cache merge ([#17901]), and whether LiteLLM's MCP OAuth2/DCR credential handling lands a fix. For production agent deployments today, verify installs (SGLang `uv >= 0.12`), pin served versions, and add sanity checks on streaming deltas and embedding outputs.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest — 2026-08-22

## Today’s Highlights

No new release was cut in the last 24 hours. Activity is concentrated on DeepSeek-V4-Flash support for Ampere/SM8x ([#50576](https://github.com/vllm-project/vllm/issues/50576), [#40851](https://github.com/vllm-project/vllm/issues/40851)) and a series of speculative-decoding / KV-cache correctness fixes now in flight ([#50457](https://github.com/vllm-project/vllm/pull/50457), [#50488](https://github.com/vllm-project/vllm/pull/50488), [#52000](https://github.com/vllm-project/vllm/pull/52000), [#52244](https://github.com/vllm-project/vllm/pull/52244), [#53329](https://github.com/vllm-project/vllm/pull/53329), [#53330](https://github.com/vllm-project/vllm/pull/53330)). Maintainers also proposed enabling Model Runner V2 for all models by default ([#53183](https://github.com/vllm-project/vllm/pull/53183)).

## Releases & Breaking Changes

- None in the last 24 hours. No migration notes or released API/config changes to report.
- Watch item: [#53183](https://github.com/vllm-project/vllm/pull/53183) would switch all models to Model Runner V2 by default; still being flushed out in CI.

## New Model & Hardware Support

- **DeepSeek-V4-Flash on Ampere remains unsupported.** The SM8x request ([#50576](https://github.com/vllm-project/vllm/issues/50576)) is now the most-commented open issue, and the original tracker ([#40851](https://github.com/vllm-project/vllm/issues/40851)) remains open. A100/A800 users are still blocked by DeepGEMM assertion failures.
- **Cohere ChatV2 render endpoint** is proposed in [#53219](https://github.com/vllm-project/vllm/pull/53219), adding `/cohere/v2/chat/render`.
- **ROCm MLA spec-decode support**: [#53001](https://github.com/vllm-project/vllm/pull/53001) adds Aiter MLA decode for non-causal draft blocks, useful for Kimi-K3 DSpark on ROCm.
- **FlashInfer MLA API migration**: [#52990](https://github.com/vllm-project/vllm/pull/52990) moves the MLA decode backend to FlashInfer’s unified `batch_mla_paged_attention` API.
- **Qwen3-VL dummy-input fix**: [#53225](https://github.com/vllm-project/vllm/pull/53225) restores `truncation=False` for dummy image inputs, preventing truncated dummy prompts.
- **Model capability registration** is being refactored to register capabilities directly ([#52459](https://github.com/vllm-project/vllm/pull/52459)).
- The experimental Rust frontend remains feature-incomplete relative to the Python API server ([#44280](https://github.com/vllm-project/vllm/issues/44280)).

## Performance & Optimization

- The DeepSeek-V4 performance optimization tracker ([#45861](https://github.com/vllm-project/vllm/issues/45861)) shows several sub-PRs completed, including work by @yewentao256 and @tlrmchlsmth, but remains open for further gains.
- **MoonViT RoPE fusion**: [#53168](https://github.com/vllm-project/vllm/pull/53168) adds an SM90+ Triton path that fuses Q/K complex RoPE for MoonViT, avoiding per-layer materialization of real/imaginary components.
- **Spec-decode CUDA graph dispatch**: [#52000](https://github.com/vllm-project/vllm/pull/52000) routes uniform-decode batches to a padded FULL CUDA graph instead of falling back to eager PIECEWISE execution, removing a per-step latency bubble.
- **Widest uniform decode capture**: [#50488](https://github.com/vllm-project/vllm/pull/50488) changes warmup to capture the widest uniform decode batch by default for speculative decoding.
- **DFlash drafter prefix caching**: [#50457](https://github.com/vllm-project/vllm/pull/50457) enables prefix caching for all-sliding DFlash drafters by fixing heterogeneous KV-cache group handling.
- **P2P RDT weight sync**: [#43375](https://github.com/vllm-project/vllm/pull/43375) adds a `sharded_rdt` weight-transfer backend where workers pull only the shards they need, instead of pushing whole parameters.
- **Quantization dispatch cleanup**: [#52958](https://github.com/vllm-project/vllm/pull/52958) and [#51808](https://github.com/vllm-project/vllm/pull/51808) continue the move to `QuantKey`-based dispatch and activation-quant overrides for online quantization.
- Batch-invariant work remains an active tracker for deterministic inference/SDPA optimization ([#27433](https://github.com/vllm-project/vllm/issues/27433)).

## Stability & Regressions

Ranked by potential impact, all updated within the last 24 hours:

- **Critical — GLM-5.1 + MTP worker hang**: V1 engine + MTP + TP=8 + GLM-5.1-FP8 hangs under sustained traffic; scheduler stops advancing and `sample_tokens` RPC times out into `EngineDeadError` ([#40926](https://github.com/vllm-project/vllm/issues/40926)). No fix PR listed yet.
- **Critical — Prefill misdispatched into spec-decode CUDA graph**: when `prompt_len == 1 + num_speculative_tokens`, prefill can be misclassified as uniform decode, causing silent GDN state loss and garbage output ([#53051](https://github.com/vllm-project/vllm/issues/53051)). Related fixes: [#52000](https://github.com/vllm-project/vllm/pull/52000), [#50488](https://github.com/vllm-project/vllm/pull/50488).
- **High — Hybrid-SWA prefix cache collapse**: cross-request prefix reuse drops to zero for all requests at ~25% pool occupancy with Gemma-4-31B under round-robin multi-session load ([#48435](https://github.com/vllm-project/vllm/issues/48435)). Related prefix-cache restoration work is in [#52244](https://github.com/vllm-project/vllm/pull/52244).
- **Medium — SM120 + older CUDA toolkit**: FlashInfer JIT failures break engine init in sampler, fused-MoE, and FP8-KV paths instead of falling back ([#50705](https://github.com/vllm-project/vllm/issues/50705)).
- **Medium — DeepSeek-V4 weight loading**: `UnboundLocalError: 'name_mapped'` occurs when expert mapping has no match ([#42769](https://github.com/vllm-project/vllm/issues/42769)).
- **Medium — Gemma4 streaming contract bug**: `content` arrives empty while `reasoning` holds the full model output when the reasoning channel is left open ([#49717](https://github.com/vllm-project/vllm/issues/49717)).
- **Medium — XPU multi-GPU IPC failure**: dual Arc B50 (Battlemage) TP=2 crashes with `zeMemOpenIpcHandle INVALID_ARGUMENT` ([#48953](https://github.com/vllm-project/vllm/issues/48953)).
- **Medium — XPU offloading with spec decode**: `OffloadingConnector` stores but never serves when MTP/EAGLE speculative decoding is enabled ([#52735](https://github.com/vllm-project/vllm/issues/52735)).
- **Medium — DeepSeek-V4-Flash on L20**: engine fails with `auto_functionalized was not removed` during worker init ([#42949](https://github.com/vllm-project/vllm/issues/42949)).
- **Low — Nightly install resolves to CUDA 13 wheel**: cu129 pre-release versions sort below the PyPI stable CUDA 13 build under PEP 440 ([#42338](https://github.com/vllm-project/vllm/issues/42338)).
- **KV offload fixes in flight**: [#53330](https://github.com/vllm-project/vllm/pull/53330) guards P2P supply against consumer demand ([#53083](https://github.com/vllm-project/vllm/issues/53083)); [#53329](https://github.com/vllm-project/vllm/pull/53329) fixes dropped in-flight primary KV keys ([#53062](https://github.com/vllm-project/vllm/issues/53062)); [#53240](https://github.com/vllm-project/vllm/pull/53240) fixes DeepSeek-V4 `--enable-return-routed-experts` KV-group selection.

## What This Means for Application Developers

- **DeepSeek-V4-Flash on A100/A800 is still not viable.** If your fleet is Ampere-based, track [#50576](https://github.com/vllm-project/vllm/issues/50576) and [#40851](https://github.com/vllm-project/vllm/issues/40851) before investing in DeepSeek-V4-Flash deployment.
- **Speculative decoding with hybrid/GDN/Mamba models remains risky.** Multiple correctness fixes are unmerged; pin vLLM to a known-good commit and test sustained traffic carefully if using MTP/DFlash/DSpark.
- **Qwen3-VL users doing dummy-image dry runs** should watch [#53225](https://github.com/vllm-project/vllm/pull/53225); truncated dummy inputs can produce misleading validation results.
- **Cohere API users**: ChatV2 render support is coming in [#53219](https://github.com/vllm-project/vllm/pull/53219), useful for prompt rendering parity before serving.
- **Gemma4 streaming consumers** relying on `reasoning_content` / `content` separation should verify behavior against [#49717](https://github.com/vllm-project/vllm/issues/49717), especially with open reasoning channels.
- **Experimental paths to avoid in production for now**: the Rust frontend ([#44280](https://github.com/vllm-project/vllm/issues/44280)) and the proposed agentic inference API ([#52567](https://github.com/vllm-project/vllm/issues/52567)). Both are promising but not yet feature-complete or stable.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest — 2026-08-22

## Today's Highlights
SGLang work this cycle is heavily focused on distributed/agentic KV-cache reliability: the HiCache consistency plan (#22607), distributed KVCache roadmap for agentic workloads (#21846), and a weight-cache daemon for fast engine recovery (#33522) all saw active updates. On the serving side, DeepSeek V4 FP4 checkpoints are being defaulted to the FlashInfer MXFP4 MoE runner (#35919), while several correctness bugs were reported around stale installs, speculative decoding, and Qwen multimodal handling. No new release was published in the last 24 hours.

## Releases & Breaking Changes
- No new SGLang release or tag was published in the last 24h.
- Package/install caveat: `uv pip install sglang` with `uv < 0.12` silently installs SGLang `0.5.9` instead of the latest version, which can cause silently wrong outputs; the docs-side fix is in [#35920](https://github.com/sgl-project/sglang/pull/35920). See [#35912](https://github.com/sgl-project/sglang/issues/35912).

## New Model & Hardware Support
- **DeepSeek V4 FP4 checkpoints** now default to the `flashinfer_mxfp4` MoE runner on supported NVIDIA GPUs when the backend is left at `auto` — [#35919](https://github.com/sgl-project/sglang/pull/35919).
- **MiniCPM-SALA** native serving support is in progress — [#30360](https://github.com/sgl-project/sglang/pull/30360).
- **Cosmos3 transfer capability** for diffusion models is under development — [#34747](https://github.com/sgl-project/sglang/pull/34747).
- **ROCm 7.14** release support for `gfx942`/`gfx950` is being added — [#35319](https://github.com/sgl-project/sglang/pull/35319).
- **Kimi-K3 + MoonEP** production integration roadmap was filed, tracking static-shape dispatch/combine and remote expert prefetch — [#35783](https://github.com/sgl-project/sglang/issues/35783).
- **Qwen3.8-27B NVFP4 on RTX 5090** exists in the cookbook, but users report OOM at decode-graph capture and a 6x `torch.compile` regression — [#35777](https://github.com/sgl-project/sglang/issues/35777).
- **Qwen3.5 on XPU** with GDN + speculative decoding hits a `causal_conv1d_update_xpu()` keyword error — [#34720](https://github.com/sgl-project/sglang/issues/34720).

## Performance & Optimization
- **Fast engine recovery / weight cache daemon**: per-rank daemon serves post-quantized weights over CUDA IPC, cutting Qwen3-235B FP8 weight load from ~306–327s to <1s — [#33522](https://github.com/sgl-project/sglang/issues/33522).
- **EAGLE topk==1 on ROCm**: proposed skipping the full-vocab softmax in the draft loop when `topk_p` is not consumed — [#35872](https://github.com/sgl-project/sglang/pull/35872).
- **Qwen shared expert overlap**: optional overlap of Qwen shared-expert compute with DeepEP routed experts — [#34938](https://github.com/sgl-project/sglang/pull/34938).
- **SANA-Video fused interleaved RoPE**: new paired BF16 JIT CUDA kernel with eager fallback and bit-exact verification — [#35695](https://github.com/sgl-project/sglang/pull/35695).
- **Semantic KV cache reuse**: pluggable fuzzy-match radix backend for reuse across paraphrased/reordered prompts — [#31057](https://github.com/sgl-project/sglang/pull/31057).
- **HiCache NIXL backend** roadmap includes hugepage improvements and NIXL-based features/performance work — [#26693](https://github.com/sgl-project/sglang/issues/26693).
- **Distributed KVCache system for agentic workloads** and a lightweight session-aware PD router remain active roadmap items — [#21846](https://github.com/sgl-project/sglang/issues/21846), [#25760](https://github.com/sgl-project/sglang/issues/25760).
- **Hybrid-SSM DP attention** fixes for low-concurrency failures are in flight — [#34535](https://github.com/sgl-project/sglang/pull/34535).

## Stability & Regressions
Ranked by severity:

- **High — Scheduler collapse under DP Attention + chunked prefill**: `PrefillDelayer` can enter a persistent mixed-state feedback loop and collapse prefill progress — [#35241](https://github.com/sgl-project/sglang/issues/35241).
- **High — Silent stale install**: `uv < 0.12` installs 0.5.9, producing incorrect model outputs without errors — [#35912](https://github.com/sgl-project/sglang/issues/35912). Docs fix: [#35920](https://github.com/sgl-project/sglang/pull/35920).
- **High — Kimi-K3 long-context [PAD] storms + DSPARK NaN asserts**: logits can be NaN-contaminated; the root-cause fix #32477 is not in any release — [#32968](https://github.com/sgl-project/sglang/issues/32968).
- **High — Speculative sampler RNG edge case**: target-only speculative sampler can accept a zero-probability draft at an RNG boundary — [#35771](https://github.com/sgl-project/sglang/issues/35771).
- **High — Qwen3.6/Qwen3.8 multimodal mRoPE**: positions are passed to a 1D fused QK RMSNorm+RoPE kernel — [#35345](https://github.com/sgl-project/sglang/issues/35345).
- **Medium — `move_logprobs_to_cpu` crash**: `AttributeError: 'list' object has no attribute 'tolist'` — [#35705](https://github.com/sgl-project/sglang/issues/35705).
- **Medium — Anthropic endpoint tool_reference**: `tool_reference` parts inside `tool_result` can break chat templates without deferred-reference support — [#35692](https://github.com/sgl-project/sglang/issues/35692).
- **Medium — Qwen3-VL fine-grained grounding**: vision features diverge from Transformers/vLLM in v0.5.17 — [#35772](https://github.com/sgl-project/sglang/issues/35772).
- **Medium — NVFP4 RTX 5090 cookbook**: `--mem-fraction-sta` recommendation OOMs at decode-graph capture; `torch.compile` is a 6x regression — [#35777](https://github.com/sgl-project/sglang/issues/35777).
- **Medium — MiniMax-M2 CPU inference** fails when processing requests — [#35779](https://github.com/sgl-project/sglang/issues/35779).
- **Medium — EncoderScheduler timeout race**: timed-out requests are still dispatched to tensor-parallel workers/encoder — [#35891](https://github.com/sgl-project/sglang/issues/35891).
- **Fix PRs in flight**: Dspark/Dflash state divergence across TP ranks [#33614](https://github.com/sgl-project/sglang/pull/33614); stale GLM MoE FP32 gate cache on runtime weight updates [#35883](https://github.com/sgl-project/sglang/pull/35883); FP32 LM head ROCm failure guard [#34681](https://github.com/sgl-project/sglang/pull/34681).
- **CI health**: 3 broken and 11 flaky tests on `main`, with CI maintenance mode available when unhealthy — [#17050](https://github.com/sgl-project/sglang/issues/17050), [#21065](https://github.com/sgl-project/sglang/issues/21065).

## What This Means for Application Developers
- **Verify your SGLang install**: if installing via `uv`, confirm the actual SGLang version and upgrade to `uv >= 0.12`; otherwise you may be silently served by a 6-month-old SGLang with incorrect behavior.
- **Agent workloads should track the HiCache/KVCache roadmap**: distributed KV cache, session-aware routing, and fast weight-cache recovery are still evolving; expect breaking changes in scheduler/cache internals.
- **Be cautious with speculative decoding on non-reference paths**: ROCm EAGLE, XPU GDN, and target-only sampler edge cases are still being hardened; validate acceptance rates and output quality in production.
- **Qwen-multimodal and mRoPE users should pin to a version containing the relevant fixes** and compare against reference implementations; current releases may still diverge on fine-grained vision tasks.
- **No release landed in the last 24h**, so any fixes merged at HEAD are not yet in a stable tag. For production, pin to a known-good version and track the CI health issue for regression signals.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp Digest — 2026-08-22

## Today's Highlights

llama.cpp shipped the **v0.2.0** release cut, with nightly **b10566** carrying the matching tag. The latest builds include multi-GPU tensor split support for LFM2/LFM2MOE, a new `--mmproj-device` option for multimodal projector placement, and a wave of Metal/Vulkan correctness fixes. Meanwhile, several high-severity CUDA and ROCm issues remain open, including a CUDA kernel watchdog stall and a `cublasSgemm` crash under speculative decoding with KV-cache saturation.

## Releases & Breaking Changes

- **[v0.2.0](https://github.com/ggml-org/llama.cpp/releases/tag/v0.2.0)** — First v0.2.0 release; nightly tag **b10566** ([release](https://github.com/ggml-org/llama.cpp/releases/tag/b10566)). No explicit breaking migration notes beyond the versioning bump.
- **[b10568](https://github.com/ggml-org/llama.cpp/releases/tag/b10568)** — Uses `ggml_rope_set_offset()` in model loading ([#27382](https://github.com/ggml-org/llama.cpp/pull/27382)).
- **[b10549](https://github.com/ggml-org/llama.cpp/releases/tag/b10549)** — Enables tensor split for LFM2/LFM2MOE ([#26993](https://github.com/ggml-org/llama.cpp/pull/26993)).
- **[b10541](https://github.com/ggml-org/llama.cpp/releases/tag/b10541)** — Adds `--mmproj-device` and backwards-compatible `MTMD_BACKEND_DEVICE` env var ([#23255](https://github.com/ggml-org/llama.cpp/pull/23255)).
- **[b10539](https://github.com/ggml-org/llama.cpp/releases/tag/b10539)** — Vulkan FA MMQ now uses FP32 for Q quantization calculations ([#27413](https://github.com/ggml-org/llama.cpp/pull/27413)).
- **[b10538](https://github.com/ggml-org/llama.cpp/releases/tag/b10538)** — Metal dequantizes KV cache only for large batches ([#27438](https://github.com/ggml-org/llama.cpp/pull/27438)).
- **[b10545](https://github.com/ggml-org/llama.cpp/releases/tag/b10545)** — Metal tensor API mat-mat kernel clamps K extent when K is not a multiple of 32 ([#27450](https://github.com/ggml-org/llama.cpp/pull/27450)).
- **[b10537](https://github.com/ggml-org/llama.cpp/releases/tag/b10537)** — Windows CI now uses LLVM's OpenMP instead of MSVC debug non-redistributable OpenMP ([#26678](https://github.com/ggml-org/llama.cpp/pull/26678)).

## New Model & Hardware Support

- **LFM2/LFM2MOE tensor split** — Multi-GPU tensor parallelism is now available for these architectures ([#26993](https://github.com/ggml-org/llama.cpp/pull/26993)).
- **Multimodal projector device offload** — `--mmproj-device` allows the mmproj vision encoder to be pinned to a different backend/device than the main model ([#23255](https://github.com/ggml-org/llama.cpp/pull/23255)).
- **DFlash2 speculative decoding** — Proposed support for local convolution + candidate selector ([#27342](https://github.com/ggml-org/llama.cpp/pull/27342)).
- **Zamba2 architecture** — Open PR adding Zamba2 model support ([#21412](https://github.com/ggml-org/llama.cpp/pull/21412)).
- **Metal 4.0 tensor API** — Open PR requesting Metal 4.0 language version for tensor-enabled hardware ([#27461](https://github.com/ggml-org/llama.cpp/pull/27461)).
- **HIP packed MMVQ extension** — Draft PR extending packed Q8_1 ×4 activation to Q5_K/Q6_K models ([#23685](https://github.com/ggml-org/llama.cpp/pull/23685)).

## Performance & Optimization

- **Vulkan FA MMQ FP32 fix** — Avoids denormal/overflow issues in Q quantization calculations; correctness fix with a direct perf impact on affected GPUs ([#27413](https://github.com/ggml-org/llama.cpp/pull/27413)).
- **Metal KV cache dequant batching** — Only dequantize KV cache for large batches, reducing overhead on small decode workloads ([#27438](https://github.com/ggml-org/llama.cpp/pull/27438)).
- **RoPE offset optimization** — `ggml_rope_set_offset()` applied in model loading ([#27382](https://github.com/ggml-org/llama.cpp/pull/27382)) and extended to MTMD ([#27521](https://github.com/ggml-org/llama.cpp/pull/27521)).
- **Vulkan MoE shader hoisting** — Row IDs and expert counts are hoisted in `MUL_MAT_ID` shaders, improving routed MoE prompt processing ([#26686](https://github.com/ggml-org/llama.cpp/pull/26686)).
- **Mamba2 GEMM dispatch** — In/out projections flattened to dispatch GEMM instead of GEMV; authors observed GEMV dominating ~40% of GPU time at `npl=32` on Nemotron 3 Nano ([#27513](https://github.com/ggml-org/llama.cpp/pull/27513)).
- **Adaptive MTP draft depth** — Open PR adding `--spec-type draft-mtp-adaptive` with `--spec-draft-n-max` ([#27210](https://github.com/ggml-org/llama.cpp/pull/27210)).

## Stability & Regressions

High severity:

- **CUDA kernel stall / watchdog kill** on NVIDIA RTX Pro 6000 Blackwell during execution — open, help wanted ([#27102](https://github.com/ggml-org/llama.cpp/issues/27102)).
- **llama-server hard crash** (`cublasSgemm INVALID_VALUE`) with `--spec-type draft-mtp` under KV-cache saturation — open ([#26558](https://github.com/ggml-org/llama.cpp/issues/26558)).
- **DeepSeek V4 garbled output** on Strix Halo with ROCm — open ([#25436](https://github.com/ggml-org/llama.cpp/issues/25436)).
- **GLM-5.2 multi-node RPC crash** on CUDA — `invalid data ptr` / `graph_compute failed` during distributed inference — open ([#26583](https://github.com/ggml-org/llama.cpp/issues/26583)).

Moderate severity:

- **Vulkan performance drop** in recent builds on RX 6600 — open ([#24066](https://github.com/ggml-org/llama.cpp/issues/24066)).
- **SYCL garbage output on second prompt** on Intel Arc Pro B60 — open ([#26845](https://github.com/ggml-org/llama.cpp/issues/26845)).
- **Gemma MTP draft model load failure** — `invalid vector subscript` regression between b9553 and b9702/b9717 — open ([#24795](https://github.com/ggml-org/llama.cpp/issues/24795)).
- **Qwen3.6-35B-A3B image merging** — Consecutive images incorrectly merged into super-frames by `llama-server` — open ([#24303](https://github.com/ggml-org/llama.cpp/issues/24303)).
- **Qwen3.8-27B decode throughput degradation** ~30% within a single generation was reported and closed as `bug-unconfirmed` ([#27444](https://github.com/ggml-org/llama.cpp/issues/27444)).

Fixes in flight:

- **Server abort on unknown `--tools` + load-on-startup** fixed by joining model threads in destructor ([#27421](https://github.com/ggml-org/llama.cpp/pull/27421)).
- **Resumable stream cancellation** during first-result wait fixed by observing `res->should_stop()` ([#27522](https://github.com/ggml-org/llama.cpp/pull/27522)).

## What This Means for Application Developers

- **Pin to v0.2.0** for a stable baseline; if you need the newest fixes, track nightly **b10566** or later.
- **Multimodal deployments** can now use `--mmproj-device` to place the projector on a separate GPU/backend, reducing VRAM contention on the main model.
- **Multi-GPU users with LFM2/LFM2MOE** should re-test tensor-split configurations after [#26993](https://github.com/ggml-org/llama.cpp/pull/26993).
- **Vulkan users** should update to at least b10539 to get the FA MMQ FP32 quantization fix, but benchmark carefully because a performance regression is still tracked in [#24066](https://github.com/ggml-org/llama.cpp/issues/24066).
- **Speculative decoding users** running `draft-mtp` under high KV-cache utilization should watch for the crash in [#26558](https://github.com/ggml-org/llama.cpp/issues/26558); the adaptive MTP PR ([#27210](https://github.com/ggml-org/llama.cpp/pull/27210)) may be worth testing once available.
- **Resumable streaming / agent workloads** should pick up the cancellation fix from [#27522](https://github.com/ggml-org/llama.cpp/pull/27522) to avoid hanging requests when clients disconnect during prefill.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Digest — 2026-08-22

**Today’s Highlights**

- Ollama cut **v0.33.0-rc0** with MLX engine fixes for non-macOS hosts ([#17898](https://github.com/ollama/ollama/pull/17898), [#17886](https://github.com/ollama/ollama/pull/17886)) and app-side Claude Desktop model management ([#17915](https://github.com/ollama/ollama/pull/17915), [#17900](https://github.com/ollama/ollama/pull/17900)).
- The main reliability story is around agent workloads: a regression in 0.32.11–0.32.15 can make long generations never stop ([#17910](https://github.com/ollama/ollama/issues/17910)), embeddings can silently return all-zero vectors under load ([#17878](https://github.com/ollama/ollama/issues/17878)), and MLX still lacks prompt/prefix caching between agent steps ([#17829](https://github.com/ollama/ollama/issues/17829)).
- Targeted fixes are in flight for MLX prefix-cache restore across cancelled prefills ([#17901](https://github.com/ollama/ollama/pull/17901)) and KV-cache preservation for Claude Code ([#17918](https://github.com/ollama/ollama/pull/17918)).

## Releases & Breaking Changes

- **v0.33.0-rc0** — MLX engine updates ([#17886](https://github.com/ollama/ollama/pull/17886)), Linux/Windows MLX assumption fixes ([#17898](https://github.com/ollama/ollama/pull/17898)), lint fixes ([#17897](https://github.com/ollama/ollama/pull/17897)), and app support for Claude Desktop.
- No explicit breaking changes or migration notes were included in the release notes.

## New Model & Hardware Support

- **MLX DFlash2 support** — [#17865](https://github.com/ollama/ollama/pull/17865) adds native MLX loading and inference for `DFlash2DraftModel` checkpoints, including dynamic short convolution, parallel path selection, and bounded rotating draft KV caches.
- **Llama 4 tokenizer fix** — [#17791](https://github.com/ollama/ollama/pull/17791) and [#17699](https://github.com/ollama/ollama/pull/17699) set `tokenizer.ggml.pre = "llama4"` so converted Llama 4 GGUFs split tokens consistently with the reference tokenizer.
- **Vulkan / Qwen3.5** — [#17903](https://github.com/ollama/ollama/issues/17903) (closed) reported Qwen3.5 load failures on Vulkan in v0.32.14; verify this path before relying on it.

## Performance & Optimization

- **MLX prefix caching remains a gap** — [#17829](https://github.com/ollama/ollama/issues/17829) reports that each multi-step agent request re-prefills the full ~20–30K-token prompt on MLX. [#17901](https://github.com/ollama/ollama/pull/17901) makes prefix-cache restore points survive cancelled prefills, which should help agent timeouts.
- **Claude Code KV-cache preservation** — [#17918](https://github.com/ollama/ollama/pull/17918) disables the “tokens left” system message that Claude Code injects after every tool result; Ollama moves system messages to the front, which was breaking the KV cache per request.
- **Log overhead** — [#17913](https://github.com/ollama/ollama/pull/17913) filters per-request llama-server logs unless debug is enabled. This addresses journald flooding on Linux and a macOS log file that reached 387 MB.
- **CPU scheduling problems** — [#2929](https://github.com/ollama/ollama/issues/2929) (NUMA, half cores used) remains open. [#17916](https://github.com/ollama/ollama/issues/17916) reports `n_threads` ignoring cgroup CPU quota/cpuset, causing roughly **45x throughput collapse** in CPU-limited containers.
- **CPU usage regression** — [#17833](https://github.com/ollama/ollama/issues/17833): v0.32.14 spikes CPU to 50–80% even when the model fully fits in VRAM.

## Stability & Regressions

### Critical, no fix PR yet

- **Long completions never stop** — [#17910](https://github.com/ollama/ollama/issues/17910): regression introduced somewhere between 0.32.9 and 0.32.11, still present in 0.32.15. Generation runs past natural end until killed.
- **Embeddings return all-zero vectors** — [#17878](https://github.com/ollama/ollama/issues/17878): HTTP 200, correct dimensionality, plausible token counts, but zero vectors under sustained load, with no log signal.
- **cgroup CPU limits ignored** — [#17916](https://github.com/ollama/ollama/issues/17916): `n_threads` is picked from host core count, ignoring cgroup CPU quota/cpuset, causing massive throughput degradation.

### High impact

- **Windows UI loop blocks server** — [#17876](https://github.com/ollama/ollama/issues/17876): `ollama app.exe` enters an infinite `/api/v1/settings` GET↔POST loop on startup, blocking readiness and other UI requests.
- **MLX full re-prefill per agent step** — [#17829](https://github.com/ollama/ollama/issues/17829): fix PR [#17901](https://github.com/ollama/ollama/pull/17901) is open.
- **Anthropic `xhigh` effort dropped** — [#17906](https://github.com/ollama/ollama/issues/17906): `/v1/messages` maps `xhigh` to `high`, breaking Qwen3.8 chat templates. Fix PR [#17917](https://github.com/ollama/ollama/pull/17917) is open.
- **MLX vision crash on large images** — [#17804](https://github.com/ollama/ollama/issues/17804) (closed): a 24.5MP input requested ~125 GB Metal buffer on a 48 GB Mac.
- **`think:false` intermittently ignored** — [#17911](https://github.com/ollama/ollama/issues/17911) (closed): qwen3.8 MLX sometimes streams reasoning despite `think:false`.

### Correctness and behavioral issues

- **Model identity confusion** — [#17904](https://github.com/ollama/ollama/issues/17904): `ornith-1.5:35b` answers that it is Claude.
- **Cloud thinking loop** — [#17892](https://github.com/ollama/ollama/issues/17892): `deepseek-v4-flash:0731` on Ollama Cloud repeated the same thinking block 221 times and produced zero usable output.
- **Inconsistent `num_ctx` handling** — [#17889](https://github.com/ollama/ollama/issues/17889): same server, same default config; some models return HTTP 400 naming 4096, others accept longer prompts.
- **`num_ctx` silent truncation** — [#17427](https://github.com/ollama/ollama/issues/17427) (closed): effective prompt window was `num_ctx/2 + 2`, not the configured value.
- **hf.co model pull failures** — [#15447](https://github.com/ollama/ollama/issues/15447): download succeeds but registration fails with HTTP 400 empty body; [#17484](https://github.com/ollama/ollama/issues/17484) reports `context deadline exceeded` on similar pulls.

### Fixes in flight

- **Qwen3-Coder parser** — [#17914](https://github.com/ollama/ollama/pull/17914) tolerates a dropped closing tag and stops rewriting parameter values.
- **Gemma4 tool-call parser** — [#17888](https://github.com/ollama/ollama/pull/17888) accepts `=` separator in tool-call arguments.
- **Stream end detection** — [#17846](https://github.com/ollama/ollama/pull/17846) returns an error when generation ends without a final response.
- **CORS preflight** — [#17890](https://github.com/ollama/ollama/pull/17890) returns 204 for OPTIONS on loopback/private hosts.
- **Installer zstd handling** — [#17891](https://github.com/ollama/ollama/pull/17891) auto-installs `zstd` when extracting `.tar.zst`.
- **Env hygiene** — [#17909](https://github.com/ollama/ollama/pull/17909) strips stray `LLAMA_API_KEY` from the llama-server subprocess environment.

## What This Means for Application Developers

- **MLX agent loops**: expect large TTFT reductions once [#17901](https://github.com/ollama/ollama/pull/17901) and [#17918](https://github.com/ollama/ollama/pull/17918) land. Until then, account for full prompt re-prefill on every request and set generous cancellation/timeout handling.
- **Embedding pipelines**: do not trust HTTP 200 alone. Add sanity checks for zero vectors / zero norms in RAG or batch embedding paths, especially under sustained load.
- **Containerized CPU deployments**: explicitly pin thread counts or set `OMP_NUM_THREADS`/`n_threads` until `n_threads` becomes cgroup-aware.
- **Anthropic-compatible clients**: `xhigh` reasoning effort should be preserved once [#17917](https://github.com/ollama/ollama/pull/17917) merges. Also note [#7125](https://github.com/ollama/ollama/issues/7125) remains open for `max_completion_tokens` support in the OpenAI compatibility layer.
- **Claude Desktop / `ollama launch claude` integration is moving fast**: watch for KV-cache preservation ([#17918](https://github.com/ollama/ollama/pull/17918)) and context-window suffix handling ([#17908](https://github.com/ollama/ollama/pull/17908)).

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

## LiteLLM Digest — 2026-08-22

### 1. Today's Highlights
The 24h window is dominated by two themes: **MCP reliability** (UI server creation failures, OAuth2 client_credentials credentials never delivered upstream, DCR-bridge credential drops, and a suspected context-state leak in `_mcp_active_toolset_id` under stream interruption) and **Azure cost-map accuracy** (GPT-5.6 terra/luna entries carrying OpenAI's post-cut prices instead of Azure's meters, plus missing cache cost fields). On the feature side, notable PRs landed for tag-scoped rate limits ([#36541](https://github.com/BerriAI/litellm/pull/36541)), per-group reasoning-effort support incl. GPT-5.6 max/ultra ([#37897](https://github.com/BerriAI/litellm/pull/37897)), and OTEL LLM Call spans for non-chat modalities ([#37752](https://github.com/BerriAI/litellm/pull/37752)).

### 2. Releases & Breaking Changes
- **v1.99.0-dev.2** — dev release; no API/config changes called out. All LiteLLM Docker images are now signed with [cosign](https://docs.sigstore.dev/cosign/overview/) using the key introduced in commit `0112e53`; releases are verifiable against that signature. ([release](https://github.com/BerriAI/litellm/releases/tag/v1.99.0-dev.2))

### 3. New Model & Hardware Support
No new model/backend support landed in this window. Related in-flight work:
- Per-group `supported_reasoning_efforts` (max/ultra levels) for GPT-5.6-class models: [#37897](https://github.com/BerriAI/litellm/pull/37897)
- DeepSeek V4 `reasoning_effort` (`high`/`max`) is still stripped to `thinking: {"type": "enabled"}` upstream: [#27439](https://github.com/BerriAI/litellm/issues/27439)
- Cost-map gaps for recently added Azure models: `azure/gpt-5.6*` missing `cache_creation_input_token_cost` ([#37631](https://github.com/BerriAI/litellm/issues/37631)), `azure/us|eu/gpt-4o-2024-11-20` missing `cache_read_input_token_cost` ([#37823](https://github.com/BerriAI/litellm/issues/37823))

### 4. Performance & Optimization
- **Health-check memory/DB storm (critical at scale):** with `use_shared_health_check: true` and multiple workers, background health checks load the entire unbounded `LiteLLM_HealthCheckTable` into every worker each cycle (default 15 min), causing near-OOM and DB storms. No fix PR yet. ([#37611](https://github.com/BerriAI/litellm/issues/37611))
- **Admin UI slowness in 1.82.x** remains open ("extremely slow" load/response): ([#23005](https://github.com/BerriAI/litellm/issues/23005))
- **Redis error-log hygiene:** PR drops full cached responses (e.g., complete completions) from ERROR logs on Redis write failures, reducing volume and PII exposure: ([#37892](https://github.com/BerriAI/litellm/pull/37892))
- **Migration downtime guard:** CI gate bans row-rewriting DML (`UPDATE`/`DELETE`/`MERGE`) in Prisma migrations, preventing unbatched rewrites at proxy boot: ([#37899](https://github.com/BerriAI/litellm/pull/37899))

### 5. Stability & Regressions
Ranked by severity:
1. **MCP context-state leakage (high):** `_mcp_active_toolset_id` may leak across requests when an async stream is interrupted in MCP routing (found via static analysis). No fix yet. ([#30416](https://github.com/BerriAI/litellm/issues/30416))
2. **Bedrock Converse streaming regression:** trailing empty chunk emitted after `finish_reason` (regression in v1.94.0 / PR #32255); can break strict SSE consumers. No fix PR yet. ([#36767](https://github.com/BerriAI/litellm/issues/36767))
3. **Responses API + Anthropic tool-call streaming:** multi-step tool calls emit `text-delta` referencing an unregistered `chatcmpl-<id>`, breaking AI SDK text tracking. ([#27671](https://github.com/BerriAI/litellm/issues/27671))
4. **Azure cost-map correctness:** `azure/gpt-5.6-terra/luna` (+ `azure/us/`, `azure/eu/` siblings) carry OpenAI's post-cut prices, not Azure's published meters ([#36192](https://github.com/BerriAI/litellm/issues/36192)); related missing cache-cost fields in [#37823](https://github.com/BerriAI/litellm/issues/37823) and [#37631](https://github.com/BerriAI/litellm/issues/37631).
5. **MCP auth broken for OAuth2/DCR:** `client_credentials` MCP servers never receive `client_id`/`client_secret` at runtime ([#37222](https://github.com/BerriAI/litellm/issues/37222)); DCR bridge discards the unsealed upstream credential on tool calls ([#36358](https://github.com/BerriAI/litellm/issues/36358)).
6. **Managed-files proxy 500 (closed):** `client.files.list()` failed with "api_key client option must be set". ([#35362](https://github.com/BerriAI/litellm/issues/35362))
7. **`cache_control_injection_points` regression:** HTTP 500 because the setting wrongly invokes Dotprompt prompt management and requires `prompt_id`. ([#37469](https://github.com/BerriAI/litellm/issues/37469))
8. **Custom MCP server creation in UI (closed):** "Error creating mcp server: Could not find…" ([#23869](https://github.com/BerriAI/litellm/issues/23869))
9. **Minor:** 429 bodies leak full SHA-256 token hashes ([#27884](https://github.com/BerriAI/litellm/issues/27884), closed); `/mcp` misinterprets `SERVER_ROOT_PATH` as a scoped server name ([#32142](https://github.com/BerriAI/litellm/issues/32142)); Agents page hits 422 from `/key/list` size limit ([#28585](https://github.com/BerriAI/litellm/issues/28585)); `token_counter` raises on OpenAI `video_url` blocks ([#28071](https://github.com/BerriAI/litellm/issues/28071)).

Fix PRs in flight: exact-once provider resolution on `/v1/messages` ([#37757](https://github.com/BerriAI/litellm/pull/37757)), gating sampling params on `/v1/messages` ([#37868](https://github.com/BerriAI/litellm/pull/37868)), merging model-level guardrails into `litellm_metadata` ([#37238](https://github.com/BerriAI/litellm/pull/37238)), Codex session grouping ([#37895](https://github.com/BerriAI/litellm/pull/37895)), MCP `root_path` stripping ([#35576](https://github.com/BerriAI/litellm/pull/35576), closed), uvicorn `color_message` redaction fix ([#37122](https://github.com/BerriAI/litellm/pull/37122), closed).

### 6. What This Means for Application Developers
- **If you proxy Anthropic/Codex traffic:** session-grouping and provider-id resolution fixes are close; streaming `chatcmpl-<id> not found` errors in multi-step tool-call loops are a known LiteLLM bug, not a client fault.
- **Azure customers:** do not trust spend/cache-cost figures for GPT-5.6 data-zone models until [#36192](https://github.com/BerriAI/litellm/issues/36192) / [#37631](https://github.com/BerriAI/litellm/issues/37631) / [#37823](https://github.com/BerriAI/litellm/issues/37823) land — reconcile against Azure meters manually.
- **MCP-based agents:** OAuth2 client_credentials and DCR-bridge flows are unreliable right now; pin a known-good version and prefer static-token MCP servers for production.
- **Streaming consumers on Bedrock Converse:** tolerate/filter a trailing empty chunk after `finish_reason`.
- **Watch for incoming features:** tag-scoped token/request/dollar/concurrency rate limits ([#36541](https://github.com/BerriAI/litellm/pull/36541)) will be useful for multi-tenant agent workloads; time-based off-peak pricing ([#31725](https://github.com/BerriAI/litellm/pull/31725)) will improve cost accuracy for discounted daily windows; per-request auto-router savings will reach logging callbacks ([#37894](https://github.com/BerriAI/litellm/pull/37894), closed).

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth Digest — 2026-08-22

## 1. Today's Highlights

Unsloth Desktop v0.1.801-beta is at the center of a regression cluster: MLX model loading broke on Apple Silicon (#9466), the Linux AppImage freezes on the Model Hub tab (#9453) or crashes WebKitWebProcess via a Skia COLRv1 font assert (#9480), and several install paths fail (#9479, #9467). A font-crash fix PR exists and a venv-repair PR landed, but settings persistence is still broken with a 400 on `PUT /api/chat/settings` (#9500). On the feature side, the strongest product signal is context management — three separate requests for rolling/auto-compaction (#7472, #8504, #9401) — while the PR pipeline is advancing GRPO reinforcement learning (#9310), portable Agent Skills (#9355), and multi-image edit pipelines (#9205).

## 2. Releases & Breaking Changes

No releases in the last 24h (Desktop v0.1.801-beta is the current version implicated in several regressions below).

- **Anthropic SDK 1.x migration tracked** (#9443): the inference smoke workflows are pinned to `anthropic<1.0` because 1.0.0 removed `temperature`, `top_p`, and `top_k` from `messages.create()`. CI is unblocked via pin; migration to 1.x is the follow-up. Worth noting for anyone pinning the SDK in agent stacks.

## 3. New Model & Hardware Support

- **ROCm attention kernels opened to library users** ([PR #8821](https://github.com/unslothai/unsloth/pull/8821)): the AOTriton flash/mem-efficient SDPA kernels on ROCm builds were hidden behind `TORCH_ROCM_AOTRITON_ENABLE_EXPERIMENTAL` (read once at C++ extension load). With the gate shut, SDPA fell back to MATH (slow). This opens the sub-quadratic backends for plain `unsloth` installs, not just Studio.
- **GRPO / RL as a training method** ([PR #9310](https://github.com/unslothai/unsloth/pull/9310)): Studio's Train page previously only built `SFTTrainer`; this adds reinforcement learning to the fine-tuning workflow.
- **Multi-image Edit for the Image Generator** ([PR #9205](https://github.com/unslothai/unsloth/pull/9205)): supports `QwenImageEditPlusPipeline` and `FluxKontextPipeline` native multi-image lists in Edit mode.
- **Portable Agent Skills** ([PR #9355](https://github.com/unslothai/unsloth/pull/9355)): import a skill from ZIP/repository bundles with metadata validation, path sanitization, and collision checks — directly relevant for agent developers.
- **AMD GPU reporting fixes** ([PR #9498](https://github.com/unslothai/unsloth/pull/9498), [PR #8606](https://github.com/unslothai/unsloth/pull/8606)): `rocminfo` was naming the CPU agent as the GPU (e.g., "AMD RYZEN AI MAX+ 395" listed as the GPU); Studio now reconciles reported GPU with the actual installed PyTorch wheel.

## 4. Performance & Optimization

- **Vulkan/UMA VRAM accounting for Strix Halo** ([PR #9461](https://github.com/unslothai/unsloth/pull/9461), fixes [#9454](https://github.com/unslothai/unsloth/issues/9454)): a Vulkan iGPU's free-memory budget is now treated as an alternative view of the host-backed pool instead of being discarded. On a Ryzen AI Max+ 395 (96 GB LPDDR5X unified), Vulkan reports 107 GiB usable; models that fit were previously blocked by a false "~13 GB available" pre-load check. Shared memory is no longer double-counted against host RAM or multiplied across iGPUs.
- **Auto context selection + RAM-offload defaults** ([PR #9492](https://github.com/unslothai/unsloth/pull/9492)): "Auto" becomes an explicit slider position, and the default context is increased when system-RAM offload is unavoidable. Relevant to the 16 GB iGPU case in [#9482](https://github.com/unslothai/unsloth/issues/9482) where a ~10 GB model is refused — only ~8 GB is deemed usable — with `UNSLOTH_ALLOW_HOST_OFFLOAD=1` as the explicit escape hatch for memory-mapped CPU fallback.
- **ROCm attention speedup** (PR #8821, above): restoring sub-quadratic attention on AMD avoids the slow MATH SDPA fallback for library users.
- **AMD torch wheel fast-path escape** ([PR #9499](https://github.com/unslothai/unsloth/pull/9499)): `setup.sh` skipped the dependency pass entirely when the installed `unsloth` version matched PyPI, so the ROCm torch swap never ran; the fast path is now escaped when the wheel is wrong.

## 5. Stability & Regressions

Ranked by severity; fix PRs noted where they exist.

1. **Linux AppImage hangs / crashes on Model Hub** — [#9453](https://github.com/unslothai/unsloth/issues/9453) (AppImage freezes on the Model Hub tab; model selection in Chat has no effect; previous version works) and [#9480](https://github.com/unslothai/unsloth/issues/9480) (SIGABRT in WebKitWebProcess on Fedora 44 Wayland, Skia COLRv1 font assert). Fix PR [#9473](https://github.com/unslothai/unsloth/pull/9473) bundles a CBDT Noto emoji font with a private Fontconfig family to prevent Skia from selecting host COLRv1 emoji fonts — addresses #9480; #9453 has no fix attached yet.
2. **Chat settings cannot be persisted** — [#9500](https://github.com/unslothai/unsloth/issues/9500): 400 on `PUT /api/chat/settings`; presets silently fail to save. No fix PR yet. Related historical issue: #5130.
3. **MLX models fail to load on Apple Silicon after v0.1.801-beta** — [#9466](https://github.com/unslothai/unsloth/issues/9466) (closed; verify the fix before upgrade).
4. **Install failures** — [#9479](https://github.com/unslothai/unsloth/issues/9479) (create-venv fails when a managed interpreter is gone; fix PR [#9501](https://github.com/unslothai/unsloth/pull/9501) replaces dead venvs), [#9467](https://github.com/unslothai/unsloth/issues/9467) (Mac Mini, open), [#9329](https://github.com/unslothai/unsloth/issues/9329) (Fedora AppImage, closed).
5. **Cancelled prompts produce consecutive user messages** — [#9484](https://github.com/unslothai/unsloth/issues/9484): some Jinja templates reject consecutive user turns, breaking the chat after a cancel. Open.
6. **Image-generation model-swap races** — [#9448](https://github.com/unslothai/unsloth/issues/9448): `/v1/images/generations` can run the replacement model with the previous model's steps/guidance when a swap lands mid-request. Open. Related fix for the 409 "Diffusion generation was cancelled" after swap is closed ([#8309](https://github.com/unslothai/unsloth/issues/8309)).
7. **Model Hub Discover feed empty** — [#9456](https://github.com/unslothai/unsloth/issues/9456): `id: t._id` breaks owner/repo parsing; the `likes >= 30` filter then removes all new models. Open.
8. **Diffusion unload leak** — [#9472](https://github.com/unslothai/unsloth/pull/9472): `unload()` did not free the pipeline because the background thread's frame chain kept `load_pipeline` locals (pipe, transformer) alive. Fix merged/closed.
9. **Tool calling with NVIDIA Nemotron API** — [#9338](https://github.com/unslothai/unsloth/issues/9338) (closed): `messages[1].tool_calls[0].function.arguments` rejected as non-strict JSON ("trailing characters at line 1 column 27"). Validate tool-call argument serialization when proxying OpenAI-compatible endpoints.

## 6. What This Means for Application Developers

- **Long-context management remains a user-driven gap**: rolling context window (#7472), auto-compaction at 50–80% (#8504), and automatic context compression (#9401) are all requested but unshipped. Applications built on Unsloth serving should implement their own summarization/trimming rather than waiting for the runtime to handle context limits.
- **Pin Desktop versions in production.** The v0.1.801-beta wave (MLX breakage, AppImage freezes, settings 400) is exactly what burns fleets. Verify #9466 and #9500 are actually resolved before rolling out.
- **AMD is becoming viable for inference and training.** The AOTriton attention fix (PR #8821) and Vulkan UMA accounting (PR #9461) remove two hard blockers for ROCm/Vulkan GGUF serving and library-level training on Strix Halo-class hardware. The remaining constraint is the host-offload guard (#9482) — plan memory budgets accordingly.
- **Agent-loop correctness has two sharp edges**: non-strict JSON in tool-call arguments (#9338, closed) and Jinja templates that reject consecutive user turns when a prompt is cancelled (#9484, open). Validate both when building agent loops against Unsloth-hosted models.
- **The Anthropic SDK 1.0 sampling-parameter removal (#9443)** is a reminder to keep sampling params provider-agnostic in any agent gateway; the same breakage will recur across SDKs as vendor APIs narrow their parameter surfaces.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*