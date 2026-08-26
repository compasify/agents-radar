# AI 基础设施日报 2026-08-26

> 生成时间: 2026-08-26 00:00 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# AI 基础设施生态横向对比分析报告（2026-08-26）

## 1. 生态全景

当前 AI 基础设施生态呈“多引擎竞速、全栈联动”态势：新模型架构（Kimi-K3、Qwen3.8、Spark 3、Nemotron 3.5）密集发布，推理引擎（vLLM、SGLang）与本地运行时（llama.cpp、Ollama）快速跟进，但量化组合（NVFP4/MXFP4）与特定硬件（ROCm、RDNA4、SM90）上的正确性问题频发，生产环境稳定性仍显脆弱。网关层（LiteLLM）与微调层（Unsloth）同步强化成本可观测性与工具链，但快速迭代同样带来回归风险。投机解码、KV Cache 管理、多模态支持成为各层共同攻坚方向，社区协作活跃，但“版本固定 + 严格验证”仍是生产部署的务实选择。

## 2. 各项目活跃度对比

> 注：PR/Issue 数为对应日报中提及的关键条目，并非 GitHub 全量；Release 为当日实际发布或合并的版本/里程碑。

| 项目 | 提及关键 Issues | 提及关键 PRs | Release 情况 | 活跃度（基于当日动态） |
|------|:---:|:---:|:---:|:---:|
| vLLM | 13 | 13 | 无 | ★★★★★ |
| SGLang | 13 | 9 | 无 | ★★★★☆ |
| llama.cpp | 8 | 18 | 8（含 v0.3.0） | ★★★★★ |
| Ollama | 9 | 11 | 无 | ★★★☆☆ |
| LiteLLM | 9 | 11 | 无 | ★★★☆☆ |
| Unsloth | 13 | 10 | 2（v0.1.802/803-beta） | ★★★★☆ |

- **vLLM**：P0 级稳定性问题集中（Kimi-K3 多起），但架构演进与优化 PR 密集，属“高风险高活跃”。
- **SGLang**：新架构合入速度快（Spark 3 / Nemotron 3.5），同时有多项稳定性回归亟待处理。
- **llama.cpp**：v0.3.0 主版本发布，大量后端适配与性能 PR 合入，社区规模与迭代频率最高。
- **Ollama / LiteLLM**：无发版，但 PR 持续累积，以集成修复和可观测性增强为主。
- **Unsloth**：高频 beta 迭代，功能扩展与正确性 bug 并存，Studio 进入快速演进期。

## 3. 模型支持竞速

| 项目 | 新模型 / 新架构支持 | 状态 / 亮点 |
|------|---------------------|-------------|
| **vLLM** | K2-Horizon 新架构；Idefics3 / SmolVLM ViT CUDA Graph；Kimi-K3（支持但有 P0 缺陷） | 新架构 PR 已提交；多模态视觉编码器生产级支持推进；`load_weights` 可选化降低接入门槛 |
| **SGLang** | Spark 3 架构原生支持；Nemotron 3.5 Lightning 投机解码；NemotronH_Omni_Reasoning_V3；MiniMax-H3 多卡修复；GB10 coobook | Spark 3 与 Nemotron 3.5 已合并，模型支持速度领先；多模态与量化路径仍在补全 |
| **llama.cpp** | Q2_0 量化格式（CPU/Metal/CUDA）；Vulkan fp32-only 设备；CUDA Graphs 扩展到 Pascal；Apple RDMA RPC | Bonsai 三元模型可本地部署；老架构 GPU 获得加速；边缘硬件适配广泛 |
| **Ollama** | MLX 后端新增 GraniteForCausalLM；Qwen3.8 系列兼容性问题 | 集成 IBM Granite 4.1；但 Qwen3.8 在 CUDA/ROCm/Metal 均有回归，需警惕 |
| **LiteLLM** | 无新模型，聚焦网关侧适配 | Bedrock GPT-5.x 的 `reasoning_effort` 映射修复；Fireworks 成本条目补充 |
| **Unsloth** | Qwen3.5 MTP 训练损失；EXL3 量化后端；MLX 真实上下文长度支持 | 微调层面向新模型的训练优化；MLX 运行时修复提升 Mac 可用性 |

**结论**：大模型架构的快速支持上，**vLLM 与 SGLang 处于第一梯队**，SGLang 当天合并两个新架构，vLLM 提交新架构 PR 并扩展多模态；**llama.cpp** 在量化格式与边缘硬件适配领先；**Ollama / LiteLLM** 更侧重上层集成与兼容性；**Unsloth** 专注微调侧的新模型训练支持。

## 4. 性能优化前沿

各项目优化火力高度集中在以下方向：

- **KV Cache 与缓存技术**
  - SGLang：修复 HiCache L3 备份 segfault、unified_cache 长 prompt 备份缺失、key 未包含 kv_cache_dtype 等问题；
  - vLLM：通过 MM 处理器预计算绕过动态 mask 的 CUDA Graph 优化；
  - Unsloth：修复 KV cache 量化在 TP 下不生效的问题。

- **投机解码（Speculative Decoding）**
  - vLLM：跳过 DP rank 间 CPU all-reduce（#53694），adaptive verification 扩展至所有 draft 模型（#52228）；
  - SGLang：Nemotron 3.5 Lightning 投机解码支持，DSA 独立 top-k 后端；
  - llama.cpp：MTP 草稿接受率坍缩问题暴露（#27572），等待修复。

- **量化与精度优化**
  - llama.cpp：Q2_0 三后端合拢（CPU/Metal/CUDA），SYCL TILE 内核用于量化 KV 解码；
  - vLLM：MXFP4 + block-FP8 混合精度回归（#53805）；
  - SGLang：AMD DSV4 MXFP8 MoRI 调度格式对齐；
  - Unsloth：EXL3 量化后端（2/3/4/6/8-bit），支持 MoE。

- **分布式推理与通信**
  - vLLM：MRV2 默认化（高风险变更）、Punica LoRA kernel 减少 CPU/GPU 同步；
  - SGLang：Custom all reduce v2 适配 sm_107；
  - llama.cpp：Apple RDMA 作为 RPC 传输，MoE 专家 SSD 流式加载。

- **算子级优化**
  - SGLang：MoE 模拟专家选择算子融合为单 Triton kernel；
  - vLLM：TRITON_MLA_SPARSE 后端扩展至 sm80/sm120/sm121；
  - llama.cpp：HIP 端 `__shfl_xor_sync` 替换为 dpp 指令。

## 5. 分层定位差异

| 项目 | 层级 | 核心定位 |
|------|------|----------|
| **vLLM** | 推理引擎 | 生产级高吞吐 LLM 服务，聚焦性能、稳定性与大规模部署（TP/PP/PD），业界事实标准之一 |
| **SGLang** | 推理引擎 | 与 vLLM 直接竞争，强调新模型架构的快速支持、多模态统一推理，以及更强的前沿算子融合 |
| **llama.cpp** | 本地运行时 | 跨平台轻量推理（CPU/GPU/Apple Silicon），追求边缘部署的极致兼容性与量化支持，是本地运行时的标杆 |
| **Ollama** | 本地运行时 / 部署工具 | 面向开发者与桌面用户，简化模型下载、运行与 API 暴露，更偏易用性而非极致性能 |
| **LiteLLM** | LLM 网关 | 位于调用层，提供统一 API（OpenAI/Anthropic/Bedrock 等）、成本路由、预算控制、fallback 与可观测性，是企业级 Agent 基础设施的管控面 |
| **Unsloth** | 微调框架 | 主打高性能微调（LoRA 等），同时向一体化平台（Unsloth Studio）演进，涵盖数据导出、工具调用治理与多后端支持（MLX/EXL3） |

## 6. 值得关注的趋势信号

1. **新模型架构迭代速度已远超稳定性治理**：Kimi-K3 在 vLLM 与 SGLang 同时出现 P0/P1 崩溃，Qwen3.8 在 Ollama 上多后端异常，提示“架构先行”带来的正确性风险。生产环境必须实施严格的回滚预案和版本锁定。

2. **投机解码成为推理引擎的“默认武器”**：vLLM 与 SGLang 均在优化 EAGLE/MTP/DFlash 的通信与验证开销，但 PD 分解、多 DP 场景下的不兼容问题仍多，选用需谨慎验证。

3. **量化组合的正确性成为最大隐患**：NVFP4/MXFP4 混合精度在 H100/B300 上出现静默损坏，I-quant GGUF 在 llama.cpp 上无专用 kernel，Q2_0 刚完成三后端支持——量化与模型、硬件的交叉矩阵远未安全。

4. **成本可观测性正在向网关和运行时下沉**：LiteLLM 增加 cache-read 价格决胜与异步失败钩子，Ollama 计划暴露 `prompt_eval_cached_count`，未来基于 token 成本的路由与预算控制将更精细。

5. **本地与边缘硬件的适配竞争白热化**：llama.cpp 扩展 CUDA Graphs 到 Pascal、Vulkan fp32-only，支持 Apple RDMA；Ollama 新增 MLX 架构；Unsloth 修复 MLX 上下文长度——老设备与新型 iGPU/APU 的覆盖成为差异化卖点。

6. **微调工具正向全流程平台演进**：Unsloth Studio 高频迭代（189 条 PR），集成 EXL3、MCP OAuth、LAN 免密访问等，但 batch 确定性、Auto Compaction 误触等正确性问题可能影响依赖自动化的用户。

7. **AI 基础设施的“生产就绪”标准正在提高**：今日动态中多个“镜像 latest 不可控”“build 后回归”案例表明，依赖自动升级将带来巨大风险。技术决策者应建立“锁定镜像 + 回归测试 + 分阶段灰度”的准入机制。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM 动态日报 — 2026-08-26

## 今日速览
1. **Kimi-K3 长上下文崩溃问题成为最严重稳定性风险**：多个 issue 报告模型在长 prompt 后产生 NaN logits、重复 token 输出或 NVFP4 下完全退化，且 ROCm 平台存在独立路线图积压。
2. **MRV2（Model Runner V2）默认化 PR 推进**：计划将除特定 ROCm 模型外全部切换至 MRV2，但当前仍有性能与特性缺口，属高风险变更，需重点关注。
3. **新模型架构 K2-Horizon 支持 PR 提交**，同时 Idefics3/SmolVLM ViT CUDA Graph 支持已就绪，多模态支持继续向生产级推进。

## 版本发布与破坏性变更
- **无新版本 Release**（最近 24 小时无 Release 活动）。
- **[PR #53805](https://github.com/vllm-project/vllm/pull/53805)（拟回滚）**：MXFP4 + block-FP8 混合精度路径在 H100 上出现 post-merge 正确性失败（`test_gsm8k_corr`），提议 revert #51332。影响：使用该量化组合的用户应避免升级至包含 #51332 的 build。

## 新模型与硬件支持
- **[PR #53806](https://github.com/vllm-project/vllm/pull/53806)：新增 K2-Horizon 模型架构**，包含模型实现、注册表与文档，提交即用。
- **[PR #47625](https://github.com/vllm-project/vllm/pull/47625)：Idefics3 / SmolVLM ViT 编码器完整 CUDA Graph 支持**，通过预计算 position IDs 绕开动态 mask，属于 #38175 的里程碑 PR。
- **[Issue #52803](https://github.com/vllm-project/vllm/issues/52803)：Kimi-K3 在 gfx942（MI325X/MI300X）的 ROCm 支持路线图**，与 gfx950 的状态分开跟踪——目前 gfx942 上 K3 仍属 gap，AMD 用户需关注该 issue 作为主追踪入口。
- **[PR #49038](https://github.com/vllm-project/vllm/pull/49038)：使 `load_weights` 完全可选**，自动生成 `AutoWeightsLoader`，降低新模型接入门槛（覆盖 Llama、Qwen、DeepSeek、Kimi 等架构）。

## 性能与优化
- **[PR #53183](https://github.com/vllm-project/vllm/pull/53183)：MRV2 默认化**（除 ROCm 特定模型）— 目标减少 CPU/GPU 同步与 Python 开销，但在 MRV2 性能修复前 **不推荐生产环境使用**。
- **[PR #53694](https://github.com/vllm-project/vllm/pull/53694)：spec decode（EAGLE/MTP）跳过 DP rank 间的 CPU all-reduce 同步**，减少 draft prefill 前 `sync_cudagraph_and_dp_padding` 的通信开销，对多 DP 推理吞吐有直接收益。
- **[PR #52228](https://github.com/vllm-project/vllm/pull/52228)：adaptive verification 扩展到所有 draft-model 型 speculator**（MTP / EAGLE3 / DFlash 1&2 / DSpark），不再依赖 DSpark 的 confidence head，有望降低投机解码的验证开销。
- **[Issue #38006](https://github.com/vllm-project/vllm/issues/38006)：继续推进 `TRITON_MLA_SPARSE` 后端**以覆盖 sm80/sm120/sm121，对 Ada/Ampere 用户的 MLA 稀疏化有直接价值。
- **[PR #53309](https://github.com/vllm-project/vllm/pull/53309)：Punica LoRA kernel metadata 改为 CPU 侧准备**，配合非阻塞 H2D 拷贝与元数据复用，降低 LoRA 推理时的每请求 CPU/GPU 同步压力。

## 稳定性与回归
按严重程度排列（P0 为静默/大范围数据损坏，P1 为集群级故障，P2 为单模型/特性问题）：

**P0 — 静默错误或大规模退化**
- **Kimi-K3 长上下文后所有请求退化为重复 token**（[#51039](https://github.com/vllm-project/vllm/issues/51039)）：~240K token prompt 触发 NaN logits，导致后续所有请求持续输出重复 token，部署无法自愈。疑似 packed KDA prefill 算子问题，尚无 fix PR。
- **Kimi-K3 NVFP4 在 8×B300 上产生 incoherent 推理输出**（[#51798](https://github.com/vllm-project/vllm/issues/51798)）：v0.27.0 生产部署中复现，已回滚，尚未提供 fix。
- **DFlash fused-KV 投影对量化 drafter 静默损坏**（[#51581](https://github.com/vllm-project/vllm/issues/51581)）：`F.linear` 直接调用 sliced `qkv_proj` weight，可绕过 quantize 反量化逻辑；NVFP4/Qwen3.6-35B 场景受影响，属内存+数值双重风险。
- **ROCm/gfx942 DeepSeek-V4-Flash 静默检索损坏**（[#52109](https://github.com/vllm-project/vllm/issues/52109)）：prompt ≥ 4–5k tokens 后 AITER sparse indexer 引发静默错误输出，镜像 v0.26.1rc1.dev668，等待上游 AITER 修复。

**P1 — 死锁 / 崩溃级回归**
- **多节点启动死锁（Ray executor, 2×TP-16）**（[#52907](https://github.com/vllm-project/vllm/issues/52907)）：0.26.1rc1.dev78 → dev148 之间引入回归，gloo barrier 在 `in_the_same_node_as()` 永不完成，30 分钟后超时退出，无 fix PR。
- **调度器永久停止准入请求**（[#53130](https://github.com/vllm-project/vllm/issues/53130)）：`running + skipped_waiting` 达到 `max_num_seqs` 后 scheduler 不再 admit，引擎仍报 healthy、KV cache 空闲，仅重启可恢复。
- **P/D 拆分 decode 实例 segfault**（[#49238](https://github.com/vllm-project/vllm/issues/49238)）：NIXL `loadRemoteMD` 在 prefill pod 重启后崩溃，影响长期运行的 P/D 集群。

**P2 — 单模型 / 特性问题（已有关闭或修复中的条目）**
- **Gemma4 无法随 `vllm-openai:latest` 启动**（[#51744](https://github.com/vllm-project/vllm/issues/51744)，👍13）：镜像内置 Transformers 5.15.0 与 Gemma4 不兼容，已报告并关闭前的相关 issue #44494 已标记 closed。
- **Qwen3.5 离线推理 vs API server 10 分 benchmark 差距**（[#40699](https://github.com/vllm-project/vllm/issues/40699)）：相同 `input_ids` 下 tokenizer/采样行为不一致，已关闭但未给出根因。
- **Qwen3-VL-Embedding API 与离线 transformer 结果不一致**（[#33167](https://github.com/vllm-project/vllm/issues/33167)）：vllm 0.14.0 上仍处于讨论中，37 条评论未收敛。
- **GLM-5.2 FP8（SM90）DC 不可用**（[#53134](https://github.com/vllm-project/vllm/issues/53134)）：sparse MLA 后端缺少 decode-LSE 支持。
- **多模态修复 PR：[#53808](https://github.com/vllm-project/vllm/pull/53808) 修复 modality-scoped `mm_processor_kwargs` 被忽略**，影响 Qwen3-VL/3.8 长视频编码器缓存预留；**[#53763](https://github.com/vllm-project/vllm/pull/53763) 修复 Responses API 对 malformed namespace tools 返回 HTTP 500**；**[#52830](https://github.com/vllm-project/vllm/pull/52830) 修复共享 parser engine 下 reasoning adapter 被静默禁用**。
- **构建修复：[#53807](https://github.com/vllm-project/vllm/pull/53807)** 解决 Ampere/Ada 下 `fused_gdn_decode_post_conv_mtp` 未声明导致编译失败；**[#49600](https://github.com/vllm-project/vllm/pull/49600)** 修复 torch 2.14 nightly 下 mamba-ssm C++20 编译问题。

## 对应用开发者的意义
- **API 输出一致性风险**：Qwen3.5 离线/在线 benchmark 差异与 Qwen3-VL-Embedding 向量不一致问题长期未收敛。若你的应用依赖 **embedding 向量或微调后的采样质量**，上线前需对 vLLM 在线服务与离线参考实现执行向量级/分布级对齐测试，不要默认二者等价。
- **Kimi-K3 / Qwen3.5 / DeepSeek-V4 用户需立即验证**：如果你正在服务上述任一模型，请确认你的部署不受今日 P0 问题影响。生产环境强烈建议**固定镜像版本并关闭自动拉取 `latest`**（今天 Gemma4 的失败再次证明 `latest` 不可控）。
- **多模态与结构化输出的增量改进**：`mm_processor_kwargs` 修复（#53808）意味着长视频/多模态推理的资源预留更准确；tool-calling 的 namespace 校验（#53763）与 reasoning adapter 修复（#52830）直接提升 Agents 场景的鲁棒性——特别是使用 Responses API 并依赖 reasoning + 工具调用的开发者应跟进测试。
- **MRV2 默认化（#53183）是下一个破坏性变更**：一旦合并，所有非 ROCm 模型将默认走 MRV2。建议技术团队在下个版本发布后观察 EAGLE/MTP spec decode 与 DFlash 场景的吞吐/稳定性，必要时通过环境变量强制回退 MRV1。
- **面向性能调优的开发者**：DP 同步跳过（#53694）与 adaptive verification 通用化（#52228）表明官方正在系统性降低投机解码的开销。如果你的服务使用 MTP/DFlash，可关注这两个 PR 的合入时间点以提前规划 perf 回归验证。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang 动态日报 2026-08-26

## 今日速览
过去 24 小时 SGLang 无新版本发布。多模态/新模型支持持续加速推进：Spark 3 架构和 Nemotron 3.5 Lightning spec-dec 支持 PR 已合入，GB10 新硬件 cookbook 与 NemotronH_Omni_Reasoning_V3 支持正在开发中。稳定性方面，Kimi-K3 在 v0.5.18 的崩溃、HiCache L3 首次备份 segfault 及 DeepSeek-V4-Flash EP 在 SM90 的崩溃成为关注焦点。

## 版本发布与破坏性变更
过去 24 小时无新 Release、无 API/配置破坏性变更。

## 新模型与硬件支持
- **[已合并] Spark 3 模型架构原生支持**：PR #35963 合入，引入 Spark 3 配置与因果语言模型，实现滑动窗口/全量注意力、头级别注意力输出门控、TP/PP 并行。[github.com/sgl-project/sglang/pull/35963](https://github.com/sgl-project/sglang/pull/35963)
- **[已合并] Nemotron 3.5 Lightning 投机解码**：PR #36186 合入，以最小侵入方式支持该架构，新增 ModelOpt W4A16 NVFP4 量化路径，并取代 #33554 的实现方案。[github.com/sgl-project/sglang/pull/36186](https://github.com/sgl-project/sglang/pull/36186)
- **[进行中] NemotronH_Omni_Reasoning_V3 支持**：当前未识别的架构会回退到 Transformers 通用实现，导致 MTP 与量化视觉权重加载错误，PR #35599 正在补齐注册。[github.com/sgl-project/sglang/pull/35599](https://github.com/sgl-project/sglang/pull/35599)
- **[进行中] DGX Spark (GB10, sm121) 新增至 Ling-3.0-flash cookbook**：PR #36364 补充了 MXFP4 量化、TP1 的实测数据，包括低延迟 + DSPARK（外部草稿模型）与高吞吐纯解码两种配置。[github.com/sgl-project/sglang/pull/36364](https://github.com/sgl-project/sglang/pull/36364)
- **[进行中] MiniMax-H3 多卡部署修复**：PR #36398 修复 dp_size>1 死锁与跨请求音频确定性两个问题。[github.com/sgl-project/sglang/pull/36398](https://github.com/sgl-project/sglang/pull/36398)

## 性能与优化
- **Custom all reduce v2 针对 sm_107 调优**（PR #36397）：将自定义 all reduce 内核适配 NVIDIA sm_107 架构，目标提升多卡通信效率。[github.com/sgl-project/sglang/pull/36397](https://github.com/sgl-project/sglang/pull/36397)
- **MoE 模拟专家选择算子融合为单 Triton kernel**（PR #29718，进行中）：原实现每层触发约 5-7 个小算子，融合后可降低 benchmark 中模拟专家路由的开销与显存压力。[github.com/sgl-project/sglang/pull/29718](https://github.com/sgl-project/sglang/pull/29718)
- **AMD 侧 DSV4 MXFP8 MoRI 调度格式对齐**（PR #36119，进行中）：当前 MoRI 三种 dispatch dtype 均无法产生 w4a8 MoE 所需的携带 e8m0 微缩放的 FP8 激活，该 PR 补齐对齐以利用 MoRI 加速。[github.com/sgl-project/sglang/pull/36119](https://github.com/sgl-project/sglang/pull/36119)
- **DSA 投机解码新增独立 top-k 后端选项**（PR #36313，进行中）：新增 `--speculative-dsa-topk-backend`，允许目标模型与草稿模型使用不同的 DSA indexer top-k 后端，避免共享 `ServerArgs` 导致的配置串扰。[github.com/sgl-project/sglang/pull/36313](https://github.com/sgl-project/sglang/pull/36313)
- **性能问题识别：I-quant GGUF 无 MMQ kernel**（Issue #35019）：IQ1_* 至 IQ4_* 量化类型的 batch matmul 回退到慢速路径，prefill 相比 llama.cpp 慢 4-6 倍；K-quant 与 Q* 类型不受影响。[github.com/sgl-project/sglang/issues/35019](https://github.com/sgl-project/sglang/issues/35019)

## 稳定性与回归
**高严重度**
- **Kimi-K3 在 v0.5.18 release 中崩溃**（Issue #36018）：最新版本仍可复现，暂未见关联修复 PR。[github.com/sgl-project/sglang/issues/36018](https://github.com/sgl-project/sglang/issues/36018)
- **HiCache L3 首次备份 segfault**（Issue #36302）：nvcc 12.8 编译 + CUDA 13 运行时环境下，`staged_write_back.cuh` 中 `cudaMemcpyBatchAsync` 存在编译期/运行期的 ABI 不匹配，触发段错误。[github.com/sgl-project/sglang/issues/36302](https://github.com/sgl-project/sglang/issues/36302)
- **DeepSeek-V4-Flash 专家并行在 SM90（Hopper）崩溃**（Issue #35557）：DeepGEMM MXFP4 MegaMoE 仅支持 SM100，但失败发生在权重加载、MHC 预热的 CUDA graph 捕获阶段之后，报错信息具有误导性（无明确提示架构不支持）。[github.com/sgl-project/sglang/issues/35557](https://github.com/sgl-project/sglang/issues/35557)
- **DFLASH 投机解码不受 PD disaggregation 支持**（Issue #36140）：decode 侧启用 `--disaggregation-mode decode` 时，DFLASH 产生 `spec_info None` 崩溃，进而导致 watchdog 自杀；DSPARK / EAGLE 均正常。[github.com/sgl-project/sglang/issues/36140](https://github.com/sgl-project/sglang/issues/36140)
- **WSL2 下多模态 CUDA IPC 自动选择导致崩溃**（Issue #35385）：WSL2 不支持 CUDA IPC，但 `_handle_multimodal_feature_transport` 仍自动选择 `cuda_ipc` 路径，且未在 `--mm-feature-transport` 提示原因。建议在 WSL2 上显式设置非 IPC 传输。[github.com/sgl-project/sglang/issues/35385](https://github.com/sgl-project/sglang/issues/35385)

**中严重度**
- **DeepSeek-V4 在 tool_choice="none" 时泄漏原始 DSML 标记**（Issue #35736）：工具调用场景下输出中会出现原始 DSML 控制符，影响 downstream parser。[github.com/sgl-project/sglang/issues/35736](https://github.com/sgl-project/sglang/issues/35736)
- **HiCache 存储 key 未包含 kv_cache_dtype**（Issue #33268）：不同 KV cache dtype（如 FP8 vs BF16）的运行共享同一持久化 key，导致跨运行缓存碰撞与数据错乱。[github.com/sgl-project/sglang/issues/33268](https://github.com/sgl-project/sglang/issues/33268)
- **unified_cache 长 prompt 备份缺失**（Issue #33714）：当新 token extend 长度超过 `chunked_prefill_size` 时，write-through 备份逻辑跳过，导致长上下文前缀无法命中 HiCache。[github.com/sgl-project/sglang/issues/33714](https://github.com/sgl-project/sglang/issues/33714)
- **PP8 + PD disaggregated Kimi-K3 存在约 30 秒 TTFT 下限**（Issue #34815）：负载无关的固定延迟，影响 PP 配置下的 prefill 调度。[github.com/sgl-project/sglang/issues/34815](https://github.com/sgl-project/sglang/issues/34815)

**低严重度 / 已关闭**
- MiniMax-M2 CPU 推理处理请求时失败（#35779）。[github.com/sgl-project/sglang/issues/35779](https://github.com/sgl-project/sglang/issues/35779)
- HiCache 在线更新权重后可能加载陈旧 KV 页面（#26792，已关闭）。[github.com/sgl-project/sglang/issues/26792](https://github.com/sgl-project/sglang/issues/26792)
- Qwen3-VL ViT CUDA graph `sin_cos_ws` use-after-free（#29216，已关闭）。[github.com/sgl-project/sglang/issues/29216](https://github.com/sgl-project/sglang/issues/29216)

## 对应用开发者的意义
- **关注 DeepSeek-V4 的 DSML 泄漏问题**：若你的 Agent 使用 tool_choice="none"（如默认聊天模式），输出可能混入原始 DSML 控制符，需要在下游解析时做容错或等待修复 PR。工具调用场景建议显式设置 tool_choice 并验证输出纯净度。
- **PD + PP 部署需评估 TTFT 风险**：Kimi-K3 PP8 PD 部署存在约 30 秒的负载无关 TTFT 下限，这直接影响交互式应用的响应时间预算。建议避免对这类模型使用 PP8 或考虑 non-PP prefill 拓扑。
- **投机解码选型注意 DFLASH 限制**：在 PD disaggregation 下 DFLASH 不可用，请切换到 DSPARK / EAGLE；同时新的 `—speculative-dsa-topk-backend` 选项为 DSA 场景提供了更灵活的调优空间。
- **新模型支持加速落地**：Spark 3 与 Nemotron 3.5 Lightning 已合入，适合快速验证；GB10（DGX Spark）用户可参考新的 Ling-3.0-flash cookbook 配置。
- **生产环境警告**：WSL2 无法运行多模态模型的 CUDA IPC 路径，需显式指定 `--mm-feature-transport`；SM90 上不要对 DeepSeek-V4-Flash 开启 DeepEP 专家并行，避免昂贵的晚期崩溃。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

## llama.cpp 日报 2026-08-26

### 今日速览

v0.3.0 正式发布，项目进入新版本周期；KleidiAI 构建系统完成重构并合并（b10630）。与此同时，社区修复了一批关键后端问题：Vulkan 新增 fp32-only 设备支持（#27723）、CUDA Graphs 扩展到 Pascal 架构（#27721）、RDNA4 上 Flash Attention 回归修复已提交（#26419）。稳定性方面，HIP/ROCm 在 Strix Halo 上仍有多起正确性 Bug 待解决。

---

### 版本发布与破坏性变更

- **v0.3.0 正式发布，版本号从 0.1.x 直接升至 0.3.0**，包含此前累积的架构与 API 变化，建议应用开发者关注新版本兼容性（[b10621](https://github.com/ggml-org/llama.cpp/releases/tag/b10621)）。
- **KleidiAI 构建系统重构合入（b10630，#26077）**：移除手动添加 kernel 源文件和 -march 标志的要求，改为依赖 Kleidiai 库自身的 CMakeLists。此举改动 ARM 相关构建链路，第三方交叉编译脚本可能需要适配（[b10630](https://github.com/ggml-org/llama.cpp/releases/tag/b10630) / [PR #26077](https://github.com/ggml-org/llama.cpp/pull/26077)）。
- **ROCm CI 迁移至 Ubuntu 24.04（b10629，#27681）**，与 AMD 官方 wheel 支持声明对齐（[b10629](https://github.com/ggml-org/llama.cpp/releases/tag/b10629)）。
- **SYCL 后端标记 tq2_0 为不支持（b10617，#27660）**，使用该量化格式的 SYCL 用户会看到更明确的报错（[b10617](https://github.com/ggml-org/llama.cpp/releases/tag/b10617)）。

---

### 新模型与硬件支持

- **Q2_0 量化格式三后端合拢**：CPU（#24448）、Metal（#25419）、CUDA（#25707）均已支持，主要面向 [Ternary Bonsai 模型](https://huggingface.co/collections/prism-ml/bonsai)（1.7B/4B/8B/27B），三个 PR 均于昨日更新，基本确认已合并（[PR #24448](https://github.com/ggml-org/llama.cpp/pull/24448) / [PR #25419](https://github.com/ggml-org/llama.cpp/pull/25419) / [PR #25707](https://github.com/ggml-org/llama.cpp/pull/25707)）。
- **Vulkan 后端支持 fp32-only 设备**（#27723）：Mesa Haswell 驱动（hasvk）不暴露 fp16 能力，此前直接抛 "Unsupported device"，现在可走 fp32 回退路径（[PR #27723](https://github.com/ggml-org/llama.cpp/pull/27723)）。
- **CUDA Graphs 扩展至 Pascal（sm_61）**（#27721），老架构用户也能获得捕获与重放的加速收益（[PR #27721](https://github.com/ggml-org/llama.cpp/pull/27721)）。
- **Apple RDMA 可作为 RPC 传输**（b10628，#26421），macOS 生态的多机扩展能力增强（[b10628](https://github.com/ggml-org/llama.cpp/releases/tag/b10628)）。

---

### 性能与优化

- **CUDA Graphs on Pascal**：MoE 模型 +40%，dense 模型 +7%，无回归（[PR #27721](https://github.com/ggml-org/llama.cpp/pull/27721)）。
- **RDNA4 Flash Attention 回归修复**（#26419）：针对 #26220 报告的 rocWMMA 移除后 prompt processing 深度下慢 2x 的问题，通过放宽 `flash_attn_ext_f16` 的设备守卫，使 head dim 256 也能用上 WMMA tensor cores（[PR #26419](https://github.com/ggml-org/llama.cpp/pull/26419)）。
- **SYCL TILE 内核用于量化 KV 解码**（#26689）：在 BMG 上相对 VEC 内核，Qwen3.6-35B / Gemma 4 26B / Gemma 4 12B 在 32K 与 118K 上下文中获得 **+42% 到 +169%** 的 decode 加速，零回归（[PR #26689](https://github.com/ggml-org/llama.cpp/pull/26689)）。
- **HIP 端 `__shfl_xor_sync` 替换为 dpp 指令**（#26466），小幅性能优化（[PR #26466](https://github.com/ggml-org/llama.cpp/pull/26466)）。
- **MoE 路由专家 SSD 流式加载**（#25294）：可运行大于 RAM 的模型，每层维护 `n_slots` 专家 slab 的设备端缓存（[PR #25294](https://github.com/ggml-org/llama.cpp/pull/25294)）。
- **调度器 UMA 环形缓冲区**（#27311）：基于 sanitizer 加固，修复视图基址 pinned memory 重复分配的问题（[PR #27311](https://github.com/ggml-org/llama.cpp/pull/27311)）。

---

### 稳定性与回归

以下按严重程度排列：

1. **HIP 集成 GPU（Strix Halo / gfx1151）下多请求响应串线**（[#25992](https://github.com/ggml-org/llama.cpp/issues/25992)）：`-np 4 --kv-unified` 时某请求返回另一个请求的完整 verbatim 响应。严重正确性问题，bisect 到 c7d87229，尚无修复。建议 HIP 用户暂时关闭 `--kv-unified`。
2. **ROCm 在 gfx1151 上产生损坏输出**（[#27579](https://github.com/ggml-org/llama.cpp/issues/27579)）：同一权重、同一构建、byte-identical 参数下，Vulkan 输出正确而 HIP/ROCm 错误，涉及两个 dense 架构。无修复，建议优先使用 Vulkan 后端。
3. **CUDA 内核 stall 被 watchdog 杀死**（[#27102](https://github.com/ggml-org/llama.cpp/issues/27102)）：RTX Pro 6000 Blackwell MAX-Q 上执行期间卡死，29 条评论，尚无修复 PR。
4. **MTP 草稿接受率在 `-np N` 下坍缩为 0.0**（[#27572](https://github.com/ggml-org/llama.cpp/issues/27572)）：异步 `t_h_nextn` 设备到主机复制存在竞争。使用 MTP 自推测解码的并行服务会受影响，无修复。
5. **原生 MTP 保留独立 CUDA compute arena 导致 OOM**（[#27282](https://github.com/ggml-org/llama.cpp/issues/27282)）：共享 gallocr 可解决，但暂未合入。
6. **RDNA4 FA 在深度上下文中 prompt processing 最高慢 2x**（[#26220](https://github.com/ggml-org/llama.cpp/issues/26220)）：已有修复 PR（[#26419](https://github.com/ggml-org/llama.cpp/pull/26419)），等待合并。
7. **RDNA3 iGPU（780M）上 HIP 后端 GPU Hang**：已提交 PR 关闭 GDN cache fusion（[#27722](https://github.com/ggml-org/llama.cpp/pull/27722)），原因是该融合路径在 gfx1103 上触发硬件异常。
8. **Vulkan 批量 decode 吞吐在 n_tokens=9 断崖**（[#25356](https://github.com/ggml-org/llama.cpp/issues/25356)）：512-expert MoE，B=8 时 122.5 t/s → B=9 时 82.9 t/s，由 MMV dispatch 固定 8-token 阈值导致。
9. **Metal 空指针检查修复 OOM 崩溃**（[b10622](https://github.com/ggml-org/llama.cpp/releases/tag/b10622), #25371）：`ggml_metal_buffer_init` 返回 NULL 时不再直接解引用。
10. **gpt-oss-20b Harmony 通道头解析失败**（[#27720](https://github.com/ggml-org/llama.cpp/issues/27720)）：~4% 的 turn 因 `<|channel|>` 后跟自由文本而 PEG 解析失败，整体报错。新报告，尚无修复。
11. **小修复**：grammar 支持 `\-` 在字符类中的转义（[b10618](https://github.com/ggml-org/llama.cpp/releases/tag/b10618), #27591）；Qwen3-Coder workaround 作用域收紧（[b10625](https://github.com/ggml-org/llama.cpp/releases/tag/b10625), #27679）。

---

### 对应用开发者的意义

- **版本升级提示**：v0.3.0 是一次主版本跳跃，API 可能有 breaking change。如果锁定在 0.1.x，建议先查看 changelog 再升级；KleidiAI 构建重构会影响 ARM 交叉编译的流水线配置。
- **AMD 平台后端选型**：Strix Halo 等 RDNA3.5 iGPU 上，HIP/ROCm 仍有正确性问题（#25992、#27579），如果对稳定性要求高，**建议仍以 Vulkan 作为默认后端**，HIP 仅用于确定性验证。
- **推测解码（MTP）在多并发场景下暂不建议生产使用**：`-np N` 下存在草稿接受率坍缩和显存 OOM 问题（#27572、#27282），单槽场景更稳妥。
- **关注 Q2_0 量化格式**：如果涉及 Bonsai 三元模型推理，Q2_0 的 CPU/Metal/CUDA 三后端合拢意味着可本地部署，但需注意量化质量与工具链适配。
- **MoE 流式加载（#25294）值得跟踪**：它使超大 MoE 模型在受限内存下运行成为可能，但当前仍为 PR 状态，生产依赖需谨慎。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

### 1. 今日速览

- **核心运行时无新版本发布**，但多项关键 PR 与修复正在推进中，重点集中在 **MLX 后端稳定性**（内存管理、Metal 超时、模型加载）与 **缓存 token 计费/可观测性** 上。
- 官方正在快速收敛 **Claude Desktop 集成** 的细节问题（模型切换、UI 状态、图标使用），并启动了对 **Atomic Agent** 新集成的讨论。
- 社区对 **Qwen3.8 系列模型** 在不同硬件（CUDA、ROCm、Metal）上的兼容性/回归问题反馈密集，需密切关注相关修复进展。

---

### 2. 版本发布与破坏性变更

**当前无新版本发布。** 今日无破坏性 API/配置变更需要提示。

---

### 3. 新模型与硬件支持

- **新增 MLX 后端模型架构支持**：PR #17972 为 MLX 后端添加了 `GraniteForCausalLM` 架构支持，用于 IBM Granite 4.1 系列模型。这扩大了 Ollama 在 Apple Silicon 上的可用模型范围。
  - **链接**: [PR #17972](https://github.com/ollama/ollama/pull/17972)
- **社区呼声：AMD NPU 支持**：Issue #5186 (更新于今日) 依然保持开放，社区对 AMD Ryzen NPU 的支持需求强烈（👍 145），已有开发者提供 Linux 驱动链接供参考。
  - **链接**: [Issue #5186](https://github.com/ollama/ollama/issues/5186)
- **社区呼声：Qwen3.8-35B-A3B Q3_K_M MLX 量化**：Issue #17869 请求官方发布适用于 16GB/24GB Mac 的 Q3_K_M MLX 量化版本，以解决内存容量不足的问题。
  - **链接**: [Issue #17869](https://github.com/ollama/ollama/issues/17869)

---

### 4. 性能与优化

- **缓存 token 可观测性增强（进行中）**：PR #17943 旨在原生 API 及 OpenAI/Anthropic 兼容端点中报告 `prompt_eval_cached_count` 等缓存命中字段，并优化 CLI/基准测试的 prefill 速率计算逻辑。**这对于优化成本与延迟分析至关重要**。
  - **链接**: [PR #17943](https://github.com/ollama/ollama/pull/17943)
- **MLX 慢存储加载优化**：PR #17998 修复了从慢速磁盘加载大模型时，因 eager evaluation 导致 Metal GPU 命令缓冲超时被操作系统强杀的问题。
  - **链接**: [PR #17998](https://github.com/ollama/ollama/pull/17998)
- **MLX 内存占用治理（候选）**：PR #16728 提出限制 MLX runner 的 wired/cache 内存上限，避免因无界内存池导致进程被 jetsam 终止。
  - **链接**: [PR #16728](https://github.com/ollama/ollama/pull/16728)

---

### 5. 稳定性与回归

今日报告的稳定性问题较多，按严重程度排序如下。其中针对 Qwen3.8 的多个问题尚未看到明确的修复 PR。

**严重（生成错误/崩溃）**

- **[Bug] Qwen3.8 在 AMD Instinct MI210 上产生垃圾输出**：Issue #17968 报告 qwen3.8:27b 在 ROCm 环境下持续生成乱码，而其他模型（如 qwen3.6）运行正常。这属于**硬件后端适配的严重质量回归**。
  - **链接**: [Issue #17968](https://github.com/ollama/ollama/issues/17968)
- **[Bug] CUDA 非法内存访问**：Issue #17740 报告在 CUDA 后端上，qwen3.6:35b 在 prefill 阶段确定性崩溃，且依赖 prompt 长度（>684 tokens 必现），推测为 0.31.2 至 0.32.9 之间的回归。
  - **链接**: [Issue #17740](https://github.com/ollama/ollama/issues/17740)
- **[Bug] MLX 内核崩溃**：Issue #17986 报告在 Apple Silicon 上加载 Qwen3.8 27B 时，MLX runner 因 `v_copyfloat32bfloat16` 内核加载失败而崩溃（`MTLCompilerService` 错误）。问题在今日提交，状态为已关闭，可能已通过其他 PR 解决，但修复内容未明确指出。
  - **链接**: [Issue #17986](https://github.com/ollama/ollama/issues/17986)
- **[Bug] CUDA 架构回退**：Issue #17841 报告在 0.32.14 版本中，RTX 30 系列（sm_86）GPU 静默回退到 CPU。原因是 CUDA 13 构建不包含 8.6 架构，而 CUDA 12 的 fallback 逻辑存在缺陷。属于**较为严重的基础设施兼容性 Bug**。
  - **链接**: [Issue #17841](https://github.com/ollama/ollama/issues/17841)

**中等（功能异常/挂起）**

- **[Bug] OpenAI 兼容端点无响应**：Issue #17790 报告 `POST /v1/chat/completions` 调用 qwen3.8:27b 时无响应，但 `/api/chat` 正常。这直接影响使用 OpenAI SDK 的开发者。
  - **链接**: [Issue #17790](https://github.com/ollama/ollama/issues/17790)
- **[Bug] Qwen3.8 工具调用循环报错**：Issue #17778 报告在高上下文（205k）下调用工具时报错 `no user query found in messages` (500 错误)。
  - **链接**: [Issue #17778](https://github.com/ollama/ollama/issues/17778)
- **[Bug] MLX runner 进程泄漏**：Issue #17792 (macOS) 报告 `ollama stop` 后 MLX runner 子进程残留并持续占用内存。**对应修复 PR 已提交** (#17798)，值得关注。
  - **链接**: [Issue #17792](https://github.com/ollama/ollama/issues/17792) / [PR #17798](https://github.com/ollama/ollama/pull/17798)

---

### 6. 对应用开发者的意义

- **警惕 Qwen3.8 的稳定性问题**：如果你的应用正在使用或计划使用 Qwen3.8 系列模型，请**特别关注**上述涉及 CUDA（#17841）、ROCm（#17968）和 OpenAI 兼容端点（#17790）的 Bug。本周在生产环境使用该模型时，建议增加错误重试和降级预案。
- **缓存 token 计费/统计将更透明**：PR #17943 落地后，你将能通过 API 精确区分缓存命中 (`cached`) 与非命中 (`uncached`) 的 token 数量，对于优化成本和排查性能瓶颈（如 `num_predict` 耗尽）有直接帮助。
- **Claude Desktop 集成进入打磨期**：多个 PR（如 #18004、#18000、#17995、#17997）正在修复 Claude 集成的行为，例如手动设置覆盖 Ollama 路由（#17990）、UI 状态闪烁、图标加载等。如果你正在使用 `ollama launch claude`，升级到最新版本前请留意这些修复的合并状态。
- **新集成预研**：官方正在评估将 **Atomic Agent** 加入 `ollama launch` 生态（PR #17992），这预示着未来终端 Agent 的接入方式将更统一。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM 动态日报 — 2026-08-26

## 今日速览
过去 24 小时无新版本发布，社区与官方 PR 集中在稳定性修复和成本核算修正上：Together AI 缓存计价错误已修复并提交 PR；成本路由逻辑引入 cache-read 价格决胜；多个影响 Redis 缓存、Python 3.10 兼容性的回归问题仍在跟踪中，暂无对应修复 PR。

## 版本发布与破坏性变更
**无新版本发布**。

注意行为变更：
- **Together AI 出站消息字段剥离**：PR #38275 会从发给 Together 的 assistant 消息中剥离 `thinking_blocks`、`provider_specific_fields` 等内部字段，仅保留 `reasoning_content`。若你的应用依赖这些内部字段回传，需要关注兼容性。（[#38275](https://github.com/BerriAI/litellm/pull/38275)）

## 新模型与硬件支持
无全新模型发布，但存在边缘平台模型支持修复：
- **Bedrock 上 GPT-5.x 的 reasoning_effort 映射**：PR #38279 将 `reasoning_effort` 正确映射到 `additionalModelRequestFields.reasoning.effort`，此前会被错误地作为 Anthropic `thinking` 参数发送导致 400。（[#38279](https://github.com/BerriAI/litellm/pull/38279)）
- **Bedrock GPT-5.6 模型元数据修复**：Issue #36016 已修复长上下文定价问题，元数据不匹配仍在处理中。（[#36016](https://github.com/BerriAI/litellm/issues/36016)）
- **Fireworks Serverless 模型成本条目补充**：Issue #37274 请求为 Fireworks AI Serverless 模型增加当前 cost map 条目，仍在讨论中。（[#37274](https://github.com/BerriAI/litellm/issues/37274)）

## 性能与优化
- **成本路由增加 cache-read 价格决胜**：PR #38164 打破成本路由中相同价格两 deployment 的平局，支持按缓存读取单价排序，对高缓存命中流量可显著优化成本路径选择。（[#38164](https://github.com/BerriAI/litellm/pull/38164)）
- **Prisma 表访问类型重构**：PR #38205 将所有 prisma 表访问统一为泛型协议，消除手写协议漂移和隐藏的 nullable 崩溃，属数据层稳健性优化，间接提升 DB 访问安全性。（[#38205](https://github.com/BerriAI/litellm/pull/38205)）
- **新增异步失败钩子**：PR #36657 增加 `async_post_call_failure_deployment_hook`，让回调可感知每次 fallback 尝试，为按 deployment 统计失败次数铺路。（[#36657](https://github.com/BerriAI/litellm/pull/36657)）

## 稳定性与回归

### 重要 OPEN 问题（无 fix PR）
1. **持续负载下虚假 BudgetExceededError**（[#36926](https://github.com/BerriAI/litellm/issues/36926)）— 高严重度；约 40 分钟持续负载后代理返回 429，报告 cost 超出 max_budget 约 2 分钟自愈，影响生产预算控制。
2. **Redis 缓存失败：`ssl_check_hostname` 参数错误**（[#34614](https://github.com/BerriAI/litellm/issues/34614)）— v1.93.0 开始出现；Redis 缓存和预算计数器预计整体受影响。
3. **Python 3.10 兼容性回归**（[#38202](https://github.com/BerriAI/litellm/issues/38202)）— 社区反馈存在多项兼容性问题，影响旧版 Python 用户。
4. **Claude 模型返回空内容提示**（[#24498](https://github.com/BerriAI/litellm/issues/24498)）— 偶发返回 `[System: Empty message content sanitised to satisfy protocol]`，影响响应质量。

### 中低严重度 OPEN 问题
5. **Azure AI 非聊天路径不支持 Entra ID token fallback**（[#37727](https://github.com/BerriAI/litellm/issues/37727)）— `azure_ai/` 的 image generation / OCR 路径不遵守 `enable_azure_ad_token_refresh`。
6. **MCP 链式调用的 spend logs 不完整**（[#37358](https://github.com/BerriAI/litellm/issues/37358)）— streaming `/responses` 多轮工具调用只记录首轮。
7. **Together AI 成本映射遗漏**（[#37584](https://github.com/BerriAI/litellm/issues/37584)）— `novita/openai/gpt-oss-120b` 条目定价错误，影响成本计算。

### 已有 Fix PR 的回归
- **Together AI 缓存读取计费为 $0**：PR #38280 修复缓存 token 未计费及 Qwen3.7-Max 注册表价格滞后。（[#38280](https://github.com/BerriAI/litellm/pull/38280)）
- **日志中工具调用参数无效 JSON**：PR #38182 修复 `turn_off_message_logging` 产生非法 JSON、且工具专用轮次添加多余 content 的问题。（[#38182](https://github.com/BerriAI/litellm/pull/38182)）
- **xAI Live Search 已退役导致 410**：PR #38278 不再向 xAI 发送 `web_search_options`，同时修复 Responses 桥接参数透传问题。（[#38278](https://github.com/BerriAI/litellm/pull/38278)）
- **Fallback 信息未写入 spend logs**：PR #38107 将 `attempted_fallbacks` 与 `original_model_group` 持久化，便于按日志追踪请求实际路由。（[#38107](https://github.com/BerriAI/litellm/pull/38107)）
- **xAI 流程构建器无下拉**：PR #38273 修复 UI z-index 问题，guardrail 选项可正常渲染。（[#38273](https://github.com/BerriAI/litellm/pull/38273)）

## 对应用开发者的意义
- **Agent 工具调用可观测性提升**：#38182 修复日志回放失败风险，使基于 `previous_response_id` 的会话重放更可靠；#38107 让你能准确区分原始请求与 fallback 结果，便于在 spend log 中分析故障场景。
- **MCP 治理能力增强**：PR #38241 新增 Microsoft Agent 365 guardrail，可在 MCP 工具执行前预检并交换 Entra token，构建企业级 Agent 时可满足治理要求。（[#38241](https://github.com/BerriAI/litellm/pull/38241)）
- **成本追踪修正**：若使用 Together AI / Fireworks AI，请关注本次定价修复，升级后成本报表与预算告警将更准确。
- **升级注意事项**：若运行在 Python 3.10，在 #38202 修复前建议保持现有版本；Redis 缓存用户应检查 v1.93.0 及以后版本的 SSL 配置兼容性。
- **Bedrock 用户**：使用 OpenAI GPT-5.x 时应更新到包含 #38279 的构建，否则 `reasoning_effort` 会被静默丢弃或报错。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth 动态日报 — 2026-08-26

## 1. 今日速览

Unsloth 连续发布两个 beta 修复版本（v0.1.802 / v0.1.803），核心修复集中在 MLX/Mac 运行时、LAN 远程访问与 AMD 兼容性。另一端，Unsloth Studio 正经历高频迭代——今日有 189 条 PR 活跃更新，涉及 EXL3 量化后端、MLX 上下文长度修复、MCP OAuth 支持等重大项目。同时，多个 Studio 正确性 Bug（批量生成不一致、上下文窗口失效、web_search 空调用）被密集上报，稳定性仍是当前主要矛盾。

## 2. 版本发布与破坏性变更

**v0.1.803-beta / v0.1.802-beta**（过去 24 小时内发布）

- **修复**：MLX/Mac 运行时问题；AMD 相关 Bug
- **新特性**：LAN API 免密钥/免密码访问 + 键盘快捷键；XET/HTTP 下载切换（更清晰的下载进度）；Auto Compaction（自动压缩/滚动上下文窗口）
- 两个版本内容基本一致，v0.1.803 为增量补充。未发现破坏性 API/配置变更。

🔗 [v0.1.803-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.803-beta) | [v0.1.802-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.802-beta)

## 3. 新模型与硬件支持

- **EXL3（ExLlamaV3）量化后端**（PR #7115，进行中）：新增 2/3/4/6/8-bit 及分数位率量化，支持 MoE 模型，为 bitsandbytes 之外提供更低显存占用的替代方案。目前为增量添加，未默认启用。
  🔗 https://github.com/unslothai/unsloth/pull/7115

- **Qwen3.5 MTP 微调损失支持**（PR #6557，进行中）：为 Qwen3.5 系列增加 Multi-Token Prediction 训练损失，对应 Issue #6361。
  🔗 https://github.com/unslothai/unsloth/pull/6557

- **MLX 上下文长度修复**（PR #8125，进行中）：MLX 模型在 Studio 中硬编码为 4096 token，此 PR 改为从模型配置读取真实上下文长度并正确传递至 KV cache。
  🔗 https://github.com/unslothai/unsloth/pull/8125

- **torch 2.11 统一安装**（PR #6982，进行中）：CUDA 12.6/12.8/13.0 索引统一安装 torch 2.11，以兼容 torchao 0.17 的 cpp 扩展。
  🔗 https://github.com/unslothai/unsloth/pull/6982

- **硬件兼容性未解问题**：MiniMax-H3 视频生成在 RX 9070 XT（gfx1201, Windows）仍不可用——`hipblasSetStream` 返回 `CUBLAS_STATUS_INVALID_VALUE`（Issue #9278，无 fix PR）。
  🔗 https://github.com/unslothai/unsloth/issues/9278

## 4. 性能与优化

- **MLX VLM prompt 缓存跨轮复用**（PR #7489，进行中）：Studio 保留安全原生 MLX VLM 状态，避免每轮重复处理多模态 prompt 与视觉输入，可显著降低多轮视觉对话延迟。
  🔗 https://github.com/unslothai/unsloth/pull/7489

- **数学公式块渲染优化**（PR #9731，进行中）：通过 `content-visibility: auto` 将屏幕外数学块延迟渲染，减少 RenderLayers 与布局开销。当前默认关闭，不影响现有行为。
  🔗 https://github.com/unslothai/unsloth/pull/9731

- **Auto Compaction 落地**：随 v0.1.803 发布，自动压缩在约 75% 上下文占用时触发。但用户反馈该阈值不可调节、不可禁用（见 Issue #9671），可能成为后续迭代重点。
  🔗 https://github.com/unslothai/unsloth/issues/9671

- **注意**：今日未报告量化的吞吐/延迟/显存数字。

## 5. 稳定性与回归

按严重程度排列：

**高**

- **批量贪心生成与单条生成结果不一致**（Issue #9708，无 fix PR）：LoRA 微调后，batch size 1 与 2/4/8 对相同 prompt 产生不同文本。已在 T4 上双模型复现，影响依赖确定性输出的评估与推理链路。
  🔗 https://github.com/unslothai/unsloth/issues/9708

- **SIGKILL 恢复循环**（Issue #9688，无 fix PR）：llama-server 进程反复崩溃时，恢复逻辑会无界重放同一个加载指令，导致无限重启循环。
  🔗 https://github.com/unslothai/unsloth/issues/9688

- **Studio 后端停滞 10-33 秒**（Issue #9712，无 fix PR）：macOS CI 上后端停止响应后自行恢复，由 Unsloth 官方成员 danielhanchen 上报，确认为 main 分支真实问题。
  🔗 https://github.com/unslothai/unsloth/issues/9712

**中**

- **256k 上下文只加载 4k**（Issue #9653，无 fix PR）：Studio Web UI 中选择 256k 上下文后实际仅加载 4k，影响长上下文场景。
  🔗 https://github.com/unslothai/unsloth/issues/9653

- **web_search 工具空参数调用**（Issue #9709，无 fix PR）：v0.1.803-beta 中 `web_search` 可能以空 `{}` 参数触发，返回 "No query provided" 并 stall 整个 agent 回合。
  🔗 https://github.com/unslothai/unsloth/issues/9709

- **`enabled_tools: ["web_search"]` 在本地 GGUF 模型上不执行任何工具**（Issue #9730，无 fix PR）：显式启用工具后反而关闭了工具调用；省略该参数时行为正常。
  🔗 https://github.com/unslothai/unsloth/issues/9730

- **KV cache 量化在 TP 下不生效**（Issue #9697，无 fix PR）：张量并行启用后，KV cache 量化未被纳入上下文长度计算。
  🔗 https://github.com/unslothai/unsloth/issues/9697

- **16GB RAM 集成 GPU 无法加载模型**（Issue #9482，无 fix PR）：新版本加载模型时拒绝使用系统 RAM 卸载，需手动设置 `UNSLOTH_ALLOW_HOST_OFFLOAD=1`。
  🔗 https://github.com/unslothai/unsloth/issues/9482

**低 / 已关闭**

- Linux 语音听写无音频（#9543，已关闭）、AMD VRAM 检测错误（#9551，已关闭）、Windows 安装失败（#9440，已关闭）等均已处理。
- 新增修复 PR：**带掩码日志导出**（#9714，ZIP 导出 + 凭据脱敏）、**消息 JSONL 导出**（#9614）、**adapter_config 绝对路径修复**（#5079，支持自定义 HF_HOME）。

## 6. 对应用开发者的意义

- **Mac 用户是本次修复的最大受益者**：MLX 运行时修复（v0.1.803）和 MLX 4-bit 模型建议修复（PR #9722，不再推荐 MLX 无法加载的 bnb-4bit 模型）+ 真实上下文长度支持（PR #8125）共同提升了 Mac 上 Studio 的可用性和正确性。
  🔗 https://github.com/unslothai/unsloth/pull/9722

- **Agent / 工具调用应用需谨慎升级到 v0.1.803-beta**：`web_search` 存在两个独立 Bug（空参数、显式启用后不执行），建议在修复前固定使用上次已知良好版本，或省略 `enabled_tools` 参数绕行。

- **远程部署更友好**：LAN 免密钥/免密码访问（v0.1.803）降低了内网暴露成本，但需自行评估安全边界——该功能默认无鉴权。

- **长对话应用注意 Auto Compaction 的硬编码触发阈值**（约 75%）：当前无法调整或禁用（#9671），依赖长上下文的 Agent 可能会遇到意外的上下文压缩。如需要精确控制，建议跟踪 Issue #7472 的滚动窗口方案。

- **批量推理的确定性风险**：#9708 表明 batch size 会影响生成结果，对依赖 batch 推理做数据合成或评估的开发者影响较大，建议暂时固定 batch size=1 或跟进该 Issue 的修复进度。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*