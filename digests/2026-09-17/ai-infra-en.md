# AI Infrastructure Digest 2026-09-17

> Generated: 2026-09-17 00:51 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

⚠️ Comparative analysis generation failed.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

---

### **vLLM Digest — 2026-09-17**

#### **1. Today's Highlights**  
The vLLM project continues to deepen its support for hybrid architectures and speculative decoding, with critical fixes for DeepSeek-V4.1-Flash on SM120 (Blackwell) hardware and improvements in Mamba/GDN model handling under speculative execution. A key PR introduces per-request memory reservation for Mamba speculative decoding, reducing unnecessary overhead in high-concurrency scenarios.

#### **2. Releases & Breaking Changes**  
*No new releases or breaking changes detected in the past 24 hours.*

#### **3. New Model & Hardware Support**  
- **Hybrid Mamba/GDN models**: Active work on enabling speculative decoding (EAGLE/MTP/DSpark) with last-block replay and APC, especially for Qwen3.8-27B hybrids (`#52817`, `#57261`).  
- **ROCm (AMD MI355X)**: Performance optimization for DeepSeek-V4.1-Flash (`#56506`) and bugfixes for DSpark spec-decoding on SM120 (`#56771`, `#57028`).  
- **Intel XPU**: Fixes for MoE weight offloading during post-processing (`#57215`), addressing OOMs in CPU-offloaded serving.  
- **New quantization formats**: WNA16 MoE support on XPU remains under investigation (`#57008`); ongoing integration of FlashInfer’s CuteDSL MegaMoE kernels for large-batch inference (`#54049`).

#### **4. Performance & Optimization**  
- **Speculative Decoding Efficiency**: PR `#57261` reduces per-request memory footprint by reserving Mamba scratch space *per request*, not per concurrency slot—critical for long-prompt, high-K speculative decoding.  
- **Memory Profiling Fix**: `#57258` moves DeepGEMM warmup before KV-cache profiling to prevent startup OOMs due to temporary buffer pressure.  
- **Kernel Fusion**: `#56149` fuses MiniMax-M3 decode top-k merge into a single kernel launch, cutting down from three to two CTAs—reducing latency in high-throughput decode paths.  
- **Batch Invariance**: `#48613` tracks missing batch-invariant support for GDN_ATTN backend in Qwen3.5/Qwen3.6 models; crucial for deterministic outputs across batches.

#### **5. Stability & Regressions**  
- **Critical Crash (SM120)**: Multiple reports of illegal memory access and CUDA device-side asserts in `map_draft_to_target` during draft warmup for DeepSeek-V4.1-Flash on Blackwell GPUs (`#56443`, `#56771`). These are severe and block production use.  
- **Non-deterministic Output**: `#54521` reveals non-deterministic greedy decoding in Qwen3.8-Flash-Next at high prompt lengths due to `persistent_topk` in QSA—impacts correctness in benchmarking and agent reasoning.  
- **Stalled Engine States**: `#49628` proposes opt-in diagnostics for stalled engine stages (e.g., hangs without exceptions), a growing concern in long-running deployments.  
- **Fixes in Progress**: Several PRs address root causes: `#57028` (DeepSeek-V4.1 SM120 geometry), `#57258` (warmup timing), and `#57260` (DCP slot-mapping localization).

#### **6. What This Means for Application Developers**  
- **Avoid speculative decoding on DeepSeek-V4.1-Flash until `#57028` is merged**—you risk crashes on Blackwell hardware.  
- If using **Qwen3.8-Flash-Next** with long prompts (> indexer_budget), expect non-deterministic outputs (`#54521`); consider disabling `persistent_topk` or limiting context length.  
- For **hybrid Mamba/GDN models**, be aware that prefix cache hits may fail under speculative decoding unless `#52244` lands—verify behavior in staging.  
- Use `VLLM_BATCH_INVARIANT=1` only if your model supports it; currently blocked for Qwen GDN models (`#48613`).  
- Monitor `#57261` for reduced memory usage in speculative decoding workflows—ideal for cost-sensitive inference services.

> 🔗 [GitHub Issues](https://github.com/vllm-project/vllm/issues) | [Pull Requests](https://github.com/vllm-project/vllm/pulls)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-09-17**

---

### **1. Today's Highlights**  
The SGLang project continues rapid progress in high-performance inference infrastructure, with major advancements in **AMD ROCm support**, **DeepSeek V4.1 integration**, and **Qwen3-Next GDN kernel fusion**. Critical stability fixes address CUDA memory access issues on H20/H100 and a severe regression in hierarchical cache persistence. A new **Weight Cache Daemon** enables sub-second model load times for large-scale quantized models.

---

### **2. Releases & Breaking Changes**  
None reported in the last 24 hours. No new releases or breaking API/config changes observed.

---

### **3. New Model & Hardware Support**  
- ✅ **DeepSeek-V4.1**: Full runtime and model integration completed via stacked PRs [#38798](https://github.com/sgl-project/sglang/pull/38798), [#39666](https://github.com/sgl-project/sglang/pull/39666), and [#39665](https://github.com/sgl-project/sglang/pull/39665). Includes vision tower, image preprocessing, tool parsing, and request history.
- ✅ **AMD ROCm (gfx950)**: Fused DSA indexer decode path landed for GLM-5.2 ([#38583](https://github.com/sgl-project/sglang/pull/38583)), reducing kernel count from 12 to 4 per indexer.
- ✅ **T-Head PPU (ZW810/ZW810E/ZW-M890P)**: Roadmap initiated ([#37519](https://github.com/sgl-project/sglang/issues/37519)) to enable first-class support.
- ✅ **SenseNova-U1/U1.5**: Feature tracking started ([#37742](https://github.com/sgl-project/sglang/issues/37742)) based on official repository.

---

### **4. Performance & Optimization**  
- ⚡ **Weight Cache Daemon**: Phase 1 launched ([#27139](https://github.com/sgl-project/sglang/pull/27139)); reduces Qwen3-235B FP8 weight load time from **~306–327s to <1s** ([blog](https://www.lmsys.org/blog/2026-08-21-sglang-weights-cache-daemon)).
- ⚡ **Qwen3-Next GDN Prefill Fusion**: Consuming fused kernel chain ([#39873](https://github.com/sgl-project/sglang/pull/39873)), eliminating intermediate tensor round-trips across 4 kernels.
- ⚡ **HiSparse Slot Translation**: Kernel-level padding-preserving fusing ([#39837](https://github.com/sgl-project/sglang/pull/39837)) improves sparse attention efficiency.
- ⚡ **Triton Speculative Verification**: Now uses runtime token width instead of static capture width ([#39859](https://github.com/sgl-project/sglang/pull/39859)), improving accuracy under dynamic input conditions.

---

### **5. Stability & Regressions**  
Critical issues reported today:

1. **CUDA Illegal Memory Access** in `QSA extend forward` at 8 concurrent requests (H20 TP8) — crashes persist despite workarounds ([#37633](https://github.com/sgl-project/sglang/issues/37633)). *Root cause unconfirmed.*
2. **Hierarchical Cache Corruption**: L1/L2 eviction may evict first-seen prefixes before full storage backup ([#39830](https://github.com/sgl-project/sglang/issues/39830)). Silent data loss risk.
3. **HiCache write_through Failure**: Prefixes evicted before full KV persistence to Mooncake Store ([#39444](https://github.com/sgl-project/sglang/issues/39444)).
4. **Unauthenticated Route Poisoning**: PUT /route allows metadata redirection without auth ([#39400](https://github.com/sgl-project/sglang/issues/39400)) — security risk.
5. **Kimi-K3 Decode Crash** under PD disaggregation + DCP + DSPARK (`cumsum(extend_prefix_lens=None)` error) ([#34920](https://github.com/sgl-project/sglang/issues/34920)).

*Note: Fix PRs exist for some regressions (e.g., [#39661](https://github.com/sgl-project/sglang/pull/39661) for benchmark cache state logging), but no active patches for core crashes.*

---

### **6. What This Means for Application Developers**  
- **Expect faster startup times** for large models (e.g., Qwen3-235B FP8) due to Weight Cache Daemon — ideal for dynamic serving environments.
- **Avoid H20 TP8 with speculative decoding** until [#37633](https://github.com/sgl-project/sglang/issues/37633) is resolved; use `--disable-overlap-schedule` as temporary workaround.
- **Validate cache policies carefully** when using HiCache `write_through` with Mooncake — ensure prefix persistence isn’t compromised.
- **Update deployment configs** for DeepSeek-V4.1 and SenseNova-U1 support as they mature.
- **Monitor CI benchmarks closely**: The `bench_serving` tool now records cache flush state ([#39661](https://github.com/sgl-project/sglang/pull/39661)), enabling better reproducibility.

> 🔗 [View full issue tracker](https://github.com/sgl-project/sglang/issues) | [PRs in review](https://github.com/sgl-project/sglang/pulls)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

---

### **1. Today's Highlights**  
The latest release cycle for `llama.cpp` (v11010) focuses on critical Vulkan stability fixes and expanded hardware support, including Hexagon K-Quants and improved TP handling for Gemma 4 and Qwen35. A major performance optimization was introduced with CUDA graph support for MTP draft decoding, while new PRs aim to enhance speculative decoding accuracy through probabilistic drafting and better backend integration.

---

### **2. Releases & Breaking Changes**  
- **`b11010` (Vulkan fix)**: Addresses an intermittent `argsort_large.comp` failure on NVIDIA Turing GPUs by injecting shared memory usage to work around a driver bug ([PR #28975](https://github.com/ggml-org/llama.cpp/pull/28975)).  
- **`b11009`**: Fixes split state granularity for fused QKV in Gemma 4 and Qwen35 models when using `--fuse-qkv`, resolving misaligned tensor splits that could cause crashes or incorrect outputs ([PR #28965](https://github.com/ggml-org/llama.cpp/pull/28965)).  
- **`b11007`**: Enables CUDA graphs for Multi-Token Prediction (MTP) draft decoding, improving prefill throughput and reducing latency overhead during speculative generation ([PR #28549](https://github.com/ggml-org/llama.cpp/pull/28549)).

> ⚠️ *Migration Note:* Users upgrading from older builds should verify model compatibility with `--fuse-qkv` on Gemma 4 and Qwen35 series; ensure context length is aligned with `n_embd_head_k`.

---

### **3. New Model & Hardware Support**  
- **Hexagon K-Quants (Q4_K, Q6_K)**: Added full kernel support for Qualcomm Hexagon backend, enabling efficient inference on edge devices like Snapdragon X Elite platforms ([PR #28994](https://github.com/ggml-org/llama.cpp/pull/28994)).  
- **HRM-TextForCausalLM (DFM Mimir 1B)**: Added native model type support for dual-stack transformer models that alternate between low/high cycles during decoding ([PR #27625](https://github.com/ggml-org/llama.cpp/pull/27625)).  
- **SYCL Backend Improvements**: Fix for excessive scratchpad allocation (>2GB) when `ngram-mod` is enabled — critical for large-context inference on Intel GPUs ([Issue #28860](https://github.com/ggml-org/llama.cpp/issues/28860)).

---

### **4. Performance & Optimization**  
- **CUDA Graphs for MTP Drafting** (`b11007`): Reduces compute graph recompilation overhead by up to ~30% during speculative decode loops, especially effective in high-throughput agent scenarios ([PR #28549](https://github.com/ggml-org/llama.cpp/pull/28549)).  
- **Improved Access Patterns in im2col** (`b11002`): Optimized memory access patterns in CUDA/HIP backends, leading to measurable gains in attention layer throughput on RDNA3+ and newer architectures.  
- **NCCL Tensor Parallelism (in progress)**: PR #28967 introduces NCCL-based collective communication for multi-GPU tensor parallelism across processes — foundational for scaling LLMs beyond single-node limits.  

> 📈 *Expected Impact*: Up to 2–3x faster prompt processing in MTP workflows with stable GPU utilization.

---

### **5. Stability & Regressions**  
| Severity | Issue | Description | Status |
|--------|------|-------------|--------|
| 🔴 High | [#23769](https://github.com/ggml-org/llama.cpp/issues/23769) | Crashes with MoE models (Qwen3.6-35B-A3B-MTP) on Intel Arc B70 via Vulkan | Open, 12 comments |
| 🔴 High | [#28778](https://github.com/ggml-org/llama.cpp/issues/28778) | DFlash2 draft model triggers GPU TDR reset on dual Intel Arc Pro B70 | Open, 9 comments |
| 🔴 High | [#28860](https://github.com/ggml-org/llama.cpp/issues/28860) | SYCL demands >2GB scratchpad when `ngram-mod` enabled | Open, 12 comments |
| 🟡 Medium | [#25522](https://github.com/ggml-org/llama.cpp/issues/25522) | Gemma 4 crashes with MTP on CUDA | Open, 12 comments |
| 🟡 Medium | [#28960](https://github.com/ggml-org/llama.cpp/issues/28960) | Vulkan im2col shaders violate buffer reference alignment (VUID) | Open, 3 comments |

> ✅ *Fixes in Progress*: PR #28975 resolves the Vulkan argsort bug affecting Turing cards.

---

### **6. What This Means for Application Developers**  
- **Use `--no-fallback` in quantization pipelines** (via [PR #28474](https://github.com/ggml-org/llama.cpp/pull/28474)) to catch unsupported tensor shapes early — avoid silent CPU fallbacks that degrade performance.  
- **Leverage MTP + CUDA graphs** (`b11007`) for agent systems requiring fast, deterministic speculative decoding — ideal for real-time reasoning engines.  
- **Avoid `--no-kv-offload` with Vulkan on Qwen3.6 models** until [#24519](https://github.com/ggml-org/llama.cpp/issues/24519) is resolved — it causes premature EOS generation.  
- **Monitor SYCL/SYCL+MoE workflows closely** — recent issues suggest instability under heavy context loads or complex tokenization.  
- **Prepare for distributed inference** with NCCL support (PR #28967), which will enable scalable deployment across multi-node clusters using RPC.

> 💡 *Best Practice*: Always test quantized models with `--verbose` and monitor `--metrics` output to detect silent fallbacks or graph recomputation spikes.

---  
*Digest generated: 2026-09-17 | Source: [github.com/ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-09-17**

---

### **1. Today's Highlights**  
The Ollama ecosystem continues to evolve with key improvements in MLX engine stability and GPU memory management, particularly for CUDA-based systems. Critical bug fixes address tool call parsing issues in MiniCPM5-2B and Qwen3.8 streaming errors, while new PRs enhance CLI onboarding and cross-platform process cleanup—especially important for desktop users on Windows.

---

### **2. Releases & Breaking Changes**  
*No new releases were published in the last 24 hours.*  
- **Breaking Change (Pending):** The built-in CLI agent was removed via [PR #18393](https://github.com/ollama/ollama/pull/18393) to mitigate default cloud model exposure. Users must now opt-in via `ollama run` or use external agents. A feature request to restore it as an optional launcher exists ([#18490](https://github.com/ollama/ollama/issues/18490)).
- **API Improvements:** Support for model-specific reasoning levels is being exposed via `/api/show` and `ollama show` ([#18473](https://github.com/ollama/ollama/pull/18473)), enabling clients to validate defaults before sending requests.

---

### **3. New Model & Hardware Support**  
- **New Models:**  
  - Requested: Addition of **Mistral Small 4** ([#15142](https://github.com/ollama/ollama/issues/15142)) — already released by Mistral, but not yet available in Ollama’s model library.
  - Cloud models: `deepseek-v4.1-flash:cloud` has a misaligned `default_reasoning_level` (`high`) despite only supporting `none` and `medium` ([#18484](https://github.com/ollama/ollama/issues/18484)).

- **Hardware & Backends:**  
  - **MLX Engine:** Now fully integrated into core runtime; moved from `x/` to top-level `mlx/` and `mlxrunner/` ([#18489](https://github.com/ollama/ollama/pull/18489)).  
  - **CUDA:** Enhanced memory budgeting via allocator cap at 95% of free VRAM during load ([#18481](https://github.com/ollama/ollama/pull/18481)).  
  - **Vulkan:** Issues persist on AMD RX 6750 XT (crash after multi-model load) and Intel Iris Xe iGPU detection failure on startup ([#18494](https://github.com/ollama/ollama/issues/18494), [#18482](https://github.com/ollama/ollama/issues/18482)).  
  - **Jetson Orin Nano 8GB:** Gemma 4 E4B fails under DIO mode due to host OOM ([#18396](https://github.com/ollama/ollama/issues/18396)).

---

### **4. Performance & Optimization**  
- **Latency & Throughput:**  
  - **Performance regression detected:** `llama-server` consuming ~560% CPU on Mac Studio M4 Max during token generation ([#18038](https://github.com/ollama/ollama/issues/18038)) — likely tied to recent llama-cpp updates.  
  - **Warm-up optimization:** MLX now pre-warms compile caches post-load to reduce TTFT on cold starts ([#16085](https://github.com/ollama/ollama/pull/16085)).

- **Memory Efficiency:**  
  - Shared CUDA runtime payloads deduplicated across builds ([#17956](https://github.com/ollama/ollama/pull/17956)), reducing binary size and potential conflicts.  
  - Memory budgeting introduced for CUDA devices to prevent OOM mid-load ([#18481](https://github.com/ollama/ollama/pull/18481)).

- **Tool Call Optimization:**  
  - Structured outputs now applied in a single pass on thinking models, eliminating redundant prefill and re-rendering ([#18479](https://github.com/ollama/ollama/pull/18479)).

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Fix PR |
|---------|------|--------|--------|
| ⚠️ High | `qwen3.8`: `no user query found in messages` during chat streaming (500 error) | Open ([#17778](https://github.com/ollama/ollama/issues/17778)) | No fix yet |
| ⚠️ High | `minicpm5-2b`: Native tool calls fail to parse due to XML token stripping | Open ([#18483](https://github.com/ollama/ollama/issues/18483)) | Fixed in [PR #18499](https://github.com/ollama/ollama/pull/18499) |
| ⚠️ Medium | `gemma4` renderer drops tool params named `description`, `type`, etc. | Open ([#18468](https://github.com/ollama/ollama/issues/18468)) | In progress |
| ⚠️ Medium | `llama3.2-vision`: Fails to load with `unknown model architecture: 'mllama'` | Open ([#18486](https://github.com/ollama/ollama/issues/18486)) | Pending |
| 🛑 Critical | `qwen3-vl:8b-instruct` crashes on Vulkan + AMD RX 6750 XT after loading second VL model | Open ([#18494](https://github.com/ollama/ollama/issues/18494)) | No fix |
| 🛑 Critical | Vulkan iGPU (Intel Iris Xe) not detected until restart | Open ([#18482](https://github.com/ollama/ollama/issues/18482)) | No fix |

> *Note: Several regressions are tied to MLX/CUDA/Vulkan stack behavior, indicating ongoing hardware compatibility challenges.*

---

### **6. What This Means for Application Developers**  
- **Tool Call Reliability:** Avoid using `minicpm5-2b` and `gemma4` with native tool calls until fixes land—expect malformed or missing parameters. Use OpenAI-compatible schema if possible.  
- **Model Configuration:** Always verify `supported_reasoning_levels` via `/api/show` before setting `default_reasoning_level`, especially for cloud models like `deepseek-v4.1-flash`.  
- **Multi-Model Workloads:** Be cautious when loading multiple vision models on AMD GPUs (Vulkan) or Jetson devices—memory pressure can cause crashes.  
- **CLI Automation:** The removal of the built-in agent means developers relying on `ollama chat` for automation must now manage agent logic externally. Consider using `ollama run` or custom runners.  
- **Process Management:** On Windows, use `win: prevent orphaned runners` ([#18500](https://github.com/ollama/ollama/pull/18500)) in Docker or CI environments to avoid zombie processes.  

> ✅ **Recommendation:** Monitor [PR #18499](https://github.com/ollama/ollama/pull/18499) and [PR #18481](https://github.com/ollama/ollama/pull/18481) for immediate improvements in tool call parsing and GPU memory safety.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-09-17**

---

### **1. Today's Highlights**  
The LiteLLM proxy continues to mature with significant enhancements in budgeting, team management, and observability. Key updates include support for per-day rate limits (Issue #14398), improved cost tracking for Bedrock passthrough (Issue #11359), and a new `rpm_limit` and `max_budget` edit capability for team admins (PR #41525). Security remains strong with verified Docker image signatures via cosign, ensuring trust in the release pipeline.

---

### **2. Releases & Breaking Changes**  
- **v1.103.0-dev.1** and **v1.102.0-rc.2** released today.  
  - All Docker images are signed using [cosign](https://docs.sigstore.dev/cosign/overview/) with the key introduced in [commit `0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0).  
  - Developers should verify signatures before deployment: `cosign verify --certificate-oidc-issuer=https://oauth2.googleapis.com/issuer <image>`  
  - No breaking changes reported; these are pre-release candidates targeting v1.103.0.

---

### **3. New Model & Hardware Support**  
- ✅ **Amazon Transcribe SigV4 pass-through routes** added via PR [#41515](https://github.com/BerriAI/litellm/pull/41515):  
  Enables secure, AWS-SDK-compatible access to Amazon Transcribe jobs through LiteLLM’s virtual keys — critical for enterprise voice-to-text pipelines.
- ✅ **Vertex AI GCS batch output streaming** now supported via PR [#41506](https://github.com/BerriAI/litellm/pull/41506):  
  Large file outputs (e.g., JSONL, images) can now be streamed directly from GCS without full memory loading, improving scalability for batch processing workloads.

---

### **4. Performance & Optimization**  
- **Rust Bridge Refactor** (PR [#41479](https://github.com/BerriAI/litellm/pull/41479)):  
  Introduced declarative route catalog and shared runtime selection logic across providers. This reduces code duplication and enables faster routing decisions, especially for hybrid Python/Rust deployments.
- **E2E Cost Testing Framework** (PR [#41328](https://github.com/BerriAI/litellm/pull/41328)):  
  Adds test suite for cost calculation on a test-owned cost map, allowing precise validation of pricing models (including cache reads, tiers, audio, web search) without relying on live provider costs.

---

### **5. Stability & Regressions**  
| Severity | Issue | Summary | Fix Status |
|---------|------|--------|-----------|
| 🔴 High | [#34140](https://github.com/BerriAI/litellm/issues/34140) | Per-team per-model rate limits enforced at **half** configured RPM/TPM | Open |
| 🔴 High | [#41344](https://github.com/BerriAI/litellm/issues/41344) | Zero-cost budget bypass leaks unbounded spend when fallback is paid | Closed (fix merged) |
| 🟡 Medium | [#38515](https://github.com/BerriAI/litellm/issues/38515) | Zero-cost models blocked after user `max_budget` exhaustion | Open |
| 🟡 Medium | [#36168](https://github.com/BerriAI/litellm/issues/36168) | Streaming drops upstream `usage` when final chunk has non-empty `choices`, leading to billing inaccuracies | Open |
| 🟡 Medium | [#27852](https://github.com/BerriAI/litellm/issues/27852) | Ghost models not cleared from Redis cache across workers (`--num_workers > 1`) | Open |

> 💡 Note: Several high-severity issues involve incorrect cost or rate-limit enforcement—critical for production systems with budget controls.

---

### **6. What This Means for Application Developers**  
- **Use cases requiring daily rate limits (e.g., freemium tiers)** can now implement `requests_per_day` and `tokens_per_day` via Issue #14398 — a major step toward parity with providers like OpenAI.
- **Team-based budgeting and admin control** are now more flexible: team admins can manage `rpm_limit` and `max_budget` (PR #41525), enabling decentralized governance.
- **Cost transparency** improves with better tracking for Bedrock and Vertex AI (Issues #11359, #41344), reducing risk of unexpected overages.
- **Avoid regressions**: If using per-team rate limits, monitor [#34140](https://github.com/BerriAI/litellm/issues/34140) — current limits may be halved unexpectedly.
- **Streaming reliability**: Be cautious with tool calls via Claude/Bedrock — check [#30053](https://github.com/BerriAI/litellm/issues/30053) and [#38223](https://github.com/BerriAI/litellm/issues/38223) if encountering malformed responses or schema rejection.

> ✅ **Actionable advice**: Verify Docker image signatures using `cosign` in CI/CD pipelines. Update to `v1.103.0-dev.1` or later for latest stability fixes and feature improvements.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-09-17**

---

### **1. Today's Highlights**  
The Unsloth project continues its aggressive focus on stability, security, and cross-platform reliability, with critical fixes to installer logic, Docker health checks, and API exposure in the Studio UI. A major security patch (PR #11160) resolves an SSRF vulnerability in remote image handling, while multiple PRs address Windows-specific edge cases affecting GPU detection, process management, and installation locks—critical for enterprise and developer adoption.

---

### **2. Releases & Breaking Changes**  
- **Windows-ARM64 Binaries** released today (latest release): Enables native inference on Apple Silicon and ARM64 Windows systems. No migration required; existing workflows continue to work.
  - [GitHub Release](https://github.com/unslothai/unsloth/releases/tag/v2026.9.17)

---

### **3. New Model & Hardware Support**  
- **AMD RX 5700XT**: Reported issue (#8529) indicates incomplete Vulkan/CUDA compatibility in desktop client; no fix yet — users should expect limited or failed model loading on AMD GPUs via OpenCL path.
- **ROCm 7.14**: Installer fails to detect ROCm 7.14 and installs PyTorch 2.11 with outdated ROCm 7.2 (Issue #10657), leading to runtime crashes. Workaround: manual ROCm version pinning.
- **Nixpkgs Packaging**: Unsloth Desktop is now available via NixOS/nixpkgs (Issue #11135), enabling reproducible deployments in declarative environments.
  - [GitHub Issue #11135](https://github.com/unslothai/unsloth/issues/11135)

---

### **4. Performance & Optimization**  
- **Memory Leak Fix**: PR #10921 reports memory growth post-llama.cpp update; addressed via backend connection lifecycle tightening.
- **Model Load Latency Reduction**: PR #11141 proposes exposing prefill progress over API to allow clients to show wait time before first token — crucial for large GGUF models (e.g., Qwen3.8-27B).
- **Inference Throughput**: Ongoing optimization of `vLLM-style` metrics tracking (PR #4238) enables real-time telemetry for inference and training workloads — opt-in only.
  - [PR #4238](https://github.com/unslothai/unsloth/pull/4238)

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Fix PR |
|--------|------|--------|--------|
| Critical | **SSRF Vulnerability in Remote Image Handling** (`/api/image`) | ✅ Patched | [PR #11160](https://github.com/unslothai/unsloth/pull/11160) |
| High | **Windows Installer Fails to Respect Custom Install Path** | ❌ Open | [Issue #10859](https://github.com/unslothai/unsloth/issues/10859) |
| High | **Docker Instructions Fail to Persist Downloaded Models** | ✅ Fixed | [Issue #10923](https://github.com/unslothai/unsloth/issues/10923) |
| Medium | **Qwen3.8-Flash-Next MTP Aborts at Load** (`nextn.hc_head_norm` shape mismatch) | ❌ Open | [Issue #11143](https://github.com/unslothai/unsloth/issues/11143) |
| Medium | **Windows Pre-Quantized bnb-4bit Checkpoints Load with `quant_state=None` → Shape Errors** | ❌ Open | [Issue #10017](https://github.com/unslothai/unsloth/issues/10017) |

> ⚠️ Note: Several regressions affect Windows + ROCm users; these are not isolated but systemic across installer, GPU detection, and model loading pipelines.

---

### **6. What This Means for Application Developers**  
- **Security First**: Always use `unsloth deploy` or self-hosted Studio behind a reverse proxy. Avoid exposing `/api/image` endpoints directly — the SSRF fix (PR #11160) is now merged, but external trust must be enforced.
- **Cross-Platform Deployment**: Use `unsloth deploy` (PR #5961) to launch Studio on RunPod or Modal — ideal for scalable agent deployment with OpenAI-compatible APIs.
- **Model Persistence**: When using Docker, explicitly mount model directories (e.g., `--volume /path/to/models:/workspace/work/models`) to avoid data loss — documented in #10923.
- **Custom Tooling**: Enable `openai_api_auto_switch_model` cautiously — it does not cold-load models (Issue #11140), so ensure a model is already loaded before making requests.
- **Advanced Control**: Watch for new features like **auto-reload on llama.cpp reconnect** (Issue #11092) and **deduplication toggle for tool calls** (Issue #10379) — both will improve agent reliability.

> 🔧 Pro Tip: For Windows developers, avoid installing to paths with spaces or special characters; use the latest installer with PR #11119’s improved `nvidia-smi` detection to prevent silent CPU-only fallbacks.

---  
*Digest compiled from GitHub activity (2026-09-17).*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*