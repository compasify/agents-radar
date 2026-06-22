# OpenClaw 生态日报 2026-06-22

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-22 00:30 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

好的，这是为您生成的 OpenClaw 项目动态日报。

---

## OpenClaw 项目动态日报 — 2026-06-22

### 1. 今日速览

过去24小时，OpenClaw 项目继续保持极高的社区活跃度，Issue 和 PR 总量均达到500条，但合并率较低（分别约为4.4%和4%），表明项目处于密集的“问题发现与讨论”阶段。P1 等级的 Bug 报告依然集中在**会话状态、消息丢失和回归问题**上，社区对稳定性的诉求尤为迫切。值得关注的是，昨日发布了 `v2026.6.10-beta.1` 和 `v2026.6.9` 两个版本，重点修复了子代理交付和 Telegram 消息渲染等一系列顽固问题。尽管修复进展显著，但新问题仍在不断涌现，项目健康度处于“**高活跃、高压力、需加速收敛**”的状态。

### 2. 版本发布

项目在昨日发布了两个新版本，核心聚焦于稳定性和渠道兼容性修复。

- **`v2026.6.10-beta.1`**
    - **亮点**: 显著提升了代理轮次和会话状态的可靠性。
    - **主要修复**:
        - 保留了待处理的子代理完成公告。
        - 确保聊天历史记录非空。
        - 维护媒体索引对齐。
        - 重启休眠的后继队列。
        - 一致性地解决压缩模型别名问题。
- **`v2026.6.9`**
    - **亮点**: 重点增强了 Telegram 消息的交付质量。
    - **主要修复**:
        - Telegram 现在支持发送富文本 (HTML) 消息。
        - 保留了富 Markdown 和贴纸路径。
        - 更准确地渲染进度草稿和命令输出。
        - 安全地规范化 HTML 表格。
        - 确保提及和队列处理器在正确的交付路径上。

### 3. 项目进展 （关键合并/关闭 PR）

昨日合并/关闭的 PR 虽然数量不多，但涉及面广，表明项目在多个方向上有持续推进。

- **`#68936` [CLOSED]**: 合并了 **PR 审查自动修复管道 + Windows 守护进程** (`shadowleaf-studios`)。这是一个大型基础设施改进，引入了自动化能力来处理审查意见，并增加了Windows后台运行支持。
- **`#95007` [CLOSED]**: 修复了 **Telegram 进度草稿渲染** (`snowzlmbot`)。确保了 Telegram 上的进度预览显示为可读的纯文本。
- **`#91926` [CLOSED]**: 修复了 Windows 下通过 `exec` 工具执行 `gateway restart` 失败的问题 (`zh414133851-star`)。

此外，大量 PR 处于打开状态并等待审查，包括修复 Slack 频道 ID 访问 (`#95313`)、增强托管内存注入安全性 (`#95333`) 以及改进 Discord 子代理进度显示 (`#95604`) 等关键改进。

### 4. 社区热点

社区讨论的焦点集中在几个高热度 Issue 上，反映出用户对系统稳定性、迁移无痛化和关键通道（如 Matrix）可用性的高度关注。

1.  **`#95495` [Bug]: 2026.6.9 静默迁移存储路径导致全量重嵌入** (`fenglanhua`, 6 条评论)
    - **诉求**: 用户强烈谴责了一个破坏性变更，该变更在无任何升级警告的情况下，静默改变了内存存储位置并强制进行了全量（1499个文件）重嵌入。这代表了社区对“静默迁移”行为的高度不满。
    - [Issue 链接](https://github.com/openclaw/openclaw/issues/95495)

2.  **`#90325` [Bug]: Matrix 频道分派在 v2026.6.1 中崩溃** (`alexleach`, 7 条评论，2 👍)
    - **诉求**: 用户指出从 5.12 升级到 6.1 后，Matrix 渠道完全崩溃。作为可能的核心协作平台之一，其功能失效引起了社区的严重焦虑。
    - [Issue 链接](https://github.com/openclaw/openclaw/issues/90325)

3.  **`#91363` [Bug]: 隔离 Cron 持续因“LLM 请求失败”而失败** (`pangruixin110-source`, 6 条评论，4 👍)
    - **诉求**: 这是一个高赞问题，表明大量用户在使用 Cron 功能时遇到了障碍。问题表现为模型请求从未到达提供商，无论设置多长的 `timeoutSeconds` 都无法解决。
    - [Issue 链接](https://github.com/openclaw/openclaw/issues/91363)

4.  **`#86519` [Bug]: 5.20 更新后在 Telegram 上重复回复 2-10 次** (`w3-design1`, 10 条评论)
    - **诉求**: 用户对一个在更新后导致机器人重复发送消息的回归问题感到沮丧。尽管在 5.22 有所缓解，但问题并未完全解决，影响用户体验。
    - [Issue 链接](https://github.com/openclaw/openclaw/issues/86519)

### 5. Bug 与稳定性

昨日报告的 Bug 主要集中在会话状态、消息丢失和各类回归问题上，严重程度普遍较高。

**P1 级别（Critical）**:

- **`#95495` [Regression]** (6.9版) 静默迁移内存存储，导致全量重嵌入。**无修复PR**。
    - [Issue 链接](https://github.com/openclaw/openclaw/issues/95495)
- **`#95248` [Bug]** `release_lane` 在 worker 存活时是空操作，导致 Telegram 事件卡死，需重启网关。**有待定修复PR (`#95289`)**。
    - [Issue 链接](https://github.com/openclaw/openclaw/issues/95248)
- **`#93375` [Bug]** Telegram 轮询进入静默崩溃循环，健康监控无法恢复。**无修复PR**。
    - [Issue 链接](https://github.com/openclaw/openclaw/issues/93375)
- **`#92043` [Bug]** 180秒压缩超时是整个管道上的单一时钟，长时间压缩会无限重试失败。**有待定修复PR**。
    - [Issue 链接](https://github.com/openclaw/openclaw/issues/92043)
- **`#92433` [Bug]** 子代理完成在重定向到结束的请求者运行后被静默丢弃。**无修复PR**。
    - [Issue 链接](https://github.com/openclaw/openclaw/issues/92433)

**P2 级别（Major）**:

- **`#92884` [Bug]** `config validate` 拒绝插件拥有的通道架构扩展。**无修复PR**。
    - [Issue 链接](https://github.com/openclaw/openclaw/issues/92884)
- **`#92361` [Bug]** 工具可用性评估器静默忽略空 `allOf`/`anyOf` 组。**有待定修复PR (`#94099`)**。
    - [Issue 链接](https://github.com/openclaw/openclaw/issues/92361)

### 6. 功能请求与路线图信号

用户提出的功能需求显示出对更灵活、更可控的会话管理和交互模式的需求。

- **`#90916` [Feature]: 话题-会话家族**: 用户 `ghitafilali` 提出为一个助手建立多个命名的话题通道，实现上下文隔离但共享持久记忆。这是一个高级功能需求，反映了用户对多任务场景下会话管理的深度诉求。目前**有待定 PR (`#51762`)** 部分相关（可配置默认代理ID）。
    - [Issue 链接](https://github.com/openclaw/openclaw/issues/90916)
- **`#92369` [Feature]: 在 Cron 隔离会话中的子代理编排**: 用户 `eightHundreds` 描述了在 cron 任务中难以可靠地生成、等待并聚合子代理结果的问题。这暴露了 `isolated` 会话模式的一个架构性限制，是社区对有状态工作流需求的明确信号。**无修复PR**。
    - [Issue 链接](https://github.com/openclaw/openclaw/issues/92369)
- **`#91223` [Bug]: 活跃内存注入破坏提示缓存命中率 (99.9% -> 22%)**: 用户 `Enominera` 报告了激活 `active-memory` 插件后成本急剧上升的问题。这虽被归类为 bug，但其背后是用户对**高性能且低成本的内存检索方案**的强烈期望。**无修复PR**。
    - [Issue 链接](https://github.com/openclaw/openclaw/issues/91223)
- **`#91455` [Feature]: Kubernetes 部署文档更新**: 用户 `xrow` 提出当前 Kubernetes 安装指南不够友好。虽然这是一个文档需求，但反映了社区对**更标准化、更简便的部署方式**（如 Helm Chart）的呼声。
    - [Issue 链接](https://github.com/openclaw/openclaw/issues/91455)

### 7. 用户反馈摘要

从近期高活跃度的 Issues 评论中，可以提炼出以下用户痛点：

- **“静默变更”令人愤怒**: 用户 `fenglanhua` 对 `v2026.6.9` 未经警告就迁移存储并强制重嵌入感到震惊和愤怒。这表明用户期待非破坏性的升级方式，任何重大变更前都需要清晰的通知和迁移指南。
- **Cron 功能“不可用”**: 多位用户（如 `pangruixin110-source`, `eightHundreds`）反映 Cron Job 功能在多种场景下（隔离会话、子代理编排）表现不佳，甚至完全无法工作。这使得自动化工作流严重受损，成为用户从“使用”到“放弃”的关键转折点。
- **稳定性仍在“至暗时刻”**: 尽管发布了新版本，但 Telegram 和 Matrix 等关键渠道的重复消息、崩溃和静默失败等问题依然存在。用户 `abenarroch` 在 `#88087` 中的抱怨——因摩擦太大而决定拆除 droplet——极具代表性，表明稳定性问题已超出部分用户的容忍阈值。
- **对“昂贵”性能降级担忧**: 用户 `Enominera` 报告 `active-memory` 导致缓存命中率从 99.9% 跌至 22%，直接表现为 API 成本的飙升。这反映出用户在追求功能增强的同时，对性能和成本效益有极高要求。

### 8. 待处理积压

以下是一些长期未响应或进展缓慢，但影响面可能较大的 Issue/PR，建议维护团队给予关注：

- **`#67915` [Bug] (2026-04-17)**: 本地助手附件显示“文件夹外”错误，尽管服务器配置正确。这是一个困扰用户超过2个月的媒体预览问题，影响了 Control UI 的基本体验。
    - [Issue 链接](https://github.com/openclaw/openclaw/issues/67915)
- **`#51762` [PR] (2026-03-21)**: 可配置默认代理 ID。该 PR 旨在解决一个核心的潜隐性问题，即默认 `main` 代理路径带来的混淆。虽然标注为 P2，但其影响层面广泛，且已存在数月。
    - [PR 链接](https://github.com/openclaw/openclaw/pull/51762)
- **`#88087` [Bug] (2026-05-29)**: 用户抱怨由于稳定性差和问题多，决定拆除其运行 OpenClaw 的 DigitalOcean droplet。这是一个高等级的“用户流失”信号，其背后是一系列未解决的长期问题（提及了会话状态、消息丢等）。需要维护者主动跟进和安抚。
    - [Issue 链接](https://github.com/openclaw/openclaw/issues/88087)
- **`#46303` [PR] (2026-03-14)**: 在 SIGUSR1 重启前排空入站防抖缓冲区和后续队列。这是一个修复消息丢失的关键 PR，但因其改动巨大（size: XL）且影响所有渠道，自提出以来已超过3个月，仍处于“需要证明”阶段。
    - [PR 链接](https://github.com/openclaw/openclaw/pull/46303)

---

## 横向生态对比

好的，作为AI智能体与个人AI助手开源生态的资深技术分析师，我已根据您提供的各项目动态，为您生成了2026-06-22的横向对比分析报告。

---

## 个人AI智能体开源生态横向对比分析报告 (2026-06-22)

### 1. 生态全景

2026年6月下旬，个人AI智能体开源生态呈现出 **“高活跃、高压力、快速分化”** 的态势。头部项目（OpenClaw, NanoBot, ZeroClaw）在用户规模增长的驱动下，社区Issue和PR数量激增，但同时也暴露出稳定性不足、安全漏洞和用户体验问题，社区诉求已从“功能新奇”转向“可靠好用”。与此同时，**安全**成为全生态共识，MCP权限绕过、SSRF防护削弱等漏洞在多个项目中被集中披露。生态内部出现了明显的 **“重量级全能型”** 与 **“轻量级专用型”** 的分化，前者追求全功能集成，后者聚焦特定场景与资源效率。

### 2. 各项目活跃度对比

| 项目名称 | 新 Issue | 新 PR | 合并/关闭 PR | 版本发布 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 约 500 | 约 500 | 约 20 | **2个 (v2026.6.9, v2026.6.10-beta.1)** | **高压力**：高活跃，但合并率低，Bug堆积 |
| **NanoBot** | 未统计 | 34 | 14 | 无 | **良好**：快速迭代，安全响应快 |
| **Hermes Agent** | 50 | 50 | 35 | 无 | **良好**：社区贡献强，修复响应积极 |
| **PicoClaw** | 3 | 3 | 1 | **1个 (v0.3.0-nightly)** | **中等**：平稳维护，有新功能信号 |
| **NanoClaw** | 2 | 3 | 3 | 无 | **良好**：聚焦安全与稳定性修复 |
| **NullClaw** | 1 | 0 | 0 | 无 | **停滞**：代码开发沉寂，单一Bug待解 |
| **IronClaw** | 未统计 | 15+ | 14 | 无 | **良好**：CI优化与核心功能推进 |
| **LobsterAI** | 1 | 0 | 0 | 无 | **维护期**：清理旧积压，有严重安全报告 |
| **CoPaw** | 16 | 32 | 未统计 | 无 | **高活跃**：聚焦移动端适配与稳定性 |
| **ZeptoClaw** | 1 (已关闭) | 1 (已合并) | 1 | 无 | **稳定**：专注质量门禁建设 |
| **ZeroClaw** | 41 | 50 | 8 | 无 | **极其活跃**：功能与修复并行，压力大 |
| **TinyClaw** | 0 | 0 | 0 | 无 | **不活跃** |
| **Moltis** | 0 | 0 | 0 | 无 | **不活跃** |

### 3. OpenClaw 在生态中的定位

OpenClaw 作为生态核心参照项目，定位为 **“全能型通用Agent框架”**，其优势、差异与挑战如下：

- **优势**:
    - **社区规模最大**：Issue/PR 数量远超其他项目，拥有最广泛的用户基础和问题反馈渠道。
    - **功能集成最全**：覆盖 Telegram、Matrix、Discord、Slack 等主流渠道，并率先实现了子代理、Cron任务等高级编排能力。
    - **版本迭代快**：几乎每日发布，Bug修复和功能更新密度高。

- **技术路线差异**:
    - 与 **NanoBot** 相比：OpenClaw更注重**多平台消息分发和任务编排**，而 NanoBot 更侧重**MCP协议集成和模型调用的灵活性与安全性**。
    - 与 **ZeptoClaw** 相比：OpenClaw是**资源消耗型**，追求功能丰富；ZeptoClaw是**极简主义**，将二进制体积控制在7.5MB以内，聚焦嵌入式/边缘场景。

- **社区规模与成熟度**:
    - **规模**: 远超其他项目，Issue/PR 数量级是第二梯队（如 ZeroClaw, NanoBot）的5-10倍。
    - **成熟度**: 处于**成熟期早期**的“阵痛”阶段。高活跃度伴随的是用户对稳定性的强烈不满（如“静默迁移”、“消息重复”）。项目虽在快速修复，但新问题涌现速度更快，健康度处于“高活跃、高压力、需加速收敛”的状态。相比之下，**NanoBot** 和 **ZeroClaw** 在处理特定漏洞和功能请求上显得更游刃有余。

### 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
| :--- | :--- | :--- |
| **安全与权限控制** | **NanoBot, NanoClaw, LobsterAI, Hermes Agent** | - MCP `enabledTools` 白名单绕过（NanoBot）<br>- Agent间文件传输路径穿越（NanoClaw）<br>- SSRF防护被削弱（LobsterAI）<br>- 批准流程隐藏运行时参数（NanoClaw） |
| **Cron/定时任务可靠性** | **OpenClaw, CoPaw, Hermes Agent** | - 隔离会话中任务失败（OpenClaw）<br>- 单个任务配置错误导致整个组件崩溃（CoPaw）<br>- 子代理在Cron中编排困难（OpenClaw） |
| **内存/会话管理** | **OpenClaw, NanoBot, PicoClaw** | - 静默迁移存储引发全量重嵌入（OpenClaw）<br>- 活跃内存注入破坏提示缓存（OpenClaw）<br>- 长期对话的内存与性能优化（NanoBot）<br>- “进化”模块持续消耗Token（PicoClaw） |
| **跨平台/设备支持** | **CoPaw, Hermes Agent** | - 移动端适配（CoPaw）<br>- Windows更新后Gateway不重启（Hermes Agent）<br>- Intel Mac安装脚本错误（ZeroClaw） |
| **高性能与低成本** | **OpenClaw, Hermes Agent, ZeroClaw** | - 提示缓存命中率急剧下降（OpenClaw）<br>- 动态“思考”开关以节省API费用（Hermes Agent）<br>- 本地优先/小型模型支持（ZeroClaw） |

### 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | **全能通用框架** | 重度开发者、多平台用户 | 插件化渠道架构，中心化消息队列 |
| **NanoBot** | **MCP集成与安全沙箱** | 关注模型安全与协议兼容的开发者 | MCP协议深度集成，注重环境变量安全解析 |
| **Hermes Agent** | **企业级技能编排** | 企业团队、需要复杂技能链的用户 | 强大的技能(Skills)系统，支持运行时强制验证门 |
| **PicoClaw** | **边缘/嵌入式Agent** | 资源受限场景（如树莓派） | 极致轻量化，Go语言编写，二进制体积控制 |
| **NanoClaw** | **A2A通信与安全** | 构建多Agent集群的用户 | 重视Agent间通信安全，有`add_mcp_server`审批流 |
| **NullClaw** | **极简命令行交互** | CLI重度用户、开发者 | 无UI，纯命令行动作，依赖单一API |
| **IronClaw** | **桌面集成与学习系统** | 桌面版用户、知识工作者 | 与桌面环境（工作台）深度集成，有“Reborn”学习系统 |
| **LobsterAI** | **IM机器人生态** | 追求操作简便的IM机器人使用者 | 内置QQ Bot、飞书等国内渠道支持，集成OpenClaw |
| **CoPaw** | **移动优先的UI体验** | 移动端用户、轻度使用者 | 专注于页面移动端适配，简化UI交互逻辑 |
| **ZeptoClaw** | **极简主义者** | 极客、嵌入式开发者 | 严格的二进制体积门禁(7.5MB)，拒绝功能膨胀 |
| **ZeroClaw** | **高性能与可观测性** | 生产环境部署者、性能敏感用户 | 注重性能（如上下文压缩），支持OTel追踪 |

### 6. 社区热度与成熟度

- **快速迭代阶段 (高活跃，贡献密集)**:
    - **ZeroClaw**: 每日Issue/PR量极高，社区在功能、修复、安全方面全面开花，处于功能快速扩张期。
    - **CoPaw**: 集中于移动端适配，团队式推进，节奏快速。
    - **NanoBot**: 在安全和核心Bug修复上响应迅速，迭代效率高。

- **质量巩固阶段 (高活跃，但焦点在稳定)**:
    - **OpenClaw**: 处于从“功能堆砌”到“稳定收敛”的阵痛期，社区压力巨大，但也是成熟必经之路。
    - **Hermes Agent**: 在应对Gemini CLI退役的重大变动后，积极吸纳社区贡献，强化稳定性。
    - **LobsterAI**: 进入维护清理期，通过关闭“stale” Issue来收拢焦点。
    - **ZeptoClaw**: 明确进入“质量控制”阶段，实施严格的CI门禁。

- **低活跃/停滞阶段**:
    - **NullClaw, TinyClaw, Moltis**: 这些项目或因为定位过于细分、或维护者精力有限，目前处于代码开发近乎停滞的状态，社区反馈响应缓慢。

### 7. 值得关注的趋势信号

1.  **安全是AI Agent落地的第一道坎**：MCP权限绕过、SSRF、路径穿越等漏洞的集中爆发，说明Agent在放开“手”和“眼”的同时，安全机制远未成熟。**开发者启示**: 在引入Agent框架时，必须对MCP服务、文件系统访问和API调用进行严格的沙箱化处理。

2.  **“成本可预测性”成为核心体验**：从OpenClaw的“Token持续消耗”到Hermes Agent的“动态思考”功能，再到ZeroClaw的“本地小型模型”需求，社区对API成本失控的焦虑感显著增强。**开发者启示**: 设计Agent时，应考虑引入成本预算、Token消耗追踪以及基于任务复杂度的模型切换策略。

3.  **从“对话”到“协作”的范式转变**：NanoBot的“秘书型Agent”、OpenClaw的“子代理编排”、ZeroClaw的“Cron Job”功能一起表明，用户不再满足于单轮对话，而是希望Agent能作为长期、可靠的后台工作者，完成定时任务、跨Agent协作等复杂工作流。**开发者启示**: 需要构建可靠的后台任务调度、消息队列和Agent间通信协议（A2A）。

4.  **移动端与跨平台是通往大众市场的必经之路**：CoPaw的集中发力、Hermes Agent在Windows/Intel Mac上的问题，都指向了同一个趋势：Agent必须无缝融入用户的日常工作环境，无论他们使用的是手机、PC还是各种操作系统。**开发者启示**: 在开发早期将平台兼容性和移动端响应式设计纳入考量，避免后期重构。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，根据您提供的 NanoBot (github.com/HKUDS/nanobot) GitHub 数据，以下是 2026-06-22 的项目动态日报。

---

## NanoBot 项目动态日报 (2026-06-22)

### 1. 今日速览

项目今日活跃度极高，尤其在安全与稳定性方面有显著动作。社区贡献者提交了 34 个PR，其中 14 个已合并/关闭，显示了强劲的迭代势头。**安全漏洞**成为今日焦点，针对 MCP (Model Context Protocol) 模块的权限绕过漏洞（`enabledTools` 白名单绕过）被披露，并已有对应的修复 PR 提交。同时，一个影响所有流式 Anthropic 系列提供商的严重 Bug（`tool_use id` 重复导致会话“中毒”）也被报告并快速修复。整体来看，项目在快速推进新功能（如 Telegram 富文本支持、历史记录搜索）的同时，对代码质量和安全性的维护响应迅速，项目健康度良好。

### 2. 版本发布

**无** 新版本发布。

### 3. 项目进展

今日合并/关闭了 14 个 PR，推动了多项功能的完善与问题修复，关键进展包括：

- **环境变量解析修复 (Critical)**：`tobrien` 贡献者连续关闭了三个关于配置系统环境变量 `$`{VAR}` 解析问题的PR。这修复了 `transcription`、`WebUI` 设置读取和更新时，由于未解析模板字符串而导致功能失效的根源性问题。这显著提升了项目的可用性。
    - [PR #4323](https://github.com/HKUDS/nanobot/pull/4323): `fix(transcription)`
    - [PR #4325](https://github.com/HKUDS/nanobot/pull/4325): `fix(webui)`
    - [PR #4324](https://github.com/HKUDS/nanobot/pull/4324): `fix(webui)`
- **多提供商 TTS 系统**：`tobrien` 的 `feat(tts)` PR 被合并，为 NanoBot 添加了可配置的文本转语音（TTS）系统，支持 OpenAI、Groq 和 ElevenLabs 提供商，并已集成到 WebUI 设置中。
    - [PR #4316](https://github.com/HKUDS/nanobot/pull/4316)
- **Telegram 富消息支持**：针对用户请求的 `sendRichMessage` 功能，已有一个关闭的 Issue 表明初步实现已完成。
    - [Issue #4422](https://github.com/HKUDS/nanobot/issues/4422)

### 4. 社区热点

今日讨论的焦点集中在两大领域：**安全与稳定性**，以及**新功能集成**。

- **安全漏洞引发高度关注**：`YLChen-007` 提交的两个关于 MCP `enabledTools` 白名单绕过的高危安全 Issue（#4435, #4434），虽然直接评论不多，但已迅速吸引了维护者和贡献者的注意，并直接催生了两个修复 PR。这表明社区对模型安全访问控制的需求非常强烈，本次事件暴露的问题具有普遍性。
    - [Issue #4435](https://github.com/HKUDS/nanobot/issues/4435): MCP `enabledTools` allowlist bypass
    - [Issue #4434](https://github.com/HKUDS/nanobot/issues/4434): MCP deny-all policy bypass
- **流式响应稳定性问题**：`tedyan` 报告的严重 Bug (#4442) 导致基于 Anthropic 系列模型的会话在使用流式响应时直接“死掉”，这引发了开发者广泛共鸣。该问题在报告后不久就获得了修复 PR (#4444)，展现了高效的社区协作。
    - [Issue #4442](https://github.com/HKUDS/nanobot/issues/4442): Duplicate tool_use ids brick a session
- **Mattermost 集成呼声不减**：尽管是为了实现差异化的渠道集成，但 `Mattermost Bot` (#1011) 这个长达 4 个月的 Issue 仍获得了 4 个 👍，表明企业级团队的沟通渠道需求依然存在且未被很好地满足。
    - [Issue #1011](https://github.com/HKUDS/nanobot/issues/1011): Mattermost Bot

### 5. Bug 与稳定性

今日报告的 Bug 集中在 **MCP 安全**、**核心 LLM 流式处理**和**性能**方面，严重程度较高，但均有快速响应。

| 严重程度 | Bug 描述 | 影响范围 | 状态 | 相关链接 |
| :--- | :--- | :--- | :--- | :--- |
| **严重** | **`enabledTools` 安全绕过 (2个)**：MCP 的资源和提示可被模型未经授权访问，违反了安全配置。 | 所有使用了 MCP `enabledTools` 限制策略的用户 | 已报告，**已有 PR (#4436)** | [#4434](https://github.com/HKUDS/nanobot/issues/4434), [#4435](https://github.com/HKUDS/nanobot/issues/4435) |
| **严重** | **流式 `tool_use id` 重复导致会话“毒化”**：Anthropic API 拒绝服务，AI 助手停止响应。 | 所有使用 Anthropic 系列模型且开启流式功能的用户 | 已报告，**已有 PR (#4444)** | [#4442](https://github.com/HKUDS/nanobot/issues/4442) |
| **中等** | **每轮执行钩子并发不安全**：`Nanobot.run()` 的 `_extra_hooks` 在并发场景下数据被覆写。 | 在高并发场景下使用 `run()` 方法的用户 | **已关闭** (#4408) | [#4408](https://github.com/HKUDS/nanobot/issues/4408) |
| **低** | **`estimate_prompt_tokens` 性能冗余**：每次调用都对不变的 `Tool` 定义进行 tiktoken 编码，导致响应慢。 | 所有用户，尤其影响响应速度敏感的应用 | 已报告，**改进方向明确** | [#4420](https://github.com/HKUDS/nanobot/issues/4420) |

### 6. 功能请求与路线图信号

- **(高热度) 异步 LLM 重试逻辑**：并非直接请求，但一个关于 `RuntimeError` 的 `fix` PR (#4441) 提到MCP SDK内部使用了 anyio 任务组，这暗示着系统在处理网络故障恢复时存在结构性问题。这比新功能请求更具紧迫性。
    - [PR #4441](https://github.com/HKUDS/nanobot/pull/4441)
- **(可采纳) 只读会话与历史搜索**：`read_only` session (#4271) 和 `search_history` tool (#4440) 这两个 PR/Issue 都旨在提升 Agent 的可用性和控制性。`search_history` 让AI能回忆旧对话，而 `read_only` 防止用户在信息展示页面触发不必要的 LLM 调用，两者都符合提高系统智能与控制力的路线图。
    - [Issue #4440](https://github.com/HKUDS/nanobot/issues/4440)
    - [PR #4271](https://github.com/HKUDS/nanobot/pull/4271)
- **(优先级提升) 内存/记忆优化**：`eager consolidation` PR (#4402) 旨在更主动地将对话归档到 `memory/history.jsonl`，这将直接赋能搜索功能，并减少长期对话的内存开销。
    - [PR #4402](https://github.com/HKUDS/nanobot/pull/4402)

### 7. 用户反馈摘要

从今日的 Issues 和 PR 评论中，可以提炼出以下用户痛点与需求：

- **配置环境变量解析是易错点**：多个关于 `transcription` 和 WebUI 设置的 Bug 最终都指向了 `load_config()` 未解析 `${VAR}` 环境变量模板。**用户反馈**: “配置了环境变量但功能不生效”是用户在使用过程中的高频痛点。
- **“秘书”型 Agent 需求强烈**：`search_history` (#4440) 和 `Silent mode` for cron jobs (#4225) 的提出，反映了用户不仅希望 Agent 能回答，更希望它能像秘书一样“记住”之前的事，并在后台安静地完成监控任务，只在必要时才汇报。**用户反馈**: “我希望 Agent 能够回忆我之前的指示，并且在检查完没有新问题后，不要每次都给我发‘一切正常’的废话。”
- **对基础渠道集成的期待**：`Mattermost` Issue 虽然长期未解决，但持续获得点赞，**用户反馈**: “Telegram/Slack 很好，但我们公司用 Mattermost，没有原生支持，这个项目就无法无缝接入我们的工作流。”

### 8. 待处理积压

- **Issue #1011: Mattermost Bot** (创建于 2026-02-22): 这是一个长期未处理的渠道集成请求，拥有 4 个 👍。对于希望在不同通信平台统一部署 AI 代理的团队来说，这是一个关键的功能缺口。
    - [链接](https://github.com/HKUDS/nanobot/issues/1011)
- **PR #4092: 修复 OpenAI 兼容工具调用解析** (创建于 2026-05-29): 这是一个修复多个关键 Bug 的 PR，涉及流式和非流式工具调用的解析重复、`text` 格式转换等问题，已停滞近一个月。由于其主要修复 `OpenAI-compatible` 提供商的问题，可能对非原生 API 的稳定运行至关重要。
    - [链接](https://github.com/HKUDS/nanobot/pull/4092)
- **PR #4145: Weather Skill** (创建于 2026-06-01): 一个新的示例技能（Weather Skill）的PR，来自核心贡献者 `chinhkrb113`。虽然规模不大，但作为官方示例，它的合并有助于丰富项目的生态系统，降低新用户开发技能的门槛。
    - [链接](https://github.com/HKUDS/nanobot/pull/4145)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，以下是根据您提供的Hermes Agent项目GitHub数据生成的2026年6月22日项目动态日报。

---

# Hermes Agent 项目动态日报 | 2026-06-22

## 今日速览

今日项目活跃度**极高**。过去24小时内，项目仓库共计处理了50条Issue和50个PR，显示出强大的社区参与度和维护响应速度。项目延续了近期围绕`google-gemini-cli`提供商突发停用事件（6月18日）的密集响应态势，相关Bug报告和功能请求仍在持续发酵。同时，社区对跨平台支持、本地化部署以及内存（Mem0）插件的自托管功能贡献了大量代码，显示了项目向企业级和自部署场景扩展的趋势。整体来看，项目正处于应对重大外部变化（Gemini CLI退役）、修复关键稳定性Bug，并积极吸纳社区新功能的关键时期，健康度良好但面临服务中断的紧急修复压力。

## 版本发布

- **无新版本发布**

## 项目进展

过去24小时内，共有**35个PR被合并或关闭**，项目在多个关键领域取得了实质性进展：

- **Mem0内存插件自托管支持（重大进展）**：项目成功合并了**7个**相关的PR，包括 `#13377`, `#49623`, `#9488`, `#20185`, `#31209`, `#30902`, `#27200`, `#21601` 以及今天关闭的 `#50479`。这标志着社区和核心贡献者联手彻底解决了用户长期以来对`mem0`云服务依赖的痛点。现在用户可以通过配置`MEM0_HOST`环境变量或`host`配置项，轻松指向任何自托管的Mem0实例，向企业级和隐私敏感型用户迈出了重要一步。
- **平台适配器废弃路径修正**：`#50481` PR已修复`AGENTS.md`文档中过时的平台适配器路径引用，将文档从旧的 `gateway/platforms/telegram.py` 更新至新的 `plugins/platforms/<name>/adapter.py` 结构，确保了开发文档的准确性。
- **WhatsApp与端口清理安全增强**：`#50468` PR被合并，该PR修复了`PID回收后误杀`（#43846）的安全问题。现在Gateway在发送SIGTERM信号前会验证PID的进程身份，防止因PID被回收导致误杀其他不相关进程，显著增强了系统的健壮性。
- **Browser工具稳定性修复**：`#15008` PR被合并，该PR强化了浏览器守护进程的终止逻辑，在`SIGTERM`超时后升级为`SIGKILL`，确保浏览器实例能被及时清理，防止资源泄漏。

## 社区热点

今日讨论最活跃的议题依然集中在**Google Gemini CLI退役事件**的后续影响上：

1.  **Issue #29294: `[CLOSED]` `google-gemini-cli` provider: Gemini CLI / Code Assist sunsets (👍 8次)**
    - **链接**: [NousResearch/hermes-agent Issue #29294](https://github.com/NousResearch/hermes-agent/issues/29294)
    - **分析**: 此议题作为最初的预警和讨论帖，获得了社区极高的关注（8个赞）。虽然已关闭，但它是后续一系列相关Bug和需求的总源头。社区对Google这一决定感到不满，并迫切希望项目方提供替代方案。

2.  **Issue #49701 `[CLOSED]` & #49705 `[CLOSED]`: `google-gemini-cli` provider完全不可用**
    - **链接**: [Issue #49701](https://github.com/NousResearch/hermes-agent/issues/49701), [Issue #49705](https://github.com/NousResearch/hermes-agent/issues/49705)
    - **分析**: 这两条Issue是社区对提供商功能下线最直接的“告警”。用户反馈所有请求均返回404/400/429错误，服务完全中断。尽管被标记为重复并关闭，但揭示了当前Gemini提供商已完全死亡的现实，也侧面说明社区在强烈催促修复方案。

3.  **Issue #44943: `[CLOSED]` [Feature]: Add AntiGravity support (👍 5次)**
    - **链接**: [NousResearch/hermes-agent Issue #44943](https://github.com/NousResearch/hermes-agent/issues/44943)
    - **分析**: 社区在Gemini CLI宣布退役前就提出了迁移到其替代品“AntiGravity CLI”的需求。该议题同样获得大量点赞，体现了用户对保持与Google生态系统兼容性的强烈愿望。今日关闭的`#50338`也再次提出了相似诉求，表明这是当前最热门的功能请求方向。

## Bug 与稳定性

今日报告了**24个**新Bug或回归问题，其中需重点关注以下高优先级（P1/P2）项：

- **P2 [Type/Bug] `#50449`**: **Desktop “Thinking” toggle逻辑缺陷** - 用户在桌面客户端关闭Thinking开关后，该开关会“弹回”，导致配置写入顶层键值而非预期路径。这是一个影响核心功能交互体验的严重UX Bug。[Issue链接](https://github.com/NousResearch/hermes-agent/issues/50449)
- **P2 [Type/Bug] `#50169`**: **MCP stdio子进程僵尸问题** - MCP stdio服务器进程在断开连接后不被回收，导致大量僵尸进程（~40+）堆积并消耗资源。该议题已被标记为重复，表明问题的普遍性，严重威胁生产环境的资源管理。[Issue链接](https://github.com/NousResearch/hermes-agent/issues/50169)
- **P1 [Type/Bug] `#39525`**: **网络环境变更后Gateway崩溃** - 用户合上笔记本、更换Wi-Fi后，Hermes Desktop Gateway崩溃。这指出了Gateway在网络状态动态变化（如IP地址变更）时的脆弱性。[Issue链接](https://github.com/NousResearch/hermes-agent/issues/39525)
- **P1 [Type/Bug] `#50090`**: **Windows更新程序杀死Gateway但不重启** - `bootstrap-installer`在Windows上更新技能时，强行杀死Gateway进程但不自动重启，导致Telegram Bot等依赖Gateway的服务永久性中断。这是一个平台特定的、具有破坏性的Bug。[Issue链接](https://github.com/NousResearch/hermes-agent/issues/50090)

**已有修复PR的Bug**:
- `#48234` (P1): Gateway因cron任务触发的LLM IndexError崩溃后，第二次崩溃无法恢复，该问题已被标记为`sweeper:implemented-on-main`。
- `#49609` (P1): Desktop UI因session恢复404而卡死，修复已被标记为`sweeper:implemented-on-main`。
- `#37621` (P1): Telegram的`/model`命令无法生效，修复已被标记为`sweeper:implemented-on-main`。

## 功能请求与路线图信号

今日新增的**26个**活跃/新开Issue中，功能请求集中在以下方向：

- **提供商迁移与兼容**:
    - `#50338`: 要求增加AntiGravity CLI支持（已关闭）。
    - `#50293`和`#50240`: 提出“动态思维/自我升级”(Dynamic Thinking / Self-Escalation)功能，让模型能自主检测复杂任务并动态开关深度推理模式，以节省API费用。这表明社区开始关注成本和执行效率的平衡。[#50293](https://github.com/NousResearch/hermes-agent/issues/50293), [#50240](https://github.com/NousResearch/hermes-agent/issues/50240)
- **核心Agent能力增强**:
    - `#44637`: 提出为“技能(Skills)”引入**运行时强制验证门**。当前技能的验证仅依赖模型自觉，用户希望在高风险任务（如代码部署）中引入强制执行机制，这直接关系到Agent的可靠性和安全性。[Issue链接](https://github.com/NousResearch/hermes-agent/issues/44637)
    - `#20140`: 请求允许Cron Job**按作业**选择`send_message`工具，以满足定时主动推送信息的场景。[Issue链接](https://github.com/NousResearch/hermes-agent/issues/20140)
- **跨平台与配置**:
    - `#8950`: 请求增加IRC、Google Chat、LINE等多个新消息通道支持（已存在较久，仍在活跃讨论）。
    - `#14327`和`#16216`: 请求支持**按平台**和**按请求**进行模型配置，体现了社区对更精细化和灵活的代理配置的强烈需求。

## 用户反馈摘要

- **对Gemini退役的普遍焦虑**：用户`pmos69`在`#29294`中的预警和多位用户在`#49701`中的报告，真实反映了依赖特定提供商的用户所面临的“服务中断”的困境。用户`wajhiullah`在`#50338`中直接请求“Please add antigravity cli support”，语气中透露出急迫。
- **对本地化/自托管功能的渴望**：今日大量关于`mem0`自托管的PR被合并，验证了社区对此有巨大需求。用户`buihongduc132`等人通过多个PR的接力，从不同角度（环境变量、HTTP封装、CLI支持）完善了该功能，体现了社区极强的共建精神。
- **对桌面端UI体验的抱怨**：用户`dklangst-sys`在`#50449`中描述了“Thinking toggle snaps back”的问题，精确地指出了UI交互逻辑与后端配置同步不一致的痛点，这是一个典型的“看起来做了，但实际上没做”的用户体验问题。
- **执行环境的健壮性抱怨**：用户`tcconnally`在`#50169`中报告“MCP zombie processes”并附上`ls /proc/`的取证，直接点明了生产环境中资源泄漏的严重性。用户`c193764582`在`#50090`中描述“Telegram bot silently stops”，体现了无声无息的服务中断对用户的困扰。

## 待处理积压

- **Issue #8950 `[P3]`**: **“增加IRC, Google Chat等新消息通道”**（创建于2026-04-13）
    - **链接**: [NousResearch/hermes-agent Issue #8950](https://github.com/NousResearch/hermes-agent/issues/8950)
    - **分析**: 这是一个明确的、社区期待已久的功能需求，对比开放平台（如OpenClaw）有明显差距。该Issue虽被标记为`P3`，但评论数高达5条，且无被纳入里程碑的迹象。**建议维护者考虑**: 在该Issue上回复一个简短的 roadmap，说明是否计划支持以及预计优先级，以安抚社区期待。如果有正在进行的 PR 但进度缓慢，也应在此更新状态。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，这是根据您提供的 PicoClaw 项目 GitHub 数据生成的 2026-06-22 项目动态日报。

---

## PicoClaw 项目动态日报 | 2026-06-22

### 1. 今日速览

今日项目活跃度**中等**。过去24小时内，社区提交了3个新 Issue 并关闭了2个，同时有3个待合并的 PR 和1个已合并/关闭的 PR。值得关注的是，项目发布了新的 **Nightly 构建版本 v0.3.0-nightly**，预示着新功能正在积极开发中。长期存在的依赖更新 PR 仍在等待合并，而一个关于“进化模块”持续消耗 Token 的 Bug 已成为社区关注的焦点。

### 2. 版本发布

-   **Nightly 构建版 (v0.3.0-nightly.20260621.287853ab)**
    -   **链接**: [查看完整更新日志](https://github.com/sipeed/picoclaw/compare/v0.3.0...main)
    -   **内容**: 这是一个自动化的 Nightly 构建版本，包含了从 `v0.3.0` 发布以来合并到主干的所有最新提交。更新日志详细列出了所有差异。
    -   **注意事项**:
        -   **稳定性**: 此版本是自动构建的，可能不稳定。建议仅在测试环境或愿意承担风险的场景下使用。
        -   **破坏性变更**: 更新日志中可能包含破坏性变更。在升级前，强烈建议查阅完整更新日志 (`Full Changelog`) 以了解具体改动。
        -   **迁移**: 从正式版 `v0.3.0` 升级到此版本需谨慎，建议先备份配置和数据库。

### 3. 项目进展

-   **关键修复合并**: 一个关于配置问题的修复 `PR #2565` 在长期悬停后被关闭并合并。该 PR 修复了 `GroupTriggerConfig` 中 `MentionOnly` 配置项因 Go 语言的 `omitempty` 标签导致布尔值 `false` 被忽略，从而无法正确保存的问题 **([PR #2565](https://github.com/sipeed/picoclaw/pull/2565))。** 这是一个重要的 Bug 修复，提升了配置的准确性和可靠性。

-   **功能增强提出**: 新 PR `#3152` 提出了增强 `picoclaw skills search` 命令的输出，以明确告知用户如何安装搜索到的技能。这提升了 `Skills` 功能的可用性 **([PR #3152](https://github.com/sipeed/picoclaw/pull/3152))**。

### 4. 社区热点

-   **Issue #3012: [BUG] 开启 Evolution 后每分钟持续消耗 Token**：该 Issue 拥有 **5 条评论**，是今日讨论最活跃的话题。用户 `xpader` 报告了在启用“进化”模式后，系统以分钟为频率持续消耗 Token 的严重问题。社区对这一影响资源消耗的行为反应强烈，表明“进化”相关功能的资源管理和机制设计亟待优化 **([Issue #3012](https://github.com/sipeed/picoclaw/issues/3012))**。

-   **Issue #3093: [Feature] 需要支持 SimpleX 或 Tox 协议**：该 Issue 获得了 **1 个 👍**，是目前呼声最高的功能请求。用户 `Damian-o2` 希望 PicoClaw 能增加对 SimpleX、Wire 或 Tox 等去中心化/隐私优先通讯协议的支持。这反映了用户对通信安全和去中心化网络的关注 **([Issue #3093](https://github.com/sipeed/picoclaw/issues/3093))**。

### 5. Bug 与稳定性

-   **[严重] 持续 Token 消耗** `#3012`：用户报告在开启 Evolution 模块后，Token 被按分钟持续消耗，这可能导致用户产生意外的高额费用或资源耗尽。当前**状态**：开放，暂无修复 PR 链接，项目维护者需重点关注 **([Issue #3012](https://github.com/sipeed/picoclaw/issues/3012))**。

-   **[中等] Safari 兼容性问题** `#3090`：用户反馈在 iOS 16.4 以下版本的 Safari 浏览器上，管理面板无法正常工作。虽然用户环境（Raspberry Pi OS）与问题描述（iOS）略有出入，但问题本身仍值得进行兼容性修复 **([Issue #3090](https://github.com/sipeed/picoclaw/issues/3090))**。

-   **[已修复] Matrix 用户 ID 限制** `#3044`：用户报告 `allow_from` 配置无法识别包含冒号的标准 Matrix 用户 ID。该问题已被标记为 `[stale]` 并关闭，但未显示是否有明确的修复提交。鉴于 Matrix 是重要通讯渠道，后续可关注是否得到彻底解决 **([Issue #3044](https://github.com/sipeed/picoclaw/issues/3044))**。

-   **[已修复] `mcp add` 命令参数解析错误** `#3041`：用户报告 `mcp add` 命令在处理全局标志时存在参数解析错误，导致无法正确添加 HTTP/SSE 类型的 MCP 服务器。该问题已被关闭，建议验证修复效果 **([Issue #3041](https://github.com/sipeed/picoclaw/issues/3041))**。

### 6. 功能请求与路线图信号

-   **明确的需求**：
    -   `#3093` 请求支持 **SimpleX、Tox** 等隐私协议。虽然实现难度大，但反映了社区对去中心化通信渠道的强烈需求 **([Issue #3093](https://github.com/sipeed/picoclaw/issues/3093))**。
    -   `#3152` 提出的 **安装指令增强** 是提升用户体验的轻量级改动，很可能被快速纳入下一版本 **([PR #3152](https://github.com/sipeed/picoclaw/pull/3152))**。

-   **信号分析**：当前无明确迹象表明上述功能请求已被纳入 v0.3.0 之后的路线图。维护者需在 Issue 中进行沟通和规划。

### 7. 用户反馈摘要

-   **痛点**：
    -   **资源消耗焦虑**: 用户对 `#3012` 中描述的“持续 Token 消耗”问题表达了明确的担忧，这直接影响用户对“Evolution”功能的使用信心和成本控制。
    -   **配置困扰**: `#3044` 和 `#3041` 的问题表明，用户在处理特定配置（如矩阵ID格式、命令行参数）时遇到了挫折，影响了正常使用。
    -   **协议互联需求**: 新需求 `#3093` 表明部分用户渴望突破现有微信、Telegram 等中心化渠道限制，寻求更开放或更安全的连接方式。

### 8. 待处理积压

-   **依赖更新 PR (将提升构建安全和性能)**：
    -   `PR #3103`: [`build(deps-dev): bump typescript-eslint from 8.59.3 to 8.61.0 in /web/frontend`](https://github.com/sipeed/picoclaw/pull/3103)
    -   `PR #3105`: [`build(deps-dev): bump eslint from 10.2.1 to 10.4.1 in /web/frontend`](https://github.com/sipeed/picoclaw/pull/3105)

    这两个由 `dependabot` 创建的自动依赖更新 PR 已持续一周未合并。它们对于保持前端开发工具链的安全性和与最新版本兼容性很重要，建议项目维护者审阅并合并。

-   **长期存在的 Bug**：
    -   `#3090`: [Panel does not work on Safari on iOS versions below 16.4](https://github.com/sipeed/picoclaw/issues/3090) 已打开超过12天，作为影响 Web 界面兼容性的问题，建议给予更多关注。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，根据您提供的NanoClaw项目数据，我已为您生成了2026年6月22日的项目动态日报。

---

## NanoClaw 项目动态日报 | 2026-06-22

**数据来源:** github.com/qwibitai/nanoclaw

---

### 1. 今日速览

今日NanoClaw项目活跃度较高，主要集中在安全漏洞修复与系统稳定性提升两个方面。社区贡献者提交了**两项严重级别的安全漏洞报告**，涉及附件转发和MCP服务器权限批准流程，可能影响运行中的Agent安全性，已引起维护团队关注。与此同时，项目合并了**3个Pull Requests**，修复了首次聊天启动的竞态条件和Docker rootless环境下的网络兼容性问题。新提交的待合并PR则聚焦于清理“幽灵”服务注册和优化技能更新流程，显示出项目向生产环境稳定性迈进的趋势。

### 2. 版本发布

*无新版本发布。*

### 3. 项目进展 (今日合并/关闭的PR)

今日有3个重要PR被合并或关闭，推进了项目的稳定性和可靠性：

*   **修复首次聊天启动失败**：[PR #2825 - fix(setup): wait for the host socket before failing the first chat](https://github.com/nanocoai/nanoclaw/pull/2825)
    *   **内容**: 解决了`setup`脚本中`first chat`步骤的一个竞态条件问题。之前的逻辑在服务启动命令返回后立即 ping socket，而此时后台进程可能还未完全启动并绑定端口，导致首次体验失败。
    *   **进展**: 这个修复直接提升了新用户首次使用NanoClaw的成功率与体验。

*   **修复rootless Docker网络问题**：[PR #2168 - fix(container): pin host.docker.internal to OneCLI's bridge IP in rootless Docker](https://github.com/nanocoai/nanoclaw/pull/2168)
    *   **内容**: 修复了在rootless Docker模式下，Agent容器内的`host.docker.internal`无法正确解析到OneCLI宿主机的Bug。新逻辑将直接绑定OneCLI的桥接网络IP，解决了一个长期存在的兼容性问题。
    *   **进展**: 此合并极大地改善了在非标准Docker配置（如rootless模式）下的运行稳定性，扩大了NanoClaw的部署场景。

*   **（已关闭的验证性PR）**：[PR #2829 - [follows-guidelines] eee](https://github.com/nanocoai/nanoclaw/pull/2829) - 此PR内容为空或为测试提交，无实际功能贡献，已被关闭。

### 4. 社区热点

当前社区关注点高度集中，所有讨论热度都集中在两个由用户 **YLChen-007** 提交的**安全漏洞报告**上。

*   **焦点 Issue:**
    *   [Issue #2828 - [Security] NanoClaw A2A attachment forwarding follows a symlinked inbox and writes outside the target session root](https://github.com/nanocoai/nanoclaw/issues/2828)
    *   [Issue #2827 - [Security] `add_mcp_server` approval flow hides runtime `args` and `env`, enabling approval smuggling](https://github.com/nanocoai/nanoclaw/issues/2827)

*   **分析**: 这两个Issue都详细描述了高风险的潜在攻击向量。
    *   **#2828** 指出了A2A（Agent-to-Agent）通信中，攻击者可以创建符号链接来将附件写入预期之外的目录（路径穿越），可能导致代码注入或数据泄露。
    *   **#2827** 揭示了在添加MCP服务器的批准流程中，UI仅展示服务器名称和基本信息，而隐藏了实际的运行时`args`和`env`。攻击者可能借此“偷渡”恶意参数，绕过用户的安全审查。

*   **诉求**: 社区（尤其是安全研究人员）希望项目方尽快确认漏洞影响范围并发布安全补丁。这些漏洞直指系统的核心安全模型，如果被利用，将对用户部署的Agent集群构成严重威胁。

### 5. Bug 与稳定性

今日报告了两个严重的**安全漏洞**，均未修复。

| 严重程度 | 问题 ID | 描述 | 状态 |
| :--- | :--- | :--- | :--- |
| **严重** | [#2828](https://github.com/nanocoai/nanoclaw/issues/2828) | A2A附件转发可跟随符号链接写入会话根目录之外，导致路径穿越。 | 待确认/修复 |
| **严重** | [#2827](https://github.com/nanocoai/nanoclaw/issues/2827) | MCP服务器批准流程隐藏运行时参数和环境变量，存在批准走私风险。 | 待确认/修复 |

此外，已合入的 [PR #2825](https://github.com/nanocoai/nanoclaw/pull/2825) 和 [PR #2168](https://github.com/nanocoai/nanoclaw/pull/2168) 分别修复了首次启动的竞态条件和特定Docker网络下的崩溃/连接失败问题，对系统稳定性有积极贡献。

### 6. 功能请求与路线图信号

今日暂无全新的功能请求提交。待处理的PR中反映了社区对以下功能的贡献：

*   **技能管理与更新优化**：[PR #2826 - fix(update-skills): nudge into skill updates, rebuild container on re-apply](https://github.com/nanocoai/nanoclaw/pull/2826)
    *   **信号**: 该PR建议将技能更新从“可选”改为“鼓励执行”，并在重新应用时重建容器。这表明用户希望技能管理流程更加自动化和可靠，可能在下一个微版本中被采纳。
*   **新增仪表盘技能**：[PR #2795 - feat: add /add-clidash — read-only CLI-derived dashboard skill](https://github.com/nanocoai/nanoclaw/pull/2795)
    *   **信号**: 该PR提供了一种新的只读仪表盘技能，反映了用户希望通过CLI快速获取系统状态信息的需求，符合工具化、轻量级使用的方向。

### 7. 用户反馈摘要

由于今日所有Issues和PRs都处于初期阶段，尚无来自其他用户的评论或深度反馈。根据问题描述，我们可以推断出用户关注的焦点：

*   **痛点**: 安全是用户在使用AI Agent框架时的首要顾虑。今日报告的两个安全漏洞，尤其是涉及到权限批准和文件系统操作的漏洞，是用户的真实且重大的痛点。
*   **场景**: 用户可能正在尝试进行Agent间的文件共享或集成第三方MCP（Model Context Protocol）服务，从而发现了这些安全隐患。这表明NanoClaw的实际应用场景正在拓展，暴露了更多边界情况。
*   **满意/不满意**: 暂无明确的满意或不满意反馈。但高质量的安全漏洞报告本身，也可以视为社区对项目复杂度和潜在价值的认可。

### 8. 待处理积压

*   **待合并PR**:
    *   [PR #2830 - fix(setup): reap dead peer service registrations whose binary is gone](https://github.com/nanocoai/nanoclaw/pull/2830) (创建2天) - 解决卸载不干净导致系统残留“幽灵”进程注册的问题。
    *   [PR #2826 - fix(update-skills): nudge into skill updates, rebuild container on re-apply](https://github.com/nanocoai/nanoclaw/pull/2826) (创建2天) - 改进技能更新流程。
    *   [PR #2795 - feat: add /add-clidash — read-only CLI-derived dashboard skill](https://github.com/nanocoai/nanoclaw/pull/2795) (创建6天) - 新增仪表盘技能，已长时间未得到review。

*   **待响应的重要Issue**:
    *   [Issue #2828](https://github.com/nanocoai/nanoclaw/issues/2828) - 严重安全漏洞，需要维护者立即响应和评估。
    *   [Issue #2827](https://github.com/nanocoai/nanoclaw/issues/2827) - 严重安全漏洞，需要维护者立即响应和评估。

**提醒**: 上述两个安全相关的Issues需要项目维护者优先介入，进行漏洞验证并制定修复计划。同时，对积压的PR，尤其是技能相关的PR，进行review可以帮助保持社区贡献者的积极性。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，根据您提供的NullClaw项目数据，我已为您生成2026年6月22日的项目动态日报。

---

# NullClaw 项目动态日报 | 2026-06-22

## 1. 今日速览

过去24小时内，NullClaw项目活跃度较低，主要社区活动集中在单个Bug报告的讨论上。项目未产生新的Pull Request或版本发布。目前项目处于相对平稳的维护阶段，但一个高频出现的“NoResponseContent”错误（#967）正在影响部分用户（尤其是Windows平台）的使用体验，该问题值得维护者优先关注。整体来看，项目代码开发推进缓慢，社区精力集中在问题反馈与排查上。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

过去24小时内无Pull Request被合并或关闭。项目在代码开发层面无实质性推进。

## 4. 社区热点

**唯一的焦点 Issues: #967 [OPEN] [bug] error: NoResponseContent**
- **链接**: [NullClaw Issue #967](https://github.com/nullclaw/nullclaw/issues/967)
- **热度分析**: 该Issue是过去24小时内唯一活跃的议题，且获得了1条评论。尽管评论数不多，但它反映了超过50%的对话失败率这一严重问题。用户`svier0`详细报告了在Win11系统、特定模型（Agnes-2.0-Flash）及版本（v2026.5.29）下的复现情况，并与“picocla...”（疑似其他客户端）进行了对比，指出相同配置下表现不同。社区当前的核心诉求是**排查并修复“NoResponseContent”这一API响应异常问题**，而非提出新功能。

## 5. Bug 与稳定性

**严重 Bug（高优先级）：**
- **#967 [OPEN] error: NoResponseContent**
    - **严重程度**: **严重** (关键功能崩溃/阻塞)
    - **描述**: 用户在Windows 11上使用v2026.5.29版本，搭配Agnes-2.0-Flash模型时，超过50%的对话（21次中12次）返回“NoResponseContent”错误，响应时间长达27秒。用户已在其他客户端上验证了该模型和API Key是可用的，因此问题集中在NullClaw自身。
    - **影响范围**: 主要影响Windows平台的用户，使用特定模型（如Agnes-2.0-Flash）时高概率触发。
    - **修复状态**: **无关联PR**。目前仅停留在Issue报告和讨论阶段。

## 6. 功能请求与路线图信号

过去24小时内无新的功能请求被提出。唯一的Issue #967是一个Bug报告，未涉及新功能请求。从项目整体节奏看，下一个版本（v2026.6.x）的更新重点可能会是修复此稳定性问题。

## 7. 用户反馈摘要

- **核心痛点**: 用户`svier0`对项目稳定性表达了不满。其使用场景为基本的命令行交互（`nullclaw agent -m "你好！"`），但遭遇了高频率的错误。尽管用户尝试了社区常见的排查思路（检查API Key和模型兼容性），但问题依旧，说明该Bug是产品层面而非配置层面的问题。
- **对比反馈**: 用户特意提及“同样的模型同样的一个apikey，我在picocla...”，这表明用户认为NullClaw在与同类客户端（如picocla）的兼容性和稳定性对比中处于下风，这是一个值得注意的信号。
- **不满意点**: 功能失效概率高（>50%），影响基本使用；缺乏有效的错误提示或自动重试机制。

## 8. 待处理积压

目前无长期未响应的重要Issue或PR。唯一的活跃Issue #967正处于讨论阶段，尚未得到维护者的官方回应或解决方案。维护者应尽快介入该Issue，确认问题并给出临时性解决方案（如建议降级模型版本或回退客户端版本）或时间表。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

好的，这是根据您提供的 IronClaw 项目 GitHub 数据生成的 2026-06-22 项目动态日报。

---

## IronClaw 项目日报 | 2026-06-22

### 1. 今日速览

项目今日活跃度较高，核心团队与社区贡献者均处于高频贡献状态。核心亮点包括：**CI/CD 基础设施全面优化**（通过缓存共享、网络重试和工作流拆分大幅降低了 CI 失败率与构建时间）；**“Reborn”学习系统与连接器功能持续推进**（包含并发执行和桌面集成）；同时，**夜间 E2E 测试持续失败**，是一个需要优先关注的稳定性隐患。项目当前有 15 个 PR 处于待合并状态，积压健康，但大尺寸 PR 占比不低。

### 2. 版本发布

无新版本发布。

### 3. 项目进展

过去24小时内有14个 PR 被合并或关闭，项目在后端架构、CI 稳定性和新功能开发方面均有显著推进。

- **CI/CD 稳定性大幅提升**：核心贡献者 `serrrfirat` 主导了一系列 CI 优化，解决了长期困扰团队的构建缓存频繁驱逐（[#5118](https://github.com/nearai/ironclaw/pull/5118)）和 `crates.io` 网络闪断（[#5115](https://github.com/nearai/ironclaw/pull/5115)）问题。此外，跨工作流的平台兼容性任务已被提取为独立工作流（[#5113](https://github.com/nearai/ironclaw/pull/5113)），并统一了 `cargo-component` 的安装方式，提升了维护性（[#5101](https://github.com/nearai/ironclaw/pull/5101)）。
- **“Reborn”关键功能落地**：核心功能“一次性定时触发器”已被合并（[#5065](https://github.com/nearai/ironclaw/pull/5065)），实现了对“触发并遗忘”场景的支持。同时，“NEAR AI”工具连接状态的项目修复也已合并，优化了凭证管理逻辑（[#4990](https://github.com/nearai/ironclaw/pull/4990)）。
- **依赖项批量更新**：多个由 `dependabot[bot]` 发起的依赖项批量更新PR被合并（[#4876](https://github.com/nearai/ironclaw/pull/4876), [#4499](https://github.com/nearai/ironclaw/pull/4499)），确保了项目生态的安全性。
- **历史遗留问题修复**：一个社区贡献者提交的关于“首次运行通道激活失败”的古老PR被合并（[#2927](https://github.com/nearai/ironclaw/pull/2927)），修复了新用户安装体验。

### 4. 社区热点

今日没有单个议题引起大量评论，但以下 PR 因其功能重要性和技术复杂度，成为团队的关注焦点：

- **[#4975 - Reborn 学习系统 WS-3: 轻量级反思服务](https://github.com/nearai/ironclaw/pull/4975)**: 作为“Reborn学习系统”栈的第三部分，此 PR 引入了在轮次结束后进行背景反思的能力，旨在将失败和修正转化为可学习的经验。这是实现“智能体从错误中学习”路线的关键一环，吸引了核心团队的集中审查。
- **[#5109 - Reborn 工作台连接器路由](https://github.com/nearai/ironclaw/pull/5109)**: 由新贡献者 `abbyshekit` 提交，为 IronClaw 桌面工作台添加了基于 Composio 的网关连接器路由。这反映了社区对于**连接现有 SaaS 工具**、扩展工作台功能的强烈需求。

### 5. Bug 与稳定性

- **【高】历史遗留 E2E 测试失败 [#4108](https://github.com/nearai/ironclaw/issues/4108)**: 该问题自4周前创建，每日夜间 E2E 测试持续失败。虽然本次更新未提供新的失败信息，但问题持续未解决是一个显著的**稳定性风险信号**，需要团队分配资源进行根因分析。*未关联修复 PR。*
- **【中】CI 网络与缓存问题（已修复）**: 系列 CI 优化 PR ([#5118](https://github.com/nearai/ironclaw/pull/5118), [#5115](https://github.com/nearai/ironclaw/pull/5115)) 的合并，有效解决了由 `crates.io` 网络闪断和缓存驱逐导致的高频 CI 假阳性失败，显著提升了构建流程的鲁棒性。

### 6. 功能请求与路线图信号

在已关闭的 Issues 和提交的新 PR 中，可以观察到强烈的路线图信号：

- **“一次性触发器”功能上线**：Issue [#5117](https://github.com/nearai/ironclaw/issues/5117) 提出为自动化增加“已完成”摘要卡片，与刚合并的 [#5065](https://github.com/nearai/ironclaw/pull/5065) “一次性定时触发器”功能紧密关联。这表明团队在**完善自动化能力**，并关注用户界面对新功能的展示。
- **“Reborn”学习系统的深化**：PR #4975 (WS-3) 和长期未合并的 PR #4937 (WS-1) 表明，“Reborn”的**记忆与反思学习能力**是当前路线图的核心主题。
- **桌面端集成与生态扩展**：PR #5109 引入了桌面工作台的连接器路由，而 Issue [#5071](https://github.com/nearai/ironclaw/issues/5071) (已关闭) 关于主动刷新 Google OAuth Token 的需求，共同指向了**提升桌面版 Reborn 用户与外部服务集成的体验**。

### 7. 用户反馈摘要

- **对“首次运行”体验的修复**: 社区贡献者 `devswha` 在 PR [#2927](https://github.com/nearai/ironclaw/pull/2927) 中修复了全新安装时通道无法被激活的问题，这反映了用户对**“开箱即用”体验**的期望。该 PR 从4月拖到6月被合并，侧面说明团队积压较多。
- **对 OAuth 令牌刷新的需求**: Issue [#5071](https://github.com/nearai/ironclaw/issues/5071) 直接反映了用户痛点：使用 Google 服务时，一小时的令牌有效期导致需要频繁重新认证。社区希望 Reborn 能**透明地管理刷新令牌**，这一修复对提升企业级用户体验至关重要。

### 8. 待处理积压

- **长时间未处理的 Issue**:
  - **[#4108 - Nightly E2E failed](https://github.com/nearai/ironclaw/issues/4108)**: 该故障已存在近一个月，每日持续失败，对项目的“健康快照”有负面影响，建议优先安排根因分析。

- **长时间未合并的 PR**:
  - **[#4937 - reborn(learning): WS-1 — memory learning semantics + A/B gate](https://github.com/nearai/ironclaw/pull/4937)**: “Reborn学习系统”的基础 PR，于6月15日创建。作为整个功能栈的基石，其长时间未被合并可能会**阻塞后续组件**（如 WS-3 #4975）的进度。
  - **[#4002 - build(deps): bump the actions group](https://github.com/nearai/ironclaw/pull/4002)**: 一个典型的批量更新 GitHub Actions 的 PR，从5月24日至今未处理。虽然仅是依赖更新，但长期未合并可能会**影响 CI 新特性的利用和安全性**。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，我将根据您提供的LobsterAI GitHub数据，为您生成一份结构清晰、数据驱动的项目动态日报。

---

# LobsterAI 项目动态日报 | 2026-06-22

## 1. 今日速览

截至2026年6月22日，LobsterAI项目在过去24小时内**活跃度较低**。项目无新的Pull Requests或版本发布。核心动态集中在Issue处理上：**1个新的安全相关Issue被提出**，同时有**14个长期未处理的/标记为“stale”的旧Issue被批量关闭**。这表明项目目前处于维护与清理阶段，社区贡献的热点暂未出现，但新的安全报告值得高度关注。

## 2. 版本发布

无。过去24小时无新版本发布。

## 3. 项目进展

- **无新PR合并/关闭**：过去24小时内无任何Pull Requests被创建或处理，意味着没有新代码被合入主分支，项目核心代码进展暂缓。
- **Issue清理**：项目批量关闭了14个标记为“stale”的Issue。这些Issue大多创建于2026年4月，内容包括Bug报告和功能请求。虽然关闭意味着这些问题在当前版本中可能不再被主动追踪，但也反映出维护者对长期积压问题进行了一次集中清理。

## 4. 社区热点

今日社区讨论的焦点是唯一新开的Issue [#2181](https://github.com/netease-youdao/LobsterAI/issues/2181)。

- **Issue #2181 [Security]**: `LobsterAI restores private-network browser access by default and weakens the bundled OpenClaw SSRF guard`
    - **诉求分析**: 该Issue报告了一个严重的安全漏洞。报告者指出，LobsterAI的浏览器设置层默认启用了 `ProxyCompatible` 模式，并且在未存储明确的浏览器策略时，会序列化一个允许访问私有网络的配置，从而削弱了其捆绑的OpenClaw项目的SSRF（服务端请求伪造）防护。这是当前社区最关注的风险点，虽然尚无评论，但其“Security”标签和问题的严重性使其成为潜在的热点。

## 5. Bug 与稳定性

过去24小时内未报告新的功能性Bug。今日的主要Bug报告是一个**高危安全漏洞**。

| 严重程度 | Issue ID | 标题 | 状态 | 摘要 |
| :--- | :--- | :--- | :--- | :--- |
| **严重** | [#2181](https://github.com/netease-youdao/LobsterAI/issues/2181) | LobsterAI restores private-network browser access by default... | 待处理 | 报告了一个安全漏洞，可能导致SSRF攻击。 |
| 高 | [#1500](https://github.com/netease-youdao/LobsterAI/issues/1500), [#1502](https://github.com/netease-youdao/LobsterAI/issues/1502) | 禁用技能后仍保留在activeSkillIds中... / Agent设置面板保存...未同步 | 已关闭 (stale) | 关于技能状态管理不同步的功能性Bug。 |
| 中 | [#1504](https://github.com/netease-youdao/LobsterAI/issues/1504), [#1506](https://github.com/netease-youdao/LobsterAI/issues/1506), [#1512](https://github.com/netease-youdao/LobsterAI/issues/1512) | IM机器人AES Key校验缺失 / 定时任务通知静默失败 / QQ Bot白名单设置缺陷 | 已关闭 (stale) | 关于IM机器人配置和定时任务的一系列UI与逻辑Bug。 |
| 低 | [#1513](https://github.com/netease-youdao/LobsterAI/issues/1513), [#1516](https://github.com/netease-youdao/LobsterAI/issues/1516) | 声明条款内容规范不统一 / GitHub Copilot OAuth Token丢失 | 已关闭 (stale) | 关于前端展示和后端轮询逻辑的细节问题。 |

**暂无针对这些Bug的修复PR被标记。**

## 6. 功能请求与路线图信号

今日无新的功能请求，但多个**高质量的旧功能请求在今日被关闭**，这给项目的路线图信号带来了不确定性。

- **已关闭的功能请求（均为“stale”状态）**:
    - [#1525](https://github.com/netease-youdao/LobsterAI/issues/1525) 会话列表颜色标注
    - [#1528](https://github.com/netease-youdao/LobsterAI/issues/1528) 批量导出会话
    - [#1532](https://github.com/netease-youdao/LobsterAI/issues/1532) 本地使用统计面板
    - [#1537](https://github.com/netease-youdao/LobsterAI/issues/1537) 消息收藏/书签
    - [#1541](https://github.com/netease-youdao/LobsterAI/issues/1541) 会话标签与筛选

- **预测**: 尽管这些功能请求（如消息书签、标签分类、批量导出）代表了用户对于提升“信息管理”和“组织效率”的强烈需求，但被标记为“stale”并关闭，表明在短期内，这些特性**很可能不会被纳入下一版本的开发计划**。项目当前的重心可能更偏向于修复高优Bug（尤其是安全漏洞）和核心稳定性，而非新增功能。

## 7. 用户反馈摘要

从今日关闭的Issues评论中，可以提炼出以下用户反馈（均来自4月份）：

- **痛点：技能系统体验不佳**
    - **阻塞与不透明**: 用户 `jimmy-xz` 在[#1509](https://github.com/netease-youdao/LobsterAI/issues/1509)中反馈，使用“skill-creator”技能生成文件时，过程完全阻塞且无中间状态提示，导致无法感知进展。同时，对于同一模型，LobsterAI对需求的理解能力相比“Openclaw”有明显差距。
    - **状态不同步**: 用户 `MaoQianTu` 通过[#1500](https://github.com/netease-youdao/LobsterAI/issues/1500)和[#1502](https://github.com/netease-youdao/LobsterAI/issues/1502)详细报告了技能禁用和保存后，`activeSkillIds`状态不同步的问题，导致技能调用逻辑混乱。

- **痛点：IM Bot配置繁琐且易出错**
    - 用户 `xuzx-code` 和 `MaoQianTu` 报告了多个IM机器人配置问题：AES Key无必填校验([#1504](https://github.com/netease-youdao/LobsterAI/issues/1504))、定时任务通知因未选会话而静默失败([#1506](https://github.com/netease-youdao/LobsterAI/issues/1506))、以及QQ Bot的白名单模式因UI缺失输入框而无法配置([#1512](https://github.com/netease-youdao/LobsterAI/issues/1512))。这表明IM机器人的配置流程在健壮性和用户引导方面存在明显缺陷。

## 8. 待处理积压

- **高危安全漏洞**: Issue [#2181](https://github.com/netease-youdao/LobsterAI/issues/2181) 是今日唯一新开的紧急Issue，涉及SSRF防护被削弱。该问题可能对用户的内网安全构成威胁，**需要维护者优先响应**并评估其影响范围，尽快发布修复或安全公告。

- **长期未响应的重要功能请求（已关闭）**：尽管被标记为“stale”并关闭，但诸如[#1537 (消息书签)](https://github.com/netease-youdao/LobsterAI/issues/1537) 和 [#1541 (会话标签)](https://github.com/netease-youdao/LobsterAI/issues/1541) 等需求依然能反映用户对深度信息管理的渴望。维护者应考虑在未来的路线图中重新审视这些“高质量”的特性请求，或通过社区讨论（如Discussion板块）进一步收集用户动机，以做出更明智的决策。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

好的，这是根据您提供的 CoPaw 项目数据生成的 2026-06-22 项目动态日报。

---

# CoPaw 项目动态日报 | 2026-06-22

## 今日速览

过去24小时内，CoPaw 项目社区活跃度较高，共有 **16 条 Issue 更新** 和 **32 条 PR 更新**。其中，**移动端适配**与**稳定性修复**是社区关注的两大焦点。共有 5 位贡献者提交了首次 PR，社区参与度良好。尽管没有新版本发布，但针对 `v1.1.12` 版本的 Bug 修复 PR 正在被积极推进，表明项目正处于快速的迭代修复期。

## 版本发布

无

## 项目进展

今日项目在 **Bug 修复**与**功能增强**上均有明确推进，主要表现在以下几个方面：

1.  **核心稳定性修复**：
    *   **[PR #5347] [已开启]** `fix(crons): drop invalid jobs.json entries on startup (migration)`：这是一个针对 `cron` 任务持久化问题的修复，通过启动迁移来清理无效的 `jobs.json` 条目，以解决因单个任务配置错误导致整个计划任务组件崩溃的问题。这反映了项目正在从“运行时容错”转向更根本的“根因清理”策略。
    *   **[PR #5324] [已开启]** `fix(files): use inline content-disposition for file preview (#5320)`：此 PR 直接修复了 Issue #5320 中报告的图片无法在聊天窗口内联显示的问题（回归自 v1.1.12版本）。通过使用 `inline` 内容配置，确保图片可以在浏览器中预览，而非直接下载。

2.  **移动端适配**：
    *   **[PR #5369] [已开启]** `feat(console): mobile adaptation for Channels page`：新增了“频道”页面的移动端响应式布局。
    *   **[PR #5362] [已开启]** `feat(console): mobile adaptation for CronJobs page and PageHeader`：新增了“计划任务”页面和全局页面头的移动端适配。
    *   *此外，还有超过5个类似主题的 PR（如 #5368, #5367, #5366, #5361, #5364 等）在同一天内被开启*，这表明项目团队正在集中力量推动整体 UI 的移动端适配。

## 社区热点

*   **热点 Issue #1：移动端 UI 与交互缺陷**
    *   **[Issue #5329] [Feature]: 在左边的侧边栏进入简介模式后，添加一个切换agent的按钮**
    *   **链接**: [Issues #5329](agentscope-ai/QwenPaw Issue #5329)
    *   **热度**: 5条评论
    *   **诉求分析**: 用户通过手机浏览器访问时，UI 布局不佳，导致“切换 agent”和“查看聊天历史”等核心功能按钮不可用。该诉求与今天大量开启的移动端适配 PR 高度吻合，用户痛点已被团队关注并正在解决。

*   **热点 Issue #2：消息队列与会话切换问题**
    *   **([Issue #5354] [Bug]: 消息发送队列容易串台；切换对话时切不回去**
    *   **链接**: [Issues #5354](agentscope-ai/QwenPaw Issue #5354)
    *   **热度**: 2条评论（+已有修复PR）
    *   **诉求分析**: 用户反馈 `v1.1.12` 新引入的消息队列功能在实际使用中会导致消息错发（串台），且切换会话后无法切回。这是一个典型的并发或状态管理 Bug，影响多 Agent 场景下的使用体验。

## Bug 与稳定性

| 严重程度 | Bug 描述 | Issue 链接 | 是否已有 Fix PR |
| :--- | :--- | :--- | :--- |
| **严重** | 消息队列导致“串台”及会话切换卡死 | [Issue #5354](agentscope-ai/QwenPaw Issue #5354) | **是** ([PR #5357](agentscope-ai/QwenPaw PR #5357)) |
| **严重** | API 消息被静默丢弃：Agent 忙碌时，API 发送消息返回 200 成功但实际未处理 | [Issue #5344](agentscope-ai/QwenPaw Issue #5344) | 否 |
| **高** | 升级 `v1.1.12` 后，`send_file_to_user` 发送图片不显示（回归） | [Issue #5320](agentscope-ai/QwenPaw Issue #5320) | **是** ([PR #5324](agentscope-ai/QwenPaw PR #5324)) |
| **高** | DeepSeek模型在 `thinking` 过程中卡死，需手动停止恢复 | [Issue #5328](agentscope-ai/QwenPaw Issue #5328) | 否 |
| **高** | Zhipu供应商API测试成功，但模型级测试全部失败 | [Issue #5330](agentscope-ai/QwenPaw Issue #5330) | 否 |
| **中** | 会话切换时，控制台偶发 `TypeError: Cannot read properties of null` | [Issue #5358](agentscope-ai/QwenPaw Issue #5358) | 否 |
| **中** | Agent 卡住后，文本框状态异常（显示可输入而非停止按钮） | [Issue #5333](agentscope-ai/QwenPaw Issue #5333) | 否 |

## 功能请求与路线图信号

*   **优先度最高：移动端体验优化**。至少 6 个与移动端适配相关的 PR 在同一天被提交，覆盖了主要的 UI 页面（如聊天、频道、设置、技能池等）。这强烈表明 **“全面支持移动端”** 是下一个版本最核心的目标，社区贡献者也集中力量于此。
*   **高优：核心功能完善**。
    *   **[Issue #5351]:** `Implement automatic model failover` - 用户要求实现模型自动故障转移，以提升系统高可用性。
    *   **[Issue #5342]:** `hard cap on tool result size` - 用户建议在工具执行层面对结果大小进行硬性限制，防止因 LLM 调用失败（如 502 错误）导致上下文爆炸。
    *   **[Issue #5327]:** 在“智能体办公室”页面，为每个 Agent 卡片增加直接对话和会话切换功能，提升管理 Agent 时的交互效率。

## 用户反馈摘要

*   **对 `v1.1.12` 版本回顾**：多位用户报告了升级至 `v1.1.12` 后的回归问题（如图片无法显示 #5320），以及新功能的副作用（如消息队列串台 #5354）。这表明版本质量控制仍需加强，但用户的积极参与和详细反馈（以及 PR #5350 的衍生 PR #5359）也体现了社区的成熟度。
*   **持续存在的兼容性痛点**：对 DeepSeek（#5328, #5333）和 Zhipu（#5330）等非主流通用 OpenAI API 提供商的支持存在问题，特别是模型调用卡死和连接测试不一致，影响了部分用户的体验。这提示项目需要对“自定义提供商”的兼容性进行更系统的测试。
*   **对核心功能的期望**：用户期望 Agent 系统不仅仅是一个聊天界面，更是一个可靠的、可参与监控的协作平台。例如，用户希望在办公室页面能直接与 Agent 交互（#5327），以及在 API 交互中获得实时反馈（#5322）。

## 待处理积压

*   **[PR #5097] [已开启]**: `fix(security): fix Shield icon centering` - 一个关于安全设置页面图标对齐的 CSS 问题，自 2026-06-11 开启，已被标记，等待合并。表明一些小而美的修复可能需要较长时间等待审查。
    *   **链接**: [PR #5097](agentscope-ai/QwenPaw PR #5097)

*   **[PR #5040] [已开启]**: `fix(crons): tolerate invalid jobs in jobs.json instead of failing all` - 一个关于 CronJobs 容错的早期 PR（发布于 2026-06-09）。虽然今天有了新的 PR #5347 提出了更彻底的解决方案，但此 PR 仍处于开启状态。维护者可考虑关闭旧 PR 或合并其部分思路。
    *   **链接**: [PR #5040](agentscope-ai/QwenPaw PR #5040)

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

好的，这是为您生成的 ZeptoClaw 项目 2026-06-22 动态日报。

---

## ZeptoClaw 项目动态日报 | 2026-06-22

### 1. 今日速览

过去24小时内，项目活跃度较低，主要集中于将前期工作收尾。一项关于二进制体积监控的P1关键级Issue(#537)被关闭，同时对应的PR(#611)也被合并，标志着项目正式将二进制大小作为CI门禁。目前无新版本发布或新功能提案，项目整体处于维护和优化阶段。

### 2. 版本发布

无

### 3. 项目进展

今日项目取得了实质性进展，成功将“二进制体积”从被动监控升级为主动防御机制。

- **PR #611 (已合并): chore(ci): promote binary-size to PR gate at 7.5MB**
  - **摘要**: 该PR对已有的`binary-size` CI任务进行了两项关键改造：
    1.  **移除运行限制**：将CI任务从“仅推送到主分支”触发，改为“所有Pull Request”时触发，确保每个PR都能被检查。
    2.  **设定硬性阈值**：将门禁阈值设定为 **7.5MB**，任何超过此体积的PR都将在CI阶段被直接拒绝，无法合并。
  - **意义**: 此举将项目战略目标（保持镜像小巧，适合嵌入式或机器人场景）落到了技术规范层面，有效防止了因依赖膨胀或代码冗余导致的二进制大小失控。这是对Issue #537提出的“护城河”概念的最终落地。
  - **链接**: [PR #611](https://github.com/qhkm/zeptoclaw/pull/611)

### 4. 社区热点

今日所有动态都围绕一个核心诉求：**维护项目轻量级特性**。关闭的Issue #537和合并的PR #611是同一目标的两个阶段。虽然讨论较少，但将“保持6MB级别二进制体积”作为P1(关键优先级)的Issue被提出并最终以PR形式实现，表明核心维护者对此特性有极高共识和执行力。社区（目前主要是核心开发者）对于“防止缓慢膨胀”的需求压倒了对新功能的急切期待。

### 5. Bug 与稳定性

今日无新Bug报告。所有动态均属于CI/CD流程改进，不涉及软件运行时稳定性问题。

### 6. 功能请求与路线图信号

今日无新功能请求。从已完成的PR #611来看，当前的路线图信号非常明确：**项目正处于“重基础、控质量”的阶段**。在添加新功能前，建立严格的自动化质量门禁（如二进制体积、代码格式、测试覆盖率等）是首要任务。这从侧面暗示，下一版本的开发门槛将会更高，对贡献者也提出了更严格的要求。

### 7. 用户反馈摘要

今日无用户反馈。从历史数据看，核心维护者qhkm对项目关键指标（如二进制体积）有极强的控制欲，并愿意投入时间将其自动化。这反映了开发团队至少存在一位非常关注性能与资源占用的技术领导者。

### 8. 待处理积压

无。项目当前积压状况良好，没有长期未响应的Issue或PR。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，这是根据您提供的 ZeroClaw 项目数据生成的 2026-06-22 项目动态日报。

---

## ZeroClaw 项目动态日报 | 2026-06-22

### 1. 今日速览

过去24小时内，ZeroClaw 项目保持了非常高的活跃度。社区提交了 **41 条**新 Issue 和 **50 个**新 Pull Request，项目正在经历集中的功能推进、Bug 修复和技术债务清理。尽管无新版本发布，但核心工作流（如上下文压缩、技能发现、工具调用）有大量改良。项目健康度良好，维护者响应迅速，致力于提升稳定性、安全性和开发者/用户体验。然而，`容器编译失败`和`安装脚本平台识别错误`等 S1 级别 Bug 的出现，表明增强 CI/跨平台支持的必要性。

### 2. 版本发布

无新版本发布。

### 3. 项目进展

今日合并/关闭了 **8 个** PR，主要集中在测试覆盖、工具调用修复和代码清理上，项目稳健向前迈进。

- **核心稳定性提升**:
    - `#7819` [已合并] 修复了 `process_message` 路径中，因使用原始工具注册表而非当前回合的有效工具集，导致“缺失技能安装建议”被错误抑制的问题。这显著提升了技能发现的准确性。
    - `#7740` [已关闭] 与 `#7819` 同源，确保全局的缺失技能建议基于实际生效的工具集。
    - `#7845` [已合并] 添加了针对 `ActivatedToolSet` 互斥锁中毒后恢复机制的回归测试，增强了运行时稳定性。
    - `#7859` [已合并] 为标准/流式 `Agent::turn` 方法增加了空白/纯空格输入拒绝测试，巩固了输入校验。
- **渠道与配置改善**:
    - `#7724` [已合并] 修复了飞书/Lark 渠道未遵守 `ack_reactions` 配置项的问题。
    - `#7907` [已关闭] 修复了 `rename_agent_cascade()` 中，状态迁移先于配置持久化完成的风险。
- **测试与 CI 增强**:
    - `#7486` [已关闭] 添加了非必须但不定期执行的跨平台（macOS/Windows）Clippy 工作流，防止平台特定 lint 问题悄然累积。
    - `#7687` [已关闭] 为运行时空白输入拒绝逻辑增加了专用的回归测试。

### 4. 社区热点

今日讨论热度最高的议题反映了社区对**项目治理、核心通信功能和易用性**的强烈关注。

- **`#6808` [已接受] RFC: Work Lanes, Board Automation, and Label Cleanup (11 条评论)**
    - **链接**: [Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)
    - **诉求**: 社区正在热烈讨论一项关于工作流分组（Work Lanes）、看板自动化和标签清理的 RFC。核心诉求是简化协作者的任务路由，避免增加额外的手动运维负担。这体现了社区对提升项目管理效率的渴望。

- **`#2503` [已接受] [Feature]: where is napcat channel (9 条评论)**
    - **链接**: [Issue #2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503)
    - **诉求**: 用户明确表达了对连接 OneBot/NapCat 协议渠道的强烈需求。作为一个存在已久（3个月）的 Feature Request，持续获得评论表明该功能对特定用户群体至关重要，是打通不同机器人生态的关键。

- **`#2467` [已接受] [Feature]: Webhook transforms (6 条评论)**
    - **链接**: [Issue #2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467)
    - **诉求**: 用户希望增强 Webhook 系统的灵活性，允许添加自定义路径和转换功能，以处理任意 Payload。虽然该 PR 提出时间较早，但高优先级（P2）和“风险：高”的标注，表明其架构影响重大，需要仔细设计。

### 5. Bug 与稳定性

今日报告的 Bug 涵盖了严重的工作流阻断和部分行为退化问题，修复 PR 已快速跟进。

- **S1 - 工作流阻断**:
    - `#8089` **Docker 和 Debian Dockerfile 构建失败**: 因缺少 `aardvark-sys/build.rs` 导致构建失败。**状态:** 已关闭。
    - `#7756` **原生/MCP 工具在 OpenAI Responses 和 Anthropic 回合不可用**: 模型无法获取已注册的工具，导致工具调用流程完全阻塞。**状态:** 未关闭，无 Fix PR。
    - `#8094` **快速开始指南中配置的 Anthropic 提供者无法使用**: 需要重启才能生效。报告为 S0 严重性。**状态:** 开放中，无 Fix PR。
    - `#8095` **install.sh 在 Intel Mac 上安装 ARM64 版本**: 导致“CPU 类型错误”，无法运行。**状态:** **已有 Fix PR `#8096` 跟进。**
    - `#6361` **上下文压缩对于 OpenAI 兼容提供者会丢弃工具调用记录**: 引发工具循环。**状态:** 进行中 (in-progress)。
    - `#4879` **Gemini CLI OAuth 认证完全失效**: 用户认证成功但仍被限流，工作流被阻断。**状态:** 未关闭。

- **S2 - 行为退化**:
    - `#4721` **日志输出到 stdout 而非 stderr**: 干扰命令管道输出，如 `zeroclaw config schema`。**状态:** 未关闭。
    - `#6360` **Telegram 渠道下 Prompt 缓存失效**: 导致 LLM 耗时和成本增加。**状态:** 未关闭。
    - `#7896` **Groq 工具消息缺少工具名称 (name) 字段**: 可能导致兼容性问题。**状态:** 未关闭。
    - `#7807` **ZeroCode UI 中的批准弹窗继承终端背景**: 出现主题错乱。**状态:** 已关闭。

### 6. 功能请求与路线图信号

近期活跃的 Feature Request 暗示了社区对**本地优先、易用性和高级可观测性**的强烈期待。

- **本地优先/小型模型支持**: `#5287` 提议添加“本地优先模式”，减少提示词膨胀、禁用宽松回退解析、防止提示泄漏，这表明团队在 LLM 成本优化和隐私方面的探索。
- **更强的安全性与配对码**: `#6613` 要求将默认的 6 位数字配对码提升至更高的安全级别（如 32 位混合字符），这是一个重要的安全增强信号。
- **提示词触发的技能/插件安装建议**: `#6289` 希望 ZeroClaw 能主动识别用户意图并推荐未安装但有对应功能的技能，这与 `#7740/7819` 的修复方向一致，很可能被纳入后续版本。
- **进程级 OTel 追踪**: `#6641` 和 `#6642` 要求在运行时添加更精细的可观测性，涵盖 prompt/completion 捕获和进程内 span 关联，表明项目正在为生产环境部署做准备。

### 7. 用户反馈摘要

- **痛点**: 用户明确表达了对**特定渠道支持（NapCat/OneBot）** 和 **Webhook 系统通用性不足**的挫折感。同时，Gemini CLI 认证问题和 Intel Mac 安装问题严重影响了新用户的上手体验。
- **使用场景**: 社区用户明显在构建基于 ZeroClaw 的复杂自动化工作流，特别是在需要与外部系统（如 GitHub Webhook）交互，和使用小型/本地模型进行隐私敏感操作时。
- **满意之处**: 从 `#6808` 的 RFC 讨论和多个 `help wanted` 标签的 Issue 看，社区对项目的开放治理和贡献机会感到满意。同时，维护者对于 `#6074` 回滚后的审计和恢复工作（如 `#8113` PR 恢复 Lark 渠道功能），也得到了社区（`@JordanTheJet`）的积极响应。

### 8. 待处理积压

以下 Issue 与 PR 停留时间较长，可能阻碍了部分用户的工作流或社区贡献，建议维护者关注：

- **`#2503` [Feature]: where is napcat channel** (3+个月): 一个呼声很高的功能请求，建议尽快评估纳入路线图或给出明确的拒绝理由。
- **`#6074` audit: track 153 commits lost in bulk revert** (2个月): 这是一个重要的技术债务清理任务，跟踪被回滚的提交以确保重要功能（如 `#8113` 发现的功能）不会丢失。
- **`#4721` [Bug]: zeroclaw should log to stderr instead of stdout** (近3个月): 一个使用体验小问题，但修复它（将日志输出改为 stderr）能显著改善命令行用户的工作流。
- **`#7098` feat(channel/mattermost): add optional WebSocket listener mode** (20天，**需作者行动**): 一个高质量的 PR 改善，但因“需要作者行动”停滞。若维护者暂时无暇评审，建议明确告知预计评审时间。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*