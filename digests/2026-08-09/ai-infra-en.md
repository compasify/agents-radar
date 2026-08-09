# AI Infrastructure Digest 2026-08-09

> Generated: 2026-08-09 00:51 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# Cross-Project AI Infrastructure Report — 2026-08-09

## 1. Ecosystem Overview

DeepSeek-V4 is the stress test for the entire serving stack today: every project in this digest has its hardest open bugs, performance work, or speculative-decoding feature tied to the DSV4 family (DSpark, flashmla, VP4 KV state, thinking-tag leaks). The industry is simultaneously pushing three transitions — Blackwell FP4/NVFP4 quantization, multi-vendor hardware (AMD ROCm/HIP, Intel SYCL, Apple MLX), and agentic workloads that demand tool-call/streaming correctness — and none of the three is release-stable yet. Performance engineering is shifting from raw throughput alone toward correctness-at-scale: KV-cache integrity, draft-model fidelity, and gateway-level API semantics are now where production incidents live. Cold start and memory hierarchy (sub-second weight loading, host-resident experts, disk-streamed MoE) are emerging as the next measurable frontier for large-MoE economics.

## 2. Activity Comparison

Counts reflect issues/PRs cited in the 24-hour digests, not full repo totals.

| Project | Issues (cited) | PRs (cited) | Release status (24h) | Layer |
|---|---|---|---|---|
| vLLM | ~14 | ~14 | None; v0.26.0 (07-27) still stable, missing NVFP4 fix | Serving engine |
| SGLang | ~16 | ~15 | None | Serving engine + runtime |
| llama.cpp | ~14 | ~12 | **5 releases** (b10327–b10331) | Local runtime |
| Ollama | ~15 | ~10 | None | Local runtime + distribution |
| LiteLLM | ~17 | ~11 | **2 releases** (v1.97.0-rc.1, v1.94.2, cosign signing) | Gateway / proxy |
| Unsloth | ~18 | **125 repo-wide** | None | Fine-tuning + Studio |

Takeaways: **llama.cpp** is the only project shipping continuously (5 releases, tool isolation + CUDA fusion landed). **Unsloth** had the highest raw PR velocity (125) but is in a hardening phase — Studio bugfixes dominate, with no release cut. **LiteLLM** shipped only cosign-signing releases while carrying the largest open correctness debt on the `/v1/responses` path. **vLLM** and **SGLang** are both in a "features ahead of stable" state: vLLM's NVFP4 correctness fix (#48929) and SGLang's DSpark fixes are merged but not released.

## 3. Model Support Race

| Model / architecture | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|---|---|---|---|---|---|
| DeepSeek-V4 / Flash-0731 | DP8-vs-TP8 study on B200; SM90 crash; HiSparse proposed | DSpark AMD HIP closed; AIME25 regression (97.08→93.96) open | DSpark spec-decode PR merge-ready; KV state corruption open | Cloud model leaks `</think>` → 193-call agent loop | Fine-tunes Qwen3.6, not DSV4-specific |
| MiniCPM-SALA | — | **Native serving PR** (#30360) | — | — | — |
| MiniMax M3 | NVFP4 + EAGLE3 benchmark (2.1–2.3× decode) | **Via TRT-LLM PR** (#33962) | — | — | — |
| GLM-4.7-Flash / GLM-5.x | — | **FA4 backend** (#33436); CuTe allreduce tuned for GLM-5.2 | — | — | — |
| TML Inkling | — | — | **Full architecture** (GGUF converter + banded FA kernel, #25731) | — | — |
| Maple (TQ1_0/TQ2_0) | — | — | Requested, not implemented | — | — |
| Kimi K3 / K2.6 | ROCm AITER FP8 KV fix | K2.6 NVFP4 ~3.7% regression open | — | Cloud request closed | — |
| Apple Silicon | — | — | — | **MLX vision PR** (#17600), currently broken | **Metal video gen** (#8198), MLX training fixes |

**Who is ahead:** *SGLang* shipped the most new model/backend integrations in this window (MiniCPM-SALA, MiniMax M3 via TRT-LLM, GLM-4.7-Flash FA4, DSpark-on-AMD). *llama.cpp* leads on novel architecture breadth and format coverage (TML Inkling, Maple request, GGUF converters). *vLLM* leads on frontier-hardware optimization data for DeepSeek-V4 on B200 (DP8 KV-capacity/TTFT study) but lags on stable model enablement. *Ollama* and *Unsloth* are the Apple Silicon frontier, with MLX vision and Metal video generation both landing in PRs but not yet safe for production.

## 4. Performance Frontier

| Focus area | Notable results this window |
|---|---|
| **KV cache / memory** | vLLM DP8 vs TP8 on 8× B200: **7.7× effective KV capacity, 3.4× faster 1M-token TTFT** (#51454). llama.cpp SYCL TILE quantized-KV decode: **+42% to +169%** on Qwen3.6-35B / Gemma 4 at 32–118K context (#26689). Counter-signal: Ollama q4_0 KV quant produces garbage output (#17614); vLLM NIXL/HMA silently halves KV capacity (#42024). |
| **Kernels** | vLLM 8-warp `_topk_topp_kernel` for 8192-wide vocab tiles (#51507). llama.cpp CUDA rms_norm+mul+rope fusion (b10330), HIP Q2_0 path **+33–35%** on gfx1201. SGLang CuTe DSL AllReduce+Residual+RMSNorm fusion, tiny-batch `moe_align` on pair axis. |
| **Quantization** | NVFP4/W4A16 is the active battlefront: vLLM correctness fix (#48929) merged but **not in stable**; SGLang Blackwell dense + MoE NVFP4 GEMMs in development (#33711/#33710); llama.cpp TQ1_0/TQ2_0 for Maple in design. |
| **Distributed serving** | DP8 attention is the new headline (vLLM #51454); SGLang closed DSpark-on-AMD HIP; GQA DCP KV-head mapping fixed. SGLang wide-EP deployments of GLM5-2/Kimi-K3 on GB200 failing with no maintainer response (#34120). |
| **Speculative decoding** | Highest leverage, highest risk: vLLM Mamba2 ReplaySSM caching + MRV2 DSD (non-functional under V2 runner); SGLang DSpark draft-depth-5 corruption; llama.cpp DSpark drafter merge-ready; Unsloth MTP **halves throughput** by forcing single-slot serving (#8172); vLLM documents catastrophic DSD throughput collapse at batch thresholds (#49548). |
| **Cold start / memory hierarchy** | SGLang Weight Cache Daemon: weight load **306–327s → <1s** on Qwen3-235B FP8 (#27139). llama.cpp `--lazy-experts` streams MoE tensors from disk/page cache for models larger than RAM (#26003). Ollama MoE host-RAM offload still design-phase (#17557, #8861). |

## 5. Layer Positioning

- **vLLM** — production serving engine with kernel-level ownership (PagedAttention lineage, custom sampler kernels, DP8/TP8 studies). Optimizes for multi-GPU frontier serving on NVIDIA hardware; ROCm support is maturing but trailing.
- **SGLang** — serving engine + runtime with the most aggressive frontier-model integration (DSpark EP, Weight Cache Daemon, Blackwell NVFP4). Closest to "full-stack serving for the newest models," but correctness regressions on those exact paths are the trade-off.
- **llama.cpp** — local/edge runtime with the broadest hardware and format footprint (CPU, CUDA, HIP, SYCL, Vulkan, Hexagon NPU; GGUF). The reference for "run anything anywhere," now adding server-grade features (tool isolation, expert streaming).
- **Ollama** — developer-facing local distribution layer built on llama.cpp + MLX; owns the UX moat (model management, cloud, CLI/IDE integrations). Its incidents are where agentic clients hit runtime edge cases (thinking-tag leaks, namespace tools, terminal events).
- **LiteLLM** — the gateway/control-plane layer: routing, auth, budgets, model aliasing, API translation across hundreds of providers. Its correctness debt is concentrated on the newest API surfaces (`/v1/responses`, Anthropic streaming), which is exactly where agent clients live.
- **Unsloth** — fine-tuning/training layer (QLoRA, GRPO, MLX) plus Studio, which wraps llama-server for local serving. Its digest is dominated by Studio product hardening rather than core inference architecture — it is the only project with a meaningful training-loop angle in this window.

## 6. Trend Signals

1. **DeepSeek-V4 is the industry-wide stress test.** Every project's most severe open issue is DSV4-related: KV state desync and garbled parallel output (llama.cpp #26777/#26741), AIME25 accuracy drop and SM120 corruption (SGLang #32038/#33800), SM90 crash (vLLM #50660), and the $31M-token agent loop from a leaked `</think>` on Ollama Cloud (#17617). Frontier model quality is outrunning serving-stack correctness — plan validation gates around DSV4 variants.

2. **Speculative decoding is a dual-edged optimization.** EAGLE3 on NVFP4 delivers 2.1–2.3× decode, but the failure modes are disproportionately severe and silent: MTP forcing single-slot serving (halved throughput), DSD batch-threshold collapse, greedy divergence on quantized targets, draft-depth-dependent corruption. Treat spec-decode as a per-model, per-hardware, per-batch-size tuning problem, not a default.

3. **Blackwell FP4/NVFP4 is not release-safe yet.** The key correctness fix (vLLM #48929) is merged but absent from stable; SGLang GEMMs are in development; llama.cpp ternary quantizations are in design; Ollama's low KV quantization produces garbage. Anyone deploying NVFP4 in production should pin post-fix builds and validate outputs.

4. **Agentic workloads are redefining "correct serving."** The highest-impact incidents this window are not throughput regressions but semantics failures: dropped text in streamed `/v1/responses` (LiteLLM #36327), completed-but-empty background polls (#36275), tool-call enum violations (Ollama #17597), alias canonicalization stripping thinking blocks (vLLM #51266), and clean EOF without terminal events (Ollama #17531). For LLM gateway and serving teams, API-surface correctness is now a first-class feature.

5. **Hardware diversity is table stakes, and quality lags.** AMD (ROCm/HIP) fixes landed across all projects, but Windows/ROCm memory exhaustion (Unsloth #8188), MI325X shared-memory limits (vLLM #41963), and HIP-specific crashes remain open. Intel SYCL is advancing fastest (llama.cpp +42–169% KV decode, Ollama backend PR) but is still opt-in and unproven at scale.

6. **Cold start and memory hierarchy are the next frontier for large MoE.** Sub-second weight load via daemon (SGLang), disk-streamed experts (llama.cpp), and host-RAM offload requests (Ollama) point at a future where 200B+ MoEs run on far smaller GPU footprints. Watch llama.cpp's `--lazy-experts` and PCIe-DMA expert offload as the likely next major VRAM-saving step.

**What to watch as an application/agent developer:** put hard loop guards and tool-call schema validation in your client (do not rely on serving layers); pin builds for NVFP4/DSV4 workloads rather than tracking stable; validate streaming terminal-event and tool-delta behavior specifically on LiteLLM/Ollama gateways; and for long-context B200 DeepSeek-V4 workloads, evaluate DP8 attention — the reported 7.7× KV / 3.4× TTFT gains are the most significant single performance signal in this digest.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest — 2026-08-09

## 1. Today's Highlights

DeepSeek-V4-Flash-0731 dominates this digest: a new DP8-vs-TP8 study on 8x B200 reports 7.7x more effective KV capacity and 3.4x faster 1M-token TTFT at c=8 ([#51454](https://github.com/vllm-project/vllm/issues/51454)), while SM8x/Ampere support remains an open request ([#50576](https://github.com/vllm-project/vllm/issues/50576)). Kernel and speculative-decoding work is also active: ReplaySSM caching for Mamba2 spec decode ([#49847](https://github.com/vllm-project/vllm/pull/49847)), an 8-warp sampler kernel ([#51507](https://github.com/vllm-project/vllm/pull/51507)), and MRV2 spec-decode support ([#43091](https://github.com/vllm-project/vllm/pull/43091)). No vLLM release landed in the last 24 hours.

## 2. Releases & Breaking Changes

- No new releases in the last 24h. `v0.26.0` (cut 2026-07-27) is still the latest stable, but per [#51494](https://github.com/vllm-project/vllm/issues/51494) it does not contain the NVFP4 inference-correctness fix [#48929](https://github.com/vllm-project/vllm/issues/48929) merged 2026-08-05.
- Open behavior change under review: [#51488](https://github.com/vllm-project/vllm/pull/51488) proposes rejecting new requests while generation is paused (`pause_generation(mode="abort")`). If merged, this changes admission-control semantics.

## 3. New Model & Hardware Support

- **DeepSeek-V4-Flash-0731**: No new support landed. SM8x/Ampere support is requested in [#50576](https://github.com/vllm-project/vllm/issues/50576); SM90 stability issues are tracked in [#50660](https://github.com/vllm-project/vllm/issues/50660). HiSparse host-resident sparse-MLA decode for DeepSeek V4 is proposed in [#51323](https://github.com/vllm-project/vllm/pull/51323).
- **FA4 Dense and MLA**: [#51416](https://github.com/vllm-project/vllm/pull/51416) adds integration/benchmarks for flash-attention PR [#177](https://github.com/vllm-project/flash-attention/pull/177).
- **MRV2 model runner**: draft-model speculative decoding ([#43091](https://github.com/vllm-project/vllm/pull/43091)), prompt embeds ([#42963](https://github.com/vllm-project/vllm/pull/42963)), and spec-decode + Mamba prefix-cache alignment ([#42792](https://github.com/vllm-project/vllm/pull/42792)) are in progress.
- **ROCm**: [#50907](https://github.com/vllm-project/vllm/pull/50907) removes stale SDPA/skinny GEMM workarounds; [#51457](https://github.com/vllm-project/vllm/pull/51457) adds gfx950 AITER FP8 MLA prefill accuracy coverage; [#51011](https://github.com/vllm-project/vllm/pull/51011) fixes AITER MLA fp8 KV decode for Kimi-K3 at TP8.
- **Quantization**: [#49529](https://github.com/vllm-project/vllm/issues/49529) proposes adopting PTX 9.4 `ldmatrix.s8.s4` for W4A8-INT8 paths.

## 4. Performance & Optimization

- **Sampler kernel**: [#51507](https://github.com/vllm-project/vllm/pull/51507) launches `_topk_topp_kernel` with 8 warps on CUDA, reducing per-tile latency on 8192-wide fp32 vocab tiles.
- **Mamba2 speculative decode**: [#49847](https://github.com/vllm-project/vllm/pull/49847) adds ReplaySSM input caching, the third sub-PR from the larger ReplaySSM draft [#47576](https://github.com/vllm-project/vllm/pull/47576).
- **GPU sync reduction**: [#51458](https://github.com/vllm-project/vllm/pull/51458) removes blocking GPU→CPU syncs on per-forward paths found via `VLLM_GPU_SYNC_CHECK`.
- **MLA / DeepSeek-V4-Flash-0731**: [#51454](https://github.com/vllm-project/vllm/issues/51454) reports DP8 vs TP8 gives ~7.7x more KV capacity and 3.4x faster 1M-token TTFT at c=8 on 8x B200.
- **NVFP4**: [#51494](https://github.com/vllm-project/vllm/issues/51494) reports MiniMax-M3-NVFP4 on 8x B200 reaches 2.1–2.3x decode with EAGLE3 after the #48929 correctness fix.
- **Dynamic speculative decoding**: [#49548](https://github.com/vllm-project/vllm/issues/49548) documents catastrophic aggregate-throughput collapse at batch-size thresholds; [#49986](https://github.com/vllm-project/vllm/issues/49986) identifies the PIECEWISE cudagraph override as a factor in the DSD baseline tax.

## 5. Stability & Regressions

- **NVFP4 correctness / unreleased fix**: MiniMax-M3-NVFP4 results before #48929 are suspect; no stable release contains the fix ([#51494](https://github.com/vllm-project/vllm/issues/51494)).
- **Marlin W4A8-FP8 corruption on GB10**: `VLLM_MARLIN_INPUT_DTYPE=fp8` silently corrupts WNA16 INT4 MoE output on sm_121a, causing repeated `</think>` loops at temperature 0 ([#49546](https://github.com/vllm-project/vllm/issues/49546)).
- **DeepSeek-V4-Flash-0731 crash**: Async prefill/flashmla fails with a `CUresult::CUDA_SUCCESS` assertion on SM90 ([#50660](https://github.com/vllm-project/vllm/issues/50660)).
- **Prefix-cache inconsistency**: first request differs from identical subsequent requests at temperature 0 when prefix caching is enabled ([#40896](https://github.com/vllm-project/vllm/issues/40896)).
- **Anthropic-compatible serving**: `/v1/messages` canonicalizes model aliases, causing Claude Code to strip thinking blocks during tool-use loops ([#51266](https://github.com/vllm-project/vllm/issues/51266)).
- **MRV2 + dynamic SD**: `AutoRegressiveSpeculator` ignores scheduler dynamic K, making DSD non-functional under `VLLM_USE_V2_MODEL_RUNNER=1` ([#51510](https://github.com/vllm-project/vllm/issues/51510)).
- **NIXL/HMA**: connector silently disables HMA and halves KV cache capacity; default flip requested in [#42024](https://github.com/vllm-project/vllm/issues/42024).
- **ROCm MI325X**: Triton `fp8_mqa_logits` kernel requires 96KB shared memory vs the 64KB MI325X limit ([#41963](https://github.com/vllm-project/vllm/issues/41963)).
- **Closed/verified fixes**: Inkling block-end leakage with tools fixed in [#51391](https://github.com/vllm-project/vllm/pull/51391); ROCm AITER fp8 KV decode fixed in [#51011](https://github.com/vllm-project/vllm/pull/51011).

## 6. What This Means for Application Developers

- If you serve DeepSeek-V4-Flash-0731 on B200-class hardware, evaluate DP8 for long-context MLA workloads — the reported TTFT/KV gains are significant, but expect SM90 stability issues until the flashmla/async path is fixed ([#51454](https://github.com/vllm-project/vllm/issues/51454), [#50660](https://github.com/vllm-project/vllm/issues/50660)).
- Avoid `v0.26.0` for NVFP4 models such as MiniMax-M3-NVFP4; use a post-#48929 build or nightly until the next stable release.
- For Claude Code / Anthropic-compatible clients, serve each model under exactly one alias; alias canonicalization in `/v1/messages` can silently break thinking blocks ([#51266](https://github.com/vllm-project/vllm/issues/51266)).
- If using FP8 KV cache or MTP speculative decoding on Qwen/Gemma/GLM, test carefully: several closed correctness bugs are linked to those paths ([#46088](https://github.com/vllm-project/vllm/issues/46088), [#42179](https://github.com/vllm-project/vllm/issues/42179)).
- Don't enable dynamic speculative decoding with MRV2 yet; the scheduler's dynamic K is ignored ([#51510](https://github.com/vllm-project/vllm/issues/51510)), and batch-threshold throughput collapses remain unresolved ([#49548](https://github.com/vllm-project/vllm/issues/49548)).

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest — 2026-08-09

## Today's Highlights
DeepSeek-V4 remains the dominant theme: a fix for the DSpark shared-expert loading regression landed ([#34139](https://github.com/sgl-project/sglang/pull/34139)), AMD HIP DSpark support closed out ([#30964](https://github.com/sgl-project/sglang/pull/30964)), and a dedicated NVIDIA perf-tracking issue was opened ([#33636](https://github.com/sgl-project/sglang/issues/33636)). On the correctness front, two DSpark issues — an AIME25 accuracy regression ([#32038](https://github.com/sgl-project/sglang/issues/32038)) and SM120 draft-depth-5 output corruption ([#33800](https://github.com/sgl-project/sglang/issues/33800)) — remain open with no fix PR yet. Blackwell NVFP4 W4A16 GEMM enablement is in active development ([#33711](https://github.com/sgl-project/sglang/issues/33711), [#33710](https://github.com/sgl-project/sglang/issues/33710)), and new model support landed for MiniCPM-SALA ([#30360](https://github.com/sgl-project/sglang/pull/30360)) and MiniMax M3 via TRT-LLM ([#33962](https://github.com/sgl-project/sglang/pull/33962)).

## Releases & Breaking Changes
No new releases in the last 24 hours.

## New Model & Hardware Support
- **MiniCPM-SALA** — native serving support, PR open: [#30360](https://github.com/sgl-project/sglang/pull/30360)
- **MiniMax M3 via TRT-LLM** — enabled by preserving SwiGLU params: [#33962](https://github.com/sgl-project/sglang/pull/33962)
- **GLM-4.7-Flash** — FA4 attention backend support: [#33436](https://github.com/sgl-project/sglang/pull/33436)
- **DeepSeek V4 DSpark on AMD HIP** — support PR closed: [#30964](https://github.com/sgl-project/sglang/pull/30964)
- **SM120 (Blackwell)** — dense NVFP4 W4A16 BF16-activation GEMM requested ([#33711](https://github.com/sgl-project/sglang/issues/33711)); B12X NVFP4 W4A16 MoE GEMM requested ([#33710](https://github.com/sgl-project/sglang/issues/33710))
- **Krea-2 / Krea-2 Turbo** — online FP8 quantization requested: [#34135](https://github.com/sgl-project/sglang/issues/34135)
- **Apple Silicon** — Q2 2026 roadmap still open for contributors: [#19137](https://github.com/sgl-project/sglang/issues/19137)
- **Wide EP for GLM5-2 / Kimi-K3 on GB200/B200** — user reports deployment failures; no maintainer response yet: [#34120](https://github.com/sgl-project/sglang/issues/34120)

## Performance & Optimization
- **Weight Cache Daemon** ([roadmap #33522](https://github.com/sgl-project/sglang/issues/33522)): Phase 1 landed in [#27139](https://github.com/sgl-project/sglang/pull/27139) — weight load drops from ~306–327s to **<1s** on Qwen3-235B FP8 via per-rank CUDA IPC daemon. Major cold-start win.
- **DeepSeek V4 DSpark shared-expert loading** — fixes performance regression from model-local fusion (#33889): [#34139](https://github.com/sgl-project/sglang/pull/34139)
- **DeepSeek V4 prefill context-parallel two-batch overlap** on AMD: [#33480](https://github.com/sgl-project/sglang/pull/33480)
- **Tiny-batch `moe_align` on pair axis** — avoids expert-axis scaling for bs=1 decode with hundreds of experts: [#34131](https://github.com/sgl-project/sglang/pull/34131)
- **CuTe DSL allreduce fusion** from FlashInfer — fuses AllReduce + Residual + RMSNorm and folds MoE finalize; tuned for GLM-5.2: [#34134](https://github.com/sgl-project/sglang/pull/34134)
- **Vectorized JointThreshold decoding on CUDA** — removes per-row Python serialization at higher concurrency: [#34122](https://github.com/sgl-project/sglang/pull/34122)
- **Mamba boundary mask reuse** — reuse `ScheduleBatch`-computed mask instead of recomputing per request: [#33477](https://github.com/sgl-project/sglang/pull/33477)
- **SM100 trtllm-gen mxfp4 MoE** migrated onto `MoeRunner` as part of the MoE refactor: [#32405](https://github.com/sgl-project/sglang/pull/32405)

## Stability & Regressions
- **DSpark accuracy regression on DeepSeek-V4-Flash** — AIME25 drops 97.08→93.96; open: [#32038](https://github.com/sgl-project/sglang/issues/32038)
- **DSpark SM120 corruption at draft depth 5** — depths 3/4/6/7 clean; open: [#33800](https://github.com/sgl-project/sglang/issues/33800)
- **DeepSeek-V4-Flash-0731 progressive output corruption under concurrency** on 2× H200 with DP attention; open: [#33397](https://github.com/sgl-project/sglang/issues/33397)
- **Kimi-K2.6 NVFP4 throughput regression** — ~3.7% on 4× GB300 TP4 (1K in/1K out, concurrency 1) caused by piecewise prefill CUDA graph (#30889); open: [#32655](https://github.com/sgl-project/sglang/issues/32655)
- **Qwen3-MoE garbage output with mori a2a backend** — `is_deepep()` exact enum match caused double-combine; fixed: [#34006](https://github.com/sgl-project/sglang/pull/34006)
- **DCP KV head mapping for GQA models** — fixed: [#32858](https://github.com/sgl-project/sglang/pull/32858)
- **`sgl-model-gateway` rejects `/v1/responses` with custom tool types** — `openai-protocol` crate out of sync with Python `protocol.py`; breaks Codex CLI; open: [#30781](https://github.com/sgl-project/sglang/issues/30781)
- **Streaming abort cleanup** now bound to request lifecycle — prevents aborts by request ID on never-started streams: [#34138](https://github.com/sgl-project/sglang/pull/34138)
- **CI health** — 3 broken, 11 flaky, 670 recently fixed per auto-tracker: [#17050](https://github.com/sgl-project/sglang/issues/17050)
- **Closed/inactive this cycle** (historical, auto-closed): DeepSeek-V4-Pro Triton MoE TP=8 PP=2 assertion ([#27497](https://github.com/sgl-project/sglang/issues/27497)), B200 Qwen3-30B-A3B CUDA illegal memory access ([#27712](https://github.com/sgl-project/sglang/issues/27712)), GLM-5.1 HiCache hangs ([#26357](https://github.com/sgl-project/sglang/issues/26357)), PD KV-transfer 70s GC stalls ([#27476](https://github.com/sgl-project/sglang/issues/27476)).

## What This Means for Application Developers
- **DeepSeek-V4-Flash with DSpark**: two open correctness issues affect accuracy and stability on SM120/H200 ([#32038](https://github.com/sgl-project/sglang/issues/32038), [#33800](https://github.com/sgl-project/sglang/issues/33800), [#33397](https://github.com/sgl-project/sglang/issues/33397)). If you serve this model, validate output quality on your workload and consider pinning draft depth to 3 or 4 pending a fix.
- **`sgl-model-gateway` is currently incompatible with `/v1/responses` requests carrying custom tool types** — OpenAI Codex CLI and similar clients will be rejected until the Rust crate is resynced ([#30781](https://github.com/sgl-project/sglang/issues/30781)).
- **Cold-start-heavy serving benefits from the Weight Cache Daemon** ([#33522](https://github.com/sgl-project/sglang/issues/33522)): sub-second weight load after first boot on Qwen3-235B FP8 — worth tracking if you run many short-lived replicas.
- **Qwen3-MoE + mori a2a users should pick up #34006** to avoid garbage outputs; GLM-4.7-Flash users gain the FA4 backend via [#33436](https://github.com/sgl-project/sglang/pull/33436).
- **Watch the Kimi-K2.6 NVFP4 ~3.7% regression** ([#32655](https://github.com/sgl-project/sglang/issues/32655)) if you enable piecewise prefill CUDA graphs on GB300 at TP4 — the root cause is under investigation.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp Digest — 2026-08-09

## Today's Highlights
llama.cpp shipped **b10327–b10331**, headlined by initial Docker-based **tool isolation for llama-server** (#26507) and a new **CUDA rms_norm + mul + rope fusion** (#26767). On the performance side, SYCL TILE quantized-KV decode reports **+42% to +169%** gains (#26689), and a dedicated HIP Q2_0 path improves token generation by **~33–35%** on gfx1201 (#26753). Meanwhile, multiple DeepSeek V4 / DSV4 state and speculative-decoding regressions remain open and are the main stability concern.

## Releases & Breaking Changes
Releases landed in the last 24h:

- **b10327** — CUDA: fix thread/block count in quantized `cpy` kernel launches (#26731). Adds uneven block-count coverage.
- **b10328** — server: initial **tool isolation support via Docker** (#26507). Introduces `tools_io_sandbox` / `tools_io_docker` separation and tool-runtime documentation.
- **b10329** — server/UI: only offer a working directory when a tool actually reads it (#26762).
- **b10330** — CUDA: fuse `rms_norm + mul + rope (+ view + set_rows)` (#26767). Includes broadcast-weight tests and memory-range safety checks.
- **b10331** — server: `get_info` now reports the isolate working directory when a tools runtime is configured (#26773).

No breaking API changes are noted; these releases mainly add tool-runtime configuration and correct server info/UI behavior.

## New Model & Hardware Support
- **DSpark speculative decoding** PR is closed/merge-ready (#25173) — adds a semi-autoregressive Markov head on top of the DFlash drafter.
- **TML Inkling architecture** support (#25731) — includes safetensors-to-GGUF converter, graph construction, and a banded Flash Attention kernel; uses `int64_t` indexing for large MoEs.
- **Alternative Hexagon NPU backend** (`ggml-hexagon-jz`) for Qualcomm Android SoCs (#26373).
- **Maple architecture** request (#26766) — 20B-A1B ternary MoE with TQ1_0/TQ2_0 quantization and SWA-512; not yet implemented.
- **HIP gfx1201 Q2_0 dot-product** optimization (#26753), using native AMD permutation instructions.

## Performance & Optimization
- **CUDA fused rms_norm + mul + rope** landed in b10330 (#26767).
- **SYCL TILE quantized-KV decode** (#26689): +42% to +169% on Qwen3.6-35B, Gemma 4 26B, and Gemma 4 12B at 32K/118K context on BMG, with no regressions.
- **SYCL GLU fusion** for q4_K dense FFN (`mul_mat(gate) + mul_mat(up) + GLU`) is in progress (#26779), continuing the unary + MUL fusion work (#26411).
- **HIP Q2_0 path for gfx1201** (#26753): ~33–35% token-generation improvement.
- **`--lazy-experts`** (#26003): prefetch only routed MoE tensors via `WILLNEED`, enabling models larger than RAM by streaming from disk/page cache.
- **Expert caching** PR (#26563) is off by default (`-ehs N`) and targets large MoE performance gains.
- **Offloaded-MoE prefill bottleneck** reported in #25859: single-GPU `-ncmoe` leaves the GPU idle waiting on serial expert H2D copies.
- **Arm memory-wall observation** (#26484): Raspberry Pi 5 decode stays near ~10 GB/s across quantizations.

## Stability & Regressions
Ranked by severity:

- **DSV4 KV-cache state corruption** (#26777) — `state_read()` clears the compressed KV cache of all sequences, silently desyncing other slots. Present on current master. No fix PR yet.
- **DeepSeek4 garbled output** with parallel processing + speculation (#26741) — open; affects builds after `1269cb1f`.
- **DeepSeek V4 Flash 0731 crash** on dual Strix Halo HIP/b10327 (#26768) — closed, but indicates HIP-specific instability.
- **DSpark/DFlash drafter failure** with `no_vocab` tokenizer (#26761) — ignores `tokenizer.ggml.mask_token_id`, causing `invalid token = -1` / `llama_decode` failure.
- **OpenAI-compatible multimodal endpoint broken for base64 `image_url`** (#26770) — returns 500 `nlohmann/json` parse error regardless of image size.
- **Qwen3.6 tool-call parsing issue** (#26763) — `value_suffix` newline mismatch can capture following tool calls into the argument; closed.
- **LFM2.5 tool-call quoting bug** (#26658) — fixed by parser change in #26780, which suppresses incomplete escape sequences that break streaming deltas.
- **Qwen3.5 MTP `TENSOR_SKIP` warnings** (#26765) — non-fatal “unused tensor” warnings for regular attention/FFN weights.
- **Regression after b10215 on Intel Ultra + Vulkan** (#26769) — builds start throwing errors; no details or fix yet.
- **Speculative-decoding greedy divergence** on quantized targets (#25618) — open; draft-MTP/DSpark greedy output differs from vanilla with Q4_K_M targets.

## What This Means for Application Developers
- **Multi-slot / parallel inference with DeepSeek V4 or DSV4 is risky right now.** Known state-desync and garbled-output bugs (#26777, #26741) can silently corrupt responses across slots. Avoid parallel decode + speculation until fixed.
- **Server tool isolation is now usable.** Docker-based isolation landed in b10328, with SSH/podman runtimes proposed in #26774. If you expose filesystem tools to agents, upgrade and check `get_info` for the real working directory.
- **For MoE deployments near memory limits**, evaluate `--lazy-experts` (#26003) and expert caching (#26563). The PCIe-DMA expert offload idea (#26448) is not merged but could be the next major VRAM-saving step.
- **Multimodal apps using the OpenAI-compatible API should avoid base64 `image_url` payloads** until #26770 is resolved; use URLs or local file uploads instead.
- **Tool-calling agents using Qwen/LFM models should pick up the latest parser fixes** (#26780) to avoid broken streaming deltas and swallowed tool arguments.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Digest — 2026-08-09

## 1. Today's Highlights
No releases landed in the last 24h, but the PR queue shows two backends maturing at once: an opt-in Intel SYCL/oneAPI GPU backend (#17621) and real image-input support for the MLX runner on Apple Silicon (#17600). The most urgent item is a cloud-model correctness bug — `deepseek-v4-flash:cloud` leaks a literal `</think>` tag into assistant history, driving an agentic client into a 193-identical-call / ~31M-token loop (#17617). A measurable Windows/CUDA TTFT regression vs 0.24.0 is also reported, with generation throughput actually improving in the same build (#17631).

## 2. Releases & Breaking Changes
- No new releases in the last 24h.
- In-flight change worth watching: **manifests: remove OCI rootfs from the model config** (#17619). `rootfs.diff_ids` was duplicating the layer digest list into the config blob; it can exceed 100KB on per-tensor safetensors models. Model identity (manifest digest) is unaffected, but tooling that reads/config-inspects model blobs may see smaller configs.

## 3. New Model & Hardware Support
- **Intel SYCL/oneAPI GPU backend** — PR #17621 adds an opt-in `ggml-sycl` backend (build-time `-DOLLAMA_LLAMA_BACKENDS=sycl`; runtime gating; no change to default Vulkan behavior). Follows proposals #16930 and #17620. Targets Arc/Battlemage with XMX matrix units and fp16 matmul.
- **MLX vision input** — PR #17600 makes the MLX runner actually send images to the model. Today, distributed MLX vision checkpoints (e.g. `gemma4:12b-mlx`, `qwen3.5:4b-mlx`) advertise image capability (#17065) but images are dropped and the prompt is processed as text. The PR preserves prefix caching and speculative decoding around the new media path.
- **DFlash block-diffusion speculative decoding for MLX** — PR #17571 (closed) adds a draft model that proposes whole token blocks in one forward pass using target-model hidden states, paired via manifest.
- **Gemma 4 MLX preflight coverage** — PR #17622 (closed) adds an `apple-silicon-mlx` profile for MLX-store exports `31b-mlx-bf16`, `26b-mlx-bf16`, `26b-mxfp8`.
- Kimi K3 on Ollama Cloud request closed (#17235); the data doesn't state whether it shipped or was declined.

## 4. Performance & Optimization
- **Windows/CUDA TTFT regression, quantified** (#17631): upgrading 0.24.0 → 0.32.6 adds a *flat per-request* latency toll of **+156ms (Gemma E4B)** and **+44ms (qwen3)** that doesn't scale with prompt size and survives identical repeated requests — not prompt reprocessing. Prompt cache behaves, and generation throughput actually improved. No fix PR linked yet.
- **Multi-GPU scheduling regression** (#16599): 0.30.6 splits a ~20GB model across a 3090 + 4060 even when the 3090 alone fits it (yielding 30 tok/s with the 4060 disabled). Regression-style behavior; open.
- **MoE memory offload requests** — Two open FRs with no PRs: hosting MoE experts in host RAM with on-demand GPU compute to run 16B/35B MoEs on 8GB GPUs (#17557), and three-tier hierarchical memory (VRAM/RAM/SSD) for 200B+ MoEs (#8861). Both remain design-phase.
- **Ollama Cloud prompt cache** requested (#16714, open) for agentic workloads, tracking what providers like OpenCodeZen expose.
- Last-1% download slowdown closed (#3794).

## 5. Stability & Regressions
Ranked by severity:

1. **Cloud model thinking-tag leak → agent loop** (#17617): `deepseek-v4-flash:cloud` via the Anthropic-compat endpoint leaked a literal `</think>` into assistant history, causing 193 consecutive identical tool calls (~31M tokens) in Claude Code. No fix PR yet — highest-impact item in the window.
2. **`llama-server` stack-based buffer overrun on CUDA init** (#17627): crash exit `0xc0000409` when loading `fox-eye:latest`; surfaces as HTTP 500 to the app. No fix PR.
3. **Low KV quantization garbage output** (#17614): switching server from `q8_0` to `q4_0` KV quant makes a model emit repetitive "AI AI AI..." nonsense. Open; no fix PR.
4. **TTFT regression** (#17631) — see Performance; no fix PR.
5. **Tokenizer mis-detection on Windows CPU** (#17587): Qwen2.5-3B GGUF emits `@@@@@`/`!!!!!` ASCII garbage for Chinese input on CPU. Open.
6. **Namespace tools break Codex App integration** (#17618): `ollama launch codex-app` fails with `Unsupported tool type: namespace`. Fix PR exists: #17630 filters `type:"namespace"` tools before handing off to llama-server. Broader namespace-tool round-tripping via the Responses API is in #16263.
7. **Tool-parameter `enum` not enforced during decoding** (#17597): the model receives the constraint but can emit out-of-enum values in tool calls — reported as a distinct layer from schema validation issues.
8. **MLX vision models silently drop images** (#17065) — fix PR #17600 is open.
9. **Panic in `POST /api/create` conversion goroutine** (#17179) — fix PR #17606 recovers panics from the 20+ model converters running outside Gin's recovery middleware.
10. **Broken terminal events in streaming** — `/v1/responses` can EOF cleanly without any terminal event (`response.failed`, etc.), so failed generations look identical to completed ones; fix PR #17531.
11. **Infinite thinking loops** (#10927, closed) — root-cause work continues via PR #17566, which bounds thinking with a per-request/per-model token budget and cuts off the Gemma 4 reasoning block cleanly (#17626 also fixes a parser edge case where the budget-forced close makes the model answer with a channel name).

## 6. What This Means for Application Developers
- **Put hard loop guards on agentic clients.** The `</think>` leak in #17617 produced 193 identical tool calls and ~31M tokens; even after a fix, treat clean-EOF-without-terminal-event as an error in `/v1/responses` streams (#17531) and cap consecutive identical tool calls.
- **Avoid namespace tools for now.** The Codex App path breaks on them (#17618). Workarounds are client-side filtering (#17630) until first-class Responses-API namespace support lands (#16263).
- **Validate tool-call arguments yourself.** `enum` reaches the model but is not enforced during decoding (#17597) — enforce schemas at the application layer.
- **Windows/CUDA latency-sensitive apps:** measure your TTFT on 0.32.x; the flat per-request toll in #17631 may dominate small-prompt workloads even though generation throughput is better.
- **Apple Silicon users:** MLX vision support is imminent (#17600) and currently broken (#17065) — don't rely on `*-mlx` vision models in production until it merges.
- **Thinking budget is coming (PR #17566):** per-request reasoning-token caps will be a useful cost/latency lever for agents whose models are prone to thinking loops.
- **Intel GPU users:** SYCL backend is on the way (#17621) and worth testing for Arc/Battlemage; Vulkan remains the default.

### Key links
- Cloud loop: https://github.com/ollama/ollama/issues/17617
- Codex namespace: https://github.com/ollama/ollama/issues/17618 · fix: https://github.com/ollama/ollama/pull/17630 · Responses namespace: https://github.com/ollama/ollama/pull/16263
- TTFT regression: https://github.com/ollama/ollama/issues/17631
- SYCL backend: https://github.com/ollama/ollama/pull/17621
- MLX vision: https://github.com/ollama/ollama/pull/17600 · https://github.com/ollama/ollama/issues/17065
- Thinking budget: https://github.com/ollama/ollama/pull/17566
- Streaming terminal events: https://github.com/ollama/ollama/pull/17531
- kv-quant garbage: https://github.com/ollama/ollama/issues/17614
- Create-handler panic fix: https://github.com/ollama/ollama/pull/17606
- Manifest cleanup: https://github.com/ollama/ollama/pull/17619

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-08-09

## Today's Highlights

LiteLLM shipped two signed releases (`v1.97.0-rc.1`, `v1.94.2`) focused on Docker image signature verification. The most important activity is correctness work around the `/v1/responses` path: streaming events can drop visible text, background polling can return empty completed responses, and streaming usage is undercounted in chained proxy deployments. Several associated fix PRs are already open, along with a new auto-router shadow-evaluation PR for pre-adoption testing on live traffic.

## Releases & Breaking Changes

- **v1.97.0-rc.1** — [release](https://github.com/BerriAI/litellm/releases/tag/v1.97.0-rc.1)
- **v1.94.2** — [release](https://github.com/BerriAI/litellm/releases/tag/v1.94.2)

Both release notes document only **cosign Docker image signing**. No API/config migration notes or breaking changes were announced. The signing key is pinned to [commit `0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0).

## New Model & Hardware Support

No new models, backends, or quantization formats were announced in this window.

Caveat: Z.AI Coding Plan docs advertise `glm-5.2[1m]`, but the proxy currently returns `Unknown Model` for the 1M-context variant while plain `glm-5.2` works — [#32218](https://github.com/BerriAI/litellm/issues/32218).

## Performance & Optimization

No throughput/latency/memory kernel work with concrete numbers landed in the last 24h. In-flight optimization-adjacent work:

- **Auto-router shadow eval** — [PR #36250](https://github.com/BerriAI/litellm/pull/36250) duplicates a sample of live traffic through the auto-router and runs a blind pairwise judge to estimate win rates before production adoption.
- **Configurable estimated output tokens for rate limiting** — [PR #36143](https://github.com/BerriAI/litellm/pull/36143) allows per-key/team/model expected output token counts to improve TPM reservation accuracy.
- **Deployment affinity UI control** — [PR #36302](https://github.com/BerriAI/litellm/pull/36302) adds a dashboard toggle for the auto-router `deployment_affinity` flag.
- **Anthropic-native model discovery for Claude Code** — [PR #35455](https://github.com/BerriAI/litellm/pull/35455) serves `/v1/models` in Anthropic format for gateway discovery.
- **PTU flat-cost attribution opt-in** — [PR #36138](https://github.com/BerriAI/litellm/pull/36138) gates PTU flat-cost reporting behind an env var to avoid noise when unused.

## Stability & Regressions

Ranked by severity:

- **[Critical] DB-less proxy batch create fails after provider job starts** — `POST /v1/batches` sends the job to the provider, then 500s because the managed-files hook dereferences `prisma_client=None`. Callers never receive a batch ID, and retries start additional paid jobs: [#36265](https://github.com/BerriAI/litellm/issues/36265). Fix in [PR #36273](https://github.com/BerriAI/litellm/pull/36273) skips prisma-dependent hooks without a database.

- **[High] `/v1/responses` background polling returns completed but empty output** — With `background: true` and `polling_via_cache: "all"`, polls show `status: "completed"`, `output: []`, `text: null`, `usage: null`. Regression affects v1.91.0+; v1.83.7 is known-good. No fix PR yet: [#36275](https://github.com/BerriAI/litellm/issues/36275).

- **[High] `/v1/responses` streaming drops visible text** — Text is lost when one upstream Chat Completions chunk contains both `reasoning_content` and `content`: [#36327](https://github.com/BerriAI/litellm/issues/36327). Fix in [PR #36329](https://github.com/BerriAI/litellm/pull/36329).

- **[High] Streaming usage severely undercounted in chained proxy setups** — Provider-independent undercount despite correct non-streaming usage; root cause is in the stream aggregation layer, not provider transformation: [#36114](https://github.com/BerriAI/litellm/issues/36114).

- **[High] Admin UI accepts routing group configs that brick startup** — Overlapping models in `routing_groups` pass UI validation but hard-reject at runtime, silently disabling all groups: [#36310](https://github.com/BerriAI/litellm/issues/36310). Fix in [PR #36323](https://github.com/BerriAI/litellm/pull/36323).

- **[Medium] File list pagination loops forever in SDKs** — Caller-scoped `/v1/files` pages still copy upstream `has_more: true`, but no next page is reachable: [#36324](https://github.com/BerriAI/litellm/issues/36324). Fix in [PR #36326](https://github.com/BerriAI/litellm/pull/36326).

- **[Medium] File list cursor leak fixed** — `first_id`/`last_id` leaked other users' file IDs even though `data` was scoped: [#36087](https://github.com/BerriAI/litellm/issues/36087). Fixed via [PR #36093](https://github.com/BerriAI/litellm/pull/36093).

- **[Medium] Partial team update wipes metadata** — `PATCH /team/update` on a single field can delete logging config, guardrails, key duration, and custom metadata: [PR #36328](https://github.com/BerriAI/litellm/pull/36328).

- **[Medium] Anthropic `reasoning_tokens` always 0** — Claude Opus 5 / Fable 5 / Sonnet 5 report zero reasoning tokens under default thinking display: [#36290](https://github.com/BerriAI/litellm/issues/36290).

- **[Medium] Anthropic streaming tool use lost on v1.95.0** — Tool-call deltas can be dropped before internal tool-call chunks in `/v1/messages` streams: [#36262](https://github.com/BerriAI/litellm/issues/36262).

- **[Medium] `pass_through_endpoints` subpath routes reject virtual keys** — `include_subpath: true` routes are classified as management routes, producing 401s for virtual keys: [#36280](https://github.com/BerriAI/litellm/issues/36280).

- **[Low] `use_chat_completions_api` bridge drops parameters and tools** — `allowed_openai_params` not forwarded; `namespace`/`tool_search` tools dropped: [#35878](https://github.com/BerriAI/litellm/issues/35878).

- **[Low] Bedrock `count_tokens` fails for cross-region inference profiles** — 400 errors occur because the inference-profile prefix is stripped before request: [#32683](https://github.com/BerriAI/litellm/issues/32683).

- **[Low] Router disk cache silently ignored** — `cache_responses=True, cache_kwargs={"type": "disk"}` falls back to in-memory cache without warning: [#36309](https://github.com/BerriAI/litellm/issues/36309).

- **[Low] Wildcards appear as models in `/models`** — `openai/*` wildcard entries are listed as concrete models: [#13752](https://github.com/BerriAI/litellm/issues/13752).

- **[Resolved] Vertex batch create opaque 500** — HTTP 500 with `list index out of range` was fixed/closed: [#35133](https://github.com/BerriAI/litellm/issues/35133).

- **[Resolved] Raw provider file IDs bypass ownership checks** — Managed-file ownership was not enforced for raw provider file IDs; issue closed: [#35530](https://github.com/BerriAI/litellm/issues/35530).

## What This Means for Application Developers

- **Responses API users should test streaming and background polling carefully.** Current proxy versions can drop streamed text, report empty completed background jobs, and undercount streaming usage. Watch for [#36329](https://github.com/BerriAI/litellm/pull/36329) and fixes for [#36275](https://github.com/BerriAI/litellm/issues/36275), [#36114](https://github.com/BerriAI/litellm/issues/36114).

- **Do not use `/v1/batches` on DB-less proxies until the fix lands.** The provider job can start and bill even when the proxy 500s. See [#36265](https://github.com/BerriAI/litellm/issues/36265) and [PR #36273](https://github.com/BerriAI/litellm/pull/36273).

- **File API clients should not rely on SDK auto-pagination against current builds.** Update once [PR #36326](https://github.com/BerriAI/litellm/pull/36326) is available.

- **Anthropic-compatible workloads on Claude 5-class models should validate reasoning token usage and streaming tool calls.** See [#36290](https://github.com/BerriAI/litellm/issues/36290) and [#36262](https://github.com/BerriAI/litellm/issues/36262).

- **Avoid partial `/team/update` calls and overlapping routing groups in the Admin UI** until [PR #36328](https://github.com/BerriAI/litellm/pull/36328) and [PR #36323](https://github.com/BerriAI/litellm/pull/36323) are in a release.

- **If you are considering the auto-router, the shadow-eval PR is worth tracking** — it provides evidence from live traffic before production routing is enabled: [PR #36250](https://github.com/BerriAI/litellm/pull/36250).

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth Digest — 2026-08-09

## 1. Today's Highlights

A dense 24h of Unsloth Studio hardening: 125 PRs touched the repo, headlined by fixes for Windows child-process leaks ([#8170](https://github.com/unslothai/unsloth/pull/8170)), a throughput-halving MTP regression ([#8172](https://github.com/unslothai/unsloth/pull/8172)), and persistent Studio bug reports centered on AMD ROCm memory exhaustion ([#8188](https://github.com/unslothai/unsloth/issues/8188)) and missing resume controls ([#8150](https://github.com/unslothai/unsloth/issues/8150)). The project also pushed Apple Silicon forward with video generation enabled on Metal ([#8198](https://github.com/unslothai/unsloth/pull/8198)) and several MLX training-lifecycle fixes ([#8134](https://github.com/unslothai/unsloth/issues/8134), [#8144](https://github.com/unslothai/unsloth/pull/8144)).

## 2. Releases & Breaking Changes

No new releases in the last 24 hours. One versioning hazard to track: `unsloth.__version__` aliases `unsloth_zoo.__version__` while the dependency pin is `>=`, so the core package can misreport its version whenever the two packages ship out of lockstep ([#8171](https://github.com/unslothai/unsloth/issues/8171)). No migration required yet.

## 3. New Model & Hardware Support

- **Apple Silicon video generation**: [#8198](https://github.com/unslothai/unsloth/pull/8198) enables Studio video generation on macOS via the same diffusers pipelines as CUDA; the "Video generation on macOS is coming soon" gate was the only blocker.
- **MLX resumability gap**: [#8134](https://github.com/unslothai/unsloth/issues/8134) — prequantized MLX models that are not *uniformly 4-bit* cannot attest, so their runs are never resumable. The fix is a design decision about the load-mode vocabulary, not a mechanical change.
- **MLX test infrastructure**: [#8138](https://github.com/unslothai/unsloth/issues/8138) — unsloth-zoo MLX suite is not isolation-clean on Apple Silicon (24–34 failures depending on invocation; mlx 0.31.2 / mlx-lm 0.31.3 on M2 16 GB).
- **ROCm SFT failure**: [#6825](https://github.com/unslothai/unsloth/issues/6825) — Qwen3_5 SFT on ROCm gfx1201 fails at step 0 with `FailOnRecompileLimitHit (fullgraph=True)`.
- **GGUF/base pre-validation**: [#8158](https://github.com/unslothai/unsloth/pull/8158) — rejects an incompatible FLUX.2 4B GGUF / 9B base pair *before* the 19.17 GB download instead of after (reported by NVIDIA Technical Marketing).
- **Tool calling on llama.cpp/AMD**: [#7282](https://github.com/unslothai/unsloth/issues/7282) — remote models cannot do tool calling on Windows/AMD; likely a backend capability gap rather than a UI issue.

## 4. Performance & Optimization

- **MTP parallel-slot regression**: [#8172](https://github.com/unslothai/unsloth/pull/8172) — MTP was silently forcing llama-server down to a single parallel slot, halving Studio API throughput (12 docs ≈ 1 min before; 24 docs 4+ min after). Fix PR is open.
- **GRPO kernel dispatch**: [#8204](https://github.com/unslothai/unsloth/pull/8204) — dispatches on width at the remaining `lm_head` matmul call sites so `chunked_hidden` handling is correct when the forward isn't the Unsloth-generated one.
- **Precision honesty**: [#8165](https://github.com/unslothai/unsloth/pull/8165) — the UI can report FP8 while a Q4_K_M GGUF has transformer FP8 disabled, or BF16 while NVFP4 is active. PR reports actual precision and refuses explicit requests it cannot honor.
- **Chat send latency**: [#8136](https://github.com/unslothai/unsloth/pull/8136) — first message in a new chat renders immediately instead of blocking on persistence (previously a 1s+ blank thread).
- **Model picker startup**: [#7849](https://github.com/unslothai/unsloth/issues/7849) — On Device models now appear immediately after Studio start (closed).

## 5. Stability & Regressions

**Critical**

- **AMD Windows image-gen memory exhaustion**: [#8188](https://github.com/unslothai/unsloth/issues/8188) — an under-budgeted diffusion memory plan doesn't fail on Windows ROCm; WDDM backs overflow into system RAM until the machine is unusable (RAM < 1.2 GB, pagefile > 50 GB). Linux raises `torch.OutOfMemoryError`. Open.
- **llama-server startup failure**: [#8184](https://github.com/unslothai/unsloth/issues/8184) — model loading broken after the latest update on Windows (i9 11900K, RTX 3090). Closed, but root cause not published.
- **MTP throughput halving**: [#8172](https://github.com/unslothai/unsloth/pull/8172) — production-impacting; fix PR open.

**High**

- **Diffusion resume missing**: [#8163](https://github.com/unslothai/unsloth/pull/8163) — stop-and-save at step 11 writes a partial adapter, but restarting begins at step 1; PR adds resume.
- **Resume button missing in Studio**: [#8150](https://github.com/unslothai/unsloth/issues/8150) — immediately after Stop and Save on Kaggle (2×T4). Open.
- **Remote tool calling broken**: [#7282](https://github.com/unslothai/unsloth/issues/7282) — llama.cpp remote models can't tool-call on AMD/Windows. Open.
- **Version misreporting**: [#8171](https://github.com/unslothai/unsloth/issues/8171) — `__version__` alias can lie when core releases ahead of zoo. Open.

**Medium**

- **MLX resumability & tests**: [#8134](https://github.com/unslothai/unsloth/issues/8134), [#8138](https://github.com/unslothai/unsloth/issues/8138) — open.
- **Cached dataset splits**: [#8140](https://github.com/unslothai/unsloth/issues/8140) — metadata-free cached datasets offer no split options though splits load fine; fix PR [#8144](https://github.com/unslothai/unsloth/pull/8144).
- **Token-usage reporting**: [#8142](https://github.com/unslothai/unsloth/issues/8142) — zero prompt/completion/total tokens logged for tencent code buddy on Qwen3.6-35B-A3B-MTP-GGUF (context 180,864). Open.
- **CI red on main**: [#8197](https://github.com/unslothai/unsloth/pull/8197) — six source-shape contract tests fail after their subjects were rewritten under them; repinning PR open.

**Closed today (with fix PRs where applicable)**

- [#8168](https://github.com/unslothai/unsloth/issues/8168) — Studio videos download as `index.html` on desktop (signed MP4 link bypasses `apiUrl()`).
- [#7962](https://github.com/unslothai/unsloth/issues/7962) — ANSI escape codes rendered as literal text in the tool output pane.
- [#7963](https://github.com/unslothai/unsloth/issues/7963) — desktop drop rejected images though the composer accepts attachments.
- [#7992](https://github.com/unslothai/unsloth/issues/7992) — Windows ROCm diffusion load failure (`torch.distributed` missing `Work`).
- [#4848](https://github.com/unslothai/unsloth/issues/4848) — installer stale-venv error on Windows (`python.exe` access denied).
- [#5031](https://github.com/unslothai/unsloth/issues/5031) — `UNSLOTH_STUDIO_NO_AUTH` requested for trusted LAN deployments (closed — likely landed).

## 6. What This Means for Application Developers

- **Deploy behind a proxy?** [#8205](https://github.com/unslothai/unsloth/pull/8205) moves the deep research event stream to POST so Cloudflare quick tunnels and similar proxies stop buffering it — important for agentic apps that poll research activity.
- **Throughput**: if you serve via Studio API with MTP-capable models, verify parallel slots after upgrading; [#8172](https://github.com/unslothai/unsloth/pull/8172) shows MTP can halve throughput when it forces single-slot serving.
- **Precision reporting is unreliable today**: per [#8165](https://github.com/unslothai/unsloth/pull/8165), validate actual dtype before assuming FP8/NVFP4 behavior, especially on GGUF and video paths.
- **Tool calling on AMD/Windows**: remote tool calling is still unreliable on llama.cpp/AMD ([#7282](https://github.com/unslothai/unsloth/issues/7282)); consider pinning CUDA backends or shimming tool-calling locally.
- **MLX users**: avoid prequantized non-uniform-4-bit MLX models if you need resumable runs ([#8134](https://github.com/unslothai/unsloth/issues/8134)), and expect split-selection issues with metadata-free cached datasets ([#8140](https://github.com/unslothai/unsloth/issues/8140), fix in [#8144](https://github.com/unslothai/unsloth/pull/8144)).
- **Windows/ROCm image gen**: monitor host RAM, not just VRAM, on AMD ([#8188](https://github.com/unslothai/unsloth/issues/8188)); there is still no stop button for image generation ([#8187](https://github.com/unslothai/unsloth/issues/8187)).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*