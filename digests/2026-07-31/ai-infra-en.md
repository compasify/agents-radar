# AI Infrastructure Digest 2026-07-31

> Generated: 2026-07-31 01:46 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# Cross-Project Comparison Report — Inference & Model Infrastructure
**Date:** 2026-07-31 · **Scope:** vLLM, SGLang, llama.cpp, Ollama, LiteLLM, Unsloth

---

## 1. Ecosystem Overview

The three inference engines — vLLM, SGLang, and llama.cpp — are converging on the same next-generation model family (sparse/hybrid attention architectures such as Kimi-K3, DeepSeek-V4, and MiniMax-M3), while differentiating on hardware reach: Blackwell-specific kernels, ROCm/Ascend/RDNA4 enablement, and local-device breadth. Llama.cpp is shipping the fastest release cadence and now covers MiniMax-M3 end-to-end plus cross-backend ternary (Q2_0) inference, effectively pulling edge/CPU-only deployments into the same model-generation wave as datacenter serving. Meanwhile, the gateway layer (LiteLLM) and fine-tuning layer (Unsloth) are being pulled into the agentic-serving conversation through streaming spend accounting, guardrail enforcement, and MCP/Studio integration. The binding constraint across every project is reliability: the window produced critical regressions in all six — cross-request content leakage, illegal memory access, multi-GPU IPC faults, and guardrail bypasses — indicating the ecosystem is shipping architectural features faster than it is hardening concurrency and lifecycle paths.

---

## 2. Activity Comparison

| Project | Issues cited¹ | PRs cited¹ | Releases (24h) | Layer |
|---|---|---|---|---|
| vLLM | 15 | 13 | None | Serving engine |
| SGLang | 19 | 16 | None | Serving engine |
| llama.cpp | 10 | 25 | **10 tags** (b10186–b10199) | Local runtime |
| Ollama | 20 | 9 | None | Desktop/local distribution |
| LiteLLM | 9 | 12 | 1 pre-release (v1.96.0-dev.1) | Gateway/proxy |
| Unsloth | 10 | 59 | None | Fine-tuning / Studio |

¹Counts for vLLM, SGLang, Ollama, and LiteLLM reflect issues/PRs cited in each digest, not total window volume. Unsloth counts are explicitly reported in its digest ("10 issues and 59 PRs updated").

**Observations:**
- **llama.cpp** had by far the highest release velocity — 10 tags in 24 hours, all incremental and non-breaking, with the MiniMax-M3 prefill change as the headline.
- **Unsloth** dominates raw PR churn (59 updated), almost entirely in the Studio/desktop product surface (MCP OAuth, Markdown export, chat dispatch) rather than training kernels.
- **Ollama** shows the worst issue-to-fix ratio among active projects: 20 cited issues vs 9 PRs, with the most severe (cross-request leakage, tool-calling regression) still unfixed.
- **SGLang** carries the largest breaking-change risk in flight: PR #32114 deletes `cutlass_mla`, non-Marlin GPTQ, AWQ AOT, and Dual Chunk Flash Attention backends — a mandatory audit item before upgrading.

---

## 3. Model Support Race

| Architecture | vLLM | SGLang | llama.cpp | Ollama |
|---|---|---|---|---|
| **Kimi-K3** (sparse/hybrid) | Enablement PRs: Compressed-Tensors quantization + ROCm gfx942 MXFP4 expert path; TP=8 IMA still open | Day-0 roadmap + DSPARK variant; Xid 13 crash at ~218k ctx, FP8 KV 3.89× regression | — | Cloud-only; `:cloud` tag fallback PR |
| **DeepSeek-V4 / SM120** | SM100 DSA/MTP routing + CuTeDSL kernels | SM120 plan: DeepSeek V4 marked complete; Flash in progress | — | — |
| **MiniMax-M3 (MSA)** | — | — | **Complete** (base MSA + vision + stock-ggml prefill) | — |
| **Inkling (Thinking Machines)** | — | Day-0 tracking (#31359) | Architecture opened: GGUF converter + graph build + banded FA | — |
| **Motif 3 (GDLA)** | — | — | Opened (Beta PR) | — |
| **Ternary / Q2_0** | — | — | CUDA + Metal + CPU; x86 VNNI 3× dot product | — |
| **Ascend NPU (Atlas A5)** | — | MLA + FP8 KV + chunked prefill | — | — |
| **AMD gfx1250 / RDNA4** | Initial enablement (ROCm rework) | Enablement PR; no FP4 scaling | HIP RDNA3/4 MMQ tuning | — |
| **Gemma 4 multimodal** | — | — | DSpark draft support in progress | MLX vision PR (open) |

LiteLLM landed no model/hardware enablement (only pricing requests for Kimi-K3, Inkling, Gemini Robotics). Unsloth announced no new architectures but handles Qwen3.6-27B MTP and Gemma-4-26B GGUFs in Studio tests.

**Who is ahead:**
- **Local/edge breadth — llama.cpp.** It is the only runtime with a complete next-gen MSA stack (MiniMax-M3, including vision) and the only one with cross-backend ternary inference. Motif 3 and Inkling graph builders were opened before any server engine has them.
- **Datacenter serving — vLLM for Kimi-K3, SGLang for DeepSeek-V4/SM120.** vLLM's Kimi-K3 enablement (quantization + ROCm path) is more concrete than SGLang's day-0 tracking, but both are pre-release and blocked by crashes. SGLang leads on DeepSeek-V4 Blackwell polish and non-NVIDIA reach (Ascend NPU).
- **Ollama** contributes distribution (cloud fallback, MLX vision) but zero kernel/model work of its own.

---

## 4. Performance Frontier

**KV cache & long context** — the single largest concentration of effort:
- FP8 KV-cache regressions: SGLang reports 3.89× decode loss (674.94→173.32 tok/s) when FP8 KV is combined with DSPARK on Kimi-K3/H200 — users are advised to stay on BF16.
- Next-generation KV formats: vLLM has an NVFP4 KV prototype with 245K context on RTX 5090 (missing FlashInfer wiring) and an open INT8 KV-cache request.
- Distributed/sparse KV is becoming a first-class roadmap item: SGLang's distributed KV cache for agentic workloads, HiSparse (hot working set on device, cold KV offloaded), and vLLM's layerwise/sparse KV-offloading RFC all target long-sequence bottlenecks.

**Kernel engineering (Blackwell-specific)**:
- vLLM is deep in SM100/SM120 custom work: CuTeDSL fused query kernels for DSA sparse attention, GEMM K-specialization for GLM-5.2, MTP draft top-k sharing, and programmatic dependent launch to hide kernel-launch latency.
- SGLang's SM120 plan tracks DeepGEMM MQA Indexer (done) and DeepSeek-V4 Flash (in progress).
- FlexAttention is being deprecated in vLLM (RFC #50324) — new attention development should target TritonAttention.

**Quantization**:
- llama.cpp owns the frontier: Q2_0 shipped on CUDA, Metal, and CPU, enabling Ternary-Bonsai-class models; the x86 VNNI dot product is bit-exact at 3× speedup.
- SGLang restored MXFP8 online quantization (broken by an AMD-side regression) and proposes a Blackwell `cute-dsl` backend for `mm_mxfp8`.
- vLLM added XPU W4A16 backend selection via environment variable.

**Scheduling & serving systems**:
- vLLM skips logits/sampling for unfinished prefills in chunked prefill — a clean batch-efficiency win.
- LiteLLM improved streamed usage accounting (requests `include_usage` upstream, strips it client-side) and keeps provider prompt caches warm across auto-routed model tiers.
- llama.cpp's server gained `inp embd` next-token generation (embedding-based steering without string round-trips), and `/slots` will expose real-time per-slot throughput for gateway observability.

---

## 5. Layer Positioning

- **Serving engines (vLLM, SGLang)** occupy the same production multi-GPU niche with different bets. vLLM is the conservative kernel-depth play: mature ROCm/CUDA paths, Blackwell DSA/MTP optimization, and slow-but-steady quantization enablement. SGLang is the day-0 and new-attention play: DSPARK/HiSparse/distributed-KV roadmaps, day-0 tracking for Kimi-K3 and Inkling, and aggressive hardware expansion (Ascend, RDNA4, MNNVL) — at the cost of more churn and fresher regressions.
- **llama.cpp** is the local runtime and the ecosystem's architectural front door: new model archetypes land here first (MSA, GDLA, Inkling, DSpark draft), and its optimization targets CPU/Metal/Vulkan/SYCL as seriously as CUDA. It is the reference point for "can this model run on commodity hardware?".
- **Ollama** is a distribution/UX layer wrapping llama.cpp. Its value is API compatibility (OpenAI wire format), cloud tag routing, desktop ergonomics, and runner lifecycle — not kernels. Its digest is dominated by API-semantics and concurrency-safety bugs, which is the cost of being the user-facing shim.
- **LiteLLM** is the control plane: model-agnostic, with zero kernel/hardware activity. Its optimization surface is spend accounting for reasoning models, prompt-cache warmth across route tiers, budget semantics, enterprise S3/KMS logging, and guardrail persistence. It is the only project in this window with enterprise-security work.
- **Unsloth** anchors the fine-tuning layer and is diverging into Studio (a desktop product with MCP server support and parallel chat dispatch). Its serving relevance is indirect — GGUF exports, 4-bit + vLLM compatibility (still broken for Gemma3, issue #2274) — and its current activity is training UX, not training performance.

---

## 6. Trend Signals

1. **Sparse/hybrid attention models are the center of gravity.** Kimi-K3 and DeepSeek-V4-family workstreams exist in every runtime; MiniMax-M3 is done in llama.cpp. Expect day-0 support to become a purchasing criterion — but with production caveats: DSPARK + FP8 KV is unsafe (SGLang #32938), and >200K-token B300 serving is risky (SGLang #32855).
2. **Blackwell-specific kernels are the new serving moat.** SM100/SM120 CuTeDSL, DSA routing, and DeepGEMM work in both server engines indicate that top-tier decode latency is now architecture-specific. The corollary is that non-Blackwell stacks (Intel Arc/XPU, pre-Blackwell CUDA) are accumulating unfixed regressions — vLLM, llama.cpp, and SGLang all have open Intel Arc/SYCL correctness bugs.
3. **Agent-correctness is a new stability class.** Reasoning-context re-verbalization (vLLM #49281), tool-calling regressions (Ollama #17444), guardrail bypass on streaming responses (LiteLLM #35257), and cross-request vision content leakage under client aborts (Ollama #17475) all surfaced this window. Concurrency safety around aborted requests and shared slots is the next hardening battleground.
4. **OpenAI wire-format compatibility is spreading.** Ollama is aligning its `/v1/chat/completions` stream chunk-for-chunk with OpenAI (finish_reason on its own chunk), and LiteLLM is changing streamed usage semantics. Strict parsers and SDKs will need updates; plan for breakage.
5. **FP8-for-everything has hit a wall.** The 3.89× DSPARK regression, cache-write cost mispricing (LiteLLM #33772), and the fact that FP8 paths are being reverted or made opt-in suggest BF16 remains the safe default for next-gen hybrid models.
6. **Edge/local total cost is falling.** Q2_0 across CUDA/Metal/CPU plus the 3× VNNI CPU speedup makes ternary models viable on commodity hardware — and llama.cpp's MiniMax-M3 completion means feature parity with server engines is arriving locally first.
7. **Non-NVIDIA hardware quality is the persistent weak spot.** Intel Arc multi-GPU is broken across vLLM and llama.cpp; Unsloth has a confirmed ROCm iGPU/dGPU mis-selection crash; gfx1250 is initial-stage everywhere. Multi-backend deployments should budget for debug time.

### What application/agent developers should do now
- **Pin Ollama 0.32.1** for tool-calling agents and isolate concurrent vision workloads until #17444/#17475 are fixed.
- **Re-validate cost dashboards** when LiteLLM #35290 propagates — reasoning-model spend will jump toward real token counts.
- **Stay on BF16 KV cache** for Kimi-K3/DeepSeek-V4-Pro class models; treat FP8 + DSPARK as unsupported.
- **Audit SGLang dependencies** against #32114 (deleted attention/quantization backends) before upgrading.
- **Prefer TritonAttention** over FlexAttention for new vLLM attention integrations.
- **Watch Ollama streaming-wire-format changes** (#17485) and LiteLLM team-budget semantics reversion (#35299) as breaking-change candidates.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest — 2026-07-31

## Today's Highlights
No new vLLM release was published in the last 24h. The most significant activity is around **Kimi-K3 enablement** (Compressed-Tensors quantization + ROCm gfx942 path) and continued **SM100/Blackwell kernel work** for DSA/MTP decode. Several hard **Intel Arc XPU multi-GPU stability bugs** remain highly visible, and a new RFC proposes deprecating the FlexAttention backend.

## Releases & Breaking Changes
- **No new releases in the last 24h.**
- **RFC: Deprecate FlexAttention backend** — FlexAttention is no longer selected by default on ROCm and trails TritonAttention on CUDA; RFC proposes dropping it. Users relying on `FLEXATTENTION` backend should track [#50324](https://github.com/vllm-project/vllm/issues/50324).

## New Model & Hardware Support
- **Kimi-K3 Compressed-Tensors support** — Adds `SupportsQuant` and packed-module mapping for Kimi-K3 quantized models. [#50500](https://github.com/vllm-project/vllm/pull/50500)
- **Kimi-K3 on ROCm/gfx942** — Enables MXFP4 expert path on MI300X using AITER FlyDSL kernels; pads TP-sharded MLA query heads for TP8. [#50319](https://github.com/vllm-project/vllm/pull/50319)
- **SM100 DSA routing** — Routes DeepSeek-V3.2/GLM-5.2 DSA models to the SM100-optimized implementation. [#49790](https://github.com/vllm-project/vllm/pull/49790)
- **ROCm gfx1250 enablement** — Initial support for gfx1250, including ROCm version rework and arch-gated code paths. [#46516](https://github.com/vllm-project/vllm/pull/46516)
- **NVFP4 KV cache on SM120** — Working prototype with 245K context on RTX 5090; flashinfer kernels exist but vLLM wiring is missing. [#49011](https://github.com/vllm-project/vllm/issues/49011)
- **INT8 KV cache request** — Open feature request to add INT8 KV-cache quantization alongside FP8. [#33480](https://github.com/vllm-project/vllm/issues/33480)
- **XPU W4A16 backend selection** — New `VLLM_XPU_INC_W4A16_BACKEND` env var for explicit INC backend selection on Intel XPU. [#50048](https://github.com/vllm-project/vllm/pull/50048)

## Performance & Optimization
- **MTP draft decode optimization** — Shares top-k indices across MTP draft steps to avoid repeated top-k computation. [#49793](https://github.com/vllm-project/vllm/pull/49793)
- **Programmatic dependent launch for DSA decode kernels** — Overlaps launch latency of back-to-back small kernel launches on CUDA. [#50230](https://github.com/vllm-project/vllm/pull/50230)
- **SM100 CuTeDSL fused query kernel** — New fused query preprocessing for DSA sparse attention, registered as a custom op. [#49792](https://github.com/vllm-project/vllm/pull/49792)
- **CuTe DSL skinny GEMM for GLM-5.2** — Adds compile-time `K` specialization and prefetching for SM100. [#49791](https://github.com/vllm-project/vllm/pull/49791)
- **Skip logits/sampling for unfinished prefills** — Avoids wasted sampling-logit rows in chunked-prefill steps. [#49171](https://github.com/vllm-project/vllm/pull/49171)
- **Remove sparse-MLA q-head padding for FlashInfer ≥0.6.14** — Relaxes DSv4 attention constraints on SM100/SM120 decode. [#48047](https://github.com/vllm-project/vllm/pull/48047)
- **Benchmark probe requests** — Adds `--probe-request-rate` to `vllm bench serve` to measure MM request interference. [#49611](https://github.com/vllm-project/vllm/pull/49611)
- **Single-prompt throughput gap vs llama.cpp** — On AMD Strix Halo, vLLM delivers ~7.5 tok/s vs llama.cpp ~50 tok/s for GPT-OSS-120B single-prompt. Open architectural discussion. [#34579](https://github.com/vllm-project/vllm/issues/34579)
- **Layerwise/sparse KV-cache offloading RFC** — Proposed to reduce long-sequence KV-cache bottleneck, especially for sparse-attention models like GLM-5.2. [#48203](https://github.com/vllm-project/vllm/issues/48203)

## Stability & Regressions
1. **Kimi-K3 illegal-memory-access under concurrent load** — TP=8 + prefix caching crashes with recurring IMA on Kimi-K3. No fix PR yet. [#50147](https://github.com/vllm-project/vllm/issues/50147)
2. **DeepSeekV4-Flash incorrect output with inline system messages** — Regression from PR #46025: inline system messages are re-rendered/re-verbalized incorrectly in chat templates. [#46710](https://github.com/vllm-project/vllm/issues/46710)
3. **Qwen3.5-GDN torch.compile stride mismatch at warmup** — Recurrence of #29014 on splitting_ops boundary; crashes with `torch.compile`. [#50046](https://github.com/vllm-project/vllm/issues/50046)
4. **Intel Arc XPU TP=2 faults** — Dual Arc B70 (Battlemage) still reproduces GP fault + Xe BCS engine reset; closed as known, but related dual Arc B50 `zeMemOpenIpcHandle` issue remains open. [#41663](https://github.com/vllm-project/vllm/issues/41663), [#48953](https://github.com/vllm-project/vllm/issues/48953)
5. **Qwen3.5 CUDA illegal memory access in GDN kernel** — Reproducible on H200 with nightly vLLM. [#34948](https://github.com/vllm-project/vllm/issues/34948)
6. **Endless `!` output on Intel B60 with long context** — Open bug affecting Qwen3.5/3.6 on XPU. [#43428](https://github.com/vllm-project/vllm/issues/43428)
7. **Batch invariance broken on SM<90 with torch.compile/CUDA graphs** — Affects Ampere/Ada GPUs. [#39096](https://github.com/vllm-project/vllm/issues/39096)
8. **Whisper timestamp drift for audio >30s** — Segment-level timestamps offset by ~0.5s per segment. [#32588](https://github.com/vllm-project/vllm/issues/32588)
9. **Responses API `reasoning.context` ignored** — Prior-turn reasoning is re-verbalized as visible `<think>` text, a correctness bug for agent loops. [#49281](https://github.com/vllm-project/vllm/issues/49281)
10. **MIG memory lookup fix (PR)** — Fixes GPU memory lookup for MIG partitions by preserving UUID-based NVML handles. [#50463](https://github.com/vllm-project/vllm/pull/50463)

## What This Means for Application Developers
- **Kimi-K3 support is maturing** across quantization and ROCm; expect it to land soon, but production users should wait for fixes around TP=8 prefix-caching crashes.
- **SM100/Blackwell work is accelerating**: DSA/MTP kernel optimization PRs are in flight, so early adopters on B200/GB200 should see meaningful decode latency improvements.
- **Avoid Intel Arc B-series TP=2 in production** — XPU multi-GPU IPC failures remain unresolved across Battlemage variants.
- **Be cautious with `torch.compile` on Qwen3.x/GDN models** on pre-Blackwell GPUs; stride/batch-invariance issues are still open.
- **FlexAttention is on its way out** — new custom attention work should target TritonAttention rather than FlexAttention. See [#50324](https://github.com/vllm-project/vllm/issues/50324).
- **Agent builders using `/v1/responses`** should verify reasoning-context handling; current behavior can surface hidden reasoning as visible `<think>` text. See [#49281](https://github.com/vllm-project/vllm/issues/49281).

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest — 2026-07-31

## Today's Highlights

Kimi-K3/DSPARK remains the dominant theme: PR [#32828](https://github.com/sgl-project/sglang/pull/32828) lands a fix for DCP + DSPARK draft KV pool out-of-bounds access on hybrid linear-attention targets, while two fresh reports flag an Xid 13 crash at ~218k token context on B300 ([#32855](https://github.com/sgl-project/sglang/issues/32855)) and a 3.89x decode-throughput regression when FP8 KV cache is combined with DSPARK on H200 ([#32938](https://github.com/sgl-project/sglang/issues/32938)). Platform momentum continues: the Blackwell SM120 plan marks DeepSeek V4 support complete ([#19637](https://github.com/sgl-project/sglang/issues/19637)), AMD RDNA4 (gfx1250) enablement is proposed ([#32754](https://github.com/sgl-project/sglang/pull/32754)), and day-0 tracking is now open for Kimi K3 ([#32607](https://github.com/sgl-project/sglang/issues/32607)) and Inkling ([#31359](https://github.com/sgl-project/sglang/issues/31359)).

## Releases & Breaking Changes

No releases in the last 24 hours. In-flight breaking changes to watch:

- [#32114](https://github.com/sgl-project/sglang/pull/32114) — deletes `cutlass_mla` attention backend, non-Marlin GPTQ CUDA kernels, AWQ AOT kernels, and Dual Chunk Flash Attention (no CI coverage; disabled on GB300/SM10.3). Audit any pinned quantization/attention paths.
- [#32984](https://github.com/sgl-project/sglang/pull/32984) — MLX integration upgrades to Torch 2.13 and clarifies tensor-bridge ownership.

## New Model & Hardware Support

- **Kimi K3** — day-0 roadmap ([#32607](https://github.com/sgl-project/sglang/issues/32607)) with cookbook, Day0 PR [#32541](https://github.com/sgl-project/sglang/pull/32541), DSpark variant, and bug tracking [#32970](https://github.com/sgl-project/sglang/issues/32970).
- **Inkling (Thinking Machines)** — day-0 tracking ([#31359](https://github.com/sgl-project/sglang/issues/31359)): 975B total / 41B active MoE, 1M-token context, native text/image/audio reasoning.
- **AMD gfx1250 (RDNA4 / RX 9070 XT)** — PR [#32754](https://github.com/sgl-project/sglang/pull/32754) adds architecture-specific paths (no MFMA/WMMA FP4 scaling).
- **Ascend NPU** — PR [#29641](https://github.com/sgl-project/sglang/pull/29641) adds MLAProlog + FP8 KV cache (MLA only) + chunked prefill for Atlas A5 (950PR/DT); NPU GSM8K accuracy coverage expanded to 7 models ([#32649](https://github.com/sgl-project/sglang/pull/32649)).
- **CUDA PyTorch 2.13** — upgrade checklist [#31862](https://github.com/sgl-project/sglang/issues/31862) tracks pre-merge items for [#28836](https://github.com/sgl-project/sglang/issues/28836).
- **NVIDIA FlashInfer MNNVL** — allreduce-only backend PR [#30700](https://github.com/sgl-project/sglang/pull/30700) extends fused-allreduce coverage beyond the existing `kARResidualRMSNorm` path.

## Performance & Optimization

- **SM120/Blackwell optimization plan** ([#19637](https://github.com/sgl-project/sglang/issues/19637)): DeepSeek V4 and DeepGEMM MQA Indexer complete; DeepSeek V4 Flash and further items in progress.
- **Distributed KV cache for agentic workloads** ([#21846](https://github.com/sgl-project/sglang/issues/21846)): roadmap addressing PD disaggregation + HiCache bottlenecks; PP + HiCache consistency fix plan in [#22607](https://github.com/sgl-project/sglang/issues/22607).
- **HiSparse** ([#28874](https://github.com/sgl-project/sglang/issues/28874)): long-context sparse-attention roadmap keeping a hot KV working set on device, cold KV offloaded.
- **Context parallelism** ([#21788](https://github.com/sgl-project/sglang/issues/21788)): 2026 Q3 roadmap; decode CP + Helix parallelism next steps tracked in [#29736](https://github.com/sgl-project/sglang/issues/29736). Ngram speculative decoding roadmap also active ([#21052](https://github.com/sgl-project/sglang/issues/21052)).
- **Diffusion** ([#31854](https://github.com/sgl-project/sglang/pull/31854)): CUDA-IPC zero-staging all-to-all for 2-rank Ulysses (opt-in) removes per-layer rendezvous + staging copies.
- **MXFP8 online quantization** ([#32953](https://github.com/sgl-project/sglang/pull/32953)): restores `--quantization mxfp8` for BF16 checkpoints broken by an AMD-side regression; Blackwell `cute-dsl` backend for `mm_mxfp8` also proposed ([#32950](https://github.com/sgl-project/sglang/issues/32950)).
- **Realtime ASR** ([#32682](https://github.com/sgl-project/sglang/pull/32682)): encoder-aligned windowing for long audio items in `/v1/realtime`.
- **Weight loading** ([#31859](https://github.com/sgl-project/sglang/pull/31859)): optional no-GDS fastsafetensors loading + page-cache release after shard consumption.
- **GPU Memory Service RFC** ([#27310](https://github.com/sgl-project/sglang/issues/27310)): out-of-process GPU memory management building on the merged weight-cache daemon (#27139).

## Stability & Regressions

Ranked by severity:

1. **Kimi-K3 DSPARK Xid 13 (CTA Not Present) at ~218k context on B300** ([#32855](https://github.com/sgl-project/sglang/issues/32855)) — new crash, no fix PR yet; high impact for long-context serving.
2. **DSpark compact target-verify CUDA Graph illegal memory access on TP8** ([#31023](https://github.com/sgl-project/sglang/issues/31023)) — timing-sensitive; two root causes isolated (cross-TP planning inconsistency, Graph metadata/workspace reuse). RFC [#32432](https://github.com/sgl-project/sglang/issues/32432) proposes explicit metadata/workspace/stream-ownership contracts for dynamic CUDA Graph replay.
3. **FP8 KV cache + DSPARK performance regression** ([#32938](https://github.com/sgl-project/sglang/issues/32938)) — BF16→FP8 E4M3 KV on Kimi-K3/H200 causes 674.94 → 173.32 tok/s at batch 8 (3.89x loss); under investigation.
4. **EPLB silently wrong output with `--moe-a2a-backend none`** ([#32962](https://github.com/sgl-project/sglang/pull/32962)) — silent output corruption with redundant experts (GSM8K drop); fix PR open with rank-invariant dispatch.
5. **NVIDIA compiler segfault serving DeepSeek V4** ([#32830](https://github.com/sgl-project/sglang/issues/32830)) — compiler crash; no fix yet.
6. **HiCache hybrid-Mamba chunk-boundary bug** ([#30850](https://github.com/sgl-project/sglang/pull/30850)) — page-aligned prefix at exact `chunked_prefill_size` multiple never backed up to L2/L3; fix PR open.
7. **`create_custom_parallel_group` non-determinism** ([#32751](https://github.com/sgl-project/sglang/issues/32751)) — missing explicit `group` in `all_gather_object` causes CUDA failures on non-NVIDIA backends.
8. **CI health** ([#17050](https://github.com/sgl-project/sglang/issues/17050)): 2 broken, 3 flaky, 637 recently fixed; CUDA coredump tracker ([#26340](https://github.com/sgl-project/sglang/issues/26340)) continues auto-collecting pr-test.yml crashes.
9. **DCP + DSPARK draft KV pool OOB** — fixed by [#32828](https://github.com/sgl-project/sglang/pull/32828) with static-verify coverage added.
10. **MLX event loop contract** ([#32833](https://github.com/sgl-project/sglang/issues/32833)) — RFC codifying per-step contracts after four backend-neutral reader bugs surfaced in July.

## What This Means for Application Developers

- **Kimi-K3 / DeepSeek-V4-Pro DSPARK users**: stay on BF16 KV cache for now (FP8 regression [#32938](https://github.com/sgl-project/sglang/issues/32938)), and treat >200k-token B300 serving as risky until the Xid 13 crash ([#32855](https://github.com/sgl-project/sglang/issues/32855)) is resolved.
- **Agentic/long-context builders**: the distributed KV cache ([#21846](https://github.com/sgl-project/sglang/issues/21846)), PP-HiCache consistency ([#22607](https://github.com/sgl-project/sglang/issues/22607)), and HiSparse ([#28874](https://github.com/sgl-project/sglang/issues/28874)) roadmaps directly target cross-instance prefix sharing and KV transfer costs — expect material improvements in the coming quarters.
- **Multi-backend deployments**: AMD RDNA4, Ascend NPU, and MLX paths are maturing; non-NVIDIA users should track [#32751](https://github.com/sgl-project/sglang/issues/32751) for a parallel-group correctness fix.
- **Before upgrading**: audit reliance on cutlass_mla / non-Marlin GPTQ / AWQ AOT / DCFA kernels ([#32114](https://github.com/sgl-project/sglang/pull/32114)), and re-run benchmark suites if you use MXFP8 online quantization ([#32953](https://github.com/sgl-project/sglang/pull/32953)) or EPLB with no-A2A MoE ([#32962](https://github.com/sgl-project/sglang/pull/32962)).

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp Digest — 2026-07-31

## Today's Highlights
Ten releases landed between b10186 and b10199, headlined by the completion of MiniMax-M3 (MSA) support: the custom prefill CPU op was replaced with stock ggml ops (b10189), eliminating a GPU→CPU→GPU sync trip during prefill. The server gained input-embedding-driven next-token generation (b10199), while Q2_0 enablement continued across backends with CUDA support merged and an x86 VNNI dot product PR showing a 3× speedup.

## Releases & Breaking Changes
No breaking config/API changes were announced; the server embedding path is additive.

- **b10199** — server: support `inp embd` to generate next token ([#26313](https://github.com/ggml-org/llama.cpp/pull/26313)). Server can now sample a token from directly supplied input embeddings.
- **b10198** — vulkan: support quantized concat ([#25684](https://github.com/ggml-org/llama.cpp/pull/25684)).
- **b10197** — tests: alternative conv layout coverage + layout checks at graph build time, incl. `conv2d.cu` ([#25617](https://github.com/ggml-org/llama.cpp/pull/25617)).
- **b10196** — llama-context: sync pending async copies before clearing `embd_seq` ([#25676](https://github.com/ggml-org/llama.cpp/pull/25676)).
- **b10195** — tests: avoid rebuilding get-model.cpp repeatedly ([#26317](https://github.com/ggml-org/llama.cpp/pull/26317)).
- **b10194** — ggml-cuda: transpose-free gemmv for 1×K weight matrices ([#26171](https://github.com/ggml-org/llama.cpp/pull/26171)).
- **b10192** — ggml sync.
- **b10189** — M3 graph: custom CPU MSA op removed, expressed with stock ops ([#26297](https://github.com/ggml-org/llama.cpp/pull/26297)).
- **b10188** — metal: fix memory unwire leak when model is freed without GPU ops ([#26082](https://github.com/ggml-org/llama.cpp/pull/26082)).
- **b10186** — ggml: KleidiAI CI fix + `stringop-overflow` warning ([#26277](https://github.com/ggml-org/llama.cpp/pull/26277)).

Release links: [b10199](https://github.com/ggml-org/llama.cpp/releases/tag/b10199) · [b10198](https://github.com/ggml-org/llama.cpp/releases/tag/b10198) · [b10194](https://github.com/ggml-org/llama.cpp/releases/tag/b10194) · [b10189](https://github.com/ggml-org/llama.cpp/releases/tag/b10189) · [b10188](https://github.com/ggml-org/llama.cpp/releases/tag/b10188)

## New Model & Hardware Support
- **MiniMax-M3 (MSA) is effectively complete**: base sparse-attention support ([#24908](https://github.com/ggml-org/llama.cpp/pull/24908)), vision tower via mtmd ([#25113](https://github.com/ggml-org/llama.cpp/pull/25113)), and prefill CPU-op replacement ([#26297](https://github.com/ggml-org/llama.cpp/pull/26297)) are merged. A follow-up moves MSA into a dedicated memory implementation ([#26338](https://github.com/ggml-org/llama.cpp/pull/26338)).
- **Motif 3 Beta** opened ([#26298](https://github.com/ggml-org/llama.cpp/pull/26298)) — GDLA (Grouped Differential Latent Attention), MLA-style low-rank projections with 16 GQA KV heads.
- **TML Inkling architecture** opened ([#25731](https://github.com/ggml-org/llama.cpp/pull/25731)) — new GGUF converter, graph build, and a banded Flash Attention kernel.
- **Q2_0 quantization**: CUDA backend merged ([#25707](https://github.com/ggml-org/llama.cpp/pull/25707)), joining CPU and Metal — enables ternary models (Ternary-Bonsai-{27B,8B,4B,1.7B}). x86 VNNI Q2_0 dot product added ([#26348](https://github.com/ggml-org/llama.cpp/pull/26348)).
- **DSpark speculative decoding** merged ([#25173](https://github.com/ggml-org/llama.cpp/pull/25173)); Gemma 4 DSpark draft support in progress ([#25549](https://github.com/ggml-org/llama.cpp/pull/25549)).
- **ROCm 7.14** CI targets proposed ([#25775](https://github.com/ggml-org/llama.cpp/pull/25775)) — first production release on the TheRock build system.

## Performance & Optimization
- **x86 VNNI Q2_0 dot product**: 3× speedup on VNNI-compatible CPUs; bit-exact vs generic implementation ([#26348](https://github.com/ggml-org/llama.cpp/pull/26348)).
- **CUDA Q2_0 unpack via `__byte_perm`**: +15–40% single-decode t/s, +8% prefill ([#25603](https://github.com/ggml-org/llama.cpp/pull/25603)).
- **M3 prefill**: stock-op MSA graph removes the GPU→CPU→GPU sync trip ([#26297](https://github.com/ggml-org/llama.cpp/pull/26297), in b10189).
- **CUDA transpose-free gemmv** for 1×K weights ([#26171](https://github.com/ggml-org/llama.cpp/pull/26171), in b10194).
- **HIP RDNA 3/RDNA 4 MMQ tuning** in progress ([#26284](https://github.com/ggml-org/llama.cpp/pull/26284)).
- **Async pinned upload for `-sm tensor` model load** — WIP, single-file change in ggml-backend-meta ([#22466](https://github.com/ggml-org/llama.cpp/pull/22466)).
- **Metal Tensor API optimization** — standalone `_matmul2d_` kernel path, merged ([#20962](https://github.com/ggml-org/llama.cpp/pull/20962)).
- **Known regression to watch**: hybrid CUDA + ZenDNN prefill drops ~50%, traced to commit `7acb4e8` ([#24315](https://github.com/ggml-org/llama.cpp/issues/24315)).

## Stability & Regressions
Ranked by severity/attention:

1. **Qwen 3.6 27B full prompt re-processing** due to missing cache data — 113 comments, still open ([#22746](https://github.com/ggml-org/llama.cpp/issues/22746)).
2. **SYCL regression on Intel Arc Pro B60** — empty/gibberish output + `ggml_sycl_op_mul_mat` crash on hybrid models; regression pinpointed to b9128–b9159, open ([#24168](https://github.com/ggml-org/llama.cpp/issues/24168)).
3. **Gemma 4 12B garbled output on Intel Arc Pro B70 (Xe2, SYCL)** with large prompts ([#26206](https://github.com/ggml-org/llama.cpp/issues/26206)).
4. **OpenVINO cannot load gemma-4-12B** on CPU/GPU/NPU ([#24415](https://github.com/ggml-org/llama.cpp/issues/24415)).
5. **CUDA `cublasSgemm_v2` unsupported parameter** during speculative decoding + vision workloads on V100 ([#26119](https://github.com/ggml-org/llama.cpp/issues/26119)).
6. **Vulkan crashes** with image + large prompt on AMD 7900XTX ([#24983](https://github.com/ggml-org/llama.cpp/issues/24983)); the Gemma 4 infinite `<unused>` token loop on Vulkan was closed ([#21516](https://github.com/ggml-org/llama.cpp/issues/21516)).
7. **Ternary Bonsai 27B crashes** under CUDA/LM Studio ([#25727](https://github.com/ggml-org/llama.cpp/issues/25727)) — merged CUDA Q2_0 backend ([#25707](https://github.com/ggml-org/llama.cpp/pull/25707)) may resolve this; retest on b10199+.
8. **Fixes in flight**: CUDA async tensor copy race on virtual devices ([#26344](https://github.com/ggml-org/llama.cpp/pull/26344)); server tool-call checkpoint invalidation ([#24891](https://github.com/ggml-org/llama.cpp/pull/24891)).
9. **Closed**: deepseek4 prompt-cache logs LCP match but reprocesses full prompt ([#25567](https://github.com/ggml-org/llama.cpp/issues/25567)).

## What This Means for Application Developers
- **Server can now sample from direct input embeddings** (`inp embd`, b10199) — enables embedding-based steering and next-token scoring without string round-trips ([#26313](https://github.com/ggml-org/llama.cpp/pull/26313)).
- **Better gateway observability coming**: `/slots` will expose realtime per-slot progress and throughput ([#25813](https://github.com/ggml-org/llama.cpp/pull/25813)) — useful for LLM gateway metrics and autoscaling.
- **Plan for new architectures**: MiniMax-M3 is production-ready (including vision); Motif 3 Beta and TML Inkling are on the way. Expect GGUF conversions to land shortly after merge.
- **Ternary/Q2_0 models are now viable cross-backend**: CPU, Metal, and CUDA Q2_0 support means Ternary-Bonsai-class models can run on commodity GPUs; the 3× VNNI speedup also makes CPU-only deployments competitive.
- **Speculative decoding is expanding** with merged DSpark and Gemma 4 drafts in flight — but caution on older GPUs (V100) where cuBLAS parameter failures appear under spec decode + vision ([#26119](https://github.com/ggml-org/llama.cpp/issues/26119)).
- **Be cautious with Intel Arc/SYCL**: two active Gemma 4 correctness bugs ([#26206](https://github.com/ggml-org/llama.cpp/issues/26206), [#24168](https://github.com/ggml-org/llama.cpp/issues/24168)) suggest pinning known-good builds or using the Vulkan backend on Battlemage until fixed.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Digest — 2026-07-31

## Today's Highlights

No tagged release landed in the last 24h. The most significant in-flight work is API compatibility: PR [#17485](https://github.com/ollama/ollama/pull/17485) reworks `/v1/chat/completions` streaming to match OpenAI’s wire format exactly, and PR [#17478](https://github.com/ollama/ollama/pull/17478) adds input-token count routes. On the stability side, a severe cross-request content leakage bug was reported for concurrent vision requests ([#17475](https://github.com/ollama/ollama/issues/17475)), and the GPT-OSS Q8 crash was root-caused to a missing flash-attention flag ([#17477](https://github.com/ollama/ollama/pull/17477)).

## Releases & Breaking Changes

- **No releases in the last 24h.**
- [#17485](https://github.com/ollama/ollama/pull/17485) — Open PR to match OpenAI’s streaming wire format for `/v1/chat/completions`: `finish_reason` moves to its own chunk, mirroring `api.openai.com` chunk-for-chunk. This is a behavioral change for streaming clients and may require SDK/parser updates if merged.
- [#17478](https://github.com/ollama/ollama/pull/17478) — Adds `/v1/messages/count_tokens`, `/v1/chat/completions/input_tokens`, and `/v1/responses/input_tokens`, reusing the runner tokenizer via the existing debug render path.

## New Model & Hardware Support

- [#17487](https://github.com/ollama/ollama/pull/17487) — Open PR adding **Gemma4 vision support to the MLX runner**, including a temporary multimodal integration framework and media cache.
- [#17483](https://github.com/ollama/ollama/pull/17483) — Proposes `ollama run <model>` fallback to `:cloud` tag for cloud-only models like `kimi-k3`, which currently fail with a confusing not-found error.
- [#12149](https://github.com/ollama/ollama/issues/12149) — Swiss AI `Apertus-8B` still unsupported: `unsupported architecture "ApertusForCausalLM"`.
- [#17235](https://github.com/ollama/ollama/issues/17235) — Open request for Kimi K3 on Ollama Cloud.
- [#17479](https://github.com/ollama/ollama/issues/17479) — Request for Gemma 4 E4B MLX quality parity and QAT-derived MLX artifacts.
- [#16057](https://github.com/ollama/ollama/issues/16057) — Build remains broken on Loongarch64 due to missing `ggml-cpu/arch/loongarch/quants.c`.

## Performance & Optimization

- [#17144](https://github.com/ollama/ollama/pull/17144) — Removes the hardcoded `numParallel = 1` blocklist for `qwen35`/`qwen35moe`. The upstream llama.cpp crash was fixed in 2026-03, so parallel serving can be re-enabled.
- [#17480](https://github.com/ollama/ollama/pull/17480) — Benchmark prompts now generated from Python patch continuations rather than fixed completions, with budget-aware rotation for small prompt-token targets.
- [#17487](https://github.com/ollama/ollama/pull/17487) — MLX multimodal media cache reduces overhead for ongoing image-based sessions while the runner pipeline stabilizes.

## Stability & Regressions

Ranked by severity:

- **Critical — Cross-request content leakage**: [#17475](https://github.com/ollama/ollama/issues/17475) — Concurrent vision requests with client aborts on a shared slot (`-np 1`, context-shift) can leak one request’s image data into another request’s output on 0.32.5. No fix PR yet; avoid concurrent vision workloads with aborts.
- **High — CUDA illegal memory access**: [#17434](https://github.com/ollama/ollama/issues/17434) — `qwen3.6:35b` crashes 100% reproducibly when combining JSON-schema `format`, `think: false`, and the model on DGX Spark GB10 arm64.
- **High — Tool-message hang**: [#17429](https://github.com/ollama/ollama/issues/17429) — `/api/chat` and `/v1/chat/completions` hang indefinitely when message history contains a `role: "tool"` message on 0.32.5.
- **High — Tool-calling regression**: [#17444](https://github.com/ollama/ollama/issues/17444) — Ollama 0.32.4/0.32.5 break tool calling in the VS Code GitHub Copilot Harness; rollback to 0.32.1 is confirmed working. Related hardening PR: [#17486](https://github.com/ollama/ollama/pull/17486) unwraps duplicated tool-call argument envelopes.
- **High — GPT-OSS Q8 crash**: [#17430](https://github.com/ollama/ollama/issues/17430) — Crash at long context. Root-cause PR [#17477](https://github.com/ollama/ollama/pull/17477) identifies that Ollama stopped telling llama-server that `gpt-oss` requires flash attention; `auto` mode disables it on partial offload.
- **Medium — macOS M5 freeze**: [#17452](https://github.com/ollama/ollama/issues/17452) — `qwen3.6:latest` intermittently hangs inference and freezes the entire system on Apple M5.
- **Medium — Gemma 4 token corruption**: [#17459](https://github.com/ollama/ollama/issues/17459) — Gemma 4 emits repeated `<unused49>` tokens when `think: false` is used.
- **Medium — HF import timeouts**: [#17484](https://github.com/ollama/ollama/issues/17484) — `Error: context deadline exceeded` for many GGUF models downloaded from Hugging Face.
- **Medium — Model unload/reload churn**: [#17482](https://github.com/ollama/ollama/issues/17482) — Same model is unloaded/reloaded when switching between VS Code/Continue and Goose.
- **Service — ollama.com 403/login loop**: [#17471](https://github.com/ollama/ollama/issues/17471) — 8+ hours of 403s across API/CLI/web; no changes on the user side. Also see paid-access issue [#17341](https://github.com/ollama/ollama/issues/17341).
- **AMD iGPU / Vulkan / older regressions**: [#17447](https://github.com/ollama/ollama/issues/17447) (systemd fix for AMD 780M), [#13791](https://github.com/ollama/ollama/issues/13791) (Vulkan 780M crash), [#17285](https://github.com/ollama/ollama/issues/17285) (model load failure after 0.24.0/0.30.0), and [#4165](https://github.com/ollama/ollama/issues/4165) (`OLLAMA_NUM_PARALLEL` + multimodal → `failed processing images`).

## What This Means for Application Developers

- **OpenAI streaming compatibility is changing.** If you proxy or parse Ollama’s `/v1/chat/completions` stream, plan for the wire-format alignment in [#17485](https://github.com/ollama/ollama/pull/17485) once released — especially handling `finish_reason` on a separate chunk.
- **Avoid known Qwen3.6 combinations.** JSON-schema decoding plus `think: false` on CUDA is currently a crash path ([#17434](https://github.com/ollama/ollama/issues/17434)); also watch for macOS M5 freezes ([#17452](https://github.com/ollama/ollama/issues/17452)).
- **Tool-calling agents should pin Ollama 0.32.1** until the 0.32.4/0.32.5 VS Code harness regression is fixed ([#17444](https://github.com/ollama/ollama/issues/17444)). PR [#17486](https://github.com/ollama/ollama/pull/17486) should make malformed model-emitted tool-call envelopes more robust.
- **Do not run concurrent vision requests with client aborts** on a shared runner slot: [#17475](https://github.com/ollama/ollama/issues/17475) demonstrates cross-request content leakage. Isolate vision workloads until fixed.
- **Cloud-only models may need an explicit `:cloud` tag** until the CLI fallback in [#17483](https://github.com/ollama/ollama/pull/17483) lands. Cloud prompt-cache support is also still outstanding ([#16714](https://github.com/ollama/ollama/issues/16714)).
- **Input token counting is coming** ([#17478](https://github.com/ollama/ollama/pull/17478)), which will make metering and cost tracking easier. Also, `OLLAMA_DEBUG_LOG_REQUESTS` will eventually log responses too ([#17472](https://github.com/ollama/ollama/pull/17472)), useful for debugging generation and tool-calling behavior.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

## LiteLLM Digest — 2026-07-31

### 1. Today's Highlights

LiteLLM shipped a signed `v1.96.0-dev.1` release and landed several proxy correctness fixes, notably around streamed usage accounting for reasoning models (#35290), S3 SSE-KMS logging (#35291), and config-defined guardrail/policy persistence (#35259, #35263). On the community side, the most active threads are the long-dormant Dark Mode request (#10177) and a new Markov-based routing strategy proposal (#31555).

### 2. Releases & Breaking Changes

- **v1.96.0-dev.1** ([release](https://github.com/BerriAI/litellm/releases)) — Pre-release; adds Docker image signature verification instructions using `cosign` with the key introduced in [commit `0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0). All images are now signed.
- No breaking API/config changes surfaced in the last 24h. The backport of the team budget revert (#35299) targets `rc/1.95.0`; see Stability below.

### 3. New Model & Hardware Support

No new models or hardware backends landed in this window. Open community requests include:

- **Kimi K3, Inkling, Tinker** native support — [#33921](https://github.com/BerriAI/litellm/issues/33921)
- **Gemini Robotics ER 2 / ER 1.6 Preview** pricing entries — [#35250](https://github.com/BerriAI/litellm/issues/35250)
- **Venice models** (`venice/grok-code-fast-1`) — [#24229](https://github.com/BerriAI/litellm/issues/24229)

No CUDA/ROCm/Metal/quantization work was reported.

### 4. Performance & Optimization

- **Stream usage upstream, stripped from client streams** ([#35290](https://github.com/BerriAI/litellm/pull/35290)) — The proxy now requests `stream_options.include_usage` from upstream by default and strips it from client-facing streams. This prevents tiktoken-based estimation from hiding reasoning tokens, which could undercount SpendLogs by 90%+ on reasoning models.
- **Prompt-cache warmth for auto-routed sessions** ([#35252](https://github.com/BerriAI/litellm/pull/35252)) — The complexity auto-router now keeps provider prompt caches warm within a session, avoiding full cache-write costs when a conversation moves between model tiers.
- **Rate-limiter stash moved to ContextVar** ([#35278](https://github.com/BerriAI/litellm/pull/35278)) — Internal v3 rate-limiter bookkeeping no longer leaks into request metadata on Responses-style routes, reducing provider parameter pollution.

### 5. Stability & Regressions

Most impactful issues reported in the last 24h, with fix status where applicable:

- **Concurrent requests can bypass TPM rate limits** ([#18730](https://github.com/BerriAI/litellm/issues/18730)) — Still open; no fix PR in this batch. High severity for multi-tenant gateways.
- **OpenAI cache-write tokens dropped from cost calculation** ([#33772](https://github.com/BerriAI/litellm/issues/33772)) — Cached-input requests are mis-priced; no fix PR yet.
- **`post_call` guardrails skipped on `/v1/messages` streaming** ([#35257](https://github.com/BerriAI/litellm/issues/35257)) — Raw Anthropic SSE bytes reach guardrail hooks; blocked content streams through while audit log reports success. No dedicated fix PR yet; `#35292` addresses related spend-log metadata only.
- **`skip_user_budget_on_team_key: true` does not work** ([#35076](https://github.com/BerriAI/litellm/issues/35076)) — Reverted via [PR #35271](https://github.com/BerriAI/litellm/pull/35271) and backported to `rc/1.95.0` in [#35299](https://github.com/BerriAI/litellm/pull/35299). Team keys are now governed by team budget, not personal budget.
- **Config guardrails 404 in Admin UI / no-DB list endpoints** ([#35259](https://github.com/BerriAI/litellm/pull/35259)) — Fixed by serving config guardrails with stable IDs and merging into list/info APIs.
- **Config-defined policies dropped after DB sync** ([#35263](https://github.com/BerriAI/litellm/pull/35263)) — Fixed via provenance-tracked registries and list API merge.
- **S3 logging failures** — Two fixes landed: SSE-KMS key support on both logging paths ([#35291](https://github.com/BerriAI/litellm/pull/35291)) and S3SigV4Auth signature handling for keys with spaces ([#35296](https://github.com/BerriAI/litellm/pull/35296)).
- **Sub-cent budgets impossible to save from UI** ([#35302](https://github.com/BerriAI/litellm/pull/35302)) — Fixed by switching money inputs to `step="any"` and disabling native validation.
- **Reload schedule state lost on restart** ([#35165](https://github.com/BerriAI/litellm/pull/35165)) — Fixed by persisting last run/revision as config columns.

### 6. What This Means for Application Developers

- **Reasoning-model spend will become accurate on streams** — once #35290 propagates, expect SpendLogs to reflect real output tokens instead of tiktoken estimates. This may increase reported costs for high-reasoning workloads.
- **Guardrail enforcement on Anthropic Messages streaming is still a gap** — do not rely on `post_call` guardrails to filter streaming content from `/v1/messages` until #35257 is fixed.
- **TPM rate limits are not atomic under concurrency** — applications that strictly require token-based throttling need defense-in-depth (client-side limiting) until the core limiter is hardened.
- **Team budget semantics changed** — the `skip_user_budget_on_team_key` opt-out is being reverted in `rc/1.95.0`. Team keys will ignore personal budgets; plan your budget model accordingly.
- **S3-logged environments should upgrade** — KMS-key and space-in-key fixes are significant for enterprise AWS deployments; watch for the next stable release containing #35291/#35296.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth Digest — 2026-07-31

## 1. Today's Highlights
A heavy Studio/desktop cycle: PRs landed for MCP OAuth client support ([#7665](https://github.com/unslothai/unsloth/pull/7665)), whole-chat Markdown export ([#7664](https://github.com/unslothai/unsloth/pull/7664)), and a full train-page setup rework ([#7633](https://github.com/unslothai/unsloth/pull/7633)), alongside a confirmed ROCm iGPU/dGPU auto-selection crash ([#7624](https://github.com/unslothai/unsloth/issues/7624)) and a fix for an 11.4-minute offline load hang ([#7591](https://github.com/unslothai/unsloth/pull/7591)). No releases were published in the last 24 hours; 10 issues and 59 PRs were updated in the window.

## 2. Releases & Breaking Changes
None. No releases in the last 24 hours; no API/config migration notes.

## 3. New Model & Hardware Support
No formal new-architecture announcements in this window. Ecosystem signals:

- **Qwen3.6-27B MTP GGUF** (`UD-Q6_K_XL`) in use via Studio custom scan folders ([#7623](https://github.com/unslothai/unsloth/issues/7623)); a companion PR ([#7648](https://github.com/unslothai/unsloth/pull/7648)) fixes GGUF classification when custom scan roots are named `MTP`.
- **Gemma-4-26B-A4B GGUF** referenced in a HF-cache restore fix for dangling refs ([#7375](https://github.com/unslothai/unsloth/pull/7375)).
- **Intel XPU** continues to be exercised by the test suite; a batched left-padded generation test diverges on XPU but passes on CUDA ([#7638](https://github.com/unslothai/unsloth/issues/7638)).
- **ROCm multi-GPU auto-selection** exists but mis-picks iGPUs on hybrid systems ([#7624](https://github.com/unslothai/unsloth/issues/7624)).

## 4. Performance & Optimization
- **VRAM thrashing on idle** ([#7164](https://github.com/unslothai/unsloth/issues/7164)): on AMD W7900/W7500, models repeatedly leave VRAM when idle, adding transfer latency and host-RAM pressure; open with 3 comments.
- **Offline load latency**: loading an already-downloaded GGUF with no connectivity took ~11.4 minutes due to hub retry storms; PR [#7591](https://github.com/unslothai/unsloth/pull/7591) detects an unreachable hub rather than only dead DNS.
- **Parallel chat dispatch** ([#7629](https://github.com/unslothai/unsloth/pull/7629)): replaces the singleton active-chat prompt queue with per-chat FIFO queues, letting ready chats dispatch in parallel under the inference backend's concurrency cap.
- **First-chat downloads** ([#7651](https://github.com/unslothai/unsloth/pull/7651), closed): auto model downloads now route through the Download Manager, enabling progress visibility and cancellation before inference load begins.

## 5. Stability & Regressions
Ranked by severity:

- **[Confirmed] ROCm iGPU/dGPU mis-selection** ([#7624](https://github.com/unslothai/unsloth/issues/7624)): the free-memory heuristic picks the shared-memory iGPU over the dGPU, crashing instead of falling back on hybrid systems; workaround is disabling the iGPU.
- **4-bit + vLLM failure on Gemma3** ([#2274](https://github.com/unslothai/unsloth/issues/2274)): `ValueError: no module or parameter named 'language_model'` when serving ORPO Gemma3 with vLLM; open since 2025-04, 6 👍, still unresolved.
- **XPU correctness divergence** ([#7638](https://github.com/unslothai/unsloth/issues/7638)): batched left-padded generation mismatches solo generation on Intel XPU; the regression test passes on CUDA.
- **GGUF routing misclassification** ([#7623](https://github.com/unslothai/unsloth/issues/7623)): custom scan-folder GGUFs with `qwen3.6` in the filename are routed through the transformers/PeftConfig loader instead of llama-server on ROCm.
- **Desktop file-drop hijack** ([#7661](https://github.com/unslothai/unsloth/issues/7661)): every drag over the Tauri window is claimed by the "GGUF models only" overlay, blocking chat attachments.
- **VRAM oscillation** ([#7164](https://github.com/unslothai/unsloth/issues/7164)): idle models leaving VRAM; open.
- **Stale desktop backend** ([#7655](https://github.com/unslothai/unsloth/pull/7655)): after a crash/force-kill, the orphaned backend holds port 8888 and the next launch fails with "backend is too old"; fix adds a parent watchdog.
- **Repair version skew / decoding** ([#7641](https://github.com/unslothai/unsloth/pull/7641), closed): prevents stale `install_python_stack.py` overlay and fixes invalid-UTF-8 output closing the update pipe (exit 120).

## 6. What This Means for Application Developers
- **MCP server compatibility expands**: PR [#7665](https://github.com/unslothai/unsloth/pull/7665) adds pre-registered OAuth client support for remote MCP servers (e.g., Google Calendar), with secrets encrypted at rest (DPAPI/Fernet) and kept out of API responses — relevant for any agent stack relying on remote MCP tools.
- **Two auth paths for the Studio API**: PR [#7656](https://github.com/unslothai/unsloth/pull/7656) accepts `x-api-key` alongside Bearer, exposed in OpenAPI — pin this when generating clients.
- **Concurrency semantics are changing**: per-chat prompt queues ([#7629](https://github.com/unslothai/unsloth/pull/7629)) mean parallel chats can dispatch concurrently under the backend cap — plan rate limiting and load expectations accordingly.
- **Offline-first matters**: the 11.4-minute offline load hang ([#7591](https://github.com/unslothai/unsloth/pull/7591)) shows why edge/air-gapped deployments should pin this fix and test cold-start with the network down.
- **Filenames can trigger loader heuristics**: avoid model-family tokens like `qwen3.6` in custom GGUF filenames until [#7623](https://github.com/unslothai/unsloth/issues/7623)/[#7648](https://github.com/unslothai/unsloth/pull/7648) land; routing is filename-sensitive.
- **Desktop shell has platform quirks**: file drops are globally intercepted by the GGUF overlay ([#7661](https://github.com/unslothai/unsloth/issues/7661)) and `window.open` does not exist in the Tauri webview ([#7660](https://github.com/unslothai/unsloth/pull/7660)) — desktop UI must account for both.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*