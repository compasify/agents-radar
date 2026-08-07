# OpenClaw 生态日报 2026-08-07

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-08-07 02:02 UTC

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

# OpenClaw 项目动态日报 — 2026-08-07

---

## 1. 今日速览

过去24小时项目保持高强度活跃：**500 条 Issue 更新**（新开/活跃 432，关闭 68）与**500 条 PR 更新**（待合并 402，合并/关闭 98）双双满额，反映出社区报告量与维护者处理量均处于高位。值得关注的是，**P0 级数据迁移失败（#119263）与 token 统计膨胀导致数据丢失（#118772）两个严重问题均有修复 PR 在途**，但 gateway 冷启动性能回归、compaction 超时机制失效等 P1 问题仍缺修复方案。今日无新版本发布，项目处于版本间歇期的密集修复阶段。综合来看，项目社区参与度极高，但 **P1 级问题积压较多、多个问题长期无 fix PR**，稳定性待加强。

---

## 2. 版本发布

今日无新版本发布（Releases: 0）。上一版本 2026.7.2 系列仍为当前主线，近期多个 P0/P1 回归问题均在该版本上被报告（如 #119263、#119087）。

---

## 3. 项目进展

今日有 **98 个 PR 合并/关闭**，以下为已关闭的 6 个代表（均标注关闭，但可视为合入主干的候选）：

| PR | 内容 | 意义 |
|---|---|---|
| [PR #116793](https://github.com/openclaw/openclaw/pull/116793) | refactor(agents): 集中式不可变执行归因（5 个堆叠 PR 中的第 2 个） | 统一 agent 执行身份关联，为跨网关/ACP/嵌入式/CLI 的审计一致性铺路 |
| [PR #116204](https://github.com/openclaw/openclaw/pull/116204) | fix(google): 接受 base64url provider 媒体 | 修复 Google provider（Live voice、TTS、视频等）在 ProtoJSON 场景下的响应拒绝 |
| [PR #118601](https://github.com/openclaw/openclaw/pull/118601) | fix(plugins): registerHook 使用类型化事件名时告警 | 避免插件在遗留 API 上静默注册失败（`before_tool_call` 等处理器不触发） |
| [PR #117961](https://github.com/openclaw/openclaw/pull/117961) | fix(canvas): A2UI HEAD 响应返回 Content-Length | 符合 RFC 9110 §9.3.2，修复 HEAD 与 GET 元数据不一致 |
| [PR #118749](https://github.com/openclaw/openclaw/pull/118749) | fix(gateway): doctor dreaming 时间戳比较器 NaN-safe | 修复 `Date.parse` 减法产生的 NaN 导致排序异常 |
| [PR #119689](https://github.com/openclaw/openclaw/pull/119689) | fix(heartbeat): 解释 target-none 跳过原因 | 保留机器可读 `reason` 的同时增加操作者可读 message |

另外 [PR #116794](https://github.com/openclaw/openclaw/pull/116794)（3/5，XL 规模）与 [PR #120078](https://github.com/openclaw/openclaw/pull/120078)（修复 Codex cron 运行丢失 MCP 工具）处于 open 状态，前者标记 `clawsweeper:human-review`、后者 `waiting on author`，仍需维护者推动。

---

## 4. 社区热点

今日讨论最活跃的 Issue/PR 反映了三个核心诉求：

**① 桌面端覆盖缺失（116 评论）** — [Issue #75](https://github.com/openclaw/openclaw/issues/75)（已关闭，👍 80）:Linux/Windows 版 Clawdbot 桌面应用。macOS/iOS/Android 均有应用，Linux 与 Windows 长期缺席。👍 80 为全部 Issue 中最高，说明 **跨平台桌面端是社区最强烈的功能诉求**。该 issue 虽已关闭，但并未看到对应 desktop 发布公告，后续值得追踪关闭原因。

**② LLM 供应商兼容性痛点（114 评论）** — [Issue #116277](https://github.com/openclaw/openclaw/issues/116277)（已关闭）:DeepSeek v4 Flash 静默失败，Telegram 群消息无回复、仅输出 fallback。与 #88657（incomplete turn）、#88079（推理内容不渲染）等问题叠加，显示 **DeepSeek 系模型在 OpenClaw 上存在系统性兼容短板**。

**③ 记忆安全与防投毒（28 评论）** — [Issue #7707](https://github.com/openclaw/openclaw/issues/7707):按来源（用户命令/网页抓取/第三方 skill）对记忆条目标记信任等级，防止恶意指令通过不可信内容污染 agent 记忆。该 issue 已挂 `needs-security-review` 且 6 个月未闭环，是**社区对 AI 记忆安全焦虑的典型代表**。

---

## 5. Bug 与稳定性

### 🔴 P0 — 数据丢失/无法启动（均有修复 PR 在途）

| Issue | 问题 | 状态 |
|---|---|---|
| [#119263](https://github.com/openclaw/openclaw/issues/119263) | Agent DB v14→v15 迁移失败（`no such column: entry_valid`），gateway 拒绝启动 | ✅ linked-pr-open |
| [#118772](https://github.com/openclaw/openclaw/issues/118772) | `sessionEntry.totalTokens` 累加膨胀，导致在上下文窗口 4–8% 时触发过早压缩，**数据丢失** | ✅ linked-pr-open |

### 🟠 P1 — 高影响（部分已有修复 PR）

| Issue | 问题 | 修复状态 |
|---|---|---|
| [#119087](https://github.com/openclaw/openclaw/issues/119087) | Gateway 冷启动回归约 2.5x（2026.7.1-beta.1 → 2026.7.2-beta.7） | ❌ no-new-fix-pr |
| [#115700](https://github.com/openclaw/openclaw/issues/115700) | `chat.send` 报 "thread switched branches"，`expectedLeafEntryId` 过期（2026.7.2） | ✅ linked-pr-open |
| [#115546](https://github.com/openclaw/openclaw/issues/115546) | CLI-budget 压缩 100% 超时失败（4.9s–50s 即 abort），大会话触发 wake 死亡螺旋 | ❌ no-new-fix-pr |
| [#86050](https://github.com/openclaw/openclaw/issues/86050) | claude-cli 后端流事件被 gateway 缓冲，WebChat/TUI 只看到最终消息 | ✅ linked-pr-open |
| [#92186](https://github.com/openclaw/openclaw/issues/92186) | 前台回复栅栏：并发群消息仅最新一条送达 WhatsApp，其余 dashboard 可见但丢失 | ✅ linked-pr-open |
| [#109881](https://github.com/openclaw/openclaw/issues/109881) | Bedrock thinking-block 签名重放被拒，**永久阻塞** Claude 4+ 会话 | ❌ no-new-fix-pr |
| [#86012](https://github.com/openclaw/openclaw/issues/86012) | LINE 通道 reply token 过期导致消息静默丢失，无 push 兜底 | ❌ no-new-fix-pr（needs-live-repro） |
| [#95553](https://github.com/openclaw/openclaw/issues/95553) | 预算触发的压缩被硬编码 ~60s abort，忽略 `compaction.timeoutSeconds` | ❌ no-new-fix-pr |

### 🟡 P2 — 行为异常/平台问题

- [#119796](https://github.com/openclaw/openclaw/issues/119796)（新报）：Windows 下 vitest teardown EBUSY，agent state DB 句柄未释放 → 测试基建稳定性
- [#119557](https://github.com/openclaw/openclaw/issues/119557)：chat delta 节流无 trailing flush，被吞 chunk 需等下一个事件才发送（✅ linked-pr-open）
- [#117609](https://github.com/openclaw/openclaw/issues/117609)：嵌入式 assistant 阶段无重试，长多步 turn 一次性死亡
- [#77625](https://github.com/openclaw/openclaw/issues/77625)：`reasoningDefault=stream` 引发无限推理递归循环

---

## 6. 功能请求与路线图信号

### 高潜力方向（与已有 PR 形成呼应）

| Issue/PR | 需求 | 路线图信号 |
|---|---|---|
| [#45771](https://github.com/openclaw/openclaw/issues/45771) | 内置 pace-aware 速率限制，防止自主 agent 烧穿 API 配额 | [PR #104060](https://github.com/openclaw/openclaw/pull/104060)（agent-scoped usage budgets）已 open，closes #42475，方向一致 |
| [#87362](https://github.com/openclaw/openclaw/issues/87362) | 向插件暴露任务流生命周期钩子事件 | [PR #119902](https://github.com/openclaw/openclaw/pull/119902)（audit 执行身份）同一领域 |
| [#6757](https://github.com/openclaw/openclaw/issues/6757) | Agent 自主触发上下文压缩（self-compact tool） | 与 #115546/#95553 的压缩机制问题强相关，可能是 2026.8 重点重构区 |
| [#44309](https://github.com/openclaw/openclaw/issues/44309) | A2A 单向派发模式，避免 reply-back 乒乓 | 涉及 session-state/message-loss，挂 `diamond lobster` 高价值标签 |

### 纯新增需求（多为 P2，已挂 `needs-product-decision`）

- [#7707](https://github.com/openclaw/openclaw/issues/7707) Memory Trust Tagging by Source（记忆信任分级）
- [#15032](https://github.com/openclaw/openclaw/issues/15032) Per-spawn tool restrictions（子 agent 工具白名单，用户用于 DMZ 搜索防注入）
- [#90354](https://github.com/openclaw/openclaw/issues/90354) 压缩前 memory flush 的有界/校验追加语义
- [#71736](https://github.com/openclaw/openclaw/issues/71736) Control UI 插件贡献槽（SDK 级提案）
- [#88154](https://github.com/openclaw/openclaw/issues/88154) Slack Modal 原生交互支持
- [#27445](https://github.com/openclaw/openclaw/issues/27445) `announceTarget` 子 agent 完成路由选项
- [#6599](https://github.com/openclaw/openclaw/issues/6599) `/models test-fallback` 命令，预验证 fallback 链

---

## 7. 用户反馈摘要

- **❤️ 真实喜爱**：[#73537](https://github.com/openclaw/openclaw/issues/73537) 用户明确表示 OpenClaw "genuinely become part of our daily workflow"，用于家庭/商业助手（Telegram 集成、定时任务、Home Assistant 控制）。这类深度依赖的用户同时呼吁**生产就绪度标签**，希望官方明确 release 的稳定性等级。

- **😤 升级回归痛点**：[#90595](https://github.com/openclaw/openclaw/issues/90595) 用户从 2026.5.12 升到 2026.6.1 后，cron 失败通知在热重载/重试期间反复触发，造成"alert fatigue"。升级引入的回归是用户不满的核心来源。

- **🤔 配置不透明带来的困惑**：[#114154](https://github.com/openclaw/openclaw/issues/114154) 用户配置 bundle-mcp 通过 policy 校验、`mcp probe`/`mcp doctor` 均健康，但 agent session 始终未加载该工具——"ToolSearch finds nothing"，排查成本很高。

- **🔧 具体使用场景的防御性设计**：[#15032](https://github.com/openclaw/openclaw/issues/15032) 用户详述了"三区隔离 web 搜索管道"架构，将 prompt injection 防御作为核心诉求，体现了高级用户对安全边界的主动探索。

---

## 8. 待处理积压

### ⚠️ 长期未闭环的高价值 Issue（均为 2 月创建，已悬置 6 个月）

| Issue | 内容 | 挂起原因 |
|---|---|---|
| [#6599](https://github.com/openclaw/openclaw/issues/6599) | `/models test-fallback` 命令 | `needs-maintainer-review` + `recovery-stuck` |
| [#6757](https://github.com/openclaw/openclaw/issues/6757) | Agent 自主触发上下文压缩 | `needs-product-decision` + `recovery-stuck` |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | 记忆信任分级 | 28 评论高热度，仍卡在 `needs-security-review` |
| [#15032](https://github.com/openclaw/openclaw/issues/15032) | 子 agent 工具白名单 | 有 `linked-pr-open` 但仍待产品决策 |

### ⚠️ 长期滞留的 PR（均超过 3 个月）

| PR | 内容 | 状态 |
|---|---|---|
| [#60981](https://github.com/openclaw/openclaw/pull/60981) | 文件系统访问控制 PathGuard（4月） | stale + `needs-real-behavior-proof` |
| [#61519](https://github.com/openclaw/openclaw/pull/61519) | CI 循环依赖检测（4月） | `waiting on author` |
| [#65655](https://github.com/openclaw/openclaw/pull/65655) | Mattermost slash 回调鉴权加固（4月） | stale + `needs-real-behavior-proof` |
| [#79200](https://github.com/openclaw/openclaw/pull/79200) | CLI `--message-file` 标志（5月） | `waiting on author` 约 3 个月 |
| [#79404](https://github.com/openclaw/openclaw/pull/79404) | 认证门禁加固（5月） | `waiting on author` 约 3 个月，涉及安全边界 |

> 建议维护者优先关注 **2 月黄金期遗留的 4 个功能请求**（#6599/#6757/#7707/#15032）——它们均附带活跃 PR 或高用户呼声，且有 `recovery-stuck` 标记表明可能已从自动流程中漏出。安全类 PR（#60981、#65655、#79404）滞留过久也将增加供应链风险敞口。

---

*本日报基于 openclaw/openclaw 公开 GitHub 数据自动生成。数据统计窗口：2026-08-06 ~ 2026-08-07（过去24小时）。*

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析报告
**日期：2026-08-07**

---

## 1. 生态全景

当前个人 AI 助手与自主智能体开源生态整体呈“**高活跃、高波动**”状态：头部项目单日 Issue/PR 更新可达 50～500 条，但大量 P0/P1 级稳定性问题（数据迁移失败、token 统计膨胀、压缩超时、渠道断连）仍未完全收敛。各项目普遍存在“**社区贡献踊跃 vs 维护者响应不均**”的矛盾，PR 积压与长期未闭环 Issue 成为共同痛点。同时，上下文/记忆可靠性、模型 Provider 兼容性、渠道原生语义与安全加固等方向出现跨项目共振，说明生态正从“功能堆叠”转向“可靠性治理”。IronClaw 的 v1.1.0 稳定发布与 ZeroClaw 的 v0.8.5 稳定线推进，为生态提供了阶段性的质量标杆。

---

## 2. 各项目活跃度对比

| 项目 | 今日 Issue 更新 | 今日 PR 更新 | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（新开/活跃 432，关闭 68） | 500（待合并 402，合并/关闭 98） | 无 | 社区规模最大，但 P1 积压多，稳定性待加强 |
| **NanoBot** | 10（新开/活跃 9，关闭 1） | 17（待合并 12，合并/关闭 5） | 无 | 迭代快，健康度良好，安全修复 PR 待合并 |
| **Hermes Agent** | 50（新开/活跃 48，关闭 2） | 50（待合并 46，合并/关闭 4） | 无 | 高热修复，桌面端回归与 Feishu 问题拖累体验 |
| **PicoClaw** | 0 | 2（1 关闭，1 待合并） | 无 | 低活跃但稳定，feature PR 长期挂起 |
| **NanoClaw** | 2（1 新开，1 关闭） | 14（6 待合并，8 合并/关闭） | 无 | 健康迭代，核心维护者响应迅速 |
| **NullClaw** | 无活动 | 无活动 | 无 | 休眠/暂停 |
| **IronClaw** | 50（近半数关闭） | 50 | **v1.1.0（8/6）** | 稳定迭代，历史 P1 问题未完全收敛 |
| **LobsterAI** | 5（3 新开，2 stale） | 无合并/关闭，2 个积压 PR | 无 | 社区反馈中等，维护响应偏低 |
| **Moltis** | 无活动 | 无活动 | 无 | 休眠/暂停 |
| **CoPaw** | 34（新开/活跃 17，关闭 17） | 50（合并/关闭 30，待合并 20） | 无 | 活跃度极高，健康度中上，高影响 bug 仍开放 |
| **ZeptoClaw** | 无活动 | 无活动 | 无 | 休眠/暂停 |
| **ZeroClaw** | 31（22 活跃，9 关闭） | 50（45 待合并，5 合并/关闭） | 无 | 整体良好，SOP 子系统和 PR 积压需关注 |

> OpenClaw 的 500 条 Issue/PR 更新为数据窗口满额值，显示其信息处理量处于生态绝对头部。

---

## 3. OpenClaw 在生态中的定位

**OpenClaw 是当前生态的“中心参照系”**，其单日 500 条 Issue/PR 更新是第二梯队项目的约 10 倍，社区规模和用户覆盖面远超同类。

- **核心优势**：在 agent 执行归因、跨网关/ACP/嵌入式/CLI 的统一身份与审计一致性上有明确技术前瞻；Google、Bedrock、Claude CLI 等多 Provider 适配范围广；社区功能诉求真实且多元（如跨平台桌面端、DeepSeek 兼容、记忆安全），说明其已进入真实生产使用。
- **技术路线差异**：OpenClaw 以“网关 + agent 运行时 + 多通道插件”为骨架，强调集中式不可变执行归因；相比 IronClaw 的 Operator 可观测性、ZeroClaw 的 SOP/RFC 治理路线，OpenClaw 更偏“社区反馈驱动的快速迭代”。
- **软肋**：P1 级问题积压较多、多个高价值 Issue 长期无 fix PR，是“规模与稳定”矛盾的典型代表。它既是生态的标杆，也承担了最大的稳定性治理压力。

---

## 4. 共同关注的技术方向

### ① 上下文 / 记忆可靠性
- **OpenClaw**：token 统计膨胀导致数据丢失、compaction 超时机制失效、记忆信任分级。
- **Hermes**：压缩交接误变活跃轮次、外部记忆后端静默停止同步。
- **CoPaw**：压缩前 pending turns 未 flush、长会话 tool 消息 400。
- **IronClaw**：libSQL FTS 自然语言查询失败。

**共同诉求**：压缩过程可配置、数据不丢失、记忆按来源分层管理。

### ② 模型兼容性与 Fallback
- **OpenClaw**：DeepSeek 系列静默失败、`/models test-fallback` 命令需求。
- **NanoBot**：会话内无法切换模型，`/model` 无效。
- **PicoClaw**：可配置默认 fallback 链 PR 已开放 37 天。
- **CoPaw**：模型自动 fallback + 冷却机制 PR 进行中。
- **ZeroClaw**：Bedrock Nova 2 缓存报错、Kimi Code 不支持。
- **IronClaw**：MiniMax / Qwen3.6 系列工具调用被拒。

**共同诉求**：多 Provider 无缝切换、fallback 链可验证、模型能力/context 配置统一。

### ③ 渠道平台原生语义与可靠性
- **OpenClaw**：WhatsApp 并发消息丢失、LINE reply token 过期。
- **Hermes**：Telegram 断线楔住、Feishu 审批按钮跨版本未修。
- **NanoBot**：Matrix 加入房间失败、reply/thread 语义缺失。
- **IronClaw**：Slack 通知投递错误、断开请求被拒、无法读 DM。
- **CoPaw**：Matrix 启动竞态无重试、OneBot 媒体/引用回复补齐。

**共同诉求**：渠道连接自愈、消息不丢失、尊重平台原生交互（回复、线程、审批）。

### ④ 安全加固
- **NanoBot**：CLI 子进程继承环境变量致 API 密钥泄漏；会话历史与 workspace 耦合。
- **Hermes**：MCP stdio 命令白名单 PR 待合并。
- **ZeroClaw**：`execute_pipeline` 权限绕过（今日修复）、WhatsApp allowlist 空列表语义错误。
- **OpenClaw**：记忆投毒防护、子 agent 工具白名单、PathGuard。
- **IronClaw**：沙箱配置显式化、WASM/Nostr host 函数。

**共同诉求**：密钥管理、权限边界、沙箱隔离、可验证意图。

### ⑤ 可观测性与成本透明度
- **IronClaw**：Inspector 调试面板、模型调用统计（延迟/token/缓存）。
- **Hermes**：桌面端本地 token/成本分析界面、按日聚合。
- **NanoBot**：增加 token 消耗日志，用户“2 小时百万 token”无迹可查。
- **LobsterAI**：网关重启状态不可见、浏览器服务状态不一致。

**共同诉求**：用量透明、内部状态可诊断、失败信息可行动。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 关键架构/技术特征 |
|---|---|---|---|
| **OpenClaw** | 多通道、多 Provider、统一执行归因 | 个人/团队，追求通用生态 | 网关 + agent 运行时 + ACP/嵌入式/CLI，社区驱动 |
| **NanoBot** | 轻量会话、WebUI 体验、Temporary Chat | 个人开发者、轻量自托管 | Python 服务，WebSocket 优先，PR 响应快 |
| **Hermes Agent** | 桌面/云/远程统一、插件接口、记忆系统 | 开发者 + 企业 IM 用户 | 桌面端 + gateway + Provider 抽象，正在做 god-file 治理 |
| **PicoClaw** | 多模态 IM 适配（QQ 频道） | 特定 IM 场景用户 | 低活跃，功能收尾期 |
| **NanoClaw** | Telegram 等渠道、技能管理、自更新 | 渠道机器人用户 | 维护者响应快，注重开箱即用与依赖纯净 |
| **IronClaw** | 托管 MCP、Operator 可观测性、Slack 集成 | 自托管/企业自动化 | Inspector 后端 + 显式投递双通道，沙箱强化 |
| **LobsterAI** | 桌面客户端、模型配置、exec 内核 | 桌面用户 | 客户端应用，维护滞后 |
| **CoPaw** | Qwen 生态、ReMe 记忆、OneBot、中文支持 | 中文社区/开发者 | 基于 AgentScope 2.0，Scroll 统一上下文协议 |
| **ZeroClaw** | SOP/可验证意图、A2A、治理 RFC | 高安全/自治 agent | SOP 驱动、RPC 命令目录、评估体系 Phase 2 |

---

## 6. 社区热度与成熟度

### 活跃度分层

- **超大规模**：OpenClaw（500/500）
- **高活跃**：Hermes Agent、IronClaw、ZeroClaw、CoPaw（约 50 条 Issue/PR）
- **中活跃**：NanoBot（10 Issue / 17 PR）、NanoClaw（2 Issue / 14 PR，响应快）、LobsterAI（5 Issue）
- **低活跃/休眠**：PicoClaw（2 PR）、NullClaw、Moltis、ZeptoClaw（无活动）

### 阶段判断

- **质量巩固期**：IronClaw 发布 v1.1.0、ZeroClaw 推进 v0.8.5 稳定线、NanoClaw 核心团队快速合并清理。
- **快速迭代 + 修复期**：OpenClaw、Hermes、CoPaw、NanoBot——PR 合并量大，但同时伴随 P0/P1 回归，属于“边发布边补课”。
- **维护停滞风险**：LobsterAI 的 PR 积压超 4 个月；PicoClaw 的 fallback 链 PR 一个月无 review，贡献者积极性可能受挫。

---

## 7. 值得关注的趋势信号

1. **可靠性取代新功能成为竞争焦点**  
   多个项目出现 token 统计膨胀、压缩超时、静默失败等数据完整性 bug。“数据不丢失、任务不假死”正在成为 agent 框架的安全底线。

2. **记忆与上下文管理走向“分层信任”**  
   OpenClaw 的记忆信任分级、CoPaw 的压缩前 flush、Hermes 的记忆同步修复，表明按来源（用户/网页/工具）管理记忆可信度将成为下一阶段设计共识。

3. **模型 fallback 与兼容层成为标配**  
   无论是 DeepSeek 静默失败，还是 NanoBot 无法切换模型，都指向同一个需求：模型层需要标准化 fallback 机制、可测试的 fallback 链，以及统一的模型能力注册表。

4. **安全已从外围走向内核**  
   API 密钥泄漏、权限绕过、MCP 命令白名单、会话历史与 workspace 解耦等议题密集出现。安全能力将直接决定 agent 能否进入企业生产环境。

5. **可观测性与成本透明度成为新增刚需**  
   “2 小时消耗百万 token”但无日志可查，已经引发用户焦虑。IronClaw 的 Inspector、Hermes 的 usage 分析、NanoBot 的 token 日志，都是同一趋势的不同表现。

6. **渠道原生语义决定用户留存**  
   Feishu 审批按钮四个月未修、Slack 投递错人、Matrix 缺乏 reply/thread，这类“最后一公里”体验问题正在消耗用户信任。深度适配各平台原生交互的 agent 将更具竞争力。

7. **社区治理效率成为项目健康度关键指标**  
   PR 长期滞留、Issue 被 stale、修复 PR 已提交却未合并（如 Hermes Feishu、NanoBot 安全修复），已引发贡献者明显挫败感。ZeroClaw 的 RFC 决策队列提案，是生态自我修正的积极信号。

---

*本报告基于 2026-08-07 各项目 GitHub 公开动态数据生成，供技术决策者与开发者参考。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-07

## 今日速览

过去 24 小时 NanoBot 项目保持高活跃度：共 10 条 Issue 更新（新开/活跃 9 条，关闭 1 条），17 条 PR 动态（待合并 12 条，已合并/关闭 5 条）。开发重心集中在 Bug 修复与安全加固上，其中两条 PR（[#5270](https://github.com/HKUDS/nanobot/pull/5270)、[#5269](https://github.com/HKUDS/nanobot/pull/5269)）针对 API 密钥泄漏问题提出了修复方案，另一条 p0 级 PR（[#5271](https://github.com/HKUDS/nanobot/pull/5271)）解决后台任务覆盖会话数据的严重缺陷。社区反馈响应较快，如 Issue [#5273](https://github.com/HKUDS/nanobot/issues/5273) 提出当日即有对应的修复 PR [#5272](https://github.com/HKUDS/nanobot/pull/5272) 提交。项目整体处于高频迭代状态，健康度良好，但安全相关修复尚未合并，需要维护者优先跟进。

## 项目进展

今日共有 5 个 PR 完成合并/关闭，覆盖渠道兼容性、WebUI 性能与交互体验、隐私模式等领域：

- **[#5248](https://github.com/HKUDS/nanobot/pull/5248)（已合并）**：修复 Matrix  bot 无法自动加入房间的问题。通过为 `join()` 发送非空 POST body，兼容 Conduwuity 等对空请求体拒绝的家谱服务器，解决了 `_on_room_invite` 回调触发但 `join()` 静默失败的问题（对应 Issue [#5247](https://github.com/HKUDS/nanobot/issues/5247)）。
- **[#5262](https://github.com/HKUDS/nanobot/pull/5262)（已合并）**：WebUI 冷启动性能优化。为生产环境的 WebUI 静态资源预生成 gzip 压缩文件并由网关协商下发；同时将 React 共享运行时从 Markdown、语法高亮、KaTeX 等懒加载 chunk 中剥离，减小首屏加载体积。
- **[#5267](https://github.com/HKUDS/nanobot/pull/5267)（已合并）**：收紧 WebUI 交互动效。统一过渡时长至 220ms，缩短完成态保持时间，并在用户开启"减少动态效果"偏好时抑制布局位移。
- **[#5259](https://github.com/HKUDS/nanobot/pull/5259)（已合并）**：强制临时会话仅存于内存。正式确立"Temporary Chat"契约：会话状态不写入磁盘上的会话历史、WebUI 转录或自动记忆，但仍正常调用模型提供商，附件和工具调用照常工作。
- **[#5261](https://github.com/HKUDS/nanobot/pull/5261)（已合并）**：WebUI 侧栏会话支持拖拽操作，可拖入输入框创建会话提及，或拖拽排序持久化手动顺序（Codex 风格插入线）。

此外，有 12 个 PR 处于待合并状态，其中包含 3 个安全修复（#5270、#5269、#5271）和多个渠道/WebUI 功能增强，合并队列存在一定积压，建议维护者优先 review 安全相关补丁。

## 社区热点

**🔥 最受关注 Issue：#5198 — 无法在会话中切换模型（3 条评论）**  
[#5198](https://github.com/HKUDS/nanobot/issues/5198) 由用户 whisperity 提出：NanoBot 总是将某个模型作为首选，其他模型仅作 fallback，点击聊天输入框旁的模型标识无法切换，`/model` 命令指定其他模型 ID 也无效。评论区的关注点在于：用户期望拥有类似 ChatGPT/Claude 等 SaaS 产品的模型选择器体验，而不是通过修改全局配置来切换模型。这是核心交互缺失，直接影响了用户对多模型工作流的掌控感。

**💬 老问题回温：#4290 — cronjob 子代理导致任务提前结束（2 条评论）**  
[#4290](https://github.com/HKUDS/nanobot/issues/4290) 创建于 6 月 10 日，今日仍有更新。用户 tjc0726 详细贴出了日志：子代理完成任务后，主代理没有机会回复子代理结果，导致后续工作流失败。该问题涉及 cronjob + subagent 的编排逻辑，影响自动化任务的可靠性，属于较复杂的深水区 bug，两个月未关闭，值得维护者关注。

**⚡ 快速响应的配对：#5273 + #5272（Issue 提出当日即有修复 PR）**  
用户 ziuus 在 [#5273](https://github.com/HKUDS/nanobot/issues/5273) 中报告：会话保留修剪（`retain_recent_legal_suffix` 或 `enforce_file_cap`）会丢弃 `_channel_delivery` 类型的主动消息（如 cron 后台通知），导致用户回复时上下文断裂。同一天，ziuus 本人提交了对应的修复 PR [#5272](https://github.com/HKUDS/nanobot/pull/5272)，精准定位了问题：修剪时应保留紧跟用户回复之前的 `_channel_delivery` 消息。这种"Issue 提出→修复 PR"同日出现的情况体现了社区贡献者的高响应速度。

## Bug 与稳定性

按严重程度排列：

| 严重度 | Issue / PR | 描述 | 状态 |
|---|---|---|---|
| **P0** | [PR #5271](https://github.com/HKUDS/nanobot/pull/5271) | 后台任务（如 `maybe_generate_webui_title`）持有 Session 引用，若期间用户执行 `/new`，后台任务保存可能用陈旧数据覆盖新建会话 | 待合并，作者 yorkhellen |
| **P1（安全）** | [PR #5270](https://github.com/HKUDS/nanobot/pull/5270) | CLI 子进程通过 `env=os.environ.copy()` 继承全部环境变量，API 密钥可能泄漏给不受信任的 CLI 应用 | 待合并，作者 LHMQ878 |
| **P1（安全）** | [PR #5269](https://github.com/HKUDS/nanobot/pull/5269) | `OpenAICompatProvider._setup_env()` 将 API 密钥写入进程全局 `os.environ`，多 Provider 场景会交叉污染或互相覆盖 | 待合并，作者 LHMQ878 |
| **P1（核心功能）** | [Issue #5198](https://github.com/HKUDS/nanobot/issues/5198) | 会话内无法切换模型，`/model` 命令无效 | 无修复 PR，开放 7 天 |
| **P1（自动化）** | [Issue #4290](https://github.com/HKUDS/nanobot/issues/4290) | cronjob 遇子代理时提前结束，主代理无法整合子代理结果，后续工作流失败 | 无修复 PR，开放约 2 个月 |
| **P2** | [PR #5272](https://github.com/HKUDS/nanobot/pull/5272) | 会话保留修剪丢失主动投递渠道消息（对应 Issue [#5273](https://github.com/HKUDS/nanobot/issues/5273)） | 待合并 |
| **P2** | [PR #5268](https://github.com/HKUDS/nanobot/pull/5268) | 历史消息接口 `/api/sessions/{key}/messages` 不返回媒体根目录外文件的 `media_urls`，而 WebSocket 实时通道正常（对应 Issue [#5264](https://github.com/HKUDS/nanobot/issues/5264)） | 待合并 |
| **P2（安全）** | [Issue #5278](https://github.com/HKUDS/nanobot/issues/5278) | 会话历史存储在 `<workspace>/sessions/` 目录内，与 agent 工作区耦合，存在安全隐患 | 新开，无评论 |
| **P2** | [PR #5265](https://github.com/HKUDS/nanobot/pull/5265) | 工具参数接受 `"NaN"` 和 `"Infinity"` 字符串并转为非有限浮点数，应拒绝 | 待合并 |

## 功能请求与路线图信号

今日收集到的功能需求可分为以下几类，部分已有对应 PR：

**会话与存储治理**
- **[#5276](https://github.com/HKUDS/nanobot/issues/5276)**：请求支持会话级临时文件隔离。当前 `restrictToWorkspace: true` 和 bwrap 沙箱下，所有会话共享 `~/.nanobot/workspace` 全局读写目录。多会话并发时存在文件冲突与越权风险。
- **[#5278](https://github.com/HKUDS/nanobot/issues/5278)**：会话历史不应存放在 agent workspace 内，应回归全局 `~/.nanobot/sessions/` 或独立目录，避免工作区权限模型影响会话数据安全。
- **[#5231（PR）](https://github.com/HKUDS/nanobot/pull/5231)**：为 Dream 记忆系统归档空闲会话。当前短会话永远不会产生 `history.jsonl`，导致 Dream 无法处理这些会话。该 PR 为「空闲会话归档」能力，已开放 4 天，等待 review。

**Matrix 渠道体验**
- **[#5274](https://github.com/HKUDS/nanobot/issues/5274)**：bot 在 Matrix 中回复用户时，应使用 Matrix 的 reply 功能，而不是发送裸顶层消息。
- **[#5275](https://github.com/HKUDS/nanobot/issues/5275)**：用户针对 bot 消息使用 "reply in thread" 时，应形成独立的线程上下文（类似 Discord/Slack 的 threading 行为）。

**可观测性**
- **[#5266](https://github.com/HKUDS/nanobot/issues/5266)**：增加 token 消耗日志。用户反馈"2 小时消耗百万 token"却无迹可查，需要按调用记录 token 用量，方便定位成本热点。

**WebUI 新功能（均有 PR）**
- **[#5252](https://github.com/HKUDS/nanobot/pull/5252)**：临时聊天模式（Temporary Chat），消息不落盘、不写入记忆，首条消息后才创建会话。
- **[#5277](https://github.com/HKUDS/nanobot/pull/5277)**：模型预设详情响应式布局，宽屏列表+编辑并排，窄屏聚焦式列表→详情流。
- **[#5253](https://github.com/HKUDS/nanobot/pull/5253)**：项目级共享交互式终端（基于 PTY/ConPTY + xterm.js），支持重连、重启、显式终止。

**新 Provider 集成**
- **[#5234](https://github.com/HKUDS/nanobot/pull/5234)**：集成 `mst-python` 作为元搜索 provider，聚合 DuckDuckGo、Google、Brave、Bing 等多个搜索引擎结果，使用 RRF（Reciprocal Rank Fusion）融合排序。

综合来看，**会话/存储治理**（#5276、#5278）和 **token 可观测性**（#5266）是社区呼声较高的方向，但目前均无对应 PR，预计不会在短期内进入版本；**WebUI 三个功能 PR**（#5252、#5277、#5253）与 **MST 集成**（#5234）已进入待合并队列，有望在后续版本落地。

## 用户反馈摘要

- **模型切换是核心痛点**（[#5198](https://github.com/HKUDS/nanobot/issues/5198)）：用户明确对比了 Cloud SaaS AI 的 UI，"点击模型 blip 无法切换"且 `/model` 命令疑似无效。这反映出用户对模型选择的控制权期望高于当前实现。
- **token 消耗让用户焦虑**（[#5266](https://github.com/HKUDS/nanobot/issues/5266)）："mllion just in some 2 hours without any noticable activity"——用户对不可见的后台 token 消耗感到不安，需要日志来定位成本来源。
- **自动化任务中断影响实际使用**（[#4290](https://github.com/HKUDS/nanobot/issues/4290)）：用户提供了详细日志，展示了主代理与子代理之间的职责交接缺失。工作流类用户（cronjob、批处理）对这类问题敏感，可能直接影响其留存。
- **Matrix 语义对齐需求**（[#5274](https://github.com/HKUDS/nanobot/issues/5274)、[#5275](https://github.com/HKUDS/nanobot/issues/5275)）：用户期待 bot 尊重 Matrix 的 reply/thread 语义，与 Discord/Slack 的线程行为保持一致。这类"平台原生交互"需求常见于渠道类集成，可以提升用户沉浸感。
- **会话数据与工作区解耦诉求**（[#5278](https://github.com/HKUDS/nanobot/issues/5278)）：用户担忧会话历史与 workspace 耦合后，权限边界模糊可能带来安全风险。
- **社区贡献者自驱修复**（[#5273](https://github.com/HKUDS/nanobot/issues/5273) + [#5272](https://github.com/HKUDS/nanobot/pull/5272)）：用户 ziuus 同时承担了问题发现者和修复者角色，说明项目对贡献者友好，issue 模板和代码结构清晰。

## 待处理积压

- **[Issue #4290](https://github.com/HKUDS/nanobot/issues/4290)（6 月 10 日创建，开放约 2 个月）**：cronjob 子代理导致工作流提前结束。这是自动化场景的关键缺陷，涉及 session 上下文管理，需要维护者评估并制定修复方案。该 Issue 今日仍有更新（8 月 6 日），说明用户仍在关注。
- **[Issue #5198](https://github.com/HKUDS/nanobot/issues/5198)（7 月 31 日创建，开放 1 周）**：会话内无法切换模型。作为直接影响日常使用的核心交互问题，建议维护者明确是否为设计预期，若是则改善 UI/命令的反馈提示，若为 bug 则尽快规划修复。
- **[PR #5231](https://github.com/HKUDS/nanobot/pull/5231)（8 月 3 日提交，等待 review 4 天）**：Dream 空闲会话归档。该 PR 补全了 Dream 记忆系统的重要输入路径，对记忆型用户有较高价值，希望维护者抽出时间 review。
- **12 个 PR 待合并队列**：其中 3 个安全修复（[#5270](https://github.com/HKUDS/nanobot/pull/5270)、[#5269](https://github.com/HKUDS/nanobot/pull/5269)、[#5271](https://github.com/HKUDS/nanobot/pull/5271)）涉及 API 密钥泄漏与数据覆盖风险，建议优先处理；其余 WebUI/渠道功能类 PR 可安排批量 review 或复用 CI 验证。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-07

> 数据来源：NousResearch/hermes-agent GitHub 仓库 · 统计区间：2026-08-06 至 2026-08-07

---

## 1. 今日速览

Hermes Agent 项目在过去 24 小时保持高强度活跃：**Issue 更新 50 条（新开/活跃 48，关闭 2）**，**PR 更新 50 条（待合并 46，合并/关闭 4）**，无新版本发布。开发方向明显集中在 **Bug 修复密度提升**（Telegram 断线楔住、cron 作业丢失、MCP 崩溃、桌面端回归等当日均有 PR 跟进）与 **代码架构治理**（god-file 分片 Epic 获得社区高度关注）。值得注意的信号是：**桌面端 0.20.0 回归问题与 Feishu 平台审批按钮故障** 构成最集中的用户痛点投诉群，消耗了大量社区讨论。当日 10+ 个新 PR 集中针对 P1/P2 级稳定性缺陷，整体项目健康度呈"高热修复"状态。

---

## 2. 版本发布

**无新版本发布**。上一次发布为 v0.20.0，多个回归问题（桌面端操作面板缺失、记忆同步失效）与该版本直接相关，社区正在等待 patch 版本。

---

## 3. 项目进展

今日共 **4 个 PR 合并/关闭**，主要推进以下方向：

### 🟢 已合并/关闭（3 条可见）

- **[PR #80702] [CLOSED] fix(desktop): render agent reactions live**
  修复桌面端 agent 消息反应必须刷新才能看到的问题，改为通过所属 runtime 的权威会话状态实时路由 `message.reaction` 更新，并新增回归测试。链接：https://github.com/NousResearch/hermes-agent/pull/80702

- **[PR #80699] [CLOSED] fix(desktop): the desktop's tools reach it on remote and cloud backends too**
  修复桌面端 pane、内置浏览器和反应工具被错误地通过 `HERMES_DESKTOP=1` 门控的问题——该环境变量仅在 Electron 自身启动的后端存在，导致连接到普通 URL gateway 或 Hermes Cloud 的桌面客户端丢失全部 6 个工具。链接：https://github.com/NousResearch/hermes-agent/pull/80699

- **[PR #80422] [CLOSED] Fireworks user agent**
  Fireworks provider 的 user agent 修正（细节未展开）。链接：https://github.com/NousResearch/hermes-agent/pull/80422

### 🟡 今日新增的 10+ 个待合并 PR（重点）

| PR | 类型 | 修复内容 | 关联 Issue |
|---|---|---|---|
| [#80700](https://github.com/NousResearch/hermes-agent/pull/80700) | P1 Bug | Telegram 致命断线楔住恢复——先入队再断开，避免 `_failed_platforms` 为空 | [#80598](https://github.com/NousResearch/hermes-agent/issues/80598) |
| [#80703](https://github.com/NousResearch/hermes-agent/pull/80703) | P1 Bug | 恢复兄弟进程在 unlocked 保存期间写入的 cron 作业 | [#80624](https://github.com/NousResearch/hermes-agent/issues/80624) |
| [#80696](https://github.com/NousResearch/hermes-agent/pull/80696) | P1 Bug | 阻止"仅引用"压缩交接变成活跃轮次 | [#80622](https://github.com/NousResearch/hermes-agent/issues/80622) |
| [#80706](https://github.com/NousResearch/hermes-agent/pull/80706) | Bug | 修复 SessionDB 连接 fd 泄漏（实测 ~490 个泄漏连接） | — |
| [#80701](https://github.com/NousResearch/hermes-agent/pull/80701) | Feature | 流式响应增加总生命周期上限（默认 30 分钟，移植 qwen-code#8602） | — |

---

## 4. 社区热点

### 讨论热度 Top 5

| Issue | 标题 | 评论数 | 热度标签 |
|---|---|---|---|
| [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) | Epic: Shard all 20 god files — repo-wide god-file decomposition | **51** | 重构/政策 |
| [#64182](https://github.com/NousResearch/hermes-agent/issues/64182) | Plugin Interface Expansion — community ideas | **27** | 插件接口 |
| [#78645](https://github.com/NousResearch/hermes-agent/issues/78645) | Shard agent/context_compressor.py (6,789 lines) | **19** | 重构 |
| [#80424](https://github.com/NousResearch/hermes-agent/issues/80424) | Grok/xAI Feature Parity & Alignment Campaign | **9** | 功能对齐 |
| [#79407](https://github.com/NousResearch/hermes-agent/issues/79407) | [0.20.0 Regression] 桌面端底部操作面板完全缺失 | **8** | 用户投诉 |

### 热点分析

**① god-file 分片运动（#78647 等）** —— 这是目前社区内部最有组织的重构行动，由 andrexibiza 推动，已有 4+ 个子任务追踪（#78645、#78637、#78792），覆盖 `context_compressor.py`（6,789 行）、`hermes_cli/auth.py`（9,180 行）、Telegram `adapter.py`（10,147 行）等巨型文件。核心诉求：**跟随 2026-08 仓库政策——god-file 只分不合并**。社区讨论焦点在拆分策略（按 cluster 分波次）、合并顺序、以及如何保证测试套件不破裂。

**② 插件接口扩展（#64182，27 评论）** —— 这是一份从 Discord 社区讨论蒸馏出的追踪 Issue（7 月 4 日 `#plugins-interface-ideas` 频道），核心诉求是让**长时间排队等待的贡献者 PR 有一个稳定、公开的插件接口契约**可以对接。反映了社区对插件生态可扩展性的强烈期待。

**③ 桌面端 0.20.0 回归（#79407）** —— 用户强烈不满："the desktop app becomes a viewer-only shell"（变成仅查看的外壳）。该 Issue 被标记为 P2、重复。同类问题还包括 #79339（记忆后端同步失效）、#80259（远程会话消息反应不可用）——**桌面端回归已成为 0.20.0 版本最大的信任危机**。

---

## 5. Bug 与稳定性

### 🔴 P1 级（高优先级，均有修复 PR 跟进）

| Issue | 问题 | 状态 |
|---|---|---|
| [#80598](https://github.com/NousResearch/hermes-agent/issues/80598) | Telegram 致命断线楔住导致平台永久失联 | ✅ [PR #80700](https://github.com/NousResearch/hermes-agent/pull/80700) |
| [#80622](https://github.com/NousResearch/hermes-agent/issues/80622) | 引用式压缩交接变成活跃轮次，恢复旧任务执行 | ✅ [PR #80696](https://github.com/NousResearch/hermes-agent/pull/80696) |
| [#80624](https://github.com/NousResearch/hermes-agent/issues/80624) | `no_agent` CLI 创建的 cron 作业在 gateway 运行期间消失 | ✅ [PR #80703](https://github.com/NousResearch/hermes-agent/pull/80703) |

### 🟠 P2 级（回归 / 静默失败）

| Issue | 问题 | 状态 |
|---|---|---|
| [#79407](https://github.com/NousResearch/hermes-agent/issues/79407) | **[0.20.0 回归]** 桌面端底部操作面板完全丢失，应用沦为"仅查看外壳" | 待修复（重复） |
| [#79339](https://github.com/NousResearch/hermes-agent/issues/79339) | **[0.20.0 回归]** `MemoryProvider.sync_turn()` 从未被调用，外部记忆后端静默停止接收轮次 | 待修复 |
| [#80646](https://github.com/NousResearch/hermes-agent/issues/80646) | `agent_context` 硬编码为 "primary"，cron/flush/subagent 的上下文跳过逻辑成为死代码 | 待修复 |
| [#80652](https://github.com/NousResearch/hermes-agent/issues/80652) | MCP stdio 桥接在 `args` 为 null 时崩溃（TypeError），服务器进入 connecting→parked 循环 | 待修复 |
| [#79628](https://github.com/NousResearch/hermes-agent/issues/79628) | `use_gateway: true` 在 Tool Gateway 无法认证时丢弃有效直连凭证 | 待修复 |

### 🟡 P3 级

| Issue | 问题 |
|---|---|
| [#80596](https://github.com/NousResearch/hermes-agent/issues/80596) | Learning graph 将外部安装的技能错误标记为 "learned"（use_count 膨胀） |
| [#80522](https://github.com/NousResearch/hermes-agent/issues/80522) | 零匹配大小写探测仅提供提示，弱模型陷入重搜索螺旋（实测多 6 轮） |
| [#74411](https://github.com/NousResearch/hermes-agent/issues/74411) | 桌面 SSH 模式版本检查命令参数顺序错误，误报功能不支持 |

### ⚠️ Feishu 平台持续性问题（跨版本未决）

过去 24 小时仍有 3 条 Feishu 相关 Issue 被更新时间，但均为旧 issue 的持续活跃。此类问题已有 **5 个独立 Issue** 报告同根因（审批卡片按钮点击失败，错误码 200340/200343/220340），最早可追溯至 2026-04-11：
- [#7675](https://github.com/NousResearch/hermes-agent/issues/7675)（8 评论）
- [#13924](https://github.com/NousResearch/hermes-agent/issues/13924)（6 评论）
- [#25886](https://github.com/NousResearch/hermes-agent/issues/25886)（4 评论）
- [#38305](https://github.com/NousResearch/hermes-agent/issues/38305)（3 评论，明确指 PR #10256 是正确修复但未合并）
- [#10073](https://github.com/NousResearch/hermes-agent/issues/10073)（3 评论，移动端复现）

---

## 6. 功能请求与路线图信号

### 高潜力信号（有实现 PR 支撑）

- **流式响应生命周期上限** — [PR #80701](https://github.com/NousResearch/hermes-agent/pull/80701) 为流式响应增加总耗时上限（默认 30 分钟），封堵"滴喂式流"永不终结的缺陷。移植自 qwen-code#8602，大概率进入 0.20.1。
- **无认证 Provider 支持** — [PR #80633](https://github.com/NousResearch/hermes-agent/pull/80633) 为 `ProviderProfile` 增加 `auth_type="none"`，解决免费层拒绝 Authorization 头的场景。
- **MCP stdio 命令 allowlist** — [PR #62808](https://github.com/NousResearch/hermes-agent/pull/62808) 为 MCP stdio 增加 opt-in 默认关闭的命令白名单校验，是安全增强方向的重要补充。

### 社区呼声较高、尚在讨论阶段的功能需求

| Issue | 需求 | 评论数 |
|---|---|---|
| [#77221](https://github.com/NousResearch/hermes-agent/issues/77221) | 桌面端本地 token/成本分析界面（核心已有完整计量，UI 缺失） | 5 |
| [#77222](https://github.com/NousResearch/hermes-agent/issues/77222) | InsightsEngine 按日 token/成本时间序列聚合 | 2 |
| [#77223](https://github.com/NousResearch/hermes-agent/issues/77223) | 聚合视图中区分 included/estimated/unknown 成本桶 | 2 |
| [#70849](https://github.com/NousResearch/hermes-agent/issues/70849) | 每任务 `deliver_profile` 支持多路 gateway cron 投递 | 2 |

> 三个 usage/cost 相关 Issue 构成一个完整的"**用量透明度**"功能族，且核心计量数据已就绪（`state.db` 中有完整字段），建议维护者评估在 0.21 中统一纳入路线图。

### 新技能推送

- [PR #80708](https://github.com/NousResearch/hermes-agent/pull/80708) 新增内置 `grill-me` 技能——对抗式计划面试（一对一结构化质询），从被关闭的 #43694 中抢救而来。

---

## 7. 用户反馈摘要

### 明显痛点

- **桌面端 0.20.0 升级即降级** — 用户 LAN-TINA-WS 表示"这不是外观问题——应用变成了仅查看外壳"，命令中心、网关控制、子代理状态全部消失（[#79407](https://github.com/NousResearch/hermes-agent/issues/79407)）。
- **记忆后端静默失败** — yuzi001a 报告外部记忆后端停止接收轮次，"没有错误、没有日志、一切看起来正常但数据再不写入"（[#79339](https://github.com/NousResearch/hermes-agent/issues/79339)），这类失败最难以排查。
- **Feishu 用户被迫走命令行** — wonb168 表示"用户必须手动输入 `/approve session` 这样的命令作为变通方案"（[#25886](https://github.com/NousResearch/hermes-agent/issues/25886)），审批流形同虚设。

### 贡献者情绪

- **等待 PR 合并周期过长** — kjsolo 在 [#38305](https://github.com/NousResearch/hermes-agent/issues/38305) 明确指出 "PR #10256 提供了正确修复但至今未合并"，语气带有明显的挫败感。这是项目健康度中需要警惕的信号。

### 社区主动贡献安全洞察

- 多条安全 Issue（[#77164](https://github.com/NousResearch/hermes-agent/issues/77164)、[#77484](https://github.com/NousResearch/hermes-agent/issues/77484)、[#77162](https://github.com/NousResearch/hermes-agent/issues/77162)）均为外部开发者主动发现并附带详细根因分析，说明安全审计在社区有一定活跃度。

---

## 8. 待处理积压

### 🔴 需维护者重点关注

| 项目 | 类型 | 创建时间 | 待处理时长 | 说明 |
|---|---|---|---|---|
| [#38305](https://github.com/NousResearch/hermes-agent/issues/38305) + Feishu 审批按钮问题群（[#7675](https://github.com/NousResearch/hermes-agent/issues/7675)、[#13924](https://github.com/NousResearch/hermes-agent/issues/13924)、[#25886](https://github.com/NousResearch/hermes-agent/issues/25886)、[#10073](https://github.com/NousResearch/hermes-agent/issues/10073)） | Bug | 2026-04-11（首报） | **近 4 个月** | 跨 3 个版本未修复，有明确修复 PR（#10256）但未合并 |
| [#62808](https://github.com/NousResearch/hermes-agent/pull/62808) | 安全 PR | 2026-07-11 | 27 天 | MCP stdio 命令白名单，opt-in 默认关闭，无兼容性风险 |
| [#48045](https://github.com/NousResearch/hermes-agent/pull/48045) | PR | 2026-06-17 | **51 天** | TUI 底部状态栏模式下 overlay 选择器不可见的修复 |

### 🟡 较新但可能被忽视

- **[#80646](https://github.com/NousResearch/hermes-agent/issues/80646) `agent_context` 硬编码为 "primary"** — 这使记忆提供商的上下文跳过逻辑全部变为死代码，影响所有依赖 cron/flush/subagent 上下文区分的外部记忆集成。属于**静默架构腐化**类问题，若短期不修，后续记忆相关功能会在此之上产生更多 bug。
- **[#70849](https://github.com/NousResearch/hermes-agent/issues/70849) 每任务 `deliver_profile`** — 7 月 24 日提出，3 天无新增评论，多路 gateway 用户对正确的 cron 投递适配有真实需求。

### 积压特征总结

当前积压集中在三类：
1. **长尾平台问题**（Feishu）— 因测试环境缺失或优先级被持续压低，已消耗用户信任；
2. **低风险优化 PR** — 如 #62808、#48045，非紧急但持续占用贡献者积极性；
3. **静默失效类缺陷** — 如 #79339、#80646，无报错但功能失灵，最易在下游造成数据完整性问题。

---

*本日报基于 2026-08-07 GitHub 公开数据自动生成，链接指向 NousResearch/hermes-agent 仓库原始 Issue/PR。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-08-07

## 1. 今日速览

过去 24 小时项目整体活跃度偏低：Issues 侧无任何新开、关闭或更新记录，表明社区反馈与问题上报节奏平稳；PR 侧有 2 条更新，其中 1 条为历史 PR 于今日被关闭（#1349），1 条为待合并的模型 fallback 链功能 PR（#3200）；项目无新版本发布。综合来看，当前处于功能迭代的收尾与合并阶段，社区讨论热度不高，但待合并 PR 的持续活跃表明开发主线仍在前向推进。

## 3. 项目进展

今日无新合并的 PR，但有一条 PR 被正式关闭（#1349），该 PR 自 2026-03-11 创建至今历时近 5 个月，属于长期未合并的增强型功能请求：

- **[PR #1349] [CLOSED] feat(qq): support parsing and replying to more attachment types** — 作者：aishannon ([查看 PR](https://github.com/sipeed/picoclaw/pull/1349))
  - 功能范围：支持解析 QQ 频道中的表情符号结构；支持处理 QQ 频道传入的语音、图片、视频和文件消息；支持回传本地附件前先上传；回复时优先使用 Markdown 消息，失败后降级。
  - 影响：该 PR 涉及 channel、go 两个领域，若未来重新开启或以其他形式合并，将显著提升 QQ 频道适配能力，补全多模态消息处理短板。

**整体判断**：今日项目主代码库未见新功能落地，但 #1349 的关闭为长期悬而未决的 PR 积压清理释放了维护注意力，同时 #3200 仍在活跃推进中，项目整体处于“蓄力”状态。

## 4. 社区热点

今日社区讨论活跃度极低：无新增 Issue、无新增评论（两条 PR 的评论数据均为 undefined，即无用户互动记录）。因此今日不存在讨论热烈的议题或高反应帖子。

值得关注但缺乏互动的条目是：

- **[PR #3200] [OPEN] feat(models): add configurable default fallback chain** — 作者：lc6464 ([查看 PR](https://github.com/sipeed/picoclaw/pull/3200))
  - 该 PR 自 2026-07-01 创建，已开放超过一个月，但尚无用户评论、无 👍 反应。这一沉默可能意味着 PR 复杂度较高、维护者尚未评估，或社区对模型 fallback 需求表达意愿不强，需要通过维护者主动推进来打破僵局。

## 5. Bug 与稳定性

今日无任何 Bug 报告、崩溃或回归问题提交。项目暂无已知稳定性风险信号。

## 6. 功能请求与路线图信号

尽管今日无新 Issue 提出功能请求，但两条 PR 共同揭示了社区对两个方向的功能期待：

1. **模型配置增强（可能纳入下个版本）**
   - **[PR #3200] feat(models): add configurable default fallback chain** ([查看 PR](https://github.com/sipeed/picoclaw/pull/3200))
   - 该 PR 为 models 领域引入可配置的默认 fallback 链：在 Web UI 中设置默认模型、添加 fallback 模型、调整顺序并通过后端 API 持久化。该功能直击多模型切换场景下的可用性痛点，一旦合并，将成为 Web UI 侧的模型管理核心能力，有较大概率被纳入下一版本。

2. **QQ 频道多模态扩展（已关闭，短期可能搁置）**
   - **[PR #1349] feat(qq): support parsing and replying to more attachment types** ([查看 PR](https://github.com/sipeed/picoclaw/pull/1349))
   - 该功能被关闭后，QQ 频道的语音/图片/视频/文件消息支持在短期内或不会进入主线。但考虑到其功能范围完整、实现思路清晰（Markdown 优先 + 降级），如果作者有精力重新提交并主动与维护者沟通，仍可能作为后续版本候选。

## 7. 用户反馈摘要

今日无新增 Issue 评论、无 PR 讨论记录，无法从评论中提取用户真实痛点或使用场景反馈。项目维护者与社区的互动在本日处于静默状态。建议持续观察未来 48 小时是否有对 #3200 的评审意见出现，以了解社区对 fallback 链功能的态度。

## 8. 待处理积压

以下 PR 长期未获合并或维护者响应，建议关注：

- **[PR #3200] feat(models): add configurable default fallback chain** — 开放时长：37 天（自 2026-07-01）([查看 PR](https://github.com/sipeed/picoclaw/pull/3200))
  - 现状：已过一个月review周期，状态仍为 OPEN，无评论、无 👍。
  - 风险：功能本身与模型配置、后端持久化、Web UI 三个模块耦合，若长期搁置可能导致分支冲突加剧，增加后续合并成本。
  - 建议维护者在两周内完成评审或给出明确结论。

- **[PR #1349] feat(qq): support parsing and replying to more attachment types** — 已关闭，但功能潜力未被消化 ([查看 PR](https://github.com/sipeed/picoclaw/pull/1349))
  - 现状：已于今日关闭，未合并。该 PR 实现的功能覆盖面广（4 类附件处理 + Markdown 降级逻辑），如因设计决策被拒，建议维护者发布关闭说明，帮助作者了解差距；如因过期关闭，可考虑与作者沟通重开。

---

**项目健康度评估**：今日项目处于低活跃但稳定的状态，无新增缺陷报告，无未合并 PR 堆积（仅 1 条长期待处理），核心风险来自 #3200 的长期挂起。整体健康度良好，但社区互动偏弱，建议维护者主动回应待合并 PR 以维持贡献者积极性。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

好的，这是 NanoClaw 项目在 2026-08-07 的项目动态日报，内容基于提供的 GitHub 数据整理。

---

# NanoClaw 项目动态日报 | 2026-08-07

## 1. 今日速览

今日 NanoClaw 项目活跃度较高，主要集中在 **Bug 修复**与**技能（Skills）模块的清理与重构**上。共处理 2 条 Issues（1 新开，1 关闭），并有 14 条 PR 更新（6 条待合并，8 条已合并/关闭）。一个重要发现是，多条由核心维护者提交的修复 PR（如 #3195、#3172）正在努力解决核心功能（如自更新机制）的稳定性问题，并清理过时或依赖外部服务的技能。项目整体处于健康的迭代阶段，核心团队响应迅速。

## 2. 版本发布

**无。** 过去 24 小时内没有新版本发布。

## 3. 项目进展

今日无新版本发布，但共有 **8 个 PR 被合并或关闭**，推动了多个方面的改进，其中核心维护者主导的清理工作尤为显著。

- **核心机制修复与重构**：
    - [PR #2873](https://github.com/nanocoai/nanoclaw/pull/2873)（已合并）：**修复技能更新机制**。将技能的前置检查与凭据处理分离，使得 `/update-skills` 命令可以仅刷新代码而不受凭据问题阻碍。
    - [PR #3172](https://github.com/nanocoai/nanoclaw/pull/3172)（已合并）：**移除过时技能**。清理了依赖外部 SaaS 账户的 qodo 技能和 Google MCP 技能，以消除项目潜在的配置依赖和运行干扰。
- **调度与通知系统增强**：
    - [PR #2678](https://github.com/nanocoai/nanoclaw/pull/2678)（已合并）：修复调度器，使永久失败的任务也能重新触发下一次循环，避免任务“假死”。
    - [PR #2679](https://github.com/nanocoai/nanoclaw/pull/2679)（已合并）：新增通知钩子，将永久失败的计划任务主动通知给用户，而不是仅记录在日志中。
- **消息处理优化**：
    - [PR #2213](https://github.com/nanocoai/nanoclaw/pull/2213)（已合并）：修复了 Telegram 等平台上仅包含媒体（图片/视频/文件）而没有文字说明的消息被静默丢弃的问题。
    - [PR #2643](https://github.com/nanocoai/nanoclaw/pull/2643)（已合并）：修复了路由器中“提及/模式”触发逻辑，确保通过 @提及或私信直接与机器人对话时能正确响应。
    - [PR #2644](https://github.com/nanocoai/nanoclaw/pull/2644)（已合并）：改进了 Telegram 回复上下文检测，现在能正确识别用户是否在回复机器人自身的消息。
- **用户身份处理**：
    - [PR #2591](https://github.com/nanocoai/nanoclaw/pull/2591)（已合并）：重构用户 ID 命名空间，增加渠道类型前缀，避免不同渠道因裸冒号导致 ID 冲突。

## 4. 社区热点

今日没有评论数特别多的“爆款” Issue 或 PR，但有一个核心维护者主导的修复值得关注：

- **[Issue #3171 (已关闭)](https://github.com/nanocoai/nanoclaw/issues/3171) & [PR #3172 (已合并)](https://github.com/nanocoai/nanoclaw/pull/3172)**：这个组合是今日社区与维护团队互动最明确的信号。用户 `glifocat` 指出两个预置技能（`get-qodo-rules` 和 `qodo-pr-resolver`）依赖于仓库中未配置的外部服务（Qodo SaaS），这干扰了正常的编码请求。该问题在 8月1日提出后，**核心团队在今日通过合并 PR #3172 直接关闭了该 Issue**，动作非常迅速。这体现了维护者对项目依赖纯净性和开箱即用体验的重视。

## 5. Bug 与稳定性

今日报告并追踪了 1 个新 Bug，严重程度较高，但已有对应的修复 PR。

- **[Issue #3194 (开放)](https://github.com/nanocoai/nanoclaw/issues/3194)**：**【高】** `/update-nanoclaw` 命令存在数据安全风险。
    - **问题描述**：该命令在更新通过验证前就更改了正在运行的代码，其回滚点仅保护 Git，而**不保护 SQLite 数据库、gitignored 配置或外部组件**。这为更新失败留下了四个可能导致系统状态不一致的窗口。
    - **状态**：**已有修复 PR**。开发者 `glifocat` 同步提交了 [PR #3195](https://github.com/nanocoai/nanoclaw/pull/3195)（开放中），目标是让 NanoClaw 升级具备**事务性**，确保更新过程的安全。
    - **结论**：核心团队已意识到此问题的严重性并给出了解决方案，项目稳定性方向向好。

## 6. 功能请求与路线图信号

虽然今日没有直接的新功能请求 Issue，但新提交的 PR 显示了社区对扩展集成能力的兴趣，可能成为未来版本的功能方向：

- **[PR #3190 (开放)](https://github.com/nanocoai/nanoclaw/pull/3190)**：**新技能**。新增 Tavily MCP 工具技能。这表明社区正在积极为项目贡献外部搜索/信息获取能力的集成方案。
- **[PR #3193 (开放)](https://github.com/nanocoai/nanoclaw/pull/3193)**：**功能增强**。更新 Telegram Chat SDK 以支持富文本消息。这暗示了聊天平台消息呈现能力是用户关注的方向。

## 7. 用户反馈摘要

我们无法获取今日 Issues 的深度评论内容，但可以从提交内容和 Issue 描述中提炼出一些用户痛点：

- **配置透明度**：用户 `glifocat` 关闭的 [Issue #3171](https://github.com/nanocoai/nanoclaw/issues/3171) 明确指出，开箱即用的技能不应依赖用户未主动配置的外部服务，否则会“拦截正常的编码请求”。这反映了用户对项目**开箱即用体验**和**依赖清晰度**的高要求。
- **更新安全性与可恢复性**：[Issue #3194](https://github.com/nanocoai/nanoclaw/issues/3194) 的详细描述表明用户非常关心自更新机制的安全性，特别是关于**数据库和本地配置**这类重要数据在更新失败时能否被安全回滚。

## 8. 待处理积压

以下 PR 因创建时间较长且仍未合并，需要维护者重点关注，以避免社区贡献被搁置：

- **[PR #2705 (开放)](https://github.com/nanocoai/nanoclaw/pull/2705)**：由 `premald` 创建于 **2026-06-07**，已等待两个月。该 PR 旨在修复 `use-native-credential-proxy` 技能无法真正绕过 OneCLI 网关的问题，属于功能缺陷修复，长期未合并可能导致用户继续受此问题困扰。
- **[PR #3149 (开放)](https://github.com/nanocoai/nanoclaw/pull/3149)**：由 `winjer` 创建于 **2026-07-29**，已等待一周多。该 PR 为 CLI 组配置添加 `--rw` 标志，属于易用性改进，等待时间尚可，但建议维护者尽快给出反馈。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-07

## 1. 今日速览

过去 24 小时 IronClaw 保持稳定迭代节奏：Issue 与 PR 各更新 50 条，其中近半数 Issue 已关闭（23/50），项目在 Bug 修复与功能落地之间保持了较好平衡。昨日发布了 v1.1.0 正式版，将 1.1.0-rc.1 以来的功能与修复全部合入稳定线，标志着一轮以「扩展能力 + 可观测性」为核心的版本周期收尾。值得关注的是，Inspector 系列（操作员级诊断 API、调试面板、模型调用统计）已陆续合入或进入最后审查，Slack 集成缺陷的修复也在推进中，但历史积压的 P1 例程稳定性问题仍未完全收敛。

---

## 2. 版本发布

### ironclaw-v1.1.0（2026-08-06 发布）

**Release Notes 要点：**
- 首个自 1.0.0 以来的稳定版，整体承接 `1.1.0-rc.1` 并包含其后的修复补丁
- 主要亮点（原文摘录）：
  - 注册任意托管 MCP 服务器
  - 从 IronHub 深链接直接安装
  - 跨渠道的持久化文件附件
  - Slack 相关改进（原文截断）

**破坏性变更 / 迁移注意事项：**
- Release Notes 未明确列出破坏性变更，但结合近期合入的 PR，以下变更可能影响现有部署：
  - [#7259 docs 发布边界治理](https://github.com/nearai/ironclaw/pull/7259)：`docs/design` 与 `docs/research` 此前被公网 Mintlify 站点作为隐藏页可访问，现已被 CI gate 拦截，内部文档统一收敛至 `docs/internal/`。若你的工作流依赖旧文档 URL，需改用内部路径。
  - [#7253 自定义 MCP 注册语义收紧](https://github.com/nearai/ironclaw/pull/7253)：托管 MCP 注册改为「仅定义」模式，不再隐式创建安装、激活或发布状态。升级后需显式确认已有 MCP 集成的激活状态。

---

## 3. 项目进展

今日合入/关闭的关键 PR 展示了三条主线：**可观测性基建、文档安全治理、运行时稳定性修复**。

### Inspector 可观测性（已合入基础层）
- **[PR #7235 — 操作员级检查 API 与实时更新流](https://github.com/nearai/ironclaw/pull/7235)**（已关闭）：为宿主私密诊断数据增加 Operator-only 的 REST 端点与 live diagnostics stream，支持游标续传、重复保护、保留期 rebase 与连接生命周期管理。该 PR 为后续 Inspector UI 打下后端基础，对应 Issue [#7220](https://github.com/nearai/ironclaw/issues/7220) 已关闭。

### 文档安全治理
- **[PR #7259 — 修复 docs 公网泄露并加固发布边界](https://github.com/nearai/ironclaw/pull/7259)**（已关闭）：`docs/design` 与 `docs/research` 之前未加入 `.mintignore`，导致内部文档以隐藏页形态被公网索引。合入后冻结 `.mintignore` 并增加 CI gate，杜绝同类泄露复发。这是对项目知识产权保护的重要补漏。

### 运行时与部署修复
- **[PR #7303 — Docker 镜像补装 curl 修复健康检查](https://github.com/nearai/ironclaw/pull/7303)**（已关闭）：`ironclaw:1.1.0` 镜像在托管节点上因缺少 curl 导致 orchestrator 健康检查失败、节点被错误标记为 error。该问题直接影响 1.1.0 的部署稳定性，修复已合入，建议使用 1.1.0 镜像的节点尽快升级到包含此修复的构建。
- **[PR #7289 — libSQL FTS 自然语言召回修复](https://github.com/nearai/ironclaw/pull/7289)**（已关闭）：在**生产组合路径**（内嵌 libSQL 根文件系统的 standalone 构建）上验证了持久化记忆的跨会话召回，并对 FTS 查询做规范化处理，修复了自然语言查询因关键字（AND/OR/NOT）被 FTS5 解析为操作符而失败的问题。对应 Issue #7275。

### 审查中的功能 PR
以下 PR 尚未合入，但已完成主要开发、处于审查阶段，值得关注：
- [PR #7236 — Inspector 调试面板壳与实时诊断客户端](https://github.com/nearai/ironclaw/pull/7236)
- [PR #7239 — 提示词检查与 Prompt 标签页](https://github.com/nearai/ironclaw/pull/7239)
- [PR #7277 — 模型调用统计（延迟 / token / 缓存 / 按模型细分）](https://github.com/nearai/ironclaw/pull/7277)

---

## 4. 社区热点

今日讨论热度最高的 Issue 集中在**通知可靠性**与**集成连接失败**两个主题，且均为 QA 标记的 bug，说明这是当前用户感知最强烈的痛区。

### 讨论最活跃

- **[Issue #5553 — 审批通知消失而非保留在历史记录中](https://github.com/nearai/ironclaw/issues/5553)**（评论 4，OPEN）
  - 当自动化需要用户审批时（如 web-access.search），通知只在通知面板闪现一次即消失，后续审批可能完全不出现。
  - **诉求分析**：用户需要可靠、可追溯的审批入口，闪烁即失严重阻断自动化流程。

- **[Issue #5702 — GitHub Issue 搜索/创建返回 HTTP 403](https://github.com/nearai/ironclaw/issues/5702)**（评论 4，OPEN）
  - 已配置 GitHub 集成，但 Issue 搜索和创建均返回 `operation_failed` / 403。
  - **诉求分析**：集成配置成功 ≠ 可用，驱动层可能存在权限或凭证传递缺陷，影响依赖 GitHub 协作的自动化场景。

- **[Issue #5701 — Activity 面板隐藏工具详情且运行中不更新](https://github.com/nearai/ironclaw/issues/5701)**（评论 3，OPEN）
  - 工具调用详情被折叠为一行摘要（"Activity - N tools"），运行期间不刷新，须等结束后才能查看。
  - **诉求分析**：用户期望实时可观测性。结合 [PR #7305](https://github.com/nearai/ironclaw/pull/7305)（软化为失败工具摘要的视觉强调）和 Inspector 系列，项目方明显在系统性改善该体验。

### 高反应 Slack 相关
- **[Issue #5834 — Slack 断开请求被 agent 错误拒绝](https://github.com/nearai/ironclaw/issues/5834)**（评论 3，OPEN）
  - 用户要求断开 Slack 时，agent 声称无法执行，返回无关内容，导致集成无法通过对话解除。
  - **诉求分析**：连接生命周期管理（连接/断开）应是 agent 的基础能力，当前行为形成死锁。相关 PR #7300 正在修复个人投递目标。

---

## 5. Bug 与稳定性

按严重程度排列今日活跃的 Bug，标注关联修复（若有）。

### P1 — 高影响

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#5456 运行者租约过期](https://github.com/nearai/ironclaw/issues/5456) | 多工具例程因 90 秒 inactivity 阈值过早过期，6/30 测试中为主要失败模式 | OPEN | 无 |
| [#5877 Slack 通知投递至错误用户](https://github.com/nearai/ironclaw/issues/5877) | 通知与敏感工作流结果发送给无关用户 | CLOSED | 需确认修复方式 |
| [#3533 Telegram 无法通过 UI 自动设置](https://github.com/nearai/ironclaw/issues/3533) | v0.28.1 中 Telegram 配对引导与实际流程不符 | CLOSED | 无 |

### P2 — 功能阻断

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#5702 GitHub 集成 403](https://github.com/nearai/ironclaw/issues/5702) | Issue 搜索/创建全部 403 | OPEN | 无 |
| [#5836 例程每次调度运行均报 "No thread attached"](https://github.com/nearai/ironclaw/issues/5836) | 5 分钟例程 0% 成功率 | OPEN | 无 |
| [#5707 例程创建响应暴露内部实现细节](https://github.com/nearai/ironclaw/issues/5707) | 触发名称、cron 语法、内部命令引用等开发信息泄露给用户 | OPEN | 无 |
| [#5508 Slack 传递目标未找到（连接实际正常）](https://github.com/nearai/ironclaw/issues/5508) | 新建例程报无 Slack 投递目标，旧例程正常 | OPEN | [#7300](https://github.com/nearai/ironclaw/pull/7300) 直接相关 |
| [#5509 聊天创建延迟随历史累积增长](https://github.com/nearai/ironclaw/issues/5509) | 新聊天需数秒才出现，删除历史后恢复 | OPEN | 无 |
| [#5510 无法删除旧例程](https://github.com/nearai/ironclaw/issues/5510) | 无清理机制，需重启才能清除 | OPEN | 无 |
| [#5552 多工具失败后仅返回泛化 "invalid result" 错误](https://github.com/nearai/ironclaw/issues/5552) | 不指明失败工具 | OPEN | [#7305](https://github.com/nearai/ironclaw/pull/7305) 改善 UI 表达，根本修复待定 |
| [#5776 长输出提示导致重复超时并被降级为泛化错误](https://github.com/nearai/ironclaw/issues/5776) | 真实超时被 Reborn 失败路径吞掉 | OPEN | 无 |
| [#5522 需要读 Slack DM 的例程失败（缺少能力 + capability_info 重试循环）](https://github.com/nearai/ironclaw/issues/5522) | 能力缺失演变为死循环 | OPEN | 无 |
| [#5701 Activity 面板不更新且隐藏工具详情](https://github.com/nearai/ironclaw/issues/5701) | 实时性缺失 | OPEN | 相关 [#7305](https://github.com/nearai/ironclaw/pull/7305) |
| [#5834 Slack 断开被 agent 拒绝](https://github.com/nearai/ironclaw/issues/5834) | 断开流程无法触发 | OPEN | 无 |
| [#5553 审批通知消失](https://github.com/nearai/ironclaw/issues/5553) | 通知不保留在历史中 | OPEN | 无 |
| [#5504 例程创建挂起（已关闭）](https://github.com/nearai/ironclaw/issues/5504) | 无结果无错误，无限等待 | CLOSED | 无 |

### P3 — 体验问题

- [**#5557 日志深链接需打开两次才加载（已关闭）**](https://github.com/nearai/ironclaw/issues/5557)
- [**#5704 聊天活跃时图片预览变透明（已关闭）**](https://github.com/nearai/ironclaw/issues/5704)
- [**#5705 终端图标无禁用选项（已关闭）**](https://github.com/nearai/ironclaw/issues/5705)
- [**#5706 侧边栏在实例延迟时显示原始线程 UUID（已关闭）**](https://github.com/nearai/ironclaw/issues/5706)

---

## 6. 功能请求与路线图信号

### 明确在途的路线图项

- **Inspector / Operator 可观测性（强烈信号）**
  - 已合入后端 API（[#7235](https://github.com/nearai/ironclaw/pull/7235)），UI 面板（[#7236](https://github.com/nearai/ironclaw/pull/7236)）、Prompt 检查（[#7239](https://github.com/nearai/ironclaw/pull/7239)）和模型统计（[#7277](https://github.com/nearai/ironclaw/pull/7277)）均在审查中。这将是下一版本的重要功能板块。

- **显式渠道投递（双通道模型）**
  - [PR #7157](https://github.com/nearai/ironclaw/pull/7157) 计划删除启发式投递，改由显式的「对话生命周期」与「通知渠道」双通道机制。直击 Slack 个人投递、例程结果可达性等现有痛点。

- **沙箱配置显式化**
  - [PR #7214](https://github.com/nearai/ironclaw/pull/7214) 为 Docker 与 Railway 增加显式用户沙箱配置文件，工作区/检查点按「租户+用户」隔离，且每次命令在全新非 root Python worker 中执行。安全加固方向明确。

### 用户侧功能诉求

- **MCP 注册语义**：社区提交的 [#7253](https://github.com/nearai/ironclaw/pull/7253) 将 MCP 注册收敛为「仅定义」，为权限边界可控的自托管 MCP 生态铺路。
- **WASM 工具扩展**：[PR #7184](https://github.com/nearai/ironclaw/pull/7184) 为 WASM 工具沙箱增加 Nostr 签名与事件发布 host 函数，扩展了 agent 在 Nostr 协议上的自治能力。
- **登录体验**：[PR #7304](https://github.com/nearai/ironclaw/pull/7304) 将 OAuth 登录按钮置于 Gateway Token 表单之上，降低新用户使用门槛。

---

## 7. 用户反馈摘要

从近期 Issue 评论与 QA 记录中提炼的真实用户声音：

- **Slack 集成反复出问题，信任度受损**
  - 从「Slack 传递目标找不到」（#5508）、「断开被拒」（#5834）、「通知发错人」（#5877）、「无法读取 Slack DM」（#5522）到「恢复个人投递」（#7300），Slack 是当前投诉最集中的模块。用户对集成稳定性预期较高，此类问题直接削弱对 agent 自动化结果的信任。

- **错误信息不透明，用户被迫猜问题**
  - 多个 Issue 提到「泛化 invalid result 错误」（#5552、#5776）、「恢复为通用错误」「暴露内部实现细节」（#5707）——用户明确表达需要「可行动的失败信息」，而非面向开发者的堆栈或泛化提示。这一诉求与 #5701（Activity 面板不展示工具详情）相互印证。

- **例程可靠性是核心痛点**
  - 「租约过期」（#5456）、「No thread attached」（#5836、#5507）、「创建挂起」（#5504）、「无法删除例程」（#5510）——一系列例程生命周期问题表明调度与运行时的边界条件尚未稳固，尤其是长时间运行与多工具串联场景。

- **UI 细节反馈活跃**
  - 终端图标无法禁用（#5705）、图片透明（#5704）、侧边栏 UUID 闪现（#5706）、日志深链接需点两次（#5557）——用户对前端完成度敏感，这些 P3 级问题虽不致命，但影响整体精致度。

---

## 8. 待处理积压

以下 Issue/PR 长期未得到回复或修复，需维护者重点关注：

### 长期未关闭的 P1/P2

- **6/2 批次 P2 问题（超 2 个月未关闭）**
  - [#4339 Provider 工具调用被 InvalidInvocation 拒绝（MiniMax-M2.7）](https://github.com/nearai/ironclaw/issues/4339)
  - [#4340 Content 字段空校验错误](https://github.com/nearai/ironclaw/issues/4340)
  - [#4341 思维链暴露 + 卡死](https://github.com/nearai/ironclaw/issues/4341)
  - [#4342 认证弹窗刷新后残留并阻塞聊天](https://github.com/nearai/ironclaw/issues/4342)
  - [#4343 MCP 集成可用但驱动失败](https://github.com/nearai/ironclaw/issues/4343)
  - [#4344 代理镜像用户消息为自身响应](https://github.com/nearai/ironclaw/issues/4344)
  - 这批 Qwen3.6 / MiniMax 模型兼容性问题自 6 月起持续 Open，更新日期均为 8-07（可能仅被 touched），建议明确「能否复现」并批量决策。

- **[#5456 运行者租约过期（P1）](https://github.com/nearai/ironclaw/issues/5456)** — 6/30 创建，核心稳定性问题，无 fix PR。

### 积压的待合入 PR

- [**#7184 Nostr host 函数（XL, low risk）**](https://github.com/nearai/ironclaw/pull/7184) — 创建于 8-04，已 3 天无更新，功能完整但需核心成员 review。
- [**#7306 Guidance 统一（XL, medium risk）**](https://github.com/nearai/ironclaw/pull/7306) — 依赖 #7264 的较大改造，涉及 CI gate，需仔细评审。
- [**#7309 OAuth scope 参数修复**](https://github.com/nearai/ironclaw/pull/7309) — 修复 RFC 6749 违规，虽为小改动，但影响授权服务兼容性，需优先合并。

### 观察建议

- 大量 QA bug 集中在 7 月初创建、8-07 当天被关闭，说明项目正在集中清账；但 P1 的「租约过期」「Slack 投递错误」等核心稳定性问题仍需尽快指派。
- Inspector 系列（#7236/#7239/#7277）已进入第二轮 Review，建议明确目标版本，避免与主开发线脱节。

---

*本报告基于 2026-08-07 公开 GitHub 数据自动生成。链接均指向 nearai/ironclaw 仓库。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-08-07）

## 1. 今日速览

过去 24 小时项目**无新版本发布、无 PR 合并/关闭**，开发管道处于停滞状态；Issue 侧共 5 条更新，其中 3 条为新开 Issue（#2442 / #2443 / #2444），另 2 条为 4 月创建的旧 Issue 被标记为 stale。新反馈集中在输入框交互体验、自定义 Provider 兼容性、PowerShell 内核版本三个方面，说明用户仍在积极提交使用中遇到的问题，但长期积压的 PR 和 Issue 持续无人处理，构成项目当前最大的健康度隐患。综合评估：**社区反馈活跃度中等，维护响应活跃度偏低**。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

过去 24 小时**没有 PR 被合并或关闭**，未产生新的代码推进。目前仍有 2 个 PR 处于待合并状态，且均创建于 2026-04-01，已经积压超过 4 个月：

- [PR #1197](https://github.com/netease-youdao/LobsterAI/pull/1197) — Agent 管理页面交互优化（侧边栏交互路径过深、删除操作繁琐），自述与主分支存在冲突，需要解决冲突后合入。
- [PR #1199](https://github.com/netease-youdao/LobsterAI/pull/1199) — 为模型增加 contextWindow 与 maxTokens 配置，并传递到直接对话与 Cowork/OpenClaw 配置。

两个 PR 均为有实际价值的功能增强，对应社区多个相关问题。合并阻塞已成为项目迭代的主要瓶颈，建议维护者优先处理冲突并推进合并。

## 4. 社区热点

今日讨论热度整体不高，单条 Issue 评论数最高仅为 1。最受关注的是新开的功能请求：

- [Issue #2444](https://github.com/netease-youdao/LobsterAI/issues/2444) — 输入框编辑模式（Enter/Ctrl+Enter 切换）：用户痛点明确（长 Prompt 输入误发送），且给出了两种具体解决方案，是典型的"短平快"体验优化诉求，容易引起高频用户共鸣，后续评论预计会继续增加。

另外 [Issue #1196](https://github.com/netease-youdao/LobsterAI/issues/1196) 和 [Issue #1198](https://github.com/netease-youdao/LobsterAI/issues/1198) 在 8 月 6 日被标记为 stale，说明这两个 4 月创建的老 Issue 已经超过 4 个月未被维护者响应，社区等待时间过长。

## 5. Bug 与稳定性

按严重程度排列：

**中等**

- [Issue #2443](https://github.com/netease-youdao/LobsterAI/issues/2443) — 模型 ID 含斜杠的自定义 Provider 无法在界面中使用（SiliconFlow）。影响所有模型 ID 带 `/` 的 OpenAI 兼容服务商；应用版本为 2026.8.5.0，用户已给出明确复现路径与影响范围。**目前尚无 fix PR**。

**较低 / 体验问题**

- [Issue #1198](https://github.com/netease-youdao/LobsterAI/issues/1198) — 网关重启过程中进度条消失、重启状态不可见，且后续对话误报"模型不可用"；同时存在浏览器已打开但界面仍提示浏览器服务不可用的不一致问题。该 Issue 创建于 4 月，现已标记为 stale，**无 fix PR**。

## 6. 功能请求与路线图信号

- [Issue #2444](https://github.com/netease-youdao/LobsterAI/issues/2444) — 输入框「编辑模式」开关，支持 Enter 换行 / Ctrl+Enter 发送，并考虑引入 WYSIWYG 编辑器。此项需求实现成本低、用户感知强，符合高频编辑场景，**有望纳入下一迭代**。
- [Issue #1196](https://github.com/netease-youdao/LobsterAI/issues/1196) — 取消强制在工作目录创建 AGENTS.md/USER.md 等 6 个系统文件，建议改为全局公共目录或隐藏目录。该诉求涉及 Agent 工作目录的标准化设计，已 stale 但需求信号仍然真实。
- 路线图参考：若 [PR #1199](https://github.com/netease-youdao/LobsterAI/pull/1199) 被合并，将为后续模型级上下文窗口和 token 管理功能铺路，可以视为模型配置体系完善的前置步骤。

## 7. 用户反馈摘要

- **内核版本焦虑**：[Issue #2442](https://github.com/netease-youdao/LobsterAI/issues/2442) 用户对 LobsterAI exec 使用 PowerShell 5.1 而非 PowerShell 7.4 表达疑问，期望内核升级。这反映出部分专业用户对底层运行时现代化的敏感度较高，建议官方在文档中说明 shell 选用逻辑。
- **工作目录被"污染"**：[Issue #1196](https://github.com/netease-youdao/LobsterAI/issues/1196) 用户明确表达对工作目录被强制创建 6 个系统文件的不满，"太乱了，删了还要重建"——属于强干扰性的体验槽点。
- **状态反馈黑盒**：[Issue #1198](https://github.com/netease-youdao/LobsterAI/issues/1198) 用户在网关重启、浏览器服务检测两个场景中均遇到界面状态不可信的问题，说明系统在异步任务的状态同步与展示上存在明显短板。

## 8. 待处理积压

以下 4 个 Issue/PR 均创建于 2026-04-01，已积压超过 4 个月，其中 3 个已被 GitHub 标记为 stale。提醒维护者尽快评估是与社区同步进展，还是明确关闭。

| 编号 | 类型 | 标题 | 状态 | 链接 |
|---|---|---|---|---|
| #1196 | Issue | 不要强制在工作目录中建立 Agents.md、User.md 等 6 个文件 | stale，1 条评论 | [链接](https://github.com/netease-youdao/LobsterAI/issues/1196) |
| #1198 | Issue | 网关重启到一半进度条消失，重启状态不可见 | stale，1 条评论 | [链接](https://github.com/netease-youdao/LobsterAI/issues/1198) |
| #1197 | PR | Feature/Agent 管理页面交互优化 | 待合并，与主分支冲突，stale | [链接](https://github.com/netease-youdao/LobsterAI/pull/1197) |
| #1199 | PR | feat(model): add context window and token settings | 待合并，stale | [链接](https://github.com/netease-youdao/LobsterAI/pull/1199) |

其中 #1197 和 #1199 属于已实现但未合入的功能代码，长期滞留对贡献者积极性伤害最大，建议作为优先处理项。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-08-07

## 一、今日速览

过去 24 小时 CoPaw 仓库高度活跃：共产生 34 条 Issue 更新（新开/活跃 17 条、关闭 17 条），50 条 PR 更新（合并/关闭 30 条、待合并 20 条），无新版本发布。Issue 关闭率达 50%，显示维护团队对社区反馈响应较快；但同时仍有多个高影响稳定性问题（空响应不报错 [#6601](https://github.com/agentscope-ai/CoPaw/issues/6601)、MCP 工具规律性失效 [#6732](https://github.com/agentscope-ai/CoPaw/issues/6732)）开放未被认领，是当前项目健康度的主要风险点。从 PR 流向看，上下文架构重构、配置持久化加固、ReMe 记忆系统增强均有实质推进，2.1.0-beta 迭代明显加速。总体评估：**活跃度极高，健康度中上，处于稳定性加固与新功能并行的快速迭代期**。

## 二、版本发布

过去 24 小时无新版本发布。

## 三、项目进展

### 已合并/关闭的关键 PR

- **上下文协议统一**：[#6611 refactor(context)](https://github.com/agentscope-ai/CoPaw/pull/6611) 将 Scroll 收敛为唯一上下文协议，消除 Native/Scroll 双分支，使状态恢复、自动记忆与手动压缩对齐 AgentScope 2.0 Agent 基类生命周期。这是影响后续所有记忆/上下文功能的基础性架构重构。
- **记忆系统配置链路补齐**：[#6741 feat(memory)](https://github.com/agentscope-ai/CoPaw/pull/6741) 与 [#6739 docs(memory)](https://github.com/agentscope-ai/CoPaw/pull/6739) 实现 ReMe embedding 模型工厂（OpenAI-compatible/DashScope/Gemini/Ollama）、保存前真实连通性验证及中英文配置指南。原 PR 因来源 fork 删除而关闭，已由 [#6772](https://github.com/agentscope-ai/CoPaw/pull/6772)、[#6771](https://github.com/agentscope-ai/CoPaw/pull/6771) 重新提交并同步最新 main。
- **共享文件系统持久化加固**：[#6744 fix(config)](https://github.com/agentscope-ai/CoPaw/pull/6744) 将 agent.json / access_control.json 迁移改为原子写入，并保留目标持久化失败时的旧字段。现已由 [#6767](https://github.com/agentscope-ai/CoPaw/pull/6767) 重新提交，加入设备号/inode 级缓存键，继续 review 中。
- **harness 降级与工具名编辑修复**：[#6664 fix(harnesses)](https://github.com/agentscope-ai/CoPaw/pull/6664) 使 harness 在无 Codex CLI 环境下优雅降级；[#6530 Fix per-tool call limit names](https://github.com/agentscope-ai/CoPaw/pull/6530) 修复工具名无法编辑、重复/空值校验缺失问题，并补充回归测试。

### 值得关注的进行中 PR

- [#6774 fix(modes)](https://github.com/agentscope-ai/CoPaw/pull/6774) 修复 /goal、/mission 未注册 doom-loop/rubric 完成门禁的问题。
- [#6564 fix(memory)](https://github.com/agentscope-ai/CoPaw/pull/6564) 修复压缩前 pending turns 未 flush 的问题，对应 [#6555](https://github.com/agentscope-ai/CoPaw/issues/6555)，已 under review 8 天。
- [#6659 feat(providers)](https://github.com/agentscope-ai/CoPaw/pull/6659) 实现带冷却机制的模型自动 fallback，关联 #2199/#1327/#2089。
- [#6759 fix(context)](https://github.com/agentscope-ai/CoPaw/pull/6759) 在会话压缩/恢复后保留 Gemini thought signature 等 tool call 扩展元数据。
- [#6715](https://github.com/agentscope-ai/CoPaw/pull/6715) / [#6769](https://github.com/agentscope-ai/CoPaw/pull/6769) 为 OneBot 渠道补齐远程媒体与引用回复支持。

## 四、社区热点

按评论数排序，今日讨论最集中的 Issue：

- **[#6684 增加频道的重试功能（8 评论，已关闭）](https://github.com/agentscope-ai/CoPaw/issues/6684)**：自建 Matrix 用户反映 QwenPaw 启动快于 Matrix 服务导致连接失败后无重试/健康检测，每次服务器启动后需手动重新保存频道才能恢复。诉求指向渠道层连接自愈能力。
- **[#6588 spawn_subagent 空 batch 占位符被误判为批量模式（6 评论，已关闭）](https://github.com/agentscope-ai/CoPaw/issues/6588)**：Responses 兼容路径在单任务调用时返回空 batch 占位符，QwenPaw 将任何非 None 值视为批量模式，属兼容性边界 bug。
- **[#6601 QwenPaw 不报空响应错误（5 评论，开放中）](https://github.com/agentscope-ai/CoPaw/issues/6601)**：长会话因工具调用累积逼近上下文窗口后，模型空响应但 QwenPaw 不报错，会话彻底失去响应。用户认为是框架层缺陷。
- **[#6667 DeepSeek thinking mode 多轮失败（5 评论，已关闭）](https://github.com/agentscope-ai/CoPaw/issues/6667)**：OpenAI formatter 跳过 ThinkingBlock 导致 reasoning_content 多轮缺失，现有 fallback 仅对首次生效。

热点议题集中在**连接稳定性、长会话可靠性、模型兼容性**三个方向，与 2.1.0-beta 当前修复重心基本一致。

## 五、Bug 与稳定性

### 严重/高影响（仍开放，暂无直接 fix PR）

- **[#6601 空响应不报错](https://github.com/agentscope-ai/CoPaw/issues/6601)**：长会话静默失活，会话彻底无响应。建议优先处理。
- **[#6768 多步任务后无限循环](https://github.com/agentscope-ai/CoPaw/issues/6768)**：复杂任务完成后 agent 进入死循环，用户消息被接收但数小时不处理。
- **[#6732 MCP 工具规律性失效](https://github.com/agentscope-ai/CoPaw/issues/6732)**：间隔数小时/一晚后 MCP 工具变“未注册”，重启 Docker 容器恢复。
- **[#6726 长会话 tool 消息 400](https://github.com/agentscope-ai/CoPaw/issues/6726)**：20–30+ 组 tool_call/tool_result 累积后报 “Messages with role 'tool' must be a response to a preceding message with 'tool_calls'”。
- **[#6756 run_tool_batch 始终报错](https://github.com/agentscope-ai/CoPaw/issues/6756)**：2.1.0b1 中对任何 agent 调用均报 “No toolkit available in current context”，应检查 AgentContextVarsSetupHook 的注入时机。
- **[#6755 跨天日期错乱](https://github.com/agentscope-ai/CoPaw/issues/6755)**：跨天长会话中将 8/6 周四误判为周三，导致日程被定错一天。
- **[#6722 forked subagent 误报完成](https://github.com/agentscope-ai/CoPaw/issues/6722)**：worktree finalization 失败但后台任务仍报告 completed，提交缺失。

### 中低影响（已关闭/已有处理）

- [#6700 超大工具输出导致历史会话卡死](https://github.com/agentscope-ai/CoPaw/issues/6700)：建议实施输出截断与历史分页，已关闭。
- [#6588 spawn_subagent batch 误判](https://github.com/agentscope-ai/CoPaw/issues/6588)、[#6667 DeepSeek thinking 多轮失败](https://github.com/agentscope-ai/CoPaw/issues/6667)：已关闭。
- [#6731 execute_shell_command sandbox_config 崩溃](https://github.com/agentscope-ai/CoPaw/issues/6731)：dataclass replace() 类型错误，已关闭。
- [#6557 MCP 工具名连字符导致 400](https://github.com/agentscope-ai/CoPaw/issues/6557)：违反 OpenAI Function Calling 命名规范，已关闭。
- [#6698 浏览器 SDK open() WireProtocolError](https://github.com/agentscope-ai/CoPaw/issues/6698)、[#6762 桌面版长命令溢出](https://github.com/agentscope-ai/CoPaw/issues/6762)：已关闭。

整体看，已关闭 bug 多为单点兼容性问题；真正威胁日常使用的是 [#6601](https://github.com/agentscope-ai/CoPaw/issues/6601)、[#6732](https://github.com/agentscope-ai/CoPaw/issues/6732)、[#6726](https://github.com/agentscope-ai/CoPaw/issues/6726) 这类长会话/长运行场景才触发的可靠性缺陷，其修复优先级应高于新功能开发。

## 六、功能请求与路线图信号

- **[#6761 支持 MCP 2026-07-28 stateless 规范](https://github.com/agentscope-ai/CoPaw/issues/6761)**：MCP 最大版本修订，协议核心从有状态握手迁移到无状态请求/响应。若需兼容新版 MCP server，这是必须排期的破坏性兼容项。
- **[#6724 MCP tool-call 超时配置](https://github.com/agentscope-ai/CoPaw/issues/6724)**：当前无超时上限，慢/挂起的 MCP server 可无限阻塞 turn；与 #6732 稳定性问题互为印证。
- **[#6770 Chrome tab 生命周期可配置](https://github.com/agentscope-ai/CoPaw/issues/6770)**：希望浏览器会话可跨多个响应周期保持。
- **[#6728 微信审批支持中文操作](https://github.com/agentscope-ai/CoPaw/issues/6728)**：渠道本地化体验优化。
- **[#6736](https://github.com/agentscope-ai/CoPaw/issues/6736) / [#6737 会话标题优化](https://github.com/agentscope-ai/CoPaw/issues/6737)**：两个相关 UX 请求，建议取消或显著改善自动标题的表意质量。
- **[#6765 增加匈牙利语等欧盟语言](https://github.com/agentscope-ai/CoPaw/issues/6765)**：小型 i18n 请求，来自热情的非英语用户。
- **[#6684 频道重试机制](https://github.com/agentscope-ai/CoPaw/issues/6684)**：已关闭，预计已被纳入近期修复计划。

结合当前 PR，下一版本候选功能较清晰：**模型 fallback 与冷却（#6659）、ReMe embedding 全链路（#6772）、OneBot 渠道增强（#6715/#6769）、MCP 超时与 stateless 适配（若排期）**。

## 七、用户反馈摘要

- **Matrix 自建用户（[#6684](https://github.com/agentscope-ai/CoPaw/issues/6684)、[#6476](https://github.com/agentscope-ai/CoPaw/issues/6476)）**：渠道连接稳定性是最大痛点——启动竞态失败后无自动恢复、E2E 加密不可用，需手动重装依赖，技术门槛过高。
- **长会话重度用户（[#6601](https://github.com/agentscope-ai/CoPaw/issues/6601)、[#6726](https://github.com/agentscope-ai/CoPaw/issues/6726)）**：多轮工具调用后模型静默失败或 400 报错，会话作废的挫败感强烈，期待框架层兜底。
- **日程类任务用户（[#6755](https://github.com/agentscope-ai/CoPaw/issues/6755)）**：跨天日期判断错乱已造成实际日程错误，用户信任受损。
- **Windows 桌面用户（[#6762](https://github.com/agentscope-ai/CoPaw/issues/6762)、[#6736](https://github.com/agentscope-ai/CoPaw/issues/6736)）**：长命令溢出不可读、自动标题无参考价值，虽不致命但高频影响观感。
- **海外用户（[#6775](https://github.com/agentscope-ai/CoPaw/issues/6775)）**：Malwarebytes 将桌面版报为 Trojan Loader，用户表示恐慌并卸载等待回应。建议尽快发布安全说明或代码签名校验指引。
- **多语言用户（[#6765](https://github.com/agentscope-ai/CoPaw/issues/6765)）**：匈牙利语用户表达对 Qwen 系列的喜爱，同时希望补齐欧盟语言支持。

## 八、待处理积压

- **[#6612 qwenpaw 2.0.1 与 agentscope 2.0.4.post1 不兼容](https://github.com/agentscope-ai/CoPaw/issues/6612)**（2026-07-31 开放，7 天）：导致 proactive 子系统崩溃和工具权限死锁。[#6615](https://github.com/agentscope-ai/CoPaw/pull/6615) 仅覆盖 config 加载部分，剩余问题无归属。
- **[#6601 空响应不报错](https://github.com/agentscope-ai/CoPaw/issues/6601)**（2026-07-31 开放，7 天）：高影响、无 PR 认领。
- **[PR #6564 fix(memory) flush pending turns](https://github.com/agentscope-ai/CoPaw/pull/6564)**（2026-07-30 创建，under review 8 天）：修复 #6555，review 周期偏长，建议加速。
- **[#6726 长会话 tool 角色 400](https://github.com/agentscope-ai/CoPaw/issues/6726)**（2026-08-05 开放，2 天）：影响长上下文用户。
- **[#6756 run_tool_batch 完全不可用](https://github.com/agentscope-ai/CoPaw/issues/6756)**（2026-08-06 开放）：2.1.0b1 新功能不可用，应作为 beta 阻塞项优先处理。
- **[PR #6659 模型 fallback 与冷却机制](https://github.com/agentscope-ai/CoPaw/pull/6659)**（2026-08-03 创建，under review 4 天）：关联 #2199/#1327/#2089 三个历史 issue，落地价值高。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-07

## 1. 今日速览

过去 24 小时项目整体活跃度较高：31 条 Issue 更新（22 条活跃、9 条关闭），50 条 PR 更新（45 条待合并、5 条合并/关闭），无新版本发布。安全与稳定性修复是本日主线——关闭了 S0 严重度的 `execute_pipeline` 权限绕过漏洞（#7947）、Bedrock Nova 2 缓存错误（#8720）以及 ZeroCode 命令描述符单一化重构（#9172）。社区讨论高度集中在治理流程优化（#6808，19 条评论，为当前评论数最高 Issue），而新报告的问题则密集指向 SOP 子系统的静默失败（#9779、#9786、#9783、#9784 共 4 个新 bug）。v0.8.5 稳定线（#9459）仍在 8 月 30 日截止日期内推进，整体项目健康度良好，但 SOP 子系统与 RFC 决策积压需要关注。

## 2. 版本发布

今日无新版本发布（最近明确提及的版本为 v0.8.3 与 v0.8.4，v0.8.5 稳定线正在进行中，见 [Issue #9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459)）。

## 3. 项目进展

今日共有 5 个 PR 合并/关闭，对应修复了 5 个 Issue，涵盖安全、兼容性、架构重构、文档与测试稳定性：

- **[PR #9737](https://github.com/zeroclaw-labs/zeroclaw/pull/9737) fix(tools): enforce agent policy in pipelines** — 关闭 [Issue #7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947)（S0 严重度 confused deputy 漏洞）。`execute_pipeline` 现在只会在知晓有效 per-agent 工具策略后构建，并将外部 registry 的内存与 ACP 投递谓词应用于 eager pipeline 子项，修复了子工具步骤绕过 per-agent `ToolAccessPolicy` 的安全问题。
- **[PR #8943](https://github.com/zeroclaw-labs/zeroclaw/pull/8943) fix(providers): exclude Nova 2 from Bedrock prompt caching** — 关闭 [Issue #8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720)。`us.amazon.nova-2-lite-v1:0` 模型会因 `cachePoint` 参数报 `400` 错误，此 PR 将 Nova 2 从开启 prompt caching 的模型白名单中排除。
- **[PR #9329](https://github.com/zeroclaw-labs/zeroclaw/pull/9329) refactor(zerocode): derive slash commands from the shared command catalogue** — 关闭 [Issue #9172](https://github.com/zeroclaw-labs/zeroclaw/issues/9172)。`zeroclaw-commands::BUILTIN_COMMANDS` 成为命令身份/别名/TUI 可用性的唯一来源，daemon 将活的目录物化到 RPC `initialize` 响应中，ZeroCode 变为纯 RPC 客户端。
- **[PR #9659](https://github.com/zeroclaw-labs/zeroclaw/pull/9659) fix(docs): disambiguate contextual protected literals** — 关闭 [Issue #9657](https://github.com/zeroclaw-labs/zeroclaw/issues/9657)。有歧义的 registry 显示名称（如 `Signal`）仅在源条目提供产品上下文时才被视为受保护字面量。
- **[PR #9764](https://github.com/zeroclaw-labs/zeroclaw/pull/9764) test(config): widen scheduler-latency margin** — 关闭 [Issue #9763](https://github.com/zeroclaw-labs/zeroclaw/issues/9763)。将 onepassword 非阻塞加载测试的 450ms 调度器延迟预算放宽，修复 CI 高负载下的 flaky 测试。

此外，[PR #9704](https://github.com/zeroclaw-labs/zeroclaw/pull/9704)（修正三个 `cron add` 示例）预计将关闭 [Issue #9672](https://github.com/zeroclaw-labs/zeroclaw/issues/9672)，目前尚未合并。

## 4. 社区热点

今日评论数最高的 Issue 集中在治理流程与架构 RFC，反映出社区对决策效率和 agent 互操作能力的强烈关注：

- **[Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) RFC: Work Lanes, Board Automation, and Label Cleanup** — 19 条评论。自 5 月 20 日创建至今已近 3 个月，状态仍为 "Ratification deferred / rollout in progress"，当前修订版已是 Rev. 24。该 RFC 旨在让工作路由更轻松、减少维护者的额外负担，但长期悬而未决本身就说明了治理流程的痛点。
- **[Issue #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) Maintainer decision queue for RFCs and design issues** — 11 条评论。这是 RFC/设计问题的维护者决策队列 tracker，配合 #6808 共同指向同一个诉求：让 RFC 审查和决策更加透明、有序。
- **[Issue #9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) RFC: A2A outbound client (A2ATool)** — 11 条评论。社区希望 ZeroClaw agent 能主动调用外部 A2A 兼容 agent，而非只能被动接收（A2AServer 已在 v0.8.2 发布）。这是 agent 互操作性的关键缺口。
- **[Issue #9246](https://github.com/zeroclaw-labs/zeroclaw/issues/9246) RFC: Preserve Todo tracker configuration during ZeroCode ownership migration** — 11 条评论。关注 ZeroCode 所有权迁移时 Todo tracker 配置的保留，由 agent 起草、多轮评审修订。
- **[Issue #6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) RFC: Provenance, conversation binding, and reply contract for internally initiated agent turns** — 10 条评论。经过完整性审查后新增了四个边界澄清（身份稳定性、绑定并发、回复生命周期等）。

## 5. Bug 与稳定性

今日新报告的 Bug 集中在 SOP 子系统，存在多处静默失败问题，另有安全相关的未修复漏洞需要重点关注：

**安全风险**

- **[Issue #9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) verifiable-intent evaluates constraints without verifying the credential chain** — p2 / risk: high / 无 fix PR。`vi_verify` 的 `evaluate_constraints` 直接信任调用方提供的 `fulfillment` 对象，而参考实现要求约束检查只在链式验证器已建立加密结果后运行。

**SOP 子系统（今日新增 4 个相关 Bug，均为静默失败或数据丢失）**

- **[Issue #9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779) sops_dir 文档默认值未被 daemon 采纳** — p1 / risk: high。两个 daemon 启动路径都在 `sops_dir.is_some()` 上门控整个 SOP 子系统，依赖文档默认值的用户会静默地完全无法加载 SOP。
- **[Issue #9786](https://github.com/zeroclaw-labs/zeroclaw/issues/9786) 畸形 SOP.toml 被静默丢弃** — p1 / risk: high。`sop list` 省略、`sop validate` 报成功、`sop validate <name>` 显示 "SOP not found"，与 SOP 不存在完全无法区分。
- **[Issue #9784](https://github.com/zeroclaw-labs/zeroclaw/issues/9784) 多步 SOP 运行中途被标记失败且无审计事件** — p2 / risk: high。agent 在步骤进行中被标记 failed，无审计线索。
- **[Issue #9783](https://github.com/zeroclaw-labs/zeroclaw/issues/9783) finish_run 接受失败原因但直接丢弃** — p2 / risk: medium。失败的 SOP 运行记录了"失败了"但没记录"为什么失败"。
- **[Issue #9792](https://github.com/zeroclaw-labs/zeroclaw/issues/9792) git channel 空 peer allowlist 以 DEBUG 级别静默丢弃所有事件** — p2 / risk: medium。
- **[Issue #9780](https://github.com/zeroclaw-labs/zeroclaw/issues/9780) cron 触发的 SOP 无法执行网络操作** — p2 / risk: high。能力集没有任何 HTTP 成员，`shell.exec` 和 `notify.channel` 是不可满足的占位符。

**数据完整性**

- **[Issue #9770](https://github.com/zeroclaw-labs/zeroclaw/issues/9770) cron update 静默丢弃 declarative 作业的六列变更** — p1 / risk: high。`command`、`name`、`expression`/`schedule`、`session_target`、`allowed_tools`、`uses_memory` 的更新被无提示丢弃，要求改为显式拒绝。

**其他**

- **[Issue #9771](https://github.com/zeroclaw-labs/zeroclaw/issues/9771) zeroclaw-gateway 默认 feature 面下 clippy -D warnings 失败** — p2。四个测试 helper 被 `#[cfg(test)]` 门控但调用点在 `channel-linq` feature 后，feature 关闭时成为死代码。
- **[Issue #9796](https://github.com/zeroclaw-labs/zeroclaw/issues/9796) cron parent help 打印无效的 add-at/add-every/once 示例** — p2 / 已接受。在 #9704 修正 `cron add` 后，父命令的示例仍然错误。

**今日已修复（关闭）**：[#7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947)（S0 安全修复）、[#8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720)（Bedrock Nova 2）、[#9672](https://github.com/zeroclaw-labs/zeroclaw/issues/9672)（待 #9704）、[#9657](https://github.com/zeroclaw-labs/zeroclaw/issues/9657)（文档）、[#9763](https://github.com/zeroclaw-labs/zeroclaw/issues/9763)（flaky test）。

## 6. 功能请求与路线图信号

今日的功能请求呈现出清晰的路线图信号，主要集中在三个方向：**治理流程现代化、agent 互操作扩展、评估体系落地**。

**治理与流程**

- [Issue #9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496) RFC: Streamline RFC scope, discussion, voting, and assignment — p1 / risk: high。指出当前七天的讨论期、广泛的全体一致要求和手动投票协调拖慢了决策速度，与 #6808、#8692 形成治理改进三部曲。
- [Issue #9530](https://github.com/zeroclaw-labs/zeroclaw/issues/9530) RFC: 定义高风险路径中仅测试变更的风险优先级 — 解决维护者文档中 `risk:low` 定义的冲突。

**Agent 能力扩展**

- [Issue #9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) A2A outbound client（A2ATool）— 已接受，risk: high。让 ZeroClaw agent 主动调用外部 A2A agent，补齐 #3566 拆分的另一半。
- [PR #9104](https://github.com/zeroclaw-labs/zeroclaw/pull/9104) Grok Build ACP model provider — 新增 `grok_cli` provider family，通过 `grok agent stdio` ACP JSON-RPC 通信（不把 prompt 放入 argv），XL 规模 PR。
- [Issue #9788](https://github.com/zeroclaw-labs/zeroclaw/issues/9788) 在系统提示中报告活动 shell 方言 — 让模型不必从 OS 名称猜测 shell 语言，p3，当前被阻塞。

**配置与安全**

- [Issue #7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) Per-model capability & context-window 配置 — p1 / risk: high / 需要维护者审查。解决模型能力、上下文预算、UI 显示来自不同来源的现状。
- [Issue #9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) WhatsApp Web `allowed_groups` 空列表应视为 permit-none — p1 / risk: high。当前空列表等于放行所有群组，存在安全隐患。
- [PR #9701](https://github.com/zeroclaw-labs/zeroclaw/pull/9701) 聊天 WebSocket 保活 — `[gateway].websocket_ping_interval_secs` 配置项，防止中间代理杀掉空闲连接。
- [PR #9772](https://github.com/zeroclaw-labs/zeroclaw/pull/9772) Telegram 群聊 per_user_session 开关 — 解决多人协作同一群组时 session 被硬编码为 Sender 的问题。

**评估体系落地（#7065 Phase 2 系列）**

- [PR #9214](https://github.com/zeroclaw-labs/zeroclaw/pull/9214) live execution mode — 在 bwrap 沙箱中对真实 provider 运行评估用例。
- [PR #9212](https://github.com/zeroclaw-labs/zeroclaw/pull/9212) CI 门禁接入 replay 回归套件。
- [PR #9221](https://github.com/zeroclaw-labs/zeroclaw/pull/9221) 基线文件 + 回归差异对比 + 能力跟踪。
- [PR #9222](https://github.com/zeroclaw-labs/zeroclaw/pull/9222) 每个维度的 LLM-judge 评分器，校准前保持诊断模式。

以上四个 PR 均为 IftekharUddin 提交、XL 规模、目前全部处于 needs-author-action 状态——评估基础设施的代码已基本就绪，等待作者回应维护者审查意见。这将是 v0.8.5 或 v0.9.0 的重要功能块。

## 7. 用户反馈摘要

- **Bedrock Nova 2 用户遇到随机缓存错误**（[#8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720)，已修复）：`us.amazon.nova-2-lite-v1:0` 在长对话中随机报 `400: extraneous key [cachePoint] is not permitted`，用户期望通过配置文件禁用缓存。修复方案是直接从白名单排除 Nova 2 家族。
- **Kimi Code 订阅用户无法使用 ZeroClaw**（[#657](https://github.com/zeroclaw-labs/zeroclaw/issues/657)，已关闭）：用户已有 Kimi Code 订阅且可在 OpenClaw 使用，但 ZeroClaw 不支持；明确区分 Moonshot 与 Kimi Coding 是不同 provider。需要确认关闭原因是否为已实现或另有替代方案。
- **SOP 子系统体验不佳**（[#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779)、[#9786](https://github.com/zeroclaw-labs/zeroclaw/issues/9786)）：用户按照文档配置 SOP 后系统完全静默——不报错、不警告、不写日志。多个报告叠加，说明 SOP 子系统的可观测性和配置校验存在系统性不足，严重影响用户对功能可用性的信任。
- **cron 帮助文档误导新用户**（[#9672](https://github.com/zeroclaw-labs/zeroclaw/issues/9672)，已关闭）：三个 `--help` 示例全部运行失败，每个失败原因还各不相同；空状态提示还打印第四种错误形式。这类问题直接抬高新用户的上手成本。
- **Telegram 群聊协作场景受限**（[PR #9772](https://github.com/zeroclaw-labs/zeroclaw/pull/9772)）：多位用户在同一群组/讨论串中与机器人协作时——一人上传文件并说明任务、另一人追问——会话被硬编码为每个发送者独立 session，无法共享上下文。

## 8. 待处理积压

**长期未决的核心治理 RFC**

- [Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) RFC: Work Lanes, Board Automation, and Label Cleanup — 创建于 2026-05-20，至今 79 天，19 条评论，状态 "Ratification deferred" 长期未推进。作为社区评论数最高的 Issue，它同时也是治理流程本身效率低下的例子。建议维护者尽快给出明确的接受/拒绝/拆分决定，或委托给 #8692 决策队列处理。

**需要作者响应的 PR（needs-author-action，共 9 个）**

- [PR #9221](https://github.com/zeroclaw-labs/zeroclaw/pull/9221) eval baseline + regression gating（XL）
- [PR #9214](https://github.com/zeroclaw-labs/zeroclaw/pull/9214) eval live execution mode（XL, security:bubblewrap）
- [PR #9212](https://github.com/zeroclaw-labs/zeroclaw/pull/9212) eval replay regression CI gate
- [PR #9222](https://github.com/zeroclaw-labs/zeroclaw/pull/9222) LLM-judge grader（XL）
- [PR #9203](https://github.com/zeroclaw-labs/zeroclaw/pull/9203) SOP authenticated HTTP fan-in（XL）
- [PR #9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) gateway keep agent turns alive after viewer disconnect（p1）
- [PR #8955](https://github.com/zeroclaw-labs/zeroclaw/pull/8955) Telegram batch media group attachments（XL）
- [PR #9215](https://github.com/zeroclaw-labs/zeroclaw/pull/9215) Compose gateway reachable（S）
- [PR #9104](https://github.com/zeroclaw-labs/zeroclaw/pull/9104) Grok Build ACP provider（L）

其中 [PR #9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) 为 p1 优先级且已等待 27 天，值得优先催办。上述 PR 主要集中在 IftekharUddin 的 eval 系列（#7065 Phase 2 的四个 PR），代码量庞大（多个 XL），已提交超过两周，存在与 master 冲突的风险，建议维护者安排专场 review 或明确分批合并计划。

---

**数据来源**：[ZeroClaw GitHub Repository](https://github.com/zeroclaw-labs/zeroclaw)（数据窗口：2026-08-06 至 2026-08-07）

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*