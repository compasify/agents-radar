# AI Infrastructure Digest 2026-08-12

> Generated: 2026-08-12 00:58 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# Cross-Project Comparison Report — AI Inference & Serving Ecosystem
**Date: 2026-08-12**

---

## 1. Ecosystem Overview

The ecosystem remains dominated by the **DeepSeek-V4-class model wave** — sparse attention, MTP, and DSpark speculative decoding — with vLLM, SGLang, and llama.cpp all chasing correctness and performance issues simultaneously, while Ampere (SM8x) support remains a glaring gap. **AMD/ROCm has moved from experimental to first-class but still sharp-edged**: every project landed AMD fixes this cycle alongside fresh regressions (SGLang bf16 all-reduce corruption, llama.cpp ROCm 7.14 runtime breakage, Unsloth Windows AMD installer failures). Speculative decoding in all forms remains fragile under production concurrency, with crashes and overhead taxes reported in vLLM, llama.cpp, and Ollama's MLX path. At the ecosystem's edge, **agentic infrastructure is maturing**: router-level KV state, linear-time tool-call scanning, OpenAI Responses API compatibility, and pre-adoption routing evaluation are now active feature areas across SGLang, Unsloth, Ollama, and LiteLLM.

---

## 2. Activity Comparison

Counts reflect issues/PRs referenced in the 24-hour digest window; actual GitHub totals are higher.

| Project | Issues referenced | PRs referenced | Releases (24h) | Release status |
|---|---|---|---|---|
| **vLLM** | ~17 | ~14 | v0.27.1 (patch) | Patch on 0.27.x; two unpatched regressions (#51744 Gemma4/Transformers 5.15, #51758 DSV4-Flash 0.26→0.27) |
| **SGLang** | ~13 | ~15 | None | No release in window; 3 broken CI jobs on `main` |
| **llama.cpp** | ~20 | ~20 | b10356–b10362 (7) | High-velocity rolling releases; ROCm 7.14 baseline is a breaking change |
| **Ollama** | ~21 | ~11 | v0.32.9 | v0.32.8 Docker image missing from registry (#17668) — release hygiene issue |
| **LiteLLM** | ~11 | ~10 | v1.96.2, v1.95.1, v1.94.3, v1.93.2, v1.92.2, v1.91.5, v1.90.7 (7) | Multi-line backport pattern; changelogs cover only cosign signature verification |
| **Unsloth** | ~21 | ~16 | v0.1.701-beta (Desktop), v0.1.62-beta | New Desktop product launch; CI red on `main` all day blocking PRs |

**Key observations:**
- **llama.cpp** ships the fastest (7 releases/day) but carries the most breaking-change surface (ROCm 7.14, `--load-mode` migration).
- **LiteLLM** is patching seven parallel minor version lines — a hotfix campaign across supported release trains rather than single-trunk velocity.
- **SGLang** had zero releases but the densest feature-PR activity per issue, concentrated on AMD correctness and DSV4 performance.
- **Unsloth** is the only project with a greenfield product launch (Desktop) in this window, and the only one whose CI was fully blocked.

---

## 3. Model Support Race

**DeepSeek V4 family — the main battleground:**

| Project | Status |
|---|---|
| **vLLM** | DSV4 sparse MLA end-to-end fix for SM120 Blackwell in flight (#51538); ROCm gfx11 enabled (#47017); **DSpark on Ampere remains the #1 open request with no merged fix** (#50576, #40851); DSV4-Flash regression after 0.27.0 upgrade unpatched (#51758) |
| **SGLang** | Deferred MoE finalize for MXFP4/FP8 (#34456); prefill context-parallel overlap on AMD (#33480); DSV4 hierarchical-cache hang on H20 unresolved (#34235) |
| **llama.cpp** | DSpark multi-GPU CUDA unstable — crashes cluster at 2–2.6K decoded tokens (#26554); DSV4 garbled output on Strix Halo ROCm (#25436); DSV4 prefill crash on gfx1151 RPC worker (#26746) |

**Other architectures:**
- **Ollama** shipped **NVIDIA Nemotron 3.5 Lightning** (30B MoE, 3B active) in v0.32.9 — first to a consumer-facing release.
- **llama.cpp** fixed EXAONE 4.5 SWA never being enabled (b10361) and has **SKT A.X K2** (Sparse Gated Attention) in review (#26757).
- **SGLang** added LTX-2.5 diffusion backend support (#34471).
- **vLLM** enabled Kimi-K3 AITER MLA head padding for TP4 (#51647).
- **Unsloth**: Muse-Glimmer and MiniMax M3/H3 are downloadable but fail to load in the bundled runtimes — registry availability outpacing runtime support.

**Verdict:** No single winner. vLLM leads on DSV4 breadth (MTP/DSpark/Blackwell), SGLang on DSV4 MoE performance work, Ollama on consumer-accessible model release velocity, llama.cpp on novel-architecture coverage — but **no project has a stable, production-ready DSV4-Flash story on Ampere**, and all three inference engines are simultaneously firefighting the same upstream model release.

---

## 4. Performance Frontier

**KV cache** is the hottest area:
- vLLM: DSV4-Flash-0731 uses **56 bytes/token (~8× the preview checkpoint)**, capping `max_model_len` at ~121K on H20 TP=2 (#51041); Kimi-K3 total degeneration suspect is packed KDA prefill (#51039).
- SGLang: RFCs for a **programmatic KV-cache** (#27574) and **recoverable router KV state** (#33394) — aimed at agent workloads losing cache placement on router restart.
- Ollama: q4_0 KV cache quantization produces garbage output (#17614) — low-bit KV is not safe yet.

**Speculative decoding** is the second front:
- vLLM: dynamic spec decoding pays a baseline tax vs no-spec (#49986); aggregate-throughput collapse at a batch-size threshold (#49548); context-length-aware spec scheduling RFC (#48627).
- llama.cpp: DSpark crashes on multi-GPU CUDA (#26554, #26475) — pinned builds or retry logic advised for long generations.
- Unsloth: Auto mode now drops the drafter first under VRAM pressure instead of OOMing (#8435) — pragmatic degradation worth copying.

**Kernel and quantization work:**
- vLLM: B12X opt-in kernels for SM120/121 linear/MoE/attention (#51696); W4A8-INT8 via PTX 9.4 `ldmatrix.s8.s4` proposal (#49529); ModelOpt LinearMethod redesign collapsing six per-format classes into one (#49381).
- SGLang: MXFP8 cute-dsl GEMM (swap-AB/split-K) proposed as default over persistent CUTLASS on SM10X (#34042); AITER unified attention with scaled FP8 Q reducing decode-batch cost (#31856).
- llama.cpp: OpenCL K-tile transpose in local memory for flash-attention prefill (#26428).

**Distributed serving and ops:**
- llama.cpp: critical **RPC out-of-bounds write fixed** via pre-execution dimension validation (#26933) — update RPC servers.
- LiteLLM: staggered background jobs to prevent thundering-herd scheduling across proxy replicas (#36589).
- vLLM: custom all-reduce graph IPC crash under `expandable_segments` fixed (#51903).
- SGLang: Wide EP for GLM5-2/kimi-k3 on GB200 still failing (#34120).
- Ollama: MLX runner serializes all requests — no concurrent decode on Apple Silicon (#17666).

---

## 5. Layer Positioning

| Layer | Projects | Competitive axis |
|---|---|---|
| **Production serving engines** (multi-GPU, PD-disaggregation, MTP, DSpark) | vLLM, SGLang | Kernel performance and model breadth on latest GPUs; DSV4-class support is the current differentiator |
| **Local runtimes** (single-node, edge, desktop, broad hardware) | llama.cpp, Ollama | Deployment ease, hardware coverage (CUDA/ROCm/Metal/Vulkan/OpenCL/SYCL), packaging stability |
| **Gateway / proxy** (multi-provider routing, cost tracking, auth) | LiteLLM | Routing intelligence, provider coverage, streaming reliability, billing accuracy |
| **Fine-tuning + local serving** (research → deployment) | Unsloth | UX from notebook training to desktop inference; export correctness |

**Overlap dynamics:**
- **vLLM and SGLang are converging**: both target the same DSV4/Kimi-K3/Gemma workloads with the same kernel backends (DeepGEMM, AITER, FlashInfer). Their differentiation is increasingly executional — CI discipline, regression response time, release cadence.
- **llama.cpp and Ollama are converging in the opposite direction**: Ollama inherits llama.cpp regressions (Qwen3.6 CPU fallback tracks llama.cpp b10353, #17669), making Ollama's release quality a function of llama.cpp's rolling cadence.
- **Unsloth is the only project whose primary value prop is training**, but its Studio/Desktop serving layer now competes with Ollama for local deployment mindshare.
- **LiteLLM is orthogonal**: it proxies all of the above. The routing-group-as-virtual-model work (#36519) positions it as a control plane for multi-engine deployments.

---

## 6. Trend Signals

1. **DSV4-class models are breaking abstractions, not just benchmarks.** Sparse attention, MTP, and DSpark are forcing rework at every layer — KV cache layouts (#51041), speculative scheduling (#48627), MoE kernel fusion (#34456), and local runtime stability (#26554). Expect continued instability as more sparse/hybrid models ship; allocate regression-runway in upgrade plans.

2. **ROCm is production-adjacent but requires validation discipline.** Every project landed AMD fixes this cycle, and every project also logged AMD regressions. If you run AMD, pin exact versions (llama.cpp now mandates ROCm 7.14 userspace) and validate numerics on your workload — SGLang's bf16 all-reduce corruption was silent until it produced 106M non-finite values.

3. **Agentic workloads are driving infrastructure features.** Router KV-state snapshot/replay (SGLang #33394), linear-time tool scanning (Unsloth #8428), OpenAI Responses API web search (Ollama #17686), and shadow eval for auto-routing (LiteLLM #36571) all target production agent systems. Track these as deployment enablers, not roadmap noise.

4. **Low-bit quantization is a correctness hazard, not just a quality tradeoff.** Ollama's q4_0 KV cache garbage (#17614), vLLM's DeepGEMM FP8 warmup assertion on Blackwell (#47130), and the ecosystem-wide NVFP4/MXFP4 push all point to quant formats racing ahead of validation. Always run output-quality checks before adopting new quant schemes in production.

5. **Security and supply-chain hygiene are uneven.** The llama.cpp RPC OOB write fix (#26933) shows distributed serving expands the attack surface; Ollama's missing v0.32.8 Docker image (#17668), LiteLLM's missing Python 3.13 wheels (#36526), and Unsloth's broken tokenizer export (#8444) show packaging reliability lags feature velocity.

6. **Release discipline is the widest quality gap between projects.** llama.cpp ships 7 releases/day with breaking changes; SGLang ships zero while merging major features; LiteLLM backports across seven minor lines with sparse changelogs; Unsloth's CI was red all day. **Pin exact versions, read release diffs, and run smoke tests before rollout** — doing so puts you ahead of the ecosystem's average operational maturity.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest — 2026-08-12

## Today's Highlights
v0.27.1 shipped as a patch release adding quantized DSpark Markov-head support. Community demand for DeepSeek-V4-Flash/DSpark on Ampere (SM8x) continues to dominate — [#50576](https://github.com/vllm-project/vllm/issues/50576) reached 98 comments and [#40851](https://github.com/vllm-project/vllm/issues/40851) remains open — while the ROCm track advanced with DeepSeek-V4 gfx11 enablement ([#47017](https://github.com/vllm-project/vllm/pull/47017)) and Kimi-K3 AITER MLA head padding ([#51647](https://github.com/vllm-project/vllm/pull/51647)). A new end-to-end DSV4 sparse MLA fix ([#51538](https://github.com/vllm-project/vllm/pull/51538)) covers plain decode, MTP, and DSpark on SM120 Blackwell, but two fresh regressions — Gemma4 startup under Transformers 5.15.0 ([#51744](https://github.com/vllm-project/vllm/issues/51744)) and a 0.26.0→0.27.0 DSV4-Flash breakage ([#51758](https://github.com/vllm-project/vllm/issues/51758)) — have no fix merged yet.

## Releases & Breaking Changes
- **v0.27.1 (patch)** — adds support for quantized DSpark Markov heads ([#50424](https://github.com/vllm-project/vllm/pull/50424)).
- **Transformers 5.15.0 incompatibility in `vllm-openai:latest`** — Gemma4 (NVFP4, TP=2) fails at startup; pin Transformers as a workaround ([#51744](https://github.com/vllm-project/vllm/issues/51744)).
- **DSV4-Flash fails after 0.26.0 → 0.27.0 upgrade** — reported with no workaround yet ([#51758](https://github.com/vllm-project/vllm/issues/51758)).

## New Model & Hardware Support
- **DeepSeek-V4-Flash / DSpark on SM8x (A100/A800)** — still the top requested feature; DSpark tracked in [#50576](https://github.com/vllm-project/vllm/issues/50576), general sm_80 in [#40851](https://github.com/vllm-project/vllm/issues/40851). No merged fix.
- **DeepSeek-V4 on ROCm gfx11/RDNA** — enabled via [#47017](https://github.com/vllm-project/vllm/pull/47017) (closed/merged).
- **Kimi-K3 ROCm roadmap** — tracked in [#50682](https://github.com/vllm-project/vllm/issues/50682); [#51647](https://github.com/vllm-project/vllm/pull/51647) pads non-16-aligned AITER MLA heads so Kimi-K3 TP4 (24 heads/rank) uses AITER MLA instead of the Triton fallback.
- **R3 (routed-experts) capture for DeepGEMM MegaMoE** — extends the MoE binder to the DeepSeek V4 / Kimi K3 path ([#51831](https://github.com/vllm-project/vllm/pull/51831)).
- **B12X opt-in kernels** for NVIDIA SM120/SM121 linear, MoE, and causal attention backends ([#51696](https://github.com/vllm-project/vllm/pull/51696)).
- **Whisper word-level timestamps** — cross-attention + DTW implementation ([#47664](https://github.com/vllm-project/vllm/pull/47664)).
- **ModelOpt LinearMethod redesign** — six near-duplicate per-format classes replaced by one generic QuantKey-driven implementation ([#49381](https://github.com/vllm-project/vllm/pull/49381)).

## Performance & Optimization
- **DSV4-Flash-0731 KV cache inefficiency:** ~8× more KV per token than the preview checkpoint (56 bytes/token; only 150K tokens in 7.7 GiB), capping `max_model_len` at ~121K on H20 TP=2 ([#51041](https://github.com/vllm-project/vllm/issues/51041)).
- **Dynamic spec decoding (DSD) baseline tax:** DSD arms pay a significant overhead vs no-spec under production defaults; the PIECEWISE cudagraph override is one identified factor ([#49986](https://github.com/vllm-project/vllm/issues/49986)). Related: catastrophic aggregate-throughput collapse at the batch-size threshold ([#49548](https://github.com/vllm-project/vllm/issues/49548)).
- **RFC: context-length-aware speculative scheduling** — extends `num_speculative_tokens_per_batch_size` with a `(batch, ctx)` table ([#48627](https://github.com/vllm-project/vllm/issues/48627)).
- **ROCm CI speedup:** skinny GEMM suite cut from ~2 hours to ~10 seconds by reducing parameterizations from 11,040 to 2,644 ([#51877](https://github.com/vllm-project/vllm/pull/51877)).
- **CUDA graph profiling fix:** long GDN warmups no longer charged as retained graph memory ([#50848](https://github.com/vllm-project/vllm/pull/50848)).
- **GLM 5.2 performance sprint** — all tracked tasks completed ([#46654](https://github.com/vllm-project/vllm/issues/46654)).
- **W4A8-INT8:** proposal to adopt PTX 9.4 `ldmatrix.s8.s4` for in-flight INT4→INT8 sign-extending loads ([#49529](https://github.com/vllm-project/vllm/issues/49529)).
- **Embedding-task optimization RFC** — still open, covering encoder and decoder-converted embedding models ([#21796](https://github.com/vllm-project/vllm/issues/21796)).

## Stability & Regressions
Ranked by severity:

1. **Kimi-K3 total degeneration after long-context prefill (critical):** a ~240K-token request causes NaN logits and a single repeated token on every subsequent request; packed KDA prefill suspected ([#51039](https://github.com/vllm-project/vllm/issues/51039)). No fix PR yet.
2. **Gemma4 startup failure with Transformers 5.15.0** in `vllm-openai:latest` ([#51744](https://github.com/vllm-project/vllm/issues/51744)). No fix PR yet.
3. **DSV4-Flash startup error after upgrading to 0.27.0** ([#51758](https://github.com/vllm-project/vllm/issues/51758)). No fix PR yet.
4. **DeepGEMM "Unknown recipe" assertion** during FP8 kernel warmup on Blackwell sm_120 — 0.24.0 regression, still open ([#47130](https://github.com/vllm-project/vllm/issues/47130)).
5. **ROCm/gfx942 (MI325X) worker crash** when sequences cross 2048 tokens — DSV4-flash with `sparse_attn_indexer` + FP8 KV cache, TP=4 ([#48266](https://github.com/vllm-project/vllm/issues/48266)).
6. **DSV4 perf-work side effects:** [#48137](https://github.com/vllm-project/vllm/issues/49927) costs ~10.6% spec-decode acceptance; #48660 shifts output distributions on a production 2-node deployment ([#49927](https://github.com/vllm-project/vllm/issues/49927)).
7. **NVFP4 Flashinfer CuteDSL MoE + DeepEP numerical accuracy on B200** with `VLLM_MOE_DP_CHUNK_SIZE=1024` — closed, but relevant for reproducibility ([#31840](https://github.com/vllm-project/vllm/issues/31840)).

Fix PRs in flight:
- DSV4 sparse MLA end-to-end fix for plain decode, MTP, and DSpark on SM120 ([#51538](https://github.com/vllm-project/vllm/pull/51538)).
- MRV2 uniform-decode dispatch now requires all requests to be decoding ([#50532](https://github.com/vllm-project/vllm/pull/50532)).
- Thinking-budget stale state on asymmetric SWAP ([#49613](https://github.com/vllm-project/vllm/pull/49613)).
- Custom all-reduce graph IPC crash under `expandable_segments` ([#51903](https://github.com/vllm-project/vllm/pull/51903)).
- MRV2 Gumbel sampling with non-finite (`-inf`) logits ([#43249](https://github.com/vllm-project/vllm/pull/43249)).
- FlexAttention backend deprecation RFC closed — TritonAttention is now the default path on both ROCm and CUDA ([#50324](https://github.com/vllm-project/vllm/issues/50324)).

## What This Means for Application Developers
- **Ampere users awaiting DSV4-Flash/DSpark:** no SM8x fix has landed despite heavy demand (#50576, #40851). Plan for H100/Blackwell or stick with the preview checkpoint on A100/A800.
- **Mind the KV cache surprise:** DeepSeek-V4-Flash-0731's 56 bytes/token KV cost will impact `max_model_len` and GPU memory budgets — re-validate before deployment (#51041).
- **Upgrade with care:** 0.27.1 is safe for quantized DSpark Markov heads, but both the Gemma4/Transformers 5.15.0 breakage (#51744) and the DSV4-Flash 0.26.0→0.27.0 failure (#51758) are unpatched. Pin images and run a smoke test before rolling out.
- **Speculative decoding remains fragile:** dynamic SD schedules exhibit threshold effects under concurrency (#49548) and overhead vs no-spec baselines (#49986) — benchmark at production concurrency before enabling.
- **ROCm is a fast-moving target:** Kimi-K3 TP4 can now use AITER MLA, and DeepSeek-V4 works on gfx11 — worth retesting AMD deployments.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest — 2026-08-12

## 1. Today's Highlights

Activity is concentrated on two fronts: AMD/ROCm correctness (diffusion warmup crashes, a QuickReduce fp16-saturation bug corrupting bf16 all-reduces, and AITer backend fixes) and DeepSeek V4 performance enablement (prefill context-parallel overlap on AMD, deferred MoE finalize for MXFP4/FP8). The agentic-inference roadmap also advanced with an RFC for recoverable router KV state and a programmatic KV-cache proposal, signaling continued investment in router-aware orchestration.

## 2. Releases & Breaking Changes

No releases or breaking changes in the last 24 hours. The only dependency-adjacent item in flight is the FlashInfer 0.6.17 bump that removes Kimi K3 workarounds ([#33997](https://github.com/sgl-project/sglang/pull/33997)) — worth watching if you pin FlashInfer.

## 3. New Model & Hardware Support

- **LTX-2.5 diffusion support** — new backend support for the LTX-2.5 model ([#34471](https://github.com/sgl-project/sglang/pull/34471)).
- **Windows ARM64 CI and wheels** — PR adds native Windows ARM64 build/validation/publish coverage ([#34339](https://github.com/sgl-project/sglang/pull/34339)).
- **AMD/ROCm diffusion backends** — AITer backend extended to grouped-query K/V, fixing Cosmos3-Nano startup on ROCm ([#34485](https://github.com/sgl-project/sglang/pull/34485)); PTX-inline-asm norm fusions disabled on ROCm to fix FLUX.1-dev warmup crash ([#34481](https://github.com/sgl-project/sglang/pull/34481)).
- **Qwen3.5 DP-attention guard** — attention layers now guarded against empty DP-attention batches under wide-EP disaggregated decode with MTP ([#34474](https://github.com/sgl-project/sglang/pull/34474)).
- **Wide EP for GLM5-2 / kimi-k3** — open request for Wide EP on GB200 (NVLink) and B200 (RDMA/EFA); deployment currently fails, no fix PR yet ([#34120](https://github.com/sgl-project/sglang/issues/34120)).
- **MLX RFC** — proposal to replace the MLX runner-stub split with a single Torch-owned SRT path plus an exported whole-model MLX region, leveraging zero-copy MPS storage ([#32321](https://github.com/sgl-project/sglang/issues/32321)).

## 4. Performance & Optimization

- **Deferred MoE finalize (MXFP4/FP8 block-scale)** — merges the top-k weighted combine with shared-expert addition, removing one kernel launch per MoE layer for FlashInfer TRT-LLM MoE kernels ([#34456](https://github.com/sgl-project/sglang/pull/34456)).
- **FlashInfer cute-dsl backend for MXFP8 GEMM** — swap-AB/split-K kernels are faster than the persistent CUTLASS path on SM10X and proposed as default; WIP ([#34042](https://github.com/sgl-project/sglang/pull/34042)).
- **AITER unified-attention with scaled FP8 Q** — quantizing BF16 Q enables the native FP8-Q matmul path, reducing `kernel_unified_attention_3d` cost at medium/high decode batch ([#31856](https://github.com/sgl-project/sglang/pull/31856)).
- **DeepSeek V4 prefill CP two-batch overlap on AMD** — enables overlap for prefill context parallelism ([#33480](https://github.com/sgl-project/sglang/pull/33480)).
- **Remove ×0.85 mem_fraction_static derate** — eliminates the silent memory derate for AITer + ctx>8K on AMD ([#25199](https://github.com/sgl-project/sglang/pull/25199)).
- **QuickReduce bf16 all-reduce fix yields +0.3%** — see §5; the correctness fix also improves accuracy on affected workloads ([#34484](https://github.com/sgl-project/sglang/pull/34484)).
- **Tracking:** DeepSeek V4 NVIDIA perf (SM90/SM10X) — TRT-LLM DSv4 attention for SM100/103 pending ([#33636](https://github.com/sgl-project/sglang/issues/33636)); SM120 Blackwell perf plan with DeepSeek V4 and DeepGEMM MQA Indexer done ([#19637](https://github.com/sgl-project/sglang/issues/19637)); DSpark speculative decoding roadmap, next focus on adaptive cost model and scheduling ([#30344](https://github.com/sgl-project/sglang/issues/30344)).

## 5. Stability & Regressions

- **ROCm QuickReduce corrupts bf16 all-reduces (fixed)** — bf16→fp16 conversion before the codec silently narrows dynamic range to 65,504, producing 106M non-finite values; fixed by avoiding fp16 saturation, improving accuracy +0.3% ([#34484](https://github.com/sgl-project/sglang/pull/34484), fixes [#34473](https://github.com/sgl-project/sglang/issues/34473)).
- **Diffusion attention backend fallback regression** — recent fallback change breaks most diffusion models; no fix PR yet ([#34389](https://github.com/sgl-project/sglang/issues/34389)).
- **Qwen MoE PP-stage crash (fixed)** — fused shared-expert lookup reads `layers[0].mlp`, which is a `PPMissingLayer` placeholder on non-first pipeline stages; PP-safe guard in review ([#34447](https://github.com/sgl-project/sglang/pull/34447)).
- **DSV4 hierarchical-cache hang on H20** — scheduler hang in sparse prefill with chunked prefill 16K (watchdog abort) plus sampling device-side assert on 0.5.16+PR; no fix yet ([#34235](https://github.com/sgl-project/sglang/issues/34235)).
- **Multi-output diffusion rollout collapse** — per-sample trajectories collapse to output 0, grouped-forward AttributeError, and provided latents skip packing; no fix yet ([#34000](https://github.com/sgl-project/sglang/issues/34000)).
- **CI signal** — 3 broken, 11 flaky, 670 recently fixed on `main`; tracker auto-updated 2026-08-12 ([#17050](https://github.com/sgl-project/sglang/issues/17050)). CUDA coredump events from `pr-test.yml` continue to be auto-collected in a long-running tracker thread (231 comments) ([#26340](https://github.com/sgl-project/sglang/issues/26340)).
- **Closed/stale bug backlog** — flaky-related and older backend issues (Gemma-4 fused-MoE SM121 shared memory, DeepEP cooperative launch, PD `check_status`, W4AFP8+DeepEP `routed_scaling_factor` TypeError, EAGLE+MiMo NVFP4) were closed as inactive in this window.

## 6. What This Means for Application Developers

- **Agentic/routing layer is maturing.** The programmatic KV-cache RFC ([#27574](https://github.com/sgl-project/sglang/issues/27574)) and the sgl-router KV-state snapshot/replay proposal ([#33394](https://github.com/sgl-project/sglang/issues/33394)) target exactly the failure mode where routers lose KV placement state on restart — if you run multi-engine agent workloads, these will improve availability and cache hit rates.
- **OpenAI-compat hardening continues.** Expect `parallel_tool_calls: null` to be accepted instead of rejected with 422 ([#28800](https://github.com/sgl-project/sglang/pull/28800)), and named `tool_choice` referencing a missing tool to fail with a clean validation error rather than HTTP 500 ([#28862](https://github.com/sgl-project/sglang/pull/28862)).
- **ROCm is converging, but pin carefully.** Multiple AMD fixes landed this cycle, but the QuickReduce all-reduce corruption and FLUX/Cosmos3 warmup crashes show the ROCm path is still stabilizing — validate accuracy on bf16 workloads if you are on ROCm.
- **Watch the DeepSeek V4 perf trackers.** Deferred MoE finalize and CP overlap directly reduce per-layer launch overhead and prefill latency on DSv4-class models; if you serve DSv4 with MXFP4/FP8, these PRs are worth tracking for near-term throughput gains.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp Digest — 2026-08-12

## Today's Highlights

Seven releases shipped (b10356–b10362), headlined by the CI/release pipeline moving to **ROCm 7.14** and a critical **RPC backend out-of-bounds write fix** ([PR #26933](https://github.com/ggml-org/llama.cpp/pull/26933)). On the model side, EXAONE 4.5 sliding-window attention was fixed, SKT's A.X K2 (Sparse Gated Attention) is in review, and speculative decoding (DSpark) on multi-GPU CUDA continues to generate the most severe open stability reports. Infrastructure engineers should note the incoming `--load-mode` flag migration and the ROCm 7.14 runtime dependency change.

## Releases & Breaking Changes

**Releases b10356 → b10362** ([tags](https://github.com/ggml-org/llama.cpp/releases)):

- **b10362** — Skip `multi_output_sampling_chain` on HIP: the test's top_k path needs CUB, which is unavailable on HIP, leaving `sampled_probs` null ([PR #26878](https://github.com/ggml-org/llama.cpp/pull/26878)).
- **b10361** — Fix EXAONE 4.5 SWA never being enabled: `load_arch_hparams` read `n_layer()` before `LLM_KV_NEXTN_PREDICT_LAYERS` was loaded, corrupting the layer count ([PR #26848](https://github.com/ggml-org/llama.cpp/pull/26848)).
- **b10360** — `common/peg`: suppress incomplete escape sequence warnings ([PR #26780](https://github.com/ggml-org/llama.cpp/pull/26780)).
- **b10359** — WebGPU CI fixes from the flash-attention and all-ops test work; adds i32 `cpy` support ([PR #26566](https://github.com/ggml-org/llama.cpp/pull/26566)).
- **b10358** — Address review comments on speculative decoding PR #25532 ([PR #26852](https://github.com/ggml-org/llama.cpp/pull/26852)); a follow-up also makes speculative server tests robust to batch variances ([PR #26925](https://github.com/ggml-org/llama.cpp/pull/26925)).
- **b10357** — OpenCL: transpose the K tile in local memory for flash-attention prefill kernels ([PR #26428](https://github.com/ggml-org/llama.cpp/pull/26428)).
- **b10356** — CI now targets **ROCm 7.14** for build/release, the first production release using the "TheRock" build system ([PR #25775](https://github.com/ggml-org/llama.cpp/pull/25775)).

**Breaking changes / migration notes:**

- **ROCm 7.14 is now the supported baseline.** Users on older ROCm stacks will hit missing runtime libraries (`libhipblas.so.3`) at load time ([#25807](https://github.com/ggml-org/llama.cpp/issues/25807)) and must upgrade the full ROCm userspace, not just the llama.cpp binaries.
- Deprecated flags `--mmap` / `--no-mmap` / `--mlock` / `--direct-io` are being migrated to a unified `--load-mode` argument ([PR #26934](https://github.com/ggml-org/llama.cpp/pull/26934)). Scripts using the legacy flags will need updating.

## New Model & Hardware Support

- **SKT A.X K2** — new architecture support with Sparse Gated Attention and Gated Norm; compatible GGUF files linked ([PR #26757](https://github.com/ggml-org/llama.cpp/pull/26757)).
- **Glimmer drafter optimization** — speculative decoding work in progress ([PR #26842](https://github.com/ggml-org/llama.cpp/pull/26842)); earlier "unknown model architecture: muse-glimmer" server error closed ([#26858](https://github.com/ggml-org/llama.cpp/issues/26858)).
- **EXAONE 4.5** — SWA correctness fix shipped in b10361 (see above).
- **CUDA UMA memory detection** — fix for AMD iGPUs (Strix Halo and similar) where `hipMemGetInfo()` returns system free RAM instead of VRAM; reads sysfs VRAM instead ([PR #26932](https://github.com/ggml-org/llama.cpp/pull/26932)).
- **32-bit ARM** — `__fp16` now gated on `__ARM_FP16_FORMAT_IEEE`, fixing NEON builds with GCC ([PR #26860](https://github.com/ggml-org/llama.cpp/pull/26860)).

## Performance & Optimization

- **OpenCL FA prefill** — K-tile transpose in local memory landed in b10357, a targeted memory-bandwidth optimization for flash-attention prefill kernels ([PR #26428](https://github.com/ggml-org/llama.cpp/pull/26428)).
- **Server metrics correctness** — refactor in review: derived metrics like t/s are now enqueued with the batch and updated from actual `llama_decode` outcomes rather than request-level timestamps ([PR #26920](https://github.com/ggml-org/llama.cpp/pull/26920)). Relevant for anyone benchmarking or billing on llama-server.
- **Expert caching** — two large PRs ([#26563](https://github.com/ggml-org/llama.cpp/pull/26563), [#26824](https://github.com/ggml-org/llama.cpp/pull/26824)) were closed by the author for redesign, with plans to re-open. Concept: opt-in (`-ehs N`) heatmap-based expert caching, mmap pinning, and CPU↔device expert streaming.
- **CI/build time** — ccache wired as HIP compiler launcher to fix slow Ubuntu ROCm builds ([PR #26926](https://github.com/ggml-org/llama.cpp/pull/26926)); release jobs taking 10+ hours flagged as an open issue ([#26896](https://github.com/ggml-org/llama.cpp/issues/26896)).

## Stability & Regressions

Ranked by severity:

1. **RPC out-of-bounds write in SET_ROWS** — malformed `GGML_OP_SET_ROWS` tensors can write past output buffers in release builds of `ggml-rpc-server` ([#26912](https://github.com/ggml-org/llama.cpp/issues/26912)). Fix PR adds pre-execution dimension validation ([PR #26933](https://github.com/ggml-org/llama.cpp/pull/26933)). **Update RPC servers.**
2. **DeepSeek V4 garbled output on Strix Halo (ROCm/HIP)** — 27 comments, still open, no confirmed fix ([#25436](https://github.com/ggml-org/llama.cpp/issues/25436)).
3. **ROCm 7.14 migration breakage** — missing `libhipblas.so.3` for users on older stacks ([#25807](https://github.com/ggml-org/llama.cpp/issues/25807)); VRAM not allocated on gfx1201 ([#26208](https://github.com/ggml-org/llama.cpp/issues/26208)).
4. **DSpark speculative decoding on CUDA** — crash when loading draft model with `-devd CUDA0` ([#26475](https://github.com/ggml-org/llama.cpp/issues/26475)); `cublasSgemm` "unsupported value" after ~2,000–2,600 decoded tokens on multi-GPU ([#26554](https://github.com/ggml-org/llama.cpp/issues/26554)).
5. **Vulkan MoE crashes** — Intel Arc B70 crash with Qwen3.6 MoE models ([#23769](https://github.com/ggml-org/llama.cpp/issues/23769)); `GGML_ASSERT(id >= 0 && id < n_expert)` with Gemma 4 26B-A4B + `--n-cpu-moe` ([#25777](https://github.com/ggml-org/llama.cpp/issues/25777)).
6. **Gemma 4 E4B** — `GGML_ASSERT(n_inputs < GGML_SCHED_MAX_SPLIT_INPUTS)` on CUDA/V100 ([#24132](https://github.com/ggml-org/llama.cpp/issues/24132)).
7. **OpenVINO** — gemma-4-12B fails to load on CPU/GPU/NPU ([#24415](https://github.com/ggml-org/llama.cpp/issues/24415)).
8. **SYCL** — garbage output on the second prompt on Arc Pro B60 ([#26845](https://github.com/ggml-org/llama.cpp/issues/26845)).
9. **Glimmer Q8_0 on 4× Tesla T10 tensor split** — `GGML_ASSERT(ret.axis != GGML_BACKEND_SPLIT_AXIS_UNKNOWN)` ([#26902](https://github.com/ggml-org/llama.cpp/issues/26902)).
10. **Qwen3-Embedding-8B on Volta (sm_70)** — all-NaN embeddings wedge the server; CPU is correct ([#26044](https://github.com/ggml-org/llama.cpp/issues/26044)).
11. **ROCm RPC worker crash** — gfx1151 worker dies in `GGML_OP_TOP_K` during DeepSeek V4 prefill past 4096 tokens ([#26746](https://github.com/ggml-org/llama.cpp/issues/26746)).

Closed/fixed this cycle: `split-mode = tensor` regression since b10054 ([#25829](https://github.com/ggml-org/llama.cpp/issues/25829)), Vulkan RADV hang on gfx1150 ([#24861](https://github.com/ggml-org/llama.cpp/issues/24861)), LFM2.5 tool-call quoting ([#26658](https://github.com/ggml-org/llama.cpp/issues/26658)), and the GitHub release workflow failure ([#26866](https://github.com/ggml-org/llama.cpp/issues/26866)).

## What This Means for Application Developers

- **ROCm users must plan a 7.14 userspace upgrade** before adopting these builds; mixing old HIP runtime libraries with new binaries will fail at load. This is a coordinated change (b10356 + PR #25775), not a one-off.
- **Don't trust DSpark speculative decoding on multi-GPU CUDA for long generations yet** — crashes cluster around 2k–2.6k decoded tokens and `-devd` multi-device setups ([#26554](https://github.com/ggml-org/llama.cpp/issues/26554), [#26475](https://github.com/ggml-org/llama.cpp/issues/26475)). Pin a known-good build or add retry logic around long responses.
- **If you run `ggml-rpc-server`, pick up PR #26933 immediately** — the SET_ROWS OOB write is remotely triggerable via a crafted graph and corrupts memory in release builds.
- **Constrained generation/structured outputs are improving**: JSON Schema `pattern` keywords now correctly treat regexes as unanchored partial matches per spec ([PR #26931](https://github.com/ggml-org/llama.cpp/pull/26931)), and the OpenAI Responses API gains JSON-schema support for chat templates ([PR #26013](https://github.com/ggml-org/llama.cpp/pull/26013)). Re-test tool-call/JSON workloads after upgrading.
- **Watch the `--load-mode` migration** ([PR #26934](https://github.com/ggml-org/llama.cpp/pull/26934)) — update launch scripts now to avoid breakage when legacy mmap/mlock flags are removed.
- **Server metrics will get more trustworthy** once PR #26920 lands — t/s will reflect actual decode outcomes, making autoscaling and capacity decisions more accurate.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Digest — 2026-08-12

## Today's Highlights

- Ollama shipped **v0.32.9**, featuring **NVIDIA Nemotron 3.5 Lightning**, an open 30B MoE model with 3B active parameters aimed at always-on agent harnesses.  
- The most interesting in-flight work is around the platform API surface: **OpenAI Responses API web search** support (`#17686`) and **server-side MLX/safetensors imports** (`#14969`).  
- A cluster of regressions remains the watch item: MLX long-lived runner response contamination (`#17599`), low-bit quantization producing garbage (`#17614`), and a Qwen performance regression on Apple M2 (`#17583`).

---

## Releases & Breaking Changes

- **[v0.32.9](https://github.com/ollama/ollama/releases/tag/v0.32.9)** — Adds NVIDIA Nemotron 3.5 Lightning (30B MoE, 3B active).  
- **[PR #14969](https://github.com/ollama/ollama/pull/14969)** — In-flight: server-side `ollama create` would support safetensors/MLX imports and **drop GGUF conversion**, limiting GGUF create to wrapping existing GGUF files. If merged, this is a workflow-level breaking change for GGUF-based imports.  
- **[PR #17679](https://github.com/ollama/ollama/pull/17679)** — In-flight: stop applying `repeat_penalty 1.1` by default to models that don't set one. This changes default generation behavior if merged.  
- **[Issue #17668](https://github.com/ollama/ollama/issues/17668)** — `ollama/ollama:0.32.8` Docker image was missing from the registry after the release tag.  
- **[Issue #17678](https://github.com/ollama/ollama/issues/17678)** — Home Assistant update check returns a 404 for Ollama 0.32.7, indicating a release-artifact problem.

---

## New Model & Hardware Support

- **NVIDIA Nemotron 3.5 Lightning** — Released in v0.32.9. Open 30B MoE, 3B active parameters, positioned for agent execution loops.  
  [Release tag](https://github.com/ollama/ollama/releases/tag/v0.32.9)  
- **[PR #17672](https://github.com/ollama/ollama/pull/17672)** — Add Nemotron 3.5 prompt layout/parser support.  
- **[PR #17643](https://github.com/ollama/ollama/pull/17643)** — MLX support for **Ling-3.0-Tiny** via `BailingMoeV3ForCausalLM`, including FP8/INT4 quantized variants.  
- **[PR #17685](https://github.com/ollama/ollama/pull/17685)** — Fix GPU memory detection on **AMD Strix Halo** (gfx1151) where `hipMemGetInfo()` returns system RAM rather than free VRAM.  
- **[PR #17681](https://github.com/ollama/ollama/pull/17681)** — Add **OpenRC service** support for Alpine/Gentoo Linux installs.  
- **[Issue #17683](https://github.com/ollama/ollama/issues/17683)** — DFlash NVFP4 MLX variant (`muse-glimmer:30b-nvfp4-dflash`) is not working on Mac M5 Pro; related to the MLX quantization/runtime path.

---

## Performance & Optimization

- **[PR #16998](https://github.com/ollama/ollama/pull/16998)** — Opt-in Prometheus-compatible `/metrics` endpoint (`OLLAMA_METRICS=1`) exposing scheduler gauges, request counters, and per-model/token metrics. Good observability win for gateways/proxies if merged.  
- **[Issue #17666](https://github.com/ollama/ollama/issues/17666)** — MLX runner serializes all requests; concurrent API calls are queued behind a single goroutine. No batching/concurrent decode support yet.  
- **[Issue #17583](https://github.com/ollama/ollama/issues/17583)** — **Qwen3.6-35B-A3B performance regression** on Apple M2: older Ollama ran ~72 T/s; Ollama 0.32.5 is "much slower" on identical prompt/context/hardware.  
- **[Issue #15758](https://github.com/ollama/ollama/issues/15758)** — Ollama Cloud still reports 0 cached tokens even when cache acceleration is active.  
- **[PR #17551](https://github.com/ollama/ollama/pull/17551)** — Fix direct-URL download retries being skipped after a 30s context deadline; addresses stalled HF-style model pulls.  
- **[PR #17480](https://github.com/ollama/ollama/pull/17480)** — Benchmark improvement: use packed HumanEval Python prompts for speculative-draft evaluation.  
- **[PR #16769](https://github.com/ollama/ollama/pull/16769)** — Render plain progress output when stderr is not a TTY, avoiding ANSI garbage in CI logs.
- **[PR #17649](https://github.com/ollama/ollama/pull/17649)** — Add per-file SHA-256 progress during `ollama create`, addressing the silent "gathering model components" phase.

---

## Stability & Regressions

### Critical correctness

- **[Issue #17599](https://github.com/ollama/ollama/issues/17599)** — MLX long-lived runner (`OLLAMA_KEEP_ALIVE=-1`) intermittently returns a **verbatim answer to an earlier prompt** on Apple Silicon. Cross-request response contamination; no fix PR yet.  
- **[Issue #17684](https://github.com/ollama/ollama/issues/17684)** — `muse-glimmer:30b-mlx` leaks control tokens (` to=user<|message|>`), wraps output in markdown fences, and ignores `response_format`/JSON schemas. GGUF build works, MLX does not.  
- **[Issue #17614](https://github.com/ollama/ollama/issues/17614)** — Switching KV cache quantization from `q8_0` to `q4_0` causes models to emit unintelligible/garbage text. Severe output correctness bug for low-bit KV cache users.

### High-impact platform bugs

- **[Issue #17596](https://github.com/ollama/ollama/issues/17596)** — Deterministic CUDA illegal memory access in `ggml_cuda_flash_attn_ext_mma_f16_case<256,256,8,8>` during large prefill on **DGX Spark (GB10)** with head-size-256 models.  
- **[Issue #17669](https://github.com/ollama/ollama/issues/17669)** — Qwen3.6 hybrid model falls back to CPU on CUDA with llama.cpp b10353; works with b10242.  
- **[Issue #17491](https://github.com/ollama/ollama/issues/17491)** — `ollama create` hangs indefinitely with two `FROM` lines (model + mmproj) instead of erroring. [PR #17649](https://github.com/ollama/ollama/pull/17649) addresses the missing progress feedback but not the root hang.  
- **[Issue #17671](https://github.com/ollama/ollama/issues/17671)** — `ollama launch claude --model qwen3-coder:30b` generates successfully but Claude Code shows no response.  
- **[Issue #17667](https://github.com/ollama/ollama/issues/17667)** — Gemma 4 Cloud returns HTTP 500 when a request contains both vision input and tool calling.  
- **[Issue #17484](https://github.com/ollama/ollama/issues/17484)** — "context deadline exceeded" during HF model pulls. Fix PR exists: [PR #17551](https://github.com/ollama/ollama/pull/17551).  

### Regressions and lingering issues

- **[Issue #17661](https://github.com/ollama/ollama/issues/17661)** — Models disappeared on Jetson AGX Orin after upgrading to 0.32.7; only one model survived.  
- **[Issue #16563](https://github.com/ollama/ollama/issues/16563)** — Structured outputs are still ignored for MLX models (Qwen 3.5/Gemma 4).  
- **[Issue #15704](https://github.com/ollama/ollama/issues/15704)** — LXC containers get false "insufficient memory" errors because Ollama uses `MemFree` instead of `MemAvailable`.  
- **[Issue #17682](https://github.com/ollama/ollama/issues/17682)** — Session not revoked after password/email change, leaving unauthorized access active.  
- **[Issue #17653](https://github.com/ollama/ollama/issues/17653)** — Claude Desktop launch is rejected on Ubuntu even though Claude Desktop is no longer supported there; error message is misleading.  
- **[Issue #16673](https://github.com/ollama/ollama/issues/16673)** — Context length slider is grayed out in the Ollama app after relaunch.

---

## What This Means for Application Developers

- **Don't trust MLX for production structured-output workflows yet.** MLX currently ignores JSON schemas (`#16563`), leaks control tokens (`#17684`), and can return another request's response under `keep_alive=-1` (`#17599`). If you need deterministic output, pin to GGUF builds or add output validation.  
- **Watch the default `repeat_penalty` change** in [PR #17679](https://github.com/ollama/ollama/pull/17679). If merged, models without an explicit repeat penalty will stop receiving 1.1 by default, which can change generation quality and tail behavior.  
- **OpenAI Responses API compatibility is improving.** [PR #17686](https://github.com/ollama/ollama/pull/17686) adds server-side web search for Codex, and [Issue #17673](https://github.com/ollama/ollama/issues/17673) requests support for custom tools in the Responses API. This matters for agents relying on native tool-calling semantics.  
- **Observability is coming, but not merged yet.** The metrics endpoint in [PR #16998](https://github.com/ollama/ollama/pull/16998) will expose queue depth, loaded models, and token counters. Until then, cache accounting on Ollama Cloud remains unreliable ([#15758](https://github.com/ollama/ollama/issues/15758)).  
- **Verify your Docker tags before rollout.** The v0.32.8 image was missing ([#17668](https://github.com/ollama/ollama/issues/17668)), so automated image-pinning workflows could break even when the GitHub release exists.  
- **MLX concurrency is limited.** The experimental MLX runner serializes requests ([#17666](https://github.com/ollama/ollama/issues/17666)), so if you're serving concurrent traffic on Apple Silicon, expect queueing rather than parallel decode.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-08-12

## Today’s Highlights
Seven patch releases shipped in the last 24 hours (`v1.96.2`, `v1.95.1`, `v1.94.3`, `v1.93.2`, `v1.92.2`, `v1.91.5`, `v1.90.7`), though the release notes only document Docker image cosign signature verification and contain no detailed changelogs. The most active feature work is around the auto-router: new PRs add a pre-adoption “shadow eval” flow for safely testing auto-router behavior before production traffic, plus UI support for it ([#36571](https://github.com/BerriAI/litellm/pull/36571), [#36587](https://github.com/BerriAI/litellm/pull/36587), [#36588](https://github.com/BerriAI/litellm/pull/36588)). Separately, routing groups are being made callable as virtual models and listed in `/v1/models` ([#36519](https://github.com/BerriAI/litellm/pull/36519)).

## Releases & Breaking Changes
- Published: [v1.96.2](https://github.com/BerriAI/litellm/releases/tag/v1.96.2), [v1.95.1](https://github.com/BerriAI/litellm/releases/tag/v1.95.1), [v1.94.3](https://github.com/BerriAI/litellm/releases/tag/v1.94.3), [v1.93.2](https://github.com/BerriAI/litellm/releases/tag/v1.93.2), [v1.92.2](https://github.com/BerriAI/litellm/releases/tag/v1.92.2), [v1.91.5](https://github.com/BerriAI/litellm/releases/tag/v1.91.5), [v1.90.7](https://github.com/BerriAI/litellm/releases/tag/v1.90.7).
- Release notes only cover Docker signature verification via cosign; no API/config changes or migration notes were included.
- One packaging regression is worth flagging: `litellm 1.96.1` reportedly ships no Python 3.13-compatible wheel or sdist ([#36526](https://github.com/BerriAI/litellm/issues/36526)). Verify `1.96.2` packaging before upgrading in 3.13 environments.

## New Model & Hardware Support
No new models, hardware backends, or quantization formats were announced in this window.  
Model-related activity was limited to correctness and billing fixes:
- xAI web search billing is being corrected to use `server_side_tool_usage_details` instead of legacy `num_sources_used` ([#30817](https://github.com/BerriAI/litellm/pull/30817)).
- The Meta provider backend exists but is missing from the Dashboard “Add Model” provider dropdown ([#36164](https://github.com/BerriAI/litellm/issues/36164)).

## Performance & Optimization
- **Staggered background jobs**: [PR #36589](https://github.com/BerriAI/litellm/pull/36589) fixes APScheduler interval jobs firing simultaneously across pods/processes. This should reduce thundering-herd load in multi-replica proxy deployments.
- **Rust migration**: The parent ticket ([#31263](https://github.com/BerriAI/litellm/issues/31263)) remains the most-discussed performance effort, targeting sub-1ms gateway overhead, but no new benchmark numbers landed today.
- **Streaming passthrough cost accounting**: A staged internal promotion ([#36560](https://github.com/BerriAI/litellm/pull/36560)) includes reassembly of fragmented/CRLF SSE frames and injection of streaming usage cost on OpenAI passthrough streams.

## Stability & Regressions
Reported/updated issues, ordered roughly by severity:

- **Crash on empty `choices` chunks** in `/v1/messages` streaming: `_should_start_new_content_block` accesses `chunk.choices[0]` unconditionally ([#36553](https://github.com/BerriAI/litellm/issues/36553)).
- **`async for` TypeError when streaming reasoning fields**: Providers returning a `reasoning` field inside `delta` can crash streaming responses ([#27670](https://github.com/BerriAI/litellm/issues/27670)).
- **Cooldown handler blocks failover**: `APIConnectionError` is hardcoded in `cooldown_handlers.py`, preventing failover to healthy deployments in multi-host setups ([#27362](https://github.com/BerriAI/litellm/issues/27362)).
- **Anthropic transformer forces `effort=xhigh`** on all Claude models, causing invalid request errors for many models ([#27168](https://github.com/BerriAI/litellm/issues/27168)).
- **Claude Opus 4.7 temperature param**: LiteLLM still reports `temperature` as supported even though Anthropic rejects it ([#26444](https://github.com/BerriAI/litellm/issues/26444)).
- **Azure GPT-5.6 cost mapping is wrong**: `azure/gpt-5.6-terra` / `azure/gpt-5.6-luna` cost rows incorrectly use OpenAI’s direct prices rather than Azure’s published meters ([#36192](https://github.com/BerriAI/litellm/issues/36192)).
- **Rate-limit errors mislabeled** as “No deployments available,” with stack traces printed ([#20867](https://github.com/BerriAI/litellm/issues/20867)).
- **Guardrails Monitor gap**: `litellm_content_filter` evaluations are missing from request logs and the Guardrails Monitor ([#36566](https://github.com/BerriAI/litellm/issues/36566)).
- **Open fix PRs in flight** include MCP tool argument/result redaction ([#36474](https://github.com/BerriAI/litellm/pull/36474)), headroom marker resolution ([#36581](https://github.com/BerriAI/litellm/pull/36581)), and propagation of custom pricing from `litellm_params` into `model_info` ([#36584](https://github.com/BerriAI/litellm/pull/36584)).

## What This Means for Application Developers
- **Multi-replica proxy users**: Watch for duplicate alerts/spend reports ([#14809](https://github.com/BerriAI/litellm/issues/14809)) and simultaneous background job bursts. PR [#36589](https://github.com/BerriAI/litellm/pull/36589) should address the latter once merged.
- **Streaming reliability**: If you use `/v1/messages` or stream models that emit `reasoning` fields, you may hit [#36553](https://github.com/BerriAI/litellm/issues/36553) or [#27670](https://github.com/BerriAI/litellm/issues/27670). Consider defensive retry logic until fixes land.
- **Python 3.13 users**: Confirm wheel availability in the release you are installing; `1.96.1` lacks 3.13 support ([#36526](https://github.com/BerriAI/litellm/issues/36526)).
- **Cost tracking**: If you use xAI web search or Azure GPT-5.6, known cost inaccuracies are being tracked in [#30817](https://github.com/BerriAI/litellm/pull/30817) and [#36192](https://github.com/BerriAI/litellm/issues/36192).
- **Custom pricing overrides**: If you set `input_cost_per_token` / `output_cost_per_token` inside `litellm_params`, they may be ignored today; the fix is open in [#36584](https://github.com/BerriAI/litellm/pull/36584).
- **Routing groups**: Once [#36519](https://github.com/BerriAI/litellm/pull/36519) merges, routing groups will be callable as virtual models and discoverable via `/v1/models` — useful for Claude Code and Codex discovery flows.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth Digest — 2026-08-12

## 1. Today's Highlights
Unsloth launched **Unsloth Desktop** (v0.1.70x-beta), the first open-source desktop app for running and training models locally on Windows, macOS, and Linux — the headline release of the day, with a predictable first-day wave of Windows/AMD ROCm and Linux AppImage install bugs. Behind the scenes, the Studio backend landed a significant performance series converting quadratic tool-scanning paths to linear time, and CI is being extended to real Kaggle T4s to close a long-standing CUDA/Turing coverage gap.

## 2. Releases & Breaking Changes
- **[v0.1.701-beta / v0.1.70-beta — Unsloth Desktop](https://github.com/unslothai/unsloth/releases)** — First desktop app to run and train models locally; research, export, and deploy from one app on Windows/macOS/Linux. (Two release entries with identical notes; likely the same release.) See also [unsloth.ai](https://unsloth.ai/).
- **[v0.1.62-beta](https://github.com/unslothai/unsloth/releases)** — Bug-fix patch on the older line.
- **Version misreporting fixed** — `unsloth.__version__` aliases `unsloth_zoo.__version__`, so when core releases ahead of zoo, tooling reports the wrong version; dependency pin is `>=` with no release-time guard ([#8171](https://github.com/unslothai/unsloth/issues/8171), closed).
- **Windows GGUF path handling changed in Studio 2026.8.12** — Drive-letter absolute paths were split at the drive colon, causing `503 model_switch_failed` for local GGUF models; closed as fixed ([#8368](https://github.com/unslothai/unsloth/issues/8368), [#8375](https://github.com/unslothai/unsloth/issues/8375)).

## 3. New Model & Hardware Support
- **Muse-Glimmer-30B-GGUF** — Studio downloads it, but bundled llama.cpp `b10333` does not yet recognize the `muse-glimmer` GGUF architecture ([#8345](https://github.com/unslothai/unsloth/issues/8345), closed as tracking).
- **MiniMax-M3-GGUF** — `UD-Q5_K_XL` variant fails to load on Apple Silicon: missing `indexer.head_count` metadata ([#8360](https://github.com/unslothai/unsloth/issues/8360), open).
- **MiniMax-H3** — Desktop fails on RTX 5090 with "stable-diffusion.cpp build … predates MiniMax-H3 support" ([#8507](https://github.com/unslothai/unsloth/issues/8507), open).
- **Qwen3.5 4B Vision** — Notebook fails with `AcceleratorError`; no workaround yet ([#7124](https://github.com/unslothai/unsloth/issues/7124), open).
- **NVFP4 on RTX 5060 Ti 16 GB** — Quantized load fails on Blackwell consumer; open ([#8246](https://github.com/unslothai/unsloth/issues/8246)).
- **Strix Halo (gfx1151)** — PR routes spoofed `gfx1100` hosts (via `HSA_OVERRIDE_GFX_VERSION=11.0.0` workaround) to the correct AMD per-gfx index, closing [#7331](https://github.com/unslothai/unsloth/issues/7331) ([#8480](https://github.com/unslothai/unsloth/pull/8480)).
- **CUDA/Turing CI coverage** — Studio currently has zero CUDA coverage; PRs add notebook smoke tests and Studio smoke tests on real Kaggle T4s (sm_75) ([#8440](https://github.com/unslothai/unsloth/pull/8440), [#8489](https://github.com/unslothai/unsloth/pull/8489)).
- **New external provider** — ChatGPT subscription support with Codex tools proposed as a first-class Studio provider ([#8511](https://github.com/unslothai/unsloth/pull/8511)).

## 4. Performance & Optimization
- **Linear-time tool scanning** — `generate_chat_completion_with_tools` rescanned the entire accumulated response on every streamed token (quadratic); now linear ([#8428](https://github.com/unslothai/unsloth/pull/8428)). Three sibling quadratic scans in the safetensors/healer paths also fixed ([#8494](https://github.com/unslothai/unsloth/pull/8494)).
- **Backend startup & event loop** — Cuts backend start time and removes blocking work from startup paths ([#8498](https://github.com/unslothai/unsloth/pull/8498)).
- **Routes/data layer** — Five superlinear paths rewritten algorithmically; one path decoded an entire vocabulary only to discard it ([#8499](https://github.com/unslothai/unsloth/pull/8499)).
- **Speculative decoding under Auto** — The drafter was treated as non-negotiable in VRAM fitting, costing context length (or OOM under `--fit`); Auto now drops the drafter first when only the base model fits ([#8435](https://github.com/unslothai/unsloth/pull/8435)).
- **Multi-GPU VRAM reporting** — Host-level VRAM usage fallback when no single GPU can be attributed; addresses the RDNA3 "Unknown used/free" issue ([#8481](https://github.com/unslothai/unsloth/pull/8481), [#7452](https://github.com/unslothai/unsloth/issues/7452)).
- **Compiled-cache preservation** — A second backend instance was wiping the shared install-tree compiled cache out from under the first, deleting modules still being imported (including `Unsloth*Trainer.py`); now preserved ([#8457](https://github.com/unslothai/unsloth/pull/8457)).
- **Idle VRAM eviction (regression)** — Models keep leaving VRAM when idle on AMD W7900/W7500, adding response latency; open ([#7164](https://github.com/unslothai/unsloth/issues/7164)).
- **MTP probe cache** — Studio cached an inconclusive llama-server MTP probe until restart (MTP and OFF both ~6.5 tok/s); closed ([#8317](https://github.com/unslothai/unsloth/issues/8317)).

## 5. Stability & Regressions
Ranked by severity; fix PRs noted where they exist.

- **Backend CI red on `main` all day** — Every run since 16:04 UTC failed, blocking all open PRs. Two independent causes: missing `torchao` in the CI image (23 failures) and a pre-quant allowlist answer leaking across tests. Fixes: [#8506](https://github.com/unslothai/unsloth/pull/8506) and [#8486](https://github.com/unslothai/unsloth/pull/8486) (fixes 21 of 23).
- **Windows AMD installs broken** — Installer replaces ROCm PyTorch with a non-ROCm `torch` wheel, then import fails ([#7275](https://github.com/unslothai/unsloth/issues/7275)); new Desktop install failure reported on AMD ([#8508](https://github.com/unslothai/unsloth/issues/8508)); installer reports AMD GPU while backend runs CPU-only with no reconciliation ([#8473](https://github.com/unslothai/unsloth/issues/8473)).
- **Linux AppImage startup failure** — "required Linux libraries are missing"; top open issue by comments ([#8463](https://github.com/unslothai/unsloth/issues/8463)). A portable AppImage PR for Steam Deck/immutable distros is in progress ([#8343](https://github.com/unslothai/unsloth/pull/8343)).
- **Exported tokenizer broken** — `tokenizer_config.json` contains `"tokenizer_class": "TokenizersBackend"`, which transformers cannot load via `AutoTokenizer` — breaks fine-tune export/deploy ([#8444](https://github.com/unslothai/unsloth/issues/8444)).
- **ROCm whisper update** — Paired ROCm runtime missing `hipblaslt` kernel catalog ([#8364](https://github.com/unslothai/unsloth/issues/8364), closed).
- **Studio can't use models it launched itself** — Local model loop failure; closed ([#8365](https://github.com/unslothai/unsloth/issues/8365)).
- **Silent `lr_warmup_steps` no-op** — Constant scheduler ignores warmup despite `FAMILY_TRAIN_DEFAULTS` recommending 20 steps for flux.1/qwen-image/flux.2; fix in [#8464](https://github.com/unslothai/unsloth/pull/8464) (fixes [#8269](https://github.com/unslothai/unsloth/issues/8269)).
- **"Run at login" fails on Windows 11** — Icon appears but no server starts ([#8510](https://github.com/unslothai/unsloth/issues/8510), open).
- **Silent API failure** — Querying a nonexistent model returns no error or confirmation; closed ([#8376](https://github.com/unslothai/unsloth/issues/8376)).
- **Stale venv / torch CPU mismatch** — Installer repeatedly fails with "Access to python.exe denied" ([#4848](https://github.com/unslothai/unsloth/issues/4848), closed).
- **Model-folder misclassification** — Moved/mixed model folders resolved by directory order rather than checkpoint content; fix in [#8475](https://github.com/unslothai/unsloth/pull/8475).

## 6. What This Means for Application Developers
- **Validate fine-tune exports before shipping**: the `TokenizersBackend` export bug ([#8444](https://github.com/unslothai/unsloth/issues/8444)) will break any downstream `AutoTokenizer` load — add an export-then-load check to your pipeline.
- **Studio is maturing as a local serving layer**: linear-time tool parsing ([#8428](https://github.com/unslothai/unsloth/pull/8428), [#8494](https://github.com/unslothai/unsloth/pull/8494)) matters for long streaming agent traces; Auto mode now degrades gracefully on VRAM-constrained GPUs by dropping the drafter instead of OOMing ([#8435](https://github.com/unslothai/unsloth/pull/8435)); VRAM monitoring is more trustworthy on multi-GPU ROCm hosts ([#8481](https://github.com/unslothai/unsloth/pull/8481)).
- **Don't trust the installer's "success" on Windows/AMD yet**: verify ROCm torch and GPU visibility after install ([#7275](https://github.com/unslothai/unsloth/issues/7275), [#8473](https://github.com/unslothai/unsloth/issues/8473)). Pin versions and script a post-install `torch.cuda.is_available()` / HSA probe.
- **Model support lags GGUF availability**: Muse-Glimmer and MiniMax M3/H3 are downloadable but not loadable by the bundled runtimes — check bundled llama.cpp/stable-diffusion.cpp versions before building on those architectures in Desktop/Studio.
- **OpenAI-compatible consumers**: custom providers cap max output at 32K tokens even for known model families ([#8509](https://github.com/unslothai/unsloth/issues/8509)), and unknown-model requests used to fail silently — confirm the fix is in your pinned Studio version before relying on error paths ([#8376](https://github.com/unslothai/unsloth/issues/8376)).
- **CI expansion to real T4s** ([#8440](https://github.com/unslothai/unsloth/pull/8440), [#8489](https://github.com/unslothai/unsloth/pull/8489)) should reduce Turing/Blackwell generation-specific regressions going forward; worth tracking if you serve on older NVIDIA hardware.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*