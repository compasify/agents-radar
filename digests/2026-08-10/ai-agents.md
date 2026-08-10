# OpenClaw 生态日报 2026-08-10

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-08-10 00:52 UTC

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

# OpenClaw 项目动态日报 — 2026-08-10

## 1. 今日速览

过去24小时，OpenClaw 仓库维持了极高的社区活跃度：共产生 500 条 Issue 更新（新开/活跃 428，关闭 72）和 500 条 PR 更新（待合并 320，已合并/关闭 180），无新版本 Release。社区关注焦点集中在「消息丢失 / 静默无回复」类问题（多个高评论 Issue 指向同一根因链），以及大量带有 `needs-product-decision`（需产品决策）标签的 P1 功能/缺陷积压。总体而言，项目社区参与度和上报量处于高位，但维护者的「审查—修复—合入」管线存在不小压力，且已关闭 Issue 对应问题出现复发案例，值得关注。

## 2. 版本发布

过去 24 小时无新版本发布（0 个 Releases），故本部分省略。

## 3. 项目进展

过去 24 小时共有 180 条 PR 被合并/关闭。虽然 Top 列表展示的 30 条 PR 均处于 OPEN 状态，但从活跃 PR 和关联 Issue 中可清晰看出当前开发重心：

**可靠性 / 稳定性加固**
- [PR #121063](https://github.com/openclaw/openclaw/pull/121063)：为 agent 原生 runLoop 增加 turn/error-batch/idle-repeat 三重守卫，修复外部服务返回 429 时造成 **219 次 assistant turns / 177 次工具调用 / ~15M tokens 的无界重试循环**（修复 #120962）。
- [PR #121142](https://github.com/openclaw/openclaw/pull/121142)：将模型静默调用中断延迟到 provider 请求 allowance 过期后，避免误杀仍在合法窗口内的流式请求（修复 #121018）。
- [PR #120398](https://github.com/openclaw/openclaw/pull/120398)：修复 Linux 上服务托管的工具子进程未被终止的问题（#120386）。
- [PR #120190](https://github.com/openclaw/openclaw/pull/120190)：压缩（compaction）新增有界可恢复机制，避免 preflight 压缩失败时误取消或误软化合法中断。
- [PR #121122](https://github.com/openclaw/openclaw/pull/121122)：保留「消失的 worker」跨重启失败记录，消除会话在处理结果对账时丢失诊断信息的窗口。
- [PR #112312](https://github.com/openclaw/openclaw/pull/112312)：SIGKILL 拆除回退 + token 静默看门狗（Draft 状态）。

**跨渠道适配与修复**
- [PR #121014](https://github.com/openclaw/openclaw/pull/121014)：修复 Slack Enterprise Grid 延迟交互（block actions、快捷键、弹窗提交、斜杠命令）在唤醒 agent 时丢失 workspace 作用域的问题。
- [PR #101441](https://github.com/openclaw/openclaw/pull/101441)：净化 Zalo Personal 自定义回复管道中的工具追踪信息泄露。
- [PR #121301](https://github.com/openclaw/openclaw/pull/121301)：图片理解能力在缺少显式 agentDir 时回退到默认 agent 目录（修复 #121293）。

**UI / 客户端体验**
- [PR #121286](https://github.com/openclaw/openclaw/pull/121286)：将 Control UI 侧边栏四个破坏性会话操作从 `window.confirm` 迁移到应用内确认，修复 WebView 中因缺少对话框桥接而「静默无操作」的严重交互缺陷。
- [PR #121306](https://github.com/openclaw/openclaw/pull/121306)：macOS 网关启动失败时在引导界面展示具体失败原因（关联 #121236）。
- [PR #120933](https://github.com/openclaw/openclaw/pull/120933)：修复移动端配对码兑换完成后界面未刷新、仍可操作过期凭证的问题（修复 #120753）。
- [PR #121032](https://github.com/openclaw/openclaw/pull/121032)：在 Control UI 中引导用户配置 Public URL 与 LAN，解决网关仅监听 loopback 时无法手机配对的问题。
- [PR #116940](https://github.com/openclaw/openclaw/pull/116940)：统一设置变更与 UI 刷新的事务协调，防止模型设置向导绕过 RuntimeConfig 变更所有者导致持久化竞态。

**架构演进与性能**
- [PR #115138](https://github.com/openclaw/openclaw/pull/115138)：为本地文件系统 SQLite 数据库启用 `mmap_size` 内存映射读取，减少事件循环阻塞（修复 #112758）。
- [PR #121305](https://github.com/openclaw/openclaw/pull/121305)：纯重构，合并 prompt 与 stream attempt 步骤，无行为变更。
- [PR #121221](https://github.com/openclaw/openclaw/pull/121221)：为 memory 插件定义稳定的授权契约（authorization contracts），为未来多人记忆强制机制打基础（关联 #121121）。
- [PR #121263](https://github.com/openclaw/openclaw/pull/121263)：端到端移除自定义会话图标功能，精简协议、持久化与 UI 表面积。

**小结**：今日 PR 最密集的主题是「防止各类循环 / 超时 / 进程残留导致的可靠性事故」与「跨渠道消息投递一致性与安全问题」。这与此前一段时间高发的 message-loss / crash-loop 类 Issue 形成了呼应，说明开发团队正在集中消化这一类稳定性技术债。但值得注意：这些 PR 多数仍处于 `needs proof` 或 `waiting on author` 状态，从提交到合并仍需观察。

## 4. 社区热点

**Top 1：Silent reply failure 问题（196 评论）—— 关闭 ≠ 解决**

- [Issue #116277](https://github.com/openclaw/openclaw/issues/116277)（`[CLOSED]`，P1，评论区 196 条，标签含 `impact:message-loss`、`issue-rating: 🦞 diamond lobster`）：DeepSeek v4 Flash 在 Telegram 群组中静默生成回复失败，仅输出「No reply was generated for this message」fallback。该 Issue 虽已关闭，但社区讨论热度极高。
- 更关键的是，用户在 [Issue #121058](https://github.com/openclaw/openclaw/issues/121058)（2026-08-09 创建，19 评论）中报告：**#116277 关闭后，监控 cron 仍在持续记录同类静默失败——今天（8/9）又发生了一次**。这意味着根因可能未真正修复。

这组 Issue 表明「静默无回复 / 消息丢失」是当前社区最痛的问题之一，且存在「关闭了但没修好」的风险。标签中的 `clawsweeper:source-repro` 与 `clawsweeper:linked-pr-open` 说明已有复现路径和关联 PR，但未完成闭环，值得维护者优先跟进。

**Top 2：嵌入式 runner 的 Anthropic thinking 签名失效**

- [Issue #92201](https://github.com/openclaw/openclaw/issues/92201)（`[OPEN]`，P1，21 评论）：Slack 插件嵌入式 agent runner 在重放时，Anthropic thinking block 签名间歇性无效；恢复包装器因错误文本泛化而从不触发。用户关注点在于：流式 thinking 签名的持久化/重放损坏会导致回复失败，且错误被泛化后无法自动恢复。标签含 `impact:session-state`、`impact:message-loss`。

**Top 3：分层 bootstrap 文件加载（功能讨论）**

- [Issue #22438](https://github.com/openclaw/openclaw/issues/22438)（`[OPEN]`，P2，19 评论）：提出「分层 bootstrap 加载」以渐进式控制上下文，避免大型工作区中所有文件在所有会话（含子 agent 与 cron）中全量加载、浪费 token 预算。该功能若落地，对大型工作区用户的 token 成本和上下文有效性将有显著改善，是社区呼声较高的效率优化方向。

**分析**：社区讨论最密集的诉求集中在三方面——① 静默丢消息/无回复的有罪推定与追溯能力；② 会话状态损坏的自动恢复；③ 上下文 token 使用效率。三者均指向「可靠性与可观测性」的核心焦虑。

## 5. Bug 与稳定性

Bug 类 Issue 按严重级别与修复状态汇总如下：

### 🔴 P0
| Issue | 标题 | 状态 | Fix PR |
|---|---|---|---|
| [#48920](https://github.com/openclaw/openclaw/issues/48920) | Live Docs 领先于发布版本（`IsolatedSessions` 写入文档但 2026.3.13 不存在），`impact:ux-release-blocker` | 10 评论，4 👍 | 未标注 |

### 🟠 P1（消息丢失 / 会话状态类）

| Issue | 标题 | 描述 | Fix PR 状态 |
|---|---|---|---|
| [#116277](https://github.com/openclaw/openclaw/issues/116277) | DeepSeek v4 Flash 静默无回复（196 评论） | 已关闭，但 [#121058](https://github.com/openclaw/openclaw/issues/121058) 显示复发 | 关联 PR 已开，根因待确认 |
| [#92201](https://github.com/openclaw/openclaw/issues/92201) | Anthropic thinking 签名在重放时失效 | 恢复包装器未触发 | `not-repro-on-main`，无新 fix PR |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex PreToolUse hook 衍生 CPU 满载进程并阻塞网关 RPC | 每个进程 ~100%+ CPU | 无新 fix PR |
| [#121058](https://github.com/openclaw/openclaw/issues/121058) | #116277 关闭后静默失败仍复发 | 8/9 再次出现 | 新开，待处理 |
| [#120735](https://github.com/openclaw/openclaw/issues/120735) | Telegram 入站贴纸以裸文件引用到达，未暂存磁盘、无描述 | agent 完全无法看到贴纸 | 有 PR 在途（#120721 等相关） |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | hook/工具子进程僵尸堆积导致运行时长降级 | 回归 | 无新 fix PR |
| [#94939](https://github.com/openclaw/openclaw/issues/94939) | 6.x 迁移后频道会话 SQLite 为空（0 字节），孤立引用、破坏 MS Teams 主动发送 | 数据丢失性质 | 有关联 PR |
| [#96242](https://github.com/openclaw/openclaw/issues/96242) | 至少三条独立路径导致 Telegram 重复消息 | 8/10 仍在更新 | 有新 PR 但集中在其他问题 |
| [#90378](https://github.com/openclaw/openclaw/issues/90378) | 5.28→6.1 cron store 静默迁移 SQLite，新任务默认 announce 导致频道错误 | 静默迁移，用户不可见 | 无新 fix PR |

### 🟠 P1（安全 / 回归类）
| Issue | 标题 | 描述 | Fix PR 状态 |
|---|---|---|---|
| [#45740](https://github.com/openclaw/openclaw/issues/45740) | `gh-issues` skill 将不可信 issue 正文直接注入子 agent 提示词 | 需要安全评审 | 无新 fix PR |
| [#31583](https://github.com/openclaw/openclaw/issues/31583) | `exec` 工具不继承 `skills.entries.*.env` 环境变量（回归） | 无法注入密钥 | 有 linked PR |
| [#105528](https://github.com/openclaw/openclaw/issues/105528) | Windows 上 exec/read 工具间歇性返回空输出（2026.6.x 回归） | 间歇且按会话分 | `needs-live-repro` |

### 🟡 P2 / 其他
- [#114154](https://github.com/openclaw/openclaw/issues/114154)：bundle-mcp 通过策略与健康检查，但 agent 会话中从不加载，ToolSearch 零结果。
- [#92460](https://github.com/openclaw/openclaw/issues/92460)：隔离 cron 完成通知丢弃显式 `delivery.channel`。
- [#114211](https://github.com/openclaw/openclaw/issues/114211)：Matrix 房间 agent 可在可见 no-reply 输出上自循环。
- [#52130](https://github.com/openclaw/openclaw/issues/52130)：telegram.retry.jitter 类型不匹配导致重启风暴 + 误导性 SecretRef 诊断。

**稳定性判断**：今日 Bug 面仍然偏广，但有几个向好迹象——① `#116277` 等高频问题已有 linked PR，虽未完全解决，但至少确认在进行中；② 今日已合并/关闭 PR 达到 180 条，其中包含多个循环防护、进程清理、SQLite 性能修复，这些有助于降低 crash-loop 与事件循环阻塞类问题的总体发生率。

## 6. 功能请求与路线图信号

以下功能请求评论数/点赞数较高，且与今日活跃 PR 方向有重叠：

| Issue | 功能 | 数据 | 路线图判断 |
|---|---|---|---|
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | **Masked Secrets**：agent 可使用 API 密钥但不可见原始值，防泄露与防提示注入 | 15 评论，4 👍，P1 | 需求明确，安全价值高，可能与 `exec` env 问题（#31583）一并推进 |
| [#60572](https://github.com/openclaw/openclaw/issues/60572) | **Multi-Slot Memory**：将单一 memory slot 拆为多个用途特定 slot | 6 评论，3 👍 | 与今日 PR #121221（memory 授权契约）、#120889（Gemini 批处理）、#112694（recall 追踪）相关，说明记忆架构升级已在推进 |
| [#67413](https://github.com/openclaw/openclaw/issues/67413) | **Per-agent dreaming 配置**：避免所有工作区同时 memory-core dreaming 触发 OOM | 8 评论，5 👍 | 点赞数最高之一，运维痛点明确，但今日无直接 PR |
| [#47677](https://github.com/openclaw/openclaw/issues/47677) | **Telegram reactions 作为一等触发面**（唤醒/执行） | 6 评论，2 👍 | 社区有需求，暂无对应 PR 信号 |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | **分层 bootstrap 文件加载** | 19 评论，热度高 | 上下文效率方向呼声高，可能需要产品决策（已带该标签） |
| [#6757](https://github.com/openclaw/openclaw/issues/6757) | **Agent 主动触发压缩（self-compact tool）** | 8 评论，2 👍 | 与今日 #120190 compaction 恢复 PR 相关，有很大被纳入可能 |
| [#6625](https://github.com/openclaw/openclaw/issues/6625) | **子 agent 超时前优雅预警** | 6 评论 | 易实现、体验改善大，可能作为 low-hanging fruit 合入 |
| [#71058](https://github.com/openclaw/openclaw/issues/71058) | **单网关多 Teams bot 支持** | 8 评论，1 👍 | 需求明确，但属较大架构改动 |
| [#63990](https://github.com/openclaw/openclaw/issues/63990) | **多索引 embedding 记忆 + 模型感知 failover** | 6 评论，1 👍 | 与记忆架构 PR 方向一致 |

**路线图信号**：综合 Issue 与 PR 来看，**「记忆架构的插件化与授权契约」**和**「上下文/压缩的可靠性与自主控制」**是当前最可能进入下一版本的两条主线。安全性（masked secrets）虽无直接 PR，但社区支持度高，且与多个安全标签 Issue 形成合力，值得维护者评估排期。

## 7. 用户反馈摘要

从高频评论与复现描述中提炼的真实用户痛点如下：

**① 配置/状态迁移不透明，升级即踩坑**
- [Issue #90378](https://github.com/openclaw/openclaw/issues/90378)：升级 5.28→6.1 时 cron store 静默迁移至 SQLite，用户完全不知晓，且新任务默认 `delivery.mode=announce` 导致报错。用户评论：「迁移过程对用户完全不可见，出了错才知道。」
- [Issue #94939](https://github.com/openclaw/openclaw/issues/94939)：6.x 迁移 SQLite 后文件 0 字节，MS Teams 主动发送失效。用户尤其在意「孤儿引用」造成的连锁故障。

**② 静默失败 / 丢消息难以自证与排查**
- [Issue #121058](https://github.com/openclaw/openclaw/issues/121058) 与 [#116277](https://github.com/openclaw/openclaw/issues/116277)：用户通过自建监控 cron 持续追踪此类故障，说明**对上游修复缺乏信心**，侧面反映可观测性（无诊断日志、无状态上报）不足。
- [Issue #105528](https://github.com/openclaw/openclaw/issues/105528)：exec/read 在 Windows 主会话中间歇返回空输出，子 agent 正常——用户描述为「最让人崩溃的就是它时好时坏」。

**③ 多 agent / 群聊场景下的上下文混乱**
- [Issue #56692](https://github.com/openclaw/openclaw/issues/56692)：多 agent 同群时，当前 agent 可能回复本应发给另一个 agent 的消息。用户感受：「在群聊里像一个抢话的参与者。」
- [Issue #47975](https://github.com/openclaw/openclaw/issues/47975)：子 agent 会话结束后仍持续占用，主会话变不可用。

**④ 正向信号：社区对工具效率改进期待高**
- [Issue #22438](https://github.com/openclaw/openclaw/issues/22438) 的分层 bootstrap 与 [#6757](https://github.com/openclaw/openclaw/issues/6757) 的 self-compact 均获得建设性讨论，用户愿意为 token 效率和自主控制提供详细场景说明，说明核心用户的工程化程度较高，对项目的投入度也较强。

## 8. 待处理积压

以下为长期未闭环、或已关闭但存在复发风险的重点 Issue，建议维护者优先关注：

| Issue | 创建时间 | 问题 | 状态 / 风险 |
|---|---|---|---|
| [#121058](https://github.com/openclaw/openclaw/issues/121058) | 2026-08-09 | #116277 关闭后静默失败复发 | 🔥 新开但根因未闭环，持续追踪信号 |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | 2026-02-06 | Masked Secrets 安全机制（P1） | 距今 6 个月，仍处讨论阶段，无 PR |
| [#45740](https://github.com/openclaw/openclaw/issues/45740) | 2026-03-14 | gh-issues skill 提示词注入（P1，需安全评审） | 3 月至今无 fix PR |
| [#31583](https://github.com/openclaw/openclaw/issues/31583) | 2026-03-02 | exec 不继承 skills env（P1 回归） | 有 linked PR 但未合入 |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | 2026-06-06 | Codex hook CPU 满载（P1） | 2 个月未解决，无新 fix PR |
| [#72015](https://github.com/openclaw/openclaw/issues/72015) | 2026-04-26 | active-memory 阻塞回复 + QMD 启动过载（P1） | 无 fix PR |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 2026-06-29 | 僵尸进程积累（P1） | 无新 fix PR |
| [#69208](https://github.com/openclaw/openclaw/issues/69208) | 2026-04-20 | 跨渠道重复 transcript/replay/context 伞形追踪（maintainer） | 8/10 仍在更新，涉及面广，但长期未收敛 |
| [#90265](https://github.com/openclaw/openclaw/issues/90265) | 2026-06-04 | 升级 5.28→6.1 cron store 静默迁移（P1） | 无 fix PR |
| [#78301](https://github.com/openclaw/openclaw/issues/78301) | 2026-05-06 | 插件加载器静默失败，调试成本高（2 👍） | 无 fix PR |

**结构性观察**：约 60% 的 P1/P2 积压 Issue 带有 `clawsweeper:no-new-fix-pr` 标签，意味着 ClawSweeper 机器人检查后也未发现新修复 PR。结合「320 条 PR 待合并」的数据，当前瓶颈更可能出现在**审查与合并环节**而非发现与提交环节。若要改善项目健康度，重点应放在提高 PR 审查吞吐与「关闭前验证」流程上。

---

*本日报数据来源：[github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)，时间窗口：2026-08-09 至 2026-08-10。*

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析报告

**日期：2026-08-10**

---

## 1. 生态全景

当前生态正处于「规模扩张后的可靠性阵痛期」：多项目同时暴露出消息丢失、静默失败、进程泄漏等稳定性问题，用户对"悄无声息出错"的容忍度已降至低点；安全加固（SSRF、CVE、提示词注入）成为跨项目并行推进的共识性动作；记忆与上下文管理正从"prompt 拼接技巧"走向架构化设计。社区贡献者参与热情高涨，但多个项目的 PR 合入率偏低（2%~36%），维护者审查带宽已成为制约生态健康度的共同瓶颈。整体呈现"功能供给充足、可靠性滞后于用户预期、治理机制需要补课"的阶段特征。

---

## 2. 各项目活跃度对比

| 项目 | Issue 更新 | PR 更新（合并/关闭占比） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（新开/活跃 428，关闭 72） | 500（合并/关闭 180，占 36%） | 0 | 生态级活跃；问题复发与 PR 审查压力并存 |
| **Hermes Agent** | 约 50（新开/活跃 47，关闭 3） | 约 50（合并/关闭 4，占 8%） | 0 | 响应速度快，桌面端 P0/P1 密集待验证 |
| **ZeroClaw** | 50（新开/活跃 38，关闭 12） | 50（合并/关闭 1，占 2%） | 0 | 存量 Bug 清理有成效；49 条 PR 积压严重 |
| **IronClaw** | 22（活跃 15，关闭 7） | 27（合并/关闭 8，占 30%） | 0 | QA bug-bash 机制有效，闭环效率较高 |
| **CoPaw** | 17（新开/活跃 11，关闭 6） | 50（合并/关闭 1，占 2%） | 0 | 社区热情高，但 review 吞吐严重不足 |
| **NanoClaw** | 1（新增） | 16（合并/关闭 0，占 0%） | 0 | 高提交、零合入，修复积压风险突出 |
| **NanoBot** | 5 | 15（合并/关闭 4，占 27%） | 0 | 工程质量稳步提升；安全漏洞无修复 PR |
| **PicoClaw** | 3（新开/活跃 2，关闭 1） | 6（合并/关闭 1，占 17%） | 0 | 小而精；SSRF 修复待合入，Matrix 关而未修 |
| **LobsterAI** | 3（新开 1，stale 2） | 0 | 0 | 维护停滞，4 个月无实质代码推进 |
| **Moltis** | 2（均为新 Bug） | 1（0 合并） | 0 | 稳定但响应偏慢，2 项新 Bug 无回应 |
| **NullClaw / ZeptoClaw** | 0 | 0 | 0 | 无活动 |

---

## 3. OpenClaw 在生态中的定位

**生态规模绝对领先。** OpenClaw 单日 500 条 Issue + 500 条 PR 的动态量级，是第二梯队（Hermes / ZeroClaw 约 50 条）的 10 倍，是无可争议的生态中心。

**核心优势：**
- **全栈覆盖**：唯一同时具备桌面端、移动端配对、WebUI、Control UI 与多协议网关（Slack Enterprise、Teams、Matrix、Telegram、Zalo 等）的"全家桶"项目；
- **可靠性前沿**：agent 原生 runLoop 三重守卫、有界 compaction、SQLite mmap 等，已从"功能交付"进入"稳定性深水区"；
- **架构演进**：memory 插件授权契约、跨渠道消息一致性治理，为多 Agent/多人场景打基础。

**相对差异：** 其他项目基本在单点发力——Hermes 押注桌面体验与本地推理，NanoBot 走极简嵌入式框架路线，PicoClaw/NanoClaw 聚焦渠道网关与容器分发，ZeroClaw 主打隐私安全。OpenClaw 是唯一试图覆盖"全渠道+全端+全功能"的平台型项目。

**核心风险：** 巨大的社区流量对维护治理形成了显著压力——已关闭 Issue 复发（#116277 → #121058）、180 条合并 VS 320 条待合并的吞吐缺口，都是头部项目特有的"成长烦恼"。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **消息可靠性 / 静默失败** | OpenClaw、Hermes、PicoClaw、CoPaw | OpenClaw #116277 静默无回复复发；Hermes #82756 桌面端数据第三次丢失；PicoClaw #3203 Matrix 同步静默失联；CoPaw #6826 耗时显示失真 |
| **安全加固** | NanoBot、PicoClaw、ZeroClaw、NanoClaw、OpenClaw | NanoBot #5305/#5306 exec 白名单绕过；PicoClaw #3322-#3324 多渠道 SSRF；ZeroClaw #9565 webhook 无认证；NanoClaw #3207 tar CVE；OpenClaw #45740 提示词注入 |
| **Token / 上下文成本可观测性** | NanoBot、LobsterAI、OpenClaw、IronClaw | NanoBot #5266 百万级 token 消耗无法追踪；LobsterAI #1187 上下文窗口不可配；OpenClaw #22438 分层 bootstrap；IronClaw #6046 单任务 124 次工具调用 |
| **记忆架构升级** | OpenClaw、CoPaw、NanoBot | OpenClaw #121221 memory 授权契约；CoPaw ReMe4 路线图 + reranker PR；NanoBot #5302 Dream 工具集不匹配 |
| **渠道接入多元化** | PicoClaw、NanoClaw、IronClaw、OpenClaw | PicoClaw Telegram 原生表格/IRC 长消息；NanoClaw Dial 渠道；IronClaw Web Push/PWA；OpenClaw Zalo/Slack Enterprise 适配 |
| **配置与状态可观测性** | ZeroClaw、Moltis、CoPaw、OpenClaw | ZeroClaw #9779 SOP 静默不加载；Moltis #1187 UI 静默重置配置；CoPaw #5584 ascend-vllm 连接失败无诊断；OpenClaw #90378 cron store 静默迁移 |
| **桌面 / 移动端体验** | Hermes、OpenClaw、CoPaw | Hermes #63047 桌面冻结；OpenClaw #121286 WebView 静默无操作；CoPaw #6281 移动端适配缺失 |

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 技术 / 架构关键特征 |
|---|---|---|---|
| **OpenClaw** | 全渠道全端个人 AI 助手平台 | 个人/团队/自托管极客 | 单一仓库 + agent 原生运行时 + 多渠道适配器 + 多端 UI；插件化 memory 契约 |
| **Hermes Agent** | 桌面优先的 AI 伴侣 | 桌面原生用户、偏好本地模型者 | 桌面应用 + gateway 分离；本地 llama.cpp 集成；cron 自动化 |
| **NanoBot** | 极简可嵌入 Agent 框架 | 开发者 / 嵌入到现有产品 | 极简核心 + 钩子机制；OpenAI 兼容 API；Docker 友好 |
| **PicoClaw** | 轻量多渠道消息网关 | 自托管轻量部署用户 | 消息网关 + channel 适配；强调资源占用低；当前聚焦 SSRF 安全面收敛 |
| **NanoClaw** | 容器化安全加固 Agent | 企业 / 运维侧 | Hardened prebuilt image + CVE 门禁 + Docker Hub 分发；面向供应链安全 |
| **IronClaw** | 自动化例程 / 工作流中台 | 团队自动化场景 | Rust 后端；QA bug-bash 机制成熟；Web Push / PWA 通知；tool-search 增强 |
| **ZeroClaw** | 隐私与安全优先的 Agent 平台 | 安全敏感组织 / 极客 | Rust 实现；webhook 安全、sops、可验证意图；RFC 驱动治理；区块链标识符支持 |
| **CoPaw** | 面向中文用户的增强助手 | 中文用户 / DeepSeek 与国产模型生态 | DeepSeek V4 大上下文适配；审批流 UI；ReMe 记忆检索；移动端缺失 |
| **Moltis** | Apple 生态内的沙箱 Agent | Apple 用户 | Apple Container 沙箱；vault 助记词管理；UI 配置一致性 |
| **LobsterAI** | 多模型配置管理工具 | 多 Provider 用户 | 模型切换 / 上下文配置；当前维护活跃度低 |

---

## 6. 社区热度与成熟度

**活跃度分层：**

| 层级 | 项目 | 特征 |
|---|---|---|
| 第一梯队（生态级） | OpenClaw | 日更新 500+500，量级碾压，社区生态中心 |
| 第二梯队（高活跃） | Hermes、ZeroClaw、IronClaw、CoPaw | 日更新 20~50 条，问题反馈与开发修复并行 |
| 第三梯队（中活跃） | NanoBot、NanoClaw、PicoClaw | 日更新 5~20 条，聚焦安全修复与功能增强 |
| 第四梯队（低活跃） | Moltis、LobsterAI | 日更新 <5 条，维护响应迟缓 |
| 停滞 | NullClaw、ZeptoClaw | 无任何社区活动 |

**阶段判断：**
- **快速迭代 + 可靠性攻坚期**：OpenClaw（无界重试/消息丢失专项修复）、Hermes（P0 数据丢失响应）、IronClaw（QA bug-bash 集中收敛）
- **质量巩固期**：NanoBot（测试基建/文档完善）、PicoClaw（SSRF 安全面审查）、Moltis（安全与可用性小步修正）
- **提交/合入失衡期**：NanoClaw（0% 合入率）、CoPaw / ZeroClaw（2% 合入率）——社区产出旺盛，但维护者吞吐成为瓶颈
- **低维护 / 停滞期**：LobsterAI（4 个月无代码推进）、NullClaw、ZeptoClaw（无活动）

---

## 7. 值得关注的趋势信号

1. **可靠性已取代新功能成为第一优先级。「** 静默失败」和「丢消息」在多项目中反复出现，用户开始用自建监控 cron 来追踪上游是否真的修复（OpenClaw #121058）。对开发者的参考价值：**可观测性设计（诊断日志、状态上报、可恢复机制）应作为 MVP 的一部分，而非事后补充。**

2. **安全左移正在发生。** SSRF、exec 白名单绕过、webhook 无认证、CVE 门禁——安全不再只是"发布前检查"，而是嵌入 CI 与架构设计（NanoClaw #3208 的 CVE gate、PicoClaw 对全渠道 SSRF 面的一次性收敛）。**安全现在是进入生产环境的入场券。**

3. **Token 成本透明化成为刚需。** NanoBot 用户 2 小时百万级 token 消耗无追踪、IronClaw 简单任务 124 次工具调用——大模型 API 成本敏感型用户正在要求**调用级计量与可视化**。成本可观测性可能成为下一波"标配功能"。

4. **记忆架构从"功能"走向"平台能力"。** OpenClaw 的 memory 授权契约、CoPaw 的 ReMe4 路线图、NanoBot 的 Dream 修复——各项目在独立构建记忆的分层、隔离、检索与授权机制，**统一接口标准尚未出现**，存在生态机会。

5. **渠道聚合进入深水区。** 从"能不能连"进化为"连得安全（SSRF）、连得漂亮（表格富文本）、连得可靠（sync 断线重连）"——PicoClaw Telegram 原生渲染、IronClaw Web Push、OpenClaw Slack Enterprise 修复都指向这一趋势。

6. **桌面端体验是尚未被征服的阵地。** Hermes 桌面冻结、OpenClaw WebView 交互缺陷、CoPaw 移动端缺失——**端上体验（含无障碍支持）是当前用户满意度的重要短板**，也是差异化竞争的机会窗口。

7. **开源治理瓶颈将决定下一轮竞争。** 多数项目 PR 合入率不足 30%，NanoClaw / CoPaw / ZeroClaw 甚至低于 5%。在社区贡献意愿充沛的前提下，**维护者审查带宽与流程治理（自动合并、批量处理、RFC 决策时限）成为项目健康度的核心变量**。

---

*本报告基于 2026-08-10 各项目 GitHub 社区动态数据生成。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-10

## 1. 今日速览

过去 24 小时内 NanoBot 项目保持高度活跃：共产生 5 条 Issue 更新和 15 条 PR 更新，其中 4 个 PR 已合并/关闭。值得注意的是，两个安全相关的 Issue（#5305、#5306）指向了 `exec.allowPatterns` 的 shell 链式调用绕过漏洞，需要维护者优先关注。此外，社区对 token 消耗透明化（#5266）的讨论热度持续升温，已有对应 PR #5299 在推进中。整体来看，项目迭代节奏紧凑，功能开发与安全加固并行推进，但安全问题的修复 PR 尚未出现，建议尽快响应。


## 2. 版本发布

过去 24 小时内无新版本发布。


## 3. 项目进展

今日共有 4 个 PR 被合并/关闭，为项目带来以下改进：

- **强化用户路径测试与 CI 门槛**（[PR #5308](https://github.com/HKUDS/nanobot/pull/5308)）：chengyongru 提交，新增交互式 CLI、WebUI 聊天 fork、版本检查、路由认证等用户路径测试，并引入 V8 coverage 报告与强制门槛，同时清理了 WebUI 测试中的真实网络请求泄漏。合并日期：2026-08-09。
- **修复 WebUI 语音输入的 HTTPS 要求说明**（[PR #5304](https://github.com/HKUDS/nanobot/pull/5304)）：chengyongru 提交，区分了不安全的 HTTP 来源与浏览器本身不支持录音的情况，并在所有语言环境中添加可操作的 HTTPS 要求提示，同时补充了 LAN 访问的安全 HTTPS 选项文档。合并日期：2026-08-09。
- **恢复 Star History 图表**（[PR #5307](https://github.com/HKUDS/nanobot/pull/5307)）：Mubelotix 提交，因原项目被 GitHub 限制而移除的 Star 历史图，现在通过新的 provider 恢复，且不受近期 GitHub 限制影响。合并日期：2026-08-09。
- **GitAgent Protocol 支持 PR 被关闭**（[PR #4019](https://github.com/HKUDS/nanobot/pull/4019)）：该 PR 为 nanobot 添加 GitAgent Protocol（agent.yaml + SOUL.md）支持，但最终被关闭，原因未说明，可能涉及路线图调整或实现方案变化。

**小结**：今日合并的 PR 主要集中在测试基建、WebUI 可用性与文档完善上，项目在工程质量与用户体验细节上持续打磨。GitAgent Protocol 支持的关闭是路线图信号，值得关注。


## 4. 社区热点

- **[Issue #5266 — 关于 token 消耗的可观测性需求](https://github.com/HKUDS/nanobot/issues/5266)**（评论 13 条）— 该 Issue 由 knoppix2 在 8 月 6 日提出，讨论热度持续至今，是当前最受关注的议题。用户反馈 nanobot 在没有明显活动的情况下 2 小时内消耗了高达百万级 token，强烈希望记录每次调用的 token 消耗明细。这一诉求直接催生了 PR #5299（结构化 token 使用记录），说明社区对成本透明化的需求非常迫切。

这一热点背后反映出大模型 API 成本敏感型用户对资源消耗可控性的核心诉求，也是 AI 应用走向生产环境时必须解决的运营问题。


## 5. Bug 与稳定性

按严重程度排列：

**严重 — Security（2 项）**

- **[Issue #5305 — `exec.allowPatterns` 白名单绕过，可经 OpenAI 兼容 API 执行链式 shell 命令](https://github.com/HKUDS/nanobot/issues/5305)** — 攻击者可通过 API 绕过 allowlist 限制执行额外的 shell 命令片段。**目前尚无修复 PR**。
- **[Issue #5306 — `exec.allowPatterns` shell 链式绕过导致非预期命令执行](https://github.com/HKUDS/nanobot/issues/5306)** — 与 #5305 同源，同样涉及 exec 工具的命令白名单绕过，属于安全问题。**目前尚无修复 PR**。

**中等 — Bug（2 项）**

- **[Issue #5295 — Docker Compose 部署失败：`/usr/local/bin/entrypoint.sh: Permission denied`](https://github.com/HKUDS/nanobot/issues/5295)** — 用户按官方文档使用 Docker Compose 部署时，容器启动失败，报权限错误。有 5 条评论，暂无明确的修复 PR 关联。
- **[Issue #5311 — Agnes AI 自定义 provider 将嵌套对象工具参数双重编码为 JSON 字符串](https://github.com/HKUDS/nanobot/issues/5311)** — 使用 Agnes AI 作为模型 provider 时，带嵌套对象参数的 MCP 工具调用报 `MCP error -32602` 校验错误。今日新开，暂未分配。

**修复类 PR 在途（2 项）**

- **[PR #5302 — 修复 Dream 记忆整理期间调用不可用工具的问题](https://github.com/HKUDS/nanobot/pull/5302)** — Dream 运行中使用受限工具集，但提示词却来自通用 agent 构建逻辑，导致工具调用不匹配。
- **[PR #5303 — 修复天气工作流在 Windows 上不兼容的问题](https://github.com/HKUDS/nanobot/pull/5303)** — PowerShell 中裸 `curl` 会解析为 `Invoke-WebRequest` 别名，导致天气命令首次执行失败。


## 6. 功能请求与路线图信号

- **Token 使用记录可观测性**（[Issue #5266](https://github.com/HKUDS/nanobot/issues/5266)）：用户强烈要求记录每次调用的 token 消耗。已有对应 PR **[#5299](https://github.com/HKUDS/nanobot/pull/5299)**（chengyongru，8 月 8 日创建）正在推进，计划持久化最近 50 条 token 使用记录，并新增 `GET /api/settings/usage/records?day=YYYY-MM-DD` 接口。很可能纳入下一版本。
- **API 服务状态真实性**（[PR #5255](https://github.com/HKUDS/nanobot/pull/5255)）：Draft PR 提议让 WebUI 的 API 服务器面板准确反映非 gateway 启动的 `nanobot serve` 实例状态，并新增 `nanobot api status` 命令。目前仍为草稿状态。
- **模型无关的计算机使用能力**（[PR #4276](https://github.com/HKUDS/nanobot/pull/4276)）：提议新增 `browser`（DOM 自动化）与 `computer_use`（截图 + 鼠标键盘控制）工具，使普通工具调用模型无需猜测像素坐标即可操作计算机。该 PR 已开放 2 个月，存在冲突，仍在等待合并。
- **Agent Plugins 集成 CLI Apps**（[PR #5288](https://github.com/HKUDS/nanobot/pull/5288)）：计划将 Agent Plugins v1 集成到 CLI Apps 中，使 nanobot 成为通用宿主，插件可独立演进。该方向与 nanobot 极简核心、可扩展边缘的定位一致。

综合来看，token 可观测性几乎确定会进入下一版本；API 状态显示与 Agent Plugins 是中期值得关注的路线图信号；计算机使用能力则属于探索性功能，落地周期可能较长。


## 7. 用户反馈摘要

- **Token 消耗不透明（强烈不满）**：用户 knoppix2 反映 nanobot 在 2 小时内无可见活动的情况下消耗百万级 token，且无从追踪。这一反馈表明成本可控性已成为用户在实际使用中最关心的痛点之一，尤其是在长时间运行或后台任务场景下。
- **部署体验受影响**：用户 Bennett-Yang 在按官方文档使用 Docker Compose 部署时遭遇 permission denied 错误，导致服务无法启动。部署文档与实际行为之间的偏差影响了新用户的上手体验。
- **特定 provider 兼容性问题**：用户 albatrossflyon-coder 报出 Agnes AI 的嵌套对象参数编码问题，说明自定义 provider 的兼容性仍需加强，特别是在 MCP 工具调用这类复杂交互场景中。


## 8. 待处理积压

**长期未合并的 PR：**

- **[PR #4276 — 模型无关的 computer use（browser + computer_use 工具）](https://github.com/HKUDS/nanobot/pull/4276)**：自 6 月 10 日创建以来已开放 2 个月，目前有冲突标记（conflict），需要维护者介入处理冲突并做出合并决策。该 PR 涉及的功能方向较为前沿，是否纳入主线值得讨论。
- **[PR #4019 — GitAgent Protocol 支持（agent.yaml + SOUL.md）](https://github.com/HKUDS/nanobot/pull/4019)**：今天被关闭，但未说明具体原因。如果该功能符合项目路线图，建议维护者与作者沟通后续推进方式。

**长期未响应的 Issue：**

- **[Issue #5266 — Token 消耗日志需求](https://github.com/HKUDS/nanobot/issues/5266)**：8 月 6 日创建，已持续 4 天并在今天仍然活跃，不过已有 PR #5299 在推进，风险可控。

**需要优先关注的安全问题：**

- **[Issue #5305](https://github.com/HKUDS/nanobot/issues/5305) 与 [Issue #5306](https://github.com/HKUDS/nanobot/issues/5306)**：两个安全漏洞均与 `exec.allowPatterns` 白名单绕过相关，已报告 1 天但尚无修复 PR。建议维护者优先处理，评估影响范围并尽快发布安全修复版本。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-10

## 今日速览
过去24小时项目共产生约50条Issue更新（新开/活跃47条，关闭3条）和50条PR更新（待合并46条，合并/关闭4条），无新版本发布。项目处于高度活跃的社区反馈与开发修复期：大量新Bug被报告，同时开发者迅速提交了对应修复PR（如#82811、#82832、#82809等）。值得注意的是，桌面端严重问题（会话数据丢失、UI冻结）再次成为焦点，且cron功能存在影响面较广的重复Bug报告。整体来看，项目响应速度快，但部分历史遗留问题的修复仍未彻底闭环。

## 版本发布
无新版本发布。

## 项目进展
今日有1个PR关闭：#46634（桌面应用俄语本地化），该项目为约1000行UI字符串提供了完整俄语翻译，约耗时2个月后终于关闭，为国际化铺平了道路。同时有3个Issue被关闭：跟踪问题#82616（gateway会话连续性被破坏）和两个重复Bug报告#82442、#74411（桌面SSH版本检查逻辑错误），前者建议深入跟踪，后者可减少维护者的重复处理负担。

**值得关注的新进PR**（均在审查中，尚未合并）：
- **#82811** 修复P0数据丢失问题#82756（截断序数地址空间及误操作恢复），解决方案覆盖三方面，是今日最重要修复方向之一。链接: NousResearch/hermes-agent PR #82811
- **#82832** 限制桌面端journal持久化的同步写入，针对#63047的桌面冻结问题，是稳定性的关键改进。链接: NousResearch/hermes-agent PR #82832
- **#82833** 修复终端管道模式下后台shell挂起导致tty卡死的问题。链接: NousResearch/hermes-agent PR #82833
- **#82809** 将本地llama.cpp空400响应分类为可重试的瞬时错误，避免整个turn被非重试性中断。链接: NousResearch/hermes-agent PR #82809
- **#82827** 实现cron任务链式触发（#15831的功能），一个等待已久的自动化能力。链接: NousResearch/hermes-agent PR #82827

这些PR虽未合并，但密集提交表明团队正在系统性地处理社区报告的高优问题，修复覆盖面从数据安全、桌面稳定性，到终端可靠性和自动化能力扩展。

## 社区热点
评论最活跃的Issue反映了当前用户的核心痛点：

- **#63047**（19条评论）：桌面应用在约5条消息后几乎完全冻结，包括设置界面都无法打开。用户详细描述“不仅是输入卡顿，而是整个UI锁死”，社区共鸣强烈，这是当前最影响使用体验的问题之一。已有PR #82832尝试改善持久化写入阻塞，但根治可能还需更多工作。链接: NousResearch/hermes-agent Issue #63047
- **#26689**（13条评论）：盲人VoiceOver用户的无障碍支持请求。该用户详细描述了Hermes强大的后端和Agent生态，但桌面UX对屏幕阅读器极不友好。这一需求虽然已有3个月历史，但始终未获得实施，呼吁开发者关注包容性设计。链接: NousResearch/hermes-agent Issue #26689
- **#82616**（7条评论）：gateway会话连续性因state.db FTS损坏而断裂，产生孤儿会话和过期恢复。这是一个深层的系统设计缺陷，问题已关闭但结论仍值得跟踪。链接: NousResearch/hermes-agent Issue #82616
- **#66824 / #71987**（各6条评论）：两个重复的cron任务创建TypeError问题。用户反复遇到“`'<=' not supported between instances of 'str' and 'int'`”错误，且list操作正常、create/update全部失败，直接影响自动化任务配置。重复报告说明该Bug在实际使用中被频繁触发。链接: NousResearch/hermes-agent Issue #66824 、 NousResearch/hermes-agent Issue #71987

社区诉求集中于：桌面端稳定性补救、无障碍可访问性、自动化任务可靠性以及数据不丢失的保障。

## Bug 与稳定性
按严重程度排列，标注修复状态：

### 🔴 P0
- **#82756**：桌面端普通Enter键提交静默删除约65条历史消息，且这是第三次同类事件（前两次#70516、#80763）。已有PR #82811修复截断序数地址空间，并让误操作可恢复。链接: NousResearch/hermes-agent Issue #82756
- 对应PR：#82811（待合并）。链接: NousResearch/hermes-agent PR #82811

### 🟠 P1
- **#63047**：桌面应用约5条消息后完全无响应，包括设置也被锁死。主要影响macOS beta 27用户。已有PR #82832限制同步持久化写入量，但仍需验证彻底解决。链接: NousResearch/hermes-agent Issue #63047
- **#82616**：gateway会话连续性被破坏，数据库损坏导致孤儿会话与过期恢复。该问题已关闭，但其追踪性质可能意味着修复方向已确认。链接: NousResearch/hermes-agent Issue #82616
- **#82770**：测试会话泄漏至生产state.db，存在700+条垃圾开放会话，反映测试基础设施隔离不足。链接: NousResearch/hermes-agent Issue #82770

### 🟡 P2
- **#66824 / #71987**（重复）：cron任务创建/更新时的TypeError，目前无直接修复PR，但已被确认重复。链接: NousResearch/hermes-agent Issue #66824 、 NousResearch/hermes-agent Issue #71987
- **#77211**：`hermes update`在已是最新时跳过Node.js依赖刷新，导致历史npm安装失败无法修复。链接: NousResearch/hermes-agent Issue #77211
- **#75097**：迭代预算语义不一致（默认90 vs execute_code只退一个limiter），影响任务执行上限的准确性。链接: NousResearch/hermes-agent Issue #75097
- **#80125**：微信适配器将`ret=-2`误报为频率限制，实际是缺失context_token，导致30秒熔断却隐藏真实原因。链接: NousResearch/hermes-agent Issue #80125
- **#80841**：Fastmail删除事件确认组件无法从CLI/TUI/Matrix完成，工作流被阻塞。链接: NousResearch/hermes-agent Issue #80841
- **#78190**：Gmail MCP网关进程与CLI认证行为不一致，网关侧注册404失败。链接: NousResearch/hermes-agent Issue #78190
- **#80560**：Windows桌面插件导致React #310崩溃，应用启动即崩溃，v0.20.0受影响。链接: NousResearch/hermes-agent Issue #80560

### 🟢 P3 及新提交
- **#79314**：Edge TTS静默回退到整体合成，文档承诺的句子级流式未生效。链接: NousResearch/hermes-agent Issue #79314
- **#82805**：本地llama.cpp空400响应（已有PR #82809修复）。链接: NousResearch/hermes-agent Issue #82805
- **#82806 / #82807 / #82836**：macOS桌面端睡眠恢复后聊天记录消失、侧栏悬停文字消失、mermaid图表点击展开空白，均是桌面端UI/状态管理的细节稳健性问题。

## 功能请求与路线图信号
- **cron链式触发**（#15831）：用户期待已久的“在另一个任务完成后运行任务B”功能，现已由PR #82827实现`trigger_on_complete`，正等待合并，是明确纳入下一版本的高概率功能。链接: NousResearch/hermes-agent Issue #15831 、 NousResearch/hermes-agent PR #82827
- **delegate_task跨配置文件子代理**（#41889）：让子任务在不同身份和运行时配置下执行，是Agent能力扩展的重要方向。目前处于needs-decision状态，需要架构决策。链接: NousResearch/hermes-agent Issue #41889
- **无障碍改进**（#26689）：VoiceOver用户的系统性需求，但尚无对应实施PR，需要路线图支持。链接: NousResearch/hermes-agent Issue #26689
- **Kanban零权限工人等EPIC**（#82591）：包含详细计划的重大功能提案，等待决策，若采纳将改变项目的工作流架构。链接: NousResearch/hermes-agent Issue #82591
- **`agent.max_turns`支持unlimited**（PR #67696）：允许用户显式设置“无限制”迭代次数，当前仍待合并。链接: NousResearch/hermes-agent PR #67696
- **Gateway opt-in footer元数据扩展**（PR #18188）：已有约3个月历史，近期有更新，如果合并将增加提供者、账户、推理开销等运行时元数据，增强可观测性。

## 用户反馈摘要
- **桌面冻结是最大痛点**：#63047用户反映“不是普通的卡，是整个UI都锁死，设置也打不开”，这种级别的故障严重削弱了用户对桌面端稳定性的信任。
- **历史数据丢失引发焦虑**：#82756用户强调“这是第三次发生（前两次分别为308条和244条消息丢失）”，前两次的修复并未封堵该路径，用户对数据安全感到极度不安。
- **cron功能存在普遍可用性障碍**：#66824与#71987的用户相互独立但遇到同样的TypeError，说明该问题在常见配置下必然触发，官方应该尽快统一修复。
- **无障碍需求被长期忽视**：#26689用户直言“Hermes的UX对屏幕阅读器用户非常困难”，社区已有回应，但缺乏进展会让这部分用户继续流失。
- **SSH远程模式的误导性错误**：#74411/#82442用户反馈，版本检查总是误报不支持远程调试功能，即使远程已是最新版本也无法使用预期功能。

## 待处理积压
- **#26689（5月16日创建，近3个月）**：无障碍功能请求，13条评论，社区呼声高但无实施计划，建议维护者明确时间表或征集贡献者。链接: NousResearch/hermes-agent Issue #26689
- **#15831（4月26日创建，近3个半月）**：cron链式触发请求，虽然PR #82827已提交，但尚未合并，长期积压的Issue会加剧用户对于需求不被重视的感受。链接: NousResearch/hermes-agent Issue #15831
- **#41889（6月8日创建，2个月）**：跨配置文件子代理功能，仍处于needs-decision阶段，如果确定要进入路线图，应尽早规划。链接: NousResearch/hermes-agent Issue #41889
- **#46064（6月14日创建）**：OpenRouter路由模型被工具支持过滤器静默隐藏，用户无法在`hermes model`中看到官方推荐的模型，需手动编辑配置文件，易用性Bug但长时间未修复。链接: NousResearch/hermes-agent Issue #46064
- **PR #18188（5月1日创建）**：Gateway footer元数据扩展，3个月未合并，近期有更新，建议维护者评估是否纳入近期版本。链接: NousResearch/hermes-agent PR #18188

---

**项目健康度总结**：项目社区活跃度高、维护者响应快、修复PR频率高，整体处于正向迭代中。但桌面端稳定性和数据安全问题是当前最值得关注的健康度风险，需要在下个版本中重点解决；同时需要移除重复Bug的障碍，并回应无障碍等长期被搁置的需求。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-08-10**  
**数据窗口：2026-08-09 ~ 2026-08-10**

---

## 1. 今日速览

过去 24 小时项目保持较高的开发活跃度，共产生 3 条 Issue 更新（2 条新开/活跃，1 条关闭）和 6 条 PR 更新（5 条待合并，1 条已合并/关闭）。**安全加固**是当前最集中的工作方向：社区连续提交 3 个针对渠道媒体下载 SSRF 漏洞的修复 PR（#3322、#3323、#3324），覆盖 WeCom、Weixin 及 QQ/Telegram/Discord 等主流渠道。功能开发方面，Telegram 表格富文本渲染（#3325 → #3327）形成了完整的 "Issue + PR" 联动，有望进入下一版本；IRC 长消息支持（#3287）仍处于需求讨论阶段。整体项目健康度良好，唯 #3203（Matrix 同步静默宕机）虽已关闭但长期未得到真正的修复方案，值得关注。

---

## 3. 项目进展

### 今日合并/关闭

- **[PR #3326] fix(web): remove duplicate pnpm lock entries** — 已合并  
  修复 `web/frontend/pnpm-lock.yaml` 中重复的 `semver@7.8.5` 映射条目，解决 `pnpm install --frozen-lockfile` 因 `ERR_PNPM_BROKEN_LOCKFILE` 失败的问题。虽然是小的维护性修复，但消除了 CI 和本地构建的阻塞点。  
  🔗 https://github.com/sipeed/picoclaw/pull/3326

### 待合并（未合并但已在推进）

- **[PR #3322] fix(channels): block private targets on inbound media downloads** — 核心安全修复  
  为 QQ / Telegram / Discord / LINE / Slack 的入站附件下载添加 `BlockPrivateTargets` SSRF 加固，阻止媒体 URL 重定向到 loopback、link-local 或 RFC1918 内网地址。  
  🔗 https://github.com/sipeed/picoclaw/pull/3322

- **[PR #3323] fix(wecom): use CreateSafeHTTPClient for media downloads** — 同系列安全修复  
  🔗 https://github.com/sipeed/picoclaw/pull/3323

- **[PR #3324] fix(weixin): use CreateSafeHTTPClient for media downloads** — 同系列安全修复  
  🔗 https://github.com/sipeed/picoclaw/pull/3324

- **[PR #3327] feat(telegram): render tables with native rich messages** — 功能新增  
  检测 GFM 表格和 HTML `<table>` 块，以 Telegram Bot API 原生 rich message 呈现，替代 monospaced code block。  
  🔗 https://github.com/sipeed/picoclaw/pull/3327

- **[PR #3222] refactor(deltachat): cleanup implementation, documentation -200LOC** — 代码精简  
  移除遗留特性、过时测试和密码认证，改为引用官方 relay list 并新增完整文档章节，净减 200 行代码。  
  🔗 https://github.com/sipeed/picoclaw/pull/3222

> **整体判断**：项目处于"安全加固 + Telegram 功能增强"的双轨推进状态。SSRF 修复系列合入后将显著提升多渠道媒体处理的整体安全性；Telegram 表格渲染是提升用户体验的直接功能改进。deltachat 重构持续迭代，反映项目对多协议支持的长期投入。

---

## 4. 社区热点

### 最热议题：Matrix 同步宕机问题（#3203）

- **数据**：评论 8 条，👍 2 个，⚠️ 已标记 stale 并关闭（更新时间 2026-08-09）
- **诉求分析**：用户报告 Matrix 渠道的 `/sync` 长轮询在网络中断或 homeserver 重启后永久死亡，且因主进程存活导致 systemd `Restart=on-failure` 无法触发。这是"静默故障"型问题，最具破坏力——表面上进程健康，实际渠道已失去同步。8 条评论表明多位用户可能遇到类似问题。该 Issue 虽被关闭，但关闭状态是否意味着有修复方案（或只是 staleness 清理）存疑。
- 🔗 https://github.com/sipeed/picoclaw/issues/3203

### Telegram 表格渲染（#3325 → PR #3327）

- Issue #3325 由用户 As-tsaqib 在 8 月 9 日提出，同日该作者即提交了对应 PR #3327，形成"提需求即实现"的高效闭环。虽然评论数暂为 0，但 Issue 与 PR 的快速配对反映了：1) 用户对 Telegram 原生表格 UI 的明确需求；2) 项目对社区反馈的响应速度。
- 🔗 https://github.com/sipeed/picoclaw/issues/3325  
- 🔗 https://github.com/sipeed/picoclaw/pull/3327

### IRC 长消息支持（#3287）

- 4 条评论，讨论如何让 PicoClaw 将 IRCv3 中超过 512 字节被客户端拆分发送的长消息识别为单一 cohesive message。这触及 IRC 协议的经典限制与用户体验之间的矛盾。
- 🔗 https://github.com/sipeed/picoclaw/issues/3287

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | 问题 | 状态 | 是否有 Fix PR |
|---------|------|------|--------------|
| **高** | **SSRF 漏洞 — 多渠道入站媒体下载可访问内网**：QQ/Telegram/Discord/LINE/Slack（#3322）、WeCom（#3323）、Weixin（#3324）在下载媒体文件时未阻止重定向到 loopback/私网地址，可能被恶意 URL 利用发起 SSRF 攻击。 | OPEN（3 个修复 PR 待合并） | ✅ 有，等待 review |
| **高** | **Matrix 同步循环无重连逻辑**（#3203）：网络中断或服务器重启后 sync 永久停止，且无自动重启机制，用户需手动干预。 | CLOSED（stale） | ❌ 未见对应修复 PR |
| **中** | **pnpm lockfile 重复 key**（#3326）：`semver@7.8.5` 重复映射导致 `--frozen-lockfile` 安装失败。 | 已合并 | ✅ 已修复 |

🔗 SSRF 相关：https://github.com/sipeed/picoclaw/pull/3322 | https://github.com/sipeed/picoclaw/pull/3323 | https://github.com/sipeed/picoclaw/pull/3324  
🔗 Matrix：https://github.com/sipeed/picoclaw/issues/3203

> **健康度提示**：SSRF 系列修复若合入，将填补多个渠道的安全缺口，建议维护者优先 review。Matrix 故障虽被 stale 关闭，但这是真实运行环境中会反复出现的隐患，建议重新打开或至少确认有替代修复计划。

---

## 6. 功能请求与路线图信号

### 新功能需求（2026-08-09 更新）

| 需求 | 来源 | 对应 PR 或实现迹象 | 进入下一版本可能性 |
|------|------|-------------------|-------------------|
| **Telegram 原生表格渲染** | Issue #3325 | PR #3327（已提交） | ⭐⭐⭐ **高** — PR 已就绪，ETA 取决于 review 速度 |
| **IRC 长消息聚合** | Issue #3287 | 暂无 | ⭐⭐ 中 — 有需求讨论但未开始实现，需确认 IRCv3 消息 ID 语义后设计 |
| **Matrix 重连机制** | Issue #3203（已关闭） | 暂无 | ⭐ 存疑 — 已被 stale 关闭，若无新 Issue 提出可能不在近期路线图 |

### 路线图信号

- **安全加固**成为当前主旋律：从 OneBot 已有的 `BlockPrivateTargets` 扩展到所有渠道，暗示项目在系统性地审查媒体处理的 SSRF 风险面。这一系列 PR（#3322-#3324）若合并，可能构成一个"安全加固里程碑"。
- **deltachat 重构**（PR #3222）持续 1 个月以上未合并，可能等待更深入的 review 或功能完整性确认，但方向明确（精简、现代化配置、文档完善）。

🔗 https://github.com/sipeed/picoclaw/issues/3325 | https://github.com/sipeed/picoclaw/pull/3327  
🔗 https://github.com/sipeed/picoclaw/issues/3287

---

## 7. 用户反馈摘要

### 来自 Issues 评论的真实声音

- **Matrix 宕机痛点（#3203）**：用户 weissfl 描述的场景——"homeserver 重启后 PicoClaw 主进程存活但 Matrix 渠道静默失联"——是自托管用户最害怕的故障模式。由于 systemd 认为进程健康，运维监控难以自动发现，往往要等用户主动发消息无响应后才察觉。这反映出**渠道连接的健康检查/心跳机制**是当前产品的真实缺口。

- **IRC 长消息沮丧（#3287）**：superuser-does 指出 IRC 的 512 字节限制导致长消息被客户端自动拆分后，PicoClaw 会将其误解为多条独立消息，破坏语义连贯性。这是一个典型的**协议约束 vs. 用户体验**矛盾场景，用户期望 PicoClaw 能智能识别 IRCv3 的 batch/消息 ID 机制。

- **Telegram 富文本需求（#3325）**：As-tsaqib 的诉求很明确——"Markdown 表格退化为等宽代码块不如 Telegram 原生表格 UI 直观"。反映出用户对 **PicoClaw 渲染质量的要求**正在从"能发出去"升级为"发得漂亮"。

- **值得注意的信号**：SSRF 修复 PR（#3322-#3324）的提交者 SashaMIT 对多个渠道（QQ、Telegram、Discord、LINE、Slack、WeCom、Weixin）逐一修复，说明用户/贡献者对 **PicoClaw 作为聚合网关的安全边界有较高期待**，希望它能像一个安全的生产级组件而不是玩具项目。

---

## 8. 待处理积压

### ⚠️ 提醒维护者关注

| 项目 | 创建时间 | 搁置时长 | 状态 | 建议 |
|------|---------|---------|------|------|
| **PR #3222** — deltachat 重构 | 2026-07-03 | 38 天 | OPEN | 已有一个多月未合并，虽无冲突迹象但长期未 merge 可能积累 conflict 风险；建议确认是否需要原作者 rebase 或安排 review。 |
| **Issue #3203** — Matrix 同步无重连 | 2026-07-02（8/9 关闭） | — | CLOSED (stale) | 核心问题未解决却被 stale 关闭。建议重新打开，或将此纳入 roadmap；否则 Matrix 渠道的可靠性问题将继续潜伏。 |
| **Issue #3287** — IRC 长消息 | 2026-07-22 | 19 天 | OPEN | 已有明确需求描述和讨论，但无对应 PR。若可行，可考虑作为 "good first issue" 或排入 next milestone。 |
| **PR #3322 / #3323 / #3324** — SSRF 修复 | 2026-08-09 | <1 天 | OPEN | 虽不至于积压，但 3 个 PR 同日提交且涉及多个渠道的安全修复，建议合并 review，避免各自等待周期过长。 |

🔗 https://github.com/sipeed/picoclaw/pull/3222  
🔗 https://github.com/sipeed/picoclaw/issues/3203  
🔗 https://github.com/sipeed/picoclaw/issues/3287  
🔗 https://github.com/sipeed/picoclaw/pull/3322 | https://github.com/sipeed/picoclaw/pull/3323 | https://github.com/sipeed/picoclaw/pull/3324

---

*本报告基于 PicoClaw GitHub 仓库公开数据自动生成，数据截止 2026-08-10。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-08-10

## 今日速览

过去 24 小时 NanoClaw 项目活跃度维持高位：共产生 16 条 Pull Request 更新，覆盖 CLI 功能增强、权限日志修复、安全 CVE 修复、多模块重构与文档改进等多个方向，但 16 条 PR 全部处于待合并状态，合并节奏尚未跟上提交节奏。Issue 侧仅新增 1 条，聚焦于 `install_packages` 缺少 Python/pip 渠道，直接关系到 hardened-image 在 Python 依赖场景的采用门槛，属于对现有能力边界的重要反馈。今日无新版本发布，项目整体处于密集提交、等待合入的积压阶段。

---

## 项目进展

### 今日合并/关闭

过去 24 小时无 PR 被合并或关闭，16 条 PR 均停留在 Open 状态。以下为方向上值得关注的待合并 PR：

| PR | 说明 | 状态 |
|---|---|---|
| [#3208](https://github.com/nanocoai/nanoclaw/pull/3208) `[core-team] feat(ci): publish agent image to Docker Hub with CVE gates` | 新增手动触发的 CI 工作流，构建并推送 linux/amd64 + arm64 代理镜像到 Docker Hub，并为既有 hardened-pin 验证附加 CVE 门禁 | 待合并 |
| [#3207](https://github.com/nanocoai/nanoclaw/pull/3207) `[core-team] fix(container): bump pnpm and npm past fixable-critical tar CVE` | 修复 grype 标记的 GHSA-23hp-3jrh-7fpw（critical，tar < 7.5.19），升级 npm 与 pnpm 内嵌的 tar 依赖 | 待合并 |
| [#3218](https://github.com/nanocoai/nanoclaw/pull/3218) `feat(cli): accept bounded JSON from stdin` | 为 host 和 container 的 `ncl` 客户端新增 `--stdin-json` 输入模式，在不改动现有请求框架/调度器/权限体系的前提下支持有界结构化参数 | 待合并 |
| [#3214](https://github.com/nanocoai/nanoclaw/pull/3214) / [#3213](https://github.com/nanocoai/nanoclaw/pull/3213) / [#3212](https://github.com/nanocoai/nanoclaw/pull/3212) | 三连重构：统一模块生命周期钩子、注册 question renderers、新增模块级 migration registry，均为后续 skill/capability 扩展打基础 | 待合并 |
| [#3215](https://github.com/nanocoai/nanoclaw/pull/3215) `fix(permissions): redact DM resolution logs` | 修复权限解析日志对 DM（私信）解析过程的敏感信息泄露问题 | 待合并 |
| [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) / [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) | Dial 渠道适配器（SMS + AI 语音通话）及其 channel picker/向导集成，跨渠道扩展的重要一步 | 待合并 |

### 项目整体进展评估

虽然今日无合入，但 16 条待合并 PR 反映出项目在 **CLI 输入标准化、包管理能力边界、代理镜像分发与供应链安全、多渠道接入** 四个方向上均有实质推进。特别是 #3208（Docker Hub 发布 + CVE 门禁）与 #3207（tar 漏洞修复）若合入，将显著提升项目的镜像分发效率与供应链安全水位，建议维护者优先审查。

---

## 社区热点

今日无高评论量 Issue/PR（评论数均为 0 或未公开），但以下条目因触及面广、定位关键而值得聚焦：

- **[#3217](https://github.com/nanocoai/nanoclaw/issues/3217) `install_packages` 无 pip 渠道** — 新开 Issue，明确指出现有 `install_packages` 仅支持 `packages_apt` 与 `packages_npm`，缺少 Python 包渠道，导致依赖 pip 安装工具的项目无法采用 hardened prebuilt image。这条反馈直击镜像自定义能力的核心缺口，潜在影响面较大。

- **[#3208](https://github.com/nanocoai/nanoclaw/pull/3208) 代理镜像发布至 Docker Hub** — core-team 提交，涉及所有用户的镜像获取路径，属基础设施级改动，关注度高属预期。

- **[#3207](https://github.com/nanocoai/nanoclaw/pull/3207) tar CVE 修复** — 供应链安全相关，grype 在代理镜像中两次标记 critical 漏洞，修复涉及基础镜像 npm 与 pnpm 双工具链升级，安全敏感用户会重点关注。

**诉求分析**：整体社区声音集中在两点——**镜像自定义渠道的完整性**（#3217）与**镜像供应链的可信与可消费性**（#3208/#3207）。前者是功能边界问题，后者是工程基础设施问题，两者共同指向 hardened-image 路线的下一阶段成熟度。

---

## Bug 与稳定性

| 严重程度 | 条目 | 说明 | 修复 PR |
|---|---|---|---|
| **Critical（安全）** | [#3207](https://github.com/nanocoai/nanoclaw/pull/3207) | 代理镜像中存在 `tar` < 7.5.19 的可修复 critical 漏洞（GHSA-23hp-3jrh-7fpw），npm 10.9.8 与 pnpm 10.33.0 各带一个受影响版本，基础镜像刷新无法消除 | 已有 #3207（待合并） |
| **中等（隐私/日志）** | [#3215](https://github.com/nanocoai/nanoclaw/pull/3215) | 权限解析过程中 DM（私信）解析细节被写入日志，存在敏感信息暴露风险 | 已有 #3215（待合并） |
| **中等（功能缺陷）** | [#2529](https://github.com/nanocoai/nanoclaw/pull/2529) / [#3142](https://github.com/nanocoai/nanoclaw/pull/3142) | Signal 适配器的入站附件（图片/文件）被拼入容器内不存在的挂载路径，导致 agent 侧 Read 工具无法读取附件；非图片/音频附件（PDF、文本等）全部丢失 | 已有修复 PR（均为待合并状态） |
| **较低（功能缺陷）** | [#3209](https://github.com/nanocoai/nanoclaw/pull/3209) | Slack 渠道粘贴表格未正确传递至 agent | 已有修复 PR（待合并） |

> 注意：以上 Bug 的修复 PR 尚未进入合并流程，存在修复积压风险。

---

## 功能请求与路线图信号

- **[#3217](https://github.com/nanocoai/nanoclaw/issues/3217) — 为 `install_packages` 增加 Python/pip 渠道**：当前仅支持 apt 与 npm，Python 依赖用户无法走 derived-image 路径，进而无法采用 hardened prebuilt image。该 Issue 指向明确的路线图补丁，考虑到社区对 hardened-image 的采用诉求，**该功能极有可能被纳入下一版本**。

- **CLI 结构化输入 [#3218](https://github.com/nanocoai/nanoclaw/pull/3218)**：`--stdin-json` 通用输入模式，为自动化调用与脚本集成提供标准入口，属于开发者体验类增强，合入概率较高。

- **Dial 渠道接入 [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) / [#3050](https://github.com/nanocoai/nanoclaw/pull/3050)**：SMS + AI 语音通话渠道适配 + 安装向导集成，标志 NanoClaw 在多渠道（Slack/Signal/Dial）扩展上的持续推进，预计在后续版本中可选启用。

- **模块化/可扩展性重构（#3212-#3214, #3186）**：migration registry、生命周期钩子统一、question renderers 注册机制、skill-owned capabilities seam —— 这组重构为 skill 生态与第三方扩展铺路，虽不直接面向用户，但为路线图中的能力外延提供架构支撑。

---

## 用户反馈摘要

今日仅 1 条新 Issue，评论数据暂不充分，但从 Issue 内容与关联 PR 可提炼以下用户侧信号：

- **用户痛点（镜像自定义）**：[#3217](https://github.com/nanocoai/nanoclaw/issues/3217) 反映出 Python 生态用户在采用 hardened-image 时的真实阻塞——`install_packages` 无 pip 渠道意味着依赖 pip 工具的项目只能停留在自定义 Dockerfile 路径，无法享受预构建镜像的安全加固与运维便利。这既是功能缺口，也是采用门槛。

- **用户痛点（附件丢失）**：[#3142](https://github.com/nanocoai/nanoclaw/pull/3142) 的描述间接反映了真实使用场景——通过 Signal 发送 PDF、文本文档等非图片附件给 agent 时，路径不存在导致附件被静默丢弃；且该问题长期存在（5 月即提出修复 PR #2529），对依赖 Signal 渠道处理多类型文件的用户影响持续累积。

- **社区满意度信号**：core-team 成员密集提交安全与 CI 改进（#3207/#3208），说明项目内部对供应链安全与镜像分发的重视度持续走高；外部贡献者的重构与文档 PR（#3211-#3216）亦反映贡献者生态活跃，整体社区对项目发展方向的参与度较为积极。

---

## 待处理积压

以下 PR/Issue 长期未合并或未解决，建议维护者关注：

| 条目 | 创建时间 | 持续时间 | 说明 |
|---|---|---|---|
| [#2529](https://github.com/nanocoai/nanoclaw/pull/2529) `fix(signal): deliver inbound attachments to the agent instead of dropping them` | 2026-05-18 | **84 天** | Signal 附件丢失的核心修复，长期滞留于 Open 状态；同主题重复修复 #3142 亦待合并 |
| [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) / [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) Dial 渠道相关 | 2026-07-14 | **27 天** | 新渠道功能，已超三周未合入，存在功能集成阻塞风险 |
| [#3142](https://github.com/nanocoai/nanoclaw/pull/3142) `fix(signal): forward image/file attachments through the mounted inbox` | 2026-07-27 | **14 天** | 与 #2529 同域的修复，双 PR 并存需归并决策 |
| [#3186](https://github.com/nanocoai/nanoclaw/pull/3186) `refactor: add host seams for skill-owned capabilities` | 2026-08-04 | **6 天** | 架构重构类 PR，与 #3212-#3214 存在衔接关系，建议按序统一审查 |
| [#3207](https://github.com/nanocoai/nanoclaw/pull/3207) / [#3208](https://github.com/nanocoai/nanoclaw/pull/3208) core-team 提交 | 2026-08-09 | 1 天 | 安全与 CI 关键 PR，优先级高，建议尽快合入并发布补丁版本 |

---

**日报总结**：NanoClaw 项目当前处于高提交、低合并的积压周期，16 条 PR 待审是主要瓶颈。安全修复（#3207）、CI 发布链路（#3208）与 Signal 附件修复（#2529/#3142）属于高优先级合入候选，建议维护者优先处理。社区对 hardened-image 的 Python 支持诉求明确（#3217），应纳入近期版本规划。整体项目活跃度与贡献者参与度良好，健康度的关键变量在于合并节奏能否跟上提交速度。

*数据截至 2026-08-10，来源：[NanoClaw GitHub 仓库](https://github.com/nanocoai/nanoclaw)*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-10

## 1. 今日速览

过去 24 小时项目整体活跃度**较高**：共 22 条 Issue 更新（15 条活跃、7 条关闭），27 条 PR 更新（19 条待合并、8 条已合并/关闭），无新版本发布。QA bug-bash 系列问题进入集中修复期——`ironloopai[bot]` 自动生成的多条修复 PR（emoji 渲染、活动时间线排序、自动化计数、流式请求校验）与人工 PR 同步推进，同时 `serrrfirat` 主导的 tool-search 增强和 Web Push 通知等新功能管线正在成形。值得关注的是两条来自新贡献者（`theredspoon`、`neo-sky`）的中大型 PR 仍在评审中，社区参与面在扩大。

## 2. 版本发布

无（过去 24 小时无新 Release）。

## 3. 项目进展

今日合并/关闭的关键 PR 与 Issue：

- **技能系统修复落地** — PR [#7171](https://github.com/nearai/ironclaw/pull/7171)（已关闭，size: XL）为每个技能挂载点建立 DB-backed 树，修复了"技能安装后消失"的问题（closes #7168），并让技能自身命令可执行，是 #6941 技能体系重构的重要一步。
- **依赖批量更新** — PR [#7387](https://github.com/nearai/ironclaw/pull/7387)（12 项，含 base64、toml、rstest 等）与 PR [#7022](https://github.com/nearai/ironclaw/pull/7022)（actions 组）已合并。
- **7 个历史 Bug 关闭** — 包括 [#5522](https://github.com/nearai/ironclaw/issues/5522)（Reborn 例程读 Slack DM 失败）、[#7292](https://github.com/nearai/ironclaw/issues/7292)（P1：已装工具不可用 + 心跳错误）、[#5552](https://github.com/nearai/ironclaw/issues/5552)（工具多次失败后泛化报错）、[#5509](https://github.com/nearai/ironclaw/issues/5509)（聊天创建延迟随历史增长）、[#5510](https://github.com/nearai/ironclaw/issues/5510)、[#4341](https://github.com/nearai/ironclaw/issues/4341)（思考链暴露）与 [#4344](https://github.com/nearai/ironclaw/issues/4344)（消息镜像）。
- **针对今日活跃 QA Bug 的修复 PR 已就绪**（待合并）：[#7404](https://github.com/nearai/ironclaw/pull/7404)（emoji 短代码渲染）、[#7403](https://github.com/nearai/ironclaw/pull/7403)（活动时间线顺序）、[#7402](https://github.com/nearai/ironclaw/pull/7402)（自动化精确计数）、[#7401](https://github.com/nearai/ironclaw/pull/7401)（拒绝 stream+tools 非法请求）。

整体判断：项目正处于"QA 问题集中收敛 + 新特性并行开发"的良性节奏中，1.2.0 的功能储备（tool disclosure 后续、web-push 渠道）在持续加码。

## 4. 社区热点

- **Issue #5522（已关闭，4 条评论）** — [链接](https://github.com/nearai/ironclaw/issues/5522)：Reborn 例程因缺少 Slack 读取能力而失败，且 `capability_info` 陷入重试循环。该问题虽已关闭，但评论热度最高，反映了"例程需要读取 Slack DM"这一真实用户场景与当前能力边界之间的缺口。
- **Issue #7400（2 条评论，高严重度）** — [链接](https://github.com/nearai/ironclaw/issues/7400)：`stream: true` + 调用方 `tools[]` 在 `/api/v1/responses` 上 100% 复现中断并留下无法删除的 zombie thread，影响 1.1.0-rc.1 与 1.1.0 稳定版。社区最关心的是数据残留与线程泄漏问题，已由 [#7401](https://github.com/nearai/ironclaw/pull/7401) 以"提前拒绝非法组合"的方式响应。
- **Issue #7405 / #7407（各 2 条评论）** — [链接 #7405](https://github.com/nearai/ironclaw/issues/7405) / [链接 #7407](https://github.com/nearai/ironclaw/issues/7407)：`serrrfirat` 连续提出 tool-search 签名完整性与并行批处理执行两个增强，且均已配套 PR（#7409/#7410 堆叠、#7407 实现并行语义），属于"提案即实现"的高效社区协作模式。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | 状态 |
|---|---|---|---|
| **High** | [#7400](https://github.com/nearai/ironclaw/issues/7400) | streaming + 外部 tools 请求中途失败，留下永久不可删 zombie thread，100% 复现 | 修复 PR [#7401](https://github.com/nearai/ironclaw/pull/7401) 待合并 |
| **P1** | [#7292](https://github.com/nearai/ironclaw/issues/7292) | 安装 CoinGecko 工具后无法使用，runner 心跳错误 | 已关闭 |
| P2 | [#7346](https://github.com/nearai/ironclaw/issues/7346) | emoji 短代码（`:wave:` 等）以纯文本展示 | 修复 PR [#7404](https://github.com/nearai/ironclaw/pull/7404) 待合并 |
| P2 | [#7348](https://github.com/nearai/ironclaw/issues/7348) | 多工具调用时 Activity 块与进度消息时序错乱 | 修复 PR [#7403](https://github.com/nearai/ironclaw/pull/7403) 待合并 |
| P2 | [#7345](https://github.com/nearai/ironclaw/issues/7345) | Agent 声称 61 个自动化，UI 仅显示 50 个，计数不一致 | 修复 PR [#7402](https://github.com/nearai/ironclaw/pull/7402) 待合并 |
| P2 | [#7349](https://github.com/nearai/ironclaw/issues/7349) | 刷新页面后部分运行历史与 Activity 时间线丢失 | 待处理 |
| P2 | [#5882](https://github.com/nearai/ironclaw/issues/5882) | 反复重连 Slack 后认证流程进入"永久等待"死锁，只能重装扩展 | 待处理（已开 1 个月+） |
| P2 | [#6479](https://github.com/nearai/ironclaw/issues/6479) | 例程可创建/修改其他例程，存在自复制自动化与无限调度风险 | 待处理（安全类） |
| P2 | [#6046](https://github.com/nearai/ironclaw/issues/6046) | 简单"邮件→表格"任务触发 124 次工具调用，效率异常 | 待处理 |
| P2 | [#5878](https://github.com/nearai/ironclaw/issues/5878) | GitHub token 被吊销后出现误导性错误，未引导重新认证 | 待处理 |
| P2 | [#5551](https://github.com/nearai/ironclaw/issues/5551) | 自动化向 Slack 发送中间进度消息而非最终结果 | 待处理 |

当日新增 Bug 集中在 WebUI 展示层（emoji、时间线、计数），均已由快速修复 PR 覆盖；zombie thread 是唯一高严重度问题，建议优先合并 #7401。

## 6. 功能请求与路线图信号

- **Tool-search 能力增强（v1.2.0 方向）** — Issue [#7405](https://github.com/nearai/ironclaw/issues/7405) 要求返回完整签名与命名空间感知的目录预览，配套 PR [#7409](https://github.com/nearai/ironclaw/pull/7409)（100/500/1000 规模基准测试）与 [#7410](https://github.com/nearai/ironclaw/pull/7410)（有界完整签名）已堆叠提交，预计较大概率进入 1.2.0。
- **并行能力批处理** — Issue [#7407](https://github.com/nearai/ironclaw/issues/7407) 要求让 `invoke_capability_batch` 真正并发执行 `BatchPolicy::Parallel` 批次，零模型面改动，属性能优化项。
- **Web Push + PWA 通知渠道** — PR [#7398](https://github.com/nearai/ironclaw/pull/7398)（size: XL）将 Web 应用变为第一方通知渠道，与 Slack/Telegram 对齐，采用 W3C Web Push（RFC 8030/8291/8292），是渠道多元化的明显信号。
- **Slack/Telegram 渐进式预览** — PR [#7396](https://github.com/nearai/ironclaw/pull/7396)（size: XL）引入频道中立的渐进式预览契约，配合 #7398 共同完善通知体验。
- **Epic 路线图** — [#7166](https://github.com/nearai/ironclaw/issues/7166)（v1.2.0 tool disclosure follow-up）与 [#7392](https://github.com/nearai/ironclaw/issues/7392)（用 pin 定的 omp 工具面替换第一方编码工具的实验）持续积累，后者若落地将显著改变编码工具的默认行为，建议关注其评审进展。

## 7. 用户反馈摘要

- **Slack 读取能力缺失（#5522）**：用户期望例程能读取 Slack DM，但当前仅有"回复"能力；`capability_info` 的重试循环还会白白消耗模型轮次。反馈集中在对"例程自动化"完整闭环的期待。
- **流式 + 外部工具组合脆弱（#7400）**：用户明确指出这是 1.1.0 稳定版的 100% 复现问题，且 zombie thread 无法通过 UI 删除，对数据安全与可用性信心影响较大。
- **自动化计数不一致（#7345）**：用户质疑"Agent 是在幻觉自动化状态，还是 UI/后端统计口径不一致"，反映对状态一致性的敏感。
- **Slack 通知内容错位（#5551）**：Slack 触发式自动化把中间推理步骤发给频道，用户希望只收到最终汇总，属于典型的"过程 vs 结果"体验问题。
- **工具调用过度（#6046）**：简单邮件处理任务产生 124 次工具调用，用户对 token 消耗与执行冗长表示不满，指向工具选择策略仍需优化。
- **错误信息误导（#5878）**：GitHub token 吊销后报"tool input could not be encoded"等无关错误，用户难以定位真实原因，认证失败时的错误语义需要专门处理。

## 8. 待处理积压

- **长期未关闭的 Slack 认证死锁** — [#5882](https://github.com/nearai/ironclaw/issues/5882)（2026-07-09 开启，1 个月+），唯一恢复路径是重装扩展，影响 Slack 渠道的信任度，建议提高优先级。
- **例程自复制安全风险** — [#6479](https://github.com/nearai/ironclaw/issues/6479)（2026-07-22 开启），缺少防"例程套娃"的护栏，属于潜在滥用/稳定性隐患。
- **工具调用效率问题** — [#6046](https://github.com/nearai/ironclaw/issues/6046)（2026-07-13 开启），124 次调用的异常行为与 #7407 的并行化改造相关，可在后者评审时一并讨论。
- **GitHub token 吊销错误语义** — [#5878](https://github.com/nearai/ironclaw/issues/5878)（2026-07-09 开启），建议在认证层补充 token 有效性检测。
- **待合并的大 PR 堆积** — [#7395](https://github.com/nearai/ironclaw/pull/7395)（TOCTOU 竞态修复，新贡献者，XL）、[#7352](https://github.com/nearai/ironclaw/pull/7352)（gate 投影身份绑定，新贡献者，L）、[#7131](https://github.com/nearai/ironclaw/pull/7131)（触发式运行失败通知，XL）、[#7076](https://github.com/nearai/ironclaw/pull/7076)（安装目录已发布的包，新贡献者，XL）均已等待数日，建议维护者加快审阅节奏，避免新贡献者等待过久。
- **依赖升级悬置** — [#7020](https://github.com/nearai/ironclaw/pull/7020)（tokio-tungstenite 0.29→0.30，2026-08-02 开启）、[#7262](https://github.com/nearai/ironclaw/pull/7262)（wasm 组，2026-08-05 开启）仍待合并。

---

**项目健康度总评**：Bug 修复闭环速度快（当日新增展示层 Bug 均已有 PR），QA bug-bash 机制运转有效；新特性供给充足，社区新贡献者开始进入；主要风险在于高严重度 zombie thread 需尽快合并修复 PR，以及一批 XL 级 PR 的评审积压。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-08-10）

## 1. 今日速览

过去 24 小时 LobsterAI 社区活跃度中等偏下：共有 3 条 Issue 更新，其中 1 条为新开问题（#2453），其余 2 条为存量问题被标记 stale 并保持未关闭状态；无新增 PR，也没有新版本发布。新问题集中在自定义模型切换被误判为不许可的场景，另外两条存量 Issue 分别涉及上下文窗口配置与跨模型子任务协作机制。整体来看，Issue 侧讨论仍在持续，但代码合并与版本发布节奏暂时停滞，项目维护活跃度较低。

## 2. 版本发布

无。

## 3. 项目进展

过去 24 小时内无 PR 被合并或关闭，也没有重要 PR 处于待合并状态，因此项目在代码层面无可见推进。从 Issue 侧的活跃度来看，社区反馈的问题尚未转化为对应的修复补丁或版本更新。

## 4. 社区热点

- [#1187 建议在设置模型API的选项中增加上下文窗口大小设置和输出token设置](https://github.com/netease-youdao/LobsterAI/issues/1187)：该 Issue 获得 2 条评论、1 个 👍，是当前讨论热度最高的存量问题。用户在运行 DeepSeek 模型时触发 `Context overflow: prompt too large for the model` 错误，诉求是希望模型 API 设置中能提供上下文窗口大小和输出 token 的可配置项。
- [#2453 切换自定义模型，被系统定义为不许可？](https://github.com/netease-youdao/LobsterAI/issues/2453)：新开 Issue，已有 1 条评论。用户报告在切换 `custom_1/openai/gpt-oss-20b:free` 这类自定义模型时，系统错误地根据 `provider/model` 格式将 provider 误判为 `openai`，导致拒绝切换。该问题同时影响 OpenRouter 和 NVIDIA 平台上的免费模型，直接干扰了多模型工作流。

两个热点问题共同反映了用户对灵活配置和管理多个模型的强烈需求，尤其在使用第三方模型网关（如 OpenRouter、NVIDIA）时，对模型标识的解析与兼容性要求较高。

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态与 Fix PR |
|---------|-------|------|--------------|
| 高 | [#2453 切换自定义模型被系统定义为不许可](https://github.com/netease-youdao/LobsterAI/issues/2453) | 自定义模型名称中包含 `/` 时，系统按 `provider/model` 拆分导致 provider 误判，切换被拒绝，影响 OpenRouter/NVIDIA 免费模型使用 | 无对应 fix PR |
| 中 | [#1187 上下文窗口大小与输出 token 无法配置](https://github.com/netease-youdao/LobsterAI/issues/1187) | DeepSeek 模型运行出现 Context overflow 错误，疑似上下文窗口设置与模型实际容量不兼容 | 无对应 fix PR |

暂无崩溃、严重回归或数据安全类问题报告。

## 6. 功能请求与路线图信号

- **[#1187 上下文窗口与输出 token 可配置化](https://github.com/netease-youdao/LobsterAI/issues/1187)**：用户明确建议在模型 API 设置选项中增加上下文窗口大小和输出 token 上限的配置。该请求若被采纳，将有助于适配 DeepSeek 等不同上下文长度的模型，降低异常发生率。考虑到该 Issue 已存在较长时间并有用户持续表达需求，可能具备进入后续版本的功能优先级。
- 结合 #2453 中暴露的 provider 解析逻辑问题，未来版本或许需要对自定义模型的命名规则和解析策略做出调整，这关联到更广泛的多模型兼容性支持方向。

## 7. 用户反馈摘要

- **自定义模型切换受挫（#2453）**：用户明确描述了操作路径——在同一个线程内切换模型才会触发误判，而新建线程沿用同一个模型则正常。用户指出“实际上是 Provider 被误判为 OpenAI”，并反馈该问题对 OpenRouter 免费模型和 NVIDIA 模型均存在。这反映出模型切换逻辑对 `provider/model` 格式的解析缺乏容错，用户工作流被明显打断。
- **上下文溢出困扰（#1187）**：用户在使用 DeepSeek 运行过程中遇到 `Context overflow: prompt too large for the model` 错误提示，并尝试通过 `/reset` 或更换更大上下文模型解决，但认为根本原因在于项目未提供上下文窗口大小的配置能力。用户整体语气偏向功能改进建议，而非单纯抱怨。

## 8. 待处理积压

- **[#1187 上下文窗口大小/输出 token 设置建议](https://github.com/netease-youdao/LobsterAI/issues/1187)**：创建于 2026-04-01，已标记 stale，等待近 4 个月无实质性进展。该问题影响面较大（DeepSeek 模型用户），建议维护者评估是否纳入迭代计划。
- **[#2132 跨模型子任务调用的问题](https://github.com/netease-youdao/LobsterAI/issues/2132)**：创建于 2026-06-09，已标记 stale。该 Issue 包含较深的根因分析和优化方案设计（如同模型子任务完成通知机制可借鉴到跨模型场景），但长时间未获得项目方反馈，积压时间已超过 2 个月，可能涉及较复杂的架构改动，需要维护者给出明确态度或阶段性回复。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-08-10

---

## 1. 今日速览

- 过去24小时项目保持**中等活跃度**：共2个新/活跃 Issue（均为 bug），1个待合并 PR，无新版本发布。
- 两个新 Issue 分别涉及 **UI 表单状态一致性**（#1187）与 **Apple Container 沙箱状态检测**（#1185），均未引发大规模讨论，目前评论数为 0。
- 唯一活跃 PR #1186 针对 **vault 助记词哈希归一化** 提出修复，方向明确且已有测试覆盖，预计可较快回合。
- 项目发布节奏平稳（无新 Release），维护者需关注两项 bug 的响应时效，避免积压拖长。
- 整体健康度**良好**：未发现回归性崩溃或安全告警，社区反馈集中在边缘场景，核心功能未受影响。

---

## 2. 版本发布

**无新版本发布**。项目当前保持在上一 Release 版本，未带来破坏性变更或迁移事项。

---

## 3. 项目进展

**今日无已合并/关闭 PR**，但有一项修复 PR 值得重点关注：

- **[#1186 [OPEN] fix(vault): normalize recovery phrase before hashing](https://github.com/moltis-org/moltis/pull/1186)**
  - 作者：pxmpsdev | 创建：2026-08-09
  - 状态：待合并
  - 内容：`derive_recovery_kek` 在派生 KEK 前对助记词做归一化（去短横线、转大写），使保险库解封已接受小写或带短横线的短语（有 `recovery_key_case_insensitive` 测试覆盖）；但**存储的哈希仍由未归一化的原始短语计算**，导致用户输入格式与存储格式不一致时验签失败。
  - 意义：该修复统一了助记词从输入到哈希的格式管道，属于**安全与可用性兼顾**的修正。合并后将解决 vualt 解封与持久化之间的隐蔽不一致问题，提升恢复流程的健壮性。
  - 项目向前推进程度：**小幅前进**，核心逻辑无大改，但提升了一个关键路径的可靠性。

---

## 4. 社区热点

今日仅 3 条活跃条目（2 Issue + 1 PR），评论数均为 0，暂无高热讨论。但以下两项 Issue 反映了用户真实触达点：

- **[#1187 [OPEN] [bug] Heartbeat settings UI silently resets fields not represented by the form](https://github.com/moltis-org/moltis/issues/1187)**
  - 作者：IlyaBizyaev | 创建：2026-08-09 | 评论：0
  - 诉求：用户在 UI 中修改 Heartbeat 设置后，**表单未展示的字段被静默重置**。这说明 UI 与底层配置模型之间存在“不可见字段”丢失问题，用户期望 UI 操作是**完整且可预期的**，而非“静默丢失”。
  - 潜在影响：涉及配置持久化与表单双向绑定逻辑，可能影响用户对配置项透明度的信任。

- **[#1185 [OPEN] [Bug] Apple Container 1.x sandbox starts but Moltis treats it as not running](https://github.com/moltis-org/moltis/issues/1185)**
  - 作者：mikz | 创建：2026-08-08 | 更新时间：2026-08-09（有更新） | 评论：0
  - 诉求：Apple Container 1.x 沙箱实际已启动，但 Moltis 状态检测误判为“未运行”。属于**状态同步/检测逻辑缺陷**，影响用户对沙箱环境的自动化控制判断。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重程度 | Issue | 简述 | 是否有 Fix PR |
|---------|-----------|------|----------------|
| 中高 | [#1185 Apple Container 1.x sandbox starts but Moltis treats it as not running](https://github.com/moltis-org/moltis/issues/1185) | 沙箱实际上已运行但被误判为未运行，影响自动化控制与状态展示 | 无 |
| 中 | [#1187 Heartbeat settings UI silently resets fields not represented by the form](https://github.com/moltis-org/moltis/issues/1187) | 表单外字段被静默清空，可能导致用户配置意外丢失 | 无 |

>

**风险评估**：

- #1185 属于“状态误判”，不引起数据丢失，但若用户或上层自动化依赖 Moltis 状态判断来触发操作，则可能产生连锁错误。
- #1187 涉及配置被静默重写，用户感知明显，建议在下一个 patch 版本中修复，并配合 UI 字段完整性测试。
- 两项均未见相关 fix PR，**需要维护者优先分配处理**。

---

## 6. 功能请求与路线图信号

今日无明确功能请求。但从 PR #1186 及近期 Issue 可提取以下路线图信号：

- **Vault/密钥管理的用户输入宽容性**：PR #1186 归一化助记词格式，意味着项目有意提升恢复/解封流程的“容错能力”。可以预期后续版本会：
  - 统一所有密钥/助记词输入的规范化规则；
  - 增加哈希持久化与派生逻辑的一致性测试。
- **状态检测机制的可靠性**（来自 #1185）：Apple Container 沙箱与 Moltis 的状态判断存在信息差，或需引入更细粒度的容器状态查询接口，而不只依赖单一信号。

这些方向若在下个迭代被纳入，将提升多环境适配能力与用户操作容错性。

---

## 7. 用户反馈摘要

截至今日，新 Issue 的评论数为 0，未产生额外细节，但可从提交描述中看到两类真实痛点：

- **配置透明性痛点**（#1187）：用户期望 **UI 上执行的任何修改，都应当是“所见即所得”**，不能有隐藏字段被悄悄重置。这反映了对配置编辑可预见性的高要求，尤其适用于 Heartbeat 这类运维向功能。
- **运行状态一致性痛点**（#1185）：多容器环境下，Moltis 被当作统一的“真实状态源”，但沙箱层面的状态与 Moltis 感知不一致时，会导致用户对平台的信任度下降。用户期待的是**更可信、更贴近底层真实状态的检测机制**。
- 暂无满意度/抱怨的直接评论，但两项 Bug 的描述均有详细预检步骤，说明用户是**跟随规范流程**提交问题，社区贡献质量较高。

---

## 8. 待处理积压

- **[#1185 Apple Container 1.x sandbox starts but Moltis treats it as not running](https://github.com/moltis-org/moltis/issues/1185)**
  - 创建于8月8日，已超过 24 小时，暂无维护者回应或 PR。建议尽快确认是否为平台兼容性问题，并给出临时 workaround。
- **[#1187 Heartbeat settings UI silently resets fields not represented by the form](https://github.com/moltis-org/moltis/issues/1187)**
  - 创建于8月9日，同样是配置丢失类问题，建议与 #1185 同步排期处理。
- **PR #1186** 已等待 1 天，尚无 maintainer review；考虑到它带测试用例，可视为**低风险高收益**修复，建议安排首轮审查。

> 维护者关注建议：本周内对上述Issue/PR作出首次响应，避免社区参与降温。若人力紧张，可先对 #1186 执行 review 合并，再对 #1185 做复现与状态检测逻辑排查。

---

*本报告由 AI 开源项目分析师自动生成，数据来源于 Moltis GitHub 仓库（截至 2026-08-09 23:59 UTC）。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-08-10）

> 数据源：agentscope-ai/CoPaw；Issues/PR 链接均指向 GitHub 上的 agentscope-ai/QwenPaw 仓库。

## 1. 今日速览

过去 24 小时 CoPaw 项目整体活跃度较高：共产生 17 条 Issue 更新，其中 11 条新开/活跃、6 条关闭；PR 侧更新达 50 条，但 49 条仍处于待合并/打开状态，仅 1 条关闭。新版本发布为 0。社区贡献者参与度明显提升，包含多个 `first-time-contributor` PR，说明开源任务清单（#2291）正在持续吸引外部贡献者。不过目前 PR 合并率很低，维护者审阅速度可能成为项目前进的瓶颈。

## 3. 项目进展

今日唯一处于“已合并/关闭”状态的 PR 是：

- [PR #6846: feat(providers): catalog DeepSeek V4 context windows (1M)](https://github.com/agentscope-ai/QwenPaw/pull/6846)  
  为 DeepSeek V4 系列模型 `deepseek-v4-flash` / `deepseek-v4-pro` 补充了 1,000,000 token 的上下文窗口配置。此前这两个模型会被错误解析为默认 131,072 token，导致 Console 显示 131.1K，并且在 128K 处过早触发上下文压缩。该修复实质性地改善了 DeepSeek V4 用户的大上下文体验。

除此之外，今日没有其他已合并 PR。大量功能性 PR 仍停留在待审查状态，例如：

- [PR #6398: feat: add reranker support for ReMe memory search](https://github.com/agentscope-ai/QwenPaw/pull/6398)
- [PR #6704: feat(chat): session fork — snapshot conversation context to new session](https://github.com/agentscope-ai/QwenPaw/pull/6704)
- [PR #6854: add localized approval purpose descriptions](https://github.com/agentscope-ai/QwenPaw/pull/6854)

整体来看，项目正处于“社区提交大量 PR、维护者消化积压”的阶段，实质合入的代码量并不大。

## 4. 社区热点

讨论最集中的 Issue 如下：

- [Issue #2291: 🐾 Help Wanted: Open Tasks — Come Contribute!](https://github.com/agentscope-ai/QwenPaw/issues/2291)（评论 66）  
  这是社区贡献者认领任务的入口，覆盖面广，从 P0 到 P2 分级明确。许多 first-time PR 都源自该任务列表，是当前社区协作的核心枢纽。

- [Issue #6281: 希望 Web 控制台适配移动端](https://github.com/agentscope-ai/QwenPaw/issues/6281)（评论 5）  
  用户希望能在手机/平板上直接使用 Web 控制台，反映了移动端操作的真实需求。

- [Issue #5584: [Question]: 无法连接自定义的 ascend-vllm 模型](https://github.com/agentscope-ai/QwenPaw/issues/5584)（评论 4）  
  用户报告 QwenPaw 1.1.7 之后无法连接自定义 ascend-vllm 模型，配置测试全部通过，但对话时始终报连接错误。这已经持续了近一个月，属于高优先级回归问题。

- [Issue #6826: [Bug]: 对话中助手消息结束时间显示异常](https://github.com/agentscope-ai/QwenPaw/issues/6826)（评论 4）  
  用户反馈助手实际思考 2 分钟，页面却只显示几秒，影响用户对真实耗时的判断。

从社区讨论看，用户最关心三件事：移动端可用性、私有化/国产化模型接入稳定性、以及前端展示信息的真实性与可信度。

## 5. Bug 与稳定性

按严重程度排列：

### 高严重度

- [Issue #6812: Model 'unknown' execution failed. In Google API](https://github.com/agentscope-ai/QwenPaw/issues/6812)  
  Gemini Provider 在发送工具 schema 时带上了 `$schema` 字段，Google Gemini API 拒绝该额外字段，导致模型调用失败。  
  **已有修复 PR**：[PR #6844: strip unsupported Gemini schema metadata](https://github.com/agentscope-ai/QwenPaw/pull/6844)

- [Issue #5584: 无法连接自定义的 ascend-vllm 模型](https://github.com/agentscope-ai/QwenPaw/issues/5584)  
  1.1.7 可用，后续版本回归；其他软件可正常连接，唯 QwenPaw 报 `openai.APIConnectionError`。  
  **暂无修复 PR**。

### 中严重度

- [Issue #6839: MCP 工具调用时，总是将像数字的字符串以数字格式传参](https://github.com/agentscope-ai/QwenPaw/issues/6839)  
  MCP 工具参数类型声明为 `string`，但值类似数字时会被强制转为数字，导致 API 调用失败。  
  **暂无修复 PR**。

- [Issue #6826: 对话中助手消息结束时间显示异常](https://github.com/agentscope-ai/QwenPaw/issues/6826)  
  持久化历史记录重建时，`finished_at` / `completed_at` 被消息创建时间覆盖，导致实际耗时显示错误。  
  **已有修复 PR**：[PR #6845: preserve assistant completion time](https://github.com/agentscope-ai/QwenPaw/pull/6845)

- [Issue #6847: 同样的任务和模型，Qwenpaw 会被杀软打死，WorkBuddy 不会](https://github.com/agentscope-ai/QwenPaw/issues/6847)  
  杀软拦截并强制关停 QwenPaw 进程。这可能是误报，但会严重影响 Windows 用户体验。  
  **暂无修复 PR**。

### 低严重度 / 体验问题

- [Issue #6852: Front-end renderer collapses long multi-line tool output into unreadable blob](https://github.com/agentscope-ai/QwenPaw/issues/6852)  
  前端渲染器将多行工具输出折叠成不可读文本。同主题重复提交有 #6848、#6849、#6850、#6851，其中 4 条已关闭，剩余 1 条打开。  
  **暂无修复 PR**。

- [Issue #6853: prompts.py lies to agents: Dream writes to digest/ not MEMORY.md](https://github.com/agentscope-ai/QwenPaw/issues/6853)  
  内存提示词声称 dream 流程会自动将 digest 同步到 `MEMORY.md`，但实际代码中从未实现该行为。这属于“文档/提示与实现不一致”的信任问题。  
  **暂无修复 PR**。

- [Issue #6841: Auto-Dream: single unit integration failure marks the whole task as error](https://github.com/agentscope-ai/QwenPaw/issues/6841)  
  Auto-Dream 中单个单元 schema 校验失败，导致整个任务被标记为 error，但实际大多数单元已成功，缺少重试与容错机制。属于增强型改进请求。  
  **暂无修复 PR**。

- [Issue #6838: 子代理相关问题](https://github.com/agentscope-ai/QwenPaw/issues/6838)  
  子代理无法自动切换模型、workspace 共享目录配置会导致 Web 端显示混乱。  
  **暂无修复 PR**。

## 6. 功能请求与路线图信号

以下功能请求值得重点关注：

- [Issue #6832: AI 要求审批时加入对于审批项目的描述](https://github.com/agentscope-ai/QwenPaw/issues/6832)  
  用户在审批权限请求时，需要看 PowerShell 代码才能理解用途，体验不直观。  
  **已有对应 PR**：[PR #6854: add localized approval purpose descriptions](https://github.com/agentscope-ai/QwenPaw/pull/6854)，可能被纳入下一版本。

- [Issue #6281: 希望 Web 控制台适配移动端](https://github.com/agentscope-ai/QwenPaw/issues/6281)  
  移动端适配需求明确，目前仍无对应 PR，预计会成为后续前端优化方向。

- [Issue #6840: ReMe Light 在 2.1.0b2 中：完整 ReMe4 路线图时间线？](https://github.com/agentscope-ai/QwenPaw/issues/6840)  
  用户关注 ReMe4 的 Auto-Link、三模态搜索、四分类摘要权重等能力何时落地，是记忆模块的重要路线图信号。

- [Issue #6841: Auto-Dream 重试与容错](https://github.com/agentscope-ai/QwenPaw/issues/6841)  
  用户明确提出“建议 retry + tolerance”，属于对后台任务稳定性的增强需求。

另外，以下待审查 PR 也指向明确的产品方向：

- [PR #6312: 可配置主题/皮肤模块](https://github.com/agentscope-ai/QwenPaw/pull/6312)
- [PR #6842: 增加 hidden 标记，隐藏 agents UI 选择器中的内部 agent](https://github.com/agentscope-ai/QwenPaw/pull/6842)
- [PR #6704: 会话 Fork 快照功能](https://github.com/agentscope-ai/QwenPaw/pull/6704)
- [PR #6259: no-auth 白名单支持 CIDR](https://github.com/agentscope-ai/QwenPaw/pull/6259)

这些 PR 若合入，将显著改善 UI 定制、会话管理、安全配置和记忆检索能力。

## 7. 用户反馈摘要

从今日 Issue 评论中，能明显感受到真实用户的使用场景与痛点：

- **私有化模型接入仍是最大痛点**：用户反馈“模型配置界面全部测试通过，但 qwenpaw 对话时总提示连接模型错误，可 vllm 后端显示一切正常，其他软件均可正常对话”（[#5584](https://github.com/agentscope-ai/QwenPaw/issues/5584)）。这属于典型的生产环境阻塞问题。

- **时间显示不一致损伤信任感**：助手实际思考 2 分钟，页面显示仅几秒（[#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826)）。用户开始怀疑系统是否真的在“工作”，而非只是等待。

- **审批流程不透明**：用户需要查看原始 PowerShell 代码才能判断是否批准 AI 操作，希望一句话描述用途（[#6832](https://github.com/agentscope-ai/QwenPaw/issues/6832)），这是面向普通用户的重要易用性反馈。

- **杀软误报干扰使用**：QwenPaw 执行任务时被杀软拦截甚至强制关停，而同类产品 WorkBuddy 不会（[#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847)），说明行为特征可能被安全软件标记为可疑。

- **高级用户关注内存机制透明度**：用户逐一追踪代码后指出 `prompts.py` 声称的“dream 自动同步 MEMORY.md”并未实现（[#6853](https://github.com/agentscope-ai/QwenPaw/issues/6853)），说明社区中有深耕代码的开发者，对文档与实现一致性有较高要求。

总体而言，用户对项目的功能方向是认可的，但对“连接稳定性、时间准确性、审批易用性、杀软兼容性”等细节仍有明显不满。

## 8. 待处理积压

以下 Issue / PR 长期未得到明确响应或合入，建议维护者优先关注：

- [Issue #5584: 无法连接自定义 ascend-vllm 模型](https://github.com/agentscope-ai/QwenPaw/issues/5584)  
  创建于 2026-06-27，至今已超过一个月，且属于版本回归导致的连接阻塞问题，应给予高优先级。

- [Issue #6281: 希望 Web 控制台适配移动端](https://github.com/agentscope-ai/QwenPaw/issues/6281)  
  创建于 2026-07-20，已有 5 条评论，但尚无明确排期。

- [PR #6259: feat(security): support CIDR in no-auth host allowlist](https://github.com/agentscope-ai/QwenPaw/pull/6259)  
  创建于 2026-07-19，安全相关功能，等待维护者评估。

- [PR #6360: fix: change context injection role from system to user](https://github.com/agentscope-ai/QwenPaw/pull/6360)  
  创建于 2026-07-22，修复上下文注入消息被 AgentScope 校验拒绝的问题，等待合入。

- [PR #6312: feat(console): configurable theme/skin module](https://github.com/agentscope-ai/QwenPaw/pull/6312)  
  创建于 2026-07-21，是 #2291 任务清单中的一项，仍处于 draft 状态。

- [PR #6398: feat: add reranker support for ReMe memory search](https://github.com/agentscope-ai/QwenPaw/pull/6398)  
  创建于 2026-07-23，记忆检索增强功能，关系 ReMe 路线图推进，等待 review。

**项目健康度小结**：社区活跃度良好，外部贡献者热情高，问题反馈覆盖真实使用场景；但 PR 审阅/合并效率偏低，多个阻塞类 Bug 已存在数周。建议在下一阶段优先处理 ascend-vllm 回归、Google Gemini 连接失败，以及前端渲染/时间展示类问题，以稳定核心用户体验。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 开源项目动态日报（2026-08-10）

## 1. 今日速览

过去 24 小时 ZeroClaw 社区活跃度极高，但维护吞吐能力明显吃紧：Issues 更新 50 条（38 条新开/活跃、12 条关闭），PR 更新 50 条（仅 1 条合并/关闭、49 条仍在等待），新版本发布 0 个。多条长期滞留的 P1 级安全 Bug（如 #9565）依旧没有对应 fix PR，而多个 RFC 已累积数十次修订、横跨数月仍未定稿。整体判断：社区投入与贡献意愿都很强，但项目正处于“贡献者产出 > 维护者消化能力”的瓶颈期，流程治理与 reviewer 带宽是当下最突出的健康度风险。

---

## 3. 项目进展

今日没有明确的 PR 合并记录；唯一关闭的 PR 是 [jxxralf 的 ICT channel adapter #9555](https://github.com/zeroclaw-labs/zeroclaw/pull/9555)（XL 规模，涉及新渠道适配），关闭原因未在数据中透露。

更实质的进展体现在 12 条被关闭的 Issue 上，其中多条代表修复已随此前 PR 合入主分支：

- [**#8054** System prompt tool-availability 与 per-turn 工具不一致](https://github.com/zeroclaw-labs/zeroclaw/issues/8054)（P1）——已关闭，核心修复 #8053 已合入，覆盖 direct runtime agent path；
- [**#8560** `browser_open` 挂起导致 agent turn 无限阻塞](https://github.com/zeroclaw-labs/zeroclaw/issues/8560)（P1/S1）——已关闭；
- [**#9192** `shared_budget` TOCTOU 与 `finish_run` 互斥锁下 panic](https://github.com/zeroclaw-labs/zeroclaw/issues/9192)（P1）——已关闭；
- [**#8731** stdio MCP server  zombie 进程累积](https://github.com/zeroclaw-labs/zeroclaw/issues/8731)（P2）——已关闭；
- [**#9834** zeroclaw-runtime 间歇性测试失败（全局状态串扰）](https://github.com/zeroclaw-labs/zeroclaw/issues/9834)（P1）——已关闭；
- [**#9690** Containerfile StageX 误用 rustc 1.95.0、低于 MSRV 导致 all-features 镜像不可构建](https://github.com/zeroclaw-labs/zeroclaw/issues/9690)（P1）——已关闭，容器流水线恢复；
- [**#9656** Telegram 审批等待期间 typing 指示器一直运行](https://github.com/zeroclaw-labs/zeroclaw/issues/9656)（P2）——已关闭；
- [**#9860** Web UI 被 filesystem channel 事件冻结](https://github.com/zeroclaw-labs/zeroclaw/issues/9860)（P1）——标记为 duplicate 后关闭。

此外，[**#8681** Goal mode 实现拆分跟踪器](https://github.com/zeroclaw-labs/zeroclaw/issues/8681) 与 [**#8681** 同类协调 tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/8681) 关闭，说明 goal-mode 拆分栈已推进完毕。整体来看，今日成果集中在存量高风险 Bug 的收尾，而非新功能合入。

---

## 4. 社区热点

- [**#6808 RFC: Work Lanes, Board Automation, and Label Cleanup**（22 条评论）](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)  
  从 5 月 20 日至今已迭代至 Rev. 24，状态仍是 “Ratification deferred / rollout in progress”。这是社区对项目流程自动化的集中呼声：希望路由、看板、标签尽量自动化，不要让维护者手动维护另一套元流程。

- [**#7100 RFC: Per-model capability & context-window config**（12 条评论）](https://github.com/zeroclaw-labs/zeroclaw/issues/7100)  
  核心诉求是模型能力、上下文窗口、runtime 预算、UI 展示各自为政，provider 默认值还会误报 vision 支持。评论区对配置一致性的讨论非常具体，已有关联 PR #8966 在跟进实现。

- [**#9397 RFC: Treat empty WhatsApp Web `allowed_groups` as permit-none**（11 条评论）](https://github.com/zeroclaw-labs/zeroclaw/issues/9397)  
  一个实际的安全配置语义问题：空列表当前等于“放行所有群”。社区对默认安全行为的讨论热烈，且该 Issue 被标为 P1、in-progress。

- [**#8692 Maintainer decision queue tracker**（11 条评论）](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)  
  社区自发建立“维护者决策队列”，本质上是把 RFC 审批、release-policy 问题等都拉进一个可追踪的积压列表。这也侧面印证了维护者注意力是当前稀缺资源。

---

## 5. Bug 与稳定性

按严重程度排列：

**P0 / S0（数据丢失 / 安全风险）**
- [**#9565** gateway webhook handlers 未做 fail-closed：WhatsApp Cloud、Linq、WATI 三个入口可把攻击者可控消息直接送进 agent，无调用方认证](https://github.com/zeroclaw-labs/zeroclaw/issues/9565)（P0，in-progress，暂无 fix PR）

**P1（S1/S2，工作流阻塞或行为降级）**
- [**#9779** `[sop] sops_dir` 文档默认值不被 daemon 遵守，SOP 子系统静默不加载](https://github.com/zeroclaw-labs/zeroclaw/issues/9779)（无 error、无 warning、无日志）
- [**#9284** `flush_config` 可覆盖并发写入，存在丢配置风险](https://github.com/zeroclaw-labs/zeroclaw/issues/9284)
- [**#8642** MCP/tool-schema 克隆导致 agent 循环内 RSS 无界增长（从 OOM tracker #5542 拆出）](https://github.com/zeroclaw-labs/zeroclaw/issues/8642)
- [**#9085** 启用 pgvector 时 `try_enable_pgvector` 在 Tokio runtime 上下文嵌套 panic，阻断 gateway/agent 启动](https://github.com/zeroclaw-labs/zeroclaw/issues/9085)
- [**#9328** verifiable-intent 的 `evaluate_constraints` 未验证 credential chain 即执行 L2 约束检查](https://github.com/zeroclaw-labs/zeroclaw/issues/9328)

**P2（S3 或局部问题）**
- [**#9486** 高熵检测器把 Solana 钱包地址全部打码，且 `high_entropy_tokens=false` 在 channel 路径上不生效](https://github.com/zeroclaw-labs/zeroclaw/issues/9486)
- [**#9198** Discord typing 指示器在 dashboard reload 后永久卡住](https://github.com/zeroclaw-labs/zeroclaw/issues/9198)

**今日已确认修复/关闭的 Bug**：#8054、#8560、#9192、#8731、#9834、#9656、#9690（见本文第 3 节）。整体来看，项目今日在“清存量 bug”上有明显进展，但 #9565 这类 P0 安全项仍悬而未决，需要尽快指定负责人。

---

## 6. 功能请求与路线图信号

- [**#9496 RFC: Streamline RFC scope, discussion, voting, and assignment**](https://github.com/zeroclaw-labs/zeroclaw/issues/9496)  
  社区明确吐槽现有 RFC 流程“比它要做的决策还慢”：7 天讨论期、广泛一致同意、手工投票。这是对项目治理机制本身的改进请求，很可能影响下一阶段的协作方式。

- [**#7100 Per-model capability & context-window config**](https://github.com/zeroclaw-labs/zeroclaw/issues/7100)  
  已有关联实现 [**PR #8966**](https://github.com/zeroclaw-labs/zeroclaw/pull/8966)，后者携带 live provider identity 并修正 context meter 天花板，方向与该 RFC 高度吻合，有望在 0.9 系列落地。

- [**#9825 RFC: 定义区块链公共标识符的 publish-safe 例外**](https://github.com/zeroclaw-labs/zeroclaw/issues/9825)  
  与 #9486 同一个问题域：泄漏检测器不该拦截公开地址。比较可能作为高熵检测器的一个白名单机制进入 0.8.x 补丁。

- [**#7897 RFC: 安全策略与 channel 配置热更新、不必 full daemon reload**](https://github.com/zeroclaw-labs/zeroclaw/issues/7897)（P3）  
  运维侧刚需，但优先级较低，短期进入版本的可能性不大。

- [**#9101 合并发布签名/证明机制**](https://github.com/zeroclaw-labs/zeroclaw/issues/9101)  
  v0.8.3 同时带上 cosign、GitHub attestations、slsa-generator 三套机制，CI 时间和资产数都在膨胀，属于平台工程优化项。

- [**#7130 workspace 级 `forbid(unsafe_code)`**](https://github.com/zeroclaw-labs/zeroclaw/issues/7130) 与 [**#8519 wasmtime-wasi CVE 治理**](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) 属于安全加固路线，都已被 accepted，等待排期。

此外，今日新开的 [**PR #9875**](https://github.com/zeroclaw-labs/zeroclaw/pull/9875)（per-agent env vars + shell 工具 HOME 隔离）是一个清晰的用户驱动功能，值得关注。

---

## 7. 用户反馈摘要

从今日 Issue 评论中提炼的真实用户声音：

- **“任务明明在等待审批，Telegram 却一直显示正在输入。”** [**#9656**](https://github.com/zeroclaw-labs/zeroclaw/issues/9656) 的用户指出，阻塞中的 turn 看起来像在正常工作，容易误导操作者，影响他们对 agent 状态的判断。
- **“我的 Solana 钱包地址永远发不出去，全变成 `[REDACTED_HIGH_ENTROPY_TOKEN]`。”** [**#9486**](https://github.com/zeroclaw-labs/zeroclaw/issues/9486) 的用户遇到高熵检测误伤合法内容，即使用户显式关闭 `high_entropy_tokens` 也无法绕开 channel 路径。
- **“文档说有默认值，但 daemon 实际根本不加载 SOP，而且没有任何日志。”** [**#9779**](https://github.com/zeroclaw-labs/zeroclaw/issues/9779) 的反馈指向 dokumentation 与实际行为脱节，属于典型“静默失败”类问题。
- **“配置保存成功了，不代表安全策略真的生效了。”** [**#7897**](https://github.com/zeroclaw-labs/zeroclaw/issues/7897) 评论强调长生命周期子系统一直在用旧配置，直到 `/admin/reload` 才重建。
- **“文档说 cron 轮询 SOP 可以搭 watch-loop，但 SOP 的能力集根本没有 HTTP 成员。”** [**#9780**](https://github.com/zeroclaw-labs/zeroclaw/issues/9780) 批评文档宣传与实际能力不一致，cron SOP 实际上无法做任何有网操作。

整体看，用户最集中的痛点不是“少功能”，而是“配置/规则不透明、文档与真实行为不一致、状态反馈误导人”。

---

## 8. 待处理积压

**长期滞留的 PR（等待维护者处理）**
当前 49 条 PR 待合并，其中多条来自 distinguished/experienced contributor、且优先级为 P1：

- [**#9314** fix(telegram): advance long-poll offset only after delivery（P1，distinguished contributor，7/23 起 waiting）](https://github.com/zeroclaw-labs/zeroclaw/pull/9314)
- [**#9002** fix(gateway): keep agent turns alive after viewer disconnect（P1，distinguished contributor，7/11 起）](https://github.com/zeroclaw-labs/zeroclaw/pull/9002)
- [**#9069** fix(dashboard): per-agent backend + memory count（XL 规模，7/14 创建，已 rebase 至今仍未合入）](https://github.com/zeroclaw-labs/zeroclaw/pull/9069)
- [**#8966** feat(agent): live provider identity + context window（带 `status:blocked` 标签）](https://github.com/zeroclaw-labs/zeroclaw/pull/8966)
- [**#9607** fix(runtime): route coding CLI tools through configured runtime（8/1 创建，P1/高风险）](https://github.com/zeroclaw-labs/zeroclaw/pull/9607)

注意：多条 PR 标有 `needs-author-action`，说明 reviewer 已给出反馈但贡献者尚未回应，双向都需要推动。

**长期未决的高优先 Issue**
- [**#6808** RFC: Work Lanes（5/20 创建，rev.24，ratification deferred）](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)
- [**#6971** RFC: Security posture & credential boundaries（5/27 创建，`needs-maintainer-review`）](https://github.com/zeroclaw-labs/zeroclaw/issues/6971)
- [**#7100** RFC: Per-model capability & context-window（6/2 创建，`needs-maintainer-review`）](https://github.com/zeroclaw-labs/zeroclaw/issues/7100)
- [**#8519** wasmtime-wasi CVE 与 cargo-audit ignores 漂移（6/30 创建，accepted）](https://github.com/zeroclaw-labs/zeroclaw/issues/8519)
- [**#9565** gateway webhook fail-closed P0（7/30 创建，`status:in-progress` 但无 fix PR）](https://github.com/zeroclaw-labs/zeroclaw/issues/9565)

建议维护者优先处理 #9565 的修复 PR 认领，并对 #6808 这类跨月 RFC 给出明确 ratify/reject 决定，否则会持续消耗社区信任。

---

*数据来源：ZeroClaw GitHub 仓库（zeroclaw-labs/zeroclaw），统计窗口 2026-08-09 至 2026-08-10。*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*