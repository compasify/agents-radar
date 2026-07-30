# AI 基础设施日报 2026-07-30

> 生成时间: 2026-07-30 01:19 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

好的，作为一名专注于 AI 基础设施的技术分析师，现根据您提供的2026-07-30各项目动态，为您生成一份横向对比分析报告。

---

### AI 基础设施生态横向对比分析报告 (2026-07-30)

**报告摘要：** 今日生态呈现出“模型驱动，架构承压”的态势。以 **Kimi K3** 和 **DeepSeek-V4** 为代表的新一代模型架构（MLA、KDA、Mamba等）正迫使底层推理引擎进行深度适配与重构，由此引发了从KV缓存管理到投机解码策略等一系列稳定性与优化挑战。各项目在积极拥抱新模型的同时，也暴露出不同层面的成熟度差异。

#### 1. 生态全景

今日 AI 基础设施生态的核心特征是 **“先进模型”与“基础设施成熟度”之间的张力**。一方面，以 Kimi K3 和 DeepSeek-V4 为代表的模型架构，其复杂的注意力机制（MLA、KDA）和量化方案（FP4/FP8）要求推理引擎进行底层算子重构和缓存策略创新；另一方面，这种快速迭代导致了显著的稳定性回归，尤其在多模态、多层级缓存和新的硬件平台（如 DGX Spark (sm_121) / AMD RDNA4）上。整体而言，社区活力极高，**优化火力高度集中于 KV Cache 的智能化管理和 MTP（多令牌预测）投机解码的实用化**，但生产环境部署需对特定模型-硬件-软件组合进行严格验证。

#### 2. 各项目活跃度对比

| 项目 | Issues 活跃度 (新品及高优) | PR 活跃度 (关键修复/特性) | 版本发布 | 核心焦点 |
| :--- | :--- | :--- | :--- | :--- |
| **vLLM** | 高 (~10个关键/高优) | 高 (~10+) | 回顾至 v0.26.0 回归 | Kimi-K3、DeepSeek-V4、Tiered KV Offload稳定性 |
| **SGLang** | 中 (~5个高优) | 高 (~10+) | 无 | Kimi-K3 路线图、HiCache/NIXL 后端、DCP Bug修复 |
| **llama.cpp** | 高 (~15+ 活跃 Issue) | 极高 (~20+) | 7个 (b10174-b10182) | CUDA/ROCm SYCL 后端适配、MTP、新模型架构 |
| **Ollama** | 中 (~5个高优) | 中 (~5+) | 无 | Cloud Pro 稳定性危机、MLX MTP、BUG修复 |
| **LiteLLM** | 中 (~5个严重/高优) | 高 (~10+) | v1.95.0-rc1 | MCP 安全、Docker 签名、计费/日志 Bug 修复 |
| **Unsloth** | 中 (~5个) | 中 (~3+) | v0.1.51-beta | Kimi K3 本地推理、并行对话、AMD ROCm 兼容性 |

**分析：**
- **vLLM & SGLang**：作为高性能推理引擎的领头羊，竞争激烈，注意力高度集中在最新、最复杂的大模型上，围绕 MLA、MTP 和 KV Cache 展开攻防。两者修复 Bug 和接受新特性的速度极快。
- **llama.cpp**：版本发布最频繁，社区活跃度最高，覆盖了从 CUDA/SYCL 后端到新模型架构的最广泛支持，是模型支持多元化的“急先锋”。
- **Ollama**：用户体验优先，但核心模型的稳定性危机（Cloud Pro）和新架构的兼容性问题（Qwen3.6、Gemma4）是其当前最大短板。
- **LiteLLM**：作为网关，重心不在模型推理本身，而是 API 兼容性、计费、安全和可观测性，其 Bug 集中在流式处理、参数传递和日志回调上。
- **Unsloth**：作为微调框架，正尝试向推理侧（Studio）延伸，但面临 ROCm 平台的严重稳定性挑战。

#### 3. 模型支持竞速

| 新模型/新架构 | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Kimi K3** | ✅ 深度支持中（#50001 跟踪） | ✅ 路线图驱动（#32607） | ✅ PR 阶段（#26185） | ❌ | ✅ v0.1.51-beta |
| **DeepSeek-V4** | ✅ 聚焦性能与Bug修复 | ✅ AMD GPU 优化中 | ❌ (未明确提及) | ❌ | ❌ |
| **Qwen3.6** | ⚠️ 工具调用冲突 | ❌ | ❌ | ⚠️ CUDA 非法内存访问 | ❌ |
| **GLM-5.2** | ⚠️ AMD MI300x 死锁 | ❌ | ✅ MTP 支持 (#25980) | ❌ | ❌ |
| **Gemma4** | ⚠️ MTP 崩溃/SYCL乱码 | ❌ | ❌ | ⚠️ 工具调用/显示Bug | ⚠️ VRAM溢出（修复中） |
| **Motif 3** | ❌ | ❌ | ✅ PR 阶段 (#26298) | ❌ | ❌ |
| **Minimax M3** | ❌ | ✅ PR 阶段 (#31989) | ✅ PR 阶段 (#26297) | ✅ 推荐列表 | ❌ |
| **LFM2.5** | ❌ | ✅ H200 优化路线图 | ❌ | ❌ | ❌ |

**分析：** **vLLM、SGLang、llama.cpp** 是支持新模型最积极的“第一梯队”，但路径不同。vLLM 和 SGLang 侧重于深度优化商业级模型（Kimi, DeepSeek），而 llama.cpp 则致力于最广泛的实验性模型支持。Ollama 作为分发层，依赖上游引擎，因此对新模型的支持存在滞后性。

#### 4. 性能优化前沿

优化的火力集中指向以下几个方向：

- **KV Cache 智能管理（最大公约数）**：
  - **多层级卸载 (Tiered KV Offload)**：vLLM 正在深度优化其卸载事件路径、Promotion策略和HIT_PENDING机制，目标是解决显存溢出和长尾延迟。
  - **外置缓存后端 (HiCache/NIXL)**：SGLang 提出异步后端方案，旨在解耦IO等待，提升KV Cache扩展效率。
  - **缓存复用逻辑**：SGLang 和 llama.cpp 都遭遇了投机解码破坏 Radix Cache 复用的问题，这是当前缓存优化的关键冲突点。

- **投机解码 (MTP/Speculative Decoding) 实用化**：
  - **主流化**：几乎所有项目都在支持或测试 MTP，但普遍面临与结构化输出、工具调用、Radix Cache 的兼容性问题。
  - **优化**：llama.cpp 提出上下文长度感知的投机调度、Unsloth 实现 MLX MTP，旨在提升在不同场景下的投机效率和稳定性。

- **量化技术的深化与适配**：
  - **NVFP4/MXFP4**：SGLang 和 vLLM 都在引入 NVFP4 加载时反量化路径，以减少Marlin运行时开销。llama.cpp 则关注利用 PTX 9.4 新指令实现 INT4→INT8 的硬件扩展。
  - **AMD GPU 适配**：SGLang 和 vLLM 都在为 DeepSeek-V4 等模型在 AMD GPU 上修复 FP8 缩放元数据问题，确保量化推理的数值正确性。

- **分布式与后端多样化**：
  - **通信优化**：vLLM 为 Kimi K3 实现 DCP（直接一致性协议），SGLang 为 DeepSeek-V4 启用 `flydsl-a2a` 进行 intranode 通信优化。
  - **硬件后端**：llama.cpp 和 Unsloth 不断修复 SYCL、ROCm、Intel GPU 上的崩溃和数值问题，但 AMD 生态稳定性仍是共同痛点。

#### 5. 分层定位差异

| 项目 | 核心定位 | 技术栈层级 | 目标用户 | 核心竞争力 |
|:---|:---|:---|:---|:---|
| **vLLM** | 高性能推理引擎 & 服务框架 | **推理层**：PagedAttention内核， KV Cache 管理，CUDA Graph | 需要极致吞吐和低延迟的生产环境用户 | 系统级优化（CUDA Graph、PagedAttention）、社区成熟度最高 |
| **SGLang** | 高性能推理系统（端到端） | **推理层**：Radix Cache, LLM Runtime，结构化控制流 | 对延迟要求极高、需要灵活执行策略的Agent/推理场景 | Radix Cache 前缀复用、结构化推理、灵活的执行调度 |
| **llama.cpp** | 轻量级本地推理运行时 | **推理层**：纯C/C++实现，广泛后端的推理库 | 本地部署、边缘设备、个人开发者 | 硬件支持最广（CPU/GPU/各种加速器）、资源占用极低 |
| **Ollama** | 模型分发与简化部署 | **服务层**：基于llama.cpp等后端的应用封装和API | 追求“开箱即用”体验的开发者与个人用户 | 极简的部署体验、模型仓库管理、命令行工具 |
| **LiteLLM** | LLM API 网关 | **网关/路由层**：模型路由、API翻译、成本/速率限制 | 管理多个模型后端的企业应用、AI平台 | 与100+ LLM提供商兼容、强大的可观测性与成本控制 |
| **Unsloth** | 模型微调框架 & 本地推理 | **训练/微调层**：优化微调算子和内存，提供Studio产品 | 需要高效微调开源模型的开发者 | 2x 微调加速、社区贡献的微调配方（LORA等） |

**分析：**
- **vLLM 和 SGLang** 在推理层竞争最激烈，它们解决的核心问题是“如何用最少的GPU、最快的速度推理大模型”。
- **llama.cpp** 和 **Ollama** 构成了“本地化”的基石，分别是“引擎”和“服务”。
- **LiteLLM** 在更高层级提供“总控”能力，解决多模型管理和成本治理问题。
- **Unsloth** 则在 AI 工作流的**上游（训练/微调）** 提供价值，但现在正试图向下游（推理）延伸，形成闭环。

#### 6. 值得关注的趋势信号

1.  **架构复杂性导致稳定性风险加剧**：以 Kimi K3 为代表的混合MLA/KDA架构和DeepSeek-V4的MoE + 多样量化方案，正显著提升系统崩溃和内存越界的概率（如 DCP 非法内存访问）。这表明**基础设施的“架构韧性”成为与原始性能同等重要的优化指标**。Agent/应用开发者应预期，在模型发布初期，需要接受更高的实验性风险。

2.  **KV Cache 策略成为推理性能的“皇冠明珠”**：无论是 vLLM 的多层级卸载、SGLang 的后端异步化，还是两者共同面对的缓存复用问题，都指向一个结论：**提升有效 KV Cache 命中率和扩展其容量，是下一阶段性能突破的关键**。生产部署必须将KV Cache 策略视为核心基础设施能力。

3.  **量化竞争进入“细粒度实战”阶段**：从简单的 Q4/Q8 转向 NVFP4/MXFP4 混合精度，以及对特定硬件指令集的挖掘（如 PTX 9.4），说明量化优化已从“通用方案”走向“硬件-模型协同定制”。通用量化模型库的价值将降低，深度绑定特定硬件的优化方案将更具竞争力。

4.  **MTP 投机解码与 Agent 工作流的冲突**：MTP 是与 Radix Cache、结构化输出、工具调用冲突的根源，这并非偶然。**当前的投机解码策略（基于大量生成的草稿 token）可能与需要精准控制每次输出的 Agent 逻辑天然矛盾**。未来可能需要设计更“确定性”或“上下文感知”的投机解码策略，服务 Agent 场景。

5.  **跨项目协作的趋势变得模糊**：Ollama 依赖 llama.cpp，Unsloth 拥抱 llama.cpp，而 vLLM 和 SGLang 则自研核心。市场正在分化出“自成体系”（vLLM, SGLang）与“兼容并包”（Ollama, Unsloth）两大阵营。对于技术决策者，选择哪种路线取决于你对性能自主权和生态系统依赖度的权衡。

**给 Agent/应用开发者的最终建议：** **放弃对“最佳推理引擎”的追求，转而构建“模型兼容性矩阵”**。在为你的 Agent 选择模型时，必须组合评估 **M (模型) + H (硬件) + R (推理引擎)** 三者的兼容性和稳定性。例如，今天的日报显示 `Qwen3.6 + DGX Spark(aarch64) + vLLM` 和 `Kimi-K3 + TP=8 + vLLM` 都是高风险组合。请在验证环境中针对你的特定负载（尤其是MTP+工具调用+长上下文并发场景）建立全面的回归测试。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM 动态日报 (2026-07-30)

## 今日速览

- **DeepSeek-V4 成为焦点**：多个 Issue 报告在 DGX Spark (GB10, sm_121) 上使用 `cudagraph_mode=FULL_AND_PIECEWISE` + chunked prefill 时服务挂起（#40969），以及 v0.26.0 中 FlashMLA 断言失败的回退（#49922），社区正在积极排查并提交修复 PR。
- **Kimi-K3 支持加速推进**：跟踪 Issue #50001 汇总了 KV 缓存管理、KDA prefill、DCP 核心（PR #50055）等关键任务，同时报告了 TP=8 并发负载下的非法内存访问问题（#50147），已有相应的量化修复 PR #50181。
- **KV 多层级卸载（Tiered KV Offload）持续演进**：多个 RFC 和 Bug 围绕卸载事件路径重构（#49413）、`HIT_PENDING` 机制无截止时间导致请求延迟（#49829）、以及 Promotion 策略填满主 DRAM 池（#49902）展开，表明基础设施层正经历深度优化。

## 新模型与硬件支持

- **Kimi-K3**：跟踪 Issue #50001 详细列出模型支持所需的上游组件，包括 Mamba prefix caching、KV offloading、KDA prefill 等。配套 PR #50055 实现了 DCP（直接一致性协议）核心支持，包含对称内存 A2A 及 fused MLA 层。
- **DeepSeek-V4**：多个 Issue 和 PR 针对其 Flash 版本（#40969、#49921、#45861）进行性能优化与稳定性修复，特别是 GB10 平台的 MoE 路由器 GEMM 问题（#49921）。
- **Qwen3.6 及 GLM-5.2**：Qwen3.6 的 MTP 与工具调用冲突（#46249）以及 GLM-5.2 在 AMD MI300x 上 MTP 死锁（#48568）表明对最新模型族的支持仍在完善中。
- **硬件后端**：ROCm 平台持续有 Hang 和启动崩溃问题（#39010、#48568）；aarch64/GB10 上出现 EngineCore 静默死亡（#50067），需设置 `CUDA_LAUNCH_BLOCKING=1` 规避。

## 性能与优化

- **DeepSeek V4 性能优化**：Issue #45861 跟踪了多个已合并的性能优化 PR（#45061、#45863、#44577 等），涵盖算子、内存布局等方面。
- **Gemma4 FA4 预填充优化**：PR #50294 优化了 FA4 mm_prefix 的范围查找，提升 CuTe JIT 稳定性，尤其针对 sliding-attention 和 global-attention 的不同 head_dim。
- **离线 Beam Search 性能**：PR #49541 在离线 beam search 中跳过中间步的 detokenization，减少不必要的 tokenizer 调用。
- **NVFP4 加载时反量化**：PR #50335 新增 opt-in 的 NVFP4 加载时反量化路径，用于 Hopper 架构上大 encode/prefill 批次时减少 Marlin 运行时开销。
- **PTX 9.4 新指令适配**：Issue #49529 建议在 W4A8-INT8 路径中使用 `ldmatrix.s8.s4` 实现硬件 INT4→INT8 扩展加载，可进一步提升量化推理效率。
- **上下文长度感知的投机调度**：Issue #48627 提出了将投机 token 数量扩展为 `(batch, ctx)` 二维表格的 RFC，以更精细地控制不同上下文长度下的投机深度。

## 稳定性与回归

按严重程度排列：

| 严重程度 | 问题描述 | 相关 Issue/PR |
|----------|----------|----------------|
| **Critical** | v0.26.0 回归：DeepSeek-V4-Pro 在 FlashMLA (phase1.cuh) 中断言 `CUDA_SUCCESS` 失败，退回 v0.25.0 正常 | [#49922](https://github.com/vllm-project/vllm/issues/49922) |
| **Critical** | DeepSeek-V4-Flash 在 DGX Spark (sm_121) 上约 6 次请求后挂起，与 `cudagraph_mode=FULL_AND_PIECEWISE` + chunked prefill 相关 | [#40969](https://github.com/vllm-project/vllm/issues/40969) |
| **Critical** | Kimi-K3 (TP=8) 在并发负载下频繁非法内存访问崩溃 | [#50147](https://github.com/vllm-project/vllm/issues/50147) – 已有修复 PR [#50181](https://github.com/vllm-project/vllm/pull/50181)（量化选择修复） |
| **High** | MTP 投机解码 + xgrammar 结构化输出 + 异步调度：验证器接受语法非法 draft token，导致 HTTP 500 和静默截断 | [#49694](https://github.com/vllm-project/vllm/issues/49694) |
| **High** | 多层级 KV 卸载中 `HIT_PENDING` 无截止时间，慢写入会导致请求不断重试直至超时 | [#49829](https://github.com/vllm-project/vllm/issues/49829) |
| **High** | GB10 (sm_121) 上 EngineCore 在 warmup 阶段静默死亡，需 `CUDA_LAUNCH_BLOCKING=1` 可规避 | [#50067](https://github.com/vllm-project/vllm/issues/50067)（已关闭） |
| **Medium** | Qwen3.6-27B 当 MTP 启用时，Responses API 工具调用失效（回归） | [#46249](https://github.com/vllm-project/vllm/issues/46249) |
| **Medium** | Gemma4 MTP 在 v0.25.1 引擎初始化时崩溃 (aarch64)，错误 "a and b must have same reduction dim" | [#48848](https://github.com/vllm-project/vllm/issues/48848) |
| **Medium** | GLM-5.2 MTP 在 AMD MI300x 上死锁（RCCL 通道错误） | [#48568](https://github.com/vllm-project/vllm/issues/48568) |
| **Medium** | FlashInfer sampler JIT 在 nvcc 不可见时崩溃，无降级到原生 sampler | [#49497](https://github.com/vllm-project/vllm/issues/49497) |
| **Low** | 多层级 KV 卸载 Promotion 策略缺陷：等待中的请求全部被提升，填满主 DRAM 池 | [#49902](https://github.com/vllm-project/vllm/issues/49902) |

## 对应用开发者的意义

- **MTP 投机解码的兼容性问题**：如果你在 API 服务中启用了 MTP（如 Qwen3.6、Gemma4），请留意与工具调用（tool calling）和结构化输出的潜在冲突，建议在验证环境充分测试后再上线。
- **多层级 KV 卸载（Tiered KV Offload）仍不稳定**：当前实现中 `HIT_PENDING` 无超时机制，可能导致长尾延迟；promotion 策略也可能意外填满 GPU 显存。建议尚未使用该功能的生产环境暂缓升级，等待后续 RFC 重构（#49413）落地。
- **DeepSeek-V4 用户特别注意**：v0.26.0 存在 FlashMLA 回归，如果您使用 DeepSeek-V4-Pro，建议继续停留在 v0.25.0。DGX Spark（sm_121）用户需关注 cudagraph 相关挂起问题。
- **Kimi-K3 支持逐步完善但风险较高**：跟踪 Issue #50001 显示大量组件尚在开发中，当前 PR #50181 修复了 fp8 KV cache 的量化选择，但并发负载下的非法内存访问（#50147）仍需谨慎对待。
- **ROCm / AMD GPU 用户**：MTP 功能在 MI300x 上可能死锁，建议暂时禁用投机解码。FlashAttention 在 ROCm 上的 CUDA Graph 捕获也可能导致 Hang（#39010）。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

好的，作为专注于 AI 基础设施的技术分析师，我根据您提供的 GitHub 数据，为您生成 2026-07-30 的 SGLang 动态日报。

---

# SGLang 动态日报 2026-07-30

## 1. 今日速览

今天社区活动集中在 **Kimi K3 模型的深度优化** 与 **KV Cache 基础设施的迭代**上。核心关注点包括：Kimi K3 模型因其重要性获得了专门的优化路线图（#32607），同时与之相关的 DCP + DSPARK 组件中发现了一个高优先级的内存越界 Bug（#32828），目前已有修复 PR。此外，针对 **HiCache NIXL 存储后端** 的异步完成处理（#32841）和运行时动态绑定（#32817）提出了两项新的 RFC，预示着 KV Cache 系统的灵活性和性能将进一步提升。

## 2. 版本发布与破坏性变更

*无。过去 24 小时内无新版本发布。*

## 3. 新模型与硬件支持

- **[模型] Kimi K3 支持与路线图**：`sgl-project/sglang` 社区发布了 Kimi K3 模型的完整支持路线图（#32607），涵盖了从 Day 0 支持的 PR、官方 Cookbook 到详细的**内核优化（MLA、DSP 等）**、**FP4 量化**、**DCP**、**PD 分离**和**工具调用**等后续规划。该路线图获得了社区 10 个点赞，显示了极高的关注度。
    - **链接**: [Issue #32607](https://github.com/sgl-project/sglang/issues/32607)

- **[硬件] 支持 Hygon HCU GPU**：社区提出了支持**海光 HCU GPU** 的分阶段路线图（#31015），旨在扩展 SGLang 在国产硬件生态中的覆盖范围。
    - **链接**: [Issue #31015](https://github.com/sgl-project/sglang/issues/31015)

- **[量化] 新模型与格式**：
    - **MiniMax-M3-NVFP4**：已开启 PR 以支持 `nvidia/MiniMax-M3-NVFP4` 模型（#31989）。
    - **Qwen3.5 与 NPU MXFP4**：PR #32150 和 #30318 正在为华为昇腾 NPU 上的 Qwen3.5 等模型适配 MXFP8/MXFP4 量化方案，特别是 MoE 层的 W4A8 量化。
        - **链接**: [PR #31989](https://github.com/sgl-project/sglang/pull/31989)
        - **链接**: [PR #32150](https://github.com/sgl-project/sglang/pull/32150)
        - **链接**: [PR #30318](https://github.com/sgl-project/sglang/pull/30318)

## 4. 性能与优化

- **[优化] DeepSeek-V4 的 AMD GPU 内核优化**：PR #32726 通过启用 `flydsl-a2a` 技术，为 AMD GPU 上的 DeepSeek-V4 模型进行 intranode 通信优化。同时，PR #32839 修复了 DeepSeek-V4 在 gfx950 上的融合 RMS FP8 缩放元数据问题，确保了数值正确性。
    - **链接**: [PR #32726](https://github.com/sgl-project/sglang/pull/32726)
    - **链接**: [PR #32839](https://github.com/sgl-project/sglang/pull/32839)

- **[优化] Kimi 线性模型 PD 分离**：PR #32837 实现了对 Kimi 线性模型在 Mooncake 和 NIXL 后端上的 Prefill-Decode 分离支持，能够将预填充阶段的 MLA 行传输到解码阶段，优化异构拓扑下的资源利用率。
    - **链接**: [PR #32837](https://github.com/sgl-project/sglang/pull/32837)

- **[优化] Diffusion 模型序列并行注意力**：PR #32667 新增了 K/V-gather 序列并行注意力模式，为非因果注意力的 Diffusion 模型提供了除 Ulysses 外的并行选项。
    - **链接**: [PR #32667](https://github.com/sgl-project/sglang/pull/32667)

- **[优化] 内核仓库清理**：PR #32788 对内核代码仓库进行重构，增加了 **CPU 兼容性检查** 和**基准测试布局清理**，有助于提升代码健壮性和开发效率。
    - **链接**: [PR #32788](https://github.com/sgl-project/sglang/pull/32788)

- **[RFC] HiCache NIXL 异步后端**：Issue #32841 提出了为 HiCache NIXL 存储后端实现**异步完成处理**的 RFC，旨在大幅减少 IO 等待对推理吞吐的影响，这是提升 KV Cache 扩展能力的关键。
    - **链接**: [Issue #32841](https://github.com/sgl-project/sglang/issues/32841)

- **[路线图] LFM2.5 模型 H200 调优**：报告指出 `LFM2.5-8B-A1B` 模型在 H200 上因缺少调优配置，存在 **1.37-1.74 倍的内核级优化空间**和 **23.3% 的端到端性能提升潜力**。这表明模型特定参数的调优收益巨大。
    - **链接**: [Issue #32806](https://github.com/sgl-project/sglang/issues/32806)

## 5. 稳定性与回归

- **[高] Kimi DCP + DSPARK 内存越界（紧急修复中）**：PR #32828 紧急修复了 Kimi 模型在使用 DCP 和 DSPARK（推测解码）功能时，长序列生成场景下的**潜在内存越界错误**，并增加了静态验证覆盖。
    - **PR**: [PR #32828](https://github.com/sgl-project/sglang/pull/32828)

- **[高] EAGLE 推测解码导致 Radix Cache 复用崩溃**：Issue #32459 报告了一个严重问题：启用 EAGLE 推测解码会破坏多轮对话场景下的前缀复用，导致复用率从 97% 骤降至 40-53%。这直接影响了基于前缀缓存的 Agent 工作负载效率。
    - **链接**: [Issue #32459](https://github.com/sgl-project/sglang/issues/32459)

- **[中] LLama 3.3 70B GB200 和 Kimi 模型回归**：
    - **LLama 3.3 70B** 在 GB200 上因 PR #26496 导致解码吞吐量回归（#28224），已由 PR #29201 修复（#32787）。
    - **Kimi K2.6** 在开启 `piecewise prefill CUDA graph` 后导致约 3.7% 的吞吐量回归（#32655）。
        - **链接**: [Issue #28224](https://github.com/sgl-project/sglang/issues/28224)
        - **链接**: [Issue #32787](https://github.com/sgl-project/sglang/issues/32787)
        - **链接**: [Issue #32655](https://github.com/sgl-project/sglang/issues/32655)

- **[中] DeepSeek-V4 与 AMD GPU 数值问题**：PR #31727 修复了 DeepSeek-V4 在 gfx950 上因 FP8 缩放元数据导致 GSM8K 评估分数从 ~0.925 下降到 ~0.912 的回归问题。
    - **PR**: [PR #31727](https://github.com/sgl-project/sglang/pull/31727)

- **[低] Glm5.2 解码性能下降 & Nvidia 编译器崩溃**：Issue #32582 报告了 Glm5.2 模型解码性能大幅下降；Issue #32830 报告了 Nvidia 编译器在服务 `DeepkSeek v4` 时出现段错误，这两个问题目前仍在等待进一步排查。
    - **链接**: [Issue #32582](https://github.com/sgl-project/sglang/issues/32582)
    - **链接**: [Issue #32830](https://github.com/sgl-project/sglang/issues/32830)

## 6. 对应用开发者的意义

- **Agentic/RAG 工作负载受到影响**：EAGLE 推测解码与 Radix Cache 复用的冲突（#32459）是重大利空。如果您正在构建高吞吐的 Agent 应用并依赖前缀缓存，目前**应避免同时启用 EAGLE 推测解码特性**，直到该问题被彻底修复。请关注 `sgl-project/sglang` Issue #32459 的进展。
- **Kimi K3 生态正在形成**：如果您计划在应用中使用 Kimi K3 模型，现在是最好的关注时机。其独立路线图和活跃的 Day 0 支持意味着很快会获得丰富的功能和优化支持。相关的 DCP Bug（#32828）也已被快速定位和修复，稳定性有保障。
- **KV Cache 架构持续演进**：HiCache NIXL 后端的异步化（#32841）和运行时动态绑定（#32817）提案，预示着未来 KV Cache 将更加灵活和高效。应用开发者未来可能无需重启服务即可切换或调整外置缓存后端，这将显著提升系统的运维弹性和资源利用率。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp 动态日报 2026-07-30

## 今日速览

社区在今天密集发布 7 个版本（b10174–b10182），重点包括 **CUDA MMQ 共享内存门槛调整**、**SYCL 统一元素算子快速路径**以及 **GLM‑5.2 多令牌预测（MTP）支持**。同时，**RTX 3090 上 MMQ 被错误禁用**、**GLM‑5.2 MTP 张量默认加载引发回归**等问题迅速被 PR 修复。新模型支持方面，Motif 3 Beta、Kimi‑K3、Qwen3‑TTS 等架构的 PR 已提交或进入评审。

---

## 版本发布与破坏性变更

### b10182 – `suppress_tokens` 移至 `common/sampling`
- [b10182 Release](https://github.com/ggml-org/llama.cpp/releases/tag/b10182)
- PR [#26276](https://github.com/ggml-org/llama.cpp/pull/26276) 将 `suppress_tokens` 处理逻辑从核心 `llama` 模块迁移到 `common/sampling` 层，并修复了安全漏洞（移除 `has_logit_bias` 标志）。  
  **影响**：依赖 `libllama` 的第三方应用若使用了 `suppress_tokens`，需调整调用路径至新位置。

### b10181 – CUDA：对共享内存 < 48 KiB 的设备禁用 MMQ
- [b10181 Release](https://github.com/ggml-org/llama.cpp/releases/tag/b10181)
- 提交 `caa596ab3` 在 `ggml_cuda_should_use_mmq()` 中新增共享内存检查，低于 48 KiB 的设备将回退到非 MMQ 路径。  
  **注意**：此改动导致 **RTX 3090（Ampere，SM 8.6）被错误禁用 MMQ**，详见下方回归问题。

### b10180 – SYCL：连续元素的快速路径 + 32 位索引数学
- [b10180 Release](https://github.com/ggml-org/llama.cpp/releases/tag/b10180)
- PR [#25946](https://github.com/ggml-org/llama.cpp/pull/25946) 为 SYCL 一元元素操作添加连续张量快速路径，并使用 `fastdiv` 优化索引计算，预计提升 SYCL 后端的元素级算子吞吐。

### b10179 – 更新 BoringSSL 到 20260728.0
- [b10179 Release](https://github.com/ggml-org/llama.cpp/releases/tag/b10179)
- PR [#26241](https://github.com/ggml-org/llama.cpp/pull/26241) 更新了 bundled BoringSSL 版本，可能涉及安全与兼容性修复。

### b10178 – Server：添加 Slot 相似度日志追踪
- [b10178 Release](https://github.com/ggml-org/llama.cpp/releases/tag/b10178)
- PR [#26271](https://github.com/ggml-org/llama.cpp/pull/26271) 在 `server-context.cpp` 中加入 trace 级别日志，记录 prompt cache 槽位选择时的相似度计算细节及跳过原因，便于调试缓存命中问题。

### b10176 – RPC：添加 `tensor_memset` 支持
- [b10176 Release](https://github.com/ggml-org/llama.cpp/releases/tag/b10176)
- PR [#25912](https://github.com/ggml-org/llama.cpp/pull/25912) 为 RPC 后端实现分布式张量置零操作，解决跨节点初始化缺失的问题。

### b10175 – 为 RDNA3.5 / RDNA3 添加独立 MMQ 配置
- [b10175 Release](https://github.com/ggml-org/llama.cpp/releases/tag/b10175)
- PR [#26199](https://github.com/ggml-org/llama.cpp/pull/26199) 为 AMD RDNA3.5 和 RDNA3 架构新增独立的 MMQ 性能调优配置，避免用同一配置影响不同代 GPU。

### b10174 – GLM‑5.2 多令牌预测（MTP）推测解码
- [b10174 Release](https://github.com/ggml-org/llama.cpp/releases/tag/b10174)
- PR [#25980](https://github.com/ggml-org/llama.cpp/pull/25980) 为 `GLM_DSA` 架构添加 `draft-mtp` 推测解码目标，通过 `--spec-type draft-mtp` 启用，支持 NextN/MTP 张量加载（类似 qwen35moe/step35 中的 probe 机制）。

---

## 新模型与硬件支持

### 新增支持（PR 阶段）
- **Motif 3 Beta**  
  PR [#26298](https://github.com/ggml-org/llama.cpp/pull/26298) 添加了 **GDLA（Grouped Differential Latent Attention）** 架构支持，含 16 个 GQA KV 头和非潜变量 KV 缓存。
- **Kimi‑K3 文本模型**  
  PR [#26185](https://github.com/ggml-org/llama.cpp/pull/26185) 新增混合 KDA+MLA 注意力架构，含交叉层残差注意力、潜变量 MoE 和 `situ` 激活函数。
- **Minimax M3**  
  PR [#26297](https://github.com/ggml-org/llama.cpp/pull/26297) 用纯 ggml 算子替换了预填充阶段的自定义 CPU 算子，消除 GPU→CPU→GPU 同步开销。
- **Mimo2 MTP 推测解码**  
  PR [#26228](https://github.com/ggml-org/llama.cpp/pull/26228) 为 `mimo2` 架构添加 MTP 草稿支持，包括 MTP 图构建、融合 QKV 注意力。
- **Qwen3‑TTS**  
  PR [#26254](https://github.com/ggml-org/llama.cpp/pull/26254) 支持 Qwen3‑TTS 的 Talker Backbone 和 Speaker Encoder，需配合 `mtmd` 模块使用。
- **Suffix Decode（模型无关的推测解码）**  
  PR [#26283](https://github.com/ggml-org/llama.cpp/pull/26283) 引入后缀匹配动态树构建，可无模型生效，适合重复性高的请求。

### 硬件后端
- **Intel RDNA3.5/3 MMQ 配置独立**（b10175）
- **SYCL iGPU 分类修复**：PR [#26105](https://github.com/ggml-org/llama.cpp/pull/26105) 修复了 SYCL 后端将所有设备标记为 dGPU 的问题，现在能正确识别集成 GPU 并避免加载时 segfault。

---

## 性能与优化

### 已落地优化（版本发布）
- **SYCL 一元元素操作快速路径**（b10180）：连续张量直接使用 32 位索引，并启用 `fastdiv`，预计提升推理中激活层、归一化层等多处元素级算子的性能。
- **RPC tensor_memset**（b10176）：在多 GPU 分布式场景中初始化张量时避免主机同步，减少启动延迟。

### 进行中优化（PR）
- **CUDA MVQ→MMQ 交叉点调优**  
  PR [#26079](https://github.com/ggml-org/llama.cpp/pull/26079) 为不同硬件和量化类型添加运行时开关点，可精细控制 decode 阶段使用 `mul_mat_vec_q` 还是 int8 tensor core MMQ，预计在部分 AMD/NVIDIA GPU 上提升 decode 吞吐。
- **CUDA 罚分采样后端化**  
  PR [#25262](https://github.com/ggml-org/llama.cpp/pull/25262) 将 repeat/frequency/presence 罚分从 CPU 迁移至 GPU，使后续采样链也可保持 GPU 执行。
- **Server 路由避免卸载活跃模型**  
  PR [#23640](https://github.com/ggml-org/llama.cpp/pull/23640) 修复了 router 模式下正在加载或服务中的模型被 LRU 淘汰的问题，减少查询中断。

---

## 稳定性与回归

按严重程度排列，标注是否已有修复 PR 或版本。

### 严重崩溃/错误
1. **RTX 3090 上 MMQ 被错误禁用**（仅 b10181+）  
   Issue [#26285](https://github.com/ggml-org/llama.cpp/issues/26285) 指出 `caa596ab3` 的共享内存检查导致 Ampere 架构（48 KiB 共享内存）不满足条件，实际应允许。  
   **状态**：已报告，等待修复。

2. **GLM‑5.2 MTP 张量默认加载，无法 opt-out**  
   Issue [#26290](https://github.com/ggml-org/llama.cpp/issues/26290) 报告 #25980 被合入后，所有 GLM‑5.2 GGUF 在加载时都会加载 MTP 张量，即使未指定 `--spec-type`，引发内存和兼容性问题。  
   **修复 PR**： [#26296](https://github.com/ggml-org/llama.cpp/pull/26296) 增加 `--load-mtp` 开关，仅在启用时加载。

3. **Gemma 4 12B 在 Intel Arc Pro B70（SYCL）上产生乱码**  
   Issue [#26206](https://github.com/ggml-org/llama.cpp/issues/26206)：大 prompt 时输出垃圾，定位为 SYCL 后端问题。

4. **Gemma 4 31B + MTP 编辑系统消息时 server 崩溃**（fattn.cu）  
   Issue [#24440](https://github.com/ggml-org/llama.cpp/issues/24440)：`-sm tensor` 模式下编辑系统消息触发 CUDA 致命错误。

5. **Qwen3.6‑27B 双 GPU（RTX 5060 Ti + RTX 3060）输出全乱码**  
   Issue [#26257](https://github.com/ggml-org/llama.cpp/issues/26257)：单卡正常，双卡立即出错，疑似张量分片或计算依赖问题。

6. **Gemma4‑Assistant MTP 草稿模型加载回归**（b9553 正常，b9702+ 损坏）  
   Issue [#24795](https://github.com/ggml-org/llama.cpp/issues/24795)：`invalid vector subscript` 错误，影响官方 Windows 构建。

7. **SYCL 混合模型输出空白/乱码 + `ggml_sycl_op_mul_mat` 崩溃**  
   Issue [#24168](https://github.com/ggml-org/llama.cpp/issues/24168)：Intel Arc Pro B60 上 Qwen3Next/qwen35 架构在 b9128–b9159 后开始受影响。

### 功能/性能回归
- **Server SWA/循环内存错误导致全量表重计算**  
  Issue [#21831](https://github.com/ggml-org/llama.cpp/issues/21831) 持续活跃：使用 SWA 或 Recurrent Memory 时，后续请求总是重新处理整个 prompt，严重降低吞吐。
- **Vulkan 上下文增大时性能下降**  
  Issue [#24005](https://github.com/ggml-org/llama.cpp/issues/24005)：短 prompt 到 50k tokens 时 TG 吞吐约降 36%，非 KV 缓存带宽问题。
- **RPC 模型加载序列化瓶颈**  
  Issue [#25890](https://github.com/ggml-org/llama.cpp/issues/25890)：535GB 模型加载需 15 分钟，主机单核执行读+哈希+分派，其余 95 核和 NIC 空闲。
- **`--embedding` 下数据损坏**  
  Issue [#26282](https://github.com/ggml-org/llama.cpp/issues/26282)：`llama-server --embedding` 的嵌入质量下降，`jina-embeddings-v5` 受影响。

### 已修复问题（今日合入或已提 PR）
- **GLM‑5.2 默认加载 MTP** → PR [#26296](https://github.com/ggml-org/llama.cpp/pull/26296) 已提交。
- **CUDA mul_mat_id 重复专家 ID 错误**  
  PR [#26294](https://github.com/ggml-org/llama.cpp/pull/26294) 修复了 MoE 中同一专家被分配多次导致的计数逻辑错误；PR [#26295](https://github.com/ggml-org/llama.cpp/pull/26295) 修复了 CPU fallback 路径中相同的问题。
- **Qwen3 工具调用与推理混叠**  
  PR [#26252](https://github.com/ggml-org/llama.cpp/pull/26252) 为 Qwen3 添加了专用的聊天解析器，正确处理 `<tool_call>` 在 `<think>` 块内的情况。

### 已知未修复的高优先级问题
（部分来自issue列表，按点赞数排序）
- **Server 强制全 prompt 重处理**（#21831，👍27）
- **Hy3 模型请求**（#22477，👍25）
- **Voxtral Mini 实时 ASR 规划**（#20914，👍17）
- **Gemma 4 12B 无法用 OpenVINO 加载**（#24415，👍2）
- **RPC top_k 采样崩溃（AMD）**（#24177，👍1）
- **gemma4‑assistant MTP 模型加载回归**（#24795，👍8）

---

## 对应用开发者的意义

1. **`suppress_tokens` API 迁移**：若你通过 `libllama` 直接调用该功能，请更新至 `common/sampling` 新接口（b10182+）。
2. **GLM‑5.2 用户注意默认 MTP 加载**：从 b10174 开始，GLM‑5.2 GGUF 会自动加载 MTP 张量，增加显存和加载时间。升级到包含 PR #26296 的版本后，仅在使用 `--spec-type draft-mtp` 时加载。
3. **RTX 3090 / 3060 等 Ampere 用户暂停升级到 b10181**：MMQ 被误禁将导致 decode 大幅降速。预计下一个版本会修复或调整检查条件。
4. **Server 多槽/路由用户**：b10178 新增的 trace 日志可帮助分析缓存未命中原因；PR #23640 待合入后可避免路由中活跃模型被意外卸载。
5. **Agent 工具调用集成**：PR #26252（Qwen3）和 #26269（DS4）分别支持在推理阶段识别 `</think>` 与 `<tool_call>`，使 Agent 可正常解析混合内容。
6. **嵌入质量下降**：若使用 `--embedding` 服务，请关注 #26282 的进展，必要时降级至 b10173 前的版本。

---

*数据来源：`github.com/ggml-org/llama.cpp` Releases / Issues / PRs，更新截止 2026-07-30 12:00 UTC。*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 动态日报 | 2026-07-30

**今日速览**  
- 🚀 MLX 后端迎来 Qwen3.5 MTP 投机解码，在 Apple M5 Max 上实现显著加速，无需额外配置即可自动启用。  
- 🔧 多项关键 Bug 修复进入 CI：Windows 上 `OLLAMA_MODELS` 环境变量被忽略的问题已提交修复 PR；BERT 嵌入模型非 ASCII 文本错误也已有对应 PR。  
- ☁️ Ollama Cloud Pro 用户报告高达 95% 的模型调用失败率，服务严重不可用，社区反响强烈。

---

## 新模型与硬件支持

- **推荐模型更新**  
  PR #17448 将 `minimax-m3:cloud` 加入启动时的推荐模型列表，支持 1,000,000 token 上下文窗口。  
  [PR #17448](https://github.com/ollama/ollama/pull/17448)

- **MLX 导入 pipeline 落地**  
  PR #14969 增加了服务端 safetensors 导入支持（通过 MLX 管道），逐步淘汰旧的 GGUF 转换路径，提升导入灵活性。  
  [PR #14969](https://github.com/ollama/ollama/pull/14969)

- **AMD iGPU 配置指南**  
  Issue #17447 提供了 Linux (systemd) 下让 Ollama 使用 AMD 780M/890M iGPU 的解决方案（需 ≥32 GB DDR5 共享内存）。  
  [Issue #17447](https://github.com/ollama/ollama/issues/17447)

---

## 性能与优化

- **MLX Qwen3.5 MTP 投机解码（PR #17454）**  
  利用 Qwen3.5 checkpoint 中的 MTP (Multi-Token Prediction) 头作为草稿模型，在 MLX 引擎上实现无配置投机解码。在 M5 Max 上显著降低首 token 延迟并提升吞吐。相关统计日志也已用 info 级别输出（PR #17455）。  
  [PR #17454](https://github.com/ollama/ollama/pull/17454)  
  [PR #17455](https://github.com/ollama/ollama/pull/17455)

- **TurboQuant / RotorQuant 量化特性请求持续升温**  
  Issue #15051（235 👍）请求原生实现 Google 的 TurboQuant 与 RotorQuant 极端压缩算法，社区高度关注，但尚无排期。  
  [Issue #15051](https://github.com/ollama/ollama/issues/15051)

- **高功耗问题（CUDA 空闲功耗）**  
  Issue #8591 报告 CUDA 后端在空闲时因 PCIe 总线无法休眠导致功耗过高（~14W vs ~6W），已有多条讨论但尚未有实质性修复 PR。  
  [Issue #8591](https://github.com/ollama/ollama/issues/8591)

---

## 稳定性与回归

| 严重性 | 问题概述 | 关联修复 |
|--------|----------|----------|
| 🔴 严重 | **Ollama Cloud Pro 95% 失败率**（#15453）——所有云端模型（glm-5.1, kimi-k2.5, qwen3.5, deepseek-v3.2 等）几乎全部失败，用户付费后无法使用。 | 尚无修复 |
| 🔴 严重 | **Qwen3.6:35b + JSON schema + `think:false` 导致 CUDA illegal memory access**（#17434）——在 DGX Spark (GB10 arm64) 上 100% 可复现。 | 无对应 PR |
| 🟠 高 | **Qwen3.6:latest 在 Apple M5 上冻结系统**（#17452）——需要强制重启；Ollama 0.32.5 仍有此问题。 | 无对应 PR |
| 🟠 高 | **gemma4:e4b 工具调用解析错误**（#15315）——Ollama 0.20.1 宣称修复后又复发。 | 无新 PR |
| 🟠 高 | **Windows 桌面版忽略 `OLLAMA_MODELS` 环境变量**（#17374）——设置页面中保存的路径会覆盖环境变量。 | **PR #17401** 已提交 |
| 🟡 中 | **BERT 嵌入模型对非 ASCII 文本（组合变音符号）产生错误嵌入**（#15609）——GGUF 转换丢失 `strip_accents` 预处理。 | **PR #15627** 已提交 |
| 🟡 中 | **CPU 后端 KV 缓存完全失效**（#14780）——每次 `/api/chat` 从头重新计算全部 token。 | 无 PR |
| 🟡 中 | **gemma4:26b 下标数字渲染为字面量转义文本**（#17046）——例如 `₇` 显示为 `<0xE2><0x82><0x87>`。 | 无 PR |
| 🟢 低 | **`/v1/models` 缺少 context_length**（#17417） | **PR #17422** 已提交 |
| 🟢 低 | **进度条/更新检查/测试中的竞态条件**（#17445, #17446） | 对应 PR 已提交 |

**其他关闭/合并的 PR：**  
- `#17209` 和 `#17453` 修复工具参数 JSON Schema 中 `minimum`/`maximum`/`default` 等关键字的丢失。  
- `#17456`, `#17457` 清理并启用全树 lint，提升 CI 质量。  
- `#17449` 在 FAQ 中澄清桌面端更新检查发送的唯一标识信息，增强隐私透明度。

---

## 对应用开发者的意义

1. **MCP 协议支持请求热度不减**（#7865，220 👍）——当前仍为 open 状态，若你在构建需要与外部数据源交互的 Agent，可关注后续进展或自行封装。  
2. **Ollama Cloud Pro 不可用**——依赖云端模型的开发者需切换至本地部署或备选方案，等待官方修复。  
3. **工具调用注意规避**——gemma4 和 Qwen3.6 在特定条件下（JSON schema + `think:false`）存在崩溃风险，建议暂时避免组合使用。  
4. **环境变量修复即将落地**——Windows 上 `OLLAMA_MODELS` 的 PR 已提交，预计下个版本即可正常使用自定义模型路径。  
5. **API 增强：上下文长度可见**——`/v1/models` 端点即将返回 `context_length`，便于客户端自动适配模型窗口。  
6. **MLX 投机解码自动生效**——使用 Qwen3.5 且运行在 Apple Silicon 上的用户将直接获得性能提升，无需任何配置。  
7. **BERT 嵌入模型修复在途**——若你使用 Ollama 提供 embedding 服务且涉及非英语文本，可关注 PR #15627，或暂时回退至 HuggingFace transformers 管线。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

好的，以下是为您生成的 **LiteLLM 动态日报 (2026-07-30)**。

---

# LiteLLM 动态日报 (2026-07-30)

**为您精选 AI 基础设施 (推理引擎、模型服务、LLM 网关、微调框架) 领域的最新动态。**

## 1. 今日速览

今天 LiteLLM 发布了候选版本 **v1.95.0-rc.1**，主要引入了 Docker 镜像签名，强化了供应链安全。社区活跃度极高，修复了多个关键 Bug，包括流式响应中 OpenRouter 费用信息丢失、MCP 工具调用权限与安全扫描等。值得注意，**CJK 字符跨请求污染** 和 **无 Redis 环境下的双重计费** 问题已有修复方案。

## 2. 版本发布与破坏性变更

- **`v1.95.0-rc.1` 候选版本发布**
  - **主要内容**: 本次发布的重点是引入 Docker 镜像签名。
  - **影响**: 所有 Docker 镜像均已使用 [cosign](https://docs.sigstore.dev/cosign/overview/) 进行签名。对于在安全敏感环境中部署的用户，**建议更新拉取和验证流程**。
  - **链接**: [查看 Release 详情](https://github.com/BerriAI/litellm/releases/tag/v1.95.0-rc.1)

## 3. 新模型与硬件支持

- **Mixlayer 推理平台支持** (#33143)
  - **详情**: 通过 JSON 提供商注册，新增了对 [Mixlayer](https://mixlayer.com) 推理平台的支持。Mixlayer 提供开源模型的 OpenAI 兼容 API。
  - **影响**: 用户现在可以配置 `mixlayer/*` 来调用其平台上的 8 种模型，包括 `/chat/completions` 和 `/responses` 端点。
  - **PR**: [#33143](https://github.com/BerriAI/litellm/pull/33143)

- **Cloudflare Workers AI 支持扩展 (提案)**
  - **详情**: 社区提议更新 Cloudflare 提供商实现，以支持其扩展后的 AI API，包括文生图、文本转语音、语音转文本等新端点 (#21115)。对应的音频和图像支持的提案也已提交 (#35056, #35055)。
  - **链接**: [Issue #21115](https://github.com/BerriAI/litellm/issues/21115), [Issue #35056](https://github.com/BerriAI/litellm/issues/35056), [Issue #35055](https://github.com/BerriAI/litellm/issues/35055)

## 4. 性能与优化

- **OpenTelemetry 指标基数控制** (#35166)
  - **详情**: 修复了 `GenAIMetricRecorder` 将每次请求都唯一的 `hidden_params` 对象作为标签值打点的问题，这会导致指标系列随流量无限增长，影响监控系统性能。PR 通过限制属性来解决此问题。
  - **PR**: [#35166](https://github.com/BerriAI/litellm/pull/35166)

- **代理启动时 Prisma 二进制文件下载问题** (#33167)
  - **详情**: 从 v1.92.0 起，代理启动时会尝试下载 Prisma 二进制文件，导致无外网访问权限的封闭网络环境启动失败。
  - **状态**: 已有一个修复 PR (#33305) 通过重试机制缓解此问题。
  - **Issue**: [#33167](https://github.com/BerriAI/litellm/issues/33167)
  - **PR**: [#33305](https://github.com/BerriAI/litellm/pull/33305)

## 5. 稳定性与回归

- **[严重] CJK 字符跨请求流污染** (#35023)
  - **严重性**: 严重。在并发请求中，一个包含中文/日文等 CJK 字符的流式响应内容，会“泄露”到另一个不相关的流中。影响数据安全与正确性。
  - **状态**: **已关闭 (CLOSED)**。在 v1.93.0 和 v1.94.0 中确认，表明修复已合并或定位为特定环境问题。
  - **链接**: [Issue #35023](https://github.com/BerriAI/litellm/issues/35023)

- **[严重] 无 Redis 环境下团队花费双重计费** (#35150)
  - **严重性**: 严重。当代理不使用 Redis 时，团队的花费计数器可能被从数据库读取的实际花费“加”了两次，导致计费数据翻倍。
  - **状态**: **已有修复 PR** (#35150)。
  - **PR**: [#35150](https://github.com/BerriAI/litellm/pull/35150)

- **[中等] `/v1/messages` 流式日志回调丢失** (#35124)
  - **严重性**: 中。使用 `POST /v1/messages` (Anthropic 格式) 向 OpenAI 兼容后端发送流式请求时，日志记录回调 (`litellm_logging_obj`) 不会被触发，导致日志丢失。
  - **状态**: 已提交为 Bug Issue，尚未有修复 PR。
  - **Issue**: [#35124](https://github.com/BerriAI/litellm/issues/35124)

- **[中等] Claude Opus 4.7 参数兼容性** (#26444)
  - **严重性**: 中。LiteLLM 报告 `temperature` 参数支持 Claude Opus 4.7，但 Anthropic 实际会拒绝此参数，导致请求失败。
  - **状态**: Issue 仍为 OPEN，暂无修复 PR。
  - **链接**: [Issue #26444](https://github.com/BerriAI/litellm/issues/26444)

- **[中等] Bedrock Converse 静默丢弃 `reasoning_effort`** (#34105)
  - **严重性**: 中。对于非 Anthropic/Nova2/GPT-OSS 模型（如 Qwen3 在 Bedrock 上），`reasoning_effort` 参数被静默丢弃。
  - **状态**: Issue 仍为 OPEN，暂无修复 PR。
  - **链接**: [Issue #34105](https://github.com/BerriAI/litellm/issues/34105)

- **[低] OpenRouter 流式响应成本信息丢失** (#16021)
  - **严重性**: 低 (信息丢失)。非流式模式下 OpenRouter 返回的 `usage.cost` 信息在流式模式下丢失。
  - **状态**: Issue 仍为 OPEN。
  - **链接**: [Issue #16021](https://github.com/BerriAI/litellm/issues/16021)

- **[低] Vertex AI Anthropic `output_config` 字段被删除** (#26423)
  - **严重性**: 低 (功能受限)。当路由到 `vertex_ai/claude-opus-4-7` 时，请求中的 `output_config` (如 `task_budget`) 被静默移除。
  - **状态**: Issue 仍为 OPEN。
  - **链接**: [Issue #26423](https://github.com/BerriAI/litellm/issues/26423)

## 6. 对应用开发者的意义

- **MCP 安全性增强**: 多个 PR (#35146, #35147, #35155, #35169) 显著加强了 MCP (Model Context Protocol) 工具调用的安全模型，包括**用户级别的工具权限**、**SSO 身份断言** 以及 **后置调用风险评估**。开发者若在 Agent 应用中集成 MCP 工具，需关注这些权限模型与治理能力的变化。
- **成本追踪修复**: `complexity_router` 对请求体的记录 (#35164) 和团队花费双重计费的修复 (#35150)，直接改善了计费数据的准确性和可审计性，对于需要精细化成本管理的平台至关重要。
- **稳定性风险**: CJK 字符污染 (#35023) 和流式日志回调丢失 (#35124) 提醒开发者，在使用 LiteLLM 处理非英文内容或进行深度日志依赖时应保持警惕，尤其是在升级版本后。
- **新平台集成**: Mixlayer 和 Cloudflare Workers AI 的扩展支持，为开发者提供了更多模型选择和后端，尤其是在寻求低成本、开源模型或特定地理区域部署时更具灵活性。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

好的，这是为您生成的 2026-07-30 Unsloth 动态日报。

---

# Unsloth 动态日报 | 2026-07-30

## 今日速览
Unsloth 今日发布 **v0.1.51-beta**，核心亮点为支持 **Kimi K3** 本地推理、**并行多轮对话**以及面向本地模型的 **Deep Research** 模式。同时，社区反馈集中在 **Unsloth Studio** 的稳定性与兼容性上，特别是 **AMD (ROCm)** 平台遭遇了多项严重问题，包括启动崩溃、GPU 选择错误及安装失败。

## 版本发布与破坏性变更

- **v0.1.51-beta 发布**
    - **核心特性：**
        - **Kimi K3 本地化支持**：允许在本地通过 Dynamic GGUF 格式运行 Kimi K3 模型。
        - **并行对话 (Parallel Chat)**：支持多个聊天线程同步生成，彼此独立，互不阻塞。
        - **深度研究 (Deep Research)**：新增模式，模型可通过规划、阅读和引用来源来完成研究任务。
    - **兼容性：** 提升了 AMD 平台的兼容性。
    - **影响：** **无破坏性变更**。若需使用这些新功能，请升级至最新版本。

    [查看 Release](https://github.com/unslothai/unsloth/releases/tag/v0.1.51-beta)

## 新模型与硬件支持

- **新模型支持**：**Kimi K3** 现在可通过 Dynamic GGUF 格式在 Unsloth 上本地运行。
- **硬件支持**：
    - **ROCm (AMD)** 问题集中爆发。多个新 issue 报告了 AMD 平台上的严重系统性缺陷，包括：
        - **[高严重性] RDNA4 显卡** (`gfx1201` / Radeon AI PRO R9700) 启动时预编译的 `llama-server` 出现段错误 (segfault)。
        [Issue #7307](https://github.com/unslothai/unsloth/issues/7307)
        - **[高严重性] 多 GPU 选错**：`ROCm` 环境下的自动 GPU 选择逻辑会误选集成显卡（共享内存）而非独立显卡，导致崩溃。
        [Issue #7624](https://github.com/unslothai/unsloth/issues/7624)
        - **Windows/AMD 安装失败**：因无法找到 `stdlib.h` 导致编译失败。
        [Issue #7595](https://github.com/unslothai/unsloth/issues/7595)

## 性能与优化

- **并行对话**：v0.1.51-beta 实现了多个聊天会话的并发推理，可直接提升高并发场景下的用户吞吐量，减少排队等待。
- **MCP 会话保持**：PR #7625 修复了在 MCP 工具调用中被取消时，整个 `stdio` 服务进程被杀死的 bug。现在仅取消当前调用，会话保持活跃，避免重复初始化开销。
    [PR #7625](https://github.com/unslothai/unsloth/pull/7625)

## 稳定性与回归

以下为过去 24 小时内报告的严重稳定性与 Bug 问题，按照严重程度排列：

1.  **[严重] AMD (ROCm) 平台多处崩溃/错误**：如前所述，RDNA4 显卡段错误、多 GPU 选择错误、Windows 安装失败等问题对 AMD 用户影响极大。目前仅有用户侧工作区，无官方修复 PR。
2.  **[高] DiffusionGemma VRAM 溢出**：由于代码中硬编码 `NGL=99` 导致加载时无视用户在 Studio 中设置的 GPU 层数，从而引发 OOM（显存溢出）。**已有 PR #7575 修复**。
    - [Issue #7574](https://github.com/unslothai/unsloth/issues/7574)
    - [PR #7575](https://github.com/unslothai/unsloth/pull/7575)
3.  **[中] 默认模型加载逻辑错误**：新版本引入的 Bug，导致在未加载模型时，即使系统默认模型配置为 `Gemma-4-26B-A4B`，也会错误地改为加载 `Qwen 3.5 4B`。**已有 PR #7375 尝试修复**。
    - [Issue #7374](https://github.com/unslothai/unsloth/issues/7374)
    - [PR #7375](https://github.com/unslothai/unsloth/pull/7375)
4.  **[中] API 图片 URL 处理失败**：在本地部署中，通过 OpenAI 兼容 API 传入 HTTP(S) 图片 URL 无法工作（base64 编码可用）。
    [Issue #7596](https://github.com/unslothai/unsloth/issues/7596)
5.  **[低] WebUI 响应缓慢**：Windows 本地部署下的 WebUI 出现严重卡顿。
    [Issue #7522](https://github.com/unslothai/unsloth/issues/7522)

## 对应用开发者的意义

- **Agent 与应用开发**：
    - **并行对话**：开发者可以更轻松地构建支持多用户、多任务并发的聊天机器人或 Agent 平台，无需自行实现复杂的任务队列管理。
    - **Deep Research**：为构建自动化研究助手提供了原生支持，简化了流程编排。
    - **MCP 稳定性**：PR #7625 的修复 (如果合并) 将显著提升依赖 MCP 协议的 Agent 稳定性，避免因单次工具调用取消而导致整个 Agent 崩溃。
- **模型推理服务**：
    - **AMD 用户需谨慎**：当前 Unsloth 在 AMD 平台上的稳定性堪忧，在官方修复前不推荐在生产环境或关键开发流程中使用，尤其避免使用 RDNA4 新架构。
    - **DiffusionGemma 用户体验**：修复 VRAM 溢出的 PR 已提，依赖 `llama.cpp` 后端的 DiffusionGemma 应用开发者应密切关注此修复的合并状态。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*