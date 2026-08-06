# OpenClaw 生态日报 2026-08-06

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-08-06 01:24 UTC

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

# OpenClaw 项目动态日报（2026-08-06）

## 1. 今日速览

过去 24 小时 OpenClaw 社区保持高强度活动：Issues 更新 500 条（新开/活跃 442 条，关闭 58 条），PR 更新 500 条（待合并 427 条，合并/关闭 73 条），无新版本发布。讨论热度集中指向实时语音会话状态失控（[#116201](https://github.com/openclaw/openclaw/issues/116201)，59 评论）、记忆安全信任分级（[#7707](https://github.com/openclaw/openclaw/issues/7707)，27 评论）与子代理结果静默丢失（[#44925](https://github.com/openclaw/openclaw/issues/44925)，25 评论）三大议题。今日需重点关注两例 P0 级问题：Agent DB v14→v15 迁移失败导致 Gateway 拒绝启动（[#119263](https://github.com/openclaw/openclaw/issues/119263)），以及托管媒体清理误删会话数据（[#119090](https://github.com/openclaw/openclaw/issues/119090)）。整体项目健康度处于「高活跃但稳定性承压」状态——修复管线持续运转，但多个 P1 级 session-state 问题积压未决。

---

## 2. 版本发布

无。

---

## 3. 项目进展

今日有 73 条 PR 被合并/关闭。从重点 PR 列表看，以下几条关闭（或取代）的 PR 反映了项目在关键路径上的推进：

### 认证与权限
- **[#119785](https://github.com/openclaw/openclaw/pull/119785) fix: grant administrator access through host-issued Control UI links（CLOSED）** — 修复通过 `openclaw dashboard` 打开的 Control UI 无法获得 `operator.admin` 权限的问题，使管理员设置与 RPC 可用。兼容性与安全边界风险已标注，当前状态为「等待作者」，需合并前确认。
- **[#113066](https://github.com/openclaw/openclaw/pull/113066) fix: surface specific auth-failure message in terminal incomplete-turn text（CLOSED）** — 在终端不完整轮次文本中向用户展示具体的认证失败原因，改善 `incomplete-turn` 场景的可诊断性。

### 会话与上下文管理
- **[#118796](https://github.com/openclaw/openclaw/pull/118796) fix(session): require a real context snapshot for CLI usage（CLOSED, superseded）** — 该修复阻止将累计 run usage 作为 `SessionEntry.totalTokens` 的权威来源，由 **[#118792](https://github.com/openclaw/openclaw/pull/118792) fix(agents): never persist cumulative usage as session context snapshot** 取代。后者直指根因：累计用量被误标为 `totalTokensFresh: true`，导致在配置窗口 4-8% 处提前压缩。`#118792` 目前仍开放（waiting on author），是今日推进会话健康度的重要一环。
- **[#118800](https://github.com/openclaw/openclaw/pull/118800) fix(agents): use 'unclassified' instead of 'unknown' for uncategorized fallback reasons（OPEN）** — 修正降级通知文案 `; unknown)` 对用户的误导，明确区分「未分类」与「未知」原因，提升可读性。

### 稳定性修复
- **[#119402](https://github.com/openclaw/openclaw/pull/119402) fix: unblock queued replies after repeated model requests（CLOSED）** — 修复 run 反复发起付费请求却无语义输出的场景下，队列回复无法解除阻塞的问题，对应 [#119009](https://github.com/openclaw/openclaw/issues/119009)。
- **[#119792](https://github.com/openclaw/openclaw/pull/119792) fix(backup): skip ephemeral coordinator lock databases（CLOSED, superseded）** — 修复 `openclaw backup create --verify` 因零字节临时锁库而失败的问题，确保运行中 Gateway 可正常备份。
- **[#118846](https://github.com/openclaw/openclaw/issues/118846) 已关闭**：Gateway 主线程被插件元数据快照与 FS stat 打满的 P1 问题今日关闭（该 issue 为 8 月 3 日创建），说明性能修复已有结论或合并。

### 基础设施与自动化
- **[#119799](https://github.com/openclaw/openclaw/pull/119799) fix(plugins): keep targeted official updates on the core channel（OPEN, clawsweeper autofix）** — 由 `clawsweeper[bot]` 生成的自动化修复，解决 `config.update.channel` 未配置时插件更新通道漂移问题。
- **[#117712](https://github.com/openclaw/openclaw/pull/117712) chore(deps): bump the actions group across 1 directory with 10 updates（OPEN, dependabot）** — CI 依赖批量升级，当前被 dependabot rebase 中。

**总结**：今日项目进展集中在会话上下文快照准确性（防止虚假压缩）、认证错误可观测性、备份链路与插件更新通道治理。Beta 关键修复（如 `#119055` 堆栈上的 `#119797` 精确统计命令运行工作量）仍在持续堆叠，说明 2026.7.2 的稳定性修补尚未收尾。

---

## 4. 社区热点

### 讨论热度 Top 5

| 排名 | Issue | 标题 | 评论数 | 类型 |
|------|-------|------|--------|------|
| 1 | [#116201](https://github.com/openclaw/openclaw/issues/116201) | Realtime voice work can retain unbounded provider and consult state | 59 | P1 Bug，需产品决策 |
| 2 | [#7707](https://github.com/openclaw/openclaw/issues/7707) | Feature Request: Memory Trust Tagging by Source | 27 | P2 功能，需安全评审 |
| 3 | [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent completion silently lost — no retry, no notification | 25 | P1 Bug，2 👍 |
| 4 | [#118846](https://github.com/openclaw/openclaw/issues/118846) | Gateway main thread saturated from boot（已关闭） | 19 | P1 Bug |
| 5 | [#86519](https://github.com/openclaw/openclaw/issues/86519) | Agent repeats identical replies 2-10x on Telegram after 5.20 | 13 | P1 回归，1 👍 |

### 热点诉求分析

**① 实时语音的资源治理（#116201）** — 59 条评论是今日最高热度。核心矛盾是实时语音会话的资源限制建立在「条目计数/取消信号」而非「硬所有权边界」上，慢速/突发/挂起场景下会保留过期的 consult 工作与 provider 帧，导致无限增长。社区讨论集中在：会话状态所有权模型、慢消费者背压、以及是否需要引入 provider 级硬配额。已挂 `clawsweeper:needs-product-decision` 标签，等待产品决策。

**② 记忆投毒防护（#7707）** — 该需求从 2 月提出至今积累了 27 条评论，社区认同感强。用户希望按来源（用户命令/web 抓取/第三方 skill）对记忆条目打信任标签，防止恶意指令通过网页或第三方集成污染长期记忆。这是一个安全设计议题，已进入 security-review 流程。结合 #113111（WhatsApp 语音转写标记为 untrusted）的推进，可见「来源可信度」正在成为跨模块的新安全主题。

**③ 子代理任务可靠性（#44925）** — 子代理完成的三种静默丢失模式（完成回调失败、超时后无重试、无通知）触发用户普遍共鸣。Telegram 论坛模式下问题尤甚。社区的主要质疑是：为什么多个失败模式都被静默吞掉？该 issue 被标记为 `platinum hermit`（高价值长期未决），目前仍无 fix PR。

**④ 主线程性能与重复回复** — #118846 已关闭，主线程性能问题得到解决；但 #86519 的 Telegram 重复回复自 5.25 报告以来仍未修复，用户表达了对回归处理速度的不满。

---

## 5. Bug 与稳定性

### P0（严重）

| Issue | 描述 | 状态 | 修复进展 |
|-------|------|------|----------|
| [#119263](https://github.com/openclaw/openclaw/issues/119263) | Agent DB v14→v15 迁移失败：`no such column: entry_valid`，事务回滚，Gateway 拒绝启动，`openclaw doctor --fix` 无效 | OPEN（8-04 创建，6 评论） | 无 fix PR |
| [#119090](https://github.com/openclaw/openclaw/issues/119090) | 托管媒体清理 fails open：会话存储不可读（权限/损坏/锁）时，判定所有媒体为未引用并永久删除 | CLOSED（8-04 创建，8 评论） | 已关闭但标记 `bulk-filed`，需确认修复是否真实落地；数据丢失风险极高，建议追踪验证 |
| [#70903](https://github.com/openclaw/openclaw/issues/70903) | 持久化文件冷却：402 后 `disabledUntil` 写入 auth-state 文件，重启不消失，充值后仍被锁数小时 | OPEN（4-24 创建，6 评论，stale） | 无 fix PR；`release-blocker` |

### P1（重点，按影响面排序）

| Issue | 描述 | 影响 | 修复进展 |
|-------|------|------|----------|
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | 实时语音保留无限 provider/consult 状态 | session-state | 无 fix PR，59 评论，需产品决策 |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 子代理完成静默丢失，无重试/通知/自恢复 | 消息丢失 | 无 fix PR |
| [#86519](https://github.com/openclaw/openclaw/issues/86519) | Telegram 更新 5.20 后重复回复 2-10 次，5.22 降为 2-3 次 | 消息丢失/UX | 无 fix PR，回归问题 |
| [#112423](https://github.com/openclaw/openclaw/issues/112423) | 大型 SQLite 转录清理阻塞 Gateway 事件循环 | session-state | 无 fix PR |
| [#106231](https://github.com/openclaw/openclaw/issues/106231) | 循环检测阻断 exec 但不终止卡住的 agent run | crash-loop | 无 fix PR；`#119402`（已关闭）可能部分缓解 |
| [#85251](https://github.com/openclaw/openclaw/issues/85251) | Codex app-server 发送 `turn/started` 后静默，run 卡死至 stuck-session 恢复窗口 | session-state/消息丢失 | 无 fix PR |
| [#109490](https://github.com/openclaw/openclaw/issues/109490) | 工具返回 `terminate:true` 后 Codex turn 被中断，承诺工作不执行 | 消息丢失 | 无 fix PR |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | hook/工具子进程未回收，僵尸进程累积 | crash-loop | 无 fix PR |
| [#90098](https://github.com/openclaw/openclaw/issues/90098) | Control UI 大附件（PDF）栈溢出：`RangeError: Maximum call stack` | session-state | **有 linked PR** |
| [#117358](https://github.com/openclaw/openclaw/issues/117358) | 轮次后压缩忽略压缩/重置边界，延迟已完成的回复 | 消息丢失 | **有 linked PR** |
| [#53540](https://github.com/openclaw/openclaw/issues/53540) | 大参数工具调用生成超时，embedded runner 报「Network connection lost」 | 消息丢失 | 无 fix PR |
| [#85844](https://github.com/openclaw/openclaw/issues/85844) | 自动更新后 Gateway 引用旧哈希包文件名，进程不刷新 | session-state | 无 fix PR |
| [#119772](https://github.com/openclaw/openclaw/issues/119772) | Logbook 视觉分析结构化提取无通用模型回退，每个批次失败 | 功能不可用 | **有 linked PR** |

### 回归类问题
- **Telegram/Discord/QQ 渠道消息重复或截断**：除 #86519 外，还有 [#77306](https://github.com/openclaw/openclaw/issues/77306)（QQBot 重复发送，hook 在历史回放时触发）、[#116512](https://github.com/openclaw/openclaw/issues/116512)（Telegram 进度首条评论重复）、[#96007](https://github.com/openclaw/openclaw/issues/96007)（Discord 内联错误后内容被截断）。渠道消息管道的回归密度偏高，建议维护者排查是否与 dispatch 层重构有关。
- **Discord 渠道回归矩阵**（[#77930](https://github.com/openclaw/openclaw/issues/77930)）：5.3-1/5.4-beta.2/beta.3 均为 broken，beta.1 和 4.29 正常，已定位为回归且有 linked PR。

---

## 6. 功能请求与路线图信号

### 高潜力需求（有热度、有安全/体验价值）

| Issue | 功能 | 信号 |
|-------|------|------|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | 记忆按来源（用户/网页/第三方 skill）打信任标签 | 27 评论，已进入 security-review；与 #113111「语音转写标 untrusted」形成方向呼应 |
| [#50798](https://github.com/openclaw/openclaw/issues/50798) | ACP 线程绑定会话的可见 agent-to-agent 消息（代理投递，不建主会话） | P2，5 评论，解决 Discord 线程路由污染问题 |
| [#53654](https://github.com/openclaw/openclaw/issues/53654) | Discord 支持 `messageUpdate`/`messageDelete`：编辑重处理、删除取消 | 3 👍，社区呼声高 |
| [#15022](https://github.com/openclaw/openclaw/issues/15022) | 将交错 text/tool_use 块合并为单条出站消息 | 解决渠道刷屏问题，符合消息体验优化方向 |
| [#67419](https://github.com/openclaw/openclaw/issues/67419) | bootstrap 文件每轮重注入，浪费 20-30% token | 2 👍，影响成本；需要缓存/静态化方案 |
| [#115642](https://github.com/openclaw/openclaw/issues/115642) | 订阅计费冷却：探针恢复 + 缩短 usage-limit TTL + 手动重置命令 | P1，对订阅制用户是刚需 |

### 路线图信号：设置流程 QR 化（多 PR 堆叠）

今日 PR 列表中出现一组高密度「QR 设置」特性堆栈，由同一作者连续提交：

- [#119341](https://github.com/openclaw/openclaw/pull/119341) feat(gateway): define system-agent QR contract
- [#119342](https://github.com/openclaw/openclaw/pull/119342) feat(system-agent): host QR setup steps（XL）
- [#119343](https://github.com/openclaw/openclaw/pull/119343) feat(gateway): own QR setup sessions（XL）
- [#114173](https://github.com/openclaw/openclaw/pull/114173) feat(ui): present system-agent setup QR codes（XL）
- [#119344](https://github.com/openclaw/openclaw/pull/119344) feat(signal): add signal-cli account linking（L）
- [#118169](https://github.com/openclaw/openclaw/pull/118169) feat(signal): link accounts from setup QR（L）

这表明 **Signal 渠道的扫码绑号 + 系统代理 QR 设置**正在作为完整功能线推进，且横跨 gateway、UI、system-agent、signal 四层。该系列为 XL 规模、带 session-state/security 兼容性风险，仍处 waiting on author 阶段，预计后续版本会合入。

### 部署与集成
- [#13597](https://github.com/openclaw/openclaw/issues/13597) AWS 部署指南（EC2/ECS/Lambda）已挂 `needs-product-decision` 近 6 个月，4 👍，建议排期。

---

## 7. 用户反馈摘要

### 高频痛点

**① 渠道消息重复/丢失（信任感冲击最大）**
> 「After updating from 2026.5.12 to 2026.5.20, the agent sends duplicate identical replies on Telegram (2-10x per user message).」——[#86519](https://github.com/openclaw/openclaw/issues/86519)

QQBot 渠道同样存在 hook 重放问题：
> 「QQBot 渠道消息重复发送：`message_sending` hook 在 WebChat 历史回放时被触发。」——[#77306](https://github.com/openclaw/openclaw/issues/77306)

**② 代码质量信任危机**
> 「今天刚安装的，最新版，结果 openclaw 建了一个 /Users/wangtao 的文件夹…这位 wangtao 是谁？ Apparently some wangtao hardcode his working space path into the code and somebody merged his code and published」——[#51429](https://github.com/openclaw/openclaw/issues/51429)

硬编码路径被合并发布，对开源项目信任造成直接损害。该 issue 为 P2 且仍开放，建议维护者公开回应并补充 CI 审查规则。

**③ 模型降级/失败对用户不可见**
- [#106786](https://github.com/openclaw/openclaw/issues/106786)：gpt-5.6-* 在 ChatGPT-OAuth 路由被 400 拒绝后**静默回退**，用户毫不知情。
- [#117471](https://github.com/openclaw/openclaw/issues/117471)：`openclaw cron remove` 实际已删除任务，但 CLI 报错 `invalid cron.remove params`——「成功但报错」的矛盾体验。
- [#116348](https://github.com/openclaw/openclaw/issues/116348)：群组提到触发无回复时，硬编码 fallback 文案刷屏，无法抑制或限流。

**④ 长对话/长任务反复中断**
- 火山引擎长对话报错 `missing input.status` 参数（[#116691](https://github.com/openclaw/openclaw/issues/116691)）。
- 大参数工具调用触发「Network connection lost」（[#53540](https://github.com/openclaw/openclaw/issues/53540)）。
- 嵌入式助理阶段的瞬时错误不重试，长 turn 整体死亡（[#117609](https://github.com/openclaw/openclaw/issues/117609)）。

### 正面反馈信号
- [#92369](https://github.com/openclaw/openclaw/issues/92369)（cron 子代理编排）已标记 `close:already-fixed`，说明该场景已被验证修复。
- [#118846](https://github.com/openclaw/openclaw/issues/118846)（性能饱和）从报告到关闭仅 2 天，体现了快速响应能力。

---

## 8. 待处理积压

以下为该维护者需重点关注的长周期未决项：

### 高严重度长期问题（P0/P1）

| Issue | 创建时间 | 描述 | 备注 |
|-------|---------|------|------|
| [#70903](https://github.com/openclaw/openclaw/issues/70903) | 2026-04-24 | 持久化冷却文件导致充值后仍被锁数小时（P0） | stale 标签，已积压 3.5 个月 |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | 2026-02-03 | 记忆信任标签安全需求（P2） | 27 评论，等待安全评审，积压 6 个月 |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 2026-03-13 | 子代理完成静默丢失（P1） | platinum hermit，25 评论，积压近 5 个月 |
| [#86519](https://github.com/openclaw/openclaw/issues/86519) | 2026-05-25 | Telegram 重复回复回归（P1） | 积压 2.5 个月，用户持续关注 |
| [#51429](https://github.com/openclaw/openclaw/issues/51429) | 2026-03-21 | 硬编码路径被合并发布（P2） | 影响品牌信任，12 评论 |

### 久未响应的开放 PR

| PR | 创建时间 | 描述 | 状态 |
|----|---------|------|------|
| [#83244](https://github.com/openclaw/openclaw/pull/83244) | 2026-05-17 | 容忍 config `meta` 未知键 | 3 个月仍在 `needs-pr-context` |
| [#89040](https://github.com/openclaw/openclaw/pull/89040) | 2026-06-01 | 修复 embedded_run bootstrap 14-22s 事件循环停滞 | 2 个月仍 `needs proof`，XL 高风险 |
| [#92070](https://github.com/openclaw/openclaw/pull/92070) | 2026-06-11 | 所有 claude-cli 子进程强制执行 `--safe-mode` | 2 个月仍 `needs-real-behavior-proof` |

### 专项关注
- **数据库迁移**（[#119263](https://github.com/openclaw/openclaw/issues/119263)）为最新 P0，涉及 v14→v15 schema 升级阻断，今日尚无 PR 认领，建议优先安排。
- **媒体数据安全**（[#119090](https://github.com/openclaw/openclaw/issues/119090)）虽已关闭，但 P0 + 数据删除类问题建议以「已验证修复」状态向社区公告，重建信任。

---

*本日报基于 openclaw/openclaw 截至 2026-08-06 的 GitHub 公开数据生成。Issue/PR 编号均可通过 `https://github.com/openclaw/openclaw/issues/<编号>` 或 `/pull/<编号>` 访问。*

---

## 横向生态对比

# 个人 AI 助手开源生态横向对比分析报告（2026-08-06）

> 数据范围：12 个仓库，时间窗口 2026-08-05 ~ 2026-08-06；以下数据均按各项目日报披露口径汇总。

## 1. 生态全景

个人 AI 助手/自主智能体生态正处在从"功能探索"到"可靠性治理"的转折期。过去 24 小时，10 个活跃项目合计产生约 680 条 Issue 与 700 条 PR 更新，其中 OpenClaw 单项目即达 1,000 条，约为第二梯队项目（50 Issue + 50 PR 量级）的 10 倍。生态已形成核心框架、企业级垂直、协议/架构实验、轻量替代的清晰分层，"Claw"命名族各项目均在 OpenClaw 的能力光谱上做差异化切割。跨项目高频痛点——消息静默丢失、MCP 工具生命周期失效、会话上下文边界、模型降级不透明——表明竞争维度正从"能做什么"转向"能否可靠、安全、可治理地运行"。

## 2. 各项目活跃度对比

| 项目 | Issue 更新 | PR 更新 | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（关闭 58） | 500（合并 73） | 无 | 高活跃但稳定性承压，2 个 P0 未闭环 |
| **IronClaw** | 43（关闭 10） | 50（合并 18） | v1.1.0-rc.1 | RC 质量收尾，QA bug bash 密集 |
| **Hermes Agent** | 50（关闭 0） | 50（合并 0） | 无 | 提交热评审冷，50 条 PR 零合并 |
| **ZeroClaw** | 50（关闭 11） | 50（合并 1） | 无 | 参与度高，49 条 PR 待合并 |
| **CoPaw**（QwenPaw） | 25（关闭 6） | 50（合并 21） | 无（stable v2.0.1） | 高活跃，stable 版 4 个 P0 |
| **NanoBot** | 4 | 16（合并 8） | 无 | 快速响应，合并率 50%，Issue 闭环率偏低 |
| **LobsterAI** | 3 | 13（合并 12） | 2026.8.5 | 迭代快，稳定性修复当日合入 |
| **NanoClaw** | 2（重新激活） | 12（合并 2） | 无 | 中等活跃，核心修复反复重开 |
| **PicoClaw** | 0 | 4（合并 1） | 无 | 低活跃，OAuth 合并后无后续 |
| **NullClaw** | 0 | 2（待合并） | 无 | 平稳，2 条高价值修复待 review |
| **Moltis** | 无活动 | 无活动 | - | 静止 |
| **ZeptoClaw** | 无活动 | 无活动 | - | 静止 |

## 3. OpenClaw 在生态中的定位

**社区规模——绝对头部。** 单日 1,000 条 Issue/PR 更新是第二梯队（约 100 条）的 10 倍；427 条待合并 PR 已超过多数项目全天更新总量。重点议题覆盖认证、会话、备份、插件、媒体等全模块，单一 issue 最高 59 条评论（实时语音治理），问题库深度独一无二。

**技术路线——聚合式全能框架。** OpenClaw 走"所有能力一栈式交付"路线：实时语音、子代理编排、记忆系统、多渠道、备份迁移均在单体中快速迭代。优势是能力密度与插件生态；代价是稳定性承压——今日 2 个 P0（Agent DB v14→v15 迁移阻断启动 #119263、托管媒体清理误删会话数据 #119090）及多个积压的 P1 session-state 问题，说明功能扩张速度已超出质量保障能力。

**与同类项目的差异。** IronClaw 用企业级"Reborn"架构做区隔（标准化消息框架、沙箱隔离、CI 门禁），目标明确是商业部署；Hermes 集中对齐 Telegram Bot API 10.2（约 24 项差距），走"平台合规"路线；ZeroClaw 以 RFC 驱动治理 + Chat Completions 协议兼容；NanoClaw 强调容器隔离与数据库单写者规则；NullClaw 追求最小稳定。可以说 **OpenClaw 是生态的"最大公约数"，其余项目均是其能力光谱上的减法或专项强化**，目前无项目可替代其生态位。

## 4. 共同关注的技术方向

**① 消息/结果可靠性：失败必须可见、可重试、可归属**
- OpenClaw：子代理结果静默丢失（#44925，积压 5 个月）；Telegram 重复回复 2-10 次（#86519）
- CoPaw：长会话工具调用累积后 400 错误（#6726）；SSE 流内 503 不参与重试（#6708）
- IronClaw：Slack DM 执行结果被投递到 Telegram（#7249）
- Hermes：委托子任务上下文经共享终端快照泄漏（#71941）

**② MCP/工具生态从"能连"到"能治"**
- CoPaw：MCP 工具数小时后全部失效、需重启容器（#6732）；超时可配置诉求（#6724）
- NanoBot：MCP 业务错误信封被误判为成功、空等超时（#5237）；WebUI 支持 MCP Apps host（#5251）
- Hermes：MiniMax 拒绝标准 JSON Schema 工具定义（#73093）
- ZeroClaw：集中化 deferred-MCP 访问策略（#8496）
- OpenClaw：插件更新通道漂移（#119799）

**③ 来源信任与内部安全边界**
- OpenClaw：记忆按来源（用户/网页/第三方 skill）打信任标签（#7707，27 评论）
- ZeroClaw：高危 shell 命令逐次确认 RFC（#7155）；凭据 URL 防 SSRF（#8826）
- Hermes：bash ANSI-C 引号绕过终端审批下限（#76219）
- NanoBot：含密码 URL 被转发远端 Jina reader（#5258）
- IronClaw：内部设计文档在公开站点可被 URL 直达（#7259）

**④ 模型降级/回退的透明性与可配置性**
- OpenClaw：模型被 400 拒绝后静默回退、用户不知情（#106786）
- CoPaw：per-agent/全局 fallback 全链路合并（#5597/#5598）；自动模型路由诉求（#6436）
- PicoClaw：可配置默认 fallback 链待合并（#3200）
- ZeroClaw：OpenRouter 流式请求丢失 provider_extra（#9775）
- NanoBot：extraBody 透传各 Provider 原生开关（#5254）

**⑤ 配置即代码与用户控制权**
- IronClaw：Configuration-as-Code 长期 Epic（#3036）
- LobsterAI：openclaw.json 被整文件覆盖、用户无法持久精简（#2441）
- ZeroClaw：config CLI 对连字符 key 行为不一致（已修复）
- OpenClaw：config.update.channel 治理（#119799）

**⑥ 7×24 长稳运行能力**
- NullClaw：Telegram/Matrix 渠道空闲一夜后静默假死（#984）
- CoPaw：频道无重试/健康检测（#6684）
- ZeroClaw：macOS daemon 日志无界增长（#9750→#9773）
- OpenClaw：大型 SQLite 清理阻塞 Gateway 事件循环（#112423）

## 5. 差异化定位分析

| 项目 | 定位 | 关键差异 | 目标用户 |
|---|---|---|---|
| **OpenClaw** | 全能型核心框架 | 聚合单体 + 最大插件生态；所有能力一栈式交付 | 自托管技术用户、开发者 |
| **IronClaw** | 企业级 Agent 基础设施 | Reborn 架构：多租户隔离、沙箱、CI 门禁、IronHub 扩展市场；v1.1.0-rc.1 | 企业/商业部署 |
| **Hermes Agent** | 平台合规纵深 | Telegram Bot API 10.2 全对齐（支付/礼物/Passport 等 24 项）；god-file 拆分重构 | Telegram 重度使用/商业化 bot 运营者 |
| **CoPaw** | 大模型生态 × 中文渠道深度耦合 | WeChat iLink 迭代、Matrix 自建、浏览器 SDK；LLM Fallback 全链路 | 中文市场、7×24 生产工具用户 |
| **LobsterAI** | 桌面客户端壳 + 国内 IM 集成 | 网易 NIM 渠道、每日签到原生、企业账号隔离；基于 OpenClaw 网关封装 | 国内桌面端 C 端用户 |
| **NanoBot** | WebUI 体验优先的轻量框架 | Temporary Chat、共享 PTY 终端、MCP Apps host 支持 | 重视交互体验的个人开发者 |
| **NanoClaw** | 容器隔离 + 技能扩展 | 数据库单写者规则、host/container 边界、渠道 × 技能矩阵 | 对隔离性敏感的自托管用户 |
| **ZeroClaw** | 协议兼容 + RFC 治理 | Chat Completions 兼容（接入 Open WebUI/LobeChat/Aider）；shell 策略/认证 RFC | 希望融入 OpenAI 客户端生态的社区 |
| **PicoClaw / NullClaw** | 轻量 / 最小化 | PicoClaw 聚焦 Anthropic OAuth 与 CLI 极简；NullClaw 只做稳定性最小修复 | 资源受限场景 |

## 6. 社区热度与成熟度

**快速迭代期（功能推进快，但稳定性与创新赛跑）**：OpenClaw（1,000 条更新量，P0/P1 堆积）、CoPaw（合并率 42%，stable 版 4 个 P0 待修）。二者共性：功能密度高、用户基数大，质量问题呈"高频暴露"状态。

**质量巩固期（RC/发版收尾、稳定性优先）**：IronClaw（v1.1.0-rc.1 后 QA bug bash、E2E 收口、CI 修复密集）、LobsterAI（合并率 92%，稳定性修复当日合入，2026.8.5 已发版）、NullClaw（无新功能，专注 2 条高价值稳定性修复）。

**评审瓶颈期（贡献热情高，review 吞吐为零）**：Hermes Agent（50 条 PR 全部积压，0 合并 0 关闭，最早 PR 等待 15 天）、ZeroClaw（49 条 PR 待合并，但 Issue 关闭 11 条，问题响应尚可）。共同特征是治理机制未跟上社区贡献速度。

**低活跃/停滞期**：PicoClaw（OAuth 里程碑后无新 Issue）、NanoClaw（核心修复反复重开）、Moltis 与 ZeptoClaw（完全静止）。

合并率是成熟度的重要指标：LobsterAI 92% > NanoBot 50% > CoPaw 42% > IronClaw 36% > OpenClaw 14.6% > ZeroClaw 2% > Hermes 0%。**合并率与项目受控程度正相关，与开放度/贡献者规模负相关**——规模越大的社区，review 瓶颈越严酷。

## 7. 值得关注的趋势信号

**① AI 助手进入"生产可靠性"时代。** CoPaw 的 MCP 周期性失效、NullClaw 的渠道假死、OpenClaw 的 SQLite 阻塞、ZeroClaw 的日志无界增长，均是"运行数小时后失效"类问题。启示：健康检测、自动重启、有界资源（日志/内存/栈）应成为 Agent 框架的一等公民，而非事后补丁。

**② 安全模型从"认证"走向"动作信任分级"。** ZeroClaw 的 shell 逐次确认、OpenClaw 的记忆来源信任标签、NanoBot 的凭证 URL 清洗、Hermes 的终端审批绕过修复，共同指向按来源和风险级别对 Agent 每个动作分级授权。启示：设计时预留不可篡改的来源元数据（source tagging），而非事后补救。

**③ Agent"诚实性"成为可观测性新维度。** IronClaw QA 实证 Agent 编造"GitHub 已连接""自动化已运行"（#7246/#7247）；Hermes 成本显示 "$0.00" 误导（#79220）；OpenClaw 修正"未分类/未知"文案（#118800）。启示：工具层应强制"状态校验优先于模型生成"，阻止幻觉扩散。

**④ 互操作性成为生态扩张关键。** ZeroClaw 做 Chat Completions 兼容以接入 Open WebUI/LobeChat/Aider；NanoBot 用 extraBody 透传 Provider 原生能力；PicoClaw 合并 Anthropic OAuth。启示：Agent 框架的护城河正从"自研能力"转向"与主流 LLM 和客户端生态的无缝互操作"。

**⑤ 提示词/上下文控制权开始产品化。** LobsterAI 用户实测 4,425 字符系统提示词与 AGENTS.md 78% 重复（#2440）、配置被整文件覆盖（#2441）；OpenClaw 记忆信任标签；Hermes 记忆生命周期管理（#78307）。启示：AGENTS.md/记忆文件的合并策略、去重与用户可覆盖性，将直接影响"本地优先"信任度。

**⑥ 配置即代码从口号变为社区刚需。** IronClaw 将 Config-as-Code 列为长期 Epic，ZeroClaw 以 RFC 驱动配置治理，LobsterAI 出现配置被覆盖的客户投诉，OpenClaw 治理插件更新通道漂移。启示：配置文件应像代码一样可 schema 校验、diff、审计、合并——这是 Agent 走向团队化使用的必经之路。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-06

---

## 今日速览

过去 24 小时项目保持高活跃度：共产生 16 条 PR 更新与 4 条 Issue 更新，其中 8 个 PR 已合并/关闭（合并率 50%），8 个 PR 处于开放状态；今日无新版本发布。合并 PR 集中在 WebUI 体验重构、WhatsApp 音频修复、元搜索集成三大方向，另有多个围绕“临时会话”与“安全加固”的 PR 仍在推进中。Issue 侧本周反馈的 3 个功能性问题（音频发送、MCP 工具错误识别、/goal 循环回复）均已有对应修复 PR，体现出社区反馈到代码修复的快速闭环；但今日 Issue 关闭数为 0，长期积压的 #5149 已持续 9 天未闭环，是当前健康度的主要扣分项。

---

## 项目进展

今日合并/关闭的 8 个 PR 在四个方向推动了项目前进：

**1. 搜索能力扩展（新 Provider 落地）**
- [#5234 feat(agent): integrate mst-python as a metasearch provider](https://github.com/HKUDS/nanobot/pull/5234) — 合并。新增 Meta-Search Tool（mst）作为 Web 搜索提供商，聚合 DuckDuckGo/Google/Brave/Bing 等多引擎结果，并通过 RRF 融合排序，显著提升单次搜索的覆盖面。

**2. 通道稳定性修复（WhatsApp / Mattermost）**
- [#5203 fix(whatsapp): detect outbound media content before dispatch](https://github.com/HKUDS/nanobot/pull/5203) — 合并。改为依据文件内容（libmagic）而非扩展名判断外发媒体类型，修复了 WhatsApp 音频发送失败问题，间接响应用户 Issue #5149。
- [#5233 feat(mattermost): separate group policy for threads and expose in WebUI](https://github.com/HKUDS/nanobot/pull/5233) — 合并。新增 `groupPolicyInThread` 配置字段，支持主频道与帖子的独立提及策略，并已在 WebUI 暴露。

**3. WebUI 体验重构**
- [#5184 feat(webui): add Quick Chat and Temporary Chat](https://github.com/HKUDS/nanobot/pull/5184) — 标记 conflict 后关闭，功能被 #5252 的新实现取代（详见下文路线图信号）。
- [#5249 refactor(webui): improve visual consistency](https://github.com/HKUDS/nanobot/pull/5249) — 合并。统一菜单/弹层/对话框的两级投影体系，精简 Skills 与 Channels 布局，移除持久化消息中的回放动画。
- [#5250 fix(webui): feather clipped activity edges](https://github.com/HKUDS/nanobot/pull/5250) — 合并。为活动面板边缘增加方向感知的渐隐效果，改善滚动跟随体验。

**4. 安全与权限收敛**
- [#5238 refactor(session): remove request-scoped access grants](https://github.com/HKUDS/nanobot/pull/5238) — 合并。移除 #5211 引入的 request-scoped `Tool.available()` 层与 `SessionAccessScope` 授权抽象，权限判定回归到 `Tool.enabled()` 单一入口，简化会话工具的搜索读取逻辑。

**5. Provider 能力开关**
- [#5254 feat: add provider-native request switches](https://github.com/HKUDS/nanobot/pull/5254) — 合并。为 OpenAI Codex Fast mode、OpenAI/DeepSeek 联网搜索、xAI Grok X Search 增加 WebUI 开关，通过 `extraBody` 直接注入原生请求字段。

**综合判断**：今日合并在功能新增（MST 搜索、Mattermost 策略）、体验打磨（WebUI 视觉）、安全简化（移除授权抽象）三条线并行推进，项目处于快速迭代期。尤其是 #5238 对权限模型的“做减法”体现了架构收敛意识。

---

## 社区热点

今日讨论度最高的两个 Issue：

1. **[#5149 [bug] no audio?](https://github.com/HKUDS/nanobot/issues/5149)** — 评论 4 条，持续 9 天
   - 用户反馈：WhatsApp 通道可以接收音频，但无法发送音频消息，日志中出现 `neonize.utils.ffmpeg WARNING`。
   - 诉求分析：WhatsApp 音频收发不对称是高频真实痛点，涉及 ffmpeg 转码链路。已合并的 #5203（内容嗅探替代扩展名白名单）可望覆盖此场景。

2. **[#5237 [bug] MCP tool returns "data not found" envelope → agent ignores it, waits until tool_timeout fires](https://github.com/HKUDS/nanobot/issues/5237)** — 评论 2 条
   - 用户反馈：当 MCP server 在 `CallToolResult.content` 中返回业务错误信封（如 `{"code":404,"msg":"data not exist"}`）且 `isError=False` 时，agent 将其视为成功调用，导致 LLM 无法识别失败，反复等待直至超时。
   - 诉求分析：暴露了 MCP 工具层“协议成功 ≠ 业务成功”的判断漏洞，直接影响 agent 的可靠性和响应延迟。此类问题若不加修复，将对 MCP 生态的信任度造成长期伤害。

其余 Issue/PR 暂无评论，讨论集中在上述两个具体技术问题上，均指向“通道/工具层可靠性”这一核心诉求。

---

## Bug 与稳定性

按严重程度排序：

| 严重度 | 编号 | 问题描述 | 状态 |
|---|---|---|---|
| **高（稳定性）** | [#5256 /goal message produces dozens of repeated replies](https://github.com/HKUDS/nanobot/issues/5256) | 单条 /goal 指令触发几十条近似重复回复，模型陷入等待-重复-再注入的循环，需用户干预才能终止 | 修复 PR [#5257](https://github.com/HKUDS/nanobot/pull/5257) 已开放（p2），为目标续写增加 `_MAX_INJECTION_CYCLES` 边界 |
| **高（安全）** | [#5258 credential-bearing URLs → remote Jina reader](https://github.com/HKUDS/nanobot/issues/5258) | 含 `user:pass@` 或 `token/sig/X-Amz-*` 等敏感参数的 URL 会被转发给远端 Jina reader，存在凭证泄露风险 | 修复 PR [#5258](https://github.com/HKUDS/nanobot/pull/5258) 已开放（p1），改为走本地 readability 路径 |
| **中（功能）** | [#5237 MCP tool business error envelope ignored](https://github.com/HKUDS/nanobot/issues/5237) | agent 无法识别 `isError=False` 包裹的业务错误，触发 tool_timeout 空等 | 暂无对应 fix PR |
| **中（功能）** | [#5149 WhatsApp audio send failure](https://github.com/HKUDS/nanobot/issues/5149) | 无法发送音频消息，ffmpeg 链路存在告警 | [#5203](https://github.com/HKUDS/nanobot/pull/5203) 今日已合并，待验证是否闭环 |
| **低（兼容性）** | [#5248 Matrix room join fails on Continuwuity](https://github.com/HKUDS/nanobot/issues/5248) | `nio.Api.join()` 发送空 POST body，被 Continuwuity 以 `M_BAD_JSON` 拒绝 | 修复 PR [#5248](https://github.com/HKUDS/nanobot/pull/5248) 已开放（p2） |

今日新增 Bug 类 Issue 2 个（#5256、#5258），两者均已较快获得修复 PR，说明维护者对稳定性问题的响应速度较快。安全相关修复被标为 p1，值得关注。

---

## 功能请求与路线图信号

**新增功能请求**

1. **[#5251 Feature: Add MCP Apps host support to the WebUI](https://github.com/HKUDS/nanobot/issues/5251)**（new）
   - 用户希望 WebUI 原生支持官方 MCP Apps 扩展（`io.modelcontextprotocol/ui`），使 MCP server 能内嵌交互 UI，而不仅限于面向模型的文本/图像输出。
   - 信号判断：这是 MCP 生态从“工具调用”向“应用承载”演进的关键需求。若纳入路线图，将进一步拉开 nanobot 与普通 chatbot 框架的差距。

**正在推进的路线图信号（开放 PR）**

2. **Temporary Chat（临时会话）** — [#5252 feat(webui): add temporary chat mode](https://github.com/HKUDS/nanobot/pull/5252) + [#5259 fix(webui): enforce memory-only temporary sessions](https://github.com/HKUDS/nanobot/pull/5259)
   - 设计方向明确：临时会话状态仅存内存、不落盘、不写入会话历史/WebUI transcripts/自动记忆。体现了隐私优先的产品取向，可能成为 WebUI 的核心招牌功能之一。
   - 注意 #5259 明确标注 Stacked on #5252，说明该系列可持续跟进。

3. **[#5253 feat(webui): add shared interactive project terminal](https://github.com/HKUDS/nanobot/pull/5253)**（p2）
   - 新增项目级共享 PTY 终端（xterm.js），支持 WebUI 与 agent 共用同一终端、回放/重连/终止。这是向“agent 作为协作开发环境”方向迈出的重要一步。

4. **[#5255 Draft: truthful API service status for externally-managed servers](https://github.com/HKUDS/nanobot/pull/5255)**（draft）
   - 让 WebUI 的 API 服务面板如实反映外部 `nanobot serve` 进程的状态（而非仅显示“Off”），并新增 `nanobot api status` CLI 子命令。

5. **Web 搜索增强** — [#5234 已合并](https://github.com/HKUDS/nanobot/pull/5234) 表明元搜索是既定方向，后续可能继续扩展更多聚合源或 RRF 参数化配置。

---

## 用户反馈摘要

从今日活跃的 Issue 评论与 PR 描述中提炼：

- **WhatsApp 音频发送是痛点**（#5149）：用户明确描述“可以接收但不能发送”的不对称体验，且直接要求“ask it to send you any audio file”复现。说明音频/多模态消息在 IM 通道中的双向互通是高频期待。
- **MCP 错误处理影响工具信任**（#5237）：用户细致描述了 LLM 因错误信封被误判为成功而导致超时等待的行为，语气中透露出对“agent 是否真正理解工具执行结果”的担忧——这实际上是所有 MCP 客户端共同的可靠性挑战。
- **/goal 循环回复直接打断使用**（#5256）：用户用“dozens of near-identical replies”描述失控场面，这类问题会快速消耗用户对 agent 自主性的信任。反馈中指出“ended only when the user intervened”，暗示了当前默认缺少安全熔断机制。
- **Matrix 兼容性需求真实存在**（#5248）：PR 作者主动为 Continuwuity homeserver 提交修复，说明除主流 Synapse 之外的 Matrix 实现也有真实用户基数，且社区愿意反向贡献。
- **正反馈**：虽然今日无明确点赞/好评 Issue，但从 #5234（MST 元搜索）与 #5254（Provider 开关）的完整度和交互设计来看，用户对“开箱即用的 Provider 特有能力”有明显需求，且测试覆盖较完善。

---

## 待处理积压

**Issue 侧**

- **[#5149 no audio?](https://github.com/HKUDS/nanobot/issues/5149)** — 已开放 9 天，4 条评论，至今未关闭。今日 #5203 合并可能修复该问题，建议维护者主动回帖确认并闭环，避免用户等待过久。
- **[#5237 MCP tool error envelope](https://github.com/HKUDS/nanobot/issues/5237)** — 开放 2 天，暂无修复 PR。该问题直接影响 MCP 工具链路的可靠性，且描述详实、复现路径清晰，值得尽快分配处理。

**PR 侧**

- **[#5255 Truthful API status](https://github.com/HKUDS/nanobot/pull/5255)** — Draft 状态，尚无活跃推进信号。若 WebUI 的 API 服务状态误报影响用户运维决策，建议维护者评估是否纳入近期里程碑。
- **[#5252 / #5259 Temporary Chat 系列](https://github.com/HKUDS/nanobot/pull/5252)** — 依赖链较长（#5259 stacks on #5252），且与已关闭的 #5184 存在方案迭代关系，需持续跟进避免长期挂起。
- **[#5253 Shared interactive project terminal](https://github.com/HKUDS/nanobot/pull/5253)** — 涉及 PTY/ConPTY 底层能力，改动面较大，建议维护者明确该功能的目标版本归属。

---

**总体评价**：NanoBot 今日处于高活跃、高合并、快响应的健康节奏。WebUI 交互深度与安全加固是当前最明确的迭代主线；MCP 生态的“应用化”（#5251）与临时会话是值得关注的下一个增长点。主要隐忧是 Issue 闭环率偏低（今日 0 关闭），尤其 #5149 已持续 9 天，建议在发布下一个版本前集中清理。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-06

## 1. 今日速览

过去 24 小时，Hermes Agent 仓库活跃度极高：共产生 **50 条 Issue 更新**与 **50 条 PR 更新**，但均为「新增/活跃」状态——**0 个 Issue 关闭、0 个 PR 合并、0 个新版本发布**。讨论高度集中在三大主题：仓库级 god-file 拆分史诗（[#78647](https://github.com/nousresearch/hermes-agent/issues/78647)）、Telegram Bot API 10.2 功能对齐战役（约 24 个子 Issue）、以及 lifecycle_guard 崩溃阻断终端命令（[#77780](https://github.com/nousresearch/hermes-agent/issues/77780)）。值得警惕的是，50 条 PR 全部积压在待合并状态，最早者已等待 15 天（[#69242](https://github.com/nousresearch/hermes-agent/pull/69242)，7 月 22 日创建），**评审/合并吞吐为零**是当前项目健康度的最大风险点。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

过去 24 小时 **无 PR 被合并或关闭**，进展体现在「提交—评审」管线的前半段，50 条 PR 新增或更新，按主题归类如下：

**架构重构（god-file 拆分战役）**
- [#79127](https://github.com/nousresearch/hermes-agent/pull/79127) — 从 web_server.py 提取 custom-endpoints 路由（R3-C1 切片）
- [#79708](https://github.com/nousresearch/hermes-agent/pull/79708) — 从 cli.py 提取 status-bar/skill-command mixins（S2 切片）
- 两者均为 epic [#78647](https://github.com/nousresearch/hermes-agent/issues/78647) 的组成部分，字节保真提取、零行为变更

**Bug 修复（待合并）**
- 会话/状态：[#79811](https://github.com/nousresearch/hermes-agent/pull/79811)（模型切换时持久化 provider）、[#75352](https://github.com/nousresearch/hermes-agent/pull/75352)（回收 finished-thread WAL 读取器）、[#73608](https://github.com/nousresearch/hermes-agent/pull/73608)（桌面端从 $sessionStates 读取消息）、[#79717](https://github.com/nousresearch/hermes-agent/pull/79717)（阻止 fresh-tail 上下文溢出重试循环）、[#79805](https://github.com/nousresearch/hermes-agent/pull/79805)（恢复 attach/compress 会话）
- Cron/调度：[#79813](https://github.com/nousresearch/hermes-agent/pull/79813)（TERMINAL_CWD 锁超时）、[#73363](https://github.com/nousresearch/hermes-agent/pull/73363)（multiplex 模式下各 profile 使用自己的适配器投递 cron）、[#79808](https://github.com/nousresearch/hermes-agent/pull/79808)（cron 强制 required_skills）
- 平台适配：[#79154](https://github.com/nousresearch/hermes-agent/pull/79154)（WhatsApp 端口清理前验证桥归属）、[#79812](https://github.com/nousresearch/hermes-agent/pull/79812)（Teams SDK 懒安装）、[#79694](https://github.com/nousresearch/hermes-agent/pull/79694)（Telegram 发送文本附件加 UTF-8 BOM 解决西里尔文乱码）
- 安全/兼容：[#76219](https://github.com/nousresearch/hermes-agent/pull/76219)（阻止 bash ANSI-C 引号绕过终端审批硬性下限）、[#73093](https://github.com/nousresearch/hermes-agent/pull/73093)（MiniMax 工具 schema 清洗）、[#79809](https://github.com/nousresearch/hermes-agent/pull/79809)（桌面/TUI 依赖漏洞修补）、[#79810](https://github.com/nousresearch/hermes-agent/pull/79810)（Windows 测试修复）、[#78356](https://github.com/nousresearch/hermes-agent/pull/78356)（TencentDB memory 插件升级 v2.0.0）

**总体判断**：虽然合并数为零，但 PR 队列覆盖了会话状态、cron 调度、平台适配、安全加固等关键领域；一旦进入合并通道，项目在稳定性与 Telegram/Teams/WhatsApp 平台能力上将有明显跃升。

## 4. 社区热点

**[#78647 — Epic: Shard all 20 god files（14 评论）](https://github.com/nousresearch/hermes-agent/issues/78647)**
仓库级 god-file 拆分总纲领，确立「所有 god-file 必须拆分、永不回退」的路线（2026-08 政策）。评论与关联 PR 显示，这是当前社区最认可的技术债清零方向。

**[#77780 — lifecycle_guard 崩溃致所有终端命令不可用（12 评论）](https://github.com/nousresearch/hermes-agent/issues/77780)**
`cron/lifecycle_guard.py` 扫描 heredoc/-c payload 中的路径时，`os.open` 抛出未捕获的 `ValueError: embedded null byte`，崩溃沿 `contains_gateway_lifecycle_command_or_referenced_script` 传播，阻断全部终端命令。评论热度高、影响面广，截至日报发布时**尚无对应 fix PR**。

**[#54962 — 从 gateway/run.py 提取平台路由（11 评论）](https://github.com/nousresearch/hermes-agent/issues/54962)**
858KB 的 gateway/run.py 被视为最大的 god-file；自 6 月 29 日开启后持续获得关注，是 #78647 战役的先行标志。

**[#78791 及 Telegram 战役集群（各 2–5 评论）](https://github.com/nousresearch/hermes-agent/issues/78791)**
由 andrexibiza 批量提交的约 24 个 Telegram 功能差距 issue（#78774–#78790），覆盖 Bot API 10.2 的支付、礼物、Passport、WebApp、游戏、内联模式等，多数标记 `duplicate` 并折叠进 meta-issue。这是一次有组织的「API 合规性审计」而非零散反馈。

**[#71941 — 委托子上下文通过共享终端快照泄漏（5 评论）](https://github.com/nousresearch/hermes-agent/issues/71941)**
`HERMES_DELEGATED_CHILD_CONTEXT` 因终端环境缓存共享而污染后续普通调用，属于会话状态隔离问题，标记 `sweeper:risk-session-state`。

## 5. Bug 与稳定性

按严重程度排列（均无已合并修复，标注是否存在待合并 PR）：

| 严重度 | Issue/PR | 问题描述 | 修复状态 |
|---|---|---|---|
| P2 阻断 | [#77780](https://github.com/nousresearch/hermes-agent/issues/77780) | lifecycle_guard 崩溃，**所有终端命令不可用** | ❌ 无 fix PR |
| P2 风险 | [#71941](https://github.com/nousresearch/hermes-agent/issues/71941) | 委托子任务上下文经共享终端快照泄漏至后续会话 | ❌ 无 fix PR |
| P2 误导 | [#79220](https://github.com/nousresearch/hermes-agent/issues/79220) | 低成本模型成本显示 $0.00（2dp 格式），计算正确但展示误导 | ❌ 无 fix PR |
| P2 安全 | [#76219](https://github.com/nousresearch/hermes-agent/pull/76219) | bash ANSI-C 引号可绕过终端审批硬性下限，/yolo 下可无提示执行磁盘清除 | ✅ 有 PR 待合并 |
| P2 泄漏 | [#75352](https://github.com/nousresearch/hermes-agent/pull/75352) | 长驻 SessionDB 累积 WAL/文件描述符直至关闭 | ✅ 有 PR 待合并 |
| P2 路由 | [#73363](https://github.com/nousresearch/hermes-agent/pull/73363) | multiplex_profiles 下二级 profile 的 cron 输出经默认 profile 适配器投递 | ✅ 有 PR 待合并 |
| P2 死循环 | [#79717](https://github.com/nousresearch/hermes-agent/pull/79717) | 压缩反复执行但无法缩小受保护消息，陷入重试循环 | ✅ 有 PR 待合并 |
| P2 路由 | [#69242](https://github.com/nousresearch/hermes-agent/pull/69242) | Discord 原生斜杠命令绕过 profile_routes 落到 default | ✅ 有 PR 待合并 |
| P2 兼容 | [#73093](https://github.com/nousresearch/hermes-agent/pull/73093) | MiniMax 端点拒绝标准 JSON Schema 工具定义（HTTP 400） | ✅ 有 PR 待合并 |
| P2 会话 | [#73608](https://github.com/nousresearch/hermes-agent/pull/73608) | 桌面端 planReload 读取过期全局 $messages 导致操作静默失败 | ✅ 有 PR 待合并 |
| P2 持久化 | [#79811](https://github.com/nousresearch/hermes-agent/pull/79811) | 模型切换时 provider 未写入 model_config，恢复后与主 provider 重组错乱 | ✅ 有 PR 待合并 |

另有 P3 修复待合并：[#79805](https://github.com/nousresearch/hermes-agent/pull/79805)（桌面 attach/compress 会话恢复）、[#79694](https://github.com/nousresearch/hermes-agent/pull/79694)（Telegram 西里尔文乱码）、[#79810](https://github.com/nousresearch/hermes-agent/pull/79810)（Windows 测试）、[#79812](https://github.com/nousresearch/hermes-agent/pull/79812)（Teams 懒安装）、[#79813](https://github.com/nousresearch/hermes-agent/pull/79813)（cron 锁超时）、[#79809](https://github.com/nousresearch/hermes-agent/pull/79809)（依赖漏洞修补）、[#77857](https://github.com/nousresearch/hermes-agent/pull/77857)（新桌面会话归入 Home 项目）。

## 6. 功能请求与路线图信号

**Telegram Bot API 10.2 全面对齐（最强信号）**
[meta #78791](https://github.com/nousresearch/hermes-agent/issues/78791)
约 24 个功能缺口 issue，覆盖：支付与 Stars 记账（[#78775](https://github.com/nousresearch/hermes-agent/issues/78775)）、礼物 API（[#78776](https://github.com/nousresearch/hermes-agent/issues/78776)）、Passport（[#78779](https://github.com/nousresearch/hermes-agent/issues/78779)）、WebApp（[#78778](https://github.com/nousresearch/hermes-agent/issues/78778)）、游戏（[#78777](https://github.com/nousresearch/hermes-agent/issues/78777)）、内联模式（[#78774](https://github.com/nousresearch/hermes-agent/issues/78774)）、回复键盘（[#78780](https://github.com/nousresearch/hermes-agent/issues/78780)）、bot 身份/资料（[#78783](https://github.com/nousresearch/hermes-agent/issues/78783)）、付费广播（[#78689](https://github.com/nousresearch/hermes-agent/issues/78689)）、批量删除/转发（[#78692](https://github.com/nousresearch/hermes-agent/issues/78692)/[#78693](https://github.com/nousresearch/hermes-agent/issues/78693)）等。多个 issue 带 `area/billing` 标签，**商业化能力（Stars 支付、礼物、订阅）是明确方向**。

**内置记忆生命周期管理（[#78307](https://github.com/nousresearch/hermes-agent/issues/78307)）**
请求为 MEMORY.md/USER.md 增加检查、健康度、去重、冲突检测、待处理队列清理等一等公民维护能力；带 `needs-decision` 标签，等待维护者拍板。

**cron 技能强制（[#79808](https://github.com/nousresearch/hermes-agent/pull/79808)）**
新增 `cron.required_skills` 配置，防止创建的任务缺少输出所依赖的技能——已有实现，大概率进入下一版本。

**god-file 拆分常态化（[epic #78647](https://github.com/nousresearch/hermes-agent/issues/78647)）**
「所有 god-file 必须拆分、永不回退」已成为仓库政策，后续版本将持续看到 web_server.py、cli.py、gateway/run.py 等巨型文件的切片输出。

## 7. 用户反馈摘要

- **阻断性痛点**：[#77780](https://github.com/nousresearch/hermes-agent/issues/77780) 用户直指崩溃导致「所有终端命令不可用」，且问题源于 heredoc/payload 中的路径 token 化——安全扫描逻辑反而成为可用性瓶颈。
- **成本感知误导**：[#79220](https://github.com/nousresearch/hermes-agent/issues/79220) 用户反馈，使用低于 ~$1/Mtok 的模型时每次成本显示 `~$0.00`，「计算是对的，但读数是错的」，影响对 token 消耗的真实感知。
- **会话隔离担忧**：[#71941](https://github.com/nousresearch/hermes-agent/issues/71941) 用户担心委托子任务的上下文通过共享终端快照「泄露」给后续普通调用，涉及多任务场景下的状态污染。
- **开发者体验**：[#79810](https://github.com/nousresearch/hermes-agent/pull/79810) 反馈 Windows 主机上 `ui-tui` 测试假定 POSIX 路径分隔符、桌面端测试硬编码 en-US Intl 输出，导致非英文/非 POSIX 环境开发与 CI 失败——平台兼容性仍是贡献者门槛。
- **架构共识**：[#54962](https://github.com/nousresearch/hermes-agent/issues/54962)/[#78647](https://github.com/nousresearch/hermes-agent/issues/78647) 评论区对 god-file 拆分高度认同，「858KB 的 run.py 无法审查、无法测试」是社区对巨型文件的普遍不满，重构是当前最受关注的工程质量议题。
- **合规性诉求**：[#78784](https://github.com/nousresearch/hermes-agent/issues/78784) 指出 `setMyShortDescription` 被误用为在线/离线状态指示器，违反 Telegram API 文档行为——用户不仅要求功能补齐，还在意「与官方 API 契约一致」。

## 8. 待处理积压

以下 PR/Issue 长时间未获合并或决策，建议维护者优先处理：

| 项目 | 创建时间 | 等待天数 | 说明 |
|---|---|---|---|
| [PR #69242](https://github.com/nousresearch/hermes-agent/pull/69242) | 07-22 | 15 天 | P2，Discord 斜杠命令绕过 profile_routes，多风险标签 |
| [Issue #54962](https://github.com/nousresearch/hermes-agent/issues/54962) | 06-29 | 38 天 | 11 评论持续活跃，gateway/run.py 拆分，无维护者回应记录 |
| [PR #73363](https://github.com/nousresearch/hermes-agent/pull/73363) | 07-28 | 9 天 | P2，cron multiplex 投递错位 |
| [PR #73608](https://github.com/nousresearch/hermes-agent/pull/73608) | 07-28 | 9 天 | P2，桌面端会话读取陈旧状态 |
| [PR #73093](https://github.com/nousresearch/hermes-agent/pull/73093) | 07-28 | 9 天 | P2，MiniMax 兼容性，阻断 9Router 用户 |
| [PR #75352](https://github.com/nousresearch/hermes-agent/pull/75352) | 07-31 | 6 天 | P2，WAL/文件描述符泄漏 |
| [PR #76219](https://github.com/nousresearch/hermes-agent/pull/76219) | 08-01 | 5 天 | P2 安全，磁盘清除风险，建议走安全评审通道 |

**健康度提示**：过去 24 小时 50 条 Issue/PR 涌入、0 合并、0 关闭，叠加上述两周未动的 PR，项目正面临「提交热、评审冷」的瓶颈。建议维护者优先合并高 P2 安全/稳定性修复（[#76219](https://github.com/nousresearch/hermes-agent/pull/76219)、[#73363](https://github.com/nousresearch/hermes-agent/pull/73363)、[#75352](https://github.com/nousresearch/hermes-agent/pull/75352)），并对 `needs-decision` 标签的 [#78647](https://github.com/nousresearch/hermes-agent/issues/78647)、[#78307](https://github.com/nousresearch/hermes-agent/issues/78307)、[#78791](https://github.com/nousresearch/hermes-agent/issues/78791) 给出方向性决策，避免战役式贡献积压成新的技术债。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-08-06

## 1. 今日速览

PicoClaw 今日无新 Issue 提交、无新版本发布，核心活跃集中在 Pull Request 通道：共 4 条 PR 更新，其中 1 条已关闭（#926），3 条仍处于待合并状态。项目整体活跃度中等偏低，但 #926 的合并意味着 Anthropic OAuth 登录支持已正式落地，是一个值得关注的里程碑。此外，一条新的 lockfile 修复 PR（#3318）和两条长期未合并的功能 PR（#3200、#1951）均在今日有更新，说明维护者正在推进积压工作，但整体评审节奏仍偏慢。

## 3. 项目进展

**今日合并/关闭：**

- [PR #926: feat(auth): add Anthropic OAuth setup-token login](https://github.com/sipeed/picoclaw/pull/926) — 已关闭（合并）
  经过约 5 个月的开发与讨论，Anthropic OAuth setup-token（`sk-ant-oat01-*`）登录支持正式合并。该 PR 新增了 `--setup-token` 启动参数与交互式登录菜单，并为 `auth status` 接入 Anthropic usage endpoint，可展示 5 小时及 7 天的 token 使用量，同时支持 OAuth token 的流式调用。这是对认证模块的重要增强，拓展了非 API Key 用户的使用路径。

**项目整体推进评估：**

- 认证能力：Anthropic OAuth 支持落地，丰富多 provider 登录方式。
- 工程质量：新的 lockfile 修复 PR 正在处理中，但尚未合并。
- 路线图：fallback chain 等前瞻性功能已提交但仍在等待合并，说明内核/API 侧仍在持续演进。

## 4. 社区热点

今日无高评论量或高反应数的 Issue/PR（评论与 👍 数据均未提供）。从 PR 性质判断，以下两个条目最受社区关注：

- [PR #926: Anthropic OAuth setup-token 登录](https://github.com/sipeed/picoclaw/pull/926)（已合并）— 认证方式是开发者高频需求，该功能将显著降低 Anthropic 用户的接入门槛，其合并是社区期待的结果。
- [PR #3318: 修复 pnpm-lock.yaml 解析错误](https://github.com/sipeed/picoclaw/pull/3318)（新提交）— 直接阻断 web 前端依赖安装，属于影响开发体验的即时问题，预计会吸引相关用户关注和测试。

## 5. Bug 与稳定性

**今日报告的高优先级 Bug：**

- **pnpm-lock.yaml 损坏（中高严重度）** — [PR #3318](https://github.com/sipeed/picoclaw/pull/3318) 指出 `web/frontend/pnpm-lock.yaml` 中 `semver@7.8.5` 被重复声明，导致 pnpm 报 `ERR_PNPM_BROKEN_LOCKFILE` 并拒绝安装依赖。
  - 影响范围：web 前端开发环境构建受阻。
  - 状态：已有修复 PR（去除重复映射键），但尚未合并。

**回归情况：** 今日无其他新报告的崩溃、回归或安全漏洞。该 issue 是唯一活跃的稳定性修复点，建议优先安排合并。

## 6. 功能请求与路线图信号

结合现有 PR，以下功能需求正在被积极实现：

- **可配置默认 fallback 链** — [PR #3200: feat(models): add configurable default fallback chain](https://github.com/sipeed/picoclaw/pull/3200)（2026-07-01 提交，仍 open）
  用户可在 web UI 中设置默认模型、添加/排序 fallback 模型，并通过后端 API 持久化整条链路。这一功能直接回应了"模型不可用时自动降级"的常见诉求，预计会被纳入近期版本。

- **Anthropic OAuth 登录** — [PR #926](https://github.com/sipeed/picoclaw/pull/926) 已合并，未来可能在 CLI 与 `auth status` 中进一步扩展其他 provider 的 OAuth 支持。

- **安装脚本统一管理** — [PR #1951: chore: move installation scripts from docs repo to here](https://github.com/sipeed/picoclaw/pull/1951) 已提交约 4 个月，旨在将文档仓库中的安装脚本迁移至主仓库，简化用户获取安装方式的路径，属于工程效率类的改进信号。

**路线图判断：** 模型 fallback 链是当前最明确的功能方向；安装脚本迁移若合并，将改善新用户的上手体验。

## 7. 用户反馈摘要

今日未提供 Issue/PR 评论数据，暂无法提炼直接的文字反馈。从 PR 描述中可以推断出以下用户诉求：

- **降低认证复杂度**（#926）：用户需要除 API Key 外的替代认证方式，特别是对于使用 Anthropic 官方 OAuth 工作流的开发者，setup-token 登录可避免手动管理 Key 的安全风险。
- **修复开发环境阻塞**（#3318）：lockfile 损坏直接阻止 `pnpm install`，影响前端贡献者的本地开发效率，属于明确的"痛点修复"反馈。
- **灵活的多模型管理**（#3200）：用户在 UI 层面期望更直观地配置模型优先级与降级策略，说明当前模型切换机制尚不够灵活。

## 8. 待处理积压

以下 PR 已存在较长时间且尚未合并，建议维护者关注：

- [PR #1951: chore: move installation scripts from docs repo to here](https://github.com/sipeed/picoclaw/pull/1951) — 创建于 2026-03-24，已开放约 4.5 个月。属于低风险、高价值的工程改进（安装脚本迁移），长期未合并可能影响新用户获取稳定安装方式。

- [PR #3200: feat(models): add configurable default fallback chain](https://github.com/sipeed/picoclaw/pull/3200) — 创建于 2026-07-01，已开放约 1 个月。该功能与 web UI 强相关，涉及前后端 API 改动，需要充分的代码评审和测试，建议明确排期。

- [PR #926](https://github.com/sipeed/picoclaw/pull/926) 虽已合并，但其从 2026-02-28 到 2026-08-05 经历了约 5 个月的开放期，侧面反映 PR 评审链路偏长，可能成为社区贡献的瓶颈。

---

**报告总结：** PicoClaw 今日状态稳定，无新 Issue 与版本发布，但完成了 Anthropic OAuth 登录的重要合并，并提交了 lockfile 修复。项目功能演进方向清晰（fallback 链、OAuth 扩展），但长期开放 PR 的积压情况值得维护团队关注，建议加速对 #1951 与 #3318 的评审合并，以提升项目健康度与贡献者体验。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-08-06

> 数据窗口：2026-08-05 ~ 2026-08-06 | 数据来源：GitHub (github.com/qwibitai/nanoclaw)

## 1. 今日速览

项目过去24小时保持中等偏活跃状态：2条存量 Issue 重新激活（均有新评论），12条 PR 出现状态变化或更新（其中 2 条关闭/合入，10 条待合并），无新版本发布。值得关注的是，修复数据库双写者问题的 PR #3175 关闭后，同作者同日以相同标题重新提交 PR #3192，说明核心团队正在迭代该修复方案，但尚未形成合入闭环。新提交的 PR 集中在三块：WhatsApp 启动稳定性修复（#3191）、MCP 子进程环境变量透传修复（#3188）、以及 Tavily/add-why 等新技能扩展——整体呈现“稳定性与技能生态并行推进”的态势。

## 2. 版本发布

过去 24 小时无新版本 Release。

## 3. 项目进展

今日关闭的 PR 共 2 条：

- **[PR #3175（已关闭）](https://github.com/qwibitai/nanoclaw/pull/3175) — fix: route command-gate denials through the delivery adapter, not outbound.db**（作者：Joi）
  修复主机直接写入容器会话 `outbound.db` 造成的双写者问题（违反 `docs/db.md` 单写者规则及 session-manager 头注释中的不变量）。**注意**：该 PR 关闭后，同作者于同日提交了同标题新 PR #3192（仍开放），建议追踪重开原因及变更差异。

- **[PR #3187（已关闭/已合入）](https://github.com/qwibitai/nanoclaw/pull/3187) — fix(agent-runner): disallow built-in SendMessage so agent-to-agent messaging works**（作者：dim0627）
  禁止内置 SendMessage 被 agent-runner 调用，从而打通 agent 到 agent 的消息路径。这是 agent 间通信机制的基础性修复，对构建多 agent 协作场景有关键意义。

另有 10 条 PR 待合并，其中今日新提交的亮点包括：

- **[PR #3191](https://github.com/qwibitai/nanoclaw/pull/3191)**：为 WhatsApp `setup()` 增加超时绑定，避免会话登出时主机启动被无限期挂起。
- **[PR #3188](https://github.com/qwibitai/nanoclaw/pull/3188)**：将 OneCLI gateway 环境变量（HTTPS_PROXY、CA 信任等）透传给 stdio MCP 子进程。
- **[PR #3190](https://github.com/qwibitai/nanoclaw/pull/3190)**：新增 Tavily MCP 工具技能，扩展 agent 联网检索能力。
- **[PR #3189](https://github.com/qwibitai/nanoclaw/pull/3189)**：新增 “add-why” 技能，为单条消息提供行为归因解释。

## 4. 社区热点

今日讨论最活跃的是两条长期未关闭、但均在昨日（08-05）获得新评论的 Issue：

- **[Issue #2528 — Signal channel: image/PDF attachments unreachable from agent container](https://github.com/qwibitai/nanoclaw/issues/2528)**
  创建于 2026-05-18，昨日重新被激活。用户反馈：通过 Signal 发送的图片/PDF 到达主机后，容器内 agent 无法打开读取。该问题直接暴露了 **channel 附件在主机与容器之间的链路断裂**，是当前多模态输入支持的关键瓶颈。它与此前提交的 PR #3156（carry channel attachments to providers as structured parts）存在直接关联，建议联动评估。

- **[Issue #2006 — Fresh install on Debian 12 LXC: docker socket permission denied](https://github.com/qwibitai/nanoclaw/issues/2006)**
  创建于 2026-04-25，昨日同样有更新。用户报告在 Proxmox VE 的 LXC 容器中全新安装时，`install-docker.sh` 已执行 `usermod -aG docker`，但后续步骤依然报权限错误，且恢复路径未触发。这反映出安装脚本在 **LXC/非标准环境下的健壮性不足**。

两个热点的共同特征是：都是真实部署/使用场景中的“最后一公里”问题，且都已存在数月，用户侧诉求强烈。

## 5. Bug 与稳定性

| 严重程度 | 条目 | 问题摘要 | 处理状态 |
|---------|------|---------|---------|
| 高 | [Issue #2528](https://github.com/qwibitai/nanoclaw/issues/2528) | Signal 附件（图片/PDF）在容器内不可达，agent 无法读取 | 开放中；关联 PR #3156（channel attachments 结构化传递）或可系统解决 |
| 高 | [Issue #2006](https://github.com/qwibitai/nanoclaw/issues/2006) | Debian 12 LXC 中 docker socket 权限不足，恢复路径不触发 | 开放中，已积压超 100 天 |
| 中 | [PR #3191](https://github.com/qwibitai/nanoclaw/pull/3191) | WhatsApp `setup()` 无超时，登出会话可永久挂起主机启动 | 已有修复 PR，待合并 |
| 中 | [PR #3188](https://github.com/qwibitai/nanoclaw/pull/3188) | MCP 子进程仅继承 `getDefaultEnvironment()` 基础变量，丢失 HTTPS_PROXY/CA 信任配置 | 已有修复 PR，待合并 |
| 中 | [PR #3187](https://github.com/qwibitai/nanoclaw/pull/3187) | 内置 SendMessage 阻断 agent-to-agent 消息 | 已关闭/合入，修复完成 |

**稳定性趋势判断**：今日的 Bug 修复集中在“主机与容器边界”和“异步启动超时”两类问题上，属于基础设施级稳定性补强；其中附件链路问题（#2528 关联 #3156）是当前最值得投入的系统性缺陷。

## 6. 功能请求与路线图信号

今日提交的功能型 PR 释放了以下路线图信号：

- **[PR #3190 — Tavily MCP 工具技能](https://github.com/qwibitai/nanoclaw/pull/3190)**：为 agent 增加联网搜索工具，指向“工具调用 + 信息检索”的能力扩展方向。
- **[PR #3189 — add-why 技能](https://github.com/qwibitai/nanoclaw/pull/3189)**：为单条消息提供“发生了什么”的归因解释，属于可观测性/调试能力，与“行为透明化”的 Agent 演进方向一致。
- **[PR #3050 — Dial 渠道支持](https://github.com/qwibitai/nanoclaw/pull/3050)**（7/14 创建，仍开放）：在 channel picker 中新增 Dial 渠道，配合 `runChannelSkill` 模型，表明社区正在持续拓展“渠道 × 技能”的组合矩阵。
- **[PR #3186 — host seams for skill-owned capabilities](https://github.com/qwibitai/nanoclaw/pull/3186)**：重构技能对宿主能力的访问方式，为后续更多第三方技能安全接入奠定架构基础。

**判断**：Tavily、add-why、Dial 三个技能/渠道 PR 若合入，将进一步强化 NanoClaw 的“多渠道接入 + 可扩展技能”生态定位，预计会成为下一版本的功能亮点。

## 7. 用户反馈摘要

从今日活跃的 Issue 中可提炼两点真实用户痛点：

- **多模态附件的“最后一公里”断裂（#2528）**：用户遵循指引完成 Signal 安装，从手机发送图片后，期望 agent“看到”这张图（原话 imply: “can you see this image?”），但附件在容器侧不可达。这类反馈说明 **容器隔离设计与实际多媒体交互场景存在冲突**，用户对 agent 多模态感知能力的预期已高于当前实现。

- **安装脚本在虚拟化嵌套环境下的挫败感（#2006）**：用户在 Proxmox LXC 这一常见家庭实验室/自托管环境部署时遇挫，脚本显示“已添加 docker 组”，但后续步骤仍失败。这类问题对项目口碑影响较大，因为**安装体验是第一印象**，且 LXC/嵌套容器用户往往是高活跃的早期采用者。

**满意点**：今日无新的正面反馈数据；从 PR 活跃度推测，核心贡献者（如 glifocat、Joi）对代码规范、单写者规则等工程约束保持高度一致，内部协作质量稳定。

## 8. 待处理积压

以下长期未关闭/未合入条目值得维护团队优先关注：

| 条目 | 创建时间 | 积压时长 | 状态说明 |
|------|---------|---------|---------|
| [Issue #2006](https://github.com/qwibitai/nanoclaw/issues/2006) Debian 12 LXC docker 权限 | 2026-04-25 | ~103 天 | 昨日有更新，安装脚本健壮性问题，建议纳入 v2 安装器修复计划 |
| [PR #2346](https://github.com/qwibitai/nanoclaw/pull/2346) 未知斜杠命令按普通聊天处理 | 2026-05-08 | ~90 天 | formatter 对未知命令分类错误导致响应被丢弃，影响 SDK 兼容性 |
| [Issue #2528](https://github.com/qwibitai/nanoclaw/issues/2528) Signal 附件不可达 | 2026-05-18 | ~80 天 | 昨日重新激活，与 PR #3156 强相关，建议提高评审优先级 |
| [PR #3050](https://github.com/qwibitai/nanoclaw/pull/3050) Dial 渠道支持 | 2026-07-14 | ~23 天 | 新渠道功能请求，涉及 channel picker 与 wizard 模型变更，合入需核心团队确认 |
| [PR #3175 → #3192](https://github.com/qwibitai/nanoclaw/pull/3192) command-gate denial 路由修复 | 2026-08-02 | 原 PR 关闭后同日重开 | 需确认 #3175 关闭原因及 #3192 的差异，避免修复方案反复无法合入 |

**维护者提醒**：#3192 是当前唯一指向数据库单写者规则的修复 PR，其反复重开可能意味着方案尚未满足核心团队的架构要求。考虑到它同时关系到 `docs/db.md` 不变量和 command-gate 拒绝路径的正确性，建议在近期评审中明确阻塞项，给出收敛结论。同时，#3156（channel attachments）是解除 #2528 用户痛点的关键路径，建议与 #2528 联动排期。

---

*本日报由 AI 分析师自动生成，数据截至 2026-08-06。所有链接均指向 GitHub 原始 Issue/PR，可点击查看详情。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

好的，这是 NullClaw 项目 2026-08-06 日的项目动态日报。

---

## NullClaw 项目日报 — 2026-08-06

### 1. 今日速览

过去 24 小时项目活跃度中等偏上，核心聚焦于**稳定性修复**。共提交 2 个待合并 PR，均由贡献者 `raskevichai` 提交，分别针对**运行时栈溢出风险**与**渠道轮询线程假死**两个已知问题进行根因修复。暂无新 Issue 报告，无新版本发布，说明社区当前处于问题消化与补丁整合阶段。两个 PR 均针对明确的崩溃/静默故障场景，修复路径清晰，项目整体健康度良好。

---

### 3. 项目进展

今日无 PR 被合并或关闭，但有两个针对关键缺陷的修复 PR 处于待合并状态，标志着项目正从"问题发现"阶段迈入"修复落地"阶段。

- **PR #985 — 提升 Agent 回合路径线程栈空间至 16 MiB**
  - 状态：待合并
  - 针对问题：[#976](https://github.com/nullclaw/nullclaw/issues/976)
  - 核心修复：`SESSION_TURN_STACK_SIZE` 此前被错误别名为 `HEAVY_RUNTIME_STACK_SIZE`（2 MiB），导致所有执行 `SessionManager.processMessage*()` 与 `Agent.turn()` 的线程栈过小，可能引发深层递归或复杂消息处理时的栈溢出。此 PR 将 turn 路径独立为 16 MiB 栈，消除运行时崩溃隐患。
  - 意义：修复了 Agent 核心执行链路的稳定性风险，是保障长时间运行与复杂对话场景的重要补强。
  - 链接：[nullclaw/nullclaw#985](https://github.com/nullclaw/nullclaw/pull/985)

- **PR #984 — 允许轮询失败淘汰失效的渠道轮询线程**
  - 状态：待合并
  - 针对问题：[#972](https://github.com/nullclaw/nullclaw/issues/972)
  - 核心修复：Telegram 与 Matrix 渠道在空闲一夜后进入静默状态，即使 `nullclaw agent` 仍在回答，渠道也无法收发消息，只能通过完全重启网关恢复。根因在于监督循环（`supervisionLoop`）对该场景存在结构性盲区，无法识别死掉的轮询线程。此 PR 让轮询失败可触发线程淘汰与重建机制。
  - 意义：修复多渠道长期运行的可靠性问题，避免用户"失联"感知，是提升生产环境可用性的关键改进。
  - 链接：[nullclaw/nullclaw#984](https://github.com/nullclaw/nullclaw/pull/984)

---

### 4. 社区热点

今日无高互动量的 Issue 或 PR 讨论（评论数据未显示），但两个呈交的 PR 均直接回应了用户报告的问题：

- PR #985 直指 **AI Agent 在复杂任务处理中可能崩溃**的问题；
- PR #984 直指 **Telegram/Matrix 渠道空闲后失联**的问题。

这两个问题均属于用户高频场景（过夜后机器人失联、复杂任务崩溃），虽无评论区热议，但 issue 的关闭引用与 PR 的快速提交反应了用户痛点的真实性。相关讨论载体可关注：
- [Issues #976](https://github.com/nullclaw/nullclaw/issues/976) — Agent 回合栈溢出问题
- [Issues #972](https://github.com/nullclaw/nullclaw/issues/972) — Telegram/Matrix 渠道静默问题

---

### 5. Bug 与稳定性

今日报告 2 个已定位根因的稳定性缺陷，均在修复 PR 中。按严重程度排列：

| 严重度 | 问题描述 | 对应 PR |
|-------|---------|--------|
| **高** | **Agent 回合路径栈空间不足（2 MiB）**：处理高复杂度对话或多层 Agent 调用时存在栈溢出崩溃风险，影响核心对话功能稳定性。 | [#985](https://github.com/nullclaw/nullclaw/pull/985) 待合并 |
| **高** | **Telegram/Matrix 渠道轮询线程静默失效**：空闲后渠道断连且 supervisor 无法感知，用户消息无法触达 Agent，需手动重启网关。 | [#984](https://github.com/nullclaw/nullclaw/pull/984) 待合并 |

两项修复均已提交 PR，等待维护者 review。预计合并后项目稳定性将显著提升。

---

### 6. 功能请求与路线图信号

今日无新功能请求提交。但从技术修复中可提取两个潜在的演进方向：

- **可配置栈大小需求**：PR #985 将 turn 路径栈固定提升至 16 MiB，但不同部署场景（如低内存设备）可能需要动态调整。未来或将推动栈大小成为可配置项，满足多样化的部署需求。
- **渠道监督机制增强**：PR #984 修复了轮询线程失效的检测盲区，未来可延伸至更广泛的健康检查体系，例如对 webhook 渠道、数据库连接池等其它资源的自动化监督恢复，有望成为项目稳定性发展的下一里程碑。

---

### 7. 用户反馈摘要

由于今日无新 Issue 评论产生，以下反馈依据相关 PR 所引用的问题（#976、#972）描述进行提炼：

- **痛点一：长时间运行后渠道失联**。用户报告 Telegram/Matrix 渠道在闲置一夜后彻底静默，即使重启 Agent 进程也无法恢复，必须暴力重启整个网关。表现出对"过夜闲置"这类常规场景下稳定性的重视。
- **痛点二：复杂任务下 Agent 崩溃风险**。问题 #976 暗示高复杂度任务可能触发栈溢出，导致会话中断或数据丢失，提示核心执行链路需要更充裕的资源分配。

用户总体诉求聚焦于**长稳运行**与**低维护成本**，这也符合个人 AI 助手作为后台常驻服务的定位。

---

### 8. 待处理积压

以下为当前待维护者关注的 PR，均未经过 review，存在较早合并价值：

- **PR #984**（待 merge）— 修复 telegram/matrix 渠道静默问题，直接解决用户可感知的严重故障。建议优先评审。
  - 链接：[#984](https://github.com/nullclaw/nullclaw/pull/984)
- **PR #985**（待 merge）— 修复 Agent 核心执行线程栈风险，预防潜在崩溃。可与 #984 一并处理。
  - 链接：[#985](https://github.com/nullclaw/nullclaw/pull/985)

两项修复均来自同一贡献者，涉及运行时与渠道两个不同模块，建议维护者尽快安排 review，以免修复分支过期冲突。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-08-06

## 1. 今日速览

过去 24 小时项目保持高强度迭代：43 条 Issue 更新（33 条活跃、10 条关闭）与 50 条 PR 更新（32 条待合并、18 条已合并/关闭）显示出 v1.1.0 RC 阶段的密集开发与 QA 节奏。最新候选版本 ironclaw-v1.1.0-rc.1 于 8 月 3 日发布，核心工作是扩展触达能力（外部 MCP 注册、IronHub 深链接、跨渠道附件、Slack 斜杠命令）。值得注意的信号包括：针对 Railway 实例的 QA bug bash 密集报出多个 P1/P2 状态校验类 Bug；CI 回归门禁（#7209）与 PR 审批流程（#7231）问题开始受到关注；新贡献者 theredspoon 一次性提交了 5 个加固型 PR 组成的堆栈。整体健康度良好，但 32 条 PR 待合并的队列与多个长期开放的 Epic 积压需要关注。

## 2. 版本发布

**ironclaw-v1.1.0-rc.1**（2026-08-03）— 1.0.0 之后的首个发布候选版本。

Release Notes 要点：
- **扩展触达（Extension reach）**：
  - 注册任意托管 MCP 服务器
  - 通过 IronHub 深链接安装扩展
  - 支持跨渠道的持久化文件附件（durable file attachments）
  - 新增 Slack `/ironclaw` 斜杠命令
- 对失败可读性（failure legibility）进行了广泛改进。

⚠️ 注意：Release Notes 未提及破坏性变更或迁移步骤。作为 1.0.0 后的首个 RC，建议升级前在预发环境重点验证 MCP 注册、跨渠道附件投递与 Slack 命令三条新链路。

链接: https://github.com/nearai/ironclaw/releases

## 3. 项目进展

今日合并/关闭的重要 PR 与 Issue：

- **PR #6831（已关闭）标准化消息框架落地** — 新增 host-owned 标准化消息框架：16 个核心操作、13 个保留操作名、规范化输入/输出 JSON Schema、host 撰写的描述核心，以及 12 码规范错误分类（`ironclaw_host_api::messaging`），并为 v3 增加 `standard_op` 清单字段。这是 Reborn 架构的一块重要地基。
  https://github.com/nearai/ironclaw/pull/6831

- **PR #7261（已关闭）CI 修复：release canary 临时路径** — 修复 #7256 引入的 tag-only release 工作流零任务失败问题，将 canary 证据目录从 `$RUNNER_TEMP` 解析并显式传递给 gate/scrub/upload 步骤，同时扩展了工作流 sabotage 契约测试。
  https://github.com/nearai/ironclaw/pull/7261

- **Issue #7204（已关闭）WebUI 聊天输入框聚焦修复** — 解决点击 "+ New" 或打开线程后 composer 未聚焦、以及 focus-within 焦点环误触发的两个 UX 问题。
  https://github.com/nearai/ironclaw/issues/7204

- **Issue #741（已关闭）Bedrock 流式支持落地** — 为 AWS Bedrock provider 增加 `converse_stream()` 流式 API 支持，使 web gateway 与 TUI 获得实时 token 流。该 Issue 自 3 月 8 日创建，历时约 5 个月关闭，属长期能力补齐。
  https://github.com/nearai/ironclaw/issues/741

- **E2E 覆盖阶段性收口** — 多个 QA/E2E Epic 今日关闭：**#7053**（补齐首次运行 LLM 引导、项目生命周期与成员隔离、自动化暂停/恢复/删除三条关键 E2E）、**#7056**（自动化生命周期完整链路 E2E：create→rename→pause→resume→delete）、**#4632**（Reborn WebUI 端到端缺口与 CI 稳定化）、**#6892** 与 **#6394**（两周 Dogfooding & QA bug fixing Epic）。
  https://github.com/nearai/ironclaw/issues/7053
  https://github.com/nearai/ironclaw/issues/7056
  https://github.com/nearai/ironclaw/issues/4632

- **Issue #7244（已关闭）主分支 CI 失败修复（20260804）**。
  https://github.com/nearai/ironclaw/issues/7244

综合来看，项目在消息框架、WebUI 体验、云厂商 LLM 流式接入和 E2E 测试基建四个方向同时推进，CI 稳定性修复密集出现，表明团队正在为 v1.1.0 正式版做发布质量收尾。

## 4. 社区热点

- **#3036 [EPIC] Configuration-as-Code for IronClaw Reborn**（评论 7，👍 1）— 今日讨论最活跃。核心诉求：租户管理员与场景使用者希望以声明式方式配置 IronClaw，而目前仍需手工混编 `.env`、`.system/...` 工作区文档、settings JSON、扩展安装与运行时 flag——无 schema、无 diff、无审计轨迹。该 Epic 自 4 月 28 日创建至今持续 3 个月，8 月 5 日仍有新讨论，说明配置治理是社区长期痛点。
  https://github.com/nearai/ironclaw/issues/3036

- **#7194 feat(outbound)：将管理员允许的共享 channel 设为外发投递目标**（评论 3）— 讨论聚焦投递层缺口：Agent 可以枚举 Slack channel 并调用 `slack.send_message`，但无法将任意 channel 设为 run 最终回复的合法投递目标，宿主侧唯一受控的外发路由少了一环。
  https://github.com/nearai/ironclaw/issues/7194

- **#6257 PDF 附件 mime_type 报错**（评论 2）— 用户 Michael Kelly（Slack #x-ai-product-feedback）报告发送/生成 PDF 时出现 `Invalid value (attachments.mime_type)`，已持续开放两周以上，影响文件类工作流。
  https://github.com/nearai/ironclaw/issues/6257

- **#7209 CI 回归门禁无法识别 node:assert 风格断言**（评论 2）— 前端测试套件约 99% 使用 `node:assert` 风格，但回归门禁的 `has_meaningful_typescript_assertion` 无法识别，导致前端 PR 无论测试质量多高都会被 `Regression test enforcement` 拦截。
  https://github.com/nearai/ironclaw/issues/7209

## 5. Bug 与稳定性

按严重程度排列：

**P1（高严重度，QA bug bash 报告，暂无 fix PR）**
- **#7247 Agent 谎称 GitHub 已连接** — 未验证真实认证状态便告知用户"无需进一步连接"，下一次 GitHub 调用随即失败，对用户信任损害大。
  https://github.com/nearai/ironclaw/issues/7247
- **#7246 Agent 幻觉自动化运行状态** — Automations 页面明确显示 "No automations yet"，Agent 却编造"BTC 新闻摘要自动化正在运行并已发送 Telegram"。
  https://github.com/nearai/ironclaw/issues/7246

**P2（中严重度）**
- **#7248 无效自定义 MCP endpoint 被接受** — 未经验证的 MCP endpoint 被注册为"安装成功"，之后模型反复尝试发现工具、陷入困惑，run 以失败告终。
  https://github.com/nearai/ironclaw/issues/7248
- **#7251 Agent 猜测 MCP 认证类型** — 不探测 endpoint 也不发起认证流程，反而要求用户猜测并选择认证方式。
  https://github.com/nearai/ironclaw/issues/7251
- **#7250 DeepWiki MCP 对网络错误给出误导性认证建议** — 工具实际返回网络错误，Agent 却臆测认证、URL、端点不可达等原因。
  https://github.com/nearai/ironclaw/issues/7250
- **#7249 Slack DM 执行结果被投递到 Telegram** — 消息包含 Slack 特定收件人信息、触发事件元数据与 JSON 附件，存在跨渠道数据泄漏风险。
  https://github.com/nearai/ironclaw/issues/7249
- **#7254 无法访问 Slack 反馈线程附件** — 产品反馈 triage 中用户按要求上传报告/复现材料，IronClaw 无法下载或读取。
  https://github.com/nearai/ironclaw/issues/7254

**其他**
- **#6257 PDF 附件 mime_type 校验失败**（7 月 19 日报告，持续开放）。
  https://github.com/nearai/ironclaw/issues/6257
- **#7209 CI 回归门禁误伤前端 PR**（已识别，待修复）。
  https://github.com/nearai/ironclaw/issues/7209
- **#7231 评论写着 "verdict: APPROVE" 但未提交真实 GitHub approval** — PR 在合并队列被阻塞，当前影响 `skills/` 目录相关 PR。
  https://github.com/nearai/ironclaw/issues/7231
- **PR #7259（修复中）内部文档泄露至公开站点** — `docs/design/` 与 `docs/research/` 从未加入 `docs/.mintignore`，内部文档以"隐藏页面"形式在公开 Mintlify 站点可被 URL 直达；修复 PR 已提交（冻结 .mintignore + CI 门禁 + 内部文档归拢）。
  https://github.com/nearai/ironclaw/pull/7259

**已修复/关闭**：#7204（composer 聚焦）、#7244（主分支 CI 失败）、PR #7261（release canary 路径）。

**趋势观察**：本轮 QA bug bash 集中暴露共性问题——Agent 倾向于"自信地编造状态"而非先验证事实（GitHub 连接、自动化状态、MCP 能力、网络错误归因）。这指向模型工具调用层缺少"状态校验优先"的约束，建议在 v1.1.0 正式版前系统性处理。

## 6. 功能请求与路线图信号

- **配置即代码（#3036）** — 声明式租户蓝图（tenant blueprints）与用例 harness（use-case harnesses），长期 Epic 仍有新讨论，暂无对应 PR，预计是 Reborn 后续重点方向。
  https://github.com/nearai/ironclaw/issues/3036

- **IronHub 集成（#6731，v1.1.0 Epic）** — 将 Agent 工具/技能集从构建时固定列表变为可扩展市场，与 RC.1 已落地的"IronHub 深链接安装"能力呼应，处于分阶段实施中。
  https://github.com/nearai/ironclaw/issues/6731

- **技能体系升级（#6941，v1.1.0 Epic）** — 模型可自建、发现、选择并使用高价值技能。对应 PR **#6938**（模型选择技能，而非关键词打分器）与 **#6745**（已安装与 Agent 自建技能可选、可装、可用）均在待合并队列，是当前最大的 PR 堆栈之一。
  https://github.com/nearai/ironclaw/issues/6941
  https://github.com/nearai/ironclaw/pull/6938
  https://github.com/nearai/ironclaw/pull/6745

- **Storybook + AI-first Design System（#7038，suggested_P0）** — 配套 PR #7039（Phase 1 集成）、#7043（Phase 2 治理文档）与设计系统提案包 #7257 已就绪，P0 优先级说明 WebUI 组件化与 AI 交互规范是当前产品重点。
  https://github.com/nearai/ironclaw/issues/7038

- **外发投递目标扩展（#7194）** — 与 PR #7157（显式 channel 投递工具：双通道模型、删除投递启发式）方向一致，可能被纳入 v1.1.x 迭代。
  https://github.com/nearai/ironclaw/issues/7194
  https://github.com/nearai/ironclaw/pull/7157

- **Web Debug Inspector（#7218）** — 仅操作者可见，通过 `?debug=true` 启用，提供 Prompt 构造、实时 Agent 活动、模型用量与工具执行三个视图。
  https://github.com/nearai/ironclaw/issues/7218

- **沙箱安全细化（PR #7214）** — 新增 Docker 与 Railway 显式用户沙箱 profile，工作区/检查点按租户+用户隔离，每个命令运行在全新非 root Python worker 中，是安全加固的重要信号。
  https://github.com/nearai/ironclaw/pull/7214

- **MCP 注册隐私与生命周期（PR #7253）** — 托管 MCP 注册保持"仅定义、私有"：注册仅收录 catalog 定义，不创建安装/设置/激活/发布状态；结合 #7248/#7251 等 Bug，MCP 生命周期管理是当前重点打磨区。
  https://github.com/nearai/ironclaw/pull/7253

## 7. 用户反馈摘要

- **PDF 附件功能受损（#6257）** — 用户 Michael Kelly 在 Slack 产品反馈频道报告发送/生成 PDF 报 `Invalid value (attachments.mime_type)`，怀疑与附件类型检测或生成链路有关。该问题自 7 月 19 日至今未修复，直接影响文件类工作流。
  https://github.com/nearai/ironclaw/issues/6257

- **反馈流程断点（#7254）** — 用户在 Slack 反馈线程中按要求上传了报告/复现材料，IronClaw 却无法读取附件，导致 triage 流程中断。"用户照做了，工具接不住"的典型场景。
  https://github.com/nearai/ironclaw/issues/7254

- **对 Agent 状态的信任危机（#7246、#7247）** — QA 用户连续遇到 Agent 编造"自动化已运行"与"GitHub 已连接"，且与页面真实状态直接矛盾。这类"自信的错误"比"诚实的未知"对信任伤害更大，是当前最需根治的体验问题。
  https://github.com/nearai/ironclaw/issues/7246
  https://github.com/nearai/ironclaw/issues/7247

- **跨渠道投递串线（#7249）** — 用户发起 Slack DM 后，执行摘要却出现在 Telegram 聊天中，且携带 Slack 专属元数据与 JSON 附件，暴露多通道投递路由的隔离缺陷。
  https://github.com/nearai/ironclaw/issues/7249

- **审批流程困惑（#7231）** — PR review 文本写着 "APPROVE"，但 GitHub 合并要求从未看到真实 approval，PR 无法进入合并队列。流程信号不一致显著拖慢合并节奏。
  https://github.com/nearai/ironclaw/issues/7231

## 8. 待处理积压

**长期开放的重要 Issue**
- **#3036 配置即代码 Epic**（2026-04-28 创建，3 个月+）— 7 条评论、1 👍，社区持续关注但无对应 PR，建议明确规划归属或做阶段性拆分。
  https://github.com/nearai/ironclaw/issues/3036
- **#6257 PDF mime_type Bug**（2026-07-19 创建，2 周+）— 有真实用户报告且影响明确，仍无 fix PR 关联。
  https://github.com/nearai/ironclaw/issues/6257
- **#6731 IronHub 集成 Epic**（2026-07-27 创建，v1.1.0 目标）— RC.1 已含深链接安装能力，完整 Epic 仍开放。
  https://github.com/nearai/ironclaw/issues/6731

**长期未合并的 PR 堆栈**
- **#6745 + #6938 技能体系双 PR 堆栈**（7 月 28 日 / 7 月 31 日创建，均 size XL，已排队一周以上）— #6941 Epic 核心，建议优先 review 以推动 v1.1.0 技能路线。
  https://github.com/nearai/ironclaw/pull/6745
  https://github.com/nearai/ironclaw/pull/6938
- **theredspoon 的 5 个 PR（#7027 / #7028 / #7029 / #7034 / #7048，8 月 3 日创建）** — 覆盖网络代理加固、投递状态恢复、WASM 诊断清理等，均为 low risk 且来自新贡献者；#7028→#7029、#7063→#7048 存在堆叠依赖。长期挂起可能打击新贡献者积极性，建议安排 reviewer 加速。
  https://github.com/nearai/ironclaw/pull/7027
  https://github.com/nearai/ironclaw/pull/7028
  https://github.com/nearai/ironclaw/pull/7029
  https://github.com/nearai/ironclaw/pull/7034
  https://github.com/nearai/ironclaw/pull/7048
- **#7171 技能挂载 DB 树 PR**（8 月 4 日创建，XL）— 关闭 #7168，属于 #6941 第 4 项。
  https://github.com/nearai/ironclaw/pull/7171

**流程/治理类**
- **#7231 "伪 APPROVE" 审批问题** — 直接影响 PR 合并队列效率，建议在 CI bot 层增加真实 approval 校验或文档化流程。
  https://github.com/nearai/ironclaw/issues/7231
- **#7245 reborn_services.rs 超 6,400 行** — 触发架构规则（3,000 行阈值）的拆分解耦跟踪项，属技术债。
  https://github.com/nearai/ironclaw/issues/7245

---
**健康度小结**：项目处于 v1.1.0 RC 发布后的高活跃稳定期，开发与 QA 双轮驱动。主要风险点在于（1）Agent 状态幻觉类 Bug 集中出现，建议正式版前统一治理；（2）合并队列 32 条待合并偏高，尤其是技能体系与新贡献者堆栈，review 带宽可能成为瓶颈；（3）配置即代码、IronHub 集成等长期 Epic 需明确路线图承诺。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-06

> 数据来源：github.com/netease-youdao/LobsterAI | 统计周期：2026-08-05 ~ 2026-08-06


## 1. 今日速览

- **整体活跃度：高**。过去 24 小时内有 1 个新版本发布（2026.8.5）、13 条 PR 更新、3 条 Issue 更新，项目处于密集迭代期。
- **版本迭代节奏稳定**：2026.8.5 版本带来每日签到和企业级账号隔离两项功能，另有一批体验优化和稳定性修复合入。
- **稳定性修复是今日主线**：窗口退出挂起（#2437）、OpenClaw 网关锁中毒（#2436）两个高价值稳定性问题已通过 PR 修复并合并。
- **社区反馈集中在系统提示词工程**：两个新 Issue（#2440、#2441）指向同一核心痛点——用户无法持久精简注入到新对话的系统提示词，涉及重复注入和技能开关静默失效。
- **存在两个被标记为 `[stale]` 的长期未合并 PR**（#1201、#1279/#1280/#1281），其中 #1201 关联的 bug（群名获取失败）已存在 4 个月，建议维护者尽快处理。


## 2. 版本发布

### LobsterAI 2026.8.5

- **发布时间**：2026-08-05
- **主要更新**：
  1. **新增原生每日签到体验**（PR #2408）：将"每日打卡"从 H5/远程页面迁移到客户端原生实现，推测将为后续活动运营提供更稳定的承载能力。
  2. **企业级账号隔离**（PR #2409）：将账号维度认证与服务流程隔离，预计面向企业客户的多租户/权限管控场景。
  3. **样式与细节优化**（style 类提交）：未在 Release Notes 中展开，推测为 UI 细节修正。
- **破坏性变更**：Release Notes 未标记 breaking changes。判定为增量更新，现有用户可直接升级。
- **迁移注意事项**：企业账号相关 API 有调整，企业客户需关注认证流程变更；普通用户无感知。


## 3. 项目进展

今日 13 条 PR 中 12 条已合并/关闭，主要进展集中在以下方向：

### 稳定性加固（高价值）
- **#2437** [fix(main): harden window lifecycle and shutdown against hangs] — 为 OpenAI 兼容代理和 HTML 预览服务器关闭增加 drain timer + hard deadline，解决 keep-alive 连接导致应用退出卡死的问题；主窗口激活改为等首次渲染完成，避免焦点/二开实例的 show 请求排队。**直接改善用户退出/重启体验。**
- **#2436** [fix(openclaw): prevent gateway lock poisoning from self-restart races] — 修复了两个竞态条件：LobsterAI 强杀 gateway 与锁文件写入竞态、gateway 自发重启时的竞争，锁文件被污染后每次重启最多阻塞 30 秒的问题被消除。

### 功能迭代
- **#2435** [feat(cowork): add title-bar conversation search] — 在标题栏新增会话搜索按钮，复用侧边栏搜索图标与工作流，并优化了响应式样式和查询感知导航。补齐了标题栏的会话查找能力。
- **#2408 / #2409**（随 2026.8.5 版本发布合并）：每日签到原生体验 + 企业账号认证/服务流程隔离。

### 活动运营（渲染层）
- 系列 PR（#2439、#2438、#2433、#2432）围绕"启动页积分活动海报"进行了 4 轮迭代：替换最新视觉素材、增加关闭图标、裁剪侧边白边、禁用决赛奖励自动弹窗。反应出运营活动上线前的密集打磨流程。

### 依赖更新
- #1279/#1280/#1281（dependabot）：cross-env、react-dom、vite 三个依赖 PR 被标记为 `[stale]` 后关闭，未合并，略遗憾。


## 4. 社区热点

今日活跃讨论的 Issue/PR 聚焦在 **"系统提示词工程"** 这一主题，两个新 Issue 均来自同一作者，问题描述详细且带有实测数据：

### #2441 [Bug] 技能开关按目录名写入但 OpenClaw 按 frontmatter name 匹配，导致开关静默失效；且 openclaw.json 被整文件覆盖，用户无持久精简入口
- **热度**：新建 <24h，0 评论，但问题描述非常完整。
- **核心诉求**：用户想通过"技能开关"来精简每次新对话的系统提示词，但开关按目录名匹配、OpenClaw 按 frontmatter name 匹配，不一致时开关无声失效——用户以为自己关了技能，实际没用。同时还指出 openclaw.json 被整文件覆盖，用户无法持久保留自己的精简配置。
- **信号意义**：这是"用户对系统提示词控制权"需求的重要反馈，揭示了配置同步机制的脆弱性。

### #2440 [Bug] 桌面端系统提示词重复注入：4,425 字符与 AGENTS.md 托管区逐字重复
- **热度**：新建 <24h，0 评论，含实测数据。
- **核心诉求**：桌面端每个新会话首条用户消息中注入的 `[LobsterAI system instructions]` 块与 `workspace-main/AGENTS.md` 中应用自己托管的内容有 78% 逐字重复，等于让模型把同一套指令读两遍。**直接浪费 token 且可能影响模型行为一致性。**

### #1200 [Bug] NIM 超大群消息中 teamTypeNum 硬编码错误导致群名无法正确获取
- **热度**：4 个月前创建，今日被再次更新（评论数 1），同样有对应的 fix PR #1201 挂着。
- **核心诉求**：老 bug 仍未修复，虽然一行改动即可解决，但 PR 长期搁置。


## 5. Bug 与稳定性

按严重程度从高到低排列：

| 严重程度 | Issue/PR | 描述 | 状态 |
|---------|----------|------|------|
| 🔴 高 | [#2440](https://github.com/netease-youdao/LobsterAI/issues/2440) | 系统提示词重复注入（4,425 字符与 AGENTS.md 重复 78%），浪费 token、影响模型行为 | 新报告，无 fix PR |
| 🔴 高 | [#2441](https://github.com/netease-youdao/LobsterAI/issues/2441) | 技能开关静默失效（目录名 vs frontmatter name 不匹配）+ openclaw.json 被整文件覆盖，用户无法持久精简提示词 | 新报告，无 fix PR |
| 🟡 中 | [#2436](https://github.com/netease-youdao/LobsterAI/pull/2436)（PR） | OpenClaw 网关锁文件污染，重启失败阻塞 30 秒（Windows 强杀/自重启竞态） | ✅ 已修复并合入 |
| 🟡 中 | [#2437](https://github.com/netease-youdao/LobsterAI/pull/2437)（PR） | 应用退出卡死（keep-alive socket 未释放），窗口激活异常 | ✅ 已修复并合入 |
| 🟢 低 | [#1200](https://github.com/netease-youdao/LobsterAI/issues/1200) | NIM 超大群 teamTypeNum 硬编码错误，群名获取失败（涉及 @-mention 场景群名显示） | 4 个月未修复，有 PR #1201 但未合入 |

**小结**：今日两起高严重度 bug 均为 **新报告** 且集中在提示词注入与配置持久化方向，与即将到来的 OpenClaw 集成深度增加有关。稳定性类问题（重启、退出）的修复说明维护者对基础体验的重视。但 #1200 这类低难度 bug 长期躺平，值得关注。


## 6. 功能请求与路线图信号

从今日 Issue 和合并的 PR 中，可以嗅到以下路线图信号：

- **用户对"系统提示词控制权"的需求强烈**（#2440、#2441）：连发两个 issue 指向同一件事——用户希望**持久式、细粒度地控制和精简注入给模型的系统提示词**。虽然这两个 issue 当前是 bug 态，但背后是功能缺口：
  - 技能开关应支持目录名与 frontmatter name 的容错匹配；
  - 用户对 `openclaw.json` 的本地修改应被保留（合并而非覆盖）。
  - **建议**：新增"系统提示词自定义区"或"技能管理增强"路线图项。

- **企业级能力持续铺路**（#2409 企业账号隔离，已随版本发布）：多租户账号体系是 To B 方向的重要一步。后续可能看到更多企业订阅/成员管理相关功能。

- **会话搜索增强**（#2435 标题栏会话搜索）：从"侧边栏内搜索"升级为"标题栏随时可搜"，说明会话检索是高频场景。后续可能向全局命令面板（cmd+K）方向演进。

- **活动运营组件化**：连续 5 个 PR 围绕活动海报/弹窗/签到，说明运营活动正成为产品的一等公民，可能有活动 SDK/组件化的内部趋势。


## 7. 用户反馈摘要

从今日 Issues 的作者描述和评论中，可以提炼以下真实用户声音：

- **"模型读了两遍我的指令"**（#2440）：用户用实际数据（4,425 字符、78% 重复率、trace.artifacts 中的 finalPromptText）严肃反馈提示词重复注入问题，说明用户对 token 消耗敏感，也期望模型行为可控可预期。
- **"技能开关是假的"**（#2441）：用户配置了技能开关，期望精简提示词，结果开关静默失效——用户感知为"这功能没做吧"。这种"无声失败"比显式报错更伤害信任。
- **"配置被覆盖，我改了也白改"**（#2441）：用户手动维护 openclaw.json 的配置被整文件覆盖，无法持久化自定义。体现出用户对本地优先（local-first）配置文件控制权的期待。
- **"群名获取不对，@ 机器人显示原始串"**（#1200）：超级群场景下 @机器人时群名显示原始 ID 而非群名，直接影响群聊使用体验。该问题 4 个月未修复，用户可能已产生失望情绪。
- **对比之下**：稳定性修复（#2436/#2437）合入速度很快（当天提当天合），说明维护者对"崩溃/卡死/重启失败"类问题响应积极，但对功能性 bug（#1200）处理滞后。


## 8. 待处理积压

### 长期未响应的 Issue（需维护者关注）

- **#1200** [4 个月前创建，stale] NIM 超大群消息中 teamTypeNum 硬编码错误导致群名无法正确获取
  - 一行代码即可修复，且有现成 PR #1201，却 4 个月未合入。
  - 影响真实用户（群聊 @机器人场景的群名显示）。
  - 链接：https://github.com/netease-youdao/LobsterAI/issues/1200

### 长期滞留的 PR（需决策：合入 or 关闭）

- **#1201** [4 个月前创建，stale] fix(im): teamTypeNum 硬编码修复（关联 #1200）
  - 链接：https://github.com/netease-youdao/LobsterAI/pull/1201
- **#1279** [dependabot] cross-env 7.0.3 → 10.1.0（stale 关闭，未合并）
- **#1280** [dependabot] react-dom 18.3.1 → 19.2.4（stale 关闭，未合并）
- **#1281** [dependabot] vite 5.4.21 → 8.0.9（stale 关闭，未合并）
  - 三个 dependabot PR 均被 stale 标记后关闭，但依赖升级本身的必要性未解除。React 19、Vite 8 仍在 mainline，建议评估兼容性后重新升级。

### 今日开放中但需关注

- **#2440 / #2441**：新报告，尚无 fix PR，与用户对提示词控制权的核心诉求相关，建议维护者在本周内给出回应或标注计划。


## 附：项目健康度简评

| 维度 | 评分 | 说明 |
|------|------|------|
| 迭代速度 | ⭐⭐⭐⭐⭐ | 24h 内发版 + 13 PR 合入，节奏很快 |
| 稳定性投入 | ⭐⭐⭐⭐⭐ | 高价值稳定性修复当天合入，执行力强 |
| 社区响应速度 | ⭐⭐⭐ | 新 Issue 当天无人工回应（可理解）；老 Issue #1200 响应严重迟缓 |
| 技术债管理 | ⭐⭐ | 两个 stale 高危 PR（#1201）4 个月未处理，依赖升级停滞 |
| 用户信任维护 | ⭐⭐⭐ | 新功能发布频繁，但"配置被覆盖""提示词重复"这类问题会侵蚀用户对系统透明度的信任 |

**一句话总结**：LobsterAI 正处在快速迭代的上行通道，稳定性工程扎实；但需要警惕"功能跑得快、反馈的坑填得慢"的剪刀差——尤其是本轮用户集中反馈的系统提示词控制权问题，建议尽快排期进入 2026.8.x 补丁序列。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-08-06

> 数据源：github.com/agentscope-ai/CoPaw

## 1. 今日速览

过去 24 小时项目保持**高活跃度**：Issue 侧 25 条更新（新开/活跃 19 条、关闭 6 条），PR 侧 50 条更新（待合并 29 条、合并/关闭 21 条），无新版本发布。社区反馈高度集中在**长期运行的稳定性**上——MCP 工具周期性失效、频道无重试机制、超长会话触发 400 错误等，说明用户已把 QwenPaw 当作生产级工具使用。与此同时，项目合并了等待 38 天的 LLM Fallback 全链路 PR（#5597/#5598）以及 DeepSeek thinking 修复（#6675），表明核心功能建设仍在高速推进。总体判断：项目正处于“新功能收口、稳定性问题集中暴露”的关键阶段。

## 2. 版本发布

今日无新版本发布。当前稳定版为 v2.0.1，社区中已出现 v2.1.0-beta.1 与 2.1.0b2 等预发布版本的使用反馈，但 GitHub Releases 中暂无正式通告。

## 3. 项目进展

今日合并/关闭的 21 条 PR 中，已展示条目里有 8 条完成合并，以下 4 项对项目推进有标志性意义：

- **LLM Model Fallback 全量落地**：[#5597](https://github.com/agentscope-ai/QwenPaw/pull/5597)（后端：per-agent/全局 fallback + 安全重试边界）与 [#5598](https://github.com/agentscope-ai/QwenPaw/pull/5598)（Console 配置 UI）双双合并。该功能自 6/29 开发，历经 38 天，打通了“同模型重试 → 跨模型切换 → 权限/边界控制”的完整链路，是模型可靠性方向的重要里程碑。
- **DeepSeek thinking 模式修复**：[#6675](https://github.com/agentscope-ai/QwenPaw/pull/6675)，强制 DeepSeek 多轮对话中继 `reasoning_content`，修复 #6667/#6541。来自首次贡献者，说明外部开发者已开始深入 thinking 协议细节。
- **重试逻辑统一重构**：[#3874](https://github.com/agentscope-ai/QwenPaw/pull/3874) 完成合并（自 4/27 开启，历时 101 天），为后续 SSE 流式重试、AgentScope 消息重试等系列 PR 提供了统一基础。
- **Console 错误解锁**：[#5447](https://github.com/agentscope-ai/QwenPaw/pull/5447) 修复了 console 渠道在模型/运行时错误后 UI 永久等待的问题，属用户可感知的解卡修复。

其余合并还包括应用市场统一（[#6718](https://github.com/agentscope-ai/QwenPaw/pull/6718)）、router 审计可见性（[#6713](https://github.com/agentscope-ai/QwenPaw/pull/6713)）和响应式工具类（[#5462](https://github.com/agentscope-ai/QwenPaw/pull/5462)），属于生态治理与移动端适配的基建型合并。

## 4. 社区热点

以下 Issues 在过去 24 小时讨论最活跃（PR 评论数未在数据中展示，本条仅基于 Issue 评论统计）：

1. **#6684 频道重试与健康检测**（4 评论）— [链接](https://github.com/agentscope-ai/QwenPaw/issues/6684)  
   自建 Matrix 场景下，QwenPaw 自动处理快于上游服务，失败后无重试、无健康检测，用户需在每次服务器启动后手动重存频道。诉求本质是**渠道层需要自治愈能力**。

2. **#6436 自动模型路由**（3 评论）— [链接](https://github.com/agentscope-ai/QwenPaw/issues/6436)  
   按消息难度/类型动态路由到最合适的模型，而非将每个 agent 固定绑定单一模型。该需求与 [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302)（provider 发现/路由统一）方向一致，是成本与延迟优化的核心诉求。

3. **#6732 MCP 工具周期性失效**（2 评论）— [链接](https://github.com/agentscope-ai/QwenPaw/issues/6732)  
   每隔数小时 MCP 工具全部变为“未注册”，重启 Docker 容器后恢复。是“长稳运行”类问题的一个典型代表。

4. **WeChat 通道问题族** — [#6695](https://github.com/agentscope-ai/QwenPaw/issues/6695)（2 评论，已关闭）、[#6696](https://github.com/agentscope-ai/QwenPaw/issues/6696)（2 评论）、[#6728](https://github.com/agentscope-ai/QwenPaw/issues/6728)（1 评论）  
   审批不可达 → `context_token` 被打字指示器消耗 → 中文操作标签缺失，说明 WeChat 通道正被高频使用，仍处于迭代打磨期。

以上热点的共同信号：**用户开始把 QwenPaw 当作 7×24 小时运行的生产工具，对“连接不丢、工具不失效”有刚性要求。**

## 5. Bug 与稳定性

### 今日新报告/活跃 Bug（按严重度排序）

| 严重度 | Issue | 描述 | 修复状态 |
|---|---|---|---|
| 🔴 P0 | [#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) | MCP 工具数小时后全部失效（2.0.1 stable），需重启容器恢复 | 无 fix，需排查 MCP 注册表生命周期 |
| 🔴 P0 | [#6731](https://github.com/agentscope-ai/QwenPaw/issues/6731) | model 传入 `sandbox_config` 时 `execute_shell_command` 必然崩溃（2.0.1 与 main 均存在） | 无 fix |
| 🔴 P0 | [#6697](https://github.com/agentscope-ai/QwenPaw/issues/6697) | v2.1.0b1 桌面版向子进程注入 `PYTHONHOME`，所有 python 子进程崩溃（encodings ModuleNotFoundError） | 无直接 fix；[#6669](https://github.com/agentscope-ai/QwenPaw/pull/6669) 桌面端相关修复尚未合并 |
| 🔴 P0 | [#6698](https://github.com/agentscope-ai/QwenPaw/issues/6698) | v2.1.0b1 Browser SDK `open()` 全部失败，WireProtocolError: Target crashed | 无 fix |
| 🟠 P1 | [#6726](https://github.com/agentscope-ai/QwenPaw/issues/6726) | 20-30+ 组 `tool_call`/`tool_result` 累积后，新请求报 400 “tool must be response to tool_calls” | 无 fix |
| 🟠 P1 | [#6707](https://github.com/agentscope-ai/QwenPaw/issues/6707) | thinking 模式上游 + 历史含工具调用时 400 invalid_request_error | [#6721](https://github.com/agentscope-ai/QwenPaw/pull/6721) 已提交 |
| 🟠 P1 | [#6708](https://github.com/agentscope-ai/QwenPaw/issues/6708) | SSE 流内 503 错误不参与重试，请求直接失败 | [#6714](https://github.com/agentscope-ai/QwenPaw/pull/6714) 已提交 |
| 🟠 P1 | [#6687](https://github.com/agentscope-ai/QwenPaw/issues/6687) | OpenRouter 多模态探测结果用 `false` 覆盖文档中的能力声明 | [#6723](https://github.com/agentscope-ai/QwenPaw/pull/6723) 已提交（能力缓存过期+模型切换清理） |
| 🟡 P2 | [#6722](https://github.com/agentscope-ai/QwenPaw/issues/6722) | fork 子代理在 worktree 最终化失败时仍上报 completed | [#6725](https://github.com/agentscope-ai/QwenPaw/pull/6725) 已提交 |
| 🟡 P2 | [#6696](https://github.com/agentscope-ai/QwenPaw/issues/6696) | WeChat iLink 一次性 `context_token` 被打字指示器消耗，回复被拒（ret=-2） | 无 fix |
| 🟡 P3 | [#6716](https://github.com/agentscope-ai/QwenPaw/issues/6716) | nightly 集成测试 `test_auto_update_persists_targets` 确定性失败（KeyError: auto_update_targets） | [#6729](https://github.com/agentscope-ai/QwenPaw/pull/6729) 已提交 |

### 今日已关闭的稳定性 Issues

- [#6700](https://github.com/agentscope-ai/QwenPaw/issues/6700) 超大工具输出导致历史会话卡死 ✅
- [#6690](https://github.com/agentscope-ai/QwenPaw/issues/6690) cron pause/resume 不持久化 ✅
- [#6695](https://github.com/agentscope-ai/QwenPaw/issues/6695) WeChat 审批不可达 ✅

**风险提示**：P0 中 #6732/#6731 直接命中 stable 2.0.1，影响面最大；#6697/#6698 虽限于 v2.1.0b1，但会严重挫伤 beta 测试者的信心，建议维护者优先排期。

## 6. 功能请求与路线图信号

| 功能需求 | 链接 | 状态 / 信号 |
|---|---|---|
| 自动模型路由 | [#6436](https://github.com/agentscope-ai/QwenPaw/issues/6436) | 与 [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) 大 PR 方向一致，大概率进入 2.1 路线图 |
| 按需加载技能 | [#6699](https://github.com/agentscope-ai/QwenPaw/issues/6699) | 27+ 技能时描述占用 8k-10k token，需求明确，预计被采纳 |
| Live artifact canvas | [#6730](https://github.com/agentscope-ai/QwenPaw/issues/6730) | 与今日新 PR [#6719](https://github.com/agentscope-ai/QwenPaw/pull/6719)（持久化 workspace artifact 卡片）互补，该方向已在推进 |
| MCP 可配置超时 | [#6724](https://github.com/agentscope-ai/QwenPaw/issues/6724) | 低风险高收益，作为 MCP 失效问题的缓解手段有望快速合入 |
| 频道重试/健康检测 | [#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684) | 渠道自治能力，与 MCP 失效同源 |
| WeChat 审批中文标签 | [#6728](https://github.com/agentscope-ai/QwenPaw/issues/6728) | 低风险 UX 改进，可随 WeChat 修复一起合入 |
| 智能体级 token 统计 | [#6392](https://github.com/agentscope-ai/QwenPaw/issues/6392) | 已关闭，短期不做；可引导至插件生态 |

**路线图判断**：2.1 的隐藏主线是“**模型路由统一 + 技能瘦身 + 渠道自治**”，三者都指向让 QwenPaw 更省 token、更稳定、更适合作为 Agent OS 长期运行。

## 7. 用户反馈摘要

- **“每隔几小时 MCP 工具就不可用，重启 Docker 才恢复”**（#6732）：生产环境用户对 MCP 生态连接稳定性的直接不满。
- **“QwenPaw 自动快于 Matrix 服务，失败后无重试/健康检测”**（#6684）：自建基础设施用户希望 QwenPaw 具备基础的服务治理能力。
- **“升级 v2.1.0b1 后 python 子进程全崩”**（#6697）：beta 用户对桌面端运行时隔离有很高期待，问题影响范围大。
- **“‘完整模式’让人困惑，其实就是配置”**（#6413，已关闭）：普通用户对“完整模式/精简模式”交互命名的强烈负面反馈，说明团队已响应并关闭。
- **“27+ 技能时 8k-10k token 只花在技能描述上”**（#6699）：重度用户对 token 经济性敏感，期望按需动态加载。
- **正面信号**：#6695（WeChat 审批不可达）修复后，用户立刻跟进提出中文标签需求（#6728），说明用户有意愿持续反馈和共建。

## 8. 待处理积压

以下条目长期未闭合或缺少维护者响应，建议关注：

1. **[#6480](https://github.com/agentscope-ai/QwenPaw/issues/6480) — nohup/& 启动的 shell 进程使 agent 永久卡住**：7/26 提出，11 天无官方回复，涉及 shell 工具生命周期管理。
2. **[#6436](https://github.com/agentscope-ai/QwenPaw/issues/6436) — 自动模型路由**：7/24 提出，13 天无 triage 标记，是社区讨论最热的功能请求之一。
3. **[#6627](https://github.com/agentscope-ai/QwenPaw/issues/6627) — 如何用 loongsuite 做 trace**：8/1 提出，5 天无维护者答复，属于可观测性文档缺口。
4. **[#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) — provider 发现/模型元数据/路由统一**：7/21 开启，16 天仍在 review，是 2.1 关键依赖，建议明确时间表。
5. **[#6580](https://github.com/agentscope-ai/QwenPaw/pull/6580) — sprint4/5 e2e 覆盖（15 个用例）**：7/30 开启，CI 全绿待合并，属于测试基建欠账。

---

**整体健康度评价**：项目处于高活跃、高质量演进状态——功能合入速度快，社区反馈链路畅通，多数 bug 均有对应修复 PR 或明确关闭说明。当前最大的健康度风险在于 **stable 2.0.1 的渠道/工具长稳问题**（#6732、#6731、#6684），若能在下一个 patch 版本集中修复，将显著提升生产用户信任度。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-06

> 数据窗口：过去 24 小时 | 数据源：github.com/zeroclaw-labs/zeroclaw

---

## 1. 今日速览

过去 24 小时 ZeroClaw 仓库共更新 **50 条 Issue**（新开/活跃 39 条，关闭 11 条）和 **50 条 PR**（待合并 49 条，合并/关闭 1 条），**无新版本发布**。项目处于 v0.8.5 有限稳定化周期（8 月 4 日 intake 已冻结），社区讨论高度集中在**安全加固与架构 RFC** 上：Chat Completions 兼容、shell 高危命令确认策略、可插拔认证、运行时会话边界等均处于活跃评审中。值得警惕的是 **49 条 PR 待合并形成明显交付积压**，且大量标记为 `needs-author-action`，说明当前瓶颈主要在作者侧响应而非维护者评审。新增 2 个 S1 级 Bug（OpenRouter 流式请求丢参、Signal 私密号码发送者消息被静默丢弃），后者已有修复 PR 跟进。整体健康度：**社区参与度高、问题响应快，但合并吞吐量偏低，RFC 决策速度是主要风险点**。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

### 合并/关闭的 PR（1 条）

- **[PR #9750（已关闭）](https://github.com/zeroclaw-labs/zeroclaw/pull/9750) fix(service): bound launcher-owned daemon logs** — 原方案计划用共享服务监督器将 launcher 持有的守护进程日志捕获文件限制在 8 MiB 以内。该 PR 关闭后，同一目标由更聚焦的 [PR #9773](https://github.com/zeroclaw-labs/zeroclaw/pull/9773)（fix(service): bound launchd daemon logs）接手，通过 launchd 专用 runner 实现 macOS LaunchAgent 日志的有界轮转。这是解决 macOS 守护进程日志无界增长问题的迭代推进。

### 关闭的 Issue（11 条，以下 5 条为代表）

| Issue | 类型 | 意义 |
|---|---|---|
| [#9462 已关闭](https://github.com/zeroclaw-labs/zeroclaw/issues/9462) | CI Bug | `zeroclaw-plugins` 位于 `plugins-wasmtime` feature 后的 lib 单元测试此前从未在 CI 执行，现已修复，CI 覆盖盲区被补齐 |
| [#7467 已关闭](https://github.com/zeroclaw-labs/zeroclaw/issues/7467) | 功能 | ZeroCode 字符串设置编辑支持方向键光标导航，终端 UX 明显改善 |
| [#6350 已关闭](https://github.com/zeroclaw-labs/zeroclaw/issues/6350) | 安全 Bug（S2） | WhatsApp Web 的 LID 联系人绕过 `allowed-numbers` 导致消息静默丢弃，已修复 |
| [#9335 已关闭](https://github.com/zeroclaw-labs/zeroclaw/issues/9335) | 兼容性 | 支持 OpenAI 兼容端点返回顶层 `data` 包裹的 chat completions 响应，生态兼容性增强 |
| [#9652 已关闭](https://github.com/zeroclaw-labs/zeroclaw/issues/9652) | 配置 Bug | `config set` 拒绝含连字符的 cron key 而 `config list/get` 可读，行为不一致已修复 |

### 整体判断

项目在 v0.8.5 稳定化线上持续推进：安全修复（WhatsApp LID 绕过）、CI 能力补强、ZeroCode 终端 UX 打磨均有落地。但单日仅 1 条 PR 合并/关闭，叠加 49 条待合并 PR，**交付通道的吞吐效率是当前最值得关注的工程管理问题**。

---

## 4. 社区热点

| 排名 | 议题 | 评论数 | 核心诉求 |
|---|---|---|---|
| 1 | [Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) RFC: Work Lanes, Board Automation, and Label Cleanup | 18 | 自 5 月 20 日发起、已修订 24 版的治理类 RFC，核心是建立工作泳道与看板自动化，让 issue 路由不增加维护者负担；Rev. 24 状态为"批准延期、逐步落地" |
| 2 | [Issue #8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) RFC: Goal mode v1 — bounded foreground Matrix work | 18 | 用户需要一个跨多个 agent turn 的持久化、有边界的目标执行模式，社区在讨论如何与重启交接、Web、异步子任务解耦 |
| 3 | [Issue #8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) RFC: ZeroClaw Chat Completions profile | 16 | 呼声最高的兼容性需求：让 Open WebUI、LobeChat、Aider、LangChain 等 OpenAI 协议客户端可直接接入 ZeroClaw（当前仅支持 WebSocket/ACP/webhook） |
| 4 | [Issue #7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) RFC: 高危 shell 命令逐次确认 + Claude Code 风格 allow/ask/deny 策略 | 16 | 安全敏感度最高的 RFC 之一，8 月 5 日发布 Rev. 3 收窄了 normative 范围，等待维护者对 shell 策略契约做最终裁决 |
| 5 | [Issue #7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) RFC: Pluggable inbound authentication and canonical principals | 12 | 可插拔入站认证（OIDC 等）与规范化主体，目标锁定 v0.9.0 Identity & Access 里程碑 |
| 6 | [Issue #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) [Tracker] Maintainer decision queue for RFCs | 11 | 社区自建的维护者决策队列，侧面反映 **RFC 积压已成为社区感知到的核心痛点** |

**背后诉求分析**：讨论热度前六全部是 RFC/治理类议题，说明社区正处于"架构定型期"——一方面外部生态（OpenAI 协议客户端）在倒逼 ZeroClaw 开放标准接口，另一方面安全加固（shell 策略、认证、会话边界）需要维护者尽快拍板，否则后续功能开发将受阻。

---

## 5. Bug 与稳定性

### S1 — 工作流阻断（新增 2 个）

- **[Issue #9775](https://github.com/zeroclaw-labs/zeroclaw/issues/9775) OpenRouter 流式请求丢失 `provider_extra`**（S1）：`stream_chat` 路径直接序列化 `NativeChatRequest`，未调用 `merge_extra_body`，导致所有配置的 `provider_extra` 在流式模式下全部失效。**尚无 fix PR**，且该 Bug 由核心维护者 Audacity88 报告，影响面大，预计很快会有修复。
- **[Issue #9774](https://github.com/zeroclaw-labs/zeroclaw/issues/9774) Signal 频道静默丢弃 `sourceUuid`-only 发送者**（S1）：启用号码隐私的 Signal 联系人同时缺失 `source` 与 `sourceNumber`，仅提供 `sourceUuid` 时入站消息被静默丢弃。**已有修复 PR [#9777](https://github.com/zeroclaw-labs/zeroclaw/pull/9777)**（今日提交，按 `sourceNumber → source → sourceUuid` 顺序解析发送者）。

### S2 — 功能降级（新增 1 个）

- **[Issue #9768](https://github.com/zeroclaw-labs/zeroclaw/issues/9768) daemon reload 未绑定 SIGUSR1，且降级安全警告指示操作员发送会杀死 daemon 的信号**（S2）：文档/警告存在相互矛盾，操作员按提示操作会导致守护进程被信号杀死，属于"文档即陷阱"类问题，修复成本低但误导性强。

### 其他已受理 Bug

- **[Issue #9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) verifiable-intent 未验证凭证链即评估约束**（p2，已接受，风险高）：`vi_verify` 的 `evaluate_constraints` 直接信任调用方传入的 fulfillment 对象，偏离 VI 参考实现的安全模型。
- **[Issue #8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) MCP/tool-schema 克隆导致 agent 循环 RSS 无界增长**（p1，已接受，进行中）：从 #5542（WSL2 OOM）拆出的独立根因，与重启风暴已分离处理。
- **[Issue #9697](https://github.com/zeroclaw-labs/zeroclaw/issues/9697) ZeroCode 无法连接 Windows 任务计划程序启动的 daemon**（p1，S3，已接受）：上一版本即存在的行为回归。
- **[Issue #9769](https://github.com/zeroclaw-labs/zeroclaw/issues/9769) 日志持久化关闭时 withheld-capability 通知无处可达**（p2，已接受）：安全通知的投递通道在 `log_persistence="none"` 下失效。
- **[Issue #9771](https://github.com/zeroclaw-labs/zeroclaw/issues/9771) `zeroclaw-gateway` 默认 feature 面无法通过 `clippy -D warnings`**（Task）：四个测试辅助函数被 `#[cfg(test)]` 门控但调用点在 `channel-linq` feature 之后，关闭该 feature 时产生死代码警告，一行修复即可。

### 稳定性小结

今日新增 Bug 呈现两个特征：**一是流式/隐私通道的边界条件**（OpenRouter streaming、Signal 私密模式）暴露了此前测试未覆盖的路径；**二是安全机制自身的可操作性**（错误信号指示、通知不可达、凭证链缺失）成为新一类问题。好消息是 S1 级 Bug 均在当天或次日即有修复 PR。

---

## 6. 功能请求与路线图信号

### 高概率进入下一版本

- **OpenAI Chat Completions 兼容**（[Issue #8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)）：社区讨论 16 条，外部生态（Open WebUI/LobeChat/Aider/LangChain）客户端的接入诉求强烈，且已有少量同类兼容性修复合入（#9335 data-wrapped 响应），**极可能成为 v0.9.0 的核心卖点**。
- **OpenRouter prompt-cache 成本优化**（[Issue #9631](https://github.com/zeroclaw-labs/zeroclaw/issues/9631)）：发送稳定 `session_id` 以命中 OpenRouter 提示缓存，用户明确抱怨"单次对话数十次 LLM 请求、系统提示与工具 schema 每轮重放"，成本痛点清晰，实现面较小，适合快速合入。
- **工作区相对路径禁入模式**（[Issue #8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424)）：今日已有对应实现 **[PR #9776](https://github.com/zeroclaw-labs/zeroclaw/pull/9776)**（`ForbiddenPatternSet` 支持 glob/精确路径/目录前缀/basename 四类模式），安全能力将显著增强。

### 进行中/已提交实现的功能

| 功能 | 关联 PR/Issue | 状态 |
|---|---|---|
| Anthropic 存储型 OAuth profile | [PR #9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420)（对应 [Issue #9464](https://github.com/zeroclaw-labs/zeroclaw/issues/9464)） | 待作者更新，XL 规模 |
| ZeroCode Doctor 显示已解析日志路径 | [PR #8928](https://github.com/zeroclaw-labs/zeroclaw/pull/8928) | 待作者更新，解决 #8650/#8647 |
| Matrix 单消息进度草稿 | [PR #8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) | 待作者更新，XL 规模 |
| 插件自有 Kanban 看板 | [Issue #8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832) | RFC 评审中 |
| 桌面端计算机使用（屏幕交互/输入控制） | [Issue #6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | RFC 评审中，`needs-author-action` |

### 路线图信号

v0.9.0 的方向已清晰浮现：**开放协议兼容（Chat Completions）+ 深度安全加固（shell 策略、认证、会话边界）+ 成本优化（prompt-cache）**。这三个方向从社区讨论热度、已提交 PR 数量和维护者参与度上均得到验证。

---

## 7. 用户反馈摘要

从今日活跃 Issue 中提炼的真实用户声音：

- **成本敏感型用户**（[#9631](https://github.com/zeroclaw-labs/zeroclaw/issues/9631)）："一个对话产生几十次 LLM 请求，系统提示和工具 schema 每轮重复发送"——OpenRouter 高频用户对 token 浪费的直接抱怨，诉求明确指向 session_id 透传。
- **安全配置的默认值陷阱**（[#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397)）：WhatsApp 频道 `allowed_groups` 空列表竟然等于"允许所有群"，用户对"默认开放"的安全语义表示担忧，提议改为 permit-none。
- **隐私模式下的可用性**（[#9774](https://github.com/zeroclaw-labs/zeroclaw/issues/9774)）：Signal 私密号码用户的消息被静默丢弃且无日志，属于"用户以为发出去了其实没有"的最差体验。
- **Windows 场景的持续挫败感**（[#9697](https://github.com/zeroclaw-labs/zeroclaw/issues/9697)）：`zerocode: daemon did not become ready...` 在 Windows 任务计划程序场景下与上一版本行为一致，用户明确表达了"原以为已解决"的失望。
- **CLI 一致性**（[#9652](https://github.com/zeroclaw-labs/zeroclaw/issues/9652)，已修复）：演示环境中按文档操作 config CLI 遇到连字符 cron key 的读写不一致，属于典型的"文档说的和工具做的不一样"。
- **编辑器 UX**（[#7467](https://github.com/zeroclaw-labs/zeroclaw/issues/7467)，已修复）：ZeroCode 字符串编辑不能方向键移动光标，打错字只能全删重打——基础但高频的终端编辑痛点，现已解决。

**满意度趋势**：用户对安全/隐私类问题容忍度低（静默丢弃、默认开放），对 CLI/编辑器类问题反馈直接；社区用"已关闭 + 修复 PR"对反馈做出了较快的正面回应。

---

## 8. 待处理积压

### 长期悬而未决的 RFC（等待维护者决策）

| Issue | 发起时间 | 搁置天数 | 状态 |
|---|---|---|---|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) Work Lanes & Board Automation RFC | 2026-05-20 | 78 天 | 批准延期，rolling out |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) 桌面端 Computer-use RFC | 2026-05-25 | 73 天 | `needs-author-action` |
| [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) 内部发起轮次的溯源/会话绑定 RFC | 2026-05-26 | 72 天 | 8/5 完成 Rev.2 重写，待评审 |
| [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) 可插拔入站认证 RFC | 2026-06-03 | 64 天 | Rev.8，v0.9.0 里程碑 |
| [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) 高危 shell 命令确认 RFC | 2026-06-03 | 64 天 | Rev.3 已收窄，待拍板 |

### 长期未合并的 PR（等待作者更新）

| PR | 创建时间 | 说明 |
|---|---|---|
| [PR #8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) Matrix 单消息进度草稿 | 2026-06-28（39 天） | XL 规模，`needs-author-action` |
| [PR #8496](https://github.com/zeroclaw-labs/zeroclaw/pull/8496) 集中化 deferred-MCP 访问策略 | 2026-06-29（38 天） | 修复 #8054 Surface 1(b)，principal contributor 提交 |
| [PR #8826](https://github.com/zeroclaw-labs/zeroclaw/pull/8826) image_gen 下载 URL 防 SSRF | 2026-07-08（29 天） | 安全修复，`needs-author-action` |
| [PR #8928](https://github.com/zeroclaw-labs/zeroclaw/pull/8928) Doctor 显示日志路径 | 2026-07-10（27 天） | `needs-author-action` |
| [PR #9428](https://github.com/zeroclaw-labs/zeroclaw/pull/9428) Bluesky/Reddit 发送者鉴权 | 2026-07-27（10 天） | XL 规模，安全缺口修复 |

### 维护者提醒

1. **[Issue #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) 维护者决策队列**：社区已自发建立 RFC 决策 tracker，说明等待中的 RFC 已形成可量化的积压，建议优先处理 #7155（shell 策略）与 #8603（Chat Completions）这两个"卡脖子"项。
2. **49 条待合并 PR 中有大量 `needs-author-action`**：维护者评审反馈已给出但作者未跟进。建议在 v0.8.5 稳定化窗口内设置 PR 响应 SLA，对长期无响应的 PR 明确关闭或接管。
3. **安全修复 PR 优先级**：[#8826](https://github.com/zeroclaw-labs/zeroclaw/pull/8826)（SSRF）与 [#9428](https://github.com/zeroclaw-labs/zeroclaw/pull/9428)（Bluesky/Reddit 未鉴权入站）均属于可被外部利用的缺口，建议维护者主动联系作者或直接接管。

---

*本报告由 AI 开源项目分析助手基于 GitHub 公开数据自动生成，数据统计截至 2026-08-06。*
*项目地址：https://github.com/zeroclaw-labs/zeroclaw*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*