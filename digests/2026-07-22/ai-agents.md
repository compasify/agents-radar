# OpenClaw 生态日报 2026-07-22

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-07-22 01:26 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我将根据您提供的 OpenClaw 项目数据，生成一份结构清晰的 2026-07-22 项目动态日报。

---

# OpenClaw 项目日报 | 2026年7月22日

## 今日速览

过去24小时内，OpenClaw 项目社区活跃度极高，Issue 和 PR 更新均达到惊人的 500 条，社区参与和维护响应非常活跃。项目主要围绕**安全加固**、**稳定性修复**和**功能增强**展开，特别是针对安全领域（如密钥保护、CLI 后端鉴权）和系统稳定性（如数据库损坏、Agent 阻塞）的讨论较为集中。尽管没有新版本发布，但大量 P0/P1 级别的严重 Bug 和功能请求正在被积极讨论或已有对应的修复 PR，显示出项目团队在核心问题上的高优先级投入。

## 版本发布

无新版本发布。

## 项目进展

今日无已合并的 PR，但项目整体向前迈进的迹象体现在大量处于“准备就绪等待维护者检查”和“等待作者回复”状态的关键修复 PR 上，表明项目正在对一系列高优先级问题进行最后的校准和合并准备。主要推进方向包括：

1.  **安全增强**：有多个针对安全边界的修复 PR 正在审查中，例如修复 `Host-header` 源欺骗绕过（`#112288`）、实施动态模型发现（`#112412`）、以及改进 Claude CLI 工具策略（`#112457`、`#112458`）。
2.  **稳定性修复**：众多修复 PR 旨在解决 Agent 会话卡死、消息丢失、恢复失败等关键问题，如修复卡住会话恢复（`#105806`）、子Agent 并发双恢复（`#103823`）、以及 Zalo 和 Discord 渠道的消息挂起问题（`#111636`, `#109076`）。
3.  **用户体验优化**：多个 PR 专注于修复 UI/UX 问题，如修复 macOS 菜单栏 App 自动终止（`#112463`）、聊天界面作者身份显示（`#112357`）和错误提示信息（`#112462`）。

## 社区热点

以下 Issue 和 PR 在过去 24 小时引发了最广泛的社区讨论，反映了核心诉求：

1.  **🔥 [Issue #10659] Masked Secrets - Prevent Agent from Accessing Raw API Keys**
    *   **链接**: [Issue #10659](https://github.com/openclaw/openclaw/issues/10659)
    *   **热点分析**: 15 条评论，4 个👍。该功能请求的核心诉求是解决 Agent 可能因 Prompt 注入等攻击而泄露原始 API 密钥的问题。评论数最高，表明社区对**隐式信任 Agent 权限**的担忧，以及对于构建更安全、更强大的 Agent 体系的强烈渴望。这是一个基本的安全架构需求。

2.  **🔥 [Issue #101290] CLI startup preflight can corrupt the live state DB while a gateway is running**
    *   **链接**: [Issue #101290](https://github.com/openclaw/openclaw/issues/101290)
    *   **热点分析**: 13 条评论，被评为 P0 和“铂金寄居蟹”级别。报告了一个在 macOS 上导致数据库损坏的回归 Bug。该问题直接影响项目稳定性，用户报告在多个实例中出现“数据库映像格式错误”，引发了广泛的技术讨论和排查。这是典型的**数据一致性和系统稳定性**痛点。

3.  **🔥 [Issue #85030] MCP tools not injected into subagent sessions**
    *   **链接**: [Issue #85030](https://github.com/openclaw/openclaw/issues/85030)
    *   **热点分析**: 11 条评论，5 个👍。用户社区强烈希望开放 OpenClaw 的 MCP（Model Context Protocol）生态系统，但报告了核心功能故障：MCP 工具无法注入到派生子 Agent 的会话中。这表明社区在**构建复杂的多 Agent 协作系统**时遇到了严重障碍，阻碍了高级用例的实现。

## Bug 与稳定性

今日报告的 Bug 主要集中在高优先级问题上，以下按严重程度排列：

*   **P0 (严重)**:
    *   **`#101290`**: CLI 启动预检导致正在运行的 Gateway 的 SQLite 数据库损坏（`malformed`）。 （链接：[Issue #101290](https://github.com/openclaw/openclaw/issues/101290)）*(暂无关联 fix PR)*

*   **P1 (高优先级)**:
    *   **`#95612`**: `cli-backend` Agent 运行 Anthropic 时返回 `401 authentication_failed`，而命令行直接执行成功。 （链接：[Issue #95612](https://github.com/openclaw/openclaw/issues/95612)）*(暂无关联 fix PR)*
    *   **`#86996`**: Active Memory 与 Codex 配合使用时，导致长时间响应延迟、Hook 超时、启动中止和 Gateway 事件循环停滞。 （链接：[Issue #86996](https://github.com/openclaw/openclaw/issues/86996)）*(暂无关联 fix PR)*
    *   **`#90840`**: 子Agent 任务完成后的输出错误地直接发送给聊天用户，而不是返回给父 Agent 进行总结。 （链接：[Issue #90840](https://github.com/openclaw/openclaw/issues/90840)）*(暂无关联 fix PR)*
    *   **`#111498`**: macOS 上，主要 Agent 在 Anthropic 认证恢复后因持久的工作区状态迁移问题而被完全阻塞，拒绝执行任何操作。 （链接：[Issue #111498](https://github.com/openclaw/openclaw/issues/111498)）*(暂无关联 fix PR)*
    *   **`#108473`**: 修复 `cron` 工具模式导致 `llama.cpp` 工具调用功能故障的问题 （链接：[Issue #108473](https://github.com/openclaw/openclaw/issues/108473)）*(暂无关联 fix PR)*

## 功能请求与路线图信号

社区对未来功能的期望集中在安全性、可观测性和 Agent 控制力上：

*   **高热度/安全类**:
    *   **`#7722`**: 文件系统沙箱配置（`tools.fileAccess`）。（链接：[Issue #7722](https://github.com/openclaw/openclaw/issues/7722)）
    *   **`#12678`**: 基于能力的工具/技能权限模型（默认拒绝高风险操作）。（链接：[Issue #12678](https://github.com/openclaw/openclaw/issues/12678)）
    *   **`#88562`**: `models.json` 生成器应将 API Key 写入为结构化的 `secret-ref` 对象，而不是明文。（链接：[Issue #88562](https://github.com/openclaw/openclaw/issues/88562)）
*   **可观测性与控制**:
    *   **`#13219`**: 按模型进行使用量日志记录，用于成本追踪。（链接：[Issue #13219](https://github.com/openclaw/openclaw/issues/13219)）
    *   **`#13700`**: 会话快照功能（`/session save|load`）。（链接：[Issue #13700](https://github.com/openclaw/openclaw/issues/13700)）
*   **Agent 行为控制**:
    *   **`#9912`**: 增加 `maxTurns`/`maxToolCalls` 配置项，限制 Agent 迭代次数。（链接：[Issue #9912](https://github.com/openclaw/openclaw/issues/9912)）
    *   **`#15032`**: 允许对派生的子 Agent 进行“每个生成任务”的工具限制。（链接：[Issue #15032](https://github.com/openclaw/openclaw/issues/15032)）

**路线图信号**: 这些请求表明社区需求正从“能用”转向“用好”，即要求更精细的**安全控制**、**成本管理**和**Agent 行为可预测性**。这与项目现有的安全增强 PR 方向一致，预计下一版本将重点纳入这些功能。

## 用户反馈摘要

从 Issue 评论中提炼的用户核心痛点：

*   **“我的数据库坏了”**：`#101290` 的用户表达了因数据库损坏导致服务中断的严重困扰，尤其是在没有任何明显诱因的情况下。
*   **“我的 Agent 不听使唤了”**：`#111498` 的用户报告 Agent 完全卡死，无法响应任何指令，问题定位困难，用户体验极差。
*   **“为什么我的密钥会泄露？”**：`#10659` 和 `#88562` 的讨论反映了用户对密钥安全性的深切担忧，他们需要一种机制，确保 Agent 在“使用”密钥时无法“看到”或“泄露”它。
*   **“MCP 生态是空的”**：`#85030` 的用户指出，尽管 MCP 许诺了开放的生态，但核心功能（子 Agent 注入）无法工作，严重阻碍了其构建复杂应用的尝试。
*   **“配置不生效/反直觉”**：`#7722` 的评论指出，文件系统沙箱配置没有按预期工作，安全配置的不可靠性给用户带来了困扰。

## 待处理积压

以下为长期未响应但重要性高的 Issue/PR，可能因为需要核心开发者的技术决策或安全审查而停滞：

*   **`#10659`**: `Feature Request: Masked Secrets`（链接：[Issue #10659](https://github.com/openclaw/openclaw/issues/10659)）
    *   **状态**: 积压多日，涉及 “needs-product-decision” 和 “needs-security-review”，属于重大架构变更，需要产品经理和安全专家的深度参与。
*   **`#7722`**: `Feature Request: Filesystem Sandboxing Config`（链接：[Issue #7722](https://github.com/openclaw/openclaw/issues/7722)）
    *   **状态**: 自 2 月以来未关闭，同样标有安全审查标签，用户期待一个稳定且安全的文件系统隔离方案。
*   **`#20786`**: `[Feature]: Telegram Business Bot support`（链接：[Issue #20786](https://github.com/openclaw/openclaw/issues/20786)）
    *   **状态**: 高人气（6个👍）功能请求，但卡在“needs-product-decision”和“needs-security-review”上，未能决定是否将其纳入核心功能。

**分析师点评**: 项目社区活跃度极高，但核心维护者对安全性和产品方向决策的响应速度可能成为瓶颈。建议项目维护者优先关注 `#10659` 和 `#101290` 这两个P0/P1级问题，它们分别代表了未来安全架构和当前服务稳定性的基石。快速解决“我的数据库坏了”和“我的密钥不安全”的用户痛点，将极大地提振社区信心。

---

## 横向生态对比

好的，作为资深技术分析师，以下是根据您提供的2026年7月22日各项目数据生成的横向对比分析报告。

---

### 个人AI助手与自主智能体开源生态横向分析报告 (2026-07-22)

#### 1. 生态全景

当前个人AI助手与自主智能体开源生态正处于 **“狂热迭代”与“冷静反思”并存的十字路口**。一方面，社区贡献极其活跃，几乎所有核心项目都在进行密集的Bug修复、功能增强和安全加固；另一方面，多项目不约而同地暴露了 **通用挑战**：会话状态损坏与数据一致性问题、Agent行为失控与安全风险、以及性能回归（尤其是与本地部署模型交互时）。生态正从“原型验证”阶段向“生产级可靠性”阶段艰难迈进，社区对**安全性、稳定性和可观测性**的需求已压倒性地超越了对新功能的渴望。

#### 2. 各项目活跃度对比

| 项目 | Issues (近24h) | PRs (近24h) | Release (今日) | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | 无 | 🟢 **极高活跃，核心Bug修复与安全讨论密集** |
| **NanoBot** | 11 | 33 | 无 | 🟢 **高活跃，快速合入关键稳定性修复** |
| **Hermes Agent** | 50 | 50 | 无 | 🟢 **高活跃，大量社区贡献与P1级Bug报告** |
| **PicoClaw** | 8 | 8 | 无 | 🟡 **中等活跃，问题与响应节奏健康** |
| **NanoClaw** | 少量 | 12 | 无 | 🟡 **中偏低活跃，PR积压较多** |
| **NullClaw** | 0 | 0 | 无 | ⚪ **无活动** |
| **IronClaw** | 41 | 50 | **v1.0.0-rc.1** | 🟢 **极高活跃，架构重构冲刺收尾** |
| **LobsterAI** | 少量 | 5 (已合并) | 无 | 🟢 **高活跃，快速迭代与Bug响应** |
| **Moltis** | 0 | 1 (Dependabot) | 无 | 🟡 **低活跃，静默维护期** |
| **CoPaw** | 42 | 50 | **v2.0.1-beta.1** | 🟢 **极高活跃，核心功能与架构并行推进** |
| **ZeptoClaw** | 0 | 0 | 无 | ⚪ **无活动** |
| **ZeroClaw** | 50 | 50 | 无 | 🟢 **极高活跃，安全与架构讨论激烈** |

#### 3. OpenClaw 在生态中的定位

作为核心参照项目，OpenClaw 在生态中扮演着 **“基础设施定调者”** 的角色。

- **优势与差异**：
    - **安全导向的社区共识**：与其他项目相比，OpenClaw 社区对**安全架构**的讨论（如`#10659` Masked Secrets）更具深度和广度，已触及基于能力的权限模型等底层设计。这使其在构建高安全等级Agent方面具备理论先行优势。
    - **稳定性问题的集中暴露**：`#101290` 数据库损坏、Agent死锁等问题被大量报告，表明其支撑复杂Agent行为的运行时稳定性与NanoBot、CoPaw等项目一样面临严峻挑战，但社区讨论的规模（500条Issue/PR）远超其他项目，反映出其庞大的用户基数。
- **技术路线差异**：OpenClaw 强调 **“MCP生态”** 和 **Agent间协作**（子Agent），这与IronClaw（架构重写）、NanoBot（强调技能与工具链）形成区别。然而，子Agent无法继承MCP工具（`#85030`）这一核心功能缺失表明，其技术路线的完整性仍有待兑现。
- **社区规模对比**：OpenClaw的社区活动量（500条Issue/PR）是其他活跃项目（如CoPaw、ZeroClaw的50条）的 **10倍**，反映其拥有生态内最庞大的用户和贡献者基数，但同时也带来了更为严峻的维护压力和质量把关挑战。

#### 4. 共同关注的技术方向

今日的数据揭示了多个项目高度一致的痛点，表明这些是全行业亟需解决的通用问题：

| 共同方向 | 具体诉求 | 涉及项目 |
| :--- | :--- | :--- |
| **会话/状态稳定性** | 数据库损坏、会话丢失、状态不同步、无限循环 | **OpenClaw, NanoBot, Hermes Agent, PicoClaw, CoPaw** |
| **Agent行为可控与安全** | 密钥保护、权限白名单、子Agent控制、杀死僵死Agent | **OpenClaw, NanoBot, Hermes Agent, PicoClaw, ZeroClaw** |
| **性能优化** | 与本地模型（Ollama）交互慢、请求固定延迟（~2s）、OOM崩溃 | **NanoBot, CoPaw** |
| **易用性与配置体验** | 配置以明文存储密钥、文档与实现不符、配置项难以发现 | **Hermes Agent, PicoClaw, ZeroClaw, LobsterAI** |

#### 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构/语言 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | **全能型Agent中枢**，强调MCP生态与多Agent协作 | 高级开发者、希望构建复杂Agent系统的团队 | 高性能运行时，对AI提供商和通信渠道高度抽象 |
| **NanoBot** | **轻量、可靠的技能与工具链**，强调本地模型支持 | 注重隐私与生产力的个人开发者 | 快速迭代，以实用主义方式修复工具链瓶颈 |
| **Hermes Agent** | **多面手但桌面端友好**，注重内存管理和插件系统 | 桌面端重度用户，希望深度个性化Agent行为 | 对桌面端功能和配置灵活性有强烈偏向 |
| **PicoClaw** | **嵌入式/边缘友好**的轻量级Agent，注重多IM渠道打通 | 物联网开发者、需要跨平台集成Agent的用户 | 轻量部署，对特定渠道（飞书、钉钉）有原生支持 |
| **IronClaw** | **生产级、可审计的企业Agent平台** | 企业、运营商、对可运维性要求高的团队 | **全面重构 (Reborn)**，架构向权威调度、配置即代码演进 |
| **CoPaw** | **功能丰富的全能型Agent**，注重治理与工作流 | 追求丰富功能的团队，对安全与治理有要求的用户 | 倾向于集成大量特性（工作流、治理、内存、插件） |
| **ZeroClaw** | **安全敏感的严格沙箱Agent**，关注边界与权限 | 高安全或合规需求的开发者、安全研究员 | 注重安全审计粒子、委托代理白名单等底层安全设计 |

#### 6. 社区热度与成熟度

- **快速迭代阶段**：**OpenClaw, CoPaw, ZeroClaw, NaoBot**。这些项目社区活跃度最高，Bug报告和功能PR正在大量涌入，但也暴露出诸多稳定性和设计问题，正处于“从能用走向好用”的颠簸期。
- **质量巩固阶段**：**Hermes Agent**。虽然活动量很大，但其焦点更偏向于Kanban等外围功能，以及修复桌面端特定问题，而非推翻核心架构。LobsterAI也在此阶段，快速响应Bug和用户体验优化。
- **架构重构冲刺**：**IronClaw**。其活跃度完全由其 **`Reborn` 重架构** 驱动，是典型的版本大更新前的集中爆发期，标志着项目迈入一个新阶段。
- **稳定维护或低活跃**：**PicoClaw, NanoClaw**。这些项目有持续的贡献，但不处于爆发期。**NullClaw, ZeptoClaw, Moltis** 则处于无活动或极低活动状态，可能意味着项目方向调整或核心团队资源分配转移。

#### 7. 值得关注的趋势信号

1.  **“安全护栏”成为第一优先级**：从 OpenClaw 的Masked Secrets，到ZeroClaw的委托代理白名单，再到Hermes Agent的技能锁定，社区已不再信任Agent的自主性，而是要求系统提供 **硬件级别** 的权限隔离与审计能力。这预示着未来Agent框架将标配“强制访问控制”（MAC）而非“自主访问控制”（DAC）。

2.  **本地模型性能是下一个战场**：NanoBot用户关于Ollama延迟的尖锐反馈（“完全不可用”）敲响了警钟。随着端侧模型部署量增长，**优化推理提示缓存、降低Token消耗、实现轻量级流式处理** 将成为各项目获取用户的关键竞争点。

3.  **“可观测性”从可选变为必需**：社区正在要求更智能的日志（按模型追踪成本）、状态快照、以及对Agent内部思考过程的可见性（如CoPaw的思考内容暴露问题）。这与OpenTelemetry在传统IT领域的普及趋势一致，**个人AI助手同样需要“应用性能管理（APM）”工具**。

4.  **从“API集成”转向“协议标准化”**：ZeroClaw的OpenAI兼容适配器PR表明，项目方和社区都认识到，与其适配100个API，不如采用一套标准协议（如OpenAI兼容、MCP）。这有助于生态互通，但也意味着项目需要放弃一些独有特性以换取兼容性。

**分析师建议**：对于技术决策者而言，选择项目时需权衡 **功能丰富度 (CoPaw, OpenClaw)** 与 **安全严谨度 (ZeroClaw, IronClaw)**。当前所有项目均未达到生产级成熟度，建议在选型前，自行部署并重点测试 **会话持久化、Agent安全边界、以及目标AI提供商（尤其是本地模型）的性能** 这三个核心场景。跟踪IronClaw的 `Reborn` 发版和ZeroClaw的委托代理修复进展，它们可能代表下一阶段的行业标准。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，以下是根据NanoBot项目2026年7月22日的GitHub数据生成的日报。

---

## NanoBot 项目动态日报 | 2026-07-22

### 1. 今日速览

NanoBot 项目今日活跃度极高，进入了密集的Bug修复与功能收尾阶段。过去24小时内，社区和核心贡献者通过 **33个PR**（其中22个已合入）与 **11个Issue**（其中9个已关闭）进行高效协作。项目核心聚焦于修复由 `hamb1y` 报告的一系列严重稳定性与安全漏洞（如资源泄漏、子进程孤儿化、OOM崩溃），并积极合并来自社区的新功能与优化，如 `ModelScope` 提供商支持、`Qwen` 模型适配及配置原子写入。项目正在清除技术债务，为下一个稳定版本做准备。

### 2. 版本发布

*无新版本发布。*

### 3. 项目进展

在过去24小时内，项目在核心稳定性和功能扩展方面取得了显著进展。

- **核心稳定性修复**：多个由 `hamb1y` 报告的严重Bug已通过合并PR得到修复。
    - **PR #4663** 修复了工具结果（tool-result）协议中的顽固Bug，确保无效、重复或格式错误的工具结果在进入对话历史或发送给推理提供商之前被隔离，解决了长期存在的协议不一致问题。
    - **PR #4785** 的修复解决了 `read_file` 函数在多GB文件场景下导致网关OOM崩溃的风险，通过延迟加载和内存限制检查，增强了处理大文件时的健壮性。
    - **PR #4787** 修复了`Session.messages`列表无界增长导致的内存泄漏问题。
    - **PR #4794** 修复了执行会话（exec session）在网关退出时未清理子进程的问题，消除了潜在的遗留孤儿进程。

- **新功能与支持**：
    - **PR #4965** 合并了 `ModelScope` 作为内置模型提供商，为用户提供了通过其兼容OpenAI的API使用 `Qwen`、`DeepSeek` 等开源模型的便捷选项。
    - **PR #5020** 合并，增强了WebUI的用户体验，现在在已发送消息中会高亮显示可用的技能引用（`$skillname`）。
    - **PR #5019** 增加了对 `OpenAI Codex` 快速模式的支持，允许用户通过配置 `service_tier: "priority"` 来启用优先队列处理。
    - **PR #5010** 更新了安全文档，推荐使用环境变量引用而非明文存储API密钥，提升了默认安全性。

- **配置与数据安全**：
    - **PR #4984** 实现了配置文件的原子写入，避免了在写入过程中崩溃导致配置文件损坏的风险。
    - **PR #4989** 修复了语音转录功能中API密钥和环境变量未正确解析的问题，解决了Groq等服务的401认证失败。

**总结**：项目今日迈出了坚实的一步，合入了大量关键的稳定性修复和社区期待的新功能，显著提升了项目的健壮性、安全性和功能性。

### 4. 社区热点

今日最受关注的议题主要集中在以下两个方面：

1.  **Ollama提示缓存与性能问题 (`#4867`)**
    - **链接**: [Issue #4867](https://github.com/HKUDS/nanobot/issues/4867)
    - **诉求**: 用户 `The-Markitecht` 报告了一个严重的性能瓶颈：NanoBot在与Ollama交互时，每轮对话都会增加约60秒的额外延迟，使得在本地运行模型（如32GB VRAM）的场景下“完全不可用”。核心诉求是**建议系统保留精确的prompt前缀以启用Ollama的提示缓存**，从而大幅降低推理延迟。
    - **影响力**: 该议题获得了**22条评论**，是今日讨论最热烈的话题，反映了大量本地部署用户对性能优化的迫切需求。该问题被认为是NanoBot能否在本地AI场景中“可用”的关键。虽已关闭，但预计会被作为重要优化点追踪。

2.  **WebUI体验与安全问题**
    - **PR讨论热烈**: 围绕WebUI的`@mention`高亮 (`#5020`)、普适型UI设置 (`#4399`) 以及子代理/Shell执行的安全确认 (`#5013`, `#5022`) 也引发了广泛关注。这显示出社区既注重功能体验的打磨，也越来越关注日常使用中的安全风险。
    - **Qwen思考内容暴露**: `#4934` 议题受到关注，指出使用 `Qwen 3.6-flash` 等模型时，模型内部思考/推理内容错误地暴露在聊天回复中。此问题已有一个对应的 `fix PR (#5023)` 正在审查中，显示了社区对模型兼容性问题的快速响应。

### 5. Bug 与稳定性

今日报告的Bug数量不多，但多数为直接影响用户使用体验的关键问题。

| Issue 链接 | 摘要 | 严重程度 | 状态 |
| :--- | :--- | :--- | :--- |
| [#4864](https://github.com/HKUDS/nanobot/issues/4864) | `complete_goal` 工具调用陷入无限循环，因网关未能正确解析JSON参数。 | **高** | **OPEN** (无关联PR) |
| [#4934](https://github.com/HKUDS/nanobot/issues/4934) | Qwen模型思考/推理内容暴露在响应中。 | **中** | **OPEN** (有修复PR #5023 待审查) |
| [#4058](https://github.com/HKUDS/nanobot/issues/4058) (已关闭) | 工具结果协议存在缺陷，导致工具ID缺失或重复。 | **高** | **CLOSED** (已通过PR #4663 修复) |
| [#4785](https://github.com/HKUDS/nanobot/issues/4785) (已关闭) | `read_file` 读取大文件导致OOM崩溃。 | **高** | **CLOSED** (已修复) |
| [#4803](https://github.com/HKUDS/nanobot/issues/4803) (已关闭) | API密钥以明文形式存储在配置文件中。 | **严重** | **CLOSED** (已通过PR #5010 文档和PR #4984 原子写入部分缓解) |
| [#4787](https://github.com/HKUDS/nanobot/issues/4787) (已关闭) | `Session.messages` 列表无限增长，导致内存泄漏。 | **高** | **CLOSED** (已修复) |
| [#4794](https://github.com/HKUDS/nanobot/issues/4794) (已关闭) | 执行会话退出时子进程未被清理，产生孤儿进程。 | **高** | **CLOSED** (已修复) |

**重点关注**: `#4864` 是一个活跃的阻塞性问题，它会导致特定的工具调用链陷入死循环，直接影响依赖 `complete_goal` 功能的用户，目前尚无修复PR。

### 6. 功能请求与路线图信号

今日的Issues和PRs揭示了项目未来可能的演进方向：

- **Agent行为控制与安全**:
    - **用户确认机制**: `#5013` 提出的“Shell执行前需要用户确认”的请求与 `#5022` 的PR（添加 `/cancel-goal` 命令）均指向一个趋势：**社区希望获得更强大的安全护栏和手动干预能力**，尤其是在处理具有持久目标（Sustained Goal）或自动执行Shell脚本时。`#5022` PR的合入可能性很高。
    - **子代理生命周期管理**: `#5021` PR致力于解决子代理进程在 `stop` 命令下未能级联终止的问题，这显示了提升Agent可靠性和可控性是明确的方向。

- **用户体验与工具链扩展**:
    - **上下文与技能加载**: `#5018` PR提出了显式支持上下文加载的请求，旨在让技能能够按需而非全量或仅“always”模式加载，这将提升系统提示词构建的灵活性。
    - **WebUI配置简化**: `#4399` PR提出的“隐藏设置区域”功能，旨在为不同技术水平的用户提供更简洁的界面，这显示出项目开始关注多元化的用户群体。

### 7. 用户反馈摘要

从今日的社区互动中，可以提炼出以下几点核心用户反馈：

- **对本地部署性能的强烈不满**：用户 `The-Markitecht` 在 `#4867` 中的反馈非常直接，称当前与Ollama的交互延迟是“完全不可用的”。这不仅是单一性能问题，更是NanoBot能否有效支撑本地AI应用场景的**关键痛点**。
- **对安全性的担忧正在增加**：`#4803` (明文API密钥) 和 `#5013` (Shell执行确认) 表明，随着项目被用于更复杂的任务（如直接操作系统），用户开始意识到并担忧潜在的安全风险，对更完善的安全机制需求迫切。
- **对工具调用和Agent循环稳定性的困惑**：`#4864` (工具调用死循环) 和 `#5022` (无法终止目标) 反映了一个普遍问题：当Agent陷入错误循环时，用户常常感到束手无策。这不仅是一个Bug，更是一个**可用性设计缺陷**。

### 8. 待处理积压

提请维护者关注以下长期未解决或可能被忽视的议题：

- **[OPEN]** **[bug] Endless loop for complete_goal** (`#4864`): 这是一个影响用户正常使用的活跃Bug，会导致特定场景下的Agent死循环。距离报告已有13天，至今无关联的Fix PR，应提升处理优先级。
- **[OPEN]** **[enhancement, webui, conflict] Feat/webui: add configurable hidden_settings_sections** (`#4399`): 这是一个已有PR但标记为“conflict”的改进请求，已搁置超过一个月。该功能对提升非技术用户的管理体验至关重要，建议尽快解决冲突并评估合入。
- **[OPEN]** **[bug, regression] fix(session): fall back to legacy paths in metadata reads** (`#4941`): 报告了会话元数据读取路径的回归问题，可能导致WebUI重启后工作空间丢失，影响用户数据连续性，建议优先审查此修复PR。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，以下是根据你提供的Hermes Agent项目数据生成的2026-07-22项目动态日报。

---

## Hermes Agent 项目动态日报 | 2026-07-22

### 1. 今日速览

今日项目整体活跃度极高，社区互动频繁。过去24小时内产生了50条Issue和50条PR，显示出强大的社区贡献动力。尽管没有新版本发布，但大量PR的提交和合并（特别是关于Kanban、桌面端和压缩模块的修复）表明项目正处于密集的迭代和问题修复期。值得注意的是，P1和P2级别的紧急Bug报告较多，主要集中在会话状态管理、桌面端数据安全和核心死锁问题上，项目维护者需重点关注。

### 2. 版本发布

**无新版本发布。**

### 3. 项目进展

今日共有 **6** 条Pull Requests被合并/关闭，标志着项目在多个关键领域取得进展：

*   **Kanban (看板) 系统稳定性**：PR #68896 (`fix(tests): anchor MCP breaker...`) 修复了一个CI环境下的MCP断路器测试问题，间接提升了看板系统的可靠性。
*   **Windows平台兼容性**：PR #68997 (`fix(windows): share one bounded, tree-killing git probe...`) 合并，解决了Windows环境下git探针进程可能死锁的问题，是对该平台稳定性的重要修复。
*   **会话管理与状态恢复**：PR #68766 (`fix(agent): recover sessions on transient provider outages...`) 旨在解决Provider瞬时故障导致的会话中断问题，通过优化退避重试策略，提升了会话的健壮性。
*   **桌面端问题修复**：PR #69019 (`fix(desktop): stop long-session transcript from drifting...`) 修复了长时间会话中，对话记录在视觉上发生漂移的显示问题。
*   **测试与代码清理**：PR #67364 (`chore(gitignore): ignore installer .install_method stamp...`) 清理了Git安装器留下的杂波，有助于版本管理的清晰。

这些合并证明了项目核心开发者正在积极回应社区反馈，并持续打磨产品稳定性。

### 4. 社区热点

今日讨论最活跃的Issue和PR揭示了社区的核心关注点：

*   **Feature: Configurable Memory Backends (#47349)**: 该Issue获 **13** 条评论，讨论热度最高。用户 `TechFlipsi` 提议将硬编码的`MEMORY.md`重命名为`rules.md`并实现可配置的内存后端（如使用honcho/fact_store）。这反映出高级用户对更灵活、结构化的记忆管理有强烈需求，不希望被单一的`.md`文件模式所限制。
    *   [前往 Issue #47349](https://github.com/NousResearch/hermes-agent/issues/47349)

*   **Feature: Immutable/protected skills (#25083)**: 获 **7** 条评论。用户 `spiky02plateau` 提出需要锁定核心技能（如治理规则、安全约束），防止代理误修改或删除。这显示出社区对代理行为“安全护栏”的重视，希望赋予用户更精细的权限控制，以保护关键配置不被AI自主操作破坏。
    *   [前往 Issue #25083](https://github.com/NousResearch/hermes-agent/issues/25083)

### 5. Bug与稳定性

过去24小时内报告的Bug数量多且严重，需紧急关注：

*   **[P1] Worker deadlocks when agent backgrounds a server (#68915)**: 当代理通过shell `&` 后台运行服务时，工作进程会发生永久死锁，属于严重功能阻塞Bug。
    *   [前往 Issue #68915](https://github.com/NousResearch/hermes-agent/issues/68915)

*   **[P1] state.db zeroed during desktop update (#68474)**: 在Windows上更新到v0.19.0后，关键会话数据库被清零（变成空字节），这是灾难性的数据丢失问题，对桌面端用户影响极大。**已有一个相关的FIX PR** (#68899) 在讨论中，虽主要针对压缩问题，但其修复的“预算意外”逻辑可能与此有关联。
    *   [前往 Issue #68474](https://github.com/NousResearch/hermes-agent/issues/68474)

*   **[P1/P2] Kanban DB corruption issues (#34385, #53819)**: 多个报告指向Kanban数据库在高并发或多进程下出现索引损坏。这是一个长期存在的稳定性和可靠性风险，目前仍处于`needs-decision`状态，急需一个根本性的解决方案。
    *   [前往 Issue #34385](https://github.com/NousResearch/hermes-agent/issues/34385)
    *   [前往 Issue #53819](https://github.com/NousResearch/hermes-agent/issues/53819)

*   **[P2] Desktop: long-thread reconciliation re-stacks messages (#68979)**: 长线程对话在压缩后，用户消息被错误地堆叠到对话底部，破坏了对话流的正常显示逻辑，影响用户体验。
    *   [前往 Issue #68979](https://github.com/NousResearch/hermes-agent/issues/68979)

### 6. 功能请求与路线图信号

除了Bug修复，社区对新功能的呼声也很高，以下需求可能影响项目未来版本规划：

*   **精细化的工具权限控制**: Issue #25083 (保护技能) 和 #68964 (Per-function tool filtering) 都指向同一个方向：用户希望对Agent使用的工具进行更细致的启用/禁用，而不是粗放的整个工具集控制。
    *   [前往 Issue #68964](https://github.com/NousResearch/hermes-agent/issues/68964)
*   **插件系统扩展**: Issue #64900 ([Feature]: Allow plugins to extend send_message...) 展示了用户希望平台适配框架更易扩展，让插件能够为`send_message`引入自定义字段和处理逻辑，减少对核心代码的修改需求。
    *   [前往 Issue #64900](https://github.com/NousResearch/hermes-agent/issues/64900)
*   **跨平台主题SDK**: PR #68857 (`feat(themes): cross-surface theme SDK...`) 是一个雄心勃勃的PR，试图用一个统一的YAML文件主题化CLI、TUI和Desktop三种交互界面，并支持热更新。这标志着项目可能开始追求更统一、个性化的用户体验。
    *   [前往 PR #68857](https://github.com/NousResearch/hermes-agent/pull/68857)

### 7. 用户反馈摘要

从今日的Issue评论中可以提炼出以下用户痛点：

*   **文档与教程的困惑**: 用户在 #69021 (Kanban教程) 中对看板系统中的“审阅反馈”流程提出了质疑，认为教程中的描述存在矛盾，即开发者如何在完成任务前获取并应用审阅者的反馈。这表明项目文档（尤其新功能）需要更清晰的逻辑阐述。
    *   [前往 Issue #69021](https://github.com/NousResearch/hermes-agent/issues/69021)
*   **配置管理的期望**: 用户对配置系统提出了更高的要求，如 #68970 希望在桌面端设置中有可搜索的时区下拉框，而非空白输入框，这体现了用户对配置“易用性”和“可发现性”的追求。
    *   [前往 Issue #68970](https://github.com/NousResearch/hermes-agent/issues/68970)
*   **跨平台能力的不对称**: #68951 指出，桌面Agent可以通过`send_message`工具联系Telegram或用户，但移动端无法作为发送目标，暴露了移动端（Atomic Hermes）与桌面端功能的不对等。
    *   [前往 Issue #68951](https://github.com/NousResearch/hermes-agent/issues/68951)

### 8. 待处理积压

以下是一些长期开放或已标记但未解决的核心项目，对项目健康度构成潜在风险：

*   **Kanban DB 长期稳定性问题**: Issue #34385 (自2026-05-29) 和 #53819 (自2026-06-27) 均报告了Kanban数据库的并发写入损坏问题。此问题跨越近两个月仍未彻底解决，需维护者优先投入资源。
*   **待决策功能**: 多个请求如 `Memory Backends` (#47349)、`Plugin Extension for send_message` (#64900) 都标记为 `needs-decision`。这些功能需求呼声高且设计影响较大，建议项目核心团队尽快举行RFC或给出明确态度，以避免社区热情冷却。
*   **Desktop v0.17.0 崩溃问题**: Issue #65868 描述了macOS下桌面应用因Rust→V8桥接崩溃的问题，虽然已报告数天，但尚未有明确的FIX PR认领。
    *   [前往 Issue #65868](https://github.com/NousResearch/hermes-agent/issues/65868)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，以下是基于您提供的PicoClaw项目GitHub数据生成的2026年7月22日项目动态日报。

---

# PicoClaw 项目动态日报 | 2026-07-22

## 1. 今日速览

今日PicoClaw项目社区活跃度中等偏高，主要围绕Bug修复和功能增强展开。过去24小时内，共有8个Issue和8个PR产生变动，其中4个Issue和3个PR已关闭/合并，表明问题处理与代码合并节奏健康。尽管无新版本发布，但多项针对网络稳定性、OAuth认证问题及AI模型提供商集成的修复和功能PR正在推进中，显示了项目对社区反馈的快速响应。整体来看，项目处于稳步迭代、积极解决用户痛点的状态。

## 2. 版本发布

无

## 3. 项目进展

今日合并/关闭了3个PR，推动了以下关键修复与功能：

- **修复飞书(Feishu)渠道多媒体消息发送** ([PR #3256](https://github.com/sipeed/picoclaw/pull/3256#top)): 已合并。该PR修复了飞书渠道中，发送音频和视频时被错误地以通用文件形式发送的问题。现在，音频和视频将以原生可播放的消息类型发送，提升了飞书用户的使用体验。
- **修复PR #3222的向后兼容性问题** ([PR #3233](https://github.com/sipeed/picoclaw/pull/3233#top)): 已关闭。此PR旨在维护代码库的稳定性，确保在引入新特性时不会破坏现有功能。
- **支持策略门控的系统命令执行** ([PR #3282](https://github.com/sipeed/picoclaw/pull/3282#top)): 已合并。这是一个重要的新功能，为“slim node companion”引入了`system.exec.v1`操作。它允许在严格的策略控制下（如白名单、环境限制、超时和输出限制）安全地执行系统命令，极大地增强了应用的安全性与可扩展性。

**项目进展总结**：项目今日在**渠道体验优化**（飞书）和**核心安全能力**（策略化执行）上均取得了实质性进展，显示出项目正在向更成熟、更安全、更完善的AI Agent框架演进。

## 4. 社区热点

今日讨论焦点集中在以下几个方面：

- **“使用 vodozemac 替换 libolm”** ([Issue #3088](https://github.com/sipeed/picoclaw/issues/3088)): 该Issue获得2个👍，共有9条评论，是目前讨论最热烈的话题。背后的核心诉求是**安全性**：用户强烈要求弃用年久失修且存在安全风险的`libolm`库，转向官方推荐的`vodozemac`。这反映了社区对项目底层依赖安全性的高度关注。
- **“Matrix同步循环无重连逻辑”** ([Issue #3203](https://github.com/sipeed/picoclaw/issues/3203)): 该Issue获1个👍，有4条评论。用户报告了一个关键的质量问题：当网络中断或服务器重启后，Matrix渠道的同步循环会永久死亡而不进行自动重连，导致服务静默失效。这反映了用户对**服务稳定性和可靠性**的迫切需求。
- **“OAuth登录失败”** ([Issue #3278](https://github.com/sipeed/picoclaw/pull/3281#top) 及 [PR #3280](https://github.com/sipeed/picoclaw/pull/3280#top)): 用户`honbou`连续提交了两个关于“Antigravity”提供商的问题，先是报告INVALID_ARGUMENT回归问题（[#3274](https://github.com/sipeed/picoclaw/issues/3274)），然后是OAuth策略兼容性问题（[#3278](https://github.com/sipeed/picoclaw/issues/3278)）。这促使作者在同一时间提交了PR #3280进行修复。这表明**第三方服务集成的稳定性**是用户在使用过程中的主要痛点。

## 5. Bug 与稳定性

今日报告的Bug严重程度分析如下：

- **严重级：OAuth登录阻塞（#3278，已关闭）**：
    - **描述**：Google阻止了PicoClaw的Antigravity提供商OAuth登录，原因是应用不符合Google的OAuth 2.0安全策略。
    - **状态**：已关闭。问题已被报告，并已有对应的修复PR ([#3280](https://github.com/sipeed/picoclaw/pull/3280#top)) 在等待合并。
- **中级：Matrix同步循环无重连（#3203，开启中）**：
    - **描述**：网络或服务器中断后，Matrix同步循环永久失效，服务无声无息地停止工作。
    - **状态**：开启中，@weissfl用户正在积极报告并提供详细信息。暂无关联的修复PR，需要维护者重点关注。
- **中级：Tool-call格式泄漏到用户消息（#3153，已关闭；#3279，开启中）**：
    - **描述**：`<seed:tool_call>`等原始工具调用文本未被执行，反而作为文本泄漏给用户。此问题不仅出现在Volcengine提供商（#3153），也出现在Seahorse服务汇总功能中（#3279）。
    - **状态**：#3153已关闭，但#3279已开启并已有修复PR ([#3279](https://github.com/sipeed/picoclaw/pull/3279#top)) 在等待合并。这表明该Bug可能尚未根除。
- **低级：Web UI聊天输入卡顿（#3281，新开）**：
    - **描述**：当会话历史较长时，Web UI的输入框变得非常卡顿。
    - **状态**：新开，无评论，需要进一步确认影响范围和优先级。

## 6. 功能请求与路线图信号

- **安全增强呼声高**：`使用vodozemac替换libolm` ([#3088](https://github.com/sipeed/picoclaw/issues/3088)) 的需求非常强烈，很可能被纳入**下一版本的核心路线图**。
- **配置化默认回退链**：PR #3200 ([#3200](https://github.com/sipeed/picoclaw/pull/3200)) 提出了为模型添加可配置的默认回退链，这直接响应了社区对**提升服务可用性和鲁棒性**的需求，预计会被积极考虑合并。
- **飞书/钉钉渠道增强**：PR #3256 (飞书) 和 Issue #3255 (钉钉聊天预览) 表明社区正在持续优化各渠道的体验。这些属于**功能打磨**，可能会被安排在后续版本中。

## 7. 用户反馈摘要

- **积极/满意点**：
    - 用户对项目Bug修复的响应速度表示认可，如OAuth问题和飞书消息问题的快速修复尝试。
    - 用户对`策略门控系统命令执行` (PR #3282) 这样的新功能表示欢迎，因为它体现了对安全的重视。
- **痛点与期望**：
    - **稳定性是第一诉求**：用户对Matrix同步无重连、OAuth失败、模型回退失效等影响服务连续性的问题非常敏感。
    - **安全性是重要考量**：用户明确指出了项目使用的旧库`libolm`的安全风险，并强烈要求更换。
    - **细节体验有待提升**：钉钉和Web UI的小体验问题（如预览固定文本、聊天卡顿）也被用户提及，表明用户对产品细节有较高要求。
    - **第三方提供商集成不稳定**：Volcengine和Antigravity提供商的连续出问题，表明与不同AI平台的兼容性维护是持续挑战。

## 8. 待处理积压

以下为需要维护者特别关注、但长期未有响应的Issue或PR：

- **高优先级**：`[Feature] use vodozemac instead of libolm` ([#3088](https://github.com/sipeed/picoclaw/issues/3088)) (stale)
    - 创建于2026-06-09，最后更新于07-21。虽标为`stale`，但这是一个涉及安全的核心功能请求，不应被延迟。建议项目维护者明确排期。
- **高优先级**：`[BUG] Matrix sync loop has no reconnection logic` ([#3203](https://github.com/sipeed/picoclaw/issues/3203)) (stale)
    - 创建于2026-07-02，最后更新于07-21。这是一个严重的稳定性Bug，但尚无关联的修复PR。需尽快确认并分配资源。
- **PR积压**: `fix(anthropic-messages): send SystemParts as system blocks with cache_control` ([#3228](https://github.com/sipeed/picoclaw/pull/3228#top)) (stale)
    - 此PR提供了Anthropic模型的关键功能（Prompt Caching），但自7月6日起未更新。对于使用Anthropic模型的用户非常有价值，建议尽快Review并合并。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是为您生成的 NanoClaw 项目动态日报。

---

# NanoClaw 项目动态日报 | 2026-07-22

## 1. 今日速览

今日项目活跃度**中等偏高**，主要体现在 PR 提交量大，共有 12 条更新，但核心功能开发与合并速度略有放缓。社区贡献者主要集中在 **WhatsApp 适配修复**和**区域化功能（LINE、繁体中文）** 的贡献上。值得注意的是，目前有 **9 个 PR 处于待合并状态**，其中包含多个功能增强和关键 Bug 修复，积压压力较大。今日无新版本发布，项目整体处于“功能开发与质量修复并行”的稳定推进阶段。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日共有 **3 个 PR 被合并/关闭**，主要集中于文档维护和机器人流程的测试同步。

- **PR #3095 [已关闭]**：`docs: rewrite branch maintenance guide for the registry-branch model`。核心团队完成了关于分支维护指南的重写，以适应新的 registry-branch 模型。这表明项目正在优化其协作流程。
- **PR #3116 [已关闭]**：`[follows-guidelines] sync pr`。一个用于同步仓库的自动化/测试 PR，已关闭，表明 CI/CD 流程正在正常运行。
- **PR #3114 [已关闭]**：`[follows-guidelines] Langfuse tracing skill pr`。一个关于 Langfuse 追踪技能的 PR 被关闭，可能是提交者发现重复或策略调整。

**项目整体进展**：虽然今日合并的 PR 多为维护性质，但社区提交的 9 个待合并 PR 覆盖了从 Bug 修复到功能增强的多个方面，项目正为下一次发布积累大量变更。

## 4. 社区热点

今日讨论最活跃的是 **Issue #3096**: `feat: Add /add-line skill for LINE Official Account channel support`。
- **作者**: joshm1230212
- **链接**: [Issue #3096](https://nanocoai/nanoclaw/issue/3096)
- **分析**: 该 Issue 提议为 LINE（日本、台湾、泰国主流聊天应用）添加 `/add-line` 技能。该 Issue 获得了 3 条评论，是目前唯一且最新的公开 Issue。背后诉求是**强烈的地域化需求**，社区成员希望 NanoClaw 能接入非英语圈的主流 IM 平台，以扩大项目覆盖范围。这可能与近期另一位贡献者提交的**繁体中文 README（PR #2950）** 形成呼应，表明亚洲市场用户对 NanoClaw 的关注度正在上升。

## 5. Bug 与稳定性

今日报告了多项 Bug 修复 PR，按严重程度排列如下：

- **高 [已修复 PR]**：**PR #3113**: `fix(whatsapp): stage inbound media where the container can read it`
    - **作者**: CrAzyScreamx
    - **链接**: [PR #3113](https://nanocoai/nanoclaw/pull/3113)
    - **问题**: WhatsApp 频道中，容器无法读取入站媒体文件（如图片、视频），导致功能异常。
- **高 [已修复 PR]**：**PR #3111**: `Protect URLs from Telegram legacy-Markdown delimiter stripping`
    - **作者**: lizo-ai
    - **链接**: [PR #3111](https://nanocoai/nanoclaw/pull/3111)
    - **问题**: Telegram 平台在解析包含下划线（如 GitLab 链接）的 URL 时，会触发 Legacy Markdown 解析器错误，导致消息被永久丢弃且无错误提示。这是一个隐蔽的数据丢失 Bug。
- **中 [待合并 PR]**：**PR #2896**: `fix(whatsapp): apply media-failure note at the inbound boundary (follow-up to #2895)`
    - **作者**: echarrod
    - **链接**: [PR #2896](https://nanocoai/nanoclaw/pull/2896)
    - **问题**: 之前的修复（#2895）引入了一个回归，导致审批流程中针对媒体文件的错误提示时机错误。
- **中 [待合并 PR #1530]**：**PR #1530**: `fix: add SELinux :z label to Docker volume mounts`
    - **作者**: farooqu
    - **链接**: [PR #1530](https://nanocoai/nanoclaw/pull/1530)
    - **问题**: 在启用了 SELinux 的系统（Fedora/RHEL）上，Docker 卷挂载权限不足，导致无法运行。**此 PR 已存在近 4 个月，需重点关注。**

## 6. 功能请求与路线图信号

除了社区热点中提到的 LINE 支持外，今日还出现了一个值得关注的技能功能请求：

- **Feature / Skill PR #3050**: `feat(setup): add Dial to the channel picker + wizard/skills`
    - **作者**: OmriBenShoham
    - **链接**: [PR #3050](https://nanocoai/nanoclaw/pull/3050)
    - **诉求**: 提议在安装向导和技能模型中增加对 “Dial” 频道的支持，表明社区正在探索将 NanoClaw 与电话/语音相关的渠道集成。
- **路线图信号**: 结合 Issue #3096 (LINE) 和 PR #2950 (繁体中文 README)，项目当前的路线图明显受到**全球化部署**和**区域化适配**需求推动。下一版本大概率会集成至少一个新的、具有地域特色的通信渠道。

## 7. 用户反馈摘要

从今日的 Issues 和 PR 评论中，可以提炼出以下用户痛点：

- **配置兼容性痛点**: 用户在安装了自有 PostgreSQL 的主机上运行 `onecli setup` 时，遇到了端口冲突（默认端口 5432），该问题在 **PR #3112** 的文档更新中被记录。
- **通信可靠性痛点**: Telegram 平台的 URL 解析 Bug（PR #3111）严重影响用户使用体验，导致关键信息（如 GitLab 合并请求链接）在无人察觉的情况下丢失，这是对产品稳定性要求的直接体现。
- **环境适配痛点**: 对于 Fedora/RHEL 用户的 SELinux 问题（PR #1530）长期未解决，可能影响了部分 Linux 核心用户群的采用。

## 8. 待处理积压

以下 PR 或 Issue 长期未响应，建议维护者关注：

- **高优先级 | 基础架构**: **PR #1530**: `fix: add SELinux :z label to Docker volume mounts`
    - **链接**: [PR #1530](https://nanocoai/nanoclaw/pull/1530)
    - **状态**: 自 2026-03-29 起已开放近 4 个月。该修复是让 NanoClaw 能在主流 Linux 发行版上开箱即用的关键，无风险（对非 SELinux 系统无害），应优先合并或给予明确反馈。
- **中优先级 | 功能修复**: **PR #2236**: `fix(container): align WORKDIR with actual group mount path`
    - **链接**: [PR #2236](https://nanocoai/nanoclaw/pull/2236)
    - **状态**: 自 2026-05-03 起开放。解决了容器内工作目录错误的问题，影响 Agent 在容器化环境中的工作空间可见性。
- **中优先级 | 文档贡献**: **PR #2950**: `docs: add Traditional Chinese README (README_zh-TW.md)`
    - **链接**: [PR #2950](https://nanocoai/nanoclaw/pull/2950)
    - **状态**: 自 2026-07-04 起开放。属于社区友好的文档贡献，合并后可显著提升繁体中文用户群体的 onboarding 体验。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，根据您提供的 IronClaw 项目数据，我为您生成了 2026-07-22 的项目动态日报。

---

## IronClaw 项目动态日报 | 2026-07-22

### 1. 今日速览

项目进入 **Reborn 架构冲刺的最后阶段**，活跃度极高。昨日（报告期内）共有 41 个 Issue 和 50 个 PR 更新，社区与核心团队均保持高强度参与。核心工作聚焦于 **“Reborn”重架构**的收尾，包括权威调度模型的落地、错误可恢复性、以及质量保证管线的搭建。同时，`v1.0.0-rc.1` 版本的发布标志着架构重构已进入候选发布阶段，项目健康且目标明确。

### 2. 版本发布

- **`ironclaw-v1.0.0-rc.1` (2026-07-20)**
  - **内容**: 这是 **IronClaw Reborn 架构**的首个候选发布版本。这不是对 `0.29.x` 系列的小幅迭代，而是对 Agent 运行时、存储、扩展主机和 Web UI 的**彻底重写**。
  - **影响**: 此版本作为 `ironclaw` 二进制文件发布。
  - **注意**: 由于是架构级别的重写，与旧版 (0.29.x) 存在**破坏性不兼容**。用户/运营商需要进行系统的迁移。

### 3. 项目进展

昨日关闭了17个 PR，合并了多个关键特性，项目在迁移到 Reborn 架构的道路上迈出了坚实一步：

- **权威调度模型实现**: PR #6432 合并，部分实现了 #6396，确保了 Witness（权威凭证）在调度路径上的始终存在。这是实现安全、可审计的运行时路由的核心步骤。
- **存储系统清理**: PR #6430 合并，移除了内存中的 Ratchet 存储，并将关键数据迁移到基于文件系统的存储，提升了数据的持久性和可靠性。
- **核心 PR 修复合并**: PR #6432 合并时遗漏了两次 HIGH 级别的评审修复。PR #6436 及时跟进，将这些修复补充合并，展现了严谨的迭代流程。
- **统一扩展运行时**: PR #6116 的巨型重构被关闭（但非合并至主线，而是报告了与 main 分支的重构对比）。这为未来的统一扩展架构提供了重要的参考基线。
- **工具调用与可恢复性**: 核心贡献者的相关工作正在向主线合并，为提升系统鲁棒性打下基础。

### 4. 社区热点

- 🏆 **最具争议的议题**: **Issue #6389** - “Phase 4 (§5.11): collapse build_local_runtime + build_production_shaped into one build_runtime(cfg)”
  - **链接**: [nearai/ironclaw Issue #6389](https://github.com/nearai/ironclaw/issues/6389)
  - **分析**: 此 Issue 在一天内获得10条评论，说明关于如何统一本地开发和生产环境运行时构建路径的讨论非常激烈。这关系到 Reborn 架构的最终生产化部署形态，是架构决策的关键点。

- 🏆 **最受关注的功能请求**: **Issue #3036** - **`[EPIC] Configuration-as-Code for IronClaw Reborn`**
  - **链接**: [nearai/ironclaw Issue #3036](https://github.com/nearai/ironclaw/issues/3036)
  - **分析**: 获得1个 👍，表明用户对通过声明式代码而非手动编辑 `.env` 文件来配置 IronClaw 有强烈的需求。这是向云原生、可运维性迈进的社区共识。

- 🏆 **最活跃的长期议题**: **Issue #2987** - **`[EPIC] Track Reborn architecture landing strategy and grouped PR plan`**
  - **链接**: [nearai/ironclaw Issue #2987](https://github.com/nearai/ironclaw/issues/2987)
  - **分析**: 拥有44条评论，是过去24小时内讨论最激烈的话题。作为 Reborn 架构落地的总牵引议题，社区一直在密切关注其进展，并对分组 PR 的合并策略进行激烈讨论。

### 5. Bug 与稳定性

- **紧急 (High)**: 未报告生产环境级别的崩溃或回归。
- **中等 (Medium)**:
  - **Bug**: **Issue #6394** - “Epic: Dogfooding & QA bug fixing 07/20/2026 - 07/24/2026”
  - **链接**: [nearai/ironclaw Issue #6394](https://github.com/nearai/ironclaw/issues/6394)
  - **分析**: 项目开启了一个为期一周的“内部 dogfooding 与 QA 漏洞修复” Epic。这说明项目组意识到自身可能存在一些尚未暴露的稳定性问题，正在主动排查。虽然未列出具体 Bug，但其本身是重要的稳定性信号。
- **修复进展**: **PR #6437** - “fix(reborn): make model-visible failures recoverable” 正在处理核心的错误恢复问题。
  - **链接**: [nearai/ironclaw PR #6437](https://github.com/nearai/ironclaw/pull/6437)

### 6. 功能请求与路线图信号

- **热门功能**: **Issue #6433** - “Feature: Dedicated custom instructions / master prompt section”
  - **链接**: [nearai/ironclaw Issue #6433](https://github.com/nearai/ironclaw/issues/6433)
  - **分析**: 用户明确提出需要一个类似 ChatGPT/Claude 的“Master Prompt”专用区域。这反映了用户对 Agent 个性化配置的强烈需求。考虑到开发者在功能请求的当日即创建了 Issue，该功能很可能被纳入后续的迭代计划。

### 7. 用户反馈摘要

- **满意**: 用户对 Reborn 架构的整体方向表示认可，在 #2987、#3036 等关键议题中表现出积极参与和贡献。
- **痛点**:
  - **运维复杂性**：用户（尤其是运营商）在 #3036 等议题中反馈，当前的配置方式（`.env`、settings JSON、运行时参数）过于混杂，缺乏统一的 schema 和审计能力，增加了运维难度。
  - **Agent 个性化不足**：Issue #6433 提出的 “Master Prompt” 功能需求表明，用户希望 Agent 能更好地理解和遵循个人习惯与偏好，当前的方式不够直观。
  - **Chrome 集成延迟**: Issue #2355 揭示了用户期待已久的持久化、多身份 Chrome 浏览器集成仍在持续开发中，尚未完成，这可能是部分高级用户的一个等待点。

### 8. 待处理积压

- **长期未关闭的 Epic 议题**:
  - **Issue #2599** - `Epic: Enforce gateway feature boundaries...` (创建于 2026-04-17)
    - **链接**: [nearai/ironclaw Issue #2599](https://github.com/nearai/ironclaw/issues/2599)
    - **状态**: 仍有2个评论，处于未关闭状态。考虑到 Reborn 架构的推进，该 Epics 的优先级可能已相对降低，但仍需关注。
  - **Issue #2392** - `Feature Epic: Host-level multi-account support for all messaging channels` (创建于 2026-04-13)
    - **链接**: [nearai/ironclaw Issue #2392](https://github.com/nearai/ironclaw/issues/2392)
    - **状态**: 0条评论，长期无更新。对于需要将 IronClaw 部署到企业级多用户环境下的运营商来说，这是一个重要的功能缺陷，建议维护者重新评估其优先级。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

好的，遵照您的指示。作为 LobsterAI 开源项目分析师，现已根据 2026-07-22 的 GitHub 数据生成以下项目动态日报。

---

### LobsterAI 项目动态日报 | 2026-07-22

**数据快照时间：** 2026-07-22 10:00 AM (UTC)

#### 1. 今日速览

今日项目活跃度显著提升，主要集中于 **Bug 修复和体验优化**。过去24小时内，团队合并了 5 个 Pull Request，重点解决了图片附件状态同步、Artifact 功能权限流和 Windows 更新流程等关键问题。同时，一个新的 Issue 暴露了模型切换时图片附件处理的“状态不同步”问题，这可能是用户体验中的一个痛点。此外，开发者社区提出了**隐藏侧边栏广告**的新功能，并已通过 PR 实现，表明项目在满足用户个性化需求上反应迅速。总体来看，项目处于高频迭代与问题修复的活跃状态。

#### 3. 项目进展

今日有 5 个 Pull Request 被成功合并或关闭，标志着项目在多个方面取得了实质性进展：

- **【Cowork 协作】图片附件与模型能力同步（PR #2373）**：重要修复。解决了当对话在视觉模型和非视觉模型间切换时，图片附件的 `dataUrl` 状态未正确更新的问题。现在，切换模型后，prompt builder 将根据当前模型能力正确处理附件，要么发送正确的 base64 格式，要么将其作为文件路径引用。这是对 Issue #1861 的针对性修复。
- **【Artifacts】统一订阅拦截与分享流程优化（PR #2370, #2369）**：对 Artifact 功能模块进行了集中优化。统一了文件分享和本地服务部署的订阅门槛校验；改进了分享弹窗的交互逻辑，区分“创建”与“更新”操作，防止误创建；增加了停止服务的提示和权限更新反馈，提升了整体稳定性和用户引导。
- **【Cowork/Browser 标注】完善浏览器注释与会话状态（PR #2371）**：改进了浏览器注释功能，支持无文字评论的元素样式修改，并在提示中显示修改前后的值变化。同时，清空草稿注释时能正确终止 WebView 标注会话，避免了页面残留状态，修复了一个潜在的 UI 状态管理问题。
- **【Windows 平台】静默安装更新（PR #2368）**：平台增强。改进了 Windows 平台下的更新体验，通过 PowerShell 启动 NSIS 安装器实现静默安装，并优雅地处理了 UAC 权限请求被拒绝的情况，提供本地化的错误提示。这大幅降低了用户更新时的交互成本。

#### 4. 社区热点

今日社区最受关注的议题是 **“隐藏侧边栏广告”**。

- **PR #2374 [OPEN] [area: renderer] feat: add permanent setting to hide sidebar ad banner**：此 PR 收到了开发者的积极贡献，旨在添加一个永久隐藏侧边栏广告的开关。这反映了社区对**个性化控制**和**更清爽界面**的普遍诉求。虽然广告是开源项目的重要收入来源（假设），但提供永久关闭选项显示了项目对用户偏好的尊重。

#### 5. Bug 与稳定性

今日报告了一个对用户体验影响较高的 Bug：

- **严重: 图片附件状态不同步（Issue #1861）**：当用户在对话框中添加图片后切换模型，附件的处理方式（base64 vs 文件路径）不会随模型对图片的支持能力（`supportsImage`）而更新。这导致视觉模型无法看到图片，或非视觉模型发送了无效的 base64 数据。**已有修复 PR**：PR #2373 已创建并专门修复此问题，预计很快会被合并。

#### 6. 功能请求与路线图信号

- **【已实现】永久隐藏侧边栏广告（PR #2374）**：用户可能通过 Issue（#2342）提出了此需求。开发人员已迅速响应并实现了该功能，这表明**与用户体验相关的 UI 自定义需求**优先级较高，很可能被纳入下一个版本。
- **【待定】依赖版本升级（PR #1279, #1280, #1281）**：由 Dependabot 自动创建的三个关于 `cross-env`、`react-dom` 和 `vite` 的依赖升级 PR 已存在近4个月。虽然未标记为功能请求，但这些长期存活的 PR 表明项目在关键依赖的升级策略上可能存在犹豫或风险权衡，需要维护者决策是否纳入。

#### 7. 用户反馈摘要

- **应用场景与痛点**：Issue #1861 的用户反馈揭示了多模型对话中的一个核心痛点：**模型切换的原子性不足**。用户期望对话上下文（特别是图片附件）能丝滑地适应新模型的能力，而不是手动重新处理。这表明用户正在将 LobsterAI 用作一个“多模型枢纽”工具，对模型间无缝切换和上下文感知的期望很高。

#### 8. 待处理积压

以下 PR 长期未合并，可能影响项目的依赖升及和 CI/CD 健康度，建议维护者关注：

- **PR #1280 [OPEN] [stale] chore(deps): bump react-dom from 18.3.1 to 19.2.4 (链接)**
- **PR #1281 [OPEN] [stale] chore(deps-dev): bump vite from 5.4.21 to 8.0.9 (链接)**

这些 PR 已存活超过 100 天，随着 LobsterAI 代码库的快速演进，这些重大版本升级（如 React 18 -> 19, Vite 5 -> 8）可能涉及破坏性变更，团队需评估其优先级与迁移成本。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 (2026-07-22)

## 今日速览
- 项目过去24小时**活跃度较低**，无新 Issue 被创建或关闭，无新版本发布。
- 仅有 **1 条来自 Dependabot 的自动依赖更新 PR** 处于待合并状态，无人工提交的代码合并或功能推进。
- 社区讨论和反馈基本停滞，无新增用户交互或问题报告，项目整体处于**稳态维护期**。
- 建议维护者关注待合并 PR 的自动检查状态，确保 CI 通过后及时合入，避免依赖累积风险。

## 版本发布
- **无**

## 项目进展
### 待合并 PR
- **[#1161] chore(deps): bump astro from 7.0.9 to 7.1.3 in /docs**  
  作者：dependabot[bot]｜状态：🟡 Open（未合并）｜更新于：2026-07-21  
  说明：自动依赖更新，将文档子项目中的 Astro 框架从 v7.0.9 升级至 v7.1.3。本次升级属于补丁与次版本混合更新，主要包含 Astro 的 bug 修复与小功能改进（详见 Astro release notes）。  
  链接：https://github.com/moltis-org/moltis/pull/1161

**当前进展评估**：项目核心代码无变动，仅依赖维护。项目整体向前推进幅度较小。

## 社区热点
- **无活跃讨论**。今日所有 Issues 和 PR 均无用户评论或反应（👍 0）。唯一 PR #1161 为机器人自动提交，无人工参与。

## Bug 与稳定性
- **无新增 Bug 报告**。今日无 Issues 提及任何崩溃、回归或稳定性问题。项目当前稳定性状态未知（无反馈亦无确认）。

## 功能请求与路线图信号
- **无新功能请求**。今日无任何 Issues 提出新功能需求；无迹象显示新功能将被纳入下一版本。

## 用户反馈摘要
- **无用户反馈**。今日无任何 Issues 或 PR 评论，无法提取真实用户痛点或使用场景信息。

## 待处理积压
- **#1161：依赖升级 PR 待合并**（已停留 1 天）  
  虽然时间尚短，但 Dependabot 类 PR 若长期不合并，可能导致后续升级冲突增多。建议维护者在确认 CI 通过后尽快合并，保持文档环境与依赖版本最新。  
  链接：https://github.com/moltis-org/moltis/pull/1161

---

**项目健康度评级**：🟢 低活跃（稳态）  
**建议**：项目当前无社区活跃迹象，核心开发可能处于间歇期。建议维护者主动检查最近一周有无被忽略的 Issue 或 PR，并考虑发布一次常规版本以保持项目可见度。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

好的，这是根据 CoPaw (github.com/agentscope-ai/CoPaw) 2026-07-22 的 GitHub 数据生成的项目动态日报。

---

# CoPaw 项目动态日报 | 2026-07-22

## 今日速览

项目社区活跃度极高，过去24小时内共处理了42条Issue和50条PR，显示出强大的社区参与度和开发动力。**v2.0.1-beta.1** 版本已发布，主要修复了 Tauri 桌面端导入问题和 ReMe 内存模块稳定性。开发主力集中在**治理（Governance）**、**工具注册（Tool Registration）** 和 **Scroll 上下文管理**等多个核心模块，大量 PR 正处于合并与关闭状态，项目迭代节奏紧凑。社区反馈集中在**性能回归（v2.0.0相比v1.x）**、**会话历史错乱**以及**用户体验改进**（如拖拽上传、移动端适配）上。

## 版本发布

- **v2.0.1-beta.1**
  - **链接**: [v2.0.1-beta.1 Release](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.1-beta.1)
  - **更新内容**:
    - **修复**: 修复了 Tauri 桌面端入口点的绝对路径导入问题（PR #6234）。
    - **修复**: 修复了 ReMe 内存空间 (`memoryspace`) 中，`_saved_tool_refs` 方法可能因捕获 `OSError` 异常导致的问题。
    - **杂项**: 版本号提升至 `2.0.1b1`。
  - **破坏性变更**: 无。
  - **迁移注意事项**: 此版本为小版本更新，无特别迁移注意事项，建议所有 v2.0.0 用户升级。

## 项目进展

今日有 **30 条 PR 被合并或关闭**，标志着以下几个关键领域的重大进展：

- **治理与安全（Governance & Security）**:
  - `#6190` (**已合并**): 通过 `@tool_descriptor` 和 `PluginApi` 统一了内置/插件工具注册机制，使治理白名单、工具配置 UI 都可从单一数据源派生，解决了 PR #6114 的问题。这是一个架构层面的重要改进。
  - `#5882` (**已合并**): 成功集成了 OMP（工作流模式）插件，支持 UltraQA、Ralph 等五种工作流模式，并扩展了 `spawn_subagent` 功能，增强了子智能体的并发调度与控制能力。
  - `#6079` (`已关闭`): 修复了 `sudo` 命令执行前向用户请求授权的权限问题。
- **运行时修复（Runtime Fixes）**:
  - `#6313` (`已关闭`): 作为 `#6190` 的后续跟进，修复了插件工具默认配置冻结、工具类型验证等问题，并优化了缓存机制。
  - `#6270` (`已合并`): 支持了用户可编辑的智能体模式（Agent Mode）。
  - `#6262` (`已合并`): 新增了“一键复制智能体配置”功能，方便用户基于现有配置快速创建新智能体。
  - `#6183` (`已关闭`): 使日志轮转（Rotation）的限制参数（如文件大小、备份数量）变得可配置。
- **Scroll 上下文管理**:
  - `#6323` (`开放中`): 引入了**分段压缩**（Staged Compaction）和指针支持的**任务连续性**机制，旨在从根本上解决会话上下文错乱和丢失问题。此 PR 仍处于审查阶段，但代表了未来改进方向。

**总结**：项目在核心架构标准化（工具注册、治理）和高级功能（OMP工作流、子智能体）上取得了关键性进展，同时积极修复社区报告的稳定性和权限问题。

## 社区热点

今日讨论最活跃的议题集中在**用户体验退化和会话管理**两大痛点：

1.  **#6299 - [Bug]: 已删除的会话记录在`history.db`中残留，导致序号冲突和跨会话上下文污染**
    - **链接**: [Issue #6299](https://github.com/agentscope-ai/QwenPaw/issues/6299)
    - **热度**: 3条评论，5个 👍
    - **分析**: 这是社区报告的**最严重问题之一**。用户发现删除会话后，其数据仍残留于SQLite数据库，导致新会话的序号（seq）冲突，进而引发“串会话”、新对话丢失、页面空白等问题。这直接影响了用户最基础的“开启-管理-关闭对话”的核心体验，引发了广泛担忧。相关问题（如 `#5964`）的修复也已在 PR `#6068` 中跟进。

2.  **#6307 - [Performance]: v2.0相比v1.x，每次简单对话回复都引入约2秒的固定开销**
    - **链接**: [Issue #6307](https://github.com/agentscope-ai/QwenPaw/issues/6307)
    - **热度**: 2条评论
    - **分析**: 资深用户发现v2.0版本在请求处理架构上存在约2秒的固定延迟，与模型响应速度无关。这被视为一个**严重的性能回归**。用户已明确表示期望恢复到v1.x的水平。这个问题在当前 **v2.0.1-beta.1** 版本中尚未提及修复。

## Bug 与稳定性

根据严重程度排序的 Bug 报告（带 🔥 标记表示已有修复 PR 关联）：

- **🔥 严重 (Critical)**:
  - `#6299` **会话数据残留在`history.db`**，导致跨会话上下文污染和序列冲突。**相关修复: PR #6068**。
  - `#6307` **v2.0引入约2秒的固定请求开销**，影响所有对话响应速度。
  - `#6314` **`RemoteProtocolError: peer closed connection`**，网络连接被不恰当关闭，可能导致服务不稳定。
- **高 (High)**:
  - `#6241` **智能体连续轮次重复输出 + `memory_search` 死循环**，缺乏有效的循环检测机制。
  - `#5860` **v2.0频繁出现对话进度丢失和无限循环**。
  - `#6258` **OpenAI兼容模型的最大输出Token设置不生效**。
- **中 (Medium)**:
  - `#5759` **计划模式下反复读取同一文件**，浪费Token和计算资源。
  - `#6242` **Console中Embedding维度设置未传递至OpenAI API**, 因为未暴露 `use_dimensions` 参数。
  - `#6320` **LaTex公式不能正确渲染**。
  - `#6292` **流式消息中，过程chunk的status错误标记为 `Completed`**，导致客户端中断消息接收。

## 功能请求与路线图信号

- **强烈信号（已有相关PR或讨论深入）**:
  - **会话上下文附加实时时间信息** (`#6283`): 用户要求系统自动附加当前时间，防止模型混淆历史日期。功能虽小，但很实用，可能被快速采纳。
  - **`AGENTS.md` 中的工具调用前条件规则** (`#6321`): 用户希望能在配置文件中定义前置验证规则（如修改文件前必查MEMORY.md），这属于**高级用户控制**的范畴，开发团队正在讨论。
  - **配置化主题/皮肤模块** (`#6312`): 对应社区任务 `#2291` 的 Task 1，一个首次贡献者提出了相关 PR，但尚处于草案阶段。
- **潜在下一版本信号**:
  - **Web控制台适配移动端** (`#6281`) 和 **对话中直接拖拽上传文件** (`#6297`): 这两个呼声很高的体验优化需求，目前没有直接关联的PR，但极有可能成为下一个小版本的优化目标。
  - **支持禁用或自定义内置工具描述** (`#6286`): 用户为了节省Token，希望对22个内置工具的加载方式进行控制，这是一个面向高级用户和成本敏感用户的合理需求。
  - **`qwen3.8-max-preview` 模型支持** (`#6285`): 用户希望更新硬编码的模型列表以适应阿里云新模型。

## 用户反馈摘要

- **满意**:
  - 社区对**治理和安全性方面的持续改进**（如PR #6190, #6079）表示认可。
  - 对**首次贡献者**的活跃参与和高质量贡献（如PR #5992, #6203, #6312）给予正面评价。
- **不满意 / 痛点**:
  - **性能回归**是当前最大的负面反馈（#6307）。用户明确表示“降级到v1.x”。
  - **v2.0的会话管理问题**（丢失、串话、无限循环）（#6299, #5860）严重打击了用户信任，报道问题最多。
  - **桌面端工作流（Workflow）不连贯**：用户抱怨需要离开桌面端才能找到智能体产出的文件（#6083）。
  - **渠道（Channel）工具调用信息过长**：希望可以截断或分段发送（#5976）。
  - **移动端适配差距**：Web Console在手机上无法使用（#6281）。
  - **视频创作社区**：大量用户要求对话中直接拖拽上传文档和图片（#6297），尤其是用于合同审核等场景。

## 待处理积压

- **`#2291` - [enhancement] 🐾 开放任务清单**
  - **链接**: [Issue #2291](https://github.com/agentscope-ai/QwenPaw/issues/2291)
  - **状态**: 此 Issue 长达 65 条评论，是社区贡献的指引帖。但其下的 `Task 1`（主题模块，PR #6312）已开始推进，提醒维护者关注该 Issue 下其他任务的进展和认领情况。
- **`#2055` - [enhancement] [Feature]: OpenAI 兼容模型在单轮中返回大量 tool_call，导致工具调用失控**
  - **链接**: [Issue #2055](https://github.com/agentscope-ai/QwenPaw/issues/2055)
  - **状态**: 已关闭，但反映了在处理非通义模型时框架的鲁棒性问题。鉴于社区反馈 `#6258` 表明OpenAI模型兼容性问题仍然存在，建议对相关问题进行复盘，确保架构兼容性得到全面测试。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，这是为您生成的 ZeroClaw 项目动态日报。

---

# ZeroClaw 项目动态日报 | 2026-07-22

## 1. 今日速览

ZeroClaw 项目在过去24小时内保持了极高的社区活跃度，共产生 **50条 Issue** 和 **50个 PR**。尽管无新版本发布，但项目在 **安全、架构、功能增强** 三个维度上均有重大进展。**核心安全漏洞**（如委托代理绕过父级工具白名单）和 **运行时稳定性问题**（如僵尸进程、无限内存增长）正被积极修复，同时社区对新功能（如 OpenAI 兼容适配器、语音通道）的讨论热度不减。总体来看，项目正处于 **高强度开发与社区反馈密集碰撞** 的健康状态，维护团队响应迅速。

## 2. 版本发布

无。

## 3. 项目进展

今日无 PR 被合并，但有多个重大功能的 PR 处于活跃推进状态，标志着项目从讨论转向落地的关键阶段。

- **安全审计管线落地 (PR #9086, 已关闭):** 一个关于“结构化安全审计管线”的 RFC 被采纳并关闭。该提案涉及防篡改日志、弹性上传及异常检测，虽然代码已存在但未接入，预计后续将进入实现阶段。
- **OpenAI 兼容适配器 (PR #8486, 开放中):** 这是一个 **XL 规模** 的 PR，旨在将 ZeroClaw 接入更广泛的 LLM 客户端生态（如 Open WebUI, Continue.dev）。该 PR 将极大地降低开发者接入门槛，是项目 **向标准化协议靠拢** 的重要一步。
- **Goal 模式栈持续构建 (PR #8687, #8688, #8689, #8746, #8996):** 由贡献者 `vrurg` 主导的 Goal 模式（有界自主会话）功能栈正在搭建，包括：控制路由、模型工具、通道命令、自循环修复以及守护进程重载恢复。这表明 **“目标驱动”的自主会话** 功能即将成型。
- **矩阵通道增强 (PR #8443):** 为 Matrix 通道增加了“单消息进度草稿”功能，通过编辑同一条消息来展示思考过程，最后发送最终答案，改善了实时交互体验。

## 4. 社区热点

本周社区最活跃的讨论集中在 **安全漏洞** 与 **协议扩展** 两大议题。

1.  **委托代理安全漏洞 (Issue #8279):** 讨论 **最多** 且 **严重级别最高 (S0)** 的 Issue。贡献者 `wangmiao0668000666` 报告，`delegate` 工具使子代理能调用父级策略禁止的工具，这是一个严重的安全设计缺陷。该问题的 `risk` 被标为 `high`，引发了大量关于如何修复的讨论，包括引入严格的白名单继承机制。
2.  **OpenAI 兼容适配器 (Issue #8603 & PR #8486):** 这是社区呼声最高的功能性需求之一。用户 `REL-mame` 发起的 RFC 获得 4 条评论，并迅速转化为大型 PR。背后诉求是 **让 ZeroClaw 能与现有海量 LLM 工具链无缝集成**，减少适配成本，这对项目生态增长至关重要。
3.  **Telegram 通道配置 (Issue #8505):** 用户 `AIWintermuteAI` 报告了 Telegram 机器人配置失败的问题，且通道检测工具 `zeroclaw channels doctor` 的反馈也与实际不符。此问题关联另一个 Issue (`#8810`) 质疑相关文档错误，反映了 **新手入门体验** 上的障碍。

## 5. Bug 与稳定性

今日报告的 Bug 涵盖安全、性能、配置和内容处理，部分问题影响严重。

- **严重 (S0)**
    - **[Shell 工具工作区边界绕过 (Issue #9247)]:** `shell` 工具未像文件工具那样强制检查工作区边界，可通过符号链接逃离，导致数据泄露或写入风险。
    - **[兼容性提供者静默删除内容 (Issue #8615)]:** 提供者无条件剥离 `<think>` 标签，可能导致用户丢失回复内容，且静默发生，难以察觉。

- **高影响 (P1/S2-S1)**
    - **[MCP/工具模式导致无限内存增长 (Issue #8642)]:** 代理循环中的模式克隆导致 RSS 无限制增长，是 OOM 问题的根因之一。
    - **[stdio MCP 服务器产生僵尸进程 (Issue #8731)]:** 子进程未正确回收，会积累大量僵尸进程，导致系统资源耗尽。
    - **[[Bug]：配置模板被守护进程自身拒绝 (Issue #8718)]:** `zeroclaw config init` 生成的默认配置（音频转录部分）被守护进程认为是无效的，导致新用户静默地失去语音转录功能。

- **低影响/文档**
    - **[文档错误 - Telegram (Issue #8810)]:** 用户 `cr3a7ure` 言辞激烈地指出 Telegram 通道配置文档存在多处错误，导致功能无法正常使用。
    - **[保存配置时包含“.”的键被静默丢弃 (Issue #9240)]:** 模型名如 `gpt-4.1` 因包含点号，其配置在保存时会被无声地丢弃，导致配置不完整。

## 6. 功能请求与路线图信号

除了社区热点章节讨论的 OpenAI 兼容适配器外，以下功能请求也显示出较强的路线图潜力：

- **[每对话模型切换 (Issue #8600)]:** 用户希望能在多模型提供者（如 OpenRouter）中，对话间轻松切换模型。该需求评分很高，已有关联跟踪器 (`type:tracker`)，可能通过未来对提供者抽象层的改进来实现。
- **[Gemini Live 实时语音通道 (RFC #8780)]:** 提出了一个包容性强的实时多模态通道 RFC，以支持 Gemini Live 的原生语音交互。这表明项目正在积极考虑 **语音交互** 这一前沿领域。
- **[Goal 模式 (RFC #8303)]:** 社区对“有界自主会话”的需求明确且强烈，当前已有多个 PR 在实现，**进入下一版本的确定性很高**。
- **[Telegram Bot API 10.1 富消息 (Issue #8415)]:** 用户希望 Telegram 能更好地渲染 Markdown 表格等，提升聊天机器人体验。

## 7. 用户反馈摘要

- **正面反馈**: 用户对项目用 Rust 实现所提供的内存和类型安全性表示赞赏。社区对新功能（如 Goal 模式、OpenAI 适配器）的积极讨论和快速转化为 PR，反映了社区对项目方向的认可和参与热情。
- **负面/痛点反馈**:
    - **文档严重落后**: 多位用户抱怨文档与实际实现不符，尤其是在 Telegram 通道配置上，导致入门困难。
    - **开箱即用体验差**: 用户报告默认配置模板（如语音转录）会导致功能静默失败，缺乏清晰的错误提示。
    - **安全问题突出**: 社区对安全隐患（如 `delegate` 工具、Shell 工具边界）的发现和讨论非常积极，但这也反映了当前版本在生产环境部署时可能面临风险。
    - **内容丢失**: 兼容性提供者的 `<think>` 标签静默剥离和因点号键导致的配置丢失问题，直接影响了用户对数据完整性的信心。

## 8. 待处理积压

以下 Issue 或 PR 因长期未响或需要维护者决策，值得特别关注：

- **SkillForge (#144) 功能荒废 (Issue #8309):** 该模块已合并但未被接入任何实际功能，是一个 **重大待定项**。维持者需要决定是投入资源完成它，还是彻底移除，以避免死代码影响项目可维护性。
- **SOP 里程碑 (Issue #8288):** 这是一个协调 SOP 控制面板功能的多 PR 路线图。当前进展不明确，需要维护者评估整体进度并提供状态更新。
- **Channel/Source 边界清理 (Issue #8583):** 作为架构清理跟踪器，它旨在统一和复用多个通道的共享组件。如果缺乏推动，后续新增通道的开发和维护成本将持续升高。
- **RFC: 使网络协议成为提供者构建的一等公民 (Issue #8396):** 这是一个架构层面的 RFC，影响力大但复杂。如果长期搁置，可能会阻碍新提供者的接入和标准化。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*