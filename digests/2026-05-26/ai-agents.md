# OpenClaw 生态日报 2026-05-26

> Issues: 477 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-26 00:24 UTC

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

# OpenClaw 项目动态日报 | 2026-05-26

---

## 1. 今日速览

OpenClaw 今日维持**极高活跃度**：24小时内 Issues 处理量达 477 条（关闭 285 / 活跃 192），PR 流量 500 条（待合并 270 / 已合并关闭 230），**无新版本发布**。社区聚焦于**会话状态稳定性**与**多通道可靠性**两大主题，Codex 运行时架构调整、Telegram/iMessage 通道修复、以及嵌入式会话竞态条件成为核心战场。值得注意的是，多个高优先级 Bug 已有关键 PR 进入"ready for maintainer look"状态，但待合并 PR 积压（270 条）显示代码审查带宽仍是瓶颈。

---

## 2. 版本发布

**无新版本发布**（v2026.5.22 仍为最新稳定版，v2026.5.24-beta.1 为最新测试版）

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#86678](https://github.com/openclaw/openclaw/pull/86678) | steipete | **性能优化**：将不可变会话存储快照克隆移出写路径，降低网关 CPU 热点负载；延迟重建快照至下次读取 | 性能回归相关 |
| [#86591](https://github.com/openclaw/openclaw/pull/86591) | brokemac79 | **开发者体验**：修复插件打包失败时的错误引导，避免误导用户执行无效的 `doctor --fix` | [#80490](https://github.com/openclaw/openclaw/issues/80490) |
| [#86682](https://github.com/openclaw/openclaw/pull/86682) | vincentkoc | **可观测性**：补全 OTel/Prometheus 遥测信号暴露，修复 OTLP 端点路径解析，新增模型故障转移、工具执行阻塞等告警指标 | 运维监控缺口 |
| [#86552](https://github.com/openclaw/openclaw/pull/86552) | TimToxopeus | **性能优化**：模型解析时复用 manifest 元数据，消除重复加载开销 | 配置解析性能 |
| [#86472](https://github.com/openclaw/openclaw/pull/86472) | SebTardif | **可靠性**：修复心跳尾部上下文修剪，保留有意义的中间令牌告警 | 心跳噪音问题 |
| [#86291](https://github.com/openclaw/openclaw/pull/86291) | amknight | **工程健康**：恢复 deadcode 未使用文件白名单，修复 CI 误报 | 基础设施 |

### 架构级推进

- **PR [#85341](https://github.com/openclaw/openclaw/pull/85341)**（steipete，XL 级，待合并）：**OpenClaw 运行时内部化重构** — 移除旧 Pi 形代理/运行时架构，将功能重新集成为 OpenClaw 自有核心、插件和 SDK 表面。这是项目**结构性去依赖**的关键一步，影响所有通道、LLM 任务、内存核心等 40+ 扩展点，标记为 `merge-risk: 🚨 compatibility` + `merge-risk: 🚨 auth-provider` + `merge-risk: 🚨 security-boundary`。

---

## 4. 社区热点

### 讨论最活跃的 Issues（评论数 TOP 5）

| # | Issue | 评论 | 核心诉求 | 状态 |
|:---|:---|:---:|:---|:---|
| [#80319](https://github.com/openclaw/openclaw/issues/80319) | QA tool-defaults suite conflates Codex-native tools with OpenClaw dynamic tool parity | 17 | **Codex 运行时兼容性验证框架的准确性争议**：原报告过度声称 Codex 丢弃计划工具调用，经澄清为 QA 夹具/模拟提供程序问题，非广泛运行时故障。社区需要明确的工具对等性测试契约。 | 🔴 OPEN |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | [P1] Subagent completion silently lost — no retry, no notification, no auto-restart on timeout | 17 | **子代理编排可靠性**：E31/E42/E45 等多错误码下，子代理结果静默丢失，无重试、无通知、无超时自动重启。直接影响多步骤工作流可用性。 | 🔴 OPEN，标记 `clawsweeper:no-new-fix-pr` |
| [#68596](https://github.com/openclaw/openclaw/issues/68596) | [P2] Configurable streaming watchdog timeout threshold | 13 | **长推理模型适配**：kimi-k2.5、DeepSeek-R1 等模型的扩展思考导致 30 秒流式看门狗频繁误触发，需可配置阈值。👍 8 为今日最高。 | 🔴 OPEN |
| [#84038](https://github.com/openclaw/openclaw/issues/84038) | [P1] `doctor --fix` silently migrates intentional openai-codex/ config to openai/, breaking PI+OAuth runtime | 12 | **配置迁移破坏性变更**：`doctor --fix` 自动迁移配置导致 PI+OAuth 运行时断裂，并引发 3-4 倍 Token 膨胀。用户明确标记为回归。 | 🔴 OPEN，有 `clawsweeper:linked-pr-open` |
| [#18160](https://github.com/openclaw/openclaw/issues/18160) | [P2] Direct Exec Mode for Cron Jobs | 12 | **Cron 执行效率**：当前 Cron 强制 `agentTurn` LLM 解释，增加延迟、成本和可靠性风险，请求直接执行模式绕过 LLM。👍 9。 | 🔴 OPEN |

### 热点分析

- **"静默丢失"模式**（#44925, #80520, #85953, #84945）构成今日最突出的用户痛点集群，涉及子代理、Telegram 消息、会话收益、LLM 空闲超时等多场景，指向**错误传播与可观测性架构**的系统性改进需求。
- **Codex 运行时**处于信任重建期：#80319 的"过度声称→澄清"过程显示社区对 Codex 相关缺陷报告的高度敏感，PR #80936 提供了 beta.5 零未知数的信心证明。

---

## 5. Bug 与稳定性

### P1 严重级别（按影响排序）

| # | Issue | 影响域 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| [#86613](https://github.com/openclaw/openclaw/issues/86613) | Gateway accumulates >12K read-only FDs on workspace memory/**; memory_search tool leaks one FD per .md file | **资源泄漏/可用性** | 🔴 OPEN，**有确定性复现** | 无 |
| [#86599](https://github.com/openclaw/openclaw/issues/86599) | Local model provider calls block gateway event loop on Windows beta; trivial infer ~4 minutes | **Windows/性能** | 🔴 OPEN，**Beta release blocker** | 无 |
| [#86214](https://github.com/openclaw/openclaw/issues/86214) | Codex app-server closes mid-turn during image/tool requests with large logs_2.sqlite | **数据丢失/会话中断** | 🔴 OPEN | 无 |
| [#85953](https://github.com/openclaw/openclaw/issues/85953) | sessions_yield leaves parent session transcript lock held, subagent callback timeout | **会话死锁** | 🔴 OPEN | 无 |
| [#84038](https://github.com/openclaw/openclaw/issues/84038) | doctor --fix breaks PI+OAuth runtime, 3-4x token inflation | **配置回归/成本** | 🔴 OPEN | 有 `linked-pr-open` |
| [#80520](https://github.com/openclaw/openclaw/issues/80520) | Telegram messages silently dropped, no sendMessage logged | **消息投递** | 🔴 OPEN | 无 |
| [#85913](https://github.com/openclaw/openclaw/issues/85913) | EmbeddedAttemptSessionTakeoverError: heartbeat vs channel race on same session file | **竞态条件** | 🔴 OPEN | **PR [#86067](https://github.com/openclaw/openclaw/pull/86067)** 待合并 |
| [#83959](https://github.com/openclaw/openclaw/issues/83959) | Codex app-server startup retries exhaust before replacement ready | **启动可用性** | 🔴 OPEN | 无 |

### 今日已关闭的关键 Bug

| # | Issue | 关闭原因 |
|:---|:---|:---|
| [#85999](https://github.com/openclaw/openclaw/issues/85999) | Gateway pre-warm blocks event loop ~60s on startup, breaks channel handshakes | **已修复**（2026.5.22 回归，快速关闭） |
| [#68944](https://github.com/openclaw/openclaw/issues/68944) | CLI commands hang at WebSocket gateway handshake | **已修复** |
| [#85306](https://github.com/openclaw/openclaw/issues/85306) | EmbeddedAttemptSessionTakeoverError on single Telegram direct turn | **已修复** |
| [#85240](https://github.com/openclaw/openclaw/issues/85240) | **[P0 Security]** Cross-user privacy leakage via semantic recall without sender_id isolation | **已修复** ⚠️ 安全修复 |
| [#85120](https://github.com/openclaw/openclaw/issues/85120) | in-band `openclaw update` on macOS LaunchAgent stops self-supervising gateway | **已修复** |

---

## 6. 功能请求与路线图信号

| # | 功能请求 | 热度 | 纳入信号 | 判断 |
|:---|:---|:---:|:---|:---|
| [#68596](https://github.com/openclaw/openclaw/issues/68596) | 可配置流式看门狗超时阈值 | 👍 8 | 无专门 PR，但架构上属于运行时配置扩展 | **高概率纳入**：长推理模型适配为行业共性需求 |
| [#18160](https://github.com/openclaw/openclaw/issues/18160) | Cron 直接执行模式（绕过 agentTurn） | 👍 9 | 无专门 PR，标记 `needs-product-decision` | **需产品决策**：涉及安全边界与执行模型变更 |
| [#27445](https://github.com/openclaw/openclaw/issues/27445) | `announceTarget` 子代理完成路由选项 | 👍 5 | 无专门 PR | **中等概率**：多代理编排为战略方向 |
| [#86169](https://github.com/openclaw/openclaw/issues/86169) | 小米 MiMo Token Plan 提供商支持 | 👍 1 | 无 PR | **低概率短期**：`off-meta tidepool` 评级 |
| [#79904](https://github.com/openclaw/openclaw/issues/79904) | 游标式 SQLite 转录读取 API | 👍 1 | 有活跃重构 #78595 | **依赖基础设施**：SQLite 运行时重构完成后自然解锁 |
| [#86670](https://github.com/openclaw/openclaw/pull/86670) | **新增 Eden AI 提供商插件**（PR） | — | 待合并，标记 `waiting on author` | **高概率纳入**：349 模型/21 供应商的聚合网关，补全提供商版图 |

### 路线图级 PR

- **PR [#86165](https://github.com/openclaw/openclaw/pull/86165)**：Channel Broker Phase 4 — 统一 Telegram/Discord/Slack/WhatsApp/Signal/iMessage 等 6+ 通道的维护负担，将共享语义（会话、白名单、路由、/verbose、静默模式）抽象为单一契约。**这是降低通道碎片化、减少回归的关键基础设施**，XL 级，当前状态 `⏳ waiting on author`。

---

## 7. 用户反馈摘要

### 核心痛点

| 主题 | 典型反馈 | 来源 |
|:---|:---|:---|
| **"静默失败"不可接受** | "LLM idle timeout error silently dropped when agentRunStarted is true" — 用户看不到错误，响应突然停止 | [#84945](https://github.com/openclaw/openclaw/issues/84945) |
| **配置迁移的信任危机** | "doctor --fix silently migrates intentional config... breaking runtime" — 自动化工具破坏显式配置意图 | [#84038](https://github.com/openclaw/openclaw/issues/84038) |
| **Windows 二等公民体验** | "trivial infer run takes ~4 minutes" / "CLI commands hang" — 事件循环阻塞、栈大小不足 | [#86599](https://github.com/openclaw/openclaw/issues/86599), [#86307](https://github.com/openclaw/openclaw/pull/86307) |
| **子代理编排不可靠** | "results are silently lost... no retry, no notification, no auto-restart" — 多步骤工作流的核心障碍 | [#44925](https://github.com/openclaw/openclaw/issues/44925) |
| **资源泄漏无感知** | ">12K read-only file descriptors... never released" — 长期运行后网关性能衰减 | [#86613](https://github.com/openclaw/openclaw/issues/86613) |

### 满意点

- **快速修复响应**：#85999（网关启动阻塞 60 秒）、#85306（Telegram 竞态）等 2026.5.22 回归问题在 24-48 小时内获得修复并关闭。
- **可观测性改进**：PR #86682 补全遥测信号，运维侧可见性提升。
- **安全修复效率**：#85240（P0 跨用户隐私泄漏）快速关闭。

---

## 8. 待处理积压

### 长期高优先级未关闭 Issue（需维护者介入）

| # | 创建日期 | 天数 | 核心阻塞 | 行动建议 |
|:---|:---|:---:|:---|:---|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 2026-03-13 | **74天** | 子代理静默丢失，标记 `no-new-fix-pr` + `needs-maintainer-review` + `needs-product-decision` | **产品决策阻塞**：需明确子代理失败模式的责任边界（重试策略 vs 通知机制 vs 自动重启） |
| [#18160](https://github.com/openclaw/openclaw/issues/18160) | 2026-02-16 | **99天** | Cron 直接执行模式，标记 `needs-security-review` | **安全审查阻塞**：直接执行绕过 LLM 的安全沙箱 implications 需评估 |
| [#27445](https://github.com/openclaw/openclaw/issues/27445) | 2026-02-26 | **89天** | 子代理完成路由选项，标记 `needs-product-decision` | 与 #44925 协同：子代理编排的产品设计需统一 |
| [#14747](https://github.com/openclaw/openclaw/issues/14747) | 2026-02-12 | **103天** | 可配置 lane wait 诊断阈值，硬编码 2 秒误告警 | **低 hanging fruit**：纯配置扩展，社区可贡献 |
| [#51441](https://github.com/openclaw/openclaw/issues/51441) | 2026-03-21 | **66天** | 暴露解析后后端模型到 session_status | LiteLLM 用户痛点，需运行时元数据管道支持 |

### PR 审查带宽预警

- **270 条待合并 PR** 中，以下高价值 PR 已标记 `👀 ready for maintainer look` 但滞留：

| PR | 价值 | 风险等级 | 等待天数 |
|:---|:---|:---|:---:|
| [#86067](https://github.com/openclaw/openclaw/pull/86067) 文件级提示窗口锁，修复竞态 #85913 | **稳定性** | 🚨 availability | 2天 |
| [#86270](https://github.com/openclaw/openclaw/pull/86270) 修复 Control UI 陈旧审批提示 | **用户体验** | 🚨 compatibility | 1天 |
| [#86624](https://github.com/openclaw/openclaw/pull/86624) CLI 用户回合持久化 | **数据完整性** | 🚨 session-state | 1天 |
| [#85558](https://github.com/openclaw/openclaw/pull/85558) 保留运行时外部认证快照（automerge armed） | **安全/认证** | 🚨 auth-provider + session-state | 3天 |

---

**日报生成时间**：2026-05-26  
**数据基准**：GitHub openclaw/openclaw 过去 24 小时活动

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析 | 2026-05-26

---

## 1. 生态全景

个人 AI 助手开源生态正处于**从"单点工具"向"多 Agent 编排平台"跃迁的关键节点**。OpenClaw 以 477 Issues/500 PR 的日流量维持绝对领跑地位，但 270 条待合并 PR 的审查瓶颈暴露治理挑战；NanoBot、Moltis、CoPaw 等第二梯队以差异化架构（轻量嵌入式、安全沙箱优先、AI 原生 IDE）快速抢占细分场景。行业共性需求集中在**子代理可靠性**（静默失败成为头号公敌）、**多模型路由**（长推理模型适配、低成本 LLM 精准控制）、**企业级集成**（Slack 多工作区、Socket Mode、MCP 协议）三大方向，而安全沙箱、记忆持久化、可观测性正成为平台化能力的分水岭。

---

## 2. 各项目活跃度对比

| 项目 | Issues (活跃/关闭) | PR (待合并/已合并) | 今日 Release | 健康度评级 | 关键瓶颈 |
|:---|:---|:---|:---:|:---|:---|
| **OpenClaw** | 192 / 285 | **270** / 230 | ❌ | 🟡 A- | 审查带宽严重过载；P1 静默失败集群未收敛 |
| **NanoBot** | ~5 更新 | **108** / ~10 | ❌ | 🟡 B+ | 待审 PR 积压 108 条；Dream 架构重构待决 |
| **Hermes Agent** | 25 / 25 | **43** / 7 | ❌ | 🟢 B+ | Docker 体验问题簇；Ollama/DeepSeek 兼容断裂 35 天 |
| **PicoClaw** | 8 / 1 | **8** / 0 | nightly | 🟡 B | **零合并**审查停滞；stale PR 积压严重 |
| **NanoClaw** | ~5 活跃 | **14** / 5 | ❌ | 🟡 B+ | 消息层竞态风险（60s 去抖丢消息）；v1→v2 能力回迁中 |
| **NullClaw** | 1 / 0 | 1 / 1 | ❌ | 🟢 C+ | 极低活跃度；文档-构建同步断裂 |
| **IronClaw** | ~22 更新 | **40** / ~10 | ❌ | 🟡 B+ | crates.io 发布滞后 21 天（供应链安全风险）；Attested-signing 范围蔓延 |
| **LobsterAI** | 1 / 0 | **14** / 15 | ❌ | 🟢 A- | "高代码产出、低社区声量"；6 周 stale PR 批量未决 |
| **Moltis** | 2 / 3 | 1 / **5** | ✅ 20260525.01 | 🟢 **A** | 仅 1 PR 待审；Cron 沙箱误配置新建 bug |
| **CoPaw** | 14 / 28 | **12** / 32 | ✅ v1.1.9-beta.1 | 🟢 A- | 4 个 P0 无 Fix PR；修复速度滞后于报告速度 |
| **TinyClaw** | — | — | — | ⚪ 休眠 | 24h 无活动 |
| **ZeptoClaw** | — | — | — | ⚪ 休眠 | 24h 无活动 |
| **ZeroClaw** | 19 / 7 | **34** / 16 | ❌ | 🟡 B+ | zerocode TUI 集成阻塞；安全工具链待评审 |

> **健康度定义**：A=快速迭代且质量可控，B=活跃但存在瓶颈，C=维护模式，休眠=无近期活动

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 表现 | 生态对比 |
|:---|:---|:---|
| **社区规模** | 日 477 Issues/500 PR，绝对量级领先 | NanoBot 约 1/5，Hermes 约 1/10，其余量级差距更大 |
| **技术路线** | **"全栈一体化"**：自有运行时 + 40+ 扩展点 + 多通道原生集成 | NanoBot 轻量嵌入式；Moltis 安全沙箱优先；IronClaw 区块链 attested-signing；ZeroClaw "Everything is a plugin" |
| **核心优势** | 通道覆盖最全（Telegram/iMessage/Slack/Discord/WhatsApp/Signal）；Codex 运行时深度集成；企业级可观测性（OTel/Prometheus） | 对比：NanoBot 强调"replace OpenClaw, very small resource"；CoPaw 强在 Coding Mode IDE；LobsterAI 绑定有道生态 |
| **结构性风险** | **"成功者的负担"**：270 待审 PR、74 天未决子代理静默丢失、配置迁移破坏运行时 | 轻量项目（Moltis 仅 1 待审 PR）响应更快；IronClaw 的 Reborn 架构迁移显示大型项目重构共性挑战 |
| **差异化壁垒** | 会话状态稳定性投入最深（文件级提示窗口锁、心跳上下文修剪、嵌入式竞态修复） | 多数项目尚未触及同等复杂度的状态机工程 |

**关键判断**：OpenClaw 是生态的**"基础设施参照系"**——其技术决策（如 Codex 运行时内部化、Channel Broker 统一）被下游项目（LobsterAI 直接集成）跟踪验证，但其治理模式（核心维护者审查瓶颈）也为生态提供反面教材。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 紧急程度 |
|:---|:---|:---|:---:|
| **子代理/多 Agent 可靠性** | OpenClaw (#44925 74天)、NanoBot (#3999 持续目标)、Moltis (#1004→#1067 非阻塞执行)、LobsterAI (#2044 清理钩子)、ZeroClaw (#6933 会话持久化) | "静默丢失"成为模式级痛点：无重试、无通知、无自动重启、阻塞父会话 | 🔴 **最高** |
| **长推理模型适配** | OpenClaw (#68596 看门狗阈值)、NanoBot (#3867 MiMo reasoning)、CoPaw (#4650 GLM-5.1 reasoning) | 扩展思考导致流式超时误触发；reasoning_content 格式兼容性 | 🔴 **高** |
| **Slack/企业 IM 深度集成** | OpenClaw (Channel Broker Phase 4)、NanoClaw (#1804 多工作区 + #2613 Socket Mode)、IronClaw (#3857 ProductAdapter)、ZeroClaw (Signal/WhatsApp 文档) | 多工作区、线程上下文、防火墙内 Socket Mode、审批卡片 | 🟡 **中高** |
| **安全沙箱与执行隔离** | Moltis (Landlock + #1072 Cron 误入沙箱)、ZeroClaw (Bubblewrap/Fedora + SVG 沙箱逃逸)、IronClaw (多租户沙盒) | 默认安全 vs 功能可用性的平衡；沙箱策略误报；配置语义一致性 | 🟡 **中高** |
| **工具调用精准控制** | Moltis (#1011→#1069 tool_choice)、NanoBot (#3986 循环检测)、OpenClaw (工具执行阻塞告警) | 低成本 LLM 路由不可靠；工具循环滥用；执行层强制过滤 | 🟡 **中** |
| **记忆/上下文持久化** | LobsterAI (#2046 Agent 记忆体系)、OpenClaw (语义召回 sender_id 隔离)、NanoBot (Dream 重构) | 跨 Session 记忆；长期记忆检索；记忆重要性评分 | 🟡 **中** |
| **MCP 协议生态整合** | PicoClaw (#2696 动态 Header)、NanoClaw (#2404 双路径投递)、CoPaw (#3640/#3445 双系统架构黑盒) | 配置迷宫；动态认证透传；与原生工具输出路径统一 | 🟡 **中** |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户画像 | 技术架构关键差异 |
|:---|:---|:---|:---|
| **OpenClaw** | 企业级多通道 AI 网关 + Codex 运行时 | 需要自托管、多 IM 集成的团队/企业 | 自有运行时内部化，40+ 扩展点，重状态机工程 |
| **NanoBot** | 轻量个人助手 → 可扩展 Agent 平台 | 资源敏感开发者、边缘设备用户 | 嵌入式优先，Dream 记忆系统，跨 Agent 消息总线（分布式演进） |
| **Hermes Agent** | 多技能编排 + TUI Dashboard | 个人极客、Unraid 自托管玩家 | Python 异步，技能作用域模型，容器化部署为主 |
| **Moltis** | 安全沙箱多 Agent 编排 | 高安全要求的企业/合规场景 | Rust + Landlock/Bubblewrap，spawn_agent 异步执行，版本化工作流 |
| **CoPaw** | AI 原生 IDE + 多渠道控制台 | 开发者、需要 Coding Mode 的 AI 编程用户 | Tauri 桌面端，内置浏览器 IDE，插件热重载 |
| **IronClaw** | 区块链 attested-signing + Reborn 架构 | Web3/NEAR 生态、需可验证计算的开发者 | Rust + WASM 通道，WalletConnect/NEAR 签名，多租户隔离 |
| **ZeroClaw** | "Everything is a plugin" 统一架构 | 高度定制化需求的进阶用户 | 插件目录统一化，zerocode TUI，Composio 动作过滤 |
| **LobsterAI** | OpenClaw 生态深度绑定 + 子 Agent 可视化 | 有道生态用户、需要中文优化体验 | 与 OpenClaw 插件/技能双向同步，子 Agent 会话树 |
| **PicoClaw** | 边缘设备/嵌入式（Sipeed 硬件生态） | RISC-V/Termux/低资源设备用户 | Go 静态二进制，多平台 .deb，硬件亲和 |
| **NanoClaw** | v2 多模型编排平台（per-agent 配置） | 企业 SaaS 部署、多 Slack 工作区 | v1→v2 架构迁移，Socket Mode，Apple 容器 |
| **NullClaw** | Zig 语言实验性 AI 网关 | 系统编程爱好者、Zig 生态早期采用者 | Zig 0.16+，A2A 协议，Memory 模块，极简代码库 |

---

## 6. 社区热度与成熟度分层

| 层级 | 项目 | 特征 | 关键指标 |
|:---|:---|:---|:---|
| **🚀 快速迭代期** | Moltis、CoPaw、LobsterAI | 日合并 5-15 PR，功能密集交付，版本滚动发布 | Moltis 5/6 PR 合并率；CoPaw Coding Mode 落地；LobsterAI 15 PR 合并 |
| **🔧 质量巩固期** | OpenClaw、IronClaw、ZeroClaw | 高活跃度但治理瓶颈，架构级重构与生产稳定性博弈 | OpenClaw 270 待审 PR；IronClaw Reborn 迁移未毕；ZeroClaw DO NOT MERGE 阻塞 |
| **📈 规模扩张期** | NanoBot、NanoClaw | 社区贡献激增（108/14 待审 PR），审查吞吐量跟不上 | NanoBot 消息总线/Dream 重构；NanoClaw v1→v2 能力回迁 |
| **🛠️ 维护修复期** | Hermes Agent、PicoClaw | 以配置修复、兼容性补丁、文档完善为主 | Hermes 三连配置修复；PicoClaw 零合并，Anthropic API 变更响应 |
| **💤 休眠/观望期** | TinyClaw、ZeptoClaw、NullClaw | 极低或无活动，或依赖单一贡献者 | NullClaw 仅 Dependabot + 1 外部 PR；TinyClaw/ZeptoClaw 24h 静默 |

---

## 7. 值得关注的趋势信号

| 趋势 | 证据链 | 对开发者的价值 |
|:---|:---|:---|
| **"静默失败"正在定义可靠性标准** | OpenClaw 4 个 Issue 形成集群；Moltis 用户明确要求"后台任务生命周期管理"；NanoClaw 60s 去抖丢消息 | Agent 系统必须从"能跑"进化到"坏了必须让用户知道"。建议内置 **至少三层容错**：工具层重试、子代理状态广播、会话级熔断通知 |
| **多 Agent 编排从"功能"变为"架构"** | NanoBot 消息总线、Moltis spawn_agent 非阻塞、LobsterAI 子 Agent 会话树、OpenClaw Channel Broker Phase 4 | 单 Agent 能力天花板可见，**跨实例协作协议**（如 GAP、A2A）将成为下一个竞争壁垒。早期采纳标准化协议可降低迁移成本 |
| **安全默认 vs 功能可用性的张力显性化** | ZeroClaw 沙箱阻断 Python skill (#5722)；Moltis Cron 误入沙箱 (#1072)；PicoClaw guardCommand 误杀 curl (#1042) | "默认安全"设计哲学正在遭遇真实 skill 开发的阻力。建议采用**分层授权模型**：声明式权限（manifest）+ 运行时动态提权（用户审批）+ 审计日志 |
| **长推理模型倒逼流式架构重构** | OpenClaw 30s 看门狗误触发；NanoBot MiMo/OpenRouter 注入修复；CoPaw reasoning_content 中断 | 传统"请求-响应"假设被打破，**流式语义需要重新设计**：可配置超时、推理/内容分帧、中间状态持久化 |
| **"Everything is a plugin" 与一体化架构的路线之争** | ZeroClaw #6489 统一插件目录 vs OpenClaw 运行时内部化移除旧代理架构 | 插件化降低耦合但增加协调成本，一体化提升一致性但牺牲灵活性。**中型团队建议：核心运行时内聚，通道/模型/工具插件化** |
| **AI 原生 IDE 成为新入口** | CoPaw Coding Mode（VS Code in browser）、LobsterAI 子 Agent 可视化、OpenClaw 插件同步 | 对话式 UI 不足以承载复杂任务，**"代码+对话+工具调用"三元界面**正在成为开发者首选。建议 Agent 框架预留 IDE 嵌入点 |
| **国产模型适配成为必选项** | NanoBot StepFun Plan+ASR、CoPaw GLM-5.1、OpenClaw 小米 MiMo、PicoClaw 智谱 GLM-5 | 国际框架的"OpenAI 优先"假设失效，**多提供商抽象层**（如 LiteLLM 桥接、统一配置契约）是全球化部署的基础设施 |

---

**报告生成时间**：2026-05-26  
**数据基准**：各项目 GitHub 过去 24 小时公开活动

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-05-26

> **项目**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot)  
> **日期**: 2026-05-26  
> **数据周期**: 过去24小时

---

## 1. 今日速览

NanoBot 今日维持**极高开发活跃度**，PR 队列达 **118 条**（待合并 108 条），显示社区贡献热情高涨但代码审查压力显著。Issues 侧 5 条更新以体验优化和生态扩展为主，无紧急安全或崩溃报告。核心架构层面，**Dream 记忆系统正经历重大重构**（单阶段合并）、**跨 Agent 协作消息总线**首次亮相，同时 **StepFun 生态接入**（Step Plan + ASR）成为国产模型适配的焦点。整体健康度良好，但待审 PR 积压需关注。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的关键 PR（10 条）

| PR | 作者 | 核心贡献 | 项目推进 |
|:---|:---|:---|:---|
| [#3999](https://github.com/HKUDS/nanobot/pull/3999) | chengyongru | **修复持续目标（sustained goal）提前退出** — `long_task` 注册后，`AgentRunner` 不再因 LLM 纯文本回复而误判为 `completed` | 🔒 **可靠性里程碑**：用户可放心发送 `/goal` 后离线，Agent 会持续执行至真正完成 |
| [#3985](https://github.com/HKUDS/nanobot/pull/3985) | codeLong1024 | 通用工具循环检测 & 速率限制硬阻断（v2.0） | 因与现有架构冲突被标记 `[invalid]`，但问题意识已推动 [#3986](https://github.com/HKUDS/nanobot/issues/3986) 进入讨论 |
| [#3988](https://github.com/HKUDS/nanobot/pull/3988) | morandot | **Step Plan 专属 Provider** — 独立 endpoint `api.stepfun.com/step_plan/v1`，共享 `STEPFUN_API_KEY` | 🌏 国产模型生态关键拼图完成，与 Volcengine/BytePlus 企业版方案对齐 |
| [#3991](https://github.com/HKUDS/nanobot/pull/3991) | Re-bin | **CLI Apps 与 MCP 统一** — 共享 `agent-app.v1` manifest 协议，主侧边栏常驻 Apps 入口 | 产品体验统一化，降低用户认知成本 |
| [#3978](https://github.com/HKUDS/nanobot/pull/3978) | Felix8568 | **修复 `maxConcurrentSubagents` 配置未生效** — 硬编码默认值 1 的穿透修复 | 企业级并发场景解锁 |
| [#3867](https://github.com/HKUDS/nanobot/pull/3867) | olgagaga | **OpenRouter `reasoning.effort` 注入修复**（MiMo 跟进） | 网关路由场景的思考控制闭环 |
| [#3851](https://github.com/HKUDS/nanobot/pull/3851) | olgagaga | MiMo 思考控制网关透传（#3845） | 同上，基础修复 |
| [#3850](https://github.com/HKUDS/nanobot/pull/3850) | olgagaga | 贡献文档修正：`ruff format` 范围警告 | 开发者体验 |
| [#3866](https://github.com/HKUDS/nanobot/pull/3866) | olgagaga | Secrets 配置文档扩展 | 同上 |

**整体评估**: 今日合并聚焦 **Agent 核心可靠性**（目标生命周期、并发配置）与 **国产模型生态扩展**（StepFun），产品层完成 Apps 统一。Dream 架构重构（[#3990](https://github.com/HKUDS/nanobot/pull/3990)）虽待合并，但设计方向已明确。

---

## 4. 社区热点

### 🔥 最具架构影响力：跨 Agent 消息总线（[#3992](https://github.com/HKUDS/nanobot/pull/3992)）

| 属性 | 内容 |
|:---|:---|
| **作者** | ysofologis |
| **状态** | OPEN，待合并 |
| **核心诉求** | 打破 NanoBot 单实例限制，实现**多 Agent 分布式协作** |

**技术方案**: 共享消息总线（Shared Message Bus），支持跨实例发布/订阅、点对点路由、广播模式。作者明确提及"已完整实现并测试"。

**背后信号**: 社区正将 NanoBot 从**个人助手**推向**多 Agent 编排平台**，与 AutoGen、CrewAI 等框架形成潜在竞争关系。

---

### 🔥 最具生态野心：GitAgent Protocol 支持（[#4005](https://github.com/HKUDS/nanobot/pull/4005)）

| 属性 | 内容 |
|:---|:---|
| **作者** | shreyas-lyzr（外部协议发起方）|
| **状态** | OPEN |
| **核心诉求** | 让 NanoBot 成为 **GAP 标准兼容的便携 Agent** |

**协议价值**: `agent.yaml` + `SOUL.md` 定义可发现、可迁移的 Agent 配置，降低跨平台部署摩擦。作者直指"nanobot is a perfect fit"。

**背后信号**: 开源 Agent 领域正涌现**可移植性标准**（类似 Docker 镜像对容器的影响），NanoBot 轻量化特性使其成为早期采纳者的理想标的。

---

### 🔥 最具产品争议：Dream 单阶段重构（[#3990](https://github.com/HKUDS/nanobot/pull/3990)）

| 属性 | 内容 |
|:---|:---|
| **作者** | chengyongru（核心维护者）|
| **状态** | OPEN |
| **核心变更** | 两阶段内存合并 → 单阶段 AgentLoop；goal-state 生命周期；session 持久化；model override preset |

**技术债务与前瞻**: 移除 Phase 1 纯 LLM 分析，将事实提取/去重/过期检测内聚至 `AgentRunner`。这是**架构简化**的大胆尝试，但需验证复杂场景下的提取质量是否退化。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | Fix 状态 |
|:---|:---|:---|:---|
| 🟡 **中** | [#3995](https://github.com/HKUDS/nanobot/issues/3995) | **PowerShell 流式输出异常换行** — 思考过程逐 token 强制换行重刷，终端严重刷屏 | ✅ **已关闭**（2026-05-25 当日修复）|
| 🟡 **中** | [#3993](https://github.com/HKUDS/nanobot/issues/3993) | **Anthropic content block 缺少 `type` 字段** — 工具返回裸 dict 时转换失败 | 🔄 **待 PR**（mraad 已提出方案，无关联 PR）|
| 🟢 **低** | [#4002](https://github.com/HKUDS/nanobot/pull/4002) | **Kimi 2.6 空响应导致 fallback 链断裂** — 仅 reasoning tokens 时无法恢复 | 🔄 **PR 待审**（UnicornaasTech 提交）|

**稳定性评估**: 无 🔴 高严重度问题。PowerShell 渲染问题响应迅速（当日开闭）。Anthropic 兼容性问题需关注，可能影响 Claude 企业用户。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 成熟度评估 | 纳入概率 |
|:---|:---|:---|:---|
| **StepFun 原生 ASR Provider** | [#4000](https://github.com/HKUDS/nanobot/issues/4000) | morandot 已提交 Step Plan Provider（[#3988](https://github.com/HKUDS/nanobot/pull/3988) 已合并），ASR 为自然延伸；Step Plan endpoint 404 于 `/audio/transcriptions` | ⭐⭐⭐⭐⭐ **极高** — 同作者、同生态、技术路径清晰 |
| **Weather Skill 外置为示例** | [#3958](https://github.com/HKUDS/nanobot/issues/3958) | "lean and mean" 哲学驱动；需创建 `examples/` 目录结构 | ⭐⭐⭐⭐ **高** — 符合项目轻量化定位，改动低风险 |
| **通用工具循环检测护栏** | [#3986](https://github.com/HKUDS/nanobot/issues/3986) | codeLong1024 的 [#3985](https://github.com/HKUDS/nanobot/pull/3985) 因架构冲突被关，但问题真实存在；[#2271](https://github.com/HKUDS/nanobot/pull/2271) 为更早的 CycleDetector PR（3月，仍 OPEN）| ⭐⭐⭐ **中** — 需求共识强，但实现路径分歧（硬阻断 vs 软检测）|
| **Telegram Webhook 模式** | [#3996](https://github.com/HKUDS/nanobot/pull/3996) | outlook84 已完整实现，含 secret-token 验证、有序更新队列 | ⭐⭐⭐⭐⭐ **极高** — PR 就绪，生产部署刚需 |
| **TUI 终端交互** | [#2155](https://github.com/HKUDS/nanobot/pull/2155) | xbunax 3月提交，长期未合并；`nanobot tui` 命令、`\new` 会话切换等已实现 | ⭐⭐ **低-中** — 需求存在但维护者优先级不明，与现有 CLI 架构可能冲突 |

---

## 7. 用户反馈摘要

### 痛点提炼

| 场景 | 来源 | 核心不满 |
|:---|:---|:---|
| **终端刷屏** | [#3995](https://github.com/HKUDS/nanobot/issues/3995) Shiftqueue | PowerShell 下流式思考输出"每次新数据块都强制换行重刷"，体验"严重"受损 |
| **Agent 死循环** | [#3986](https://github.com/HKUDS/nanobot/issues/3986) codeLong1024 | 大模型"不看结果"反复调用相同工具：`grep` 同 pattern N 次、`list_dir` 3 秒 5 次、读不存在文件换路径重试 — "现有保护仅覆盖 web 搜索" |
| **国产模型适配断层** | [#4000](https://github.com/HKUDS/nanobot/issues/4000) morandot | Step Plan 用户"无法使用内置转录"，404 于标准 Whisper 路径 |
| **配置透传失效** | [#3978](https://github.com/HKUDS/nanobot/issues/3978) Felix8568 | `maxConcurrentSubagents` "从未真正生效"，企业用户预期并行子 Agent |

### 正向信号

- **轻量化认同**: [#2155](https://github.com/HKUDS/nanobot/pull/2155) 评论中 xbunax 明确表示"replace openclaw with nanobot and resource consumption is very small"
- **协议兼容性期待**: [#4005](https://github.com/HKUDS/nanobot/pull/4005) 外部贡献者主动将 NanoBot 作为 GAP 标准"理想适配对象"

---

## 8. 待处理积压

### ⚠️ 长期悬停需维护者决策

| PR/Issue | 创建 | 最后更新 | 风险/状态 |
|:---|:---|:---|:---|
| [#2155](https://github.com/HKUDS/nanobot/pull/2155) **TUI 终端交互** | 2026-03-02 | 2026-05-25 | **71天未合并** — 功能完整（`tui.py`、`\new`、工具调用可视化），但可能因架构审查或优先级搁置 |
| [#1443](https://github.com/HKUDS/nanobot/pull/1443) **心跳推理解耦** | 2026-03-02 | 2026-05-25 | **85天未合并** — 默认静默推理、`sendReasoning` 可选开启，设计成熟但长期 pending |
| [#2271](https://github.com/HKUDS/nanobot/pull/2271) **工具调用循环检测** | 2026-03-19 | 2026-05-25 | **68天未合并** — 与 [#3986](https://github.com/HKUDS/nanobot/issues/3986) 需求重叠，但实现路径不同（CycleDetector vs 硬阻断），需统一决策 |

### 📊 队列健康度警示

- **待审 PR 108 条** vs 日合并能力 ~10 条，**审查吞吐量瓶颈**显著
- 建议：区分"架构大 PR"（如 [#3990](https://github.com/HKUDS/nanobot/pull/3990) Dream 重构、[#3992](https://github.com/HKUDS/nanobot/pull/3992) 消息总线）与"快速修复"（如 [#4004](https://github.com/HKUDS/nanobot/pull/4004) Kagi API 更新），建立分级审查机制

---

> **分析师备注**: NanoBot 正处于从"高效个人助手"向"可扩展 Agent 平台"跃迁的关键期。Dream 架构重构、跨 Agent 协作、协议标准化（GAP）三条主线并行，技术野心与社区动能充沛，但需警惕 PR 积压导致的贡献者流失风险。建议维护者优先释放 TUI、心跳推理等长期悬停 PR 的决策信号，稳定社区预期。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-05-26

---

## 1. 今日速览

Hermes Agent 今日保持**高活跃度**，24小时内产生 **50 条 Issues 更新**（25 新开/活跃，25 关闭）和 **50 条 PR 更新**（43 待合并，7 已合并/关闭），无新版本发布。社区呈现"**清理积压 + 快速迭代**"的双轨特征：一方面大量 3 月初的 Feature Request 被集中关闭，显示维护团队正在整理早期路线图；另一方面 7 个当日创建/关闭的 PR 快速修复了多个生产级 Bug（Discord 配置失效、Feishu 上传崩溃、Cron 技能作用域泄漏等）。整体健康度良好，但 **43 个待合并 PR** 提示代码审查队列存在压力。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 今日已合并/关闭的关键 PR（7 个）

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#32303](https://github.com/NousResearch/hermes-agent/pull/32303) | ht1072 | **运行时钩子恢复覆盖率**：为 local hooks、决策追踪、Hindsight retain、速率限制恢复添加测试覆盖 | — |
| [#32309](https://github.com/NousResearch/hermes-agent/pull/32309) | mvanhorn | **Feishu 媒体上传修复**：强制 HTTP/1.1 路径绕过 urllib3-future 的 HTTP/2 流重置问题 | [#32224](https://github.com/NousResearch/hermes-agent/issues/32224) |
| [#32307](https://github.com/NousResearch/hermes-agent/pull/32307) | mvanhorn | **Discord 配置修复**：`config.yaml` 中的 `discord.allowed_channels` 字段终于生效 | [#32263](https://github.com/NousResearch/hermes-agent/issues/32263) |
| [#32306](https://github.com/NousResearch/hermes-agent/pull/32306) | mvanhorn | **Cron 技能作用域修复**：绑定特定技能的 Cron 作业不再看到全局技能索引 | [#32235](https://github.com/NousResearch/hermes-agent/issues/32235) |

**里程碑意义**：mvanhorn 的三连修复解决了三个**文档与实现脱节的配置类 Bug**，这类"配置失效"问题长期损害用户信任，今日集中清除显著提升了运维体验。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 👍 | 核心诉求 |
|:---|:---|:---:|:---:|:---|
| 1 | [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) Dashboard 主题可读性 | **19** | 27 | **TUI 视觉设计债务爆发**：用户集体吐槽主题系统"仅换色不换字体"，serif 字体+低对比度导致生产环境难以阅读。这是**点赞数最高的开放 Issue**，反映 UI/UX 已成为 adoption 瓶颈。 |
| 2 | [#18482](https://github.com/NousResearch/hermes-agent/issues/18482) Docker HOME 目录权限被拒 | **8** | 0 | **容器化体验断裂**：自定义 HOME 路径的 Docker 部署遭遇权限错误，用户卡在"最小可行容器"阶段。 |
| 3 | [#503](https://github.com/NousResearch/hermes-agent/issues/503) 平台原生富交互（已关闭） | **8** | 1 | **早期路线图清理**：3 月提出的 Inline Keyboards/Execution Plans 被关闭，可能已拆分或延期。 |
| 4 | [#410](https://github.com/NousResearch/hermes-agent/issues/410) 安全密钥管理（已关闭） | **7** | 6 | **安全基础设施**：6 个赞显示社区对 `.env` 明文存储、子进程环境泄漏的深切担忧。关闭状态存疑——是已实现还是放弃？ |
| 5 | [#23402](https://github.com/NousResearch/hermes-agent/issues/23402) Docker HERMES_UID 权限问题 | **7** | 1 | **Unraid 社区受阻**：模板维护者 mmartial 无法让 Dashboard Chat 在权限修正后的容器中工作。 |

**深层信号**：Docker/容器化相关 Issue 占据热点榜单 **3/5**，说明**部署体验是 Hermes 当前最大的摩擦点**。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 优先级 | Issue/PR | 描述 | 状态 |
|:---|:---|:---|:---|
| **P1** | [#13659](https://github.com/NousResearch/hermes-agent/issues/13659) | `agent.tool_use_enforcement: never` 对本地 `deepseek-r1:7b-64k` 无效，仍发送 `tools` 参数导致 400 错误 | 🔴 **开放**，无 fix PR |
| **P1** | [#32318](https://github.com/NousResearch/hermes-agent/pull/32318) | Claude Pro/Max OAuth 凭证路由错误，新授权账户立即报"用量耗尽" | 🟡 **PR 开放**，待合并 |
| **P2** | [#18482](https://github.com/NousResearch/hermes-agent/issues/18482) | Docker 自定义 HOME 目录权限被拒绝 | 🔴 **开放**，无 fix PR |
| **P2** | [#23402](https://github.com/NousResearch/hermes-agent/issues/23402) | Docker HERMES_UID 导致 Dashboard Chat 权限问题 | 🔴 **开放**，无 fix PR |
| **P2** | [#32224](https://github.com/NousResearch/hermes-agent/issues/32224) | Feishu 媒体上传 HTTP/2 流重置 | 🟢 **已修复** by [#32309](https://github.com/NousResearch/hermes-agent/pull/32309) |
| **P2** | [#32263](https://github.com/NousResearch/hermes-agent/issues/32263) | `discord.allowed_channels` 配置字段失效 | 🟢 **已修复** by [#32307](https://github.com/NousResearch/hermes-agent/pull/32307) |
| **P2** | [#32235](https://github.com/NousResearch/hermes-agent/issues/32235) | Cron 作业技能作用域泄漏 | 🟢 **已修复** by [#32306](https://github.com/NousResearch/hermes-agent/pull/32306) |
| **P2** | [#32106](https://github.com/NousResearch/hermes-agent/issues/32106) | 上下文压缩后技能可用状态损坏，可能破坏活跃任务执行 | 🔴 **开放**，无 fix PR |
| **P2** | [#32295](https://github.com/NousResearch/hermes-agent/issues/32295) | Slack "正在思考..."状态指示器卡住 | 🔴 **开放**，无 fix PR |
| **P3** | [#31736](https://github.com/NousResearch/hermes-agent/issues/31736) | Gateway Kanban 调度器每 tick 打开 SQLite WAL 连接，FD 压力 | 🔴 **开放**，无 fix PR |
| **P3** | [#14448](https://github.com/NousResearch/hermes-agent/issues/14448) | Docker 用户体验差（UID 10000 vs 1000 混淆，/root 目录创建失败） | 🔴 **开放**，无 fix PR |

**关键风险**：**P1 级别的 Ollama 本地模型兼容性问题**（#13659）已持续一个多月，影响中文社区核心使用场景（DeepSeek 本地部署），且无修复 PR，可能损害本地化采用。

---

## 6. 功能请求与路线图信号

### 今日关闭的早期 Feature Request（3 月批次）

| Issue | 主题 | 关闭含义分析 |
|:---|:---|:---|
| [#503](https://github.com/NousResearch/hermes-agent/issues/503) | 平台原生富交互（Inline Keyboards 等） | 可能已拆分为更小的实现项，或优先级下调 |
| [#410](https://github.com/NousResearch/hermes-agent/issues/410) | 安全密钥管理工具 | **高赞（6👍）却关闭**，需确认是已实现还是搁置；若为后者，安全风险累积 |
| [#476](https://github.com/NousResearch/hermes-agent/issues/476) | Agent Mode System（Persona + Tool 作用域） | 可能与今日 Cron 技能作用域修复（#32306）存在关联，部分理念已落地 |
| [#495](https://github.com/NousResearch/hermes-agent/issues/495) | ml.ink MCP 部署技能 | 第三方 MCP 生态整合，关闭或意味着转向更通用的 MCP 工具框架 |
| [#507](https://github.com/NousResearch/hermes-agent/issues/507) | Roo Code 深度借鉴（反幻觉、Patch 细化等） | **架构改进类**，关闭可能表示已内化为技术债务或拆分执行 |

### 今日新提出的功能请求

| Issue | 作者 | 内容 | 纳入可能性评估 |
|:---|:---|:---|:---|
| [#32290](https://github.com/NousResearch/hermes-agent/issues/32290) | kaishi00 | Cron 失败作业自动重试（指数退避） | **高**——契合今日 Cron 修复主题，且为生产刚需 |
| [#32291](https://github.com/NousResearch/hermes-agent/issues/32291) | dakshagrawa | Antigravity CLI/SDK 工具集 | **中**——跟随 Google 新工具潮流，但需评估与现有工具的重叠 |
| [#32320](https://github.com/NousResearch/hermes-agent/pull/32320) | y0shua1ee | 图像生成 fallback 控制 + `/image_model` 命令 | **高**——已有 PR，功能完整 |

---

## 7. 用户反馈摘要

### 😫 核心痛点

| 痛点 | 来源 | 典型引述 |
|:---|:---|:---|
| **Docker 部署"噩梦"** | [#14448](https://github.com/NousResearch/hermes-agent/issues/14448) | *"user experience for ur docker is so bad"* — UID 10000/1000 混淆、/root 目录创建失败、挂载目录文档不清 |
| **TUI 可读性灾难** | [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) | *"serif fonts, especially small and light font weight with little contrast makes the dashboard hard to read"* |
| **配置系统信任崩塌** | [#32263](https://github.com/NousResearch/hermes-agent/issues/32263) | `config.yaml` 字段"文档说有但实际不读"，用户误以为已配置成功 |
| **本地模型兼容性断裂** | [#13659](https://github.com/NousResearch/hermes-agent/issues/13659) | 设置 `tool_use_enforcement: never` 仍发送 tools，DeepSeek 本地部署不可用 |

### 😊 积极反馈

| 场景 | 来源 | 说明 |
|:---|:---|:---|
| **Discord 语音通话创意** | [#409](https://github.com/NousResearch/hermes-agent/issues/409) | 用户成功让 Hermes "下载 TTS、生成自己的声音、然后给我打电话"——展示 agent 自主工具链组合的潜力 |
| **Unraid 社区主动维护模板** | [#23402](https://github.com/NousResearch/hermes-agent/issues/23402) | mmartial 主动更新模板适配新文档，显示第三方生态投入度 |

---

## 8. 待处理积压

### ⚠️ 长期未响应的高影响 Issue

| Issue | 创建日期 | 最后更新 | 天数 | 风险说明 |
|:---|:---|:---|:---:|:---|
| [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) Dashboard 主题可读性 | 2026-04-30 | 2026-05-25 | **26天** | **点赞数最高（27👍）的开放 Issue**，TUI 是用户第一印象，持续不响应损害 adoption |
| [#18482](https://github.com/NousResearch/hermes-agent/issues/18482) Docker HOME 权限 | 2026-05-01 | 2026-05-25 | **25天** | 容器化入门阻断，与 #14448、#23402 形成 Docker 体验问题簇 |
| [#13659](https://github.com/NousResearch/hermes-agent/issues/13659) Ollama/DeepSeek 工具强制发送 | 2026-04-21 | 2026-05-25 | **35天** | **P1 优先级，最长未修复**，中文/本地部署社区核心场景 |
| [#12883](https://github.com/NousResearch/hermes-agent/issues/12883) 记忆系统无重要性评分 | 2026-04-20 | 2026-05-25 | **36天** | 架构级缺陷，影响长期记忆可靠性 |

### ⚠️ 审查队列压力

| 类型 | 数量 | 说明 |
|:---|:---:|:---|
| 待合并 PR | **43** | 包括安全修复（#32319 AWS 凭证阻断）、核心功能（#32320 图像 fallback）、国际化（#28604 中文翻译）等 |
| 其中 P1/P2 优先级 | 至少 5 个 | 涉及认证、Slack 线程图像、TUI 文件句柄泄漏等生产问题 |

**维护者行动建议**：
1. **优先合并** [#32318](https://github.com/NousResearch/hermes-agent/pull/32318)（Claude OAuth P1 修复）和 [#32319](https://github.com/NousResearch/hermes-agent/pull/32319)（AWS 凭证安全阻断）
2. **指派专人** 处理 Docker 体验问题簇（#14448, #18482, #23402），考虑创建 meta-issue 统一跟踪
3. **回应或更新** #18080 主题可读性 Issue，即使仅为"已纳入设计迭代"的状态同步

---

*日报生成时间：2026-05-26 | 数据来源：GitHub API 概览与公开 Issues/PR 元数据*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-05-26

## 1. 今日速览

PicoClaw 今日社区活跃度**中等偏高**，24小时内产生 **9 条 Issue 更新**（8 活跃/新开，1 关闭）和 **8 条 PR 待审**，但**零合并**表明代码审查瓶颈持续。项目发布 **v0.2.9-nightly.20260525** 夜间构建，主分支持续迭代。值得关注的是，今日集中爆发 **3 条 Anthropic Claude 模型兼容性问题**（2 新 Issue + 2 配套修复 PR），显示上游 API 变更对下游项目的冲击速度加快。历史消息显示缺陷、RISC-V 架构支持、Termux 环境适配等边缘场景问题仍在积压。

---

## 2. 版本发布

### 🔖 Nightly Build: v0.2.9-nightly.20260525.ab6d3946

| 属性 | 详情 |
|:---|:---|
| 版本号 | `v0.2.9-nightly.20260525.ab6d3946` |
| 构建类型 | 自动化夜间构建（**可能不稳定，谨慎使用**） |
| 变更范围 | `v0.2.9...main` 全量差异 |
| 完整日志 | https://github.com/sipeed/picoclaw/compare/v0.2.9...main |

**迁移注意事项**：作为夜间构建，不建议生产环境直接部署。建议等待正式版 `v0.2.9` 发布，或基于具体 commit 验证所需修复是否已包含。

---

## 3. 项目进展

**⚠️ 今日无 PR 合并或关闭**（8 待审，0 已合并/关闭）

代码审查停滞，但以下 PR 今日有更新活动，显示贡献者持续推动：

| PR | 作者 | 进展意义 |
|:---|:---|:---|
| [#2942](https://github.com/sipeed/picoclaw/pull/2942) | LegendAlessandro-Liguori | 修复默认配置中 Claude 模型 ID 格式错误（dots → hyphens），**配套 Issue #2941** |
| [#2940](https://github.com/sipeed/picoclaw/pull/2940) | LegendAlessandro-Liguori | 为 `claude-opus-4-7` 移除废弃的 `temperature` 参数，**配套 Issue #2939** |
| [#2813](https://github.com/sipeed/picoclaw/pull/2813) | mrigangha | 更新：增强 PID 文件校验，验证进程身份防止误拦截（**配套高优 Issue #2720**） |

**整体评估**：项目功能演进因审查积压而放缓，但社区自组织修复能力良好——Anthropic API 变更在 24 小时内即产生"问题报告+修复 PR"的完整响应链。

---

## 4. 社区热点

### 🔥 讨论最活跃：Issue #1042 — exec 工具 guardCommand 路径校验误杀
- **链接**: https://github.com/sipeed/picoclaw/issues/1042
- **数据**: 14 条评论，2 👍，创建于 2026-03-04，今日更新
- **核心诉求**: `restrict_to_workspace=true` 时，正则解析将 `curl -s "wttr.in/Beijing?T"` 中的 URL 参数误判为 `../../../../Beijing?T` 相对路径，导致合法命令被安全拦截
- **背后信号**: 安全策略的**误报率（false positive）**影响实际使用，用户需要在安全隔离与功能可用性之间取得平衡。该 Issue 已持续 2.5 个月，反映安全模型精细化调整的复杂度。

### 📌 今日关闭：Issue #1950 — Web Chat 流式输出
- **链接**: https://github.com/sipeed/picoclaw/issues/1950
- **数据**: 10 条评论，低优先级，标记 stale 后关闭
- **状态**: 功能请求未被实现，因长期无活动而清理关闭。配套 PR #2853（pico 通道 ChatStream 支持）仍在待审，可能存在功能重叠或替代方案。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 描述 | 修复状态 |
|:---|:---|:---|:---|
| 🔴 **High** | [#2720](https://github.com/sipeed/picoclaw/issues/2720) | **PID 文件残留导致启动崩溃循环**：OS 重用 PID 给无关进程（如 systemd-resolved），单例检查仅验证 PID 存在性，未验证进程身份 | 🩹 **PR #2813 待审** |
| 🟡 Medium | [#1042](https://github.com/sipeed/picoclaw/issues/1042) | exec 工具 guardCommand 正则误匹配 URL 为路径，安全策略过度拦截 | ❌ 无 fix PR |
| 🟡 Medium | [#2796](https://github.com/sipeed/picoclaw/issues/2796) | 历史记录中多轮用户消息仅显示最后一条，消息压缩逻辑侵入前端展示 | ❌ 无 fix PR |
| 🟡 Medium | [#2887](https://github.com/sipeed/picoclaw/issues/2887) | RISC-V 架构 .deb 包与 OpenAI 模型不兼容（运行时问题） | ❌ 无 fix PR |
| 🟢 Low | [#2944](https://github.com/sipeed/picoclaw/issues/2944) | Termux/termux-chroot 环境 X509 证书错误，Go 二进制未正确发现系统 CA bundle | ❌ 无 fix PR（需显式设置 `SSL_CERT_FILE` 绕过） |
| 🟢 Low | [#2943](https://github.com/sipeed/picoclaw/issues/2943) | 微信渠道发送图片触发智谱 GLM-5 API error 1210（参数错误） | ❌ 无 fix PR |
| 🟢 Low | [#2941](https://github.com/sipeed/picoclaw/issues/2941) | 默认配置种子使用 `claude-sonnet-4.6`（dots），Anthropic API 要求 hyphens | ✅ **PR #2942 待审** |
| 🟢 Low | [#2939](https://github.com/sipeed/picoclaw/issues/2939) | `claude-opus-4-7` 废弃 `temperature` 参数，发送即返回 HTTP 400 | ✅ **PR #2940 待审** |

---

## 6. 功能请求与路线图信号

| 需求来源 | 内容 | 纳入可能性评估 |
|:---|:---|:---|
| PR #2893 | [Server酱³ Bot (SC3Bot) 渠道支持](https://github.com/sipeed/picoclaw/pull/2893) — 中国流行通知服务的 Bot API 集成 | ⭐⭐⭐ 渠道生态扩展，符合项目多平台覆盖策略，但 stale 状态需作者跟进 |
| PR #2853 | [pico 通道 ChatStream 实时 token 流式传输](https://github.com/sipeed/picoclaw/pull/2853) — WebSocket 客户端实时流式响应 | ⭐⭐⭐⭐ 直接对应关闭的 Issue #1950 诉求，技术方案成熟，审查优先级应提升 |
| PR #2696 | [MCP 每请求动态 Header 透传](https://github.com/sipeed/picoclaw/pull/2696) — 渠道上下文向 MCP 服务器转发认证信息 | ⭐⭐⭐⭐ 企业级多租户场景关键能力，架构设计合理 |
| PR #2781 | [技能目录 Token 用量优化](https://github.com/sipeed/picoclaw/pull/2781) — 避免每次 LLM 请求重复注入完整技能 XML | ⭐⭐⭐⭐⭐ **高 ROI 优化**，直接影响运营成本，stale 状态令人担忧 |

**路线图信号**：流式输出（#2853）和 MCP 动态 Header（#2696）代表项目向**实时交互**和**企业集成**两个方向演进，符合 AI Agent 平台化趋势。

---

## 7. 用户反馈摘要

### 😫 真实痛点

| 场景 | 来源 | 核心不满 |
|:---|:---|:---|
| **"我查了天气，你说我越界"** | [#1042](https://github.com/sipeed/picoclaw/issues/1042) | 安全策略"宁可错杀"的设计哲学损害信任，用户无法理解为何 `curl` 天气命令涉及路径逃逸 |
| **"换了个对话，前面的我没了"** | [#2796](https://github.com/sipeed/picoclaw/issues/2796) | 历史记录压缩逻辑对用户透明，导致**数据丢失感知**——实际数据可能在，但展示层折叠了 |
| **"RISC-V 装完跑不了 OpenAI"** | [#2887](https://github.com/sipeed/picoclaw/issues/2887) | 架构差异化支持不足，边缘设备（Sipeed 自身硬件生态）与主流云模型存在兼容断层 |
| **"Termux 里证书怎么就不行"** | [#2944](https://github.com/sipeed/picoclaw/issues/2944) | Go 静态链接二进制与 Android/Termux 环境证书发现机制冲突，移动/嵌入式场景门槛高 |
| **"Claude 又换 API 规则了"** | [#2941](https://github.com/sipeed/picoclaw/issues/2941), [#2939](https://github.com/sipeed/picoclaw/issues/2939) | 上游模型提供商 API 变更频繁，默认配置"开箱即坏"损害首次体验 |

### 👍 隐性满意

- 社区响应速度：Anthropic 兼容性问题在**同日**产生 Issue + PR，显示贡献者生态活跃
- 夜间构建持续：自动化发布保证最新变更可验证

---

## 8. 待处理积压

> ⚠️ 以下 Issue/PR 标记为 **stale** 或长期无响应，但涉及重要功能/修复，建议维护者优先审阅：

| 条目 | 创建时间 | 最后更新 | 风险说明 |
|:---|:---|:---|:---|
| [PR #2781](https://github.com/sipeed/picoclaw/pull/2781) | 2026-05-06 | 2026-05-25 | **Token 成本优化**，每次请求重复发送技能目录 = 直接烧钱；stale 但今日有活动 |
| [PR #2893](https://github.com/sipeed/picoclaw/pull/2893) | 2026-05-18 | 2026-05-25 | 中国本土渠道生态扩展，stale |
| [PR #2890](https://github.com/sipeed/picoclaw/pull/2890) | 2026-05-18 | 2026-05-25 | macOS 符号链接路径校验修复，stale |
| [PR #2853](https://github.com/sipeed/picoclaw/pull/2853) | 2026-05-11 | 2026-05-25 | 流式输出核心功能，stale |
| [PR #2696](https://github.com/sipeed/picoclaw/pull/2696) | 2026-04-28 | 2026-05-25 | MCP 企业集成能力，stale |
| [Issue #1042](https://github.com/sipeed/picoclaw/issues/1042) | 2026-03-04 | 2026-05-25 | **2.5 个月未解决**，安全策略误报，14 条讨论未收敛 |
| [Issue #2887](https://github.com/sipeed/picoclaw/issues/2887) | 2026-05-17 | 2026-05-25 | RISC-V 架构兼容性，与 Sipeed 硬件生态战略相关 |

---

**项目健康度评分**: 🟡 **B**  
- 活跃度: ✅ 高（Issue/PR 日更新量健康）
- 响应度: ⚠️ 中（同日响应新问题，但 stale 积压严重）
- 合流速度: ❌ 低（8 PR 待审，0 合并，审查瓶颈明显）
- 社区自治: ✅ 高（贡献者自发配套"问题+修复"组合）

**建议行动**: 优先合并 #2940、#2942（Claude 兼容性快速修复），安排审查 #2813（高优稳定性修复），清理 stale PR 积压或明确维护者反馈。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-05-26

> **项目**: [NanoClaw](https://github.com/qwibitai/nanoclaw) | **日期**: 2026-05-26 | **数据周期**: 过去24小时

---

## 1. 今日速览

NanoClaw 今日呈现**高活跃度开发态势**，19 个 PR 更新（14 待合并）显示核心团队与社区贡献者正密集推进 v2 功能补齐与稳定性修复。两大主线尤为突出：一是 **v1→v2 能力回迁**（健康检查端点、多模态附件、Socket Mode），二是 **Slack 企业级支持深化**（多工作区、线程上下文、Socket Mode）。Issues 侧暴露的 `send_message` 双路径投递与 60 秒去抖静默丢消息问题，提示核心消息路由层仍存在竞态条件风险。整体健康度：**功能迭代积极，但核心通信稳定性需优先加固**。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### ✅ 已合并/关闭的 PR（5 条）

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#2526](https://github.com/nanocoai/nanoclaw/pull/2526) | glifocat | **修复 `ncl groups delete` 外键约束崩溃** — 级联删除依赖行 | 解除 CLI 运维阻塞，对应关闭 High 优先级 Issue [#2525](https://github.com/nanocoai/nanoclaw/issues/2525) |
| [#2592](https://github.com/nanocoai/nanoclaw/pull/2592) | mmahmed | 文档：Teams CLI 自动凭证路径 | 降低 Microsoft Teams 集成上手门槛 |
| [#2612](https://github.com/nanocoai/nanoclaw/pull/2612) | NilanshBansal | 新增 `debug-issue` 运维技能（Skyler 驱动） | 增强平台级故障自诊断能力，**已关闭**（可能需迭代） |
| [#1968](https://github.com/nanocoai/nanoclaw/pull/1968) | IamAdamJowett | **端到端单 Agent 提供商/模型配置** | v2 核心能力里程碑 — 支持聊天驱动切换模型，五提交链式实现 |
| [#2344](https://github.com/nanocoai/nanoclaw/pull/2344) | IamAdamJowett | 修复测试类型编译错误 | 恢复 main 分支可构建状态 |

**关键里程碑**：PR [#1968](https://github.com/nanocoai/nanoclaw/pull/1968) 的合并标志着 **per-agent 模型选择成为一等公民**，这是从"单一模型托管"向"多模型编排平台"演进的关键架构升级。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| 排名 | Issue | 评论数 | 核心诉求 | 深层信号 |
|:---|:---|:---:|:---|:---|
| 1 | [#2404](https://github.com/nanocoai/nanoclaw/issues/2404) MCP `send_message` 与 `<message>` 块双投递 | 3 | 要求统一 MCP/原生消息输出路径 | **架构债务**：MCP Server 作为独立子进程与 poll loop 并行写入，缺乏全局去重协调 |
| 2 | [#1804](https://github.com/nanocoai/nanoclaw/issues/1804) 多 Slack 工作区并发支持 | 2 | 企业 SaaS 部署必需 | **商业化阻塞**：当前 `channelType` 单键注册限制多租户架构 |
| 3 | [#2506](https://github.com/nanocoai/nanoclaw/issues/2506) 60 秒去抖静默丢响应 | 2 | 要求可靠的消息时序保证 | **可靠性红线**：竞态条件下用户体验完全断裂（超时无反馈） |

### 🔥 今日高价值 PR 集群

- **johnmathews 双 PR 突击 v1 能力回迁**：[#2619](https://github.com/nanocoai/nanoclaw/pull/2619) `/health` 端点 + [#2618](https://github.com/nanocoai/nanoclaw/pull/2618) 多模态/反应事件 — 反映生产环境对 v1 成熟能力的刚性依赖
- **apparentsoft Slack 三件套**：[#2613](https://github.com/nanocoai/nanoclaw/pull/2613) Socket Mode → [#2614](https://github.com/nanocoai/nanoclaw/pull/2614) 线程父消息种子 → [#2615](https://github.com/nanocoai/nanoclaw/pull/2615) Slack 适配器实现 — 依赖链清晰，企业级 Slack 支持趋于完整

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---:|
| 🔴 **High** | [#2525](https://github.com/nanocoai/nanoclaw/issues/2525) | `ncl groups delete` 外键约束崩溃 — 任何非空组无法删除 | **已修复** | ✅ [#2526](https://github.com/nanocoai/nanoclaw/pull/2526) |
| 🔴 **High** | [#2506](https://github.com/nanocoai/nanoclaw/issues/2506) | 60 秒去抖窗口内响应静默丢弃 + 流式查询期间 follow-up 丢失 | **开放，无 Fix** | ❌ |
| 🟡 **Medium** | [#2404](https://github.com/nanocoai/nanoclaw/issues/2404) | MCP `send_message` 与 `<message>` 块同 turn 双投递 | **开放，无 Fix** | ❌ |
| 🟡 **Medium** | [#2610](https://github.com/nanocoai/nanoclaw/pull/2610) | `ncl groups create` 未初始化 group filesystem，容器启动失败 | **PR 待审** | ⏳ [#2610](https://github.com/nanocoai/nanoclaw/pull/2610) |
| 🟡 **Medium** | [#2609](https://github.com/nanocoai/nanoclaw/pull/2609) | Apple 容器：文件挂载、host.docker.internal、用户映射修复 | **PR 待审** | ⏳ [#2609](https://github.com/nanocoai/nanoclaw/pull/2609) |
| 🟢 **Low** | [#2346](https://github.com/nanocoai/nanoclaw/pull/2346) | 未知 slash 命令被误分类为 passthrough 导致静默丢弃 | **PR 待审** | ⏳ [#2346](https://github.com/nanocoai/nanoclaw/pull/2346) |

**稳定性评估**：消息层存在**系统性竞态风险**。Issue [#2506](https://github.com/nanocoai/nanoclaw/issues/2506) 与 [#2404](https://github.com/nanocoai/nanoclaw/issues/2404) 共同指向 `processQuery` 与 MCP 工具输出的并发协调缺失，建议维护者优先审查消息路由的串行化机制。

---

## 6. 功能请求与路线图信号

| 需求来源 | 功能方向 | 成熟度 | 纳入下一版本概率 |
|:---|:---|:---|:---:|
| [#1804](https://github.com/nanocoai/nanoclaw/issues/1804) + [#2613](https://github.com/nanocoai/nanoclaw/pull/2613)/[#2614](https://github.com/nanocoai/nanoclaw/pull/2614)/[#2615](https://github.com/nanocoai/nanoclaw/pull/2615) | **Slack 企业级套件**：多工作区 + Socket Mode + 线程上下文 | PR 已就绪，架构兼容待评估 | **高** |
| [#2618](https://github.com/nanocoai/nanoclaw/pull/2618) | **多模态回归**：图像/语音/PDF + 反应事件 | 代码就绪，生产验证中 | **高** |
| [#2619](https://github.com/nanocoai/nanoclaw/pull/2619) | **可观测性**：/health 端点回归 | 低侵入，直接复用 v1 逻辑 | **极高** |
| [#2211](https://github.com/nanocoai/nanoclaw/pull/2211) | **工具调用可视化**：实时 tool-call 预览 skill | 社区技能，需评估是否纳入核心 | **中** |
| [#2345](https://github.com/nanocoai/nanoclaw/pull/2345) | **动态角色配置**：per-group CLAUDE.role.md 自动导入 | 边界争议（skill vs 源码） | **中** |
| [#2611](https://github.com/nanocoai/nanoclaw/pull/2611) | **安全加固**：审批后保留调用者上下文 | 安全合规必需 | **高** |

**路线图推断**：v2.1 或下一里程碑 likely 聚焦 **"企业 Slack 集成完备化" + "v1 能力补齐" + "安全合规基线"**。

---

## 7. 用户反馈摘要

### 💔 核心痛点

> *"Agent 响应被静默丢弃，客户端超时"* — [#2506](https://github.com/nanocoai/nanoclaw/issues/2506)

- **可靠性焦虑**：60 秒去抖窗口与流式查询期间的竞态，导致用户完全无法预测消息是否送达
- **调试黑箱**："silently dropped" 反复出现，错误处理缺乏透明度

> *"任何非空组都无法删除"* — [#2525](https://github.com/nanocoai/nanoclaw/issues/2525)

- **运维脆弱性**：基础 CRUD 操作因外键约束失败，反映 schema 设计与 CLI 工具链的协同不足

### 💬 场景诉求

| 场景 | 来源 | 强度 |
|:---|:---|:---:|
| 多 Slack 工作区统一管理（企业 SaaS） | [#1804](https://github.com/nanocoai/nanoclaw/issues/1804) | ⭐⭐⭐⭐⭐ |
| 线程内上下文连贯（长对话支持） | [#2614](https://github.com/nanocoai/nanoclaw/pull/2614) | ⭐⭐⭐⭐⭐ |
| 防火墙内 Socket Mode 部署 | [#2613](https://github.com/nanocoai/nanoclaw/pull/2613) | ⭐⭐⭐⭐☆ |
| 单 Agent 切换模型（成本/能力优化） | [#1968](https://github.com/nanocoai/nanoclaw/pull/1968) | ⭐⭐⭐⭐☆ |

### ✅ 正向反馈

- johnmathews 的 v1 能力回迁 PR 标注 "Production-hardened on my fork (multi-hour uptime)" — 社区存在活跃的生产环境验证者

---

## 8. 待处理积压

### ⏰ 需维护者关注的长期项

| Issue/PR | 创建时间 | 当前状态 | 风险 |
|:---|:---|:---|:---|
| [#1804](https://github.com/nanocoai/nanoclaw/issues/1804) 多 Slack 工作区 | 2026-04-16 | 开放，评论 2 | **架构阻塞**：`channelType` 单键设计限制，需 registry 重构 |
| [#2211](https://github.com/nanocoai/nanoclaw/pull/2211) tool-visibility skill | 2026-05-03 | 开放，待审 | 功能就绪但缺乏 maintainer review |
| [#2345](https://github.com/nanocoai/nanoclaw/pull/2345) per-group CLAUDE.role.md | 2026-05-08 | 开放，边界争议 | skill vs core 定位不清，需决策 |
| [#2346](https://github.com/nanocoai/nanoclaw/pull/2346) slash 命令修复 | 2026-05-08 | 开放，待审 | 低侵入修复，积压无必要 |

### 🚨 建议优先动作

1. **立即**：审查并合并 [#2610](https://github.com/nanocoai/nanoclaw/pull/2610)（group 创建修复）与 [#2609](https://github.com/nanocoai/nanoclaw/pull/2609)（Apple 容器修复）— 阻塞基础工作流
2. **本周**：为 [#2506](https://github.com/nanocoai/nanoclaw/issues/2506) 与 [#2404](https://github.com/nanocoai/nanoclaw/issues/2404) 指定 owner，消息层竞态需架构级方案
3. **本月**：决策 [#1804](https://github.com/nanocoai/nanoclaw/issues/1804) 的 registry 重构优先级，释放企业级 Slack 支持

---

*日报生成基于 GitHub 公开数据，PR/Issue 状态以实际页面为准。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-05-26

> **项目**: [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)  
> **分析日期**: 2026-05-26  
> **数据周期**: 过去 24 小时（2026-05-25 至 2026-05-26）

---

## 1. 今日速览

NullClaw 今日维持**低度活跃**状态。社区贡献以基础设施维护为主：Dependabot 完成了 busybox 容器镜像的常规安全更新，一名外部贡献者提交了网关功能扩展 PR 尚待评审。唯一活跃的 Issue 暴露了文档与构建系统的版本同步问题——Zig 编译器版本要求标注错误可能导致新开发者 onboarding 受阻。无新版本发布，核心功能迭代节奏平稳但偏保守。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 已合并/关闭

| PR | 作者 | 内容 | 项目推进 |
|:---|:---|:---|:---|
| [#931](https://github.com/nullclaw/nullclaw/pull/931) | dependabot[bot] | 将 Docker 基础镜像 busybox 从 1.37 升级至 1.38 | 基础设施安全维护，消除潜在 CVE 风险，对运行时无功能性影响 |

**整体评估**: 今日代码库未发生功能性演进，项目处于"维护模式"而非"迭代模式"。

### 待评审

| PR | 作者 | 内容 | 状态 |
|:---|:---|:---|:---|
| [#933](https://github.com/nullclaw/nullclaw/pull/933) | DonPrus | 新增网关媒体转录端点、扩展配置解析器、增强令牌安全机制 | **待合并**（1 条） |

该 PR 若合并将显著扩展 NullClaw 作为 AI 网关的能力边界，涵盖 **STT（语音转文本）集成**、**A2A（Agent-to-Agent）协议配置**及 **Memory 模块配置**——与项目"AI 智能体基础设施"定位高度契合。

---

## 4. 社区热点

| 排名 | 条目 | 互动指标 | 热度分析 |
|:---|:---|:---|:---|
| 🔥 1 | [#932 [bug] Invalid Zig version in docs](https://github.com/nullclaw/nullclaw/issues/932) | 评论: 0 / 👍: 0 | **文档-构建链断裂信号**。虽表面互动为零，但属于"静默阻塞"型问题——新开发者按文档操作即遭遇编译失败，直接影响社区增长漏斗的转化率。 |
| 2 | [#933 Add additional gateway methods](https://github.com/nullclaw/nullclaw/pull/933) | 评论: undefined / 👍: 0 | **功能扩展型贡献**。作者 DonPrus 一次性覆盖网关四大子系统（media/audio, A2A, memory, config），体现对架构的深度理解，但缺乏维护者反馈可能挫伤持续贡献意愿。 |

**诉求洞察**: 社区存在"文档准确性"与"功能评审响应"双重期待。Issue #932 的零互动反而暗示问题未被足够重视——按文档编译失败是开发者流失的高危节点。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 描述 | Fix PR | 风险说明 |
|:---|:---|:---|:---|:---|
| 🟡 **中** | [#932](https://github.com/nullclaw/nullclaw/issues/932) | 文档标注 Zig 0.15.2，实际需 ≥0.16.0（`std.Io.Dir` 符号缺失导致构建失败） | **无** | 阻塞新开发者首次构建；现有用户若未升级 Zig 亦受影响 |

**技术细节**: `std.Io.Dir` 于 Zig 0.16.0 引入，文档滞后于代码库对标准库新 API 的采纳。建议同步检查 CI 中 Zig 版本矩阵是否与文档一致。

---

## 6. 功能请求与路线图信号

| 来源 | 功能方向 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| PR [#933](https://github.com/nullclaw/nullclaw/pull/933) | **网关 STT 集成** (`POST /media/transcribe`) | ⭐⭐⭐⭐⭐ 高 | 直接扩展核心网关能力，与项目 AI 基础设施定位一致；已实现而非仅请求 |
| PR [#933](https://github.com/nullclaw/nullclaw/pull/933) | **A2A 协议配置支持** | ⭐⭐⭐⭐⭐ 高 | Agent-to-Agent 是 2025-2026 行业关键趋势，NullClaw 主动布局符合路线图预期 |
| PR [#933](https://github.com/nullclaw/nullclaw/pull/933) | **Memory 模块配置扩展** | ⭐⭐⭐⭐☆ 中高 | 智能体长期记忆是差异化能力，但需评估与现有存储抽象的兼容性 |
| PR [#933](https://github.com/nullclaw/nullclaw/pull/933) | **网关令牌哈希存储 + 超时保护** | ⭐⭐⭐⭐⭐ 高 | 安全加固属于零争议合并项 |

**路线图信号**: DonPrus 的 PR 呈现"打包式"架构演进，可能反映：
- 内部生产需求驱动（作者可能为重度使用者或团队成员）
- 项目正从"MVP 网关"向"企业级 AI 接入层"跃迁

---

## 7. 用户反馈摘要

> 基于今日 Issues/PR 文本的痛点提炼

| 维度 | 反馈内容 | 来源 |
|:---|:---|:---|
| **痛点** | "按文档装 Zig 0.15.2 编译直接失败" —— 文档信任链断裂 | #932 描述 |
| **使用场景** | 开发者尝试本地构建 NullClaw 网关，遭遇工具链版本不匹配 | #932 |
| **隐含不满** | 文档维护与代码演进不同步，反映 release process 中"文档门控"缺失 | — |
| **正面信号** | 外部贡献者主动提交大规模功能 PR（+4 个子系统），表明社区对架构认同度高 | #933 |

**关键洞察**: NullClaw 需建立 **"代码-文档-CI 版本三重校验"** 机制，避免 Zig 等快速演进语言带来的同步摩擦。

---

## 8. 待处理积压

| 条目 | 创建时间 | 阻塞时长 | 风险 | 行动建议 |
|:---|:---|:---|:---|:---|
| [#932](https://github.com/nullclaw/nullclaw/issues/932) | 2026-05-25 | **1 天**（但为今日唯一活跃 Issue） | 新开发者 onboarding 流失 | 24h 内确认并更新文档，同步检查 `getting-started` 全链路 |
| [#933](https://github.com/nullclaw/nullclaw/pull/933) | 2026-05-25 | **1 天** | 贡献者等待成本累积；PR 规模较大（4 个子系统）易产生合并冲突 | 优先安排架构评审，可拆分 media/A2A/memory/security 为独立 commit 便于 review |

> **维护者提醒**: 今日 2 个活跃项均为 5 月 25 日新增，尚无长期积压。但 PR #933 的 undefined 评论数提示可能存在数据抓取异常，建议人工复核实际讨论状态。

---

## 附录：数据健康度仪表盘

| 指标 | 数值 | 健康度 |
|:---|:---|:---|
| 日活跃 Issues | 1 | 🟡 偏低 |
| 日活跃 PRs | 2 | 🟢 正常 |
| 社区外部贡献占比 | 50%（1/2 PRs） | 🟢 健康 |
| 文档-构建同步 | 异常（#932） | 🔴 需修复 |
| 安全维护响应 | 及时（#931 已关闭） | 🟢 健康 |

**综合评级**: 🟡 **维护稳健，迭代待加速** —— 基础设施安全更新及时，但功能评审与文档修复的响应速度将决定社区动能能否持续。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-05-26

---

## 1. 今日速览

IronClaw 今日呈现**高强度开发态势**，50 个 PR 更新（40 个待合并）与 22 个 Issues 更新表明核心团队正在密集推进两大战略线：**attested-signing 安全基础设施**（13+ 个堆叠 PR）和 **Reborn 架构迁移**（WebUI/通道/认证子系统）。社区侧出现 3 个新功能请求和 2 个稳定性问题报告，但整体以内部工程推进为主。值得注意的是， crates.io 发布滞后问题（#3259）已持续 21 天未解决，下游依赖安全风险累积。

---

## 2. 版本发布

**无新版本发布**

> ⚠️ 关键阻塞：Issue #3259 指出 crates.io 仍停留在 0.24.0（2026-03-31），而仓库已打标至 v0.27.0（2026-04-29）。下游因 wasmtime 28.x CVE 被钉死在旧版本，**供应链安全风险显著**。

---

## 3. 项目进展

### 今日关闭的重要 Issues

| Issue | 内容 | 意义 |
|-------|------|------|
| [#3810](https://github.com/nearai/ironclaw/issues/3810) | Reborn Step 1: 认证产品契约、V1 行为清单与假服务测试 | 奠定 Reborn 认证体系契约优先的方法论基础 |
| [#3811](https://github.com/nearai/ironclaw/issues/3811) | Reborn Step 2: 原生产品认证与密钥组合接缝 | 建立生产级 Reborn 服务边界，WebUI/设置流可接入 |
| [#3812](https://github.com/nearai/ironclaw/issues/3812) | Reborn Step 3: 原生 OAuth 回调与设置续期 | 完成 Reborn 认证三步走，OAuth 流程闭环 |
| [#3580](https://github.com/nearai/ironclaw/issues/3580) | WebUI/Web Gateway 原生 Reborn 表面迁移 | **P0 优先级通道迁移里程碑**，Web 通道正式脱离 v1 遗留 |

> **Reborn 迁移进度评估**：认证子系统（#3289 下 3 个子任务）已全部关闭，WebUI 通道完成 Beta 路径基础，但端到端验收测试（#3613）仍开放，**尚未达到生产就绪**。

### Attested-Signing 基础设施（13 PR 堆叠推进）

| PR 批次 | 范围 | 状态 |
|---------|------|------|
| #3960-#3966, #3992-#3997, #4015 | 核心库（canonical hash → grant store → WebAuthn → chain signing → WalletConnect/NEAR provider → runtime glue → WebUI ingress → durable stores → production flip） | **全部待合并，形成完整技术栈** |
| #4054, #4055 | 多租户隔离测试 + TrustEnrollment 仪式 | 今日新增，补全运营模型 |

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 核心诉求 |
|:---:|-------|:----:|----------|
| 1 | [#3259](https://github.com/nearai/ironclaw/issues/3259) Publish 0.25.0–0.27.0 to crates.io | 9 | **下游供应链安全**：wasmtime CVE 修复无法通过 crates.io 分发，企业用户被迫 fork 或 vendor |
| 2 | [#3857](https://github.com/nearai/ironclaw/issues/3857) Slack ProductAdapter MVP | 4 | Reborn 生态扩展：企业 IM 集成需求 |
| 3 | [#3702](https://github.com/nearai/ironclaw/issues/3702) 二进制 E2E 测试框架 | 4 | 质量基础设施：Rust 集成测试与 Reborn 运行时 parity |

> **诉求分析**： crates.io 发布问题获得最多关注但零 👍，反映企业用户的沉默焦虑而非社区热情；Reborn 通道适配器（Slack）和测试框架讨论活跃，表明生态建设者正在跟进新架构。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR |
|:--------:|-------|------|:------:|
| 🔴 **高** | [#4030](https://github.com/nearai/ironclaw/issues/4030) | Discord WASM 通道静默停止响应，tokio workers 100% CPU 空转 | ❌ 无 |
| 🔴 **高** | [#4022](https://github.com/nearai/ironclaw/issues/4022)（PR） | #4014 引入的回归：HTTP 响应错误导致整个 agent run 终止，原为可恢复工具错误 | ✅ [#4022](https://github.com/nearai/ironclaw/pull/4022) |
| 🟡 **中** | [#3701](https://github.com/nearai/ironclaw/issues/3701) | v0.28.2 macOS 预构建：gateway 绑定失败，doctor 报告启用但实际未绑定 | ❌ 无 |
| 🟡 **中** | [#3447](https://github.com/nearai/ironclaw/issues/3447) | 夜间 E2E 持续失败（commit `030cfeb0`） | ❌ 无 |
| 🟡 **中** | [#4019](https://github.com/nearai/ironclaw/issues/4019)（追踪） | 工具执行不变量系统性绕过：chat/scheduler/routine/bridge 路径绕过审计漏斗 | ✅ [#4021](https://github.com/nearai/ironclaw/pull/4021)-[#4026](https://github.com/nearai/ironclaw/pull/4026)（5 个 PR 分步修复）|

> **稳定性评估**：Discord 100% CPU 问题（#4030）与夜间 E2E 失败（#3447）指向 WASM 通道运行时和测试基础设施的系统性脆弱性。#4014 回归显示快速迭代中的质量管控缺口，但修复响应迅速（次日 PR）。

---

## 6. 功能请求与路线图信号

| 请求 | 来源 | 与现有 PR 关联 | 纳入可能性 |
|------|------|--------------|:----------:|
| 自定义 Telegram API 主机（自托管 Bot API） | [#4034](https://github.com/nearai/ironclaw/issues/4034) | WASM 通道架构已支持多后端 | ⭐⭐⭐ 高 |
| 信用/速率限制透明度 + 失败请求不计费 | [#4043](https://github.com/nearai/ironclaw/issues/4043) | 计费系统重构未在 PR 中体现 | ⭐⭐ 中 |
| 多租户沙盒进程能力完整化 | [#4042](https://github.com/nearai/ironclaw/issues/4042) | #3948 已落地基础桥接，需扩展 | ⭐⭐⭐⭐ 很高（M4 模块核心）|
| Slack ProductAdapter | [#3857](https://github.com/nearai/ironclaw/issues/3857) | Reborn 通道迁移框架 #3577 | ⭐⭐⭐ 高（Lane 10 已规划）|
| 丰富 Reborn 运行时错误恢复上下文 | [#4059](https://github.com/nearai/ironclaw/issues/4059) | 无直接 PR，但 #4054/4055 同作者 | ⭐⭐⭐⭐ 很高 |

> **路线图信号**：Attested-signing 堆叠 PR 已扩展至 PR14（#4015）+ PR15（#4055），超出原计划的 12 PR，表明安全基础设施正在**范围蔓延**；Reborn 从"通道迁移"扩展到"运行时错误语义"和"租户沙盒"，架构野心扩大。

---

## 7. 用户反馈摘要

### 痛点
- **"黑箱计费"焦虑**：用户不清楚失败请求是否消耗额度，"可能的 token/credit 消耗"引发不信任（[#4043](https://github.com/nearai/ironclaw/issues/4043)）
- **发布渠道断裂**：crates.io 滞后迫使用户"猜测可用版本"，安全补丁无法及时获取（[#3259](https://github.com/nearai/ironclaw/issues/3259)）
- **运行时调试困难**：Discord 通道静默失败 + 100% CPU，无诊断信息（[#4030](https://github.com/nearai/ironclaw/issues/4030)）

### 场景需求
- **企业合规**：自托管 Telegram API 服务器满足数据驻留要求（[#4034](https://github.com/nearai/ironclaw/issues/4034)）
- **多链签名安全**：外部钱包用户需要"可信注册仪式"降低交互风险（[#4052](https://github.com/nearai/ironclaw/issues/4052) → [#4055](https://github.com/nearai/ironclaw/pull/4055)）

### 满意点
- Reborn 架构的**错误分类体系**（普通失败/可重试基础设施/可恢复完整性失败）获得认可，但用户要求"最大化有用性"（[#4059](https://github.com/nearai/ironclaw/issues/4059)）

---

## 8. 待处理积压

| Issue | 创建日期 | 天数 | 风险 |
|-------|:--------:|:----:|------|
| [#3259](https://github.com/nearai/ironclaw/issues/3259) crates.io 发布滞后 | 2026-05-05 | **21 天** | 🔴 **供应链安全 CVE 暴露** |
| [#3447](https://github.com/nearai/ironclaw/issues/3447) 夜间 E2E 失败 | 2026-05-10 | **16 天** | 🟡 质量信号恶化 |
| [#3701](https://github.com/nearai/ironclaw/issues/3701) macOS gateway 绑定失败 | 2026-05-16 | **10 天** | 🟡 平台兼容性 |
| [#3702](https://github.com/nearai/ironclaw/issues/3702) 二进制 E2E 测试框架 | 2026-05-16 | **10 天** | 🟡 Reborn 质量门槛 |

> **维护者提醒**：#3259 的 21 天停滞与 9 条评论形成鲜明对比，建议优先分配发布权限或建立自动化 crates.io 发布流水线；#3447 的 E2E 失败与 #4030 的 Discord 问题可能共享根因（commit `030cfeb0` 的 WASM 运行时变更），建议关联调查。

---

*日报生成基于 GitHub 公开数据 | nearai/ironclaw*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-05-26

> **项目**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
> **分析日期**: 2026-05-26 | **数据周期**: 过去24小时

---

## 1. 今日速览

LobsterAI 今日呈现**高强度开发态势**，单日 29 个 PR 更新（14 待合并/15 已关闭），远超常规开源项目活跃度。核心贡献者 `fisherdaddy` 与 `btc69m979y-dotcom` 主导了 OpenClaw 集成深化与稳定性修复，显示团队正加速推进与有道自研 Agent 框架的融合。Issues 侧仅 1 条新增产品建议，社区讨论相对沉寂，**"高代码产出、低社区声量"** 特征明显——需关注用户反馈通道是否畅通。无新版本发布，所有变更处于持续集成阶段。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### ✅ 今日合并/关闭的关键 PR（5 条）

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#2044](https://github.com/netease-youdao/LobsterAI/pull/2044) | fisherdaddy | 修复子 Agent 清理钩子阻塞问题 | **稳定性**：防止子 Agent 异常终止时挂起主流程 |
| [#2042](https://github.com/netease-youdao/LobsterAI/pull/2042) | btc69m979y-dotcom | OpenClaw 插件目录自动同步 | **生态打通**：OpenClaw Web/CLI 安装的插件自动纳入 LobsterAI 管理，消除双平台割裂 |
| [#2043](https://github.com/netease-youdao/LobsterAI/pull/2043) | fisherdaddy | 修复 GitHub Copilot Token 刷新导致 Gateway 重启 | **可靠性**：解决第三方认证集成中的级联故障 |
| [#2011](https://github.com/netease-youdao/LobsterAI/pull/2011) | btc69m979y-dotcom | 子 Agent 会话侧边栏树形展示 + 独立详情页 | **UX 跃迁**：多 Agent 协作场景的可观测性大幅提升 |
| [#2013](https://github.com/netease-youdao/LobsterAI/pull/2013) | btc69m979y-dotcom | 上下文窗口滑块预设吸附 + K/M 简写输入 | **易用性**：解决大模型上下文配置的数字输入痛点 |

**整体评估**：今日合并聚焦 **OpenClaw 生态深度整合**（插件/技能同步）与 **Agent 系统可观测性**（子 Agent 会话树），标志着项目从"单 Agent 对话工具"向"多 Agent 协作平台"演进。同时 Copilot 认证、Gateway 稳定性等基础设施加固，为规模化使用铺路。

---

## 4. 社区热点

### 🔥 最活跃讨论：Agent 记忆体系产品建议

| 指标 | 数据 |
|:---|:---|
| **Issue** | [#2046](https://github.com/netease-youdao/LobsterAI/issues/2046) |
| **标题** | OpenClaw/LobsterAI 产品建议：Agent 记忆体系 |
| **作者** | @X9-laser |
| **评论** | 1 |
| **👍** | 0 |

**核心诉求分析**：
- **痛点**：Session 级隔离导致 Agent 无跨对话记忆，用户被迫手动维护上下文
- **具体主张**：（按优先级）① 对话标题/元数据持久化到文件系统 ② Agent 自动关联历史 Session ③ 长期记忆检索机制
- **背后信号**：用户已将 LobsterAI 用于**长时间、深层次的复杂任务**，基础对话模式成为瓶颈。这与今日合并的"子 Agent 会话树"形成呼应——项目正在构建多 Agent 协作架构，但**记忆层尚未跟上编排层**的发展。

> **关联性提示**：该 Issue 与 [#2011](https://github.com/netease-youdao/LobsterAI/pull/2011)（子 Agent 会话展示）存在产品逻辑衔接，建议维护者将记忆体系纳入子 Agent 数据模型的后续迭代。

---

## 5. Bug 与稳定性

| 严重程度 | PR/Issue | 问题描述 | 状态 | 修复 PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#2049](https://github.com/netease-youdao/LobsterAI/pull/2049) | **Token 持续燃烧**：`Aborted` 工具结果无限循环回放，上游缺失中断保护 | **待合并** | 自身即 fix |
| 🔴 **高** | [#2050](https://github.com/netease-youdao/LobsterAI/pull/2050) | **Gateway Session Patch 超时阻塞 chat.send** | **待合并** | 自身即 fix |
| 🟡 **中** | [#2047](https://github.com/netease-youdao/LobsterAI/pull/2047) | **会话冻结**（多 area 涉及 renderer/main/cowork） | **待合并** | 自身即 fix |
| 🟡 **中** | [#2048](https://github.com/netease-youdao/LobsterAI/pull/2048) | LLM 流式输出空数据未过滤 | **待合并** | 自身即 fix |
| 🟢 **低** | [#2043](https://github.com/netease-youdao/LobsterAI/pull/2043) | GitHub Copilot Token 刷新触发 Gateway 重启 | **已合并** | ✅ [#2043](https://github.com/netease-youdao/LobsterAI/pull/2043) |

**风险评估**：`fisherdaddy` 今日集中提交的 4 个 fix PR 均围绕 **OpenClaw 运行时的稳定性与资源安全**，其中 **Token 燃烧**（[#2049](https://github.com/netease-youdao/LobsterAI/pull/2049)）涉及用户直接成本，建议优先 review 合并。会话冻结（[#2047](https://github.com/netease-youdao/LobsterAI/pull/2047)）影响面跨 renderer/main/cowork 三域，需关注回归测试覆盖。

---

## 6. 功能请求与路线图信号

| 来源 | 需求 | 技术可行性 | 纳入概率 | 判断依据 |
|:---|:---|:---|:---|:---|
| [#2046](https://github.com/netease-youdao/LobsterAI/issues/2046) | Agent 记忆体系（持久化 + 跨 Session 检索） | 中高 | **高** | 与多 Agent 架构演进强相关；子 Agent 会话树（[#2011](https://github.com/netease-youdao/LobsterAI/pull/2011)）已为数据层奠基 |
| [#2045](https://github.com/netease-youdao/LobsterAI/pull/2045) | OpenClaw 技能双向同步 + 插件技能保护 | 已实现 | **即将合并** | PR 已开，含"删除防重新同步"机制，产品逻辑完整 |
| [#1522](https://github.com/netease-youdao/LobsterAI/pull/1522) | 动态获取厂商模型列表（`GET /v1/models`） | 中 | 中 | 4 月 PR，stale 状态；但 GLM-5.1 等模型频发，需求紧迫性上升 |
| [#1526](https://github.com/netease-youdao/LobsterAI/pull/1526) | 会话颜色标注（7 色区分） | 已实现 | 中 | 4 月 PR，stale；UX 增强，非阻塞性需求 |

**路线图信号**：项目正沿 **"OpenClaw 一体化 → 多 Agent 协作 → 记忆/上下文增强"** 三轴推进。记忆体系（[#2046](https://github.com/netease-youdao/LobsterAI/issues/2046)）极可能成为下一版本核心卖点，建议维护者公开回应以收集更多场景输入。

---

## 7. 用户反馈摘要

> 基于 [#2046](https://github.com/netease-youdao/LobsterAI/issues/2046) 及历史 PR 描述提炼

| 维度 | 具体内容 |
|:---|:---|
| **痛点** | "每个新对话 session 独立存在，Agent 无法自动感知、检索、关联历史对话" —— **信息反复输入，重复劳动重** |
| **使用场景** | 长时间、跨 Session 的复杂任务（推测为研究分析、项目管理类深度工作） |
| **不满意** | ① 浏览器 IndexedDB 与 Agent 文件系统割裂（标题改完 Agent 看不到）② 记忆完全依赖用户手动维护 |
| **隐含期待** | Agent 应具备**主动性**——自动理解任务延续性，而非被动等待用户投喂上下文 |

**产品洞察**：用户正在用 LobsterAI 做 **"项目级"** 而非 **"问答级"** 的工作，这对 Agent 架构提出了更高要求。当前"对话即隔离"的设计哲学与用户需求存在张力。

---

## 8. 待处理积压

### ⚠️ 高风险 Stale PR（4 月提交，今日被批量更新但无实质推进）

| PR | 作者 | 问题 | 风险 | 建议动作 |
|:---|:---|:---|:---|:---|
| [#1510](https://github.com/netease-youdao/LobsterAI/pull/1510) | @MaoQianTu | 定时任务 IM 通知空 `delivery.to` 静默失败 | **数据丢失**：用户以为通知已发实际未送达 | 要求补充测试用例，或拆分 UI 校验与后端校验 |
| [#1514](https://github.com/netease-youdao/LobsterAI/pull/1514) | @MaoQianTu | QQ Bot 白名单 UI 缺失输入框 | **功能不可用**：allowlist 策略形同虚设 | 代码已完整，建议直接 review 合并 |
| [#1515](https://github.com/netease-youdao/LobsterAI/pull/1515) | @swuzjb | 日志导出 30 秒超时 | **运维阻塞**：无法排查线上问题 | 压缩算法优化方案已给出，需确认资源消耗 |
| [#1517](https://github.com/netease-youdao/LobsterAI/pull/1517) | @MaoQianTu | Copilot OAuth 轮询泄漏 + Token 丢失 | **认证失效**：用户反复重新授权 | 修复逻辑简洁，建议优先合并 |
| [#1521](https://github.com/netease-youdao/LobsterAI/pull/1521) | @wowiscrazy | 技能变更误触发 Gateway 重启 | **稳定性**：不必要的重启影响可用性 | 需确认与今日 [#2049](https://github.com/netease-youdao/LobsterAI/pull/2049) 等 fix 的关联性 |
| [#1524](https://github.com/netease-youdao/LobsterAI/pull/1524) | @swuzjb | 测试连接错误信息模糊 | **排障效率**：用户无法自助定位 | 国际化已完成，建议合并 |

**维护者提醒**：上述 6 个 PR 均为 **4 月初提交，stale 超 6 周**，今日被统一更新至 2026-05-25 时间戳但无代码变更，疑似自动化批量操作。其中 **[#1514](https://github.com/netease-youdao/LobsterAI/pull/1514)（QQ 白名单）、[#1517](https://github.com/netease-youdao/LobsterAI/pull/1517)（Copilot 轮询泄漏）** 为功能完全不可用级缺陷，建议本周内完成 review，避免社区贡献者流失。

---

> **日报生成说明**：本报告基于 GitHub 公开数据自动生成，PR 评论数显示为 `undefined` 系数据源限制，实际讨论热度可能高于表面数值。建议维护者优先关注 `fisherdaddy` 今日提交的 4 个稳定性 fix 的合并节奏。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-05-26

> **项目**: [moltis-org/moltis](https://github.com/moltis-org/moltis)  
> **分析日期**: 2026-05-26（覆盖 2026-05-25 24h 活动）

---

## 1. 今日速览

Moltis 今日展现出**高活跃度与强交付能力**：24小时内完成 **5 PR 合并/关闭**（仅1 PR 待审），同步推进了 **3 项核心功能落地**（非阻塞子代理、每轮工具控制、子代理预设编辑）及 **2 项关键修复**（Docker 构建、安全扫描告警）。Issues 侧 **3 关闭/2 新增**，净减少趋势表明社区反馈处理效率良好。唯一待审 PR #1071 为安全修复，预计很快合并。整体健康度：**优秀**，处于密集功能交付期。

---

## 2. 版本发布

### 🔖 [20260525.01](https://github.com/moltis-org/moltis/releases/tag/20260525.01)

| 属性 | 详情 |
|:---|:---|
| **发布日期** | 2026-05-25 |
| **版本号** | 20260525.01（日历版本标记，疑似每日构建/滚动发布） |

> **注**: 数据未提供详细 Release Notes。基于同日合并的 PR 推断，本版本可能包含以下变更：
> - **非阻塞子代理执行** (`spawn_agent nonblocking: true`)
> - **每轮工具控制** (`active_tools` + `tool_choice`)
> - **子代理预设 UI 编辑**
> - **Docker 构建修复**
> - **安全扫描修复（部分，PR #1071 待合并）**

**⚠️ 迁移注意事项**: 若从旧版本升级且使用 `spawn_agent`，需注意新 `nonblocking` 模式为可选参数，默认行为保持不变，但建议审查子代理调用逻辑以利用新异步能力。

---

## 3. 项目进展

### ✅ 今日合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#1067](https://github.com/moltis-org/moltis/pull/1067) | penso | **非阻塞子代理执行** | 解决长时子代理阻塞父会话的核心架构瓶颈，支持后台任务生命周期管理（`spawn_status`/`spawn_result`/`cancel_spawn`） |
| [#1069](https://github.com/moltis-org/moltis/pull/1069) | penso | **每轮工具控制** | 实现 `active_tools` + `tool_choice` 的精细化路由，直接回应 Issue #1011 的"低成本 LLM 可靠路由"诉求 |
| [#1070](https://github.com/moltis-org/moltis/pull/1070) | penso | **子代理预设可编辑** | 打通 Web UI 与 markdown 配置的双向同步，降低多代理工作流的管理门槛 |
| [#1068](https://github.com/moltis-org/moltis/pull/1068) | IlyaBizyaev | **版本号暴露至 Prompt** | 支持工作流中的版本追踪与兼容性处理 |
| [#1073](https://github.com/moltis-org/moltis/pull/1073) | sayotte | **Docker 构建修复** | 解决 `include_dir!` 宏在容器构建中的路径解析失败，恢复可复现构建 |

**📈 整体进展评估**: 今日合并的 5 个 PR 形成完整功能闭环——从**底层执行模型**（非阻塞）、**控制精度**（工具过滤）、**用户体验**（UI 预设编辑）到**基础设施**（Docker 修复）全面覆盖，标志着 Moltis 多代理编排能力进入成熟可用阶段。

---

## 4. 社区热点

| 排名 | 议题 | 热度指标 | 诉求分析 |
|:---|:---|:---|:---|
| 🥇 | [#868](https://github.com/moltis-org/moltis/issues/868) Landlock 调试日志 | 👍 1, 评论 1, 创建 30 天前仍活跃 | **安全可观测性诉求**：用户需要内核级沙箱访问控制的透明审计能力，用于生产环境故障排查 |
| 🥈 | [#1072](https://github.com/moltis-org/moltis/issues/1072) Cron 作业沙箱误配置 | 新建 0 评论 | **配置语义一致性**："Host" 执行目标实际落入沙箱，存在安全预期违背 |
| 🥉 | [#1011](https://github.com/moltis-org/moltis/issues/1011) 每轮工具控制 | 今日关闭 | **低成本 LLM 的可靠性工程**：小模型路由漂移问题已通过 PR #1069 解决 |

**深层信号**: 社区关注点正从"功能有无"转向**生产可靠性**（调试日志、执行语义正确性）和**成本优化**（小模型精准控制），表明用户群体从早期采用者向生产部署者扩展。

---

## 5. Bug 与稳定性

| 严重度 | 议题 | 状态 | 修复情况 | 影响范围 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#1072](https://github.com/moltis-org/moltis/issues/1072) Cron "Host" 目标误入沙箱 | **OPEN** | ❌ 无 fix PR | **安全预期违背**：标记为 Host 的定时任务实际受沙箱限制，可能导致权限不足失败或用户误以为已获完整主机访问 |
| 🟡 **中** | [#1022](https://github.com/moltis-org/moltis/issues/1022) LLM 模式更新时 WebSocket 断开 | **CLOSED** | ✅ 已修复（版本 20260525.01 或之前） | 实时通信稳定性 |
| 🟢 **低** | [#1073](https://github.com/moltis-org/moltis/issues/1073) Docker 构建失败 | **CLOSED** | ✅ PR #1073 修复 | 仅影响容器化构建流程 |

**⚠️ 紧急关注**: [#1072](https://github.com/moltis-org/moltis/issues/1072) 为今日新建的安全相关 bug，涉及执行隔离策略的配置解析错误，建议优先分配修复。

---

## 6. 功能请求与路线图信号

| 需求来源 | 功能方向 | 相关 PR | 纳入可能性 | 路线图信号 |
|:---|:---|:---|:---|:---|
| [#1011](https://github.com/moltis-org/moltis/issues/1011) | 每轮 `tool_choice` + `active_tools` | [#1069](https://github.com/moltis-org/moltis/pull/1069) | ✅ **已发布** | 多代理路由控制成为一等公民 |
| [#1004](https://github.com/moltis-org/moltis/issues/1004) | 非阻塞 `spawn_agent` | [#1067](https://github.com/moltis-org/moltis/pull/1067) | ✅ **已发布** | 异步执行基础设施完成 |
| [#868](https://github.com/moltis-org/moltis/issues/868) | Landlock 调试日志 | 无 | 🟡 高 | 安全可观测性待补全 |
| [#1070](https://github.com/moltis-org/moltis/pull/1070) | 子代理预设 UI 编辑 | 已合并 | ✅ **已发布** | 降低多代理配置门槛 |

**下一版本预测**: 基于今日交付节奏，下一版本（预计 20260526.01）可能聚焦：
- 安全修复（PR #1071 代码扫描告警）
- Cron 执行目标修复（#1072）
- Landlock 调试日志（#868 若有人认领）

---

## 7. 用户反馈摘要

### 💬 真实痛点提炼

| 来源 | 用户场景 | 痛点/诉求 |
|:---|:---|:---|
| [#1011](https://github.com/moltis-org/moltis/issues/1011) dmitriikeler | 使用 Claude Haiku-4-5 等低成本 LLM 构建多代理系统 | **小模型路由不可靠**："cannot reliably follow routing instructions"，需要强制工具选择而非依赖模型"自愿" |
| [#1004](https://github.com/moltis-org/moltis/issues/1004) dmitriikeler | 父代理调用长时子代理（如研究、代码生成） | **同步阻塞破坏交互体验**：父会话冻结数分钟，用户无法查看进度或取消 |
| [#1022](https://github.com/moltis-org/moltis/issues/1022) bsarkisov | LLM 模式动态切换 | **实时连接稳定性**：配置更新导致 WebSocket 断开，中断工作流 |
| [#868](https://github.com/moltis-org/moltis/issues/868) Cstewart-HC | 生产环境沙箱策略审计 | **黑盒调试困难**：Landlock 拒绝无日志，无法区分"策略生效"与"系统错误" |

### 😊/😞 满意度信号
- **满意**: 功能请求响应极快（#1011、#1004 均在一周内从提交到合并）
- **不满**: 安全相关可观测性长期缺失（#868 悬停 30 天），Cron 配置语义存在歧义（#1072）

---

## 8. 待处理积压

| 议题 | 创建时间 | 最后更新 | 积压天数 | 风险说明 |
|:---|:---|:---|:---|:---|
| [#868](https://github.com/moltis-org/moltis/issues/868) Landlock 调试日志 | 2026-04-24 | 2026-05-25 | **31 天** | ⚠️ 生产安全审计刚需，社区有 👍 支持，无维护者回应 |
| [#1071](https://github.com/moltis-org/moltis/pull/1071) 安全扫描修复 | — | 2026-05-25 | 待审 | 🔒 CodeQL 发现的 DOM 注入、明文密钥传输等问题，建议今日合并 |

**维护者行动建议**:
1. **优先审查 PR #1071** — 安全修复不应过夜
2. **指派 #868** — 30 天+ 的安全可观测性需求，可标记 `good first issue` 吸引贡献者
3. **跟进 #1072** — 新建 bug 涉及执行隔离策略，需安全/内核背景开发者介入

---

> **数据置信度**: 基于提供的 GitHub API 聚合数据，PR 评论数显示为 `undefined` 可能存在数据采集异常，建议核实。  
> **日报生成**: AI 智能体与个人 AI 助手领域开源项目分析师 | 2026-05-26

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-05-26

## 1. 今日速览

CoPaw（QwenPaw）项目今日保持**高活跃度**：24小时内处理42条Issues（关闭28条，新开/活跃14条）和44条PR（合并/关闭32条，待合并12条），社区清理效率显著。v1.1.9-beta.1版本发布，聚焦控制台体验优化。核心开发围绕**前端稳定性修复**（Markdown渲染、暗黑模式、工具调用显示）、**渠道功能增强**（QQ交互卡片、钉钉webhook修复）及**基础设施升级**（Tauri桌面端自动更新、测试覆盖率扩展）展开。长期积压的MCP架构认知问题、Windows/macOS桌面端性能问题仍在持续收敛中。

---

## 2. 版本发布

### v1.1.9-beta.1 已发布
| 属性 | 内容 |
|:---|:---|
| **版本号** | v1.1.9-beta.1 |
| **发布日期** | 2026-05-25 |
| **完整Changelog** | [Release页面](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.9-beta.1) |

**更新内容：**
- **feat(console)**: 插件安装/卸载成功后自动刷新页面 —— 解决插件状态不同步导致的UI陈旧问题 [[PR #4588]](https://github.com/agentscope-ai/QwenPaw/pull/4588)
- **chore(version)**: 版本号提升至 1.1.9b1 [[PR #4589]](https://github.com/agentscope-ai/QwenPaw/pull/4589)

**风险评估：** 本次beta为**低破坏性变更**，主要为体验优化。无迁移注意事项，建议测试插件热重载场景。

---

## 3. 项目进展

### 今日合并/关闭的关键PR（32条中的核心项）

| PR | 作者 | 进展说明 | 链接 |
|:---|:---|:---|:---|
| **#4578 feat: coding mode** | rayrayraykk | **重大功能交付**：内置类VS Code浏览器IDE，含实时代码编辑、Git版本控制、文件树 —— 项目从"对话助手"向"AI编程搭档"演进 | [PR #4578](https://github.com/agentscope-ai/QwenPaw/pull/4578) |
| **#4565 refactor(channel): 统一访问控制系统** | hongxicheng | 渠道架构升级：白名单/黑名单/待审批机制覆盖全渠道，Matrix渠道重构对齐其他渠道标准模式 | [PR #4565](https://github.com/agentscope-ai/QwenPaw/pull/4565) |
| **#4667 feat(QQ): 工具守卫交互审批卡片** | hongxicheng | QQ渠道补齐安全交互：键盘按钮式工具调用审批，对齐企业微信架构 | [PR #4667](https://github.com/agentscope-ai/QwenPaw/pull/4667) |
| **#4665 fix(DingTalk): webhook存储键冲突** | hongxicheng | 修复conversation_id后缀碰撞导致的多会话webhook串扰 —— **生产稳定性修复** | [PR #4665](https://github.com/agentscope-ai/QwenPaw/pull/4665) |
| **#4668 refactor(plugins): plugin.json Pydantic校验** | rayrayraykk | 插件清单从裸dataclass迁移至Pydantic模型，类型错误提前暴露，开发者体验提升 | [PR #4668](https://github.com/agentscope-ai/QwenPaw/pull/4668) |
| **#4671 perf(coding): 暗黑模式支持** | rayrayraykk | Coding Mode暗黑主题交付，补齐视觉一致性 | [PR #4671](https://github.com/agentscope-ai/QwenPaw/pull/4671) |
| **#4379 fix(console): Markdown表格换行渲染** | aqilaziz | 关闭重复上报的#4497/#2983，`<br>`标签在表格单元格内正确解析 | [PR #4379](https://github.com/agentscope-ai/QwenPaw/pull/4379) |
| **#4391 docs(quickstart): uv安装选项** | aqilaziz | 现代化Python工具链支持，降低新用户门槛 | [PR #4391](https://github.com/agentscope-ai/QwenPaw/pull/4391) |

**里程碑意义：** Coding Mode的合并标志着QwenPaw正式进入"AI原生IDE"赛道，与Cursor、Windsurf等形成差异化竞争（开源+自托管+多渠道集成）。

---

## 4. 社区热点

### 讨论最活跃的Issues（按评论数排序）

| 排名 | Issue | 评论 | 状态 | 核心诉求分析 |
|:---|:---|:---:|:---|:---|
| 1 | **#4620 Chat history disappeared** — 会话切换后聊天记录丢失 | 12 | 🔴 CLOSED | **数据可靠性焦虑**：用户认为"critical bug and existed for a long time"，反映历史版本在会话状态持久化上的系统性缺陷。虽已关闭，但需关注是否真正根因修复还是症状缓解。 | [Issue #4620](https://github.com/agentscope-ai/QwenPaw/issues/4620) |
| 2 | **#4644 Console UI: tool calls often not displayed until page refresh** — 工具调用不实时显示 | 10 | 🟡 OPEN | **实时性期望落差**：除read_file外大多数工具调用"大概率"不显示，无错误日志，属于前端状态管理/WS推送的隐性bug，调试困难。 | [Issue #4644](https://github.com/agentscope-ai/QwenPaw/issues/4644) |
| 3 | **#3640 MCP client TaskGroup异常导致Agent假死** | 8 | 🔴 CLOSED | **架构认知债务**：用户自查揭示MCP内部双系统架构（ReMe vs 其他）的复杂性，"无响应但不报错"是最难排查的故障模式。标记invalid暗示文档/架构透明性不足。 | [Issue #3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) |
| 4 | **#3445 MCP Configuration Not Working** | 6 | 🔴 CLOSED | **配置迷宫**：GUI配置的MCP服务器无法连接，根因是内部存在**两个MCP系统**（配置字段、组件、用途均不同），用户完全不知情。该Issue本身成为架构文档。 | [Issue #3445](https://github.com/agentscope-ai/QwenPaw/issues/3445) |
| 5 | **#3977 对话上下文没有记忆管理，memory_search报错** | 5 | 🔴 CLOSED | **API稳定性**：'list' object has no attribute 'get' 典型类型转换错误，反映数据管道中schema演进的兼容性问题。 | [Issue #3977](https://github.com/agentscope-ai/QwenPaw/issues/3977) |

**社区情绪信号：** 高频出现的"invalid"标签（#3640/#3445/#3977/#3592/#3390等）提示维护者与用户在**问题定性标准**上存在鸿沟——用户报告的真实故障被归类为"非bug"，可能损害社区信任。

---

## 5. Bug 与稳定性

### 今日活跃Bug报告（按严重程度排列）

| 优先级 | Issue | 描述 | 影响范围 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|:---|
| **P0** | **#4644** | 工具调用实时显示失效（除read_file外） | Console前端所有用户 | ❌ 无 | [Issue #4644](https://github.com/agentscope-ai/QwenPaw/issues/4644) |
| **P0** | **#4653** | 定时任务与用户消息共享session导致任务中断 | 依赖cron的用户 | ❌ 无 | [Issue #4653](https://github.com/agentscope-ai/QwenPaw/issues/4653) |
| **P0** | **#4675** | `file` block导致`reasoning_content`注入永久中断 | 使用文件+推理链的用户 | ❌ 无 | [Issue #4675](https://github.com/agentscope-ai/QwenPaw/issues/4675) |
| **P0** | **#4666** | 新建会话后Models配置页面丢失且无法加载 | 新建会话用户 | ❌ 无 | [Issue #4666](https://github.com/agentscope-ai/QwenPaw/issues/4666) |
| **P1** | **#4650** | GLM-5.1 via OpenAI兼容API不显示reasoning chain | GLM-5.1用户 | ❌ 无 | [Issue #4650](https://github.com/agentscope-ai/QwenPaw/issues/4650) |
| **P1** | **#4663** | `/models`命令在Telegram/Discord失效 | 多渠道用户 | ❌ 无 | [Issue #4663](https://github.com/agentscope-ai/QwenPaw/issues/4663) |
| **P1** | **#4587** | 桌面端关闭后遗留孤儿进程 | macOS桌面用户 | ❌ 无 | [Issue #4587](https://github.com/agentscope-ai/QwenPaw/issues/4587) |
| **P2** | **#4664** | Windows客户端启动时间40秒且无启动界面 | Windows桌面用户 | 🔄 #3729(任务栏图标)/#4158(重构建议) | [Issue #4664](https://github.com/agentscope-ai/QwenPaw/issues/4664) |

**稳定性评估：** 今日4个P0级Bug全部无Fix PR，且均涉及**核心用户体验路径**（工具调用可见性、定时任务可靠性、推理链完整性、配置持久化），项目当前存在**修复速度滞后于报告速度**的风险。

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 内容 | 纳入可能性 | 链接 |
|:---|:---|:---|:---|:---|
| **#4662** | Feature Request | 消息时间戳显示（精确到秒） | ⭐⭐⭐⭐⭐ 高 — 前端小改动，社区呼声明确，已有同类PR #4433(token用量显示)模式可复用 | [Issue #4662](https://github.com/agentscope-ai/QwenPaw/issues/4662) |
| **#4652** | Feature Request | 记忆系统"总结-关联-提醒"机制升级 | ⭐⭐⭐⭐ 中高 — 与长期记忆架构演进方向一致，但工作量大，可能纳入v1.2+ | [Issue #4652](https://github.com/agentscope-ai/QwenPaw/issues/4652) |
| **#4656** → **#4660** | Feature Request + PR | OpenCode provider模型列表收缩至交集（Zen ∩ Go） | ⭐⭐⭐⭐⭐ 高 — **PR已提交#4660待合并**，解决实际API错误 | [Issue #4656](https://github.com/agentscope-ai/QwenPaw/issues/4656) / [PR #4660](https://github.com/agentscope-ai/QwenPaw/pull/4660) |
| **#4674** | PR | 集成测试扩展+三级CI门禁 | ⭐⭐⭐⭐⭐ 高 — 质量基础设施，维护者重点方向 | [PR #4674](https://github.com/agentscope-ai/QwenPaw/pull/4674) |
| **#4669** | PR | Tauri桌面端自动更新 | ⭐⭐⭐⭐ 中 — 依赖#3813已合并，桌面端体验闭环关键 | [PR #4669](https://github.com/agentscope-ai/QwenPaw/pull/4669) |
| **#4622** | PR | DataPaw数据分析插件（12个BI技能） | ⭐⭐⭐⭐ 中高 — 插件生态扩展，与Coding Mode形成"分析+开发"组合拳 | [PR #4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) |
| **#3346** | PR | 文件操作回滚（OpenTask） | ⭐⭐⭐ 中 — 长期Under Review，涉及安全边界，需更多评审周期 | [PR #3346](https://github.com/agentscope-ai/QwenPaw/pull/3346) |

---

## 7. 用户反馈摘要

### 真实痛点提炼

| 主题 | 用户原声/场景 | 出现频次 |
|:---|:---|:---:|
| **"启动慢+无感知"** | "Windows系统，客户端启动时间过长，1.1.8版本启动需要40秒左右，而且启动过程中没有任何启动界面" (#4664)；"用python打包的打开太慢了" (#4158) | 🔥🔥🔥🔥 |
| **"记忆只记不学"** | "踩了坑还会再踩...从知识积累退化成了信息堆砌" (#4652) | 🔥🔥🔥 |
| **"截图滥用token"** | "不断截图不断压缩不断消耗token这是何意啊！怎么才能关掉这个？" (#4102) | 🔥🔥🔥 |
| **"MCP架构黑盒"** | "QwenPaw has two MCP systems internally" — 用户被迫成为架构师才能排障 (#3445) | 🔥🔥🔥 |
| **"进程管理混乱"** | "打开再关闭python进程不杀死，后台运行，每次打开GUI都会后台启动一个python进程" (#3607)；"shutdown leaves orphaned qwenpaw app backend processes" (#4587) | 🔥🔥🔥 |
| **"渠道状态不一致"** | "钉钉channel shows as disabled but is actually running" (#2703)；"只能发送到console" (#4604) | 🔥🔥 |
| **"Markdown渲染缺陷"** | "Line breaks in Markdown tables don't work. I'm writing this for the 3rd time" (#4497) | 🔥🔥 |

### 满意度信号
- **Coding Mode**获积极投入（rayrayraykk连续PR #4578/#4671）
- **Tauri桌面端**替代Python打包的呼声与投入同步（#3813已合并→#4669自动更新）

---

## 8. 待处理积压

### 长期未响应的高价值项

| 项目 | 创建时间 | 最后更新 | 阻塞原因 | 风险等级 | 链接 |
|:---|:---|:---|:---|:---|:---|
| **#3346 文件操作回滚** | 2026-04-13 | 2026-05-25 | Under Review 43天，涉及文件系统安全边界 | ⚠️ 中 — 功能完整性质疑 | [PR #3346](https://github.com/agentscope-ai/QwenPaw/pull/3346) |
| **#4267 macOS文件路径白名单** | 2026-05-13 | 2026-05-25 | Under Review 12天，安全模块评审严格 | ⚠️ 低 — 正常周期 | [PR #4267](https://github.com/agentscope-ai/QwenPaw/pull/4267) |
| **#4467 安全+Agent单元测试（967测试，89%覆盖率）** | 2026-05-17 | 2026-05-25 | Under Review 9天，测试量大评审耗时 | ⚠️ 低 — 质量投资 | [PR #4467](https://github.com/agentscope-ai/QwenPaw/pull/4467) |
| **#3729 Windows任务栏图标修复** | 2026-04-23 | 2026-05-25 | **已CLOSED但未解决根本问题** — #4664/#4631/#3405显示问题仍在 | 🔴 **高 — 关闭≠修复** | [PR #3729](https://github.com/agentscope-ai/QwenPaw/pull/3729) |

**维护者提醒：** #3729的关闭状态与持续出现的任务栏图标/启动性能问题（#4664/#4631/#3405）存在明显gap，建议复盘该PR的实际交付效果，考虑重新打开或创建跟踪Issue。

---

*日报生成时间：2026-05-26 | 数据来源：GitHub API /agentscope-ai/QwenPaw*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-05-26

## 1. 今日速览

ZeroClaw 今日保持**高活跃度**：24小时内 Issues 更新 26 条（19 活跃/新开，7 关闭），PR 更新 50 条（34 待合并，16 已合并/关闭），无新版本发布。社区焦点集中在**安全沙箱加固**（Bubblewrap/Fedora 修复落地）、**工具权限管控体系**（alex-nax 三连发：allowed_tools 执行层强制、skill 作用域工具提权、Composio 动作过滤）以及**网关 WebSocket 会话持久化**（Audacity88 主导）。值得关注的是，大型集成 PR #6848（zerocode TUI + beta-2）仍处于"DO NOT MERGE"状态，成为版本发布的关键阻塞项。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 作者 | 进展说明 | 链接 |
|:---|:---|:---|:---|
| **#6939** [CLOSED] | singlerider | **安全修复**：Canvas SVG 沙箱逃逸漏洞（GHSA-f385-f6h2-3gqj），移除 `allow-same-origin`、切换至 `srcdoc`、SVG 消毒。因安全敏感性已转私有 fork 处理 | [PR #6939](https://github.com/zeroclaw-labs/zeroclaw/pull/6939) |
| **#6940, #6941** [CLOSED] | singlerider | NO-OP PR，清理工作流 | [PR #6940](https://github.com/zeroclaw-labs/zeroclaw/pull/6940) |

### 已关闭的关键 Issues

| Issue | 作者 | 解决说明 | 链接 |
|:---|:---|:---|:---|
| **#5722** [CLOSED] | perlowja | **高危运行时修复**：默认 shell 沙箱配置阻断 Python skill 模式（v0.6.9），影响 InvestorClaw 等 FINOS 合规 skill | [Issue #5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) |
| **#6878** [CLOSED] | lovemonkey257 | **Bubblewrap Fedora 43 兼容**：修复 `/lib64` 缺失导致动态链接库加载失败 | [Issue #6878](https://github.com/zeroclaw-labs/zeroclaw/issues/6878) |
| **#6889** [CLOSED] | NiuBlibing | **可观测性增强**：reqwest 错误仅显示顶层消息、隐藏根因的问题修复 | [Issue #6889](https://github.com/zeroclaw-labs/zeroclaw/issues/6889) |
| **#6836** [CLOSED] | rockswang | **Windows 构建优化**：`setup.bat --minimal` 产出从 ~26MB 回归 ~6MB 预期 | [Issue #6836](https://github.com/zeroclaw-labs/zeroclaw/issues/6836) |
| **#6912** [CLOSED] | rifuki | **Telegram 通道修复**：v0.7.5 图片消息阻塞回复意图预检 | [Issue #6912](https://github.com/zeroclaw-labs/zeroclaw/issues/6912) |
| **#6751** [CLOSED] | JordanTheJet | **CI 修复**：PR 标题验证工作流自 #6396 以来持续 `startup_failure` | [Issue #6751](https://github.com/zeroclaw-labs/zeroclaw/issues/6751) |
| **#6315** [CLOSED] | robbito | **文档完善**：WhatsApp Web 与 Signal 配置指南 | [Issue #6315](https://github.com/zeroclaw-labs/zeroclaw/issues/6315) |

**整体推进评估**：今日关闭 7 个 Issues 覆盖安全、运行时、CI、文档四大域，但均为单点修复；架构级功能（zerocode TUI、插件统一化）仍在 PR 队列中等待集成。

---

## 4. 社区热点

### 评论最多：Logo  redesign 长期讨论
- **[Issue #4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710)** `mastwet` | 10 评论 | [OPEN]  
  **诉求分析**：社区对项目视觉识别有持续热情，但 issue 自 2026-03-25 创建至今处于 `status:blocked, needs-author-action` 状态——作者提供了设计方案却未获维护者明确反馈。反映开源项目设计决策的治理瓶颈：缺乏 RFC 式的设计评审流程。

### 高危安全讨论：私有 IP 解析绕过
- **[Issue #5122](https://github.com/zeroclaw-labs/zeroclaw/issues/5122)** `ArchBirdie` | 3 评论 | [OPEN]  
  **核心矛盾**：`allowed_private_hosts` 基于域名白名单，但 DNS 解析后私有 IP 仍被 `web_fetch` 阻断。这是"域名信任"与"IP 层安全"的架构冲突，需决策是否引入 DNS 预解析校验或分层授权模型。

### Gemini 提供商兼容性
- **[Issue #6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302)** `dmnkhorvath` | 3 评论 | [OPEN]  
  **技术债务**：历史序列化器违反 Gemini "首非系统轮必须是 user" 的不变式，影响 LiteLLM 桥接场景。标记 `provider:compatible` 的多个 issue 显示兼容层维护成本正在累积。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 严重程度 | 状态 | 修复 PR | 说明 |
|:---|:---|:---|:---|:---|:---|
| **P1** | [#5122](https://github.com/zeroclaw-labs/zeroclaw/issues/5122) web_fetch 私有 IP 绕过 | S2-降级行为 | OPEN | ❌ 无 | 安全策略失效，生产环境 SSRF 风险 |
| **P1** | [#6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302) Gemini 400 错误 | S1-功能损坏 | OPEN | ❌ 无 | 兼容层历史序列化 bug |
| **P1** | [#5636](https://github.com/zeroclaw-labs/zeroclaw/issues/5636) zai-cn 1214 错误 | S1-功能损坏 | OPEN | ❌ 无 | 上下文预裁剪后消息格式非法 |
| **P1** | [#6923](https://github.com/zeroclaw-labs/zeroclaw/issues/6923) Codex OAuth 回退 API Key | S2-降级行为 | OPEN | [#6908](https://github.com/zeroclaw-labs/zeroclaw/pull/6908), [#6938](https://github.com/zeroclaw-labs/zeroclaw/pull/6938) | **有 PR 待审**：别名解析丢失导致运行时回退 |
| **P2** | [#6884](https://github.com/zeroclaw-labs/zeroclaw/pull/6884) `max_response_size=0` 截断 | S2-降级行为 | **PR OPEN** | ✅ [#6884](https://github.com/zeroclaw-labs/zeroclaw/pull/6884) | 边界条件处理错误，XS 级修复 |

**稳定性健康度**：3 个 P1 bug 无关联 PR，其中 2 个为提供商兼容层问题，提示兼容层测试覆盖率不足。

---

## 6. 功能请求与路线图信号

| 功能 | Issue/PR | 作者 | 纳入可能性 | 关键信号 |
|:---|:---|:---|:---|:---|
| **Computer-use 桌面控制** | [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | NiuBlibing | ⭐⭐⭐ 高 | 对标 Codex/Peekaboo，RFC 已接受，社区需求明确 |
| **Skill 作用域工具提权** | [#6915](https://github.com/zeroclaw-labs/zeroclaw/issues/6915) + [#6924](https://github.com/zeroclaw-labs/zeroclaw/pull/6924) | alex-nax | ⭐⭐⭐⭐ 很高 | PR 已开，与 #6914/#6917 形成安全工具链闭环 |
| **网关 WebSocket 会话持久化** | [#6932](https://github.com/zeroclaw-labs/zeroclaw/issues/6932) + [#6933](https://github.com/zeroclaw-labs/zeroclaw/pull/6933) | Audacity88 | ⭐⭐⭐⭐ 很高 | 依赖 #6661，PR 已开且技术方案完整 |
| **统一插件目录 ("Everything is a plugin")** | [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) | theonlyhennygod | ⭐⭐ 中 | 长期架构方向，无近期 PR，需等 #6848 beta-2 落地 |
| **Nix flake 改进** | [#6906](https://github.com/zeroclaw-labs/zeroclaw/issues/6906) | wariuccio | ⭐⭐⭐ 中高 | 阻塞于 `needs-maintainer-review`，Nix 社区贡献活跃 |
| **Arcee AI 提供商** | [#6456](https://github.com/zeroclaw-labs/zeroclaw/issues/6456) | theonlyhennygod | ⭐⭐⭐ 中高 | 专注小型专家模型，差异化定位明确 |

**版本预测**：v0.7.6（skill UX 主题，[#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) 追踪）可能合并 #6924 skill 工具提权；v0.8.0 或见 computer-use 与网关持久化。

---

## 7. 用户反馈摘要

### 痛点
| 反馈来源 | 核心痛点 | 场景 |
|:---|:---|:---|
| `perlowja` (#5722) | **沙箱过度限制扼杀真实 skill 开发**：默认 shell 沙箱阻断 Python 包安装、网络请求等基础模式 | FINOS CDM 5.x 合规投资组合分析 skill 开发 |
| `rockswang` (#6836) | **文档与实现漂移**：Windows 最小构建文档声称 ~6MB 实际 ~26MB | 企业内网受限环境部署 |
| `vrurg` (#6923) | **OAuth 与配置系统割裂**：Codex OAuth 完成但运行时回退到 API Key | 企业 SSO 集成场景 |

### 满意点
- Bubblewrap/Fedora 修复快速落地（#6878 2 天内关闭）
- 安全响应机制有效（#6939 SVG 漏洞转私有 fork 处理）

### 治理不满
- `mastwet` (#4710) 10 评论无维护者决策反馈，设计贡献者流失风险
- `wariuccio` (#6906) 等 4 个 `needs-maintainer-review` 标签 issue 同日堆积，评审带宽瓶颈显现

---

## 8. 待处理积压

| 风险等级 | Issue/PR | 创建时间 | 阻塞原因 | 行动建议 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) 153 commit 批量回滚审计 | 2026-04-24 | 仅 2 评论，无恢复时间表 | 维护者需公布恢复优先级矩阵，避免"幽灵功能"持续影响用户预期 |
| 🔴 **高** | [#6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848) zerocode TUI + beta-2 | 2026-05-22 | 4 项已知问题未解决，明确标记 DO NOT MERGE | 分解为可独立合并的子 PR，降低集成风险 |
| 🟡 **中** | [#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) Logo redesign | 2026-03-25 | `needs-author-action` 但作者已提供方案 | 维护者明确设计评审流程或关闭 |
| 🟡 **中** | [#6906](https://github.com/zeroclaw-labs/zeroclaw/issues/6906) Nix flake | 2026-05-25 | `needs-maintainer-review` | Nix 社区贡献活跃，延迟评审损害生态扩展 |
| 🟡 **中** | [#6914](https://github.com/zeroclaw-labs/zeroclaw/issues/6914), [#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916), [#6917](https://github.com/zeroclaw-labs/zeroclaw/issues/6917) 安全工具链三连 | 2026-05-25 | 均 `needs-maintainer-review` | alex-nax 已形成完整安全加固方案，建议批量评审 |

---

*日报基于 GitHub 公开数据生成，PR 评论数因 API 限制显示为 `undefined` 已标注。*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*