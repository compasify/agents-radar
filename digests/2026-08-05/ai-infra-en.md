# AI Infrastructure Digest 2026-08-05

> Generated: 2026-08-05 01:26 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# Cross-Project Comparison Report — 2026-08-05

## 1. Ecosystem Overview

The AI inference stack is now firmly organized around a few frontier model families — DeepSeek-V4, Kimi K3, Gemma-4, and Qwen3.5/3.6 — and today's activity shows that engineering effort has shifted from net-new features to correctness hardening and hardware backporting. Speculative decoding is transitioning from an opt-in experiment to an automatic default capability (Ollama's MTP auto-speculation, vLLM's async draft scheduling), while sparse-attention and MLA kernels are being retrofitted onto Ampere and consumer-class silicon. The most consequential pattern is that the serving layer (vLLM, SGLang) is absorbing DeepSeek-V4-specific complexity (sparse indexers, DSpark, FlashMLA) while the local runtime layer (llama.cpp, Ollama) struggles to keep correctness on par with its release velocity. Meanwhile, the gateway layer (LiteLLM) shows the classic maturity pain of a control plane under scale: streaming-translation bugs and database saturation rather than kernel problems.

## 2. Activity Comparison

Counts reflect issues/PRs explicitly referenced in each project's 24h digest, not full repository totals.

| Project | Issues (24h digest) | PRs (24h digest) | Release Status |
|---|---|---|---|
| vLLM | 17 | 13 | No release; v0.26.0 in field, FlashMLA regression pinned against it |
| SGLang | 20 | 9 | No release; DSV4 bug cluster closed, two new high-severity issues opened |
| llama.cpp | 14 | 20 | **Fast train: b10265 → b10276** (10 builds, 2 breaking changes) |
| Ollama | 15 | 9 | **v0.32.6-rc0** (OpenAI wire-format change, MLX MTP spec decode) |
| LiteLLM | 16 | 12 | No release; v1.92.1 latest, fastapi pin incoming |
| Unsloth | 12 | 13 | **v0.1.52-beta** (Dynamic GGUF for DSV4-Flash/Kimi K3, downloader fallback) |

**Read:**
- **llama.cpp** ships at the highest velocity but carries the most open correctness debt per release (see §4/§5 of its digest — DSV4 flash-attention corruption, 6.4× TOP_K regression).
- **SGLang** has the highest issue count relative to PRs, consistent with a project absorbing a large DSV4-specific surface area.
- **vLLM** shows a healthy fix pipeline (13 PRs) but no release, meaning production users are waiting on the v0.26.0 FlashMLA regression fix.
- **LiteLLM** is the busiest non-releasing project — 28 total tracked items with no tagged release, a sign of maintenance debt accumulating between version bumps.

## 3. Model Support Race

**Shipped / merged in the last 24h:**
- **llama.cpp** — Qwen3-TTS in `mtmd` (b10270, breaking `llama-tts` CLI); MXFP6-E2M3 CPU path; NVFP4 imatrix quantization; E8-lattice 2.125-bit KV cache quantization.
- **Unsloth** — Dynamic GGUF for **DeepSeek-V4 Flash 0731** and **Kimi K3** (v0.1.52-beta); ModernBERT sequence classification.
- **vLLM** — Apertus 1.5 multimodal (8B/70B); AutoRound NVFP4 W4A4 dense linear; TRITON_MLA_SPARSE backend for GLM-5/DeepSeek-V3.2 on SM80/SM121.
- **Ollama** — Qwen3.5 MTP-head automatic speculation on Apple Silicon (MLX engine).
- **SGLang** — XPU DeepSeek-V4 prefill; Kimi Delta-Attention Helion backend; SM107 CuTe DSL GEMM.

**In progress / requested:**
- **vLLM** — DeepSeek-V4-Flash on SM8x requested (#50576); Kimi K3 CUDA/ROCm workstreams tracked (#50001, #50682).
- **Ollama** — Apertus 1.5 proposed (#17555); `deepseek-v4-flash:0731` and `glm-ocr` still open requests; reranking models remain the top ask (285 👍, unimplemented).
- **llama.cpp** — BailingMoE3 with MTP in open PR; gfx1151/Strix Halo CI fixes.

**Who is ahead?**
- **Unsloth** wins on time-to-local for the newest frontier checkpoints (DSV4-Flash, Kimi K3) via Dynamic GGUF.
- **vLLM** has the broadest *production* support matrix, especially across quantization formats (NVFP4, FP8, MXFP4) and hardware (SM80→SM121, ROCm).
- **SGLang** is deepest on DSV4 kernel optimization (sparse indexer, FlashMLA alternatives, XPU), but is visibly firefighting DSV4 correctness bugs.
- **llama.cpp** tracks new architectures fastest but with the most churn — DSV4 on CUDA flash-attention is currently broken (#26509), which limits practical leadership.
- **Ollama** trails on raw architecture coverage — its value is in wrapping what llama.cpp already supports plus Apple-silicon-specific speedups.

## 4. Performance Frontier

Optimization effort clusters into five areas:

**KV cache & memory**
- Compression: llama.cpp's E8-lattice 2.125-bit KV cache quantization; vLLM's per-token-head KV scale initialization fix (correctness prerequisite for quantized KV).
- Observability: SGLang HiCache observability; Unsloth VRAM headroom bar before model load.
- MoE memory: Ollama's expert-offload-to-RAM proposal and llama.cpp's CUDA expert-caching (`-ehs N`) both target the small-VRAM MoE serving gap.

**Attention & MLA kernels**
- Sparse MLA backporting is the dominant kernel theme: vLLM's TRITON_MLA_SPARSE for Ampere/DGX Spark, SGLang's XPU DSV4 prefill and Helion backend, llama.cpp's dflash reshape fixes.
- Fused kernels: Gemma3n sparse GELU fusion (vLLM), fused MoE weighted-expert reduction (llama.cpp) — both reduce intermediate traffic.

**Quantization**
- 4-bit and below is the battleground: NVFP4 (vLLM AutoRound, llama.cpp imatrix search), MXFP4 (vLLM MI355 corruption still open), MXFP6-E2M3 (llama.cpp CPU, Blackwell CUDA to follow).
- Quantized correctness is the gating issue: KV quant corruption (vLLM #50702), DSPARK/F8 path bugs (vLLM #51093, llama.cpp b10269).

**Speculative decoding**
- Becoming *default, not feature*: vLLM auto-enables async scheduling for drafts; Ollama auto-MTP on MLX; context-length-aware spec scheduling proposed (vLLM #48627).
- But production confidence is shaky: MTP + prefix caching costs ~20% accuracy (vLLM #43559); tool-calling + spec decode still fragile (vLLM #38106).

**Distributed serving**
- Near-zero cold start via CUDA checkpoint/restore (vLLM #34303); DCP `symm_a2a` peer-direct all-to-all for MLA decode (SGLang #33355).
- Distributed stability is the weak spot: TP hangs on Intel XPU (vLLM #50545), H20 TP8 hangs at ~245K context (SGLang #33549), RCCL startup hangs (vLLM #38587).

## 5. Layer Positioning

| Project | Layer | Primary role |
|---|---|---|
| **vLLM** | Serving engine | Production multi-GPU inference; broadest model/quant/hardware matrix; v1 engine + Model Runner v2 migration ahead |
| **SGLang** | Serving engine | Performance-focused alternative to vLLM; deepest DSV4/Kimi kernel specialization; more experimental churn |
| **llama.cpp** | Local runtime | Edge/CPU/consumer-GPU execution; GGUF ecosystem owner; fastest release cadence, highest regression churn |
| **Ollama** | Local runtime + model distribution | User-facing wrapper over llama.cpp/MLX; adds OpenAI-compatible API, model registry, Apple Silicon optimization |
| **LiteLLM** | Gateway / control plane | Routing, guardrails, spend tracking, multi-provider abstraction; no kernel or model work — all protocol and data-plane correctness |
| **Unsloth** | Fine-tuning + local inference | Parameter-efficient training (QLoRA), Dynamic GGUF export, Studio product; sits *upstream* of vLLM/llama.cpp in the model lifecycle |

**Key interdependencies:** Ollama inherits llama.cpp regressions; Unsloth finetunes must be re-validated against vLLM serving (currently broken for Qwen3.5, #7681); LiteLLM's reliability problems are disjoint from the others — they are application-protocol bugs (stream chunking, index saturation), not kernel issues.

## 6. Trend Signals

1. **DeepSeek-V4 is a forcing function across every layer.** Kernels (FlashMLA, sparse indexers), quant formats (NVFP4), serving configs (DSpark, TP8), and local runtimes (Dynamic GGUF) all carry DSV4-specific work. The model family is effectively defining the next round of infrastructure requirements — expect this to continue through Kimi K3.

2. **Speculative decoding is going default — with unproven production safety.** Ollama auto-enables MTP on Apple Silicon, vLLM auto-enables async scheduling for drafts, but accuracy degradation (vLLM #43559: −20% with prefix caching + MTP) and tool-calling breakage (#38106) remain unsolved. **Action:** application teams should gate spec-decode enablement on quality benchmarks, not throughput numbers.

3. **Software is now the hardware bridge.** Sparse MLA and DeepGEMM-class kernels are being backported to Ampere and consumer silicon because the hardware generation gap is widening. TRITON_MLA_SPARSE (vLLM), XPU DSV4 (SGLang), and SM107 CuTe DSL (SGLang) are all software-only paths to architectures otherwise locked behind new GPUs. **Action:** check whether your GPU generation is covered before buying new hardware.

4. **Agentic workloads are exposing protocol-layer bugs.** Tool-call truncation/brace recovery (Ollama #17562), thinking-token leaks (vLLM #46042), dropped/duplicated stream deltas in Anthropic-compatible endpoints (LiteLLM #30765/#32357), and OpenAI wire-format changes (Ollama v0.32.6-rc0) all break agent loops in ways benchmark suites don't catch. **Action:** re-validate streaming parsers and tool-call handling against every release; this is the highest-churn integration point.

5. **The quantization race moved to KV cache.** Beyond W4A4 weights, the frontier is compressed KV (E8-lattice 2.125-bit in llama.cpp, `int8_per_token_head` fixes in vLLM). Expect KV-cache compression to become a standard serving knob — and a new source of silent-corruption bugs.

6. **Control-plane fragility is a growing operational risk.** LiteLLM's spend-log index gap saturating a 2 vCPU RDS instance (#35766), silent Redis telemetry drops (#35347), and the guardrail "client closed" regression after ~75 min uptime (#35862/#35870) are the gateway-layer equivalent of kernel crashes. **Action:** monitor database saturation and guardrail health on multi-hour deployments; do not assume the proxy layer is stateless.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest — 2026-08-05

## Today's Highlights
No releases shipped in the last 24h, but the PR queue carries two high-value correctness fixes: per-token-head KV scale initialization on KV-sharing models ([PR #51091](https://github.com/vllm-project/vllm/pull/51091), targeting Gemma-4 corruption in #50702) and an EAGLE3 DeepSeek draft crash on non-YaRN rope configs ([PR #51092](https://github.com/vllm-project/vllm/pull/51092)). On the enablement side, AutoRound NVFP4 dense linear support landed ([PR #50988](https://github.com/vllm-project/vllm/pull/50988)) and the long-running TRITON_MLA_SPARSE backend for SM80/SM121 ([PR #38476](https://github.com/vllm-project/vllm/pull/38476)) widens sparse MLA coverage to Ampere and DGX Spark.

## Releases & Breaking Changes
None in the last 24 hours.

## New Model & Hardware Support
- **Apertus 1.5 multimodal** — [PR #50496](https://github.com/vllm-project/vllm/pull/50496) adds support for 8B and 70B variants.
- **AutoRound NVFP4 W4A4 dense linear** — [PR #50988](https://github.com/vllm-project/vllm/pull/50988) on CUDA; MoE support is planned as a separate PR.
- **TRITON_MLA_SPARSE backend** — [PR #38476](https://github.com/vllm-project/vllm/pull/38476) brings sparse MLA models (GLM-5, DeepSeek-V3.2) to SM80 (A100/A800) and SM121 (DGX Spark/B200-class) where DeepGEMM/FlashMLA-Sparse are unavailable.
- **DeepSeek-V4-Flash on SM8x requested** — [Issue #50576](https://github.com/vllm-project/vllm/issues/50576) tracks enabling the DSpark architecture on Ampere; 34 comments, 9 👍.
- **Kimi K3 tracking** — [Issue #50001](https://github.com/vllm-project/vllm/issues/50001) (CUDA) and [Issue #50682](https://github.com/vllm-project/vllm/issues/50682) (ROCm roadmap) detail KV cache manager, KDA kernels, and AITER fused-MoE workstreams.
- **Intel quantization roadmap (H1 2026)** — [Issue #37979](https://github.com/vllm-project/vllm/issues/37979): W4A16 merged; remaining scheme/backend gaps tracked for Intel GPU/CPU.

## Performance & Optimization
- **Async scheduling for draft models** — [PR #48341](https://github.com/vllm-project/vllm/pull/48341) auto-enables async scheduling for speculative-decoding draft models, removing config friction and xfails.
- **Triton Proton profiling backend** — [PR #48789](https://github.com/vllm-project/vllm/pull/48789) adds an optional worker profiling path alongside PyTorch/CUDA (eager-only for now).
- **Multimodal prompt scanning speedup** — [PR #50716](https://github.com/vllm-project/vllm/pull/50716) removes O(len(match)) list allocations at every token position in placeholder discovery and prompt-update matching.
- **Gemma3n sparse GELU Triton kernel** — [PR #48498](https://github.com/vllm-project/vllm/pull/48498) fuses mean/var, thresholding, tanh-GELU, and gated multiply into one kernel.
- **CUDA checkpoint/restore RFC** — [Issue #34303](https://github.com/vllm-project/vllm/issues/34303) targets near-zero cold starts for multi-model serving (v1 engine, draft).
- **ViT full CUDA graph RFC** — [Issue #38175](https://github.com/vllm-project/vllm/issues/38175) tracks eliminating per-request vision-encoder launch overhead in multimodal serving.
- **Context-length-aware spec scheduling RFC** — [Issue #48627](https://github.com/vllm-project/vllm/issues/48627) proposes extending `num_speculative_tokens_per_batch_size` with a `(batch, ctx)` lookup table.

## Stability & Regressions
- **[Issue #49922](https://github.com/vllm-project/vllm/issues/49922) — v0.26.0 FlashMLA regression**: `Assertion res == CUresult::CUDA_SUCCESS failed` in `phase1.cuh` when serving DeepSeek-V4-Pro; works in v0.25.0. High impact for pinned deployments.
- **[Issue #50702](https://github.com/vllm-project/vllm/issues/50702) — KV cache corruption**: `int8_per_token_head` KV + prefix caching corrupts output when the KV pool is saturated (Gemma-4 hybrid, Triton attention). Fix PR: [#51091](https://github.com/vllm-project/vllm/pull/51091); also closed the earlier superseded [#51061](https://github.com/vllm-project/vllm/pull/51061).
- **[Issue #43559](https://github.com/vllm-project/vllm/issues/43559) — Accuracy drop with prefix caching + MTP**: ~20% quality degradation with Qwen3.6 35B-A3B when `--enable-prefix-caching` is combined with MTP spec decode. 39 comments, still open.
- **[Issue #50545](https://github.com/vllm-project/vllm/issues/50545) — Intel XPU TP hangs**: Arc Pro B60 multi-GPU serving hangs in oneCCL warmup allreduce (GuC timeouts, DEVICE_LOST) with torch 2.13 wheels.
- **[Issue #50705](https://github.com/vllm-project/vllm/issues/50705) — sm_120 FlashInfer JIT failures**: With local CUDA <12.9, engine init dies in three default paths (sampler, fused-MoE, FP8 KV) instead of falling back to working kernels.
- **[Issue #37431](https://github.com/vllm-project/vllm/issues/37431)**: Mamba-2 Triton kernels crash with `cudaErrorIllegalInstruction` on SM121 (DGX Spark) unless `CUDA_LAUNCH_BLOCKING=1` is set.
- **[Issue #46042](https://github.com/vllm-project/vllm/issues/46042)**: MiniMax-M3 reasoning tokens still leak into `content` on v0.26.0 and main.
- **[Issue #38106](https://github.com/vllm-project/vllm/issues/38106)**: `tool_choice="required"` + spec decode with Qwen3.5-397B NVFP4 produces failed tool calls.
- **[PR #51093](https://github.com/vllm-project/vllm/pull/51093)**: Fixes ModelOpt FP8 weight dimension corruption (`[N,K]` vs `[K,N]`) in the Humming path.
- **[PR #50693](https://github.com/vllm-project/vllm/pull/50693)**: Fixes DSpark warmup crash when the sparse index buffer is intentionally absent (SWA-only draft layers).
- Other reported ROCm/quant issues: gfx1100 TP2 RCCL startup hang ([#38587](https://github.com/vllm-project/vllm/issues/38587)), MXFP4 output corruption on MI355 ([#41092](https://github.com/vllm-project/vllm/issues/41092)).

## What This Means for Application Developers
- **Speculative decoding still needs validation in production**: MTP + prefix caching can cost ~20% accuracy ([#43559](https://github.com/vllm-project/vllm/issues/43559)), and tool-calling + spec decode remains fragile ([#38106](https://github.com/vllm-project/vllm/issues/38106)). Test quality gates before enabling both.
- **DeepSeek-V4 users on v0.26.0 should pin v0.25.0** until the FlashMLA regression ([#49922](https://github.com/vllm-project/vllm/issues/49922)) is fixed.
- **If you serve Gemma-4/3n with quantized KV on Triton attention**, the per-token-head scale initialization bug ([#50702](https://github.com/vllm-project/vllm/issues/50702)) can corrupt the first scheduled batch in long-lived servers; apply PR #51091.
- **Edge/XPU deployments should pin explicit backends**: sm_120 + older CUDA toolkits hit hard FlashInfer JIT failures ([#50705](https://github.com/vllm-project/vllm/issues/50705)), and Intel Arc multi-GPU TP is effectively blocked ([#50545](https://github.com/vllm-project/vllm/issues/50545)).
- **Agentic workloads get better tool-call fidelity**: the lfm2 parser fix ([#48171](https://github.com/vllm-project/vllm/pull/48171)) stops dropping recoverable calls, and the deterministic `trace_decode_token_ids` replay feature ([#46701](https://github.com/vllm-project/vllm/pull/46701)) enables reproducible decode testing.
- **Watch the roadmaps**: Model Runner v2 migration ([#41286](https://github.com/vllm-project/vllm/issues/41286)) and standardized entrypoint errors ([#48227](https://github.com/vllm-project/vllm/issues/48227)) will change operational behavior in upcoming releases.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

## SGLang Digest — 2026-08-05

### 1. Today's Highlights

DeepSeek V4 continues to dominate both roadmap work and bug-fix activity: three recently reported DSV4 bugs (quantized weight dropping, indexer OOM, masking mismatch) were **closed**, while a new high-priority `inference_mode`/lazy-buffer issue (#33470) and a TP8 H20 hang at ~245K context (#33549) entered the tracker. On the feature side, PRs landed or progressed for **XPU DeepSeek V4 prefill**, **Kimi Delta-Attention Helion backend**, **SM107 CuTe DSL GEMM**, and **HiCache observability**. No new releases were published in the last 24 hours.

---

### 2. Releases & Breaking Changes

- **No new releases** in the last 24 hours; no confirmed breaking config changes this cycle.
- Planned deprecations remain in RFC status:
  - [RFC: Deprecate legacy non-Marlin GPTQ kernel and Dual Chunk Flash Attention](https://github.com/sgl-project/sglang/issues/32112)
  - [RFC: Deprecate CUTLASS MLA attention backend](https://github.com/sgl-project/sglang/issues/32111)

---

### 3. New Model & Hardware Support

- **XPU DeepSeek V4 prefill**: [PR #31865](https://github.com/sgl-project/sglang/pull/31865) uses `sgl-kernel-xpu` implementation of `flash_mla_sparse_fwd` for DeepSeek V4 prefill.
- **Kimi Delta-Attention Helion backend**: [PR #32593](https://github.com/sgl-project/sglang/pull/32593) adds an opt-in Helion backend for packed decode/prefill, with existing default backends preserved.
- **NVIDIA SM107 BF16 GEMM**: [PR #33617](https://github.com/sgl-project/sglang/pull/33617) enables the CuTe DSL BF16 GEMM backend on SM107 and fixes a bias-view DLPack issue.
- **AMD ROCm 7.2.4 Docker flavors**: [PR #30984](https://github.com/sgl-project/sglang/pull/30984) adds Python 3.12 + torch 2.11 + triton 3.6.0 stages for `gfx942-rocm724` and `gfx950-rocm724`.
- **MiniMax-M2.7 CPU optimization**: [PR #31956](https://github.com/sgl-project/sglang/pull/31956) targets CPU inference performance.
- **Kimi K3 roadmap**: [Issue #32607](https://github.com/sgl-project/sglang/issues/32607) tracks Day-0 support, DSpark variant, and bug tracking (#32970).

---

### 4. Performance & Optimization

- **TRTLLM-MHA decode graph**: [PR #33063](https://github.com/sgl-project/sglang/pull/33063) stops per-layer scratch allocations inside CUDA-graph capture, removing baked-in fill kernels from replay.
- **Delayed sampling + mrope position**: [PR #32637](https://github.com/sgl-project/sglang/pull/32637) optimizes repeated position computation.
- **FP32 LM head with bf16/fp16**: [PR #32370](https://github.com/sgl-project/sglang/pull/32370) skips costly fp32 casts, using bf16xbf16 → fp32 matmul.
- **DCP `symm_a2a` backend**: [Issue #33355](https://github.com/sgl-project/sglang/issues/33355) proposes peer-direct all-to-all for MLA decode on NVLink/NVSwitch.
- **`cute-dsl` backend for `mm_mxfp8`**: [Issue #32950](https://github.com/sgl-project/sglang/issues/32950) requests enabling autotune for the Blackwell `mm_mxfp8` path.
- **DFlash logprobs**: [PR #33459](https://github.com/sgl-project/sglang/pull/33459) supports `return_logprobs` with DFlash speculation via Spec v2.

---

### 5. Stability & Regressions

Ranked by severity/urgency:

- **[High] `inference_mode` mismatch can break lazy buffers** — [Issue #33470](https://github.com/sgl-project/sglang/issues/33470). Warmup/autotune runs under `torch.inference_mode()` while real forward + CUDA graph do not; lazy-allocated buffers become unsafe for later inplace updates.
- **[High] DeepSeek-V4 + DSPARK TP8 on 8×H20 hangs at ~245K context** — [Issue #33549](https://github.com/sgl-project/sglang/issues/33549). All GPUs spin at 100% util, watchdog kills server.
- **[Medium] DSpark large decode CUDA-Graph captures can hit illegal memory on TP8** — [Issue #33356](https://github.com/sgl-project/sglang/issues/33356). Occurs beyond small batch sizes (`bs > 32`).
- **[Medium] MLX chained decode skips token accounting; decode-KV pool sync writes to stale/unallocated slots** — [Issue #30093](https://github.com/sgl-project/sglang/issues/30093).
- **[Medium] NemotronH `--mamba-scheduler-strategy extra_buffer` accuracy drop on AIME26** — [Issue #31833](https://github.com/sgl-project/sglang/issues/31833).
- **[Medium] DSA attention backend EAGLE verify tensor-size mismatch near `context-length`** — [Issue #30570](https://github.com/sgl-project/sglang/issues/30570).
- **[Medium] PP + HiCache compatibility errors** — [Issue #30158](https://github.com/sgl-project/sglang/issues/30158).
- **[Resolved] DeepSeek V4 cluster of bugs closed**:
  - Quantized DSV4 fused `wq_a+wkv` path silently drops packed weights → garbage output: [Issue #33245](https://github.com/sgl-project/sglang/issues/33245)
  - DSV4 indexer torch fallback allocates oversized intermediate, OOM past ~128K context: [Issue #33246](https://github.com/sgl-project/sglang/issues/33246)
  - DSV4 indexer torch reference implementations disagree on length masking: [Issue #33247](https://github.com/sgl-project/sglang/issues/33247)
  - DSV4-Flash-0731 on Ampere (8×A800, TP8) further blockers: [Issue #33194](https://github.com/sgl-project/sglang/issues/33194)
- **CI health**: [Tracking issue #17050](https://github.com/sgl-project/sglang/issues/17050) reports 1 broken, 8 flaky, 664 recently fixed CI tests.

---

### 6. What This Means for Application Developers

- **DeepSeek V4 production users**: Several correctness landmines around quantization, long context, and TP8 were fixed in the last cycle, but **new long-context hangs and graph-capture crashes are still open** — validate against the latest `main` before deploying high-concurrency workloads past ~128K context.
- **MLX/Apple users**: The chained-decode token accounting bug can silently corrupt KV pool state; upgrade before relying on stable multi-turn serving on Metal.
- **CUDA-graph users**: Watch for `inference_mode` interactions with lazy buffers (#33470) and per-layer scratch allocations (#33063) if you replay large decode graphs.
- **Feature gates**: DFlash logprobs support (#33459) enables agentic/structured outputs with speculation; Helion and CuTe DSL backends are opt-in and target specialized hardware — verify kernel selection before benchmarking.
- **Roadmap signals**: DCP/Helix parallelism (#29736) and Context Parallelism (#21788) remain the major Q3 architectural directions, alongside DeepSeek V4 (#23602) and Kimi K3 (#32607). Expect more backend churn and deprecations of legacy attention/quant kernels.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

## 1. Today's Highlights

On 2026-08-05, llama.cpp shipped a fast release train through **b10276**, with server/tooling fixes (Windows OEM/UTF-8 output, agent CWD support), **Qwen3-TTS** support in `mtmd` — including a breaking `llama-tts` binary change — and restored prebuilt macOS compatibility for macOS 15 and older. The most active issue cluster revolves around **DeepSeek-V4-family correctness and performance**: CUDA flash-attention decoding bugs, SYCL/HIP fallback regressions, and hybrid/recurrent checkpoint invalidation dominate the tracker, while new MoE expert-caching and fused-reduction PRs promise significant token-generation wins.

## 2. Releases & Breaking Changes

- **b10276** — Prefer `npm ci` over `npm install` in the UI build for supply-chain security ([#26601](https://github.com/ggml-org/llama.cpp/pull/26601)).
- **b10275** — `server`: built-in tool output on Windows is now decoded from the OEM code page to UTF-8, fixing silent loss of accented characters in JSON tool results ([#26597](https://github.com/ggml-org/llama.cpp/pull/26597)).
- **b10274** — `mtmd`: corrected duplicate empty audio chunks for short inputs; audio preprocessing no longer pads all sub-30s inputs to 31s plus trailing spectrogram padding ([#26536](https://github.com/ggml-org/llama.cpp/pull/26536)).
- **b10273** — **Breaking sampler behavior**: history-based samplers no longer resolve `-1` to full context length; it now resolves to `1024`. Review sampler configs if you depended on “full-context windows” ([#26524](https://github.com/ggml-org/llama.cpp/pull/26524)).
- **b10271** — `server`/UI: per-conversation working directory for agents, with path-navigation CWD picker ([#26518](https://github.com/ggml-org/llama.cpp/pull/26518)).
- **b10270** — `mtmd`: **Qwen3-TTS support**; **breaking change to the `llama-tts` binary** interface. Update TTS scripts and integrations ([#26254](https://github.com/ggml-org/llama.cpp/pull/26254)).
- **b10269** — `models`: fix `dflash wo_a` reshape on load ([#26577](https://github.com/ggml-org/llama.cpp/pull/26577)).
- **b10268** — CI: fixed prebuilt macOS binaries no longer running on macOS 15 and below; deployment target corrected, including the KleidiAI-disabled build ([#26375](https://github.com/ggml-org/llama.cpp/pull/26375)).
- **b10267** — Refactored `common_speculative_init` to reduce duplication in speculative-decoding config setup ([#26510](https://github.com/ggml-org/llama.cpp/pull/26510)).
- **b10265** — `sync : ggml`.

## 3. New Model & Hardware Support

- **Qwen3-TTS** via `mtmd` — merged in b10270 ([#26254](https://github.com/ggml-org/llama.cpp/pull/26254)).
- **BailingMoE3 Support** — open PR adds Ling 3.0 flash support with MTP, addressing issue #26590 ([#26608](https://github.com/ggml-org/llama.cpp/pull/26608)).
- **MXFP6 CPU implementation** — initial `MXFP6-E2M3` CPU support; CUDA/Blackwell support intended to follow ([#22671](https://github.com/ggml-org/llama.cpp/pull/22671)).
- **NVFP4 quantization** — imatrix-aware scale-search NVFP4 quantization, wiring the NVFP4 ftype into `llama-quantize` ([#25153](https://github.com/ggml-org/llama.cpp/pull/25153)).
- **E8-lattice KV cache quantization** — new `GGML_TYPE_E8_2` format for 2.125-bit KV cache quantization ([#25352](https://github.com/ggml-org/llama.cpp/pull/25352)).
- **HIP/CUB support** — enables CUB-based ARGSORT/TOP_K paths on HIP via hipCUB, replacing the shared-memory bitonic sort on ROCm devices ([#26592](https://github.com/ggml-org/llama.cpp/pull/26592)).
- **ROCm gfx1151 / Strix Halo CI fixes** — draft PR with three build fixes for the self-hosted `gpu-rocm` job ([#26544](https://github.com/ggml-org/llama.cpp/pull/26544)).
- **macOS prebuilt support restored** for macOS 15 and below in b10268 ([#26375](https://github.com/ggml-org/llama.cpp/pull/26375)).

## 4. Performance & Optimization

- **Expert caching for MoE** — new CUDA-only PR tracks expert-usage heat and keeps hot experts on GPU while computing cold experts on CPU; off by default, enabled with `-ehs N`. Claims “greatly increased performance” ([#26563](https://github.com/ggml-org/llama.cpp/pull/26563)).
- **Fused MoE weighted expert reduction** — CUDA PR fuses the expert-combine tail into one kernel, removing intermediate tensor traffic after `GGML_OP_MUL_MAT_ID` ([#25952](https://github.com/ggml-org/llama.cpp/pull/25952)).
- **Backend sampling multi-output** — extends backend sampling to multiple outputs per sequence, enabling backend sampling during speculative decoding ([#25532](https://github.com/ggml-org/llama.cpp/pull/25532)).
- **HIP TOP_K/ARGSORT improvement** — CUB paths on HIP remove the previous 1024-element row limit and should improve sampling kernels on ROCm ([#26592](https://github.com/ggml-org/llama.cpp/pull/26592)).
- **Known regression to watch**: `GGML_OP_TOP_K` falls back to CPU on HIP/ROCm above ~3–4K context, causing **6.4× token-generation loss** on DeepSeek-V4-Flash ([#26399](https://github.com/ggml-org/llama.cpp/issues/26399)).
- **SYCL oneMKL FA regression** on Arc Pro B70: b10216 default oneMKL flash-attention path regresses 200K-token prefill by ~35%; `MKL_FA_DISABLE=1` restores performance ([#26396](https://github.com/ggml-org/llama.cpp/issues/26396)).
- **DFlash regression on AMD APU** remains open: quantized MoE target is ~2× slower than baseline on Strix Halo ([#25117](https://github.com/ggml-org/llama.cpp/issues/25117)).

## 5. Stability & Regressions

Ranked by severity, based on active reports in the last 24h:

- **DeepSeek-V4 emits only repeated `<` on CUDA flash attention** when a prompt spans more than one forward pass. Clean on CPU and clean with `-fa off`; no fix PR yet. This is the highest-impact open correctness bug ([#26509](https://github.com/ggml-org/llama.cpp/issues/26509)).
- **DS4F SIGSEGV on Intel Arc B70 (SYCL)** — missing SYCL f16 conversion; open ([#26462](https://github.com/ggml-org/llama.cpp/issues/26462)).
- **CUDA race with REAP-pruned DeepSeek-V4-Flash** on GB10/sm_121 — illegal memory access; works with `CUDA_LAUNCH_BLOCKING=1`, report closed after workaround ([#26588](https://github.com/ggml-org/llama.cpp/issues/26588)).
- **DeepSeek-V4-Flash “forgets everything”** on Windows/CUDA; open ([#25171](https://github.com/ggml-org/llama.cpp/issues/25171)).
- **Crash when using `-devd CUDA0` with draft-dspark** and tensor-split DeepSeek-Flash; open ([#26475](https://github.com/ggml-org/llama.cpp/issues/26475)).
- **Same K/V cache type enforced for models with no V cache** — breaks GLM-5.2 with `-ctk q5_1` and no `-ctv`; open ([#26382](https://github.com/ggml-org/llama.cpp/issues/26382)).
- **Context checkpoints always invalidated on hybrid/recurrent models** ([#24055](https://github.com/ggml-org/llama.cpp/issues/24055)); related `/slots` save/restore silently loses prompt reuse on hybrid models ([#25913](https://github.com/ggml-org/llama.cpp/issues/25913)).
- **Windows OpenVINO builds fail to start** due to missing OpenSSL and packaging issues; open ([#24729](https://github.com/ggml-org/llama.cpp/issues/24729)).
- **Qwen 3.6 27B full prompt re-processing** — long-running closed issue with high engagement; still referenced in cache-efficiency discussions ([#22746](https://github.com/ggml-org/llama.cpp/issues/22746)).
- The **dflash `wo_a` reshape bug** was fixed in b10269 ([#26577](https://github.com/ggml-org/llama.cpp/pull/26577)), with a more general tensor-reshape-on-load mechanism in PR #26531 ([#26531](https://github.com/ggml-org/llama.cpp/pull/26531)).

## 6. What This Means for Application Developers

- **TTS integrations are breaking**: after b10270, rebuild any `llama-tts`-based service and re-test CLI flags/audio output ([#26254](https://github.com/ggml-org/llama.cpp/pull/26254)). A new `POST /tts` server endpoint is also proposed ([#26603](https://github.com/ggml-org/llama.cpp/pull/26603)).
- **Agent tooling on Windows is more reliable**: built-in tool output now survives the Windows OEM → UTF-8 path, so non-ASCII tool results will not be silently replaced with U+FFFD ([#26597](https://github.com/ggml-org/llama.cpp/pull/26597)).
- **If you serve DeepSeek-V4 over CUDA flash attention**, pin to a known-good build or run `-fa off` until #26509 is resolved ([#26509](https://github.com/ggml-org/llama.cpp/issues/26509)). Hybrid/recurrent model users should also avoid relying on `/slots` save/restore and context checkpoints for now ([#25913](https://github.com/ggml-org/llama.cpp/issues/25913)).
- **MoE serving may improve soon**: the expert-caching and fused-reduction PRs target token-generation efficiency on CUDA; if you run ROCm/HIP, note the TOP_K CPU-fallback regression can cost 6.4× token-generation throughput on DeepSeek-V4-Flash ([#26563](https://github.com/ggml-org/llama.cpp/pull/26563), [#25952](https://github.com/ggml-org/llama.cpp/pull/25952), [#26399](https://github.com/ggml-org/llama.cpp/issues/26399)).
- **macOS 15 and below**: use b10268 or newer prebuilt binaries; older artifacts are no longer supported ([#26375](https://github.com/ggml-org/llama.cpp/pull/26375)). Windows OpenVINO distributions remain unusable until packaging is fixed ([#24729](https://github.com/ggml-org/llama.cpp/issues/24729)).

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Digest — 2026-08-05

## Today’s Highlights

- **v0.32.6-rc0** is out, bringing automatic speculative decoding via MTP for Qwen3.5 on Apple Silicon and an important OpenAI-compatible streaming wire-format alignment.  
- A cluster of tool-calling correctness fixes for Gemma 4 / Qwen derivatives landed as open PRs, including handling of truncated tool calls, missing braces, and runaway repetition.  
- Apertus 1.5 native support is proposed, and a high-interest feature request for MoE expert offload to host RAM could significantly change small-GPU deployment if adopted.

---

## Releases & Breaking Changes

- **v0.32.6-rc0** ([release](https://github.com/ollama/ollama/releases/tag/v0.32.6-rc0)):
  - MLX engine now uses Qwen3.5’s MTP head for automatic speculative decoding on Apple GPUs.
  - `/v1/chat/completions` streaming now matches OpenAI’s wire format: `role` appears only on the first chunk, `finish_reason` on its own chunk, and `usage` in a separate final chunk.
  - **Migration note:** application developers relying on OpenAI-compatible streaming should re-validate chunk parsers — the previous chunk layout is no longer guaranteed.

---

## New Model & Hardware Support

- **Apertus 1.5** support is proposed in [PR #17555](https://github.com/ollama/ollama/pull/17555) for the Swiss AI Apertus v1.5 8B/70B multimodal models. This would resolve the longstanding unsupported-architecture request in [Issue #12149](https://github.com/ollama/ollama/issues/12149).
- **MLX runner DFlash** work is in progress via [PR #17571](https://github.com/ollama/ollama/pull/17571), likely enabling additional MLX backend coverage for dense models.
- Model requests still open:
  - `deepseek-v4-flash:0731` for local users — [Issue #17510](https://github.com/ollama/ollama/issues/17510)
  - `kat-coder-v2.5-dev` — [Issue #17506](https://github.com/ollama/ollama/issues/17506)
  - MLX support for `glm-ocr` in the style of `qwen3.6:27b-mlx` — [Issue #17535](https://github.com/ollama/ollama/issues/17535)
- **Reranking models** remain the top feature request ([Issue #3368](https://github.com/ollama/ollama/issues/3368), 285 👍), but no implementation has appeared yet.

---

## Performance & Optimization

- **Qwen3.5 speculative decoding on Apple GPUs** — v0.32.6-rc0 adds automatic MTP-head-based speculative decoding in the MLX engine, reducing expected decode latency for supported Qwen3.5 models on Apple Silicon. No concrete numbers were included in the release notes.
- **MoE expert offload proposal** — [Issue #17557](https://github.com/ollama/ollama/issues/17557) requests allowing MoE expert weights to live in host RAM with on-demand GPU compute, enabling 16B/35B MoE models on 8GB GPUs. Currently Ollama follows llama.cpp’s default of loading all expert weights into VRAM.
- **MLX CI efficiency** — [PR #17022](https://github.com/ollama/ollama/pull/17022) wires MLX unit tests into PR runs using prebuilt matching versions, avoiding expensive MLX rebuilds in CI.
- No benchmark or throughput data was published in the tracked items today.

---

## Stability & Regressions

Ranked by potential impact:

1. **Gemma4 tool-calling crashes on x86** — [Issue #17568](https://github.com/ollama/ollama/issues/17568): Gemma4 `26b-a4b` / `e4b` crashes Ollama when invoking tools. No fix PR yet.
2. **Three independent Gemma/Qwen tool-calling bugs** — [Issue #17562](https://github.com/ollama/ollama/issues/17562): repetition guard misfiring, truncated tool calls being handed over, and tool calls dropped on a missing closing brace. Fix PRs exist:
   - Repetition payload handling: [PR #17563](https://github.com/ollama/ollama/pull/17563)
   - Don’t hand over unfinished tool calls: [PR #17564](https://github.com/ollama/ollama/pull/17564)
   - Recover tool call missing final brace: [PR #17565](https://github.com/ollama/ollama/pull/17565)
3. **MLX runner panic on Qwen3-8B-MLX-4bit** — [Issue #17569](https://github.com/ollama/ollama/issues/17569): importing a plain Qwen3-8B-MLX-4bit checkpoint succeeds, but the first `/api/chat` request panics in `closure.cpp:104`.
4. **Silent blob corruption** — [Issue #17520](https://github.com/ollama/ollama/issues/17520): a blob whose contents don’t match its digest is not detected or repaired; `pull` reports success. High severity for model integrity.
5. **`OLLAMA_NUM_PARALLEL` silently reduced to 1** — [Issue #17556](https://github.com/ollama/ollama/issues/17556): when VRAM is insufficient, Ollama drops to one slot without any log/API visibility via `ollama ps`.
6. **`/api/generate` ignores `think` when `format` is set** — [Issue #17544](https://github.com/ollama/ollama/issues/17544): structured generation + thinking produces empty/missing thinking blocks, while `/api/chat` works correctly.
7. **Gemma4:26b token/thinking regression** — [PR #17570](https://github.com/ollama/ollama/pull/17570) fixes `->` markup not being translated and thinking aborts not firing.
8. **Llama3.2-vision regression** — [Issue #16490](https://github.com/ollama/ollama/issues/16490) reports vision broken after an update; still open.
9. **Vulkan detection overriding `CUDA_VISIBLE_DEVICES`** — [Issue #16508](https://github.com/ollama/ollama/issues/16508) is now closed; verify behavior in the next stable release.
10. **Docker image Vulkan/NVIDIA packaging gap** — [Issue #17549](https://github.com/ollama/ollama/issues/17549): the Docker image lacks pieces required for Vulkan to detect NVIDIA GPUs; a Dockerfile fix is proposed.

---

## What This Means for Application Developers

- **OpenAI-compatible streaming parsers must be updated** for v0.32.6-rc0: `role`, `finish_reason`, and `usage` now arrive in separate chunks. Test against the new release before promoting to production.
- **Tool-calling agents on Gemma4/Qwen are still risky.** The pending PRs ([#17563](https://github.com/ollama/ollama/pull/17563), [#17564](https://github.com/ollama/ollama/pull/17564), [#17565](https://github.com/ollama/ollama/pull/17565)) address common failure modes, but until merged, guard against truncated tool calls and repetition loops at the application layer.
- **If you need thinking + structured output, prefer `/api/chat`** over `/api/generate` until [Issue #17544](https://github.com/ollama/ollama/issues/17544) is fixed.
- **Validate embedding input lengths.** `/api/embed` silently truncates over-length input; [PR #17543](https://github.com/ollama/ollama/pull/17543) and [PR #17548](https://github.com/ollama/ollama/pull/17548) would add warnings and proper HTTP status codes, but they are not merged yet.
- **Don’t trust `OLLAMA_NUM_PARALLEL` blindly.** Monitor actual slot count and VRAM allocation; [Issue #17556](https://github.com/ollama/ollama/issues/17556) shows silent degradation is possible.
- **Blob corruption can go undetected.** If model behavior seems wrong despite a successful pull, verify the model files manually; [Issue #17520](https://github.com/ollama/ollama/issues/17520) is still open.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-08-05

## 1. Today's Highlights

No release shipped in the last 24 hours, but 246 PRs and 75 issues saw activity — one of the busier maintenance windows this quarter. The most important work is a fix stack for a regression where guardrail-protected requests started failing with "client has been closed" ~75 minutes after boot (self-healing HTTP handlers, plus a safe re-land of evicted-client closing). Redis users should also note a fix for silently dropped telemetry caused by garbage-collected asyncio tasks, and the Langfuse team has upstreamed a request to move LiteLLM onto SDK v4 / OTel v4 ingestion.

## 2. Releases & Breaking Changes

- **None** in the last 24 hours. Latest version referenced in issues is **v1.92.1** ([#34236](https://github.com/BerriAI/litellm/issues/34236)).
- **Dependency constraint incoming:** `fastapi>=0.141.0` removes `get_flat_dependant` and breaks `litellm --version` and proxy startup; a PR pins `fastapi<=0.140.6` ([#35858](https://github.com/BerriAI/litellm/pull/35858)). Pin it yourself if you resolve dependencies loosely.

## 3. New Model & Hardware Support

- **Bedrock Rust provider** — early draft PR with placeholder description only ([#35872](https://github.com/BerriAI/litellm/pull/35872)). No stable details yet.
- **Grok models on Vertex AI** feature request ([#25668](https://github.com/BerriAI/litellm/issues/25668)) was closed during this window; verify the resolution before relying on it.
- Open feature requests with no merged implementation: Bedrock AgentCore Web Search as a native search provider ([#31819](https://github.com/BerriAI/litellm/issues/31819)) and dynamic custom headers for A2A agents ([#21409](https://github.com/BerriAI/litellm/issues/21409)).

## 4. Performance & Optimization

- **Streamed tool-call assembly is now linear-time** (merged [PR #35826](https://github.com/BerriAI/litellm/pull/35826)): argument fragments were concatenated into tuples, copying all prior fragments on every delta and making end-of-stream assembly quadratic. Long tool-call streams can no longer block the worker during finalization.
- **Spend rollups without full-table scans** (open [PR #35839](https://github.com/BerriAI/litellm/pull/35839)): adds a per-session auto-router benchmarks rollup so the UI stops scanning `LiteLLM_SpendLogs`, the widest table in the schema.
- **Index gap can saturate the DB** (open [issue #35766](https://github.com/BerriAI/litellm/issues/35766)): `LiteLLM_SpendLogs` has no `(api_key, startTime)` index, so budget-window spend reseed seq-scans the table. A 2 vCPU RDS instance was pinned, surfacing Prisma P2028 errors on spend updates. No fix PR yet — you may need to add the index manually.

## 5. Stability & Regressions

Ranked by severity:

1. **Response leakage / cross-talk in Redis Cluster on OpenShift** — open [issue #25447](https://github.com/BerriAI/litellm/issues/25447). Responses occasionally returned to the wrong client in a distributed setup. Data-isolation severity; no fix PR referenced.
2. **SpendLogs index gap causing P2028 saturation** — open [issue #35766](https://github.com/BerriAI/litellm/issues/35766). See performance section; transaction failures under normal traffic.
3. **Guardrail 500s ~75 min after boot** — fix PRs in review: [#35862](https://github.com/BerriAI/litellm/pull/35862) adds self-healing HTTP handler clients; [#35870](https://github.com/BerriAI/litellm/pull/35870) re-lands evicted-client closing on top of it. Without these, ~40 guardrail classes hold evicted `httpx` clients and every guarded request 500s.
4. **Redis telemetry silently dropped under load** — fix PR [#35347](https://github.com/BerriAI/litellm/pull/35347): `RedisCache` discarded `create_task()` results, and the loop's weak references allowed service-logging tasks to be collected mid-flight.
5. **TPM limiting incorrect for virtual keys** — open [issue #24677](https://github.com/BerriAI/litellm/issues/24677). Originally filed against v1.80.0 (#18953), marked solved, then reproduced on **v1.82.3**.
6. **Streaming translation bugs on the Anthropic-compatible `/v1/messages` endpoint** — multiple open issues with no merged fix: first `text_delta` dropped after thinking → text transition ([#30765](https://github.com/BerriAI/litellm/issues/30765)); first chunk dropped on content-block transitions for Bedrock reasoning models ([#25214](https://github.com/BerriAI/litellm/issues/25214)); `thinking_delta` mis-encoded inside a text block plus duplicate `message_start`, producing empty content in Claude Code ([#32357](https://github.com/BerriAI/litellm/issues/32357)). Related: Azure Responses API streaming omits required SSE setup events ([#20975](https://github.com/BerriAI/litellm/issues/20975)) and OCI sync streaming is missing `split_chunks`, causing JSONDecodeError ([#24819](https://github.com/BerriAI/litellm/issues/24819)).
7. **`litellm-non_root` cannot run Prisma migrations** — open [issue #34236](https://github.com/BerriAI/litellm/issues/34236): upgrading 1.84.0 → 1.92.1 fails because `@prisma/engines` is not writable in the non-root image.
8. **Proxy never exits degraded mode on permanent DB faults** — open fix PR [#35864](https://github.com/BerriAI/litellm/pull/35864): any unrecognized Prisma error was treated as a recoverable DB outage; the fix allowlists genuinely transient errors only.
9. **Ollama Vision VLM calls fail** — open [issue #27183](https://github.com/BerriAI/litellm/issues/27183): missing `pillow` dependency in the container image breaks VLM chat calls.
10. **UI static export 404s on sub-routes** — open [issue #24037](https://github.com/BerriAI/litellm/issues/24037) (26 👍): `/ui/chat`, `/ui/logs`, etc. return `{"detail":"Not Found"}` because the Next.js static export lacks `index.html` in subdirectories.

**Merged fixes worth noting:**

- S3 v2 URL signing switched to `S3SigV4Auth` so encoded paths with spaces/aliases no longer 403 ([#35726](https://github.com/BerriAI/litellm/pull/35726)).
- Responses API stream handling guards empty-choice chunks and finalizes reasoning on usage chunks ([#35867](https://github.com/BerriAI/litellm/pull/35867), open).
- `/v1/responses` caller `metadata` now flows into logging callbacks as trace fields — fixes null `sessionId`/`userId`/`metadata` in Langfuse traces ([#35866](https://github.com/BerriAI/litellm/pull/35866), open).
- Prisma protocol seams and a spend-reset unit of work landed to simplify repository-layer access ([#35748](https://github.com/BerriAI/litellm/pull/35748)).

## 6. What This Means for Application Developers

- **Be careful upgrading guardrail or caching behavior right now.** Until [#35862](https://github.com/BerriAI/litellm/pull/35862)/[#35870](https://github.com/BerriAI/litellm/pull/35870) land, there is a live regression where guarded requests fail after ~75 minutes of uptime.
- **Anthropic `/v1/messages` + reasoning models remains the most fragile path.** Dropped, duplicated, or mis-encoded stream deltas translate to empty responses in Claude Code. Test streaming thoroughly and pin a proxy version once a fix ships.
- **Pin `fastapi<0.141.0`** to avoid startup ImportError ([#35858](https://github.com/BerriAI/litellm/pull/35858)).
- **Redis-backed users should track [#35347](https://github.com/BerriAI/litellm/pull/35347)** — telemetry can be silently dropped under load until it merges.
- **Langfuse users:** watch for the v4 / OTel v4 ingestion migration ([#33383](https://github.com/BerriAI/litellm/issues/33383)) and the [#35866](https://github.com/BerriAI/litellm/pull/35866) metadata fix if you're using `/v1/responses` traces.
- **If you run budget windows on a small Postgres instance,** consider manually adding an `(api_key, startTime)` index on `LiteLLM_SpendLogs` to avoid P2028 spend-update failures while [#35766](https://github.com/BerriAI/litellm/issues/35766) is open.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth Digest — 2026-08-05

## Today's Highlights
- Unsloth released **v0.1.52-beta** with Dynamic GGUF support for **DeepSeek-V4 Flash 0731** and **Kimi K3**, plus faster downloads and automatic HTTP fallback when XET stalls.
- A critical fix for the recurring **Pi/agent streaming hang** ([#7617](https://github.com/unslothai/unsloth/issues/7617)) is proposed in [PR #7881](https://github.com/unslothai/unsloth/pull/7881), which bounds teardown awaits so a swallowed cancellation cannot wedge the API.
- The Studio train-page rework ([#7633](https://github.com/unslothai/unsloth/pull/7633)) continues to surface regressions — dataset cache reconciliation loops ([#7853](https://github.com/unslothai/unsloth/issues/7853)) and tokenizer fallback failures ([#7845](https://github.com/unslothai/unsloth/issues/7845)) — so training workflows should be validated carefully.

## Releases & Breaking Changes
- [v0.1.52-beta](https://github.com/unslothai/unsloth/releases) — Faster downloading + DeepSeek-V4 Flash 0731. Improves downloads for Colab, low-memory, high-memory and CPU systems; falls back to HTTP if XET is stuck. Enables local running of **Kimi K3** and **DeepSeek-V4 Flash** through Unsloth Dynamic GGUFs.
- No explicit breaking changes were announced in this release.
- Watch [PR #7866](https://github.com/unslothai/unsloth/pull/7866) for **transformers 5.x / TRL 0.22.x / peft** compatibility; it fixes five import/runtime failures, including vLLM config classes broken by the transformers 5.x dataclass conversion.

## New Model & Hardware Support
- **Dynamic GGUF support** for Kimi K3 and DeepSeek-V4 Flash 0731 in v0.1.52-beta.
- Diffusion GGUFs are being integrated into Studio via the closed [PR #5754](https://github.com/unslothai/unsloth/pull/5754): FLUX.2, FLUX.2 klein, FLUX.1, and Qwen-Image.
- ModernBERT sequence classification `num_labels` support landed in [PR #4244](https://github.com/unslothai/unsloth/pull/4244).
- Qwen3.5-0.8B/2B finetunes are actively being tested in Studio, but **vLLM serving of Qwen3.5 finetunes remains broken** ([#7681](https://github.com/unslothai/unsloth/issues/7681)).

## Performance & Optimization
- **Downloader improvements** in v0.1.52-beta: more efficient downloads for Colab and low-memory systems, plus HTTP fallback when XET gets stuck.
- [PR #7831](https://github.com/unslothai/unsloth/pull/7831) bounds `dataset_num_proc` by memory and stops treating `1` as “no multiprocessing”, addressing intermittent `Dataset.map()` subprocess crashes.
- [PR #7873](https://github.com/unslothai/unsloth/pull/7873) preflights the Codex GGUF requirement from the hub file listing, avoiding a full model load before rejecting a non-GGUF repo.
- [PR #7880](https://github.com/unslothai/unsloth/pull/7880) adds a VRAM memory bar to downloaded model rows, making context/KV-cache headroom visible before load.
- [PR #7629](https://github.com/unslothai/unsloth/pull/7629) replaces the singleton active-chat prompt queue with independent per-chat queues, allowing parallel chats under the inference concurrency cap.
- [PR #7867](https://github.com/unslothai/unsloth/pull/7867) keeps explicitly requested float32 training in float32 on GPUs without bf16 support (T4/V100), preventing unintended fp16 autocast.

## Stability & Regressions
Ranked by severity:

1. **Installer can remove existing Python/PyTorch/CUDA** — [#7818](https://github.com/unslothai/unsloth/issues/7818). Open.
2. **Studio Qwen3.5-2B QLoRA worker exits on first chat generation** — [#7843](https://github.com/unslothai/unsloth/issues/7843). Open.
3. **API streaming to Pi agent frequently hangs** — [#7617](https://github.com/unslothai/unsloth/issues/7617). Fix PR exists: [#7881](https://github.com/unslothai/unsloth/pull/7881).
4. **Dataset cache reconciliation loops format checks** — [#7853](https://github.com/unslothai/unsloth/issues/7853). Regression from [#7633](https://github.com/unslothai/unsloth/pull/7633). Open.
5. **Weight-only cached snapshot prevents tokenizer Hub fallback** — [#7845](https://github.com/unslothai/unsloth/issues/7845). Regression from [#7633](https://github.com/unslothai/unsloth/pull/7633). Open.
6. **Cached resources stuck at “Downloading 99%” without active download** — [#7858](https://github.com/unslothai/unsloth/issues/7858). Open.
7. **Docker Hub Studio image outdated** — [#6180](https://github.com/unslothai/unsloth/issues/6180). Image remains at 0.1.43 and fails on Gemma4 12B execution. Open.
8. **Ollama integration regressions** — [#7877](https://github.com/unslothai/unsloth/issues/7877). Ollama-downloaded models no longer visible; context size set too small. Open.
9. **Windows install.ps1 venv rollback splits environment** — [#7810](https://github.com/unslothai/unsloth/issues/7810). Open.
10. **On-device models slow to appear after Studio startup** — [#7849](https://github.com/unslothai/unsloth/issues/7849). Open.
11. **Strix Halo memory hard-coded to 80%** — [#7878](https://github.com/unslothai/unsloth/issues/7878). Open.
12. **Qwen3.5 finetunes cannot be served via vLLM** — [#7681](https://github.com/unslothai/unsloth/issues/7681). Open.

Additional fixes in review: wrong GGUF companion bytes ([#7870](https://github.com/unslothai/unsloth/pull/7870)), desktop startup request sent to unvalidated port 8888 ([#7852](https://github.com/unslothai/unsloth/pull/7852)), and clearer save/GGUF-export failure reporting ([#7861](https://github.com/unslothai/unsloth/pull/7861)).

## What This Means for Application Developers
- If you are building agents on Studio’s OpenAI-compatible API, the Pi streaming hang is actively being addressed in [#7881](https://github.com/unslothai/unsloth/pull/7881). Until merged, add caller-side timeouts and retries.
- To run DeepSeek-V4 Flash or Kimi K3 locally, upgrade to **v0.1.52-beta** and use the Dynamic GGUF path. The downloader now falls back to HTTP if XET is stuck.
- Studio training workflows should be locked to a known-good version until the cache/tokenizer regressions from [#7633](https://github.com/unslothai/unsloth/pull/7633) are resolved.
- Do not rely on vLLM to serve Qwen3.5 LoRA finetunes yet ([#7681](https://github.com/unslothai/unsloth/issues/7681)).
- Before upgrading to transformers 5.x / TRL 0.22.x / peft, track [PR #7866](https://github.com/unslothai/unsloth/pull/7866). The compatibility fixes are not merged yet.
- On Windows, avoid running the installer until the rollback bug [install.ps1 #7810](https://github.com/unslothai/unsloth/issues/7810) is fixed. On T4/V100, [PR #7867](https://github.com/unslothai/unsloth/pull/7867) finally makes explicitly requested float32 training genuinely float32.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*