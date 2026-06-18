# OpenClaw 生态日报 2026-06-18

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-18 00:33 UTC

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

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，这是为 OpenClaw 项目生成的 **2026年6月18日项目动态日报**。

---

# OpenClaw 项目日报 | 2026-06-18

**数据截止时间：** 2026-06-18 00:00 UTC

---

### 1. 今日速览

今日 OpenClaw 项目呈现 **极高活跃度**，24小时内处理了500条 Issues 和 500条 PRs，其中新开 Issues 占比高达 95.6%，待合并 PR 占比 87.8%，表明社区反馈和新功能探索极为活跃。然而，项目核心开发存在部分积压：大量关键 Bug (P0/P1) 和长期功能请求 (如跨平台支持) 仍在等待维护者决策或修复。关键进展集中在**会话/转录数据迁移**、**Cron 作业可靠性** 和 **通道兼容性修复** 上。整体来看，项目处于社区驱动的高速迭代期，但稳定性和安全问题需引起高度关注。

### 2. 版本发布

无新版本发布。

### 3. 项目进展

今日合并/关闭的 PR（61条）主要集中在提升核心稳定性和修复已知缺陷，以下是关键进展：

- **会话/转录数据迁移 (`session/transcript SQLite migration`)**
    - 议题 `#88838` 提出了一项关键的基础设施改进：通过“分支抽象” (branch-by-abstraction seam) 的方式，将核心运行时状态迁移至 SQLite，避免一次性大规模重写带来的高风险。此提案被标记为 P0 优先，表明项目正在为更健壮的会话管理打下基础。
- **Cron 作业可靠性修复**
    - **`pr#85249`**: 修复了隔离的 Cron 执行器中 `sourceDelivery` 未定义的崩溃问题，提升了 Cron 任务的稳定性。
    - **`pr#93580`**: 修复了 Cron 定时投递后，目标会话失去上下文感知的问题，使 Cron 交互更加连贯。
- **通道特定修复**
    - **LINE 通道 (`pr#86013`)**: 一次性修复了9个消息格式错误，包括表格渲染、代码块显示和 Flex Message 负载验证，拥有285个测试用例通过，显著提升 LINE 通道的稳定性。
    - **Telegram 通道 (`pr#94207`)**: 修复了消息写入 Spool 后未能及时唤醒主会话处理的问题，解决了“能收到但无响应”的困扰。
    - **Matrix 通道 (`pr#93696`)**: 允许推理回复 (`/reasoning on`) 作为 `m.notice` 类型消息投递，而不是被静默丢弃。
- **Agent 与工具改进**
    - **`pr#91988`**: 修复了预配置工作区中，`BOOTSTRAP.md` 文件在首次引导时被误删的问题。
    - **`pr#94106`**: 修复了密钥迁移 (`Secrets`)，确保迁移一个提供商的密钥不会误删另一个提供商的凭据。
    - **`pr#94310`**: 新增功能，自动检测容器化环境并禁用不持久的本地更新提示，优化了 Docker/K8s 用户体验。
- **打包与安全**
    - **`pr#93404`**: 增加了 Agent SDK 打包规范 (v0.3) 和实现骨架，引入了路径验证和隔离限制，为标准化 Agent 分发铺平道路。
    - **`pr#92086`**: 新增“安全矩阵”运行时审计模型，用于评估与安全相关的操作，增强了项目的安全可观测性。

### 4. 社区热点

今日讨论最热烈的议题反映了用户对基础体验、安全控制和跨平台支持的迫切需求。

1.  **Linux/Windows Clawdbot Apps (`#75`)**
    - **评论: 109 | 👍: 79**
    - **链接:** [Issue #75](https://github.com/openclaw/openclaw/issues/75)
    - **分析:** 作为今日评论数和点赞数最高的议题，用户对 OpenClaw 缺乏 Linux 和 Windows 客户端感到非常不满。诉求非常明确：希望在这两大平台上获得与 macOS 相似的功能体验。此议题自 2026年初提出，长期未解决，已成为社区最渴望的高级功能之一。

2.  **`[Bug]: Silently lost connection to Slack` (`#72808`)**
    - **评论: 20 | 👍: 3**
    - **链接:** [Issue #72808](https://github.com/openclaw/openclaw/issues/72808)
    - **分析:** 用户在演示时遭遇 Slack 连接静默丢失，严重影响使用信心。这暴露了通道协议层的稳定性缺陷，虽然 Issue 状态为 `stale`，但“无声中断”是比显式报错更严重的问题，社区期待根本性修复。

3.  **`[Bug]: control ui requires device identity` (`#32473`)**
    - **评论: 17 | 👍: 5**
    - **链接:** [Issue #32473](https://github.com/openclaw/openclaw/issues/32473)
    - **分析:** 用户在 VPS/Docker 环境中设置时遇到的 HTTPS/localhost 安全上下文问题。这是一个影响广泛的配置痛点，尤其对于非本地部署的用户，反映了官方文档和引导流程可能未充分覆盖各种部署场景。

### 5. Bug 与稳定性

今日报告的 Bug 和回归问题呈现数量多、影响广的特点，安全与会话丢失是核心痛点。严重性排序如下：

| 严重性 | 议题 (Issue) | 影响 | 是否有 Fix PR |
| :--- | :--- | :--- | :--- |
| **P0** | **`#88838`** Track core session/transcript SQLite migration via accessor seam | 会话状态、消息丢失 | **Strategy Proposal** |
| **P1** | **`#22676`** Signal daemon stop() race condition | 消息丢失、崩溃循环 | 无 |
| **P1** | **`#62505`** Coding Agent never completes anything (regression) | 会话状态 | 无 |
| **P1** | **`#40001`** Write tool lacks append mode | 数据丢失 | 无 |
| **P1** | **`#29387`** Bootstrap files in agentDir silently ignored | 会话状态 | 无 |
| **P1** | **`#32473`** control ui requires device identity | 安全、认证 | 无 |
| **P1** | **`#85103`** Model fallback chain not triggered on quota exhaustion | 会话状态、消息丢失 | 无 |
| **P1** | **`#74484`** Gateway pairing scope deadlock | 认证 | 无 |
| **P1** | **`#75593`** subagents list still empty after spawn | 会话状态 | 无 |
| **P2** | **`#72808`** Silently lost connection to Slack | 消息丢失 | 无 |
| **P2** | **`#57901`** Safeguard compaction ignores compaction.model config | 会话状态 | 无 |
| **P2** | **`#45765`** `OPENCLAW_HOME` 设置产生嵌套目录 | 会话状态 | 无 |
| **P2** | **`#93895`** Cron jobs silently dropped during hot reload | 数据丢失 | 无 |

### 6. 功能请求与路线图信号

新功能请求集中于增强安全模型和提升 Agent 可控性，部分已有 PR 匹配，预示可能被纳入未来版本。

- **安全与权限增强**
    - **`#39604`** `tools.web.fetch.allowPrivateNetwork`: 请求为 `web_fetch` 工具添加私网访问开关，目前有13条评论和9个👍，需求强烈。
    - **`#7722`** & `#39979`: 请求从文件路径和二进制级别实现更细粒度的 filesystem 和 exec 权限控制（RWX）。`#39979` 提出了与 Unix DAC 类似的“路径键控权限”，理念先进。
    - **`#6731`** `safe/unsafe ClawdBot`: 一个有趣但激进的提案，建议重写 Rust 以实现内存安全特性。该提案可能引发架构层面的讨论。
- **Agent 能力与扩展**
    - **`#22438`** `Tiered bootstrap file loading`: 提出为引导文件引入分层加载机制，以节省 Token 成本。评论中有17条讨论，说明高价值用户对此痛点非常关注。
    - **`#22358`** `Post-subagent completion extension hook`: 请求在子Agent完成时增加钩子，便于生成结构化轨迹文件。与 PR `#76927` (排队子Agent完成宣告) 相关，表明项目正在向更复杂的编排能力演进。
    - **`#33413`** `Show tool-level progress in Slack`: 用户希望在 Slack 中看到 Agent 实时执行进度，而非“正在输入…”。这是用户体验提升的小而关键的点。
- **生态与跨平台**
    - **`#20786`** `Telegram Business Bot support`: 请求支持 Telegram Business 连接，以便在个人聊天中使用 Bot。有8条评论和6个👍，对于商务用户有吸引力。
    - **`#13616`** `Backup/restore utility`: 尽管评级不高，但这反映了用户对数据安全和灾难恢复的长期需求，对于企业级部署至关重要。

### 7. 用户反馈摘要

从 Issue 评论中提炼出以下真实用户反馈：

- **痛点：**
    - **连接稳定性差：** “My slack connection... had been working fine for several days. Today at lunch, I tried to demo... it never answered.” (`#72808`)  – 用户体验严重受损。
    - **Agent 行为退化：** “Coding Agent... just doesnt do _anything_ apart from vague status updates” (`#62505`) – 回归问题导致生产力工具完全失效，用户非常沮丧。
    - **配置体验不佳：** “I'm using a Hostinger VPS and Docker... I can't find how to solve this” (`#32473`) – 用户在非标准部署中遇到困难，缺乏清晰的解决路径。
    - **功能不符合预期：** “The docs for `/hooks/agent` state... However, this does not work as documented.” (`#11665`) – 文档与实际实现不符，损害信任。
- **使用场景：**
    - **企业级部署：** 用户希望将 Agent 用于“CRM summaries, daily briefings” (`#12602`)，并需要“structured trajectory files (task → decisions → retrospective)” (`#22358`) 来进行复盘。
    - **安全敏感操作：** 用户希望配置“allow everything except X”的 exec 策略 (`#6615`)，说明在无人值守/高权限场景下有深层次的安全需求。
    - **社区驱动协作：** 用户认为“Safe mode can be running ClawdBot locally in a sandbox...” (`#6731`) 并建议“重写 Rust”，体现了开源社区希望参与架构决策的热情。

### 8. 待处理积压

以下为长期未响应或未解决的 Issue/PR，提醒维护者关注：

1.  **`#75` [Linux/Windows Clawdbot Apps]** : 自2026-01-01起已存在近6个月，评论和点赞数极高，严重拖累项目在多平台上的用户增长。**急需路线图上的明确答复**。
2.  **`#7707` & `#6615` [Memory Trust Tagging & Exec Denylist]**: 这两个关于安全模型的 Issue 均带有 `needs-product-decision` 标签，自2月份提出后，依然缺乏产品方向的决策。
3.  **`#38327` [Cannot convert undefined or null to object]**: 一个3月份的回归 Bug（P1），影响 Google Vertex/Gemini 用户，至今未有 Fix PR，且标签复杂，可能陷入流程困境。
4.  **`#68389` [plugins: clarify allowlist warning]**: 一个4月份的优化 PR，已经 “ready for maintainer look” 2个月仍未被合并。这类“小而美”的 PR 长期积压会影响社区贡献者的积极性。

---

## 横向生态对比

好的，作为资深技术分析师，以下是根据您提供的各项目动态日报生成的横向对比分析报告。

---

### AI 智能体开源生态横向对比分析报告 (2026-06-18)

#### 1. 生态全景

2026年6月，个人AI助手开源生态呈现出 **“平台分化、功能趋同、社区驱动”** 的成熟特征。一方面，以 OpenClaw、ZeroClaw 为代表的头部项目积极构建平台化能力（如 Agent-to-Agent 协议、WASM插件、多租户），竞争核心枢纽地位；另一方面，各项目在**安全加固、跨平台桌面端、多模态交互（计算机使用、语音）** 等关键功能上不约而同地投入资源，显示出市场对“全能型”Agent 的迫切需求。社区活跃度普遍很高，但分化明显：头部项目面临大量积压和稳定性挑战，而如 LobsterAI、NanoBot 等聚焦特定场景的项目则展现出更高的代码交付效率和用户满意度。

#### 2. 各项目活跃度对比

| 项目名称 | 新 Issues | 新 PRs | 今日 Release | 主要活动 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | ~478 | ~500 | 无 | 会话迁移、Cron修复、通道兼容性 | **高活跃，社区驱动，但维护压力大，Bug积压众多** |
| **NanoBot** | 7 | 30 (合并18) | 无 | 文件系统安全、模型兼容性、WhatsApp体验 | **健康，迭代快速，维护效率高** |
| **Hermes Agent** | ~100 | ~100 | 无 | 桌面端崩溃修复、A2A协议讨论、安全审计 | **高活跃，维护压力大，关键Bug（桌面端安装）突出** |
| **PicoClaw** | 4 | 10 (合并) | Nightly | **紧急安全漏洞修复**、Gemini 3.5兼容性、新提供商 | **健康，安全响应迅速，功能扩展积极** |
| **NanoClaw** | 5 | 19 (待合并) | **v2.1.17, v2.1.0 (Breaking)** | 全局消息投递Bug修复、安全漏洞修补、文档优化 | **快速迭代但不稳定，破坏性变更需谨慎，PR积压** |
| **NullClaw** | 0 | 1 (待合并) | 无 | CLI终端体验修复、调度器Bug讨论 | **低活跃，修复期，核心功能（调度器）存在严重障碍** |
| **IronClaw** | 47 | 50 (合并18) | 无 | **Reborn Projects里程碑**、OAuth认证修复、自动化UX | **高活跃，核心开发推进顺利，PR积压可控** |
| **LobsterAI** | 0 | 13 (全部合并) | **2026.6.15** | **Cowork模式打磨**、OOM崩溃修复、语音交互修复 | **极健康，发布节奏稳健，零积压，交付效率最高** |
| **CoPaw** | 45 | 50 (合并34) | **v1.1.12** | 小艺频道重构、进程冻结修复、AgentScope迁移启动 | **高活跃，有重大稳定性问题（冻结），但修复积极** |
| **ZeroClaw** | 50 | 50 (合并9) | 无 | Computer-use RFC、GitHub原生频道、安全策略热更新 | **高活跃，推进基础设施，Bug响应快，功能分支多** |
| **TinyClaw** | - | - | - | **无活动** | **停滞** |
| **Moltis** | 5 | 1 (待合并) | 无 | **语音交互优化**（TTS配置、回声消除）、Markdown导出 | **中等活跃，功能打磨期，回声消除是核心痛点** |
| **ZeptoClaw** | - | - | - | **无活动** | **停滞** |

#### 3. OpenClaw 在生态中的定位

*   **核心参照与生态基石**：OpenClaw 依然扮演着“核心参照”的角色，其社区规模、Issue/PR数量远超同类项目（每日500条级别），是整个生态中讨论最活跃、功能提案最丰富、社区自驱力最强的项目。
*   **技术路线差异**：OpenClaw 倾向于**渐进式重塑**（如通过访问器缝接（accessor seam）迁移至 SQLite），而非一次性重写。相比之下，IronClaw 通过 **Reborn 架构** 进行彻底重构，而 CoPaw 则选择**迁移至 AgentScope 2.0 框架**。这显示出不同的技术债务管理哲学。
*   **优势与挑战**：OpenClaw 的优势在于其**庞大的社区生态和全功能覆盖**（几乎所有通道和工具）。但其面临的核心挑战是**稳定性与维护压力**：大量 P0/P1 级 Bug（如会话丢失）长期未决，P2 级问题积压严重，可能导致部分追求高稳定性的开发者迁移到 NanoBot 或 LobsterAI。

#### 4. 共同关注的技术方向

以下趋势在多个项目中得到验证：

| 技术方向 | 涉及项目 | 具体诉求 |
| :--- | :--- | :--- |
| **安全与权限精细化** | **所有活跃项目** | 文件系统/RWX权限控制 (*NanoBot*, *OpenClaw*)、SSRF漏洞修复 (*PicoClaw*)、目录遍历修复 (*NanoClaw*)、安全审计模型 (*OpenClaw*, *Hermes Agent*, *CoPaw*)、敏感操作审批 (*IronClaw*, *OpenClaw*)。**安全已成为共识性第一要务**。 |
| **Agent间通信 (A2A) 与多Agent协作**| **Hermes Agent**, **OpenClaw**, **NanoClaw**, **ZeroClaw** | 构建智能体间互发现、协商、协作的协议。 | 
| **跨平台桌面客户端** | **OpenClaw**, **Hermes Agent**, **CoPaw** | 用户对 **Linux/Windows/macOS** 原生桌面端有强烈需求，用户体验和安装流程是痛点。 |
| **多模态交互** | **LobsterAI**, **Moltis** | **计算机使用（Computer Use）** (ZeroClaw, LobsterAI)、**语音输入/输出** (Moltis, LobsterAI)、**实时ASR** (LobsterAI)。 |
| **开发者体验与商业化**| **IronClaw, ZeroClaw, NanoBot** | 计划任务热加载 (*ZeroClaw*)、配置热更新 (*ZeroClaw*)、技能/插件市场 (*OpenClaw, ZeroClaw*)、多租户管理 (*NanoBot*, *NullClaw*)。 |

#### 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | **全功能、大生态** | 社区开发者，追求极致自定义 | 大型Monolith，渐进式重构 |
| **ZeroClaw** | **平台化、企业级** | DevOps、企业用户 | 注重安全网关、热更新、认证体系 (v0.9.0方向) |
| **IronClaw** | **Reborn 多租户、协作** | 团队协作、企业服务 | React-Rust 堆栈，ReBorn架构彻底重构 |
| **CoPaw** | **化繁为简、开箱即用** | 轻度用户、非技术用户 | 基于 AgentScope 框架，强调 UI/UX 简洁 |
| **LobsterAI** | **极致的Cowork体验** | 深度Coding & Cowork用户 | 高度聚焦Cowork模式，零积压，发布稳健 |
| **NanoBot** | **灵活、开发者友好** | 开发者、系统集成者 | 插件化、Git子目录支持，维护效率高 |
| **PicoClaw** | **轻量、安全、嵌入** | IoT、嵌入式、Edge设备 | 轻量级，关注安全性补丁和新模型兼容 |
| **Moltis** | **语音交互专家** | 语音重度用户、残障人士 | 专注于语音转录、合成与实时交互 |
| **NullClaw** | **极简、CLI优先** | CLI爱好者、极客 | 功能精简，聚焦核心 Agent 交互 |

#### 6. 社区热度与成熟度

*   **第一梯队（快速迭代，社区驱动但稳定性波动）：** **OpenClaw, CoPaw, IronClaw, ZeroClaw**。这些项目 Issues/PRs 双高，社区活跃，功能迭代快，但 Bug 修复压力大，存在“功能先行，稳定跟随”的现象。
*   **第二梯队（质量巩固，交付稳健）：** **NanoBot, LobsterAI, PicoClaw**。这些项目在特定场景（如 NanoBot 的开发者友好，LobsterAI 的Cowork）表现出色，PR 合并率高，Bug 响应快，用户满意度高，代表“小而美”的成熟模式。
*   **第三梯队（功能打磨，小众但聚焦）：** **Moltis**。聚焦于语音交互的单一垂直场景，社区规模小但需求明确。
*   **停滞/维护期：** **NullClaw, TinyClaw, ZeptoClaw**。项目活跃度低，可能处于维护或无人维护状态。

#### 7. 值得关注的趋势信号

1.  **“安全”从功能变为基石，决定用户信任度**：多个项目出现**SSRF、目录遍历、 Shell无限审批循环**等严重漏洞，社区对安全审计的呼声极高。对于开发者而言，在选择框架时，安全检查机制（如PicoClaw的OneBot修复、ZeroClaw的安全策略热更新）将成为越来越重要的考量因素。
2.  **“计算机使用”将成为下一波能力的登门槛**：ZeroClaw 和 LobsterAI 已开始探索允许AI直接操控桌面。这一功能将AI助手从“对话工具”升维为“自动化操作系统”，有望定义明年的市场格局。
3.  **Agent 生态从“单一工具”走向“平台协作”**：A2A协议、多Agent编排、统一插件/技能市场（Skill Store）等议题频繁出现。开源社区正在集体构建下一代AI操作系统的基础设施。对于开发者，提前学习并贡献于 A2A 等开放标准将极具价值。
4.  **“隐形成本控制”成为高级用户的核心痛点**：反映在“使用轻量模型做意图预检查”、“多模型备用与切换”等需求上。这表明个人 AI 助手已从实验性使用进入生产级应用阶段，开发者需要关注资源优化。
5.  **跨平台桌面端体验依然是最大用户痛点之一**：OpenClaw 和 Hermes Agent 的 Issue 社区持续为此功能投票和讨论。一个稳定、丝滑的桌面客户端是项目吸引和留住主流（非纯 CLI 用户）的关键。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我将根据您提供的 NanoBot GitHub 数据，生成 2026-06-18 的项目动态日报。

---

# NanoBot 项目动态日报 | 2026-06-18

## 今日速览

项目在今天（2026-06-18）的观察窗口内展现出高度活跃的开发状态。过去24小时内，项目收到了30个 Pull Request，其中18个已成功合并或关闭，显示出核心团队高效的审查与合并能力。同时，7个新问题的提出也反映出社区积极的使用与反馈。项目重点集中在修复文件系统安全策略、优化主流模型（如 Anthropic, Mistral）兼容性、以及增强特定渠道（如飞书 Feishu, WhatsApp）的功能体验上。总体来看，项目健康度优秀，迭代速度较快。

## 版本发布

- **无新版本发布**：在过去24小时内，项目没有发布新的版本标签。

## 项目进展

今日合并与关闭了18个PR，标志着多项关键修复与功能改进已进入主线。以下是几个重要的进展：

- **安全性与稳定性增强**：
    - **文件系统写策略修复**：[PR #4202](https://github.com/HKUDS/nanobot/pull/4202) 澄清并修复了文件系统的写权限策略，确保 `extra_allowed_dirs` 只读属性生效，提升了代码执行的安全性。
    - **Git命令在子目录中工作**：[PR #4380](https://github.com/HKUDS/nanobot/pull/4380) 修复了在 `restrictToWorkspace` 模式下，从工作区子目录执行Git命令失败的问题，解决了社区报告的生产环境痛点。

- **模型与提供商兼容性优化**：
    - **更好的 Mistral 支持**：[PR #4351](https://github.com/HKUDS/nanobot/pull/4351) 针对Mistral API的严格要求（如 `reasoning_effort` 参数）进行了适配，提高了NanoBot调用Mistral模型的成功率。
    - **Anthropic tool ID 消毒**：[PR #4356](https://github.com/HKUDS/nanobot/pull/4356) 修复了Anthropic API因工具ID包含非法字符而返回400错误的问题，确保了多轮对话的稳定性。

- **渠道与体验优化**：
    - **WhatsApp 已读回执**：[PR #4354](https://github.com/HKUDS/nanobot/pull/4354) 为WhatsApp渠道增加了“已读回执”（蓝色双勾）功能，提升了用户端的使用体验。
    - **飞书流式更新修复**：[PR #4381](https://github.com/HKUDS/nanobot/pull/4381) 修复了飞书卡片流式更新失败后无法恢复的问题，提升了飞书渠道的可靠性。

## 社区热点

今日讨论度最高的议题主要围绕**多实例管理**和**用户体验**两个方向。

1. **[Issue #936](https://github.com/HKUDS/nanobot/issues/936): 请求增加多租户网关功能**（1条评论，更新于6-17）
    - **诉求分析**：该Issue提出为一个服务实例管理多个 Agent 的需求，旨在降低资源消耗和管理复杂性。这是一个源自老用户的长期呼声，反映了社区中高级用户和运营者对于统一控制面板和高效资源利用的强烈需求。虽然评论不多，但其连续数月的活跃状态和清晰的需求描述，表明这是一个需要关注的热点。

2. **[Issue #4360](https://github.com/HKUDS/nanobot/issues/4360): `end of file unexpected` 安装问题**（9条评论，已关闭）
    - **诉求分析**：这是今日回复最多的Issue。用户报告在Docker容器中安装时遇到中断错误。虽然该问题很快被解决并关闭，但9条评论的数量显示其影响面较广，且社区成员积极参与了排查和解决过程。这暴露了项目在特定环境（如Debian 13）下的兼容性测试可能存在不足。

## Bug 与稳定性

今日报告的7个新Bug涵盖安装、WebUI、API兼容性等多个方面。

| 严重程度 | 问题描述 | Issue/PR | 状态 & 进展 |
| :--- | :--- | :--- | :--- |
| **高** | Docker容器安装时 `pip` 脚本语法错误，导致安装中断。 | [#4360](https://github.com/HKUDS/nanobot/issues/4360) | **已关闭**。问题已被报告并解决，可查看解决方案。 |
| **中** | iOS Safari上点击输入框导致页面自动放大，影响UI体验。 | [#4388](https://github.com/HKUDS/nanobot/issues/4388) | **开放中**，已收录。移动端UI问题通常影响广泛，需优先处理。 |
| **中** | 本地模型服务器因系统代理设置导致 `httpx` 路由失败。 | [#4366](https://github.com/HKUDS/nanobot/issues/4366) | **已关闭**。修复PR [#4367](https://github.com/HKUDS/nanobot/pull/4367) 已合并。 |
| **低** | 在特定分支合并后出现 `session_key` 未定义错误。 | [#4322](https://github.com/HKUDS/nanobot/issues/4322) | **已关闭**。此为一个孤立问题，已解决。 |

## 功能请求与路线图信号

今日社区提出了几个明确的功能请求，并结合已有的PR，可以初步判断项目的下一版可能方向。

- **体验优化（高优先级）**：
    - **[#4376](https://github.com/HKUDS/nanobot/issues/4376): 更友好的初始化配置向导**：要求简化 `nanobot onboard` 流程，降低新手门槛。这与项目扩大用户基数的目标一致，很可能被采纳。
    - **[#4378](https://github.com/HKUDS/nanobot/issues/4378): 计划任务级别的模型/预设切换**：用户希望在cron任务中动态指定模型。这扩展了已有功能，可能通过脚本或扩展实现。

- **高级功能（中期考虑）**：
    - **[#936](https://github.com/HKUDS/nanobot/issues/936): 多租户网关**：一个复杂的架构改进，关联到多Agent管理。
    - **[#4390](https://github.com/HKUDS/nanobot/issues/4390): 普通用户友好的多实例管理**：与#936类似，但更关注UI隐藏和简易配置。两者结合来看，“多实例”相关功能是当前社区的一个明显趋势。

- **AI模型集成优化（近期可能落地）**：
    - **[#4389](https://github.com/HKUDS/nanobot/issues/4389): Fallback模型的独立上下文窗口配置**：这是一个非常专业且重要的需求，能防止因模型上下文窗口不一致导致的截断错误。该功能直接关联到 `PR #4385`（记录主模型错误后Fallback），有望在下一个次要版本中实现。

## 用户反馈摘要

从今日的Issues和PR评论中，可以提炼出以下真实用户的声音：

1.  **新手入门痛**：用户在[#4376](https://github.com/HKUDS/nanobot/issues/4376)中提到“假定你知道很多技术细节”，直接反映出当前配置流程对非技术用户不够友好。
2.  **环境兼容性焦虑**：用户在[#4360](https://github.com/HKUDS/nanobot/issues/4360)中部署在Debian 13上遇到意外错误，反映出新操作系统可能带来的兼容性风险。用户通常期望在标准的环境中能“开箱即用”。
3.  **对高级特性的明确需求**：用户在[#3437](https://github.com/HKUDS/nanobot/issues/3437)中提出了“按需心跳触发”功能，用于调试。这反映了有经验的开发者用户群希望获得更精细的控制能力，以进行深度自定义和问题排查。
4.  **对特定场景的精细化控制**：用户在[#4390](https://github.com/HKUDS/nanobot/issues/4390)中描述的“一个机器，多实例，按文件夹组织配置”的用例，非常具体且贴近实际生产部署场景。

## 待处理积压

以下 Issue/PR 长期未获响应或迟迟未能合并，存在被社区遗忘的风险，建议维护者关注：

- **高价值功能请求**：
    - **[Issue #936](https://github.com/HKUDS/nanobot/issues/936)**：**多租户网关**（创建于2026-02-21，已近4个月）。这是一个架构级需求，影响面大，但缺乏维护者回应。建议明确是否接受或列入未来路线图。
    - **[Issue #3437](https://github.com/HKUDS/nanobot/issues/3437)**：**按需心跳触发**（创建于2026-04-25，近2个月）。这是一个很好的调试功能，但同样缺少讨论或进展。

- **长期搁置的PR**：
    - **[PR #4205](https://github.com/HKUDS/nanobot/pull/4205)**：**添加邮箱支持的子Agent结果**（创建于2026-06-05，已13天）。这是一个功能较为复杂的PR，长时间未合并，可能存在实现方案上的争议或代码审查瓶颈。
    - **[PR #4021](https://github.com/HKUDS/nanobot/pull/4021)**：**修复Codex提供商的重复ID问题**（创建于2026-05-27，已22天）。这是一个重要的稳定性修复，长时间搁置可能影响使用OpenAI Codex支持的用户。

---
*数据报告周期：2026-06-17 至 2026-06-18*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，根据您提供的Hermes Agent (NousResearch/hermes-agent) GitHub数据，我为您生成了2026年6月18日的项目动态日报。

---

# Hermes Agent 项目动态日报 | 2026年6月18日

### 今日速览

今日项目活跃度极高，主要在修复桌面端 (Desktop) 安装/编译崩溃问题，并推进 Agent 间通信 (A2A) 等核心功能规划。过去24小时内共处理`100`条Issues与PR，但新问题与解决方案几乎持平，项目维护压力较大。值得关注的是，尽管社区呼声很高的A2A协议支持 (#514) 仍无实质性合并，但多个影响用户体验的桌面版编译和代理运行时Bug已得到快速响应。整体来看，项目处于高强度的修补与功能添加快车道。

### 项目进展

今日合并/关闭的核心PR主要聚焦于修复桌面端崩溃、代理运行时错误以及安全审计。

*   **桌面端稳定性修复:**
    *   `#48109`: 修正了弱模型因错误解析XML工具调用而产生的“幻影工具循环”Bug，解决了令牌燃烧和上下文损坏问题，属于重大稳定性改进。
    *   `#48091` (隐含): 桌面端自更新修复，但PR `#48122` 指出更新后应用无法自动重启，已提交新的修复。
*   **代理运行时优化:**
    *   `#48127`: 修复了 `gateway` 和 `api_server` 进程在配置更新后仍使用旧 `max_turns` 值的Bug，确保了运行时预算限制的即时生效。
*   **安全与合规:**
    *   `#47532`: 移除了遗留的会话令牌系统，彻底转向可插拔的OAuth网关，增强了 Dashboard 的安全性。
    *   `#48124`: 为 Z.AI 提供商增加提示词过滤，将敏感的 "Hermes Agent" 改写为 "Hermes framework"，以规避特定平台的审查/封锁。
*   **其他关键修复:**
    *   `#48074`: 修正了部分模型（如MiMo-v2.5）将实际回复放到 `reasoning_content` 字段的问题，确保视觉描述等关键信息能正确显示。

### 社区热点

*   **🔗 [#514 - A2A (Agent-to-Agent) Protocol Support](https://github.com/NousResearch/hermes-agent/issues/514)**
    *   **状态:** OPEN | **评论:** 22 | **👍:** 18
    *   **分析:** 作为长期最热Issue，A2A协议支持是社区对Hermes Agent成为下一代AI操作系统核心的期望。诉求不仅是单一功能，而是构建一个智能体可以互相发现、协商并协作的生态。这是项目未来长期竞争力的关键，但目前尚无关联PR，建议维护团队尽快给出路线图或状态更新。

*   **🔗 [#47917 / #48084 / #48059 / #48021 - 桌面端编译崩溃问题集群](https://github.com/NousResearch/hermes-agent/issues/47917)**
    *   **状态:** OPEN / CLOSED | **评论:** 7/1/1/1 | **👍:** 1/0/0/0
    *   **分析:** 这是**今日最突出的问题集群**。多个用户在macOS和Windows上报告桌面版 `hermes update` 或首次安装时失败，根本原因指向 `electronDist` 路径不匹配（PR `#48084` 已指出）。这表明项目的构建脚本在处理monorepo依赖时存在健壮性问题，是严重阻碍新用户入门的“拦路虎”。

*   **🔗 [#27555 - 视觉回退链无声断裂](https://github.com/NousResearch/hermes-agent/issues/27555)**
    *   **状态:** OPEN | **评论:** 6 | **👍:** 0
    *   **分析:** 这是一个持续近一个月的Bug，`_resolve_single_provider`函数因参数名不匹配导致视觉提供商回退链完全失效且无报错。这属于“静默失效”，比显式报错更危险，会严重影响依赖多模型视觉能力的用户。

### Bug 与稳定性

*   **P1 (严重):**
    *   `#48061`: 通过 `pipx` 安装的 v0.16.0 版本在Linux上发送空的 `runtime model/provider`，导致请求失败。**已有PR修复。**
    *   `#27555`: 视觉回退链静默失效，功能断开但无报错。**无PR，风险高。**
*   **P2 (高):**
    *   `#47917 / #48084 / #48059 / #48021/ #48100`: **桌面端安装/编译失败**在多个平台爆发，已成为今日首要修复目标。**已有多条PR尝试修复，但问题仍在迭代。**
    *   `#44873`: Windows平台日志文件轮转时抛出 `PermissionError`，导致stderr刷屏。**已关闭，有修复。**
    *   `#32497`: 代理在执行非配置类任务时意外修改自身技能/系统提示，存在安全隐患。**无PR。**
    *   `#48055`: `/new` 指令无法重置 `session-only` 的模型切换，导致用户需要手动修正。**无PR。**
    *   `#40187`: macOS上编译桌面端应用失败。**存在多个相关PR。**
*   **P3 (中低):**
    *   `#40692`: macOS桌面端在长对话后输入延迟严重 (200-500ms)，影响核心交互体验。**无PR。**
    *   `#43913`: macOS桌面端陷入无限安装循环。**无PR。**

### 功能请求与路线图信号

*   **高潜力 (可能纳入下版本):**
    *   **A2A协议 (#514):** 呼声最高，代表社区对Agent网络的终极愿景，但资源和复杂性极高，短期见不到PR。
    *   **桌面瘦客户端 (#38602):** 社区反响热烈 (👍17)，用户期望将桌面端作为连接远程Hermes服务的轻量级客户端，而非一个包含完整运行时的“重型”应用。这与A2A或可插拔后端理念高度契合。
    *   **统一插件路由 (#41190):** 用户试图构建一个稳定的、可覆盖所有LLM调用点的插件钩子，用于实现动态模型/提供商切换。这是构建高级自定义工作流的基础设施级诉求。
*   **中等潜力:**
    *   **Rocket Chat支持 (#3725):** 增加消息渠道的常见请求，实现成本低，但优先级可能不高。
    *   **OpenAI响应API文本冗长度控制 (#20203):** 一个小而实用的功能，能帮助用户在不改Prompts的情况下控制回复长度。
    *   **基于代理的跨配置文件子智能体 (#41889):** 要求子智能体可以继承不同配置文件的身份和能力，与Kanban系统的路由功能结合，可实现复杂的协作工作流。

### 用户反馈摘要

*   **满意/认可:**
    *   用户对开发团队快速跟进并修复桌面端编译问题 (#47917) 的态度表示肯定，尽管问题仍未彻底解决。
    *   针对WhatsApp功能，有用户分享了详细的One-File Guide (#47477)，表明社区正在积极贡献和传播使用技巧。
*   **痛点/不满:**
    *   **桌面端安装体验是最大的痛点。** 多位用户因 `electronDist` 问题、权限问题、编译失败而无法正常使用，严重影响了新用户的首次体验和既有用户的更新流程。
    *   **代理的自修改行为 (#32497)** 让用户感到困惑和不安，他们认为代理不应在未经明确指示的情况下“自作主张”修改自身配置。
    *   **静默失效** 案例增加，如视觉回退链 (#27555) 和日志轮转失败 (#44873)，用户表示这类问题比直接报错更难排查和忍受。

### 待处理积压

| 类型 | 标题 | 链接 | 创建时间 | 重要性评估 |
| :--- | :--- | :--- | :--- | :--- |
| **Feature** | A2A (Agent-to-Agent) Protocol Support | [Issue #514](https://github.com/NousResearch/hermes-agent/issues/514) | 3个月 | **极高**。社区核心期待，项目未来发展的关键方向。需官方路线图回应。 |
| **Bug (P1)** | vision fallback_chain silently broken | [Issue #27555](https://github.com/NousResearch/hermes-agent/issues/27555) | 1个月 | **高**。静默失效，影响依赖视觉功能的用户，且无修复PR。 |
| **Bug (P2)** | Hermes modifies own skills during normal task execution | [Issue #32497](https://github.com/NousResearch/hermes-agent/issues/32497) | 3周 | **高**。安全与可控性问题，可能导致配置意外变更。 |
| **Feature** | agentmemory as a memory provider plugin | [Issue #6715](https://github.com/NousResearch/hermes-agent/issues/6715) | 2个月 | **中**。已有社区贡献的插件，但官方未集成。可作为外部插件的最佳实践范例。 |

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，根据您提供的PicoClaw项目数据，现为您生成2026年6月18日的项目动态日报。

---

# PicoClaw 项目日报 - 2026-06-18

### 1. 今日速览

过去24小时，PicoClaw项目社区活动高度活跃，共处理了4个Issue和10个Pull Request。项目重点聚焦于**安全性修复**与**新模型兼容性**两大方面：针对Gemini 3.5 Flash模型的集成问题已得到解决，同时一个关键的OneBot协议安全漏洞已被紧急修复并合并。此外，项目的功能版图也在持续扩大，新增了一个NEAR AI Cloud云服务提供商支持。总体来看，项目处于快速迭代与漏洞修复并行的健康状态。

### 2. 版本发布

**无正式版本发布**。但项目发布了最新的Nightly Build：
- **版本**: `v0.3.0-nightly.20260617.a16a1e15`
- **说明**: 这是自动化构建版本，可能不稳定，仅供测试使用。
- **变更记录**: [查看完整变更日志](https://github.com/sipeed/picoclaw/compare/v0.3.0...main)

### 3. 项目进展

今日有多个重要PR被合并，标志着项目在稳定性和功能扩展上的显著进步：
- **安全漏洞修复 - OneBot协议**: PR [#3140](https://github.com/sipeed/picoclaw/pull/3140) 被合并，修复了OneBot输入中媒体URL可能被攻击者利用来发起主机侧任意请求的严重安全漏洞。这是对先前报告的安全Issue的直接响应。
- **Gemini 3.5 Flash兼容性**: PR [#3136](https://github.com/sipeed/picoclaw/pull/3136) 被合并，解决了因API请求体中`thought_signature`字段格式（驼峰式 vs 蛇形式）不一致导致Gemini 3.5 Flash模型工具调用失败的问题。此修复直接关闭了高相关的Bug Issue。
- **LLM提供商扩展**: PR [#2917](https://github.com/sipeed/picoclaw/pull/2917) 被合并，正式添加了NEAR AI Cloud作为兼容OpenAI协议的AI提供商，并默认支持其TEE功能模型。这极大地丰富了用户的模型选择。
- **Web界面会话历史修复**: PR [#2990](https://github.com/sipeed/picoclaw/pull/2990) 被合并，修复了Web UI中查看历史会话时只能看到最后一条用户消息的问题，提升了用户体验。

这些里程碑表明项目在安全、兼容性和UI方面均有实质性推进。

### 4. 社区热点

过去24小时讨论热度最高的是 **Security Issue #3070 (OneBot安全漏洞)**。
- **Issue链接**: [Issue #3070](https://github.com/sipeed/picoclaw/issues/3070)
- **分析**: 该Issue详细描述了PicoClaw的OneBot渠道在接收媒体URL时缺乏验证，可能被用于发起SSRF攻击，风险极高。社区反应迅速，维护者在短时间内提交了修复PR [#3140](https://github.com/sipeed/picoclaw/pull/3140) 并将其合并，体现了项目对安全问题的快速响应机制。

### 5. Bug 与稳定性

过去24小时报告的Bug如下：

**严重**:
- **OneBot媒体URL处理漏洞** (Issue [#3070](https://github.com/sipeed/picoclaw/issues/3070), 已关闭): 关键安全漏洞，允许主机侧任意请求。**状态：已通过PR #3140修复**。
- **Gemini 3.5 Flash工具执行失败** (Issue [#3111](https://github.com/sipeed/picoclaw/issues/3111), 已关闭): 新模型集成导致的严重功能故障，API请求400错误。**状态：已通过PR #3136修复**。

**中等**:
- **Brave搜索无结果时无日志** (PR [#3141](https://github.com/sipeed/picoclaw/pull/3141), 待合并): 当Brave Search API返回空结果时缺乏诊断日志，可能导致用户对搜索功能失效感到困惑。
- **搜索词割解析失败** (PR [#3139](https://github.com/sipeed/picoclaw/pull/3139), 已关闭): 因搜狗WAP页面HTML结构变化，导致`web_search`工具解析结果失败。
- **子代理出现重复消息** (PR [#3142](https://github.com/sipeed/picoclaw/pull/3142), 待合并): 当子代理完成时，`ForUser`字段未正确清理，导致用户收到重复消息。

### 6. 功能请求与路线图信号

今日最受关注的长期功能请求：
- **Feature Request #3088 - 替换libolm为vodozemac** (Issue [#3088](https://github.com/sipeed/picoclaw/pull/3088)): 社区强烈建议用官方推荐的、积极维护的`vodozemac`库替换掉已经停止维护且存在安全隐患的`libolm`。虽然这个请求持续了一周多，但鉴于其安全性重要性，预计会很快被纳入下一阶段的开发计划。
- **Feature Request #3093 - 支持SimpleX或Tox协议** (Issue [#3093](https://github.com/sipeed/picoclaw/issues/3093)): 用户希望增加对去中心化通信协议SimpleX或Tox的支持。

结合已有的PR，可以看到项目正在推进社区贡献的新功能，如PR #3063提出的**DeltaChat网关**，这暗示了项目路线图对去中心化/增强隐私的通信协议持开放态度。

### 7. 用户反馈摘要

从Issue评论中提取的用户反馈：
- **痛点**: 使用Gemini 3.5 Flash新模型时立即遭遇400 Bad Request错误，严重影响了工具调用功能。这表明用户对新模型的支持有迫切需求，且对向后兼容性要求很高。
- **使用场景**: 用户“Damian-o2”提出了对SimpleX/Tox等协议的需求，这暗示了部分用户有在`web_fetch`等功能之外进行更安全、更私密、P2P通信的场景。
- **满意点**: 从Security Issue的快速关闭来看，用户对项目团队处理严重安全问题的速度和透明度应该是满意的。

### 8. 待处理积压

以下为需要维护者关注的长期未响应或待处理的重要议题：
- **Feature Request #3088: use vodozemac instead of libolm** (创建: 2026-06-09): 一个高优先级的长期安全改进请求，当前无对应的PR，需要评估并制定迁移计划。
- **PR #3063: feat: add deltachat gateway** (创建: 2026-06-08): 一个重要的新功能PR（增加DeltaChat网关），但已被标记为不活跃，需要维护者进行代码审查或反馈。
- **PR #3092: fix(skills_install): add ok checks for version and force type assertions** (创建: 2026-06-10): 一个修复类型断言潜在问题的PR，已标记为不活跃。虽然不是紧急问题，但有助于提升代码健壮性。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，现根据您提供的NanoClaw GitHub数据，为您呈上2026年6月18日的项目动态日报。

---

## NanoClaw 项目日报 | 2026-06-18

### 1. 今日速览

今日项目活跃度极高，在代码修复、安全加固、技能文档完善及新功能探索方面均有显著进展。共有19个PR待处理，5个Issue被提出，同时发布了两个包含破坏性变更的新版本。项目正处于从快速迭代向稳定成熟过渡的关键阶段，社区贡献者积极参与，重点修复了核心交付机制的稳定性问题和多个安全漏洞，并开始系统性地优化用户体验和文档质量。整体项目健康度良好，但积压的PR数量值得关注。

### 2. 版本发布

项目今日发布了 **v2.1.17** 和 **v2.1.0** 两个版本，均包含破坏性变更，需重点关注。

- **v2.1.17**: 这是一个滚动发布，合并了自 v2.1.0 标签以来的所有包更新。
    - **破坏性变更**: **[重要] `@onecli-sh/sdk` 从 0.5.0 升级至 2.2.1**。新版本的SDK要求OneCLI服务器支持 `/v1` API。旧版服务器将无法响应所有SDK调用（返回404错误）。官方已锁定配套的网关和CLI版本。
    - **迁移注意事项**: **所有用户必须升级其OneCLI服务端**至支持 `/v1` API的版本，否则SDK功能将完全失效。

- **v2.1.0**: 这是一个滚动发布，合并了自 v2.0.64 标签以来的所有包更新。
    - **破坏性变更**: **[重要] 新增启动升级标志 (upgrade marker)**。主机在每次启动时会检查 `data/upgrade-state.json` 文件，以确认安装状态已通过正常的升级流程达到当前版本。如果缺少此标志，主机将拒绝启动。
    - **迁移注意事项**: 用户需确保在升级后，`data/upgrade-state.json` 文件已正确生成。对于通过快照或镜像部署的托管集群，需要设置环境变量 `NANOCLAW_DISABLE_UPGRADE_TRIPWIRE=1` 来绕过此检查（对应PR #2780）。

### 3. 项目进展

今日合并/关闭了3个PR，其中两个修复了关键问题，推动了项目稳定性：

- **修复核心Bugs**:
    - **[关键]** **#2797**: `fix(delivery): isolate per-session failures...` 该PR已合并，修复了一个严重Bug：当某个会话（session）的消息投递失败时，会导致所有其他用户的消息投递完全停滞，直至守护进程重启。该修复通过隔离每个会话的错误处理，确保了单点故障不会影响全局消息队列。**这是今日最重要的稳定性改进。**
    - **[修复]** **#2794**: `fix(providers): restore env-var gateway auth...` 该PR已合并，修复了托管集群（Managed Fleets）中认证失败的问题（Error: 401 No credentials config）。这些集群无法通过常规方式更新配置，依赖于环境变量进行认证，该修复恢复了其功能。
- **新功能支持**: **#2780**: `feat(upgrade-state): env opt-out for the startup tripwire...` 已合并，为难以执行标准升级流程的托管集群提供了绕过新版本启动检查的环境变量开关，确保了新版本（v2.1.0）在特殊部署场景下的可用性。

**总结**: 项目迅速响应并修复了核心通信机制中的致命Bug，同时为新版本的兼容性问题提供了解决方案，体现了对稳定性和用户体验的高度重视。

### 4. 社区热点

今日最活跃的讨论集中在 **#2796** 和 **#2791**，这两个Issue都来自贡献者 `mashkovtsevlx` 和 `specterslient95-lgtm`。

1.  **Issue #2796: [CLOSED] 单一会话故障导致全局消息投递瘫痪**
    - **链接**: [nanocoai/nanoclaw Issue #2796](https://github.com/nanocoai/nanoclaw/issues/2796)
    - **分析**: 这个Issue揭示了项目的一个关键稳定性漏洞：一个`outbound.db`暂时无法读取的会话会拖垮整个代理系统的消息投递。该问题曝光后，贡献者 `mashkovtsevlx` 迅速提交了修复PR `#2797`，并在数小时后被合并。这反映了社区对系统稳定性和容错能力的高度关注，以及项目团队对严重Bug的快速响应能力。

2.  **来自 `specterslient95-lgtm` 的系列ISSUE和PR**:
    - **链接**: 包括 **#2791**、**#2789**、**#2787**、**#2785** 及其对应PR（#2792、#2790、#2788、#2786）。
    - **分析**: 这位贡献者一口气提交了多个关于 `.claude/skills/` 目录下文档和安装脚本的问题，其背后诉求非常明确：**提升项目新手入门和特定技能配置的体验，消除文档不一致和脚本错误**。这标志着项目已积累了一定数量的用户，他们不再满足于“能用”，而是期望拥有更流畅、更专业的文档和操作流程。这是项目走向成熟的重要信号。

### 5. Bug 与稳定性

今日报告的Bug主要集中在安全漏洞、代码死路和CLI死锁上，严重程度不一，且已有相应的修复PR。

| 严重程度 | Bug描述 | Issue/PR | 状态 |
| :--- | :--- | :--- | :--- |
| **严重** | 单一会话故障导致全局消息投递停滞 | #2796 / PR #2797 | **已修复 (已合入)** |
| **严重** | 群组创建命令(`ncl groups create`)因SQL约束失败而完全失效 | PR #2804 | 待合并 |
| **高** | `send_file`功能存在目录遍历漏洞(CVE-2026-29611)，可读取容器内任意文件 | PR #2799 | 待合并 |
| **高** | `ncl groups create --folder`命令未做路径验证，存在路径穿越漏洞(CWE-22) | PR #2800 | 待合并 |
| **中** | CLI socket客户端无请求超时和响应大小限制，可能导致永久挂起或内存溢出 | PR #2802 | 待合并 |
| **中** | `safeParseContent`对非对象JSON解析失败，导致后续逻辑异常 | PR #2801 | 待合并 |
| **低** | 过时的`resolveGroupIpcPath`函数已无调用方，是死代码 | PR #2803 | 待合并 |
| **低** | Claude OAuth Token在特定终端环境下解析失败 | PR #2805 | 待合并 |

### 6. 功能请求与路线图信号

- **新功能请求**: **PR #2793** `feat(agent-to-agent): per-message approval policies...` 提出了一个重要的新功能：在代理间通信中增加可配置的、按消息的审批策略。这为构建更安全、可控的多代理协作工作流提供了基础，很可能是未来版本的核心特性之一。
- **路线图信号**: 大量关于 **`.claude/skills/`** 文档和流程的修复表明，开发重点正在从核心框架构建，转向 **赋能社区开发者和降低使用门槛**。未来版本可能会持续优化开发者体验（DX）。

### 7. 用户反馈摘要

从今日的Issue评论中，可以提炼出以下用户反馈：

- **痛点明确**: 用户真实地遭遇了“一个坏会话拖死所有消息”的致命问题(`#2796`)，这直接触发了项目的紧急修复。
- **渴望改进**: 用户 `specterslient95-lgtm` 的系列Issue反映了对文档质量的不满，包括：
    - 安装脚本步骤缺失（缺少创建目录的命令 `#2791`）。
    - 帮助文档过于简陋，缺乏具体步骤和排错指引 `#2789`。
    - 文档结构混乱，关键信息（如端口号）只在最末节的排错部分才提到 `#2787`。
    - 文档标题无意义，无法快速定位内容 `#2785`。
- **满意点**: 虽然今日评论不多，但从 `#2796` 被迅速关闭和 `#2794` 被成功合并来看，用户对项目核心团队解决关键问题的能力和速度是满意的。

### 8. 待处理积压

- **长期未合并的PR**:
    - **`#2750`**: `fix: recover stale outbound.db journals...`。此PR于6月12日开启，旨在修复两个重要的数据库一致性问题。虽然今日有更新，但已持续待处理6天，可能与更紧急的PR（如 #2797）有重叠或冲突，需要维护者评估优先级并推进合并。
    - **`#2717`**: `docs: add Atlas Cloud as OpenAI-compatible LLM backend option`。此PR已开启9天，是一个纯粹的文档更新。长时间未合并可能与核心功能开发优先级更高有关，但建议维护者尽快处理，以避免挫伤社区贡献者的积极性。

---
**分析师总结**: NanoClaw今日展现了处理关键故障和接受社区贡献的强大能力。版本发布中的破坏性变更要求用户谨慎升级，但也反映了框架的演进。目前，安全修复和用户体验改进是两大工作重点。维护者应加快处理待合并的PR，特别是积压的文档和修复性PR，以维持社区贡献的积极性。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

好的，作为 NullClaw 项目的 AI 智能体与个人 AI 助手领域开源项目分析师，我已根据您提供的 GitHub 数据，生成了以下项目动态日报。

---

## NullClaw 项目动态日报 | 2026-06-18

### 1. 今日速览

项目近期进入一个“修复期”，社区活跃度中等但焦点明确。过去24小时内，没有新的版本发布，但有两项重要的 Bug 修复进展：一个关于 CLI 终端控制字符问题的 PR 已被提交等待合并，而一个涉及调度器（Scheduler）无法工作的核心功能 Bug 仍在持续讨论中。整体来看，项目维护者正在积极处理用户反馈的终端体验问题，而关于 Web UI 配置的文档需求也反映了新用户的接入门槛。

### 2. 版本发布

无

### 3. 项目进展

**已提交的修复 (PR)**

*   **#960: fix(cli): handle arrow keys in agent REPL**
    *   **状态**: 待合并 (Created: 2026-06-17)
    *   **摘要**: 此 PR 旨在解决一个已知的 CLI Bug (#865)。它引入了一个轻量级的行编辑器，通过启用 POSIX 原始模式输入，使得在 `nullclaw agent` 交互式命令行界面中，方向键（上/下/左/右）、Home/End、退格/删除键等能够正常工作，而不是打印出控制字符。
    *   **意义**: 这直接提升了终端用户的核心交互体验，是项目稳定性的重要一步，一旦合并将解决社区中一个普遍抱怨的问题。
    *   **链接**: [Pull Request #960](https://github.com/nullclaw/nullclaw/pull/960)

### 4. 社区热点

*   **#915 [Bug]: 调度器 (Scheduler) 未授权问题** 是最受关注的议题。
    *   **分析**: 此 Issue 自创建以来（2026-05-15）到昨天（2026-06-17）仍有更新，尽管评论数不高（2条），但它直接指向了项目的核心功能——调度器。用户描述了一个典型但关键的故障场景：LLM 本身工作正常，工具调用也基本正常，但唯独调度器在 Telegram 和 CLI 中都无法工作。这暗示问题可能出在调度器模块的权限验证或与外部宿主（如 Ollama）的集成上，而非底层模型调用失败。
    *   **链接**: [Issue #915](https://github.com/nullclaw/nullclaw/issues/915)

### 5. Bug 与稳定性

根据严重程度排序：

1.  **严重: 调度器核心功能异常**
    *   **问题**: 调度器在多种客户端（Telegram, CLI）中均无法工作，提示“未授权”。
    *   **严重性**: 高。此功能影响用户的自动化任务和定时交互，是项目的关键卖点。
    *   **状态**: 待修复。没有关联的 fix PR。
    *   **链接**: [Issue #915](https://github.com/nullclaw/nullclaw/issues/915)

2.  **中: CLI 终端键位失效**
    *   **问题**: 在终端中使用 `nullclaw` 时，上、下、左、右等方向键无法正常使用，显示为控制字符。
    *   **严重性**: 中。严重影响交互体验，但可以主要通过键盘输入命令来绕过。
    *   **状态**: 已有 **待合并的 PR (#960)** 进行修复。
    *   **链接**: [Issue #865](https://github.com/nullclaw/nullclaw/issues/865)

### 6. 功能请求与路线图信号

*   **Web UI 配置文档需求 (Issue #861)**:
    *   **用户诉求**: 用户希望在无头 VPS 上启用 Web UI，但觉得现有文档过于技术化，难以理解。
    *   **路线图信号**: 这暴露了项目在用户体验（特别是对于非开发者或入门用户）上的一个痛点。虽然不是一个新功能请求，但改善文档，特别是关于“如何将代理通过隧道引入浏览器”的步骤，应当是下一版本或近期改进的重点。这能降低用户的使用门槛。
    *   **链接**: [Issue #861](https://github.com/nullclaw/nullclaw/issues/861)

### 7. 用户反馈摘要

从最近的 Issues 评论中，可以提炼出用户的核心痛点：

*   **配置复杂性**: 用户 @eabase (Issue #861) 明确表示对 Web UI 的文档不理解，这反映了从“能跑通”到“方便用”的痛点。用户想要的是清晰、无行话的操作步骤。
*   **功能瑕疵感**: 用户 @scabros (Issue #915) 的反馈中，提到“LLM 工作正常，工具调用也基本正常，但调度器不行”，这种“部分功能失效”的情况会给用户带来一种产品不成熟、有瑕疵的感受。
*   **终端交互需求**: 用户 @eabase (Issue #865) 指出的 CLI 控制字符问题，直接触及了经常使用终端的重度用户的日常工作流，他们的满意度和这部分体验强相关。

### 8. 待处理积压

*   **Issue #915 - [Bug]: 调度器未授权问题**: 这是一个严重且长期存在的 Bug（自2026-05-15），目前仍在开放状态且无关联的修复 PR。维护者应优先投入资源，因为该问题比 UI 类 Bug 对核心功能的破坏性更强。
    *   **链接**: [Issue #915](https://github.com/nullclaw/nullclaw/issues/915)

*   **Issue #861 - Web UI 配置咨询**: 虽然这是一个咨询而非 Bug，但它积压了近两个月（自2026-04-22），反映了文档缺失的严重性。维护者应在后续的迭代中考虑优化相关文档。
    *   **链接**: [Issue #861](https://github.com/nullclaw/nullclaw/issues/861)

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-06-18

## 1. 今日速览

项目在过去24小时内保持高度活跃，共处理47条Issues和50条PR，其中Issues关闭率约47%（22/47），PR合并/关闭率为36%（18/50）。核心贡献者围绕 **Reborn 架构** 的 **Projects 功能** 实现了5/5栈式PR提交，标志着用户管理功能进入实质开发阶段。同时，社区反馈集中于 **自动化UX** 和 **Slack/Google OAuth 认证** 的稳定性问题。安全相关（如 cargo-deny 告警）和多个 Bug 修复 PR 已合并，项目整体健康度良好，但仍有32条PR待合并，需关注积压。

## 2. 版本发布

*无新版本发布。* 上一个版本为 v0.29.0（2026-05-16 发布，见 PR #3708），包含 `ironclaw_common` 0.5.0 和 `ironclaw_skills` 0.4.0 的API破坏性变更。

## 3. 项目进展

### 重要合并 PR（过去24小时）
- **CRITICAL: Reborn Projects 功能**：核心贡献者 @ilblackdragon 提交了5个栈式PR（#5015→#5019），涵盖 `ironclaw_projects` crate 创建、`ProjectService` port/façade、composition 接线、WebChat v2 HTTP 端点及前端页面点亮。**这是一个里程碑功能**，引入 `Project`/`ProjectMember` 实体及 `ProjectRole`（Owner>Editor>Viewer），为 Reborn 架构提供了多用户协作基础。
- **PR #5035**: 在 Activity 视图中 **实时显示正在运行的工具参数**（而非仅运行结束后）。关闭 Issue #4852，改善开发者调试体验。
- **PR #5052**: 修复 **实时 Slack OAuth 路径** 的 DM 结构性对等问题（关闭 Issue #5009），确保认证流程安全性。
- **PR #5051**: 修复 **Gmail 认证恢复失败** 导致的运行阻塞问题，同时恢复持久化授权授予机制。
- **PR #5000**: 合并了“无进度检测”设计的PR2（内容摘要管道），为后续输出感知型进度检测奠定基础。
- **PR #5022**: 合并了“无进度检测”设计的PR3，这是该重构的核心支柱，引入 `ContentDigest` 实现输出感知的进度判断。
- **PR #4983**: 移除了 NEAR AI 聊天提供者的**工具消息扁平化兼容路径**，精简了多轮工具历史处理逻辑。

### 项目向前迈进的标志
- **Reborn Projects** 功能已完成全部5/5栈式PR提交，预计将在下一版本合并。
- **OAuth 认证体系** 进一步加固：Gmail、Slack 路径均有针对性修复。
- **自动化与工具** UX 流程优化（实时参数显示、认证恢复）使开发者体验更流畅。

## 4. 社区热点

### 最活跃 Issues（评论数TOP）
1. **#1584**（3评论，3👍）：[CLOSED] **微信渠道的 IronClaw 插件已就绪**。用户期待 OpenClaw 微信插件移植到 IronClaw。关联议题 #3582 仍在开放（正在 Port 到 Reborn ProductAdapter）。
2. **#3026**（3评论）：[CLOSED] **Reborn 生产环境上线就绪**（Epic级议题）：定义了生产配置图的构建、验证、报告机制，避免部分服务缺失时继续服务流量。
3. **#4764**（2评论）：[CLOSED] **拒绝 shell 审批后无用户反馈**：工具调用被拒绝后悬而未决，UI无状态提示。
4. **#5009**（1评论）：[OPEN] **实时 Slack OAuth 路径需结构性 DM 对等性**：安全审查发现触发式与实时路径的不一致性。
5. **#4793**（1评论）：[CLOSED] **首次启动时扩展和自动化是否应被屏蔽？**：新用户面临引导流程的UX决策。

### 最活跃 PR
- **Projects 功能栈**（#5015-#5019）：每个PR均有core贡献者深度参与，代表项目当前最大优先级。
- **PR #5055**: 自动化错误展示软化。讨论聚焦于“Needs attention”黄色标签 vs 红色错误的设计取舍。

### 社区诉求分析
社区反馈集中在 **认证流程的易用性**（Slack OAuth、Gmail auth-resume）和 **自动化UI的透明性**（执行状态、失败原因可视化）。这反映出自ReBorn架构引入后，用户对生产级稳定性的需求迅速上升。

## 5. Bug 与稳定性

### 已关闭/已有 Fix PR 的严重 Bug
| Issue # | 严重程度 | 描述 | 修复 PR |
|---------|---------|------|---------|
| #4764 | 中等 | 拒绝 shell 审批后 UI 无反馈 | 已关闭（其根本问题在 #4977 中修复） |
| #4961 | 中等 | 代理人回复完成后“Working”指示器仍然显示 | 已关闭（UI 时序问题） |
| #4986 | 高 | 循环自动化被工具审批永久阻塞 | 已关闭（需改进审批流程） |
| #4853 | 中等 | Railway 多租户环境中工具活动完成后消失 | 已关闭 |
| #4974 | 低 | 活动工具行显示重复的“...”操作按钮 | 已关闭（UI 重复元素） |
| #5004 | 中等 | 自动化失败摘要卡无法操作（无详细信息） | 已关闭 |
| #4988 | 低 | 最近运行可视化难理解（仅彩色圆点） | 已关闭 |
| #4980 | 低 | 自动化空状态无创建引导 | 已关闭 |
| #5022 | 低 | 工具运行参数实时显示（已修复） | #5035（已合并） |
| #5051 | 高 | Gmail 认证恢复失败导致运行崩溃 | #5051（已合并） |
| #5052 | 高 | 实时 Slack OAuth 路径的 DM 结构性缺陷 | #5052（已合并） |

### 仍开放的严重 Bug
| Issue # | 严重程度 | 描述 | 备注 |
|---------|---------|------|------|
| #3729 | 中等 | 拒绝的 `tool_install` 调用在页面刷新后显示为成功 | 已开放1个月，无关联PR |
| #4824 | **严重（生态级）** | `cargo-deny` CI 因新的 RUSTSEC 安全通告全仓库失败（影响 postgres crate） | 影响所有PR，需紧急修复 |
| #5007 | 低 | 技能验证错误在填充必填字段后未清除 | UI 验证逻辑问题 |
| #5031 | 低 | Slack 连接卡在已连接后仍可调用，且仅支持英文 | 国际化问题 |
| #5044 | 中 | `NEARAI_MODEL=auto` 被 cloud-api 拒绝（HTTP 400） | 已有 Fix PR #5043 / #5045 在开放中 |
| #5028 | 低 | 被拒活动的ID需显式稳定化 | 持续一致性改进 |

## 6. 功能请求与路线图信号

### 明确纳入开发路线图的功能
1. **Projects 实体（5/5栈式PR）** — 已提交完整实现，预计并入下一版本（v0.30或更高），这是 Reborn 多用户架构的核心基石。
2. **自动化改进**：自动化的失败摘要可操作化（#5004）、空状态引导（#4980）、运行可视化（#4988）均已关闭，但仍需在后续迭代中落地。
3. **WeCom（企业微信）渠道**（#4191）：v0.29.0 已添加，但验证发现多项问题（见开放状态），预计还需一至两个补丁版本。
4. **微信渠道 Port 到 Reborn**（#3582）：明确标注为 `suggested_P2`，优先级中等。

### 新提出的功能需求
| Issue # | 功能描述 | 判断 |
|---------|---------|------|
| #4878 | **提升 IronClaw 工程生产力**：使用 IronClaw 自身加速开发流程（AI-native 工程化） | 高层级 Epic，可能引导未来团队工具栈演进 |
| #5036 | **构建可扩展的 Agent 任务服务基础设施**：用于编码、代码审查、CI 故障修复等 | 是 #4878 的子任务，已指出已有实现 |
| #3582 | **WeChat 渠道 Port 到 Reborn ProductAdapter** | 明确计划，已有 Porting Guide |

### 可能纳入下一版本的功能
- **NEARAI_MODEL=auto 的默认模型解析**（PR #5045）：解决用户启动时的配置痛点。
- **读代理文件系统查看器**（PR #5057）：在 WebChat v2 中添加文件浏览功能。

## 7. 用户反馈摘要

从 Issues 评论中提取的真实用户反馈：

### 正面反馈
- **微信渠道用户**：“WeChat plugin for OpenClaw is now available… We'll soon need the plugin for IronClaw.” —表示社区对 OpenClaw 微信插件[^1]移植到 IronClaw抱有期待。
- **Reborn 自动化用户**：首次运行引导设计（#4793）被认为“合理保护了新手不迷失”，但也感叹“应该给个跳过按钮”。

### 痛点（按出现频率排序）
1. **自动化UX不透明**：多个用户反映“Failures=1”但无法确定哪个自动化、哪次运行失败（#5004）。运行状态仅用小圆点表示，难以理解趋势（#4988）。
2. **认证流程卡顿**：Gmail认证恢复后仍出现“execution driver was temporarily unavailable”错误（#5051）；Slack认证在拒绝后无任何反馈（#4762）。
3. **首次使用引导**：新用户不知道如何创建自动化（#4980），扩展/自动化页面在未配置提供商时被屏蔽且无说明（#4793）。
4. **跨语言错误**：Slack 连接卡仅响应英文命令（#5031），中文用户需猜测交互方式。
5. **工具调用顺序问题**：拒绝调用后，活动顺序在实时与回放间不一致（#5028）。

## 8. 待处理积压

### 长期未响应的关键 Issue
| Issue # | 创建日期 | 类型 | 说明 | 当前状态 |
|---------|----------|------|------|----------|
| #3729 | 2026-05-17（1个月前） | Bug | `tool_install` 拒绝后刷新显示为成功 | 无关联PR或进展，持续误导用户 |
| #3582 | 2026-05-13（1个月前） | 功能 | 微信渠道 Port 到 Reborn ProductAdapter | 明确标注 `suggested_P2`，但无近期进展 |
| #4191 | 2026-05-28（3周前） | QA | WeCom 渠道验证发现多项问题 | 开放中，但评论数为0 |
| #4115 | 2026-05-27（3周前） | UI/UX | 渠道移除流程中的按钮可见性问题 | 开放中，无新进展 |
| #4824 | 2026-06-12（6天） | 安全 | cargo-deny 全仓库失败（postgres 安全通告） | **严重影响所有PR CI**，需立即关注 |

### 待合并的积压 PR（重点）
- **PR #4876**（2026-06-14）：43个依赖包的批量更新（包括 `agent-client-protocol`、`rustls` 等），风险中等，但能修复安全漏洞。
- **PR #5041**（2026-06-17）：自动化创建问题修复（headless routine persistence），critical 级。
- **PR #5043**（2026-06-17）：模型无效时快速失败，防止长时间无响应。
- **PR #5015-5019**（2026-06-17）：Projects 功能栈，是当前最大功能 PR 集，需集中评审后合并。

[^1]: 这里的“微信插件”指 OpenClaw 的微信渠道实现，并非客户项目或专利概念。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我已根据您提供的 LobsterAI GitHub 数据，为您生成以下 2026 年 6 月 18 日的项目动态日报。

---

# LobsterAI 项目动态日报 | 2026年6月18日

## 1. 今日速览

过去 24 小时，LobsterAI 项目在沉寂的 Issue 活动背后，展现出极高的开发活跃度。**项目主要处于集中修复与功能完善阶段**，共有 13 个 Pull Request (PR) 被合并或关闭，无待合并项，体现了优秀的开发节奏和合并效率。

新发布的 **2026.6.15** 版本引入了**计算机使用 (Computer Use)** 和**实时 ASR 语音输入**等重磅功能。今日的 PR 则聚焦于 **Cowork 协同模式**的稳定性、用户体验优化（如滚动、导航、消息渲染）以及模型选择逻辑和资源限制的修复。整体来看，项目在快速迭代新功能后，正在进行紧锣密鼓的缺陷修复和体验打磨，项目健康度非常高。

## 2. 版本发布

### 最新版本：LobsterAI 2026.6.15
-   **发布日期**：2026年6月15日
-   **发布链接**：`https://github.com/netease-youdao/LobsterAI/releases/tag/2026.6.15`
-   **主要新增功能 (Feat)**：
    -   **计算机使用 (Computer Use)**：这是个人 AI 助手领域的一个前沿特性，可能支持 AI 模型直接操控计算机界面，实现自动化任务。
    -   **实时 ASR 语音输入**：在 Cowork 模式下，新增了实时自动语音识别（ASR）输入功能，提升交互效率。
    -   **上下文连续性改进**：优化了 Cowork 模式下会话压缩后的上下文连贯性。
-   **破坏性变更 (Breaking Changes)**：根据 Release Notes，本版本未提及直接的破坏性变更。但新引入的“计算机使用”功能可能需要用户调整相关权限或配置。
-   **迁移注意事项**：
    1.  **功能依赖**：使用“计算机使用”和“实时语音输入”功能，请确保系统环境和依赖库已更新至最新。
    2.  **配置检查**：建议用户在更新后，检查 Cowork 相关设置，以获取最佳的上下文处理体验。

## 3. 项目进展

今日合并/关闭的 13 个 PR 展现了项目团队在多个维度上的持续推进：

-   **核心稳定性**：
    -   **PR #2149**: 提升了 OpenClaw 网关进程的 V8 堆限制，减少了长时间多通道工作负载下的 OOM（内存溢出）崩溃。[(链接)](https://github.com/netease-youdao/LobsterAI/pull/2149)
    -   **PR #2147**: 修复了用户在 Cowork 启动过程中提前停止时，仍可能发送聊天消息的问题，增强了启动-停止竞态条件的鲁棒性。[(链接)](https://github.com/netease-youdao/LobsterAI/pull/2147)

-   **用户体验优化**：
    -   **PR #2174**: 修复了 Cowork 会话中“滚动到底部”的行为，使其能精确对齐到最新消息，并移除了会话切换时的残留定时器。[(链接)](https://github.com/netease-youdao/LobsterAI/pull/2174)
    -   **PR #2171**: 优化了长对话中的 Rail 导航卡顿问题，通过避免长距离平滑滚动和记忆化列表项来提升流畅度。[(链接)](https://github.com/netease-youdao/LobsterAI/pull/2171)
    -   **PR #2173**: 修复了用户消息在发送后以 Markdown 而非纯文本渲染导致的换行丢失问题。[(链接)](https://github.com/netease-youdao/LobsterAI/pull/2173)

-   **功能修复与完善**：
    -   **PR #2153**: 修复了在相同名称的包下，无法正确选择特定模型的问题，并丰富了模型选择的诊断日志。[(链接)](https://github.com/netease-youdao/LobsterAI/pull/2153)
    -   **PR #2154**: 修复了流式回复被手动停止后，模型元数据丢失的问题。[(链接)](https://github.com/netease-youdao/LobsterAI/pull/2154)
    -   **PR #2162**: 解决了语音输入功能合并冲突，保留了实时 ASR 流程，同时保留了草稿所有权、回调保护等关键逻辑。[(链接)](https://github.com/netease-youdao/LobsterAI/pull/2162)

-   **功能新增**：
    -   **PR #2145**: 作为新版本的一部分，合入了改进的上下文连续性功能，使 Agent 在压缩历史后能更可靠地继续任务。[(链接)](https://github.com/netease-youdao/LobsterAI/pull/2145)

-   **国际化与文档**：
    -   **PR #2172**: 支持恢复因达到分享数量上限而关闭的 HTML 分享链接，并完善了相关文档和错误提示。[(链接)](https://github.com/netease-youdao/LobsterAI/pull/2172)
    -   **PR #2144**: 更新了门户网站的备用和升级链接至新域名。
    -   **PR #2175 & PR #1463**: 优化了 README 和长模态框标题的显示，改善用户体验。

## 4. 社区热点

今日社区讨论热度普遍不高，参与评论的 PR 较少。最值得关注的是：

-   **PR #2172 (HTML分享恢复)**：该 PR 获得了较多的 `area` 标签（`renderer`, `docs`, `main`, `artifacts`），显示了其对多个模块的影响。其背景可能是用户社区反馈了因分享数量限制导致链接失效的痛点，团队在此基础上增加了“恢复”机制，这是一个典型的基于用户反馈的功能迭代。[(链接)](https://github.com/netease-youdao/LobsterAI/pull/2172)

-   **PR #1463 (长标题修复)**：此 PR 从 4 月 4 日创建，直到今天才被关闭，可能是一个长期存在的 UI 问题。虽然没有评论，但其“stale”标签和长达两个多月的生命周期，暗示了该 Issue 可能对用户体验有一定影响，但优先级不高，最终在今天被清理合并。[(链接)](https://github.com/netease-youdao/LobsterAI/pull/1463)

总体而言，社区活跃度体现在 PR 的修复和合并层面，而非公共讨论。这表明项目可能由核心团队主导开发，或者用户反馈主要通过其他渠道（如内部工单）传递。

## 5. Bug 与稳定性

今日没有新开 Issues，所有的 Bug 修复均以 PR 形式直接解决。

| 严重程度 | Bug 描述 | 状态 | 修复 PR |
| :--- | :--- | :--- | :--- |
| **高** | OpenClaw 网关进程在长时间、多通道工作负载下 OOM 崩溃 | **已修复** | [#2149](https://github.com/netease-youdao/LobsterAI/pull/2149) |
| **高** | 用户手动停止流式回复后，模型元数据丢失 | **已修复** | [#2154](https://github.com/netease-youdao/LobsterAI/pull/2154) |
| **中** | Cowork 启动过程中，用户停止操作后逻辑混乱 | **已修复** | [#2147](https://github.com/netease-youdao/LobsterAI/pull/2147) |
| **低** | 长对话 Rail 导航出现卡顿/跳动 | **已修复** | [#2171](https://github.com/netease-youdao/LobsterAI/pull/2171) |
| **低** | 用户消息中换行符丢失，内容显示为一行 | **已修复** | [#2173](https://github.com/netease-youdao/LobsterAI/pull/2173) |
| **低** | 名称相同的包下模型选择错误 | **已修复** | [#2153](https://github.com/netease-youdao/LobsterAI/pull/2153) |

**分析**：今日修复的 Bug 主要集中在 **稳定性** (OOM, 启动竞态) 和 **用户体验** (滚动, 渲染) 两大核心领域。尤其是 OOM 崩溃的修复，直接提升了应用的可靠性和可用性。团队通过统一的 PR 合并活动，一次性解决了多个积压和新兴的问题，效率很高。

## 6. 功能请求与路线图信号

-   **功能信号**：`PR #2143` (计算机使用)[在版本发布中合并] 和 `PR #2148` (实时ASR语音输入)[在版本发布中合并] 的合并，是项目路线图中两个明确的里程碑。这表明 LobsterAI 正在向 **“多模态交互”** 和 **“自动化Agent”** 方向演进，追求更智能、更自然的用户界面。
-   **下一版本可能性**：基于今日大量针对 Cowork 的修复（滚动、导航、模型选择、启动逻辑等），可以判断 **“Cowork功能的稳定性和体验打磨”是下一阶段的核心任务**。这些修复极大概率会包含在未来的小版本更新（如 `2026.6.18.1` 或类似）中。
-   **新功能请求**：今日社区未提出新的功能请求。

## 7. 用户反馈摘要

今日无新的 Issues 或活跃的 PR 评论，因此无法提炼直接的用户反馈。但从修复的内容可以反向推断出用户的潜在痛点：

-   **痛点：性能与可靠性**：用户可能遇到了长时间对话后应用卡顿（#2171）、甚至崩溃（#2149）的问题。
-   **痛点：交互体验**：用户可能对 Cowork 模式下的消息滚动定位（#2174）、导航响应（#2171）不够满意。
-   **痛点：功能完整性**：用户分享的链接因数量限制无法恢复，导致分享体验中断（#2172）。
-   **使用场景**：大量的“Cowork”相关修复表明，**多轮、复杂的协同工作会话是用户的核心使用场景**。项目团队也正是在重点优化这一场景。

## 8. 待处理积压

-   **零积压**：目前项目没有待合并的 PR，也没有新开的 Issues。所有工作都在高效的流水线中解决。今日有一个标记为 `[stale]` 的 PR (#1463) 被关闭，但这是因为修复已完成并合并，并非被遗忘。这反映了项目管理者对积压工作清理的重视。

**总结**：LobsterAI 项目在 2026 年 6 月 18 日展现出极佳的健康度和开发效率。新功能的上线伴随着一轮集中的、高质量的缺陷修复和体验优化。项目正稳健地迈向更成熟、更稳定的阶段。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

好的，这是根据您提供的 Moltis 项目 GitHub 数据生成的 2026-06-18 项目动态日报。

---

## Moltis 项目动态日报 - 2026-06-18

### 1. 今日速览

项目活跃度中等偏高。过去24小时内，社区共提交了5个Issues和1个Pull Request，显示出用户正在积极探索和反馈问题。一个与“自助托管Whisper转录错误”相关的Bug已被关闭，表明团队对关键问题有快速响应。当前社区主要关注点集中在**TTS输出格式配置**、**Markdown导出**以及**回声消除**等增强功能和性能稳定性上。整体来看，项目正围绕语音交互和用户体验进行密集的功能打磨。

### 2. 版本发布

*无新版本发布。*

### 3. 项目进展

- **核心进展：** 项目当前暂无可合并或关闭的PR，但已收到一个针对关键功能的修复性PR，表明代码层面的工作正在进行中。
- **关键PR (#1130):** `[feat: make webui rpc timeout configurable]` - 该PR由作者 **khimaros** 提交，旨在将WebUI的RPC超时时间设置为可配置项，以此解决Issue #1127。虽然尚未合并，但这标志着社区已开始着手实施用户提出的配置需求。

### 4. 社区热点

- **最活跃议题（#1126）：** `[Feature]: allow to configure the format of tts output` - 这是今日讨论度最高的议题（3条评论），由 **khimaros** 提出。用户希望为TTS（文本转语音）输出格式增加自定义配置能力。这表明社区对语音输出的灵活性和个性化有较高要求。
    - 链接: [Issue #1126](https://github.com/moltis-org/moltis/issues/1126)

- **其他活跃议题（#1131）：** `[Feature]: Add copy + export as Markdown` - 尽管暂无评论，但该需求由 **vvuk** 提出，直接关系到用户对对话记录的保存和复用场景，是一个实用且呼声可能很高的需求。
    - 链接: [Issue #1131](https://github.com/moltis-org/moltis/issues/1131)

### 5. Bug 与稳定性

- **[严重] (#1129) `[Bug]: lack of echo cancellation causes agent to retrigger itself in live mode`**: 该Bug指出在实时语音模式下，由于缺乏回声消除功能，AI代理会听到自己的声音并重复触发，导致对话循环。这是一个会严重影响实时语音通话体验的关键问题，目前尚未有对应的修复PR。
    - 链接: [Issue #1129](https://github.com/moltis-org/moltis/issues/1129)

- **[已解决] (#1128) `[Bug]: transcription errors with self-hosted whisper.cpp`**: 该Bug报告了在使用自托管Whisper.cpp进行语音识别时出现的转写错误。该问题已在24小时内被关闭，说明团队对此类影响核心功能的问题处理非常及时。
    - 链接: [Issue #1128](https://github.com/moltis-org/moltis/issues/1128)

### 6. 功能请求与路线图信号

今日收到的功能请求主要集中在**可配置性**和**数据导出**上，这可能预示着未来版本的重点优化方向。

- **高优先级信号（#1126 & #1130）：** 针对“TTS输出格式配置”（#1126）和“RPC超时配置”（#1130，已有对应PR）的需求表明，用户迫切需要增强对Moltis运行时行为的控制能力。这一系列“可配置化”需求很可能被纳入下一个版本中。
- **实用功能需求（#1131）：** “复制与导出为Markdown”（#1131）是一个清晰且影响广泛的需求，适用于数据分析、报告分享等场景。该功能实现难度相对较低但用户价值高，很有可能被快速采纳。
- **下一个版本候选：** 考虑到已有针对#1127（RPC超时）的PR，结合#1126和#1131的高实用性，`可配置化和导出功能`很可能构成下一个版本的核心升级点。

### 7. 用户反馈摘要

- **核心需求痛点：** 用户 **khimaros** 连续提交了关于TTS输出格式、RPC超时、转录错误和回声消除等多个Issues，显示出他在高频使用Moltis的语音功能，并遇到了多个细节上的“灵活度不足”和“稳定性问题”。这暗示项目在语音交互的深度定制和稳定性方面仍有较大提升空间。
- **使用场景推断：** 从“Markdown导出”（#1131）和“实时模式回声消除”（#1129）的需求可以看出，用户不仅将Moltis用于简单的问答，更可能将其用于**自动化对话记录**和**持续性的语音交互会话**。

### 8. 待处理积压

- **核心稳定性问题（#1129）「回声消除」**：此Bug严重程度高，但尚未有PR关联，也未有团队成员的公开回复。这是目前整个积压列表中**最需要优先关注**的问题，直接关系实时语音模式的可使用性。
    - 链接: [Issue #1129](https://github.com/moltis-org/moltis/issues/1129)

- **功能请求（#1131）「Markdown导出」**：该需求清晰且实用，但至今没有任何评论或响应。为避免用户等待过久，建议维护者尽快给出“规划中”或“暂不考虑”的反馈。
    - 链接: [Issue #1131](https://github.com/moltis-org/moltis/issues/1131)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，根据您提供的CoPaw项目GitHub数据，现为您呈上2026-06-18的项目动态日报。

---

# CoPaw 项目动态日报 | 2026-06-18

## 1. 今日速览

CoPaw 项目在2026年6月18日显示出一如既往的高活跃度与快速迭代节奏。项目在过去24小时内共处理了 **45条 Issues** 和 **50条 PRs**，并正式发布了 **v1.1.12** 版本。社区讨论热烈，特别是关于频道集成和Agent行为逻辑的反馈集中。后端迁移至AgentScope 2.0的计划备受关注，同时多个关于“小艺”频道的Bug修复已被合并。项目整体健康度良好，但存在多个影响用户核心体验的稳定性问题（如进程冻结、崩溃）亟待解决。

## 2. 版本发布

项目于昨日发布了 **v1.1.12** 正式版本及一个 **v1.1.12-beta.2** 测试版本。

*   **v1.1.12 (正式版)**: [查看发布详情](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.12)
    *   **Console UI重构**: 对**模型页面**进行了彻底重设计，引入了Provider聚合、统一卡片UI及布局重排。
    *   **简洁模式**: 新增“简单模式”，提供扁平化导航和按更新时间排序的会话列表，优化了非高级用户的体验。
    *   **Beta版本内容**: v1.1.12-beta.2主要聚焦于性能优化和功能增强，包括移除不必要的Agent配置深度拷贝、新增按标题过滤会话功能等。
    *   **迁移提示**: 本次更新无破坏性变更。用户可通过常规升级方式获取最新版本。

## 3. 项目进展

项目今天在关键功能和稳定性修复上取得了重要进展，共合并/关闭了34个PR。

*   **核心稳定性修复**:
    *   **插件崩溃循环解决了**: [PR #5260](https://github.com/agentscope-ai/QwenPaw/pull/5260) 修复了Tauri桌面版在安装第三方插件依赖时，因 `sys.executable` 指向错误进程导致启动崩溃的死循环问题。
    *   **备份不再因个别文件失败**: [PR #5041](https://github.com/agentscope-ai/QwenPaw/pull/5041) 修复了备份功能因单个无权限文件（如浏览器缓存）而导致整个备份任务失败的问题，现在会跳过不可读文件。
*   **“小艺”频道大修完成**: [PR #5274](https://github.com/agentscope-ai/QwenPaw/pull/5274) 重构了小艺频道，从单WebSocket连接改为双连接架构，并严格对齐官方A2A协议。这标志着长期困扰用户的“小艺频道不可用”问题得到根本解决。此前相关的修复 [PR #3839](https://github.com/agentscope-ai/QwenPaw/pull/3839) 也于同日最终合并。
*   **迁移工具准备就绪**: 项目接纳了来自社区的贡献 [PR #5276](https://github.com/agentscope-ai/QwenPaw/pull/5276)，新增了 `qwenpaw migrate openclaw` CLI命令，帮助用户从OpenClaw/Hermes Agent生态系统迁移到CoPaw，表明项目正积极拓展用户基础。
*   **AgentScope 2.0 迁移启动**: 虽然 [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) 仍处于开放状态，但 [PR #5281](https://github.com/agentscope-ai/QwenPaw/pull/5281) 已经将 `2.0.0a1` 的版本号合并入代码，标志着后端迁移的代码工作已正式启动。

## 4. 社区热点

今日社区讨论焦点主要围绕以下几个问题：

*   **“小艺”频道集成问题 (Issue #1911)**: 累计 **22条评论**，是最热门的话题。用户报告集成“小艺”频道后，在手机端询问机器人的回答总是“开小差”，且无法在CoPaw中找到手机端的对话记录。这表明用户对跨平台无缝体验的需求强烈，任何集成上的障碍都会严重影响使用。 [查看讨论](https://github.com/agentscope-ai/QwenPaw/issues/1911)
*   **子Agent上下文压缩导致进程冻结 (Issue #5218)**: 累计 **16条评论**，这是一个严重的稳定性问题。用户反馈当子Agent触发上下文压缩时，整个QwenPaw进程会完全冻结，只能通过重启恢复。这引发了社区对上下文压缩机制的设计和底层锁的讨论。 [查看讨论](https://github.com/agentscope-ai/QwenPaw/issues/5218)
*   **Agent创建的定时任务无法触发 (Issue #5064)**: 累计 **12条评论**。这是一个高影响的功能缺陷。用户通过Agent创建的定时任务不会在设定的时间点自动执行，也无法手动编辑。社区呼吁项目组优先修复这个Agent自主能力的基础功能。 [查看讨论](https://github.com/agentscope-ai/QwenPaw/issues/5064)

## 5. Bug 与稳定性

今日报告的Bug数量较多，且多个涉及进程崩溃和数据丢失，稳定性问题突出。

| 严重程度 | 问题描述 | Issue 链接 | 是否有 Fix PR | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| **Critical** | **进程冻结**: 子Agent触发上下文压缩时整个进程冻结。 | [#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218) | 无 | 严重阻碍复杂Agent任务执行。 |
| **Critical** | **桌面端崩溃循环**: macOS ARM64上，QwenPaw Desktop约1分钟崩溃并重启一次。 | [#5209](https://github.com/agentscope-ai/QwenPaw/issues/5209) | 已关联 [#5243](https://github.com/agentscope-ai/QwenPaw/issues/5243) | 已定位到ChromaDB Rust绑定的SIGSEGV崩溃。 |
| **High** | **ChromaDB探针失败**: 运行时探针因集合命名规则问题导致始终失败，进而使系统降级。 | [#5284](https://github.com/agentscope-ai/QwenPaw/issues/5284) | 已合并 [#5271](https://github.com/agentscope-ai/QwenPaw/pull/5271) | 修复添加了异步子进程探针以捕获SIGSEGV。 |
| **High** | **定时任务不触发**: Agent创建的定时任务无法正常触发执行。 | [#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064) | 有候选PR [#5241](https://github.com/agentscope-ai/QwenPaw/pull/5241) | PR提议增大APScheduler的 `misfire_grace_seconds`。 |
| **High** | **配置不持久化**: MCP/ACP配置通过UI保存后，实际未写入`agent.json`。 | [#5266](https://github.com/agentscope-ai/QwenPaw/issues/5266) | 无 | 影响所有MCP/ACP功能的可靠性。 |
| **Medium** | **矢量索引不持久化**: Windows上重启后，内存搜索的矢量索引丢失。 | [#5259](https://github.com/agentscope-ai/QwenPaw/issues/5259) | 无 | 影响Windows用户的核心记忆功能。 |
| **Medium** | **附件下载404**: 非纯文本文件（docx, pdf）下载时报404错误。 | [#5140](https://github.com/agentscope-ai/QwenPaw/issues/5140) | 无 | 回归问题，影响用户获取Agent生成的文件。 |
| **Medium** | **聊天界面文件发送失效**: `send_file_to_user`工具在最新版本不再提供可下载链接。 | [#5258](https://github.com/agentscope-ai/QwenPaw/issues/5258) | 无 | 影响Agent与用户的文件交互。 |
| **Low** | **技能状态重置**: 每次升级后，用户禁用的内置技能会重新启用。 | [#5262](https://github.com/agentscope-ai/QwenPaw/issues/5262) | 无 | 低优先级，但影响用户体验的连贯性。 |

## 6. 功能请求与路线图信号

*   **UI字体缩放与文件链接**: [#4077](https://github.com/agentscope-ai/QwenPaw/issues/4077) 用户请求支持UI字体缩放和聊天输出中的文件路径超链接，属于提升用户体验的功能。暂无对应PR。
*   **Agent头像上传**: [PR #5263](https://github.com/agentscope-ai/QwenPaw/pull/5263) 是一个正在开发中的功能，旨在为Agent添加头像上传和显示功能，提升可视化效果和个性化程度，有望在后续版本中合并。
*   **AgentScope Tracing集成**: [#4057](https://github.com/agentscope-ai/QwenPaw/issues/4057) 用户提出希望集成AgentScope的链路追踪功能以便于监控。此需求与后端迁移至AgentScope 2.0 ([#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727)) 的路线图高度吻合，很可能在2.0版本中直接实现。

## 7. 用户反馈摘要

从今日的Issues讨论中可以提炼出以下用户痛点：

*   **核心体验受损**: 用户在使用Agent的核心能力（如定时任务、上下文压缩、文件下载）时遇到严重障碍，直接导致任务中断或功能不可用，挫败感强。
*   **跨平台集成不稳定**: 对小艺等其他平台的集成是热点需求，但集成后的不稳定（如回复失败、消息丢失）让用户感到困扰。
*   **升级的痛苦**: 多个Bug（如附件下载、技能重置）属于回归问题或升级后出现的新问题，用户抱怨每次升级都需要重新适应和配置。
*   **安全担忧**: 有用户指出了通过Prompt Injection实现远程代码执行的安全风险 ([#5234](https://github.com/agentscope-ai/QwenPaw/issues/5234))，虽然此问题存在争议，但反映了对云端部署安全的关注。
*   **感谢与肯定**: 也有用户对问题被快速响应和修复（如“小艺”频道的修复PR被合并）表示感谢，这表明社区对项目的积极态度。

## 8. 待处理积压

以下为长期未响应或进展缓慢的关键Issue，建议维护团队重点关注：

*   **Issue #1911**: **小艺频道Bug** (评论22条)。尽管今天有修复PR合并，但此问题已存在近三个月，评论数众多，需确保修复的完整性和后向兼容性。 [查看链接](https://github.com/agentscope-ai/QwenPaw/issues/1911)
*   **Issue #4727**: **AgentScope 2.0 迁移** (评论11条，+2 👍)。这是影响项目未来的重大变更，虽然已有Alpha版本号合并，但核心的迁移工作尚未完成，需要持续的进度更新和社区沟通。 [查看链接](https://github.com/agentscope-ai/QwenPaw/issues/4727)
*   **Issue #3840**: **小艺频道旧版Bug**，虽已关闭，但用户在该Issue下的持续评论和 [#1911](https://github.com/agentscope-ai/QwenPaw/issues/1911) 的活跃表明问题可能未完全解决。需要跟进验证最新PR的修复效果。 [查看链接](https://github.com/agentscope-ai/QwenPaw/issues/3840)

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，我将根据您提供的ZeroClaw项目GitHub数据，为您生成一份结构清晰、数据驱动的项目动态日报。

***

# ZeroClaw 项目动态日报 (2026-06-18)

## 1. 今日速览

ZeroClaw 项目今日保持高活跃度，24小时内共处理了50个Issue和50个PR，显示出社区参与度强劲。项目重心集中在平台基础设施的深化建设上，包括**桌面交互能力 (Computer-use RFC)**、**GitHub原生集成**、**计划任务管道重构**以及**安全策略热更新**等关键特性。同时，多个高风险的Bug修复（如画布回归、Shell审批循环）已被迅速处理和合入，体现了项目对稳定性的高度重视。当前开放PR数量较多，且涉及多个大型功能分支（如Discord频道、配置级联删除），预示着下一批重大更新正在持续集成中。

## 2. 版本发布

过去24小时内无新版本发布。

## 3. 项目进展

今日有9个PR被合并或关闭，其中以下亮点值得关注：

- **关键回归修复：修复WS会话中的画布存储** (`#7678`, **已合并**)
    - 修复了WebSocket会话（`/ws/chat` 和ACP）中的一个回归问题，该问题导致 `#6986` 变更后 `/canvas` 页面无法正常显示。此修复通过为WS和ACP会话注入共享的 `CanvasStore` 实例，确保了画布数据的正确写入与读取。
- **ACP事件可见性提升：暴露历史修剪与Turn取消事件** (`#7684`, **已合并**)
    - 解决了用户无法区分系统生成消息与智能体主动输出消息的问题。现在，历史记录修剪器（history pruner）和Turn取消操作将以样式化的系统事件形式呈现给用户，提升了用户体验的透明度。
- **文档构建优化：减少重复资产与打印页面** (`#7754`, **已合并**)
    - 优化了文档网站的CI流程，通过去重多语言资产和移除整本书的打印页面，显著减小了gh-pages分支的仓库大小，提升了开发者和用户的访问效率。
- **诊断工具增强：校验自定义/兼容OpenAI的供应商** (`#7793`, **已合并**)
    - 修复了 `zeroclaw doctor` 诊断命令的一个Bug，使其能正确校验使用 `custom` 或 `openai-compatible` 别名的供应商配置，确保用户配置的合法性。
- **扩展平台支持：为Matrix频道添加心跳支持** (`#7718`, **已合并**)
    - 将 `matrix` 添加为支持的心跳目标频道，填补了特定平台的空白。

**项目整体向前迈进的评估**：
今日的合并主要集中在**稳定性修复**和**用户体验微调**。虽然功能推进看似零散，但修复了画布等高优Bug，并优化了ACP事件和文档构建，这些工作直接提升了运行时的可靠性和用户对系统状态的感知能力。结合待合并的大量PR，项目正为下一个功能发布周期的核心特性（如配置级联操作、Discord原生富控制台）打好坚实基础。

## 4. 社区热点

今日讨论最活跃的议题反映了社区对**核心基础设施**和**高级交互能力**的强烈诉求：

- **`#6909` [RFC: Computer-use支持]** (评论: 6)
    - **链接**: [Issue #6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)
    - **分析**: 此 **RFC 是当前社区关注的绝对焦点**。用户 `NiuBlibing` 提出为ZeroClaw添加“计算机使用”能力，即让AI智能体能够直接捕获桌面屏幕截图并发送鼠标/键盘事件来自动化控制本地机器。诉求明确对标OpenAI Codex和Hermes等竞品，代表了社区对**更强大、更通用 Agent 能力**的渴求。该议题风险等级为“高”，已被项目接受。
- **`#2079` [Feature: 恢复GitHub为原生频道]** (评论: 6)
    - **链接**: [Issue #2079](https://github.com/zeroclaw-labs/zeroclaw/issues/2079)
    - **分析**: This 功能请求已经活跃了4个月，至今热度不减。用户 `mits87` 希望将GitHub集成提升为“一等公民”（原生频道），使智能体能够像在Telegram/Slack中一样，以统一的接口监听和操作GitHub上的Issues、PRs、评论等事件。这反映了**高级用户对DevOps自动化工作流深度集成的需求**。
- **`#6067` [Feature: 可配置的频道回复意图预检查]** (评论: 5)
    - **链接**: [Issue #6067](https://github.com/zeroclaw-labs/zeroclaw/issues/6067)
    - **分析**: 此功能请求旨在优化性能，允许配置使用更小、更快的轻量模型来进行频道内“是否应该回复”的预判，而不是每次都阻塞式地使用主模型。用户 `mn13` 提出的**对“成本”和“性能”的精细化控制**，暗示了ZeroClaw用户规模正在扩大，对运行效率和资源消耗更加敏感。

## 5. Bug 与稳定性

今日报告的Bug数量不多，但涉及严重程度高、影响范围广的问题，好在都已得到迅速响应：

- **`#7563` [Bug: WS/ACP会话中的画布存储回归] (S1 - 工作流阻塞)**
    - **链接**: [Issue #7563](https://github.com/zeroclaw-labs/zeroclaw/issues/7563)
    - **状态**: **已关闭**。由 `#6986` 变更引起，导致 Web UI 的 `/canvas` 页面在WebSocket聊天或ACP会话后变为空白。
    - **修复**: 已通过 PR `#7678` 修复并合并。
- **`#7904` [Bug: 紧凑提示模式下always-inject SKILL.md frontmatter失效] (S2 - 行为退化)**
    - **链接**: [Issue #7904](https://github.com/zeroclaw-labs/zeroclaw/issues/7904)
    - **状态**: **开放，无fix PR**。报告指出在紧凑的技能提示模式下，某些Skill的 `SKILL.md` 文件中用于强制注入的 `always: true` 标记不再生效。此问题影响特定Skill的正常指令注入，需要维护者排查。
- **`#7893` [Bug: 手动触发cron任务结果未持久化] (高风险)**
    - **链接**: [PR #7893](https://github.com/zeroclaw-labs/zeroclaw/pull/7893)
    - **状态**: **开放中（提交了Fix PR）**。该PR正在修复手动通过RPC、网关API或 `cron_run` 工具触发的计划任务，其执行结果未能被正确分类和持久化到历史记录中的问题。
- **`#7901` [Bug: 重复Shell审批循环] (高风险)**
    - **链接**: [PR #7901](https://github.com/zeroclaw-labs/zeroclaw/pull/7901)
    - **状态**: **开放中（提交了Fix PR）**。该PR实现了一个临时的Turn内保护机制，当智能体连续多次请求执行完全相同的Shell命令时，会停止重复请求用户审批，避免了无限循环的风险。

## 6. 功能请求与路线图信号

结合今日更新，以下功能请求信号强烈，可能被纳入近期里程碑（v0.8.x 或 v0.9.0）：

- **明确将纳入 `v0.8.x`**:
    - **`#7822` [WASM插件生命周期钩子订阅]** : 一个新的RFC，提议让WASM插件能够订阅智能体的生命周期事件。结合 `#7314` (v0.8.2 WASM插件计划追踪器)，这表明 **WASM插件生态是 v0.8.x 系列的核心主题之一**。
    - **`#7852` [v0.8.2 技能平台追踪器]** 和 **`#7065` [Agent评估工具]** : 这两个议题显示了项目有意识地构建**技能+插件+评估**的完整平台，旨在让技能与插件成为一个内聚的用户开发体验。

- **可能纳入 `v0.9.0`**:
    - **`#7897` [安全策略与频道配置热更新]** : 此功能讨论在路由网关配置API基础上，实现安全策略和频道配置的“**零宕机热加载**”，无需重启整个守护进程。
    - **`#7432` [v0.9.0 认证、安全、网关追踪器]** : 作为一个大版本的协调追踪器，它汇集了身份认证、权限隔离、安全强化等工作。这将是一个**具有破坏性变更**的里程碑，社区需要留意。

## 7. 用户反馈摘要

从今天的Issue和PR评论中，我们可以提取出以下真实用户痛点和使用场景：

- **痛点：计划任务上下文丢失** (`#6105`)
    - 用户 `radther` 描述了典型的困扰：当智能体执行一个cron任务（如发送提醒）时，**智能体没有记忆它自己刚刚发送的消息**。这导致了循环或上下文脱节，用户期望智能体在同一个对话上下文中能感知到自己的历史行为。
- **痛点：Windows路径和Shell兼容性** (`#7089`, `#7906`)
    - 用户 `NiuBlibing` 发起了关于默认Shell的讨论，指出Shell工具在Windows上的行为存在问题。另一个PR `#7906` 也正在修复路径和环境变量的跨平台问题。这表明 **Windows用户是重要的用户群体，且面临显著的平台兼容性挑战**。
- **使用场景：跨模型响应与通知** (`#6067`, `#7883`)
    - 用户 `mn13` 希望通过使用轻量模型进行快速预检查，**提升性能和降低成本**。用户 `Audacity88` 提出的 `#7883` 则希望存在多模型备用方案时，能通知用户当前响应是由哪个模型生成的。这表明随着用户深入使用，他们开始**对响应速度、成本和结果的可解释性提出更高要求**。

## 8. 待处理积压

以下议题长时间未获得维护者响应或未关闭，建议重点关注：

- **`#2128` [Bug: Cron和心跳仍然发送“NO_REPLY”文本]** (创建于2026-02-27)
    - **链接**: [Issue #2128](https://github.com/zeroclaw-labs/zeroclaw/issues/2128)
    - **严重性**: 中。在约4个月前报告，这是一个持续影响用户体验的噪音问题。修复可能导致cron和心跳传递逻辑的改动，可能需要维护者给予决策。
- **`#6105` [Bug: Agent没有cron任务执行的上下文]** (创建于2026-04-25)
    - **链接**: [Issue #6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105)
    - **严重性**: 高。这是一个已接受的、影响智能体核心行为的严重Bug。它被列为 `#6954` (RFC: 通过编排器路由计划任务) 的关联Bug。维护者的方向是通过重构调度管道来根治这个问题，但在新方案实施前，社区可能期待一个临时补丁。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*