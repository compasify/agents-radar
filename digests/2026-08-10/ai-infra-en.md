# AI Infrastructure Digest 2026-08-10

> Generated: 2026-08-10 00:52 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# Cross-Project AI Infrastructure Digest Comparison — 2026-08-10

## 1. Ecosystem Overview

The inference ecosystem is dominated by two parallel pressures: pushing frontier-scale serving (DeepSeek-V4, Kimi-K3, MiniMax) towards 1M-token contexts and Blackwell-class hardware, while wrestling with correctness fallout from aggressive quantization and speculative-decoding adoption. No stable releases landed from the major serving/gateway projects in the last 24h except llama.cpp's two point releases and Unsloth's beta — a sign that engineering effort is concentrated on fixing regressions rather than shipping features. Quantized inference (NVFP4, FP8, W4A8), dynamic speculative decoding, and distributed data-parallel layouts are the most active — and most fragile — areas. Meanwhile, agent/tool-calling reliability surfaced as a cross-cutting pain point at every layer, from serving engines to local runtimes to gateways.

## 2. Activity Comparison

Counts below are items **referenced in the 24h digests**, not full repo-wide totals; LiteLLM is the only project reporting complete numbers (56 issues / 134 PRs touched).

| Project | Issues (24h) | PRs (24h) | Releases (24h) | Notes |
|---|---|---|---|---|
| vLLM | ~17 referenced | ~10 referenced | None | Latest stable v0.26.0 lacks the merged NVFP4 correctness fix (#48929) |
| SGLang | ~19 referenced | ~14 referenced | None | v0.5.17 line; CPU kernel path moved, Apple Silicon bridge breaking change in flight |
| llama.cpp | ~12 referenced | ~13 referenced | **b10333, b10332** | Two point releases; most active on kernel-level fixes |
| Ollama | ~8 referenced | ~8 referenced | None | No tagged release; focused on tool-call reliability and MLX |
| LiteLLM | **56 touched** | **134 touched** | None | Heaviest raw activity; 1.97.0-RC1 has a usage-stats regression |
| Unsloth | ~15 referenced | ~11 referenced | **v0.1.527-beta** | Studio pipeline fixes; memory-planning issues dominate |

## 3. Model Support Race

| Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|---|---|---|---|---|---|---|
| DeepSeek-V4-Flash-0731 | DP8/TP8 MLA results published | Servable, but 1M prefill OOMs | Garbled output on ROCm/HIP | — | — | — |
| MiniMax-M3 / H3 | M3 NVFP4 + EAGLE3 speedups | H3 fragile (2 open bugs) | — | — | — | H3 joint video+audio LoRA in progress |
| Kimi-K3 | ROCm tracking open; long-context degeneracy | Wide EP fails to deploy on GB200/B200 | — | — | — | — |
| Blackwell consumer (SM120) | Kernel selection PR for RTX 5090 | Llama4 NVFP4 crashes on SM120/SM121 | SOFT_MAX crash on RTX 5090 | — | — | NVFP4 fails on 16 GB RTX 5060 Ti |
| Apple Silicon / MLX | — | Torch 2.13/MLX 0.32 bridge | Native HIP/ROCm focus | MLX image input + version tagging | — | — |
| BitNet / Nemotron | — | — | BitNet activation fix; Nemotron MTP | — | — | Nemotron attention detection fix |
| Anthropic / Bedrock | — | — | — | — | Native structured output; Nova 2 geo-prefix | — |

**Who is ahead:** vLLM and SGLang lead on frontier serving breadth but are shipping models in a semi-broken state — support frequently means "tracking issue open" or "works with caveats." llama.cpp is the most aggressive on local/edge hardware enablement. LiteLLM leads on model-route coverage, not model execution. Unsloth is pulling ahead on video/multimodal fine-tuning.

## 4. Performance Frontier

- **Quantized kernels, especially correctness**: NVFP4/W4A8/FP8 fixes span every engine (vLLM #48929, SGLang W4AFP8 crash, llama.cpp Q2_0 HIP kernel +33–35% on RDNA4). The bottleneck has shifted from speed to trustworthy output.
- **Speculative decoding**: The biggest single speedup lever — EAGLE3 decode 2.1–2.3× (vLLM), MTP support (llama.cpp), non-greedy MTP sampling (SGLang) — but state-leakage bugs (llama.cpp #26425) and K-selection thrashing (vLLM #51510) make it risky.
- **Distributed serving & KV capacity**: vLLM's DP8-vs-TP8 results (7.7× KV capacity, 3.4× faster 1M-token TTFT) for single-KV-head MLA are the strongest datapoint; SGLang is tracking DSV4 perf on SM90/SM100/SM103.
- **KV cache & CUDA-graph memory accounting**: vLLM now measures full CUDA-graph capture footprint to fix negative memory estimates (#51590); SGLang still lacks vLLM-parity KV metrics.
- **Weight loading & recovery**: SGLang's Weight Cache Daemon cut Qwen3-235B FP8 weight load from ~306–327s to <1s — the most operationally significant optimization in this window.
- **Kernel portability**: JIT kernel migration (SGLang), SYCL FFN fusion, Vulkan FA dequant, XPU W8A8 with tensor-descriptor loads (89–99% device self-time reduction) show the push beyond CUDA.

## 5. Layer Positioning

| Project | Layer | Primary Interface | Typical Deployment |
|---|---|---|---|
| **vLLM** | High-throughput serving engine (continuous batching, PagedAttention) | OpenAI-compatible API, Python | Datacenter GPU clusters, production LLM backends |
| **SGLang** | Serving engine + model gateway (`sgl-model-gateway`) | OpenAI/Anthropic-compatible | Datacenter clusters, PD disaggregation, NVLink/RDMA |
| **llama.cpp** | Local/edge runtime, GGUF-native | C API, `llama-server`, bindings | Laptop/edge, single-node CPU/GPU, on-device |
| **Ollama** | Local runtime product (wraps llama.cpp/backends) | REST, CLI, web UI, OpenAI-compat `/v1` | Developer desktops, small on-prem |
| **LiteLLM** | LLM gateway / proxy / router | OpenAI-compatible proxy in front of 100+ providers | Control plane between apps and any upstream |
| **Unsloth** | Training/fine-tuning framework + Studio product | Python API, Studio UI | Single/multi-GPU fine-tuning, video LoRA |

Key distinction: vLLM and SGLang compete at the same layer but SGLang is adding gateway functionality; llama.cpp and Ollama are both local runtimes but Ollama is productized on top of llama.cpp-like backends; LiteLLM sits *above* all of them; Unsloth is the only training-layer player and increasingly targets the video/diffusion space.

## 6. Trend Signals

1. **Quantization is ahead of correctness validation.** NVFP4, FP8, and Marlin W4A8 bugs are pervasive across vLLM, SGLang, llama.cpp, and Unsloth — often on the newest hardware (SM120, GB10, RDNA4). Validate quantized outputs before production rollout.
2. **Speculative decoding is becoming default but state management is immature.** MTP state leakage (llama.cpp), DSD K-thrashing (vLLM), and CUDA-graph capture failures (SGLang DSpark) mean spec-dec should be treated as a per-deployment, testable feature — not a free speedup.
3. **1M-token context is real but not ready.** DeepSeek-V4 1M prefill OOM-kills engines on TP8 + MegaMoE; Kimi-K3 degrades after ~240K tokens. DP-attention/DP8 layouts are the emerging mitigation.
4. **Restart/failover economics are improving.** Sub-second weight reload (SGLang Weight Cache Daemon) and RPC load parallelization (llama.cpp) will change how operators plan for failures.
5. **Tool-calling is the #1 integration risk for agents.** Ollama's own `gpt-oss` model returns HTTP 500 on its own tool calls; vLLM has grammar-routing misconfiguration; LiteLLM has recursive-tool-schema hangs; llama.cpp crashes on XML-style tool grammar. Agent builders must regression-test tool round-trips per backend.
6. **Cross-platform is expanding — with a transition cost.** MLX (Apple), SYCL, Hexagon NPU, Ascend NPU, and ROCm are all advancing, but rocWMMA removal, RDNA4 FA regressions, and vendor-specific crashes (FlashInfer on SM120) mean platform-specific QA is mandatory.
7. **Memory planning is emerging as its own discipline.** The most dangerous bugs this window are memory-projection failures: 66.54 GiB requested on a 16 GB GPU (Unsloth), –35 GiB CUDA-graph estimates (vLLM), and multi-GPU diffusion swapping ~70 GiB to host RAM (Unsloth). Expect memory-planning tooling to become a differentiator across engines.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest — 2026-08-10

## 1. Today's Highlights

Activity is clustered around **dynamic speculative decoding correctness**, **Blackwell consumer GPU enablement**, and **long-context serving issues for Kimi-K3 / DeepSeek MLA models**. No releases were cut in the last 24 hours. The Rust frontend continues tracking toward Python API feature parity ([#44280](https://github.com/vllm-project/vllm/issues/44280)), while several NVFP4/correctness bugs remain open with targeted PRs already in flight.

## 2. Releases & Breaking Changes

None. No new releases were published in the last 24h.

Note: the NVFP4 inference-correctness fix [#48929](https://github.com/vllm-project/vllm/pull/48929) was merged after the v0.26.0 cut, so no stable release currently includes it.

## 3. New Model & Hardware Support

- **Kimi-K3 on ROCm**: upstream feature-enablement and performance tracking is now open ([#50682](https://github.com/vllm-project/vllm/issues/50682)).
- **DeepSeek-V4-Flash-0731**: new DP8-vs-TP8 results for single-KV-head MLA on 8x B200 ([#51454](https://github.com/vllm-project/vllm/issues/51454)).
- **MiniMax-M3 NVFP4**: first post-correctness-fix B200 numbers published, including EAGLE3 decode speedups ([#51494](https://github.com/vllm-project/vllm/issues/51494)).
- **Blackwell SM120**: PR extends kernel selection to consumer RTX 5090 / RTX PRO 6000 ([#50862](https://github.com/vllm-project/vllm/pull/50862)).
- **MiniCPM-V**: encoder CUDA Graph support added for 2.5/2.6/4.0 ([#42785](https://github.com/vllm-project/vllm/pull/42785)).
- **XPU**: Triton W8A8 `scaled_mm` enabled with tensor-descriptor operand loads ([#47205](https://github.com/vllm-project/vllm/pull/47205)).
- **ROCm base image**: CI/build moves to The Rock 7.14 while keeping Python 3.12 / Ubuntu 22.04 ([#49925](https://github.com/vllm-project/vllm/pull/49925)).

## 4. Performance & Optimization

- **DP8 vs TP8 for MLA**: on 8x B200 with DeepSeek-V4-Flash-0731, DP8 shows **7.7x more KV capacity and 3.4x faster 1M-token TTFT** at concurrency 8 ([#51454](https://github.com/vllm-project/vllm/issues/51454)).
- **MiniMax-M3 NVFP4**: after the NVFP4 fix, **EAGLE3 decode is 2.1–2.3x faster** than no-spec baseline ([#51494](https://github.com/vllm-project/vllm/issues/51494)).
- **FlashInfer spec-decode cudagraphs**: PR restores FULL decode cudagraph capture on the FlashInfer native path, avoiding the ~15% decode penalty from the silent `PIECEWISE` downgrade ([#50885](https://github.com/vllm-project/vllm/pull/50885)).
- **CUDA graph memory accounting**: PR measures complete capture footprint for more accurate KV budgeting, addressing the negative-memory-estimate bug ([#51590](https://github.com/vllm-project/vllm/pull/51590)).
- **P2P startup probe**: fast driver-level P2P check for compute capability 12.x avoids multi-second subprocess probes ([#50771](https://github.com/vllm-project/vllm/pull/50771)).
- **XPU W8A8 kernel**: tensor-descriptor loads reduce device self-time by **89–99%** across B70 shapes ([#47205](https://github.com/vllm-project/vllm/pull/47205)).
- **RFC**: context-length-aware speculative token scheduling is proposed as a backward-compatible extension of `num_speculative_tokens_per_batch_size` ([#48627](https://github.com/vllm-project/vllm/issues/48627)).

## 5. Stability & Regressions

Highest-severity items reported/updated in the last 24h:

- **Kimi-K3 long-context degeneracy**: after ~240K-token prefills, all subsequent requests collapse to a repeated token; NaN logits with packed KDA prefill suspected. No fix PR yet ([#51039](https://github.com/vllm-project/vllm/issues/51039)). Related token-accounting bug: `usage.prompt_tokens` over-counts the forced channel-open stub by +3 ([#51465](https://github.com/vllm-project/vllm/issues/51465)).
- **V1 engine deadlock**: fp8 + prefix caching + Qwen3.5 deadlocks under concurrent load; still open ([#37729](https://github.com/vllm-project/vllm/issues/37729)).
- **NVFP4 / quantized output correctness**:
  - Explicit `VLLM_CUTLASS` NVFP4 MoE on SM_120 returns empty completions with `finish_reason: "length"` ([#51525](https://github.com/vllm-project/vllm/issues/51525)).
  - Marlin W4A8-FP8 silently corrupts output on GB10 / sm_121a ([#49546](https://github.com/vllm-project/vllm/issues/49546)).
  - `MiniMAXGemmaRMSNorm` unconditionally calls FlashInfer CUDA kernels, breaking MiniMax-M3 on non-CUDA platforms ([#51200](https://github.com/vllm-project/vllm/issues/51200)).
- **Dynamic speculative decoding**:
  - MRV2 `AutoRegressiveSpeculator` ignores dynamic K=0 from the scheduler; fix PR exists ([#51510](https://github.com/vllm-project/vllm/issues/51510), [#51575](https://github.com/vllm-project/vllm/pull/51575)).
  - DSD K-lookup thrashing at batch boundaries is fixed in PR ([#51466](https://github.com/vllm-project/vllm/pull/51466)).
  - Aggregate-throughput collapse at batch-size thresholds remains open ([#49548](https://github.com/vllm-project/vllm/issues/49548)).
- **CUDA graph memory**: negative estimation (-35 GiB) with MTP causes KV over-allocation and OOM; fix PR now measures full capture footprint ([#44740](https://github.com/vllm-project/vllm/issues/44740), [#51590](https://github.com/vllm-project/vllm/pull/51590)).
- **Other correctness bugs**: Qwen parser misroutes grammar-constrained JSON into reasoning when `enable_in_reasoning=true` ([#50948](https://github.com/vllm-project/vllm/issues/50948)); hybrid-SWA prefix-cache reuse collapses at ~25% pool occupancy ([#48435](https://github.com/vllm-project/vllm/issues/48435)); Inkling tool calls leak as content in multi-turn streaming ([#50512](https://github.com/vllm-project/vllm/issues/50512)).

## 6. What This Means for Application Developers

- **Validate outputs on quantized models**, especially NVFP4 on consumer Blackwell and Marlin-on-GB10 paths. The NVFP4 fix is merged but not yet in a stable release.
- **Long-context Kimi-K3 is not production-ready**: a single long prefill can poison subsequent requests. Pin versions and add output-sanity checks if you must serve it.
- **Speculative decoding is in flux**: if you use MRV2 or DSD, wait for the K-selection fixes to land; K-thrashing can cause sharp throughput cliffs.
- **DP8 can be dramatically better than TP8 for single-KV-head MLA**: the DeepSeek-V4-Flash numbers suggest evaluating both data-parallel layouts for KV-heavy, long-context workloads.
- **Disaggregated/KV-connector work is still experimental**: scheduler-side prioritization of remote KV polling and connector “ready” state are improving startup and decode latency, but treat them as unstable.
- **For agent/tool-calling apps**, the Qwen grammar-routing and Inkling tool-call bugs can silently corrupt multi-turn streaming — add regression tests before upgrading.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest — 2026-08-10

## 1. Today's Highlights

DeepSeek-V4 workloads remain the primary risk area: a new 1M-token prefill can OOM-kill the engine under TP8 + MegaMoE ([#34155](https://github.com/sgl-project/sglang/issues/34155)), while DSpark large-decode CUDA-graph capture still hits non-deterministic illegal-memory faults on TP8 ([#33356](https://github.com/sgl-project/sglang/issues/33356)). On the infrastructure side, the Weight Cache Daemon roadmap reports weight-load time dropping from ~306–327s to <1s on Qwen3-235B FP8 ([#33522](https://github.com/sgl-project/sglang/issues/33522)), and a new NVIDIA perf-tracking issue signals continued DeepSeek-V4 tuning work ([#33636](https://github.com/sgl-project/sglang/issues/33636)). MiniMax-H3 users face two open correctness/crash bugs ([#33466](https://github.com/sgl-project/sglang/issues/33466), [#34110](https://github.com/sgl-project/sglang/issues/34110)), indicating that model family still needs hardening.

## 2. Releases & Breaking Changes

- **No new releases in the last 24h.** Current line is v0.5.17; several issues reference regressions/behaviors introduced in it.
- **CPU kernel source path moved in v0.5.17:** `sgl-kernel/csrc/cpu/` is gone from the v0.5.17 tree; it now lives at `python/sglang/kernels/aot/csrc/cpu/` after commit `c32c4ef` / PR [#32648](https://github.com/sgl-project/sglang/pull/32648). Anyone patching or vendoring custom CPU kernels must update their paths ([#34193](https://github.com/sgl-project/sglang/issues/34193)).
- **In-flight breaking change for Apple Silicon:** PR [#32984](https://github.com/sgl-project/sglang/pull/32984) upgrades to Torch 2.13 / MLX 0.32 and redesigns the Torch–MLX tensor bridge (zero-copy MPS import, explicit borrowed-vs-owned lifetimes).

## 3. New Model & Hardware Support

- **DeepSeek-V4-Pro-DSpark (v0.5.16):** small-scale CUDA-graph path is stable on the official image (B300, `bs <= 32`); large decode capture fails (see Stability).
- **DeepSeek-V4-Flash-0731:** servable on 8x B200 with TP8 + MegaMoE, but the 1M-token prefill path is broken (see Stability).
- **MiniMax-H3:** support exists but is fragile — args error on startup ([#33466](https://github.com/sgl-project/sglang/issues/33466)) and Ref2VA snow/noise output on L40S offload ([#34110](https://github.com/sgl-project/sglang/issues/34110)).
- **Llama4 NVFP4 MoE:** crashes on SM120/SM121 with Flashinfer backend (`apply_router_weight_on_input` unsupported) ([#34192](https://github.com/sgl-project/sglang/issues/34192)).
- **GLM5-2 / kimi-k3 Wide EP:** failing to deploy on GB200 (NVLink) and B200 (RDMA/EFA); the engine does not come up ([#34120](https://github.com/sgl-project/sglang/issues/34120)).
- **Ascend NPU:** diffusion roadmap is partially landed — `NPUPlatformBase` exists, model support pending ([#18967](https://github.com/sgl-project/sglang/issues/18967)); openPangu_Diffusion DLLM support in review ([#18828](https://github.com/sgl-project/sglang/pull/18828)).
- **Apple Silicon:** MLX event-loop contract RFC open ([#32833](https://github.com/sgl-project/sglang/issues/32833)); new Torch 2.13/MLX 0.32 bridge in flight ([#32984](https://github.com/sgl-project/sglang/pull/32984)).
- **NPU speculative decoding:** PR [#32495](https://github.com/sgl-project/sglang/pull/32495) enables non-greedy MTP sampling for GLM-4.7-Flash so `temperature`/`top_k`/`top_p` take effect during verification (greedy argmax was used before; non-greedy MTP improved GPQA accuracy).

## 4. Performance & Optimization

- **Weight Cache Daemon ([#33522](https://github.com/sgl-project/sglang/issues/33522)):** Phase 1 landed ([#27139](https://github.com/sgl-project/sglang/pull/27139)) — a per-rank daemon holds post-quantized weights and serves them over CUDA IPC, cutting weight load from **~306–327s to <1s on Qwen3-235B FP8**. This is a major enabler for fast engine recovery/failover.
- **DeepSeek-V4 NVIDIA perf tracking ([#33636](https://github.com/sgl-project/sglang/issues/33636)):** new tracking issue scoped to SM90/SM100/SM103, covering work-in-progress PRs driving DSV4 throughput.
- **JIT kernel migration continues** (tracking [#17865](https://github.com/sgl-project/sglang/issues/17865)): `moe_topk_softmax` ([#19053](https://github.com/sgl-project/sglang/pull/19053)), `moe_topk_sigmoid` ([#19050](https://github.com/sgl-project/sglang/pull/19050)), `kimi_k2_moe_fused_gate` ([#19049](https://github.com/sgl-project/sglang/pull/19049)), `moe_align_block_size` ([#19704](https://github.com/sgl-project/sglang/pull/19704)), copy kernel ([#19099](https://github.com/sgl-project/sglang/pull/19099)), activation kernels ([#19111](https://github.com/sgl-project/sglang/pull/19111)), and `prepare_moe_input` ([#19058](https://github.com/sgl-project/sglang/pull/19058)) — reducing AOT build complexity and improving portability.
- **Model Gateway routing:** feature request for opt-in bounded-load routing-key affinity — `consistent_hashing` preserves session affinity but ignores worker load ([#33625](https://github.com/sgl-project/sglang/issues/33625)).
- **KV cache utilization Prometheus metrics** remain unimplemented (vLLM parity) ([#5979](https://github.com/sgl-project/sglang/issues/5979)).

## 5. Stability & Regressions

Ranked by severity:

1. **1M-token prefill OOM kills the engine** — DSV4-Flash-0731, `--tp 8 --moe-a2a-backend megamoe` (nonpaged `fp8_mqa_logits` path) on 8x B200 crashes with CUDA OOM after ~90s of prefill; the equivalent request serves fine under tp8/dp8 dp-attention ([#34155](https://github.com/sgl-project/sglang/issues/34155)). No fix PR yet.
2. **DSpark large decode CUDA-graph capture → non-deterministic illegal memory on TP8** (v0.5.16, DeepSeek-V4-Pro-DSpark); 19 comments, still open ([#33356](https://github.com/sgl-project/sglang/issues/33356)).
3. **W4AFP8 + DeepEP crashes at first inference** — GLM-5.2/DSV2-arch: all DP/TP/EP ranks die with `TypeError: missing 1 required positional argument: 'routed_scaling_factor'` ([#33660](https://github.com/sgl-project/sglang/issues/33660)).
4. **Z-Image BCG broken on single GPU** — warmup capture succeeds, first replay hits illegal memory access or hang; TP=2 unaffected ([#34183](https://github.com/sgl-project/sglang/issues/34183)).
5. **Llama4 NVFP4 MoE crash on SM120/SM121** — Flashinfer does not support `apply_router_weight_on_input` ([#34192](https://github.com/sgl-project/sglang/issues/34192)).
6. **MiniMax-H3 Ref2VA produces snow/noise** on v0.5.17 with L40S offload ([#34110](https://github.com/sgl-project/sglang/issues/34110)).
7. **MiniMax-H3 args error** on startup, latest version ([#33466](https://github.com/sgl-project/sglang/issues/33466)).
8. **Abort can commit a delayed final chunked-prefill token** on latest `main`; deterministic repro provided ([#34149](https://github.com/sgl-project/sglang/issues/34149)).
9. **MegaMOE → Triton fallback crash** for DSV4 FP4 when per-rank tokens exceed cap — FP8 scale shape mismatch in the fallback path ([#27416](https://github.com/sgl-project/sglang/issues/27416)).
10. **Prometheus `/metrics` scrape can starve prefill bootstrap health checks** in PD deployments ([#28157](https://github.com/sgl-project/sglang/issues/28157)).
11. **Grammar-guided generation GPU memory leak fixed** (~6–10 MiB per request with `structural_tag`/`json_schema`/`regex`) — fix PR [#19412](https://github.com/sgl-project/sglang/pull/19412) is available.
12. **CI health:** 3 broken, 11 flaky, 668 recently fixed on `main` ([#17050](https://github.com/sgl-project/sglang/issues/17050)). Other inactive bugs: BF16 RL weight update crash with `flashinfer_trtllm` ([#27787](https://github.com/sgl-project/sglang/issues/27787)), Mistral Medium 3.5 128B OOM on 1x B200 ([#25160](https://github.com/sgl-project/sglang/issues/25160)).

## 6. What This Means for Application Developers

- **Long-context DSV4 serving:** do not run 1M-token requests on TP8 + MegaMoE without dp-attention — the nonpaged path can OOM-kill the whole engine ([#34155](https://github.com/sgl-project/sglang/issues/34155)). Validate against dp-attention configs, which serve the equivalent request successfully.
- **MiniMax-H3 is not production-safe yet** on current releases — avoid L40S offload for Ref2VA and pin to known-good versions until [#33466](https://github.com/sgl-project/sglang/issues/33466) and [#34110](https://github.com/sgl-project/sglang/issues/34110) land.
- **Fast engine recovery is coming:** the Weight Cache Daemon's sub-second weight reload ([#33522](https://github.com/sgl-project/sglang/issues/33522)) will materially change restart/failover economics for large FP8 models — worth tracking for rollout planning.
- **Custom CPU kernel patches must migrate** to `python/sglang/kernels/aot/csrc/cpu/` in v0.5.17+ ([#34193](https://github.com/sgl-project/sglang/issues/34193)).
- **Gateway users:** Anthropic Messages API proxy support for `sgl-model-gateway` is in progress ([#20566](https://github.com/sgl-project/sglang/pull/20566)); if you rely on session affinity under uneven worker load, watch the bounded-load routing-key proposal ([#33625](https://github.com/sgl-project/sglang/issues/33625)).
- **Grammar-constrained generation:** upgrade to include the grammar memory-leak fix ([#19412](https://github.com/sgl-project/sglang/pull/19412)) if you serve long-lived `json_schema`/`regex` workloads — the per-request leak accumulates to OOM.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

## 1. Today's Highlights

Two point releases landed: **b10333** fixes a Q5_0 dispatch gap in the SpaceMiT backend, and **b10332** removes the `GGML_HIP_ROCWMMA_FATTN` CI flag, further signaling the project's move away from rocWMMA FlashAttention. The most consequential open threads are correctness issues around MTP (multi-token prediction) state leakage in Qwen3.6 models and reports of stale KV data in the Vulkan FlashAttention path. On the optimization side, an HIP Q2_0 kernel change reports **33–35% faster token generation on gfx1201**, and SYCL dense-FFN fusion is moving forward.

## 2. Releases & Breaking Changes

- **b10333** — Fix missing Q5_0 dispatch in SpaceMiT backend.  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10333
- **b10332** — CI: remove `GGML_HIP_ROCWMMA_FATTN`. This is a CI/build-signal change rather than a runtime API change, but it means rocWMMA-based FlashAttention is no longer a tested/expected configuration.  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10332

No other user-facing API or config migration notes in the last 24 hours.

## 3. New Model & Hardware Support

- **BitNet b1.58-2B-4T hidden activation fix** — PR honors `relu2` from GGUF metadata instead of hardcoding SiLU, fixing wrong-but-finite logits.  
  https://github.com/ggml-org/llama.cpp/pull/26751
- **Nemotron Nano MTP support** — Adds multi-token prediction for the Nemotron model family, currently dependent on upstream speculative-decoding PR #26623.  
  https://github.com/ggml-org/llama.cpp/pull/26725
- **Alternative Hexagon NPU backend** — New `ggml-hexagon-jz` backend for Qualcomm Hexagon NPUs on Android, designed to coexist with the existing implementation.  
  https://github.com/ggml-org/llama.cpp/pull/26373
- **Restore quantizable mmprojs** — Regression fix for quantizing vision projection GGUFs after the #22004 refactor. Relevant for upcoming larger vision towers.  
  https://github.com/ggml-org/llama.cpp/pull/26818

## 4. Performance & Optimization

- **HIP Q2_0 dot-product for gfx1201** — Replaces HIP byte permutation with native instructions; reports ~33–35% token-generation improvement on RDNA4-class GPUs.  
  https://github.com/ggml-org/llama.cpp/pull/26753
- **SYCL dense-FFN fusion** — Fuses `mul_mat(gate) + mul_mat(up) + GLU` for `q4_K` dense feed-forward networks, extending earlier fusion work.  
  https://github.com/ggml-org/llama.cpp/pull/26779
- **Vulkan coopmat1 KV dequantization** — Removes 32× redundant dequantization during prefill; reorganizes F16 KV per-head in scratch to improve FA memory reads.  
  https://github.com/ggml-org/llama.cpp/pull/25494
- **Parallelized RPC tensor hashing** — Reduces RPC model load time by 20–60% on cache-load paths via `GGML_RPC_LOAD_THREADS`.  
  https://github.com/ggml-org/llama.cpp/pull/26291
- **Speculative decoding auto-detect** — Auto-detects draft model spec type from local GGUF metadata, preventing silent speculative-decoding degradation when no `--spec-type` is passed.  
  https://github.com/ggml-org/llama.cpp/pull/26814
- **Proposed expert caching** — Closed PR for off-by-default expert caching (`-ehs N`), author indicates a cleaner rework is coming.  
  https://github.com/ggml-org/llama.cpp/pull/26563

## 5. Stability & Regressions

- **Vulkan FA stale K/V corruption** — FlashAttention lets freed KV cells influence output on Radeon 8060S / Strix Halo. High severity correctness issue.  
  https://github.com/ggml-org/llama.cpp/issues/26744
- **MTP state leakage across requests** — Qwen3.6-35B-A3B with MTP produces non-deterministic output and degraded quality when state persists between inference calls.  
  https://github.com/ggml-org/llama.cpp/issues/26425
- **Long-session MTP repeated output** — Qwen3.6 27B MTP outputs repeated `////` after extended sessions on CUDA.  
  https://github.com/ggml-org/llama.cpp/issues/23577
- **Temp-0 tool-calling nondeterminism** — Qwen3.6-A3B on Vulkan flips between valid and invalid tool calls with and without prompt cache, across restarts.  
  https://github.com/ggml-org/llama.cpp/issues/26817
- **DeepSeek V4 garbled output on ROCm** — Strix Halo / HIP backend produces corrupted output. A separate report also reproduces this over RPC + Vulkan.  
  https://github.com/ggml-org/llama.cpp/issues/25436  
  https://github.com/ggml-org/llama.cpp/issues/26685
- **Blackwell SOFT_MAX crash** — Reported crash on RTX 5090 (SM 12.0) with large models; author supplied patches but no upstream fix yet.  
  https://github.com/ggml-org/llama.cpp/issues/25060
- **Native MMA FA regression on RDNA4** — After rocWMMA removal, prompt processing at deep context is up to 2× slower on gfx1201; decode is unaffected or slightly faster.  
  https://github.com/ggml-org/llama.cpp/issues/26220
- **GLM-5.2 regression on ROCm/HIP** — Prefill ~6× slower and load time ~40× longer on 8× MI300X after the Indexer PR #25407.  
  https://github.com/ggml-org/llama.cpp/issues/26445
- **DFlash regression on AMD APU** — ~2× slower than baseline with quantized MoE on Strix Halo.  
  https://github.com/ggml-org/llama.cpp/issues/25117
- **Server tool-calling grammar crash** — `tool_choice: "required"` throws for XML-style tool-call models like Nemotron-3.  
  https://github.com/ggml-org/llama.cpp/issues/26737
- **Multimodal base64 `image_url` 500** — OpenAI-compatible endpoint fails with JSON parse error for base64 images.  
  https://github.com/ggml-org/llama.cpp/issues/26770

## 6. What This Means for Application Developers

- **MTP remains risky in production.** If you serve Qwen3.6 variants or Nemotron with MTP enabled, pin exact versions and treat long-running/stateful sessions as suspect. The state-leakage reports are serious enough to disable MTP until fixed.
- **Vulkan/ROCm FlashAttention needs extra validation.** Stale-KV and garbled-output reports are concentrated on AMD APUs and RDNA4. If you target those platforms, consider `-fa 0` or CPU-offload fallbacks for correctness-sensitive workloads.
- **Tool-calling reliability is still backend-dependent.** Temp-0 nondeterminism and grammar-stack crashes on XML-style tool models can break agent loops. Test tool-calling on your exact backend and template before relying on it.
- **The server tool ecosystem is expanding** — SSH/podman tool isolation, `read_media`, and web-search tools are in flight. These broaden what agents can do, but they are experimental and should be treated as untrusted unless sandboxed.  
  https://github.com/ggml-org/llama.cpp/pull/26774  
  https://github.com/ggml-org/llama.cpp/pull/25877  
  https://github.com/ggml-org/llama.cpp/pull/26805
- **ROCm HIP is in a transition period.** With rocWMMA removal and the new native MMA kernels, expect performance/correctness churn on RDNA4 and CDNA-class GPUs over the next few releases.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Project Digest — 2026-08-10

## Today's Highlights

No tagged releases landed in the last 24 hours. The main activity is around tool-call reliability and MLX: a new fix filters namespace tools before hitting llama-server ([#17630](https://github.com/ollama/ollama/pull/17630)), while the MLX runner is gaining image input support ([#17600](https://github.com/ollama/ollama/pull/17600)) and restoring proper version tagging ([#17637](https://github.com/ollama/ollama/pull/17637)). Fresh regressions include `gpt-oss` returning HTTP 500 on its own generated tool calls ([#17638](https://github.com/ollama/ollama/issues/17638)) and a web UI chat-loading regression for heavy conversations ([#17635](https://github.com/ollama/ollama/issues/17635)).

## Releases & Breaking Changes

- No new releases in the last 24 hours.
- Internal manifest cleanup is in progress: [PR #17619](https://github.com/ollama/ollama/pull/17619) removes the unused OCI `rootfs.diff_ids` field from model config blobs. Model identity is unaffected, but config blobs are smaller — tooling that introspects raw config blobs should tolerate that field being gone.

## New Model & Hardware Support

- **SYCL backend discovery**: [PR #17633](https://github.com/ollama/ollama/pull/17633) adds opt-in discovery and stable display naming for the existing `ggml-sycl` backend, enabled via `OLLAMA_SYCL=1`. Closes [#16930](https://github.com/ollama/ollama/issues/16930).
- **MLX vision/image support**: [PR #17600](https://github.com/ollama/ollama/pull/17600) adds image input to the MLX runner. MLX vision checkpoints were exposed as image-capable, but the client was not sending media to the runner.
- **MLX version tagging**: [PR #17637](https://github.com/ollama/ollama/pull/17637) restores git-hash version tagging for the MLX library, fixing an issue where official version strings were reported incorrectly.
- No new external model releases were announced.

## Performance & Optimization

- [PR #17619](https://github.com/ollama/ollama/pull/17619) removes redundant layer digest duplication from model configs. On per-tensor safetensors models this reduces config blob size by over 100KB.
- [PR #17425](https://github.com/ollama/ollama/pull/17425) hardens integration tests, fixes VRAM gate matching for untagged model names, and keeps CPU-only hosts (`OLLAMA_MAX_VRAM=0`) running modest models.
- [PR #17600](https://github.com/ollama/ollama/pull/17600) explicitly preserves prefix caching and speculative decoding while adding MLX image support.

## Stability & Regressions

Ranked by likely impact:

1. **`gpt-oss` rejects its own tool calls** — [Issue #17638](https://github.com/ollama/ollama/issues/17638): HTTP 500 `error parsing tool call` on both the library model and an HF GGUF distil. No fix PR yet.
2. **`ollama pull hf.co/...` missing built-in tool renderer/parser** — [Issue #17636](https://github.com/ollama/ollama/issues/17636): architecture is detected and `tools` is listed, but the built-in `RENDERER`/`PARSER` pair is not applied, making tool-calling unreliable. No fix PR yet.
3. **Web chat loading regression** — [Issue #17635](https://github.com/ollama/ollama/issues/17635): opening heavy chats loads the entire conversation at once instead of scroll-up lazy loading, causing hangs. No fix PR yet.
4. **Cloud endpoint billing inconsistency** — [Issue #17639](https://github.com/ollama/ollama/issues/17639): `glm-5.2:cloud` returns 402 `extra usage only` against `https://ollama.com/v1` even for Pro subscribers, while the signed-in local client uses included Pro quota. No fix PR yet.
5. **MLX generation regression on Apple Silicon** — [Issue #17632](https://github.com/ollama/ollama/issues/17632): `laguna-s-2.1:mlx-bf16` intermittently fails to terminate and degenerates into stream-of-consciousness output. No fix PR yet.
6. **OpenAI-compat template rendering with empty assistant content** — [Issue #14181](https://github.com/ollama/ollama/issues/14181): `content: ""` alongside `tool_calls` causes models like `qwen3-coder` to fall into text-based tool markup.
7. **CLI dragged-image path handling** — [Issue #10333](https://github.com/ollama/ollama/issues/10333): two open fix PRs exist: [PR #17640](https://github.com/ollama/ollama/pull/17640) for escaped backslashes/tilde paths and [PR #17634](https://github.com/ollama/ollama/pull/17634) for shell-quoted apostrophes.

## What This Means for Application Developers

- **Tool-calling remains the riskiest integration point.** Three open issues ([#17638](https://github.com/ollama/ollama/issues/17638), [#17636](https://github.com/ollama/ollama/issues/17636), [#14181](https://github.com/ollama/ollama/issues/14181)) show that model-generated tool calls can still fail at the server layer. If you build agents on Ollama, pin a tested version, validate tool-call payloads before sending them back, and avoid direct `hf.co` pulls for tool-heavy models until the built-in renderer/parser gap is fixed.
- **Namespace-scoped tools are not supported natively.** [PR #17630](https://github.com/ollama/ollama/pull/17630) will prevent crashes by filtering namespace tools before llama-server, but full parity with OpenAI Responses API namespaced tool calls is still pending.
- **Cloud usage logic can differ by endpoint.** If you use Ollama Pro with `https://ollama.com/v1`, watch for unexpected 402s on cloud models; routing via the signed-in local client may use included quota instead.
- **MLX is improving quickly for Apple Silicon users.** Image input, version tagging, and ongoing fixes make MLX more viable, but the new regression in [#17632](https://github.com/ollama/ollama/issues/17632) suggests you should test specific MLX models before relying on them in production.
- **No release today means these fixes are not yet in a stable tag.** Plan around the current known issues if you are deploying Ollama at scale.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-08-10

## Today’s Highlights

No new LiteLLM release was published in the last 24 hours, but issue/PR activity remains heavy: 56 issues and 134 PRs were touched. The most operationally significant items are a usage-stats regression in 1.97.0-RC1 ([#36337](https://github.com/BerriAI/litellm/issues/36337)) and a streaming usage undercounting bug in chained proxy deployments ([#36114](https://github.com/BerriAI/litellm/issues/36114)). On the model side, Anthropic-direct native structured output support was flagged for newer Claude models, and Bedrock Nova 2 geo-prefix handling was improved.

## Releases & Breaking Changes

None. No new releases, API changes, or migration notes were detected in the last 24 hours.

## New Model & Hardware Support

- **Anthropic native structured outputs**: PR [#35930](https://github.com/BerriAI/litellm/pull/35930) marks `claude-sonnet-5` and `claude-haiku-4-5` as `supports_native_structured_output: true` for Anthropic-direct routes.
- **Bedrock Nova 2 geo support**: PR [#33775](https://github.com/BerriAI/litellm/pull/33775) extends Nova 2 model detection to `jp.` and `global.` geo prefixes; PR [#33776](https://github.com/BerriAI/litellm/pull/33776) corrects the Nova 2 Lite pricing map from `apac` to `jp`.

## Performance & Optimization

- **Router `least_busy` counter fix**: PR [#34444](https://github.com/BerriAI/litellm/pull/34444) clamps the per-deployment request counter at zero to prevent negative counters under race conditions. This is a reliability improvement for router balancing rather than a measured throughput change.
- No concrete latency, memory, or kernel-level optimization numbers were reported in this window.

## Stability & Regressions

Ranked by operational severity:

- **High — Usage stats broken on 1.97.0-RC1**: The UI stops counting successful/failed requests after upgrade from 1.95.0 ([#36337](https://github.com/BerriAI/litellm/issues/36337)). Open; no fix PR in this window.
- **High — Streaming usage severely undercounted**: Correct non-streaming usage but wrong streaming usage through chained proxies; root cause is in the stream aggregation layer ([#36114](https://github.com/BerriAI/litellm/issues/36114)). Open.
- **High — FastAPI import regression**: Proxy fails to start with `ImportError: cannot import name 'get_flat_dependant'` on `fastapi>=0.141.0` ([#35763](https://github.com/BerriAI/litellm/issues/35763)). Closed in this window.
- **Medium — OpenAI gpt-5.6 family tool calls fail**: Function tools with `reasoning_effort` error on `/chat/completions` ([#33221](https://github.com/BerriAI/litellm/issues/33221)). Open.
- **Medium — Recursive tool schemas hang `unpack_defs`**: High-fan-in recursive `$defs`/`$ref` schemas cause unbounded hangs on Bedrock/Vertex calls ([#34328](https://github.com/BerriAI/litellm/issues/34328)). Open.
- **Medium — Anthropic streaming bridge crashes**: Empty `choices` chunks from OpenAI/Azure-compatible backends crash `/v1/messages` streaming ([#30761](https://github.com/BerriAI/litellm/issues/30761)). Closed.
- **Medium — Streaming upstream reset misreported**: Upstream reset becomes a synthetic `finish_reason: stop` / `[DONE]` ([#33404](https://github.com/BerriAI/litellm/issues/33404)). Closed.
- **Medium — Vertex Gemini web search streaming crash**: `stream=True` + `web_search_options` fails mid-stream with `MidStreamFallbackError` on Flash models ([#27928](https://github.com/BerriAI/litellm/issues/27928)). Closed.
- **Medium — Responses API + MCP multi-turn broken**: `previous_response_id` is double-encoded when calling hosted MCP tools ([#32031](https://github.com/BerriAI/litellm/issues/32031)). Closed.
- **Medium — Proxy hooks bypassed on `/v1/messages`**: `async_pre_call_hook` and other `CustomLogger` hooks are not invoked on the Anthropic endpoint ([#27518](https://github.com/BerriAI/litellm/issues/27518)). Open.
- **Low/Medium — Other open issues active today**: `user_header_mappings` not working with OpenWebUI ([#14667](https://github.com/BerriAI/litellm/issues/14667)); `output_parse_pii` has no effect ([#14516](https://github.com/BerriAI/litellm/issues/14516)); `max_end_user_budget_id` ignores budget resets ([#24675](https://github.com/BerriAI/litellm/issues/24675)); web search follow-up requests ignore custom `api_base`/`api_key` ([#26389](https://github.com/BerriAI/litellm/issues/26389)); Brave Search log spam ([#27645](https://github.com/BerriAI/litellm/issues/27645)).

## What This Means for Application Developers

- If you are on 1.97.0-RC1 and rely on usage dashboards, consider pinning to 1.95.0 until the usage-stats regression is resolved ([#36337](https://github.com/BerriAI/litellm/issues/36337)).
- Streaming usage accounting is still not trustworthy in chained proxy setups; validate `usage` independently before using it for billing or spend tracking ([#36114](https://github.com/BerriAI/litellm/issues/36114)).
- Agent builders using OpenAI gpt-5.6 family models with tools should test `reasoning_effort` + tools carefully before rollout ([#33221](https://github.com/BerriAI/litellm/issues/33221)).
- Anthropic-route users should watch for hook bypasses and streaming edge cases on `/v1/messages` ([#27518](https://github.com/BerriAI/litellm/issues/27518)).
- Claude `claude-sonnet-5` and `claude-haiku-4-5` now advertise native structured output support on Anthropic-direct, but verify provider-side behavior before relying on it ([#35930](https://github.com/BerriAI/litellm/pull/35930)).

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth Digest — 2026-08-10

## Today's Highlights

Unsloth shipped **v0.1.527-beta** with Studio pipeline-signal and installer-pin fixes. The main engineering focus is now memory-planning correctness: a 3.4 GB video model on a 16 GB ROCm GPU can request a 66.54 GiB allocation, and multi-GPU diffusion can leave VRAM idle while swapping ~70 GiB into host RAM. MiniMax-H3 is also landing as Studio’s second trainable video family, with joint video+audio LoRA support.

## Releases & Breaking Changes

- **v0.1.527-beta** — [GitHub release](https://github.com/unslothai/unsloth/releases/tag/v0.1.527-beta)
  - Studio now judges cached-pipeline signals on the snapshot the row actually loads — [#7851](https://github.com/unslothai/unsloth/pull/7851)
  - `install.sh` / `install.ps1` pin bumped to `unsloth>=2026.8.3` — [#7860](https://github.com/unslothai/unsloth/pull/7860)
  - No explicit migration notes beyond the installer minimum-version bump.

## New Model & Hardware Support

- **MiniMax-H3 joint video + audio LoRA training** is in progress, making MiniMax-H3 Studio’s second trainable video family — [#8244](https://github.com/unslothai/unsloth/pull/8244)
- **MiniMax-H3 Qwen3-VL conditioner** will run from the hosted INT8 checkpoint instead of CPU-offloading every component — [#8283](https://github.com/unslothai/unsloth/pull/8283)
- **LTX-2.3 multi-checkpoint GGUF support**: PR fixes pickers collapsing a 63-file repo with three distinct checkpoints into one row per quant — [#8222](https://github.com/unslothai/unsloth/pull/8222)
- **Qwen-Image-Edit-2511 GGUF** download handling is being fixed so the pick doesn’t also pull the dense base transformer — [#8232](https://github.com/unslothai/unsloth/pull/8232), [#8234](https://github.com/unslothai/unsloth/issues/8234)
- **Portability gap**: community request for e2e verification scripts on Intel XPU / AMD ROCm / non-CUDA devices — [#8099](https://github.com/unslothai/unsloth/issues/8099)
- **Known model gaps**: Z-Image LoRA currently only exposes the distilled Turbo checkpoint, not the upstream undistilled base — [#8270](https://github.com/unslothai/unsloth/issues/8270)

## Performance & Optimization

- **SDPA memory explosion on ROCm** — Wan2.2-TI2V-5B (3.4 GB) on a 16 GB gfx1200 GPU requests a single **66.54 GiB** allocation because attention falls back to the math kernel; neither flash nor memory-efficient SDPA is available — [#8225](https://github.com/unslothai/unsloth/issues/8225)
- **Multi-GPU diffusion budgeting** — Studio budgets only against one GPU, so a two-24 GB-card host can show **~70 GiB RAM usage vs ~1 GiB VRAM usage** — [#8235](https://github.com/unslothai/unsloth/issues/8235)
- **Unnecessary dense-transformer downloads** — Picking a Qwen-Image-Edit GGUF at Q6_K fetches the 16.85 GB GGUF, then starts a **57.72 GB** base-repo download, of which **40.86 GB is the dense transformer** that is never used; fix PR is open — [#8232](https://github.com/unslothai/unsloth/pull/8232)
- **Unified-memory load protection** — PR adds a refusal path for diffusion/video loads that cannot fit, instead of letting the OS kill the Studio process — [#8213](https://github.com/unslothai/unsloth/pull/8213)
- **Recently closed memory issues**:
  - AMD diffusion whole-module offload: 20-step image took **48m25s total**, with only 1m47s in sampling at 5.40 s/it — [#8081](https://github.com/unslothai/unsloth/issues/8081)
  - Inference subprocess retained VRAM after model unload, causing GGUF context fit to overcommit the GPU — [#8220](https://github.com/unslothai/unsloth/issues/8220)
  - Windows ROCm image generation silently exhausted host RAM when memory plan under-budgeted — [#8188](https://github.com/unslothai/unsloth/issues/8188)

## Stability & Regressions

Ranked by severity; fix PR noted where present.

- **Critical / memory-safety**
  - Wan2.2-TI2V-5B can request **66.54 GiB on a 16 GB GPU** due to SDPA math-kernel fallback; no fix PR yet — [#8225](https://github.com/unslothai/unsloth/issues/8225)
  - Diffusion/video loads on unified-memory hosts can get the Studio process killed by the OS; fix PR open — [#8213](https://github.com/unslothai/unsloth/pull/8213)

- **Correctness / data-integrity**
  - GGUF pick downloads the dense base transformer and denoises with it instead of the requested GGUF fast path; fix PR open — [#8232](https://github.com/unslothai/unsloth/pull/8232)
  - `lr_warmup_steps` in `FAMILY_TRAIN_DEFAULTS` is a silent no-op under the default constant scheduler — [#8269](https://github.com/unslothai/unsloth/issues/8269)
  - Qwen3-Coder-30B-A3B GGUF tool-calling is unreliable via Ollama; root cause found and fix filed against Ollama, not Unsloth — [#8266](https://github.com/unslothai/unsloth/issues/8266)
  - Z-Image LoRA training only exposes the distilled Turbo checkpoint, diverging from the upstream recipe — [#8270](https://github.com/unslothai/unsloth/issues/8270)

- **Model-loading regressions**
  - NVFP4 fails to load on a 16 GB RTX 5060 Ti — [#8246](https://github.com/unslothai/unsloth/issues/8246)
  - Nemotron attention-support detection breaks for `trust_remote_code` models; fix PR open — [#7527](https://github.com/unslothai/unsloth/issues/7527), [#8229](https://github.com/unslothai/unsloth/pull/8229)

- **CI / tooling**
  - Backend `main` is red because two diffusers-import preflight tests only pass on GPU hosts; fix PR open — [#8281](https://github.com/unslothai/unsloth/pull/8281)
  - Backend CI jobs are hitting timeouts; PR adds a CI timeout independent of suite runtime — [#8286](https://github.com/unslothai/unsloth/pull/8286)
  - Two diffusion-training tests made host-independent — [#8275](https://github.com/unslothai/unsloth/pull/8275), [#8285](https://github.com/unslothai/unsloth/pull/8285)

- **Docs / UX**
  - Docker install docs contain incorrect volume bindings, open with 16 comments — [#4396](https://github.com/unslothai/unsloth/issues/4396)
  - macOS installer has two bugs including a self-referential `.app` symlink; fix PR open — [#8279](https://github.com/unslothai/unsloth/pull/8279)

## What This Means for Application Developers

- **Do not assume multi-GPU diffusion works automatically.** Track [#8235](https://github.com/unslothai/unsloth/issues/8235) before relying on Studio for multi-GPU image/video serving.
- **GGUF users should expect download improvements soon.** Without [#8232](https://github.com/unslothai/unsloth/pull/8232), picking an image-editing GGUF can trigger a ~57 GB dense-base download.
- **ROCm/AMD deployments need extra memory headroom.** SDPA math-kernel fallback can materialize enormous attention matrices; use flash/memory-efficient paths where available or explicitly reduce batch/context — [#8225](https://github.com/unslothai/unsloth/issues/8225).
- **Agent builders using Qwen3-Coder GGUF via Ollama should watch upstream Ollama.** Tool-call formatting is broken outside Unsloth itself — [#8266](https://github.com/unslothai/unsloth/issues/8266).
- **Training configs that rely on `lr_warmup_steps` will not get warmup** under the default constant scheduler; set a scheduler that honors warmup or override the default — [#8269](https://github.com/unslothai/unsloth/issues/8269).
- **Expect temporary CI noise.** `main` is currently failing on host-dependent diffusers tests; fixes are already open in [#8281](https://github.com/unslothai/unsloth/pull/8281) and [#8286](https://github.com/unslothai/unsloth/pull/8286).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*