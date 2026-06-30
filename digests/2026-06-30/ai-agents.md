# OpenClaw 生态日报 2026-06-30

> Issues: 374 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-30 00:27 UTC

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

好的，这是根据您提供的 OpenClaw 项目 GitHub 数据生成的 2026-06-30 项目动态日报。

---

## OpenClaw 项目动态日报 | 2026-06-30

### 1. 今日速览

项目在过去24小时内保持了极高的社区活跃度，共产生 **374 条 Issue 更新** 和 **500 条 PR 更新**。尽管有大量新 Issue 和待合并 PR 涌入（分别达到 304 和 447 条），但维护团队也高效地关闭/合并了 70 个 Issue 和 53 个 PR，体现出较强的问题处理能力。社区关注点集中在 **会话状态管理 (session-state)**、**消息丢失 (message-loss)** 和 **认证提供者 (auth-provider)** 等核心稳定性问题上，同时 Telegram 和 Google 相关的新功能 PR 也备受瞩目。总体来看，项目正处于快速迭代和问题修复的高强度并行阶段，社区参与度极高。

### 2. 版本发布

- **无新版本发布。**

### 3. 项目进展

虽然过去24小时内合并的PR数量有限，但以下合并/关闭的PR推进了关键的稳定性修复工作：
- **[PR #97837] [MERGED]** `fix(embedded): allow reentrant session write lock during overflow-recovery compaction`: 修复了嵌入式代理在触发溢出恢复自动压缩时，因未允许重入式写入锁而导致死锁的严重Bug，直接解决了 Issue #97747。
- **[PR #97959] [MERGED]** `[codex] docs: add release notes placeholder`: 为Codex运行时添加了发布说明页面的占位，为未来的版本发布文档化做准备，是项目基础设施和文档流程的改进。

此外，大量处于 `waiting on author` 状态的 PR 表明，许多修复工作正在进行中，但因需要作者补充信息或调整而暂时搁置。

### 4. 社区热点

今日社区最关注的议题呈现出“老问题持续发酵，新问题迅速升温”的态势。

- **#75 [长期热点]** `Linux/Windows Clawdbot Apps`: 以 **110条评论** 和 **81个赞** 的成绩成为讨论热度的绝对中心。社区对跨平台桌面客户端的强烈需求已持续近半年，这是一个长期未被满足、但呼声极高的功能诉求。
    - [Issue链接](https://github.com/openclaw/openclaw/issue/75)
- **#86538 [高度关注]** `[Bug]: Session write-lock timeouts block subagent delivery lanes`: 尽管只有18条评论，但被标记为 `P1` 和 `🦞 diamond lobster` 级别，直指核心会话锁机制导致的子代理交付阻塞，是社区最担心的稳定性问题之一。同时，新开的 **Issue #97877** `empty-error-retry blocked by hadPotentialSideEffects` 也属于同一类会话状态问题，表明该领域的Bug正在持续暴露。
    - [Issue链接](https://github.com/openclaw/openclaw/issues/86538)
- **#94518 [快速升温]** `DeepSeek cache hit rate <10% after 6.x upgrade`: 一个关于缓存命中率急剧下降的性能回归问题。在短短一天内获得了 **8个赞** 和 6条评论，说明其影响面广泛，且用户对此类性能下降非常敏感。
    - [Issue链接](https://github.com/openclaw/openclaw/issues/94518)
- **#79077 [议题持续活跃]** `Support for Telegram bot-to-bot and guest-bot modes`: 虽有8条评论，但关于支持Telegram新功能的讨论仍在继续。同时，**PR #97806** `telegram: add bot-to-bot policy foundation` 已经提交，表明社区已经将需求转化为实际行动。
    - [Issue链接](https://github.com/openclaw/openclaw/issues/79077) | [PR链接](https://github.com/openclaw/openclaw/pull/97806)

### 5. Bug 与稳定性

过去24小时报告的Bug主要集中在几个核心领域，严重程度较高且有对应的修复PR：

| 严重程度 | Issue描述 | 关联修复PR |
| :--- | :--- | :--- |
| **P1/Critical** | **#97877**: `empty-error-retry` 因 `hadPotentialSideEffects` 检查不当而被错误阻塞，导致在工具调用后遭遇5xx错误时静默失败。 | **无** (新开) |
| **P1/Critical** | **#95121**: 在 `2026.6.8` 版本中，Codex/OAuth路径在处理极简请求时存在约28秒的延迟回归。 | **无** (新开) |
| **P1/Critical** | **#91592**: `memory_search` 工具在 `--force` 重建索引后，因 `scopeHash` 不匹配而持续报错。 | **无** (已关闭) |
| **P1/Critical** | **#86538**: 会话写锁超时导致子代理交付通道阻塞，影响核心会话流转。 | **无** (已有PR #97837解决类似死锁问题) |
| **P2/High** | **#81397**: 会话JSONL文件中的工具结果（`toolResult`）配对错误，可能导致数据损坏或丢失。 | [PR #81397](https://github.com/openclaw/openclaw/pull/81397) (等待作者) |
| **P2/High** | **#91363**: 隔离（isolated）模式的Cron任务始终在模型调用阶段失败，无法正常工作。 | **无** |
| **P2/High** | **#96857**: 普通的工具文本输出可能被错误替换为“(see attached image)”占位符，导致模型“失明”。 | **无** |
| **Regression** | **#81934**: 更新至 `2026.5.12` 后出现了Gmail发送、Dropbox访问、PDF生成等多个关键功能回归。 | **无** |

总体而言，项目稳定性正受到会话状态管理、性能回归和新版本兼容性问题的三重考验，但高优先级问题多已有PR在跟进处理。

### 6. 功能请求与路线图信号

- **Telegram Bot-to-Bot 模式 (Feature Request #79077):** 社区对Telegram新功能的适配呼声很高，并已转化为 `PR #97806`。该功能目前处于 `feat: add bot-to-bot policy foundation` 阶段，可以被认为是下一版本的高优先级特性。
- **跨平台桌面应用 (Feature Request #75):** 对于 Linux 和 Windows 的 Clawdbot 应用，社区需求热度不减。这可以被视为项目长期路线图上的一个重大里程碑，但短期内可能因资源限制而优先级偏低。
- **预路由消息钩子 (Feature Request #81061):** 提出的 `before_route_inbound_message` 钩子旨在实现通道桥接/代理，是一项关键的插件基础设施增强。虽然当前状态为 `stale`，但可能作为插件系统演进的长期规划。

### 7. 用户反馈摘要

- **痛点与挫折：** 用户对性能回归问题（如 #94518 DeepSeek缓存， #95121 Codex延迟， #82070 CLI冷启动）感到沮丧，这直接影响了他们的日常使用体验。会话和消息的不可靠性（如 #86538 锁超时， #80520 Telegram消息丢失）也导致了用户对稳定性的普遍担忧。
- **使用场景：** 多个Issue（如 #80607, #80213, #80176）揭示了用户正在深度使用多代理、技能（Skill）自动化和会话回放等高级功能，说明OpenClaw的用户群体已从简单试用转向复杂生产环境部署。
- **社区互助与期待：** 面对新发布的Telegram功能（#79077），社区并非被动等待，而是主动贡献代码（PR #97806），这表明项目拥有一个健康、积极参与的开源生态。用户对长期未解决的功能（如桌面客户端）仍抱有期待，并持续保持关注。

### 8. 待处理积压

以下是一些长期未能关闭或获得回复的重要Issue及PR，提醒维护者关注：

- **Issue #80176** `[Codex×Pi parity Phase 5] JSONL session-replay harness`: 这是一个旨在提升测试能力的强大工具，作为阶段5的跟踪议题，自5月10日提交以来未有关键进展。
- **PR #79198** `refactor(plugins): expose loaded runtime metadata`: 这是一个对插件系统未来发展至关重要的重构，创建已近两个月，因等待作者而停滞。此PR的推进有助于后续更复杂的插件开发。
- **Issue #80286** `CLI sessions --json missing subagent runtime parent metadata`: 这是一个自5月10日就提出的CLI工具信息缺失问题，对于需要通过程序化方式管理子代理的用户而言是重要的功能缺陷，至今仍在开放状态。
- **PR #81397** `fix(agents): repair persisted tool result pairing`: 这是一个修复严重数据损坏bug的PR，但其状态是 `waiting on author`。如果该bug确实影响了用户，建议维护者主动介入审查或督促作者完善。

---

## 横向生态对比

好的，作为资深技术分析师，以下是根据您提供的各项目2026-06-30动态日报生成的横向对比分析报告。

---

### AI 智能体与个人 AI 助手开源生态：2026-06-30 横向对比分析报告

**1. 生态全景**

2026年6月30日，个人 AI 助手与自主智能体开源生态进入了 **“功能扩张与稳定性攻坚”** 的双轨并行阶段。以 OpenClaw 为首的核心项目社区活跃度极高，但普遍面临“会话状态管理”、“模型兼容性”和“多工具复杂工作流”等基础稳定性挑战。社区贡献者正从单纯的功能请求转向主动提交 Bug 修复和安全补丁，形成健康的自驱型贡献生态。同时，一个显著的信号是，**安全审计**（Hermes Agent）和**性能优化**（多个项目）正取代纯粹的功能开发，成为社区协作的焦点，表明生态正从“有无”向“好坏”过渡。

**2. 各项目活跃度对比**

| 项目名称 | Issues (24h) | PRs (24h) | 版本发布 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 374 | 500 | 无 | **高速迭代**，问题处理高效，但积压严重。 |
| **NanoBot** | 0 | 32 | 无 | **稳定修复**，聚焦Bug与安全，PR响应快。 |
| **Hermes Agent** | 50 | 50 | 无 | **安全扫荡**，社区主导的漏洞修复潮，需关注积压。 |
| **PicoClaw** | 0 | 0 | 无 | **低活跃**，功能拓展有进展，但流程推进缓慢。 |
| **NanoClaw** | 0 | 7 | 无 | **功能打磨**，渠道扩展与用户体验优化为主。 |
| **NullClaw** | 0 | 5 | 无 | **交互优化**，专注 CLI 体验提升。 |
| **IronClaw** | 14 | 50 | 无 | **质量攻坚**，Reborn分支高强度测试与Bug修复并行。 |
| **LobsterAI** | 4 | 39 | ✅ 2026.6.29 | **密集迭代**，以修复OpenClaw集成问题为核心。 |
| **CoPaw** | 79 | 0 | 无 | **反馈激增**，v2.0.0-beta验证期，问题与需求爆发。 |
| **ZeptoClaw** | 0 | 0 | 无 | **无活动**。 |
| **ZeroClaw** | 50 | 50 | 无 | **功能冲刺**，MCP、SOP、新通道齐头并进。 |
| **TinyClaw** | 0 | 0 | 无 | **无活动**。 |
| **Moltis** | 0 | 0 | 无 | **无活动**。 |

**3. OpenClaw 在生态中的定位**

- **生态基石与核心参照**：OpenClaw 是当之无愧的生态核心，其 H24 活动量（374 Issues/500 PRs）远超其他项目，形成了庞大的贡献者社区和问题库。其他项目（如 LobsterAI）明确以“集成 OpenClaw 稳定性”作为版本发布重点，凸显其作为“上游依赖”的地位。
- **技术路线差异**：OpenClaw 侧重于建立一个**通用、灵活、可扩展的 Agent 运行时**，社区讨论范围广（从 Telegram 跨应用到桌面客户端），问题域深度大（会话状态锁、缓存回归）。相比之下，其他项目多在其基础上进行二次开发或在特定方向深耕。
- **社区规模**：毫无疑问，OpenClaw 拥有目前生态内规模最大、最活跃的社区，其问题的多样性和用户诉求的复杂性（如性能回归、跨平台应用）正反映了其用户群体的广泛和技术应用的深入。

**4. 共同关注的技术方向**

- **会话状态与消息可靠性**：
    - **涉及项目**：OpenClaw、NanoBot、Hermes Agent、CoPaw。
    - **具体诉求**：OpenClaw 报告写锁死锁/超时；NanoBot 出现“会话投毒”；Hermes Agent 遭遇记忆饱和无响应；CoPaw 报告对话丢失。这表明所有项目开发者都在为打造“不会出错”的 Agent 记忆系统而挣扎。
- **模型兼容性与稳定性**：
    - **涉及项目**：OpenClaw、CoPaw、ZeroClaw、NullClaw。
    - **具体诉求**：DeepSeek 缓存命中率下降 (OpenClaw, Hermes)、模型思考模式兼容性 (ZeroClaw)、工具调用超时 (ZeroClaw)、流式原生工具调用 (NullClaw)。这表明 LLM 本身的非确定性导致代理框架面临巨大的适配压力。
- **安全与沙箱逃逸**：
    - **涉及项目**：NanoBot、NanoClaw、Hermes Agent、IronClaw。
    - **具体诉求**：路径遍历注入 (NanoBot, NanoClaw)；无限制响应体读取 (Hermes Agent)；协议违规 (IronClaw)。安全正从“外围配置”上升到“核心架构”层面。
- **用户体验 (UX) 与交互细节**：
    - **涉及项目**：NullClaw、NanoBot、LobsterAI、OpenClaw。
    - **具体诉求**：CLI 方向键支持 (NullClaw)；超轻量级定位与实际依赖的矛盾 (NanoBot)；界面卡顿 (LobsterAI)；前端工具结果计数错误 (CoPaw)。社区对交互“手感”的要求日益严苛。

**5. 差异化定位分析**

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | 通用 Agent 运行时，强大的插件/集成生态 | 高级开发、集成商、希望深度定制的用户 | 核心生态，提供丰富的API与集成选项。 |
| **NanoBot** | **超轻量级**、个人单实例 | 个人开发者、轻量级用户 | 主打“轻量”，但运行时依赖争议较大。 |
| **Hermes Agent** | 多平台、多渠道网关 | 追求聊天平台覆盖的极客用户 | **安全扫荡**，社区驱动的快速响应。 |
| **PicoClaw** | **去中心化/隐私敏感** (SimpleX, DeltaChat) | 隐私至上、去中心化生态用户 | 专注联邦/加密通信协议集成。 |
| **NanoClaw** | **多平台适配与用户体验** (Discord, Slack Socket Mode) | 注重部署体验和渠道易用性的团队 | 渠道适配器优先，集成 Slack/Discord。 |
| **NullClaw** | **CLI 原生体验**，纯终端交互 | 命令行重度用户、后端开发者 | **交互优化**，专注于终端REPL的手感。 |
| **IronClaw** | **企业级、大规模部署** (RBAC, Capability Policy) | 企业、需要复杂权限和流程控制的团队 | 使用Rust重写的“Reborn”架构，强调性能与架构可观测性。 |
| **LobsterAI** | **OpenClaw 的友好前端与工作区隔离** | 面向OpenClaw但需更简化UI和工作流管理的用户 | 作为OpenClaw的“皮肤”和“工作流引擎”，提供更佳UI和工作区管理。 |
| **CoPaw** | **多 Agent、任务与计划模式**，模型兼容性 | 需要多Agent协作和任务编排的用户 | **功能冲刺**，快速接纳新模型和新功能。 |
| **ZeroClaw** | **WASM插件、MCP、SOP等前沿架构** | 探索下一代Agent架构的先锋用户 | **前沿架构探索**，集成WASM/MCP/SOP等新兴标准。 |

**6. 社区热度与成熟度**

- **高速迭代与功能冲刺**：**OpenClaw**、**ZeroClaw**、**CoPaw** 处于此阶段，每日有大量新 Issue 和 PR，功能实现在多地开花。这些项目社区活跃度最高，但稳定性波动也最大。
- **质量巩固与安全加固**：**IronClaw**、**Hermes Agent**、**NanoBot** 处于此阶段。项目有明确的重写或目标（如 IronClaw 的 Reborn 分支，Hermes Agent 的安全扫荡），社区活动以 Bug 修复、测试和性能优化为主。
- **用户交互打磨**：**LobsterAI**、**NanoClaw**、**NullClaw** 处于此阶段，社区活动主要围绕集成功能修复、UI 细节打磨和终端体验优化，旨在提升“开箱即用”的体验。
- **战略沉寂**：**PicoClaw**、**ZeptoClaw**、**TinyClaw**、**Moltis** 处于低活跃或无活动状态，可能是处于开发休眠期或社区维护力量不足。

**7. 值得关注的趋势信号**

- **“会话状态”是下一阶段的核心技术壁垒**：几乎所有活跃项目都报告了与之相关的 Bug。这提示开发者，如果不能解决 Agent 记忆的可靠性和一致性，那么再多的工具和功能也是空中楼阁。**投资于会话状态管理与持久化的成熟方案，是所有 Agent 框架开发者的必修课。**
- **安全正从“可选项”变为“必选项”**：NanoBot 和 NanoClaw 报告的安全漏洞不再仅仅是理论威胁，而是有实际攻击场景的 CWE。**“代理安全”是 Agent 应用从原型走向生产环境的最后一块拦路石。**
- **MCP 协议影响力持续扩大**：ZeroClaw 对 MCP 的积极集成，预示着以“模型能力”为中心的对标标准正在成型。**将工具、资源和上下文按 MCP 标准结构化的架构，将具备更强的长期互操作性和通用性。**
- **社区开始关注“原生交互手感”**：从 CLI 方向键到 UI 导航栏，再到 Mac 快捷键的适配，开发者不再满足于“功能能用”，开始追求“交互优雅”。**面向最终用户的产品化打磨，正成为开源项目获得社区好评的关键。**

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，这是根据您提供的 NanoBot 项目数据生成的 2026-06-30 项目动态日报。

---

## NanoBot 项目动态日报 | 2026-06-30

### 1. 今日速览

项目今日活跃度较高，尤其在 **Bug 修复** 和 **性能优化** 方面进展显著。社区提交的 32 个 PR 中，大量集中在修复流式处理、执行沙箱和配置迁移等关键环节的问题，显示出社区对稳定性的关注度提升。虽然无新版本发布，但上游多个重要的 `fix` 和 `feature` PR 已进入开放状态，预计下一版本将包含显著的稳定性改进和新特性。总体来看，项目正处于 **密集的 bug 修复与功能打磨期**。

### 2. 版本发布

无

### 3. 项目进展

今日共有 **10 个 PR** 被合并或关闭，主要集中在功能推进和缺陷修复上。

- **核心功能推进**：
    - **[#4293] [bug, enhancement] fix(agent): add pending_queue to process_direct for subagent result injection** - 该 PR 修复了直接调用时子代理结果无法正确注入的问题，是提升框架稳定性的重要一步。`PR#4293`
    - **[#4502] [enhancement, feature] Add gateway webhook triggers** - 引入了网关级 Webhook 触发器功能，为集成外部系统提供了更便捷的入口。`PR#4502`

- **稳定性与代码健康**：
    - **[#4578] [enhancement, provider, valid] feat(providers): support provider-scoped proxy config** - 支持按 Provider 独立配置代理，增强了网络环境适配性。 `PR#4578`
    - **[#4573] [fix] fix(cli): allow oauth login to be/set main provider** - 修复了 OAuth 登录后无法自动成为主 Provider 的体验问题，简化用户初始设置流程。 `PR#4573`

**结论**：项目在修复 Agent 运行机制的底层问题（如子代理结果注入）和扩展网关集成能力上取得了实质性进展。这些 PR 的合并将直接提升系统的可靠性和易用性。

### 4. 社区热点

今日社区讨论最热烈的议题主要集中在 **“超轻量级”项目定位与实际依赖的矛盾** 以及 **上下文缓存失效导致性能下降** 的问题上。

- **关于项目轻量级定位的讨论 (#660)**
    - **链接**: `Issue #660`
    - **热度**: 评论 15 条，获赞 5 次。
    - **核心诉求**: 用户 `besoeasy` 指出，项目自称“超轻量级”，但 `Dockerfile` 却同时依赖 Python 和 Node.js，这与轻量级理念相悖。
    - **分析**: 这反映了社区对项目核心卖点的审视。虽然该 Issue 已于早期（2026-02-14）创建并于今日关闭，但它揭示了项目在宣传与技术实现间的潜在张力。这可能是一个长期存在的“技术债务”讨论，维护者或需在未来考虑更轻量的运行时方案。

- **关于上下文缓存失效的 Bug 讨论 (#4222)**
    - **链接**: `Issue #4222`
    - **热度**: 评论 3 条。
    - **核心诉求**: 用户 `imkuang` 报告了一个严重的性能 Bug，指出 `max_messages` 截断和“微压缩”（microcompact）机制持续导致消息前缀变化，从而破坏了提示/前缀缓存，导致每次请求都需重新计算。
    - **分析**: 这是一个技术上的高价值讨论。对于依赖 LLM API 的项目，缓存失效直接意味着成本和延迟的增加。社区对底层性能问题的关注，表明用户已进入深度使用阶段，对效率有较高要求。

### 5. Bug 与稳定性

今日报告了 **3 个 Bug**，其中 **2 个已有对应的修复 PR**，显示出社区响应迅速。

- **严重 (Critical)**:
    - **[#4595] Bug: apply_final_call_ids overwrites correct tool_call ids for non-file-edit tools, causing permanent session poisoning**
        - **链接**: `Issue #4595`
        - **问题描述**: 流式编辑追踪器错误地覆盖了非文件编辑工具的 `tool_call.id`，导致会话数据被“投毒”，后续所有与此工具相关的调用都会失败。
        - **修复状态**: 已有 **`PR #4596`** 针对此问题提出修复。 `PR#4596`
    - **[#4222] [bug] max_messages truncation and microcompact continuously invalidate prefix/prompt caching**
        - **链接**: `Issue #4222`
        - **问题描述**: 上下文管理机制导致消息前缀持续漂移，完全破坏了提示/前缀缓存，增加了 API 调用成本和延迟。
        - **修复状态**: 暂无关联修复 PR。

- **中等 (Medium)**:
    - **[#4592] ExecTool path extraction misses absolute paths after equals sign**
        - **链接**: `Issue #4592`
        - **问题描述**: 当 `restrictToWorkspace` 启用时，shell 命令的路径提取正则无法识别 `=` 后的绝对路径（如 `--output=/etc/passwd`），导致安全沙箱被绕过。
        - **修复状态**: 已有 **`PR #4594`** 针对此安全漏洞提出修复。 `PR#4594`

### 6. 功能请求与路线图信号

今日收到 **2 个新功能请求**，且均有对应的 PR 在开发中，预示这些功能可能被纳入下一版本。

- **请求**：**自动推理努力级别升级（Automatic reasoning effort escalation）** `Issue #4419`。
    - **诉求**: 用户希望在 Agent 无法解决问题时，自动提升模型的“思考深度”（reasoning effort），而非手动配置。
    - **关联 PR**: `PR #4291` [feat(spawn): allow subagents to use configurable model presets] 允许子代理使用不同的预设模型，这与自动升级思路部分契合，可用于低级任务和高级推理任务的分离。 `PR#4291`
- **请求**：**为子进程支持 conda 虚拟环境** `Issue #4580`。
    - **诉求**: 用户在 `exec` 子进程的实际使用场景中，需要虚拟环境支持。
    - **关联 PR**: `PR #4544` [fix, security] 和 `PR #4594` [fix, security] 都涉及 exec 行为的改进，虽然未直接解决 conda 环境问题，但表明维护者正在重构 exec 模块，为后续增加环境支持创造了条件。

### 7. 用户反馈摘要

- **正面反馈（隐含）**:
    - 社区对性能优化非常积极，`PR #4588` 和 `#4581` 均围绕“减少上下文使用以降低成本”提出方案，这直接回应用户在 **`Issue #4222`** 中关于缓存失效导致成本增加的痛点。
- **负面/痛点反馈**:
    - **“超轻量级”名不副实**: 用户 `besoeasy` 在 `Issue #660` 中对项目的轻量级定位表示质疑，这是对项目描述可信度的潜在声誉风险。
    - **会话稳定性问题**: 用户 `MadSkittles` 在 `Issue #4595` 中描述的“会话投毒”问题非常严重，直接导致 Agent 行为异常，这是一个影响核心体验的硬伤。
    - **安全边界绕过**: 用户 `axelray-dev` 在 `Issue #4592` 中发现了安全沙箱的绕过方式，表明 `restrictToWorkspace` 功能尚不完善。

### 8. 待处理积压

- **长期开放的重要 Issue**:
    - **[#4419] Feature: Automatic reasoning effort escalation** - 创建于 2026-06-20，已有 4 条评论，0 赞。这是一个有价值的功能请求，但目前没有直接的实现 PR，可能需要维护者评估并与 `PR #4291` 的子代理模型预设功能结合考虑。 `Issue #4419`
- **长期开放的重要 PR**:
    - **[#4291] feat(spawn): allow subagents to use configurable model presets** - 创建于 2026-06-11，截至今日仍在开放状态。该 PR 思路清晰，但讨论较少，可能需要更多社区测试或维护者最终审核。 `PR#4291`

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，这是为您生成的 Hermes Agent 项目动态日报。

---

# Hermes Agent 项目动态日报 — 2026-06-30

## 1. 今日速览

今日项目活跃度极高，社区提交了 50 条 Issue 和 50 个 PR，但核心贡献者合并/关闭量较少（5个），积压趋势明显。代码库中暴露出一系列由 `ooiuuii` 主导提交的、针对各组件（Signal、Discord、微信等）HTTP 响应体无限制读取的安全与稳定性 Bug，表明社区正在进行一次系统性的安全审计。同时，涉及“对话上下文压缩导致桌面渲染器崩溃” ( #55191 ) 和“记忆容量饱和导致无响应” ( #42405 ) 的 Bug 报告表明，核心用户体验方面的稳定性问题依然存在。

## 2. 版本发布

*无新版本发布。*

## 3. 项目进展

今日合并/关闭的 PR 主要集中在 bug 修复和安全加固方面：
- **`#55266` [已关闭]**: 修复了 Windows 8.3 短文件名导致的测试失败问题，提升了平台兼容性。
- **`#55249` [已关闭]**: 为 Signal JSON-RPC 响应增加了 body 大小限制（16 MiB），防止因畸形响应导致的内存耗尽，这是一个重要的安全修复。
- **`#55251` [已关闭]**: 修复了网关代理模式下，对上游非 200 状态码的错误响应体读取无限制的问题，同样为安全加固。
- **`#50179` [已关闭]**: 修复了 Codex 模式下的持久化问题，确保桌面端/TUI在刷新后能保留助手回复。
- **`#55212` [已关闭]**: 由作者自行删除。

## 4. 社区热点

今日社区讨论的热点呈现出两种不同的趋势：

- **“大”特性的长期讨论 (#5257)**: 拥有最多评论（13条）和最高 “👍” （18个）的 Issue #5257，讨论了将 ACP（代理客户端协议）客户端通用化，以实现多代理 CLI 编排。这反映了核心用户对 Hermes Agent 作为“代理编排者”这一高级用例的强烈兴趣。

- **“小”Bug的集中爆发**: 大量由用户 `ooiuuii` 提交的、关于各平台网关及工具组件“无限制读取响应体”的 Bug (如 #55211, #55274, #55279, #55284, #55296 等) 获得了关注。虽然单个评论不多，但问题高度集中，且用户 `liuhao1024` 和 `Stoltemberg` 迅速提交了针对性的修复 PR (如 #55299, #55298, #55300)，显示出社区在安全稳定链上的高效协作。这暗示着 **一次社区驱动的安全扫荡行动正在进行中**。

## 5. Bug 与稳定性

今日报告的 Bug 按严重程度排列如下：

- **P1 - 严重挂起/无响应**:
    - **`#42405`**: [Bug]: 记忆容量饱和导致 `replace` 重试循环，代理最终无响应（静默挂起）。 *无关联 Fix PR。* [链接](https://github.com/NousResearch/hermes-agent/issues/42405)
- **P2 - 功能错误/数据丢失风险**:
    - **`#35876`**: fix(vision): Gemini 配额错误时，回退链静默失败，因 `_resolve_single_provider` 参数回归。 *无关联 Fix PR。* [链接](https://github.com/NousResearch/hermes-agent/issues/35876)
    - **`#24039`**: 辅助回退链使用硬编码列表而非用户配置的 `fallback_providers`。 *无关联 Fix PR。* [链接](https://github.com/NousResearch/hermes-agent/issues/24039)
    - **`#49242`**: Windows: WhatsApp 网关和桌面更新程序应优先使用 Hermes 管理的 Node/npm。 *无关联 Fix PR。* [链接](https://github.com/NousResearch/hermes-agent/issues/49242)
    - **`#51560`**: Bug: `fallback_providers` 作为 JSON 字符串存储时，回退链静默清空。 *无关联 Fix PR。* [链接](https://github.com/NousResearch/hermes-agent/issues/51560)
    - **`#55071`**: 网关聊天清理器泄露 `unexpected status 401 Unauthorized` 认证信息。 *无关联 Fix PR。* [链接](https://github.com/NousResearch/hermes-agent/issues/55071)
    - **`#55265`**: [Bug]: Telegram 论坛主题的定时投递被静默忽略。 *无关联 Fix PR。* [链接](https://github.com/NousResearch/hermes-agent/issues/55265)
- **P3 - 稳定性/功能问题**:
    - **`#55191`**: macOS桌面端：当对话达到~128K token压缩阈值时渲染器崩溃。 *无关联 Fix PR。* [链接](https://github.com/NousResearch/hermes-agent/issues/55191)
    - 大量由 `ooiuuii` 提交的关于各组件（BlueBubbles, Signal, Discord, Telegram, 微信）无限制读取响应体的问题。多数已有对应的 Fix PR (如 #55249 已关闭, #55298, #55299 开放中)。

## 6. 功能请求与路线图信号

- **多代理 ACP 客户端编排 (#5257)**: 这是一个高度活跃且受欢迎的“大”特性，但 `needs-decision` 标签表明核心团队尚未决定是否采纳，短期内难以落地。
- **富电子表格技能 (#4438)**: 用户需要结构化的 Excel/CSV 处理能力（基于 `openpyxl`, `pandas` 的抽象层）。这是一个实用性很强的功能请求。
- **实验性功能**:
    - **`#55287`**: 桌面App增加可配置的聊天宽度。这是一个小型但有价值的 UI 增强。
    - **`#55233`**: 增加配置项以禁用 trigram FTS 索引，防止 `state.db` 过度膨胀。对于生产环境用户是重要的存储优化。
    - **`#55267`**: 支持从外部 shell/CLI 将工作线程 Kanban 卡片从 `running` 推进到 `review` 状态。这体现了社区对复杂工作流的追求。

**代码迹象**: 多个 PR (如 #55280，用于修复 `reasoning_effort` 传递问题) 表明社区正在积极解决推理配置在自定义提供商中被静默丢弃的可用性问题。

## 7. 用户反馈摘要

- **痛点**:
    - **稳定性**: 用户在长时间对话后遇到严重的界面冻结 (#55191) 和“静默挂起” (#42405) 问题，严重影响使用体验。
    - **配置复杂**: `fallback_providers` 的配置存在缺陷，以 JSON 字符串形式输入会导致静默失败 (#51560, #24039)，让用户感到困惑。
    - **平台兼容性**: macOS 和 Windows 平台 (特别是 Windows) 持续存在特定的 Bug，如路径问题和 Node.js 版本问题 (#49242)。
- **使用场景**:
    - **资深用户**: 尝试将 Hermes 作为**生产环境网关**运行 (如 #43196 中的 `systemd` 服务设置)，对稳定性和后台任务（定时投递）有很高要求。
    - **开发者/集成者**: 活跃贡献代码，修复 Bug，并尝试用 ACP 协议构建**多代理编排**系统 (#5257)。
- **满意度**:
    - 社区对 Bug 的响应和修复速度普遍是正向的，例如 `ooiuuii` 提交问题后很快便有修复 PR。这表明项目社区生态的健康。

## 8. 待处理积压

- **`#35876`**: (P2) Gemini 视觉回退链参数回归问题，已提出近一月，至今无有效处理或进展，可能会影响使用 Gemini 作为主力模型的用户。
- **`#24039`**: (P2) 辅助回退链设计缺陷，需核心开发人员介入决策如何统一两个回退系统。
- **`#4438`**: (P3) 富电子表格技能，虽然优先级不高，但这是一个提升核心能力的好机会，值得在路线图中讨论。
- **`#43196`**: (P3 - 已关闭) 持久化服务下的 Dashboard 卡死问题。虽然已关闭，但作为社区维护者应关注该解决方案是否能被广泛验证，以防复发。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，这是为您生成的 PicoClaw 项目动态日报。

---

# PicoClaw 项目动态日报 | 2026-06-30

## 1. 今日速览

过去24小时内，PicoClaw 项目活跃度处于**中等偏低**水平，未发布新版本或完成 PR 合并。Issues 方面，社区讨论集中在功能请求（如新增网关）和特定平台的 BUG 上；PR 方面，有 3 个待合并的功能分支，其中涉及 AWS Bedrock 提示缓存和 Token 用量追踪的 PR 具有较高的实用价值。项目整体推进速度略显缓慢，但关键功能开发仍在进行中。

## 3. 项目进展

今日没有 PR 被合并或关闭。目前有 3 个功能分支处于待合并状态，它们分别指向了不同的增强方向：

- **[PR #3063] feat: add deltachat gateway** (待合并): 该 PR 旨在为 PicoClaw 添加 DeltaChat 网关支持，这将扩展 PicoClaw 与联邦通信协议生态的集成能力。
- **[PR #3163] feat(bedrock): leverage Converse prompt caching via cache points** (待合并): 此 PR 利用 AWS Bedrock Converse API 的提示缓存功能，通过显式设置缓存点，可显著降低长上下文对话的推理成本和延迟，对使用 Bedrock 的用户是一大性能优化。
- **[PR #3156] feat(pico): emit per-turn LLM token usage on finalized message** (待合并): 此 PR 增强了内部通信协议，可在每次回复完成后输出该轮对话的 Token 消耗详情，为下游应用（如用量监控、成本核算）提供了关键数据。

尽管今日无合并，但上述三个 PR 的推进预示着项目在**联邦通信支持、性能优化和可观测性**方面的持续改进。

## 4. 社区热点

社区讨论热度最高的议题是**对更多通信网关的需求**。

- **#3093 [Feature] I need SimpleX or tox** (4条评论): 该 Issue 连续多日活跃，用户明确表达了希望增加 **SimpleX**、**Wire** 或 **Tox** 等端到端加密通信协议作为聊天网关的诉求。这与已存在 21 天的待合并 PR **#3063 (add deltachat gateway)** 形成了呼应，表明社区对扩展 PicoClaw 的去中心化、隐私友好型通信能力有强烈兴趣。

链接: [Issue #3093](https://github.com/sipeed/picoclaw/issues/3093)

## 5. Bug 与稳定性

今日报告了 1 个新的 BUG，同时有 1 个 BUG 已被关闭。

**待处理 BUG (中优先级):**

- **[BUG] #3153: Volcengine Doubao Seed tool calls occasionally leak as <seed:tool_call> text** (新开, 1条评论): 当使用 `doubao-seed-2.0-pro` 模型时，工具调用偶发失败，模型直接返回原始 XML 格式的调用指令而非执行。这会导致用户体验严重降级，属于需要尽快定位的中等严重性 BUG。
  - 链接: [Issue #3153](https://github.com/sipeed/picoclaw/issues/3153)

**已关闭 BUG:**
- **[BUG] #3090: Panel does not work on Safari on iOS versions below 16.4** (已关闭): 该问题已得到解决或标记为已完成，修复了在旧版 iOS Safari 上的兼容性问题。

## 6. 功能请求与路线图信号

用户提出的功能请求主要集中在**通信协议扩展**上。

- **新网关请求**: `#3093` 明确请求增加 **SimpleX**、**Wire** 或 **Tox** 网关。考虑到项目已有 `#3063` 的 DeltaChat 网关 PR 在等待合并，表明“扩展通信层”很可能成为下一个版本的重点方向之一。

- **性能与监控信号**: 待合并的 PR `#3163` (Bedrock 缓存) 和 `#3156` (Token 用量) 代表了项目在**后台性能优化**和**用户可观测性**方面的内部路线图信号，这些通常与大型语言模型服务相关的企业级或高级用户需求密切相关。

## 7. 用户反馈摘要

从 Issues 评论中可提炼出以下用户反馈：

- **痛点/需求**: 用户`Damian-o2`对 **SimpleX** 等端到端加密通信协议有明确需求（`#3093`），显示出对隐私保护的高度关注。
- **使用场景问题**: 用户`ms8great`报告了在使用 **Volcengine Doubao** 模型时遇到的工具调用失败问题（`#3153`），这直接影响了 AI 自动化任务的可靠性，是该用户场景下的核心痛点。
- **平台兼容性**: 已关闭的 Issue `#3090` 反映了用户在使用 **iOS Safari** 等特定环境时遇到的界面问题，虽然已修复，但长期来看，移动端及 Webkit 内核的兼容性仍是需要持续关注的方向。

## 8. 待处理积压

以下 Issue 和 PR 已存在较长时间且未获得实质性回复或合并，建议维护者优先关注：

1.  **Issue #3093 [Feature] I need SimpleX or tox** (已存在 20 天, 4条评论): 该功能请求讨论度高，且与待合并的 PR `#3063` 方向一致。维护者应评估社区对此类网关的总体需求，并考虑是否合并 `#3063` 或开启新的实现。
    - 链接: [Issue #3093](https://github.com/sipeed/picoclaw/issues/3093)

2.  **PR #3063 feat: add deltachat gateway** (已存在 22 天, 待合并): 该 PR 已存在超过三周，至今未被合并或关闭。无论决定是否合并，都应给予作者`trufae`明确的反馈，避免社区贡献者长期等待。
    - 链接: [PR #3063](https://github.com/sipeed/picoclaw/pull/3063)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，这是根据您提供的 NanoClaw 项目数据生成的 2026-06-30 项目动态日报。

---

# NanoClaw 项目动态日报 | 2026-06-30

## 1. 今日速览

项目活跃度中等偏高，虽然 Issue 无新动向，但 Pull Request (PR) 活动密集，共有 7 条更新。核心社区正积极进行**渠道功能扩展**（Discord 适配器）、**关键安全修复**（符号链接攻击）和**用户体验优化**（新代理默认提供者继承、设置流程改进）。尽管没有新版本发布，但待合并的 5 个 PR 表明项目在多个维度均有实质性推进，健康度良好。

- **活跃度**：⭐⭐⭐（3/5）
- **核心关注**：安全性、渠道扩展、用户体验

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并的 2 个 PR 解决了特定场景下的关键问题和功能迭代：

- 🚀 **语音播报 V3 功能落地**：PR #2883 (已关闭/合并) 将语音播报摘要从“一刀切”模式升级为 5 类意图分流（操作/静默/导航/技术状态/通知），提升了在复杂场景下的播报智能性，并加入了 `VOICE_SUMMARY_VERSION=off` 的运行时 kill-switch，便于用户自主控制。
- 🐛 **`ncl` CLI 工具修复**：PR #2882 (已关闭/合并) 修复了 `ncl messaging-groups create` 命令因数据库 `instance` 列约束导致创建失败的问题，保障了命令行工具的可用性。

这些合并标志着项目在**智能语音交互**和**命令行工具稳定性**上取得了明确进展。

## 4. 社区热点

今日讨论最活跃的 PR 均为功能扩展类，反映了社区对**多平台支持**的强烈需求：

- **#2884 [OPEN] feat(discord): add Discord channel adapter**：此 PR 引入了完整的 Discord 渠道适配器，并修复了 Discord DM 审批路由问题。这是社区呼声很高的功能，标志着向 Slack 之外的另一个主要聊天平台扩展迈出重要一步。
  - 链接：[PR #2884](https://github.com/qwibitai/nanoclaw/pull/2884)

- **#2885 [OPEN] fix(setup): offer Slack Socket Mode in the guided setup flow**：此 PR 的核心诉求是将已经完成的 Slack Socket Mode 功能合并到主分支的引导式设置流程中。这反映了用户在实际部署中遇到的痛点——部署过程体验不完善，社区正在推动使其更加顺畅。
  - 链接：[PR #2885](https://github.com/qwibitai/nanoclaw/pull/2885)

## 5. Bug 与稳定性

今日报告的 Bug 修复 PR 中，有一个**严重安全漏洞**值得关注：

- 🔴 **严重 | 路径遍历注入攻击 (CWE-59, CVE关联)**：PR #2880 修复了一个真实的安全漏洞。当 agent 容器被攻击者控制时，攻击者可在容器内创建符号链接指向宿主机敏感文件，诱使宿主机写入，从而实现任意文件写入。此 PR 从文件写入的“源”和“目标”两端进行了加固，对生产环境部署的用户至关重要。
  - 状态：有 fix PR #2880 (待合并)
  - 链接：[PR #2880](https://github.com/qwibitai/nanoclaw/pull/2880)

- 🟡 **中等 | 新渠道注册的 Agent 继承默认 Provider 错误**：PR #2886 修复了用户在首次连接聊天频道并选择“连接新代理”时，该代理总是使用内置默认提供者（Claude）而非已安装提供者的问题，避免了单提供者部署场景下的 401 错误。这直接影响用户初次配置的体验。
  - 状态：有 fix PR #2886 (待合并)
  - 链接：[PR #2886](https://github.com/qwibitai/nanoclaw/pull/2886)

## 6. 功能请求与路线图信号

基于今日的 PR 活动，以下功能有较大概率被纳入下一版本：

- **Discord 渠道适配器**：PR #2884 的开放，表明该项目即将成为多平台（Slack + Discord）的 AI 助手，路线图信号非常明确。若合并，将是 Q3 的一个重大里程碑。
- **Slack Socket Mode 的正式支持**：PR #2885 致力于将 Socket Mode 真正带入用户侧，这不仅是功能完善，也是对用户部署便利性诉求的直接回应。
- **OpenCode 兼容仪表盘**：PR #2871 引入了一个新的 “dashboard pusher”，可将项目状态快照推送至专门的仪表盘服务器，并声明支持 OpenCode 规范。这暗示项目可能在探索更标准化的监控或可视化方案。

## 7. 用户反馈摘要

从 PR 的描述和动机中，可以提炼出以下用户痛点和使用场景：

- **部署与配置**：用户（尤其是非开发者）在设置聊天渠道（如 Slack）时，希望流程更简单、更自动，无需手动处理 Webhook 等等复杂概念。“Socket Mode 引导流程缺失”是一个明确的反馈信号。
- **健壮性与安全**：用户对生产环境的稳定性有较高要求。PR #2886 的单提供者 401 错误和 PR #2880 的容器内安全防范，都揭示了真实用户在生产部署中遇到的阻碍。
- **智能决策需求**：PR #2883 的意图分流功能，说明用户不仅需要语音播报，更需要智能过滤，如跳过代码块和长表格，突出行动项，体现了对高价值信息的筛选需求。

## 8. 待处理积压

目前暂无长时间未响应的关键 Issue 或 PR。今日活动的 5 个待合并 PR 是社区重点关注对象，建议维护者尽快 Review 并整合。

- **安全修复**：**PR #2880** 涉及重大安全漏洞修复，建议**优先评审并合并**。
  - 链接：[PR #2880](https://github.com/qwibitai/nanoclaw/pull/2880)
- **核心体验修复**：**PR #2886** 影响新用户的首次配置体验，建议优先处理。
  - 链接：[PR #2886](https://github.com/qwibitai/nanoclaw/pull/2886)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是根据 NullClaw (github.com/nullclaw/nullclaw) 项目在 2026-06-30 的实时数据生成的日报。

---

# NullClaw 项目动态日报 | 2026-06-30

## 1. 今日速览

项目本日活跃度中等，主要动力来自社区贡献者实施的“功能性修复”。过去24小时内，**4个关键Pull Requests** 得到积极处理，其中1个关于终端交互体验的“方向键支持”功能PR从`#960`的修复演变为`#970`的正式提交，这一反复显示了用户对交互体验的严苛要求。**核心功能改进**（原生工具调用支持流式传输）的PR `#971` 目前处于开放待审查状态，值得关注。此外，依赖更新PR `#956` 已长期搁置，显示CI维护可能存在积压。**无新Bug报告**，项目稳定性表现良好。

## 2. 版本发布

无

## 3. 项目进展

今日有一个重要PR完成合并/关闭，标志着项目在用户交互层面向前迈进了一步。

- **`#960` [CLOSED] fix(cli): handle arrow keys in agent REPL**
  - **摘要**: 该PR（已于6月17日创建）今日被关闭，并最终被新的`#970` PR所取代。它旨在为交互式 `nullclaw agent` 添加无分配的行编辑器，支持方向键、历史导航、光标移动等基础操作，解决了原生终端使用体验问题。
  - **链接**: [PR #960](https://github.com/nullclaw/nullclaw/pull/960)

- **`#970` [OPEN] fix(cli): handle arrow keys in agent REPL**
  - **摘要**: 这是对`#960`的迭代改进版本，以更完善的方式实现了相同功能。它引入了POSIX原始模式输入，确保代理REPL能真正处理方向键等序列，而非打印乱码。该PR目前正在等待合并。
  - **链接**: [PR #970](https://github.com/nullclaw/nullclaw/pull/970)

**项目向前迈进评估**: 通过关闭老旧的`#960`并提交更完善的`#970`，项目在 **CLI 用户体验打磨** 上取得了实质性进展。这通常意味着团队正在从“功能可用”向“体验流畅”过渡。

## 4. 社区热点

今日无特别活跃的讨论或高评论数Issue。但以下PR值得关注：

- **`#971` [OPEN] feat(streaming): native tool calls during SSE streaming**
  - **热度分析**: 该PR虽然没有评论，但其**技术重要性**使其成为今日社区潜在的热点。它解决了一个核心矛盾：在SSE流式传输期间，如何让支持原生工具的提供商能够正确发出工具调用。
  - **背后诉求**: 开发者希望 `nullclaw` 在与支持流式工具调用的LLM提供商（如某些新兴模型）协作时，能够获得更自然、更高效的执行路径，避免降级为低效的“提示注入”格式。这代表了用户对 **高性能、原生API集成的需求**。
  - **链接**: [PR #971](https://github.com/nullclaw/nullclaw/pull/971)

## 5. Bug 与稳定性

本日无新 Bug 或崩溃报告。项目在稳定性方面保持良好态势。

## 6. 功能请求与路线图信号

- **PR `#971` 已是明确的功能请求/特性实现**: 该PR直接实现了“流式传输中的原生工具调用”。如果它被合并，将成为下一版本（如 `v2.x`）中的关键特性，显著提升与特定提供商（如Anthropic、部分提供原生工具的模型）的兼容性和性能。
- **CLI 交互增强（`#970`）**: 虽然不是全新的功能，但代理REPL的交互增强预示着项目正在将终端用户体验提升到更专业的层级。这可能是未来推出更多高级CLI功能（如多行编辑、语法高亮）的前兆。

## 7. 用户反馈摘要

由于今日无用户评论和Issue，无法直接提炼用户反馈。但通过PR内容可以推断出用户的核心痛点：

- **痛点1**: 在使用CLI代理交互时，无法使用方向键等基础终端功能（来自 PR #960/#970）。用户反馈强烈，以至于需要**迭代修补**。
- **痛点2**: 流式输出时，原生工具支持被降级为文本模板，导致效率低下（来自 PR #971）。这通常来自高级用户或API集成者。

## 8. 待处理积压

- **`#956` [OPEN] ci(deps): bump alpine from 3.23 to 3.24**
  - **摘要**: 这是一个由Dependabot自动发出的Docker基础镜像升级PR，已开放超过 **2周**（6月15日创建）。对于容器化部署的项目来说，基础镜像的更新通常涉及安全补丁和底层库优化。
  - **建议**: 若该PR无冲突，建议项目维护者尽快合并，以避免未来的安全扫描告警。若存在兼容性问题，也应明确说明并关闭。
  - **链接**: [PR #956](https://github.com/nullclaw/nullclaw/pull/956)

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是基于您提供的 IronClaw GitHub 数据生成的 2026-06-30 项目动态日报。

---

### IronClaw 项目动态日报 | 2026-06-30

**数据统计周期：** 2026-06-29 00:00 UTC - 2026-06-30 00:00 UTC

---

#### 1. 今日速览

今日项目活跃度极高，进入密集的 **Bug 修复与质量加固** 阶段。开发团队在 `Reborn` 重写分支上进行了大规模重构和测试工作，包括合并了大型集成测试框架、端口迁移 WebUI 2.0 的端到端测试覆盖、并推进了上下文管理和 Capability Policy 等关键特性。然而，来自 QA 团队的 Bug 报告数量激增，揭示了新架构中存在的诸多稳定性、一致性和权限相关的问题。社区贡献者主要集中在依赖更新和少量 Bug 修复上。总体而言，项目正处于**从功能开发向稳定性和质量验收过渡的关键时期**。

- **活跃度评估**：非常活跃，但风险较高。
- **Issues**：24小时内活跃14条，其中10条为新增报告，Bug类Issue占主导。
- **PRs**：24小时内处理50条，待合并30条，合并/关闭20条，表明团队正在进行积极的代码合并和修正。

---

#### 2. 版本发布

**无新版本发布。**


#### 3. 项目进展

今日合并/关闭了多项对项目具有重要推进意义的功能开发和基础架构 PR：

- **集成测试框架重大进展**：
  - **[PR #5392] feat(reborn): integration-test framework slices 3–9 (LibSql matrix, egress/HTTP matcher, inert process port, MCP/OAuth/refresh)** (已合并) 这是今天最重量级的 PR，由核心开发者 @henrypark133 贡献。它大幅扩展了 Reborn 的进程内集成测试框架，增加了对 LibSql 数据库矩阵的支持、HTTP 出口匹配器、MCP/OAuth/刷新令牌等关键能力的测试覆盖。这为后续的稳定性和可靠性提供了基石。
  - **[PR #5402] test(reborn-itest): shared-persistence group tests** (已合并) 在上一个 PR 基础上，增加了跨线程的端到端测试，覆盖了审批、认证失败、内存、秘密和扩展等产品适配器表面。

- **WebUI 2.0 功能端口与测试迁移**：
  团队（@ilblackdragon, @serrrfirat）合并了多个 `[codex]` 系列的 PR，将遗留 WebUI 的浏览器测试覆盖迁移到 Reborn WebUI v2 上，涉及认证、审批、聊天历史、频道配对等多个核心功能区域。这标志着 WebUI 2.0 的功能完整性在持续提升。
  - **[PR #5372] [codex] Port Reborn WebUI auth and approval UX coverage** (已合并)
  - **[PR #5371] [codex] Port Reborn WebUI chat history coverage** (已合并)
  - **[PR #5373] [codex] Port Reborn WebUI channel pairing flows** (开放中)

- **关键特性推进**：
  - **[PR #5149] feat(reborn): Context management — progressive tool disclosure** (开放中) 这是一个旨在解决模型调用超时问题的 XL 大小 PR。它通过“渐进式工具披露”机制，控制每次模型调用时发送的工具列表（从 91 个预装），从而减少 Token 消耗和延迟。

- **发布流程准备**：
  - **[PR #5311] chore: release** (开放中) 自动化 CI 发起的发布 PR 已准备就绪，包含了 `ironclaw_common` (0.5.0) 和 `ironclaw_skills` (0.4.0) 等库的**重大API破坏性变更**，预示着一个新版本的发布即将到来。

**结论**：项目在基础架构（测试、CI）和 WebUI 2.0 功能覆盖上取得了显著进展，为新版本的最终发布铺平了道路。


#### 4. 社区热点

由于 PR 评论数在数据中缺失，热点分析主要基于 Issues。

- **[Feature Request] #4776: Add global Always Allow setting for eligible tools** (已关闭)
  - **链接**：[Issue #4776](https://github.com/nearai/ironclaw/issues/4776)
  - **分析**：该 Issue 虽然今日被关闭，但此前获得了用户关注。它提出为符合条件的工具添加“始终允许”的全局设置。这反映了用户对于频繁的审批流程感到疲劳，希望获得更流畅、更少中断的自动化体验。此请求可能已在 `Reborn` 分支中得到解决。

- **[QA Bug Report] #5415: Multi-tool Google Sheets workflow fails with protocol violation** (新开)
  - **链接**：[Issue #5415](https://github.com/nearai/ironclaw/issues/5415)
  - **分析**：QA 报告的 **P1** 级别 Bug，描述了涉及 18-25 次工具调用的复杂 Google Sheets 工作流会因“协议违规”错误而失败。这表明 Reborn 架构在处理长链工具调用时的稳定性存在严重问题，是当前最紧急的技术挑战之一。

- **[QA Bug Report] #5417: Wrong skill activated for Hacker News search** (新开)
  - **链接**：[Issue #5417](https://github.com/nearai/ironclaw/issues/5417)
  - **分析**：P2 级别的 QA Bug，指出 Agent 的**技能选择逻辑**存在缺陷。用户要求搜索 Hacker News，却被错误地分配了“tech-debt-tracker”技能。这影响了用户体验，并暗示了意图分类或技能路由模块的回退机制存在问题。

**用户诉求分析**：当前社区和 QA 团队的核心诉求是**稳定性和可靠性**。即使用户得到了功能更新，但新功能（如多工具工作流、仪表盘 UI）在实际使用中屡屡出现阻塞性错误，严重影响了信心和体验。


#### 5. Bug 与稳定性

今日 QA 团队报告了多个 Bug，严重级别从 **P1** 到 **P3** 不等，集中在 Reborn 新架构上：

- **P1 (严重)**
  - [#5415] **Multi-tool Google Sheets workflow fails with protocol violation** - 多工具协同工作流失败。
    - **Fix PR**: 无。
  - [#5421] **Web search not zero-config, re-prompts for auth** - Web 搜索功能需要二次认证。
    - **Fix PR**: 无。

- **P2 (高)**
  - [#5417] **Wrong skill activated for Hacker News search** - 激活了错误的技能。
    - **Fix PR**: 无。
  - [#5416] **Incorrect Google connection state causes contradictory auth flow** - Google 连接状态显示错误导致认证流程矛盾。
    - **Fix PR**: 无。
  - [#5418] **Conversation messages appear in wrong order after tool activity** - 消息顺序错乱。
    - **Fix PR**: 无。
  - [#5419] **No option to rename an automation** - 无法重命名自动化任务，属于功能缺失。
    - **Fix PR**: 无。

- **P3 (中) 与其他**
  - [#5420] **Routine delivery target is global, not per-routine** - 自动化传递目标是全局性的，违反了用户预期。
    - **Fix PR**: 无。
  - [#5426] **[QA] Cannot create a routine: system drive is not available** - 创建自动化任务时系统驱动不可用，可能为环境配置问题。
    - **Fix PR**: 无。
  - [#5412] **[CLOSED] Log entry text is not selectable / copyable** - 日志不可复制。此Bug已由 **PR #5414** 修复并关闭。

**稳定性评估**：**差**。今天报告的 Bug 数量和质量都很高，尤其是 P1 级别的协议违规和 P2 级别的逻辑错误，表明 Reborn 架构在面向用户的流程交互上存在多个薄弱环节。不过，高频的 Bug 修复 PR (如 [#5423](https://github.com/nearai/ironclaw/pull/5423), [#5422](https://github.com/nearai/ironclaw/pull/5422), [#5406](https://github.com/nearai/ironclaw/pull/5406)) 也表明团队正在全力应对。


#### 6. 功能请求与路线图信号

- **多用户RBAC（角色权限管理）**: **[PR #5425](https://github.com/nearai/ironclaw/pull/5425)** 提出了一份关于“多用户 Capability Policy 收敛”的设计文档，旨在复用现有架构，避免引入新的层级。这与用户可能存在的多账号、多权限管理需求相关，可能会被纳入下一版本规划。
- **存储压力测试工具**：**[PR #5313](https://github.com/nearai/ironclaw/pull/5313)** 新增了一个存储压力测试工具，用于评估文件系统、LibSQL 和 Postgres 后端的性能。这表明团队在关注底层基础设施的健壮性，为未来更大的负载和更复杂的存储需求做准备。
- **Routine/自动化命名编辑**：Issue [#5419](https://github.com/nearai/ironclaw/issues/5419) 要求增加自动化重命名功能，这是一个明确的用户需求，很可能在后续的小版本更新中得到解决。


#### 7. 用户反馈摘要 (从 Issue 评论区提炼)

- **对“静默失败”的极度不满**：[Issue #5413](https://github.com/nearai/ironclaw/issues/5413) 作者(已关闭) 的评论强烈表达了其对“Reborn inline OAuth refresh 无声吞掉刷新操作”的沮丧，正是这种静默失败导致了 Issue #5378 诊断困难。作者要求“大声失败”。这揭示了用户对**故障诊断透明度**的极端重视。
- **对Agent行为不一致的困惑**：[Issue #5416](https://github.com/nearai/ironclaw/issues/5416) 的用户反馈了 Agent 在连接状态上的矛盾说法，先声称已连接，后又解释为“已安装但未激活”。这种不一致的行为会让用户感到**困惑和缺乏信任**。
- **自动化任务命名困扰**：[Issue #5419](https://github.com/nearai/ironclaw/issues/5419) 的用户指出，自动生成的名字往往过长、不清晰或被截断，且无法更正。这暴露了当前自动化功能的**用户体验细节打磨不足**。


#### 8. 待处理积压

- **Issue #3706: [OPEN] [size: XL] chore(deps): bump postcss, @remotion/cli** - 一个依赖更新 PR 已开放超过一个月，涉及前端构建工具，虽风险较低但长期未合并。
  - [链接](https://github.com/nearai/ironclaw/pull/3706)
- **Issue #4108: [OPEN] Nightly E2E failed** - 一个自动化 CI 报告了夜间端到端测试失败，已持续超过一个月，状态为开放，可能是一个长期存在的基建或测试稳定性问题。
  - [链接](https://github.com/nearai/ironclaw/issues/4108)
- **PR #5362: [OPEN] [size: XL] [codex] Harden Slack pairing activation flows** - 一个关于 Slack 配对流程加固的 XL 级 PR 已开放数日，仍在等待合并。
  - [链接](https://github.com/nearai/ironclaw/pull/5362)

---
**报告结束。**

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，根据您提供的LobsterAI GitHub数据，我为您生成2026年6月30日的项目动态日报。

---

# LobsterAI 项目日报 | 2026年6月30日

## 1. 今日速览

今日项目活跃度极高，单日PR合并/关闭数量达到39条，并有1个新版本（2026.6.29）发布，表明团队正在进行密集的迭代和问题修复。版本发布主要集中在**OpenClaw集成稳定性**和**Workspace/会话管理**的修复上。问题方面，社区活跃度中等，有4个新Issue被创建，但核心关注点仍集中在“执行结果窗口假死”和“任务预输入”等用户痛点上。整体项目健康度良好，正向功能演进和Bug修复并重的积极阶段。

## 2. 版本发布

**发布版本: LobsterAI 2026.6.29**
- **发布链接**: [查看详情](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.6.29)
- **核心更新内容**:
    - **OpenClaw稳定性提升**:
        - `fix(openclaw): route plugin approvals through permissions`: 修复了OpenClaw中插件审批的权限路由问题。
        - `fix(openclaw): keep agent bootstrap workspace separate from task cwd`: 修复了一个关键回归，该问题导致Agent的身份、个性及长期记忆文件（SOUL.md等）被错误地加载到用户项目目录中，而非Agent工作空间。
        - `fix(openclaw): preserve cron run follow-up history`: 修复了定时任务运行后，本地后续对话历史丢失的问题。
        - `fix(openclaw): preserve user turn cache stability`: 修复了OpenClaw用户轮次序列化缓存稳定性问题。
    - **Cowork（协作）UI修复**:
        - `fix(cowork): clean navigation rail previews`: 清理了对话导航栏的预览内容，使其更加清晰。
- **破坏性变更/迁移注意事项**: 本次发布为修复性版本，未明确指出破坏性变更。但建议用户在更新后，检查Agent的个性与记忆功能是否正常工作，特别是在使用OpenClaw执行任务时。

## 3. 项目进展

今日合并了超过30个重要PR，项目在以下方面取得了显著进展：

- **OpenClaw集成深度修复**:
    - **工作空间隔离**: 解决了Agent启动工作空间与任务当前工作目录混淆的问题 (`#2227`)，修复了Agent身份和长期记忆失效的根本原因。
    - **定时任务历史保存**: 确保了定时任务触发的对话历史能够被正确保存和恢复 (`#2220`)，提升了自动化任务的体验。
    - **插件生态完善**: 预装了OpenClaw的QQ和Discord即时通讯插件 (`#2198`)，并支持了升级后的IM插件安装 (`#2182`)，扩展了外部渠道接入能力。同时，还修复了NIM（网易云信）插件编译 (`#2186`) 和OAuth路由 (`#2221`) 等问题。
    - **存储与迁移**: 实现了旧版cron存储的自动检测与迁移 (`#2189`)，并优化了cron运行会话的同步逻辑 (`#2190`)，确保任务状态的一致性。
- **Cowork UI优化**:
    - **导航栏修复**: 进行了一系列关于对话导航栏（Conversation Rail）的修复，包括清理工具提示、居中对齐、宽度重置等 (`#2222`, `#2223`, `#2224`, `#2225`, `#2226`)，改善了用户在多会话间的导航体验。
- **文档更新**:
    - 更新了Agent仓库（Repository）指导文档 (`#2184`)，使其与当前架构保持一致，帮助开发者更好地理解和使用Agent功能。

## 4. 社区热点

- **#2079 执行结果窗口滚动到顶端会假死**
    - 链接: [Issue #2079](https://github.com/netease-youdao/LobsterAI/issues/2079)
    - 分析: 该Issue是当前最突出的性能问题报告。用户明确指出在2026.5.27版本中即可复现，且从创建至今（1个月）仍未解决。这表明该问题可能是一个顽固的UI渲染或组件生命周期Bug，涉及到底层滚动机制的实现，需要团队投入更多资源优先排查。

- **#2120 建议（任务预输入与UI布局）**
    - 链接: [Issue #2120](https://github.com/netease-youdao/LobsterAI/issues/2120)
    - 分析: 此Issue获得了较多评论，反映了用户对**任务执行连续性和UI美观度**的切实需求。用户提出的“预输入任务”功能与任务编排、流水线概念类似，是提升自动化效率的关键。对高分辨率屏幕（2560x1600）下UI布局（建议3列）的抱怨，也显示出当前UI适应性不足。

## 5. Bug 与稳定性

按严重程度排列：

- **严重**:
    - **`#2079` 执行结果窗口滚动到顶端会假死**：这是一个可复现的UI/UX性能问题，严重影响用户查看结果。状态：**OPEN，暂无关联修复PR**。
    - **`#2121` 重复输出文字大量消耗Token**：该Bug可能导致用户不必要的费用消耗和性能浪费。用户怀疑是Claw的问题。状态：**OPEN，需要开发者确认和定位**。

- **中等**:
    - **`#1389` 英文界面下，中文选项显示英文**：这是一个国际化（i18n）的局部遗漏问题，影响非中文用户的体验。
    - **`#1388` 邮箱配置测试连通性无响应**：该Bug会阻塞用户配置邮箱功能，导致功能不可用。

- **轻微**:
    - **`#1435` 创建自定义Agent时，名称过长超出弹框**：UI样式适配问题。

## 6. 功能请求与路线图信号

- **`#2131` 支持Hermes Agent计划**：用户询问是否计划集成Hermes Agent。目前无开发团队的官方回应。结合当前主要精力在稳定OpenClaw集成，Hermes的支持可能不在短期路线图内。
- **`#2120` 任务预输入**：用户建议借鉴WorkBuddy，允许在任务运行时预输入下一个任务。此需求与提升任务编排能力高度相关，**很可能成为未来迭代中“计划模式”或“任务队列”功能的原型**。
- **`#2081` 订阅积分月底清零**：这是一个关于计费模式的反馈。用户对“订阅积分月清”的模式表示不满。这属于商业模式决策，可能不会通过代码变更解决，但团队可能会在产品运营层面进行考量或对用户进行解释。

## 7. 用户反馈摘要

- **痛点**:
    - **稳定性**: “2026.5.27版本，执行结果窗口滚动到顶端会假死，现象能复现。” (#2079)
    - **费用顾虑**: “重复输出的文字是不是在大量吃我的token，造成token浪费?” (#2121)
    - **体验中断**: “脚本还在进行但监控停止了，有点影响开发。” (#2120)
- **使用场景**:
    - 用户 `nbjoe` 正在使用LobsterAI的“Claw”功能监控和执行数据获取脚本，这是一个典型的自动化数据处理和监控场景。
- **满意度**:
    - **不满意**: “我订阅的5500积分 还没用 月底直接清零了???  来搞笑的吧???” (#2081)，该评论情绪强烈，表达了用户对计费政策的不满。

## 8. 待处理积压

以下为一些长期未得到响应或解决的重要Issue，建议项目维护者关注：

- **`#2079` [OPEN - 严重] 执行结果窗口滚动到顶端会假死**: 创建于5月30日，至今已1个月且未有官方回复或关联PR。**优先级：极高**。
- **`#1388` [OPEN - 中等] 邮箱配置测试连通性无反应**: 创建于4月3日，是一个历史悠久的Bug，影响基础功能，需要尽快处理。
- **`#1390` [OPEN - 中等] 定时任务无法更新（偶现）**: 同样是4月3日创建的历史问题，影响定时任务的核心编辑功能，与本次发布的定时任务历史保存修复可能有关联，建议复现并检查是否已修复。
- **`#2131` [OPEN - 功能请求] Hermes Agent支持计划**: 虽然是非关键Bug，但作为社区提出的重要未来方向，建议官方给出一个明确的时间表或态度，增强社区信心。

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

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我已根据您提供的 CoPaw 项目数据，为您生成了 2026年6月30日 的项目动态日报。

---

# CoPaw 项目日报 - 2026年6月30日

## 1. 今日速览

今日社区活跃度极高，共产生 **79 条** Issues 和 PR 更新，显示出项目正处于高速迭代与社区反馈密集期。核心看点包括：(1) **稳定性与 Bug 修复**成为社区焦点，多个关于模型适配、工具调用数显、上下文管理的关键问题被提出，部分已有对应 PR 修复；(2) **v2.0.0-beta.1** 的发布验证任务正在进行中，标志着新版本架构已进入关键测试阶段；(3) 前端测试覆盖率显著提升，一系列针对核心模块的单元测试 PR 被提交，为项目质量提供保障。

## 2. 版本发布

无新版本发布。值得注意的是，发布验证 Issue `#5571` [OPEN] 显示 **QwenPaw v2.0.0-beta.1 (Beta)** 正在执行安装验证流程，预计将成为下一个重要里程碑。

## 3. 项目进展

今日项目在功能推进和测试覆盖上取得显著进展，以下为已合并/关闭的重要 PR：

- `#5515 [CLOSED]` **启用最新的聊天Beta版UI能力** - 合并了`@agentscope-ai/chat`的beta版本，为QwenPaw启用了新的聊天UI功能，提升了前端交互体验。
- `#5601 [CLOSED]` **向IM渠道推送工具护卫审批通知** - 修复了运行时重构后，第三方IM渠道（飞书、企微等）无法接收工具审批通知的问题，完善了通道功能。
- `#5614 [CLOSED]` **更新上下文管理文档** - 更新了关于Scroll策略的上下文管理文档，移除了旧的“背包”类比，使文档更清晰准确。
- `#5628 [OPEN]` **修复控制台工具结果卡片计数** - 针对 Issue `#5624` 提出的`glob_search`等工具结果数显示为1的Bug，提交了PR进行修复，使计数逻辑与输出面板对齐。

此外，在代码质量与测试方面，一个由 `hanson-hex` 主导的测试冲刺取得了巨大进展，总计提交了 **5 个** 前端和后端模块的单元测试 PR（`#5409`, `#5422`, `#5423`, `#5434`, `#5438`），覆盖了 Stores、Hooks、API 模块、定时任务等多个核心部分，共包含数百个测试用例。这体现了项目团队对稳定性的高度重视。

## 4. 社区热点

今日社区讨论主要集中在以下几个核心议题：

1.  **新模型适配与兼容性问题（热度最高）：**
    - `#5573 [OPEN]` **DeepSeek V4 thinking 模式在 OpenAI 兼容端点上的两类 400 错误** - 作者通过实际验证分享了针对特定中转站的 DeepSeek V4 模型报错修复方案。该Issue获得了社区关注，反映了用户对于非官方端点适配的强烈需求。
    - `#5505 [CLOSED]` **MiniMax-M3 图片安全审核错误被错误缓存** - 此问题精确地描述了一个“副作用”，即内容安全检查失败被错误地解释为模型能力缺失，并导致了后续请求的错误处理。该问题的关闭表明团队对此类边缘情况的响应速度。
    - `#5543 [CLOSED]` **函数定义类型为“null”导致第三方模型请求失败** - 一个看似微小的Schema问题，却能在特定第三方接口上“卡住”所有请求，体现了模型兼容性的复杂性。

2.  **用户体验与功能可用性：**
    - `#5555 [OPEN]` **最新版本越来越卡顿了** - 这是一个宽泛但强烈的负面反馈，可能是优化退化或内存泄漏的信号，需要团队重点关注并进行性能排查。
    - `#5624 [OPEN]` **工具调用结果卡片的计数始终显示 1** - 这个UI Bug虽然小，但严重影响用户对工具执行结果的感知，已被原作者在 `#5628` 中提交PR修复。

## 5. Bug 与稳定性

今日报告的Bug问题按严重程度排列如下：

- **高** `#5573 [OPEN]` **DeepSeek V4思考模式的400错误** - 严重影响非官方端点的用户使用，作者已给出了具体的修复分析，亟待官方评估。
- **高** `#5555 [OPEN]` **最新版本越来越卡顿** - 泛化性能下降，潜在回归问题，影响范围广。
- **高** `#5561 [OPEN]` **飞书渠道长回复收不到** - 渠道核心功能问题，影响用户基本使用。
- **中** `#5624 [OPEN]` **工具调用结果卡片计数为1** - 前端显示Bug，已有**PR #5628**修复，预计将在下个版本中合并。
- **中** `#5584 [OPEN]` **无法连接自定义的ascend-vllm模型** - 用户报告升级后出现回归，从“可用”变为“不可用”。
- **中** `#5587 [OPEN]` **Qwen-Image Tool 安装错误** - 特定工具的安装问题，阻止了该功能的使用。

## 6. 功能请求与路线图信号

用户请求的功能亮点和对项目路线图的潜在影响：

- **`#5342 [OPEN]` 工具结果大小硬性限制（防御上下文爆炸）** - 一个非常高级且关键的架构建议，旨在解决LLM调用失败时的风险累积。已有 **PR #5510** 尝试实现执行层的硬性限制。这很可能成为下一版本的核心安全特性之一。
- **`#5572 [OPEN]` 支持模型自动降级** - 多个用户（如 `#5527 [CLOSED]`）都表达了这一需求，表明在长任务/批处理场景中，模型的稳定性（限流、超时）是普遍的痛点。这一功能若能实现，将极大提升系统的鲁棒性。
- **`#5615 [OPEN]` 纯文本模型支持图片自动转文字** - 一个富有创意的功能请求，将多模态能力与纯文本模型结合，通过“视觉后备（Vision Fallback）”流程实现。这是一个可能改变用户模型选择策略的有趣方向。
- **`#5579 [OPEN]` 对话记录断点保存机制** - 用户因Agent执行重启命令导致对话丢失，提出了一个非常具体且重要的数据持久化需求，涉及“断点续传”功能，是对系统稳定性的深度要求。
- **`#5588 [OPEN]` 记忆搜索支持专用Reranker模型** - 提出引入“两阶段检索”来提升记忆精度，这是一个典型的“从能用到好用”的高级功能请求，体现了用户对更智能Agent的期待。

## 7. 用户反馈摘要

- **痛点：** 用户对非官方API端点的兼容性感到困扰，特别是当模型更新（如DeepSeek V4）或使用中转服务时，频繁遇到400错误。此外，飞书渠道的长消息限制是社区使用中的现实障碍。
- **使用场景：** 用户广泛使用工具（`glob_search`, `read_file`）进行文件操作，希望前端能准确反馈执行结果。用户也尝试在多Agent、长任务和批处理场景下使用CoPaw，并因此遇到稳定性、性能（卡顿）和模型降级等问题。
- **满意/不满意：** 社区对`#5505`号Issue（MiniMax图片审核）的及时关闭表示满意。然而，对于 `#5555` 提到的“越来越卡顿”以及 `#5573` 类的兼容性Bug，用户表达了明显的挫败感。用户在 `#5579` 中提出的“断点保存”需求，体现了对更高数据安全性和任务可靠性的期望。

## 8. 待处理积压

以下为相对长期未获响应或处于停滞状态，但可能具有重要价值或影响力的 Issue/PR：

- `#4873 [OPEN]` **[Bug]: 同时开两个subagent会导致主agent无限快速轮询** - 自6月1日提出，涉及核心的多Agent并发和连接控制问题，严重影响飞书渠道的使用体验。
- `#5296 [OPEN]` **feat(memory): make ADBPG REST-only with auto search** - 自6月18日提出，是一个重要的内存存储后端重构，意味着废除旧的SQL模式。该PR长期处于Open状态，其方向性变更可能需要更多讨论。
- `#5221 [OPEN]` **feat(plugins): add AgentScope middleware registration** - 自6月16日提出，引入插件化的中间件注册机制，是扩展架构的关键部分，但其较大的变更范围可能需要审慎评估。
- `#5442 [OPEN]` **fix(mission): integrate mission mode with Runtime v2** - 自6月23日提出，修复任务模式与新版运行时架构的脱节问题，关系到特定功能（Mission Mode）在v2下的可用性。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，根据您提供的 ZeroClaw 项目数据，现为您生成 2026年6月30日 的项目动态日报。

---

## ZeroClaw 项目动态日报 | 2026年6月30日

### 1. 今日速览

项目今日社区活跃度极高，24小时内产生了100条 (50 Issues + 50 PRs) 更新，呈高热状态。核心开发团队正密集推进 v0.8.3 版本的各项功能，尤其是在 WASM 插件运行时、MCP (Model Context Protocol) 集成、SOP (Standard Operating Procedures) 流程管理以及提供者兼容性修复方面。P1 级别的 Bug 报告和修复 PR 频繁出现，表明项目在追求快速迭代的同时，也面临着系统集成复杂度和稳定性方面的挑战。整体来看，项目处于“快速冲刺”阶段，功能建设与问题修复并行。

### 2. 版本发布

无。

### 3. 项目进展

在过去24小时内，共有 **10 个 PR** 被合并或关闭，但无特别重大的功能性合入。主要成果集中在问题修复和文档完善上：

- **兼容性修复**：
    - Fix(compatible): 为 Groq 等兼容提供者的原生工具调用结果消息中添加了 `name` 字段，修复了因缺少该字段导致的HTTP 400错误 (#8441)。
    - Docs(providers): 记录了 `max_history_messages` 硬性上限，以澄清运行时历史记录管理机制 (#8436)。
- **功能推进 (进行中)**：大量待合并的开放 PR 展示了社区正在推进的功能：
    - **MCP 集成**：实现资源作为上下文、固定和命名提示渲染功能 (#8508)。
    - **SOP 流程**：引入程序性记忆工作坊 (#8509)、文件系统 SOP 事件源 (#8461)、以及 GitHub Channel 的 SOP 入口 (#8504)。
    - **Inkbox 通道**：增加原生 Inkbox 通道（支持邮件、SMS、语音、iMessage）的 XL 级 PR (#8384)。

项目整体在 **MCP、SOP 和新通道集成** 方面迈出了重要一步，虽然大部分代码尚未合并，但社区贡献者已提交了初步实现。

### 4. 社区热点

- **[Bug #5600] 使用 kimi-code 提供者进行流式调用工具时 API 报错** (11条评论)
    - **链接**: [Issue #5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600)
    - **分析**: 这是一个持续了近3个月的严重Bug，社区给予了高度关注。核心问题是当 `thinking` 被启用时，Kimi 提供者未能正确返回 `reasoning_content` 字段，导致流式调用失败。此问题直接关联到特定模型的兼容性，影响面广，用户期待已久。

- **[Bug #8054] 系统提示中工具可用性与各入口点的按轮次有效工具不匹配** (9条评论)
    - **链接**: [Issue #8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054)
    - **分析**: 该问题揭示了系统内部的一个架构性缺陷：系统提示中告知模型“无可用工具”的信息，与通过不同入口（如WebSocket、网关）传递的实际可用工具不一致。这会导致推理模型（如OpenAI o1）在明明有工具可用时却拒绝调用。此问题被设为P1优先级，是当前“代理与工具交互”方面的核心待解决问题。相关的修复PR (#8496) 也处于开放状态，表明社区正在集中攻关。

### 5. Bug 与稳定性

今日报告的 Bug 中，S1（工作流阻塞）级别问题突出：

- **[S1] Telegram 通道无法配置** (#8505): 用户反映按照指引配置Telegram后，`channels doctor` 仍报告未配置，机器人无法响应。该问题直接影响新用户体验，需紧急排查。

- **[S2] `skills install/list/remove` 命令指向错误的数据目录** (#8334): CLI 命令的目标路径与多代理运行时加载的实际路径不匹配，导致多代理安装场景下的核心功能“拉取并使用技能”流程断裂。

- **[S2] 通道任务缺乏原生的“不回复”结果** (#8410): 用户希望某些定时任务在“无事可报”时保持静默，但当前系统仍会发送一条可见回复（如空消息或“NO_REPLY”字符串），造成噪音。这是来自社区的真实反馈，对精细化的任务管理有强需求。

- **相关修复 PR**:
    - **待合并**: 针对工具访问策略的修复 (#7960)、MCP 访问策略中央化 (#8496)、以及通道会话结束时正确触发hook的修复 (#8003) 等待合并，这些PR直接针对S2级别问题。

### 6. 功能请求与路线图信号

- **RFC: 电脑使用 (Computer-use) 支持** (#6909): 该RFC提议为ZeroClaw添加桌面GUI交互能力（截图、鼠标键盘控制），对标OpenAI Codex等能力。6条评论，风险等级标注为High，但被标记为P2优先级。这可能是下一个大版本中的重要特性，但需要解决安全性和资源消耗问题。

- **RFC: A2A 代理发现 (.well-known/agent-card.json)** (#7218): 这是一个面向未来的架构性功能，为实现多代理互操作和外部代理系统的集成奠定基础。虽然目前讨论热度不高，但它是项目走向“Agent生态”的关键步骤。

- **功能标签**：今日多个带 `feat` 标签的PR涉及 `inkbox` 通道、GitHub通道、SOP文件系统事件源和Telegram去抖功能。**SOP（标准操作程序）** 显然是当前社区建设的重点领域，已在多个PR中体现。

### 7. 用户反馈摘要

- **痛点**:
    - **配置体验不佳**: 用户反映 Telegram 通道配置后状态不一致 (#8505)，以及技能CLI命令与运行时行为脱节 (#8334)，表明文档和实际执行逻辑之间存在Gap。
    - **智能静默需求**: 用户抱怨Cron任务无法真正“沉默”，系统总是会发送包含“NO_REPLY”字样的消息，期望系统能区分“无消息”和“有消息但告诉用户无内容” (#8410)。
    - **工具调用不可预测**: 用户指出，系统提示会错误地告知推理模型“无可用工具”，而在实际请求中工具是存在的，这导致模型行为不符合预期 (#8054)。
    - **macOS 快捷键误导** (#7800): 用户反馈ZeroCode的快捷键帮助在macOS上存在误导，且某些操作在当前状态下无法到达，影响了Mac用户的使用体验。

- **使用场景**:
    - **定时自动化**: 用户希望使用Cron任务执行诸如“检查新邮件”之类的操作，并期望在无结果时保持安静 (#8410)。
    - **多代理部署**: 社区正在探索多代理安装模式，其中技能安装路径的不一致成为了阻碍 (#8334)。

### 8. 待处理积压

- **高风险 Issue**: **#6074** (Audit: 追踪在一次批量回滚中丢失的153个提交)。该问题已存在超过两个月，风险等级为High，但仍标注为P2。虽然这是历史遗留问题，但丢失的大量已审核代码可能在某个时刻引发未知的回归问题，应尽快安排审计与回收。

- **长期待修复 Bug**: **#2128** (Cron和心跳任务仍发送"NO_REPLY"文本)。从2月27日至今已持续4个月，虽然有一个P2的标签，但社区用户（#8410）再次反映了类似的痛点，说明原问题未能完全解决。建议优先合并或推进相关修复PR。

- **高风险未合并 PR**:
    - **#8003** (修复 `session_end` hook未调用的问题): 代码已就绪，但尚未合并。此问题是其他复杂交互流程的基础，延迟合入可能影响依赖此hook的功能（如SOP、授权审计等）。
    - **#7960** (限制 Pipeline 子工具执行策略): 一个S2级别的安全修复，已开放11天，等待合并。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*