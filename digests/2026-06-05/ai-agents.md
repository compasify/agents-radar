# OpenClaw 生态日报 2026-06-05

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-05 00:28 UTC

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

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我将根据您提供的 OpenClaw 项目 GitHub 数据，为您生成 2026-06-05 的项目动态日报。

---

## OpenClaw 项目日报 (2026-06-05)

### 1. 今日速览

今日项目活跃度极高，24 小时内产生了 500 条 Issue 和 500 条 PR 更新，表明社区参与度与开发强度均处于高位。然而，项目状态喜忧参半：一方面，针对 2026.6.1 版本的新 Bug（如 OpenAI 传输失败、SQLite 迁移丢失 Cron 状态）迅速涌现，为稳定版本蒙上阴影；另一方面，大量紧急修复 PR（P1 级）已提交并处于审查中，体现了维护团队对稳定性问题的快速响应。项目整体处于“高开发投入、高社区反馈，但稳定性承压”的状态。

### 2. 版本发布

今日无新版本发布。

### 3. 项目进展

今日合并/关闭的 PR 和 Issue 推动了以下关键进展：

- **稳定性和 Bug 修复**：
    - **完成**：修复了 Feishu (飞书) 消息派发崩溃 (`#88234`) 和会话模型被错误加入回退列表 (`#88039`) 的回归问题。
    - **进行中**：多个高优先级 PR 提交，旨在解决 `2026.6.1` 版本的严重 Bug，包括 `openai-chatgpt-responses` 传输失败 (`#90487`)、Cron 状态在迁移中被清除 (`#90488`)、以及会话模型路由漂移 (`#90411`) 等。
- **功能推进**：
    - **进行中**：`#90478` 提交了一个大型功能 PR，旨在支持从 GitHub 安装 ClawHub 技能，这将极大扩展 OpenClaw 的功能生态。
    - **进行中**：`#90480` 提交了 WhatsApp 渠道的 QA 覆盖范围，旨在增强该渠道的测试可靠性。

尽管有 0 个新 Release，但针对 `2026.6.1` 版本 Bug 的快速修复 Patch 很可能在未来 24-48 小时内发布，以稳定当前版本。

### 4. 社区热点

今日讨论最激烈、关注度最高的议题高度集中在 `2026.6.1` 版本的回归问题：

- **[Bug]: 2026.6.1 OpenAI ChatGPT Responses transport fails (`#90083`)**：获 11 条评论、3 个 👍。用户升级到最新稳定版后，无法与 `gpt-5.4`/`gpt-5.5` 等模型交互。核心诉求是 **“最新版本为何引入零日阻断性 Bug”**，用户对版本质量控制存在担忧。([链接](openclaw/openclaw Issue #90083))
- **Cron state silently wiped during SQLite migration on upgrade to 2026.6.1 (`#90072`)**：获 5 条评论、3 个 👍。用户升级后，44 个 Cron 任务丢失了 43 个，这被认为是**数据损毁级别的严重 Bug**。社区强烈要求增强升级迁移的健壮性和提供预警。([链接](openclaw/openclaw Issue #90072))
- **[Bug] active-memory circuit breaker too aggressive (`#90082`)**：获 5 条评论、2 个 👍。新版本的主动记忆电路断路器过于激进，导致会话无响应。用户反馈 “`active-memory` 插件现在弊大于利”，希望有更宽松的默认配置或可调阈值。([链接](openclaw/openclaw Issue #90082))

**分析**：社区热点清晰地表明，**“版本质量”** 是当前用户最核心的诉求。相比新功能，用户更关注升级后现有功能的稳定性。

### 5. Bug 与稳定性

今日报告的 Bug 按严重程度排列如下：

**P1 级 (严重回归/阻断性 Bug)**

- **[Bug]: 2026.6.1 OpenAI ChatGPT Responses transport fails (`#90083`)**：用户无法使用 `openai/gpt-5.4` 和 `5.5` 模型。已有修复 PR `#90487` 待审。
- **[Bug] active-memory circuit breaker too aggressive (`#90082`)**：`active-memory` 插件导致会话阻塞，影响用户正常使用。
- **[Bug]: [5.3 regression] lossless-claw: duplicate answers (`#77642`)**：长期存在的 5.3 版本回归问题，导致答案重复和合成错误。
- **[Bug]: Repeated hard resets on same session key (`#63216`)**：长存机制 Bug，会话因上下文溢出被反复重置，影响用户体验。
- **[Bug]: Subagent completion delivery can be lost (`#67777`)**：子代理任务结果可能丢失，影响复杂的多代理工作流。

**P2 级 (重要 Bug)**

- **Cron state silently wiped during SQLite migration (`#90072`)**：严重的数据丢失问题。
- **Session model route drifts (`#90036`)**：会话模型路由失败，导致无法使用预期的模型。
- **openai-chatgpt-responses native replay sends encrypted reasoning (`#90093`)**：新传输模式存在协议交互 Bug，导致后续请求失败。已有 Issue 跟踪。

**P3 级 (低优先级/UI Bug)**

- **Control UI metadata not localized (`#79034`)**：非英语用户看到的界面包含未翻译的元数据。

### 6. 功能请求与路线图信号

今日无全新功能请求，但以下 Issue 和 PR 提供了路线图信号：

- **[Feature] 希望支持敏感数据脱敏 (`#64046`)**：用户要求对 API Key 等敏感信息进行脱敏处理。这是一个常见的安全诉求，结合已有 `#69066` (分离服务身份与用户认证) 和 `#65624` (清除回调 URL 明文令牌) 等 Issue，表明**安全增强是开源社区的重要期望**，特别是配置和日志中的敏感信息保护。
- **Track core session/transcript SQLite migration (`#88838`)**：这个跟踪 Issue 表明项目团队正在通过“分支-抽象-接缝”模式，将核心会话/记录迁移到 SQLite，旨在避免大型重构风险。这将是未来几个版本的重点基础设施工作。
- **`#90478` `feat: install GitHub-backed ClawHub skills`**：这个大型功能 PR (标记为 P1) 预示着 OpenClaw 将建立类似应用商店的官方技能分发平台，引入 GitHub 作为首个后端。这将是 OpenClaw 生态扩展的关键一步。

### 7. 用户反馈摘要

从 Issue 评论中提炼的用户声音：

- **“升级即噩梦”**：对于 `2026.6.1` 版本，多名用户表达了失望，特别是 `openai-chatgpt-responses` 传输失败 (`#90083`) 和 Cron 任务数据丢失 (`#90072`)。用户期望的是“升级后一切照旧”，而不是“修复一个 Bug，引入更严重的 Bug”。
- **“`active-memory` 插件现在弊大于利”**：用户 `ryswork1993` 的抱怨 (`#90082`) 极具代表性。当新功能或插件导致正常使用变得困难时，社区会强烈要求更灵活的配置或降级选项。
- **“中文飞书用户的痛点”**：来自 `aym9999` (`#88234`) 和 `airbing11` (`#88929`) 的中文用户报告了飞书渠道的崩溃和显示异常 (打字机效果异常、内容截断)。这提示项目在非英语区域渠道的测试存在盲区。

### 8. 待处理积压

长期未响应或进展缓慢的重要 Issue/PR：

- **Feature: Multi-index embedding memory (`#63990`)**：创建于 2026-04-10，P2 级功能需求。该功能旨在提供多索引嵌入支持，以增强记忆系统的健壮性。尽管有标签 `clawsweeper:needs-product-decision`，但已搁置近两个月，需要产品团队决策。
- **Feature: Support Anthropic advisor tool (`#63930`)**：创建于 2026-04-09，P2 级功能需求。支持 Anthropic 的 beta 版“顾问工具”将提升 OpenClaw 的模型编排能力，同样处于待产品决策状态。
- **Bug: sqlite-vec extension cannot load on macOS (`#66977`)**：创建于 2026-04-15，P2 级平台兼容性 Bug。该 Bug 直接禁用了 macOS 上的向量搜索功能，但一直未有修复 PR 关联，维护者应评估其优先级。
- **PR: `feat: install GitHub-backed ClawHub skills` (`#90478`)**：这是一项 P1 级的大型功能，虽然最新进展是“待作者回复”，但鉴于其重要性，应督促作者尽快完成修改以进入审查。

---

## 横向生态对比

好的，作为一名专注于 AI 智能体与个人 AI 助手开源生态的资深技术分析师，我将基于您提供的 2026-06-05 各项目动态，为您呈现一份全面的横向对比分析报告。

---

### **AI 智能体与个人 AI 助手开源生态横向对比分析报告 (2026-06-05)**

**报告日期:** 2026-06-05
**分析师:** 资深技术分析师

---

### **1. 生态全景**

2026年6月5日，AI 智能体与个人助手开源生态呈现出 **“核心平台加速分化，基础组件稳步追赶”** 的态势。以 OpenClaw 及其变体（NanoClaw, PicoClaw, IronClaw）为代表的生态核心，正在从功能扩展转向 **稳定性修复与架构工业化**，其根本驱动力来自社区对生产级部署（数据持久化、认证安全、多平台兼容）的迫切需求。与此同时，以 Hermes Agent、LobsterAI、CoPaw 为代表的项目，则在 **极致用户体验、多模态协作和企业级集成** 上展开激烈竞争。整体而言，生态已度过“可行性验证”阶段，全面进入 **“可靠性竞赛”** 时期。

### **2. 各项目活跃度对比**

| 项目名称 | 今日 Issues (新/活跃) | 今日 PRs (新/合并) | 版本发布 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 高 (500+) | 高 (500+) | 无 | **高度活跃，但稳定性承压**。版本质量成社区核心痛点，正快速修复回归Bug。 |
| **NanoBot** | 5 (关闭) | 77 (61合并) | 无 | **极其活跃，开发效率巅峰**。安全加固与WebUI体验优化并重，项目状态非常健康。 |
| **Hermes Agent** | 50+ | 50+ | 无 | **极高活跃度，社区关注焦点**。远程连接和桌面UI体验是主要短板，社区讨论聚焦架构革新。 |
| **PicoClaw** | 5 | 19 (10合并) | 无 | **积极修复，状态良好**。集中攻克 v0.2.9 版本引入的Bug，响应速度快。 |
| **NanoClaw** | 1 (异常) | 8 (5待合并) | 无 | **中等偏高，稳定性提升期**。专注于 Signal/WhatsApp 渠道的 Bug 修复，代码质量有优化。 |
| **NullClaw** | 0 | 0 | 无 | **无活动**。项目可能处于暂停或低优先级维护状态。 |
| **IronClaw** | 多 (高) | 多 (高) | 无 | **极高活跃度，冲刺期**。Reborn 架构主干功能快速合并，同时进行架构重构和安全性审查。 |
| **LobsterAI** | 0 | 17 (合并) | 无 | **高度活跃，稳定交付**。密集合并 PR，聚焦 Cowork 模块重构与 MCP 稳定性，项目健康度好。 |
| **TinyClaw** | 0 | 0 | 无 | **无活动**。项目可能处于暂停或低优先级维护状态。 |
| **Moltis** | 2 | 4 (待合并) | 无 | **中等活跃，社区驱动**。功能请求活跃，PR 集中在 Shadow DOM 和稳定性增强上。 |
| **CoPaw** | 32 (13活跃) | 26 (16合并) | **v1.1.11-beta.1** | **高度活跃，社区参与度高**。发布补丁版本，修复了上下文压缩、MCP兼容性等关键Bug。 |
| **ZeptoClaw** | 0 | 0 | 无 | **无活动**。项目可能处于暂停或低优先级维护状态。 |
| **ZeroClaw** | 35 | 50 (17合并) | 无 | **极其活跃，高强度迭代**。聚焦企业级安全（A2A, OIDC）和 Web UI 易用性，修复快速。 |

### **3. OpenClaw 在生态中的定位**

*   **核心参照系地位：** OpenClaw 作为生态核心，其稳定性直接影响了其衍生项目（如 PicoClaw, ZeroClaw）的开发节奏。当前社区对 `2026.6.1` 版本的 Bug 反馈，体现了其作为“基础设施”的巨大影响力。
*   **优势：** **生态规模庞大**，社区活跃度在所有项目中处于最高水平，议题和 PR 数量远超其他项目。其丰富的插件（ClawHub）和模型适配器是其强大的护城河。
*   **技术路线差异：** OpenClaw 采取 **“上游整合，下游分发”** 的架构模式，注重模块化和可扩展性。相较于 NanoBot 和 Hermes Agent 对特定平台（如企业 OIDC、WhatsApp原生）的深度优化，OpenClaw 更强调通用性和广泛的第三方集成。
*   **社区规模对比：** OpenClaw 的社区讨论量级（500+ Issues/PRs）远超其他项目（NanoBot: 77 PRs, Hermes: 100+ Issues/PRs），是生态中当之无愧的 **“流量中心”**。但其社区反馈也多集中在版本质量上，说明其用户基数大，对稳定性的容忍度较低。

### **4. 共同关注的技术方向**

多个项目不约而同地聚焦于以下技术点，表明了行业的共性需求：

1.  **Agent 协作与编排（MCP/A2A）：**
    *   **涉及项目:** OpenClaw, NanoBot, LobsterAI, ZeroClaw, CoPaw.
    *   **具体诉求:** 提升 MCP 稳定性、支持 MCP 重连/安全验证；探索 Agent-to-Agent (A2A) 协议，实现多Agent之间的发现、协同与服务编排。
    *   **趋势解读:** 从单一 Agent 到多 Agent 协作是必然趋势，MCP 作为工具交互标准，A2A 作为 Agent 间通信标准，正在成为生态内的事实基础。

2.  **企业级安全与身份认证 (OIDC/Azure AD)：**
    *   **涉及项目:** NanoBot, Hermes Agent, ZeroClaw.
    *   **具体诉求:** 支持 Azure AD、OIDC 等企业级身份认证，确保远程连接安全；要求对 API Key 等敏感信息进行脱敏；寻求更精细的权限控制。
    *   **趋势解读:** 开源 AI Agent 正在从个人实验场景加速进入企业环境，安全和合规性成为最高优先级事项。

3.  **会话持久化与高可用架构：**
    *   **涉及项目:** OpenClaw, Hermes Agent (Pluggable SessionDB), ZeroClaw (OIDC).
    *   **具体诉求:** 将 SQLite 会话存储替换为 PostgreSQL/MySQL 等服务器级数据库，实现无状态部署和热更新。
    *   **趋势解读:** 随着 Agent 在后台持续运行，高可用和热更新成为刚需。这标志着开发者从“单个进程”思维转向“分布式服务”思维。

### **5. 差异化定位分析**

| 项目 | 核心定位 | 关键差异化 | 目标用户 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | **全功能Agent平台/生态核心** | 最大的生态与社区，高度可扩展的插件与模型网络 | 所有开发者、高级用户、生态项目 |
| **NanoBot** | **极速、安全的企业级助手** | 高开发效率、安全加固（MCP/符号链接/SQL注入）；WebUI体验好 | 对安全和性能要求高的开发者 |
| **Hermes Agent** | **桌面优先的远程Agent** | 强大的远程网关功能，跨平台桌面端体验；A2A与子Agent编排 | 依赖远程工作站的项目、高级桌面用户 |
| **PicoClaw / NanoClaw** | **轻量级、渠道深度优化** | 专注于特定渠道（如 Signal/WhatsApp），快速迭代和修复 | 特定聊天平台的机器人开发者 |
| **IronClaw** | **下一代 (Reborn) Agent架构** | 强调 Workflow, SubAgent, Trigger 等功能；注重架构一致性 | 对Agent工作流和编排有高级需求的开发者 |
| **LobsterAI** | **协作式AI助手 (Cowork)** | 强调多人/多Agent协作、Artifact共享、Cowork模块；MCP 集成细致 | 团队协作、软件工程、数据分析场景 |
| **CoPaw** | **功能丰富、社区驱动** | 极高的社区活跃度，功能全面（前端测试、多模型）；响应快 | 追求“一站式”Agent体验的开发者 |
| **ZeroClaw** | **高性能、企业级安全 (Rust)** | 基于Rust的高性能运行时；聚焦A2A、OIDC等企业级安全特性 | 寻求高性能、安全可靠的Rust栈开发者 |
| **Moltis** | **本地优先、语音为核心** | 强调本地语音识别（STT）、隐私保护；浏览器自动化 | 注重隐私、离线能力和语音交互的用户 |
| **NullClaw / TinyClaw / ZeptoClaw** | **项目中止或休眠** | 无活动 | 无 |

### **6. 社区热度与成熟度**

*   **快速迭代与功能扩展期:**
    *   **IronClaw, NanoBot, ZeroClaw:** 这三个项目正处于高频开发与架构演进阶段。IronClaw 在冲刺 Reborn 架构，NanoBot 和 ZeroClaw 则在安全和企业级集成上快速迭代。它们的 PR 合并率和议题更新频率极高。
*   **质量巩固与稳定性修复期:**
    *   **OpenClaw, PicoClaw, LobsterAI, CoPaw:** 这些项目的核心功能已相对成熟，当前重点在于 **消除回归Bug、提升配置健壮性、修复平台兼容性**。社区讨论也从“如何实现”转向“如何稳定运行”。OpenClaw 的状态尤其典型，其社区对版本质量的诉求已达到“痛点”级别。
*   **社区主导、功能深化期:**
    *   **Hermes Agent:** 处于高关注度，但技术债务（远程连接、UI）和社区呼声（Pluggable SessionDB）共存的状态。它需要平衡新功能开发与核心稳定性，是典型的“中等成熟度”项目。

### **7. 值得关注的趋势信号**

1.  **“稳定性”成为第一生产力：** 从 OpenClaw 的大规模 Bug 反馈，到 CoPaw 的上下文压缩崩溃，再到 Hermes Agent 的远程连接问题，“可靠性”已成为用户选择项目的第一考量。对于 AI Agent 开发者而言，**测试覆盖、升级兼容性和错误处理**将成为关键竞争力。
2.  **从“个人玩具”到“团队生产力工具”：** A2A、协作（Cowork）、文件共享、多Agent编排等功能的高频出现，表明开发者正在将 Agent 视为一种 **团队协作和自动化工作流的平台**，而不仅仅是个人聊天助手。
3.  **“工匠精神”与“平台化”并重：** 像 Moltis 这样深耕特定场景（本地语音）与像 ZeroClaw 这样构建通用高性能平台的项目并存。这表明生态正走向成熟，市场会同时奖励 **深度** 和 **广度**。
4.  **Rust 生态的崛起：** ZeroClaw 基于 Rust 的高性能表现获得了社区的认可（`#7143` 评论），这预示着未来可能会有更多追求极致性能和安全性的 Agent 运行时选择 Rust。

**对开发者的启示：**
*   **入门首选：** 选择 OpenClaw 或 CoPaw，利用其活跃的社区和丰富的文档快速上手。
*   **企业级部署：** 关注 ZeroClaw, NanoBot 和 Hermes Agent 的安全与认证特性。
*   **构建自定义Agent：** 深入研究 MCP 和 A2A 协议，它们是未来互操作性的基石。
*   **关注稳定性：** 在选择任何版本前，务必查看其社区对近期版本的 Bug 反馈情况。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-06-05)

**项目名称:** NanoBot (github.com/HKUDS/nanobot)  
**报告周期:** 2026-06-04 至 2026-06-05  
**分析师:** AI 智能体与个人 AI 助手领域开源项目分析师

---

## 1. 今日速览

项目今日活跃度**极高**。过去24小时内，社区提交并处理了 **77 条 PR**，其中 **61 条已被合并或关闭**，显示了极强的开发效率和维护响应。Issue 方面，关闭了 5 个问题，整体积压清理良好。重点进展包括：桌面端外壳准备、Azure AAD 认证支持、MCP 安全与稳定性加固，以及 WebUI 多项体验优化。项目正稳步向更成熟、更安全、更易用的方向迈进。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日项目在多个核心领域取得实质性推进，以下为合并/关闭的**重要 PR**，按模块分类：

### 3.1 安全与稳定性
- **PR #4027** (已关闭): 修复 MCP 重连bug，解决会话断开后无法自动重连的长期问题。 [查看](https://github.com/HKUDS/nanobot/pull/4027)
- **PR #4119** (开放中): 阻断通过相对符号链接逃逸工作目录的安全漏洞，提升了 `exec` 命令的安全性。 [查看](https://github.com/HKUDS/nanobot/pull/4119)
- **PR #4123** (开放中): 在 MCP 探测前拒绝不安全的HTTP URL，加固对 SSRF 攻击的防御。 [查看](https://github.com/HKUDS/nanobot/pull/4123)
- **PR #4053** (开放中): 确保只读根目录不被写入/编辑工具篡改，细化文件系统权限控制。 [查看](https://github.com/HKUDS/nanobot/pull/4053)
- **PR #4190** (开放中): 严格化工具调用验证，防止因近似匹配或参数格式错误导致的误执行。 [查看](https://github.com/HKUDS/nanobot/pull/4190)

### 3.2 桌面端 & WebUI
- **PR #4195** (开放中): 首次开放桌面端外壳，优化共享的聊天/设置UI，为桌面化体验奠基。 [查看](https://github.com/HKUDS/nanobot/pull/4195)
- **PR #4178** (已关闭): 新增 `Cmd/Ctrl+Shift+O` 快捷键一键开启新对话，提升WebUI效率。 [查看](https://github.com/HKUDS/nanobot/issues/4178)
- **PR #4163** (已关闭): 支持在用户消息上“Fork from here”，允许从历史节点分支继续对话。 [查看](https://github.com/HKUDS/nanobot/pull/4163)
- **PR #3966** (已关闭): 修复WebUI中CLI生成的图像渲染问题，提升多模态体验。 [查看](https://github.com/HKUDS/nanobot/pull/3966)

### 3.3 提供者与集成
- **PR #4126** (已关闭): 正式支持 Azure AAD (Azure Active Directory) 认证，满足企业级安全策略要求。 [查看](https://github.com/HKUDS/nanobot/pull/4126)
- **PR #3984** (已关闭): 修复 OpenAI 兼容 API 工具调用 ID 不匹配的问题，确保与 GLM-4.7、Kimi 2.6 等平台兼容。 [查看](https://github.com/HKUDS/nanobot/pull/3984)

### 3.4 测试与CI
- **PR #4193** (开放中): 新增内存生命周期测试框架，覆盖从归档到版本化存储的完整流程。 [查看](https://github.com/HKUDS/nanobot/pull/4193)
- **PR #4189** (已关闭): 用确定性时钟替代时间等待，大幅提升单元测试的稳定性和速度。 [查看](https://github.com/HKUDS/nanobot/pull/4189)

### 3.5 命令行与辅助工具
- **PR #3968** (开放中): 新增 `/skill` 斜杠命令，用户可快速查看已启用的技能列表。 [查看](https://github.com/HKUDS/nanobot/pull/3968)
- **PR #4164** (已关闭): 修复通过 `uv tool` 安装时 `pip` 不可用的问题，优化CLI安装流程。 [查看](https://github.com/HKUDS/nanobot/pull/4164)

---

## 4. 社区热点

1. **支持任务特定模型配置 (Issue #912)**  
   - **链接**: [Issue #912](https://github.com/HKUDS/nanobot/issues/912)  
   - **动静**: 新增4条评论，获3个👍。虽然创建较早(2026-02-20)，但讨论仍在进行。  
   - **诉求**: 用户希望为对话、工具使用、浏览器使用等不同任务类型分别配置不同模型，而不是使用单一的全局模型。这反映了高级用户对精细化、场景化LLM调用的强需求。

2. **MCP 服务器随机掉线问题 (Issue #4168)**  
   - **链接**: [Issue #4168](https://github.com/HKUDS/nanobot/issues/4168)  
   - **动静**: 报告后24小时内被关闭，且存在修复PR(#4027)。  
   - **诉求**: MCP 会话稳定性是用户使用的核心痛点。此问题被快速响应和定位，体现了项目对可靠性的重视。

3. **备用模型在超时时未触发 (Issue #1121)**  
   - **链接**: [Issue #1121](https://github.com/HKUDS/nanobot/issues/1121)  
   - **动静**: 已关闭，获3个👍。  
   - **诉求**: 主模型超时（如 Gemini 503 错误）时，配置的备用模型未生效。用户期望实现优雅降级与自动重试。

---

## 5. Bug 与稳定性

| 严重程度 | Bug 描述 | Issue/PR | 状态 |
|----------|----------|----------|------|
| **严重** | MCP 服务器随机断连，需重启 NanoBot 才能恢复 | [#4168](https://github.com/HKUDS/nanobot/issues/4168) | **已关闭** (PR #4027 已修复) |
| **严重** | 主模型超时后备用模型未触发，直接返回错误 | [#1121](https://github.com/HKUDS/nanobot/issues/1121) | **已关闭** (修复待确认) |
| **中等** | WebUI CLI 应用通过 `uv tool` 安装失败 | [#4158](https://github.com/HKUDS/nanobot/issues/4158) | **已关闭** (PR #4164 已修复) |
| **中等** | MCP 连接不安全的HTTP URL存在 SSRF 风险 | [#4123](https://github.com/HKUDS/nanobot/pull/4123) | **开放中** (修复PR已提交) |
| **低** | 工作目录内通过符号链接逃逸的安全漏洞 | [#4119](https://github.com/HKUDS/nanobot/pull/4119) | **开放中** (修复PR已提交) |

---

## 6. 功能请求与路线图信号

以下功能请求收到社区关注，且有对应的 PR 或较强讨论，**可能被纳入下一版本**：

- **任务特定模型配置** ([#912](https://github.com/HKUDS/nanobot/issues/912)): 呼声高，但目前无直接关联 PR。可能需要较长开发周期。
- **子代理继承 MCP 工具** ([#4192](https://github.com/HKUDS/nanobot/pull/4192)): PR 已提交，旨在让子代理自动继承主代理的 MCP 工具，提升了 Agent 编排的灵活性。
- **运行级 Agent Hook 生命周期** ([#4176](https://github.com/HKUDS/nanobot/pull/4176)): 已合并。新增 `before_run`, `after_run` 等钩子回调，为高级监控和定制提供了基础设施。
- **内存管理增强** ([#4191](https://github.com/HKUDS/nanobot/pull/4191)): PR 已合并，虽然摘要较简略，但表明项目在持续关注记忆系统的健壮性。

---

## 7. 用户反馈摘要

- **正面反馈**: 用户对快速响应和修复（如 MCP 重连、pip 安装问题）表示满意。`/skill` 命令 ([#3968](https://github.com/HKUDS/nanobot/pull/3968)) 和新的快捷键 ([#4178](https://github.com/HKUDS/nanobot/issues/4178)) 均来自社区提案并得到采纳。
- **痛点**: 
  - **MCP 稳定性**是用户最大的痛点，虽然已有修复，但仍有用户报告类似问题。
  - **备用模型不触发**暴露了降级策略的缺失，用户期望更智能的故障转移。
- **使用场景**: 企业级用户在 Issue [#4125](https://github.com/HKUDS/nanobot/issues/4125) 中表达了在严格安全策略下使用 Azure AAD 认证的需求，表明 NanoBot 正在进入更正式的企业环境。

---

## 8. 待处理积压

以下为长期未响应的 Issue 或 PR，建议维护团队关注：

1. **Issue #912: 支持任务特定模型配置**  
   - **链接**: [Issue #912](https://github.com/HKUDS/nanobot/issues/912)  
   - **状态**: 开放近4个月，社区讨论活跃但无官方跟进。**建议**: 确认是否纳入路线图，或给出初步设计思路回应社区。

2. **PR #4053: 确保只读根目录不被写入**  
   - **链接**: [PR #4053](https://github.com/HKUDS/nanobot/pull/4053)  
   - **状态**: 已开放一周，暂无合并或更新。**建议**: 尽快审查，该PR对文件系统安全至关重要。

3. **PR #3983 & #3982: 测试框架增强**  
   - **链接**: [PR #3983](https://github.com/HKUDS/nanobot/pull/3983) | [PR #3982](https://github.com/HKUDS/nanobot/pull/3982)  
   - **状态**: 已开放两周。**建议**: 高质量测试是项目健康的基石，应加速此类 PR 的合并。

---

**总结**: NanoBot 项目今日呈现非常健康的开源生态：**高活跃度、快速响应、安全加固、体验迭代**。MCP 稳定性和安全权限控制是当前主线，社区功能请求主要集中在**精细化配置**和**灵活性增强**上。项目正从单一聊天工具向可编排、安全的 Agent 平台演进。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，作为一名AI智能体与个人AI助手领域开源项目分析师，我将根据您提供的Hermes Agent项目数据，生成一份结构清晰的2026-06-05项目动态日报。

---

# Hermes Agent 项目动态日报 | 2026-06-05

**项目名称:** Hermes Agent
**数据时间范围:** 2026-06-04 ~ 2026-06-05 (基于数据更新日期推断)
**分析师:** AI 开源项目分析师

---

## 1. 今日速览

Hermes Agent 项目今日呈现出 **极高活跃度** 的状态。过去24小时内产生了100条更新（50个Issues + 50个PRs），社区参与度非常旺盛。尽管没有新版本发布，但项目在**核心架构讨论**（如Pluggable SessionDB）和 **关键Bug修复**（如Docker容器泄漏、远程网关连接稳定性）方面取得了实质性进展。值得注意的是，有2个长期未决的Bug（Issue #7439, #7905）在今天得到了修复并被关闭，显示了项目维护者对积压问题的清理效率。总体而言，项目处于一个 **高活跃、高关注度** 的健康发展周期。

## 2. 版本发布

**无。** 过去24小时内无新版本发布。

## 3. 项目进展

今日项目在**关键问题修复**和 **功能稳定性** 上迈出了重要一步，成功处理了多个积压已久的PR。

- **长期Bug修复 (Docker & 网络连接):**
    - **PR #7440 / PR #39412** (由Tranquil-Flow和benbarclay贡献): 修复了当 `docker run -d` 失败时，Docker容器会“泄漏”并处于“Created”状态的Bug (#7439)。该补丁确保了容器创建失败后的自动清理，提升了Docker环境的可靠性。
    - **PR #9248** (由Tranquil-Flow贡献): 修复了 `is_local_endpoint()` 函数无法识别Docker/Podman DNS名称的问题 (#7905)。这意味着当用户通过Docker网络内的LiteLLM或Ollama等代理访问本地模型时，将不再因超时而失败，对本地开发者和自部署用户是一大利好。
    - **PR #39402** (由teknium1贡献): 修复了远程网关需要密码认证时，桌面端陷入无操作重试循环的问题。现在，当远程网关重启导致会话失效时，桌面端会提供一个可用的“登录”界面，而非死循环。

- **功能改进:**
    - **PR #38030** (由iDhoons贡献): 显著改进了Discord平台的“作用域会话”和“护栏”功能，这有助于在群聊场景下更精细地控制Agent的行为。

- **桌面端体验优化:**
    - **PR #37949** (由ethernet8023贡献): 修复了桌面端斜杠命令自动补全在消息中间触发的问题。现在，只有当你在一行开头输入 `/` 时才会弹出命令预览，符合用户直觉。

## 4. 社区热点

今日最受关注的讨论主要集中在如何**解决用户实际部署和连接中遇到的痛点**，以及一个关于**架构革新**的讨论。

1.  **核心架构讨论:**
    - **Issue #23717** (7条评论): `RFC: Pluggable SessionDB Provider — PostgreSQL, MySQL, and Beyond`。这是今日最引人注目的功能请求，讨论热度最高。社区核心用户提出了将当前基于SQLite的会话存储抽象为可插拔的数据库接口。背景是，高频率迭代更新Hermes会导致SQLite文件锁死，成为一个“热更新死循环”问题。转为使用PostgreSQL这样的独立服务器数据库，可以解决无状态部署、热更新和可能的推理会话存储的问题。这反映了社区对于**生产级、高可用性部署**的强烈需求。
    - **链接:** [NousResearch/hermes-agent Issue #23717](https://github.com/NousResearch/hermes-agent/issues/23717)

2.  **用户痛点反馈 (远程连接与Bug报告):**
    - **Issue #38115 / #39365 / #38873 (各1-5条评论):** 这组Issue集中暴露了 **Hermes Desktop远程连接模式** 的稳定性问题。用户报告了 `gateway SIGTERM` 导致WebSocket循环断开、错误提示“OpenRouter API key missing”实际上却是网关认证失败(401)、以及桌面端在远端就绪后又会“弹回”本地后端等问题。这表明远程网关模式虽然功能强大，但在macOS及跨网络环境下仍存在严重的可靠性问题，是当前用户最不满意的痛点之一。
    - **链接:**
        - [Issue #38115](https://github.com/NousResearch/hermes-agent/issues/38115)
        - [Issue #39365](https://github.com/NousResearch/hermes-agent/issues/39365)
        - [Issue #38873](https://github.com/NousResearch/hermes-agent/issues/38873)

3.  **桌面端体验问题:**
    - **Issue #37549 / #38272 (4-5条评论):** 这两个Issue都描述了 **桌面聊天窗口自动滚动异常** 的行为。用户在阅读回复内容时，UI会强制且攻击性地自动滚到底部，打断用户阅读，尤其是当Agent在流式输出或执行工具调用时。这个问题获得了5个👍，说明有大量用户受到了相同困扰，是影响桌面端核心体验的严重缺陷。
    - **链接:**
        - [Issue #37549](https://github.com/NousResearch/hermes-agent/issues/37549)
        - [Issue #38272](https://github.com/NousResearch/hermes-agent/issues/38272)

## 5. Bug 与稳定性

今日报告了多个影响稳定性和可用性的Bug，其中**远程连接**和 **桌面端用户体验** 是重灾区。

- **紧急 (P2):**
    - **[Desktop] 远程连接不稳定:** `#38115` (WebSocket 循环断开)、`#38873` (连接后复弹回本地)、`#39365` (错误的错误提示)。这些问题共同指向远程网关模式的可靠性有待大幅提升。
    - **Mac安装失败:** `#39332`。用户在macOS上安装Hermes Desktop时失败，有1个👍，表明这是一个影响新用户上手的严重问题。
    - **会议/持续会话管理:** `#39333`。桌面端管理安装时，因Git仓库处于detached HEAD状态，错误地报告“cancelled by user”，让用户迷惑。

- **中等 (P3):**
    - **[Desktop] UI/UX Bug群:** `#37549`, `#38272` (自动滚动异常)；`#38901` (切换会话后模型UI不更新)；`#38858` (会话固定状态重启后丢失)；`#39292` (TTS超时和下拉菜单易用性差)；`#39231` (中日韩IME输入时发送按钮不显示)。
    - **[CLI] 命令冻结:** `#39418`。`/reload-mcp` 命令会导致CLI终端完全冻结，用户唯一能做的就是强行关闭终端，影响严重。
    - **[Windows] 更新失败:** `#39308` (由PR #39420修复)。Windows系统因8.3短路径格式问题导致Node.js阶段安装失败。

- **需关注:**
    - **[Security] 授权凭证泄露:** `#37981` (已关闭)。修复了Kanban插件在仪表盘token缺失时未能正确失败的安全问题。
    - **[Bug] 上下文压缩失效:** `#39417` (PR已提交)。修复了当手动禁用自动压缩后，提供者请求过大引发的溢出路径仍会触发的回归bug。

## 6. 功能请求与路线图信号

从今日的社区反馈看，未来版本的方向可能包括:

- **架构升级:**
    - **可插拔会话数据库 (Pluggable SessionDB) - #23717:** 这是最响亮的声音。将SQLite替换或扩展为PostgreSQL/MySQL等是企业级部署的关键能力。
    - **分离存储与LLM调用的“监听不激活”模式 - #15621:** 为群聊平台提供更精细的控制，允许Agent“看到”并记录消息，但不进行干预。这将极大提升Slack、Discord等群聊场景的协作体验。

- **核心功能增强:**
    - **GPT-Researcher式的持续/循环Agent Loop - #21172:** 用户希望创建“持久化”的Agent，这些Agent由cron驱动，可以自主执行任务、反思、基于预算停止或刷新。这标志着从“一次性问答”到“持续自主服务”的使用范式转变。
    - **会话分类与隔离 - #38894:** 用户希望将Cron/自动任务产生的会话与手动聊天会话分开，以避免手动聊天列表被后台任务淹没。
    - **桌面端快捷工作区切换 - #38849:** 用户希望在桌面端状态栏快速切换不同的profile或工作区，提升多环境下的使用效率。

## 7. 用户反馈摘要

- **痛点 (不满意/有困扰):**
    - **远程连接体验差:** “即使远程测试通过了，桌面端也无法稳定连接到远端网关，总是无故断开或弹回本地。” (来自 #38115, #38873)
    - **桌面端聊天UI恼人:** “当我滚动回去阅读回复时，UI总是强制把我拉到底部，根本没法正常阅读流式的长文本。” (来自 #37549, #38272)
    - **错误提示误导性极强:** “桌面端一直提示我‘缺少OpenRouter API key’，但实际上我的key是好的，真正的原因是远程网关的认证不通过(401)。这完全是在误导排查方向。” (来自 #39365)

- **喜悦/满意:**
    - **依赖Docker的开发者:** “太好了！`is_local_endpoint`终于能识别Docker的DNS名称了，我不用再忍受等到本地代理超时了。” (对PR #9248的潜在情绪)

## 8. 待处理积压

以下为长期未响应或仍未解决的重要Issue，建议维护者重点关注:

1.  **高度关注:**
    - **#23717:** `RFC: Pluggable SessionDB Provider`。这是一个社区呼声极高且影响深远的架构提议，建议项目核心团队进行回复，明确其可行性及纳入路线图的意愿。
    - **#38115, #38873:** 远程网关连接稳定性的系列问题。这已成为影响用户部署的核心障碍，建议指定专人进行系统性排查。

2.  **长期遗留问题:**
    - **#6775:** `Add ACP session token counts and cost data in state.db`。这是一个于2026-04-09提出的功能请求，至今无官方回复。对于使用ACP进行集成的开发者来说，追踪成本是关键需求。
    - **#8337:** `Feature Request: Add Token Usage Tracking for MiniMax Provider`。同样是与成本追踪相关的请求，于2026-04-12提出，无官方回复。

3.  **高风险安全PR:**
    - **#8768 (P0):** `fix: omit authorization from request debug dumps`。这是一个优先级为P0的安全补丁，旨在修复请求调试日志中可能泄露授权凭证信息的问题。状态为“OPEN”，为避免潜在的安全风险，建议优先合并。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，以下是基于您提供的PicoClaw项目数据生成的2026-06-05项目动态日报。

---

### **PicoClaw 项目动态日报 | 2026-06-05**

---

#### **1. 今日速览**

今日PicoClaw项目活动极为活跃，共处理了19个Pull Request和5个Issue，显示出维护团队正在积极清理积压并修复关键问题。核心进展集中在修复因v0.2.9版本升级引入的多个Bug，尤其是会话历史混乱、PID检查及API兼容性问题。尽管无新版本发布，但社区协作与修复效率很高，项目整体健康状况良好。

---

#### **3. 项目进展**

今日共合并/关闭了10个PR，主要集中在Bug修复和依赖更新，显著提升了项目稳定性。

- **核心Bug修复**
    - **[PR #3000] fix(pid): verify process identity in singleton PID check**：解决了因PID被系统重用导致网关启动崩溃的严重Bug。此修复替代了长期未合并的PR #2813。
    - **[PR #2992] fix(session): skip main-session alias during history promotion**：修复了v0.2.9升级后，新会话总带有旧历史消息的问题，直接关停了高优先级Bug #2972。
    - **[PR #3007] fix: preserve streamed Codex tool calls**：修复了使用Codex OAuth与GPT-5.5时，工具调用结果被误丢弃的问题。
    - **[PR #2996] fix(tools): handle json.Marshal errors in exec tool responses**：修复了工具执行响应中JSON序列化失败导致无声错误的问题，提升了工具链的健壮性。

- **构建与兼容性修复**
    - **[PR #2999] fix: handle space in go env GOVERSION with firstword** & **[PR #2976] fix: Makefile handle space in go1.25.10 X:nodwarf5**：解决了特定Go工具链版本因返回带空格信息导致编译失败的问题。

- **文档维护**
    - **[PR #2995] docs: add v0.2.5~v0.2.9 release highlights to README News**：根据Issue #2981的要求，补充了版本更新日志到README。

- **依赖更新**
    - **[PR #3003], [PR #3004]**：由Dependabot自动提交的SQLite和AWS Bedrock Runtime依赖更新已合并。

---

#### **4. 社区热点**

社区讨论热度最高的议题集中在**数据持久化**和**编译兼容性**问题。

1.  **会话历史混乱 [Issue #2972]:** 该问题由用户 `xpader` 报告，获得了2条评论。用户升级到v0.2.9后，Web UI每个新会话都“寄生”了旧的历史记录，对日常使用造成极大困扰。这反映了用户对升级后数据一致性和隐私性的高度关注。该问题已通过PR #2992修复并关闭。

2.  **编译错误 [PR #2976]:** 用户 `opsec-ai` 提交了一个修复Makefile的PR，因为在特定环境下`go env`命令返回值包含空格导致编译失败。这凸显了在不同操作系统和工具链版本下保持构建一致性的重要性。此问题已修复。

3.  **PID检查问题 [Issue #2720]:** 尽管该Issue已关闭，但其引发的关于进程身份验证的讨论持续发酵。用户 `weissfl` 精准描述了`kill -9`后PID被系统服务（如`systemd-resolved`）重用导致的崩溃循环。这是一个经典的、具有代表性的生产环境稳定性问题，社区对此类根本性Bug的修复反应积极。

---

#### **5. Bug 与稳定性**

今日共报告5个Issue，其中1个为新的开放性Bug，其余均已关闭。严重程度如下：

- **高 [已修复]:**
    - **会话历史混乱 (Issue #2972)**：v0.2.9版本回归问题，直接影响所有Web用户。**已于PR #2992修复。**
    - **PID检查失效 (Issue #2720)**：导致网关在异常退出后无法重启的严重稳定性Bug。**已于PR #3000修复。**

- **中 [已修复]:**
    - **Codex OAuth工具调用丢失 (Issue #3006)**：特定模型（GPT-5.5）下的功能Bug。**已于PR #3007修复。**
    - **OneBot群聊API错误 (Issue #3002)**：导致OneBot适配器在群聊中回复报错的功能性Bug。当前无关联修复PR，是今日最值得关注的开放性Bug。

- **低 [任务]**
    - **文档更新 (Issue #2981)**：非Bug，维护任务。**已于PR #2995完成。**

#### **6. 功能请求与路线图信号**

无显著的新功能请求。今日活动集中在修复v0.2.9版本的缺陷和清理技术债务。以下PR/Issue可能影响未来版本：

- **OneBot群聊修复 (Issue #3002):** 该Bug对使用OneBot协议的QQ机器人用户影响较大，预计会在下一个补丁版本中立即修复。
- **Larksuite SDK适配 (PR #3008):** 由于依赖升级带来的API破坏性变更 (`ReceiveIdTypeChatId` 重命名)，此修复PR是保证飞书渠道正常运行的必需步骤，预计会迅速合并。
- **WhatsApp原生模式支持 (PR #2934):** 该PR已存在两周，旨在解锁WhatsApp本地协议支持，如果社区呼声高，可能被纳入下一个小版本。

---

#### **7. 用户反馈摘要**

- **正面反馈：** 社区修复效率高。从高优先级Bug (Issue #2972) 被快速识别并修复可以看出，维护者对用户反馈的响应速度很快。
- **痛点反馈：**
    - **升级体验 (来自 #2972)：** `xpader` 用户反馈的会话历史混乱是典型的“升级后遗症”，说明项目在版本间数据迁移或状态兼容性测试上存在盲区。
    - **配置复杂性 (来自 #2981)：** `axwfae` 用户提出文档需要更新，反映了v0.2.9版本改动较大，用户学习成本增加，需要更清晰的使用指南。
    - **渠道集成错误 (来自 #3002)：** `Xuan-Xuann` 用户发现了OneBot适配器中的低级API调用错误，表明该渠道的测试覆盖率可能不足。

---

#### **8. 待处理积压**

以下为长期未响应或存在冲突的PR，需要维护者关注：

- **[PR #2813] fix(pid): (updated) verify gateway identity...**： 此PR与今日已合并的PR #3000功能完全相同，但提交时间更早（2026-05-07）。PR #3000的作者（`chengzhichao-xydt`）应该是基于此重新提交了一个更清晰的版本。建议关闭此积压PR，并感谢原作者的贡献。
- **[PR #2934] fix(channels): allow whatsapp native mode...**： 此PR已开放超过12天，涉及WhatsApp原生模式的核心功能。如果维护者有规划支持该功能，应尽快Review并给出反馈，避免挫伤贡献者积极性。
- **[PR #2947] fix: correct claude-sonnet-4.6 model ID...**： 已标记为 `[stale]` 超过10天。这是一个简单的模型ID修复，修复后能避免Claude新用户在首次使用时遭遇404错误。建议尽快合并。
- **[PR #3005] build(deps): bump larksuite/oapi-sdk-go...**： 此PR引入了API破坏性变更，导致编译失败，因此PR #3008（修复PR）是其前置条件。维护者应先合并PR #3008，再合入此依赖更新。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

好的，作为NanoClaw项目的AI智能体与个人AI助手领域开源项目分析师，我已根据您提供的GitHub数据，为您生成了2026年6月5日的项目动态日报。

---

# NanoClaw 项目动态日报 | 2026年6月5日

## 1. 今日速览

过去24小时内，项目活跃度**中等偏高**，主要集中在**信号(Signal)和WhatsApp渠道的bug修复**上。共产生了8个Pull Request，其中5个处于待合并状态，显示了项目修复和优化工作的密集。然而，新晋Issue #2686（加拿大旅行）话题明显偏离项目核心，社区讨论氛围略显松散。目前无新版本发布，项目供应链稳定。

## 2. 版本发布

无

## 3. 项目进展

过去24小时，项目主要通过对**信号(Signal)和WhatsApp**两个渠道的缺陷修复来推进稳定性。

- **WhatsApp渠道核心Bug修复**
  - **PR #2688** `[OPEN] fix(whatsapp): stop translating group participants to phone JIDs` 是一个重要的上游修复。它解决了WhatsApp迁移到LID群组后，机器人回复消息“石沉大海”且报错`ack error 421`的问题。该问题由`getNormalizedGroupMetadata`函数对参与者ID的错误转换引起。此修复对于保障WhatsApp机器人群的可靠性至关重要。
  - **PR #2633** `[CLOSED] fix/whatsapp self destruct and shutdown auth wipe` 已合并。它修复了在Baileys 7.x版本上，当`WHATSAPP_PHONE_NUMBER`配置后，适配器会因两个结构性bug而自行销毁并清除认证信息的严重问题。该合并确保了WhatsApp配对的稳定性。

- **信号(Signal)渠道功能增强与修复**
  - **PR #2685** `[OPEN] docs(signal): group typing, outbound reactions, quote-reply fix` 该PR对信号功能进行了文档补充，包括群组内打字指示器、出站反应和引用回复的修复。这表明团队正在持续完善Signal渠道的功能细节和用户体验。

- **代码质量改进**
  - **PR #104** `[CLOSED] fix: replace `as any` casts with proper BoomError type` 已合并。这是一个代码质量提升，通过定义`BoomError`接口，消除了代码中不必要的类型断言，增强了代码的类型安全性和可维护性。该PR虽然历史悠久（创建于2月），但其合并表明团队仍在进行底层代码的清理和优化。

## 4. 社区热点

今日社区讨论热度最高的部分是**关于Signal和WhatsApp的Bug修复PR**，它们吸引了主要贡献者和核心维护者的参与。

- **PR #2688** [fix(whatsapp): stop translating group participants to phone JIDs](nanocoai/nanoclaw PR #2688)
  - 这是一个用户非常关心的问题（消息发送失败，无错误提示），直接触及WhatsApp机器人体验的核心痛点。提交者`mcaldas`精准地定位了根因（LID vs Phone JID的转换问题），得到了一个非常积极的回应预期。

- **PR #2685** [docs(signal): group typing, outbound reactions, quote-reply fix](nanocoai/nanoclaw PR #2685)
  - 虽然主要是文档更新，但这背后是Signal渠道功能集逐渐完备的体现。社区对Signal群聊打字指示器等原生功能有较高期待，该PR是满足这些需求的信号。

**分析**：社区的热点集中在**基础设施的稳定性**和**渠道的原生体验**上。用户希望机器人能够像真人一样无缝、可靠地接入他们的聊天环境，任何消息丢失或不可预测的行为都会引起高度关注。

## 5. Bug 与稳定性

今日报告和修复的Bug主要集中在消息处理和连接管理上，未出现崩溃或数据丢失级别的严重问题。

- **严重**
  - **PR #2688** `[fix(whatsapp): stop translating group participants to phone JIDs]`：WhatsApp LID群组消息发送失败。**当前状态：等待合并。** 风险：影响所有使用LID群组的WhatsApp机器人用户。**已有对应的Fix PR**。
  - **PR #2689** `[fix(signal): set isMention for DMs and use signal: prefix for platform IDs]`：Signal私信首次消息丢失，导致群组未注册。 **当前状态：等待合并。** 风险：直接导致Signal私信功能在首次交互时失效。**已有对应的Fix PR**。
  - **PR #2633** `[Fix/whatsapp self destruct and shutdown auth wipe]`：WhatsApp认证信息自动清除，导致配对失效。 **当前状态：已合并。** 该Bug影响所有使用`WHATSAPP_PHONE_NUMBER`配置的用户。修复已合入主线。

- **一般**
  - **PR #2405** `[fix(poll-loop): deliver unwrapped output to sole destination after compaction]`：模型在自动压缩后，可能生成格式错误的XML标签，导致输出混乱。**当前状态：等待合并（已积压近一个月）。** 这是一个影响模型输出质量的非破坏性Bug。

## 6. 功能请求与路线图信号

今日数据中暂无新的直接功能（Feature）请求，但现有PR暗示了未来的路线图：

- **信号(Signal)渠道能力深化**：PR #2685和#2689共同指向Signal渠道正在从“可用”走向“好用”。打字指示器、引用回复、出站反应等功能将极大提升用户交互体验，很可能成为下一版本Signal渠道更新的核心内容。
- **语音转写能力**：PR #2459 `[feat(skill): add /add-voice-transcription-chat-sdk]` 虽然在积压状态，但展现了项目对本地化、开源语音转写的重视。如果该功能被合并，将使NanoClaw在隐私保护和离线处理方面具有独特优势，这可能成为项目的一个重要差异化特性。

## 7. 用户反馈摘要

今日数据中用户直接反馈较少。

- **Issue #2686** `[Traveling]`：用户`drannyyoung007-max`表示想去加拿大。这是一个与项目无关的请求，可能是新用户不熟悉项目用途或误提交。没有收到其他用户的互动或维护者的处理。这反映了项目在引导新用户或Issue模板方面可能存在不足。

## 8. 待处理积压

以下长期未响应的PR需要维护者关注：

- **PR #2405** `[fix(poll-loop): deliver unwrapped output to sole destination after compaction]` (创建于2026-05-11，积压25天)
  - **重要性：高。** 该PR解决的是一个影响模型输出质量的Bug，特别是在长时间运行或密集交互后，模型输出可能出现格式错误。虽然非致命，但会显著影响用户体验和下游解析器的稳定性。建议项目维护者尽快Review并合并。
  - [查看该PR](nanocoai/nanoclaw PR #2405)

- **PR #2459** `[feat(skill): add /add-voice-transcription-chat-sdk]` (创建于2026-05-13，积压23天)
  - **重要性：中。** 这是一个特性PR，引入了由社区贡献的、基于本地`whisper.cpp`的语音转写技能。虽然与当前修复优先级不符，但这是一项有价值的功能，能够吸引隐私敏感和对离线能力有需求的用户。建议项目规划将其纳入下一个小版本的路线图。
  - [查看该PR](nanocoai/nanoclaw PR #2459)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，根据您提供的 IronClaw 项目 GitHub 数据，我为您生成了 2026-06-05 的项目动态日报。

---

# IronClaw 项目动态日报 | 2026-06-05

## 今日速览

今日项目活跃度极高，进入“中后期冲刺”阶段。核心开发者在 **Reborn** 架构的主干功能（工作流、子Agent、触发器、Slack集成）上持续合并大型 PR，同时通过一系列高优先级 Issue 驱动代码健壮性和安全性。社区讨论集中在 **Reborn** 子系统的功能完整性与一致性上，多个“追踪/总领”类 Issue 的创建表明项目正在从功能开发转向功能整合与稳定性加固。

## 项目进展

今日完成了多项关键功能的合并与被合并确认，有力地推动了 **Reborn** 架构向生产就绪迈进。

- **Slack 产品集成（#3857 已关闭）**：Slack ProductAdapter MVP 已合并，支持 DM 和提及，为外部渠道打通奠定了基础。
- **Slack 请求/响应旅程（#4476 已合并）**：完成了 Slack 从接收请求到执行、再响应的端到端链路，引入了 `actor_user_id` 和 `subject_user_id` 的职责分离，是重要的架构改进。
- **Slack 认证提示（#4478 已合并）**：在 Slack 响应中集成了认证设置链接，显著提升了用户在 Slack 环境下处理认证问题的体验。
- **WebUI v2 提供商分组（#4477 已合并，#4480 已合并）**：将 LLM 提供商面板从“信息展示”升级为“可操作分组”，并修复了代码审查中的分组问题，提升了用户体验。
- **子Agent 功能体系（#4348, #4349, #4350 已关闭）**：完成了一系列关于子Agent 耐久性投递、补偿逻辑和观察者正确性的高价值 PR，关闭了相关的主要问题。这是 **Reborn** 核心循环的重要进展。
- **触发器生命周期修复（#4472, #4473, #4420 已关闭）**：快速修复了触发器创建、一次性运行和完成策略未被执行等问题，保持了项目的响应速度。
- **闭环退出原因追踪（#4424 已修复）**：修复了 `builtin.spawn_subagent` 在结构化工具数组中缺失的 Bug，模型现在可以正确调用内置的子Agent生成工具。
- **压缩与检查点（#4440 已合并，#4366 跟进）**：解决了压缩线程中的“不报错而延迟”问题，并增加了预检查、去除了 hex 编码等优化。
- **身份解析（#4461 开放中）**：`ironclaw_reborn_identity` 作为一个新的身份解析边界被提出，旨在统一 OAuth 和外部 Actor 的身份解析，这是一个架构层面的重要改进。

**总结：** 项目在 **Reborn** 的多个关键前沿（Slack集成、子Agent 耐久性、核心循环稳定性、WebUI 体验）都取得了实质性进展，累计关闭了超过 20 个 PR/Issue。项目整体向稳定、功能完整的 Reborn 版迈进了重要一步。

## 社区热点

今日讨论的焦点集中在 **Reborn** 核心架构的一致性与正确性上，以下为最活跃的讨论：

1.  **[#3280 [OPEN] Add ProductWorkflow and InboundTurnService facade (6条评论)]**：作为“Reborn”架构的根 Issue 之一，讨论了将近一个月，其内容涉及产品适配器和主机层服务之间的抽象层设计，是整体架构落地的关键。
2.  **[#3857 [CLOSED] [Reborn] Lane 10: add Slack ProductAdapter MVP (6条评论)]**：Slack 集成是当前最核心的产品功能，其合并前的广泛讨论（6条评论）体现了其重要性。
3.  **[#4424 [CLOSED] Reborn: builtin.spawn_subagent ... model can't call it (4条评论)]**：该 Bug 导致模型无法调用一个系统内置的关键工具，社区讨论集中于模型与工具定义之间的不一致性问题。该问题已通过 PR #4467 修复，讨论热度反映了核心开发者对模型交互正确性的高度关注。

**分析：** 社区讨论的焦点已从“要不要做”转向“怎么做才正确”。开发者们正在深入讨论 Reborn 架构的细节，确保新引入的功能（如子Agent、触发器）与现有框架（如 OpenAI 兼容 API）在形态和行为上保持一致。`#4424` 这样的 Bug 被发现并迅速修复，说明项目验证流程是有效的。

## Bug 与稳定性

今日报告的 Bug 数量不多，但多为影响模型正确行为或运营可观测性的高优问题，且均已被修复或正在处理中。

| 严重程度 | Issue/PR 编号 | Bug 摘要 | 状态 |
| :--- | :--- | :--- | :--- |
| **高** | [#4424] [已关闭] | `builtin.spawn_subagent` 在结构化 `tools` 数组中缺失，导致模型无法调用该工具。 | **已修复** |
| **中** | [#4427] [开放中] | 代理循环退出原因不可见，`LoopFailureKind` 从未被追踪，仅持久化到 DB，给运营调试带来困难。 | 待处理 |
| **低** | [#4437] [已关闭] | 子Agent 完成投递的幂等性是瞬时的，超过一定条件后可能重复投递。 | **已修复** |
| **低** | [#4438] [已关闭] | 子Agent 回滚预留资源（reservations）的清理策略未定义。 | **已修复** |

**结论：** 项目的 Bug 响应非常迅速，大部分高影响 Bug 已经在 24-48 小时内被修复。`#4427` 作为可观测性缺口，需要关注，但并非阻塞性 Bug。

## 功能请求与路线图信号

今日没有来自用户的新增功能请求，但 Issue 中反映了强烈的技术债清理和架构演进信号：

- **`Reborn` 运行时空分解（#4470, #4471, #4469）**：项目维护者 `serrrfirat` 和 `henrypark133` 连续创建了 3 个追踪 Issue，指向 `ironclaw_reborn_composition` crate 膨胀严重（超过3000行）的问题。计划将其拆分为多个自有 crate，并通过 CI 强制执行边界。这强烈暗示了下一阶段的开发重点将是“结构重构与代码整理”。
- **`Reborn` 身份解析层（PR #4461）**：提出的 `ironclaw_reborn_identity` 作为一个统一的外部身份到 `UserId` 的解析层，虽然当前是 WIP，但其引入标志着一个更清晰、更安全的身份管理架构即将到来。

**路线图信号：** 项目短期内可能从“添加新功能”转向“重构现有碎片”，以提升代码可维护性和降低耦合。

## 用户反馈摘要

今日的直接用户反馈较少，因为社区主要集中在核心开发者之间。但从 Issue 和 PR 的讨论中，可以提炼出开发者的核心关切：

- **模型交互一致性是核心痛点**：`#4424` 明确指出，如果系统的“表面文本”和“结构化工具”不一致，模型（尤其是 OpenAI 兼容模型）的行为会出错。这反映了开发者对 AI 系统可靠性近乎苛刻的追求。
- **运营可观测性是成熟的标志**：`#4427` 请求在日志中追踪循环退出原因，而非仅写入数据库，这体现了开发者正在从“开发体验”转向“生产运营”视角。这是项目走向成熟的重要标志。
- **代码膨胀是架构的隐患**：`#4470` 等 Issue 明确指责 `ironclaw_reborn_composition` 承担了不必要的责任，这是开发者在提防软件熵增，体现了良好的工程文化。

## 待处理积压

以下是一些长期未响应或处于关键状态的重要 Issue/PR，建议维护团队关注：

1.  **Issue #3280 [开放，6条评论]**：作为 Reborn 的核心工作流 Issue，已有一个月历史但仍在讨论。建议在即将到来的重构阶段将其优先级提高，并明确落地计划。
2.  **PR #3951 [开放，6月更新]**：第三方扩展 Hook 激活是一个重要的生态系统特性，但自五月起一直处于开放状态。它的合并进度将影响外部开发者的集成体验。
3.  **PR #3931 [开放，6月更新]**：修复了多个关键安全问题（跨租户泄漏、重放攻击），但自五月底以来一直未合并。考虑到其安全性，该 PR 应被优先审查和合并。
4.  **PR #3936, #3937 [开放，6月更新]**：作为耐久性后端（Postgres/LibSQL）工作的核心部分，这些 PR 的合并是支撑 Reborn 在正式环境中运行的基础，长期未合并可能会阻塞其他相关任务。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，根据您提供的LobsterAI (github.com/netease-youdao/LobsterAI) GitHub数据，现为您生成2026年6月5日的项目动态日报。

---

## LobsterAI 项目动态日报 | 2026年6月5日

### 1. 今日速览

过去24小时，LobsterAI 项目保持高度活跃状态。**核心关注点集中在代码重构与稳定性修复**，特别是Cowork协作模块与MCP协议层的优化。项目合并了17个Pull Request，显示了强大的开发与交付能力。尽管没有新增或关闭问题（Issue），但合并的大量PR间接解决了包括子智能体删除、MCP超时、网关负载等在内的多个稳定性短板，整体项目健康度良好，持续向更稳定、功能更完备的方向稳步迈进。

### 2. 版本发布

无最新版本发布。

### 3. 项目进展

过去24小时内，项目合并了17个来自社区和核心贡献者的 Pull Request，涵盖多个模块。以下为关键进展：

- **Cowork 协作模块重构与优化：**
    - **核心重构 (PR #2111):** 对Cowork的语音输入功能进行模块拆分，将ASR（自动语音识别）IPC注册、录音、编码、客户端及错误处理等逻辑分离，显著提升代码可维护性。
    - **子智能体批量删除 (PR #2095):** 新增了对子智能体（Subagent）会话的批量选择与删除功能，并优化了网关记录清理机制，解决了之前只能逐个删除的痛点。
    - **Artifact 文本选择 (PR #2101):** 实现了在Markdown或纯文本Artifact预览中选择文本并直接添加到当前Cowork草稿的功能，提升了用户体验。

- **MCP (Model Context Protocol) 稳定性与兼容性：**
    - **启动优化 (PR #2091):** 针对 `npx -y <package>` 类型的MCP工具，优化了启动解析流程，预解析并本地安装，避免了每次会话启动时的慢路径，并增加了首次响应计时日志，便于分析瓶颈。
    - **URL验证 (PR #2103):** 增加了对远程MCP服务器URL的格式验证，防止配置错误导致的问题。
    - **环境一致性 (PR #2100):** 修复了在部分场景下，MCP安装时无法正确识别Node工具链路径的问题，确保构建环境一致。

- **其他重要修复：**
    - **MiniMax-M3 图像支持 (PR #2093):** 修复了MiniMax-M3模型因硬编码导致无法启用图像输入的Bug。
    - **UI/UX 修复 (PR #2097, #2101):** 为搜索弹窗增加了标题栏关闭按钮，并优化了Artifact预览交互。

项目整体在代码架构、核心功能（Cowork及MCP）的稳定性和易用性上均取得了实质性进展。

### 4. 社区热点

今日社区热点主要集中在 **PR #2111 (Cowork语音模块重构)**。这是过去24小时内唯二由 `btc69m979y-dotcom` 和 `liuzhq1986` 提交的技术性较强的重构PR，虽然没有大量评论，但其工作内容（模块拆分、错误处理分离）是项目长期健康发展的基石，表明核心贡献者正在积极解决技术债务。

此外，虽然没有最新的活跃Issue，但**Issue #769 (OpenClaw 网关启动超时)** 自3月24日创建以来，直到昨天（6月4日）还有更新，虽然仅有一个评论，但该问题直接关联到整个项目的核心网关，是潜在的重大稳定性风险。

### 5. Bug 与稳定性

今日合并的PR修复了多个潜在的稳定性问题，按严重程度排列如下：

- **高风险 - 网关负载过大 (PR #2110):** 由 `liuzhq1986` 提交的 `fix(cowork): guard oversized OpenClaw image payloads`。该PR通过检测并阻止过大的图片负载发送至OpenClaw网关，避免了因“超大消息”导致的 `1009` 类型网关失败，是直接针对稳定性脆弱点的修复。**【已有fix PR】**
- **中风险 - MCP 启动失败 (PR #2100, #2091):** 两个PR均聚焦于MCP启动的稳定性和效率，解决了环境不一致导致的安装失败和重复启动的慢路径问题。
- **中风险 - MiniMax 模型功能缺失 (PR #2093):** 解决了MiniMax-M3模型无法使用图像输入功能的严重功能缺失问题。
- **低风险 - UI/UX 一致性问题 (PR #2097):** 为搜索弹窗添加了关闭按钮，优化了交互体验。

此外，**#769 [OPEN] Issue (网关启动超时)** 仍处于开放状态，这是一个高优先级的潜在故障点，需要持续关注。

### 6. 功能请求与路线图信号

今日合并的PR显示了项目路线图的几个明确信号：

- **增强子智能体管理 (PR #2095):** 批量删除功能的引入，表明项目正认真对待“子智能体”这一高级功能，并不断改善其易用性。
- **Artifact 交互深化 (PR #2101):** 允许用户将Artifact中的文本内容直接添加到对话框，这表明项目正在探索如何让“工作成果（Artifacts）”和“对话（Cowork）”更紧密地融合，提升工作流的连贯性。这很可能成为下一版本的重点功能。
- **MCP 体验优化持续进行 (PR #2091, #2100, #2103):** 针对MCP的连续修复和优化，表明项目正致力于构建一个稳定、快速且易于扩展的第三方工具集成生态系统，这是其“AI智能体”构想的关键基石。

### 7. 用户反馈摘要

由于过去24小时内没有新增的活跃Issue评论，我们无法提取新的用户直接反馈。然而，从已合并的PR（尤其是#2093和#2110）的动机来看，可以推断出以下用户痛点：

- **模型功能不一致:** 用户在使用MiniMax-M3模型时，发现本应支持的图像输入功能无法使用，反映出配置或模型定义方面可能存在疏忽。
- **网关稳定性脆弱:** 用户在Cowork工作流中，可能反复因为图片文件过大导致任务失败，这是一个非常实际的体验痛点。PR #2110 的修复直接回应了这一问题。

### 8. 待处理积压

- **Issue #769 (OpenClaw 网关超时):** **【高优先级】** 该问题自2026年3月出现，涉及项目核心组件“OpenClaw网关”无法启动。问题描述不清晰，且已有一个评论。由于项目方近期有多个针对OpenClaw的PR（如#2110），建议维护者主动跟进此Issue，要求用户提供更详细的启动日志或复现步骤。**维护者应优先关注此项。**
  - **链接:** [netease-youdao/LobsterAI Issue #769](https://github.com/netease-youdao/LobsterAI/issue/769)

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

好的，这是为您生成的 Moltis 项目动态日报。

---

### Moltis 项目动态日报 | 2026-06-05

#### 1. 今日速览

项目今日活跃度中等，核心关注点在**社区功能请求**的涌现和**浏览器自动化能力**的改进上。24小时内收到了2个新功能请求（本地STT引擎、SMS/LINE通道）和4个待合并的Pull Request，但无新版本发布。PR主要集中在**Shadow DOM穿透**和**Tool结果内存管理**等关键技术优化上，显示出项目在提升稳定性和扩展性方面的持续投入。社区对新集成渠道和本地化语音引擎的需求较为强烈。

#### 2. 版本发布

无

#### 3. 项目进展

今日无已合并或关闭的PR，但以下4个待合并的PR是项目当前的重点推进方向：

- **浏览器自动化能力增强**：
    - **PR #1100** 和 **PR #1103** 均致力于解决浏览器工具（Browser Tool）无法与Web Components（如Salesforce Lightning）内的Shadow DOM元素交互的问题。`#1103` 是 `#1100` 的优化替代方案，修复了快照采集和引用查找中对Shadow DOM的穿透能力。这显著提升了Moltis在复杂现代Web应用上的自动化范围。
    - 链接: [PR #1100](https://github.com/moltis-org/moltis/pull/1100) | [PR #1103](https://github.com/moltis-org/moltis/pull/1103)

- **会话历史稳定性优化**：
    - **PR #1089** 对会话历史中持久化的 `tool` 和 `tool_result` 内容进行了大小限制（Cap），防止在历史重载（Rehydration）时因数据过大导致崩溃或性能问题。这覆盖了普通聊天、流式聊天、内存压缩等核心场景，是提升项目长期运行稳定性的关键一步。
    - 链接: [PR #1089](https://github.com/moltis-org/moltis/pull/1089)

- **Telegram 频道消息分离**：
    - **PR #1099** 解决了 Telegram 频道中进度流与最终回复混合的问题。它将流式处理的进度消息（可编辑、可删除）与最终的正式回复分离，改善了用户在 Telegram 上的对话体验。
    - 链接: [PR #1099](https://github.com/moltis-org/moltis/pull/1099)

**项目健康度评估**: 项目正处于“功能扩展”与“基础加固”并行的健康发展阶段，社区贡献活跃，维护者对关键PR的Review和迭代响应及时。

#### 4. 社区热点

今日无单一Issues或PR引发大量讨论，但社区关注的焦点集中在**新功能请求**上：

- **本地STT引擎**：`#1102` 请求集成 **FunASR** 或 **SenseVoice** 作为本地语音识别引擎，理由是**超低延迟**（SenseVoice-Small 70ms处理10秒音频）和**原生流式支持**。这表明用户对数据隐私和本地化处理有明确需求，希望摆脱对云端语音识别服务的依赖。
    - 链接: [Issue #1102](https://github.com/moltis-org/moltis/issues/1102)

- **新渠道集成**：`#1101` 请求增加 **SMS** 和 **LINE** 通道。这反映出用户希望将Moltis的能力无缝嵌入到更多日常生活和工作中使用的通信平台。
    - 链接: [Issue #1101](https://github.com/moltis-org/moltis/issues/1101)

**核心诉求分析**: 用户的主要诉求是“**更强大、更私密、更广泛**”。即更强的本地化能力（STT）、更广泛的应用集成（多渠道）和更健壮的底层执行（Shadow DOM）。

#### 5. Bug 与稳定性

今日无新的Bug或回归问题报告。项目的稳定性工作主要体现在上述**PR #1089**（Tool结果大小限制）的推进上，这是一个预防性的性能优化，旨在避免未来可能因历史数据膨胀导致的崩溃。

- **潜在稳定性修复**：
    - **PR #1089** (CPC): [链接](https://github.com/moltis-org/moltis/pull/1089)
    - 通过限制Tool结果在重载时的大小，防止内存溢出或UI冻结，属于中等重要性的稳定性增强。

#### 6. 功能请求与路线图信号

- **高概率纳入候选**：
    - **本地STT引擎 (Issue #1102)**：该请求具有明确的技术优势（低延迟）和社区价值（隐私），与Moltis作为“本地化AI助手”的定位高度契合。如果SenseVoice的许可证兼容，下一个版本极有可能集成此功能。
    - **Telegram消息分离 (PR #1099)**：该PR已经处于待合并状态，几乎可以确定会进入下一个版本。

- **中概率路径信号**：
    - **SMS/LINE 通道 (Issue #1101)**：虽然请求合理，但实现新的通信通道涉及到SIM卡或API集成等外部依赖，工作量较大。目前仅有一个功能请求，尚不足以判定其是否能快速进入路线图。

#### 7. 用户反馈摘要

- **正面反馈**：用户 `LauraGPT` ([Issue #1102](https://github.com/moltis-org/moltis/issues/1102)) 表达了对项目的高度认可，称其为“Great voice assistant project!”，并在请求中提供了详尽的技术理由，体现了高质量的社区参与。
- **功能需求**：
    - 用户对**本地语音识别**有强烈需求，希望利用 FunASR/SenseVoice 的**低延迟和流式能力**。
    - 用户 `joeblew999` ([Issue #1101](https://github.com/moltis-org/moltis/issues/1101)) 提出了明确的**多通道集成**需求，并将其与SMS、LINE等具体应用场景相结合。
- **使用场景**：当前社区反馈指向了**企业级Web自动化（Shadow DOM）** 和**个人隐私优先的语音交互**两大典型使用场景。

#### 8. 待处理积压

今日无长期未响应的Issue或PR。所有新提交的Issue和PR都在24小时内获得了处理或处于待评审状态，项目维护者的响应速度良好。无需特别提醒。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-06-05

## 1. 今日速览

CoPaw 项目今日整体保持**高度活跃**状态，过去24小时共处理 **32 条 Issue**（新开/活跃13条、关闭19条）和 **26 条 PR**（待合并10条、已合并/关闭16条），并发布了 **v1.1.11-beta.1** 补丁版本。

社区讨论热度集中在**上下文压缩（/compact）崩溃**、**MCP 工具名兼容性**以及两项呼声很高的**用户中断执行**和**定时任务支持脚本执行**的功能请求上。Bug 修复方面，前端单元测试里程碑、MCP 工具名转义、文件 I/O 异步化等关键 PR 已合并，项目整体稳定性与可观测性均有所提升。同时出现了多位**首次贡献者**提交的 PR，社区参与度良好。

---

## 2. 版本发布

### v1.1.11-beta.1

- **发布时间**：2026-06-04（推测）
- **包含修复**：
  - `fix(config): add ProviderManager fallback to get_model_max_input_length` — 修复模型最大输入长度获取时的 ProviderManager 回退逻辑（@szetohoyan）
  - `refactor(cron): disable push bubbles for cron jobs of type 'agent'` — 禁用 agent 类型定时任务的推送气泡功能（@lalaliat）
- **破坏性变更**：无
- **迁移注意事项**：无特殊步骤，建议更新后重启服务

---

## 3. 项目进展

### 今日合并/关闭的重要 PR（部分已完成合并）

| PR | 作者 | 内容 | 状态 |
|----|------|------|------|
| #4806 | rayrayraykk | 新增 `spawn_subagent` 工具，支持 ephemeral 子代理在 workspace 内执行任务，与 `chat_with_agent` 形成互补 | ✅ 已关闭 |
| #4958 | qbc2016 | 修复 MCP 工具名包含 `.` 等非法字符被 OpenAI/Anthropic API 拒绝的问题，自动别名转义 | ✅ 已关闭 |
| #4879 | szetohoyan | 支持飞书交互卡片内容提取，重构消息解析流程 | ✅ 已关闭 |
| #4848 | celestialhorse51D | QQ 频道新增二维码授权登录 | ✅ 已关闭 |
| #4332 | hanson-hex | 完成前端单元测试里程碑，新增10个测试文件、~100个测试用例 | ✅ 已关闭 |
| #4801 | wangfei010313 (首次贡献者) | 修复 Windows 桌面版 v1.1.9 因 pyside6-essentials 缺失导致宠物插件启动失败 | ✅ 已关闭 |
| #4853 | wangfei010313 | 修复 Windows 上浏览器进程残留、临时目录锁定的问题 | ✅ 已关闭 |
| #4954 | qbc2016 | 将 `write_file`/`append_file` 替换为 `aiofiles` 异步写入，不再阻塞事件循环 | ✅ 已关闭 |
| #4925 | hongxicheng | 修复多渠道消息合并时 `acl_sender_id` 字段丢失导致白名单校验失败 | ✅ 已关闭 |

**整体进展**：项目在**子代理架构**、**前端测试基础**、**渠道兼容性（飞书、QQ）**、**桌面端稳定性**以及**文件 I/O 性能**等方向均有实质推进。多项 Bug 修复已合并，代码质量持续提升。

---

## 4. 社区热点

| 项目 | 标题 | 评论数 | 点赞 | 链接 |
|------|------|--------|------|------|
| Issue #4644 | Console UI: tool calls often not displayed until page refresh | 20 | 0 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/4644) |
| Issue #4796 | /skills tab 自动关联 / 自动补全 skill 建议 | 6 | 0 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/4796) |
| Issue #4652 | 强化记忆系统总结-关联-提醒机制 | 4 | 0 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/4652) |
| Issue #3891 | DeepSeek 前缀缓存命中率低～95% | 4 | 1 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/3891) |
| Issue #4961 | 用户新消息打断 agent 执行 | 2 | 0 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/4961) |
| Issue #4950 | Cron 任务支持直接执行脚本 | 2 | 0 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/4950) |

**分析**：
- **#4644（Console UI 工具调用不刷新）** 是今日评论最多的 Issue，横跨1-2周未完全定位，开发者已将其关闭但用户群里仍有反响。
- **#3891（DeepSeek 缓存命中率）** 虽然创建较早但依然活跃，反映了用户对成本优化的强烈关注。
- **#4961 / #4950** 是由同一名用户（feng183043996）提出的两项功能，均获得了快速响应和单独开辟 Issue/PR 的待遇，说明维护者对其诉求认可度高。

---

## 5. Bug 与稳定性

### 严重 Bug（按严重程度排列）

| ID | 标题 | 严重程度 | 当前状态 | Fix PR |
|----|------|----------|----------|--------|
| #4956 | context compact 持续报错 `'str' object has no attribute 'get'` | **严重**（每次交互触发，日志洪水） | 已关闭 | 无独立 PR（可能与 #4953 重复） |
| #4953 | /compact 在消息 content 含混合类型列表时崩溃 | **严重**（功能不可用） | 已关闭 | 无 |
| #4937 | /compact 忽略模型 max_input_length，仍用128K默认值 | **中等**（配置不生效） | OPEN | 暂无 |
| #4962 | DeepSeek API 回复内容折叠到思考过程中 | **中等**（影响体验） | OPEN | 暂无 |
| #4959 | Latex 公式显示异常 | **低**（视觉问题） | OPEN | 暂无 |
| #4960 | 桌面版局域网手机无法访问控制台 | **低**（环境相关） | OPEN | 暂无 |
| #4957 | Task Status API 返回过期状态（`running`） | **中等**（可能导致客户端误判） | OPEN | 暂无 |
| #4928 | 技能市场下载报错（文件过大超限） | **低**（下载限制） | 已关闭 | 无 |
| #4918 | MCP 工具名含 `.` 调用失败 | **高**（特定模型完全不可用） | 已关闭 | PR #4958 ✅ |
| #4781 | tool_result_pruning 对大输出防爆失败 | **中等**（可能导致上下文爆炸） | 已关闭 | 无 |

**稳定性亮点**：前端单元测试全面覆盖后，核心组件的回归风险降低。

---

## 6. 功能请求与路线图信号

### 高潜力纳入下一版本的功能

| ID | 请求内容 | 热度 | 已有 PR？ | 分析 |
|----|----------|------|-----------|------|
| #4964 | 用户新消息可直接打断正在执行的 agent | 🔥🔥🔥 | 已从 #4961 独立为 #4964 | 与 #4961 相同需求，已在维护者关注列表中 |
| #4963 | Cron 任务支持直接执行 shell 脚本 | 🔥🔥🔥 | 已从 #4950 独立为 #4963 | 与 #4950 相同需求，将进入开发 |
| #4767 | 每会话 Token 用量可视化 | 🔥🔥 | PR #4433 已在 Review | 已有 PR 待合并 |
| #4782 | 前端显示已用上下文大小 + 总大小 | 🔥🔥 | PR #4433 涵盖 | 同上 |
| #4757 | 自动 Provider 降级（类似 cc-switch） | 🔥🔥 | 暂无 | 社区呼声渐高，可能进入 roadmap |
| #4786 | 生成的 word/ppt 提供快捷打开入口 | 🔥 | 暂无 | UX 改善类，优先级可能偏中 |

### 路线图信号

- **前端 Token/上下文信息展示**：PR #4433 正在进行 Review，预计将显著增强用户对上下文使用情况的感知。
- **生命周期与后台子代理管理**：PR #4955（首次贡献者 splash-li）新增 spawn_subagent 的父子生命周期追踪、完成事件、心跳检测和取消传播，针对 #4873 优化后台子代理体验。
- **ACP 协议增强**：PR #4949 扩展了 ACP 服务器元数据，改善终端客户端（paw TUI）体验，显示命令、报错、工具参数等信息。

---

## 7. 用户反馈摘要

### 真实痛点

1. **上下文压缩频繁崩溃**（#4956、#4953）：用户 HZJprince 和 huiquanyun 均报告 /compact 在执行时因消息格式异常（`content` 为字符串而非对象）导致 `AttributeError`，影响正常会话流程。
2. **MCP 工具名兼容性问题**（#4918）：用户 Smalye 报告在接入 pat 服务（工具名含 `.`）时，gpt-5.5 模型直接拒绝请求，该问题已在 PR #4958 修复。
3. **桌面端局域网访问受限**（#4960）：用户 CNMacmillan 尝试用手机浏览器访问桌面版控制台失败，即使白名单、防火墙均配置正确。

### 满意之处

- **记忆系统提案**（#4640、#4652）虽然尚未开发，但用户 feng183043996 多次提出完整的功能设计文档，且每次都获得维护者快速响应和独立 Issue/PR 分配，社区反馈良好。
- **前端测试里程碑完成**（#4332）获得肯定，用户期望不再出现 UI 层面基本回归问题。

### 使用场景

- 企业微信/飞书群聊天务：多位用户（rescodexa、feng183043996）在使用 CoPaw 做团队协作助手时，提出自动打断、脚本执行、Token 管理、文件预览等功能，代表典型的**企业 Agent 落地场景**。
- 代码开发与项目管理：Smalye、li-viollent 等用户展示出将 CoPaw 用于日常代码审查、项目规范检查等场景。

---

## 8. 待处理积压

### 重要长期未响应的 Issue

| ID | 标题 | 创建时间 | 最后更新 | 评论/👍 | 说明 |
|----|------|----------|----------|---------|------|
| #3891 | DeepSeek 前缀缓存命中率偏低（~95%） | 2026-04-27 | 2026-06-04 | 4评论/1👍 | 有独立成本优化价值，但未见明确开发时间线 |
| #4181 | 自动模型故障切换（自动 failover） | 2026-05-10 | 2026-06-04 | 2评论 | 与 #4757 诉求相似但更早提出，尚未进入开发 |
| #4622 | DataPaw 数据分析插件 | 2026-05-22 | 2026-06-04 | OPEN | 功能完整但尚未合并，待 Review |

### 待合并的 PR（超过3天无更新）

| PR | 标题 | 作者 | 创建时间 | 说明 |
|----|------|------|----------|------|
| #4669 | 桌面端 Tauri 自动更新器 | jinglinpeng | 2026-05-25 | 依赖 PR #3813 基础，需等待基础合并 |
| #4766 | 环境变量页面滚动条闪烁修复 | SnowTQ（首次贡献者） | 2026-05-28 | 简单修复，应尽快 Review 合并 |
| #4765 | 安全页面 UI 优化 | SnowTQ（首次贡献者） | 2026-05-28 | 同上，建议合并以示鼓励 |
| #4900 | 插件加载器与 agent 启动解耦 | wangfei010313 | 2026-06-02 | 解决桌面版 PyInstaller 环境下插件加载超时问题，建议加快 Review |
| #4932 | 钉钉跨用户消息合并修复 | hongxicheng | 2026-06-03 | 修复多个用户消息因 conversation_id 后缀冲突被错误合并 |
| #4934 | OpenSandbox 插件（首次贡献者） | hxnan | 2026-06-03 | 新增安全沙箱执行能力 |

---

**报告日期**：2026-06-05  
**数据来源**：GitHub (agentscope-ai/CoPaw)  
**报告生成方式**：AI 智能体 + 个人 AI 助手领域开源项目分析师

--- *Everything is a conversation. CoPaw 值得关注。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，以下是根据您提供的ZeroClaw (ZeroClaw-labs/zeroclaw) GitHub数据生成的2026年6月5日项目动态日报。

---

# ZeroClaw 项目日报 | 2026-06-05

## 1. 今日速览

ZeroClaw 项目今日进入高强度开发与修复阶段。社区活跃度极高，在24小时内产生了**35个Issue**和**50个PR**，主要集中在稳定性修复、安全增强和Web UI的易用性改进上。尤为值得注意的是，`master`分支在构建回归（Ollama Provider编译错误）后被快速修复，但同时也暴露了CI流程的潜在漏洞。项目正稳步向`v0.8.0`迭代，多个与企业级部署相关的安全特性（如A2A协议、可插拔安全层）讨论热烈。

**活跃度评估**：⭐⭐⭐⭐⭐ (极其活跃)

## 2. 版本发布

**无新版本发布。**

当前开发工作明确指向 `v0.8.0` 版本，其发布队列和稳定性障碍已在 Issue #7112 中作为Tracker进行跟踪。

## 3. 项目进展

今日有 **17个PR被合并/关闭**，主要进展包括：

- **核心功能修复**
    - **Ollama Provider 回归修复**：`master`分支因PR #7095导致的编译问题（`f64`类型不匹配），已通过PR #7231（`fix(ollama): restore compiling master build`）和PR #7213（`fix(providers): fixes use of f64 after signature change`）快速修复，确保了基础的Ollama兼容性。
    - **会话与时间管理**：
        - PR #7222（`fix(gateway): clear backend history on "Clear all" + don't resurrect deleted session`）修复了Web UI “Clear all”按钮的后端持久化问题，解决了重新加载页面后历史记录恢复的Bug。
        - PR #7179（`[Bug]: ZeroClaw Reaps Idle RPC Sessions at 10 Minutes`）被关闭，表明闲置RPC会话的回收机制问题已得到处理或确认。
- **安全与可观测性增强**
    - **Web UI安全性**：PR #7219（`fix(web): cover ApprovalBanner and error banner in translate="no" guard`）和PR #7221（`fix(gateway): block observability telemetry from chat WS by default`）分别解决了浏览器自动翻译导致的重要UI文本（如审批、错误提示）错误，以及可观测性遥测数据泄漏到聊天WebSocket导致界面异常的问题。
- **文档与流程优化**
    - **文档构建修复**：PR #7124（`fix(docs): keep _shared chrome master-owned and retrofit version selector`）修复了版本化文档部署时，主分支构建覆盖旧版本样式文件的问题。
    - **翻译文件清理**：PR #7200（`fix(docs): audit generated PO contamination`）清理了POT翻译文件中残留的机器生成内容和文档引用，提升了翻译更新的可维护性。

## 4. 社区热点

- **Agent间通信（A2A）协议支持 `[#3566]`**
  - **链接**：[Issue #3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566)
  - **热点分析**：该项目获得了 **7个👍** 和 **5条评论**，是今日讨论热度最高的议题。用户不仅要求支持A2A协议，更在随后的`[#7218]`中深入探讨了多Agent部署场景下的发现机制（`.well-known/agent-card.json`）。这表明社区对ZeroClaw作为多Agent系统中枢的期望很高，诉求从“能通”转向了“易用互通”。

- **计算机操控（Computer-Use）能力 `[#6909]`**
  - **链接**：[Issue #6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)
  - **热点分析**：紧随A2A之后的另一大热点功能。用户NiuBlibing明确提出希望ZeroClaw具备类似OpenAI Codex的屏幕截图和鼠标键盘操控能力。这反映了高级用户希望将AI Agent从“代码助手”扩展到“桌面自动化助手”的强烈需求，是AI Agent UI自动化的一个重要信号。

- **高风险Shell命令执行策略 `[#7155]`**
  - **链接**：[Issue #7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)
  - **热点分析**：此议题由NiuBlibing提出，要求增加一种“每次执行都需要手动确认”的中间风险等级，并引入类似Claude Code的`allow/ask/deny`策略。这反映了社区对Agent权力边界精细控制的迫切需求，用户希望在安全性与自动化程度之间获得更灵活的平衡，而非简单的“是/否”选项。

## 5. Bug 与稳定性

今日报告的Bug主要集中在Web UI和Agent行为上，按严重程度排列如下：

| 严重程度 | 问题 (Issue)                                                              | 状态 | 分析                                                                                             | 相关Fix PR                                                       |
| :------- | :------------------------------------------------------------------------ | :--- | :----------------------------------------------------------------------------------------------- | :--------------------------------------------------------------- |
| **S1 - 工作流阻塞** | TUI 在与守护进程断开连接后完全冻结 `[#7125]`                                | OPEN | 严重影响用户，导致TUI无法使用，必须强制退出。需紧急处理。                                       | 无                                                               |
| **S1 - 工作流阻塞** | Agent反复执行近似的Shell发现命令，耗尽`max_tool_iterations` `[#7143]`       | OPEN | 核心Agent循环问题，导致Slack等场景下Agent“空转”，严重影响工作效率。                             | 无                                                               |
| **S2 - 行为降级**  | Web UI "Clear all" 不清理后端历史 `[#7126]`                                | OPEN | 功能半残，用户无法有效管理会话。已被修复。                                                       | 已于 PR #7222 修复                                                         |
| **S2 - 行为降级**  | 可观测性遥测数据泄漏到聊天WebSocket，导致渲染“unknown”工具卡片 `[#7151]`     | OPEN | 界面混乱，干扰正常使用。已被修复。                                                               | 已于 PR #7221 修复                                                         |
| **S2 - 行为降级**  | WhatsApp Web 群组中 `mention_only` 忽略对机器人的回复 `[#7225]`             | OPEN | 功能逻辑缺陷，导致用户必须再次@机器人才能对话，交互体验不佳。                                     | 无                                                               |
| **S1 - 工作流阻塞** | Windows Shell 工具中命令包含双引号时出错 `[#7083]`                         | 已关闭 | 严重的平台兼容性问题，影响所有Windows用户的Shell命令执行。                                       | `[#7083]` (已关闭)                                               |
| **S1 - 工作流阻塞** | Quickstart 硬编码提供商别名为`default`，与现有配置冲突 `[#7227]`            | OPEN | 新用户引导流程的关键Bug，可能导致初始化失败或覆盖现有配置。需要修复。                           | 无                                                               |

## 6. 功能请求与路线图信号

- **近期可能纳入 (`v0.8.0` / `v0.9.0`)**
  - **可插拔安全层**：`[#7142]` 提出将安全策略暴露为可插拔接口。
  - **钩子(WebHook / OIDC)认证**：`[#7141]` 要求在RPC/WSS传输层支持OIDC认证。
  - **模型能力配置**：`[#7100]` 允许用户精细配置每个模型的`vision`和`context_window`。这将对模型切换、UI显示和上下文预算管理产生深远影响。
  - **Web UI 文件上传**：`[#7138]` 和 `[#7223]` 支持文件上传和斜杠命令，显著提升Web UI作为主交互界面的能力。相关PR已提出，预计会尽快合并。

- **长期路线图信号 (`v0.8.1` 及以后)**
  - **A2A Agent 发现**：`[#7218]` 定义了多Agent部署下的服务发现机制，是构建Agent生态的基础。
  - **计算操控 (Computer-Use)**：`[#6909]`、**LSP支持** `[#5907]`，这些都是让Agents更贴近“自主工程师”愿景的高级特性，虽无直接PR，但社区呼声极高，是路线图中的重要潜在方向。

## 7. 用户反馈摘要

- **痛点**：
  - **稳定性之痛**：多个用户（如 `sbenedetto` 在 `[#7143]` 中）抱怨Agent在执行任务时会“卡死”或“空转”，尤其是在集成Slack等外部通道时，导致长时间无响应，体验差。
  - **平台兼容性**：Windows用户在 `[#7083]` 和 Linux 用户在 `[#7155]` 中都反映了对不同平台Shell执行行为的理解和控制不足。
  - **配置复杂性**：新用户 `JordanTheJet` 在 `[#7227]` 中反馈Quickstart流程存在硬编码缺陷，入门路径不顺畅。
  - **Web UI功能缺失**：用户 `NiuBlibing` 在多个Issue中（如 `[#7138]`，`[#7137]`）反馈Web UI相比终端和通道，功能落后（无文件上传、无斜杠命令、UI组件翻译不全）。

- **积极反馈**：
  - `sbenedetto` 在 `[#7143]` 开头真诚感谢项目：“First, thank you for the project. It is great to see a Rust-based agent runtime that is much lighter on resources than many other agent systems we have tried.” 这表明ZeroClaw作为Rust实现的高性能Agent运行时的定位得到了社区的认可。

## 8. 待处理积压

- **潜在大号回归**：`[#6074]` 跟踪了153个提交被批量回滚的审计问题。这是一个未完成的重要技术债，需要维护者关注，以避免未来版本合并时引入已修复的旧Bug。 **【提醒维护者：请评估此审计的优先级，确保Master分支历史清晰、无遗漏。】**
- **机器翻译污染**：`[#7200]` 的Fix PR虽已提出，但问题（`[#7184]`，翻译文件作为子模块）仍处于Open状态。将翻译文件移出主仓库是一个良好的工程实践，能防止非核心变更污染主历史。 **【建议维护者推动此议题，以改善贡献者和翻译工作流的体验。】**

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*