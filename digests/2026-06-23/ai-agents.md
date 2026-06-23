# OpenClaw 生态日报 2026-06-23

> Issues: 265 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-23 00:28 UTC

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

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我将根据您提供的 OpenClaw 项目数据，生成一份结构清晰、数据驱动的项目动态日报。

---

# OpenClaw 项目动态日报

**报告周期：** 2026-06-22 ~ 2026-06-23
**数据来源：** github.com/openclaw/openclaw

---

## 1. 今日速览

OpenClaw 项目今日继续保持极高活跃度，社区协作与问题修复并行。**过去24小时内，Issues 和 PR 的更新总量超过 700 条**，表明项目正经历密集的迭代周期。尽管单日新发布的 PR 数量（500条）远超合并/关闭数量（78条），导致待合并 PR 积压至 422 条，但同时也有 87 个问题被关闭，显示出核心团队和社区贡献者正在积极处理关键 Bug，并推进重要的架构改进。**v2026.6.10-beta.2 的发布**带来了自动快速模式和更可靠的模型路由等亮点。值得注意的是，在“活跃”的问题中，多个影响会话状态和数据完整性的 **P0/P1 级严重 Bug** 仍在公开讨论中，项目稳定性是当前社区关注的核心焦点。

---

## 2. 版本发布

### 最新版本：v2026.6.10-beta.2

- **更新内容亮点：**
    - **对话自动快速模式 (Automatic fast mode for talks):** OpenClaw 现在能够在短对话轮次中自动启用快速模式，并在需要更长运行的任务中返回正常模式，优化了交互体验。 (PR #85104)
    - **更可靠的模型路由 (More reliable model routing):** 改进了 Zai (及其他潜在) 模型的路由逻辑，预计将减少路由错误和回退失败。

- **破坏性变更与迁移注意事项：**
    - 发布说明明确标注为 “beta.2”，暗示该版本包含尚未完全稳定的新功能。生产环境用户应谨慎评估升级风险，尤其是在依赖长时间稳定的会话和模型路由的场景下。
    - 发布链接未提供详细变更日志，建议用户在升级前持续关注自 `v2026.6.8` 以来的相关 Issue 和 PR。

---

## 3. 项目进展

过去 24 小时内，共合并/关闭了 **78 个 PR** 和 **87 个 Issues**。以下重点关注已合并/关闭的重要修复：

- **稳定性与 Bug 修复 (关键合并/关闭):**
    - **[Bug]: WebChat/OpenAI Codex session does not expose host=node exec despite connected Windows node (Issue #92141, CLOSED)**：修复了 Codex 工具表面无法正确处理 Windows 节点的 `system.run` 工具暴露问题。
    - **[Bug]: Telegram polling enters silent crash loop... (Issue #93375, CLOSED)**：解决了 Telegram 轮询在短暂网络超时后进入无声崩溃循环、健康监控无法恢复的问题，提升了通道稳定性。
    - **[Bug]: After 2026.6.6 no Codex usage\limit UI... (Issue #93041, CLOSED)**：修复了 Codex 用量界面在 Web UI 中消失的回归问题。
    - **[Bug]: memory.qmd.command path mangled on Windows... (Issue #92302, CLOSED)**：修复了 Windows 系统上 QMD 记忆后端的路径拼接问题。
    - **[Bug]: --force-reset-cross-signing fires bootstrapCrossSigning TWICE... (Issue #78396, CLOSED)**：修复了 Matrix E2EE 加密状态被破坏的严重问题。

- **功能与优化 (部分建议):**
    - `fix(cli): resolve trajectory export stores consistently` (PR #95570)：统一了 `export-trajectory` 命令与其他 `sessions` 子命令的会话存储路径逻辑，修复了对齐不一致的问题。

**项目向前迈进的步伐：** 社区和团队正在从多角度“补坑”，既处理了 Web 和 Telegram 等主要通道的回归问题，也修补了 Windows、Matrix 等特定平台的兼容性故障。

---

## 4. 社区热点

在过去的 24 小时内，社区讨论的热点主要集中在以下 **P1 级** 问题上：

- **(热度最高) [#88312 - [Bug]: [Regression] 2026.5.27: Codex app-server turn-completion stall returns...](https://github.com/openclaw/openclaw/issues/88312) (17条评论, 4👍)**
    - **分析：** 这是同一问题的第二次回归 (第一次由 #85107 修复)，严重影响了ChatGPT Plus用户的体验。社区用户在努力定位问题边界（5.26工作，5.27出问题），但核心团队仍在寻找根本原因。这表明该区域的代码逻辑较为脆弱，需要更彻底的修复。

- **(极高关注) [#91588 - Critical: Gateway Memory Leak...](https://github.com/openclaw/openclaw/issues/91588) (13条评论, 1👍)**
    - **分析：** 一个 P0 级的严重问题。Gateway 进程内存从 350MB 泄漏至 15.5GB，导致 OOM 崩溃和持续重启。这对所有服务器端部署都是重大威胁，社区对此关注度极高。尽管评论数不是最多，但问题的严重性使其成为热点。

- **(社区广泛受影响) [#91363 - Isolated cron consistently fails with "LLM request failed"...](https://github.com/openclaw/openclaw/issues/91363) (7条评论, 4👍)**
    - **分析：** 此问题获得了 4 个赞，是今日最高排名，表明这是一个影响广泛的痛点。隔离的 Cron 任务完全失效，请求甚至无法到达模型提供商。用户被迫依赖手动 `cron run`，这严重破坏了自动化工作流。

- **(新发病例) [#95623 - tool_use.id sanitizer misses OpenAI-responses composite id...](https://github.com/openclaw/openclaw/issues/95623) (7条评论, 1👍)**
    - **分析：** 一个在 6/22 当天报告的新 Bug，揭示了跨提供商故障转移时的一个隐藏逻辑缺陷。`tool_use.id` 的清理器未能处理 OpenAI 的特殊 ID 格式，导致回退到 Anthropic 时出错并阻塞会话。这表明故障转移机制的健壮性还有待加强。

---

## 5. Bugs 与稳定性

过去 24 小时内报告的 Bug 和回归问题严重性较高，集中在 **会话状态、数据完整性和模型路由**。

- **P0 (爆裂):**
    - `Critical: Gateway Memory Leak...` (#91588) — 导致 OOM 崩溃，严重威胁服务稳定性。

- **P1 (高严重性):**
    - `tool_use.id sanitizer misses OpenAI-responses composite id...` (Issue #95623, 新报告): 跨提供商故障转移导致会话阻塞。
    - `Subagent abort-settle fails to release .jsonl.lock...` (Issue #95833, 新报告): 子代理中止后未释放锁，导致会话永久损坏。
    - `cli-backend agent runs against anthropic... return 401` (Issue #95612): CLI 代理身份验证失败。
    - `Incomplete turn / stream cut mid-tool-calls with NVIDIA Build provider` (Issue #95760, 新报告): NVIDIA 提供商导致会话进入僵尸状态。
    - `2026.6.9 silently relocates memory store with no migration` (Issue #95495): 无声地移动记忆存储，造成数据丢失和重嵌入成本。
    - `Embedded runner: freshly streamed thinking signatures intermittently invalid on replay (Anthropic)` (Issue #92201): Anthropic 思考块回放无效。
    - `Bug: DeepSeek V4 Flash incomplete turn` (#88657): 特定模型产生不完整对话。
    - `Isolated cron consistently fails with "LLM request failed"` (#91363): 自动化 Cron 任务完全失效。
    - `Containerized/self-hosted deploys can't use externalized channel plugins` (#92516): 自托管部署无法使用外部通道插件。
    - `Bug: Ollama remote provider streaming not consumed` (#94251): Ollama 远程模型流式传输不消费。

- **P2 (中等严重性):**
    - `Bug: /usage no longer works in Telegram` (Issue #93905, 回归): 使用统计功能失效。
    - `web_fetch useTrustedEnvProxy ignores NO_PROXY env variable` (Issue #93807): 安全相关，代理绕过问题。
    - `macOS app: CLLocationManager 每秒重建导致 TCC 权限疯狂请求` (Issue #94147): 性能与权限问题。

**小结：** 今日 Bug 多数已有 `clawsweeper:needs-product-decision` 或 `clawsweeper:needs-maintainer-review` 标签，表明大部分问题处于待决策和待审查阶段，**仅有少量如 #95612、#95623 等新发问题可能已有初步的 Fix PR 或讨论**。项目需要优先解决这些导致会话、数据丢失或服务不可用的 P0/P1 问题。

---

## 6. 功能请求与路线图信号

- **高热度且可能纳入下一版本的功能：**
    - **[Feature Request] 支持PostgreSQL替代SQLite作为内部存储** (#90370, 11条评论, 2👍): 这是对架构的较大改动，社区呼声很高（赞数第二）。已有多个 PR (如 #59986 的通道插件重构) 在推动更灵活的插件与存储架构，此功能有被列入远期路线的潜力。
    - **[Feature] per-channel / per-group / per-DM model override in config** (Issue #53638, 已关闭): 此 Issue 虽已关闭，但其需求可能已被其他方式（如 ACP 会话上下文注入 #43564）或未来的配置重构满足。
    - **Telegram Inline Query Support** (Issue #54794, 2👍): 社区期望已久的 Telegram 原生内联查询功能，若实现将大幅提升 Telegram 平台上的用户体验。
    - **ACP Session Skill Context Injection** (Issue #43564): 允许 ACP 会话使用技能，是弥合 CLI 和 Codex 工作流之间差距的关键功能。

- **路线图信号：** 多个 `feat(plugin-sdk): add extensible...` 和 `refactor(plugins): add lane-oriented channel interface` 等 PR 表明，项目正在对核心插件系统和通道接口进行面向未来的重构，增加可扩展性是当前的重要方向。

---

## 7. 用户反馈摘要

- **核心痛点：**
    - **稳定性和可靠性危机：** 用户对“寂静的失败”感到沮丧——模型调用无响应 (#91363)、会话进入僵尸状态 (#95833)、以及无声的回归问题 (#88312)。
    - **数据丢失/损坏风险：** 记忆库无声迁移导致重嵌入 (#95495)、会话锁不释放导致永久损坏 (#95833)，这是最令用户担忧的风险。
    - **运维复杂性：** 自托管用户面临插件外化和密钥审计的复杂性 (#92516, #92522)。强制使用 SQLite 对已经运行 PostgreSQL 的用户是额外负担 (#90370)。
    - **诊断基础设施薄弱：** 多个 Bug 提到“没有足够的所有者诊断信息” (#86538) 或“错误文本被泛化” (#92201)，说明排错体验有待改善。

- **使用场景：**
    - 用户在构建多代理系统（如 orion 和 main 共享工作区 #95724）。
    - 大量用户依赖 Cron 任务进行自动化工作流 (#91363)。
    - 用户强烈依赖多个模型提供商进行故障转移 (#95623, #88657)。
    - Telegram 和 Discord 仍是最核心的交互通道，用户对它们的稳定性异常敏感 (#93375, #85822)。

---

## 8. 待处理积压

以下是一些长期未响应或仍未解决，但影响力巨大的重要 Issue/PR，建议维护者重点关注：

1.  **[P1] #86034 - Media generation succeeds but completion delivery fails...** (创建于 2026-05-24)：媒体生成成功但交付失败，这是一个令人困惑的用户体验问题，且已积压近一个月。
2.  **[P1] #85743 - pendingFinalDelivery heartbeat replay loops forever...** (创建于 2026-05-23)：孤儿会话导致心跳重放死循环，是严重影响资源消耗和会话管理的潜在问题。
3.  **[P2] #86538 - Session write-lock timeouts block subagent delivery lanes.** (创建于 2026-05-25)：写锁超时阻塞子代理，其根源与 #95833 相关，建议一并调查。
4.  **[P1] #87996 - Vertex beta INVALID_ARGUMENT can wedge long sessions...** (创建于 2026-05-29)：长时间运行的会话被特定提供商的错误卡死，是影响高级用户的怪问题。
5.  **[P1] #62682 - fix(agents): distinguish terminal aborts from retryable failures...** (PR 创建于 2026-04-07)：一个区分终端失败与可重试失败的 PR 已等待了超过 2 个月的维护者审查。这可能是许多“静默失败”问题的根源所在。

---

---

## 横向生态对比

好的，作为一名专注于AI智能体与个人AI助手开源生态的资深技术分析师，我已完成对2026年6月23日各项目动态的深度分析。以下是这份为期半天的生态全景观察报告。

---

### 1. 生态全景

今日，个人AI助手自主智能体开源生态展现出**高速迭代、质量巩固与技术路线分化并行**的态势。领军项目OpenClaw在维持极高活跃度的同时，面临因功能膨胀和架构复杂性带来的稳定性挑战，社区正围绕会话持久化、数据完整性等“高可用性”问题展开密集攻坚。与此同时，以ZeroClaw、IronClaw为代表的新锐力量，正通过激进的架构重构（如“Wasm化”）从底层安全性出发弯道超车，展示了另一条通往“可信赖AI”的技术路径。总体而言，项目普遍从功能堆叠期进入深度优化期，**“可靠性”与“开发者体验”成为当下竞争的核心焦点**。

### 2. 各项目活跃度对比

| 项目名称 | Issues 更新量 | PR 更新量 | Release 状态 | 健康度评估 | 活跃度等级 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | ~700 (更新/关闭) | 500 (新发布), 78 (合并) | **v2026.6.10-beta.2** | ⚠️ 极高，但修复积压 | 极高 |
| **ZeroClaw** | 50 (更新) | 50 (更新), 1 (合并) | 无 | 🟢 极高，聚焦架构重构 | 极高 |
| **NanoBot** | 高 (含讨论) | 高 (含合并) | 无 (Prepare v0.2.2) | 🟢 高，稳定性与社区贡献并重 | 高 |
| **IronClaw** | 18 (更新) | 23 (更新), 多 (合并) | 无 | 🟢 高，聚焦Reborn性能 | 高 |
| **Hermes Agent** | ~50 (更新) | ~50 (更新), 17 (合并) | 无 | 🟢 高，社区响应迅速 | 高 |
| **CoPaw** | 23 (更新) | 50 (更新), 20 (合并) | 无 | 🟢 高，修复与移动端扩展并行 | 高 |
| **PicoClaw** | 高 (含讨论) | 44 (更新), 34 (合并) | **nightly** | 🟢 高，依赖管理与新特性 | 高 |
| **NanoClaw** | 低 | 6 (更新), 1 (合并) | 无 | 🟡 中等，功能扩张中 | 中等 |
| **LobsterAI** | 低 (含Stale问题) | 6 (合并) | 无 | 🟡 中等，聚焦新功能与清理 | 中等 |
| **NullClaw** | 0 | 2 (待合并) | 无 | 🟢 平静，低频维护 | 平静 |
| **TinyClaw** | 0 | 0 | 无 | ⚪ 无活动 | 沉睡 |
| **Moltis** | 0 | 0 | 无 | ⚪ 无活动 | 沉睡 |
| **ZeptoClaw** | 0 | 0 | 无 | ⚪ 无活动 | 沉睡 |

### 3. OpenClaw 在生态中的定位

**OpenClaw** 作为生态中的核心参照系，其地位类似于AI智能体领域的Linux内核。其优势在于：
- **社区规模与成熟度**：拥有最庞大的贡献者网络和迭代历史，是生态中最为复杂的项目之一。
- **功能广度**：覆盖了会话管理、多模型路由、Cron任务、多通道（Web, Telegram, Discord）等几乎所有核心场景，是其它项目的功能借鉴模板。

**技术路线差异**：
- 与**NanoBot**、**Hermes**等同类项目相比，OpenClaw更倾向于**自我演化**，通过其庞大的社区和复杂的配置体系解决广泛场景问题，但这也导致其架构复杂、Bug回归率高。
- 相反，**ZeroClaw** 选择了一条截然不同的路径，从基础架构上引入**Wasm沙箱**，意图从根本上解决安全性与插件生态的可信问题。这代表了下一代高安全性AI Agent的设计方向。**IronClaw** 则在`Reborn`架构中强调**并发执行权限模型**，重心在于提升吞吐和精细化管理。

**总结**：OpenClaw是功能覆盖最广、生态最成熟的“巨无霸”，但存在稳定性的“巨人症”；ZeroClaw和IronClaw则是进行“外科手术式”架构创新、强调安全与性能的挑战者。

### 4. 共同关注的技术方向

- **MCP/插件系统的稳定性与可靠性**（OpenClaw, Hermes, NanoBot, CoPaw, ZeroClaw, LobsterAI）
    - 各项目普遍遇到MCP工具连接无效、会话锁死、跨提供商路由失败等问题。**这指向MCP协议本身在复杂生产环境下的健壮性仍有待完善。**

- **会话持久化与状态管理**（OpenClaw, Hermes, NanoBot, NullClaw, CoPaw）
    - 大量Bug集中在数据丢失、死锁、状态不一致（如重启后全量同步）。**表明共享存储与强一致的会话状态模型是所有AI Agent项目的核心挑战。**

- **跨平台与跨通道支持**（OpenClaw, Hermes, CoPaw, NanoBot, NanoClaw, PicoClaw）
    - Telegram、Discord、Mattermost、国内IM等通道的集成与适配。**这表明项目正从单一的Web/CLI工具向通用的“Agent网关”角色演变。**

- **架构安全性设计**（ZeroClaw, IronClaw, CoPaw）
    - 从ZeroClaw的Wasm沙箱到IronClaw的细粒度权限模型，再到CoPaw的钥匙串隔离。**安全性正从“附加功能”升级为“架构核心设计”。**

### 5. 差异化定位分析

| 项目名称 | 功能侧重 | 目标用户 | 技术架构 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | 全能型，多通道，高复杂度，强社区生态 | 高级开发者，早期采用者，需要最大可控性 | 动态配置，多层次架构，复杂度高 |
| **ZeroClaw** | 极致安全，Wasm沙箱，信任最小化 | 对安全性有极致要求的开发者/企业 | Rust原生，Wasm-first，去Node.js化 |
| **IronClaw** | 高性能，Reborn架构，并发+权限 | 高性能任务执行，对效率有高要求的开发者 | Rust并行引擎，细粒度权限模型 (per-tool) |
| **Hermes Agent** | 高响应社区，macOS/Windows桌面优先 | 个人开发者，桌面用户，重视桌面体验 | Python/Go混合，桌面体验优化 |
| **NanoBot** | 快速迭代，易用性，丰富的增量特性 | 新手用户，寻求快速部署和开箱即用的开发者 | Python社区版，多端支持（PWA, Mattermost） |
| **CoPaw** | 移动端扩展，插件生态 | 希望使用Qwen模型并在移动端工作的中国用户 | Tauri桌面应用，Python/JS混合，移动端适配活跃 |

### 6. 社区热度与成熟度

- **快速迭代阶段（功能为主，稳定性为辅）**：
    - **NanoBot, CoPaw, PicoClaw**: 这些项目社区提交活跃，新特性（PWA, Mattermost, Android ADB）层出不穷，同时也在处理大量的回归Bug。它们正处于快速扩张用户群和功能边界的关键时期。
    - **OpenClaw**: 虽进入质量巩固期，但庞大的社区提交量使其依然处于极高强度的功能迭代和修复并行状态。

- **质量巩固阶段（性能与稳定性为主）**：
    - **IronClaw, ZeroClaw**: 这两个项目正在进行深度的架构重构（IronClaw的Reborn性能回归，ZeroClaw的Wasm化），这本质上是为未来版本的稳定性奠定基础。社区讨论也更集中在RFC和技术设计上。
    - **Hermes Agent**: 社区响应迅速，维护者积极合并修复PR，正处于从快速开发转向追求更稳定用户体验的过渡期。

- **平静/休眠期**：
    - **TinyClaw, Moltis, ZeptoClaw**: 这些项目已经数日甚至更长时间无活动，可能进入维护或停止开发状态。

### 7. 值得关注的趋势信号

1.  **从“连接”到“可信连接”**：社区对安全性的担忧不再停留在“数据加密”，而是深入到“插件是否可信”。**Wasm沙箱**（ZeroClaw）成为新一代安全架构的代表，**细粒度权限模型**（IronClaw）则是对现有安全策略的进化。开发者部署AI Agent时应将供应链安全评估纳入考量。

2.  **会话状态的“强一致性”挑战**：当AI Agent成为多种模型和工具的调度中心时，会话状态的一致性（避免串台、死锁、数据丢失）成为最普遍的稳定性瓶颈。**这提示在选择架构时，需对会话存储的选型（SQLite vs PostgreSQL）和冲突解决策略进行投资。**

3.  **“去中心化”与“多平台”成为刚需**：用户不仅要求Agent能在Web上运行，更希望通过Telegram、Matrix甚至SimpleX等去中心化协议与之交互。AI Agent正在变成**新的“操作系统”式的网关**，连接着用户与各种在线服务，而不仅仅是ChatGPT的一个封装。

4.  **移动端是下一个必争之地**：CoPaw和NanoBot对移动端（PWA、移动端UI适配）的积极投入，标志着个人AI助手正从“桌面工具”向“口袋助手”演进。**如果项目希望在消费级市场取得成功，移动端体验将是决定性因素。**

**对开发者的参考价值**：如果您寻求**最大灵活性和社区支持**，请选择OpenClaw，但需接受其复杂性带来的稳定性风险；如果您**对安全有极致要求**，请密切关注ZeroClaw的Wasm架构进展；如果您**需要高并发、高性能**部署，IronClaw的Reborn架构是值得评估的选项。在选择起步项目时，请评估您对**生态成熟度**与**架构创新性**的权衡。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，根据您提供的 NanoBot 项目数据，我已生成 2026-06-23 的项目动态日报。

---

## NanoBot 项目动态日报 (2026-06-23)

### 1. 今日速览

今日项目活跃度**极高**，主要集中在稳定性修复和发布准备上。核心贡献者 Re-bin 主导了一系列针对 Gateway 关闭流程、WebUI 对话回滚和 MCP 连接异常的关键 Bug 修复，并成功发布了 `v0.2.2` 版本。此外，社区对 Mattermost 集成、PWA 支持等新功能贡献踊跃，同时也有多条长期存在的问题 (如 Issue #1461) 迎来了最终关闭，项目整体健康度良好，正稳步向前推进。

### 2. 版本发布

**无新版本发布。**

尽管有 `prepare v0.2.2` 的 PR (#4445) 被合并，但暂无正式 Release 版本发布。该版本很可能在后续完成最终测试后发布。

### 3. 项目进展

今日项目完成了多项重要修复与改进，显著提升了稳定性和健壮性。

- **核心稳定性修复 (PR #4453, #4454, #4455, #4456, #4450, #4451)**: 贡献者 **Re-bin** 密集地合并了一系列关键修复，集中解决了 Gateway 关闭时任务的优雅终止问题，以及 WebUI 在 Fork 对话和历史刷新时的数据丢失与布局异常。这表明项目正从功能开发转向稳定性打磨阶段。
- **MCP 协议修复 (PR #4436, #4441, #4450)**: “michaelxer” 和 “Re-bin” 解决了 MCP 服务器会话管理的多个核心问题，包括：
    - 修复了 `enabledTools` 白名单仅应用于工具而遗漏资源和提示的漏洞 (PR #4436, #4452 已合并)。
    - 修复了 MCP 连接失败时导致 Gateway 崩溃的 `RuntimeError` (PR #4441)。
    - 修复了 stdio 传输的 MCP 在关闭时因任务上下文错误导致崩溃的问题 (PR #4450)。
- **社区新贡献集成**:
    - **Mattermost 集成 (PR #4459)**: 社区贡献者 “goodtiding5” 提交了全新的 Mattermost 平台通道支持，大大扩展了 NanoBot 的跨平台能力。
    - **PWA 支持 (PR #4457, #4458)**: 社区贡献者 “zpljd258” 为 WebUI 增加了 PWA (Progressive Web App) 支持，使用户可以将 WebUI 安装为移动端应用，提升使用体验。
- **配置优化 (PR #4448)**: 默认上下文窗口从 65K 提升至 200K，以适应当前主流 LLM 模型的能力。

**总结**: 项目在今日修复了至少 4 个严重的运行时稳定性 Bug (Gateway 关闭、WebUI Fork、MCP 连接/关闭冲突)，并集成了 2 个重要的社区新功能 (Mattermost, PWA)，同时修复了配置和安全风险，项目质量有显著提升。

### 4. 社区热点

今日最受关注的是以下 Issue 和 PR：

- **Issue #4413: [Request] Telegram Bot API 10.1 rich messages**
    - **链接**: [HKUDS/nanobot Issue #4413](https://github.com/HKUDS/nanobot/issues/4413)
    - **背景**: 用户 `madIlama` 提出希望 NanoBot 支持 Telegram 最新的富消息格式，以发送更丰富的文本和交互内容。
    - **分析**: 该 Issue 有 2 条评论，反映了社区用户对紧跟平台官方最新特性、提升终端用户体验的迫切需求。这是一个明确的功能增强信号。

- **PR #4443: fix: guard against duplicate tool_use ids in streamed responses**
    - **链接**: [HKUDS/nanobot PR #4443](https://github.com/HKUDS/nanobot/pull/4443)
    - **背景**: 修复了流式响应中因重复 `tool_use` ID 导致会话永久崩溃的严重问题。
    - **分析**: 这是一个典型的 “隐性 Bug”，用户遇到后往往无法自行解决。该 PR 的提出和后续合并（尽管目前是 OPEN 状态且评论数显示 `undefined`，但作为修复重要问题的 PR 应重点关注）将直接消除一个让会话“死锁”的痛点，对用户体验提升至关重要。

### 5. Bug 与稳定性

今日报告并修复了多个重要的 Bug，按严重程度排列如下：

- **严重 - 会话崩溃/死锁**:
    - **Bug**: 流式响应中重复的 `tool_use` ID 导致用户会话永久失效 (HTTP 400)。 **(已有关联 Fix PR #4443)**
    - **Bug**: Gateway 关闭时，MCP 和 WebSocket 任务因未被正确取消或处理而引发异常，导致进程非正常退出。 **(已通过 PR #4456, #4454 修复)**
    - **Bug**: WebUI Fork 线程中，历史消息刷新可能导致已经显示的 Assistant 回复消失。 **(已通过 PR #4455 修复)**

- **中等 - 功能受限/逻辑错误**:
    - **Bug**: MCP 服务器的 `enabledTools` 白名单配置未对 Resources 和 Prompts 生效，可能导致安全配置被绕过。 **(已通过 PR #4452, #4436 修复)**
    - **Bug**: 在 LLM 执行工具链期间，用户的新消息可能被忽略，导致交互中断。 **(有关联 Fix PR #4397)**

- **低 - 类型不一致**:
    - **Bug**: 配对存储中 Sender ID 类型不一致，可能导致无法配对。 **(已通过 PR #4433 修复)**

### 6. 功能请求与路线图信号

今日收到的功能请求和已提交的 PR 显示出项目下一步可能的发展方向：

- **平台扩展（高优先级）**: `Mattermost 支持 (PR #4459)` 和 `Telegram 富消息 (Issue #4413)` 表明跨平台和消息格式丰富化是社区最强烈的诉求。`PWA 支持 (PR #4457)` 则专注于提升 Web 端的移动体验。
- **用户引导优化（中优先级）**: `用户友好向导 (Issue #4376 已关闭)` 和 `钉钉私聊控制 (PR #4446)` 表明项目开始关注运营管理和新手引导，这通常是项目走向成熟和规模化采用的信号。
- **内部智能增强（低优先级）**: `搜索历史工具 (PR #4439)` 为 Agent 增加了记忆回溯能力，这是一个增强智能体能力的基础功能。`子Agent使用不同模型 (PR #4291)` 则展示了更复杂的任务编排和模型成本优化思路。

**预测**: 下一个版本很可能包含 `Mattermost`、`PWA` 和 `默认200K上下文`。`Telegram 富消息` 和 `子Agent 模型配置` 则可能在后续版本中实现。

### 7. 用户反馈摘要

从 Issue 评论中提取的用户声音：

- **正面反馈**: 用户 `chengyongru` 对 Issue #4376 点赞 (👍 1)，表明对“用户友好向导”改进方向的认可。这反映出用户对简化配置、降低使用门槛的强烈期待。
- **痛点/诉求**:
    - **新手配置门槛高**: Issue #4376 的作者 `chengyongru` 明确指出当前 `nanobot onboard --wizard` 向导要求用户掌握过多技术细节，对非技术用户不友好。
    - **平台新特性跟进**: Issue #4413 的作者 `madIlama` 主动提出要跟上 Telegram Bot API 的最新更新，这表明有一批忠实用户期望项目能紧跟上游平台生态发展。
    - **稳定性是首要诉求**: 大量的 Bug 修复 PR 和开启的 Issue 暗示，即使是在功能开发阶段，用户遇到的稳定性问题（如会话崩溃、连接失败）是影响用户体验的核心障碍。

### 8. 待处理积压

以下 Issue 和 PR 存在较长时间未获得实质性进展，需维护者关注：

- **Issue #1461 [CLOSED]**: **状态: 已关闭**。这个关于“统一守护进程网关”的长期提案在今日被关闭。建议维护者回顾关闭原因和讨论过程，确认其功能目标是否在其他地方（如 Gateway 的稳定性改进中）已部分实现或被替代，以决定是否推出新的相关路线图。
- **PR #4291 [OPEN]**: **链接**: [HKUDS/nanobot PR #4291](https://github.com/HKUDS/nanobot/pull/4291)。该 PR 自 6 月 11 日开启，旨在让子Agent使用不同模型配置。这是一个有前瞻性的功能，但超过 10 天无新评论，可能因设计复杂或有冲突而停滞。需要维护者介入进行 code review 或提出修改意见。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，我将根据您提供的Hermes Agent GitHub数据，生成2026年6月23日的项目动态日报。

---

# Hermes Agent 项目动态日报 | 2026年6月23日

## 1. 今日速览

过去24小时内，Hermes Agent 项目活动量极高，处于非常活跃的开发状态。社区提交了近50条Issue和50个PR，开发者响应迅速，其中17个PR已合并或关闭，7个问题已解决。问题主要集中在**会话状态持久化**、**平台适配器（Telegram）稳定性**、**多配置管理（Multiplexer）的Bug** 以及 **macOS环境下的可靠性** 上。多个P1/P2级别的严重Bug已被标记，且已有对应的修复PR提交，显示项目维护团队正在高效地解决社区反馈的关键痛点。整体而言，项目健康度良好，社区的参与度和维护者的响应速度均处于高位。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日合并/关闭的PR表明了项目在稳定性和功能扩展上的持续进步。关键进展包括：

- **核心稳定性修复：** PR #51088 `fix(agent): persist session progress across tool loops and compression` 已提交，直接修复了Issue #51089中报告的会话状态丢失问题。该PR确保长时间的工具循环和状态压缩操作的结果能被可靠地持久化，是提升核心体验的关键步骤。
- **Telegram适配器优化：** PR #51085 `fix(telegram): prune stale DM topic binding in the media/anchor-retry fallback too` 进一步修复了Telegram频道中删除主题后导致的媒体发送失败问题（接续PR #50990）。同时，PR #51082 提交了对Telegram Bot API 10.0“访客消息”的支持，扩展了BOT在群组外的交互能力。
- **第三方服务集成：**
    - PR #50469 `fix(api): allow hermes update for git/pip installs inside containers` 已合并，解决了容器环境中无法通过API进行更新的问题。
    - PR #44335 `feat(memory): Honcho OAuth connect — desktop and CLI flows + token refresh` 已合并，为内存提供商Honcho集成了便捷的OAuth登录流程，降低了用户配置门槛。
- **持续集成/测试完善：** PR #51104 `test: guard split web backend routing` 已合并，为Web后端路由（如SearXNG和Firecrawl）增加了回归测试，提升了代码质量。

## 4. 社区热点

今日讨论最活跃的热点问题反映了用户对**核心可靠性**和**多平台管理**的高度关注。

- **Issues #30636 - `state.db` 在高负载下因 `SIGTERM` 损坏 (macOS)**
    - **链接:** NousResearch/hermes-agent Issue #30636
    - **分析:** 这是一个P1级别的严重Bug，影响了macOS用户。用户`mbakkali`详细报告了在48小时内，`state.db` 文件因 `launchd` 关闭进程时发出的 `SIGTERM` 信号而损坏三次。评论数达到4条，表明该问题不是个例，引发了社区的共鸣。背后诉求是**请求Hermes在处理系统关闭信号时，对关键数据库文件进行优雅的写入和关闭操作，以保障数据不丢失。**

- **Issues #51099 - Honcho内存提供者在依赖缺失时静默激活**
    - **链接:** NousResearch/hermes-agent Issue #51099
    - **分析:** 尽管评论数仅为1，但该问题指出了用户体验设计上的一个常见痛点：当配置了 `memory_provider: honcho` 但实际的 `honcho-ai` Python包未安装时，系统没有给出清晰、失败的提示，而是“静默激活”并随后在后台反复报错。**社区的诉求是更智能的依赖检查和更友好的错误反馈**，避免用户陷入困惑的排错环节。

- **Issues #51029 & #51030 - Telegram Multiplexer的令牌泄露和碰撞检测失效**
    - **链接:** Issue #51029 | Issue #51030
    - **分析:** 这两个相关的P2级Bug由同一用户`puja108`报告，揭示了新引入的“多配置管理”(`Multiplexer`)功能在Telegram平台上的两个严重竞态条件和配置错误。一个泄露了默认配置的BOT令牌，另一个导致令牌碰撞检测失效。这**背后是对多账号、多BOT管理功能的稳定性和安全性的迫切需求**，社区希望该功能能安全可靠地部署。

## 5. Bug 与稳定性

今日报告的Bug主要集中在会话持久化、平台适配和多配置管理方面。按严重程度排列如下：

| 严重程度 | 摘要 | Issue / PR | 修复状态 |
| :--- | :--- | :--- | :--- |
| **P1** | `state.db` 损坏 (macOS `launchd`) | #30636 | 尚无直接修复PR，社区持续关注 |
| **P1** | Windows `bootstrap-installer` 杀死网关不重启 | #50090 | 已关闭 (CLOSED) |
| **P2** | 会话恢复丢失工具循环/压缩中间状态 | #51089 / PR #51088 | 已有修复PR #51088 |
| **P2** | Telegram 富文本表格被格式化器重写为项目符号 | #45323 | 已关闭 (CLOSED) |
| **P2** | MCP服务器在瞬态故障后永久断开，依赖网关重启 | #38488 | 尚无直接修复PR，持续关注 |
| **P2** | Telegram 多配置泄漏/碰撞令牌 | #51029, #51030 | 尚无直接修复PR，标签为 `comp/gateway` |
| **P3** | Photon iMessage 在密钥轮换后发送认证失败 | #50755 | 已有修复PR #51075 |
| **P3** | Honcho内存程序在缺少依赖时静默激活 | #51099 | 尚无直接修复PR |

## 6. 功能请求与路线图信号

- **高优先级信号：** 尽管 `MCP服务器永久断开` (#38488) 被标记为P2，但相关自动重连逻辑的缺失暴露了基础设施的健壮性问题，很可能被纳入下一个Sprint。社区对MCP生态的依赖日益加深，因此解决此问题对项目至关重要。
- **增强用户体验：**
    - `Feature: /resume-last slash command to resume most recent session in one step` (#51040) 已提交。功能实用，开发成本低，很有希望在下一版本中快速落地。
    - `Feature: support utilizing project .mcp.json MCP server configs` (#51069) 表明用户有复用标准MCP配置的需求，与OpenAI和Cursor等工具的生态对齐，这是一个重要的信号。
- **横向功能扩展：**
    - `feat(computer-use): add optional Windows backend` (PR #51087) 已提交，将计算机操作能力扩展到Windows平台，这将显著扩大用户群。
    - `Tool Prioritization — Weighted Tool Selection` (PR #51092) 是一个更深度的优化，旨在解决LLM选择工具的不确定性，属于中长期的路线图规划。

## 7. 用户反馈摘要

- **痛点聚焦：**
    - **macOS稳定性：** 用户`mbakkali`在Issue #30636中详细描述了因进程关闭导致数据库损坏的根因分析，显示其为技术熟练的用户，其痛点在于**系统级集成（launchd）的健壮性不足**。
    - **Windows环境体验：** 用户`c193764582`在 #50090 和`vixiikeen`在 #51015 中分别指出了Windows平台下更新/重启机制的严重Bug，`hermes.exe`自锁和网关被杀后不重启，表明**Windows平台仍存在关键的部署和升级问题**。
    - **复杂的多配置管理：** 用户`puja108`在 #51029 和 #51030 中精准定位了Multiplexer功能中的代码缺陷，显示了用户对多BOT管理的复杂需求和高要求。
- **满意的地方：** 无明确的正面反馈记录，但这在Bug报告日中属于正常现象。快速响应Bug并创建修复PR（如`ruslanvasylev`对会话持久化的修复 #51088）本身就是一种积极的反馈信号。

## 8. 待处理积压

- **高优先级：** Issue #30636 (`state.db` 损坏) 虽已开启超过一个月，但其P1的严重性意味着它不应该被遗忘。维护者应尽快评估并设计修复方案。
- **关键路径：** Issue #38488 (MCP服务器不自动重连) 自6月3日开启以来一直无明确修复方案。MCP是Hermes重要的扩展点，此问题**可能成为阻碍采用MCP生态的瓶颈**，强烈建议维护者重新评估优先级并分配资源。
- **新的系统性问题：** 关于 `Multiplexer` 的 Bug（#51029, #51030）是新引入的功能缺陷，虽然刚被报告，但已暴露了其核心逻辑的脆弱性。若处理拖延，将影响所有尝试使用多配置功能的用户。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，根据您提供的 PicoClaw 项目数据，现呈上 2026-06-23 的项目动态日报。

---

# PicoClaw 项目动态日报 | 2026-06-23

## 1. 今日速览

今日项目活跃度极高，社区贡献和机器人自动化流程均表现强劲。**过去24小时内共有44个PR更新，其中34个已被合并/关闭**，反映了项目维护者对代码质量和依赖管理的积极态度。**一个针对豆包Seed模型工具调用泄露的严重Bug，已有社区贡献者迅速提交修复PR**，体现了社区的快速响应能力。同时，**两个新特性PR（Android ADB集成、Pico WebSocket远程模式）进入待合并阶段**，预示着项目功能边界正在扩展。总体来看，项目处于一个**功能迭代与稳定性并重**的健康状态。

## 2. 版本发布

- **`nightly` 版本发布**
  - 版本号：`v0.3.0-nightly.20260622.287853ab`
  - 说明：这是一个为下一大版本准备的自动化每日构建版本，可能包含不稳定因素，建议谨慎用于生产环境。
  - 完整更新日志：[Compare v0.3.0...main](https://github.com/sipeed/picoclaw/compare/v0.3.0...main)

## 3. 项目进展

今日项目有大量已合并/关闭的PR，主要集中在对**核心运行时稳定性、代码健壮性、以及依赖更新**的推进上。

- **稳定性与Bug修复**：多线程并发问题得到重视。多个PR（如 [#3053](https://github.com/sipeed/picoclaw/pull/3053)、[#3091](https://github.com/sipeed/picoclaw/pull/3091)、[#3131](https://github.com/sipeed/picoclaw/pull/3131)、[#3128](https://github.com/sipeed/picoclaw/pull/3128)）通过添加 `ok` 检查等方式，修复了 `pkg/evolution/store.go`、`pkg/providers/openai_compat/provider.go`、`pkg/tools/registry.go` 等模块中因类型断言失败而可能导致panic或静默错误的隐患。
- **核心功能优化**：**消息总线背压处理**（[#2906](https://github.com/sipeed/picoclaw/pull/2906)）和**JSONL会话元数据索引的热路径优化**（[#2913](https://github.com/sipeed/picoclaw/pull/2913)）已被合并，这些改动将显著提升系统在高并发下的稳定性和性能。
- **新功能与改进**：`feat(spawn)` ([#3155](https://github.com/sipeed/picoclaw/pull/3155)) 为 `spawn` 组件增加了 `direct_reply` 参数，修复了可能出现的消息重复问题，优化了回调处理逻辑。`picoclaw skills search` 功能得到了增强 ([#3152](https://github.com/sipeed/picoclaw/pull/3152))，现在输出中会包含如何安装该技能的指引，提升了用户体验。

## 4. 社区热点

- **Issue #3093: [Feature] I need SimpleX or tox**：[链接](https://github.com/sipeed/picoclaw/issues/3093)
  - **热度**：3条评论，1个点赞，自6月10日提出后仍保持活跃。
  - **分析**：用户 `Damian-o2` 提出希望增加对 `SimpleX`、`Wire` 或 `Tox` 等去中心化通信协议的支持。这反映出社区中部分用户对**隐私和去中心化通信**有强烈需求，希望PicoClaw能成为这类协议的一个网关，这可能指向P2P AI代理的潜在用例。

- **Pull Request #3158: test: cover sandbox fs Windows path handling**：[链接](https://github.com/sipeed/picoclaw/pull/3158)
  - **热度**：今日最新PR，尚未有评论，但它是专为**Windows平台路径处理**添加测试覆盖的，表明项目对跨平台支持的重视程度正在提升。

## 5. Bug 与稳定性

**严重**：

- **Issue #3153: [BUG] Volcengine Doubao Seed tool calls occasionally leak as `<seed:tool_call>` text**：[链接](https://github.com/sipeed/picoclaw/issues/3153)
  - **严重程度**：高。这是一个功能性问题，会导致豆包Seed模型的工具调用失败，输出原始XML文本给用户。
  - **Fix PR**：已有**PR [#3154](https://github.com/sipeed/picoclaw/pull/3154)** 由社区贡献者 `hanZeng-08` 提交，识别到根因是模型将工具调用嵌入在了 `message.content` 中，而非标准字段，该PR正在审核中。

**中等**：

- **PR #3053, #3131, #3128, #3091**：这些PR修复了`sync.Map`类型断言、工具Schema类型断言、Web搜索提供者中`resp.Body.Close()`错误处理等问题。虽然这些大多是防御性编码，但它们防止了潜在的panic和静默错误，对长期运行的服务稳定性至关重要。

## 6. 功能请求与路线图信号

- **去中心化通信协议**：Issue [#3093](https://github.com/sipeed/picoclaw/issues/3093) 请求支持 `SimpleX` 或 `Tox`。当前项目尚未有相关PR，但这可能代表了未来**点对点AI代理交互**的方向，值得项目方评估。
- **Android设备远程控制**：PR [#3157](https://github.com/sipeed/picoclaw/pull/3157) 新增了基于ADB的Android远程操作工具。这意味着PicoClaw可能正朝着**AI驱动的自动化测试或移动设备管理**领域拓展。此功能默认关闭，属于实验性特性。
- **远程代理模式**：PR [#3118](https://github.com/sipeed/picoclaw/pull/3118) 为 `picoclaw agent` 命令添加了WebSocket远程模式。这允许用户通过远程连接使用PicoClaw的能力，为**分布式部署和远程控制**提供了基础架构。

## 7. 用户反馈摘要

- **正面反馈**：来自 PR #3155 ([v2up-32mb](https://github.com/sipeed/picoclaw/pull/3155))，用户（同时也是贡献者）指出了 `spawn` 组件中消息重复的“痛点”，并主动提交了带有 `SkipInboundTurn` 支持的修复方案。这表明核心用户不仅自己解决问题，还能深入理解框架设计并提供优雅的解决方案。

## 8. 待处理积压

- **依赖更新PR停滞**：`dependabot` 自动创建的多个依赖更新PR，如[#3104](https://github.com/sipeed/picoclaw/pull/3104) (shadcn)、[#3100](https://github.com/sipeed/picoclaw/pull/3100) (@vitejs/plugin-react)、[#3103](https://github.com/sipeed/picoclaw/pull/3103) (typescript-eslint)，均已标记为 `stale`，超过10天未合并。这可能存在与当前代码不兼容的风险，建议维护者审查并处理，以避免技术债务积累。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，以下是基于您提供的NanoClaw GitHub数据生成的2026年6月23日项目动态日报。

---

# NanoClaw 项目动态日报 | 2026-06-23

## 1. 今日速览

今日项目活跃度中等，虽无新版本发布，但Pull Request (PR) 活动较为集中。共有 **6 个PR** 被更新，其中1个已合并关闭，其余5个仍处于开放待合并状态，显示出社区贡献者正在积极为项目添加新功能。项目目前主要聚焦于扩展集成能力（特别是IMAP/SMTP邮件与Telegram）以及提升用户体验与系统健壮性。值得注意的是，今日关闭的PR (#2831) 验证了Telegram集成已在v2.1.1上运行成功，这是一个重要的里程碑。整体来看，项目处于功能快速扩充期，但主干代码的合并速度可能需要跟上社区贡献的步伐。

## 2. 版本发布

无

## 3. 项目进展

今日有 **1 个PR被合并关闭**，标志着一个重要集成的完成。

- **[CLOSED] feat: add Telegram integration (verified working on v2.1.1)** (#2831)
    - **作者**: aarchh
    - **摘要**: 该PR成功添加了Telegram机器人集成，并已在v2.1.1版本上验证通过。这标志着NanoClaw的通信渠道扩展到了流行的即时通讯平台，用户现在可以（或即将可以）通过Telegram与智能体进行交互。
    - **链接**: [Nanocoai/nanoclaw PR #2831](https://github.com/nanocoai/nanoclaw/pull/2831)

此外，其余5个开放的PR虽然尚未合并，但都处于活跃更新状态（均在昨日有更新），表明社区的工作正在持续推进，核心功能模块正在被构建（如IMAP邮件集成、审批流改进、系统稳定性修复等）。

## 4. 社区热点

今日所有PR和Issue的讨论活跃度不高（评论数均为 undefined）。但从PR的属性来看，以下两个开放PR代表了社区最关心的话题：

1.  **#1235 [OPEN] feat: add IMAP/SMTP email integration**
    - **作者**: aronjanosch | **创建于**: 2026-03-18
    - **链接**: [Nanocoai/nanoclaw PR #1235](https://github.com/nanocoai/nanoclaw/pull/1235)
    - **分析**: 虽然创建已久，但直到昨日仍有更新，说明这个功能开发周期较长，社区对其复杂度有预期。邮件是工作流中不可或缺的一环，用户对通过IMAP/SMTP将智能体接入邮件系统（如Gmail）的需求非常强烈。该PR提供了完整的“channel”和“toolset”方案，是当前项目中最受期待的功能之一。

2.  **#2795 [OPEN] feat: add /add-clidash — read-only CLI-derived dashboard skill**
    - **作者**: leetwito | **创建于**: 2026-06-17
    - **链接**: [Nanocoai/nanoclaw PR #2795](https://github.com/nanocoai/nanoclaw/pull/2795)
    - **分析**: 这是一个新的“Utility技能”，旨在创建一个从命令行派生而来的只读仪表盘。这反映了用户对智能体数据可视化和状态监控的潜在需求，希望不编写复杂代码，仅通过CLI命令就能生成dashboard视图。

## 5. Bug 与稳定性

今日有 **1个 Bug 修复 PR** 处于开放状态，专注于提升系统的稳定性和自恢复能力。

- **#2830 [OPEN] fix(setup): reap dead peer service registrations whose binary is gone**
    - **作者**: amit-shafnir
    - **严重程度**: **中**
    - **摘要**: 该PR修复了一个在开发者环境中常见的问题：当用户删除项目文件而未运行卸载程序时，系统（macOS/macOS/Windows) 会残留指向已删除二进制文件的launchd plist或systemd unit文件。这会导致系统持续尝试启动不存在的进程，最终可能积累大量僵尸注册，浪费系统资源。
    - **关联说明**: 这是一个重要的“开发者体验”修复，能有效防止开发环境因反复测试而变得失控。目前已有fix PR但尚未合并，应优先考虑。
    - **链接**: [Nanocoai/nanoclaw PR #2830](https://github.com/nanocoai/nanoclaw/pull/2830)

另外，还有一个长期修复PR：
- **#2531 [OPEN] fix(poll-loop): suppress duplicate text when send_message fires mid-turn**
    - **严重程度**: **低** (但影响用户体验)
    - **摘要**: 修复轮询循环中，当智能体在对话中途发送消息时，文本重复的问题。这会干扰对话的自然性，是一个明确的质量问题。
    - **链接**: [Nanocoai/nanoclaw PR #2531](https://github.com/nanocoai/nanoclaw/pull/2531)

## 6. 功能请求与路线图信号

- **即将纳入的功能信号**:
    - **IMAP/SMTP邮件集成** (#1235): 尽管是旧PR，但状态活跃，且有完整的MCP工具实现，几乎肯定会成为下一个重大版本的功能基石。
    - **审批流改进** (#2832): `feat(approvals): reject with reason` 提出了“带理由拒绝”的功能。这极大地提升了人机协作的准确性和效率，符合“负责任的AI”路线图，大概率会被合并。

- **潜在需求**:
    - **Telegram集成** (#2831) 已被验证可用，预计很快会合并，成为继Slack/Discord之后又一个受欢迎的渠道。

## 7. 用户反馈摘要

今日无新的Issue创建，也无PR评论，因此直接的用户反馈数据较少。但从PR本身可以推断出以下用户痛点：

- **痛点一：开发者环境管理**。PR #2830 的提出，直接反映了开发者在频繁clone、删除项目后，系统残留服务的清理问题。这表明用户追求一个干净、可重试验证的开箱即用环境。
- **痛点二：对话交互质量**。PR #2531 关于修复消息重复的问题，暗示了现有的轮询机制在特定场景下会产生令人困惑的交互体验，用户期望智能体的响应更加自然和准确。
- **需求一：更丰富的集成**。IMAP邮件 (#1235) 和 Telegram (#2831) 的提交，显示了用户对扩展智能体能力边界（从桌面到云端，从文本到邮件）的强烈渴望。

## 8. 待处理积压

- **长期未合入的重要PR**:
    - **#1235 [OPEN] feat: add IMAP/SMTP email integration** - 创建已3个多月，功能强大且代码量大，需要维护者投入长周期review。
    - **#2531 [OPEN] fix(poll-loop): suppress duplicate text when send_message fires mid-turn** - 创建已1个月，是影响日常使用的明确bug修复，应尽快完成code review并合并。

- **需维护者关注的PR**:
    - **#2830 [OPEN] fix(setup): reap dead peer service registrations whose binary is gone** - 修复开发者痛点，逻辑清晰，应作为近期的优先处理项。
    - **#2832 [OPEN] feat(approvals): reject with reason** - 一个优雅且实用的功能增强，结构简单，建议优先合并以提升用户交互体验。

**提示**: 当前主干代码合并节奏（今日仅合并1个PR）与社区贡献的活跃度（5个PR待合并）存在差距。建议项目维护者优先review和合并**#2832**（小特性，低风险高收益）和 **#2830**（稳定性修复），以保持社区的贡献热情。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，以下是根据您提供的NullClaw项目数据生成的2026年6月23日项目动态日报。

---

# NullClaw 项目动态日报 | 2026-06-23

## 1. 今日速览

今日NullClaw项目整体处于**低频维护**状态。过去24小时内未产生新的Issue或版本发布，但**有2个Pull Requests处于待合并状态**，表明社区贡献并未完全停滞。项目活跃度评估为 **“平静”** ，社区讨论热情不高，焦点集中在Matrix集成的持久化修复和基础镜像的自动化升级上。当前项目健康度稳定，但缺乏核心功能的重大推进信号。

## 2. 版本发布

**无。** 过去24小时内没有新版本发布。

## 3. 项目进展

今日没有PR被合并或关闭，项目核心代码库未发生变更。然而，**有两个关键PR正等待维护者审核与合并**，它们是项目下一步实质性推进的关键：

- **🟡 PR #968: fix(matrix): persist next_batch across restart + test env isolation**
  - **状态：** 待合并
  - **分析：** 这是一个非常关键的**Bug修复**。当前Matrix（可能指个人AI助手集的Matrix消息通道）将同步游标（`next_batch`）仅存储在内存中，导致每次服务重启都会触发一次“初始同步”。修复方案是将该游标持久化到磁盘，避免了不必要的全量同步开销和潜在的流量浪费。此PR一旦合并，将显著提升部署了Matrix通道的用户的体验。
  - **链接：** [查看PR #968](https://github.com/nullclaw/nullclaw/pull/968)

- **🟡 PR #956: ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group**
  - **状态：** 待合并
  - **分析：** 由Dependabot发起的常规依赖更新，将Docker镜像基础从Alpine 3.23升级到Alpine 3.24。这通常包含安全补丁和稳定性改进。尽管是非功能性变更，但保持基础镜像最新是良好的维护实践。
  - **链接：** [查看PR #956](https://github.com/nullclaw/nullclaw/pull/956)

## 4. 社区热点

当前社区讨论热点并不热烈，无高度活跃的讨论帖。**PR #968**是当前最受关注的贡献，它直接回应了运维场景下的一个实际痛点（重启导致全量同步）。这表明社区对**生产环境的稳定性**和**持久化状态管理**有明确诉求。

## 5. Bug 与稳定性

今日没有报告新的Bug。从积压的PR来看，**PR #968 (`fix(matrix): persist next_batch across restart`)** 直接修复了一个已知的稳定性/重启回归问题。该问题属于**中等严重程度**，它不会导致服务崩溃，但会显著影响用户体验和系统资源消耗。该修复已有明确方案，但尚未被合并。

## 6. 功能请求与路线图信号

今日无新增功能请求。当前唯一的路线图信号来自**PR #968**：它暗示了项目核心架构中关于**外部服务集成（Matrix）的持久化能力**可能是一个待完善的领域。考虑到该项目位于AI智能体与个人助手领域，确保与聊天平台的集成稳健可靠是基础能力。

## 7. 用户反馈摘要

由于今日无新Issue，用户反馈趋于静态。从**PR #968**的描述（来自贡献者@addadi）中可以提炼出用户或开发者的痛点：
- **痛点：** “重启后丢失同步状态，导致全量重同步，体验糟糕且浪费带宽。”
- **期望：** 希望关键的连接状态能够持久化到磁盘，实现无损重启。
- **场景：** 部署了NullClaw服务并集成了Matrix聊天后端的用户，当他们需要重启服务（例如为更新版本或调整配置）时，不希望触发一次完整的历史同步。

## 8. 待处理积压

以下PR长期未合并，可能反映了项目维护者的瓶颈或对优先级的不同判断，建议关注：

1.  **PR #956 (`ci(deps): bump alpine from 3.23 to 3.24`)**
    - **创建时间：** 2026-06-15
    - **已等待：** 8天
    - **原因推测：** 常规依赖更新通常优先级较低，但也可能因其涉及Docker镜像基础层，维护者希望与更大版本的发布捆绑测试。
    - **链接：** [查看PR #956](https://github.com/nullclaw/nullclaw/pull/956)

2.  **PR #968 (`fix(matrix): persist next_batch across restart + test env isolation`)**
    - **创建时间：** 2026-06-22
    - **已等待：** 1天
    - **原因推测：** 刚创建不久，可能正在等待维护者的深度Code Review。但鉴于其修复的重要性，建议尽快处理，避免用户因重启问题而流失。
    - **链接：** [查看PR #968](https://github.com/nullclaw/nullclaw/pull/968)

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，现根据您提供的IronClaw项目GitHub数据，呈报2026年6月23日的项目动态日报。

---

## IronClaw 项目日报 — 2026年6月23日

### 1. 今日速览

项目今日处于**高强度开发与问题修复并行**的状态。过去24小时内，项目活跃度极高，共处理18个Issue和23个Pull Request。核心开发团队正聚焦于 **“Reborn”新架构**的性能回归、权限模型落地与自动化管理功能的完善，同时社区贡献者也在积极提交依赖更新和功能提案。一个关键的**Web/Research任务初始化挂起回归**（#5139）被紧急报告，是当前稳定性的主要风险点。总体来看，项目正从功能快速迭代阶段，转向**性能调优与稳定性加固**的关键过渡期。

### 2. 版本发布

无新版本发布。

### 3. 项目进展

今日有多个关键PR被合并/关闭，显著推进了项目的功能完整性和架构健康度。

- **权限模型落地**：
    - **PR #5063 (已关闭)** 实现了基于数据库的全局“自动批准”设置与“永不自动批准”硬下限，解决了用户无法动态调整审批策略的问题。
    - **PR #5062 (已关闭)** 引入了**按工具（per-tool）的权限覆盖模型**，允许用户对每个工具单独设置“始终允许”、“每次询问”或“禁用”，大幅提升了安全性与灵活性。

- **架构重构与稳定**：
    - **PR #5085 (已关闭)** 实现了**并发回合执行**，通过`TurnRunScheduler`打破了过去严格的串行执行模式，有望显著提升LLM推理的资源利用率和吞吐量。
    - **PR #5135 (已关闭)** 将臃肿的`ironclaw_reborn_composition`巨箱拆分为6个聚焦的独立箱，是一次重要的架构清理，为后续维护和协作奠定基础。
    - **PR #5140 (已关闭)** 修复了触发器创建时输入错误信息不透明的问题，现在会返回结构化的修复建议，提升了用户和开发者体验。

- **基础设施与CI**：
    - **PR #5138 (已开启)** 和 **PR #5116 (已关闭)** 均为依赖更新，涉及`rustls`等多个关键库，对安全性和兼容性至关重要。

**项目进展总结**: 项目今日在**用户体验**（权限控制、错误反馈）、**核心性能**（并发执行）和**代码质量**（架构拆解）三个维度上均取得了实质性进展。

### 4. 社区热点

今日社区讨论热度最高的是围绕“Reborn”架构的**性能问题**和**用户反馈**。

- **热点Issue: #5125 “Reborn Performance Issues”** 和其子Iusse (#5126, #5127, #5128)
    - **链接**: [Issue #5125](https://github.com/nearai/ironclaw/issues/5125), [#5126](https://github.com/nearai/ironclaw/issues/5126), [#5127](https://github.com/nearai/ironclaw/issues/5127), [#5128](https://github.com/nearai/ironclaw/issues/5128)
    - **诉求**: 社区和核心开发者都注意到了本地“dogfooding”时`Reborn`响应缓慢的问题。这些Issue的集中提出，反映出**性能已成为影响日常开发体验的最突出痛点**，并直接催生了#5126（延迟日志）、#5127（推理延迟）和#5128（减少冗余步骤）三个专项跟踪任务。

- **热点Issue: #5119 “Reborn Local Dogfooding Findings”**
    - **链接**: [Issue #5119](https://github.com/nearai/ironclaw/issues/5119)
    - **诉求**: 这是一个持续跟踪的“用户反馈”主页，本周（6/22-6/28）的版本于今日开启，表明**项目将“自用”（dogfooding）作为发现用户界面、配置流程和首次使用问题的核心手段**，这是一种健康的开发文化。

### 5. Bug 与稳定性

今日报告的Bug中，**回归问题**的严重性最高。

- **严重**:
    - **Issue #5139**: **Reborn Web/Research任务在初始化时挂起**。这是由主分支最近的10个提交（`2b2ccc55→704fcd43`）引起的回归，导致`PinchBench`每日评测中的21/147项任务失败。**这是目前最紧急的稳定性问题**，已确认零LLM调用和零工具调用。
        - 链接: [Issue #5139](https://github.com/nearai/ironclaw/issues/5139)
        - **状态**: 待修复，尚无关联的Fix PR。

- **中等级别**:
    - **Issue #5129**: “始终批准”功能在特定的`outbound_delivery_target_set`上不生效。该Bug影响特定场景下的自动化审批流程，需要进一步复现和定位。
        - 链接: [Issue #5129](https://github.com/nearai/ironclaw/issues/5129)
        - **状态**: 待调查。
    - **Issue #4108**: **夜间E2E测试失败**。这是一个持续存在的CI问题，`Full E2E`套件在`v2-engine`上失败，需要核心团队关注。
        - 链接: [Issue #4108](https://github.com/nearai/ironclaw/issues/4108)
        - **状态**: 持续未解决，已有28天，需人工介入。

- **已修复**:
    - **Issue #4925**: NEAR AI MCP错误地显示“需要额外设置”。已于今日关闭，表明该UI/UX问题已得到解决。
        - 链接: [Issue #4925](https://github.com/nearai/ironclaw/issues/4925)

**稳定性总结**: 主分支的回归问题（#5139）是当前**最大风险**，它直接影响核心功能的可用性并阻塞自动化测试。其紧急程度应高于其他所有任务。

### 6. 功能请求与路线图信号

今日展示了几个清晰的路标信号，部分已有对应的PR。

- **Telegram 频道支持**: Issue #5124 明确提出了支持Telegram作为`Reborn`的一个交互渠道。这标志着项目正在规划**扩展交流入口**，不局限于WebUI。
    - 链接: [Issue #5124](https://github.com/nearai/ironclaw/issues/5124)

- **自动化管理功能**:
    - **删除自动化** (Issue #5122, PR #5133): 已提出并获得核心开发者（italic-jinxin）的PR实现，**很可能进入下一版本**。
        - 链接: [Issue #5122](https://github.com/nearai/ironclaw/issues/5122), [PR #5133](https://github.com/nearai/ironclaw/pull/5133)
    - **暂停/恢复自动化** (Issue #5121, PR #5131): 与删除功能配套，同样已有核心开发者提交的PR，是**即将完成的功能**。
        - 链接: [Issue #5121](https://github.com/nearai/ironclaw/issues/5121), [PR #5131](https://github.com/nearai/ironclaw/pull/5131)

- **技能提取与自我进化**: PR #5061 提出了一项大胆的功能，让AI能够从成功的交互中提取“技能”并自我更新。尽管仍为草稿状态，但这反映了**项目对Agent长期学习和个性化能力的前瞻性探索**。
    - 链接: [PR #5061](https://github.com/nearai/ironclaw/pull/5061)

### 7. 用户反馈摘要

从今日的Issue和评论中，可以提炼出如下用户痛点与需求：

- **性能瓶颈是头号痛点**: 在本地使用`Reborn`时，用户普遍反映“感觉慢”（#5125），尤其是在推理步骤和多余的Agent循环上。这直接推动了性能跟踪系列Issue的建立。
- **配置与权限的易用性需求**: 虽然权限模型已落地（PR #5062, #5063），但用户对特定权限设置（如“始终批准”）（#5129）的生效仍有困惑，说明**相关User Experience（用户体验）可能需要进一步优化**。
- **对“黑盒”失败的不满意**: Issue #5140的修复背景反映了用户无法理解`trigger_create`为何失败的问题。这表明**透明且结构化的错误信息是提升用户信任感和调试效率的关键**。
- **集成其他平台的需求**: 对Telegram的支持请求（#5124）表明，用户正在**将IronClaw视为一个通用的Agent平台**，期待其能接入更广泛的日常生活工具。

### 8. 待处理积压

以下Issue/PR已持续较长时间且尚未得到解决，建议维护者关注：

- **Issue #4108**: 夜间E2E测试持续失败（从5月27日至今，29天）。这是一个影响CI置信度的关键问题，可能导致回归问题（如#5139）未被及时发现。
    - 链接: [Issue #4108](https://github.com/nearai/ironclaw/issues/4108)

- **PR #4032**: WASM依赖更新PR（`wit-component`, `wit-parser`），从5月25日开启至今将近一个月。长时间未合并可能导致与主分支产生更多冲突，且错过重要的组件模型更新。
    - 链接: [PR #4032](https://github.com/nearai/ironclaw/pull/4032)

- **PR #4712**: 将Slack设置迁移至WebUI的PR，自6月10日起已开启近两周。这是改善外部渠道配置体验的重要环节，建议在解决紧急回归后优先处理。
    - 链接: [PR #4712](https://github.com/nearai/ironclaw/pull/4712)

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

好的，这是为您生成的 LobsterAI 项目动态日报（2026-06-23）。

---

# LobsterAI 项目动态日报 — 2026-06-23

## 1. 今日速览
今日项目整体活跃度**中等**，核心开发团队在功能迭代和框架升级上取得了明显进展。过去24小时内，开发重心主要集中在 **Cowork（协同工作）模式**的新增“计划模式”功能以及 **OpenClaw 插件系统**的兼容性与稳定性修复上。与此同时，社区方面较为平静，但有5个长期遗留的 Bug Issue（标注为 stale）仍在等待解决，其中多个与概览页（Profile）的 UI 和数据统计相关。令人关注的是，尽管无新版本发布，但被标记为“已关闭”的6个 PR 均为今日合并，显示了团队在清理技术债务和推进主要功能上的决心。

## 2. 版本发布
无。过去24小时内无新版本发布。

## 3. 项目进展
今日合并/关闭了6个 PR，标志着项目在功能开发和基础设施升级方面取得了扎实进展。最值得关注的是以下合并项：

- **核心功能新增：Cowork 计划模式 (PR #2183)**
  - 作者: liuzhq1986
  - 摘要: 该 PR 为 Cowork 对话添加了“计划模式”工作流。新增功能包括：在 Composer 菜单中发起计划模式；将生成的计划渲染为可独立交互的块；支持复制、下载、展开/折叠计划；在执行计划时阻止其它工具调用以确保清晰；允许用户批准计划并进入正常执行流程。这是一个重要的用户体验和功能架构升级。
  - 链接: [PR #2183](https://github.com/netease-youdao/LobsterAI/pull/2183)

- **核心基础设施：OpenClaw 插件系统与 Electron 框架升级**
  - PR #2187, #2186, #2185, #2184, #2182 均已在今日被合并。
  - 摘要: 这批合并的 PR 集中解决了 OpenClaw 插件安装兼容性问题（#2182, #2186）、测试用例对齐（#2187）、运行路径修复（#2185）以及文档更新（#2184）。这表明项目正在为未来更稳定的插件生态铺平道路。此外，另一个未合并的 PR #1277 正在对 Electron 框架进行版本升级（从 40.2.1 到 42.4.0），这通常意味着性能、安全性和新API的支持将得到提升。

## 4. 社区热点
今日无特别活跃的讨论帖。当前社区热点主要集中在5个 **已进入“stale”（即将关闭）状态的 Bug Issue**，它们虽然活跃度不高，但代表了用户长期未能解决的痛点。

- **热点 Issue 分析：概览页的多项 Bug**
  - 涉及 Issue: #1411, #1414, #1416
  - 核心诉求: 用户 STUPIDDDD0 连续提交了多个关于“概览页”（`#/profile`）的 Bug，包括“时间筛选器无响应”、“总会话数显示为0”以及“切换英文后UI错乱”。这些问题集中在核心用户界面的数据准确性和UI适配性上，对用户体验影响较大。尽管问题报告于4月初，但至今仍未被解决，表明该模块的修复优先级可能不高或复杂度超出预期。
  - 链接: [Issue #1411](https://github.com/netease-youdao/LobsterAI/issues/1411), [Issue #1414](https://github.com/netease-youdao/LobsterAI/issues/1414), [Issue #1416](https://github.com/netease-youdao/LobsterAI/issues/1416)

## 5. Bug 与稳定性
今日未报告新的 Bug，但以下为急待修复的 **长期未解决 Bug**，对用户体验影响显著：

**高优先级**
- **【概览页】“总会话数”始终显示为0（Issue #1414）**
  - 摘要: 用户明确有大量使用行为，但概览页核心统计数据“总会话数”始终为0，属于严重的数据展示错误。
  - 状态: `[stale]`，尚无修复 PR。
  - 链接: [Issue #1414](https://github.com/netease-youdao/LobsterAI/issues/1414)

- **【概览页】时间维度筛选器无响应（Issue #1411）**
  - 摘要: “过去30天”筛选按钮看似可交互但点击无反应，导致用户无法查看其他时间段的使用统计。
  - 状态: `[stale]`，尚无修复 PR。
  - 链接: [Issue #1411](https://github.com/netease-youdao/LobsterAI/issues/1411)

**中优先级**
- **【UI】切换英文后布局错乱（Issue #1416）**
  - 摘要: 概览页中英文切换后，文本数字重叠，UI未做自适应适配。
  - 状态: `[stale]`，尚无修复 PR。
  - 链接: [Issue #1416](https://github.com/netease-youdao/LobsterAI/issues/1416)
- **【定时任务】跨天触发未生成历史记录（Issue #1409）**
  - 摘摘要: 定时任务在跨天执行时存在逻辑缺陷，无法生成历史记录。
  - 状态: `[stale]`，尚无修复 PR。
  - 链接: [Issue #1409](https://github.com/netease-youdao/LobsterAI/issues/1409)

**低优先级（UI/UX）**
- **【UI】输入框skills过多展示不友好（Issue #1413）**
  - 状态: `[stale]`，无修复 PR。
  - 链接: [Issue #1413](https://github.com/netease-youdao/LobsterAI/issues/1413)

## 6. 功能请求与路线图信号
今日无直接的新功能请求。但从合并的 PR 中可以看出项目的路线图信号：

- **Cowork 模式正在演变**：PR #2183 中“计划模式”的加入，表明 LobsterAI 正在将 Cowork 从简单的对话代理，升级为一个支持复杂任务规划、审批和执行的工作流引擎。这可能是未来版本的重要卖点。
- **OpenClaw 插件生态趋于稳定**：多个关于 OpenClaw 的修复 PR 被合并（#2186, #2185, #2182），尤其是对多个IM插件（钉钉、飞书、企微）的安装支持进行升级，显示项目正在为更广泛的第三方集成构建稳定的基础。

## 7. 用户反馈摘要
今日无新的用户反馈。从历史 Issue 评论中可提炼出以下关键点：

- **核心痛点：数据准确性**：用户 STUPIDDDD0 提交的多个Issue（#1414, #1411）集中反映了用户对关键使用数据（总会话数、时间段统计）不准确的情况感到困扰。这直接影响用户对自己使用情况的掌控感和对平台的信任度。
- **UI/UX 问题**：英文版UI布局错乱（#1416）、技能标签过多时交互笨拙（#1413）等细节问题，持续时间较长（均超过2个月），说明本地化和复杂交互场景下的UI测试和打磨可能有所欠缺。

## 8. 待处理积压
以下 Issue 和 PR 长时间未获得维护者响应或关闭，需引起关注：

**长期未解决的 Bug (Issue)**
- **#1414, #1411, #1416, #1409**: 四个已进入 `[stale]` 状态的 Bug，均来自核心概览页和定时任务逻辑，对用户使用体验有重大影响。它们自4月初被提出以来，已超过2个月未得到有效处理，正面临被自动关闭的风险。
  - 链接: [Issue #1414](https://github.com/netease-youdao/LobsterAI/issues/1414), [Issue #1411](https://github.com/netease-youdao/LobsterAI/issues/1411), [Issue #1416](https://github.com/netease-youdao/LobsterAI/issues/1416), [Issue #1409](https://github.com/netease-youdao/LobsterAI/issues/1409)

**长期未合并的 PR**
- **#1407, #1408, #1410, #1420, #1421**: 这些涉及关键安全（Token Proxy 请求体限制）、稳定性（MCP Server Promise 处理、轮询并发）和性能（SQLite 落盘优化、内存全量查询）的 PR 已停滞超过2.5个月，有较大的合入压力。如果合入，将显著提升应用的安全性和响应速度。
  - 链接: [PR #1407](https://github.com/netease-youdao/LobsterAI/pull/1407), [PR #1408](https://github.com/netease-youdao/LobsterAI/pull/1408), [PR #1410](https://github.com/netease-youdao/LobsterAI/pull/1410), [PR #1420](https://github.com/netease-youdao/LobsterAI/pull/1420), [PR #1421](https://github.com/netease-youdao/LobsterAI/pull/1421)

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

好的，作为AI智能体与个人AI助手领域开源项目分析师，根据您提供的CoPaw (QwenPaw) GitHub数据，我已为您生成了2026年6月23日的项目动态日报。

---

# CoPaw (QwenPaw) 项目动态日报 | 2026-06-23

## 今日速览

项目在过去24小时内社区活跃度较高，Issues和PR的讨论与提交都非常频繁。共产生23条Issue更新（其中18条为新提交或活跃讨论）和50条PR更新（30条待合并）。尽管没有发布新版本，但社区对稳定性的担忧（尤其是`1.1.12.post1`版本）与对移动端适配的强烈需求形成了鲜明对比。核心开发者@ekzhu和社区贡献者@yaozy2020表现尤为活跃，分别聚焦于运行时修复和全面的UI移动端适配工作。整体来看，项目正处在一个“修复积弊”与“功能扩展”并行的关键阶段。

## 项目进展

今日合并/关闭了20个PR，并在多个方面取得了显著进展，尤其值得关注的是安全加固和核心功能修复。

- **安全加固**：PR [#5028](https://github.com/agentscope-ai/QwenPaw/pull/5028) 已被合并，修复了OS钥匙串主密钥在同一个机器上所有安装实例间共享的严重安全问题。现在，不同的安装目录会使用独立的密钥，防止恶意软件跨安装窃取密钥。
- **核心功能修复**：PR [#5357](https://github.com/agentscope-ai/QwenPaw/pull/5357) 修复了嵌入式模式下会话切换卡死的Bug（对应Issue #5354）。
- **功能增强（已关闭/合并）**：
    - 桌面版（Tauri）**插件加载器**问题 [#4889](https://github.com/agentscope-ai/QwenPaw/issues/4889) 已被关闭，表明该问题已得到解决。
    - PR [#5027](https://github.com/agentscope-ai/QwenPaw/pull/5027) 被合并，优化了后端启动流程，不再将“预热”会话留存在聊天历史中，并支持会话恢复功能。
- **新功能探索**：社区正积极为项目添砖加瓦，新的PR包括：可滚动的上下文管理器（scroll context management）[#5321](https://github.com/agentscope-ai/QwenPaw/pull/5321)、记忆搜索的时效性排序 [#5325](https://github.com/agentscope-ai/QwenPaw/pull/5325)、以及模型批量测试与删除 [#5297](https://github.com/agentscope-ai/QwenPaw/pull/5297)。

## 社区热点

今日讨论最激烈的是与系统稳定性直接相关的几个Bug报告。

1.  **[#5218: 子Agent触发上下文压缩导致进程冻结](https://github.com/agentscope-ai/QwenPaw/issues/5218)**
    - **热度**: 17条评论，未关闭
    - **分析**: 这是当前最严重的崩溃问题。当子代理执行上下文压缩时，会导致整个应用无响应，只能通过重启恢复。这表明上下文管理机制存在严重的死锁或死循环问题，是影响可用性的关键Bug。社区的17条评论反映了此问题的广泛影响和用户的高度不满。

2.  **[#5354: 消息发送队列串台；切换对话卡死](https://github.com/agentscope-ai/QwenPaw/issues/5354)**
    - **热度**: 4条评论，已关闭
    - **分析**: 此问题非常“接地气”，直接影响了日常使用。新增的消息队列虽提升了效率，但带来了“串台”的副作用，使得消息可能发送到错误的Agent。用户还报告了切换对话后“切不回去”的游离状态。幸运的是，修复PR [#5357](https://github.com/agentscope-ai/QwenPaw/pull/5357) 已在今日提交，社区反应迅速。

3.  **[#5370: send_file_to_user 工具返回HTTP 404错误](https://github.com/agentscope-ai/QwenPaw/issues/5370)**
    - **热度**: 5条评论，已关闭
    - **分析**: 此Bug导致文件分享功能在控制台前端完全失效。问题根源在于前端在构建预览URL时错误地丢弃了文件的绝对路径，导致HTTP 404。虽然已关闭，但其修复方式（修改前端路由处理逻辑）值得持续关注，确保类似路径解析问题不再发生。

## Bug 与稳定性

今日报告的Bug数量较多，其中部分问题严重影响了核心功能。

- **严重**:
    - **[#5218] 子Agent上下文压缩导致进程冻结**: 无响应，需手动重启。无直接fix PR。
    - **[#5398] Cron任务调度器停止工作**: 应用存活但定时任务不再触发，严重影响自动化功能。无直接fix PR。
- **高**:
    - **[#5379] Python安装后启动报Internal Server Error**: 新用户无法使用，入门障碍。
    - **[#5378] 新增自定义模型后页面无法使用**: 模型配置页面因自动填入错误endpoint而白屏。
    - **[#5333] Agent提交指令后卡死，按钮状态错误**: 造成用户困惑，怀疑与DeepSeek模型兼容性有关。
- **中**:
    - **[#5317] Tauri桌面版找不到Python环境**: 导致用户Skill无法执行Python脚本，影响高级功能。
    - **[#5330] Zhipu供应商API测试成功但模型测试全部失败**: 表明模型路由或名称解析存在问题。
    - **[#5344] API接口静默丢包**: 当Agent忙碌时，通过API发送的消息会丢失，违反“最少惊讶”原则。
- **低**:
    - **[#5362/5364/5369等] 多个页面在移动端显示异常**: 用户界面问题，不影响核心功能但影响体验。
    - **[#5374] Mac Chrome浏览器不支持拖拽上传**: 用户体验细节问题。
    - **[#5373] Shell命令执行无法解析特殊字符**: 影响`execute_shell_command`工具的功能完整性。

## 功能请求与路线图信号

用户对新功能的需求明确，其中几个方向可能会被优先纳入下一版本。

1.  **移动端适配**: 这是一个非常强烈的信号。新晋贡献者@yaozy2020 今日提交了超过8个PR，专门适配**Sessions, CronJobs, Channels, Env, Workspace, MCP, ACP**等多个页面的移动端布局。这回应了社区对“移动设备可靠工作”的强烈呼声（如Issue [#5360](https://github.com/agentscope-ai/QwenPaw/issues/5360)）。**极大概率被纳入下个版本**。
2.  **知识库集成**: Issue [#2969](https://github.com/agentscope-ai/QwenPaw/issues/2969) 已存在两个多月并获得2个👍。用户希望将个人知识库与Agent能力结合。这属于长期路线图上的重要功能，但预计短期内不会实现。
3.  **与智能体/工作空间解耦**: Issue [#5392](https://github.com/agentscope-ai/QwenPaw/issues/5392) 提出的“智能体与工作空间解耦”是一个高质量的架构建议，旨在支持智能体的复用与切换。这是一个重要的方向性信号，但涉及核心架构变更，需要慎重评估。
4.  **记忆增强**: Issue [#5387](https://github.com/agentscope-ai/QwenPaw/issues/5387) 和 PR [#5325](https://github.com/agentscope-ai/QwenPaw/pull/5325) 都指向了对记忆系统（Memory）的精细化改进，例如引入“回忆感知”和“时效性排序”。这表明社区希望Agent的长期记忆更智能、更有选择性地被巩固。

## 用户反馈摘要

- **痛点聚焦**:
    - **升级体验差**: 用户@daigoopautoy两次报告（#5262）升级后已禁用的技能会重新启用，UI状态无法保持，对升级产生抵触心理。
    - **稳定性焦虑**: 多个用户报告Agent卡死、进程冻结问题，导致对日常使用的可靠性存疑。用户@bob-geek11 的Agent卡死后，文本框状态异常，造成很大困惑。
    - **核心功能回退**: 用户@zjccjz869 抱怨`send_file_to_user`图片发送功能在新版本中退步，从“正常显示”变为“只显示命令不显示图片”，这是典型的功能回归问题。用户@BorisPolonsky则遇到了该工具的HTTP 404错误。
    - **迁移成本**: 用户@allenz-ai 询问从OpenClaw/Hermes迁移配置的可能性，反映项目缺乏与其他同类工具的导入/支持能力，增加了新用户的入门门槛。
- **使用场景**:
    - **文件处理**: 用户禁用内置的`docx`, `xlsx`等技能，表明其使用场景可能专注于文本对话或特定领域，不希望被无关的文件处理工具干扰。
    - **桌面应用**: 用户@SwordSifu 反馈Tauri桌面版的插件加载器问题，说明部分用户选择使用桌面客户端，并对插件系统有强烈需求。
    - **API集成**: 用户@xyxy 使用API与控制台进行交互，希望有实时UI更新，表明项目在高级集成场景（如Agent间通讯）中有应用。

## 待处理积压

- **[#5262] 升级后内置技能重置为启用**: 这是一个存在了6天的老Bug，且是第二次上报。用户对公司“不忘初心”的行为感到不满。**提醒维护者**：若无心修复，应在文档中说明，或作为一个已知限制告知用户。
- **[#5254] QwenPaw是否支持导入OpenClaw/Hermes配置**: 5天前的问题，目前只有2条评论。若项目希望吸引更多用户，提供一个迁移工具或指南会是很好的切入点。**提醒维护者**：可在路线图中评估此需求。
- **[#5097] 修复安全设置中Shield图标居中问题**: 这是一个12天前提交的PR，至今仍在审查中。UI细节虽小，但长时间的Review可能挫伤新贡献者的积极性。**提醒维护者**：尽快给出反馈或合并。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，以下是根据您提供的ZeroClaw项目数据生成的2026年6月23日项目动态日报。

---

# ZeroClaw 项目动态日报 | 2026-06-23

## 1. 今日速览

项目今日处于**极高强度开发和维护状态**。过去24小时内，Issue和PR各产生了50条更新，社区活跃度爆棚。核心团队正围绕一次大规模的安全和架构重构（“Wasm化”与“去Node.js化”）展开激烈讨论，同时针对多个S1级（工作流阻塞）Bug的修复工作也在同步推进。虽然今日无新版本发布，但大量高风险（`risk: high`）的合并请求（PR）正在排队等待审查，其内容直接指向下一重要版本（`v0.9.0`）的愿景。项目当前健康度**极高**，但需警惕因同时处理过多高风险变更带来的审查压力。

## 3. 项目进展

今日项目线合并了1个PR，涉及对ZeroCode TUI交互细节的打磨。虽然数量不多，但标志着项目在“用户体验抛光”阶段取得了进展。

- **TUI 用户体验优化**: 设计人员 `@MaHaoHao-ch` 的PR [#7999](https://github.com/zeroclaw-labs/zeroclaw/pull/7999) 已合并，现在ZeroCode TUI的配置面板会显示当前生效的配置目录，解决了多配置文件环境下的混淆问题。

**整体进展**：项目当前正处在一个“大拆解、大建设”的时期。社区和核心团队正在处理一系列影响线路图的RFC（如插件系统、供给链安全），同时被S1阻塞级Bug分散精力。整体向前迈进的步伐很大，但主要是“打地基”阶段。

## 4. 社区热点

今日社区讨论的焦点集中在两个高风险的战略RFC上，它们不仅评论多，且直接关系到ZeroClaw未来的技术路线。

1.  **[RFC: Wasm-first plugin runtime](https://github.com/zeroclaw-labs/zeroclaw/issues/8135)** (Issue #8135)
    - **诉求**: 社区成员 `@ConYel` 提出将Wasm作为ZeroClaw插件的默认运行时，并要求所有第三方扩展以签名的Wasm模块发布。
    - **分析**: 这是对项目安全性的根本性提升。将插件限制在沙箱化、能力声明的Wasm环境里，能彻底解决原生插件可能带来的任意代码执行和系统资源滥用风险。讨论背后隐含了社区对插件安全和可信生态的强烈需求。

2.  **[RFC: Replace React/Vite web UI build with Rust→Wasm framework](https://github.com/zeroclaw-labs/zeroclaw/issues/8132)** (Issue #8132)
    - **诉求**: 同样是 `@ConYel` 发起，提议将前端Web UI从React / Vite / Node.js生态迁移到纯Rust + Wasm框架（如Dioxus, Leptos, Yew）。
    - **分析**: 这是与其Wasm-first大战略一脉相承的动作。当前唯一的Node.js依赖是构建Web UI，迁移后将实现“零Node.js”的终极目标，消除构建时依赖的供应链攻击面。这是对 `@JordanTheJet` 提出的“信任最小化”理念的用户界面落地，表明社区的激进派正在寻求从底层到前端的全面“失控去Node.js化”。

## 5. Bug 与稳定性

今日汇报的Bug集中在**运行时、网关和MCP工具**集成上，S1级阻塞问题依然存在。

| 严重程度 | Issue 标题 | 概述 | 是否有修复PR |
| :--- | :--- | :--- | :--- |
| **S1** | [bug(zerocode): MCP tools/tool_search missing from TUI sessions...](https://github.com/zeroclaw-labs/zeroclaw/issues/8193) (#8193) | MCP工具在ZeroCode TUI中无法显示，尽管网关能看到它们。 | **有**，PR [#8199](https://github.com/zeroclaw-labs/zeroclaw/pull/8199) 正在尝试修复。 |
| **S1** | [ Bug: Kimi Code ... targets dead endpoint (404)](https://github.com/zeroclaw-labs/zeroclaw/issues/8154) (#8154) | 内置的Kimi Code提供商标配终端点失效，导致连接失败。 | 无 |
| **S1** | [Bug: native/MCP tools unavailable on OpenAI Responses...](https://github.com/zeroclaw-labs/zeroclaw/issues/7756) (#7756) | MCP工具注册后在OpenAI/Anthropic模型上不可见。 | 无 |
| **S1** | [Bug: Default 32k context budget is exceeded...](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) (#5808) | 默认上下文窗口在首次交互时就被系统提示词和工具定义撑爆。 | 有一个大型重构PR [#8196](https://github.com/zeroclaw-labs/zeroclaw/pull/8196) 试图从根本上重写上下文管理。 |
| **S0** | [Bug: disabling an agent does not stop its bound Discord channel](https://github.com/zeroclaw-labs/zeroclaw/issues/8013) (#8013) (已关闭) | 禁用Agent后，其关联的Discord频道依然能响应消息，存在数据泄露风险。该问题已在关闭时被解决。 | 已解决。 |
| **S2** | [Bug: 74 test failures on Windows](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) (#7462) | 项目在Windows上的测试大面积失败，表明跨平台兼容性存在根本性问题。 | 无 |

## 6. 功能请求与路线图信号

今日提交的功能请求具有很强的“路线图驱动”特征，并非零散需求：

1.  **安全与认证**:
    - **[Feature]: Automatically set risk profile to yolo in quickstart** ([#8125](https://github.com/zeroclaw-labs/zeroclaw/issues/8125)): 用户在快速入门时应自动使用宽松的 `yolo` 安全预设，以避免新手因过于严格的限制而产生糟糕体验。
    - **[Feature]: local username/password AuthProvider** ([#8076](https://github.com/zeroclaw-labs/zeroclaw/issues/8076)): 为无IDP（身份提供者）的场景提供一个简单的本地用户名/密码认证方案。
    - **[Feature]: Optional Telegram webhook mode** ([#8046](https://github.com/zeroclaw-labs/zeroclaw/issues/8046)): 为Telegram通道增加Webhook拉取模式作为现有长轮询的替代方案。

2.  **用户体验与配置**:
    - **[Feature]: [channels] session_ttl_hours - Auto-truncate stale session history** ([#8134](https://github.com/zeroclaw-labs/zeroclaw/issues/8134)): 实现已存在的`session_ttl_hours`配置项，自动清理过期会话，减少Token消耗。
    - **Support OpenRouter model fallbacks array in provider config** ([#8138](https://github.com/zeroclaw-labs/zeroclaw/issues/8138)): 利用OpenRouter的原生模型回退功能，增强ZeroClaw使用OpenRouter时的可靠性。

**路线图信号**: 这些功能请求与 `v0.9.0` 的 `auth, security, gateway` 主题高度吻合，表明社区已响应并获得维护者认可（`status:accepted`）。尤其是**本地用户名/密码认证**的提议，对不想部署OIDC服务的小团队极具吸引力。

## 7. 用户反馈摘要

- **关于快速入门**: 用户报告 `@singlerider` 发起的功能请求([#8125](https://github.com/zeroclaw-labs/zeroclaw/issues/8125))中提到“用户报告在无意中用严格的风险配置文件限制自己时体验不佳”，这表明默认安全配置可能过于激进，正在损害新用户的首次体验。
- **关于MCP工具不可用**: 用户在 `#8193` 和 `#7756` 中的抱怨非常直接。他们发现MCP工具能“连接”但无法在TUI或特定提供商上“使用”，这构成了**实际流程的阻塞**。**“连接了，但用不了”** 比“连接不上”更令人沮丧，因为它造成了虚假的期望。
- **关于配置混淆**: 合并的PR `#7999` 解决了多配置目录下的混乱问题，反应出有用户在使用 `--config-dir` 标志或环境变量时遇到了困扰。

## 8. 待处理积压

以下为长期未解决但严重影响项目健康度的积压问题，请维护者重点关注：

1.  **[Bug]: 74 test failures on Windows** ([#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462))
    - **状态**: 已开放13天，状态为 `status:accepted` (已接受)。
    - **警告**: 这是一个 **S2** 严重性但影响范围极广的问题。`74个` 测试失败意味着Windows平台基本不可用。除非项目正式放弃Windows支持，否则这是需要立即处理的“技术债”。没有修复PR是一个非常危险的信号，可能会把Windows用户拒之门外。

2.  **RFC: Retire the standalone aardvark-sys crate** ([#8043](https://github.com/zeroclaw-labs/zeroclaw/issues/8043))
    - **状态**: 已开放3天，等待维护者审核(`needs-maintainer-review`)。
    - **警告**: 这是一个架构清理的RFC，指出代码库中存在冗余和不一致的库。这类问题虽不直接导致崩溃，但会随着时间推移使代码库变得臃肿和难以维护。如果项目正在进行大规模重构，处理此类积压是必要的。

3.  **Keybinds vs. OS globals** ([#8075](https://github.com/zeroclaw-labs/zeroclaw/issues/8075))
    - **状态**: 已开放3天，状态为 `status:accepted`。
    - **警告**: 这是一个关于TUI快捷键与MacOS系统全局快捷键冲突的讨论。虽非阻塞级Bug，但影响核心用户体验。如果不解决，可能导致用户在编辑时误触系统功能，或认为软件存在“奇怪且不可复现的Bug”。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*