# AI Infrastructure Digest 2026-08-03

> Generated: 2026-08-03 01:46 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# Cross-Project Comparison Report — AI Infrastructure Ecosystem
**2026-08-03 | Source: daily digests for vLLM, SGLang, llama.cpp, Ollama, LiteLLM, Unsloth**

## 1. Ecosystem Overview

The ecosystem is consolidating around DeepSeek-V4 and Kimi-K3 as the frontier models every engine must serve, with speculative decoding (MTP/DSpark) emerging as the primary performance lever across all serving layers. Only llama.cpp shipped releases in the past 24h (10 builds, b10225→b10235); vLLM, SGLang, Ollama, LiteLLM, and Unsloth all held their release trains, indicating a stabilization-and-hardening cycle rather than a feature-driven cadence. Hardware fragmentation is the dominant constraint: DeepSeek-V4 remains blocked on Ampere/SM120 in vLLM, SGLang is actively patching SM80 support, and ROCm/HIP, Intel XPU, RDNA4/gfx1250, and SM120 all require dedicated porting work. The most dangerous failure class across projects is **silent corruption** — quantized DeepSeek-V4 dropping fused weights (SGLang [#33245](https://github.com/sgl-project/sglang/issues/33245)), GPU Confidential Computing pinned-memory misclassification (vLLM [#50671](https://github.com/vllm-project/vllm/pull/50671)), and HiCache cross-run cache collisions (SGLang [#33268](https://github.com/sgl-project/sglang/issues/33268)) — which is riskier than hard crashes because serving continues on wrong outputs. Frontier capability is running ahead of production reliability; pinning versions and tracking fix PRs is now a required practice for application teams.

## 2. Activity Comparison

| Project | Issues updated (24h) | PRs updated (24h) | Releases (24h) |
|---|---|---|---|
| vLLM | **70** | **210** | None |
| SGLang | ~15 cited¹ | ~16 cited¹ | None |
| llama.cpp | ~17 cited¹ | ~20 cited¹ | **10** (b10225→b10235) |
| Ollama | ~20 cited¹ | ~7 cited¹ | None |
| LiteLLM | **39** | **125** | None |
| Unsloth | ~6 cited¹ | ~19 cited¹ | None |

¹ Full 24h counts not disclosed; figures are issues/PRs explicitly cited in each digest.

vLLM and LiteLLM show the highest raw issue/PR volume, driven by breadth of hardware enablement and gateway edge-case handling respectively. llama.cpp is the only project shipping binaries — and at a remarkable cadence — reflecting its tight loop between merged PRs and tagged builds. SGLang's activity is disproportionately concentrated on a handful of large stacked PRs (e.g. [#33271](https://github.com/sgl-project/sglang/pull/33271) for DSV4 on Ampere), while Ollama and Unsloth are in reliability-hardening mode with fewer open threads.

## 3. Model Support Race

**DeepSeek V4** — llama.cpp is ahead: MTP + DSpark speculative decoding merged and shipped in b10228, with automatic DSpark sidecar resolution in b10231. SGLang has the most advanced serving-side effort (stacked SM80 enablement PR [#33271](https://github.com/sgl-project/sglang/pull/33271)), while vLLM is still blocked on SM8x and SM120 ([#50576](https://github.com/vllm-project/vllm/issues/50576), [#50720](https://github.com/vllm-project/vllm/issues/50720)).

**Kimi K3** — SGLang leads with a Day-0 support PR ([#32541](https://github.com/sgl-project/sglang/pull/32541)); vLLM trails with a formal ROCm roadmap issue ([#50682](https://github.com/vllm-project/vllm/issues/50682)) and an unresolved TP8 crash on MI355X ([#50347](https://github.com/vllm-project/vllm/issues/50347)); Ollama only has a cloud availability request ([#17235](https://github.com/ollama/ollama/issues/17235)).

**Qwen3.x family** — vLLM added native text-only checkpoint support ([#50355](https://github.com/vllm-project/vllm/pull/50355)); llama.cpp shipped a specialized Qwen3 chat parser for tagged-thinking/tool-calls (b10227); Unsloth restored the "inbound half" of the Qwen3.5-35B thinking fix ([#7758](https://github.com/unslothai/unsloth/pull/7758)); LiteLLM has a Bedrock `reasoning_effort` forwarding gap ([#34105](https://github.com/BerriAI/litellm/issues/34105)).

**Niche / edge** — SGLang targets AMD gfx1250/RDNA4 ([#32754](https://github.com/sgl-project/sglang/pull/32754)) and SM120 FP8 KV via HiSparse ([#33075](https://github.com/sgl-project/sglang/pull/33075)); vLLM is tuning Intel Arc Pro B70 Mamba configs ([#50534](https://github.com/vllm-project/vllm/pull/50534)); llama.cpp has TML Inkling architecture support in review ([#25731](https://github.com/ggml-org/llama.cpp/pull/25731)); Unsloth made Intel Arc a first-class Windows install target ([#7706](https://github.com/unslothai/unsloth/pull/7706)).

**Verdict:** llama.cpp and SGLang are ahead on frontier-model velocity; vLLM leads in ecosystem breadth and production hardening; Ollama is notably behind, still fielding requests for models its peers already serve. No project can yet claim both Day-0 support and stability for DeepSeek-V4/Kimi-K3.

## 4. Performance Frontier

Optimization effort is concentrated in five areas:

- **Speculative decoding / MTP.** llama.cpp merged DSpark sidecars (~50% decode speedup claimed) and is pursuing model-free suffix decoding ([#26283](https://github.com/ggml-org/llama.cpp/pull/26283)); SGLang extends DSpark graph-folded sampling beyond greedy ([#33298](https://github.com/sgl-project/sglang/pull/33298)) but is fighting multi-node deadlocks ([#33289](https://github.com/sgl-project/sglang/issues/33289)); vLLM's MTP work is mostly bug-fixing — a ~20% accuracy regression with prefix caching ([#43559](https://github.com/vllm-project/vllm/issues/43559)) and negative CUDA graph memory estimates ([#44740](https://github.com/vllm-project/vllm/issues/44740)).

- **KV cache.** llama.cpp proposes E8-lattice 2-bit KV quantization at 2.125 bits/element ([#25352](https://github.com/ggml-org/llama.cpp/pull/25352)); vLLM opened an RFC for layerwise + sparse KV offload targeting sparse-attention models like GLM-5.2 ([#48203](https://github.com/vllm-project/vllm/issues/48203)); SGLang adds FP8 KV paths for SM120/SM121.

- **Quantization.** SGLang adds ModelOpt NVFP4 online MoE quantization ([#33115](https://github.com/sgl-project/sglang/pull/33115)); vLLM adds Quark W4A16 INT4/UINT4 exports ([#48606](https://github.com/vllm-project/vllm/pull/48606)) but carries unmerged NVFP4 memory bugs ([#46268](https://github.com/vllm-project/vllm/issues/46268), [#49031](https://github.com/vllm-project/vllm/issues/49031)). Caution flag: quantized DSV4 can silently produce garbage (SGLang [#33245](https://github.com/sgl-project/sglang/issues/33245)).

- **Kernels.** llama.cpp shipped SIMD-optimized Metal hyper-connection kernels for DSV4 ([#26459](https://github.com/ggml-org/llama.cpp/pull/26459)); vLLM developed an SM100 CuTeDSL fused query kernel with folded index weights ([#49792](https://github.com/vllm-project/vllm/pull/49792)); SGLang eliminated a prefill output copy in the TRTLLM backend ([#33306](https://github.com/sgl-project/sglang/pull/33306)).

- **Distributed serving.** SGLang is investing in DP attention (vision embedding broadcast [#33307](https://github.com/sgl-project/sglang/pull/33307), push-based load reporting for routers [#32523](https://github.com/sgl-project/sglang/pull/32523)); vLLM opened an RFC for nccl-m2n sharding-aware weight transfer for native RL ([#46439](https://github.com/vllm-project/vllm/issues/46439)); llama.cpp and Ollama remain largely single-node, with Ollama still carrying unresolved multi-GPU split and silent CPU-fallback issues ([#17523](https://github.com/ollama/ollama/issues/17523), [#14258](https://github.com/ollama/ollama/issues/14258)).

## 5. Layer Positioning

| Project | Layer | Primary deployment | Representative activity today |
|---|---|---|---|
| **vLLM** | Serving engine | Datacenter GPU, multi-node production | MRV2 parity, GPU CC fix, SM100 kernels |
| **SGLang** | Serving engine | Datacenter GPU, frontier-model Day-0 | DSV4/Kimi enablement, DSpark + DP attention |
| **llama.cpp** | Local runtime | CPU/GPU edge, workstations, laptops | 10 releases: DSV4 spec decode, Metal SIMD, KV quantization |
| **Ollama** | Local runtime + cloud wrapper | Developer desktops, managed cloud | Runner lifecycle, tool-call parsing, cloud reliability |
| **LiteLLM** | Gateway/proxy | Front of any model endpoint | OpenAI Realtime proxy, Bedrock tool schema, budget fixes |
| **Unsloth** | Fine-tuning + desktop inference | Training workstations, Studio desktop | Intel Arc installer, parallel chat dispatch, Studio hardening |

These layers are largely complementary: Unsloth produces fine-tuned GGUF weights that Ollama/llama.cpp serve locally, while LiteLLM fronts both local and cloud endpoints for agents and vLLM/SGLang serve the same models at scale. The boundaries blur at the edges — Ollama now has a cloud tier, Unsloth ships inference, and llama.cpp overlaps with lightweight serving — but the durable split is throughput-oriented datacenter serving vs. developer-facing local/edge runtime vs. control-plane gateway.

## 6. Trend Signals

1. **Frontier-model churn is outpacing stability.** DeepSeek-V4 and Kimi-K3 support is half-finished across every engine. Do not assume Day-0 support means production-safe; validate on your exact hardware (Ampere, SM120, MI355X are the known trouble spots).

2. **Speculative decoding is becoming the default performance architecture.** MTP, DSpark sidecars, suffix decoding, and graph-folded sampling all landed or advanced this week. The DSpark sidecar pattern — decoupling draft weights from the base model — appears to be the winning design; watch vLLM and Ollama adoption.

3. **Correctness under feature interaction is the new bottleneck.** The worst bugs are not in single features but in combinations: prefix caching + MTP (vLLM [#43559](https://github.com/vllm-project/vllm/issues/43559)), quantization + fused weights (SGLang [#33245](https://github.com/sgl-project/sglang/issues/33245)), cache keys missing dtype (SGLang [#33268](https://github.com/sgl-project/sglang/issues/33268)), pinned memory + GPU CC (vLLM [#50671](https://github.com/vllm-project/vllm/pull/50671)). Regression-test feature combinations, not just individual features.

4. **Hardware coverage is the competitive moat.** Ampere enablement, ROCm/HIP, Intel XPU, RDNA4/gfx1250, and SM120 each absorbed significant PR surface this week. If your fleet is not Hopper/Blackwell datacenter GPUs, expect to be on the porting frontier for the next several weeks.

5. **Silent failures are the dominant production risk across all layers** — garbage outputs from quantized DSV4, silent GPU→CPU fallback (Ollama [#14258](https://github.com/ollama/ollama/issues/14258)), silent GTT spillover (llama.cpp [#26432](https://github.com/ggml-org/llama.cpp/issues/26432)), and undetected corrupt blobs (Ollama [#17520](https://github.com/ollama/ollama/issues/17520)). Build output validation and memory-placement checks into your serving pipeline.

6. **Agent/tool-calling reliability is now a first-class concern at every layer:** tool-call parser fixes in Ollama ([#17526](https://github.com/ollama/ollama/pull/17526)) and llama.cpp (Qwen3 parser, b10227), Bedrock tool-schema fixes in LiteLLM ([#35617](https://github.com/BerriAI/litellm/pull/35617)), and budget-enforcement gaps ([#35524](https://github.com/BerriAI/litellm/issues/35524)). Gateway cost accounting is inaccurate for cached/audio/reasoning tokens (LiteLLM [#35608](https://github.com/BerriAI/litellm/issues/35608)) — finance teams should validate spend reports.

7. **Realtime/audio is an emerging surface.** LiteLLM's OpenAI Realtime/WebRTC proxy PR ([#35600](https://github.com/BerriAI/litellm/pull/35600)) is the first gateway-level move; Unsloth is adding audio input to local MLX chat. Expect this category to grow quickly in agent applications.

**Bottom line for engineers:** pin known-good versions (Ollama 0.32.1, pre-#25407 llama.cpp for HIP, vLLM without MTP+prefix-caching for Qwen3.6), track the fix PRs referenced above, and add client-side timeouts, retries, and output validation — the ecosystem is moving fast, but this week's frontier features are not yet safe to trust by default.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest — 2026-08-03

## Today's Highlights

No releases landed in the past 24h; activity is concentrated across 70 updated issues and 210 updated PRs, mostly around hardware enablement, MRV2 (Model Runner V2) feature parity, and a cluster of TurboQuant/MTP stability bugs. The most active thread remains the ~20% accuracy regression when `--enable-prefix-caching` is combined with MTP speculative decoding on Qwen3.6 MoE ([#43559](https://github.com/vllm-project/vllm/issues/43559), 38 comments). DeepSeek-V4-Flash-0731 is confirmed blocked on Ampere and SM120 Blackwell, Kimi-K3 ROCm enablement was formalized as a dedicated roadmap issue, and MRV2 continues to close feature gaps (LoRA, routed experts, block-table alignment).

## Releases & Breaking Changes

None. No vLLM releases were published in the last 24h. Watch for future breaking-change surface in the ROCm dependency bump (torch 2.12 / triton 3.7, [PR #50607](https://github.com/vllm-project/vllm/pull/50607)) and the universal 128-token block-table alignment across MRV1/MRV2/DSA indexer ([PR #50302](https://github.com/vllm-project/vllm/pull/50302)).

## New Model & Hardware Support

- **jina-embeddings-v5-text-nano** (EuroBERT encoder backbone) support added — [PR #50688](https://github.com/vllm-project/vllm/pull/50688).
- **Native Qwen3.5 text-only checkpoints**: weight-prefix mapping fix for checkpoints carrying the VL-framework `model.language_model.*` prefix — [PR #50355](https://github.com/vllm-project/vllm/pull/50355).
- **Native Quark W4A16 INT4/UINT4 exports** (dense + MoE paths) — [PR #48606](https://github.com/vllm-project/vllm/pull/48606).
- **DeepSeek-V4-Flash-0731**: new checkpoint released, but still fails on SM8x (A100/A800, [issue #50576](https://github.com/vllm-project/vllm/issues/50576), tracking [issue #40851](https://github.com/vllm-project/vllm/issues/40851)) and on SM120 via FlashInfer sparse MLA decode kernel routing ([#50720](https://github.com/vllm-project/vllm/issues/50720)).
- **Kimi-K3 ROCm**: upstream gap/roadmap tracking opened ([#50682](https://github.com/vllm-project/vllm/issues/50682)); TP8 crash on MI355X in `ROCM_AITER_MLA` tracked separately ([#50347](https://github.com/vllm-project/vllm/issues/50347)).
- **XPU (Intel)**: `--linear-backend torch` option ([PR #49664](https://github.com/vllm-project/vllm/pull/49664)), unconditional W8A8 routing for block-quantized FP8 weights ([PR #50787](https://github.com/vllm-project/vllm/pull/50787)), and tuned Mamba `selective_state_update` configs for Intel Arc Pro B70 ([PR #50534](https://github.com/vllm-project/vllm/pull/50534)).

## Performance & Optimization

- **SM100 kernel work**: new CuTeDSL fused query kernel (`fused_q`) for DSA sparse attention — packed fp8 MQA query, indexer query RoPE + UE8M0 fp8 quant, and folded index weights as a torch custom op — [PR #49792](https://github.com/vllm-project/vllm/pull/49792).
- **MRV2 enablement**: LoRA + CUDA graph warmup fix ([PR #41732](https://github.com/vllm-project/vllm/pull/41732)), routed-experts (R3) capture support ([PR #50721](https://github.com/vllm-project/vllm/pull/50721)), and 128-token block-table width unification fixing indexer buffer mismatches under alignment and DCP ([PR #50302](https://github.com/vllm-project/vllm/pull/50302)).
- **KV cache offload RFC**: layerwise + sparse KV cache offloading for long-sequence inference, motivated by sparse-attention models (GLM-5.2) — [issue #48203](https://github.com/vllm-project/vllm/issues/48203).
- **FlashMLA sparse**: DCP support on the `fp8_ds_mla` mixed-batch path plus opt-in `--dcp-sparse-indexer-mode {exact,union}` — [PR #46514](https://github.com/vllm-project/vllm/pull/46514).
- **AMD/ROCm CI & toolchain**: AMD test-config selection added to performance-benchmarks runner ([PR #50770](https://github.com/vllm-project/vllm/pull/50770)); CUDA/ROCm custom-all-reduce + KDA tests un-gated ([PR #50490](https://github.com/vllm-project/vllm/pull/50490)).
- **RL infrastructure**: RFC for `nccl-m2n` sharding-aware weight transfer in vLLM Native RL — [issue #46439](https://github.com/vllm-project/vllm/issues/46439).

## Stability & Regressions

Updated/active in the last 24h, ranked by severity:

1. **GPU Confidential Computing data corruption / remote DoS** — `torch.Tensor.is_pinned()` misclassifies genuinely pinned memory under GPU CC, breaking the live-alias contract in `get_cuda_view_from_cpu_tensor` and causing silent input corruption. Fix PR in review: [PR #50671](https://github.com/vllm-project/vllm/pull/50671).
2. **~20% accuracy drop with prefix caching + MTP** on Qwen3.6 35B-A3B — [#43559](https://github.com/vllm-project/vllm/issues/43559); open, no fix PR yet.
3. **XPU multi-GPU TP hang** on Intel Arc Pro B60 — oneCCL warmup allreduce never returns, GuC timeouts, `DEVICE_LOST` — [#50545](https://github.com/vllm-project/vllm/issues/50545).
4. **17.5s engine-wide stall** on large-to-small request shape transitions with NVFP4/b12x + GDN CuteDSL prefill kernel — [#47458](https://github.com/vllm-project/vllm/issues/47458).
5. **NVFP4 fixed ~52 GiB CPU RAM allocation** — OOMs 64 GB hosts even for a 0.8B model — [#46268](https://github.com/vllm-project/vllm/issues/46268).
6. **Negative CUDA graph memory estimate (-35 GiB) with MTP** on GB10, causing severe KV cache over-allocation and OOM — [#44740](https://github.com/vllm-project/vllm/issues/44740).
7. **TurboQuant cluster**: `Unknown cache dtype: auto` on v0.25.0+ hybrid models ([#50709](https://github.com/vllm-project/vllm/issues/50709)); nightly crash on large chunked continuation prefill after workspace lock ([#41726](https://github.com/vllm-project/vllm/issues/41726)); spec-verify routing fix for K+1 batches in review ([PR #40914](https://github.com/vllm-project/vllm/pull/40914)).
8. **Kimi-K3 TP8 crash on MI355X** — `ROCM_AITER_MLA` HIP code 700 — [#50347](https://github.com/vllm-project/vllm/issues/50347).
9. **FlashInfer B12x W4A16 startup OOM** — runtime repacking retains both original and packed MoE weights — [#49031](https://github.com/vllm-project/vllm/issues/49031).
10. **GB10 cold-start timeout** — default `VLLM_ENGINE_READY_TIMEOUT_S=600` insufficient for large MoE + empty FlashInfer JIT cache; startup-failure diagnostics improvement in flight ([PR #48871](https://github.com/vllm-project/vllm/pull/48871), tracking [#48031](https://github.com/vllm-project/vllm/issues/48031)).
11. **Hybrid multi-group KV connector crash** — `ValueError: too many values to unpack` on load-error blocks — [#50687](https://github.com/vllm-project/vllm/issues/50687).
12. **CPU KV offload opaque failure** — oversized regions now fail fast with a clear error instead of opaque `mmap.madvise` OSErrors — [PR #50358](https://github.com/vllm-project/vllm/pull/50358).
13. **Anthropic `/v1/messages` intermittent 500** on empty `cache_salt` — fixed in [PR #50764](https://github.com/vllm-project/vllm/pull/50764).
14. **MoE kernel config tuning fails with Triton 3.6** — [#37191](https://github.com/vllm-project/vllm/issues/37191).
15. **ROCm `fused_qk_rmsnorm` compile error** — resolved/closed — [#50679](https://github.com/vllm-project/vllm/issues/50679).

## What This Means for Application Developers

- **Do not combine `--enable-prefix-caching` with MTP speculative decoding** on Qwen3.6 MoE-class models; expect up to 20% accuracy loss until [#43559](https://github.com/vllm-project/vllm/issues/43559) is resolved.
- **DeepSeek-V4-Flash-0731 / DSpark**: not deployable on Ampere (A100/A800) or SM120 workstation GPUs; stay on supported datacenter SKUs and watch [#40851](https://github.com/vllm-project/vllm/issues/40851) / [#50576](https://github.com/vllm-project/vllm/issues/50576).
- **TurboQuant KV cache users**: pin vLLM to a known-good version; the spec-verify routing fix ([PR #40914](https://github.com/vllm-project/vllm/pull/40914)) is the one to track if you run Qwen3.6-MoE with MTP.
- **DGX Spark / GB10 operators**: raise `VLLM_ENGINE_READY_TIMEOUT_S` well above 600s for first cold starts on large models; expect clearer startup diagnostics once [PR #48871](https://github.com/vllm-project/vllm/pull/48871) merges.
- **GPU CC environments**: review [PR #50671](https://github.com/vllm-project/vllm/pull/50671) carefully — silent input corruption in pinned-memory paths is a security-relevant correctness issue.
- **CPU KV offload**: after [PR #50358](https://github.com/vllm-project/vllm/pull/50358), oversized offload regions fail fast — size `/dev/shm` deliberately. The layerwise/sparse offload RFC ([#48203](https://github.com/vllm-project/vllm/issues/48203)) is open for comment if you need longer sequences.
- **Embeddings**: the jina-embeddings-v5 family now covers both Qwen3-decoder (small) and EuroBERT-encoder (nano) backbones — [PR #50688](https://github.com/vllm-project/vllm/pull/50688).

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

## SGLang Digest — 2026-08-03

### Today's Highlights
DeepSeek-V4 and Kimi-K3 remain the dominant focus. A major stacked PR (#33271) targets full DeepSeek-V4 serving on SM80/Ampere by fixing compile, dispatch, kernel, and indexer OOM issues, while new reports of multi-node DSpark deadlocks, silent weight-dropping in quantized DSV4, and B300 Xid crashes highlight ongoing stability risk. No releases shipped in the last 24 hours; hardware enablement continues for AMD gfx1250, Ascend NPU, and SM120 FP8 KV paths.

### Releases & Breaking Changes
- **No new releases** in the last 24h.
- In-flight cleanup PR [#33308](https://github.com/sgl-project/sglang/pull/33308) removes the deprecated `--keep-mm-feature-on-device` processor-side path. It was already forced to `False`; device residency is now owned solely by `use_cuda_ipc`. This also fixes `ernie45_vl` / `midashenglm` attribute reads.

### New Model & Hardware Support
- **Kimi K3 Day-0 support**: PR [#32541](https://github.com/sgl-project/sglang/pull/32541), tracked by roadmap [#32607](https://github.com/sgl-project/sglang/issues/32607).
- **AMD gfx1250 / RDNA4**: high-priority enablement PR [#32754](https://github.com/sgl-project/sglang/pull/32754).
- **DeepSeek-V4 on SM80/Ampere**: PR [#33271](https://github.com/sgl-project/sglang/pull/33271) fixes compile, dispatch, kernel, and indexer oversized-intermediate blockers; follow-up portable indexer fusion PR [#33297](https://github.com/sgl-project/sglang/pull/33297).
- **DeepSeek V4 DSpark on AMD HIP**: PR [#30964](https://github.com/sgl-project/sglang/pull/30964).
- **Qwen3.5 GemmaRMSNorm on Ascend 950**: PR [#32745](https://github.com/sgl-project/sglang/pull/32745).
- **HiSparse DSA for SM120/SM121 FP8 KV**: PR [#33075](https://github.com/sgl-project/sglang/pull/33075).
- **ModelOpt NVFP4 online MoE weight quantization**: PR [#33115](https://github.com/sgl-project/sglang/pull/33115).
- **Kimi K2.6 wide-EP via mori all-to-all**: PR [#32048](https://github.com/sgl-project/sglang/pull/32048).

### Performance & Optimization
- **DP vision embedding broadcast**: PR [#33307](https://github.com/sgl-project/sglang/pull/33307) replaces pad-to-max all-gather with an owner-rank broadcast for single-image requests — one copy instead of `tp_size` copies, bit-identical, verified on 8 GPUs.
- **TRTLLM prefill output copy removal**: PR [#33306](https://github.com/sgl-project/sglang/pull/33306) eliminates the extra copy by having the kernel write directly into the preallocated graph output buffer.
- **DSPARK graph-folded sampling**: PR [#33298](https://github.com/sgl-project/sglang/pull/33298) extends the folded draft proposal from greedy-only to mixed greedy + sampling with in-graph Gumbel noise.
- **Rust server DP attention with client LB**: PR [#33105](https://github.com/sgl-project/sglang/pull/33105).
- **Push-based engine load reporting**: PR [#32523](https://github.com/sgl-project/sglang/pull/32523), with RFC [#32925](https://github.com/sgl-project/sglang/issues/32925), provides continuous per-DP-rank load signals for routers.

### Stability & Regressions
Ranked by severity:

- **Critical — Multi-node DSpark deadlock**: [#33289](https://github.com/sgl-project/sglang/issues/33289) — one rank wedges in NCCL proxy append while the peer idles at request broadcast. No fix PR yet.
- **Critical — Quantized DSV4 silently drops fused `wq_a+wkv` weights**: [#33245](https://github.com/sgl-project/sglang/issues/33245) — server runs, output is garbage. No fix PR yet.
- **High — DSV4 cannot serve on SM80/Ampere**: [#33194](https://github.com/sgl-project/sglang/issues/33194) — multiple blockers after the `deep_gemm` NameError; addressed by PR [#33271](https://github.com/sgl-project/sglang/pull/33271).
- **High — DSV4 indexer OOM past ~128K context**: [#33246](https://github.com/sgl-project/sglang/issues/33246) — `num_heads`-times-oversized intermediate; also addressed by [#33271](https://github.com/sgl-project/sglang/pull/33271).
- **High — Kimi-K3 DSpark Xid 13 crash at ~218K context on B300**: [#32855](https://github.com/sgl-project/sglang/issues/32855). No fix PR yet.
- **High — HiCache silent cross-run cache collisions**: [#33268](https://github.com/sgl-project/sglang/issues/33268) — storage keys omit `kv_cache_dtype`.
- **High — DSpark + DP attention crash**: [#33286](https://github.com/sgl-project/sglang/issues/33286) — missing `original_global_num_tokens_cpu` in draft batches.
- **Medium — Gemma4 prefill materializes a quadratic dense image-attention mask**: [#33033](https://github.com/sgl-project/sglang/issues/33033).
- **Medium — XPU build break in multimodal_gen**: [#33292](https://github.com/sgl-project/sglang/issues/33292) — `CustomOp.dispatch_forward()` breaks model construction on Intel GPUs.
- **Medium — Server hang under Nsight process-tree profiling**: [#33283](https://github.com/sgl-project/sglang/issues/33283).
- **Medium — DSV4 indexer length-masking discrepancy**: [#33247](https://github.com/sgl-project/sglang/issues/33247) — two torch reference implementations disagree.
- **Fixed/in-progress — DSV4 `topk_v2` nvcc 13 crash**: PR [#32910](https://github.com/sgl-project/sglang/pull/32910) fixes [#32830](https://github.com/sgl-project/sglang/issues/32830).
- **CI status**: tracker [#17050](https://github.com/sgl-project/sglang/issues/17050) shows 1 broken, 4 flaky, and 650 recently fixed. AMD CI failure tracker: [#27937](https://github.com/sgl-project/sglang/issues/27937).

### What This Means for Application Developers
- **Do not trust quantized DeepSeek-V4 outputs yet** — [#33245](https://github.com/sgl-project/sglang/issues/33245) can produce garbage while the server looks healthy.
- **If you run DSpark across nodes or with DP attention**, watch for the deadlock/crash patterns in [#33289](https://github.com/sgl-project/sglang/issues/33289) and [#33286](https://github.com/sgl-project/sglang/issues/33286); pin to a known-good configuration until fixes land.
- **HiCache users should invalidate caches when changing KV cache dtype**, or wait for the key fix from [#33268](https://github.com/sgl-project/sglang/issues/33268).
- **Ampere users evaluating DSV4** should test against PR [#33271](https://github.com/sgl-project/sglang/pull/33271); it is the main path to unblocking SM80 serving.
- **Single-image DP vision workloads** should benefit from PR [#33307](https://github.com/sgl-project/sglang/pull/33307) once merged — significantly less cross-rank transfer.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp Digest — 2026-08-03

## 1. Today's Highlights

The DeepSeek V4 speculative-decoding stack landed in force: MTP + DSpark support merged (b10228, [PR #25784](https://github.com/ggml-org/llama.cpp/pull/25784)), followed by automatic DSpark sidecar resolution (b10231, [PR #26458](https://github.com/ggml-org/llama.cpp/pull/26458)) and SIMD-optimized Metal hyper-connection kernels (b10232, [PR #26459](https://github.com/ggml-org/llama.cpp/pull/26459)). The Metal backend also picked up SILU_BACK (b10235) and F16 binary-op support (b10234). The main risk flags are two open regressions: GLM-5.2 on ROCm/HIP (prefill ~6x slower) and SYCL long-prompt prefill on Arc B70 (~35% slower).

## 2. Releases & Breaking Changes

10 releases in the last 24 hours (b10225 → b10235). No breaking config/API changes in the shipped binaries; the notable items:

- **b10228 — DeepseekV4 MTP + DSpark** ([PR #25784](https://github.com/ggml-org/llama.cpp/pull/25784)): multi-token prediction and DSpark speculative decoding. PR note: DeepSeek did **not** ship MTP weights with the 0731 models — use DSpark sidecars for those; roughly ~50% speedup with `--spec-...`.
- **b10231 — DSpark sidecar resolution** ([PR #26458](https://github.com/ggml-org/llama.cpp/pull/26458)): `dspark-` files resolve like other speculative sidecars; `-hfd` applies, explicit `-md` disables discovery.
- **b10232 — Metal DSV4 hyper-connections** ([PR #26459](https://github.com/ggml-org/llama.cpp/pull/26459)): new ops `GGML_OP_DSV4_HC_COMB/PRE/POST` with SIMDgroup register/shuffle kernels.
- **b10227 — Qwen3 specialized chat parser** ([PR #26252](https://github.com/ggml-org/llama.cpp/pull/26252)): tagged-thinking/tool-call parsing for Qwen3 and Qwen3-Coder.
- **b10225 — MiMo V2 MTP tensors loaded only if used** ([PR #26412](https://github.com/ggml-org/llama.cpp/pull/26412)): memory savings when MTP is disabled.
- **b10226 — SYCL iGPU classification fix** ([PR #26105](https://github.com/ggml-org/llama.cpp/pull/26105)).

Heads-up for the near term: [PR #26254](https://github.com/ggml-org/llama.cpp/pull/26254) (Qwen3-TTS via mtmd) is a breaking change to the `llama-tts` binary once merged.

## 3. New Model & Hardware Support

- **DeepSeek V4 (DSv4)**: MTP + DSpark merged ([#25784](https://github.com/ggml-org/llama.cpp/pull/25784)); Metal hyper-connection ops shipped (b10232); DSv4 Flash 0731 chat template in review ([#26398](https://github.com/ggml-org/llama.cpp/pull/26398)); Metal Lightning Indexer backend in progress ([#25893](https://github.com/ggml-org/llama.cpp/pull/25893)); tracking issue: [#26369](https://github.com/ggml-org/llama.cpp/issues/26369).
- **Qwen3 chat format**: specialized parser shipped (b10227, [#26252](https://github.com/ggml-org/llama.cpp/pull/26252)); Qwen3-TTS support open ([#26254](https://github.com/ggml-org/llama.cpp/pull/26254)).
- **TML Inkling architecture**: new model support in review ([PR #25731](https://github.com/ggml-org/llama.cpp/pull/25731)) — includes a banded Flash Attention kernel and int64 indexing for large MoEs.
- **GLM 5.2**: support still requested ([#24730](https://github.com/ggml-org/llama.cpp/issues/24730)); relevant given the HIP regression below.
- **Hardware**: gfx90c/gfx909 HIP classification fix ([PR #26454](https://github.com/ggml-org/llama.cpp/pull/26454)); SYCL iGPU fix shipped (b10226); Vulkan tensor parallelism still an open request ([#22648](https://github.com/ggml-org/llama.cpp/issues/22648)).
- **Quantization**: E8-lattice 2-bit KV cache quantization at 2.125 bpe proposed ([PR #25352](https://github.com/ggml-org/llama.cpp/pull/25352)).

## 4. Performance & Optimization

**Landed:**
- Metal DSV4 hyper-connection ops use SIMDgroup register/shuffle-optimized kernels ([#26459](https://github.com/ggml-org/llama.cpp/pull/26459), b10232).
- Metal F16 bin-op support (b10234) and SILU_BACK f32 (b10235).
- MiMo V2: MTP tensors skipped at load when unused — direct memory savings for non-spec-decode serving ([#26412](https://github.com/ggml-org/llama.cpp/pull/26412), b10225).
- OpenCL ref_count fix at backend init (b10229, [#26162](https://github.com/ggml-org/llama.cpp/pull/26162)).

**In progress:**
- Suffix decoding: model-free speculative decoding with an online tree over the request ([PR #26283](https://github.com/ggml-org/llama.cpp/pull/26283)).
- OpenCL decode-side optimizations: quantized lm_head / GEMV + medium-batch GEMM for speculative decoding and MTP on Adreno ([PR #26477](https://github.com/ggml-org/llama.cpp/pull/26477)).
- CUDA/ROCm: re-enable MMA FlashAttention for head dim 256 on AMD RDNA — fixes prompt-processing regression after rocWMMA removal ([PR #26419](https://github.com/ggml-org/llama.cpp/pull/26419), fixes [#26220](https://github.com/ggml-org/llama.cpp/issues/26220)).
- SYCL unary(SiLU/sigmoid/softplus)+MUL fusion ([PR #26411](https://github.com/ggml-org/llama.cpp/pull/26411)).
- HIP: replace `__shfl_xor_sync` with DPP instructions for small decode gains ([PR #26466](https://github.com/ggml-org/llama.cpp/pull/26466)).
- ggml: futex-based yield barrier to cut spin-wait overhead ([PR #13079](https://github.com/ggml-org/llama.cpp/pull/13079)).

## 5. Stability & Regressions

Ranked by severity; fix status noted where applicable:

1. **GLM-5.2 on ROCm/HIP collapses after Indexer PR #25407** — prefill ~6x slower, load time ~40x longer on 8x MI300X ([#26445](https://github.com/ggml-org/llama.cpp/issues/26445)). No fix PR yet; HIP users should pin builds before #25407.
2. **Silent GTT fallback with context + MTP exceeding VRAM** — no load-time error; first request spills ~14.6 GB to system memory, collapsing throughput 60%+ on ROCm ([#26432](https://github.com/ggml-org/llama.cpp/issues/26432)).
3. **SYCL oneMKL Flash Attention regression** — ~35% slower 200K prompt prefill on Arc Pro B70 since b10216; workaround `MKL_FA_DISABLE=1` ([#26396](https://github.com/ggml-org/llama.cpp/issues/26396)).
4. **`GGML_ASSERT(n_inputs < GGML_SCHED_MAX_SPLIT_INPUTS)` crashes** — gemma-4-E4B on V100 ([#24132](https://github.com/ggml-org/llama.cpp/issues/24132)) and MoE partial offload ([#26152](https://github.com/ggml-org/llama.cpp/issues/26152)). Fix PR open: dynamic allocation for split graph inputs ([#22789](https://github.com/ggml-org/llama.cpp/pull/22789)).
5. **CUDA `cublasSgemm_v2` failure during spec decode + vision workloads on V100** ([#26119](https://github.com/ggml-org/llama.cpp/issues/26119)).
6. **Qwen 3.6 27B full prompt re-processing** — cache data missing, forcing re-eval; highest-activity issue (116 comments) ([#22746](https://github.com/ggml-org/llama.cpp/issues/22746)).
7. **DeepSeekV4 Flash crashes over RPC** ([#25633](https://github.com/ggml-org/llama.cpp/issues/25633)); **Blackwell SOFT_MAX crash** ([#25060](https://github.com/ggml-org/llama.cpp/issues/25060)).
8. **Grammar/tool-call issues**: json-schema `maxLength >= 2000` emits un-parseable GBNF ([#25746](https://github.com/ggml-org/llama.cpp/issues/25746)); Responses API shim drops `namespace`/`web_search` tool types, breaking Codex CLI MCP ([#24295](https://github.com/ggml-org/llama.cpp/issues/24295)).
9. **Misc**: llama-cli fails when run from another directory ([#26265](https://github.com/ggml-org/llama.cpp/issues/26265)); K/V cache type enforcement breaks models without a V cache like GLM-5.2 ([#26382](https://github.com/ggml-org/llama.cpp/issues/26382)).

## 6. What This Means for Application Developers

- **DeepSeek V4 serving**: enable DSpark sidecars for 0731-era models — MTP weights were not shipped, and the sidecar resolution in b10231 makes discovery automatic. Expect roughly 50% decode speedup with speculative decoding, but validate against the regressions in #26396/#26445 if you run SYCL or ROCm.
- **MoE / multi-backend deployments**: the `GGML_SCHED_MAX_SPLIT_INPUTS` crash remains a real risk for wide-MoE models (Gemma 4, Qwen MoE, DeepSeek) on multi-GPU or partial-offload setups. Monitor [PR #22789](https://github.com/ggml-org/llama.cpp/pull/22789) for the fix; until then, keep split counts low or pin to a known-good build.
- **GLM-5.2 / long-context on AMD**: if you serve GLM-5.2 on ROCm/HIP or run >100K-token prefill on SYCL Arc, pin to pre-#25407 / pre-b10216 builds until the regressions are resolved.
- **Qwen3 tool-calling**: the new chat parser in b10227 changes thinking/tool-call tokenization. Re-run your Qwen3 tool-calling test suite, especially for Qwen3-Coder and omitted `<tool_call>` cases.
- **Memory-constrained MTP**: MiMo V2 users who disable speculative decoding get the MTP tensor memory back automatically via b10225.
- **Watch the inference stack**: suffix decoding ([#26283](https://github.com/ggml-org/llama.cpp/pull/26283)) and E8 2-bit KV cache ([#25352](https://github.com/ggml-org/llama.cpp/pull/25352)) are both promising for reducing decode cost and KV memory — worth benchmarking when they land.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Digest — 2026-08-03

## 1. Today's Highlights
No new Ollama release landed in the last 24 hours. The most significant activity is around reliability: a long-running cloud 503 issue remains open, a tool-calling regression in 0.32.4/0.32.5 has a confirmed rollback workaround, and two scheduler/runner lifecycle PRs were opened to fix stale-runner hangs and a concurrent-request deadlock. On the API side, a PR brings the OpenAPI spec in sync with the server’s tool-call fields, and the TUI IME input bug has an associated fix.

## 2. Releases & Breaking Changes
- **None.** No new Ollama releases were published in the last 24 hours, so no new migration or breaking-change notes.

## 3. New Model & Hardware Support
- **No new model or backend support landed today.** The following user/request activity is in flight:
  - [Issue #17510](https://github.com/ollama/ollama/issues/17510) — Request for `deepseek-v4-flash:0731` local availability.
  - [Issue #16900](https://github.com/ollama/ollama/issues/16900) — Request for `Qwen-AgentWorld-35B-A3B` in the official registry.
  - [Issue #17235](https://github.com/ollama/ollama/issues/17235) — Request for Kimi K3 on Ollama Cloud.
  - [Issue #16804](https://github.com/ollama/ollama/issues/16804) — `nemotron-3-ultra:cloud` manifest appears missing from the library.
  - [PR #15325](https://github.com/ollama/ollama/pull/15325) — Closed experimental `OLLAMA_AMD_UNSAFE=1` override for unsupported AMD GPUs.
  - [PR #17420](https://github.com/ollama/ollama/pull/17420) — Closed Vulkan/AMD mmap fallback retry for unsupported configurations.

## 4. Performance & Optimization
- **Multi-GPU split underutilization:** [Issue #17523](https://github.com/ollama/ollama/issues/17523) reports that Ollama’s layer split does not account for VRAM capacity differences (RTX 4070 12GB + RTX 3060 Ti 8GB), leaving the smaller GPU underutilized.
- **Silent GPU→CPU fallback:** [Issue #14258](https://github.com/ollama/ollama/issues/14258) remains open — Ollama silently falls back to CPU execution when layers don’t fit VRAM, with no user-visible warning.
- **Memory allocation anomalies:** [Issue #17386](https://github.com/ollama/ollama/issues/17386) — `gemma4:e2b` on Windows allocates a significant amount of `CUDA_Host` pinned memory instead of VRAM; [Issue #17380](https://github.com/ollama/ollama/issues/17380) reports intermittent `CUDA error: shared object initialization failed` correlated with silent `CUDA_Host → CPU` buffer fallback.
- **Qwen loading regression:** [Issue #17517](https://github.com/ollama/ollama/issues/17517) — Qwen3.6 35B Q4_K_M is hitting memory ceilings after recent updates even at 4K context on an RTX 5070 Ti 12GB.

## 5. Stability & Regressions
Ranked roughly by severity:

- **Cloud reliability remains critical:** [Issue #15419](https://github.com/ollama/ollama/issues/15419) — frequent 503 Service Unavailable errors on Ollama Cloud models; 38 comments, 24 👍. Still open.
- **Tool-calling regression in recent versions:** [Issue #17444](https://github.com/ollama/ollama/issues/17444) — Ollama 0.32.4 and 0.32.5 break tool calling in the VS Code GitHub Copilot harness. Confirmed rollback to 0.32.1 works. No fix PR yet.
- **Account/service access outage:** [Issue #17471](https://github.com/ollama/ollama/issues/17471) — persistent 403 Forbidden and login loop on ollama.com for 8+ hours, affecting API/CLI and web.
- **Stale runner / hanging embedding:** [Issue #17428](https://github.com/ollama/ollama/issues/17428) — embedding runner stuck in `Stopping...`, causing `/api/embed` hangs. [PR #17516](https://github.com/ollama/ollama/pull/17516) adds eviction of loaded runners whose `llama-server` process has exited.
- **Scheduler deadlock:** [PR #17515](https://github.com/ollama/ollama/pull/17515) fixes a concurrent-request deadlock where evicted runners could be resurrected, blocking `processPending` forever (issue #17408).
- **Corrupt blob detection failure:** [Issue #17520](https://github.com/ollama/ollama/issues/17520) — corrupted blobs are not detected or repaired by restart/re-pull; `pull` reports success while the bad file remains.
- **Thinking-model non-termination:** [Issue #17512](https://github.com/ollama/ollama/issues/17512) — thinking models enter an unbounded self-verification loop when prompts specify an exact word count; disabling thinking works around it.
- **MLX vision models don’t receive images:** [Issue #17065](https://github.com/ollama/ollama/issues/17065) — `gemma4:12b-mlx` and `qwen3.5:4b-mlx` only see an image placeholder. [Issue #16700](https://github.com/ollama/ollama/issues/16700) is related: MLX capabilities don’t report `vision` or `audio`.
- **TUI Japanese IME bug:** [Issue #17521](https://github.com/ollama/ollama/issues/17521) — IME preedit renders outside the input box; [PR #17525](https://github.com/ollama/ollama/pull/17525) fixes cursor handling to keep IME inline.
- **`context deadline exceeded` on HF imports:** [Issue #17484](https://github.com/ollama/ollama/issues/17484) — many Hugging Face GGUF imports fail with `context deadline exceeded`.
- **DeepSeek incomplete tool calls:** [PR #17526](https://github.com/ollama/ollama/pull/17526) fixes a parser bug where a complete DeepSeek tool call is dropped if the model stops before the closing `<｜tool▁call▁end｜>` delimiter.
- **OpenAPI spec out of sync:** [PR #17519](https://github.com/ollama/ollama/pull/17519) adds missing `ToolCall.id`, `ToolCall.function.index`, `ChatMessage.tool_name`, and `ChatMessage.tool_call_id`.

## 6. What This Means for Application Developers
- **Pin Ollama versions for agent/tool-calling workloads.** If you rely on VS Code Copilot or similar harnesses, stay on 0.32.1 until the 0.32.4/0.32.5 tool-calling regression is fixed.
- **Build resilience into cloud-model callers.** Frequent 503s and 403s mean production agents should use retries with backoff, circuit breakers, and local-model fallback when available.
- **Watch for runner lifecycle hangs.** Embedding and chat requests can hang when `llama-server` subprocesses die without eviction. Use client-side timeouts and be prepared to restart Ollama; the eviction fix in PR #17516 should help once merged.
- **Monitor VRAM vs pinned-memory allocation.** Silent CPU fallback, `CUDA_Host` ballooning, and multi-GPU imbalances can degrade performance without clear errors. Expose scheduler/runner logs and check `ollama ps` plus `nvidia-smi` in validation.
- **Tool-call parsing is being hardened.** PR #17526 fixes dropped DeepSeek tool calls on abrupt stream termination — important for streaming-agent integrations. The OpenAPI spec update also improves client compatibility around tool-call IDs and indices.

*Sources: [ollama/ollama issues](https://github.com/ollama/ollama/issues), [ollama/ollama PRs](https://github.com/ollama/ollama/pulls), retrieved 2026-08-03.*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-08-03

**Data window:** 39 issues and 125 PRs updated in the last 24h.

## Today's Highlights

No new LiteLLM release shipped in the last 24h; the activity is in PRs and open-bug tracking. Most notable: a dashboard dark-mode PR (#35615) rebasing the long-running #10177 feature request, a first-class OpenAI Realtime/audio proxy PR (#35600), and a Bedrock tool-schema fix for Sonnet 4.6/Haiku 4.5 (#35617). On the stability side, Amazon Nova streaming is failing 100% (#35589) and DB-backed deployments can be dropped from the router during upsert (#35577).

## Releases & Breaking Changes

None in the last 24h. No new versions, API/config changes, or migration notes to report.

## New Model & Hardware Support

- **[PR #35600 — Realtime support for latest OpenAI audio models](https://github.com/BerriAI/litellm/pull/35600)**  
  Adds translation WebSocket and WebRTC proxy paths for OpenAI audio/realtime models, using OpenAI SDK 2.52 for streaming support. Also brings spend tracking and budget enforcement to WebRTC traffic that previously bypassed them.

- **[PR #35617 — Bedrock: drop strict/additionalProperties from toolSpec for Sonnet 4.6 and Haiku 4.5](https://github.com/BerriAI/litellm/pull/35617)**  
  Fixes Bedrock Converse rejecting `toolSpec.strict` on Sonnet 4.6 / Haiku 4.5, which produced a compiled-grammar error and 504 timeouts. This is model-specific compatibility work rather than a new provider, but it is important for Claude tool-calling users on Bedrock.

## Performance & Optimization

No concrete throughput/latency/memory benchmarks landed in this window. Relevant operational/performance items:

- **[Issue #35460 — MCPServerManager re-probes list_prompts/list_resources on every request](https://github.com/BerriAI/litellm/issues/35460)**  
  Aggregate `/mcp` requests re-call `list_prompts()` / `list_resources()` on every backing server, including servers that do not implement those ops. Adds avoidable latency to MCP-heavy gateways.

- **[PR #35618 — Headroom: log a zero-savings run when nothing is compressible](https://github.com/BerriAI/litellm/pull/35618)**  
  Improves cost-compression observability by recording a zero-savings guardrail entry instead of silently doing nothing when all messages are protected.

- **[Issue #26620 — Docs: nproc in Kubernetes returns host CPU count, not pod limit](https://github.com/BerriAI/litellm/issues/26620)**  
  The documented `--num_workers "$(nproc)"` recommendation can over-allocate workers in Kubernetes because `nproc` reflects the host, not the pod CPU limit. This is a deployment-performance correctness issue.

## Stability & Regressions

Ranked by severity:

1. **[Issue #35589 — Amazon Nova streaming fails 100% due to zstd decoder reuse](https://github.com/BerriAI/litellm/issues/35589)**  
   Every streaming call to `amazon_nova` fails with `httpx.DecodingError: cannot use a decompressobj multiple times` on Nova's multi-frame SSE. Non-streaming succeeds. No fix PR yet.

2. **[Issue #35577 — New DB deployments dropped during router upsert](https://github.com/BerriAI/litellm/issues/35577)**  
   DB-backed deployments are removed from a proxy pod's in-memory router when first loaded through `Router.upsert_deployment()`, breaking model availability on first-time load.

3. **[Issue #35524 — Budget reservation skipped when request cost cannot be estimated](https://github.com/BerriAI/litellm/issues/35524)**  
   The optimistic budget reservation path returns without reserving anything when max cost is unknown. That leaves budgets exposed to concurrent overspend on models/routes that cannot be cost-estimated up front.

4. **[Issue #35599 — /v1/rag/query does not resolve vector store credentials from registry](https://github.com/BerriAI/litellm/issues/35599)**  
   `/v1/rag/query` calls `litellm.vector_stores.asearch()` directly, bypassing the `vector_store_registry` credential-resolution path used by `/v1/vector_stores/{id}/search`.

5. **[Issue #35608 — Databricks cost calculator ignores cached/audio/reasoning tokens](https://github.com/BerriAI/litellm/issues/35608)**  
   Hand-rolled cost math bills every prompt token at full input rate. Fix PR exists: **[PR #35616](https://github.com/BerriAI/litellm/pull/35616)** delegates to `generic_cost_per_token`.

6. **[Issue #35177 — user_url_allowed_hosts ignored under litellm_settings](https://github.com/BerriAI/litellm/issues/35177)**  
   Works under `general_settings` but not `litellm_settings`, breaking A2A/LangGraph agent host allowlisting for proxy v1.93.0.

7. **[Issue #34105 — Bedrock Converse silently drops reasoning_effort for non-Anthropic/Nova2/GPT-OSS models](https://github.com/BerriAI/litellm/issues/34105)**  
   Qwen3 and other Bedrock-hosted models receive no `reasoning_effort` even when requested.

8. **[Issue #35582 — aresponses silently drops the stop parameter](https://github.com/BerriAI/litellm/issues/35582)**  
   No `UnsupportedParamsError` or warning; `stop` is filtered out before provider mapping. Closed, but worth tracking if you rely on it for Responses API.

9. **[Issue #35605 — make test-unit fails on fresh clone due to duplicate test basenames](https://github.com/BerriAI/litellm/issues/35605)**  
   Test collection fails with duplicate basename import errors. Blocks contribution workflow until fixed.

## What This Means for Application Developers

- **If you use OpenAI Realtime/audio models**, watch **[PR #35600](https://github.com/BerriAI/litellm/pull/35600)**. It adds translation WebSocket/WebRTC proxy paths and closes spend-tracking gaps for WebRTC traffic.

- **If you use Bedrock with Claude Sonnet 4.6 or Haiku 4.5 tools**, the `strict`/`additionalProperties` forwarding bug from v1.90.0 causes 504s. Track **[PR #35617](https://github.com/BerriAI/litellm/pull/35617)** for the fix.

- **Amazon Nova streaming is currently broken** — if your app depends on streamed Nova responses, you may need to fall back to non-streaming until **[#35589](https://github.com/BerriAI/litellm/issues/35589)** is resolved.

- **Budget enforcement has a known gap**: when request cost cannot be estimated, no budget reservation is made. Do not rely on LiteLLM budgets alone for unknown-cost models or routes.

- **MCP-heavy gateways** should be aware of the repeated `list_prompts` / `list_resources` probing in aggregate `/mcp` requests ([#35460](https://github.com/BerriAI/litellm/issues/35460)); caching or capability detection should be added to avoid per-request probing.

- **Databricks usage billing is currently inaccurate** for cached, audio, and reasoning tokens; the fix in [#35616](https://github.com/BerriAI/litellm/pull/35616) is worth tracking if you report Databricks spend downstream.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth Digest — 2026-08-03

## 1. Today's Highlights
No releases landed in the last 24h; the activity is concentrated on hardening the Unsloth Studio desktop path and expanding hardware support. Notably, [#7717](https://github.com/unslothai/unsloth/pull/7717) fixes GGUF garbage output on virtualised Apple GPUs by pinning inference to CPU and clamping parallel slots under MTP, while [#7706](https://github.com/unslothai/unsloth/pull/7706) adds Intel Arc (XPU) detection and PyTorch install to the Windows installer. On the backend side, [#7742](https://github.com/unslothai/unsloth/pull/7742) brings stall detection and memory caps to Xet hub downloads, addressing the absurd 753-day ETA reported in [#7667](https://github.com/unslothai/unsloth/issues/7667), and [#7629](https://github.com/unslothai/unsloth/pull/7629) replaces the singleton prompt queue with independent per-chat queues for parallel dispatch.

## 2. Releases & Breaking Changes
No new releases in the last 24h. Two in-flight config surface changes are worth watching (both additive, no migration required yet):

- [#7701](https://github.com/unslothai/unsloth/pull/7701): adds first-class `reasoning_budget` / `reasoning_budget_message` GGUF load settings, exposed in Studio per-model advanced settings and persisted across reloads, model switches, presets, and API auto-switches. Preserves llama-server passthrough and `LLAMA_ARG_*` parity.
- [#7758](https://github.com/unslothai/unsloth/pull/7758): forwards client `reasoning_content` to llama-server for opt-in `preserve_thinking`, restoring the "inbound half" of the Qwen3.x thinking fix.

Dependency churn is pending via dependabot PRs [#7759](https://github.com/unslothai/unsloth/pull/7759) (10 updates) and [#7586](https://github.com/unslothai/unsloth/pull/7586) (9 updates, closed) — datasets, huggingface-hub, pymupdf, transformers, etc. — none merged in this window.

## 3. New Model & Hardware Support
- **Intel Arc / XPU (Windows)**: [#7706](https://github.com/unslothai/unsloth/pull/7706) fixes the installer's GPU detection chain, which previously only checked NVIDIA (CUDA) and AMD (ROCm), causing Intel Arc/Iris/UHD/HD GPUs to fall through to the CPU-only Torch path. Adds WMI-based Intel detection and a Torch XPU availability check.
- **Audio input on Apple Silicon**: [#7699](https://github.com/unslothai/unsloth/pull/7699) adds an audio input path to Studio chat on the MLX backend (Gemma 3n, Gemma 4, MiniCPM-o on Mac), which previously reported no audio capability and exposed no attach control.
- **Nemotron attention**: [#7527](https://github.com/unslothai/unsloth/issues/7527) is the open tracking issue for Nemotron attention handling; no linked fix PR in this window.

## 4. Performance & Optimization
No concrete throughput/latency numbers were published in this window. Two changes with serving-relevant impact:

- **Parallel chat dispatch**: [#7629](https://github.com/unslothai/unsloth/pull/7629) replaces the singleton active-chat prompt queue with independent per-chat FIFO queues that survive navigation. Ready chats now dispatch in parallel under the inference backend's concurrency cap, eliminating head-of-line blocking across concurrent agent chats.
- **Download path robustness**: [#7742](https://github.com/unslothai/unsloth/pull/7742) adds stall detection to Xet hub transfers (which previously had none — a hung transfer never produced an exit code) plus Xet memory caps. A hang that previously froze inference workers indefinitely now errors out.

## 5. Stability & Regressions
Ranked by severity:

1. **Pi agent streaming hangs — unfixed**: [#7617](https://github.com/unslothai/unsloth/issues/7617). API streaming to Pi agents frequently hangs and requires manual intervention. One comment, no fix PR attached yet. Highest impact for API/agent workloads.
2. **Nemotron attention bug — open**: [#7527](https://github.com/unslothai/unsloth/issues/7527). 2 comments, no linked fix.
3. **Qwen3.5-35B-A3B misread as 3B — fix in review**: [#7758](https://github.com/unslothai/unsloth/pull/7758). [#7289](https://github.com/unslothai/unsloth/pull/7289) shipped only the size-gate half of the thinking fix, so reasoning was disabled by default on 35B. The inbound half (client `reasoning_content` → llama-server) is restored in this PR. Fixes [#5846](https://github.com/unslothai/unsloth/issues/5846).
4. **GGUF gibberish on virtualised Apple GPUs — fix in review**: [#7717](https://github.com/unslothai/unsloth/pull/7717). Same model/quant gave garbage on virtualised Metal; fixed by pinning GGUF to CPU on virtualised Metal and clamping parallel slots under MTP.
5. **Xet download ETA stall**: [#7667](https://github.com/unslothai/unsloth/issues/7667). The hub download card reads "102 B/s, 753d 5h left" seconds into a 6.8 GB download. Addressed by the stall detection in [#7742](https://github.com/unslothai/unsloth/pull/7742).
6. **Damaged `.venv_t5_*` sidecars — closed**: [#7715](https://github.com/unslothai/unsloth/issues/7715). Sidecars validated only by directory + METADATA version, so truncated files caused worker death on Transformers 5.x export. Issue closed; no fix PR visible in this window.
7. **Literal `</think>` leaking reasoning**: [#7334](https://github.com/unslothai/unsloth/pull/7334). Chat-template control markup in user messages/system prompts/tool results was read as the structural end of a reasoning block, leaking thoughts into visible answers. Fix neutralizes the markup before rendering.
8. **Windows `unsloth.exe` lock misreported as permissions**: [#7740](https://github.com/unslothai/unsloth/pull/7740). Windows locks the directory entry an image was launched from, not the file; the PR explains the lock instead of surfacing a misleading ACL error. Closes [#7697](https://github.com/unslothai/unsloth/issues/7697).
9. **Studio installer/startup races**: [#7764](https://github.com/unslothai/unsloth/pull/7764) serializes installer runs and coordinates Windows managed-environment replacement with Tauri backend startup, stopping before rollback if Studio is in use. [#7763](https://github.com/unslothai/unsloth/pull/7763) resolves Python PATH shims to the underlying CPython and validates the managed venv interpreter launches before GPU detection or package install.
10. **`revision` parameter ignored**: [#4222](https://github.com/unslothai/unsloth/pull/4222). `FastLlamaModel.from_pretrained` declared `revision` but never read it — config, weights, and tokenizer all loaded from the resolved default. Fix forwards revision to all three loads; rebased to current `main` this week.
11. **CI/test infra**: [#7760](https://github.com/unslothai/unsloth/pull/7760) fixes the Playwright model-config job failing on `main` since [#7736](https://github.com/unslothai/unsloth/pull/7736) (run-settings must open via the gear icon, not row selection). [#7753](https://github.com/unslothai/unsloth/pull/7753) makes the Pester guard run on Windows without the smoke suite, after a Windows-only guard bug slipped through. [#7757](https://github.com/unslothai/unsloth/pull/7757) guards llama.cpp/whisper.cpp probes on ACL-denied install trees.
12. **UI regression**: [#7762](https://github.com/unslothai/unsloth/pull/7762). Opening Data Recipes from an empty local dataset search reloaded the Tauri window, which was mistaken for a backend repair and cancelled active model downloads; now uses in-app navigation.

## 6. What This Means for Application Developers
- **Parallel agent chats**: if you run multiple agent sessions against Studio's inference backend, [#7629](https://github.com/unslothai/unsloth/pull/7629) removes cross-chat head-of-line blocking — one slow chat no longer stalls the others.
- **Pi/API streaming**: [#7617](https://github.com/unslothai/unsloth/issues/7617) remains unfixed. Keep a watchdog/retry on streaming responses if you depend on the remote/agent path.
- **Reasoning-critical apps**: after [#7758](https://github.com/unslothai/unsloth/pull/7758) merges, opt in to `preserve_thinking` if you need reasoning content on Qwen3.5-35B; current main strips it due to the size misread.
- **Hardware targets**: Intel Arc becomes a first-class Windows target ([#7706](https://github.com/unslothai/unsloth/pull/7706)) — XPU installs will no longer silently fall back to CPU-only Torch. On virtualised macOS, expect GGUF inference to be CPU-pinned for correctness ([#7717](https://github.com/unslothai/unsloth/pull/7717)); on physical Apple Silicon, MLX audio input is landing ([#7699](https://github.com/unslothai/unsloth/pull/7699)).
- **Training workflow**: the train page setup is being reworked into a wizard with shared resource pickers, cache-aware model/dataset resolution, and artifact-aware training history ([#7633](https://github.com/unslothai/unsloth/pull/7633)) — worth accounting for in any UI automation or scripting around Studio training runs.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*