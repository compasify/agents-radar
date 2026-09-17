# AI 基础设施日报 2026-09-17

> 生成时间: 2026-09-17 00:51 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

⚠️ 横向对比生成失败。

---

## 各项目详细报告

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

**SGLang 消息简报 – 2026-09-17**

---

### **1. 今日重点**  
SGLang 项目在高性能推理基础设施方面持续快速推进，主要进展包括 **AMD ROCm 支持**、**DeepSeek V4.1 集成** 和 **Qwen3-Next GDN 内核融合**。关键稳定性修复解决了 H20/H100 上的 CUDA 内存访问问题，以及层级缓存持久性中的严重回归问题。新推出的 **权重缓存守护进程（Weight Cache Daemon）** 实现了大规模量化模型的亚秒级加载。

---

### **2. 发布与破坏性变更**  
过去 24 小时内未报告任何发布或破坏性变更。未观察到新版本发布或接口/配置的破坏性更改。

---

### **3. 新模型与硬件支持**  
- ✅ **DeepSeek-V4.1**：通过合并的多个 PR [#38798](https://github.com/sgl-project/sglang/pull/38798)、[#39666](https://github.com/sgl-project/sglang/pull/39666) 及 [#39665](https://github.com/sgl-project/sglang/pull/39665)，已完成完整的运行时与模型集成。支持视觉塔、图像预处理、工具解析及请求历史记录。
- ✅ **AMD ROCm (gfx950)**：针对 GLM-5.2 的融合 DSA 索引器解码路径已落地 ([#38583](https://github.com/sgl-project/sglang/pull/38583))，将索引器每轮内核数量从 12 个减少至 4 个。
- ✅ **平头哥 PPU (ZW810/ZW810E/ZW-M890P)**：已启动路线图规划 ([#37519](https://github.com/sgl-project/sglang/issues/37519))，以实现原生支持。
- ✅ **讯飞星云-U1/U1.5**：基于官方仓库的功能跟踪已启动 ([#37742](https://github.com/sgl-project/sglang/issues/37742))。

---

### **4. 性能与优化**  
- ⚡ **权重缓存守护进程**：第一阶段已上线 ([#27139](https://github.com/sgl-project/sglang/pull/27139))；将 Qwen3-235B FP8 权重加载时间从 **~306–327 秒降低至 <1 秒** ([博客](https://www.lmsys.org/blog/2026-08-21-sglang-weights-cache-daemon))。
- ⚡ **Qwen3-Next GDN 预填充融合**：已开始使用融合内核链 ([#39873](https://github.com/sgl-project/sglang/pull/39873))，消除跨 4 个内核的中间张量往返开销。
- ⚡ **HiSparse Slot 转换**：内核级保留填充的融合策略 ([#39837](https://github.com/sgl-project/sglang/pull/39837)) 提升稀疏注意力效率。
- ⚡ **Triton 试探性验证优化**：现采用运行时标记宽度而非静态捕获宽度 ([#39859](https://github.com/sgl-project/sglang/pull/39859))，在动态输入条件下显著提升准确性。

---

### **5. 稳定性与回归问题**  
今日报告关键问题如下：

1. **CUDA 非法内存访问**：在 8 并发请求下触发 `QSA extend forward` 失败（H20 TP8）——即使应用临时方案仍持续崩溃 ([#37633](https://github.com/sgl-project/sglang/issues/37633))。*根本原因尚未确认。*
2. **层级缓存损坏**：L1/L2 淘汰机制可能在完整存储备份前就淘汰首次出现的前缀 ([#39830](https://github.com/sgl-project/sglang/issues/39830))。存在静默数据丢失风险。
3. **HiCache write_through 失败**：前缀在完全持久化至 Mooncake Store 前即被剔除 ([#39444](https://github.com/sgl-project/sglang/issues/39444))。
4. **未认证路由污染**：PUT /route 允许无认证重定向元数据 ([#39400](https://github.com/sgl-project/sglang/issues/39400)) —— 存在安全风险。
5. **Kimi-K3 解码崩溃**：在 PD 分离 + DCP + DSPARK 场景下触发（`cumsum(extend_prefix_lens=None)` 错误）([#34920](https://github.com/sgl-project/sglang/issues/34920))。

*注：部分回归问题已有修复补丁（如 [#39661](https://github.com/sgl-project/sglang/pull/39661) 用于基准缓存状态日志），但核心崩溃问题尚无活跃修复方案。*

---

### **6. 对应用开发者的影响**  
- **预期大型模型（如 Qwen3-235B FP8）启动速度显著加快**，得益于权重缓存守护进程，特别适合动态服务场景。
- **在 [#37633](https://github.com/sgl-project/sglang/issues/37633) 修复前，请避免在 H20 TP8 上使用试探性解码**；可临时使用 `--disable-overlap-schedule` 作为规避方案。
- **使用 HiCache `write_through` 与 Mooncake 时，务必谨慎验证缓存策略**，确保前缀持久化不受影响。
- **随着 DeepSeek-V4.1 与 SenseNova-U1 支持逐步成熟，请及时更新部署配置**。
- **密切监控 CI 基准测试**：`bench_serving` 工具现已记录缓存刷新状态 ([#39661](https://github.com/sgl-project/sglang/pull/39661))，有助于提升复现能力。

> 🔗 [查看完整问题追踪列表](https://github.com/sgl-project/sglang/issues) | [正在评审的 PR](https://github.com/sgl-project/sglang/pulls)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

### **1. 今日亮点**  
`llama.cpp` 最新发布周期（v11010）聚焦于关键的 Vulkan 稳定性修复及硬件支持扩展，涵盖 Hexagon K-Quants，并优化了 Gemma 4 与 Qwen35 的 TP 处理。通过引入 CUDA graph 支持实现 MTP 草稿解码的重大性能优化，同时新提交的 PR 旨在通过概率性草稿生成和更优的后端集成提升推测解码的准确性。

---

### **2. 发布版本与破坏性变更**  
- **`b11010`（Vulkan 修复）**：通过注入共享内存使用以绕过 NVIDIA Turing 显卡上的驱动缺陷，解决了 `argsort_large.comp` 间歇性失败问题 ([PR #28975](https://github.com/ggml-org/llama.cpp/pull/28975))。  
- **`b11009`**：修复使用 `--fuse-qkv` 时 Gemma 4 与 Qwen35 模型中融合 QKV 的分块粒度问题，解决因张量分块错位导致的崩溃或输出错误 ([PR #28965](https://github.com/ggml-org/llama.cpp/pull/28965))。  
- **`b11007`**：启用 Multi-Token Prediction (MTP) 草稿解码的 CUDA graphs，提升预填充吞吐量并降低推测生成过程中的延迟开销 ([PR #28549](https://github.com/ggml-org/llama.cpp/pull/28549))。

> ⚠️ *迁移提示*：从旧版本升级的用户应验证 Gemma 4 与 Qwen35 系列模型在使用 `--fuse-qkv` 时的兼容性；确保上下文长度与 `n_embd_head_k` 对齐。

---

### **3. 新模型与硬件支持**  
- **Hexagon K-Quants（Q4_K, Q6_K）**：为高通 Hexagon 后端添加完整内核支持，使 Snapdragon X Elite 等边缘设备可高效推理 ([PR #28994](https://github.com/ggml-org/llama.cpp/pull/28994))。  
- **HRM-TextForCausalLM（DFM Mimir 1B）**：新增对双栈变换器模型的原生支持，此类模型在解码过程中交替使用低/高周期结构 ([PR #27625](https://github.com/ggml-org/llama.cpp/pull/27625))。  
- **SYCL 后端改进**：修复启用 `ngram-mod` 时出现的过度临时存储分配（>2GB）问题——对 Intel GPU 上的大上下文推理至关重要 ([Issue #28860](https://github.com/ggml-org/llama.cpp/issues/28860))。

---

### **4. 性能与优化**  
- **MTP 草稿的 CUDA Graphs** (`b11007`)：在推测解码循环中减少高达约 30% 的计算图重新编译开销，尤其在高吞吐量代理场景下效果显著 ([PR #28549](https://github.com/ggml-org/llama.cpp/pull/28549))。  
- **im2col 中的访问模式优化** (`b11002`)：优化了 CUDA/HIP 后端的内存访问模式，在 RDNA3+ 及更新架构上带来注意力层吞吐量的可观提升。  
- **NCCL 张量并行（进行中）**：PR #28967 引入基于 NCCL 的跨进程多 GPU 张量并行集体通信机制——为突破单节点限制、横向扩展大语言模型奠定基础。

> 📈 *预期影响*：在稳定 GPU 利用率条件下，MTP 工作流中提示处理速度有望提升 2–3 倍。

---

### **5. 稳定性与回归问题**  
| 严重性 | 问题 | 描述 | 状态 |
|--------|------|-------------|--------|
| 🔴 高 | [#23769](https://github.com/ggml-org/llama.cpp/issues/23769) | 通过 Vulkan 在 Intel Arc B70 上运行 MoE 模型（Qwen3.6-35B-A3B-MTP）时崩溃 | 开放，12 条评论 |
| 🔴 高 | [#28778](https://github.com/ggml-org/llama.cpp/issues/28778) | DFlash2 草稿模型在双 Intel Arc Pro B70 上触发 GPU TDR 重置 | 开放，9 条评论 |
| 🔴 高 | [#28860](https://github.com/ggml-org/llama.cpp/issues/28860) | SYCL 在启用 `ngram-mod` 时需求 >2GB 临时存储 | 开放，12 条评论 |
| 🟡 中等 | [#25522](https://github.com/ggml-org/llama.cpp/issues/25522) | Gemma 4 在 CUDA 上使用 MTP 时崩溃 | 开放，12 条评论 |
| 🟡 中等 | [#28960](https://github.com/ggml-org/llama.cpp/issues/28960) | Vulkan im2col 着色器违反缓冲区引用对齐规则（VUID） | 开放，3 条评论 |

> ✅ *正在进行修复*：PR #28975 已解决影响 Turing 显卡的 Vulkan argsort 问题。

---

### **6. 对应用开发者的意义**  
- **在量化流程中使用 `--no-fallback`**（通过 [PR #28474](https://github.com/ggml-org/llama.cpp/pull/28474)）以尽早发现不支持的张量形状——避免无声降级至 CPU 导致性能下降。  
- **利用 MTP + CUDA graphs**（`b11007`）构建需要快速、确定性推测解码的代理系统——适用于实时推理引擎。  
- **在解决 [#24519](https://github.com/ggml-org/llama.cpp/issues/24519) 前避免在 Qwen3.6 模型上使用 Vulkan 的 `--no-kv-offload`** ——否则会导致提前生成 EOS。  
- **密切监控 SYCL/SYCL+MoE 工作流**——近期问题表明在高上下文负载或复杂分词场景下存在不稳定性。  
- **为分布式推理做好准备**，借助 NCCL 支持（PR #28967），未来可通过 RPC 实现跨多节点集群的可扩展部署。

> 💡 *最佳实践*：始终使用 `--verbose` 测试量化模型，并监控 `--metrics` 输出，以及时发现无声降级或图重新编译峰值。

---  
*摘要生成时间：2026-09-17 | 来源：[github.com/ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-09-17**

---

### **1. 今日亮点**  
Ollama 生态系统持续演进，MLX 引擎的稳定性与 GPU 内存管理（尤其是基于 CUDA 的系统）获得关键改进。针对 MiniCPM5-2B 和 Qwen3.8 流式传输错误的关键缺陷修复已发布，同时新增的 PR 提升了 CLI 入门体验与跨平台进程清理能力——对 Windows 桌面用户尤为重要。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未发布新版本。*  
- **破坏性变更（待定）：** 通过 [PR #18393](https://github.com/ollama/ollama/pull/18393) 移除了内置 CLI 代理，以减少默认云模型暴露风险。用户现在必须通过 `ollama run` 显式启用或使用外部代理。有功能请求希望将其作为可选启动器恢复 ([#18490](https://github.com/ollama/ollama/issues/18490))。  
- **API 改进：** 模型特定推理级别支持正通过 `/api/show` 与 `ollama show` 接口暴露 ([#18473](https://github.com/ollama/ollama/pull/18473))，使客户端可在发送请求前验证默认配置。

---

### **3. 新模型与硬件支持**  
- **新模型：**  
  - 已请求：增加 **Mistral Small 4** ([#15142](https://github.com/ollama/ollama/issues/15142)) — Mistral 已发布该模型，但尚未在 Ollama 模型库中上线。  
  - 云模型：`deepseek-v4.1-flash:cloud` 存在 `default_reasoning_level` 配置错位问题（设置为 `high`），但实际仅支持 `none` 与 `medium` ([#18484](https://github.com/ollama/ollama/issues/18484))。

- **硬件与后端：**  
  - **MLX 引擎：** 已完全集成至核心运行时；从 `x/` 迁移至顶层 `mlx/` 与 `mlxrunner/` 目录 ([#18489](https://github.com/ollama/ollama/pull/18489))。  
  - **CUDA：** 通过在加载阶段将内存分配器上限设为可用显存的 95%，优化了内存预算管理 ([#18481](https://github.com/ollama/ollama/pull/18481))。  
  - **Vulkan：** AMD RX 6750 XT 上仍存在多模型加载后崩溃问题，以及 Intel Iris Xe iGPU 在启动时检测失败问题 ([#18494](https://github.com/ollama/ollama/issues/18494), [#18482](https://github.com/ollama/ollama/issues/18482))。  
  - **Jetson Orin Nano 8GB：** Gemma 4 E4B 在 DIO 模式下因主机内存溢出（OOM）而失败 ([#18396](https://github.com/ollama/ollama/issues/18396))。

---

### **4. 性能与优化**  
- **延迟与吞吐量：**  
  - **检测到性能下降：** `llama-server` 在 Mac Studio M4 Max 上生成 token 时占用约 560% CPU（[#18038](https://github.com/ollama/ollama/issues/18038)) — 可能与近期 llama-cpp 更新有关。  
  - **预热优化：** MLX 现已在加载后预热编译缓存，以降低冷启动时的 TTFT（首字节时间）([#16085](https://github.com/ollama/ollama/pull/16085))。

- **内存效率：**  
  - 跨构建共享 CUDA 运行时负载已去重 ([#17956](https://github.com/ollama/ollama/pull/17956))，减小二进制体积并降低潜在冲突。  
  - 为 CUDA 设备引入内存预算机制，防止加载过程中出现 OOM 问题 ([#18481](https://github.com/ollama/ollama/pull/18481))。

- **工具调用优化：**  
  - 结构化输出现可在思考类模型上单次遍历完成，消除冗余预填充与重渲染过程 ([#18479](https://github.com/ollama/ollama/pull/18479))。

---

### **5. 稳定性与回归问题**  
| 严重性 | 问题 | 状态 | 修复 PR |
|--------|------|------|--------|
| ⚠️ 高 | `qwen3.8`：聊天流式传输中出现 `no user query found in messages`（500 错误） | 开放 ([#17778](https://github.com/ollama/ollama/issues/17778)) | 尚无修复 |
| ⚠️ 高 | `minicpm5-2b`：因 XML token 被剥离，原生工具调用解析失败 | 开放 ([#18483](https://github.com/ollama/ollama/issues/18483)) | 已在 [PR #18499](https://github.com/ollama/ollama/pull/18499) 中修复 |
| ⚠️ 中 | `gemma4` 渲染器会丢弃名为 `description`、`type` 等的工具参数 | 开放 ([#18468](https://github.com/ollama/ollama/issues/18468)) | 正在处理 |
| ⚠️ 中 | `llama3.2-vision` 加载失败，提示 `unknown model architecture: 'mllama'` | 开放 ([#18486](https://github.com/ollama/ollama/issues/18486)) | 待定 |
| 🛑 严重 | `qwen3-vl:8b-instruct` 在 Vulkan + AMD RX 6750 XT 上加载第二个视觉模型后崩溃 | 开放 ([#18494](https://github.com/ollama/ollama/issues/18494)) | 尚无修复 |
| 🛑 严重 | Vulkan iGPU（Intel Iris Xe）需重启后才被检测到 | 开放 ([#18482](https://github.com/ollama/ollama/issues/18482)) | 尚无修复 |

> *注：多个回归问题与 MLX/CUDA/Vulkan 堆栈行为相关，表明硬件兼容性挑战仍在持续。*

---

### **6. 对应用开发者的启示**  
- **工具调用可靠性：** 在修复落地前，请避免在 `minicpm5-2b` 与 `gemma4` 上使用原生工具调用——可能出现参数格式错误或缺失。如可行，建议使用 OpenAI 兼容模式。  
- **模型配置：** 在设置 `default_reasoning_level` 前，务必通过 `/api/show` 验证 `supported_reasoning_levels`，特别是云模型如 `deepseek-v4.1-flash`。  
- **多模型工作负载：** 在 AMD GPU（Vulkan）或 Jetson 设备上加载多个视觉模型时需谨慎——内存压力可能导致崩溃。  
- **CLI 自动化：** 内置代理已被移除，依赖 `ollama chat` 实现自动化的开发者需自行管理代理逻辑。建议改用 `ollama run` 或自定义运行器。  
- **进程管理：** 在 Windows 上，建议在 Docker 或 CI 环境中使用 `win: prevent orphaned runners` ([#18500](https://github.com/ollama/ollama/pull/18500))，避免僵尸进程残留。  

> ✅ **建议：** 关注 [PR #18499](https://github.com/ollama/ollama/pull/18499) 与 [PR #18481](https://github.com/ollama/ollama/pull/18481)，以获取工具调用解析与 GPU 内存安全性的即时改进。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM 消息简报 – 2026-09-17**

---

### **1. 今日亮点**  
LiteLLM 代理持续成熟，预算管理、团队协作与可观测性方面均有显著增强。关键更新包括支持每日速率限制（问题 #14398）、改进 Bedrock 透传模式的成本追踪（问题 #11359），以及团队管理员新增 `rpm_limit` 和 `max_budget` 编辑功能（PR #41525）。安全方面保持强劲，通过 cosign 验证 Docker 镜像签名，确保发布流水线的可信度。

---

### **2. 发布与破坏性变更**  
- 今日发布 **v1.103.0-dev.1** 与 **v1.102.0-rc.2**。  
  - 所有 Docker 镜像均使用 [cosign](https://docs.sigstore.dev/cosign/overview/) 签名，密钥来自 [提交 `0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0)。  
  - 开发者应在部署前验证签名：`cosign verify --certificate-oidc-issuer=https://oauth2.googleapis.com/issuer <image>`  
  - 未报告破坏性变更；此为针对 v1.103.0 的预发布候选版本。

---

### **3. 新模型与硬件支持**  
- ✅ 通过 PR [#41515](https://github.com/BerriAI/litellm/pull/41515) 新增 **Amazon Transcribe SigV4 透传路由**：  
  通过 LiteLLM 虚拟密钥实现对 Amazon Transcribe 任务的安全、兼容 AWS SDK 的访问——对企业级语音转文字流程至关重要。
- ✅ 通过 PR [#41506](https://github.com/BerriAI/litellm/pull/41506) 新增 **Vertex AI GCS 批量输出流式传输支持**：  
  大文件输出（如 JSONL、图像）可直接从 GCS 流式传输，无需完全加载至内存，显著提升批处理工作负载的可扩展性。

---

### **4. 性能与优化**  
- **Rust 桥接重构**（PR [#41479](https://github.com/BerriAI/litellm/pull/41479)）：  
  引入声明式路由目录及跨提供方共享的运行时选择逻辑，减少代码重复，加快路由决策速度，尤其适用于混合 Python/Rust 部署场景。
- **端到端成本测试框架**（PR [#41328](https://github.com/BerriAI/litellm/pull/41328)）：  
  添加基于测试专属成本地图的成本计算测试套件，可在不依赖实时提供方价格的情况下，精确验证定价模型（包括缓存读取、分层计价、音频、网页搜索等）。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 摘要 | 修复状态 |
|---------|------|--------|-----------|
| 🔴 高 | [#34140](https://github.com/BerriAI/litellm/issues/34140) | 团队级模型速率限制在 **一半** 的配置 RPM/TPM 下强制执行 | 待处理 |
| 🔴 高 | [#41344](https://github.com/BerriAI/litellm/issues/41344) | 零成本预算绕过漏洞，在回退为付费模式时导致无限制支出 | 已关闭（修复已合并） |
| 🟡 中 | [#38515](https://github.com/BerriAI/litellm/issues/38515) | 用户 `max_budget` 耗尽后，零成本模型被阻断 | 待处理 |
| 🟡 中 | [#36168](https://github.com/BerriAI/litellm/issues/36168) | 流式响应中，当最终块包含非空 `choices` 时，上游 `usage` 丢失，导致计费不准 | 待处理 |
| 🟡 中 | [#27852](https://github.com/BerriAI/litellm/issues/27852) | 多工作器（`--num_workers > 1`）环境下，幽灵模型未从 Redis 缓存清除 | 待处理 |

> 💡 注：多个高严重性问题涉及成本或速率限制错误执行——对启用了预算控制的生产系统至关重要。

---

### **6. 对应用开发者的启示**  
- **需要每日速率限制的场景（如免费增值层级）** 可通过问题 #14398 实现 `requests_per_day` 与 `tokens_per_day`，向 OpenAI 等提供方的对齐迈出关键一步。
- **基于团队的预算与管理员控制** 更加灵活：团队管理员现在可管理 `rpm_limit` 与 `max_budget`（PR #41525），支持去中心化治理。
- **成本透明度提升**：对 Bedrock 与 Vertex AI 的成本追踪更完善（问题 #11359、#41344），降低意外超支风险。
- **规避回归问题**：若使用团队级速率限制，请关注 [#34140](https://github.com/BerriAI/litellm/issues/34140) —— 当前限制可能意外减半。
- **流式可靠性**：使用 Claude/Bedrock 工具调用时需谨慎——若遇到格式错误响应或模式拒绝，请检查 [#30053](https://github.com/BerriAI/litellm/issues/30053) 与 [#38223](https://github.com/BerriAI/litellm/issues/38223)。

> ✅ **可操作建议**：在 CI/CD 流水线中使用 `cosign` 验证 Docker 镜像签名。升级至 `v1.103.0-dev.1` 或更高版本以获取最新稳定性修复与功能改进。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth 简报 – 2026-09-17**

---

### **1. 今日重点**  
Unsloth 项目持续聚焦稳定性、安全性与跨平台可靠性，针对安装器逻辑、Docker 健康检查以及 Studio UI 中的 API 暴露问题进行了关键修复。一项重大安全补丁（PR #11160）解决了远程图像处理中的 SSRF 漏洞，同时多个 PR 修复了影响 GPU 检测、进程管理与安装锁的 Windows 特定边缘情况——这对企业级和开发者采用至关重要。

---

### **2. 发布与破坏性变更**  
- **Windows-ARM64 二进制文件**今日发布（最新版本）：支持 Apple Silicon 及 ARM64 Windows 系统上的原生推理。无需迁移；现有工作流可继续正常运行。  
  - [GitHub 发布](https://github.com/unslothai/unsloth/releases/tag/v2026.9.17)

---

### **3. 新模型与硬件支持**  
- **AMD RX 5700XT**：报告的问题 (#8529) 指出桌面客户端中 Vulkan/CUDA 兼容性不完整；尚未修复——用户应预期通过 OpenCL 路径在 AMD GPU 上出现模型加载受限或失败。
- **ROCm 7.14**：安装器无法检测 ROCm 7.14，导致安装 PyTorch 2.11 并使用过时的 ROCm 7.2（问题 #10657），引发运行时崩溃。临时解决方案：手动固定 ROCm 版本。
- **Nixpkgs 打包**：Unsloth Desktop 现已可通过 NixOS/nixpkgs 获取（问题 #11135），支持在声明式环境中实现可复现部署。  
  - [GitHub 问题 #11135](https://github.com/unslothai/unsloth/issues/11135)

---

### **4. 性能与优化**  
- **内存泄漏修复**：PR #10921 报告在 llama.cpp 升级后出现内存增长问题；通过收紧后端连接生命周期予以解决。  
- **模型加载延迟降低**：PR #11141 提出通过 API 暴露预填充进度，使客户端可在首个 token 生成前显示等待时间——对大型 GGUF 模型（如 Qwen3.8-27B）尤为关键。  
- **推理吞吐量**：正在进行 `vLLM-style` 指标追踪优化（PR #4238），支持推理与训练负载的实时遥测——仅需手动开启。  
  - [PR #4238](https://github.com/unslothai/unsloth/pull/4238)

---

### **5. 稳定性与回归问题**  
| 严重性 | 问题 | 状态 | 修复 PR |
|--------|------|--------|--------|
| 严重 | **远程图像处理中的 SSRF 漏洞** (`/api/image`) | ✅ 已修复 | [PR #11160](https://github.com/unslothai/unsloth/pull/11160) |
| 高 | **Windows 安装器未尊重自定义安装路径** | ❌ 未解决 | [Issue #10859](https://github.com/unslothai/unsloth/issues/10859) |
| 高 | **Docker 指令无法持久化下载的模型** | ✅ 已修复 | [Issue #10923](https://github.com/unslothai/unsloth/issues/10923) |
| 中 | **Qwen3.8-Flash-Next MTP 在加载时中断**（`nextn.hc_head_norm` 形状不匹配） | ❌ 未解决 | [Issue #11143](https://github.com/unslothai/unsloth/issues/11143) |
| 中 | **Windows 预量化 bnb-4bit 检查点以 `quant_state=None` 加载 → 形状错误** | ❌ 未解决 | [Issue #10017](https://github.com/unslothai/unsloth/issues/10017) |

> ⚠️ 注意：多个回归问题影响 Windows + ROCm 用户；这些问题并非孤立，而是贯穿安装器、GPU 检测与模型加载流水线的系统性缺陷。

---

### **6. 对应用开发者的启示**  
- **安全优先**：始终使用 `unsloth deploy` 或在反向代理后自托管 Studio。避免直接暴露 `/api/image` 接口——尽管 SSRF 修复（PR #11160）已合并，但仍需强制外部信任策略。  
- **跨平台部署**：使用 `unsloth deploy`（PR #5961）在 RunPod 或 Modal 上启动 Studio——适用于具备 OpenAI 兼容接口的可扩展代理部署。  
- **模型持久化**：使用 Docker 时，显式挂载模型目录（例如 `--volume /path/to/models:/workspace/work/models`）以避免数据丢失——已在 #10923 文档中说明。  
- **自定义工具链**：谨慎启用 `openai_api_auto_switch_model`——它不会冷加载模型（问题 #11140），因此请确保请求前模型已加载。  
- **高级控制**：关注新功能，如 **llama.cpp 重连后自动重载**（问题 #11092）和 **工具调用去重开关**（问题 #10379）——两者都将提升代理可靠性。

> 🔧 实用提示：对于 Windows 开发者，请避免安装至含空格或特殊字符的路径；使用带有 PR #11119 改进的 `nvidia-smi` 检测能力的最新安装器，防止无声降级为仅 CPU 模式。

---  
*简报基于 GitHub 活动整理（2026-09-17）*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*