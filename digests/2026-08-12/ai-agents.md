# OpenClaw 生态日报 2026-08-12

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-08-12 00:58 UTC

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

# OpenClaw 项目动态日报 — 2026-08-12

## 1. 今日速览

过去 24 小时 OpenClaw 仓库保持高位活跃：

- **Issues 更新 500 条**：新开/活跃 392 条，关闭 108 条，关闭率约 21.6%。
- **PR 更新 500 条**：待合并 282 条，已合并/关闭 218 条，合并/关闭率约 43.6%。
- **新版本发布：0 个**，今日无 release 可供迁移评估。

整体看，社区反馈密度很高，但问题集中在**静默失败、消息丢失、会话状态异常**等可靠性方向；大量 P1 issue 仍处于 `needs-maintainer-review` 或 `no-new-fix-pr` 状态，维护者 backlog 压力较大。PR 侧合并/关闭效率尚可，说明修复管线仍在运转，但**发布质量与回归控制**是当前需要重点关注的风险点。

---

## 2. 版本发布

今日无新版本发布，本节省略。

---

## 3. 项目进展

今日关闭/合并的 PR 主要集中在 **状态层修复、渠道可靠性、UI/可访问性、测试基础设施** 四个方面：

| PR | 方向 | 说明 |
|---|---|---|
| [#122171](https://github.com/openclaw/openclaw/pull/122171) / [#122182](https://github.com/openclaw/openclaw/pull/122182) | state | 修复 v17 升级后 agent 数据库被错误标记为 current、遗留 lease 表未被收敛的问题 |
| [#122074](https://github.com/openclaw/openclaw/pull/122074) | Google/Gemini | 为 Google AI Studio Gemini 模型补齐当前轮次原生视频输入能力 |
| [#121708](https://github.com/openclaw/openclaw/pull/121708) | Slack | 修复 bot 已加入的 Slack thread 在 24 小时后静默失效的问题 |
| [#121980](https://github.com/openclaw/openclaw/pull/121980) | gateway | 修复聊天历史中附件顺序被重排的问题，避免媒体事实与布局错配 |
| [#122206](https://github.com/openclaw/openclaw/pull/122206) | UI/流式输出 | 加速 OpenAI Responses 流式输出，减少用户侧感知延迟 |
| [#122183](https://github.com/openclaw/openclaw/pull/122183) / [#122179](https://github.com/openclaw/openclaw/pull/122179) | macOS | 接受并正常投递 provisional notification 授权，修复通知“显示已授权但发送被拒”的问题 |
| [#122174](https://github.com/openclaw/openclaw/pull/122174) | Telegram | 将分散的 bot handlers 整合为具名模块，降低注册顺序风险 |
| [#122151](https://github.com/openclaw/openclaw/pull/122151) | MCP | 集中 requester-scoped MCP runtime 的物化逻辑，消除缓存身份与序列化漂移 |
| [#122083](https://github.com/openclaw/openclaw/pull/122083) | 重构 | 消除核心、测试替身、Plugin SDK 中的 export name 冲突 |
| [#122197](https://github.com/openclaw/openclaw/pull/122197) / [#122095](https://github.com/openclaw/openclaw/pull/122095) / [#122190](https://github.com/openclaw/openclaw/pull/122190) | 测试 | 删除重复/超慢测试，显著降低 CI 单 shard 耗时 |

值得关注的今日新开 PR：

- [#122350](https://github.com/openclaw/openclaw/pull/122350)：优化模型目录读取，避免 Control UI 请求完整 catalog 时占满 CPU、拖慢 `/healthz`。
- [#122363](https://github.com/openclaw/openclaw/pull/122363)：让 Slack reaction 事件能进入 thread turn。
- [#122335](https://github.com/openclaw/openclaw/pull/122335)：在聊天头部显示嵌套 session 的父级关系。

---

## 4. 社区热点

今日讨论热度最高的 issue 反映出用户对**可靠性、安全信任、成本控制**的强烈关注：

- [#121058 Silent reply failures still recurring after #116277 closed](https://github.com/openclaw/openclaw/issues/121058) — **63 条评论**，为今日最高热度。用户指出 #116277 虽被关闭，但监控 cron 仍在持续记录“静默回复失败”，且 2026-08-09 仍有新发生。核心诉求是：**问题不应在未真正修复时关闭**。

- [#7707 Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707) — **37 条评论**。用户希望按记忆来源（用户指令、网页抓取、第三方 skill）打信任标签，防止恶意内容通过网页/第三方集成污染长期记忆。这是一个安全设计议题，已进入 `needs-security-review`。

- [#92201 Anthropic thinking signatures invalid on replay](https://github.com/openclaw/openclaw/issues/92201) — **22 条评论**，已关闭。涉及 Embedded runner 在 Anthropic thinking block 签名回放时偶发失效，且恢复逻辑因错误文本被泛化而无法触发。

- [#42475 Per-agent cost budget enforcement](https://github.com/openclaw/openclaw/issues/42475) — **20 条评论**。用户要求网关层支持按 agent 设置日/月成本上限，避免无外部监控时的失控花费。

- [#87744 Codex-backed Telegram turns repeatedly time out](https://github.com/openclaw/openclaw/issues/87744) — **17 条评论**。P1 可靠性问题：Codex 回合执行了工作但始终未到达 `turn/completed`，导致 Telegram 无法投递最终答案。

- [#68596 Configurable streaming watchdog timeout](https://github.com/openclaw/openclaw/issues/68596) — **15 条评论，8 👍**。使用 DeepSeek-R1、kimi-k2.5 等长思考模型时，30 秒无输出触发 watchdog 误报，用户希望阈值可配置。

综合来看，社区最在意的是：**“关闭的 issue 是否真的修好”**、**长思考模型下的误报与静默中断**、**成本失控风险**，以及**第三方内容对记忆/安全边界的渗透**。

---

## 5. Bug 与稳定性

按严重度与修复状态排列：

| 严重度 | Issue | 问题 | 状态 | Fix PR |
|---|---|---|---|---|
| P0 | [#121675](https://github.com/openclaw/openclaw/issues/121675) | `2026.8.1-beta.1` 发布时未同步发布 `@openclaw/*` 插件，导致启动收敛守卫进入不可恢复 boot loop | 已关闭 | 已处理/回滚 |
| Critical | [#121058](https://github.com/openclaw/openclaw/issues/121058) | #116277 关闭后静默回复失败仍复发，无 queued reply payload | OPEN | 无新 fix PR |
| P1 | [#87744](https://github.com/openclaw/openclaw/issues/87744) | Codex 支持的 Telegram 回合反复超时，无法到达 `turn/completed` | OPEN | 无新 fix PR |
| P1 | [#74586](https://github.com/openclaw/openclaw/issues/74586) | Active Memory 嵌入式 run 中止 `memory_search`，被误判为超时 | OPEN | 无新 fix PR |
| P1 | [#84516](https://github.com/openclaw/openclaw/issues/84516) | Codex 长回复在 ~1000-1100 字符处静默截断，`stop=null`, `aborted=false` | OPEN | 无新 fix PR |
| P1 | [#98435](https://github.com/openclaw/openclaw/issues/98435) | Gateway 重启后 MCP loopback transport 不自动重连，`recovered=1` 有误导性 | OPEN | 无新 fix PR |
| P1 | [#97983](https://github.com/openclaw/openclaw/issues/97983) | iOS/WebChat 消息进入 transcript 但不触发 assistant 回复 | OPEN | 无新 fix PR |
| P1 | [#97616](https://github.com/openclaw/openclaw/issues/97616) | hook/tool 子进程未回收，产生 zombie 进程累积并导致运行降级 | OPEN | 无新 fix PR |
| P1 | [#83337](https://github.com/openclaw/openclaw/issues/83337) | 插件与 core 版本漂移后静默禁用 channel，无清晰不兼容警告 | OPEN | 无新 fix PR |
| P1 | [#121953](https://github.com/openclaw/openclaw/issues/121953) | DeepSeek 上 cron 回合因 `[cron:...]` 前缀被边缘节点降权而 stall | OPEN | 已有 linked PR |
| P1 | [#119009](https://github.com/openclaw/openclaw/issues/119009) | 失控模型调用重试循环，两次 incident 共产生 $204.74 账单 | 已关闭 | 已修复/关闭 |
| P1 | [#92201](https://github.com/openclaw/openclaw/issues/92201) | Anthropic thinking 签名在 replay 时偶发无效，恢复 wrapper 未触发 | 已关闭 | 已修复 |
| P1 | [#71689](https://github.com/openclaw/openclaw/issues/71689) | tasks registry 因 SQLite malformed 无法恢复，gateway 启动失败 | OPEN | 无新 fix PR |
| P1 | [#40982](https://github.com/openclaw/openclaw/issues/40982) | CLI 无输出 watchdog 被硬编码为 3 分钟，长任务被误杀 | OPEN | 已有 linked PR |

其他值得关注的 P1/P2：

- [#114020](https://github.com/openclaw/openclaw/issues/114020)：升级 `2026.7.2-beta.4` 后 Feishu/Telegram 无法分派消息，报 `requires runDispatchLifecycle`。
- [#47975](https://github.com/openclaw/openclaw/issues/47975)：subagent 会话完成后不回收，主会话失响应。
- [#106704](https://github.com/openclaw/openclaw/issues/106704)：subagent 首回合调用 `sessions_yield` 会被静默 finalize 为空结果。
- [#89315](https://github.com/openclaw/openclaw/issues/89315)：gateway 堆内存无限增长，长期 systemd 部署被 cgroup OOM kill。

---

## 6. 功能请求与路线图信号

今日 issue 中有多条明确的功能请求，按主题归类：

| 方向 | 代表性请求 |
|---|---|
| 安全/信任 | [#7707 Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707)、[#46701 Telegram 未授权用户自动回复](https://github.com/openclaw/openclaw/issues/46701) |
| 成本控制 | [#42475 网关级 per-agent 成本预算](https://github.com/openclaw/openclaw/issues/42475)、[#47910 按失败类型隔离 auth-broken provider](https://github.com/openclaw/openclaw/issues/47910) |
| 长上下文/Token 优化 | [#14785 降低工具 schema token 开销](https://github.com/openclaw/openclaw/issues/14785)、[#63990 多索引 embedding 与模型感知 failover](https://github.com/openclaw/openclaw/issues/63990) |
| 可观测性 | [#50291 Plugin Hooks 增加 trace context](https://github.com/openclaw/openclaw/issues/50291)、[#80176 JSONL session-replay harness](https://github.com/openclaw/openclaw/issues/80176) |
| 多租户/渠道 | [#71058 单 Gateway 支持多个 Azure/Teams bot](https://github.com/openclaw/openclaw/issues/71058)、[#66252 per-agent TTS/STT 覆盖](https://github.com/openclaw/openclaw/issues/66252)、[#39343 图片批量/媒体组缓冲](https://github.com/openclaw/openclaw/issues/39343) |
| UI/UX | [#42840 Control UI 支持 MathJax/LaTeX](https://github.com/openclaw/openclaw/issues/42840)、[#16670 onboarding 强制 Memory/Embedding 配置](https://github.com/openclaw/openclaw/issues/16670)、[#13700 session snapshots 保存/加载](https://github.com/openclaw/openclaw/issues/13700) |

从今日 PR 看，维护者近期实际投入方向集中在：

- **UI/可访问性**：[#122066 键盘可达 identity-menu footer](https://github.com/openclaw/openclaw/pull/122066)、[#122335 聊天头部显示嵌套 session 父级](https://github.com/openclaw/openclaw/pull/122335)。
- **渠道可靠性**：[#122363 Slack reaction 事件](https://github.com/openclaw/openclaw/pull/122363)、[#122174 Telegram handlers 整合](https://github.com/openclaw/openclaw/pull/122174)。
- **状态迁移与 DB 收敛**：[#122171](https://github.com/openclaw/openclaw/pull/122171)、[#122182](https://github.com/openclaw/openclaw/pull/122182)。
- **网关性能**：[#122350 model catalog 读取响应优化](https://github.com/openclaw/openclaw/pull/122350)。

因此下一版本最可能优先纳入的，不是新功能，而是**消除静默失败、修复 watchdog 误报、收敛 DB 迁移一致性**等稳定性改进；`#7707` 这类需要产品决策与安全评审的长期 feature，仍会继续停留讨论阶段。

---

## 7. 用户反馈摘要

从高讨论度 issue 的描述与评论热度中，可以提炼出以下用户声音：

- **“关闭 ≠ 修复”**：用户对 #121058 强烈不满——issue 被关闭后监控仍持续记录同类失败，导致信任度下降。
- **长思考模型体验差**：`#68596` 用户明确反馈 DeepSeek-R1、kimi-k2.5 等模型在长思考期间频繁触发“30 秒无输出 watchdog”，打断正常使用。
- **静默失败最让人困惑**：`#84516` 长回复截断但无任何错误状态；`#58957` 模型切换时上下文过大但无提示；`#114154` MCP 工具通过 doctor/probe 健康检查但 agent 从未调用。用户需要的是可诊断性。
- **成本焦虑真实存在**：`#119009` 两次 incident 产生 $204 账单，用户对重试循环未被识别为 stalled 表示不满；`#42475` 则直接要求预算护栏。
- **升级/发布质量影响信心**：`#121675` beta 发布导致 boot loop，`#83337` 插件/core 版本漂移后 channel 静默失效，`#114020` 升级后 Feishu 分派直接报错。用户对发布流程的兼容性检查有较高期待。
- **无障碍与细节体验被重视**：`#65538` 屏幕阅读器逐 token 朗读流式输出，`#122066` 键盘用户无法到达菜单 footer 控件。这类问题虽然 P3，但用户反馈具体且修复意愿明确。

整体上，用户愿意提供详细复现与环境信息，但对**“问题被关闭但未真正解决”**和**“无错误信息的静默失败”**表现出明显不满。

---

## 8. 待处理积压

以下 issue 长期处于打开状态，且带 `needs-maintainer-review`、`no-new-fix-pr` 或 `stale` 标记，建议维护者优先关注：

| Issue | 创建时间 | 状态标签 | 说明 |
|---|---|---|---|
| [#121058](https://github.com/openclaw/openclaw/issues/121058) | 2026-08-09 | OPEN，63 评论 | 静默回复失败复发，社区关注度最高 |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | 2026-02-03 | needs-maintainer-review / needs-security-review | Memory 来源信任标签，安全相关 |
| [#74586](https://github.com/openclaw/openclaw/issues/74586) | 2026-04-29 | P1, no-new-fix-pr | AM memory_search 被中止，误判超时 |
| [#87744](https://github.com/openclaw/openclaw/issues/87744) | 2026-05-28 | P1, needs-live-repro | Codex Telegram 回合超时 |
| [#98435](https://github.com/openclaw/openclaw/issues/98435) | 2026-07-01 | P1, no-new-fix-pr | MCP loopback 不自动重连 |
| [#14785](https://github.com/openclaw/openclaw/issues/14785) | 2026-02-12 | P2, needs-product-decision | 工具 schema token 开销 |
| [#50291](https://github.com/openclaw/openclaw/issues/50291) | 2026-03-19 | stale | Plugin hooks 缺少分布式 trace 字段 |
| [#13700](https://github.com/openclaw/openclaw/issues/13700) | 2026-02-10 | P2, needs-maintainer-review | Session snapshot 保存/加载 |

积压 PR 中也有几个等待维护者/作者推进：

- [#117681 fix(skills): preserve ClawHub publisher identity](https://github.com/openclaw/openclaw/pull/117681) — 8 月 1 日开启，`size: L`，仍 `needs proof`。
- [#101248 feat(subagents): completionTarget parent-only routing](https://github.com/openclaw/openclaw/pull/101248) — 7 月 7 日开启，`needs proof`。
- [#111541 feat(localization): locale context and message rendering](https://github.com/openclaw/openclaw/pull/111541) — 7 月 19 日开启，`size: XL`，`waiting on author`。

这些长期未合入的 PR 如果继续搁置，可能会与后续 UI/多语言迭代产生更多冲突，建议维护者尽快给出明确决策。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析（2026-08-12）

## 1. 生态全景

当前开源个人 AI 助手赛道正处于"密集反馈、加速进化"阶段：头部项目（OpenClaw、Hermes Agent、IronClaw、CoPaw）每日维持 50+ 条 Issue/PR 更新，社区参与度极高；安全可靠性与**静默失败**治理已成为跨项目共同痛点，"修复是否真修复"、"故障是否可诊断"取代功能数量，成为用户评判项目的首要标准。与此同时，多项目不约而同推进**架构内核化重构**（god-file 分解、Agent Loop 可插拔、统一 Channel 模型），从"功能堆叠"转向"规模可维护性"。发布节奏上，仅 CoPaw、LobsterAI 有实际 Release，其余项目处于密集迭代后的"蓄势待发"状态，预计未来 2-4 周将迎来版本集中交付期。

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | Release | 相对活跃度 | 健康度评估 |
|---|---|---|---|---|---|
| OpenClaw | 500（新开392/关闭108） | 500（合并/关闭218） | 无 | 🔥 极高 | 社区热度最高，但 P1 backlog 压力大，可靠性问题突出；修复管线运转中 |
| NanoBot | 6（新开2/关闭4） | 140（合并/关闭119） | 无 | 🔥 高 | 大量旧 PR 清理，安全/循环控制待加强；中等偏上 |
| Hermes Agent | 50（新开48/关闭2） | 50（合并/关闭7） | 无 | 🔥 高 | 治理型重构执行力强，Windows 稳定性负债重；整体健康 |
| PicoClaw | 2（新开2） | 6 待合并（0 合并） | 无 | 🟡 中 | 提交活跃但合入停滞，多处 PR 已 stale；交付效率低 |
| NanoClaw | 1（新开1） | 8（合并/关闭3） | 无 | 🟡 中高 | 远程 MCP 落地明确，新 Issue 暴露消息可靠性隐患；良好 |
| NullClaw | 0 | 0 | 无 | ⚪ 无活动 | — |
| IronClaw | 23（新开13/关闭10） | 50（合并/关闭25） | 无 | 🔥 高强度 | 架构重构推进快，QA 幻觉问题连续 4 天未根治；风险敞口大 |
| LobsterAI | 4（全部 stale 清理） | 7（合并率 70%） | ✅ v2026.8.11 | 🟡 中高 | 发布稳定期，无新 Bug，历史遗留问题待处理；良好 |
| Moltis | 0 | 2 待合并 | 无 | 🟡 低 | 推进稳但社区讨论沉寂；健康 |
| CoPaw | 23（新开9/关闭14） | 49（合并/关闭25） | ✅ v2.1.0-beta.3 | 🔥 高 | 迭代节奏快，LaTeX/CPU/时间戳等问题集中关闭；良好 |
| ZeptoClaw | 0 | 0 | 无 | ⚪ 无活动 | — |
| ZeroClaw | 50（新开40/关闭10） | 50（合并/关闭2） | 无 | 🔥 高 | PR 合入率仅 4%，评审瓶颈严重；设计期投入充分，交付受限 |

## 3. OpenClaw 在生态中的定位

**社区规模**：OpenClaw 以每日 500 条 Issue + 500 条 PR 的动态量级遥遥领先，是第二名（Hermes Agent / IronClaw / ZeroClaw）的 10 倍，处于生态绝对核心地位。其关闭率（Issue 21.6%、PR 43.6%）说明维护管线在高速运转，但绝对 backlog 仍在累积。

**技术路线**：采用**网关/运行时一体化架构**（Gateway + Channel + MCP Runtime + Active Memory），侧重多平台渠道接入（Slack/Telegram/Feishu/macOS/iOS 全覆盖）与状态持久化一致性。相比之下，IronClaw 正在探索 **"内核 + 可插拔 Agent Loop"** 的 ACP（Agent Communication Protocol）方向，试图从"All-in-One"转向"调度/隔离/审计 + 外部 Agent 执行"；CoPaw 则走**桌面优先 + 本地文件工作流**路线，更贴近普通消费者。

**优势**：渠道矩阵最完整、社区反馈闭环最快（当日高热度 Issue 即可获得维护者响应）、MCP 生态兼容性走在最前。**风险**：静默失败（#121058）与"关闭≠修复"的信任问题成为最大质疑点——这与 Hermes Agent 的 Windows 发布质量、IronClaw 的代理幻觉问题同属"可靠性信任危机"，但 OpenClaw 的体量使其被放大得最明显。

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **静默失败可诊断性** | OpenClaw、NanoBot、NanoClaw、IronClaw | 消息被静默丢弃（NanoClaw #3226）、回复截断无错误状态（OpenClaw #84516）、工具循环无告警（NanoBot #5256/#5344）、代理幻觉状态（IronClaw #7246/#7247）——跨项目用户共同期待"失败必须可见、可区分、可干预" |
| **Agent 循环与重复检测** | NanoBot、OpenClaw、IronClaw | 重复回复（NanoBot #5327）、工具调用循环（IronClaw #7486 无进展误报）、失控重试（OpenClaw #119009）——需要显式循环检测、预算围栏与告警 |
| **成本控制与预算护栏** | OpenClaw、ZeroClaw、IronClaw | 单 agent 日/月成本上限（OpenClaw #42475）、重试循环费用失控（OpenClaw #119009 两次 $204）、高端模型成本过高（ZeroClaw #2269）、缓存 token 可观测（PicoClaw #3317） |
| **上下文窗口与长会话管理** | OpenClaw、IronClaw、PicoClaw | 长思考模型 watchdog 误报（OpenClaw #68596）、128 条消息硬编码驱逐（IronClaw #7484）、routed-agent 不压缩不记忆（PicoClaw #3301）——需要可配置阈值、压缩优先级与任务固定 |
| **安全边界与第三方内容信任** | OpenClaw、NanoBot、CoPaw、ZeroClaw | 记忆来源信任标签（OpenClaw #7707）、exec.allowPatterns 绕过（NanoBot #5306）、插件可静默创建 cron（CoPaw #6916）、HTTP egress 加固（ZeroClaw #9580）——第三方内容/插件对系统边界的渗透是共性焦虑 |
| **MCP 生态扩展与可靠性** | OpenClaw、NanoClaw、CoPaw | 远程 Streamable HTTP 支持（NanoClaw #3092/#3221）、MCP 工具规律性失效（CoPaw #6732）、loopback 重连（OpenClaw #98435）——MCP 正从本地 stdio 走向远程/HTTP，但连接可靠性尚未跟上 |
| **架构内核化/模块化重构** | Hermes Agent、IronClaw、CoPaw、ZeroClaw | god-file 分解（Hermes #78647）、Pluggable agent loops（IronClaw #7482）、Scroll 统一上下文（CoPaw #6779）、RFC 流程改革（ZeroClaw #9496）——普遍意识到"功能堆叠不可持续"，转向内核/插件/标准化协议 |

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全渠道消息中枢 + 会话持久化 + MCP 聚合 | 自托管进阶用户、多平台重度使用者 | 一体化网关运行时，状态层依赖数据库迁移（v17 升级问题） |
| **Hermes Agent** | 本地 TTS/STT + Desktop 应用 + 后台进程管理 | 桌面端个人增强（Windows/macOS） | Desktop 壳 + gateway 子进程，tendency 偏本地优先 |
| **IronClaw** | 无人值守自动化 + Reborn 架构重构 + 记忆系统 | 自动化任务编排者（QA/运营） | 探索 ACP 协议 + 内核/Agent Loop 分离；LLM 缓存断点控制 |
| **CoPaw** | Cowork 会话 + 文件工作区 + 代码块渲染 | 中文开发者社群、桌面协同场景 | Qwen 系模型深度适配，Scroll 生命周期统一上下文 |
| **NanoBot** | 轻量级对话代理 + WebUI Apps 发现 + 沙箱隔离 | 轻度自托管用户 | Python 单体为主，provider 网关接入轻量化 |
| **ZeroClaw** | 企业级安全策略 + 身份认证 + SOP 驱动 | 安全敏感型部署方 | Rust 实现（推断），RFC 驱动设计，安全加固优先级最高 |
| **PicoClaw / NanoClaw** | 轻便个人助手，以 Claw 系兼容为核心 | RPi/低资源设备（PicoClaw）、macOS（NanoClaw） | 定位 Claw 生态的轻量/移动补充，社区规模较小 |
| **LobsterAI / Moltis** | 本地数据访问（Moltis CalDAV）、AI 应用桌面客户端（Lobster） | 知识工作者、个人数据管理 | 前者是 OpenClaw 的桌面壳/网关封装，后者强调本地数据连接器与 AI 只读工具 |

## 6. 社区热度与成熟度

**第一梯队（快速迭代，每日 50+ 更新）**：OpenClaw、Hermes Agent、IronClaw、ZeroClaw、CoPaw。共同特征：社区讨论密度大、维护者响应快（IronClaw 新 issue 当天即有 fix PR）、已有明确架构演进方向。但**发布节奏与质量巩固**是共性短板——OpenClaw 无 release，Hermes Windows 多 P1 未闭环，IronClaw 连续 4 天 QA 幻觉问题。

**第二梯队（稳定推进，每日 10 条左右）**：NanoBot、LobsterAI、NanoClaw、PicoClaw。NanoBot 刚完成一轮大规模 PR 清理（119 个），进入安全/循环控制补强期；LobsterAI 处于发布后的稳定期（无新增 Bug）；PicoClaw/NanoClaw 社区体量小但定位清晰。

**第三梯队（低活跃/等待期）**：Moltis（功能 PR 待合入）、NullClaw/ZeptoClaw（无活动）。

**分层结论**：整个生态呈现"头部过热、尾部偏冷"的马太效应。头部项目不缺社区输入，缺的是**有效决策与安全发布能力**；尾部项目代码质量未必差，但缺乏社区反馈和 Contributor 生态（如 Moltis 的 #1190 功能重大却零评论）。

## 7. 值得关注的趋势信号

1. **"关闭 ≠ 修复"正在重塑社区信任规则**。OpenClaw #121058 的 63 条评论与 NanoBot #5327 的"重复输出"共同表明：用户已不再满足于"issue 被关闭"，而要求**可验证的修复证据**（监控数据、回归测试、发布说明）。对开发者而言，建立"修复—验证—关闭"的透明闭环将是长期项目赢得信任的基本功。

2. **Agent 循环检测与"失控预算"防护栏成为刚需**。OpenClaw 的 $204 账单事故、NanoBot 的重复回复螺旋、IronClaw 的重试死代码——这些问题背后是 LLM 自主决策的非确定性。**显式进度检测、预算围栏、重复输出告警**将成为所有 agent 框架的标准组件，而非可选项。

3. **从"对话"到"数据伴生体"转变开始显现**。Moltis #1190 的 CalDAV 连接器、CoPaw 的本地文件工作区、Hermes 的本地 TTS、OpenClaw 的会话持久化——AI 助手正在从纯聊天工具扩展为**本地数据的可信读者**。如何在不越权的前提下提供持久、可搜索、原子性的本地数据访问，将成为下一轮差异化竞争点。

4. **安全边界从"网络层"下移到"内容/记忆层"**。ZeroClaw 的 HTTP egress 加固代表传统安全，但 OpenClaw #7707 的"记忆来源信任标签"、CoPaw #6916 的"插件可静默创建 cron"、NanoBot #5306 的 shell 绕过——这些信号指向**内容供应链安全**：AI 助手读取的网页、装入的插件、写入的记忆，都可能成为攻击面。未来的安全设计需要引入"数据来源置信度"与"操作授权链"。

5. **协议标准化竞赛开始升温**。IronClaw 的 ACP 命令、ZeroClaw 的 OpenAI Chat Completions 兼容层 RFC、NanoBot 的 OpenRouter 工具诉求——多个项目试图成为"连接 LLM 与工具的标准层"。这意味着终端用户将获得更多可替换组件（换 UI、换 Agent、换 Provider），**绑定生态的能力将越来越难成为护城河**。

6. **低资源/移动端 Claw 生态出现"影子分化"**。PicoClaw（RPi）、NanoClaw（macOS）等小型项目在兼容 Claw 协议/技能的同时走向细分场景，但 PR 积压严重（PicoClaw 5/6 PR stale）。这类生态链下层项目的健康度，决定了上游生态能否真正实现"一次开发、处处运行"的 promise——头部项目需要加强对下游兼容层的支持与治理输出。

---

**报告总结**：个人 AI 助手开源生态正处于从"功能竞赛"到"信任竞赛"的转型期。OpenClaw 仍是最具影响力的中枢，但 IronClaw 的 ACP 内核化与 ZeroClaw 的协议兼容层正在撬动"可替换架构"的裂缝。对技术决策者而言，当前最优策略是：**优先选择静默失败治理完善、成本护栏成熟的项目作为底座；对上游生态依赖保持审慎；将"可诊断性"纳入选型与技术方案的首要评分项。**

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-12

> 数据来源：GitHub [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 统计窗口：2026-08-11 ~ 2026-08-12

---

## 1. 今日速览

- 过去 24 小时 **Issues 更新 6 条**（新开/活跃 2，关闭 4），**PR 更新 140 条**（待合并 21，合并/关闭 119），**无新版本发布**。
- 社区活跃度较高：Issue 侧以 bug 与安全反馈为主，PR 侧出现明显的大规模旧 PR 清理，说明维护者正在集中处理积压。
- 安全类问题成为当日焦点：3 条安全相关 Issue（API key 泄漏、`exec.allowPatterns` 绕过）中，2 条已关闭、1 条已对应 fix PR（[#5345](https://github.com/HKUDS/nanobot/pull/5345)）。
- 稳定性问题突出：多条关于「重复回复」和「工具调用循环」的报告（[#5327](https://github.com/HKUDS/nanobot/issues/5327)、[#5256](https://github.com/HKUDS/nanobot/issues/5256)），说明 agent 循环检测机制仍需加强。
- 整体健康度评估：**中等偏上**。项目仍保持较高迭代节奏，但安全加固与循环控制是未来版本必须优先解决的问题。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

过去 24 小时 **119 个 PR 被合并或关闭**。从可见数据看，其中大部分为 **2–3 月创建、带有 `conflict` 标记的旧 PR**（如 [#2181](https://github.com/HKUDS/nanobot/pull/2181) 小米 MiMo、[#1383](https://github.com/HKUDS/nanobot/pull/1383) 贡献指南、[#1367](https://github.com/HKUDS/nanobot/pull/1367) Kimi coding、[#1321](https://github.com/HKUDS/nanobot/pull/1321) Tavily、[#1199](https://github.com/HKUDS/nanobot/pull/1199) fallback 模型、[#1114](https://github.com/HKUDS/nanobot/pull/1114) cron 热加载、[#1094](https://github.com/HKUDS/nanobot/pull/1094) OpenCode Zen、[#1031](https://github.com/HKUDS/nanobot/pull/1031) 超时配置、[#1020](https://github.com/HKUDS/nanobot/pull/1020) Telegram inline keyboard、[#1002](https://github.com/HKUDS/nanobot/pull/1002) cron 频道元数据），这批 PR 因长期未合并/冲突被关闭，属于**积压清理**，而非新功能落地。

真正代表项目向前推进的是当前仍处于开放状态的新 PR：

- **[#5342](https://github.com/HKUDS/nanobot/pull/5342) feat(webui): redesign apps discovery** — 重新设计 Apps 发现页，整合 Discover / Installed / All apps / 自定义 MCP 配置，并基于 nanobot.wiki 注册表提供精选批次和本地缓存回退，是 WebUI 方向的主要功能更新。
- **[#5328](https://github.com/HKUDS/nanobot/pull/5328) feat(providers): add OrcaRouter as a named gateway provider** — 新增 OpenAI 兼容路由网关 OrcaRouter，聚合 150+ 模型，含网关级零信任安全能力。
- **[#5283](https://github.com/HKUDS/nanobot/pull/5283) feat(workspace): per-session sandbox isolation for non-WebUI channels** — 为 Web 之外渠道提供按会话隔离的文件系统沙箱，提升多用户场景安全性。
- **[#5314](https://github.com/HKUDS/nanobot/pull/5314) fix: decode nested JSON tool arguments by schema** — 修复部分 OpenAI 兼容 provider 将嵌套对象编码为字符串导致 MCP 工具调用失败的问题。

整体而言，项目通过清理旧 PR 降低了维护负担，同时将精力集中在 WebUI、provider 接入、沙箱安全和工具参数兼容性上。

---

## 4. 社区热点

以下 Issues/PR 引发了最多讨论或最具代表性：

- **[Issue #5327](https://github.com/HKUDS/nanobot/issues/5327)（9 条评论，已关闭）**：用户反馈 Nanobot 在推理过程中随机重复同一句话（如 “Good points, let me investigate the issue”）。这是今日评论数最高的 Issue，核心痛点在于 agent 的「循环/重复」行为难以预测，且用户无法快速干预。
- **[Issue #5256](https://github.com/HKUDS/nanobot/issues/5256)（2 条评论，开放中）**：`/goal` 命令在等待用户回复时产生数十条近似重复回复，只有用户介入或模型最终识别循环才会停止。与 #5327 同属「重复输出」类问题，社区讨论集中在是否应增加循环检测。
- **[Issue #5306](https://github.com/HKUDS/nanobot/issues/5306)（1 条评论，开放中）**：安全漏洞报告，`exec.allowPatterns` 可被 shell 链绕过，导致任意命令执行。虽然评论数不多，但严重程度高，且已由 PR [#5345](https://github.com/HKUDS/nanobot/pull/5345) 提出修复方案。
- **[PR #5342](https://github.com/HKUDS/nanobot/pull/5342)（更新至 8/12）**：WebUI apps discovery 重新设计，涉及第三方 logo 加载、MCP 配置等交互改进，是当前最新进度的 PR，预计会吸引较多关注。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | 编号 | 标题 | 状态 | 修复 PR |
| --- | --- | --- | --- | --- |
| 高 | [#5306](https://github.com/HKUDS/nanobot/issues/5306) | `exec.allowPatterns` shell-chain 绕过，可执行未授权命令 | 开放 | [#5345](https://github.com/HKUDS/nanobot/pull/5345) 已提交 |
| 高（安全） | [#4784](https://github.com/HKUDS/nanobot/issues/4784) | Provider API key 通过全局 `os.environ` 在 provider 间互相泄漏/覆盖 | 已关闭 | 未见对应修复说明 |
| 高（安全） | [#4783](https://github.com/HKUDS/nanobot/issues/4783) | CLI 子进程继承完整环境变量，API key 泄漏给已安装应用 | 已关闭 | 未见对应修复说明 |
| 中 | [#5256](https://github.com/HKUDS/nanobot/issues/5256) | `/goal` 消息产生几十条重复回复 | 开放 | 相关 PR [#5257](https://github.com/HKUDS/nanobot/pull/5257)、[#5344](https://github.com/HKUDS/nanobot/pull/5344) |
| 中 | [#5327](https://github.com/HKUDS/nanobot/issues/5327) | 推理过程中重复同一消息 | 已关闭 | 无明确 fix PR，但与 #5256 同源 |

值得关注的是，PR **[#5344](https://github.com/HKUDS/nanobot/pull/5344)** 专门提出在工具调用循环中加入重复检测并将「静默螺旋」改为告警，直接回应 #5256 和 #5327 暴露的问题，是未来稳定性的关键补强。

---

## 6. 功能请求与路线图信号

从今日 Issue/PR 中可提炼以下用户诉求，以及与路线图的对齐情况：

- **OpenRouter Server Tools 支持**（[#5333](https://github.com/HKUDS/nanobot/issues/5333)，已关闭）：用户希望将 OpenRouter 的 Web Search、Fusion 等服务端工具直接加入 `tools` 字段。虽已关闭，但反映「与主流网关能力对齐」的需求，未来可能借助 gateway provider 机制（如 OrcaRouter）实现。
- **WebUI Apps 发现与 MCP 配置体验**（[#5342](https://github.com/HKUDS/nanobot/pull/5342)）：将 Discover / Installed / Featured 分组并支持自定义 MCP，属于 WebUI 层面明确的功能升级。
- **新的模型网关/路由支持**（[#5328](https://github.com/HKUDS/nanobot/pull/5328) OrcaRouter）：延续 NanoBot 接入更多 OpenAI 兼容 provider 的方向。
- **会话级沙箱隔离**（[#5283](https://github.com/HKUDS/nanobot/pull/5283)）：为非 WebUI 渠道提供按会话隔离的文件系统，是安全模型的重要演进，预计会随安全重点被纳入后续版本。
- **Subagent 模型预设**（[#4291](https://github.com/HKUDS/nanobot/pull/4291)，开放）：允许子代理使用与父代理不同的模型预设，已在 PR 中实现，但已搁置 2 个月，是否并入主线仍待维护者决策。

---

## 7. 用户反馈摘要

从今日 Issues 评论中提炼的真实用户声音：

- **重复输出是最大痛点**：用户在 [#5327](https://github.com/HKUDS/nanobot/issues/5327) 中表示「随机重复」+「无法预估」，在 [#5256](https://github.com/HKUDS/nanobot/issues/5256) 中描述「几十条近似相同的回复」且需要用户干预才停止。这说明 agent 的自我循环检测能力直接影响信任度。
- **安全意识在增强**：安全研究者（[@hamb1y](https://github.com/hamb1y)）连续提交了 [#4784](https://github.com/HKUDS/nanobot/issues/4784) 和 [#4783](https://github.com/HKUDS/nanobot/issues/4783)，指出环境变量污染和子进程泄漏问题。用户对「API key 不被隔离」的担忧明显，希望项目提供更严格的环境隔离机制。
- **对平台集成的期待**：在 [#5333](https://github.com/HKUDS/nanobot/issues/5333) 中，用户表现出对 OpenRouter 服务端工具的高度期待，并感谢项目维护，说明社区对「插件/生态扩展」的满意度较高，但希望跟上平台新能力。
- **社区对冲突 PR 的观感**：多个 `conflict` PR 被集中关闭，用户可能感到部分功能「等很久后又被放弃」，这也解释了为什么 [#1383](https://github.com/HKUDS/nanobot/pull/1383) 曾提出「小增量 PR + 贡献指南」的建议。

---

## 8. 待处理积压

以下事项需要维护者关注：

- **安全修复落地**：Issue [#5306](https://github.com/HKUDS/nanobot/issues/5306) 为高危漏洞，PR [#5345](https://github.com/HKUDS/nanobot/pull/5345) 已提交，建议尽快评审合并；[#4784](https://github.com/HKUDS/nanobot/issues/4784) 与 [#4783](https://github.com/HKUDS/nanobot/issues/4783) 虽已关闭，但缺少可见的修复说明，建议补充安全公告或说明关闭原因。
- **长期开放 PR 决策**：[#4291](https://github.com/HKUDS/nanobot/pull/4291)（subagent 模型预设，6/11 创建）与 [#4145](https://github.com/HKUDS/nanobot/pull/4145)（weather skill，6/1 创建）已开放超过 2 个月，应明确标注「计划合并」或「关闭」。
- **循环/重复 Bug 治理**：[#5256](https://github.com/HKUDS/nanobot/issues/5256) 仍开放，且与多个 PR（[#5257](https://github.com/HKUDS/nanobot/pull/5257)、[#5344](https://github.com/HKUDS/nanobot/pull/5344)）相关，建议合并后跟踪回归测试。
- **旧 PR 清理后的反馈**：今日关闭了 119 个 PR，其中大量为 `conflict` 状态。建议维护者在关闭时统一注明原因，避免贡献者困惑，并可参考 [#1383](https://github.com/HKUDS/nanobot/pull/1383) 引入「小步增量 + 冲突预警」机制来降低后续冲突率。

---

**总结**：NanoBot 在 2026-08-12 的节奏仍是「高吞吐、强清理」——issues 与 PR 更新频繁，但核心风险集中在安全与循环控制上。若能尽快合并安全修复 PR 并完成重复调用告警机制，项目的健康度将进一步提升。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-12

## 1. 今日速览

项目过去 24 小时维持**高活跃度**：共 50 条 Issue 更新（48 条活跃/新开，2 条关闭）、50 条 PR 更新（43 条待合并，7 条合并/关闭），无新版本发布。今日主线集中在三方面：一是 **Windows 桌面端稳定性问题集群**持续发酵，多个 P1 级 bug 仍未修复；二是 **god-file 分解史诗**（#78647，67 条评论）继续获得社区广泛参与，`mcp_tool.py` 等巨型文件的分片方案正在推进；三是**会话/进程状态隔离**类修复开始批量落地，包括跨进程 turn lease 的 DB 存储层（[PR #84145](https://github.com/NousResearch/hermes-agent/pull/84145)）和后台进程通知路由修复（[PR #84174](https://github.com/NousResearch/hermes-agent/pull/84174)）。整体来看，项目社区讨论活跃、修复响应快，但 Windows 平台发布质量与部分 P2 级 bug 的修复进度值得关注。

## 2. 版本发布

今日无新版本发布（最新 Releases 为空）。

## 3. 项目进展

今日有 **7 个 PR 合并/关闭**（明细未在排行中逐条列出）。在新提交的 PR 中，以下几个与既有 Issue 形成闭环，反映出项目正在实质推进：

| PR | 关联 Issue | 内容 | 意义 |
|---|---|---|---|
| [PR #84145](https://github.com/NousResearch/hermes-agent/pull/84145) | [#67442](https://github.com/NousResearch/hermes-agent/issues/67442) | 为跨进程 turn lease 增加 `turn_leases` DB 表及原子获取/刷新/释放/查询操作 | 为 CLI-continuity 跨进程会话串行化补上存储层，是解决“单独 OS 进程共享网关会话”边界的核心前置 |
| [PR #84174](https://github.com/NousResearch/hermes-agent/pull/84174) | [#83213](https://github.com/NousResearch/hermes-agent/issues/83213) | 后台进程完成通知钉死在 spawning session，`/new` 不再劫持路由 | 修复 P2 级消息错路由问题，涉及进程检查点/恢复/watcher 全链路 |
| [PR #84181](https://github.com/NousResearch/hermes-agent/pull/84181) | [#84102](https://github.com/NousResearch/hermes-agent/issues/84102) | 本地 TTS（NeuTTS/Piper/KittenTTS）转换 .ogg 时显式指定 mono libopus | 修复语音消息静默降级问题 |
| [PR #84180](https://github.com/NousResearch/hermes-agent/pull/84180) | — | WhatsApp bridge 认证状态原子化持久化，避免磁盘写满导致配对身份丢失 17 小时 | 提升外部平台接入的可靠性 |
| [PR #84179](https://github.com/NousResearch/hermes-agent/pull/84179) | — | `hermes doctor` 检测半安装的发行版（import probe 增强） | 改善诊断工具覆盖度 |
| [PR #83902](https://github.com/NousResearch/hermes-agent/pull/83902) | — | 修复 dict 值 `model.default` 泄漏到 `agent.model` 导致的启动崩溃 | P1 级配置兼容性修复 |

项目整体处于**治理型重构（god-file 分解）+ 稳定性修补**并行推进的状态：架构上向模块化收敛，运行层面重点补 Windows/桌面端和跨进程会话的可靠性短板。

## 4. 社区热点

评论最集中的 Issue 反映了社区的两大核心关注：**代码库可维护性**与**跨进程会话一致性**。

- **[#78647 — Epic: Shard all 20 god files](https://github.com/NousResearch/hermes-agent/issues/78647)**（67 条评论）— 仓库级 god-file 分解史诗，确立了“all god files are sharded, never reverted”的强制政策。社区在评论中围绕分片顺序、共享接口设计展开密集讨论，是当前项目的头号治理议题。
- **[#67442 — 跨进程 turn 序列化：CLI-continuity 会话需要 DB 级 lease](https://github.com/NousResearch/hermes-agent/issues/67442)**（14 条评论）— 关注 CLI-continuity 场景下多 OS 进程共享网关会话时的并发隐患，今日已有对应 PR #84145 推进。
- **[#66616 — Skills index 陈旧/降级](https://github.com/NousResearch/hermes-agent/issues/66616)**（13 条评论）— 自动化探针反复报告文档索引过期（29.8h > 26h 上限），属于 CI/文档链路健康度问题，社区关注度不低。
- **[#78642 — Shard tools/mcp_tool.py](https://github.com/NousResearch/hermes-agent/issues/78642)**（11 条评论）— 针对 7,230 行的 `mcp_tool.py` 的分片方案讨论，是 #78647 下首个被重点解剖的 god-file。

**诉求分析**：社区对“代码库长期可维护性”有强烈共识，且愿意深度参与重构方案设计；同时真实运行中的跨进程/会话状态问题（#67442）持续被关注，说明高级用户对 Hermes 作为“个人 AI 助手底座”的稳定性期望很高。

## 5. Bug 与稳定性

### P1（高风险，多数仍未修复）

- **[#83683](https://github.com/NousResearch/hermes-agent/issues/83683) — Windows 桌面重启收割 live gateway 且不重启（回归）**：微信/QQ/Telegram 全部静默，直到手动重启。**无 fix PR**，属消息投递高危回归。
- **[#83562](https://github.com/NousResearch/hermes-agent/issues/83562) — Windows Desktop 更新后报 `Hermes backend exited (0)`**：Repair install 多次重试仍失败。**无 fix PR**。
- **[#63717](https://github.com/NousResearch/hermes-agent/issues/63717) — Windows Desktop 更新失败综合诊断**：关联 7 个根因，与 [#68760](https://github.com/NousResearch/hermes-agent/issues/68760)（`hermes.exe` WinError 32）、[#82186](https://github.com/NousResearch/hermes-agent/issues/82186)（WinError 5，Hermes-managed Node 引入）同属 Windows 更新问题族。**无 fix PR**。
- **[#62792](https://github.com/NousResearch/hermes-agent/issues/62792) — Desktop 后端使用 venv Python，`.pyd` 文件锁阻塞更新**：Windows 平台特有。**无 fix PR**。
- **[#83902](https://github.com/NousResearch/hermes-agent/issues/83902) — dict 值 `model.default` 泄漏导致启动崩溃**：已有 [PR #83902](https://github.com/NousResearch/hermes-agent/pull/83902) 修复。

### P2

- **[#73779](https://github.com/NousResearch/hermes-agent/issues/73779) — Feishu 多路复用模式下 `Future attached to a different loop` 崩溃**：网关静默停止收消息。**无 fix PR**。
- **[#83427](https://github.com/NousResearch/hermes-agent/issues/83427) — `browser_exec` 报 pydantic_core ModuleNotFoundError**（Desktop 场景）。**无 fix PR**。
- **[#83213](https://github.com/NousResearch/hermes-agent/issues/83213) — 后台进程完成通知在 `/new` 后错路由**：已有 [PR #84174](https://github.com/NousResearch/hermes-agent/pull/84174)。
- **[#81410](https://github.com/NousResearch/hermes-agent/issues/81410) — 单进程 Nous OAuth 刷新返回 invalid_grant**：无并发竞争也被吊销。**无 fix PR**，需复现。
- **[#82846](https://github.com/NousResearch/hermes-agent/issues/82846) — Smart-approval 辅助 LLM 调用无超时**：provider 卡死会无限期阻塞整个 agent 会话。**无 fix PR**。
- **[#84169](https://github.com/NousResearch/hermes-agent/issues/84169)（新）— 空 `tool_calls` 数组导致严格 provider 返回 400**：auxiliary client 路径绕过预发送 sanitizer。**无 fix PR**。
- **[#84172](https://github.com/NousResearch/hermes-agent/issues/84172)（新）— `platform_toolsets.webhook` 配置被忽略**：webhook 会话无法访问平台工具。**无 fix PR**。
- **[#84102](https://github.com/NousResearch/hermes-agent/issues/84102) — 本地 TTS 把 Ogg/Vorbis 写入 .ogg 路径，语音气泡静默降级**：已有 [PR #84181](https://github.com/NousResearch/hermes-agent/pull/84181)。
- **[#80016](https://github.com/NousResearch/hermes-agent/issues/80016) — Email 适配器吞掉所有 IMAP fetch 失败**：永不触发 fatal-error/reconnect 路径。**无 fix PR**。

### 今日新开 Bug 小结

今日新开并已进入修复通道的有 [#84169](https://github.com/NousResearch/hermes-agent/issues/84169)（empty tool_calls）、[#84172](https://github.com/NousResearch/hermes-agent/issues/84172)（webhook toolsets）、[#84102](https://github.com/NousResearch/hermes-agent/issues/84102)（TTS 编解码）；其中 TTS 编解码和后台通知路由**当天即获得 fix PR**，修复响应速度良好。但 **Windows 桌面更新/重启问题族仍是最大的稳定性负债**，多个 P1 级问题长期未闭环。

## 6. 功能请求与路线图信号

- **[#80222 — delegate_task 支持 per-call model 和 reasoning_effort 覆盖](https://github.com/NousResearch/hermes-agent/issues/80222)**：当前委托配置只能 all-or-nothing，高级用户诉求明确。目前仅 3 条评论，处于 needs-decision 状态。
- **[#83244 — 将 Google Antigravity 作为一等 OAuth provider](https://github.com/NousResearch/hermes-agent/issues/83244)**：用户希望接入 Claude Sonnet 4.6 / Opus 4.6 / Gemini 3.x 系列。较新需求，尚在决策中。
- **[#49190 — 将 Kanban 通知泛化为事件基板](https://github.com/NousResearch/hermes-agent/issues/49190)**：8 条评论的 feature 提议，意图把硬编码到 gateway 的任务通知改为任意 surface 订阅 + 投递适配器注册表。
- **[#82591 — Kanban zero-authority workers 史诗（Part 1 of 3）](https://github.com/NousResearch/hermes-agent/issues/82591)**：完整实施计划分三部分发布，涵盖 durable publication、safe reclaim 与 godfile 清除。

**PR 侧路线图信号**：[#83907](https://github.com/NousResearch/hermes-agent/pull/83907) 新增 subagent-handles 插件（子代理句柄注册表 + 中途消息 steering）；[#84178](https://github.com/NousResearch/hermes-agent/pull/84178) 增加 Nix home-manager 模块；[#82243](https://github.com/NousResearch/hermes-agent/pull/82243) 让 `execute_code` 可编排 deferred MCP/插件工具；[#82056](https://github.com/NousResearch/hermes-agent/pull/82056) 为 terminal/execute_code 增加 `title` 参数以优化 UI 展示。这些若合入，将显著增强 Hermes 作为个人 AI 助手的可编程性与可定制性。

综合判断：**TTS 编解码修复、跨进程 turn lease、配置安全（如 [PR #84153](https://github.com/NousResearch/hermes-agent/pull/84153) MCP 凭据脱敏）**最有可能进入下一版本；delegate_task per-call 覆盖和 Antigravity 支持则取决于决策节奏。

## 7. 用户反馈摘要

- **Windows 桌面发布质量是最大不满点**。[#83562](https://github.com/NousResearch/hermes-agent/issues/83562) 用户明确表示“我运行了内置修复安装，多次尝试仍失败”；[#83683](https://github.com/NousResearch/hermes-agent/issues/83683) 用户报告“每次桌面重启都让微信/QQ/Telegram 完全静默，直到手动重启网关”。这不是个案，而是 5+ 个相关 Issue 组成的系统性痛点。
- **本地 TTS 体验受损**：[#84034](https://github.com/NousResearch/hermes-agent/issues/84034) 用户反馈 `hermes setup` 中 neuTTS 完全缺失，选择列表里根本没有该选项；[#84102](https://github.com/NousResearch/hermes-agent/issues/84102) 用户进一步定位到 .ogg 文件实际是 Vorbis 编码导致平台语音气泡失效——本地 TTS 用户正在被双重打击。
- **高级用户对配置灵活性不满**：[#80222](https://github.com/NousResearch/hermes-agent/issues/80222) 用户抱怨 `delegate_task` 无法按调用覆盖模型与 reasoning_effort，只能全有或全无。这是 agent 工作流编排场景下的典型诉求。
- **对会话/进程一致性的担忧**：[#82846](https://github.com/NousResearch/hermes-agent/issues/82846) 用户记录了“provider 响应停滞会无限期卡死整个 agent 会话”的严重体验；[#81410](https://github.com/NousResearch/hermes-agent/issues/81410) 用户对“无并发刷新却被吊销 OAuth”表示困惑。
- **积极信号**：god-file 分解史诗（#78647）获得 67 条评论的深度参与，说明社区认可项目治理方向，愿意投入精力共建。

## 8. 待处理积压

以下为长期未闭环、值得维护者重点关注的事项：

- **[#29590 — vision_tools.py 硬编码 max_tokens 导致推理模型严重延迟](https://github.com/NousResearch/hermes-agent/issues/29590)**：2026-05-21 创建，近 3 个月未处理，仅 2 条评论。P2 性能类问题，影响配置推理模型的用户。
- **[#66616 — Skills index 反复 degraded](https://github.com/NousResearch/hermes-agent/issues/66616)**：自动化探针多次失败（索引 29.8h 旧，超限 26h），13 条评论。文档生成链路可能持续不健康，属于基础设施层面的慢性问题。
- **[#68760](https://github.com/NousResearch/hermes-agent/issues/68760) / [#82186](https://github.com/NousResearch/hermes-agent/issues/82186) — Windows 更新文件锁定问题（重复提交）**：与 #63717、#83562 同源，但均停留于诊断与重复标记，缺少统一的根治性修复。
- **[#57540 — Desktop 把显式 text 围栏语言泄漏进渲染文本](https://github.com/NousResearch/hermes-agent/issues/57540)**：7 月初提出，P3，4 条评论，目前无 PR。
- **长期未合并的老 PR**：[#53894](https://github.com/NousResearch/hermes-agent/pull/53894)（session-owned shell hooks，6/28 开）、[#53811](https://github.com/NousResearch/hermes-agent/pull/53811)（list_sessions_rich 排序稳定性，6/27 开）、[#60368](https://github.com/NousResearch/hermes-agent/pull/60368)（系统提示改进，7/7 开）、[#67163](https://github.com/NousResearch/hermes-agent/pull/67163)（Termux 原生支持，7/18 开）——均在持续更新但没有合并，可能卡在评审或设计决策上，建议维护者给出明确结论。

---

**整体健康度评估**：社区活跃度与治理执行力强（重构史诗 + 当天响应式 fix PR），但 Windows 桌面稳定性和部分 P2 级可靠性问题（无超时、错误吞掉、配置绕过）构成主要风险。若能在下一版本集中处理 Windows 更新/重启问题族，项目健康度将显著提升。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-08-12）

## 1. 今日速览

过去 24 小时 PicoClaw 保持中等活跃度：新增 2 个 Issue、关闭 1 个 stale Issue，另有 6 个 PR 处于开放待合入状态，无新版本发布。当前社区讨论焦点集中在 dispatch rules 路由场景下的会话上下文管理（[#3301](https://github.com/sipeed/picoclaw/issues/3301)）与 LINE 渠道配置项失效（[#3328](https://github.com/sipeed/picoclaw/issues/3328)）。维护者对 #3328 响应迅速，隔日即出现修复 PR [#3329](https://github.com/sipeed/picoclaw/pull/3329)；但整体 PR 合入速度为 0，6 个待合入 PR 中 5 个已标记 stale，合并节奏偏慢。社区提交意愿较强，但项目交付效率受制于 PR 积压与 stale 标记的累积。

## 3. 项目进展

今日无任何 PR 被合并或关闭，也没有新版本发布，代码主线的用户可见进展为 0。值得关注的开放 PR 包括：

| PR | 方向 | 状态 |
|---|---|---|
| [#3316](https://github.com/sipeed/picoclaw/pull/3316) | 修复 routed-agent 上下文管理：历史、摘要、压缩、seahorse bootstrap | OPEN / stale |
| [#3314](https://github.com/sipeed/picoclaw/pull/3314) | 修复 `customAllowPatterns` 不生效，默认拒绝规则优先于用户白名单 | OPEN |
| [#3315](https://github.com/sipeed/picoclaw/pull/3315) | 支持 Telegram 私聊 bot 中的话题（topics） | OPEN / stale |
| [#3317](https://github.com/sipeed/picoclaw/pull/3317) | LLM 响应日志记录 prompt 缓存 token 用量 | OPEN / stale |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | 新增 Exa 原生 web 搜索 provider | OPEN / stale |
| [#3329](https://github.com/sipeed/picoclaw/pull/3329) | 针对 #3328 的修复：对无效的 LINE webhook 配置发出警告而非静默接受 | OPEN |

其中 #3329 为今日新提交，直接指向 Issue #3328；#3316 与 Issue #3301 为同一作者配对的修复方案。整体来看，项目提交活跃但合入效率有待提升。

## 4. 社区热点

**核心热点是 dispatch rules 路由场景下的会话状态失效问题。**

- [Issue #3301](https://github.com/sipeed/picoclaw/issues/3301)（评论 3）：用户报告在通过 dispatch rules 路由到非默认 agent 的聊天中，`/clear` 和会话自动压缩完全不生效。该问题涉及 Discord、Telegram 渠道，运行在 Raspberry Pi 环境，使用 DeepSeek 模型。这是当前社区讨论最集中的问题，直接关系到多 agent 路由功能的可用性。
- [PR #3316](https://github.com/sipeed/picoclaw/pull/3316)：同一作者 j-v 提交了修复 PR，试图让 routed-agent 的上下文管理（历史、摘要、压缩、seahorse bootstrap）与默认 agent 行为一致。
- [Issue #3294](https://github.com/sipeed/picoclaw/issues/3294)（评论 3，已关闭）：用户反馈 `/list models` 只显示当前模型，与命令描述“Configured models”不符。该问题因 stale 被关闭，但用户预期与命令行为之间的落差值得后续版本修正。

**背后诉求**：用户期望 dispatch rules 路由后的会话行为与默认 agent 完全对齐，同时希望 CLI 命令的输出与文档描述一致，降低配置与排查成本。

## 5. Bug 与稳定性

按过去 24 小时报告与活跃状态排列：

- **高严重度 — [#3301](https://github.com/sipeed/picoclaw/issues/3301)：routed-agent 会话不记忆、不自动压缩。** 影响长会话稳定性和多 agent 路由场景的核心体验。已有对应修复 PR [#3316](https://github.com/sipeed/picoclaw/pull/3316)，但处于 stale 状态，尚未合入。
- **中严重度 — [#3328](https://github.com/sipeed/picoclaw/issues/3328)：LINE 渠道 `webhook_host` / `webhook_port` 配置项无人读取。** 配置项存在默认值和文档说明，但代码中没有任何消费者，设置后静默失效且无警告。已有修复 PR [#3329](https://github.com/sipeed/picoclaw/pull/3329) 提交，建议优先合入。
- **低严重度 — [#3294](https://github.com/sipeed/picoclaw/issues/3294)：`/list models` 命令只显示当前模型**，与命令描述不符，属于功能缺陷但影响范围有限。该 issue 因 stale 被关闭，功能问题本身可能仍然存在。

## 6. 功能请求与路线图信号

虽然今日无新合并，但以下开放 PR 提供了明确的路线图信号：

- **Telegram 私聊话题支持（[#3315](https://github.com/sipeed/picoclaw/pull/3315)）**：当前仅在 `Chat.IsForum` 为 true 时识别话题，但 Telegram 私聊中启用话题模式的 bot 无法正确处理 `IsTopicMessage`。将增强渠道兼容性。
- **LLM 缓存 token 日志（[#3317](https://github.com/sipeed/picoclaw/pull/3317)）**：在“LLM response”调试中输出 prompt 缓存 token，尤其对 DeepSeek 等通过 Cloudflare AI Gateway 上报缓存用量的 provider 有观测价值。
- **Exa 原生 web 搜索 provider（[#3299](https://github.com/sipeed/picoclaw/pull/3299)）**：扩展 `tools.web` / `web_search` 的 provider 选项，支持日期范围过滤参数。

这三个方向分别指向是渠道兼容性、可观测性和搜索能力扩展，若合入将完善 PicoClaw 作为个人 AI 助手的周边生态。

## 7. 用户反馈摘要

从过去 24 小时活跃的 Issue 及描述中可提炼出以下真实用户反馈：

- **多 agent 路由场景的实际可用性**（[#3301](https://github.com/sipeed/picoclaw/issues/3301)）：用户 j-v 明确表示，dispatch rules 路由后 agent 不记忆历史、不触发压缩，导致该场景下实际不可用。用户已自行完成修复并提交 PR，说明社区具备较强的自驱力，但也反映出核心功能测试覆盖不足。
- **命令输出与描述需要一致**（[#3294](https://github.com/sipeed/picoclaw/issues/3294)）：用户 2suige-coder 配置了多个模型，但 `/list models` 只显示当前模型。用户期望命令输出与“Configured models”描述一致。
- **配置项静默失效会显著降低配置效率**（[#3328](https://github.com/sipeed/picoclaw/issues/3328)）：用户 qing-wang 详细列举了声明、默认值、文档位置，指出没有任何消费方。这类问题在项目快速迭代中极易被忽视，用户希望“要么实现、要么提示”。

整体来看，用户对 PicoClaw 的多 agent 路由、模型管理和配置灵活性有较高期待，同时对文档与行为的一致性非常敏感。

## 8. 待处理积压

以下 Issue / PR 长期未合入或未获得有效响应，建议维护者重点关注：

- **PR [#3299](https://github.com/sipeed/picoclaw/pull/3299)（Exa web 搜索 provider）**：创建于 2026-07-26，已积压 17 天，标记 stale。功能相对独立、无关联 issue，建议尽快 review。
- **PR [#3316](https://github.com/sipeed/picoclaw/pull/3316)（routed-agent 上下文修复）**：关联高严重度 Issue #3301，已 stale。该 PR 直接影响多 agent 路由功能的可用性，建议优先处理。
- **PR [#3315](https://github.com/sipeed/picoclaw/pull/3315)（Telegram 私聊话题）** 与 **[#3317](https://github.com/sipeed/picoclaw/pull/3317)（缓存 token 日志）**：均创建于 8 月 3—4 日，已 stale，等待维护者反馈。
- **PR [#3314](https://github.com/sipeed/picoclaw/pull/3314)（`customAllowPatterns` 修复）**：同样是功能正确性修复，尚未合入，缺少维护者评论。
- **Issue [#3301](https://github.com/sipeed/picoclaw/issues/3301)**：创建于 2026-07-29，已有社区修复但未合入，长时间悬置会消耗社区信任。

大量 PR 集中在 8 月 3—4 日提交，目前均已进入 stale 状态，说明维护者响应存在延迟。建议进行一次集中 triage，明确各 PR 的合入/关闭决策。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 2026-08-12

> 数据窗口：过去 24 小时（2026-08-11 → 2026-08-12）  
> 数据源：GitHub 概览数据（新 Issue 1 条、PR 更新 8 条、无新版本）  
> 链接说明：数据源头部为 `qwibitai/nanoclaw`，各 Issue/PR 条目归属为 `nanocoai/nanoclaw`，下文链接按条目原文归属统一构造，若跳转异常请以仓库实际路径为准。

---

## 1. 今日速览

过去 24 小时 NanoClaw 保持中高活跃度：新开 Issue 1 条，PR 更新 8 条（其中 3 条进入关闭/合并态），无新版本发布。今日最明确的进展是远程 Streamable HTTP MCP 服务器支持从 Claude provider 扩展到了 codex 与 opencode（[#3092](https://github.com/nanocoai/nanoclaw/pull/3092)、[#3221](https://github.com/nanocoai/nanoclaw/pull/3221)），同时新增了社区贡献的 Tavily 工具技能（[#3190](https://github.com/nanocoai/nanoclaw/pull/3190)）。此外，新 Issue [#3226](https://github.com/nanocoai/nanoclaw/issues/3226) 暴露了一个消息可靠性隐患：平台复用消息 ID 时入站消息会被静默丢弃，用户端看起来就像“agent 忽略了我”，值得尽快响应。整体来看，项目处于功能迭代加速期，核心团队与社区贡献者均在持续产出，项目健康度良好。

---

## 2. 版本发布

本期无新版本发布。

---

## 3. 项目进展

今日共有 3 条 PR 进入关闭/合并态，主要推进了 MCP 生态兼容性与技能生态建设：

- **[PR #3092 - 支持远程 Streamable HTTP MCP 服务器（核心团队）](https://github.com/nanocoai/nanoclaw/pull/3092)**：在引擎层和 Claude provider 中支持远程 Streamable HTTP MCP 服务器（即 `mcpServers` 中的 `{ type: 'http', url }` 配置）。这是 MCP 能力向远程/HTTP 模式扩展的关键一步。
- **[PR #3221 - 为 codex 和 opencode 补齐远程 Streamable HTTP MCP 支持（核心团队）](https://github.com/nanocoai/nanoclaw/pull/3221)**：作为 #3092 的 follow-up，修复了 codex 和 opencode 仍假设 `stdio-only` 配置、遇到 http 条目时在配置写入阶段抛错的问题。至此，远程 HTTP MCP 支持已覆盖 Claude、codex、opencode 多个 provider。
- **[PR #3190 - 新增 Tavily MCP 工具技能（社区贡献）](https://github.com/nanocoai/nanoclaw/pull/3190)**：以 Utility skill 的形式为 `.claude/skills/` 增加 Tavily 搜索工具，无需改动引擎源码即可扩展工具集，体现了技能生态的社区活跃度。

这三条合入使 NanoClaw 在 MCP 远程服务支持上向前迈进了一个完整台阶：从“单 provider 引擎能力”到“多 provider 全面落地”，且社区技能生态开始产生实际贡献。

---

## 4. 社区热点

今日最值得关注的社区讨论是新 Issue **[#3226 - 平台复用消息 ID 时入站消息被静默丢弃](https://github.com/nanocoai/nanoclaw/issues/3226)**，这也是今日唯一有评论数的条目（1 条评论）。

该 Issue 描述了一个对用户信任感伤害很大的问题：当同一会话中平台重复使用某条消息 ID 时，新消息会被静默丢弃，既不进入 agent，也没有任何用户可见的提示。从用户视角看，这完全等同于“agent 忽略了我”。虽然当前评论数不多（1 条），但该问题触及消息投递可靠性的核心体验，预计会引发较多共鸣。

另外，核心团队 PR **[#3220 - agent 模板升级为 Agent Plugins 1.0.0 目录](https://github.com/nanocoai/nanoclaw/pull/3220)** 也值得关注。它被标记为 `feat!`（破坏性变更），是一个模板格式迁移+安全加固的引擎级改动，虽然评论数据未在概览中给出，但这类格式变更通常会引发维护者与插件作者之间的讨论。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | 条目 | 状态 |
|---|---|---|
| 高 | **[#3226](https://github.com/nanocoai/nanoclaw/issues/3226) 入站消息静默丢弃**：平台复用消息 ID 时消息直接丢失，无错误提示、无重试、无日志反馈，用户感知为“agent 忽略我” | 新报告，尚无 fix PR |
| 中 | **[#3220](https://github.com/nanocoai/nanoclaw/pull/3220) 中的安全加固**：包含 stamp-time symlink/caps/secret 加固修复（属于模板插件化改造的一部分） | 有 fix PR，待合并 |
| 中 | **[#3195](https://github.com/nanocoai/nanoclaw/pull/3195) 升级过程非事务化**：升级中断可能留下不一致状态，PR 正在推进事务化升级 | 有 fix PR，待合并 |
| 中低 | **[#3145](https://github.com/nanocoai/nanoclaw/pull/3145) 已有 wirings 缺少 channel destinations**：需要数据库迁移 021 进行回填 | 有 fix PR，待合并 |

其中 #3226 是当前唯一的“已报告但尚无修复方案”的稳定性问题，建议维护者优先确认消息 ID 去重的逻辑，至少在丢弃时给出可见的 warning 或错误回调。

---

## 6. 功能请求与路线图信号

- **Agent 模板 → Agent 插件体系（1.0.0）**：[#3220](https://github.com/nanocoai/nanoclaw/pull/3220) 的标题明确写着 `feat!: agent templates become Agent Plugins 1.0.0 directories`，这是一次格式迁移级别的破坏性变更。结合 [#2909](https://github.com/nanocoai/nanoclaw/pull/2909)（模板设置流程 + 首 agent stamping，part 2/2），可以判断**模板/首 agent 创建体验的插件化改造**是当前版本的核心路线图方向，预计会随下一版本发布。
- **MCP 全面走向远程 HTTP**：#3092 → #3221 的连续合入表明，**远程 Streamable HTTP MCP 服务器的完整支持**是既定路线，且已从 Claude 扩展到 codex/opencode。后续可能会有更多与远程 MCP 相关的文档、配置校验或故障诊断能力。
- **技能生态社区化**：#3190（Tavily MCP 工具）是社区贡献的技能，说明 `.claude/skills/` 机制已经能吸引外部开发者参与。未来可能看到更多 Utility/Feature skill 的提交。

---

## 7. 用户反馈摘要

今日数据中可提取的用户反馈主要来自 [#3226](https://github.com/nanocoai/nanoclaw/issues/3226)：

- **核心痛点**：消息被静默丢弃时，用户无法区分“平台问题”和“agent 故意不回应”。该 Issue 明确提到“从用户侧看，这与‘agent 忽略了我’无法区分”，说明用户对透明度和可观测性有较高期待。
- **期望行为（推断，基于 Issue 摘要）**：至少应有一个用户可见的提示、错误标记或投递失败通知，而不是无声丢失。评论区的具体讨论内容未在数据中展开，但该 Issue 的诉求方向是明确的：**消息传递需要失败可见性**。

除 #3226 外，其余 Issue/PR 的评论内容未在数据中提供，用户反馈样本有限。

---

## 8. 待处理积压

以下为长期未关闭/合并、需要维护者关注的条目：

| 条目 | 开启时间 | 搁置时长 | 备注 |
|---|---|---|---|
| **[#2134 - launchd plist 增加 Apple Silicon + Colima 环境变量](https://github.com/nanocoai/nanoclaw/pull/2134)** | 2026-04-29 | 约 105 天 | 影响 macOS + Colima 用户的环境变量传递，长时间未被处理，建议至少给予明确回复 |
| **[#2909 - 模板设置流程 + 首 agent stamping](https://github.com/nanocoai/nanoclaw/pull/2909)** | 2026-07-02 | 约 40 天 | 核心团队 PR，属于模板插件化路线的一部分，与 #3220 相互关联，建议与 #3220 一并推进 |
| **[#3145 - 回填已有 wirings 的 destinations](https://github.com/nanocoai/nanoclaw/pull/3145)** | 2026-07-28 | 约 14 天 | 数据库迁移 021，解决存量数据缺失问题，影响升级用户的数据完整性 |

另外，[#3195](https://github.com/nanocoai/nanoclaw/pull/3195)（升级事务化）与 [#3220](https://github.com/nanocoai/nanoclaw/pull/3220)（模板插件化+安全修复）目前仍处于待合并状态，建议优先推进这两条，以降低当前版本的稳定性与安全风险。

---

*本日报由数据驱动生成，未包含主观定性判断；所有链接基于数据源中的 `nanocoai/nanoclaw` 路径构造。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-12

> 数据源：[github.com/nearai/ironclaw](https://github.com/nearai/ironclaw) | 覆盖窗口：2026-08-11 ~ 2026-08-12

---

## 1. 今日速览

过去 24 小时项目处于**高强度迭代状态**：23 条 Issue 更新（新开/活跃 13 条，关闭 10 条），50 条 PR 更新（待合并 25 条，已合并/关闭 25 条），未发布新版本。核心开发集中在 **"Reborn" 架构重构**——围绕 Agent 循环（loop）、上下文窗口管理、工具披露（disclosure）、内存持久化、Channel 统一模型等方向密集提交，近 20 个高价值 Bug 修复/增强 PR 集中来自核心维护者（serrrfirat、henrypark133、BenKurrek、ilblackdragon）。值得警惕的是：**QA 环境连续三天上报的"代理幻觉状态"类 Bug（#7246/#7247/#7294）至今无对应 fix PR**，且"上下文窗口静默驱逐任务"（#7484）、"token 估算器将 ASCII 双重计数"（#7485）等基础架构缺陷同日暴露，表明自动化运行可靠性仍是当前最大短板。整体评估：**活跃度极高（9/10）**，工程推进节奏快，但稳定性风险敞口同步放大。

---

## 3. 项目进展

> 注：今日无新版本发布（Releases 为空），以下为已合并/关闭的关键 PR。

### 3.1 已合并/关闭的核心 PR（25 条）

| PR | 标题 | 影响 |
|---|---|---|
| [#6997](https://github.com/nearai/ironclaw/pull/6997) | feat(llm): explicit Anthropic cache_control breakpoints on both transports | **关闭 #6984**（P0）。两个 Anthropic 传输通道（rig/API-key + OAuth）均改为显式 `cache_control` 断点，不再依赖自动缓存。显著降低长会话工具调用场景的 token 成本，是 pi-harness 采纳计划的第一个落地项。 |
| [#7471](https://github.com/nearai/ironclaw/pull/7471) | fix(processes): lease expiry recovers safe runs instead of failing them | 进程租约到期改为**在确认安全点恢复运行**而非直接失败；隔离 journal 心跳连接池，默认连接池容量提升；通过租约 TTL 宽限期和受限回收预算围栏陈旧执行器。直接提升无人值守自动化的健壮性。 |
| [#7470](https://github.com/nearai/ironclaw/pull/7470) | fix(threads): restore listability for unprojected thread index rows | 修复了"边栏会话消失"问题：无有序投影元数据的 `thread_index` 行此前无法在 `list_threads` 中列出。 |
| [#7503](https://github.com/nearai/ironclaw/pull/7503) | fix(loop): retain accepted task across context eviction | 在 128 条消息截断和 token 预算下**固定保留已接受的任务消息**；超出预算时显式 `BudgetExceeded` 失败而非静默丢弃。 |
| [#7480](https://github.com/nearai/ironclaw/pull/7480) | fix(webui): reveal long conversation titles on hover | WebUI 左侧导航栏长标题悬停展示（MarqueeText 组件），关闭 #7481。 |
| [#7514](https://github.com/nearai/ironclaw/pull/7514) | fix: enable Railway shell for hosted volume profile | 为托管卷部署启用 Railway sandbox shell（严格 release-only），统一沙箱运行时与进程绑定。 |

### 3.2 整体评估

今天合并的 PR 覆盖 **进程恢复、上下文保留、LLM 缓存成本、线程列表可靠性** 四条关键链路；对于"自动化运行不可靠"这一长期痛点（#6879），租约恢复 + 任务固定 + 缓存断点三项合并构成结构性补强。项目正在从"功能铺开"转向"内核加固"，但大量 XL 级 PR 仍在队列中（见 §8）。

---

## 4. 社区热点

今日讨论最集中、争议性最强的话题围绕 **Agent 循环的架构重构**：

### 4.1 最热 Issue：#7482 — "Pluggable agent loops" Epic
- 链接：[nearai/ironclaw Issue #7482](https://github.com/nearai/ironclaw/issues/7482)
- **核心主张**：IronClaw 应定位为"内核"（调度、租户隔离、能力膜、密钥中介、出口边界、审计、入站通道），而 **Agent 循环和逐集成的工具代码**应外包给现成的 **ACP（Agent Communication Protocol）代理**——"不要再做两件不扩展的事"。
- **信号**：同日出现配套 PR [#7513](https://github.com/nearai/ironclaw/pull/7513)（新增 `ironclaw acp serve` 命令，通过 stdio 对外暴露 ACP，支持流式输出与取消），由新贡献者 Kampouse 提交。**外部 ACP 生态接入与内部内核化路线正式合流**，这是本周最重要的路线图信号。

### 4.2 高热度讨论串：serrrfirat 的"Reborn 架构缺陷连发"

该作者今天连开 7 个 `[reborn]` Bug/Enhancement（#7482-#7490），几乎全部带 `scope: agent` 标签，且每个均含精确文件/行号定位：

- [#7484](https://github.com/nearai/ironclaw/issues/7484) 上下文窗口静默驱逐任务（3 处独立 hard-coded `max_messages: 128`）
- [#7485](https://github.com/nearai/ironclaw/issues/7485) token 估算器 ASCII 双重计数（2 字符/token，实为文档标准的 2 倍）
- [#7486](https://github.com/nearai/ironclaw/issues/7486) "无进展"逃逸在幂等读/轮询上误报
- [#7487](https://github.com/nearai/ironclaw/issues/7487) `tool_search` 标记已披露工具但不返回 schema，破坏 describe-first 机制
- [#7488](https://github.com/nearai/ironclaw/issues/7488) 三个 bridge 工具硬编码串行，批量发现被截尾
- [#7490](https://github.com/nearai/ironclaw/issues/7490) `retry_disposition()` 静默重驱动表是死代码

**分析**：这组 Issue 呈现出一个核心主题——**当前 Agent 循环的上下文管理、工具披露、重试机制在生产规模下存在系统性缺陷**。3 条已有对应 fix PR（#7504、#7512、#7509），反应速度极快。社区焦点正从"能用"转向"规模化场景下不崩"。

---

## 5. Bug 与稳定性

按严重程度排列（P2 及以上）：

### 🔴 P1 — 功能不可用 / 数据有丢失风险

| Issue | 标题 | 状态 | Fix PR |
|---|---|---|---|
| [#7484](https://github.com/nearai/ironclaw/issues/7484) | 上下文窗口静默驱逐任务（128 条硬编码 ×3 处） | OPEN | ✅ [#7504](https://github.com/nearai/ironclaw/pull/7504)（改为强制压缩信号）+ [#7503](https://github.com/nearai/ironclaw/pull/7503)（任务固定，已合并） |
| [#7485](https://github.com/nearai/ironclaw/issues/7485) | token 估算器双倍高估 ASCII → 有效上下文窗口减半 | OPEN | 暂无 |
| [#7505](https://github.com/nearai/ironclaw/issues/7505) | Memory target-alias 仅在 native provider 解析，mem0 存原样 `"memory"` → 交叉 provider 记忆断裂 | OPEN | ✅ [#7512](https://github.com/nearai/ironclaw/pull/7512)（域契约层解析，已开放） |

### 🟡 P2 — 行为错误 / 产生误导

| Issue | 标题 | 状态 | Fix PR |
|---|---|---|---|
| [#7487](https://github.com/nearai/ironclaw/issues/7487) | `tool_search` 标记已披露但不返回 schema，describe-first 安全网失效；`oneOf required` 坍缩为空 | CLOSED | 已修复（同日关闭） |
| [#7488](https://github.com/nearai/ironclaw/issues/7488) | 三个披露 bridge 工具硬编码 `Exclusive` 串行；批量发现丢批次尾部 | CLOSED | 已修复（同日关闭） |
| [#7486](https://github.com/nearai/ironclaw/issues/7486) | "无进展"终止机制在幂等读/轮询上误报（输出哈希把重复结果当 `NoChange`） | OPEN | 暂无 |
| [#7490](https://github.com/nearai/ironclaw/issues/7490) | `retry_disposition()` 静默重驱动表是死代码（~25 个瞬态故障类别无分支可达） | OPEN | 暂无 |
| [#7476](https://github.com/nearai/ironclaw/issues/7476) | MODEL 投递路径 `classify_delivery_outcome` 忽略 `vendor_message_refs` → 部分发送证据对模型不可见（与 #7475 同源） | OPEN | 提及 PR #7475 |

### 🟠 P2 — QA 环境回归（连续三天出现）

| Issue | 标题 | 状态 |
|---|---|---|
| [#7246](https://github.com/nearai/ironclaw/issues/7246) | 代理臆造自动化状态（声称 BTC 自动化在运行，实际 Automations 页为空） | CLOSED |
| [#7247](https://github.com/nearai/ironclaw/issues/7247) | 代理谎称 GitHub 已连接，未经验证认证状态 | CLOSED |
| [#7294](https://github.com/nearai/ironclaw/issues/7294) | 代理错误记忆来自其他 scope/线程的 Telegram 例程 | CLOSED |
| [#7508](https://github.com/nearai/ironclaw/issues/7508) | GitHub MCP 扩展启动给出令人困惑的端点验证提示，而非直接连接 | OPEN |

> ⚠️ 注意：#7246/#7247/#7294 今日被**关闭但无对应 fix PR 关联**，可能为 QA 验证后关闭（如配置类问题），但同类幻觉模式第 4 天再现（#7508），建议维护者追查根因。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 对应 PR / 信号 | 进入下一版本可能性 |
|---|---|---|---|
| **Pluggable agent loops / ACP 内核化**（#7482） | serrrfirat Epic | ✅ [#7513](https://github.com/nearai/ironclaw/pull/7513)（`acp serve` stdio 流式命令，由新贡献者提交） | 高——Epic 级，路线图已显性化 |
| **记忆目标别名域层解析**（#7505） | serrrfirat | ✅ [#7512](https://github.com/nearai/ironclaw/pull/7512) | 极高——已提 PR |
| **内存引导 + 常驻 MEMORY.md prompt 通道**（#7185） | serrrfirat | ✅ [#7365](https://github.com/nearai/ironclaw/pull/7365) 待合并 | 高——已开放 4 天 |
| **Automation suggestion cards V1** | #7038 设计系统 Epic 的子任务 | ✅ [#7498](https://github.com/nearai/ironclaw/pull/7498) 待合并（新增 `/api/webchat/v2/suggestions`） | 高——后端已实现 |
| **统一 Channel 模型**（web/Slack/Telegram 单一 ChannelAdapter） | BenKurrek | ✅ [#7477](https://github.com/nearai/ironclaw/pull/7477) 待合并；配套 [Slack 8/16 ops 绑定 #7515](https://github.com/nearai/ironclaw/pull/7515) | 极高——设计文档已过评审 |
| **Telegram 关联设备（linked-device）** | #7443 设计 | ✅ [#7464](https://github.com/nearai/ironclaw/pull/7464) 待合并 | 高——真实 MTProto 设备可撤消 |
| **Doc-Truth 验证管线**（#7317） | cuongdcdev | 今日关闭 | 中——已被更紧急的 reborn 工作淹没 |
| **持久化存储与部署 profile 解耦**（#7467） | henrypark133 | ✅ [#7456](https://github.com/nearai/ironclaw/pull/7456) 待合并（XL） | 极高——profile 切换导致数据"消失"是严重 UX 问题 |

---

## 7. 用户反馈摘要

> 基于今日活跃 Issue 评论与 QA 报告提炼：

1. **"代理幻觉状态"类问题引发信任危机（QA 已第 4 天上报）**：多位 QA 用户（joe-rlo）在 Railway 实例上报告：代理在不验证实际状态的情况下断言"GitHub 已连接""自动化已在运行"，甚至错误回忆其他会话的例程（#7246/#7247/#7294/#7508）。背后诉求是**代理必须"先查证、后陈述"**，对状态类断言应有工具验证兜底。目前这些 Issue 被关闭但无公开修复说明，用户侧存在困惑。

2. **文档与发布不同步的真实代价**（#7317 评论）：`origin_gate_matrix` 成为清单必填字段但文档未更新，导致开发者按旧文档迁移清单直接失败。社区呼吁建立**文档-代码真值校验管线**。Issue 今日关闭，尚不明确是否有后续跟进 PR。

3. **WebUI 可用性细节受关注**：会话长标题截断无法阅读（#7481，已修复）；NEAR AI provider 默认配置下测试连接和模型列表请求因空 API key 失败（#7483，已关闭），反映出内置配置对新手不够友好。

4. **对 Reborn 架构的信任投票**：serrrfirat 同日连发 7 个高精度缺陷报告（含精确行号），且多数当天就有 fix PR 落地（#7487/#7488 已关闭），社区对核心维护者的响应速度评价积极。但**"至少 3 个独立 128 消息硬编码"这类基本设计缺陷的出现**，也引发对 Reborn 代码成熟度的质疑。

---

## 8. 待处理积压

> 以下为长期未响应或虽开放但停滞的重要条目，建议优先关注：

### ⚠️ 高优先级
- **#6879** [OPEN] [epic, v1.3.0] [Automation runs are hit-or-miss](https://github.com/nearai/ironclaw/issues/6879)
  自 7/29 开放，已锁定 v1.3.0，无人值守自动化按"普通交互式聊天"方式执行的问题。今天仅 1 条相关 Issue（#7484/#7490 部分覆盖上下文与重试问题），但**尚无系统性修复 PR**。这是最影响产品可信度的待办项。

### 🟡 中优先级
- **#7038** [OPEN] [epic, v1.3.0] [Storybook + AI-first Design System](https://github.com/nearai/ironclaw/issues/7038)
  设计系统 Epic，8/3 开放无子任务进展更新。今日 #7498 的 automation suggestions 仅是其子集，主线仍待启动。
- **#5910** [OPEN] [size: L] [fix: hydrate approval gates on notification open](https://github.com/nearai/ironclaw/pull/5910)
  **一个月无人 review**（7/10 → 至今）。审批门在通知打开时可能不加载的问题，若为长期竞态应尽快合入。
- **#7467**（proposed fix #7456）与 **#7477**（unified channel model）为 XL 级重构，虽然已提 PR 且积极参与，但涉及面广、冲突风险高，需要 stable 分支的充分回归。

### ✅ 今日关闭但值得回看的
- **#7317** Doc-Truth 验证管线提案：关闭状态需确认是否已有替代方案，否则"文档滞后导致迁移失败"的痛点将持续存在。

---

*日报生成时间：2026-08-12 | 数据窗口：2026-08-11 00:00 ~ 2026-08-12 00:00 (UTC)*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-12

> 数据窗口：2026-08-11 至 2026-08-12 · 数据来源：github.com/netease-youdao/LobsterAI

---

## 1. 今日速览

过去 24 小时项目整体活跃度**中高**：合并/关闭 PR 7 条（合并率 70%），发布新版本 1 个，功能迭代节奏正常；Issue 侧 4 条更新全部为 stale 标记的旧条目（3 条关闭、1 条仍打开），**无新增 Bug 报告**，说明近期版本稳定性较好。当前版本迭代主要围绕 **模型思考层级配置、Cowork 任务体验优化、本地文件工作流** 三条主线推进，且已完成一次 Release 合并（`release/2026.8.10` → `main`）。需要关注的是，仍有若干 4 月龄的 PR/Issue 处于长期搁置状态（见第 8 节）。

---

## 2. 版本发布

### LobsterAI 2026.8.11（发布于 2026-08-11）

**更新内容：**

- **Cowork 快捷键增强**：新增 `collapse-agent-tasks` 快捷操作；允许在输入过程中使用修饰键快捷键（fisherdaddy, [#2469](https://github.com/netease-youdao/LobsterAI/pull/2469)）
- **Cowork 任务可视化**：侧边栏中标记计划任务（scheduled task）会话，便于区分手动任务与定时任务（liuzhq1986, [#2470](https://github.com/netease-youdao/LobsterAI/pull/2470)）

**破坏性变更：** 无

**迁移注意事项：** 无特殊操作；建议用户在更新后检查 Cowork 侧边栏的任务筛选/排序是否符合预期（新增标记可能影响既有布局）。

---

## 3. 项目进展

今日合并/关闭的 PR 主要来自 `release/2026.8.10` 分支的收尾工作，标志着以下功能正式进入主分支：

- **模型思考层级（Thinking Levels）落地**（[#2457](https://github.com/netease-youdao/LobsterAI/pull/2457)，已合并）：新增服务端驱动的思考层级选项与默认值；支持 OpenClaw 别名配置（产品级 `max` 映射至运行时 `xhigh`）；按会话/按 Agent 持久化选择，并发送带版本号的模型请求参数。这是本次 Release 的核心功能。
- **本地文件链接右键菜单**（[#2473](https://github.com/netease-youdao/LobsterAI/pull/2473)，已合并）：为 Markdown 内容中的本地文件链接增加右键菜单，支持打开方式/另存为/复制路径/复制内容/复制图片/在文件夹中显示等操作；新增 `dialog:saveFileCopy` IPC 通道，并在主进程缓存 shell 查找结果，属体验向的实用增强。
- **Escape 键关闭最上层弹层**（[#2476](https://github.com/netease-youdao/LobsterAI/pull/2476)，已合并）：修复嵌套弹层（Modal 渲染到 `document.body` 导致 DOM 层级失真）场景下，单个 Escape 同时触发内层与外层关闭的问题；引入 layer id 机制保证只有最上层响应，并兼容 IME 输入状态。
- **侧边栏图标描边对齐**（[#2474](https://github.com/netease-youdao/LobsterAI/pull/2474)，已合并）：视觉细节修正。
- **Release 分支合入**（[#2477](https://github.com/netease-youdao/LobsterAI/pull/2477)，已合并）：`release/2026.8.10` → `main`，汇总上述功能及此前提交的配置项、可靠性修复等。
- **任务栏/Dock 闪烁提醒**（[#1239](https://github.com/netease-youdao/LobsterAI/pull/1239)，今日关闭）：AI 任务完成或出错时，窗口非前台状态下通过 Windows `flashFrame` / macOS `dock.bounce` 提醒用户；跨平台封装于 `src/main/windowAttention.ts`。该 PR 因 stale 被关闭，但功能价值明确，建议维护者评估是否重开或另以新 PR 跟进。

---

## 4. 社区热点

今日无高热度讨论（所有条目评论数 ≤ 2），相对受关注的条目集中在用户体验痛点：

- **[Issue #1240：大模型受限后无法切换，整体瘫痪](https://github.com/netease-youdao/LobsterAI/issues/1240)**（评论 2 条，已关闭）：用户完整描述了故障链路——API 配额耗尽后，所有对话框任务继承“受限”状态，即使切换到其他模型仍不可用，最终导致程序无法启动，需回滚配置恢复。说明**模型级故障隔离**与**配置损坏后的可恢复性**是当前最突出的用户痛点之一。
- **[Issue #1237：Settings 关闭无确认，配置静默丢失](https://github.com/netease-youdao/LobsterAI/issues/1237)**（评论 2 条，已关闭）：用户对“修改后未保存即关闭弹窗”导致 API Key 等配置丢失表示困扰，属于高频操作路径下的防错设计缺失。

同类诉求也体现在 [#1183（网关循环启动）](https://github.com/netease-youdao/LobsterAI/issues/1183) 和 [#2062（任务超时）](https://github.com/netease-youdao/LobsterAI/issues/2062) 中——用户对**可预期、可恢复、有明确反馈**的系统行为有较高期待。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 修复状态 |
|---------|-------|------|---------|
| 🔴 高 | [#1183](https://github.com/netease-youdao/LobsterAI/issues/1183)（仍打开） | 关闭某模型开关后触发“openClaw 网关未能在规定时间内启动成功”，遮罩循环弹出，应用不可用（Windows，版本 2026.3.31） | **无对应 PR**；创建于 4 月，今日仍活跃 |
| 🟠 中 | [#1240](https://github.com/netease-youdao/LobsterAI/issues/1240)（已关闭） | 单一模型 API 受限导致全局会话不可用，切换模型无效，重启后无法启动（需回滚 `openclaw.json`） | **无对应 PR**；该问题影响面大，值得主程排查 |
| 🟠 中 | [#2062](https://github.com/netease-youdao/LobsterAI/issues/2062)（已关闭） | 任务运行超过最大时长被自动停止，用户无法判断任务是终止还是在后台继续 | **无对应 PR**；建议补充任务生命周期状态提示 |
| 🟡 低 | [#1237](https://github.com/netease-youdao/LobsterAI/issues/1237)（已关闭） | Settings 弹窗关闭路径（背景/X/Cancel）不校验未保存修改，配置静默丢失 | 曾有 PR [#1241](https://github.com/netease-youdao/LobsterAI/pull/1241) 实现脏检查与拦截，但该 PR 已被 stale 关闭；**需要新 PR 跟进** |

整体来看，今日无新增崩溃级回归，最严重的开放问题仍是 [#1183](https://github.com/netease-youdao/LobsterAI/issues/1183) 的网关启动循环（已持续 4 个月）。

---

## 6. 功能请求与路线图信号

今日无新功能请求 Issue，但 PR 侧透露了清晰的路线图方向：

- **模型思考层级的细粒度配置**（[#2457 已合并](https://github.com/netease-youdao/LobsterAI/pull/2457) + [#2475 待合并](https://github.com/netease-youdao/LobsterAI/pull/2475)）：趋势是从“全局一份配置”走向“每模型独立配置”。#2475 修复了思考深度在模型之间互斥的问题，让每个模型记住各自的思考层级，并补齐 UI 交互细节。**建议纳入下一版本**。
- **配置防丢失**（[#1241 被关闭](https://github.com/netease-youdao/LobsterAI/pull/1241)）：Settings 脏检查机制是用户明确诉求，尽管 PR 已关闭，但若在 #2475 之外重启该项工作，可显著提升设置面板可信度。
- **窗口注意力提醒**（[#1239 被关闭](https://github.com/netease-youdao/LobsterAI/pull/1239)）：任务完成时的系统级通知，属于典型的“被动等待型”体验优化，值得在后续版本中重新评估。

---

## 7. 用户反馈摘要

从今日 Issue 描述与评论中提炼的真实用户场景：

- **“API 受限是全局性的，但我不知道为什么。”**（[#1240](https://github.com/netease-youdao/LobsterAI/issues/1240)）——用户已排查到“该 API 在其他龙虾上运行畅通”，说明问题不在供应商侧，而在本机状态管理。用户尝试还原配置、切换模型、重启均无效，反馈中透露出对**可恢复性**的强烈需求。
- **“我不知道任务是停了还是在后台跑。”**（[#2062](https://github.com/netease-youdao/LobsterAI/issues/2062)）——超时任务的最终状态对用户不透明，需要更明确的 UI 指示。
- **“我改了 API Key，关掉弹窗就没了。”**（[#1237](https://github.com/netease-youdao/LobsterAI/issues/1237)）——设置面板的操作反馈缺失，直接影响用户对配置可信度的信心。
- **“关掉一个模型开关，网关就起不来了，一直弹遮罩。”**（[#1183](https://github.com/netease-youdao/LobsterAI/issues/1183)）——Windows 环境下配置变更后网关启动失败且无法解除循环，应用彻底不可用，属于阻断性体验问题。

用户整体对功能丰富度持续认可（版本迭代速度快、功能覆盖面广），但对 **故障可视化、配置安全、模型隔离** 三方面的稳定性有更高期待。

---

## 8. 待处理积压

以下条目长期未获响应，建议维护者评估是否投入资源：

- **[Issue #1183：循环跳出遮罩启动网关](https://github.com/netease-youdao/LobsterAI/issues/1183)**（创建于 2026-04-01，已 4 个月+）——Windows 平台阻断性问题，今日仍有更新，社区受影响面可能较大。
- **[PR #1181：隐藏 OpenClaw 主 Agent 会话](https://github.com/netease-youdao/LobsterAI/pull/1181)**（创建于 2026-04-01，stale）——为 `cowork_sessions` 增加 `hidden` 列，避免内部心跳/定时路由会话出现在用户列表中。属体验修正，代码量不大，建议尽快 review。
- **[PR #1277：electron 依赖大版本更新](https://github.com/netease-youdao/LobsterAI/pull/1277)**（dependabot，electron 40.2.1 → 43.3.0）——跨 3 个大版本的安全与性能更新，搁置越久升级成本越高。

---

**总结**：LobsterAI 今日处于**功能交付后的稳定发布期**，无新 Bug 报告、Release 正常推送、核心功能已合入主分支。健康度良好，主要风险集中在历史遗留的网关启动问题与若干被 stale 机制误伤的“有价值 PR”。建议维护者从积压清单中优先处理 [#1183](https://github.com/netease-youdao/LobsterAI/issues/1183) 和 [#1181](https://github.com/netease-youdao/LobsterAI/pull/1181)，并为 #1239/#1241 这类有明确用户价值但被关闭的 PR 建立追踪机制。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-08-12

## 1. 今日速览

过去24小时项目整体活跃度偏低：Issues 侧无任何新开、关闭或活跃讨论，PR 侧有 2 条工作处于待合并状态，无新版本发布。虽然变更数量不多，但两条 PR 的分量较重——其中 #1190 是面向本地数据连接器的重大功能扩展，涉及 CalDAV 快照、全文本搜索和 agent 工具集成；另一条 #1182 则为会话管理修复，解决了 main 会话无法删除/归档的长期限制。整体来看，Moltis 当前处于"功能建设稳步推进、社区讨论待激活"的阶段，项目健康度良好，但需要关注沟通与反馈层面的活跃度。

---

## 2. 版本发布

过去24小时内无新版本发布，本节省略。

---

## 3. 项目进展

过去24小时内没有 PR 被合并或关闭，但存在 2 条值得关注的待合并 PR，分别代表了项目在功能扩展与体验修复两个方向上的推进：

- **[#1190] Add durable local CalDAV connectors**（作者: penso）  
  这是一次大规模功能扩展，涵盖 provider-neutral 连接器持久化、原子性 CalDAV 快照、调度、投影以及本地全文搜索能力；同时引入了 prompt-compiled dataset plans 和只读 `connectors` agent 工具。若合并，将显著增强 Moltis 作为个人 AI 助手的本地数据接入能力，使 agent 可以安全地读取用户本地日历/数据集，属于架构级能力升级。

- **[#1182] fix(sessions): allow deleting and archiving the main session**（作者: shixi-li，修复 #1132）  
  移除了 `delete_impl` 与 `is_archivable_entry` 中对 `main` 会话的 guard 限制，让主会话可以像其他会话一样被删除或归档，同时保留当前活跃 channel session 的归档限制以及 `sessions.clear_all` 对 main/channel-bound 会话的保护。该修复将统一会话管理行为，减少用户对"主会话无法清理"的困惑。

两个 PR 分别迈出了一大步（连接器能力）和一小步（会话管理一致性），合计待合并代码量不容小觑——建议维护者优先安排 review。

---

## 4. 社区热点

过去24小时内没有收到评论、表情反应或新开讨论的 Issues/PR，因此不存在"最活跃"的讨论话题。两条 PR 目前均无人评论、零 👍，这在一定程度上反映出社区对近期变更的参与度不足，也可能是 PR 发布时间尚短所致。以下两个 PR 由于功能/修复意义较大，是当前最值得关注的窗口：

- [PR #1190: Add durable local CalDAV connectors](https://github.com/moltis-org/moltis/pull/1190)  
  它涉及 AI agent 直接读取本地用户数据的安全边界、持久化与搜索能力，背后隐含的诉求是"让 AI 助手在本地数据上拥有更可靠、可扩展、可信任的读访问路径"，也是个人 AI 助手从"对话工具"走向"数据伴生体"的一个关键技术信号。

- [PR #1182: fix(sessions): allow deleting and archiving the main session](https://github.com/moltis-org/moltis/pull/1182)  
  其诉求集中在"会话管理的一致性与用户控制权"，即用户应能完全管理自己的会话生命周期，而不应存在被框架特殊保护、无法清理的例外对象。

**建议**：后续若这两个 PR 进入 reviewer 讨论阶段，值得在社区渠道（Discord/GitHub Discussions）发起说明，以激活反馈。

---

## 5. Bug 与稳定性

过去24小时内没有新报告的 Bug、崩溃或回归问题。但需要注意一条已在修复流程中的历史问题：

- 会话管理相关 Bug（#1132）：main 会话无法被删除或归档，影响用户对会话列表的完整控制。  
  **已有修复 PR**：[#1182](https://github.com/moltis-org/moltis/pull/1182)，目前待合并。  
  **严重程度**：中低——不影响核心运行，但损害会话管理体验的一致性。

此外，PR #1190 引入了较多新的持久化与调度逻辑，建议在 review 阶段额外关注原子性快照、失败恢复与存储边界处理，以规避本地数据损坏风险。

---

## 6. 功能请求与路线图信号

过去24小时内无新功能请求提交，但 PR #1190 本身传递了清晰的路线图信号：

- **本地数据连接器（Connectors）体系**正在成型：支持持久化连接器、原子快照、调度同步、投影查询和本地全文搜索——这是将 Moltis 构建为"本地优先的个人数据层"的重要基础设施。
- **Agent 工具生态扩展**：新增只读 `connectors` agent 工具，意味着后续版本将支持 agent 在授权范围内访问本地数据集，为更丰富的 agent 任务（如日程检索、文件检索、数据集问答）铺平道路。
- **Dataset Plans（提示词编译数据集计划）**：暗示 Moltis 可能走"用户以自然语言/提示词定义数据视图，再编译为可执行计划"的方向。

结合该 PR 仍然待合并的状态，判断这些能力预计最早进入 **0.x 后续版本（下一个 minor/major 版本）**。如果维护者计划将本地连接器作为版本卖点，建议尽快启动 review 并在 roadmap 中标记。

---

## 7. 用户反馈摘要

过去24小时内没有新的 Issues 评论或外部用户反馈，因此无法获取直接用户声音。基于 PR 本身可以做出以下间接推断：

- **会话管理诉求**（来自 #1182/#1132）：用户希望像管理普通会话一样管理 main 会话——删除或归档。这说明部分用户的使用习惯更偏向"会话是临时工作区"而非"长期保留的主空间"。
- **本地数据接入的期待**（来自 #1190 的功能设计）：该 PR 的功能范围覆盖了 CalDAV（日历）与本地数据集访问，侧面反映出用户希望 AI 助手能便捷、安全地读取本地真实数据，而不仅限于聊天记录与上下文。

在无硬反馈数据的情况下，以上为基于 PR 内容的合理推断。建议维护者关注这两个方向在 Discord/issue 讨论中的相关声音，以验证真实需求强度。

---

## 8. 待处理积压

以下两条 PR 目前均处于待合并状态，是当前积压队列中的重点，建议维护者优先审查：

| PR | 主题 | 创建时间 | 最后更新 | 等待时长 | 建议 |
|---|---|---|---|---|---|
| [#1190](https://github.com/moltis-org/moltis/pull/1190) | Add durable local CalDAV connectors | 2026-08-11 | 2026-08-11 | <1 天 | 功能重大，建议尽快安排 reviewer 并明确是否需要拆分为多个小 PR 便于审查 |
| [#1182](https://github.com/moltis-org/moltis/pull/1182) | fix(sessions): allow deleting and archiving the main session | 2026-08-01 | 2026-08-11 | ~11 天 | 修复已等待超过一周，建议尽快 review 合并，以清理会话管理的已知行为不一致 |

另外，两个 PR 合计涉及存储层、会话层与 agent 工具层改动，建议维护者关注合并顺序——若 #1190 涉及的存储层变更与 #1182 的会话层变更存在交集，需要提前协调，避免合并冲突或 review 重复劳动。

---

*本日报基于 GitHub 公开数据生成，统计周期：2026-08-11 至 2026-08-12。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-08-12

## 1. 今日速览

过去 24 小时 CoPaw 项目保持高活跃度：共 23 条 Issue 更新（9 新开 / 14 关闭）、49 条 PR 更新（24 待合并 / 25 已合并或关闭），并发布了 v2.1.0-beta.3 新版本。从 Issue 关闭节奏看，开发团队对积压问题的响应速度较快，尤其是 LaTeX 渲染（#4756、#5453）、CPU 占用异常（#6828）、时间戳偏移（#6871）等历史问题均在今日关闭，其中一部分已由配套 PR 修复。项目整体处于 v2.1.0 正式版发布前的密集迭代期，beta 系列版本延续了"高发布频率 + 快速收集社区反馈"的模式，工程健康度良好，但仍有若干稳定性 bug（如 #6919 崩溃、#6732 MCP 失效）值得重点跟进。

---

## 2. 版本发布

### v2.1.0-beta.3（8 月 11-12 日发布）

**更新内容：**

- **Feat/files workspace blog**（#6783）：新增文件工作区博客功能，由 @zhaozhuang521 提交
- **fix(provider): expire stale capability cache entries and clear on model switch**（#6723）：修复 provider capability 缓存过期逻辑，模型切换时自动清理陈旧缓存条目，由 @ningblue 提交。此项修复可避免模型切换后能力信息不一致的问题
- **chore: bump the version to 2.1.0-beta.3**：版本号升级

**破坏性变更与迁移说明：**

- Release 页面未明确列出破坏性变更。由于涉及 capability 缓存过期机制的调整，建议升级后在配置中主动切换一次模型，确认 provider 能力正常刷新
- 另有 #6697（v2.1.0b1 desktop 向子进程注入 PYTHONHOME 导致所有 python 子进程崩溃）已在 beta.3 之前关闭，若用户此前手动规避了该问题，升级后可恢复默认配置

---

## 3. 项目进展

今日合并/关闭了大量 PR，覆盖前端体验、配置健壮性和记忆系统稳定性，标志着项目向 v2.1.0 正式版又迈进了一步：

**核心修复类**

- **PR #6564**（已合并）[fix(memory): flush pending turns before compression](https://github.com/agentscope-ai/QwenPaw/pull/6564)：修复 #6555，确保上下文压缩前自动记忆的 pending turns 被可靠落盘，是 Scroll 生命周期收敛专项的重要补全
- **PR #6912**（开放）[fix(config): return 422 for invalid channel payloads](https://github.com/agentscope-ai/QwenPaw/pull/6912)：对应 Issue #6910，将单频道配置接口的 500 错误改为 422，区分"客户端输入错误"与"服务端异常"
- **PR #6915**（已合并）[fix(files): repair previews and dark mode styling](https://github.com/agentscope-ai/QwenPaw/pull/6915)：修复 Unicode PDF 文件名和 SVG 文件预览失败，文件预览样式随 Console 暗色主题自适应

**功能增强类**

- **PR #6911**（已合并）[feat(console): unify renderable code block experience](https://github.com/agentscope-ai/QwenPaw/pull/6911)：统一代码块视觉系统，LaTeX 和 Mermaid 代码块新增 Preview/Source 标签页切换，并跟随亮/暗主题
- **PR #6909**（已合并）[feat(channels): warn when a bot is already used by another agent](https://github.com/agentscope-ai/QwenPaw/pull/6909)：启用频道配置时，若 Bot 身份已被其他运行中的 agent 占用，Console 弹出确认对话框提示冲突
- **PR #6891**（已合并）[feat(computer-use): improve native input workflows](https://github.com/agentscope-ai/QwenPaw/pull/6891)：新增有界键盘序列动作、逐步限速、部分完成汇报，减少桌面工作流中的往返次数
- **PR #6913**（开放）[fix(computer-use): improve macOS element activation](https://github.com/agentscope-ai/QwenPaw/pull/6913)：修复瞬态菜单和复合无障碍元素的窗口激活问题，避免上下文菜单被误关

**体验与打磨类**

- **PR #6875**（已合并）[chore: update release notes for v2.1.0](https://github.com/agentscope-ai/QwenPaw/pull/6875)：准备 v2.1.0 中英文发布说明、新闻条目和各 README 翻译同步
- **PR #6898**（已合并）[fix(tools): correct read_file tool description](https://github.com/agentscope-ai/QwenPaw/pull/6898)：修正 `read_file` 工具描述与行为不一致的问题——该工具仅适用于文本文件，但描述未注明，导致 QwenPaw-9B 会误用其读取二进制文件

---

## 4. 社区热点

**本周讨论度最高的 Issue 集中在两个主题：MCP 稳定性与公式渲染。**

- **[#6732 [Bug] mcp工具规律性失效](https://github.com/agentscope-ai/QwenPaw/issues/6732)**（10 条评论，已关闭）
  用户报告 MCP 工具每隔数小时或一晚就会失效，无法被自动调用，重启 Docker 容器即可恢复。这是典型的"进程内缓存/连接池老化"问题，对重度使用 MCP 的用户影响很大。目前已关闭，应已有修复方案。

- **[#6893 [Feature] 公式渲染问题；会话分组管理；活动会话背景](https://github.com/agentscope-ai/QwenPaw/issues/6893)**（7 条评论，已关闭）
  用户给出了具体 LaTeX 公式样例（如 `$Var(\hat{X}) = ...$`），对比 Cherry Studio 等工具后认为 QwenPaw 的公式渲染能力"很尴尬"。该 Issue 与 #4756、#5453 属于同一类诉求，三者同日关闭，推测与 PR #6911 的代码块统一方案相关。

- **[#5790 [Bug] Loading animation does not disappear after Agent response completes](https://github.com/agentscope-ai/QwenPaw/issues/5790)**（4 条评论，已关闭）
  加载动画在 Agent 回复完成后不消失，时间为 7 月 5 日提出、8 月 11 日关闭，跨月解决，属于 Console 前端交互的持久性问题。

- **[#6882 [Question] 怎么集成CopilotKit](https://github.com/agentscope-ai/QwenPaw/issues/6882)**（3 条评论，开放）
  用户询问 CopilotKit 集成思路或示例。虽然评论不多，但反映了一类"与主流前端 Copilot 生态对接"的诉求，可能值得官方关注。

---

## 5. Bug 与稳定性

按严重程度排列：

**高严重度（影响核心功能/服务稳定性）**

- **[#6919 v2.0.1 出现经常性的崩溃](https://github.com/agentscope-ai/QwenPaw/issues/6919)**（开放）
  pip 安装 + 虚拟环境启动 + Web 端使用的方式下频繁崩溃，堆栈指向 `console/channel.py:497` 的 `console process/reply failed`。这是今日最值得关注的稳定性问题，暂无对应 fix PR 标注。
- **[#6732 MCP工具规律性失效](https://github.com/agentscope-ai/QwenPaw/issues/6732)**（已关闭）
  问题已关闭，但作为高频复现的运行时故障值得记录。参考 PR #6779（scroll 生命周期重构）与 #6874（MCP 超时）有相关性。

**中严重度（影响特定场景/异常输入）**

- **[#6885 中文输入法 compositionEnd 导致消息队列不可用](https://github.com/agentscope-ai/QwenPaw/issues/6885)**（开放）
  v2.1.0b2 在 agent 运行期间使用中文输入法会崩溃，消息队列完全不可用。对中文用户群体影响面广。
- **[#6697 v2.1.0b1 desktop 注入 PYTHONHOME 导致子进程崩溃](https://github.com/agentscope-ai/QwenPaw/issues/6697)**（已关闭）
  每个 python 子进程启动即崩（`encodings ModuleNotFoundError`），Windows + Tauri desktop 环境。

**低严重度（前端/显示类）**

- **[#6828 空闲时 CPU 持续 20% 占用](https://github.com/agentscope-ai/QwenPaw/issues/6828)**（已关闭）
  原因定位为无限 CSS 动画（`ai-copilot-blink` 与 antd load-more spinner），已修复。
- **[#6871 历史消息时间戳偏移 +8 小时](https://github.com/agentscope-ai/QwenPaw/issues/6871)**（已关闭）
  视图切换后时间戳错误地加上 UTC+8 偏移。

**feature 类 bug**

- **[#6918 Agent 间消息每次生成一个新的 agent 会话](https://github.com/agentscope-ai/QwenPaw/issues/6918)**（开放）
  由用户的 agent 代笔写的 issue：inter-agent 消息触发"影子实例"并发，导致重复响应。多 Agent 场景下的关键路径 bug，需要架构层面修复。
- **[#6722 fork 子代理在 worktree 失败时仍报告完成](https://github.com/agentscope-ai/QwenPaw/issues/6722)**（已关闭）
  `fork=True` 的子代理显示正常结束，但实际提交缺失。

---

## 6. 功能请求与路线图信号

**可能纳入下一版本的功能（已有配套 PR 或相近实现）：**

- **LaTeX/公式渲染**——`#6893`、`#5453`、`#4756` 同日关闭，PR #6911 统一了代码块渲染体验（新增 LaTeX Preview/Source 标签），可视为该需求的直接回应。预计 v2.1.0 正式版将包含此能力
- **MCP 工具调用超时可配置**——PR #6874 为 MCP 工具调用增加默认 120 秒的每客户端超时，对应 Issue #6724。此特性将对 #6732 这类"MCP 假死"问题产生正面缓解
- **统一 Marketplace 页面**——PR #6880 将 apps、plugins、skills 整合到 `/market` 统一页面，目前处于 Under Review。若合入，插件生态的发现和安装体验将大幅简化

**仍处于讨论阶段的功能诉求（可能影响后续路线图）：**

- **[#6917 Agent 应能把任意报告/消息主动投递进 Inbox](https://github.com/agentscope-ai/QwenPaw/issues/6917)**（开放）
  用户希望 agent 将结构化报告投递到固定收件箱，形成"不滚动、有未读红点"的集中落点。这涉及 inbox 数据模型的泛化，属于产品概念层面的路线图信号。
- **[#6916 插件可静默创建 cron 任务并注入用户可见消息](https://github.com/agentscope-ai/QwenPaw/issues/6916)**（开放，Security）
  插件权限模型缺失的严重问题：从 marketplace 安装的插件可无授权地持久化注入消息并执行定时动作。安全优先级高，建议尽快补齐审批流程。
- **[#6882 CopilotKit 集成](https://github.com/agentscope-ai/QwenPaw/issues/6882)**（开放）
  用户寻求与 CopilotKit 生态集成的思路或示例，目前暂无官方响应。对于面向开发者的开源项目，这可能是一个值得投入的适配方向。

**已有 PR 在途的新特性：**

- **AnySearch 搜索引擎集成**（PR #6817，Under Review）：替换 Tavily 成为内置搜索能力，同时修复 MCP env-ref header 绑定问题
- **桌面窗口几何记忆**（PR #6877）：Tauri 桌面端记住窗口位置和大小
- **会话媒体全屏画廊**（PR #5490）：用 `Image.PreviewGroup` 取代单图预览，支持多图全屏切换
- **系统命令在斜杠补全中暴露**（PR #5869，Under Review）：TUI 和 Web Console 中统一 `/plan`、`/memory` 等命令的补全提示
- **Scroll 与 AgentScope 生命周期对齐**（PR #6779）：将 Scroll 统一为唯一上下文实现，按 Agent 基类生命周期整理 context、工具裁剪与 memory——这是架构层面较大的重构

---

## 7. 用户反馈摘要

-**"重启能恢复，但每天都得重启一次"**——来自 #6732（MCP 失效），用户对 MCP 工具的可靠性表达了明显不满。这类问题虽然不损坏数据，但对实时工作流的打断很严重，是用户流失的高风险点。
- **"公式显示成 `Var(X^)=h=1∑L...` 很尴尬"**——来自 #6893，用户用"尴尬"来形容当前渲染效果，并提到 Cherry Studio 具备此能力。对比竞品是用户期望管理的重要信号。
- **"QQ 一直不断提醒新信息，会触发限流"**——来自 #6897，QQ bot 场景下每一步工作流都推送到 QQ 过于"聒噪"，用户希望有工作流简报/聚合模式，这实际上也是 inbox 功能（#6917）的一种变体需求。
- **"我的 agent 替我写了这个 bug report"**——来自 #6918，用户自动用 agent 生成 issue 并附上中英文双语描述。这是社区开始用 CoPaw 自身能力来反馈 CoPaw 的案例，说明用户对项目有较高参与热情，同时双语 issue 也提高了维护者的阅读效率。
- **"建议建个微信群"**——来自 #6895，中文用户表达了更强的社群交流诉求（微信人群多），侧面说明现有渠道对国内用户还不够友好。

---

## 8. 待处理积压

**长期开放且值得关注的 PR：**

- **[PR #5869 feat(console, tui): expose system commands in slash autocomplete across all UIs](https://github.com/agentscope-ai/QwenPaw/pull/5869)**（7 月 8 日创建，Under Review，first-time-contributor）
  一个 5 周仍未合入的 first-time PR。功能本身不小，但长期搁置可能会打击新人贡献者的积极性。建议维护者明确给出 review 结论。
- **[PR #6302 feat: unify provider discovery, model metadata, routing, and agent controls](https://github.com/agentscope-ai/QwenPaw/pull/6302)**（7 月 21 日创建，开放）
  核心架构重构，试图统一 provider 发现与模型路由，牵涉面广，review 周期长可以理解，但建议给出阶段性计划。
- **[PR #6660 Update .dockerignore to include README.me](https://github.com/agentscope-ai/QwenPaw/pull/6660)**（8 月 3 日创建，first-time-contributor）
  修改意图不明确（README.me 疑似拼写错误），但已搁置 9 天无人回应。可快速关闭或合并，避免贡献者等待过长时间。

**长期未响应的 Issue：**

- **[#6882 怎么集成CopilotKit](https://github.com/agentscope-ai/QwenPaw/issues/6882)**（8 月 10 日创建，3 条评论，无官方答复）
- **[#6883 日记页面子文件夹笔记被错误分组到错误的日期下](https://github.com/agentscope-ai/QwenPaw/issues/6883)**（8 月 10 日创建，开放）
  中文用户提交，至今无维护者回应。这类功能性 bug 通常修复成本不高，建议尽快进入 triage。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-12

## 1. 今日速览

- 过去 24 小时共有 **50 条 Issue 更新**（新开/活跃 40，关闭 10）和 **50 条 PR 更新**（48 条待合并，仅 2 条合并/关闭），无新版本发布。
- 项目仍处于密集的 **RFC 与架构设计期**：评论数 Top 10 的 Issue 中有 9 个是 RFC/设计提案，核心议题集中在 OpenAI 协议兼容、安全策略、认证与会话架构。
- **安全加固是当前最清晰的主线**：HTTP egress 统一加固（[PR #9580](https://github.com/zeroclaw-labs/zeroclaw/pull/9580)）、WebAuthn 断言校验（[PR #9781](https://github.com/zeroclaw-labs/zeroclaw/pull/9781)）、HTTP 响应有界读取（[PR #9862](https://github.com/zeroclaw-labs/zeroclaw/pull/9862)）等高优先级修复 PR 均在途。
- **SOP 功能线进展集中**：headless SOP 驱动修复（[PR #9841](https://github.com/zeroclaw-labs/zeroclaw/pull/9841)）、SOP 面板只读状态视图（[PR #9694](https://github.com/zeroclaw-labs/zeroclaw/pull/9694)）、sops_dir 默认值修复（[PR #9885](https://github.com/zeroclaw-labs/zeroclaw/pull/9885)）同步更新。
- **活跃度评估**：社区参与度高、贡献者梯队稳定（distinguished/principal contributor 活跃），但 **48/50 的 PR 待合并率**提示评审合入是当前最大瓶颈，维护者决策队列（[Issue #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)）持续累积。

## 2. 版本发布

无。过去 24 小时没有新的 Release。

## 3. 项目进展

过去 24 小时有 **2 个 PR 合并或关闭**（本次展示的 Top 20 列表未包含具体条目，暂无法确认是哪些 PR）。但从 **10 个已关闭 Issue**与本轮 PR 更新可判断项目推进方向：

**已关闭的关键 Issue（对应成果落地）：**
- [Bug #9768](https://github.com/zeroclaw-labs/zeroclaw/issues/9768)：daemon reload 未绑定 SIGUSR1，且降级安全警告会引导用户发送杀死守护进程的信号 — 已关闭（带 follow-up），信号处理缺陷已修复。
- [Bug #9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035)：Docker Compose gateway 在发布端口后仍 loopback 绑定，容器外连接拒绝（S1）— 已关闭。
- [Task #9545](https://github.com/zeroclaw-labs/zeroclaw/issues/9545)：在必须 PR CI 中 gate rustdoc 警告 — 已关闭，工作区零 rustdoc 警告状态有了 CI 保障。
- [RFC #7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232)：结构化可观测性（Rich Events + OTel Trace 关联 + Bridge 重构）— 已关闭，设计讨论收敛。
- [RFI #2269](https://github.com/zeroclaw-labs/zeroclaw/issues/2269)：Token 消耗与成本管理 — RFI 关闭，社区信息收集完成，预计进入正式设计阶段。

**在途 PR 中推进最明显的功能线：**
- **SOP 控制平面**：[PR #9841](https://github.com/zeroclaw-labs/zeroclaw/pull/9841)（headless SOP 运行 + 修复 5 个缺陷，XL）、[PR #9694](https://github.com/zeroclaw-labs/zeroclaw/pull/9694)（SOP 面板状态可见性）、[PR #9885](https://github.com/zeroclaw-labs/zeroclaw/pull/9885)（sops_dir 默认值）— 朝 5/5 里程碑（[Tracker #8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288)）推进。
- **WhatsApp 渠道**：[PR #9385](https://github.com/zeroclaw-labs/zeroclaw/pull/9385)（Web 版 request_approval）、[PR #9612](https://github.com/zeroclaw-labs/zeroclaw/pull/9612)（审批 token 守卫）、[PR #9609](https://github.com/zeroclaw-labs/zeroclaw/pull/9609)（双模式聊天策略）三连修复。
- **安全加固**：[PR #9580](https://github.com/zeroclaw-labs/zeroclaw/pull/9580)（内置 HTTP egress 统一加固）、[PR #9862](https://github.com/zeroclaw-labs/zeroclaw/pull/9862)（流式有界读取）、[PR #9781](https://github.com/zeroclaw-labs/zeroclaw/pull/9781)（WebAuthn 完整校验）。
- **插件系统**：[PR #9126](https://github.com/zeroclaw-labs/zeroclaw/pull/9126)（插件 typed instance config 校验，XL）等待合入。

## 4. 社区热点

评论最活跃的 Issue 全部是 RFC/设计提案，说明社区当前焦点在架构方向选择：

1. [Issue #8303 — RFC: Goal mode v1](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)（19 评论）：跨多轮对话的持久化目标执行，社区在争论首版范围是否过大（restart handoff、Web、异步子任务是否应拆出）。
2. [Issue #8603 — RFC: Chat Completions profile](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)（18 评论）：开放 OpenAI Chat Completions 协议兼容层，诉求明确 — 让 Open WebUI、LobeChat、Continue.dev、Aider、LangChain、OpenAI SDK 等现成客户端零改造接入。
3. [Issue #7155 — RFC: 高危 shell 命令确认层级](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)（17 评论）：Claude Code 风格的 allow/ask/deny 命令策略，已迭代到 Rev 3，范围收窄为 shell 策略契约。
4. [Issue #7141 — RFC: 可插拔入站认证](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)（14 评论）：OIDC + canonical principals，身份与访问里程碑核心设计，已到 Rev 8。
5. [Issue #8692 — Tracker: 维护者决策队列](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)（13 评论）：社区自发建立 RFC/设计决策排队机制，侧面印证评审瓶颈。

**背后诉求**：①外部生态兼容（让主流 AI 客户端可直接接入）；②安全可控（高危操作需策略化管控）；③流程自救（RFC 流程改革 [Issue #9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496) 与决策队列均为此而生）。

## 5. Bug 与稳定性

**新报告（按严重度排列）：**

| 严重度 | Issue | 状态 | 说明 |
|---|---|---|---|
| 高（安全, p1） | [Bug #9883](https://github.com/zeroclaw-labs/zeroclaw/issues/9883) | 已接受，无 fix PR | 入站 WebP 转换在共享图像校验器之前**无界解码**，潜在 DoS/内存风险（从 #9819 拆出） |
| S2（p1） | [Bug #9872](https://github.com/zeroclaw-labs/zeroclaw/issues/9872) | 已接受，无 fix PR | bounded delegate 将文件系统解析到**委托者的工作区**而非被委托者自己的工作区，沙箱边界错误 |
| S1（p2） | [Bug #9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035) | ✅ 已关闭 | Docker Compose gateway 端口无法从容器外访问 |
| S2（p1） | [Bug #9768](https://github.com/zeroclaw-labs/zeroclaw/issues/9768) | ✅ 已关闭 | SIGUSR1 误导性文档/警告，已修复并带 follow-up |

**已有在途修复 PR（均未合入）：**
- [PR #9885](https://github.com/zeroclaw-labs/zeroclaw/pull/9885) — 修复 [#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779)：daemon 未遵守 sops_dir 文档默认值。
- [PR #9862](https://github.com/zeroclaw-labs/zeroclaw/pull/9862) — 修复 http_request 全量缓冲后截断问题，改为按配置限额流式读取，并阻止 fal.ai 客户端自动重定向。
- [PR #9900](https://github.com/zeroclaw-labs/zeroclaw/pull/9900) — openai-codex provider 流式解码失败后以非流式重试（服务端强制流式，必 400）。
- [PR #9781](https://github.com/zeroclaw-labs/zeroclaw/pull/9781) — WebAuthn 断言缺少 rpIdHash、37 字节头、User Present 校验。
- [PR #9612](https://github.com/zeroclaw-labs/zeroclaw/pull/9612) — WhatsApp Cloud 审批 token 在两条退出路径上残留，存在凭据孤儿化风险。
- [PR #9841](https://github.com/zeroclaw-labs/zeroclaw/pull/9841) — 关闭审查 #9494 时发现的 5 个 SOP 缺陷（含 4 个阻断项）。
- [PR #9580](https://github.com/zeroclaw-labs/zeroclaw/pull/9580) — 内置 HTTP egress 拒绝所有非全局 IP，安全边界统一收敛。

## 6. 功能请求与路线图信号

- **OpenAI 协议兼容层**（[RFC #8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)）：热度第二，若接受将是生态接入的跃升 — Open WebUI/LangChain/OpenAI SDK 等客户端零改造接入。→ v0.9/v1.0 强候选。
- **Goal mode 跨轮目标执行**（[RFC #8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)）：已迭代数周，社区共识是首版必须收窄范围。
- **高危命令策略 allow/ask/deny**（[RFC #7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)）：配合 shell 工具使用，安全路线图核心项。
- **LSP 支持**（[RFC #5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907)）：减少幻觉、提升本地模型代码质量，与 Claude Code/OpenCode 对齐；4 月提出，待作者推进。
- **Windows 原生 PowerShell**（[PR #9182](https://github.com/zeroclaw-labs/zeroclaw/pull/9182)）：已在途（XL，待合并），补全 Windows 开发者体验。
- **插件 Kanban 板**（[RFC #8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832)）：插件拥有的 agent 工作看板，属协作/可观测新能力。
- **可观测性生态**（[PR #8337](https://github.com/zeroclaw-labs/zeroclaw/pull/8337)）：Herdr agent 状态上报集成在途。
- **成本管理**（[RFI #2269](https://github.com/zeroclaw-labs/zeroclaw/issues/2269)）：RFI 关闭，token 消耗与成本管理预计进入正式设计。

## 7. 用户反馈摘要

- **成本是最大商业化痛点**（[#2269](https://github.com/zeroclaw-labs/zeroclaw/issues/2269)）：社区反馈"用单个高端模型跑真实 agent 工作负载对终端用户过于昂贵"，邮件/日程类场景尤其明显；RFI 已关闭，信息已收集完毕。
- **配置生效机制令人困惑**（[#7897](https://github.com/zeroclaw-labs/zeroclaw/issues/7897)）：保存配置≠生效，需 /admin/reload 重建运行时；用户要求安全策略/渠道配置免重启生效。
- **危险误导**（[#9768](https://github.com/zeroclaw-labs/zeroclaw/issues/9768)）：降级安全警告让用户发送 SIGUSR1，实际会杀死 daemon — 已修复，但对文档信任有损伤。
- **Docker 使用门槛**（[#9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035)）：按文档 docker compose up -d 后端口 connection refused，S1 直接阻断工作流 — 已关闭。
- **默认行为反直觉**（[#9609](https://github.com/zeroclaw-labs/zeroclaw/pull/9609)）：WhatsApp Web 商业模式下 dm_policy/group_policy 被读取但从不生效；[#9561](https://github.com/zeroclaw-labs/zeroclaw/pull/9561) 反馈 personality 渲染中的文件名标签只增加 token、无语义价值。
- **集成决策教训**（[#9644](https://github.com/zeroclaw-labs/zeroclaw/issues/9644)）：Lucid memory connector 上游仓库在合并 4 天后即休眠，社区质疑"未经验证的偏好"式集成决策，动议 v0.9.0 将其退役。

## 8. 待处理积压

**维护者决策瓶颈（最需关注）：**
- [Tracker #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)：维护者决策队列已积压 10+ 个待裁决 RFC，均为 needs-maintainer-review 状态（[#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)、[#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)、[#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)、[#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)、[#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)、[#8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832)、[#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142)、[#7897](https://github.com/zeroclaw-labs/zeroclaw/issues/7897)、[#9346](https://github.com/zeroclaw-labs/zeroclaw/issues/9346) 等）。
- [RFC #9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496)：社区已提议改革 RFC 流程（缩短 7 天讨论期、放宽一致同意、投票自动化）— 流程层自救信号。

**长期未响应的老 Issue：**
- [RFC #5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907)（4/19 提出，LSP 支持）— needs-author-action，搁置近 4 个月。
- [RFC #6653](https://github.com/zeroclaw-labs/zeroclaw/issues/6653)（5/14 提出，模拟安装的主机架构策略）— needs-author-action。

**PR 积压：**
- 当前 **48 个 PR 待合并**。高价值高风险项：[PR #9580](https://github.com/zeroclaw-labs/zeroclaw/pull/9580)（网络 egress 安全，p1）、[PR #9841](https://github.com/zeroclaw-labs/zeroclaw/pull/9841)（SOP 缺陷修复，XL）、[PR #9126](https://github.com/zeroclaw-labs/zeroclaw/pull/9126)（插件配置校验，XL）、[PR #9182](https://github.com/zeroclaw-labs/zeroclaw/pull/9182)（PowerShell 支持，XL）、[PR #9713](https://github.com/zeroclaw-labs/zeroclaw/pull/9713)（token 记账，XL）。
- [PR #9612](https://github.com/zeroclaw-labs/zeroclaw/pull/9612) 已被标记 **stale-candidate**，若作者不响应可能被自动关闭。
- 另有 10+ 个 PR 处于 needs-author-action（[#9385](https://github.com/zeroclaw-labs/zeroclaw/pull/9385)、[#9885](https://github.com/zeroclaw-labs/zeroclaw/pull/9885)、[#9561](https://github.com/zeroclaw-labs/zeroclaw/pull/9561)、[#9709](https://github.com/zeroclaw-labs/zeroclaw/pull/9709)、[#9707](https://github.com/zeroclaw-labs/zeroclaw/pull/9707)、[#9900](https://github.com/zeroclaw-labs/zeroclaw/pull/9900)、[#9609](https://github.com/zeroclaw-labs/zeroclaw/pull/9609) 等），需要作者侧回应审查意见，否则将进一步拉长合入周期。

---

**项目健康度小结**：社区活跃度高、安全与架构设计投入充分、贡献者梯队成熟；但 PR 合入率（4%）偏低、维护者裁决队列持续增长、两个新的 p1 安全 Bug（#9883/#9872）尚无修复 PR — 建议维护者优先处理决策队列与高优先级安全 PR，避免设计讨论挤压缺陷修复节奏。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*