# OpenClaw 生态日报 2026-08-22

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-08-21 23:13 UTC

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

# OpenClaw 项目动态日报 — 2026-08-22

## 1. 今日速览

过去 24 小时项目活跃度极高：共 500 条 Issue 更新（491 条新开/活跃，9 条关闭）与 500 条 PR 更新（386 条待合并，114 条已合并/关闭）。无新版本发布，项目仍处于 **v2026.8.1-beta.2 验证周期**（见 #125626）。当前 Issue 流量呈双峰分布：一端是 P0/P1 的稳定性回归与数据安全类 Bug（SQLite 损坏、子进程泄漏、网关崩溃循环），另一端是大量社区功能请求（技能优先级、持久任务状态、LaTeX 渲染等）。PR 侧最显著的信号是 **RFC 0029「Control Model」系列 5 个大型 PR 同日集中提交**（#127670–#127675），显示 Control UI 架构正在经历一次有规划的重构升级。整体看，项目社区参与度健康，但维护者需优先消化一批带 `needs-maintainer-review` 标签的积压问题。

## 2. 版本发布

过去 24 小时无新版本发布。项目仍在验证 [v2026.8.1-beta.2](https://github.com/openclaw/openclaw/issues/125626) 的发布候选质量，该验证 Issue 已有 18 条评论，包含完整的测试工作表和网关升级验证流程。

## 3. 项目进展

今日关联合并/关闭状态的重要 PR 共 3 个（另有 114 个 PR 已在过去 24 小时内合并/关闭，以下为评论数最多的代表性条目）：

- **[PR #116489（已关闭）— feat(security): require acknowledgement for install policy warnings](https://github.com/openclaw/openclaw/pull/116489)**（标签：security, gateway, maintainer, XL）
  为外部 `security.installPolicy` 命令引入 `warn` 返回状态：当插件/技能安装存在安全风险时，交互式 CLI 会展示受限原因与发现项，并要求操作者输入确切目标名进行确认。这是对供应链安全边界的重要强化，影响所有渠道和安装路径。

- **[PR #125471（已关闭）— fix(models): keep Claude CLI OAuth available in Control UI](https://github.com/openclaw/openclaw/pull/125471)**（标签：web-ui, gateway, auth-provider, XL）
  修复了 Gateway 重启后，遗留的 `anthropic:claude-cli` 认证配置因 `provider/mode` 字段不匹配而丢失刷新所有权的问题。该修复确保 Claude CLI OAuth 在 Control UI 中持续可用，并消除了 Gateway 发布空的 `anthropic: missing` 行的矛盾状态。

- **[PR #126424（已关闭）— fix(gateway): keep conversation delivery within agent bindings](https://github.com/openclaw/openclaw/pull/126424)**（标签：multi-channel, gateway, maintainer, XL）
  修复了多代理运维场景中，会话工具可能将对话消息投递到源代理绑定之外的目标的问题。涉及 Discord、Slack、Telegram、飞书等全渠道，对消息投递边界是一次重要的正确性修正。

此外，RFC 0029「Control Model」系列 5 个大型 PR（#127670–#127675，均为 XL）在同日集中提交，涵盖了会话基础（CM1）、会话模型（CM2）、渲染器无关 UI 产物（CM3）、一致性/安全强化（CM4）以及命令/产物采用（CM5）。这一系列 PR 若逐步合并，将重塑 Control UI 与 Gateway 之间的数据流和会话管理架构。

## 4. 社区热点

- **[Issue #48788 — Centralized filename encoding utility（19 条评论，👍 1）](https://github.com/openclaw/openclaw/issues/48788)**：P3 功能请求，建议将 PR #48578 中针对飞书 UTF-8/Latin-1 文件名的修复，扩展为集中式多编码（Shift-JIS、EUC-KR、GB18030 等）处理工具，覆盖所有渠道适配器。评论区长，说明跨渠道文件名乱码是真实且普遍的痛点。

- **[Issue #125626 — Release validation: v2026.8.1-beta.2（18 条评论）](https://github.com/openclaw/openclaw/issues/125626)**：P2 发布验证追踪。虽然仍是 beta 验证，社区测试者已深度参与，体现了项目的发布质量管控流程。

- **[Issue #53628 — ${XDG_CONFIG_HOME} not processed when installing a skill（14 条评论，👍 1）](https://github.com/openclaw/openclaw/issues/53628)**：P3 行为 Bug。Docker 环境下安装 ClawHub 技能时 `XDG_CONFIG_HOME` 环境变量未被解析，配置无法生效。评论数量高说明这一问题影响面较广。

- **[Issue #119796 — Windows: vitest teardown EBUSY on agent state DB（14 条评论）](https://github.com/openclaw/openclaw/issues/119796)**：P2 测试基础设施问题。Windows 上 `openclaw-agent.sqlite` 句柄未释放，导致 `extensions/zalo` 测试套件 teardown 失败。

- **[Issue #87561 — Durable final fallback delivery semantics across channels（10 条评论，P1，👍 1）](https://github.com/openclaw/openclaw/issues/87561)**：维护者标记的高优先级设计问题。当 agent 回合结束于内部 fallback/错误消息时，用户端可能看到的是“沉默”——因为渠道投递层丢弃了最终负载。这是对消息可靠性的一次根本性设计讨论。

- **[Issue #42840 — MathJax/LaTeX support in Control UI（8 条评论，👍 10）](https://github.com/openclaw/openclaw/issues/42840)**：P3 功能请求。评论不算最多，但 👍 10 在所有展示 Issue 中最高，是社区呼声最强的 UI 功能之一。

**社区诉求分析**：热点集中在三个方向——(1) **跨渠道/多编码的文本处理正确性**（filename encoding、Telegram 换行、Slack 事件过滤）；(2) **对“用户看到沉默”的反感**（fallback delivery、持久任务状态、重复回复）；(3) **Windows/容器环境的一等公民支持**（EBUSY、XDG_CONFIG_HOME、k3s 嵌套、Docker 重启循环）。

## 5. Bug 与稳定性

按严重程度排列（P0 → P3），并标注修复 PR 的关联状态：

### P0 严重

- **[Issue #126821 — SQLite corruption recurs on pristine rebuilt DBs within 15–24h（6 条评论，P0，2026-08-20 创建）](https://github.com/openclaw/openclaw/issues/126821)**：2026.8.1-beta.2、WSL2 环境下，通过 `VACUUM INTO` 重建且通过完整性校验的全新 `openclaw.sqlite` 在 15–24 小时内出现 freelist miscount，并曾出现“paralyzed gateway”模式（拒绝所有服务但进程不退出）。**5 天内 5 起事件**，目前无关联 fix PR。

### P1 高优

- **[Issue #97616 — Unreaped hook/tool child processes cause zombie accumulation（8 条评论，P1，regression）](https://github.com/openclaw/openclaw/issues/97616)**：hook/tool 执行的子进程未回收，`openclaw-hooks`、`bash`、`codex` 等积累为僵尸进程，导致运行时性能退化。当前状态 `needs-info`，无 fix PR。

- **[Issue #87561 — Final fallback delivery semantics（10 条评论，P1）](https://github.com/openclaw/openclaw/issues/87561)**：见上节。用户看到“沉默”而非 fallback 错误。当前状态：`needs-product-decision`，无 fix PR。

- **[Issue #49381 — Feishu duplicate final replies after model failover（7 条评论，P1）](https://github.com/openclaw/openclaw/issues/49381)**：主模型限流触发 fallback 时，单条用户消息可能产生两条最终助手回复。疑似渠道层与模型层重复投递，无 fix PR。

- **[Issue #127176 — CLI and Node Host alternate device metadata approvals on Windows（6 条评论，P1）](https://github.com/openclaw/openclaw/issues/127176)**：Windows 上 TUI 与 Node Host 共用同一持久化设备身份，却报告不同平台元数据（TUI 报告 `process.platform`），导致设备审批状态不一致。已有 `linked-pr-open`。

- **[Issue #86612 — Docker gateway restart loop with OPENCLAW_SANDBOX=1 and /mnt paths（6 条评论，P1）](https://github.com/openclaw/openclaw/issues/86612)**：Windows + Docker Desktop 上特定环境变量组合导致网关容器无限重启。已有 `source-repro`，无直接 fix PR。

- **[Issue #83598 — anthropic:claude-cli OAuth refresh still dead-ends main lane（6 条评论，P1，👍 2）](https://github.com/openclaw/openclaw/issues/83598)**：2026.5.12 版本中，即使经过 #73682 修复，OAuth 刷新过期后所有 agent 流量（不只是 cron）仍会 dead-end。评论者指出问题依旧。

- **[Issue #108215 — Context usage drops from 57% to 13% without compaction（6 条评论，P1）](https://github.com/openclaw/openclaw/issues/108215)**：大型工具输出后，上下文使用量神秘下降，但压缩计数为 0。暗示存在未追踪的上下文截断/丢弃，可能造成消息丢失。

- **[Issue #126631 — Sandbox skills bind-mount creates root-owned /workspace/.openclaw（5 条评论，P1）](https://github.com/openclaw/openclaw/issues/126631)**：Sandbox 启动时 skills bind-mount 创建 `root:root` 所有权目录，uid 1000 的 sandbox 用户无法访问，导致技能加载失败。已有 `linked-pr-open`。

- **[Issue #126451 — 2026.7.1-2 fail-closed doctor migration crash-loops gateway（5 条评论，P1，regression）](https://github.com/openclaw/openclaw/issues/126451)**：从 2026.6.11 升级到 2026.7.1-2（仅换镜像）后，`openclaw doctor` 迁移步骤遇 Codex sidecar `ERR_MODULE_NOT_FOUND` 即 fail-closed，导致网关启动崩溃循环。已有 `linked-pr-open`。

- **[Issue #89791 — 5.26 supervisor + dual-plist: 30s EADDRINUSE loop（5 条评论，P1）](https://github.com/openclaw/openclaw/issues/89791)**：`ai.openclaw.gateway` 与 `ai.openclaw.node` 双 plist 同时运行时，`detectRespawnSupervisor()` 触发端口 18789 的 10 秒 EADDRINUSE 循环。涉及 `unset` 环境变量顺序问题。

- **[Issue #86963 — Orphaned/oversized native Codex thread wedges session permanently（5 条评论，P1）](https://github.com/openclaw/openclaw/issues/86963)**：`chat.send` 返回 "started" 但实际无 run 执行，消息被静默丢弃。`clawsweeper-recovery-stuck` 标签表明恢复路径也受阻。

### P2 中优（精选）

- **[Issue #119796 — Windows vitest EBUSY（14 条评论，P2）](https://github.com/openclaw/openclaw/issues/119796)**：已有 `linked-pr-open`。
- **[Issue #53628 — XDG_CONFIG_HOME not interpreted（14 条评论，P2）](https://github.com/openclaw/openclaw/issues/53628)**：`needs-maintainer-review`，无 fix PR。
- **[Issue #44502 — Discord routing / mention-gating regression（7 条评论，P2）](https://github.com/openclaw/openclaw/issues/44502)**：preflight 逻辑在部分 agent 路由场景下过于宽松。`needs-live-repro`。
- **[Issue #120735 — Telegram stickers arrive as raw file refs（7 条评论，P2）](https://github.com/openclaw/openclaw/issues/120735)**：贴纸无描述、未暂存到磁盘，`image` 工具无法分析。已有 `linked-pr-open`。
- **[Issue #46031 — auth.order ignored for GitHub Copilot（7 条评论，P2）](https://github.com/openclaw/openclaw/issues/46031)**：运行时总是使用 `auth.profiles` 的第一个 key，`auth.order` 配置被忽略。已有 `linked-pr-open`。
- **[Issue #50490 — Feishu 群聊 activation 模式切换无效（6 条评论，P2，regression）](https://github.com/openclaw/openclaw/issues/50490)**：`/activation mention` 命令返回确认后，机器人仍响应所有消息。已有 `linked-pr-open`。
- **[Issue #50611 — memory flush never triggers when reserveTokensFloor equals contextWindow（6 条评论，P2）](https://github.com/openclaw/openclaw/issues/50611)**：配置等值导致阈值为负，压缩永不触发，上下文占满后静默失败。已有 `linked-pr-open`。
- **[Issue #84110 — Codex rewrites prompt on tool-call continuation, busting cache（5 条评论，P2，regression）](https://github.com/openclaw/openclaw/issues/84110)**：cache ratio 从 93% 暴跌至 47%，既浪费 token 又可能改变语义。`needs-info`。

**稳定性综合判断**：今日数据中 P0/P1 级 Bug 达 12 个，其中 3 个是回归（#97616、#44502、#126451），且 **P0 的 SQLite 递归损坏问题尚未有修复 PR**，是当前发布验证周期中最需警惕的风险点。

## 6. 功能请求与路线图信号

### 已进入 PR 实现阶段（可能随下一版本发布）

- **RFC 0029「Control Model」系列**（[CM1](https://github.com/openclaw/openclaw/pull/127670)、[CM2](https://github.com/openclaw/openclaw/pull/127671)、[CM3](https://github.com/openclaw/openclaw/pull/127672)、[CM4](https://github.com/openclaw/openclaw/pull/127674)、[CM5](https://github.com/openclaw/openclaw/pull/127675)）：Control UI 会话管理架构重构，引入 Gateway Client 模型、会话/目录快照、渲染器无关 UI 产物、安全强化。5 个 XL 级 PR 同日提交，是明确的架构演进方向。
- **[PR #126013 — fix(ui): New Session misses dynamically discovered models](https://github.com/openclaw/openclaw/pull/126013)**（P1，XL）：补充动态发现模型在“新建会话”中的可见性，修复 #124008。
- **[PR #126518 — fix(llm-task): trust explicit provider for slash-containing model ids](https://github.com/openclaw/openclaw/pull/126518)**（P1，S）：修复显式 provider 与斜杠模型 ID 的兼容问题。
- **[PR #124831 — feat(macos): package an exact prewarmed development runtime](https://github.com/openclaw/openclaw/pull/124831)**（P2，XL）：解决 macOS 开发构建中外部插件版本与核心版本不匹配导致的安装失败。
- **[PR #125374 — feat(gateway): allow custom tailnet port for Tailscale ingress](https://github.com/openclaw/openclaw/pull/125374)**（P2）：解决 443 端口被占用的运维场景。
- **[PR #122425 — fix: allow slash skills inside normal messages](https://github.com/openclaw/openclaw/pull/122425)**（P2，XL）：在正常书写中通过 caret-aware 补全唤起技能/安全命令，无需以 `/` 开头。

### 社区呼声高、尚无 PR 的功能请求

- **[Issue #50199 — Skill Priority Configuration（9 条评论，P3）](https://github.com/openclaw/openclaw/issues/50199)**：为重叠技能建立优先级选择规则，用户长期痛点。
- **[Issue #52640 — Persistent task-status surface（8 条评论，P2，👍 2）](https://github.com/openclaw/openclaw/issues/52640)**：为 Discord 等长任务渠道提供权威状态面，typing indicator 与流式不足以满足。
- **[Issue #40982 — Raise/remove 3-minute no-output watchdog cap（7 条评论，P1，👍 2）](https://github.com/openclaw/openclaw/issues/40982)**：`CLI_RESUME_WATCHDOG_DEFAULTS.maxMs` 硬编码 180 秒，导致长任务被误杀。P1 优先级说明影响真实用户。
- **[Issue #42840 — MathJax/LaTeX in Control UI（8 条评论，P3，👍 10）](https://github.com/openclaw/openclaw/issues/42840)**：社区呼声最高的 UI 功能。
- **[Issue #45771 — Built-in pace-aware rate limiting（7 条评论，P3）](https://github.com/openclaw/openclaw/issues/45771)**：自主循环 agent 可感知消耗速率，避免突袭 API 限流。
- **[Issue #57425 — Graceful Gateway Restart with Session Recovery（6 条评论，P2）](https://github.com/openclaw/openclaw/issues/57425)**：网关重启时静默杀进程、无恢复机制，与会话数据丢失直接相关。
- **[Issue #28300 — Theme Customization System（7 条评论，P3，👍 5）](https://github.com/openclaw/openclaw/issues/28300)**：6 套预设主题 + 自定义主题工作室，已有明确设计稿。

**路线图信号**：功能请求集中在三个主题——**可配置性**（技能优先级、主题、watchdog、速率限制）、**可观察性**（持久任务状态、会话标签、cron 任务名/标签、API provider 错误标识）、**恢复能力**（优雅重启、队列化提示词）。结合 Control Model 架构进展，可判断下一阶段产品重点在提升 UI 交互深度和系统韧性。

## 7. 用户反馈摘要

从今日 Issue 评论中提炼的真实用户声音：

- **飞书文件名乱码是高频痛点**（#48788）：用户在飞书中文文件名场景下，UTF-8 被误读为 Latin-1，PR #48578 只修复了最常见案例，社区期望一个架构级的多编码方案而非点状修复。

- **Windows 用户感到“二等公民”**（#119796、#127176）：EBUSY 锁句柄、设备元数据不一致、Docker 重启循环等大量 Windows 特有问题被集中报告。用户评论中透露出对 Windows 测试覆盖不足的不满。

- **“静默失败”是最伤信任的行为**（#58957、#87561、#86963、#83598）：多个 Issue 都在描述同一种体验——操作没有报错，但没有结果（模型切换无响应、fallback 消息未投递、`chat.send` 返回 started 但无 run、OAuth 后所有流量 dead-end）。用户无法区分“系统不可用”与“系统正在思考”。

- **配置项复杂且边界行为不直观**（#50611、#87136）：`reserveTokensFloor` 等于 `contextWindow` 时负阈值导致压缩永不触发；绝对 token 阈值在 1M 上下文和 200K 上下文模型间切换时完全失效。用户期待配置参数用相对百分比。

- **sandbox 权限问题阻断 CI/自动化**（#126631）：root 拥有的目录将 sandbox 用户锁在门外，bind-mount 本应简化工作流，反而引入权限事故。

- **社区在快速验证 beta 并积极反馈**（#125626）：18 条评论的发布验证讨论证明社区测试者深度参与，质量反馈循环通畅。

## 8. 待处理积压

以下为长期未获维护者响应或缺少明确推进路径的重要 Issue/PR，建议优先关注（均带有 `no-new-fix-pr`/`needs-maintainer-review` 标签且长期未关闭）：

### 高优先级长期未决

- **[Issue #83598 — anthropic:claude-cli OAuth refresh still dead-ends（2026-05-18 创建，P1，6 条评论）](https://github.com/openclaw/openclaw/issues/83598)**：即使声称已修复，用户仍验证失败。⚠️ 该问题已存在 3 个月，涉及所有用户。
- **[Issue #40982 — 3-min watchdog cap（2026-03-09 创建，P1，7 条评论，👍 2）](https://github.com/openclaw/openclaw/issues/40982)**：P1 却 5 个月未有维护者决策，长期任务被误杀的问题持续影响用户。
- **[Issue #44502 — Discord routing/mention-gating regression（2026-03-13 创建，P2，7 条评论）](https://github.com/openclaw/openclaw/issues/44502)**：回归类 Bug，5 个月未获 `needs-live-repro` 跟进。

### 中优先级长期搁置

- **[Issue #38714 — Discord reaction events in Hooks（2026-03-07 创建，P2，👍 2）](https://github.com/openclaw/openclaw/issues/38714)**：基于 reaction 的自动化（如 ✅ 保存记忆）是高频请求，5 个月无动作。
- **[Issue #42840 — MathJax/LaTeX support（2026-03-11 创建，P3，👍 10）](https://github.com/openclaw/openclaw/issues/42840)**：社区最高赞功能请求，无维护者回应。
- **[Issue #53628 — XDG_CONFIG_HOME not processed（2026-03-24 创建，P3，14 条评论）](https://github.com/openclaw/openclaw/issues/53628)**：14 条评论的热门 Issue，仅标记 `needs-maintainer-review` 无实质推进。
- **[Issue #28300 — Theme customization（2026-02-27 创建，P3，👍 5）](https://github.com/openclaw/openclaw/issues/28300)**：项目最早期的功能请求之一，6 个月未获回应。
- **[Issue #42840、#50199、#48918、#45771 等](https://github.com/openclaw/openclaw/issues/42840)** — “off-meta tidepool” 标签集群（约 15 个 P3 Issue）整体处于“有共识、无执行”状态。

### PR 侧积压

- **[PR #121576 — fix(text): separator insertion when stripping model tokens（2026-08-10 创建，XL，P2）](https://github.com/openclaw/openclaw/pull/121576)**：涉及 50+ 标签的跨渠道文本修复，等待 proof 验证。
- **[PR #116489 — install policy warnings（虽已关闭，但后续维护需确认落地）](https://github.com/openclaw/openclaw/pull/116489)**：安全功能的重要 PR，建议确认其迁移与测试覆盖。

---

**项目健康度评估**：社区活跃度极高（24 小时 1000 条 Issue/PR 更新），发布验证流程规范，功能请求丰富。但需警惕两点：一是 P0 SQLite 损伤问题在 beta 验证期间复发且无修复 PR，二是大量 P1/P2 级 Issue（含回归）积压超过 3 个月未获维护者决策。若 `needs-maintainer-review` 的数量继续增长，社区信任度将面临考验。建议维护者在推进 Control Model 架构演进的同期，优先消化 P0/P1 的稳定性问题与高赞功能请求。

---

## 横向生态对比

# 开源 AI 智能体/个人助手生态横向对比分析报告
**—— 基于 2026-08-22 全生态社区动态**

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态正处于**高活跃、双线并进**阶段：以 OpenClaw 为核心的"Claw 家族"（含 PicoClaw、NanoClaw、NullClaw、IronClaw、ZeptoClaw、ZeroClaw）与 Hermes Agent、NanoBot、CoPaw、Moltis 等独立项目共同构成多层次竞争格局，单日全生态 Issue/PR 更新量超 1400 条。各项目普遍在"多通道集成、会话架构重构、安全加固"三条战线上推进，但共同瓶颈是**维护者审查速度跟不上社区提交速度**——OpenClaw 386 条、Hermes 49 条、ZeroClaw 48 条 PR 等待合并。稳定性层面，SQLite 损坏、Anthropic cache_control 400、SOP 引擎执行顺序错误等 P0 缺陷在多个项目同期出现，说明行业仍处"功能扩张优先于质量巩固"阶段，但 OpenClaw 的 beta 验证周期等制度化质量流程已开始成形。值得警惕的是，**"静默失败"（用户看不到错误、也看不到结果）在几乎所有项目中重复出现**，已成为制约智能体规模化落地的共性信任债。

---

## 2. 各项目活跃度对比

| 项目 | Issues（新开/关闭） | PRs（待合并/已合并） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（491/9） | 500（386/114） | 无（v2026.8.1-beta.2 验证中） | ⚠️ 高活跃；12 个 P0/P1 缺陷、P0 SQLite 损坏无修复 PR |
| **Hermes Agent** | 50（44/6） | 50（49/1） | v0.20.5（约 323 PR） | ⚠️ 2 个 P0 回归无修复，审查积压严重 |
| **ZeroClaw** | 50（50/0） | 50（48/2） | 无 | ⚠️ 高活跃；安全修复滞留 36 天待审 |
| **CoPaw (QwenPaw)** | 34（19/15） | 36（21/15） | 无（版本号升至 v2.1.1b2） | ✅ 迭代快；WebView2 崩溃/MCP 重连历史问题未清 |
| **IronClaw** | 13 更新 | 35（18/17） | 无 | ✅ 合并率约 49%，CI 与沙箱修复积极 |
| **NanoBot** | 5（1/4） | 37（14/23） | 无 | ✅ 合并率高，主动清理积压 PR |
| **NanoClaw** | 1（1/0） | 25（14/11） | 无 | ✅ 渠道扩张期；外部 Issue 反馈偏少 |
| **LobsterAI** | 2（0/2） | 13（1/12） | 无（release 分支并入 main） | ⚠️ 今日 stale 关闭真实 Bug，修复落地存疑 |
| **Moltis** | 2（2/0） | 8（7/1） | 无 | ✅ 中速推进；1 个 5 个月 PR 悬挂 |
| **PicoClaw** | 1（1/0） | 4 合 | 无 | ✅ 平稳；PR 合并周期 5–6 个月偏长 |
| **NullClaw** | 0 | 1（1/0） | 无 | ✅ 维护期，低活跃 |
| **ZeptoClaw** | 0 | 0 | 无 | ⚪ 24 小时无活动 |

---

## 3. OpenClaw 在生态中的定位

**社区规模断层领先。** OpenClaw 单日 1000 条 Issue/PR 更新，是第二梯队（Hermes、ZeroClaw 各 100 条）的 **10 倍**。Claw 家族多数成员（PicoClaw 的 Go 重写、NanoClaw 的 TS 渠道 SDK、ZeroClaw 的 Rust 安全实现等）在不同语言与场景下复用其架构理念，形成"中心辐射"生态。

**技术路线差异：**
- **RFC 驱动的架构演进**：RFC 0029「Control Model」5 个 XL 级 PR 同日集中提交，展示"先设计后实现"的重构纪律，生态内独树一帜；
- **最重底座**：完整多通道网关（Discord/Slack/Telegram/飞书）+ 双控制面（TUI + Control UI）+ Node Host + 沙箱 + ClawHub 技能市场；
- **发布质量管控制度化**：v2026.8.1-beta.2 验证周期附带完整测试工作表和网关升级流程，18 条社区深度参与评论，是唯一具备系统性发布验证闭环的项目。

**相对短板**：P0 级 SQLite 递归损坏 5 天 5 起且无修复 PR；P1 缺陷（#40982、#83598 等）滞留 3–5 个月无维护者决策；`needs-maintainer-review` 标签积压正在消耗社区信任。Hermes 的迁移工具链（OpenClaw→Hermes migration）已出现，说明部分用户正在向治理更轻、发布更快的平台流动。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目与具体诉求 |
|---|---|
| **MCP/工具连接可靠性** | Hermes（#88661 单次超时致整个工具集注销）、CoPaw（#6524 后端重启后无法自动重连）、NanoBot（#1168 Notion MCP 凭据正确但连不上）、ZeroClaw（工具注册表并发安全重构 #9319）——**局部故障不应放大为全局不可用** |
| **跨渠道文本/文件正确性** | OpenClaw（#48788 多编码统一工具）、NanoClaw（#3426 send_card 按钮被 bridge 丢弃、agent 误判平台不支持）、Moltis（#1220 WhatsApp Markdown 渲染）、LobsterAI（#2517 Unicode 文件名兼容）、ZeroClaw（#10116 工具结果截断不可观测） |
| **上下文与 token 成本治理** | Hermes（#91830 >10M token 会话丢失 100% 缓存命中）、OpenClaw（#108215 上下文占用异常下降）、ZeroClaw（#10068 32k 硬限 vs 配置 131k）、NanoBot（#5480 统一 LLMUsage 契约）、CoPaw（#7206 /compact 回归） |
| **安全边界与权限一致性** | ZeroClaw（#10165 delegate 绕过高危命令拦截）、OpenClaw（#116489 安装策略需显式确认）、NanoBot（#1149 PromptGuard 注入检测）、IronClaw（#7806 gh 凭据一次性暴露）、Hermes（#91885 指令文件投毒检测）——**子代理、插件供应链、凭据路径全链路覆盖** |
| **"静默失败"体验治理** | OpenClaw（#87561 fallback 时用户看到沉默）、Hermes（#91717 重试损坏响应误报为截断）、CoPaw（#7156 embedding 超时静默降级 BM25）、ZeroClaw（#10115 截断行为不可见）、LobsterAI（#1550 定时任务配置不生效仅在触发时暴露） |
| **Windows/桌面一等公民支持** | OpenClaw（#119796 EBUSY 测试锁）、CoPaw（#6427 WebView2 确定性闪退）、LobsterAI（#1217 网关日重启 3–5 次）、Moltis（#468 sh -c 不存在）、Hermes（#88004 受限 PATH 找不到 npm）、ZeroClaw（#10059 macOS 键位适配） |

**核心发现**：MCP 可靠性与"静默失败"本质是同一问题——**智能体系统错误传播链路不透明，局部故障被放大为信任危机**。这是全生态最大的共性技术债。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 关键架构特征 |
|---|---|---|---|
| **OpenClaw** | 全栈参考实现：多通道网关、技能市场、Control UI | 开发者/自托管/企业 PoC | Node.js/TS；Gateway + Node Host 双进程；RFC 驱动 |
| **Hermes Agent** | 桌面优先、多 Profile 隔离、Bot 模式 | 专业开发者/远程团队 | Python(uv)+Node 混合栈；高频发布（323 PR/版本） |
| **ZeroClaw** | 安全治理、SOP 流程引擎、Android 移动端 | 安全敏感企业/合规场景 | Rust；delegate 独立审批、请求重放防护 |
| **IronClaw** | CI 基础设施、沙箱安全、通知中心 | NEAR AI 生态开发者/DevOps | Rust；GitHub CLI 凭据中介、run gates 收件箱 |
| **CoPaw (QwenPaw)** | 多媒体生成（Creator）、记忆系统（ReMe）、桌面端 | 千问生态个人用户/创作者 | Python + WebView2；记忆检索、审批模式 |
| **NanoBot** | 轻量个人助手、TUI/WebUI、安全模块 | 个人效率用户/学生 | Python asyncio；PromptGuard、技能手动调用权限 |
| **NanoClaw** | 多频道 Chat SDK、模板化 Agent 创建 | Node.js 开发者/渠道运营者 | TypeScript/pnpm；Telegram 多实例、Mattermost/Dial |
| **Moltis** | Rust 轻量网关、隐私优先 | 隐私敏感/跨平台个人用户 | Rust crates；Obscura 隐身默认、heartbeat 调度 |
| **PicoClaw** | 嵌入式/轻量场景、多协议兼容 | 边缘设备/资源受限场景 | Go；Anthropic 原生协议、skills CLI 重构 |
| **LobsterAI** | 企业协作（IM + 资料库）、隐私友好分析 | 企业团队/知识管理 | Electron 主/渲染进程；DSH 运行时 |
| **NullClaw** | OpenAI 兼容网关聚合 | 多供应商路由需求 | 增量式 Provider 注册；欧盟数据驻留 |

---

## 6. 社区热度与成熟度分层

**第一梯队：快速迭代期（日更新 ≥50）** — OpenClaw、Hermes Agent、ZeroClaw、CoPaw、IronClaw
- 共同特征：功能线（新渠道/新架构）与修复线（P0/P1）并行，PR 合并量大但审查积压同步增长。
- 主要风险：OpenClaw 的 P1 缺陷滞留 3–5 个月，Hermes 与 ZeroClaw 大量高价值 PR（含安全修复）长期无人 review。

**第二梯队：质量巩固期（日更新 5–50）** — NanoBot、NanoClaw、LobsterAI、Moltis、PicoClaw
- NanoBot 处于"清积压 + 长线 PR 落地"收敛阶段（6 个月前的 PromptGuard 今日合并）；LobsterAI 完成 release 分支合入后回归正常迭代；PicoClaw 以 4 个高质量合并展示"小而稳"路线。
- 共同特征：合并率高（NanoBot 23/37、LobsterAI 12/13），维护者响应更及时，社区反馈循环更健康。

**第三梯队：维护/观望期** — NullClaw、ZeptoClaw
- 仅增量 PR 或无活动，适合作为代码参考，不适合依赖其迭代节奏。

**值得注意的流动信号**：Hermes 提供 OpenClaw→Hermes 迁移工具，生态内已出现"从通用底座迁移到专业平台"的用户流动。

---

## 7. 值得关注的趋势信号

1. **"静默失败"正在成为智能体产品的信任分水岭。** OpenClaw #87561"用户看到沉默"、Hermes MCP 工具集整体注销、CoPaw 静默降级 BM25、ZeroClaw 截断不透明——各项目不约而同补课同一件事：**每一次降级/失败都必须产生显式、可理解的用户信号**。这是产品化成熟度的核心标尺，也是新进入者的差异化机会。

2. **MCP 从"能连"走向"可靠"是生态最大刚需。** 跨 4 个项目的故障报告指向同一结论：超时隔离、断线重连、注册表并发安全是智能体生产落地的前置条件。**框架选型时应优先评估其 MCP 错误处理成熟度。**

3. **缓存/token 成本治理上升为头等议题。** >10M token 会话缓存失效"每小时多烧数十美元"（Hermes）、上下文占用异常下降（OpenClaw）、32k 硬限（ZeroClaw）——大上下文时代，透传型缓存与可配置压缩阈值将成框架标配。

4. **安全重心从"防外部攻击"转向"内部权限一致性"。** delegate 绕过审批（ZeroClaw）、安装策略确认（OpenClaw）、指令文件投毒（Hermes）、凭据中介（IronClaw）、提示注入检测（NanoBot）——**智能体的安全边界必须覆盖子代理、插件供应链、凭据路径与配置文件全链路**，且"配置声明的权限"必须与实际行为一致。

5. **"Claw 家族"正在形成事实上的生态标准。** OpenClaw 提供参考架构，各成员在保持协议/理念兼容下分化出 Rust、Go、TS、Python 多语言实现与安全、嵌入式、渠道运营、企业协作等垂直场景。对开发者意味着跨实现的认知迁移价值；对创业者意味着围绕 Claw 生态的工具链、迁移服务与托管平台存在窗口期。

6. **Agent 创建走向"数据驱动 + 模板化"。** NanoClaw 的 `create_agent` 模板引用、ZeroClaw 的 SOP 引擎原子化、CoPaw 的 Creator 1.1.0 聚合更新——agent 正从"代码配置"演进为"模板装配"，将显著降低非开发者使用门槛，并催生模板/技能市场。

---

**决策建议**：追求最大生态与渠道广度选 OpenClaw，但需跟踪其 P0 修复节奏；安全/合规场景 ZeroClaw 的权限治理最完整，需接受审查积压现实；Node.js 团队做多频道 Chat SDK 首选 NanoClaw；无论选择哪个项目，**先压测其 MCP 故障恢复路径与"静默失败"场景表现**——这是当前生态最普遍的短板。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-22

## 今日速览

过去24小时项目活跃度较高：共处理 5 条 Issue（其中 4 条已关闭，1 条新开），PR 活动达 37 条（23 条已合并/关闭，14 条待合并）。维护者明显加大了积压清理力度，多个月前的 PR（如 PromptGuard 安全模块、Tauri 桌面应用、CrowPay 支付技能）同日集中合并。技术架构方面，提供者用量契约的类型化重构（#5480）与轨迹统一后端（#5481）正在推进中，同时深挖了若干稳定性修复（Dream 光标推进、Slack 下载重定向校验、cron 禁用失效等）。整体来看，项目正处于快速迭代期，具备良好的社区吸纳与自愈能力。

## 项目进展

今日合并/关闭的 PR 覆盖了功能增强、稳定性修复与架构演进三个方向，具体亮点如下：

- **模型支持扩展**：[#5474](https://github.com/HKUDS/nanobot/pull/5474) 为 DeepSeek Responses API 注册了 `deepseek-v4-flash-vision-exp` 视觉模型，并保留了结构化多模态内容传输，视觉能力跟进迅速。
- **终端体验改进**：[#5476](https://github.com/HKUDS/nanobot/pull/5476) 在 TUI 中将 LaTeX 数学公式渲染为 Unicode 纯文本，覆盖流式、已 reconcile 及历史消息，同时保留代码块、Shell 变量等原文。
- **移动端 WebUI 修复**：[#5477](https://github.com/HKUDS/nanobot/pull/5477) 修复了 iOS PWA 安装后控件超出安全区的问题，并同步 `theme-color` 以适配亮/暗主题。
- **Dream 关键修复**：[#5442](https://github.com/HKUDS/nanobot/pull/5442) 修复了工具错误已恢复但 Dream 游标不推进、导致后续重复处理同一历史批次的问题，直接对应 Issue #5441。
- **Cron 注册表修复**：[#5407](https://github.com/HKUDS/nanobot/pull/5407) 修复了在 `gateway.heartbeat.enabled=false` 时持久化 cron 任务仍然继续触发、空耗 token 的回归问题。
- **Slack 安全性修复**：[#5414](https://github.com/HKUDS/nanobot/pull/5414) 为 Slack 文件下载的完整重定向链增加了 URL 校验，防止被篡改/构造的下载 URL 将请求引向不可信地址。
- **安全能力落地**：[#1149](https://github.com/HKUDS/nanobot/pull/1149) PromptGuard 提示注入检测模块历时近 6 个月，今日正式合并，覆盖系统提示词覆盖、角色混淆、工具调用 JSON 注入等检测类别。
- **积压桌面端 PR 清理**：[#2063](https://github.com/HKUDS/nanobot/pull/2063)（Tauri 桌面应用）、[#1592](https://github.com/HKUDS/nanobot/pull/1592)（Lumina Windows 安装器）、[#1539](https://github.com/HKUDS/nanobot/pull/1539)（CrowPay 技能）均于今日关闭，为后续桌面端统一方案扫清了障碍。

## 社区热点

今日讨论热度最高的 Issue 集中在用户对基础交互的期望：

- **[#5198 “无法在会话中切换模型”](https://github.com/HKUDS/nanobot/issues/5198)**（4 条评论）：用户指出 Nanobot 始终以配置中的首选模型运行，其他模型仅作 fallback，聊天输入框旁的模型标识点击无效，`/model` 命令指定其他模型 ID 也疑似不生效。这反映出用户希望获得与主流云 SaaS AI 一致的灵活模型切换体验。该 Issue 已关闭，但未见对应修复 PR 被引用，仍需关注后续是否跟进实现。
- **[#1168 “连接 Notion MCP 失败”](https://github.com/HKUDS/nanobot/issues/1168)**（2 条评论）：用户反馈多次核对 Notion API 凭据无误，但 MCP 始终无法连接；同凭据在 Claude 客户端可正常登录，指向 Nanobot 侧 MCP 兼容性或鉴权实现的差异。该 Issue 已关闭，但讨论中未透露根因，建议维护者沉淀排查结论到文档。

## Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 问题 | 状态 |
|---|---|---|---|
| 高 | [#5441](https://github.com/HKUDS/nanobot/issues/5441) | Dream 运行在工具错误恢复后仍被判定为“未完成”，`memory/.dream_cursor` 不推进；后续每次 `/dream` 都会重新处理同一批历史，导致重复编辑 | ✅ 已有修复 PR [#5442](https://github.com/HKUDS/nanobot/pull/5442) 合并 |
| 高 | [#5463](https://github.com/HKUDS/nanobot/issues/5463) | DingTalk channel 通过 `asyncio.Task` 处理入站消息，但任务生命周期无终止观察者，后台任务可能泄漏/不被排空 | ⚠️ 新开，无关联 PR |
| 中 | [#5454](https://github.com/HKUDS/nanobot/issues/5454) | 流式响应中途发生 `server_error` 时，重试逻辑仅在首个 delta 前触发；一旦已输出过内容，该轮不再重试 | ✅ 已关闭 |
| 中 | [#5198](https://github.com/HKUDS/nanobot/issues/5198) | 无法在会话内切换模型，`/model` 命令疑似失效，只能重配整个实例 | ✅ 已关闭（未查明对应修复） |
| 低 | [#1168](https://github.com/HKUDS/nanobot/issues/1168) | Notion MCP 鉴权/连接失败，Claude 客户端正常 | ✅ 已关闭 |

另外，[#5407](https://github.com/HKUDS/nanobot/pull/5407) 和 [#5414](https://github.com/HKUDS/nanobot/pull/5414) 分别修复了 cron 禁用后仍触发、Slack 下载重定向校验缺失两个尚未由用户报告的隐患，属于主动加固。

## 功能请求与路线图信号

- **模型/Provider 生态加速**：新视觉模型支持（[#5474](https://github.com/HKUDS/nanobot/pull/5474)）接入速度较快；元搜索 Provider（[#5234](https://github.com/HKUDS/nanobot/pull/5234)，MST + RRF 聚合）仍开放中，若合并将显著提升搜索覆盖质量。
- **架构抽象加深**： [#5480](https://github.com/HKUDS/nanobot/pull/5480) 定义不可变类型化 `LLMUsage` 契约并统一 OpenAI/Anthropic/Bedrock 边界语义，[#5481](https://github.com/HKUDS/nanobot/pull/5481) 进一步在其上构建统一的 provider 用量轨迹后端，可观测性增强值得期待。
- **WebUI 体验持续改进**：[#5420](https://github.com/HKUDS/nanobot/pull/5420) 提出“回合可观测性与安全恢复”，将用户每轮对话投射为单一答案面、累积 provider 用量、中断状态可视化——若合并将显著改善复杂对话的浏览体验。
- **技能调用权限细分**：[#5405](https://github.com/HKUDS/nanobot/pull/5405) 为技能增加 `disable-model-invocation: true` 前置配置，使部署/发布等副作用操作仅允许用户手动触发，符合安全最佳实践。
- **模型切换呼声**：Issue [#5198](https://github.com/HKUDS/nanobot/issues/5198) 虽已关闭，但用户对运行时动态切换模型的诉求明确，结合 `/model` 命令失效的现状，预计后续会有针对性的交互设计或命令修复。

## 用户反馈摘要

- "总是用首选模型，其他只能当 fallback，点模型标识没用"——用户对灵活切换模型的期望强烈，当前固定首选模型的设计让长会话中临时换模型变得困难，是影响日常使用体验的主要痛点。
- "API 查了好几遍没问题，但就是连不上，Claude 那边可以正常登录"——MCP 生态连接的排障体验不佳，用户在缺少诊断信息时只能自行反复核对凭据，建议补充更细粒度的连接错误日志。
- "明明做了有效的记忆编辑，却还是被判定未完成，后续每次 Dream 都重复处理同一批历史"——Dream 流程判定逻辑不透明，且失败状态影响累积，用户在反馈中表达了困惑；修复 PR 已合并，但仍需在文档中说明"工具错误可恢复"的语义。
- 另有多项 PR（如 CrowPay 支付技能、Lumina Windows App、Tauri 桌面端）背后反映出用户对**agent 自主支付**、**本地桌面应用**、**跨平台安装体验**的真实场景需求，关注度虽未直接体现在评论数上，但长期积压后集中合并说明这些方向有持续的社区推动力。

## 待处理积压

以下事项若在一段时间内无响应，可能影响用户体验或社区信任度：

⚠️ **需优先关注**：
- **[#5463 DingTalk 后台任务不排空](https://github.com/HKUDS/nanobot/issues/5463)**：新开 Bug，涉及消息丢失风险，尚无维护者回应或 PR 关联，建议尽快确认并排期修复。

📌 **开放 PR 等待合入或评审**：
- **[#5234 MST 元搜索 Provider](https://github.com/HKUDS/nanobot/pull/5234)**：已开放约 3 周，涉及新依赖多引擎聚合搜索，属于较大的功能面，建议明确评审计划。
- **[#5420 WebUI 回合可观测性](https://github.com/HKUDS/nanobot/pull/5420)**：标注为 `[conflict]`，可能需要 rebase 后才能继续推进。
- **[#5405 技能手动-only 调用](https://github.com/HKUDS/nanobot/pull/5405)**：已开放近一周，功能设计清晰且契合安全需求，等待合入。
- **[#5379 记忆合并输入保留](https://github.com/HKUDS/nanobot/pull/5379)**：已开放 9 天，涉及 memory 关键路径，建议尽快提测。

📦 **长期积压后已清理**：今日集中合并了 2 月（#1149）、3 月（#1539、#1592、#2063）提交的 4 个 PR，说明维护者正在刻意消化历史堆积，对项目健康度是积极信号。但也被动曝光了 PR 长时间无人评审的问题，建议后续设定更明确的评审 SLO。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-22

---

## 1. 今日速览

过去 24 小时项目活跃度极高：共 50 条 Issue 更新（44 条新开/活跃、6 条关闭）和 50 条 PR 更新（49 条待合并、1 条关闭），并发布了补丁版 **v0.20.5 (v2026.8.19)**（汇总约 323 个 PR）。值得警惕的是，今日浮现 **2 个 P0 级回归**（Anthropic cache_control 400 错误、超大会话缓存失效）以及多个与会话状态/多 Profile 隔离相关的 P1/P2 问题。PR 合并速度明显落后于提交速度（49/50 待合并），审查积压可能成为团队下一阶段瓶颈。总体来看，项目迭代节奏快，但稳定性问题需要优先排期处理。

---

## 2. 版本发布

### Hermes Agent v0.20.5 (v2026.8.19)
🔗 [Release 链接](https://github.com/NousResearch/hermes-agent/releases)

- **类型**：Patch release
- **内容**：将自 v0.20.4 以来合并的 **~323 个 PR** 打包为稳定标签，主要服务下游消费者（Docker 镜像、托管部署、全新安装）。
- **破坏性变更**：无（补丁版本，不涉及 API/配置破坏）。
- **迁移注意**：无需特殊迁移；建议用户尽快跟上升级，以获取 323 个 PR 中包含的错误修复与稳定性改进。

---

## 3. 项目进展

今日数据中仅 **1 个 PR 被合并/关闭**，大多数新 PR 仍处于待审查状态：

### 已合并/关闭
- **[#88537] fix(desktop): run repo discovery server-side in remote mode so Projects sidebar surfaces disk-scanned repos**（作者：piskooooo）
  修复了桌面端在远程模式下扫描仓库逻辑被跳过的问题，使 Projects 侧边栏能正确展示后端磁盘扫描的仓库。这是对远程桌面体验的重要修正。🔗 [PR #88537](https://github.com/NousResearch/hermes-agent/pull/88537)

### 值得关注的待合并 PR（今日新提交）
- **[#91887] fix(codex): apply cross-issuer reasoning guard to auxiliary Responses calls** — 修复辅助调用路径缺失加密内容守卫的问题。🔗 [PR #91887](https://github.com/NousResearch/hermes-agent/pull/91887)
- **[#91885] feat(security): detect persistent instruction-file poisoning** — 新增 `hermes security scan` 命令，检测指令/配置文件持久化投毒。🔗 [PR #91885](https://github.com/NousResearch/hermes-agent/pull/91885)
- **[#91884] fix(subdirectory_hints): exclude .hermes home from hint discovery** — 阻止 `$HOME` 下的会话将 Hermes 安装树中的 AGENTS.md 泄漏到无关工作中。🔗 [PR #91884](https://github.com/NousResearch/hermes-agent/pull/91884)
- **[#91883] fix(tui): honor display.compact in the Ink TUI** — 使 TUI 尊重 `display.compact` 配置。🔗 [PR #91883](https://github.com/NousResearch/hermes-agent/pull/91883)

**项目推进评估**：虽然 v0.20.5 已经发布，但今日只有 1 个 PR 进入主干，49 个 PR 等待审查/合并。长期开放的 PR（6 月提交的 #45458、#40726、#52344 等）仍需维护者关注，否则社区贡献者积极性可能受挫。

---

## 4. 社区热点

### 最热 Issue：Debian 安装全面失败
- **[#87093] Debian installation broken; uv.lock & npm install failed**（评论 19，👍 3，P1）🔗 [Issue #87093](https://github.com/NousResearch/hermes-agent/issues/87093)
  用户报告在 Debian 13.6 上执行官方安装脚本后，`uv.lock` 与 `npm install` 阶段失败，导致基本安装无法完成。这是当前社区反馈最集中的问题，说明安装脚本在不同发行版/环境下的鲁棒性需要加强。

### 讨论焦点：MCP 超时导致整个工具集注销
- **[#88661] MCP tool timeout parks the server connection — whole toolset unregisters, no auto-reconnect until gateway restart**（评论 6，P2）🔗 [Issue #88661](https://github.com/NousResearch/hermes-agent/issues/88661)
  当 MCP 工具调用超过网关 300 秒超时后，不只是该次调用失败，而是整个 MCP 服务器连接被“停驻”，所有工具从活动会话中注销，必须重启网关才能恢复。用户反馈的痛点在于单次超时被放大为全局故障。

### P0 回归：Anthropic 兼容性破坏
- **[#89886] cache_control on tool_result.content[] rejected by Anthropic-format API**（评论 4，P0）🔗 [Issue #89886](https://github.com/NousResearch/hermes-agent/issues/89886)
  自 v2026.8.18 起，任何包含工具结果的会话首轮 LLM 调用即报非重试 HTTP 400，直接影响所有工具型会话。该问题引发开发者和重度用户的强烈关注。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P0（立即响应）
| Issue | 问题描述 | Fix PR |
|---|---|---|
| [#89886](https://github.com/NousResearch/hermes-agent/issues/89886) | `cache_control` 被 Anthropic 格式 API 拒绝，导致所有工具型会话首次调用即 400 失败 | 暂无 |
| [#91830](https://github.com/NousResearch/hermes-agent/issues/91830)（标记 duplicate） | `proactive_prune_rearm_tokens` 机制让 >10M token 的会话失去 100% prompt-cache 读取命中（小会话可正常 72-93%） | 暂无 |

### 🟠 P1（高优先级）
| Issue | 问题描述 | Fix PR |
|---|---|---|
| [#87093](https://github.com/NousResearch/hermes-agent/issues/87093) | Debian 13.6 安装脚本失败（uv.lock / npm 解析依赖出错） | 暂无 |
| [#89346](https://github.com/NousResearch/hermes-agent/issues/89346) | `#88734` 修复后，共享 primary profile 路由到 secondary profile 产生分裂会话（不同子系统的 DB 读取范围不一致） | 暂无 |
| [#88655](https://github.com/NousResearch/hermes-agent/issues/88655) | 混合代码版本运行时，调度器层 cron 错误绕过 `failure_nudge` 告警，任务静默失败数小时（已关闭，但根因值得关注） | 无 |

### 🟡 P2（中优先级）
| Issue | 问题描述 | Fix PR |
|---|---|---|
| [#88661](https://github.com/NousResearch/hermes-agent/issues/88661) | MCP 工具超时后整个连接被停驻，工具集注销，需重启网关 | 暂无 |
| [#89157](https://github.com/NousResearch/hermes-agent/issues/89157) | Linux 终端输入数字键显示 `^[[57400u`（终端键码解析异常） | 暂无 |
| [#91818](https://github.com/NousResearch/hermes-agent/issues/91818) | Windows 11 下 Projects 跨 Profile 泄漏（隔离失效） | 暂无 |
| [#91815](https://github.com/NousResearch/hermes-agent/issues/91815) | 磁盘满 `ENOSPC/EDQUOT` 被错误分类为 timeout/billing，触发无谓重试与凭据轮换 | 暂无 |
| [#91633](https://github.com/NousResearch/hermes-agent/issues/91633) | Discord `/new` `/reset` 在 `multiplex_profiles` 下重置错误会话命名空间 | 暂无 |
| [#91654](https://github.com/NousResearch/hermes-agent/issues/91654) | MCP 会话/熔断注册表仅以 server name 为键，多 Profile 复用同一 gateway 进程时冲突 | 暂无 |
| [#91717](https://github.com/NousResearch/hermes-agent/issues/91717) | 传输超时后重试返回损坏响应，被误报为 “Response truncated due to output length limit”，掩盖真实原因 | 暂无 |
| [#88004](https://github.com/NousResearch/hermes-agent/issues/88004) | Linux 应用菜单启动 Desktop 时在受限 PATH 中找不到 npm | 暂无 |

### ⚪ P3（低优先级）
- [#90456](https://github.com/NousResearch/hermes-agent/issues/90456) Bot 模式与会话模式切换后对话状态错乱（已关闭）
- [#63211](https://github.com/NousResearch/hermes-agent/issues/63211) Model picker 隐藏自定义 `base_url` 模型直到手动刷新
- [#70451](https://github.com/NousResearch/hermes-agent/issues/70451) Markdown 预览强制水平滚动，应改为自动换行

---

## 6. 功能请求与路线图信号

### 可能被纳入下一版本的方向

1. **会话与工作区绑定（#48190）** 🔗 [Issue #48190](https://github.com/NousResearch/hermes-agent/issues/48190)
   - 诉求：记录会话的 `cwd` + git repo/branch，在列表/浏览中分组，并在恢复时还原上下文。
   - 信号：该问题自 6 月提出，持续获关注。与今日 #91818（Project 跨 Profile 泄漏）叠加，说明“会话/项目/Profile”三者的关系模型需要系统性重构。

2. **Provider 池可用性查询（#90838）** 🔗 [Issue #90838](https://github.com/NousResearch/hermes-agent/issues/90838)
   - 诉求：路由选择前先了解 provider 是否处于 429 冷却状态，避免将请求发送给注定失败的 provider。
   - 信号：与 #91815（错误分类触发凭据轮换）呼应，说明错误处理与重试策略需要更精细的上下文感知。

3. **Bot 推理强度可配置（#91871）** 🔗 [Issue #91871](https://github.com/NousResearch/hermes-agent/issues/91871)
   - 诉求：在 bot 创建/Profile 设置中增加 reasoning/thinking effort 控制，与 per-delegate-task、per-channel 对齐。
   - 信号：虽然标记为 duplicate，但这类“配置作用域不一致”的问题已多次出现（#91633、#89346），说明配置分层设计是当前主要技术债之一。

4. **Bot 组聊活动面板（#91826 / #91817，重复提交）** 🔗 [#91826](https://github.com/NousResearch/hermes-agent/issues/91826) ｜ [#91817](https://github.com/NousResearch/hermes-agent/issues/91817)
   - 诉求：在多人 bot 群聊中，仅显示 “is thinking…” 太不透明，需要 per-bot 的时间线 transcript，展示其正在响应的消息、任务阶段、工具调用等。

5. **桌面端 Profile 级持久化（#91107）** 🔗 [Issue #91107](https://github.com/NousResearch/hermes-agent/issues/91107)
   - 诉求：Accent Picker 的覆盖值应 per-profile 持久化，而不是临时生效。

---

## 7. 用户反馈摘要

- **安装体验受挫（#87093）**：Debian 用户严格按官方 `curl | bash` 方式安装即失败，评论达 19 条，用户表示“基本安装都无法完成”，对开箱即用的发行版体验产生质疑。需要重点回归安装脚本在多发行版/多 Python 版本下的兼容性。

- **MCP 可靠性是重度用户的红线（#88661）**：用户描述单个工具超时导致“所有工具消失，必须重启网关”，这种级联故障对生产环境的杀伤力极大。类似反馈也出现在 #91654（多 Profile MCP 注册表冲突）中。

- **缓存失效导致成本飙升（#91830）**：>10M token 会话丢失 100% prompt-cache 命中，意味着大项目每小时可能多烧数十美元。用户将问题定位到 `_proactive_prune_rearm_tokens` 机制重写消息体，该问题被标记为重复，但用户反馈仍认为需要尽快修复。

- **桌面端细节仍是高频不满点**：包括 markdown 预览横向滚动（#70451）、Linux 桌面菜单启动失败（#88004）、Bot 模式审批卡片无法提交（#91706）、Bot 初始开场白硬编码英文且伪造成用户消息（#91827）。说明桌面端在“完成度”上还有不少距离。

- **远程/多 Profile 场景是当前压力最大的使用形态**：#89346、#91633、#91818 共同描绘出多 Profile、多用户、远程网关下的会话隔离与路由问题，用户期待核心团队给出系统性方案。

---

## 8. 待处理积压

### 长期未响应的 PR（超过 1 个月未合并）
- **[#40726] fix(migration): warn on cron scanner and workflow cleanup tripwires**（2026-06-06 提交，P3）🔗 [PR #40726](https://github.com/NousResearch/hermes-agent/pull/40726)
  增强 OpenClaw → Hermes 迁移器的告警预检，防止迁移后 cron 静默失败。长期未合并，可能影响迁移用户的稳定性。
- **[#45458] fix(bedrock): honor resolve_bedrock_region() on runtime init paths**（2026-06-13 提交，P2）🔗 [PR #45458](https://github.com/NousResearch/hermes-agent/pull/45458)
  Bedrock 运行时初始化路径硬编码 `us-east-1` 的问题，影响非默认区域的 Bedrock 用户。
- **[#52344] Daytona: set auto-archive interval on sandbox create (quota safety)**（2026-06-25 提交，P2）🔗 [PR #52344](https://github.com/NousResearch/hermes-agent/pull/52344)
  通过引用上游 commit 为 Daytona sandbox 增加自动归档，避免磁盘配额耗尽。
- **[#74837] feat(update): CLI release track infrastructure**（2026-07-30 提交，P3）🔗 [PR #74837](https://github.com/NousResearch/hermes-agent/pull/74837)
  增加 `hermes update --release` 支持固定官方 release 而不是 tracking main。这与今日 v0.20.5 发布关联紧密，建议尽快审查合并。

### 长期未关闭的 Issue
- **[#43054] gmail get returns only top-level MIME part**（2026-06-09 创建，P3）🔗 [Issue #43054](https://github.com/NousResearch/hermes-agent/issues/43054)
  Google Workspace 技能中嵌套/转发邮件正文丢失的问题，持续 2 个多月未解决，影响邮件处理类工作流。
- **[#48190] Session ↔ Workspace binding**（2026-06-18 创建，P3，评论 4）🔗 [Issue #48190](https://github.com/NousResearch/hermes-agent/issues/48190)
  会话工作区绑定的功能请求已获社区持续关注，但尚未纳入明确路线图。
- **[#63211] Model picker hides custom base_url models**（2026-07-12 创建，P2）🔗 [Issue #63211](https://github.com/NousResearch/hermes-agent/issues/63211)
  自定义 base_url 模型在 picker 中不可见，需手动刷新；对本地模型用户是日常切肤之痛。

---

> **健康度总评**：近期发布节奏正常（323 PR 已入 v0.20.5），今日新提交的修复 PR 质量较高（安全扫描、codex 守卫、TUI 修复等），但**审查合并速度与提交速度存在显著剪刀差**（49/50 待合并）。存在 2 个 P0 稳定性回归尚未有修复 PR，建议优先驱动 #89886 与 #91830 对应修复合入。长期未合并的 Bedrock、CLI release track 等 PR 也建议在本周内排期处理，以维持社区贡献者的信任。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

## PicoClaw 项目动态日报 — 2026-08-22

### 1. 今日速览

过去 24 小时项目保持中等维护活跃度：无新版本发布，新增 1 个 Issue，合并/关闭 4 个 PR。合并的 PR 来自 WebFetchTool 文本提取增强、AGENTS.md 文档优化、Anthropic 原生 API 协议支持以及 skills CLI 重构，整体呈现「清理积压 PR + 持续推进 Agent 外围能力」的态势。唯一的新 Issue 提出了一种「turn 结束后再处理新消息」的队列式 steering 模式，涉及对话控制流的交互设计，值得关注。

---

### 2. 版本发布

无新版本发布。

---

### 3. 项目进展

今日共 4 个 PR 被合并/关闭，覆盖工具层、协议兼容层、CLI 与文档四个方向，项目能力边界得到实质性扩展。

- **[PR #647] Improve WebFetchTool text extraction with HTML entity decoding and structure preservation**  
  链接：https://github.com/sipeed/picoclaw/pull/647  
  WebFetchTool 的文本提取质量获得显著提升：新增 HTML 实体解码（`&amp;`、`&lt;` 等）以及块级元素自动换行支持，使提取结果更接近用户实际阅读体验。该改进直接影响依赖网页抓取的 agent 任务（如资料检索、摘要生成），是工具链底层能力的一次夯实。

- **[PR #1182] feat: add agents.md**  
  链接：https://github.com/sipeed/picoclaw/pull/1182  
  对 `AGENTS.md` 进行原则化重构，明确其为「原则优先」指南而非刚性检查清单，并将 Go 版本以 `go.mod` 为准。这对 AI 代理/贡献者的仓库上手体验是直接的改善，能降低低质量贡献的沟通成本。

- **[PR #1158] feat: add anthropic-messages protocol for native Anthropic API format**  
  链接：https://github.com/sipeed/picoclaw/pull/1158  
  新增 `anthropic-messages` 协议前缀，使用户可连接仅支持 Anthropic 原生 `/v1/messages` 端点（而不兼容 OpenAI 风格）的 API 服务，解决了 Issue #269 中长期存在的兼容性阻塞。这扩大了 PicoClaw 对不同代理服务提供商的适应性。

- **[PR #714] skills: install/reinstall CLI and refactor into skillsCmd**  
  链接：https://github.com/sipeed/picoclaw/pull/714  
  skills 子命令行完成重构：支持 `repo@branch` 和可选子路径安装、新增 `reinstall` 强制覆盖子命令、安装已存在技能时给出明确错误提示，生产安装改用 GitHub Trees API 拉取完整目录。技能安装流程从「能用」迈向「可维护」。

---

### 4. 社区热点

今日社区讨论热度较低，唯一新增 Issue 暂无评论与点赞，尚未形成讨论；但 PR #1158 对应 Issue #269 的合并，折射出社区对「原生 Anthropic API 兼容」的长期诉求，属于被反复提及的痛点。

- **[Issue #3342] [Feature] Opt-in "after-turn" steering mode: queue busy-session messages instead of interrupting the running turn**  
  链接：https://github.com/sipeed/picoclaw/issues/3342  
  该 Issue 提出一种新的可选 steering 行为模式。当前机制将 busy 状态下收到的新消息视为「中途修正」，导致当前轮次剩余 tool calls 被跳过；提议允许用户选择「排队」策略，在当前 turn 完成后再处理新消息。

---

### 5. Bug 与稳定性

今日无崩溃、回归或明确 Bug 报告，项目本阶段的稳定性较好。

值得关注的是 Issue #3342 中描述的现状行为——「任务进行中用户新消息会中断剩余工具调用，且提示 `Skipped due to queued user message.`」——这属于交互行为缺陷而非程序错误，但在真实多步任务场景下可能造成工作流突然中断，带来任务完成的可靠性风险。严重程度：中。目前无对应 fix PR，需要产品/设计层面的决策。

另外，PR #647（WebFetchTool 实体解码与结构保留）虽为增强性改动，但也间接修复了网页内容因 HTML 实体未解码导致的文本乱码/粘连类稳定问题。

---

### 6. 功能请求与路线图信号

新功能请求集中在「对话控制流」与「外部系统兼容性」两个维度。

- **[Issue #3342] Queue-based steering mode（after-turn）**  
  链接：https://github.com/sipeed/picoclaw/issues/3342  
  用户希望为 busy session 场景引入消息排队策略，而非默认中断。若被采纳，将影响 agent 多轮交互的核心调度逻辑，属于路线图级别的信号。

- **Anthropic 原生协议支持（PR #1158）**  
  链接：https://github.com/sipeed/picoclaw/pull/1158  
  已在今日合并，证明项目对多协议兼容的战略方向是重视且执行顺畅的。未来可能继续扩展更多 provider 专有协议。

- **skills 安装机制增强（PR #714）**  
  链接：https://github.com/sipeed/picoclaw/pull/714  
  repo@branch、子路径、重装等能力补齐后，社区贡献 skill 的外部流程将更顺畅，可预期后续会出现更多社区技能包。

---

### 7. 用户反馈摘要

今日仅有 1 个新 Issue，互动评论较少，反馈信息主要蕴含于 Issue #3342 的场景描述中：

- **真实使用痛点**：用户使用 agent 执行第一项任务时，如果继续发送第二条消息，当前系统会直接判定为 mid-task 修正，跳过后继工具调用。这种“打断式”交互在多步任务场景中会造成已进行工作的丢失或上下文断裂。
- **期望行为**：用户希望有选项将新消息放入队列，等当前 turn 结束后再注入，以保持任务连续性。
- **表达方式**：用户明确注明这是 `Opt-in` 功能，说明其理解默认行为可能仍有适用场景，但对可选性有强需求。这暗示部分用户已在深度使用长链路 agent 任务，而非仅停留在单轮问答。

---

### 8. 待处理积压

从现有数据看，无明显长期未响应的历史 Issue/PR。但有两个值得维护者留意的信号：

- **[Issue #3342]** 尚未有维护者回应，且该请求涉及核心交互设计决策，建议尽快给予方向性答复（纳入 roadmap / 明确拒绝 / 征询更多反馈）。  
  链接：https://github.com/sipeed/picoclaw/issues/3342

- **PR 从创建到合并周期偏长**：今日合并的 4 个 PR（#647、#714、#1158、#1182）分别创建于 2026-02-22 至 2026-03-06，均耗时约 5-6 个月才完成合并。虽然最终落地是好事，但较长的审查周期可能降低外部贡献者的参与热情，或导致 PR 与主线代码的冲突成本上升。建议维护者评估能否缩短外部 PR 的响应与合并周期。

---

**总结**：PicoClaw 在核心工具能力、插件协议兼容性上持续推进，今日合并的 4 个 PR 质量较高，项目健康度良好。唯一的互动信号（#3342）指向更精细的对话控制流设计，这可能是下一阶段的重要路线图议题。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-08-22

> 数据来源：GitHub（nanocoai/nanoclaw），统计周期：过去 24 小时（2026-08-21 → 2026-08-22）


## 1. 今日速览

过去 24 小时 NanoClaw 处于**高度活跃的开发状态**：PR 更新 25 条（待合并 14 条、已合并/关闭 11 条），提交密度集中在核心团队，覆盖渠道集成（Telegram / Dial / Mattermost / Matrix / WhatsApp）、CI 基础设施、SDK 契约设计等方向。Issue 侧相对平静，仅新增 1 条，但指出的 `send_card` 文档与实现不一致问题具有一定代表性，值得跟踪。无新版本发布，也没有破坏性变更进入主分支。整体项目健康度良好：修复效率高、功能推进快，惟 Issue 侧的社区反馈声量偏小，需关注外部开发者的实际使用体验。


## 2. 版本发布

过去 24 小时无新版本（Release）发布。但多项 PR 已合并进主分支，预计将在下一版本中体现，详见下文“项目进展”。


## 3. 项目进展

今日共合并/关闭 11 条 PR，以下按主题归纳对项目主线的推进：

**渠道集成**
- **[已合并] Mattermost 渠道集成 (#3202)** — 新增 Mattermost 作为 Chat SDK 通道，沿用现有 `slack.ts` 模式，关闭长期 Issue #1379。这是 NanoClaw 渠道矩阵的又一次扩展。
  https://github.com/nanocoai/nanoclaw/pull/3202
- **[已合并] Dial 频道接入设置向导 (#3050)** — 将 Dial 加入 channel picker，并配套 wizard/skills 与 `runChannelSkill` 模型，使 Dial 成为正式支持的一等渠道。
  https://github.com/nanocoai/nanoclaw/pull/3050
- **[已合并] fix(whatsapp-cloud): 保持与 main 分支兼容 (#3401)** — 修复 add-whatsapp-cloud skill 依赖 channels 独有 registry helper 的问题，确保 skill 在 main 分支组合时可用。
  https://github.com/nanocoai/nanoclaw/pull/3401

**稳定性与兼容性修复**
- **[已合并] fix(matrix): 使用可刷新的 ESM patch (#3403)** — 修复 Matrix 适配器基于 extensionless ESM import 在 Node 22 下失败的问题，改为提交 pnpm patch 以便重建时自动应用。
  https://github.com/nanocoai/nanoclaw/pull/3403
- **[已合并] fix(providers): 接受 provider 文件事件 (#3402)** — 兼容 branch-backed provider 已发出的事件，无运行时/投递行为变化。
  https://github.com/nanocoai/nanoclaw/pull/3402
- **[已合并] fix(add-dial-number): 改用 nc directives (#3433)** — 将 Dial 技能从 prose shell blocks + 原始 fetch 迁移至 nc directives，使其被 registry 正确发现与管理。
  https://github.com/nanocoai/nanoclaw/pull/3433

**CI 与工程基础设施**
- **[已合并] [main] ci: 测试 registry-backed skills (#3424)** — 建立对“从 registry 拉取的 add-* 技能”的自动化测试流程（发现 → 打快照 → 构建 → 测试）。
  https://github.com/nanocoai/nanoclaw/pull/3424
- **[已合并] fix: 恢复 stable CI required check (#3430)** — 修复 Node 22/24 矩阵将检查项改为 `ci (22)` / `ci (24)`、导致 required `ci` 永远挂起的规则问题。
  https://github.com/nanocoai/nanoclaw/pull/3430
- **[已合并] chore(container): 升级 claude-code 至 2.1.238 与 agent SDK 至 0.3.238 (#3439)** — 常规依赖更新，保持容器与上游同步。
  https://github.com/nanocoai/nanoclaw/pull/3439

**架构与开发者工具**
- **[已合并] feat(drivers): 以描述性方式固定 attach 接口 (#3429)** — 引入 `SessionExecSpec { bin, argsTty, argsPlain }`，由 driver 描述其 exec 行为而不触碰运行时细节，为交互式工具 attach 终端提供稳定契约。
  https://github.com/nanocoai/nanoclaw/pull/3429

**小结**：今日主线是“渠道扩展 + CI 加固 + 开发者契约设计”。Mattermost、Dial 两个渠道实现落地，Matrix/WhatsApp 渠道完成兼容性修复；CI 对 registry-backed 技能建立了质量护栏；`SessionExecSpec` 为未来交互式工具（终端 attach）铺平了道路。整体看，项目既在横向扩渠道，也在纵向加固工程体系。


## 4. 社区热点

今日唯一新增 Issue 是 #3426，也是目前最值得关注的社区信号：

- **Issue #3426（开放）** *「send_card docs promise callback buttons that the bridge drops since #2265; agents blame the platform」* — 作者 glifocat 指出 `send_card` 文档承诺支持 `actions` 按钮，但 bridge 会丢弃所有不带 `url` 的 action；agent 只能读到唯一的提示 `fallbackText`（“仅供不支持卡片的平台使用”），于是错误地告诉用户“该平台无法渲染按钮”。这个反馈触及**文档/实现一致性**与 **LLM 工具生态可信度**双重问题。
  https://github.com/nanocoai/nanoclaw/issues/3426

在 PR 侧，虽然列表中评论数不可见，但从提交密度看，**amit-shafnir 贡献了 8 条 PR（#3396 / #3428 / #3438 / #3437 / #3435 / #3431 / #3436 / #3434）**，是今日最活跃的贡献者，集中在 Telegram 设置流程和模板化 agent 创建两条线。社区热点本质上是**“让多渠道配置更可操作、让 agent 创建更数据驱动”**的需求爆发。


## 5. Bug 与稳定性

按严重程度排序：

**〔中高〕send_card 按钮被 bridge 丢弃，agent 误判平台能力**
- Issue #3426（开放，无评论，无 fix PR）：`send_card` 文档承诺支持 actions/buttons，但 bridge 会丢弃无 `url` 的 action（自 #2265 引入回归）。agent 依据 `fallbackText` 误将问题归因于平台不支持，导致用户被误导。影响面涉及所有依赖卡片按钮能力的 agent 场景，且与文档直接冲突，建议优先定位 #2265 的变更并补充回归测试。
  https://github.com/nanocoai/nanoclaw/issues/3426

**〔中〕轮询适配器不启动 webhook 服务器**
- PR #3434（开放）：amit-shafnir 提交修复 `fix(chat-sdk): polling adapters do not open the webhook server`。对于使用轮询模式的渠道适配器，webhook server 不应被打开，当前实现可能造成资源占用或端口冲突。已有修复 PR，待合并。
  https://github.com/nanocoai/nanoclaw/pull/3434

**〔低〕Telegram 配对卡片提示 6 位数字**
- PR #3431（开放）：`fix(telegram-setup): pairing card says 6 digits` — 配对卡片文案与实际位数不符，属低风险显示错误，已有修复 PR。
  https://github.com/nanocoai/nanoclaw/pull/3431

**〔已修复〕**
- #3403 Matrix ESM 兼容性（Node 22 下适配器构建失败）✅ 已合并
- #3402 Provider 文件事件未接收 ✅ 已合并
- #3401 WhatsApp Cloud 与 main 分支组合失败的测试依赖 ✅ 已合并


## 6. 功能请求与路线图信号

从今日 PR 看，以下功能大概率进入下一版本：

**模板化 agents（数据驱动创建）**
- PR #3396（开放）*feat: create agents from templates in chat* — `create_agent` 工具增加可选 `template` 引用，并新增只读命令 `ncl templates list` 以浏览本地模板目录与公开 registry。
  https://github.com/nanocoai/nanoclaw/pull/3396
- PR #3428（开放）*feat(slack-agent-flow): carry the template ref through Slack creation* — 将 template 引用端到端贯穿 Slack 频道创建流程，支持聊天场景下用模板建 agent。注明取代 #3397（该 PR 因导入顺序问题被 revert 后重新提交）。
  https://github.com/nanocoai/nanoclaw/pull/3428

**Telegram 多实例支持**
- PR #3436（开放）*feat(telegram): named bot instances via TELEGRAM_INSTANCES + instance-bound pairing* — 引入 `TELEGRAM_INSTANCES` 环境变量，支持一个 NanoClaw 实例管理多个具名 Telegram bot，配对与接入都在实例边界内完成。
  https://github.com/nanocoai/nanoclaw/pull/3436
- PR #3438 / #3435 / #3437（均开放）— 设置向导“添加另一个 Telegram bot”、适配器实例贯穿 pairing/init-first-agent/CLI welcome，以及配套文档。说明 Telegram 多实例不是孤立的 hack，而是整体设置体验的正式能力。
  https://github.com/nanocoai/nanoclaw/pull/3438
  https://github.com/nanocoai/nanoclaw/pull/3435
  https://github.com/nanocoai/nanoclaw/pull/3437

**新渠道支持**
- Mattermost（#3202 已合并）、Dial（#3050 已合并 + #3432 后续改进）已进入主线。Dial 的 post-merge 跟进（凭据重跑、步骤标题、registry CI）在 #3432 中体现，说明新渠道仍在被快速打磨：
  https://github.com/nanocoai/nanoclaw/pull/3432

**预测**：Telegram 多实例 + 聊天内模板创建 agent 是下一版本最有潜力的两个 feature 集，分别满足“运营端多机器人口”与“用户端低门槛创建 agent”两个真实诉求。


## 7. 用户反馈摘要

今日可提炼的用户反馈主要来自 Issue #3426（唯一新增 Issue）：

- **真实痛点**：开发者/agent 按照 `send_card` 文档构造带按钮的交互卡片，但按钮被底层 bridge 静默丢弃；agent 只能根据落回文本推断原因，最终把锅甩给平台。用户最直接的不满在于“文档与实现不一致”，且错误提示具有误导性（`fallbackText` 暗示平台不支持卡片，而非按钮被 bridge 剥离）。
- **使用场景**：以 LLM agent 为载体在 IM/聊天平台发送富交互卡片，属于较深度的 Chat SDK 使用方式。
- **满意/不满意**：对于文档承诺的功能体验不满意；间接反映出 `fallbackText` 语义设计在回归发生时缺少兜底提示。
- **诉求**：要么恢复按钮透传能力（修复 #2265 引入的回归），要么明确文档并让 agent 可获得真实失败原因（而非依赖 fallbackText 猜测）。

由于 Issue 尚无评论，暂无从获取更多用户声音；但 glifocat 同时也在提交 Dial 相关 PR（#3432），推测其身份为较有经验的集成者/核心贡献者，该反馈的技术可信度较高。


## 8. 待处理积压

以下条目值得维护者关注：

- **PR #3287（开放）** *Fix: strip agent-group suffix from inbound platform message id* — 作者 wakqasahmed，2026-08-17 创建，更新于 2026-08-21，尚未合并。修复 `getMessageIdBySeq()` 返回的 `messages_in.id` 并非真实 platform message ID 的问题（Fixes #3153）。该 PR 已存在 5 天且属于消息 ID 正确性的核心修复，建议维护者安排 review。
  https://github.com/nanocoai/nanoclaw/pull/3287

- **Issue #3426（新开，无响应）** — 虽然为新增 Issue，但作为当前唯一的开放缺陷，且涉及文档契约与用户误导，建议尽快标记 triage 并关联 #2265 的 regression 调查。
  https://github.com/nanocoai/nanoclaw/issues/3426

- **流程提醒** — PR #3428 的说明中提到 #3397 “超出声明顺序先行合并、后又被 revert”，提示当前存在分支合入顺序依赖的小摩擦。虽然已在 #3428 中纠正，但建议维护者关注多 PR 并行时的依赖顺序策略，避免未来重复 revert。
  https://github.com/nanocoai/nanoclaw/pull/3428


*本日报数据完全基于 GitHub 公开信息生成，统计时间为 2026-08-22。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 2026-08-22

## 1. 今日速览

过去 24 小时，NullClaw 项目整体活跃度较低：无新 Issue 开启或关闭，也无新版本发布。唯一动态是 1 个新的 Pull Request（#990），提议将 Eden AI 添加为 OpenAI 兼容网关提供商，延续了近期对第三方网关供应商的支持趋势。目前项目处于平稳推进阶段，新增功能集中在扩展兼容性生态，而非核心逻辑变更。维护者需要关注该 PR 的审查与合并进度。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

- **PR #990：添加 Eden AI 作为 OpenAI 兼容网关**  
  链接：https://github.com/nullclaw/nullclaw/pull/990  
  由 MVS-source 于 2026-08-21 创建，目前处于待合并状态。该 PR 遵循 #922（NEAR AI Cloud 和 Atlas Cloud）的模式，将 Eden AI 注册为 `OpenAiCompatibleProvider` 的又一个网关服务，无需新增 Provider 实现。Eden AI 允许通过一个 API Key 路由到多个上游供应商，且位于欧盟，这为 NullClaw 用户提供了更多区域化和聚合式的模型访问选项。  
  该 PR 的合并将进一步提升项目对 OpenAI 兼容接口的覆盖广度，增强多供应商接入的灵活性，但属于增量式功能扩展，不涉及核心架构变动。

## 4. 社区热点

- **PR #990（新开启，评论数暂无）**  
  链接：https://github.com/nullclaw/nullclaw/pull/990  
  这是今日唯一活跃的 PR，虽暂无评论和点赞，但其本身代表了社区对“更多网关/聚合服务”的关注。用户通过贡献此类 PR 表达了对低成本、多供应商、区域合规（尤其是欧盟）等需求的向往。维护者可通过该 PR 观察社区对第三方网关接入的接受度，以及是否需要对 `OpenAiCompatibleProvider` 进行更通用的扩展。

## 5. Bug 与稳定性

今日未报告新的 Bug、崩溃或回归问题。项目稳定性表面持平，但需注意近期持续新增网关供应商可能引入配置复杂度，建议在合并此类 PR 时补充相应测试。

## 6. 功能请求与路线图信号

当前没有用户提出新的 Issue 形式的功能请求。但 PR #990 本身是明确的功能贡献信号：社区希望 NullClaw 支持更多 OpenAI 兼容的聚合网关，尤其是具备数据驻留和合规优势的服务商（如欧盟地区的 Eden AI）。结合此前 #922 的合并，可以推断“扩展 OpenAI 兼容提供商列表”已成为一项常态化需求，下一版本很可能继续吸纳类似网关，并可能整理统一的网关文档。

## 7. 用户反馈摘要

暂无直接的 Issue 评论可供提炼。从 PR #990 的描述来看，贡献者关注的核心价值是**通过一个 API Key 访问多个上游供应商**以及**欧盟基于数据保护的优势**。可以间接推断，部分用户对减少管理多个供应商密钥的负担、以及满足特定地域数据合规要求有明确诉求。

## 8. 待处理积压

暂无被长期搁置的重要 Issue 或 PR 记录（由于数据限制，无法追踪今日之前的历史状态）。建议维护者对 PR #990 及时进行 review，并考虑将其与 #922 相关改动合并测试，避免类似网关 PR 堆积。同时留意社区是否会对该 PR 提出个性化配置、错误处理或文档补充的后续请求。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

## IronClaw 项目动态日报 — 2026-08-22

---

### 1. 今日速览

过去 24 小时 IronClaw 项目整体保持高强度迭代节奏：**13 条 Issues 更新、35 条 PR 更新、17 条 PR 合并/关闭**，无新版本发布。核心主线集中在 **CI 基础设施重构**（T1–T4 四个 track 同步推进）与 **通知中心/用户收件箱的产品化落地** 两条战线上，同时 WebUI 在布局与反馈组件层面完成了一轮共享化重构。Bug 修复侧以 Telegram 连接流程、Clippy 1.98 回归为主，均已关闭并附带修复 PR。整体项目健康度良好：合并/关闭比例约 49%，待合并 PR 中有多个长线 XL 级功能（存储层、沙箱、设计系统）持续滚动，无阻塞性风险信号。

---

### 2. 版本发布

无新版本 Release。

---

### 3. 项目进展

今日 17 条 PR 被合并/关闭，多条已关闭 PR 同时关联既定 Issue 收口。按主题归纳如下：

- **CI 与构建修复**
  - **#7805** `fix(ci): forward-port the clippy 1.98 lint fixes to 1.3`（合并）— 修复 `release/2026-08-17` 分支上所有 PR 因 `chunks_exact` 等 lint 失败的回归，解除 1.3 分支的 CI 阻塞。
  - **#7804** `fix(workspace): honor IRONCLAW_REBORN_WORKSPACE_ROOT on 1.3`（合并）— 将 workspace-root 覆盖能力前向移植至 1.3 分支，补上此前 release 分支间的功能缺口。
  - **#7797** `docs(guidance): repo-wide agent-guidance audit`（合并）— 仓库级 agent 指导文档治理，通过 13 个并行审计器裁剪约 21.5k 行漂移内容，统一到 AGENTS.md 约定。

- **沙箱安全**
  - **#7806 / #7807** `feat(sandbox): mediate GitHub CLI credentials`（两条均关闭）— 为 `gh` CLI 增加凭据中介：凭据仅以一次性、调用级 material 暴露，替换仅发生在受管 egress 路径内，提升沙箱外泄防护。

- **Telegram 连接**
  - **#7766** `fix(telegram): separate bot pairing from personal device linking`（合并）— 将 workspace-bot 配对与个人设备绑定逻辑拆开，要求用户在 WebUI 中先显式选择连接模式。
  - **#7803** `fix(telegram): keep paired channels ready and collapse reply drafts`（合并）— 保留配对 bot 在缺少个人凭据时的活性，并在回复草稿层做收敛。

- **通知与收件箱**
  - **#7699** `feat(notifications): publish actionable run gates`（合并）— 将审批、认证、阻塞运行事件写入持久化用户收件箱，使用稳定 run/gate ID 去重，并在恢复/终态时解析旧通知。
  - **#7796** `fix(sandbox): preserve failed Railway audit appends`（合并）— 修复 Railway 代理审计追加失败时静默丢失的问题，改为 fail-closed 并保留现场供重试。

- **WebUI 重构**
  - **#7794 / #7795**（两

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-08-22

## 1. 今日速览

过去 24 小时 LobsterAI 保持活跃的开发节奏：共更新 2 条 Issue（全部为关闭操作）、13 条 PR（12 条合并/关闭，1 条待合并），无新版本发布。核心事件是 `release/2026.8.21` 分支合入 main，完成 DSH 运行时升级至 0.1.1-rc.1、Windows 集成可靠性改进及隐私友好的使用分析落地；同时资料库（library）模块的多项交互优化合并。值得注意的隐患是，一批 4 月创建的 [stale] PR/Issue 今日被集中关闭，其中包含 Windows 网关偶发重启等真实 Bug，相关修复是否真正落地存疑，详见「待处理积压」。整体判断：项目处于正常迭代窗口期，但历史积压清理的质量需跟进核实。

## 2. 版本发布

今日无新版本 Release。

> 备注：PR [#2519](https://github.com/netease-youdao/LobsterAI/pull/2519) 已将 `release/2026.8.21` 合入 main，包含 DSH 0.1.1-rc.1 运行时升级、Windows 集成可靠性改进及使用分析功能，预计会在下一正式版本中体现。

## 3. 项目进展

今日合并/关闭的 12 条 PR 集中在三大方向：

**3.1 release/2026.8.21 合入 main（[#2519](https://github.com/netease-youdao/LobsterAI/pull/2519)）**
- 升级实验性 DeepSeek Harness（DSH）运行时至 0.1.1-rc.1（[#2516](https://github.com/netease-youdao/LobsterAI/pull/2516)）
- 新增 DSH 启用开关与工作台打开行为的 usage analytics（[#2515](https://github.com/netease-youdao/LobsterAI/pull/2515)）
- 将分析事件上报从主进程重构至渲染进程侧 service（[#2518](https://github.com/netease-youdao/LobsterAI/pull/2518)），实现 fire-and-forget、不阻塞 IPC 调用方，并跳过重复日志

**3.2 资料库（library）功能打磨**
- [#2517](https://github.com/netease-youdao/LobsterAI/pull/2517) 完善文件分享与收藏交互：分享打包保留 Unicode 文件名、仅替换不安全字符；兼容历史文件名并优先展示原始标题；收藏状态即时更新、筛选移除与失败回滚；统一订阅/发布会话额度弹窗样式
- [#2514](https://github.com/netease-youdao/LobsterAI/pull/2514) 优化本地产物预览与操作体验：调整弹窗尺寸与溢出约束、移除删除入口、区分空状态与筛选无结果状态、搜索框一键清空、修复额度弹窗重复占位符替换问题
- [#2513](https://github.com/netease-youdao/LobsterAI/pull/2513) 同步合入 library 功能分支

**3.3 历史 [stale] PR 清理（创建于 4 月，今日关闭）**
- [#1218](https://github.com/netease-youdao/LobsterAI/pull/1218) 重构定时任务列表排序规则，解决 UUID v4 随机排序导致新建任务位置不可预知的问题
- [#1219](https://github.com/netease-youdao/LobsterAI/pull/1219) 消除 cowork 会话列表/详情页无效重渲染（React.memo、合并 useSelector）
- [#1220](https://github.com/netease-youdao/LobsterAI/pull/1220) 消除 `recentChats()`/`conversationSearch()` 的 N+1 查询
- [#1224](https://github.com/netease-youdao/LobsterAI/pull/1224) 修复 Agent 弹窗 i18n 硬编码、Escape 键关闭及删除防重复点击
- [#1215](https://github.com/netease-youdao/LobsterAI/pull/1215) 修复 IM 平台配置保存后聊天处理器未重建的问题

**3.4 待合并（1 条）**
- [#1550](https://github.com/netease-youdao/LobsterAI/pull/1550) `fix(scheduledTask)`：投递模式为「不通知」时去除发送给网关的 channel/to 字段，修复触发运行时网关报错

## 4. 社区热点

今日无高热度讨论，2 条 Issue 各有 2 条评论，均为关闭的 stale 条目：

- [Issue #1217](https://github.com/netease-youdao/LobsterAI/issues/1217)（已关闭）— Windows 10 用户反馈网关偶发重启（频率 3-5 次/天），附完整日志。该问题自 4 月 1 日提出，4 个多月无人认领后以 stale 关闭，反映客户端稳定性类问题响应不足
- [Issue #1223](https://github.com/netease-youdao/LobsterAI/issues/1223)（已关闭）— 集中报告三个 UX/i18n 问题：`CoworkPromptInput.tsx` 第 23 行硬编码 `'输入文件'` 导致英文用户提示词混入中文、Agent 弹窗缺少 Escape 键关闭、删除按钮缺防重复点击保护

社区诉求集中在：Windows 客户端稳定性、i18n 国际化质量、定时任务多渠道行为一致性（PR #1550 受关注）。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题描述 | 状态 |
|--------|----------|------|
| 🔴 高 | [#1217](https://github.com/netease-youdao/LobsterAI/issues/1217) 网关偶发重启（一天 3-5 次），影响正常使用 | 已 stale 关闭，**无 fix PR** |
| 🟠 中 | [#1550](https://github.com/netease-youdao/LobsterAI/pull/1550) 定时任务「不通知」模式触发时网关报 `Channel is required when multiple channels are configured` | 已有 fix PR，**待合并 4.5 个月** |
| 🟠 中 | [#1215](https://github.com/netease-youdao/LobsterAI/pull/1215) IM 平台配置保存后聊天处理器未重建，systemPrompt/skill 配置不生效 | 已有 fix PR，但以 stale 关闭 |
| 🟡 低 | [#1223](https://github.com/netease-youdao/LobsterAI/issues/1223) i18n 硬编码 + 弹窗无 Escape 关闭 + 删除防重复点击缺失 | 对应 PR #1224 同样被 stale 关闭 |
| 🟡 低 | [#1218](https://github.com/netease-youdao/LobsterAI/pull/1218) 新建定时任务随机出现在列表中间位置 | 对应 PR 已 stale 关闭 |

⚠️ 风险提示：#1217 是直接影响真实 Windows 用户的高频稳定性 Bug，修复未落地即被关闭；#1215 与 #1224 等修复性质 PR 也均以 stale 收尾，需确认修复是否已通过其他渠道合入，避免「问题已关、Bug 未修」的情况。

## 6. 功能请求与路线图信号

- **隐私友好的使用分析（DSH）**：[#2515](https://github.com/netease-youdao/LobsterAI/pull/2515) 与 [#2518](https://github.com/netease-youdao/LobsterAI/pull/2518) 明确上报采用 fire-and-forget、错误不抛入 IPC 调用方，并将事件构建移到 renderer 侧。信号：项目开始加强产品数据度量，同时注重隐私设计
- **资料库体验精细化**：[#2514](https://github.com/netease-youdao/LobsterAI/pull/2514) 的搜索一键清空、空状态细分、Unicode 文件名兼容（#2517）显示本地产物管理 UX 是近期迭代重点
- **定时任务语义修正**：PR #1550 修正「不通知」投递模式的参数构造语义，若合并将提升多渠道任务创建路径的一致性，属路线图中的可靠性增强

## 7. 用户反馈摘要

- **Windows 稳定性焦虑**（[#1217](https://github.com/netease-youdao/LobsterAI/issues/1217)）：用户描述「偶发重启网关」「一天可能 3-5 次」，并主动提交带时间戳的日志包。真实场景中网关重启会中断进行中的 AI 任务，属高频高影响问题
- **i18n 体验割裂**（[#1223](https://github.com/netease-youdao/LobsterAI/issues/1223)）：英文系统用户发送附件时，AI 提示词中混入中文「输入文件」，直接污染发给模型的内容，用户感知强烈，且违反 `AGENTS.md` 的 "Never hardcoded" 约束
- **定时任务信任度**（[#1550](https://github.com/netease-youdao/LobsterAI/pull/1550)）：用户通过会话/IM 创建任务与 UI 手动创建行为不一致，「不通知」仅在触发执行时才暴露错误，排查成本高，说明多入口任务创建的语义需统一

## 8. 待处理积压

**🔴 高优先级**
- [PR #1550](https://github.com/netease-youdao/LobsterAI/pull/1550) — 定时任务「不通知」修复。2026-04-07 发起至今 4.5 个月无 review、无评论。有完整根因分析（手动创建 vs 会话创建路径构造 delivery 对象不同），影响真实用户，建议维护者优先处理

**🟠 中优先级**
- [Issue #1217](https://github.com/netease-youdao/LobsterAI/issues/1217) — Windows 网关偶发重启，今日被 stale 关闭。若已由其他渠道修复，建议补充说明；若未修复，建议重新开启并指派负责人，避免真实稳定性问题从追踪体系流失

**🟡 观察项**
- 今日集中关闭的 [#1215](https://github.com/netease-youdao/LobsterAI/pull/1215)、[#1218](https://github.com/netease-youdao/LobsterAI/pull/1218)、[#1219](https://github.com/netease-youdao/LobsterAI/pull/1219)、[#1220](https://github.com/netease-youdao/LobsterAI/pull/1220)、[#1224](https://github.com/netease-youdao/LobsterAI/pull/1224) 均为 4 月提交的修复/优化型 PR，今日以 stale 关闭。建议 PR 作者或维护者核实这些修复是否已被更新实现覆盖（如 [#2514](https://github.com/netease-youdao/LobsterAI/pull/2514) 恰好涉及搜索与预览，可能与 #1220 相关），避免修复成果丢失或重复劳动

---

*本日报基于 GitHub 公开数据生成，截至 2026-08-22。数据源：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-08-22

## 1. 今日速览

Moltis 项目在过去 24 小时内保持中等活跃度：新开 2 个 Issue，提交 8 个 PR（其中 1 个已合并）。值得关注的是，今日合入了 **WhatsApp Markdown 渲染修复**（#1220），同时多个领域（WhatsApp 文件持久化、浏览器隐身模式、Cron 投递、中文 i18n、沙箱安全）均处于待合并状态，显示项目正在为下一个版本做集中修复与增强。安全与稳定性方面，新增 1 个反映共享 Slack 频道中工具失效的 Bug 报告（#1224），另有一条由社区提交的 **heartbeat active_hours 无效果** 问题（#1223），已有配套 PR #1208 待合入。整体来看，项目维护活跃，社区贡献密度较高，但合并节奏略慢于提交节奏，存在轻微积压。

## 2. 版本发布

过去 24 小时内无新版本发布。

## 3. 项目进展

今日合并关闭 1 个 PR：

- **[#1220 [CLOSED] fix(whatsapp): render Markdown in outbound messages**](https://github.com/moltis-org/moltis/pull/1220) — 在 WhatsApp 出站消息发送前将模型生成的 Markdown 转换为 WhatsApp 原生格式（支持文本消息和媒体标题），同时在会话记录和 Web UI 中保留原始 Markdown。这一改动改善了 WhatsApp 渠道的可读性和用户体验，是一项具有明确用户可见收益的修复。

此外，以下 PR 已在今日更新并处于待合并状态，预计对项目下一版本影响较大：

- **#1228 fix(whatsapp): persist inbound files for local tools** — 完整支持 WhatsApp 入站文件持久化，本地工具可获得稳定 `local_path`，配合 #1220 共同完善 WhatsApp 渠道能力闭环。
- **#1227 fix(browser): enable Obscura stealth mode by default** — 默认开启浏览器隐身模式，同时提供配置开关。
- **#1226 fix(cron): deliver scheduled output to the originating chat** — 修复定时任务输出未回到来源会话的问题。
- **#1225 fix(i18n): update and improve zh-TW Traditional Chinese locale** — 繁体中文翻译的大规模修订与补齐。

## 4. 社区热点

今日大多数 Issue/PR 的评论数均为 0，讨论热度整体不高，但以下条目值得关注：

- **[#1223 [OPEN] heartbeat active_hours has no effect on a default config](https://github.com/moltis-org/moltis/issues/1223)** — 用户 `Lstarsky0` 在提交 PR #1208 的同时开启了该 Issue，指出 `ActiveHoursConfig` 默认配置（`start: "08:00"`, `end: "24:00"`）不会在任何时间点抑制执行，其根因是 `is_within_active_hours` 的函数实现先解析了 `end` 参数再处理特殊逻辑，导致 `end: "24:00"` 永远不生效。这是一个典型的 **"文档承诺与实现不一致"** 问题，社区用户既提交了问题也提交了修复（#1208），值得维护者优先审查合入。

- **[#1224 [OPEN] [bug] [Bug]: Tools stop working in shared Slack channels](https://github.com/moltis-org/moltis/issues/1224)** — 用户报告在共享 Slack 频道中所有工具调用失效，未提供详细复现上下文。由于这是新开 Issue 且无评论，目前诉求尚不明确，但"共享频道"这一场景在多租户 Slack 工作区中较为常见，若被更多用户复现可能升级为高优先级问题。

## 5. Bug 与稳定性

按严重程度排序：

| 严重程度 | Issue/PR | 描述 | 修复状态 |
|---------|----------|------|---------|
| 高（功能失效） | [#1224](https://github.com/moltis-org/moltis/issues/1224) | 共享 Slack 频道中工具完全失效 | 尚无对应 PR，需进一步调查 |
| 中（配置不生效） | [#1223](https://github.com/moltis-org/moltis/issues/1223) | `heartbeat.active_hours` 配置完全不生效（包括默认配置） | 已有 PR [#1208](https://github.com/moltis-org/moltis/pull/1208) 可直接关闭该 Issue，等待审查 |
| 中（平台兼容） | [#468 [OPEN]](https://github.com/moltis-org/moltis/pull/468) | Windows 下 Shell 钩子因 `sh -c` 不存在而失效，PR 提供 `cmd.exe /C` 替代方案 | 该 PR 已存在 5 个月仍未被合并，今日有更新但仍 Open，建议维护者今早决策 |

## 6. 功能请求与路线图信号

今日没有新的功能请求 Issue，但多个待合并 PR 隐含了明确的产品方向信号：

- **WhatsApp 渠道能力闭环**（#1228 + #1220）— 先解决 Markdown 渲染，再补齐文件持久化，说明 WhatsApp 集成正在从"可用"走向"好用"，下一版本大概率包含这两项改进。
- **浏览器隐身/反检测默认开启**（#1227）— 将 Obscura 的 `--stealth` 标志设为默认策略，同时保留配置项供运营者调整，表明隐私/反检测已从可选功能上升为默认安全基线。
- **Cron 投递链路修复**（#1226）— 让定时任务输出准确地回到发起会话（包括线程/主题路由），这是对"定时任务+群聊/渠道"场景的重要补全。
- **繁体中文 locale 大规模修订**（#1225）— 反映社区对 i18n 质量的关注正在提升，繁体中文用户群体活跃。

## 7. 用户反馈摘要

- **#1223 用户 `Lstarsky0`**：用户深入阅读了 `crates/cron/src/heartbeat.rs` 的源码并定位问题，指出 `is_within_active_hours` 函数虽然编写了、有文档也有单测，但整个 crate 中没有任何地方调用它。这反映出 **"有配置项但行为与文档不符"** 是当前 Cron 功能的主要用户痛点，也侧面说明该功能的测试覆盖存在盲区（只测了函数单元，未测调用链集成）。

- **#1224 用户 `affanshahid`**：问题描述不完整，但从标题可推断用户是在共享 Slack 频道中调用 Moltis 工具时遭遇失败。具体错误信息、日志和复现步骤尚缺失，需要维护者主动追问以定位根因。

## 8. 待处理积压

| 条目 | 年龄 | 状态 | 建议 |
|------|------|------|------|
| [#468 fix(plugins): use cmd.exe on Windows for shell hooks](https://github.com/moltis-org/moltis/pull/468) | 5 个月（2026-03-23 创建） | OPEN，今日有更新 | 这是 Windows 平台插件功能的兼容性修复，长期悬而未决。虽然提交时间较早、可能涉及较大的测试成本，但 Windows 用户持续受影响。建议维护者明确关闭理由（如不再维护此路径）或安排审查合入。 |
| [#1222 fix(web): validate sandbox image requests](https://github.com/moltis-org/moltis/pull/1222) | 2 天（2026-08-20 创建） | OPEN，测试部分已完成 | 涉及镜像引用与包名校验，是一个安全加固项。已完成 `cargo test` 与 `cargo fmt`，可以尽快进入 review 环节。 |
| [#1208 fix(cron): honor heartbeat active hours when the scheduler fires](https://github.com/moltis-org/moltis/pull/1208) | 5 天（2026-08-17 创建） | OPEN，今日有更新 | 可直接关闭 #1223，功能影响面明确，建议优先审查。 |

---

**日报总结**：Moltis 今日处于"多修复并行、等待合入"的状态，WhatsApp 与 Cron 是当前两条最重要的改进主线。健康度整体良好，唯一需要注意的信号是 PR 合并速度略慢于提交速度（今日 8 提交仅 1 合入），以及 #468 这类长期悬挂的 PR 对维护者注意力的持续占用。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-08-22

> 数据来源：github.com/agentscope-ai/CoPaw（QwenPaw） | 统计窗口：2026-08-21 至 2026-08-22

---

## 1. 今日速览

CoPaw（QwenPaw）项目过去 24 小时活跃度处于高位：41 条 Issue/PR 更新，其中 Issues 更新 34 条（新开/活跃 19，关闭 15），PR 更新 36 条（待合并 21，已合并/关闭 15），无正式版本发布。项目健康度整体良好：测试基建修复（#7205）、自托管 Hub 落地（#7112）、Console 长会话性能优化（#7176）是当日主要正向进展；版本号已提升至 v2.1.1b2（#7200），表明接近新一轮迭代。需要警惕的是，MCP 重连（#6524）、WebView2 崩溃（#6427）两个历史问题仍未关闭，且 v2.1.1-beta.1 引入了 `/compact` 回归（#7206）。

---

## 2. 版本发布

无新版本发布。今日合并了版本号提升 PR（#7200，v2.1.1b2），预计下一阶段将推出 v2.1.1 正式版。

---

## 3. 项目进展

今日合并/关闭的 4 个 PR 从测试基建、部署形态、控制台体验三个方向推进了项目：

- **[PR #7205] test(coverage): fix Windows integration coverage always reading 0** — 修复 Windows 集成测试覆盖率每晚恒为 0 的问题，并增加 fail-closed 守卫，防止空覆盖率数据静默上传。显著加固了 CI 可靠性。
  https://github.com/agentscope-ai/QwenPaw PR #7205

- **[PR #7112] feat(hub): add self-hosted multi-user Hub with local and Docker runtimes** — 引入 QwenPaw Hub 自托管多用户控制面，支持本地账户在隔离的 QwenPaw App 实例中运行。`qwenpaw app` 原有流程不变，部署形态扩展为可选的 hub 模式。
  https://github.com/agentscope-ai/QwenPaw PR #7112

- **[PR #7176] perf(console): keep long chat sessions responsive** — 消除流式更新时同步 Markdown 重解析与历史渲染阻塞，明显改善长对话期间的交互响应。
  https://github.com/agentscope-ai/QwenPaw PR #7176

- **[PR #7200] chore: bump the version to v2.1.1b2** — 版本号推进至 v2.1.1b2，为下一轮 beta/正式发布做准备。
  https://github.com/agentscope-ai/QwenPaw PR #7200

此外，多项功能 PR 正在并行推进：工具层事务化 patch 与持久 PTY 会话（#7113）、Creator 1.1.0 大型聚合更新（#7167）、会话级多项目目录（#6976）、DingTalk 群聊共享上下文（#7208）、Token 用量按 Agent 归因（#7207），项目功能储备充足。

---

## 4. 社区热点

### 最热 Issue：#6524 MCP 后端重启后客户端无法自动恢复（6 条评论）
远程 MCP Server 重启后，QwenPaw 仍复用旧的 `mcp-session-id`，导致工具列表查询失败，必须手动执行 `list mcp` 才能重新连接。这是当前社区最集中的诉求，反映 MCP 工具链在生产环境中的稳定性短板。
https://github.com/agentscope-ai/QwenPaw Issue #6524

### #6780 空闲后自动卡死（4 条评论，已关闭）
2.0.1 版在不使用时约几十分钟后自行卡死，只能强制结束进程重启。用户对此体验不满意，该问题今日已关闭。
https://github.com/agentscope-ai/QwenPaw Issue #6780

### #7016 工具调用 404（3 条评论）
流式会话中页面持续请求 `/offload` 接口，返回 `404 Tool call not found`，影响工具调用链路。
https://github.com/agentscope-ai/QwenPaw Issue #7016

### #7156 embedding health check 超时且超时值硬编码（3 条评论）
后端已预热情况下，启动时 embedding 健康检查仍超时（>5s），导致本次会话向量召回降级为 BM25-only；超时参数无配置项。
https://github.com/agentscope-ai/QwenPaw Issue #7156

**诉求分析**：社区热点集中在 MCP 连接健壮性、闲置稳定性、工具调用可靠性、Embedding 健康检查可配置性四大类，均为实际运行中的稳定性问题，而非功能缺失。

---

## 5. Bug 与稳定性

按严重程度排列：

### 严重（影响核心功能或桌面端体验）

- **[#6427] WebView2 渲染进程启动约 7 秒后崩溃（异常码 0x80000003）** — v2.0.0+post.4 桌面版确定性闪退，post.3 正常，疑似前端变更触发。创建于 07-24，至今无 fix PR，建议优先排查。
  https://github.com/agentscope-ai/QwenPaw Issue #6427

- **[#6430] 桌面版启动挂起约 85 秒** — 每次启动后台停滞，严重影响桌面端可用性。同样创建于 07-24，无关联 PR。
  https://github.com/agentscope-ai/QwenPaw Issue #6430

- **[#7206] v2.1.1-beta.1 手动 /compact 必现 pydantic ValidationError** — `compact_threshold_ratio == 0.9` 时（scroll 策略）稳定触发；v2.1.0 正常，已确认回归。截止今日无关联 fix PR。
  https://github.com/agentscope-ai/QwenPaw Issue #7206

- **[#6524] MCP 后端重启后客户端无法自动恢复** — 复用失效 session-id，需手动干预重连；无 PR，且评论最多。
  https://github.com/agentscope-ai/QwenPaw Issue #6524

### 中等（影响特定功能或部分用户）

- **[#7168] history.db 被 recall_history expand 撑爆至 7.6GB 且重复落库** — 已 CLOSED（今日关闭），但未见对应 fix PR，建议确认收敛方案。
  https://github.com/agentscope-ai/QwenPaw Issue #7168

- **[#6780] 空闲几十分钟后卡死** — 已 CLOSED，需确认修复版本。
  https://github.com/agentscope-ai/QwenPaw Issue #6780

- **[#7156] embedding health check 超时且 timeout 硬编码**（详见社区热点）

- **[#7016] 工具调用 404**（详见社区热点）

- **[#7210] 工具 config 全部启用但会话函数 schema 未注入** — 工具面暴露不一致，可能导致工具不可见/不可用。
  https://github.com/agentscope-ai/QwenPaw Issue #7210

- **[#7193] 记忆检索错乱，搜索到同一 agent 另一会话内容** — 在线网页版（v2.1），agent 暂停后续跑时出现行为异常。
  https://github.com/agentscope-ai/QwenPaw Issue #7193

### 轻度（边缘场景）

- **[#7136] send_file_to_user 非 ASCII 文件名为百分号编码乱码** — 影响中文文件名展示。
  https://github.com/agentscope-ai/QwenPaw Issue #7136

- **[#7199] daily_paper 在 PDF 含 surrogate 字符（U+D800–U+DFFF）时崩溃** — 整个 job 退出，剩余任务中断。
  https://github.com/agentscope-ai/QwenPaw Issue #7199

---

## 6. 功能请求与路线图信号

### 今日新增功能请求

- **[#7203] 希望可选择是否显示工具调用信息** — 用户在审核合同/研报场景下认为工具调用信息是视觉干扰，期望类似 hermes 的显示开关。
  https://github.com/agentscope-ai/QwenPaw Issue #7203

- **[#7196] 默认折叠推理过程** — 与 #7203 诉求一致，关注工作进程时不需要逐字展示推理过程，建议默认折叠，按需展开。
  https://github.com/agentscope-ai/QwenPaw Issue #7196

- **[#7198] 审批模式需要更智能** — 认为对临时产物/中间过程的审批是无意义打扰，非“关闭模式”下无法夜间无人值守运行。
  https://github.com/agentscope-ai/QwenPaw Issue #7198

- **[#7201] 按 provider 拆分 max_image/video/audio_bytes 上限** — 希望三个媒体类型独立限额并在高级设置中暴露。
  https://github.com/agentscope-ai/QwenPaw Issue #7201

- **[#7204] 如何增加自定义 tool** — 用户对工具扩展入口不清晰，文档/UX 有待完善。
  https://github.com/agentscope-ai/QwenPaw Issue #7204

- **[#7197] MCP 工具授权规则中选不到自定义频道** — 自定义频道插件启用后无法在授权规则中被引用。
  https://github.com/agentscope-ai/QwenPaw Issue #7197

### 已关闭的历史功能请求（可能已受理或已过时）

rescodexa 提出的三项 Windows 体验改进——多文件拖拽上传（#4855）、取消上传大小限制（#4854）、历史对话按最近时间排序（#4816）——均在今日关闭。其中 #4816 用户措辞强烈（“反人类设计”），建议关注是否已进入实现。

### 路线图信号

结合开放 PR 判断，v2.1.x 可能覆盖以下方向：

- **Creator 1.1.0**（#7167）：主流图像/视频生成供应商、Anthropic/Gemini 协议、对话门控视频调度、2GB 上传等。
- **工具层强化**（#7113）：事务化 apply_patch、受管 PTY 会话、有界后台输出捕获。
- **多项目/多会话能力**（#6976 会话级多项目目录、#7208 DingTalk 共享上下文、#7207 Token 按 Agent 归因）。
- **UI 可配置性**：#7203/#7196 需求明确、实现成本可控，有较大概率进入后续迭代。

---

## 7. 用户反馈摘要

- **MCP 连接可靠性**（#6524）：远程 MCP 重启后必须手动重连，工具链在服务端重启场景下不可用，是当前最集中的技术债。

- **桌面端稳定性**（#6427、#6430、#6780）：WebView2 闪退、启动挂起、空闲卡死，三类问题直接击穿桌面端用户信任。其中 #6780 已关闭但未明示修复方案。

- **审批流程设计**（#7198）：用户希望“夜里让 agent 干活儿”，但现行默认“自动模式”仍产生大量无意义审批，期望未对会话前已有文件操作时不触发审批。

- **历史对话排序**（#4816）：“没有一个像 qwenpaw 这么反人类设计的”——用户对比了 WorkBuddy、Trae、豆包、元宝等主流产品，要求按最近一次对话时间排序。

- **本地文件上传**（#4854）：用户认为 Windows 版不应有上传大小限制，“直接传路径给 agent，再大的文件都可以渐进式加载”。

- **记忆隔离**（#7193）：搜索记忆时检索到同一 agent 其他会话内容，导致“继续完成未完成任务”时执行了另一会话的任务，数据隔离问题需要重视。

- **检索降级**（#7156）：embedding 健康检查超时导致向量召回静默降级为 BM25-only，用户使用感知下降但日志提示不明确。

---

## 8. 待处理积压

以下重要项长期未关闭/未合并，建议维护者重点关注：

### 长期未关闭 Issue

- **[#6427] WebView2 崩溃**（创建 07-24，开放 29 天）— 桌面端确定性闪退，无 PR，优先级高。
  https://github.com/agentscope-ai/QwenPaw Issue #6427

- **[#6430] 启动挂起 ~85 秒**（创建 07-24，开放 29 天）— 无 PR，影响桌面端启动体验。
  https://github.com/agentscope-ai/QwenPaw Issue #6430

- **[#6524] MCP 重连失败**（创建 07-28，开放 25 天）— 社区评论最多，无 PR。
  https://github.com/agentscope-ai/QwenPaw Issue #6524

### 长期未合并 PR

- **[PR #5992] 按会话模型覆盖（per-session model overrides）**（创建 07-12，Under Review 41 天）— 功能实用但长期搁置，社区影响面较大。
  https://github.com/agentscope-ai/QwenPaw PR #5992

- **[PR #6515] Volcengine Agent Plan & MiMo V2.5 providers**（创建 07-28，Under Review）— 新增内置 provider 并刷新官方模型目录，已根据新架构重构。
  https://github.com/agentscope-ai/QwenPaw PR #6515

- **[PR #6399] reranker UI 配置面板**（创建 07-23，Under Review）— ReMe 记忆卡片缺少可视化 reranker 配置入口。
  https://github.com/agentscope-ai/QwenPaw PR #6399

- **[PR #6607] 全局热键悬浮输入窗口**（创建 07-31）— 实现 #6568 的桌面快捷输入诉求，待合并。
  https://github.com/agentscope-ai/QwenPaw PR #6607

---

**健康度小结**：项目整体活跃、迭代节奏快，测试基建持续补强，功能储备充足。但桌面端稳定性（#6427/#6430）与 MCP 连接可靠性（#6524）是当前两大积压风险，v2.1.1-beta 回归（#7206）提示需加强预发布验证。功能方向社区反馈集中于 UI 可配置性与审批智能化，建议在路线图中优先纳入。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-22

# 今日速览

ZeroClaw 过去 24 小时保持了极高的问题反馈与 PR 提交活跃度，Issue 更新 50 条且全部处于活跃状态，PR 更新同样达 50 条，但仅 2 条合并/关闭，余 48 条仍在等待审查，合并效率可能成为协作瓶颈。安全与运行时稳定性是目前社区最集中的关注方向：delegate 审批策略绕过（#10165）、SOP 引擎执行顺序错误（#10066）、Quickstart 栈溢出（#10230）以及工具结果截断的系列问题构成了当前主要的正确性威胁。与此同时，面向可用性的小而美改进（流式回复默认开启、macOS Option-Backspace、日志文本可复制等）持续涌入，反映出用户对日常体验的精细化诉求。整体项目处于高活跃度的“功能与修复双线并进”状态，但大量 PR 等待合并的情况值得维护者关注。

- **Issue 动态**：50 条活跃（0 关闭），其中 `priority:p0` 1 条，`priority:p1` 8 条
- **PR 动态**：50 条更新（2 条合并/关闭，48 条待合并），其中 `risk:high` 15 条
- **版本发布**：无新 Release


## 版本发布

过去 24 小时无新版本发布。需注意，当前积压的大量 `risk:high` PR（如 #10188、#10197、#10179 等）尚未合并，预计下一版本将包含一批重要的安全修复与运行时稳定性改进。

## 项目进展

过去 24 小时确认合并/关闭的 PR 为 2 条（具体条目未在数据中单独列出）。从长期趋势看，项目正在处理多个大型重构与安全加固的交叉推进，以下重点 PR 应持续关注：

- **#10233 — feat(sop): add a collision-checked atomic SOP rename flow**（`JordanTheJet`）：为 SOP 增加原子性重命名能力，防止“保存时改名”导致 SOP 目录分裂，是对 SOP 创作能力的重要补全。

- **#10188 — fix(runtime): enforce independent delegate approval policy**（`Audacity88`）：为独立 delegate 派生全新的审批管理器，并在无审批通道时直接拒绝需要操作员决策的工具，直指 #10165 的安全漏洞。

- **#10197 — fix(acp): persist interrupted turn progress**（`Audacity88`）：将 Code/ACP 回合的用户可见进度在流式发送前持久化，修复进程退出导致已展示内容丢失的 S0 数据丢失问题。

- **#10179 — fix(runtime): prevent node request replay**（`Audacity88`）：为节点请求签名引入带边界的原子重放攻击防护，加强节点间通信安全。

- **#10205 — feat(android): add native tools and standalone app**（`JordanTheJet`）：新增 5 个 Android 专用工具与独立 App，标志着 ZeroClaw 向移动端扩展迈出实质性一步，但需关注其 `risk:high` 的安全影响面。

- **#10191 — fix(channels): mark Google TTS API key header sensitive**（`Audacity88`）：修复 API 凭据可能在诊断日志中泄露的问题。

- **#9319 — refactor(runtime): seal the engine tool registry as ScopedToolRegistry**（`Nillth`）：将工具注册表密封为作用域安全实现，防止绕过共享作用域缝，已等待近一个月，提示社区正在推动此大型重构落地。

整体而言，项目在安全策略合规性、数据持久化可靠性和跨平台能力三个方向同时推进，移动端与安全治理是当前最明确的投入方向。

## 社区热点

今日讨论最活跃的 Issue 集中在安全策略与运行时行为两个主题：

- **[#10165 — [Bug]: independent delegate bypasses block_high_risk_commands on its own risk profile](https://github.com/zeroclaw-labs/zeroclaw/issues/10165)**（3 评论 | `priority:p1` | `risk:high` | `S0 data loss / security risk`）

  独立 delegate 即使自身配置了 `block_high_risk_commands = true`，仍可执行高危险命令（如 `rm`）。这一安全策略绕过问题获得了最多的关注，社区对“子代理权限边界”的担忧显而易见。已出现对应修复 PR #10188，体现出“反馈-修复”的快速闭环。

- **[#10074 — SECURITY.md documents a CI job that was removed in April](https://github.com/zeroclaw-labs/zeroclaw/issues/10074)**（3 评论 | `priority:p2` | `type:docs/ci`）

  文档与 CI 流程脱节的问题反映了用户对安全审计可信度的重视——安全文档中引用的 CI 任务已不存在，会直接影响外部安全审计者对项目的信任评估。

- **[#10066 — [Bug]: SOP engine promotes and runs later steps before recording a step's output-schema rejection](https://github.com/zeroclaw-labs/zeroclaw/issues/10066)**（3 评论 | `priority:p0` | `risk:high` | `S1 workflow blocked`）

  当某步骤的输出不符合声明 schema 时，SOP 引擎仍会先执行后续步骤，再记录拒绝。这不仅是逻辑错误，还可能导致无效状态被传播到后续步骤，带来不可预测的副作用。

- **[#10068 — [Bug]: Interactive agent session caps context at 32,000 tokens, ignoring max_context_tokens = 131072](https://github.com/zeroclaw-labs/zeroclaw/issues/10068)**（3 评论 | `priority:p2`）

  交互式会话被硬限制在 32k token，与配置的 131k 严重不符。这一现象对重度用户尤为关键，直接影响长对话场景的实用性。

热点诉求分析：**安全和权限管理是社区最关心的问题，其次是运行时的可预测性和配置的诚实性**——即“配置声明的能力应当与实际行为一致”。这不仅是功能缺陷，更涉及用户对系统的信任。

## Bug 与稳定性

| 严重程度 | Issue | 状态 | Fix PR |
|---------|-------|------|--------|
| **S0（数据丢失/安全风险）** | [#10165 delegate 绕过 block_high_risk_commands](https://github.com/zeroclaw-labs/zeroclaw/issues/10165) | `priority:p1` `risk:high` 已受理 | ✅ [#10188](https://github.com/zeroclaw-labs/zeroclaw/pull/10188) |
| **S1（工作流阻塞）** | [#10066 SOP 引擎提前执行后续步骤](https://github.com/zeroclaw-labs/zeroclaw/issues/10066) | `priority:p0` `risk:high` 已受理 | 待定 |
| **S1（工作流阻塞）** | [#10230 Quickstart 栈溢出](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) | `priority:p1` `risk:high` 新报告 | 待定 |
| **S1（工作流阻塞）** | [#10061 Provider-rejected image poisons later turns](https://github.com/zeroclaw-labs/zeroclaw/issues/10061) | `priority:p1` `risk:high` 已受理 | 待定 |
| **S2（功能降级）** | [#10164 block_high_risk_commands=false 不生效](https://github.com/zeroclaw-labs/zeroclaw/issues/10164) | `priority:p1` `risk:high` 已受理 | 待定 |
| **S2（功能降级）** | [#10068 上下文被限制在 32k](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) | `priority:p2` 进行中 | 待定 |
| **S2（功能降级）** | [#10121 进程退出导致 Code/ACP 回合丢失](https://github.com/zeroclaw-labs/zeroclaw/issues/10121) | `priority:p1` `risk:high` 已受理 | ✅ [#10197](https://github.com/zeroclaw-labs/zeroclaw/pull/10197) |
| **S2（功能降级）** | [#10116 超长工具结果被中间截断](https://github.com/zeroclaw-labs/zeroclaw/issues/10116) | `priority:p1` 已受理 | 待定 |
| **S2（功能降级）** | [#10037 /api/cron 静默存储非法 session_target](https://github.com/zeroclaw-labs/zeroclaw/issues/10037) | `priority:p2` 进行中 | 待定 |
| **S2（功能降级）** | [#10058 文件浏览器搜索模式忽略方向键导航](https://github.com/zeroclaw-labs/zeroclaw/issues/10058) | `priority:p2` 进行中 | ✅ [#10229](https://github.com/zeroclaw-labs/zeroclaw/pull/10229) |

**特别关注**：

- **#10165**：S0 级安全漏洞，已有对应修复 PR #10188，建议优先审查合并
- **#10230**（Quickstart 栈溢出）：新报告，暂无修复 PR，建议尽快确认
- **#10116/#10115/#10114**：工具结果截断的“三连”问题（截断方式不合理、截断不可观测、默认值不受上下文窗口影响），形成系统性体验缺陷，需要统一治理

## 功能请求与路线图信号

### 较高可能性进入下一版本

- **[#10166 — 默认启用 partial 流式回复](https://github.com/zeroclaw-labs/zeroclaw/issues/10166)**（`JordanTheJet`）：将默认 `stream_mode` 从 `off` 改为 `partial`，使频道回复渐进式输出。属于低风险高收益的体验改进，已有明确实现路径。

- **[#10168 — 默认启用 stall watchdog](https://github.com/zeroclaw-labs/zeroclaw/issues/10168)**（`JordanTheJet`）：为 `stall_timeout_secs` 设置非零默认值，防止回合挂起无响应。同属“默认值优化”系列。

- **[#10140 — iMessage 频道语音消息转录](https://github.com/zeroclaw-labs/zeroclaw/issues/10140)**（`dapi`）：对齐 Telegram/Slack/Discord 已有的语音转录能力，对 iMessage 用户是刚需。

- **[#10059 — ZeroCode 支持 macOS Option-Backspace 删词](https://github.com/zeroclaw-labs/zeroclaw/issues/10059)**：配置化词删除快捷键，属于高质量 UX 打磨项，且标注为 `good first issue`。

- **[#10086 — ZeroCode Logs 文本可选择/复制](https://github.com/zeroclaw-labs/zeroclaw/issues/10086)**：已有完整实现 PR #10096，进入合并队列的可能性大。

### 具有路线图意义的功能

- **[#10073 — 退休 StoragePolicy::Rolling，扩展 /api/logs 分段查询](https://github.com/zeroclaw-labs/zeroclaw/issues/10073)**：默认存储策略存在性能回退，重构方向已明确（吸收行数上限到 Rotating、扩展跨段查询），影响所有未配置实例。

- **[#10138 — Debian Docker 镜像内置 Git Channel](https://github.com/zeroclaw-labs/zeroclaw/issues/10138)**：改善开箱即用的频道支持度。

- **[#10159 — 在原生 Linux/Windows runner 上验证固定的发布工具](https://github.com/zeroclaw-labs/zeroclaw/issues/10159)**：注重发布链路的可靠性，已有配套 PR #10174。

### 被标记为 in-progress 的长期项

- #10040（Lint 超时余量）、#10042（MSRV 依赖安装超时）、#10143（provider 调用计费生命周期补全）、#10161（process_stats 测试稳定性）、#10162（插件安装与配置播种可恢复性）

## 用户反馈摘要

- **安全策略的“双重标准”问题**：`#10165` 的评论中，用户描述了 delegate 自身风险配置被绕过的情况，而 `#10164` 则反映反向问题——父路径上明明放行了高危命令，实际上仍被硬拦截。两者共同指向一个深层矛盾：**权限系统在不同路径上的行为不一致，导致用户无法建立准确的安全心智模型**。

- **上下文窗口的实际体验与配置预期严重偏离**：`#10068` 中用户观察到的 `ctx: 15,538 / 32,000` 与配置的 `131,072` 形成鲜明对比。用户对“配置未生效”的困惑是真实且合理的，开发团队应将该问题视为“配置诚实性”的系统性缺陷。

- **macOS 用户的操作习惯未被尊重**：`#10059` 反馈 Ctrl+W 在 macOS 上不符合用户习惯。这并非功能缺失，而是对平台惯例的适应性不足。

- **日志复制体验不佳**：`#10086` 的诉求非常具体——用户希望像“正常文本”一样选择、复制日志中的一部分，而不是使用隐藏的 y 快捷键。该 PR 已实现（#10096），预计会获得正向反馈。

- **CI 超时正在消耗维护者信任**：`#10042` 中描述了 MSRV 作业可在依赖安装阶段消耗 20 分钟全部预算，CI 时间头的压力已经影响到 fork 贡献者的体验（#10040）。

- **输出截断影响可控性**：`#10116` 和 `#10115` 的反馈表明当前“中间截断”的方式不可预测，且截断行为对用户不可见，修复方向的讨论已展开。

## 待处理积压

### 长期未合并的重要 PR（需维护者关注）

| PR | 创建时间 | 积压天数 | 风险 | 说明 |
|----|---------|---------|------|------|
| [#9110 — fix(lark): use constant_time_eq for verification_token comparison](https://github.com/zeroclaw-labs/zeroclaw/pull/9110) | 2026-07-17 | 36 天 | `risk:high` | 安全修复，等待维护者审查，已被标记 `stale-candidate` |
| [#9319 — refactor(runtime): seal the engine tool registry as ScopedToolRegistry](https://github.com/zeroclaw-labs/zeroclaw/pull/9319) | 2026-07-23 | 30 天 | `risk:high` `size:XL` | 大规模重构，需要更多审查资源 |
| [#9563 — fix(channels): populate the typed media envelope from Telegram](https://github.com/zeroclaw-labs/zeroclaw/pull/9563) | 2026-07-30 | 23 天 | `risk:medium` `size:L` | 等待作者响应，已被标记 `stale-candidate` |
| [#9574 — fix(channels): authorize approval responders](https://github.com/zeroclaw-labs/zeroclaw/pull/9574) | 2026-07-31 | 22 天 | `risk:high` `priority:p1` | 安全修复，等待作者响应 |
| [#9678 — fix(config): harden Git shell policy arguments](https://github.com/zeroclaw-labs/zeroclaw/pull/9678) | 2026-08-02 | 20 天 | `risk:high` `priority:p1` | 安全加固，等待作者响应 |
| [#9707 — fix(config): migrate bare vision_model_provider to dotted alias ref](https://github.com/zeroclaw-labs/zeroclaw/pull/9707) | 2026-08-03 | 19 天 | `risk:medium` `size:L` | 等待作者响应 |
| [#9837 — perf(skills): digest only the bytes a skill load decision can observe](https://github.com/zeroclaw-labs/zeroclaw/pull/9837) | 2026-08-07 | 15 天 | `risk:high` | 等待作者响应 |

### 需重点关注

- **#9110**（Lark 令牌比较）已存在 36 天且被打上 `stale-candidate` 标记，属于安全修复却长期搁置，建议维护者优先处理。
- **#9319** 是大型重构 PR，虽积压 30 天，但其涉及安全作用域基础，建议安排专项 review。
- **#9678、#9574** 均为 `priority:p1` 安全修复，但已分别等待 20 天和 22 天。维护者若短时间内无法审查，建议明确回应并给出时间预期，避免贡献者流失。


> 数据说明：Issue #10074/#10165 评论数并列最高（3 条）；PR 列表未提供评论数具体数值，故未纳入热点排序。所有链接均指向上游 GitHub 仓库。本日报由 AI 根据仓库公开数据自动生成，如需更精确的讨论内容，建议直接访问对应 Issue/PR 查看。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*