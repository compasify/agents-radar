# AI Infrastructure Digest 2026-08-13

> Generated: 2026-08-13 01:00 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# Cross-Project AI Infrastructure Comparison — 2026-08-13

## 1. Ecosystem Overview

The inference ecosystem is in a **capability-breadth vs. correctness-fragility** phase. Every major project is converging on the same frontier — speculative decoding, NVFP4/MXFP8 quantization, disaggregated prefill, and Day-0 support for the DeepSeek-V4 / Kimi-K3 class of hybrid architectures — but most of the hard engineering effort today is spent on regressions introduced by that velocity: NaNs on Blackwell, hangs on multi-node idle, and tool-call serialization corruption. Serving engines (vLLM, SGLang) are absorbing the bleeding edge first and paying for it with open correctness issues; local runtimes (llama.cpp, Ollama) are shipping more stable releases with real user-facing fixes; gateways (LiteLLM) are focused on spend durability, data isolation, and cost-routing accuracy — the operational layer agents actually depend on. The overall picture: **features are racing ahead of reliability, and pinning is now a required practice across all six projects.**

## 2. Activity Comparison

Counts below reflect issues/PRs referenced in the 2026-08-13 digests, not exhaustive repository totals.

| Project | Issues Referenced | PRs Referenced | Release Status | Dominant Theme |
|---|---|---|---|---|
| vLLM | ~14 | ~13 | None (v0.27.0 era) | Spec-decode fixes + DeepSeek V4/Kimi-K3 ROCm correctness |
| SGLang | ~15 | ~14 | None | CI hardening + Blackwell/AMD/Day-0 model churn |
| llama.cpp | ~17 | ~17 | **3 releases** (b10369/b10373/b10375) | Tool-call parsing fix + hardware breadth (HIP, OpenVINO, OpenCL, RISC-V) |
| Ollama | ~14 | ~13 | 1 RC (v0.32.10-rc1) | MLX/Apple expansion + default `repeat_penalty` change |
| LiteLLM | ~17 | ~13 | None | Spend-log durability + data-isolation fix + cost map |
| Unsloth | ~18 | ~17 | None | Studio/Desktop hardening + AMD GPU detection |

llama.cpp is the only project shipping stable releases at cadence; vLLM and SGLang are both mid-stability-crisis with no release in the last 24h.

## 3. Model Support Race

| Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|---|---|---|---|---|---|---|
| **Kimi-K3** (hybrid KDA+MLA+MoE) | ROCm AITER MLA heads, direct KDA/MLA projections | Day-0 merged; DSpark CUDA launch bugs | Full text-model support (#26185) | — | — | — |
| **DeepSeek V4 Flash** | XPU sequence parallelism; **regressions on v0.27.0** | Separate perf tracking; hangs/OOMs, multi-node deadlock | ROCm RPC worker crashes (top-k) | Model requested (#17510) | — | — |
| **Qwen3.5 / 3.6** | Qwen3.6 FP8 tool-call corruption open | — | **b10375 fixes bare-function tool parsing**; OpenVINO support | MLX perf gap / unrunnable variants | — | — |
| **Nemotron (hybrid/vision)** | NemotronH spec-decode coverage | — | — | Vision on MLX + RADIO encoder (PR #17714) | — | — |
| **GLM-5** | — | DSA decode fast path (#31324) | GLM-5.2 dense-MLA CUDA corruption open | — | — | — |
| **MiniMax** | M3 NVFP4 EAGLE3 2.1–2.3× on B200 | M2.7 CPU `torch.compile` | — | — | — | H3 vetting, M3 GGUF load failure |
| **Whisper** | Word-level timestamps via DTW (unique) | — | — | — | — | — |
| **Longcat-Flash / pocket-tts** | — | — | Both new (#19182, #26871) | — | — | — |

**Ahead on architecture coverage:** llama.cpp (Kimi-K3, Longcat-Flash, pocket-tts, GLM-5 attempts) — but correctness lags on several of those. **Ahead on Day-0 serving:** SGLang and vLLM, both actively bleeding. **Unique capabilities:** vLLM's Whisper word timestamps, LiteLLM's Meta Muse Spark 1.2 pricing + Parallel AI provider. No project has a stable, correct DeepSeek V4 Flash deployment story yet — this is the most important gap in the ecosystem today.

## 4. Performance Frontier

- **Speculative decoding is the new batching.** vLLM merged confidence-scheduled verification (DSpark) and fixed DFlash slot budgeting; llama.cpp added spec-type auto-detection; Ollama's `repeat_penalty` default change is explicitly motivated by speeding up spec decode. **Warning:** vLLM reports catastrophic aggregate-throughput collapse at batch-size thresholds with dynamic per-batch spec-token config — benchmark your own concurrency distribution.
- **Quantization moved to NVFP4/MXFP8, correctness hasn't caught up.** vLLM sees 2.1–2.3× EAGLE3 decode speedups on B200 NVFP4; SGLang reports NVFP4 MoE NaNs on SM100/SM103 (GSM8K → 0.0) and a WIP MXFP8 GEMM backend; Ollama ships ~7–8% faster NVFP4 MLX prefill. Low-bit KV remains dangerous (Ollama q4_0 garbage output).
- **Disaggregated prefill is becoming actionable.** llama.cpp added prefill workers on dedicated device groups; SGLang opened a PD-disaggregation shared-protocol tracker (mooncake/nixl/mori); vLLM has a NixlConnector issue blocking EFA. Expect config churn as protocols unify.
- **Distributed serving maturity is uneven.** vLLM has a **permanent multi-node idle stall** (#51921, 4-node TP=4); SGLang has a DSpark multi-node NCCL deadlock; llama.cpp added NUMA mirroring, RPC `-sm tensor` with custom all-reduce, and async graph compute. Local/edge is arguably more reliable at scale than the serving engines right now.
- **Kernel-level work clusters on MLA, attention, and precision.** AITER fused-MoE/MLA (vLLM, SGLang), fused RMSNorm precision fix for bit-exact spec-decode (vLLM), OpenCL Adreno xmem SDPA (llama.cpp), KV event coalescing (SGLang), prefix-cache mm-tensor broadcast skip (vLLM), and reusable KV-range save/load (llama.cpp).

## 5. Layer Positioning

| Project | Layer | Core Value Proposition | Today's Signal |
|---|---|---|---|
| **vLLM** | Production serving engine | PagedAttention, TP/PP/SP, prefix caching, spec decode at scale | Correctness risk on newest models; spec-decode optimizations landing; multi-node idle fragility |
| **SGLang** | Production serving engine | RadixAttention, Day-0 model support, PD disaggregation | Fastest feature absorption, highest regression churn; CI hardening is the response |
| **llama.cpp** | Local/edge runtime + lightweight server | Widest hardware/quantization coverage (CPU, Vulkan, OpenCL, SYCL, OpenVINO, HIP, RISC-V); GGUF ecosystem | Healthy release cadence; tool-call fixes; disaggregated prefill for the edge |
| **Ollama** | Developer/consumer local runtime | Model management, Apple MLX momentum, OpenAI-compatible API | Default-behavior change (`repeat_penalty`); MLX expansion; fewer scale-out concerns |
| **LiteLLM** | Gateway / control plane | Routing, auth, spend logs, cost map, provider fallbacks (100+ backends) | Spend-log durability, Redis data-isolation fix, cost-router recalibration — the ops/trust layer |
| **Unsloth** | Fine-tuning/training + Studio local serving | LoRA/QLoRA training, hardware detection, desktop UX | Installer/backend reconciliation; AMD detection; agent tool-loop features |

The critical distinction: **vLLM/SGLang own the throughput frontier, llama.cpp/Ollama own the accessibility frontier, LiteLLM owns the trust/accounting layer, Unsloth owns the adaptation (training) layer.** Agent developers typically touch all four layers in one stack — which is exactly why cross-project compatibility matters.

## 6. Trend Signals

1. **Speculative decoding is maturing from hack to default.** Confidence-scheduled budgets, slot accounting, and auto-detection are landing across vLLM, llama.cpp, and Ollama. Expect spec decode to become a default recommendation within two quarters — but only for operators who benchmark the cliff edges.
2. **Agent-correctness is the battleground.** Same-day tool-call parsing fixes in llama.cpp (b10375), vLLM (#51649), Ollama (thinking/structured-output ordering), and LiteLLM (SSE empty-`choices` crash) — the industry is converging on **tool-call corruption as the #1 production agent failure mode**.
3. **DeepSeek V4 Flash / Kimi-K3 Day-0 is still a trap.** Every project that shipped support also shipped a serious bug (vLLM 0.27.0 `--enable-flash` failure, SGLang hangs/OOMs, llama.cpp ROCm top-k crash). **Pin versions and gate upgrades with correctness smoke tests** — this is not optional until these models stabilize.
4. **Multi-node idle behavior is a silent production risk.** vLLM's shm_broadcast starvation after 1 min idle and SGLang's DSpark NCCL deadlock both manifest only under real deployment conditions. Heartbeat traffic and keep-alive workarounds are warranted.
5. **Quantization leadership has shifted to NVFP4/MXFP8, but validation tooling lags.** The performance wins are real (2×+ spec-decode speedups); the NaN/accuracy regressions are equally real. Application teams should run GSM8K-style evals on every quantized model before serving.
6. **Data isolation and security are becoming gateway differentiators.** LiteLLM's Redis Cluster cross-talk fix (responses returned to the wrong client) and Ollama's blob hash-verification bypass fix are the two most severe security items in this digest. Multi-tenant deployments should verify they carry both fixes.
7. **Local/edge is expanding faster than expected.** MLX (Ollama), OpenCL mobile (llama.cpp), RISC-V CI, RDNA4 (gfx1200/1201), NPU support — the hardware surface area is doubling, and with it the regression surface. Unsloth's AMD installer mismatch (GPU reported, CPU backend) is a warning for all hardware-detection paths.
8. **Observability is catching up, slowly.** LiteLLM spend-log requeue PRs, llama.cpp `/metrics` refactor, SGLang profiling annotations — but Ollama still has no server-level metrics endpoint, and LiteLLM leaks token hashes in 429s. The tools for running agent workloads at production SLOs are still being built.

**Bottom line for decision-makers:** vLLM/SGLang remain the right choice for high-throughput serving if you can tolerate pinning discipline; llama.cpp is the most reliable release train this week; Ollama's default-behavior change requires re-testing existing models; LiteLLM is where spend trust and multi-tenant isolation get fixed — upgrade there first if you run Redis-backed gateways.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

## vLLM Digest — 2026-08-13

**Data sources:** Issues · Pull Requests · Releases

---

### 1. Today's Highlights

No new vLLM releases were cut in the last 24 hours, but there is heavy activity on two fronts: speculative decoding (DSpark confidence-scheduled verification was closed/merged, DFlash slot budgeting fixed) and DeepSeek V4 Flash on new hardware, where multiple correctness and routing bugs remain open. ROCm/Kimi-K3 enablement also advanced with AITER MLA head-padding and redundant-copy removal PRs.

---

### 3. New Model & Hardware Support

- **Kimi-K3 ROCm roadmap tracking** — The [tracking issue](https://github.com/vllm-project/vllm/issues/50682) documents Day-0 enablement: AITER fused-MoE integrated for a16w4 (GENERAL) and a8w4 (INTERLEAVE), with ongoing work tracked for upstream enablement/performance.
- **[ROCm] Non-aligned AITER MLA heads** — [PR #51647](https://github.com/vllm-project/vllm/pull/51647) pads non-16-aligned AITER MLA query heads, allowing Kimi-K3 TP4's 24 heads/rank to use AITER MLA instead of falling back to Triton MLA.
- **[Kimi-K3][AMD] Direct KDA/MLA projection outputs** — [PR #50592](https://github.com/vllm-project/vllm/pull/50592) removes redundant post-projection allocation/copy in Kimi-K3 AMD attention paths.
- **[XPU] Sequence parallelism for DeepSeek V4** — [PR #51346](https://github.com/vllm-project/vllm/pull/51346) adds SP to the XPU DeepSeek V4 path, sharding attention activations along the sequence dimension to cut MoE activation memory.
- **[Whisper] Native word-level timestamps** — [PR #47664](https://github.com/vllm-project/vllm/pull/47664) implements word timestamps via cross-attention + DTW (`timestamp_granularities[]=word`).
- **[Spec Decode] NemotronH hybrid coverage** — [PR #52073](https://github.com/vllm-project/vllm/pull/52073) adds `extract_hidden_states` test coverage for NemotronH (Mamba2 + attention hybrid).
- **Intel Battlemage XPU** — A new data point in [issue #48953](https://github.com/vllm-project/vllm/issues/48953): TP=2 on dual Arc B50 crashes during worker init with `zeMemOpenIpcHandle INVALID_ARGUMENT` (see note on the tracking issue #41663).

---

### 4. Performance & Optimization

- **DSpark confidence-scheduled verification (merged)** — [PR #47808](https://github.com/vllm-project/vllm/pull/47808) adaptively sizes DSpark's draft-verification budget from per-request confidence instead of fixed-k verification, which collapses at high concurrency when 7 drafts/request burn more compute than the accepted tokens return.
- **Skip broadcast of prefix-cache-covered mm tensors** — [PR #52041](https://github.com/vllm-project/vllm/pull/52041) stops shipping multimodal tensor data from EngineCore to TP workers when items are already prefix-cache-covered (fixes #52040); the broadcast path was designed for token IDs and now carries large tensors.
- **DFlash scheduling budget fix** — [PR #51256](https://github.com/vllm-project/vllm/pull/51256) reserves the missing bonus query slot in DFlash's parallel-draft scheduling, which was short by one slot per request (e.g., `num_speculative_tokens=8` under `max_num_batched_tokens=2048`).
- **MiniMax-M3-NVFP4 on 8× B200** — [Issue #51494](https://github.com/vllm-project/vllm/issues/51494) reports first post-`#48929`-fix numbers: EAGLE3 decode speedup of 2.1–2.3× on a 1M real-prose envelope. Note that the validated B200 recipe predates the correctness fix and no stable release contains it yet (v0.26.0 cut before merge).
- **Dynamic spec-decode throughput collapse** — [Issue #49548](https://github.com/vllm-project/vllm/issues/49548) documents a ~14% single-stream loss from the documented `FULL_AND_PIECEWISE → PIECEWISE` cudagraph downgrade, plus a catastrophic aggregate-throughput collapse at the batch-size threshold when `num_speculative_tokens_per_batch_size` is enabled (Qwen3.5-122B MTP k=2).
- **RMSNorm precision fix** — [PR #49639](https://github.com/vllm-project/vllm/pull/49639) restores scalar_t rounding boundaries in the fused RMSNorm CUDA kernel, eliminating bit-level divergences in greedy NGRAM/speculative verification.
- **KV block zeroing launch bound** — [PR #52058](https://github.com/vllm-project/vllm/pull/52058) fixes a `KVBlockZeroer` launch overflow that broke `main` nightly CI build #83443.

---

### 5. Stability & Regressions

Ranked by severity:

- **DeepSeek V4 Flash fails after upgrade to v0.27.0** — [Issue #51758](https://github.com/vllm-project/vllm/issues/51758): running DeepSeek V4 with `--enable-flash` errors after upgrading from 0.26.0 to 0.27.0 (16 comments). No fix PR linked.
- **Multi-node engine permanently stalls after ~1 min idle** — [Issue #51921](https://github.com/vllm-project/vllm/issues/51921): v0.27.0 on 4-node TP=4 (GB10/sm_121, aarch64) stops routing requests after idle; `shm_broadcast` writer starves, `num_requests_running` stays 0.
- **Qwen3.6-35B-A3B-FP8 code-gen corruption** — [Issue #47761](https://github.com/vllm-project/vllm/issues/47761): vLLM 0.23.0/0.24.0 returns `400 Unterminated string starting at` when generating code, pointing to tool-call/JSON serialization corruption.
- **vLLM latest image fails to start Gemma4** — [Issue #51744](https://github.com/vllm-project/vllm/issues/51744): `vllm/vllm-openai:latest` (0.27.0) incompatible with bundled Transformers 5.15.0 for Gemma4 NVFP4.
- **DSpark fails on Blackwell SM120** — [Issue #50720](https://github.com/vllm-project/vllm/issues/50720): DeepSeek-V4-Flash + DSpark on RTX PRO 6000 hits FlashInfer sparse MLA decode kernel routing failure.
- **DeepSeek V4 Flash garbled output** — [Issue #43416](https://github.com/vllm-project/vllm/issues/43416): garbled model output with `--enable-prefix-caching` on `v0.21.0`.
- **Intel Battlemage stability** — TP=2 crash on Arc B50 ([#48953](https://github.com/vllm-project/vllm/issues/48953)) and PP=2 crash/hang on B70+B580 ([#46072](https://github.com/vllm-project/vllm/issues/46072)) persist for XPU multi-GPU.
- **Hybrid-SWA prefix-cache collapse** — [Issue #48435](https://github.com/vllm-project/vllm/issues/48435): cross-request prefix reuse drops to zero for all requests in multi-session round-robin once ~25% pool occupancy is exceeded (Gemma-4-31B).
- **Security: setuptools minimum version** — [Issue #51993](https://github.com/vllm-project/vllm/issues/51993) requests a bump for a known-severity issue in `requirements/common.txt`; currently open with 4 comments.

**Fix PRs in flight:**

- [PR #51649](https://github.com/vllm-project/vllm/pull/51649) fixes nine defects in pythonic tool-call parsers (JSON safety, per-call salvage), including `calc(x=1e999)` edge cases — relevant to the Qwen tool-call corruption class.
- [PR #52077](https://github.com/vllm-project/vllm/pull/52077) fixes `AttributeError` when `--config` receives an empty/comments-only YAML file.
- [PR #52075](https://github.com/vllm-project/vllm/pull/52075) improves context-parallel backend error messages with actionable recovery steps.
- [PR #52058](https://github.com/vllm-project/vllm/pull/52058) bounds KV-block zeroing launch geometry (CI failure fix).
- [PR #49639](https://github.com/vllm-project/vllm/pull/49639) fixes fused RMSNorm rounding for bit-exact spec-decode verification.
- [Issue #41814](https://github.com/vllm-project/vllm/issues/41814) (closed): `NixlConnector` hardcodes UCX default; no env-var override for LIBFABRIC/EFA — relevant for disaggregated prefill on AWS EFA.

---

### 6. What This Means for Application Developers

- **Pin versions when serving DeepSeek V4 Flash / Qwen3.6 FP8.** Upgrading to 0.27.0 can break DeepSeek V4 Flash (`--enable-flash`), and the 0.23–0.24 line still corrupts Qwen3.6-35B-A3B-FP8 code/tool-call output. If you run these models in production, stay on a known-good version and gate upgrades behind output-correctness smoke tests.
- **Treat v0.27.0 multi-node idle behavior with caution.** The GB10/4-node idle-stall bug ([#51921](https://github.com/vllm-project/vllm/issues/51921)) means long-idle engines may silently stop scheduling; consider heartbeat/keep-alive traffic or deferring the upgrade until fixed.
- **Speculative decoding is improving but has sharp edges.** DSpark's confidence-scheduled verification and DFlash slot fixes address real throughput cliffs, but dynamic per-batch spec-token configs can still cause catastrophic aggregate-throughput collapse at concurrency thresholds — benchmark carefully with your own concurrency distribution.
- **Prefix caching is not safe for all workloads yet.** Hybrid-SWA models (Gemma-4-31B) can see prefix reuse collapse under multi-session round-robin, and Mooncake/offload connectors have retention-interval gaps. Long-context, multi-tenant apps should measure cache hit rates rather than assume them.
- **XPU/Battlemage multi-GPU remains experimental.** TP=2/PP=2 crashes on Arc B50/B70/B580 are unresolved; stay on single-GPU XPU deployments for now.
- **Watch for the Whisper word-timestamp feature** ([PR #47664](https://github.com/vllm-project/vllm/pull/47664)) and NemotronH spec-decode coverage ([PR #52073](https://github.com/vllm-project/vllm/pull/52073)) if you build speech or hybrid-Mamba2 pipelines on vLLM.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest — 2026-08-13

## 1. Today's Highlights

No new SGLang release shipped in the last 24 hours. Activity is concentrated on CI hardening (AMD perf gates, rerun tooling, CUDA coredump tracking), forward-looking roadmap items (PD disaggregation protocol unification, context parallelism, SM120 optimization), and a wave of DeepSeek-V4 / Kimi-K3 / Blackwell correctness reports — several with quick revert or fix PRs already landed. The new [PD-disaggregation shared-protocol tracking issue](https://github.com/sgl-project/sglang/issues/34510) is also a useful signal for operators running disaggregated deployments.

## 2. Releases & Breaking Changes

- **None reported.** No new releases, version migrations, or config-breaking changes appeared in the last 24h.

## 3. New Model & Hardware Support

- **Kimi K3 roadmap remains active** with Day-0 support already merged; new bug reports are now appearing for DSpark and CUDA-graph paths: [Kimi K3 Roadmap #32607](https://github.com/sgl-project/sglang/issues/32607), [DSpark CUDA launch failure with concurrency=1 #34522](https://github.com/sgl-project/sglang/issues/34522).
- **DeepSeek-V4 perf tracking on NVIDIA** is now separated from feature enablement, scoped to SM90/SM10X: [DeepSeek V4 Perf Tracking #33636](https://github.com/sgl-project/sglang/issues/33636).
- **Blackwell/SM120 roadmap** continues to track DeepSeek-V4 Flash, DeepGEMM MQA indexer, and FlashInfer NVFP4 MoE integration: [SM120 Performance Optimization Plan #19637](https://github.com/sgl-project/sglang/issues/19637), [B12X FlashInfer NVFP4 MoE integration #33709](https://github.com/sgl-project/sglang/issues/33709).
- **AMD/ROCm**: New nightly perf benchmarks are being added for GPT-OSS and Kimi-K3 on ROCm 7.2, alongside DeepSeek-V4 threshold gating: [PR #34645](https://github.com/sgl-project/sglang/pull/34645), [PR #34640](https://github.com/sgl-project/sglang/pull/34640).
- **Apple Silicon / MLX**: An RFC proposes replacing the MLX runner-stub split with one Torch-owned SRT path plus an exported whole-model MLX region: [RFC #32321](https://github.com/sgl-project/sglang/issues/32321).
- **GLM-5 DSA decode fast path** skips the indexer when `kv_len <= index_topk`, treating it as dense k-only: [PR #31324](https://github.com/sgl-project/sglang/pull/31324).
- **NPU**: Distributed exact input logprobs are added without full-vocabulary TP gather: [PR #34402](https://github.com/sgl-project/sglang/pull/34402).

## 4. Performance & Optimization

- **AMD AITER unified-attention decode**: Quantizing Q to FP8 enables native FP8-Q matrix multiply for FP8 KV paths, reducing `kernel_unified_attention_3d` cost at medium/high batch: [PR #31856](https://github.com/sgl-project/sglang/pull/31856).
- **AMD memory efficiency**: Proposed removal of the silent ×0.85 `mem_fraction_static` derate for AITER when context length > 8K: [PR #25199](https://github.com/sgl-project/sglang/pull/25199).
- **MXFP8 GEMM**: A `cute-dsl` backend for FlashInfer MXFP8 GEMM shows faster swap-AB/split-K kernels than persistent CUTLASS on SM10x. WIP PR closed, but tracking continues: [PR #34042](https://github.com/sgl-project/sglang/pull/34042), [Issue #32950](https://github.com/sgl-project/sglang/issues/32950).
- **KV cache event coalescing** reduces scheduler publication overhead by merging compatible KV store/removal events: [PR #31479](https://github.com/sgl-project/sglang/pull/31479).
- **JIT kernel alignment fix** for zero-KV paths splits by pointer alignment — follow-up to earlier kernel work: [PR #33881](https://github.com/sgl-project/sglang/pull/33881).
- **Profiling annotations** add detailed execution-step annotations for deeper trace analysis: [PR #24911](https://github.com/sgl-project/sglang/pull/24911).
- **CPU optimization** work is targeting MiniMax-M2.7 under `torch.compile`: [PR #31956](https://github.com/sgl-project/sglang/pull/31956).
- **Context parallelism roadmap** remains open for 2026 Q3, covering prefill CP for MHA/GQA and DSA models: [Issue #21788](https://github.com/sgl-project/sglang/issues/21788).

## 5. Stability & Regressions

Ranked roughly by severity:

- **DeepSeek-V4 scheduler hang on H20** with hierarchical cache + chunked prefill + sparse prefill (watchdog abort), plus a sampling device-side assert on 0.5.16+PR: [Issue #34235](https://github.com/sgl-project/sglang/issues/34235).
- **1M-token prefill CUDA OOM** in DeepSeek-V4 indexer `fp8_mqa_logits` nonpaged path with `--tp 8 + MegaMoE` on 8× B200; same request works with tp8/dp8 DP-attention: [Issue #34155](https://github.com/sgl-project/sglang/issues/34155).
- **Multi-node TP rank-divergence deadlock** with DSpark on 2× DGX Spark: one rank wedges in NCCL proxy logits all-gather, peer idles at request broadcast: [Issue #33289](https://github.com/sgl-project/sglang/issues/33289).
- **FlashInfer TRTLLM NVFP4 MoE NaNs on SM100/SM103** after upgrading past `0.6.16rc4`; tile-192 path yields non-finite outputs and GSM8K score drops to 0.0. No fix PR yet: [Issue #34629](https://github.com/sgl-project/sglang/issues/34629).
- **ROCm MI355 HiCache broken** with poor performance for realistic agentic workloads: [Issue #34611](https://github.com/sgl-project/sglang/issues/34611).
- **Kimi-K3 DSpark CUDA launch failure** when `--concurrency=1`: [Issue #34522](https://github.com/sgl-project/sglang/issues/34522).
- **Prefix-cache disabled path bug**: `prefix_indices` is stored as a raw `int32` row view in `SWARadixCache` / `UnifiedRadixCache` instead of a snapshot; fix PR exists: [PR #34644](https://github.com/sgl-project/sglang/pull/34644).
- **Kimi K3 MLA gate projection fusion reverted** because it broke CI and caused a real regression over full 2048-token sequences: [PR #34642](https://github.com/sgl-project/sglang/pull/34642).
- **ROCm VAE Conv2D fast path** broke spatial-parallel decode for Wan VAE; fix targets spatial-shard decode: [PR #34424](https://github.com/sgl-project/sglang/pull/34424).
- **DeepSeek-V4 accuracy regression** between 0.5.12 and 0.5.14 (3–4 pt score drop) was closed — verify if your pinned version includes the fix: [Issue #33659](https://github.com/sgl-project/sglang/issues/33659).
- **CI status**: [CI failure tracker #17050](https://github.com/sgl-project/sglang/issues/17050) reports 3 broken, 11 flaky, 671 recently fixed as of 2026-08-13.

## 6. What This Means for Application Developers

- **If you serve DeepSeek-V4 or Kimi-K3**, pay close attention to your SGLang pin: several serious hangs, OOMs, and NaNs are still open on recent 0.5.17-era code. The Kimi-K3 MLA fusion revert means any build including #33623 should be re-evaluated.
- **Disaggregated PD users** should watch the new [unified protocol-layer tracking issue #34510](https://github.com/sgl-project/sglang/issues/34510); it signals upcoming internal changes to mooncake/nixl/mori backends that may affect how PD rooms and transfers are configured.
- **AMD/ROCm operators** now have better CI coverage coming, but current HiCache and AITER paths still carry known correctness/perf regressions — test agentic long-context workloads explicitly.
- **Prefix caching** had a subtle bug on the cache-disabled path; if you rely on `req.prefix_indices` or radix-cache-disabled behavior, the upcoming fix in [#34644](https://github.com/sgl-project/sglang/pull/34644) is worth tracking.
- **CI reliability is improving**: the `/rerun-failed-ci` tooling now targets the newest run and handles cancelled workflows, and AMD perf gates will soon assert throughput thresholds instead of just reporting them.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp Digest — 2026-08-13

## Today's Highlights

Three releases landed, headlined by **b10375**, which tightens bare-function parsing for Qwen models and fixes a class of tool-call corruption where trailing newlines caused arguments to swallow subsequent calls. On the serving front, disaggregated prefill/decode took another step forward with prefill-worker support on dedicated device groups (#25675), and new model work arrived for Kimi-K3 (#26185), Longcat-Flash (#19182), and pocket-tts in mtmd (#26871). HIP builds are also slated to become IEEE-conformant by default (#26696).

## Releases & Breaking Changes

- **b10375** — chat: tighten bare function parsing for Qwen models ([#26793](https://github.com/ggml-org/llama.cpp/pull/26793)). Fixes tool-call parsing failures where derived `value_suffix` never matched because the model omitted the leading newline ([#26763](https://github.com/ggml-org/llama.cpp/issues/26763)). [Release](https://github.com/ggml-org/llama.cpp/releases/tag/b10375)
- **b10373** — imatrix.cpp: move finite check and only check touched experts ([#26861](https://github.com/ggml-org/llama.cpp/pull/26861)); reduces imatrix calibration work on MoE models. [Release](https://github.com/ggml-org/llama.cpp/releases/tag/b10373)
- **b10369** — mtmd: support pocket-tts ([#26871](https://github.com/ggml-org/llama.cpp/pull/26871)). Note: `ggml_conv_transpose_1d` has no grouped mode, so the depthwise upsampler is implemented as GEMM + col2im. [Release](https://github.com/ggml-org/llama.cpp/releases/tag/b10369)
- **Pending config change:** [#26696](https://github.com/ggml-org/llama.cpp/pull/26696) makes HIP `-funsafe-math-optimizations` opt-in (`GGML_HIP_UNSAFE_MATH`, default OFF). HIP numerics become IEEE-conformant by default; opt back into fast-math explicitly.
- **API work in progress:** `llama_batch_ext` ([#24669](https://github.com/ggml-org/llama.cpp/pull/24669), early WIP) and position-relocatable KV range save/load ([#25133](https://github.com/ggml-org/llama.cpp/pull/25133)).

## New Model & Hardware Support

- **Kimi-K3** text model: hybrid KDA (linear) + MLA attention, cross-layer residual attention, latent MoE, and `situ` activation ([#26185](https://github.com/ggml-org/llama.cpp/pull/26185)).
- **Longcat-Flash**: MLA + "zero-computing experts"; testing help requested ([#19182](https://github.com/ggml-org/llama.cpp/pull/19182)).
- **pocket-tts** in mtmd shipped in b10369 ([#26871](https://github.com/ggml-org/llama.cpp/pull/26871)).
- **OpenVINO**: Qwen3.5 Dense/MoE enabled on CPU/GPU, GPU memory optimization, and test fixes ([#26952](https://github.com/ggml-org/llama.cpp/pull/26952)).
- **OpenCL**: Adreno xmem SDPA path for non-causal diffusion attention; fixes silent buffer corruption on large shapes (Z-Image 1024, `H=30, L=4224, D=128`) ([#26331](https://github.com/ggml-org/llama.cpp/pull/26331)).
- **HIP docs**: RDNA4 (`gfx1200`/`gfx1201`) added to supported GPU targets ([#26745](https://github.com/ggml-org/llama.cpp/pull/26745)).
- **RISC-V**: release CI for Ubuntu riscv64 ([#26986](https://github.com/ggml-org/llama.cpp/pull/26986)).

## Performance & Optimization

- **Disaggregated prefill workers** ([#25675](https://github.com/ggml-org/llama.cpp/pull/25675)): optional prefill on dedicated device groups; the prompt prefix is processed in a separate context, transferred through host memory, and decode continues on the main server context. Part of the [#21266](https://github.com/ggml-org/llama.cpp/issues/21266) roadmap.
- **`--numa mirror`** ([#16000](https://github.com/ggml-org/llama.cpp/pull/16000)): mirrors weights to every NUMA node and uses thread-local OMP selection to eliminate cross-socket traffic.
- **Spec-type auto-detection** ([#26814](https://github.com/ggml-org/llama.cpp/pull/26814)): local draft GGUFs now auto-detect spec type from metadata, fixing a case where speculative decoding silently stayed inactive (`tok/decode-pass = 1.000`).
- **RPC `-sm tensor`** ([#26610](https://github.com/ggml-org/llama.cpp/pull/26610)): async graph compute, custom all-reduce, and graph UID caching for RDMA-connected multi-node setups.
- **Server metrics refactor** ([#26920](https://github.com/ggml-org/llama.cpp/pull/26920)): corrects metrics counting; enabler for exposing `/metrics` during `llama_decode()` ([#24866](https://github.com/ggml-org/llama.cpp/issues/24866)).
- **Tokenizer hotspot**: `bpe_ranks` unordered_map lookups identified as a cache-miss bottleneck during prefill ([#26937](https://github.com/ggml-org/llama.cpp/issues/26937)).
- **Reported regression found & closed**: ~40% slowdown on RTX 5080 between b10356 and b10359, worsening per build ([#26918](https://github.com/ggml-org/llama.cpp/issues/26918)) — closed; verify against b10375+.

## Stability & Regressions

Ranked roughly by severity. Most have no open fix PR yet; the notable exception is the Qwen tool-parsing fix in b10375.

1. **GLM-5.2 dense-MLA CUDA corruption** — real transformer layers offloaded to GPU produce coherent text mixed with garbage ([#26027](https://github.com/ggml-org/llama.cpp/issues/26027)).
2. **Tensor-split crash** — `GGML_ASSERT(ret.axis != GGML_BACKEND_SPLIT_AXIS_UNKNOWN)` on Glimmer Q8_0 across 4× Tesla T10 ([#26902](https://github.com/ggml-org/llama.cpp/issues/26902)).
3. **ROCm RPC worker crash** — gfx1151 crashes in `GGML_OP_TOP_K` during DeepSeek V4 prefill after 4K tokens ([#26746](https://github.com/ggml-org/llama.cpp/issues/26746)).
4. **Vulkan all-NaN logits** — Qwen3.5-0.8B multimodal prefill on Mali-G925 (Dimensity 9400) returns all-NaN; CPU works ([#26921](https://github.com/ggml-org/llama.cpp/issues/26921)).
5. **DFlash 2× regression** — AMD Strix Halo APU + quantized MoE with speculation ~2× slower than baseline ([#25117](https://github.com/ggml-org/llama.cpp/issues/25117)).
6. **SWA correctness** — Gemma 4 with sliding-window attention forgets key details ([#25751](https://github.com/ggml-org/llama.cpp/issues/25751)).
7. **Windows ROCm binaries** — new: crash with "cudaMemGetInfo failed" ([#26963](https://github.com/ggml-org/llama.cpp/issues/26963)); earlier "GPU not detected" closed ([#26929](https://github.com/ggml-org/llama.cpp/issues/26929)).
8. **ROCm 7.14 packaging** — `libhipblas.so.3` missing from prebuilt binaries ([#25807](https://github.com/ggml-org/llama.cpp/issues/25807)).
9. **MTP cache misses** — full prompt re-processing on every request with Qwen3.5-2B-MTP GGUF ([#24714](https://github.com/ggml-org/llama.cpp/issues/24714)); MTP compute-buffer over-reservation on ROCm also open ([#26038](https://github.com/ggml-org/llama.cpp/issues/26038)).
10. **OpenVINO** — gemma-4-12B fails to load on CPU/GPU/NPU ([#24415](https://github.com/ggml-org/llama.cpp/issues/24415)).
11. **SYCL power draw** — `-cb` pins Battlemage GPU at boost clock (`gt-c0`, 2800 MHz) between requests ([#24946](https://github.com/ggml-org/llama.cpp/issues/24946)).
12. **Long-running server degradation** on Vulkan/Windows requiring reboots ([#22360](https://github.com/ggml-org/llama.cpp/issues/22360)).

## What This Means for Application Developers

- **If you serve Qwen models with tool calling, upgrade to b10375** — the tightened bare-function parsing fixes arguments swallowing follow-up calls when the model omits a leading newline ([#26763](https://github.com/ggml-org/llama.cpp/issues/26763), [#26793](https://github.com/ggml-org/llama.cpp/pull/26793)). The grammar repetition-threshold failure for very large tool schemas was also closed ([#20867](https://github.com/ggml-org/llama.cpp/issues/20867)).
- **Disaggregated prefill is becoming actionable** — [#25675](https://github.com/ggml-org/llama.cpp/pull/25675) adds dedicated prefill workers on separate device groups; expect improved first-token latency for long prompts in upcoming server configs. Track [#21266](https://github.com/ggml-org/llama.cpp/issues/21266).
- **Local speculative decoding gets a QoL fix** — after [#26814](https://github.com/ggml-org/llama.cpp/pull/26814), pointing `-md` at a local draft GGUF should activate speculation without manual `--spec-type`.
- **HIP math semantics are changing** — after [#26696](https://github.com/ggml-org/llama.cpp/pull/26696) merges, HIP numerics default to IEEE-conformant; re-benchmark if you tuned around fast-math behavior.
- **Use caution with**: GLM-5.2 dense-MLA on CUDA, Gemma-4 SWA, and DFlash speculation on AMD APUs — pin to known-good builds if these paths are load-bearing.
- **Monitoring improvements in flight** — the metrics refactor ([#26920](https://github.com/ggml-org/llama.cpp/pull/26920)) is a prerequisite for scraping `/metrics` during `llama_decode()`, which matters for production autoscaling and SLO tracking.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Digest — 2026-08-13

## 1. Today's Highlights
Ollama published release candidate **v0.32.10-rc1**, changing the default `repeat_penalty` to 1.0 (off) and adding ~7–8% faster prefill for NVFP4 MLX models ([release](https://github.com/ollama/ollama/releases/tag/v0.32.10-rc1)). In-flight work is adding an MLX KV connector framework ([#17707](https://github.com/ollama/ollama/pull/17707)), Nemotron vision on MLX ([#17714](https://github.com/ollama/ollama/pull/17714)), and native web search for the OpenAI Responses API ([#17686](https://github.com/ollama/ollama/pull/17686)). Several correctness bugs around quantized outputs, tokenization, and thinking/structured-output handling remain open or are being fixed ([#17614](https://github.com/ollama/ollama/issues/17614), [#17705](https://github.com/ollama/ollama/pull/17705)).

## 2. Releases & Breaking Changes
- **v0.32.10-rc1** ([release](https://github.com/ollama/ollama/releases/tag/v0.32.10-rc1)): models without an explicit `repeat_penalty` now default to **1.0 (off)** instead of 1.1. This matches other engines and speeds up speculative decoding, but existing users who depended on the old default may need to set `repeat_penalty` per model.
- **OpenAI compatibility change in flight** ([#17712](https://github.com/ollama/ollama/pull/17712)): `reasoning_effort="minimal"` will be accepted on `/v1/chat/completions` and mapped to `"low"` instead of returning 400.
- **Local build versioning** ([#16980](https://github.com/ollama/ollama/pull/16980)): local builds now report proper semver post-release versions, preventing upgrade logic from incorrectly treating them as pre-releases.

## 3. New Model & Hardware Support
- **Nemotron vision on MLX** ([#17714](https://github.com/ollama/ollama/pull/17714)): adds RADIO vision encoder/projector support on the shared MLX media pipeline, including dynamic-resolution preprocessing.
- **MLX KV connector framework** ([#17707](https://github.com/ollama/ollama/pull/17707)): adds file-backed example connector for persisting/restoring MLX prefix-cache snapshots; useful for future multi-backend KV-serving integrations.
- **`ollama launch` integrations**: Muse Code ([#17594](https://github.com/ollama/ollama/pull/17594)) and Talos ([#17589](https://github.com/ollama/ollama/pull/17589)).
- **MLX download gating for Linux/Windows** ([#17710](https://github.com/ollama/ollama/pull/17710)): model pulls will be blocked locally when MLX runtime support is absent.
- **Model request**: `deepseek-v4-flash:0731` for local use ([#17510](https://github.com/ollama/ollama/issues/17510)).
- **ARM CPU build fix** ([#17385](https://github.com/ollama/ollama/pull/17385)): avoids build failure on ARM toolchains that don’t support `armv9.2-a` march flags, e.g. GCC 11.4 on Jetson AGX Orin.

## 4. Performance & Optimization
- **v0.32.10-rc1 NVFP4 MLX prefill** ([release](https://github.com/ollama/ollama/releases/tag/v0.32.10-rc1)): ~7–8% faster prefill for NVFP4 MLX models using a global scale.
- **Double-scale NVFP4 prefill optimization** ([#17703](https://github.com/ollama/ollama/pull/17703)): compiles the global-scale multiply and dtype cast into one kernel to reduce extra launches/materializations.
- **Open regression: Q4_K_M performance drop on AMD Radeon 780M (Vulkan)** ([#16721](https://github.com/ollama/ollama/issues/16721)): ~10% generation / ~20% prefill regression since v0.30.7; Q6_K and Q8_0 unaffected.
- **Open performance issue: MLX models on Apple Silicon** ([#17050](https://github.com/ollama/ollama/issues/17050)): `Qwen3.5:35b-mlx` is slower than the non-MLX build, and `Qwen3.6:35b-mlx` is currently unrunnable on the reporter’s M3 24GB MacBook Air.

## 5. Stability & Regressions
Ranked by severity:

1. **Security: blob hash verification bypass / SSRF exfiltration** — `skipVerify` map collision when config/layer share a digest. Fixed by [#15504](https://github.com/ollama/ollama/pull/15504), closing [#15485](https://github.com/ollama/ollama/issues/15485).
2. **Lower quantization formats produce garbage responses** ([#17614](https://github.com/ollama/ollama/issues/17614)): switching KV quantization from `q8_0` to `q4_0` causes unintelligible output. Open, 11 comments.
3. **Qwen2.5-3B GGUF emits garbage ASCII tokens for Chinese input on CPU** ([#17587](https://github.com/ollama/ollama/issues/17587)): tokenizer mis-detection on Windows; outputs like `@@@@@` / `!!!!!`.
4. **Gemma 4 emits repeated `<unused49>` tokens with `think: false`** ([#17459](https://github.com/ollama/ollama/issues/17459)): also breaks VS Code integration.
5. **`num_ctx` effective truncation is `num_ctx/2 + 2`** ([#17427](https://github.com/ollama/ollama/issues/17427)): gpt-oss:20b silently gets half the configured prompt context window.
6. **Runner hangs after accepting TCP connection** ([#15950](https://github.com/ollama/ollama/issues/15950)): large pinned models can cause `/api/generate` to hang indefinitely with zero bytes returned; same shape as earlier resolved issue #15258.
7. **`/api/generate` aborts with “token repeat limit reached”** ([#17270](https://github.com/ollama/ollama/issues/17270)): regression from 0.20.7 → 0.32.1.
8. **Nemotron3.5-lightning stalls on AMD AI395+** ([#17692](https://github.com/ollama/ollama/issues/17692)): model stalls during thinking phase on Framework Desktop.
9. **Qwen3.6 hybrid falls back to CPU on CUDA** ([#17669](https://github.com/ollama/ollama/issues/17669)): broken with llama.cpp b10353, worked with b10242; likely addressed by the recent llama.cpp bump ([#17702](https://github.com/ollama/ollama/pull/17702)).
10. **CUDA 12.1 GPU not used in 0.32.4 container** ([#17431](https://github.com/ollama/ollama/issues/17431)): closed, but worth verifying for NVIDIA users on older CUDA.

Related fixes in flight for thinking/structured-output correctness: [#17705](https://github.com/ollama/ollama/pull/17705) defers structured outputs until thinking completes in `/api/generate`; [#17706](https://github.com/ollama/ollama/pull/17706) preserves structured outputs and thinking across chat restart; [#17708](https://github.com/ollama/ollama/pull/17708) fixes empty replies from raw `/api/generate` requests with thinking-capable models.

## 6. What This Means for Application Developers
- **Re-test generation determinism after upgrading to v0.32.10-rc1**: `repeat_penalty` is now off by default. If older models begin repeating, set `repeat_penalty` explicitly per model.
- **Be careful with `/api/generate` + thinking models**: current behavior can produce empty replies or force JSON formatting before reasoning. Track [#17708](https://github.com/ollama/ollama/pull/17708) and [#17705](https://github.com/ollama/ollama/pull/17705); until landed, prefer `/api/chat` for structured output with reasoning models.
- **Validate low-bit quantization before shipping**: `q4_0` KV quantization and CPU tokenizer paths are both implicated in garbage-output bugs ([#17614](https://github.com/ollama/ollama/issues/17614), [#17587](https://github.com/ollama/ollama/issues/17587)).
- **OpenAI compatibility is evolving**: Responses API web search support ([#17686](https://github.com/ollama/ollama/pull/17686)) and `reasoning_effort=minimal` ([#17712](https://github.com/ollama/ollama/pull/17712)) are moving fast — good time to re-test Codex-style integrations.
- **Observability is still limited**: there is no passive server-level inference metrics endpoint yet. The request for vLLM-style metrics is open ([#17694](https://github.com/ollama/ollama/issues/17694)); use `/api/ps` and request timing in the meantime.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-08-13

## 1. Today's Highlights

Spend-log durability is the dominant theme: three open PRs fix dropped spend rows on cancelled flushes, proxy shutdown, and DB transport errors ([#34826](https://github.com/BerriAI/litellm/pull/34826), [#34950](https://github.com/BerriAI/litellm/pull/34950), [#36716](https://github.com/BerriAI/litellm/pull/36716)). A **critical data-isolation bug** — response cross-talk between users in a Redis Cluster/OpenShift deployment — was closed ([#25447](https://github.com/BerriAI/litellm/issues/25447)). On the feature side, the cost map gains `meta/muse-spark-1.2` pricing ([#36717](https://github.com/BerriAI/litellm/pull/36717)) and Parallel AI expands to a full chat + Responses provider ([#36704](https://github.com/BerriAI/litellm/pull/36704)).

## 2. Releases & Breaking Changes

No new releases in the last 24h. Caveat for the current release: **litellm 1.96.1 publishes only cp310 wheels and no sdist**, making it uninstallable on Python 3.13 ([#36526](https://github.com/BerriAI/litellm/issues/36526), closed). Python 3.13 users should pin to an earlier version or wait for a packaging fix.

## 3. New Model & Hardware Support

- [PR #36717](https://github.com/BerriAI/litellm/pull/36717) — Adds `meta/muse-spark-1.2` to the cost map at $1.25/$4.25 per M tokens, plus the cheaper contributor SKU; also enables the `reasoning_effort` parameter.
- [PR #36704](https://github.com/BerriAI/litellm/pull/36704) — Parallel AI grows from search-only to a full chat + OpenAI Responses-compatible provider, with nested v1 search params (`after_date`, `fetch_policy`, `location`).
- [Issue #23388](https://github.com/BerriAI/litellm/issues/23388) (closed) — Priority/flex pay-as-you-go pricing now supported for `gemini-2.5-flash` and `gemini-2.5-flash-lite` on Vertex AI.
- [PR #24613](https://github.com/BerriAI/litellm/pull/24613) (closed, stale) — HPC AI provider addition; not merged.

No CUDA/ROCm/Metal/CPU or quantization work appears in this dataset.

## 4. Performance & Optimization

- [PR #36578](https://github.com/BerriAI/litellm/pull/36578) — Complexity-router classifier rubric is re-calibrated with worked examples, selectable per router. The old top tier ("non-trivial code, multi-step technical work") matched the *median* developer/agent request, so routine engineering traffic was routing to the most expensive tier. This is a direct cost optimization for agent workloads.
- [PR #36595](https://github.com/BerriAI/litellm/pull/36595) — OTEL spans for Prisma database work are now attributed to the PostgreSQL peer instead of `localhost`, fixing APM misattribution caused by Prisma's loopback Rust query engine. Observability fix, not a throughput change.
- [Issue #27955](https://github.com/BerriAI/litellm/issues/27955) (open) — `max_parallel_requests` counter in Redis **monotonically increases** when clients cancel streaming `/v1/messages` requests mid-stream, eventually rejecting all traffic. No fix PR yet; worth monitoring if you use the Anthropic adapter with aggressive client-side cancellation.

## 5. Stability & Regressions

Ranked by severity:

1. **Critical — response leakage in Redis Cluster** ([#25447](https://github.com/BerriAI/litellm/issues/25447), closed). Responses occasionally returned to the wrong client in a distributed OpenShift + Redis Cluster setup. Data-isolation violation; verify your deployment carries the fix.
2. **Security — token hash leak in 429s** ([#27884](https://github.com/BerriAI/litellm/issues/27884), open). Parallel-request limiter error bodies include the full 64-char SHA-256 hash of the offending virtual key, enabling offline cracking for low-entropy keys.
3. **High — SSE crash on empty-`choices` chunk** ([#36553](https://github.com/BerriAI/litellm/issues/36553), closed). `_should_start_new_content_block` unconditionally indexes `chunk.choices[0]`; usage-only chunks from OpenAI-format backends crash `/v1/messages` streaming.
4. **High — Bedrock guardrail + Anthropic streaming 500** ([PR #36598](https://github.com/BerriAI/litellm/pull/36598)). Bedrock guardrail SSE frames are unreadable by the stream assembler; fix scans and re-emits raw SSE in the post-call hook.
5. **High — `max_parallel_requests` counter leak** ([#27955](https://github.com/BerriAI/litellm/issues/27955), open). Self-inflicted availability regression for Anthropic-adapter users; see Performance.
6. **Medium — Xiaomi MiMo `output_config` failure** ([#24549](https://github.com/BerriAI/litellm/issues/24549), open). `MiMo-V2-Pro`/`MiMo-V2-Omni` calls via Claude Code fail in `AsyncCompletions.create()`.
7. **Medium — blank assistant message after tool calls** ([#31553](https://github.com/BerriAI/litellm/issues/31553), open). Observed with DeepSeek chat completions through the gateway.
8. **Medium — no Python 3.13 wheel for 1.96.1** ([#36526](https://github.com/BerriAI/litellm/issues/36526), closed).
9. **Medium — Ollama `reasoning_content` always null** ([#27956](https://github.com/BerriAI/litellm/issues/27956), open). Thinking traces from Qwen3/DeepSeek-R1 variants are lost for downstream observability (Langfuse, etc.).
10. **Medium — spend log row loss** ([#34826](https://github.com/BerriAI/litellm/pull/34826), [#34950](https://github.com/BerriAI/litellm/pull/34950), [#36716](https://github.com/BerriAI/litellm/pull/36716)). Fix PRs requeue dropped batches on cancelled flushes, proxy shutdown, and Prisma transport errors (P1001 previously escaped the retry clause).
11. **Medium — router models delist from `/v1/models`** ([#33168](https://github.com/BerriAI/litellm/issues/33168), closed). DB-stored auto-router/complexity-router models permanently disappear from model listings after update/delete.
12. **Low/Medium — guardrails & MCP UI issues**: `litellm_content_filter` evaluations missing from Guardrails Monitor ([#36566](https://github.com/BerriAI/litellm/issues/36566), open); custom MCP server creation fails in UI ([#23869](https://github.com/BerriAI/litellm/issues/23869)); mcp-block guardrail cannot be created from policy template ([#30953](https://github.com/BerriAI/litellm/issues/30953)).

Also closed today: OCI Gemini tool-call exception ([#18654](https://github.com/BerriAI/litellm/issues/18654)), Responses API streaming omitting required SSE setup events ([#20975](https://github.com/BerriAI/litellm/issues/20975)), LiteLLM_Config table overwriting newly deployed config ([#12875](https://github.com/BerriAI/litellm/issues/12875)), and OpenAI pricing incorrectly applied to Azure GPT-5.6 terra/luna cost rows ([#36192](https://github.com/BerriAI/litellm/issues/36192)).

## 6. What This Means for Application Developers

- **Spend data is becoming more trustworthy** — the spend-log requeue PRs directly address silent billing gaps; upgrade once they land.
- **Review the Redis Cluster cross-talk fix before scaling out.** If you run multiple replicas with Redis Cluster, [#25447](https://github.com/BerriAI/litellm/issues/25447) is a must-read.
- **Anthropic/Claude Code users face two caveats**: `max_parallel_requests` leaks on client-side stream cancellation (watch Redis counters), and usage-only SSE chunks can crash `/v1/messages` streaming. The Bedrock-guardrail 500 fix is in review.
- **API ergonomics improvements are in flight**: missing body params will return 400 instead of opaque 500s ([#35849](https://github.com/BerriAI/litellm/pull/35849)), and responses will expose the actually-served model after router fallback ([#25503](https://github.com/BerriAI/litellm/issues/25503), closed).
- **Tagged pre-routing strategies are being fixed** ([#36627](https://github.com/BerriAI/litellm/pull/36627)): untagged requests were captured by tagged strategies and routed to tiers they never opted into.
- **New integrations to evaluate**: Parallel AI as a search-capable chat provider ([#36704](https://github.com/BerriAI/litellm/pull/36704)) and Meta Muse Spark 1.2 pricing ([#36717](https://github.com/BerriAI/litellm/pull/36717)).
- **Cohere multimodal embeddings are being fixed** ([#36715](https://github.com/BerriAI/litellm/pull/36715), [#36692](https://github.com/BerriAI/litellm/pull/36692)); mixed image+text inputs currently fail with provider validation errors on Cohere Embed v4.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth Digest — 2026-08-13

## 1. Today's Highlights

No new releases landed in the last 24 hours; activity is concentrated on hardening the Unsloth Studio/Desktop layer. The main themes are AMD GPU detection and backend reconciliation ([#8620](https://github.com/unslothai/unsloth/pull/8620), [#8606](https://github.com/unslothai/unsloth/pull/8606)), Windows installer/AV false-positive fixes ([#8586](https://github.com/unslothai/unsloth/pull/8586), [#8592](https://github.com/unslothai/unsloth/pull/8592)), and macOS llama-server startup fixes ([#8574](https://github.com/unslothai/unsloth/pull/8574)). New hardware detection work adds the Radeon AI PRO R9700 (gfx1201) ([#8573](https://github.com/unslothai/unsloth/pull/8573)) and clarifies that ROCm does not support RDNA1 GPUs such as the RX 5700 XT ([#8577](https://github.com/unslothai/unsloth/pull/8577)).

## 2. Releases & Breaking Changes

None. No new releases were published in the last 24h; no API/config migration notes.

## 3. New Model & Hardware Support

- **Radeon AI PRO R9700 (gfx1201) detection**: PR [#8573](https://github.com/unslothai/unsloth/pull/8573) adds detection for this card, which previously fell through name inference and installed CPU-only PyTorch.
- **ROCm/RDNA1 clarification**: PR [#8577](https://github.com/unslothai/unsloth/pull/8577) changes the installer message for RX 5700 XT and other RDNA1 parts from “install the HIP SDK” to explicitly stating ROCm does not cover RDNA1, avoiding a dead-end fix path. See issue [#8529](https://github.com/unslothai/unsloth/issues/8529).
- **MiniMax-H3**: PR [#8570](https://github.com/unslothai/unsloth/pull/8570) vets the stable-diffusion.cpp binary for MiniMax-H3 support before allowing the H3 bundle download. This addresses the failure in [#8507](https://github.com/unslothai/unsloth/issues/8507), where the bundled `/usr/bin/sd` predated MiniMax-H3.
- **MiniMax-M3 GGUF**: Issue [#8513](https://github.com/unslothai/unsloth/issues/8513) reports missing indexer keys when loading `unsloth/MiniMax-M3-GGUF` in Studio on macOS; no fix PR yet.
- **DeepReinforce Ornith-1.0**: Open feature request [#6721](https://github.com/unslothai/unsloth/issues/6721) asks for optimized Unsloth variants or compatibility support.

## 4. Performance & Optimization

- **Tunable VRAM budget fraction**: PR [#8589](https://github.com/unslothai/unsloth/pull/8589) makes the Studio VRAM reserve configurable. Context: a 2x RTX 3090 user was offered 175k context where LM Studio offered 200–250k; the PR breaks down real costs such as `--parallel 4` slot logits and the 2049 MiB compute buffer. This should allow higher context on multi-GPU setups while keeping a user-controlled safety margin.
- **Live prompt/generation speed**: Feature request [#8528](https://github.com/unslothai/unsloth/issues/8528) asks Studio’s API tab to show live prompt processing speed, not just generation speed after completion.
- **GGUF tool-loop reasoning**: PR [#8581](https://github.com/unslothai/unsloth/pull/8581) preserves pre-tool reasoning text inside the GGUF tool loop, preventing repeated web searches when a tool call follows earlier reasoning.
- **Studio CUDA CI**: PR [#8489](https://github.com/unslothai/unsloth/pull/8489) adds the first real CUDA coverage for Studio using a Kaggle T4, and PR [#8440](https://github.com/unslothai/unsloth/pull/8440) runs deterministic notebook smoke tests on real Kaggle T4s to catch Turing-specific regressions.

## 5. Stability & Regressions

Ranked by severity; fix PRs are noted where they exist.

- **AMD installer/backend mismatch**: Studio reports an AMD GPU while the backend runs CPU-only, with no reconciliation ([#8473](https://github.com/unslothai/unsloth/issues/8473)). Fixes: PR [#8620](https://github.com/unslothai/unsloth/pull/8620) adds a PyTorch GPU-visibility check; PR [#8606](https://github.com/unslothai/unsloth/pull/8606) reconciles GPU reporting with the installed PyTorch wheel.
- **RAG embedder startup segfault on ROCm**: Issue [#7331](https://github.com/unslothai/unsloth/issues/7331) — warmup crash on AMD Radeon 8060S (gfx1100). PR [#8609](https://github.com/unslothai/unsloth/pull/8609) contains RAG embedder torch allocation crashes so a mismatched ROCm stack fails on first RAG use instead of killing Studio.
- **Windows installers blocked by EDR / AppLocker / Smart App Control**: Issues [#8523](https://github.com/unslothai/unsloth/issues/8523) and [#8490](https://github.com/unslothai/unsloth/issues/8490). Fix PRs: [#8586](https://github.com/unslothai/unsloth/pull/8586) reduces antivirus false positives in desktop installers; [#8592](https://github.com/unslothai/unsloth/pull/8592) stops depending on the generated unsigned `unsloth.exe` console script.
- **macOS llama-server startup failure / idle RAM**: Issue [#8566](https://github.com/unslothai/unsloth/issues/8566) — M4 Mac cannot load local GGUF models; error misdiagnoses the GGUF/memory. PR [#8574](https://github.com/unslothai/unsloth/pull/8574) sets `DYLD_LIBRARY_PATH` for llama-server on macOS and classifies startup failures better.
- **Windows login autostart broken**: Issue [#8510](https://github.com/unslothai/unsloth/issues/8510) referenced by PR [#8575](https://github.com/unslothai/unsloth/pull/8575) — autostart launches from `C:\Windows\system32`, leaving a tray icon with no server.
- **AMD GPU detection regressions**: RX 5700 XT not recognized in Desktop ([#8529](https://github.com/unslothai/unsloth/issues/8529)); Linux AppImage misses AMD RX 7600 ([#8471](https://github.com/unslothai/unsloth/issues/8471)); latest llama.cpp build broke AMD GPU detection ([#7485](https://github.com/unslothai/unsloth/issues/7485)); VRAM reading stops on RDNA3 ([#7452](https://github.com/unslothai/unsloth/issues/7452)). Fix PRs exist only for the RDNA1 messaging path ([#8577](https://github.com/unslothai/unsloth/pull/8577)).
- **MiniMax-M3 GGUF load failure**: Missing indexer keys; Studio’s bundled llama.cpp (`b10360`) is out of sync with HF quants ([#8513](https://github.com/unslothai/unsloth/issues/8513)).
- **Linux AppImage missing system libraries**: “Unsloth cannot start because required Linux libraries are missing” ([#8463](https://github.com/unslothai/unsloth/issues/8463)).
- **OpenRouter free models fail with “Insufficient credits”**: [#8518](https://github.com/unslothai/unsloth/issues/8518).
- **Context leaks between sessions/harnesses when using Unsloth as API backend**: [#8442](https://github.com/unslothai/unsloth/issues/8442).
- **Private dataset metadata does not pass HF token**: [#4962](https://github.com/unslothai/unsloth/issues/4962).
- **CI/main regressions**: Desktop auth health test dies during import ([#8590](https://github.com/unslothai/unsloth/pull/8590)); Intel Mac install leg falsely asserts torch availability ([#8631](https://github.com/unslothai/unsloth/pull/8631)).

## 6. What This Means for Application Developers

- **AMD users should verify the actual PyTorch backend after installation or update.** The installer may print `gpu AMD ROCm` while the backend is CPU-only. Watch for PRs [#8620](https://github.com/unslothai/unsloth/pull/8620) and [#8606](https://github.com/unslothai/unsloth/pull/8606); until they land, check `torch.cuda/hip` availability inside the Studio venv. RDNA1 users (RX 5700 XT) should expect GGUF/CPU-only mode, not ROCm acceleration.
- **Windows enterprise deployments:** current installers may be blocked by AppLocker/WDAC/Smart App Control because they rely on a generated `unsloth.exe` and large PowerShell scripts. PRs [#8592](https://github.com/unslothai/unsloth/pull/8592) and [#8586](https://github.com/unslothai/unsloth/pull/8586) address this; until then, plan on adding installer exceptions.
- **MiniMax-H3 users:** the Studio H3 path is being hardened so the download is refused early when the bundled `stable-diffusion.cpp` cannot run it ([#8570](https://github.com/unslothai/unsloth/pull/8570)). Keep an eye on model-specific GGUF compatibility for MiniMax-M3 ([#8513](https://github.com/unslothai/unsloth/issues/8513)).
- **Agent/tool-loop builders:** PR [#8630](https://github.com/unslothai/unsloth/pull/8630) adds a Studio-owned local-tool loop for vLLM, Ollama, llama.cpp and custom OpenAI-compatible endpoints, with per-connection opt-in. PR [#8581](https://github.com/unslothai/unsloth/pull/8581) fixes a real agent issue where reasoning before a tool call was dropped, causing repeated tool invocations.
- **Context/VRAM tuning:** if you target maximum context on multi-GPU boxes, PR [#8589](https://github.com/unslothai/unsloth/pull/8589) will expose a tunable VRAM budget fraction. On current builds, Studio’s conservative reserve may under-report achievable context compared to LM Studio.
- **No release today.** Most fixes are on `main` as open PRs; application developers relying on desktop/Studio behavior should wait for the next beta or track these specific PRs.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*