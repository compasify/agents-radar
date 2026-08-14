# AI Infrastructure Digest 2026-08-14

> Generated: 2026-08-14 00:59 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# Cross-Project AI Infrastructure Comparison Report — 2026-08-14

## 1. Ecosystem Overview

The inference stack is in a familiar pre-stabilization phase: no major serving releases in the last 24 hours, but heavy feature velocity across DeepSeek-V4 / Kimi-K3 enablement, speculative-decoding (spec-decode) robustness, and AMD/ROCm maturation. vLLM and SGLang are locked in a frontier-kernel race (HiSparse sparse-MLA, DSpark, gfx950 fusions), while llama.cpp ships 10 incremental builds and expands backend breadth. The gateway layer (LiteLLM) is consolidating around billing/access-control correctness, and Unsloth's new Desktop app extends fine-tuning tooling into local deployment. Across every layer, agentic workloads are surfacing real defects: multi-node deadlocks, tool-call streaming corruption, and KV-cache reuse limitations.

## 2. Activity Comparison

| Project | Digest-cited Issues | Digest-cited PRs | Releases (24h) | Layer |
|---|---|---|---|---|
| vLLM | 19 | 17 | None | Serving engine |
| SGLang | 23 | 13 | None | Serving engine |
| llama.cpp | 8 | 22 | 10 builds (b10411–b10423) | Local runtime / library |
| Ollama | 16 | 12 | None | Local runtime |
| LiteLLM | 12 | 15 | v1.98.0-dev.2 | Gateway / proxy |
| Unsloth | 14 | 13 | v0.1.702-beta | Fine-tuning + desktop |

*Counts reflect issues/PRs referenced in today's digests, not full repo totals.*

Notable: llama.cpp's release cadence is an order of magnitude higher than the serving engines — expected for a continuous-build library, but it also means Vulkan/SYCL regressions ship hot. vLLM and SGLang carry the highest issue-severity load, dominated by spec-decode crashes and multi-node failures. Both have zero merged fixes for their top-severity bugs today.

## 3. Model Support Race

- **vLLM — ahead on frontier kernel enablement.** Landed Muse Glimmer (29.6B VLM + DFlash spec-decode), Gemma4-E2B per-layer config support, B12X SM120/SM121 kernels, and the HiSparse host-resident sparse-MLA design for DeepSeek-V4 on B300. Kimi-K3 decode-context parallelism via DSpark is in-progress.
- **SGLang — tied on models, ahead on AMD.** DeepSeek-V4 functional enablement largely complete (W4A16/Marlin), Kimi-K3 day-0 tracked, Nano v3 / Nemotron 3.5 spec-decode added. The MI355X (gfx950) path is the most mature of any project — fused mHC kernels, MXFP4 requantization, AITER DCP backend.
- **llama.cpp — most agile on edge backends.** Shipped OpenVINO gpt-oss MoE/MXFP4, Metal TQ2_0, MTP draft auto-detection; MiniMax-Text-01 and Kimi-K3 PRs in flight. This is the project to watch for long-tail architecture coverage.
- **LiteLLM — won the model-catalog race.** Gemini 3.1 Flash Lite Image (with 1K-image pricing), Veo 3.1 Lite, Lyria, Grok 4.3, and OpenAI realtime-translation audio models. The gating factor is now billing correctness, not coverage.
- **Ollama — lagging on frontier, leading on platform integration.** Nemotron-H MLX vision landed, but no day-0 frontier play; the emphasis is Launch integrations (DeepSeek Harness, Muse Code) and Apple Silicon.

**Verdict:** vLLM and SGLang are effectively tied on frontier serving, with vLLM ahead on NVIDIA (B300, SM120) and SGLang ahead on AMD. Treat all new-model support as preview-grade until formal verification lands.

## 4. Performance Frontier

- **KV-cache & attention:** The two headlines are vLLM's HiSparse host-resident sparse-MLA hot-buffering (preliminary B300 gains for DeepSeek-V4) and SGLang's fused `mhc_post`+`mhc_pre` kernel across the attention/MoE boundary (+0.8–1.8% MI355X output throughput). SGLang's agentic KV-cache reuse RFCs (#27574, #30928) signal that RadixAttention's byte-identical-offset model is being redesigned for shared-prompt agent workloads.
- **Speculative decoding:** The dominant risk area everywhere. vLLM is fighting DSD baseline-tax cliffs and MTP slowdowns vs no-spec baselines; llama.cpp is making spec setup turnkey (MTP auto-detection, backend sampling for dflash/dspark); SGLang landed stochastic tree verification. Correctness — not raw speed — is the current bottleneck.
- **Quantization:** Ternary TQ2_0 on Metal and MXFP4/NVFP4 across OpenVINO/CUDA SM120 (llama.cpp); NVFP4→MXFP4 online requantization on MI355X (SGLang). Low-bit formats are becoming default expectations, with FP8/triple-level granularity now common.
- **Distributed serving:** Multi-node stability is the weakest link — vLLM's 4-node idle stall (#51921) and SGLang's DSpark rank-divergence deadlock (#33289) are both unfixed. Kernel-level distro work (NCCL 2.29–2.30.7 EP, NIXL fail-closed error handling) is proceeding in parallel.
- **Hardware breadth:** AMD gfx950 and gfx942 kernel work leads (SGLang AITER, vLLM FlyDSL); NVIDIA SM120/SM121 is being productized (vLLM B12X); Windows-on-Arm NEON is finally being fixed (Ollama); SYCL host pinned memory landed (llama.cpp).

## 5. Layer Positioning

- **vLLM / SGLang — production serving engines.** Datacenter-scale, multi-node, multi-GPU; compete on day-0 frontier-model support, kernel-level perf, and spec-decode sophistication. Their adopters accept regression risk (0.26→0.27 regressions, idle stalls) in exchange for the latest architecture enablement.
- **llama.cpp — portable library + CLI substrate.** Maximum backend breadth (CUDA, Metal, Vulkan, SYCL, OpenVINO, ROCm, Hexagon) with a continuous build model. It is the performance substrate under Ollama and many edge deployments, and increasingly a reference for how fast new quant formats and backends can ship.
- **Ollama — consumer/local runtime product.** Prioritizes UX, Apple Silicon (MLX), and agent-client integrations over frontier-model speed. The friction is visible in this digest: MLX structured outputs silently ignored, Claude Code integration rough edges, token corruption after 0.32.2.
- **LiteLLM — gateway / control plane.** Owns routing, spend tracking, access control, MCP server auth, and model catalog metadata. This is where cost-accuracy and permission-residue bugs have direct financial and security impact — the Azure GPT-5.6 cost-map error and PTU double-billing are production-audit-level findings.
- **Unsloth — fine-tuning + desktop deployment.** Unique layer straddle. The v0.1.702-beta Desktop app makes it an OpenAI-compatible local API endpoint, but the open issues (GGUF export now requiring 16-bit re-download, MLX models missing from `/v1/models`, 127.0.0.1-only binding) mark it as pre-production for deployment use.

## 6. Trend Signals

1. **Speculative decoding is the new correctness frontier.** Every inference engine touched it today; every one has open bugs (illegal memory access, PP+spec wrong outputs, throughput cliffs at batch thresholds). Enable it selectively per deployment — do not make it a global default.
2. **Agentic workloads are forcing redesigns across layers.** KV-cache reuse (SGLang), streaming tool-call fragment handling (Unsloth), MCP OAuth and tool-grant sync (LiteLLM), and multi-turn stability (vLLM's gpt-oss HarmonyError) are all agent-driven. Expect the next several weeks to be defined by agent-serving hardening, not new features.
3. **The DeepSeek-V4 / Kimi-K3 generation is the new benchmark.** All three inference engines are actively enabling these architectures, but support is partial and hardware-specific — W4A16 on Hopper, HiSparse on B300, ROCm enablement checklists. Budget for 2–4 weeks of validation before treating them as production-ready.
4. **AMD/ROCm is graduating from port to product.** gfx950-specific fused kernels, ROCm 7.2.4 Docker flavors, and Strix Halo VRAM fixes show real investment — but the long tail of small bugs (HiCache degradation, iGPU auto-selection crashes) means AMD still requires per-workload validation.
5. **Multi-node reliability is the weakest link in production serving.** The two highest-severity open bugs across all projects are multi-node deadlocks/stalls (vLLM #51921, SGLang #33289). Any multi-node deployment needs independent watchdog and health-check logic — monitor `num_requests_running` after idle periods and add restart-on-wedge automation.
6. **Gateway control-plane correctness is catching up to feature velocity.** LiteLLM's Azure price-propagation error, PTU double-billing, and access-residue cleanup are the visible wave of a broader trend: as AI spend scales, finance and security teams are auditing the control plane as strictly as the data plane.
7. **Local AI is bifurcating into three tiers.** llama.cpp (performance substrate), Ollama (consumer product), Unsloth Desktop (training-to-deployment bridge). All are converging on the same requirement: drop-in OpenAI/Anthropic-compatible APIs that agent clients can rely on — and today, none of them fully deliver that reliably.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest — 2026-08-14

## 1. Today's Highlights

No vLLM releases shipped in the last 24 hours; activity centered on speculative-decoding correctness, DeepSeek-V4/Kimi-K3 enablement, and multi-node stability. A new v0.27.0 idle-stall regression on 4-node TP=4 ([#51921](https://github.com/vllm-project/vllm/issues/51921)) and several MTP/spec-decode crash reports dominate the bug tracker, while [PR #51323](https://github.com/vllm-project/vllm/pull/51323) brings a HiSparse host-resident sparse-MLA hot-buffering design for DeepSeek-V4 with preliminary B300 results. On the model side, support landed for Muse Glimmer, a 29.6B vision-language model with DFlash speculative decoding ([PR #51655](https://github.com/vllm-project/vllm/pull/51655)).

## 2. Releases & Breaking Changes

No new releases and no breaking config/API changes were announced in the last 24 hours. Note two upgrade-regression reports covered in Stability below: deepseek-v4 flash failures on 0.26.0 → 0.27.0 ([#51758](https://github.com/vllm-project/vllm/issues/51758)) and Gemma4 startup failure in the latest docker image ([#51744](https://github.com/vllm-project/vllm/issues/51744)).

## 3. New Model & Hardware Support

- [PR #51655](https://github.com/vllm-project/vllm/pull/51655) — **Muse Glimmer**: dense 29.6B vision-language model with ViT-G/14 perception encoder, 128K context, channel-scoped reasoning, ATEM tool-call parsers, and DFlash speculative decoding support.
- [PR #52016](https://github.com/vllm-project/vllm/pull/52016) — **B12X dense linear kernels** for NVIDIA SM120/SM121, integrated through existing linear-backend interfaces (optional `vllm[b12x]` dependency).
- [PR #52188](https://github.com/vllm-project/vllm/pull/52188) — **Kimi-K3 decode context parallelism with DSpark**: FlashinferMLA + Tokenspeed as target causal attention backend, Tokenspeed as draft non-causal backend; GSM8k validation.
- [PR #51323](https://github.com/vllm-project/vllm/pull/51323) — **HiSparse host-resident sparse-MLA decode hot-buffering** for DeepSeek-V4: hierarchical device-resident KV cache + hot buffer + host cache; supersedes #46326, preliminary B300 results.
- [PR #52206](https://github.com/vllm-project/vllm/pull/52206) — **Gemma4-E2B heterogeneous per-layer config support** (transformers 5.x stores `head_dim` per-layer, breaking uniform attribute access).
- [PR #48666](https://github.com/vllm-project/vllm/pull/48666) — **Gemma-4 FA4 FP8 kernel**: wires the FA4 CuTeDSL kernel with FP8-KV-dequant path for SM90 (closed/merged-ready).
- ROCm trackers: [Issue #50682](https://github.com/vllm-project/vllm/issues/50682) (Kimi-K3 Gap and Roadmap Tracking) and [Issue #41820](https://github.com/vllm-project/vllm/issues/41820) (DeepSeek-V4 on ROCm: mHC/HCA/CSA/MoE/MTP enablement checklist).

## 4. Performance & Optimization

- [PR #51323](https://github.com/vllm-project/vllm/pull/51323) — HiSparse sparse-MLA decode hot-buffering shows preliminary gains on B300 for DeepSeek-V4.
- [PR #49171](https://github.com/vllm-project/vllm/pull/49171) — Model Runner V2: skip logits/sampling rows for unfinished chunked-prefill requests in the common non-speculative path.
- [PR #49544](https://github.com/vllm-project/vllm/pull/49544) — ROCm gfx942: replace vendored Triton fp8 MQA logits with FlyDSL kernel; results for GLM-5.2-FP8 on 8× MI325X TP8 at ISL=128K.
- [PR #48877](https://github.com/vllm-project/vllm/pull/48877) — Opt-in eager PyNccl TP all-reduce split for PIECEWISE CUDA graphs (default off; TP all-reduce runs eagerly on the current model stream).
- [Issue #49986](https://github.com/vllm-project/vllm/issues/49986) — Dynamic SD (DSD) arms pay a large baseline tax vs no-spec under production defaults; PIECEWISE CUDA-graph override identified as one factor.
- [Issue #49548](https://github.com/vllm-project/vllm/issues/49548) — `num_speculative_tokens_per_batch_size` causes catastrophic aggregate-throughput collapse at the batch-size threshold (Qwen3.5-122B MTP, k=2).
- [Issue #47277](https://github.com/vllm-project/vllm/issues/47277) — Qwen3.5 native MTP can be slower than no-MTP CUDA-graph baseline despite 82–88% acceptance.
- [Issue #38175](https://github.com/vllm-project/vllm/issues/38175) — RFC tracker for full ViT CUDA graph support (Qwen3-VL, GLM-V, Kimi K2.5 production serving).
- [Issue #29134](https://github.com/vllm-project/vllm/issues/29134) — Fully async spec-decoding: remove Host↔GPU syncs (`seq_lens_cpu`) in the spec-decode path.
- [Issue #49413](https://github.com/vllm-project/vllm/issues/49413) — RFC: KV-offload event path refactor (provenance-carrying events, key-only removals); [PR #51576](https://github.com/vllm-project/vllm/pull/51576) adds `TieringAdmissionPolicy` skeleton (factory/base/always).
- [PR #52233](https://github.com/vllm-project/vllm/pull/52233) — Cache DSpark adaptive verification profiles to eliminate five calibration replays per shape per engine boot.

## 5. Stability & Regressions

Ranked by severity:

1. **[#51921](https://github.com/vllm-project/vllm/issues/51921)** — v0.27.0 engine permanently stalls after ~1 min idle on 4-node TP=4 (GB10/sm_121a, aarch64): `shm_broadcast` writer starves, requests never reach scheduler. No fix PR referenced yet.
2. **[#51758](https://github.com/vllm-project/vllm/issues/51758)** — Upgrade regression 0.26.0 → 0.27.0: DeepSeek V4 flash error on startup.
3. **[#40756](https://github.com/vllm-project/vllm/issues/40756)** — MTP speculative decoding: illegal memory access on long sequences (Qwen3.6-27B-FP8, v0.19.1; 36 comments, still open).
4. **[#52071](https://github.com/vllm-project/vllm/issues/52071)** — Speculative decoding under pipeline parallelism produces wrong output with `--no-async-scheduling` (PP 2/4/8, two spec methods, two model families, `VLLM_USE_V2_MODEL_RUNNER=1`).
5. **[#51744](https://github.com/vllm-project/vllm/issues/51744)** — `vllm/vllm-openai:latest` fails to start Gemma4 with Transformers 5.15.0 (14 comments, 5 👍).
6. **[#41623](https://github.com/vllm-project/vllm/issues/41623)** — Decode Context Parallelism (`--decode-context-parallel-size`) output drift and gibberish in v0.21.0 and latest nightly.
7. **[#37035](https://github.com/vllm-project/vllm/issues/37035)** — `cudaErrorIllegalAddress` in `gdn_attn.py:237` with `qwen3_next_mtp`, `num_speculative_tokens=5` under load.
8. **[#49893](https://github.com/vllm-project/vllm/issues/49893)** — `SpeculativeConfig(method="draft_model")` cannot load mixed-precision compressed-tensors checkpoints (`config_groups`).
9. **[#23567](https://github.com/vllm-project/vllm/issues/23567)** — gpt-oss-120b multi-turn `HarmonyError: unexpected tokens remaining in message header` (v0.10.1/v0.10.1.1; long-standing, 47 comments, 22 👍).

Fix PRs in flight: [#51599](https://github.com/vllm-project/vllm/pull/51599) decouples async Mamba align D2H counts from InputBatch row shifts (closes #51571); [#52232](https://github.com/vllm-project/vllm/pull/52232) makes NIXL fail closed on HMA receive errors; [#52206](https://github.com/vllm-project/vllm/pull/52206) fixes Gemma4-E2B heterogeneous per-layer configs; [#52020](https://github.com/vllm-project/vllm/pull/52020) rejects empty JSON schemas in structured outputs (fixes #52011); [#50620](https://github.com/vllm-project/vllm/pull/50620) includes NIXL push/pull transfer mode in the compatibility hash.

Closed this window: [#29341](https://github.com/vllm-project/vllm/issues/29341) (sleep level 2 gibberish), [#41092](https://github.com/vllm-project/vllm/issues/41092) (Quark MXFP4 corruption on MI355), and [#52070](https://github.com/vllm-project/vllm/pull/52070) — EAGLE cache-hit drop workaround withdrawn because it changes greedy tokens; the correctness path is [#50897](https://github.com/vllm-project/vllm/pull/50897).

## 6. What This Means for Application Developers

- **Pin versions and stage upgrades carefully.** The 0.26 → 0.27 line carries known regressions — DeepSeek V4 flash failures, Gemma4 startup with Transformers 5.15, and the multi-node idle stall ([#51921](https://github.com/vllm-project/vllm/issues/51921)). Validate with your exact model + image before rollout.
- **Speculative decoding remains the highest-risk feature area.** MTP illegal-memory-access crashes, PP+spec-decode wrong outputs, and DSD throughput cliffs at batch-size thresholds mean you should cap `num_speculative_tokens` or disable dynamic schedules if you see unexplained stalls, quality drift, or illegal-address faults.
- **Multi-node operators need idle health checks.** The v0.27.0 GB10 4-node bug means a long-idle engine can silently stop scheduling while still answering `/v1/models`; monitor `num_requests_running` after idle periods.
- **Structured outputs get safer.** Empty JSON schema rejection ([#52020](https://github.com/vllm-project/vllm/pull/52020)) closes a runaway number-generation loop.
- **DeepSeek-V4 / Kimi-K3 on ROCm are in active enablement.** Expect incremental kernel-level gains (FlyDSL logits, AITER fused MoE, DCP/DSpark backends) rather than a single monolithic fix; track [#41820](https://github.com/vllm-project/vllm/issues/41820) and [#50682](https://github.com/vllm-project/vllm/issues/50682) if you operate these stacks.
- **New-model support is moving fast but is preview-grade.** Muse Glimmer, Gemma4-E2B, and Kimi-K3 DCP support expand the serving surface; treat early integrations as pre-production until formal verification lands.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest — 2026-08-14

## Today's Highlights
No releases shipped in the last 24 hours; the project is deep in a development cycle dominated by DeepSeek-V4 kernel enablement, AMD/ROCm (MI355X) work, and agentic KV-cache reuse design. The most concrete performance win landed on the AMD path: a fused mHC post+pre kernel on gfx950 delivers **+0.8–1.8% output throughput** on MI355X. On the stability front, three new server-crashing bugs were filed within the last day (mamba+speculative TypeError, diffusion CPU-offload OOM, ROCm HiCache degradation), while several fix PRs are already in flight.

## Releases & Breaking Changes
None — no new releases in the last 24 hours.

## New Model & Hardware Support
- **Kimi K3 roadmap** ([#32607](https://github.com/sgl-project/sglang/issues/32607)): Day-0 support tracked with cookbook, DSpark variant, and LMSYS blog; model support is actively followed via bug tracking issue #32970.
- **DeepSeek V4 roadmap** ([#23602](https://github.com/sgl-project/sglang/issues/23602)): functional enablement largely complete (W4A16 on Hopper, Marlin path); a separate perf-only tracking issue ([#33636](https://github.com/sgl-project/sglang/issues/33636)) now covers SM90/SM10X optimization, including TRT-LLM DSv4 attention integration for SM100/103.
- **Nano v3 / Nemotron 3.5** ([#33554](https://github.com/sgl-project/sglang/pull/33554)): PR adds DFlash and DSpark spec-dec support plus a quantization recipe.
- **AMD/ROCm**: ROCm 7.2.4 Docker flavors with Python 3.12 + PyTorch 2.11 + Triton 3.7 ([#30984](https://github.com/sgl-project/sglang/pull/30984)); online NVFP4→MXFP4 requantization for ModelOpt/Quark checkpoints on MI355X ([#29328](https://github.com/sgl-project/sglang/pull/29328)); DCP support for the AITER backend started ([#34432](https://github.com/sgl-project/sglang/pull/34432)).
- **Free-threaded Python 3.14t (PEP 703)** support requested ([#22889](https://github.com/sgl-project/sglang/issues/22889)).

## Performance & Optimization
- **AMD MI355X (gfx950)**: new fused `mhc_post` + next-layer `mhc_pre` kernel dispatched across the attention/MoE boundary ([#32577](https://github.com/sgl-project/sglang/pull/32577)) — **+0.8–1.8% output throughput across concurrency 4–64** with accuracy preserved; decode-path `wo_a` bf16 batched GEMM routed to AITER `batched_gemm_bf16` ([#33313](https://github.com/sgl-project/sglang/pull/33313)). Shared-experts fusion fixed for top-6 routing ([#32340](https://github.com/sgl-project/sglang/pull/32340)).
- **Startup observability**: DeepGEMM JIT and FlashInfer autotune are currently invisible slack inside `scheduler_e2e`; PR adds attribution to `startup_time` ([#33765](https://github.com/sgl-project/sglang/pull/33765)).
- **Auto-tuner roadmap** ([#13363](https://github.com/sgl-project/sglang/issues/13363)): kernel backend + config tuning (Triton MoE tile sizes, etc.) remains an open item (19 👍).
- **NCCL 2.29–2.30.7 integration roadmap** ([#32774](https://github.com/sgl-project/sglang/issues/32774)): NCCL EP, cross-group M-to-N reshard, zero-SM one-sided communication.
- Open perf questions: fp32 accumulation for TRT-LLM allreduce fusion ([#34603](https://github.com/sgl-project/sglang/issues/34603)), fp32 LM-head GEMM output for RL workloads ([#33627](https://github.com/sgl-project/sglang/issues/33627)), slow FA3 backend with MLA page-size 64 on H20 ([#31310](https://github.com/sgl-project/sglang/issues/31310)).

## Stability & Regressions
Ranked by severity:

- **Multi-node TP rank-divergence deadlock** ([#33289](https://github.com/sgl-project/sglang/issues/33289)): DeepSeek-V4 + DSpark on 2× DGX Spark intermittently wedges — one rank spins in NCCL proxy append (logits all-gather) while the peer idles at request broadcast. No fix PR yet.
- **Diffusion CPU-offload OOM** ([#34772](https://github.com/sgl-project/sglang/issues/34772)): native-fallback component loading silently drops all CPU-offload decisions, causing fatal OOM on 8GB GPUs.
- **Hybrid-mamba + speculative decoding crash** ([#34786](https://github.com/sgl-project/sglang/issues/34786)): TypeError in `set_mamba_track_indices_from_reqs` (`mamba_next_track_idx is None`) during NEXTN TARGET_VERIFY on Qwen3.6-27B-FP8/0.5.14. Duplicate [#34787](https://github.com/sgl-project/sglang/issues/34787) was already closed.
- **ROCm MI355 HiCache broken** ([#34611](https://github.com/sgl-project/sglang/issues/34611)): poor performance for realistic agentic workloads on under-24h-old issue; no fix yet.
- **DSpark CUDA Graph geometry mismatch** ([#34384](https://github.com/sgl-project/sglang/issues/34384)): compact ragged CUDA Graph uses incompatible request-slot geometry for the same token tier.
- **Rust gateway rejects custom tool types** ([#30781](https://github.com/sgl-project/sglang/issues/30781)): `sgl-model-gateway` v0.3.2 rejects `/v1/responses` with `type: "custom"` tools; openai-protocol crate is out of sync with Python `protocol.py`.
- **Scheduler init crash**: `has_hf_quant_config()` fails on local dirs lacking `hf_quant_config.json` — **fix PR in flight** ([#34774](https://github.com/sgl-project/sglang/pull/34774)).
- **Multimodal embedding requests crash** on `main` (`EmbeddingReqInput` missing `mm_content_hashes`) — **fix PR in flight** ([#34769](https://github.com/sgl-project/sglang/pull/34769)).
- **Streaming logprobs KeyError on abort**: abort chunks lack logprob fields, and handlers assemble logprobs before checking `finish_reason` — **fix PR in flight** ([#34776](https://github.com/sgl-project/sglang/pull/34776)).
- **Other reported bugs**: GPT-OSS + `require_reasoning` + `json_schema` emits malformed Harmony ([#31019](https://github.com/sgl-project/sglang/issues/31019)); MoE hidden-size mismatch (`hidden_size=4096`, `moe_intermediate_size=2048`) in `fused_moe_triton` ([#30595](https://github.com/sgl-project/sglang/issues/30595)); closed regressions include flashinfer_trtllm BF16 MoE illegal memory access ([#26715](https://github.com/sgl-project/sglang/issues/26715)) and HiCache watchdog timeout ([#26258](https://github.com/sgl-project/sglang/issues/26258)).
- **CI**: 3 broken / 11 flaky tests as of last auto-update ([#17050](https://github.com/sgl-project/sglang/issues/17050)); ROCm 7.2 `stage-b` unblocked but eval shards fail on ANTLR version — pin PR merged ([#34768](https://github.com/sgl-project/sglang/pull/34768)).

## What This Means for Application Developers
- **Agentic traffic**: two RFCs — programmatic KV cache ([#27574](https://github.com/sgl-project/sglang/issues/27574)) and position-independent KV cache reuse ([#30928](https://github.com/sgl-project/sglang/issues/30928)) — signal that RadixAttention's byte-identical-offset limitations for shared prompts/schemas are being addressed. If you run heavy prefix-sharing agent workloads, expect meaningful caching wins in coming weeks.
- **DeepSeek-V4/DSpark on multi-node**: be prepared for an intermittent NCCL deadlock ([#33289](https://github.com/sgl-project/sglang/issues/33289)) — add watchdog/restart logic until a fix lands. Single-node DSpark also has a CUDA-graph geometry bug ([#34384](https://github.com/sgl-project/sglang/issues/34384)).
- **OpenAI-compatibility edge cases**: the Rust gateway rejecting `custom` tool types affects Codex CLI-style clients ([#30781](https://github.com/sgl-project/sglang/issues/30781)); the streaming-logprobs-on-abort KeyError fix ([#34776](https://github.com/sgl-project/sglang/pull/34776)) matters for any client requesting `logprobs` on long-running streams.
- **AMD/ROCm users**: the MI355X path is maturing quickly (AITER fusions, MXFP4, stochastic tree verification in [#34140](https://github.com/sgl-project/sglang/pull/34140)), but HiCache performance for agentic workloads is currently broken ([#34611](https://github.com/sgl-project/sglang/issues/34611)) — benchmark before relying on it.
- **Stability hygiene**: if you serve from local model dirs, embed requests, or hybrid-mamba models with speculative decoding, the new fix PRs ([#34774](https://github.com/sgl-project/sglang/pull/34774), [#34769](https://github.com/sgl-project/sglang/pull/34769), [#34786](https://github.com/sgl-project/sglang/issues/34786)) are worth tracking for your next `main` pickup.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp Digest — 2026-08-14

## Today's Highlights

Ten builds shipped in the last 24 hours (`b10411`–`b10423`), headlined by Metal TQ2_0 support, OpenVINO gpt-oss MoE/MXFP4 enablement, and SYCL host pinned memory. Speculative decoding became more turnkey via auto-detection of MTP draft model types and GGUF metadata. On the stability side, Vulkan/SYCL regressions continue to be reported, while several targeted fix PRs are in flight for OpenCL flash-attention, Hexagon, CUDA MoE compaction, and server API responsiveness.

## Releases & Breaking Changes

No breaking API or config changes were called out in today's builds. One behavioral change worth noting: `index.html` is now served with `no-cache`, so the server UI will no longer pin stale builds via long-lived cache headers.

- `b10423` — common: apply CPU parameters across tools ([#27026](https://github.com/ggml-org/llama.cpp/pull/27026))
- `b10419` — OpenVINO: Qwen3.5, gpt-oss MoE, MXFP4, memory optimization, FILL/set-rows op support ([#26952](https://github.com/ggml-org/llama.cpp/pull/26952))
- `b10418` — SYCL: host pinned memory support ([#26789](https://github.com/ggml-org/llama.cpp/pull/26789))
- `b10417` — chat: fix LFM2 tool-call argument name prefix ambiguity ([#26960](https://github.com/ggml-org/llama.cpp/pull/26960))
- `b10416` — server: serve `index.html` with `no-cache` ([#27006](https://github.com/ggml-org/llama.cpp/pull/27006))
- `b10415` — spec: auto-detect MTP draft model type ([#27005](https://github.com/ggml-org/llama.cpp/pull/27005))
- `b10414` — Metal: add TQ2_0 ternary 2-bit support ([#26980](https://github.com/ggml-org/llama.cpp/pull/26980))
- `b10413` — common: auto-detect spec type from draft GGUF metadata ([#26814](https://github.com/ggml-org/llama.cpp/pull/26814))
- `b10412` — spec: enable backend sampling for both dflash & dspark ([#26958](https://github.com/ggml-org/llama.cpp/pull/26958))
- `b10411` — ggml-cpu/ops: vectorize flash-attention V-cache F16→F32 conversion ([#26947](https://github.com/ggml-org/llama.cpp/pull/26947))

## New Model & Hardware Support

- **OpenVINO:** gpt-oss MoE and MXFP4 support enabled; Qwen3.5-related coverage plus FILL/set-rows ops landed in ([#26952](https://github.com/ggml-org/llama.cpp/pull/26952)).
- **Metal:** Added TQ2_0 (ternary, 2-bit) quantization support ([#26980](https://github.com/ggml-org/llama.cpp/pull/26980)).
- **SYCL:** Host pinned memory support to improve host-to-device transfer behavior ([#26789](https://github.com/ggml-org/llama.cpp/pull/26789)).
- **Speculative decoding:** MTP draft type auto-detection ([#27005](https://github.com/ggml-org/llama.cpp/pull/27005)), spec type auto-detection from draft GGUF metadata ([#26814](https://github.com/ggml-org/llama.cpp/pull/26814)), and backend sampling for dflash/dspark ([#26958](https://github.com/ggml-org/llama.cpp/pull/26958)).

In-progress model/backend support:

- MiniMax-Text-01 / MiniMax-M1 lightning-attention models ([#27018](https://github.com/ggml-org/llama.cpp/pull/27018))
- Kimi-K3 text model with hybrid attention + latent MoE ([#26185](https://github.com/ggml-org/llama.cpp/pull/26185))
- Experimental CUDA SM120 CUTLASS MoE prefill for MXFP4/NVFP4 ([#26704](https://github.com/ggml-org/llama.cpp/pull/26704))
- Tensor split support for LFM2/LFM2MOE ([#26993](https://github.com/ggml-org/llama.cpp/pull/26993))

## Performance & Optimization

- **FA V-cache conversion vectorized on CPU:** F16→F32 conversion in flash-attention V-cache path now uses vectorized ops ([#26947](https://github.com/ggml-org/llama.cpp/pull/26947)).
- **SYCL pinned memory:** reduces host-to-device copy overhead ([#26789](https://github.com/ggml-org/llama.cpp/pull/26789)).
- **OpenVINO memory optimization:** part of the backend update in ([#26952](https://github.com/ggml-org/llama.cpp/pull/26952)).
- **SYCL FFN fusion in progress:** fusing `mul_mat(gate)` + `mul_mat(up)` + GLU for q4_K dense FFN ([#26779](https://github.com/ggml-org/llama.cpp/pull/26779)).
- **CUDA MMQ fix in progress:** corrects `ids`-path tail-padding sizing for MoE gate/up projections ([#27044](https://github.com/ggml-org/llama.cpp/pull/27044)).
- **Windows hybrid CPU scheduling PR:** filtering E-cores and improving thread affinity on hybrid CPUs ([#27033](https://github.com/ggml-org/llama.cpp/pull/27033)).
- **Jinja parser quadratic cost fix:** addresses `gather_string_parts` performance issue ([#27034](https://github.com/ggml-org/llama.cpp/pull/27034)).
- **Server responsiveness:** `/metrics` and `/slots` access during `llama_decode()` proposed in ([#27041](https://github.com/ggml-org/llama.cpp/pull/27041)).

## Stability & Regressions

Ranked by current severity:

1. **Vulkan DeviceLost on DeepSeek-V4-Flash / Strix Halo** — `vk::DeviceLostError` within a few turns on RADV ([#25664](https://github.com/ggml-org/llama.cpp/issues/25664)). Open and unconfirmed; no fix PR yet.
2. **SYCL garbage on second prompt** — Intel Arc Pro B60, likely SYCL path issue ([#26845](https://github.com/ggml-org/llama.cpp/issues/26845)). Open.
3. **DFlash drafter bind failure** — fails with `vector::_M_range_check` when target GGUF encodes `sliding_window_pattern` as an array; blocks official Muse-Glimmer-30B GGUF with draft models ([#26894](https://github.com/ggml-org/llama.cpp/issues/26894)). Open.
4. **DeepSeek-V4-Flash degeneration on Metal** — repetition and special-token leakage in long agentic chats ([#26694](https://github.com/ggml-org/llama.cpp/issues/26694)). Open.
5. **ROCm gfx1151 RPC worker crash** — `GGML_OP_TOP_K` crash during DeepSeek V4 prefill after 4096 tokens ([#26746](https://github.com/ggml-org/llama.cpp/issues/26746)). Open.
6. **SWA on Gemma 4 forgets key details** — sliding-window attention correctness issue on CUDA ([#25751](https://github.com/ggml-org/llama.cpp/issues/25751)). Open.
7. **Vulkan DeviceLost on AMD APUs** — GPU job timeout due command batch size ([#21724](https://github.com/ggml-org/llama.cpp/issues/21724)). Closed today; watch for recurrence.
8. **CPU mask options ignored** — `--cpu-mask`, `--cpu-range`, `--cpu-strict` reported ignored ([#26997](https://github.com/ggml-org/llama.cpp/issues/26997)). Closed; likely addressed by CPU parameter unification in ([#27026](https://github.com/ggml-org/llama.cpp/pull/27026)).

Open fix PRs to track:

- OpenCL flash-attention WAR race fix ([#26434](https://github.com/ggml-org/llama.cpp/pull/26434))
- Hexagon flash-attention HMX queue ordering + D-matrix packing ([#27042](https://github.com/ggml-org/llama.cpp/pull/27042))
- CUDA duplicate expert-id compaction in `mul_mat_id` ([#26294](https://github.com/ggml-org/llama.cpp/pull/26294))

## What This Means for Application Developers

- **Speculative decoding setup is getting simpler.** MTP/GGUF metadata auto-detection and dflash/dspark backend sampling reduce the need for manual `--spec-type` flags. Upgrade to `b10412`/`b10413`/`b10415` or newer if you deploy draft models.
- **Server UI caching changed.** `index.html` now revalidates with ETag, so remove any immutable-cache assumptions for the llama-server UI ([#27006](https://github.com/ggml-org/llama.cpp/pull/27006)).
- **OpenVINO and SYCL deployments see meaningful backend improvements.** OpenVINO now covers gpt-oss MoE and MXFP4; SYCL users should see lower host-to-device overhead with pinned memory.
- **Vulkan/SYCL users should validate on their target hardware.** The open DeviceLost and second-prompt corruption issues are serious enough to warrant pinning known-good builds, especially on Strix Halo, Intel Arc, and RDNA boards.
- **CPU-affinity behavior is being unified.** If you use `--cpu-mask` / `--cpu-range`, verify behavior after the `b10423` changes.
- **Server observability is improving.** Once merged, `/metrics` and `/slots` will remain accessible during `llama_decode()`, which is valuable for production serving and autoscaling ([#27041](https://github.com/ggml-org/llama.cpp/pull/27041)).

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Digest — 2026-08-14

Source: [ollama/ollama](https://github.com/ollama/ollama) · Data window: last 24h

## 1. Today's Highlights
The main push this cycle is around MLX correctness: structured outputs are being wired into the MLX runner after being silently ignored ([#17690](https://github.com/ollama/ollama/pull/17690), [#17697](https://github.com/ollama/ollama/pull/17697)), and a follow-up PR now rejects rather than silently drops unsupported structured-output requests ([#17232](https://github.com/ollama/ollama/pull/17232)). On the hardware side, a regression fix for AMD Strix Halo VRAM detection in container deployments is up for review ([#17685](https://github.com/ollama/ollama/pull/17685)). Several new Ollama Launch integrations are also landing, including DeepSeek Harness ([#17733](https://github.com/ollama/ollama/pull/17733)) and Muse Code ([#17594](https://github.com/ollama/ollama/pull/17594)).

## 2. Releases & Breaking Changes
No new releases or tagged breaking changes in the last 24 hours.

## 3. New Model & Hardware Support
- **Nemotron-H MLX vision:** PR [#17714](https://github.com/ollama/ollama/pull/17714) adds the RADIO vision encoder and projector to the shared MLX media pipeline, enabling vision for Nemotron-H on Apple Silicon while still suppressing unsupported audio.
- **AMD Strix Halo VRAM detection fix:** PR [#17685](https://github.com/ollama/ollama/pull/17685) addresses the regression where `hipMemGetInfo()` on ROCm 7.2 returns system free RAM instead of GPU VRAM on gfx1151, and adds `OLLAMA_GPU_MEMORY` / `SmallCarveOutIGPU` support. Tracks issue [#16462](https://github.com/ollama/ollama/issues/16462).
- **Windows-on-Arm CPU performance:** PR [#17654](https://github.com/ollama/ollama/pull/17654) sets `GGML_CPU_ARM_ARCH` so the Windows-on-Arm CPU runner is no longer compiled as baseline `armv8-a` (which currently ships zero dot-product / matrix instructions).
- **Multi-file GGUF import is still not supported:** Issue [#5245](https://github.com/ollama/ollama/issues/5245) remains open and unusually popular, with 157 👍 votes. This continues to block easy import of larger sharded GGUF models.
- **Cloud model catalog expansion request:** Issue [#17720](https://github.com/ollama/ollama/issues/17720) asks for Qwen3.8-2.4T-A95B-FP8 in Pro/Max cloud accounts. No commitment yet.

## 4. Performance & Optimization
- **WoA CPU backend:** The current Windows-on-Arm build is missing NEON dot-product/matrix instructions entirely; PR [#17654](https://github.com/ollama/ollama/pull/17654) is a one-line preset fix that should give a significant CPU inference uplift on Windows-on-Arm devices.
- **Flash attention for gpt-oss:** PR [#17477](https://github.com/ollama/ollama/pull/17477) fixes GPT-OSS Q8 crashes at long context by explicitly requesting flash attention when the architecture defaults to it. Previously llama-server's `auto` mode disabled FA under partial offload.
- **MLX generation budget bounded by context window:** PR [#17494](https://github.com/ollama/ollama/pull/17494) fixes an MLX runner hang where open-ended `num_predict` requests were bounded only by the checkpoint's `max_position_embeddings`, not the request's `num_ctx`.
- **Scheduler memory accounting:** PR [#17615](https://github.com/ollama/ollama/pull/17615) mirrors GraphSize KV accounting into `PredictServerVRAM`, addressing Qwen model load failures after the llama-server migration.
- **Download slowness at 99%:** Long-standing issue [#1736](https://github.com/ollama/ollama/issues/1736) was updated again with 75 👍 and 129 comments. Downloads saturate bandwidth (~13 MB/s) until 98–99%, then drop to tens of KB/s for hours. Still no merged fix.

## 5. Stability & Regressions
Ranked roughly by impact:

- **LLM token corruption after v0.32.2:** Issue [#17379](https://github.com/ollama/ollama/issues/17379) reports that llama3.3:70b produces junk tokens on v0.32.2+ in both dev and prod. No fix PR is linked yet; this is potentially abusive to production users.
- **Nemotron3.5-lightning:30b stalls on AMD AI395+:** Issue [#17692](https://github.com/ollama/ollama/issues/17692) — stalls during thinking on Framework Desktop. CTRL+C returns to prompt, but the stall is reproducible.
- **Ollama fails to load models after 0.24.0:** Issue [#17285](https://github.com/ollama/ollama/issues/17285) still affects Docker users on Ryzen 5750G with Vega8; users are pinned to 0.24.0.
- **AMD Strix Halo VRAM regression in container deployments:** Issue [#16462](https://github.com/ollama/ollama/issues/16462) — only 2GB of VRAM detected instead of full unified memory. Fix PR [#17685](https://github.com/ollama/ollama/pull/17685) is open.
- **MLX structured outputs silently ignored:** Issue [#16563](https://github.com/ollama/ollama/issues/16563) is fixed by PR(s) [#17690](https://github.com/ollama/ollama/pull/17690) and [#17232](https://github.com/ollama/ollama/pull/17232), which add grammar/JSON Schema sampling and rejection of unsupported formats, respectively. There are two competing implementations in flight; watch for merge preference.
- **Muse Glimmer leaks control tokens / ignores `response_format`:** Issue [#17684](https://github.com/ollama/ollama/issues/17684) was closed, likely via the Muse Glimmer reasoning template fix in PR [#17732](https://github.com/ollama/ollama/pull/17732).
- **Ollama Launch + Claude Code issues:** Multiple reports:
  - Claude Code gets no response with qwen3-coder:30b on Windows ([#17671](https://github.com/ollama/ollama/issues/17671)).
  - `ollama launch claude` rejects the `[1m]` context-window suffix and doesn't set context for cloud models ([#17584](https://github.com/ollama/ollama/issues/17584)).
  - Unrecognized cloud models like `kimi-k2.7-code:cloud` force Claude Code into a 200k auto-compact window ([#17717](https://github.com/ollama/ollama/issues/17717)).
- **`/api/chat` silently drops audio:** Issue [#17730](https://github.com/ollama/ollama/issues/17730) — audio-capable `gemma4:e4b` accepts `audios`/`audio` fields with HTTP 200 but discards them; the model then claims it received text only. This should arguably be a 4xx rather than a silent success.
- **Ollama crashes at 100% CPU near context limit / truncation:** Issue [#13461](https://github.com/ollama/ollama/issues/13461) remains open for Vulkan/CPU-ish backends.
- **Mac "Restart to update" fails for non-admin users:** Issue [#11972](https://github.com/ollama/ollama/issues/11972) still open.
- **Cloud model list outdated:** Issue [#17725](https://github.com/ollama/ollama/issues/17725) reports `https://ollama.com/v1/models` is missing several cloud models. Closed as likely a docs/API-sync issue.

## 6. What This Means for Application Developers
- **If you rely on JSON Structured Outputs with MLX models, do not use them in production yet.** The current behavior silently returns unconstrained text. The two open PRs ([#17690](https://github.com/ollama/ollama/pull/17690), [#17697](https://github.com/ollama/ollama/pull/17697)) and the rejection PR ([#17232](https://github.com/ollama/ollama/pull/17232)) indicate this is a known, actively-worked gap. Prefer GGUF builds or explicitly validate schema conformance client-side.
- **MLX models with open-ended generation can hang** until PR [#17494](https://github.com/ollama/ollama/pull/17494) lands — always pass an explicit `num_predict` or `num_ctx` in your requests.
- **Ollama Launch is changing quickly.** New integrations (`dsh`, `muse`) are arriving, but Claude Code integration still has rough edges with cloud models: context-window configuration and model-name detection are unreliable. Pin your Ollama version if you depend on a working Claude Code workflow.
- **Watch for `/v1/models` improvements:** PR [#17422](https://github.com/ollama/ollama/pull/17422) adds `context_length` to OpenAI-compatible model metadata, useful for agents that need to reason about model limits. Not merged yet.
- **AMD Strix Halo users in containers should stay on 0.24.x or earlier** until [#16462](https://github.com/ollama/ollama/issues/16462) / [#17685](https://github.com/ollama/ollama/pull/17685) lands.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-08-14

## Today's Highlights
A broad correctness wave landed across team/access-group/key synchronization and MCP multi-worker auth, fixing stale cache grants and dangling references after deletes. The model catalog gained several new entries (Gemini 3.1 Flash Lite Image, Veo 3.1 Lite, Lyria, Grok 4.3), and a guardrails perf PR eliminates ~95% redundant payload bytes for image-heavy Noma v2 scans. Two billing-accuracy issues stand out: Azure GPT-5.6 Terra/Luna cost rows still carry OpenAI's prices, and PTU deployments were double-billing per-token on top of flat capacity.

## Releases & Breaking Changes
- **v1.98.0-dev.2** — Dev release; release notes only document cosign-based Docker image signature verification (same key since commit `0112e53`). No API or config breaking changes noted. [Release](https://github.com/BerriAI/litellm/releases)

## New Model & Hardware Support
- **Gemini 3.1 Flash Lite Image** catalog entries added for unprefixed, `gemini/`, and `vertex_ai/` namespaces, including 1K image pricing — fixes $0 spend logging for image calls. [PR #36849](https://github.com/BerriAI/litellm/pull/36849)
- **Gemini 3.1 Flash TTS** support on Vertex AI. [PR #31915](https://github.com/BerriAI/litellm/pull/31915)
- **Veo 3.1 Lite** model metadata. [PR #30782](https://github.com/BerriAI/litellm/pull/30782)
- **Lyria** model support on Vertex. [PR #30856](https://github.com/BerriAI/litellm/pull/30856)
- **Grok 4.3** metadata for Azure AI Foundry (200k context, cached-input pricing, capability flags), with routing/lookup test coverage. [PR #27932](https://github.com/BerriAI/litellm/pull/27932)
- **OpenAI audio models** for realtime translation: adds translation WebSocket/WebRTC proxy paths and OpenAI SDK 2.52 support; notably, direct WebRTC previously bypassed spend tracking and budget enforcement. [PR #35600](https://github.com/BerriAI/litellm/pull/35600)
- Open request: Telnyx inference pricing (Kimi K2.6, GLM-5.1-FP8) for the cost map. [Issue #28006](https://github.com/BerriAI/litellm/issues/28006)

## Performance & Optimization
- **Noma v2 guardrails payload** no longer forwards `messages`/`input` redundantly — conversations were being sent up to three times per scan; image-heavy requests were ~95% redundant bytes. [PR #36764](https://github.com/BerriAI/litellm/pull/36764)
- **Cost poll starvation fix**: uncostable batches (no model ID, provider-404s) now retire instead of holding poll slots forever, preventing newer batches from going uncosted. [PR #36714](https://github.com/BerriAI/litellm/pull/36714)
- **Off-peak pricing support**: model entries can now carry an `off_peak_pricing` block with `hours_utc` for time-windowed discounts — in progress. [PR #31725](https://github.com/BerriAI/litellm/pull/31725)

## Stability & Regressions
Ranked by severity:

1. **Azure GPT-5.6 Terra/Luna cost-map rows carry OpenAI's post-cut prices, not Azure's published meters** — OpenAI's 2026-07-30 price cut (Terra −20%, Luna −80%) was incorrectly propagated to Azure rows, understating Azure spend. [Issue #36192](https://github.com/BerriAI/litellm/issues/36192)
2. **PTU deployments double-billed** — per-token pricing fell back to the public cost map on top of flat capacity cost; fix writes zero pricing fields at PTU store time. [PR #36829](https://github.com/BerriAI/litellm/pull/36829)
3. **`end_user` in SpendLogs pinned to first request** for a shared virtual key (regression in v1.87.0) — subsequent requests with different `user` fields log the wrong `end_user`. [Issue #31441](https://github.com/BerriAI/litellm/issues/31441)
4. **Vertex AI custom `api_base` crashes with `DefaultCredentialsError`** — the custom-proxy credential-skip logic is missing in the Vertex Gemini path. [Issue #19138](https://github.com/BerriAI/litellm/issues/19138)
5. **Xiaomi MiMo models fail with Claude Code** — `output_config` parameter breaks `AsyncCompletions.create()`. [Issue #24549](https://github.com/BerriAI/litellm/issues/24549)
6. **Access-control residue bugs with fix PRs** — deselected MCP servers keep tool grants on keys ([PR #36840](https://github.com/BerriAI/litellm/pull/36840)), deleted teams keep authenticating from cache and orphan membership rows ([PR #36819](https://github.com/BerriAI/litellm/pull/36819)), and access-group `assigned_team_ids`/`assigned_key_ids` drift from team/key write paths ([PR #36825](https://github.com/BerriAI/litellm/pull/36825), [PR #36843](https://github.com/BerriAI/litellm/pull/36843)).
7. **MCP OAuth authorize/fetch-token fails randomly on multi-worker proxies** — pending server lived in one process's memory; fixed via short-lived DB-backed drafts. [PR #36844](https://github.com/BerriAI/litellm/pull/36844)
8. **Tag budgets never reset** — `ResetBudgetJob` has no tag handler, so tags stay permanently blocked after the first overage. [Issue #27481](https://github.com/BerriAI/litellm/issues/27481)
9. **Python 3.14 uvloop incompatibility** (proxy fails to start) — now closed; presumably fixed upstream. [Issue #20933](https://github.com/BerriAI/litellm/issues/20933)
10. **Uvicorn pinned too old again** — dependency version drift re-introduced. [Issue #27746](https://github.com/BerriAI/litellm/issues/27746)

Also reported: `end_user`/budget UI reset regression ([#32474](https://github.com/BerriAI/litellm/issues/32474)), guardrails monitor missing `litellm_content_filter` evaluations ([#36566](https://github.com/BerriAI/litellm/issues/36566)), zero-length message roles omitted ([#26428](https://github.com/BerriAI/litellm/issues/26428)), and Anthropic `strict` tool flag forwarded into `input_schema` instead of the tool top level ([#27490](https://github.com/BerriAI/litellm/issues/27490)).

## What This Means for Application Developers
- **Verify your spend reports if you use Azure GPT-5.6 Terra/Luna or PTU deployments.** The cost-map data for Azure is wrong, and PTU double-billing was the default, not an opt-in. Both have fixes in flight or landed ([#36192](https://github.com/BerriAI/litellm/issues/36192), [PR #36829](https://github.com/BerriAI/litellm/pull/36829)) — audit historical logs and upgrade promptly.
- **Access-group and MCP grants were leaky.** If you use access groups, MCP server allowlists, or team-scoped keys, stale grants could have outlived deletes and deselections. The batch of sync fixes ([#36819](https://github.com/BerriAI/litellm/pull/36819), [#36825](https://github.com/BerriAI/litellm/pull/36825), [#36840](https://github.com/BerriAI/litellm/pull/36840), [#36843](https://github.com/BerriAI/litellm/pull/36843)) is worth tracking into a stable release.
- **Multi-worker MCP OAuth is finally safe to use** — the DB-backed draft fix removes the process-local state that caused intermittent 404s.
- **New audio/image models are landing fast.** If you serve Gemini 3.1 Flash Lite Image, Veo 3.1, Lyria, or Grok 4.3, upgrade to get catalog pricing and spend tracking; older versions log $0 for the image model.
- **Realtime translation endpoints now enforce spend tracking and budgets** — if you previously routed WebRTC directly to avoid the proxy, note the new proxy path is now the compliant route.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth Digest — 2026-08-14

## Today's Highlights
The headline is **v0.1.702-beta introducing Unsloth Desktop** — the project's first cross-platform desktop app for running and training local models — plus tool calling and web search for external providers. The desktop push surfaced predictable early-adopter friction: Windows installer timeouts and EDR/WDAC blocks, AMD RX 5700XT detection failure, and macOS llama-server startup errors. Meanwhile, the team fixed the red backend CI, added a transformers pre-flight check for Studio training runs, and landed streaming-renderer CPU optimizations.

## Releases & Breaking Changes
- **[v0.1.702-beta](https://github.com/unslothai/unsloth/releases)**: Unsloth Desktop — first desktop app to run and train AI models locally; research, export and deploy from the same open-source app on Windows, macOS and Linux. Also added tool calling / web search for all external providers.
- **GGUF export regression**: Exporting a trained model to GGUF now requires a full 16-bit-weight download (tens of GB) where it previously didn't. [Issue #8717](https://github.com/unslothai/unsloth/issues/8717) — OPEN.

## New Model & Hardware Support
- **Ornith-1.0 (DeepReinforce)**: Requested as Unsloth-hosted optimized variants and tooling compatibility; 23 👍. [Issue #6721](https://github.com/unslothai/unsloth/issues/6721)
- **MiniMax-H3**: Desktop support is present but broken — bundled `stable-diffusion.cpp` predates MiniMax-H3 ([#8507](https://github.com/unslothai/unsloth/issues/8507), closed), and video generation fails with `sd-cli exited -6` / Qwen3VL prepare-graph assertion ([#8666](https://github.com/unslothai/unsloth/issues/8666)).
- **AMD/ROCm**:
  - Windows AMD: PR establishes the MSVC environment so Triton's clang-cl works, fixing `'stdlib.h' file not found` during `torch.compile`. [PR #7704](https://github.com/unslothai/unsloth/pull/7704)
  - Strix Halo (Radeon 8060S): `GGML_CUDA_ENABLE_UNIFIED_MEMORY=1` prevents GPU offload — closed with workaround. [Issue #8651](https://github.com/unslothai/unsloth/issues/8651)
  - ROCm multi-GPU auto-selection can pick the iGPU by free-memory heuristic and crash instead of falling back; confirmed. [Issue #7624](https://github.com/unslothai/unsloth/issues/7624)
  - RX 5700XT (gfx1010) not recognized in Unsloth Desktop — most-commented open issue. [Issue #8529](https://github.com/unslothai/unsloth/issues/8529)
- **MLX**: Installed MLX models are missing from `/v1/models`, so API auto-switch can't load them. [Issue #8748](https://github.com/unslothai/unsloth/issues/8748)
- **Turing (T4/sm_75) coverage**: Notebook smoke tests on real Kaggle T4s added to catch Turing regressions outside current CI. [PR #8440](https://github.com/unslothai/unsloth/pull/8440)

## Performance & Optimization
- **Streaming CPU saturation**: PR removes redundant animation DOM and makes Markdown parsing incremental, so long assistant replies no longer grow the DOM unboundedly or freeze Studio's renderer. [PR #8750](https://github.com/unslothai/unsloth/pull/8750)
- **Idle memory reclamation**: Studio now auto-unloads idle image/video diffusion backends, freeing several GB of resident GPU memory after one-off generations (previously only chat/STT had TTLs). [PR #8672](https://github.com/unslothai/unsloth/pull/8672)
- **Kaggle disk handling**: Saves use Kaggle's large overlay; GGUF export is refused up-front if it cannot fit. [PR #8439](https://github.com/unslothai/unsloth/pull/8439)
- **Chat search dialog stutter**: Fixes ⌘K height-jump/stutter caused by `CommandList` sizing to content. [PR #8514](https://github.com/unslothai/unsloth/pull/8514)

## Stability & Regressions
Ranked by severity (open items first):

1. **GGUF export effectively broken for training outputs** — 16-bit weights required, multi-GB download. [Issue #8717](https://github.com/unslothai/unsloth/issues/8717)
2. **Windows install killed by 2-hour cap** while downloading cu126 PyTorch, no progress output; split out from #8546 (where root cause was an unwritable `SSLKEYLOGFILE` crashing backend at startup). [Issue #8698](https://github.com/unslothai/unsloth/issues/8698), [Issue #8546](https://github.com/unslothai/unsloth/issues/8546)
3. **RX 5700XT not recognized** in Unsloth Desktop. [Issue #8529](https://github.com/unslothai/unsloth/issues/8529)
4. **MLX models absent from `/v1/models`** — API auto-switch breaks. [Issue #8748](https://github.com/unslothai/unsloth/issues/8748)
5. **macOS M4: llama-server fails to start** on local GGUF models, plus excessive idle RAM. [Issue #8566](https://github.com/unslothai/unsloth/issues/8566)
6. **macOS second-launch failure** of the desktop app. [Issue #8610](https://github.com/unslothai/unsloth/issues/8610)
7. **MiniMax-H3 video generation aborts** (`sd-cli exited -6`, Qwen3VL weight load failure). [Issue #8666](https://github.com/unslothai/unsloth/issues/8666)
8. **Deep Research freezes** on "Writing The Report" (Gemma-4-26B-A4B); no run token accounting after cancel. [Issue #8483](https://github.com/unslothai/unsloth/issues/8483)
9. **Claude Code 401 despite valid key** — endpoint only accepts `Authorization: Bearer sk-unsloth-…`, not Anthropic's `x-api-key`; closed. [Issue #8663](https://github.com/unslothai/unsloth/issues/8663)

Fixed this cycle:
- **Backend CI red on main** — four test-only breakages, including import failures at collection; stubbed heavy trainer imports. [PR #8758](https://github.com/unslothai/unsloth/pull/8758), [PR #8740](https://github.com/unslothai/unsloth/pull/8740)
- **Tool-call delta index restart** — providers reset `delta.tool_calls[].index` to 0 each round; adapter now keys fragments by call id (fixes #8734). [PR #8754](https://github.com/unslothai/unsloth/pull/8754)
- **JSONL exports missing trailing newline** on the last record across all export paths, breaking `cat`-concatenation (fixes #8733). [PR #8759](https://github.com/unslothai/unsloth/pull/8759)
- **Windows install fails with AMD GPU** — closed as fixed. [Issue #8508](https://github.com/unslothai/unsloth/issues/8508)

## What This Means for Application Developers
- **Unsloth Desktop is now a deployment target**: it exposes an OpenAI-compatible local API, but MLX models don't register in `/v1/models` ([#8748](https://github.com/unslothai/unsloth/issues/8748)), the API binds to `127.0.0.1` only with no `0.0.0.0` option yet ([#8578](https://github.com/unslothai/unsloth/issues/8578)), and external-provider tool calling just landed in v0.1.702-beta.
- **Auth interop is a known gap**: Anthropic-ecosystem clients (Claude Code) fail 401 because only `Bearer sk-unsloth-…` is accepted. If you build on Unsloth's gateway, normalize headers at your edge until the endpoint accepts `x-api-key`.
- **Agent tooling is improving**: an `edit_file` tool is incoming so agents stop rewriting whole files via `cat` ([PR #8753](https://github.com/unslothai/unsloth/pull/8753)); chat settings and attached files are being made per-chat/per-model instead of global ([PR #8686](https://github.com/unslothai/unsloth/pull/8686), [PR #8757](https://github.com/unslothai/unsloth/pull/8757)).
- **Streaming correctness matters for multi-round tool calls**: the delta-index fix ([PR #8754](https://github.com/unslothai/unsloth/pull/8754)) prevents mixed-up tool-call fragments from multi-round agent responses; the renderer fix ([PR #8750](https://github.com/unslothai/unsloth/pull/8750)) prevents UI freeze during long generations.
- **Export pipelines are in flux**: don't automate training→GGUF workflows yet — the 16-bit intermediate requirement is under active complaint ([#8717](https://github.com/unslothai/unsloth/issues/8717)); verify behavior per release.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*