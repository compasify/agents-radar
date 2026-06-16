# OpenClaw 生态日报 2026-06-16

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-16 00:36 UTC

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

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我已根据您提供的 OpenClaw 项目 GitHub 数据，为您生成了 2026-06-16 的项目动态日报。

---

# OpenClaw 项目日报 - 2026-06-16

## 今日速览

今日 OpenClaw 项目社区活跃度极高，共产生 500 条 Issue 更新和 500 条 PR 更新，彰显出庞大的用户基础和开发贡献量。项目当前状态呈现“高热度，高压栈”的特点：新提交的功能请求和 Bug 报告数量庞大，但维护者审查、产品决策等环节出现明显积压，大量 Issue 被打上 `needs-maintainer-review` 和 `needs-product-decision` 标签。与此同时，社区修复力量强劲，针对内存泄漏、会话上下文混乱等严重 Bug 的 PR 已处于“待审查”或“已关闭”状态。安全、消息丢失、会话状态损坏是当前最受关注的核心议题。

## 版本发布

今日无新版本发布。

## 项目进展

以下为今日合并/关闭的重要 PR，代表了项目在关键稳定性问题上的推进：

- **PR #93448 - `fix(guards): allow auth profile sqlite reader`**：修复了一个CI检查错误，允许认证配置文件读取器通过SQLite安全检查，保障了基础组件的可用性。
- **PR #68936 - `Autofix: add PR review autofix pipeline + Windows daemon`**：合并了一个大型自动修复流水线，并增加了Windows守护进程，提升了项目的自动化运维能力和平台覆盖。
- **PR #90003 - `feat(policy): cover exec approvals artifact`**：合并了关于 `exec-approvals.json` 的策略证据和规则，增强了执行审批模块的安全性与可审计性。
- **PR #93428 - `fix(agents): resolve configured default model in runEmbeddedAgent`**: 修复了嵌入式代理运行时忽略用户配置默认模型的问题，解决了插件触发的嵌套代理执行失败的核心原因。
- **PR #93427 - `fix(tui): show activity indicator for system-injected runs`**: 修复了终端UI在系统注入事件（如Webhook、Cron）运行时无活动指示器的问题，改善了用户反馈体验。

今日项目的“前进”主要体现在：对核心运行时的配置一致性进行了修复，并增强了策略框架。合并的 PR 多针对具体且严重的 Bug，显示出开发团队正集中火力解决当前最影响使用体验的痛点。

## 社区热点

以下为今日讨论最活跃、反应最多的问题，反映了社区的普遍关切：

1.  **#75 - `Linux/Windows Clawdbot Apps`** (评论: 109, 👍: 79)
    - **链接**: [Issue #75](https://github.com/openclaw/openclaw/issues/75)
    - **分析**: 这是社区呼声最高、持续时间最长的需求之一。用户强烈希望 OpenClaw 的核心应用能扩展到 Linux 和 Windows 平台，目前仅有 macOS, iOS, Android 版本。极高的评论和点赞数表明，平台兼容性是项目扩大用户基础的最大障碍之一。

2.  **#25592 - `Text between tool calls leaks to messaging channels`** (评论: 32, 👍: 1)
    - **链接**: [Issue #25592](https://github.com/openclaw/openclaw/issues/25592)
    - **分析**: 这是一个严重的UX和安全问题。代理在工具调用之间的内部处理日志（如错误处理）会意外地发送到聊天频道。用户担心这会导致内部逻辑暴露和隐私泄露。该 Issue 被标记为 P1 和 “钻石龙虾” 评级，说明是项目关注的核心痛点。

3.  **#9443 - `Request: Prebuilt Android APK releases`** (评论: 25, 👍: 2)
    - **链接**: [Issue #9443](https://github.com/openclaw/openclaw/issues/9443)
    - **分析**: 与 #75 类似，反映了用户对易用性的强烈诉求。虽然仓库内有 Android 源码，但需要用户自行编译，门槛过高。提供预编译的 APK 是降低安卓用户使用门槛的关键步骤。

## Bug 与稳定性

以下为今日报告的影响较大的 Bug 和回归问题：

- **P0 级别**
    - **#91588 - `Critical: Gateway Memory Leak`** (OPEN): 网关进程出现严重内存泄露，运行时 RSS 从 350MB 增长至 15.5GB，最终导致 OOM 被系统杀死。这是当前最严重的稳定性问题。目前暂无关联的 fix PR，但已引起高度关注。
        - **链接**: [Issue #91588](https://github.com/openclaw/openclaw/issues/91588)

- **P1 级别**
    - **#25592 - `Text between tool calls leaks to messaging channels`** (OPEN): 工具调用中间文本泄露到消息频道，是严重的隐私和UX问题。
        - **链接**: [Issue #25592](https://github.com/openclaw/openclaw/issues/25592)
    - **#22676 - `Signal daemon stop() race condition on SIGUSR1 restart`** (OPEN): 重启时信号守护进程的竞争条件导致孤儿进程和发送失败，影响服务稳定性。
        - **链接**: [Issue #22676](https://github.com/openclaw/openclaw/issues/22676)
    - **#32296 - `Agent replies to previous message instead of current message`** (OPEN): 会话上下文混乱，代理回复到上一条消息，严重影响对话连贯性。
        - **链接**: [Issue #32296](https://github.com/openclaw/openclaw/issues/32296)
    - **#90325 - `Matrix channel dispatch broken in v2026.6.1`** (OPEN): 2026.6.1 版本的回归问题，导致 Matrix 频道消息处理崩溃。
        - **链接**: [Issue #90325](https://github.com/openclaw/openclaw/issues/90325)
        - **标记**: 该 Bug 已有相关 PR 尝试修复。

- **P2 级别**
    - **#32473 - `control ui requires device identity`**: VPS 部署时的 HTTPS/安全上下文问题导致控制 UI 无法使用。
        - **链接**: [Issue #32473](https://github.com/openclaw/openclaw/issues/32473)
    - **#29387 - `Bootstrap files in agentDir are silently ignored`**: 代理专属目录下的配置文件被忽略，只有工作空间的生效，与用户预期不符。
        - **链接**: [Issue #29387](https://github.com/openclaw/openclaw/issues/29387)

## 功能请求与路线图信号

今日社区提出了大量功能请求，以下为可能影响项目路线图的信号：

1.  **安全与权限类**: 这是今日最密集的功能请求方向。
    - `Masked Secrets` (#10659), `Filesystem Sandboxing` (#7722), `Capability-based permissions for skills/tools` (#12678), `Pre-response enforcement hooks` (#13583), `Denylist for exec-approvals` (#6615) 等。这表明社区用户对代理的安全可控性要求极高，下一版本极有可能在权限模型和秘密管理上做出重大更新。
        - **相关 PR 信号**: `feat(policy): cover exec approvals artifact` (#90003) 已于今日合并，显示了团队正在构建底层的策略框架。

2.  **平台与部署类**:
    - `Prebuilt Android APK` (#9443), `Linux/Windows Clawdbot Apps` (#75), `Comprehensive AWS deployment guide` (#13597). 这些 Issue 的持续高热度表明，降低部署门槛和提供更多平台支持是扩大用户基数的关键。
        - **相关 PR 信号**: `fix(release): tolerate semver build metadata` (#92530) 虽然是小修复，但表明团队在为打包和发布流程做准备。

3.  **会话与状态管理类**:
    - `Session snapshots` (#13700), `Tiered bootstrap file loading` (#22438), `Post-subagent completion extension hook` (#22358). 用户渴望更灵活、可控的会话管理能力，尤其是在处理复杂任务和多步骤工作流程时。
        - **相关 PR 信号**: `feat(sessions): auto-prune orphan store pointers` (#92542) 和 `feat(queue): persist followup queues across gateway restarts` (#82572) 已经从侧面开始加强会话状态的健壮性。

## 用户反馈摘要

- **核心痛点**:
    - **稳定性**: 内存泄漏（#91588）和 Gateway 重启时的竞争条件（#22676）导致服务不可用，严重影响了用户体验。
    - **部署困难**: 缺少预编译包（#9443）和云平台部署文档（#13597），使得入门门槛很高。
    - **用户体验**: 会话上下文混乱（#32296）导致 AI 答非所问，工具调用的中间文本泄露（#25592）则带来了安全担忧。
- **使用场景**:
    - **高级用户/开发者**: 正在尝试使用 Sub-agent 进行复杂工作流编排（#22358, #27445），并希望有更强的 Session 控制能力（#22438）。他们对 `Memroy` 和 `Embedding` 的配置非常关注（#16670）。
    - **企业/安全敏感用户**: 提出了大量的安全增强请求（#10659, #6615, #7722），表明 OpenClaw 正被用于或评估用于对安全性有高要求的场景。
    - **跨平台用户**: 对 Linux 和 Windows 原生应用（#75）的渴求非常明确，这被视为项目成熟度的重要标志。
- **满意度/抱怨**:
    - 用户对项目的能力是认可的（很多 Feature Request 都是希望拓展已有能力），但对稳定性和易用性问题感到沮丧。特别是，`sessionKey` 文档与行为不符（#11665）等文档/实现不一致问题，引发了用户的负面反馈。

## 待处理积压

以下为长期存在且影响重大的待处理 Issue 和 PR，提醒维护者优先关注：

- **高关注度积压**
    - **#75 - `Linux/Windows Clawdbot Apps`**: 持续数月的核心平台需求，虽无 PR，但社区呼声极高，是拓展用户群体的关键。
    - **#10659 - `Masked Secrets`**: 高频点赞的顶层安全功能请求，对企业和安全敏感用户至关重要。
    - **#16670 - `Memory/Embedding setup as mandatory onboarding step`**: 关系到核心功能 `Memory` 的实际利用率，当前配置流程的缺失可能导致很多新用户无法体会到 OpenClaw 的核心优势。

- **审查积压**
    - **#82572 - `feat(queue): persist followup queues across gateway restarts`**: 旨在解决重启时消息丢失这一重要稳定性问题，PR 体量大 (XL)，已提交一个月，等待维护者审查。
    - **#85403 - `fix(telegram): suppress message-tool reply previews`**: 修复 Telegram 频道的 UX 问题，同样等待审查。
    - 大量 Issue 被打上 `clawsweeper:needs-maintainer-review` 和 `clawsweeper:needs-product-decision` 标签（如 #25592, #9443 等），显示出项目在维持高速发展的同时，维护力量出现瓶颈。

---

## 横向生态对比

好的，作为您的资深技术分析师，以下是根据您提供的各项目动态所生成的横向对比分析报告。

---

## AI 智能体与个人 AI 助手开源生态：横向对比分析报告 (2026-06-16)

### 1. 生态全景

当前，个人 AI 助手/自主智能体开源生态呈现出 **“高热度、高压栈、分层化演进”** 的显著态势。头部项目如 **OpenClaw** 和 **ZeroClaw** 社区极其活跃，贡献请求与问题报告堆积如山，表明用户期望值高且使用场景深入，但维护力量已成为核心瓶颈。整个生态正从单纯的功能堆叠转向 **“安全、稳定、可扩展”** 的深水区，大量社区讨论集中在 **权限模型、会话状态管理、跨平台部署** 及 **成本控制（Token用量可视化）** 上。同时，项目间分化加剧：一线项目专注于构建稳固的底层平台和解决规模化问题，而二线项目则在特定垂直领域（如轻量级、本地模型、特定平台集成）寻求差异化突破。

### 2. 各项目活跃度对比

| 项目名称 | Issues (日) | PRs (日) | 版本发布 | 健康度评估 | 核心状态 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | 无 | **高热度，高压栈** | 修复关键Bug，审查积压严重，社区需求旺盛 |
| **NanoBot** | 4 | 35 | 无 | **高活跃，迭代健康** | 功能与Bug修复并行，合并节奏良好 |
| **Hermes Agent** | 50 | 50 | 无 | **高活跃，社区驱动** | 解决关键Bug，本地化和功能请求贡献活跃 |
| **PicoClaw** | 3 | 12 | v0.2.9-nightly | **中活跃，防御性编程** | 重点提升代码健壮性与安全性 |
| **NanoClaw** | 0 | 12 | 无 | **中活跃，功能集成** | 扩展外部服务集成（MCP, Strava）与运行时修复 |
| **NullClaw** | 2 | 1 (待合并) | 无 | **低活跃，社区困惑** | 核心配置不透明，本地模型集成不稳定 |
| **IronClaw** | 50 | 50 | 无 | **极高活跃，版本迭代前夜** | “Reborn”版本功能与稳定性并行冲刺，学习系统初现 |
| **LobsterAI** | 0 (2个存活) | 11 | 无 | **中活跃，功能完善期** | 聚焦语音重构及文档Artifact，本地技能体验待优化 |
| **Moltis** | 0 | 2 (均待合并) | 无 | **低活跃，功能蓄力** | 外部代理模型选择、上下文命令等新功能待合入 |
| **CoPaw** | 50 | 50 | 无 | **极高活跃，等待稳定版** | Token可视化已合入，但核心Bug多，社区期待修复版本 |
| **TinyClaw** | 0 | 0 | 无 | **无活动** | - |
| **ZeptoClaw** | 0 | 0 | 无 | **无活动** | - |
| **ZeroClaw** | 50 | 50 | 无 | **极高活跃，安全加固期** | 安全问题集中爆发与修复，路线图明晰，v0.8.1/v0.9.0推进中 |

*注：活跃度基于项目数据进行定性评估，例如OpenClaw的500条更新是“极高”的量化表现。*

### 3. OpenClaw 在生态中的定位

OpenClaw 是生态中当之无愧的 **“核心参照”** ，具备以下显著特征：
- **社区规模与影响力**：其500条Issue/PR的日更新量是其他活跃项目的10倍以上，社区规模和市场关注度处于绝对领先地位。这使其成为生态中Bug发现、需求收集和功能验证的“主战场”。
- **优势**：极高的社区活跃度带来了最丰富的功能请求和Bug报告，能够快速暴露系统的短板，驱动核心架构演进（如策略框架、审批模块）。
- **差异点**：与同样活跃的 **CoPaw** 和 **ZeroClaw** 相比，OpenClaw的`needs-product-decision`标签显著增多，反映出其在功能迭代的决策链条上更长，可能采用更谨慎的开发模式。相比之下，**ZeroClaw** 的RFC和路线图Issue更结构化，体现了更强的工程规划能力。**IronClaw** 和 **CoPaw** 则侧重于特定版本（Reborn, v1.x）的功能冲刺，迭代节奏更快。

### 4. 共同关注的技术方向

社区的共同诉求在多个项目中反复出现，已成为生态层面的关键技术趋势：

1.  **安全与权限模型（核心议题）**：
    - 涉及项目：**OpenClaw**、**ZeroClaw**、**PicoClaw**、**Hermes Agent**、**NanoBot**。
    - 具体诉求：
        - **精细化权限控制**：如“能力-生态位权限”（Capability-based permissions）、`exec-approvals`黑名单、委托人权限模型（ZeroClaw `#7743`）。
        - **秘密与路径管理**：`Masked Secrets`（OpenClaw）、图像剥离避免路径泄露（NanoBot）、防止工具调用中间文本泄露（OpenClaw）。
        - **访问控制安全**：`allowed_cidrs`绕过问题（PicoClaw）、OAuth流程稳定（IronClaw, ZeroClaw）。

2.  **会话状态管理**：
    - 涉及项目：**OpenClaw**、**CoPaw**、**NanoBot**、**Hermes Agent**。
    - 具体诉求：
        - **上下文压缩与记忆**：压缩算法导致信息丢失（CoPaw `#5171`）、压缩时机与策略优化（NanoBot）。
        - **上下文连续性**：回复错乱（OpenClaw `#32296`）、机器人输出截断（Hermes Agent `#7237`）。
        - **状态持久化**：会话快照（OpenClaw）、Gateway重启后消息不丢失。

3.  **Token用量与成本可视化**：
    - 涉及项目：**OpenClaw**（隐含）、**CoPaw**（明确实现）。
    - 具体诉求：社区强烈要求在对话界面清晰显示每次交互的Token消耗和上下文窗口使用情况，以便于成本控制和模型行为分析。CoPaw 已将该功能合入主代码库。

4.  **跨平台与部署体验**：
    - 涉及项目：**OpenClaw**、**ZeroClaw**、**PicoClaw**、**Hermes Agent**。
    - 具体诉求：
        - **桌面端稳定性**：macOS端构建/运行失败（Hermes Agent）、桌面端资源消耗异常（CoPaw）。
        - **移动/嵌入式平台支持**：预构建Android APK（OpenClaw）、Linux/Windows原生应用（OpenClaw）。
        - **云部署**：清晰的AWS/GCP部署指南（OpenClaw）。

### 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构/定位 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | 全能型个人AI助手 | 高端玩家、开发者、企业 | 模块化，功能极其丰富，插件/MCP生态庞大，但运维复杂 |
| **NanoBot** | 消息平台集成（Telegram为主） | 社交聊天用户、chatbot部署者 | 轻量级，消息处理优化，多模型回退，侧重于稳定代理的通信层 |
| **Hermes Agent** | 桌面端Agent（macOS优先） | 桌面用户、macOS生态开发者 | 深度集成桌面环境，关注背景技能和自动化，社区贡献活跃 |
| **PicoClaw** | 轻量级、嵌入式的微型Claw | 嵌入式设备、RISC-V用户 | Rust编写，强调代码健壮性和系统资源最小化 |
| **NanoClaw** | 集成外部服务（MCP, Strava等） | MCP开发者、外部服务集成商 | 专注扩展“技能”和“连接器”，打造服务集成枢纽 |
| **NullClaw** | 本地模型/隐私优先 | 隐私敏感用户、离线部署者 | 核心功能简洁，高度依赖Ollama等本地模型，配置体验是短板 |
| **IronClaw** | 生产力Agent（Web自动化）  | 自动化工作流用户 | 强于Web自动化（Trace Commons集成），正在构建“学习系统” |
| **LobsterAI** | 协作与文档（Artifact） | 团队协作用户 | 突出语音协作和文档预览，关注功能完整度与交互体验 |
| **Moltis** | 极简对话框架 | 开发者（API调用） | 提供可扩展的对话上下文命令，侧重于Agent运行时的可编程性 |
| **CoPaw** | 大而全的Qwen生态助手 | 中文用户、Qwen模型用户 | 深度绑定阿里系产品，功能堆叠快，社区问题反馈密集 |
| **ZeroClaw** | 安全、合规的企业级Agent | 企业、安全团队 | **Rust语言**，极度强调安全与稳定性，路线图清晰，工程化管理强 |

### 6. 社区热度与成熟度

- **第一梯队（极高热度，快速迭代期）**：**OpenClaw**、**ZeroClaw**、**CoPaw**、**IronClaw**。
    - 特点：社区活跃度爆表，Issue和PR日处理量高达50+。它们处于功能快速扩张和核心稳定性反复打磨的阶段。是生态中最具影响力的项目，但也面临着维护瓶颈和回归Bug频发的挑战。
- **第二梯队（中高热度，功能完善/质量巩固期）**：**NanoBot**、**Hermes Agent**、**NanoClaw**、**PicoClaw**、**LobsterAI**。
    - 特点：迭代节奏健康，能快速响应社区反馈并合并PR。项目定位更聚焦，在特定领域（如消息处理、桌面端、外部集成）做得深而精，Bug修复积极主动。
- **第三梯队（低热度，潜伏期/早期阶段）**：**NullClaw**、**Moltis**。
    - 特点：社区影响力和开发活跃度较低，核心Bug或功能请求响应缓慢。项目或因定位小众、或因成熟度不足，还在寻求增长点和用户基础。
- **无活跃项目**：**TinyClaw**、**ZeptoClaw**。

### 7. 值得关注的趋势信号

1.  **“安全，安全，还是安全”**：从 **ZeroClaw** 的MCP作用域失效，到 **PicoClaw** 的IP白名单绕过，再到 **OpenClaw** 的权限模型设计，安全问题已成为所有一线项目无法回避的 **基础设施级话题**。未来，安全能力（权限沙箱、密钥管理、审计日志）将是区分项目成熟度的关键门槛。
2.  **Token可视化成为“新标配”**：**CoPaw** 将Token用量可视化功能合入主分支，预示着用户 **“对AI消费的知情权”** 需求将催生新的基本功能。这不仅是成本控制，更是调试和优化Agent行为的必要工具。
3.  **MCP生态从“能用”走向“好用”**：多个项目（**NanoClaw**、**Hermes Agent**、**ZeroClaw**）都在优化MCP的集成体验，包括支持远程服务器、提升连接诊断能力、解决作用域配置问题。这表明MCP作为开放工具的连接标准正在被生态普遍接受，并开始进入精细化打磨阶段。
4.  **国际化（i18n）成为社区驱动的贡献点**：**Hermes Agent** 在一天内收到多个语言的本地化PR，表明社区贡献者正在自发地推动项目的全球化。这提示所有项目应尽早规划国际化基础架构（如Fluent），以承接社区的热情。

**对开发者的参考价值**：
- **选择技术栈**：如果你是追求极致安全和企业级部署，**ZeroClaw (Rust)** 是首选；如果你需要最活跃的社区和最多的“踩坑”资源，**OpenClaw** 是不二之选；如果你是个人开发者或想快速集成到现有工作流（如Telegram），**NanoBot** 或 **NanoClaw** 的轻量级特性更有优势。
- **贡献机会**：当前生态最大的贡献机会在于 **安全架构**（特别是权限和状态管理）和 **稳定性**（修复回归Bug、完善测试）。功能性PR和本地化PR也广受欢迎，特别是在二线项目中。
- **开发风险**：关注头部项目的 **“版本发布前夜”** 状态（如IronClaw Reborn、ZeroClaw v0.9.0），尽早与其Roadmap对齐，可避免因上游API变更导致的重复劳动。同时，密切留意诸如 CoPaw 分支中的“严重Bug悬而未决”情况，这可能是技术债务的体现。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-06-16

## 今日速览

过去24小时，NanoBot 项目在代码贡献和问题修复方面表现活跃：共处理 **35 条 PR**（待合并 19 条，已合并/关闭 16 条），是近期单日 PR 处理量最高的一天；同时新增 **4 条 Issue**，其中 1 条已关闭。项目社区持续围绕会话历史管理、多模型回退、语音转录兼容性等核心功能展开讨论。从合并 PR 的覆盖面来看，音频处理、会话上下文裁剪、记忆系统健壮性等方向均有实质性推进。整体活跃度**高**，代码整合节奏健康。

## 版本发布

无新版本发布。上一个稳定版仍为 **nanobot v0.2.1**。

## 项目进展

以下 PR 已于今日合并/关闭，代表了项目的近期推进方向：

### 已合并/关闭的 PR（共 16 条）

| PR | 摘要 | 类型 | 项目方向 |
|----|------|------|----------|
| #4310 | 修复 `/v1/chat/completions` 返回零 token 用量的问题，转发真实 LLM 用量数据 | Bug 修复 | API 兼容性 |
| #4315 | 在 Dream 读取前丢弃 `history.jsonl` 中格式异常的条目，避免崩溃 | Bug 修复 | 数据健壮性 |
| #4337 | 跳过空/非用户注入负载，防止添加空白消息 | Bug 修复 | 消息处理 |
| #4348 | 修复空闲自动压缩时丢失用户轮次的问题，保留最近后缀及所属用户轮次 | Bug 修复 | 会话记忆 |

**关键进展总结**：
- **API 兼容性**：OpenAI 兼容接口现已返回准确的 token 用量，下游计费与监控集成可正常使用。
- **记忆系统健壮性**：内存加载阶段引入异常防御，不会因单条损坏记录导致整个服务不可用。
- **会话上下文保护**：自动压缩算法不再截断用户轮次，避免了 LLM 在上下文窗口中被截断的历史中启动的情况。

## 社区热点

今日讨论最活跃、评论最密集的 Issue 和 PR：

### #4287 — [bug] 空模型响应未触发备选模型回退
- **作者**: glebov | **评论**: 2 | **👍**: 0
- **链接**: [#4287](https://github.com/HKUDS/nanobot/issues/4287)
- **诉求**: DeepSeek 在高峰时段返回空 completion（无 choices），nanobot 虽检测到错误却将其归类为“不可回退”类型，导致用户卡住无响应。
- **分析**: 该问题直击多模型回退策略的核心漏洞——并非所有空响应都应视为不可回退。用户期望主模型挂掉后能无缝切换到备选模型。当前该 Issue 仍开放，未看到关联 PR，可能是未来版本高优先级修复方向。

### #4345 & #4346 — 图像剥离回退泄漏文件路径
- **作者**: BearMett | **评论**: 0 (Issue) + 0 (PR) | **👍**: 0
- **链接** (Issue): [#4345](https://github.com/HKUDS/nanobot/issues/4345)
- **链接** (PR): [#4346](https://github.com/HKUDS/nanobot/pull/4346)
- **诉求**: 提供者不可知图像剥离回退在重试时，将原始本地文件路径插入文本提示中（如 `/images/photo.jpg`），导致模型幻觉“看到了图片”，并存在信息泄露风险。
- **分析**: 社区反应迅速——作者在提 Issue 当天即提交了修复 PR，将泄漏路径替换为 [unviewable image] 标记。这是一个典型的安全+体验双重问题，修复思路清晰，预计很快会合并。

## Bug 与稳定性

按严重程度排列：

### 严重

| Issue | 摘要 | 状态 | 关联 PR |
|-------|------|------|---------|
| [#4287](https://github.com/HKUDS/nanobot/issues/4287) | 空模型响应未触发备选模型回退，用户无响应 | 待修复 | 无 |
| [#4345](https://github.com/HKUDS/nanobot/issues/4345) | 图像剥离回退泄漏本地文件路径至 LLM 提示 | 已有修复 PR (#4346) | #4346 |

### 中等

| Issue | 摘要 | 状态 | 关联 PR |
|-------|------|------|---------|
| [#4322](https://github.com/HKUDS/nanobot/issues/4322) | 合并 `origin/main` 后 `session_key` 未定义导致启动崩溃 | 待关闭（可能有跟进） | 无 |
| [#4349](https://github.com/HKUDS/nanobot/pull/4349) | 回放窗口裁剪导致长用户轮次中间部分丢失 | 待合并 | #4349 (fix) |
| [#4353](https://github.com/HKUDS/nanobot/pull/4353) | WhatsApp 语音 `.ogg` 经 AssemblyAI 返回空转录 | 待合并 | #4353 (fix) |

### 低影响

| Issue | 摘要 | 状态 | 关联 PR |
|-------|------|------|---------|
| [#4356](https://github.com/HKUDS/nanobot/pull/4356) | Anthropic API 拒绝含有特殊字符的 tool ID | 待合并 | #4356 (fix) |

## 功能请求与路线图信号

### 可能被纳入下一版本的功能

| PR | 功能 | 可能性评估 |
|----|------|------------|
| [#4320](https://github.com/HKUDS/nanobot/pull/4320) | 新增 `tools.audit` 配置与审计工具，用于 Agent 行为可观测性 | **高** — 该 PR 已讨论 3 天，代码完整，如无意外应纳入 |
| [#4330](https://github.com/HKUDS/nanobot/pull/4330) | WebUI 自动化管理视图（列出、过滤、暂停/恢复、删除自动化） | **高** — 已一周以上，功能完备 |
| [#4350](https://github.com/HKUDS/nanobot/pull/4350) | 新增 Keenable 网络搜索提供商 | **中** — 增加第三方集成，属于小幅增强 |
| [#4351](https://github.com/HKUDS/nanobot/pull/4351) | 改进 Mistral API 兼容性（`reasoning_effort` 参数、Markdown 解析等） | **高** — 修复与特定模型供应商的兼容性兼容兼容性兼容性，影响用户 |
| [#4354](https://github.com/HKUDS/nanobot/pull/4354) | WhatsApp 桥接发送已读回执（蓝色双勾） | **高** — 提升社交互动体验，改造成本低 |
| [#4357](https://github.com/HKUDS/nanobot/pull/4357) | 新增 `silent` 标志的定时任务：仅在有报告内容时才响应 | **中** — 减少不必要的消息推送，实用性强 |

### 用户明确提出的新需求

- **Mistral 原生支持**（#4351）— 用户 `La-Volpe` 主动贡献了四大改进点，表明社区对非 OpenAI 模型支持的强烈需求。
- **WebUI 设置面板与 config.json 同步**（#4313）— 另一个来自 `La-Volpe` 的大型 PR，增加温度、工具限制、Dream 等多字段的写 API 与 UI，解决当前 WebUI 修改后需手动编辑 JSON 的痛点。

## 用户反馈摘要

从 Issue 评论中提炼的典型声音：

- **“Model should silently fail over to a fallback”**（#4287）— 用户期望多模型配置下的“无缝回退”体验，当前空响应被视为“不可回退”是设计缺陷。
- **“The text it substitutes reveals the local file system path”**（#4345）— 图像剥离回退在正确思路下意外泄露路径，用户对隐私/安全小题大做。
- **“CJK text or code is far more [tokens than characters]”**（#4352）— 中/日/韩用户受到字符数裁剪 vs token 裁剪的差异化影响，强调国际化场景下的公平性。
- **“I need accurate token usage for billing”**（#4309 → 已修复 #4310）— 下游集成对标准 API 格式的硬依赖，零 token 用量破坏了整套计费系统。

整体来看，用户对其使用场景非常明确（Telegram 聊天、计费集成、多语言支持），对 nanobot 的生产级表现有较高期望。

## 待处理积压

| Issue/PR | 摘要 | 等待时长 | 建议处理优先级 |
|----------|------|----------|----------------|
| [#4287](https://github.com/HKUDS/nanobot/issues/4287) | 空模型响应未触发备选回退 | 6 天 | **高** — 影响生产稳定性，多个用户反映 |
| [#4322](https://github.com/HKUDS/nanobot/issues/4322) | 合并后 `session_key` 未定义崩溃 | 3 天 | **中** — 仅影响特定分支合并场景，但阻塞使用者 |
| [#4303](https://github.com/HKUDS/nanobot/pull/4303) | MCP 服务器关闭时生成器崩溃 | 5 天 | **高** — 影响 `streamableHttp` MCP 用户，产生不可恢复的运行时错误 |
| [#4344](https://github.com/HKUDS/nanobot/pull/4344) | 重构 config 与 agent 循环边界 | 2 天 | **中** — 架构重构，需仔细评审 |
| [#4345](https://github.com/HKUDS/nanobot/issues/4345) | 图像剥离泄漏路径 | 1 天 | **高**（已有修复 PR #4346） |

### 长期未响应项

今日数据显示无超过 7 天未更新的活跃 Issue/PR，项目维护响应良好。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，作为AI智能体与个人AI助手领域的开源项目分析师，我已根据您提供的Hermes Agent项目数据，生成了2026-06-16的项目动态日报。

---

# Hermes Agent 项目日报 | 2026-06-16

## 1. 今日速览

今日项目活跃度**极高**，Issues和PR数量均达到50条的高位，显示出社区反馈和贡献热情十分旺盛。项目在一天内解决了多个关键Bug，尤其在**背景技能验证**、**MCP连接诊断**和**技能安全性**方面取得了重要进展，并收到了大量来自社区的功能请求和本地化贡献。然而，新的Bug报告也揭示了桌面端构建、网关“僵尸”连接和速率限制等领域的潜在风险，需要维护团队重点关注。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日项目在多个关键领域取得了实质性进展，主要体现在以下已合并/关闭的PR和Issues中：

- **核心Agent修复**:
    - **背景技能验证** (#46936, #46937, #46932): 修复了一个重要Bug (`#46897`)，即后台自改进程仅凭工具返回成功就通知用户“技能已创建”，而未验证新技能是否真的能被当前会话加载。现在，通知仅在技能可加载时才会触发，提升了系统的可靠性。合并/关闭的PR除了解决此问题，还为此机制添加了基于“双重检查”的自动纠错功能。
    - **压缩测试清理** (#46938, #46940): 移除了一个过时的、关于压缩边界Bug的测试标记，表明该区域的功能已稳定。

- **网关与平台适配**:
    - **Telegram 列表渲染修复** (#46935): 修复了Telegram平台上markdown列表符号显示为 `\-` 的视觉故障。合并/关闭的PR即使得命令在Telegram上可以正确渲染。
    - **WhatsApp群组白名单** (#43929): 合并了一个重要的PR，修复了WhatsApp桥接器中无法正确应用群组白名单的问题，提升了群聊场景下的权限控制。

- **安全与健壮性**:
    - **技能递归删除安全防护** (#46929): 合并了来自Kilo项目的安全补丁，防止在递归删除技能目录时发生“树逃逸”攻击，增强了Agent的安全性。

- **存量问题清理**:
    - 关闭了关于桌面端文件浏览器刷新按钮异常 (`#46068`)、Kanban worker协议错误 (`#46593`, `#46889`) 以及Bedrock模型兼容性 (`#46888`) 等一系列中等严重性的Bug。

## 4. 社区热点

今日社区讨论热度最高的Issues包括：

1.  **输出长度截断问题** (`#7237`): 评论高达 **50** 条，是今日最受关注的话题。用户在使用CLI聊天或不同网关（Telegram/Discord/Slack）时，频繁因输出长度限制导致输出被截断。这反映了用户对长文本内容处理的迫切需求是当前体验上的一个主要痛点。

2.  **桌面端构建失败** (`#40187`): 一条 **8** 条评论的Issue，报告了在macOS上执行 `hermes update` 或 `hermes desktop` 时，编译Electron应用的最后阶段失败。这说明桌面端的构建流程在某些环境下仍然不稳定，是影响新用户和macOS用户快速入门的关键障碍。

3.  **桌面端工作目录问题** (`#38855`): 有 **4** 条评论，反映了用户设置的工作目录被浏览器localStorage中的旧记忆覆盖，导致新会话无法使用正确配置。这是影响桌面端用户体验的一致性问题。

**诉求分析**: 社区热点清晰地指向了**三个核心诉求**：**更鲁棒的输出处理**（反对截断）、**更稳定的桌面端体验**（反对构建失败和配置不生效），以及**更细粒度的控制**（请求集成Kanban看板）。

## 5. Bug 与稳定性

今日报告的Bug数量众多，按严重程度排列如下：

- **高优先级 (P1)**:
    - **OAuth工具请求被拒绝** (`#46675`): 使用Claude Max OAuth Token时，包含任何工具（如 `mcp_` 开头）的请求都会被拒绝并返回HTTP 400错误。这严重影响了依赖Anthropic提供商的Agent工作流。**目前无相关修复PR**。

- **中优先级 (P2)**:
    - **背景技能创建通知不准确** (`#46897`): 已修复（参见今日项目进展部分）。
    - **桌面端构建失败** (`#46841`): 另一个桌面端构建问题，这次是由于 `@assistant-ui/tap` 依赖的解析错误。**目前无相关修复PR**。
    - **“僵尸”会话导致上下文泄露** (`#46934`): 网关重启后，未完成的 `resume_pending` 会话无法被正确清理，可能导致上下文在不同会话间交叉。**目前无相关修复PR**。
    - **桌面端命令审批预览截断** (`#44888`): 长shell命令在审批对话框中无法完整查看，造成安全风险且无法做出准确决策。**目前无相关修复PR**。
    - **桌面端进程执行段错误** (`#46789`): macOS桌面应用上所有进程执行工具都因段错误（exit code -11）而失败。**目前无相关修复PR**。
    - **MCP服务器配置静默失败** (`#31246`): 当MCP相关Python包未安装时，配置失败但无任何用户可见的错误日志，调试困难。**已有修复PR (#46922) 将日志级别从DEBUG提升至WARNING**。
    - **速率限制重试解析器缺陷** (`#46891`): 代理无法解析绝对时间戳格式的速率限制错误消息，导致重试策略失效。**已有修复PR (#46930)**。
    - **Signal网关审批响应路由错误** (`#46924`): 在Signal平台上，用户的文本审批回复（如“yes”）未被正确路由到审批处理器。**已有修复PR**。
    - **MiMo模型因空内容报错** (`#46756`): 当网络提取工具返回空内容时，MiMo模型会报错。**目前无相关修复PR**。
    - **Cron仪表盘“立即触发”按钮失效** (`#46918`): 桌面端GUI中Cron任务的“立即触发”按钮无法执行任务。**目前无相关修复PR**。

- **低优先级 (P3)**:
    - 包括工作目录覆盖问题 (`#38855`)、自定义模型不显示 (`#40480`)、桌面端文件浏览器刷新异常 (`#46068`) 等。

## 6. 功能请求与路线图信号

今日用户提出的功能请求，结合已有的PR，可能暗示了项目未来的发展方向：

- **高可能性 (已有相关PR)**:
    - **国际化 (i18n) 支持**: 今日收到 **3个** 与本地化相关的PR，包括新增俄语 (`#41677`)、西班牙语 (`#46933`) 以及一个大规模15语言支持的PR (`#38846`)。**这表明桌面端国际化是社区非常关注且正在积极推动的方向，极有可能在下一个版本中合并**。
    - **可配置的MCP和HTTP头**: 用户提出支持**每提供商自定义HTTP头** (`#46877`) 以及将MCP连接失败的日志级别提升 (`#46922`)，与已有PR趋势相符，增强网络和第三方服务的配置灵活性是明确需求。

- **中等可能性 (需求明确，但无直接PR)**:
    - **Kanban看板集成到桌面端** (`#41222`): 评论中提到切换Chat界面和Kanban看板需打开终端，体验割裂。这是一个高价值的功能，但实现工作量大，可能被规划到更长期的路线图中。
    - **全局并发限制** (`#44761`): 自托管LLM的用户希望限制最大并发使用以避免过载。这是一个务实的部署需求。
    - **抑制背景自改进通知** (`#46908`): 用户希望可以配置开关，隐藏后台自改进的“技能已创建”等通知，减少干扰。这是一个提升用户体验的微调。

## 7. 用户反馈摘要

- **痛点**:
    - **输出被截断**: “这个Bug迫使我手动分割长回复，非常影响效率。”
    - **macOS桌面端构建失败**: “我无法在Mac上使用桌面应用，这让我很失望。”
    - **Kanban工作流集成不足**: “每天都要在聊天界面和终端之间来回切换，太麻烦了。”

- **使用场景**:
    - **自托管LLM的并发控制**: “我自托管了一个模型，需要像 `max_concurrent_usage` 这样的参数来防止其过载。”
    - **多代理Kanban工作流**: “Kanban看板是多代理工作流的强大工具，但需要其在桌面应用中无缝集成。”
    - **安全教育**: “`git push --force` 的检测应该更智能，只针对实际命令段，而不是误判日志中的文本。”

- **满意点**:
    - 社区对修复特定Bug（如Telegram列表渲染、技能验证）和新增功能（如本地化、MCP日志改进）的PR表达了积极的反馈。

## 8. 待处理积压

以下ISSUES/PR长期未获回应，需要维护者关注：

1.  **高优先级Bug**: **OAuth工具请求被拒绝** (`#46675`, P1) 作为今日报告的P1级别Issue，目前没有关联的修复PR，应立即评估其严重性并安排处理。
2.  **长期开放的网关功能请求**: **网关平台“僵尸”连接监听器** (`#32574`, P1，创建于2026-05-26）。该项目已提出超过3周，对确保网关集群的稳定性至关重要，应开始规划实施。
3.  **MCP服务器配置问题**: **MCP服务器配置静默失败** (`#31246`, P2，创建于2026-05-24）。虽然已有PR将其日志级别提升，但从根本上看，用户更期望在配置错误时得到明确的提示，而非仅仅更改日志等级。可以考虑更优雅的处理方式。
4.  **桌面端构建问题（macOS）**: **macOS桌面端编译失败** (`#40187`, P2，创建于2026-06-06）。构建失败是阻碍用户采用的硬性问题，应优先解决。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，以下是基于您提供的GitHub数据生成的PicoClaw项目动态日报。

---

# PicoClaw 项目动态日报 | 2026-06-16

## 1. 今日速览

今日项目活跃度较高，核心聚焦于代码健壮性与安全性修复。过去24小时内，共处理了3个Issue（关闭2个，新开1个），并提交了12个Pull Request（PR），其中2个已被合并。项目发布了最新的nightly版本，引入了大量针对潜在panic和资源处理的防御性编程。总体来看，项目正在积极打磨代码质量，提升系统的稳定性和安全性。

- **版本发布**: 发布 `v0.2.9-nightly` 版本。
- **核心关注点**: 通过大量PR修复潜在的panic崩溃问题、资源关闭错误处理不当、以及一个重要的安全绕过漏洞。
- **社区活跃**: 社区对于配置兼容性（如RISC-V上的OpenAI模型）和安全问题（允许列表绕过）表现出关注。

## 2. 版本发布

**新版本**: `v0.2.9-nightly.20260615.13a38bd1`

- **更新内容**: 这是一个Nightly自动构建版本，包含了所有合并到主分支的最新代码。基于本次日报数据，它应包含今日合并的PR（功能与修复）。
- **破坏性变更**: 无（Nightly版本通常不保证稳定性）。
- **迁移注意事项**: 此版本为自动构建，可能存在不稳定因素，建议在非生产环境测试使用。

## 3. 项目进展

今日成功合并了2个PR，标志着项目在代码规范和安全加固方面取得了实质进展：

- **`#3097` feat: add shift-enter hint below chat composer** ([链接](https://github.com/sipeed/picoclaw/pull/3097)): 这是一个用户体验改进，为Web聊天输入框添加了“Shift+Enter换行”的提示，提升了新用户的易用性。
- **`#3126` fix(web): improve launcher allowlist bypass diagnostics** ([链接](https://github.com/sipeed/picoclaw/pull/3126)): 此修复直接回应了`Issue #3069`中报告的安全问题。它改进了`allowed_cidrs`绕过问题的诊断日志，能更清晰地指示`allow_localhost_bypass`配置的状态，帮助管理员识别潜在风险配置。

## 4. 社区热点

**`Issue #3069` [Security] PicoClaw launcher `allowed_cidrs` can be bypassed...** ([链接](https://github.com/sipeed/picoclaw/issues/3069))
- **热度**: 这是一个已关闭的安全相关Issue，虽无评论，但其描述的是一个严重的安全绕过问题，涉及访问控制机制。`PR #3126` 的随即合并表明维护者对此问题高度重视并迅速响应。
- **诉求分析**: 用户/安全研究员的核心诉求是确保网络访问控制（`allowed_cidrs`）在反向代理等常见部署场景下依然有效。这反映了用户对产品部署安全性的核心关切，尤其是在生产环境中。

**`Issue #3015` [BUG] QQ channel connection failed on Windows** ([链接](https://github.com/sipeed/picoclaw/issues/3015))
- **热度**: 该Issue仍处于开放状态，有3条评论，是当前唯一开放的非暂存Issue。
- **诉求分析**: 用户报告在Windows发行版上，QQ频道（channel）启动时因token获取超时而失败。这直接影响了特定平台（Windows）上特定渠道（QQ）功能的使用，是典型的平台兼容性问题，用户迫切希望得到解决。

## 5. Bug 与稳定性

今日报告的Bug主要集中在代码健壮性方面，严重程度从低到高排列：

1.  **（高）`Issue #3069` [Security] allowed_cidrs 绕过** (已关闭，已修复): 这是一个安全漏洞，允许攻击者通过本机反向代理绕过IP白名单。**已有`PR #3126`修复**，并已合并。 ([Issue链接](https://github.com/sipeed/picoclaw/issues/3069))
2.  **（中）多个PR: 修复潜在的panic崩溃**: 共6个PR，由`SiYue-ZO`和`chengzhichao-xydt`提交，**均为开放状态**。
    - `PR #3132` fix: add panic recovery to core-path goroutines ([链接](https://github.com/sipeed/picoclaw/pull/3132))
    - `PR #3131` fix(registry): add ok checks for tool schema type assertions ([链接](https://github.com/sipeed/picoclaw/pull/3131))
    - `PR #3130` fix(seahorse): handle json.Marshal errors in grep and expand tools ([链接](https://github.com/sipeed/picoclaw/pull/3130))
    - `PR #3129` fix(tts): explicitly ignore file.Close() error in write error path ([链接](https://github.com/sipeed/picoclaw/pull/3129))
    - `PR #3128` fix(web): explicitly ignore resp.Body.Close() errors after io.ReadAll ([链接](https://github.com/sipeed/picoclaw/pull/3128))
    - `PR #3127` fix: explicitly ignore Close() errors on directory file descriptors ([链接](https://github.com/sipeed/picoclaw/pull/3127))
    - **分析**: 这些PR集中处理了潜在的panic、类型断言错误、JSON序列化失败和资源关闭错误。这表明当前代码库在这些边界情况下存在稳定性风险，但维护者正在积极进行系统性的修复。
3.  **（低）`Issue #2887` [BUG] .deb version on RISC-V is not functional...** (已关闭): 一个与特定架构（RISC-V）和AI模型（OpenAI）兼容性相关的老问题，已被标记为`stale`并关闭。 ([Issue链接](https://github.com/sipeed/picoclaw/issues/2887))

## 6. 功能请求与路线图信号

- **`PR #2975` feat(telegram): treat reply to bot message as mention in group chats** ([链接](https://github.com/sipeed/picoclaw/pull/2975)): 该PR为Telegram群聊增加了回复即@的功能，这是一个用户呼声很高的UX改进。该PR已开放超过两周，**可能被纳入下一个稳定版本**。
- **`PR #3097` feat: add shift-enter hint below chat composer** (已合并): 该功能已进入`nightly`版本，是Web UI体验持续优化的信号。

## 7. 用户反馈摘要

从`Issue #3015`的评论（3条）中，我们可以提炼出以下用户痛点：
- **平台兼容性痛点**: Windows用户遇到QQ频道功能完全不可用的情况，这会严重阻碍Windows用户的采用。
- **配置复杂性**: 用户需排查token获取问题，涉及网络配置和可能的应用逻辑错误，表明在特定环境下的配置引导或错误提示仍有改进空间。

## 8. 待处理积压

- **`PR #3059` fix: explicitly ignore Close() errors in error paths and retry loops** ([链接](https://github.com/sipeed/picoclaw/pull/3059)): 该PR已开放7天，属于代码规范清理的一部分，与今天大量提交的同类型PR风格一致。鉴于已有多个更新和更晚的类似PR被提出，此PR可能需要维护者评估是否仍需要合并，或已被更新的方案取代。
- **`PR #2975` feat(telegram): treat reply to bot message as mention...** ([链接](https://github.com/sipeed/picoclaw/pull/2975)): 这是一个功能请求PR，已开放超过两周。维护者应考虑其优先级，将其排入路线图或给予作者更多指引，以避免社区贡献者长时间等待。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，现根据NanoClaw项目2026年6月16日的GitHub数据，为您生成以下项目动态日报。

---

# NanoClaw 项目动态日报 | 2026-06-16

**项目名称:** NanoClaw (github.com/qwibitai/nanoclaw)
**报告日期:** 2026-06-16
**数据分析周期:** 2026-06-15 至 2026-06-16

---

### 1. 今日速览

今日项目活跃度较高，核心聚焦于功能增强与基础设施优化。共产生12个Pull Request，主要集中在**WhatsApp媒体处理修复**、**远程MCP服务器支持**、**Strava技能集成**以及**容器性能调优**等关键领域。虽然Issue更新数为0，但密集的PR活动表明开发团队正积极推进从功能开发到问题修复的各个方面。项目整体呈现出高效迭代的态势，正在稳步增强其外部集成能力和运行时稳定性。

### 2. 版本发布

无新的版本发布。

### 3. 项目进展

今日有3个PR被合并/关闭，推动了项目在文档完善和核心修复方面的进展。

- **📝 文档优化 (PR #2775)**: 对OneCLI网关升级的文档进行了澄清。明确了`@onecli-sh/sdk`的破坏性变更仅适用于全新安装，对现有部署的更新不强制升级网关，避免了用户因误解而产生的操作风险。
    - [PR #2775](https://github.com/nanocoai/nanoclaw/pull/2775)
- **🔧 核心修复 (PR #2774)**: 修复了`update-nanoclaw`脚本在更新OneCLI网关依赖版本时未自动升级运行中网关的问题。该修改通过引入版本对比和自动升级逻辑，确保了代码与网关的兼容性。
    - [PR #2774](https://github.com/nanocoai/nanoclaw/pull/2774)
- **🔧 核心修复 (PR #2772)**: 修复了Codex模块中对话存档碎片化的问题。`onExchangeComplete`函数之前为每次交互创建独立文件，现改为按对话线程归档，将对话记录整合到单个文件中，显著提升了数据管理的效率。
    - [PR #2772](https://github.com/nanocoai/nanoclaw/pull/2772)

### 4. 社区热点

今日社区讨论热点集中在**外部系统集成**和 **Agent运行时健壮性** 两大方向。虽然评论数为“undefined”，但多个PR的主题和解决方向反映了社区的普遍关切。

- **集成能力的扩展**: `feat: support remote HTTP/SSE MCP servers` (PR #2776) 和 `feat: add /add-strava skill` (PR #2777) 体现了社区对项目“连接外部世界”能力的强烈需求。前者将MCP服务器的支持从本地进程扩展到了远程HTTP/SSE服务，后者则直接集成了流行的运动数据平台Strava。这表明用户希望NanoClaw能作为一个更开放的AI中枢。
    - [PR #2776](https://github.com/nanocoai/nanoclaw/pull/2776)
    - [PR #2777](https://github.com/nanocoai/nanoclaw/pull/2777)
- **Agent稳定性**: `fix(whatsapp): route inbound media through shared session inbox` (PR #2778) 和 `fix(agent-runner): deliver budget/billing error turns` (PR #2759) 揭示了用户对Agent在日常运行中稳定性和可靠性的高要求。前者解决了WhatsApp媒体文件无法到达Agent的断连问题，后者则确保了预算超限等错误能被正确传达和处理，而非静默丢弃。
    - [PR #2778](https://github.com/nanocoai/nanoclaw/pull/2778)
    - [PR #2759](https://github.com/nanocoai/nanoclaw/pull/2759)

### 5. Bug 与稳定性

今日无新增Bug报告，但以下活跃的PR正积极解决关键稳定性和功能性问题。

- **严重 (功能阻断)**:
    - **WhatsApp媒体路由失败 (PR #2778, OPEN)**: 修复了WhatsApp媒体文件（图片、视频等）无法通过共享会话收件箱正确路由到Agent，导致Agent无法处理这些内容的阻断性问题。
        - [PR #2778](https://github.com/nanocoai/nanoclaw/pull/2778)
- **中等 (功能异常)**:
    - **预算/计费错误被丢弃 (PR #2759, OPEN)**: 修复了Agent在预算或令牌耗尽时产生的错误信息被静默丢弃的问题，确保错误能被正确捕获和处理，防止Agent无声失败。
        - [PR #2759](https://github.com/nanocoai/nanoclaw/pull/2759)
    - **CLI `--id` 参数被忽略 (PR #2628, OPEN)**: `ncl groups create` 命令中用户通过 `--id` 指定的ID被UUID覆盖，无法自定义组ID。
        - [PR #2628](https://github.com/nanocoai/nanoclaw/pull/2628)
    - **跨平台反应(Reaction)功能失效 (PR #2627, OPEN)**: MCP的 `add_reaction` 功能在不同平台（WhatsApp、Telegram等）上因期望的emoji格式（unicode vs. shortcode）不一致而导致失效。
        - [PR #2627](https://github.com/nanocoai/nanoclaw/pull/2627)

### 6. 功能请求与路线图信号

今日多个新增的PR清晰地指明了项目的演进方向，这些功能很可能被纳入下一版本。

- **扩展MCP生态**: `feat: support remote HTTP/SSE MCP servers` (PR #2776) 是本次更新中最具战略意义的特性，它将允许NanoClaw接入任何支持标准HTTP/SSE协议的MCP服务器，极大地拓展了其工具和技能边界。
- **集成外部服务平台**: `feat: add /add-strava skill` (PR #2777) 展示了NanoClaw接入专用MCP接口的能力，为未来集成更多第三方服务（如Slack、Notion、GitHub等）提供了范本。
- **增强Agent运行时资源**: `perf(container): --shm-size=1g + --init` (PR #2771) 是一个直接响应开发者痛点的功能请求。由于Agent内置了Chromium浏览器，Docker默认的64MB共享内存`/dev/shm`经常导致浏览器崩溃，将此值提升至1GB是保障浏览器稳定运行的必要措施。

### 7. 用户反馈摘要

由于今日没有新的Issue讨论，从活跃的修复PR中可以反推用户的痛点：

- **痛点一：Agent与外部断开连接**。用户的核心诉求是Agent能稳定地处理来自各渠道的复杂信息，特别是WhatsApp这种广泛使用的应用。当媒体文件无法送达Agent时，会导致Agent任务直接失败，这是用户无法接受的。
- **痛点二：Agent故障难以排查**。当预算超限等错误被静默丢弃时，用户会困惑于Agent为何停止工作。用户需要清晰、明确的错误反馈，以便快速定位问题。这直接关联到`ncl groups create --id`被忽略等CLI行为不一致的问题，这些都是影响用户信任和调试效率的细节。

### 8. 待处理积压

以下为长期未响应的开放PR，可能包含对用户体验有重要影响的修复，建议维护者关注。

- **[OPEN] fix(cli): honor user-supplied --id in `ncl groups create` and friends** (PR #2628): 自2026-05-27起已开放21天。尽管功能不阻断，但违背了CLI文档和用户预期，影响用户体验。
    - [PR #2628](https://github.com/nanocoai/nanoclaw/pull/2628)
- **[OPEN] fix(reactions): align MCP add_reaction schema with channel reality + Slack bridge translation** (PR #2627): 自2026-05-27起已开放21天。跨平台功能的不一致性会严重损害用户对系统可靠性的信心。
    - [PR #2627](https://github.com/nanocoai/nanoclaw/pull/2627)
- **[OPEN] fix(signal): replace silent restartService failure with explicit error** (PR #2626): 自2026-05-27起已开放21天。无声失败是调试中的大敌，该问题的修复有助于提升Signal信道的部署成功率。
    - [PR #2626](https://github.com/nanocoai/nanoclaw/pull/2626)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我将根据您提供的 NullClaw 项目数据，为您生成 2026-06-16 的项目动态日报。

---

## NullClaw 项目动态日报 | 2026-06-16

### 1. 今日速览

今日项目活跃度中等偏下。社区主要围绕 **Rate Limit 配置不透明** 和 **本地 Ollama 模型回答不完整** 两个问题展开讨论，反映出用户在核心使用场景中的配置困惑与体验落差。一个依赖更新 PR (#956) 处于待合并状态，表明基础架构维护在持续推进。整体来看，项目在稳定性增强和用户体验优化方面存在明确的社区诉求。

### 2. 版本发布

无新版本发布。

### 3. 项目进展

- **依赖更新待合并**: PR #956 由 Dependabot 提出，旨在将 Docker 基础镜像从 Alpine 3.23 升级至 3.24。此更新将带来更小的安全补丁和性能优化，是项目维护健康度的重要体现。目前该 PR 待审核合并。
  - [PR #956: ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group](https://github.com/nullclaw/nullclaw/pull/956)

> **结论**: 今日无主功能或修复性 PR 被合并，项目核心代码未见明显推进。主要进展体现在基础设施的依赖更新上。

### 4. 社区热点

今日最受关注的议题是 **Rate Limit 的可配置性问题**。

- **Issue #957**: 用户 `jacktang` 指出在无记忆模式下使用 NullClaw 作为 Agent 运行时，持续遇到 “The config reader hit a rate limit.” 错误，并直接询问该限制的配置机制和阈值修改方法。该 Issue 虽仅有1条评论，但触发了用户对核心配置机制不透明的痛点，具有普遍性。
  - [Issue #957: Rate limit issue](https://github.com/nullclaw/nullclaw/issues/957)

- **Issue #952**: 用户 `bloodgroup-cplusplus` 报告了使用 Ollama 部署 gemma 模型时，Agent 返回的回答不完整。该问题已存在数日（6月11日创建），且今日有更新，表明社区仍在关注，并期待官方的修复或指引。
  - [Issue #952: [bug] Local model using ollama returns incomplete answers](https://github.com/nullclaw/nullclaw/issues/952)

> **分析**: 社区当前最迫切的需求是 **提升配置的透明度和易用性**。用户希望在文档中清晰了解关键限制（如 Rate Limit）的含义与调优方法，并期望本地模型（如 Ollama）的集成能提供稳定、完整的输出体验。

### 5. Bug 与稳定性

按严重程度排列：

- **严重: Issue #952 - [bug] Local model using ollama returns incomplete answers**：该问题影响本地模型部署的核心使用体验。对于依赖本地模型进行敏感数据处理或离线工作的用户，这是一个关键障碍。目前尚无关联的修复 PR。
  - [Issue #952: [bug] Local model using ollama returns incomplete answers](https://github.com/nullclaw/nullclaw/issues/952)

- **中等: Issue #957 - Rate limit issue**：该问题属于配置与预期行为不符，虽不直接造成系统崩溃，但严重阻碍了用户将项目用于生产环境。
  - [Issue #957: Rate limit issue](https://github.com/nullclaw/nullclaw/issues/957)

### 6. 功能请求与路线图信号

- **Issue #955 - [enhancement] Identity based authentication support for Azure OpenAI LLM Provider**: 用户 `kunalk16` 提出了对 Azure OpenAI 服务进行**基于身份的认证**支持（使用 `DefaultTokenCredential`）。该请求源于企业级 Azure 订阅中的安全策略限制，明确指向了 **企业级部署** 和 **安全合规** 场景。鉴于项目已在支持 Azure 提供商，将此功能纳入下一版本（或近期小版本）的优先级较高。
  - [Issue #955: [enhancement] Identity based authentication support for Azure OpenAI LLM Provider](https://github.com/nullclaw/nullclaw/issues/955)

### 7. 用户反馈摘要

- **用户痛点**: 核心痛点集中在 **配置不透明**  (Issue #957) 和 **本地模型集成不稳定** (Issue #952)。前者导致用户无法有效控制项目行为，后者直接影响核心功能产出。
- **使用场景**: 用户 `jacktang` 将其用作 “无记忆 Agent 运行时”，表明项目被用于轻量级、实时响应的任务场景，对性能和限制有较高要求。
- **不满意的地方**: 用户在 Issue #952 中通过截图详细描述了 “回答不完整” 的问题，表达了对本地模型集成稳定性的不满。在 Issue #957 中，用户对 “rate limit” 概念感到困惑，暗示项目文档在这方面的解释不足。

### 8. 待处理积压

- **Issue #952: [bug] Local model using ollama returns incomplete answers**：自 2026-06-11 创建，已有5天未获得维护者的官方回复或标签。作为影响核心功能的 Bug，该 Issue 的悬而未决可能会降低社区对本地模型部署稳定性的信心。
  - [Issue #952: [bug] Local model using ollama returns incomplete answers](https://github.com/nullclaw/nullclaw/issues/952)

- **Issue #957: Rate limit issue**：昨日新开，是目前社区最活跃的讨论，同样缺少维护者的介入和官方说明。建议项目团队优先响应此 Issue，澄清配置机制。
  - [Issue #957: Rate limit issue](https://github.com/nullclaw/nullclaw/issues/957)

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我将根据您提供的 IronClaw 项目 GitHub 数据，为您生成 2026-06-16 的项目动态日报。

---

# IronClaw 项目动态日报 | 2026-06-16

---

## 今日速览

今日 IronClaw 项目极度活跃，社区贡献与核心开发并行推进。过去24小时内，项目处理了近50个 Issue 和50个 PR，显示出极高的迭代速度。项目核心聚焦于 **Reborn 版本的稳定性、用户体验 (UX) 打磨及学习系统 (Learning System) 的早期引入**。尽管没有新版本发布，但多个重量级 PR 的推进（如下载文件、凭证持久化、失败恢复）标志着 Reborn 正在从功能开发阶段向稳定可用阶段过渡。

## 版本发布

- **无**。今日无新版本发布通知。

## 项目进展

今日项目在核心功能修复和新特性开发上取得了显著进展，主要体现在以下几个已合并或处于活跃状态的 PR：

1.  **自动化与基准测试**：
    -   **[PR #4936] (已合并)**：为 CI 系统增加了 `--framework ironclaw-reborn` 参数，允许维护者针对 Reborn 运行时运行特定的基准测试。这提高了性能测试的灵活性和针对性。

2.  **Trace Commons 集成**：
    -   **[PR #4559] (已合并)**：完成了“agent 驱动的 Trace Commons 集成”功能。现在用户只需在聊天中粘贴一个邀请链接，Agent 即可自动完成注册流程，极大简化了用户上手体验。

3.  **用户认证与会话管理**：
    -   **[PR #4939] (活跃)**：一项重要的基础性修复，明确“凭证属于用户/租户，而非会话线程”。该 PR 解决了跨线程认证不共享的问题，是修复多个 OAuth 相关 Bug (如 #4913、#4825) 的关键步骤。
    -   **[PR #4944] (活跃)**：修复了在 Reborn 中拒绝 OAuth 授权后，Agent 陷入无限重试循环的致命问题。该 PR 将授权被拒的信息反馈给模型，使其能够采取其他行动，而不是死循环。

4.  **新功能与用户体验**：
    -   **[PR #4933] (活跃)**：实现了 Reborn WebChat v2 中的文件下载功能。Agent 现在可以创建 CSV、报告等文件供用户直接下载，是提升 Reborn 实用性的重要一步。
    -   **[PR #4871] (已合并)**：支持了向视觉模型（如 Claude）发送图片附件。附件功能从简单的文本指针升级为真正的多模态内容，是附件功能史诗的重要完成度。

## 社区热点

今日社区讨论高度集中于 **Google Suite 与 GitHub 扩展（Extension）的集成体验**，该领域的问题占据了 Issue 活跃榜的前列。

-   **最受关注 Issue**:
    1.  **[#4825] “always allow” 批准不跨线程 (#4908, #4913)**：用户反馈在 Reborn 的一个会话中允许了某项操作，进入新会话后仍需再次授权。这直接导致了 [#4935]（凭证作用域问题）和 [#4939]（凭证持久化 PR）的提出和解决。
    2.  **[#4908] Google Calendar 扩展显示异常**：扩展已激活，但配置界面仍提示“Activate”，导致用户困惑。
    3.  **[#4907] Google OAuth 成功后运行失败**：OAuth 流程本身成功，但原本触发授权的任务却异常结束，而不是恢复执行。
    4.  **[#4764] 拒绝 shell 批准时无用户反馈**：用户点击“Deny”后，界面无任何变化，工具调用状态依然显示为“pending”，交互反馈极差。

这些热点背后共同的诉求是 **“无缝且可靠的工作流”**。用户期望扩展的安装、授权、使用是一个流畅的整体，任何环节的失败或重复都会严重破坏体验。

## Bug 与稳定性

今日报告的 Bug 主要集中在 Reborn 的扩展（Extension）和授权流程中，问题严重性较高，但大部分已有对应的修复 PR 或明确的分析。

| 严重级别 | Issue | 摘要 | 修复状态 |
| :--- | :--- | :--- | :--- |
| **严重** | [#4907] | Google OAuth 成功但原运行失败 | 待修复 |
| **严重** | [#4764] | 拒绝 shell 批准，工具调用挂起无反馈 | 待修复 (相关 PR #4944) |
| **严重** | [#4761] | Agent 在工具连续失败后无法恢复，直接停止 | 待修复 |
| **高** | [#4908] | Google Calendar 扩展状态显示矛盾 | 待修复 |
| **高** | [#4942] | 工具调用失败信息需手动刷新才能显示 | 待修复 |
| **高** | [#4921] | Gmail 扩展授权成功后，相关提示立即失败 | 待修复 |
| **中** | [#4917] | 定时自动化任务从不执行 | 待修复 |
| **中** | [#4857] | 未配置 LLM 时，UI 错误显示 NEAR AI 提供者为 Active | 待修复 |
| **低** | [#4759] | 工作区路径在使用相对路径时被重复 | **已关闭 (已修复)** |

## 功能请求与路线图信号

-   **自动化代码审查 ([#4880])**：这是一个明确的路线图信号，期望使用 AI 自动完成 PR 的初步审查、评论处理和准备合并的工作。这表明项目在追求更高效的开发协作流程。
-   **附件功能成体系推进**：从 **Issue #4644** 到 **PR #4871 (已合并)** 和 **PR #4902 (活跃)**，可以看出 IronClaw 正在有条不紊地构建一个通用、可扩展的附件管道。这不仅是 Bug 修复，更是一个重要的平台级特性，预计会被纳入下一个版本。
-   **“学习”系统 (Learning System)**：**PR #4937** 和 **#4938** 引入了一套标志位控制的“学习”系统，旨在让 Agent 能够记住用户偏好或从错误中学习。这是项目向更智能、更个性化助手演进的重要一步，虽然目前属于实验性特性，但路线图意义重大。

## 用户反馈摘要

-   **主要痛点**：**流程断裂** 是今日用户反馈的最核心痛点。例如，扩展安装后下一步操作不明确 (#4890)，授权被拒后无反馈 (#4764)，授权成功后任务不恢复 (#4907)，以及需要反复授权 (#4825)。用户期望的是一个连贯、可预测的交互流程。
-   **具体场景**：用户测试了“使用 Google 日历查看事件”、“使用 Gmail”、“在 GitHub 上分析仓库”等真实工作场景，遭遇了上述各类问题，这反映出 Reborn 在与真实第三方服务集成时的稳定性还有待加强。
-   **正面反馈**：尽管问题多多，但高频的 Issue 提交和 PR 合并显示了项目团队对反馈的积极响应。如 **Issue #4800** 和 **#4886** 等在短时间内被关闭并修复，这本身就是一种积极的信号。

## 待处理积压

-   **[PR #3705] [#3707]**：两个由 `dependabot` 提出的依赖项更新 PR，已开放一个月，风险较低但建议定期合并以保持依赖健康。
-   **[Issue #4644] 附件管道**：这是一个大型的史诗级 Issue，虽然已经有多个相关 PR 被合并或活跃，但其完整落地（包括在所有渠道生效、格式注册表等）仍需持续关注。
-   **[Issue #4917] 自动化运行问题**：定时自动化任务完全不执行，这会影响依赖于定时任务的用户场景，建议提高处理优先级。

---
*报告结束时间：2026-06-16 17:00 UTC*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

好的，这是根据您提供的 LobsterAI GitHub 数据生成的 2026-06-16 项目动态日报。

---

## LobsterAI 项目动态日报 | 2026-06-16

### 1. 今日速览

项目今日活跃度较高，主要体现为 **PR 合并与功能优化**。过去 24 小时内共处理了 11 个 PR，其中 5 个已被合并或关闭，重点围绕**语音输入**和 **Artifact (文档分享与预览)** 两大功能进行优化与迭代。同时，社区报告了两个关于**本地导入技能**的稳定性问题（重复添加、无成功反馈），目前处于开放状态，值得关注。此外，有 4 个依赖更新 PR 保持开放，表明项目正在进行常规的 CI/CD 维护。

### 2. 版本发布

**无**

过去 24 小时内无新版本发布。

### 3. 项目进展

今日多个核心功能模块取得了实质性进展，主要集中于**语音输入重构**和**文档分享预览**。

- **🛠️ 语音输入功能重构**：`#2163` [CLOSED] 和 `#2160` [CLOSED] 两个 PR 对协作场景下的语音输入进行了重大改造。核心变化是移除了旧的短时 ASR 上传流程，**统一改为纯实时语音识别**，并清理了相关配置项。`#2162` [CLOSED] 在合并后解决了冲突，确保了取消守卫等功能的完整性。
    - 链接: [PR #2163](https://github.com/netease-youdao/LobsterAI/pull/2163)
    - 链接: [PR #2160](https://github.com/netease-youdao/LobsterAI/pull/2160)
    - 链接: [PR #2162](https://github.com/netease-youdao/LobsterAI/pull/2162)

- **📄 文档 Artifact 功能上线**：`#2159` [CLOSED] 是一个重要功能合并，它正式支持了文档类型（DOCX, PPTX, XLSX, PDF, CSV, TSV ）的 Artifact 分享与预览。该 PR 包含了文件打包、类型校验、PDF 原生预览兜底、CSP 策略调整等一系列优化，大大丰富了 Artifact 的适用场景。
    - 链接: [PR #2159](https://github.com/netease-youdao/LobsterAI/pull/2159)

- **📌 后台任务通知机制**：`#1428` [OPEN] 是一个待合并的功能请求 PR，旨在实现当会话在后台完成或报错时，通过系统通知提醒用户。该 PR 已存在较长时间，如果合并，将提升用户在使用非前台任务时的体验。
    - 链接: [PR #1428](https://github.com/netease-youdao/LobsterAI/pull/1428)

- **🧹 日常维护**：`#2161` [CLOSED] 更新了“关于”页面信息；`#1277` [OPEN] 及多个 CI 依赖更新 PR (`#2164`, `#2165`, `#2166`, `#2167`) 正在进行中。

### 4. 社区热点

今日社区讨论热度较低。所有开放的 Issues 和 PRs 评论数均较少。其中，**`#1426`** 和 **`#1427`** 作为近期报告的 Bug，虽然评论不多，但反映了用户对本地技能管理功能易用性的直接反馈，是潜在的用户体验痛点。

- 链接: [Issue #1426](https://github.com/netease-youdao/LobsterAI/issues/1426)
- 链接: [Issue #1427](https://github.com/netease-youdao/LobsterAI/issues/1427)

### 5. Bug 与稳定性

过去 24 小时**未报告新的 Bug**。以下为两个遗留的、与本地技能导入相关的 Bug，由同一用户报告，已被标记为 `stale`：

- **中等严重性** `#1426`: **上传本地技能后无成功提示，列表未刷新**。用户在发起添加技能操作后，得不到任何成功与否的反馈，界面也未更新，会造成操作困惑。
    - 状态：开放且未 stale 中。
    - 链接: [Issue #1426](https://github.com/netease-youdao/LobsterAI/issues/1426)

- **中等严重性** `#1427`: **可重复添加同名技能**。系统缺乏对已导入技能的去重校验，导致用户可能不小心创建多个重名技能，造成管理混乱。
    - 状态：开放且未 stale 中。
    - 链接: [Issue #1427](https://github.com/netease-youdao/LobsterAI/issues/1427)

### 6. 功能请求与路线图信号

- **后台任务通知** (`#1428`): 这仍然是最突出的功能请求。随着语音输入和 Artifact 等功能的完善，用户在运行长时间任务时切换到后台的需求会增加，系统通知能显著提升用户体验。该 PR 已等待合并超两个月，可能被安排进下一个版本。
    - 链接: [PR #1428](https://github.com/netease-youdao/LobsterAI/pull/1428)

- **文档 Artifact 深度集成** (`#2159`): 刚刚合并的 PR 是未来版本的重要基础。可以预见，后续版本可能会围绕文档 Artifact 进行更深度的优化，例如支持更多文件格式、增强编辑能力和协作功能。

### 7. 用户反馈摘要

- **痛点 - 本地技能管理体验不佳**：用户 `devilszy` 在 `#1426` 和 `#1427` 中清晰地表达了在“通过本地添加技能”时遇到的问题：**缺乏操作反馈**（无成功提示）和**数据一致性差**（重复添加）。这暴露出本地技能导入流程的交互设计和数据校验存在不足。

### 8. 待处理积压

以下 PR 已开放较长时间，建议维护者关注其进展。

- **`#1428` [stale] feat(cowork): 会话完成/报错时推送系统通知**：这是一个有价值的用户体验改进，但已 stale 两月有余。建议评估是否合并或给予作者反馈。
    - 链接: [PR #1428](https://github.com/netease-youdao/LobsterAI/pull/1428)

- **`#1277` [stale] chore(deps-dev): bump the electron group**：这是一个长期的依赖更新PR，从4月初就存在。为了项目安全与稳定性，建议尽快处理合并。
    - 链接: [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277)

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-06-16

---

## 1. 今日速览

Moltis 项目今日整体活跃度中等偏上，重点集中在外部代理模型选择与上下文命令支持两大功能的 PR 提交上。过去24小时内无新的 Issue 开启或关闭，也无新版本发布，但有两项重要 PR（#1125、#1124）处于开放待合并状态，标志着项目正在向更灵活的集成能力和更智能的对话上下文管理方向推进。项目整体处于功能扩展阶段，暂无 Bug 报告或稳定性干扰。

---

## 2. 版本发布

无

---

## 3. 项目进展

今日两项开放 PR 均来自核心贡献者 `gptme-thomas`，分别针对外部代理的模型/努力度选择以及对话上下文自动化，体现了对用户自定义和动态交互体验的重视：

- **[#1125] Support model and effort selection for external agents**（待合并）  
  该 PR 为外部代理提供商添加了第一级的模型和努力度（effort）选择支持。具体包括：`models = [...]` 和 `efforts = [...]` 配置项、在 `/model` 中按 `external-agent/<kind>` 分组展示外部代理条目，以及模型/努力度元数据的持久化。  
  链接：https://github.com/moltis-org/moltis/pull/1125

- **[#1124] Add context command support for chat turns**（待合并）  
  该 PR 引入了可选的 `chat.context_command` 配置项，在每个对话轮次之前运行，并将 stdout 附加到提示上下文中。这项功能使得部署环境能够注入动态运行时上下文，无需用户手动粘贴信息到每次会话中，极大提升了自动化程度。  
  链接：https://github.com/moltis-org/moltis/pull/1124

**研判**：这两项 PR 若合并，将显著增强 Moltis 的扩展性——外部代理支持更细致的配置（模型选择、努力度），同时对话系统将获得更智能的上下文管理能力。项目在“开放集成”和“智能对话”两个关键路线上迈出了实质性一步。

---

## 4. 社区热点

今日无新增 Issue，社区讨论集中在两项开放 PR 上。由于均未有评论（评论字段显示 `undefined`），目前尚未形成广泛讨论。但从 PR 内容看，以下两点值得关注：

- **#1125 的外部代理模型选择**：可能吸引希望将 Moltis 与多种 AI 后端（如 OpenAI、Anthropic、本地模型等）结合的开发者，关注点在于配置灵活性、兼容性及性能开销。
- **#1124 的上下文命令**：开发者社区对“自动化上下文注入”有潜在高需求，特别是需要集成系统信息、实时日志或环境变量的部署场景。

建议维护者主动在 PR 中发起讨论，邀请社区反馈使用场景和潜在痛点。

---

## 5. Bug 与稳定性

过去24小时内未发现任何新增 Bug、崩溃或回归问题报告。

项目当前稳定性良好，无紧急修复需求。

---

## 6. 功能请求与路线图信号

尽管今日无新功能请求 Issue，但从两项 PR 可以推断出以下路线图信号：

- **外部代理深度集成**：PR #1125 表明 Moltis 正在构建更完善的多提供商抽象层，未来可能支持更多代理类型（如工具调用型、流式型），并可能引入模型选择策略（如 fallback、成本优化）。
- **动态上下文注入**：PR #1124 标志着从“静态配置”向“运行时上下文”的转变，未来可能扩展为支持多命令、条件执行、权限控制等，这符合“可编程对话”的长期愿景。

**建议**：社区若对自动上下文注入有进一步需求（如支持环境变量、文件读取、shell 管道），可在此 PR 下提出。

---

## 7. 用户反馈摘要

今日无新 Issue 或评论，暂无直接用户反馈可供提炼。

---

## 8. 待处理积压

过去24小时内无长期未响应的 Issue 或 PR。当前所有两项开放 PR（#1124、#1125）均为昨日（2026-06-15）创建，尚在合理等待合并窗口内。

**观察点**：若未来48小时内无维护者审核或社区反馈，建议通过 @ 方式提醒 `gptme-thomas` 更新或推动合并。

---

*本日报由 AI 智能体分析师生成，数据截止 2026-06-16 07:00 UTC。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，根据您提供的CoPaw (QwenPaw) GitHub数据，现为您呈上2026年6月16日的项目动态日报。

---

# CoPaw (QwenPaw) 项目动态日报 | 2026-06-16

## 1. 今日速览

项目今日整体活跃度**极高**。过去24小时内，Issues和PR更新均达到50条，社区讨论与代码提交都非常密集。核心关注点集中在**v1.1.11.post2版本的稳定性与Bug修复**（如附件下载、插件依赖、客户端资源占用），同时，**Token用量可视化**和**用户体验优化**（如UI布局、桌面端托盘功能）是社区呼声最高的两大方向。值得注意的是，与此前版本发布周期相比，本次至少24小时无新版本发布，社区在等待一个Bug修复集中版。

## 2. 版本发布

*暂无新版本发布。*

上一版本 `v1.1.11.post2` 是当前社区讨论的热点，多个严重Bug均与该版本相关，表明社区正处在一个等待Hotfix或Patch版本发布的窗口期。

## 3. 项目进展

今日项目代码合并与功能推进速度较快，关键进展如下：

- **Bug修复**：
    - **[PR #5146]** 修复了技能斜杠指令在Console中显示混乱的问题，该PR已合并。[查看详情](https://github.com/agentscope-ai/QwenPaw/pull/5146)
    - **[PR #5192]** 修复了在Windows系统下因Rich控制台和历史命令导致的客户端崩溃问题。[查看详情](https://github.com/agentscope-ai/QwenPaw/pull/5192)
    - **[PR #5150]** 增强了混元（Yuanbao）频道的功能，支持了机器人消息过滤和环境变量，提高了安全性。[查看详情](https://github.com/agentscope-ai/QwenPaw/pull/5150)

- **功能增强**：
    - **[PR #4310] & [PR #4433] & [PR #5130]** 多项关于 **Token用量显示** 的PR（#4310、#4433）和 **逐条消息Token/上下文用量弹窗**（#5130）均已被合并。这标志着用户期待已久的上下文可视化管理功能已经正式进入代码库，将成为后续版本的重要特性。 [PR #5130 查看详情](https://github.com/agentscope-ai/QwenPaw/pull/5130) | [PR #4310 查看详情](https://github.com/agentscope-ai/QwenPaw/pull/4310)
    - **[PR #5123]** 更新了技能市场，优化了UI并新增了分类预览功能。[查看详情](https://github.com/agentscope-ai/QwenPaw/pull/5123)
    - **[PR #4495]** 优化了Cron任务验证，无效设置将返回更合理的422状态码。[查看详情](https://github.com/agentscope-ai/QwenPaw/pull/4435)

**项目里程碑评估**：Token用量显示从最初的Feature Request到多个PR被合并，表明项目在新功能的闭环能力上非常出色。这是项目在**可观测性**上的一个重大迈进。

## 4. 社区热点

社区讨论焦点主要集中在 **Bug修复** 和 **用户体验** 上，评论数最高的内容如下：

1.  **[Issue #1911] 小艺频道集成问题**：该Issue自3月创建，今日仍有新评论，是社区最活跃的话题。用户尝试集成华为“小艺”频道后，手机端无法正常回复，怀疑是CoPaw或小艺平台的Bug。**诉求**：希望得到官方技术支持，明确问题归属。 [查看详情](https://github.com/agentscope-ai/QwenPaw/issues/1911)
2.  **[Issue #5140] v1.1.11.post2 附件下载404**：已有6条评论，用户连续多个版本反馈附件下载问题，从之前的无反应升级到现在的404报错。**诉求**：彻底修复该回归Bug，确保所有类型文件（包括docx, pdf）下载正常。 [查看详情](https://github.com/agentscope-ai/QwenPaw/issues/5140)
3.  **[Issue #5181] 插件依赖安装导致CMD窗口弹窗**：用户反馈在PyPI连接不稳定时，插件安装失败会死循环弹窗。**诉求**：优化依赖安装过程，增加错误处理，避免影响用户桌面体验。 [查看详情](https://github.com/agentscope-ai/QwenPaw/issues/5181)

## 5. Bug 与稳定性

今日报告的Bug较多，按其严重程度排列如下：

**严重 (Critical)**
- **上下文压缩导致信息完全丢失** ([#5171](https://github.com/agentscope-ai/QwenPaw/issues/5171)): 当人设文件Token数超过阈值时，压缩会将上下文清零，导致任务无法继续进行。**暂无Fix PR。**
- **Windows客户端进程数持续增加，内存占用过高** ([已关闭 #5138](https://github.com/agentscope-ai/QwenPaw/issues/5138)): 用户报告内存占用可达90%以上。**该问题已被关闭，说明已有修复/处理方案，但社区可能仍在等待验证。**
- **对话思考逻辑陷入死循环** ([#5162](https://github.com/agentscope-ai/QwenPaw/issues/5162)): 用户报告agent思考卡在死循环。**暂无Fix PR。**

**高 (High)**
- **v1.1.11.post2 附件下载仍报错404** ([#5140](https://github.com/agentscope-ai/QwenPaw/issues/5140)): 已多次反馈的基础功能回归Bug。**暂无Fix PR。**
- **插件依赖安装导致CMD窗口持续弹窗** ([#5181](https://github.com/agentscope-ai/QwenPaw/issues/5181)): 严重影响用户体验。**暂无Fix PR。**
- **上下文压缩统计值与实际API输入不符** ([#5122](https://github.com/agentscope-ai/QwenPaw/issues/5122)): 技能和MCP工具元数据可能未计入压缩范围，导致上下文膨胀。**暂无Fix PR。**

**中 (Medium)**
- **提交给agent的任务 (submit_to_agent) 会话路径错误** ([#5025](https://github.com/agentscope-ai/QwenPaw/issues/5025)): `FileNotFoundError`。**暂无Fix PR。**
- **本地模型提供商在v1.1.11.post2中不显示** ([#5184](https://github.com/agentscope-ai/QwenPaw/issues/5184)): 新版本引入的功能性Bug。**暂无Fix PR。**

**低 (Low)**
- Wayland 下宠物功能无法使用 ([#5183](https://github.com/agentscope-ai/QwenPaw/issues/5183))、Python 3.13 下 TeamChat 插件安装失败 ([#5166](https://github.com/agentscope-ai/QwenPaw/issues/5166)) 等兼容性问题。

## 6. 功能请求与路线图信号

- **Token/上下文可视化** (已实现)：从多个Feature Request ([#4284](https://github.com/agentscope-ai/QwenPaw/issues/4284), [#3366](https://github.com/agentscope-ai/QwenPaw/issues/3366)) 到PR合并 (#4310, #4433, #5130)，该功能几乎确定会进入下一版本。
- **对话队列** (高优先级候选)：用户 [#5103](https://github.com/agentscope-ai/QwenPaw/issues/5103) 强烈要求。已有相关PR [#5158](https://github.com/agentscope-ai/QwenPaw/pull/5158) 处于Open状态（`Not Ready`），表明开发团队正在推进。
- **桌面版系统托盘/开机自启** (高优先级候选)：用户 [#5164](https://github.com/agentscope-ai/QwenPaw/issues/5164) 提出，反映了桌面客户端用户对“常驻后台”功能的普遍需求。
- **可观测性/追踪集成** (路线图中)：用户 [#5009](https://github.com/agentscope-ai/QwenPaw/issues/5009) 提出的与Langfuse等平台集成的需求，虽然当前优先级不高，但符合项目向企业级发展的长期方向。
- **集成Headroom压缩层** (前瞻性探索)：用户 [#5063](https://github.com/agentscope-ai/QwenPaw/issues/5063) 提出的压缩方案，可大幅降低Token消耗，这是提升项目竞争力的关键点。

## 7. 用户反馈摘要

- **满意点**：
    - **开发者对需求的响应速度**：多个用户提出的“Token显示”需求，在短期内就看到了对应的PR被合并，社区普遍赞赏这种高效闭环。
    - **生态初步形成**：用户注意到OpenClaw等竞品的功能，并希望QwenPaw借鉴，这表明用户对项目有较高期待并愿意提出建设性建议。
- **痛点/不满意点**：
    - **版本回归Bug**：`v1.1.11.post2` 在附件下载方面出现回归，用户在多个Issue下表达了强烈不满，希望团队能严格进行回归测试。
    - **“从CoPaw到QwenPaw”改名遗留问题**：Issue #5104 反馈了改名导致的数据目录混乱和插件安装失败，影响了初学者的体验。
    - **长对话稳定性**：多个Issue反馈长对话后Agent无响应或死循环，这是当前版本最影响核心体验的痛点。
    - **企业微信审批流程不完整**：Issue #5190 指出开启访问控制后，用户找不到审批入口，这是一个产品流程上的明显缺失。

## 8. 待处理积压

- **[Issue #1911] 小艺频道集成问题** (创建于2026-03-20)：此问题已持续近3个月，是该报告周期内评论最多的Issue。尽管用户提供了详尽的操作记录，但至今未有官方回应或进展，建议维护团队优先排查此渠道的集成逻辑。 [查看详情](https://github.com/agentscope-ai/QwenPaw/issues/1911)
- **[PR #5088] Governance和沙箱接口的初步讨论** (创建于2026-06-10)：作为一项架构方向的探索性PR，目前仍在审查阶段，长期未更新可能会影响后续高级功能的开发（如插件安全沙箱）。 [查看详情](https://github.com/agentscope-ai/QwenPaw/pull/5088)
- **“[Bug]: 上下文压缩保留缺少按条数保留...导致信息完全丢失”** ([#5171](https://github.com/agentscope-ai/QwenPaw/issues/5171))：这是极其严重的功能性Bug，可能导致用户在不知情的情况下丢失所有对话上下文，需立即关注并设计修复方案。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-06-16

## 1. 今日速览

ZeroClaw 项目在过去24小时内保持极高活跃度：50条Issues更新（其中46条处于活跃状态）与50条PR更新（47条待合并），表明社区贡献与核心开发并行推进。安全与稳定性是今日核心关切，多个高严重性Bug（如MCP作用域失效、delegate安全约束、WebSocket认证失败）被报告或修复。此外，多项面向v0.8.1与v0.9.0的跟踪Issue已激活，预示路线图执行进入关键阶段。未发布新版本。

## 2. 版本发布

无。

## 3. 项目进展

过去24小时内，共有3个PR被合并/关闭，项目在以下方面取得关键推进：

- **认证修复(PR #7732)**： 修复`zeroclaw self-test`在WebSocket探测中未携带`Authorization: Bearer` Token及`?agent=`参数的问题，解决了网关认证启用时的401误报。该修复对齐了真实客户端连接流程，提升了Gateway基础认证通道的可靠性。
- **Telegram频道优化(PR #7723)**： 当机器人回复自己的消息时，绕过`mention_only`门控逻辑。解决了在`mention_only=true`模式下，用户回复机器人消息时需手动@mention才能触发响应的体验问题。
- **Lark/飞书频道修复(PR #7724)**： 将`ack_reactions`配置正确接入Lark频道，使得开发者可以选择关闭快速表情响应（fast-ack），避免不必要的API调用和用户干扰。

此外，项目已合并/关闭4个Issue（含`#1458`、`#6683`、`#7542`、`#7005`），涉及CA证书支持、技能冷却补丁、`ask_user`工具修复及用户界面字符串本地化等议题。

## 4. 社区热点

**Issue #7673 「RFC：原生上下文压缩修饰器」（3条评论）**  
作者`ConYel`提出在`ModelProvider`间插入`CompressionDecorator`，自动压缩`ChatRequest`中的`system`与`user`消息，以应对LLM长上下文空间浪费。该设计建议将上下文压缩提升为平台原生能力，而非依赖外部中间件。

**Issue #7674 「RFC：WebAssembly优先，消除Node.js依赖」（1条评论）**  
作者`ConYel`建议移除ZeroClaw中最后两个npm接触点：Web UI构建及内置JavaScript运行时，完全迁移到WASM生态系统。该提议引发了关于供应链安全与构建复杂性的讨论——虽然核心是Rust项目，但仍有两条「npm尾巴」需要处理。

**Issue #7675 「RFC：加固CI管线」（1条评论）**  
与上述两条同源，提出在CI中加入供应链扫描、软件物料清单(SBOM)生成和证明性构建。三连RFC表明社区对安全合规与构建透明度的关注正在上升。

## 5. Bug 与稳定性

过去24小时内报告了一批高优先级Bug，部分已有对应修复PR。

| 严重度 | Issue/PR | 描述 | 状态 |
|--------|----------|------|------|
| S1 - 工作流阻塞 | `#7733` `#7542` | `mcp_bundles` 解析但运行时从未强制执行，导致安全隔离静默失效；`ask_user` 在Gateway WebSocket会话中立即失败 | **均未修复**，`#7733` 状态为 accepted |
| S2 - 行为降级 | `#7733` | 同上，`[mcp_bundles]` 配置被静默忽略 | 未修复 |
| S2 | `#7741` | 响应缓存对 `[IMAGE:...]` 标记未做跳过，导致缓存命中可能返回错误上下文 | 未修复 |
| S2 | `#7742` | `set_tool_dispatcher()` 后未刷新系统提示，导致会话中工具变更后仍然使用旧工具指令 | 未修复 |
| S2 | `#7740` | 对缺失技能的安装建议使用了未过滤的原始工具注册表，可能导致向用户推荐其实际无权调用的工具 | 未修复 |
| S2 | `#7739` | 邮件OAuth刷新未使用退避重试，用户连续操作可能触发单点故障 | **已有修复PR #7745** |
| S2 | `#7738` | 邮件UID生成退回到随机UUID，导致IMAP重连后相同邮件产生不同本地ID | 未修复 |
| 回归 | `#7542` (已关闭) | Gateway WebSocket `ask_user` 工具失败 | 已在v0.8.x系列中修复并关闭 |

## 6. 功能请求与路线图信号

### 高优先级（有望纳入v0.8.1 / v0.9.0）

- **多代理路由 (`#2767`)**： 在单Gateway内隔离多个agent及其workspace/session，通过绑定路由入站。该需求已标记为`priority:p2`并带有`accepted`状态，是v0.9.0的核心能力基。
- **渠道回复意图预检 (`#6067`)**： 允许回复意图分类使用更小/更快的模型并设置硬超时，避免主模型被阻塞。已有`accepted`状态，预计将在v0.8.1周期内完成。
- **Slack线程回填 (`#6055`)**： 在`strict_mention_in_thread`模式下，首次@mention时自动从`conversations.replies`接口拉取历史回复，解决用户必须每条都@mention的痛点。**已有`accepted`状态**。

### 新提议且快速引起关注

- **Per-agent提示注入模式覆盖 (`#7749`)**： 允许每个Agent独立设置`prompt_injection_mode`，解决全局设置下无法混合运行`full`和`compact`模式的问题（发布不足6小时即获关注）。
- **显式delegate权限模式 (`#7743`)**： 新增`deny-by-default`委托模式，让调用方明确授权接收方使用自己的工具和审批策略，解决了`#7470`和`#7514`中被发现的安全漏洞。

### 持续跟踪

- **v0.8.1集成/渠道/提供者队列 (`#6970`)**
- **v0.9.0认证与安全破坏变更队列 (`#7432`)**
- **测试覆盖率跟踪 (`#7685`)**

以上跟踪Issue均处于`accepted`状态，并有活跃的PR输入。

## 7. 用户反馈摘要

从过去24小时的Issue评论中，提炼出以下真实用户痛点与期望：

- **「MCP作用域配置被静默忽略」** (`#7733`) —— 用户`metalmon`发现`[mcp_bundles.<alias>]`和`per-agent mcp_bundles`配置虽然能被Config解析和展示，但运行时完全没有执行任何隔离逻辑。这是一个安全相关功能在发布后实际无效的案例，引发了关于测试覆盖与功能门控的讨论。
- **「WebSocket 401认证失败」** (`#7038`) —— 用户`dgreffrath`报告了`zeroclaw check` 11/11项测试全部变成401，即便Gateway认证配置正常、手动WebSocket也能通过Bearer Token工作。该issue目前处于`needs-repro`状态，但PR #7732的同行修复显示这是一个认证头缺失问题。
- **「别名编辑体验不佳」** (`#7467`, `#7468`) —— 用户`damajor`在TUI中编辑字符串时无法使用方向键导航，打出错误也无法局部修改，只能重新输入全部内容。同时希望支持别名重命名操作。这两条Issue被标记为`zerocode`（无代码，即接口层）且`status:accepted`，预示TUI体验改进接近交付。
- **「代理间的委托安全模型缺失」** (`#7743`) —— 用户`Audacity88`指出，当前的委托工具以调用者的权限集传递，接受者无法访问自己配置的完整工具集。该功能设计不佳会导致安全边界模糊，需要`deny-by-default`模式来明确权限移交。

## 8. 待处理积压

以下为长期未关闭或当前无直接修复PR的主要议题，提醒维护者关注：

| 编号 | 标签 | 核心问题 | 上次活跃 | 阻塞点 |
|------|------|----------|----------|--------|
| `#551` | `security` `blocked` | 自签名证书端点HTTPS请求选项缺失，用户无法连接本地自建OpenAI兼容端点 | 2026-06-15 | `status:blocked` |
| `#6074` | `ci` `help wanted` | 153个提交在2026-03-28被单次回滚中丢失，需要审计和恢复 | 2026-06-15 | 尚未有人着手遍历提交Diff |
| `#6074`同上 | — | 同上 | — | — |
| `#7038` | `needs-repro` `needs-author-action` | WebSocket认证401问题，需作者提供可复现环境 | 2026-06-15 | 等待用户提供更详细的步骤或配置 |
| `#6698` | `bug:medium` | Fluent 本地化文件落后于英文源文件（如zh-CN缺少`tools.ftl`） | 2026-06-15 | 非紧急但影响国际化质量，暂无明确认领人 |
| `#7486` | `ci` `accepted` | 跨平台Clippy覆盖率持续走低，macOS/Lint上的特定门控Rust代码未被Moniter | 2026-06-15 | 尚无实现者；可能影响新的PR合入 |

**总结**：ZeroClaw项目日活跃度极高，安全性是当前压倒性的叙事主线。既有MCP作用域安全静默失效这样的设计/实现断层，也有delegate权限模型这样的新功能安全设计提上议程。两频道的用户端修复（Telegram提及绕过、Lark ack_reactions）显示开发者同时关注用户体验打磨。路线图方面，v0.8.1集成和v0.9.0安全扩展栈的跟踪Issue已被激活且输入充足，预期未来7-14天会有可观测的合并闭环。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*