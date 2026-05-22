# OpenClaw 生态日报 2026-05-22

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-22 00:25 UTC

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

# OpenClaw 项目动态日报 | 2026-05-22

## 1. 今日速览

OpenClaw 今日呈现**极高活跃度**：24小时内 Issues 更新 500 条（95% 为活跃/新开，仅 25 条关闭），PR 更新 500 条（456 条待合并，合并率仅 8.8%），表明社区参与热情高涨但代码审查吞吐成为瓶颈。两个版本同日发布（含一个 beta），聚焦执行安全与 Discord 语音功能。值得关注的是，**高优先级 Bug 密集涌现**——过去48小时内创建的 P1 级问题涉及会话状态丢失、认证配置错误、Codex 运行时停滞等核心稳定性问题，项目正处于快速迭代与质量承压的关键阶段。

---

## 2. 版本发布

### v2026.5.20 (稳定版) & v2026.5.20-beta.2
- **发布时间**：2026-05-20/21
- **完整变更日志**：[v2026.5.20](https://github.com/openclaw/openclaw/releases/tag/v2026.5.20) | [v2026.5.20-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.5.20-beta.2)

| 变更项 | 详情 | 影响评估 |
|:---|:---|:---|
| **执行审批安全加固** | 移除旧的 `cat SKILL.md && printf ... && <skill-wrapper>` 兼容路径，强制要求通过 `read` 工具加载技能文件，仅真实技能可执行文件自动获得允许 | 🔴 **破坏性变更**——依赖旧版技能包装器的自定义技能需迁移 |
| **Discord 语音跟随** | 语音会话支持跟随配置的 Discord 用户进入语音频道 | 🟢 新功能，无破坏性 |

**迁移注意事项**：使用自定义技能包装器的用户需验证技能加载方式，确保通过 `read` 工具读取 SKILL.md，否则执行审批将失败。

---

## 3. 项目进展

### 今日合并/关闭的关键 PR

| PR | 作者 | 状态 | 核心贡献 | 链接 |
|:---|:---|:---|:---|:---|
| **#85054** — 保留已接受 spawn 终端成功状态 | samzong | ✅ **已合并** | 修复纯中继代理接受子会话后被误判为不完整空父轮次的问题，提升多代理可靠性 | [PR #85054](https://github.com/openclaw/openclaw/pull/85054) |
| **#85135** | clawsweeper[bot] | ✅ 自动合并就绪 | 使 #85054 达到 ClawSweeper 自动合并标准 | [PR #85135](https://github.com/openclaw/openclaw/pull/85135) |
| **#85117** — 修复 Codex computer use 桥接等待 | kevinslin | ❌ **已关闭** | 解决异步 elicitation bridge 未等待导致请求-响应记账提前执行的问题 | [PR #85117](https://github.com/openclaw/openclaw/pull/85117) |
| **#85086** — 拒绝 active-memory 助手闲聊 | MonkeyLeeT | ❌ **已关闭** | 修复 #84034：过滤助手闲聊、澄清模板和模型/日期/时间帮助文本进入 active-memory 摘要 | [PR #85086](https://github.com/openclaw/openclaw/pull/85086) |
| **#83990** — 允许提供商超时覆盖 | giodl73-repo | ❌ **已关闭** | 支持内置提供商覆盖（如 `models.providers.openai.timeoutSeconds`）无需完整自定义声明 | [PR #83990](https://github.com/openclaw/openclaw/pull/83990) |

**整体推进评估**：今日合并以**会话状态修复**为主线，解决多代理 spawn 判定、内存噪声过滤等关键可靠性问题，但大量高价值 PR（如 Discord 认证预热、Slack 原生审批、网关内存边界）仍在审查队列中，代码吞吐效率制约版本质量提升速度。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 👍 | 核心诉求 | 链接 |
|:---|:---|:---:|:---:|:---|:---|
| 1 | **#75 Linux/Windows Clawdbot Apps** | 105 | 75 | 跨平台桌面客户端缺口——macOS/iOS/Android 已有，Linux/Windows 长期缺失，企业部署受阻 | [Issue #75](https://github.com/openclaw/openclaw/issues/75) |
| 2 | **#9443 预构建 Android APK 发布** | 24 | 1 | 降低 Android  companion app 使用门槛，由 AI 助手代提交体现无障碍需求 | [Issue #9443](https://github.com/openclaw/openclaw/issues/9443) |
| 3 | **#22438 分层引导文件加载** | 16 | 0 | **成本控制诉求**：大工作区每次会话加载全部文件浪费 token，需渐进式上下文控制 | [Issue #22438](https://github.com/openclaw/openclaw/issues/22438) |
| 4 | **#12602 Slack Block Kit 支持** | 13 | 0 | 富交互消息能力——从纯文本升级到结构化 UI，用于 CRM 摘要、数据库查询结果展示 | [Issue #12602](https://github.com/openclaw/openclaw/issues/12602) |
| 5 | **#84059 EmbeddedAttemptSessionTakeoverError** | 13 | 8 | **紧急稳定性问题**：05.18 升级后嵌入式代理完全不可用，会话文件锁竞争 | [Issue #84059](https://github.com/openclaw/openclaw/issues/84059) |

**诉求分析**：社区呈现**"平台扩张"与"效率优化"双主线**——一方面强烈要求跨平台覆盖（Linux/Windows/Android），另一方面深度用户关注 token 经济性和上下文管理。值得注意的是 #75 的 🌊 off-meta tidepool 标签与极高互动量形成反差，表明该需求虽非核心路线但用户基数庞大。

---

## 5. Bug 与稳定性

### 按严重程度排列的今日 Bug

| 优先级 | Issue | 类型 | 状态 | 描述 | 是否有 Fix PR | 链接 |
|:---|:---|:---|:---|:---|:---:|:---|
| **P1** | **#84059** | 回归 | ✅ 已关闭 | 05.18 升级后嵌入式代理**全部失败**：会话文件在提示锁释放期间被修改 | ❌ 无独立 PR，可能由 #85086 等内存修复间接缓解 | [Issue #84059](https://github.com/openclaw/openclaw/issues/84059) |
| **P1** | **#62505** | 回归 | 🔴 开放 | 编码代理**完全无法完成任何任务**——04.2 正常，当前版本仅输出模糊状态更新 | ⚠️ #85110 部分相关（阻止仅进度完成） | [Issue #62505](https://github.com/openclaw/openclaw/issues/62505) |
| **P1** | **#31583** | 回归 | 🔴 开放 | `exec` 工具**不继承 `skills.entries.*.env`**，密钥注入失效 | ✅ **#85125 含相关认证预热修复** | [Issue #31583](https://github.com/openclaw/openclaw/issues/31583) |
| **P1** | **#55334** | 性能 | 🔴 开放 | `sessions.json` **无界增长导致网关 OOM**——skillsSnapshot 每会话重复，无临时会话清理 | ⚠️ #79068 网关内存边界修复相关 | [Issue #55334](https://github.com/openclaw/openclaw/issues/55334) |
| **P1** | **#84076** | 行为 | ✅ 已关闭 | Codex app-server 在 `item/completed` 后停滞，无 `turn/completed` 则中止无恢复 | ❌ 标记为已关闭但摘要显示"仍丢失生产回合" | [Issue #84076](https://github.com/openclaw/openclaw/issues/84076) |
| **P1** | **#84880** | 回归 | 🔴 开放 | **v2026.5.19 仍拒绝非 off 的 subagent thinking**，#84706 关闭但修复无关 | ⚠️ 需重新打开 #84706 或新 PR | [Issue #84880](https://github.com/openclaw/openclaw/issues/84880) |
| **P1** | **#85126** | 行为 | 🔴 开放（今日新建） | Control UI/WebChat 会话**自动选择错误 authProfileOverride**（deepseek 而非 minimax） | ❌ 无 | [Issue #85126](https://github.com/openclaw/openclaw/issues/85126) |
| **P1** | **#38327** | 回归 | 🔴 开放 | 2026.3.2 + google-vertex/gemini-3.1-pro-preview 报 "Cannot convert undefined or null to object" | ❌ 无 | [Issue #38327](https://github.com/openclaw/openclaw/issues/38327) |
| **P1** | **#63101** | 回归 | 🔴 开放 | 飞书频道配置验证失败：v4.5→v4.8 升级后 `must NOT have additional properties` | ❌ 无 | [Issue #63101](https://github.com/openclaw/openclaw/issues/63101) |
| **P1** | **#62985** | 回归 | 🔴 开放 | Telegram 多账户配置错误：2026.4.5→4.8 升级后 `channels.telegram.accounts` 失效 | ❌ 无 | [Issue #62985](https://github.com/openclaw/openclaw/issues/62985) |

**稳定性评估**：🔴 **高风险**——今日新建/活跃的 P1 Bug 密集覆盖**会话状态、认证配置、升级兼容性**三大核心路径。多个回归问题指向 2026.4.x→5.x 升级路径存在系统性配置迁移缺陷，且 Codex 运行时稳定性持续恶化（#84076 关闭但问题未根治，#84880 证明修复遗漏）。

---

## 6. 功能请求与路线图信号

### 高潜力纳入下一版本的功能

| 功能 | Issue/PR | 信号强度 | 判断依据 | 链接 |
|:---|:---|:---:|:---|:---|
| **Slack 原生插件审批 + Block Kit UI** | PR #85062 | ⭐⭐⭐⭐⭐ | XL 规模、维护者参与、proof 充分、ready for maintainer look，与 #12602 需求直接呼应 | [PR #85062](https://github.com/openclaw/openclaw/pull/85062) |
| **网关内存边界限制** | PR #79068 | ⭐⭐⭐⭐⭐ | P1 性能问题 #55334 的直接修复，多日迭代、proof 已供 | [PR #79068](https://github.com/openclaw/openclaw/pull/79068) |
| **exec 结果脱敏** | PR #81185 | ⭐⭐⭐⭐⭐ | 安全关键、P1、与 #10659 密钥掩码需求协同 | [PR #81185](https://github.com/openclaw/openclaw/pull/81185) |
| **Discord 认证预热 + 分页** | PR #85125 | ⭐⭐⭐⭐☆ | 今日新建，解决 22 秒延迟痛点，但需补充 proof | [PR #85125](https://github.com/openclaw/openclaw/pull/85125) |
| **iOS Realtime-2 对话模式** | PR #85131 | ⭐⭐⭐⭐☆ | XL 规模、含截图 proof、语音功能扩展，但等待作者 | [PR #85131](https://github.com/openclaw/openclaw/pull/85131) |
| **分层引导加载** | Issue #22438 | ⭐⭐⭐⭐☆ | 高评论、明确成本痛点，但无关联 PR | [Issue #22438](https://github.com/openclaw/openclaw/issues/22438) |
| **密钥掩码系统** | Issue #10659 | ⭐⭐⭐⭐☆ | P1 安全、4👍、与 #81185 PR 方向一致 | [Issue #10659](https://github.com/openclaw/openclaw/issues/10659) |
| **直接执行模式（Cron）** | Issue #18160 | ⭐⭐⭐☆☆ | 9👍 高支持度，但涉及架构变更，无近期 PR | [Issue #18160](https://github.com/openclaw/openclaw/issues/18160) |

**路线图信号**：下一版本（预计 2026.5.22 或 5.25）极可能聚焦 **Slack 生态完善**（审批+富消息）、**网关稳定性**（内存+会话）、**安全加固**（脱敏+密钥管理）三大主题。语音/实时交互（#85131 Vapi, Realtime-2）作为差异化功能正在加速。

---

## 7. 用户反馈摘要

### 真实痛点提炼

| 场景 | 原声摘录/归纳 | 来源 Issue |
|:---|:---|:---|
| **升级即故障** | "After upgrading from OpenClaw 03.13 to 05.18, all embedded agent runs fail" | #84059 |
| **配置迁移断裂** | "the config still works in the 2026.4.5" → 升级后 `channels.telegram.accounts` 报错 | #62985, #63101 |
| **Token 成本焦虑** | "Bootstrap files consume LLM tokens on every session... wastes context window budget" | #22438 |
| **密钥管理恐惧** | "secrets stored in `~/.openclaw/.env` are fully accessible... accidental leaks and prompt injection attacks" | #10659 |
| **多代理协作不可靠** | "pure-relay agents that successfully accepted a sessions_spawn child session could still be classified as an incomplete empty parent turn" | #85054 修复的问题 |
| **平台覆盖焦虑** | "We have apps for macOS, iOS and Android... Linux and Windows are missing" | #75 |
| **Cron 任务不可靠** | "Current cron jobs require agentTurn execution, which can timeout and jobs don't run" | #18160 |

**满意度/不满意度分布**：
- ✅ **满意点**：多平台已有覆盖（macOS/iOS/Android）、技能系统扩展性、活跃社区响应
- ❌ **不满点**：**升级稳定性差**（多个 4.x→5.x 回归）、**配置验证严格但迁移工具缺失**、**大工作区运行成本高**、**安全模型未达企业标准**

---

## 8. 待处理积压

### 需维护者紧急关注的长期 Issue/PR

| 时长 | 项目 | 状态 | 风险 | 行动建议 | 链接 |
|:---|:---|:---|:---|:---|:---|
| **~5 个月** | **#75 Linux/Windows 桌面应用** | 🔴 开放，105 评论，75👍 | 平台覆盖缺口导致企业用户流失，off-meta 标签与热度矛盾 | 重新评估优先级，或发布官方技术预览路线图 | [Issue #75](https://github.com/openclaw/openclaw/issues/75) |
| **~4 个月** | **#6731 Safe/Unsafe ClawdBot** | 🔴 开放，12 评论 | Rust 重写提案极端但反映用户对内存安全的深层担忧 | 拆分需求：先提供官方沙箱配置指南，再评估运行时隔离 | [Issue #6731](https://github.com/openclaw/openclaw/issues/6731) |
| **~4 个月** | **#7722 文件系统沙箱** | 🔴 开放，7 评论，4👍 | 配置尝试失败，安全边界不清晰 | 补充官方文档或修复配置解析 | [Issue #7722](https://github.com/openclaw/openclaw/issues/7722) |
| **~3.5 个月** | **#55334 网关 OOM** | 🔴 开放，11 评论，P1 | 生产环境致命，PR #79068 等待过久 | 优先审查 #79068，或发布临时缓解脚本 | [Issue #55334](https://github.com/openclaw/openclaw/issues/55334) |
| **~3 个月** | **#62505 编码代理完全失效** | 🔴 开放，13 评论，P1 | 核心工作流回归，影响开发者基本盘 | 与 #85110 协同诊断，必要时回滚相关变更 | [Issue #62505](https://github.com/openclaw/openclaw/issues/62505) |
| **~2 个月** | **#84880 subagent thinking 仍被拒** | 🔴 开放，今日更新，P1 | 修复声称已关闭但实际未解决，信任损耗 | 重新打开 #84706 或指派专人验证 5.19 行为 | [Issue #84880](https://github.com/openclaw/openclaw/issues/84880) |
| **~2 周** | **#85125 Discord 认证预热** | 🟡 新建，待 proof | 22 秒延迟影响所有 Discord 用户 | 催促作者补充 proof，或维护者协助测试 | [PR #85125](https://github.com/openclaw/openclaw/pull/85125) |

---

## 附录：数据健康度指标

| 指标 | 数值 | 评估 |
|:---|:---|:---|
| Issues 日更新量 | 500 | ⚠️ 极高，审查资源严重不足 |
| Issue 关闭率 | 5% (25/500) | 🔴 极低，积压加速 |
| PR 合并率 | 8.8% (44/500) | 🔴 极低，代码吞吐瓶颈 |
| P1 问题占比 | ~15% (高优先级密集) | 🔴 质量风险突出 |
| 社区互动热度 | #75 达 105 评论 | ✅ 活跃且深度参与 |
| 自动化程度 | ClawSweeper bot 自动处理 #85135 | ✅ 工具链成熟 |

**综合健康度评分**：⭐⭐☆☆☆（2/5）—— 高活跃度掩盖了**低关闭率、高 P1 密度、升级回归频发**的结构性问题。建议维护团队暂停非紧急功能合并，集中资源解决 5.x 升级路径的兼容性危机。

---

*本日报基于 GitHub 公开数据生成，所有链接指向 github

---

## 横向生态对比

好的，作为资深技术分析师，我已详细审阅了2026年5月22日各核心开源AI智能体项目的动态。以下是为技术决策者和开发者准备的横向对比分析报告。

---

### 1. 生态全景

当前，个人AI助手/自主智能体开源生态正经历 **“从功能验证到生产化部署”的剧烈阵痛与分化**。一方面，以 OpenClaw 为代表的部分核心项目因社区热情过高，代码审查与稳定性成为瓶颈，高优先级Bug与升级回滚问题密集爆发；另一方面，以 IronClaw 为代表的项目正全力进行架构级重构（如 Reborn），并取得了里程碑式进展。生态整体呈现出 **“平台扩张”（跨平台、多通道）与“效率优化”（Token成本、上下文管理、记忆系统）** 并行发展的双主线，安全与隐私（如密钥管理、沙箱隔离）正从附加功能升级为社区的**核心焦虑点**。

### 2. 各项目活跃度对比

| 项目名称 | 24h Issues (新开/活跃) | 24h PRs (待合并/已处理) | 今日版本发布 | 健康度评估 | 核心阶段 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (95%) | 500 (456待合并/8.8%合并率) | v2026.5.20 & beta.2 | ⚠️ **高风险** | **快速迭代，质量承压** |
| **IronClaw** | 14活跃/25更新 | 26待合并/47更新 | 无 | 🟢 **稳健** | **架构重构冲刺** |
| **ZeroClaw** | 21 (90%) | 50 (90%待合并) | **v0.8.0-beta-1** | 🟡 **冲刺中，有风险** | **平台化架构跃迁** |
| **CoPaw** | 26 (18/8关闭) | 28 (与关闭19) | 无 | 🟢 **健康** | **稳定性与生态扩展** |
| **Hermes Agent** | 50 (44/6关闭) | 50 (37待合并/13处理) | 无 | ⚠️ **高风险** | **安全债务堆积** |
| **Moltis** | 6 (全部新开) | 5 (4待审/1关闭) | 无 | 🟡 **高频活跃** | **Docker部署与语音质量打磨** |
| **NanoBot** | 9 (1新开/8关闭) | 31 (8待合并/23处理) | 无 | 🟢 **高收敛效率** | **体验精修与架构治理** |
| **PicoClaw** | 9 (2新/7关闭) | 30 (20待审/10处理) | Nightly | 🟢 **高活跃、高收敛** | **偿还技术债务** |
| **NanoClaw** | 3 (全部新开) | 11 (9待合并/2关闭) | 无 | 🟡 **功能密集开发** | **Signal稳定化与生态扩展** |
| **LobsterAI** | 0 | 11 (9 stale/2关闭) | 无 | 🔴 **高积压，社区静默** | **审查资源瓶颈** |
| **NullClaw** | 0 | 2 (全部待合并) | 无 | 🟡 **稳定蓄力** | **功能储备期** |
| **TinyClaw/ZeptoClaw** | 0 | 0 | 无 | ⚪ **无活动** | **停滞** |

### 3. OpenClaw 在生态中的定位

*   **优势**: **社区规模与用户粘性**无疑是生态第一。500+的日Issue/PR更新量是其他项目的数倍至数十倍，这是其最核心的资产。产品功能矩阵最广，覆盖了Web、CLI、移动端、语音等前沿场景。
*   **技术路线差异**: OpenClaw采取 **“高功能密度、快速发布”** 的策略，社区驱动创新。相比之下，IronClaw追求架构优雅（Reborn重构），ZeroClaw拥抱Rust和原生性能，Hermes Agent倾向于学术前沿探索。OpenClaw更像一个“超级聚合器”，快速集成社区贡献的主流功能。
*   **痛点**: **稳定性与审查吞吐的失衡**是其最大短板。8.8%的PR合并率和5%的Issue关闭率，与ZeroClaw 68%的PR日关闭率和CoPaw 31%的Issue关闭率形成鲜明对比。持续的高P1 Bug和升级回归问题正在消耗社区信任，成为其“规模不经济”的典型症状。**OpenClaw是“量大管饱”，但质量风险正在侵蚀其根本。**

### 4. 共同关注的技术方向

1.  **跨平台与桌面客户端**:
    *   **项目**: **OpenClaw** (Issue #75)，**Hermes Agent** (Termux优化)。
    *   **诉求**: Linx/Windows桌面原生客户端的缺失成为企业级部署的关键障碍。

2.  **AI供应商多元化与兼容性**:
    *   **项目**: **NullClaw** (NEAR AI)，**Moltis** (NEAR AI)，**ZeroClaw** (DeepSeek, jina.ai)，**NanoBot** (Skywork, Novita)，**NanoBot** (Moonshot, xAI Grok).
    *   **诉求**: 社区强烈要求摆脱对单一模型供应商的依赖，对国产模型等第三方API的稳定接入和统一管理需求迫切。

3.  **执行安全与密钥管理**:
    *   **项目**: **OpenClaw** (执行审批安全加固)，**Hermes Agent** (4个安全漏洞)，**NanoBot** (安全守卫)，**IronClaw** (成本预算系统)。
    *   **诉求**: 从“功能实现”转向“安全可靠”。对终端命令绕过、密钥泄露、沙箱隔离失效、预算失控等问题的担忧已成为核心共识。

4.  **上下文管理与Token成本控制**:
    *   **项目**: **OpenClaw** (分层引导加载)，**CoPaw** (无损上下文压缩)，**Hermes Agent** (上下文压缩失效)，**ZeroClaw** (会话级参数覆盖)。
    *   **诉求**: 在超长对话、大型工作区、多轮协作场景下，如何智能、高效地管理Token成本，避免“输入轰炸”，成为用户体验提升的刚需。

### 5. 差异化定位分析

| 核心维度 | **OpenClaw** | **IronClaw** | **ZeroClaw** | **Hermes Agent** | **NanoBot** |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **定位** | 个人AI操作系统 | 生产级AI Agent基础设施 | 多智能体Rust守护进程 | 前沿研究与学术探索 | 轻量级、高性价比助手 |
| **目标用户** | 追求功能的个人/极客 | 企业/需要高可靠性的开发者 | 资源敏感/边缘部署/K8s | AI研究者/技术深度用户 | 家庭/个人/轻量开发者 |
| **技术架构** | JS/Node.js, 社区驱动 | Rust, 架构优先, 事件驱动 | Rust, 原生性能, Unix哲学 | Python/LLM, 学术研究 | 前端体验优先, 快速迭代 |
| **核心优势** | 功能最全, 社区最大, 创新快 | 架构正统, 安全可控, 企业级 | 多智能体原生, 资源高效 | 强强的模型和工具链集成 | 简洁易用, 上手快, 耗能低 |
| **核心弱势** | 稳定性差, 审查瓶颈, 安全债务 | 社区规模较小, 功能扩展慢 | 功能成熟度低, 生态尚浅 | 稳定性差, TUI粗糙, 安全漏洞 | 功能深度有限, 企业级能力不足 |

### 6. 社区热度与成熟度

*   **第一梯队 (超级活跃，迭代前沿):** **OpenClaw, ZeroClaw**. 它们定义了社区的趋势和热点，但稳定性风险最大。
*   **第二梯队 (高活跃，质量导向):** **IronClaw, CoPaw, NanoBot**. 它们在保持高迭代速度的同时，维持了相对健康的代码质量和Issue闭环率，是“又快又好”的代表。
*   **第三梯队 (稳定成长，解决具体痛点):** **PicoClaw, Moltis, NullClaw, NanoClaw**. 它们聚焦于特定场景（如树莓派、语音、企业调度）的深度优化，社区规模虽小但忠诚度高。
*   **第四梯队 (社区阻塞，潜力待释放):** **Hermes Agent, LobsterAI**. 前者受安全债务和UX问题拖累，后者因审查阻塞导致社区贡献停滞，急需打破循环。

### 7. 值得关注的趋势信号

1.  **“用户主权”压倒“智能自动化”**: 从NanoBot用户对“不可控梦境生成”的强烈不满，到Hermes Agent对“静默后台行为”的质疑，社区清晰传递了一个信号：**用户愿意为降低Token成本和提升效率付费，但绝不接受任何形式的“失控”**。个人AI助手的下一个战场是“可控性”与“可预测性”。

2.  **安全从“加分项”变为“准入门槛”**: Hermes Agent单日4个安全漏洞、OpenClaw的审批绕过、PicoClaw的角色混淆…这些不再是孤立事件。**安全缺陷正从“技巧型问题”升级为“架构型问题”**，可能成为生态洗牌的决定性因素。能够提供坚固沙箱、合规认证和透明审计的项目，将获得企业用户的信任。

3.  **铁三角：Multi-Agent + 多模态 + 跨平台**: ZeroClaw发布多智能体宿主架构，Moltis聚焦电话/语音交互，CoPaw深度集成微信生态。**单一模态、单一平台的Agent已无出路**。未来的“个人AI”是一个能通过语音、文本、图像进行交流，并在桌面、移动端、甚至音箱上无缝切换的“超级入口”。

4.  **生态分化加剧，专业化机会显现**: OpenClaw的“大到不能倒”与LobsterAI的“积压静默”形成鲜明对比。这意味着 **“小而美”的垂直项目（如NullClaw的Cron调度、PicoClaw的多Agent角色隔离）反而在特定领域更具生命力**。对于开发者而言，与其参与“大而全”的混战，不如聚焦解决一个被主流忽视的“高并发、低延迟、强安全”的硬核问题。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-05-22

## 1. 今日速览

NanoBot 今日呈现**高活跃度、高收敛效率**的开发态势。过去24小时内，31个PR中有23个完成合并/关闭（**收敛率74%**），Issues关闭率达89%（8/9），显示维护团队响应迅速。核心进展集中在**WebUI体验优化**（侧边栏性能、会话稳定性）、**多模态能力扩展**（图像生成、Ollama支持）以及**记忆系统重构**（Dream作业可控性、MECE长期记忆）。社区对"梦境生成"功能的不可控性抱怨显著，已有两个关联Issue/PR形成解决方案闭环。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的核心 PR（23条中的关键进展）

| PR | 作者 | 核心贡献 | 项目推进 |
|:---|:---|:---|:---|
| [#3953](https://github.com/HKUDS/nanobot/pull/3953) | Re-bin | **WebUI 侧边栏性能优化**：批量渲染长聊天记录、Cmd/Ctrl+K 搜索、减少无效过滤计算 | 解决大历史会话卡顿痛点，提升桌面端交互体验 |
| [#3951](https://github.com/HKUDS/nanobot/pull/3951) | Re-bin | **可折叠侧边栏精细化**：统一DOM结构、猫图标替换文字标识、主题切换固定 | 品牌一致性 + 响应式布局完成度提升 |
| [#3944](https://github.com/HKUDS/nanobot/pull/3944) | boogieLing | **修复WebUI会话刷新丢聊天**：乐观保持新建会话，防止turn-end回退到空白页 | 闭环 [Issue #3884](https://github.com/HKUDS/nanobot/issues/3884) 的"首次响应后对话关闭"问题 |
| [#3940](https://github.com/HKUDS/nanobot/pull/3940) | agbocsardi | **修复Moonshot K2.5/K2.6 参数冲突**：移除`reasoning_effort`与`thinking`重复注入 | 解决 [Issue #3939](https://github.com/HKUDS/nanobot/issues/3939)，恢复Moonshot推理模型可用性 |
| [#3933](https://github.com/HKUDS/nanobot/pull/3933) | HaisamAbbas | **修复shell安全守卫误杀URL命令**：curl/wget不再被误判为工作区外路径 | 闭环 [Issue #3931](https://github.com/HKUDS/nanobot/issues/3931) 的`restrictToWorkspace`阻断外部请求 |
| [#3923](https://github.com/HKUDS/nanobot/pull/3923) | Re-bin | **编码工作流优化**：结构化`apply_patch`工具、多文件编辑、失败回滚、统一diff解析 | 开发者体验重大升级，代码编辑可靠性提升 |
| [#3922](https://github.com/HKUDS/nanobot/pull/3922) | Re-bin | **修复shell命令stdin继承问题**：子进程不再继承nanobot stdin，解决长命令挂起 | 底层稳定性修复，Windows/Linux行为一致 |
| [#3916](https://github.com/HKUDS/nanobot/pull/3916) | Re-bin | **Skywork天工一级支持**：OpenAI兼容路径、WebUI自动暴露、路由测试 | 国产模型生态扩展 |
| [#3927](https://github.com/HKUDS/nanobot/pull/3927) | Alex-yang00 | **Novita AI 提供商接入** | 推理服务商多样性增加 |
| [#3619](https://github.com/HKUDS/nanobot/pull/3619) | honjiaxuan | **文档：小米MiMo token plan配置** | 闭环 [Issue #3617](https://github.com/HKUDS/nanobot/issues/3617)，降低国内用户接入门槛 |

**整体评估**：今日合并PR覆盖**前端体验、后端稳定性、模型兼容性、开发者工具、文档**五大维度，项目成熟度向生产级迈进。

---

## 4. 社区热点

### 讨论最活跃的议题

| 排名 | Issue/PR | 评论数 | 热度分析 |
|:---|:---|:---:|:---|
| 🔥1 | [Issue #3790](https://github.com/HKUDS/nanobot/issues/3790) WebUI会话打印内容显示错乱 | **14** | **历史遗留+视觉回归**：5月14日创建，历经多次更新，涉及WebUI渲染引擎的深层问题。高评论数反映用户反复验证、维护者多次尝试修复的拉锯过程。最终关闭但无明确修复commit引用，可能为stale自动关闭，**存在复燃风险**。 |
| 2 | [Issue #3884](https://github.com/HKUDS/nanobot/issues/3884) 对话首次响应后关闭 | **5** | 已由 [PR #3944](https://github.com/HKUDS/nanobot/pull/3944) 修复。讨论集中在复现步骤确认（Gateway服务模式、WebSocket配置组合），体现部署场景复杂性。 |
| 3 | [Issue #3885](https://github.com/HKUDS/nanobot/issues/3885) Dream系统作业全局开关 | **2** | **核心诉求：用户控制权**。与 [Issue #3948](https://github.com/HKUDS/nanobot/issues/3948) 形成共振，反映"梦境生成"功能从"惊喜特性"沦为"骚扰功能"的社区认知转变。 |

### 背后诉求分析

- **控制权 > 智能化**：用户明确拒绝"不可控的自动化"，即使功能理念先进（记忆整理），执行方式必须可配置、可关闭
- **WebUI是主战场**：4个高热度Issue/PR涉及WebUI，浏览器端体验直接影响用户留存
- **国产模型适配紧迫**：MiMo、Moonshot、Skywork的密集支持，显示中国开发者社区占比显著

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | 修复PR | 影响范围 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | Moonshot K2.5/K2.6 请求被拒：`thinking`与`reasoning_effort`冲突 | **已修复** | [#3940](https://github.com/HKUDS/nanobot/pull/3940) | 使用Moonshot推理模型的用户完全不可用 |
| 🔴 **高** | `restrictToWorkspace=true` 阻断所有外部HTTP请求（curl/wget） | **已修复** | [#3933](https://github.com/HKUDS/nanobot/pull/3933) | 安全策略误杀，影响所有网络工具调用场景 |
| 🟡 **中** | WebUI对话出现`tool_call_id`重复错误 | **已关闭** | 未明确 | 偶发，影响对话连续性 |
| 🟡 **中** | WebUI会话内容打印显示错乱（需刷新恢复） | **关闭(stale)** | 未明确 | 视觉体验，可能未根治 |
| 🟡 **中** | Windows shell测试不稳定（Git Bash/zsh路径大小写、pwd输出差异） | **已修复** | [#3947](https://github.com/HKUDS/nanobot/pull/3947) | 仅影响开发/CI，无生产影响 |
| 🟢 **低** | WebUI `/bootstrap` 仅限localhost，Docker外不可访问 | **已关闭** | 未明确 | 部署架构限制，有workaround |

**风险评估**：今日无未修复的高严重度Bug遗留。但[#3790](https://github.com/HKUDS/nanobot/issues/3790)以stale关闭缺乏修复验证，建议维护者确认是否真正解决。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 已有PR | 纳入可能性 | 备注 |
|:---|:---|:---|:---:|:---|
| **Dream/梦境生成全局开关** | [Issue #3885](https://github.com/HKUDS/nanobot/issues/3885), [Issue #3948](https://github.com/HKUDS/nanobot/issues/3948) | 无直接PR | **⭐⭐⭐⭐⭐ 极高** | 社区呼声强烈，配置化改造难度低，预计下一版本必含 |
| **MECE长期记忆重构**（去重、归属清晰、层级化） | [PR #3952](https://github.com/HKUDS/nanobot/pull/3952) | 已有PR，待合并 | **⭐⭐⭐⭐⭐ 极高** | 架构级改进，与Dream开关需求形成"控制+质量"组合拳 |
| **OpenAI/Codex 图像生成** | [PR #3954](https://github.com/HKUDS/nanobot/pull/3954) | 已有PR，待合并 | **⭐⭐⭐⭐☆ 高** | 多模态战略方向，测试已通过 |
| **Ollama 图像生成** | [PR #3946](https://github.com/HKUDS/nanobot/pull/3946) | 已有PR，待合并 | **⭐⭐⭐⭐☆ 高** | 本地部署场景关键能力 |
| **xAI Grok OAuth** | [PR #3936](https://github.com/HKUDS/nanobot/pull/3936) | 已有PR，待合并 | **⭐⭐⭐⭐☆ 高** | 减少API key配置摩擦 |
| **BM25-lite 技能路由**（减少系统提示60%） | [PR #3865](https://github.com/HKUDS/nanobot/pull/3865) | 已有PR，待合并 | **⭐⭐⭐☆☆ 中** | 性能优化，但涉及核心架构，需充分测试 |
| **Telegram/Feishu 消息防抖聚合** | [PR #3949](https://github.com/HKUDS/nanobot/pull/3949) | 已有PR，待合并 | **⭐⭐⭐⭐☆ 高** | 群组场景体验优化，实现简洁 |
| **FAQ 文档** | [PR #3950](https://github.com/HKUDS/nanobot/pull/3950) | 已有PR，待合并 | **⭐⭐⭐⭐⭐ 极高** | 降低支持负担，纯文档无风险 |

**路线图信号**：项目正从"功能堆砌期"进入**"体验精修+架构治理期"**——记忆系统重构、WebUI性能、消息防抖均指向"让已有功能更可靠"而非"增加新功能"。

---

## 7. 用户反馈摘要

### 真实痛点（来自Issue原文提炼）

| 用户 | 场景 | 痛点 | 情绪强度 |
|:---|:---|:---|:---:|
| kxsk-git | 日常对话 | "梦境生成不可控，重复性高，定期清理维护，费TOKEN" | 😤 **强烈不满** |
| kxsk-git | WebUI打印 | 更新后内容显示错乱，必须刷新页面恢复 | 😠 沮丧 |
| aurel-appsthru | Gateway+WebSocket部署 | 对话首次响应后立即关闭，无法持续交互 | 😠 阻塞性 |
| roylez | 安全策略配置 | `restrictToWorkspace=true`误杀正常外部请求，安全与功能不可兼得 | 😤 **强烈不满** |
| URD0TH | Docker部署 | WebUI bootstrap仅限localhost，标准部署场景下完全不可访问 | 😠 架构限制 |
| codeLong1024 | 资源敏感部署 | Dream作业无条件注册，禁用memory后仍在后台运行 | 😐 隐性消耗 |

### 满意点

- **配置灵活性受认可**：小米MiMo文档化后用户可自助接入（[Issue #3617](https://github.com/HKUDS/nanobot/issues/3617)）
- **修复响应快**：Moonshot问题24小时内从报告到修复（[Issue #3939](https://github.com/HKUDS/nanobot/issues/3939)→[#3940](https://github.com/HKUDS/nanobot/pull/3940)）

### 核心矛盾

> **"智能自动化" vs "用户主权"**：用户欣赏记忆整理的理念，但拒绝任何不可中断、不可配置的后台行为。TOKEN成本与隐私焦虑放大了对"失控"的敏感度。

---

## 8. 待处理积压

| 类型 | 项目 | 创建时间 | 当前状态 | 风险 | 建议行动 |
|:---|:---|:---:|:---|:---|:---|
| **PR** | [#3865](https://github.com/HKUDS/nanobot/pull/3865) BM25-lite技能路由 | 2026-05-16 | **Open，6天无更新** | 架构级变更，久拖易冲突 | 安排核心维护者review，或明确milestone |
| **PR** | [#3936](https://github.com/HKUDS/nanobot/pull/3936) xAI Grok OAuth | 2026-05-20 | Open | 认证流程复杂，需安全审计 | 优先合并窗口，OAuth实现有时效性 |
| **PR** | [#3952](https://github.com/HKUDS/nanobot/pull/3952) 记忆系统MECE重构 | 2026-05-21 | Open | 与Dream开关需求强关联 | **建议与Issue #3885/#3948绑定milestone**，形成完整叙事 |
| **Issue** | [#3885](https://github.com/HKUDS/nanobot/issues/3885) Dream全局开关 | 2026-05-18 | **Open，4天** | 社区情绪热点，简单实现 | 标记`good first issue`或快速跟进，避免舆情升级 |

---

**日报生成时间**：2026-05-22  
**数据来源**：HKUDS/nanobot GitHub 公开活动流  
**置信度**：高（基于24小时完整事件日志）

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-05-22

## 1. 今日速览

Hermes Agent 今日保持**极高活跃度**：50 条 Issues 更新（44 条新开/活跃，6 条关闭）与 50 条 PR 更新（37 条待合并，13 条已合并/关闭）形成 1:1 的 Issue-PR 处理节奏，显示社区需求与代码迭代同步推进。值得关注的是，**安全类 Issue 集中爆发**——同一安全研究员在 24 小时内提交 4 条安全漏洞报告，涉及终端命令审批绕过、代码执行沙箱隔离缺失、sudo 密码明文缓存等核心安全问题，项目安全架构面临严峻审视。TUI/前端体验问题持续高发的趋势未减，Dashboard 和 CLI 交互层仍是用户痛点集中区。无新版本发布。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#30121](https://github.com/NousResearch/hermes-agent/pull/30121) | teknium1 | **Termux 非 TUI 启动性能优化**： salvaged #29438，针对 Android/Termux 环境优化 `hermes`、`hermes chat`、`hermes version` 等命令的冷启动速度，跳过完整子进程初始化路径 | — |
| [#30051](https://github.com/NousResearch/hermes-agent/pull/30051) | teknium1 | **computer_use 工具修复**：`app=…` 过滤无匹配时不再静默回退到前台窗口，而是返回空结果，避免 agent 操作错误应用窗口；与 #30032、#30046 配合**完全关闭** [#24170](https://github.com/NousResearch/hermes-agent/issues/24170) 的 5 个 bug | [#24170](https://github.com/NousResearch/hermes-agent/issues/24170) |
| [#24324](https://github.com/NousResearch/hermes-agent/pull/24324) → closed in favor of #30051 | briandevans | 同上，原始实现因落后 main 58 个 commit 被 salvage | [#24170](https://github.com/NousResearch/hermes-agent/issues/24170) |
| [#29990](https://github.com/NousResearch/hermes-agent/pull/29990) | toller892 | 文档拼写修复：`calcuating` → `calculating` | — |
| [#29438](https://github.com/NousResearch/hermes-agent/pull/29438) | adybag14-cyber | Termux 启动优化原始 PR，因落后 main 过多被 #30121 salvage | — |
| [#17187](https://github.com/NousResearch/hermes-agent/issues/17187) | — | Issue 关闭：`--expose-gc` NODE_OPTIONS 错误已解决 | [#17187](https://github.com/NousResearch/hermes-agent/issues/17187) |

**整体推进评估**：今日合并 PR 以**稳定性修复和边缘平台优化**为主，缺乏核心架构或重大功能落地。computer_use 工具链的 5 bug 清零是质量层面的重要进展，但主要依赖 salvage 而非新代码产出。Termux/Android 支持持续获得投资，反映移动端/轻量设备用户群体的战略重要性。

---

## 4. 社区热点

### 🔥 最高讨论热度

| 排名 | Issue/PR | 评论 | 👍 | 核心诉求 |
|:---|:---|:---:|:---:|:---|
| 1 | [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) 输出长度限制截断错误 | 31 | 4 | **已关闭** — 长文本生成场景的核心体验问题，社区长期抱怨后终于解决 |
| 2 | [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) Dashboard 主题可读性改进 | 15 | 24 | **高票需求** — 设计师/前端用户体验专业视角的系统性批评，字体选择、对比度、serif 字体使用违背现代无障碍标准 |
| 3 | [#24360](https://github.com/NousResearch/hermes-agent/issues/24360) Homebrew 安装缺失内置 skills | 7 | 0 | **分发渠道一致性** — 包管理器安装与手动安装的功能不对等，破坏"开箱即用"承诺 |

### 诉求深度分析

- **#18080** 的 24 个 👍 与 15 条评论形成强烈信号：这不是个人审美偏好，而是**产品可用性缺陷**。评论中 "non-standard"、"hard to read"、"little contrast" 等措辞显示专业用户群体对当前前端实现的信任流失。
- **#7237** 的 31 条评论闭环：从 2026-04-10 创建到 2026-05-21 关闭，历时 41 天，反映长文本流式输出的工程复杂度。
- **#25267**（Claude 订阅用户 OAuth 支持，5 👍）代表**商业模式冲突**：Anthropic 的 Claude 订阅用户被迫双重付费（订阅 + API），社区期待 Codex-style 的订阅凭证复用方案。

---

## 5. Bug 与稳定性

### 🔴 P1（严重/阻断）

| Issue | 组件 | 描述 | Fix PR 状态 |
|:---|:---|:---|:---|
| [#14036](https://github.com/NousResearch/hermes-agent/issues/14036) | gateway + TUI + memory | **ByteRover memory provider 导致 gateway 静默退出**（SIGPIPE flood → exit_group(0)），TUI 会话完全不可用；切换内置 memory 可规避 | ❌ 无 PR |
| [#30095](https://github.com/NousResearch/hermes-agent/issues/30095) | agent + kimi | **kimi-k2.6 工具调用崩溃**：`sanitize_moonshot_tools()` 对 union type 参数（`"type": ["number", "string"]`）处理失败，TypeError: unhashable type 'list' | ❌ 无 PR |
| [#29926](https://github.com/NousResearch/hermes-agent/issues/29926) | agent + CLI | **上下文压缩结果丢失**：压缩执行成功（162→10 条消息，节省 ~115K tokens），但下一回合加载未压缩历史，压缩完全失效 | ❌ 无 PR |

### 🟡 P2（重要）

| Issue | 组件 | 描述 | Fix PR 状态 |
|:---|:---|:---|:---|
| [#30100](https://github.com/NousResearch/hermes-agent/issues/30100) | terminal | **安全：终端命令审批可通过 shell 混淆绕过**（base64 编码、变量拼接、换行符分割等） | ❌ 无 PR |
| [#30101](https://github.com/NousResearch/hermes-agent/issues/30101) | code-exec | **安全：代码执行沙箱无 UID 隔离、无 seccomp、无网络命名空间** | ❌ 无 PR |
| [#30102](https://github.com/NousResearch/hermes-agent/issues/30102) | terminal | **安全：sudo 密码以明文 Python dict 缓存在进程内存中** | ❌ 无 PR |
| [#30103](https://github.com/NousResearch/hermes-agent/issues/30103) | terminal + code-exec | **安全：`env_passthrough` 可能泄露 API key 到不可信子进程** | ❌ 无 PR |
| [#22986](https://github.com/NousResearch/hermes-agent/issues/22986) | agent | Codex APIConnectionError 重试率 v0.13.0 后飙升 ~8x，疑似 commit 5533ad764 严格流超时导致 | ❌ #12953 部分缓解无效 |
| [#24860](https://github.com/NousResearch/hermes-agent/issues/24860) | gateway + TUI | Dashboard Chat Ctrl+V 粘贴失效，图片粘贴不支持 | ❌ 无 PR |
| [#28818](https://github.com/NousResearch/hermes-agent/issues/28818) | CLI | Kanban scratch workspace 清理可能**删除真实用户源码目录**（数据丢失风险） | ❌ 无 PR |
| [#30091](https://github.com/NousResearch/hermes-agent/issues/30091) | gateway + Slack | Slack 共享线程中 bot-to-bot 消息被静默丢弃 | ❌ 无 PR |
| [#30092](https://github.com/NousResearch/hermes-agent/issues/30092) | CLI | macOS Terminal.app OSC 11 背景探测回复泄漏到 prompt_toolkit 输入 | ❌ 无 PR |

### 🟢 P3（一般）

| Issue | 组件 | 描述 | Fix PR 状态 |
|:---|:---|:---|:---|
| [#30023](https://github.com/NousResearch/hermes-agent/issues/30023) | TUI | **已关闭** — Kanban 看板列溢出可视区域无法查看 | ✅ 已关闭 |
| [#30083](https://github.com/NousResearch/hermes-agent/issues/30083) | TUI | Ask tool 提示框不接受粘贴文本 | ❌ 无 PR |
| [#30029](https://github.com/NousResearch/hermes-agent/issues/30029) | TUI | `/model` 命令在 space+backspace 后从补全列表消失 | ❌ 无 PR |
| [#30007](https://github.com/NousResearch/hermes-agent/issues/30007) | TUI | Dashboard Chat 右键复制未桥接 xterm 选择到剪贴板 | ❌ 无 PR |

**安全漏洞集群警报**：用户 `yeahboi233` 在 2026-05-21 单日提交 4 条安全 Issue，覆盖**命令审批绕过、沙箱逃逸、内存凭证泄露、环境变量泄露**四个攻击面，且均标记为 P2。目前**零修复 PR**，安全响应存在明显缺口。

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 纳入可能性评估 | 关键信号 |
|:---|:---|:---|:---|
| [#25267](https://github.com/NousResearch/hermes-agent/issues/25267) Claude 订阅 OAuth | 功能请求 | ⭐⭐⭐⭐ 高 | 5 👍，商业模式痛点明确，Codex 已有先例，技术路径清晰 |
| [#30055](https://github.com/NousResearch/hermes-agent/pull/30055) Telegram Business 秘书模式 | PR 待合并 | ⭐⭐⭐⭐⭐ 极高 | 已实现 observe-with-approval 机制，商业场景明确，teknium1 持续投入 |
| [#29688](https://github.com/NousResearch/hermes-agent/issues/29688) Vosk 本地 STT | 功能请求 | ⭐⭐⭐ 中 | 边缘硬件（Raspberry Pi 4）需求，与现有 faster-whisper 路径竞争 |
| [#29999](https://github.com/NousResearch/hermes-agent/issues/29999) image_gen 多模态参考图 | 功能请求 | ⭐⭐⭐⭐ 高 | UNI 1.1 等行业模型需要，schema 扩展成本低 |
| [#29726](https://github.com/NousResearch/hermes-agent/issues/29726) MCP 初始化失败不阻断启动 | 功能请求 | ⭐⭐⭐⭐⭐ 极高 | 可靠性工程基础需求，直接影响生产可用性 |
| [#30117](https://github.com/NousResearch/hermes-agent/pull/30117) LLM Wiki memory provider | PR 待合并 | ⭐⭐⭐⭐ 高 | 新增 memory provider 架构，hybrid search + 安全 CLI，但 PR 刚提交需 review |
| [#30115](https://github.com/NousResearch/hermes-agent/pull/30115) Svix Webhook Provider | PR 待合并 | ⭐⭐⭐⭐ 高 | 企业集成场景，免公网暴露，与现有 webhook 架构互补 |
| [#30080](https://github.com/NousResearch/hermes-agent/issues/30080) agentskills.io 标准兼容 | 功能请求 | ⭐⭐⭐⭐⭐ 极高 | 生态兼容性战略，Anthropic/NVIDIA 已采纳，99%→100% 成本低收益高 |

**下一版本（推测 v0.14.0）可能包含**：Telegram Business 集成、MCP 容错启动、agentskills.io 合规、Svix webhook 支持、LLM Wiki memory。安全修复因零 PR 存在延期风险。

---

## 7. 用户反馈摘要

### 😤 核心痛点

| 主题 | 典型引述 | 来源 |
|:---|:---|:---|
| **TUI/前端体验粗糙** | "The selection of fonts and colours is non-standard... little contrast makes the dashboard hard to read" | [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) |
| **粘贴操作全面失效** | "Ctrl+V does not paste text... image paste not supported" / "does not accept pasted text" | [#24860](https://github.com/NousResearch/hermes-agent/issues/24860), [#30083](https://github.com/NousResearch/hermes-agent/issues/30083) |
| **平台安装一致性差** | "Homebrew's version should match the latest version... no skills in the folder" | [#24360](https://github.com/NousResearch/hermes-agent/issues/24360) |
| **上下文管理失效** | "context compression runs but result discarded on next turn" | [#29926](https://github.com/NousResearch/hermes-agent/issues/29926) |
| **安全信任崩塌** | 4 条安全 Issue 集中暴露架构性缺陷 | [#30100-30103](https://github.com/NousResearch/hermes-agent/issues/30100) |

### 😊 满意点

- **Termux/Android 支持**：社区持续投入优化，反映对移动/轻量场景的认真态度（[#30121](https://github.com/NousResearch/hermes-agent/pull/30121), [#25345](https://github.com/NousResearch/hermes-agent/pull/25345)）
- **computer_use 工具链修复**：5 bug 清零显示对质量回归的响应能力（[#30051](https://github.com/NousResearch/hermes-agent/pull/30051)）

### 📊 情绪指标

- **负面**：安全漏洞集群、TUI 粘贴/复制/主题等基础交互缺陷、上下文压缩失效
- **正面**：跨平台覆盖（Android、Windows [#30118](https://github.com/NousResearch/hermes-agent/pull/30118)）、企业集成扩展（Telegram Business、Svix）

---

## 8. 待处理积压

### ⚠️ 高优先级提醒

| Issue/PR | 创建日期 | 最后更新 | 阻塞原因 | 建议行动 |
|:---|:---|:---|:---|:---|
| [#11693](https://github.com/NousResearch/hermes-agent/pull/11693) memory 配置限制未生效 | 2026-04-17 | 2026-05-22 | **37 天无合并**，registry-dispatched 调用路径绕过 config.yaml 限制 | 紧急 review，影响生产环境资源控制 |
| [#14036](https://github.com/NousResearch/hermes-agent/issues/14036) ByteRover gateway 退出 | 2026-04-22 | 2026-05-21 | **30 天开放**，P1 级别，TUI + 特定 memory provider 组合完全不可用 | 分配专人，或降级 ByteRover 支持状态 |
| [#22986](https://github.com/NousResearch/hermes-agent/issues/22986) Codex 重试率飙升 | 2026-05-10 | 2026-05-21 | **11 天开放**，v0.13.0 回归，#12953 缓解无效 | 回滚评估或 5533ad764 重构 |
| [#28818](https://github.com/NousResearch/hermes-agent/issues/28818) Kanban 删除真实目录 | 2026-05-19 | 2026-05-21 | **3 天开放**，**数据丢失风险**，AI triage 生成 | 立即标记 P0，阻断性修复 |
| [#30100-30103](https://github.com/NousResearch/hermes-agent/issues/30100) 安全漏洞四连发 | 2026-05-21 | 2026-05-21 | **0 修复 PR**，安全研究员集中披露 | 启动安全响应流程，48 小时内评估 CVSS |

### 📈 积压健康度

- **PR 处理效率**：37 待合并 / 13 已处理 = **2.85:1 积压比**，接近临界值
- **Issue 关闭率**：6/50 = **12%**，新 Issue 涌入速度远超处理能力
- **安全债务**：4 条 P2 安全 Issue 零响应，存在**漏洞窗口期被利用**风险

---

*日报生成时间：2026-05-22 | 数据来源：NousResearch/hermes-agent GitHub 公开数据*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-05-22

> **项目**: [sipeed/picoclaw](https://github.com/sipeed/picoclaw) | **日期**: 2026-05-22 | **分析周期**: 过去24小时

---

## 1. 今日速览

PicoClaw 今日呈现**高活跃度、高收敛度**的健康状态。社区单日产出 30 个 PR（20 待审/10 已处理），同时关闭 7 个历史 Issue，清理效率显著。核心工程进展集中在**多 Agent 身份隔离、Telegram 频道稳定性、会话历史准确性**三大长期痛点，显示维护团队正系统性偿还技术债务。Dependabot 单日提交 8 个依赖升级 PR，前端技术栈（React 19.2.6、shadcn 4.8.0）与 Go 生态（Anthropic SDK 1.44.1、LINE SDK 8.20.0）同步跟进。新增 2 个开放 Issue 分别指向性能优化与项目可持续性（资金渠道），社区治理维度开始受到关注。

---

## 2. 版本发布

### 🌙 Nightly Build: v0.2.8-nightly.20260521.33f9d638

| 属性 | 详情 |
|:---|:---|
| **版本号** | `v0.2.8-nightly.20260521.33f9d638` |
| **发布日期** | 2026-05-21 |
| **构建类型** | 自动化夜间构建（可能不稳定） |
| **完整变更日志** | [compare/v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main) |

**⚠️ 使用建议**: 此为 CI 自动构建产物，非正式版本。生产环境建议等待 `v0.2.8` 正式版或后续稳定发布。当前 main 分支累积变更尚未明确标注破坏性改动，但从已合并 PR 推断，Telegram 话题路由、Agent 工具策略过滤等模块存在行为变更风险。

---

## 3. 项目进展

### 已合并/关闭的关键 PR（10 条）

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#2812](https://github.com/sipeed/picoclaw/pull/2812) | moltenbot000 | 根目录 Dockerfile | **开发者体验**: 消除容器化部署的碎片化配置，降低新贡献者门槛 |
| [#2779](https://github.com/sipeed/picoclaw/pull/2779) | bogdanovich | Telegram 话题级触发器覆盖 | **频道精细化控制**: 超级群组内可按话题配置 `mention_only`/`always`，解决"一刀切"响应策略 |
| [#2778](https://github.com/sipeed/picoclaw/pull/2778) | bogdanovich | `working_summary` 工具反馈模式 | **交互体验**: 长任务执行时展示实时进度（`Working... • tool: xxx`），替代静默阻塞 |
| [#2777](https://github.com/sipeed/picoclaw/pull/2777) | bogdanovich | 抑制 Cron 定时任务的反馈消息 | **后台任务净化**: 避免无人场景下的消息污染，区分前台/后台执行路径 |
| [#2776](https://github.com/sipeed/picoclaw/pull/2776) | bogdanovich | Telegram 话题回复停止输入状态 | **状态一致性**: 修复 forum topic 中 typing indicator 残留问题 |
| [#2772](https://github.com/sipeed/picoclaw/pull/2772) | bogdanovich | `message` 工具保留 Telegram 话题路由 | **关键 Bug 修复**: 代理通过工具发送的中间消息不再丢失话题上下文 |

**整体评估**: 今日合并的 6 条 PR 中，**bogdanovich 独占 5 条**，形成 Telegram 频道稳定性专项攻坚，覆盖话题路由、状态管理、反馈机制全链路。配合 Dockerfile 补齐，项目在"部署-运行-交互"完整生命周期上均有实质推进。

---

## 4. 社区热点

### 🔥 讨论最活跃的议题

| 排名 | Issue/PR | 评论数 | 热度分析 |
|:---|:---|:---:|:---|
| 1 | [#629](https://github.com/sipeed/picoclaw/issues/629) LLM 调用失败未重试 | **15** | **跨月长尾问题**（2月创建→5月关闭）。核心诉求：OpenRouter 等第三方 provider 的 HTTP 500 容错机制。15 条评论反映用户对**长任务可靠性**的焦虑——"任务挂起无反馈"比"失败报错"更损害信任。关闭状态表明已有修复，但需关注是否覆盖指数退避、降级切换等策略。 |
| 2 | [#2775](https://github.com/sipeed/picoclaw/issues/2775) 子 Agent 继承根 AGENT.md 致角色混淆 | **4** | **架构级设计缺陷**。多 Agent 协作（Planner/Builder/Auditor 等）是 PicoClaw 核心卖点，但"角色身份混淆"直接破坏功能根基。4 条评论虽少，问题本质严重——用户实际无法使用分层 Agent 架构。 |
| 3 | [#2702](https://github.com/sipeed/picoclaw/issues/2702) 群聊历史缺失发送者归因 | **4** | **多用户场景可用性**。Discord 等多人群聊中，历史消息无法区分谁说了什么，导致 Agent 上下文理解失真。与 #2775 共同指向**多 Agent/多用户场景的身份标识体系**存在系统性缺口。 |

**社区诉求提炼**: 用户正从"能运行"转向"可信赖、可扩展"——要求长任务容错、角色隔离、群聊归因等**生产级可靠性保障**。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 修复状态 | 影响范围 |
|:---|:---|:---:|:---|:---|
| 🔴 **高** | [#2775](https://github.com/sipeed/picoclaw/issues/2775) 子 Agent 角色混淆 | ✅ CLOSED | **已修复**（PR 未显式关联，推测在 main 分支） | 多 Agent 架构核心功能失效 |
| 🔴 **高** | [#2702](https://github.com/sipeed/picoclaw/issues/2702) 群聊历史无发送者归因 | ✅ CLOSED | 已修复 | Discord/Telegram 等多用户频道 |
| 🟡 **中** | [#629](https://github.com/sipeed/picoclaw/issues/629) LLM 调用失败未重试 | ✅ CLOSED | 已修复 | 所有第三方 Provider 长任务 |
| 🟡 **中** | [#2798](https://github.com/sipeed/picoclaw/issues/2798) Telegram PDF 流数据错误 | ✅ CLOSED | 已修复 | Telegram 文件上传场景 |
| 🟡 **中** | [#2795](https://github.com/sipeed/picoclaw/issues/2795) 对话历史仅显示最后一条用户消息 | ✅ CLOSED | 已修复 | 会话压缩/历史查看功能 |
| 🟡 **中** | [#2787](https://github.com/sipeed/picoclaw/issues/2787) 消息缺少独立时间戳 | ✅ CLOSED | 已修复 | Session API / 前端展示 |

**稳定性态势**: 今日 **7 个关闭 Issue 全为 Bug 修复**，无新增严重 Bug 报告。历史债务集中清理，但 [#2916](https://github.com/sipeed/picoclaw/issues/2916) 新提的"CPU、Memory、IO 优化"暗示运行时资源效率可能成为下一阶段焦点。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 成熟度 | 纳入可能性 | 关键判断依据 |
|:---|:---|:---:|:---|:---|
| **GPT4Free (g4f) 原生支持 + 自动模型降级** | [#2901](https://github.com/sipeed/picoclaw/issues/2901) | 🟡 有明确方案 | **高** | 轻量硬件/家庭实验室场景与 PicoClaw 定位契合；g4f 已提供 OpenAI 兼容接口，接入成本低 |
| **AGENT.md 工具策略过滤（allow/deny/glob）** | [#2838](https://github.com/sipeed/picoclaw/pull/2838) | 🟢 PR 已提交 | **极高** | 前端已就绪，解决多 Agent 场景的工具权限精细化控制，与 #2775 角色隔离形成互补 |
| **请求级上下文策略（turn_profile）** | [#2914](https://github.com/sipeed/picoclaw/pull/2914) | 🟢 PR 已提交 | **极高** | 控制单轮是否包含历史、系统提示、技能提示、工具，为性能优化（#2916）提供机制基础 |
| **NEAR AI Cloud Provider** | [#2917](https://github.com/sipeed/picoclaw/pull/2917) | 🟢 PR 已提交 | **高** | TEE（可信执行环境）能力差异化，符合去中心化 AI 趋势 |
| **FUNDING.yml 资金支持** | [#2912](https://github.com/sipeed/picoclaw/issues/2912) | 🔴 仅建议 | 中 | 项目可持续性信号；Sipeed 企业背景可能已有内部资助，社区捐赠渠道优先级存疑 |

**路线图推断**: `v0.2.8` 正式版或将包含 **Agent 工具策略过滤 + 请求级上下文控制** 两大架构升级，配合 NEAR AI 新 provider，形成"更灵活、更轻量、更安全"的版本主题。

---

## 7. 用户反馈摘要

### 💬 真实痛点（来自 Issue 评论提炼）

| 场景 | 痛点 | 代表 Issue |
|:---|:---|:---|
| **长任务自动化** | "服务器偶尔 HTTP 500，任务就挂在那里，没有重试，日志狂刷" | [#629](https://github.com/sipeed/picoclaw/issues/629) |
| **多 Agent 协作** | "所有子 Agent 都以为自己是根 Agent，Planner 和 Builder 角色完全乱掉" | [#2775](https://github.com/sipeed/picoclaw/issues/2775) |
| **群聊场景** | "历史消息混在一起，不知道哪句是谁说的，Agent 回复经常对不上人" | [#2702](https://github.com/sipeed/picoclaw/issues/2702) |
| **会话管理** | "切换对话只能看到最后一条消息，前面的全丢了，说是压缩但用户查看也该完整" | [#2795](https://github.com/sipeed/picoclaw/issues/2795) |
| **资源敏感部署** | "想在树莓派/旧笔记本上跑，需要更省的 CPU 内存占用" | [#2916](https://github.com/sipeed/picoclaw/issues/2916) |

### ✅ 满意点
- Telegram 话题支持持续完善（bogdanovich 系列 PR）
- 夜间构建保持节奏，迭代可见

### ❌ 不满点
- **"stale" 标签泛滥**: 今日 7 个关闭 Issue 中 6 个带 `stale` 标签，部分问题（如 #629 历时 3 个月）响应周期过长
- 会话压缩策略对用户不透明，"丢消息"感知强烈

---

## 8. 待处理积压

### ⚠️ 需维护者关注

| 类型 | 条目 | 滞留时间 | 风险 | 建议动作 |
|:---|:---|:---:|:---|:---|
| **文档债务** | [#2662](https://github.com/sipeed/picoclaw/pull/2662) 统一 Provider 文档供应商表格 | ~28 天 | 文档碎片化阻碍新用户接入 | 指派文档维护者 review，或明确拒绝合并理由 |
| **性能优化** | [#2916](https://github.com/sipeed/picoclaw/issues/2916) CPU/Memory/IO 优化 | 1 天（新） | 作者已做深度源码分析，若无人响应将挫伤贡献积极性 | 标记 `good first issue` 或维护者认领，给出基准测试框架 |
| **依赖积压** | 8 个 Dependabot PR (#2917-#2927) | 0-1 天 | 批量合并前需兼容性验证，但长期堆积增加冲突风险 | 建立每周依赖合并窗口，自动化测试通过后批量处理 |

---

## 附录：数据速查

| 指标 | 数值 | 环比判断 |
|:---|:---:|:---|
| Issues 更新 | 9（新开 2 / 关闭 7） | 清理效率 > 新增压力 ✅ |
| PRs 更新 | 30（待合并 20 / 已处理 10） | 高吞吐量，review 队列需关注 ⚠️ |
| 版本发布 | 1 nightly | 常规节奏 |
| 独立贡献者活跃 | ≥6 人（含 Dependabot） | 社区多元化中等 |

---

*本日报基于 GitHub 公开数据生成，不代表 Sipeed 官方立场。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-05-22

> **项目**: [nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw)  
> **分析日期**: 2026-05-22（数据覆盖 2026-05-21 24h）

---

## 1. 今日速览

今日 NanoClaw 项目活跃度**中高**，核心维护者 `snymanpaul` 集中爆发式提交了 3 个 Signal 通道相关的 Bug 报告（含 1 个配套修复 PR），显示 Signal 集成进入深度稳定化阶段。PR 队列总量达 **11 条**（9 待合并/2 已关闭），其中 AI 编码 CLI 生态扩展（Claude Code ↔ Codex 互操作）成为最大主题，`chiptoe-svg` 单日贡献 4 条相关 PR。无新版本发布，项目处于功能密集开发期，合并节奏需加速以控制队列膨胀。

---

## 2. 版本发布

**无**

---

## 3. 项目进展

### 已合并/关闭的 PR

| PR | 作者 | 状态 | 进展说明 |
|:---|:---|:---|:---|
| [#2576](https://github.com/nanocoai/nanoclaw/pull/2576) | tier2tech-tian | **CLOSED** | 修复 `ea21e58` 引入的回归：SDK 模式下 assistant text block 被错误抑制为 `progressType='thinking'`，导致用户看不到工具调用间的中间叙述。PR 本身被关闭（可能因方案调整或已由他处修复），但问题已被识别并处理。 |
| [#2577](https://github.com/nanocoai/nanoclaw/pull/2577) | HokutoMorita | **CLOSED** | 废弃 agent 伪造的 `channelContext`，改为从 `session_routing` SQLite 表自动注入，对齐 deshi 子项目架构变更。跨子系统一致性提升。 |

**整体推进评估**: 今日关闭的 2 条 PR 均为修复/架构对齐类，未带来新功能交付。核心功能进展依赖 9 条待合并 PR。

---

## 4. 社区热点

> 注：今日所有 Issues/PRs 评论数均为 0 或 `undefined`，**无显性讨论热点**。以下为基于提交密度和主题重要性的**隐性热点分析**：

| 条目 | 链接 | 热度信号 | 背后诉求分析 |
|:---|:---|:---|:---|
| **PR #2580** - feat(codex): full Codex-only installation support | [链接](https://github.com/nanocoai/nanoclaw/pull/2580) | 🔥🔥🔥 作者单日4 PR，主题集中 | **去 Claude 依赖化**：社区强烈需要 NanoClaw 支持纯 OpenAI 生态（Codex + OneCLI 凭证管理），避免被单一 AI 供应商锁定。这是企业用户采购的关键决策因素。 |
| **Issue #2581-2583** (Signal 三连 Bug) | [#2581](https://github.com/nanocoai/nanoclaw/issues/2581) [#2582](https://github.com/nanocoai/nanoclaw/issues/2582) [#2583](https://github.com/nanocoai/nanoclaw/issues/2583) | 🔥🔥🔥 同一作者同日爆发 | **Signal 通道生产就绪**：`launchctl` 服务管理、config 文件锁、CLI 版本兼容性——全是 macOS 部署的实操痛点，表明 Signal 集成正从"能跑"转向"耐跑"。 |
| **PR #2532** - Edna Veo 3.1 视频能力 | [链接](https://github.com/nanocoai/nanoclaw/pull/2532) | 🔥🔥 创建4天，持续更新 | **多模态 Agent 竞争力**：Slack 场景下的视频生成+拼接+入站媒体处理，直接对标企业级 AI 工作流需求。 |

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 链接 | 描述 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | **#2582** - signal-auth listAccounts deadlocks | [链接](https://github.com/nanocoai/nanoclaw/issues/2582) | `spawnSync` 无超时调用 `signal-cli`，当 daemon 持有 config 文件锁时**永久阻塞**，setup 流程卡死 | ❌ 无 |
| 🔴 **高** | **#2583** - restartService silently no-ops | [链接](https://github.com/nanocoai/nanoclaw/issues/2583) | `launchctl kickstart -k` 对 unloaded plist **静默失败**，服务重启不可靠，用户无感知 | ❌ 无 |
| 🟡 **中** | **#2581** - signal-cli 0.13+ JSON 字段名不匹配 | [链接](https://github.com/nanocoai/nanoclaw/issues/2581) | `account` → `number` 字段变更导致"已关联账户"检测永远失败，setup 向导重复引导链接 | ✅ **[#2584](https://github.com/nanocoai/nanoclaw/pull/2584)** |
| 🟡 **中** | **#2579** - WhatsApp 401 注销后凭证残留 | [链接](https://github.com/nanocoai/nanoclaw/pull/2579) | 强制登出后 `store/auth/` 死凭证导致重启时二次 401，循环失败 | 🔄 **PR 待合并** |
| 🟡 **中** | **#2576** (已关闭) - assistant text block 被误抑制 | [链接](https://github.com/nanocoai/nanoclaw/pull/2576) | `ea21e58` 回归导致 SDK 模式用户体验断裂（无中间反馈） | ❌ 方案调整中 |

**风险评估**: Signal 通道存在**3个连锁 Bug**，覆盖服务生命周期管理（启动/检测/重启），且 2/3 无修复 PR，建议优先集中攻关。

---

## 6. 功能请求与路线图信号

| 功能方向 | 载体 | 链接 | 纳入下一版本概率 | 判断依据 |
|:---|:---|:---|:---|:---|
| **Codex 全替代方案** | PR #2580, #2474, #2361, #2337 | [合集](https://github.com/nanocoai/nanoclaw/pulls?q=is%3Apr+author%3Achiptoe-svg) | **🔥 极高 (90%)** | 4条PR形成完整闭环：安装→凭证→provider契约→skill catalog，架构设计已完成 |
| **LiteLLM 统一接入** | PR #2490 | [链接](https://github.com/nanocoai/nanoclaw/pull/2490) | **高 (70%)** | 运营/容器型 skill，遵循贡献指南，社区长期需求（多模型路由） |
| **Telegram claim link** | PR #2578 | [链接](https://github.com/nanocoai/nanoclaw/pull/2578) | **中 (50%)** | 功能 skill，需评估与现有 Telegram 通道的集成深度 |
| **Edna 视频生成 (Veo 3.1)** | PR #2532 | [链接](https://github.com/nanocoai/nanoclaw/pull/2532) | **中 (50%)** | 技术实现完整，但依赖 Google Gemini API 商业条款稳定性 |

---

## 7. 用户反馈摘要

> 基于 Issues 描述提炼的真实痛点（无评论数据，直接从报告反推）：

| 痛点场景 | 来源 | 用户画像推断 |
|:---|:---|:---|
| **"Signal setup 向导反复让我链接已关联的账户"** | #2581 | macOS 开发者，已升级 signal-cli 0.13+，被版本兼容性坑 |
| **"重启服务后 Signal 没起来，没任何错误提示"** | #2583 | 运维人员，依赖 `launchctl` 管理后台服务，需要可观测性 |
| **"运行 setup 时整个进程卡死，只能 Ctrl-C"** | #2582 | 新用户/CI 环境，signal-cli daemon 与 setup 工具竞争文件锁 |
| **"WhatsApp 被封后无限循环 401，必须手动删文件"** | #2579 | 企业部署用户，期望自愈而非人工干预 |

**满意度信号**: 无显性好评；不满集中于**错误处理静默化**（no-ops 无日志、死锁无超时）和**外部工具版本耦合**（signal-cli 字段变更）。

---

## 8. 待处理积压

> 长期未响应 = 创建 >7 天且最后更新非今日；以下条目虽今日有更新，但队列深度值得警惕：

| PR/Issue | 链接 | 创建 | 状态 | 提醒 |
|:---|:---|:---|:---|:---|
| **PR #2532** - Edna Veo 3.1 | [链接](https://github.com/nanocoai/nanoclaw/pull/2532) | 2026-05-18 | 待合并 (4天) | 大型功能 PR，涉及生成+拼接+入站媒体三模块，需专门 review 资源 |
| **PR #2490** - LiteLLM provider | [链接](https://github.com/nanocoai/nanoclaw/pull/2490) | 2026-05-15 | 待合并 (7天) | 刚好 7 天临界，社区多模型需求迫切，建议本周内响应 |
| **PR #2337** - Claude Code skill catalog 泛化 | [链接](https://github.com/nanocoai/nanoclaw/pull/2337) | 2026-05-07 | 待合并 (15天) | **积压风险 ⚠️** 被后续 #2580 依赖，建议优先合并或 rebase |

---

## 附录：今日全部活跃条目速查

| # | 类型 | 标题 | 作者 | 链接 |
|:---|:---|:---|:---|:---|
| 2584 | PR | fix(signal-auth): read 'number' field from signal-cli 0.13+ | snymanpaul | [链接](https://github.com/nanocoai/nanoclaw/pull/2584) |
| 2583 | Issue | restartService uses 'launchctl kickstart -k', silently no-ops | snymanpaul | [链接](https://github.com/nanocoai/nanoclaw/issues/2583) |
| 2582 | Issue | signal-auth listAccounts deadlocks when signal-cli daemon holds lock | snymanpaul | [链接](https://github.com/nanocoai/nanoclaw/issues/2582) |
| 2581 | Issue | signal-auth incorrectly reports "no linked account" on signal-cli >= 0.13 | snymanpaul | [链接](https://github.com/nanocoai/nanoclaw/issues/2581) |
| 2580 | PR | feat(codex): full Codex-only installation support | chiptoe-svg | [链接](https://github.com/nanocoai/nanoclaw/pull/2580) |
| 2579 | PR | fix(whatsapp): clear auth credentials immediately on 401 logout | cfis | [链接](https://github.com/nanocoai/nanoclaw/pull/2579) |
| 2578 | PR | Feat/telegram claim link | sumsumai | [链接](https://github.com/nanocoai/nanoclaw/pull/2578) |
| 2577 | PR | feat(deshi): auto-inject channelContext from session_routing | HokutoMorita | [链接](https://github.com/nanocoai/nanoclaw/pull/2577) |
| 2576 | PR | fix(progress): assistant text block 改用 progressType=text | tier2tech-tian | [链接](https://github.com/nanocoai/nanoclaw/pull/2576) |
| 2532 | PR | feat: Edna Veo 3.1 — generation + stitching + inbound media | nightlaro | [链接](https://github.com/nanocoai/nanoclaw/pull/2532) |
| 2490 | PR | Feat/add litellm provider | RheagalFire | [链接](https://github.com/nanocoai/nanoclaw/pull/2490) |
| 2474 | PR | feat(setup): AI-coding-CLI picker | chiptoe-svg | [链接](https://github.com/nanocoai/nanoclaw/pull/2474) |
| 2361 | PR | [codex] tighten codex provider contracts | chiptoe-svg | [链接](https://github.com/nanocoai/nanoclaw/pull/2361) |
| 2337 | PR | feat(providers): surface Claude Code skill catalog to non-Claude providers | chiptoe-svg | [链接](https://github.com/nanocoai/nanoclaw/pull/2337) |

---

*日报生成完毕。如需针对 Signal 通道稳定性或 Codex 迁移路径生成专项分析，请告知。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-05-22

> **项目**: [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)  
> **日期**: 2026-05-22  
> **分析周期**: 过去24小时

---

## 1. 今日速览

NullClaw 今日呈现**低活跃、高潜力**状态。过去24小时内无 Issue 活动，但有两条重要功能 PR 处于待合并状态，分别指向**定时任务引擎**与**AI 云服务商扩展**两大战略方向。项目处于功能储备期，代码贡献持续流入但尚未完成集成闭环。整体健康度评估：**稳定蓄力，等待合并释放动能**。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 待合并 PR（2条）

| PR | 状态 | 核心贡献 | 项目推进度 |
|:---|:---|:---|:---|
| [#783 feat(cron): cron subagent, run history, JSON output, security hardening](https://github.com/nullclaw/nullclaw/pull/783) | ⏳ OPEN（创建 2026-04-07，最后更新 2026-05-21） | 构建完整的 DB-backed 定时任务子系统：原子化 tick/enqueue/complete 流程、多任务类型（skill/agent/shell）、时区偏移支持、操作员告警通道、JSON CLI 输出 | **高** — 这是 Agent 基础设施的关键拼图，使 NullClaw 具备生产级调度能力 |
| [#922 feat(providers): add NEAR AI Cloud provider](https://github.com/nullclaw/nullclaw/pull/922) | ⏳ OPEN（创建 2026-05-21，全新） | 接入 NEAR AI Cloud（`nearai`）作为 OpenAI-compatible 推理提供商，完整覆盖 API key 管理、模型目录解析、文档与示例 | **中高** — 扩展多提供商生态，降低用户 vendor lock-in 风险 |

**今日合并/关闭**: 0 条 — 项目代码尚未向前推进，两条 PR 均等待维护者 review。

---

## 4. 社区热点

| 排名 | 条目 | 互动指标 | 热度分析 |
|:---|:---|:---|:---|
| #1 | [#922 NEAR AI Cloud provider](https://github.com/nullclaw/nullclaw/pull/922) | 👍 0，评论 undefined，创建后 1 天内更新 | **"新提供商接入"诉求** — 反映社区对去中心化/替代性 AI 基础设施的兴趣，NEAR 生态开发者可能正在主动推动集成 |
| #2 | [#783 Cron 子系统](https://github.com/nullclaw/nullclaw/pull/783) | 👍 0，评论 undefined，历时 44 天仍在迭代 | **"生产就绪调度"诉求** — 长期 open 暗示 review 瓶颈或设计复杂度，作者 yanggf8 在 5-21 仍有更新，显示持续投入 |

**核心诉求洞察**: 社区当前最迫切的是**"更多提供商选择"**与**"可靠的后台任务执行"**，两者分别对应成本/去中心化担忧和运维可靠性需求。

---

## 5. Bug 与稳定性

| 严重程度 | 条目 | 状态 | 备注 |
|:---|:---|:---|:---|
| — | 今日无 Bug 报告 | — | 零 Issue 活动既可能是稳定性良好信号，也可能是社区参与度不足的警示 |

> ⚠️ **健康度提示**: 44 天未合并的 #783 涉及安全加固（security hardening），长期悬置可能使相关风险暴露于主分支之外。建议优先 review。

---

## 6. 功能请求与路线图信号

| 来源 | 功能方向 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| PR #783 | 原生 Cron/定时任务调度 | **高** — 下一版本核心功能 | 工程完成度高，覆盖完整生命周期管理，符合 Agent 平台基础设施定位 |
| PR #922 | NEAR AI Cloud 提供商 | **中高** — 可能随提供商扩展批次发布 | 标准化 OpenAI-compatible 接入，边际成本低，生态价值明确 |

**路线图信号**: 两条 PR 共同指向 NullClaw 的**"生产化"与"生态扩展"**双轨战略。若短期内合并，预计形成 `v0.x → v1.x` 的能力跃迁。

---

## 7. 用户反馈摘要

> **今日无可用 Issue 评论数据**

基于现有 PR 摘要推断用户场景：

| 推断痛点/场景 | 来源 |
|:---|:---|
| 需要跨时区、高可靠的任务调度，避免外部 cron 依赖 | #783 的 TZ offsets、atomic operations、operator alerts 设计 |
| 希望统一管理多提供商 API key，快速切换模型后端 | #922 的 `NEARAI_API_KEY` 标准化接入与 onboarding defaults |
| 运维可见性需求：JSON 输出便于与现有监控/CI 系统集成 | #783 的 `--json` CLI 标志 |

---

## 8. 待处理积压

| 条目 | 悬置时间 | 风险等级 | 行动建议 |
|:---|:---|:---|:---|
| [#783 Cron 子系统](https://github.com/nullclaw/nullclaw/pull/783) | **44 天**（2026-04-07 → 至今） | 🔴 **高** | 功能完整但长期未合，可能产生 merge conflict；安全加固代码需及时纳入，建议维护者优先安排 review |
| — | — | — | 项目整体 PR 积压较轻（仅 2 条待合并），但单条 PR 周期过长提示 review 带宽瓶颈 |

---

## 健康度仪表盘

| 指标 | 状态 | 评分 |
|:---|:---|:---:|
| 代码流入 | 持续（2 PR 活跃） | 🟢 |
| 合并速度 | 停滞（0/2 今日合并） | 🟡 |
| Issue 响应 | 静默（0 活动） | 🟡 |
| 功能储备 | 丰富（调度+提供商扩展） | 🟢 |
| 安全债务 | #783 悬置中 | 🟡 |

---

> **明日关注**: #922 是否会快速合并以验证新提供商接入流程；#783 是否进入 final review 阶段。建议维护者就 #783 的 review 进度向社区同步时间表。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-05-22

## 1. 今日速览

IronClaw 今日呈现**高强度 Reborn 架构冲刺状态**：24 小时内 47 个 PR 更新（26 待合并）、25 个 Issue 更新（14 活跃/新开），核心贡献者 `serrrfirat` 主导了技能系统（skills）、扩展平台（extensions）和主机内核（host kernel）三大主线的密集代码流动。项目处于 **Reborn 大版本迁移的关键整合期**——多个 P0 级阻断器（AgentLoopHost facade、TurnCoordinator、event substrate 测试）昨日集中关闭，但产品表面迁移（#3031）、生产级接线（#3333）及 crates.io 发布滞后（#3259）仍是未解风险。社区侧出现 Web UI 用户体验反馈小高峰（3 个新开 Issue），与核心架构工作形成"底层重构+表层打磨"的双轨并行态势。

---

## 2. 版本发布

**无新版本发布**

> 注：GitHub 已标记至 `v0.27.0`（2026-04-29），但 crates.io 仍停滞于 `0.24.0`（2026-03-31）。下游用户因 wasmtime 28.x CVE 无法升级，详见 Issue #3259。

---

## 3. 项目进展

### 已合并/关闭的关键 PR（推动 Reborn 核心架构）

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#3852](https://github.com/nearai/ironclaw/pull/3852) | serrrfirat | **修复 BeforeInboundPolicy 评审后续**：为策略调用增加 5 秒超时、显式 `rate_limit_key` 上下文、避免重复绑定准备 | [#3623](https://github.com/nearai/ironclaw/issues/3623) |
| [#3850](https://github.com/nearai/ironclaw/pull/3850) | serrrfirat | **Reborn 文件系统技能接入运行时上下文**：本地开发运行时组装默认文件系统技能上下文源，支持 `/skills`、`/tenant-shared`、`/system/skills` 只读挂载 | — |
| [#3848](https://github.com/nearai/ironclaw/pull/3848) | serrrfirat | **技能包适配为 Reborn 技能上下文**：`SkillBundleContextSource` 适配器，按信任/可见性元数据过滤，保持确定性排序 | — |
| [#3759](https://github.com/nearai/ironclaw/pull/3759) | serrrfirat | **持久化产品工作流账本**：libSQL/PostgreSQL 双后端幂等性账本，支持恢复租约语义、重放阻塞检测 | — |

### 已关闭的关键 Issue（清除 Reborn 迁移阻断器）

| Issue | 标签 | 意义 |
|:---|:---|:---|
| [#3016](https://github.com/nearai/ironclaw/issues/3016) | `suggested_P0`, `module:M3-agentloop-turns` | **AgentLoopHost facade 参考实现** — Reborn 切换的核心主机层抽象落地 |
| [#3013](https://github.com/nearai/ironclaw/issues/3013) | `suggested_P0`, `module:M3-agentloop-turns` | **内核 TurnCoordinator** — 线程/轮次准入控制、单运行强制执行的协调器就位 |
| [#3022](https://github.com/nearai/ironclaw/issues/3022) | `suggested_P1`, `module:M5-events-streaming` | **事件基质集成测试** — 跨服务调用级测试套件定义完成，证明 V1 事件生产者合规 |
| [#3085](https://github.com/nearai/ironclaw/issues/3085) | `enhancement`, `risk: medium` | **共享 Reborn 运行时 HTTP 出口** — WASM/Script/MCP 统一出口路径，替代工具特定代码 |
| [#3092](https://github.com/nearai/ironclaw/issues/3092) | `suggested_P0`, `module:M3-agentloop-turns` | **参考 AgentLoop 实现** — `DefaultChatLoop`（文本+工具能力）首个实现 |
| [#3623](https://github.com/nearai/ironclaw/issues/3623) | `suggested_P0`, `module:M2-inbound-workflow` | **WebUI Beta BeforeInboundPolicy 接缝** — 用户消息策略检查/拒绝/重写前置 |
| [#3610](https://github.com/nearai/ironclaw/issues/3610) | `suggested_P0`, `module:M4-host-kernel` | **ProcessError 保留类型化文件系统错误** — 消除字符串匹配脆弱性 |
| [#3419](https://github.com/nearai/ironclaw/issues/3419) | `reborn` | **共享存储基质与密钥存储边界** — 统一分散的 SQL 适配器，定义 `StorageSubstrate`/`SecretStore` 端口 |
| [#3523](https://github.com/nearai/ironclaw/issues/3523) | `enhancement`, `suggested_P2` | **一级循环钩子框架** — 内联钩子（gate/pause/deny/rewrite）+ 异步钩子（sidecar/telemetry）双路径 |
| [#3039](https://github.com/nearai/ironclaw/issues/3039) | `suggested_P1`, `reborn` | **最终集成 PR 评审清单** — 切换前评审规程 |

> **整体评估**：Reborn 架构的"地基层"（M2-M5 模块）今日完成大规模收敛，P0 阻断器清除率极高。但"封顶层"（产品表面迁移、生产接线、多租户沙箱）仍有大量待合并 PR，预计需 1-2 周才能进入 staging 验证。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求分析 |
|:---|:---|:---|:---|
| 1 | [#3016](https://github.com/nearai/ironclaw/issues/3016) | 13 | **架构设计的深度协作**：AgentLoopHost facade 作为 M3 模块的核心抽象，涉及 6 个子跟踪器（#2987, #3031, #3013, #3107, #3195, #3198, #3199）的依赖协调。高评论数反映 Reborn 主机层接口设计的反复推敲——如何在"足够通用"与"不过度抽象"之间取得平衡。 |
| 2 | [#3022](https://github.com/nearai/ironclaw/issues/3022) | 11 | **测试策略的跨团队对齐**：事件基质集成测试需要证明"所有 V1 事件生产者写入脱敏、有作用域、可重放的事件"，涉及安全、合规、SRE 多方关切。评论密集于测试范围界定（caller-level vs service-level）和 redaction 标准的具体化。 |
| 3 | [#3013](https://github.com/nearai/ironclaw/issues/3013) | 8 | **并发模型的正确性验证**：TurnCoordinator 的"one-active-run enforcement"和线程准入控制是分布式系统的经典难题，评论围绕竞态条件、死锁恢复、与现有会话系统的兼容性展开。 |
| 4 | [#3085](https://github.com/nearai/ironclaw/issues/3085) | 8 | **安全与性能的权衡**：统一 HTTP 出口意味着所有工具流量经过同一管道，评论聚焦于 SSRF 防护的集中化是否会引入单点瓶颈、DNS 解析的缓存策略、以及资源计费的精确性。 |
| 5 | [#3031](https://github.com/nearai/ironclaw/issues/3031) | 7 | **产品迁移的范围控制**：EPIC 级跟踪器，当前仍 OPEN。评论讨论"用户/操作者行为保留"的具体含义——哪些 V1 API 必须 100% 兼容，哪些可以引入 breaking change 并附带迁移指南。 |

### 今日新开热点 Issue

| Issue | 类型 | 诉求 |
|:---|:---|:---|
| [#3846](https://github.com/nearai/ironclaw/issues/3846) | `question` | **Mission 通道继承行为的语义澄清**：Web UI Chat 中创建 Mission 时，`notify_channels` 是否继承当前对话的 `source-channel` 标签（TELEGRAM/REPL），用户感到行为不一致 |
| [#3840](https://github.com/nearai/ironclaw/issues/3840) | `enhancement` | **Web UI 视觉可扫描性**：通道徽章（WECHAT/TELEGRAM）颜色/图标标准化，绿色强调 WECHAT，增加图标识别 |
| [#3839](https://github.com/nearai/ironclaw/issues/3839) | `bug` | **Mission 重试按钮失效**：`POST /api/engine/missions/{id}/fire` 返回 `fired: false`，UI 错误提示"终端状态或预算耗尽"，但实际应为可重试状态 |

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#3839](https://github.com/nearai/ironclaw/issues/3839) | Mission 重试按钮调用 fire 端点但返回失败，用户无法重试失败任务 | **OPEN**，今日新开 | 无 |
| 🔴 **高** | [#3821](https://github.com/nearai/ironclaw/issues/3821) | `Thread::restore_from_messages` 丢弃孤立 assistant 行，阻止带外上下文注入 | **OPEN**，2026-05-20 | 无 |
| 🟡 **中** | [#3447](https://github.com/nearai/ironclaw/issues/3447) | **夜间 E2E 持续失败**：自 2026-05-10 起每日失败，Full E2E / E2E (features) 作业失败 | **OPEN**，已持续 11 天 | 无 |
| 🟡 **中** | [#3259](https://github.com/nearai/ironclaw/issues/3259) | crates.io 发布滞后（0.24.0 vs 0.27.0），下游受 wasmtime CVE 影响 | **OPEN**，2026-05-05 | 无 |
| 🟢 **低** | [#3838](https://github.com/nearai/ironclaw/issues/3838) | 空标题 Issue "Failed"，无描述 | **CLOSED** | — |

> **稳定性信号**：夜间 E2E 的 11 天连续失败是**关键健康指标恶化**，可能与 Reborn 分支的大规模重构相关，但尚未见专门修复 PR。建议维护者优先排查，避免回归债务累积。

---

## 6. 功能请求与路线图信号

| 功能需求 | 来源 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| **Slack ProductAdapter MVP**（预配置凭证，DM + app mention，异步回复） | [#3857](https://github.com/nearai/ironclaw/issues/3857) | **高** | 已定义为 Lane 10 工作项，Reborn 产品表面迁移的自然延伸；依赖 #3590 Telegram v2 tracer 的模式复用 |
| **Reborn-native 产品认证与密钥组合**（三步走：#3810 → #3811 → #3812） | [#3810](https://github.com/nearai/ironclaw/issues/3810), [#3811](https://github.com/nearai/ironclaw/issues/3811), [#3812](https://github.com/nearai/ironclaw/issues/3812) | **高** | `danielwpz` 的系列 Issue 明确为 #3289 的子任务，合同优先方法，已有清晰依赖链 |
| **成本预算系统**（USD 计价，租户→用户→项目→代理→任务→线程 级联预留） | [#3841](https://github.com/nearai/ironclaw/pull/3841) | **已实施** | `ilblackdragon` 的 XL 级 PR 今日待合并，替换隐式迭代计数上限， graduated intervention（warn/throttle/block）机制 |
| **IronHub 工具/技能安装**（CLI + 代理运行时安装 + 实时目录） | [#3737](https://github.com/nearai/ironclaw/pull/3737) | **高** | `neo-sky` 的大型 PR（XL, DB MIGRATION），覆盖 CLI、网关、HMAC 验证、代理可调用工具，生态扩展关键路径 |
| **按通道 MCP/内置工具过滤** | [#1378](https://github.com/nearai/ironclaw/pull/1378) | **中** | 长期 OPEN PR（2026-03-18），JSON 可配置路由系统，多通道部署刚需，但可能与 Reborn 的扩展平台重构产生设计冲突 |
| **Routine 通知上下文缺失**（孤立 routine 对话 vs 用户聊天线程） | [#1519](https://github.com/nearai/ironclaw/issues/1519) | **低-中** | 2026-03-21 提出，长期未响应，产品体验问题但非 Reborn 核心路径；需评估是否与新的 TurnCoordinator 会话模型兼容 |

---

## 7. 用户反馈摘要

### 真实痛点

| 用户 | 场景 | 痛点 |
|:---|:---|:---|
| `sunglow666` | Web UI Chat 创建 Mission | **通道继承困惑**：不清楚 `notify_channels` 默认行为，"似乎继承"但不可靠，导致通知发送到错误通道 |
| `sunglow666` | Mission 失败重试 | **重试功能完全失效**：按钮点击无反馈，API 返回误导性错误（"终端或预算耗尽"），实际应为可重试 |
| `sunglow666` | Web UI 对话列表浏览 | **视觉扫描负担**：WECHAT 灰色徽章不突出，无图标识别，多通道场景下快速定位困难 |
| `ilblackdragon`（产品侧） | 成本控制 | **隐式迭代上限不可预测**：需要 USD 计价的显式预算系统，支持财务审计和分级干预 |

### 架构层面的隐含诉求

- **可观测性**：Reborn 事件基质的"脱敏、有作用域、可重放"要求（#3022）反映运营团队对生产调试能力的担忧
- **迁移信心**：#3039 评审清单和 #3031 EPIC 的保留行为承诺，显示企业用户对 V1→V2 迁移风险的敏感

---

## 8. 待处理积压

### 长期未响应的重要 Issue/PR

| 项目 | 创建时间 | 最后更新 | 天数 | 风险说明 |
|:---|:---|:---|:---|:---|
| [#1378](https://github.com/nearai/ironclaw/pull/1378) 按通道 MCP/内置工具过滤 | 2026-03-18 | 2026-05-21 | **64 天** | 大型功能 PR，与 Reborn 扩展平台重构可能冲突；作者 `nick-stebbings` 为 experienced contributor，需核心维护者决策是否 rebase 或重新设计 |
| [#1519](https://github.com/nearai/ironclaw/issues/1519) Routine 通知上下文缺失 | 2026-03-21 | 2026-05-21 | **62 天** | 产品体验缺陷，`ilblackdragon` 提出但无 assignee；Reborn 新会话模型可能自然解决或需要显式设计 |
| [#3447](https://github.com/nearai/ironclaw/issues/3447) 夜间 E2E 失败 | 2026-05-10 | 2026-05-21 | **11 天** | **最高优先级**：持续集成失败阻断发布信心，需专门诊断是测试脆弱性还是真实回归 |
| [#3259](https://github.com/nearai/ironclaw/issues/3259) crates.io 发布滞后 | 2026-05-05 | 2026-05-21 | **16 天** | 安全 CVE 影响下游，发布流程瓶颈（可能涉及 crates.io 权限、文档、或 Reborn 兼容性验证） |

### 维护者行动建议

1. **立即**：指派专人诊断 [#3447](https://github.com/nearai/ironclaw/issues/3447) 夜间 E2E 失败，区分测试基础设施问题 vs Reborn 代码回归
2. **本周**：决策 [#1378](https://github.com/nearai/ironclaw/pull/1378) 与 Reborn 扩展平台（[#3858](https://github.com/nearai/ironclaw/pull/3858), [#3859](https://github.com/nearai/ironclaw/pull/3859), [#3861](https://github.com/nearai/ironclaw/pull/3861)）的集成策略，避免贡献者精力浪费
3. **下次发布前**：解决 [#3259](https://github.com/nearai/ironclaw/issues/3259) crates.io 发布流程，或至少发布安全修复版本 `0.24.1` 缓解 CVE 压力

---

*日报生成时间：2026-05-22 | 数据来源：GitHub API 概览与公开 Issue/PR 元数据*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-05-22

> **项目**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
> **日期**: 2026-05-22  
> **分析周期**: 过去24小时（2026-05-21 至 2026-05-22）

---

## 1. 今日速览

今日 LobsterAI 项目呈现**低活跃、高积压**态势。过去24小时内无新增 Issues，仅 2 个 PR 完成合并/关闭，另有 9 个 PR 仍处于待合并状态。值得关注的是，**全部 9 个待合并 PR 均为 4 月初创建的"stale" PR**，于昨日（5-21）被集中更新标记，但无实质代码变动或评论互动，疑似维护者进行批量状态刷新操作。项目已连续多日无新版本发布，社区贡献通道存在明显阻塞。

---

## 2. 版本发布

**无新版本发布**

项目最新版本停留于历史 Release，建议关注者留意后续版本规划公告。

---

## 3. 项目进展

### 今日合并/关闭的 PR

| PR | 作者 | 状态 | 影响域 | 进展说明 |
|:---|:---|:---|:---|:---|
| [#2025](https://github.com/netease-youdao/LobsterAI/pull/2025) | fisherdaddy | **CLOSED** | renderer, main, openclaw, im | IM 机器人管理 UI 重构完成，涉及即时通讯模块的界面重设计 |
| [#2024](https://github.com/netease-youdao/LobsterAI/pull/2024) | fisherdaddy | **CLOSED** | renderer, docs, main, openclaw, im | 优化设置面板中网关重启逻辑，提升配置变更后的服务恢复体验 |

**整体评估**: 今日合并的 2 个 PR 均为 **5 月 21 日当日创建并当日关闭**，由核心维护者 fisherdaddy 快速推进，属于内部迭代节奏。两项改动聚焦 **IM 模块体验优化** 与 **网关稳定性**，但未涉及用户侧长期诉求的功能交付。对比 9 个滞留 6 周以上的社区 PR，项目代码吞吐呈现**"内部优先、外部积压"**的明显分化。

---

## 4. 社区热点

**⚠️ 今日无活跃讨论**

| 指标 | 数值 | 说明 |
|:---|:---|:---|
| Issues 评论数 | 0 | 无新增互动 |
| PR 评论数 | 0 | 全部 11 个 PR 的 `评论: undefined` |
| 👍 反应数 | 0 | 所有 PR 零点赞 |

**深层分析**: 社区完全静默的状态与 9 个 stale PR 的批量更新形成反差。这些 PR 覆盖系统通知、消息收藏、标签系统、国际化修复等用户高感知功能，但自 4 月 7 日创建以来**零评论、零审查反馈**，反映出：

- **审查资源瓶颈**: 核心维护者精力集中于内部 PR（#2024/#2025），社区贡献缺乏响应机制
- **反馈闭环断裂**: 贡献者无法获知 PR 受阻原因（代码规范、产品规划冲突或技术方案争议）

**高价值待审 PR 速览**:
- [#1536](https://github.com/netease-youdao/LobsterAI/pull/1536) Cowork 会话完成/失败系统通知 — 解决多窗口场景任务感知痛点
- [#1538](https://github.com/netease-youdao/LobsterAI/pull/1538) AI 回复消息收藏/书签 — 长对话信息管理
- [#1542](https://github.com/netease-youdao/LobsterAI/pull/1542) 会话标签分类系统 — 会话组织与筛选

---

## 5. Bug 与稳定性

| 严重程度 | PR | 问题描述 | 状态 | Fix 可用性 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#1543](https://github.com/netease-youdao/LobsterAI/pull/1543) | 英文模式下审批对话框硬编码中文，国际化功能断裂 | **stale / 待合并** | ✅ PR 已提交，含完整 i18n 体系修复 |
| 🟡 **中** | [#1544](https://github.com/netease-youdao/LobsterAI/pull/1544) | GitHub Copilot OAuth 轮询在设置面板卸载后继续运行，导致 Token 静默丢失 | **stale / 待合并** | ✅ PR 已提交，含 AbortController 清理逻辑 |
| 🟡 **中** | [#1545](https://github.com/netease-youdao/LobsterAI/pull/1545) | Agent 技能更新后 Active Skill Badges 未同步刷新，需手动切换 Agent 生效 | **stale / 待合并** | ✅ PR 已提交，Redux 状态同步修复 |
| 🟡 **中** | [#1547](https://github.com/netease-youdao/LobsterAI/pull/1547) | 定时任务通知渠道无法重置为"不通知"，表单状态持久化错误 | **stale / 待合并** | ✅ PR 已提交，+2 行精准修复 |
| 🟢 **低** | [#1540](https://github.com/netease-youdao/LobsterAI/pull/1540) | 设置面板记忆模块"编辑"按钮 i18n 键缺失，显示小写 "edit" | **stale / 待合并** | ✅ PR 已提交，补充翻译键值 |

**风险评估**: 4 个 Bugfix PR 均具备**生产环境修复价值**，其中 [#1543](https://github.com/netease-youdao/LobsterAI/pull/1543) 的国际化断裂直接影响英文用户核心体验（安全审批场景），[#1544](https://github.com/netease-youdao/LobsterAI/pull/1544) 的 OAuth 资源泄漏可能导致 15 分钟 IPC 阻塞。全部 fix PR 滞留超 6 周，**项目稳定性存在"修复已就绪但未交付"的 peculiar 风险**。

---

## 6. 功能请求与路线图信号

| PR | 功能 | 用户价值 | 纳入下一版本概率 | 信号强度 |
|:---|:---|:---|:---|:---|
| [#1536](https://github.com/netease-youdao/LobsterAI/pull/1536) | 系统原生通知（会话完成/失败） | ⭐⭐⭐⭐⭐ 多任务场景刚需 | **中** | 代码完整，需产品确认通知策略 |
| [#1538](https://github.com/netease-youdao/LobsterAI/pull/1538) | 消息收藏/书签 | ⭐⭐⭐⭐☆ 知识管理场景 | **中** | 含数据层设计，与现有架构耦合度低 |
| [#1542](https://github.com/netease-youdao/LobsterAI/pull/1542) | 会话标签分类系统 | ⭐⭐⭐⭐⭐ 会话组织核心能力 | **中高** | 关联 Issue #1541，产品需求明确 |
| [#1546](https://github.com/netease-youdao/LobsterAI/pull/1546) | 引擎启动超时逃逸（取消+日志） | ⭐⭐⭐⭐⭐ 可靠性兜底 | **高** | 用户体验关键路径，技术方案成熟 |

**路线图推断**: 今日合并的 [#2025](https://github.com/netease-youdao/LobsterAI/pull/2025)/[#2024](https://github.com/netease-youdao/LobsterAI/pull/2024) 涉及 IM 与网关层，暗示团队或正推进 **vNext 版本的基础架构重构**。社区 PR 中的 Cowork 增强功能（通知、收藏、标签）与 IM 模块改动存在产品协同可能，建议关注后续是否被批量审查纳入。

---

## 7. 用户反馈摘要

**⚠️ 今日无新增 Issues 评论，以下提炼自 stale PR 中的问题描述**

| 痛点来源 | 用户场景 | 核心不满 |
|:---|:---|:---|
| [#1536](https://github.com/netease-youdao/LobsterAI/pull/1536) | 用户切换至其他窗口工作，Cowork 长任务完成后无感知 | **异步任务状态不可见**，需频繁切回应用检查 |
| [#1543](https://github.com/netease-youdao/LobsterAI/pull/1543) | 英文用户执行危险操作，审批弹窗突然显示中文 | **国际化信任感崩塌**，安全关键场景语言不一致 |
| [#1544](https://github.com/netease-youdao/LobsterAI/pull/1544) | 用户取消 Copilot 授权流程后重新尝试 | **状态机管理缺陷**，用户操作被系统"遗忘" |
| [#1546](https://github.com/netease-youdao/LobsterAI/pull/1546) | 引擎启动卡住（网络/缓存问题） | **无逃逸机制**，5 分钟硬超时阻断全部工作流 |

**满意度观察**: PR 描述中反复出现 "Fixes #XXXX" 关联 Issues，表明社区贡献者**积极响应用户反馈**并提交修复，但维护侧审查滞后导致"问题已解决，修复未上线"的挫败循环。

---

## 8. 待处理积压

### 🔴 紧急关注：6 周+ 未响应的高价值 PR

| PR | 创建日期 | 最后更新 | 阻塞时长 | 风险标签 |
|:---|:---|:---|:---|:---|
| [#1536](https://github.com/netease-youdao/LobsterAI/pull/1536) | 2026-04-07 | 2026-05-21 | **44 天** | `stale` |
| [#1538](https://github.com/netease-youdao/LobsterAI/pull/1538) | 2026-04-07 | 2026-05-21 | **44 天** | `stale` |
| [#1540](https://github.com/netease-youdao/LobsterAI/pull/1540) | 2026-04-07 | 2026-05-21 | **44 天** | `stale` |
| [#1542](https://github.com/netease-youdao/LobsterAI/pull/1542) | 2026-04-07 | 2026-05-21 | **44 天** | `stale` |
| [#1543](https://github.com/netease-youdao/LobsterAI/pull/1543) | 2026-04-07 | 2026-05-21 | **44 天** | `stale` |
| [#1544](https://github.com/netease-youdao/LobsterAI/pull/1544) | 2026-04-07 | 2026-05-21 | **44 天** | `stale` |
| [#1545](https://github.com/netease-youdao/LobsterAI/pull/1545) | 2026-04-07 | 2026-05-21 | **44 天** | `stale` |
| [#1546](https://github.com/netease-youdao/LobsterAI/pull/1546) | 2026-04-07 | 2026-05-21 | **44 天** | `stale` |
| [#1547](https://github.com/netease-youdao/LobsterAI/pull/1547) | 2026-04-07 | 2026-05-21 | **44 天** | `stale` |

**维护者行动建议**:

1. **批量审查优先级排序**: 建议按 `Bugfix > 核心功能 > 增强功能` 分级处理，[#1543](https://github.com/netease-youdao/LobsterAI/pull/1543)/[#1544](https://github.com/netease-youdao/LobsterAI/pull/1544)/[#1545](https://github.com/netease-youdao/LobsterAI/pull/1545)/[#1547](https://github.com/netease-youdao/LobsterAI/pull/1547) 四个 Bugfix 可优先合并
2. **沟通透明化**: 若因架构重构（如 #2025 的 IM UI 重设计）导致功能 PR 需适配，建议向贡献者明确说明等待原因与预计时间窗口
3. **自动化预警**: 当前 stale PR 占比 82%（9/11），建议启用 GitHub Actions 的 stale bot 或调整审查 SLA，避免贡献者流失

---

## 附录：数据仪表盘

```
活跃度指标          数值        健康度
─────────────────────────────────────────
Issues 更新         0           ⚠️ 偏低
PR 更新            11          ✅ 正常
├─ 新创建           2           ✅ 内部迭代
├─ 社区贡献审查      0           🔴 阻塞
└─ stale 状态刷新    9           ⚠️ 形式更新
版本发布            0           ⚠️ 停滞
社区互动（评论/👍）   0           🔴 静默
```

---

*本日报基于 GitHub 公开数据生成，未包含私有仓库或线下沟通信息。stale PR 的"更新"字段变化可能为自动化工具触发，建议结合具体 commit 历史核实实质进展。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-05-22

> **项目**: [moltis-org/moltis](https://github.com/moltis-org/moltis)  
> **分析日期**: 2026-05-22（数据截止：过去24小时）

---

## 1. 今日速览

Moltis 今日呈现**高频活跃态势**：24小时内新增6条Issues（0关闭）与5条PR（4待审、1关闭），社区输入量显著高于平均水平。核心信号集中在**Docker部署场景的稳定性和电话语音交互质量**两大主题——既有用户持续反馈容器内浏览器沙箱、文件传输等阻塞性问题，也有开发者同步提交针对性修复PR，形成"问题-修复"的紧密闭环。语音/电话板块（Twilio集成、TTS多格式支持）成为今日技术债务暴露最集中的领域，NEAR AI Cloud的新增则显示项目在多模型生态扩展上的持续推进。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭 PR

| PR | 作者 | 说明 | 链接 |
|:---|:---|:---|:---|
| **#1005** | PeterDaveHello | **OpenAI Codex 推理能力增强**：为GPT-5 Codex实例透传`reasoning_effort`参数至Responses API，同时保持无显式配置时`encrypted_content`的向后兼容。该PR完善了AI Agent核心推理链路的可配置性。 | [PR #1005](https://github.com/moltis-org/moltis/pull/1005) |

**整体推进评估**：今日代码层面进展相对克制，仅1个PR关闭且为功能增强型（非紧急修复）。4个待审PR均为今日新提交，涵盖安全架构（vault加密开关）、语音电话（Twilio）、容器化（Docker挂载检测）、模型生态（NEAR AI）四大方向，预计将在未来1-3日内形成集中合并窗口。

---

## 4. 社区热点

| 排名 | 条目 | 热度指标 | 核心诉求分析 |
|:---|:---|:---|:---|
| 🔥1 | **Issue #977** - Docker内浏览器沙箱失败 | 4条评论，持续15天活跃 | [Issue #977](https://github.com/moltis-org/moltis/issues/977) |
| | | | **深层诉求**：Proxmox/LXC嵌套容器场景下的沙箱隔离与Docker socket挂载存在架构级冲突。用户需要"在受限宿主机中安全运行浏览器自动化"的可靠方案，而非仅文档说明。今日PR #1035直接回应此痛点。 |
| 2 | **Issue #1029** - Piper TTS音频格式内部转换 | 1条评论，功能请求 | [Issue #1029](https://github.com/moltis-org/moltis/issues/1029) |
| | | | **诉求**：降低TTS模块的外部依赖，将音频格式转换内聚至`crates/voice/src/tts/piper.rs`，提升边缘部署的自治性。 |
| 3 | **Issue #1032** - Twilio电话"单向通话" | 0评论，但业务影响严重 | [Issue #1032](https://github.com/moltis-org/moltis/issues/1032) |
| | | | **诉求**：电话通道作为Moltis关键差异化能力，"能接通但无响应"属于P0体验断裂。用户明确使用`20260518.01`版本，问题可复现性强。 |

**热点模式识别**：Docker部署路径成为"创新者的困境"——容器化降低了采用门槛，但引入了宿主机资源访问（浏览器、文件、音频设备）的兼容性深渊。社区需要更完善的容器化部署指南或官方Helm/Compose模板。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 描述 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **P0-阻塞** | [#1032](https://github.com/moltis-org/moltis/issues/1032) | Twilio电话：Agent问候后无响应，语音输入未被处理 | **[#1034](https://github.com/moltis-org/moltis/pull/1034)** | 🔄 **修复已提交，待审** |
| 🔴 **P0-阻塞** | [#977](https://github.com/moltis-org/moltis/issues/977) | Docker内浏览器沙箱持续崩溃，影响Web自动化能力 | **[#1035](https://github.com/moltis-org/moltis/pull/1035)** | 🔄 **修复已提交，待审** |
| 🟡 **P1-高优** | [#1037](https://github.com/moltis-org/moltis/issues/1037) | Docker中`send_image`/`send_document`失败，文件传输中断 | 无 | ⏳ **待响应** |
| 🟡 **P1-高优** | [#1030](https://github.com/moltis-org/moltis/issues/1030) | OpenAI TTS强制`opus`格式，与Speaches服务不兼容 | 无 | ⏳ **待响应** |

**关键发现**：今日3个Docker相关Bug形成集群，指向**容器化路径的集成测试覆盖不足**。PR #1034/#1035的同步提交显示维护团队对P0问题的响应速度良好（当日修复），但#1037/#1030尚无PR关联，需关注是否被纳入明日优先级。

---

## 6. 功能请求与路线图信号

| 请求 | 类型 | 纳入可能性评估 | 关联PR/Issue |
|:---|:---|:---|:---|
| **Web UI任意文件附件支持** ([#1036](https://github.com/moltis-org/moltis/issues/1036)) | 增强 | ⭐⭐⭐⭐☆ 高 | 与#1037（文件发送失败）形成需求-修复对，可能被捆绑实现 |
| **Piper TTS内部音频转换** ([#1029](https://github.com/moltis-org/moltis/issues/1029)) | 重构 | ⭐⭐⭐☆☆ 中 | 需评估`voice` crate架构，可能排期至语音模块重构 |
| **NEAR AI Cloud提供商** ([#1031](https://github.com/moltis-org/moltis/pull/1031)) | 生态扩展 | ⭐⭐⭐⭐⭐ **已提交PR，即将合并** | [PR #1031](https://github.com/moltis-org/moltis/pull/1031) — 含TEE感知推荐，契合去中心化AI叙事 |
| **Vault加密可选禁用** ([#1033](https://github.com/moltis-org/moltis/pull/1033)) | 安全/运维 | ⭐⭐⭐⭐⭐ **已提交PR，即将合并** | [PR #1033](https://github.com/moltis-org/moltis/pull/1033) — 解决开发/测试环境密钥管理痛点，企业采用关键 |

**路线图信号**：TEE（可信执行环境）与去中心化模型托管（NEAR AI）的集成，显示Moltis正在**隐私计算与多模型弹性**方向布局，可能构成对闭源Agent平台的差异化竞争壁垒。

---

## 7. 用户反馈摘要

### 痛点矩阵

| 场景 | 痛点 | 情绪强度 | 来源 |
|:---|:---|:---|:---|
| **Docker生产部署** | 浏览器沙箱、文件传输、音频设备三重失败 | 😤 高挫败 | #977, #1037 |
| **电话语音交互** | Twilio"单向通话"——能听不能说 | 😤 高挫败 | #1032 |
| **TTS服务兼容性** | OpenAI TTS硬编码`opus`，锁定供应商生态 | 😕 中困扰 | #1030 |
| **安全合规** | Vault加密在开发/测试环境过度约束 | 😕 中困扰 | #1033动机 |

### 满意点

- 项目迭代速度快（用户主动标注"使用最新版本"）
- 电话集成（Twilio）作为差异化能力被积极采用
- 社区响应及时（#977持续15天有维护者跟进，PR修复当日提交）

### 关键用户原声

> *"Agent greets me but never responds to what I say"* — #1032，精准描述语音Agent的"恐怖谷"体验

> *"Docker socket mounted for sandbox execution"* — #977，显示高级用户正在尝试非标准部署，项目需提供更明确的边界说明

---

## 8. 待处理积压

| 条目 | 创建时间 | 最后更新 | 风险等级 | 提醒 |
|:---|:---|:---|:---|:---|
| **Issue #977** - Docker浏览器沙箱 | 2026-05-06 | 2026-05-21 | 🟡 中 | 虽有PR #1035修复，但15天周期内用户可能流失；建议合并后主动关闭并@原报告者验证 |
| **Issue #1037** - Docker文件传输 | 2026-05-21 | 2026-05-21 | 🔴 高 | **今日0评论**，与#1036（功能请求）高度相关，建议合并处理或分配同一owner |

**维护者行动建议**：
1. 优先审阅并合并PR #1034（Twilio语音修复）与#1035（Docker沙箱修复），解锁两个P0阻塞
2. 为Issue #1037分配初始响应标签，避免与#1036的功能请求形成"静默黑洞"
3. 考虑建立`docker`专项标签，聚合容器化相关问题，识别系统性技术债务

---

*本日报基于GitHub公开数据生成，未包含私有讨论或安全披露信息。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-05-22

> **项目**: [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)  
> **数据周期**: 2026-05-21 至 2026-05-22  
> **分析师**: AI 智能体开源项目分析师

---

## 1. 今日速览

CoPaw 项目今日保持**高活跃度**，24 小时内 Issues 更新 26 条（18 活跃/新开，8 关闭）、PR 更新 28 条（19 已合并/关闭，9 待审阅），无新版本发布。**微信 iLink 通道稳定性**成为社区焦点，围绕 `context_token` 过期重试、消息去重、API 发送状态反馈等问题形成密集修复集群。前端体验（暗模式、控制台风格统一）和模型兼容性（Gemini/Gemma `max_tokens` 参数）同步获得关注。整体项目健康度良好，维护响应迅速，当日关闭率 Issues 达 31%、PR 达 68%。

---

## 2. 版本发布

**无新版本发布**

- 最新版本仍为此前发布的 v1.1.8.post1
- 当日无 tag 或 release 创建

---

## 3. 项目进展

### 已合并/关闭的重要 PR（19 条）

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#4576](https://github.com/agentscope-ai/QwenPaw/pull/4576) | hongxicheng | **微信 iLink 双 Bug 修复**：消息去重失效 + `ret=-2` 无限重试 | [#4546](https://github.com/agentscope-ai/QwenPaw/issues/4546), [#4477](https://github.com/agentscope-ai/QwenPaw/issues/4477) |
| [#4518](https://github.com/agentscope-ai/QwenPaw/pull/4518) | Leirunlin | **技能市场重构**：3 提供商异步搜索 + `httpx` 替换阻塞 HTTP 客户端 + 安装来源溯源 | — |
| [#4520](https://github.com/agentscope-ai/QwenPaw/pull/4520) | Andrai985 | **会话草稿持久化**：页面导航后聊天输入框内容不丢失 | — |
| [#4569](https://github.com/agentscope-ai/QwenPaw/pull/4569) | gnipping | **安全增强**：工具调用被拒后写入系统指令，防止 Agent 重复尝试 | — |
| [#4567](https://github.com/agentscope-ai/QwenPaw/pull/4567) | jinliyl | **文件块处理**：消息处理器支持文件类型块，含路径提取与 Token 计数 | — |
| [#4603](https://github.com/agentscope-ai/QwenPaw/pull/4603) | x1n95c | **浏览器无头模式警告**：启动时提示无头浏览器更易触发验证 | — |
| [#4591](https://github.com/agentscope-ai/QwenPaw/pull/4591) | Leirunlin | **技能验证补全**：工作区保存与 ZIP 导入增加 frontmatter 校验，错误码 400/404 规范化 | — |
| [#4004](https://github.com/agentscope-ai/QwenPaw/issues/4004) | Mzaxd | **上下文窗口自动推导**：`max_input_length` 从模型配置自动获取（Issue 关闭，功能已合入主线） | [#4004](https://github.com/agentscope-ai/QwenPaw/issues/4004) |
| [#4608](https://github.com/agentscope-ai/QwenPaw/pull/4608) | Osier-Yi | **回滚部署脚本**：撤销 `#4527` 的 `QWENPAW_AUTO_INITIALIZATION` 自动初始化控制 | [#4552](https://github.com/agentscope-ai/QwenPaw/pull/4552) |

**关键里程碑**：微信 iLink 通道的稳定性修复集群完成，解决了生产环境高频故障；技能市场基础设施完成异步化改造，为后续生态扩展奠基。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 | 状态 |
|:---|:---|:---:|:---|:---|
| 1 | [#4477](https://github.com/agentscope-ai/QwenPaw/issues/4477) WeChat iLink 定时任务推送失败 | 14 | **生产阻塞**：`context_token` 过期无重试、图片发送无日志 | ✅ 已关闭 |
| 2 | [#4559](https://github.com/agentscope-ai/QwenPaw/issues/4559) 40+ Agent 后页面明显变慢 | 8 | **性能瓶颈**：大规模 Agent 场景前端渲染优化 | 🔴 开放 |
| 3 | [#4556](https://github.com/agentscope-ai/QwenPaw/issues/4556) 语音转写绕过配置 Whisper | 4 | **配置失效**：浏览器原生 API 覆盖用户配置的 Whisper 后端 | 🔴 开放，[#4601](https://github.com/agentscope-ai/QwenPaw/pull/4601) 待审 |
| 4 | [#4585](https://github.com/agentscope-ai/QwenPaw/issues/4585) 企业微信插件工具未自动发现 | 4 | **通道差异**：桌面端与企微通道工具感知不一致 | 🔴 开放 |
| 5 | [#4604](https://github.com/agentscope-ai/QwenPaw/issues/4604) 钉钉 API 仅输出到 console | 4 | **API 通道隔离**：HTTP API 调用未路由到配置通道 | 🔴 开放 |

**热点分析**：微信生态（iLink + 企业微信）占据社区注意力核心，反映 CoPaw 在 IM 通道集成深度上的商业化压力。性能问题（#4559）暗示项目正从"可用"向"规模化可用"跨越，前端架构面临考验。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重度 | Issue | 描述 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **P0-生产阻塞** | [#4477](https://github.com/agentscope-ai/QwenPaw/issues/4477) | 微信定时任务 `context_token` 过期后永久失败，无重试无告警 | [#4576](https://github.com/agentscope-ai/QwenPaw/pull/4576) | ✅ 已修复 |
| 🔴 **P0-生产阻塞** | [#4546](https://github.com/agentscope-ai/QwenPaw/issues/4546) | 消息去重失效导致重复回复 + `ret=-2` 无限重试风暴 | [#4576](https://github.com/agentscope-ai/QwenPaw/pull/4576) | ✅ 已修复 |
| 🟡 **P1-功能缺陷** | [#4556](https://github.com/agentscope-ai/QwenPaw/issues/4556) | 语音转写配置被浏览器 API 覆盖，Whisper 自建节点无效 | [#4601](https://github.com/agentscope-ai/QwenPaw/pull/4601) | 🟡 待合并 |
| 🟡 **P1-功能缺陷** | [#4521](https://github.com/agentscope-ai/QwenPaw/issues/4521) | HTTP API 发送微信消息返回成功但实际未送达 | [#4597](https://github.com/agentscope-ai/QwenPaw/pull/4597) | 🟡 待合并 |
| 🟡 **P1-功能缺陷** | [#4612](https://github.com/agentscope-ai/QwenPaw/issues/4612) | `send_file_to_user` 发送图片工具显示成功但实际不稳定送达 | — | 🔴 开放 |
| 🟡 **P1-功能缺陷** | [#4586](https://github.com/agentscope-ai/QwenPaw/issues/4586) | 钉钉发送图片中文文件名被重编码 | [#4600](https://github.com/agentscope-ai/QwenPaw/pull/4600) | 🟡 待合并 |
| 🟡 **P1-回归** | [#4590](https://github.com/agentscope-ai/QwenPaw/issues/4590) | v1.1.8 更新后 `max_input_length` 从 WebUI 消失 | [#4004](https://github.com/agentscope-ai/QwenPaw/issues/4004) | ✅ 已关闭（功能重构） |
| 🟡 **P1-兼容性** | [#4605](https://github.com/agentscope-ai/QwenPaw/issues/4605) | Gemini/Gemma 模型 `max_tokens` 参数名不匹配导致崩溃 | — | 🔴 开放，👍 1 |
| 🟢 **P2-体验** | [#4592](https://github.com/agentscope-ai/QwenPaw/issues/4592) | 暗模式下 Pet 导入拖拽区不可见 | — | ✅ 已关闭 |
| 🟢 **P2-体验** | [#4572](https://github.com/agentscope-ai/QwenPaw/issues/4572) | 飞书 CardKit 流式输出 `sequence` 初始值错误 | — | ✅ 已关闭 |

---

## 6. 功能请求与路线图信号

| Issue/PR | 需求 | 技术方向 | 纳入可能性评估 |
|:---|:---|:---|:---|
| [#4551](https://github.com/agentscope-ai/QwenPaw/issues/4551) | **无损上下文压缩**：DAG 摘要 + CJK Token 修复 | 替换滑动窗口为结构化压缩，保留可恢复索引 | ⭐⭐⭐⭐⭐ **高** — 解决长期对话核心痛点，社区呼声强 |
| [#4584](https://github.com/agentscope-ai/QwenPaw/issues/4584) | **浏览器自动化稳定性**：Playwright 优先替代 CDP | 工具层 `browser-use` 架构调整 | ⭐⭐⭐⭐☆ **中高** — 生产环境稳定性需求，已有技术方案 |
| [#4613](https://github.com/agentscope-ai/QwenPaw/issues/4613) | **插件 Agent Hook 机制**：`register_agent_hook` | 插件系统扩展性，支持知识库等深度集成 | ⭐⭐⭐⭐☆ **中高** — 生态建设关键基础设施 |
| [#4408](https://github.com/agentscope-ai/QwenPaw/issues/4408) | **工作目录整理**：默认文件统一至 `.qwenpaw` | 配置管理规范化，对标 OpenCode | ⭐⭐⭐☆☆ **中** — 体验优化，需评估迁移成本 |
| [#4606](https://github.com/agentscope-ai/QwenPaw/issues/4606) | **规划执行中途干预**：人机协同引导 | 工作流控制增强，ReAct 迭代中插入用户确认 | ⭐⭐⭐☆☆ **中** — 产品差异化需求 |
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) | **Tauri 2.x 桌面端支持** | 替代 Electron 封装，Rust + Webview | ⭐⭐⭐⭐☆ **中高** — 长期开放，架构级变更 |

**路线图信号**：上下文压缩（#4551）与浏览器自动化重构（#4584）构成 v1.2.x 的两大技术主线。插件 Hook 机制（#4613）若实现，将标志 CoPaw 从"应用"向"平台"跃迁。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 用户原声提炼 | 频率 |
|:---|:---|:---:|
| **微信通道可靠性** | "定时任务隔夜就失败，只有用户先发消息才能恢复" | 🔥🔥🔥🔥🔥 |
| **API 与实际通道脱节** | "返回 success=true 但微信没收到，调试全靠猜" | 🔥🔥🔥🔥🔥 |
| **大规模使用性能** | "40 个 Agent 后页面卡到不能用" | 🔥🔥🔥🔥 |
| **上下文丢失焦虑** | "压缩后早期决策找不回来，跨天任务白做" | 🔥🔥🔥🔥 |
| **配置漂移** | "换模型后记忆清空、max_input_length 消失" | 🔥🔥🔥 |

### 满意点

- 多通道覆盖能力（微信、钉钉、飞书、企微）被频繁提及为选型理由
- 插件系统扩展性受开发者认可（如 #4613 的 LightRAG 知识库）

### 不满意点

- **调试透明度低**：通道层错误被吞没，日志不足（#4477, #4521, #4612）
- **配置与 UI 不同步**：`max_input_length` 消失（#4590）、Whisper 配置被覆盖（#4556）
- **暗模式/前端一致性**：多处 UI 风格割裂（#4592, #4593）

---

## 8. 待处理积压

### 需维护者关注的高价值长期 Issue

| Issue | 创建时间 | 最后更新 | 阻塞原因 | 建议动作 |
|:---|:---|:---|:---|:---|
| [#3054](https://github.com/agentscope-ai/QwenPaw/issues/3054) OneBot 定时任务无法发送到群 | 2026-04-08 | 2026-05-21 | 近 2 个月无响应，NapCat 协议字段理解偏差 | 分配通道专家，复现确认 `user_id`/`group_id` 分离逻辑 |
| [#4408](https://github.com/agentscope-ai/QwenPaw/issues/4408) 工作目录整理 | 2026-05-15 | 2026-05-21 | 体验优化，需决策是否破坏性变更 | 标记 `good first issue` 或纳入 v1.2 里程碑 |
| [#4559](https://github.com/agentscope-ai/QwenPaw/issues/4559) 40+ Agent 性能退化 | 2026-05-20 | 2026-05-21 | 前端渲染瓶颈，需性能剖析 | 请求 Chrome Performance Profile，分配前端负责人 |

### 待审 PR 风险提示

| PR | 风险 | 建议 |
|:---|:---|:---|
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) Tauri 桌面端 | 开放近 1 个月，架构级变更，与现有 Electron 方案冲突需决策 | 明确桌面端技术路线，或标记 `needs-rfc` |
| [#4464](https://github.com/agentscope-ai/QwenPaw/pull/4464) E2E 测试迁移 | 测试基础设施，影响 CI 稳定性 | 优先审阅，阻塞其他 PR 质量保障 |

---

> **日报结语**：CoPaw 今日展现强劲的问题响应能力，微信通道稳定性集群修复体现维护团队对生产环境的重视。建议下一周期重点关注：① 大规模 Agent 性能优化（#4559）的专项投入；② 调试透明度体系化提升（统一错误码、通道层日志规范）；③ 上下文压缩（#4551）的技术方案评审与社区共识建立。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-05-22

---

## 1. 今日速览

ZeroClaw 项目今日呈现**高强度冲刺状态**，单日 21 条 Issues 更新（90% 为活跃/新开）、50 条 PR 动作（90% 待合并），配合 v0.8.0-beta-1 的发布，标志着项目从单智能体守护进程向**多智能体宿主架构**的关键跃迁。核心贡献者 singlerider 单日密集创建 10+ 条 Issue/PR，主导 TUI 终端界面、RPC 传输层、ACP 协议扩展等基础设施铺设。社区同步暴露 DeepSeek-V4 兼容性、Slack 环境变量配置、Windows 构建体积膨胀等生产环境痛点，高优先级 Bug 占比显著。

---

## 2. 版本发布

### v0.8.0-beta-1 — 多智能体架构里程碑
**发布链接**: [zeroclaw-labs/zeroclaw/releases/v0.8.0-beta-1](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.0-beta-1)

| 维度 | 详情 |
|:---|:---|
| **核心变更** | ZeroClaw 从"单智能体守护进程"升级为**真正的多智能体宿主**——单次安装可并行运行多个命名智能体 |
| **隔离粒度** | 每个智能体拥有独立身份、工作空间、记忆、模型提供商、通道与安全策略 |
| **智能体间通信** | 支持智能体间直接对话（inter-agent communication） |
| **破坏性变更** | 配置架构升级至 Schema V3（见 PR #6398），现有单智能体配置需迁移 |
| **迁移注意** | 建议参考已接受的 RFC #5890（多智能体 UX 流设计）进行配置重构；beta 阶段不建议生产环境直接升级 |

**配套基础设施**: 同日关闭的巨型 PR #6398（`feat!: multi-agent runtime and schema V3`）为该版本的核心实现，包含 40+ 模块的架构重构。

---

## 3. 项目进展

### 今日合并/关闭的关键 PR

| PR | 作者 | 状态 | 意义 |
|:---|:---|:---|:---|
| [#6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398) `feat!: multi-agent runtime and schema V3` | singlerider | **已合并** | **架构基石** — 多智能体运行时与 Schema V3，直接支撑 v0.8.0-beta-1 发布 |
| [#6839](https://github.com/zeroclaw-labs/zeroclaw/pull/6839) `feat(runtime): RPC dispatch layer and Unix socket transport` | singlerider | **已关闭** | 提取 JSON-RPC 2.0 共享类型，为 TUI 与守护进程的直接通信铺路（功能已并入 #6837） |
| [#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) RFC: Multi-agent UX flow | singlerider | **RFC 已接受** | 多智能体交互设计规范定稿，7 天讨论期+核心团队 2/3 多数票通过 |

**整体推进评估**: 项目完成从"功能迭代"到"平台化架构"的质变，TUI 终端界面、RPC 传输层、ACP 协议扩展形成**终端用户体验闭环**，为 headless 服务器与 enclave 部署场景奠定基础设施。

---

## 4. 社区热点

### 高讨论度 Issues

| 排名 | Issue | 评论 | 👍 | 核心诉求分析 |
|:---|:---|:---:|:---:|:---|
| 1 | [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) DeepSeek-V4 API 格式不兼容 | 12 | 4 | **国产大模型适配焦虑** — DeepSeek-V4 Pro/Flash 的 thinking mode 引发错误，反映社区对国产/兼容模型提供商的稳定接入需求强烈；标签含 `provider:compatible` `provider:deepseek`，说明兼容层抽象存在漏洞 |
| 2 | [#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) 多智能体 UX 流 RFC | 10 | 0 | **架构设计民主化** — 严格的 RFC 流程（草案→7 天讨论→核心团队投票→决策记录）体现项目治理成熟度，但"提取至 docs/proposals"任务未完成，文档化滞后于决策 |
| 3 | [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) `tool_filter_groups` 对 MCP 工具失效 | 5 | 0 | **配置与运行时脱节** — 配置层正确解析但 dispatch 时前缀匹配 bug + deferred_loading 未集成，暴露"配置正确≠行为正确"的测试缺口 |

**热点洞察**: 社区核心矛盾从"功能有无"转向**"多模型环境下的兼容性与确定性"** — 同一配置在不同提供商、不同工具类型（原生 vs MCP）下的行为一致性成为信任瓶颈。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重度 | Issue | 状态 | 影响 | Fix PR |
|:---|:---|:---|:---|:---|
| **S1 - 工作流阻塞** | [#6844](https://github.com/zeroclaw-labs/zeroclaw/issues/6844) Slack `bot_token` 无法通过环境变量注入 | 新开 | Slack 部署灵活性丧失；#6237 历史复发 | **无** |
| **S1 - 工作流阻塞** | [#6841](https://github.com/zeroclaw-labs/zeroclaw/issues/6841) `vision_provider` 被静默忽略，图像路由至 fallback | 新开 | 多模态配置失效，视觉理解能力不可预期 | **无** |
| **S1 - 工作流阻塞** | [#6771](https://github.com/zeroclaw-labs/zeroclaw/issues/6771) 多行 Heredoc 被 SecurityPolicy 误拦截 | **已关闭** | 官方推荐的 PR 创建技能无法执行 | 已修复（关闭于今日） |
| **S2 - 行为降级** | [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) DeepSeek-V4 thinking mode 错误 | 处理中 | DeepSeek 全系列不可用 | **无**（标签 `status:in-progress`） |
| **S2 - 行为降级** | [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) MCP 工具过滤失效 + deferred_loading 未集成 | 已接受 | 工具权限控制形同虚设，安全风险 | **无** |
| **S2 - 行为降级** | [#6836](https://github.com/zeroclaw-labs/zeroclaw/issues/6836) Windows `--minimal` 构建体积 26MB vs 预期 6MB | 新开 | 资源敏感部署场景受阻 | **无** |

**稳定性健康度**: ⚠️ **中等风险** — 2 个 S1 级新问题同日暴露，且均无关联 Fix PR；历史问题 #6237 的复发（#6844）提示回归测试存在盲区。

---

## 6. 功能请求与路线图信号

### 今日密集出现的 TUI 基础设施簇（singlerider 主导）

| Issue/PR | 类型 | 纳入下一版本概率 | 判断依据 |
|:---|:---|:---:|:---|
| [#6826](https://github.com/zeroclaw-labs/zeroclaw/issues/6826) ZeroClaw TUI（总跟踪器） | Tracker | **极高** | 与 v0.8.0 多智能体宿主定位强绑定，headless 场景刚需 |
| [#6824](https://github.com/zeroclaw-labs/zeroclaw/issues/6824) TUI Agent Chat | Tracker | **极高** | 核心交互界面，已有 `zeroclaw-tui` crate 基础 |
| [#6825](https://github.com/zeroclaw-labs/zeroclaw/issues/6825) TUI UX | Tracker | **高** | 跨切关注，依赖 #6824/#6823 先行 |
| [#6823](https://github.com/zeroclaw-labs/zeroclaw/issues/6823) TUI ACP Bridge | Tracker | **极高** | PR #6839 已关闭，#6837 承接实现 |
| [#6837](https://github.com/zeroclaw-labs/zeroclaw/issues/6837) Runtime RPC dispatch & Unix socket | Feature | **极高** | 今日新建，XL 规模，TUI 通信基础设施 |
| [#6820](https://github.com/zeroclaw-labs/zeroclaw/issues/6820) ACP diff/file-proposal 消息类型 | Feature | **高** | 提升文件编辑审批 UX，与 TUI 侧-by-side diff 联动 |
| [#6819](https://github.com/zeroclaw-labs/zeroclaw/issues/6819) 文件/附件上传协议 | Feature | **中高** | 二进制传输刚需，但 NDJSON 文本帧改造有兼容性成本 |
| [#6818](https://github.com/zeroclaw-labs/zeroclaw/issues/6818) `--ephemeral` 守护进程模式 | Feature | **中** | 资源优化，但非阻塞性 |
| [#6817](https://github.com/zeroclaw-labs/zeroclaw/issues/6817) 会话级运行时参数覆盖 | Feature | **中高** | 多租户场景灵活性，实现相对隔离 |

### 社区驱动功能

| Issue | 概率 | 信号 |
|:---|:---:|:---|
| [#6827](https://github.com/zeroclaw-labs/zeroclaw/issues/6827) jina.ai 作为 web_search 提供商 | **中** | 免费额度慷慨（1000 万请求/密钥），但需评估与现有搜索工具的差异化 |
| [#6842](https://github.com/zeroclaw-labs/zeroclaw/pull/6842) NEAR AI Cloud 提供商（TEE 推理） | **高** | PR 已提交，OpenAI 兼容，Web3/去中心化叙事契合 |

**路线图判断**: v0.8.x 系列将围绕**"多智能体 + TUI 终端原生体验"**双主轴展开，Web 仪表盘与 TUI 的功能对等（parity）是明确目标。

---

## 7. 用户反馈摘要

### 真实痛点

| 来源 | 痛点 | 场景 |
|:---|:---|:---|
| #6059 SSDGADsss | "DeepSeek-V4 全系列报错，thinking mode 相关" | **国产模型替代诉求** — 用户试图将 DeepSeek 作为主力提供商，但兼容层未覆盖其特有的 reasoning 内容格式 |
| #6844 mgstoyanov | "Slack bot_token 必须写死配置，环境变量不生效" | **云原生/容器化部署** — 12-factor 应用原则冲突，密钥管理安全性与灵活性矛盾 |
| #6841 ppoloskov | "配置了 vision_provider 却被静默忽略，图像走了 fallback" | **多模态生产调试** — 配置生效的"静默失败"比显式错误更难排查，observability 不足 |
| #6836 rockswang | "Windows 最小构建 26MB vs 文档说 6MB" | **边缘/资源受限部署** — 文档承诺与实际交付的落差损害信任 |

### 满意/认可

- #5890 RFC 流程的规范性获得隐性认可（无反对票，全票通过）
- jina.ai 的免费额度被社区主动推荐（#6827），反映对**低成本搜索基础设施**的渴求

---

## 8. 待处理积压

### 需维护者关注的高风险长期项

| Issue/PR | 创建 | 最后更新 | 风险 | 行动建议 |
|:---|:---|:---|:---|:---|
| [#5979](https://github.com/zeroclaw-labs/zeroclaw/pull/5979) 渠道回复意图预检查 opt-out | 2026-04-21 | 今日 | **中等** | `needs-author-action` 标签已挂 30 天，单机器人 DM 场景的性能优化，作者 ATECHPCS 需响应 |
| [#5779](https://github.com/zeroclaw-labs/zeroclaw/pull/5779) shell 工具 TOTP 门控命令 | 2026-04-15 | 今日 | **高** | `needs-author-action` + `needs-maintainer-review` 双标签，安全关键功能，作者 DjaPy 与维护者双向阻塞 |
| [#5987](https://github.com/zeroclaw-labs/zeroclaw/pull/5987) Nix 包支持 | 2026-04-22 | 今日 | **中** | `needs-author-action`，Nix 社区贡献，构建系统重构需作者 srghma 跟进 |
| [#6675](https://github.com/zeroclaw-labs/zeroclaw/pull/6675) 严格工具解析模式 | 2026-05-15 | 今日 | **高** | `risk: high` 但无 `needs-author-action`，Audacity88 活跃中，需加速 review 以配合 v0.8.0 多智能体混合提供商场景 |

### 今日新建但未分配的关键 Issue

- **#6844** Slack 环境变量配置 — S1 级，无 assignee
- **#6841** vision_provider 静默忽略 — S1 级，无 assignee，涉及多模态核心路径

---

*日报生成时间: 2026-05-22 | 数据来源: ZeroClaw GitHub 仓库公开活动*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*