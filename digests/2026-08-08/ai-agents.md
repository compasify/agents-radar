# OpenClaw 生态日报 2026-08-08

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-08-08 00:46 UTC

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

# OpenClaw 项目动态日报 · 2026-08-08

## 1. 今日速览

过去 24 小时 OpenClaw 仓库活跃度处于高位：**500 条 Issue 更新**（468 条新开/活跃、32 条关闭）与 **500 条 PR 更新**（405 条待合并、95 条已合并/关闭），无新版本发布。社区讨论热度集中在三处：DeepSeek v4 Flash 静默回复失败（128 条评论，今日关闭）、记忆信任标记（29 条评论）与网关内存泄漏（22 条评论，P0）。值得警惕的是，多个 **P0 数据完整性与稳定性缺陷**（状态库损坏、迁移失败、过早 compaction 数据丢失）仍无修复合入，构成下一版本发布的主要风险。整体来看，项目维护管线运转正常（95 个 PR 合入/关闭），但 405 个待合并 PR 与一批 6 月上旬即报告的 P0 问题存在明显积压。

## 2. 版本发布

今日无新版本发布。多起 issue 指向 2026.7.2-beta 系列存在 Agent DB v14→v15 迁移阻断问题（[#119263](https://github.com/openclaw/openclaw/issues/119263)），后续发版时间表可能受其制约。

## 3. 项目进展

今日共 95 个 PR 合并/关闭，32 个 Issue 关闭。在可见的 PR 列表中，已合入/关闭的关键项：

- **fix(telegram): preserve forwarded context in agent body** — [PR #75121](https://github.com/openclaw/openclaw/pull/75121)：Telegram 转发消息现在保留结构化 `ForwardedFrom*` 上下文，prompt 组装可正确渲染转发归属，改善多级转发场景的消息可追溯性。
- **fix(ui): keep missing profile avatars on initials after rerenders** — [PR #120370](https://github.com/openclaw/openclaw/pull/120370)：修复头像接口 404 时，聊天重渲染后头像退化为破图图标的问题。

今日关闭的重要 Issue（含修复或定论）：

- [#116277](https://github.com/openclaw/openclaw/issues/116277)（128 评论）DeepSeek v4 Flash 静默失败 — 已关闭，表明已有修复或明确处置方案。
- [#110171](https://github.com/openclaw/openclaw/issues/110171)（P1）语音聊天应与文本聊天上下文一致 — 已关闭，曾有 linked PR，可能已合入。
- [#92884](https://github.com/openclaw/openclaw/issues/92884) config validate 误拒插件扩展的 channel schema — 已关闭。
- [#119009](https://github.com/openclaw/openclaw/issues/119009) 失控重试循环产生 $204.74 费用 — 已关闭。

处于"ready for maintainer look"、距离合入一步之遥的修复：

- **fix(gateway): return retryable chat send error during transcript rebuild** — [PR #119778](https://github.com/openclaw/openclaw/pull/119778)（ClawSweeper 自动生成，修复 #119754）：transcript 重建期间 `chat.send` 应返回可重试错误而非 `INVALID_REQUEST`。
- **fix(agents): drop throttled exec update events** — [PR #84853](https://github.com/openclaw/openclaw/pull/84853)：消除节流 exec 更新产生无新负载的事件噪音。

值得注意的是，技术债清理与测试基建投入在加大：PR #120350（引入 normalization-core 统一辅助函数，XL）、PR #120362（QA 覆盖 session 与 Workboard 管理 worktree 生命周期）、PR #120397（拆分 run 生命周期测试，修复 lint 分片）。

## 4. 社区热点

- **[#116277](https://github.com/openclaw/openclaw/issues/116277) DeepSeek v4 Flash 静默回复失败**（128 条评论，P1，今日关闭）：模型在 Telegram 群组消息上静默失败，仅回退 "No reply was generated"。128 条评论是近期最高热度之一，说明"静默失败 + 无观测性"是用户最无法接受的行为模式。
- **[#7707](https://github.com/openclaw/openclaw/issues/7707) Memory Trust Tagging by Source**（29 条评论，P2）：要求按记忆来源（用户命令、网页抓取、第三方技能）标记信任等级，防止恶意指令通过网页/消息投毒记忆后影响后续行为。安全类诉求热度持续上升。
- **[#91588](https://github.com/openclaw/openclaw/issues/91588) 网关内存泄漏 350MB→15.5GB**（22 条评论，P0）：2–3 天即触发 OOM 并被 kill，触发 `launchd-handoff` 重启循环，是当前影响面最大的稳定性问题。
- **[#101290](https://github.com/openclaw/openclaw/issues/101290) CLI 预检损坏实时状态库**（14 条评论，P0）：macOS 上 4 天内状态库损坏 4 次，vanilla SQLite 无法复现，指向 OpenClaw 自身的并发访问问题。

## 5. Bug 与稳定性

### P0（阻断级）

| Issue | 问题描述 | 修复状态 |
|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | 网关 RSS 从 350MB 涨至 15.5GB，OOM 崩溃循环 | ❌ 无 fix PR |
| [#101290](https://github.com/openclaw/openclaw/issues/101290) | CLI 启动预检在网关运行中损坏实时状态库（macOS，"database disk image is malformed"） | ❌ 无 fix PR，vanilla SQLite 不复现 |
| [#119263](https://github.com/openclaw/openclaw/issues/119263) | Agent DB v14→v15 迁移失败（`no such column: entry_valid`），网关拒绝启动 | 🔧 有 linked PR |
| [#118772](https://github.com/openclaw/openclaw/issues/118772) | `sessionEntry.totalTokens` 膨胀导致 4–8% 上下文即触发 compaction，造成数据丢失 | 🔧 有 linked PR |

### P1（高优先级，无修复 PR）

- [#86684](https://github.com/openclaw/openclaw/issues/86684)（regression）`sessions_yield` 子代理唤醒在 65k/1.05M 低占用时压缩父分支，导致数据丢失
- [#85030](https://github.com/openclaw/openclaw/issues/85030) MCP 工具未注入 `sessions_spawn` 子代理（6👍），`bundle-mcp` 与 allowlist 全部被忽略
- [#116022](https://github.com/openclaw/openclaw/issues/116022) `/new` 复用稳定 session ID，无法恢复已退役的 Codex 绑定 tombstone
- [#45494](https://github.com/openclaw/openclaw/issues/45494)（regression）Cron 任务在 LLM 持续 500 时耗尽全部超时窗口而非快速失败
- [#119087](https://github.com/openclaw/openclaw/issues/119087)（regression）网关冷启动回归约 2.5 倍（1-vCPU 容器）
- [#98435](https://github.com/openclaw/openclaw/issues/98435) MCP loopback 传输在网关重启后不自动重连，`recovered=1` 具有误导性
- [#109145](https://github.com/openclaw/openclaw/issues/109145) 网关 HTTP 服务"监听但不 accept 连接"（2026.7.1-beta.5）
- [#75380](https://github.com/openclaw/openclaw/issues/75380) `provider-payload.jsonl` 与 `cache-trace.jsonl` 无上限增长，无轮转策略
- [#119411](https://github.com/openclaw/openclaw/issues/119411) 记忆文件 watcher 永不触发重新索引，`memory status` 报告 Dirty:no 但与磁盘计数矛盾
- [#119333](https://github.com/openclaw/openclaw/issues/119333) `request_user_input` 在 Default 模式被暴露，但运行时被拒
- [#90789](https://github.com/openclaw/openclaw/issues/90789) claude-cli 合成 "No response requested." 占位符导致 Telegram turn 完全静默、无观测性
- [#86050](https://github.com/openclaw/openclaw/issues/86050)（regression）网关缓冲 claude-cli 流事件，WebChat/TUI 只见最终消息
- [#86119](https://github.com/openclaw/openclaw/issues/86119) 子代理/cron 运行后遗留孤儿 `node server.js` worker 进程

### P1（已有对应修复 PR）

| Issue | 问题描述 | 修复 PR |
|---|---|---|
| [#115700](https://github.com/openclaw/openclaw/issues/115700) | `chat.send` 误报 "thread switched branches"，stale `expectedLeafEntryId` 未刷新 | [#116382](https://github.com/openclaw/openclaw/pull/116382) |
| [#94939](https://github.com/openclaw/openclaw/issues/94939) | 6.x 状态迁移遗留 0 字节 conversation-store SQLite，Proactive 发送失败 | linked PR 已开 |
| [#117445](https://github.com/openclaw/openclaw/issues/117445) | `@openclaw/feishu` 入站 DM 解码为 "?"，ingress spool 抛异常、replies=0 | linked PR 已开 |
| [#117209](https://github.com/openclaw/openclaw/issues/117209) | AuthProfileStoreUnreadable 粘滞，snapshot 发布失败后所有 WeCom 回复失败 | linked PR 已开 |
| [#86012](https://github.com/openclaw/openclaw/issues/86012) | LINE 消息因 reply token 过期静默丢失，无 push 兜底 | linked PR 已开 |

### 回归风险提示

大量 P1 问题被标记为 **regression**（#101290、#86684、#45494、#119087、#86050、#99586、#74378），集中在会话状态结构与消息传递链路，强烈提示 2026.7.x 系列的会话重构引入了系统性回归，建议维护者组织专项排查。

## 6. 功能请求与路线图信号

| Issue / PR | 功能需求 | 信号 |
|---|---|---|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | 记忆按来源打信任标签（防记忆投毒） | 29 评论，needs-security-review，热度最高的功能请求 |
| [#45608](https://github.com/openclaw/openclaw/issues/45608) | `/new`、`/reset`、每日重置前执行 agentic memory flush | 4👍，与现有 compaction 机制复用 |
| [#30381](https://github.com/openclaw/openclaw/issues/30381) | `chatCompletions` 带 `x-openclaw-agent-id` 头时忽略 body 中 model 校验 | 2👍，API 兼容性诉求 |
| [#81061](https://github.com/openclaw/openclaw/issues/81061) | 新增 `before_route_inbound_message` 预路由钩子 | 3👍，面向 channel 桥接/代理场景 |
| [#87362](https://github.com/openclaw/openclaw/issues/87362) | 任务流生命周期 hook 事件（插件可观测性） | P2，内部 registry 已有但未开放 |
| [#13219](https://github.com/openclaw/openclaw/issues/13219) | 按模型维度的 usage 日志与成本追踪 | 6 个月未决，配合 #119009 费用事故有强动机 |
| [#99583](https://github.com/openclaw/openclaw/issues/99583) | 智能 Session 自动标题（惰性生成、低成本模型） | P3，可复用现有 `llm-slug-generator` |
| [#95516](https://github.com/openclaw/openclaw/issues/95516) | Skill 生命周期管理（失败自动优化 + 按使用量退役） | 2👍，P3 |
| [#95724](https://github.com/openclaw/openclaw/issues/95724) | 记忆按源码目录索引，消除同 workspace 多 agent 重复向量库 | P2，影响多 agent 部署成本 |

路线图信号：PR [#119321](https://github.com/openclaw/openclaw/pull/119321)（macOS 实时 Talk relay，XL）与 [#87325](https://github.com/openclaw/openclaw/issues/87325)（Azure Foundry GPT Realtime Talk）表明 **Realtime/Talk 语音链路**是当前重点扩展方向；PR #120362/#120397 则显示维护者在加大 **QA 与测试基建**投入。

## 7. 用户反馈摘要

- **对"静默失败"零容忍**：从 #116277（128 评论）到 #90789（synthetic 占位符导致全静默）、#86012（LINE reply token 过期静默丢消息）、#94919（fallback 通知在 cron/子代理场景不可见），用户反复表达同一个诉求：**失败可以发生，但必须在界面上可见、可观测、可诊断**。
- **成本敏感度上升**：#119009 中用户因失控重试循环被扣费 $204.74（正常基线远低于此），且系统未将其识别为"stalled"；叠加 #13219 对原生 usage 日志的呼吁，用户对成本可观测性的要求显著提高。
- **对 2026.7.x 回归密集表达不满**：#119087（冷启动 2.5x 退化）、#101290（状态库损坏 4 次）、#118772（4–8% 上下文即 compaction）等 regression 在评论区引发对版本质量控制的质疑。
- **安全焦虑上升**：#7707 记忆投毒、#75380 日志无上限增长、#119009 失控循环未被检测，用户希望引入信任边界和资源上限机制。
- **正面反馈**：#75121 Telegram 转发上下文修复、#120370 UI 头像修复等合入 PR 获得认可；用户对 ClawSweeper 自动化修复（#119778）的引入表示期待。

## 8. 待处理积压

以下为长期未决或等待维护者行动的重要事项：

| 事项 | 创建时间 | 状态 | 备注 |
|---|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) 网关内存泄漏 | 2026-06-09 | P0，无 fix PR | 已悬置 2 个月，OOM 影响面大，建议最高优先级 |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) 记忆信任标记 | 2026-02-03 | P2，待安全审查 | 29 评论，热度最高的功能请求 |
| [#13219](https://github.com/openclaw/openclaw/issues/13219) 按模型 usage 日志 | 2026-02-10 | P2，待产品决策 | 近 6 个月无实质进展 |
| [#45494](https://github.com/openclaw/openclaw/issues/45494) Cron 任务超时 | 2026-03-13 | P1，待 live-repro | 5 个月未决 |
| [#45608](https://github.com/openclaw/openclaw/issues/45608) 重置前 memory flush | 2026-03-14 | P2，待产品决策 | 4👍 |
| [#30381](https://github.com/openclaw/openclaw/issues/30381) chatCompletions model 忽略 | 2026-03-01 | P2，待产品决策 | 2👍 |
| [#74378](https://github.com/openclaw/openclaw/issues/74378) Windows CLI 进程残留 | 2026-04-29 | P2，待 live-repro | 影响 Windows 用户体验 |
| [PR #84853](https://github.com/openclaw/openclaw/pull/84853) 丢弃节流 exec 事件 | 2026-05-21 | ready for maintainer look | 已就绪但搁置超过 2 个月 |
| [PR #117712](https://github.com/openclaw/openclaw/pull/117712) Actions 依赖安全更新 | 2026-08-02 | 等待作者 | 含 trufflehog、actions/attest 等 10 项安全更新 |

---

**项目健康度总结**：社区活跃度极高，维护者合入节奏正常，ClawSweeper 自动化与 QA 基建投入是积极信号；但 P0/P1 稳定性缺陷——特别是会话状态、消息传递与记忆/上下文完整性——堆积时间偏长，且多处标记为 regression。建议优先处理有合入 PR 的数据完整性修复（#115700、#118772、#94939、#119263），并尽快对 2026.7.x 会话重构做一次系统性回归专项。

---

## 横向生态对比

# 个人 AI 助手开源生态横向对比分析报告

**日期：** 2026-08-08  
**数据窗口：** 过去 24 小时

---

## 1. 生态全景

今日 12 个受监测项目中 9 个保持活跃，累计产生约 **751 条 Issue 更新** 与 **751 条 PR 更新**，其中 OpenClaw 独占约三分之二的社区流量，构成生态绝对核心。整体呈现 **"一超多强"** 格局：头部项目（OpenClaw、Hermes、IronClaw、ZeroClaw、CoPaw）进入高密度迭代期，功能扩展与稳定性修复并行，但普遍面临 **PR 合并积压**（合计超 570 条待合并）。跨项目的共同焦虑集中在 **静默失败、记忆/上下文完整性、成本可观测性与安全隔离** 四个方向，用户对"失败可诊断、资源可追溯、数据有边界"的诉求已超越单点功能需求，成为生态级标准。与此同时，3 个项目（NullClaw、Moltis、ZeptoClaw）持续无活动，生态存在明显的优胜劣汰分化。

---

## 2. 各项目活跃度对比

| 项目 | Issue 更新 | PR 更新 | 合并/关闭 PR | 版本发布 | 活跃度 | 健康度评估 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500（+468 新开） | 500（+405 待合并） | 95 | 无 | 🔥🔥🔥🔥🔥 | ⚠️ 高活跃但 P0 积压严重，6 月即报告的内存泄漏仍无修复 |
| **Hermes Agent** | 50（+45 新开） | 50（+47 待合并） | 3 | 无 | 🔥🔥🔥🔥 | ⚠️ 4 个 P1 均无 fix PR，合并速度明显低于 Bug 曝光速度 |
| **IronClaw** | 50（+36 活跃） | 50（+38 待合并） | 12 | 无 | 🔥🔥🔥🔥 | ✅ 多线并进，Doc-Truth 治理闭环高效，P1 状态幻觉问题需警惕 |
| **ZeroClaw** | 50（+45 新开） | 50（+47 待合并） | 3 | 无 | 🔥🔥🔥🔥 | ⚠️ 安全类问题集中爆发，47 条 PR 积压成瓶颈 |
| **CoPaw** | 31（+20 新开） | 49（+22 合并/关闭） | 22 | v2.1.0-beta.2 | 🔥🔥🔥🔥 | ✅ 迭代节奏健康，但 beta 回归（桌面模式）社区反馈集中 |
| **NanoBot** | 10（+8 新开） | 21（+10 待合并） | 11 | 无 | 🔥🔥🔥 | ✅ 响应及时，安全隔离 PR 待合入，整体健康 |
| **NanoClaw** | 0 | 10（+4 新提交） | 2 | 无 | 🔥🔥🔥 | ✅ 稳定迭代，技术债清理有序，无 P0/P1 |
| **LobsterAI** | 7（+4 新开） | 7（+6 合并/关闭） | 6 | **v2026.8.7** | 🔥🔥🔥 | ✅ 合入率 86%，响应迅速，健康度良好 |
| **PicoClaw** | 4（+3 活跃） | 14（+12 待合并） | 2 | 无 | 🔥🔥 | ⚠️ 审阅积压加剧，12 个待合并 PR 多带 stale 标签 |
| **NullClaw** | 0 | 0 | 0 | 无 | ⚪ | — 无活动 |
| **Moltis** | 0 | 0 | 0 | 无 | ⚪ | — 无活动 |
| **ZeptoClaw** | 0 | 0 | 0 | 无 | ⚪ | — 无活动 |

**注**：OpenClaw 的 Issue/PR 数据含评论等动态更新，与实际新增条目不完全等同，但其生态体量仍远超其他项目。

---

## 3. OpenClaw 在生态中的定位

### 3.1 核心优势

- **社区规模断层领先**：单日 500 条 Issue + 500 条 PR 更新，是第二名（Hermes/IronClaw/ZeroClaw 各 50 条）的 **10 倍**。128 条评论的 DeepSeek 静默失败 Issue 即超过多数项目整日活跃总量。
- **生态基础设施完备**：ClawSweeper 自动化修复已投入生产（如 PR #119778 自动生成修复），QA 测试基建持续加码（PR #120362/#120397），表明项目已建立系统化质量保障体系。
- **渠道覆盖广度领先**：Telegram、微信（WeCom/Feishu）、LINE、Discord 等均有对应 Issue/PR，多平台适配成熟度高于同类。

### 3.2 技术路线差异

| 维度 | OpenClaw | 同类差异 |
|---|---|---|
| **状态管理** | 自研 Agent DB（当前 v15），SQLite 持久化 | NanoBot 使用 workspace 文件存储（存安全隐患）；Hermes 使用 SessionDB |
| **上下文策略** | 主动 compaction + 分支管理（sessions_yield） | 比 NanoBot 的简单裁剪更复杂，但 2026.7.x 重构引入多处 regression |
| **自动化** | ClawSweeper AI 自动修 Bug | 其他项目均未实现同等自动化 |
| **多代理** | 子代理 spawn/yield 机制 | 与 Hermes 的 delegate_task 方向一致，但实现更深 |

### 3.3 主要风险

- **P0 积压时间过长**：网关内存泄漏（#91588）悬置 2 个月、状态库损坏（#101290）4 天损坏 4 次，均无修复 PR。若持续不解决，可能动摇用户对 2026.7.x 系列的信心。
- **回归密度偏高**：多个 P1 标记 regression（会话状态、消息传递链路），暗示近期会话重构的系统性风险。
- **合并管线承压**：405 条待合并 PR 是生态中最大的积压量，即使有自动化辅助，维护者人工 review 仍是瓶颈。

**结论**：OpenClaw 是生态的"基础设施级"存在，社区规模与功能广度无出其右；但**稳定性债务正在累积**，下一版本发布质量将是对其治理能力的核心考验。

---

## 4. 共同关注的技术方向

### 4.1 静默失败与可观测性（涉及 6+ 项目）

| 诉求 | 涉及项目 | 典型案例 |
|---|---|---|
| 失败必须在 UI/日志中可见可诊断 | OpenClaw、NanoBot、ZeroClaw、LobsterAI、Hermes | OpenClaw #116277（128 评论）；LobsterAI #2447（无结果无报错）；ZeroClaw #9786（SOP 静默丢弃） |
| Token/成本消耗需可追溯 | OpenClaw、NanoBot、ZeroClaw、Hermes | NanoBot #5266（2 小时百万 token）；ZeroClaw #9816（费用恒为 $0）；OpenClaw #119009（失控重试扣费 $204.74） |

### 4.2 记忆/上下文完整性与安全（涉及 6+ 项目）

| 诉求 | 涉及项目 | 典型案例 |
|---|---|---|
| 上下文压缩不得丢失工具链/数据 | OpenClaw、Hermes、CoPaw | Hermes #79278（压缩丢工具结果）；OpenClaw #118772（4-8% 上下文即 compaction） |
| 记忆需按来源标记信任等级 | OpenClaw、NanoBot | OpenClaw #7707（防记忆投毒）；NanoBot #5278（会话历史越权） |
| 跨会话记忆可靠召回 | IronClaw、OpenClaw、Hermes | IronClaw #7185（Champions 周会多人复现） |
| 跨平台会话共享 | Hermes、PicoClaw | Hermes #4335（4 个月最高讨论量） |

### 4.3 安全沙箱与权限边界（涉及 5+ 项目）

| 诉求 | 涉及项目 | 典型案例 |
|---|---|---|
| 每会话/每用户独立文件沙箱 | NanoBot、IronClaw、ZeroClaw | NanoBot #5276/#5283；IronClaw #7214（Docker/Railway 沙箱 profile）；ZeroClaw #9827（shell 子进程逃逸） |
| 工具调用防 SSRF/防泄漏 | ZeroClaw、Hermes、OpenClaw | Hermes PR #80847/#81407；ZeroClaw #9386（API key 泄漏） |
| 敏感路径保护 | ZeroClaw、NanoBot | ZeroClaw #9815（forbidden_paths 失效）/#8424 |

### 4.4 会话/状态管理回归（涉及 4+ 项目）

OpenClaw、Hermes、IronClaw、ZeroClaw 在 24 小时内均报告了会话状态一致性问题（状态库损坏、use-after-close、状态幻觉、SOP 永久卡死）。这表明**会话状态管理是当前 AI Agent 工程化的最大技术债**，各项目在激进重构后均出现不同程度的系统性回归。

### 4.5 多代理/协作机制深化（涉及 4+ 项目）

| 方向 | 涉及项目 | 动态 |
|---|---|---|
| 子代理生命周期管理 | OpenClaw、Hermes、ZeroClaw、NanoBot | Hermes Kanban worker 僵尸进程修复（#81411）；ZeroClaw web_research 子代理（#9833）；NanoBot 子代理转录持久化（#5291） |
| 团队/Profile 持久化 | Hermes、IronClaw | Hermes #81405（First-class Teams）；IronClaw #7157（双通道投递） |

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 通用型全渠道个人 AI 助手，生态平台 | 开发者/极客/多平台重度用户 | 自研 Agent DB + 分支会话 + ClawSweeper 自动化 |
| **Hermes** | 多代理协作 + 跨平台连续性 | 团队协作/自动化工作流用户 | Kanban/cron/delegate_task 深度集成 |
| **IronClaw** | 安全优先的云端 Agent 运行时 | 企业/QA/沙箱敏感用户 | Docker/Railway 沙箱隔离 + 工具披露优化 + 文档真实性治理 |
| **ZeroClaw** | Rust 实现的高性能/嵌入式安全 Agent | 嵌入式/边缘设备/安全敏感用户 | Rust 内存安全 + SOP 引擎 + 极低资源占用 |
| **CoPaw** | 多渠道 IM 聚合 + 插件市场 | 中文用户/IM 重度使用者 | 微信/OneBot/Telegram 深度适配 + 邮件助手 + 记忆增强 |
| **NanoBot** | 轻量级 WebUI 优先个人助手 | 个人用户/快速部署场景 | 轻量架构 + workspace 隔离增强 + Dream 归档 |
| **LobsterAI** | 桌面客户端 + OpenClaw 生态接入 | 桌面端技术工作者 | Electron 桌面 Shell + Cowork 会话搜索 + 本地技能面板 |
| **PicoClaw** | 嵌入式/低资源硬件 Agent | 边缘硬件爱好者 | 亚秒级启动 + <10MB 内存 + 原生 Go |
| **NanoClaw** | 中文社区技能/频道扩展 | 中文开发者和贡献者 | 模板化引导 + v2 ChannelAdapter 架构 |
| **NullClaw / Moltis / ZeptoClaw** | — | — | 无活动，处于停滞状态 |

**架构取向总结**：OpenClaw 与 Hermes 走 **"重状态 + 复杂会话管理"** 路线，功能强但回归风险高；IronClaw 与 ZeroClaw 走 **"安全边界 + 可验证性"** 路线，更接近生产级基础设施；NanoBot/LobsterAI/PicoClaw 则偏 **"轻量务实"**，以快速可用为先。

---

## 6. 社区热度与成熟度

### 6.1 活跃度分层

| 层级 | 项目 | 特征 |
|---|---|---|
| **T0 超大规模** | OpenClaw | 单日 Issue/PR 更新量 500+，评论数可达百级 |
| **T1 高活跃** | Hermes、IronClaw、ZeroClaw、CoPaw | 单日更新 30-50 条，功能与修复并进 |
| **T2 中活跃** | NanoBot、NanoClaw、LobsterAI、PicoClaw | 单日更新 4-21 条，迭代节奏稳定 |
| **T3 停滞** | NullClaw、Moltis、ZeptoClaw | 无任何活动 |

### 6.2 迭代阶段判断

| 阶段 | 项目 | 判断依据 |
|---|---|---|
| **快速迭代期** | OpenClaw、Hermes、ZeroClaw、CoPaw | 新功能 PR 密集、社区需求旺盛，但 P0/P1 积压同步累积 |
| **质量巩固期** | IronClaw、NanoBot、LobsterAI | 修复合入率高（LobsterAI 86%）、治理机制成形（IronClaw Doc-Truth）、安全加固落地中 |
| **生态建设期** | NanoClaw、PicoClaw | 贡献者活跃但维护者合并效率不足（PicoClaw 12 PR 待合并） |

### 6.3 社区参与深度差异

- **OpenClaw**：用户以"报 Bug + 催修复"为主，但 ClawSweeper 的引入正在培育"AI 自动修"的新协作模式。
- **Hermes**：社区已出现**产出级贡献者**（Discord 审计 #11349、WhatsApp 对齐清单 #79890），从"报 Bug"向"参与产品设计"演进。
- **IronClaw**：用户提案（Doc-Truth #7317）当天即转化为 5 个 PR，**社区声音到代码落地的闭环速度生态最快**。
- **ZeroClaw**：RFC 文化浓厚（OTel 关联、forbidden path 扩展、crate 治理），技术深度高但决策周期偏长。
- **PicoClaw**：出现高质量代码审查（#3308），但 stale 标签泛滥说明维护者未及时回应，存在**挫伤贡献者积极性的风险**。

---

## 7. 值得关注的趋势信号

### 7.1 可观测性正成为 Agent 的"生死线"

从 OpenClaw 128 评论的静默失败 Issue，到 NanoBot 的 token 消耗焦虑，再到 ZeroClaw 一连串"静默丢弃"问题，跨生态用户发出同一个信号：**AI Agent 可以失败，但不能"黑盒失败"**。对开发者而言，这意味着：

- 内置 **token/成本计量** 应从"可选插件"升级为"默认能力"（OpenClaw #13219、NanoBot #5266、ZeroClaw #9816 三线并进）。
- **失败诊断链**（错误码 + 上下文 + 可重试语义）应是 Agent 框架的基础设施，而非事后补丁（OpenClaw PR #119778 即此方向）。

### 7.2 "记忆安全" 成为新的信任门槛

记忆投毒（OpenClaw #7707）、会话历史越权（NanoBot #5278）、跨会话记忆串线（IronClaw #7294/#7295）、压缩丢链（Hermes #79278）——**记忆系统既是 Agent 的核心价值，也是最大的攻击面**。趋势指向：

- **来源标记 + 信任分级** 将成为记忆系统的标准设计。
- **压缩/归档时机与工具链执行互斥** 是必须解决的问题，否则非幂等操作存在真实风险。
- 会话级/工作区级 **存储隔离** 将从安全建议演变为合规要求。

### 7.3 会话状态管理是最大的工程债

四个高活跃项目同日报告会话状态类 P0/P1（OpenClaw 状态库损坏、Hermes use-after-close、IronClaw 状态幻觉、ZeroClaw 永久卡死），且多数标记 regression。这表明：**"会话即状态机"的复杂度被普遍低估**。建议：

- 涉及会话存储结构变更时，必须配套 **迁移测试 + 故障注入测试**（IronClaw #7380 已建立 epic）。
- 对"状态幻觉"（agent 不查证即断言）应引入 **状态校验强制工具**，如 IronClaw 的 memory PR #7365 所示。

### 7.4 多代理协作从概念走向工程化

Hermes 的 Kanban 僵尸进程、ZeroClaw 的 web_research 子代理、NanoBot 的子代理转录持久化、CoPaw 的 dool loop 检测——多代理从 demo 走向生产时，**进程组管理、超时语义、预算传递、转录审计** 成为共性痛点。生态正在形成事实标准：子代理必须有独立的生命周期、资源上限和可审计轨迹。

### 7.5 安全加固从"外围"走向"内核"

ZeroClaw 的 shell 沙箱逃逸修复、IronClaw 的租户级沙箱 profile、Hermes 的 SSRF guard、NanoBot 的 per-session sandbox——安全不再是"代理外围的权限校验"，而是**深入执行引擎的设计约束**。Rust 系项目（ZeroClaw）正将内存安全作为差异化卖点，值得关注其在嵌入式 Agent 场景的长期竞争力。

### 7.6 语音/实时交互成为下一波竞争焦点

OpenClaw 的 Realtime/Talk 链路（macOS relay + Azure Foundry GPT Realtime）与 Hermes 的实时语音 provider 合约（#81404）同日出现，表明 **语音双向实时交互** 正在从功能请求走向架构规划。对开发者而言，提前布局"语音 + 工具调用 + 状态持久化"的融合接口将具备先发优势。

### 7.7 渠道"功能对齐"运动兴起

社区不再满足于"能收发消息"，而是系统性要求 **跨渠道功能对齐**：WhatsApp 音频收发（NanoBot #5149）、Telegram session 管理（PicoClaw #3307）、微信审批中文回复（CoPaw #6804）、Discord 文档审计（Hermes #11349）。这意味着渠道适配层需要 **统一的能力抽象**（如消息编辑、媒体上传、交互按钮），而非逐渠道打补丁。

### 7.8 文档/行为一致性成为项目治理分水岭

IronClaw 的 Doc-Truth 管线（用户提案当天 5 PR 响应）与 Hermes 的 Discord 文档漂移审计，共同指向一个趋势：**AI Agent 的文档即产品**——错误文档会直接"喂养"模型导致拒绝执行用户请求（IronClaw #7367）。建立 doc-fact 契约测试和发布分支门禁，将成为高质量项目的标配。

---

## 总结

个人 AI 助手开源生态正处在 **"规模爆发 → 质量攻坚"** 的转折点。头部项目凭借社区和功能广度占据主导，但普遍面临稳定性债务、合并积压与安全挑战。对技术决策者而言，当前选型建议：

- **追求生态丰富度与最新能力** → OpenClaw（需承担 beta 级稳定性风险）；
- **生产环境安全优先** → IronClaw / ZeroClaw（安全模型更成熟，但社区规模较小）；
- **桌面端/渠道集成** → LobsterAI / CoPaw（迭代稳定，垂直场景扎实）；
- **轻量快速部署** → NanoBot（简单可靠，但功能边界有限）。

无论选择哪个项目，**可观测性、成本控制、记忆安全** 这三个跨生态共识都应纳入自己的 Agent 应用设计基线。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-08

---

## 1. 今日速览

过去 24 小时 NanoBot 社区活跃度较高：**10 条 Issue 更新**（8 条新开/活跃、2 条已关闭），**21 条 PR 更新**（10 条待合并、11 条已合并/关闭），无新版本发布。当前开发焦点集中在**会话历史/工作区安全隔离**（#5278/#5279/#5283）、**WebUI 体验修复**（#5268/#5285/#5284/#5281/#5277）以及**记忆与 Dream 归档**（#5231/#5280）三条主线，安全相关讨论为近期社区最突出诉求。项目总体健康，提交节奏密集，维护者响应及时。

---

## 3. 项目进展

今日共 **11 条 PR 被合并/关闭**，覆盖 WebUI、会话管理、记忆系统、通道稳定性与文档多个方向：

### WebUI 与前端体验
- [fix(webui): stage out-of-media-root attachments on history reads (#5268)](https://github.com/HKUDS/nanobot/pull/5268) — 修复历史消息接口对媒体根目录外附件缺失 `media_urls` 的问题，**关闭 Issue #5264**，使 WebSocket 与历史读取行为一致。
- [fix(webui): preserve newly created topic route (#5285)](https://github.com/HKUDS/nanobot/pull/5285) — 修复新建话题路由在优化列表确认前丢失的回归问题。
- [refactor(webui): remove legacy session messages route (#5284)](https://github.com/HKUDS/nanobot/pull/5284) — 移除已无调用方的 `/api/sessions/{key}/messages` 遗留路由及冗余代码。
- [fix(webui): keep activity text crisp while fading edges (#5281)](https://github.com/HKUDS/nanobot/pull/5281) — 用指针透明渐变替代遮罩，改善活动区边缘淡出的文本清晰度。
- [feat(webui): expand model preset editor inline (#5277)](https://github.com/HKUDS/nanobot/pull/5277) — 模型预设编辑器改为行内展开，交互更紧凑。

### 会话与记忆管理
- [fix(session): preserve proactive channel delivery during session retention trimming (#5272)](https://github.com/HKUDS/nanobot/pull/5272) — 修复会话裁剪误删主动频道投递消息（cron 通知/任务投递）的问题，**关闭 Issue #5273**。
- [fix(memory): archive short idle sessions for Dream (#5280)](https://github.com/HKUDS/nanobot/pull/5280) — 短空闲会话现可被归档进 `history.jsonl`，补全 Dream 输入覆盖。与已合并的 [feat(memory): archive idle sessions for Dream (#5231)](https://github.com/HKUDS/nanobot/pull/5231) 构成完整闭环。

### 通道与基础设施
- [fix(channels): preserve global progress defaults (#5287)](https://github.com/HKUDS/nanobot/pull/5287) — 保留未显式选择通道的 `sendProgress`/`sendToolHints` 全局默认值，并补充 Mattermost 回归测试。
- [fix(weixin): harden protocol delivery, streaming, and login (#5263)](https://github.com/HKUDS/nanobot/pull/5263) — 微信通道跟上 openclaw-weixin 2.4.6 协议，强化投递重试、登录与生命周期处理。
- [fix: modernize dependency recovery guidance (#5282)](https://github.com/HKUDS/nanobot/pull/5282) — 文档中将过时的依赖直装指引替换为 `nanobot plugins enable` 标准命令。

> 项目整体向前迈进：WebUI 遗留路由清理与回归修复齐头并进，会话/记忆路径在正确性上得到实质修补，微信通道的协议对齐有助于生产环境稳定性。

---

## 4. 社区热点

今日讨论集中在以下几处（按评论活跃度排序）：

- [Issue #5266: [enhancement] Logs about token consumption (#5266)](https://github.com/HKUDS/nanobot/issues/5266) — **10 条评论**，为今日最热议题。用户反馈 2 小时内消耗百万级 token 且无对应可见活动，要求日志记录每次调用的时间和 token 用量。核心诉求是**成本可观测性**，背后可能涉及模型重试、后台任务或长上下文累积导致的隐形消耗。

- [Issue #5149: no audio ? (#5149)](https://github.com/HKUDS/nanobot/issues/5149) — **5 条评论**。WhatsApp 通道可接收但不发送音频消息，日志含 `neonize.utils.ffmpeg WARNING`，推测为媒体处理链路问题。该问题自 7/28 起已持续 10 天仍无修复 PR，用户对基础能力的缺失有明显不满。

- [Issue #5198: Not possible to change models in a specific session (#5198)](https://github.com/HKUDS/nanobot/issues/5198) — **3 条评论**。用户尝试通过 UI 模型徽标或 `/model` 命令切换当前会话模型，期望与 Cloud SaaS 产品一致，但实际行为是仅回退到备用模型。反映了对**会话级模型控制灵活性**的需求。

- 安全讨论链（#5276 / #5278）各 2 条评论，但已催生 #5279、#5283 两个对应 PR，说明维护者对安全类反馈响应积极。

**用户诉求共性**：更细粒度的控制（模型、成本、文件隔离）和可观测性（token 日志）是目前社区最集中的声音。

---

## 5. Bug 与稳定性

按严重程度排列：

### 高 — 安全与隔离
- [Issue #5278: [Security] Session history should not live inside the agent workspace](https://github.com/HKUDS/nanobot/issues/5278) — 会话历史位于 `<workspace>/sessions/` 后，启用 `restrict_to_workspace` 时 agent 可经文件工具直接读取自身历史文件，形成越权读写。**已有修复 PR #5279**（开放中，提出将会话历史移出 workspace）。
- [Issue #5276: Allow enforcing session-level temporary file isolation](https://github.com/HKUDS/nanobot/issues/5276) — `~/.nanobot/workspace` 仍被所有会话共享读写，多用户/多会话场景存在数据串扰。**增强 PR #5283** 已提交（opt-in `per_session_sandbox`），实现非 WebUI 通道的每会话独立沙箱。

### 中 — 功能异常
- [Issue #5149: no audio ?](https://github.com/HKUDS/nanobot/issues/5149) — WhatsApp 发送音频不可用（可接收），影响核心媒体能力。**无关联修复 PR**。
- [Issue #5198: Not possible to change models in a specific session](https://github.com/HKUDS/nanobot/issues/5198) — 会话内模型切换无效。**无关联修复 PR**。
- [Issue #5256: /goal message produces dozens of repeated replies](https://github.com/HKUDS/nanobot/issues/5256) — 单条 `/goal` 触发数十条近似重复回复，形成系统循环，用户需人工介入才终止。**无关联修复 PR**。

### 低 — 已修复
- [Issue #5264: media_urls missing for files outside media root](https://github.com/HKUDS/nanobot/issues/5264) — 已由 **PR #5268** 合并修复。
- [Issue #5273: retention trimming drops proactive channel delivery messages](https://github.com/HKUDS/nanobot/issues/5273) — 已由 **PR #5272** 合并修复。

> 稳定性观察：今日无崩溃级回归，但两个安全相关 issue（#5278、#5276）均处于 "已发现问题、修复待合入" 状态，建议优先 review 对应 PR。Telegram 轮询静默停止问题（#5171）的修复 PR #5156 仍开放中，需关注。

---

## 6. 功能请求与路线图信号

- **Token 消耗日志（#5266）**：明确需求，当前无对应 PR。若采纳，可能涉及会话级 token 计量、调用链日志或按工具/模型维度的成本拆分。
- **Agent Plugins 与 CLI Apps 集成（PR #5288，开放）**：统一插件包边界，使 CLI 应用与手动插件共用同一格式，属平台化方向。
- **临时聊天模式（PR #5252，开放）**：WebUI 新增非持久化多轮会话，适合隐私或探索性对话场景。
- **每会话沙箱隔离（PR #5283，开放）**：响应 #5276 的 opt-in 方案，非 WebUI 通道可获得独立文件系统沙箱。
- **Telegram 贴纸与消息反应（Issue #5289，新开）**：含 `send_sticker` 支持及 agent 主动消息反应，属于通道能力补全。
- **子代理对话持久化（PR #5291，开放）**：子代理运行时的工具调用、推理过程完整落盘，便于事后审查与调试。
- **模型无关的计算机使用工具（PR #4276，开放）**：computer_use + browser 工具，愿景大、实现复杂，已开放近两个月，需维护者明确取舍。
- **Matrix 线程会话隔离（PR #5286，开放）**：按 `m.thread` 根事件派生稳定会话键，改进 Matrix 多线程体验。

> 路线图信号：安全/隔离、WebUI 交互细节、Agent 可观测性（子代理转录）是近期 PR 的三大趋势；token 计量与成本控制可能成为下一个功能热点。

---

## 7. 用户反馈摘要

- **Token 消耗焦虑（#5266）**：用户报告“2 小时百万 token、无可感知活动”，对默认配置下的成本失控有真实痛感，希望获得“何时、哪个调用、消耗多少”的细粒度日志。这是当前最突出的运营侧痛点。

- **WhatsApp 基础能力缺失（#5149）**：用户明确表达“能收不能发”的困惑，音频媒体处理链路存在兼容性问题，且已持续超 10 天未修复，影响信任度。

- **模型切换与 SaaS 体验落差（#5198）**：用户以 Claude/ChatGPT 等产品作为参照，期待点击模型徽标即可切换当前会话模型；当前实现仅将其他模型作为回退，不符合“用户主导”的心理模型。

- **重复回复干扰（#5256）**：`/goal` 循环刷屏严重干扰使用，用户指出“直到用户介入或模型自我识别为循环才结束”，反映了对循环防护机制（如重复检测、最大重试）的需求。

- **安全敏感用户（#5278、#5276）**：用户关注会话历史与临时文件的可隔离性，尤其在多会话/多用户场景下，认为当前“全局共享”设计存在数据越权风险。安全意识的用户会主动审查存储布局。

---

## 8. 待处理积压

以下为长期未合入/未响应但影响面较大的项：

- [PR #4276: feat(tools): model-agnostic computer use](https://github.com/HKUDS/nanobot/pull/4276) — 自 6/10 开放至今近 **60 天**。计算机使用 + 浏览器自动化的愿景型 PR，涉及面广、review 成本高，建议维护者明确表态或拆分。
- [PR #5156: fix(telegram): recover from silently stalled polling](https://github.com/HKUDS/nanobot/pull/5156) — 自 7/29 开放，修复 Telegram 静默断连的生产问题（关联 #5171），稳定性收益明确，值得优先处理。
- [Issue #5149: WhatsApp 无音频输出](https://github.com/HKUDS/nanobot/issues/5149) — 自 7/28 报告，10 天无修复 PR 关联，建议诊断 ffmpeg 路径后安排修复。
- [Issue #5198: 会话内模型切换无效](https://github.com/HKUDS/nanobot/issues/5198) — 自 7/31 报告，影响日常使用灵活性，建议评估 UI 与 `/model` 命令的语义修正。
- [PR #5252: feat(webui): add temporary chat mode](https://github.com/HKUDS/nanobot/pull/5252) — 开放中、功能完整（含多临时会话、不落盘），或许能在后续版本合并。

---

> **总结**：NanoBot 今日在 WebUI 稳定性、会话/记忆正确性和通道协议对齐上完成了大量合入，项目整体保持健康、快速迭代节奏。安全隔离讨论成为当前社区最重要的路线图信号，token 可观测性则是用户侧最迫切的实际诉求。建议维护者优先 merge #5279 与 #5283 以回应安全关切，并为 #5266 给出明确的设计方向。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-08

## 1. 今日速览

过去 24 小时项目保持高活跃度：**Issue 更新 50 条**（新开/活跃 45 条，关闭 5 条），**PR 更新 50 条**（待合并 47 条，合并/关闭 3 条），**无新版本发布**。项目整体处于密集开发迭代期，但健康度存在隐忧——当天多达 **4 个 P1 级 Bug** 仍在处理中且均无对应 fix PR，集中指向会话状态（session-state）一致性与消息投递可靠性；同时 47 个 PR 待合并也暗示维护者侧合并管线存在积压。社区侧需求旺盛：跨平台会话共享（[#4335](https://github.com/NousResearch/hermes-agent/issues/4335)）连续 4 个月保持高讨论量，WhatsApp 功能对齐活动（[#79890](https://github.com/NousResearch/hermes-agent/issues/79890)）正在成形。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日记录到 **3 个 PR 合并/关闭**（可见 2 个），**47 个 PR 待合并**。主要推进方向：

**已关闭 PR：**
- [PR #80808](https://github.com/NousResearch/hermes-agent/pull/80808)（type/bug, P2）：要求 agent 在权限、安全、仓库、外部系统等实现边界处输出**可操作的交接信息（actionable handoffs）**，避免任务以模糊的"部分完成"状态终止。属于工作流质量改进，已被更新版 [PR #81415](https://github.com/NousResearch/hermes-agent/pull/81415) 取代。
- [PR #81412](https://github.com/NousResearch/hermes-agent/pull/81412)：增加策略性回退委派到本地 Qwen 子代理的机制。

**待合并 PR 中值得关注的前进信号：**
- [PR #81408](https://github.com/NousResearch/hermes-agent/pull/81408)：为 `cronjob` 工具新增 `get` 动作和 `include_prompt` 参数，直接回应用户需求 [#18374](https://github.com/NousResearch/hermes-agent/issues/18374) —— 说明社区功能建议到 PR 的转化通路顺畅。
- [PR #81411](https://github.com/NousResearch/hermes-agent/pull/81411)：修复 Kanban worker 终止时只杀 PID 不杀整个进程组的问题（对应 [#80280](https://github.com/NousResearch/hermes-agent/issues/80280)），解决"僵尸 worker 进程组残留"。
- [PR #81395](https://github.com/NousResearch/hermes-agent/pull/81395)：修复同一会话多前端（Web Dashboard + Desktop）事件流只发送给最后一个前端的问题（对应 [#81286](https://github.com/NousResearch/hermes-agent/issues/81286)）。
- 安全加固系列：cron SSRF 防护（[#81407](https://github.com/NousResearch/hermes-agent/pull/81407)）、`browser_cdp` SSRF guard（[#80847](https://github.com/NousResearch/hermes-agent/pull/80847)）、持久化 tool-result 存储硬化（[#80760](https://github.com/NousResearch/hermes-agent/pull/80760)）、审批提示中的不可见 Unicode 可视化（[#81403](https://github.com/NousResearch/hermes-agent/pull/81403)）。

总体判断：项目仍在快速迭代，但**修复类 PR 合并速度明显慢于新 Bug 曝光速度**，这是需要关注的风险信号。

## 4. 社区热点

今日讨论最活跃的 Issues（按评论数排序）：

| Issue | 评论 | 标签 | 热度分析 |
|---|---|---|---|
| [#4335 Cross-platform session context sharing](https://github.com/NousResearch/hermes-agent/issues/4335) | 12 | feature, P3, needs-decision | 3 月底创建至今保持最高讨论量（👍3）。用户核心诉求是打破 CLI↔Telegram 等平台间的会话隔离。长期停留在 `needs-decision`，社区开始明显不耐烦。 |
| [#79278 Context compression drops in-flight tool chain](https://github.com/NousResearch/hermes-agent/issues/79278) | 10 | bug, P1 | 预检压缩在工具链执行中触发导致**工具结果丢失 + agent 重放步骤**，对非幂等操作不安全。这是近期高危 Bug，评论区有深度的机制分析。 |
| [#11349 Discord 文档漂移](https://github.com/NousResearch/hermes-agent/issues/11349) | 9 | docs, P3 | 已关闭。用户对 Discord 集成做了系统化审计，列出 6 处文档与代码不一致 + `/voice join` 缺失。说明社区愿意投入深度 QA 并回馈项目。 |
| [#65365 OAuth Claude Pro/Max HTTP 400](https://github.com/NousResearch/hermes-agent/issues/65365) | 8 | bug, P1 | 暴露 `memory`/`session_search` 工具 schema 即触发 Anthropic "You're out of extra usage" 400。影响订阅用户 + 计费正确性，讨论热度高。 |
| [#79890 WhatsApp Feature Parity Campaign](https://github.com/NousResearch/hermes-agent/issues/79890) | 6 | feature, meta | 社区发起 WhatsApp 功能对齐活动（对比 WhatsApp Business Platform Cloud API 与 bridge 实际行为），意图系统性补齐 WhatsApp 平台能力。 |

**趋势判断**：社区注意力集中在两条主线——①**跨平台/多端体验的连续性问题**（会话共享、WhatsApp、Telegram）；②**底层机制安全性问题**（压缩丢链、OAuth 计费错误、会话状态一致性）。前者反映用户对 Hermes 作为"个人 AI 助手"的期望在升高，后者反映项目激进的压缩/会话管理机制正在产生真实风险。

## 5. Bug 与稳定性

按严重程度排列今日活跃 Bug：

**🔴 P1（紧急，均无对应 fix PR）**

1. [**#79278**](https://github.com/NousResearch/hermes-agent/issues/79278)：context compression 在工具链执行中触发 → 工具结果永久丢失 → agent 误判失败并重放（10 评论）。对非幂等操作（如支付、写入）存在实际安全风险。此问题需要立即修复或引入压缩时机互斥。
2. [**#65365**](https://github.com/NousResearch/hermes-agent/issues/65365)：OAuth Claude Pro/Max 下 `memory`/`session_search` 工具 schema 导致 Anthropic 400 "out of extra usage"（8 评论）。影响所有订阅型 Claude 用户，涉及计费冒用和会话不可用，创建已超 3 周仍未修复。
3. [**#79624**](https://github.com/NousResearch/hermes-agent/issues/79624)：Gateway 重启预检压缩遇超大会话（>98,304 tokens）直接 `exit(1)`，进程崩溃（4 评论）。会话越大越容易触发，高危遗留用户。
4. [**#81267**](https://github.com/NousResearch/hermes-agent/issues/81267)：Cron + 后台 `delegate_task` 场景下 SessionDB `use-after-close` 静默丢弃子代理 transcript，completions 不可路由（`session_key=<cli>`），另缺 Discord 消息编辑工具（1 评论）。属于多缺陷捆绑报告，涉及 c

ron 生产稳定性。

**🟡 P2（中高，部分已有修复方向）**

- [**#22418**](https://github.com/NousResearch/hermes-agent/issues/22418)：macOS 桌面 gateway 与 CLI `--replace` 冲突，Discord token 锁被阻塞（5 评论，已存活 3 个月）。
- [**#54523**](https://github.com/NousResearch/hermes-agent/issues/54523)：Tailscale 远程桌面场景 asyncio 阻塞 10–25s，叠加 Chromium/Electron 网络问题（3 评论）。
- [**#81290**](https://github.com/NousResearch/hermes-agent/issues/81290)：Windows 副窗口黑屏且无生命周期诊断（1 评论）。
- [**#80569**](https://github.com/NousResearch/hermes-agent/issues/80569)：Windows 安装/更新留下重复启动项并可自动复活（1 评论）。
- [**#80968**](https://github.com/NousResearch/hermes-agent/issues/80968)：Windows `--tui` 输入任意命令后 gateway 崩溃（已标 duplicate）。
- [**#80847**（PR）](https://github.com/NousResearch/hermes-agent/pull/80847)：`browser_cdp` frame_id 非 dict 参数绕过 SSRF guard —— 安全相关，已有 fix PR 待合并。
- **已关闭**：Telegram 代码块复制 UI 缺失（[#79331](https://github.com/NousResearch/hermes-agent/issues/79331)）、Telegram 媒体组消息拆分（[#46100](https://github.com/NousResearch/hermes-agent/issues/46100)）。

**🟢 P3（Kanban/cron 类集中爆发）**

- [#80280](https://github.com/NousResearch/hermes-agent/issues/80280) 超时 worker 进程组残留（有 fix PR [#81411](https://github.com/NousResearch/hermes-agent/pull/81411)）
- [#80512](https://github.com/NousResearch/hermes-agent/issues/80512) circuit-breaker `gave_up` 后 zombie 仍执行并完成任务
- [#80507](https://github.com/NousResearch/hermes-agent/issues/80507) 委派子任务耗尽父任务回合预算
- [#79728](https://github.com/NousResearch/hermes-agent/issues/79728) / [#75444](https://github.com/NousResearch/hermes-agent/issues/75444) / [#79738](https://github.com/NousResearch/hermes-agent/issues/79738)：auto-decomposer 循环重新分派已升级任务

**健康度观察**：P1 级问题数量多且滞留时间长（#65365 已 3 周+），而修复 PR 合并缓慢。若该趋势持续，稳定性和用户信任可能受到影响。

## 6. 功能请求与路线图信号

- **跨平台会话共享（[#4335](https://github.com/NousResearch/hermes-agent/issues/4335)）**：最具呼声的 Feature Request，4 个月 12 条评论。但因涉及 gateway 架构级改动，仍停留在 `needs-decision`。预计短期难以落地，建议维护者至少明确回应架构方向。
- **Cron 完整 prompt 读取（[#18374](https://github.com/NousResearch/hermes-agent/issues/18374)）**：已有对应 PR [#81408](https://github.com/NousResearch/hermes-agent/pull/81408) 待合并，**极有可能进入下一版本**。这是沙箱代理管理 cron 的关键能力补全。
- **First-class Teams（[#81405](https://github.com/NousResearch/hermes-agent/issues/81405)）**：今日新开的 meta 级功能，提出持久化多 profile 团队、频道、共享能力等。结合已有的 Profiles + Kanban 基础，这可能是项目从"单代理助手"走向"多代理团队操作系统"的路线图信号。
- **WhatsApp Feature Parity Campaign（[#79890](https://github.com/NousResearch/hermes-agent/issues/79890)）**：社区主动发起的对齐活动，涉及消息历史、联系人查询（[#69659](https://github.com/NousResearch/hermes-agent/issues/69659)）。若维护者纳入规划，WhatsApp 将成为下一重点平台。
- **实时语音 provider 合约（[PR #81404](https://github.com/NousResearch/hermes-agent/pull/81404)）**：Draft PR，定义标准化的实时语音 provider 接口，是语音交互功能走向开放生态的第一步。

**路线图信号汇总**：会话连续性（跨平台/上下文）、Kanban/多代理协作能力深化、实时语音、WhatsApp 平台对齐，是当前社区驱动的四大需求方向。

## 7. 用户反馈摘要

- **"跨平台记忆断裂"是高频痛点**：用户希望 CLI/TG/Discord 之间共享会话上下文（[#4335](https://github.com/NousResearch/hermes-agent/issues/4335)）；沙箱代理则抱怨 cron 任务"只读得到 prompt_preview，读不到完整 prompt"（[#18374](https://github.com/NousResearch/hermes-agent/issues/18374)）。
- **压缩/恢复机制引发安全性质疑**：用户在 [#79278](https://github.com/NousResearch/hermes-agent/issues/79278) 中明确指出工具结果丢失后 agent 重放"对任何非幂等操作都不安全"；[#79624](https://github.com/NousResearch/hermes-agent/issues/79624) 则暴露超大会话直接杀死 gateway 进程。用户对自动压缩机制的信任度正在下降。
- **Telegram 用户体验细节被持续打磨**：#79331（代码块无复制按钮）、#46100（媒体组消息被拆成多轮）均已关闭修复，社区反馈正向收敛。
- **Windows 桌面端用户"带伤运行"**：多起报告显示桌面应用存在启动项重复（#80569）、黑屏无恢复（#81290）、card 卡死覆盖 UI（#79833）、WSL 探测噪音（#80184）等问题。用户可正常运行但体验被反复刺伤，情绪以"你们什么时候修"为主。
- **高质量社区贡献者涌现**：#11349 的 Discord 审计、#79890 的 WhatsApp 对齐清单，均属产出级贡献；#4335 的诉求表述和方案讨论也相当完整。社区从"报 Bug"向"参与产品设计"演进。

## 8. 待处理积压

以下高价值 Issue/PR 处于长期未解决或被搁置状态，建议维护者优先关注：

---

### 1. [#4335 Cross-platform session context sharing](https://github.com/NousResearch/hermes-agent/issues/4335)
**状态**：OPEN，2026-03-31 创建，12 评论，需要决策  
**风险**：已在 `needs-decision` 停留 4 个月。作为社区讨论度第一的 Feature Request，长期无决策会削弱社区参与意愿。

### 2. [#22418 macOS desktop-gateway 与 CLI --replace 冲突](https://github.com/NousResearch/hermes-agent/issues/22418)
**状态**：OPEN，2026-05-09 创建，5 评论  
**风险**：macOS 桌面用户的实际稳定性问题，3 个月未修复。

### 3. [#65365 OAuth Claude Pro/Max 400 错误](https://github.com/NousResearch/hermes-agent/issues/65365)
**状态**：OPEN，2026-07-16 创建，P1，8 评论，无 fix PR  
**风险**：P1 级 Bug 滞留超 3 周，且涉及计费风险。必须优先处理。

### 4. [#18374 Cron prompt 读取功能请求](https://github.com/NousResearch/hermes-agent/issues/18374)
**状态**：OPEN，2026-05-01 创建，5👍，已有 PR [#81408](https://github.com/NousResearch/hermes-agent/pull/81408)  
**风险**：功能请求已实现但 PR 尚未合并，需尽快推进合并并关闭 Issue。

### 5. Kanban/cron 稳定性 Issue 群
[#80280](https://github.com/NousResearch/hermes-agent/issues/80280)、[#80512](https://github.com/NousResearch/hermes-agent/issues/80512)、[#80507](https://github.com/NousResearch/hermes-agent/issues/80507)、[#79738](https://github.com/NousResearch/hermes-agent/issues/79738)、[#75444](https://github.com/NousResearch/hermes-agent/issues/75444)
**状态**：多个 P3 级 worker 生命周期问题，集中在 8 月初爆发  
**风险**：虽然单个优先级不高，但数量密集且共享根因（进程组管理、auto-decomposer 状态判断）。建议做一次集中复盘。

---

**编辑点评**：Hermes Agent 正在经历快速增长期的"发育痛"——社区需求旺盛、贡献质量高，但 P1 Bug 滞留和合并管线积压正在成为瓶颈。建议维护者优先合入已就绪的 Kanban 进程组修复（[#81411](https://github.com/NousResearch/hermes-agent/pull/81411)）和 cron prompt 功能（[#81408](https://github.com/NousResearch/hermes-agent/pull/81408)），并尽快对 4 个 P1 Bug 作出响应。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-08-08

## 1. 今日速览

过去24小时PicoClaw项目共有 **4条Issue更新**（3条活跃、1条关闭）和 **14条PR更新**（12条待合并、2条已合并/关闭），无新版本发布。合并的2个PR均为Dependabot自动依赖升级（`copilot-sdk/go`、`pion/rtp`），而12个待合并PR中包含**多个高优先级修复**（WhatsApp连接、exec超时、工具调用格式泄漏等），这说明社区贡献活跃，但维护者合并速度正成为瓶颈。此外，几乎所有活跃条目均被标记为 `stale`，同时更新日期停留在8月7日，暗示项目的**审阅积压问题**可能正在加剧。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日仅合并/关闭了2个依赖更新类PR，均为Dependabot自动操作：

- [PR #3291](https://github.com/sipeed/picoclaw/pull/3291)：`github.com/github/copilot-sdk/go` 从 0.2.0 升级至 1.0.8（跨多个版本，包含可能的功能与安全修复）
- [PR #3289](https://github.com/sipeed/picoclaw/pull/3289)：`github.com/pion/rtp` 从 1.10.2 升级至 1.10.5（WebRTC相关补丁）

依赖维护持续进行中，但**功能性改动零合并**。目前仍有12个PR待合并，其中以下PR若落地将显著提升项目稳定性：

- [PR #3320](https://github.com/sipeed/picoclaw/pull/3320)：升级 `whatsmeow` 依赖，修复WhatsApp "client outdated (405)" 断连问题
- [PR #3319](https://github.com/sipeed/picoclaw/pull/3319)：修复 `exec` 工具忽略单次超时参数、布尔选项类型错误的问题
- [PR #3279](https://github.com/sipeed/picoclaw/pull/3279)：修复 seahorse 摘要中工具调用格式泄漏的bug
- [PR #3283](https://github.com/sipeed/picoclaw/pull/3283)：为DingTalk渠道增加图片消息接收支持

## 4. 社区热点

- [Issue #3093（已关闭）](https://github.com/sipeed/picoclaw/issues/3093) 以 **6条评论** 成为今日讨论量最高条目。用户请求接入 SimpleX、Wire、Tox 等网关，虽然因stale被关闭，但反映部分社区成员对**去中心化/隐私优先通讯协议**的持续兴趣。

- [Issue #3302](https://github.com/sipeed/picoclaw/issues/3302) 请求为MCP服务器支持 **OAuth 2.1**（与 #2546 同诉求），表明企业级认证需求正在浮现，但当前讨论热度不高（2条评论）。

- [Issue #3308](https://github.com/sipeed/picoclaw/issues/3308) 虽然仅有1条评论，但内容是一份**深度的代码审查报告**，涉及SeaHorse、Channel Manager、Hooks等核心模块的并发风险、goroutine泄漏和性能优化。这显示出有开发者愿意深入源码并贡献专业意见，是社区健康度的积极信号。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题描述 | 状态 | 对应修复 |
|---|---|---|---|
| 🔴 高 | [Issue #3308](https://github.com/sipeed/picoclaw/issues/3308)：社区代码审查指出 SeaHorse、Channel Manager、Hooks 存在**并发安全隐患、goroutine泄漏**及内存/性能优化空间 | 开放、待深入讨论 | 暂无PR |
| 🔴 高 | [PR #3320](https://github.com/sipeed/picoclaw/pull/3320)：WhatsApp 因客户端版本过旧被服务端拒连，报 `Client outdated (405)`，且无自动重连 | 修复PR已提交，待合并 | 该PR本身 |
| 🟡 中 | [PR #3319](https://github.com/sipeed/picoclaw/pull/3319)：`exec` 工具声明的单次 `timeout` 参数被静默忽略，始终使用全局超时；`background`/`pty` 被错误声明为字符串而非布尔 | 修复PR已提交，待合并 | 该PR本身 |
| 🟡 中 | [PR #3279](https://github.com/sipeed/picoclaw/pull/3279)：seahorse 的 `partsToReadableContent` 可能将**工具调用格式泄漏**进LLM摘要，影响输出质量 | 修复PR已提交，待合并 | 该PR本身 |

## 6. 功能请求与路线图信号

- [Issue #3307](https://github.com/sipeed/picoclaw/issues/3307)：请求为 Telegram 等聊天渠道增加 **session 列表/切换命令**，目前该能力仅存在于Web UI。属于渠道功能对齐需求，建议纳入近期迭代。
- [Issue #3302](https://github.com/sipeed/picoclaw/issues/3302)：**MCP 服务器 OAuth 2.1 认证**支持，企业级集成信号，可能对接 #2546 的既有讨论。
- [Issue #3093（已关闭）](https://github.com/sipeed/picoclaw/issues/3093)：SimpleX/Wire/Tox 网关请求，虽已关闭但评论热度较高，若社区持续呼吁可重新评估。

结合待合并PR，下一版本可能包含的能力有：

- **音频与渠道扩展**：[PR #3270](https://github.com/sipeed/picoclaw/pull/3270) 新增 DashScope TTS provider 和微信语音消息发送
- **模型管理增强**：[PR #3200](https://github.com/sipeed/picoclaw/pull/3200) 可配置默认模型 fallback 链（已积压超5周）
- **模型列表刷新**：[PR #3271](https://github.com/sipeed/picoclaw/pull/3271) 更新9家provider的默认模型名至2026年7月最新版本

## 7. 用户反馈摘要

- **渠道体验不对等**：用户 iamtoricool 在 [Issue #3307](https://github.com/sipeed/picoclaw/issues/3307) 中指出，Web UI 拥有完整会话管理，而 Telegram 用户无法列出、切换或删除会话，影响了移动端使用体验。
- **通讯协议扩展诉求**：多个用户在 [Issue #3093](https://github.com/sipeed/picoclaw/issues/3093) 中表达了对 SimpleX、Tox 等加密通讯协议的支持期望，潜在使用场景是替代现有非端到端加密渠道。
- **专业代码审查反馈**：[Issue #3308](https://github.com/sipeed/picoclaw/issues/3308) 的提交者在审查开头对 PicoClaw "在 $10 硬件上以 <10MB 内存和亚秒级启动运行原生Go AI助手" 表示肯定，但随后指出若干工程隐患，属于**建设性批评**。
- **WhatsApp 渠道不可用**：[PR #3320](https://github.com/sipeed/picoclaw/pull/3320) 的提交者（grrowl）报告 WhatsApp 原生渠道在当前依赖版本下完全不可用，但已主动提供修复方案——贡献者活跃度值得肯定。

## 8. 待处理积压

以下条目长期未获维护者响应，提醒关注：

| 条目 | 类型 | 创建时间 | 积压天数 | 说明 |
|---|---|---|---|---|
| [PR #3200](https://github.com/sipeed/picoclaw/pull/3200) | 功能 | 2026-07-01 | 38天 | 可配置默认模型fallback链，Web UI + 后端API完整改动 |
| [PR #3270](https://github.com/sipeed/picoclaw/pull/3270) | 功能 | 2026-07-20 | 19天 | DashScope TTS + 微信语音发送 |
| [PR #3271](https://github.com/sipeed/picoclaw/pull/3271) | 维护 | 2026-07-20 | 19天 | 9家provider默认模型名刷新 |
| [PR #3279](https://github.com/sipeed/picoclaw/pull/3279) | Bug修复 | 2026-07-21 | 18天 | seahorse工具调用格式泄漏 |
| [PR #3283](https://github.com/sipeed/picoclaw/pull/3283) | 功能 | 2026-07-22 | 17天 | DingTalk图片消息支持 |
| [PR #3303](https://github.com/sipeed/picoclaw/pull/3303) 等4个Dependabot PR | 依赖 | 2026-07-30 | 9天 | `actions/stale`、`anthropic-sdk-go`、`aws-sdk-go-v2` 等升级 |

**健康度总结**：贡献者生态活跃且产出质量较高，但维护者的审阅与合并效率已明显低于社区提交速度。12个待合并PR中多数附带 `stale` 标签，若不及时处理，可能挫伤贡献者积极性。建议优先合并直接修bug的 #3319、#3320、#3279，再逐步消化功能类积压PR。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 · 2026-08-08

## 1. 今日速览

过去 24 小时 NanoClaw 共记录 10 条 PR 动态，其中 4 条为新提交、2 条已关闭、8 条仍处于待合并状态；Issue 侧无新增与关闭，社区讨论整体平稳。活跃度评估为**中高**：贡献集中在技能/频道扩展（Mattermost v2、AnyDoc、Tavily MCP）与缺陷修复（失败原因展示、mount 只读、数据库回填）。今日无新版本发布。值得注意的是，积压近半年的 Mattermost 旧架构 PR [#546](https://github.com/qwibitai/nanoclaw/pull/546) 被新实现 [#3199](https://github.com/qwibitai/nanoclaw/pull/3199) 取代并关闭，说明项目正在有序清理技术债、向 v2 架构收敛。

## 2. 项目进展

### 已关闭/合并

- **[#3197](https://github.com/qwibitai/nanoclaw/pull/3197) fix(progress): 失败状态展示具体原因（已关闭）**  
  针对 agent-runner 已在 `resultSummary` 上报错误、但过程卡仅显示「执行系统检查失败」等泛化文案的问题，该 PR 会从失败摘要中提取首条有效原因，展示为「动作失败：具体原因」，并复用脱敏逻辑、限制单行 38 字符。附带 274 项定向测试及飞书卡片 JSON 跨层验证，全量测试 1427 项通过。该改动显著提升了失败状态的可观测性与排障效率。

- **[#546](https://github.com/qwibitai/nanoclaw/pull/546) Add Mattermost channel skill（已关闭）**  
  创建于 2026-02-26 的旧架构实现，因目标为 pre-v2 `Channel`/`registry.ts` 架构，在 `main` 上已不存在。现已被基于 v2 `ChannelAdapter` 重写的 [#3199](https://github.com/qwibitai/nanoclaw/pull/3199) 取代并正式关闭，标志着旧频道架构迁移工作的收尾。

整体判断：项目在 24 小时内完成了一项关键可观测性修复，并清理了一个超长生命周期 PR；同时收到 4 个新贡献，迭代节奏健康。

## 3. 社区热点

由于本次数据未提供评论数/点赞数，以下结合更新频率与内容影响力判断：

- **[#3199 Add Mattermost channel integration（v2 ChannelAdapter）](https://github.com/qwibitai/nanoclaw/pull/3199)**  
  这是对 #546 的完整重写，按当前 `ChannelAdapter`/`channel-registry.ts` 契约从零实现，并显式标注 Supersedes #546。企业级 IM 渠道需求由来已久，新 PR 是社区对「渠道适配器 v2 生态」期待的集中体现。

- **[#3190 feat: add Tavily MCP tool skill](https://github.com/qwibitai/nanoclaw/pull/3190)**  
  已连续多日有更新（8月5日创建，8月7日仍活跃）。作为搜索类 MCP 工具技能，反映社区正在积极将 NanoClaw 构建为通用 AI Agent 工具箱。

- **[#3197 fix(progress): 失败状态展示具体原因](https://github.com/qwibitai/nanoclaw/pull/3197)**  
  当天提交、当天关闭，且中文提交信息、测试完整，展示了项目对外部贡献者的快速响应能力与多语言社区参与度。

## 4. Bug 与稳定性

过去 24 小时无新增 Issue，以下按严重程度梳理当前处理中的问题：

1. **数据完整性：已有 wirings 缺少 channel destinations**  
   [#3145 fix(db): backfill destinations for existing wirings](https://github.com/qwibitai/nanoclaw/pull/3145)（开放中）  
   通过迁移 021 为既有 messaging-group wirings 补齐缺失的 channel destinations，保留所有既有 destination 和自定义本地名称。老用户升级后可能出现消息路由异常，属中高优先级，已有修复 PR，等待合入。

2. **功能缺陷：未知斜杠命令导致响应被静默丢弃**  
   [#2346 fix(formatter): treat unknown slash commands as normal chat](https://github.com/qwibitai/nanoclaw/pull/2346)（开放中，积压约 3 个月）  
   未识别的斜杠命令被分类为 `passthrough`，使 Agent SDK 输出缺少 `<message>` 块，用户消息被静默丢弃。属影响实际使用体验的缺陷，PR 已存在但长期未评审。

3. **稳定性/安全：mount 只读加固**  
   [#3196 Fix/add mount readonly](https://github.com/qwibitai/nanoclaw/pull/3196)（开放中）  
   昨日新提交，细节尚未补充，需维护者确认意图与影响面。

4. **已修复：失败标题泛化问题**  
   [#3197](https://github.com/qwibitai/nanoclaw/pull/3197) 已于今日关闭，无残留。

当前无 P0/P1 级崩溃或安全漏洞报告，稳定性整体可控；但 [#3145](https://github.com/qwibitai/nanoclaw/pull/3145) 与 [#2346](https://github.com/qwibitai/nanoclaw/pull/2346) 建议优先评审。

## 5. 功能请求与路线图信号

- **[#3199 Mattermost 频道集成（v2）](https://github.com/qwibitai/nanoclaw/pull/3199)**  
  新架构下的首个完整社区频道实现。若合入，将极大扩展消息渠道生态，预计进入下一版本。

- **[#2909 模板设置流程与首个 agent 生成（core-team）](https://github.com/qwibitai/nanoclaw/pull/2909)**  
  模板加载器已在 #2890 合入，本 PR 是模板路线图的第二部分，补齐 setup 向导流程与 first-agent 模板填充。来自核心团队、开放已超 1 个月，是「交互式引导 + 模板化创建」方向的关键收尾，极可能进入下一版本。

- **[#3050 feat(setup): add Dial to channel picker + wizard/skills](https://github.com/qwibitai/nanoclaw/pull/3050)**  
  将 Dial 加入频道选择器，配套 `runChannelSkill` 模型，属于 setup 体验与多渠道接入的结合，偏向中期规划。

- **[#3198 AnyDoc 文档转换技能](https://github.com/qwibitai/nanoclaw/pull/3198)** 与 **[#3190 Tavily MCP 工具](https://github.com/qwibitai/nanoclaw/pull/3190)**  
  均为 standalone utility skill，合入门槛低，若社区反馈积极，有望在近期快速合入。

**路线图信号**：项目正从「纯代码配置」向「交互式向导 + 模板 + 多渠道/多工具一键接入」演进，v2 频道适配器架构已成为所有集成类贡献的基础。

## 6. 用户反馈摘要

由于本次数据未包含 Issue 评论内容，以下反馈基于 PR 描述与改动所对应的用户痛点：

- **用户需要可操作的失败信息**，而非「执行系统检查失败」这类泛化文案；对应修复 [#3197](https://github.com/qwibitai/nanoclaw/pull/3197) 已合入流程，反馈得到快速响应。
- **未知命令不应被静默吞掉**；用户在使用自定义/拼写错误斜杠命令时会收到“无响应”，[#2346](https://github.com/qwibitai/nanoclaw/pull/2346) 正是针对该体验问题。
- **老用户升级后需要无损数据迁移**；[#3145](https://github.com/qwibitai/nanoclaw/pull/3145) 体现出社区对升级平滑性的要求。
- **贡献者在主分支快速迭代中容易踩中过期架构**；#546 的半年积压与最终被取代，说明外部贡献者亟需更清晰的 v2 开发指引。

整体来看，用户与贡献者对修复类 PR 的响应速度满意，但对部分开放过久的 PR（如 #2346）存在一定等待成本。

## 7. 待处理积压

以下 PR 开放时间较长，提醒维护者关注：

| PR | 标题 | 开放时长 | 建议 |
|---|---|---|---|
| [#2346](https://github.com/qwibitai/nanoclaw/pull/2346) | fix(formatter): treat unknown slash commands as normal chat | 约 92 天 | 功能缺陷，建议优先评审 |
| [#2909](https://github.com/qwibitai/nanoclaw/pull/2909) | feat(setup): template setup flow in wizard and first-agent stamping | 约 37 天 | 核心团队、路线图关键收尾，建议加速 |
| [#3050](https://github.com/qwibitai/nanoclaw/pull/3050) | feat(setup): add Dial to channel picker + wizard/skills | 约 25 天 | 等待维护者设计反馈 |
| [#3145](https://github.com/qwibitai/nanoclaw/pull/3145) | fix(db): backfill destinations for existing wirings | 约 11 天 | 数据迁移，建议尽快合入或给出方案 |

另外，#546 虽已关闭，但它是「因架构过期而长期滞留」的典型样本。建议在贡献指南中明确当前 v2 `ChannelAdapter` 架构与 `SKILL.md` 规范，帮助外部贡献者避开类似陷阱。

---

*本日报数据来源：GitHub Pull Requests/Issues 公开数据；统计周期为 2026-08-07 至 2026-08-08。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-08

> 数据窗口：2026-08-07 ~ 2026-08-08 | 数据源：github.com/nearai/ironclaw

---

## 1. 今日速览

过去 24 小时项目保持高强度迭代：**50 条 Issue 更新**（36 活跃 / 14 关闭）与 **50 条 PR 更新**（38 待合并 / 12 已合并或关闭）基本持平，无新版本发布。今日核心主线是 **“文档真实性（Doc-Truth）”治理**——围绕 #7317 提案一口气开出 5 个配套 PR（#7375、#7376、#7378、#7379、#7381），直指“发布版本与公开文档漂移”这一根因问题。功能侧，**批量工具描述**（#7374）、**记忆持久化修复**（#7365）、**脚本化压力测试**（#7382）三大 PR 均处于待合并状态，预计未来数日将显著提升 Reborn 运行时的工具发现效率、跨会话记忆可靠性与 CI 压力覆盖。社区侧，用户反馈集中在**模型设置无法重置**（#7340）、**文档误导**（#7367）与**跨会话记忆丢失**（#7185）三个痛点上，均已得到维护者响应或对应修复 PR。整体项目健康度良好，但 P1 QA bug 集群（Slack/GitHub 身份误判、runner 失联等）与长期积压的 runner 租约过期问题仍需持续关注。

---

## 2. 版本发布

**无新版本发布**（最新 Releases 为空）。当前正处于 `1.0.0-rc.1 → 1.1.0-rc.1` 过渡后的功能密集合并期，结合 #7380（持久化状态兼容性 epic）与 #7379（docs-live 发布分支）的进展，下一次 RC 版本大概率会包含：Doc-Truth 管线、批量工具描述、记忆持久化、压力测试脚本化等已排期能力。

---

## 3. 项目进展

今日共有 **12 条 PR 合并/关闭**，以下为其中影响最大的 5 项：

| PR | 规模/风险 | 说明 |
|---|---|---|
| [#7214 feat(sandbox): add explicit Docker and Railway user sandbox profiles](https://github.com/nearai/ironclaw/pull/7214) | XL / 中 | 新增 Docker 与 Railway 两种用户沙箱 profile，工作区/检查点按“租户+用户”隔离，每条命令在全新非 root Python worker 中执行——沙箱安全模型显著收紧。 |
| [#7157 feat: explicit channel delivery tool — two lanes, notification channels, delivery heuristics deleted](https://github.com/nearai/ironclaw/pull/7157) | XL / 低 | 落地“双通道”消息投递模型：Lane 1 为会话生命周期，Lane 2 为通知通道，删除旧的启发式投递逻辑。是频道投递体验的一次架构级简化。 |
| [#7372 test(disclosure): pin wide-catalog schema-token reduction floor and make drift visible](https://github.com/nearai/ironclaw/pull/7372) | M / 低 | 将 91 工具宽目录披露基准的 schema-token 缩减下限从“仅打印表格”固化为断言测试，防止 Core 层膨胀悄悄侵蚀 #6810 的 50% 缩减成果。 |
| [#4874 Bug: WebChat v2 chat send fails with "Illegal invocation" over plain HTTP](https://github.com/nearai/ironclaw/issues/4874) | — | 修复非 localhost 主机通过 HTTP 访问 WebChat v2 时发送消息抛 `TypeError` 的问题。 |
| [#7224 [Inspector] Add the Activity timeline and turn navigation](https://github.com/nearai/ironclaw/issues/7224) | — | Inspector 新增实时 Activity 时间线与 turn 导航，支持按 Thread/Run/Turn/Provider 调用/诊断游标关联事件。 |

**合并/关闭的 Issue（14 条）中值得注意的：**
- [#6476 Slack extension_activate 编码错误致模型幻觉](https://github.com/nearai/ironclaw/issues/6476) — 已关闭（拆出 #7367 文档漂移部分）
- [#6644 Telegram 回复错位](https://github.com/nearai/ironclaw/issues/6644)、[#6643 Telegram 消息已接收但不处理](https://github.com/nearai/ironclaw/issues/6643)、[#6475 Telegram /pair 命令不被识别](https://github.com/nearai/ironclaw/issues/6475) — 三个 P1 Telegram QA bug 全部关闭，对应根因转 #7368 追踪
- [#6810 Progressive tool disclosure 默认开启](https://github.com/nearai/ironclaw/issues/6810) — 功能落地并关闭
- [#7177 Schema-aware ranked search for deferred tool retrieval](https://github.com/nearai/ironclaw/issues/7177) — 已关闭

**整体判断**：项目在“工具披露”“频道投递”“沙箱安全”“可观测性”四条线上均有实质落地，且今日新增的 5 个 doc-truth PR 表明维护者正在系统性解决“文档落后于代码”的治理缺陷——这是一个非常积极的项目健康度信号。

---

## 4. 社区热点

按评论活跃度排序，今日最受关注的 Issue：

| Issue | 评论数 | 主题 | 诉求分析 |
|---|---|---|---|
| [#7340 No way to reset model settings to factory defaults](https://github.com/nearai/ironclaw/issues/7340) | 6 | 模型设置无法恢复默认 | 用户改坏配置后无法找回初始状态，缺少“重置为默认”功能。属于**基础可用性缺失**，反馈虽小但直接触达设置页体验。 |
| [#6989 Token accounting: hybrid provider-usage + tail estimates](https://github.com/nearai/ironclaw/issues/6989) | 4 | `ModelWorkRequest` 从 content reference 字符串长度估算 token | 技术债型 bug：估算值来自引用串长度而非被引用内容长度。P1 级（pi-harness 采用计划 #6），影响 token 计费/上下文预算准确性。 |
| [#7317 Proposal: Doc-Truth Verification Pipeline](https://github.com/nearai/ironclaw/issues/7317) | 3 | 文档漂移治理提案 | 用户（cuongdcdev）直接指出 `origin_gate_matrix` 等字段已强制但文档未更新。该提案**当天即获得 5 个 PR 响应**（#7375~#7381），是今日社区声音转化为行动最快的一例。 |
| [#7360 Expand stress coverage across built-in and durable write paths](https://github.com/nearai/ironclaw/issues/7360) | 2 | 压力测试覆盖不足 | 指出 nightly 压测的 mock model 从不返回 tool call，导致内置能力写入路径存在回归盲区。已由 #7382 承接。 |
| [#7367 Docs drift: published docs still say chat cannot connect channels](https://github.com/nearai/ironclaw/issues/7367) | 1（关闭） | 文档说“chat 不能连接频道”，但事实已支持 | 直接导致 model 拒绝执行用户请求——**文档误导已开始伤害真实用户**，从 #6476 拆出的独立根因。 |

**分析**：社区热度高度集中在“**文档与行为不一致**”和“**配置/状态不可恢复**”两类问题上。前者在今天获得了系统性修复（doc-truth PR 系列），后者（#7340）尚无对应 PR，建议维护者尽快补充“Reset to defaults”能力，它属于低成本高感知度的改进。

---

## 5. Bug 与稳定性

### 🔴 P1 / 严重（QA bug，均复现于 Railway 测试实例）

| Issue | 描述 | 状态 |
|---|---|---|
| [#7292 Installed tool cannot be used and run fails with runner heartbeat error](https://github.com/nearai/ironclaw/issues/7292) | CoinGecko 工具安装后不可用，runner 心跳错误导致 run 失败 | 待修复 |
| [#7298 Request fails before it could be sent / monitoring system loses contact with runner](https://github.com/nearai/ironclaw/issues/7298) | 两类基础设施错误：发送前失败 + 监控系统与 runner 失联 | 待修复 |
| [#7295 Agent leaks or confuses Slack user identity in response](https://github.com/nearai/ironclaw/issues/7295) | 回复中向错误用户（sergey.astretsov）发送 DM，身份串线 | 待修复 |
| [#7247 Agent falsely claims GitHub is already connected](https://github.com/nearai/ironclaw/issues/7247) | 未验证认证状态即谎称 GitHub 已连接，下一次调用即失败 | 待修复 |
| [#7294 Agent incorrectly remembers a Telegram routine from another scope](https://github.com/nearai/ironclaw/issues/7294) | 未检查即声称“已设置过”，实际无 trigger 存在 | 待修复 |
| [#7246 Agent hallucinates automation status instead of checking actual state](https://github.com/nearai/ironclaw/issues/7246) | BTC 新闻自动化并不存在，agent 却声称运行中 | 待修复 |
| [#7344 Slack connection not recognized by assistant despite being ACTIVE](https://github.com/nearai/ironclaw/issues/7344) | 连接 ACTIVE + 8 capabilities，助理却否认连接存在且拒绝操作 | 待修复 |
| [#7074 Multi-tool meeting research fails after retrieving calendar data](https://github.com/nearai/ironclaw/issues/7074) | 日历数据获取成功后调用不可用函数，多工具流程中断 | 待修复 |

**模式归纳**：今日 P1 bug 高度集中在两类根因——**agent 状态幻觉**（不查实际状态就断言“已连接/已设置/运行中”），以及 **runner 通信/心跳不稳定**（#7292、#7298、#5456）。前者涉及记忆与工具状态校验（#7365 的 memory PR 或可部分缓解），后者需要基础设施侧排查。

### 🟡 中等级

| Issue | 描述 | 状态 |
|---|---|---|
| [#7185 Memory not reliably recalled across conversations](https://github.com/nearai/ironclaw/issues/7185) | 跨会话记忆召回不可靠，Champions 周会多人复现 | **已有 fix PR #7365** |
| [#7368 Channel turns can take minutes on DeepSeek-class models](https://github.com/nearai/ironclaw/issues/7368) | Telegram 消息延迟的根因分析：DeepSeek 级模型单轮耗时过长 | 待修复（#6643 根因） |
| [#6590 serve fails on Windows: "workspace root must not overlap default skill root /skills"](https://github.com/nearai/ironclaw/issues/6590) | Windows 下 local-dev / local-dev-yolo profile 直接启动失败 | 待修复 |
| [#5456 Routine runs fail with runner lease expiration](https://github.com/nearai/ironclaw/issues/5456) | 90 秒不活动阈值对多工具 routine 过短，6/30 起即为主要失败模式 | 待修复（长期积压） |

### 🟢 已修复（今日关闭）

- **Telegram 三连 bug 全部关闭**：[#6476](https://github.com/nearai/ironclaw/issues/6476)（Slack 编码错误+幻觉）、[#6644](https://github.com/nearai/ironclaw/issues/6644)（回复错位）、[#6643](https://github.com/nearai/ironclaw/issues/6643)（消息不处理）、[#6475](https://github.com/nearai/ironclaw/issues/6475)（/pair 不识别）——其中 #6643 的延迟根因转 #7368 继续追踪。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 对应 PR / 状态 | 纳入下一版本概率 |
|---|---|---|---|
| **Doc-Truth 验证管线** | [#7317](https://github.com/nearai/ironclaw/issues/7317) | 5 个 PR：[#7375](https://github.com/nearai/ironclaw/pull/7375)（文档修正）、[#7376](https://github.com/nearai/ironclaw/pull/7376)（CI 路径门禁）、[#7378](https://github.com/nearai/ironclaw/pull/7378)（doc-fact 契约测试）、[#7379](https://github.com/nearai/ironclaw/pull/7379)（docs-live 分支）、[#7381](https://github.com/nearai/ironclaw/pull/7381)（设计记录） | 极高——已形成完整 PR 集 |
| **批量工具描述（bulk tool_describe）** | 内部优化（[#7374](https://github.com/nearai/ironclaw/pull/7374)） | 将 $N$ 次 schema 加载的 model 往返从 $N$ 次降为 1 次 | 极高——XL 级 PR 已就绪，配套 #7383 追踪文件分解 |
| **脚本化工具调用压测** | [#7360](https://github.com/nearai/ironclaw/issues/7360) | [#7382](https://github.com/nearai/ironclaw/pull/7382)（Phase 1） | 高——直接补 CI 盲区 |
| **持久化状态兼容性强制** | [#7380](https://github.com/nearai/ironclaw/issues/7380)（epic） | 无独立 PR 对应 | 高——epic 已列出完整问题域（SQL migration + 持久化状态 + 双读兼容） |
| **用户失败信息 i18n 化** | [#7362](https://github.com/nearai/ironclaw/issues/7362) | 无对应 PR | 中——65 条硬编码英文文案，需重构 + CLI 消息解析器 |
| **错误时 trace 捕获** | [#7369](https://github.com/nearai/ironclaw/issues/7369) | 无 | 中——UI 增强，低成本高价值 |
| **模型设置重置为默认** | [#7340](https://github.com/nearai/ironclaw/issues/7340) | 无 | 中高——社区直接诉求，实现成本低 |
| **工具披露 rollout 指标** | 内部（[#7385](https://github.com/nearai/ironclaw/pull/7385)） | 可持久化、可查询的披露指标事件 | 高——XL 级 PR 已开，运营可观测性增强 |
| **run 以调用者身份执行** | [#7157](https://github.com/nearai/ironclaw/issues/7157) follow-up | [#7377](https://github.com/nearai/ironclaw/pull/7377)（移除共享路由 subject 绑定） | 高——权限模型收敛，stacked 在 #7157 之上 |
| **门禁与棘轮审计** | PR #7157 连续 6 次 CI 失败引发 | [#7373](https://github.com/nearai/ironclaw/pull/7373)（全量清单 + 5 个 fail-open 加固 + 删除死门禁） | 中高——CI 基础设施健康度提升 |
| **Google 扩展紧凑能力（实验）** | [#5503](https://github.com/nearai/ironclaw/pull/5503) | Gmail 摘要、日历 + MCP 紧凑能力 | 中——已挂起 5 周，需维护者决策 |

---

## 7. 用户反馈摘要

从今日 Issue 评论与描述中提炼的真实用户声音：

**😕 不满意/痛点**
- **“改不回去了”**（#7340）：用户修改模型供应商/模型选择后无法恢复初始配置，“No matter what they tried”，直接诉求是 Reset 按钮。
- **“文档说不行，但实际可以”**（#7367）：Chat 内连接频道功能早已支持，但文档仍写着“不支持”，导致模型据此拒绝用户请求——用户 BenKurrek 直言这是“feeding model refusals”。
- **“她记得别人的事”**（#7294、#7295）：agent 跨 scope/线程“记忆串线”，把 A 的 Telegram routine 记到 B 名下、把 DM 发给错误用户，严重动摇信任感。
- **“它根本没查就说好了”**（#7246、#7247、#7344）：agent 不做状态检查就断言“已连接/运行中”，随后立即失败——“fabricated”是 QA 报告中的高频词。

**😊 满意/肯定**
- **Progressive tool disclosure 成为默认**（#6810 关闭、#7166 epic 更新）：注释明确“safe, reliable, and efficient”——大能力面保持在预算内、小能力面保持直接调用，无任务完成率下降。这是一项被验证的架构改进。
- **工具披露 schema 缩减有测试护栏**（#7372）：维护者主动将 50% token 缩减下限固化为测试，社区可感知项目在防止“悄然回退”。

**🧩 使用场景参考**
- 法律领域用户（Devon，经 Tobias 转述）：依赖 agent 跨会话访问案例信息，但记忆丢失导致重复陈述——**长会话记忆是专业场景的核心需求**。
- Telegram 用户：配对成功后消息“石沉大海”数分钟无反馈（#7368：DeepSeek 级模型单轮耗时过长），说明**低成本模型部署下需要流式/中间反馈机制**。

---

## 8. 待处理积压

### ⚠️ 长期未解决的关键 Issue

| Issue | 创建时间 | 积压天数 | 说明 |
|---|---|---|---|
| [#5456 Routine runs fail with runner lease expiration](https://github.com/nearai/ironclaw/issues/5456) | 2026-06-30 | **39 天** | P1：90 秒不活动阈值过短，多工具 routine 持续失败。这是当前积压最久的 P1，涉及 runner 生命周期配置，建议优先处理。 |
| [#6590 serve fails on Windows](https://github.com/nearai/ironclaw/issues/6590) | 2026-07-23 | **16 天** | Windows 平台完全不可用（workspace root 与 /skills 重叠校验），影响 Windows 开发者采用。 |
| [#6989 Token accounting estimation bug](https://github.com/nearai/ironclaw/issues/6989) | 2026-08-01 | 7 天 | P1 技术债：content reference 字符串长度被当作 token 估算基数。已关联 pi-harness 采用计划，但尚无 PR。 |

### ⚠️ 长期未合并的 PR

| PR | 创建时间 | 积压天数 | 说明 |
|---|---|---|---|
| [#5503 [Experiment] Add compact Google extension capabilities](https://github.com/nearai/ironclaw/pull/5503) | 2026-07-01 | **38 天** | Gmail/Calendar 紧凑能力实验，状态 OPEN，无最近评论。XL 级、风险中，建议维护者明确接收/拒绝。 |
| [#6938 fix(skills): the model chooses the skill, not a keyword scorer](https://github.com/nearai/ironclaw/pull/6938) | 2026-07-31 | 8 天 | 重构技能选择逻辑——host 不再用关键词打分器替模型做选择。Stacked on #6745，属 epic #6941 一部分。XL 级但风险低，等待上游合并。 |

### 📌 今日新增的治理类追踪

- [#7383 chore(loop-host): track decomposition of tool_disclosure_port.rs (4.4k lines)](https://github.com/nearai/ironclaw/issues/7383)：4,425 行单文件违反架构规则 #5，PR #7374 又新增 ~675 行。属于代码健康度债务，需制定拆分计划。
- [#7380 Epic: Enforce persisted-state compatibility before merge](https://github.com/nearai/ironclaw/issues/7380)：`1.0.0-rc.1 → 1.1.0-rc.1` 暴露出的持久化状态兼容性缺口，epic 已建立但暂无子任务 PR。

---

**总结**：IronClaw 今日处于**高活跃、多线并进**状态。Doc-Truth 治理是最大亮点——从用户提案到 5 PR 落地仅 1 天，展示了优秀的社区响应闭环。需要警惕的是 P1 QA bug 集群中的“状态幻觉”模式（agent 不查证就断言）与 runner 基础设施稳定性问题，这两类问题直接影响用户信任，建议在下一 RC 前优先收敛。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-08-08）

## 1. 今日速览

项目今日发布 v2026.8.7 版本，新增 Cowork 标题栏会话搜索、Markdown LaTeX 数学定界符支持，并修复 Windows 安装器 watchdog 空值问题。过去 24 小时累计更新 7 条 Issue（新开/活跃 4 条、关闭 3 条）与 7 条 PR（待合并 1 条、合并/关闭 6 条），合并率达 86%，代码集成活跃。维护者对 SiliconFlow 斜杠模型 ID 问题的反馈响应迅速，当日已提交修复 PR（#2452）；同时对 4 月堆积的陈旧 Issue 进行了清理（3 条关闭、1 条保留）。整体来看，Cowork 功能增强与 OpenClaw 生态集成是当前迭代主线，项目健康度良好。

## 2. 版本发布

**LobsterAI 2026.8.7**（发布于 2026-08-07）

更新内容：
- **Cowork 会话搜索**：在标题栏新增会话内搜索功能（PR #2435）
- **Markdown LaTeX 数学定界符**：改进 Markdown 中 LaTeX 数学公式的渲染支持（PR #2449）
- **Windows 安装器修复**：修复 watchdog 退出码为 null 时的异常处理（PR #2446）
- 根据 PR #2451 的 release 说明，该版本还合并了 2026.8.5 release 分支中关于 IM 分析、OpenClaw 配置与插件安装优化、Windows 安装/更新可靠性等改进

**迁移注意**：PR #2445 调整了 OpenClaw 的 `config.set` 逻辑，剥离了插件索引管理的键值。升级后建议检查既有的 OpenClaw 插件配置是否保存正确。未发现其他破坏性变更。

## 3. 项目进展

今日合入/关闭的 PR：

- **PR #2451** — Release/2026.8.5 合并入 main，集成了 Cowork 搜索、数学渲染、OpenClaw 配置优化与 Windows 安装器修复等多项变更
- **PR #2450** — 修复 Cowork 全屏代码工具栏在 Windows 上的点击失效问题（将 overlay 移出 Electron 标题栏拖拽区域）
- **PR #2449** — 修复 Markdown LaTeX 数学定界符渲染问题
- **PR #2448** — 修复 Cowork 聊天搜索相关 bug
- **PR #2445** — 修复 OpenClaw `config.set` 中插件索引管理键被意外覆盖的问题
- **PR #2446** — 修复 Windows 安装器 watchdog 退出码为 null 的异常

这些 PR 多为修复与小功能增强，项目处于稳定迭代节奏。Cowork 模块（会话搜索、聊天修复、代码工具栏）是当前开发重点；待合并的 PR #2452（模型 ID 含斜杠保留 provider 前缀）预计将在下一版本中落地。

## 4. 社区热点

- **Issue #1195（自建 skill 安装到 OpenClaw 后界面无显示）**：创建于 4 月 1 日，今日仍有更新。用户反馈创建 skill 后提示安装成功，重启后技能面板却无显示，实际被安装到了 OpenClaw 的 skill 目录。该问题反映了 LobsterAI 本地技能面板与 OpenClaw 目录之间的映射/兼容性矛盾，已持续 4 个月，社区关注度不减。

- **Issue #2443（模型 ID 含斜杠的自定义 Provider 无法使用）**：SiliconFlow 用户在界面中无法选择 `deepseek-ai/DeepSeek-V4-Flash` 这类带斜杠的模型 ID。该问题同日即收到修复 PR #2452，形成快速的"报告→响应→修复"闭环，展示了对用户反馈的高响应速度。

- **Issue #2444（输入框编辑模式）**：新提出的 UX 增强请求——希望增加"编辑模式"开关，使长 Prompt 输入时 Enter 换行、Ctrl+Enter 发送，避免误发。虽暂无评论，但代表了深度用户对长文本编辑体验的普遍诉求。

- **陈旧 Issue 清理**：今日 3 条 4 月初的陈旧 Issue（#1263、#1265、#1273）被关闭，说明维护者正在处理积压 backlog。

## 5. Bug 与稳定性

按严重程度排列：

- **高 — Issue #1273（sql.js 高频操作内存越界崩溃及数据库损坏风险）**：WASM 线性内存碎片化导致不可恢复的 `memory access out of bounds` 崩溃，且 `save()` 的非原子写入可能导致数据库永久损坏。该 Issue 今日被关闭，但**未发现对应的修复 PR**，需确认是已修复（可能包含在未记录的 release 中）还是作为 stale 关闭，若是后者应重新打开。链接：#1273

- **中 — Issue #2443（模型 ID 含斜杠的自定义 Provider 无法在界面使用）**：session patch 存储时丢失 provider 前缀，导致带斜杠的模型 ID 无法被正确识别。已有 PR #2452 待合并。链接：#2443

- **中 — Issue #2447（执行无结果无错误信息）**：新提交的 bug，用户反馈操作无输出也无报错，缺少上下文信息，暂无修复 PR，需维护者回复并索要复现步骤。链接：#2447

- **中 — Issue #1195（自建 skill 安装到 OpenClaw 后不显示）**：必现 bug，持续已 4 个月，暂无对应修复 PR。链接：#1195

- **低 — PR #2450（Windows 全屏代码工具栏点击失效）**：已合并修复。

整体来看，今日最关键的问题是确认 #1273 的关闭理由，以及新提交的静默失败问题（#2447）是否在内部可复现。

## 6. 功能请求与路线图信号

- **输入框编辑模式（Issue #2444）**：用户希望增加"编辑模式"开关，使长 Prompt 编辑时默认 Enter 换行、Ctrl+Enter 发送。该需求实现成本低（设置项或 toggle 按钮），有望被纳入后续版本。

- **多 AGENT 绑定不同 IM 机器人与模型（Issue #1265，已关闭）**：该请求提出不同 AGENT 应可绑定各自的 IM 机器人和模型（如调度机器人用思考型模型、编程机器人用编程型模型）。今日关闭前仍有 2 条评论。若因架构不支持或优先级调整而关闭，建议维护者在关闭说明中给出解释。

- **OpenClaw 集成深化**：从 Issue #1195（skill 路径）、PR #2445（config.set 键管理）、PR #2452（provider 前缀保留）来看，项目正持续加强对 OpenClaw 生态的适配与稳定性，这可能是近期路线图的主攻方向。

- **Cowork 生产力增强**：已发布的会话搜索、LaTeX 数学渲染表明项目重视技术工作者对长会话检索与专业文档写作的需求。

## 7. 用户反馈摘要

- **静默失败最困扰用户**（#2447）：用户对"执行无结果、无错误信息"表示困惑——黑盒式的失败让用户无法自行排查，也严重降低对工具的信任感。
- **长 Prompt 编辑体验不佳**（#2444）：用户表示需要频繁换行时，误按 Enter 会直接发送，导致消息中断或误发，希望能有可切换的编辑模式。
- **技能安装的预期落差**（#1195）：用户界面提示"安装成功"，但技能面板中不可见。UI 提示与实际行动路径不一致，破坏了用户对"本地技能"这一概念的信任。
- **对数据持久化可靠性的担忧**（#1273）：用户明确指出 `save()` 使用 `fs.writeFileSync` 直接覆盖文件的非原子写风险，反映重度用户对数据安全的重视。
- **Windows 平台细节问题**（PR #2450、#2446）：全屏代码工具栏点击失效、安装器更新问题被独立修复，说明 Windows 是重要使用平台，但存在一定的 Electron/Windows 兼容性打磨需求。

## 8. 待处理积压

以下问题需维护者关注：

- **Issue #1195（2026-04-01 创建，仍打开）**：自建 skill 安装到 OpenClaw 后技能面板不显示，必现且长期未修复。建议提供解决方案或说明与 OpenClaw 侧的协作计划。链接：https://github.com/netease-youdao/LobsterAI/issues/1195

- **Issue #1273（2026-04-02 创建，今日关闭）**：sql.js 崩溃与数据库损坏风险。若未实际修复，建议重新打开并同步说明；若已修复，请在 issue 中补充修复版本号，避免提交者困惑。链接：https://github.com/netease-youdao/LobsterAI/issues/1273

- **PR #2452（2026-08-07 创建，待合并）**：修复模型 ID 含斜杠时 provider 前缀丢失的问题，与 Issue #2443 直接相关，建议尽快 review 合并。链接：https://github.com/netease-youdao/LobsterAI/pull/2452

- **Issue #2447（2026-08-07 创建，信息不全）**：执行无结果无错误，需维护者主动联系用户补充日志与复现步骤，避免静默失败问题被低估。链接：https://github.com/netease-youdao/LobsterAI/issues/2447

- **Issue #2444（2026-08-07 创建，无评论）**：输入框编辑模式功能请求。建议评估后回复用户，并说明是否进入开发队列。链接：https://github.com/netease-youdao/LobsterAI/issues/2444

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报

**日期：** 2026-08-08  
**数据窗口：** 过去 24 小时（截至 2026-08-08）

---

## 1. 今日速览

CoPaw 过去 24 小时保持了高活跃度：**31 条 Issue 更新**（其中 20 条新开/活跃、11 条已关闭）、**49 条 PR 更新**（22 条已合并/关闭）以及 **1 个新版本发布**。当前项目重点明显集中在**稳定性修复**上，尤其是 Windows 桌面模式、LLM Provider 兼容性、MCP 工具可靠性以及渠道层（Telegram/微信）的权限控制问题。另一方面，社区持续产出新功能 PR（如智能邮件管理助手 #6800、ReMe 记忆增强 #6772），显示项目仍处于功能和稳定性双线推进的活跃状态。v2.1.0-beta.2 已发布，但用户报告的 beta 回归问题（如桌面模式文本选择 #6797、Profile 文件回归 #6785）也值得关注。

---

## 2. 版本发布

### v2.1.0-beta.2

**发布时间：** 2026-08-07~08

此版本为维护性 beta 发布，包含以下变更：

- **fix(ci): fence-aware section extraction in real-behavior-proof**（#6653 by @hanson-hex）—— 修复 CI 中 real-behavior-proof 测试的代码段提取逻辑，确保代码围栏感知。
- **fix(checkpoints): restore auto snapshots in web workspace bootstrap**（#6 by @qbc2016）—— 修复 Web 工作区启动时自动快照恢复的问题。

**破坏性变更：** 无明确标注。  
**迁移注意事项：** 作为 beta 版本，建议生产环境谨慎升级。社区已报告 2.1.0b2 桌面模式相关问题（见 #6797、#6785、#6794），升级用户应优先验证桌面模式与 Console UI 功能。

🔗 [查看 Release](https://github.com/agentscope-ai/CoPaw/releases)

---

## 3. 项目进展

过去 24 小时共有 **22 条 PR 合并/关闭**。虽未全部列出，但结合近期 PR 轨迹可见以下方向性进展：

- **Provider 兼容性修复（#6809，OPEN）**：针对严格 OpenAI-compatible provider（如 StepFun）拒绝请求的问题，#6809 提交了修复方案，清理消息内容中的内部运行时字段和 Responses API 类型。对应 Issue #6803。
- **Windows 桌面模式文本选择恢复（#6801、#6802，OPEN）**：两个独立 PR 均针对 OS 桌面模式 `user-select: none` 导致无法选中复制文本的问题，对应 Issue #6797。
- **Telegram ACL 共享工作区修复（#6788，OPEN）**：将 ACL store 改为基于共享 root profile workspace，而非 per-task workspace，解决 multica 新任务导致白名单重置的问题。对应 Issue #6786/#6787。
- **Shell 临时文件泄漏修复（#6799，OPEN）**：修复 Windows 下 `execute_shell_command` 临时输出文件泄漏，曾造成 **26 GB 孤儿文件**。
- **Playwright 驱动自愈（#6776，OPEN）**：修复浏览器后端在 Playwright node driver 死掉后永久不可用的问题。
- **渠道功能增强**：#6804 支持微信中文审批回复（允许/拒绝）；#6715 支持 OneBot 远程音视频媒体。
- **智能邮件管理助手（#6800，OPEN）**：新功能 PR，为 QwenPaw 增加具备实时监控和访问控制的邮件管理能力。

已合并 PR 方面，虽然列表未全部展开，但可确认含 #4694 网站下载页 UI 重构等历史 PR 的收尾。整体项目在 **修复稳定性回归 + 扩展渠道能力 + 新功能预研** 三个维度上稳步推进。

🔗 [全部 PR 列表](https://github.com/agentscope-ai/CoPaw/pulls)

---

## 4. 社区热点

| Issue # | 标题 | 评论数 | 状态 |
|---------|------|--------|------|
| [#6116](https://github.com/agentscope-ai/CoPaw/issues/6116) | `[Bug] Doom loop: agent repeatedly triggers same tool call in single turn` | 8 | CLOSED (wontfix) |
| [#6782](https://github.com/agentscope-ai/CoPaw/issues/6782) | `[Bug]: 2.0.1 docker版本，插件市场、应用市场始终提示维护中` | 8 | OPEN |
| [#6732](https://github.com/agentscope-ai/CoPaw/issues/6732) | `[Bug]: mcp工具规律性失效` | 6 | OPEN |

**热点分析：**

- **#6116 Doom Loop 问题**：Agent 在单轮对话中重复调用相同工具最多 6 次才被检测，造成大量 API 调用和令牌浪费。该问题最终以 wontfix 关闭（可能为设计所限），但用户反馈的"浪费资源"痛点仍值得关注。
- **#6782 插件市场维护中**：2.0.1 Docker 版本插件市场和应用市场始终显示维护中，直接影响用户体验，属功能性阻断问题，已获 8 评论，需官方排查 Docker 镜像中的市场 API 连通性。
- **#6732 MCP 工具规律性失效**：MCP 工具每隔数小时失效，重启容器后恢复。该问题出现频率高，严重影响依赖 MCP 的重度用户，社区关注度高。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 严重（功能阻断 / 资源浪费）

| Issue | 描述 | 状态 | Fix PR |
|-------|------|------|--------|
| [#6768](https://github.com/agentscope-ai/CoPaw/issues/6768) | Agent 完成多步任务后进入无限循环，会话阻塞数小时 | OPEN | 无 |
| [#6116](https://github.com/agentscope-ai/CoPaw/issues/6116) | Doom loop：单轮内重复调用同一工具，6 次后才警告 | CLOSED (wontfix) | 无 |
| [#6782](https://github.com/agentscope-ai/CoPaw/issues/6782) | Docker 版插件市场/应用市场始终提示维护中 | OPEN | 无 |
| [#6732](https://github.com/agentscope-ai/CoPaw/issues/6732) | MCP 工具每隔数小时失效，需重启容器恢复 | OPEN | 无 |
| [#6812](https://github.com/agentscope-ai/CoPaw/issues/6812) | Gemini API 因 `$schema` 额外字段报 400 错误 | OPEN | 无（待确认） |

### 🟠 中等（功能受限 / 回归）

| Issue | 描述 | 状态 | Fix PR |
|-------|------|------|--------|
| [#6785](https://github.com/agentscope-ai/CoPaw/issues/6785) | Profile 分类硬编码官方 persona 文件，自定义 .md 无法切换（回归） | OPEN | [#6808](https://github.com/agentscope-ai/CoPaw/pull/6808) |
| [#6810](https://github.com/agentscope-ai/CoPaw/issues/6810) | Windows 安装/更新未终止占用进程，NSIS 报错 | OPEN | 无 |
| [#6786](https://github.com/agentscope-ai/CoPaw/issues/6786) | Telegram ACL 白名单在 multica 新任务时重置 | OPEN | [#6788](https://github.com/agentscope-ai/CoPaw/pull/6788) |
| [#6803](https://github.com/agentscope-ai/CoPaw/issues/6803) | OpenAI-compatible 请求携带 Responses-API 字段，被严格 provider 拒绝 (400) | OPEN | [#6809](https://github.com/agentscope-ai/CoPaw/pull/6809) |
| [#6811](https://github.com/agentscope-ai/CoPaw/issues/6811) | Continuation summary 忽略 `disable_thinking`，60 秒取消被误报为格式错误 | OPEN | 无 |
| [#6813](https://github.com/agentscope-ai/CoPaw/issues/6813) | `consume_model_response` 抛 `KeyError: '__aiter__'`，聊天自动标题生成失败 | OPEN | 无 |
| [#6794](https://github.com/agentscope-ai/CoPaw/issues/6794) | Agent Kanban 创建 Issue 返回 405，热重载期间 404 | OPEN | 无 |
| [#6797](https://github.com/agentscope-ai/CoPaw/issues/6797) | v2.1.0b2 桌面模式无法选中复制文本 | CLOSED | [#6801](https://github.com/agentscope-ai/CoPaw/pull/6801) / [#6802](https://github.com/agentscope-ai/CoPaw/pull/6802) |

### 🟡 轻微 / 待确认

| Issue | 描述 | 状态 |
|-------|------|------|
| [#6775](https://github.com/agentscope-ai/CoPaw/issues/6775) | Malware Bytes 将 Windows 桌面版标记为 Trojan Loader（疑误报） | OPEN |
| [#6780](https://github.com/agentscope-ai/CoPaw/issues/6780) | 2.0.1 版闲置几十分钟后卡死，需重启进程 | OPEN |

---

## 6. 功能请求与路线图信号

### 新 provider 支持

- **[#6490](https://github.com/agentscope-ai/CoPaw/issues/6490)：Volcengine Agent Plan + Xiaomi MiMo Standard API 作为内置 provider**——用户请求新增两个国内云厂商 provider，创建于 7 月 27 日，已 4 评论，说明有实际需求。
- **[#6285](https://github.com/agentscope-ai/CoPaw/issues/6285)：Aliyun Token Plan 模型列表增加 `qwen3.8-max-preview`**——模型列表硬编码只到 qwen3.7，用户希望更新。

### 产品体验增强

- **[#6770](https://github.com/agentscope-ai/CoPaw/issues/6770)：用户 Chrome 标签页生命周期可配置**——需要跨响应周期保持 Chrome 标签存活，适合 CI/自动化场景。
- **[#6790](https://github.com/agentscope-ai/CoPaw/issues/6790)**（CLOSED）：桌面模式改为单击打开应用，并提供退出桌面模式按钮——已在 b2 中收到反馈。

### 已提交的功能 PR

- **#6800 智能邮件管理助手**——新插件，支持多邮箱自动收发、分类、响应，带实时推送和访问控制。
- **#6772 ReMe 记忆增强**——Embedding 服务验证与热更新、Daily Paper 定时论文简报、Cron 声明机制、Console 记忆配置页重构。
- **#6804 微信中文审批**——支持 `允许`/`拒绝` 中文回复，降低非技术用户操作门槛。

以上 PR 若通过审查，将分别进入记忆系统、渠道交互和插件生态，预计 2.1.0 正式版或 2.2.0 中可见。

---

## 7. 用户反馈摘要

### 😟 主要痛点

1. **Windows 桌面模式体验受损**：v2.1.0b2 中用户无法选中/复制对话文本（#6797），且桌面模式需要双击才能打开应用（#6790），被指相比旧版是明显回归。
2. **Docker 版本功能不可用**：插件市场/应用市场始终"维护中"（#6782），MCP 工具定期失效需重启容器（#6732），两项问题在 Docker 部署场景下反馈集中，中文用户占比高。
3. **资源浪费担忧**：Doom loop 在检测前已浪费大量 token（#6116），虽以 wontfix 关闭，但用户表达的"资源白白消耗"情绪仍强烈。
4. **安全软件误报焦虑**：Windows 桌面版被 Malware Bytes 标记为木马，用户表示"卸载直到得到回应"（#6775）——官方应积极回应消除疑虑。
5. **安装更新流程脆弱**：Windows 更新时未终止占用文件进程，导致 NSIS 报错卡死（#6810），用户需要手动卸载旧版才能安装，体验较差。

### 🙂 积极反馈

- 用户对官方团队的工作表达认可（#6775："I love your work. Thanks for all you do."）。
- 多语言环境（中英文用户）均在积极报告问题，社区参与度高。
- 用户对桌面模式改进有期待，且针对 2.1.0b2 的问题反馈迅速（#6797、#6790）。

---

## 8. 待处理积压

以下重要 Issue/PR 已存在较长时间，建议维护者优先关注：

### 长期未关闭的 Issue

| Issue | 创建时间 | 天数 | 备注 |
|-------|---------|------|------|
| [#6285](https://github.com/agentscope-ai/CoPaw/issues/6285) qwen3.8-max-preview 模型支持 | 2026-07-20 | 19 天 | 纯功能小需求，可快速解决 |
| [#6490](https://github.com/agentscope-ai/CoPaw/issues/6490) Volcengine/MiMo provider | 2026-07-27 | 12 天 | 已 4 评论，有社区支持 |
| [#6732](https://github.com/agentscope-ai/CoPaw/issues/6732) MCP 工具失效 | 2026-08-06 | 2 天 | 高热度，需尽快定位 |

### 待合并的 PR（超一周未合并）

| PR | 创建时间 | 备注 |
|----|---------|------|
| [#6564](https://github.com/agentscope-ai/CoPaw/pull/6564) fix(memory): flush pending turns before compression | 2026-07-30 | Under Review，对应 #6555 |
| [#6615](https://github.com/agentscope-ai/CoPaw/pull/6615) fix(config): handle corrupted agent config | 2026-07-31 | Under Review，对应 #6612 |
| [#6617](https://github.com/agentscope-ai/CoPaw/pull/6617) fix(providers): honor Retry-After cap | 2026-07-31 | Under Review |
| [#6623](https://github.com/agentscope-ai/CoPaw/pull/6623) fix(acp): prevent final text loss on notification race | 2026-08-01 | Under Review，对应 #6625 |
| [#6688](https://github.com/agentscope-ai/CoPaw/pull/6688) fix(plugins): isolate absolute imports | 2026-08-04 | 对应 #6683（qwenpaw-creator 安装失败） |
| [#6725](https://github.com/agentscope-ai/CoPaw/pull/6725) fix(agents): report fork finalization failures | 2026-08-05 | 涉及后台任务状态准确性 |

---

**总结：** 项目处于高速迭代期，v2.1.0-beta.2 已发布，但引入的桌面模式回归和 Provider 兼容性问题社区反馈集中。当前急优先级建议是：**修复 Docker 插件市场不可用（#6782）、MCP 失效（#6732）、Windows 桌面模式回归（#6797/#6785），并合并近期已提交的修复 PR**。与此同时，新功能 PR（邮件助手 #6800、记忆增强 #6772）为项目提供了清晰的增量价值，值得在稳定版本后逐步纳入。

*本日报由 AI 分析师基于 GitHub 公开数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-08

## 1. 今日速览

过去 24 小时 ZeroClaw 仓库活跃度极高：共产生 50 条 Issue 更新（45 条新开/活跃，5 条关闭）与 50 条 PR 更新（47 条待合并，仅 3 条合并/关闭），无新版本发布。当日新提交的 Issue 中有多项 P1 级安全与稳定性缺陷（Anthropic 成本归零、`forbidden_paths` 校验失效、SOP 静默丢弃等），集中在运行时、SOP 引擎与安全策略三个模块；与此对应，社区连续提交了多条高密度的修复 PR（#9841、#9827、#9839、#9833），显示出项目正处于一轮密集的缺陷收敛与架构加固周期。值得警惕的是，47 条 PR 处于待合并状态，合并积压已形成明显瓶颈；而 0 个新 Release 意味着这些修复尚未随版本交付给用户。

## 2. 版本发布

过去 24 小时无新版本发布。当前可用 Prebuilt 版本停留在 v0.8.4（依据 Issue #9820、#9821 中的用户描述）。值得关注的是，#9841 等修复 PR 已经 rebase 到 `master` 并完成审查，预计将随下一个版本统一发布。

## 3. 项目进展

今日需要关注的合并/关闭项为 **PR #9836**（已关闭/合并）：

- **PR #9836** [fix(transcription): make local_whisper bearer_token optional](https://github.com/zeroclaw-labs/zeroclaw/pull/9836) — 修复 `LocalWhisperProvider::from_config` 在 `bearer_token` 缺失/为空时报错的问题。whisper.cpp 的 loopback server 默认无鉴权，此变更将 token 改为可选，是对本地部署场景的务实修复。

尽管仅 3 条 PR 被处理，但多组高价值 PR 正在同步推进：

- **PR #9841** [fix(sop): drive headless SOP runs and close the five defects found reviewing #9494](https://github.com/zeroclaw-labs/zeroclaw/pull/9841) — 该 PR 直接修复今日报告的 #9805（cron/channel 触发的 SOP auto-mode 永远停留在 running 状态），并合入此前 #9494 的 4 个 commit，同时补上了审查中发现的第 5 个缺陷。**进展意义：之前 PR #9494 核心功能已 rebase 至最新 master，若合并将解决 cron 触发 SOP 的长期瘫痪问题，是今日最重要的功能推进。**

- **PR #9827** [fix(security): stop shell children from escaping their validated confinement](https://github.com/zeroclaw-labs/zeroclaw/pull/9827) — 修复 3 类 shell 子进程逃逸沙箱的问题：沙箱包装丢弃工作目录、exec 路径未落地、环境变量继承隐患。

- **PR #9828** [feat(tools): agent-facing config authoring with operator-approved policy previews](https://github.com/zeroclaw-labs/zeroclaw/pull/9828) — 为 agent 提供经过验证、操作员审批的配置修改路径（6 个独立可测试的 commit），替代此前 agent 通过 `echo > config.toml` 直接写入配置的危险行为。

- **PR #9833** [feat(tools): add web_research delegate and scope raw web_search to it](https://github.com/zeroclaw-labs/zeroclaw/pull/9833) — 新增 `web_research` 工具：主 agent 提问，子 agent 循环（最多 8 次工具调用，180 秒）完成 search→fetch→distill 并返回摘要，同时将原始 `web_search` 限定在该子 agent 内使用，与 #9824 的路线图期望保持一致。

整体来看，项目在向更高安全基线、可控的工具边界以及更稳定的 SOP 执行引擎迈进，但大量修复挤压在待合并队列中，尚未形成用户可感知的版本进步。

## 4. 社区热点

今日活跃讨论集中在一批高规格 RFC 和长期架构议题上，分别代表了不同的社区关注热点：

1. **#8933 [CLOSED] RFC: Add cross-turn conversation correlation to OTel export**（13 评论）
   https://github.com/zeroclaw-labs/zeroclaw/issues/8933
   讨论热度最高，涉及 OpenTelemetry 可观测性中跨轮对话关联的实现方案。相关讨论已在 08-07 完成收尾（已置 accepted 与 no-stale 标记），可能进入实施阶段。

2. **#9246 [CLOSED] RFC: Preserve Todo tracker configuration during ZeroCode ownership migration**（12 评论）
   https://github.com/zeroclaw-labs/zeroclaw/issues/9246
   由@IftekharUddin 发起、@tidux 参与修订，合并了 7 月的多轮 review 意见。关注 ZeroCode 所有权迁移时 Todo tracker 配置的保留，属 DevOps 平滑过渡类诉求。

3. **#5937 [OPEN] [Feature]: refactor: Unify providers architecture and reqwest client management**（12 评论）
   https://github.com/zeroclaw-labs/zeroclaw/issues/5937
   长期开放性架构提案（4 月发起）持续获得关注。社区对 provider 模块代码重复与配置碎片化的不满明显，期望统一 reqwest 客户端管理和模型构造参数，消除零散配置。

4. **#8424 [OPEN] RFC: Workspace-relative forbidden path patterns and optional .zeroclawignore**（10 评论）
   https://github.com/zeroclaw-labs/zeroclaw/issues/8424
   用户核心诉求为保护工作区内的敏感文件（如 `.env`、`config.yaml`、`rust-toolchain.toml`），当前 `forbidden_paths` 仅对工作区外部有效，存在安全盲区。

5. **#8043 [OPEN] RFC: Retire the standalone aardvark-sys crate (fold into zeroclaw-hardware)**（9 评论）
   https://github.com/zeroclaw-labs/zeroclaw/issues/8043
   架构治理类提案，通过依赖削减整合 crate 边界。同时 #7130（`forbid(unsafe_code)` 工作区级恢复）与其相关联，提供配套约束。

**热点诉求归纳**：社区讨论最密集的方向是安全边界（工作区文件保护、敏感文件访问控制、管理配置迁移）与架构统一（providers 重构、crate 合并、可观测性规范化）。RFC 讨论通过率高、推进沉稳，但长期悬而未决的架构议题（如#5937）正在消耗社区耐心。

## 5. Bug 与稳定性

今日集中报告了多起 P1 级严重缺陷，涉及安全策略失效、成本控制失明、任务长期挂起等，具体如下（按严重程度降序排列）：

### P1 严重级

1. **#9816 [OPEN] anthropic provider 费用始终为 $0.00，预算封顶永远无法触发**
   https://github.com/zeroclaw-labs/zeroclaw/issues/9816
   直接使用 `anthropic` provider 时所有 usage 记录 `cost_usd: 0.0`，导致每日/每月预算检查形同虚设，可能引发不可控成本消耗。**当前无对应 fix PR。**

2. **#9815 [OPEN] `forbidden_paths` 对 `allowed_roots` 及工作区内路径完全失效**
   https://github.com/zeroclaw-labs/zeroclaw/issues/9815
   核心问题：`is_path_allowed` 在 allowed-root 检查后直接返回 `true`，永远走不到 forbidden-path 循环。这属于安全机制的设计门槛缺陷，破坏了用户对敏感文件保护的核心信任。**暂无独立 fix PR，与 #8424 路线图相关。** 可关注 #9828（配置路径审查是否覆盖此场景）。

3. **#9840 [OPEN] [Bug]: daemon 启动时抢占 daemon.sock，退出时 unlink，导致正在运行的 daemon 被孤立**
   https://github.com/zeroclaw-labs/zeroclaw/issues/9840
   两个无防护操作使**任意**第二个 daemon 都能破坏第一个（start 时 `remove_stale_socket` 无条件删除既有 socket；退出时无条件 `unlink`），S1 级工作流阻塞。**暂无对应 fix PR。**

4. **#9805 [OPEN] SOP auto-mode 从 channel/cron 触发后永不执行，run 永久卡在 running**
   https://github.com/zeroclaw-labs/zeroclaw/issues/9805
   headless dispatch 缺少 agent 循环，`ExecuteStep` 只被记录为 pending 而从不实际运行，且持有并发槽位，重启 daemon 后依然存在。**已有对应修复 PR #9841 与 #9494。**

5. **#9786 [OPEN] 格式错误的 SOP.toml 被静默丢弃，`sop validate` 显示成功**
   https://github.com/zeroclaw-labs/zeroclaw/issues/9786
   trigger 上含未知字段的 SOP.toml 被加载时无任何诊断输出，`sop list` 不显示、`sop validate` 报成功、`sop validate <name>` 显示“SOP not found”。**暂无对应 fix PR，但在 #9841 审查范围内。**

6. **#9770 [OPEN] [Task]: cron update 静默丢弃声明式作业的 6 列变更**
   https://github.com/zeroclaw-labs/zeroclaw/issues/9770
   `cron update` 对 `source = "declarative"` 作业的 `command`/`name`/`expression`/`session_target`/`allowed_tools`/`uses_memory` 六列更新静默丢弃，用户无法知悉修改未生效。**暂无对应 fix PR。**

7. **#9386 [CLOSED] [Bug]: Gemini API key 随请求 URL 进入错误信息，并回贴到对话**
   https://github.com/zeroclaw-labs/zeroclaw/issues/9386
   reqwest 错误 Display 携带 `?key=` 完整 URL，`sanitize_api_error` 未剥离导致 API key 泄漏至用户可见消息中。**该 Issue 已关闭，确认完成修复。**（安全泄漏类高优先级得到及时处置）

### P2 中等级

- **#9834 [OPEN] zeroclaw-runtime 测试间歇性失败**（turn_streamed receipts + model_switch 共享进程全局状态）
  https://github.com/zeroclaw-labs/zeroclaw/issues/9834
- **#9656 [OPEN] Telegram typing 指示器在整个审批等待期间持续运行**，让阻塞中的轮次看起来像正常工作
  https://github.com/zeroclaw-labs/zeroclaw/issues/9656
- **#9775 [OPEN] OpenRouter 流式请求丢失 `provider_extra`**
  https://github.com/zeroclaw-labs/zeroclaw/issues/9775
- **#9832 [OPEN] zeroclaw-hardware 在 `--features hardware` 下编译失败**：`unresolved import aardvark_sys::AardvarkHandle`
  https://github.com/zeroclaw-labs/zeroclaw/issues/9832

### 用户环境相关

- **#9821 [OPEN] Raspberry Pi 5 上 cron 工具永远不被 agent 调用**，总是落到 shell "crontab" 并被策略拦截
  https://github.com/zeroclaw-labs/zeroclaw/issues/9821
- **#9820 [OPEN] calculator 工具收到的是字面量 `<TOOLCALL>` 伪语法**而非真实函数调用
  https://github.com/zeroclaw-labs/zeroclaw/issues/9820

### 稳定性小结

**安全类问题呈现集中爆发态势**（#9815、#9827、#9839、#9386），说明项目自身代码审计正同步暴露深层设计缺陷；而修复侧采取的是“加固多层防线”的策略（至少 3 条安全 PR 待合并），态度积极、方向正确。但 #9816 的预算控制失效和 #9840 的 socket 抢占属于会影响生产使用的逻辑错误，等待合并的时间窗口越久，用户承受的成本/可用性风险就越大。目前无新 Release 可用，修复无法第一时间交付到用户手中，是当前项目健康度最值得警惕的一点。

## 6. 功能请求与路线图信号

今日新增的功能需求与 RFC 中，以下几项展现出清晰的路线图信号：

1. **#9810 [OPEN] RFC: Load Agent Plugins 1.0 skill 和 MCP packages**
   https://github.com/zeroclaw-labs/zeroclaw/issues/9810
   全面支持 vendor-neutral [Agent Plugins](https://agent-plugins.org/) 1.0.0 标准（`plugin.json` + `skills/` + `mcp.json`）。若被采纳，ZeroClaw 将直接进入社区化插件生态，是重大的互操作性扩展。

2. **#9824 [OPEN] [Feature]: 默认 Web 工具面简化为 web_fetch + web_research + http_request**
   https://github.com/zeroclaw-labs/zeroclaw/issues/9824
   旨在将 5 个重叠的 web 工具收敛为 3 个语义清晰的动词，同时将 `web_search_tool` 下沉为 research 子 agent 专用，浏览器自动化改为显式 opt-in。**当日已有配套实现 PR #9833，纳入下一版本的概率极高。**

3. **#9828（PR）agent-facing config authoring** — 已作为完整 PR 提交，通过 JSON Patch 统一实现、操作员审批策略预览，为 agent 合法修改配置铺平道路，或在 0.9 系列中作为核心能力发布。

4. **#8933（已关闭）OTel cross-turn conversation correlation** — RFC 状态落定为 accepted + no-stale，可观测性的跨轮会话追踪将进入实施管线。

5. **#7130 [OPEN] 恢复 workspace 级 `forbid(unsafe_code)`，ardvark-sys 作为唯一例外**
   https://github.com/zeroclaw-labs/zeroclaw/issues/7130
   与 #8043（ardvark-sys 合并入 zeroclaw-hardware）配套，方向明确：**极低 unsafe 代码面 + 硬件层隔离**。这条组合信号表明 ZeroClaw 正在将 Rust 语言优势（内存安全）转化为产品的安全卖点。

## 7. 用户反馈摘要

从今日 Issues 中可以提炼出几类真实的用户场景与诉求：

**支付场景安全误伤（新用户痛点）**：
- #9825：[leak detector 将公开区块链地址误判为高熵并打码，导致支付链接无法投递](https://github.com/zeroclaw-labs/zeroclaw/issues/9825)
  用户明确表示“这是检测器按设计工作产生的误报，而非 bug，但需要设计层面的修正”。检测策略（熵启发式）与实际业务场景（支付地址天然高熵）存在冲突。

**嵌入式/边缘设备体验（Raspberry Pi 用户）**：
- #9820/#9821 分别报告在 aarch64 Raspberry Pi 5 上、NVIDIA NIM 模型驱动时，`calculator` 与 `cron` 工具调用失败。其共同指向是：**在非主流硬件/模型组合下，工具调用的协议兼容层存在明显短板**，模型未能按预期输出可解析的函数调用。

**对“静默失败”的低容忍度**：
- #9786（SOP.toml 静默丢弃）、#9770（cron update 静默丢弃变更）、#9783（finish_run 丢弃失败原因）、#9805（SOP 永远卡在 running）等一系列“无声故障”集中出现，社区反馈强烈。用户希望系统在任何配置或执行异常时给出明确的诊断路径，而不是以“看起来正常”的假象继续运行。这是对运维可观测性的直接呼吁，也是 ZeroClaw 从“框架”走向“平台”的关键体验指标。

**安全感知提升（正面信号）**：
- #9386 的快速修复获认可（Issue 已关闭），表明安全敏感问题在 maintainer 侧有良好的响应速度。

## 8. 待处理积压

以下 Issue/PR 长期悬置或需要维护者关注，按优先级排序：

**高影响，宜优先响应**：
- **#5937 [OPEN] providers 架构统一重构**（4/20 创建，12 条评论，持续更新中）
  https://github.com/zeroclaw-labs/zeroclaw/issues/5937
  社区长期诉求，涉及 reqwest 管理与 provider 模块重复代码问题，discussion 跨度已近 4 个月，希望 maintainer 明确路线图归属（可考虑与 #9816 成本缺陷一并推进，两者同属 provider 模块的“配置未生效”家族）。

- **#8424 [OPEN] workspace 内 forbidden path 机制扩展**（6/28 创建，10 条评论，`needs-author-action` 状态）
  https://github.com/zeroclaw-labs/zeroclaw/issues/8424
  与今日 #9815 直接相关的安全短板，建议将其从 RFC 加速为可执行的实施计划。

**主要 PR 长期未被合入**：
- **#8337 [OPEN] herdr agent 报告集成**（6/26 创建，`size:XL`，`needs-author-action`）
  https://github.com/zeroclaw-labs/zeroclaw/pull/8337
  功能已就绪但体型较大，依赖 reviewer 投入。

- **#8965 [OPEN] declarative auto-activation skills 功能**（`size:XL`，stacked on #9563）
  https://github.com/zeroclaw-labs/zeroclaw/pull/8965
  与 #9563、#8964 三 PR 联动阻塞。今日 Telegram 媒体 envelope 的修复（#9563）与 draft 部分清洗（#8964）均需要投入审查，属链条上的枢纽节点。

**需要注意的风险**：

- **47 条 PR 待合并** 的状态无法持续。若合并速度未提升，社区贡献者的积极性可能受挫（多签 `needs-author-action` 的 PR 已经出现）。
- #8043 + #7130 + #9832 三者联动正在暴露 aardvark-sys / zeroclaw-hardware 的编译与架构过渡中的不稳定因素，建议在下一 Release 前完成验证。

---

*本日报由 AI 分析师基于 2026-08-08 GitHub 公开数据自动生成。数据源：[ZeroClaw (github.com/zeroclaw-labs/zeroclaw)](https://github.com/zeroclaw-labs/zeroclaw)。*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*