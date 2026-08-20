# AI Infrastructure Digest 2026-08-20

> Generated: 2026-08-19 23:12 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# AI Infrastructure Ecosystem Cross-Project Report — 2026-08-20

## 1. Ecosystem Overview

The inference stack is in a "frontier model churn" phase: DeepSeek-V4, Kimi-K3, and Qwen3.6/3.8 dominate kernel enablement, ROCm/AMD bring-up, and long-context correctness work across every engine. Speculative decoding (DFlash2, MTP, EAGLE, GDN/KDA) is the single largest shared investment and the single largest source of correctness risk, with silent-corruption bugs reported in all four inference projects. The most dangerous failure mode this week is not crashes but *invisible corruption* — fluent but semantically wrong output from MoE reduce paths, KV-state bleed between requests, and cross-request response leakage. Meanwhile, the gateway and fine-tuning layers are consolidating around agentic workloads: tool-call correctness, spend accounting, batch rate limiting, and rolling context management.

---

## 2. Activity Comparison

| Project | Issues Referenced¹ | PRs Referenced¹ | Release Status |
|---|---|---|---|
| **vLLM** | ~24 | ~17 | No release in 24h |
| **SGLang** | ~15 | ~14 | No release in 24h |
| **llama.cpp** | ~16 | ~16 | **b10502** (stable) — signed artifact attestations |
| **Ollama** | ~13 | ~10 | **v0.32.15-rc1** (RC) — model metadata cache |
| **LiteLLM** | ~18 (3 closed) | ~12 | **v1.99.0-dev.1** (dev) — cosign verification |
| **Unsloth** | ~19 (8 closed) | ~14 | No release in 24h |

¹ Counts reflect items referenced in each digest, not total GitHub activity.

**Read:** llama.cpp, Ollama, and LiteLLM shipped (or RC'd) artifacts; vLLM, SGLang, and Unsloth are in heavy fix/review cycles without a release. vLLM and SGLang carry the highest density of high-severity open issues (silent corruption, CUDA graph failures, EP crashes).

---

## 3. Model Support Race

No project shipped a *new* frontier architecture in the last 24h; the race is in in-flight enablement, and the frontier is split by hardware target:

| Model / Arch | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|---|---|---|---|---|---|---|
| **DeepSeek-V4** (incl. Flash) | ROCm checklist, MXFP4 CI, sm_80 request, upgrade regression | Shared-experts fusion on `flashinfer_mxfp4`, EP crash on SM90 | — | — | Registry entries requested | — |
| **Kimi-K3** | KV cache mgr, KDA kernels, 3 silent-corruption bugs | SM120 TMA fast-path fix | — | — | — | — |
| **Qwen3.6 / 3.8** | AITER MoE on gfx12, LM-only mode, MTP illegal access | MXFP4 MI35x nightly, FP8 KV-cache fix | MTP on pre-Ampere crash | Tool-call parser wedging, system-message normalization | Registry additions | Qwen 27B macOS Studio crash |
| **DFlash2** | In review (#52816) | Quantized lm_head (NVFP4/FP8) in review | Support PR open (#27342) | MLX draft-model PR open | — | — |
| **Hardware backends** | ROCm/gfx12, A100 (pending), MNNVL | SM90/SM100/103, gfx950/MI35x | CUDA/HIP/Vulkan/SYCL/Hexagon/RPC tensor split | MLX, ROCm Strix Halo | — | EXL3 quant backend, AMD VRAM reporting |

**Ahead:** vLLM and SGLang lead on frontier datacenter models (DeepSeek-V4, Kimi-K3) with kernel-level work — but they also own the most severe open bugs on those models. llama.cpp and Ollama are ahead on *portable* speculative decoding (DFlash2, adaptive MTP) across CUDA/MLX/Vulkan. LiteLLM is not in the model race; it is in the provider-coverage race (Bedrock AgentCore web search merged). Unsloth is alone in the fine-tuning race (UEmbed SPLADE, EXL3 backend).

---

## 4. Performance Frontier

Optimization effort is concentrated in five areas:

- **Speculative decoding pipelines.** vLLM is re-optimizing K3 SSM recover kernels and proposing an explicit spec-method contract (#51338); SGLang adds DFlash2 quantized heads and multi-adapter LoRA co-batching; llama.cpp lands draft-prefill zero-copy (~1100 tok/s prefill on RTX 5090 claimed); Ollama brings DFlash2 to MLX. Cost: a wave of spec-decode corruption bugs (vLLM #51508, #49694; SGLang #27194; llama.cpp #25713).

- **Quantization kernels.** MXFP4 is the common thread: vLLM adds GSM8K CI for ROCm MXFP4, SGLang fuses shared experts on `flashinfer_mxfp4`, llama.cpp prefers MMQ for MXFP4 on CDNA2 (MI210). W4A8/W4A16 and NVFP4 kernels are being added (vLLM PTX `ldmatrix.s8.s4`, FlashInfer FP4 kernel; SGLang ModelOpt NVFP4; Unsloth EXL3 fractional bitrates).

- **KV cache.** SGLang's HiCache host pool is now flexible; Ollama is adding opt-in `OLLAMA_PREFILL_CACHE` but still lacks MLX prefix caching; Unsloth fixes quantized KV cache under tensor split; vLLM tracks K3 KV offloading. This is the most divergent area — datacenter engines treat KV as a distributed resource, local engines treat it as a memory-bound constraint.

- **Distributed serving.** Multi-node fixes dominate: vLLM publishes NCCL ≥2.31 heap overflow and MNNVL multicast fixes; SGLang reports DeepEP crashes on SM90 and MoE stage-2 reduce corruption; llama.cpp adds RPC tensor split. EP/PD disaggregation reliability, not raw throughput, is the bottleneck.

- **Batching & scheduling.** llama.cpp AVX2 large-batch IQ processing, Ollama's model metadata cache (lower per-request overhead), LiteLLM's `least_busy` counter clamp and batch enqueued-token rate limiting. Latency work is shifting from single-request optimization to multi-tenant fairness and queue behavior.

---

## 5. Layer Positioning

| Layer | Projects | Core Differentiators |
|---|---|---|
| **Datacenter serving engines** | vLLM, SGLang | Multi-GPU PD disaggregation, EP/MoE kernels, CUDA-graph capture, FP4/MXFP4 kernel ownership, spec-decode method selection. Positioned for large-scale, multi-tenant production. |
| **Local/edge runtimes** | llama.cpp, Ollama | GGUF compatibility, broad hardware (CUDA/HIP/Vulkan/SYCL/Hexagon/Metal/MLX), single-node inference and server mode. llama.cpp targets power users and heterogeneous backends; Ollama targets developer UX and desktop/agent use. |
| **Gateway / proxy** | LiteLLM | Provider routing, spend tracking, guardrails, rate limits, secret management. Model-agnostic; correctness issues are protocol-level (tool-call translation, streaming event duplication) rather than kernel-level. |
| **Training / fine-tuning** | Unsloth | LoRA/QLoRA/CPT, quantized backends (bitsandbytes, EXL3 proposal), Studio desktop API with OpenAI-compatible serving and embedding support. Increasingly overlaps with serving via its Studio inference layer. |

**Boundaries are blurring:** llama.cpp ships `llama-server` with agent-mode tool calling; Ollama serves OpenAI-compatible APIs; Unsloth serves fine-tuned models through Studio; vLLM and SGLang both now carry LoRA + speculative decoding. The differentiator is *where* the project owns kernels (vLLM/SGLang on datacenter GPUs, llama.cpp on edge GPUs/CPU, Ollama on MLX/Metal) versus where it owns *policy* (LiteLLM routing/guardrails, Unsloth fine-tuning recipes).

---

## 6. Trend Signals

1. **"Silent corruption" is the new top reliability class.** MoE stage-2 reduce corruption with gsm8k=0 and high spec-acceptance (SGLang #27194), KV-state bleed on Strix Halo (Ollama #17847), cross-request response leakage (llama.cpp #25992), and Kimi-K3 long-context degeneration (vLLM #51039) are all invisible to standard TTFT/TPOT metrics. **Action:** add task-level accuracy checks (GSM8K-style) to CI and canary deployments; treat "fluent output" as insufficient validation.

2. **Speculative decoding is converging but fragile.** DFlash2 is now supported or in-flight across all four inference projects — but every project reports a spec-decode corruption bug. Watch vLLM's #51338 (explicit spec-method contract) as the likely industry pattern: stop guessing from checkpoint names, declare explicitly.

3. **AMD/ROCm is the battleground, and Strix Halo (gfx1151) is the weak spot.** llama.cpp, Ollama, and Unsloth all have open Strix Halo issues (response leakage, VRAM misdetection, prebuilt performance regressions). vLLM and SGLang are investing in ROCm CI (GSM8K MXFP4, nightly MI35x jobs). AMD enablement is real but not production-safe on iGPU/APU parts yet.

4. **Agentic workloads dictate the roadmap.** LiteLLM fixes double tool execution; Ollama fixes tool-call parser wedging; Unsloth ships reasoning passthrough and rolling context; SGLang issues RFCs for agent-aware KV cache metadata. Expect cache/eviction policy and tool-call protocol correctness to be the next differentiation surface — not raw token throughput.

5. **Supply-chain hardening is becoming table stakes.** llama.cpp b10502 ships signed-artifact attestations; LiteLLM's dev release verifies Docker images via cosign. For infrastructure teams, this is the signal to start requiring attestation verification in CI pull pipelines.

6. **Deterministic inference is emerging as a feature.** vLLM's batch-invariant inference tracking (#27433) and deterministic decode replay (#46701) target the CI/testing gap for agent loops. As agentic applications proliferate, the ability to replay exact token sequences with real logprobs will become a requirement for debugging and compliance.

**Bottom line:** The week's activity says the ecosystem is past raw throughput competition and into a reliability + agentic-workflow competition. The highest-risk deployment patterns right now are: (1) speculative decoding on multi-GPU/EP setups, (2) long-context requests on Kimi-K3/DeepSeek-V4-class models, and (3) multi-tenant serving on AMD iGPU platforms. Pin versions, add semantic accuracy checks, and upgrade for the distributed fix PRs (#53008, #53000 in vLLM; #17883 in Ollama) before trusting retry logic or shared infrastructure.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest — 2026-08-20

## Today's Highlights

DeepSeek-V4 and Kimi-K3 continue to dominate the tracker, with a new upgrade regression ([#51758](https://github.com/vllm-project/vllm/issues/51758)), ongoing ROCm enablement ([#41820](https://github.com/vllm-project/vllm/issues/41820), [#50632](https://github.com/vllm-project/vllm/pull/50632), [#52869](https://github.com/vllm-project/vllm/pull/52869)), and several silent-corruption bugs in K3 long-context and disaggregated serving ([#51039](https://github.com/vllm-project/vllm/issues/51039), [#52531](https://github.com/vllm-project/vllm/issues/52531), [#52627](https://github.com/vllm-project/vllm/issues/52627)). On the stability side, fixes were proposed for an NCCL ≥ 2.31 heap overflow ([#53008](https://github.com/vllm-project/vllm/pull/53008)), MNNVL multicast mailbox publication ([#53000](https://github.com/vllm-project/vllm/pull/53000)), and GDN/KDA spec-decode recurrent-state corruption ([#51508](https://github.com/vllm-project/vllm/pull/51508)). An RFC to make speculative-decoding method selection explicit ([#51338](https://github.com/vllm-project/vllm/pull/51338)) would remove fragile path/name-based guessing.

## Releases & Breaking Changes

No releases in the last 24 hours.

**Watch item:** [PR #51338](https://github.com/vllm-project/vllm/pull/51338) proposes removing speculative-method guessing from model path/name substrings (`eagle3`, `dflash`, `dspark`) and replacing it with an explicit contract — a behavior change for deployments relying on checkpoint filenames.

## New Model & Hardware Support

- **Kimi-K3 tracking issue** ([#50001](https://github.com/vllm-project/vllm/issues/50001)) — active work on KV cache manager, KDA/decode kernels, and KV offloading.
- **DeepSeek-V4 Flash on sm_80 (A100/A800)** ([#40851](https://github.com/vllm-project/vllm/issues/40851)) — requested; currently fails on Ampere with deepgemm assertions.
- **DeepSeek-V4 on ROCm** ([#41820](https://github.com/vllm-project/vllm/issues/41820)) — end-to-end enablement checklist (mHC/HCA/CSA/MoE/MTP); [PR #50632](https://github.com/vllm-project/vllm/pull/50632) adds a GSM8K accuracy CI test for the MXFP4 ROCm checkpoint.
- **Qwen3.6 AITER MoE on gfx12/RDNA4** ([#52869](https://github.com/vllm-project/vllm/pull/52869)) — safe dispatch enabled, avoiding unsupported AITER runtime shapes.
- **Qwen3.8-27B LM-only mode** ([#52734](https://github.com/vllm-project/vllm/pull/52734)) — allows serving without the vision tower via the hybrid Qwen3.5 path.
- **FlashInfer cute-dsl W4A16 FP4 linear kernel** ([#53014](https://github.com/vllm-project/vllm/pull/53014)) — new sm12x kernel with hardware FP4 path.
- **DFlash2 drafter** ([#52816](https://github.com/vllm-project/vllm/pull/52816)) — new checkpoint-declared architecture with grouped dynamic depthwise convolution + candidate selector.
- **MiniMax-M3 AITER sparse PA** ([#52893](https://github.com/vllm-project/vllm/pull/52893)) — fast path kept for non-speculative serving; disabled under spec decode due to corruption.
- **gpt-oss routed expert loading** ([#52209](https://github.com/vllm-project/vllm/pull/52209)) — enables per-expert sync for verl RL instead of all-gathering experts.

## Performance & Optimization

- **K3 recover SSM kernel** ([#52993](https://github.com/vllm-project/vllm/pull/52993)) — the ReplaySSM-like recover option from #51855 improved memory/occupancy but hurt runtime; this PR re-optimizes the Triton path.
- **DeepSeek-V4 optimization checklist** ([#45861](https://github.com/vllm-project/vllm/issues/45861)) — tracks multiple landed perf PRs (MoE, shared experts, etc.).
- **Batch-invariant inference** ([#27433](https://github.com/vllm-project/vllm/issues/27433)) — deterministic LLM inference feature tracking; still has open work items.
- **PTX 9.4 `ldmatrix.s8.s4` for W4A8-INT8** ([#49529](https://github.com/vllm-project/vllm/issues/49529)) — hardware INT4→INT8 expanding load; good first issue / kernel optimization.
- **QuantFP8 group quantization regression** ([#25094](https://github.com/vllm-project/vllm/issues/25094)) — compiled `forward_native` still slower than CUDA on H100/RTX 5090; needs re-benchmark on torch 2.10/2.11.
- **Transformers backend startup time** ([#50128](https://github.com/vllm-project/vllm/issues/50128)) — measurement task; runtime throughput already matches native after #47187.
- **MNNVL Lamport all-gather multicast fix** ([#53000](https://github.com/vllm-project/vllm/pull/53000)) — ordinary stores were undefined behavior; switches to `multimem.*` writes, fixing silent corruption.

## Stability & Regressions

Ranked by severity:

1. **Kimi-K3 long-context degeneration** ([#51039](https://github.com/vllm-project/vllm/issues/51039)) — after a ~240K-token request, every subsequent request collapses to a repeated degenerate token; NaN logits, packed KDA prefill suspected.
2. **Kimi-K3 CUDA graph corruption at batch=1** ([#52531](https://github.com/vllm-project/vllm/issues/52531)) — three distinct silent-corruption failure modes across cudagraph modes.
3. **Kimi-K3 silent corruption in 1P1D NIXL PD** ([#52627](https://github.com/vllm-project/vllm/issues/52627)) — intermittent garbled generation with NIXL-only PD; Mooncake+NIXL MultiConnector A/B implicates connector interaction.
4. **DeepSeek-V4 upgrade regression 0.26.0 → 0.27.0** ([#51758](https://github.com/vllm-project/vllm/issues/51758)) — DeepSeek-V4-Flash errors after upgrade.
5. **MTP speculative decoding illegal memory access** ([#40756](https://github.com/vllm-project/vllm/issues/40756)) — Qwen3.6-27B-FP8, `num_spec_tokens=5`, long sequences, v0.19.1.
6. **draft_model spec decode crash under TP>1** ([#52023](https://github.com/vllm-project/vllm/issues/52023)) — TRT-LLM fused allreduce+RMSNorm workspace sized from target hidden_size only.
7. **GDN/KDA recurrent-state corruption** ([#51508](https://github.com/vllm-project/vllm/pull/51508)) — stale zero-accept spec rows corrupt state and can crash under async scheduling; fix PR open.
8. **NCCL ≥ 2.31 heap overflow** ([#53008](https://github.com/vllm-project/vllm/pull/53008)) — flaky SIGSEGV in multi-node expert-parallel (DeepEP) serving; fix PR open.
9. **MiniMax-M3 AITER corruption under spec decode** ([#52893](https://github.com/vllm-project/vllm/pull/52893)) — silent repetition/mojibake; fix gates sparse PA path.
10. **EAGLE FULL CUDA graph + live multimodal batches** ([#43776](https://github.com/vllm-project/vllm/pull/43776)) — stale `mm_inputs` replayed; fix disables FULL graph mode for draft prefill.
11. **ngram_gpu spec decode + xgrammar + async scheduling** ([#49694](https://github.com/vllm-project/vllm/issues/49694)) — verifier accepts grammar-illegal drafts → HTTP 500s and silent truncation.
12. **OpenAI `strict` tool flag leaks into chat template** ([#52741](https://github.com/vllm-project/vllm/issues/52741)) — request-level flag changes model-visible tool-call behavior.
13. **Hybrid-model prefix caching drops to 0%** ([#45238](https://github.com/vllm-project/vllm/issues/45238)) — align-mode Mamba checkpoint placed at the last block boundary before prompt end.
14. **PD disaggregation for SSM models with TP>1** ([#37285](https://github.com/vllm-project/vllm/issues/37285)) — requires `--no-async-scheduling`; synchronization bug identified.
15. **NVFP4 on SM120 wedges under sustained load with CUDA graphs** ([#52540](https://github.com/vllm-project/vllm/issues/52540)).
16. **Accuracy discrepancies across vLLM versions** ([#42801](https://github.com/vllm-project/vllm/issues/42801)) — cross-version reproducibility still open.
17. **v0.20 MoE latency/throughput regression** ([#41306](https://github.com/vllm-project/vllm/issues/41306)) — vs v0.19.0 on 8×H200.
18. **KV null block not reserved on max_model_len boundary** ([#47272](https://github.com/vllm-project/vllm/pull/47272)) — fix PR open.
19. **Packaging/install issues:** libcudart.so.13 on CUDA 12.6 ([#52300](https://github.com/vllm-project/vllm/issues/52300)); libmpi_cxx.so.40 ([#34090](https://github.com/vllm-project/vllm/issues/34090)); Intel-GPU docker image compiled without CUDA ([#39170](https://github.com/vllm-project/vllm/issues/39170)).
20. **DeepSeek-V4 chat-encoding bugs** — reasoning_effort "high" mislabeled and message-level tools dropped ([#50684](https://github.com/vllm-project/vllm/pull/50684)); synthetic system message inserted when tools provided ([#51856](https://github.com/vllm-project/vllm/pull/51856)).

## What This Means for Application Developers

- **Speculative decoding is the hottest correctness risk.** If you serve Qwen3.6/Kimi-K3-class models with MTP/EAGLE/DFlash/ngram drafters on multi-GPU or async scheduling, follow [#51338](https://github.com/vllm-project/vllm/pull/51338) — the explicit spec-method contract will break setups that rely on model-path name detection. Pin versions and declare spec config explicitly.
- **Kimi-K3 is not yet production-safe at long context.** Avoid long-context + CUDA graph + disaggregated PD combos until [#51039](https://github.com/vllm-project/vllm/issues/51039), [#52531](https://github.com/vllm-project/vllm/issues/52531), and [#52627](https://github.com/vllm-project/vllm/issues/52627) land fixes; validate output integrity after any single long request.
- **DeepSeek-V4 operators:** hold at a known-good version (0.26.0 → 0.27.0 is affected by the upgrade regression), verify reasoning_effort and tools rendering after chat-template fixes, and expect ROCm/MXFP4 support to keep maturing with accuracy CI.
- **Multi-node EP/DP serving:** upgrade to builds containing [#53008](https://github.com/vllm-project/vllm/pull/53008) (NCCL ≥ 2.31 heap overflow) and [#53000](https://github.com/vllm-project/vllm/pull/53000) (MNNVL multicast) — both fix flaky SIGSEGV/silent corruption in high-scale deployments.
- **Tool-calling correctness:** the `strict` flag leaking into the model-visible chat template ([#52741](https://github.com/vllm-project/vllm/issues/52741)) can silently change tool-call behavior — sanitize request-level flags until fixed.
- **Deterministic decode replay** ([#46701](https://github.com/vllm-project/vllm/pull/46701)) is a useful upcoming feature for CI/testing agent loops: it forces predetermined token sequences while preserving real logprobs.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest — 2026-08-20

## Today's Highlights
The DeepSeek-V4 ecosystem remains the top focus: a PR enables shared-experts fusion on the `flashinfer_mxfp4` (TRT-LLM-gen) MoE path, while a new bug report documents expert-parallel crashes on Hopper/SM90 and the perf-tracking issue (#33636) is actively maintained. A cluster of DFlash2 speculative-decoding PRs from Jiminator adds quantized `lm_head` support — unblocking NVFP4/FP8 checkpoints on 32 GB GPUs — plus multi-adapter LoRA + EAGLE/NEXTN/DFLASH/DSPARK support is in review. On the stability front, several "silent" failure modes were reported: MoE stage-2 reduce output corruption (gsm8k=0), radix-cache eviction accounting bugs, and a PrefillDelayer feedback loop under DP attention.

## Releases & Breaking Changes
No new releases in the last 24 hours. No API/config migration notes.

## New Model & Hardware Support
- **Qwen3.8 MXFP4 MI35x nightly** — PR #35383 adds the Qwen3.8-2.4T-A95B job to AMD MI35x nightly coverage and retires two underperforming Qwen jobs ([PR #35383](https://github.com/sgl-project/sglang/pull/35383)).
- **DeepSeek-V4 shared-experts fusion** — PR #35505 enables shared-expert routing (slot 256) through the same MoE kernel on the `flashinfer_mxfp4` path, removing a separate FP8 MLP stream for ~4 fewer kernel launches ([PR #35505](https://github.com/sgl-project/sglang/pull/35505)).
- **Kimi-K3 SM120 fix** — PR #35361 excludes SM120 from the attention-residual TMA fast path; the dispatcher previously assumed SM100+ semantics for all CC ≥ 10 GPUs ([PR #35361](https://github.com/sgl-project/sglang/pull/35361)).
- **DFlash2 quantized target lm_head** — PR #35496 (plus follow-ups #35579, #35580, #35581) supports ModelOpt NVFP4/compressed-tensors FP8 targets in DFlash2, folds the selector into the draft CUDA graph, and adds loud failures for out-of-range `selector_top_k` ([PR #35496](https://github.com/sgl-project/sglang/pull/35496), [PR #35579](https://github.com/sgl-project/sglang/pull/35579)).
- **DeepSeek V4 perf tracking** — Issue #33636 tracks NVIDIA SM90/SM10X performance work, including FlashInfer MNL attention (done) and TRT-LLM DSv4 attention integration for SM100/103 (pending) ([Issue #33636](https://github.com/sgl-project/sglang/issues/33636)).

## Performance & Optimization
- **Single-GPU VRAM recovery (diffusion)** — PR #35538 stops building every parallel group (DP, CFG, TP, SP, PP, VAE_DECODE, DIT) for single-rank runs, reclaiming ~5 GiB of VRAM (~44% of a 12 GiB card) that was reserved before a single weight loaded ([PR #35538](https://github.com/sgl-project/sglang/pull/35538)).
- **HiCache host-pool flexibility** — PR #35543 allows the retraction host pool to be smaller than the device pool, trimming host memory overhead for disaggregated setups ([PR #35543](https://github.com/sgl-project/sglang/pull/35543)).
- **FP8 KV-cache Triton fix (AMD)** — PR #35428 unblocks `test_qwen3_5_fp8_kv_cache` on gfx950/MI35x, which previously crashed inside the Triton AMD compiler ([PR #35428](https://github.com/sgl-project/sglang/pull/35428)).
- **Performance issue tracked**: fa3 backend is notably slow with MLA page-size 64 on H20 ([Issue #31310](https://github.com/sgl-project/sglang/issues/31310)).

## Stability & Regressions
Ranked by severity; all reported/updated within the last 24h.

1. **Silent output corruption in MoE stage-2 reduce** — `SGLANG_MORI_NUM_MAX_DISPATCH_TOKENS_PER_RANK` at low concurrency corrupts decode output while keeping fluent tokens and high speculative-acceptance; gsm8k drops to 0.00 with no error. High risk because it is invisible to standard metrics. ([Issue #27194](https://github.com/sgl-project/sglang/issues/27194))
2. **DeepSeek-V4-Flash EP crash on Hopper/SM90** — `--enable-expert-parallel` with `--moe-a2a-backend deepep` crashes at decode CUDA-graph capture; DeepGEMM MXFP4 MegaMoE is SM100-only, and the failure surfaces late with a misleading error ([Issue #35557](https://github.com/sgl-project/sglang/issues/35557)).
3. **Kimi-K3 NaN-contaminated logits** — Long-context [PAD] storms plus DSPARK inf/nan asserts; root cause is a write-side bug fixed by #32477, which is absent from released images. [PAD] is also injectable via `allowed_special="all"` ([Issue #32968](https://github.com/sgl-project/sglang/issues/32968)).
4. **Radix cache `evictable_size()` double-counting** — Shared pages counted twice, causing the scheduler to evict/starve at idle ([Issue #35270](https://github.com/sgl-project/sglang/issues/35270)).
5. **PrefillDelayer feedback loop** — Persistent mixed-state collapse of prefill progress under DP attention + chunked prefill; requests complete but scheduler performance degrades ([Issue #35241](https://github.com/sgl-project/sglang/issues/35241)).
6. **Mooncake L3 cache collision** — Ranks sharing one `ssd_offload_path` collide on bucket files, breaking the L3 cache ([Issue #35484](https://github.com/sgl-project/sglang/issues/35484)).
7. **TP>1 LoRA hot-load crash** — One-shot ForkingPickler FDs are reused and crash schedulers ([Issue #35498](https://github.com/sgl-project/sglang/issues/35498)).
8. **DFLASH + prefill CUDA graph** — BCG capture assert at startup and full-backend IndexError on first request on SM120/RTX 5090 ([Issue #35437](https://github.com/sgl-project/sglang/issues/35437)).
9. **Hybrid-mamba + spec decoding NoneType crash** — `set_mamba_track_indices_from_reqs` fails with `mamba_next_track_idx is None` in lazy buffer mode ([Issue #34786](https://github.com/sgl-project/sglang/issues/34786)).

**Fix PRs in flight:**
- [#22615](https://github.com/sgl-project/sglang/pull/22615) fixes fp8 KV-cache crashes with KV-shared layers in the Triton backend (#22277).
- [#34535](https://github.com/sgl-project/sglang/pull/34535) fixes hybrid-SSM DP attention failures at low concurrency (zero-slot workers when `--max-running-requests < attn_dp_size`).

## What This Means for Application Developers
- **Agentic workloads are the roadmap centerpiece**: the Distributed KVCache System for agentic workloads (#21846, 28 👍) is marked high priority, and Phase 1 of agent-aware KV cache metadata is being RFC'd (#24656). Expect API-level workflow metadata to flow into cache/eviction decisions soon.
- **Watch for silent correctness bugs in MoE/EP configs**: issue #27194 shows fluent-looking but semantically wrong output at low concurrency — pin versions and add task-level accuracy checks (e.g., GSM8K) when enabling `SGLANG_MORI_NUM_MAX_DISPATCH_TOKENS_PER_RANK`.
- **LoRA + speculative decoding is converging**: PR #34337 enables multi-adapter LoRA co-batched with EAGLE/NEXTN/DFLASH/DSPARK drafts; useful for multi-tenant fine-tuned deployments on consumer GPUs.
- **Quantized DFlash2 heads widen spec-decode reach**: if you run NVFP4/FP8 quantized models on 32 GB GPUs, the DFlash2 selector support (#35496) removes a hard blocker for speculative decoding.
- **Observability gap acknowledged**: TTFT breakdown and HiCache metrics per request are explicitly requested (#28047) — operators currently cannot distinguish queue wait from GPU forward time.
- **Pixtral multi-image users**: a crash with CUDA IPC feature transport is fixed in review ([#35463](https://github.com/sgl-project/sglang/pull/35463)) — HTTP 500 on multi-image requests will be resolved once merged.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

## Today's Highlights

llama.cpp tagged **b10502**, with CI now producing signed-artifact attestations. Beyond the release, the most consequential work in the last 24h is correctness-focused: a critical HIP server bug can return one request’s response to another under `--kv-unified`, and Blackwell CUDA users are reporting watchdog kills. On the PR side, there are meaningful hardening and optimization contributions for RPC OOB writes, Vulkan flash-attention quantization, and CDNA2 MMQ path selection.

## Releases & Breaking Changes

- **b10502** released — adds attestation for signed release artifacts via [PR #25933](https://github.com/ggml-org/llama.cpp/pull/25933). Attestation available [here](https://github.com/ggml-org/llama.cpp/attestations/41614541). Project website: [llama.app](https://llama.app).  
- No breaking config/API changes were identified in this release.

## New Model & Hardware Support

No new finalized model architecture shipped in b10502, but several enablement efforts are in flight:

- **DFlash2 support** — [PR #27342](https://github.com/ggml-org/llama.cpp/pull/27342) adds grouped dynamic depthwise convolution + candidate selector support.
- **Adaptive MTP draft depth** — [PR #27210](https://github.com/ggml-org/llama.cpp/pull/27210) adds `--spec-type draft-mtp-adaptive`, with recommended `--spec-draft-n-max 12`.
- **RPC tensor split** — [PR #26610](https://github.com/ggml-org/llama.cpp/pull/26610) adds RPC `-sm tensor` for multi-node split.
- **Backend work in progress** includes Vulkan flash-attention MMQ FP32 fixes, OpenCL norm local-size fixes, Hexagon FA queue ordering, HIP DPP shuffles, and CUDA CDNA2 MMQ preferences for MXFP4/IQ4_XS.

## Performance & Optimization

- [PR #27411](https://github.com/ggml-org/llama.cpp/pull/27411) — prefers MMQ for **MXFP4 on CDNA2**; measured on MI210 with gpt-oss-20b (32 experts).
- [PR #27410](https://github.com/ggml-org/llama.cpp/pull/27410) — prefers MMQ for **IQ4_XS on CDNA2**, stacked on the IQ4_NL clause.
- [PR #27396](https://github.com/ggml-org/llama.cpp/pull/27396) — draft-model prefill optimizations: zero-copy embedding, event-based sync, nextn zero-copy, and sampler snapshot. Reports ~1100 tok/s prefill on RTX 5090 in a real llama-server query.
- [PR #27402](https://github.com/ggml-org/llama.cpp/pull/27402) — AVX2 speedup for large-batch IQ model prompt processing; avoids decoding every weight per token at 512-token batch sizes.
- [PR #26466](https://github.com/ggml-org/llama.cpp/pull/26466) — replaces HIP `__shfl_xor_sync` with DPP instructions for modest speedups.
- [PR #27042](https://github.com/ggml-org/llama.cpp/pull/27042) — Hexagon FA HMX queue ordering + packed rescale `D` matrices; fixes nondeterministic `FLASH_ATTN_EXT` and reduces VTCM usage.
- [PR #27339](https://github.com/ggml-org/llama.cpp/pull/27339) — OpenCL norm local-size fix for `ne00 < 64`.
- [Issue #21284](https://github.com/ggml-org/llama.cpp/issues/21284) — open: inefficient gfx1151 defaults are still costing significant prefill performance on ROCm/Strix Halo.
- [Issue #24871](https://github.com/ggml-org/llama.cpp/issues/24871) — open: sampling penalties can add up to **20% text-generation overhead**.

## Stability & Regressions

Ranked by severity; issues reported/updated in the last 24h:

- **Critical — cross-request response leakage on HIP** — [Issue #25992](https://github.com/ggml-org/llama.cpp/issues/25992): `llama-server -np 4 --kv-unified` on integrated HIP (gfx1151) returns complete responses belonging to a different earlier request. Bisected to `c7d87229`. No fix PR linked.
- **Critical — CUDA watchdog stall** — [Issue #27102](https://github.com/ggml-org/llama.cpp/issues/27102): CUDA kernel stall during execution on RTX Pro 6000 Blackwell with Qwen3.8-27B; killed by watchdog. No fix PR linked.
- **High — CUDA illegal memory access in flash-attn** — [Issue #26609](https://github.com/ggml-org/llama.cpp/issues/26609): deterministic crash with Qwen3.6-35B MoE + partial expert offload; disappears with `-fa off`. No fix PR linked.
- **High — SYCL tensor split DEVICE_LOST** — [Issue #27198](https://github.com/ggml-org/llama.cpp/issues/27198): `--split-mode tensor` crashes in `dev2dev_memcpy` on dual Arc Pro B70 despite working P2P. No fix PR linked.
- **High — Gemma4 infinite generation on gfx1151** — [Issue #26239](https://github.com/ggml-org/llama.cpp/issues/26239): `<unused49>` infinite generation / unstable output on HIP Windows with long prompts.
- **High — regression after `c7d8722`** — [Issue #26209](https://github.com/ggml-org/llama.cpp/issues/26209): llama-server generates infinite `/` tokens in agent mode on AMD MAX+ 395 / gfx1151.
- **Medium — MTP crash on pre-Ampere GPUs** — [Issue #25713](https://github.com/ggml-org/llama.cpp/issues/25713): MTP decoding crash on Tesla K40c / SM35; a working patch is included in the issue, but no PR is linked.
- **Medium — Vulkan garbage output at batch 512** — [Issue #27237](https://github.com/ggml-org/llama.cpp/issues/27237): Qwen3.5-27B hybrid DeltaNet produces garbage at batch size 512; works at 1024/4096.
- **Medium — `dry_penalty_last_n` server error** — [Issue #27079](https://github.com/ggml-org/llama.cpp/issues/27079): error on Vulkan and ROCm images with recent builds.
- **Medium — Mistral4 empty output on Metal** — [Issue #25722](https://github.com/ggml-org/llama.cpp/issues/25722): empty output for prompts over ~300 tokens on Apple Metal.
- **Medium — Muse Glimmer NVFP4 load failure** — [Issue #27178](https://github.com/ggml-org/llama.cpp/issues/27178): model fails to load, then emits one repeated token.
- **Medium — Qwen3-Coder tool calls silently dropped** — [Issue #27363](https://github.com/ggml-org/llama.cpp/issues/27363): `common_chat_parse` drops tool calls starting from `f5919bf`; closed as unconfirmed.
- **Medium — Gemma 4 QAT GGUF vocab load abort** — [Issue #25739](https://github.com/ggml-org/llama.cpp/issues/25739): official QAT GGUF aborts with `GGML_ASSERT(id_to_token.size() == token_to_id.size())`.
- **Low — Vulkan SIGSEGV on AMD Polaris** — [Issue #27403](https://github.com/ggml-org/llama.cpp/issues/27403): crash on model load; closed as unconfirmed.

**Fixes in flight / under review:**

- [PR #26933](https://github.com/ggml-org/llama.cpp/pull/26933) fixes an out-of-bounds write in RPC `SET_ROWS` graph execution.
- [PR #27413](https://github.com/ggml-org/llama.cpp/pull/27413) fixes Vulkan FA MMQ FP16 denorm overflow in Q quantization.
- [PR #26464](https://github.com/ggml-org/llama.cpp/pull/26464) makes OpenCL MoE expert scatter deterministic.
- [PR #27421](https://github.com/ggml-org/llama.cpp/pull/27421) fixes a llama-server abort by joining model threads in the destructor.
- [PR #27416](https://github.com/ggml-org/llama.cpp/pull/27416) fixes `--docker-repo` being incorrectly treated as router mode.

## What This Means for Application Developers

- **Avoid multi-tenant `--kv-unified` on Strix Halo / gfx1151 for now** — [Issue #25992](https://github.com/ggml-org/llama.cpp/issues/25992) shows real cross-request response leakage, which is unacceptable for any shared server deployment.
- **On Blackwell CUDA, validate MoE + flash-attention + partial expert offload before production use** — [Issue #26609](https://github.com/ggml-org/llama.cpp/issues/26609) is deterministic in some configurations; `-fa off` is the current workaround.
- **If you deploy MTP on pre-Ampere GPUs, disable it or apply the patch in [Issue #25713](https://github.com/ggml-org/llama.cpp/issues/25713).** Multi-GPU SYCL tensor split on Intel Arc should also be avoided until [Issue #27198](https://github.com/ggml-org/llama.cpp/issues/27198) is resolved.
- **Tool-calling applications using Qwen3-Coder should add integration tests around tool extraction** — [Issue #27363](https://github.com/ggml-org/llama.cpp/issues/27363) reports silently dropped tool calls on recent commits.
- **Pin to a known-good build and track the high-severity issues before upgrading**, especially if you rely on parallel serving, MTP, or HIP/SYCL backends. The signed-artifact attestation in b10502 is a useful supply-chain check for CI pipelines.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Digest — 2026-08-20

## Today's Highlights

Ollama shipped **v0.32.15-rc1**, adding a model metadata cache to reduce per-request overhead. The most important fixes in flight target Qwen tool-call parsing hangs and goroutine leaks in streaming routes, while a newly reported ROCm bug on Strix Halo systems can leak KV state between unrelated requests. MLX users continue to face memory growth and missing prefix caching, both now tracked by open issues.

---

## Releases & Breaking Changes

- **v0.32.15-rc1** — Adds a model metadata cache intended to lower per-request overhead. No migration or breaking changes highlighted.
  - [v0.32.15-rc1 changelog](https://github.com/ollama/ollama/compare/v0.32.14...v0.32.15-rc1)
  - [Release PR #17752](https://github.com/ollama/ollama/pull/17752)

---

## New Model & Hardware Support

- **MLX DFlash2 draft-model support** — PR adds native MLX loading/inference for `DFlash2DraftModel` checkpoints, including dynamic convolution and bounded rotating draft KV caches.
  - [PR #17865](https://github.com/ollama/ollama/pull/17865)
- **glm-ocr compatibility fix** — Legacy `glmocr` GGUF models now register `<|user|>` as an EOT token, preventing runaway output.
  - [PR #17195](https://github.com/ollama/ollama/pull/17195)
- **Feature request: Q3_K_M MLX quantization for Qwen3.8-35B-A3B** — Would enable 16GB/24GB Apple Silicon Macs to run the model locally.
  - [Issue #17869](https://github.com/ollama/ollama/issues/17869)

---

## Performance & Optimization

- **Model metadata cache (v0.32.15-rc1)** — Reduces per-request overhead by caching model metadata.
  - [Release #17752](https://github.com/ollama/ollama/pull/17752)
- **Warm prefill cache across model unload/reload** — Open PR adds opt-in `OLLAMA_PREFILL_CACHE`, with scheduler-owned KV save/restore and an 8 GiB LRU cap.
  - [PR #17278](https://github.com/ollama/ollama/pull/17278)
- **MLX prefix caching gap** — MLX engine re-prefills the full prompt on every agent step; no prompt/prefix caching between requests.
  - [Issue #17829](https://github.com/ollama/ollama/issues/17829)
- **Prompt cache utilization reporting** — Long-standing request to return cached-token usage in OpenAI-compatible responses.
  - [Issue #8008](https://github.com/ollama/ollama/issues/8008)
- **Speculative decoding benchmark improvement** — Switches bench prompts to packed HumanEval Python prompts for more realistic draft-model evaluation.
  - [PR #17480](https://github.com/ollama/ollama/pull/17480)

---

## Stability & Regressions

Ranked by severity; items noted as reported/updated in the last 24h.

1. **ROCm Strix Halo iGPU KV-state bleed** — Responses can describe the previous request’s content, indicating cross-request contamination on `gfx1151`/Radeon 8060S. No fix PR yet.
   - [Issue #17847](https://github.com/ollama/ollama/issues/17847)

2. **Agent integrations hang indefinitely with local Qwen models on macOS** — Direct Ollama API works, but agents that use tool calling/reasoning hang. No fix PR yet.
   - [Issue #17839](https://github.com/ollama/ollama/issues/17839)

3. **Qwen3.8 tool-call parser failures can wedge the server** — A parse failure returns 500, then retrying the same request hangs forever. Fix landed in:
   - [Issue #17778](https://github.com/ollama/ollama/issues/17778)
   - [Issue #17825](https://github.com/ollama/ollama/issues/17825)
   - [Fix PR #17883](https://github.com/ollama/ollama/pull/17883) — prevents chat/generate from wedging on mid-stream parser errors
   - [Qwen3.8 system-message normalization PR #17855](https://github.com/ollama/ollama/pull/17855)

4. **AMD Strix Halo VRAM detection regression (0.30+)** — Container deployments only see 2GB instead of full system memory; earlier 0.24.0-rocm was correct.
   - [Issue #16462](https://github.com/ollama/ollama/issues/16462)

5. **Windows app UI infinite settings loop** — `ollama app.exe` enters a GET↔POST loop on `/api/v1/settings`, blocking server readiness. Fix PR exists:
   - [Issue #17876](https://github.com/ollama/ollama/issues/17876)
   - [Fix PR #17880](https://github.com/ollama/ollama/pull/17880)

6. **MLX runner KV-cache memory growth** — Memory accumulates per request and is not released until model reload/restart.
   - [Issue #17875](https://github.com/ollama/ollama/issues/17875)

7. **MLX vision runner crash on high-res images** — Requests a ~125GB Metal buffer on 48GB hardware.
   - [Issue #17804](https://github.com/ollama/ollama/issues/17804)

8. **`install.sh` fails silently on Ubuntu 26.04 when `zstd` is missing** — Leaves an empty `/usr/local/lib/ollama`; fallback `.tgz` path exists in an open PR.
   - [Issue #17860](https://github.com/ollama/ollama/issues/17860)
   - [Fix PR #17877](https://github.com/ollama/ollama/pull/17877)

9. **TLS handshake timeout on model pulls** — Pulling from `registry.ollama.ai` fails with `net/http: TLS handshake timeout`.
   - [Issue #17868](https://github.com/ollama/ollama/issues/17868)

10. **Streaming route goroutine leaks on client disconnect** — Background worker goroutines can block forever writing to unbuffered channels. Open fix:
    - [PR #17881](https://github.com/ollama/ollama/pull/17881)

---

## What This Means for Application Developers

- **Be careful with Qwen3.8 tool-calling in agent loops.** The 500-then-hang behavior makes retries dangerous. Upgrading to v0.32.15-rc1 or tracking [PR #17883](https://github.com/ollama/ollama/pull/17883) is recommended before relying on automatic retry logic.
- **Do not run multi-tenant or sequential workloads on ROCm Strix Halo containers right now.** The KV-state bleed in [Issue #17847](https://github.com/ollama/ollama/issues/17847) means responses may contain content from unrelated prompts.
- **MLX is still weak for long agent sessions.** Missing prefix caching and per-request KV growth mean TTFT and memory footprint degrade over time; consider periodic model unloads or pinning sessions to single requests until fixed.
- **If your clients stream and may disconnect early, watch for goroutine leaks.** [PR #17881](https://github.com/ollama/ollama/pull/17881) addresses exactly this class of issue and is worth backporting/testing.
- **Windows desktop users should be aware of the settings-loop bug** that can block the app’s embedded UI server; [PR #17880](https://github.com/ollama/ollama/pull/17880) fixes the underlying zero-value settings overwrite.
- **For scripting/install automation on Ubuntu 26.04**, [PR #17877](https://github.com/ollama/ollama/pull/17877) adds `.tgz` fallback when `zstd` is unavailable, so don’t silently rely on default one-liner behavior yet.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-08-20

## Today's Highlights

Proxy reliability and batch handling dominate today’s updates. The most impactful fixes are secret-manager initialization before config resolution ([#37544](https://github.com/BerriAI/litellm/pull/37544)), guardrail scanning on batch uploads ([#37519](https://github.com/BerriAI/litellm/pull/37519)), and retrying Postgres spend deadlocks instead of dropping spend increments ([#34887](https://github.com/BerriAI/litellm/pull/34887)). On the model-facing side, Bedrock AgentCore web search support was merged ([#36331](https://github.com/BerriAI/litellm/pull/36331)), and a critical Anthropic streaming bug causing duplicate `content_block_stop` events and double tool execution was closed ([#37273](https://github.com/BerriAI/litellm/issues/37273)).

---

## Releases & Breaking Changes

- **v1.99.0-dev.1** — dev release only; no user-facing API changes called out. The release note emphasizes Docker image signature verification via cosign, using the key introduced in [commit `0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0).  
  https://github.com/BerriAI/litellm/releases/tag/v1.99.0-dev.1

---

## New Model & Hardware Support

No new hardware backends or new model families landed in this dev release. Notable model/provider activity in progress:

- **Bedrock AgentCore web search provider** — merged/closed; adds `agentcore` as a native search provider with SigV4 support for AWS_IAM gateways.  
  https://github.com/BerriAI/litellm/pull/36331 · https://github.com/BerriAI/litellm/issues/31819
- **ChatGPT Subscription provider** — open feature request for GPT-5.4 mini, GPT-5.4 mini Fast, and GPT-5.4 Fast under `chatgpt/`.  
  https://github.com/BerriAI/litellm/issues/25954
- **Model registry additions requested** — `meta-llama/llama-4-scout` ([#28307](https://github.com/BerriAI/litellm/issues/28307)), `deepseek/deepseek-v4-flash:free` ([#28309](https://github.com/BerriAI/litellm/issues/28309)), `canopywave` ([#28211](https://github.com/BerriAI/litellm/issues/28211)).
- **Databricks prices outdated** — open bug with a contributor PR updating costs.  
  https://github.com/BerriAI/litellm/issues/31194

---

## Performance & Optimization

- **OTEL tracer resource reuse** — credential-scoped tracers previously rebuilt the OpenTelemetry `Resource` per build, costing ~3ms and ~200 blocking file opens on the request event loop. Now built once per logger.  
  https://github.com/BerriAI/litellm/pull/37542
- **`least_busy` routing counter clamp** — prevents per-deployment request counters from drifting negative under races; salvages the core fix from a stale PR.  
  https://github.com/BerriAI/litellm/pull/34444
- **Batch enqueued-token rate limiting** — new opt-in `batch_enqueued_token_limit` on keys/teams counts batch jobs against enqueued tokens, with refund on completion/cancellation, avoiding large batches always hitting per-minute RPM/TPM 429s.  
  https://github.com/BerriAI/litellm/pull/37539
- **Vertex AI regional cost uplift** — regional endpoints are billed 1.1x by Google since July 2026; cost tracking now applies the regional multiplier instead of under-reading spend by 10%.  
  https://github.com/BerriAI/litellm/pull/37543
- **Spend-update deadlock handling** — Postgres deadlocks (P2034/40P01) are now classified as retryable, with randomized backoff to avoid correlated re-deadlocks.  
  https://github.com/BerriAI/litellm/pull/34887 · https://github.com/BerriAI/litellm/pull/28072
- **Single-worker Redis banner suppression** — workers heartbeat to the DB and the no-Redis banner is auto-suppressed when only one live worker is detected.  
  https://github.com/BerriAI/litellm/pull/36987

---

## Stability & Regressions

Ranked by severity:

1. **Duplicate `content_block_stop` for tool calls** — `/v1/messages` streaming emitted two `content_block_stop` for one `tool_use`, causing tools to execute twice. Closed.  
   https://github.com/BerriAI/litellm/issues/37273
2. **MCP auto-execute hijacks client-side tools** — `require_approval: "never"` auto-execution breaks all non-MCP tools from agentic clients such as Claude Code, with “Error executing tool”. Open.  
   https://github.com/BerriAI/litellm/issues/37031
3. **Anthropic bridge drops cache accounting** — `/v1/messages` served via OpenAI Responses API models always reports `cache_read_input_tokens: 0`, even on full upstream cache hits. Open.  
   https://github.com/BerriAI/litellm/issues/36091
4. **Invalid Anthropic→Responses tool_choice translation** — `translate_tool_choice_to_responses_api` returns `{"type": "auto"}` objects instead of string literals, causing 400/422 errors from vLLM and other OpenAI-compatible backends. Open.  
   https://github.com/BerriAI/litellm/issues/32505
5. **MCP server PUT silently nulls OAuth fields** — updating an OAuth2 MCP server with `delegate_auth_to_upstream=true` discards `authorization_url`, `token_url`, and `oauth2_flow`. Open.  
   https://github.com/BerriAI/litellm/issues/37258
6. **Provider budget reset ~57 years in future** — `provider_budget_config` without Redis reports `budget_reset_at` ~57 years out, so monthly budgets never reset. Open.  
   https://github.com/BerriAI/litellm/issues/37261
7. **Failed requests not counted toward RPM** — virtual-key RPM limits ignore failed proxy requests unless they succeed. Open.  
   https://github.com/BerriAI/litellm/issues/21312
8. **`disable_global_guardrails` key mismatch** — per-key/team setting is ineffective because code checks singular `disable_global_guardrail` while producers use plural. Open.  
   https://github.com/BerriAI/litellm/issues/25487
9. **`Router.update_settings()` TypeError** — passing `None` for integer settings such as `timeout` or `num_retries` crashes. Open.  
   https://github.com/BerriAI/litellm/issues/28126
10. **GPT-5.1 mini/nano temperature rejection** — models reject `temperature` when `reasoning_effort` is omitted due to missing registry flag. Open.  
    https://github.com/BerriAI/litellm/issues/27351

Also closed today: Bedrock OpenAI GPT-5.6 routing hang/missing transforms ([#37132](https://github.com/BerriAI/litellm/issues/37132)) and MCP OpenAPI Authorization header passthrough regression ([#33344](https://github.com/BerriAI/litellm/issues/33344)).

---

## What This Means for Application Developers

- If you run an agentic stack on `/v1/messages` streaming, verify you are on a build containing the duplicate `content_block_stop` fix — double tool execution is a silent correctness and cost issue. See [#37273](https://github.com/BerriAI/litellm/issues/37273).
- Avoid combining server-side MCP auto-execution (`require_approval: "never"`) with agentic clients that send their own tools until [#37031](https://github.com/BerriAI/litellm/issues/37031) is resolved.
- Batch workloads should adopt `batch_enqueued_token_limit` ([#37539](https://github.com/BerriAI/litellm/pull/37539)) and watch for fast-fail batch file validation ([#37527](https://github.com/BerriAI/litellm/pull/37527)); batch uploads now also pass through pre-call guardrails ([#37519](https://github.com/BerriAI/litellm/pull/37519)).
- For observability, failed-request spend logs now populate deployment/model attribution ([#37520](https://github.com/BerriAI/litellm/pull/37520)), and Vertex AI regional cost reporting is corrected — useful for cost reconciliation.
- Secret-manager users should verify key resolution on split images; the fix in [#37544](https://github.com/BerriAI/litellm/pull/37544) addresses keys resolving to `None` and lost `model_list` credentials.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth Digest — 2026-08-20

## 1. Today's Highlights

No new releases landed in the past 24h; the focus is on stabilizing the Studio desktop/API layer. The most significant movements are a deadlock fix for the Studio server ([#9234](https://github.com/unslothai/unsloth/pull/9234) for [#9008](https://github.com/unslothai/unsloth/issues/9008)) and an open fix for tool-call argument corruption on custom OpenAI-compatible endpoints ([#9300](https://github.com/unslothai/unsloth/pull/9300) for [#9039](https://github.com/unslothai/unsloth/issues/9039)). Meanwhile, the rolling-context PR stack ([#9074](https://github.com/unslothai/unsloth/pull/9074), [#9161](https://github.com/unslothai/unsloth/pull/9161), [#9162](https://github.com/unslothai/unsloth/pull/9162)) pushes long-running agent memory toward eviction-plus-search instead of irreversible trimming.

## 2. Releases & Breaking Changes

None. No releases in the last 24 hours.

## 3. New Model & Hardware Support

- **[UEmbed Qwen3.5 embeddings](https://github.com/unslothai/unsloth/pull/8712)**: Opt-in dense + SPLADE fine-tuning support for `Alibaba-NLP/UEmbed-2B` in `FastSentenceTransformer`; part 1 of 3 ([#9322](https://github.com/unslothai/unsloth/pull/9322)) wires offset pooling and SPLADE sparse output.
- **[EXL3 (ExLlamaV3) backend](https://github.com/unslothai/unsloth/pull/7115)**: Proposed quantization backend supporting 2/3/4/6/8-bit and fractional bitrates, with Mixture-of-Experts support as an alternative to bitsandbytes.
- **[MLX context length](https://github.com/unslothai/unsloth/pull/8125)**: Gives MLX-served models a real context length propagated from model config to KV cache, removing the hardcoded 4096-token ceiling.
- **[AMD VRAM reporting on Windows](https://github.com/unslothai/unsloth/pull/8863)**: Joins GPU adapter counters on LUID to correctly report used/free VRAM; addresses [#8862](https://github.com/unslothai/unsloth/issues/8862).
- **Open request**: [NVFP4 cannot be loaded on RTX 5060 Ti 16 GB](https://github.com/unslothai/unsloth/issues/8246).

## 4. Performance & Optimization

- **Multi-GPU attention masks**: [#8516](https://github.com/unslothai/unsloth/pull/8516) keeps xFormers `BlockDiagonalCausalMask` on the GPU running each layer, fixing device-mismatch failures (`attn_bias: cuda:0` vs `query.device: cuda:1`) in multi-GPU training.
- **Quantized KV cache on tensor split**: [#8939](https://github.com/unslothai/unsloth/pull/8939) stops silently dropping quantized KV cache types when tensor parallelism is enabled (currently only `f16`/`bf16`/`f32` are allowed).
- **Chat compaction by epoch reset**: [#9162](https://github.com/unslothai/unsloth/pull/9162) resets the context epoch instead of repeatedly trimming the oldest turns. One 12-turn thread saw its context boundary move 8 times under the old trim logic.
- **SQLite off event loop**: [#9234](https://github.com/unslothai/unsloth/pull/9234) moves common SQLite reads off the event loop thread, preventing process-wide stalls caused by SQLite’s global VFS mutex.
- **Open regression**: [Performance regression on AMD Strix Halo + ROCm with prebuilt b10079](https://github.com/unslothai/unsloth/issues/7371).

## 5. Stability & Regressions

Ranked by severity; fix PRs noted where they exist.

- **Critical — Studio server deadlock**: [#9008](https://github.com/unslothai/unsloth/issues/9008) — every thread blocked in `sqlite3.connect()`/`close()`, server stops accepting connections. Fix landed in closed PR [#9234](https://github.com/unslothai/unsloth/pull/9234).
- **High — Tool-call arguments corrupted on custom endpoints**: [#9039](https://github.com/unslothai/unsloth/issues/9039) — every subsequent chat fails with `invalid_request_error`. Open fix: [#9300](https://github.com/unslothai/unsloth/pull/9300).
- **High — `embed_tokens`/`lm_head` silently dropped during CPT**: [#9326](https://github.com/unslothai/unsloth/issues/9326) — target modules omitted with no warning during continued pre-training.
- **High — Silent CPU-only fallback after failed llama.cpp prebuilt install**: [#9255](https://github.com/unslothai/unsloth/issues/9255) — CUDA host loses GPU inference, installer still reports success.
- **Medium — Qwen 3.8 27B crashes macOS Studio**: [#9279](https://github.com/unslothai/unsloth/issues/9279) — GUI flickers/system appears to hang; works in LM Studio.
- **Medium — AMD Strix Halo memory misreporting**: [#6834](https://github.com/unslothai/unsloth/issues/6834) — 21.3 GB model blocked because only system RAM (22 GB) is seen instead of 110 GB free GPU memory.
- **Medium — Embeddings API unreliable**: [#9128](https://github.com/unslothai/unsloth/issues/9128) — `/embeddings` rarely works.
- **Closed in last 24h**: [security scanner false positives blocking all models](https://github.com/unslothai/unsloth/issues/9239), [macOS M4 llama-server startup failure](https://github.com/unslothai/unsloth/issues/8566), [Studio image transform broken in v0.1.800-beta](https://github.com/unslothai/unsloth/issues/9241), [tool-call nudging](https://github.com/unslothai/unsloth/issues/8907), [wrong IP served with `-H 0.0.0.0` on macOS](https://github.com/unslothai/unsloth/issues/8868), [first-launch lock failure](https://github.com/unslothai/unsloth/issues/9140), [partial download continue button](https://github.com/unslothai/unsloth/issues/8927), and [old non-deterministic inference issue #279](https://github.com/unslothai/unsloth/issues/279).

## 6. What This Means for Application Developers

- **Custom endpoint tool-calling is currently unsafe**: If you proxy Studio’s OpenAI-compatible API to a custom endpoint and use tools, watch [#9300](https://github.com/unslothai/unsloth/pull/9300) — without it, malformed `tool_calls[].function.arguments` poison the chat history permanently.
- **Agent reasoning will become visible**: [#9107](https://github.com/unslothai/unsloth/pull/9107) adds `thinking`/`reasoning` passthrough on `/v1/messages` and `/v1/responses`, so Claude Code-style clients can finally see local-model reasoning content instead of silently dropping it.
- **Long-running agents get better memory**: The rolling-context PR stack ([#9074](https://github.com/unslothai/unsloth/pull/9074), [#9161](https://github.com/unslothai/unsloth/pull/9161), [#9162](https://github.com/unslothai/unsloth/pull/9162)) means evicted turns will be searchable and compaction will stop degrading the conversation epoch so aggressively.
- **Monitor API traffic and context usage**: [#9217](https://github.com/unslothai/unsloth/pull/9217) adds media endpoints to the API monitor; [#9327](https://github.com/unslothai/unsloth/issues/9327) requests live context-consumption counters. Useful for Open WebUI users hitting unexpected context limits.
- **AMD/ROCm users should be cautious**: On Strix Halo, memory detection ([#6834](https://github.com/unslothai/unsloth/issues/6834)) and prebuilt performance regressions ([#7371](https://github.com/unslothai/unsloth/issues/7371)) are still open; the VRAM reporting fix ([#8863](https://github.com/unslothai/unsloth/pull/8863)) is promising but not merged.
- **macOS users**: Several critical Desktop regressions were closed, but the Qwen 27B crash ([#9279](https://github.com/unslothai/unsloth/issues/9279)) remains. Consider staying on known-good builds for now.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*