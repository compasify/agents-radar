# OpenClaw 生态日报 2026-08-17

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-08-16 23:09 UTC

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

# OpenClaw 项目动态日报 — 2026-08-17

## 1. 今日速览

过去 24 小时项目保持极高的社区活跃度：500 条 Issue 更新（其中 93% 为新开/活跃）、500 条 PR 更新（其中 85% 待合并），并有 1 个新 Release 归档发布。当前积压的 P1 级可靠性问题高度集中在会话状态与消息传递链路（`message-loss`、`session-state`、事件循环阻塞），且有多个高讨论量 Issue 处于“修复后又复发”状态，说明核心稳定性仍是最突出的健康度短板。值得关注的是，大量修复 PR 由 `steipete`、`sloptop-the-terrible` 等核心维护者密集提交，CLI/UI 体验类修复已形成明显的批量合入趋势。

## 2. 版本发布

**pr-124528-profiles**（Release 归档，非代码版本）
- 内容：为 PR #124528 提供的 Gateway 性能剖析证据归档。包含在限定的三节点、十二并发轮次 Gateway 测试环境（rig）上采集的 before 与 exact-head 两阶段 CPU profiles，用于事件循环热点对比分析。
- 性质：该 Release 为性能分析数据归档，不涉及安装包/二进制变更，**无破坏性变更与迁移注意事项**。
- 意义：侧面反映维护方正在针对近期高频出现的“Gateway 事件循环阻塞”类问题（#112423、#115908 等）进行系统性的性能回归排查。

## 3. 项目进展

过去 24 小时合入/关闭的 74 个 PR 中，以下合并动作对项目有实质性推进：

- **技能调用范围扩展**（[PR #124784](https://github.com/openclaw/openclaw/pull/124784)）：Gateway、CLI、webhook 和本地 agent 轮次现在通过共享 skill renderer 展开 `$skill-name` 与符合规则的 `/skill-name args`，同时不运行频道命令分发器。这一产品决策统一了技能调用语义，但标记为 `🚨 compatibility`，引入前需注意行为变化。
- **安装策略警告确认机制**（[PR #116489](https://github.com/openclaw/openclaw/pull/116489) 已合并、[PR #120900](https://github.com/openclaw/openclaw/pull/120900) 已合并）：`security.installPolicy` 命令现可返回 `warn` 状态，授权操作者可在 Control UI/CLI 中审阅可疑插件安装并显式确认，安全边界得到增强。
- **Gateway 超时后派生命令进程清理**（[PR #124081](https://github.com/openclaw/openclaw/pull/124081) 已关闭）：解决 macOS 服务管理下，超时杀死的 shell 根进程遗留存活子进程的隐患，避免进程组误杀风险。
- **CLI 错误信息人文化**（[PR #124887](https://github.com/openclaw/openclaw/pull/124887) 已关闭）：不再向普通操作者输出内部 `{ cause }` 连锁错误，避免暴露 ClawHub API 路由等内部细节，改善运维体验。
- **UI 会话历史可见性修复**（[PR #124866](https://github.com/openclaw/openclaw/pull/124866) 已关闭）：长分页会话不再只显示折叠尾部，新增旧历史提示，解决“早期消息不可发现”问题。
- **代码模式计时器崩溃修复**（[PR #124879](https://github.com/openclaw/openclaw/pull/124879) 已关闭）：修复嵌套 action 后 Code Mode 运行因 guest `setTimeout` 不可用而停止的问题。

整体来看，当日合入集中在**命令行体验、UI 可用性、安全确认链路**，而事件循环、消息传递等 P1 核心稳定性修复仍多处于待审查状态。

## 4. 社区热点

- **[#121058：Silent reply failures 在 #116277 关闭后仍持续复发](https://github.com/openclaw/openclaw/issues/121058)**（97 条评论，已关闭）
  这是全仓库评论数最高的 Issue，监控 cron 在旧 issue 关闭后仍持续记录新发生事件。用户诉求非常直接：**“修复被宣布完成，但问题从未真正消失”**。这表明维护方在“关闭标准”与“真实用户环境验证”之间存在脱节，是社区信任度的最大风险点。

- **[#42475：Gateway 级 per-agent 成本预算](https://github.com/openclaw/openclaw/issues/42475)**（26 条评论，3 月 10 日创建至今未关闭）
  社区对**可配置每日/每月 token 成本上限**的需求持续高涨。当前仅支持 per-session 跟踪，运维方无法在网关层防止失控消费。已有相关讨论但无明确 fix PR，属于产品决策挂起状态。

- **[#48003：Steer mode 不向主会话注入消息](https://github.com/openclaw/openclaw/issues/48003)**（21 条评论，👍 4）
  高赞 issue，指向 `KeyedAsyncQueue` 提交（`9889c6da5`）引入的回归。steer 模式设计上应在工具边界注入消息，但实际排队到回合结束才生效，直接影响交互实时性。

- **[#87744：Codex-backed Telegram 回合超时](https://github.com/openclaw/openclaw/issues/87744)**（17 条评论，👍 3）
  多个 Telegram 会话在 2026.5.27 版本后出现“做了工作但永不到达 `turn/completed`”的现象，用户实际拿不到最终答案。`platinum hermit` 评级，需要 live-repro。

**热点共性**：评论最多的议题几乎全部集中在**“回复静默丢失/超时/不送达”**这一类消息传递可靠性问题上，且部分存在“修复后复发”现象。社区对消息面稳定性的敏感度极高。

## 5. Bug 与稳定性

### P1 级（按严重度排序）

| Issue | 问题描述 | 影响面 | Fix PR 状态 |
|---|---|---|---|
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | 会话 transcript 投影在持续写入下进入非收敛重建循环，占用 Node 主线程数十秒，阻塞所有通道传输 | 核心/全通道 | 无直接 fix PR；[#124891](https://github.com/openclaw/openclaw/pull/124891) 涉及控制面轮询 stall，间接相关 |
| [#112423](https://github.com/openclaw/openclaw/issues/112423) | 大型 SQLite transcript 清理时在主线程执行完整物化/压缩/持久化，导致事件循环停顿 | 核心/全通道 | 无直接 fix PR |
| [#121058](https://github.com/openclaw/openclaw/issues/121058) | 静默回复失败在 #116277 关闭后仍复发，无排队回复 payload | 消息传递 | 无 fix PR（issue 已关闭但用户报告未解决） |
| [#87744](https://github.com/openclaw/openclaw/issues/87744) | Codex-backed Telegram 回合反复超时，永不到达 `turn/completed` | Telegram/Codex | 无 |
| [#96834](https://github.com/openclaw/openclaw/issues/96834) | WhatsApp 1:1 图片消息在真正处理前楔住主 lane ~3 分钟 | WhatsApp/多模态 | 无 |
| [#50093](https://github.com/openclaw/openclaw/issues/50093) | WhatsApp 断线重连后丢失断线期间消息，无 backfill 机制 | WhatsApp | 无 |
| [#53408](https://github.com/openclaw/openclaw/issues/53408) | 长对话后 write/exec 工具参数静默丢失（arguments 为空对象） | 核心/工具调用 | 无 |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | 2026.3.2 使用 google-vertex/gemini-3.1-pro-preview 报 “Cannot convert undefined or null to object” | Auth/embedding | 无 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | hook/tool 子进程泄漏，zombie 累积导致运行时降级 | 稳定性 | 无 |
| [#115642](https://github.com/openclaw/openclaw/issues/115642) | 计费冷却窗口（~5h）长于实际故障，订阅制用户被误锁 | Auth/计费 | 无 |
| [#100941](https://github.com/openclaw/openclaw/issues/100941) | 并发工具扇出时 Gateway WS 连接 1006 断开，误报 Gateway crash | 工具并发 | 无 |
| [#105528](https://github.com/openclaw/openclaw/issues/105528) | Windows 上 exec/read 静默返回空输出（2026.6.x 回归） | Windows | 无 |
| [#117609](https://github.com/openclaw/openclaw/issues/117609) | 瞬态 LLM/socket 错误未在 embedded-assistant 阶段重试，长回合整体死亡 | Embedded | 无 |
| [#101445](https://github.com/openclaw/openclaw/issues/101445) | 嵌入式 Ollama 对特定 prompt 报 payloads=0/tools=0（incomplete_result） | Ollama | 无 |

### P2 级（部分有 PR 或已修复）

- **[#92433](https://github.com/openclaw/openclaw/issues/92433)（已关闭）**：subagent 完成通知被 steer 进 requester 回合但 requester 先结束时静默丢弃。该 issue 被标记为 `fix-shape-clear` 与 `queueable-fix`，可跟进 [PR #124784](https://github.com/openclaw/openclaw/pull/124784) 是否附带修复。
- **[#48709](https://github.com/openclaw/openclaw/issues/48709)**：Gemini 2.5 Pro 的 textSignature 膨胀 + think 标签 + 混合 text/tool 导致会话失败，影响 Gemini 重度用户。
- **[#62328](https://github.com/openclaw/openclaw/issues/62328)**：Node.js 内置 SQLite 缺少 FTS5 模块，内存搜索关键词回退失效。属于环境依赖问题。
- **[#45494](https://github.com/openclaw/openclaw/issues/45494)**：cron 任务在 LLM API 持续 500 时耗尽全部超时窗口而非快速失败。

**稳定性总体评估**：P1 级修复进度缓慢——绝大多数高严重度、高用户影响的问题（尤其消息丢失类）尚未有对应 fix PR 合入。事件循环阻塞类已有明确 root cause（同步路径占用主线程），但修复方案仍在设计中。项目在稳定性维度处于“已广泛感知、尚未系统解决”的阶段。

## 6. 功能请求与路线图信号

以下需求在过去的讨论中持续获得关注，且有 PR 或产品决策标记暗示可能进入下一版本：

- **Per-agent 成本预算**（[#42475](https://github.com/openclaw/openclaw/issues/42475)）：社区呼声高，但当前 `needs-product-decision` 挂起，短期内不明确。
- **分级 bootstrap 文件加载**（[#22438](https://github.com/openclaw/openclaw/issues/22438)）：按需加载而非全量注入，节省 token 消耗。与成本控制主题直接相关。
- **Agent 自触发上下文压缩（self-compact tool）**（[#6757](https://github.com/openclaw/openclaw/issues/6757)）：agent 自主规划压缩时机，已有 `no-new-fix-pr` 标记但 `source-repro` 已具备，方向被维护方认可。
- **Slack Modal 支持**（[#88154](https://github.com/openclaw/openclaw/issues/88154)）：结构化交互的工作流增强，属于生态扩展方向。
- **Webchat 自托管 STT/TTS**（[#45508](https://github.com/openclaw/openclaw/issues/45508)）：将 webchat 语音能力桥接到 gateway 而非浏览器 API，打通私有化语音链路。
- **消息分页能力**（[#71452](https://github.com/openclaw/openclaw/issues/71452)）：`list chat/list messages` 硬编码 25 条上限，阻碍消息检索场景。
- **可信执行提交哈希绑定**（[PR #124858](https://github.com/openclaw/openclaw/pull/124858)，待合并）：防止已批准的脚本在执行前被篡改，属路线图中的安全强化项。

**路线图信号**：安全边界增强（脚本字节锁定）、技能统一展开、UI 会话历史可发现性已被明确推进；成本控制类功能（per-agent 预算、分级 bootstrap）大概率是下一阶段重点，但当前主要卡在产品决策而非技术实现。

## 7. 用户反馈摘要

- **“修复后复发”打击用户信任**（[#121058](https://github.com/openclaw/openclaw/issues/121058)）：用户明确表示“#116277 被关闭了，但监控仍在记录新失败”。维护方关闭 issue 的标准与用户真实体验脱节，导致用户持续产生挫败感。
- **长会话后工具参数静默丢失**（[#53408](https://github.com/openclaw/openclaw/issues/53408)）：用户报告 15+ 轮后 `write`/`exec` 的参数变为空对象，属于严重影响生产可用性的“静默错误”，用户难以排查且无报错提示。
- **事件循环阻塞导致全渠道假死**（[#115908](https://github.com/openclaw/openclaw/issues/115908)、[#112423](https://github.com/openclaw/openclaw/issues/112423)）：用户观察到“tens of seconds”的整机停顿，所有通道同时无响应，这是最恶劣的使用体验之一。
- **平台差异化问题**：Windows 用户（[#105528](https://github.com/openclaw/openclaw/issues/105528)、[#74378](https://github.com/openclaw/openclaw/issues/74378)）持续报告 exec/read 空输出、node.exe 进程残留等平台回归；macOS 用户（[#47273](https://github.com/openclaw/openclaw/issues/47273)）报告内存检测被平台门控跳过。说明跨平台兼容性仍有欠账。
- **第三方模型兼容性摩擦**：Google Vertex（[#38327](https://github.com/openclaw/openclaw/issues/38327)）、Gemini（[#48709](https://github.com/openclaw/openclaw/issues/48709)）、Ollama（[#101445](https://github.com/openclaw/openclaw/issues/101445)）均有针对模型响应解析的 bug，用户对多模型支持的质量提出更高要求。
- **正向反馈**：PR #124866（UI 历史可见性）、#124879（Code Mode 计时器）等修复说明维护方对 UI 细节与体验反馈的响应速度在改善。

## 8. 待处理积压

以下为长期未解决且值得维护者优先关注的高价值项目：

- **[#42475：Per-agent 成本预算](https://github.com/openclaw/openclaw/issues/42475)**：创建于 2026-03-10，已积压 5 个月，26 条讨论，`needs-product-decision` 挂起。建议尽快给出产品决策。
- **[#22438：分级 bootstrap 文件加载](https://github.com/openclaw/openclaw/issues/22438)**：创建于 2026-02-21，积压近 6 个月，19 条讨论。属于 token 成本治理的关键能力，方向与 #42475 一致，可合并规划。
- **[#48003：Steer mode 不注入消息](https://github.com/openclaw/openclaw/issues/48003)**：创建于 2026-03-16，👍 4，root cause 已定位（`KeyedAsyncQueue` 提交），但无进行中 fix PR。交互实时性核心问题，优先级应上调。
- **[#50165：Subagent 显示完成但底层工作未完成](https://github.com/openclaw/openclaw/issues/50165)**：创建于 2026-03-19，任务状态失真会误导上层编排，属于架构级可靠性问题。
- **[#115421：Schema 降级恢复会清空状态 DB（cron 任务丢失）](https://github.com/openclaw/openclaw/issues/115421)**：数据丢失类问题，涉及 cron 作业持久化，危害大，`linked-pr-open` 说明有 PR 在跟进但未合入。
- **[PR #109493：Worker workspaces 在进程探测失败后无法恢复](https://github.com/openclaw/openclaw/pull/109493)**：已标记 `stale` 且 `needs proof`，P1 级云端 worker 可用性修复，若长期搁置将影响云部署用户。

---

**日报总结**：OpenClaw 目前处于高活跃、高讨论度的成长期，但 P1 级稳定性问题（消息丢失、事件循环阻塞）是核心健康度短板，且存在“修复宣布后复发”的信任风险。建议维护方将 P1 修复的关闭标准从“代码合入”提升为“多环境持续验证通过”，并优先推进事件循环同步路径改造与消息传递持久化语义定义。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告（2026-08-17）

## 1. 生态全景

当前生态正处于"规模扩张与可靠性补课并行"的阶段：以 OpenClaw 为首的项目单日产生 500+ Issue/PR 更新，但消息静默丢失、回合永不完成、事件循环阻塞等 P1 级问题横跨至少五个项目同日出现，说明"能跑 demo"与"可承载生产"之间存在明显鸿沟。Token 成本治理（per-agent 预算、整合触发失效、用量可观测）与安全硬化（SSRF、命令白名单绕过、网络出口管控）成为跨项目共识，且后者正从提示注入防护向基础设施面延伸。与此同时，NanoBot（499 条 PR 待合并）、CoPaw（合入数为 0）、LobsterAI（9 条 PR 被 stale 清理）暴露出维护者带宽已成为生态共同瓶颈——社区贡献意愿与代码合入效率严重错配。整体呈现"头部高歌猛进、腰部快速分化、尾部出现停滞"的三层格局。

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（93% 活跃） | 500（85% 待合并） | 1（性能剖析归档） | ★★★★☆ 体量断层第一，P1 稳定性债务重 |
| **NanoBot** | 15（11 活跃） | 500（499 待合并） | 无 | ★★★☆☆ 社区活跃，合并瓶颈最严重 |
| **Hermes Agent** | 50（42 活跃） | 50（44 待合并） | v0.20.2（汇总 397 PR） | ★★★★☆ 良好，Windows 更新链路待加固 |
| **PicoClaw** | 2（2 开放） | 5（4 待合并） | 无 | ★★☆☆☆ 低活跃，stale 标记增多 |
| **NanoClaw** | 1（误报已关） | 33（13 合入/关闭） | 无 | ★★★★☆ 核心迭代高效，社区 PR 周期偏长 |
| **IronClaw** | 1（新开） | 9（2 合入/关闭） | 无 | ★★★★☆ 稳健，Issue 当日即出修复 PR |
| **LobsterAI** | 10（7 stale） | 17（9 stale 关闭，0 合入） | 无 | ★☆☆☆☆ 维护缺位，安全修复被清理 |
| **Moltis** | 5（2 活跃） | 17（16 合入/关闭） | 无 | ★★★★★ 合并效率最高，当日修复编译回归 |
| **CoPaw** | 9（6 开放） | 9（0 合入） | 无 | ★★★☆☆ 贡献积极，审阅停滞 |
| **ZeroClaw** | 50（48 活跃） | 50（46 待合并） | 无 | ★★★★☆ 高活跃，RFC 驱动，治理导向 |
| **NullClaw / ZeptoClaw** | 0 | 0 | 无 | 休眠 |

## 3. OpenClaw 在生态中的定位

- **体量与社区规模断层领先**：单日 500 Issue + 500 PR 更新约为第二梯队（50）的 10 倍，74 个 PR 合入/关闭；核心维护者（steipete、sloptop-the-terrible）密集提交，形成批量合入趋势。最高讨论 Issue（#121058）达 97 条评论。
- **事实上的生态枢纽**：多个项目显式以 OpenClaw 为兼容目标——LobsterAI PR #2452 修复 OpenClaw 模型 ID 兼容；Moltis PR #1191/#1192 将模块路径指向 `openclaw` 组织；ZeroClaw 在架构讨论中与 OpenClaw 形成对照。其技能语法与 Gateway 架构正被周边项目跟踪。
- **技术路线差异**：Node.js/TypeScript + Gateway/CLI/Control UI 多入口架构，渠道覆盖最广（Telegram/WhatsApp/Discord/Slack/WebChat/Embedded）；正在通过共享 skill renderer 统一各入口的技能调用语义，是"产品化优先"路线。
- **相对短板**：核心消息链路积累大量 P1 债务（#115908/#112423 事件循环阻塞、#121058 静默失败复发），"修复宣布后复发"侵蚀社区信任；与 Hermes（桌面交互更深）、NanoClaw（多 Agent 会话语义更清晰）、ZeroClaw（RFC 驱动的协议治理更规范）相比，OpenClaw 的稳定性投入明显滞后于功能扩张速度。

## 4. 共同关注的技术方向

| 共同方向 | 涉及项目与具体诉求 |
|---|---|
| **消息投递与回合完成可靠性** | OpenClaw（#121058 静默回复失败复发、#87744 Telegram 回合永不完成）、NanoBot（#4864 `complete_goal` 无限循环）、Hermes（#70871 忙状态卡死、无 `message.complete`）、CoPaw（#7063 工具调用必现崩溃）、NanoClaw（#3254 context 行挤掉任务行） |
| **Token 成本治理与可观测性** | OpenClaw（#42475 per-agent 预算挂起 5 个月）、NanoBot（#5266 两小时百万 token、#5402 整合永不触发）、Hermes（#81481 双重计费、#87418 暴露 context 占用）、CoPaw（#7003 ViBo 记忆方案减 97.5% token）、NanoClaw（#3257 上下文扇出） |
| **安全边界渠道级硬化** | PicoClaw（#3322/#3323/#3324 三渠道 SSRF 修复）、NanoBot（#5305 `exec.allowPatterns` 绕过）、OpenClaw（#116489 安装策略警告确认）、LobsterAI（#1831-#1833 日志脱敏/IPC 越权/scheme 白名单，被 stale 清理）、Moltis（#1180 zip 路径穿越、#1179 node pairing 签名）、ZeroClaw（#9580 HTTP egress 加固） |
| **会话生命周期与状态一致性** | OpenClaw（session-state P1 积压）、NanoClaw（#3256 `detached_at` 取代物理删除、#3284 单内容门消除重复发送）、Hermes（#87949 压缩后分支上下文错位）、CoPaw（#7065 多轮后历史不可见）、ZeroClaw（#9487 runtime-owned sessions RFC） |
| **协议兼容与生态互操作** | ZeroClaw（#8603 Chat Completions profile，接入 Open WebUI/LobeChat/Continue.dev）、PicoClaw（#3302 MCP OAuth 2.1）、LobsterAI（#2452 DeepSeek V4 斜杠模型 ID）、OpenClaw（Vertex/Gemini/Ollama 解析兼容）、NanoBot（#2463 prompt 前缀与 OpenAI 语义冲突） |
| **多 Agent 编排工程化** | NanoClaw（多会话 agent groups、DM 回填、回显修剪）、ZeroClaw（#10025 ephemeral swarms + TUI）、Hermes（#28690 会话间协调）、OpenClaw（技能调用统一展开） |

## 5. 差异化定位分析

| 项目 | 技术栈 | 核心定位 | 目标用户 | 关键差异 |
|---|---|---|---|---|
| **OpenClaw** | Node.js/TS | 全渠道个人 AI 助手中枢 | 自托管开发者、重度用户 | 渠道覆盖最广、技能系统统一、社区规模断层第一 |
| **NanoBot** | 未披露 | 轻量 Agent 网关 | 成本敏感型开发者 | 聚焦 token 整合与 API 兼容，合并瓶颈严重 |
| **Hermes Agent** | Python | 桌面优先个人 Agent | 桌面用户、远程工作者 | Desktop/TUI 深度、审批安全边界、远程 gateway 能力补齐中 |
| **PicoClaw** | 未披露（sipeed 硬件背景） | MCP 客户端 + 轻量 IM 网关 | 嵌入式/轻量部署用户 | MCP 生态兼容 + 多 IM 渠道，社区贡献主动补安全 |
| **NanoClaw** | 未披露 | 多 Agent 会话编排框架 | Agent 群组构建者 | 上下文扇出、`detached_at` 分离语义、epic/story 驱动开发 |
| **IronClaw** | Rust | 自动化规则引擎 | 自动化运维团队 | 确定性行为可预期、Slack 原生集成、依赖链健康 |
| **LobsterAI** | Electron/TS | 桌面 IM 聚合 + Cowork | 中国用户、企业 | 网易生态、多 IM 实例、本地模型接入；当前维护缺位 |
| **Moltis** | Rust | 可嵌入 Agent 运行时 | 嵌入方、开发者 | 持久化连接器、zvec 向量内存、ACP 代理生态、合并效率最高 |
| **CoPaw** | Python | agent-as-code 框架 | Python 开发者 | agentscope 生态、DataPaw 桌面运行时、企业级权限诉求 |
| **ZeroClaw** | Rust | 协议友好通用 Agent 运行时 | 生态集成方 | RFC 驱动治理、WASM 插件安全模型、OpenAI 兼容为第一优先级 |

## 6. 社区热度与成熟度

**快速迭代期（新功能 + 架构重构并行）**：OpenClaw（74 PR 合入、技能语义统一）、NanoClaw（13 合入、五个方向系统性重构）、ZeroClaw（4 合入 + 三项架构 RFC 热议）、Hermes Agent（v0.20.2 汇总 397 PR，桌面/审批/会话三线并进）。

**质量巩固期（修复与维护主导）**：Moltis（16/17 合入率，当日修复主分支编译回归与 flaky test）、IronClaw（Issue → 修复 PR 当日闭环，依赖批量现代化）。这两个项目的共同特征是"合入效率高、响应快"，是当前生态中贡献者体验最好的项目。

**合并瓶颈期（社区活跃但代码停滞）**：NanoBot（499 pending，2 月遗留 PR 未处理未关闭）、CoPaw（9 个 PR 全部待审，含 8 个 first-time contributor 的修复）。两者社区讨论质量高，但维护者带宽已无法匹配贡献密度，贡献者流失风险正在累积。

**维护停滞期（自动化清理主导）**：LobsterAI（9 条 PR 被 stale 批量关闭且含高危安全修复，4 个月无人工响应）、PicoClaw（Issue/PR 普遍被 stale 标记，SSRF 修复等待 8 天未审）。

**休眠期**：NullClaw、ZeptoClaw 无任何活动。

## 7. 值得关注的趋势信号

1. **消息可靠性是 Agent 生产化的第一道门槛**：五个项目同日出现"回合永不完成/静默丢失/忙状态卡死"同类问题，且 OpenClaw 出现"修复后复发"。对开发者的参考价值：框架选型时优先考察是否有明确的投递确认、超时与重试语义，上线前做故障注入而非仅功能 demo。

2. **Token 成本可观测性从优化项升级为安全护栏**：NanoBot 用户两小时被动消耗百万 token、Hermes 双重计费、OpenClaw per-agent 预算挂起 5 个月——自主 Agent 长时间运行使成本失控成为常态风险。per-agent 预算、usage 日志、context 占用暴露应作为基本能力纳入选型清单。

3. **安全加固进入基础设施面**：SSRF 逐渠道修复（PicoClaw）、命令白名单绕过（NanoBot）、IPC 越权（LobsterAI）、zip 路径穿越（Moltis）、HTTP egress 管控（ZeroClaw）——提示注入已不是唯一攻击面，模型输出→工具调用→网络出口的完整链路都需要防护。

4. **协议互操作成为生态位入场券**：ZeroClaw 主动实现 Chat Completions 兼容以接入 Open WebUI/LobeChat 生态，PicoClaw 社区持续要求 MCP OAuth 2.1，OpenClaw 的技能语法被周边跟踪。新框架若不做 OpenAI/MCP 兼容，将被主流工具链排除在外。

5. **多 Agent 编排从"多 prompt"走向分布式系统语义**：NanoClaw 的 `detached_at`、上下文扇出、回显修剪，ZeroClaw 的 ephemeral swarm，本质上是将消息投递、生命周期、身份绑定等分布式系统问题引入 Agent 框架——这是多 Agent 走向真实业务负载的必经阶段。

6. **桌面端成为第二增长曲线**：Hermes Desktop 远程 gateway 能力补齐、CoPaw DataPaw 运行时、LobsterAI Cowork——纯聊天网关之外，桌面应用正在承载审批、Kanban、文件操作等重交互场景。

7. **维护者带宽是生态的隐形瓶颈，选型需看合并速度而非 star 数**：NanoBot 499 PR 积压、CoPaw 首贡献者 PR 零合入、LobsterAI 安全修复被 stale 清理——高讨论度不等于高活力。当前合并效率排序为 Moltis > IronClaw > NanoClaw > ZeroClaw > Hermes > OpenClaw > PicoClaw > CoPaw > NanoBot > LobsterAI，贡献者应优先向合入效率高的项目提交，技术决策者应对"合并积压型"项目的社区承诺持谨慎预期。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-17

数据来源：github.com/HKUDS/nanobot


## 1. 今日速览

过去 24 小时 NanoBot 项目整体活跃度 **中高**。Issues 侧有 15 条更新，其中新开/活跃 11 条、关闭 4 条，token 消耗追踪（#5266）、提示前缀架构（#2463）和 token 整合触发失效（#5402）构成讨论焦点。PR 侧积压严重：24 小时内 500 条 PR 更新中 **499 条仍待合并**，仅有 1 条关闭且属「曾被误合并后恢复」的例外（#4329），说明合并瓶颈依然显著。安全方面，一个 `exec.allowPatterns` 白名单绕过漏洞（#5305）已在约一周内被确认并关闭，响应速度值得肯定。整体判断：**项目社区活跃、反馈密集，但维护者 PR 处理效率是当前最大短板**。


## 2. 版本发布

过去 24 小时内无新版本发布。


## 3. 项目进展

今日实际上 **没有产生真正的 PR 合并**，唯一状态变化的 PR 是：

- [#4329 [CLOSED] feat(cli): add native TypeScript terminal UI](https://github.com/HKUDS/nanobot/pull/4329) — 该 PR 曾因 head 短暂出现在 `main` 上而被**错误标记为 merged**，随后 `main` 被立即恢复。其替代 PR [#5406](https://github.com/HKUDS/nanobot/pull/5406)（同为 TypeScript 终端 UI，含完整提交历史与跨终端测试修复）已于 2026-08-16 重新提交并处于开放状态。

这说明近期并无新功能通过合并进入主干，项目前进动能主要来自 Issues 侧的缺陷定位与方案讨论。不过，部分高质量 PR（如 #5406、#5358）已进入活跃迭代阶段，一旦维护者开始合并，落地速度会较快。


## 4. 社区热点

| 排名 | 条目 | 评论数 | 核心议题 |
|------|------|--------|----------|
| 1 | [#2463 [OPEN] Architectural issue: 不保留先前发送给模型的精确 prompt 前缀](https://github.com/HKUDS/nanobot/issues/2463) | 15 | 对话历史持久化形式与实际发送给模型的 prompt 前缀不一致，与 OpenAI 的协议语义存在根本冲突 |
| 2 | [#5266 [OPEN] 关于 token 消耗的日志（消耗量过大）](https://github.com/HKUDS/nanobot/issues/5266) | 14 | 用户反馈短短 2 小时内消耗约百万 token 且无明显用户活动，需要细粒度 token 调用日志定位原因 |
| 3 | [#2185 [CLOSED] 回归：0.1.4 → 0.1.4post5 破坏 gemini-3-flash-preview](https://github.com/HKUDS/nanobot/issues/2185) | 9 | 升级后 Gemini 模型不可用（已闭环） |

**分析**：#2463 与 #5266 是当前社区最关心的两个方向——**协议正确性/可审计性** 与 **token 成本可视化**。#5266 尤其反映真实用户的成本焦虑：后台静默消耗百万 token 意味着可能在为空转的循环、重复的工具调用或失控的自动任务付费，这类问题若不解决会直接动摇用户信任。


## 5. Bug 与稳定性

按严重程度排列：

**高 — 安全漏洞（已修复）**
- [#5305 [CLOSED] `exec.allowPatterns` 白名单绕过可执行链式 shell 命令](https://github.com/HKUDS/nanobot/issues/5305) — 攻击者可通过 OpenAI 兼容 API 在允许的指令后拼接额外 shell 片段，突破命令白名单。已关闭，说明已有修复方案。这是近期最严重的安全问题，建议在下一版本发布说明中重点披露。

**中高 — 核心流程故障**
- [#4864 [OPEN] 无限循环：<tool_call> <function=complete_goal>](https://github.com/HKUDS/nanobot/issues/4864) — `complete_goal` 因网关将 `recap` 参数解析为裸字符串（而非 JSON 对象）而持续报错，陷入无限循环。为近期工具参数序列化变更引入的回归，**暂无 fix PR**。
- [#5377 [OPEN] Consolidation 截断归档输入但推进了完整消息批次](https://github.com/HKUDS/nanobot/issues/5377) — `Consolidator.archive()` 截断了超出预算的消息，但调用方仍将 `last_consolidated` 推进到完整批次，导致被截断的消息丢失，**暂无 fix PR**。
- [#5402 [OPEN] Token 整合永不触发 — tiktoken 估计持续低估实际 API token 数](https://github.com/HKUDS/nanobot/issues/5402) — 触发整合的判据失真，导致上下文膨胀，**暂无 fix PR**。

**中 — 稳定性/回归（已修复）**
- [#5373 [CLOSED] Cron 调度器因单次持久化失败而永久死亡](https://github.com/HKUDS/nanobot/issues/5373) — `_arm_timer()` 位于 `try/finally` 之外，任一保存失败（磁盘满、权限变更）即导致定时器不再触发。
- [#2185 [CLOSED] 升级 0.1.4 → 0.1.4post5 破坏 gemini-3-flash-preview](https://github.com/HKUDS/nanobot/issues/2185) — 已解决。

**小结**：#5402 与 #5377 同日活跃，两者都指向 **token 整合（consolidation）机制的可靠性问题**，且 #5402 解释了为何部分用户会遭遇 #5266 中的巨额消耗——估算失准导致整合永远不触发，上下文无限增长。


## 6. 功能请求与路线图信号

| Issue/PR | 功能 | 被纳入下版本的可能性 |
|----------|------|----------------------|
| [#5251 [OPEN] WebUI 支持 MCP Apps host](https://github.com/HKUDS/nanobot/issues/5251) | 在 WebUI 中渲染 MCP 服务器附加的交互式 UI 应用（`io.modelcontextprotocol/ui`） | **中** — 属生态前瞻性增强，实现成本较高，但方向与 MCP 战略一致 |
| [#5289 [OPEN] Telegram 支持贴纸发送与 agent 主动消息反应](https://github.com/HKUDS/nanobot/issues/5289) | Telegram 渠道补全贴纸能力，agent 可主动对消息添加 reaction | **中高** — 渠道能力补全，社区呼声明确，实现边界清晰 |
| [#5298 [OPEN] 为大型工具集做 MCP schema 预算（可见性控制）](https://github.com/HKUDS/nanobot/issues/5298) | 对模型可见的 MCP 工具 schema 做预算限制，控制上下文成本 | **中高** — 与 #5266/#5402 的成本治理主线高度协同，若能联动解决会很有价值 |
| [#5404 [OPEN] skills 增加 disable-model-invocation 选项](https://github.com/HKUDS/nanobot/issues/5404) | 让 skill 仅限用户手动调用，模型无法自动触发 | **高** — 轻量配置项，社区（如 cursor、claude code 生态）已有成熟实践 |
| [#4467 [OPEN] Dream 应更新已有 workspace skills 而非每次创建重复项](https://github.com/HKUDS/nanobot/issues/4467) | 自我改进型 skill 的增量更新机制 | **中** — 涉及 Dream 模块核心逻辑，需要设计去重与合并策略 |

**路线图信号**：8 月中旬的 Issue 集中指向 **成本治理**（#5266/#5402/#5298）与 **渠道体验补全**（#5289/#5275）两大主线。若维护者有意在下一版本打出「成本可观测性」卖点，#5402+#5298+#5266 的组合值得优先处理。


## 7. 用户反馈摘要

- **成本焦虑（最强烈）**：[#5266](https://github.com/HKUDS/nanobot/issues/5266) 用户报告「2 小时消耗百万 token 而无明显活动」。深层诉求不是单纯的日志功能，而是**可观测性与异常检测**——用户需要知道每一笔 token 花在了哪里、是否为异常调用。此问题与 #5402（整合不触发）互为因果，建议作为 P1 处理。

- **架构正确性质疑**：[#2463](https://github.com/HKUDS/nanobot/issues/2463) 指出「持久化的对话历史 ≠ 实际发送给模型的 prompt 前缀」，用户认为这与 OpenAI 协议语义存在根本冲突。这属于**设计层面的根本性分歧**，即使当前未影响功能，也可能在后续功能（如微调、精确续接）中放大，需要维护者正面回应设计取向。

- **安全敏感度高**：[#5305](https://github.com/HKUDS/nanobot/issues/5305) 的白名单绕过问题在 7 天内获得确认与关闭，用户对安全类问题响应速度表示关注——建议在 release notes 中明确披露，增强社区信任。

- **功能使用摩擦**：[#4467](https://github.com/HKUDS/nanobot/issues/4467) 用户在 Dream 每次运行时得到新的重复 skill，打乱了自行维护的 `skills/` 工作区，反映**自我改进功能在真实工作流中缺少「增量」而非「复制」的语义**。


## 8. 待处理积压

**PR 合并积压（严重）**：当前 499 个 PR 待合并，其中大量 PR 自 2026-02 起便处于开放状态且标记 `[conflict]`（冲突未解决）。以下为长期未合并的重要 PR，建议维护者分批处理：

- [#1306 [OPEN] Discord 语音/音频复用支持与 TTS 回复](https://github.com/HKUDS/nanobot/pull/1306) — 2026-02-28 创建，含 `speak` 工具、音频收发与测试，功能完整但停留近 6 个月
- [#1205 [OPEN] 稳定 KV cache 复用与批量 prompt 滚动](https://github.com/HKUDS/nanobot/pull/1205) — 带实验对比数据，与成本治理直接相关
- [#1195 [OPEN] Telegram forum threads 支持](https://github.com/HKUDS/nanobot/pull/1195) — 渠道能力补全，与 #5275/#5289 同属渠道体验主线
- [#1149 [OPEN] PromptGuard 提示注入检测](https://github.com/HKUDS/nanobot/pull/1149) — 安全模块，与 #5305 漏洞形成呼应
- [#1128 [OPEN] 163.com IMAP ID 命令兼容修复](https://github.com/HKUDS/nanobot/pull/1128) — 明确的兼容性 bug 修复

**长期未响应 Issue**：
- [#4864 [OPEN] complete_goal 无限循环（6 条评论，👍 1）](https://github.com/HKUDS/nanobot/issues/4864) — 6 月 9 日创建，已 1 个多月无 fix PR 关联，影响 Agent 自动目标完成场景

**特别提醒**：2 月创建的大量 PR（#1037、#1034、#1032、#1026、#1025、#1024、#1015 等）显示了当时社区的密集贡献意愿，至今未合并、未关闭也未回复。长期静默可能会导致贡献者流失，建议维护者至少在对应 PR 中标注「已收到、计划排期」或「暂不采纳」。

---

**项目健康度总评**：社区活跃度 **B+**（讨论质量高、安全响应快），代码合入效率 **C-**（499 个待合并 PR + 大量 2 月遗留冲突），稳定性 **B-**（token 整合链路存在 2 个未修复 bug，且有安全漏洞刚修补）。当前最大风险不是需求不足，而是 **合并积压导致的社区贡献意愿下降** 与 **token 成本失控对用户信任的侵蚀**，建议下个版本优先处理 #5402、#5377 与 #5266 三者联动问题，并系统性清理 2 月遗留 PR。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-17

**数据周期**: 2026-08-16 至 2026-08-17 | 数据源: NousResearch/hermes-agent GitHub

---

## 1. 今日速览

过去 24 小时项目保持高活跃度：**50 条 Issue 更新**（新开/活跃 42，关闭 8）与 **50 条 PR 更新**（待合并 44，合并/关闭 6）齐头并进，同时发布 **v0.20.2 补丁版本**。新版本一次性汇总了自 v0.20.1 以来约 397 个合并 PR，为下游消费者提供稳定基线。值得注意的是，今日集中涌现多例 **P0/P1 级缺陷**（背景审查上下文丢失 #87368、CLI 审批面板不渲染 #87183、Windows 更新删除桌面应用 #86443 等），但社区响应迅速，已有约 20 个修复 PR 处于开放状态。整体项目健康度**良好偏活跃**，稳定性风险主要集中在 Windows 平台更新链路与 session 状态管理两个领域。

---

## 2. 版本发布

### v2026.8.16 / Hermes Agent v0.20.2（Patch Release）

- **发布日期**: 2026 年 8 月 16 日
- **Release 链接**: [Hermes Agent v0.20.2](https://github.com/NousResearch/hermes-agent/releases)
- **性质**: 补丁版本（Patch release）
- **核心内容**: 该 tag 将自 v0.20.1 以来约 **397 个合并 PR** 汇总为一个稳定版本，供 Docker 镜像、托管部署及新安装等下游消费者使用。
- **破坏性变更**: 未披露（patch 版本，预期无破坏性变更）。
- **迁移注意事项**: 常规升级路径即可；建议下游消费者关注 release notes 中随附的依赖变更说明。由于版本跨度较大（~397 PR），升级后建议运行 `hermes doctor` 做一次环境健康检查。

---

## 3. 项目进展

### 今日合并/关闭的 PR（2 个，另有 4 个未在热榜展示）

| PR | 标题 | 状态 | 意义 |
|---|---|---|---|
| [#87310](https://github.com/NousResearch/hermes-agent/pull/87310) | fix(agent): let slow local reasoning models finish long responses | 已关闭 | 修复本地慢速推理模型在 180 秒"推理下限"后被强制断开的问题，同时保留托管模型的 watchdog 保护 |
| [#87066](https://github.com/NousResearch/hermes-agent/pull/87066) | fix(tui): restore Alt+Enter for newlines | 已关闭 | 修复 TUI 输入处理更新后丢失的 Alt+Enter 换行快捷键，改善日常交互体验 |

### 今日新提交的重要 PR（反映开发方向）

- **桌面端体验持续优化**：[#87997](https://github.com/NousResearch/hermes-agent/pull/87997) 修复远程/Cloud 连接切换后 profile rail 消失或渲染错误的问题；[#87993](https://github.com/NousResearch/hermes-agent/pull/87993) 将多窗口的会话/置顶列表按连接隔离，避免不同 gateway 数据混淆。
- **审批与安全边界**：[#87996](https://github.com/NousResearch/hermes-agent/pull/87996) 停止在 `hermes chat -q` 非交互会话中伪造人工审批通道——此前对受保护文件的写入会因"审批超时"静默失败，该 PR 改为直接返回明确错误；[#87973](https://github.com/NousResearch/hermes-agent/issues/87973) 则发现危险命令检测器对引号内文本的误报问题。
- **Kanban 数据保护**：[#87999](https://github.com/NousResearch/hermes-agent/pull/879999) 修复 triage card 指定时静默覆盖用户已写标题/正文的问题，且变更记录仅存字段名不存值，导致数据不可恢复。
- **网关与用量可观测性**：[#87418](https://github.com/NousResearch/hermes-agent/pull/87418) 在 turn usage 中暴露 context fill 与 window 数据，解决工具密集型会话累计 token 数虚高、无法反映真实上下文占用的问题。
- **流式传输韧性**：[#81526](https://github.com/NousResearch/hermes-agent/pull/81526) 针对 DeepSeek V4 Flash 等模型无限输出 `reasoning_content` 但无可见输出的场景，在原有 stale detector 基础上增加"仅推理无输出"的击杀逻辑。

**整体判断**: 项目正在从"功能广度"转向"细节打磨与可靠性加固"。今日 PR 中修复类占比高，且集中在会话状态一致性、审批流程、桌面端多连接隔离等用户体验关键路径。

---

## 4. 社区热点

### 讨论热度榜（按评论数排序）

1. **[#66616](https://github.com/NousResearch/hermes-agent/issues/66616) — Skills index 陈旧或降级（44 条评论）**
   - 自动新鲜度探测失败：索引已 29.8 小时未更新（限制 26 小时）。该 Issue 持续近一个月仍无关闭，评论热度高说明社区对文档站可用性敏感。用户依赖 `/docs/skills` 查询技能，索引过期直接影响开发体验。
   - **诉求**: 修复 `.github/workflows/skills-index.yml` 与 `deploy-site.yml` 的联动，或降低刷新间隔。

2. **[#59877](https://github.com/NousResearch/hermes-agent/issues/59877) — Termux 上 Python 版本不兼容（8 条评论）**
   - `hermes-agent` 要求 `>=3.11,<3.14`，但 Termux 最新为 3.14.6，官方一键安装脚本失败。该 Issue 自 7 月初以来持续有用户 +1，是移动端/终端用户的核心阻塞点。
   - **诉求**: 尽快放宽 Python 版本上限，或提供 Termux 特定安装路径。

3. **[#85695](https://github.com/NousResearch/hermes-agent/issues/85695) — TERMINAL_CWD 弃用警告误报（8 条评论）**
   - 用户仅在 `.env` 中看到注释掉的 `# TERMINAL_CWD=.`，但每次启动 gateway 都收到弃用警告。属于"狼来了"式假阳性，长期会削弱用户对真实弃用警告的信任。
   - **诉求**: 提升环境变量扫描逻辑，区分真实设置与注释行。

4. **[#78661](https://github.com/NousResearch/hermes-agent/issues/78661) — Desktop 设置向导应支持连接远程 gateway（6 条评论，已关闭）**
   - 该功能请求今日被关闭，推测已通过其他 PR 或版本实现，可关注下一版本的 Desktop 首次运行流程。

### 社区情绪观察

今日新增的 **P0 重复 Issue #87368**（背景审查丢弃 gateway 临时会话上下文）在 1 条评论内即被打上 duplicate 标签，说明维护者对同类问题有较强的上下文记忆。另一方面，**#81952**（配置损坏静默切换到付费模型）虽评论仅 4 条，但涉及**真实金钱支出且无用户同意**，属于高敏感度问题，后续发酵潜力大。

---

## 5. Bug 与稳定性

### P0 — 需立即响应

- **[#87368](https://github.com/NousResearch/hermes-agent/issues/87368) — 背景审查丢弃 gateway 临时会话上下文，破坏 prompt-cache 前缀一致性**（8/16 新开，标记 duplicate）
  后台内存/技能审查 fork 未继承父进程的 `ephemeral_system_prompt`，在 Gateway 会话中该 prompt 包含钉住的平台/会话上下文（如飞书来源与用户 ID）。这导致审查请求的 system-prompt 前缀与正常请求不同，**prompt-cache 命中率下降**，隐蔽地增加成本。
  **Fix PR**: 暂无。

### P1 — 高优先级

- **[#86443](https://github.com/NousResearch/hermes-agent/issues/86443) — `hermes update` 删除 Desktop 应用后报成功**（Windows）
  重建失败时 `clean` 步骤先删除了 `Hermes.exe`，但更新命令仍以 exit 0 结束，导致用户机器上完全没有桌面应用。
  **Fix PR**: 暂无，需修复更新事务的原子性。
- **[#87183](https://github.com/NousResearch/hermes-agent/issues/87183) — CLI 审批面板永不渲染**（8/15 新开）
  `relay_runtime` 导入 `gateway.run` 时，模块顶层 `setenv(HERMES_EXEC_ASK=1)` 劫持审批路径，导致 prompt_toolkit 面板无监听器，危险命令永久挂起。与 #83626 / #63183 同源 env 泄漏。
  **Fix PR**: 暂无。
- **[#70871](https://github.com/NousResearch/hermes-agent/issues/70871) — TUI/Desktop 流式传输中忙状态卡死，context-usage 栏停滞**
  当后端未发出 `message.complete`（上下文压缩中止、上游断连等），UI 永久显示忙状态。
  **Fix PR**: 暂无，应与 #81526（推理-only 流击杀）配合解决。

### P2 — 应尽快跟进

- **[#81952](https://github.com/NousResearch/hermes-agent/issues/81952) — 损坏 profile 配置静默回退到付费 OpenRouter 模型**（真实金钱风险）
  非交互 `hermes --profile X chat -Q` 在 config.yaml 解析失败后不报错，继续以默认 `z-ai/glm-5.2`（openrouter）运行并自动读取 `OPENROUTER_API_KEY`，造成用户不知情的付费调用。
  **Fix PR**: 暂无。
- **[#87949](https://github.com/NousResearch/hermes-agent/issues/87949) — `/branch` 对压缩长会话分支时上下文不完整/错位**（中文报告）
  父会话 614 条消息分支后仅 280 条，且内容从早期中段开始而非分支点；另一案例 1221 条→853 条。压缩（compaction）后分支的复制逻辑存在严重缺陷。
  **Fix PR**: 暂无。
- **[#87876](https://github.com/NousResearch/hermes-agent/issues/87876) — Windows 更新频繁失败/部分更新阻塞运行时修复**（8/16 新开）
  问题包括 Git trampoline 损坏、venv 中 python.exe 缺失、自身文件锁导致 update 无法完成。
  **Fix PR**: 暂无。
- **[#82960](https://github.com/NousResearch/hermes-agent/issues/82960) — Linux 上 `hermes desktop` 因 electron-winstaller 崩溃**（ENOENT: vendor/7z-x64.exe）
  该包在 Linux 上错误尝试复制 Windows-only 二进制。PR [#76616](https://github.com/NousResearch/hermes-agent/pull/76616)（Desktop 安全重启）仍在开放中，但与此问题不直接相关。
  **Fix PR**: 暂无。
- **[#85680](https://github.com/NousResearch/hermes-agent/issues/85680) — `hermes chat -q` 会话永不 finalize**（`ended_at` 为 NULL）
  由于 `sessions prune` 只清理 `ended_at IS NOT NULL` 的行，单次查询会话持续累积，形成无界 session 泄漏。
  **Fix PR**: 暂无。

### 已有关联 Fix PR 的 Bug

- **[#81481](https://github.com/NousResearch/hermes-agent/issues/81481) — reasoning/reasoning_content 历史轮次双重计费**：PR [#75884](https://github.com/NousResearch/hermes-agent/pull/75884) 修复了 signed-envelope 幻影权重，但残余 ~2.5 倍估算膨胀仍在。**昨日修复后有待验证**。
- **[#66366](https://github.com/NousResearch/hermes-agent/issues/66366) — archive_and_compact 重复标记尾部**：有 PR [#86599](https://github.com/NousResearch/hermes-agent/pull/86599)（drain stale read-only pool）间接相关。

---

## 6. 功能请求与路线图信号

### 高潜力被纳入下一版本的功能

- **[#78661](https://github.com/NousResearch/hermes-agent/issues/78661) — Desktop 向导支持连接远程 gateway（已关闭）**
  该 feature 今日关闭，很可能已在 v0.20.2 或即将发布的版本中实现。与此相关的 [#71689](https://github.com/NousResearch/hermes-agent/issues/71689)（SSH 连接选项）也已关闭，表明 **Desktop 远程连接能力正在补齐**。

- **[#67144](https://github.com/NousResearch/hermes-agent/issues/67144) — Desktop 功能对齐 Web Dashboard（phased admin + plugins + kanban）**
  值得注意：今日新增 PR [#87999](https://github.com/NousResearch/hermes-agent/pull/87999)（kanban 数据保护）与 [#87997](https://github.com/NousResearch/hermes-agent/pull/87997)（profile rail 保活）都指向 Desktop 正在逐步吸收 Dashboard 能力。该 feature 的 phasing 可能在后续版本落地。

- **[#86560](https://github.com/NousResearch/hermes-agent/pull/86560) — 新增 zai-coding-plan provider profile**
  为 z.ai 订阅用户提供开箱即用的 agent-optimal 默认配置，避免手动修改 `GLM_BASE_URL`。属于"降低新用户上手成本"的方向。

### 长期路线图信号（暂无明确 PR，但社区持续关注）

- **[#84340](https://github.com/NousResearch/hermes-agent/issues/84340) — 记忆文件放置契约（MEMORY.md / USER.md / AGENTS.md / SOUL.md）**：请求明确这 4 个扁平文件的放置规则与可选 lint，当前缺乏正式约定。
- **[#78418](https://github.com/NousResearch/hermes-agent/issues/78418) — 会话级文件协调**：多会话并发写同一文件时，需要 journal + approval + reconcile 机制。这是多客户端（CLI/TUI/Discord/桌面）并发场景下的自然演进方向。
- **[#53839](https://github.com/NousResearch/hermes-agent/issues/53839) — Desktop/Web Dashboard 可持续重连的运行会话**：仍为开放 feature，标记 P3，但配合今日桌面端多项修复，可能进入下一阶段规划。

---

## 7. 用户反馈摘要

| 用户声音 | 来源 | 诉求提炼 |
|---|---|---|
| "非交互会话写入受保护文件时，'审批超时'错误信息让人困惑——它不是超时，根本没有审批渠道。" | [#87996](https://github.com/NousResearch/hermes-agent/pull/87996) | 错误信息语义需区分"无审批渠道"与"审批超时" |
| "Kanban 的 specify 操作把我写的内容冲掉了，而且 `changed_fields` 里只记字段名不记值，无法找回。" | [#87999](https://github.com/NousResearch/hermes-agent/pull/87999) | 操作可逆性/变更历史是 Kanban 用户的基本预期 |
| "`hermes doctor` 在 state.db 探测处无限挂起——怎么才能让 docker 退避策略真正生效？" | [#76003](https://github.com/NousResearch/hermes-agent/pull/76003) | 诊断工具本身需要有超时保护 |
| "Termux 用户因 Python 3.14.6 被拒之门外，安装脚本直接失败——这是我体验 Hermes 的最大障碍。" | [#59877](https://github.com/NousResearch/hermes-agent/issues/59877) | 移动端/终端环境兼容性影响新用户获取 |
| "每次启动都看到 TERMINAL_CWD 弃用警告，但我从未设置过它——现在我对所有弃用警告都不信任了。" | [#85695](https://github.com/NousResearch/hermes-agent/issues/85695) | 警告完整性直接关系用户对系统的信任 |
| "父会话 614 条消息，分支后只剩 280 条，且从错误位置开始——压缩后的长会话分支完全不可用。"（中文） | [#87949](https://github.com/NousResearch/hermes-agent/issues/87949) | 压缩与分支的组合是高阶用户的常见操作，不能割裂设计 |
| "配置损坏时它不去报错，而是静默地用一个付费模型开始跑——直到账单来了我才知道。" | [#81952](https://github.com/NousResearch/hermes-agent/issues/81952) | 非交互模式的 fail-safe 策略应以"安全失败"而非"静默继续"为原则 |

---

## 8. 待处理积压

> 以下 Issue/PR 持续时间较长或评论较多但仍未解决，建议维护者优先关注。

| 编号 | 标题 | 创建时间 | 持续天数 | 评论数 | 备注 |
|---|---|---|---|---|---|
| [#24740](https://github.com/NousResearch/hermes-agent/issues/24740) | Honcho 会话标题覆盖 sessionStrategy 设置 | 2026-05-13 | 96 天 | 2 | P3 插件集成稳定性问题，长期未响应 |
| [#28690](https://github.com/NousResearch/hermes-agent/issues/28690) | 活动会话感知与会话间协调 | 2026-05-19 | 90 天 | 1 | 涉及多会话并发的架构级 feature，需要 design doc |
| [#53839](https://github.com/NousResearch/hermes-agent/issues/53839) | Desktop/Web Dashboard 持久可重连运行 | 2026-06-27 | 51 天 | 4（👍 2） | 高点赞 feature，但涉及面广，持续搁置 |
| [#59877](https://github.com/NousResearch/hermes-agent/issues/59877) | Termux 上 Python 3.14.6 不兼容 | 2026-07-06 | 42 天 | 8 | 阻塞移动端用户，社区持续追问 |
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Skills index 陈旧/降级 | 2026-07-18 | 30 天 | **44** | 今日评论最多，逼近一个月未关闭 |
| [#76003](https://github.com/NousResearch/hermes-agent/pull/76003) | `hermes doctor` SQLite 探测增加可取消超时（PR） | 2026-08-01 | 16 天 | - | 修复方案已提交但尚未合并，对应 Issue #72441 用户仍在等待 |
| [#76616](https://github.com/NousResearch/hermes-agent/pull/76616) | Desktop 安全重启当前后端（PR） | 2026-08-02 | 15 天 | - | 涉及 SSH 所有权验证等安全边界，需仔细审查 |
| [#84586](https://github.com/NousResearch/hermes-agent/pull/84586) | Hindsight local_embedded 模式配置 schema（PR） | 2026-08-12 | 5 天 | - | 小型修复，等待 review |

---

**日报总结语**: Hermes Agent 正在经历从"高速迭代"到"稳定性加固"的转型期。v0.20.2 的发布为社区提供了可靠基线，但 Windows 更新链路、会话状态生命周期（压缩/分支/单次查询泄漏）以及审批/安全边界是当前三大薄弱环节。社区讨论热度与提交密度显示项目**生命力强劲**，若能加速消化今日新增的 P0/P1 级问题，项目健康度将持续提升。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-08-17

## 1. 今日速览

过去 24 小时，PicoClaw 的 Issue 更新 2 条（均为开启状态，无关闭），PR 更新 5 条（待合并 4 条，关闭 1 条），无新版本发布。整体活跃度处于中低水平：提交内容以安全加固为主线（3 个 SSRF 修复 PR），功能请求则集中在 OAuth 2.1 支持与 Telegram 原生表格渲染。值得注意的是，多数 PR/Issue 已被标记 `stale`，反映维护者响应存在一定延迟；但社区 PR 贡献意愿仍强，项目安全边界正在被社区主动补齐，健康度总体稳健。

## 2. 版本发布

过去 24 小时无新版本发布或预发布，最新 Releases 为空。

## 3. 项目进展

过去 24 小时最值得关注的变化：

- **PR #3193（新增 Simplex 频道类型）已关闭**  
  [sipeed/picoclaw PR #3193](https://github.com/sipeed/picoclaw/pull/3193)  
  该 PR 新增 Simplex 频道类型的支持，属于非破坏性的新功能，但最终被关闭（未进入合并队列）。从数据来看该 PR 已存在近 2 个月，可能是被维护者判定为暂不采纳或存在设计问题，建议关注后续是否会重新开放。  

- **4 个待合并 PR 构成明确的功能与安全推进方向**：  
  - **#3299 新增 Exa 原生 Web 搜索提供者**，扩展 `tools.web` 能力，支持 `d/w/m/y` 时间范围过滤；  
  - **#3322 / #3323 / #3324 三个安全加固 PR** 分别针对多通道（QQ/Telegram/Discord/LINE/Slack）、企业微信、微信的媒体下载链路修复 SSRF 风险。  
  如果后续合并，项目将在「搜索生态扩展」和「安全基线」两个维度上显著进步。

## 4. 社区热点

- **Issue #3302 —— 为 MCP 服务器支持 OAuth 2.1（评论数：3，为今日最高）**  
  [sipeed/picoclaw Issue #3302](https://github.com/sipeed/picoclaw/issues/3302)  
  该需求引用了已有的类似请求 #2546，说明并非新诉求，而是长期未解决的痛点。背后核心诉求：随着 MCP 生态中越来越多的服务器采用 OAuth 2.1 标准认证，PicoClaw 缺乏相应支持会导致用户无法连接这些服务，极大限制 MCP 工具的可选范围。虽是 `Nice-to-Have` 标记，但用户期待度高。

- **Issue #3325 —— 用富消息渲染 Telegram 表格（评论数：1）**  
  [sipeed/picoclaw Issue #3325](https://github.com/sipeed/picoclaw/issues/3325)  
  用户指出当前 PicoClaw 通过 `sendMessage` 的 HTML/MarkdownV2 路径发送 Telegram 消息，Markdown 表格被降级为纯文本或等宽代码块，可读性差。Telegram Bot API 10.1 已引入原生表格 UI，用户希望 PicoClaw 跟进，提升消息展示质量。

> 注：PR 评论数据未提供（undefined），因此社区热点的讨论热度判断以 Issue 数据为主。

## 5. Bug 与稳定性

今日无新报告的崩溃或功能缺陷类 Issue。但需特别关注以下安全风险及其修复进展：

| 严重程度 | 问题描述 | 涉及范围 | 修复 PR |
|---|---|---|---|
| **高（SSRF）** | 入站媒体下载未统一阻止内网/回环地址，恶意构造的媒体 URL 可能访问到 loopback、link-local 或 RFC1918 内网资源 | QQ、Telegram、Discord、LINE、Slack 渠道 | [#3322](https://github.com/sipeed/picoclaw/pull/3322)（Open） |
| **高（SSRF）** | 企业微信 mediaClient 使用裸 `http.Client`，下载媒体时重定向可触达内网主机 | WeCom 渠道 | [#3323](https://github.com/sipeed/picoclaw/pull/3323)（Open） |
| **高（SSRF）** | 微信 CDN/远程媒体下载基于普通 iLink HttpClient 重定向可触达内网主机 | Weixin 渠道 | [#3324](https://github.com/sipeed/picoclaw/pull/3324)（Open） |

这三个 PR 同出一源（作者 SashaMIT），互相补充，为同一 SSRF 漏洞在多个渠道的系统性修复。目前均处于待合并状态且已标记 `stale`，建议维护者优先审阅，尽快合入。

## 6. 功能请求与路线图信号

- **OAuth 2.1 for MCP 服务器（#3302）**  
  [Issue #3302](https://github.com/sipeed/picoclaw/issues/3302)  
  明确为 `Nice-to-Have / Enhancement`，未勾选 Core Feature，也未与 Roadmap 对齐。但综合 #2546 和本次重复提出，可判断该需求在 MCP 用户群体中的呼声持续走高。随着 MCP 标准认证的升级，PicoClaw 若能在下一版本支持 OAuth 2.1，将有效巩固其作为 MCP 客户端的生态兼容性。

- **Telegram 原生表格渲染（#3325）**  
  [Issue #3325](https://github.com/sipeed/picoclaw/issues/3325)  
  属于 UX 增强，依赖 Telegram Bot API 10.1 新特性。实现成本相对可控，且能显著改善 Telegram 渠道的阅读体验，有潜力进入近期迭代。

- **Exa 搜索提供者（#3299）**  
  [PR #3299](https://github.com/sipeed/picoclaw/pull/3299)  
  作为社区完整实现的原生 web 搜索后端，虽然代码尚未合并，但表明项目在“多提供者扩展”方向上具备良好的社区共建生态。若收入主干，用户将获得一个新的高可用搜索选项。

## 7. 用户反馈摘要

- **MCP 服务对接受阻**（#3302）：用户明确表达“希望支持 OAuth 2.1，与 #2546 相同”，暗示在真实使用中遇到了因认证协议不兼容而无法接入 MCP 服务器的场景。用户主动标注 `Nice-to-Have`，说明他们理解这是增强功能，但有实际需求支撑。
- **Telegram 消息呈现质量有待提升**（#3325）：用户认为表格被降级为纯文本/代码块是体验短板，并主动提供了 Telegram Bot API 10.1 的背景信息，表明用户对产品细节敏感，期望 PicoClaw 跟上 Bot API 的发展步伐。
- 两条 Issue 均已被 `stale` 标记，说明用户反馈在公开队列中停留时间较长但未获得维护者回应，这可能是社区满意度的一个潜在风险点。

## 8. 待处理积压

维护者可能需要优先关注的长期未响应项：

| 类型 | 编号 | 标题 | 已开放时长 | 说明 |
|---|---|---|---|---|
| PR | [#3322](https://github.com/sipeed/picoclaw/pull/3322) | fix(channels): block private targets on inbound media downloads | 8 天（stale） | SSRF 高危修复，涉及 5 个渠道，建议尽快合并 |
| PR | [#3323](https://github.com/sipeed/picoclaw/pull/3323) | fix(wecom): use CreateSafeHTTPClient for media downloads | 8 天（stale） | 企业微信 SSRF 修复，与 #3322 配合 |
| PR | [#3324](https://github.com/sipeed/picoclaw/pull/3324) | fix(weixin): use CreateSafeHTTPClient for media downloads | 8 天（stale） | 微信 SSRF 修复，与 #3322 配合 |
| PR | [#3299](https://github.com/sipeed/picoclaw/pull/3299) | Add native Exa web search provider | 22 天 | 新功能，非 stale，但已有较长时间未合入 |
| Issue | [#3302](https://github.com/sipeed/picoclaw/issues/3302) | Feature: Support OAuth 2.1 for MCP servers | 18 天（stale） | 评论最多，重复需求，建议维护者明确规划 |
| Issue | [#3325](https://github.com/sipeed/picoclaw/issues/3325) | Feature: Render Telegram tables with rich messages | 8 天（stale） | 明确的 UX 改进场景，建议纳入后续迭代 |

整体来看，PicoClaw 项目具备良好的社区贡献基础，但 PR 合并速度和 Issue 回应速度有待提升。若能优先处理 SSRF 安全修复系列，将有效降低潜在运营风险；而对 OAuth 2.1 和 Telegram 富消息渲染请求做出及时规划，则有助于增强社区信任度与项目竞争力。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-08-17

## 1. 今日速览

过去 24 小时项目活跃度极高：共发生 **33 条 PR 更新**，其中 13 条合入/关闭、20 条待合并；Issue 侧仅新增 1 条误报（已关闭）。核心团队成员 **gavrielc** 密集提交了约 12 个 PR，围绕会话生命周期、投递正确性、通道能力与权限策略展开系统性重构；同时社区贡献者也提交了 Telegram、Discord、配置管理、文档记忆等多个修复/功能 PR。无新版本发布。整体判断：项目处于核心架构快速迭代期，健康度良好，但社区 PR 合并周期偏长需警惕。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日合入/关闭的 13 条 PR 中，以核心团队 gavrielc 的系列工作为主，可归纳为五个方向：

- **会话生命周期与投递正确性**
  - [PR #3256](https://github.com/qwibitai/nanoclaw/pull/3256)：新增 `messaging_groups.detached_at` 列（migration 022）与访问器，投递拒绝向已分离会话发送。
  - [PR #3254](https://github.com/qwibitai/nanoclaw/pull/3254)：修复 context 行挤掉真正任务行的问题。
  - [PR #3255](https://github.com/qwibitai/nanoclaw/pull/3255)：修复多实例地址下投递目标解析到任意兄弟实例的问题。
  - [PR #3257](https://github.com/qwibitai/nanoclaw/pull/3257)：为多会话 agent groups 增加上下文扇出、DM 回填、回显修剪与 `ncl sessions history`。
  - [PR #3284](https://github.com/qwibitai/nanoclaw/pull/3284)：将 mid-turn `<message>` 流式投递收敛为唯一内容门，DB-backed 回显抑制，消除重复发送。
- **通道与适配器能力**
  - [PR #3262](https://github.com/qwibitai/nanoclaw/pull/3262)：Chat SDK 桥接 DM 表面——app-context 捕获、DM-thread 归一化、dm-opened 钩子。
  - [PR #3261](https://github.com/qwibitai/nanoclaw/pull/3261)：可选适配器能力——setTyping 状态、setThreadTitle、setSuggestedPrompts 及注册表透传。
  - [PR #3263](https://github.com/qwibitai/nanoclaw/pull/3263)：boot 后动态热启动已注册的 channel adapter。
- **权限与审批流**
  - [PR #3260](https://github.com/qwibitai/nanoclaw/pull/3260)：新增第四种未知发送者策略 `decline_notify`——礼貌拒绝 + 单行 owner FYI。
  - [PR #3266](https://github.com/qwibitai/nanoclaw/pull/3266)：通道注册卡片构建前提供模块级拦截缝。
- **开发者与扩展点**
  - [PR #3264](https://github.com/qwibitai/nanoclaw/pull/3264)：每批未投递消息上注册 delivery preview hook。
  - [PR #3265](https://github.com/qwibitai/nanoclaw/pull/3265)：`createAgent` 支持 `suppressCreatedNotify`。
- **工具链与修复**
  - [PR #3259](https://github.com/qwibitai/nanoclaw/pull/3259)：skill-apply 标题序号剥离、headless 浏览器 URL 浮出、inherit-script 提取。
  - [PR #3283](https://github.com/qwibitai/nanoclaw/pull/3283)（社区）：Chat SDK 链接在显示文本缩短/改标时保留原始 URL。
  - [PR #3278](https://github.com/qwibitai/nanoclaw/pull/3278)（社区）：`save_document` MCP 工具，实现文档记忆史诗 Story 1.1。
  - [PR #1251](https://github.com/qwibitai/nanoclaw/pull/1251)（社区）：OpenMail 邮件通道技能，经约 5 个月后于今日关闭。

整体来看，项目在会话/投递核心路径上完成了一轮“正确性加固”，同时为通道层和权限流增加多个扩展点，为后续多会话编排、文档记忆等更高层能力打基础。

## 4. 社区热点

今日评论最多的 PR 中，核心团队的系列 PR 占据绝对热度（如 [PR #3257](https://github.com/qwibitai/nanoclaw/pull/3257)、[PR #3254](https://github.com/qwibitai/nanoclaw/pull/3254)、[PR #3284](https://github.com/qwibitai/nanoclaw/pull/3284)），这反映项目当前焦点是**多会话 agent 系统的正确性**——context 与 task 的调度、投递目标解析、重复消息抑制。这类问题直接决定 agent 群组在真实并发场景下的可靠性，社区关注度高。

社区贡献者侧的讨论热点集中在外围痛点与平台适配：

- [PR #1251](https://github.com/qwibitai/nanoclaw/pull/1251)（OpenMail email 通道）：从 3 月发起至今关闭，社区对“给 agent 加邮件能力”有明确需求。
- [PR #3282](https://github.com/qwibitai/nanoclaw/pull/3282)（Telegram 配对码空格）：配对环节的“复制粘贴失败”是高频易踩点。
- [PR #3283](https://github.com/qwibitai/nanoclaw/pull/3283)（保留聊天链接）：平台缩短显示文本后，原始链接不应丢失。
- [PR #2752](https://github.com/qwibitai/nanoclaw/pull/2752)（Discord 附件）：文件消息对 agent 不透明是实际使用中的明显障碍。

Issue 侧仅 [Issue #3271](https://github.com/qwibitai/nanoclaw/issues/3271) 一条误报（已关闭），无真实用户问题讨论。

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | 问题描述 | 状态 |
|---|---|---|
| 高 | 入站批选择中 context（trigger=0）行可挤掉到期任务行，导致“会话被唤醒但 agent 收不到工作”（[PR #3254](https://github.com/qwibitai/nanoclaw/pull/3254)） | 已有修复 PR |
| 高 | 多 bot 身份同房间时，投递可能解析到任意兄弟实例而非发送者自身（[PR #3255](https://github.com/qwibitai/nanoclaw/pull/3255)） | 已有修复 PR |
| 中 | Discord 入站附件（粘贴文本/图片）只暴露 url，agent 拿不到字节/路径（[PR #2752](https://github.com/qwibitai/nanoclaw/pull/2752)） | Fix PR 开放中（2 个月） |
| 中 | Telegram 配对码带空格直接粘贴被拒（[PR #3282](https://github.com/qwibitai/nanoclaw/pull/3282)） | Fix PR 开放中 |
| 中 | `ncl groups config update --model ""` 存空字符串而非 NULL，配置被当值传给运行时（[PR #3280](https://github.com/qwibitai/nanoclaw/pull/3280)） | Fix PR 开放中 |
| 中 | agent 作用域 `ncl tasks` 对 pre-2.1.54 旧会话不可见，对应 [Issue #3233](https://github.com/qwibitai/nanoclaw/issues/3233)（[PR #3281](https://github.com/qwibitai/nanoclaw/pull/3281)） | Fix PR 开放中 |
| 低 | skill-apply 步骤标题序号来自 SKILL.md 原文，跨步骤/多技能时显示错误（[PR #3259](https://github.com/qwibitai/nanoclaw/pull/3259)） | 已修复 |
| 低 | 平台显示文本缩短/改标时 chat 链接丢失（[PR #3283](https://github.com/qwibitai/nanoclaw/pull/3283)） | 已修复 |

另 [PR #3284](https://github.com/qwibitai/nanoclaw/pull/3284) 通过将 mid-turn 流式投递收敛为唯一内容门，消除了“result 门与流式门双通道发送”可能带来的重复/乱序隐患，属架构级稳定性提升。

## 6. 功能请求与路线图信号

项目采用显式的 epic/story 管理（如 `spec-document-memory`、`architecture-nanoclaw-v2-2026-08-16`、编号 A1-A8/C4），从今日 PR 看，以下能力正被积极构建，大概率进入下一版本：

- **跨会话上下文模块**（[PR #3257](https://github.com/qwibitai/nanoclaw/pull/3257)）：多会话 agent 组的上下文共享、DM 回填与回显修剪。
- **会话分离/重加入语义**（[PR #3256](https://github.com/qwibitai/nanoclaw/pull/3256)）：`detached_at` 取代物理删除。
- **权限策略扩展**（[PR #3260](https://github.com/qwibitai/nanoclaw/pull/3260)）：`decline_notify`。
- **通道能力矩阵**（[PR #3261](https://github.com/qwibitai/nanoclaw/pull/3261)）：setTyping 状态、线程标题、建议提示。
- **可插拔扩展点**：通道注册拦截（[PR #3266](https://github.com/qwibitai/nanoclaw/pull/3266)）、delivery preview hook（[PR #3264](https://github.com/qwibitai/nanoclaw/pull/3264)）、热启动适配器（[PR #3263](https://github.com/qwibitai/nanoclaw/pull/3263)）。
- **文档记忆史诗**：[PR #3278](https://github.com/qwibitai/nanoclaw/pull/3278) 实现 Story 1.1（save_document），Word/PDF 持久化到 agent memory；预计后续 story 会跟进。
- **邮件通道**：[PR #1251](https://github.com/qwibitai/nanoclaw/pull/1251)（OpenMail /add-openmail 技能）今日关闭，若已合入则邮件成为官方技能之一。

用户侧的新需求信号主要来自 bug 修复 PR 所暴露的场景（Discord 附件、Telegram 配对、配置清空、多 bot 投递），而非独立的 feature request；说明当前阶段“把基础做扎实”仍是主线。

## 7. 用户反馈摘要

由于今日无实质性 Issue 讨论（唯一一条为误报，见 [Issue #3271](https://github.com/qwibitai/nanoclaw/issues/3271)），以下反馈提炼自 PR 摘要中所描述的用户场景：

- “会话醒了但 agent 没反应”——context 拥塞导致任务丢失（[PR #3254](https://github.com/qwibitai/nanoclaw/pull/3254)），对可靠性影响直接。
- “agent 只看到 `[file: message.txt]`，没有字节也没有路径”——Discord 附件对 agent 不透明（[PR #2752](https://github.com/qwibitai/nanoclaw/pull/2752)）。
- “把展示的配对码连空格一起粘贴就被拒”——Telegram 配置流程不够宽容（[PR #3282](https://github.com/qwibitai/nanoclaw/pull/3282)）。
- “想清空配置项却变成了空字符串传给运行时”——CLI 配置语义不清（[PR #3280](https://github.com/qwibitai/nanoclaw/pull/3280)）。
- “升级后旧会话在 ncl tasks 里消失”——版本兼容性问题（[Issue #3233](https://github.com/qwibitai/nanoclaw/issues/3233)）。
- “平台显示文本变短了，原始链接没了”——链接保真需求（[PR #3283](https://github.com/qwibitai/nanoclaw/pull/3283)）。
- “多 bot 在同一个房间，消息投递到了别的实例”——身份解析需求（[PR #3255](https://github.com/qwibitai/nanoclaw/pull/3255)）。

总体来看，用户反馈集中在**生产可用性**（投递、附件、配置）与**易用性**（配对、链接）两个层面，暂无对 API 稳定性的抱怨。

## 8. 待处理积压

- [PR #2752](https://github.com/qwibitai/nanoclaw/pull/2752)（Discord url-only 附件，2026-06-12 创建）：已开放约 2 个月仍未合入，建议维护者优先 review；该问题直接影响 Discord 用户使用体验。
- 今日 20 条待合并 PR 中，本列表可见 8 条：核心团队的 [PR #3254](https://github.com/qwibitai/nanoclaw/pull/3254)、[PR #3255](https://github.com/qwibitai/nanoclaw/pull/3255)、[PR #3256](https://github.com/qwibitai/nanoclaw/pull/3256)、[PR #3257](https://github.com/qwibitai/nanoclaw/pull/3257)，社区侧的 [PR #3280](https://github.com/qwibitai/nanoclaw/pull/3280)、[PR #3281](https://github.com/qwibitai/nanoclaw/pull/3281)、[PR #3282](https://github.com/qwibitai/nanoclaw/pull/3282)、[PR #2752](https://github.com/qwibitai/nanoclaw/pull/2752)。建议尽快完成 review 与 merge，避免社区侧 PR 等待周期过长（参考 [PR #1251](https://github.com/qwibitai/nanoclaw/pull/1251) 从 3 月到 8 月才关闭）。
- [Issue #3233](https://github.com/qwibitai/nanoclaw/issues/3233)（agent-scoped tasks 看不到旧会话）：已有对应 fix PR [PR #3281](https://github.com/qwibitai/nanoclaw/pull/3281)，建议在下一版本 release notes 中明确记录该兼容性修复。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-17

## 1. 今日速览

过去 24 小时 IronClaw 项目保持中等偏上的活跃度：新增 1 条 Issue（#7681，Slack 未链接用户通知的隐私与体验问题），该 Issue 在当日即获得对应修复 PR（#7682）提交，响应速度值得肯定。PR 侧同时有 9 条更新，其中 2 条已关闭/合并（#7683 基础设施清理、#7632 依赖升级），另有 7 条处于待合并状态，多数为 dependabot 驱动的常规依赖更新。值得关注的是 #7651 功能型 PR（确定性无结果抑制）仍在审查中，反映了项目在自动化行为可预期性上的持续投入。今日无新版本发布，整体项目健康度良好，维护节奏稳定。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合入/关闭的 2 个 PR 均为非功能型变更，但体现了项目在基础维护和技术债清理上的持续推进：

- **[PR #7683: chore: remove retired IronLoop network settings](https://github.com/nearai/ironclaw/pull/7683)**（已关闭，XS，核心维护者 hanakannzashi）
  移除了旧版 IronLoop 仓库配置中已废弃的 `network_access` 字段，同时保留现有的 Implement、Tester、自动 Review 与自动 Resolve 行为。属于配置清理类变更，降低了后续维护的认知负担。

- **[PR #7632: chore(deps): bump the everything-else group with 4 updates](https://github.com/nearai/ironclaw/pull/7632)**（已关闭，M，dependabot）
  完成 base64、toml、rstest、jsonschema 四个 Rust 依赖的批次升级，维持依赖链健康。

此外，功能层面最重要的进展当属 **#7682**（针对 Slack 隐私问题的修复 PR）已提交，虽尚未合并，但标志着今日唯一的 Issue 已进入修复通道：

- **[PR #7682: fix(slack): deliver the unlinked-user connect nudge privately, with a one-click connect link](https://github.com/nearai/ironclaw/pull/7682)**（待合并，L 规模，risk: low）
  核心变更：将共享频道中未链接用户的连接提示改为私密发送，并引入携带上下文的一次性连接链接，消除手动多步骤往返。直接解决 #7681 报告的两个痛点（隐私泄露 + 流程断裂）。

## 4. 社区热点

今日社区唯一的 Issue 即成为关注焦点：

- **[Issue #7681: Slack: unlinked-user connect message is public and requires a manual round trip](https://github.com/nearai/ironclaw/pull/7682)**（OPEN，作者 sergeiest，创建于 2026-08-16）
  该 Issue 虽暂无评论（👍 0），但迅速获得了同作者（sergeiest）的修复 PR #7682 响应，形成"报告即修复"的高效闭环。核心诉求分两层：
  1. **隐私缺陷**：在共享频道中，未链接 Slack 账号的用户 @机器人 时，系统回复的"请到 Ironclaw Web 应用连接账号"通知对所有频道成员可见，可能暴露用户尚未完成绑定的状态。
  2. **流程断裂**：用户收到提示后需要手动跳到 Web 应用完成连接，再回到 Slack 重新发送消息，且连接过程中不携带任何原始上下文——用户需要自行记忆"刚才想问什么"。

  该 Issue 同时被标记了 `[epic]`，暗示其影响面可能超出 Slack 单渠道，或将在后续延伸至其他聊天平台（如 Discord、Teams）的同类场景。三个 label（`enhancement`、`scope: channel`、`UX / Onboarding`）也确认了其产品改进属性而非紧急故障。

## 5. Bug 与稳定性

今日无崩溃/回归类严重 Bug 报告，未出现 P0/P1 级稳定性问题。以下为需关注的体验缺陷：

| 严重程度 | 描述 | 状态 |
|---|---|---|
| 中（隐私/UX） | **Slack 共享频道中未链接用户的连接提示公开可见**（#7681），同时连接引导流程需要手动多步骤往返，无上下文透传 | 已有修复 PR #7682 待合并 |

此外，**[PR #7651: feat(automations): add deterministic no-result suppression](https://github.com/nearai/ironclaw/pull/7651)**（XL，risk: low）在功能层面引入了"确定性无结果抑制"机制：要求 `trigger_create` 必须提供 `result_delivery`，由模型根据用户措辞推导意图，明确表达"仅在匹配/变更/有结果时通知"则启用抑制，中性措辞则确定性回退到 `deliver`。该变更消除了自动化规则在"无结果时是否通知"上的不确定性——可视为对既有行为不可预期问题的系统性修复。该 PR 已开放 3 天（自 2026-08-14），仍在审查中。

## 6. 功能请求与路线图信号

- **Slack 连接体验改进（#7681 + #7682）**：虽然 #7681 以 Bug 形式报告，但其本质是 Onboarding 体验的功能改进请求。PR #7682 的"私密投递 + 一键连接链接 + 上下文保留"方案若合入，将显著降低 Slack 用户接入门槛。由于 Issue 标记了 `[epic]`，预计后续会看到其余渠道的同类改造，建议关注 roadmap 中 `scope: channel` 相关条目。

- **确定性自动化行为（#7651）**："无结果抑制"功能的落地意味着 IronClaw 的自动化规则正在从"默认通知"走向"意图驱动"，允许用户通过自然语言表达通知偏好。这是一个值得关注的路线图信号：项目正逐步将 AI 能力注入规则引擎的语义理解层，同时用确定性回退保证行为可预期。该 PR 处于 XL 规模，若合入可能影响现有自动化配置的兼容性，值得列入下一版本观察清单。

- **依赖现代化（#7684、#7020、#7262、#7406）**：多个 dependabot PR 覆盖 Rust 依赖（base64 0.22→0.23、toml 0.9→1.1、tokio-tungstenite 0.29→0.30、wasm 工具链 0.254→0.256 等）与 GitHub Actions（claude-code-action、setup-node 等）。虽非功能请求，但反映了项目持续跟进上游生态的意愿，也为后续版本的功能迭代（特别是 wasm 相关能力）扫清依赖障碍。

## 7. 用户反馈摘要

来自 #7681 的真实用户场景反馈（由维护者 sergeiest 代为描述）：

- **痛点 1：公开频道的隐私暴露**。未完成账号链接的 Slack 用户在频道中 @机器人 寻求帮助时，收到的是全体可见的连接引导，不仅打断了频道内对话流，还可能让用户感到被"公开处刑"。在大型团队共享频道中，这种暴露感尤为明显。

- **痛点 2：连接流程的多步骤断裂**。当前引导方式是"请到 Ironclaw Web 应用连接，然后回到这里再给我发消息"。用户需要完成"跳出 Slack → Web 登录 → 连接账号 → 回到 Slack → 重新输入问题"五个步骤，且最后一步完全依赖用户记忆上下文。原始提问内容、意图、对话上下文在跳转过程中全部丢失。

- **期望**：希望连接提示改为私密 DM 发送，并提供能携带上下文的"一键连接"链接，让用户连接完成后能无缝继续原始提问。

该反馈来自维护者本身，说明开发团队在使用自家产品时发现了体验短板，这也解释了为什么从 Issue 到 PR 的响应速度如此之快。建议持续观察该 Issue 合入后用户侧的反馈闭环。

## 8. 待处理积压

当前有 5 个 OPEN 状态的 dependabot PR 长时间未合并，均属于常规依赖升级，但部分已等待较久，建议维护者批量处理以避免依赖版本落后过多：

| PR | 内容 | 等待天数* |
|---|---|---|
| [#7020 - tokio-tungstenite 0.29 → 0.30](https://github.com/nearai/ironclaw/pull/7020) | tokio-ecosystem 依赖升级 | 15 天 |
| [#7262 - wasm group 2 项更新](https://github.com/nearai/ironclaw/pull/7262) | wit-component / wit-parser 0.254 → 0.256 | 12 天 |
| [#7406 - actions group 4 项更新](https://github.com/nearai/ironclaw/pull/7406) | claude-code-action 等 CI 依赖（risk: medium） | 8 天 |
| [#7684 - everything-else 5 项更新](https://github.com/nearai/ironclaw/pull/7684) | base64/toml/http-body-util 等 | < 1 天 |
| [#7651 - 确定性无结果抑制（功能型）](https://github.com/nearai/ironclaw/pull/7651) | 自动化行为改进 | 3 天 |

> *等待天数按北京时间 2026-08-17 与 PR 创建时间估算。

**提醒**：`#7406`（CI actions 升级）标记了 `risk: medium`，且包含 `anthropics/claude-code-action` 的升级——若 CI 路径存在问题可能阻塞后续所有 PR 的合并，建议优先审查。`#7651` 作为 XL 规模的功能型 PR 已开放 3 天，涉及自动化配置的行为变更，建议尽早安排 review 以避免堆积，同时关注其对现有用户自动化规则的影响面评估。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 · 2026-08-17

> 数据统计周期：过去 24 小时（截至 2026-08-17）
> 数据来源：github.com/netease-youdao/LobsterAI

---

## 1. 今日速览

过去 24 小时项目活跃度处于低位，且整体信号偏负面：10 条 Issue 更新中 7 条仍为陈旧（stale）开放状态；17 条 PR 更新中 9 条以 stale 形式被关闭（均未合并），仅有 8 条仍待合并，且其中仅 1 条为 8 月新提交。本周期内无新版本发布、无实质代码合入。唯一值得关注的积极信号是 8 月 7 日提交的 PR #2452 仍在推进，它修复含斜杠模型 ID 时 provider 前缀被剥离的问题，与社区反馈的 DeepSeek V4 接入异常存在关联，说明 OpenClaw 兼容性方向仍有维护者在跟进。总体判断：项目当前严重缺乏人工维护投入，自动化 stale 清理正在批量回收未获响应的贡献，社区信任与贡献者意愿面临流失风险。


## 2. 版本发布

过去 24 小时无新版本发布，故本节省略。


## 3. 项目进展

### 3.1 重大警示：9 条 PR 被批量关闭，均未合并

过去 24 小时关闭的 9 条 PR 全部带 `[stale]` 标签，属于自动化清理流程，**不含任何一次合并**。被回收的 PR 中包含了以下具备明确价值、但未能进入主线的改动：

**安全加固系列（本周期内技术价值最高的清理项）：**
- [#1831 fix(security): 脱敏主进程与 IM 模块的敏感日志](https://github.com/netease-youdao/LobsterAI/pull/1831) — 消除 Bearer Token、第三方 API Key、SSE 内容及 `lobsterai://auth/callback?code=` 一次性授权码落盘到 electron-log 的隐患
- [#1832 fix(security): 限制 store:* IPC 越权访问 + 收窄通用 ipcRenderer 桥](https://github.com/netease-youdao/LobsterAI/pull/1832) — 修复渲染进程可越权读写 `auth_tokens`、`github_copilot_github_token` 等关键密钥的严重漏洞
- [#1833 fix(security): shell.openExternal 增加 scheme 白名单（拒绝 file:/javascript:/data:）](https://github.com/netease-youdao/LobsterAI/pull/1833) — 封堵模型输出恶意 Markdown 时可引导打开本地文件的攻击面

**Agent 功能增强与 Cowork 体验：**
- [#1691 feat(agent): add agent template import/export](https://github.com/netease-youdao/LobsterAI/pull/1691) — Agent 配置序列化与跨设备共享
- [#1760 feat(agent): support image avatars alongside emoji avatars](https://github.com/netease-youdao/LobsterAI/pull/1760) — 自定义 Agent 支持图片头像
- [#1693 feat(cowork): improve model setup entry and preserve draft input](https://github.com/netease-youdao/LobsterAI/pull/1693) — 未配置模型时一键跳转设置 + 修复草稿丢失
- [#1715 fix(cowork): 修复 OpenClaw 服务端代理请求缺失 session_id](https://github.com/netease-youdao/LobsterAI/pull/1715) — 多会话并发时服务端无法识别请求来源
- [#1690 fix(settings): add confirmation modal before deleting IM instances](https://github.com/netease-youdao/LobsterAI/pull/1690) — 防止误删 IM 实例
- [#1835 fix(cowork): 去除 continueSession 失败时重复推送的系统错误消息](https://github.com/netease-youdao/LobsterAI/pull/1835) — 削减冗余错误推送给用户造成的干扰

### 3.2 当前仅 1 条 PR 处于活跃推进状态

- [#2452 fix(openclaw): preserve provider for slashed model ids](https://github.com/netease-youdao/LobsterAI/pull/2452) — 8 月 7 日由 `ump45nose` 提交，修复 `custom_0` + `deepseek-ai/DeepSeek-V4-Flash` 这类斜杠模型 ID 持久化时丢失 provider 前缀的问题。该 PR 今日仍有更新，是当前池中唯一“新鲜”的贡献，也直接回应了社区对 DeepSeek V4 系列模型接入稳定性的关切。

**结论**：项目今日没有产生任何向前合并的净进展，取而代之的是 9 条积压贡献被批量清理。若这些安全修复与功能增强无法以其他形式回归主线，项目在安全基线与功能完整度上都将出现明显倒退。


## 4. 社区热点

| 条目 | 讨论热度 | 核心诉求 |
|------|----------|----------|
| [#1813 DeepSeek V4 无法使用 LLM request failed（已关闭）](https://github.com/netease-youdao/LobsterAI/issues/1813) | 8 条评论，为过去 24 小时评论数最高的 Issue | 模型接入失败：`provider rejected the request schema or tool payload` |
| [#1698 有道龙虾 + 智企帝王蟹 gateway 端口冲突（开放）](https://github.com/netease-youdao/LobsterAI/issues/1698) | 3 条评论，必现问题 | 同机安装有道另一款产品“智企帝王蟹”时端口冲突，关闭龙虾才能恢复 |
| [#1796 Write tool execution always fail（已关闭）](https://github.com/netease-youdao/LobsterAI/issues/1796) | 3 条评论 | Write/Edit 工具连续数日不可用，更新应用后依旧 |
| [#1744 Bug report（开放）](https://github.com/netease-youdao/LobsterAI/issues/1744) | 3 条评论 | 提交的附件上传失败，报告不完整 |

结合 [#2452 PR](https://github.com/netease-youdao/LobsterAI/pull/2452) 对 DeepSeek V4 模型 ID 的处理来看，社区对 DeepSeek 系列模型接入质量高度敏感，#1813 的关闭是否意味着根因已确认并进入修复通道，建议维护者给出公开说明。用户的核心注意力集中在“模型能不能用”“工具是否稳定”“是否与其它产品冲突”，而非新功能探索——当前最迫切的社区诉求是稳定性修复。


## 5. Bug 与稳定性

按严重程度排列，本周期内所有 Bug 类 Issue 均标记为 `[stale]`，且多数无对应修复 PR。

### 🔴 高严重度

| Issue | 问题描述 | 修复状态 |
|-------|----------|----------|
| [#1698 安装智企帝王蟹必现 gateway 端口冲突和进程竞争](https://github.com/netease-youdao/LobsterAI/issues/1698) | 同时安装有道龙虾与智企帝王蟹时 gateway 鉴权失败；关闭龙虾、重装帝王蟹才能恢复。**必现**，影响正常业务 | 无关联 fix PR，已积压 4 个月 |
| [#1783 更新过后 diff 异常失灵问题](https://github.com/netease-youdao/LobsterAI/issues/1783) | 用户深入分析 app.asar 后给出根因：`extractDiffFromToolInput` 的 edit 分支仅从 toolInput 顶层查找 `oldText/newText`，导致 edit diff 无法显示。修复路径已非常明确 | 无对应 PR，已积压 4 个月 |
| [#1745 Outlook 邮箱无法连接（不支持 OAuth2）](https://github.com/netease-youdao/LobsterAI/issues/1745) | Outlook 已全面禁止普通应用密码登录，客户端不支持 OAuth2/新式身份验证，用户完全无法使用邮箱功能 | 无对应 PR，已积压 4 个月 |

### 🟡 中严重度

| Issue | 问题描述 | 修复状态 |
|-------|----------|----------|
| [#1714 Win11 下安装过程图标为白色且无效](https://github.com/netease-youdao/LobsterAI/issues/1714) | Windows 11 环境安装大概率出现图标异常，安装包有效性存疑 | 无对应 PR，已积压 4 个月 |
| [#1796 Write tool execution always fail（已关闭）](https://github.com/netease-youdao/LobsterAI/issues/1796) | Write/Edit 工具持续失败，更新应用后依旧。虽已关闭，但未见修复说明 | 状态为 closed，未关联修复 PR |
| [#1751 定时任务通知文案错误](https://github.com/netease-youdao/LobsterAI/issues/1751) | 定时任务发送的文案中“通知方式”文案不正确 | 无对应 PR，已积压 4 个月 |

### 🟢 低严重度（信息不足）

| Issue | 问题描述 | 修复状态 |
|-------|----------|----------|
| [#1744 Bug report](https://github.com/netease-youdao/LobsterAI/issues/1744) | 附件“LobsterAI 技术支持联系函.docx”上传失败，无有效复现信息 | 无人工回复，已积压 4 个月 |

**特别警示**：高严重度项中，#1783 用户已给出精确到函数的根因定位，#1745 意味着邮箱功能对部分用户已完全不可用，#1698 是必现的进程级冲突。这三者长时间无人处理，且都在 4 月之后未获得任何维护者回应，是当前社区信任流失的最大风险源。


## 6. 功能请求与路线图信号

| 需求 | 来源 | 状态与路线图判断 |
|------|------|------------------|
| **[对话删除/批量清理功能](https://github.com/netease-youdao/LobsterAI/issues/1797)** | 用户 `qxjysd`，获 1 👍 | 已关闭。需求真实存在（无效对话堆积影响上下文质量），但未进入任何 PR |
| **[邮箱 OAuth2/新式身份验证支持](https://github.com/netease-youdao/LobsterAI/issues/1745)** | 用户 `jiutianxvanyin` | 非“新功能”而是“必要适配”。Outlook 禁用应用密码后，客户端邮箱功能整体失效，应作为高优先级排入路线图 |
| **[temperature 参数动态调整](https://github.com/netease-youdao/LobsterAI/issues/1688)** | 用户 `catubibu` | 希望在对话中以关键字动态调整 temperature。属于高级模型控制能力，可服务于自动化工作流场景 |
| **[AI 回复朗读功能](https://github.com/netease-youdao/LobsterAI/pull/1682)** | PR #1682（开放） | 已有实现：基于 Web Speech API，零依赖，含播放/暂停/恢复/停止能力。若合入将是 Cowork 多模态体验的增量突破。但当前仍卡在 4 个月未合并的积压队列中 |
| **[技能远程导入 URL 前置校验](https://github.com/netease-youdao/LobsterAI/pull/1683)** | PR #1683（开放） | 小而明确的 UX 修复，校验 `owner/repo` 格式再发请求。同为 4 个月未合并的积压项 |
| **[Cowork 初始化骨架屏 & 空状态增强](https://github.com/netease-youdao/LobsterAI/pull/1769)** | PR #1769 / #1770（开放） | 从“加载文案”升级为 shimmer 骨架屏，并在 Skills/TaskRunHistory 空状态补充图标与文案，整体 UI 一致性好，合入门槛低 |

**判断**：短期内已确认的方向仍是 Agent 可定制性（导入导出、图片头像）与 Cowork 交互体验优化。如果维护者恢复活跃，`#1682`、`#1683`、`#1707`、`#1769`、`#1770`、`#1773` 这 6 条 PR 都有“低风险、易合入”的特征，建议在一轮 review 内尽快处理，以恢复社区信心。


## 7. 用户反馈摘要

- **敏感信息治理诉求强烈**：`kayo5994` 等贡献者连续提交 3 个安全修复 PR（敏感日志脱敏、IPC 越权控制、openExternal 白名单），反映出用户对 AI 客户端私密数据落盘与模型输出攻击面的高度敏感，尤其在 authToken、Copilot Token、SSE 内容等场景。
- **核心功能失效带来的挫败**：用户在 #1745 中表示“普通的应用密码登录被完全禁止了。不知道怎么办才好”；#1796 用户对“更新应用后问题照旧”表达不满。这类外部环境变化引发的功能失效被长期搁置，正在将用户推向替代品。
- **用户自主做根因分析但未获回应**：#1783 中用户直接反编译 app.asar，定位了 `extractDiffFromToolInput` 的 bug 并给出修改建议。这是高价值的社区投入，但 4 个月无维护者跟进，会严重挫伤这类技术型用户的贡献热情。
- **多产品共存场景被忽视**：#1698 的“有道龙虾 + 智企帝王蟹”冲突，暴露出有道系产品矩阵在本地服务端口、进程命名等层面缺乏统一治理。用户显式表达了期望是“两者都正常运行”。
- **正面声音**：代码贡献层面仍存在团队内（`gongzhi-netease`、`leedalei`、`flowell`、`xiaoye5200`、`kayo5994` 等）的持续输出，说明项目组内部对功能完善和安全性有投入，但这些投入未能在 Issue 侧获得同等程度的回应。


## 8. 待处理积压（维护者重点关注）

### 🔸 高优 Issue（均为 4 个月无人工响应）

| 编号 | 标题 | 积压时长 | 建议 |
|------|------|----------|------|
| [#1698](https://github.com/netease-youdao/LobsterAI/issues/1698) | 智企帝王蟹 gateway 端口冲突与进程竞争 | 4 个月 | 与智企帝王蟹团队联动排期，明确端口注册与释放机制 |
| [#1783](https://github.com/netease-youdao/LobsterAI/issues/1783) | 更新后 diff 异常失灵（含根因分析） | 4 个月 | 根因已精确到代码函数，可直接排期修复 |
| [#1745](https://github.com/netease-youdao/LobsterAI/issues/1745) | Outlook 邮箱不支持 OAuth2 | 4 个月 | 功能不可用，建议升级为 P0 兼容性需求 |

### 🔸 低协商成本、应立即处理的待合并 PR

以下 7 条 PR 均为小而明确的改动，已在池中积压 4 个月，不合并也不关闭的态度对贡献者伤害最大：

- [#1682 feat(cowork): AI 回复朗读功能](https://github.com/netease-youdao/LobsterAI/pull/1682)
- [#1683 fix(skills): 远程导入 URL 格式前置校验](https://github.com/netease-youdao/LobsterAI/pull/1683)
- [#1707 fix(cowork): 切换 Agent 时清空主页输入框](https://github.com/netease-youdao/LobsterAI/pull/1707)
- [#1765 chore(deps): bump @headlessui/react 1.7.19 → 2.2.10](https://github.com/netease-youdao/LobsterAI/pull/1765)
- [#1769 feat(ui): Cowork 初始化骨架屏](https://github.com/netease-youdao/LobsterAI/pull/1769)
- [#1770 feat(ui): 技能与任务运行历史空状态增强](https://github.com/netease-youdao/LobsterAI/pull/1770)
- [#1773 fix(i18n): 补充缺失 edit 翻译 key](https://github.com/netease-youdao/LobsterAI/pull/1773)

### 🔸 战略级建议

1. **人工 Triaging**：对所有 stale 标签 Issue 进行一次快速人工分类，至少对高严重度项更新状态说明，避免用户长期处于“已读不回”状态。
2. **抢救安全修复**：今日被关闭的 #1831 / #1832 / #1833 安全三连 PR 技术价值极高，建议维护者以独立 commit 形式恢复合入，否则项目将长期暴露在敏感信息落盘、IPC 越权与恶意 scheme 的攻击面之下。
3. **恢复合并节奏**：优先合并 7 条低风险 PR 可快速向社区释放“项目恢复维护”的信号，边际成本极低，但可显著改善贡献者生态。

---

### 项目健康度总评

| 指标 | 状态 |
|------|------|
| 活跃度 | 🔴 低（无合并、无发布，反馈由 stale 机器人主导） |
| 响应及时性 | 🔴 极低（4 个月无维护者人工响应） |
| 安全性 | 🟠 风险偏高（已提交的安全修复被清理未合入） |
| 功能迭代 | 🟡 停滞（仅有 1 条活跃 PR） |
| 社区生态 | 🟠 信任流失风险加大（用户主动定位 bug 却 4 个月无回应） |

**一句话总结**：LobsterAI 在 8 月中旬处于“维护者缺位”状态，技术资产（安全修复、UX 增强）正在被自动化流程批量回收。若不能在短期内恢复人工 triage 与合并节奏，项目前 4 个月积累的社区贡献将尽数流失，且安全基线将进一步恶化。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 2026-08-17

## 1. 今日速览

过去 24 小时 Moltis 项目保持活跃：共 **5 条 Issue 更新**（新开/活跃 2 条，关闭 3 条），**17 条 PR 更新**（16 条已合并/关闭，1 条待合并），**无新版本发布**。修复类 PR 占比较高，覆盖了 gateway 编译回归、Sandbox 构建失败、会话管理、安全加固等问题；同时 zvec 向量内存后端、持久化连接器、Slack 原生任务卡片等新功能也已合入。需要关注的新风险是 `main` 分支 CI 格式门禁变红（[#1202](https://github.com/moltis-org/moltis/issues/1202)）以及 heartbeat 不遵守活跃时段配置（[#1205](https://github.com/moltis-org/moltis/issues/1205)），前者阻塞主分支质量门禁，后者影响后台任务调度准确性。

## 2. 版本发布

本期无新版本发布。

## 3. 项目进展

过去一天内共有 **16 个 PR 被合并或关闭**，主要集中在功能扩展、安全修复和构建稳定性三个方向：

### 功能推进
- **[#1158](https://github.com/moltis-org/moltis/pull/1158) feat(memory): add zvec vector database memory backend**  
  为记忆系统新增基于 Zvec + redb 的向量数据库后端，丰富记忆存储的可选实现。
- **[#1190](https://github.com/moltis-org/moltis/pull/1190) Add durable calendar, channel, and email connectors**  
  新增可持久化的日历、频道和邮件连接器，包含原子快照、调度、投影和本地全文搜索能力。
- **[#1195](https://github.com/moltis-org/moltis/pull/1195) Add Slack native live task cards**  
  在 Slack 响应流中渲染原生计划/任务卡片，并通过 opaque run ID 保护隐私。
- **[#1093](https://github.com/moltis-org/moltis/pull/1093) Add channel activity log visibility settings**  
  增加按账号、频道、用户维度的 `activity_log` 可见性配置，支持 `all`、`errors_only`、`off`。

### 修复与稳定性
- **[#1182](https://github.com/moltis-org/moltis/pull/1182) fix(sessions): allow deleting and archiving the main session**  
  修复 `main` 会话无法删除/归档的问题，对应 Issue [#1132](https://github.com/moltis-org/moltis/issues/1132)。
- **[#1201](https://github.com/moltis-org/moltis/pull/1201) fix(gateway): thread start_background_tasks into the memory runtime builder**  
  修复 `main` 分支当前无法编译的回归问题，属于阻塞性热修复。
- **[#1203](https://github.com/moltis-org/moltis/pull/1203) test(gateway): run the push fanout test on a paused clock**  
  修复 flaky test [#1193](https://github.com/moltis-org/moltis/issues/1193)，通过暂停时钟消除全量测试负载下的超时竞态。
- **[#1191](https://github.com/moltis-org/moltis/pull/1191) / [#1192](https://github.com/moltis-org/moltis/pull/1192)**  
  修正 gogcli 与 wacrawl 的模块路径指向 `openclaw` 组织，解决 Sandbox 构建和技能安装失败。

### 安全加固
- **[#1180](https://github.com/moltis-org/moltis/pull/1180) fix(security): harden model and zip paths**  
  修复恶意 zip 或 HuggingFace 仓库导致目录外任意文件写入的漏洞。
- **[#1179](https://github.com/moltis-org/moltis/pull/1179) fix(gateway): verify node pairing signatures**  
  将 `node.pair.verify` 绑定到服务端签发的 pending request，防止调用方自行提供 key/challenge。

整体来看，项目在“记忆后端扩展、连接器持久化、IM 集成、安全模型加固”几条主线上都有明显推进，同时快速处理了当日出现的主分支编译回归和 flaky test，维护节奏良好。

## 4. 社区热点

今日唯一有评论互动的条目是 **[Issue #1132](https://github.com/moltis-org/moltis/issues/1132)：“main” session can't be deleted/archived**。该 Issue 创建于 6 月 18 日，更新于 8 月 16 日并已关闭，由 [#1182](https://github.com/moltis-org/moltis/pull/1182) 修复。社区诉求很明确：用户希望 `main` 会话能像普通会话一样被删除或归档，而不是被强制保留。

其余 Issues/PRs 均为 0 评论，说明当日讨论热度并不高，大部分活动来自开发者的直接提交和机器人依赖更新，属于典型的“提交驱动”日。

## 5. Bug 与稳定性

按严重程度排列：

### 高风险 / 需立即关注
- **[#1205](https://github.com/moltis-org/moltis/issues/1205) [OPEN] Heartbeat ignores configured active hours and runs continuously**  
  新报告 Bug：heartbeat 忽略配置的活跃时段，持续运行。可能导致后台任务在非活跃时段消耗资源。目前无关联 fix PR，需要维护者确认调度逻辑。
- **[#1202](https://github.com/moltis-org/moltis/issues/1202) [OPEN] Format CI gate is red on main**  
  `main` 分支上 `scripts/check-file-size.sh` 失败，`store.rs`（1799 行）和 `admin.rs`（1531 行）超过 1500 行限制，导致 Format 任务变红。属于 CI 门禁阻塞问题，需拆分文件或调整阈值。暂无关联 PR。

### 中风险 / 已有修复
- **[#1189](https://github.com/moltis-org/moltis/issues/1189) [CLOSED] Sandbox build failing due to wrong gogcli github URL**  
  已由 [#1191](https://github.com/moltis-org/moltis/pull/1191) 修复。
- **[#1132](https://github.com/moltis-org/moltis/issues/1132) [CLOSED] “main” session can't be deleted/archived**  
  已由 [#1182](https://github.com/moltis-org/moltis/pull/1182) 修复。
- **[#1193](https://github.com/moltis-org/moltis/issues/1193) [CLOSED] Flaky test: push fanout timeout assertion races**  
  已由 [#1203](https://github.com/moltis-org/moltis/pull/1203) 修复。
- **[#1201](https://github.com/moltis-org/moltis/pull/1201)**（PR 自身修复了 Issue 未列出的 main 编译错误）已关闭。

### 低风险 / 兼容性修复
- **[#1194](https://github.com/moltis-org/moltis/pull/1194) fix(scripts): guard empty bash array expansions**  
  修复 macOS bash 3.2 下 `just local-validate-full` 无 PR 参数时崩溃的问题。

## 6. 功能请求与路线图信号

当前开放中的功能型 PR 是 **[#1204](https://github.com/moltis-org/moltis/pull/1204) feat: add MiniMax Code ACP agent**。该 PR 为 Moltis 新增 `acp-minimax-code` 外部代理类型，并纳入默认可执行文件检测和 agent registry。这表明项目正在扩展第三方 ACP 代理生态，很可能进入下一版本。

从已合并的功能 PR 可以观察到路线图方向：
- **多后端内存**：zvec 向量数据库后端合入，代表记忆存储不再依赖单一实现。
- **持久化连接器**：日历、频道、邮件连接器的持久化与原子快照，为更可靠的外部数据同步打基础。
- **IM 原生交互**：Slack 原生任务卡片，说明项目在提升 IM 平台内的交互体验。
- **可见性控制**：channel activity log 的细粒度权限配置，表明合规与隐私管理在持续增强。

## 7. 用户反馈摘要

- 用户 **vvuk** 在 [#1132](https://github.com/moltis-org/moltis/issues/1132) 中反映：无法删除或归档 `main` 会话。该问题已被修复，用户侧诉求得到满足。
- 用户 **holgzn** 在 [#1189](https://github.com/moltis-org/moltis/issues/1189) 中报告：Sandbox 构建因 gogcli 的 GitHub URL 错误而失败，导致所有预构建镜像不可用。该问题已通过模块路径修正解决。
- 开发者 **Lstarsky0** 分别报告了 CI 格式门禁失败（[#1202](https://github.com/moltis-org/moltis/issues/1202)）和 flaky test（[#1193](https://github.com/moltis-org/moltis/issues/1193)），属于质量保障层面的真实痛点，其中 flaky test 已修复。

整体看，用户反馈集中在“基础操作受限”和“构建/测试不稳定”两类，前者已闭环，后者除 CI 门禁外基本处理完毕。

## 8. 待处理积压

当前值得维护者关注的未处理项：

- **[#1205](https://github.com/moltis-org/moltis/issues/1205) [OPEN] Heartbeat ignores configured active hours**  
  新 Bug，尚未分配或标注，建议尽快确认优先级。
- **[#1202](https://github.com/moltis-org/moltis/issues/1202) [OPEN] Format CI gate is red on main**  
  阻塞主分支 CI，需立即处理。
- **[#1204](https://github.com/moltis-org/moltis/pull/1204) [OPEN] feat: add MiniMax Code ACP agent**  
  新功能 PR 等待 review/merge，建议纳入版本规划。

未发现长期无人响应的历史 Issue 或 PR，项目积压情况良好。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 2026-08-17

> 数据源：GitHub `agentscope-ai/QwenPaw`，以下链接按数据源路径保留。

## 1. 今日速览

过去 24 小时 CoPaw 整体活跃度中高：共 9 条 Issue 更新，其中 6 条开放/活跃、3 条关闭；9 条 PR 全部处于待合并状态，无新版本发布。社区反馈集中在 Agent 工具调用崩溃、会话历史丢失、高频运行崩溃等稳定性问题上，同时多位 first-time contributors 提交了 8 个修复型 PR。值得关注的是，今日 PR 合并/关闭数为 0，维护者审阅与合入速度可能成为短期瓶颈。整体看社区贡献热情较高，但代码合入进展需要加速。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日**无 PR 被合并或关闭**，因此代码合入层面没有新里程碑。但以下 3 个 Issue 被关闭，代表问题讨论或修复进入收尾阶段：

- [#7063 [bug] Agent 执行工具调用时必现崩溃](https://github.com/agentscope-ai/QwenPaw/issues/7063)：`async for` 与 coroutine 误用导致 `TypeError`，已关闭。
- [#7003 [Proposal] Memory for QwenPaw agents — 97.5% fewer tokens (ViBo)](https://github.com/agentscope-ai/QwenPaw/issues/7003)：AI Agent 记忆方案提案，已关闭。
- [#6471 [bug] Cron 任务在事件循环长时间空闲后 misfire](https://github.com/agentscope-ai/QwenPaw/issues/6471)：APScheduler 不触发问题，已关闭。

当前 9 个待合并 PR 中，较重要的包括：

- [#6302 feat: unify provider discovery, model metadata, routing, and agent controls](https://github.com/agentscope-ai/QwenPaw/pull/6302)
- [#6940 feat(pawapp): add native DataPaw app runtime and durable analysis workspace](https://github.com/agentscope-ai/QwenPaw/pull/6940)（标注 `ready-for-human-review`）

这些 PR 一旦合入，将显著推进 provider 模型管理、桌面端 DataPaw 运行时和后台任务能力。

## 4. 社区热点

今日讨论最活跃的 Issue 主要集中在崩溃和记忆/token 成本两个主题：

| Issue | 评论数 | 状态 | 核心诉求 |
|---|---|---|---|
| [#7063 Agent 执行工具调用时必现崩溃](https://github.com/agentscope-ai/QwenPaw/issues/7063) | 3 | 已关闭 | Agent 工具调用链路存在 Python 异步 API 误用，属高影响稳定性 bug |
| [#7003 Memory for QwenPaw agents — 97.5% fewer tokens (ViBo)](https://github.com/agentscope-ai/QwenPaw/issues/7003) | 3 | 已关闭 | 用户对“每次请求全量发送记忆”的 token 成本不满，希望引入压缩/加密记忆方案 |
| [#7052 给插件 API 增加 system_prompt 权限](https://github.com/agentscope-ai/QwenPaw/issues/7052) | 2 | 开放 | 企业用户希望插件交互界面能注入公司提示词，且对会话用户隐藏 |
| [#6471 Cron 任务 misfire](https://github.com/agentscope-ai/QwenPaw/issues/6471) | 2 | 已关闭 | 定时任务在事件循环空闲后不再触发，影响自动化可靠性 |

**分析**：社区讨论热点折射出两类需求——一是**Agent 基础设施稳定性**（异步调度、工具调用、Cron），二是**成本与企业级控制**（token 压缩、system_prompt 权限）。后者可能成为后续版本的重要功能方向。

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | Issue/PR | 问题描述 | 状态 |
|---|---|---|---|
| 严重 | [#7063 Agent 执行工具调用时必现崩溃](https://github.com/agentscope-ai/QwenPaw/issues/7063) | `_execute_tool_call` 中 `async for` 遍历 coroutine，导致 `TypeError`，工具调用稳定崩溃 | 已关闭，需确认修复版本 |
| 严重 | [#7074 正常运行崩溃，需要刷新页面才能重启，频次高发](https://github.com/agentscope-ai/QwenPaw/issues/7074) | 桌面/Console 运行中高频率崩溃，只能靠刷新恢复 | 开放，暂无 fix PR |
| 中等 | [#7065 多轮讨论后无法查看完整聊天历史](https://github.com/agentscope-ai/QwenPaw/issues/7065) | 7 轮后只能看到最近 3-4 条历史 | 开放，暂无 fix PR |
| 中等 | [#6471 Cron 任务 misfire](https://github.com/agentscope-ai/QwenPaw/issues/6471) | APScheduler 在事件循环长时间空闲后不触发 | 已关闭 |

此外，PR 队列中还有一批 bug 修复尚未合入：

- [#7071 fix(agents): make view_video inline cap configurable instead of hardcoded 2 MB](https://github.com/agentscope-ai/QwenPaw/pull/7071)
- [#7070 fix(agents): promote view_video results on OpenAI Responses API path](https://github.com/agentscope-ai/QwenPaw/pull/7070)
- [#7069 fix(console): render data-URL images in historical messages on session reload](https://github.com/agentscope-ai/QwenPaw/pull/7069)
- [#7066 fix(drivers): persist rotated refresh_token for OAuth2 auth-code providers](https://github.com/agentscope-ai/QwenPaw/pull/7066)
- [#7064 fix(cli): sync top-level text on cron update --text for agent jobs](https://github.com/agentscope-ai/QwenPaw/pull/7064)

这些修复涉及视频内联、历史消息图片、OAuth2 token 持久化和 cron CLI 同步，覆盖范围较广，建议维护者优先 review。

## 6. 功能请求与路线图信号

| 需求 | 来源 | 状态 | 路线图判断 |
|---|---|---|---|
| [按 agent/会话级别配置 `reasoning_effort`](https://github.com/agentscope-ai/QwenPaw/issues/7062) | #7062 | 开放 | 与 #6302 的 provider/routing 重构方向一致，可能进入下一版本 |
| [插件 API 增加 `system_prompt` 权限](https://github.com/agentscope-ai/QwenPaw/issues/7052) | #7052 | 开放 | 企业级权限管理需求，需要对插件安全模型做扩展 |
| [File viewer 支持 C# / shader 语言](https://github.com/agentscope-ai/QwenPaw/issues/7068) | #7068 | 开放 | 低风险 UX 增强，适合快速合入 |
| [技能名称去重，避免 workspace 与内置 skill 重复加载](https://github.com/agentscope-ai/QwenPaw/issues/7073) | #7073 | 开放 | 修复型 enhancement，具备合并价值 |
| [ViBo Agent 记忆方案，减少 97.5% token](https://github.com/agentscope-ai/QwenPaw/issues/7003) | #7003 | 已关闭 | 提案已关闭，但 token 成本诉求真实存在，可能以其他形式进入路线图 |

另一个重要路线图信号是大型功能 PR：

- [#6940 feat(pawapp): add native DataPaw app runtime and durable analysis workspace](https://github.com/agentscope-ai/QwenPaw/pull/6940)

该 PR 已标记 `ready-for-human-review`，如果合入，将新增 DataPaw 原生运行时和持久化分析工作区，属于产品形态层面的重要扩展。

## 7. 用户反馈摘要

从今日 Issue 描述和讨论中可以提炼以下真实用户痛点：

- **工具调用稳定性损害开发体验**：`#7063` 中 Agent 执行工具调用时必现崩溃，直接影响基于 CoPaw 构建 Agent 的可用性。
- **会话历史不可见影响长对话**：`#7065` 用户反馈多轮后只能看到最近 3-4 条，即使滚动到顶部也无法回溯，属于严重的信息丢失。
- **高频崩溃降低使用信心**：`#7074` 用户描述“正常运行崩溃，需要刷新页面才能重启，频次高发”，已接近不可用状态。
- **Token 成本是真实痛点**：`#7003` 用户指出“sending ALL memory to the model on every request costs a fortune”，对长期运行 agent 的成本敏感。
- **企业用户需要提示词权限隔离**：`#7052` 公司插件场景下，不希望用户看到内部 system_prompt，提出 API 级权限诉求。
- **角色差异化配置需求**：`#7062` 用户希望不同 agent 使用不同思考深度，例如快速问答 vs 深度研究。

整体来看，用户对项目能力和 star 数（33748）有较高认可，但稳定性、历史数据可访问性和成本控制是当前反馈最集中的短板。

## 8. 待处理积压

| 类型 | 项目 | 创建时间 | 停留时长 | 建议 |
|---|---|---|---|---|
| PR | [#6302 feat: unify provider discovery, model metadata, routing, and agent controls](https://github.com/agentscope-ai/QwenPaw/pull/6302) | 2026-07-21 | 27 天 | 大范围架构性改动，长期未合入，建议维护者明确是否进入主线 |
| PR | [#6940 feat(pawapp): add native DataPaw app runtime and durable analysis workspace](https://github.com/agentscope-ai/QwenPaw/pull/6940) | 2026-08-12 | 5 天 | 已标 `ready-for-human-review`，需尽快安排审阅 |
| Issue | [#7003 Memory for QwenPaw agents proposal](https://github.com/agentscope-ai/QwenPaw/issues/7003) | 2026-08-13 | 今日关闭 | 虽已关闭，但 token 成本问题建议转入 roadmap 讨论 |
| Issue | [#6471 Cron misfire](https://github.com/agentscope-ai/QwenPaw/issues/6471) | 2026-07-26 | 21 天后关闭 | 定时任务可靠性问题，建议总结为回归测试项 |

**健康度总结**：CoPaw 社区活跃度良好，外部贡献者参与积极，但 PR 合入速度为 0，审阅积压风险上升。建议优先处理 `ready-for-human-review` 的 #6940，以及长时间未合入的 #6302，同时为工具调用崩溃、会话历史丢失等稳定性问题补充回归测试。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 2026-08-17

## 1. 今日速览
过去24小时 ZeroClaw 保持高活跃度：50条 Issue 更新（48条活跃、2条关闭），50条 PR 更新（46条待处理、4条合并/关闭），无新版本发布。社区讨论集中在架构类 RFC（协议兼容、会话/附件统一、安全治理）与并行测试稳定性，协作密度高但合并量偏低，评审积压或成潜在瓶颈。整体项目健康度良好，安全与治理方向推进显著。

## 2. 版本发布
无（过去24小时未发布新版本）。

## 3. 项目进展
今日合并/关闭的重要 PR：
- [PR #9580](https://github.com/zeroclaw-labs/zeroclaw/pull/9580)（fix(security): harden built-in HTTP egress on the shared network guard）— 加固内置 HTTP 出口边界，将网络分类原语下沉至 `zeroclaw-infra::net_guard`，并默认拒绝审计过的非全局 IP。这是安全架构的关键一步，也为插件出口策略系列（#9137/#9582/#9584）提供基础。
- [PR #9416](https://github.com/zeroclaw-labs/zeroclaw/pull/9416)（docs(tools): document that AllToolsResult.tools is the pre-filter registry）— 补充字段文档，消除“filtered/unfiltered”语义混淆，改善开发者 API 体验。

此外，[Issue #9953](https://github.com/zeroclaw-labs/zeroclaw/issues/9953)（SOP schema 校验拒绝双重编码输出对象）已修复并关闭。整体上，项目在安全边界、文档准确性和 SOP 错误处理三方面都有实际推进。

## 4. 社区热点
讨论最活跃的 Issues（按评论数排序）：
- [#6808 RFC: Work Lanes, Board Automation, and Label Cleanup](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)（23评论）— 工作流路由、看板自动化与标签清理的治理 RFC，已进入验收/实施阶段，反映维护效率和项目治理是社区关注点。
- [#8603 RFC: ZeroClaw Chat Completions profile](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)（22评论）— 要求暴露 OpenAI Chat Completions 协议，以便接入 Open WebUI、LobeChat、Continue.dev、LangChain 等生态，是用户诉求最集中的功能方向。
- [#9488 RFC: Unified attachment architecture](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) 与 [#9487 RFC: Runtime-owned conversation sessions](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)（各17评论）— 两项关联 RFC 试图重新划分运行时/传输/附件边界，推动架构向更清晰的插件化方向演进。
- [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954)、[#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971)、[#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165)（各14评论）— 分别涉及内部发起 turn 的来源绑定、安全态势统一、以及“更轻核心+外部集成”的长期方向。

热点背后的共同诉求是：让 ZeroClaw 从“多渠道 Agent 框架”走向协议友好、边界清晰、可治理的通用 Agent 运行时。

## 5. Bug 与稳定性
按严重程度排列：
- [S1] [#10013 Edge TTS cancellation test can miss fake child startup under parallel load](https://github.com/zeroclaw-labs/zeroclaw/issues/10013)（priority:p1，workflow blocked）— 并行测试下间歇性失败。暂无直接修复 PR，但 [#10010](https://github.com/zeroclaw-labs/zeroclaw/pull/10010) 提供了同类 ETXTBSY 问题的修复思路。
- [p1] [#9965 runtime-written executable test fixtures hit ETXTBSY](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) — 已有 [PR #10010](https://github.com/zeroclaw-labs/zeroclaw/pull/10010) 部分缓解（cron 自定义 shell 测试改用 symlink）。
- [p1] [#9655 approval cards carry no position, so back-to-back cards are indistinguishable](https://github.com/zeroclaw-labs/zeroclaw/issues/9655) — 连续工具调用时审批卡片难以区分，存在误操作风险；暂无修复 PR。
- [p1] [#9811 /health reports a channel healthy that has never connected](https://github.com/zeroclaw-labs/zeroclaw/issues/9811) — 健康检查误报，让运维对失效渠道毫无察觉；暂无修复 PR。
- [S2] [#10020 Agentic independent delegates ignore the target thinking policy](https://github.com/zeroclaw-labs/zeroclaw/issues/10020) — 独立子代理未遵循目标 thinking 策略，输出不可控；暂无修复 PR。
- [S2] [#10037 POST /api/cron silently stores invalid session_target as isolated](https://github.com/zeroclaw-labs/zeroclaw/issues/10037) — API 校验缺失，静默接受非法配置；暂无修复 PR。
- 已修复：[#9953](https://github.com/zeroclaw-labs/zeroclaw/issues/9953)（SOP double-encoded output）已关闭。

## 6. 功能请求与路线图信号
今日新增或讨论中的功能信号：
- [#8603 Chat Completions profile](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)：OpenAI 兼容协议支持，被主流客户端生态强烈驱动，进入路线图概率较高。
- [#9488 统一附件架构](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) 与 [#9487 运行时拥有会话](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)：若被接受，将重构 Web/渠道集成方式，属于重大架构升级。
- [#10025 RFC: zeroclaw swarm — ephemeral agent swarms with a crush-style TUI](https://github.com/zeroclaw-labs/zeroclaw/issues/10025)（今日新开）：临时 Agent 群组与 TUI 编排，可能是下一阶段多智能体验的方向。
- 已有 PR 中，[#9241 Microsoft Teams channel](https://github.com/zeroclaw-labs/zeroclaw/pull/9241)、[#9772 Telegram per_user_session toggle](https://github.com/zeroclaw-labs/zeroclaw/pull/9772)、[#9109 Hailo-Ollama native support](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) 是明确的渠道/硬件扩展方向。
- 插件出口安全策略系列（[#9137](https://github.com/zeroclaw-labs/zeroclaw/pull/9137)、[#9582](https://github.com/zeroclaw-labs/zeroclaw/pull/9582)、[#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584)）分阶段实施，将补齐 WASM 插件的安全模型。

## 7. 用户反馈摘要
从今日更新的 Issue 中提炼的真实用户反馈：
- 协议兼容性：用户明确提到 “Open WebUI、LobeChat、Continue.dev、Aider、LangChain、OpenAI SDK” 等工具链无法直接接入（#8603），互操作性是高频痛点。
- 架构边界：多个 RFC（#9487/#9488/#6165）的讨论表明，贡献者认为当前核心内建集成过多，希望核心更轻、边界更清晰，以降低维护与安全审计成本。
- 可用性 Bug：
  - Telegram 审批卡片无法区分，导致误操作风险（#9655）。
  - `/health` 假阳性，失效渠道被误认为健康（#9811）。
  - 独立 delegate 忽略 thinking 策略，输出不可控（#10020）。
  - cron API 静默接受非法值，给配置埋雷（#10037）。
- 测试稳定性：并行测试下 ETXTBSY 与 fake child race 反复出现（#9965/#10013），说明 CI 并行度提升后基础设施需要加固，也是大型 Rust 项目的常见问题。

## 8. 待处理积压
以下重要 Issue/PR 长时间未进入合并/关闭阶段，建议维护者优先关注：
- [Issue #6165 RFC: Prefer a lighter ZeroClaw core through external integrations](https://github.com/zeroclaw-labs/zeroclaw/issues/6165)（2026-04-27，14评论）— 核心瘦身方向，影响后续架构决策。
- [Issue #6808 RFC: Work Lanes, Board Automation, and Label Cleanup](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)（2026-05-20，23评论）— 已验收但仍需 rollout 跟踪。
- [Issue #6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) 与 [Issue #6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) — 内部 turn 来源与安全态势 RFC，修订后仍待维护者确认。
- PR 连锁 [ #9137](https://github.com/zeroclaw-labs/zeroclaw/pull/9137) → [#9582](https://github.com/zeroclaw-labs/zeroclaw/pull/9582) → [#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584) — 插件出口策略依赖链较长，已开放近一个月，建议整体评审或分拆合并。
- [PR #9808](https://github.com/zeroclaw-labs/zeroclaw/pull/9808)（dependabot，46 个依赖更新）— 批量升级风险高，需尽快分配资源做回归验证。
- [PR #9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109)（Hailo-Ollama 支持）— 标记 `needs-author-action`，缺少作者回应，可能阻塞新硬件支持。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*