# AI Infrastructure Digest 2026-08-18

> Generated: 2026-08-17 23:11 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# Cross-Project AI Infrastructure Comparison — 2026-08-18

## 1. Ecosystem Overview

The inference ecosystem is absorbing a second wave of architectural complexity from DeepSeek-V4, Kimi-K3, and Qwen 3.5/3.6 hybrids — sparse attention, MoE MLA variants, and speculative decoding (DSPARK/MTP/EAGLE) are now the dominant sources of both performance wins and stability failures. No project shipped a tagged release in the last 24 hours except llama.cpp (b10472), suggesting a collective hardening phase rather than feature acceleration. Hardware fragmentation is acute: ROCm/gfx950, Intel XPU/SYCL, Blackwell SM120/121, and MLX all received targeted enablement work, but every platform change is surfacing correctness regressions. Most tellingly, the top-severity items across projects are no longer raw throughput but silent corruption, nondeterminism, token-budget leaks, and memory creep — the failure modes that matter most to production agent workloads.

## 2. Activity Comparison

Counts reflect items explicitly referenced in the 2026-08-18 digests, not full GitHub totals.

| Project | Notable Issues | Notable PRs/Fixes | Releases (24h) | Primary Layer |
|---|---|---|---|---|
| vLLM | ~16 | ~8 | None | Production serving engine |
| SGLang | ~20 | ~13 | None | Production serving engine |
| llama.cpp | ~16 | ~16 | 4 (b10472, b10470, b10456, b10455) | Local/edge runtime + server |
| Ollama | ~17 | ~6 | None | End-user local runtime |
| LiteLLM | ~20 | ~10 | None | LLM gateway / proxy |
| Unsloth | ~18 | ~12 | None | Fine-tuning + Studio serving |

SGLang and LiteLLM carry the largest issue surface, but for different reasons: SGLang is absorbing bleeding-edge model architectures, while LiteLLM's issues are concentrated in enterprise reliability (budgets, secrets, memory). llama.cpp is the only project with active release velocity.

## 3. Model Support Race

- **DeepSeek V4**: SGLang is farthest along but paying for it — DSV4-Flash is supported, yet DSPARK speculative decoding is called "unsafe" ([#34959](https://github.com/sgl-project/sglang/issues/34959)), sparse-attention indexer faults, and multiple hangs cluster around hierarchical cache + chunked prefill. llama.cpp added `-sm tensor` support with mirrored FA for the single-K-head architecture. vLLM is still working through ROCm enablement.
- **Kimi-K3**: SGLang shipped 12-head MLA fp8 Gluon decode on AMD gfx950 ([#34647](https://github.com/sgl-project/sglang/pull/34647)) — the only merged support this cycle. vLLM tracks it only as a ROCm roadmap item ([#50682](https://github.com/vllm-project/vllm/issues/50682)) and fails on MI308X (`mla_gluon requires gfx950`).
- **Gemma 4**: Ollama added MLX preflight for `gemma4` MLX store exports; vLLM's Docker image **cannot start Gemma4** at all ([#51744](https://github.com/vllm-project/vllm/issues/51744)).
- **Intel XPU**: SGLang is the leader — shipped encoder-embedding models and InternVL3_5-30B-A3B on XPU. llama.cpp continues SYCL kernel work (TILE quantized KV decode). Unsloth is blocked on `torch.xpu.memory.mem_get_info()`.
- **Qwen 3.5/3.6/3.8**: Universal regression cluster. vLLM has CUDA illegal-memory-access crashes in the GDN kernel and MTP crashes; Ollama has retry hangs, defunct pulls, and empty outputs; llama.cpp reports 4-bit KV cache prefill collapse.

**Verdict**: SGLang leads on shipping new-model support, llama.cpp leads on hardware/backend breadth, and vLLM is comparatively conservative but has the largest production-install base absorbing the fallout.

## 4. Performance Frontier

- **KV cache**: The convergence point. vLLM opened a growable/extensible KV cache PR ([#50779](https://github.com/vllm-project/vllm/pull/50779)); SGLang is consolidating three divergent radix-cache implementations into a unified hybrid design ([#20415](https://github.com/sgl-project/sglang/issues/20415)); llama.cpp is fighting a q4 KV-cache prefill collapse; Ollama and Unsloth both report prompt/KV state loss on MLX and GGUF reload paths respectively.
- **Speculative decoding**: All engines are iterating — SGLang stages EAGLE draft-extend graph inputs for better overlap; llama.cpp proposes adaptive MTP draft depth; vLLM remains blocked on host/GPU syncs for fully async spec decode. Regression risk is high across the board (llama.cpp MTP perf drop since b9935, SGLang DSPARK safety).
- **Quantization**: vLLM is evaluating PTX 9.4 `ldmatrix.s8.s4` for W4A8-INT8; SGLang shipped fp8 MLA decode on gfx950; llama.cpp improved q4_0→f32 on SYCL. W4A8/FP8/NVFP4 paths remain a top crash source (Gemma4 NVFP4, GLM-5.2 NVFP4).
- **Distributed serving**: The weakest frontier. vLLM has a permanent 4-node GB10 idle stall (`shm_broadcast` starvation); SGLang found symmetric-memory CUDA-graph corruption and an unfixed NIXL/UCX prefill segfault on B200; llama.cpp is patching RPC foreign-buffer serialization and tensor-split asserts.
- **Kernels**: Momentum is on fused/MLA-specific kernels — SGLang's Helion KDA fixes, KDA input-projection fusion, and 12-head gfx950 decode; llama.cpp's SYCL TILE kernel (+42–169% decode on Qwen3.6-35B/Gemma 4); vLLM's Mamba-2 Triton and GDN kernel crashes show the cost of kernel proliferation.

## 5. Layer Positioning

| Layer | Projects | Maturity Signal |
|---|---|---|
| **Production serving engines** (multi-node, PD-disaggregated, tensor-parallel) | vLLM, SGLang | Feature-rich but stress-testing at the distributed edge; both have open multi-node hangs/crashes |
| **Local/edge runtime + dev server** | llama.cpp, Ollama | llama.cpp = developer/backend breadth (SYCL, OpenCL, ROCm, RPC); Ollama = end-user polish with MLX focus |
| **Gateway / control plane** | LiteLLM | Enterprise features (budgets, routing, auth) but reliability gaps in exactly those paths |
| **Training/fine-tuning+serving** | Unsloth | Positioned as the agentic fine-tuning loop, increasingly bundling its own Studio server and GGUF tooling |

The lines are blurring: llama.cpp added an Electron desktop app, Unsloth ships a full Studio server inside its pip wheel, and Ollama now routes cloud models. The functional separations that matter are deployment topology (single-node vs multi-node), model-format reach (GGUF vs safetensors), and whether the project owns the serving path or fronts providers.

## 6. Trend Signals

1. **Speculative decoding is the new reliability frontier — and it's not safe yet.** SGLang's DSPARK is described as "unsafe" on DSV4-Flash; vLLM's MTP crashes on long sequences; llama.cpp's MTP regressed since b9935. Agent developers should treat spec decode as an optimization to validate, not a default.
2. **Silent corruption outranks crashes.** The scariest items this cycle are quiet: SGLang DSPARK identifier corruption, vLLM prefix-cache nondeterminism at temperature=0, SGLang symmetric-memory NCCL corruption, Ollama duplicate-image collapse, LiteLLM budget bypasses. Monitoring must include output-consistency checks, not just latency/error rates.
3. **Agentic workloads are exposing a new failure class: token-budget leaks.** Ollama's `deepseek-v4-flash:cloud` loop burned ~31M tokens through 193 identical tool calls. Long-session context handling is failing everywhere: HiCache returning 0 cached tokens, MLX re-prefixing every agent step, Unsloth losing prompt state after reload.
4. **Multi-node and PD-disaggregated serving is not production-ready.** Three independent projects (vLLM, SGLang, llama.cpp) have open multi-node/RPC crashes. If you are on 2+ nodes or prefill/decode split, pin versions and build keepalive/health-check logic.
5. **Hardware-specific enablement is outpacing upstream hardening.** AMD gfx950, Intel XPU, Blackwell SM120/121, and MLX each shipped meaningful enablement this cycle — but every single one has an adjacent crash or startup failure. Validate on target silicon before committing.
6. **Gateway and budget controls are the least trusted layer.** LiteLLM's open budget-bypass and `/health` credential-leak issues suggest that as agent spend scales, enterprises will move budget enforcement back into the application layer until gateway hardening catches up.

**Bottom line for technical decision-makers**: pin known-good versions, disable speculative decoding for correctness-sensitive workloads, instrument cached-token and token-spend metrics, and treat any multi-node or new-hardware rollout as a pre-production pilot — the ecosystem is shipping features faster than it can stabilize them.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest — 2026-08-18

## Today’s Highlights
The active threads this cycle are dominated by GPU/hardware-specific stability issues for newer Qwen, Gemma, and DeepSeek variants, plus ongoing architectural work on the Rust frontend parity roadmap and an extensible KV cache. On the performance side, several kernel and memory-allocation optimizations are in flight for quantized W4A8 paths, tensor-parallel sampling, and speculative decoding.

## Releases & Breaking Changes
No new releases or breaking changes landed in the last 24 hours.

## New Model & Hardware Support
- Kimi-K3 on ROCm is now tracked as an explicit upstream enablement/performance roadmap, including AITER fused-MoE a16w4/a8w4 baseline integration: [#50682](https://github.com/vllm-project/vllm/issues/50682)
- DeepSeek V4 ROCm work is continuing with a PR to enable fused AR draft metadata updates: [#52628](https://github.com/vllm-project/vllm/pull/52628)
- CUDA 13.4 prerelease image pipeline for Rubin (`sm_107`) is being added: [#52379](https://github.com/vllm-project/vllm/pull/52379)
- W4A8-INT8 quantization paths may adopt PTX 9.4 `ldmatrix.s8.s4` for hardware INT4→INT8 expanding loads: [#49529](https://github.com/vllm-project/vllm/issues/49529)
- No fully merged new model/backend support landed in this window, but new-model issues surfaced for Gemma4 NVFP4 startup: [#51744](https://github.com/vllm-project/vllm/issues/51744), Qwen3.6-27B-FP8 MTP crash: [#40756](https://github.com/vllm-project/vllm/issues/40756), and Qwen Gated DeltaNet hybrid Mamba cache startup failure: [#49064](https://github.com/vllm-project/vllm/issues/49064)

## Performance & Optimization
- Extensible/growable KV cache PR is open as an opt-in design, stacked on [#51718](https://github.com/vllm-project/vllm/pull/51718): [#50779](https://github.com/vllm-project/vllm/pull/50779)
- Model Runner V2 batch-sharded sampling reduces per-step logits/sampler memory by a factor of `1/P` during tensor parallelism: [#50465](https://github.com/vllm-project/vllm/pull/50465)
- PTX 9.4 `ldmatrix.s8.s4` adoption is proposed to improve W4A8-INT8 kernel efficiency: [#49529](https://github.com/vllm-project/vllm/issues/49529)
- Fully async speculative decoding remains blocked by host/GPU syncs; making `seq_lens_cpu` optional is the next step: [#29134](https://github.com/vllm-project/vllm/issues/29134)
- ModelOpt Llama-4 checkpoints can take 5+ minutes to load due to a state-dict loading hack; refactor tracked: [#31624](https://github.com/vllm-project/vllm/issues/31624)
- A performance task is open to measure Transformers backend startup time vs native vLLM: [#50128](https://github.com/vllm-project/vllm/issues/50128)

## Stability & Regressions
Ranked by severity:

- **Permanent engine stall after ~1 minute idle on 4-node TP=4 GB10/aarch64** — `shm_broadcast` writer starves and requests never reach the scheduler: [#51921](https://github.com/vllm-project/vllm/issues/51921)
- **vLLM 0.27.0 Docker image fails to start Gemma4** with Transformers 5.15.0 — high user impact: [#51744](https://github.com/vllm-project/vllm/issues/51744)
- **MTP speculative decoding crashes with illegal memory access on long sequences** for Qwen3.6-27B-FP8: [#40756](https://github.com/vllm-project/vllm/issues/40756)
- **Qwen3.5 CUDA illegal memory access in GDN kernel** on H200: [#34948](https://github.com/vllm-project/vllm/issues/34948)
- **Draft-model speculative decoding crashes at init under TP>1** when draft `hidden_size` exceeds target; WIP diagnostic patch exists: [#52023](https://github.com/vllm-project/vllm/issues/52023), [#52193](https://github.com/vllm-project/vllm/pull/52193)
- **NIXL disaggregation fails for Qwen3.5 hybrid model** when prefill TP4 and decode DP8 use different physical block sizes: [#42895](https://github.com/vllm-project/vllm/issues/42895)
- **Kimi-K2.7-Coder fails on AMD MI308X** — `mla_gluon requires gfx950, got gfx942`: [#51964](https://github.com/vllm-project/vllm/issues/51964)
- **Mamba-2 Triton kernels crash with illegal instruction on SM121** unless `CUDA_LAUNCH_BLOCKING=1`: [#37431](https://github.com/vllm-project/vllm/issues/37431)
- **Prefix-caching nondeterminism** — first request differs from subsequent identical requests at `temperature=0`: [#40896](https://github.com/vllm-project/vllm/issues/40896)
- **DeepSeek V4 parser**: replies without `</think>` route the whole answer to `reasoning_content`: [#48645](https://github.com/vllm-project/vllm/issues/48645)
- Fixes in flight: lm-format-enforcer tokenizer shim restoration [#52661](https://github.com/vllm-project/vllm/pull/52661) and DeepEP-V2 decode/cudagraph crash [#52632](https://github.com/vllm-project/vllm/pull/52632)

## What This Means for Application Developers
- Avoid rolling v0.27.0+ onto workloads serving Gemma4 or long Qwen3.5/3.6 sequences; pin to known-good images or monitor the fix PRs.
- Multi-node deployments should add keepalive/health-check logic, since idle engines can permanently stall on some GB10/ARM topologies: [#51921](https://github.com/vllm-project/vllm/issues/51921)
- If exact reproducibility is required, be cautious with prefix caching at `temperature=0`: [#40896](https://github.com/vllm-project/vllm/issues/40896)
- The Rust frontend parity roadmap [#44280](https://github.com/vllm-project/vllm/issues/44280) and growable KV cache [#50779](https://github.com/vllm-project/vllm/pull/50779) signal upcoming config/API changes worth tracking.
- ROCm/Kimi-K3 [#50682](https://github.com/vllm-project/vllm/issues/50682) and CUDA 13.4/Rubin [#52379](https://github.com/vllm-project/vllm/pull/52379) support is still maturing — validate on target hardware before production use.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest — 2026-08-18

## 1. Today's Highlights

This cycle is dominated by a second wave of DeepSeek-V4 stability reports — including **silent identifier corruption in DSPARK speculative decoding** ([#34959](https://github.com/sgl-project/sglang/issues/34959)) and a resurfaced **NIXL/UCX prefill segfault on B200** ([#35189](https://github.com/sgl-project/sglang/issues/35189)) — while maintainers push a broad config-bag refactor series ([#35022–#35029](https://github.com/sgl-project/sglang/pull/35029)) that fixes runtime staleness after adaptive speculative-decoding overrides. On the hardware front, Intel XPU gains encoder-embedding and InternVL support ([#35213](https://github.com/sgl-project/sglang/pull/35213), [#35212](https://github.com/sgl-project/sglang/pull/35212)), and AMD gfx950 gets 12-head MLA fp8 decode for Kimi-K3 ([#34647](https://github.com/sgl-project/sglang/pull/34647)). No releases were cut in the last 24h.

## 2. Releases & Breaking Changes

No new releases in the last 24h. Two deprecation PRs were closed (likely merged) and are worth tracking as breaking changes:

- **[PR #34983 — Deprecate Prefill CP V1](https://github.com/sgl-project/sglang/pull/34983)** — Prefill context parallelism v1 is removed; CP V2 becomes the only path, simplifying server-arg compatibility and attention-backend/DSA legacy paths.
- **[PR #34926 — Clean deprecated DeepSeek-V4 environment variables](https://github.com/sgl-project/sglang/pull/34926)** — Old DSV4 env vars removed.

## 3. New Model & Hardware Support

- **[PR #35213 — Encoder embedding models on Intel XPU](https://github.com/sgl-project/sglang/pull/35213)** — Adds `BAAI/bge-base-en-v1.5`, `nomic-ai/nomic-embed-text-v1.5`, and `ibm-granite/granite-embedding-english-r2` on XPU (previous bge path returned wrong embeddings).
- **[PR #35212 — InternVL3_5 MoE on Intel XPU](https://github.com/sgl-project/sglang/pull/35212)** — Fixes concurrent multimodal serving for `OpenGVLab/InternVL3_5-30B-A3B`; the MoE expert mapping crashed on missing `num_experts` in `InternVLChatConfig`.
- **[PR #34647 — 12-head MLA fp8 Gluon decode on AMD gfx950](https://github.com/sgl-project/sglang/pull/34647)** — Enables batched `bh16bn128` decode for Kimi-K3 TP8 (12 local heads) on ROCm; requires [ROCm/aiter#4480](https://github.com/ROCm/aiter/pull/4480) (merged) in the container image.
- **[PR #35104 — SM12x DSv4 MLA prefill path](https://github.com/sgl-project/sglang/pull/35104)** — Removes the 64-head TP padding waste on Blackwell (see Performance).

## 4. Performance & Optimization

- **[PR #35104 — Drop the 64-head TP pad on DSv4 MLA prefill](https://github.com/sgl-project/sglang/pull/35104)** — With `attn_tp_size=2`, MLA built a 64-row query tensor, wrote 32 rows, ran attention on all 64, then discarded half. Eliminates ~2× wasted prefill attention compute on SM12x.
- **[PR #35176 — Fuse Kimi-K3 KDA input projection into a single GEMM on ROCm](https://github.com/sgl-project/sglang/pull/35176)** — Kernel fusion for the KDA input projection on AMD.
- **[PR #35126 — Stage EAGLE draft-extend graph inputs before verify launch](https://github.com/sgl-project/sglang/pull/35126)** — Splits draft-extend CUDA-graph staging into a pre-verify half (pad fills, static input copies, host mirrors) and a post-verify half; no behavior change, but enables better graph capture overlap for speculative decoding.
- **[PR #24911 — Profiling enhancements: detailed execution step annotations](https://github.com/sgl-project/sglang/pull/24911)** — Part 2/3 of the profiling series; adds fine-grained per-step annotations for execution analysis.
- **[PR #35197 — Fix Helion small-token prefill bug](https://github.com/sgl-project/sglang/pull/35197)** — Fixes shape handling for short-prefill Q/K/V in the Helion KDA backend and rejects non-power-of-2 head dims in decode; unlocks the fast path for small batches.
- **[PR #34230 — Fix symmetric memory allocation during CUDA graph capture](https://github.com/sgl-project/sglang/pull/34230)** — With symmetric memory + speculative decoding + TP > 1, collective buffers could be captured at different NCCL registration windows across ranks, violating `NCCL_WIN_COLL_SYMMETRIC` and silently corrupting outputs.
- **[Issue #20415 — Unified Hybrid Radix Cache refactor roadmap](https://github.com/sgl-project/sglang/issues/20415)** — Consolidating diverged radix-cache implementations (RadixCache, MambaRadixCache, SWARadixCache); design blog published on [LMSYS](https://www.lmsys.org/blog/2026-08-11-unified-radix-cache/) 2026-08-11. 9 👍.
- **[Issue #13363 — SGLang auto tuner roadmap](https://github.com/sgl-project/sglang/issues/13363)** — Kernel-backend selection and config auto-tuning (MoE, attention, allreduce); 19 👍.
- **[Issue #34298 — Prefill FLOPs estimate fix (closed)](https://github.com/sgl-project/sglang/issues/34298)** — `SchedulerMetricsReporter._estimate_prefill_perf()` ignored `prefix_lens`, so reported prefill TFLOPS degenerated to 1/latency across chunked-prefill chunks.
- **CI health ([#17050](https://github.com/sgl-project/sglang/issues/17050))**: 3 broken, 11 flaky, 672 recently fixed as of the last auto-update.

## 5. Stability & Regressions

Ranked by severity — new reports from the last 24h unless noted:

**Silent correctness / data corruption**
- **[#34959 — DSPARK silently corrupts identifiers on DeepSeek-V4-Flash](https://github.com/sgl-project/sglang/issues/34959)** — Speculative decoding is described as "unsafe"; no fix PR yet. *Highest priority for anyone running DSV4-Flash with DSPARK.*
- **[#34718 — DSv4 sparse attention indexer illegal memory access](https://github.com/sgl-project/sglang/issues/34718)** — `fp8_paged_mqa_logits` faults on long-context requests; no linked fix.
- **[#35189 — NIXL/UCX prefill segfault is *not* fixed](https://github.com/sgl-project/sglang/issues/35189)** — `nixlUcxSharedThread → cuEventQuery` reproduces on v0.5.17 / CUDA 13.0 / B200. #23489 and #23499 were closed without a root cause.

**Hangs & crashes**
- **[#33549 — DSv4 + DSPARK decode hang at ~245K context](https://github.com/sgl-project/sglang/issues/33549)** — 8×H20, TP=8: all GPUs spin at 100% util / low power; watchdog kills the server.
- **[#34235 — Scheduler hang in DSV4 sparse prefill](https://github.com/sgl-project/sglang/issues/34235)** — v0.5.17 + hierarchical cache + 16K chunked prefill on H20/FP8; watchdog abort.
- **[#34920 — Kimi K3 decode crash: DSPARK + DCP](https://github.com/sgl-project/sglang/issues/34920)** — Deterministic `TypeError: cumsum(): argument 'input' (position 1) must be Tensor, not None` with PD disaggregation + `--dcp-size 8` + DSPARK target verify.
- **[#33985 — DSpark cannot start on SM120](https://github.com/sgl-project/sglang/issues/33985)** — RTX PRO 6000: decode-dsv4 lacks a `topk=192` instantiation, so verify falls through to the prefill kernel's `num_tokens > 64` assert during CUDA graph capture.
- **[#35144 — EAGLE/NEXTN TP=2 warmup hang on Intel XPU](https://github.com/sgl-project/sglang/issues/35144)** — Regression from #34238 moving the verify-decision TP broadcast out of the sampling branch.

**Functional regressions**
- **[#35129 — HiCache gets 0 cached tokens on long agentic sessions](https://github.com/sgl-project/sglang/issues/35129)** — DSV4-Flash-0731 + dsv4 + DSPARK + HiCache on 8×H20: long sessions see `#cached-token: 0` despite stable 50%+ prefix overlap, while short requests hit ~98%.
- **[#33385 — DeepSeekV4TokenToKVPool missing `get_cpu_copy()`](https://github.com/sgl-project/sglang/issues/33385)** — Decode-mode retract crashes with `NotImplementedError`; offload is unconditional rather than gated on `--disaggregation-decode-enable-offload-kvcache`.
- **[#28157 — Prometheus /metrics scrape starves prefill health checks](https://github.com/sgl-project/sglang/issues/28157)** — `/metrics` collection can block prefill bootstrap in PD deployments.
- **[#35148 — Qwen3.8-27B-FP8 reasoning content not parsed in Rust sgl-model-gateway](https://github.com/sgl-project/sglang/issues/35148)** — Gateway-side parsing bug.
- **[#29562 — GLM-5.2-NVFP4 error on RTX PRO 6000](https://github.com/sgl-project/sglang/issues/29562)** — NVFP4 path still failing on Blackwell pro6000 (15 comments).

**Closed / resolved this cycle**
- **[#34941 — DSA sparse-MLA silent no-attention for extend > 65535 tokens](https://github.com/sgl-project/sglang/issues/34941)** — Closed; `gridDim.z` overflow on the non-DP path.
- **[#28180 — repetition_penalty infinite loop (DFlash)](https://github.com/sgl-project/sglang/issues/28180)** — Closed inactive; penalty was never applied (missing `BatchedRepetitionPenalizer`).
- **[#25811 — Router circuit breaker treated 4xx as worker failure](https://github.com/sgl-project/sglang/issues/25811)** — Closed inactive.
- **[#26796 — MambaRadixCache O(N) sanity check on idle tick](https://github.com/sgl-project/sglang/issues/26796)** — Closed inactive.

**Fix PRs in flight**
- **[#34230 — CUDA-graph symmetric-memory fix](https://github.com/sgl-project/sglang/pull/34230)**, **[#35197 — Helion small-token prefill](https://github.com/sgl-project/sglang/pull/35197)**, **[#33743 — flashinfer TRT-LLM BF16 expert reload on refit](https://github.com/sgl-project/sglang/pull/33743)**, **[#35202 — graceful shutdown drain surviving group-delivered stop signals](https://github.com/sgl-project/sglang/pull/35202)**, **[#35104 — SM12x DSv4 MLA fix](https://github.com/sgl-project/sglang/pull/35104)**.

## 6. What This Means for Application Developers

- **Be cautious with DeepSeek-V4-Flash + DSPARK.** [#34959](https://github.com/sgl-project/sglang/issues/34959) reports silent identifier corruption and calls speculative decoding "unsafe"; until a fix lands, validate outputs against non-speculative runs for anything correctness-sensitive. The SM120 variant ([#33985](https://github.com/sgl-project/sglang/issues/33985)) cannot start at all on RTX PRO 6000.
- **Monitor cached-token metrics for long agentic sessions.** The HiCache/DSV4 combination ([#35129](https://github.com/sgl-project/sglang/issues/35129)) can silently drop prefix reuse on long-running sessions while short requests still hit ~98%. If you deploy long-context agents, alert on `#cached-token: 0` and consider pinning configs that work for your session-length distribution.
- **The config-bag refactor (#35022–#35029) fixes a real staleness bug.** Per [#35024](https://github.com/sgl-project/sglang/pull/35024), adaptive speculative decoding updates the runtime config, but six buffer-sizing paths still read the startup `ServerArgs` record — meaning spec-decode buffer allocations could be sized wrong after a runtime override. This lands as a consistency fix; no immediate action, but expect config semantics to tighten around publishing/readback boundaries.
- **PD + DCP + DSPARK stacks are currently fragile.** Kimi K3 ([#34920](https://github.com/sgl-project/sglang/issues/34920)) crashes deterministically with this combination, and DSV4 decode hangs ([#33549](https://github.com/sgl-project/sglang/issues/33549), [#34235](https://github.com/sgl-project/sglang/issues/34235)) cluster around hierarchical cache + chunked prefill. Pin known-good versions and stage upgrades carefully if you use these features together.
- **NIXL/UCX users on B200/CUDA 13 should track [#35189](https://github.com/sgl-project/sglang/issues/35189).** The issue argues prior closures were not root-caused; if you hit the prefill segfault, add your repro to keep pressure on a real fix.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp Digest — 2026-08-18

## Today's Highlights
Release **b10472** closed the long-running AMD APU UMA memory-detection regression by skipping the `MemAvailable`-based override on HIP builds ([#18159](https://github.com/ggml-org/llama.cpp/issues/18159)). On the feature side, a new PR proposes **adaptive MTP draft depth** via `--spec-type draft-mtp-adaptive`, while another adds a first-class **Electron desktop app** wrapping `llama-server`. Several memory-safety fixes also landed in ggml-cpu and mtmd (expert-id bounds, im2col stride widening, optional-tensor null checks).

## Releases & Breaking Changes
- **b10472** — CUDA/HIP: skip UMA override for HIP builds ([#27083](https://github.com/ggml-org/llama.cpp/pull/27083)). AMD APUs now report accurate memory via `hipMemGetInfo`; fixes UMA detection limiting memory on small-carveout APU systems. No config migration needed, but APU users should re-verify memory sizing.
- **b10470** — CI: release tags are now created and pushed explicitly in `release.yml` ([#27261](https://github.com/ggml-org/llama.cpp/pull/27261)).
- **b10456** — SYCL: quantized cpy kernel launches now size thread/block counts proportionally to the quant, improving the q4_0→f32 path (Arc 70 throughput reported at 20.21 GB/s) ([#27160](https://github.com/ggml-org/llama.cpp/pull/27160)).
- **b10455** — SYCL: added `OPT_STEP_ADAMW` / `OPT_STEP_SGD` op support ([#25268](https://github.com/ggml-org/llama.cpp/pull/25268)).

## New Model & Hardware Support
- **Granite SWA/MoE-SWA**: conversion support for `GraniteSWAForCausalLM` / `GraniteMoeSWAForCausalLM` with interleaved sliding-window attention + attention sinks ([#25505](https://github.com/ggml-org/llama.cpp/pull/25505)).
- **dots3-note**: new model support requiring DSA + SWA extensions to `llama-kv-cache-dsa` ([#27060](https://github.com/ggml-org/llama.cpp/pull/27060)).
- **DeepSeek 4**: `-sm tensor` support with mirrored FA for the single-K-head architecture plus `memset_tensor` in the meta backend ([#26490](https://github.com/ggml-org/llama.cpp/pull/26490)).
- **ROCm 7.14.0**: Docker builds moved to Ubuntu 26.04 base with expanded GPU support list and a no-usable-GPU workaround ([#27145](https://github.com/ggml-org/llama.cpp/pull/27145)).
- **OpenCL**: new Adreno xmem SDPA path for non-causal diffusion attention, fixing silent buffer corruption on very large attention shapes ([#26331](https://github.com/ggml-org/llama.cpp/pull/26331)).
- **Desktop app**: Electron-based wrapper around llama-server targeting non-technical users ([#27287](https://github.com/ggml-org/llama.cpp/pull/27287)).
- Backend op coverage remains the top open enhancement request (51 comments) ([#14909](https://github.com/ggml-org/llama.cpp/issues/14909)).

## Performance & Optimization
- **SYCL TILE kernel for quantized KV decode** is gated in: measured +42% to +169% decode on Qwen3.6-35B, Gemma 4 26B, and Gemma 4 12B at 32K/118K context on Battlemage, zero regressions ([#26689](https://github.com/ggml-org/llama.cpp/pull/26689)).
- **Adaptive MTP draft depth**: `--spec-type draft-mtp-adaptive` uses a counting state machine with climb counter and weighted drop-pressure accumulator; suggested `--spec-draft-n-max 12` ([#27210](https://github.com/ggml-org/llama.cpp/pull/27210)). A complementary rolling-window heuristic is also open ([#25726](https://github.com/ggml-org/llama.cpp/pull/25726)).
- **Regression watch**: MTP performance has dropped since b9935 ([#25489](https://github.com/ggml-org/llama.cpp/issues/25489)); SYCL MTP on Intel Arc B70 reports correct output but no speed gain ([#23533](https://github.com/ggml-org/llama.cpp/issues/23533)); 4-bit KV cache (q4_1/q4_0) collapses prefill to ~34 t/s on Qwen3.5 hybrid models with RTX 3090 ([#27109](https://github.com/ggml-org/llama.cpp/issues/27109)).

## Stability & Regressions
Active crash/correctness issues, by severity:
- **CUDA kernel stall** killed by watchdog on RTX Pro 6000 Blackwell MAX-Q with Qwen3.8-27B Q8 — help wanted ([#27102](https://github.com/ggml-org/llama.cpp/issues/27102)).
- **SIGSEGV in GPU offload** — `resolve_fused_ops` false positives on Intel Lunar Lake iGPU (Arc 140V), reproduces on gemma4/qwen2 and across multiple builds ([#27046](https://github.com/ggml-org/llama.cpp/issues/27046)).
- **MTP hard crash** — `cublasSgemm INVALID_VALUE` with `--spec-type draft-mtp` under KV-cache saturation ([#26558](https://github.com/ggml-org/llama.cpp/issues/26558)).
- **Tensor-split asserts** — `GGML_ASSERT(ret.axis != GGML_BACKEND_SPLIT_AXIS_UNKNOWN)` on 4×Tesla T10 with Glimmer Q8_0 ([#26902](https://github.com/ggml-org/llama.cpp/issues/26902)) and on 2×RTX 5060 Ti with `--split-mode tensor` + `iq4_nl` KV cache ([#27116](https://github.com/ggml-org/llama.cpp/issues/27116)).
- **ROCm RPC crash** in `GGML_OP_TOP_K` on gfx1151 during DeepSeek V4 prefill past 4096 tokens ([#26746](https://github.com/ggml-org/llama.cpp/issues/26746)).
- **Multi-node RPC**: GLM-5.2 crashes with invalid data ptr / graph compute failures ([#26583](https://github.com/ggml-org/llama.cpp/issues/26583)); a fix avoiding serialization of foreign-server buffers is in review ([#26500](https://github.com/ggml-org/llama.cpp/pull/26500)).
- **Windows ROCm release missing `hipblas.dll`** — GPU not detected, `--list-devices` empty ([#26996](https://github.com/ggml-org/llama.cpp/issues/26996)).
- **`/v1/completions` logprobs bug** — prompt/echo logprobs silently missing, breaking lm-eval-style loglikelihood evals ([#27174](https://github.com/ggml-org/llama.cpp/issues/27174)).
- **Server slowdown over time** on Vulkan/7900XTX requiring reboots ([#22360](https://github.com/ggml-org/llama.cpp/issues/22360)); **SYCL host-pinned memory** high CPU utilization on large allocations ([#27038](https://github.com/ggml-org/llama.cpp/issues/27038)).

Landed fixes and hardening:
- `ggml-cpu`: validate expert id in `mul_mat_id` to prevent heap OOB write from out-of-range expert indices ([#27286](https://github.com/ggml-org/llama.cpp/pull/27286)).
- `ggml`: widen im2col backward offset stride to `int64_t` (CWE-680/787) ([#27284](https://github.com/ggml-org/llama.cpp/pull/27284)).
- `mtmd`: check optional tensors before dereference in vision graph builders, fixing NULL-page SIGSEGV on crafted mmproj GGUFs ([#27285](https://github.com/ggml-org/llama.cpp/pull/27285)).
- `vocab`: integer tokenizer scores now stored/loaded as INT32 arrays ([#27260](https://github.com/ggml-org/llama.cpp/pull/27260)).
- Server checkpoint handling for hybrid/recurrent models is in progress ([#25592](https://github.com/ggml-org/llama.cpp/pull/25592)).

## What This Means for Application Developers
- **Speculative decoding is changing**: with adaptive MTP draft depth in review, expect dynamic `--spec-type draft-mtp-adaptive` to replace static draft lengths. If you run MTP in production today, track the b9935 regression ([#25489](https://github.com/ggml-org/llama.cpp/issues/25489)) before upgrading.
- **Server topology roadmap is active**: disaggregated prefill/decode ([#21266](https://github.com/ggml-org/llama.cpp/issues/21266)) and router-mode multi-presets for a single loaded model ([#23704](https://github.com/ggml-org/llama.cpp/issues/23704)) are the two changes most likely to affect multi-tenant and PD-disaggregated deployments.
- **Observability**: optional OTLP/HTTP tracing for the server is proposed ([#27280](https://github.com/ggml-org/llama.cpp/pull/27280)) — useful if you're standardizing on OpenTelemetry for model-serving metrics.
- **Evals caveat**: avoid `/v1/completions` with `echo: true` + `logprobs` for loglikelihood evaluation until [#27174](https://github.com/ggml-org/llama.cpp/issues/27174) is fixed; fall back to the native `/completion` endpoint or an HF-backed harness.
- **Multi-GPU/Multi-node RPC**: if you use tensor parallelism across RPC workers, the buffer-serialization fix ([#26500](https://github.com/ggml-org/llama.cpp/pull/26500)) addresses invalid-pointer crashes; hold off on `iq4_nl` KV caches with `--split-mode tensor` until the split-axis assert is resolved ([#27116](https://github.com/ggml-org/llama.cpp/issues/27116)).

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Digest — 2026-08-18

## Today's Highlights

No new tagged releases landed in the last 24h, but the tracker is dominated by regressions and reliability issues around `qwen3.8`, local API tokenization errors, and MLX vision/memory handling. The most critical item is a `deepseek-v4-flash:cloud` agentic loop that burned ~31M tokens through 193 identical tool calls; several fixes are in flight, including GGUF big-endian support, embedding truncation warnings, and cloud model metadata enrichment for `ollama launch`.

---

## Releases & Breaking Changes

None in the last 24h. No new versions, API changes, or migration notes.

---

## New Model & Hardware Support

- **Intel Integrated GPU request still open** — [Issue #3113](https://github.com/ollama/ollama/issues/3113) asks for Intel Iris Xe / integrated graphics support; 75 👍, 34 comments.
- **Local `deepseek-v4-flash:0731` request** — [Issue #17510](https://github.com/ollama/ollama/issues/17510): community request for a local version of `deepseek-v4-flash:0731`.
- **MLX: Ling-3.0 / Bailing MoE V3** — [PR #17643](https://github.com/ollama/ollama/pull/17643) adds MLX engine support for the architecture behind `Ling-3.0-tiny` and `Ling-3.0-flash`.
- **MLX vision preflight for Gemma 4 MLX store models** — [PR #17622](https://github.com/ollama/ollama/pull/17622) adds an `apple-silicon-mlx` preflight profile for the new `gemma4` MLX exports (`31b-mlx-bf16`, `26b-mlx-bf16`, `26b-mxfp8`).
- **Cloud model metadata for `launch`** — [PR #17828](https://github.com/ollama/ollama/pull/17828) fills missing metadata for cloud models without local manifests, including usage-billed/new cloud models like `kimi-k3:cloud`, so `pi` entries get `contextWindow`/`reasoning` values.

---

## Performance & Optimization

- **CPU spike regression in v0.32.14** — [Issue #17833](https://github.com/ollama/ollama/issues/17833): when a model fully fits in VRAM, Ollama v0.32.14 consumes 50–80% CPU; v0.32.13 does not. No fix PR yet.
- **MLX: no prompt/prefix caching between requests** — [Issue #17829](https://github.com/ollama/ollama/issues/17829): each agent step re-processes the entire 20–30K token prompt from scratch, increasing TTFT. Significant for agentic workloads on Apple silicon.
- **GGUF big-endian fix** — [PR #17826](https://github.com/ollama/ollama/pull/17826): corrects tensor byte-swapping for big-endian hosts (`s390x`), with tests.
- **Embedding truncation will be observable** — [PR #17799](https://github.com/ollama/ollama/pull/17799): adds a server warning when `/api/embed` silently truncates input; the `truncated` return value was previously discarded.
- **Duration label rounding fix** — [PR #17827](https://github.com/ollama/ollama/pull/17827): `humanDuration` now uses the same rounded hour value for the years label, fixing a boundary display bug.

---

## Stability & Regressions

Ranked by impact:

- **Critical: cloud model agentic loop** — [Issue #17617](https://github.com/ollama/ollama/issues/17617): `deepseek-v4-flash:cloud` leaks a literal `</think>` into assistant history, causing a self-sustaining tool-call loop: 193 identical calls, ~31M tokens consumed via the Anthropic-compat endpoint. Affects Claude Code-style agents.
- **`qwen3.8:27b` hangs forever after tool-call parse failure** — [Issue #17825](https://github.com/ollama/ollama/issues/17825): retrying the identical request after a 500 hangs until the runner is recycled.
- **MLX vision crash on high-res input** — [Issue #17804](https://github.com/ollama/ollama/issues/17804): a 24.5MP image causes the MLX runner to request ~125GB Metal buffer on a 48GB M5 Pro MacBook.
- **Local API returns “Invalid API Key”** — [Issue #17822](https://github.com/ollama/ollama/issues/17822): `/api/embed` and `/api/generate` fail with a 401 tokenize error on a clean local setup with no cloud credentials.
- **MLX Gemma 4 `think: false` regression** — [Issue #17823](https://github.com/ollama/ollama/issues/17823): v0.32.14 returns empty assistant content; identical request works on v0.32.5.
- **`qwen3.8` download defunct** — [Issue #17816](https://github.com/ollama/ollama/issues/17816): `ollama run qwen3.8` fails with `Error: EOF` while pulling the manifest.
- **Vision model collapses duplicate images** — [Issue #17814](https://github.com/ollama/ollama/issues/17814): two images with identical pixel dimensions are silently deduplicated; the surviving image is unpredictable.
- **Web search on `qwen3.8:27b` fails** — [Issue #17812](https://github.com/ollama/ollama/issues/17812): Desktop app search returns `500 Internal Server Error: no user query found in messages`.
- **`OLLAMA_HOST` binds IPv6, not IPv4** — [Issue #17831](https://github.com/ollama/ollama/issues/17831): setting `OLLAMA_HOST=0.0.0.0:8200` does not behave as expected on Ubuntu 26.04 / CUDA 13.2.
- **`CUDA_VISIBLE_DEVICES` mis-handling** — [Issue #17832](https://github.com/ollama/ollama/issues/17832): selectable device IDs not honored with three H200s.
- **Ollama restarts when internet drops** — [Issue #17821](https://github.com/ollama/ollama/issues/17821): session is lost on network instability.
- **`ollama launch claude` CLI failure** — [Issue #17811](https://github.com/ollama/ollama/issues/17811): after workspace trust, interactive sessions fail with “Input must be provided either through stdin or as a prompt argument”.
- **Windows serve/context bug** — [Issue #17815](https://github.com/ollama/ollama/issues/17815): reported serve does not auto-start and context cannot be changed; closed without details.

---

## What This Means for Application Developers

- **Pin/test versions before rolling out agent workloads.** `qwen3.8` currently has multiple regressions: retry hangs, pull failures, web-search errors, and image-collapsing behavior. Validate against a known-good version like `0.32.13` or `0.32.5` where appropriate.
- **Do not rely on `deepseek-v4-flash:cloud` through the Anthropic-compat endpoint yet.** Add loop detection, response monotonicity checks, or explicit `</think>` sanitization to protect token budgets.
- **MLX users should preflight vision input dimensions.** High-resolution images can trigger an enormous Metal buffer allocation and crash the runner; enforce pixel limits before sending to vision models.
- **`/api/embed` can silently truncate input.** Until [PR #17799](https://github.com/ollama/ollama/pull/17799) lands, set `truncate: false` and validate input length yourself if embedding correctness matters.
- **Agentic K/V caching on MLX is currently weak.** For multi-step agent sessions on Apple silicon, consider batching or reducing context length to avoid full re-prefill every step.
- **Big-endian support is improving.** If you run on `s390x`, track [PR #17826](https://github.com/ollama/ollama/pull/17826) for GGUF correctness fixes.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

## Today’s Highlights

No new LiteLLM release shipped in the past 24 hours. The most urgent open threads remain budget-enforcement bypasses ([#26672](https://github.com/BerriAI/litellm/issues/26672), [#34101](https://github.com/BerriAI/litellm/issues/34101)) and a memory-growth/OOM regression on proxy v1.82.x ([#25219](https://github.com/BerriAI/litellm/issues/25219)). Maintainers also moved several fixes around batch pricing/validation, Bedrock guardrail usage accounting, and a `/health` credential-leak bug.

## Releases & Breaking Changes

None. No releases or migration notes were published in the last 24 hours.

## New Model & Hardware Support

- [PR #37224](https://github.com/BerriAI/litellm/pull/37224): Adds `black_forest_labs/flux-3-video` for video generation, including text-to-video, image-to-video, continuation, keyframes, and audio.
- [PR #37229](https://github.com/BerriAI/litellm/pull/37229): Adds Amazon Comprehend Medical passthrough provider under `/comprehendmedical`, bringing clinical-text workloads into proxy auth, logging, and spend tracking.
- Open feature requests: Azure AI Foundry Agents v2 via Responses API with `agent_reference` ([#25372](https://github.com/BerriAI/litellm/issues/25372)) and adaptive similarity threshold for the `valkey-semantic` cache backend ([#36124](https://github.com/BerriAI/litellm/issues/36124)).
- Pricing table fixes proposed for `azure/gpt-audio-1.5-2026-02-23` ([#37169](https://github.com/BerriAI/litellm/issues/37169)) and `azure/gpt-audio-mini-2025-10-06` ([#37170](https://github.com/BerriAI/litellm/issues/37170)).

## Performance & Optimization

No major throughput, latency, or kernel-level optimization work landed in the last 24 hours. The only memory-related item in flight is a regression, not an optimization: continued memory growth and pod OOM kills after upgrading to `main-v1.82.0-stable` ([#25219](https://github.com/BerriAI/litellm/issues/25219)). Separately, [#36124](https://github.com/BerriAI/litellm/issues/36124) proposes an adaptive `similarity_threshold` for semantic cache to improve hit rates, but it is not yet implemented.

## Stability & Regressions

Ranked by severity:

1. **Budget enforcement bypasses**
   - [Issue #26672](https://github.com/BerriAI/litellm/issues/26672): v1.82.3 ignores key/user `max_budget` even when spend exceeds the limit.
   - [Issue #34101](https://github.com/BerriAI/litellm/issues/34101): Project max budgets are checked at read time but not included in the atomic pre-call reservation path.
   - [Issue #27381](https://github.com/BerriAI/litellm/issues/27381) (closed): Global `max_budget_limiter` was instantiated but never registered. Closed, but core budget enforcement still looks fragile.

2. **Memory leak / OOM kills**
   - [Issue #25219](https://github.com/BerriAI/litellm/issues/25219): Continuous memory increase after upgrading to `main-v1.82.0-stable`, causing repeated pod OOM kills.

3. **Credential disclosure via `/health`**
   - [Issue #36898](https://github.com/BerriAI/litellm/issues/36898): `GET /health` returns `extra_headers` and `aws_session_token` in plaintext. The earlier fix in [#18818](https://github.com/BerriAI/litellm/issues/18818) only covered `/model/info`.

4. **LLM translation / pass-through bugs**
   - [Issue #23741](https://github.com/BerriAI/litellm/issues/23741): Anthropic returns 400 for `vector_store_ids` when routed through LiteLLM.
   - [Issue #23841](https://github.com/BerriAI/litellm/issues/23841): Multiple bugs in Anthropic `/v1/messages` experimental pass-through to OpenAI/Azure.
   - [Issue #27967](https://github.com/BerriAI/litellm/issues/27967): Mid-stream fallback includes assistant prefill blocks, breaking fallback targets that do not support `prefix=True`.

5. **Bedrock token and cost accounting**
   - [Issue #37102](https://github.com/BerriAI/litellm/issues/37102): `CountTokens` is unsupported for many current Anthropic models, leading to understated token counts.
   - [Issue #37046](https://github.com/BerriAI/litellm/issues/37046) (closed): `service_tier="priority"` was silently billed at default rates for `gpt-4o`/`gpt-4.1` families.

6. **Router and adaptive router failures**
   - [Issue #35590](https://github.com/BerriAI/litellm/issues/35590): A single persisted `alpha/beta=0` cell bricks the entire adaptive router with `gammavariate: alpha and beta must be > 0.0`.
   - [Issue #35577](https://github.com/BerriAI/litellm/issues/35577) (closed): New DB deployments were dropped during first-time router upsert.

7. **Prompt-injection detection**
   - [Issue #19499](https://github.com/BerriAI/litellm/issues/19499): Heuristics check can block the event loop, causing pod restarts.

8. **Docs / API spec issues**
   - [Issue #37143](https://github.com/BerriAI/litellm/issues/37143): Docs reference `litellm.turn_on_message_logging`, which does not exist.
   - [Issue #16623](https://github.com/BerriAI/litellm/issues/16623): `config.yaml` no longer appears in the OpenAPI spec.

**Fix PRs in flight or landed:**

- [PR #37198](https://github.com/BerriAI/litellm/pull/37198): Rejects out-of-range `limit` on `GET /v1/batches` with an OpenAI-parity 400.
- [PR #37201](https://github.com/BerriAI/litellm/pull/37201): Returns 404 instead of 500 for unresolvable batch and file IDs.
- [PR #37077](https://github.com/BerriAI/litellm/pull/37077) / [PR #37219](https://github.com/BerriAI/litellm/pull/37219): Priced retrieved batches from the deployment’s own model and rates.
- [PR #37231](https://github.com/BerriAI/litellm/pull/37231): Fixes Anthropic 400s by folding guardrail-modified system rows into the top-level `system` parameter.
- [PR #37218](https://github.com/BerriAI/litellm/pull/37218): Stops the `rust` flag from leaking into upstream provider request bodies.
- [PR #36879](https://github.com/BerriAI/litellm/pull/36879): Prices streamed `usage.cost` against the routed deployment instead of a raw model alias.
- [PR #31435](https://github.com/BerriAI/litellm/pull/31435): Validates Bedrock file-content retrieval against the configured output bucket.

## What This Means for Application Developers

- If you run v1.82.x and rely on key/user/project budgets, do not trust enforcement yet. Validate spend limits at the application or gateway layer until [#26672](https://github.com/BerriAI/litellm/issues/26672) and [#34101](https://github.com/BerriAI/litellm/issues/34101) are resolved.
- `/health` can leak secrets in plaintext today. Keep the endpoint internal and upgrade as soon as a sanitization fix ships.
- Batch workloads will get tighter OpenAI-compatible validation and correct deployment-level pricing once [#37198](https://github.com/BerriAI/litellm/pull/37198), [#37201](https://github.com/BerriAI/litellm/pull/37201), and [#37077](https://github.com/BerriAI/litellm/pull/37077) roll out.
- Bedrock users should double-check token usage for Claude Opus/Sonnet 5 models until [#37102](https://github.com/BerriAI/litellm/issues/37102) is fixed.
- Langfuse v4 remains unsupported; pin to the v2 SDK if you rely on the built-in callback ([#24123](https://github.com/BerriAI/litellm/issues/24123), [#33383](https://github.com/BerriAI/litellm/issues/33383)).
- Once the next release ships, evaluate the new Comprehend Medical passthrough and FLUX 3 video support if those workloads are on your roadmap.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

## Unsloth Digest — 2026-08-18

### 1. Today's Highlights

No releases landed in the last 24 hours, but the issue tracker shows two critical items: a Studio server deadlock with every thread blocked in `sqlite3.connect()`/`close()` ([#9008](https://github.com/unslothai/unsloth/issues/9008)) and a complete ROCm backend load failure ([#8998](https://github.com/unslothai/unsloth/issues/8998)) with a fix PR already open ([#9002](https://github.com/unslothai/unsloth/pull/9002)). On the agent-facing side, two PRs tighten tool-call behavior — false tool-call nudges are gated in [#9125](https://github.com/unslothai/unsloth/pull/9125), and replayed tool-call IDs are normalized for OpenAI/Mistral compatibility in [#9116](https://github.com/unslothai/unsloth/pull/9116).

### 2. Releases & Breaking Changes

- No new releases in the last 24 hours.
- Pending behavior changes to watch (open, not merged): [#9102](https://github.com/unslothai/unsloth/pull/9102) serves the API without a key when the user opts in; [#9127](https://github.com/unslothai/unsloth/pull/9127) adds support for llama.cpp's new semantic version output format.
- [#8896](https://github.com/unslothai/unsloth/issues/8896) notes that since `unsloth 2026.3.5` the pip wheel bundles Studio (80 MB wheel, 140 MB decompressed); downstream packagers are requesting a core-only package.

### 3. New Model & Hardware Support

- **ROCm/AMD**: Backend fails to load any models on hosts with a HIP/ROCR mismatch; fix PR [#9002](https://github.com/unslothai/unsloth/pull/9002) retries `llama-server` with bundled HIP. Two PRs improve Windows AMD VRAM reporting by joining adapter counters on DXGI LUID ([#8863](https://github.com/unslothai/unsloth/pull/8863), [#8793](https://github.com/unslothai/unsloth/pull/8793)).
- **Intel**: [#3533](https://github.com/unslothai/unsloth/issues/3533) (open, 14 comments) — import fails on Intel Arc B580 because `torch.xpu.memory.mem_get_info()` is unsupported in `unsloth_zoo/temporary_patches/gpt_oss.py:540`. Users also request proper Intel GPU Studio installs ([#8931](https://github.com/unslothai/unsloth/issues/8931)) and report a backend mismatch on Intel ([#8972](https://github.com/unslothai/unsloth/issues/8972)).
- **MLX/Apple Silicon**: [#9120](https://github.com/unslothai/unsloth/issues/9120) — Train/Export buttons falsely greyed out due to a startup thread race on the first `transformers` import, not a broken install.
- **Vision models**: [#8855](https://github.com/unslothai/unsloth/pull/8855) (closed) lets the hub run non-GGUF image/video models such as `Z-Image-Turbo` safetensors; [#9063](https://github.com/unslothai/unsloth/pull/9063) adds vision projector (`mmproj`) VRAM accounting with CPU fallback.
- **Misc**: [#9059](https://github.com/unslothai/unsloth/issues/9059) requests ternary-bonsai support via a custom llama.cpp install path.

### 4. Performance & Optimization

- **Prompt-state regression**: [#9037](https://github.com/unslothai/unsloth/issues/9037) — long Qwen3.8 GGUF chats lose reusable prompt state after a model reload, forcing an ~11-minute full prefill.
- **Startup import graph**: PR [#8962](https://github.com/unslothai/unsloth/pull/8962) removes pandas from the Studio backend startup path. Profiling shows the chain: `main` 7.28s → `routes` 5.72s → `routes.data_recipe` 2.31s.
- **VRAM planning**: [#9063](https://github.com/unslothai/unsloth/pull/9063) charges the vision projector against VRAM before GPU placement decisions, preventing OOM-style failures for vision GGUF models.
- **Rolling context**: [#9074](https://github.com/unslothai/unsloth/pull/9074) keeps and allows searching of turns evicted by the rolling context window, avoiding loss of older conversation content in long chats.

### 5. Stability & Regressions

Ranked by severity:

1. **Critical — Studio server deadlock** ([#9008](https://github.com/unslothai/unsloth/issues/9008)): every thread blocked in `sqlite3.connect()`/`close()`; process alive but stops accepting connections. No fix PR yet.
2. **Critical — ROCm backend cannot load any models** ([#8998](https://github.com/unslothai/unsloth/issues/8998)): fix PR [#9002](https://github.com/unslothai/unsloth/pull/9002) open.
3. **High — AMD installer/backend mismatch** ([#8473](https://github.com/unslothai/unsloth/issues/8473)): installer reports AMD GPU while backend runs CPU-only; no reconciliation.
4. **High — Qwen3.8 GGUF prompt state lost after reload** ([#9037](https://github.com/unslothai/unsloth/issues/9037)): ~11-minute prefill; open.
5. **Medium — False tool-call nudges** ([#8907](https://github.com/unslothai/unsloth/issues/8907)): Studio nudges models to call tools when none were made; fix PR [#9125](https://github.com/unslothai/unsloth/pull/9125) open.
6. **Medium — External-provider template literal corruption** ([#9098](https://github.com/unslothai/unsloth/issues/9098), closed): streaming a JS/TS template literal deletes the interpolation and surrounding text.
7. **Medium — Intel Arc B580 import failure** ([#3533](https://github.com/unslothai/unsloth/issues/3533)): `torch.xpu.memory.mem_get_info()` unsupported.
8. **Medium — MLX Train/Export falsely greyed out** ([#9120](https://github.com/unslothai/unsloth/issues/9120)): startup race, not a broken install.
9. **Low — `_Noop` object not iterable loading Ideogram 4 on macOS** ([#8940](https://github.com/unslothai/unsloth/issues/8940)).
10. **Low — `get_statistics` ignores `force_download=False`** ([#8899](https://github.com/unslothai/unsloth/issues/8899)): callers cannot avoid forced re-downloads.
11. **Low — Windows installer uv cache error** ([#8991](https://github.com/unslothai/unsloth/issues/8991)): `Cannot create a file when that file already exists` (os error 183).
12. **Closed — Desktop microphone issues**: WebKitGTK media-stream not enabled on Ubuntu Mate ([#8678](https://github.com/unslothai/unsloth/issues/8678)); no way to re-grant microphone access after blocking ([#9001](https://github.com/unslothai/unsloth/issues/9001)).

### 6. What This Means for Application Developers

- **AMD/ROCm Studio users should pin versions** until [#9002](https://github.com/unslothai/unsloth/pull/9002) merges; the ROCm path is currently broken on at least some hosts.
- **Agent/tool-call reliability is being hardened**: [#9125](https://github.com/unslothai/unsloth/pull/9125) gates external tool nudges, [#9126](https://github.com/unslothai/unsloth/pull/9126) aligns nudge defaults across GGUF/external loops, and [#9116](https://github.com/unslothai/unsloth/pull/9116) fixes replayed tool-call IDs that violate OpenAI's 64-char cap and Mistral's 9-char alphanumeric requirement. If you build on Studio's chat API, track these.
- **LAN/remote workflows are improving**: [#9075](https://github.com/unslothai/unsloth/pull/9075) (closed) fixes the blank-page bug when Studio is reached over plain HTTP at a LAN address, and [#9102](https://github.com/unslothai/unsloth/pull/9102) (open) will allow keyless API access when explicitly opted in, matching LM Studio/Ollama ergonomics.
- **Packaging**: the bundled Studio in the pip wheel (80 MB compressed / 140 MB installed) is becoming a pain point for downstream distributors; weigh in on [#8896](https://github.com/unslothai/unsloth/issues/8896) if you ship Unsloth as a dependency.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*