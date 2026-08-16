# AI Infrastructure Digest 2026-08-16

> Generated: 2026-08-15 23:11 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# AI Infrastructure Cross-Project Comparison Report — 2026-08-16

## 1. Ecosystem Overview

The inference stack is in a "new architecture, hard landing" phase: DeepSeek-V4-Flash sparse attention and hybrid linear-attention models (Kimi-K3, MiniMax) are forcing every engine to rewrite kernel paths simultaneously, and the resulting bug wave is concentrated in exactly those paths — silent corruption, not just crashes. Serving engines (vLLM, SGLang) are racing on next-gen hardware enablement (Rubin `sm_107`, SM120, gfx942) while their speculative-decoding + structured-output combinations remain fragile. llama.cpp and Ollama continue to absorb new architectures fastest at the local/edge layer, but regressions on specific GPU families (Pascal, Intel Arc A770, Radeon 780M) are accumulating. At the gateway layer, LiteLLM's digest is dominated by security findings and spend-accounting gaps — a sign that the market is shifting from "can we serve it" to "can we secure and bill it." Across the board, the worst failure mode this cycle is silent wrong output (SGLang DSA zero-kernel launch, DSPARK corruption, LiteLLM ghost costs), which is more dangerous than a crash because it evades standard monitoring.

## 2. Activity Comparison

Counts are derived from digest-mentioned issues/PRs (24h window), not full GitHub API totals.

| Project | Issues (mentioned) | PRs (mentioned) | Release status (24h) |
|---|---|---|---|
| vLLM | ~15 | ~14 | No release |
| SGLang | ~19 | ~15 | No release |
| llama.cpp | ~8 | ~18 | **9 releases** (b10436–b10448, incl. 1 breaking) |
| Ollama | ~22 | ~8 | 1 RC (v0.32.14-rc0) |
| LiteLLM | ~18 | ~12 | No release |
| Unsloth | ~24 | ~16 | No release |

**Read-through:** llama.cpp is shipping continuously (9 builds, one breaking CLI change) with a high PR-to-issue ratio — it's the most execution-oriented project today. vLLM and SGLang are in heavy stabilization mode: high issue counts around DeepSeek-V4-Flash, no releases. Unsloth shows the highest raw issue volume relative to shipped releases, reflecting Studio/Desktop productization churn. LiteLLM's issue mix is dominated by security/spend-accounting rather than inference correctness, reflecting its gateway position.

## 3. Model Support Race

**Shipped this window (in releases):**
- **llama.cpp** — Kimi-K3 (hybrid KDA/linear attention + MLA + latent MoE, b10448), MiniMax-Text-01/M1 (b10437), MTP draft-model auto-discovery (b10444).
- **Ollama** — No new model families; qwen3-coder renderer/parser auto-detection for direct HF pulls (PR #17769).

**In flight (PRs/review):**
- **vLLM** — GLM-5.2 TurboQuant sparse MLA with packed 4-bit latent KV; DeepSeek-V4-Flash sparse attention fixes across NVIDIA/AMD (not new support, but the largest stabilization surface).
- **SGLang** — Kimi-Linear KDA native Cake kernels on Blackwell; DeepSeek-V4 TRT-LLM Attention for SM100/103 (in progress); Hunyuan3D Paint/Delight diffusion; NVFP4 Marlin.
- **llama.cpp** — Maple 20B-A1B ternary MoE (proposed, CPU inference); TML Inkling (in review); ROCm 7.14 build support.
- **LiteLLM** — voyage-4, voyage-context-4, voyage-code-4 added to cost/context maps (embeddings, not inference engines).
- **Unsloth** — Nothing shipped; tool-call streaming fixes and MLX model discovery only.

**Who's ahead:** **llama.cpp** leads on breadth of new model architectures in shippable form — it absorbed Kimi-K3 and MiniMax-Text/M1 as working GGUF support in a single day. **SGLang** leads on cutting-edge kernel depth (native Blackwell KDA, DSA sparse attention, TRT-LLM integration), but at the cost of open correctness bugs in those exact paths. **vLLM** leads on hardware enablement (CUDA 13.4/Rubin prerelease pipeline, SM120 FlashInfer MLA, gfx942 native FP8 indexer), with the same caveat. Ollama is notably the only project with zero new architecture support this cycle — it remains a consumer of llama.cpp's model work rather than a contributor. **Verdict:** llama.cpp for coverage, SGLang/vLLM for frontier performance, but neither frontier path is production-safe for DeepSeek-V4-Flash yet.

## 4. Performance Frontier

Optimization effort is split across five fronts this cycle:

- **KV cache systems** — vLLM added saturation-aware back-pressure to the KV tiering manager (disk/shared/P2P); SGLang improved AMD MLA page-first KV gather (~32% load-back gain, 128-bit streaming loads) and default `block_quota=16` for HiCache; llama.cpp is fixing ~30x prefill collapse when `-ctk`/`-ctv` types are mixed and a 4-bit KV prefill slowdown on hybrid models. **KV-cache correctness is now as hot as KV-cache speed.**
- **Quantization** — vLLM proposes PTX 9.4 `ldmatrix.s8.s4` for W4A8-INT8 in-flight sign extension; SGLang adds compressed-tensors NVFP4 Marlin (SM80–SM90); llama.cpp is reworking SYCL Q4_K multi-column MMVQ (Q4 currently slower than Q8/FP16 on some Intel GPUs); Unsloth is fixing quantized KV cache types being silently dropped under tensor parallelism.
- **Sparse attention kernels** — The single largest shared effort: DeepSeek-V4-Flash sparse attention is being stabilized on H100/H20-3e/MI325X (vLLM), SM100 (SGLang DSA), and CUDA multi-GPU (llama.cpp SWA exhaustion). All three engines are effectively co-debugging the same architecture.
- **Speculative decoding** — vLLM is pushing MRv2 forward (GPU NGram speculator, GPU-side suffix drafter for async scheduling, MTP + DeepSeek DCP fixes); llama.cpp moved speculative processing into worker threads and added MTP draft auto-discovery; SGLang's DSPARK work is stuck in a corruption bug that makes spec decode unsafe on DeepSeek-V4-Flash. **The trend is clear: spec decode is being made production-grade, but structured-output combinability is the unsolved edge.**
- **Next-gen hardware kernels** — vLLM added CUDA 13.4rc1/Rubin pipeline and SM120 FlashInfer MLA with decode context parallelism; llama.cpp landed Vulkan cooperative-matrix kernels for Intel Xe and has SYCL TILE quantized-KV decode proposals (+42–169% on Battlemage); Unsloth fixed an MTP partial-offload slowdown (3.5 tok/s → viable on Qwen3.8-27B-GGUF).

**Concentration verdict:** Sparse attention and KV-cache performance/correctness are the two dominant fronts; quantization is third; speculative decoding is the highest-risk optimization area; distributed serving is comparatively quiet (SGLang's PD-disaggregation-on-H200 investigation showing *no gain* over single-node is a notable anti-signal).

## 5. Layer Positioning

| Project | Layer | Core value proposition | Typical deployment |
|---|---|---|---|
| **vLLM** | Serving engine (production, multi-GPU) | Highest-throughput inference serving with CUDA graph capture, PagedAttention/KV tiering, MRv2 spec decode | Datacenter GPU fleets, OpenAI-compatible API for frontier models |
| **SGLang** | Serving engine (frontier-first) | Fastest adoption of new architectures (Blackwell KDA, DSA sparse, TRT-LLM integration) + RadixCache | Blackwell datacenter serving, DeepSeek/Kimi workloads |
| **llama.cpp** | Local/edge runtime + lightweight server | Broadest hardware reach (CPU, Vulkan, SYCL, Metal, CUDA), fastest new-model absorption, GGUF ecosystem | Edge, consumer GPUs, on-prem CPU inference, embedded |
| **Ollama** | Local developer runtime (wraps llama.cpp) | Zero-config local model serving, CLI/desktop UX, model library | Developer laptops, small teams, `ollama launch claude` agent workflows |
| **LiteLLM** | Gateway / proxy / control plane | Model routing, key management, spend tracking, guardrails across 100+ providers | Between apps and model backends (hosted or self-hosted LLMs) |
| **Unsloth** | Fine-tuning / training + Studio desktop | Fast LoRA/QLoRA fine-tuning, GGUF export, Studio/Desktop product for non-engineers | Training workstations, Colab-class GPUs, local fine-tune → export pipelines |

**Key structural observation:** The layers are converging on the OpenAI-compatible API surface — Unsloth and Ollama now serve it, vLLM/SGLang define it, and LiteLLM routes it — which makes tool-call handling and `reasoning_content` preservation *cross-cutting* correctness issues (lit in vLLM #38488, Ollama #17768, SGLang #31915, Unsloth #8754). Meanwhile, the training-to-serving boundary is blurring: Unsloth now serves, llama.cpp absorbs newly trained GGUFs within hours, and LiteLLM bills them all. The differentiation is no longer *what API you speak*, but *where you run, how fast, and whether the money/security accounting is trustworthy.*

## 6. Trend Signals

1. **DeepSeek-V4-Flash is the ecosystem stress test.** Every engine has open crash/corruption bugs on this model (vLLM H100/H20-3e/MI325X, SGLang SM100 zero-kernel launch and DSPARK corruption, llama.cpp SWA KV exhaustion). Any org running it in production should treat the entire inference stack as pre-stable and pin versions. This is the clearest signal that the model-vs-engine gap has widened again.

2. **Hybrid linear-attention architectures are the new platform shift.** Kimi-K3, MiniMax-Text/M1, DeepSeek-V4-Flash, and GLM-5.2 TurboQuant all shipped or advanced this cycle. Engines that can't do sparse/linear attention + MLA efficiently will be irrelevant by year-end — and llama.cpp's same-day Kimi-K3 absorption shows the pace expected.

3. **Silent wrong-output bugs are the new worst failure class.** SGLang's DSA zero-attention-kernel launch (>65K-token extend silently returns garbage), DSPARK identifier corruption, and LiteLLM's ghost streaming costs all fail *without errors*. Monitoring for 5xxs is no longer sufficient; teams need golden-output/consistency checks and canary comparisons against a reference backend.

4. **Gateway-layer security is under-addressed.** LiteLLM's read-only audit found an unauthenticated default docker-compose config, SSRF/provider-key exfiltration via client-supplied `api_base`, and non-admin budget self-increase — all "by design" or dead-code guards. Spend logs are not yet auditable (Gemini TTS untracked, priority-tier pricing missing, managed-batch double-billing). Treat gateway cost data as approximate until the accounting fixes land.

5. **Speculative decoding + structured output is the sharpest edge.** Three engines have open combinability bugs (vLLM MTP+xgrammar livelock, SGLang DSPARK+EPLB crash, llama.cpp spec-decode divergence on quantized targets). For agent workloads, the pragmatic play is spec-decode-off for long-reasoning/structured-output traffic, spec-decode-on for high-volume repetitive generation.

6. **Next-gen hardware is arriving before its software is stable.** CUDA 13.4/Rubin, SM120 FlashInfer, gfx942 MFMA, Intel Xe cooperative matrices — all landed as enabling PRs, all with a trailing wave of device-specific crashes. Hardware enablement velocity is high, but the 6–12 month stabilization lag is the hidden cost. Don't commit capacity to new silicon without target-device soak testing.

7. **Local/edge tooling is fragmenting by GPU vendor.** Ollama broke Pascal and Radeon 780M; llama.cpp broke Intel Arc A770 (SYCL); Unsloth's "GPU too old" gate misfires. The long tail of GPU support is becoming a maintenance liability — expect consolidation around a narrower set of supported devices per project, and verify your exact GPU model on the project's issue tracker before upgrading.

**Bottom line for decision-makers:** The frontier is moving faster than the stability surface — new architectures and hardware are arriving weekly, but the correctness work lags by months. For production, pin everything, add golden-output checks, and budget for a DeepSeek-V4-Flash-specific stabilization quarter. For training, Unsloth's `max_steps` preprocessing fix (11m→~2m) makes short fine-tune iterations actually economical. For procurement, gateway spend data is not yet billing-grade, and local GPU support depends more on your exact device than on the project's marketing claims.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest — 2026-08-16

## 1. Today's Highlights
No releases shipped in the last 24 hours, but active development is concentrated on two fronts: stabilizing DeepSeek-V4-Flash sparse attention across NVIDIA and AMD (multiple crash/corruption reports on H100, H20-3e, and MI325X, with targeted fixes in review) and enabling next-gen hardware (CUDA 13.4 prerelease pipeline for Rubin `sm_107`, SM120 FlashInfer MLA with DCP, native FP8 indexer on gfx942). Model Runner V2 speculative decoding and KV-tiering back-pressure also saw meaningful progress.

## 2. Releases & Breaking Changes
None in the last 24 hours. No new versions, API changes, or migration notes. (Watch for regressions reported in the v0.26.0 → v0.27.0 upgrade path — see Stability.)

## 3. New Model & Hardware Support
- **CUDA 13.4 / Rubin (`sm_107`)** — [PR #52379](https://github.com/vllm-project/vllm/pull/52379) adds an image-only CUDA 13.4rc1 prerelease pipeline with pinned PyTorch/torchvision/torchaudio nightlies and driver stub preservation.
- **GLM-5.2 TurboQuant sparse MLA** — [PR #52472](https://github.com/vllm-project/vllm/pull/52472) extends the TurboQuant MLA work with packed 4-bit latent KV storage, fused sparse decode/prefill, GLM-4 MoE MTP plumbing, and DCP/MTP/PP correctness fixes.
- **SM120 FlashInfer sparse MLA + decode context parallelism** — [PR #47779](https://github.com/vllm-project/vllm/pull/47779) enables DCP for the `FLASHINFER_MLA_SPARSE_SM120` backend (RTX 50-class).
- **ROCm gfx942 (MI300X/MI325X) sparse-attention indexer** — [PR #52402](https://github.com/vllm-project/vllm/pull/52402) rewrites `fp8_mqa_logits_gfx942` with native FP8 MFMA and corrected LDS occupancy gating, scoped to the gfx942 path only.

## 4. Performance & Optimization
- **W4A8-INT8 kernel improvement** — [Issue #49529](https://github.com/vllm-project/vllm/issues/49529) proposes adopting PTX 9.4 `ldmatrix.s8.s4` for in-flight INT4→INT8 sign extension during shared-memory loads, eliminating a separate expand step in W4A8-INT8 paths.
- **KV offloading back-pressure** — [PR #50045](https://github.com/vllm-project/vllm/pull/50045) adds saturation detection to the KV tiering manager: when a secondary tier (disk, shared storage, P2P) becomes slow, new stores are paused until latency recovers, preventing unbounded job queueing.
- **GPU-side suffix drafter for async scheduling** — [PR #52097](https://github.com/vllm-project/vllm/pull/52097) ports the CPU-only `suffix` drafter to GPU so it can participate in async-scheduling CPU/GPU overlap (highest acceptance lengths on repetitive/agentic traffic).
- **MRv2 NGram GPU speculator** — [PR #40704](https://github.com/vllm-project/vllm/pull/40704) adds a GPU NGram speculator and updated request-state storage for MRv2.
- **AMD Strix Halo (gfx1151)** — [Issue #32180](https://github.com/vllm-project/vllm/issues/32180) still tracks V1-engine performance bottlenecks and instability on AMD's Strix Halo APU.

## 5. Stability & Regressions
Ranked by severity:

1. **EngineCore hangs forever on non-terminating kernel** — [Issue #52247](https://github.com/vllm-project/vllm/issues/52247): `copy_event.synchronize()` has no timeout; the engine wedges silently with no surfaced error. No fix PR yet.
2. **DeepSeek-V4-Flash crash at ~161K context** — [Issue #52339](https://github.com/vllm-project/vllm/issues/52339): sparse prefill `phase1.cuh:614` crash on H20-3e TP8 with FP8 KV / block size 256.
3. **DeepSeek-V4-Flash silent retrieval corruption on ROCm** — [Issue #52109](https://github.com/vllm-project/vllm/issues/52109): prompts ≥4–5K tokens corrupt on 8×MI325X (gfx942), traced to the AITER sparse indexer.
4. **Engine-core livelock: MTP spec decode + xgrammar** — [Issue #49210](https://github.com/vllm-project/vllm/issues/49210): 100% CPU livelock with no crash; regression from v0.24.0.
5. **DeepSeek-V4-Flash crash with high batch token count** — [Issue #51743](https://github.com/vllm-project/vllm/issues/51743): `--max-num-batched-tokens >= 24576` crashes in fused qnorm/rope/kv-insert; allocation invisible to the memory profiler.
6. **v0.26.0 → v0.27.0 upgrade breaks DeepSeek-V4-Flash** — [Issue #51758](https://github.com/vllm-project/vllm/issues/51758).
7. **DSv4 C128A metadata packing regression** — [PR #51318](https://github.com/vllm-project/vllm/pull/51318) reverts the adaptive top-k packing from #50004 because runtime metadata writes diverge from capture-time layout under CUDA graph replay.
8. **`reasoning_content` silently dropped** — [Issue #38488](https://github.com/vllm-project/vllm/issues/38488): chat parsing reads `reasoning` but never falls back to `reasoning_content` on incoming assistant messages; breaks multi-turn reasoning state.
9. **Qwen3.8 Quark INT4 load failure** — [Issue #52454](https://github.com/vllm-project/vllm/issues/52454); fix [PR #52474](https://github.com/vllm-project/vllm/pull/52474) preserves structured quantization config lists through `WeightsMapper`.
10. **MRv2 + Mamba prefix-caching crash** — [Issue #52317](https://github.com/vllm-project/vllm/issues/52317); fix [PR #52460](https://github.com/vllm-project/vllm/pull/52460) falls back `mamba_cache_mode 'all'` to `'align'` on MRv2.
11. **FP8 block-scaled weights fail on sm120 (RTX 5090)** — [Issue #51884](https://github.com/vllm-project/vllm/issues/51884): DeepGEMM "Unknown SF transformation" during `process_weights_after_loading`.
12. **`POST /wake_up` wedges engine with FP8 KV** — [Issue #49237](https://github.com/vllm-project/vllm/issues/49237): `init_fp8_kv_scales` raises on a list; health stays green while completions hang.
13. **Gemma 4 tool-calling regressions** — [Issue #50477](https://github.com/vllm-project/vllm/issues/50477) (named forced `tool_choice` ignored) and [Issue #52410](https://github.com/vllm-project/vllm/issues/52410) (`enable_thinking` parser default mismatches template default).
14. **Grammar-mask spec decode misses multi-token reasoning boundaries** — [Issue #43338](https://github.com/vllm-project/vllm/issues/43338): gpt-oss still bleeds when reasoning ends inside speculated tokens; Qwen3 fixed, `openai_gptoss` not.
15. **Quark/other incidental fixes landed today** — Mamba causal-conv1d metadata alignment ([PR #52476](https://github.com/vllm-project/vllm/pull/52476)), Gemma 4 video frame counts kept on CPU ([PR #52441](https://github.com/vllm-project/vllm/pull/52441)), EAGLE cache registration on the partial-hash-hit path ([PR #52419](https://github.com/vllm-project/vllm/pull/52419)), and thinking-budget SWAP state cleanup ([PR #49613](https://github.com/vllm-project/vllm/pull/49613)).

## 6. What This Means for Application Developers
- **Treat DeepSeek-V4-Flash as high-risk in production today.** A cluster of platform-specific sparse-attention crash/corruption bugs (H100, H20-3e, MI325X) is open, especially at long context, FP8 KV, or high batch tokens. Pin versions, stress-test long-context paths, and have a rollback plan.
- **Speculative decoding + structured output remains risky.** Open combinability issues ([#49210](https://github.com/vllm-project/vllm/issues/49210), [#43338](https://github.com/vllm-project/vllm/issues/43338)) mean MTP/EAGLE with xgrammar should be soak-tested per workload; consider disabling spec decode for long-reasoning or agentic traffic.
- **Don't rely on vLLM preserving `reasoning_content` across turns** ([#38488](https://github.com/vllm-project/vllm/issues/38488)). Serving layers and agent frameworks should persist reasoning state themselves.
- **Gemma 4 tool-calling users** should verify forced tool choice and thinking defaults, as two parser-level regressions are open.
- **Hardware enablement is accelerating** — CUDA 13.4/Rubin, SM120, and gfx942 sparse backends are landing quickly, but each brings a wave of backend-specific bugs; test on target silicon before committing capacity.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest — 2026-08-16

## 1. Today’s Highlights

No release shipped in the last 24 hours. The most severe item is a silent DSA sparse-MLA prefill bug: a single unchunked extend longer than 65535 tokens can launch zero attention kernels on SM100, producing incorrect output without an error ([#34947](https://github.com/sgl-project/sglang/issues/34947), [#34941](https://github.com/sgl-project/sglang/issues/34941)). Meanwhile, KDA native Blackwell kernel integration ([#34299](https://github.com/sgl-project/sglang/pull/34299), [#34946](https://github.com/sgl-project/sglang/pull/34946)) and unified-cache correctness fixes ([#34975](https://github.com/sgl-project/sglang/pull/34975), [#34870](https://github.com/sgl-project/sglang/pull/34870)) continue to move forward.

## 2. Releases & Breaking Changes

None. No new releases, API/config changes, or migration notes were published in the last 24 hours.

## 3. New Model & Hardware Support

- **KDA / Kimi-Linear**: Route Kimi-Linear through native Cake kernels on Blackwell, depending on FlashInfer native `lower_bound=None` kernels ([#34946](https://github.com/sgl-project/sglang/pull/34946)).
- **KDA zero-copy serving**: Add native prefill checkpoints and packed decode for Blackwell kernels from FlashInfer ([#34299](https://github.com/sgl-project/sglang/pull/34299)).
- **Diffusion**: Native Hunyuan3D Paint and Delight models with SD 2.1-compatible UNet and Stable Diffusion VAE config ([#34980](https://github.com/sgl-project/sglang/pull/34980)).
- **ROCm**: 12-head support via `concat_and_cast_mha_k_pad_kernel`, enabling Kimi K3 AITER prefill ([#34837](https://github.com/sgl-project/sglang/pull/34837)).
- **Blackwell / DeepSeek-V4**: TRT-LLM DSv4 Attention integration for SM100/103 in progress ([#30805](https://github.com/sgl-project/sglang/pull/30805)).
- **Quantization**: Add compressed-tensors NVFP4 Marlin support with BF16 and DSpark for SM80–SM90 GPUs ([#34966](https://github.com/sgl-project/sglang/pull/34966)).
- **NPU**: LTX-2/2.3 diffusion inference optimization for NPU ([#34722](https://github.com/sgl-project/sglang/pull/34722)).
- **NPU / DSPARK**: Preserve DSPARK numerical and graph-replay parity on folded NPU paths while enabling optimized paths ([#34944](https://github.com/sgl-project/sglang/pull/34944)).

## 4. Performance & Optimization

- **KDA**: Native Cake kernels and packed decode avoid checkpoint materialization/copies for Kimi-Linear ([#34299](https://github.com/sgl-project/sglang/pull/34299), [#34946](https://github.com/sgl-project/sglang/pull/34946)).
- **GDN target verification**: Remove redundant Q/K/V materialization by using packed QKV from `causal_conv1d_update` ([#33778](https://github.com/sgl-project/sglang/pull/33778)).
- **AMD / HiCache**: Default `block_quota=16` for MLA page-first KV gather; 128-bit streaming load/store widens the gather copy and improves load-back performance by ~32% ([#30024](https://github.com/sgl-project/sglang/pull/30024)).
- **DeepSeek-V4 / DSA**: Add `--dsa-topk-backend flashinfer` with fused top-k ([#33237](https://github.com/sgl-project/sglang/pull/33237)).
- **Profiling**: Add detailed execution-step annotations to profiler output ([#24911](https://github.com/sgl-project/sglang/pull/24911)).
- **Ongoing investigation**: PD disaggregation on H200 with Mooncake shows no throughput gain over single-node deployment at 32k input / 512 output; still open ([#24488](https://github.com/sgl-project/sglang/issues/24488)).

## 5. Stability & Regressions

Ranked by severity:

- **Critical / silent wrong output**: DSA sparse-MLA prefill launches no attention kernels for a single unchunked extend >65535 tokens on SM100; `gridDim.z` overflow is still unguarded ([#34947](https://github.com/sgl-project/sglang/issues/34947), [#34941](https://github.com/sgl-project/sglang/issues/34941)).
- **Critical / silent corruption**: DSPARK on DeepSeek-V4-Flash corrupts identifiers, making speculative decoding unsafe for production ([#34959](https://github.com/sgl-project/sglang/issues/34959)).
- **Critical / silent accuracy bug**: Compressed-tensors FP8 `lm_head` `weight_scale` is dropped, causing degenerate repetition with `unsloth/Qwen3.8-27B-NVFP4` ([#34895](https://github.com/sgl-project/sglang/issues/34895)).
- **Crash**: `--enable-eplb` + DSPARK crashes during draft CUDA graph capture with `scatter_add_` dimension mismatch and `layer_idx=None` ([#34974](https://github.com/sgl-project/sglang/issues/34974)).
- **Crash**: Kimi K3 decode crashes deterministically with PD disaggregation + DCP + DSPARK: `cumsum(extend_prefix_lens=None)` in `layers/dcp/planner.py` ([#34920](https://github.com/sgl-project/sglang/issues/34920)).
- **Crash / regression**: Scheduler dies with `AttributeError: 'list' object has no attribute 'tolist'` when a `token_ids_logprob` request shares a batch with a regular request; affects v0.5.14–v0.5.17 ([#34719](https://github.com/sgl-project/sglang/issues/34719)).
- **Crash fix in progress**: Unified cache crashes with `node pinned by load-back` under hierarchical cache; PR allows concurrent load-back pins ([#34975](https://github.com/sgl-project/sglang/pull/34975)).
- **Memory instability**: MiniMax-H3 resident (non-FSDP) serving stages a full DiT copy per rank through host RAM: 114.3 GiB at 2 ranks, 233.5 GiB at 4; below documented requirements it can be silently SIGKILLed ([#34902](https://github.com/sgl-project/sglang/issues/34902)).
- **Config gate bypass**: MiniMax-H3 `quality="high"` is allowed with Turbo-LoRA-merged weights; PR [#34978](https://github.com/sgl-project/sglang/pull/34978) closes [#34954](https://github.com/sgl-project/sglang/issues/34954).
- **HiCache**: Host-pool memory check uses `psutil.virtual_memory().available`, which ignores reserved HugePages and causes false “Not enough host memory” failures ([#34972](https://github.com/sgl-project/sglang/issues/34972)); HF3FS HiCache also hits `ZeroDivisionError` with DeepSeek-V4 logical KV anchor ([#34969](https://github.com/sgl-project/sglang/issues/34969)).
- **Scheduler freeze**: By-stage profiler under speculative decoding never stops on decode batches, then freezes serving ~25s during trace export on later unrelated requests ([#34943](https://github.com/sgl-project/sglang/issues/34943), [#34942](https://github.com/sgl-project/sglang/issues/34942)).
- **Responses API**: `input_image` parts in `function_call_output` are not converted to `image_url`; post-#25881 builds return 400, current main silently drops them ([#34927](https://github.com/sgl-project/sglang/issues/34927)).
- **Tool-call parsing**: Streaming chunk-boundary bugs lose/corrupt data across multiple `function_call` detectors ([#31915](https://github.com/sgl-project/sglang/issues/31915)); Kimi-K3 parser fails roughly 8x/hour in production ([#34604](https://github.com/sgl-project/sglang/issues/34604)).
- **Cache correctness**: Unified Radix Cache needs bit-exact correctness coverage; model-output-only tests miss KV corruption ([#34899](https://github.com/sgl-project/sglang/issues/34899)). Root fix for SWA eviction frontier / bigram-key pool-accounting crash is up as [#34870](https://github.com/sgl-project/sglang/pull/34870).
- **CI health**: Tracking issue reports 3 broken, 11 flaky, and 669 recently fixed tests ([#17050](https://github.com/sgl-project/sglang/issues/17050)).

## 6. What This Means for Application Developers

- **Avoid long unchunked extends on DSA `prefill=trtllm`** on SM100 until the `gridDim.z` guard lands; the failure mode is silent wrong output, not a crash ([#34947](https://github.com/sgl-project/sglang/issues/34947), [#34941](https://github.com/sgl-project/sglang/issues/34941)).
- **Disable DSPARK on DeepSeek-V4-Flash for production workloads** until identifier corruption is fixed ([#34959](https://github.com/sgl-project/sglang/issues/34959)); if you need EPLB, wait for the graph-capture crash fix too ([#34974](https://github.com/sgl-project/sglang/issues/34974)).
- **Be careful with mixed `token_ids_logprob` request batches** on v0.5.14–v0.5.17; a single scoring client can kill the scheduler ([#34719](https://github.com/sgl-project/sglang/issues/34719)).
- **For MiniMax-H3 `quality="high"`**, validate which DiT weights are resident before trusting the quality promise; account for host RAM per rank to avoid SIGKILL ([#34954](https://github.com/sgl-project/sglang/issues/34954), [#34902](https://github.com/sgl-project/sglang/issues/34902)).
- **If you build agentic loops around Kimi-K3**, add retries/fallbacks for tool-call parser failures; streaming chunk-boundary corruption is known across multiple parsers ([#34604](https://github.com/sgl-project/sglang/issues/34604), [#31915](https://github.com/sgl-project/sglang/issues/31915)).
- **HiCache with HugePages**: the host-memory preflight check can be wrong when HugePages are reserved, so size pods conservatively or get the fix from [#34972](https://github.com/sgl-project/sglang/issues/34972).

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp Digest — 2026-08-16

## Today's Highlights
New model support landed for **Kimi-K3** (#26185) and **MiniMax-Text-01/M1** (#27018), expanding llama.cpp's hybrid-attention and MoE coverage. On the serving side, **llama-server redesigned its yield_to_queue thread model** (#27133) to move speculative processing into worker threads. Meanwhile, the headline configuration change is the migration from `--mmap/--no-mmap/--mlock/--direct-io` to a unified `--load-mode` flag (#26934).

## Releases & Breaking Changes
- **b10448** — Adds Kimi-K3 text model: hybrid KDA/linear attention + MLA, cross-layer residual attention, and latent MoE. <https://github.com/ggml-org/llama.cpp/pull/26185>
- **b10447** — Redesigns server `yield_to_queue` thread model; `common_speculative_process` now runs in a worker thread. <https://github.com/ggml-org/llama.cpp/pull/27133>
- **b10446** — Updates BoringSSL to `0.20260813.0`. <https://github.com/ggml-org/llama.cpp/pull/27099>
- **b10444** — `--models-dir` can now load MTP assistant/draft models. <https://github.com/ggml-org/llama.cpp/pull/24431>
- **b10443** — Fixes a GGUF array-type validation bug before tensor reads. <https://github.com/ggml-org/llama.cpp/pull/27075>
- **b10442** — Vulkan cooperative matrix improvements for Intel Xe (`SHMEM_STRIDE_PAD` / `APPLY_SLM_A_RESHAPE`). <https://github.com/ggml-org/llama.cpp/pull/25380>
- **b10441** — **Breaking CLI change:** `--mmap`, `--no-mmap`, `--mlock`, and `--direct-io` are replaced by `--load-mode`. Scripts and examples need updating. <https://github.com/ggml-org/llama.cpp/pull/26934>
- **b10437** — Adds MiniMax-Text-01 and MiniMax-M1 model support. <https://github.com/ggml-org/llama.cpp/pull/27018>
- **b10436** — Multi-modal (`mtmd`) and common helper fixes. <https://github.com/ggml-org/llama.cpp/pull/27071>

## New Model & Hardware Support
- **Kimi-K3 text model** landed in b10448, including support for cross-layer residual attention and latent MoE. <https://github.com/ggml-org/llama.cpp/pull/26185>
- **MiniMax-Text-01 / MiniMax-M1** landed in b10437; includes logits masking for zero-valued embedding positions. <https://github.com/ggml-org/llama.cpp/pull/27018>
- **MTP/draft assistant auto-discovery** via `--models-dir` landed in b10444. <https://github.com/ggml-org/llama.cpp/pull/24431>
- **Vulkan cooperative matrix kernels on Intel Xe** landed in b10442. <https://github.com/ggml-org/llama.cpp/pull/25380>
- **ROCm 7.14.0 Docker build support** is in progress, including new gfx architectures. <https://github.com/ggml-org/llama.cpp/pull/27145>
- **Maple 20B-A1B ternary MoE** architecture is proposed for CPU inference. <https://github.com/ggml-org/llama.cpp/pull/27000>
- **TML Inkling architecture** support is in review. <https://github.com/ggml-org/llama.cpp/pull/25731>

## Performance & Optimization
- **SYCL TILE kernels for quantized KV decode** are proposed: +42% to +169% on Battlemage with Qwen3.6-35B, Gemma 4 26B, and Gemma 4 12B at 32K/118K context. <https://github.com/ggml-org/llama.cpp/pull/26689>
- **CUDA mixed K/V types in flash attention** — currently mixing `-ctk` and `-ctv` disables flash attention entirely, causing ~30x slower prefill. A PR removes that restriction. <https://github.com/ggml-org/llama.cpp/pull/27150>
- **Small KV-quant prefill slowdown** — a CUDA fix for slow prefill with small KV quants is proposed. <https://github.com/ggml-org/llama.cpp/pull/27140>
- **SYCL Q4_K multi-column MMVQ** reduces redundant weight reconstruction; prompted by Q4 being slower than Q8/FP16. <https://github.com/ggml-org/llama.cpp/pull/27062>
- **Vulkan tiled transpose for 0↔2 permuted CONT** is proposed, replacing the generic strided-copy fallback. <https://github.com/ggml-org/llama.cpp/pull/26585>
- **Server memory observability** — a PR adds per-device memory usage to `/metrics` and `GET /memory`, split by weights/KV/compute. <https://github.com/ggml-org/llama.cpp/pull/26130>

## Stability & Regressions
1. **SYCL completely broken on Intel Arc A770** — crashes on all tested models starting at build 10428; B60 works, so this looks like a targeted regression. No fix PR yet. <https://github.com/ggml-org/llama.cpp/issues/27063>
2. **Vulkan `DeviceLostError` on Linux 7.x / RADV Strix Halo** — reproducible with multiple models, still open. <https://github.com/ggml-org/llama.cpp/issues/25664>
3. **Server forces full prompt re-processing on subsequent requests** — SWA/recurrent memory issue causes cache reuse to fail; high user impact with 52 comments. <https://github.com/ggml-org/llama.cpp/issues/21831>
4. **DeepSeek-V4-Flash SWA KV-cache exhaustion** — churned reuse leads to crash/stall on CUDA multi-GPU. <https://github.com/ggml-org/llama.cpp/issues/25452>
5. **Speculative decoding diverges from vanilla greedy on quantized targets** — MTP/DSpark draft outputs differ under `temperature=0` when target is quantized, while bf16 matches. <https://github.com/ggml-org/llama.cpp/issues/25618>
6. **CUDA 4-bit KV cache collapses prefill** to ~34 t/s on Qwen3.5 hybrid (RTX 3090). Related fix PR: <https://github.com/ggml-org/llama.cpp/pull/27140>
7. **Vulkan performance regression on RX 6600** — slower in recent builds; still open. <https://github.com/ggml-org/llama.cpp/issues/24066>
8. **Qwen3-Coder lazy tool-call parser never fires** when the model skips both `<tool_call>` and `<function=` wrappers. <https://github.com/ggml-org/llama.cpp/issues/26987>
9. **Glimmer vision model memory/prefill slowdown** after first `mmproj` use — possible memory retention issue. <https://github.com/ggml-org/llama.cpp/issues/26873>

## What This Means for Application Developers
- **Plan for the `--load-mode` migration** before upgrading; existing `--mmap`/`--mlock`/`--direct-io` scripts will break. <https://github.com/ggml-org/llama.cpp/pull/26934>
- **Test serving concurrency after b10447**; the new worker/main thread swap changes scheduling behavior and may affect backpressure or throughput in multi-user workloads. <https://github.com/ggml-org/llama.cpp/pull/27133>
- **MTP/draft model setup is simpler**: place draft models in `--models-dir` and let llama.cpp auto-discover them. <https://github.com/ggml-org/llama.cpp/pull/24431>
- **New architectures are immediately usable**: Kimi-K3 and MiniMax-Text/M1 GGUF conversions should now run natively.
- **Reprocess/caching regressions on hybrid/SWA models remain a risk** — pin to a known-good build if you serve Qwen/DeepSeek hybrid models. <https://github.com/ggml-org/llama.cpp/issues/21831>
- **Avoid mixing KV cache types on CUDA**: `-ctk` and `-ctv` must match until the flash-attention PR lands, or prefill can become ~30x slower. <https://github.com/ggml-org/llama.cpp/pull/27150>
- **If you target Intel GPUs, be cautious with SYCL builds around b10428**; A770 is currently broken, and pending TILE/quantized-KV PRs should materially improve Battlemage performance once merged. <https://github.com/ggml-org/llama.cpp/issues/27063> <https://github.com/ggml-org/llama.cpp/pull/26689>

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Digest — 2026-08-16

## Today's Highlights

v0.32.14-rc0 shipped with WebP image transcoding for llama-server plus a qwen renderer fix that tolerates non-leading system messages — this directly targets the cluster of qwen3.8 `system message must be at the beginning` failures affecting Claude Code and the minicpm-v WebP SIGSEGV. The most serious open regressions are Pascal GPUs breaking in 0.32.11+, AMD Vulkan `DeviceLost` on Radeon 780M, and Qwen3.8-27B MTP variants measuring ~2x slower on Apple Silicon. A notable open PR removes ~300ms of per-request overhead by caching model metadata instead of re-parsing GGUF every inference call.

## Releases & Breaking Changes

- [v0.32.14-rc0](https://github.com/ollama/ollama/releases/tag/v0.32.14-rc0): `llm: transcode WebP images for llama-server` and `renderers/qwen: tolerate non-leading system messages`.
- No stable release in the past 24h and no documented API/config breaking changes.
- It’s worth pinning versions on Pascal or Radeon 780M Vulkan hosts until the regressions below are resolved.

## New Model & Hardware Support

- No new first-party model families or hardware backends landed in this window.
- PR [#17769](https://github.com/ollama/ollama/pull/17769) auto-detects the qwen3-coder renderer/parser for `qwen3moe` GGUF pulls from Hugging Face, fixing tool-call handling for models like Qwen3-Coder-30B-A3B.
- Model/library requests this cycle: DeepSeek V4 Pro 0813 ([#17775](https://github.com/ollama/ollama/issues/17775)), DeepSeek V4 Flash local ([#17510](https://github.com/ollama/ollama/issues/17510)), GLM 5.3 ([#17741](https://github.com/ollama/ollama/issues/17741)), Upstage Solar Pro 4 ([#17773](https://github.com/ollama/ollama/issues/17773)), Kimi K3 cloud availability ([#17715](https://github.com/ollama/ollama/issues/17715)).

## Performance & Optimization

- PR [#16161](https://github.com/ollama/ollama/pull/16161): caches `GetModel()` and `Capabilities()` to eliminate per-request GGUF re-parsing — claims ~300ms saved per inference request when the model is already loaded in GPU memory.
- PR [#11159](https://github.com/ollama/ollama/pull/11159): adds model-level eval metrics to `/metrics`, including `ollama_eval_duration_total` and `ollama_eval_total`, useful for serving dashboards.
- PR [#17762](https://github.com/ollama/ollama/pull/17762): logs debug inference requests before handling, not after, so `OLLAMA_DEBUG_LOG_REQUESTS` is actually useful for long-running requests.
- Issue [#17776](https://github.com/ollama/ollama/issues/17776): Qwen3.8-27B MTP variants are ~2x slower than non-MTP on Apple Silicon; whether this is expected on Metal speculative paths is still unclear.

## Stability & Regressions

Ranked roughly by severity:

- **Pascal GPU support regression**: P6000/P4000 reportedly broken since 0.32.11 despite docs claiming support ([#17766](https://github.com/ollama/ollama/issues/17766)).
- **AMD Vulkan regression**: 0.32.11 fails on Radeon 780M with `radv/amdgpu: Not enough memory for command submission` / `vk::Queue::submit: ErrorDeviceLost` ([#17748](https://github.com/ollama/ollama/issues/17748)).
- **qwen3.8 + Claude Code 500s**: `system message must be at the beginning` on `/v1/messages` and `/api/chat` broke `ollama launch claude` workflows. Closed as fixed in #17754 / #17774; still open for the MTP variant in [#17768](https://github.com/ollama/ollama/issues/17768). The RC’s qwen renderer change should address this.
- **qwen3.8 missing user query**: `no user query found in messages` during a tool loop with 205k context ([#17778](https://github.com/ollama/ollama/issues/17778)).
- **SillyTavern empty responses**: Text Completion returns empty responses since 0.32.7; reverting to 0.32.7 fixes it ([#17700](https://github.com/ollama/ollama/issues/17700)).
- **AMD ROCm failure**: qwen3.8:27b on RX 9060 XT cannot load `TensileLibrary_lazy_gfx1200.dat` ([#17782](https://github.com/ollama/ollama/issues/17782)).
- **CUDA illegal memory access**: qwen3.6:35b + JSON-schema format + `think:false` crashes 100% reproducibly ([#17434](https://github.com/ollama/ollama/issues/17434)).
- **Vision input issue**: Ollama 0.30.5 still fails to OCR attached JPEG images; user reports image is “added” but not visible to the model ([#16532](https://github.com/ollama/ollama/issues/16532)).
- **Jetson regressions**: models disappeared after updating to 0.32.7 ([#17661](https://github.com/ollama/ollama/issues/17661)); gemma4 models use too much memory on Orin Nano since 0.32.2 ([#17787](https://github.com/ollama/ollama/issues/17787)).
- **MLX memory growth**: gemma4:31b-mlx reported memory usage increases with every prompt on Apple Silicon ([#17783](https://github.com/ollama/ollama/issues/17783)).
- **Dual-GPU scheduling**: strange behavior when trying to force Qwen 3.8 onto an RTX 5090 with an RTX 5060 Ti also present ([#17780](https://github.com/ollama/ollama/issues/17780)).
- **macOS updater**: “Restart to update” fails for non-admin accounts even after entering admin credentials ([#11972](https://github.com/ollama/ollama/issues/11972)).
- **Ollama Cloud API**: `api.ollama.cloud` returning 503 since Aug 14 across multiple API keys ([#17756](https://github.com/ollama/ollama/issues/17756)).
- **Account security**: sessions are not revoked after password/email change, leaving shared credentials able to persist ([#17682](https://github.com/ollama/ollama/issues/17682)).
- **WebP/minicpm-v SIGSEGV** ([#16162](https://github.com/ollama/ollama/issues/16162)) is closed; the RC’s WebP transcode path should resolve it.

## What This Means for Application Developers

- If you run agent workflows using qwen3.8 — especially `ollama launch claude` — test against v0.32.14-rc0 to pick up the system-message ordering fix. The MTP variant may still require attention ([#17768](https://github.com/ollama/ollama/issues/17768)).
- OpenAI-compat behavior is changing via [#17763](https://github.com/ollama/ollama/pull/17763): Modelfile `temperature` will no longer be silently overridden with a hardcoded `1.0` on `/v1/chat/completions`.
- [#17764](https://github.com/ollama/ollama/pull/17764) will make `/api/chat` return HTTP 400 for messages containing `audio`/`audios` fields instead of silently dropping them. Validate multimodal payloads before upgrading.
- Tool-call correctness is improving: qwen3-vl parser failures will retain tool-call context ([#17770](https://github.com/ollama/ollama/pull/17770)), qwen3-coder direct HF pulls will get the right renderer/parser ([#17769](https://github.com/ollama/ollama/pull/17769)), and the Laguna parser will stop treating inline JSON as a tool call ([#17603](https://github.com/ollama/ollama/pull/17603)).
- Reasoning-control parity remains incomplete: `preserve_thinking` via OpenAI-completions API is still a feature request ([#16240](https://github.com/ollama/ollama/issues/16240)), and Nemotron 3 reasoning-effort controls are reported as silently ignored ([#17785](https://github.com/ollama/ollama/issues/17785)).
- If you depend on `/metrics`, watch [#11159](https://github.com/ollama/ollama/pull/11159) — it adds per-model eval/token counters that are useful for capacity planning and cost tracking.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-08-16

## 1. Today's Highlights

Security and spend-accounting issues dominate the digest. A read-only security audit filed three findings — unauthenticated proxy when `LITELLM_MASTER_KEY` is unset, SSRF/provider-key exfiltration via client-supplied `api_base`, and non-admin budget self-increase via `temp_budget_increase` — all closed same-day ([#37054](https://github.com/BerriAI/litellm/issues/37054), [#37053](https://github.com/BerriAI/litellm/issues/37053), [#37052](https://github.com/BerriAI/litellm/issues/37052)). Separately, the Admin UI session cookie is reported as a non-HttpOnly JWT carrying the caller's real proxy key ([#36997](https://github.com/BerriAI/litellm/issues/36997)). On the reliability front, the passthrough brotli fix closed ([#37058](https://github.com/BerriAI/litellm/pull/37058)), while fixes for Ollama `api_base` timeouts ([#37062](https://github.com/BerriAI/litellm/pull/37062)) and exactly-once managed-batch cost accounting ([#37050](https://github.com/BerriAI/litellm/pull/37050)) are open for review.

## 2. Releases & Breaking Changes

No releases in the last 24 hours. No new migration notes.

## 3. New Model & Hardware Support

- [PR #36820](https://github.com/BerriAI/litellm/pull/36820): adds `voyage/voyage-code-4` to the model cost/context maps (pre-release, mirrors `voyage-code-3` pricing).
- [PR #35091](https://github.com/BerriAI/litellm/pull/35091): adds the `voyage-4` embedding family and `voyage-context-4` (120K context, $0.12/M), and fixes contextual-embeddings `list[str]` input handling.
- [Issue #27830](https://github.com/BerriAI/litellm/issues/27830) (open, 6 👍): request to auto-populate `max_input_tokens` / `max_output_tokens` for hosted vLLM and OpenAI-compatible backends.

## 4. Performance & Optimization

- [Issue #37041](https://github.com/BerriAI/litellm/issues/37041) + [PR #37062](https://github.com/BerriAI/litellm/pull/37062): `get_runtime_model_info` for Ollama ignores the request's `api_base` and falls back to localhost:11434, adding two ~4s TCP connect timeouts (~8s) per completion. The open fix forwards `api_base` and routes `/api/show` to the configured host.
- [PR #37055](https://github.com/BerriAI/litellm/pull/37055): `generic_guardrail_api` currently re-sends the whole transcript every turn (O(n²) per session) and scans base64 images against text-only guardrails. The PR adds payload, applicability, dispatch, and logging controls, plus scoping guardrails to specific requests.
- [Issue #35766](https://github.com/BerriAI/litellm/issues/35766): `LiteLLM_SpendLogs` lacks an `(api_key, startTime)` index, so budget-window spend reseeds seq-scan the table and can saturate Postgres (Prisma P2028 under traffic).
- [Issue #27704](https://github.com/BerriAI/litellm/issues/27704): Prisma Query Engine startup race during Kubernetes rolling deployments opens a ~5s window where background spend/credential jobs fail and spend data is lost.

## 5. Stability & Regressions

Ranked by severity, with fix PRs noted where they exist:

1. **Proxy fails to start** after `uv tool update litellm["proxy"]` to v1.96.2, caused by FastAPI `get_flat_dependant` incompatibility ([#36922](https://github.com/BerriAI/litellm/issues/36922)).
2. **Silent cost under-billing**: `service_tier="priority"` is accepted by OpenAI for gpt-4o/gpt-4.1 family models but billed at default rate — dated-snapshot model entries are missing priority pricing keys ([#37046](https://github.com/BerriAI/litellm/issues/37046)).
3. **Gemini TTS never spend-tracked**: `/v1/audio/speech` returns audio 200 but creates no spend log; key spend stays 0 ([#37015](https://github.com/BerriAI/litellm/issues/37015)).
4. **Ghost streaming costs**: generic gateways can report usage cost in non-USD units, overriding configured pricing and exhausting budgets; fix PR proposes trusting streaming cost only for known USD providers ([#37060](https://github.com/BerriAI/litellm/pull/37060)).
5. **Anthropic system messages dropped**: `role:"system"` entries inside `messages[]` on `/v1/messages` never reach the backend ([#36917](https://github.com/BerriAI/litellm/issues/36917)).
6. **`interactions.create()` drops `response_format`** when `USE_LITELLM_PROXY=true` for Gemini models ([#36928](https://github.com/BerriAI/litellm/issues/36928)).
7. **Retry loops spin on billing errors**: `RateLimitError` doesn't distinguish `insufficient_quota` from retryable 429s ([#32785](https://github.com/BerriAI/litellm/issues/32785)).
8. **Managed Bedrock batches cannot be cancelled** via `/v1/batches/{id}/cancel` ([#33986](https://github.com/BerriAI/litellm/issues/33986)).
9. **chatgpt/gpt-5.4 bridge failures**: empty final Responses output; `completion()` bridge fails with "Unknown items in responses API response: []" ([#25429](https://github.com/BerriAI/litellm/issues/25429)).
10. **Guardrail-blocked `/v1/responses` report zero usage** despite real upstream consumption — closed ([#36880](https://github.com/BerriAI/litellm/issues/36880)).

Fixes in flight: PANW Prisma AIRS tool-call 500s — scan tool args as plain text instead of unsupported `tool_event` ([PR #37038](https://github.com/BerriAI/litellm/pull/37038)); Azure Content Safety `apply_guardrail` returning 200 without scanning ([PR #36894](https://github.com/BerriAI/litellm/pull/36894)); Bedrock managed-batch params leaking into chat provider requests ([PR #36633](https://github.com/BerriAI/litellm/pull/36633)); full PANW AIRS scan response returned on blocked requests ([PR #37036](https://github.com/BerriAI/litellm/pull/37036)).

**Security:**
- [Issue #36997](https://github.com/BerriAI/litellm/issues/36997) (open): Admin UI session cookie is a non-HttpOnly JWT whose `key` claim is the caller's real proxy key.
- [Issue #28033](https://github.com/BerriAI/litellm/issues/28033) (open): budget bypass with public proof-of-concept.
- [Issues #37052–#37054](https://github.com/BerriAI/litellm/issues/37054) (closed same-day): non-admin `temp_budget_increase` self-bypass; SSRF/provider-key exfiltration via client-supplied `api_base` (guard is dead code); no-auth mode when `LITELLM_MASTER_KEY` is unset — noted as the default docker-compose configuration.

## 6. What This Means for Application Developers

- **Don't treat LiteLLM spend logs as authoritative for billing yet.** Known gaps exist for Gemini TTS ([#37015](https://github.com/BerriAI/litellm/issues/37015)), `service_tier=priority` pricing ([#37046](https://github.com/BerriAI/litellm/issues/37046)), per-second audio budget reservation ([PR #37056](https://github.com/BerriAI/litellm/pull/37056)), and managed-batch double-billing ([PR #37050](https://github.com/BerriAI/litellm/pull/37050)).
- **If you proxy Ollama on a non-default host**, track [Issue #37041](https://github.com/BerriAI/litellm/issues/37041): each completion pays ~8s of silent TCP timeouts. The fix in [#37062](https://github.com/BerriAI/litellm/pull/37062) is worth adopting when it merges.
- **Set `LITELLM_MASTER_KEY` explicitly in every deployment** — the default docker-compose leaves the proxy running with no authentication ([#37054](https://github.com/BerriAI/litellm/issues/37054)). Also watch the Admin UI cookie exposure ([#36997](https://github.com/BerriAI/litellm/issues/36997)) if you expose the dashboard.
- **Guardrail users**: Prisma AIRS tool-calling currently 500s ([PR #37038](https://github.com/BerriAI/litellm/pull/37038)) and Azure Content Safety `apply_guardrail` was a no-op 200 ([PR #36894](https://github.com/BerriAI/litellm/pull/36894)) — verify behavior before relying on these paths.
- **Voyage users**: `voyage-4`, `voyage-context-4`, and `voyage-code-4` are entering the model catalog; watch [PR #35091](https://github.com/BerriAI/litellm/pull/35091) and [PR #36820](https://github.com/BerriAI/litellm/pull/36820) for merge.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

## Today's Highlights

No new releases landed in the last 24 hours; activity is concentrated on Unsloth Studio/Desktop bug-fixing and performance work. Notable in-flight PRs cut `max_steps` fine-tune preprocessing from 11m14s to ~2m, fix a partial-GPU-offload MTP slowdown on Qwen3.8-27B-GGUF, and repair tool-call streaming/routing defects in the OpenAI-compatible API. Demand for local-network (0.0.0.0) serving, Intel GPU support, and Flatpak packaging continues to grow.

## New Model & Hardware Support

Nothing shipped in a release this cycle; the following are in-flight PRs and open reports:

- **macOS / MLX**: PR adds discovery of models installed via oMLX ([#8937](https://github.com/unslothai/unsloth/pull/8937)); PR prevents macOS AppleDouble sidecar files (`._<name>`) from being picked as GGUFs ([#8919](https://github.com/unslothai/unsloth/pull/8919)); Ideogram 4 fails to load on Mac with `'_Noop' object is not iterable` ([#8940](https://github.com/unslothai/unsloth/issues/8940)).
- **Intel GPU**: Installation path for Studio on Intel GPUs (non-Vulkan llama.cpp) requested ([#8931](https://github.com/unslothai/unsloth/issues/8931)).
- **AMD**: Vulkan/ROCm VRAM reporting bugs — VRAM shown as unknown or not consumed ([#8878](https://github.com/unslothai/unsloth/issues/8878)); AMD iGPUs report overinflated VRAM ([#8942](https://github.com/unslothai/unsloth/issues/8942)).
- **Multi-GPU**: Quantized KV cache types are silently dropped when tensor parallelism is enabled; fix PR restores them ([#8939](https://github.com/unslothai/unsloth/pull/8939)).
- **Video/Diffusion**: Video GGUF/diffusion model downloads hit transport-mismatch errors even after successful completion ([#8941](https://github.com/unslothai/unsloth/issues/8941)).

## Performance & Optimization

- **Fine-tune preprocessing**: `max_steps` runs previously tokenized the entire dataset before stepping. PR only preprocesses the rows the run will consume — a 30-step Qwen3-0.6B run on `open_math_reasoning` (27 GB) dropped from **11m14s preprocessing vs 1m54s training** to roughly training-bound ([#8890](https://github.com/unslothai/unsloth/pull/8890)).
- **MTP under partial offload**: Embedded MTP head now follows main-model placement; fixes the ~**3.5 tok/s** reported for Qwen3.8-27B-GGUF UD-IQ2_M in Studio ([#8875](https://github.com/unslothai/unsloth/pull/8875)).
- **Local model inventory**: Cold `GET /api/hub/local` on a 109-model host took ~5s and blocked unrelated API work for >4s; PR removes the redundant work and keeps it off the API loop ([#8770](https://github.com/unslothai/unsloth/pull/8770)).
- **Cached GGUF loads**: A single load made **7 Hub round trips** to verify an already-cached file; PR reuses prior resolution work ([#8771](https://github.com/unslothai/unsloth/pull/8771)).
- **Streaming UI**: Chunks arriving faster than the browser frame rate are now coalesced so the chat UI doesn't fall behind ([#8845](https://github.com/unslothai/unsloth/pull/8845)); large streaming code fences are tokenized incrementally to avoid blocking refreshes ([#8935](https://github.com/unslothai/unsloth/pull/8935)).
- **Diffusion training**: Warmup presets are now paired with a scheduler that actually consumes them, fixing a config mismatch for flow-matching DiTs ([#8593](https://github.com/unslothai/unsloth/pull/8593)).

## Stability & Regressions

Ranked by severity:

1. **Training crash**: `PassManager::run failed` when training `Qwen3-0.6B-unsloth-bnb-4bit` on Colab T4 — open with 18 comments ([#2482](https://github.com/unslothai/unsloth/issues/2482)).
2. **Security-relevant dep pin**: Published constraints block torch 2.13, preventing remediation of GHSA-rrmf-rvhw-rf47 ([#8926](https://github.com/unslothai/unsloth/issues/8926)).
3. **False-positive hardware gate**: "Your GPU is too old!" incorrectly blocks some setups — flagged urgent, being fixed ([#1998](https://github.com/unslothai/unsloth/issues/1998)).
4. **ML library import failure**: `module 'torch' has no attribute 'float8_e8m0fnu'` breaks training startup ([#8933](https://github.com/unslothai/unsloth/issues/8933)).
5. **GGUF export regression**: Converting a trained model to GGUF now requires materializing 16-bit weights first (~40 GB for large models); reported as a workflow regression, closed ([#8717](https://github.com/unslothai/unsloth/issues/8717)).
6. **Freeze**: Deep Research hangs at "Writing The Report" with no token accounting visible ([#8483](https://github.com/unslothai/unsloth/issues/8483)).
7. **Unrecoverable partial download**: "Partial Download. Click to continue." does nothing ([#8927](https://github.com/unslothai/unsloth/issues/8927)).
8. **Multi-GPU misconfiguration**: UUID-form `CUDA_VISIBLE_DEVICES` silently hides the per-model GPU picker on healthy multi-GPU hosts ([#8873](https://github.com/unslothai/unsloth/issues/8873)).
9. **Data integrity**: `get_statistics()` ignores `force_download=False` and re-downloads repeat-counter data ([#8899](https://github.com/unslothai/unsloth/issues/8899)).
10. **Platform bugs**: Studio can't create a project on Windows ([#8936](https://github.com/unslothai/unsloth/issues/8936)); phone standby drops streaming during thinking/research ([#8925](https://github.com/unslothai/unsloth/issues/8925)); microphone blocked in Unsloth Desktop on Ubuntu Mate (WebKitGTK media-stream) ([#8678](https://github.com/unslothai/unsloth/issues/8678)); Desktop install never completes ([#8546](https://github.com/unslothai/unsloth/issues/8546), closed).

Fix PRs in flight: avoid reloading an already-loaded model mid-stream ([#8943](https://github.com/unslothai/unsloth/pull/8943)); preserve quantized KV cache under tensor split ([#8939](https://github.com/unslothai/unsloth/pull/8939)); honor `custom_prompt_template` when rendering Alpaca datasets ([#8938](https://github.com/unslothai/unsloth/pull/8938)); keep tool-call rounds separate when `delta.tool_calls[].index` restarts ([#8754](https://github.com/unslothai/unsloth/pull/8754)); route bare tool-call fragments to the owning index ([#8755](https://github.com/unslothai/unsloth/pull/8755)); avoid misdetecting AppleDouble files as GGUFs ([#8919](https://github.com/unslothai/unsloth/pull/8919)); Windows binary-mode fix for linked-folder sources (closed) ([#8621](https://github.com/unslothai/unsloth/pull/8621)).

## What This Means for Application Developers

- **Short fine-tune iteration**: The `max_steps` preprocessing fix ([#8890](https://github.com/unslothai/unsloth/pull/8890)) eliminates a 6x preprocessing overhead for quick experiment runs — a large win if you train small models on big datasets.
- **Agents using Studio's OpenAI-compatible API**: Tool-call routing fixes ([#8754](https://github.com/unslothai/unsloth/pull/8754), [#8755](https://github.com/unslothai/unsloth/pull/8755)) and image/video API model auto-switch ([#8766](https://github.com/unslothai/unsloth/pull/8766)) address real multi-turn and multi-modal edge cases. Note there is still no reasoning-effort slider for Qwen3-class models — you must manipulate Jinja templates yourself ([#8881](https://github.com/unslothai/unsloth/issues/8881)).
- **Networking**: LAN/0.0.0.0 serving remains the top request cluster ([#8578](https://github.com/unslothai/unsloth/issues/8578), [#8898](https://github.com/unslothai/unsloth/issues/8898), [#8934](https://github.com/unslothai/unsloth/issues/8934)). Cloudflare-tunnel-only exposure is a blocker for air-gapped and on-prem deployments.
- **Research agents**: No automatic current-date injection in prompts ([#8859](https://github.com/unslothai/unsloth/issues/8859)) — deep-research plans can anchor to the model's stale internal date; pin dates explicitly.
- **Security hygiene**: If your org tracks CVEs, verify Unsloth's torch constraint doesn't pin you to a vulnerable version ([#8926](https://github.com/unslothai/unsloth/issues/8926)).
- **Distribution**: Flatpak support ([#4380](https://github.com/unslothai/unsloth/issues/4380), 20 👍) plus multi-Linux-distro install/mic bugs indicate the Linux desktop packaging story is still maturing.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*