# AI Infrastructure Digest 2026-08-02

> Generated: 2026-08-02 01:43 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# Cross-Project AI Infrastructure Report — 2026-08-02

## 1. Ecosystem Overview

Frontier open-weight model releases (DeepSeek-V4-Flash-0731, Kimi K3, Qwen3.5-MoE) continue to dominate the inference engine roadmap, but this week's digest shows a widening gap between "day-0 image shipped" and "production-safe." Every major engine has at least one critical correctness or hardware-gating issue on these new architectures, with Ampere/SM80 support notably absent across vLLM and SGLang. The second dominant theme is agentic workload pressure: tool-call streaming parsers, reasoning-content persistence, and spec-decode benchmarks are consuming more engineering attention than raw attention kernels. Finally, AMD/ROCm and Intel (SYCL/XPU) are now first-class targets but remain a persistent source of segfaults, hangs, and silent corruption — no project has fully stabilized its non-NVIDIA backend.

## 2. Activity Comparison

Counts reflect issues/PRs referenced in each project's 24-hour digest, not exhaustive repository totals.

| Project | Issues Referenced | PRs Referenced | Release Status (24h) |
|---|---|---|---|
| vLLM | ~19 | ~17 | No release |
| SGLang | ~17 | ~17 | No release |
| llama.cpp | ~14 | ~18 | **7 releases (b10217–b10223)** |
| Ollama | ~15 | ~7 | No release |
| LiteLLM | ~17 | ~18 | No release |
| Unsloth | ~12 | ~15 | No release |

llama.cpp is the only project shipping continuously, reflecting its fast-iteration local-runtime model. The serving engines (vLLM, SGLang) and the gateway (LiteLLM) are in heavy PR/issue churn but staging changes for larger releases. Ollama shows the least PR activity despite multiple high-severity regressions, suggesting maintenance-mode stretch.

## 3. Model Support Race

**Kimi K3 — SGLang is ahead on packaging, vLLM on kernel maturity, neither is production-safe.** SGLang shipped day-0 images across CUDA 12/13 and ROCm ([#32541](https://github.com/sgl-project/sglang/pull/32541)), but the release is undermined by NaN/logits contamination ([#32968](https://github.com/sgl-project/sglang/issues/32968)) and a τ³-Banking accuracy regression ([#33223](https://github.com/sgl-project/sglang/issues/33223)). vLLM's tracking issue ([#50001](https://github.com/vllm-project/vllm/issues/50001)) remains open, with ROCm CI fixes ([#50490](https://github.com/vllm-project/vllm/pull/50490)) and FP8 MLA verification ([#50619](https://github.com/vllm-project/vllm/pull/50619)) landing — kernel work continues rather than packaging.

**DeepSeek-V4-Flash-0731 — universal Ampere gap.** vLLM flags SM8x (A100/RTX 30xx) unsupported ([#50576](https://github.com/vllm-project/vllm/issues/50576)); SGLang is blocked on SM80 with a `deep_gemm` NameError plus three follow-on blockers ([#33194](https://github.com/sgl-project/sglang/issues/33194), [#29738](https://github.com/sgl-project/sglang/issues/29738)); llama.cpp has GGML CPU ops in flight ([#23122](https://github.com/ggml-org/llama.cpp/pull/23122)) but suffers a 6.4× generation regression from TOP_K CPU fallback on ROCm ([#26399](https://github.com/ggml-org/llama.cpp/issues/26399)); Ollama only has a weight-update request ([#17508](https://github.com/ollama/ollama/issues/17508)). No engine has a clean path for A100 users.

**Distinct wins:** llama.cpp is the only project with **Motif 3 Beta** support (open PR [#26298](https://github.com/ggml-org/llama.cpp/pull/26298)) and shipped **MiniCPM-V 4.6** downsampling in b10218. SGLang uniquely shipped **Lumina-Image-2.0** and **Apertus 1.5** multimodal support. vLLM leads on **Qwen3.5-MoE** compatibility with transformers 5.x ([#50704](https://github.com/vllm-project/vllm/pull/50704)) and closed out the **Minimax M3** roadmap.

## 4. Performance Frontier

Optimization effort is concentrated in four areas:

- **KV cache and memory efficiency (dominant):** vLLM is pursuing 2-bit KV cache quantization ("Oscar-2", [#46774](https://github.com/vllm-project/vllm/pull/46774)) plus layerwise/sparse KV offloading RFCs ([#48203](https://github.com/vllm-project/vllm/issues/48203)); SGLang added session-reference-aware Radix Cache eviction protection ([#29173](https://github.com/sgl-project/sglang/pull/29173)) and Apple Silicon extend-request KV flushing ([#30578](https://github.com/sgl-project/sglang/pull/30578)); llama.cpp proposes Metal q8_0 KV ([#25556](https://github.com/ggml-org/llama.cpp/pull/25556)) and `--pin-hot-experts` mlock for MoE page-cache spikes ([#26414](https://github.com/ggml-org/llama.cpp/pull/26414)).

- **Kernels and dispatch:** SGLang is consolidating its kernel layer via unified dispatch ([#33205](https://github.com/sgl-project/sglang/pull/33205)) and adding split-K GEMM for large-K shapes that targets Kimi K3's hidden=7168 ([#33222](https://github.com/sgl-project/sglang/pull/33222)). llama.cpp generalized CUDA FlashAttention to non-multiple-of-8 GQA ratios ([#26404](https://github.com/ggml-org/llama.cpp/pull/26404)) and proposed an RDNA4 FA fix ([#26419](https://github.com/ggml-org/llama.cpp/pull/26419)). vLLM fixed ROCm wvSplitK OOB reads ([#50618](https://github.com/vllm-project/vllm/pull/50618)).

- **Distributed serving:** SGLang replaced gather-based LM head with TP all-to-all ([#32313](https://github.com/sgl-project/sglang/pull/32313)) and added FlashInfer context-parallel prefill ([#33226](https://github.com/sgl-project/sglang/pull/33226)). vLLM is un-gating CUDA/ROCm custom all-reduce tests after Kimi K3 regressions ([#50490](https://github.com/vllm-project/vllm/pull/50490)). llama.cpp extended RPC transport to Apple RDMA ([#26421](https://github.com/ggml-org/llama.cpp/pull/26421)).

- **Gateway overhead:** LiteLLM's Rust migration targets sub-1ms proxy overhead ([#31263](https://github.com/BerriAI/litellm/issues/31263)), and a RedisCache strong-reference fix prevents GC-induced telemetry drops ([#35347](https://github.com/BerriAI/litellm/pull/35347)).

Notable measurement correction: vLLM's `bench serve` fix ([#50677](https://github.com/vllm-project/vllm/pull/50677)) means previously reported speculative-decoding peak throughput was undercounted by ~4× — historical benchmark comparisons across engines should be revalidated.

## 5. Layer Positioning

| Layer | Projects | Role |
|---|---|---|
| **Serving engines** | vLLM, SGLang | Full multi-GPU production inference: tensor parallel, continuous/paged batching, disaggregated serving, model runners. vLLM is hardening (Model Runner V2, spec decode, KV offload); SGLang is racing day-0 model support and kernel unification. |
| **Local/edge runtime** | llama.cpp | GGUF quantization, broad CPU/GPU portability, RPC multi-node; the foundational layer for bundled and desktop deployments. |
| **Local runtime + library** | Ollama | Sits on llama.cpp-class backends, adds model management, OpenAI/Anthropic-compatible APIs, and now gateway-grade observability (Prometheus metrics, [#16998](https://github.com/ollama/ollama/pull/16998)). |
| **Gateway/control plane** | LiteLLM | No inference; owns routing, authN/Z, budgets, spend tracking, multi-tenant OTEL v2 tracing, and model cost maps. |
| **Fine-tuning** | Unsloth | LoRA/QLoRA training and desktop Studio; the upstream producer of adapters/GGUFs consumed by llama.cpp and Ollama. |

The stack is well-separated, but overlap is growing: Ollama is acquiring gateway features (metrics, API compat), SGLang and vLLM both own kernel layers, and Unsloth's Studio is becoming an operator surface (batch queues, token analytics) rather than a pure training library.

## 6. Trend Signals

1. **"Day-0" support is a packaging milestone, not a readiness milestone.** Kimi K3 images shipped before NaN sanitization and accuracy fixes; DeepSeek-V4-Flash is blocked on Ampere across every engine. Teams deploying new frontier models must run their own eval suites — the engines themselves are signaling caution.

2. **Agentic workloads are driving engine requirements.** Tool-call parser bugs hit Ollama (0.32.4/0.32.5 regression, [#17444](https://github.com/ollama/ollama/issues/17444)), SGLang (MiMo trailing-text drop, Inkling tool-name leak), and LiteLLM (streamed `function_call_arguments` loss, [#27144](https://github.com/BerriAI/litellm/issues/27144)) in the same 24-hour window. Meanwhile llama.cpp shipped reasoning-content persistence (b10219) and tool calls during thinking (b10217). Agent correctness — not raw throughput — is now the differentiator.

3. **AMD/Intel are production platforms with production-grade failure modes.** RDNA4 rocWMMA regressions, SYCL oneMKL 200K-prefill slowdowns, XPU memory corruption, gfx1100 startup segfaults — every inference project carries open ROCm/SYCL/XPU issues. Multi-platform support is table stakes, but pinning known-good builds is still mandatory.

4. **Security hardening is moving down the stack.** LiteLLM's `custom_auth` authorization bypass ([#35553](https://github.com/BerriAI/litellm/pull/35553)) and ownerless Responses API ID exposure ([#35561](https://github.com/BerriAI/litellm/pull/35561)) are gateway-layer; Unsloth's unescaped Jinja template splicing ([#7731](https://github.com/unslothai/unsloth/pull/7731)) is model-layer. Application teams should audit custom auth, prompt-template injection paths, and "silent failure" sanitizers (SGLang NaN-to-random-output, [#33187](https://github.com/sgl-project/sglang/issues/33187)) that can mask quality degradation.

5. **Memory efficiency has replaced raw FLOPs as the optimization frontier.** KV cache quantization, offloading, expert pinning, radix-cache eviction policy, and APU unified-memory headroom dominate PR activity. Context length and multi-session reuse — not single-request latency — are the binding constraints.

6. **Coordinated rewrites are converging.** vLLM Model Runner V2, SGLang unified kernel dispatch, LiteLLM Rust migration, and Unsloth's Studio operator features are all in flight. Expect 1–2 releases of elevated regression risk and breaking-config churn (notably LiteLLM's `otel/v2` breaking change and SGLang's OOT platform-plugin contract change) — upgrade windows should be treated as migration projects.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

## Today's Highlights

No releases landed in the last 24h. The main activity is around DeepSeek-V4-Flash SM8x support ([#50576](https://github.com/vllm-project/vllm/issues/50576)), a Qwen3.5-MoE transformers 5.x compatibility fix ([#50704](https://github.com/vllm-project/vllm/pull/50704)), and un-gating CUDA/ROCm custom-all-reduce + KDA tests after Kimi K3 regressions ([#50490](https://github.com/vllm-project/vllm/pull/50490)). Several ROCm/XPU correctness and stability fixes are also in flight, including wvSplitK OOB reads ([#50618](https://github.com/vllm-project/vllm/pull/50618)) and XPU memory corruption ([#49924](https://github.com/vllm-project/vllm/issues/49924)).

## Releases & Breaking Changes

None. No new vLLM releases or migration notes were published in the last 24 hours.

## New Model & Hardware Support

- **DeepSeek-V4-Flash / DeepSeek-V4-Flash-0731:** The new checkpoint is released, but SM8x (A100/A800/RTX 30xx) is still unsupported. Feature request: [#50576](https://github.com/vllm-project/vllm/issues/50576).
- **Qwen3.5-MoE with transformers 5.x:** PR [#50704](https://github.com/vllm-project/vllm/pull/50704) adds `Qwen3_5MoeTextConfig` handling for text-only models, addressing [#50428](https://github.com/vllm-project/vllm/issues/50428) and the related [#36236](https://github.com/vllm-project/vllm/issues/36236).
- **Kimi K3:** Tracking issue [#50001](https://github.com/vllm-project/vllm/issues/50001) remains open with KV cache manager and kernel workstreams. ROCm CI fixes for Kimi K3 landed in [#50490](https://github.com/vllm-project/vllm/pull/50490) and FP8 MLA verification fixes in [#50619](https://github.com/vllm-project/vllm/pull/50619).
- **Minimax M3 roadmap** ([#45668](https://github.com/vllm-project/vllm/issues/45668)) is closed; FP8 indexer and FP8 sparse GQA work are complete.
- **AMD backend:** WIP PR [#49470](https://github.com/vllm-project/vllm/pull/49470) switches vLLM to The Rock on AMD hardware. ROCm RDNA3 W4A16 MoE dispatch refactor: [#44460](https://github.com/vllm-project/vllm/issues/44460).
- **Vulkan support:** Still an open feature request with significant community interest ([#21182](https://github.com/vllm-project/vllm/issues/21182)).
- **Quantization:** AutoRound block-wise FP8 support is in review ([#47434](https://github.com/vllm-project/vllm/pull/47434)); a 2-bit KV cache quantization backend ("Oscar-2") is WIP ([#46774](https://github.com/vllm-project/vllm/pull/46774)); Triton NVFP4 GEMM for SM120 is requested in [#21014](https://github.com/vllm-project/vllm/issues/21014).

## Performance & Optimization

- **Benchmark fix:** PR [#50677](https://github.com/vllm-project/vllm/pull/50677) fixes `vllm bench serve` peak output throughput to count tokens, not chunks. Previously speculative decoding could report peak throughput far below average (e.g., 113.00 vs. 410.61 tok/s).
- **DSpark warmup:** PR [#50693](https://github.com/vllm-project/vllm/pull/50693) fixes `profile_run` when the sparse index buffer is intentionally not allocated, resolving [#50615](https://github.com/vllm-project/vllm/issues/50615).
- **ROCm kernel fix:** PR [#50618](https://github.com/vllm-project/vllm/pull/50618) prevents out-of-bounds reads in `wvSplitK` on strided activations.
- **Kimi K3 ROCm perf:** PR [#50619](https://github.com/vllm-project/vllm/pull/50619) fixes FP8 MLA + DSpark verification issues on ROCm with 12 MLA query heads per rank.
- **KV/MoE offloading:** RFCs for layerwise/sparse KV cache offloading ([#48203](https://github.com/vllm-project/vllm/issues/48203)) and incremental MoE expert offloading ([#38256](https://github.com/vllm-project/vllm/issues/38256)) are active. PR [#45635](https://github.com/vllm-project/vllm/pull/45635) enables `return_routed_experts` with CPU KV offload.
- **Model Runner V2 maturity:** Open PRs target LoRA + CUDA graph ([#41732](https://github.com/vllm-project/vllm/pull/41732)), speculative decoding with draft models ([#43091](https://github.com/vllm-project/vllm/pull/43091)), prompt embeds ([#42963](https://github.com/vllm-project/vllm/pull/42963)), and mamba prefix-cache alignment ([#42792](https://github.com/vllm-project/vllm/pull/42792)).

## Stability & Regressions

Ranked by severity:

- **Critical — TP worker hang / EngineDeadError:** DeepSeek-V4-Pro, TP=8, MTP speculative decoding — RPC call to `sample_tokens` timed out ([#41530](https://github.com/vllm-project/vllm/issues/41530)). No fix PR yet.
- **Critical — Decode segfault in disaggregated serving:** Decode instance segfaults on NIXL `loadRemoteMD` after the prefill pod restarts ([#49238](https://github.com/vllm-project/vllm/issues/49238)). No fix PR yet.
- **Critical — XPU multi-GPU TP hang:** Intel Arc Pro B60 with torch 2.13 wheels — warmup allreduce never returns, GuC timeouts, `DEVICE_LOST` ([#50545](https://github.com/vllm-project/vllm/issues/50545)). No fix PR yet.
- **High — XPU memory corruption:** GDN attention silently corrupts memory under load; the fix exists in `vllm-xpu-kernels`, but `requirements/xpu.txt` pins an older release ([#49924](https://github.com/vllm-project/vllm/issues/49924)).
- **High — ROCm/RDNA4 multimodal failures:** Multimodal models fail to load on gfx1201 with `CUDA error: invalid argument` in `vit_torch_sdpa_wrapper` ([#49851](https://github.com/vllm-project/vllm/issues/49851)).
- **High — FlashInfer fused allreduce crash:** H200-NVL TP=8 crashes at CUDA graph capture; the TRTLLM workaround is ~34x slower than disabling fusion ([#48071](https://github.com/vllm-project/vllm/issues/48071)).
- **Medium — AsyncScheduler crash:** `num_output_placeholders` underflow during Realtime ASR streaming ([#35755](https://github.com/vllm-project/vllm/issues/35755)).
- **Medium — Prefix-cache collapse:** Hybrid-SWA models (Gemma-4-31B) lose all cross-request prefix reuse in multi-session round-robin at ~25% pool occupancy ([#48435](https://github.com/vllm-project/vllm/issues/48435)).
- **Medium — Multi-node streaming:** `runai_streamer` does not pull aux (non-tensor) files on peer nodes ([#50616](https://github.com/vllm-project/vllm/issues/50616)).
- **Fix PRs in flight:** MRV2 Gumbel sampling for non-finite logits ([#43249](https://github.com/vllm-project/vllm/pull/43249)), Gemma4 KV-shared layer crash ([#48365](https://github.com/vllm-project/vllm/pull/48365)), and GB10 warmup async CUDA error surfacing ([#50072](https://github.com/vllm-project/vllm/pull/50072)).

## What This Means for Application Developers

- **If you run DeepSeek-V4-Flash on A100/A800/RTX 30xx:** it is currently unsupported. Track [#50576](https://github.com/vllm-project/vllm/issues/50576) or use SM9x/SM12x hardware.
- **If you use Qwen3.5-MoE text-only models with transformers 5.x:** pin transformers 4.x until [#50704](https://github.com/vllm-project/vllm/pull/50704) merges.
- **If you benchmark speculative decoding:** be aware that previous `vllm bench serve` peak throughput numbers may have been undercounts; the fix in [#50677](https://github.com/vllm-project/vllm/pull/50677) will make reported peaks meaningful.
- **Intel XPU users:** avoid torch 2.13 wheels for multi-GPU TP serving until [#50545](https://github.com/vllm-project/vllm/issues/50545) is resolved, and verify `vllm-xpu-kernels` is newer than the broken GDN attention release ([#49924](https://github.com/vllm-project/vllm/issues/49924)).
- **Long-context / disaggregated deployments:** NIXL-based prefill/decode setups still have crash and hang risks after pod restarts ([#49238](https://github.com/vllm-project/vllm/issues/49238)); plan for retry and health-check logic.
- **Model Runner V2 is still catching up:** if you depend on LoRA, speculative decoding, prompt embeds, or mamba prefix caching with `VLLM_USE_V2_MODEL_RUNNER=1`, expect ongoing fixes across the open MRV2 PRs.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest — 2026-08-02

## 1. Today's Highlights

Kimi-K3 day-0 support is advancing across CUDA 12/13 and ROCm images ([PR #32541](https://github.com/sgl-project/sglang/pull/32541)), but production readiness is undercut by unresolved NaN/logits contamination ([#32968](https://github.com/sgl-project/sglang/issues/32968)) and a reported accuracy regression on τ³-Banking ([#33223](https://github.com/sgl-project/sglang/issues/33223)). DeepSeek-V4-Flash on Ampere is blocked by multiple unfixed issues ([#33194](https://github.com/sgl-project/sglang/issues/33194), [#29738](https://github.com/sgl-project/sglang/issues/29738)), while the kernel subsystem moves toward unified dispatch ([#33205](https://github.com/sgl-project/sglang/pull/33205)) and FlashInfer gains context-parallel prefill ([#33226](https://github.com/sgl-project/sglang/pull/33226)). No releases shipped in the last 24 hours.

## 2. Releases & Breaking Changes

No new releases in the last 24h. Two in-flight PRs will affect the next release:

- **CUDA PyTorch stack bump to 2.13** ([PR #28836](https://github.com/sgl-project/sglang/pull/28836)): torch 2.11→2.13, triton 3.6→3.7.1, triton_kernels 3.6→3.7.1; expect binary/ABI churn.
- **Unified kernel dispatch** ([PR #33205](https://github.com/sgl-project/sglang/pull/33205)): merges `BaseFusedOp` (RFC #29630) with `MultiPlatformOp`, changing the OOT platform-plugin contract — plugin authors should track this.

## 3. New Model & Hardware Support

- **Kimi-K3 day-0 support** ([PR #32541](https://github.com/sgl-project/sglang/pull/32541)): CUDA 13 (`lmsysorg/sglang:kimi-k3`), CUDA 12 (`...:kimi-k3-cu12`), and ROCm (`rocm720-mi35x-k3-20260727`) images published.
- **Lumina-Image-2.0 (NextDiT)** ([PR #33122](https://github.com/sgl-project/sglang/pull/33122)): 2B flow-matching text-to-image DiT with Gemma-2 text encoder + FLUX.1-dev VAE.
- **Apertus 1.5 multimodal** ([PR #32979](https://github.com/sgl-project/sglang/pull/32979)): interleaved text/image/audio input, text output.
- **FlashInfer context-parallel prefill** ([PR #33226](https://github.com/sgl-project/sglang/pull/33226)): adds CP-v2 zigzag prefill for dense MHA/GQA on the FlashInfer backend.
- **NPU MoE W4A8 MXFP quantization** ([PR #30318](https://github.com/sgl-project/sglang/pull/30318)): extends Ascend NPU W4A8 from linear layers to ModelSlim-quantized MoE.
- **Per-tensor FP8 → FlashInfer on SM89/SM90** ([Issue #32993](https://github.com/sgl-project/sglang/issues/32993)): open feature request.
- **Gemma 4 MTP draft via `trtllm_mha`** ([PR #25545](https://github.com/sgl-project/sglang/pull/25545)): closed; faster Frozen-KV MTP draft backend.

## 4. Performance & Optimization

- **TP LMHead all-to-all** ([PR #32313](https://github.com/sgl-project/sglang/pull/32313)): replaces gather-based LM head with all-to-all under TP.
- **Inkling MoE `silu_and_mul`** ([PR #33224](https://github.com/sgl-project/sglang/pull/33224)): drops the Helion dependency (and its per-SM AOT autotune tables); tunes a native Triton kernel.
- **TGV BF16 GEMM split-K** ([PR #33222](https://github.com/sgl-project/sglang/pull/33222)): adds split-K tactics for large-K small-N shapes. The existing K cap of 6144 excludes Kimi-K3 (hidden=7168), which currently falls back to cuBLAS — this PR targets exactly that gap.
- **Session-reference-aware Radix Cache** ([PR #29173](https://github.com/sgl-project/sglang/pull/29173)): prevents eviction of active multi-turn/RL session prefixes under memory pressure.
- **Extend-request KV flush on Apple Silicon** ([PR #30578](https://github.com/sgl-project/sglang/pull/30578)): flushes decode KV only when prefill must read extend inputs.

## 5. Stability & Regressions

Ranked by severity:

1. **DeepSeek-V4-Flash-0731 blocked on Ampere SM80** ([Issue #33194](https://github.com/sgl-project/sglang/issues/33194)): three further blockers after the `deep_gemm` NameError on 8×A800 TP=8. Related: `deep_gemm` undefined with `SGLANG_ENABLE_JIT_DEEPGEMM=0` ([#29738](https://github.com/sgl-project/sglang/issues/29738)). No fix PRs yet.
2. **NaN sanitizer streams garbage instead of crashing** ([Issue #33187](https://github.com/sgl-project/sglang/issues/33187)): with `SGLANG_SANITIZE_NAN_LOGITS=1`, a fully-NaN logits row becomes a uniform-random sample delivered as normal output; the author proposes an opt-in per-request abort. Follow-up to Kimi-K3 NaN contamination ([#32968](https://github.com/sgl-project/sglang/issues/32968)), where the released image predates fix #32477 and long-context `[PAD]` storms persist with DSPARK asserts.
3. **Kimi-K3 accuracy regression** ([Issue #33223](https://github.com/sgl-project/sglang/issues/33223)): 17.53 on τ³-Banking with latest kimi-k3 image; reproduce details requested. Related: literal `<|kimi_image_placeholder|>` in text returns 400 ([#32960](https://github.com/sgl-project/sglang/issues/32960)).
4. **Inkling reasoning parser leaks tool name into visible content** ([Issue #33181](https://github.com/sgl-project/sglang/issues/33181)) when a turn opens with a tool call.
5. **MiMo tool-call streaming drops trailing text** ([Issue #33186](https://github.com/sgl-project/sglang/issues/33186)); split bot-token flushes leak markup into content.
6. **DeepSeek-V4-Flash `reasoning_effort` off-by-one** ([Issue #33185](https://github.com/sgl-project/sglang/issues/33185)): `high` is a no-op and vendor `max` is unreachable; confirmed on v0.5.16 and `main`.
7. **DeepSeek-V4 default blocks spec-decoding reset** ([Issue #33199](https://github.com/sgl-project/sglang/issues/33199)): `max-running-requests` not restored to 48.
8. **Unrecognized `_DeepseekV4ConfigAlias`** ([Issue #33207](https://github.com/sgl-project/sglang/issues/33207)): config class not registered with transformers.
9. **Batched embedding requests drop priority before scheduling** ([Issue #32844](https://github.com/sgl-project/sglang/issues/32844)).

Fixes landed or in review:

- **FA4 decode descale crash**: skip unsupported `k_descale`/`v_descale` in decode ([PR #33227](https://github.com/sgl-project/sglang/pull/33227), fixes [#31640](https://github.com/sgl-project/sglang/issues/31640)).
- **Cohere Command4 streaming drift**: strip echoed `<|START_THINKING|>` and flush final text block ([PR #33225](https://github.com/sgl-project/sglang/pull/33225)).
- **MLX `is_fully_idle`** was testing the torch overlap path instead of the result queue ([PR #32934](https://github.com/sgl-project/sglang/pull/32934)).
- **Rust server tokenizer path**: now resolves via `huggingface_hub` so `HUGGINGFACE_HUB_CACHE` is respected ([PR #33219](https://github.com/sgl-project/sglang/pull/33219)).

Closed as inactive this period: DeepSeek-V4-Pro PD input-length cap at 18,432 tokens ([#24523](https://github.com/sgl-project/sglang/issues/24523)), HiCache L1+L2 combined-capacity validation ([#22105](https://github.com/sgl-project/sglang/issues/22105)), GLM n>1 JSON `content=None` ([#22042](https://github.com/sgl-project/sglang/issues/22042)). The automated CUDA coredump tracker ([#26340](https://github.com/sgl-project/sglang/issues/26340)) remains the top CI triage signal at 224 comments.

## 6. What This Means for Application Developers

- **Kimi-K3 is not production-safe yet**: day-0 images exist, but NaN/logits issues (#32968, #33187) and the accuracy regression (#33223) mean teams should run their own eval suites before rollout and explicitly pin a post-#32477 image.
- **Do not move DeepSeek-V4-Flash to Ampere**: A800/SM80 users hit the `deep_gemm` NameError plus three follow-on blockers (#33194, #29738) with no fix in sight — stay on V3.x or Hopper/Blackwell.
- **Tool-call streaming remains fragile**: MiMo, Inkling, and Cohere Command4 all had streaming-only parser bugs this week (Cohere fixed in #33225). If your app consumes streaming tool calls, assert on final message content, not just `finish_reason`.
- **NaN sanitization can mask failures**: `SGLANG_SANITIZE_NAN_LOGITS=1` trades crashes for silent uniform-random output. Watch for low-quality generations and monitor accordingly until the per-request abort design (#33187) lands.
- **Expect backend-selection churn in the next release**: unified `sglang.kernels` dispatch (#33205), FlashInfer CP prefill (#33226), and the CUDA 2.13 stack bump (#28836) are all in flight — validate custom kernel plugins and pinned dependency sets before upgrading.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp Digest — 2026-08-02

## Today's Highlights
llama.cpp shipped b10217–b10223, adding reasoning-content persistence, DeepSeek-V4 tool-calls during thinking, MiniCPM-V 4.6 downsampling, a BoringSSL update, and CI fixes. The most notable model work is the open Motif 3 Beta support PR ([#26298](https://github.com/ggml-org/llama.cpp/pull/26298)) plus a CUDA FlashAttention generalization for non-multiple-of-8 GQA ratios ([#26404](https://github.com/ggml-org/llama.cpp/pull/26404)). Several DeepSeek-V4/Gemma-4 regressions on ROCm/SYCL/Vulkan remain open, with an RDNA4 FlashAttention fix proposed in [\#26419](https://github.com/ggml-org/llama.cpp/pull/26419).

## Releases & Breaking Changes
- [b10223](https://github.com/ggml-org/llama.cpp/releases/tag/b10223) (latest) — CI error fixes ([\#26415](https://github.com/ggml-org/llama.cpp/pull/26415)).
- [b10221](https://github.com/ggml-org/llama.cpp/releases/tag/b10221) — vendor BoringSSL to 0.20260730.0 ([\#26353](https://github.com/ggml-org/llama.cpp/pull/26353)).
- [b10219](https://github.com/ggml-org/llama.cpp/releases/tag/b10219) — cli persists `reasoning_content` in chat history, so `--reasoning-preserve` can re-inject prior thoughts on later turns ([\#26362](https://github.com/ggml-org/llama.cpp/pull/26362)).
- [b10218](https://github.com/ggml-org/llama.cpp/releases/tag/b10218) — mtmd adds `minicpmv46` downsampling ([\#25993](https://github.com/ggml-org/llama.cpp/pull/25993)).
- [b10217](https://github.com/ggml-org/llama.cpp/releases/tag/b10217) — chat enables tool calls during thinking for DeepSeek-V4 ([\#26269](https://github.com/ggml-org/llama.cpp/pull/26269)).

No explicit breaking config changes or migration notes were called out.

## New Model & Hardware Support
- **Motif 3 Beta** — open PR [\#26298](https://github.com/ggml-org/llama.cpp/pull/26298) adds GDLA (Grouped Differential Latent Attention), an MLA-style low-rank projection with 16 GQA KV heads.
- **CUDA FA generalization** — [\#26404](https://github.com/ggml-org/llama.cpp/pull/26404) enables FlashAttention kernels for head size 192/128 with GQA ratios that are not multiples of 8, needed by Motif 3.
- **MiniCPM-V 4.6 downsampling** — released in b10218 ([\#25993](https://github.com/ggml-org/llama.cpp/pull/25993)).
- **DeepSeek V4 CPU ops** — [\#23122](https://github.com/ggml-org/llama.cpp/pull/23122) adds GGML hyperconnection + KV ops on CPU; part of a multi-PR DeepSeek-V4 port.
- **Apple RDMA RPC transport** — [\#26421](https://github.com/ggml-org/llama.cpp/pull/26421) extends the RPC layer to support Apple RDMA alongside Linux.
- **Vulkan GATED_LINEAR_ATTN** — [\#25601](https://github.com/ggml-org/llama.cpp/pull/25601) implements `GGML_OP_GATED_LINEAR_ATTN` on Vulkan, removing the CPU fallback.

## Performance & Optimization
- **RDNA4 FlashAttention fix** — [\#26419](https://github.com/ggml-org/llama.cpp/pull/26419) re-enables MMA FlashAttention for head dim 256 on AMD RDNA. It targets [\#26220](https://github.com/ggml-org/llama.cpp/issues/26220), where prompt processing was up to 2× slower at deep context after rocWMMA removal; decode was unaffected.
- **CUDA batched top-k** — [\#26390](https://github.com/ggml-org/llama.cpp/pull/26390) switches multi-row top-k to batched argsort, avoiding thousands of sequential `DeviceTopK` dispatches per graph in batch workloads such as MiniMax M3.
- **MoE expert pinning** — [\#26414](https://github.com/ggml-org/llama.cpp/pull/26414) adds `--pin-hot-experts N` to mlock the hottest MoE experts, preventing mmap page-cache eviction latency spikes on large models.
- **Metal q8_0 KV** — [\#25556](https://github.com/ggml-org/llama.cpp/pull/25556) proposes an optimized q8_0 KV cache path for Apple Metal.
- **Known regressions:**
  - SYCL oneMKL FA path regresses 200K-token prefill by ~35% on Intel Arc Pro B70 in b10216 ([\#26396](https://github.com/ggml-org/llama.cpp/issues/26396)); workaround is `MKL_FA_DISABLE=1`.
  - `GGML_OP_TOP_K` falls back to CPU on HIP/ROCm above ~3–4K context, causing 6.4× token-generation loss on DeepSeek-V4-Flash ([\#26399](https://github.com/ggml-org/llama.cpp/issues/26399)).

## Stability & Regressions
High severity:
- **Qwen 3.6 27B full prompt re-processing** due to missing cache data — [\#22746](https://github.com/ggml-org/llama.cpp/issues/22746), 115 comments, still open. Major long-context efficiency impact.
- **DeepSeek-V4 garbled output on Strix Halo ROCm** — [\#25436](https://github.com/ggml-org/llama.cpp/issues/25436), open. Related quantized K-cache garbage fix was closed in [\#25391](https://github.com/ggml-org/llama.cpp/pull/25391).
- **SYCL empty/gibberish output and `ggml_sycl_op_mul_mat` crash** on Intel Arc Pro B60 hybrid models — [\#24168](https://github.com/ggml-org/llama.cpp/issues/24168), regression between b9128 and b9159, open.
- **Vulkan `vk::DeviceLostError` on DeepSeek-V4-Flash** within a few turns on RADV/Strix Halo — [\#25664](https://github.com/ggml-org/llama.cpp/issues/25664), open.
- **Gemma 4 12B garbled output on large prompts** with Intel Arc Pro B70 (SYCL) — [\#26206](https://github.com/ggml-org/llama.cpp/issues/26206), open.

Medium severity:
- **CUDA `cublasSgemm_v2` unsupported parameter during speculative decoding** on V100 — [\#26119](https://github.com/ggml-org/llama.cpp/issues/26119), open.
- **RDNA4 prompt-processing regression** from rocWMMA removal — [\#26220](https://github.com/ggml-org/llama.cpp/issues/26220); fix proposed in [\#26419](https://github.com/ggml-org/llama.cpp/pull/26419).
- **SYCL oneMKL FA 200K-prefill regression** on Arc Pro B70 — [\#26396](https://github.com/ggml-org/llama.cpp/issues/26396); workaround available, no fix PR yet.
- **Ternary Bonsai 27B failures** — model crashes on load ([\#25727](https://github.com/ggml-org/llama.cpp/issues/25727)) and Dspark draft model fails to load ([\#26337](https://github.com/ggml-org/llama.cpp/issues/26337)), both open.

Low severity:
- `llama-cli` fails when run from another working directory — [\#26265](https://github.com/ggml-org/llama.cpp/issues/26265).
- Windows Defender flags b10195 CPU binary — [\#26343](https://github.com/ggml-org/llama.cpp/issues/26343), likely false positive.
- Gemma 4 MTP draft crash — [\#25873](https://github.com/ggml-org/llama.cpp/issues/25873), closed.

## What This Means for Application Developers
- Upgrade to **b10219+** if you serve multi-turn reasoning models; `reasoning_content` is now persisted in chat history, so reasoning state survives across requests with `--reasoning-preserve`.
- DeepSeek-V4 agent workflows can enable **tool calls during thinking** starting from b10217.
- For OpenAI/OpenRouter-style reasoning control, watch [\#20088](https://github.com/ggml-org/llama.cpp/pull/20088) and the `response_format: json_schema` prefill parsing fix ([\#23993](https://github.com/ggml-org/llama.cpp/pull/23993)) — both matter for API gateways handling reasoning + structured outputs.
- The proposed `x-tool-cwd` header ([\#26420](https://github.com/ggml-org/llama.cpp/pull/26420)) would let harnesses set the working directory for tool calls, matching pi/claude-code behavior.
- If you run large MoE models from mmap, test `--pin-hot-experts` once [\#26414](https://github.com/ggml-org/llama.cpp/pull/26414) merges; it directly targets RAM-eviction latency spikes.
- On **RDNA4/ROCm** and **Intel SYCL**, pin known-good builds until [\#26419](https://github.com/ggml-org/llama.cpp/pull/26419) and [\#26396](https://github.com/ggml-org/llama.cpp/issues/26396) are resolved. For Arc Pro B70 long-context prefill, `MKL_FA_DISABLE=1` is an immediate mitigation.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Digest — 2026-08-02

## Today's Highlights
No new releases shipped in the last 24h, and the tracker shows mounting stability pressure: tool calling regresses again in 0.32.4/0.32.5 (confirmed in the VS Code Copilot harness, with rollback to 0.32.1 working), and `qwen3-embedding:4b` is crashing the llama-server with memory corruption on Apple Silicon. On the positive side, several API-compatibility and infrastructure PRs are in flight — OpenAI `reasoning_effort` normalization, Anthropic empty-content serialization, a Prometheus metrics endpoint, and a fix for truncated cogito tool calls.

## Releases & Breaking Changes
None in the last 24 hours. Version-specific regressions (0.32.4/0.32.5 tool calling, 0.30.11 Windows crash) are covered under **Stability & Regressions** below.

## New Model & Hardware Support
No new backends or model families landed in the last 24h. Community requests and quant/vision issues pending:
- **DeepSeek-V4-Flash-0731** weight update requested for the library ([#17508](https://github.com/ollama/ollama/issues/17508), [#17510](https://github.com/ollama/ollama/issues/17510)); upstream ref: huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731
- **KAT-Coder-V2.5-Dev** model addition requested ([#17506](https://github.com/ollama/ollama/issues/17506))
- **Broken NVFP4 vision path:** `qwen3.6:35b-a3b-nvfp4` advertises vision but silently discards images on macOS; the q8_0 build of the same model works, indicating a quant-specific defect ([#17501](https://github.com/ollama/ollama/issues/17501), closed)

## Performance & Optimization
- **Prometheus metrics endpoint (PR):** opt-in `GET /metrics` behind `OLLAMA_METRICS=1` with scheduler gauges (`ollama_requests_queued`, `ollama_queue_capacity`, `ollama_models_loaded`), HTTP request counters, and per-model/token metrics — useful for capacity planning in production gateways ([#16998](https://github.com/ollama/ollama/pull/16998), open)
- **Ollama Cloud prompt caching requested:** agentic workloads miss provider-side caching that aggregators like Open Code Zen provide; TTFT impact for multi-turn agents ([#16714](https://github.com/ollama/ollama/issues/16714), open)
- **Streaming goroutine leak fix (closed PR):** `GenerateHandler`/`PushHandler`/`ChatHandler` no longer block forever on unbuffered channels after client disconnect — relevant for long-lived agent sessions ([#17135](https://github.com/ollama/ollama/pull/17135), closed)

## Stability & Regressions
Ranked by severity:

1. **Tool calling broken in 0.32.4/0.32.5** — VS Code GitHub Copilot harness; rollback to 0.32.1 confirmed working. Tool calls fail or never complete ([#17444](https://github.com/ollama/ollama/issues/17444), open). Related: gemma4:e4b tool parsing errors persist months after the 0.20.1 fix attempt, 50 comments ([#15315](https://github.com/ollama/ollama/issues/15315), open)
2. **Embedding runner crash/hang on macOS Apple Silicon** — `qwen3-embedding:4b` llama-server crashes in `llama_context::decode` with libmalloc memory corruption under sustained `/v1/embeddings` load; clients get HTTP 400 while the main server stays alive ([#17509](https://github.com/ollama/ollama/issues/17509), open). Related: runner stuck in `Stopping...`, `/api/embed` hangs 60s ([#17428](https://github.com/ollama/ollama/issues/17428), open)
3. **Ollama.com auth outage** — persistent 403 `Forbidden` + login loop for 8+ hours; affects API/CLI (`ollama list`, `ollama ps`) across devices and OSes ([#17471](https://github.com/ollama/ollama/issues/17471), open)
4. **Thinking models never terminate on exact word-count prompts** — unbounded self-verification loop (draft → count → rewrite) with no stop token; disabling thinking or capping `num_predict` works around ([#17512](https://github.com/ollama/ollama/issues/17512), open)
5. **Model unload/reload thrash** — the same model loaded via two tools (VS Code Continue + Goose) unloads and reloads on every prompt switch ([#17482](https://github.com/ollama/ollama/issues/17482), open)
6. **`context deadline exceeded` on HF imports** — large GGUF pulls time out during manifest/pull ([#17484](https://github.com/ollama/ollama/issues/17484), open)
7. Older/closed: v0.30.11 Windows crash (0xc0000005) ([#16951](https://github.com/ollama/ollama/issues/16951), closed); port 11434 `bind` error ([#3575](https://github.com/ollama/ollama/issues/3575), closed)

**Fix PRs in flight:**
- **Cogito tool-call finalization:** parser now finalizes buffered tool calls when the stream ends without the closing delimiter — targets dropped tool calls on truncation ([#17505](https://github.com/ollama/ollama/pull/17505), open)
- **OpenAI compatibility:** normalize `reasoning_effort: "minimal"` → `"low"` ([#17396](https://github.com/ollama/ollama/pull/17396), closed); report `incomplete` status + `IncompleteDetails` when `max_output_tokens` cuts generation instead of hardcoded `completed` ([#17239](https://github.com/ollama/ollama/pull/17239), open)
- **Anthropic compatibility:** serialize empty message content as `[]` instead of `null` in non-streaming `/v1/messages` ([#17293](https://github.com/ollama/ollama/pull/17293), open)
- **MLX structured outputs:** reject schema requests instead of silently ignoring the format field (fixes #16563) ([#17232](https://github.com/ollama/ollama/pull/17232), open)

## What This Means for Application Developers
- **Pin your Ollama version if you depend on tool calling.** 0.32.1 is the latest reported-good build for VS Code Copilot harness integration; 0.32.4/0.32.5 break tool calls. Track [#17444](https://github.com/ollama/ollama/issues/17444) before upgrading agent stacks.
- **Be cautious with embedding workloads on Apple Silicon.** `qwen3-embedding:4b` on 0.32.5 can crash the runner under sustained OpenAI-compatible load; plan a fallback (older pin, different embed model, or non-Metal backend).
- **Watch for the upcoming `/metrics` endpoint** (`OLLAMA_METRICS=1`) — queue depth and per-model token metrics will be valuable for production gateway monitoring.
- **API-compat fixes are in the pipeline.** `reasoning_effort: "minimal"`, incomplete-response status, and empty-content-array fixes will unblock more OpenAI/Anthropic SDK clients; monitor the PR queue before filing new compat bugs.
- **Cloud users:** prompt caching on Ollama Cloud is still a feature request; agentic TTFT may be worse than aggregators offering provider cache ([#16714](https://github.com/ollama/ollama/issues/16714)).
- **Model availability:** DeepSeek-V4-Flash-0731 and KAT-Coder-V2.5-Dev are not yet in the library; the 0731 flash update is weight-only if you import from HF directly ([#17508](https://github.com/ollama/ollama/issues/17508)).

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-08-02

## 1. Today's Highlights
A large batch of spend/budget correctness and security fixes landed as PRs, most notably a fix for `custom_auth` silently disabling authorization for all requests ([#35553](https://github.com/BerriAI/litellm/pull/35553)) and fail-closed enforcement for foreign/ownerless Responses API IDs ([#35561](https://github.com/BerriAI/litellm/pull/35561)). The multi-tenant OTEL v2 tracing stack advanced through five coordinated PRs ([#30873](https://github.com/BerriAI/litellm/pull/30873), [#35513](https://github.com/BerriAI/litellm/pull/35513)–[#35516](https://github.com/BerriAI/litellm/pull/35516)). Separately, the Rust migration parent ticket ([#31263](https://github.com/BerriAI/litellm/issues/31263)) remains active with a public blog post and beta signup.

## 2. Releases & Breaking Changes
No new releases in the last 24 hours. Watch the in-progress [`feat(otel/v2)!`](https://github.com/BerriAI/litellm/pull/30873) — the breaking-change marker signals a shift from proxy-wide OTEL configuration to admin-owned, identity-scoped trace destinations.

## 3. New Model & Hardware Support
- [PR #35555](https://github.com/BerriAI/litellm/pull/35555): Adds `gemini/...` entries for `gemini-robotics-er-2-preview` and `gemini-robotics-er-1.6-preview` to the cost map and backup.
- [Issue #26765](https://github.com/BerriAI/litellm/issues/26765) (open): Requests `azure_ai/gpt-image-2` pricing in `model_prices_and_context_window.json`.
- [Issue #27094](https://github.com/BerriAI/litellm/issues/27094) (open): AI21 model list is stale — only `jamba-large-1.7` and `jamba-mini-2` remain after J2 retirement.
- No new hardware/quantization backend work in this window.

## 4. Performance & Optimization
- [Issue #31263](https://github.com/BerriAI/litellm/issues/31263): Rust migration targets sub-1ms gateway overhead; beta tester group is open.
- [PR #35347](https://github.com/BerriAI/litellm/pull/35347): `RedisCache` now holds strong references to service-logging `create_task()` results, preventing GC mid-flight and silent Redis telemetry drops under load.
- [PR #35542](https://github.com/BerriAI/litellm/pull/35542): Key-level `model_rpm_limit`/`model_tpm_limit` overrides are no longer clamped by team limits, eliminating double-counted enforcement that halved effective throughput.
- [PR #34760](https://github.com/BerriAI/litellm/pull/34760): DashScope cost tracking now selects a single pricing tier per request (matching Alibaba Model Studio billing) instead of graduated income-tax-style slicing.
- [PR #35521](https://github.com/BerriAI/litellm/pull/35521): Adds net auto-router savings to the cost-optimization dashboard, separating cache/compression credits from model-switch savings with opposite math.
- [Issue #31555](https://github.com/BerriAI/litellm/issues/31555) (open): Proposes a Markov-decision-process routing strategy for adaptive token-cost arbitrage; under discussion.

## 5. Stability & Regressions
**Security fixes (PRs in flight):**
- [PR #35553](https://github.com/BerriAI/litellm/pull/35553): Fixes `custom_auth` configuration disabling budget/model checks for *all* requests, including Key/JWT/OAuth2 identities that custom auth never saw.
- [PR #35561](https://github.com/BerriAI/litellm/pull/35561): Response IDs not issued by this proxy, or minted without an owner (no `user_id`/`team_id`), were readable by any key; now rejected fail-closed.
- [PR #35557](https://github.com/BerriAI/litellm/pull/35557): Blocked `PROXY_ADMIN` keys no longer authenticate from the auth cache; stale entries purged.

**Cost/spend correctness:**
- [Issue #33871](https://github.com/BerriAI/litellm/issues/33871) (open): Normal requests never write project spend, so project budgets and alerts never enforce — no fix PR yet.
- [Issue #27038](https://github.com/BerriAI/litellm/issues/27038) (open): `disable_end_user_cost_tracking` does not gate `SpendLogs.end_user` or `LiteLLM_DailyEndUserSpend` writes.
- [PR #35558](https://github.com/BerriAI/litellm/pull/35558): Reseeds `spend:tag:*` counters from the durable tag row to stop cross-pod budget divergence.
- [PR #35562](https://github.com/BerriAI/litellm/pull/35562): Background spend-entity update failures now surface at error level and the task is retained.

**Correctness bugs:**
- [Issue #35544](https://github.com/BerriAI/litellm/issues/35544) / [#35543](https://github.com/BerriAI/litellm/issues/35543): `RejectedRequestError` prefixes leak into completion content; `async_pre_call_hook` `str` returns are unreachable on `/v1/chat/completions` (`call_type == "acompletion"`). Both fixed by [PR #35556](https://github.com/BerriAI/litellm/pull/35556).
- [Issue #27144](https://github.com/BerriAI/litellm/issues/27144) (open): ChatGPT/Codex streaming drops tool-call args when `response.function_call_arguments.done` arrives without deltas.
- [Issue #27083](https://github.com/BerriAI/litellm/issues/27083) (open): `openai/whisper-1` via OpenRouter fails transcription.
- [Issue #27093](https://github.com/BerriAI/litellm/issues/27093) (open): Gemini/Vertex AI errors when `cache_control` and `tool_choice` are passed together.
- [Issue #25757](https://github.com/BerriAI/litellm/issues/25757) (open): Model-routed file IDs exceed Azure OpenAI's 64-char `file.id` limit.
- Resolved: [Issue #26192](https://github.com/BerriAI/litellm/issues/26192) (PrismaWrapper 30s deadlock on RDS IAM expiry), [Issue #26554](https://github.com/BerriAI/litellm/issues/26554) (Bedrock Converse blank text block), [Issue #26547](https://github.com/BerriAI/litellm/issues/26547) (guardrail dropping streaming responses), [Issue #26548](https://github.com/BerriAI/litellm/issues/26548) (aiohttp non-ASCII headers), [Issue #26555](https://github.com/BerriAI/litellm/issues/26555) (non-admin key edit 403).

## 6. What This Means for Application Developers
- If you use `custom_auth`, verify the fix in [#35553](https://github.com/BerriAI/litellm/pull/35553) — current behavior may be bypassing budget and model authorization for all traffic.
- Pre-call hooks that short-circuit with a string response will work on async endpoints once [#35556](https://github.com/BerriAI/litellm/pull/35556) merges.
- Multi-tenant OTEL tracing is arriving: admins will register identity-scoped trace destinations, and `/team/info` will disclose which exporters receive a team's traces. Plan observability migration around the `otel/v2` breaking change.
- Team governance is tightening: per-model team budgets with key overrides ([#35545](https://github.com/BerriAI/litellm/pull/35545)) and default-org assignment for SSO/SCIM-provisioned teams ([#35540](https://github.com/BerriAI/litellm/pull/35540)).
- Track the Rust migration ([#31263](https://github.com/BerriAI/litellm/issues/31263)) if sub-millisecond gateway overhead is a hard requirement — the beta group is open.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth Digest — 2026-08-02

## 1. Today's Highlights

Backend CI is green again: six tests that had been failing on `main` and blocking every open PR were fixed by [#7728](https://github.com/unslothai/unsloth/pull/7728), [#7726](https://github.com/unslothai/unsloth/pull/7726), and [#7730](https://github.com/unslothai/unsloth/pull/7730). Windows installer/updater hardening continued with fixes for an updater that could never complete ([#7705](https://github.com/unslothai/unsloth/pull/7705)), setup aborts on inaccessible `PATH` entries ([#7696](https://github.com/unslothai/unsloth/pull/7696)), and a new PR for unreadable llama.cpp installs ([#7735](https://github.com/unslothai/unsloth/pull/7735)). Two fixes for silently corrupted `.venv_t5_*` sidecar venvs landed as PRs ([#7725](https://github.com/unslothai/unsloth/pull/7725), [#7721](https://github.com/unslothai/unsloth/pull/7721)), while a new data-loss bug was reported where 5–6 chat revisions delete all prior responses ([#7732](https://github.com/unslothai/unsloth/issues/7732)).

## 2. Releases & Breaking Changes

No releases in the last 24 hours. In-flight compatibility changes to track:

- **torch 2.12**: [PR #7495](https://github.com/unslothai/unsloth/pull/7495) will reuse the torch 2.10 prebuilt flash-attn / causal-conv1d / mamba-ssm wheels on torch 2.12, since upstream publishes no torch 2.11-tagged builds. Studio on torch 2.12 currently falls back to source builds.
- **DiffusionGemma + transformers 4.57.6** ([#6347](https://github.com/unslothai/unsloth/issues/6347)): multi-GPU inference/training for `diffusiongemma-26B-A4B-it` remains blocked on this pin.
- **Sidecar validation semantics** ([#7715](https://github.com/unslothai/unsloth/issues/7715)): the validity check for `.venv_t5_*` is changing from METADATA-version-only to content-level (RECORD) verification — affects anyone who customizes Studio virtualenvs.

## 3. New Model & Hardware Support

No new models released in this window. Ecosystem/hardware activity:

- **AMD ROCm**: active bug-fix surface — segfault on Radeon 8060S (gfx1100) / ROCm 6.3 ([#7331](https://github.com/unslothai/unsloth/issues/7331)), iGPU-over-dGPU auto-selection producing "device kernel image is invalid" ([#7669](https://github.com/unslothai/unsloth/issues/7669)), and APU unified-memory fit checks now using GPU-reported free memory instead of `psutil` available RAM ([#6975](https://github.com/unslothai/unsloth/pull/6975)).
- **AMD Docker/ROCm image** ([#6230](https://github.com/unslothai/unsloth/issues/6230)): open feature request for an ROCm container mirroring the NVIDIA/Blackwell image.
- **Virtualised Apple Metal**: [PR #7717](https://github.com/unslothai/unsloth/pull/7717) pins GGUF inference to CPU on virtualised Macs (fixes gibberish output) and clamps parallel slots under MTP.
- **Multi-GPU fine-tuning in Studio** ([#5764](https://github.com/unslothai/unsloth/issues/5764)): on the roadmap; Studio currently uses one GPU for LoRA even when more are available.

## 4. Performance & Optimization

- **Faster Studio cold start** ([#7607](https://github.com/unslothai/unsloth/pull/7607)): the listening socket is now bound before heavy imports, so the login screen appears without waiting ~6 seconds of torch import — eliminates the connection-refused/blank-tab window on GPU boxes.
- **APU memory headroom** ([#6975](https://github.com/unslothai/unsloth/pull/6975)): using GPU-reported free memory for unified-memory APUs lets models load on bare metal where the previous `psutil`-based RAM check would reject them.
- **DiffusionGemma VRAM** ([#7574](https://github.com/unslothai/unsloth/issues/7574), closed): a hardcoded `NGL=99` forced full-VRAM loads and caused OOM (e.g., 16013 MiB allocation failure) even with GPU layers set to 0; the setting is now honored.
- **torch 2.12 prebuilt wheels** ([#7495](https://github.com/unslothai/unsloth/pull/7495)): avoids source-build accelerator kernels on 2.12 installs once merged.

## 5. Stability & Regressions

Ranked by severity:

1. **Data loss — chat revisions wipe history** ([#7732](https://github.com/unslothai/unsloth/issues/7732), open, no fix PR): after 5–6 refreshes of a response, all responses past the first are deleted. AMD W7900/W7500, ROCm 7.13, package 2026.7.6.
2. **Startup segfault on AMD gfx1100** ([#7331](https://github.com/unslothai/unsloth/issues/7331), open, no fix PR): RAG embeddings warmup crashes on Radeon 8060S / ROCm 6.3.
3. **ROCm wrong-device auto-selection** ([#7669](https://github.com/unslothai/unsloth/issues/7669), open): Studio-installed prebuilt picks gfx1036 iGPU over gfx1101 dGPU → "device kernel image is invalid". Same defect as #7624 via a different install path.
4. **Undetected sidecar corruption** ([#7715](https://github.com/unslothai/unsloth/issues/7715), open): truncated files inside `.venv_t5_*` pass validation until the worker dies at import. Fix PRs [#7725](https://github.com/unslothai/unsloth/pull/7725) and [#7721](https://github.com/unslothai/unsloth/pull/7721) add RECORD/content checks.
5. **`validate_dataset` KeyError on default output** ([#7729](https://github.com/unslothai/unsloth/pull/7729), open fix): `RawTextDataLoader` defaults to tokenized output (`input_ids`/`attention_mask`/`labels`), but validation assumed a `"text"` column — breaks training on default data-loader output.
6. **Gibberish GGUF output on virtualised Metal** ([#7717](https://github.com/unslothai/unsloth/pull/7717), open fix): CPU-pinning fix in review.
7. **CI red on `main`** ([#7727](https://github.com/unslothai/unsloth/issues/7727), open): all six failures fixed by [#7728](https://github.com/unslothai/unsloth/pull/7728) / [#7730](https://github.com/unslothai/unsloth/pull/7730), caused by #7375's interrupted-download guard.
8. **Jinja template injection hazard** ([#7731](https://github.com/unslothai/unsloth/pull/7731), open fix): caller template text is spliced into Jinja string literals without escaping in `construct_chat_template` — correctness/security risk for custom templates.
9. **Download ETA overflow** ([#7667](https://github.com/unslothai/unsloth/issues/7667), open): a 6.8 GB DeepSeek-OCR-2 download briefly displayed "102 B/s, 753d 5h left".
10. **Regression: wrong default model after update** ([#7374](https://github.com/unslothai/unsloth/issues/7374), closed): Studio loaded Qwen 3.5 4B instead of the user's Gemma-4-26B-A4B default; closed.
11. **Windows updater/setup breakage** ([#7705](https://github.com/unslothai/unsloth/pull/7705), [#7696](https://github.com/unslothai/unsloth/pull/7696), [#7735](https://github.com/unslothai/unsloth/pull/7735)): in-app updates could not complete on normal current-user installs; setup aborted on unreadable `PATH` entries and llama.cpp installs. Fixes landed or in review.
12. **T4 BF16/FP16 dtype mismatch** ([#4970](https://github.com/unslothai/unsloth/issues/4970), closed): finetuning Qwen3.5-2B on T4 via Studio — closed in tracker.

## 6. What This Means for Application Developers

- **Windows desktop users**: broken in-app updates and setup failures on per-user `PATH` quirks are actively being fixed ([#7705](https://github.com/unslothai/unsloth/pull/7705), [#7696](https://github.com/unslothai/unsloth/pull/7696), [#7735](https://github.com/unslothai/unsloth/pull/7735)). Expect updater reliability to improve in the next desktop bundle.
- **AMD GPU users**: ROCm support remains fragile. Open bugs cover startup segfaults ([#7331](https://github.com/unslothai/unsloth/issues/7331)) and iGPU/dGPU mis-selection ([#7669](https://github.com/unslothai/unsloth/issues/7669)); pin known-good ROCm/llama.cpp combinations and validate GPU selection before deploying on Radeon.
- **Chat data integrity**: the revision-refresh data loss bug ([#7732](https://github.com/unslothai/unsloth/issues/7732)) is a reason to export conversations before iterative regeneration in Studio until a fix lands.
- **Studio is converging on operator-grade features**: batch training queues ([#7059](https://github.com/unslothai/unsloth/issues/7059)), token usage analytics/guardrails ([#7214](https://github.com/unslothai/unsloth/issues/7214)), Markdown export ([#7662](https://github.com/unslothai/unsloth/issues/7662)), a reworked train-page wizard ([#7633](https://github.com/unslothai/unsloth/pull/7633)), and a unified GGUF recommendation policy across pickers ([#7733](https://github.com/unslothai/unsloth/pull/7733)). The login-before-imports change ([#7607](https://github.com/unslothai/unsloth/pull/7607)) also makes Studio easier to put behind health checks/proxies.
- **Custom chat templates**: if you build or inject templates programmatically, review [#7731](https://github.com/unslothai/unsloth/pull/7731) — unescaped template splicing can corrupt generated prompts or enable injection.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*