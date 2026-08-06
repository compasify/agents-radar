# AI Infrastructure Digest 2026-08-06

> Generated: 2026-08-06 01:24 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# AI Infrastructure Cross-Project Comparison — 2026-08-06

## 1. Ecosystem Overview

The ecosystem is in an accelerated frontier-model cycle: DeepSeek-V4, Kimi-K3, and MiniMax variants are being enabled across every layer before their serving stacks are fully hardened, producing a widening surface of correctness bugs (repeated-token degeneration, decode hangs, KV corruption, accuracy drops) alongside rapid enablement work. Hardware expansion is now first-class — AMD gfx1250, Intel XPU, and NVIDIA SM12x paths are active across vLLM, SGLang, and llama.cpp, while Apple Silicon work is concentrated in Ollama's MLX runner. Local serving is shipping fastest (llama.cpp: 9 builds in 24h), while datacenter engines are consolidating internals (quantization frameworks, Triton kernel migration) rather than releasing. Speculative decoding has become the new optimization frontier — strongest signals in llama.cpp (MTP), Ollama (DFlash), and SGLang (GDN) — but it is also the largest open cluster of unresolved correctness bugs. Gateway and training layers show maturation over novelty: LiteLLM is hardening guardrails around agent tool traffic, and Unsloth is fix-looping Studio reliability.

## 2. Activity Comparison

Counts reflect issues/PRs surfaced in today's digests, not full GitHub totals.

| Project | Issues surfaced | PRs surfaced | Release status (24h) |
|---|---:|---:|---|
| vLLM | 17 | 14 | None |
| SGLang | 22 | 11 | None; `release/v0.5.17` cherry-pick active — patch imminent |
| llama.cpp | 15 | 21 | **9 builds** (b10278–b10289) |
| Ollama | 8 | 12 | None |
| LiteLLM | 21 | 12 | v1.97.0-dev.1 (dev) |
| Unsloth | 24 | 14 | None; install floors bumped to `unsloth>=2026.8.5` |

Signal: llama.cpp maintains a much faster release cadence than the Python serving engines. SGLang's imminent patch release and vLLM's zero releases both point to stabilization mode. Unsloth's high issue count is concentrated in its Studio product surface, not the core training library.

## 3. Model Support Race

**Shipped/merged in the last 24h:**
- **llama.cpp**: Qwen3-TTS support (+CPU fix), DeepSeek-OCR multi-row batching, MiniMax-M3 CI re-enable, Granite4 Vision fix.
- **Ollama**: Apertus v1.5 8B/70B chat rendering.
- **SGLang**: Inkling-Small vocab/streamer fixes, FP8 routing to FlashInfer on SM89/SM90.

**In review / in flight:**
- **vLLM**: DeepSeek-V4-Flash SM12x enablement ([#41834]); Kimi-K3 tracker ([#50001]); MiniCPM-V on Transformers v5; XPU MXFP8 for DeepSeek V4.
- **SGLang**: DeepSeek V4 day-0 on Hopper/XPU, Kimi-K3 roadmap, MiniMax-H3 diffusion on XPU, AMD gfx1250 arch support.
- **llama.cpp**: BailingMoE3/Ling 3.0 with MTP, LongCat-Flash and LongCat-Flash-Lite.
- **Ollama**: MLX Nemotron 3 (NVFP4/MXFP8 kernels), DFlash block-diffusion draft models.

**Who is ahead:**
- **Frontier datacenter (DeepSeek-V4, Kimi-K3)**: vLLM and SGLang are effectively tied. vLLM has more merged infrastructure but is blocked on A100/SM8x for DeepSeek-V4-Flash; SGLang is more aggressive on day-0 hardware breadth (XPU, gfx1250) but has more open stability issues on the same models.
- **Local/edge**: llama.cpp is decisively ahead — broadest model coverage, fastest release cadence, and the only project shipping new model families (TTS, OCR, MoE variants) daily.
- **Apple Silicon**: Ollama is the only project with native MLX runner momentum (KV-cache fixes, DFlash, Nemotron 3 kernels).
- **Gateway layer**: LiteLLM is catalog-limited, not engine-limited — missing pricing entries for `xiaomi/mimo-v2.5-pro` ([#27325]) and `glm-5.2[1m]` ([#32218]) are the bottlenecks.
- Notably, **no project has clean production-grade DeepSeek-V4 support today**: vLLM has SM8x gaps and GB10 hangs; SGLang has decode hangs and a 3.12-point AIME accuracy regression under DSpark; llama.cpp has a CUDA flash-attention degeneration bug ([#26509]); Ollama loses KV cache after idle ([#17577]).

## 4. Performance Frontier

| Theme | Evidence |
|---|---|
| **Weight loading / startup** | SGLang Weight Cache Daemon targets post-quantized load time from **306–327s → <1s** on Qwen3-235B FP8 via CUDA IPC ([#33522]). llama.cpp adds host-buffer registration for mmap'd weights on CUDA/SYCL ([#26659]). |
| **KV cache & long context** | SGLang fuses Kimi-K3 gate projection into QKV-A GEMM ([#33623]) but suffers hierarchical-cache KV corruption ([#33656]). vLLM tunes MLA CUDA-graph capture on ROCm ([#51119]). Ollama fixes MLX KV restore/checkpoint bugs ([#17581], [#15914]). Unsloth asks for per-chat KV allocation ([#7908]). |
| **Quantization** | vLLM consolidating: generic `QuantKey`-driven `ModelOptLinearMethod` ([#49381]) + per-quant linear backend selection ([#51204]); MXFP4 MoE autotune aligned to TRTLLM buckets ([#50942]). SGLang adds scalar-scale-A FP8 GEMM support ([#33469]). |
| **Speculative decoding** | llama.cpp ships MTP sampler/memory fixes but warns MTP is not production-safe (crashes under KV saturation, cross-request state leakage). Ollama proposes DFlash whole-block proposal ([#17571]). SGLang avoids materializing QKV tensors in GDN target verification ([#33778]). Correctness is the common bottleneck. |
| **Distributed serving** | vLLM fixes dense multinode DP port conflicts ([#49212]); SGLang plans Decode Context Parallelism + Helix Parallelism for Q3 ([#29736]); LiteLLM adds per-deployment failure-policy and cooldown overrides ([#34416]). |
| **Kernels** | vLLM proposes Triton tensor-descriptor migration off `make_block_ptr` ([#42545]); llama.cpp adds hipCUB `top_k`/`argsort` on ROCm ([#26592]) and an OpenCL flash-attention bank-conflict fix; SGLang adds gfx1250 FP4 scale-instruction paths. |

The frontier has shifted from raw GEMM throughput to **time-to-first-output**: weight loading, KV reuse, and speculative decoding dominate because agent workloads amplify startup and decode latency.

## 5. Layer Positioning

| Layer | Projects | Core value | Today's signal |
|---|---|---|---|
| Datacenter serving | vLLM, SGLang | High-throughput multi-GPU inference, continuous batching, PagedAttention | Frontier enablement + internal consolidation, few releases |
| Local/edge runtime | llama.cpp, Ollama | Single-node, broad hardware, GGUF/MLX, simplicity | llama.cpp at 9 builds/day; Ollama deep in MLX correctness |
| Gateway/proxy | LiteLLM | Multi-provider translation, routing, budgets, guardrails | Agent-tool guardrails and SSE reliability hardening |
| Training/fine-tuning | Unsloth | QLoRA, Studio product, GGUF export | Studio reliability fixes; core library stable |

The layers are converging on the same model families but diverging in constraints: datacenter engines optimize for throughput and multi-node correctness; local runtimes optimize for portability and startup latency; the gateway optimizes for protocol fidelity and policy enforcement; the training layer optimizes for memory efficiency and workflow stability. Cross-layer integration points (GGUF export, OpenAI-compatible APIs, `/metrics` naming) are where differences surface most — e.g., llama.cpp explicitly aligned its spec-decode metric names with vLLM ([#26389]).

## 6. Trend Signals

1. **DeepSeek-V4 is the ecosystem's stress test — and it is failing many of them.** Every layer has open critical bugs on this model family: vLLM (SM8x blocked, GB10 hangs), SGLang (DSpark accuracy drop 97.08→93.96, decode hangs), llama.cpp (repeated `<` output on CUDA FA), Ollama (KV cache eviction). Do not promote DeepSeek-V4 serving to production without per-project validation; pin versions and disable spec-decode where possible.

2. **Speculative decoding/MTP is the new optimization battleground, but correctness lags adoption.** llama.cpp, SGLang, and Ollama are all actively building on it while triaging crashes, state leakage, and accuracy regressions. Application developers should treat spec-decode as experimental for multi-tenant workloads and benchmark accuracy deltas, not just token throughput.

3. **Multi-vendor hardware is table stakes — with a QA tax.** AMD gfx1250 (SGLang), Intel XPU (vLLM, SGLang), SM12x (vLLM PR [#41834]), and ROCm hipCUB (llama.cpp) are all advancing, but platform-specific failures (XPU TP hangs, ROCm GLM-5.2 indexer regression, Vulkan DeviceLost) consume a disproportionate share of open issues. Expect hardware-specific pinning requirements to persist through 2026.

4. **Agent workloads are rewriting the priority list.** LiteLLM's merged guardrail scanning for `/v1/messages` tool traffic ([#35999]) and MCP post-call filtering ([#35980]) close real security holes for agent scaffolding. Long-stream keepalives ([#36024]) target Claude Code timeouts. SGLang's position-independent RadixAttention RFC ([#30928]) directly addresses agentic/RAG KV reuse. Watch these three threads.

5. **Startup and load latency are becoming competitive metrics.** SGLang's Weight Cache Daemon (300× improvement) and llama.cpp's host-buffer registration both attack the same problem: model weight loading is now a visible fraction of user-perceived latency, especially for large MoE models. This is a different optimization axis than the traditional decode-throughput race.

6. **Reasoning-model plumbing is still fragile.** vLLM's Rust frontend is reworking Qwen/QwQ parser auto-detection ([#51169]); MiniMax-M3 reasoning tokens still leak into `content` ([#46042]); Ollama's `filterThinkTags` mutation bug ([#17573]) can corrupt model state across requests. If your application parses reasoning token streams, validate against the specific engine version and pin aggressively.

**Bottom line for infrastructure engineers:** the ecosystem is simultaneously shipping the next wave of frontier models and paying down correctness debt from the previous one. llama.cpp is the safest bet for local deployment velocity, vLLM/SGLang remain competitive for datacenter serving but require per-model validation, LiteLLM is the right place to enforce agent policy, and speculative decoding — the most promising performance lever today — is not yet safe to trust by default.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest — 2026-08-06

## Today's Highlights
DeepSeek-V4-Flash continues to dominate: a new issue (#50576) amplifies demand for SM8x/A100 support, while PR #41834 carries the SM12x enablement stack for Blackwell and GB10. The Rust frontend is maturing quickly with fixes for Qwen reasoning parser auto-detection and duplicate tiktoken ranks. Quantization code is being consolidated — a generic QuantKey-driven `ModelOptLinearMethod` (#49381) and per-quantization linear backend selection (#51204).

## Releases & Breaking Changes
No releases published in the last 24 hours. No new API or config changes to report.

## New Model & Hardware Support
- [**DeepSeek-V4-Flash on SM8x (A100/A800)**](https://github.com/vllm-project/vllm/issues/50576) — New issue with 56 comments; root cause points to DeepGEMM `sm_80` assertions. Supersedes/tracks the earlier [issue #40851](https://github.com/vllm-project/vllm/issues/40851) (20 👍).
- [**DeepSeek-V4-Flash on SM12x**](https://github.com/vllm-project/vllm/pull/41834) — Open PR adding SM120/SM121 support for RTX PRO 6000, RTX 5090-class, and GB10/DGX Spark, with the full fallback + tuning stack for V1.
- [**Kimi-K3 tracking**](https://github.com/vllm-project/vllm/issues/50001) — Upstream tracker covering KV cache manager, KDA kernels, and prefix caching constraints; the [ROCm roadmap](https://github.com/vllm-project/vllm/issues/50682) notes AITER fused-MoE a16w4/a8w4 baselines already integrated.
- [**MiniCPM-V on Transformers v5**](https://github.com/vllm-project/vllm/pull/48413) — Fixes placeholder replacement and image processor loading for MiniCPM-V 2.5/2.6/4.0/4.5.
- [**XPU MXFP8 for DeepSeek V4**](https://github.com/vllm-project/vllm/pull/48476) — Adds compressed-tensors MXFP8 weight support for DeepSeek V4 output projection on Intel oneDNN.
- [**ROCm stack bump**](https://github.com/vllm-project/vllm/pull/50605) — Torch 2.13, Triton 3.8, torchaudio/torchvision upgrade for ROCm builds.

## Performance & Optimization
- [**Batch Invariant (deterministic inference)**](https://github.com/vllm-project/vllm/issues/27433) — 67 comments; tracks remaining work after the initial nondeterminism fix, one of the most active performance threads.
- [**MXFP4 MoE autotune alignment**](https://github.com/vllm-project/vllm/pull/50942) — Aligns TRTLLM MXFP4 buckets with the shared FlashInfer helper so autotune covers up to 8,192 tokens with DP-aware bucketing, matching other backends.
- [**ROCm MLA CUDA graph capture**](https://github.com/vllm-project/vllm/pull/51119) — Raises `min_kv_seq_len` from 1 to 16,384 for saturated Gluon split selection during FULL CUDA Graph capture.
- [**GLM 5.2 sprint**](https://github.com/vllm-project/vllm/issues/46654) and [**DeepSeek-V4 perf tracker**](https://github.com/vllm-project/vllm/issues/45861) — both checklists mostly complete with linked merged PRs.
- [**Vit Full CUDA Graph tracker**](https://github.com/vllm-project/vllm/issues/38175) — open RFC for multimodal encoder acceleration; relevant to Qwen3-VL / GLM-V / Kimi K2.5 serving.
- [**Triton tensor descriptors RFC**](https://github.com/vllm-project/vllm/issues/42545) — proposes migrating kernels off `tl.make_block_ptr` to `tl.make_tensor_descriptor` ahead of upstream Triton deprecation.

## Stability & Regressions
Ranked by severity; fix PR noted where available.

1. [**DeepSeek-V4-Flash hangs on GB10**](https://github.com/vllm-project/vllm/issues/40969) — Hangs after ~6 requests with `cudagraph_mode=FULL_AND_PIECEWISE` + chunked prefill on SM 12.x. No fix PR yet.
2. [**XPU multi-GPU TP hang (Arc Pro B60)**](https://github.com/vllm-project/vllm/issues/50545) — Warmup allreduce never returns with torch 2.13/oneCCL 2022.x; GuC timeouts, DEVICE_LOST. No fix PR.
3. [**TurboQuant KV cache crash**](https://github.com/vllm-project/vllm/issues/41726) — Nightly `g4845aee6b` crashes on large chunked continuation prefill after workspace lock (RTX 5080); related to PR #39931 under test.
4. [**MiniMax-M3 reasoning token leak**](https://github.com/vllm-project/vllm/issues/46042) — Reasoning tokens still leak into `content` on v0.26.0 and main. No fix PR.
5. [**MiniMax-M2.7 multi-node NCCL deadlock**](https://github.com/vllm-project/vllm/issues/46097) — TP=4 over RoCE on DGX Spark spins at ~96% SM / 0% mem / ~15W. No fix PR.
6. [**Mamba-2 illegal instruction on SM121**](https://github.com/vllm-project/vllm/issues/37431) — Triton ops raise `cudaErrorIllegalInstruction` unless `CUDA_LAUNCH_BLOCKING=1`. No fix PR.
7. [**XPU zeMemOpenIpcHandle INVALID_ARGUMENT**](https://github.com/vllm-project/vllm/issues/48953) — TP=2 on dual Arc B50; new data point for already-closed [issue #41663](https://github.com/vllm-project/vllm/issues/41663).

Fix PRs in flight/landed:
- [**Mamba CPU offload boundary**](https://github.com/vllm-project/vllm/pull/51100) — Fixes #51094; treats `mamba_cache_mode="all"` like `"align"` and recomputes last token at offload-chunk boundaries.
- [**LoRA BF16 MoE gate**](https://github.com/vllm-project/vllm/pull/51002) — Corrects backend selection for non-gated models (NemotronH).
- [**Dense multinode DP port conflicts**](https://github.com/vllm-project/vllm/pull/49212) — Supersedes #39405; fixes all DP>1 × nnodes>1 combinations.
- [**LoRA sleep/wake/reload**](https://github.com/vllm-project/vllm/pull/39935) — Fixes level-2 reload crash with `enable_lora=True`.
- [**Rust tiktoken duplicate ranks**](https://github.com/vllm-project/vllm/pull/51135) — Rejects malformed vocab files (fixes #50954); regression test included.
- [**Qwen reasoning auto-detection (Rust)**](https://github.com/vllm-project/vllm/pull/51169) — QwQ now maps to `deepseek_r1`, Qwen3 to `qwen3`, and Qwen2.5 gets no parser.

## What This Means for Application Developers
- **Do not plan A100/A800 deployments of DeepSeek-V4-Flash** — both SM8x issues remain open with no ETA. On RTX 5090/GB10, track [PR #41834](https://github.com/vllm-project/vllm/pull/41834) for SM12x enablement.
- **Reasoning parser routing changes in the Rust path**: if you use `vllm-rs` with Qwen-family models, verify model→parser mapping after [#51169](https://github.com/vllm-project/vllm/pull/51169) lands — Qwen2.5 will no longer automatically select a parser.
- **Tokenizer validation is stricter**: duplicate tiktoken ranks now error out ([#51135](https://github.com/vllm-project/vllm/pull/51135)). Validate custom tokenizers before rollout.
- **Hybrid-attention models still lack automatic prefix caching** (Qwen3-Next, [issue #25874](https://github.com/vllm-project/vllm/issues/25874), 21 👍); factor that into long-context cost estimates.
- **MXFP4 MoE autotune improvements** ([#50942](https://github.com/vllm-project/vllm/pull/50942)) should reduce first-token latency variance on TRTLLM-backed MoE models at high concurrency.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest — 2026-08-06

## Today's Highlights

No new release shipped in the last 24h, but there is heavy active work across frontier-model enablement and multi-vendor hardware: DeepSeek V4/Kimi-K3/MiniMax-H3 paths are progressing on AMD gfx1250 and Intel XPU, while kernel optimization PRs continue to land. On the stability side, DeepSeek-V4 + DSpark hangs, KV-cache corruption, and accuracy regressions dominate the open issue tracker, and no fix PRs are available yet for the most severe items. CI hardening is also moving quickly, including a `release/v0.5.17` cherry-pick for the NV CI and staged AMD MI355X nightly jobs.

## Releases & Breaking Changes

None in the last 24 hours. Note that `release/v0.5.17` is already an active cherry-pick target ([#33779](https://github.com/sgl-project/sglang/pull/33779)), so a patch release may be imminent.

## New Model & Hardware Support

- **DeepSeek V4**: roadmap tracking W4A16 Hopper support, day-0 PR, and rebase work continues ([#23602](https://github.com/sgl-project/sglang/issues/23602)). Intel XPU enablement for DeepSeek V4 is in flight via sgl-kernel paths ([#25936](https://github.com/sgl-project/sglang/pull/25936), [#27790](https://github.com/sgl-project/sglang/pull/27790)).
- **Kimi K3**: roadmap and day-0 support are active, with a dedicated bug-tracking issue ([#32607](https://github.com/sgl-project/sglang/issues/32607)).
- **AMD gfx1250**: new architecture support PR adds gfx1250-specific paths, including FP4 scale instruction differences ([#32754](https://github.com/sgl-project/sglang/pull/32754)).
- **Intel XPU**: GLM5.1 DSA attention enablement ([#24959](https://github.com/sgl-project/sglang/pull/24959)) and MiniMax H3 diffusion support ([#33366](https://github.com/sgl-project/sglang/pull/33366)).
- **FP8 routing**: per-tensor FP8 checkpoints can now be routed to FlashInfer on SM89/SM90 ([#32993](https://github.com/sgl-project/sglang/issues/32993), closed).
- **Inkling-Small**: DSpark vocab out-of-bounds and `gs://` streamer path fixes landed ([#33748](https://github.com/sgl-project/sglang/pull/33748), [#33750](https://github.com/sgl-project/sglang/pull/33750)).

## Performance & Optimization

- **Kimi-K3 MLA fusion**: fuse the gate projection into the QKV-A GEMM to reduce projection cost ([#33623](https://github.com/sgl-project/sglang/pull/33623)).
- **GDN speculative decoding**: avoid materializing QKV tensors during target verification ([#33778](https://github.com/sgl-project/sglang/pull/33778)).
- **FP8 GEMM**: added scalar-scale-A support for the `fp8_gemm` AOT kernels ([#33469](https://github.com/sgl-project/sglang/pull/33469)).
- **Weight Cache Daemon roadmap**: phase 1 reduces post-quantized weight load time from ~306–327s to <1s on Qwen3-235B FP8 using CUDA IPC ([#33522](https://github.com/sgl-project/sglang/issues/33522)).
- **Parallelism roadmap**: Decode Context Parallelism + Helix Parallelism are planned for Q3 to remove TP KV redundancy and improve decode scaling ([#29736](https://github.com/sgl-project/sglang/issues/29736)).
- **KV cache reuse RFC**: position-independent RadixAttention reuse is proposed for agentic/RAG workloads where identical content appears at different offsets ([#30928](https://github.com/sgl-project/sglang/issues/30928)).
- **CI efficiency**: bounding CUDA graph capture in test servers cuts GPU boot overhead to 12–25% of pool time; spec fixture admission cap was also lifted ([#33776](https://github.com/sgl-project/sglang/pull/33776)).
- **MiniMax-M3 cookbook**: re-benchmarked on a pinable release, `sglang 0.5.16`, with reconciled serving config ([#33781](https://github.com/sgl-project/sglang/pull/33781)).

## Stability & Regressions

Ranked by severity:

- **Critical — DeepSeek-V4 + DSpark decode hang**: TP=8 on 8×H20 hangs indefinitely at ~245K context; all GPUs spin at 100% util and the watchdog kills the server ([#33549](https://github.com/sgl-project/sglang/issues/33549)). No fix PR yet.
- **Critical — Multi-node TP deadlock**: DeepSeek-V4 + DSpark on 2× DGX Spark intermittently deadlocks with one rank stuck in NCCL proxy append and another idle at request broadcast ([#33289](https://github.com/sgl-project/sglang/issues/33289)).
- **High — Hierarchical cache KV corruption**: DeepSeek-V4 + hierarchical cache produces deterministic SWA KV position corruption, leading to NaN sampling crashes ([#33656](https://github.com/sgl-project/sglang/issues/33656)).
- **High — DSpark accuracy regression**: DeepSeek-V4-Flash drops from AIME25 97.08 → 93.96 when DSpark speculative decoding is enabled ([#32038](https://github.com/sgl-project/sglang/issues/32038)).
- **High — Version regression on DeepSeek-V4-Pro**: consistent 3–4 point score drop when serving the same checkpoint on 0.5.12 vs 0.5.14 ([#33659](https://github.com/sgl-project/sglang/issues/33659)).
- **High — Kimi-K3 long-context NaN storms**: [PAD] token injection plus DSPARK inf/nan asserts; the write-side fix in #32477 is not present in the released kimi-k3 image ([#32968](https://github.com/sgl-project/sglang/issues/32968)).
- **Medium — GLM-5.2 MTP + PD crash**: decode crash at `dsa_seed_topk` when batch size changes is now closed, likely fixed in current main ([#30854](https://github.com/sgl-project/sglang/issues/30854)).
- **Medium — MiniMax-H3 startup failures**: reported as “failed to run” ([#33501](https://github.com/sgl-project/sglang/issues/33501)) and an args error ([#33466](https://github.com/sgl-project/sglang/issues/33466)).
- **Medium — `inference_mode` mismatch**: warmup/autotune runs under `torch.inference_mode()` while real forward does not, which can make lazy-allocated buffers unsafe for inplace updates ([#33470](https://github.com/sgl-project/sglang/issues/33470)).
- **Medium — PP + HiCache compatibility**: errors when pipeline parallelism is combined with hierarchical cache ([#30158](https://github.com/sgl-project/sglang/issues/30158)).
- **Ops — nightly image drift**: `nightly-dev` image revision can differ from the installed SGLang source, causing confusing diagnostics ([#33628](https://github.com/sgl-project/sglang/issues/33628)).
- **Ops — deterministic inference crash**: `--enable-deterministic-inference` crashes on NVIDIA L40S with Triton shared-memory OOR ([#29149](https://github.com/sgl-project/sglang/issues/29149)).
- **Closed — seeded sampling edge case**: empty multinomial distribution silently selects token 0; now fixed ([#33697](https://github.com/sgl-project/sglang/issues/33697)).
- **CI health tracking**: scheduled CI currently reports 2 broken, 3 flaky, and 677 recently fixed tests ([#17050](https://github.com/sgl-project/sglang/issues/17050)).

## What This Means for Application Developers

- If you serve DeepSeek-V4 variants with DSPARK, benchmark accuracy and stress-test decode at long context before promoting to production; several high-severity hangs/NaN issues remain open without fixes.
- The 0.5.14 vs 0.5.12 score difference on DeepSeek-V4-Pro reinforces pinning to recent versions. Treat 0.5.12 as potentially regressed for eval workloads.
- For agentic/RAG workloads, RadixAttention still requires byte-identical prefixes at the same absolute offset. Continue optimizing system-prompt/tool-schema ordering, and watch [RFC #30928](https://github.com/sgl-project/sglang/issues/30928) for position-independent KV reuse.
- AMD gfx1250 and Intel XPU enablement is moving quickly, but much of it is still on PR branches — expect to build from source or use specialized nightly images until merged.
- When using `nightly-dev` images, verify the claimed build commit against the installed source to avoid environment-induced bug reports ([#33628](https://github.com/sgl-project/sglang/issues/33628)).
- There is also an actionable entry point for teams that rely on SGLang CI: the project is soliciting improved unit-test coverage for core modules ([#20865](https://github.com/sgl-project/sglang/issues/20865)).

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp Digest — 2026-08-06

## Today's Highlights
Nine builds shipped (b10278–b10289), led by server hardening for Windows junction traversal in file search, vLLM-aligned speculative-decoding counters in `/metrics`, and multi-row batching for DeepSeek-OCR. On the PR side, hipCUB device primitives for ROCm, an expert heat-map caching scheme, and BailingMoE3/LongCat model support are progressing through review. The main risk cluster remains DeepSeek-V4 and MTP-related correctness/crash bugs, some with fixes already in flight.

## Releases & Breaking Changes
- **b10289** — `server: harden the file_glob_search directory walk` ([#26626](https://github.com/ggml-org/llama.cpp/pull/26626)): Windows junctions are no longer treated as plain directories, preventing infinite recursion/path-length failures in file search.
- **b10282** — spec-decode counters added to `/metrics` ([#26389](https://github.com/ggml-org/llama.cpp/pull/26389)). ⚠️ Parameter names are now aligned exactly with vLLM — dashboards referencing the old names will need updating.
- **b10278** — `GGML_METAL_USE_BF16` removed from all build scripts ([#26604](https://github.com/ggml-org/llama.cpp/pull/26604)). Metal BF16 is no longer a build-time toggle; update any CMake invocations using this flag.
- **b10286** — grammar sampler degrades max repetition ≥ 2000 to unbounded ([#26613](https://github.com/ggml-org/llama.cpp/pull/26613)).
- **b10284** — memory allocation fix for MTP layers in `fit` ([#26605](https://github.com/ggml-org/llama.cpp/pull/26605)).
- **Merged PR** — Qwen3-TTS support ([#26254](https://github.com/ggml-org/llama.cpp/pull/26254)) is a **breaking change to the `llama-tts` binary** (new CLI params: `--tts-lang`, `--tts-speaker-file`).

## New Model & Hardware Support
- **MiniMax M3** re-enabled in `test-llama-archs` ([b10288](https://github.com/ggml-org/llama.cpp/pull/26633)).
- **DeepSeek-OCR / Unlimited-OCR**: multi-row batching with one-shot row weaving ([#26154](https://github.com/ggml-org/llama.cpp/pull/26154)); `max_tiles` fix plus converter setting for Unlimited-OCR ([#25614](https://github.com/ggml-org/llama.cpp/pull/25614)).
- **Qwen3-TTS** support merged ([#26254](https://github.com/ggml-org/llama.cpp/pull/26254)); CPU fix via new `ggml_build_forward_order` ([#26649](https://github.com/ggml-org/llama.cpp/pull/26649)).
- **In review**: BailingMoE3 / Ling 3.0 flash with MTP ([#26608](https://github.com/ggml-org/llama.cpp/pull/26608)), LongCat-Flash ([#19182](https://github.com/ggml-org/llama.cpp/pull/19182)) and LongCat-Flash-Lite ngram embeddings ([#19167](https://github.com/ggml-org/llama.cpp/pull/19167)).
- **Granite4 Vision** image sequence assembly fix ([#26653](https://github.com/ggml-org/llama.cpp/pull/26653)).
- **CI**: CUDA 13.4 ARM64 Windows builds added ([#26650](https://github.com/ggml-org/llama.cpp/pull/26650)).

## Performance & Optimization
- **DeepSeek-OCR** now batches multiple rows in a single forward pass instead of per-row processing ([#26154](https://github.com/ggml-org/llama.cpp/pull/26154)) — a direct win for multi-image OCR workloads.
- **OpenCL flash-attention prefill**: K tile transposed in local memory, reducing bank conflicts in the QK loop ([#26428](https://github.com/ggml-org/llama.cpp/pull/26428)).
- **Expert caching** ([#26563](https://github.com/ggml-org/llama.cpp/pull/26563)): CUDA-only, off by default (`-ehs N`); tracks expert-usage heat map, keeps hot experts on GPU, computes cold experts on CPU.
- **hipCUB on HIP** ([#26592](https://github.com/ggml-org/llama.cpp/pull/26592), predecessor [#26388](https://github.com/ggml-org/llama.cpp/pull/26388)): enables CUB-based `argsort`/`top_k` on ROCm instead of the shared-memory bitonic fallback (limited to 1024-element rows).
- **Host-buffer registration for mmap'd weights** ([#26659](https://github.com/ggml-org/llama.cpp/pull/26659)): wires up `ggml_backend_register_host_buffer` for CUDA/SYCL, making page-locked weight paths reachable.
- **RDNA3 MoE prefill**: MMQ N-tile sized from typical routed expert width rather than worst case ([#24546](https://github.com/ggml-org/llama.cpp/pull/24546)).

## Stability & Regressions
Ranked by severity:

1. **DeepSeek-V4 emits repeated `<` whenever a prompt spans more than one forward pass** on CUDA flash-attention ([#26509](https://github.com/ggml-org/llama.cpp/issues/26509)) — clean on CPU and with `-fa off`; no fix merged yet.
2. **`llama-server` hard crash (`cublasSgemm INVALID_VALUE`) with `--spec-type draft-mtp` under KV-cache saturation** ([#26558](https://github.com/ggml-org/llama.cpp/issues/26558)); related sampler assertion failure with MTP on 30k+ contexts has a fix PR ([#26651](https://github.com/ggml-org/llama.cpp/pull/26651)).
3. **MTP retains inter-request state**, causing non-deterministic output/degradation on Qwen3.6-35B-A3B-MTP ([#26425](https://github.com/ggml-org/llama.cpp/issues/26425)).
4. **GLM-5.2 on ROCm/HIP**: prefill ~6× slower, load time ~40× longer after Indexer PR [#25407](https://github.com/ggml-org/llama.cpp/pull/25407) ([#26445](https://github.com/ggml-org/llama.cpp/issues/26445)).
5. **`llama-spec` fails at 16k boundary** due to non-consecutive KV-cache position tracking ([#26478](https://github.com/ggml-org/llama.cpp/issues/26478)).
6. **Vulkan `DeviceLost`**: Strix Halo / DeepSeek-V4-Flash ([#25664](https://github.com/ggml-org/llama.cpp/issues/25664)) and Vega 8 iGPU at ~50K context ([#26447](https://github.com/ggml-org/llama.cpp/issues/26447)).
7. **Metal regression**: Gemma 4 E4B Q8_0 decode down ~13% between b9730 and b10219; Qwen models unaffected ([#26470](https://github.com/ggml-org/llama.cpp/issues/26470)).
8. **SWA/recurrent cache issues**: server forces full prompt re-processing on subsequent requests — open ([#21831](https://github.com/ggml-org/llama.cpp/issues/21831)), similar Qwen 3.6 27B issue closed ([#22746](https://github.com/ggml-org/llama.cpp/issues/22746)).
9. **Lower severity**: Qwen 3.6 server crash >132 tokens ([#25248](https://github.com/ggml-org/llama.cpp/issues/25248)); Qwen3.5-4B GGUF expecting 33 blocks but model has 32 ([#24737](https://github.com/ggml-org/llama.cpp/issues/24737)); Windows Defender false positive on win-cpu-x64 build ([#26343](https://github.com/ggml-org/llama.cpp/issues/26343)).
10. **Recently fixed**: dsv4 CUDA illegal memory access on GB10/sm_121 ([#26588](https://github.com/ggml-org/llama.cpp/issues/26588)); DeepSeek-V4-Flash quantized-KV garbage resolved by arch-scoped rotation disable ([#26423](https://github.com/ggml-org/llama.cpp/issues/26423)).

## What This Means for Application Developers
- **Speculative decoding (MTP) is not yet production-safe**: crashes under KV saturation ([#26558](https://github.com/ggml-org/llama.cpp/issues/26558)) and cross-request state leakage ([#26425](https://github.com/ggml-org/llama.cpp/issues/26425)) mean you should pin to a build containing the sampler fix ([#26651](https://github.com/ggml-org/llama.cpp/pull/26651)) or disable draft models for multi-tenant serve.
- **DeepSeek-V4 on CUDA**: multi-pass prompts currently require `-fa off` to avoid degenerate output ([#26509](https://github.com/ggml-org/llama.cpp/issues/26509)) — verify your prompt length / KV reuse behavior before upgrading.
- **/metrics upgrade** ([#26389](https://github.com/ggml-org/llama.cpp/pull/26389)) gives vLLM-compatible spec-decode counters, but rename your dashboard queries to match vLLM conventions.
- **AMD/MI300X fleets**: the GLM-5.2 Indexer regression ([#26445](https://github.com/ggml-org/llama.cpp/issues/26445)) suggests pinning versions if you run routed MoE models; the incoming hipCUB path ([#26592](https://github.com/ggml-org/llama.cpp/pull/26592)) should improve top-k/argsort on ROCm once merged.
- **Build/CLI hygiene**: drop `GGML_METAL_USE_BF16` from Metal builds; expect `llama-tts` invocations to change with Qwen3-TTS ([#26254](https://github.com/ggml-org/llama.cpp/pull/26254)).
- **Windows server deployments**: b10289's junction-safe file walk removes a real footgun for model-directory search on Windows.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Digest — 2026-08-06

## 1. Today's Highlights

No release shipped in the last 24 hours; activity centers on the MLX runner and server correctness. Two MLX KV-cache bugs were fixed ([#17581](https://github.com/ollama/ollama/pull/17581), [#15914](https://github.com/ollama/ollama/pull/15914)) and a new DFlash block-diffusion speculative decoding path was proposed ([#17571](https://github.com/ollama/ollama/pull/17571)). Server-side PRs target silent pull failures when registries omit `Content-Length` ([#17580](https://github.com/ollama/ollama/pull/17580)) and in-place mutation of model-owned messages by chat requests ([#17573](https://github.com/ollama/ollama/pull/17573)). Native reranking support ([#3368](https://github.com/ollama/ollama/issues/3368)) remains the most-upvoted open feature request at 285 👍 after two years.

## 2. Releases & Breaking Changes

None in the last 24 hours.

## 3. New Model & Hardware Support

- **Apertus v1.5 8B/70B** ([#17555](https://github.com/ollama/ollama/pull/17555)) — adds native chat handling in the parser/renderer for the Swiss AI Initiative's fully open multimodal models.
- **MLX: Nemotron 3** ([#17060](https://github.com/ollama/ollama/pull/17060), in progress) — custom NVFP4/MXFP8 expert kernels, with possible refinement of the existing `GatherQMM` Metal kernel.
- **MLX: DFlash block-diffusion speculative decoding** ([#17571](https://github.com/ollama/ollama/pull/17571)) — a draft model that proposes an entire block of tokens in one forward pass, borrowing the target's embedding table and output head; manifests pair any draft with a target.
- Rerankers remain unsupported — [\#3368](https://github.com/ollama/ollama/issues/3368) is still the top open feature request.

## 4. Performance & Optimization

- **MLX KV-cache restore fixes** — [#17581](https://github.com/ollama/ollama/pull/17581) stops cache rewind refills from corrupting later lazy snapshots; [#15914](https://github.com/ollama/ollama/pull/15914) adds decode checkpoints for exact-restore caches, fixing cache reuse that broke down on long generations and follow-up turns.
- **DFlash speculative decoding** ([#17571](https://github.com/ollama/ollama/pull/17571)) — whole-block token proposal should materially cut decode steps on Apple Silicon if merged.
- **App UI thumbnail handling** ([#17576](https://github.com/ollama/ollama/pull/17576)) — stops recreating image Blob URLs on every keystroke, addressing severe typing latency when images are attached ([#17540](https://github.com/ollama/ollama/issues/17540)).
- **Inference log polling** ([#17574](https://github.com/ollama/ollama/pull/17574)) — isolates log scan snapshots, eliminating duplicated `inference compute` lines during startup polling.
- **Test/CI hardening** ([#17425](https://github.com/ollama/ollama/pull/17425)) — includes VRAM gate matching for untagged model names and keeping CPU-only hosts (`OLLAMA_MAX_VRAM=0`) running modest models.

## 5. Stability & Regressions

Ranked by severity; fix PR noted where one exists.

- **In-place mutation of model messages** ([#17573](https://github.com/ollama/ollama/pull/17573), fix PR open) — `ChatHandler` appends request history to a shared backing array; `filterThinkTags` then edits assistant messages permanently, corrupting the model-defined message slice across requests.
- **Silent no-op pulls when registry omits `Content-Length`** ([#17580](https://github.com/ollama/ollama/pull/17580), fix PR open) — `blobDownload.Prepare` discards the parse error, `Total` becomes 0, no parts are created, and the pull appears to hang.
- **`num_ctx` silently truncated to `num_ctx/2 + 2`** ([#17427](https://github.com/ollama/ollama/issues/17427), open) — reproducible with `gpt-oss:20b` on Ollama 0.32.1; effective prompt window is exactly half the configured value.
- **DeepSeek-V4 KV cache lost after short idle** ([#17577](https://github.com/ollama/ollama/issues/17577), new/open) — cache is dropped despite identical prefix and `OLLAMA_KEEP_ALIVE=-1`; reporter is testing full-size SWA cache at 393,216 context.
- **`bge-m3` embeddings return HTTP 500** `json: unsupported value: NaN` ([#15582](https://github.com/ollama/ollama/issues/15582), open) — reproducible with specific valid UTF-8 markdown files (~1.9 KB with YAML frontmatter).
- **`context deadline exceeded` on HF model pulls** ([#17484](https://github.com/ollama/ollama/issues/17484), open) — affects multiple GGUF models from `hf.co`.
- **Closed regressions** — Vulkan detection overrides `CUDA_VISIBLE_DEVICES` since 0.30.2 ([#16508](https://github.com/ollama/ollama/issues/16508)); Strix Halo (gfx1151) scheduler caps VRAM at host RAM free instead of the carveout, evicting co-resident models ([#16719](https://github.com/ollama/ollama/issues/16719)).
- **Minor** — `ollama-bench -output` leaves stale tail bytes, producing invalid CSV/benchstat output ([#17572](https://github.com/ollama/ollama/pull/17572), fix PR open); desktop startup readiness loops ignore context cancellation ([#17575](https://github.com/ollama/ollama/pull/17575), fix PR open).

## 6. What This Means for Application Developers

- **Don't assume model message state is immutable.** Until [#17573](https://github.com/ollama/ollama/pull/17573) merges, one chat request can permanently mutate a loaded model's assistant messages via `filterThinkTags` — isolate or restart models if you observe cross-request contamination.
- **Budget context conservatively on gpt-oss:20b.** On 0.32.1, effective prompt capacity is `num_ctx/2 + 2`, not `num_ctx` ([#17427](https://github.com/ollama/ollama/issues/17427)); validate actual acceptance before relying on configured windows.
- **If you proxy registries, preserve `Content-Length` on HEAD responses.** Otherwise clients hit silent no-op pulls that look like hangs ([#17580](https://github.com/ollama/ollama/pull/17580)).
- **MLX/Apple Silicon is the most active area.** The DFlash speculative decoding work ([#17571](https://github.com/ollama/ollama/pull/17571)) plus KV checkpoint fixes ([#15914](https://github.com/ollama/ollama/pull/15914), [#17581](https://github.com/ollama/ollama/pull/17581)) target exactly the long-generation and multi-turn workloads that matter for agent apps — worth re-benchmarking when they land.
- **Rerankers still require external tooling.** [\#3368](https://github.com/ollama/ollama/issues/3368) remains the most-voted open feature; RAG pipelines needing bge-reranker/mxbai-rerank should plan to run them co-located rather than waiting for native support.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-08-06

## 1. Today's Highlights

The project shipped a new dev release (v1.97.0-dev.1) with no documented breaking changes, while the PR queue is dominated by guardrail expansion and streaming reliability work. Notably, closed issues confirm several correctness fixes landed for batch cost accounting (#35357) and OpenAI cache-write pricing (#33772), plus a new PR adds SSE keepalive pings to prevent mid-stream load-balancer timeouts on long Anthropic thinking responses (#36024). The most conspicuous open problem remains the Python 3.14 startup crash caused by uvloop incompatibility (#20933), which has no fix PR yet.

## 2. Releases & Breaking Changes

- **[v1.97.0-dev.1](https://github.com/BerriAI/litellm/releases/tag/v1.97.0-dev.1)** — Dev release. Release notes document that all Docker images are signed with cosign using the key introduced in commit `0112e53`; no API/config changes or migration notes in this build.

## 3. New Model & Hardware Support

- **[#27325 [OPEN]](https://github.com/BerriAI/litellm/issues/27325)** — Request to add `openrouter/xiaomi/mimo-v2.5-pro` to `model_prices_and_context_window.json` (and the backup file). No new model support merged today.
- **[#32218 [OPEN]](https://github.com/BerriAI/litellm/issues/32218)** — Z.AI Coding Plan's documented `glm-5.2[1m]` (1M-context variant) fails with "Unknown Model"; plain `glm-5.2` works. Model catalog gap still open.
- **[#31819 [OPEN]](https://github.com/BerriAI/litellm/issues/31819)** — Feature request to add Amazon Bedrock AgentCore Web Search as a first-class `litellm.search()` / `websearch_interception` backend. Still open, no PR attached.

## 4. Performance & Optimization

- **[#36024 [OPEN PR]](https://github.com/BerriAI/litellm/pull/36024)** — Adds keepalive pings on Anthropic `/v1/messages` SSE streams during upstream silence. Directly targets Claude Code "Waiting for API response" banners caused by Anthropic's ~30s ping interval vs. CLI 20s stall watchdog and 60s intermediary idle timeouts.
- **[#34423 [OPEN PR]](https://github.com/BerriAI/litellm/pull/34423)** — Per-deployment `keepalive_seconds` SSE heartbeat override to prevent load-balancer timeouts on long streams (supersedes #33259; closes #31877).
- **[#34416 [OPEN PR]](https://github.com/BerriAI/litellm/pull/34416)** — Per-deployment `allowed_fails_policy` and cooldown-time override support for the router; split out from a larger change, with fallback-cooldown fixes extracted to #35104.
- **[#36008 [OPEN PR]](https://github.com/BerriAI/litellm/pull/36008)** — Drains Bedrock `/v1/messages` upstream in a detached pump after client disconnect so full output tokens are captured for billing instead of undercounting against AWS.
- **[#35995 [OPEN PR]](https://github.com/BerriAI/litellm/pull/35995)** — Adds an auto-router benchmarks tab to the dashboard cost-optimization view, rendering the savings evidence from the merged per-session benchmarks backend (#35910).
- **[#35357 [CLOSED]](https://github.com/BerriAI/litellm/issues/35357)** — Fixed: `CheckBatchCost` now isolates per-job failures; one failing batch no longer aborts the entire polling cycle and strands every other batch.

## 5. Stability & Regressions

**Critical / unaddressed:**

- **[#20933 [OPEN]](https://github.com/BerriAI/litellm/issues/20933)** — Proxy fails to start on Python 3.14: `ImportError: cannot import name 'BaseDefaultEventLoopPolicy' from 'asyncio.events'` due to uvloop incompatibility (10 👍). No fix PR yet; pin to 3.12/3.13 in the meantime.
- **[#25386 [OPEN]](https://github.com/BerriAI/litellm/issues/25386)** — `max_end_user_budget_id` applies budget in-memory but never persists to `LiteLLM_EndUserTable`, so the budget reset job silently skips auto-created end users.
- **[#20494 [OPEN]](https://github.com/BerriAI/litellm/issues/20494)** — `/key/generate` with a duplicate secret key does not error, which weakens key-rotation safety guarantees.
- **[#26755 [OPEN]](https://github.com/BerriAI/litellm/issues/26755)** — Gemini CLI fails via proxy with 400 "function response turn must come immediately after a function call turn" — request ordering is corrupted in translation.

**High / fix landed or in review:**

- **[#34420 [CLOSED]](https://github.com/BerriAI/litellm/issues/34420)** — Bedrock Converse 400s on toolless requests that set `parallel_tool_calls`/`tool_choice`; fixed.
- **[#33988 / #33989 / #28294 [CLOSED]](https://github.com/BerriAI/litellm/issues/33988)** — Managed batch output file handling: repeated batch retrieves could double-wrap `output_file_id`; raw provider IDs could leak without managed-file registration; `GET /v1/files` returned raw IDs with wrong `created_by`. All three closed.
- **[#33772 [CLOSED]](https://github.com/BerriAI/litellm/issues/33772)** — OpenAI `cache_write_tokens` were dropped from cost calculation, mis-pricing cached-input requests; fixed.
- **[#34309 [CLOSED]](https://github.com/BerriAI/litellm/issues/34309)** — `cost_breakdown.cache_read_cost`/`cache_creation_cost` null for OpenAI Responses API; fixed.
- **[#35797 [CLOSED]](https://github.com/BerriAI/litellm/issues/35797)** — Key-rotation grace period crashed with `TypeError: Litellm_VerificationTokenView`; fixed.
- **[#26423 [CLOSED]](https://github.com/BerriAI/litellm/issues/26423)** — `vertex_ai/anthropic` silently stripped `output_config`, disabling Claude 4.7 `task_budget` on Vertex; fixed.

**Guardrail / streaming fixes (PRs open or merged):**

- **[#35999 [CLOSED PR]](https://github.com/BerriAI/litellm/pull/35999)** — Guardrails now scan `/v1/messages` tool traffic: tool_result content, tool call arguments, and Anthropic SSE streams (`tool_permission` previously 500'd on every stream).
- **[#35980 [CLOSED PR]](https://github.com/BerriAI/litellm/pull/35980)** — Allows `litellm_content_filter` to run on `post_mcp_call`; previously the proxy exited at boot instead of starting.
- **[#36014 [OPEN PR]](https://github.com/BerriAI/litellm/pull/36014)** — New `scan_only_tool_results` per-guardrail flag to scope unified guardrails to untrusted tool output only, avoiding prompt-attack false positives on trusted agent scaffolding.
- **[#33086 [OPEN]](https://github.com/BerriAI/litellm/issues/33086)** — Bedrock guardrail native hooks skip PII/content scanning on Anthropic `tool_result` blocks; related to the #35999 gap but still open for the Bedrock guardrail path.
- **[#36028 [OPEN PR]](https://github.com/BerriAI/litellm/pull/36028)** — Invalidates cached project objects on `/project/update` and `/project/delete`; stale allowlists previously bypassed project model restrictions for up to 60s.
- **[#36020 [OPEN PR]](https://github.com/BerriAI/litellm/pull/36020)** — Config agent IDs now derived from `agent_name` only (not resolved secrets), so rotating `static_headers` secrets no longer re-mints agent IDs and 403s granted keys.
- **[#32333 [OPEN PR]](https://github.com/BerriAI/litellm/pull/32333)** — Scopes auth token cookie path to `SERVER_ROOT_PATH` (fixes #32249).
- **[#35890 [OPEN PR]](https://github.com/BerriAI/litellm/pull/35890)** — Maps missing OpenAI credentials to 401 instead of a fabricated 500.

**Lower severity / cosmetic:**

- **[#18598 [OPEN]](https://github.com/BerriAI/litellm/issues/18598)** — Docker image fails to load `libsndfile.so` when configuring `gpt-4o-transcribe-diarize`.
- **[#26770 [CLOSED]](https://github.com/BerriAI/litellm/issues/26770)** — S3 callbacks broken ("Service must be in list"); closed.
- **[#27384 [OPEN]](https://github.com/BerriAI/litellm/issues/27384)** — Dashboard duplicate `vllm`/`Vllm` provider entries due to `provider_endpoints_support.json` inconsistency.
- **[#27388 [OPEN]](https://github.com/BerriAI/litellm/issues/27388)** — `arize_phoenix` callback invoked but spans never reach the OTLP endpoint in v1.83.10.
- **[#35749 [CLOSED]](https://github.com/BerriAI/litellm/issues/35749)** — UI strips `SERVER_ROOT_PATH` subpath on conversation select/send; fixed.

## 6. What This Means for Application Developers

- **Agent tool traffic is now first-class for guardrails.** The #35999 merge closes a real security hole: `/v1/messages` tool calls, tool results, and SSE streams were previously unscanned, and MCP call results couldn't be filtered at all (#35980). The incoming `scan_only_tool_results` flag (#36014) gives you a clean way to scan untrusted tool output without false-positiving on your own agent harness. If you're building agent scaffolding on LiteLLM, this is the change to validate this week.
- **Long-stream reliability is improving but not merged yet.** Keepalive pings (#36024) and per-deployment SSE heartbeats (#34423) directly fix Claude Code stalls on long thinking responses behind load balancers with idle timeouts. Until merged, keep intermediary idle timeouts above 60s or rely on the existing heartbeat.
- **Billing/cost accuracy fixes are worth auditing on your side.** Cache-write pricing (#33772), Responses API cache cost breakdown (#34309), and post-disconnect token accounting for Bedrock (#36008) all affect what you're charged vs. billed. If you use managed batches, the #35357 fix means one bad batch no longer blocks cost polling for all others — worth confirming after upgrade.
- **Pin Python to 3.12/3.13 for now.** The uvloop incompatibility (#20933) makes 3.14 a hard no-go for proxy deployments until the dependency constraint is fixed.
- **Key-rotation gotchas.** The grace-period `TypeError` is fixed (#35797), but duplicate-secret keys are still accepted silently (#20494), and the new agent-id derivation from `agent_name` (#36020) will make secret rotation safe once merged — a must-read if you use static-header secrets with granted keys.

All links point to the corresponding GitHub issues/PRs in [BerriAI/litellm](https://github.com/BerriAI/litellm).

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

## 1. Today’s Highlights

Unsloth Studio reliability is the main focus: fixes are in flight for Desktop training getting stuck at 100% ([#7938](https://github.com/unslothai/unsloth/pull/7938)), padding-free SFT breaking on TRL ≥ 1.0.0 ([#7951](https://github.com/unslothai/unsloth/pull/7951)), and GGUF/diffusion model picks pulling the wrong companion files ([#7870](https://github.com/unslothai/unsloth/pull/7870)). New bug reports cluster around Studio Deep Research issues — unclamped `max_tokens` ([#7965](https://github.com/unslothai/unsloth/issues/7965)) and zero-token streams consuming the full 900s budget ([#7964](https://github.com/unslothai/unsloth/issues/7964)) — plus silent worker crashes in Docker/GPU from a `fork()` + CUDA-context hazard ([#7950](https://github.com/unslothai/unsloth/issues/7950)). Install pins were bumped to `unsloth>=2026.8.5` / `unsloth-zoo>=2026.8.4` ([#7967](https://github.com/unslothai/unsloth/pull/7967)).

## 2. Releases & Breaking Changes

- No new release in the last 24 hours.
- [PR #7967](https://github.com/unslothai/unsloth/pull/7967): Bumps `install.sh` / `install.ps1` floors to `unsloth>=2026.8.5` and `unsloth-zoo>=2026.8.4`, so fresh installs now resolve to the 2026.8.5 wheel.
- Installer behavior remains a concern: [Issue #7818](https://github.com/unslothai/unsloth/issues/7818) reports `install.sh` auto-installing Python and uninstalling existing PyTorch/CUDA packages.

## 3. New Model & Hardware Support

- [PR #7952](https://github.com/unslothai/unsloth/pull/7952): Fetches gated diffusion companion bases from ungated Unsloth mirrors, so GGUF/FP8 diffusion picks work without a Hugging Face token.
- [PR #7871](https://github.com/unslothai/unsloth/pull/7871): Tightens cache validation for diffusion pipelines — every declared denoiser and shard must exist before a cached pipeline is considered complete.
- [PR #7960](https://github.com/unslothai/unsloth/pull/7960): Fixes ROCm unified-memory APUs (e.g. Strix Halo) by reserving bounded OS headroom instead of a flat 20% allocation cap.
- [Issue #7886](https://github.com/unslothai/unsloth/issues/7886): DeepSeek-V4-Flash-0731-GGUF fails to load in Studio because `llama-server` fails to start (closed).
- [Issue #7903](https://github.com/unslothai/unsloth/issues/7903): Gemma 4 base models are missing the `<bos>` token in tokenizer config.
- [Issue #7921](https://github.com/unslothai/unsloth/issues/7921): Asks whether DwarfStar is integrated; user reports ~50% faster inference than llama.cpp on a DeepSeek-V4-Flash GGUF, but no official support is indicated.

## 4. Performance & Optimization

- [PR #7960](https://github.com/unslothai/unsloth/pull/7960): Replaces the flat `0.80` torch-allocator cap on ROCm APUs with bounded headroom. On a 128 GB Strix Halo this avoids withholding ~25 GiB unnecessarily.
- [Issue #7908](https://github.com/unslothai/unsloth/issues/7908): KV cache is currently divided across all parallel chat slots; request is for per-chat shared/individual KV allocation.
- [PR #7955](https://github.com/unslothai/unsloth/pull/7955): Settles deferred compile-mode switches between training steps, paired with `unsloth-zoo#1001`, to avoid checkpoint-time deadlocks.
- [Issue #7921](https://github.com/unslothai/unsloth/issues/7921): Community-reported DwarfStar mode is “at least 50% faster” than llama.cpp on an M2 192 GB machine (unofficial benchmarking).

## 5. Stability & Regressions

### Critical / silent failures

- [Issue #7950](https://github.com/unslothai/unsloth/issues/7950): `llama-server`, training, and inference workers crash silently when spawned from a CUDA-warm parent process — `fork()` + CUDA-context hazard in Docker/GPU deployments. No fix PR linked yet.
- [Issue #7843](https://github.com/unslothai/unsloth/issues/7843): Studio local Qwen3.5-2B QLoRA worker exits on first chat generation after ~65 seconds. No fix PR linked.
- [Issue #7617](https://github.com/unslothai/unsloth/issues/7617): API streaming to a Pi agent frequently hangs and requires manual intervention to continue.

### High-impact regressions

- [Issue #7897](https://github.com/unslothai/unsloth/issues/7897): Studio Desktop stuck at 100% when training completes. Fix PR: [#7938](https://github.com/unslothai/unsloth/pull/7938).
- [Issue #7853](https://github.com/unslothai/unsloth/issues/7853): Training dataset cache reconciliation enters repeated format-check loops; regression from [#7633](https://github.com/unslothai/unsloth/pull/7633) (closed).
- [Issue #7845](https://github.com/unslothai/unsloth/issues/7845): Weight-only cached snapshot prevents tokenizer Hub fallback; regression from [#7633](https://github.com/unslothai/unsloth/pull/7633) (closed).
- [Issue #7877](https://github.com/unslothai/unsloth/issues/7877): Since ~1.50, Ollama-downloaded models are no longer visible and context size is set roughly 50% lower than before.
- [Issue #7965](https://github.com/unslothai/unsloth/issues/7965): Deep Research `max_tokens` is never clamped to the actual context window, and the failure message blames the wrong limit.
- [Issue #7964](https://github.com/unslothai/unsloth/issues/7964): Deep Research stream that produces zero tokens still burns the full 900s budget.
- [Issue #7803](https://github.com/unslothai/unsloth/issues/7803): `install.sh` installs Python 3.13.8 on Linux/WSL, which breaks `import torch`; the existing 3.13.8 guard only ran on macOS (closed).
- [Issue #7922](https://github.com/unslothai/unsloth/issues/7922) / [Issue #7923](https://github.com/unslothai/unsloth/issues/7923): Fine-tuning crashes on AMD gfx1032 and Radeon RX 6600 XT.

### Desktop / Studio UI

- [Issue #7953](https://github.com/unslothai/unsloth/pull/7953): Linux AppImage cannot download models on Linux Mint 22 / Ubuntu 24.04 — release-blocking.
- [Issue #7963](https://github.com/unslothai/unsloth/issues/7963): Dropping an image onto the Desktop window is rejected, although chat accepts image attachments.
- [Issue #7962](https://github.com/unslothai/unsloth/issues/7962): ANSI escape codes render as literal text in the tool output pane.
- [Issue #7961](https://github.com/unslothai/unsloth/issues/7961): Chat model selector shows the raw HF snapshot path instead of the model name. Fix PR: [#7966](https://github.com/unslothai/unsloth/pull/7966).
- [Issue #7884](https://github.com/unslothai/unsloth/issues/7884): Terminal tool runs `cmd` on Windows, but its tool description tells the model it is on Linux. Related sandboxing PRs: [#7925](https://github.com/unslothai/unsloth/pull/7925), [#7928](https://github.com/unslothai/unsloth/pull/7928), [#7935](https://github.com/unslothai/unsloth/pull/7935).
- [Issue #7887](https://github.com/unslothai/unsloth/issues/7887): Desktop maximize button hides the window on Windows 11.
- [Issue #5097](https://github.com/unslothai/unsloth/issues/5097): “Copy” buttons in Studio web UI do not copy to clipboard (closed).
- [PR #7959](https://github.com/unslothai/unsloth/pull/7959): Fixes Desktop “Copy path” failing because the pre-copy HTTP request invalidates the clipboard user gesture.
- [PR #7829](https://github.com/unslothai/unsloth/pull/7829): Model hub reports “offline” on Windows machines that are actually online; adds fallback to the server.

## 6. What This Means for Application Developers

- **Treat Studio API streaming as unreliable for agent loops.** Issues [#7617](https://github.com/unslothai/unsloth/issues/7617) and [#7964](https://github.com/unslothai/unsloth/issues/7964) show hangs and zero-token streams that consume full budgets. Set client-side timeouts, retries, and progress checks.
- **Docker/GPU users should isolate worker spawning.** [#7950](https://github.com/unslothai/unsloth/issues/7950) warns against spawning workers from a CUDA-warm parent process; use a clean backend process or wait for an upstream fix.
- **TRL 1.0.0 users need the padding-free SFT fix.** If you use `padding_free=True` without packing, pull [#7951](https://github.com/unslothai/unsloth/pull/7951) or pin TRL below 1.0.0 until it lands.
- **Local snapshot users should monitor cache reconciliation.** Regressions [#7853](https://github.com/unslothai/unsloth/issues/7853) and [#7845](https://github.com/unslothai/unsloth/issues/7845) can cause repeated format checks or missing tokenizer fallback when training from cached weights.
- **AMD APU users gain usable memory.** [#7960](https://github.com/unslothai/unsloth/pull/7960) should improve training headroom on Strix Halo-class hardware.
- **Do not trust the Windows terminal tool description to match reality yet.** Until [#7884](https://github.com/unslothai/unsloth/issues/7884) and the sandboxing PRs [#7925](https://github.com/unslothai/unsloth/pull/7925) / [#7928](https://github.com/unslothai/unsloth/pull/7928) / [#7935](https://github.com/unslothai/unsloth/pull/7935) land, model-issued terminal commands on Windows should be treated as higher-risk.


</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*