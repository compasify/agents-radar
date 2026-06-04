# OpenClaw 生态日报 2026-06-04

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-04 00:36 UTC

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

# OpenClaw 项目动态日报 | 2026-06-04

---

## 1. 今日速览

OpenClaw 今日维持**极高活跃度**：24小时内 500 条 Issues 更新（367 活跃/新开，133 关闭）与 500 条 PR 更新（402 待合并，98 已合并/关闭），形成 **2:1 的活跃/收敛比**，表明社区贡献旺盛但合并吞吐存在瓶颈。3 个新版本连续发布（v2026.6.2-beta.1、v2026.6.1、v2026.6.1-beta.3），聚焦安装安全策略重构与运行时恢复可靠性。核心风险领域集中于**会话状态持久化**（SQLite 迁移）、**消息投递可靠性**（Discord/Telegram/iMessage）及**认证刷新机制**（Codex OAuth、MiniMax），多个 P1 级回归问题待修复 PR 验证。

---

## 2. 版本发布

### [v2026.6.2-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.6.2-beta.1) ⭐ 最新 Beta
| 属性 | 内容 |
|:---|:---|
| **发布日期** | 2026-06-03/04 |
| **核心变更** | 插件/技能安装安全策略重构 |
| **破坏性变更** | ⚠️ **是** — 废弃旧版 "dangerous-code scanner" 路径，迁移至 operator install policy |

**Highlights:**
- **安装策略统一化** ([#89516](https://github.com/openclaw/openclaw/issues/89516), thanks @joshavant): 所有插件与技能安装（package、archive、source、upload、marketplace）现通过 operator install policy 执行，替代此前基于危险代码扫描器的不透明路径
- **可观测性增强**: CLI `doctor`、ClawHub 界面及故障排查文档全面更新，安装失败归因更清晰
- **迁移注意**: 依赖旧版 scanner 路径的 CI/CD 流水线或自定义脚本需更新至新 policy 接口；企业部署建议先行在 staging 验证 operator 权限边界

### [v2026.6.1](https://github.com/openclaw/openclaw/releases/tag/v2026.6.1) ⭐ 稳定版
| 属性 | 内容 |
|:---|:---|
| **发布日期** | 2026-06-03/04 |
| **核心主题** | 运行时恢复鲁棒性 + 通道稳定性 |

**Highlights:**
- **Agent 与 CLI 运行时恢复** ([#88129](https://github.com/openclaw/openclaw/issues/88129), [#88136](https://github.com/openclaw/openclaw/issues/88136), [#88141](https://github.com/openclaw/openclaw/issues/88141), [#88162](https://github.com/openclaw/openclaw/issues/88162), [#88182](https://github.com/openclaw/openclaw/issues/88182)): 中断工具调用、过期会话绑定、compaction handoff 及媒体投递重试场景下的清理逻辑显著改善
- **通道稳定性**: Telegram、WhatsApp、iMessage、Slack 的消息投递抖动降低

### [v2026.6.1-beta.3](https://github.com/openclaw/openclaw/releases/tag/v2026.6.1-beta.3)
- 内容同 v2026.6.1（稳定版前最后一个 beta 验证）

---

## 3. 项目进展

### 已合并/关闭的关键 PR（今日更新队列中）

| PR | 作者 | 核心贡献 | 状态 |
|:---|:---|:---|:---|
| [#88020](https://github.com/openclaw/openclaw/pull/88020) | bryanbaer | **修复 Anthropic thinking block 签名过期导致的硬会话失败** — 补充 `REPLAY_INVALID_RE` 匹配 "Invalid signature in thinking block"，实现恢复重试而非彻底崩溃 | ✅ 已合并 |
| [#67423](https://github.com/openclaw/openclaw/pull/67423) | presidenzo | **修复 Auth router 多 provider entry 的 apiKey 解析错误** — 解决 split provider 共享同一 upstream endpoint 时选错 key 的安全问题 | ✅ 已合并 |
| [#48780](https://github.com/openclaw/openclaw/pull/48780) | koden588-blip | **修复 Windows exec()/read() 命令参数污染** — 消除 `</arg_value>>` 后缀注入 | ✅ 已合并 |
| [#86811](https://github.com/openclaw/openclaw/pull/86811) | 18855472958-wq | **修复 WebChat 工具调用时 dashboard 冻结与 WebSocket 断连** | ✅ 已合并 |
| [#73699](https://github.com/openclaw/openclaw/pull/73699) | mdpoirier-abbey | **Discord voice-as-IO 桥接** — 语音频道 I/O 复用至文本会话，避免孤立语音会话 | ✅ 已合并 |
| [#71992](https://github.com/openclaw/openclaw/pull/71992) | rzhnrhjr6j-cloud | **修复 Control UI 重复渲染助手回复**（2026.4.21 回归） | ✅ 已合并 |
| [#67793](https://github.com/openclaw/openclaw/pull/67793) | Jiangqi-7 | **修复 queue.mode "collect" 批处理失效** — debounce 窗口内消息仍被单独处理 | ✅ 已合并 |
| [#67035](https://github.com/openclaw/openclaw/pull/67035) | q7793527 | **修复 Windows chat UI 输入吞噬与流式回复不可见**（2026.4.14 回归） | ✅ 已合并 |
| [#63427](https://github.com/openclaw/openclaw/pull/63427) | djimit | **修复 CLI WebSocket probe 无退避重试** — 设备未配对场景 1req/s 无限重试 | ✅ 已合并 |

**整体推进评估**: 今日合并聚焦**会话恢复韧性**（thinking block 签名、stuck session、工具调用中断）与**通道可靠性**（Discord voice、WebSocket 重连、队列批处理），v2026.6.x 版本在" graceful degradation"方向迈出实质性步伐。但 **402 个待合并 PR** 的积压表明 review 带宽仍是瓶颈。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---|:---|:---|
| 1 | **SQLite 迁移 accessor seam 追踪** | 17 | 要求将 session/transcript 运行时状态迁移拆分为可审查的小 PR，拒绝"大爆炸式重写" | [#88838](https://github.com/openclaw/openclaw/issues/88838) |
| 2 | **Heartbeat 隔离模式多重重置** | 14 | 孤立模式下心跳节奏停滞、`heartbeat last` 误标 exec-event、lightContext 未瘦身 | [#65161](https://github.com/openclaw/openclaw/issues/65161) |
| 3 | **Windows chat UI 回归**（已关闭） | 14 | 输入文本被吞噬、流式回复刷新前不可见 — **生产环境阻断级体验** | [#67035](https://github.com/openclaw/openclaw/issues/67035) |
| 4 | **Codex app-server turn-completion stall 回归** | 12 | v2026.5.27 复现 #84076 已修复问题，"Codex stopped before confirming the turn was complete" | [#88312](https://github.com/openclaw/openclaw/issues/88312) |
| 5 | **Bedrock mantle 无发现开关** | 11 | 每次请求强制 IAM token 发现，无 `config.discovery.enabled` 门控 | [#67288](https://github.com/openclaw/openclaw/issues/67288) |
| 6 | **Mattermost slash commands 503** | 11 | v2026.4.15 回归，"not yet initialized" | [#68113](https://github.com/openclaw/openclaw/issues/68113) |
| 7 | **同 session key 反复 hard reset** | 11 | 高 `reserveTokensFloor` 下仍溢出，retry loop 重复注入 bootstrap context | [#63216](https://github.com/openclaw/openclaw/issues/63216) |

**诉求分析**: 
- **架构层面**（#88838）: 社区对大型状态迁移的**可审查性**要求极高，"branch-by-abstraction"成为共识模式
- **企业运维**（#65161, #63216）: 心跳与会话状态机制在边缘场景（隔离模式、高负载长会话）的**可预测性**不足
- **平台特异性**（#67035, #68113, #67288）: Windows UI 与 Mattermost/Bedrock 企业集成的**回归测试覆盖**存在缺口

---

## 5. Bug 与稳定性

### P1 级（生产影响/数据丢失风险）

| Issue | 描述 | 回归？ | Fix PR 状态 | 链接 |
|:---|:---|:---|:---|:---|
| **Codex turn-completion stall** | 多工具 agent turn 可靠失败，"Codex stopped before confirming..." | ✅ 是（#84076 复现） | 🔄 [#90075](https://github.com/openclaw/openclaw/pull/90075) 检测 unsigned thinking-only stall | [#88312](https://github.com/openclaw/openclaw/issues/88312) |
| **Codex client mid-turn 关闭** | 图片/工具请求时 client 断开，大 logs_2.sqlite 场景 | ❌ | ⏳ 待 repro | [#86214](https://github.com/openclaw/openclaw/issues/86214) |
| **Claude CLI 每 turn 重置** | group channel 中 `extraSystemPromptHash` 漂移 | ❌ | ⏳ 待 fix | [#69118](https://github.com/openclaw/openclaw/issues/69118) |
| **Session transcript doomloop** | 崩溃-重启循环膨胀 transcript 至 OOM | ❌ | ⏳ 待 fix | [#63998](https://github.com/openclaw/openclaw/issues/63998) |
| **Stuck session recovery 双重失效** | processing 状态阻塞，systemd 超时强杀 | ❌ | ⏳ 待 fix | [#76038](https://github.com/openclaw/openclaw/issues/76038) |
| **OpenAI Codex SSE 本地 abort** | 上游已开始响应后本地 abort， surfaced 为 408 | ❌ | ⏳ 待 fix | [#66561](https://github.com/openclaw/openclaw/issues/66561) |
| **MCP tools 未注入 subagent** | `sessions_spawn` 忽略所有 MCP 暴露配置 | ❌ | ⏳ 待 fix | [#85030](https://github.com/openclaw/openclaw/issues/85030) |
| **Discord guild reply 回归** | 畸形 send payload + 重复 outbound loop | ✅ 是 | ⏳ 待 fix | [#81484](https://github.com/openclaw/openclaw/issues/81484) |
| **Mattermost slash 503** | v2026.4.15 "not yet initialized" | ✅ 是 | ⏳ 待 fix | [#68113](https://github.com/openclaw/openclaw/issues/68113) |

### P2 级（功能降级/性能损耗）

| Issue | 描述 | 链接 |
|:---|:---|:---|
| Heartbeat 隔离模式 cadence 停滞 | 孤立模式心跳多重重置 | [#65161](https://github.com/openclaw/openclaw/issues/65161) |
| Queue.mode "collect" 批处理失效 | debounce 内消息仍单独处理 | [#67793](https://github.com/openclaw/openclaw/issues/67793) ✅ 已关闭 |
| Bootstrap context 重复注入 | 每 turn 浪费 20-30% token | [#67419](https://github.com/openclaw/openclaw/issues/67419) |
| Sandbox zombie 进程累积 | PID 1 未收割，pids.max 风险 | [#68691](https://github.com/openclaw/openclaw/issues/68691) |

---

## 6. 功能请求与路线图信号

| 需求 | 类别 | 社区热度 | 纳入信号 | 链接 |
|:---|:---|:---|:---|:---|
| **外部安全/护栏检查标准接口** | 安全架构 | ⭐⭐⭐⭐ 8评论 | 🔮 **高** — 企业合规刚需，无现成 PR 但标签含 `security` | [#72741](https://github.com/openclaw/openclaw/issues/72741) |
| **远程 Reranker 端点支持** | 记忆检索 | ⭐⭐⭐ 5评论 | 🔮 **高** — PR [#89584](https://github.com/openclaw/openclaw/pull/89584) 已提交（memory-core cross-encoder rerank stage），功能请求 #64438 直接对应 | [#64438](https://github.com/openclaw/openclaw/issues/64438) |
| **多索引嵌入记忆 + 模型感知故障转移** | 记忆架构 | ⭐⭐⭐ 6评论 | 🔮 **中** — 技术方向与 #88504 multi-slot memory role architecture PR 部分重叠 | [#63990](https://github.com/openclaw/openclaw/issues/63990) |
| **Microsoft Teams 语音提供商** | 通道扩展 | ⭐⭐⭐ 新提交 | 🔮 **高** — PR [#89724](https://github.com/openclaw/openclaw/pull/89724) 已开，XL size，待 proof | [#89724](https://github.com/openclaw/openclaw/pull/89724) |
| **Anthropic advisor tool 支持** | Agent 能力 | ⭐⭐⭐ 6评论 | 🔮 **中** — beta server-side tool，需 generic `server_tool_use` 处理 | [#63930](https://github.com/openclaw/openclaw/issues/63930) |
| **Control UI 可配置上传大小限制** | UX | ⭐⭐⭐ 7评论 | 🔮 **中** — 硬编码 5MB 限制，PR 未现 | [#71142](https://github.com/openclaw/openclaw/issues/71142) |
| **Per-job acceptSilentStop flag** | Cron 作业 | ⭐⭐⭐ 5评论 | 🔮 **中** — 零输出 cron 被误标为错误 | [#76159](https://github.com/openclaw/openclaw/issues/76159) |

**路线图推断**: v2026.7.x 可能聚焦 **memory 架构升级**（multi-slot + reranker + multi-index failover）与 **企业安全合规**（标准护栏接口 + exec approval policy，PR [#90003](https://github.com/openclaw/openclaw/pull/90003) 已开）。

---

## 7. 用户反馈摘要

### 😤 核心痛点

> *"Session 长时间停留在 processing 状态，事件循环完全阻塞，最终被 systemd 超时强杀"* — [#76038](https://github.com/openclaw/openclaw/issues/76038)

> *"Stuck session recovery skipped: reason=active_reply_work action=keep_lane age=289s, 385s... 持续多分钟"* — 运维自动化失效，人工介入成本高

> *"WebChat dashboard becomes unresponsive after any tool call; WebSocket disconnects and does not auto-reconnect"* — [#86811](https://github.com/openclaw/openclaw/issues/86811)（已修复）

> *"Every new session starts with 20-30% of context already consumed by bootstrap files... re-injected on every follow-up message"* — [#67419](https://github.com/openclaw/openclaw/issues/67419)，token 经济性问题

### 😊 认可方向

- **v2026.6.x 恢复可靠性**: "Agents and CLI-backed runtimes recover more cleanly from interrupted tool calls" — 中断场景体验改善获认可
- **安装策略透明化**: operator install policy 替代 dangerous-code scanner，企业审计友好

### 🎯 使用场景洞察

| 场景 | 反馈密度 | 典型问题 |
|:---|:---|:---|
| **Discord 大型社群运营** | 高 | Voice channel 孤立会话、guild reply 畸形 payload、僵尸进程 |
| **Telegram 群组/话题** | 高 | 心跳抢占用户回复、reconnect drain 重入、session 漂移 |
| **Windows 桌面用户** | 中高 | UI 渲染回归、PowerShell 参数污染 |
| **企业多 provider 部署** | 中 | Auth key 路由错误、Bedrock 强制发现、MiniMax OAuth 无刷新 |
| **长上下文研究/编码** | 中 | compaction 债务滞留、thinking block 签名过期、transcript 膨胀 |

---

## 8. 待处理积压

### ⚠️ 长期未响应的高优先级 Issue（>45 天，P1/P2，仍有影响）

| Issue | 创建 | 最后更新 | 天数 | 阻塞原因 | 行动建议 |
|:---|:---|:---|:---|:---|:---|
| [#63216](https://github.com/openclaw/openclaw/issues/63216) 同 session key 反复 hard reset | 2026-04-08 | 2026-06-03 | **57天** | 需 product decision + live repro | 分配 maintainer 专项跟进，提供诊断工具 |
| [#65161](https://github.com/openclaw/openclaw/issues/65161) Heartbeat 隔离模式多重重置 | 2026-04-12 | 2026-06-03 | **53天** | needs-maintainer-review + product-decision | 纳入 v2026.6.3 里程碑，指定 owner |
| [#63612](https://github.com/openclaw/openclaw/issues/63612) Compaction token estimation crash | 2026-04-09 | 2026-06-03 | **56天** | source repro 已有，fix-shape-clear | 优先 review 关联 PR |
| [#68691](https://github.com/openclaw/openclaw/issues/68691) Sandbox zombie 进程 | 2026-04-18 | 2026-06-03 | **47天

---

## 横向生态对比

好的，作为专注AI智能体与个人AI助手开源生态的资深技术分析师，我已审阅您提供的2026年6月4日各项目动态摘要。以下为基于数据生成的横向对比分析报告。

---

### AI智能体与个人AI助手开源生态横向对比分析（2026-06-04）

#### 1. 生态全景

当前个人AI助手与自主智能体开源生态整体呈现出 **“繁荣迭代，分化加速”** 的态势。以 **OpenClaw** 为代表的旗舰项目维持极高活跃度，但其庞大的功能体系和待处理积压也暴露了社区贡献吞吐的瓶颈。与此同时，一批后发项目如 **NanoBot**、**ZeroClaw** 和 **CoPaw** 正凭借差异化的定位（如极致轻量、企业级安全、多模态代理）快速追赶，形成了 **“一超多强”** 的竞争格局。社区的共同焦虑点正从“能用”转向“好用、稳定且安全”，对**会话状态持久化、记忆系统可靠性、多平台通道兼容性及安全审计**提出了更高要求。

#### 2. 各项目活跃度对比

| 项目名称 | Issues 活跃/新开 | Issues 关闭 | PR 待合并 | PR 已合并/关闭 | 版本发布 | 综合健康度 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 367 | 133 | 402 | 98 | 3 (Beta/Stable) | ⭐⭐⭐☆☆ (高吞吐、高积压，审查瓶颈) |
| **NanoBot** | 26 | 6 | 15 | 16 | 0 | ⭐⭐⭐⭐☆ (高活跃，迭代节奏快) |
| **Hermes Agent** | 44 | 6 | 38 | 12 | 0 | ⭐⭐⭐⭐☆ (极高活跃，聚焦桌面/网关) |
| **PicoClaw** | 3 (含2个stale) | 0 | 7 | 3 | 1 (Nightly) | ⭐⭐⭐☆☆ (健康稳定，社区互动低) |
| **NanoClaw** | 1 | 0 | 9 | 0 | 0 | ⭐⭐⭐☆☆ (开发活跃但审查滞后) |
| **NullClaw** | 0 | 0 | 1 | 0 | 0 | ⭐⭐☆☆☆ (维护期，活跃度极低) |
| **IronClaw** | 21 | 6 | 22 | 28 | 1 (Patch) | ⭐⭐⭐⭐☆ (高强度开发，架构演进期) |
| **LobsterAI** | 1 | 0 | 2 | 14 | 1 (小版本) | ⭐⭐⭐⭐☆ (高产，聚焦MCP/Cowork功能) |
| **TinyClaw** | - | - | - | - | - | ⭐☆☆☆☆ (无活动) |
| **Moltis** | 5 | 9 | 4 | 0 | 2 (日更标签) | ⭐⭐⭐☆☆ (修复冲刺，PR审查堆积) |
| **CoPaw** | 28 | 21 | 29 | 21 | 0 | ⭐⭐⭐⭐☆ (高活跃，聚焦稳定性修复) |
| **ZeptoClaw** | 0 | 0 | 16 | 0 | 0 | ⭐⭐☆☆☆ (仅Dependabot活跃，人工停滞) |
| **ZeroClaw** | 26 | 24 | 43 | 7 | 0 | ⭐⭐⭐⭐☆ (高活跃，v0.8.0冲刺中) |

#### 3. OpenClaw 在生态中的定位

OpenClaw 作为生态的**核心参照项目**，其地位类似“AI智能体界的Linux内核”：
- **优势**：极致的**功能完整性与市场覆盖率**，拥有ClawHub技能市场、最全面的消息通道（Discord/Telegram/iMessage）、复杂的会话与记忆系统，是行业事实上的标准参考。
- **技术路线差异**：技术路线偏向**全面集成与框架化**，功能复杂度与社区规模均远超同类。
- **社区规模对比**：日活Issues/PR数量（500+）是第二名（如CoPaw的~100）的5倍以上，但**社区贡献吞吐瓶颈**也最为明显，402个待合并PR是其主要短板。
- **定位**：**通用型、全栈式AI智能体平台**，适用于大型社群运营、企业级复杂工作流和对功能丰富度有极致要求的开发者。

#### 4. 共同关注的技术方向

多个项目不约而同地聚焦于以下技术方向，反映出行业的普遍痛点：

*   **记忆与上下文管理**：
    *   **涉及项目**：OpenClaw (SQLite迁移, compaction)、NanoBot (MECE长期记忆, Dream模块)、CoPaw (DAG上下文压缩, Dream记忆空环)、ZeroClaw (reasoning content丢失, 记忆蒸馏)
    *   **具体诉求**：降低token消耗、实现跨会话持久化、解决记忆膨胀/冗余、提供可审查的记忆修改机制。

*   **会话与会话恢复（Stability & Resilience）**：
    *   **涉及项目**：OpenClaw (会话卡死、双重失效、stuck session)、NanoBot (长任务失败)、Hermes Agent (MCP重连、本地abort)、ZeroClaw (10分钟回收)
    *   **具体诉求**：提升长对话/长任务下的可靠性，优雅处理网络中断与瞬态故障，提供明确的会话生命周期管理。

*   **多平台/多通道兼容性**：
    *   **涉及项目**：OpenClaw (Discord、Telegram回归)、Hermes Agent (QQBot 心跳丢失)、ZeroClaw (WhatsApp协议变更)、Moltis (Docker工具失效)
    *   **具体诉求**：提高平台适配器的稳定性，建立上游协议变更的预警机制，降低平台特有bug的回归率。

*   **安全与认证**：
    *   **涉及项目**：OpenClaw (安装策略、Signing Block)、ZeroClaw (OIDC、可插拔安全接口、WebSocket绕过)、NanoBot (社会工程绕过rm)
    *   **具体诉求**：从“规则式”安全向“模型级/架构级”安全演进，支持OAuth设备流、OIDC等企业级认证，提供标准化的安全审计接口。

#### 5. 差异化定位分析

*   **NanoBot (轻量极速)**:
    *   **功能侧重**：简洁、快速、易于部署。
    *   **目标用户**：追求性价比、快速原型验证、偏好轻量化架构的个人开发者和小团队。
    *   **技术架构**：架构简洁，曾在4k行代码内完成核心功能。强调WebUI体验和快捷Auth。

*   **ZeroClaw (企业级/安全合规)**:
    *   **功能侧重**：V3配置系统、灵活安全策略、多租户、企业认证（OIDC）、审计能力。
    *   **目标用户**：对安全性、合规性、可管理性有硬性需求的企业用户。
    *   **技术架构**：模块化、可插拔安全接口、强类型（Rust）、以“经理人”和“审计”为导向。

*   **Hermes Agent (桌面优先/深度集成)**:
    *   **功能侧重**：桌面应用体验、TUI审批流程、看板运营工具、深度渠道集成（Discord/Telegram）。
    *   **目标用户**：重度桌面用户、社群运营者、需要复杂审批流和团队协作的用户。
    *   **技术架构**：注重交互体验（桌面+TUI），视觉辅助（CUA）与复杂工具调用（MCP）。

*   **IronClaw/CoPaw (前沿架构探索)**:
    *   **功能侧重**：架构重构（Reborn）、多模态代理、浏览器自动化、复杂的子任务/子Agent编排、前沿记忆蒸馏技术。
    *   **目标用户**：技术探索者、研究机构、对自主智能体高级能力有需求的先驱用户。
    *   **技术架构**：**最激进**，乐于尝试新的架构模式（如事件总线、ACP协议扩展），技术债务和稳定性问题也相对突出。

#### 6. 社区热度与成熟度

*   **快速迭代期（高活跃、功能膨胀）**:
    *   **OpenClaw**: 功能最多，问题最多，迭代最快，但社区贡献热情与审查瓶颈的矛盾最突出。
    *   **ZeroClaw**: 处于v0.8.0发布冲刺，社区和企业需求驱动明确，问题解决效率高。
    *   **NanoBot**: 核心维护者驱动，架构现代化（事件总线）和可靠性修复并行，处于功能丰富与架构清理的蜜月期。
    *   **IronClaw**: 架构重构期，核心团队高强度贡献，社区参与度相对较低，但进展显著。

*   **质量巩固期（功能稳定、聚焦修复）**:
    *   **CoPaw**: 核心功能（上下文压缩、浏览器自动化）基本成熟，当前重点在于解决系统性稳定性问题（如向量库崩溃）。
    *   **Molits**: 清理长期积累的Bug，修复冲刺，但PR审查是短板。
    *   **PicoClaw**: 版本迭代周期稳定，社区贡献健康，但缺乏引爆性功能。

*   **维护/静默期**:
    *   **NullClaw, ZeptoClaw**: 核心功能无明显演进，社区活跃度低，前者由极小规模 PR 驱动，后者完全依赖自动化依赖更新。

#### 7. 值得关注的趋势信号

1.  **“分支式对话”成为刚需**：NanoBot与ZeroClaw用户几乎同时、独立地提出了“会话分支（Session Branching）”的强烈需求。这标志着AI智能体从“线性问答”向**“探索式、迭代式工作流”**的进化，开发者应关注会话状态追溯与分支管理的基础设施建设。

2.  **企业级安全需求爆发**：从OpenClaw的安装策略重构，到ZeroClaw将OIDC列为v0.9.0的追踪Issue，再到NanoBot社区对“规则式安全”的质疑，**“模型级+架构级”的深度安全策略**正成为POC的“准入门槛”。对安全审计接口和可插拔认证的需求将决定项目能否进入严肃的企业市场。

3.  **“轻量化”与“全栈式”的分化加剧**：以NanoBot为代表，社区对低于5000行代码的极简架构有强烈认同感。这表明生态不再盲目追求大而全，**垂直领域、极致优化的“小而美”智能体**存在巨大的生存空间。开发者需要明确自身定位：是做行业标准的全栈平台，还是做特定场景的锋利工具。

4.  **记忆系统成“阿喀琉斯之踵”**：几乎所有中等规模以上的项目都在记忆管理上遇到了挑战（OOM、token膨胀、记忆空洞、持久化冲突）。这已非单一项目问题，而是整个AI智能体领域的**系统性技术债务**。未来6-12个月内，能将**确定性存储（如SQLite）与智能压缩/蒸馏**成功结合的项目，将获得显著的工程优势。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-06-04

## 1. 今日速览

NanoBot 今日保持**高活跃度**，24小时内 Issues 更新 32 条（26 活跃/新开，6 关闭）、PR 更新 31 条（15 待合并，16 已合并/关闭），无新版本发布。项目核心维护者 **chengyongru** 持续高强度输出，单日提交 6 个 PR 并合并多个历史 PR，聚焦 WebUI 体验优化、运行时架构重构（事件总线）和代码质量治理。社区侧，多智能体架构、安全沙箱、长期记忆等深层架构议题持续发酵，显示用户正从"尝鲜"转向"生产级部署"诉求。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的重要 PR（16 条）

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#4135](https://github.com/HKUDS/nanobot/pull/4135) | chengyongru | **WebUI 运行时状态迁移至事件总线架构** | 解耦 WebUI 与 AgentLoop 的硬编码状态同步，为后续多前端、可观测性、插件系统奠定架构基础 |
| [#3990](https://github.com/HKUDS/nanobot/pull/3990) | chengyongru | **Dream 模块重构：简化两阶段为 cron + process_direct** | 降低长期记忆系统的认知复杂度，提升可维护性 |
| [#3952](https://github.com/HKUDS/nanobot/pull/3952) | chengyongru | **增强 Dream + Consolidator 提示词，实现 MECE 长期记忆** | 系统性解决记忆冗余膨胀问题（如"用户用中文"重复 10+ 次） |
| [#3999](https://github.com/HKUDS/nanobot/pull/3999) | chengyongru | **修复 sustained goal 下 runner 提前退出** | 解决长任务场景的核心可靠性缺陷（用户发 `/goal` 后期待后台持续执行） |
| [#4157](https://github.com/HKUDS/nanobot/pull/4157) | chengyongru | **WebUI 启动请求添加超时边界** | 防止永久挂起的 bootstrap 请求导致前端假死 |
| [#4174](https://github.com/HKUDS/nanobot/pull/4174) | chengyongru | **恢复顶层导入顺序，规范化 E402** | 代码质量治理，消除 ruff lint 违规 |
| [#3461](https://github.com/HKUDS/nanobot/pull/3461) | chengyongru | **多智能体邮箱通道插件** | 零侵入实现跨 Agent 文件系统通信，验证多 Agent 架构可行性 |
| [#3221](https://github.com/HKUDS/nanobot/pull/3221) | chengyongru | **添加 `nanobot auth` OAuth 设备流认证** | 降低首次使用门槛，支持网关注册即开即用 |
| [#3932](https://github.com/HKUDS/nanobot/pull/3932) | chengyongru | **修复流式模式下重复 tool_call_id** | 消除 OpenAI 兼容 provider 的 API 请求被拒错误 |
| [#3920](https://github.com/HKUDS/nanobot/pull/3920) | chengyongru | **上下文压缩基准测试 + 优化 consolidator 提示词** | 数据驱动优化，decision_rationale 因子影响最大 |
| [#3858](https://github.com/HKUDS/nanobot/pull/3858) | chengyongru | **提取 ContextBuilder.build_user_content() 为公共方法** | 提升模块可测试性和外部扩展性 |

**整体评估**：项目今日在**架构现代化**（事件总线）、**可靠性工程**（超时边界、长任务修复）、**AI 核心能力**（记忆系统优化）三条主线同步推进，技术债务持续清偿，为 v0.2.x 或更高版本积蓄势能。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 👍 | 核心诉求 |
|:---|:---|:---:|:---:|:---|
| 1 | [#222 Multi agents setup - Supported?](https://github.com/HKUDS/nanobot/issues/222) | 10 | 7 | **多智能体部署的官方文档与配置指南** — 用户从代码推测支持但缺乏权威指引 |
| 2 | [#979 防止执行rm指令是防不住AI的](https://github.com/HKUDS/nanobot/issues/979) | 5 | 0 | **安全护栏的有效性质疑** — 用户通过社会工程绕过 rm 防护，引发对"基于规则的安全"vs"模型级安全"的深层讨论 |
| 3 | [#1022 Nanobot fails for long-running task](https://github.com/HKUDS/nanobot/issues/1022) | 4 | 3 | **长任务执行可靠性** — "Starting execution now"后无实际动作，影响批量数据处理场景 |
| 4 | [#80 Add lightweight memory retrieval?](https://github.com/HKUDS/nanobot/issues/80) | 4 | 0 | **记忆检索效率** — BM25/TF-IDF 替代全量记忆注入，降低 token 消耗 |
| 5 | [#912 Support Task-Specific Model Configuration](https://github.com/HKUDS/nanobot/issues/912) | 3 | 3 | **模型路由策略** — 对话/工具调用/浏览器操作分派不同模型，优化成本与效果 |

**诉求分析**：社区正从"能用"转向"好用、安全、可扩展"。多智能体（#222, #1012, #4179）、安全沙箱（#979, #931, #143）、记忆系统（#80, #135, #3952）形成三大主题簇，与今日合并的 PR 形成呼应。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#979](https://github.com/HKUDS/nanobot/issues/979) | 社会工程绕过 rm 防护，AI 执行危险指令 | **已关闭**（讨论归档，需架构级修复） |
| 🔴 **高** | [#1022](https://github.com/HKUDS/nanobot/issues/1022) | 长任务假执行：提示开始但无实际操作 | **已关闭**（#3999 修复 sustained goal 退出逻辑） |
| 🟡 **中** | [#954](https://github.com/HKUDS/nanobot/issues/954) | 进度流式传输泄漏内部 tool calls 到用户聊天 | **待修复**（OPEN, stale） |
| 🟡 **中** | [#937](https://github.com/HKUDS/nanobot/issues/937) | exec 工具幻觉严重，导致框架弃用 | **待修复**（OPEN, stale） |
| 🟡 **中** | [#143](https://github.com/HKUDS/nanobot/issues/143) | 文件系统工具未强制执行 restrict_to_workspace | **待修复**（OPEN, stale, 👍4） |
| 🟡 **中** | [#935](https://github.com/HKUDS/nanobot/issues/935) | 远程 MCP URL (Streamable HTTP) 超时 CancelledError | **待修复**（OPEN, stale） |
| 🟢 **低** | [#896](https://github.com/HKUDS/nanobot/issues/896) | Telegram/Discord 媒体文件永不清理，磁盘无限增长 | **待修复**（OPEN, stale） |
| 🟢 **低** | [#984](https://github.com/HKUDS/nanobot/issues/984) | 媒体路径超出 workspace，restrictToWorkspace 下技能无法访问 | **已关闭** |

**关键信号**：安全类 Issue（#979, #143, #931）形成集群，提示当前"轻量级"架构在面向生产环境时的安全债务。今日合并的 #3461 邮箱通道和 #3999 长任务修复部分缓解稳定性焦虑，但 exec 幻觉（#937）和工具泄漏（#954）仍需模型层或提示工程层面的深度修复。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 成熟度信号 | 纳入下一版本概率 |
|:---|:---|:---|:---:|
| **原生 A2A 智能体编排** | [#4179](https://github.com/HKUDS/nanobot/issues/4179) | 今日新提，与 #3461 邮箱通道 PR 已验证的跨 Agent 通信形成互补 | ⭐⭐⭐⭐ 高 |
| **WebUI 新建聊天快捷键** | [#4178](https://github.com/HKUDS/nanobot/issues/4178) | #4181 PR 已开，直接对应 | ⭐⭐⭐⭐⭐ 已就绪 |
| **Agent 运行级生命周期 Hook** | [#4176](https://github.com/HKUDS/nanobot/pull/4176) | PR 已开，chengyongru 主导 | ⭐⭐⭐⭐⭐ 已就绪 |
| **Azure AAD 认证支持** | [#4126](https://github.com/HKUDS/nanobot/pull/4126) | PR 待审，企业场景刚需 | ⭐⭐⭐⭐ 高 |
| **SSRF 防护增强 MCP URL** | [#4123](https://github.com/HKUDS/nanobot/pull/4123) | PR 待审，安全合规导向 | ⭐⭐⭐⭐ 高 |
| **任务专属模型配置** | [#912](https://github.com/HKUDS/nanobot/issues/912) | 3👍，与 #4122 本地 ASR PR 的"多模型"思路一致 | ⭐⭐⭐ 中 |
| **轻量级记忆检索 (BM25)** | [#80](https://github.com/HKUDS/nanobot/issues/80) | 4 评论，#3952 已优化 consolidator 但未触及检索层 | ⭐⭐⭐ 中 |
| **持久化长期记忆** | [#135](https://github.com/HKUDS/nanobot/issues/135) | 4👍，#3952/#3990 已重构 Dream 但未解决跨 session 状态 | ⭐⭐⭐ 中 |
| **多租户网关** | [#936](https://github.com/HKUDS/nanobot/issues/936) | 与 #976 讨论关联，#3461 验证文件级隔离 | ⭐⭐⭐ 中 |
| **SimpleX Chat 通道** | [#240](https://github.com/HKUDS/nanobot/issues/240) | 2👍，隐私导向用户群体 | ⭐⭐ 低 |
| **Mattermost 通道** | [#1011](https://github.com/HKUDS/nanobot/issues/1011) | 4👍，企业 Slack 替代诉求 | ⭐⭐ 低 |

---

## 7. 用户反馈摘要

### 😤 痛点
- **安全焦虑**："防 rm 指令是防不住 AI 的"（#979）—— 规则式防护被社会工程轻易绕过，用户期待**模型级安全对齐**或**强制沙箱**
- **长任务不可靠**："Starting execution now but does nothing"（#1022）—— 批量数据处理场景信任崩塌，#3999 修复后需验证
- **exec 幻觉导致弃用**："stopped evaluation due to so many hallucinations in using the exec tool"（#937）—— 核心工具链的可靠性是留存关键
- **记忆 Stateless 困境**："every conversation starts from zero"（#135）—— 个人助理定位与零记忆体验的矛盾

### 😊 满意点
- **架构简洁性受认可**："huge props for the clean and lightweight architecture... kept under 4k lines"（#97）
- **首次体验优化**：auth 命令、快速启动文档（#4177）持续降低门槛

### 🎯 使用场景演进
- 从"个人聊天机器人" → "自动化工作流执行器"（长任务、批量处理）
- 从"单实例" → "多 Agent 协作团队"（#222, #4179, #1012）
- 从"云端模型" → "本地 ASR + 模型路由"（#4122, #912）

---

## 8. 待处理积压

### ⚠️ 长期未响应的高价值 Issue（stale 标签 + 高互动）

| Issue | 创建 | 最后更新 | 天数 | 风险 | 建议动作 |
|:---|:---|:---|:---:|:---|:---|
| [#222](https://github.com/HKUDS/nanobot/issues/222) 多智能体设置文档 | 2026-02-06 | 2026-06-03 | **118天** | 7👍，社区最活跃 | 利用 #3461 邮箱通道 + #4179 A2A 提案，产出官方多 Agent 指南 |
| [#97](https://github.com/HKUDS/nanobot/issues/97) 核心架构改进 RFC | 2026-02-04 | 2026-06-03 | **120天** | 6👍，系统性提案 | 拆分 Memory/Security/Testing 子任务，纳入路线图 |
| [#912](https://github.com/HKUDS/nanobot/issues/912) 任务专属模型配置 | 2026-02-20 | 2026-06-03 | **104天** | 3👍，成本控制刚需 | 评估与 #4126 Azure AAD PR 的协同实现 |
| [#143](https://github.com/HKUDS/nanobot/issues/143) 文件系统工具安全绕过 | 2026-02-05 | 2026-06-03 | **119天** | 4👍，**安全漏洞** | 优先修复，关联 #931 沙箱提案 |
| [#80](https://github.com/HKUDS/nanobot/issues/80) 轻量级记忆检索 | 2026-02-04 | 2026-06-03 | **120天** | 技术债，token 成本 | 结合 #3952 的 MECE 优化，评估 BM25 集成成本 |
| [#937](https://github.com/HKUDS/nanobot/issues/937) exec 工具幻觉 | 2026-02-21 | 2026-06-03 | **103天** | **用户流失直接原因** | 需模型层或提示工程专项攻关，建议标记为 `priority` |

### ⚠️ 待审 PR 风险提示

| PR | 天数 | 状态 |
|:---|:---:|:---|
| [#3992](https://github.com/HKUDS/nanobot/pull/3992) Agent 跨实例消息总线 | 11天 | OPEN，与 #4179 功能重叠，需协调合并策略 |
| [#3720](https://github.com/HKUDS/nanobot/pull/3720) cron 流式修复 | 26天 | OPEN，WebSocket 可靠性修复，建议优先审阅 |
| [#4126](https://github.com/HKUDS/nanobot/pull/4126) Azure AAD 认证 | 4天 | OPEN，企业场景，建议本周内初审 |

---

**日报生成时间**：2026-06-04  
**数据来源**：HKUDS/nanobot GitHub 公开活动流  
**分析师**：AI 智能体与开源项目分析系统

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-06-04

---

## 1. 今日速览

Hermes Agent 今日保持**极高活跃度**：过去24小时共有 **50 条 Issues 更新**（44 条新开/活跃，6 条关闭）和 **50 条 PR 更新**（38 条待合并，12 条已合并/关闭），无新版本发布。社区焦点集中在**桌面端体验打磨**（onboarding、审批提示、会话同步）、**网关稳定性**（Discord/Telegram/QQBot、launchd/macOS 服务管理）以及**视觉/Gemini 提供商的 fallback 链路缺陷**。值得注意的是，TUI 审批流程今日被连续提出 3 个相关问题，显示安全交互体验正成为用户敏感点。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 已关闭/合并的重要 Issues

| 项目 | 说明 | 链接 |
|:---|:---|:---|
| **#37869** Desktop app remote connection failure | 本地 9120 端口冲突清除后，桌面应用仍显示远程连接失败；日志显示后端已就绪。今日关闭，推动桌面连接状态机的诊断边界更清晰。 | [Issue #37869](https://github.com/NousResearch/hermes-agent/issues/37869) |
| **#37109** Kanban Executor Board active worker panel | 为看板仪表盘新增执行器/活跃工作进程面板，运营者可直接观察 worker 健康状态。功能已完成关闭。 | [Issue #37109](https://github.com/NousResearch/hermes-agent/issues/37109) |
| **#37108** Kanban dashboard columns alignment | 看板前端状态列与后端规范对齐，`scheduled`/`review` 状态任务不再被错误归类。 | [Issue #37108](https://github.com/NousResearch/hermes-agent/issues/37108) |
| **#17986** Fireworks custom endpoint HTTP 400 (first turn only) | Fireworks 自定义端点首条消息 HTTP 400 后 fallback 成功的问题已关闭，提供商兼容性得到改善。 | [Issue #17986](https://github.com/NousResearch/hermes-agent/issues/17986) |
| **#38584** test | 测试 Issue，已关闭。 | [Issue #38584](https://github.com/NousResearch/hermes-agent/issues/38584) |

### 已关闭 PR

| 项目 | 说明 | 链接 |
|:---|:---|:---|
| **#38565** feat: add layered memory provider | 分层记忆 provider，支持 curated memory/skills/domain stores/session search/semantic recall 路由；因被关闭而非合并，原因未明，值得维护者复盘。 | [PR #38565](https://github.com/NousResearch/hermes-agent/pull/38565) |
| **#38556** fix(docker): chown build trees on UID remap | 修复 `HERMES_UID` 重映射后 `/opt/hermes` 构建目录所有权残留问题；该 PR 被关闭，可能由替代方案覆盖。 | [PR #38556](https://github.com/NousResearch/hermes-agent/pull/38556) |

**整体判断**：桌面端和网关的稳定性修复是今日主要推进方向，看板功能完成闭环；但两个技术价值较高的 PR（分层记忆、Docker UID remap）被关闭而非合并，需关注是否存在方案分歧。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 热度分析 |
|:---|:---|:---|:---|
| 🔥 1 | **#10567** Add `--host` and CORS config for hermes dashboard | 6 评论，10 👍 | 远程访问仪表盘是长期痛点，Tailscale/VPN 用户群体诉求强烈，社区投票最高。当前 CORS 硬编码 `localhost/127.0.0.1` 严重限制企业/自托管场景。[Issue #10567](https://github.com/NousResearch/hermes-agent/issues/10567) |
| 🔥 2 | **#25822** Gemini 503 UNAVAILABLE does not trigger provider fallback | 4 评论 | 视觉辅助模块的 fallback 链路在 Google 503 时失效，与 #35876、#24039 形成同一主题的问题簇，反映 fallback 架构需要系统性重构。[Issue #25822](https://github.com/NousResearch/hermes-agent/issues/25822) |
| 🔥 3 | **#24357** QQBot gateway stops heartbeating after reconnect | 3 评论 | 中国区用户关注的 QQBot 适配器稳定性，4009 Session timed out 后心跳丢失循环，直接影响生产部署可靠性。[Issue #24357](https://github.com/NousResearch/hermes-agent/issues/24357) |
| 🔥 4 | **#37869** Desktop remote connection failure | 3 评论 | 已关闭，但创建和关闭都在24小时内，说明桌面连接诊断路径正在被快速迭代。[Issue #37869](https://github.com/NousResearch/hermes-agent/issues/37869) |
| 🔥 5 | **#37109 / #37108** Kanban Executor Board & column alignment | 各 3 评论 | 看板功能双 Issue 同日关闭，项目管理/运营场景得到实质性推进。[Issue #37109](https://github.com/NousResearch/hermes-agent/issues/37109) [Issue #37108](https://github.com/NousResearch/hermes-agent/issues/37108) |
| 🔥 6 | **#35876** `_resolve_single_provider` kwargs regression | 3 评论 | Gemini 配额耗尽时 fallback chain 静默失败，与 #25822 同源，技术债务明显。[Issue #35876](https://github.com/NousResearch/hermes-agent/issues/35876) |

### 背后诉求分析

- **企业化/自托管**：#10567 的高赞说明用户希望 Hermes 走出单机开发环境，进入团队基础设施。
- **多模态可靠性**：Gemini 相关的 3 个 Issue（#25822、#35876、#30704）暴露视觉模块对单一提供商的强依赖，fallback 机制设计存在架构级缺陷。
- **平台适配器成熟度**：QQBot、Discord、Telegram 的网关问题显示多平台部署正在从"能跑"走向"稳定跑"。

---

## 5. Bug 与稳定性

按严重程度排列：

| 优先级 | Issue | 描述 | Fix PR |
|:---|:---|:---|:---|
| **P1** | **#38471** | Hermes Desktop 跳过 onboarding，发现随机无效 OpenAI API key，无处输入 OAI/Codex 信息 | 疑似相关：**#38577** 澄清 Anthropic API vs OAuth；**#38572** 修复 local/custom endpoint 无 API key 的 onboarding | [Issue #38471](https://github.com/NousResearch/hermes-agent/issues/38471) |
| **P2** | **#25822** | Gemini 503 不触发视觉 fallback provider | 无直接 PR，但与 #35876、#24039 形成主题簇 | [Issue #25822](https://github.com/NousResearch/hermes-agent/issues/25822) |
| **P2** | **#35876** | `_resolve_single_provider` kwargs regression，Gemini 429 时 fallback chain 静默失败 | 无直接 PR | [Issue #35876](https://github.com/NousResearch/hermes-agent/issues/35876) |
| **P2** | **#24357** | QQBot reconnect 后心跳停止，4009 Session timed out 循环 | 无直接 PR | [Issue #24357](https://github.com/NousResearch/hermes-agent/issues/24357) |
| **P2** | **#38488** | MCP server 在瞬态后端故障后永久放弃重连，需重启 gateway | 无直接 PR | [Issue #38488](https://github.com/NousResearch/hermes-agent/issues/38488) |
| **P2** | **#32766** | `computer_use` (cua-driver) 过于脆弱，破坏 auxiliary vision 路由 | 无直接 PR | [Issue #32766](https://github.com/NousResearch/hermes-agent/issues/32766) |
| **P2** | **#38156** | Windows 上 TUI 可将主机启动 cwd 传入 Docker 终端会话 | 无直接 PR | [Issue #38156](https://github.com/NousResearch/hermes-agent/issues/38156) |
| **P2** | **#38580** | `requests==2.33.0` aarch64 wheel 缺失 `_types.py`，Jetson 启动崩溃 | 无直接 PR | [Issue #38580](https://github.com/NousResearch/hermes-agent/issues/38580) |
| **P2** | **#38575** | 固定的 `HERMES_DASHBOARD_SESSION_TOKEN` 导致 Desktop LOCAL 模式 SIGTERM 启动循环 | 无直接 PR | [Issue #38575](https://github.com/NousResearch/hermes-agent/issues/38575) |
| **P2** | **#30704** | Gemini 2.5+ 模型缺失 `_supports_media_in_tool_results` 白名单 | 无直接 PR | [Issue #30704](https://github.com/NousResearch/hermes-agent/issues/30704) |
| **P3** | **#38270** | Desktop app 不显示实时 Telegram gateway 会话，需重启/刷新 | 相关 PR：**#38573** 刷新 sessions 列表；**#38560** Telegram topic mapping 修复 | [Issue #38270](https://github.com/NousResearch/hermes-agent/issues/38270) |
| **P3** | **#38452** | 桌面端长 cron 输入提示阻塞滚动，无法查看 agent 输出 | 无直接 PR | [Issue #38452](https://github.com/NousResearch/hermes-agent/issues/38452) |

### 今日提交的相关 Fix PRs

| PR | 修复目标 |
|:---|:---|
| **#38578** | 桌面端渲染 approval/sudo/secret 提示，避免工具静默超时 [PR #38578](https://github.com/NousResearch/hermes-agent/pull/38578) |
| **#38577** | onboarding 中澄清 Anthropic API key vs OAuth 入口 [PR #38577](https://github.com/NousResearch/hermes-agent/pull/38577) |
| **#38572** | 桌面 onboarding 支持无 API key 的 local/custom endpoint [PR #38572](https://github.com/NousResearch/hermes-agent/pull/38572) |
| **#38571** | MCP discovery probe 中解析 `${ENV}`，修复 header auth 401 [PR #38571](https://github.com/NousResearch/hermes-agent/pull/38571) |
| **#38566** | Discord 发送回复前停止 typing 指示器 [PR #38566](https://github.com/NousResearch/hermes-agent/pull/38566) |
| **#38567** | macOS launchd 检测，支持服务管理器路径立即重启 [PR #38567](https://github.com/NousResearch/hermes-agent/pull/38567) |
| **#38568** | 稳定 launchd gateway HOME 注入和 Honcho memory 同步 [PR #38568](https://github.com/NousResearch/hermes-agent/pull/38568) |
| **#38564** | 修复 hermes-ink 中 SGR 鼠标序列分片泄漏（替代 #29337）[PR #38564](https://github.com/NousResearch/hermes-agent/pull/38564) |
| **#38560** | Telegram topic mapping 配置和 desktop lock engines 修复 [PR #38560](https://github.com/NousResearch/hermes-agent/pull/38560) |
| **#38555** | 忽略 Desktop bootstrap marker，修复 update stash 循环 [PR #38555](https://github.com/NousResearch/hermes-agent/pull/38555) |

---

## 6. 功能请求与路线图信号

| Issue/PR | 内容 | 纳入下一版本可能性 |
|:---|:---|:---|
| **#10567** Dashboard `--host` + CORS 配置 | 高赞功能请求，企业/远程场景刚需 | **高** — 社区投票强，实现边界清晰 |
| **#38540** Discord per-category mention/ignore 规则 | 按 Discord 类别 ID 批量管理频道响应规则 | 中高 — 平台适配器自然演进 |
| **#36053** Context Preflight：强制行动前反思 | 架构级行为调整，对抗"行动优于反思"偏见 | 中 — RFC 形态，需设计评审 |
| **#38552** Automated Workspace Memory | 自动记忆目录用途， complement #33856 | 中 — 与记忆系统路线图契合，但依赖 #33856 |
| **#38280** Agent Economic Layer | 原生钱包、服务注册、声誉账本 | 低-中 — 宏大提案，需长期路线图确认 |
| **#34038** On-demand tool/skill/MCP discovery | 按需发现而非启动时全量加载，26 个工具约 12K tokens | **高** — 性能优化方向明确，与 MCP 扩展压力直接相关 |
| **#24039** Auxiliary fallback chain 复用 `fallback_providers` | 消除两套 fallback 系统的设计债务 | **高** — 与当前多个 P2 bug 直接相关 |
| **#35891** `hermes doctor` 警告不安全的 `.env` 权限 | 安全加固的合理延伸 | 中高 — 实现简单，安全价值明确 |
| **#38569** 1Password secrets backend | 新增 secrets 后端，支持 `op://` 引用 | 中 — 企业安全集成需求 |
| **#14768** LLM Gateway (llmgateway.io) 内置提供商 | 新增聚合推理提供商 | 中 — 提供商生态扩展 |
| **#38574** Slack native AI Assistant Steps API streaming | 原生流式步骤卡片替代 edit 循环 | 中 — 平台体验升级 |
| **#38557** 损坏 `config.yaml` 备份后回退 | 从 gemini-cli 移植，用户数据保护 | 中高 — 防御性工程，风险低 |

---

## 7. 用户反馈摘要

### 真实痛点

- **桌面端是新用户的第一道门槛**：#38471 用户下载 Desktop 后"从未输入任何 API 信息"却看到 OpenAI 模型，选择后报错——onboarding 的信任链断裂。
- **审批安全体验差**：andrea9292 连续提交 #38581/#38582/#38583，指出 TUI 审批提示截断多行 `execute_code` 载荷、说"完整文本在上面"却无处可找、缺乏 classic CLI 的完整命令审查机制——**用户对自动执行代码的安全焦虑非常具体**。
- **远程/团队使用受限**：#10567 用户明确提到 Tailscale/VPN 场景，CORS 硬编码让自托管体验像"被锁在本地开发模式"。
- **视觉模块不可靠**：saved-j 连续报告 Gemini fallback 问题（#25822、#35876、#30704），显示生产用户正在多提供商间切换以保障可用性，但架构不支持。
- **ARM/边缘部署脆弱**：#38580 Jetson 用户每次 `hermes update` 后 `requests` 被钉回 2.33.0 导致崩溃，依赖版本管理对非主流架构不友好。

### 满意点

- 看板功能快速迭代（#37108/#37109 24小时内关闭）显示运营工具方向响应及时。
- Telegram/Discord 网关体验正在积极打磨（#38566、#38560、#38573）。

---

## 8. 待处理积压

以下 Issue 已持续活跃但未看到明确修复承诺，建议维护者优先关注：

| Issue | 创建时间 | 风险 | 建议动作 |
|:---|:---|:---|:---|
| **#10567** Dashboard `--host` + CORS | 2026-04-15（51天） | 高赞企业场景卡脖子 | 指定 owner，评估是否纳入下个 sprint [Issue #10567](https://github.com/NousResearch/hermes-agent/issues/10567) |
| **#24039** Auxiliary fallback chain 设计债务 | 2026-05-11（24天） | 多个 P2 bug 的根因 | 与 #25822、#35876 合并为单一技术方案 [Issue #24039](https://github.com/NousResearch/hermes-agent/issues/24039) |
| **#24357** QQBot 心跳丢失 | 2026-05-12（23天） | 中国区生产稳定性 | 需要网关核心开发者介入 [Issue #24357](https://github.com/NousResearch/hermes-agent/issues/24357) |
| **#32766** computer_use 脆弱性 | 2026-05-26（9天） | 破坏 auxiliary vision | 需要工具链负责人评估 cua-driver 抽象 [Issue #32766](https://github.com/NousResearch/hermes-agent/issues/32766) |
| **#38488** MCP server 永久放弃重连 | 2026-06-03（1天） | 运维噩梦级体验 | 建议与 #38571 的 MCP 修复合并考虑 [Issue #38488](https://github.com/NousResearch/hermes-agent/issues/38488) |

---

**日报结语**：Hermes Agent 今日展现出强劲的工程迭代节奏，桌面端和网关稳定性是明确的短期重点。建议维护者在继续打磨体验的同时，对 **Gemini/fallback 架构债务** 和 **TUI 审批安全交互** 两个主题进行系统性设计，避免同类问题碎片化堆积。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-06-04

> **项目**: [sipeed/picoclaw](https://github.com/sipeed/picoclaw)  
> **日期**: 2026-06-04  
> **数据周期**: 过去 24 小时（2026-06-03）

---

## 1. 今日速览

PicoClaw 今日保持**中等活跃度**，核心工程团队持续推进 v0.2.9 迭代周期的收尾工作。社区贡献活跃，单日 10 个 PR 更新（7 待合并/3 已关闭），但 Issues 侧无关闭进展，3 个活跃 Issue 均处于开放状态，其中 2 个已标记 `stale`。值得关注的是，Go 运行时安全更新（GO-2026-5039）已快速合并，体现安全响应能力；同时一个关于 streaming HTTP 请求的长期功能请求（#2404，创建 58 天，11 条评论）仍是社区最热议题。整体健康度：**良好**，但需关注 stale PR/Issue 的积压清理。

---

## 2. 版本发布

### 🔧 Nightly Build: v0.2.9-nightly.20260603.a502aa7f

| 属性 | 详情 |
|:---|:---|
| **版本号** | `v0.2.9-nightly.20260603.a502aa7f` |
| **类型** | 自动化夜间构建（⚠️ 可能不稳定） |
| **完整变更对比** | [v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main) |
| **发布时间** | 2026-06-03 |

**更新内容推测**：基于 `main` 分支与 v0.2.9 的差异，该 nightly 可能包含以下未正式发布的改动：
- MCP 通道动态请求头转发（PR #2696，待合并）
- 会话历史别名升级修复（PR #2992，待合并）
- 工具响应 JSON 序列化错误处理（PR #2996，待合并）

**⚠️ 使用建议**：此为自动化构建，建议仅用于测试环境，生产环境请等待正式版本。

---

## 3. 项目进展

### ✅ 今日已合并/关闭的 PR（3 条）

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#2997](https://github.com/sipeed/picoclaw/pull/2997) | afjcjsbx | **Go 1.25.10 → 1.25.11 安全升级**，修复 CVE `GO-2026-5039`（`net/textproto` 错误消息中请求头名称未转义） | 🔒 **安全基线提升**：消除潜在的 HTTP 响应注入风险，符合供应链安全最佳实践 |
| [#2899](https://github.com/sipeed/picoclaw/pull/2899) | yangwenjie1231 | **MQTT 通道 TLS 验证可配置化**：移除硬编码的 `InsecureSkipVerify=true`，新增 `TLSSkipVerify` 字段（默认 `false`） | 🔒 **安全加固**：关闭默认 MITM 漏洞，同时保留自签名证书场景的灵活性 |
| [#2994](https://github.com/sipeed/picoclaw/pull/2994) | afjcjsbx | 新增 `picoclaw-agent` 技能文档（`workspace/skills/picoclaw-agent/SKILL.md`） | 📚 **生态建设**：为 AI Agent 提供 PicoClaw 原生操作指南，降低自动化运维门槛 |

**整体进展评估**：今日合并以**安全修复**和**文档建设**为主，无重大功能落地。v0.2.9 周期进入维护模式，核心功能 PR（如 #2696 MCP 动态头、#2992 会话修复）仍待最终审查。

---

## 4. 社区热点

### 🔥 最活跃讨论：Streaming HTTP 请求配置（Issue #2404）

| 指标 | 数据 |
|:---|:---|
| **链接** | [sipeed/picoclaw#2404](https://github.com/sipeed/picoclaw/issues/2404) |
| **创建** | 2026-04-07（58 天前） |
| **最后更新** | 2026-06-03 |
| **评论数** | **11 条**（今日最活跃） |
| **👍 反应** | 1 |
| **标签** | `enhancement`, `provider`, `config` |

**诉求分析**：
- **核心需求**：用户希望 PicoClaw 支持向 LLM 后端发送 **streaming HTTP 请求**（类似 Python OpenAI 客户端的 `stream=True`），以实现实时 Token 流式传输
- **提议方案**：在配置文件中增加 `"streaming": true` 选项
- **背后信号**：社区对**低延迟交互体验**的需求强烈，当前全量响应模式在长文本生成场景下用户体验不佳
- **路线图判断**：此功能涉及 provider 层核心协议改造，实现复杂度中等，但社区呼声持续，**极有可能纳入 v0.3.0 或后续版本**

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 状态 | 是否有 Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#2958](https://github.com/sipeed/picoclaw/issues/2958) | **Pico 通道连续请求时 `tool_calls` 消息丢失**：仅首次请求的 tool_calls 能送达 UI，后续请求被静默丢弃 | `OPEN` + `stale` | ✅ **有**：PR [#2957](https://github.com/sipeed/picoclaw/pull/2957)（loafoe 提交，待合并） |
| 🟡 **中** | [#2954](https://github.com/sipeed/picoclaw/issues/2954) | **不支持 32 位 Android 系统**：Termux 等环境下无法运行 | `OPEN` + `stale` | ❌ 无 |
| 🟡 **中** | [#2992](https://github.com/sipeed/picoclaw/pull/2992) | **会话历史污染升级**：v0.2.9 后新 Web UI 会话继承旧主会话消息 | `OPEN`（PR 待合并） | ✅ **自身即为 Fix** |
| 🟢 **低** | [#2956](https://github.com/sipeed/picoclaw/pull/2956) | **安全配置合并时通道启用状态丢失**：`.security.yml` 加载后覆盖 `config.json` 中的 `enabled: true` | `OPEN` + `stale` | ✅ **自身即为 Fix** |

**关键风险**：#2958 tool_calls 丢失是**功能级缺陷**，直接影响多轮工具调用可靠性，虽已有修复 PR #2957，但双双标记 `stale`，存在审查停滞风险。

---

## 6. 功能请求与路线图信号

| 功能请求 | 来源 | 成熟度 | 纳入可能性 |
|:---|:---|:---|:---|
| **Streaming HTTP 请求配置** | Issue #2404 | ⭐⭐⭐ 需求明确、方案简单、社区验证充分 | **高** — 配置层改动，风险低，建议 v0.3.0 优先 |
| **MCP 每请求动态请求头** | PR #2696（待合并） | ⭐⭐⭐ 实现完整、作者活跃（loafoe） | **高** — 已提交 PR，技术方案成熟，等待代码审查 |
| **自描述 Agent Skill** | PR #2994（已关闭） | ⭐⭐ 文档型贡献，方向正确但需迭代 | **中** — 概念验证完成，正式技能体系需产品设计 |

**缺失信号**：32 位 Android 支持（#2954）尚无技术方案讨论，可能受限于 Go 交叉编译或依赖库架构支持，短期内难以纳入路线图。

---

## 7. 用户反馈摘要

### 😫 痛点
- **"工具调用不可靠"**："连续请求时 tool_calls 消息丢失，只有第一次能显示" —— loafoe (#2958)，直接影响 Agent 多步任务执行
- **"配置合并行为意外"**："加了 telegram token 后通道反而被禁用，找不到原因" —— yuxuan-7814 (#2956)，配置系统的隐式覆盖逻辑违反直觉
- **"Android 老设备被排除"**：32 位 Termux 用户无法使用 PicoClaw，边缘设备覆盖不足 —— yeozhang (#2954)

### 😊 满意/期待
- **"终于能控制 TLS 验证了"**：MQTT 安全加固 PR 解决了自签名证书与生产安全的矛盾
- **"期待流式响应"**：Python OpenAI 用户希望 PicoClaw 提供同等体验，降低迁移成本

---

## 8. 待处理积压

### ⚠️ 需要维护者介入的 stale 项

| 项目 | 链接 | 停滞天数 | 风险说明 |
|:---|:---|:---|:---|
| PR #2957 | [fix: prevent tool_calls from being dropped during streaming](https://github.com/sipeed/picoclaw/pull/2957) | ~7 天 | **高优先级功能修复**，与 Issue #2958 配对，双双 stale 导致已知 Bug 无法关闭 |
| PR #2956 | [fix: preserve channel enabled state when merging security.yml](https://github.com/sipeed/picoclaw/pull/2956) | ~7 天 | 配置系统易用性修复，影响新用户上手体验 |
| PR #2955 | [fix: verify process identity in singleton PID check](https://github.com/sipeed/picoclaw/pull/2955) | ~7 天 | 启动可靠性修复，PID 复用场景下的罕见但严重故障 |
| Issue #2954 | [不支持32位Android系统](https://github.com/sipeed/picoclaw/issues/2954) | ~7 天 | 需评估技术可行性并明确支持矩阵，避免用户无限期等待 |

**建议行动**：对 #2957/#2956/#2955 三个关联修复进行批量审查，可快速关闭配对 Issue，释放社区注意力。

---

> 📊 **数据来源**: GitHub API / sipeed/picoclaw 公开仓库  
> 📅 **下次更新**: 2026-06-05

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-06-04

> 项目地址: [github.com/qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw) | 分析周期: 过去24小时

---

## 1. 今日速览

NanoClaw 今日呈现**高活跃开发态势**，24小时内涌现 **9 个待合并 PR** 和 **1 个新 Bug 报告**，无版本发布。社区贡献者聚焦三大主线：**调度系统稳定性修复**（3 个关联 PR）、**服务启动可靠性**（加密家目录场景）、以及 **Slack 集成边界问题**。值得注意的是，所有 PR 均处于待合并状态，代码审查吞吐量成为当前瓶颈——建议维护者优先处理已标记 `[follows-guidelines]` 的 PR 以避免贡献者流失。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

| PR | 作者 | 进展说明 | 链接 |
|:---|:---|:---|:---|
| #2683 | shrwnsan | **新增 QMD 容器技能**：为 NanoClaw 引入混合 Markdown 搜索能力（BM25 + 向量 + 模糊搜索），扩展了 Agent 的文档检索场景 | [PR #2683](https://github.com/nanocoai/nanoclaw/pull/2683) |
| #2681 | glifocat | **服务启动修复**：针对加密家目录 + linger 启用场景，提供系统性修复方案，直接响应 Issue #2680 | [PR #2681](https://github.com/nanocoai/nanoclaw/pull/2681) |
| #2682 | ira-at-work | **技能系统兼容性升级**：自动跳过 v1-only 技能分支，为 v2 迁移铺平道路，减少用户升级摩擦 | [PR #2682](https://github.com/nanocoai/nanoclaw/pull/2682) |
| #2679, #2678 | yairixStudio | **调度系统双修复**：永久失败任务的用户通知 + 失败场景下的周期任务重编排，解决"静默失败"痛点 | [PR #2679](https://github.com/nanocoai/nanoclaw/pull/2679) · [PR #2678](https://github.com/nanocoai/nanoclaw/pull/2678) |
| #2677 | shrwnsan | **预任务脚本韧性增强**：失败时自动重试一次并附带诊断信息，降低运维排查成本 | [PR #2677](https://github.com/nanocoai/nanoclaw/pull/2677) |
| #2676 | shrwnsan | **容器代理绕过**：为本地服务添加 NO_PROXY 支持，解决 OneCLI 代理误拦截问题 | [PR #2676](https://github.com/nanocoai/nanoclaw/pull/2676) |
| #2605 | guyb1 | **权限继承机制**：通过 OneCLI 实现父子 Agent 权限传递，企业级部署的关键基础设施（5月24日创建，今日更新） | [PR #2605](https://github.com/nanocoai/nanoclaw/pull/2605) |
| #2675 | IamAdamJowett | **Slack 消息截断修复**：规避 3000 字符 section block 硬限制，防止长消息完全丢失 | [PR #2675](https://github.com/nanocoai/nanoclaw/pull/2675) |

**整体评估**：今日 PR 覆盖"可靠性三支柱"（启动可靠性、调度可靠性、消息可靠性），但**零合并率**提示审查资源紧张。

---

## 4. 社区热点

| 热度指标 | 条目 | 分析 |
|:---|:---|:---|
| 🔥 **最高关联度** | Issue #2680 + PR #2681 | 加密家目录场景是 Linux 桌面/笔记本用户的常见配置，glifocat 在报告 Bug 后 **同日提交修复**，体现社区自我愈合能力。诉求本质：NanoClaw 作为系统级服务，需兼容现代加密工作流 |
| 🔥 **最密集领域** | 调度系统 3 PR（#2677-#2679） | yairixStudio 与 shrwnsan 的协同表明：调度模块已进入"深度打磨期"，用户不再满足于"能跑"，而是要求"失败可观测、可恢复" |
| 🔥 **最长等待** | PR #2605（创建于 2026-05-24，已 11 天） | 权限继承是企业多 Agent 部署的阻塞性功能，持续未合并可能抑制 B 端采用 |

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | 修复 PR |
|:---|:---|:---|:---|
| **Medium** | **加密家目录 + linger 导致服务启动静默失败**（ecryptfs/fscrypt/gocryptfs） | 🟡 已报告，有修复方案 | [#2681](https://github.com/nanocoai/nanoclaw/pull/2681) |
| **Medium** | **Slack 长消息 3000 字符截断导致整条消息丢弃**（`invalid_blocks` 错误） | 🟡 已修复，待合并 | [#2675](https://github.com/nanocoai/nanoclaw/pull/2675) |
| **Low-Medium** | 调度任务永久失败后无用户通知，形成"黑洞" | 🟡 已修复，待合并 | [#2679](https://github.com/nanocoai/nanoclaw/pull/2679) |
| **Low-Medium** | 周期任务永久失败后不再触发下一次执行 | 🟡 已修复，待合并 | [#2678](https://github.com/nanocoai/nanoclaw/pull/2678) |
| **Low** | 预任务脚本单次失败即终止，无自动恢复 | 🟡 已修复，待合并 | [#2677](https://github.com/nanocoai/nanoclaw/pull/2677) |
| **Low** | OneCLI 代理误拦截本地容器服务通信 | 🟡 已修复，待合并 | [#2676](https://github.com/nanocoai/nanoclaw/pull/2676) |

**健康度信号**：今日所有 Bug 均有对应修复 PR，**修复响应率 100%**；但合并滞后可能延缓用户获得修复。

---

## 6. 功能请求与路线图信号

| 信号来源 | 内容 | 纳入可能性评估 |
|:---|:---|:---|
| PR #2683 | QMD 混合搜索容器技能 | **高** — 符合"技能生态扩展"路线图，纯容器技能无源码侵入，审查风险低 |
| PR #2682 | v2 技能兼容性自动检测 | **高** — 技术债务清理，为版本迁移必需基础设施 |
| PR #2605 | OneCLI 父子 Agent 权限继承 | **中高** — 企业级功能，但涉及安全模型，需深度审查 |
| Issue #2680 隐含需求 | 加密家目录场景的系统性支持 | **中** — 当前为点式修复，长期可能需要 PAM 集成策略文档 |

**路线图推断**：项目正处于 **v1→v2 过渡期**，兼容性处理（#2682）与核心可靠性加固（调度、服务启动）优先于新功能。

---

## 7. 用户反馈摘要

> 基于 Issues/PR 描述提炼的真实痛点

| 痛点 | 场景 | 来源 |
|:---|:---|:---|
| **"重启后 Agent 消失"** | 启用 linger 的加密家目录系统，用户预期服务自启动，实际静默失败 | [Issue #2680](https://github.com/nanocoai/nanoclaw/issues/2680) |
| **"调度任务失败了我却不知道"** | 周期性任务永久失败后仅记录日志，无主动通知机制 | [PR #2679](https://github.com/nanocoai/nanoclaw/pull/2679) |
| **"Slack 消息发出去就没了"** | 长输出（如代码块、日志）触发 Slack API 硬限制，整条消息被拒 | [PR #2675](https://github.com/nanocoai/nanoclaw/pull/2675) |
| **"v1 技能干扰 v2 升级"** | 技能更新时 v1-only 分支混入选择列表，造成用户困惑 | [PR #2682](https://github.com/nanocoai/nanoclaw/pull/2682) |

**满意度信号**：贡献者主动跟进问题（glifocat 同日修 Bug）、PR 模板规范使用率高，表明社区治理成熟。

---

## 8. 待处理积压

| 条目 | 等待时间 | 风险说明 | 行动建议 |
|:---|:---|:---|:---|
| [PR #2605](https://github.com/nanocoai/nanoclaw/pull/2605) | **11 天** | 权限继承是企业多租户部署的**阻塞性功能**，长期未审可能迫使企业 fork 或放弃 | 维护者优先安排安全/架构审查 |
| [PR #2683](https://github.com/nanocoai/nanoclaw/pull/2683) 等 8 个今日 PR | 0-1 天 | 批量堆积将形成审查债务，且部分 PR 间存在依赖（#2681 依赖 #2680 验证） | 建议分批次：先合 bugfix（#2675-#2679），再合基础设施（#2682），最后功能（#2683, #2605） |

---

**📊 项目健康度评分**

| 维度 | 评分 | 说明 |
|:---|:---|:---|
| 社区活跃度 | ⭐⭐⭐⭐☆ | 贡献踊跃，PR 密度高 |
| 响应速度 | ⭐⭐⭐⭐☆ | Bug 修复当日响应 |
| 代码流动 | ⭐⭐☆☆☆ | **零合并**，审查瓶颈明显 |
| 稳定性治理 | ⭐⭐⭐⭐☆ | 系统性修复调度、启动、消息可靠性 |

> **关键建议**：今日的核心任务是**释放审查带宽**。9 个 PR 中 6 个为 bugfix 且标记 `[follows-guidelines]`，具备快速合并条件。

---

*日报生成时间: 2026-06-04* | *数据来源: GitHub API*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-06-04

> **项目**: [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)  
> **分析日期**: 2026-06-04（基于过去24小时数据）

---

## 1. 今日速览

NullClaw 今日活跃度处于**极低水平**，社区进入典型的维护期静默状态。过去24小时内仅产生 **1 条 PR 更新**，无 Issues 活动、无版本发布、无评论互动。唯一的活跃 PR #946 聚焦于 Agent 系统提示词中工具过滤逻辑的精细化修复，属于技术债务清理而非新功能开发。整体判断：项目处于**稳定维护阶段**，核心团队可能正专注于内部质量打磨，外部社区参与度暂时低迷。

---

## 2. 版本发布

**无新版本发布。**

最近一次 Release 需回溯至更早周期，今日无版本迭代信号。

---

## 3. 项目进展

### 待合并 PR（1条）

| PR | 状态 | 核心贡献 | 项目推进度 |
|:---|:---|:---|:---|
| [#946 fix(agent): filter tools in system prompt text by tool_filter_groups](https://github.com/nullclaw/nullclaw/pull/946) | 🟡 **OPEN** | 新增 `filterToolsForPromptText` 函数，实现系统提示词文本层面的工具过滤；仅保留内置工具及 `always` 过滤组的 MCP 工具，动态分组 MCP 工具通过原生 API 工具调用传递 | ⭐⭐☆☆☆ 中等偏低——属于边界情况修复，非架构级变更 |

**技术细节解读**：
- **问题背景**：此前系统提示词文本可能泄露本应动态加载的 MCP 工具 schema，导致 LLM 上下文污染或工具误触发
- **修复策略**：双轨制设计——文本提示词做减法（精简可见工具），API 层面保留完整工具调用能力（通过 turn keywords 匹配动态组）
- **影响范围**：使用 `tool_filter_groups` 配置的多 Agent 场景，特别是 MCP 工具动态分组用户

> ⚠️ 该 PR 自 2026-06-03 创建后暂无更新，处于等待 Review 状态

---

## 4. 社区热点

**今日无活跃讨论。**

| 指标 | 数据 | 分析 |
|:---|:---|:---|
| 最热 PR | #946（唯一候选） | 0 👍，0 评论，作者为项目成员 `vernonstinebaker` |
| 社区诉求信号 | **缺失** | 无外部用户参与，PR 由内部驱动 |

**深层判断**：该 PR 的静默状态反映两种可能——(a) 变更属于内部技术优化，社区尚未感知到相关痛点；(b) MCP 工具过滤功能的使用群体较小，缺乏外部反馈动力。建议维护者在 PR 描述中补充 **用户场景说明** 以提升社区共鸣。

---

## 5. Bug 与稳定性

| 严重程度 | 数量 | 详情 | Fix PR |
|:---|:---|:---|:---|
| 🔴 严重 | 0 | — | — |
| 🟠 中等 | 0 | — | — |
| 🟡 轻微 | 0 | — | — |

**稳定性评估**：今日无新增 Bug 报告。PR #946 可视为**预防性修复**——解决工具提示词泄露的潜在风险，尚未形成实际事故。

---

## 6. 功能请求与路线图信号

**今日无新增功能请求。**

| 来源 | 信号强度 | 解读 |
|:---|:---|:---|
| PR #946 | 🔶 弱 | 暗示项目正在强化 **MCP 工具治理体系**（过滤、分组、动态加载），可能为更复杂的 Agent 编排场景铺路 |
| 历史趋势推断 | — | `tool_filter_groups` 配置的持续迭代表明 NullClaw 将 **精细化工具权限控制** 作为差异化能力 |

**下一版本纳入预测**：PR #946 极可能进入近期补丁版本（如 `v0.x.1`），属于成熟功能的补全而非路线图扩展。

---

## 7. 用户反馈摘要

**今日无用户反馈数据。**

> 基于历史模式推断的潜在痛点（需结合过往 Issues 验证）：
> - MCP 工具在复杂 Agent 链中的 **上下文污染问题**（PR #946 直接回应）
> - 动态工具加载与静态提示词之间的 **一致性挑战**
> - 缺乏工具过滤行为的 **可视化调试手段**

---

## 8. 待处理积压

| 类型 | 数量 | 重点关注 | 风险提示 |
|:---|:---|:---|:---|
| 待 Review PR | **1** | [#946](https://github.com/nullclaw/nullclaw/pull/946) | 创建已逾24小时无响应，可能因维护者带宽不足或等待 CI 结果 |
| 长期未响应 Issue | 无数据 | — | 建议维护者检查是否有超30天未回复的历史 Issue |

**维护者行动建议**：
1. **优先处理** PR #946：技术债务类修复宜快不宜慢，避免分支漂移
2. **补充信息**：在 PR 中明确是否需要社区测试验证，或标记 `ready-for-review` 状态
3. **激活社区**：考虑发布简短的 "help wanted" 议题，将内部优化转化为社区参与入口

---

## 附录：数据可信度说明

| 字段 | 状态 | 备注 |
|:---|:---|:---|
| PR 评论数 | ⚠️ `undefined` | 原始数据异常，实际可能为 0 或解析失败 |
| PR 链接 | ⚠️ 格式简化 | 实际链接应为 `https://github.com/nullclaw/nullclaw/pull/946` |

---

*本日报基于有限 GitHub API 数据生成，建议结合项目 Discord/Slack 等渠道补充非公开讨论信息。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-06-04

---

## 1. 今日速览

IronClaw 今日保持**高强度开发节奏**，24小时内50个PR流转（28条已合并/关闭，22条待审），27个Issue更新（21条活跃/新开，6条关闭）。核心团队围绕 **Reborn 架构成熟化** 和 **Slack 集成落地** 双主线推进，同时密集修复 agent loop、触发器系统和安全边界的多项缺陷。v0.29.1 补丁版本今日发布，聚焦 Responses API 温度参数透传和会话历史作用域修复。值得关注的是，henrypark133 单日提交 6 个 Reborn 相关的深度技术 Issue，暴露出产前架构的多个隐性问题，社区技术债务开始显性化。

---

## 2. 版本发布

### [ironclaw-v0.29.1](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v0.29.1) — 2026-06-04

| 类别 | 内容 | 影响面 |
|:---|:---|:---|
| **Added** | Web 层 Responses API 支持 `temperature` 参数透传 ([#3641](https://github.com/nearai/ironclaw/pull/3641)) | OpenAI 兼容 API 用户 |
| **Fixed** | Engine 层修复 v1 历史记录在 channel 会话中的作用域问题 ([#4320](https://github.com/nearai/ironclaw/pull/4320)) | 多轮对话稳定性 |
| **CI/Release** | 新增 WeCo（发布流程组件） | 内部发布管道 |

**迁移注意事项**：无破坏性变更，建议所有使用 Responses API 的生产实例升级以获取完整的推理参数控制。

---

## 3. 项目进展

### 今日合并/关闭的关键 PR（8条）

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#4422](https://github.com/nearai/ironclaw/pull/4422) | serrrfirat | **Slack 个人绑定服务** — 共享租户 Slack App → 每用户绑定流 | Slack 集成从"适配器"进入"用户身份层"，为 Lane 10 MVP 铺路 |
| [#4421](https://github.com/nearai/ironclaw/pull/4421) | serrrfirat | **Slack 演员绑定** — 通过 Reborn 用户身份解析外部 Slack 演员 | 打通 OAuth 用户与对话系统的身份闭环 |
| [#4418](https://github.com/nearai/ironclaw/pull/4418) | serrrfirat | **Slack host-beta 路由接入 Reborn serve** — Events API 全链路贯通 | Slack 成为 Reborn 首个完整的外部渠道集成（含 DB 迁移） |
| [#4417](https://github.com/nearai/ironclaw/pull/4417) | serrrfirat | **WebUI 实时投影光标恢复修复** | 解决实时进度更新与持久化游标的冲突，用户体验关键修复 |
| [#4415](https://github.com/nearai/ironclaw/pull/4415) | henrypark133 | **触发器轮询器全路径集成测试（PR18.7）** | 后台触发器系统首次获得端到端自动化验证 |
| [#4412](https://github.com/nearai/ironclaw/pull/4412) | serrrfirat | **本地开发运行时作用域绑定到运行演员** | SSO 与本地开发环境的能力请求一致性 |
| [#4380](https://github.com/nearai/ironclaw/pull/4380) | henrypark133 | **只读自动化 WebUI v2 API** — `GET /api/webchat/v2/automations` | 用户可见的自动化管理界面基础设施 |
| [#4215](https://github.com/nearai/ironclaw/pull/4215) | henrypark133 | **PKCE 数学逻辑整合至 `ironclaw_common::pkce`** | OAuth 安全代码去重，Track A 完成 |

**整体里程碑**：Slack 集成从"计划 Issue #3857"进入"可运行代码"阶段；触发器系统从"功能存在"进入"可测试验证"阶段；Reborn 身份层开始承载 OAuth 绑定。

---

## 4. 社区热点

### 讨论最活跃的议题

| 排名 | Issue/PR | 评论数 | 核心诉求分析 |
|:---|:---|:---|:---|
| 1 | [#3857](https://github.com/nearai/ironclaw/issues/3857) [Reborn] Lane 10: Slack ProductAdapter MVP | **6 评论** | **企业集成紧迫性** — 用户需要预配置凭证的 Slack 机器人，支持 DM 和 App Mention，全部走 Reborn 服务。这是外部渠道商业化的阻塞项 |
| 2 | [#3280](https://github.com/nearai/ironclaw/issues/3280) [Reborn] ProductWorkflow 和 InboundTurnService facade | **5 评论** | **架构抽象层诉求** — 产品适配器与宿主层之间的标准契约，是 Reborn 支持多渠道（Slack、Web、CLI）的统一前提 |
| 3 | [#4376](https://github.com/nearai/ironclaw/issues/4376) HTTP 凭证载体硬化 | **2 评论** | **安全审计跟进** — PR #4372 的窄修复后，社区要求更彻底的非克隆类型和 DTO 边界设计 |

**背后信号**：核心开发者（serrrfirat、henrypark133）正在"架构铺设"与"安全债务"两条线上并行作战，评论集中在设计审查而非用户反馈，说明项目仍处于**核心团队驱动**阶段，外部贡献者参与度有限。

---

## 5. Bug 与稳定性

### 今日报告的问题（按严重程度排序）

| 严重度 | Issue | 描述 | 状态 |
|:---|:---|:---|:---|
| 🔴 **P0-回归** | [#4424](https://github.com/nearai/ironclaw/issues/4424) | `builtin.spawn_subagent` 在系统提示中广告但结构化 tools 数组缺失 — **模型完全无法调用** | **已识别，待修复 PR** |
| 🔴 **P0-功能失效** | [#4420](https://github.com/nearai/ironclaw/issues/4420) | `TriggerCompletionPolicy::CompleteAfterFirstFire` 被存储但从未被 settle 路径查询 — **触发器无限重发** | 待修复 |
| 🟡 **P1-性能** | [#4425](https://github.com/nearai/ironclaw/issues/4425) | `builtin.http` 返回原始 HTML 无剥离、无大小下限 — **单次 fetch 1.2MB 注入上下文** | 待修复 |
| 🟡 **P1-性能** | [#4429](https://github.com/nearai/ironclaw/issues/4429) | 每次模型调用重建完整 prompt bundle — **identity/skill 缓存全冷启动** | 待修复 |
| 🟡 **P1-可观测性** | [#4427](https://github.com/nearai/ironclaw/issues/4427) | `LoopFailureKind` 仅持久化到 DB，**追踪日志完全不可见** | 待修复 |
| 🟡 **P1-安全/功能** | [#4426](https://github.com/nearai/ironclaw/issues/4426) | `interactive_tools` profile_id 被读取但丢弃 — **生命周期/变异工具在每个聊天中暴露** | 待修复 |
| 🟡 **P1-性能** | [#4428](https://github.com/nearai/ironclaw/issues/4428) | `builtin.skill_list` 无分页/截断 — **31 技能返回 14KB** | 待修复 |
| 🟢 **P2-运维** | [#4400](https://github.com/nearai/ironclaw/issues/4400) | 陈旧 PID 文件导致 IronClaw 无法启动 | 待修复 |

**已关闭的稳定性修复**：
- [#4310](https://github.com/nearai/ironclaw/issues/4310) Context-overflow 恢复发出 `ShrinkContext` 但执行器未应用 → **已修复关闭**
- [#4309](https://github.com/nearai/ironclaw/issues/4309) Compaction summary 写入可 outlive 失败的 BeforeModel checkpoint → **已修复关闭**

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| **Slack ProductAdapter MVP（预配置凭证）** | [#3857](https://github.com/nearai/ironclaw/issues/3857) | ⭐⭐⭐⭐⭐ **极高** | PR #4418/#4421/#4422/#4423/#4430 已构成完整实现链，仅剩 WebUI OAuth 流程收尾 |
| **OpenAI 兼容 API 迁移至 Reborn** | [#3283](https://github.com/nearai/ironclaw/issues/3283) | ⭐⭐⭐⭐☆ **高** | 父 Issue #3031 的子任务，依赖 #3280 ProductWorkflow 完成 |
| **默认 OAuth 账户（一次设置，永久静默）** | [#4382](https://github.com/nearai/ironclaw/issues/4382) | ⭐⭐⭐⭐☆ **高** | 用户体验痛点明确，PR #4354 已预留行为变更插槽 |
| **模型可见能力选择（提供商工具数限制）** | [#4407](https://github.com/nearai/ironclaw/issues/4407) | ⭐⭐⭐☆☆ **中** | 设计阶段问题，需等能力表面系统稳定 |
| **第三方扩展钩子激活** | [#3951](https://github.com/nearai/ironclaw/pull/3951) | ⭐⭐⭐☆☆ **中** | 代码就绪，但依赖 #3938 HOOKS_ENABLED 标志翻转，默认 OFF 保守策略 |
| **Python E2E cron 触发场景** | [#4432](https://github.com/nearai/ironclaw/issues/4432) | ⭐⭐⭐☆☆ **中** | 被 Reborn 生产配置布线阻塞，计划已存在 |

---

## 7. 用户反馈摘要

### 真实痛点（来自 Issue 描述）

| 来源 | 痛点 | 场景 |
|:---|:---|:---|
| sunglow666 | `/model` 返回的显示名称无法用于 NEAR AI 提供商切换模型 | 用户看到 "GPT OSS 120B" 但无法直接用作模型标识符，**显示层与协议层断裂** |
| sunglow666 | 生产实例因陈旧 PID 文件无限重启 | 容器/进程异常退出后无法自恢复，**运维自动化不足** |
| henrypark133（内部测试） | `builtin.http` 无 HTML 剥离导致上下文爆炸 | Reborn `serve` 测试中单次 fetch 投资网站产生 **~1.2MB 输出** |
| henrypark133（内部测试） | 模型被告知工具存在但无法调用 | **系统提示与结构化工具数组不一致**，模型进入"幻觉叙述"循环 |

### 满意度信号
- WebUI v2 实时线程状态（[#4419](https://github.com/nearai/ironclaw/pull/4419)）—— 绿色 RUNNING / 琥珀 NEEDS_ATTENTION / 清除状态，注意力标记持久化 → **用户体验主动投入**

### 不满意信号
- Reborn 本地开发 `serve` 中多个"硬编码 AllowAll"安全降级（[#4426](https://github.com/nearai/ironclaw/issues/4426)）→ **安全与便利的权衡偏向了错误方向**

---

## 8. 待处理积压

### 需要维护者关注的高龄/重要 Issue

| Issue | 创建时间 | 最后更新 | 风险 | 提醒 |
|:---|:---|:---|:---|:---|
| [#4108](https://github.com/nearai/ironclaw/issues/4108) Nightly E2E 失败 | 2026-05-27 | 2026-06-03 | 🔴 **持续 8 天** | 自动化回归基础设施失效，可能掩盖新引入的缺陷 |
| [#3280](https://github.com/nearai/ironclaw/issues/3280) ProductWorkflow facade | 2026-05-06 | 2026-06-03 | 🟡 **28 天** | Reborn 多渠道统一的架构基石，阻塞 #3283 等下游任务 |
| [#3283](https://github.com/nearai/ironclaw/issues/3283) OpenAI API 迁移至 Reborn | 2026-05-06 | 2026-06-03 | 🟡 **28 天** | 外部兼容性承诺，长期悬置影响用户信任 |
| [#3951](https://github.com/nearai/ironclaw/pull/3951) 第三方扩展钩子激活 | 2026-05-23 | 2026-06-03 | 🟡 **12 天** | 生态扩展能力，代码就绪但等待标志策略决策 |

### PR 审查瓶颈

| PR | 规模 | 等待时间 | 阻塞风险 |
|:---|:---|:---|:---|
| [#4406](https://github.com/nearai/ironclaw/pull/4406) PR 18.5a: type-seal trusted trigger ingress | XL | 1 天 | 触发器安全路径，影响所有后台自动化 |
| [#4430](https://github.com/nearai/ironclaw/pull/4430) Slack personal binding pairing flow | XL | 0 天（新） | Lane 10 MVP 最后一块拼图 |
| [#4379](https://github.com/nearai/ironclaw/pull/4379) 迁移只读命令到 Reborn | XL | 1 天 | CLI 用户体验，外部贡献者 denbite 提交 |

---

**日报编制说明**：基于 GitHub 公开数据，Issue/PR 评论数部分显示为 `undefined` 系源数据限制，已通过上下文推断补充分析。Reborn 为 IronClaw 下一代核心架构代号。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-06-04

## 1. 今日速览

LobsterAI 今日活跃度较高，过去24小时内共有 **16 个 PR 更新**（14 个已合并/关闭，2 个待合并）和 **1 个活跃 Issue**。项目发布了 **2026.6.3 版本**，迭代节奏保持紧凑。今日合并代码集中在 **MCP 稳定性优化**、**Cowork 协作体验增强** 和 **HTML 分享功能完善** 三大方向，显示出团队对 AI 智能体核心工作流和分享场景的持续投入。社区方面仅有 1 个用户反馈 Issue 活跃，涉及订阅积分清零争议，暂无技术类热议话题。整体项目健康度良好，代码吞吐量大，但社区 Issue 互动相对冷清。

---

## 2. 版本发布

### 🚀 [LobsterAI 2026.6.3](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.6.3)（2026-06-03）

本次为小版本迭代，包含 3 项更新：

| PR | 作者 | 变更内容 |
|---|---|---|
| [#2091](https://github.com/netease-youdao/LobsterAI/pull/2091) | @btc69m979y-dotcom | **feat(mcp)**: 优化 npx MCP 启动解析逻辑，并增加首响应耗时日志 |
| [#2092](https://github.com/netease-youdao/LobsterAI/pull/2092) | @liugang519 | **feat**: 优化 HTML 分享体验 |
| — | — | 第三条更新内容在数据中截断，预计为 Cowork 相关功能 |

**破坏性变更 / 迁移注意事项**：未发现明确的破坏性变更。MCP 相关改动主要为诊断增强和启动可靠性提升，用户无需手动迁移。HTML 分享优化为体验层调整，不影响历史分享链接。

---

## 3. 项目进展

今日合并/关闭的 14 个 PR 中，以下几条显著推动了产品能力：

### MCP 智能体工具链稳定性
- **[#2104](https://github.com/netease-youdao/LobsterAI/pull/2104)** `fix(mcp): prevent session timeout during gateway config reload` — 修复网关配置重载时 MCP 会话超时问题，提升长时间运行的 Agent 会话稳定性。
- **[#2103](https://github.com/netease-youdao/LobsterAI/pull/2103)** `fix(mcp): validate remote server urls` — 为远程 MCP 服务器增加 URL 校验，在 IPC 处理和 OpenClaw 配置同步阶段拦截非法地址，并本地化错误提示。
- **[#2100](https://github.com/netease-youdao/LobsterAI/pull/2100)** `fix(mcp): keep managed installs node-aware` — 托管式 MCP npm 安装注入 Node 工具链路径，避免 Electron 环境下 Node  shim 丢失导致启动失败。
- **[#2091](https://github.com/netease-youdao/LobsterAI/pull/2091)**（已进 Release）— 补充 npx MCP 启动解析与首响应耗时观测。

### Cowork 协作会话体验
- **[#2108](https://github.com/netease-youdao/LobsterAI/pull/2108)** `feat(cowork): improve channel session sync and cleanup` — 重建频道会话时仅同步最新用户轮次，清理网关会话转录，优化 Fork 分支图标组件。
- **[#2101](https://github.com/netease-youdao/LobsterAI/pull/2101)** `feat(cowork): add artifact preview selected text to chat` — 支持从 Markdown/纯文本 Artifact 预览中选择文本并加入 Cowork 草稿。
- **[#2098](https://github.com/netease-youdao/LobsterAI/pull/2098)** `feat(cowork): add selected text snippets to chat context` — 助手消息文本支持"Add to chat"，选中片段作为消息元数据持久化，并序列化到 OpenClaw 用户消息。
- **[#2085](https://github.com/netease-youdao/LobsterAI/pull/2085)** `feat(cowork): add local conversation forking` — 为助手消息增加 Fork 动作，可从任意消息创建新的本地会话，长会话保留可压缩上下文。
- **[#2097](https://github.com/netease-youdao/LobsterAI/pull/2097)** `fix(cowork): add title bar close button to search modal` — 搜索弹窗增加标题栏关闭按钮。

### HTML 分享与 UI 打磨
- **[#2099](https://github.com/netease-youdao/LobsterAI/pull/2099)** `feat(html-share): refine share dialog and access controls` — HTML 分享退出测试模式，重设计分享对话框，移除自动复制和全局 Toast，增加 `html_share` 来源归因。
- **[#2105](https://github.com/netease-youdao/LobsterAI/pull/2105)** `fix(html-share): copy share link and code together` — 复制分享内容时同时输出标签链接和代码。
- **[#2106](https://github.com/netease-youdao/LobsterAI/pull/2106)** `fix(ui): improve kits and skills popover interactions` — 修复 ModelSelector hover card 视口溢出、SkillsPopover 延迟关闭改为即时关闭等交互细节。
- **[#2102](https://github.com/netease-youdao/LobsterAI/pull/2102)** `fix(config): preserve user-configured context windows and add mimo v2.5 models` — 保留用户自定义上下文窗口配置，新增 mimo v2.5 模型。

### 发布汇总
- **[#2107](https://github.com/netease-youdao/LobsterAI/pull/2107)** `release: 2026.6.2` — 2026.6.2 版本发布 PR，已关闭。

**整体评估**：今日代码推进覆盖"工具调用可靠性 → 协作上下文丰富度 → 分享链路闭环"三个层次，产品成熟度有明显提升。

---

## 4. 社区热点

由于今日仅有 1 个 Issue 且无高评论/高赞 PR，社区热点有限：

| 类型 | 编号 | 标题 | 互动数据 | 链接 |
|---|---|---|---|---|
| Issue | #2081 | 订阅 | 2 评论，0 👍 | [netease-youdao/LobsterAI#2081](https://github.com/netease-youdao/LobsterAI/issues/2081) |

**诉求分析**：该 Issue 为商业订阅争议，用户声称购买的 5500 积分未使用即被月底清零。这反映出：
1. 积分有效期/清零规则在用户侧感知不足；
2. 付费权益的透明度可能存在问题；
3. 此类问题若持续发酵，可能影响用户付费意愿和口碑。

> 注：今日 16 个 PR 的评论数均显示为 `undefined`，无法判断代码审查讨论热度。

---

## 5. Bug 与稳定性

按严重程度排列：

| 优先级 | PR/Issue | 内容 | 状态 |
|---|---|---|---|
| 🔴 高 | [#2104](https://github.com/netease-youdao/LobsterAI/pull/2104) | MCP 网关在配置重载时会话超时 | ✅ 已修复并合并 |
| 🔴 高 | [#2100](https://github.com/netease-youdao/LobsterAI/pull/2100) | 托管 MCP 安装因 Node 环境识别失败导致启动失败 | ✅ 已修复并合并 |
| 🟡 中 | [#2103](https://github.com/netease-youdao/LobsterAI/pull/2103) | 远程 MCP 服务器 URL 缺少校验，可能引入无效/恶意配置 | ✅ 已修复并合并 |
| 🟡 中 | [#2106](https://github.com/netease-youdao/LobsterAI/pull/2106) | ModelSelector hover card 视口溢出、SkillsPopover 交互异常 | ✅ 已修复并合并 |
| 🟢 低 | [#2105](https://github.com/netease-youdao/LobsterAI/pull/2105) | HTML 分享复制格式不符合预期 | ✅ 已修复并合并 |
| 🟢 低 | [#2097](https://github.com/netease-youdao/LobsterAI/pull/2097) | Cowork 搜索弹窗缺少关闭按钮 | ✅ 已修复并合并 |

**今日无新报告的技术 Bug Issue**，所有稳定性问题均通过主动 PR 修复。

---

## 6. 功能请求与路线图信号

今日无明确的新功能请求 Issue。但从已合并 PR 可推断下一阶段的路线图信号：

| 方向 | 证据 PR | 信号强度 |
|---|---|---|
| **Cowork 上下文增强** | #2098, #2101, #2085 | ⭐⭐⭐ 强 — 选中文本→聊天上下文、Artifact 引用、会话 Fork 构成完整工作流 |
| **MCP 生态可靠性** | #2104, #2103, #2100, #2091 | ⭐⭐⭐ 强 — 持续投入远程/托管/npx 等多种 MCP 启动场景 |
| **HTML 分享正式化** | #2099, #2092, #2105 | ⭐⭐☆ 中强 — 退出测试模式，完善访问控制和复制体验 |
| **模型配置扩展** | #2102 | ⭐⭐☆ 中 — 新增 mimo v2.5，持续关注模型接入 |

**潜在下一版本重点**：Cowork 的上下文引用能力可能从"选中文本"向"多模态 Artifact 引用"和"跨会话继承"演进；MCP 可能增加更细粒度的运行时观测和错误恢复。

---

## 7. 用户反馈摘要

今日唯一用户反馈来自 Issue [#2081](https://github.com/netease-youdao/LobsterAI/issues/2081)：

> **痛点**：订阅积分月底清零，用户认为"未使用即清零"不合理。
>
> **场景**：付费订阅用户持有大额积分（5500），因规则理解偏差或提示不足导致权益损失。
>
> **情绪**：强烈不满，带有质疑语气（"来搞笑的吧"）。
>
> **产品启示**：
> - 需在订阅/积分页面强化有效期规则提示；
> - 考虑到期前主动通知（应用内/邮件）；
> - 长期可考虑积分滚动过期或退款/转移机制，减少用户流失。

---

## 8. 待处理积压

以下 PR 长期未合并，建议维护者关注：

| PR | 标题 | 创建时间 | 最后更新 | 状态 | 风险 |
|---|---|---|---|---|---|
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | `chore(deps-dev): bump the electron group across 1 directory with 2 updates` | 2026-04-02 | 2026-06-03 | **OPEN** | Electron 40.2.1 → 42.3.1 跨大版本升级，搁置 2 个月，可能存在安全补丁滞后或兼容性验证瓶颈 |
| [#1463](https://github.com/netease-youdao/LobsterAI/pull/1463) | `[stale] [codex] fix long modal titles for issue 1435` | 2026-04-04 | 2026-06-03 | **OPEN** | 标记为 stale，已搁置 2 个月，Issue #1435 的 UI 溢出问题实际影响可用性，建议合并或关闭并说明 |

**建议动作**：
- **#1277**：Electron 大版本升级涉及渲染进程、Node ABI、安全沙箱等变更，建议排期专项验证，避免依赖漏洞累积。
- **#1463**：改动范围明确（5 个模态框复用同一个截断 helper），建议快速 review 合并，清理 stale PR。

---

*日报基于 GitHub 公开数据生成，PR 评论数因数据源显示为 `undefined` 未纳入互动分析。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-06-04

> **项目**: [moltis-org/moltis](https://github.com/moltis-org/moltis) | **日期**: 2026-06-04 | **角色**: AI 智能体与个人 AI 助手开源项目

---

## 1. 今日速览

Moltis 今日呈现**高活跃度修复冲刺**态势：24小时内关闭9个Issue、新开5个，但PR端出现4个待审积压且零合并，形成"消化旧债、新增待审"的异步节奏。核心贡献者 IlyaBizyaev 主导了大规模历史Bug清理（单日关闭7个），而 s-salamatov 正集中攻关 Telegram 通道的流式交互体验。值得关注的是，Docker/Podman 容器化部署成为今日新报Bug的集中区，反映用户规模化部署需求上升。版本发布保持日更节奏（20260603.01/20260602.05），但Release Note缺失详细变更说明，透明度有待提升。

---

## 2. 版本发布

| 版本 | 发布时间 | 状态 |
|:---|:---|:---|
| [20260603.01](https://github.com/moltis-org/moltis/releases/tag/20260603.01) | 2026-06-03 | ⚠️ 变更说明未提供 |
| [20260602.05](https://github.com/moltis-org/moltis/releases/tag/20260602.05) | 2026-06-02 | ⚠️ 变更说明未提供 |

**⚠️ 关键提醒**: 两个版本均未附带详细 Release Notes，仅有版本号标签。建议维护者补充：
- 破坏性变更清单
- 迁移指南（尤其涉及 Vault 密码配置、MCP 环境变量隔离等近期修复）
- 安全修复披露（Issue #1054 涉及 env var 泄露）

---

## 3. 项目进展

> **今日合并/关闭 PR**: 0 个 | **待审 PR**: 4 个

**历史债务大规模清理**（通过 Issue 关闭间接体现）：

| Issue | 类型 | 说明 | 推进价值 |
|:---|:---|:---|:---|
| [#1028](https://github.com/moltis-org/moltis/issues/1028) | Feature | Agent 开箱即用访问 Moltis 文档 | ✅ 降低新用户上手门槛 |
| [#1046](https://github.com/moltis-org/moltis/issues/1046) | Bug | Vault 密码配置误判为未设置 | ✅ 安全模块可用性修复 |
| [#1083](https://github.com/moltis-org/moltis/issues/1083) | Bug | 单技能启用/禁用粒度控制 | ✅ 权限系统精细化 |
| [#1053](https://github.com/moltis-org/moltis/issues/1053) | Bug | 自动会话标题生成失效 | ✅ 用户体验修复 |
| [#1054](https://github.com/moltis-org/moltis/issues/1054) | **Security** | MCP 环境变量通过 `mcp_list` 暴露给 LLM | 🔒 **安全加固** |
| [#1052](https://github.com/moltis-org/moltis/issues/1052) | Bug | 模型选择器版本号显示截断 | ✅ UI 适配性 |
| [#1045](https://github.com/moltis-org/moltis/issues/1045) | Bug | 浅色模式代码块高亮缺失 | ✅ 主题一致性 |
| [#1037](https://github.com/moltis-org/moltis/issues/1037) | Bug | Docker 环境下图片/文档发送失败 | ✅ 容器化兼容性 |
| [#1036](https://github.com/moltis-org/moltis/issues/1036) | Feature | Web UI 任意入站文件附件支持 | ✅ 多模态能力扩展 |

**整体评估**: 单日关闭9个Issue显示维护响应效率极高，但PR零合并揭示**代码审查瓶颈**——4个待审PR中3个由 s-salamatov 提交，存在单一贡献者依赖风险。

---

## 4. 社区热点

### 🔥 最高讨论热度

| 排名 | 条目 | 评论数 | 核心诉求 |
|:---|:---|:---|:---|
| 1 | [#1028](https://github.com/moltis-org/moltis/issues/1028) Agent 文档 OOTB 访问 | 3 | **降低认知负荷**：用户希望 Agent 无需手动配置即可理解自身能力边界 |
| 2 | [#1097](https://github.com/moltis-org/moltis/issues/1097) Telegram 流式编辑混入中间输出 | 1 | **交互保真度**：流式进度与最终答案的边界模糊破坏用户信任 |
| 3 | [#1046](https://github.com/moltis-org/moltis/issues/1046) Vault 密码配置误判 | 1 | **配置可靠性**：安全敏感模块的误报直接阻断使用 |

**诉求深层分析**:
- **#1028 的 3 条评论**反映社区对"自举文档"（self-documenting agent）的强烈需求——这与当前 AI 智能体领域"发现性"（discoverability）痛点高度吻合
- **#1097** 的流式交互问题直接催生了 [PR #1099](https://github.com/moltis-org/moltis/pull/1099)，显示问题-修复闭环效率

---

## 5. Bug 与稳定性

> **今日新报 Bug**: 4 个 | **已有 Fix PR**: 1 个 | **严重级分布**: 高1 / 中2 / 低1

| 严重度 | Issue | 描述 | 影响范围 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|:---|
| 🔴 **高** | [#1096](https://github.com/moltis-org/moltis/issues/1096) | Docker 中 Read/Write/Edit 工具失效 | **容器化部署核心功能瘫痪** | ❌ 无 | 🆕 待处理 |
| 🟡 **中** | [#1097](https://github.com/moltis-org/moltis/issues/1097) | Telegram 流式编辑混入中间输出 | 消息通道用户体验 | ✅ [#1099](https://github.com/moltis-org/moltis/pull/1099) | 🔄 待审 |
| 🟡 **中** | [#1095](https://github.com/moltis-org/moltis/issues/1095) | Podman 容器运行时兼容失败 | 红帽系企业用户 | ❌ 无 | 🆕 待处理 |
| 🟢 **低** | [#1094](https://github.com/moltis-org/moltis/issues/1094) | 模型"取消偏好"（De-Preferring）功能异常 | 模型选择管理 | ❌ 无 | 🆕 待处理 |

**🔴 紧急关注: #1096 Docker 工具链失效**

该 Issue 与昨日关闭的 [#1037](https://github.com/moltis-org/moltis/issues/1037)（Docker 图片/文档发送失败）形成**容器化功能退化模式**：
- 文件 I/O 类工具在 Docker 环境中系统性失效
- 可能根因：容器内路径映射、权限沙箱、或 volume 挂载策略变更
- **建议**: 优先复现并关联至基础设施层变更

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 成熟度 | 纳入可能性 |
|:---|:---|:---|:---|
| **Activity Log 可见性控制** | [#1092](https://github.com/moltis-org/moltis/issues/1092) + [PR #1093](https://github.com/moltis-org/moltis/pull/1093) | 🟢 已有完整 PR | **极高** — 三层级配置（account/channel/user）设计完整 |
| Telegram 流式进度分离 | [PR #1099](https://github.com/moltis-org/moltis/pull/1099) | 🟢 已有完整 PR | **高** — 直接修复 #1097，架构清晰 |
| 工具结果持久化截断 | [PR #1089](https://github.com/moltis-org/moltis/pull/1089) | 🟡 待审4天 | **中高** — 涉及会话历史压缩，性能关键 |
| 浏览器工具 null 参数容错 | [PR #1098](https://github.com/moltis-org/moltis/pull/1098) | 🟢 新提交 | **高** — 单点修复，影响本地小模型兼容性 |
| Agent 文档 OOTB | [#1028](https://github.com/moltis-org/moltis/issues/1028) | 🟢 已关闭 | ✅ 已实现 |

**路线图信号**: 
- **通道可配置性**成为明确主题（Telegram 流式行为、Activity Log 可见性）——反映多平台部署场景复杂化
- **本地/边缘模型适配**（Gemma 4 null 参数处理）显示社区对轻量化部署的关注

---

## 7. 用户反馈摘要

### 😤 痛点

| 反馈 | 来源 | 场景 |
|:---|:---|:---|
| "Docker 里基本工具都用不了" | [#1096](https://github.com/moltis-org/moltis/issues/1096) | **CI/CD 自动化、服务器部署** — 容器化是生产环境标配 |
| "Podman 完全不工作" | [#1095](https://github.com/moltis-org/moltis/issues/1095) | **企业安全合规环境** — Podman 无守护进程模式受青睐 |
| "Telegram 流式输出把草稿和最终答案混在一起" | [#1097](https://github.com/moltis-org/moltis/issues/1097) | **实时交互场景** — 用户看到编辑中的中间状态感到困惑 |
| "Activity Log 在频道里刷屏" | [#1092](https://github.com/moltis-org/moltis/issues/1092) | **群组/频道运营** — 工具调用痕迹干扰正常对话流 |

### 😊 满意点

| 反馈 | 来源 | 说明 |
|:---|:---|:---|
| 快速响应历史 Bug | 单日关闭9个Issue | 维护者对 5-21 至 5-29 期间积压问题的高效清理 |
| 安全漏洞及时修复 | [#1054](https://github.com/moltis-org/moltis/issues/1054) | MCP env var 泄露问题获快速响应 |

---

## 8. 待处理积压

> **PR 审查瓶颈**: 4个待审，最长达4天 | **无评论/无响应风险**: 中

| 条目 | 等待时间 | 风险 | 建议行动 |
|:---|:---|:---|:---|
| [PR #1089](https://github.com/moltis-org/moltis/pull/1089) Cap persisted tool results | 4天 | 🔴 **最高** — 影响会话历史性能与成本 | 优先审查：涉及核心数据流，作者 s-salamatov 已更新至 6-03 |
| [PR #1093](https://github.com/moltis-org/moltis/pull/1093) Activity Log 可见性设置 | 1天 | 🟡 中 | 与 #1092 配对审查，用户场景明确 |
| [PR #1098](https://github.com/moltis-org/moltis/pull/1098) 浏览器 null 参数容错 | 1天 | 🟢 低 — 变更范围小 | 快速通道：单文件修改，测试覆盖即可 |
| [PR #1099](https://github.com/moltis-org/moltis/pull/1099) Telegram 流式分离 | <1天 | 🟡 中 | 关联 #1097 验证，建议社区测试 Telegram 通道 |

**维护者关注提醒**:
- **IlyaBizyaev** 作为核心维护者，今日集中关闭 Issue 但未参与 PR 审查，建议协调审查负载
- **容器化 Bug 集群**（#1096, #1095）需基础设施专家介入，可能涉及 Docker/Podman 运行时差异的系统性测试矩阵

---

*日报生成基于 GitHub 公开数据 | 如需深度分析特定模块，可指定子系统进一步拆解*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-06-04

## 1. 今日速览

CoPaw（QwenPaw）今日保持**高活跃度**，24小时内 Issues 更新 49 条（28 新开/活跃，21 关闭）、PR 更新 50 条（29 待合并，21 已合并/关闭），无新版本发布。社区聚焦**上下文压缩稳定性修复**（3个相关 Issue/PR 闭环）、**浏览器自动化可靠性**（CDP 超时与多浏览器兼容）、以及**插件系统初始化**等核心基础设施问题。整体项目健康度良好，维护团队响应迅速，但向量存储膨胀和内存管理类问题呈现长期化趋势，需持续关注。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 今日已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 状态 |
|:---|:---|:---|:---|
| [#4933](https://github.com/agentscope-ai/QwenPaw/pull/4933) | jinliyl | **修复上下文压缩崩溃**：处理 media block 中 `source` 字段为非字典类型（如纯 URL 字符串）导致的 `'str' object has no attribute 'get'` 错误，覆盖 token 计数和 URL 提取双路径 | ✅ 已合并 |
| [#4935](https://github.com/agentscope-ai/QwenPaw/pull/4935) | jinliyl | **文件监控可靠性**：升级 `reme-ai` 至 0.3.1.10，修复 watcher 重启时 stop-event 未重置导致监听失效的问题 | ✅ 已合并 |
| [#4940](https://github.com/agentscope-ai/QwenPaw/pull/4940) | yutai78786 | **集成测试加固**：设置上传大小限制 `QWENPAW_UPLOAD_MAX_SIZE_MB=10`，修复 plugin loader 超时探针的 `httpx.TimeoutException` 捕获 | ✅ 已合并 |
| [#4941](https://github.com/agentscope-ai/QwenPaw/pull/4941) | Leirunlin | **技能市场修复**：提升技能包 ZIP 下载大小上限，直接解决 [#4928](https://github.com/agentscope-ai/QwenPaw/issues/4928) 下载超限报错 | ✅ 已合并 |
| [#4942](https://github.com/agentscope-ai/QwenPaw/pull/4942) | cuiyuebing | 路线图文档更新 | ✅ 已合并 |
| [#4821](https://github.com/agentscope-ai/QwenPaw/pull/4821) | szetohoyan | 飞书渠道群聊会话共享模式（review 后关闭） | ❌ 已关闭 |
| [#4737](https://github.com/agentscope-ai/QwenPaw/pull/4737) | hongxicheng | Telegram 工具守卫交互式审批（review 后关闭） | ❌ 已关闭 |
| [#4810](https://github.com/agentscope-ai/QwenPaw/pull/4810) | saltapp | 控制台 slash 命令技能建议优化（review 后关闭） | ❌ 已关闭 |
| [#4896](https://github.com/agentscope-ai/QwenPaw/pull/4896) / [#4943](https://github.com/agentscope-ai/QwenPaw/pull/4943) / [#4945](https://github.com/agentscope-ai/QwenPaw/pull/4945) | yutai78786 | Agent 作用域 P0 契约测试覆盖（+55 用例），经历三轮迭代 | ✅ [#4945](https://github.com/agentscope-ai/QwenPaw/pull/4945) 待合并 |

**整体推进评估**：今日核心进展在于**上下文压缩稳定性**的系统性修复——从底层数据格式兼容（[#4933](https://github.com/agentscope-ai/QwenPaw/pull/4933)）到集成测试防护（[#4940](https://github.com/agentscope-ai/QwenPaw/pull/4940)），形成完整闭环。ACP 协议扩展（[#4949](https://github.com/agentscope-ai/QwenPaw/pull/4949)）和浏览器隔离（[#4944](https://github.com/agentscope-ai/QwenPaw/pull/4944)）代表架构层面前瞻投入。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues（按评论数排序）

| Issue | 评论 | 状态 | 核心诉求分析 |
|:---|:---|:---|:---|
| [#4919](https://github.com/agentscope-ai/QwenPaw/issues/4919) `browser_use` 启动失败：managed CDP 超时 + 浏览器闪退 | 6 | 🟡 OPEN | **浏览器自动化可靠性**：Windows 环境下 Playwright 与系统浏览器（Chrome/Edge）的 CDP 连接不稳定，用户被迫降级至 npm CLI 兜底。反映跨平台浏览器管控的复杂性 |
| [#3470](https://github.com/agentscope-ai/QwenPaw/issues/3470) 是否有类似 Hermes Agent 的自我进化功能研发计划 | 6 | ✅ CLOSED | **智能体自主性期待**：社区高度关注"自我进化"能力，与 [#3516](https://github.com/agentscope-ai/QwenPaw/issues/3516) 形成重复议题，显示该需求持续性强 |
| [#3854](https://github.com/agentscope-ai/QwenPaw/issues/3854) ChromaDB Rust binding segfault 导致进程崩溃 | 5 | 🟡 OPEN | **数据层稳定性**：Linux 下 Python 3.13 的 ChromaDB 原生绑定 45+ 次段错误，需更安全的默认配置或优雅降级机制 |
| [#3905](https://github.com/agentscope-ai/QwenPaw/issues/3905) Dream agent 记忆管理任务后 MEMORY.md 为空 | 5 | 🟡 OPEN | **记忆系统闭环失效**：梦境优化后长期记忆文件未正常沉淀，可能关联工作目录解析问题（见 [#4888](https://github.com/agentscope-ai/QwenPaw/issues/4888) 已修复的类似问题）|
| [#4924](https://github.com/agentscope-ai/QwenPaw/issues/4924) 上下文压缩失败 | 4 | ✅ CLOSED | **数据格式兼容性**：旧格式 `file block` 中的 `source` 字段类型不一致导致压缩钩子崩溃，已由 [#4933](https://github.com/agentscope-ai/QwenPaw/pull/4933) 修复 |

**诉求洞察**：社区核心焦虑集中在**"稳定性 vs 智能化"的平衡**——用户既期待 Dream agent 等高级记忆功能，又频繁遭遇底层基础设施（浏览器、向量库、文件监控）的可靠性问题。自我进化/Hermes 理念的重复提问表明，社区对 Agent 自主性的期待已超越当前工程实现节奏。

---

## 5. Bug 与稳定性

### 🚨 按严重程度排列

| 级别 | Issue | 现象 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| **P0-崩溃** | [#3854](https://github.com/agentscope-ai/QwenPaw/issues/3854) | ChromaDB Rust binding SIGSEGV，整进程被杀，45+ 次/会话 | 无 | 🟡 待处理 |
| **P0-崩溃** | [#4795](https://github.com/agentscope-ai/QwenPaw/issues/4795) | 向量索引膨胀至 37GB，`memory_search` 卡死/每30分钟崩溃 | 无 | 🟡 待处理 |
| **P1-功能失效** | [#4919](https://github.com/agentscope-ai/QwenPaw/issues/4919) | `browser_use` 完全无法启动（3种模式均失败） | [#4944](https://github.com/agentscope-ai/QwenPaw/pull/4944) | 🟡 待合并 |
| **P1-功能失效** | [#4889](https://github.com/agentscope-ai/QwenPaw/issues/4889) | Tauri 桌面版插件加载器未启动，所有插件操作 503 | [#4900](https://github.com/agentscope-ai/QwenPaw/pull/4900) | 🟡 待合并 |
| **P1-功能失效** | [#4922](https://github.com/agentscope-ai/QwenPaw/issues/4922) | 微信渠道图片读取权限错误后，所有对话永久报错 | 无 | 🟡 待处理 |
| **P1-功能失效** | [#4877](https://github.com/agentscope-ai/QwenPaw/issues/4877) | Custom channel 保存设置时监听停止，端口冲突导致无法恢复 | 无 | 🟡 待处理 |
| **P2-体验降级** | [#4937](https://github.com/agentscope-ai/QwenPaw/issues/4937) | `/compact` 命令忽略模型配置的 `max_input_length`，硬编码 128K | 无 | 🟡 待处理 |
| **P2-体验降级** | [#4781](https://github.com/agentscope-ai/QwenPaw/issues/4781) | `tool_result_pruning` 未阻止单条超大 shell 输出撑爆上下文 | 无 | 🟡 待处理 |
| **P2-体验降级** | [#4928](https://github.com/agentscope-ai/QwenPaw/issues/4928) | 技能市场 ZIP 下载超 5MB 限制报错 | [#4941](https://github.com/agentscope-ai/QwenPaw/pull/4941) | ✅ 已修复 |

**关键趋势**：**向量存储层**（ChromaDB 段错误 + 索引膨胀）和**上下文管理机制**（压缩/剪枝/长度限制）构成当前最突出的系统性风险，两者均涉及数据持久化与资源管控的核心架构。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 信号强度 | 纳入可能性评估 |
|:---|:---|:---|:---|
| **ACP 协议扩展**（命令广播、错误透传、工具参数、Agent/模型元数据、文件链接） | [#4949](https://github.com/agentscope-ai/QwenPaw/pull/4949) | ⭐⭐⭐⭐⭐ | **高** — 已提交 PR，面向 `paw` TUI 客户端生态建设 |
| **记忆蒸馏插件**（title-diffing 引擎，~92% 噪声削减） | [#4171](https://github.com/agentscope-ai/QwenPaw/pull/4171) | ⭐⭐⭐⭐⭐ | **高** — 长期 review 中，解决记忆系统核心痛点 |
| **会话结束自动总结钩子**（Pre-hook Memory Archiving） | [#4640](https://github.com/agentscope-ai/QwenPaw/issues/4640) | ⭐⭐⭐⭐☆ | **中高** — 社区 RFC 形式提出，与现有记忆工具形成闭环 |
| **无损上下文压缩**（DAG-based 摘要 + CJK Token 修复） | [#4551](https://github.com/agentscope-ai/QwenPaw/issues/4551) | ⭐⭐⭐⭐☆ | **中** — 详细技术方案，但实现复杂度高 |
| **Hermes 式自我进化** | [#3470](https://github.com/agentscope-ai/QwenPaw/issues/3470), [#3516](https://github.com/agentscope-ai/QwenPaw/issues/3516) | ⭐⭐⭐⭐☆ | **中低** — 需求强烈但概念模糊，需产品化定义 |
| **mem0 集成支持** | [#4208](https://github.com/agentscope-ai/QwenPaw/issues/4208) | ⭐⭐⭐☆☆ | **中** — 外部记忆框架集成，需架构适配 |
| **Auto-Memory 排除心跳/定时任务** | [#3944](https://github.com/agentscope-ai/QwenPaw/issues/3944) | ⭐⭐⭐☆☆ | **高** — 已关闭，可能已纳入实现 |
| **Tauri 桌面自动更新** | [#4669](https://github.com/agentscope-ai/QwenPaw/pull/4669) | ⭐⭐⭐⭐☆ | **中高** — 桌面端分发基础设施 |
| **可定制 slash 命令菜单** | [#4637](https://github.com/agentscope-ai/QwenPaw/pull/4637) | ⭐⭐⭐☆☆ | **中** — 体验优化，降低命令发现成本 |

---

## 7. 用户反馈摘要

### 😤 核心痛点

| 场景 | 原声引用 | 关联 Issue |
|:---|:---|:---|
| **浏览器自动化"玄学"问题** | "三种尝试均失败，最后只能通过 npm 版 playwright-cli 兜底" | [#4919](https://github.com/agentscope-ai/QwenPaw/issues/4919) |
| **记忆系统"看似工作实则失效"** | "MEMORY.md 仅保留空白模板分类标题...记忆沉淀更新流程未正常闭环生效" | [#3905](https://github.com/agentscope-ai/QwenPaw/issues/3905) |
| **向量库"沉默的膨胀"** | "正常使用 3 个月...37GB...每 30 分钟左右崩溃一次，延续了约 2 天" | [#4795](https://github.com/agentscope-ai/QwenPaw/issues/4795) |
| **插件系统"永远未就绪"** | "Plugin loader is not ready yet. Try again shortly." | [#4889](https://github.com/agentscope-ai/QwenPaw/issues/4889) |
| **错误状态的"传染性"** | "清空会话、AI 修复都不能解决...现在是不管怎么问都报这个错" | [#4922](https://github.com/agentscope-ai/QwenPaw/issues/4922) |

### 😊 正向反馈

- **上下文压缩功能被频繁使用**：多个 Issue 表明用户依赖该功能进行长期对话，只是稳定性有待提升
- **多渠道覆盖认可**：微信、飞书、Telegram 等渠道均有活跃 PR 贡献，显示社区参与度高

### 💡 使用模式洞察

- **"代码模式"跨盘需求**（[#4876](https://github.com/agentscope-ai/QwenPaw/issues/4876)）：Windows 开发者项目分散在多硬盘，当前限制在 C 盘不符合实际工作流
- **子任务可观测性缺失**（[#4923](https://github.com/agentscope-ai/QwenPaw/issues/4923)）：`spawn_subagent` 启动的任务无法边界查看进展，调试困难

---

## 8. 待处理积压

### ⚠️ 长期未响应/需维护者重点关注

| Issue/PR | 创建时间 | 最后更新 | 风险说明 |
|:---|:---|:---|:---|
| [#3854](https://github.com/agentscope-ai/QwenPaw/issues/3854) ChromaDB Rust binding segfault | 2026-04-27 | 2026-06-03 | **38天未闭环**，核心数据层稳定性，Python 3.13 兼容性问题 |
| [#4795](https://github.com/agentscope-ai/QwenPaw/issues/4795) 向量索引 37GB 膨胀 | 2026-05-29 | 2026-06-03 | **6天**，生产环境可用性威胁，需容量管理策略 |
| [#3905](https://github.com/agentscope-ai/QwenPaw/issues/3905) Dream agent 记忆空洞 | 2026-04-28 | 2026-06-03 | **37天**，与已修复的 [#4888](https://github.com/agentscope-ai/QwenPaw/issues/4888) 可能同源，需确认是否完全解决 |
| [#4171](https://github.com/agentscope-ai/QwenPaw/pull/4171) 记忆蒸馏插件 | 2026-05-10 | 2026-06-03 | **24天 review 中**，高价值功能，建议明确合并时间表 |
| [#4710](https://github.com/agentscope-ai/QwenPaw/issues/4710) 向量存储时间戳不一致 | 2026-05-27 | 2026-06-03 | **8天**，时区处理隐患，可能导致记忆检索排序错误 |
| [#4640](https://github.com/agentscope-ai/QwenPaw/issues/4640) 会话结束自动总结 RFC | 2026-05-23 | 2026-06-03 | **12天**，社区提案，需官方产品方向回应 |

---

*日报生成时间：2026-06-04 | 数据来源：CoPaw (github.com/agentscope-ai/CoPaw) GitHub 活动*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 | 2026-06-04

> **项目**: [qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)  
> **日期**: 2026-06-04  
> **分析师**: AI 智能体与开源项目分析师

---

## 1. 今日速览

今日 ZeptoClaw 项目呈现**高度自动化但零人工活跃**的状态。过去 24 小时内，项目未产生任何 Issues 活动，亦无人工发起的 PR 或代码合并。全部 16 条更新均为 Dependabot 自动生成的依赖升级 PR，覆盖 Rust 核心依赖、JavaScript 前端工具链、GitHub Actions CI/CD 流程及 Docker 基础镜像。这表明项目基础设施维护机制运转正常，但核心开发团队处于静默期，未推进功能性迭代或社区互动。整体健康度评估：**依赖维护自动化程度高，但代码演进与社区活跃度处于停滞状态**。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

**今日无合并或关闭的 PR**

全部 16 条 PR 均为待合并状态（OPEN），无一获得审阅或合并。项目今日在功能层面**零推进**，核心代码库未发生任何变更。

| 类别 | 数量 | 状态 |
|:---|:---|:---|
| 功能/特性 PR | 0 | - |
| Bug 修复 PR | 0 | - |
| 依赖升级 PR | 16 | 全部待合并 |
| 文档/基础设施 PR | 0 | - |

**依赖升级全景**（按技术栈分类）：

| 技术栈 | PR 数量 | 涉及关键依赖 |
|:---|:---|:---|
| **Rust 核心** | 5 | tokio, serde_json, tower-http, scraper, rpassword |
| **JavaScript/前端** | 5 | React, Astro, TailwindCSS, @types/node |
| **GitHub Actions** | 4 | docker/login-action, docker/build-push-action, docker/metadata-action, taiki-e/install-action, codecov/codecov-action |
| **Docker** | 1 | Rust 基础镜像 (1.95 → 1.96) |
| **CI 工具** | 1 | taiki-e/install-action |

> 🔗 完整 PR 列表：[ZeptoClaw Pull Requests](https://github.com/qhkm/zeptoclaw/pulls)

---

## 4. 社区热点

**今日无社区热点**

| 指标 | 数值 | 分析 |
|:---|:---|:---|
| 最高 👍 数 PR | 0 | 全部 16 条 PR 零点赞 |
| 最高评论数 PR | undefined/0 | 全部 PR 无评论 |
| 人工参与 PR | 0 | 100% 为 Dependabot 自动生成 |

**深层信号解读**：

- **零人工互动**表明：① 维护者未活跃审阅；② 社区贡献者未参与依赖升级决策；③ 项目可能处于维护模式或团队资源转移
- Dependabot PR 的"零评论零点赞"模式，反映出自动化依赖管理已成为项目常态，但缺乏人工把关机制，存在**批量合并未经审阅**的潜在风险

> 示例 PR：[#628 docker/login-action 升级](https://github.com/qhkm/zeptoclaw/pull/628) | [#623 tokio 安全补丁](https://github.com/qhkm/zeptoclaw/pull/623)

---

## 5. Bug 与稳定性

**今日无新报告 Bug**

但需关注依赖升级中的**安全与稳定性修复**：

| 优先级 | 依赖 | PR | 修复内容 | 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | tokio | [#623](https://github.com/qhkm/zeptoclaw/pull/623) | v1.52.1 → v1.52.3，包含安全修复（May 8th, 2026 发布） | 待合并 |
| 🟡 中 | serde_json | [#627](https://github.com/qhkm/zeptoclaw/pull/627) | v1.0.149 → v1.0.150，拒绝非字符串枚举对象键（潜在安全加固） | 待合并 |
| 🟡 中 | rpassword | [#625](https://github.com/qhkm/zeptoclaw/pull/625) | v7.4.0 → v7.5.2，Unicode 解析修复 | 待合并 |
| 🟢 低 | 其余 13 项 | - | 常规版本迭代 | 待合并 |

**风险提示**：tokio v1.52.3 明确标注为安全修复版本，延迟合并可能使生产环境暴露于已知漏洞。

---

## 6. 功能请求与路线图信号

**今日无新功能请求**

从现有 PR 推断的**技术方向信号**：

| 信号 | 证据 | 解读 |
|:---|:---|:---|
| 多语言栈持续维护 | Rust + JavaScript 依赖并行升级 | 项目保持"Rust 后端 + JS 前端"架构，未发生技术栈迁移 |
| 文档站点活跃 | 2 个 Astro 升级 PR（`/landing/zeptoclaw/docs`, `/landing/r8r/docs`） | 存在双文档站点（ZeptoClaw 主站 + r8r 子项目），文档基础设施持续投入 |
| 容器化优先 | Docker 基础镜像紧跟 Rust 最新稳定版 | 发布流程依赖容器化，重视构建环境一致性 |
| 安全合规意识 | codecov-action、docker 相关 action 及时升级 | CI/CD 安全策略较为规范 |

**缺失信号**：无 AI Agent 核心功能 PR、无 LLM 集成更新、无协议/接口变更，表明项目可能处于**功能冻结期**。

---

## 7. 用户反馈摘要

**今日无用户反馈数据**

Issues 零活动导致无法提取真实用户痛点。结合历史模式推断：

| 维度 | 状态 | 说明 |
|:---|:---|:---|
| 用户活跃度 | ⚠️ 低 | 无新 Issue 报告，可能用户基数小或问题已通过其他渠道解决 |
| 用户满意度 | ❓ 未知 | 缺乏正面/负面反馈数据 |
| 使用场景洞察 | ❌ 缺失 | 无法判断用户实际部署场景（边缘计算、云端、个人助手等） |

**建议**：项目需建立用户反馈收集机制（如 Discussions、Discord、或内置遥测），当前"黑盒"状态不利于产品演进。

---

## 8. 待处理积压

### 8.1 紧急待审阅：安全相关 PR

| PR | 依赖 | 延迟风险 | 链接 |
|:---|:---|:---|:---|
| #623 | tokio 1.52.3（安全修复） | 已知漏洞未修复 | [查看](https://github.com/qhkm/zeptoclaw/pull/623) |
| #625 | rpassword 7.5.2（Unicode 解析修复） | 密码输入异常 | [查看](https://github.com/qhkm/zeptoclaw/pull/625) |
| #627 | serde_json 1.0.150（输入验证加固） | 反序列化安全风险 | [查看](https://github.com/qhkm/zeptoclaw/pull/627) |

### 8.2 批量依赖债务

- **16 条 Dependabot PR 全部待合并**，建议维护者：
  1. 优先合并安全修复类（tokio, serde_json, rpassword）
  2. 批量审阅 GitHub Actions 升级（影响 CI 稳定性）
  3. 评估 Rust 1.96 镜像升级是否需同步调整 MSRV（最低支持 Rust 版本）

### 8.3 长期结构性关注

| 问题 | 持续时间 | 建议行动 |
|:---|:---|:---|
| 核心功能开发停滞 | 至少 24 小时（可能更长） | 维护者需公开项目状态（维护模式/资源重组/重大重构中） |
| 社区互动缺失 | 持续 | 开启 GitHub Discussions 或更新 README 说明贡献指南 |
| 单点维护风险 | 持续 | 仅 Dependabot 活跃，无人工维护者可见，需关注 Bus Factor |

---

## 附录：今日全部 PR 索引

| # | 类型 | 标题 | 链接 |
|:---|:---|:---|:---|
| 628 | GitHub Actions | docker/login-action 4.1.0 → 4.2.0 | [PR #628](https://github.com/qhkm/zeptoclaw/pull/628) |
| 627 | Rust | serde_json 1.0.149 → 1.0.150 | [PR #627](https://github.com/qhkm/zeptoclaw/pull/627) |
| 626 | GitHub Actions | taiki-e/install-action 2.78.2 → 2.79.7 | [PR #626](https://github.com/qhkm/zeptoclaw/pull/626) |
| 625 | Rust | rpassword 7.4.0 → 7.5.2 | [PR #625](https://github.com/qhkm/zeptoclaw/pull/625) |
| 624 | GitHub Actions | codecov/codecov-action 6.0.0 → 6.0.1 | [PR #624](https://github.com/qhkm/zeptoclaw/pull/624) |
| 623 | Rust | tokio 1.52.1 → 1.52.3 | [PR #623](https://github.com/qhkm/zeptoclaw/pull/623) |
| 622 | GitHub Actions | docker/build-push-action 7.1.0 → 7.2.0 | [PR #622](https://github.com/qhkm/zeptoclaw/pull/622) |
| 621 | JavaScript | @types/node 25.3.5 → 25.9.1 (/panel) | [PR #621](https://github.com/qhkm/zeptoclaw/pull/621) |
| 620 | Rust | scraper 0.26.0 → 0.27.0 | [PR #620](https://github.com/qhkm/zeptoclaw/pull/620) |
| 619 | JavaScript | tailwindcss 4.2.2 → 4.3.0 (/panel) | [PR #619](https://github.com/qhkm/zeptoclaw/pull/619) |
| 618 | GitHub Actions | docker/metadata-action 6.0.0 → 6.1.0 | [PR #618](https://github.com/qhkm/zeptoclaw/pull/618) |
| 617 | Rust | tower-http 0.6.10 → 0.6.11 | [PR #617](https://github.com/qhkm/zeptoclaw/pull/617) |
| 616 | JavaScript | react 19.2.4 → 19.2.6 + @types/react (/panel) | [PR #616](https://github.com/qhkm/zeptoclaw/pull/616) |
| 615 | JavaScript | astro 6.3.1 → 6.3.7 (/landing/zeptoclaw/docs) | [PR #615](https://github.com/qhkm/zeptoclaw/pull/615) |
| 614 | JavaScript | astro 6.3.3 → 6.3.7 (/landing/r8r/docs) | [PR #614](https://github.com/qhkm/zeptoclaw/pull/614) |
| 613 | Docker | rust 1.95-slim-trixie → 1.96-slim-trixie | [PR #613](https://github.com/qhkm/zeptoclaw/pull/613) |

---

> **明日关注重点**：tokio 安全修复 PR #623 是否获得合并；维护者是否出现处理积压 PR；是否有社区 Issue 或人工 PR 打破当前静默状态。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-06-04

## 1. 今日速览

ZeroClaw 今日维持**高活跃度运转**：24小时内50条Issues更新（26条新开/活跃，24条关闭）、50条PR更新（43条待合并，7条已合并/关闭），无新版本发布。社区聚焦**安全架构升级**（OIDC/可插拔安全接口）、**v0.8.0发布冲刺**（配置系统稳定化、工具调用解析器）以及**运行时稳定性**（RPC会话管理、provider修复）。值得注意的是，今日出现两个重复提交的"Session branching"功能请求（#7167/#7168），反映用户对对话管理功能的迫切需求；同时安全相关追踪Issue #7141/#7142的发布标志着v0.9.0安全架构重构的正式启动。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 今日已合并/关闭的关键PR

| PR | 作者 | 说明 | 链接 |
|:---|:---|:---|:---|
| **#7166** | JordanTheJet | **修复zerocode快捷启动热键冲突**：agent名称输入框误拦截`e/t/c/d`等热键字符的问题 | [PR #7166](https://github.com/zeroclaw-labs/zeroclaw/pull/7166) |
| **#7172** | tidux | **修复llamacpp provider的wire_api配置**：`wire_api = "responses"`设置被忽略，始终走`/chat/completions`路径 | [PR #7172](https://github.com/zeroclaw-labs/zeroclaw/pull/7172) |

### 配套关闭的关联Issue（今日完成闭环）

| Issue | 说明 | 链接 |
|:---|:---|:---|
| **#6123** [18评论] | **Fresh install默认模型配置Bug** — 新安装后`default_model`解析失败导致agent无法启动，今日正式关闭 | [Issue #6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) |
| **#5722** [6评论] | **Shell沙箱配置阻断Python skill模式** — v0.6.9默认沙箱过度限制，影响InvestorClaw等金融合规skill运行 | [Issue #5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) |
| **#6246** [6评论] | **WhatsApp Web协议升级后消息流中断** — 2026-04-24服务端协议变更导致配对成功但消息不流通 | [Issue #6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246) |
| **#6210** [5评论] | **SkillForge自动生成TOML包含非schema字段** — `source/owner/language`等字段污染`[skill]`块 | [Issue #6210](https://github.com/zeroclaw-labs/zeroclaw/issues/6210) |
| **#6207** [4评论] | **WebSocket网关绕过ApprovalManager** — 监管模式下工具审批不在Web UI显示，安全关键修复 | [Issue #6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207) |
| **#6269** [4评论] | **Context compressor丢失reasoning_content** — DeepSeek等provider的推理内容在压缩后被丢弃 | [Issue #6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269) |
| **#5837** [4评论] | **ACP协议会话取消支持** — 补齐网关`POST /api/sessions/{id}/abort`的ACP等效能力 | [Issue #5837](https://github.com/zeroclaw-labs/zeroclaw/issues/5837) |
| **#6128** [4评论] | **SkillMeta添加`deny_unknown_fields`** — 防止拼写错误字段被静默丢弃 | [Issue #6128](https://github.com/zeroclaw-labs/zeroclaw/issues/6128) |

**整体推进评估**：今日关闭的8个Issue中，**5个为P1优先级**（含2个S1阻断级），覆盖安装体验、安全合规、核心协议兼容性，表明项目正加速清理技术债务，为v0.8.0稳定版铺路。

---

## 4. 社区热点

### 最高讨论热度

| 排名 | Issue/PR | 评论数 | 核心诉求 | 链接 |
|:---|:---|:---:|:---|:---|
| 🔥1 | **#6123** default_model fresh install bug | **18** | 新用户 onboarding 体验是社区最大痛点，LXC容器+远程Ollama的典型自托管场景配置易错 | [Issue #6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) |
| 🔥2 | **#5722** Shell sandbox阻断Python skill | **6** | 企业级skill开发（尤其金融合规场景）需要更精细的sandbox策略，而非全有或全无 | [Issue #5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) |
| 🔥3 | **#6246** WhatsApp Web协议升级 | **6** | 第三方IM渠道依赖上游协议逆向，社区需要更透明的breaking change预警机制 | [Issue #6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246) |
| 🔥4 | **#6210** SkillForge非schema字段 | **5** | 代码生成与schema校验的脱节，反映skill生态工具链成熟度不足 | [Issue #6210](https://github.com/zeroclaw-labs/zeroclaw/issues/6210) |

### 今日新启动的架构级追踪

| Issue | 说明 | 链接 |
|:---|:---|:---|
| **#7141** | **OIDC Authentication Provider for RPC/WSS** — v0.9.0安全架构第一块拼图，企业SSO集成前提 | [Issue #7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) |
| **#7142** | **可插拔安全provider接口** — 将内部安全执行层抽象为trait，支持自定义审计/响应策略 | [Issue #7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) |

**诉求分析**：社区正从"个人自托管工具"向"企业级AI Agent平台"演进，安全认证、合规审计、多租户隔离成为高频诉求，与项目v0.9.0安全重构路线图高度吻合。

---

## 5. Bug 与稳定性

### 今日报告/活跃的Bug（按严重程度排序）

| 优先级 | Issue | 严重度 | 状态 | 说明 | Fix PR | 链接 |
|:---|:---|:---:|:---|:---|:---|:---|
| **P1** | **#7179** RPC会话10分钟空闲回收 | **S1** | 🔴 OPEN | Chat/Code会话无操作600秒后强制回收，用户工作流被中断 | 无 | [Issue #7179](https://github.com/zeroclaw-labs/zeroclaw/issues/7179) |
| **P1** | **#7173** quickstart webhook缺少port配置 | **S1** | 🔴 OPEN | 创建agent后启动失败：`missing field 'port'` | 无 | [Issue #7173](https://github.com/zeroclaw-labs/zeroclaw/issues/7173) |
| **P1** | **#7112** v0.8.0发布队列与阻断项 | **Tracker** | 🔴 OPEN | 配置系统、工具调用解析器Stable-tier晋升协调 | #7160等 | [Issue #7112](https://github.com/zeroclaw-labs/zeroclaw/issues/7112) |
| **P3** | **#6702** Dashboard气泡空白行累积 | **S3** | 🟡 OPEN | 工具调用卡片每增加一个，助手消息气泡多一行空白 | 无 | [Issue #6702](https://github.com/zeroclaw-labs/zeroclaw/issues/6702) |
| **—** | **#7133** path-policy对`~`的误报 | **S2** | 🔴 OPEN | 引号/ heredoc中的`~`被误判为路径参数 | 无 | [Issue #7133](https://github.com/zeroclaw-labs/zeroclaw/issues/7133) |

### 今日已修复的关键Bug

| Issue | 修复内容 | 验证状态 |
|:---|:---|:---|
| #6123 | 远程Ollama场景下`default_model`解析 | ✅ 已关闭 |
| #6207 | WebSocket网关ApprovalManager绕过 | ✅ 已关闭 |
| #6269 | DeepSeek `reasoning_content`压缩丢失 | ✅ 已关闭 |
| #5722 | Shell sandbox过度限制 | ✅ 已关闭 |

---

## 6. 功能请求与路线图信号

### 用户提出的新功能

| Issue | 目标版本 | 纳入可能性 | 说明 | 链接 |
|:---|:---|:---:|:---|:---|
| **#7168/#7167** Session branching（会话分支） | — | ⭐⭐⭐⭐⭐ | **重复提交两次**，用户强烈需要"what-if"探索能力；实现复杂度中等，依赖会话存储抽象 | [Issue #7168](https://github.com/zeroclaw-labs/zeroclaw/issues/7168) |
| **#7175** 类型级联删除（typed delete-with-cascade） | v0.8.x | ⭐⭐⭐⭐⭐ | V3配置系统的必要补齐，已有详细设计，作者singlerider为核心维护者 | [Issue #7175](https://github.com/zeroclaw-labs/zeroclaw/issues/7175) |
| **#7141** OIDC认证 | v0.9.0 | ⭐⭐⭐⭐⭐ | **官方追踪Issue**，企业采用 blocker | [Issue #7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) |
| **#7142** 可插拔安全接口 | v0.9.0 | ⭐⭐⭐⭐⭐ | **官方追踪Issue**，与#7141配套 | [Issue #7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) |

### 已有关联PR的功能

| PR | 对应功能请求 | 状态 | 链接 |
|:---|:---|:---|:---|
| **#7178** per-alias模型provider故障转移 | #7175配置系统 | 🟡 待合并 | [PR #7178](https://github.com/zeroclaw-labs/zeroclaw/pull/7178) |
| **#7176** StageX容器musl静态链接 | 自托管部署 | 🟡 待合并 | [PR #7176](https://github.com/zeroclaw-labs/zeroclaw/pull/7176) |
| **#7136** Kilo AI Gateway provider | 企业网关集成 | 🟡 待合并 | [PR #7136](https://github.com/zeroclaw-labs/zeroclaw/pull/7136) |
| **#7067** Agent评估框架Phase 0 | 质量保障基础设施 | 🟡 待合并 | [PR #7067](https://github.com/zeroclaw-labs/zeroclaw/pull/7067) |

---

## 7. 用户反馈摘要

### 🔴 核心痛点

| 场景 | 反馈来源 | 具体表现 |
|:---|:---|:---|
| **新用户onboarding脆弱** | #6123, #7173 | 远程Ollama配置、webhook端口选择等"第一个小时"体验存在多个单点失败 |
| **会话生命周期管理粗糙** | #7179 | 10分钟强制回收无预警，长时编程/分析任务中断 |
| **安全策略与易用性失衡** | #5722, #5697 | `allow_scripts=true`仍被阻断、sandbox规则不透明，企业skill开发受阻 |
| **第三方渠道脆弱性** | #6246 | WhatsApp等IM渠道无SLA保障，协议变更后社区被动应对 |

### 🟡 改进期望

| 主题 | 来源 | 诉求 |
|:---|:---|:---|
| **对话历史管理** | #7167/#7168 | "像Git分支一样管理对话探索"，避免重复创建agent |
| **配置系统可维护性** | #7175, #7160 | 级联删除、部分加载、错误隔离，大规模部署必需 |
| **企业身份集成** | #7141 | OIDC是"能否进入PoC"的硬性门槛 |

### 🟢 认可方向

- SkillForge自动生成工具链（#6210虽为bug但反映使用深度）
- 多通道回复 pacing 控制（#6389，9通道覆盖）
- 评估框架（#7067，确定性离线replay获技术用户好评）

---

## 8. 待处理积压

### 需要维护者关注的高风险项

| Issue/PR | 天数 | 风险 | 行动建议 | 链接 |
|:---|:---:|:---|:---|:---|
| **#7112** v0.8.0发布队列 | 2天 | 🔴 **发布阻断** | 需维护者Audacity88确认#7160配置弹性加载是否满足Stable-tier标准 | [Issue #7112](https://github.com/zeroclaw-labs/zeroclaw/issues/7112) |
| **#7066** 移除default-model-provider credential fallback | 3天 | 🔴 **兼容性风险** | 大型PR，影响所有channel的认证解析，需第二维护者review | [PR #7066](https://github.com/zeroclaw-labs/zeroclaw/pull/7066) |
| **#6988** Bearer token轮换不生效 | 7天 | 🔴 **安全漏洞** | 设备删除/轮换后旧token仍有效，需优先合并 | [PR #6988](https://github.com/zeroclaw-labs/zeroclaw/pull/6988) |
| **#6389** 9通道per-recipient pacing | 30天 | 🟡 **功能膨胀** | 已积累大量代码，需决策是否拆分合并 | [PR #6389](https://github.com/zeroclaw-labs/zeroclaw/pull/6389) |
| **#5987** Nix flake支持 | 43天 | 🟡 **生态扩展** | 社区贡献的Nix支持，需确认维护承诺 | [PR #5987](https://github.com/zeroclaw-labs/zeroclaw/pull/5987) |

### 重复/需清理项

- **#7167 与 #7168**：同一作者`sentine-nnet`在2分钟内重复提交"Session branching"，建议关闭#7167保留#7168

---

*日报生成时间：2026-06-04 | 数据来源：ZeroClaw GitHub 仓库*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*