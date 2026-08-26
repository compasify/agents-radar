# AI Infrastructure Digest 2026-08-26

> Generated: 2026-08-26 00:00 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# Cross-Project AI Infrastructure Comparison Report — 2026-08-26

---

## 1. Ecosystem Overview

The inference stack is consolidating around three battlegrounds: **speculative decoding** (MTP/EAGLE/DFlash/DSpark) is now table-stakes across every engine but remains the top source of correctness and integration bugs; **multi-vendor hardware enablement** (AMD ROCm/gfx942, Intel SYCL, Apple MLX/ARM, Qualcomm Hexagon) is driving most new-kernel activity as NVIDIA-only paths no longer suffice; and **long-context stability** has emerged as the sharpest operational risk — Kimi-K3 engine-wide degeneration appears in both vLLM ([#51039](https://github.com/vllm-project/vllm/issues/51039)) and SGLang ([#34815](https://github.com/sgl-project/sglang/issues/34815)). Quantization formats are proliferating (MXFP4, NVFP4, Q2_0 ternary, EXL3 fractional-bit), but today's digest shows the bleeding edge is still dangerous: vLLM reverted MXFP4+block-FP8 after H100 correctness failures, and Ollama ships a CUDA build that silently drops RTX 30-series GPUs. No project shipped a stable production release in the last 24h except llama.cpp (v0.3.0) and Unsloth (two betas); the rest are mid-transition (vLLM MRV2, Ollama Qwen3.8 fixes, LiteLLM cost-accounting rework).

## 2. Activity Comparison

Counts below reflect **notable issues/PRs referenced in today's digests**, not absolute GitHub totals. Severity and release status are from the digests directly.

| Project | Notable Issues | Notable PRs | Release Status (24h) |
|---|---|---|---|
| **vLLM** | ~10 open (top: scheduler admission stall [#53130](https://github.com/vllm-project/vllm/issues/53130), Kimi-K3 degeneration [#51039](https://github.com/vllm-project/vllm/issues/51039), multi-node gloo deadlock [#52907](https://github.com/vllm-project/vllm/issues/52907)) | ~15 (MRV2 default rollout [#53183](https://github.com/vllm-project/vllm/pull/53183), spec-decode overhead [#53694](https://github.com/vllm-project/vllm/pull/53694), K2-Horizon [#53806](https://github.com/vllm-project/vllm/pull/53806)) | **None.** MRV2 default transition pending; 1 revert (MXFP4 Humming) |
| **SGLang** | ~11 open (top: DSV4-Flash EP crashes on Hopper [#35557](https://github.com/sgl-project/sglang/issues/35557), Kimi-K3 ~30s TTFT floor [#34815](https://github.com/sgl-project/sglang/issues/34815), DFLASH unsupported under PD [#36140](https://github.com/sgl-project/sglang/issues/36140)) | ~16 (AMD MXFP8 MoRI dispatch [#36119](https://github.com/sgl-project/sglang/pull/36119), Spark3 [#35963](https://github.com/sgl-project/sglang/pull/35963), expert-choice fusion [#29718](https://github.com/sgl-project/sglang/pull/29718)) | **None.** No new version tagged |
| **llama.cpp** | ~7 open (top: HIP cross-request leakage [#25992](https://github.com/ggml-org/llama.cpp/issues/25992), gfx1151 corruption [#27579](https://github.com/ggml-org/llama.cpp/issues/27579), MTP acceptance collapse [#27572](https://github.com/ggml-org/llama.cpp/issues/27572)) | ~14 (KleidiAI rework [#26077](https://github.com/ggml-org/llama.cpp/pull/26077), Pascal CUDA graphs [#27721](https://github.com/ggml-org/llama.cpp/pull/27721), SYCL TILE KV [#26689](https://github.com/ggml-org/llama.cpp/pull/26689)) | **✅ v0.3.0 released** (+ build/KleidiAI/Metal fixes) |
| **Ollama** | ~16 open (top: DeepSeek-v4-flash cloud thinking loop [#17892](https://github.com/ollama/ollama/issues/17892), Qwen3.8 tool-loop 500 [#17778](https://github.com/ollama/ollama/issues/17778), CUDA 13 drops sm_86 [#17841](https://github.com/ollama/ollama/issues/17841)) | ~12 (cached prompt tokens [#17943](https://github.com/ollama/ollama/pull/17943), Metal load-time fix [#17998](https://github.com/ollama/ollama/pull/17998), llama.cpp b10630 bump [#18003](https://github.com/ollama/ollama/pull/18003)) | **None.** 2 upstream bumps in review; Qwen3.8 regressions live |
| **LiteLLM** | ~11 open (top: Python 3.10 incompatibility [#38202](https://github.com/BerriAI/litellm/issues/38202), false BudgetExceededError [#36926](https://github.com/BerriAI/litellm/issues/36926), Redis `ssl_check_hostname` [#34614](https://github.com/BerriAI/litellm/issues/34614)) | ~13 (cache-read price tie-break [#38164](https://github.com/BerriAI/litellm/pull/38164), Bedrock GPT-5.x reasoning_effort [#38279](https://github.com/BerriAI/litellm/pull/38279), Agent 365 MCP guardrail [#38241](https://github.com/BerriAI/litellm/pull/38241)) | **None.** 5 stale issues closed; 5 likely-fixed items closed |
| **Unsloth** | ~14 open (top: batched vs. single greedy divergence [#9708](https://github.com/unslothai/unsloth/issues/9708), GGUF tools no-op [#9730](https://github.com/unslothai/unsloth/issues/9730), auto-compaction fixed threshold [#9671](https://github.com/unslothai/unsloth/issues/9671)) | ~10 (EXL3 quant backend [#7115](https://github.com/unslothai/unsloth/pull/7115), MLX real context length [#8125](https://github.com/unslothai/unsloth/pull/8125), Qwen3.5 MTP finetune loss [#6557](https://github.com/unslothai/unsloth/pull/6557)) | **✅ v0.1.802-beta, v0.1.803-beta** (170+ PRs combined) |

**Signal:** vLLM and SGLang are running hot on both bugs and feature PRs; llama.cpp and Unsloth are the only projects shipping tagged releases today.

## 3. Model Support Race

| Project | New Model / Architecture Support (24h) |
|---|---|
| **vLLM** | **K2-Horizon** (new arch, [#53806](https://github.com/vllm-project/vllm/pull/53806)); **Idefics3/SmolVLM** full ViT CUDA-graph support ([#47625](https://github.com/vllm-project/vllm/pull/47625)); **Kimi-K3** low-latency decode GEMM on SM100/B200 ([#53534](https://github.com/vllm-project/vllm/pull/53534)); **EAGLE3/dflash/dspark** draft models with pipeline parallelism ([#50514](https://github.com/vllm-project/vllm/pull/50514)) |
| **SGLang** | **Spark3** (native sliding-window/full attention, [#35963](https://github.com/sgl-project/sglang/pull/35963)); **Nemotron 3.5 Lightning** spec-dec + NVFP4 ([#36186](https://github.com/sgl-project/sglang/pull/36186)); **Nano v3** DFlash/DSpark ([#33554](https://github.com/sgl-project/sglang/pull/33554)); **NemotronH Omni Reasoning V3** MTP/vision ([#35599](https://github.com/sgl-project/sglang/pull/35599)); **Ling-3.0-flash MXFP4** on GB10 ([#36364](https://github.com/sgl-project/sglang/pull/36364)); **DeepSeek-V4-Flash** official 0731 checkpoint on MI35x ([#36388](https://github.com/sgl-project/sglang/pull/36388)) |
| **llama.cpp** | **Q2_0 ternary "Bonsai"** models on CPU+Metal+CUDA; **Apple RDMA** RPC transport for multi-Mac; **Vulkan fp32-only** devices (Haswell `hasvk`); **Hexagon multi-NPU** async backend |
| **Ollama** | **Qwen3.8-27B** support; **Granite 4.1** dense via MLX ([#17972](https://github.com/ollama/ollama/pull/17972)); requests open for deepseek-v4-flash:0731 and Q3_K_M MLX Qwen3.8-35B (cloud-only / unshipped) |
| **LiteLLM** | **Bedrock GPT-5.x** `reasoning_effort` mapping fix ([#38279](https://github.com/BerriAI/litellm/pull/38279)); **Together Qwen3.7-Max** pricing + cache-read cost ([#38280](https://github.com/BerriAI/litellm/pull/38280)); **Cerebras** full param passthrough ([#37674](https://github.com/BerriAI/litellm/pull/37674)); **Vertex AI rerank** document text return ([#38277](https://github.com/BerriAI/litellm/pull/38277)) |
| **Unsloth** | **Qwen3.8-27B** acknowledgment; **Qwen3.5 MTP** finetune loss ([#6557](https://github.com/unslothai/unsloth/pull/6557)); **EXL3 quantization backend** 2/3/4/6/8-bit + MoE ([#7115](https://github.com/unslothai/unsloth/pull/7115)) |

**Who is ahead:** vLLM and SGLang are effectively neck-and-neck on frontier serving architectures, but SGLang showed broader new-model breadth today (5 new architectures) while vLLM prioritized production hardening (MRV2, spec-decode PP). llama.cpp owns the edge/quantized-architecture frontier (ternary Q2_0, Hexagon). LiteLLM tracks models at the pricing/metadata layer, not the kernel layer — which is exactly its lane. Unsloth is the only project adding **training-time** model support (MTP loss, EXL3 backend) rather than inference-only.

## 4. Performance Frontier

Optimization effort today clusters in five areas:

1. **Speculative decoding overhead & correctness** — vLLM removed DP CPU all-reduce sync from EAGLE/MTP paths ([#53694](https://github.com/vllm-project/vllm/pull/53694)) and generalized adaptive acceptance verification to all draft-model families ([#52228](https://github.com/vllm-project/vllm/pull/52228)); SGLang added spec-dec for Nemotron 3.5 / Nano v3; llama.cpp is fighting an MTP acceptance collapse under parallel slots ([#27572](https://github.com/ggml-org/llama.cpp/issues/27572)) while Ollama reports MTP variants **2× slower** on Apple Silicon ([#17776](https://github.com/ollama/ollama/issues/17776)). The frontier is no longer "can you spec-decode" but "can you spec-decode under PD, PP, and multi-slot load."

2. **KV cache & long-context serving** — SGLang has the most aggressive work: HiCache L3 tiering (with JIT ABI segfault [#36302](https://github.com/sgl-project/sglang/issues/36302) and storage-key collisions [#33268](https://github.com/sgl-project/sglang/issues/33268)), plus unified_cache gaps at chunked-prefill boundaries ([#33714](https://github.com/sgl-project/sglang/issues/33714)). llama.cpp delivered the biggest raw number: SYCL TILE kernels deliver **+42–169%** quantized-KV decode on Intel GPUs ([#26689](https://github.com/ggml-org/llama.cpp/pull/26689)). vLLM is restoring prefix-cache hits under MTP ([#52244](https://github.com/vllm-project/vllm/pull/52244)).

3. **Quantization depth** — MXFP4+block-FP8 was reverted on H100 (vLLM [#53805](https://github.com/vllm-project/vllm/pull/53805)); SGLang landed AMD MXFP8 MoRI dispatch matching w4a8 MoE input format ([#36119](https://github.com/sgl-project/sglang/pull/36119)); llama.cpp added Q2_0 ternary; Unsloth built an EXL3 fractional-bit backend ([#7115](https://github.com/unslothai/unsloth/pull/7115)). The pattern: quantized MoE is the hardest unsolved correctness surface (see DSV4-Flash EP crashes on Hopper, [#35557](https://github.com/sgl-project/sglang/issues/35557)).

4. **Distributed serving & multi-node** — vLLM's MRV2 default rollout ([#53183](https://github.com/vllm-project/vllm/pull/53183)) is the biggest architectural change on the board; SGLang tuned custom all-reduce for sm_107 ([#36397](https://github.com/sgl-project/sglang/pull/36397)); llama.cpp added Apple RDMA as an RPC transport; but distributed is also where the worst breakage lives (vLLM 2-node gloo deadlock, [#52907](https://github.com/vllm-project/vllm/issues/52907)).

5. **Weight loading & serving economics** — SGLang's Weight Cache Daemon cut Qwen3-235B FP8 post-quantized load from **306–327s to <1s** ([#33522](https://github.com/sgl-project/sglang/issues/33522)); Unsloth added opt-in `async_load` to avoid proxy timeouts ([#7010](https://github.com/unslothai/unsloth/pull/7010)); Ollama defers eager GPU weight folding to avoid Metal timeouts on slow storage ([#17998](https://github.com/ollama/ollama/pull/17998)); LiteLLM moved cost-based routing to break ties on cache-read price ([#38164](https://github.com/BerriAI/litellm/pull/38164)).

## 5. Layer Positioning

| Layer | Projects | Primary job | Today's evidence of positioning |
|---|---|---|---|
| **Production serving engines** | vLLM, SGLang | Max throughput/latency for frontier models on multi-GPU; PD disaggregation, spec decode, distributed | Both racing on MRV2/PP/PD maturity; both carry the heaviest long-context and distributed bugs |
| **Local / edge runtime** | llama.cpp, Ollama | Run anywhere: quantized, portability, consumer GPUs, Apple Silicon | llama.cpp targets ternary Q2_0, Haswell Vulkan, Hexagon NPUs; Ollama handles `ollama stop` leaks and MLX kernel crashes |
| **LLM gateway / proxy** | LiteLLM | Routing, cost accounting, guardrails, multi-provider abstraction | Price corrections, cost-based routing tie-breaks, MCP guardrails, budget-enforcement bugs |
| **Fine-tuning / training framework** | Unsloth | Efficient finetuning + quantized backends + (increasingly) local serving | MTP finetune loss, EXL3 backend, MLX context fixes; agent-facing Studio features (auto-compaction, LAN mode) |

Notable overlaps: Unsloth is creeping into serving (Studio, LAN access, async load); Ollama and llama.cpp share the same engine core via version bumps; vLLM and SGLang compete directly on nearly every feature (both added new architectures, both have Kimi-K3 problems, both are working PD+spec-decode gaps).

## 6. Trend Signals

1. **Speculative decoding has crossed the chasm — and correctness is lagging.** Every engine now ships or is integrating MTP/EAGLE/DFlash/DSpark variants, but every project also carries an open spec-decode bug: vLLM throughput collapse at batch thresholds ([#49548](https://github.com/vllm-project/vllm/issues/49548)), SGLang DFLASH crashes under PD ([#36140](https://github.com/sgl-project/sglang/issues/36140)), llama.cpp MTP acceptance → 0.0 under parallel slots ([#27572](https://github.com/ggml-org/llama.cpp/issues/27572)), Ollama MTP 2× slower on Mac ([#17776](https://github.com/ollama/ollama/issues/17776)). **Watch:** do not assume spec decode helps until you measure it under your real batch/PD configuration.

2. **Long context is the new production incident class.** Kimi-K3 is the canary: engine-wide degeneration after ~240K-token prefill in vLLM ([#51039](https://github.com/vllm-project/vllm/issues/51039)), ~30s load-independent TTFT floor in SGLang ([#34815](https://github.com/sgl-project/sglang/issues/34815)). **Watch:** add token-diversity health checks, not just liveness probes, to long-context deployments.

3. **Multi-vendor silicon is now a first-class requirement.** AMD MI300/MI325 (both engines), Intel SYCL (llama.cpp +42–169% decode), Qualcomm Hexagon NPU, Apple MLX — but each vendor path carries its own crash class (ROCm gfx942 corruption, HIP cross-request leakage on gfx1151, WSL2 IPC crashes). **Watch:** HPCAAS (high-performance-compute-as-a-service) cost pressures will push more workloads to AMD; gamma-test your exact SKU.

4. **Quantization has no safe defaults.** vLLM's Humming revert, Ollama's CUDA 13 sm_86 drop, SGLang's DSV4-Flash MXFP4-on-Hopper crash, and Unsloth's weight-quantized drafter corruption ([#51581](https://github.com/vllm-project/vllm/issues/51581)) all landed in the last 24h. **Watch:** treat every new quant path as beta until you validate GSM8K-style correctness on your hardware.

5. **Weight loading is becoming an operational discipline.** SGLang's Weight Cache Daemon (306s → <1s) and Unsloth's `async_load` reflect the reality that large models make cold-start and autoscaling costs prohibitive. **Watch:** cache-daemon-style solutions will appear in vLLM and Ollama within months; plan for shared weight caches in multi-tenant fleets.

6. **Agent tool-calling reliability is still the weakest link across the stack.** Evidence: Ollama's Qwen3.8 tool-loop 500s ([#17778](https://github.com/ollama/ollama/issues/17778)), DeepSeek-V4 raw DSML token leakage with `tool_choice="none"` ([#35736](https://github.com/sgl-project/sglang/issues/35736)), Unsloth's `enabled_tools` no-op on GGUF ([#9730](https://github.com/unslothai/unsloth/issues/9730)), LiteLLM streaming `tool_use` leakage to Claude Code clients, llama.cpp grammar hyphen-escape fixes. **Watch:** agent frameworks should validate structured outputs end-to-end per backend, not per model family.

7. **Gateway governance is expanding beyond routing.** LiteLLM's Microsoft Agent 365 MCP guardrail with per-user Entra token exchange and Lakera v2 advisory mode signal a shift from "which model" to "what can the model's tools do." **Watch:** enterprise procurement will increasingly ask for tool-level policy enforcement at the gateway.

**Bottom line for technical decision-makers:** llama.cpp v0.3.0 is the only clean production checkpoint today; vLLM and SGLang are both mid-migration (MRV2, spec-decode+PD gaps) — pin known-good versions and budget for regression testing. Budget-enforcement false positives (LiteLLM [#36926](https://github.com/BerriAI/litellm/issues/36926)) and scheduler stalls that report healthy (vLLM [#53130](https://github.com/vllm-project/vllm/issues/53130)) mean your observability must validate output quality, not just engine liveness.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest — 2026-08-26

## 1. Today's Highlights

No releases shipped in the last 24 hours; the project is consolidating around the Model Runner V2 (MRV2) transition, with a PR to make MRV2 the default for all non-ROCm models ([#53183](https://github.com/vllm-project/vllm/pull/53183)) and two spec-decode optimizations that remove DP synchronization and extend adaptive verification to MTP/EAGLE/DFlash ([#53694](https://github.com/vllm-project/vllm/pull/53694), [#52228](https://github.com/vllm-project/vllm/pull/52228)). On the stability side, the team reverted MXFP4 + block-FP8 "Humming" support after post-merge H100 correctness failures ([#53805](https://github.com/vllm-project/vllm/pull/53805)), while two high-severity bugs remain open: a scheduler admission stall ([#53130](https://github.com/vllm-project/vllm/issues/53130)) and Kimi-K3 long-context degeneration into repeated tokens ([#51039](https://github.com/vllm-project/vllm/issues/51039)).

## 2. Releases & Breaking Changes

- No new releases or version tags in the last 24h.
- **Pending config change:** [PR #53183](https://github.com/vllm-project/vllm/pull/53183) proposes enabling MRV2 for all models by default (ROCm still falls back to MRV1 for some models). Watch for behavior changes when this lands.
- **Reverted feature:** [PR #53805](https://github.com/vllm-project/vllm/pull/53805) reverts the MXFP4 + block-FP8 Humming path ([#51332](https://github.com/vllm-project/vllm/issues/51332)) after exact post-merge H100 evaluation showed invalid outputs on `test_gsm8k_correctness`. Users on H100 should stay on the standard FP8 path for now.

## 3. New Model & Hardware Support

- **K2-Horizon:** New model architecture added in [PR #53806](https://github.com/vllm-project/vllm/pull/53806) (`k2_horizon.py`, model registry, docs).
- **Idefics3 / SmolVLM:** Full ViT encoder CUDA Graph support in [PR #47625](https://github.com/vllm-project/vllm/pull/47625), precomputing vision position IDs for graph capture.
- **Kimi-K3 on SM100 (B200):** [PR #53534](https://github.com/vllm-project/vllm/pull/53534) enables the low-latency decode GEMM dispatch on SM100 instead of falling back to cuBLAS (currently gated on B300/SM103).
- **EAGLE3-family spec decode with pipeline parallelism:** [PR #50514](https://github.com/vllm-project/vllm/pull/50514) lets `eagle3`, `dflash`, and `dspark` draft models run with PP; draft runs on the last pipeline stage while auxiliary hidden states can come from any stage.
- **ROCm roadmap:** Kimi-K3 gfx942/MI325X gap tracking in [Issue #52803](https://github.com/vllm-project/vllm/issues/52803); Sparse MLA via `TRITON_MLA_SPARSE` for sm80/120/121 requested in [Issue #38006](https://github.com/vllm-project/vllm/issues/38006).

## 4. Performance & Optimization

- **MRV2 default rollout:** [PR #53183](https://github.com/vllm-project/vllm/pull/53183) aims to make MRV2 the default path for all models, with MRV1 retained only for unsupported features.
- **Spec-decode overhead reduction:** [PR #53694](https://github.com/vllm-project/vllm/pull/53694) skips the CPU all-reduce (`sync_cudagraph_and_dp_padding`) before EAGLE/MTP draft prefill and multi-step decode.
- **Adaptive verification generalization:** [PR #52228](https://github.com/vllm-project/vllm/pull/52228) extends acceptance estimation to all draft-model speculators (MTP, EAGLE3, DFlash 1&2), not just DSpark confidence heads.
- **LoRA metadata on CPU:** [PR #53309](https://github.com/vllm-project/vllm/pull/53309) prepares Punica kernel metadata on the CPU with non-blocking H2D copies, reusing prepared metadata for identical mappings.
- **Reported regression:** [Issue #49548](https://github.com/vllm-project/vllm/issues/49548) — dynamic speculative decoding (`num_speculative_tokens_per_batch_size`) on Qwen3.5-122B MTP causes catastrophic aggregate-throughput collapse at the batch-size threshold (the documented PIECEWISE CUDA-graph downgrade costs ~14% single-stream; the multi-stream collapse is the bug).
- **Prefix-cache fix in flight:** [PR #52244](https://github.com/vllm-project/vllm/pull/52244) restores GDN prefix-cache hits under MTP spec decoding (currently prompts with length multiple of the hash unit get zero hits).

## 5. Stability & Regressions

Ranked by severity:

1. **Scheduler permanently halts admission** — [Issue #53130](https://github.com/vllm-project/vllm/issues/53130): once running + "deferred" requests reach `max_num_seqs`, the engine stops admitting requests forever, reports healthy, and has mostly free KV cache; only restart recovers. Related fix [PR #53799](https://github.com/vllm-project/vllm/pull/53799) handles missing `req_id` in `update_from_output` (worker OOM path) to avoid an unhandled `KeyError`.
2. **Kimi-K3 long-context service-wide degeneration** — [Issue #51039](https://github.com/vllm-project/vllm/issues/51039): after a ~240K-token prefill, every subsequent request returns a single repeated degenerate token (NaN logits; packed KDA prefill suspected). Also [Issue #51798](https://github.com/vllm-project/vllm/issues/51798): Kimi-K3-NVFP4 on 8×B300 produces incoherent reasoning-channel output on v0.27.0.
3. **Multi-node startup deadlock** — [Issue #52907](https://github.com/vllm-project/vllm/issues/52907): 2-node TP-16 DeepSeek-R1 FP8 with Ray executor hangs forever in the gloo barrier inside `in_the_same_node_as()`, then dies after exactly 30 minutes. Regression between `0.26.1rc1.dev78` and `dev148`.
4. **MXFP4 + block-FP8 invalid outputs on H100** — reverted in [PR #53805](https://github.com/vllm-project/vllm/pull/53805) (see Releases).
5. **DeepSeek-V4-Flash silent retrieval corruption on ROCm gfx942** — [Issue #52109](https://github.com/vllm-project/vllm/issues/52109): prompts ≥ ~4–5K tokens corrupt with the AITER sparse indexer on MI325X.
6. **Decode segfault in P/D disaggregation** — [Issue #49238](https://github.com/vllm-project/vllm/issues/49238): decode instance segfaults on NIXL `loadRemoteMD` after a prefill pod restart.
7. **Gemma4 fails to start** — [Issue #51744](https://github.com/vllm-project/vllm/issues/51744): `vllm/vllm-openai:latest` (Transformers 5.15.0) fails to launch Gemma-4-31B QAT NVFP4 (13 👍, open).
8. **Weight-quantized drafter corruption** — [Issue #51581](https://github.com/vllm-project/vllm/issues/51581): DFlash fused-KV projection calls `F.linear` on a sliced `qkv_proj` weight, silently corrupting NVFP4/compressed-tensors drafters on DGX Spark.
9. **GLM-5.2 sparse MLA decode gap** — [Issue #53134](https://github.com/vllm-project/vllm/issues/53134): decode is unavailable for GlmMoeDsa on SM90 because the sparse MLA backend lacks decode-LSE support.
10. **Build break on Ampere/Ada** — [PR #53807](https://github.com/vllm-project/vllm/pull/53807) fixes `fused_gdn_decode_post_conv_mtp` being declared behind the KDA guard instead of the GDN guard.

## 6. What This Means for Application Developers

- **Pin your images.** No release shipped today; `latest` currently carries the Transformers 5.15.0 / Gemma4 startup break ([#51744](https://github.com/vllm-project/vllm/issues/51744)). Moving to `nightly` isn't obviously safer given the MRV2-default transition in flight ([#53183](https://github.com/vllm-project/vllm/pull/53183)).
- **Watch long-context and spec-decode deployments.** Kimi-K3 at ~240K context can poison a whole engine ([#51039](https://github.com/vllm-project/vllm/issues/51039)); Qwen3.5-122B MTP with dynamic spec decode can collapse throughput at the batch-size threshold ([#49548](https://github.com/vllm-project/vllm/issues/49548)). Add health checks that verify token diversity, not just engine liveness.
- **Heal the scheduler stall with a restart.** If an engine reports healthy but stops admitting requests (running + deferred = `max_num_seqs`), restart rather than scaling ([#53130](https://github.com/vllm-project/vllm/issues/53130)).
- **H100 users:** avoid the reverted MXFP4 + block-FP8 Humming path; validate GSM8K-style correctness before adopting new quantization paths ([#53805](https://github.com/vllm-project/vllm/pull/53805)).
- **Tool-calling / structured output fixes are incoming:** malformed namespace tools currently return HTTP 500 instead of a validation error ([#53763](https://github.com/vllm-project/vllm/pull/53763)), and reasoning adapters are silently dropped when the reasoning and tool parsers share an engine ([#52830](https://github.com/vllm-project/vllm/pull/52830)).
- **Multimodal pipeline users:** modality-scoped `mm_processor_kwargs` (e.g., `videos_kwargs.size`) are honored in the token-budget/dummy-input path in [PR #53808](https://github.com/vllm-project/vllm/pull/53808) — important for Qwen3-VL long-video encoder-cache profiling.
- **New model support to plan for:** K2-Horizon ([#53806](https://github.com/vllm-project/vllm/pull/53806)). For multi-node Ray deployments, hold off upgrading until the gloo-barrier deadlock ([#52907](https://github.com/vllm-project/vllm/issues/52907)) is resolved.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest – 2026-08-26

## Today’s Highlights
No new release was published in the last 24 hours. The most notable activity surrounds DeepSeek-V4 on AMD (MXFP8 MoRI dispatch, #36119), MiniMax-H3 multi-GPU fixes (#36398), and new model enablement for Spark3 and Nemotron variants (#35963, #36186, #35599). On the reliability side, several high-impact open bugs affect PD-disaggregated deployments, including a ~30s TTFT floor for Kimi-K3 with PP8 (#34815) and DFLASH speculative decoding being unsupported under PD (#36140).

## Releases & Breaking Changes
- None in the last 24 hours. No new versions, API changes, or migration notes to report.

## New Model & Hardware Support
- **Spark3 architecture**: PR #35963 adds native support with sliding-window/full attention, head-wise attention output gating, TP/PP support — [PR #35963](https://github.com/sgl-project/sglang/pull/35963)
- **Nemotron 3.5 Lightning speculative decoding**: PR #36186 adds clean spec-dec support with ModelOpt W4A16 NVFP4 — [PR #36186](https://github.com/sgl-project/sglang/pull/36186)
- **Nano v3 spec-dec + quant recipe**: PR #33554 adds DFlash/DSpark support for Nemotron 3.5 — [PR #33554](https://github.com/sgl-project/sglang/pull/33554)
- **NemotronH_Omni_Reasoning_V3**: PR #35599 adds architecture recognition so MTP and quantized vision weights load correctly — [PR #35599](https://github.com/sgl-project/sglang/pull/35599)
- **GB10 / DGX Spark**: PR #36364 adds Ling-3.0-flash MXFP4 cookbook cells for sm121 — [PR #36364](https://github.com/sgl-project/sglang/pull/36364)
- **AMD MI30x/MI35x CI coverage**: PR #36388 moves MI35x DeepSeek-V4-Flash nightly to the official 0731 checkpoint; PR #36396 adds MI30x FP8 accuracy coverage — [PR #36388](https://github.com/sgl-project/sglang/pull/36388), [PR #36396](https://github.com/sgl-project/sglang/pull/36396)
- **ROCm MLA attention fix**: PR #28734 fixes loading/inference of MLA models with Quark PTPC FP8 attention on gfx95 — [PR #28734](https://github.com/sgl-project/sglang/pull/28734)
- **XPU flag removal**: PR #34492 removes the `SGLANG_USE_SGL_XPU` opt-in flag — [PR #34492](https://github.com/sgl-project/sglang/pull/34492)
- **EPD embedding cache**: PR #35145 adds L2-only multimodal embedding cache with rank-0 allocation — [PR #35145](https://github.com/sgl-project/sglang/pull/35145)

## Performance & Optimization
- **Custom all-reduce v2 for sm_107**: PR #36397 tunes the custom all-reduce path for NVIDIA sm_107 — [PR #36397](https://github.com/sgl-project/sglang/pull/36397)
- **AMD DSV4 MXFP8 MoRI dispatch**: PR #36119 makes MoRI dispatch match the w4a8 MoE input format, enabling fp8 activations with group-32 e8m0 microscales — [PR #36119](https://github.com/sgl-project/sglang/pull/36119)
- **Simulated expert-choice fusion**: PR #29718 fuses simulated expert routing into one Triton kernel, reducing ~5–7 small elementwise ops per layer — [PR #29718](https://github.com/sgl-project/sglang/pull/29718)
- **Diffusion mapped-layer readahead**: PR #36323 advises the prefetch kernel ahead of the courier on mapped layers, avoiding slow fault-time readahead on NVMe — [PR #36323](https://github.com/sgl-project/sglang/pull/36323)
- **Weight Cache Daemon**: Roadmap issue #33522 reports phase 1 landed; post-quantized weight load on Qwen3-235B FP8 dropped from ~306–327s to <1s — [Issue #33522](https://github.com/sgl-project/sglang/issues/33522)
- **Agentic benchmark dataset**: PR #30304 adds `--dataset-name agentic` to the serving benchmark for long, mostly-cached multi-turn conversations — [PR #30304](https://github.com/sgl-project/sglang/pull/30304)

## Stability & Regressions
High-severity or notable issues updated in the last 24h:

- **DeepSeek-V4-Flash EP crashes on Hopper/SM90**: PR/issue #35557 fails late during decode CUDA-graph capture because DeepGEMM MXFP4 MegaMoE is SM100-only; error message is misleading — [Issue #35557](https://github.com/sgl-project/sglang/issues/35557)
- **Kimi-K3 PP8 disaggregated prefill has ~30s TTFT floor**: Issue #34815 shows a load-independent floor even with PD disaggregation; no fix PR linked — [Issue #34815](https://github.com/sgl-project/sglang/issues/34815)
- **DFLASH spec-dec crashes under PD disaggregation**: Issue #36140 reports `spec_info None` crash and watchdog self-kill when decode side uses `--disaggregation-mode decode`; DSPARK and EAGLE work — [Issue #36140](https://github.com/sgl-project/sglang/issues/36140)
- **Kimi-K3 crash in v0.5.18**: Issue #36018 reports a crash in the release build — [Issue #36018](https://github.com/sgl-project/sglang/issues/36018)
- **DeepSeek-V4 leaks raw DSML tokens**: Issue #35736 reports raw DSML leakage even when `tool_choice="none"` — [Issue #35736](https://github.com/sgl-project/sglang/issues/35736)
- **HiCache L3 segfault on first backup**: Issue #36302 is a JIT ABI mismatch in `staged_write_back.cuh` between nvcc 12.8 compile-time and CUDA 13 runtime `cudaMemcpyBatchAsync` — [Issue #36302](https://github.com/sgl-project/sglang/issues/36302)
- **WSL2 multimodal crash**: Issue #35385 reports scheduler crash because CUDA IPC transport is auto-selected on WSL2, where CUDA IPC is unsupported — [Issue #35385](https://github.com/sgl-project/sglang/issues/35385)
- **MiniMax-M2 CPU inference failure**: Issue #35779 reports failure while processing requests on CPU — [Issue #35779](https://github.com/sgl-project/sglang/issues/35779)
- **HiCache storage key collisions**: Issue #33268 reports `kv_cache_dtype` is missing from HiCache storage keys, causing silent cross-run cache collisions — [Issue #33268](https://github.com/sgl-project/sglang/issues/33268)
- **unified_cache skips long prompts**: Issue #33714 notes write-through backup is skipped when new-token extend length exceeds `chunked_prefill_size` — [Issue #33714](https://github.com/sgl-project/sglang/issues/33714)
- **AMD EP8 + FP8 KV cache NCCL error**: Issue #29039 (closed/inactive) reports `ValueError: Unsupported dtype torch.float8_e4m3fn` during CUDA graph capture — [Issue #29039](https://github.com/sgl-project/sglang/issues/29039)

## What This Means for Application Developers
- **Be careful with PD + speculative decoding today**: DFLASH is not wired into PD disaggregation; use DSPARK or EAGLE for now ([#36140](https://github.com/sgl-project/sglang/issues/36140)).
- **Kimi-K3 PP8 users should measure TTFT before committing**: the ~30s floor in disaggregated prefill is load-independent and not yet fixed ([#34815](https://github.com/sgl-project/sglang/issues/34815)).
- **For large-model recovery**, the Weight Cache Daemon can reduce weight load from minutes to <1s, which is important for frequent restarts or autoscaling ([#33522](https://github.com/sgl-project/sglang/issues/33522)).
- **DeepSeek-V4 tool-calling deployments** should not assume `tool_choice="none"` fully suppresses DSML control tokens; sanitize outputs or wait for the fix ([#35736](https://github.com/sgl-project/sglang/issues/35736)).
- **Avoid multimodal serving on WSL2** unless the feature transport issue is resolved; the scheduler can crash with no useful hint ([#35385](https://github.com/sgl-project/sglang/issues/35385)).
- **HiCache users** should treat cache directories as dtype-sensitive and clear them after changing KV cache dtype or enabling long-prompt workloads ([#33268](https://github.com/sgl-project/sglang/issues/33268)).

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

## llama.cpp Digest — 2026-08-26

### 1. Today's Highlights
llama.cpp officially tagged **v0.3.0**, with the release train also bringing a reworked KleidiAI build integration, Apple RDMA RPC transport support, and a Metal OOM crash fix. On the performance side, CUDA graphs are now viable on Pascal GPUs (+40% MoE), and SYCL TILE kernels show large quantized-KV decode gains. Several high-severity HIP/Vulkan correctness bugs remain open, including corrupted output on RDNA iGPUs and cross-request response leakage under parallel serving.

### 2. Releases & Breaking Changes
- **v0.3.0 released** — version bump and release infrastructure updates ([b10621](https://github.com/ggml-org/llama.cpp/releases/tag/b10621), [v0.3.0](https://github.com/ggml-org/llama.cpp/releases/tag/v0.3.0)).
- **KleidiAI build system rework** — CMake integration now relies on KleidiAI's own build rules instead of manual kernel listing and `-march` flags; relevant for ARM CPU builds ([b10630](https://github.com/ggml-org/llama.cpp/releases/tag/b10630), [PR #26077](https://github.com/ggml-org/llama.cpp/pull/26077)).
- **SYCL: `tq2_0` marked unsupported** — Tensor-quantized 2-bit format disabled on SYCL; check for fallback paths if using this quant type ([b10617](https://github.com/ggml-org/llama.cpp/releases/tag/b10617)).
- **CI baseline moved to Ubuntu 24.04 for ROCm** builds, matching AMD wheel support ([b10629](https://github.com/ggml-org/llama.cpp/releases/tag/b10629)).

### 3. New Model & Hardware Support
- **Apple RDMA as RPC transport** — allows RPC backends over Apple RDMA, useful for multi-Mac setups ([b10628](https://github.com/ggml-org/llama.cpp/releases/tag/b10628)).
- **Q2_0 quantization support** for ternary "Bonsai" models across CPU, Metal, and CUDA backends ([CPU PR #24448](https://github.com/ggml-org/llama.cpp/pull/24448), [Metal PR #25419](https://github.com/ggml-org/llama.cpp/pull/25419), [CUDA PR #25707](https://github.com/ggml-org/llama.cpp/pull/25707)).
- **Vulkan fp32-only devices** — enables Haswell `hasvk` and similar GPUs lacking fp16/storage-buffer features ([PR #27723](https://github.com/ggml-org/llama.cpp/pull/27723)).
- **CUDA graphs on Pascal (sm_61)** — architecture gate relaxed from Volta to DP4A ([PR #27721](https://github.com/ggml-org/llama.cpp/pull/27721)).
- **Hexagon multi-NPU support** — async backend overhaul for IQ9/IQ10 class devices ([PR #26501](https://github.com/ggml-org/llama.cpp/pull/26501)).

### 4. Performance & Optimization
- **CUDA graphs on Pascal:** +40% on MoE, +7% on dense models with no regressions ([PR #27721](https://github.com/ggml-org/llama.cpp/pull/27721)).
- **SYCL TILE kernel for quantized KV decode:** +42% to +169% across Qwen3.6-35B, Gemma 4 26B/12B at 32K/118K context ([PR #26689](https://github.com/ggml-org/llama.cpp/pull/26689)).
- **MMA FlashAttention for head dim 256 on AMD RDNA:** fixes the rocWMMA-removal prompt-processing regression of up to 2x ([PR #26419](https://github.com/ggml-org/llama.cpp/pull/26419), [Issue #26220](https://github.com/ggml-org/llama.cpp/issues/26220)).
- **Speculative prefill** proposed to reduce TTFT via token importance estimation ([PR #27692](https://github.com/ggml-org/llama.cpp/pull/27692)).
- **Scheduler UMA ring buffer** plus sanitizer hardening for input tensor handling ([PR #27311](https://github.com/ggml-org/llama.cpp/pull/27311)).
- **Stream MoE routed experts from disk** — allows running MoE models larger than RAM with a device-side expert slab cache ([PR #25294](https://github.com/ggml-org/llama.cpp/pull/25294)).

### 5. Stability & Regressions
- **Cross-request response leakage on integrated HIP GPUs** — `llama-server` with `-np 4 --kv-unified` can return another request's response verbatim on Strix Halo (gfx1151); high severity ([Issue #25992](https://github.com/ggml-org/llama.cpp/issues/25992)).
- **HIP/ROCm corrupted output on gfx1151** — dense architectures fail with ROCm while Vulkan is correct with byte-identical flags ([Issue #27579](https://github.com/ggml-org/llama.cpp/issues/27579)).
- **MTP draft acceptance collapses to 0.0 under parallel slots** — async device→host copy race in self-speculative decoding with `-np N` ([Issue #27572](https://github.com/ggml-org/llama.cpp/issues/27572)).
- **CUDA kernel stall/watchdog** on RTX Pro 6000 Blackwell during execution ([Issue #27102](https://github.com/ggml-org/llama.cpp/issues/27102)).
- **ROCm severe PPL explosion starting at b10040** — reported on Ryzen AI Max+ 395 iGPU ([Issue #27506](https://github.com/ggml-org/llama.cpp/issues/27506)).
- **HIP GDN cache fusion hangs RDNA3 iGPUs** — fixed by a PR that disables the fused path on HIP ([PR #27722](https://github.com/ggml-org/llama.cpp/pull/27722)).
- **gpt-oss-20b Harmony channel parsing failures** — malformed channel headers fail final PEG parse and error the whole turn ([Issue #27720](https://github.com/ggml-org/llama.cpp/issues/27720)).
- **Metal OOM crash fixed** — null-check buffer allocation in Metal backend ([b10622](https://github.com/ggml-org/llama.cpp/releases/tag/b10622)).
- **Grammar parser fix** — `\-` escape in character classes now parses correctly, fixing some generated tool-call grammars ([b10618](https://github.com/ggml-org/llama.cpp/releases/tag/b10618)).

### 6. What This Means for Application Developers
- **v0.3.0 is a good checkpoint** for production upgrades, but verify HIP/SYCL paths if you target RDNA iGPUs or Intel GPUs; Vulkan remains the safer fallback on AMD APUs.
- **Parallel serving on HIP iGPUs is risky** — cross-request leakage and MTP acceptance bugs are still open; pin `-np 1` or use Vulkan when running multi-slot workloads on gfx1151-class hardware.
- **Tool-call reliability improved** with the grammar hyphen-escape fix — relevant for agent frameworks using structured outputs with hyphens in schemas.
- **Q2_0 support** opens the door for ternary ultra-low-bit models (Bonsai family) on CPU, Metal, and CUDA — useful for edge deployments.
- **CUDA graphs on Pascal** extend the performance reach of older data-center and workstation GPUs; expect meaningful gains on MoE models.
- **`/v1/models` timestamp stability** is incoming via PR, which will improve client-side response caching in serving gateways ([PR #27719](https://github.com/ggml-org/llama.cpp/pull/27719)).

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Digest — 2026-08-26

## Today’s Highlights
No new Ollama release landed in the last 24 hours. The project is actively churning on Qwen3.8-era regressions (OpenAI-compatible endpoint hangs, tool-loop failures, MLX/Metal crashes) while merging Claude Desktop integration polish and exposing cached prompt-token metrics. AMD Ryzen NPU support remains the most-voted open feature request.

## Releases & Breaking Changes
None in the last 24 hours. Upstream dependency bumps are in review: [llama.cpp b10630 (#18003)](https://github.com/ollama/ollama/pull/18003) and [MLX version bump (#17955)](https://github.com/ollama/ollama/pull/17955).

## New Model & Hardware Support
- [AMD Ryzen NPU support (#5186)](https://github.com/ollama/ollama/issues/5186) — still the top feature request; Linux driver already exists, but no implementation has landed.
- [deepseek-v4-flash:0731 for local users (#17510)](https://github.com/ollama/ollama/issues/17510) — open request; currently cloud-only.
- [Official Q3_K_M MLX quantization for Qwen3.8-35B-A3B (#17869)](https://github.com/ollama/ollama/issues/17869) — requested for 16GB/24GB Apple Silicon Macs.
- [GraniteForCausalLM support in MLX backend (#17972)](https://github.com/ollama/ollama/pull/17972) — adds Granite 4.1 dense model support to `mlxrunner`.
- [Remove text-only gemma3 MLX model (#18005)](https://github.com/ollama/ollama/pull/18005) — prevents MLX from shadowing the GGUF vision-capable gemma3 path.
- [Upstage Solar Pro 4 request (#17773)](https://github.com/ollama/ollama/issues/17773) — user-requested addition.

## Performance & Optimization
- [Report cached prompt tokens (#17943)](https://github.com/ollama/ollama/pull/17943) — adds `prompt_eval_cached_count` to native responses and cached-token fields to OpenAI/Anthropic-compatible APIs.
- [Cached eval metric in server response (#16916)](https://github.com/ollama/ollama/pull/16916) — broader pass carrying `cache_n`/MLX cache hits through `/api/generate`, `/api/chat`, and compatibility endpoints.
- [Qwen3.8-27B MTP variants measured 2× slower than non-MTP on Apple Silicon (#17776)](https://github.com/ollama/ollama/issues/17776) — reported as potentially expected, but worth measuring before relying on speculative decoding.
- [Avoid Metal GPU timeouts when loading models from slow storage (#17998)](https://github.com/ollama/ollama/pull/17998) — defers eager GPU folding of weights so Metal command buffers do not stall on file reads.

## Stability & Regressions
Ranked by severity:

1. **DeepSeek-v4-flash:0731 Cloud infinite thinking loop** — [Issue #17892](https://github.com/ollama/ollama/issues/17892) repeated the same reasoning block 221 times over ~1m45s, ended with zero usable output. No fix PR yet.
2. **Qwen3.8 `/api/chat` tool-loop 500 error** — [Issue #17778](https://github.com/ollama/ollama/issues/17778): `no user query found in messages` during agentic tool-calling. No fix PR yet.
3. **Qwen3.8-27B garbage output on AMD Instinct MI210/ROCm** — [Issue #17968](https://github.com/ollama/ollama/issues/17968) is deterministic on `0.32.15`; other models work on the same host.
4. **MLX runner crash on Qwen3.8 27B** — [Issue #17986](https://github.com/ollama/ollama/issues/17986): Metal kernel `v_copyfloat32bfloat16` fails to load. Related work in [#17998](https://github.com/ollama/ollama/pull/17998) targets load-time GPU stalls but not confirmed as a fix for this kernel error.
5. **CUDA 13 silently drops sm_86 support** — [Issue #17841](https://github.com/ollama/ollama/issues/17841): RTX 30-series/A40/A6000 fall back to CPU on Ollama `0.32.14` (~7 tok/s, zero GPU allocation). No fix PR yet.
6. **CUDA illegal memory access regression in prefill** — [Issue #17740](https://github.com/ollama/ollama/issues/17740) with qwen3.6:35b, prompt-size dependent, introduced between `0.31.2` and `0.32.9`.
7. **Typhoon OCR 1.5 3B deterministic `@`-repetition on RTX 50-series** — [Issue #17687](https://github.com/ollama/ollama/issues/17687); works on CPU and other vision models on the same GPU.
8. **Minimax-M3:cloud splits JSON across reasoning/content** — [Issue #17987](https://github.com/ollama/ollama/issues/17987): `content` alone is never valid JSON on `/v1/chat/completions`.
9. **`ollama stop` leaks MLX runner on macOS** — [Issue #17792](https://github.com/ollama/ollama/issues/17792) has a fix in [PR #17798](https://github.com/ollama/ollama/pull/17798) adding graceful shutdown.
10. **Flux2 Klein image editing broken since ~0.15.6** — [Issue #14306](https://github.com/ollama/ollama/issues/14306) remains open for macOS.

## What This Means for Application Developers
- **If you depend on `/v1/chat/completions` with Qwen3.8 models, validate against this release first.** Both [hang behavior (#17790)](https://github.com/ollama/ollama/issues/17790) and [500 tool-loop failures (#17778)](https://github.com/ollama/ollama/issues/17778) are live. Native `/api/chat` may work when the OpenAI-compatible endpoint does not.
- **Tool-calling loops need defensive termination**: the `no user query found` failure mode shows that agentic loops can put the message history into a state the model/server rejects. Treat tool-result message assembly as part of your retry logic.
- **Cached prompt-token reporting is coming** in [#17943](https://github.com/ollama/ollama/pull/17943) / [#16916](https://github.com/ollama/ollama/pull/16916). Applications will soon be able to distinguish prefill vs. cache-hit tokens on native, OpenAI-compatible, and Anthropic-compatible paths — useful for cost and latency observability.
- **Cloud reasoning models are not guaranteed to emit valid JSON in `message.content`** — see [Minimax-M3 split output (#17987)](https://github.com/ollama/ollama/issues/17987). Concatenate or validate `reasoning + content` if you require complete structured output.
- **Claude Desktop integration is being actively stabilized** — docs in [#18004](https://github.com/ollama/ollama/pull/18004), model-reset behavior in [#18000](https://github.com/ollama/ollama/pull/18000), connection-state UI in [#17997](https://github.com/ollama/ollama/pull/17997), and installed-icon handling in [#17995](https://github.com/ollama/ollama/pull/17995). Routing is still overridable by `~/.claude/settings.json` ([#17990](https://github.com/ollama/ollama/issues/17990)), so pin environment-based routing explicitly if you rely on `ollama launch claude`.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-08-26

## 1. Today's Highlights
No releases shipped in the last 24h, but the project saw heavy PR activity across cost accounting, routing, and guardrails. Key items: Together AI cache-read pricing was fixed (#38280), cost-based routing now breaks ties on cache-read price (#38164), and a new Microsoft Agent 365 MCP guardrail landed (#38241). On the stability front, a fresh Python 3.10 compatibility regression was reported (#38202) alongside the still-open Redis `ssl_check_hostname` failure (#34614) and false `BudgetExceededError` under sustained load (#36926).

## 2. Releases & Breaking Changes
None. No new releases in the last 24 hours.

## 3. New Model & Hardware Support
- **Fireworks AI Serverless cost entries** requested — #37274 ([link](https://github.com/BerriAI/litellm/issues/37274))
- **`novita/openai/gpt-oss-120b` pricing entry** flagged as incorrect in `model_prices_and_context_window.json` — #37584 ([link](https://github.com/BerriAI/litellm/issues/37584))
- **Bedrock GPT-5.x `reasoning_effort`** now mapped to `additionalModelRequestFields.reasoning.effort` for Converse (previously sent as Anthropic `thinking`, causing 400s) — PR #38279 ([link](https://github.com/BerriAI/litellm/pull/38279))
- **Together AI Qwen3.7-Max registry pricing** updated to current rates, plus `cache_read_input_token_cost` added — PR #38280 ([link](https://github.com/BerriAI/litellm/pull/38280))
- **Bedrock GPT-5.6 long-context pricing** fixed; metadata mismatch remains under investigation — #36016 ([link](https://github.com/BerriAI/litellm/issues/36016), closed)
- **Vertex AI rerank** now populates document text in responses when `return_documents=true` — PR #38277 ([link](https://github.com/BerriAI/litellm/pull/38277))
- **Cerebras request-parameter passthrough** preserved (`max_completion_tokens`, reasoning, logprobs, service tier, parallel tool calls) — PR #37674 ([link](https://github.com/BerriAI/litellm/pull/37674))

## 4. Performance & Optimization
- **Cost-based routing tie-break on cache-read price** — cached traffic now picks between equal-priced deployments using `cache_read_input_token_cost`, eliminating list-order bias — PR #38164 ([link](https://github.com/BerriAI/litellm/pull/38164))
- **Tag-scoped rate limits** (token/request/dollar/concurrency per arbitrary tag value) in progress; native TPM/RPM caps currently only scope to key/user/team — PR #36541 ([link](https://github.com/BerriAI/litellm/pull/36541))
- No throughput, latency, or kernel-level work with concrete numbers was reported in this window.

## 5. Stability & Regressions
Ranked by severity:

1. **Python 3.10 incompatibility** — new report aggregating multiple breaking issues for 3.10 environments — #38202 ([link](https://github.com/BerriAI/litellm/issues/38202), OPEN)
2. **False `BudgetExceededError` under sustained load** — proxy returns 429 near end of ~40-min batch runs with inflated "Current cost"; self-heals in ~2 min; no Redis involved — #36926 ([link](https://github.com/BerriAI/litellm/issues/36926), OPEN)
3. **Redis failure on v1.93.0** — `TypeError: ... unexpected keyword argument 'ssl_check_hostname'` breaks cache and budget counters — #34614 ([link](https://github.com/BerriAI/litellm/issues/34614), OPEN)
4. **Claude models returning sanitized placeholder text** — `[System: Empty message content sanitised to satisfy protocol]` appears as actual output — #24498 ([link](https://github.com/BerriAI/litellm/issues/24498), OPEN)
5. **OpenAI spec violation in streaming usage chunk** — synthetic `include_usage` event carries non-empty `choices` instead of `choices: []`, breaking strict clients — #28735 ([link](https://github.com/BerriAI/litellm/issues/28735), OPEN)
6. **Masked API keys overwrite real keys** — search-tool edit modal pre-fills masked values (e.g. `sk****et`) and persists them over the real key — #28902 ([link](https://github.com/BerriAI/litellm/issues/28902), OPEN, security-relevant)
7. **Spend logs miss chained MCP tool calls** — only first tool call and first LLM round recorded for streaming `/responses` with `require_approval="never"` — #37358 ([link](https://github.com/BerriAI/litellm/issues/37358), OPEN)
8. **xAI retired Live Search** — `web_search_options` on chat completions now returns HTTP 410; fix PR drops the param — #38278 ([link](https://github.com/BerriAI/litellm/pull/38278), OPEN)

Closed in last 24h (non-stale, likely fixed): LangSmith tracing 400s (#37269), usage stats breakage on 1.97-RC1 (#36337), `anthropic_messages` mid-stream fallback (#24004), `bedrock_mantle` /invoke passthrough (#38054), Responses bridge `max_output_tokens` truncation (#38088). Note that #22878, #27460, #22173, #12793, and #24583 were closed as **stale**, not necessarily fixed.

**Other notable open fixes in flight:** Claude Code streaming tool-call leakage (server-fulfilled `headroom_retrieve` reaching the client) — PR #36245; Together AI leaking internal `thinking_blocks`/`provider_specific_fields` outbound — PR #38275; Together `response_format` failing open for unregistered models — PR #38269; Fireworks `cache_read_input_token_cost` not applied in cost calc — #25950.

## 6. What This Means for Application Developers
- **Budget enforcement can false-positive under sustained load.** If you run long batch workloads through the proxy, the ~2-min self-healing 429 behavior (#36926) means you should add retry/backoff, and avoid treating `budget_exceeded` as a hard terminal state until the budget subsystem is fixed.
- **Pin your Python environment above 3.10** if possible; a fresh compatibility regression report (#38202) suggests 3.10 support is drifting.
- **xAI Live Search is retired.** Remove `web_search_options` from chat completions requests, or upgrade to the fix in #38278 once merged.
- **Fallback visibility is improving.** PR #38107 persists `attempted_fallbacks` and `original_model_group` into spend-log metadata, which will make it much easier to audit which deployment actually served a request.
- **Guardrail governance is expanding.** Expect Microsoft Agent 365 MCP tool-call evaluation (per-user Entra OBO token exchange, #38241) and Lakera v2 skip-message/advisory mode (#34940) in an upcoming release.
- **Anthropic streaming + tool use:** if you proxy Claude Code, PR #36245 prevents server-fulfilled retrieval tool calls from being streamed to the client as unusable `tool_use` blocks — worth tracking for adoption.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

### 1. Today's Highlights
Two beta releases (v0.1.802/803) shipped with auto-compaction, LAN/remote-access improvements, and important MLX/AMD fixes. For application developers, the most urgent signals are new correctness bugs around tool execution on GGUF models (`#9730`) and batched vs. single-request greedy generation (`#9708`), both of which affect agent reliability and evaluation fidelity.

### 2. Releases & Breaking Changes
- [v0.1.803-beta](https://github.com/unslothai/unsloth/releases) — Bug-fix release with 170+ PRs. Includes MLX/Mac runtime fixes, LAN API keyless/password-less access, keyboard shortcuts, an XET/HTTP download toggle, and an AMD bug fix.
- [v0.1.802-beta](https://github.com/unslothai/unsloth/releases) — Similar content to .803: MLX fixes, LAN keyless access, XET/HTTP toggle, AMD bug fix, plus auto-compaction support.
- No explicit breaking API migrations are called out, but the new LAN access mode and download toggle are behavior changes that should be reviewed by operators.

### 3. New Model & Hardware Support
- Release notes acknowledge support for **Qwen3.8-27B** and Unsloth Desktop improvements.
- [PR #7115](https://github.com/unslothai/unsloth/pull/7115) — Adds an **EXL3 (ExLlamaV3) quantization backend** with 2/3/4/6/8-bit and fractional bitrates, plus MoE support (bitsandbytes/transformers 5 gap).
- [PR #8125](https://github.com/unslothai/unsloth/pull/8125) — Gives **MLX models a real context length** propagated from model config to KV cache instead of the hardcoded 4096-token window.
- [PR #9722](https://github.com/unslothai/unsloth/pull/9722) — Stops Studio from suggesting bnb-4bit models that MLX cannot load on Mac.
- [PR #6557](https://github.com/unslothai/unsloth/pull/6557) — Adds **Qwen3.5 MTP (Multi-Token Prediction) finetune loss support**.
- AMD/ROCm: The beta releases include an AMD fix; several AMD-specific issues remain open (see Stability).

### 4. Performance & Optimization
- [PR #8125](https://github.com/unslothai/unsloth/pull/8125) — MLX context length is now model-driven; previously all MLX models ran at a fixed 4096 tokens.
- [PR #7489](https://github.com/unslothai/unsloth/pull/7489) — Reuses MLX VLM prompt cache across chat turns, avoiding full multimodal prompt reprocessing.
- [PR #7010](https://github.com/unslothai/unsloth/pull/7010) — Adds opt-in `async_load` for `/api/inference/load` so large model loads return immediately and run in the background, preventing proxy timeouts.
- [PR #9731](https://github.com/unslothai/unsloth/pull/9731) — Behind a flag, maths-bearing markdown blocks are excluded from content-visibility layout/render work.
- [PR #8278](https://github.com/unslothai/unsloth/pull/8278) — Fixes packed attention-mask sizing to use padded length rather than token count (training correctness/performance).

### 5. Stability & Regressions
Ranked by severity:

- [Issue #9708](https://github.com/unslothai/unsloth/issues/9708) — **Batched greedy generation differs from one-at-a-time generation** on Qwen3.5-2B and gemma-4-E2B-it after LoRA fine-tuning (left padding). Reproduces on T4. No fix PR yet.
- [Issue #9730](https://github.com/unslothai/unsloth/issues/9730) — **`enabled_tools: ["web_search"]` runs no tools at all on local GGUF models**; omitting `enabled_tools` works. Directly impacts agent builds.
- [Issue #9712](https://github.com/unslothai/unsloth/issues/9712) — Studio backend stalls for 10–33s on macOS CI before recovering. Not fixed; separate test fix in #9711.
- [Issue #9709](https://github.com/unslothai/unsloth/issues/9709) — `web_search` can be called with an empty object and returns `"No query provided"`, stalling agent turns.
- [Issue #9688](https://github.com/unslothai/unsloth/issues/9688) — Repeated SIGKILL recovery replays the same load intent without bound; each replacement process dies and the cycle continues.
- [Issue #9653](https://github.com/unslothai/unsloth/issues/9653) — Selecting 256k context loads only 4k on macOS Studio web UI (M3 MBP).
- [Issue #9697](https://github.com/unslothai/unsloth/issues/9697) — KV-cache quantization is not reflected in context length when tensor-parallelism is enabled (RTX 5090).
- [Issue #9671](https://github.com/unslothai/unsloth/issues/9671) — Auto-compaction triggers at a fixed ~75% of configured context length with no UI control to adjust or disable.
- [Issue #9727](https://github.com/unslothai/unsloth/issues/9727) — Image/video generation on AMD GPUs does not work (Studio desktop).
- [Issue #9278](https://github.com/unslothai/unsloth/issues/9278) — MiniMax-H3 video generation fails on RX 9070 XT (gfx1201) with `hipblasSetStream` CUBLAS errors.
- [Issue #9729](https://github.com/unslothai/unsloth/issues/9729) — Linux `install.sh` does not detect AMD GPU under WSL2 unless `HSA_ENABLE_DXG_DETECTION=1` is already set.
- [Issue #9482](https://github.com/unslothai/unsloth/issues/9482) — New update cannot load model on 16GB RAM integrated GPU; suggests `UNSLOTH_ALLOW_HOST_OFFLOAD=1`.
- [Issue #7449](https://github.com/unslothai/unsloth/issues/7449) — Studio recognizes GPU compute but not VRAM; inference uses system RAM instead.
- Closed/resolved: [#7472](https://github.com/unslothai/unsloth/issues/7472) (compaction/rolling context, now implemented), [#9398](https://github.com/unslothai/unsloth/issues/9398) (HTTP 400 on loaded model), [#9551](https://github.com/unslothai/unsloth/issues/9551) (AMD VRAM detection after patch) — these are closed, likely fixed or superseded.

### 6. What This Means for Application Developers
- **Verify tool execution on GGUF backends**: The `web_search` tool behaves inconsistently when `enabled_tools` is set on local GGUF models (`#9730`). Add explicit integration tests for your agent toolchains.
- **Batched generation non-determinism is a correctness hazard** for offline evaluation and data generation. If you rely on greedy text matching, pin batch size or wait for a fix (`#9708`).
- **MLX context length is now real**: If you deploy on Mac, the hardcoded 4K window disappears with #8125; you can use models at their native context lengths but should update your Studio build.
- **Auto-compaction is here but not yet tunable** (`#9671`). If you need a custom compaction threshold, plan to watch that issue or implement client-side rotation.
- **LAN mode is now keyless/password-less** — convenient, but make sure remote networks are trusted or you add your own auth layer.
- **Use `async_load`** (PR #7010) if you load large models behind an HTTP proxy or orchestration layer and hit response-header timeouts.
- **Log/message exports are maturing**: PRs #9714 (masked log ZIP export) and #9614 (JSONL message export) are useful for audit trails and training-data pipelines. Note the Docker Hub image is stale (`#7999`), so pin images carefully.

For all items, see the [unslothai/unsloth repository](https://github.com/unslothai/unsloth).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*