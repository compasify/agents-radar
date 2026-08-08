# AI 基础设施日报 2026-08-08

> 生成时间: 2026-08-08 00:46 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# AI 基础设施生态横向对比分析报告（2026-08-08）

**数据窗口**：2026-08-07 12:00 UTC – 2026-08-08 12:00 UTC

---

## 1. 生态全景

当前 AI 基础设施正处于"新模型快速迭代与推理栈深度适配赛跑"的阶段：DeepSeek-V4 系列与 Kimi K3 等前沿模型的落地，暴露出算子兼容性（Ampere 上 DeepGEMM 失败）、KV cache 内存规划（-0731 膨胀 8 倍）、投机解码正确性（DSpark/MTP 输出损坏）等一系列系统级挑战。各项目的优化火力正从单点 kernel 转向系统级协同——跨请求 KV 复用、分布式缓存、多模态传输路径、调度亲和性成为共同焦点。Agent 工作负载正定义新一代架构需求（会话亲和路由、结构化输出与投机解码共存、长上下文 KV 演进），同时本地/边缘推理（MLX 引擎、Vulkan 后端）活跃度明显上升。整体判断：**基础设施的竞争已从"能否跑"转向"能否在复杂生产负载下稳定、高效、可观测地跑"**。

---

## 2. 各项目活跃度对比

| 项目 | 今日 Issues（新增/追踪） | 今日 PR（Open/合并） | Releases |
|---|---|---|---|
| **vLLM** | 新增 2（#51041 KV 膨胀、#51466 修复跟踪），追踪 6+ 高优 issue | 新增 6+（#51464、#51457、#49775、#51458、#51334、#51466） | 无新 release |
| **SGLang** | 新增 2（#34053 合入跟踪、#33719 关闭），追踪 8+ 关键 issue | 新增 4+（#33952、#33949、#33924、#33921、#33936，及 2 个修复） | **v0.5.17 正式版**（582 PR / 194 贡献者） |
| **llama.cpp** | 新增 0，追踪 6+ 高优 issue，修复 4 项 | 合并 9+，Open 7+ | **8 个版本**（b10308–b10326） |
| **Ollama** | 新增 8+（#17596、#17599、#17609、#17614 等） | 新增 4+（#17615、#17608、#17603、#17616），Open 2 个大 PR | 无 |
| **LiteLLM** | 新增 5+，其中 2 个严重成本核算回归 | 新增 4+（#36146、#36115、#36228、#36234） | v1.97.0-dev.2（仅签名说明） |
| **Unsloth** | 新增 2（#8126 阻塞、#8129 跟踪） | 新增 3 个 fix PR（#8129、#8128、#8127），Open/Closed 合计 10+ | 无 |

> 注：vLLM/SGLang 未在日报中提供精确的 Issue/PR 计数器，上表基于动态中提及的具体条目汇总，实际活跃度可能更高。相对活跃度排序：**llama.cpp > SGLang > vLLM > Ollama > LiteLLM > Unsloth**（按版本发布与合入密度）。

---

## 3. 模型支持竞速

| 模型/架构 | vLLM | SGLang | llama.cpp | Ollama |
|---|---|---|---|---|
| **Kimi K3**（2.8T LatentMoE） | ROCm 支持推进中（PR #51464 修复 gluon MLA） | **Day-0 支持**（v0.5.17），2.8T 参数全栈适配 | — | — |
| **DeepSeek-V4-Flash** | Ampere 阻塞，-0731 KV 膨胀 | 多严重 bug（KV 损坏、CUDA-Graph 非法内存），已关闭部分 A800 阻塞 | Vulkan 设备丢失、RPC 混合后端乱码 | prompt KV cache 丢失 |
| **DeepSeek V4 MTP + DSpark** | MTP 解码优化推进中 | DSpark 兼容性修复在途 | **社区 DSpark 权重 ~50% 加速**（PR #25784 已合并） | — |
| **Gemma 4** | 混合注意力 + KV 量化正确性问题 | — | tg128 在 Blackwell 性能异常 | WSL2 崩溃、ROCm 输出损坏 |
| **Qwen3-VL/3.5** | — | 多模态传输优化在途 | — | 显存预测修复 |
| **MiniMax H3** | — | 部署中暴露参数错误 | — | Unsloth 侧视频生成 |
| **新架构** | — | — | **TML Inkling**（PR #25731） | **MLX DFlash 块级投机解码**（PR #17571） |

**结论**：**SGLang 在全新复杂架构（Kimi K3）的 day-0 支持上领先**；llama.cpp 在社区驱动的权重变体（DeepSeek V4 MTP+DSpark）和新兴架构（TML Inkling）上保持快速跟进；vLLM 更侧重既有模型在多种硬件（ROCm、Blackwell）上的完善，而非追逐首发。Ollama 通过 MLX 引擎在 Apple Silicon 生态建立差异化优势。

---

## 4. 性能优化前沿

本轮动态中，各项目优化火力集中在四个方向：

**① KV cache 管理与内存效率（最集中）**
- vLLM：staged writes 分块合并（#51334）；-0731 KV 膨胀问题暴露规划缺口
- SGLang：SWA eviction 调度门控（#33404）；KV 空间计算修正（#34053）；DCP/Helix 沿序列维度切分 KV cache 以消除 TP 冗余（#29736）
- Ollama：Qwen 系列显存预测修复（#17615）；MoE 专家权重 host offload 讨论（#17557）

**② 投机解码（Speculative Decoding）性能与正确性并重**
- vLLM：MTP draft 跨 step 共享 top-k 索引（#49793）；动态 SD K-lookup 边界修复（#51466）
- llama.cpp：DeepSeek V4 DSpark 50% 加速
- Ollama：MLX DFlash 块级投机解码（单次前向生成整块 token）
- SGLang：DSpark draft depth 5 在 SM120 输出损坏（#33800）

**③ 量化与算子级优化**
- vLLM：FlashInfer CuTe-DSL NVFP4 后端并设为 Blackwell 优先（#49775）
- llama.cpp：SYCL SSM_CONV 1.85x（b10322）；Metal NORM/RMS_NORM 修复（b10321）；CUDA SM120 CUTLASS MoE Prefill 支持 MXFP4/NVFP4（#26704）；HIP 启用 hipCUB
- SGLang：Blackwell dense NVFP4 W4A16 社区请求（#33711）

**④ 多模态与传输路径**
- SGLang 最为集中：Qwen3-VL 特征惰性物化（#33952）、CUDA IPC 生命周期管理（#33949）、Gloo tensor collective 替代 pickle（#33924）、多节点 MNNVL 自动选择 CUDA VMM（#33936）
- vLLM：减少 GPU↔CPU 阻塞式同步（#51458）

---

## 5. 分层定位差异

| 层 | 项目 | 定位 | 关键差异点 |
|---|---|---|---|
| **生产级推理引擎** | vLLM | 大规模在线服务，强调稳定性、可观测性、多硬件适配 | 更保守：重回归测试与正确性修复；pydantic-settings 重构显示对工程规范性的投入 |
| | SGLang | 前沿模型 day-0 支持 + 系统级创新（分布式 KV、DCP/Helix） | 更激进：Kimi K3 两日完成适配；VLM 多模态传输优化密度最高；但稳定性问题也最集中 |
| **本地/边缘运行时** | llama.cpp | 跨平台（CPU/Metal/Vulkan/SYCL/OpenCL），单机部署 | 版本迭代极快（日更 8 版）；社区驱动权重变体适配（MTP+DSpark 50% 加速）；Router 功能增强，开始具备轻量网关能力 |
| | Ollama | 开发者体验优先的本地运行时 | 基于 llama.cpp 但封装更上层；MLX 引擎开辟 Apple Silicon 差异化路径；issue 偏用户体验（串号、误报、路径解析） |
| **LLM 网关** | LiteLLM | 多 provider 路由、成本核算、统一 API | 主打企业级路由策略（affinity、routing_strategy）；当前主要风险在成本数据可靠性（GPT-5.6 低估 5 倍） |
| **训练/微调** | Unsloth | 高效微调（LoRA/QLoRA），Studio 一体化 | 焦点在 Studio 产品化（Deep Research、多模态、本地模型管理）；依赖链脆弱性（torchvision/TensorFlow 导入破坏）值得警惕 |

**协同关系**：llama.cpp 与 Ollama 为上下层关系；vLLM 与 SGLang 在直接竞争；LiteLLM 位于推理引擎之上，对 vLLM/SGLang 的部署形态不敏感；Unsloth 与 vLLM 存在训练到推理的链路（save_lora 修复）。

---

## 6. 值得关注的趋势信号

**① 模型发布节奏已快于推理栈的稳定适配能力** —— DeepSeek-V4 系列在六个项目中全部暴露出问题（vLLM Ampere 阻塞、SGLang KV 损坏、llama.cpp 乱码、Ollama cache 丢失、LiteLLM 成本错误、Unsloth 无直接涉及但社区讨论密集）。**建议**：技术决策者对"新模型 day-0 上线"持保守态度，建立 1-2 周灰度验证窗口。

**② KV cache 的架构性瓶颈成为共识** —— 从 vLLM 的 KV 膨胀问题、SGLang 的层次化缓存 KV 位置损坏到 LiteLLM 的 prompt cache 亲和路由，KV 的存储、传输、复用已横跨推理引擎和网关层。SGLang 的 DCP/Helix 路线图（#29736）是最值得跟踪的系统级方案。**Agent 开发者**：长会话应用的 KV 规划和缓存命中率将直接影响成本与延迟，需开始评估 PD 分离架构。

**③ 投机解码正从"锦上添花"变为"标配，但正确性风险未解"** —— 性能优化（vLLM MTP 共享 top-k、Ollama DFlash 块级生成）与正确性 bug（SGLang DSpark depth 5 损坏、vLLM 并发 ≥4 输出损坏、llama.cpp MTP 重复输出）同步激增。**建议**：生产环境启用投机解码前必须做长会话压力测试，并关注接受率可观测性（vLLM PR #48915）。

**④ Agent 工作负载正反向定义基础设施需求** —— LiteLLM 会话亲和路由（#36146）、vLLM 结构化输出 + spec-decode 边界修复（#43424）、SGLang 分布式 KV 面向 agentic workload、llama.cpp 工具调用沙箱化（#26507），四个层面同时响应 Agent 需求。**趋势判断**：多轮一致性（affinity）、工具调用可靠性、长上下文缓存将取代单纯吞吐成为新的选型 KPI。

**⑤ 本地/边缘推理生态加速分化** —— Ollama 的 MLX 引擎引入 DFlash 块级投机解码和图像输入，配合 Nemotron 3 的 Metal kernel，显示 Apple Silicon 路线正走向深度定制；llama.cpp 的 Vulkan 后端在 RDNA4/Strix Halo 上持续迭代但稳定性仍有缺口。**信号**：边缘设备的推理能力正在追赶服务器端 1-2 代前的水平，适合对数据敏感或低延迟场景的 Agent 部署。

**⑥ 网关层的成本核算与依赖管理是隐性风险** —— LiteLLM 连续两个 GPT-5.6 成本回归（低估 5 倍、Azure 价格误用 OpenAI 直连价）提醒：**路由网关的计费准确性直接影响业务成本**，建议关键模型的双边核对机制；同时 python-dotenv 精确固定暴露的依赖链冲突（#25280）说明网关层应锁定可复现依赖版本并建立 CVE 修复策略。

**⑦ 前端"Agent 产品化"加速但工程成熟度不足** —— Unsloth Studio 新增 MiniMax H3 视频生成、Deep Research 修复、MLX 镜像无法加载等，说明一站式 AI 应用平台正在快速迭代但稳定性和文档仍有缺口。对于构建 Agent 应用的团队，**建议聚焦在成熟推理引擎（vLLM/SGLang）之上自建工具链，而非依赖一体化平台的前沿功能**。

---

*本报告基于各项目 2026-08-08 公开动态整理，所有 issue/PR 编号均可在对应仓库检索验证。*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

## vLLM 动态日报 2026-08-08

### 1. 今日速览

DeepSeek-V4-Flash 系列在 Ampere 硬件（A100/A800）上的算子级兼容性问题持续发酵（#50576 评论 87 条），新版 -0731 checkpoint 还暴露了 KV cache 占用异常膨胀的新问题。Kimi-K3 ROCm 支持有实质推进：Triton 版本更新修复了 gluon MLA 内核编译问题。Speculative decoding 方向并行推进多个正确性与性能修复，其中动态 SD 的 K-lookup 边界缺陷有新 PR 修复。

### 2. 版本发布与破坏性变更

- **无新 Release**。过去 24 小时无版本发布。
- **关注中**：PR #42136 将 `vllm/envs.py` 迁移至 `pydantic-settings`（单一声明机制），目前仍为 OPEN，合入后环境变量定义将重构，但语义应保持兼容。涉及面广（打有 20+ 领域标签），建议关注后续变更说明。

### 3. 新模型与硬件支持

- **DeepSeek-V4-Flash / -0731 在 SM8x 上仍不可用**。两个 issue（[#50576](https://github.com/vllm-project/vllm/issues/50576)、[#40851](https://github.com/vllm-project/vllm/issues/40851)）持续追踪，核心阻塞在于 DeepGEMM 对 sm_80 的断言失败，尚无修复 PR。
- **DeepSeek-V4-Flash-0731 KV cache 异常膨胀**（[#51041](https://github.com/vllm-project/vllm/issues/51041)）：新 checkpoint 的 KV cache 每 token 占用 56 字节，约为 preview 版本 8 倍，导致 7.7 GiB KV pool 仅能容纳约 150K token、`max_model_len` 被压至 ~121344（H20 TP=2）。若你在用 -0731，需重新评估 KV 内存规划。
- **Kimi-K3 ROCm 推进**：ROCm 上游 Triton 更新 PR [#51464](https://github.com/vllm-project/vllm/pull/51464) 可修复 DistributedLinearLayout 导致的 gluon MLA 内核编译问题，合并后可在 ROCm 上以期望精度 serve K3。另新增 gfx950-only 的 AITER FP8 MLA prefill 精度测试 PR [#51457](https://github.com/vllm-project/vllm/pull/51457)。
- **SM120 Blackwell（RTX PRO 6000）上 Block-scaled FP8 加载崩溃**（[#47436](https://github.com/vllm-project/vllm/issues/47436)）：DeepGEMM 报 “Unknown SF transformation” 断言错误，目前 OPEN。

### 4. 性能与优化

- **MTP draft 解码优化**：PR [#49793](https://github.com/vllm-project/vllm/pull/49793) 通过跨 draft step 共享 top-k 索引、`skip_topk` 复用，减少重复计算；配套的 Model Runner V2 版本 PR [#47352](https://github.com/vllm-project/vllm/pull/47352) 同步推进。
- **FlashInfer CuTe-DSL NVFP4 量化后端**（[#49775](https://github.com/vllm-project/vllm/pull/49775)）：新增 NVFP4 activation 量化的高性能实现，并在 Blackwell 上设为优先后端。
- **减少 GPU↔CPU 同步**（[#51458](https://github.com/vllm-project/vllm/pull/51458)）：替换 per-forward-pass 路径上多处阻塞式 `.item()` 调用，降低流水线等待。
- **Staged writes 内存优化**（[#51334](https://github.com/vllm-project/vllm/pull/51334)）：将 staged write payload 以 NumPy 分块保留至传输前再合并，减少拷贝与 Python 列表开销。
- **动态 SD K-lookup 修复**（[#51466](https://github.com/vllm-project/vllm/pull/51466)）：修正 `scheduler.py` 中将 prefill/chunked-prefill 请求一并计入 K-lookup 索引，避免 batch 边界处 K 值抖动导致性能退化。

### 5. 稳定性与回归

**高严重度**

- **Gemma-4 混合注意力 + int8 KV 量化 + prefix caching = 输出损坏**（[#50702](https://github.com/vllm-project/vllm/issues/50702)）：当 KV pool 打满时输出错误；禁用 prefix caching 后问题变为“首个生成 token 损坏”（[#50749](https://github.com/vllm-project/vllm/issues/50749)）。影响 Triton attention 后端 + TP=2 的 Ampere 环境，目前 OPEN。
- **Gemma-4 31B 高上下文下生成不连贯**（[#51140](https://github.com/vllm-project/vllm/issues/51140)）：4×3090 环境实测，已 CLOSED（可能重复或已在别处处理），但在完全修复验证前建议关注同型号显存较小场景的表现。
- **MTP 投机解码并发 ≥4 时输出损坏**（[#35288](https://github.com/vllm-project/vllm/issues/35288)）：V1 引擎下复现，OPEN。
- **vLLM 启动阶段 “No available shared memory broadcast block”**（[#35465](https://github.com/vllm-project/vllm/issues/35465)）：53 条评论，多进程环境下 hung 问题，尚未有对应 fix PR。

**中低严重度 / 平台特定**

- **SM120 Blackwell 上 FP8 加载崩溃**（[#47436](https://github.com/vllm-project/vllm/issues/47436)），见上文。
- **Gemma 4 torch._dynamo 编译崩溃**（[#38884](https://github.com/vllm-project/vllm/issues/38884)）：`TorchRuntimeError` with fake tensors，OPEN。
- **ROCm 相关**：gpt-oss 在 ROCm 上使用 TRITON_ATTN + spec decode 无输出（[#32434](https://github.com/vllm-project/vllm/issues/32434)）；`vision_embeddings` 在不启用 math SDP 时数值不准（[#30167](https://github.com/vllm-project/vllm/issues/30167)），均为 OPEN 旧 issue。

**修复中 / 新提交**

- **动态 SD 在 batch 变化时的 autoregressive draft 捕获错误**：PR [#49652](https://github.com/vllm-project/vllm/pull/49652) 正在修复（对应 #48494）。
- **结构化输出 × spec-decode 的边界 token 泄漏**（[#43424](https://github.com/vllm-project/vllm/pull/43424)）：为 reasoning parser + structured output 场景增加 pre-commit grammar filter，防止 `chunk_0{"...":...}` 这类垃圾前缀污染输出流。

### 6. 对应用开发者的意义

- **DeepSeek-V4 系列在 Ampere 集群上仍是硬约束**：若你的 GPU 池包含 A100/A800，目前无法顺利部署 V4-Flash 及其 -0731 版本。且 -0731 即使跑在 Hopper 等新卡上，KV 占用约 8 倍膨胀会显著压缩并发度与上下文长度，建议暂缓升级并实测 KV 用量。
- **Gemma-4 混合注意力 + KV 量化组合存在正确性风险**：生产环境建议禁用 `int8_per_token_head` KV 量化或 prefix caching，直到修复合入。
- **结构化输出 + 投机解码的边界 bug 即将修复**：使用 reasoning parser + JSON schema 的 Agent 场景会有直接收益，合入后不再需要额外 token 清洗逻辑。
- **投机解码性能可观测性在增强**：PR [#48915](https://github.com/vllm-project/vllm/pull/48915) 将在 OpenAI 响应中暴露 per-request 接受率（当前只有 `/metrics` 服务端平均值），对调优 spec decode 参数很有价值。
- **前端 API 微调**：PR [#51463](https://github.com/vllm-project/vllm/pull/51463) 让 `/derender` 系列请求中的 `model` 字段可选，服务端自动解析。使用该接口的 Agent 工具调用链可以更少地感知具体部署的模型名。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang 动态日报 — 2026-08-08

## 1. 今日速览

- **v0.5.17 正式发布**，核心亮点是 Kimi K3 day-0 支持（2.8T 参数多模态 LatentMoE），累计 582 个 PR、194 名贡献者。
- **DeepSeek-V4 系列稳定性问题集中暴露**：DSpark CUDA-Graph 捕获非法内存、层次化缓存 KV 位置损坏、H200 并发下输出劣化等多项严重 bug 暂无修复 PR。
- **分布式 KV 缓存与 DCP/Helix 并行路线图持续推进**，Agentic workload 成为主要驱动力；VLM 多模态传输优化有多项 PR 在途。

## 2. 版本发布与破坏性变更

- **[v0.5.17 发布](https://github.com/sgl-project/sglang/releases/tag/v0.5.17)**：包含 Kimi K3 day-0 支持、582 个 PR。Release notes 未标注明确 breaking changes，但建议从 v0.5.16 升级的用户重点回归 DeepSeek-V4 系列（参考下文的 [#33356](https://github.com/sgl-project/sglang/issues/33356)、[#33656](https://github.com/sgl-project/sglang/issues/33656)）。
- 进行中的行为变更 PR（未合并）：
  - [#33352](https://github.com/sgl-project/sglang/pull/33352)：移除 4 GiB 内存门控，默认始终捕获 prefill CUDA graph，不再静默回退 eager 执行。
  - [#33565](https://github.com/sgl-project/sglang/pull/33565)：恢复 `/generate` 上的 `data_parallel_rank` alias——此前 dp-aware 网关路由会被静默丢弃。

## 3. 新模型与硬件支持

- **Kimi K3**（v0.5.17 day-0）：2.8T 参数多模态 LatentMoE，896 experts / top-16，3584 维 latent 路由空间，1M token 上下文，69 层 KDA 线性注意力 + 24 层 MLA，MoonViT3d 视觉塔。[Release v0.5.17](https://github.com/sgl-project/sglang/releases/tag/v0.5.17)
- **MiniMax-H3**：社区已在部署，但暴露参数错误（[#33466](https://github.com/sgl-project/sglang/issues/33466)）与 `/health` 绕过 warmup 导致 264s POST 黑洞（[#33719](https://github.com/sgl-project/sglang/issues/33719)，已关闭）。
- **AMD/ROCm**：Q2 路线图已关闭（[#23494](https://github.com/sgl-project/sglang/issues/23494)）；ROCm 专用 DeepSeek MHA/MLA 前向路径拆分重构进行中（[#31531](https://github.com/sgl-project/sglang/pull/31531)）。
- **Blackwell SM120**：社区请求 dense NVFP4 W4A16（bf16 激活）GEMM 支持（[#33711](https://github.com/sgl-project/sglang/issues/33711)）。
- **NPU**：为 gpt-oss 添加 docker 内 vocab 安装支持（[#21831](https://github.com/sgl-project/sglang/pull/21831)）。

## 4. 性能与优化

- **DCP & Helix Parallelism 路线图**（2026 Q3）：沿序列维度切分 KV cache，消除 `TP > num_kv_heads` 时的显存冗余，并引入 All-to-All 通信与解耦 attention/FFN 并行。[#29736](https://github.com/sgl-project/sglang/issues/29736)
- **分布式 KV 缓存系统路线图**：面向 Agentic 工作负载，指出 PD 分离 + HiCache 栈在 KV 传输/存储规模增长下出现瓶颈，且 HiCache 对混合模型支持有限。[#21846](https://github.com/sgl-project/sglang/issues/21846) 👍 27
- **SWA eviction 调度优化**：避免每个 decode 请求都执行同步 eviction 造成周期延迟尖峰，采用按累计 token 门控（PR 已关闭，疑似落地）。[#33404](https://github.com/sgl-project/sglang/pull/33404)
- **UnifiedRadixCache LRU 优化提案**（已关闭）与 **Fast KV-cache pruning（H20 style）RFC**（已关闭），可作为缓存策略参考。[#24072](https://github.com/sgl-project/sglang/issues/24072) · [#19887](https://github.com/sgl-project/sglang/issues/19887)
- **VLM 多模态传输优化**（多 PR 在途）：
  - Qwen3-VL/Qwen3.5 encoder-DP 特征改为在 owner rank 上惰性物化（[#33952](https://github.com/sgl-project/sglang/pull/33952)）
  - CUDA IPC 特征池按 stream 顺序管理生命周期，防止生产者/消费者乱序（[#33949](https://github.com/sgl-project/sglang/pull/33949)）
  - 大型 CPU 多模态特征改用 Gloo tensor collective 广播，避免 pickle 序列化开销（[#33924](https://github.com/sgl-project/sglang/pull/33924)）
  - Kimi K3 CPU 图像传输延迟到 vision owner rank 上做预处理（[#33921](https://github.com/sgl-project/sglang/pull/33921)）
  - 多节点 GB200/GB300 MNNVL 自动选择 CUDA VMM 传输（[#33936](https://github.com/sgl-project/sglang/pull/33936)）
- **KV 空间计算修正**：将 IPC weight-cache daemon 预驻留权重计入 KV sizing，避免 `pre_model_load_memory` 采样偏差导致 KV 分配过大/不足。[#34053](https://github.com/sgl-project/sglang/pull/34053)
- **KV cache 利用率 Prometheus 指标**仍为 open feature request，vLLM 已有对应 `gpu_cache_usage_perc`。[#5979](https://github.com/sgl-project/sglang/issues/5979)

## 5. 稳定性与回归

**严重 / 无 fix PR（按影响排序）**

- **DeepSeek-V4 + hierarchical cache：确定性 SWA KV position corruption**，`kv-canary TAIL_K_SWA write_position` 写入位置错乱，最终导致 NaN 采样崩溃。[#33656](https://github.com/sgl-project/sglang/issues/33656)
- **DSpark 大 batch decode CUDA-Graph 捕获**在 TP8 + B300 上触发非确定性 illegal memory（v0.5.16，`bs<=32` 稳定）。[#33356](https://github.com/sgl-project/sglang/issues/33356)
- **Kimi-K3 长上下文 [PAD] (id 163839) 风暴 + DSPARK inf/nan 断言**：logits 被 NaN 污染，根因修复 #32477 未进入任何 release。[#32968](https://github.com/sgl-project/sglang/issues/32968)
- **DSpark draft depth 5**（checkpoint 默认值）在 SM120 上 corrupt 输出，depth 3/4/6/7 正常。[#33800](https://github.com/sgl-project/sglang/issues/33800)
- **DeepSeek-V4-Flash-0731 在 2× H200 并发下**出现渐进式输出劣化（dsv4 + DP attention）。[#33397](https://github.com/sgl-project/sglang/issues/33397)
- **dsv4-flash-0731 watchdog 超时**（v0.5.16）。[#33393](https://github.com/sgl-project/sglang/issues/33393)

**中等问题**

- MiniMax-H3 args error。[#33466](https://github.com/sgl-project/sglang/issues/33466)
- 持续 chunked-prefill 负载下 decode 饥饿，约 24 秒才调度 1 个 batch。[#32549](https://github.com/sgl-project/sglang/issues/32549)
- `max_running_requests`（4096）与 `cuda_graph_max_bs`（32）默认值独立推导，一旦超过 graph 上限即进入无吸收态。[#33483](https://github.com/sgl-project/sglang/issues/33483)

**已关闭 / 已修复**

- DeepSeek-V4-Flash-0731 在 A800/Ampere 上的三个后续阻塞（deep_gemm NameError 之外）已关闭。[#33194](https://github.com/sgl-project/sglang/issues/33194)
- qwen3.5 bf16 MTP broken（[#23123](https://github.com/sgl-project/sglang/issues/23123)）、qwen3.6 tool-call-parser（[#25242](https://github.com/sgl-project/sglang/issues/25242)）、dbrx-instruct 启动崩溃（[#26674](https://github.com/sgl-project/sglang/issues/26674)）均已关闭。

**在途 fix PR**

- min-new-token EOS 处理修复：将 model-config 的 EOS token 纳入惩罚掩码。[#31378](https://github.com/sgl-project/sglang/pull/31378)
- DSpark + DeepSeek-V4 prefill context parallelism 兼容性修复。[#33865](https://github.com/sgl-project/sglang/pull/33865)

**CI 质量**：跟踪 issue 显示当前 3 个 broken、11 个 flaky、671 个近期修复。[#17050](https://github.com/sgl-project/sglang/issues/17050)

## 6. 对应用开发者的意义

- **Agentic 场景需关注 KV 架构演进**：现有 PD 分离 + HiCache 栈在长会话/高 KV 传输下已现瓶颈（[#21846](https://github.com/sgl-project/sglang/issues/21846)），DCP/Helix（[#29736](https://github.com/sgl-project/sglang/issues/29736)）能降低 TP 冗余，构建大规模 agent 应用的团队建议跟踪这两个路线图的落地节奏。
- **DeepSeek-V4 系列上线前务必验证 v0.5.17**：v0.5.16 存在多个严重正确性/稳定性问题（DSpark CUDA-Graph、层次化缓存 KV 损坏、并发劣化等），有 DeepSeek-V4-Flash 生产负载的团队应先做灰度回归再升级。
- **Kimi K3 已可接入**：day-0 支持随 v0.5.17 发布，但 [#32968](https://github.com/sgl-project/sglang/issues/32968) 提示长上下文 + DSPARK 组合仍有 NaN 风险，生产使用需限制 speculative decoding 或等待修复。
- **VLM 应用将受益于传输优化**：Qwen3-VL/3.5 与 Kimi K3 的编码器特征物化、CUDA IPC 生命周期修复、CUDA VMM 自动选择均会改善多节点多模态请求的 TTFT 与吞吐稳定性。
- **网关侧变更注意**：`data_parallel_rank` alias 修复（[#33565](https://github.com/sgl-project/sglang/pull/33565)）和 bounded-load 路由增强（[#33625](https://github.com/sgl-project/sglang/issues/33625)）会影响使用 SGLang Gateway 的 dp-aware 团队；KV 监控指标仍未内置（[#5979](https://github.com/sgl-project/sglang/issues/5979)），可先自行通过 CUDA 显存监控近似。
- **核心模块单元测试覆盖计划**已启动（[#20865](https://github.com/sgl-project/sglang/issues/20865)），对在 SGLang 之上做二次开发的团队是利好信号，可降低内部 API 演进带来的回归风险。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp 动态日报 2026-08-08

## 1. 今日速览

过去 24 小时发布 8 个新版本（b10308–b10326），核心集中在 **TTS 计时修复、SYCL 内核优化、Metal 归一化算子修复** 三块。Server Router 方面，LRU 调度器与「禁止驱逐忙碌模型」两项 PR 已合并，多模型路由稳定性显著提升。社区侧，Qwen3-TTS 重复生成、DeepSeek V4 Vulkan 乱码、MTP 重复输出等正确性问题正在密集讨论，其中 TTS 反复问题已在 b10311 修复。

---

## 2. 版本发布与破坏性变更

### 发布列表（按时间倒序）

| 版本 | 内容 | 链接 |
|---|---|---|
| **b10326** | TTS 计时行纳入 vocoder pass，使总耗时与实际音频处理量匹配（#26733） | [Release](https://github.com/ggml-org/llama.cpp/releases/tag/b10326) |
| **b10322** | SYCL：合并 SSM_CONV 窗口加载，`test-backend-ops` 中 SSM_CONV 性能提升 **1.85x**（97.68→52.95 us/run，Arc Pro B70） | [Release](https://github.com/ggml-org/llama.cpp/releases/tag/b10322) |
| **b10321** | Metal：修复 NORM/RMS_NORM 在 row 长度非 simdgroup 倍数时的计算错误（#26708） | [Release](https://github.com/ggml-org/llama.cpp/releases/tag/b10321) |
| **b10319** | mtmd：修复 longest_edge 忽略 min/max 像素限制的问题（#26638） | [Release](https://github.com/ggml-org/llama.cpp/releases/tag/b10319) |
| **b10318** | 同步 GGML 子模块 | [Release](https://github.com/ggml-org/llama.cpp/releases/tag/b10318) |
| **b10313** | Server Router：新增 **LRU 调度器**（#26572） | [Release](https://github.com/ggml-org/llama.cpp/releases/tag/b10313) |
| **b10312** | Server Router：**禁止驱逐正在处理请求的模型**（#26567） | [Release](https://github.com/ggml-org/llama.cpp/releases/tag/b10312) |
| **b10311** | mtmd：Qwen3-TTS 生成期间停止向文本流重复喂上下文，修复非流式模式下的 prompt 冲突（#26706） | [Release](https://github.com/ggml-org/llama.cpp/releases/tag/b10311) |
| **b10310** | GGML：新增 aarch64 HWCAP 缺失位回退逻辑；修复 fp16 CPU 变体检测（#25554） | [Release](https://github.com/ggml-org/llama.cpp/releases/tag/b10310) |
| **b10308** | 修复 Windows MSYS2 UCRT64 (GCC 16.1.0) 环境的崩溃问题（#26555） | [Release](https://github.com/ggml-org/llama.cpp/releases/tag/b10308) |

### 潜在破坏性变更 / 注意

- **b10313 & b10312** 改变了 Router 的模型加载/驱逐策略。若你的服务依赖旧的无序驱逐行为，需观察新 LRU 调度是否影响冷启动时延或触发意外的模型重载。建议阅读 [PR #26572](https://github.com/ggml-org/llama.cpp/pull/26572) 和 [PR #26567](https://github.com/ggml-org/llama.cpp/pull/26567) 了解新行为。
- **b10311** 修正了 Qwen3-TTS 的 prompt 拼接逻辑，依赖此前错误行为的自定义客户端可能需要适配。

---

## 3. 新模型与硬件支持

### 架构级新增

- **TML Inkling 架构**（PR #25731，Open）：新增 safetensors→GGUF 转换器、graph 构建与 kernel 改动；为支持大型 MoE 使用了 `int64_t` 索引，并实现 Flash Attention banded kernel。适用于新形态 MoE 模型。 [PR #25731](https://github.com/ggml-org/llama.cpp/pull/25731)

### 已有模型的适配补全

- **DeepSeek 4**：
  - `-sm tensor` 支持（PR #26490，Open）：因 Q 头 64 而 K 头 1，FA 镜像了 KV 头；meta backend 中新增 `memset_tensor`。 [PR #26490](https://github.com/ggml-org/llama.cpp/pull/26490)
  - **DeepSeek V4 MTP + DSpark**（PR #25784，Closed/已合并）：官方 0731 版本未附带 MTP，社区提供 DSpark 权重，`--spec-` 下约 **50% 加速**。 [PR #25784](https://github.com/ggml-org/llama.cpp/pull/25784)

### 硬件后端

- **CUDA SM120 CUTLASS MoE Prefill**（PR #26704，Open，Draft）：实验性支持 **MXFP4（GPT-OSS）与 NVFP4（Qwen3.6-35B-A3B）**，默认关闭。将专家权重重打包、复用每层路由调度与输入量化，通过 CUDA epilogue 执行分组 W13/W2。 [PR #26704](https://github.com/ggml-org/llama.cpp/pull/26704)
- **RDNA4 构建文档**（PR #26745，Open）：HIP 文档新增 gfx1200/gfx1201 目标说明，RDNA4 用户无需再猜测 GPU_TARGETS。 [PR #26745](https://github.com/ggml-org/llama.cpp/pull/26745)
- **HIP 启用 CUB 路径**（PR #26592，Open）：ARGSORT/TOP_K 此前在 HIP 上回退到仅支持 1024 行的 bitonic sort，现通过 hipCUB 启用 CUB 实现。 [PR #26592](https://github.com/ggml-org/llama.cpp/pull/26592)

---

## 4. 性能与优化

### 已合并/已发布

- **SYCL：SSM_CONV 窗口加载合并**（b10322）——Arc Pro B70 上，n_t=512 时延 97.68→52.95 us/run，**1.85x**。 [Release b10322](https://github.com/ggml-org/llama.cpp/releases/tag/b10322)
- **TTS 计时修正**（b10326）：确保 vocoder pass 计入总耗时，benchmark 数字更真实。 [Release b10326](https://github.com/ggml-org/llama.cpp/releases/tag/b10326)

### 进行中（Open PR）

- **Metal：Mamba-2 prefill 分块 SSD MMA**（PR #26647）：与 CUDA 侧 `BLSharda` 方案对应，≤64 token 块时用并行 simdgroup matmul 替代逐 token 串行计算。 [PR #26647](https://github.com/ggml-org/llama.cpp/pull/26647)
- **OpenCL：FA prefill K tile 转置**（PR #26428）：针对 flash_attn_f32_f16/_q8_0/_q4_0 在 local memory 中 K tile 的 QK 循环读取优化。 [PR #26428](https://github.com/ggml-org/llama.cpp/pull/26428)
- **专家缓存**（PR #26563）：`-ehs N` 激活，自包含、默认关闭。作者说明已基于反馈重新设计约一半系统，当前为开发中状态。 [PR #26563](https://github.com/ggml-org/llama.cpp/pull/26563)
- **CUDA：OUT_PROD 支持 f16**（PR #26599）：避免 src0 f16 时回退 CPU，在设备端转 f32 后走既有实现。 [PR #26599](https://github.com/ggml-org/llama.cpp/pull/26599)
- **WebGPU：flash_attn shader 简化与重构**（PR #26134）：清理多个 WGSL 文件中的未用参数，降低 shader 编译负担。 [PR #26134](https://github.com/ggml-org/llama.cpp/pull/26134)

### 值得关注的社区讨论

- **Metal vs Vulkan 性能差异研究**（Issue #10982，49 评论）：Asahi Linux GPU 驱动开发者发起，希望提升 Vulkan 后端在 Apple Silicon 上的竞争力。长期利好 Linux 下 macOS 性能对标。 [Issue #10982](https://github.com/ggml-org/llama.cpp/issues/10982)

---

## 5. 稳定性与回归

> 按严重程度排序。

### 🔴 高严重度（正确性/崩溃）

- **Vulkan DeviceLostError**（Issue #25664，Open）：DeepSeek-V4-Flash（IQ3_XXS）在 Strix Halo（RADV）上多轮后设备丢失，无修复 PR。 [Issue #25664](https://github.com/ggml-org/llama.cpp/issues/25664)
- **MTP 模型长会话后输出重复 `////`**（Issue #23577，Open）：Qwen3.6-27B-MTP + CUDA，长期未解决，影响长对话场景。 [Issue #23577](https://github.com/ggml-org/llama.cpp/issues/23577)
- **K/V cache 类型强一致**（Issue #26382，Open）：GLM-5.2 等无 V cache 的模型也会被 `-ctk` 强制要求 `-ctv`，加载失败。 [Issue #26382](https://github.com/ggml-org/llama.cpp/issues/26382)
- **RPC + Vulkan 混合后端下 DeepSeek V4 输出乱码**（Issue #26685，Open）：CUDA host + Vulkan RPC node 组合。 [Issue #26685](https://github.com/ggml-org/llama.cpp/issues/26685)

### 🟡 中严重度（功能受阻/性能异常）

- **AMD Strix Halo 性能下降 30% CPU 占用**（Issue #25700，Open）：输入层被迫留在 CPU 导致 GPU 利用率不足，HIP 后端，无修复。 [Issue #25700](https://github.com/ggml-org/llama.cpp/issues/25700)
- **Gemma 4 tg128 在 RTX 5060 Ti (Blackwell) 性能异常低**（Issue #26674，Open）：TG128 架构在该硬件上明显慢于预期，等待确认。 [Issue #26674](https://github.com/ggml-org/llama.cpp/issues/26674)
- **Gemma 4 MTP `Tensor in buffer cannot run (NONE)`**（Issue #24366，Open，stale）：CUDA 后端加载 Gemma 4-31B QAT 失败，已 stale。 [Issue #24366](https://github.com/ggml-org/llama.cpp/issues/24366)
- **OpenVINO Windows 无法使用 GPU**（Issue #26393，Open）：设备列表可见但选择 GPU 报错。 [Issue #26393](https://github.com/ggml-org/llama.cpp/issues/26393)
- **编译失败：`unknown type name '__fp16'`**（Issue #26677，Open）：在 Linux 下作为第三方依赖（Firefox Nightly）编译时 simd-mappings.h 报错。 [Issue #26677](https://github.com/ggml-org/llama.cpp/issues/26677)

### 🟢 已修复（今日合入的修复）

- **Qwen3-TTS 重复短语 & 不停止**（Issue #26700，Closed）：已在 **b10311** 修复。 [Issue #26700](https://github.com/ggml-org/llama.cpp/issues/26700) / [Release b10311](https://github.com/ggml-org/llama.cpp/releases/tag/b10311)
- **Metal NORM/RMS_NORM 计算错误**：已在 **b10321** 修复。 [Release b10321](https://github.com/ggml-org/llama.cpp/releases/tag/b10321)
- **MSYS2 UCRT64 崩溃**：已在 **b10308** 修复。 [Release b10308](https://github.com/ggml-org/llama.cpp/releases/tag/b10308)
- **mtmd longest_edge 忽略 min/max 像素**：已在 **b10319** 修复。 [Release b10319](https://github.com/ggml-org/llama.cpp/releases/tag/b10319)

### ⚪ 安全/告警类

- **Windows Defender 误报**（Issue #26343，Open）：b10195 CPU 包被报毒，社区报告 false positive，无官方回复。 [Issue #26343](https://github.com/ggml-org/llama.cpp/issues/26343)

---

## 6. 对应用开发者的意义

1. **多模型 Router 更可靠**：LRU 调度（b10313）+ 不驱逐忙碌模型（b10312）双重保障，显著降低多租户场景下「模型被换出导致请求中断」的风险。如果您在 `llama-server` 上构建多 model 的 Agent 网关，建议升级并重新评估路由命中率与显存水位。 [b10313](https://github.com/ggml-org/llama.cpp/releases/tag/b10313) / [b10312](https://github.com/ggml-org/llama.cpp/releases/tag/b10312)

2. **工具调用沙箱化起步**：PR #26507 为 `llama-server` 增加 Docker 工具隔离运行方式（`--tools-runtime docker:ubuntu:jammy`），代码执行类 Agent 可以开始设计隔离边界。 [PR #26507](https://github.com/ggml-org/llama.cpp/pull/26507)

3. **API Key 泄露面收窄**：UI 设置页与错误页的 API Key 字段已阻止浏览器自动填充（PR #26562），对部署在共享浏览器环境的中转服务有意义。 [PR #26562](https://github.com/ggml-org/llama.cpp/pull/26562)

4. **音频生成链路正在变稳**：Qwen3-TTS 的重复输出问题（#26700）在 b10311 修复，且 b10326 让计时统计诚实反映 vocoder 成本。若您在构建语音 Agent，可以开始跟进 TTS 后端能力。 [b10326](https://github.com/ggml-org/llama.cpp/releases/tag/b10326) / [b10311](https://github.com/ggml-org/llama.cpp/releases/tag/b10311)

5. **会话管理改进**：PR #24176 将 checkpoint 创建点提前到每条用户消息，并直接在 token 层扫描用户边界，对长会话的上下文回溯与分支切换更友好。 [PR #24176](https://github.com/ggml-org/llama.cpp/pull/24176)

6. **性能基准参考**：SYCL SSM_CONV 1.85x 与 DeepSeek V4 DSpark 50% 加速（社区 PR）说明 Mamba/SSM 类架构和投机解码仍是最值得投入的优化方向，应用侧可关注 `--spec-` 与 SSM 模型的最新 benchmark。 [b10322](https://github.com/ggml-org/llama.cpp/releases/tag/b10322) / [PR #25784](https://github.com/ggml-org/llama.cpp/pull/25784)

---

**数据窗口**：2026-08-07 12:00 UTC – 2026-08-08 12:00 UTC（github.com/ggml-org/llama.cpp）

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 动态日报（2026-08-08）

## 1. 今日速览

Ollama 今日无新版本发布。重点动态集中在稳定性修复与引擎能力推进：多个 GPU 后端（CUDA/ROCm）出现崩溃或错误输出，Laguna parser 误判 JSON 为工具调用的问题有对应修复 PR；MLX 引擎侧则出现了 DFlash 投机解码和图像输入支持的重大 PR。

## 2. 版本发布与破坏性变更

无。

## 3. 新模型与硬件支持

- **Reranking 模型支持请求仍在累积热度**：Issue #3368 请求为 Ollama 增加 BGE / mxbai 等 reranker 模型支持，当前 285 👍、113 条评论，是长期高关注的功能诉求。[#3368](https://github.com/ollama/ollama/issues/3368)
- **MLX 引擎新增 DFlash 块级投机解码**：PR #17571 引入 `x/models/dflash` 草稿模型，可用单次前向生成一整块 token，并借用目标模型的 embedding 和输出头。[#17571](https://github.com/ollama/ollama/pull/17571)
- **MLX 引擎图像输入支持进行中**：PR #17600 在 DFlash 分支基础上加入 image input，并尽量保留 prefix cache 与投机解码能力。[#17600](https://github.com/ollama/ollama/pull/17600)
- **MLX 侧 Nemotron 3 支持开发中**：PR #17060 包含多个自定义 Metal kernel 实现，尚未合并。[#17060](https://github.com/ollama/ollama/pull/17060)

## 4. 性能与优化

- **DFlash 区块投机解码**：与单 token 草稿不同，DFlash 一次生成完整 token block，可显著降低多次小步预测的调度开销，适合 MLX 后端延迟优化。[#17571](https://github.com/ollama/ollama/pull/17571)
- **Qwen 系列显存预测修复**：Issue #17517 报告新版本中 Qwen 模型加载时显存占用直接触顶、GPU 未利用满；PR #17615 定位到 `PredictServerVRAM` 中 KV cache 显存计算项有误，已提交修复。[#17517](https://github.com/ollama/ollama/issues/17517) [#17615](https://github.com/ollama/ollama/pull/17615)
- **MoE 专家权重 offload 至主机内存的社区建议**：Issue #17557 提出让 MoE 专家权重驻留 host RAM、按需加载到 GPU，以在 8GB 显存上运行 16B/35B MoE 模型。目前仍是需求讨论，未进入实现。[#17557](https://github.com/ollama/ollama/issues/17557)

## 5. 稳定性与回归

按严重程度排列，标注是否有修复 PR。

### 崩溃 / 正确性问题

- **Gemma4:e2b 在 WSL2 下启动崩溃**：`llama-server` 触发 `GGML_ASSERT(n_inputs < GGML_SCHED_MAX_SPLIT_INPUTS)`。暂无修复 PR。[#16506](https://github.com/ollama/ollama/issues/16506)
- **DGX Spark CUDA illegal memory access**：Qwen3-Next 80B-A3B（head size 256）大 prompt prefill 时确定性崩溃，涉及 `ggml_cuda_flash_attn_ext_mma_f16_case`。暂无修复 PR。[#17596](https://github.com/ollama/ollama/issues/17596)
- **MLX 长驻 runner 跨请求响应串号**：`OLLAMA_KEEP_ALIVE=-1` 时，runner 可能返回之前某个 prompt 的完整答案，属于严重正确性/数据隔离问题。暂无修复 PR。[#17599](https://github.com/ollama/ollama/issues/17599)
- **ROCm 下 Gemma 4 12B 输出损坏**：AMD Radeon 8060S（gfx1151）在约 1.2k prompt token 后出现降质/乱码。暂无修复 PR。[#17498](https://github.com/ollama/ollama/issues/17498)
- **AMD Ryzen AI MAX+ 395 输出错误**：Vulkan/ROCm 启用 GPU 加速时模型输出语义错误；该 issue 已关闭。[#17604](https://github.com/ollama/ollama/issues/17604)
- **Qwen2.5-3B 中文输入输出乱码**：Windows CPU 上 tokenizer 误判，输出 `@@@@@`、`!!!!!` 等垃圾 token。暂无修复 PR。[#17587](https://github.com/ollama/ollama/issues/17587)
- **低量化 KV cache 导致模型乱答**：切换 q8_0 到 q4_0 KV 量化后，模型开始输出无意义重复 token。暂无修复 PR。[#17614](https://github.com/ollama/ollama/issues/17614)
- **Laguna parser 将正文 JSON 误判为工具调用**：普通内容中的 `{"...` 被识别成 bare-tool-call，可能导致回复中断/损坏。已有两个修复 PR：#17603、#17616。[#17602](https://github.com/ollama/ollama/issues/17602) [#17603](https://github.com/ollama/ollama/pull/17603) [#17616](https://github.com/ollama/ollama/pull/17616)

### 回归 / 兼容性问题

- **CUDA 环境变量行为回归**：新版 Ollama 不再遵守 `CUDA_VISIBLE_DEVICES`，导致无法在多卡机器上指定运行 GPU。暂无修复 PR。[#17609](https://github.com/ollama/ollama/issues/17609)
- **Windows `ollama create` 无法解析 NTFS 挂载点路径**：通过 `C:\mnt\hdd0\...` 引用 GGUF 时报 `invalid model name`。已有修复 PR #17608（#17607 已关闭）。[#17591](https://github.com/ollama/ollama/issues/17591) [#17608](https://github.com/ollama/ollama/pull/17608)
- **Qwen 模型加载回归**：新版本后 Qwen3.6 35B 显存分配异常。修复 PR #17615 已提交。[#17517](https://github.com/ollama/ollama/issues/17517)
- **DeepSeek-V4 prompt KV cache 短空闲即丢失**：即使使用相同前缀，缓存未命中。暂无修复 PR。[#17577](https://github.com/ollama/ollama/issues/17577)
- **HF 模型下载超时**：大量模型下载时报 `context deadline exceeded`。暂无修复 PR。[#17484](https://github.com/ollama/ollama/issues/17484)
- **Mac 非管理员无法通过“Restart to update”完成升级**。暂无修复 PR。[#11972](https://github.com/ollama/ollama/issues/11972)

### 其他功能缺陷

- **工具参数 `enum` 不生效**：模型能正确看到枚举值，但生成工具调用时仍可输出不在枚举范围内的值，与 `response_format` 的强制约束行为不一致。[#17597](https://github.com/ollama/ollama/issues/17597)
- **显式自定义模板可能被忽略**：当模型自带模板包含更多特性（如 tool calling）时，用户自定义模板会被覆盖。[#17605](https://github.com/ollama/ollama/issues/17605)
- **Docling 集成下 DocTags 未输出**：`granite_docling:258m` 与 Ollama 配合时，DocTags 不出现，影响下游文档解析。[#17585](https://github.com/ollama/ollama/issues/17585)

## 6. 对应用开发者的意义

- **MLX 长驻 runner 的串号问题需要重点关注**：如果你在 Apple Silicon 上以 `keep_alive=-1` 跑生产 Agent，务必升级后再让跨请求共享长驻实例，短期可考虑缩短 keep_alive 或进程隔离，避免返回上一个对话的答案。[#17599](https://github.com/ollama/ollama/issues/17599)
- **不要完全信任工具调用的 schema 约束**：`enum` 等参数约束在解码阶段未被强制，应用层需要额外校验工具参数；同时 Laguna parser 对正文 JSON 的误判可能直接损坏回复，建议应用侧对流式输出做防御性解析。[#17597](https://github.com/ollama/ollama/issues/17597) [#17602](https://github.com/ollama/ollama/issues/17602)
- **Windows 下 `ollama create` 的用户暂时避开 NTFS 挂载点/软链路径**，等 #17608 合入后恢复。[#17591](https://github.com/ollama/ollama/issues/17591)
- **K/V cache 与下载可靠性仍是 RAG 应用隐患**：DeepSeek-V4 的 prefix cache 丢失和 HF 下载超时会影响长会话体验，生产环境建议自行实现 prompt 压缩或重试机制。[#17577](https://github.com/ollama/ollama/issues/17577) [#17484](https://github.com/ollama/ollama/issues/17484)
- **关注 MLX DFlash 与 MoE offload 的进展**：前者可降低投机解码延迟，后者有望让更多 MoE 模型在低显存设备运行；但均未进入正式版，当前仅适合内部评估。[#17571](https://github.com/ollama/ollama/pull/17571) [#17557](https://github.com/ollama/ollama/issues/17557)

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM 动态日报 2026-08-08

## 1. 今日速览
LiteLLM 今日重点推进了 auto-router 的会话亲和（deployment affinity）与按模型组路由策略两个新特性（[PR #36146](https://github.com/BerriAI/litellm/pull/36146)、[PR #36115](https://github.com/BerriAI/litellm/pull/36115)），路由控制粒度进一步提升；同时合入多个稳定性修复，包括 WebSearch snippet 恢复、模型列表 access group 解析、UI 团队编辑等。社区关注焦点仍集中在 Azure GPT-5.6 系列成本核算回归（[#36094](https://github.com/BerriAI/litellm/issues/36094)、[#36192](https://github.com/BerriAI/litellm/issues/36192)）和 python-dotenv 依赖固定问题（[#25280](https://github.com/BerriAI/litellm/issues/25280)）。

## 2. 版本发布与破坏性变更
- **v1.97.0-dev.2**：仅包含 Docker 镜像 cosign 签名验证说明，无实质功能变更（[Release](https://github.com/BerriAI/litellm/releases/tag/v1.97.0-dev.2)）。
- **潜在破坏性变更**：commit `5f63873` 将 python-dotenv 精确固定为 `==1.0.1`，导致 CVE-2026-28684 无法升级，并可能与消费方依赖树冲突（[Issue #25280](https://github.com/BerriAI/litellm/issues/25280)、[Issue #26333](https://github.com/BerriAI/litellm/issues/26333)）。以 library 模式集成 LiteLLM 的用户升级前需检查依赖解析。

## 3. 新模型与硬件支持
- **Vertex AI Chirp 3 HD STT/TTS**：新增 gRPC 流式传输通道，支持 Chirp 3 HD 语音（如 `en-US-Chirp3-HD-Charon`）及 Chirp STT 模型（[PR #36233](https://github.com/BerriAI/litellm/pull/36233)，open）。
- **Bedrock Nova Sonic 工具调用修复**：改为优先读取 `toolUse.content`，并正确处理 `role=TOOL` 的轮次，修复实时会话中工具参数丢失问题（[PR #35716](https://github.com/BerriAI/litellm/pull/35716)，open）。

## 4. 性能与优化
- **Auto-router deployment affinity**（[PR #36146](https://github.com/BerriAI/litellm/pull/36146)，open）：同一会话的多轮请求固定到同一 deployment，避免 provider prompt cache 冷启动，对多轮 Agent 场景可显著降低延迟与成本。
- **Bedrock Guardrail 请求合并**（[PR #36119](https://github.com/BerriAI/litellm/pull/36119)，open）：超大请求不再拆分，避免 AWS 三倍计费和额外延迟。
- **按模型组配置路由策略**：新增 `model_info.routing_strategy`，可在模型定义层设置负载均衡策略，解决 Routing Groups UI 中组名不可调用的问题（[PR #36115](https://github.com/BerriAI/litellm/pull/36115)，open）。

## 5. 稳定性与回归
按严重程度排序：

- **严重 · 成本核算回归**：`azure/gpt-5.6-luna` 在 main 分支及 v1.96.0 RC 中成本低估 5 倍，影响所有依赖内置 cost map 做计费的用户（[Issue #36094](https://github.com/BerriAI/litellm/issues/36094)，open，无 fix PR）。
- **严重 · 成本地图错误**：`azure/gpt-5.6-terra` 与 `azure/gpt-5.6-luna` 的 Azure 型号误用 OpenAI 直连降价后的价格，Azure 实际未同步该降价（[Issue #36192](https://github.com/BerriAI/litellm/issues/36192)，open，无 fix PR）。
- **高 · 依赖固定问题**：python-dotenv 固定为 `==1.0.1` 导致 CVE-2026-28684 无法修复，社区对是否为有意变更加入讨论（[Issue #26333](https://github.com/BerriAI/litellm/issues/26333)、[Issue #25280](https://github.com/BerriAI/litellm/issues/25280)，open）。
- **中 · Python 3.14 安装失败**：litellm-rust 依赖 PyO3 0.23.5，与 Python 3.14 不兼容（[Issue #33116](https://github.com/BerriAI/litellm/issues/33116)，closed）。
- **中 · Model Info 字段不持久化**：Admin UI 中手动添加的 `max_input_tokens` 等字段保存后被丢弃（[Issue #23345](https://github.com/BerriAI/litellm/issues/23345)，open，无 fix PR）。

**已关闭的修复 PR：**
- 模型列表端点忽略 team/key 上的 access groups，且 `no-default-models` 哨兵值被误当作模型返回（[PR #36230](https://github.com/BerriAI/litellm/pull/36230)，closed）。
- Admin UI 允许 access group 作为团队唯一模型来源，并增加 model badge 来源提示（[PR #36234](https://github.com/BerriAI/litellm/pull/36234)，closed）。
- WebSearch 原生 `web_search_tool_result` 块恢复 snippet 文本，修复重放拦截轮次时触发 400 的问题（[PR #36228](https://github.com/BerriAI/litellm/pull/36228)，closed）。
- `bedrock-mantle` SigV4 签名 service_name 由 `bedrock` 修正为 `bedrock-mantle`，修复 IAM 权限错误（[PR #31988](https://github.com/BerriAI/litellm/pull/31988)，closed）。

## 6. 对应用开发者的意义
- **路由策略可配置化**：如果你在构建多模型 Agent，auto-router affinity 与 `model_info.routing_strategy` 将让你在会话粘性、prompt cache 命中与负载均衡之间有更细粒度的控制，建议跟踪 [PR #36146](https://github.com/BerriAI/litellm/pull/36146) 和 [PR #36115](https://github.com/BerriAI/litellm/pull/36115) 的合入状态。
- **注意依赖固定风险**：python-dotenv 等依赖被精确固定，部署时建议锁定可复现的依赖版本，并评估 CVE 修复策略。
- **成本数据暂不可靠**：Azure GPT-5.6 系列的费用统计目前有较大偏差，涉及该模型的账单应以云厂商侧数据为准；Vertex 批处理成本归因修复（[PR #34456](https://github.com/BerriAI/litellm/pull/34456)）正在推进，batch 计费将不再出现空白 key/team。
- **工具调用稳定性提升**：WebSearch snippet 恢复、Bedrock Realtime tool call 修复已进入主干，使用 Bedrock/WebSearch 构建 Agent 的应用升级后可获得更稳定的工具链体验。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth 动态日报 · 2026-08-08

## 今日速览
过去 24 小时无新版本发布，但 8 月 8 日当天新提交了三个关键修复 PR：Deep Research 前端进度/认证修复（[#8129](https://github.com/unslothai/unsloth/pull/8129)）、torchvision 兼容性加固（[#8128](https://github.com/unslothai/unsloth/pull/8128)）、无 vLLM 引擎时 `save_lora` 修复（[#8127](https://github.com/unslothai/unsloth/pull/8127)）。社区侧最需关注的是 Apple Silicon 上四个官方 MLX 镜像无法加载（[#8126](https://github.com/unslothai/unsloth/issues/8126)）；新功能方面，MiniMax H3 视频生成 PR（[#7989](https://github.com/unslothai/unsloth/pull/7989)）为 Studio 带来文生视频能力。

## 新模型与硬件支持
- **MiniMax H3 文生视频**（[PR #7989](https://github.com/unslothai/unsloth/pull/7989)，Open）：Studio Video 标签页新增 MiniMax H3 text-to-video，支持同步音频，可选官方 BF16（Diffusers）或 GGUF 量化（stable-diffusion.cpp）。
- **MLX 上下文长度**（[PR #8125](https://github.com/unslothai/unsloth/pull/8125)，Open）：Studio 为 MLX 模型指定并展示真实上下文长度，修复此前固定 4096 且无 context 窗口显示的问题。
- **Vulkan 回退 CPU**（[PR #8050](https://github.com/unslothai/unsloth/pull/8050)，Open）：受影响的 Intel 系统上，自动选择的 Vulkan `llama-server` 加载崩溃时自动用 CPU 重试。
- **非 CUDA 验证脚本征集**（[Issue #8099](https://github.com/unslothai/unsloth/issues/8099)，Open）：社区提议添加 Intel XPU/AMD ROCm 端到端示例脚本，尚无进展。
- **已知模型问题**：Gemma 4 基础模型 tokenizer 缺 `<bos>`（[#7903](https://github.com/unslothai/unsloth/issues/7903)）；Nemotron attention 处理异常（[#7527](https://github.com/unslothai/unsloth/issues/7527)），均无修复 PR。

## 性能与优化
- **事件循环卸载**（[PR #7944](https://github.com/unslothai/unsloth/pull/7944)，Closed）：`/api/inference/status` 不再在 FastAPI 事件循环上执行 llama.cpp 能力探测与 GitHub 远端检查，消除对 SSE token 流式传输的阻塞；该接口被 UI 每 5 秒轮询一次。
- **本地模型盘点线性化**（[PR #8043](https://github.com/unslothai/unsloth/pull/8043)，Open）：Studio 本地模型库存扫描从二次方降为 O(仓库数 + 缓存状态数)，合并并发扫描、避免只读探针创建写锁，修复 [#7849](https://github.com/unslothai/unsloth/issues/7849)。
- **CUDA 测试 spoof 修正**（[PR #8123](https://github.com/unslothai/unsloth/pull/8123)，Open）：修复 `mem_get_info` 返回 `(free, total)` 填反而产生的“显存耗尽”假阳性。
- **已知瓶颈**（[Issue #8081](https://github.com/unslothai/unsloth/issues/8081)，Open）：AMD ROCm 上 Studio diffusion 退化为整模块 offload，1024×1024/20 步耗时 48m25s，其中采样仅 1m47s（5.40 s/it），其余时间消耗在 PCIe 子模块换页和 VAE 分块解码。

## 稳定性与回归
按严重程度排列，并标注修复状态：

| 严重度 | 概述 | 修复状态 |
|---|---|---|
| 阻塞 | Apple Silicon 上四个官方 MLX 镜像 `config.json` 缺 `mlx-lm` 所需 key，无法加载（[#8126](https://github.com/unslothai/unsloth/issues/8126)） | 无 fix PR |
| 高 | torchvision 编译算子与 torch 版本不匹配，`import unsloth` 崩溃（[PR #8128](https://github.com/unslothai/unsloth/pull/8128)） | fix PR Open |
| 高 | 损坏的 TensorFlow 安装经 Transformers 导入链破坏 Unsloth import（[PR #8124](https://github.com/unslothai/unsloth/pull/8124)） | fix PR Open |
| 高 | Linux 桌面应用因 X11 IO 错误被 GTK 吞掉日志、静默 rc=1（[#8062](https://github.com/unslothai/unsloth/issues/8062)） | 已关闭 |
| 高 | Studio 自动选择 Vulkan 加载模型崩溃（[PR #8050](https://github.com/unslothai/unsloth/pull/8050)） | fix PR Open |
| 中 | Studio 识别 GPU 但不识别 VRAM，推理使用系统 RAM（[#7449](https://github.com/unslothai/unsloth/issues/7449)） | 无 fix PR |
| 中 | `fast_inference=False` 时 LFM2.5 GRPO 保存阶段 `save_lora` 不存在（[PR #8127](https://github.com/unslothai/unsloth/pull/8127)） | fix PR Open |
| 中 | TRL≥1.0.0 下 `padding_free=True` 的 SFT 构造被 `max_length` guard 误伤（[PR #7951](https://github.com/unslothai/unsloth/pull/7951)） | fix PR Open |
| 中 | 运行时 TLS 验证忽略 OS 信任库，企业 TLS 拦截代理下失败（[PR #8108](https://github.com/unslothai/unsloth/pull/8108)） | fix PR Open |
| 中 | Deep Research 前端进度/回环认证/模型重试异常（[PR #8129](https://github.com/unslothai/unsloth/pull/8129)）；此前同类问题 max_tokens 钳制、零输出烧预算、选择器路径 bug（[#7965](https://github.com/unslothai/unsloth/issues/7965)、[#7964](https://github.com/unslothai/unsloth/issues/7964)、[#7961](https://github.com/unslothai/unsloth/issues/7961)）均已关闭 | fix PR Open |
| 中 | 同模型重载后 per-model 加载设置不刷新（[PR #8119](https://github.com/unslothai/unsloth/pull/8119)） | fix PR Open |
| 中 | 缓存数据集加载后 bookkeeping 写失败导致整次加载报错（[PR #8057](https://github.com/unslothai/unsloth/pull/8057)） | fix PR Open |
| 低 | Studio 训练覆盖层将已缓存资源显示为 Downloading 99%（[#7858](https://github.com/unslothai/unsloth/issues/7858)） | 已关闭 |
| 低 | 本地模型被自动下载的 HF Unsloth 版本覆盖（[#8113](https://github.com/unslothai/unsloth/issues/8113)） | 无 fix PR |
| 低 | 自定义目录下投机解码 draft 模型未被识别（[#8077](https://github.com/unslothai/unsloth/issues/8077)） | 无 fix PR |
| 低 | 模型名解析时 repo id 被强制小写化（[PR #8058](https://github.com/unslothai/unsloth/pull/8058)） | fix PR Open |
| 低 | 离线重试失败时只显示 network error 而非原始错误（[PR #8121](https://github.com/unslothai/unsloth/pull/8121)） | fix PR Open |
| 低 | 桌面应用 CSP 允许 loopback HTTP，不可信图片可探测本地服务（[PR #8046](https://github.com/unslothai/unsloth/pull/8046)） | 已关闭 |
| 低 | Windows 下 `unsloth.exe` 目录锁被误报为权限问题（[PR #7740](https://github.com/unslothai/unsloth/pull/7740)） | fix PR Open |
| 测试 | Contract tests 误红（[#8115](https://github.com/unslothai/unsloth/pull/8115)）、过时断言（[#8120](https://github.com/unslothai/unsloth/pull/8120)）、CUDA spoof 显存误报（[#8123](https://github.com/unslothai/unsloth/pull/8123)） | fix PR Open/Closed |

## 对应用开发者的意义
- **Studio 工具调用恢复可用**：此前 OpenAI 风格 function calling 经 Studio 代理失败的问题（[#4999](https://github.com/unslothai/unsloth/issues/4999)）已关闭；新的 Deep Research 修复（[PR #8129](https://github.com/unslothai/unsloth/pull/8129)）补上了前端进度、回环认证和模型重试逻辑，Agent 类应用可继续依赖 Studio 服务链路。
- **本地模型/量化部署注意**：若在自定义目录中加载模型并使用投机解码（[#8077](https://github.com/unslothai/unsloth/issues/8077)）或依赖 Studio 加载本地文件（[#8113](https://github.com/unslothai/unsloth/issues/8113)），当前需要手动确认实际加载路径；GGUF 的 image-model companion 资产生命周期定义仍不明确（[#8116](https://github.com/unslothai/unsloth/issues/8116)），清理磁盘时需小心。
- **企业代理部署**：建议跟踪 [PR #8108](https://github.com/unslothai/unsloth/pull/8108) 的合入时间，该 PR 修复运行时 TLS 验证忽略 OS 信任库的问题，对 Zscaler/Umbrella 等 TLS 检查代理环境是刚需。
- **Apple Silicon 用户**：在 [#8126](https://github.com/unslothai/unsloth/issues/8126) 修复发布前，避免升级受影响 MLX 镜像，或改用非 Unsloth 加载路径。
- **依赖隔离**：如果生产环境存在非标准 torchvision 或 TensorFlow 版本，在 [#8128](https://github.com/unslothai/unsloth/pull/8128) 和 [#8124](https://github.com/unslothai/unsloth/pull/8124) 合入前，建议固定依赖版本或使用干净环境，避免 `import unsloth` 被第三方库破坏。
- **Docker 用户**：官方 Docker 镜像已两个月未更新（[#7999](https://github.com/unslothai/unsloth/issues/7999)），社区在催促重建，如有镜像拉取计划可暂缓。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*