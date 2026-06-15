# OpenClaw 生态日报 2026-06-15

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-15 00:30 UTC

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

# OpenClaw 项目动态日报 | 2026-06-15

## 今日速览

项目今日维持高活跃度。过去24小时内，Issues 与 PR 更新均达到500条，社区参与度极高。新版本 `v2026.6.8-beta.1` 已发布，重点增强 Telegram 和 WhatsApp 渠道的稳定性与功能。目前，待合并的 PR 有457条，堆积情况严重，可能影响核心功能修复的上线速度。同时，`P1` 级别的高危 Bug 数量较多，主要集中在**消息丢失、会话状态异常、认证提供者兼容性**等领域，项目健康度受到一定挑战。

## 版本发布

### v2026.6.8-beta.1
- **发布时间**: 2026-06-15
- **关键更新**:
    - **Telegram 渠道增强**: 现在能发送包含表格、列表、可展开引用块的结构化富文本。改进了 CLI 后端的交付能力，迁移了旧的草稿模式，并增强了富媒体边界的安全性。
    - **WhatsApp 渠道增强**: 改进了消息投递的健壮性。
- **破坏性变更**: 无明确提及。
- **迁移注意**: 建议用户关注 Telegram 和 WhatsApp 渠道的行为变化，如遇到富文本渲染或消息丢失问题，应立即回滚或反馈。

## 项目进展

今日合并/关闭的重要 PR 主要集中在文档和小型修复上，大型功能或修复 PR 仍处于开放审查状态。

- **文档与构建流程优化**:
    - **[PR #92252] (已合并)**: 优化了 ClawHub 文档同步流程，自动从 `package.json` 插补 npm 发行标签。这是一个维护性改进，提升了文档的准确性。
- **核心功能修复进展**:
    - **[PR #92813] (开放中)**: 一项重要的安全修复，拒绝在无法设置 `chmod` 权限的文件系统（如 Azure Files）上创建代理数据库，以防止凭证泄露。目前等待作者响应。
    - **[PR #93076] (开放中)**: 修复了 WhatsApp Web 在终端断连后丢失认证信息的问题，确保凭证可持久化。已准备好等待维护者审查。
    - **[PR #93097] (开放中)**: 修复了 `qmd-manager` 错误地将环境变量泄漏给子进程，导致 `mcporter` 集成失败的问题。这是一个针对 Issue #79847 的具体修复。

**整体评价**: 今日项目在文档维护和特定 Bug 修复上有所推进，但大量开放 PR 的审查进度缓慢，可能成为项目发展的瓶颈。

## 社区热点

今日讨论热度集中在与 **会话状态** 和 **消息丢失** 相关的 Issues 上。

1.  **#80520: [OPEN] [P1] Telegram messages silently dropped, no sendMessage logged**
    - **评论数**: 11 | **链接**: [Issue #80520](https://github.com/openclaw/openclaw/issues/80520)
    - **分析**: 用户报告 Telegram 消息静默丢失，网关无任何 `sendMessage` API 调用日志。此问题为 `P1` 级别，直接影响核心通讯功能。用户提供了详细的重现步骤，表明问题复现性高。由于缺乏日志，调试难度极大，社区对此高度关注。目前无关联修复 PR。

2.  **#80380: [CLOSED] [P1] [Feature]: updating openclaw to use gemini-3.1-flash-lite instead of gemini-3.1-flash-lite-preview**
    - **评论数**: 14 | **链接**: [Issue #80380](https://github.com/openclaw/openclaw/issues/80380)
    - **分析**: 用户要求将默认模型从预览版 `gemini-3.1-flash-lite-preview` 切换到已正式发布的 `gemini-3.1-flash-lite`。此诉求获得了社区广泛认可并获得4个 👍。该问题已关闭，表明项目团队已迅速接纳社区反馈并完成了更新。

3.  **#79077: [OPEN] [P2] Support for Telegram bot-to-bot and guest-bot modes**
    - **评论数**: 8 | **链接**: [Issue #79077](https://github.com/openclaw/openclaw/issues/79077)
    - **分析**: 这是一个功能请求，要求支持 Telegram 于5月7日发布的新Bot特性。评论和👍数均较高，反映出社区对紧跟平台新功能、拓展使用场景的强烈渴望。该问题被标记为“stale”且缺乏维护者决策，社区对此感到焦急。

**核心社区诉求**: 用户对 **消息可靠性** 的要求极高，任何形式的消息丢失或延迟都会引发大量讨论。同时，社区对集成最新的第三方平台功能（如 Telegram 新API）抱有高度期待。

## Bug 与稳定性

以下为今日报告的严重 Bug，按严重程度排列：

- **P1 - 严重**
    - **#90886 (已关闭)**: `gateway` 在缺少凭据的提供者配置下启动时挂起。这是一个 `v2026.4.8` 到 `v2026.4.26` 的回归问题，现已修复。
    - **#83419 (开放中)**: 群聊上下文注入产生连续的 `user-role` 消息，破坏 Anthropic API 的兼容性。*(无关联修复PR)*
    - **#83366 (开放中)**: Gateway 事件循环饥饿导致 Discord/会话超时。*(无关联修复PR)*
    - **#82070 (开放中)**: 2026.5.12 更新后，CLI 命令出现约14秒的冷启动回归。*(无关联修复PR)*

- **P2 - 重要**
    - **#83425 (开放中)**: xAI OAuth 流程因 `redirect_uri` 不匹配而失败。*(无关联修复PR)*
    - **#83736 (开放中)**: Gateway 在从节点升级时，因节点版本轻微不一致而硬性拒绝连接。*(无关联修复PR)*
    - **#82662 (开放中)**: 隔离的 cron agentTurn 在 LLM 调用前因“setup timed out”而失败。*(无关联修复PR)*

## 功能请求与路线图信号

- **高优先级 & 已有关联 PR**:
    - **会话状态 / 数据库 API**: `#79902`, `#79903`, `#79904`, `#79905` 等由 `100yenadmin` 提出的一系列增强 SQLite 运行时能力的 Feature Request 持续活跃。尽管它们尚无明确的上线时间，但 `PR #90412` (会话缓存热读取) 和 `PR #92727` (内存索引重建修复) 的提出，表明项目正在逐步增强运行时基础能力。
    - **技能安装钩子**: `#80213` (Skill author-defined setup hook) 请求增加技能安装后的自定义脚本钩子，旨在解决复杂技能安装的最后一公里问题。目前无关联PR，但 `PR #90723` (Gmail Pub/Sub 钩子) 的提出，说明社区和项目对插件/技能钩子系统有持续投入。

- **低优先级 / 待决策**:
    - **i18n 国际化**: `#79458`, `#79034` 等关于中文等非英语用户的 UI/命令描述国际化请求，虽为 P2/P3，但反映了社区对全球化体验的重视。
    - **预路由消息拦截**: `#81061` (before_route_inbound_message) 请求增加一个前置路由钩子，用于实现频道桥接等高级功能，社区呼声较高 (3个👍)。

**路线图信号**: 项目正在围绕 **“数据库优先的运行时 (database-first runtime)”** 进行深度重构。大量与之相关的会话、转录、内存相关的 Feature Request 和 PR 表明，这是下一阶段的重中之重。同时，**插件/钩子系统** 的完善也是持续投入的方向。

## 用户反馈摘要

- **关键词：消息丢失与可靠性**
    - “Telegram messages are silently dropped. The gateway appears to receive and process the message, but no sendMessage API call is logged, and the user never receives a reply.” (Issue #80520) —— 这是用户的核心痛点，缺乏错误日志使得排查极其困难，严重破坏了信任感。
    - “A Discord channel routed to a non-main agent remains marked active/processing after the run completes... producing a visible lag.” (Issue #81978) —— 即使任务完成，会话状态不正确导致交互延迟，对用户体验影响明显。

- **关键词：回归与升级恐惧**
    - “After updating OpenClaw, running `openclaw doctor --fix` enters a broken loop where no fixes can persist...” (Issue #77802) —— 用户对升级后出现回归问题感到沮丧，尤其是修复工具本身也存在 Bug，形成了“修复失败”的死循环。
    - “All CLI commands are taking ~14 seconds to complete after updating from 2026.5.7 → 2026.5.12 on Linux.” (Issue #82070) —— 即使是简单的 `openclaw health` 命令也需要14秒，严重影响了日常操作效率。

- **关键词：配置与扩展性**
    - “Skill author-defined setup hook (run skill-supplied script on install/update)” (Issue #80213) —— 高级用户期望拥有更灵活的技能安装流程，当前的预定义安装类型无法满足复杂场景。
    - “I have two accounts with the same AI provider... To use both, I defined a custom provider... but it still broken.” (Issue #82020) —— 用户在多账户、自定义供应商配置上遇到困难，期待更好的灵活性和兼容性。

## 待处理积压

以下为长期未得到有效响应或解决的重要 Issue/PR，提醒维护者关注：

1.  **[Issue #77802] `doctor --fix` 失败死循环**: 一个P2级别的严重 Bug，自5月初提交以来，尽管标记了多个标签，但至今无任何进展。这意味着用户的配置修复工具本身无法工作。
    - *链接*: [Issue #77802](https://github.com/openclaw/openclaw/issues/77802)
2.  **[Issue #79077] 支持 Telegram 新Bot特性**: 这是一个结合了新平台特性和核心功能支持的 Feature Request，获得社区高赞。自5月初提交后，一直处于“等待维护者决策”状态，可能导致社区对新版Telegram的支持感到不满。
    - *链接*: [Issue #79077](https://github.com/openclaw/openclaw/issues/79077)
3.  **[Issue #22060] 间接提示注入**: 一个自2月份就提出的安全漏洞，至今仍为“未评估”。涉及URL预览元数据的注入风险，对于一个AI Agent项目而言，这是需要优先处理的安全问题。
    - *链接*: [Issue #22060](https://github.com/openclaw/openclaw/issues/22060)

---

## 横向生态对比

好的，作为您的资深技术分析师，以下是根据您提供的各项目动态数据生成的横向对比分析报告。

---

### 个人 AI 智能体开源生态横向对比分析报告 (2026-06-15)

#### 1. 生态全景

当前，个人AI智能体/自主智能体开源生态呈现出 **“核心项目高速迭代、安全与稳定性问题集中爆发、社区诉求趋于精细”** 的态势。以 OpenClaw 和 ZeroClaw 为代表的成熟项目步入高并发、高挑战期，每日数百条Issues/PRs的规模凸显其在“广度”（适配更多模型与平台）和“深度”（重构核心运行时）上的双重用力。与此同时，多个项目不约而同地收到了来自社区的安全审计反馈（如IronClaw、NanoClaw），揭示了“用户审批”作为最后一道防线的脆弱性，安全正从“附加特性”演变为“核心设计约束”。社区焦点也从基础的“能否运行”，转向“能否可靠运行”、“是否透明可控”的高阶需求，如消息零丢包、预算透明、环境兼容性等。

#### 2. 各项目活跃度对比

| 项目 | 今日新 Issues | 今日新 PRs / 合并数 | 最新发布版本 | 健康度评估 | 核心特征 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500+ | 500+ | v2026.6.8-beta.1 | **⚠️ 挑战期** | 高活跃，但大量PR积压 (457个)，P1 Bug频发，消息丢失是核心痛点。 |
| **NanoBot** | 1 | 33 / 16 | 无 | **✅ 健康** | 专注于稳定性修复与边缘情况，合并效率高，API兼容性存短板。 |
| **Hermes Agent** | 50+ | 50+ | 无 | **⚠️ 挑战期** | 功能迭代快，但P1/P2级关键Bug频发，尤其是Matrix协议与安全策略绕过。 |
| **PicoClaw** | 5 | 8 / 5 | v0.2.9-nightly | **✅ 健康** | 稳定修复为主，积极向插件化和远程交互能力演进。 |
| **NanoClaw** | 7 | 11 / 6 | 无 | **⚠️ 挑战期** | 架构大推进（多提供商支持），但伴随3个严重安全漏洞报告，安全信任面临考验。 |
| **IronClaw** | 32 | 43 | 无 | **⚠️ 挑战期** | Reborn架构推进中，但被社区安全研究员系统性报告6个`shell`工具权限绕过漏洞。 |
| **LobsterAI** | 2 | 0 | 无 | **✅ 健康** | 活跃度较低，聚焦于本地化和稳定性修复，有多个完善会话体验的PR在排队。 |
| **CoPaw** | 8 | 7 / 0 | v1.1.11.post2 | **⚠️ 停滞期** | 社区贡献积极，但无代码合并，新版本带来的Bug（如本地模型不显示）亟待修复。 |
| **ZeroClaw** | 40+ | 50+ | 无 | **⚠️ 挑战期** | 高产出的功能合并浪潮，但50个待合并PR形成积压，多通道集成和Bug修复并行。 |
| **Moltis** | 1 | 3 / 0 | 无 | **⚠️ 沉寂期** | 活动较少，社区动态主要围绕单个技术改进提案和稳定性修复PR。 |

#### 3. OpenClaw 在生态中的定位

- **优势：** OpenClaw 是目前生态中 **最具规模和影响力** 的旗舰项目。其每日500+的Issues/PRs数量级远超其他项目，表明其社区规模最大、开发者参与度最高。`v2026.6.8-beta.1` 版本对 Telegram 和 WhatsApp 渠道的深度增强，体现了其在**成熟渠道支持**上的领先地位。其强大的社区驱动力使其能快速响应和采纳社区反馈（如快速切换Gemini模型版本）。
- **技术路线差异：** OpenClaw 当前的核心路线是 **“数据库优先的运行时 (database-first runtime)”重构**，旨在构建一个更健壮、可持久化的底层系统，这与 NanoBot 或 Hermes Agent 等其他项目更多在应用层做优化形成对比。这既是其未来稳定性的基础，也是当前版本迭代的瓶颈。
- **社区规模对比：** 从数据密度看，OpenClaw 的社区可能是 ZeroClaw 的10倍以上，是 NanoBot/Hermes Agent 项目的50倍以上。这种规模既是资源，也是负担。其面临的**PR积压严重**（457个）和 **P1级Bug数量多** 的问题，是其他中小体量项目（如PicoClaw、LobsterAI）无需面对的独特挑战。

#### 4. 共同关注的技术方向

多个项目不约而同地涌现出相同的演进方向，表明这在行业内已成为共识性需求：

- **多提供商/模型生态：** **NanoClaw** 新增Codex提供商，**ZeroClaw** 排队接入 Arcee AI、Lambda 等多家提供商，**CoPaw** 用户呼吁支持 Kimi-for-coding。这表明用户厌倦模型锁定，追求“一个客户端，任意模型”的灵活性。
- **会话/消息可靠性：** **OpenClaw** (#80520 消息静默丢失)，**Hermes Agent** (#46303 上下文污染)，**NanoClaw** (#2751 预算耗尽后静默失败) 均被此类核心Bug困扰。用户对**静默失败**零容忍，这是从“玩具”走向“生产工具”的刚性要求。
- **用户审批/安全模型：** **IronClaw** (6个`shell`绕过报告)和**NanoClaw** (3个安全漏洞) 同时遭遇社区安全审计。核心矛盾在于：当前的“黑白名单+用户点确认”模式过于粗放。项目正被迫在**用户体验（频繁审批）** 与 **安全（容易被绕过）** 之间寻找更精细的平衡点，如更智能的上下文感知审批。
- **扩展性与插件生态：** **PicoClaw** 为树外通道添加配置钩子 (#3120)，**ZeroClaw** 转向 wasmtime 插件系统 (#7429)，这意味着所有主流项目都在为**第三方开发者**构建生态基础设施，降低贡献门槛。

#### 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | 旗舰级、全功能平台 | 重度个人/团队用户、寻求一站式解决方案 | 单体应用，重度依赖社区生态，正进行数据库优先重构 |
| **NanoBot** | 轻量、纯净、API 兼容 | 开发者、需要集成到自身系统的用户 | 克制、模块化，高度聚焦于Chat API的兼容性与工具集 |
| **Hermes Agent** | 激进创新、Agent能力前沿 | 探索型开发者、研究者和发烧友 | 快速迭代，支持多种形态（CLI, TUI, Desktop），但对稳定性要求稍低 |
| **PicoClaw** | 嵌入式/资源受限环境 | 物联网、边缘设备开发者、极客 | 高度模块化、插件化，支持远程代理模式，架构灵活 |
| **NanoClaw** | 以代理为中心的代码助手 | AI 辅助编程领域的开发者 | 优先支持 Codex 等编程专用模型，配合强大的 MCP 工具链 |
| **IronClaw** | 企业级安全与审批流 | 企业用户、对安全和流程有严格要求 | 强调“门控路由（Gate）”，有复杂的审批/认证/授权系统 |
| **ZeroClaw** | 极致通信渠道集成 | 需要跨平台自动化、多渠道通信的用户 | 连接器（Connector）优先，SMS/IM/Email 等通道集成最广，模块化 |
| **CoPaw** | 桌面自动化与本地优先 | 桌面用户、注重本地模型隐私的用户 | 强依赖本地模型/插件，提供“宠物”等拟物化交互，UI更个人化 |

#### 6. 社区热度与成熟度

- **快速迭代与功能拓展期：** **ZeroClaw**、**NanoClaw**、**Hermes Agent** 处于此阶段。特征是功能PR多、新概念多（远程Agent、WASM插件、多提供商），但相应地，Bug和架构性问题也在快速暴露。社区充满活力，但稳定性是成长的烦恼。
- **核心质量巩固期：** **OpenClaw** 典型地处于此阶段。规模庞大，主要精力从“造新功能”转向“修好旧房子”，如数据库重构、渠道稳定性。NanoBot 也在通过大量小修小补巩固其API的可靠性。
- **相对沉寂或重定义期：** **Moltis**、**LobsterAI** 活动较少，主要依赖自动化的依赖更新和个别贡献者修复。**CoPaw** 则因缺乏版本节奏把控，在发布后陷入停滞，急需一次快速的Hotfix来稳定军心。**PicoClaw** 在稳定性和新特性间取得了较好的平衡，处于健康增长阶段。

#### 7. 值得关注的趋势信号

1.  **“可信执行”成为核心竞争力：** 用户不再仅仅满足于AI智能体能“做什么”（功能），更关注“如何做”以及“是否安全”。IronClaw 和 NanoClaw 的集中安全报告事件表明，在Agent可以读写文件、执行Shell命令、访问网络的今天，**透明的审批流、沙箱隔离、细颗粒度的权限控制** 不再是“加分项”，而是新用户愿意尝试、长期用户愿意信任的**基本前提**。开发者应审视自己的Agent，其核心操作是否可以绕过用户监督？权限模型是否过于粗放？

2.  **“静默失败”是信任的毒药：** 无论是OpenClaw的消息丢失，还是NanoClaw的预算耗尽后无响应，用户对“不知道发生了什么”的恐惧远大于“知道发生了什么但结果不好”。一个优秀的Agent不仅要会工作，更要会清晰地**汇报状态与问题**（失败原因、token使用明细等）。透明度和可观测性将直接影响用户留存。

3.  **从“模型适配”到“模型编排”：** 多个项目（NanoClaw, ZeroClaw, CoPaw）都在支持更多模型提供商，但更深层的趋势是**资源编排**。例如NanoClaw让子Agent使用不同模型预设（PR #4291），这预示着未来Agent将不再绑定单一模型，而是根据任务需要（成本、能力、速度）动态选择和编排不同的模型，实现“多模型协作”的混合架构。这是降低使用成本和提升复杂任务性能的关键。

4.  **“零配置”是下沉市场的入场券：** ZeroClaw 社区对Docker完整镜像的诉求（#3642），以及CoPaw的镜像问题，都表明大量用户并非技术专家。任何需要用户手动编辑YAML、理解端口映射、处理OAuth流程的步骤，都会构成采用障碍。一个成功的开源AI助手项目，必须**为默认配置做最佳性能，并产出“开箱即用”的部署工件**，这对扩大非开发者用户群至关重要。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为 NanoBot 项目的 AI 智能体与个人 AI 助手领域开源项目分析师，根据您提供的 GitHub 数据，我为您生成了 2026-06-15 的项目动态日报。

---

# NanoBot 项目动态日报 | 2026-06-15

## 1. 今日速览

今日 NanoBot 项目社区活跃度较高，尤其在代码贡献和 Bug 修复方面表现突出。过去24小时内，共有32个 PR 被处理，其中16个已合并/关闭，修复了包括 Anthropic 新模型兼容性、文件分页和媒体附件验证等多个关键问题。Issue 方面，新报告的“token 用量始终为零”的 Bug (#4309) 值得关注，可能会影响依赖精确用量统计的用户。整体来看，项目处于健康、快速的迭代周期中，重点在于稳定性和边缘情况修复。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日项目进展显著，重点在于修复核心逻辑 Bug、提升稳定性以及增强 WebUI 和文档体验。

- **核心功能与稳定性修复**:
    - `[CLOSED]` **修复 Telegram 消息分段**：`PR #4340` 解决了 `split_message` 函数在切分长消息时可能破坏代码块 (` ``` `) 渲染的问题，通过检测活动代码块并在分段边界处重新闭合/开启，确保每段消息独立渲染。这直接修复了 Issue #4250。
    - `[CLOSED]` **拒绝无效的文件分页限制**：`PR #4311` 增加了对 `read_file` 和 `list_dir` 工具调用中非正数的 `limit` 和 `max_entries` 参数的校验，防止因错误调用导致异常。
    - `[CLOSED]` **拒绝格式错误的媒体附件**：`PR #4312` 为 `message` 工具的 `media` 参数增加了运行时验证，拒绝字符串、非字符串、空附件项，解决了单个字符串被错误拆分为多个字符的问题。
    - `[CLOSED]` **解决 Anthropic 提供商兼容问题**：`PR #4333` (关联 Issue) 指出，Anthropic 提供商仅对 `opus-4-7` 模型屏蔽了已废弃的 `temperature` 参数，导致使用 `opus-4-8` 和 `Fable` 模型时，API 返回 400 错误。该问题已在 Issue 层面被关闭，预计很快会有对应修复 PR。
- **WebUI 与文档增强**:
    - `[CLOSED]` **改进 WebUI 移动端响应式**：`PR #4339` 对移动端界面进行了多项调整，包括内边距、侧边栏宽度、组件换行及热力图紧凑显示，显著提升了移动端浏览体验。
    - `[CLOSED]` **本地化更新检查文本**：`PR #4331` 为 WebUI 设置中的“关于/更新检查”页面增加了完整的国际化支持。
    - `[CLOSED]` **添加合作伙伴链接**：`PR #4295` 和 `PR #4338` 在 README 和配置文档中添加了 Kimi 和 MiniMax 等合作伙伴的链接和横幅，增强了项目生态的可见性。
- **架构与配置重构**:
    - `[OPEN]` **重构配置与 Agent 循环边界**：`PR #4344` 正在进行中，计划将工具配置模型移入无副作用的模块，并提取出更精简的 Agent 循环协调器，以优化代码架构。
- **新通道支持**:
    - `[CLOSED]` **Matrix 协议通道集成**：`PR #1056` 经过长期开发和审核，今日正式合并，为 NanoBot 添加了通过 Matrix 协议进行通信的能力，支持 DM 和房间对话，扩展了项目的渠道支持。

## 4. 社区热点

今日最受关注的议题围绕**API 兼容性与数据准确性**。

- **热点 Issue**: `#4309` - **[bug] nanobot serve: /v1/chat/completions always returns zero usage tokens**
    - **链接**: `HKUDS/nanobot Issue #4309`
    - **分析**: 这是今日唯一新开的 Issue，直指 OpenAI 兼容 API 的核心问题：`/v1/chat/completions` 接口返回的 `usage` 字段（`prompt_tokens`, `completion_tokens`, `total_tokens`）始终为 0。对于依赖此数据进行成本核算和监控的用户来说，这是一个严重障碍。该 Issue 已获得1条评论，表明社区对此功能有刚性需求。虽然报告者是昨日创建，但讨论了热点问题，反映了社区对 API 兼容性质量的高度关注。

    > **分析师观点**: 此问题是 NanoBot 作为 OpenAI 兼容服务提供者的一个明显短板。所有依赖 OpenAI 客户端库进行用量统计的应用（如 LangSmith、Helicone）都会受到干扰。项目组应优先为其分配资源。

## 5. Bug 与稳定性

今日报告的 Bug 和修复主要集中在以下方面，按严重程度排列：

- **严重**:
    - **`/v1/chat/completions` 返回零用量** (`#4309`): 直接破坏 API 兼容性，影响成本监控。目前**无对应的修复 PR**。
    - **Anthropic `opus-4-8` / `Fable` 模型请求失败** (`#4333`, 已关闭): 因发送已废弃的 `temperature` 参数导致 400 错误。该 Issue 已记录并关闭，但代码层面修复**尚待对应的 PR**。
- **中等**:
    - **Telegram 消息分段破坏代码块** (`#4250`, 已关闭): 已通过 `PR #4340` 修复。
    - **注入无效 payload 导致空白用户消息** (`#4337`): 对应 PR `#4337` 已提交，处于待合并状态。
- **轻微**:
    - **未定义 `botIcon` 时首次启动显示错误图标** (`#4262`, 已关闭): 已通过 `botIcon` 的默认逻辑修复。
    - **文件工具分页参数为非正数** (`#4311`, 已关闭): 已通过 `PR #4311` 修复。
    - **媒体附件格式错误** (`#4312`, 已关闭): 已通过 `PR #4312` 修复。
    - **`run_cli_app` 参数格式错误** (`#4336`, 已关闭): 已通过 `PR #4336` 修复。

## 6. 功能请求与路线图信号

- **工具组可配置性增强**:
    - **内置文件系统工具开关** (`PR #4138`, 已关闭): 新增 `tools.file.enable` 配置项，允许管理员像控制 `exec` 和 `web` 工具组一样，开关内置的文件系统工具。这对于希望模型仅通过特定 MCP 服务器与文件系统交互的部署场景至关重要。此功能已合并，很可能被纳入下一版本。
- **子代理模型配置**:
    - **子代理使用可配置模型预设** (`PR #4291`, 待合并): 提议允许用户通过配置 `spawn` 预设，为子代理指定不同于父代理的模型。这是一个增强 Agent 系统灵活性的重要特性，为未来的“专家模型路由”奠定了基础。由于其标签包含 `[enhancement, question]`，可能仍在讨论细节，但路线图信号明确。
- **自动化管理**:
    - **WebUI 自动化管理视图** (`PR #4330`, 待合并): 提议在 WebUI 中添加一个可视化界面，用于列出、筛选、运行、暂停和删除用户自动化任务。这是提升产品易用性的重要一步，让用户无需手动编辑配置文件即可管理自动化流程。

## 7. 用户反馈摘要

从今日的 Issues 和 PR 中，可以提炼出以下用户关注点：

- **痛点**:
    - **API 可靠性**：用户 `alx1379` 报告 `usage` 始终为 0 (`#4309`)，这是一个数据准确性问题，影响了用户对 API 的信任。
    - **提供商兼容性**：用户 `Ulef1005` 反馈在升级到 Anthropic 最新模型 (`opus-4-8`, `Fable`) 时遇到 400 错误 (`#4333`)，说明用户期望项目能紧跟上游 API 的变化。
    - **消息渲染**：用户 `agbocsardi` 报告 Telegram 上代码块被错误分段 (`#4250`)，影响了技术用户的使用体验。
- **满意/价值点**:
    - **配置灵活性**：`PR #4138` 和 `PR #4291` 得到了社区的积极响应和贡献，表明用户高度赞赏细粒度的配置控制和可定制的 Agent 行为。
    - **移动端体验**：`PR #4339` “Improve WebUI mobile responsiveness” 的提交是对用户移动端使用体验的直接回应，体现了项目对全场景覆盖的重视。

## 8. 待处理积压

- **`#4309` - `nanobot serve` 返回零 token 用量**
    - **链接**: `HKUDS/nanobot Issue #4309`
    - **状态**: 新开，暂无 PR。
    - **提醒**: 此问题影响项目核心 API 的可用性和信任度。建议维护者尽快指派人员分析 `agent loop` 与 `serve` 模块之间的 token 计数流程，定位问题。

- **`#1056` - Matrix 通道集成 (已合并)**
    - **状态**: 已于今日合并。
    - **提醒**: 此大型功能 PR (已持续近4个月) 刚被合并。维护者需关注其后续的迭代和维护，确保新通道的稳定性和与其他功能的兼容性，并考虑补充相关文档。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是基于提供的数据生成的 Hermes Agent 项目动态日报。

---

# Hermes Agent 项目动态日报 | 2026-06-15

## 1. 今日速览

Hermes Agent 项目维护活跃度极高。过去24小时内，社区提交了超过50个 Issue 和50个 PR，虽然无新版本发布，但在 Bug 修复、功能开发和新平台适配方面均有显著进展。**P1/P2级别的关键 Bug 频发**，主要集中在 Matrix 网关的 E2EE 问题、多会话的上下文污染以及安全策略绕过等方面，反映出项目在功能迭代加速的同时，稳定性与安全性面临挑战。社区讨论焦点集中于用户隐私（Web 搜索数据路由）和用户体验（桌面应用缺陷）。

## 2. 版本发布

*无新版本发布。*

## 3. 项目进展

今日合并/关闭了多项高价值的 PR，修复了多个影响广泛的问题，并引入了新功能。

- **核心稳定性提升**：
    - PR #36856 [CLOSED] 修复了跨文件系统符号链接时 `atomic_replace` 函数抛出的 `EXDEV` 错误，该函数被配置写入等关键路径使用，解决了特定部署场景下的硬故障。
    - PR #40529 [CLOSED] 修复了桌面应用（Desktop App）的模型选择器无法展示自定义 OpenAI 兼容提供者模型的 Bug，打通了 CLI 与 GUI 的配置一致性。
    - PR #44457 [CLOSED] 修复了当并行 Web 搜索（`web-parallel`）被显式禁用时，仍然执行后端回滚扫描的性能问题。

- **新功能与特性**：
    - PR #46212 [CLOSED] 为 TUI 增加了 macOS 原生通知支持，提升了用户体验。
    - PR #38846 [OPEN] 正在持续推进对15种语言的国际化支持，其翻译库已达861个键，远超原生的345个键。

- **CI/CD 与测试**：
    - Issue #36515 [CLOSED] 关闭了针对 `plugins/web/parallel/provider.py` 模块测试覆盖率的改进任务。

## 4. 社区热点

- **#45058 [CLOSED] - Web 搜索流量被悄然路由至 Parallel.ai** (评论: 7, 👍: 10)
    - **链接**: [Issue #45058](https://github.com/NousResearch/hermes-agent/issues/45058)
    - **分析与诉求**: 这是今日社区反应最强烈的问题。用户发现自某个提交后，当用户未配置任何后端时，`web_search` 和 `web_extract` 工具会**默认将流量悄然路由至第三方平台 Parallel.ai**。这引发了严重的**隐私和数据安全关切**，用户认为这是一种“不透明且具有侵略性”的默认行为。社区核心诉求是：**必须在用户知情并主动选择的情况下，才能将数据发送至第三方服务。**

- **#43083 [OPEN] - 密码屏蔽导致模型工具调用失败** (评论: 7)
    - **链接**: [Issue #43083](https://github.com/NousResearch/hermes-agent/issues/43083)
    - **分析与诉求**: 一个经典的自我指涉 Bug。代理在工具调用参数中屏蔽密码（`***`），但模型在回顾对话历史时，读到的是被屏蔽的密码，导致下一次工具调用失败。这揭示了**代理在理解自身修改过的内容方面存在根本性缺陷**，用户迫切需要更智能的对话历史管理方案，而非简单的字符串替换。

## 5. Bug 与稳定性

今日报告的 Bug 级别高、影响面广，其中**两个 P1 级别的 Bug 都与 Matrix 通信协议相关**，且均已有对应的 fix PR，显示社区响应迅速。

| 严重程度 | Issue # | 描述 | 状态 |
| :--- | :--- | :--- | :--- |
| **P1** | [#46310](https://github.com/NousResearch/hermes-agent/issues/46310) | **Matrix 网关媒体发送**：每条消息都重新建立 E2EE 连接，耗尽一次性密钥并静默丢包。 | **已有 Fix PR** ([#46365](https://github.com/NousResearch/hermes-agent/pull/46365)) |
| **P1** | [#46142](https://github.com/NousResearch/hermes-agent/issues/46142) | **Matrix 网关消息分发中断**：`mautrix` 库迁移后，在特定服务端（Tuwunel）上无法分发消息。 | 待修复 |
| **P2** | [#46303](https://github.com/NousResearch/hermes-agent/issues/46303) | **并发会话上下文污染**：多会话共享内存注入和 Git 工作区，导致严重的数据交叉污染。 | 待修复 |
| **P1** | [#46171](https://github.com/NousResearch/hermes-agent/issues/46171) | **安全漏洞**：内存提供者工具（`fact_store`）可绕过 `disabled_toolsets` 过滤，造成安全策略绕过。 | 待修复 |
| **P2** | [#46332](https://github.com/NousResearch/hermes-agent/issues/46332) | **Windows 平台 Cron 任务故障**：`no_agent: true` 的脚本因错误选择了 WSL 的 Bash 且路径被转义而失败。 | **已有 Fix PR** ([#46364](https://github.com/NousResearch/hermes-agent/pull/46364)) |

## 6. 功能请求与路线图信号

- **短期/强相关功能**：
    - [客户端工具优化] PR #46365 `fix(send_message): reuse live gateway adapter for Matrix media` 直接解决了高优 Bug，预计会快速合并。
    - [桌面应用改进] Issue #44140（自动滚动、UI 重叠修复）和 Issue #45865（UI 内解除账户绑定）都是用户高频反馈的桌面端痛点，可能在下一个补丁版本中得到解决。
    - [配置便利性] Issue #46192 建议在 CLI 配置时提供 `Keep` 选项来保留当前的 `base_url`，该建议简单有效，很可能被采纳。

- **潜在的中长期路线图信号**：
    - **内存系统专业化**: Issue #46253 寻求将 **GBrain**（一种基于 Postgres 和向量搜索的语义记忆后端）作为内存提供者插件集成。同时，Issue #31584 提议将内存上下文视为“背景信息”而非“用户权威内容”，配合今日报告的上下文污染 Bug，**表明项目的记忆子系统正在成为新的核心矛盾点和优化方向**。
    - **多会话管理**: Issue #44757 提出 `sessions merge` 命令来合并会话记录，这可能是 Hermes 正在向更“会话式”、“持久化”工作流演进的一个信号。

## 7. 用户反馈摘要

- **积极反馈**：
    - 社区对**桌面应用**和 **TUI** 的改进热情高涨。PR #43920（增加10个深色主题）和 PR #46212（macOS 通知）获得了积极关注。
    - 用户对**技能系统（Skills）**的扩展表示欢迎，如新增的 `gamefi-research` 技能和 `streaming-content` 技能，展示了项目生态的拓展。

- **消极反馈与痛点**：
    - **“意料之外的默认行为”是最大负面来源**：#45058 中流量被悄然路由至第三方服务的行为让用户感到被背叛。
    - **桌面应用体验不佳**：用户详细描述了自动滚动失效、UI 元素重叠（#44140）、模型选择器无法加载自定义模型（#40480）等多个体验问题。
    - **Windows 平台支持滞后**：#46332 报告的 Cron 任务在 Windows 下的问题，再次凸显了非 Linux 平台的使用障碍。

## 8. 待处理积压

- **长期未响应的核心方向 Issue**：
    - **[Feature]: 持久化管理会话** ([#22027](https://github.com/NousResearch/hermes-agent/issues/22027)): 自2026-05-08 提出，希望关闭网页聊天标签页后任务能继续运行。这涉及项目底层的服务化架构，讨论热度虽不高（1条评论），但却是从“个人助手”走向“后台自动化代理”的关键能力。需要维护者评估优先级并给出明确回应。
    - **[Feature]: Gateway 事件幂等性与过时响应抑制** ([#16108](https://github.com/NousResearch/hermes-agent/issues/16108)): 自 2026-04-26 提出，涉及网关层面的核心可靠性保障。考虑到近期 Matrix 网关的频繁 Bug，该 Issue 的价值应被重新评估，可能成为架构优化的重点。

- **待关注的 PR**:
    - PR #39779 `fix(matrix): device_id fallback prevents E2EE init failure` 自 2026-06-05 提交，对修复 Matrix 新账户 E2EE 初始化失败至关重要。鉴于今日多个 Matrix 相关 Bug 出现，该 PR 应被优先审查和合并。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是根据 PicoClaw 项目 2026-06-15 的 GitHub 数据生成的日报。

---

# PicoClaw 项目动态日报 | 2026-06-15

## 1. 今日速览
今日项目活跃度较高，共收到5个新议题和8个拉取请求。版本发布方面，有一个新的夜间构建版本 `v0.2.9-nightly.20260614` 发布。社区工作主要集中在 bug 修复和框架扩展性上，包括为第三方通道添加配置挂钩、修复多个稳定性问题（如 TTS、文件系统）以及为代理命令添加远程模式。总体来看，项目在保持稳定的同时，正积极向更灵活的插件化和远程交互能力演进。

## 2. 版本发布
- **标题**: `nightly: Nightly Build`
- **版本**: `v0.2.9-nightly.20260614.cf67dd38`
- **链接**: [查看发布页](https://github.com/sipeed/picoclaw/releases/tag/v0.2.9-nightly.20260614.cf67dd38)
- **更新日志**: [compare/v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)
- **说明**: 这是最新的自动化夜间构建版本，可能包含未经过全面测试的新功能和修复。请谨慎使用于生产环境。

## 3. 项目进展
今日有5个 PR 被合并或关闭，标志着项目在多个方面取得进展：

- **核心稳定性提升**: PR #2904 合并，修复了 `agent` 循环中的 `reload` 问题和 panic 稳定性，通过同步化流程消除了潜在的 goroutine 泄露和 panic 误报风险。
- **修复与代码质量优化**: 来自 `chengzhichao-xydt` 的三连发 PR（#3124, #3123, #3122）专注于修复 bug 并改进代码健壮性，特别是处理了在 TTS 错误响应、目录文件描述符和文件追加写入等边缘场景下的错误处理。
- **结构化日志统一**: PR #3121 完成了 `openai_compat` 提供程序的日志迁移，将剩余的 `log.Printf` 替换为项目标准的结构化日志，提升了可观测性和代码整洁度。

## 4. 社区热点
今日讨论热度相对分散，几个被标记为 `[stale]` 的议题仍有近期更新。

- **#2978 [已关闭] 添加 omniroute 作为提供商**: 该提案要求集成 `OmniRoute` 提供商。虽然已被关闭，但表明了社区对扩展 AI 模型提供商的持续需求。 [查看议题](https://github.com/sipeed/picoclaw/issues/2978)
- **#3044 [开放] allow_from 功能对包含冒号的 Matrix 用户 ID 无效**: 用户 `weissfl` 报告了一个会影响特定用户配置的 bug，即标准格式的 Matrix 用户 ID（`@localpart:domain`）无法被白名单正确识别，导致消息被静默拒绝。这是一个对 Matrix 用户影响较大的功能性 bug。 [查看议题](https://github.com/sipeed/picoclaw/issues/3044)
- **#3125 [开放] web_search 工具在迁移到 .security.yml 后静默失败**: 这是今天最新提出的议题，用户 `Giordano10` 报告了 Brave API key 迁移后，`web_search` 工具无法正常工作。这直接关系到核心功能的使用，预计会很快得到开发者响应。 [查看议题](https://github.com/sipeed/picoclaw/issues/3125)

## 5. Bug 与稳定性
今日共报告 4 个新的或活跃的 Bug，按严重程度排列如下：

- **严重 - 功能故障**
    - **#3125 [开放]**: `web_search` 工具在迁移 API 密钥至 `.security.yml` 后静默失败，导致搜索功能完全不可用。 **无 fix PR**。 [查看议题](https://github.com/sipeed/picoclaw/issues/3125)
- **中等 - 特性故障**
    - **#3044 [开放]**: `allow_from` 功能无法识别包含冒号的 Matrix 用户 ID，导致特定用户的访问控制失效。 **无 fix PR**。 [查看议题](https://github.com/sipeed/picoclaw/issues/3044)
    - **#3041 [开放]**: `mcp add` 命令全局标志解析错误，导致无法正确添加 HTTP/SSE 类型的 MCP 服务。 **无 fix PR**。 [查看议题](https://github.com/sipeed/picoclaw/issues/3041)
- **低 - 兼容性/UI**
    - **#3090 [开放]**: PicoClaw 面板在 iOS 16.4 以下版本的 Safari 浏览器上无法工作。 **无 fix PR**。 [查看议题](https://github.com/sipeed/picoclaw/issues/3090)

## 6. 功能请求与路线图信号
- **#3118 [开放] - 为 picoclaw agent 添加远程 Pico WebSocket 模式**: 作者 `jp39` 提交的 PR，旨在为代理命令增加 `--remote` 参数，支持远程连接到其他 PicoClaw 实例。这预示着项目正朝着**分布式代理架构**演进。 [查看PR](https://github.com/sipeed/picoclaw/pull/3118)
- **#3120 [开放] - 添加 RegisterChannelSettings 钩子以支持树外通道 (`out-of-tree channels`)**: 作者 `carlosprados` 提出的 PR，通过暴露配置钩子，允许第三方开发者无需分叉 PicoClaw 即可注册自定义的聊天通道。这显著增强了项目的**可扩展性和插件生态**构建能力。 [查看PR](https://github.com/sipeed/picoclaw/pull/3120)
- **#2978 [已关闭] - 添加 omniroute 作为提供商**: 虽然议题已关闭，但社区对集成更多如 OmniRoute 的模型提供商的需求依然存在。

## 7. 用户反馈摘要
- **痛点**:
    - **#3044**: 用户 `weissfl` 强调，按文档配置的 `allow_from` 功能不生效，这违背了“配置即契约”的预期，对使用 Matrix 联邦协议的用户造成困扰。
    - **#3125**: 用户 `Giordano10` 指出，在 API 密钥架构迁移后，一个核心的工具（`web_search`）悄无声息地失效了，这带来了糟糕的用户体验和排错困难。
- **使用场景**:
    - **#3041**: 用户 `carlosprados` 在使用命令行工具 `picoclaw mcp add` 添加远程 HTTP/SSE 服务时报告了 Bug，揭示了高级用户通过命令行配置复杂 MCP 服务的场景。
- **满意/不满意**:
    - **#3090**: 用户 `3m377` 在 Raspberry Pi OS 上运行 PicoClaw v0.2.9，但在较旧版本的 iOS Safari 浏览器上遇到面板无法工作的问题。这表明用户对跨平台、跨浏览器的兼容性有较高期待。

## 8. 待处理积压
以下 Issue 或 PR 已存在一段时间且未被回应或解决，建议维护者关注：

- **#2975 [开放] - feat(telegram): treat reply to bot message as mention in group chats**: 这是一个已经开放超过两周的功能增强 PR，旨在提升 Telegram 群组交互体验。项目开发者应尽快评估并给出反馈。 [查看PR](https://github.com/sipeed/picoclaw/pull/2975)
- **#3044 [开放] - Bug: allow_from fails for Matrix user IDs containing colon**: 这是一个关于核心访问控制功能的中等严重性 Bug，已存在一周，虽有活跃度但未有开发人员介入。对依赖 Matrix 通道的用户影响较大。 [查看议题](https://github.com/sipeed/picoclaw/issues/3044)
- **#3041 [开放] - `mcp add` mis-parses global flags into positionals**: 此 Bug 阻碍了高级用户正常使用 MCP 功能，自报告以来已一周，同样需要项目方的关注。 [查看议题](https://github.com/sipeed/picoclaw/issues/3041)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，以下是基于您提供的NanoClaw GitHub数据生成的2026-06-15项目动态日报。

***

# NanoClaw 项目动态日报 | 2026-06-15

## 1. 今日速览

今日项目活跃度极高，社区贡献和核心开发并行推进。过去24小时内，项目收到了7个新Issue和11个PR，其中6个PR已合并或关闭。值得关注的是，社区安全研究员一次性提交了3个关键安全漏洞报告，涉及MCP工具审批、本地网关权限绕过和文件泄露，这是今日最重要的信号。同时，核心团队在代理提供商（Codex）、预算错误处理和数据库稳定性方面取得了实质性进展，这两个方向是项目健康发展的关键。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日项目在多个核心领域取得了关键性进展，多项重要PR被合并：

*   **核心架构演进**：[PR #2756](https://nanocoai/nanoclaw PR #2756)（已合并）实现了**运营商驱动的提供商选择与切换**，为支持多模型提供商（如Codex）奠定了架构基础。[PR #2757](https://nanocoai/nanoclaw PR #2757)（已合并）则作为其延续，正式引入了**Codex代理提供商的v2载荷**，将Codex集成到核心能力栈中。
*   **基础设施与稳定性提升**：[PR #2758](https://nanocoai/nanoclaw PR #2758)（已合并）通过数据驱动的方式管理全局CLI工具，简化了容器构建流程。[PR #2764](https://nanocoai/nanoclaw PR #2764)（已关闭）修复了`CLAUDE.md`文档中指向已迁移文件路径的“死链接”，提升了AI编码助手的开发体验。
*   **修复与文档改进**：[PR #2769](https://nanocoai/nanoclaw PR #2769)（已关闭）修复了`/add-codex`技能的文档，避免了交互式认证步骤导致的代理流程卡死问题。

这些合并表明项目正在快速构建其“提供商抽象层”的骨架，同时也在打磨开发文档和基础设施的健壮性。

## 4. 社区热点

今日社区讨论的焦点无疑是安全研究员[YLChen-007](https://github.com/YLChen-007)提交的三个安全漏洞报告：

*   **[Issue #2762](https://nanocoai/nanoclaw Issue #2762): `add_mcp_server` 审批流程存在隐藏参数风险**：当代理请求添加MCP服务器时，关键参数如`args`和`env`可能在审批界面上对用户隐藏，导致用户可能在不知情的情况下批准恶意配置。
*   **[Issue #2761](https://nanocoai/nanoclaw Issue #2761): 本地网关认证绕过**：Chat SDK网关的本地回环Webhook缺乏身份验证，可能被攻击者利用来绕过正常的审批流程。
*   **[Issue #2760](https://nanocoai/nanoclaw Issue #2760): `send_file` 工具存在任意文件泄露风险**：内置的`send_file` MCP工具未对绝对路径进行有效约束，可能被利用来读取服务器上的任意文件。

**诉求分析**：这三份报告指向同一个核心痛点：**NanoClaw的“用户审批”安全模型可能存在设计缺陷**。当代理运行在本地或用户监督下时，API网关和工具调用是关键的信任边界。报告者系统地指出了审批流程中的信息不透明（#2762）、认证缺失（#2761）和执行限制不足（#2760）问题。这不仅关系到项目声誉，更直接影响所有用户（尤其是终端用户）的数据安全。

## 5. Bug 与稳定性

今日报告的Bug主要集中在安全性、文档和用户体验方面，按严重程度排列如下：

*   **严重（安全风险）**：
    *   **`add_mcp_server` 审批绕过** ([Issue #2762](https://nanocoai/nanoclaw Issue #2762)) - 无关联修复PR。
    *   **本地网关认证绕过** ([Issue #2761](https://nanocoai/nanoclaw Issue #2761)) - 无关联修复PR。
    *   **`send_file` 任意文件泄露** ([Issue #2760](https://nanocoai/nanoclaw Issue #2760)) - 无关联修复PR。
*   **高（功能中断/体验受损）**：
    *   **预算耗尽后LLM调用静默丢弃** ([Issue #2751](https://nanocoai/nanoclaw Issue #2751)) - **已有修复PR**: [PR #2759](https://nanocoai/nanoclaw PR #2759) （待合并）正在解决用户无反馈的问题。
    *   **Codex图像生成结果未送达**：虽然[PR #2770](https://nanocoai/nanoclaw PR #2770)（待合并）旨在修复，但代码类型定义缺失和交付逻辑断裂显示该功能存在明显的工程质量问题。
    *   **DB日志文件在容器杀死后恢复失败**：关联长期问题 [#2516](https://nanocoai/nanoclaw Issue #2516), [#2640](https://nanocoai/nanoclaw Issue #2640)，已有修复PR [PR #2750](https://nanocoai/nanoclaw PR #2750)（待合并）。
*   **低（文档/非功能性）**：
    *   **CLAUDE.md 关键文件路径错误** ([Issue #2763](https://nanocoai/nanoclaw Issue #2763)) - 已关闭并通过 [PR #2764](https://nanocoai/nanoclaw PR #2764) 修复。
    *   **Telegram Markdown 解析器过时** ([Issue #2767](https://nanocoai/nanoclaw Issue #2767)) - 影响特定渠道的富文本显示。

## 6. 功能请求与路线图信号

今日没有收到全新的用户功能请求。但通过分析今日合并和活跃的PR，可以清晰地看到项目的短期路线图：

*   **核心方向1：多提供商支持**：通过 `feat(providers)` 系列PR（#2756, #2757），**Codex** 已被明确列为继Anthropic之后的第二个代理提供商。这表明项目正从单一提供商依赖中解脱出来，走向一个开放的提供商生态。
*   **核心方向2：代理稳定性**：[PR #2759](https://nanocoai/nanoclaw PR #2759) 修复了预算耗尽问题，[PR #2750](https://nanocoai/nanoclaw PR #2750) 修复了DB日志问题。这两项修复直接关系到**长会话、高可用性代理**的可靠性，是向生产环境迈进的必要步骤。
*   **边缘功能：Codex集成**：尽管是单个提供商，但[PR #2770](https://nanocoai/nanoclaw PR #2770)对Codex的交付链路修复说明，**图像生成等富媒体输出**正在成为项目必须支持的范式。

## 7. 用户反馈摘要

从今日的Issue和PR中，可以提炼出以下用户痛点与使用场景：

*   **痛点：静默失败是最大的敌人**：`Budget-exhausted LLM turns are silently dropped` ([Issue #2751](https://nanocoai/nanoclaw Issue #2751)) 是用户反馈中的关键痛点。当代理“装死”而非给出清晰错误时，用户会感到困惑、挫败，甚至认为系统已崩溃。这比错误信息更糟糕。
*   **痛点：安全透明度不足**：`add_mcp_server`审批中隐藏参数的问题 ([Issue #2762](https://nanocoai/nanoclaw Issue #2762)) 揭示了用户对“黑盒操作”的担忧。用户希望不仅被询问“是否允许”，更渴望了解“允许了什么”。
*   **使用场景：开发者作为运维**：从 `data-drive global CLI installs` ([PR #2758](https://nanocoai/nanoclaw PR #2758)) 和 `docs fixes for agent-coding` ([PR #2764](https://nanocoai/nanoclaw PR #2764)) 可以看出，NanoClaw的主要用户群是**使用AI开发AI代理的开发者**。他们关注的是敏捷的开发流程、清晰的文档和可维护的基础设施。
*   **不满意的地方：遗留代码/文档**：`Telegram Markdown`解析器过时 ([Issue #2767](https://nanocoai/nanoclaw Issue #2767)) 和文档路径错误 ([Issue #2763](https://nanocoai/nanoclaw Issue #2763)) 持续存在，表明项目在快速演进的同时，**对“老代码”和文档的清理存在滞后**，给新用户/AI编码助手带来了不应有的摩擦。

## 8. 待处理积压

*   **安全漏洞无修复**：[Issue #2760](https://nanocoai/nanoclaw Issue #2760), [#2761](https://nanocoai/nanoclaw Issue #2761), [#2762](https://nanocoai/nanoclaw Issue #2762) 这三份安全报告是当前最重要的积压项。它们触及系统安全的核心，且目前没有对应的PR。维护者应优先评估并分配修复任务，或在社区中公开讨论缓解措施。
*   **关键修复PR待合并**：
    *   [PR #2759](https://nanocoai/nanoclaw PR #2759)：修复预算耗尽问题的关键修复，直接影响用户体验，应尽快审查和合并。
    *   [PR #2750](https://nanocoai/nanoclaw PR #2750)：修复数据库日志恢复问题，关乎长期运行环境的稳定性，需加快审查。
*   **长期健康审计**：[PR #2732](https://nanocoai/nanoclaw PR #2732)（`Harden host + agent-runner from health audit findings`）已提交4天，修改了19个文件，是一项重要的安全加固工作。虽然它排除了某些下游适配器的修复，但作为核心加固，等待时间已较长，应加速审查流程。

**总结**：NanoClaw项目正在经历一个充满活力的发展期，其特征为“**架构大推进**”与“**安全信任危机**”并存。核心团队在提供商抽象和稳定性上的投入值得肯定，但社区提交的安全漏洞报告揭示了现有安全策略的盲区。项目当前的首要任务是：**快速响应并修复已报告的安全漏洞，以重建并巩固社区信任；同时，审慎地推进待合并的关键修复PR，确保项目健康、稳定地向前演进。**

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目的分析师，我将根据您提供的IronClaw GitHub数据，生成以下项目动态日报。

---

# IronClaw 项目日报 (2026-06-15)

### 1. 今日速览

过去24小时内，IronClaw项目保持着中等偏高的活跃度，共产生32条议题讨论和43个拉取请求。核心开发团队在推进 `Reborn` 架构下的多项关键功能，如运行时上下文显示、附件支持及认证流程优化。**值得高度关注的是，社区安全研究人员集中提交了多项关于 `shell` 工具权限绕过的安全漏洞报告，首次将项目的安全问题推至前台。** 此外，`dependabot` 发起了包含43个依赖包的大型批量更新，表明项目正在进行积极的依赖管理与现代化。

### 2. 版本发布

无新版本发布。

### 3. 项目进展

今日合并/关闭的PR主要聚焦于修复问题和回迁测试，表明项目正处于一个功能开发后的稳定化和缺陷修复阶段。具体进展包括：

- **认证与授权修复**：
    - **[PR #4844]** `fix(slack): filter delivered gate routes by raw gate string`：修复了Slack通道中，`auth`（认证）和 `approval`（审批）门控路由显示和判断错误的问题，优化了审批流程的准确性。
    - **[PR #4835]** `fix(approvals): persist "always allow" across threads`：解决了“始终允许”的审批设置在跨会话/线程时不生效的问题，优化了用户体验。

- **测试与基础设施回迁**：
    - **[PR #4873]** `test(slack): re-home approval→auth→final-reply delivery e2e`：成功将一个此前“天生不可用”的Slack端到端测试用例回迁到代码库，巩固了对核心审批流程的测试覆盖率。

- **Bug修复**：
    - **[PR #4846]** `fix(reborn): normalize bare workspace tool paths`：修复了Reborn架构中文件工具路径处理不当，导致路径冗余（如 `workspace/workspace`）的问题。
    - **[Issue #4751]** `[bug] [Reborn] Large response request fails...`：已关闭。针对大请求时“工具参数超过16384字节”的限制问题，疑似已有解决方案或变通方法。

### 4. 社区热点

今日最引人注目的社区活动并非常规讨论，而是由开发者 **@YLChen-007** 集中提交的**6个安全相关问题** (Issue #4865, #4864, #4863, #4862, #4861, #4797)。这些议题均指控 `shell` 工具存在**严重的权限绕过漏洞**。

**背景分析**：
这些报告一致指出，IronClaw的 `shell` 命令风险分类机制过于简单（主要通过命令前缀判断），攻击者可以利用 `env`、`/bin/sh -c`、`sort --compress-program` 或换行符 (`\n`) 等方式包装高风险命令（如 `rm -rf`），使其被误判为低风险，从而绕过自动审批或强制审批机制，在用户不知情的情况下执行破坏性操作。

**项目影响**：
这些安全报告虽然评论数不多（单个议题为0），但其“安全”标签和系统性、高严重性的描述，使其成为今日对项目**潜在风险最高**的事件。这揭示了项目在沙箱隔离和权限控制方面可能存在的结构性弱点，需要维护团队优先响应和评估。

### 5. Bug 与稳定性

- **[严重] `shell` 工具权限绕过漏洞 (6项报告)**
    - **问题**: 如上文社区热点所述，`shell` 命令的风险分类存在多个绕过路径，可能导致恶意命令未经授权执行。
    - **状态**: 报告已提交 (Issues #4865, #4864, #4863, #4862, #4861, #4797)，**目前尚无关联的修复PR**。
    - **影响**: 核心安全机制缺陷，可能导致任意代码执行，威胁用户数据安全。

- **[中] `write_file` 沙箱逃逸漏洞 (Issue #4797)**
    - **问题**: 通过“悬空符号链接”（dangling symlink），`write_file` 工具可能向预期 `base_dir` 之外的文件系统路径写入内容，造成沙箱逃逸。
    - **状态**: 报告已提交，目前**尚无关联的修复PR**。

- **[中] WebChat v2 HTTP错误 (Issue #4874)**
    - **问题**: 当通过非 `localhost` 的HTTP协议访问WebUI时，发送消息会报 `TypeError: Illegal invocation` 错误。
    - **状态**: 已报告，等待调查。

- **[低] Reborn UI/UX 瑕疵 (Issues #4852, #4857, #4868, #4854, #4853, #4855, #4856)**
    - **问题**: 包括：Shell命令在审批历史中不显示、NEAR AI提供商标识错误、移动端设置按钮被裁剪、过多的审批弹窗、工具活动状态消失、中文UI回退英文、无障碍/键盘操作问题等。
    - **状态**: 多个可复现的UI小问题，影响体验但非阻塞性问题，暂无修复PR。

### 6. 功能请求与路线图信号

- **跨通道附件支持 (#4644)**：这是一个大型功能需求，旨在为附件（尤其是图片）建立统一的注册表、管道和WebUI交互。**PR #4738**（WebUI上传交互）和**PR #4871**（为视觉模型提供图片）正在并行推进，表明该功能是下一阶段版本的核心特性，即将落地。
- **运行时上下文透明度 (#4828)**：让模型能看到当前“连接了哪些通道”、“输出发往哪里”、“运行由何触发”。**PR #4836** 已合并，核心功能已完成。这为构建更智能、更上下文感知的Agent提供了基础。
- **Reborn 架构稳定性**：多个功能（PR #4841, #4877）和bug修复表明，团队正在努力将Reborn架构从功能开发期推向生产就绪期。

### 7. 用户反馈摘要

- **安全是头等大事**：社区安全研究员的报告是今日最强信号。虽然他们非“普通用户”，但其系统性分析揭示了产品信任模型上的盲点，尤其是“审批”作为最后一道防线的脆弱性。这可能是商业和核心用户最关心的点。
- **“提示词过多”困扰**：用户 `sunglow666` 提出一个简单的“查看代码库最新commit”操作需要多次点击审批（Issue #4854），这反映了当前审批粒度与用户预期之间的差距。一味增加审批环节并非总是最优解，如何实现上下文感知的智能审批是本项目的关键挑战。
- **Reborn 稳定性初显**：`think-in-universe` 的“本地狗食测试”报告(Issue #4692)和系列UI Bug修复表明，团队正在认真打磨Reborn的入门体验，但功能完整性与日常可用性之间仍有差距。

### 8. 待处理积压

- **[5月16日，PR #3708]** **新版本发布 (chore: release)**：该PR旨在发布从 `0.24.0` 到 `0.29.1` 的大版本更新，包含API Breaking Changes。**已开放近一个月且未合并**，这可能意味着团队认为Reborn架构仍需打磨，或者新版发布流程存在阻塞点。这是项目当前最大的未决更新事件。
- **[5月12日，Issue #3515]** **WeChat Channel 文档**：功能已发布，但对应的官方通道文档仍未完成，影响中文用户群的采用。
- **[5月24日~6月5日，PRs #4002, #4498, #4499, #4032]** **多个依赖更新PR**: 这些由 `dependabot` 机器人发起的PR长期处于打开状态，虽然风险不高，但长期积压可能导致版本碎片化和潜在的安全风险。今日新开的超级更新PR(#4876)可能会加速解决这个问题。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，以下是根据您提供的LobsterAI GitHub数据生成的2026年6月15日项目动态日报。

---

# LobsterAI 项目动态日报 | 2026年6月15日

## 1. 今日速览

今日项目活跃度**较低**，主要工作集中在算法和工程实现层面，而非用户可见的UI/UX更新。项目在过去24小时内无新版本发布，但成功合并了一个关键Bug修复（#1465）。当前积压的Issues主要为UI本地化问题（#1434, #1435），而开放的PRs则聚焦于增强会话体验的“基础设施”改进，如消息搜索、防止系统休眠和实时计时器。整体健康度良好，社区讨论趋于平静。

## 2. 版本发布

无

## 3. 项目进展

今日有1个Pull Request被合并，标志着项目在**稳定性和数据一致性**方面取得了重要进展：

- **[#1465] fix(scheduled-tasks): 已删除的定时任务重启后作为幽灵会话重新出现 (已合并)**：作者`linlihua`成功修复了一个长期存在的幽灵会话bug。该问题的根本原因是定时任务删除流程中，本地SQLite数据库中的会话记录未被清理，导致重启后重新出现空内容的会话。此修复保证了数据状态的统一，提升了定时任务功能的可靠性。
  - 链接：[netease-youdao/LobsterAI PR #1465](https://github.com/netease-youdao/LobsterAI/pull/1465)

## 4. 社区热点

今日社区讨论较为平静，无特别高热度讨论。所有开放的Issues和PRs均属于长期未更新的“stale”状态，评论数极低（1条），表明当前社区焦点可能已转移至其他议题或等待维护者反馈。

## 5. Bug 与稳定性

今日仅报告了**2个UI/UX层面的Bug**，均为中文本地化问题，严重程度较低：

- **严重程度：低**
- **[#1434] 中文环境下，agent技能搜索无数据时显示英文提示和按钮**：用户`xuzx-code`指出，当界面语言设置为中文时，搜索无结果的提示及按钮未正确本地化，仍显示英文。这是一个典型的字符串提取与多语言映射遗漏问题。
  - 链接：[netease-youdao/LobsterAI Issue #1434](https://github.com/netease-youdao/LobsterAI/issues/1434)
- **[#1435] 新建自定义agent时，名称过长导致UI溢出**：用户`xuzx-code`报告，当输入的Agent名称过长时，会直接超出输入框边界，UI展示不友好。这是一个对输入框进行字符限制或样式适配的前端细节问题。
  - 链接：[netease-youdao/LobsterAI Issue #1435](https://github.com/netease-youdao/LobsterAI/issues/1435)

## 6. 功能请求与路线图信号

今日没有直接合并的新功能，但当前开放的3个PRs非常清晰地指向了项目未来的迭代方向，很可能成为下一个版本的重点：

- **增强会话体验**：
    - **会话内消息搜索 (#1429)**：`noransu` 提交的PR引入了会话内消息高亮搜索功能，这将是LobsterAI作为个人助手在信息检索能力上的重要补充。
    - **运行时阻止系统休眠 (#1430)**：`choyuenga` 提交的PR解决了长时间运行任务被系统中断的痛点，这是提升后台任务可靠性的关键举措。
    - **实时运行计时器 (#1431)**：`choyuenga` 提交的另一PR增加了会话运行时的实时计时器，满足了用户对任务进度的感知需求，使界面更专业。

这些PRs共同指向一个目标：**将LobsterAI从一个会话式AI工具，升级为一个更可靠、更智能、用户感知更强的“助理”**。

## 7. 用户反馈摘要

本期日报中，用户反馈主要来自于Bug报告，反映了两个与基础体验相关的诉求：

- **本地化完整性诉求**：来自`xuzx-code`的反馈（#1434）表明用户对“全中文”体验有明确期望。即使是一个搜索无结果的提示框，未本地化也会产生割裂感，降低产品的专业性。
- **输入体验友好性诉求**：同样是来自`xuzx-code`的反馈（#1435），指出UI应有能力处理边界情况。用户期望在输入长名称时，能够获得清晰的视觉反馈（如自动换行、截断或错误提示），而不是简单粗暴的溢出。

## 8. 待处理积压

以下Issue和PRs均为“stale”状态，已开放超过两个月，且作者未作进一步更新。建议维护者及时评估其优先级，决定是采纳/合并、打回还是与作者沟通：

- **[#1429] feat(cowork): add in-session message search with mark.js highlighting**：一个成熟的、包含前端高亮库集成和完整交互逻辑的功能PR。是否应被合并，以尽快改善搜索体验？
  - 链接：[netease-youdao/LobsterAI PR #1429](https://github.com/netease-youdao/LobsterAI/pull/1429)
- **[#1430] feat(cowork): 会话运行期间自动阻止系统休眠**：解决关键可靠性问题，但对普通用户而言，其对电池等资源的影响需谨慎评估。
  - 链接：[netease-youdao/LobsterAI PR #1430](https://github.com/netease-youdao/LobsterAI/pull/1430)
- **[#1431] feat(cowork): StreamingActivityBar 右侧显示会话运行计时器**：一个增强用户体验的轻量级改动，实现简单，但能显著提升“运行中”状态的直观性。
  - 链接：[netease-youdao/LobsterAI PR #1431](https://github.com/netease-youdao/LobsterAI/pull/1431)
- **[#1434] 中文环境下显示英文提示** 和 **[#1435] 新建agent名称过长UI溢出**：两个简单的本地化/UI修复，可以作为新手贡献者的入口任务，但长期未处理可能影响早期用户对项目精细度的评价。
  - 链接：[Issue #1434](https://github.com/netease-youdao/LobsterAI/issues/1434) / [Issue #1435](https://github.com/netease-youdao/LobsterAI/issues/1435)

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

好的，作为一位AI智能体与个人AI助手领域开源项目分析师，我已根据您提供的Moltis项目GitHub数据，生成了2026年6月15日的项目动态日报。

---

# Moltis 项目动态日报 | 2026年6月15日

## 今日速览

今日项目活跃度较低。过去24小时内，社区提交了1个新的增强功能请求和2个待合并的Pull Request，未产生新的版本发布。主要关注点集中于技术改进提案（高性能内存后端）与稳定性修复（Dockerfile VOLUME指令问题）。整体而言，项目处于稳步推进的积压处理阶段，暂无重大突破性更新。

## 版本发布

无新版本发布。

## 项目进展

今日无已合并或关闭的PR，但有两个新的高质量PR提交，反映了项目在以下方面的进展：

1.  **Docker部署稳定性修复 (PR #1122)**: 由贡献者`sayotte`提交，旨在修复Dockerfile中`VOLUME`指令声明与用户挂载主目录（bind mount）之间的冲突。该问题会导致Docker在运行时为声明为VOLUME的目录创建匿名卷，从而“掩盖”用户通过`-v`挂载的配置文件。此修复对于提升用户Docker部署体验非常重要，预计将通过清理不必要的VOLUME声明来解决该病理学场景。

2.  **前端依赖更新 (PR #1121)**: 由`dependabot[bot]`自动提交，将`/crates/web/ui`下的`esbuild`从`0.25.12`更新至`0.28.1`。这是对核心构建工具的重大版本更新，通常包含性能改进、Bug修复和新功能，有助于保持项目前端构建的现代化和安全性。

## 社区热点

今日社区讨论最集中的是 **PR #1122: fix: drop VOLUME declarations that shadow the home bind mount**。
- **链接**: [Moltis PR #1122](https://github.com/moltis-org/moltis/pull/1122)
- **诉求分析**: 该PR虽然暂无评论，但其解决的“Docker VOLUME与bind mount冲突”问题，是Docker化部署中一个常被忽视但影响重大的痛点。潜在的用户困扰包括：用户配置更改不生效、数据持久化行为不符合预期。此PR的提交表明社区贡献者正在解决真实、高复现度的用户问题，对提升项目易用性有直接价值。

## Bug 与稳定性

今日未报告新的Bug或崩溃问题。主要稳定性相关工作为上述**PR #1122**，该PR直接针对一个潜在的**中等严重程度**的Docker部署问题。该问题在用户通过bind mount挂载配置文件时可能导致配置丢失，目前已有明确的fix PR待合并。

## 功能请求与路线图信号

今日唯一的Issue **#1123** 是一个重要的功能请求信号：
- **链接**: [Moltis Issue #1123](https://github.com/moltis-org/moltis/issues/1123)
- **标题**: [Feature]: Add pure-Rust turbovec as an alternative memory backend for extreme edge compression
- **分析**: 用户请求集成`turbovec`作为纯Rust内存后端，以实现“极致边缘压缩”。这表明用户对资源受限环境（如边缘设备）下的性能有较高要求，可能用于：
    - 减少内存占用
    - 提升向量搜索或数据处理效率
    - 消除对C/C++库的依赖，提升跨平台编译便捷性
- **路线图信号**: 此请求与Moltis作为AI智能体助手的核心能力（可能涉及向量存储、数据处理）直接相关。如果采纳，将大大增强其在低功耗/嵌入式场景的竞争力，有潜力作为下一版本的一个关键特性进行规划。

## 用户反馈摘要

今日无Issue或PR产生用户评论，因此无法提取直接的用户反馈。但从以下数据可推断用户关注点：
- **功能需求**: 用户对性能优化（特别是边缘计算场景）有强烈兴趣（Issue #1123）。
- **部署痛点**: 用户关注Docker等标准部署方式的稳定性，特别是配置挂载的正确性（PR #1122）。

## 待处理积压

当前积压的主要为以下两个待合并的PR，建议维护者尽快审阅：

1.  **PR #1122** Docker VOLUME修复，建议根据项目现有的Docker部署规则，检查其影响范围并决定是否合并。
    - **链接**: [Moltis PR #1122](https://github.com/moltis-org/moltis/pull/1122)
2.  **PR #1121** esbuild版本升级，依赖更新风险较低但需要确保与前端代码的兼容性。
    - **链接**: [Moltis PR #1121](https://github.com/moltis-org/moltis/pull/1121)

此外，新提出的**Issue #1123**（功能请求）当前无任何标记和评论，属于初始状态。建议维护者评估其可行性，并添加`enhancement`标签及初步反馈，以引导社区讨论。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，以下是为CoPaw项目生成的2026-06-15项目动态日报。

---

# CoPaw 项目动态日报 | 2026-06-15

**数据来源:** github.com/agentscope-ai/CoPaw
**报告时间:** 2026-06-15 00:00 UTC

---

## 1. 今日速览

项目今日社区活跃度较高，共产生8条Issue和7条PR，社区贡献者参与踊跃。Bug报告主要集中在近期发布的v1.1.11.post2版本上，包括本地模型提供者显示异常、插件依赖安装弹窗等问题，团队需优先关注。功能请求方面，用户对更细致的时间戳支持、Kimi智能体接入以及模型配置统一化有明确诉求。值得关注的是，来自多位首次贡献者的PR（越南语支持、技能触发优化等）展示了项目社区的国际化与参与热情。今日另有1个关注度较高的闲置对话卡死问题被关闭，但根本原因有待确认。

## 2. 版本发布

无

## 3. 项目进展

今日合并/关闭的PR：0条。
**主要动态：** 今日所有7个PR均处于开放待合并状态，没有新代码合并进主分支。项目推进主要体现在新功能的提议和Bug修复的提交上，但尚未有落地。

## 4. 社区热点

今日讨论最活跃的议题是 **#5156 [Feature]: 建议支持 kimi-for-coding / 加入 uv 白名单**，该议题获得5条评论。
- **链接:** [Issue #5156](https://github.com/agentscope-ai/QwenPaw/issues/5156)
- **背后诉求分析:** 用户付费订阅了Kimi的coding套餐（kimi-for-coding），但CoPaw目前仅支持其官方API，导致用户无法复用已有订阅。这反映出用户对“**充分利用已购第三方服务**”的强烈需求，希望项目能开放接口或建立白名单机制，以兼容更多商业模型/服务生态，减少用户的“沉没成本”和配置壁垒。这本质上是用户对**生态兼容性**和**议价权**的诉求。

## 5. Bug 与稳定性

今日报告了多个Bug，按严重程度排列如下：

1.  **🌐 严重: 闲置后聊天卡死 (Issue #5172)**
    - **描述:** 对话闲置一段时间后继续聊天，Agent会无响应，必须手动点击“停止”后重新提问才能恢复。此问题在接入QQ、微信等无法手动干预的渠道时会导致服务彻底中断。
    - **状态:** 已于今日被作者关闭 [CLOSED]，但社区反馈显示该问题（Task has been cancelled）长期存在，尚不确定是否为一次性修复。需关注后续是否有相关跟进。
    - **链接:** [Issue #5172](https://github.com/agentscope-ai/QwenPaw/issues/5172)

2.  **⚠️ 严重: 插件依赖安装导致CMD窗口持续弹窗 (Issue #5181)**
    - **描述:** 在v1.1.11.post2版本中，插件系统安装依赖时未隐藏CMD窗口。当网络环境不佳导致pip安装失败时，会触发无限重试循环，导致桌面频繁闪现cmd.exe窗口，严重影响用户体验。
    - **状态:** [OPEN]，来源：[Bug] QwenPaw v1.1.11.post2 插件依赖安装导致cmd窗口持续弹窗
    - **链接:** [Issue #5181](https://github.com/agentscope-ai/QwenPaw/issues/5181)

3.  **⚠️ 高: 本地模型提供者不显示 (Issue #5184)**
    - **描述:** 升级到v1.1.11.post2后，在设置中创建的本地模型提供者（Local model providers）无法显示，用户无法管理和使用本地模型。
    - **状态:** [OPEN]，来源：[Bug: Local model providers not showing in v1.1.11.post2](https://github.com/agentscope-ai/QwenPaw/issues/5184)
    - **链接:** [Issue #5184](https://github.com/agentscope-ai/QwenPaw/issues/5184)

4.  **🪟 中等: 宠物功能在Wayland下不可用 (Issue #5183)**
    - **描述:** 在Niri等Wayland合成器上无法正常使用桌面宠物功能。
    - **状态:** [OPEN]
    - **链接:** [Issue #5183](https://github.com/agentscope-ai/QwenPaw/issues/5183)

5.  **💬 中等: 钉钉频道消息未注册到聊天记录 (Issue #5177)**
    - **描述:** 通过钉钉Channel发送的对话无法在前端Console的会话列表中出现，虽然Agent能正常回复且Session文件存在。
    - **状态:** [OPEN]，来源：[fix: DingTalk channel messages not registered in chats.json](https://github.com/agentscope-ai/QwenPaw/issues/5177)
    - **链接:** [Issue #5177](https://github.com/agentscope-ai/QwenPaw/issues/5177)

## 6. 功能请求与路线图信号

今日提出的功能请求如下，结合已有PR判断其落地可能性：

1.  **[Feature Request] 为Agent上下文添加实时时间戳 (HH:MM:SS) - #5185**
    - **分析:** 用户希望Agent能天然感知到实时时间，而非仅日期。此请求与“让Agent更智能、减少多余工具调用”的精细化控制趋势一致。由于实现相对简单且提升用户体验明显，**有较大概率在下一版本中被采纳**。
    - **链接:** [Issue #5185](https://github.com/agentscope-ai/QwenPaw/issues/5185)

2.  **[Feature] 优化模型配置，统一模型配置 - #5182**
    - **分析:** 用户希望统一向量、文本、音视频等模型的配置方式，并支持多模态输入输出模型的选择。这反映出随着模型多样性增加，**用户对更简洁、统一的配置管理界面有了更高要求**。此功能是为未来的“全能大模型”做准备，**属于中期规划中的重点优化方向**，有望在v1.2或v2.0中实现。
    - **链接:** [Issue #5182](https://github.com/agentscope-ai/QwenPaw/issues/5182)

3.  **[Feature] 支持kimi-for-coding / 加入uv白名单 - #5156**
    - **分析:** 此诉求热度高，但实现复杂度较高（涉及API转换、计费逻辑对接、第三方生态兼容性）。短期内直接支持的难度较大，但**路线图可能更倾向于“开放插件/模型市场”的形式**，通过社区插件实现此类需求，而非项目核心代码去逐一适配。
    - **链接:** [Issue #5156](https://github.com/agentscope-ai/QwenPaw/issues/5156)

4.  **相关PR信号:**
    - **PR #5187 (feat: Windows桌面GUI自动化)**：这是一个非常亮眼的新功能提议，通过UIA和Tauri实现Windows桌面自动化。这表明项目正从“聊天Bot”向**“通用数字助理”**演进，意义重大。如被合并，将是项目能力的一次重要飞跃。
    - **PRs #5178, #5176 (Console前端优化)**：如会话标题过滤、授权命令文本自动换行，这些都是小而美的体验优化，**合并概率极高**，表明维护者对前端细节的重视。

## 7. 用户反馈摘要

从今日的Issue评论中，可以提炼出以下真实的“用户之声”：

- **痛点:</strong> “已经付费订阅了Kimi coding套餐，但没法直接在CoPaw里用，很浪费。”（来自 Issue #5156）
- **痛点:</strong> “只要不点击停止，就一直没反应。接入QQ微信就没办法点停止，直接嘎了。”（来自 Issue #5172）—— 这反映了**跨平台稳定性**和**无值守场景下的可靠性**是用户最核心的焦虑。
- **痛点:</strong> “CMD窗口狂闪，以为是中病毒了。”（来自 Issue #5181） —— 插件依赖管理的不优雅，严重影响了用户对软件专业度的信任。
- **需求:</strong> “能不能在每次传给agent的消息里自动注入完整的时间戳？要不它总得额外调工具查时间。”（来自 Issue #5185）—— 用户希望Agent更智能，减少不必要的“思维链条”，追求**极致的响应速度和流畅体验**。

## 8. 待处理积压

今日无长期未响应的积压Issue或PR。但以下针对**v1.1.11.post2版本**的Bug需要维护者重点关注，因为它们直接影响用户对新版本的接受度：

-   **Issue #5184**: 本地模型提供者不显示 —— 这直接影响使用本地部署模型的核心用户群。
-   **Issue #5181**: 插件依赖安装弹窗 —— 急迫需要短期hotfix解决，用户观感极差。
-   **Issue #5172 (已关闭)**: 聊天卡死问题 —— 虽然已关闭，但其严重性高，建议团队内部复盘，确认修复是否彻底，避免后续反复。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，这是为您生成的 ZeroClaw 项目动态日报。

---

# ZeroClaw 项目动态日报 — 2026-06-15

## 1. 今日速览

ZeroClaw 项目近期社区活跃度极高，每日 Issues 和 PR 更新量巨大（分别为 40+ 和 50+），显示出强烈的用户与开发者参与度。**主要特征表现为“高产出的合并浪潮”与“动态的积压清理”并存**。昨日关闭了 27 个 Issues，且大量 PR 处于打开待合并状态（50 个），说明开发团队正在快速消化前期的功能请求和 Bug 修复，但合并压力也随之增大。核心关注点集中在**多通道（SMS、IM）集成、新模型提供商接入、以及安全/权限相关的 Bug 修复**上。

## 2. 版本发布

- **无新版本发布。**

## 3. 项目进展

昨日无合并/关闭的 PR，但活跃的 PR (50 个) 揭示出项目当前已经完成或正在推进多个重要功能模块的开发，这些 PR 一旦合并，将带来显著的功能提升：
- **通信渠道扩展**：大量关于集成 Twilio、Sinch、Plivo、Telnyx 等 SMS 通道的 PR（如 #6429, #6467 等关联 Issue）已在等待合并，这将极大扩展 ZeroClaw 的对外通信能力。此外，Discord 频道正在实现动态斜杠命令 (#7490, #7489)。
- **模型提供商生态系统**：多个新模型提供商的接入 PR 排队，包括 Arcee AI、Inception Labs (Mercury)、Lambda、Featherless AI 等。这表明项目正在积极构建一个开放、多元化的模型生态。
- **Web 控制台重设计**：一个代号为“Operator Console”的网关 Web UI 全面重设计的 PR (#7665) 被提交，旨在提供更现代化的操作界面。
- **WASM 插件系统**：为废弃 Extism 并转向 wasmtime 做准备的 PR (#7429) 以及完善 WASM 审核功能的 PR (#7416) 表明架构正在向更轻量、安全的插件体系演进。
- **核心机制改进**：关于成本追踪（支持缓存输入 token 计价）的 PR (#7492) 以及统一 Agent 运行引擎的 RFC (#7415) 的关闭，标志着项目在底层效率和运维能力上取得了进展。

## 4. 社区热点

- **Docker “完整” 镜像请求 (#3642，13 条评论)**
  - **链接**: [Issue #3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642)
  - **背景**: 用户要求提供一个编译了所有特性 (如 WhatsApp) 的 Docker 镜像，以降低非技术用户的使用门槛。
  - **分析**: 这是社区对于“开箱即用”体验的强烈呼声。许多特性（如 WhatsApp）因内存考量默认禁用，但这增加了新用户配置的复杂性。该议题获得 13 条评论和 3 个赞，表明这是一个普遍痛点。

- **工作流程与标签清理 RFC (#6808，11 条评论)**
  - **链接**: [Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)
  - **背景**: 一个关于引入“工作泳道”、板面自动化和标签清理的内部治理 RFC，旨在提升项目维护效率。
  - **分析**: 社区对项目管理工具的改进表现出高度关注，这反映了项目在快速增长后，对内部流程规范化、自动化的内在需求，以维持开发节奏。

- **委派代理模式的 Bug (#7470，7 条评论)**
  - **链接**: [Issue #7470](https://github.com/zeroclaw-labs/zeroclaw/issues/7470)
  - **背景**: 报告了一个阻止多代理审核/研究场景的关键工作流 Bug，涉及委派代理模式对空 `allowed_tools` 的错误处理，被标记为 S1 严重级别。
  - **分析**: 这是关于项目核心功能（多代理协作）的严重问题，引发了社区用户的密切关注。修复此 Bug 对于实现复杂的多 Agent 自动化任务至关重要。

## 5. Bug 与稳定性

昨日报告了 13 个活跃 Issue，以下是按严重程度排列的 Bug。
- **严重 (S1 - workflow blocked)**:
  - **委派代理模式错误 (#7470)**: 作为当前热点，直接阻塞多代理工作流。**已有 PR 提交 (?)**: 目前无直接 fix PR，但讨论活跃，预计开发团队会优先处理。
  - **WhatsApp 频道无 QR 码 (#6847)**: 阻塞了用户通过 WhatsApp 通道的入门流程。**已关闭**，表明问题已修复。
- **中等 (S2 - degraded behavior)**:
  - **`show_tool_calls` 配置缺失 (#6856)**: 导致在 V3 Schema 中无法显示工具调用详情，影响调试和用户体验。**状态**: `in-progress`，有持续的开发活动。
  - **委派代理模式兼容性 (#7470 相关)**: 除了阻塞的问题，还有关于同 Profile 限制的 Bug，属于该问题的子集。
- **低风险**:
  - **QQ 频道重复处理 (#5662)**: 语音消息被重复处理，导致数据库中出现大量重复条目。**状态**: `in-progress`，已指派。
  - **Telegram 回复提示语问题 (#6646 关联)**: 修复已通过 PR #7438 提交，该问题会导致小模型错误地停止使用工具。

## 6. 功能请求与路线图信号

- **降级为低优先级**:
  - **“完整” Docker 镜像 (#3642)**: 虽呼声高，但被标记为 `priority:p2` 且 `status:blocked`，短期内可能无法立即排入开发计划。
- **可能纳入下一版本**:
  - **多个 SMS 通道 (Twilio, Sinch, Plivo, Telnyx)**: 相关 PR 已经准备就绪，很可能在下一个小版本中作为批量更新推出。
  - **多个新模型提供商**: Arcee AI、Lambda、Featherless 等提供商接入 PR 状态良好，有望被快速集成。
  - **Web 控制台重设计 (#7665)**: 作为一个新的、大的特性 PR，可能被规划为下一个里程碑的核心特性。
  - **WASM 插件系统基础 (#7429)**: 作为基础设施变更，其合并将是未来插件生态的重大进展。

## 7. 用户反馈摘要

从最近的 Issues 评论中可以提炼出以下用户反馈：
- **配置复杂性是主要痛点**：用户对 WhatsApp 配置困难 (#3642)、Email 通道配置逻辑错误 (#5528) 以及 Webhook 端口配置缺失 (#7610) 等都有抱怨，说明 **“零配置”或“模板化配置”** 是用户最迫切的需求之一。
- **对小模型的友好度不足**：Issue #6646 (关联 PR #7438) 显示，默认的 Telegram 指令对 Qwen3 这类小模型不够友好，会抑制其使用工具。这表明项目的默认提示词模板可能对大模型过度优化，需要平衡对不同规模模型的支持。
- **本地化与部署优化需求强烈**：用户对 Nix Flake (#6906) 和 Docker 部署 (#3642, #6760) 的改进请求很活跃，说明社区中有大量用户尝试在非标准或受控环境中部署 ZeroClaw。
- **渠道生态扩展受认可**：用户 `theonlyhennygod` 贡献了多个 SMS 和新模型提供商的集成，社区对此反应积极，表明第三方开发者对扩展 ZeroClaw 的“连接器”能力充满热情，且贡献模式已基本成熟。

## 8. 待处理积压

- **长期内部审计任务 (#6074)**: 该 Issue 追踪一个因大规模回滚而丢失的 153 个提交，目前仍处于打开状态，标记为`help wanted`。如不处理，将导致部分已修复的 Bug 和功能永久丢失。
  - **链接**: [Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)
- **Nix Flake 改进 (#6906)**: 用户反馈当前的 Nix Flake 输出不正确，无法直接安装 `zeroclaw` 包，而是输出了一个工具链。该 Issue 已关闭，但未提供 PR 链接，需要关注是否在后续版本中真正解决。
  - **链接**: [Issue #6906](https://github.com/zeroclaw-labs/zeroclaw/issues/6906)
- **大量打开的 PR (50个)**: 这是一个需要关注的问题。虽然 PR 众多说明贡献活跃，但超过 50 个 PR 待合并也意味着维护者的审查负担极重，可能导致关键修复或特性的延迟。
  - **建议**: 社区可以主动协助代码审查，或为有争议的 PR 提供测试反馈，以加速合并进程。

---

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*