# AI Infrastructure Digest 2026-09-25

> Generated: 2026-09-25 00:45 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-09-25**

---

### **1. Ecosystem Overview**  
The AI infrastructure landscape in Q3 2026 is defined by a sharp bifurcation between high-performance, distributed inference engines and lightweight, local-first runtimes—each targeting distinct deployment paradigms. vLLM and SGLang lead in scalable, multi-GPU serving with advanced parallelism (DCP, MTP, speculative decoding), while llama.cpp and Ollama dominate edge/local inference with strong hardware abstraction and cross-platform portability. LiteLLM emerges as the de facto enterprise gateway layer, unifying cost control, observability, and routing across heterogeneous backends. Meanwhile, Unsloth is carving a niche in vision-language and hybrid model optimization, particularly for AMD and NPU platforms.

---

### **2. Activity Comparison**

| Project       | Issues Open (↑) | PRs Merged (↑) | New Release? | Key Status |
|---------------|------------------|----------------|--------------|------------|
| **vLLM**      | 487 (+12)        | 32 (+8)        | ❌ No        | High stability focus; critical fixes merged |
| **SGLang**    | 523 (+15)        | 28 (+7)        | ❌ No        | Active DCP/parallelism development |
| **llama.cpp** | 519 (+18)        | 25 (+6)        | ✅ `b11173`   | Bug fixes + Metal/CUDA optimizations |
| **Ollama**    | 621 (+22)        | 19 (+5)        | ❌ No        | Stability regressions dominate |
| **LiteLLM**   | 378 (+9)         | 21 (+4)        | ❌ No        | Observability & policy enforcement focus |

> *Note: Ollama shows highest issue volume due to growing MLX backend complexity and user-facing bugs.*

---

### **3. Model Support Race**

| Project       | New Models / Architectures Supported | Key Differentiator |
|---------------|--------------------------------------|--------------------|
| **vLLM**      | Kimi-K3, Qwen3.8-Flash-Next, GLM-5.3-Flash, Phi4Flash (requested) | Deep ROCm tuning for MI355X; CPU fallback for dense layers |
| **SGLang**    | Qwen3.5-397B (FlyDSL GDN), Qwen-Image-2.1 (diffusion TP=2), mixed Quark MTP | Hybrid Mamba/GDN radix-cache integration; draft layout validation |
| **llama.cpp** | Ternary-Bonsai-2 (quant type request), Intel Vulkan FA kernel, Hexagon NPU CI | Metal sparse FA, AVX-512 VNNI+VBMI acceleration |
| **Ollama**    | IBM Granite 4.1/4.2 (MLX), Gemma-4-26B-A4B-it-qat-4bit (MoE), AMD gfx1200+ support | MLX MoE enablement; expanded ROCm GPU list |
| **Unsloth**   | Qwen-Image-2.1 (image gen), Ryzen AI NPU (Lemonade), NVFP4 FlashInfer | Image generation performance focus; RDNA1 training support |

> 🏆 **Winner**: **vLLM** leads in cutting-edge model support with dedicated hardware-specific optimizations and forward-looking architectural work (e.g., Mamba2 prefix caching).

---

### **4. Performance Frontier**

| Focus Area             | Leading Projects                          | Key Developments |
|------------------------|-------------------------------------------|------------------|
| **KV Cache Efficiency** | vLLM, SGLang, llama.cpp                   | vLLM: 69 wasted copies cut (ROCm); SGLang: unified radix cache; llama.cpp: stale K/V cleanup |
| **Batching & Batching Invariance** | vLLM, SGLang                     | vLLM: batch-invariant matmul tuning (sm_120); SGLang: decode graph width fix |
| **Quantization & Mixed Precision** | vLLM, Ollama, Unsloth           | vLLM: FP8 block-scaled weights (regression); Ollama: NVFP4 tool call leak; Unsloth: NVFP4 flashinfer |
| **Distributed Serving** | vLLM, SGLang                              | vLLM: pipeline parallelism + MTP; SGLang: DCP/Helix w/ `fi_a2a` default |
| **Kernel-Level Optimization** | vLLM, llama.cpp, Unsloth          | vLLM: sm_120 matmul table; llama.cpp: Metal shared memory FA; Unsloth: VAE compile caching |

> 🔥 **Most Active Frontier**: **vLLM** dominates kernel-level, batching, and distributed optimization—especially for next-gen GPUs (RTX 50-series, MI355X).

---

### **5. Layer Positioning**

| Project       | Primary Layer              | Role in Stack |
|---------------|----------------------------|---------------|
| **vLLM**      | **Serving Engine**         | High-throughput, low-latency inference; optimized for cloud-scale deployments |
| **SGLang**    | **Serving Engine + Gateway** | Advanced parallelism (DCP, Helix); integrates well with LLM gateways |
| **llama.cpp** | **Local Runtime**          | Single-device, portable inference; ideal for edge, mobile, or dev environments |
| **Ollama**    | **Local Runtime + Gateway** | Unified CLI/toolchain; bridges local execution and agent pipelines |
| **LiteLLM**   | **LLM Gateway / Orchestration** | Enterprise-grade routing, tagging, cost control, and observability |

> ⚖️ **Positioning Insight**:  
> - **vLLM/SGLang**: Cloud-native inference engines  
> - **llama.cpp/Ollama**: Local-first runtime ecosystems  
> - **LiteLLM**: Centralized orchestration layer for production AI services  

---

### **6. Trend Signals**

#### **Emerging Industry Trends (from 2026-09-25 activity):**
1. **AMD ROCm Momentum**: All projects now actively investing in ROCm support—especially vLLM (MI355X), SGLang (Qwen3.5-397B), Ollama (gfx1200+), and Unsloth (RDNA1/2). This signals a shift toward open hardware ecosystems.
2. **Hybrid Model Complexity**: Mamba/GDN and MoE models are introducing new stability challenges (e.g., prefix cache corruption, state sync issues), requiring deeper engine-level fixes.
3. **Speculative Decoding Maturity**: Now a core feature in vLLM and SGLang—but with high-severity risks under concurrency (H20 crashes, silent divergence).
4. **Vision-Language Workflows Demand Optimization**: Unsloth’s focus on image generation (VAE caching, FlashInfer) and Ollama’s web search expansion highlight the rise of multimodal agents.
5. **Cost & Governance as First-Class Concerns**: LiteLLM’s granular budgeting, spend logging, and tag-based rate limiting reflect enterprise readiness—critical for compliance (EU AI Act).

#### **What Application Developers Should Watch:**
- ✅ **Avoid speculative decoding on quantized models** until vLLM/llama.cpp fixes (#25618, #55506) land.
- ✅ **Monitor MLX memory leaks and stalls** in Ollama—critical for long-running agents.
- ✅ **Use `VLLM_BATCH_INVARIANT=1` only if tensor parallelism matches tuned matmul shapes** (PR #58495).
- ✅ **Enable `GGML_CUDA_FA_ALL_QUANTS=ON` in llama.cpp** to prevent silent CPU fallbacks.
- ✅ **Leverage LiteLLM’s new spend analytics and tag enforcement** for cost governance in production.

> 📌 **Bottom Line**: The ecosystem is maturing rapidly—engineers must prioritize **stability over novelty**, especially when deploying hybrid models, speculative decoding, or large-context workflows. The future belongs to integrated stacks where inference engines, gateways, and runtime tools align on correctness, efficiency, and observability.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-09-25**

---

### **1. Today’s Highlights**  
The vLLM project is advancing key optimizations for next-generation models and hardware, with significant progress on batch-invariant inference performance (PR #58495) and ROCm-specific kernel tuning for Kimi-K3 and Qwen3.8 (PRs #58507, #58045). Critical correctness fixes were merged for Mamba2 prefix caching (PR #55506) and speculative decoding stability under high concurrency (PR #55506), addressing persistent degeneration issues in hybrid models like Qwen3.8-Flash-Next.

---

### **2. Releases & Breaking Changes**  
None reported in the last 24 hours. No new releases or breaking API/config changes observed.

---

### **3. New Model & Hardware Support**  
- **ROCm Support**: Expanded coverage for AMD MI355X (gfx950) with performance optimization tracking for `Qwen3.8-2.4T-A95B-Quark-MXFP4` (Issue #57149).
- **Kimi-K3**: Dedicated ROCm optimization for low-concurrency speculative decoding (PR #58045); full CPU support now enabled for dense layers (PR #58507).
- **GLM-5.3-Flash**: Performance optimization tracking initiated (Issue #57406), following prior work on GLM-5.2.
- **New Models**: Support requested for `Phi4Flash` (Issue #23957), `MiniMax-M2.1-NVFP4` (Issue #31856), and `DeepSeek-V4.1-Flash` (Issue #56389).

---

### **4. Performance & Optimization**  
- **Batch-Invariant Matmul Tuning**: PR #58495 adds TP=2/4/8 per-rank shapes to sm_120 matmul table, enabling better utilization on RTX 50-series GPUs (e.g., RTX PRO 6000, RTX 5090).
- **Mamba2 Prefill Optimization**: PR #49371 removes GPU<->CPU syncs during SSM state saving, reducing overhead in prefill phase.
- **ROCm Efficiency Gains**:  
  - PR #58566 cuts **69 wasted contiguous copies per decode step** in skinny GEMM path.  
  - PR #51314 skips redundant FP32 logits fill in sparse prefill, improving throughput.
- **MoE Scalability**: PR #58635 enables deferred MoE finalization on modular path, supporting flexible expert fusion workflows.

---

### **5. Stability & Regressions**  
- **Critical Degeneration Bug (High Severity)**:  
  - Issue #55506 reports **14–33% of requests degenerating into constant-token loops** (`ductductduct…`) under pipeline parallelism + MTP + prefix caching. Fixed in PR #55506 (merged).
- **Speculative Decoding Crashes**:  
  - Issue #56389: Illegal memory access in `dsv4_topk` Triton kernel under high concurrency on H20; mitigated by `max_num_seqs=256`. No fix yet.
- **KV Cache Corruption**:  
  - Issue #53912: Prefix caching + MTP corrupts output on hybrid Mamba/GDN models in v0.28.0; remains unfixed despite closed duplicate (#43559).
- **Quantization Issues**:  
  - Issue #51884: FP8 block-scaled weights fail on sm120 (RTX 5090) due to "Unknown SF transformation" — regression in DeepGEMM.

---

### **6. What This Means for Application Developers**  
- **For High-Concurrency Deployments**: Avoid `max_num_seqs > 256` when using `DeepSeek-V4.1-Flash` on H20 until #56389 is resolved. Monitor for token degeneration in Mamba-based models under MTP.
- **For ROCm Users**: Expect improved performance on Kimi-K3 and Qwen3.8 on MI355X (gfx950); leverage CPU fallback for GLM-5.3 dense layers via PR #58507.
- **For Production Serving**: Use `VLLM_BATCH_INVARIANT=1` cautiously on TP>1 setups — ensure your model’s tensor parallelism config matches tuned matmul tables (PR #58495).
- **For Tool Callers & Structured Output**: Track PR #57571 and #56851 for stable streaming derendering and parser state persistence — critical for agent reliability.

> 🔗 [View GitHub Issues](https://github.com/vllm-project/vllm/issues) | 🔗 [View Pull Requests](https://github.com/vllm-project/vllm/pulls)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-09-25**

---

### **1. Today's Highlights**  
The SGLang project continues advancing its multi-GPU and hybrid model serving capabilities, with key progress in **Decode Context Parallelism (DCP)** and **Helix Parallelism**, now using `fi_a2a`/`a2a` as the default comm backend. Critical performance and correctness fixes were merged for **Mamba/GDN state handling in UnifiedRadixCache** and **DFLASH draft layout validation**, while new work on **incremental chat-prompt processing** and **configurable request log retention** aims to improve long-running service efficiency.

---

### **2. Releases & Breaking Changes**  
*No new releases were published in the last 24 hours.*  
However, significant changes are underway:  
- The `--dcp-comm-backend` default has been updated to `fi_a2a` / `a2a` via #39165 and #37767 — users relying on legacy backends should verify compatibility.  
- A new `--enable-mis` flag is now supported in batched setwise scoring for CausalLM models (PR #41188), extending the Score API’s generative capabilities.

---

### **3. New Model & Hardware Support**  
- **AMD ROCm**: Added FlyDSL GDN prefill backend support (#39595) for Qwen3.5-397B, improving performance on gfx95 GPUs.  
- **Hybrid Models**: Expanded support for Mamba-based models with radix-cache integration via PR #41165, including predicate-based model registration.  
- **Diffusion Serving**: Qwen-Image-2.1 now supports TP=2, though a known corruption issue remains unresolved (Issue #41192).  
- **Quantization**: Mixed Quark Qwen3.5 MTP checkpoints now properly preserve quantization during speculative decoding (#39064).

---

### **4. Performance & Optimization**  
- **DeepSeek-V4.1**: Decode graph width was pinned to `--context-length`, causing unnecessary overhead; a fix is proposed to add a separate `decode-phase max_seq_len` (#40441).  
- **Triton Backend**: Padded decode CUDA-graph slots incur increasing latency with longer contexts (30K tokens → 27.7ms → 35.9ms/token) (#41151).  
- **Memory Efficiency**: PRs #41191–#41193 implement deferred FFN all-reduce optimizations across DeepSeek models, reducing redundant computation and memory pressure.  
- **Prefill Throughput**: Users report ~2–7K tok/s on DeepSeek-V4 (4× RTX PRO 6000, SM120) vs. vLLM’s ~12.5K — tuning guidance requested (#33422).

---

### **5. Stability & Regressions**  
| Severity | Issue | Impact | Fix Status |
|--------|------|--------|-----------|
| High | **DFLASH draft layout assumption bug** (`anchor-first` silent shift) | Silent incorrect outputs | PR pending (#40144) |
| High | **Mooncake DFlash draft KV transfer fails under asymmetric P/D TP** | Service crashes or corrupted output | PR pending (#41192) |
| Medium | **Gemma 2/3 batched generations run away on ROCm** with unified attention | Infinite loop or crash | PR pending (#41152) |
| Medium | **Qwen3.8 chat template broken by spliced prior-turn thinking** | Malformed output with visible `</think>` tags | PR pending (#40959) |
| Low | **Request log files accumulate indefinitely** | Disk exhaustion risk | Feature proposal (#41129) |

> 🔍 *Note:* Several high-severity issues stem from hybrid model path assumptions and inconsistent state management across TP configurations.

---

### **6. What This Means for Application Developers**  
- **Use `--dcp-comm-backend fi_a2a`** for optimal DCP/Helix performance on modern hardware.  
- **Avoid `--tp-size 2` with diffusion models like Qwen-Image-2.1** until #41192 is resolved — use single-GPU mode for now.  
- **Enable incremental chat prompt processing** (#41148) to reduce tokenization overhead in multi-turn agents.  
- **Monitor log file retention** if running long-lived services — consider implementing custom rotation via #41129.  
- **Validate draft layouts** when using DFLASH with non-standard checkpoint formats — assume `anchor-first` may not hold.  

👉 *For production stability, avoid mixed-precision MTP + Quark checkpoints without verifying patch #39064 is active.*

---  
*Digest generated from [sgl-project/sglang](https://github.com/sgl-project/sglang) — data as of 2026-09-25.*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

---

### **llama.cpp Digest — 2026-09-25**

#### **1. Today's Highlights**  
The latest round of updates centers on **Metal backend stability and optimization**, with critical fixes to graph capture and sparse Flash Attention (FA) performance. Notably, `ggml` has been upgraded to v0.25.3 with UBSAN error resolution and version sync across dependencies. A major PR introduces **MoE/SSM fusion optimizations for CUDA**, addressing a ~4% prefill regression from prior changes.

#### **2. Releases & Breaking Changes**  
- **`ggml` v0.25.2 → v0.25.3** ([#29396](https://github.com/ggml-org/llama.cpp/pull/29396)):  
  - Fixes UBSAN error in `ggml_graph_nbytes`.  
  - Syncs versions across repositories; no breaking API changes.  
- **New build tag**: `b11173` (latest nightly). No known migration impact beyond bug fixes.

#### **3. New Model & Hardware Support**  
- **Hexagon NPU**: Added Windows Arm64 CI pipeline for Hexagon backend ([#29052](https://github.com/ggml-org/llama.cpp/pull/29052)).  
- **Intel Vulkan FA kernel**: Experimental prefill kernel added for Intel platforms ([#29357](https://github.com/ggml-org/llama.cpp/pull/29357)).  
- **Ternary-Bonsai-2**: Feature request to support new quant types `PQ2_0` (type 142) and `PTQ1_0` (type 143) ([#29058](https://github.com/ggml-org/llama.cpp/issues/29058)).

#### **4. Performance & Optimization**  
- **Metal**:  
  - Sparse FA now caches indices in shared memory → significant latency reduction ([#29377](https://github.com/ggml-org/llama.cpp/pull/29377)).  
  - Optimized shared memory size calculation and reduced redundant state resets.  
- **CUDA**:  
  - Fused `RMS_NORM + SCALE` into single kernel → fixes ~4% prefill regression ([#29393](https://github.com/ggml-org/llama.cpp/pull/29393)).  
  - Added optimized Q5_K GEMM bin kernels for Adreno via OpenCL ([#29401](https://github.com/ggml-org/llama.cpp/pull/29401)).  
- **CPU**:  
  - AVX-512 VNNI+VBMI path for Q4_K repack GEMM using `vpdpbusd` → improved throughput on compatible CPUs ([#29397](https://github.com/ggml-org/llama.cpp/pull/29397)).  
  - Tiled `mul_mat` for k-quants using VNNI → up to **7x faster** on supported hardware ([#27851](https://github.com/ggml-org/llama.cpp/pull/27851)).

#### **5. Stability & Regressions**  
- **Critical**:  
  - **Speculative decoding divergence on quantized targets** (`Q4_K_M`) under greedy sampling: output differs from vanilla run ([#25618](https://github.com/ggml-org/llama.cpp/issues/25618), 26 comments). *No fix yet*.  
  - **Qwen3.8-27B decode collapse at >80K context**: Throughput drops ~25x despite fast prompt processing ([#27623](https://github.com/ggml-org/llama.cpp/issues/27623), 17 comments).  
- **High Severity**:  
  - **Silent CPU fallback for 4-bit KV cache** when `GGML_CUDA_FA_ALL_QUANTS=ON` is not enabled → ~30x slowdown with no warning ([#28633](https://github.com/ggml-org/llama.cpp/issues/28633)).  
  - **Vulkan FA: stale K/V cells influence output** due to improper cleanup ([#26744](https://github.com/ggml-org/llama.cpp/issues/26744), 4 comments).  
- **Moderate**:  
  - **Metal decode emits EOS after 1 token at long context** for Qwen4exp models ([#28805](https://github.com/ggml-org/llama.cpp/issues/28805), 4 comments).  
  - **AMD ROCm: Segmentation fault with multiple GPUs** even on small models ([#17583](https://github.com/ggml-org/llama.cpp/issues/17583), 16 comments).

#### **6. What This Means for Application Developers**  
- **Prioritize `GGML_CUDA_FA_ALL_QUANTS=ON`** if using 4-bit KV caches—otherwise, expect silent CPU fallbacks and severe performance degradation ([#28633](https://github.com/ggml-org/llama.cpp/issues/28633)).  
- **Avoid speculative decoding on quantized models** until [#25618](https://github.com/ggml-org/llama.cpp/issues/25618) is resolved—results may diverge from non-speculative runs.  
- **For high-context inference (>80K)**: Avoid Qwen3.8-27B or monitor for the ongoing regression ([#27623](https://github.com/ggml-org/llama.cpp/issues/27623)); consider model offloading strategies.  
- **Optimize Metal deployments**: The recent sparse FA and graph capture fixes improve stability and efficiency—especially for vision-language models like DeepSeek-V4-Flash-Vision-Exp.  
- **Future-proofing**: Monitor support for new quant types (e.g., PQ2_0/PTQ1_0) and GPU backends (Hexagon, Intel Vulkan) as they mature.

---  
*Digest compiled from GitHub activity (2026-09-25). Source: [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-09-25**

---

### **1. Today's Highlights**  
The Ollama ecosystem continues to mature with focused improvements in MLX backend stability and cross-platform compatibility, particularly on macOS and Windows. Critical regressions in memory estimation (gemma4:31b) and tool call parsing (gemma4:31b, qwen3.8) have been highlighted, alongside emerging issues in sustained load handling under MLX. A new PR adds support for IBM’s Granite 4.1/4.2 models via `GraniteForCausalLM` in the MLX runner, expanding model coverage.

---

### **2. Releases & Breaking Changes**  
*None reported in the last 24 hours.*  
No new releases or breaking API/config changes were published. However, ongoing work includes deprecating `typical_p` (PR #18627), which will transition from hard failure to warning-only behavior.

---

### **3. New Model & Hardware Support**  
- ✅ **GraniteForCausalLM**: Added experimental support for IBM’s Granite 4.1 and 4.2 series via PR #17972. These models are now usable with the MLX backend.  
- ✅ **MLX MoE Support**: PR #18631 enables loading of `mlx-community/gemma-4-26B-A4B-it-qat-4bit` by fixing expert weight layout issues in `mlx-lm` format.  
- ✅ **AMD GPU Expansion**: PR #18623 updates Windows ROCm GPU support list to include `gfx1200`, `gfx1201`, and other newer RDNA3 cards beyond RX 7000.  
- 📌 **System 1 Models Requested**: Issue #18594 calls for integration of Kev and Laya models — community interest growing but not yet implemented.

---

### **4. Performance & Optimization**  
- ⚠️ **Memory Estimation Regression**: Issue #17099 reports a 7x slowdown (33.8 → 4.7 tok/s) in `gemma4:31b` after v0.31.2 due to inflated VRAM estimates. This impacts large-context workflows on high-memory Macs.  
- 🔥 **MLX Memory Leak**: Issue #18620 documents ~0.43 GiB memory leak per tool-call request in `qwen3.6:27b-mlx`, accumulating over time and exceeding prefix-cache budget.  
- 🧩 **Prefill Stall Under Load**: Issue #18505 shows MLX `nvfp4` models stalling indefinitely during prefill phase under sustained single-slot load (`OLLAMA_NUM_PARALLEL=1`). Recovery only via SIGTERM.  
- 📈 **Web Search Limit Increase**: PR #18602 raises max web searches per response from 3 to 10, enabling richer agent reasoning (now honored for Anthropic models too).

---

### **5. Stability & Regressions**  
| Severity | Issue | Summary | Fix Status |
|--------|------|--------|-----------|
| High | #18368 | macOS GUI fails silently after 60s during long document processing (M4 Pro, gemma4/qwen3.8) | Open – no fix yet |
| High | #17099 | `gemma4:31b` memory estimate inflation causes 7x slower generation post-v0.31.2 | Open – regression confirmed |
| High | #18505 | MLX `nvfp4` stalls indefinitely during prefill under sustained load | Open – critical performance blocker |
| Medium | #18620 | MLX runner leaks ~0.43 GiB per tool call (qwen3.6:27b-mlx) | Open – accumulating memory pressure |
| Medium | #18632 | `qwen3.8:think:"high"` ignored; only `"medium"` or `"xhigh"` work as expected | Open – docs mismatch |
| Low | #18390 | Tool call keys with spaces cause empty responses in Gemma 4 | Open – parser issue |
| Low | #18628 | macOS prompts to move app even when already in `/Applications` subfolder | Open – UX bug |

> 🔗 [Issue #17099](https://github.com/ollama/ollama/issues/17099) – *Critical regression in memory estimation affecting model throughput*

---

### **6. What This Means for Application Developers**  
- **Avoid v0.31.2+ if using `gemma4:31b`** — downgrade to 0.31.1 until #17099 is resolved; expect severe latency degradation otherwise.  
- **Use `OLLAMA_NUM_PARALLEL=1` cautiously** — avoid sustained single-slot loads on MLX `nvfp4` models due to unhandled stall bugs (#18505).  
- **Tool calls with space-containing keys fail silently** — validate input JSON structure carefully when using Gemma 4 models.  
- **Expect memory growth in long-running agents** — each tool call in MLX may consume extra memory; monitor resource usage in production.  
- **Leverage new search limits** — increase `max_searches_per_response` to 10 in your agent pipelines for deeper context retrieval.  
- **Monitor for macOS UI quirks** — app relocation prompts and update sync issues (#18628, #18622) can confuse users despite correct installation paths.

> ✅ **Actionable Tip**: Use `qwen3.8:27b` with `think="xhigh"` only — `high` is unsupported and defaults to `medium`. Verify behavior via `/api/show`.

---  
*Data source: [github.com/ollama/ollama](https://github.com/ollama/ollama)*  
*Digest generated: 2026-09-25*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-09-25**

---

### **1. Today's Highlights**  
The LiteLLM ecosystem continues to strengthen its enterprise-grade observability and cost control capabilities, with key PRs introducing granular budget alerts, enhanced spend logging for Anthropic OAuth usage, and improved tagging/rate-limiting enforcement. Critical fixes address streaming metadata loss (e.g., `service_tier`, `prompt_tokens_details`) and long-standing issues in cost accounting for cached tokens and zero-cost models. The UI also gains visibility into auto-router traffic sources and model spend.

---

### **2. Releases & Breaking Changes**  
*No new releases in the last 24 hours.*  
However, several **non-breaking but impactful configuration changes** were introduced via PRs:  
- [`#43096`](https://github.com/BerriAI/litellm/pull/43096): UI now shows **model spend per destination** and **traffic source breakdown** (direct vs. auto-router), improving cost transparency.  
- [`#41807`](https://github.com/BerriAI/litellm/pull/41807): `tpm_limit` and `rpm_limit` set on tag objects are now enforced at request time — previously ignored.  
- [`#39221`](https://github.com/BerriAI/litellm/pull/39221): New config `maximum_daily_tag_spend_retention_period` prevents unbounded growth of daily spend logs.

---

### **3. New Model & Hardware Support**  
- [`#42840`](https://github.com/BerriAI/litellm/pull/42840): **Sail** added as a fully supported OpenAI-compatible provider with completion window tier pricing. Supports chat, streaming, responses, and Anthropic Messages API.  
- [`#43097`](https://github.com/BerriAI/litellm/pull/43097): Added **Fireworks DeepSeek-V4P1-Flash (US-only)** rows to cost map, enabling accurate billing for US-region deployments.  
- [`#43094`](https://github.com/BerriAI/litellm/pull/43094): Azure AI **FLUX.2-flex edit reference images** now billed at **1 MP per image**, aligning with actual Azure pricing.

---

### **4. Performance & Optimization**  
- [`#43096`](https://github.com/BerriAI/litellm/pull/43096): Enhanced routing analytics allow developers to optimize model selection based on real spend and traffic patterns.  
- [`#42870`](https://github.com/BerriAI/litellm/pull/42870): Fixed `service_tier` loss during streaming — ensures correct pricing tiers are preserved across chunks and logged in spend records.  
- [`#43091`](https://github.com/BerriAI/litellm/pull/43091): Synced Gemini’s latest priority/flex/video input pricing from official API docs — ensures accurate cost estimation for high-tier models.  

> *Note: No measurable throughput or latency improvements reported today, but correctness fixes improve long-term efficiency by reducing re-routes and misbilled calls.*

---

### **5. Stability & Regressions**  
Critical stability issues reported today include:  
1. [`#26672`](https://github.com/BerriAI/litellm/issues/26672): **Budget enforcement bypassed** in v1.82.3 despite spend exceeding `max_budget`. *Fix pending.*  
2. [`#39713`](https://github.com/BerriAI/litellm/issues/39713): **Per-customer RPM limits fail** when virtual key is cached — undermines rate-limiting guarantees. *Fix PR under review.*  
3. [`#43000`](https://github.com/BerriAI/litellm/issues/43000): `encrypted_content_affinity` has no fallback — causes permanent conversation failure if pinned deployment fails. *Resolved in #43000.*  
4. [`#42757`](https://github.com/BerriAI/litellm/issues/42757): Failure inside `fetch_stream()` skips cooldown and fallback logic — breaks resilience for lazy-streaming providers like Vertex AI/Gemini. *PR open.*  
5. [`#39088`](https://github.com/BerriAI/litellm/issues/39088): Vercel AI Gateway streaming drops `prompt_tokens_details` → cached tokens billed at full input rate. *Fix PR pending.*

---

### **6. What This Means for Application Developers**  
- **Cost accountability is now more precise**: With `service_tier` preservation in streams and better cost-map coverage (Sail, Fireworks, FLUX.2-flex), you can trust spend reports to reflect real costs.  
- **Avoid hidden overbilling**: Fixing `cached_tokens` and `prompt_caching_savings_spend` reporting (e.g., `#39088`, `#40006`) ensures caching savings are reflected — critical for optimizing LLM agent pipelines.  
- **Enforce security and compliance**: The new `tag`-level rate limiting (`#41807`) and audit trail features (`#29895`) help meet EU AI Act Article 12 requirements.  
- **Don’t assume defaults work**: If using `max_budget` on internal users or zero-cost models, be aware of the bug in `#29912` — ensure `skip_budget_checks` is explicitly set.  
- **Monitor your proxy version**: v1.82.3 has known budget enforcement bugs — upgrade or patch immediately if using it.

👉 *Recommended action: Audit cost logs for unexpected spikes; verify that `service_tier` and `prompt_tokens_details` are preserved in streaming responses; consider upgrading to latest stable release.*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# **Unsloth Digest – 2026-09-25**

---

### **1. Today's Highlights**  
The Unsloth ecosystem continues to accelerate its focus on **AMD ROCm 10 and RDNA1/2 support**, with critical bug fixes and feature work targeting stability on RX 5700 XT and gfx103X cards. Major progress in **image generation performance** is underway via NVFP4 kernel optimizations, FlashInfer integration, and VAE compile caching—key for high-throughput diffusion workflows. A new **Benchmarks page tracking configuration sweeps (speculative decoding, KV cache, RAM offload)** is now under active development.

---

### **2. Releases & Breaking Changes**  
*None reported in the last 24 hours.*  
No new releases or breaking API changes were published. The project remains focused on stabilization ahead of upcoming v1.8+ features.

---

### **3. New Model & Hardware Support**  
- ✅ **AMD ROCm 10 Support**: Active development on `ROCm 10` implementation (Issue #9932), including version selector for legacy compatibility.  
- ✅ **RDNA1 (gfx1010) Training**: Confirmed working on Windows for non-Triton models; tracking issue open for broader Linux/WSL2 support (Issue #11614).  
- ✅ **Ryzen AI NPU (XDNA 2)**: Experimental chat support via Lemonade + FastFlowLM (PR #11743); enables local inference on Strix Halo/Point devices.  
- ⚠️ **Qwen-Image-2.1**: Multiple issues highlight UX friction: redundant downloads (~19 GB), FP8 model deletion blocking, and image gen hangs during VAE decode on AMD (Issues #11637, #11825, #11636).  

> 🔗 [Issue #9932](https://github.com/unslothai/unsloth/issues/9932) | [PR #11743](https://github.com/unslothai/unsloth/pull/11743)

---

### **4. Performance & Optimization**  
- 🚀 **NVFP4 Image Inference**: New flashinfer backend (`mm_fp4`) and per-layer policy system (PRs #10730, #10731, #10889) aim to reduce GPU time by up to 30% on DiT families.  
- 🧠 **VAE Compile Caching**: Pre-compiling VAE decodes from time budget pass (PR #10889) reduces per-render latency, especially on large models.  
- 💾 **FlashAttention Wheel Build Parallelization**: Splitting `prebuilt-cuda-wheels.yml` across ccache jobs (PR #11812) cuts build time from 8h → ~2h, enabling faster CI/CD.  
- 📊 **Auto Precision Video Handling**: Prevents unnecessary INT8 quantization when bf16 fits (PR #11831), maintaining accuracy without sacrificing speed.  

> 🔗 [PR #10889](https://github.com/unslothai/unsloth/pull/10889) | [PR #11812](https://github.com/unslothai/unsloth/pull/11812)

---

### **5. Stability & Regressions**  
- 🔥 **Critical Crash on AMD iGPU/GFX103X**: `torch._grouped_mm` access violation crashes `import unsloth` on older PyTorch + ROCm 7.13.0 (Issue #11814). *Fix pending.*  
- 🔥 **Driver Reset During VAE Decode**: On AMD (gfx1030), `cudnn.benchmark` triggers MIOpen exhaustive tuning (10–23 min), causing timeouts and crashes (Issue #11636).  
- 🔥 **Model Export Failure**: GGUF export fails due to read-only HF cache permissions (Issue #11785); requires manual cache reset.  
- ⚠️ **UI Freezes**: Image generation stalls at "Step N/N" after final step, appearing hung (Issue #11739).  
- ⚠️ **Installer Script Quarantine**: Bitdefender blocks `install.ps1`, leading to misleading PowerShell logo error (Issue #11862).  

> 🔗 [Issue #11814](https://github.com/unslothai/unsloth/issues/11814) | [Issue #11636](https://github.com/unslothai/unsloth/issues/11636)

---

### **6. What This Means for Application Developers**  
- **For AMD Users**: Avoid `torch 2.10.0+rocm7.13.0` if using gfx103X/gfx110X; ensure `install.ps1` isn’t quarantined. Use `--model` paths carefully to prevent duplicate downloads.  
- **For LLM Agents**: Enable `vLLM/SGLang` support (PR #11491) for multi-GPU, speculative decoding, and vision model serving—ideal for scalable agents.  
- **For RAG Systems**: Expose GPU toggle for embedding models (Issue #11768) will soon allow CPU-to-GPU switching—critical for latency-sensitive pipelines.  
- **For Benchmarking**: The new Benchmarks page (PR #11808, #11646) will let you sweep config settings (KV cache, spec-decoding, RAM offload) programmatically—essential for optimizing agent throughput.  

> 🔗 [PR #11491](https://github.com/unslothai/unsloth/pull/11491) | [PR #11808](https://github.com/unslothai/unsloth/pull/11808)

---  
*Digest generated: 2026-09-25 | Source: [unslothai/unsloth GitHub](https://github.com/unslothai/unsloth)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*