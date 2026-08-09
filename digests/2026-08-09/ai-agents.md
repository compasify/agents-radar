# OpenClaw 生态日报 2026-08-09

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-08-09 00:51 UTC

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

# OpenClaw 开源项目动态日报 — 2026-08-09

## 1. 今日速览

过去24小时内，OpenClaw 社区活跃度极高：共产生 500 条 Issue 更新（新开/活跃 451 条，关闭 49 条）和 500 条 PR 更新（待合并 322 条，已合并/关闭 178 条），并发布了 2 个新版本（v2026.6.34、v2026.6.33）。当前项目处于高频迭代与安全加固并行的阶段：一方面新版聚焦浏览器/网络边界的安全强化，另一方面多个 P0 级稳定性问题（网关内存泄漏、升级后无法启动等）仍在积压，需维护者优先介入。社区讨论热度集中在消息静默丢失、会话状态损坏与内存增长问题上，用户对“故障可观测性”的诉求尤为强烈。

---

## 2. 版本发布

### v2026.6.34
- **聚焦方向**：浏览器与网络边界安全加固
- **主要内容**：
  - 沙箱化浏览器路由（#97958）
  - 受信任的 DNS 目标（#38290）
  - 自定义浏览器源（#103075）
  - 回环 Provider 端点（#110693）
  - 以上改动均会拒绝不安全的访问路径
- **致谢贡献者**：@eleqtrizit、@brunowowk、@mosidevv、@pgondhi987
- **破坏性变更**：无明显破坏性变更，属于底层安全策略收紧，升级后需留意自定义浏览器源/DNS 配置是否在允许名单内。

### v2026.6.33
- **聚焦方向**：网络与秘密边界防护
- **主要内容**：
  - Provider 流、Discord REST 响应、浏览器抓取、OAuth 路径的响应体大小上限控制（#96989, #95412, #99428）
  - 日志中剔除 Telegram 凭据，防止诊断信息泄露
- **致谢贡献者**：@wangmiao0668000666、@Alix-007
- **破坏性变更**：涉及日志格式调整，依赖日志内容做监控的用户需更新解析规则。

---

## 3. 项目进展

过去 24 小时共有 178 个 PR 被合并/关闭，交付效率较高。以下为本期重点关注的代表性变更：

- **fix(telegram): acquire polling queue before starting worker (#120800)** — 修复 Telegram 轮询 worker 与队列初始化竞态，避免队列初始化失败后 worker 和 HTTP 监听器泄漏存活。属于通道稳定性补强。
- **fix: label pasted text attachments "Edit as text" (#120799)** — 修复 Control UI 中粘贴超过 1000 字符的纯文本后，操作按钮误标为“Restore”的体验问题（关闭 #120767）。
- **fix(gateway): preserve responses output for media-only turns (#120789)** — 修复媒体-only 轮次（图片/音频无文本）时 Responses 端点返回完全空消息的问题，补齐与已有 streaming/chat 路径一致的兜底文案。
- **fix(test): gate long-context live shard by opt-in (#120798)** — 将高成本 OpenAI 长上下文 live 测试改为可选项注册，避免 release profile 因未启用环境变量而误报失败。
- **fix(qa): update Control UI scenario code references (#120801)** — 更新 QA 场景目录中已移动源码路径的 codeRefs，保证代码引用校验通过。

整体来看，项目在通道可靠性、UI 细节、测试基建三个方向均有实质推进；同时大量合并的 PR 集中在质量保障（QA）与发布流水线优化上，说明团队正在为更稳定的发布节奏打基础。

---

## 4. 社区热点

以下 Issues 在过去 24 小时引发最长讨论链（按评论数排序），反映社区核心痛点：

- **[Issue #116277] DeepSeek v4 Flash 静默回复失败 — 179 条评论（已关闭）**
  链接：https://github.com/openclaw/openclaw/issues/116277
  最热议题。2026-07-30 起，DeepSeek v4 Flash 模型静默失败，用户收到通用 fallback 回复“No reply was generated”。该问题带多个 triage 标签（P1、message-loss、linked-pr-open），目前虽已关闭（可能已修复或定位），但 179 条评论说明大量用户遭遇过同类“静默失败”场景，已形成对可观测性的集体诉求。

- **[Issue #7707] Feature Request: Memory Trust Tagging by Source — 31 条评论（开放）**
  链接：https://github.com/openclaw/openclaw/issues/7707
  社区强烈希望为记忆条目按来源（用户命令、网页抓取、第三方技能）打上信任标签，以防范“记忆投毒”攻击（恶意指令藏在不可信内容中，后续影响 Agent 行为）。该议题同时涉及安全与产品决策，目前处于 needs-maintainer-review。

- **[Issue #44925] Subagent 完成静默丢失 — 24 条评论（开放）**
  链接：https://github.com/openclaw/openclaw/issues/44925
  用户报告子代理任务在超时、完成通知失败等多种模式下静默丢失结果，无重试、无通知、无自动重启。这是典型的多故障点可靠性问题，评论区用户普遍表达对任务执行透明度不足的沮丧。

- **[Issue #91588] 网关内存泄漏：RSS 从 350MB 涨至 15.5GB — 22 条评论（开放，P0）**
  链接：https://github.com/openclaw/openclaw/issues/91588
  严重 P0 级内存泄漏，常规模拟使用下 2-3 天 RSS 即可从 ~350MB 涨至 15.5GB，触发 OOM 并被反复重启。用户反馈过程中给出了复现路径与环境细节，是目前最受关注的稳定性问题之一。

**热点分析**：讨论最集中的问题集中在“静默失败/丢失”与“内存失控”两类。用户的潜台词是：**不要求零故障，但要求故障发生时系统能明确报警、自动恢复、不吞结果**。这与“Bug 与稳定性”章节中的多项 P0/P1 问题一脉相承。

---

## 5. Bug 与稳定性

以下按严重程度排列今日值得关注的 Bug/回归/崩溃（均为开放状态）：

### P0（严重，需立即关注）

1. **网关内存泄漏 / OOM 崩溃** — Issue #91588
   - RSS 从 350MB 涨至 15.5GB，2-3 天即触发 OOM，launchd-handoff 反复重启。
   - 标签：P0、crash-loop、platinum hermit。
   - 链接：https://github.com/openclaw/openclaw/issues/91588
2. **升级至 2026.7.1 后网关无法启动** — Issue #108435
   - systemd、ollama、手动启动均报 “gateway did not start on 127.0...”。
   - 标签：regression、P0、ux-release-blocker、gold shrimp。
   - 链接：https://github.com/openclaw/openclaw/issues/108435
3. **启动迁移 preflight 阻塞升级（6.11 → 7.1）** — Issue #112395
   - 迁移表与 lease 为空，网关无法启动；数据库看似健康但实际为空。
   - 标签：regression、P0、ux-release-blocker、diamond lobster。
   - 链接：https://github.com/openclaw/openclaw/issues/112395

### P1（高优先级）

4. **DeepSeek v4 Flash 静默回复失败** — Issue #116277（已关闭，但需跟进是否彻底修复）
   - 链接：https://github.com/openclaw/openclaw/issues/116277
5. **Subagent 完成静默丢失（超时/无重试/无通知）** — Issue #44925
   - 链接：https://github.com/openclaw/openclaw/issues/44925
6. **网关堆内存空闲时涨至 1073MB+，cron 任务静默失败** — Issue #87109
   - 链接：https://github.com/openclaw/openclaw/issues/87109
7. **Codex OAuth 刷新失败可卡住 Agent 数小时** — Issue #86215
   - 链接：https://github.com/openclaw/openclaw/issues/86215
8. **MCP loopback 传输在网关重启后不自动重连** — Issue #98435
   - 链接：https://github.com/openclaw/openclaw/issues/98435

### 值得注意的社区修复进展

- PR #120717（cloud-workers）修复 SSH 断开时已接受的 workspace 结果因误判而被回滚的问题（Closes #120655）。
- PR #120664（openclaw resume）为 CLI 增加“附加到最近会话”的能力，改善跨端会话连续性。
- PR #120343（agents）修复嵌入式运行忽略 per-agent contextTokens 配置的上限问题。

---

## 6. 功能请求与路线图信号

以下功能请求在今日评论/更新中较为活跃，且部分已有 PR 跟进，有可能被纳入下一版本：

- **记忆信任标签（Memory Trust Tagging by Source）** — Issue #7707
  与安全强相关，已带 needs-security-review。若实施，将显著增强系统面对第三方内容投毒攻击的抵抗力。
  链接：https://github.com/openclaw/openclaw/issues/7707

- **主题会话家族（Topic-session families）** — Issue #90916
  一个助手/人格下多个命名主题通道，各自隔离近期上下文，仅通过显式规则共享持久记忆。该需求贴合多场景个人助手实践，评论区已有 8 条讨论。
  链接：https://github.com/openclaw/openclaw/issues/90916

- **按模型使用日志/成本跟踪** — Issue #13219
  用户希望原生支持 per-model usage 日志，避免自行解析 JSONL。对成本敏感的用户价值极高。
  链接：https://github.com/openclaw/openclaw/issues/13219

- **完全动态模型发现（OpenRouter 等）** — Issue #10687
  当前模型目录静态，无法覆盖 OpenRouter 等快速更新的模型列表。已有 10 条评论与 3 个 👍。
  链接：https://github.com/openclaw/openclaw/issues/10687

- **cron 自动重试** — Issue #49740
  用户希望 cron 失败后支持 --retry-count / --retry-delay。今日相关 PR #119139 正在推进（连续接纳到期 cron，Closes #119083）。
  链接：https://github.com/openclaw/openclaw/issues/49740

- **挂钩：路由前拦截（before_route_inbound_message）** — Issue #81061
  当前所有 hook 都在路由决策之后触发，缺少通道桥接/代理所需的前置拦截点。获得 3 个 👍，社区关注度较高。
  链接：https://github.com/openclaw/openclaw/issues/81061

- **TUI 可访问性：禁用 emoji/unicode 符号选项** — Issue #9637
  屏幕阅读器用户的可用性改进。
  链接：https://github.com/openclaw/openclaw/issues/9637

**路线图信号**：今日来自维护者的 PR 大量集中于“可恢复性”（云 worker SSH 断线、会话恢复、失败进度回填）和“跨端连续性”（resume CLI、设备配对），可以判断团队近期重点在提升生产环境的韧性与多端体验。

---

## 7. 用户反馈摘要

从今日活跃的 Issues 评论中提炼出以下用户真实反馈与诉求：

- **故障可观测性不足是第一痛点**：多个高热度 Issue（#116277、#44925、#87109、#92076、#92186）均涉及“系统显示正常但结果丢失/未送达”，用户反复强调需要“明确的失败提示”而不是通用兜底文案。
- **会话状态损坏影响信任**：#116022（beta.5 /new 无法恢复退役的 Codex 绑定 tombstone）、#118923（压实重试 24 次仍卡死）等案例让用户对长期会话的可靠性产生顾虑，评论区有“被迫 /new 重建一切”的抱怨。
- **内存问题在 macOS 上尤其突出**：#87109 的评论中用户反馈 Telegram forum bot + macOS 环境运行 12h+ 后堆内存稳定增长至 1073MB+，且无事发生时也不回落，直接导致 web_fetch/web_search 超时。
- **配置项冲突令人困惑**：#61009（exec 文档允许 auto 下 host=node 覆盖，但运行时拒绝）、#72370（workspace hooks 被静默拒绝并替换为空版本）等“文档与行为不一致”的问题让用户在集成时反复踩坑。
- **正向反馈**：PR #120640（保持切换视图时 Dashboard 状态不丢失）、PR #120799（粘贴文本操作按钮更名）等 UX 细节修复获得用户明确认可；有用户在相关 Issue 下回复“终于不用每次重建 widget 了”。

---

## 8. 待处理积压

以下为本期识别出的长期未解决或关键进展受阻的重要问题/PR，提醒维护者关注：

- **网关内存泄漏（#91588，P0）**：开放 61 天，无关联 fix PR，仍在持续引发 OOM。同为内存问题的 #87109 也仍开放。建议优先排查 gateway 层缓存/事件监听器生命周期。
- **AM 嵌入运行中止 memory_search 工具调用（#74586，P1）**：开放 102 天，虽然 fix-shape-clear 但需维护者决策与 live repro。
- **多通道消息丢失闭环问题**：#96834（WhatsApp 图片楔住消息泳道）、#96692（Slack 线程回复丢失）、#92186（WhatsApp 群组并发回复仅送达最新一条）、#92076（Subagent 完成投递失败）均无 fix PR，构成了多通道交付可靠性短板。
- **“clawsweeper-recovery-stuck” 标签组**：#92199、#8299、#72370、#106475、#119139 等均被打上该标签，暗示自动修复流程在这些问题上陷入停滞，需要人工介入。
- **PR #88504（multi-slot memory role architecture）**：大型内存架构重构 PR，开放 70 天，涉及 memory-core/lancedb/wiki 等扩展，状态仍为 “needs proof”，受 merge-risk 多项约束，需维护者明确评审意见。
- **PR #119762（Windows node 版本发布验证）**：作者自标 BLOCKED，因上游仓库无线下生产预发布版本，阻塞了 Windows 发布验证闭环。

---

**总结**：OpenClaw 项目当前处于高频迭代与安全加固并行期，发布节奏紧（24 小时 2 个版本），社区参与度极高。但 P0 级内存泄漏与升级阻断问题久未解决，且消息静默丢失类问题在多通道反复出现，已成为用户信任度的主要风险点。建议维护者将“网关稳定性”与“失败可观测性”列为下一阶段最高优先级，同时跟进 #116277 的修复验证。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析报告

报告周期：2026-08-09（过去 24 小时数据）  
覆盖项目：OpenClaw、NanoBot、Hermes Agent、PicoClaw、NanoClaw、NullClaw、IronClaw、LobsterAI、Moltis、ZeptoClaw、CoPaw、ZeroClaw

---

## 1. 生态全景

个人 AI 助手 / 自主智能体生态正处于**规模爆发与信任建设并行**的关键阶段。头部项目中 OpenClaw 单日 Issue/PR 更新量高达 500 条，Hermes Agent、ZeroClaw、IronClaw 亦达到 30~50 条量级，社区投入强度可见一斑。然而，**“静默失败”**已成为跨项目最集中的用户痛点：OpenClaw 的 DeepSeek 静默失败问题收获 179 条评论，NanoBot 用户遭遇 2 小时 100 万 token 不可见消耗，ZeroClaw 的 cron 输出被硬编码丢弃——用户已从“求功能”转向“求确定性与可追溯性”。与此同时，安全与可靠性正从加分项变为准入门槛：浏览器沙箱化、MCP 认证、文件路径访问控制、审批权限校验在多个项目中同时涌现，指向一个共同结论：**AI 助手的生产级落地，取决于故障是否可观测、权限是否可验证、结果是否可审计。**

---

## 2. 各项目活跃度对比

| 项目 | Issues（活跃 / 关闭） | PRs（待合并 / 合并·关闭） | Releases | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（451 / 49） | 500（322 / 178） | 2 | 🔴 高迭代高交付；P0 内存泄漏/升级阻断积压，安全加固与稳定性风险并行 |
| **Hermes Agent** | 50（38 / 12） | 50（33 / 17） | 0 | 🟡 PR 合入快，核心 Bug 收敛；桌面端更新与稳定性遭用户信任危机 |
| **ZeroClaw** | 50（48 / 2） | 50（48 / 2） | 0 | 🟡 高活跃，SOP 修复推进；S1 安全积压多，合并率低（4%） |
| **IronClaw** | 30（6 / 24） | 50（18 / 32） | 0 | 🟢 Reborn 架构收尾，合并率 64%，质量与交付均衡 |
| **CoPaw** | 18（16 / 2） | 50（47 / 3） | 0 | 🟡 高频反馈快速修复；MCP 阻塞/SQLite 崩溃等严重问题仍待解 |
| **NanoBot** | 5（5 / 0） | 9（5 / 4） | 0 | 🟢 方向清晰，token 可观测性需求两天内闭环；P0 MCP 崩溃需警惕 |
| **NanoClaw** | 8（5 / 3） | 6（3 / 3） | 0 | 🟢 功能扩展与修复并行，远程 MCP 已合并；Discord 审批 Bug 待合入 |
| **PicoClaw** | 3（2 / 1） | 4（4 / 0） | 0 | 🟡 开发活跃但合并瓶颈明显，最老 PR 悬挂 43 天 |
| **Moltis** | 1（1 / 0） | 1（0 / 1） | 0 | 🟢 稳定维护，Docker 沙箱文件工具两个月后终于修复 |
| **LobsterAI** | 1（1 / 0） | 3（3 / 0） | 0 | 🔴 低活跃维护期，核心 PR 和 Issue 均被 stale 标记 |
| **NullClaw** | 0 | 0 | 0 | ⚪ 无活动 |
| **ZeptoClaw** | 0 | 0 | 0 | ⚪ 无活动 |

> 注：Issues/PRs 数为过去 24 小时更新条目数，括号内为状态细分。

---

## 3. OpenClaw 在生态中的定位

**社区规模与交付效率的绝对头部**：OpenClaw 单日 500 条 Issue + 500 条 PR 更新，约为第二梯队（50 条量级）的 10 倍；24 小时发布 2 个版本、合并/关闭 178 个 PR，交付效率断层领先。它是生态中唯一兼具“平台级渠道矩阵 + 基础设施级安全加固 + 高频版本迭代”三重属性的项目。

**技术路线的差异化**：OpenClaw 将安全策略下沉到基础设施层——沙箱化浏览器路由、受信任 DNS 目标、回环 Provider 端点、响应体大小上限、日志凭据剔除——体现“不信任任何输入边界”的设计哲学。同类项目中，Hermes Agent 侧重本地会话状态与压缩预算，ZeroClaw 侧重 SOP 自动化与文件系统访问控制，IronClaw 侧重多智能体身份绑定，均未像 OpenClaw 这样系统地构建浏览器/网络边界防护层。

**对比短板**：P0 级网关内存泄漏（RSS 涨至 15.5GB）开放 61 天无修复 PR，升级阻断问题（#108435、#112395）直接影响用户信任，说明其稳定性治理滞后于功能迭代速度。这也解释了为何社区热点集中在消息静默丢失与内存失控——**规模越大，用户对可靠性缺陷的容忍度越低**。

---

## 4. 共同关注的技术方向

### 4.1 故障可观测性与“反静默失败”
| 具体诉求 | 涉及项目 |
|---|---|
| 模型静默回复失败，需明确失败提示与链路追踪 | OpenClaw（DeepSeek 179 评论）、Hermes（压缩后历史消失）、ZeroClaw（cron 输出被丢弃） |
| token 消耗不可见，需按调用方/模型/轮次拆分明细日志 | NanoBot（#5266）、IronClaw（#6989）、OpenClaw（#13219）、ZeroClaw（#9816） |
| 系统显示正常但结果丢失（子代理、媒体轮次、多通道消息） | OpenClaw（Subagent 静默丢失）、ZeroClaw（CLI cron 硬编码丢弃）、CoPaw（工具调用不显示） |
| 任务状态对终端用户透明（审批中/运行中/失败原因） | CoPaw（#6819）、ZeroClaw（#9656） |

### 4.2 稳定性：内存、崩溃与进程生命周期
- 网关/桌面端内存泄漏：OpenClaw（P0，61 天）、Hermes（macOS 桌面冻结）、ZeroClaw（CPU 空转）
- MCP 连接异常引发进程级崩溃：NanoBot（HTTP 530 跨任务崩溃）、CoPaw（瞬断后永久阻塞）、ZeroClaw（stdio 僵尸进程）
- 本地数据库损坏/崩溃：CoPaw（SQLite WAL SIGBUS）、Hermes（FTS 索引损坏）

### 4.3 MCP 生态从“接入”走向“生产级”
- OAuth 授权流程缺失：NanoBot（#5297）、PicoClaw（#3302）
- 连接生命周期管理（重连、超时、失败隔离）：OpenClaw（loopback 重连）、CoPaw（read_timeout 传递）、NanoBot（远程 HTTP 530）
- 工具集规模控制与预算：NanoBot（Mode-Model Schema 预算）
- 远程 MCP 支持成为基础能力：NanoClaw（HTTP/SSE 联合类型）、CoPaw（streamable_http）

### 4.4 安全边界与授权校验
- 配置“看似锁定实则全开”：ZeroClaw（WhatsApp business 模式回复所有群聊）
- 审批流程越权或失效：ZeroClaw（任意成员响应审批）、NanoClaw（Discord 审批按钮失效）、CoPaw（审批无提示）
- 路径访问控制失效：ZeroClaw（allowed_roots 下 forbidden_paths 不生效）
- 代理写入不可信内容注入系统提示：Hermes（#78515）、OpenClaw（Memory Trust Tagging）
- 日志/泄露检测误报：ZeroClaw（Solana 地址被整体脱敏）、Hermes（ANSI 序列绕过 redact）

### 4.5 自动化任务可靠性（cron / SOP / 多通道交付）
- cron 失败重试与结果投递：OpenClaw（#49740）、ZeroClaw（#9340）
- SOP headless 运行卡死：ZeroClaw（#9805，已开始修复）
- 多通道消息不丢失：OpenClaw（WhatsApp/Slack/Subagent 多个 issue）
- 长消息协议适配：PicoClaw（IRC 512 字节重组）

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构特征 |
|---|---|---|---|
| **OpenClaw** | 多通道 + 多模型聚合的平台型助手 | 自托管个人/团队，追求扩展性与生态覆盖 | 网关 + Provider 适配层 + 通道适配器；安全策略内置到网络边界 |
| **Hermes Agent** | 桌面优先，本地会话状态与压缩管理 | 桌面深度用户，重视长对话体验 | 本地状态库（FTS/分叉/压缩）+ 桌面应用 + 自动更新链路 |
| **IronClaw** | 多租户、身份绑定、审计 | 团队与企业级安全场景 | Reborn 架构，acting-identity 机制，outbound 投递可靠性 |
| **ZeroClaw** | SOP 自动化 + 安全边界管控 | 自动化运维、合规敏感用户 | workspace 隔离 + SOP headless 驱动，文件路径/审批权限精细控制 |
| **CoPaw** | 国内 Provider 生态 + 前端体验 | 中文用户，深度使用国内大模型 | Provider 兼容层 + 前端流式渲染，重视 Docker/Windows 便捷部署 |
| **NanoBot** | 轻量 Web 交互与可观测性快速响应 | Web 端轻量部署个人用户 | 单体 + WebUI + 网关，token 用量日志迅速落地 |
| **NanoClaw** | MCP 生态连接与配置管理 | MCP 重度用户 / 自动化配置场景 | 远程 MCP 联合类型 + CLI 组配置，强调外部 SaaS 集成 |
| **PicoClaw** | 多 IM 渠道扩展（WhatsApp/SimpleX/DeltaChat） | 极简部署、多渠道接入用户 | 轻量核心 + 渠道适配器；依赖升级敏感，合并周期长 |
| **Moltis** | 多沙箱兼容性（Docker/Apple Container/Firecracker） | 对沙箱隔离有明确要求的部署者 | 沙箱抽象层 + 路径翻译/回退机制，状态检测精细化 |
| **LobsterAI** | 工具行为确定性 | 对 LLM 工具调用可靠性不满的用户 | 维护期，核心诉求是“配置覆盖 > 模型决定” |

---

## 6. 社区热度与成熟度分层

### 第一梯队：高频迭代 / 平台扩张期（日 PR 量 50+）
- **OpenClaw**：发布节奏最快（24h 2 版），社区规模最大，但 P0 积压与安全问题并存，属于“规模驱动、稳定性追赶”阶段。
- **Hermes Agent**：PR 合入速度快，核心 Bug 收敛明显；但桌面端更新失败频率导致用户信任度受损，处于“质量口碑修复期”。
- **IronClaw**：Reborn 架构迁移收尾，合并率高（64%），是这几个中交付效率最健康的，正从重构转向稳定性加固。
- **ZeroClaw**：活跃度高但合并率仅 4%，S1 安全积压仍未清除，处于“安全审计与架构收敛”交叉阶段，交付效率需提升。

### 第二梯队：活跃迭代 / 质量巩固期（日 PR 量 < 20）
- **NanoBot**：对用户诉求响应极快（token 日志 2 天闭环），方向清晰，但 P0 MCP 崩溃风险需优先处理。
- **NanoClaw**：功能扩展（远程 MCP、Mattermost）与 Bug 修复并行，整体健康，Discord 审批修复待合并。
- **CoPaw**：反馈密度高、修复响应快，但 PR 大量积压（47/50 待合并），MCP 阻塞/SQLite 崩溃等严重问题仍在解决中。
- **Moltis**：稳定维护，修复谨慎，Docker 沙箱问题两个月闭环；新 Bug（Apple Container 误判）无 PR，节奏偏慢。

### 第三梯队：合并瓶颈 / 维护停滞期
- **PicoClaw**：社区贡献活跃（WhatsApp 修复、缓存优化），但最老 PR 悬挂 43 天，维护者响应速度成为瓶颈。
- **LobsterAI**：所有动态项均带 stale 标签，核心 PR（SQLite 优化）等待 130 天，处于事实性低维护状态。
- **NullClaw / ZeptoClaw**：无任何活动，可视为已停止维护。

---

## 7. 值得关注的趋势信号

1. **可观测性成为 AI 助手的新竞争力**  
   从 NanoBot 的 token 诊断日志到 OpenClaw 的静默失败追踪，再到 ZeroClaw 的 cron 结果可投递，社区正在推动从“黑盒生成”到“白盒可审计”的转变。**开发者应把 Metrics/Logging/Tracing（尤其是每轮次 token 与工具调用链路）当作一等公民功能设计**，否则将面临用户信任流失。

2. **安全左移：从外围防护到内置边界**  
   OpenClaw 的沙箱化浏览器路由、ZeroClaw 的 workspace 相对 forbidden 路径、Hermes 的代理写入技能扫描，共同指向“AI Agent 的输入/输出不能默认信任”这一原则。未来项目的差异化将体现在**文件系统、网络请求、审批授权、记忆来源**四个维度的默认安全配置上。

3. **MCP 进入“生产期”**  
   MCP 相关议题从“接入更多服务器”转向“连接可靠性、OAuth 授权、失败隔离、工具预算”。任何计划支持 MCP 的项目，都需要考虑**连接自动重连、超时熔断、敏感工具按需暴露**——NanoBot 的 HTTP 530 崩溃案例表明，一次远端故障就拖垮整个网关是不可接受的。

4. **成本治理需求爆发**  
   token 消耗透明化（NanoBot）、计费准确性（IronClaw）、预算限额触发（ZeroClaw）在多个项目同时出现，说明个人用户与企业用户都已将 AI 成本视为核心运营指标。**提供 per-model、per-agent、per-channel 的用量拆解，将成为标配能力**。

5. **自动化任务从“触发”走向“闭环”**  
   cron 重试、SOP headless 驱动、多通道结果投递、失败告警——ZeroClaw 的 SOP 修复和 OpenClaw 的 cron 自动重试请求表明，用户不再满足于“任务被调度”，而是要求**任务可追踪、失败可重试、结果不丢失**。这对所有含后台任务/定时器的 Agent 项目都适用。

6. **跨端连续性与恢复能力成为基础体验**  
   OpenClaw 的 resume CLI、Hermes 的会话分叉修复、IronClaw 的 outbound 投递恢复，共同指向一个重要需求：**Agent 的工作状态应独立于前端连接存在**（关闭页面不等于中断任务），并且支持随时切换设备继续会话。这与 ZeroClaw 用户反馈的“关闭网页导致 agent 停止”形成鲜明对比——前者代表趋势，后者代表痛点。

7. **多代理/多智能体协作开始强调身份与审计**  
   IronClaw 的 run-as-invoker 修复与多智能体审计，ZeroClaw 的代理可写技能注入担忧，OpenClaw 的记忆信任标签请求，均说明下一阶段的竞争点将从“单 Agent 能力”转向 **“多 Agent 协作时的权限边界与行为可追溯性”**。

---

*本报告基于各项目 2026-08-09 的 GitHub 公开动态生成，数据源包含 OpenClaw、NanoBot、Hermes Agent、PicoClaw、NanoClaw、IronClaw、LobsterAI、Moltis、CoPaw、ZeroClaw 等仓库。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-09

## 1. 今日速览

项目昨日整体活跃度较高：过去 24 小时新增/活跃 Issue 5 条，PR 动态 9 条，其中 4 个 PR 被合并/关闭，说明开发链路运转顺畅。当前最受社区关注的话题是 **token 消耗不可见** 问题——Issue #5266 引发了 13 条讨论，并直接催生了两个相关 PR（#5293 已合并、#5299 待合并），显示维护者对用户痛点响应迅速。同时在 Bug 侧，一个新的 **MCP 客户端崩溃** 问题（#5300）值得高度警惕，以及 Docker Compose 部署权限故障（#5295）影响面较大。整体而言，项目处于活跃迭代期，方向聚焦于可观测性、WebUI 体验与 MCP 生态完善。

---

## 2. 版本发布

昨日无新版本发布（Releases: 0 个）。

---

## 3. 项目进展

昨日共 **4 个 PR 被合并/关闭**，集中在可观测性、WebUI 体验与代码库健康度三方面：

| PR | 内容 | 影响 |
|---|---|---|
| [#5293](https://github.com/HKUDS/nanobot/pull/5293) `feat(usage)` | **每轮迭代 token 诊断日志**：在现有按日/来源聚合统计基础上，新增按 agent 迭代记录 token 消耗明细 | 直接回应 #5266，让"哪些调用烧掉了多少 token"变得可追溯 |
| [#5252](https://github.com/HKUDS/nanobot/pull/5252) `feat(webui)` | **临时聊天模式**：首条消息后才创建会话，支持多个临时对话，不落盘、不持久化，不污染历史记录 | 丰富了 WebUI 交互，适合一次性快速提问场景 |
| [#5294](https://github.com/HKUDS/nanobot/pull/5294) `fix(webui)` | 修复图片预览悬停缩放导致裁剪隐藏图像边缘的问题，保留缩放光标与键盘焦点样式 | 提升 WebUI 图片查看体验 |
| [#5296](https://github.com/HKUDS/nanobot/pull/5296) `refactor` | **移除已验证的死代码**：删除 19 个仓储内部死代码单元及 11 个测试专用接缝，保留 6 个需要兼容性决策的 API 敏感单元 | 清理技术债，为后续开发降低维护负担 |

**整体推进判断**：项目正从"功能堆叠"转向"精细化打磨"阶段，token 可观测性功能从 issue 提出到 PR 合并仅隔 2 天，闭环速度很快。

---

## 4. 社区热点

**Token 消耗的透明度问题（最热）**
- [#5266](https://github.com/HKUDS/nanobot/issues/5266) "Logs about token consumption" — **13 条评论**，用户反馈在无明显操作的情况下，2 小时内消耗了约 100 万 token，要求提供按调用方的 token 消耗日志。该 Issue 已驱动 #5293（合并）和 #5299（待合并）两个 PR，是当前社区最关心的可观测性需求。

**MCP OAuth 网页授权缺失**
- [#5297](https://github.com/HKUDS/nanobot/issues/5297) — 用户提出 MCP 服务器（如 XMind）需要 OAuth 网页授权，但当前 nanobot 无法完成此流程，建议通过 gateway 获取授权信息。这反映了 **MCP 生态接入真实业务应用** 的强烈诉求。

**Docker 部署故障**
- [#5295](https://github.com/HKUDS/nanobot/issues/5295) — 部署时容器报 `/usr/local/bin/entrypoint.sh: Permission denied`，导致网关无法启动。属于影响面较大的入门级使用障碍。

---

## 5. Bug 与稳定性

昨日 Bug 类报告按严重程度排序：

| 严重度 | Issue | 描述 | 状态 |
|---|---|---|---|
| **P0 级崩溃** | [#5300](https://github.com/HKUDS/nanobot/issues/5300) | 远程 MCP 返回 HTTP 530 时，anyio cancel scope 跨任务异常，导致：网关进程崩溃/卡死、任务泄漏、CPU 飙升、连接未隔离 | ⚠️ 无 fix PR，**新开高危** |
| **P1 部署阻断** | [#5295](https://github.com/HKUDS/nanobot/issues/5295) | Docker Compose 部署时 entrypoint.sh 权限拒绝，容器退出码 2 | ⚠️ 无 fix PR，已 2 条评论 |
| **P0 数据一致性** | [#5271](https://github.com/HKUDS/nanobot/pull/5271)（PR） | 后台任务持有旧 Session 引用，用户 `/new` 后陈旧 save 覆盖新会话数据（`priority: p0`） | 🟡 fix PR 已提交，仍在审查且标记 **conflict** |
| **P2 日志重复** | [#5206](https://github.com/HKUDS/nanobot/pull/5206)（PR） | 流式响应日志重复记录两次（`priority: p2`） | 🟡 fix PR 待合并，存在冲突 |

**关键风险提示**：#5300 的 MCP 崩溃是一个 **连锁炸弹**——一次远端故障就能拖垮整个网关进程，且与 #5271 的并发会话覆盖问题叠加，可能造成数据与稳定性双重隐患。建议维护者优先处理。

---

## 6. 功能请求与路线图信号

| 功能请求 | 来源 | 已有 PR / 信号 |
|---|---|---|
| **Token 级可观测性** | [#5266](https://github.com/HKUDS/nanobot/issues/5266) | ✅ #5293 已合并，[#5299](https://github.com/HKUDS/nanobot/pull/5299) 正在实现 WebUI 展示层 —— **基本确认进入下个版本** |
| **MCP OAuth 网页授权** | [#5297](https://github.com/HKUDS/nanobot/issues/5297) | 无对应 PR，属于 MCP 授权能力缺口，可能将围绕 gateway 提供远程授权中转 |
| **MCP Mode-Model Schema 预算** | [#5298](https://github.com/HKUDS/nanobot/issues/5298) | 提案：当 MCP 工具集过大时，对传入模型的工具定义做预算控制（如裁剪、分层暴露）。与 #5266 的"上下文成本"同源，未来可能与 token 诊断联动 |
| **计算机使用（Computer Use）** | [#4276](https://github.com/HKUDS/nanobot/pull/4276) | 已提交 PR：model-agnostic 的 `computer_use` + `browser` 原生工具，支持 PyAutoGUI / Playwright 两种后端。**若被合并，将极大扩展 nanobot 的 agent 能力边界** |

**路线图推断**：短期（1-2 个版本内）大概率纳入 **token 细粒度可视化**；中期可关注 **MCP 连接隔离与授权能力**（与 #5300 修复相关）；长期看，`computer_use` 一旦落地，nanobot 将明确切入"computer use agent"赛道。

---

## 7. 用户反馈摘要

- **"烧 token 烧得心疼"**（#5266 评论）：用户在没有感知的交互下，2 小时消耗百万 token，说明当前 **token 计费透明度过低** 已成为影响信任的关键痛点。用户明确提出"知道何时、哪个调用、消耗多少"的诉求。
- **"配置需要 OAuth 授权的 MCP 太难了"**（#5297）：用户举出 XMind 真实案例，希望 web 授权流程可以通过 gateway 完成，而不是局限于本机。反映了 **MCP 商用化过程中 OAuth 是刚需**。
- **"照文档部署却直接失败"**（#5295）：Docker Compose 一句话部署失败，对新手极不友好，且错误信息（Permission denied）容易让人误以为是镜像问题。
- **积极的信号**：#5293 相关 PR 在 Issue 提出两天内即被合入，用户可期待下个版本即可通过日志追踪 token 消耗，社区的诉求正在得到快速落地。

---

## 8. 待处理积压

| 项目 | 等待时长 | 说明 |
|---|---|---|
| [#4276](https://github.com/HKUDS/nanobot/pull/4276) `computer_use` PR | **自 2026-06-10 起，约 2 个月** | 大型功能性 PR，涉及 PyAutoGUI/Playwright 双后端，可能因设计评审或安全审查而长期搁置。建议维护者给出明确状态说明或分步合并计划 |
| [#5206](https://github.com/HKUDS/nanobot/pull/5206) 日志重复修复 PR | 自 2026-08-01，8 天 | 已标记 conflict，若项目近期有重构成分可能需 rebase。建议尽快解决冲突避免腐烂 |
| [#5271](https://github.com/HKUDS/nanobot/pull/5271) 会话数据覆盖 P0 修复 PR | 自 2026-08-06，3 天 | 标记 `priority: p0` 但同样存在 conflict。**数据一致性 bug 不应等待太久**，建议协调作者优先处理 |
| [ #5295 ](https://github.com/HKUDS/nanobot/issues/5295) Docker 部署权限问题 | 昨天新开 | 尚无回复或 workaround。**如果属于镜像打包导致的权限位缺失**，应快速修复 Dockerfile 或入口脚本 |

---

*本报告基于 2026-08-09 凌晨的 GitHub 数据生成，数据源：[HKUDS/nanobot](https://github.com/HKUDS/nanobot)。*

*项目健康度综合评估：🟢 活跃且方向清晰，但需尽快解决 P0 级 MCP 崩溃与 Docker 部署问题，同时疏通积压 PR 的冲突，避免高优先级修复腐烂。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-09

## 今日速览

过去24小时项目保持高强度活动：共更新 **50条 Issue（38条活跃，12条关闭）** 和 **50条 PR（33条待合并，17条已合并/关闭）**，无新版本发布。今日开发焦点集中在**会话状态与推理字段保留**、**上下文压缩预算修复**、**桌面端 Windows/更新流程修复**以及**安装器安全**四个方向。社区情绪呈现两面性：大批 PR 正在快速合入修复遗留问题，但多个高赞 Issue 直接表达了对桌面更新稳定性和产品信任度的不满（如 #81969），值得维护团队关注。

---

## 项目进展

今日有 17 个 PR 被合并/关闭，其中多枚直接修复了近期高优 Bug，显示项目正快速收敛问题。

**关键合入/关闭 PR：**

- **#82116** `fix(compression): charge stale thinking to the tail budget only on the newest assistant turn`  
  修复 #73624 中压缩预算将 19–24% 浪费在无适配器重放的陈旧思维块上的问题，提高真实对话保留率。  
  [PR #82116](https://github.com/NousResearch/hermes-agent/pull/82116)

- **#82109** `fix(state,cli,tui-gateway): keep reasoning fields intact across forks and branches`  
  解决 #57240：会话分叉和分支时 `reasoning_details` 等结构化推理字段被双重 JSON 编码，导致所有重放消费者静默丢弃。该修复合入后，分叉/分支的推理能力不再丢失。  
  [PR #82109](https://github.com/NousResearch/hermes-agent/pull/82109)

- **#82113** `fix(desktop): keep tool rows and notices out of the HUD band`  
  优化桌面 HUD 高度预算，防止工具面板、diff 面板和后台通知把用户等待的答案挤出视野。  
  [PR #82113](https://github.com/NousResearch/hermes-agent/pull/82113)

- **#82066** `fix(anthropic): keep OAuth requests on subscription limits`  
  将 Claude Code 账单指纹移植到 Hermes 的 Anthropic OAuth 适配器，确保订阅限流下 OAuth 流量与提示缓存兼容，避免误计费。  
  [PR #82066](https://github.com/NousResearch/hermes-agent/pull/82066)

- **#45014** `Make background review toolsets configurable`  
  将后台自我改进审查的工具白名单从硬编码改为配置项，允许用户纳入 MCP/插件工具，增强扩展性。  
  [PR #45014](https://github.com/NousResearch/hermes-agent/pull/45014)

- **#57248 / #57454** 两个历史 PR 今日关闭，可视为被 #82109 的方案取代，修复路径已收敛。

> 说明：今日未发布新版本，以上合入内容预计进入下一迭代。

---

## 社区热点

评论数最多的 Issue 集中在**桌面端体验**与**安全边界**两大主题。

1. **#63047 桌面应用完全无响应（18 条评论）**  
   在 macOS 27 beta 上，约 5 条消息后整个桌面应用（含设置）冻结，用户只能碰运气解冻。这是当前社区最热的痛点，且发生在 beta 系统上，兼容性风险高。  
   [Issue #63047](https://github.com/NousResearch/hermes-agent/issues/63047)

2. **#78515 后台审查写入未扫描技能，注入进系统提示（6 条评论）**  
   安全相关的防守纵深提案，指出代理编写的技能默认绕过技能守卫扫描，随后进入每个会话的系统提示，形成潜在的提示注入面。  
   [Issue #78515](https://github.com/NousResearch/hermes-agent/issues/78515)

3. **#81969 “更新前我很害怕，每次更新都搞坏一切”（6 条评论）**  
   用户对更新质量的强烈情绪化反馈，直指“你们推送前不做测试吗？”，反映了用户对产品稳定性的信任危机。  
   [Issue #81969](https://github.com/NousResearch/hermes-agent/issues/81969)

4. **#75778 桌面更新产生重复实例，失败窗口掩盖真实更新（6 条评论）**  
   更新点击后制造两个 `hermes-setup` 进程，第二个因抢占标记失败，反而弹窗误导用户，真实更新一直在后台运行。  
   [Issue #75778](https://github.com/NousResearch/hermes-agent/issues/75778)

5. **#70846 压缩导致会话历史对人也消失（5 条评论，1 👍）**  
   为节省 agent 上下文而压缩，结果把人类可读的历史记录也清了，用户无法复盘长对话。  
   [Issue #70846](https://github.com/NousResearch/hermes-agent/issues/70846)

> 热点诉求总结：桌面端稳定性与更新流程可靠性是当前用户最敏感的区域；其次是安全边界上的“代理写入不可信内容”问题。

---

## Bug 与稳定性

今日无新版本发布，但收到大量 Bug 报告。按严重程度排列如下：

### P1（高严重度，强烈影响使用）

| Issue | 描述 | Fix PR 状态 |
|---|---|---|
| [#63047](https://github.com/NousResearch/hermes-agent/issues/63047) | macOS 27 beta 上桌面应用 5 条消息后完全无响应 | 暂无 |
| [#81969](https://github.com/NousResearch/hermes-agent/issues/81969) | 用户报告“每隔一次更新就变砖”，更新质量令人担忧 | 暂无 |
| [#75778](https://github.com/NousResearch/hermes-agent/issues/75778) | 桌面更新手误产生重复 `hermes-setup` 进程，失败窗口掩盖真实更新 | 相关 PR [#81983](https://github.com/NousResearch/hermes-agent/pull/81983) / [#82118](https://github.com/NousResearch/hermes-agent/pull/82118) 修复 Windows 安装脚本问题 |
| [#63386](https://github.com/NousResearch/hermes-agent/issues/63386) | macOS `state.db` FTS 索引损坏，会话搜索与交接功能受影响 | 暂无 |

### P2（中等严重度，影响特定场景）

| Issue | 描述 | Fix PR 状态 |
|---|---|---|
| [#40801](https://github.com/NousResearch/hermes-agent/issues/40801) | Cron 脚本路径守卫拒绝“默认配置档脚本目录”中的合法任务（#32091 的反向问题） | 暂无 |
| [#70846](https://github.com/NousResearch/hermes-agent/issues/70846) | 压缩清理了人类可读的历史消息，无法回顾复盘 | 暂无 |
| [#81322](https://github.com/NousResearch/hermes-agent/issues/81322) | `lifecycle_guard` 对 ELF 二进制路径误报 `embedded null byte`，良性命令被拒 | 暂无 |
| [#82001](https://github.com/NousResearch/hermes-agent/issues/82001) | 压缩后 agent 继续写入时，错误提示“磁盘已满”，实则会话身份交接失败 | 暂无 |
| [#81012](https://github.com/NousResearch/hermes-agent/issues/81012) | 安全：ANSI CSI/SGR 序列可绕过 redact 前缀掩码（仅剥 ESC 字节，留下 `m` 粘在 token 上） | 暂无 |
| [#81995](https://github.com/NousResearch/hermes-agent/issues/81995) | MCP 冷启动停滞导致工具调用悬挂 300 秒，无 fail-fast 机制 | 暂无 |
| [#81162](https://github.com/NousResearch/hermes-agent/issues/81162) | 自动语音回复同步阻塞文本响应，TTS 后端慢时整轮卡顿 | 暂无 |
| [#81430](https://github.com/NousResearch/hermes-agent/issues/81430) | `hermes memory status` 报告“Memory tool disabled”，但实际内存注入与 toolset 均正常 | 暂无 |
| [#82074](https://github.com/NousResearch/hermes-agent/issues/82074) | Podman + SELinux 下自动挂载的技能目录因缺少 `:z` 而不可读 | 暂无 |

### P3（低严重度，体验或边缘场景）

- #78807 DeepSeek V4 Flash 无限推理循环  
- #43997 npm 11 `allow-scripts` 警告  
- #62171 Linux 桌面更新与 npm 12 不兼容  
- #81846 桌面 fork 按钮偶尔缺失

### 已关闭/已修复的 Bug

- **#73624** 压缩预算计错陈旧推理 → 由 **PR #82116** 修复  
- **#57240** 分叉会话推理字段双重编码 → 由 **PR #82109** 修复  
- **#72641** Windows 上 `/diff` 因 git 输出非 ASCII 抛 UnicodeDecodeError → 已关闭（修复）

---

## 功能请求与路线图信号

今日社区提出的新功能需求与已有 PR 形成多条路线图信号：

1. **内存生命周期管理（#78307）**  
   用户请求为内置内存（`MEMORY.md` / `USER.md`）增加检查、去重、冲突检测、可恢复清理等维护 UX。  
   当前有 PR **#51152**（memory core/extended 分层 + search action）在排队，两者方向一致，未来版本可能收敛。  
   [Issue #78307](https://github.com/NousResearch/hermes-agent/issues/78307) | [PR #51152](https://github.com/NousResearch/hermes-agent/pull/51152)

2. **Browser Use CLI 3.0 模式（PR #81958）**  
   将 12 个 `browser_*` 工具收敛为单一 `browser_exec` 驱动，并可与所有 CDP 后端组合。若合入，将大幅简化浏览器工具链。  
   [PR #81958](https://github.com/NousResearch/hermes-agent/pull/81958)

3. **统一搜索（Cmd+K）（#49103）**  
   用户希望 Cmd+K 不仅能搜会话，还能搜文件、会话历史和技能，类似 Spotlight。尚未见对应 PR，可能进入 backlog 讨论。  
   [Issue #49103](https://github.com/NousResearch/hermes-agent/issues/49103)

4. **Cron 交付多选（#72337，今日已关闭）**  
   Web UI 中 Cron 交付方式从单选下拉改为多选，允许同时“本地保存+推送聊天”。已关闭，可能已在其他 PR 中实现。  
   [Issue #72337](https://github.com/NousResearch/hermes-agent/issues/72337)

5. **通用语音服务器网关（PR #27040，开放中）**  
   新增 `voice_server` 平台，通过 WebSocket 对接外部语音运行时，可连接电话/WebRTC 会议。该 PR 从 5 月起开放，今日仍活跃，说明功能模块还在打磨。  
   [PR #27040](https://github.com/NousResearch/hermes-agent/pull/27040)

> 路线图信号：内存管理、浏览器工具统一、跨平台安装器/更新流程修复，是三个最明确的演进方向。

---

## 用户反馈摘要

从今日活跃 Issues 中提炼真实用户声音：

- **桌面稳定性质疑**：“每次更新都搞坏一切，我不断丢失配置，这让我对产品失去信心。” —— #81969  
- **更新流程困惑**：用户看到“失败”窗口，实际上更新在后台正常进行，但以为出错了。—— #75778  
- **长对话复盘困难**：“压缩后历史凭空消失，想做文档记录根本不可能。” —— #70846  
- **macOS 崩溃影响工作流**：5 条消息后全 UI 冻结，连设置都打不开，“只能心怀侥幸等待解冻”。 —— #63047  
- **安全担忧（专业用户）**：代理可写技能且不经扫描直接进系统提示，用户认为这是防线漏洞，值得提交 Issue 而非依赖默认策略。—— #78515  
- **模型行为不满**：DeepSeek V4 Flash 在开放式问题上陷入无限推理循环，用户感到挫败。—— #78807  
- **对升级的模板式“恐惧”**：多个用户在 npm 12、Windows 桌面构建等更新路径上遇到失败，形成“更新=冒险”的社区心理。

整体来看，用户对项目的**功能理念**仍抱有信心，但对**交付质量**（尤其是桌面端与更新路径）明显不满，安全敏感用户也期待更强的默认防护。

---

## 待处理积压

以下几项属于”创建超过 1 个月且今日仍有讨论或仍处于未解决状态“的重要项，建议维护者优先关注：

1. **#40801** — Cron 脚本路径守卫误伤默认配置档脚本（创建 2026-06-06，P2）  
   长期未修复，影响使用 Cron + 多配置档的用户。  
   [Issue #40801](https://github.com/NousResearch/hermes-agent/issues/40801)

2. **#43997** — npm 11 `allow-scripts` 警告（创建 2026-06-11，P3）  
   虽是警告，但 npm 未来可能强制拦截未审查脚本，需提前声明依赖安装脚本白名单。  
   [Issue #43997](https://github.com/NousResearch/hermes-agent/issues/43997)

3. **#49103** — Cmd+K 统一内容搜索（创建 2026-06-19，P3）  
   无障碍讨论，尚未看到实现 PR，属于常有用户提及的易用性增强。  
   [Issue #49103](https://github.com/NousResearch/hermes-agent/issues/49103)

4. **#57752** — 会话 DB 自动清理与 VACUUM 默认关闭且无警告（创建 2026-07-03，P3）  
   长期运行后 `state.db` 膨胀问题，需要产品决策是否默认开启。  
   [Issue #57752](https://github.com/NousResearch/hermes-agent/issues/57752)

5. **长期开放 PR #27040** — 通用 voice_server 网关（创建 2026-05-16）  
   横跨两个多月的功能 PR，至今仍未合入，可能与评审周期长有关，需明确状态（继续推进或关闭）。  
   [PR #27040](https://github.com/NousResearch/hermes-agent/pull/27040)

6. **#62171** — npm 12 稳定版破坏 Linux 桌面更新（创建 2026-07-10，P3）  
   今天仍有讨论（更新 08-09），是否已在 #81527 / #82118 中覆盖，需要维护者确认。  
   [Issue #62171](https://github.com/NousResearch/hermes-agent/issues/62171)

---

**总结**：Hermes Agent 今日开发节奏紧凑，PR 合入速度快（修复推理字段、压缩预算、Anthropic OAuth 等核心问题），但桌面端稳定性与更新体验仍是用户信任的短板。安全边界议题（技能注入绕过、redact 绕过）开始获得关注，建议下一版本优先修复 P1 系列问题，并对更新路径做一次系统性加固。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-08-09

## 1. 今日速览

过去24小时 PicoClaw 项目活跃度中等偏活跃：有 3 条 Issue 更新（2 条新开/活跃、1 条关闭），4 条 PR 更新但全部处于待合并状态，无新版本发布。值得关注的是昨日社区提交了两个新的修复型 PR（#3320 WhatsApp 客户端过时修复、#3321 前缀缓存优化），表明开发者仍在积极修复问题；但 PR 审核/合并效率明显滞后，最老 PR（#3193）已悬挂超过 6 周未合入。整体来说，项目处于「开发活跃但合并瓶颈明显」的状态，社区贡献热情与维护者响应速度之间存在落差。

---

## 2. 版本发布

**无新版本发布。** 最近一次已知版本仍为 0.3.1（Issue #3292 中用户报告所使用版本）。建议关注后续 releases 页面获取更新。

---

## 3. 项目进展

**今日无 PR 被合并或关闭**，但以下待合并 PR 值得追踪，均处于 OPEN 状态：

| PR | 内容 | 状态 | 说明 |
|---|---|---|---|
| [#3321](https://github.com/sipeed/picoclaw/pull/3321) | fix(agent): move dynamic context after history to preserve prefix caching | OPEN | 将 `## Current Time` 等动态上下文块移到会话历史之后，以避免破坏前缀缓存。对使用 Anthropic/OpenAI 前缀缓存的用户有实际收益，可降低延迟与成本。 |
| [#3320](https://github.com/sipeed/picoclaw/pull/3320) | fix(deps): bump whatsmeow to unblock WhatsApp "client outdated (405)" | OPEN | 升级 whatsmeow 依赖到新版本，修复 WhatsApp 原生频道因客户端版本过旧而被拒连的问题。 |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | refactor(deltachat): cleanup implementation, documentation -200LOC | OPEN | 重构 deltachat 频道实现，移除旧特性与硬编码，净减约 200 行代码，并补充完整文档。 |
| [#3193](https://github.com/sipeed/picoclaw/pull/3193) | Added simplex channel type | OPEN | 新增 SimpleX 聊天协议支持，扩展项目支持的 IM 渠道矩阵。 |

**关键观察：** 今日虽无合并，但 #3320 和 #3321 都是针对真实用户痛点的修复，且 PR 描述质量较高（包含问题复现细节与解决思路），若维护者及时审核可显著提升 WhatsApp 频道稳定性和推理缓存效率。

---

## 4. 社区热点

今日讨论最活跃的是 **[Issue #3287：Better support long messages in IRC](https://github.com/sipeed/picoclaw/issues/3287)**（4 条评论，创建 2026-07-22）：

- **诉求核心：** 用户希望 PicoClaw 能将 IRCv3 中因 512 字节限制而自动拆分的长消息，在逻辑上重新拼接为一条完整消息来理解/处理。
- **分析：** 这是一个典型的「协议限制→用户体验」问题。IRC 客户端的自动拆分会导致 AI 将一条消息误认为多条独立消息，影响上下文理解和响应质量。该 Issue 已被标记为 `stale`，但仍有 4 条评论，说明有用户持续关注。建议维护者评估 IRC 频道处理流程中的消息重组逻辑，或将此问题归类为「协议适配增强」。

另有 **[Issue #3302：Support OAuth 2.1 for MCP servers](https://github.com/sipeed/picoclaw/issues/3302)** 有 2 条评论，同样被标记 `stale`，需求方明确引用了 #2546 作为参考，属于「Nice-to-Have」增强项，讨论热度略低。

---

## 5. Bug 与稳定性

今日共 2 条 Bug 相关动态，按严重程度排列：

| 严重程度 | Issue / PR | 描述 | 状态 |
|---|---|---|---|
| **高** — 核心通信渠道不可用 | [PR #3320](https://github.com/sipeed/picoclaw/pull/3320) | WhatsApp 原生频道因 `whatsmeow` 依赖版本过旧，被服务器以 `Client outdated (405)` 拒绝连接，且无自动重连逻辑。**已有修复 PR 待审核。** | OPEN（待合并） |
| **中** — 资源占用过高 | [Issue #3292](https://github.com/sipeed/picoclaw/issues/3292) | 用户报告在 Web 聊天界面中聚焦输入框时 CPU 占用率过高。环境为 PicoClaw 0.3.1 + Go 1.26 + Firefox。**已关闭**，无相关修复 PR 关联。 | CLOSED |

**补充：** Issue #3292 虽已关闭，但问题本身可能仍存在于 0.3.1 版本中。关闭原因未明确说明，若为「重复报告」或「过期清理」，建议维护者在关闭时补充 comment 说明后续处理方式，避免用户困惑。

---

## 6. 功能请求与路线图信号

今日有两个明确的功能请求处于开放状态，且均被标记为 `stale`：

| Issue | 功能 | 类型 | 状态 | 对应/关联 PR |
|---|---|---|---|---|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | IRC 长消息智能拼接 | Enhancing | OPEN，4 评论 | 无直接关联 PR |
| [#3302](https://github.com/sipeed/picoclaw/issues/3302) | MCP Server OAuth 2.1 支持 | Nice-to-Have | OPEN，2 评论 | 引用了 #2546（可能已实现 OAuth 1.0/2.0） |

**路线图信号分析：**

- 两个功能请求均已悬挂超过两周且 Marked stale，说明维护者尚未将其纳入短期计划。
- 从 PR 动态来看，**当前开发重心明显偏向新增 IM 渠道（SimpleX、DeltaChat 重构）和基础设施优化（缓存、依赖升级）**，而非社交协议增强。
- 若社区对 IRC 长消息的需求足够强烈，建议发起者补充实际使用场景和频率数据，提升优先级说服力。

**预测：** 这两个功能请求进入 v0.4.x 的可能性较低，除非有核心维护者认领或社区 PR 出现。

---

## 7. 用户反馈摘要

从今日活跃的 Issues 评论中可提炼以下用户声音：

1. **协议层面需要更聪明的处理**（来源于 #3287）：IRC 的 512 字节限制不是 PicoClaw 的问题，但用户期望 PicoClaw 能主动识别「被拆分的消息」并重组，这反映出用户对「开箱即用的协议适配深度」有较高期待。评论者似乎认可 AI 理解能力的上限，但认为工程上应能规避这类底层协议缺陷。

2. **部署环境多样性与性能敏感**（来源于 #3292）：一位用户在 Debian/Linux + Firefox 环境下报告 CPU 占用问题。虽然该 Issue 已关闭，但用户提供了完整的版本信息与复现路径，说明有一定技术能力且愿意协助排查。此类反馈对项目质量提升有真实价值，不应被简单关闭。

3. **对 WhatsApp 渠道的实时性有强依赖**（来源于 PR #3320 描述）：PR 作者明确指出 WhatsApp 渠道「stays dead」（无法连接、无重连），说明该渠道对部分用户是刚需，其停摆会直接影响用户的核心使用场景。

---

## 8. 待处理积压

以下为长期未得到响应或合入的重要 Issue / PR，建议维护者优先关注：

| 项目 | 创建时间 | 已等待 | 重要性 / 说明 |
|---|---|---|---|
| [PR #3193：Added simplex channel type](https://github.com/sipeed/picoclaw/pull/3193) | 2026-06-27 | **43 天** | 新增 SimpleX 渠道，功能完整但长期未获 review。 |
| [PR #3222：refactor(deltachat) -200LOC](https://github.com/sipeed/picoclaw/pull/3222) | 2026-07-03 | **37 天** | 大幅简化代码并完善文档，属于「纯收益」型重构。 |
| [Issue #3287：IRC long messages](https://github.com/sipeed/picoclaw/issues/3287) | 2026-07-22 | **18 天** | 有 4 条评论，用户持续关注，已标记 stale。 |
| [Issue #3302：OAuth 2.1 for MCP](https://github.com/sipeed/picoclaw/issues/3302) | 2026-07-30 | **10 天** | 功能增强需求，开发者已明确提出。 |

> ⚠️ **维护者提示：** PR #3193 和 #3222 的合入风险很低（一个是纯新增渠道，另一个是纯重构 + 文档完善），建议至少先给予明确的 review 结论，避免打击社区贡献者积极性。此外，建议为「新增渠道类」PR 建立标准的 checklist 与测试流程，以缩短决策周期。

---

**总结：** PicoClaw 项目今日状态「活跃开发、合并拥堵」。社区正在通过 PR 修复 WhatsApp 和缓存等真实问题，但维护者响应速度（尤其是对 1 个月以上未动的 PR）将成为影响社区健康度的关键瓶颈。建议优先处理积压的 SimpleX 渠道 PR 和 DeltaChat 重构 PR，并对 IRC 长消息需求给出明确回应（接受 / 拒绝 / 计划中）。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-08-09

## 今日速览

过去 24 小时项目活跃度处于中高水平：共产生 8 条 Issue 更新（5 条新开/活跃、3 条已关闭）与 6 条 PR 更新（3 条待合并、3 条已合并/关闭）。**Discord 审批按钮失效**是当前最集中的 Bug 热点（Issue #3201 + 修复 PR #3185），此外 Mattermost 频道集成的两项 PR 推进值得关注。远程 MCP 服务器支持与 Strava 集成已合并，项目外部生态连接能力持续扩展；当前无新版本发布。

---

## 版本发布

无。

---

## 项目进展

今日共有 3 条 PR 被合并/关闭（均为合并），项目因此获得以下能力扩展：

| PR | 内容 | 状态 |
|---|---|---|
| [#2777](https://github.com/nanocoai/nanoclaw/pull/2777) | 新增 `/add-strava` 技能，接入官方 Strava MCP 端点，含宿主端 OAuth 流程与令牌自动刷新模块 | ✅ 合并 |
| [#2776](https://github.com/nanocoai/nanoclaw/pull/2776) | `McpServerConfig` 扩展为联合类型，支持远程 HTTP/SSE MCP 服务器；`ncl groups config add-mcp-server` 新增 `--type`、`--url`、`--header` 参数 | ✅ 合并 |
| [#3199](https://github.com/nanocoai/nanoclaw/pull/3199) | Mattermost 频道集成（基于 v2 ChannelAdapter 重新实现，替代已过时的 #546），通过 `chat-adapter-mattermost` 注册适配器 | ✅ 合并（后被 #3202 取代，见下） |

**分析**：远程 MCP 服务器支持是基础设施级别的能力提升，意味着 NanoClaw 的 Agent 组不再局限于本地 stdio 协议，可直接对接跨网络的 MCP 服务（如 Strava MCP）。该合并在 6 月 PR 的基础上完成，为后续更多 SaaS MCP 集成铺平了道路。Mattermost 集成在同一天出现合并后又重新打开的 PR（#3202），暗示架构上可能仍有微调需求。

---

## 社区热点

1. **Issue #3201 — Discord 审批按钮点击无效**（[链接](https://github.com/nanocoai/nanoclaw/issues/3201)）
   - 2 条评论，是今日讨论最集中的 Issue，直击核心协作流程：审批卡片显示 "0 by [user]"，任何点击都会被拒绝。
   - 配套 PR [#3185](https://github.com/nanocoai/nanoclaw/pull/3185) 已定位根因：webhook `custom_id` 解码时错误地按 `\n` 分割，导致点击映射到错误选项。**这是当前最需要维护者关注的 Bug——它直接阻塞了 Discord 用户的配置变更审批全流程。**

2. **Mattermost 集成双 PR（#3199 已合并 / #3202 重新打开）**（[#3202](https://github.com/nanocoai/nanoclaw/pull/3202)）
   - 社区对 Mattermost 支持有持续需求（从 #546 → #3199 → #3202 延续数月），新 PR 以"v2 ChannelAdapter"架构重写，声明关闭原始需求 Issue #1379，反映社区正积极跟进项目架构演进。

3. **Issue #3200 — 非标准 Issue 内容**（[链接](https://github.com/nanocoai/nanoclaw/issues/3200)）
   - 内容为一段"Cartographer"认知架构提示词，非 Bug 或 Feature 描述，更像一种测试性提交。虽已关闭，但值得维护者留意是否需要对 Issue 模板的强制校验。

---

## Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | 修复 PR |
|---|---|---|---|
| 🔴 高 | [#3201](https://github.com/nanocoai/nanoclaw/issues/3201) | Discord 审批按钮点击不生效，owner 无法批准配置更新请求，审批流程全线受阻 | 已有 [#3185](https://github.com/nanocoai/nanoclaw/pull/3185) 待合并 |
| 🟠 中 | [#3203](https://github.com/nanocoai/nanoclaw/issues/3203) | `codex` provider 发出未声明的 `file` 事件，`/add-codex` 在 main 分支 typecheck 失败，生成的图片被静默丢弃 | 无 |
| 🟡 低-中 | [#3206](https://github.com/nanocoai/nanoclaw/issues/3206) | 消息 ID 含路径分隔符（如 Google Chat）的频道，入站附件被静默丢弃 | 无 |
| 🟡 低-中 | [#3177](https://github.com/nanocoai/nanoclaw/issues/3177) | Docker 跨挂载文件系统下 SQLite 会话数据库锁竞争（29,000+ readonly 错误），已关闭（有对应修复） | 已合并 |
| ⚪ 低 | [#3204](https://github.com/nanocoai/nanoclaw/issues/3204) | `.claude/skills/add-opencode` 文档与 `cli-tools.json` 重构不同步，技能测试断言旧形态 | 无（文档/测试更新） |
| ⚪ 低 | [#2528](https://github.com/nanocoai/nanoclaw/issues/2528) | Signal 频道图片/PDF 附件无法从 Agent 容器访问（5 月 18 日提交，持续 3 个月未闭环） | 无 |

**观察**：Discord 审批问题是当前最关键的稳定性短板，好在根因已被定位并有 PR 处于待合并状态。此外 `codex` 事件的类型声明缺失反映了 provider 分支的代码质量管控需要加强。

---

## 功能请求与路线图信号

| 请求 | 说明 | 可能并入版本 |
|---|---|---|
| [Mattermost 频道集成](https://github.com/nanocoai/nanoclaw/issues/1379) | Issue #1379 开放中，PR #3199 已合并、#3202 同步打开，方案已接近成熟 | 下一版本大概率纳入 |
| [持久化组级 OneCLI 密钥分配](https://github.com/nanocoai/nanoclaw/issues/3205) | 多用户场景下 spawn 时密钥分配的"设计岔路"问题，需要产品层面明确 per-group 的持久化模型 | 需设计评审，短期不会落地 |
| [远程 HTTP/SSE MCP 服务器支持](https://github.com/nanocoai/nanoclaw/pull/2776) | 已合并，是架构级能力，后续生态集成（如 Strava）将依赖此基础设施 | ✅ 已可用 |

Mattermost 是明确的高优先级方向——两个 PR（#3199 已合并、#3202 新开）意味着集成方案还在优化中，但项目显然在积极推进此通道。

---

## 用户反馈摘要

- **Discord 审批流程受阻（Issue #3201）**：用户 `churchcrm-hazel` 报告审批卡片点击后不记录投票、请求被拒绝，直接影响多人协作场景下的配置变更流程。这是流程阻断级 Bug，用户对失败路径的描述非常具体（"0 by [user]"），说明问题稳定复现。
- **Docker 部署可靠性（Issue #3177）**：用户 `DawoudIO` 报告 Docker 挂载文件系统下 29,000+ readonly 错误，说明 SQLite journal 模式在跨文件系统的场景需要特殊处理。该问题的修复已随 Issue 关闭而落地，对容器化部署用户是重要改进。
- **Signal 附件访问老问题（Issue #2528）**：用户 `brentkearney` 5 月报告至今仍在开放。Signal 通道图片/PDF 到达宿主机但容器内无法打开，该问题长期未解决，可能影响 Signal 重度用户对文件类任务的使用信心。

---

## 待处理积压

| 项目 | 创建时间 | 时长 | 备注 |
|---|---|---|---|
| [#2528](https://github.com/nanocoai/nanoclaw/issues/2528) Signal 附件不可达 | 2026-05-18 | ~3 个月 | 持续开放，无评论、无 PR 关联。建议维护者优先处理或明确标记"暂不支持" |
| [#3185](https://github.com/nanocoai/nanoclaw/pull/3185) Discord 审批修复 | 2026-08-04 | 5 天 | 直接关联 #3201 严重 Bug，需尽快 review 合并 |
| [#2877](https://github.com/nanocoai/nanoclaw/pull/2877) Telegram 原生富文本渲染 | 2026-06-28 | 6 周+ | 依赖 Bot API 10.1 `sendRichMessage`，长时间未合并，需确认与现有 telegram 通道的兼容策略 |
| [#3203](https://github.com/nanocoai/nanoclaw/issues/3203) codex provider 类型声明缺失 | 2026-08-08 | 1 天 | 新报告但直接阻塞 `/add-codex` 功能，建议快速跟进 |

---

**总结**：NanoClaw 处于社区活跃、功能扩展与稳定性修复并行的阶段。MCP 远程支持与 Mattermost 集成是当前最明确的功能增量；Discord 审批 Bug 是最紧迫的稳定性风险，修复 PR 等待合并。长期积压的 Signal 附件问题建议维护团队明确给出产品决策，避免社区用户持续困惑。整体项目健康度**良好**，核心通道（Discord）的回归风险需要优先管控。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-09

## 1. 今日速览

过去24小时项目保持高强度迭代：30条Issue更新（24条关闭，关闭率80%）、50条PR活动（32条合并/关闭，合并率64%），无新版本发布。核心关注点集中在Reborn架构迁移收尾、Web Debug Inspector功能补全、以及多项稳定性修复（outbound投递竞态、token计费准确性、安全层覆盖缺口）。多个大尺寸PR（XL）进入合并队列，显示项目正从Reborn重构向稳定性加固与体验完善过渡。整体健康度良好，但需警惕累积的待合并PR数量（18条）与新增的SafetyLayer安全缺口Issue。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

### 核心架构与产品行为
- **[CLOSED] PR #7377 — run acts as its invoker**：修复了运行时身份绑定不一致问题，移除共享路径的主题绑定，并纳入 2026-08-08 多智能体审计的全部 must-fix 项。这是 #7157 的后续收尾，对多租户安全性有实质提升。
- **[CLOSED] PR #7382 — 脚本化工具调用压力测试**：为 API 压力场景增加确定性内置/内存工具序列，并通过生产路径验证持久化写入读回，补齐了 #7360 中"mock模型不含工具调用"的测试盲区。
- **[CLOSED] PR #6938 — 模型选择技能而非关键词打分器**：移除宿主侧基于关键词的技能自动激活逻辑，让模型通过 `builtin.skill_activate` 显式选择技能，使技能调用可追踪。这是技能管理epic (#6941) 的重要一步。

### 稳定性与修复
- **[CLOSED] PR #7389 — live-qa Slack投递验证修复**：修复 #7157 合并后 `reborn-webui-v2-live-qa` 车道持续失败的问题，将验证逻辑对齐两通道（two-lane）契约。
- **[CLOSED] PR #7393 — 宽目录基准测量Core投递对**：为 #7390 移入Core层级的 `outbound_deliver` 和 `outbound_delivery_targets_list` 补充基准覆盖。

### 测试与质量
- **[CLOSED] PR #7280 — Inspector浏览器/安全/操作员覆盖**：新增跨作用域隔离、无效游标、连接限制、详细数据流排除等安全测试，并为每个浏览器Tab建立稳定的Inspector连接身份。

### 观察
18条PR仍在待合并状态（含多条XL尺寸），包括Web Push通知 (#7398)、Slack渐进式预览 (#7396)、共享对话 (#7397) 等重大特性，预计合并后项目功能面将有显著扩展。

## 4. 社区热点

### 最活跃讨论
- **Issue #6989 — Token计费Bug**（5条评论，OPEN，P1）：`ModelWorkRequest::for_assistant` 从内容引用字符串的长度估算输入token，而非引用内容的实际长度。直接影响计费准确性与成本控制，且属于 pi-harness 采用计划的一部分，社区关注度高。
- **Issue #3280 — ProductWorkflow facade**（7条评论，CLOSED）：Reborn产品级工作流门面的落地讨论，涉及多模块协作，虽已关闭但评论数在近期Issue中最高。

### 高关注PR
- **PR #7398 — 浏览器推送通知 + PWA**（XL，OPEN）：将Web应用变为自动化的一等通知渠道（与Slack/Telegram对齐），涉及W3C Web Push全栈实现，是产品体验的重要扩展。
- **PR #7397 — Slack与Telegram共享对话**（XL，OPEN）：基于acting-identity机制实现安全的共享会话，是协作能力的关键增强。

### 诉求分析
社区关注点集中在三个方向：**成本可观测性**（token估算准确性）、**渠道扩展**（浏览器推送、共享对话）、**迁移门槛**（Issue #6939用户反馈）。项目组对技术债清理（如gate审计PR #7373）和安全性加固持续投入，响应积极。

## 5. Bug 与稳定性

### 高优先级
- **Issue #7391 — SafetyLayer::validate_input 无调用者（OPEN，新增）**：`docs.ironclaw.com/security` 声称用户输入会经过"验证、消毒、泄漏检测"阶段，但对应函数在实时Reborn turn路径上没有任何调用者。这是文档与实现的严重不一致，属于安全覆盖缺口，目前**无关联fix PR**。
- **Issue #6989 — Token估算Bug（OPEN，P1）**：`ModelWorkRequest::for_assistant` 从内容引用字符串长度估算输入token，而非引用内容的实际长度。直接影响计费准确性与成本控制，且属于 pi-harness 采用计划的一部分，目前**无关联fix PR**。

### 中优先级（均有修复PR）
- **PR #7395 — outbound发送认领TOCTOU竞态**（OPEN）：`claim_delivery_attempt_for_send` 返回 `bool` 导致的竞态条件，可能造成失败行无法重新打开。修复方案为调整 CAS 语义并允许失败行重开。
- **PR #7028 — 恢复期间保留终态**（OPEN）：无条件状态写入替换为 CAS 保护的 `Sending -> Unknown` 转换，确保恢复逻辑不会覆盖终态。
- **PR #7352 — gate投影身份绑定**（OPEN）：同一运行上多个同类型gate通知共享相同投影ID，导致投递身份冲突。
- **PR #7048 — WASM访客诊断信息消毒**（OPEN）：修复guest日志消息、崩溃痕迹和跟踪头中的注入风险。

### 回归与测试修复
- **[CLOSED] PR #7389**：修复 #7157 合并后 live-qa 车道持续失败的回归。
- **PR #7341 — WebUI附件读取与SSE测试修复**（OPEN）：修复附件读取回归，并同步Playwright测试至新的fetch/ReadableStream SSE传输。

## 6. 功能请求与路线图信号

### 新功能/增强请求
- **Issue #6939 — 迁移工具（OPEN，P2）**：用户反馈从Hermes/Openclaw迁移到IronClaw的学习与迁移成本高，希望能携带原有配置和记忆。这是一个明确降低切换门槛的功能信号。
- **Issue #7218 — Web Debug Inspector epic（OPEN）**：已通过PR #7291（统计/导航/本地化）和#7226/#7225（浏览器/安全/详细工具信息）持续落地，功能基本成型。

### 路线图信号
- **PR #7398（Web Push + PWA）** 和 **PR #7397（共享对话）** 均已就绪待合并，预计将进入下一版本，使Web端成为与Slack/Telegram对等的一等通知渠道。
- **Issue #7392 — 替换coding tools为omp工具面（OPEN，8月8日新增epic）**：计划将模型可见的编码工具替换为 `can1357/oh-my-pi@08819` 的精确契约，属于工具链架构调整，可能影响所有依赖内置工具的自动化场景。
- **PR #7171 — 统一DB-backed技能目录树（OPEN）**：修复技能安装后不可见/不可激活的问题，是技能管理epic (#6941) 的第4项，预计完成后将显著改善技能使用体验。

## 7. 用户反馈摘要

- **迁移成本高（Issue #6939）**：用户明确表示"从Hermes/Openclaw迁移没有路径，高切换成本导致不愿意从干净状态重新开始"，这是对产品采用门槛的直接反馈。项目组已将其标记为feature，但尚未排期。
- **技能安装无痕迹（PR #7171 描述）**：用户安装技能后收到 `{"installed": true}`，但技能在"设置→技能"中不可见、无法激活——相当于"技能消失"。这是对技能可用性的明确不满，已通过PR #7171修复。
- **Debug Inspector需求明确（Issues #7218/#7225/#7226）**：用户/操作员需要可用的提示词构造、实时活动、模型用量与工具执行调查工具，且要求绑定 `?debug=true` 且仅限操作员。项目组已在三日内通过多个PR闭环该系列issue，响应迅速。

## 8. 待处理积压

### 长期未响应的关键Issue
- **Issue #6989 — Token估算Bug（P1，8月1日创建，8天未关闭）**：虽持续有讨论（5条评论），但仍无关联修复PR。作为P1且直接影响成本，建议优先安排。
- **Issue #6939 — 迁移工具（7月31日创建，9天）**：用户痛点明确，但仅标记P2，无排期迹象。考虑其对新用户获取的潜在影响，建议评估优先级。

### 长时间未合并的PR（均为new contributor，需维护者关注）
- **PR #7029 — 恢复持久投递认领（8月3日创建，6天）**：依赖 #7028 的栈式PR，虽然依赖链合理，但等待时间较长。
- **PR #7048 — WASM诊断消毒（8月3日创建，6天）**：同样依赖 #7063，包含20个owned commits，等待合并。
- **PR #7028 — outbound终态保留（8月3日创建，6天）**：基础修复，被多个PR依赖，建议优先评审。

### 近期新增但需跟踪
- **Issue #7391 — SafetyLayer无调用者（8月8日新增）**：涉及安全文档与实现不一致，虽无直接可利用证据，但作为安全覆盖缺口应尽快确认是否需修复或更新文档。
- **PR #7394 — CI沙箱路径动态解析（8月8日新增）**：修复 `SANDBOX_DOCKER_EXACT_PATHS` 硬编码问题，低风险，建议快速合入以保持CI可维护性。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 — 2026-08-09

## 1. 今日速览

LobsterAI 项目处于**低活跃度维护期**。过去 24 小时（截至 2026-08-08）内发生 1 条 Issue 更新与 3 条 PR 更新，但所有更新项均带有 `[stale]` 标签，且无新版本发布。这表明当下的活动主要来自 Stale Bot 的自动标记或长期未处理项的状态变更，而非实质性的新讨论或代码提交。唯一的状态变化是 PR #2193 关闭——若为合规则是项目近两日唯一的净进展；若为 Bot 清理，则维护者**积压清理压力**需要正视。总体而言，项目活跃度偏低，社区需求等待响应的周期较长。

## 2. 版本发布

无。

---

## 3. 项目进展

今日没有明确合并的 PR，但有一项状态变更需确认：

- **[PR #2193](https://github.com/netease-youdao/LobsterAI/pull/2193)（closed / stale）：新增 LiteLLM 作为 AI 网关提供商**
  由 RheagalFire 于 2026-06-23 提交，8 月 8 日状态变更为「已关闭」。该 PR 复用现有 `chatWithOpenAICompatible` 处理器，使用户可通过 OpenAI 兼容端点接入 100+ 供应商，**零新增依赖**。关闭原因未明示：
  - 若为**合并**：项目将获得一个低成本的多供应商接入能力，对生态扩展有直接价值；
  - 若为 **Stale Bot 自动关闭**：该功能将推迟至维护者重新评估，且需要重新提交或恢复。

由于数据未标注 "MERGED" 状态，建议维护者明确该 PR 的最终去向，避免社区误读。

---

## 4. 社区热点

**Issue #1192「自定义已有工具的默认配置」** — [链接](https://github.com/netease-youdao/LobsterAI/issues/1192)

- 作者：duzhen1996 ｜ 创建于 2026-04-01 ｜ 最近更新：2026-08-08 ｜ 评论：1
- 核心诉求：用户希望为内置工具（如 browser）**硬编码默认配置**（例如强制无头模式启动），而不是依赖大模型指令遵循。原话指出了关键痛点：
  > “大模型的指令跟随经常不好，没法无头模式启动。能不能让我直接写死一个默认配置？”

这是该 Issue 是今日唯一有动态的 Issue，且已被 Stale Bot 标记。它揭示了社区对 **Agent 行为确定性** 的强烈需求——用户并不信任 LLM 每次都正确执行工具参数，希望从框架层面提供“配置覆盖 > 模型决定”的能力。

---

## 5. Bug 与稳定性

今日**无**崩溃、回归或严重 Bug 报告。

唯一接近体验缺陷的是 Issue #1192 中的“浏览器窗口弹出打扰”——即工具默认以 GUI 模式运行，在无人值守场景下造成干扰，属于**交互设计问题**而非程序错误。

---

## 6. 功能请求与路线图信号

| 来源 | 性质 | 路线图信号 |
|------|------|-----------|
| Issue #1192：工具默认配置覆盖 | 功能需求 | 需要一种“用户级预设/系统配置 > 模型决定”的执行优先级机制，或为工具调用增加强制参数覆盖（force parameter）API。 |
| PR #2193：LiteLLM 网关 | 待确认，已关闭 | 多供应商兼容层是低成本方向；即使本次关闭，也值得在下一版本规划中重新考虑引入。 |
| PR #1193：SQLite 批量写入优化 | 性能优化 | 说明作者关注持久化写入放大的技术债，对大规模部署和长时间运行的稳定性有正面意义。 |

结合现状，**「工具配置确定性」** 可能成为社区呼声最高的下一版功能主题，而 `PR #1193` 的优化则可能被吸收为内部架构改进的一部分。

---

## 7. 用户反馈摘要

从 Issue #1192 的讨论中可提炼出以下真实用户声音：

- **满意度**：对 LobsterAI 内置工具的基本能力认可，但在高级参数控制上不满意。
- **核心痛点**：
  1. 大模型指令遵循不稳定，导致工具行为不可预期（如浏览器无头模式执行失败）；
  2. 缺少“一键写死”的配置入口，用户被迫使用自然语言反复引导 LLM；
  3. 后台无人值守场景下，GUI 窗口弹出会打扰用户。
- **期望**：提供类似 `config.default` 或 `tool.override` 的机制，在代码层强制设定工具参数，减少对模型判断的依赖。

---

## 8. 待处理积压

以下长期未响应项需要维护者优先关注，其中两项已超 4 个月：

| 项目 | 创建时间 | 等待时长 | 当前状态 | 处理建议 |
|------|---------|---------|---------|---------|
| [Issue #1192](https://github.com/netease-youdao/LobsterAI/issues/1192) 工具默认配置 | 2026-04-01 | ~130 天 | OPEN / stale | 需求边界明确，可考虑标记为 `good-first-issue` 或指派给负责工具链的维护者。 |
| [PR #1193](https://github.com/netease-youdao/LobsterAI/pull/1193) SQLite 写放大优化 | 2026-04-01 | ~130 天 | OPEN / stale | 属性能改进，技术方案清晰（debounce + batch），建议安排 code review；若短期无精力可明确回复延迟原因。 |
| [PR #2294](https://github.com/netease-youdao/LobsterAI/pull/2294) TakoAPI 徽章 | 2026-07-08 | ~32 天 | OPEN / stale | 低风险文档变更，可快速并入 main；若接受，帮助项目获得外部目录曝光。 |

---

**项目健康度总结**：当前维护节奏偏慢，4 个月前的核心优化 PR 仍未评审，社区功能需求也未得到官方回应。建议维护者至少在 8 月中旬前完成以下动作：确认 PR #2193 的最终去向、对 PR #1193 给出明确时间表、回复 Issue #1192 并给出短期 workaround（如环境变量传递参数），以缓解 Stale 堆积带来的社区信任成本。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-08-09

## 今日速览

Moltis 项目在过去 24 小时内呈现中等活跃度：1 个新 Bug 被报告（Apple Container 1.x 沙箱状态误判）、1 个长期遗留的 Docker 沙箱文件系统工具失效问题正式关闭、对应修复 PR 同日合入。Issue #1096 从 6 月 3 日创建到 8 月 9 日修复，经过了约两个月的验证周期，反映出项目对稳定性和回归测试的谨慎态度。仓库当前无新版本发布，整体处于稳定的维护与修复节奏中。

---

## 版本发布

无新版本 Release。

---

## 项目进展

### 合并/关闭 PR

**[PR #1105: Fix Docker sandbox filesystem tool fallback — 已合并/关闭](https://github.com/moltis-org/moltis/pull/1105)**

作者：penso | 创建于 2026-06-05 | 更新于 2026-08-08

该 PR 针对 Docker 沙箱环境中 `Read`/`Write`/`Edit`/`MultiEdit` 工具不可用的问题进行了核心修复，主要包含三方面工作：
- 为沙箱路径（`/home/sandbox` 与 `workspace/data`）补充回归测试覆盖；
- 当网关进程无法访问宿主挂载路径时，自动从翻译后的 Docker 主机路径回退到容器内操作；
- 保留直接宿主机访问缺失列表的语义，同时提升回退场景的可靠性。

**关联关闭**: 该 PR 直接修复了 [Issue #1096](https://github.com/moltis-org/moltis/issues/1096)，结束了 Docker 环境中文件工具长达两个月无法工作的问题。对于以 Docker 作为主要部署方式的用户来说，这是一个实质性的可用性提升，也补齐了沙箱路径上的回归测试盲区。项目在“本地进程访问”与“容器内执行”之间的路径判定逻辑上更加稳健。

---

## 社区热点

今日没有出现高讨论量、多评论的 Issue 或 PR（所有条目评论数为 0）。相对值得关注的是以下两个条目构成了一个完整的“报告→修复”链条，体现了社区当前最集中的诉求方向：

- [Issue #1096: Docker 中 Read/Write/Edit 工具失效（已关闭）](https://github.com/moltis-org/moltis/issues/1096)
- [PR #1105: Docker 沙箱文件系统工具回退修复（已合并）](https://github.com/moltis-org/moltis/pull/1105)

背后的用户诉求很清晰：**Docker 环境是 Moltis 用户的重要工作场景**，沙箱内文件操作是 agent 完成读写任务的基础能力，该能力失效会直接阻塞核心工作流。社区对这条链路的关注度最高，修复的落地有望显著改善 Docker 用户的满意度。

---

## Bug 与稳定性

### 新报告的 Bug

**[Issue #1185 [Bug]: Apple Container 1.x 沙箱已启动但 Moltis 判定为未运行 — 开放中](https://github.com/moltis-org/moltis/issues/1185)**

- 作者：mikz | 创建于 2026-08-08 | 评论：0 | 👍：0
- 严重程度：**中等偏上**（影响 Apple Container 1.x 用户的正常使用，但影响面局限于 Apple 沙箱环境）

该问题描述了一个状态检测层面的误判：Apple Container 1.x 沙箱进程实际已成功启动，但 Moltis 内部将其判定为“未运行”，进而可能导致后续 workflow 被错误阻断或资源清理逻辑被异常触发。这属于典型的 **沙箱生命周期状态同步问题**。

**当前状态**：无关联 fix PR，处于待修复状态。建议维护者关注沙箱启动信号的检测机制（如 PID 感知、容器健康检查或输出解析逻辑）。

### 已修复的 Bug

**[Issue #1096 [Bug]: Docker 中 Read/Write/Edit 工具失效 — 已关闭](https://github.com/moltis-org/moltis/issues/1096)**

- 报告于 2026-06-03，关闭于 2026-08-08
- 严重程度：**高**（Docker 场景下核心文件工具完全不可用）
- 状态：已由 [PR #1105](https://github.com/moltis-org/moltis/pull/1105) 修复

修复方案围绕 Docker 宿主路径与容器路径之间的翻译与回退逻辑展开，同时增加了回归测试来防止后续迭代引入同类问题。

---

## 功能请求与路线图信号

今日未有新功能请求提交。但从已合并的 PR #1105 来看，项目目前在重点强化 **沙箱兼容性与本地/容器双路径稳定性**。用户在不同沙箱机制（Docker、Apple Container）中暴露的问题，暗示了路线图上以下可能的方向：

1. **统一的沙箱探测与状态上报机制** — Issue #1185 暴露出的“已启动但被判定为未运行”问题，说明沙箱状态检测逻辑需要一套统一的 Abstraction Layer，而不是针对各平台硬编码判断；
2. **多沙箱回归测试矩阵** — PR #1105 中加入的路径回归测试已覆盖 Docker，预计未来会扩展至 Apple Container、Firecracker 等更多沙箱后端。

这些信号虽未以功能请求形式出现，但修复带来的基础能力提升（如回退机制）将间接支持更多部署形态。

---

## 用户反馈摘要

今日没有新的 Issue 评论或讨论串可供提炼详细反馈。基于已关闭 Issue 的描述与修复 PR 的内容，可做以下推断：

- **Docker 用户的核心痛点**：无法在沙箱内执行 `Read`/`Write`/`Edit`/`MultiEdit`，意味着 agent 无法完成基本的文件操作类任务，属于阻断级问题。用户等待修复周期约两个月，期间可能被迫改用宿主机直连方式或降级版本。
- **Apple Container 用户的新诉求**：macOS 上使用 Apple Container 1.x 的用户对沙箱状态判断的准确性有较高要求。错误的“未运行”判定会削弱自动化流程的可信度，且该问题出现在使用最新版 Moltis 时，可能属于近期重构引入的回归。
- **整体趋势**：用户群中对 Docker 环境的依赖度较高，对沙箱相关行为的稳定性敏感。

---

## 待处理积压

**[Issue #1185: Apple Container 1.x 沙箱状态误判 — 新开放，需关注](https://github.com/moltis-org/moltis/issues/1185)**

- 开放于 2026-08-08，状态：**开放中，无关联 PR**，等待维护者 triage 和修复。建议优先确认是否由近期沙箱管理重构引入的回归，并补充 Apple Container 场景的集成测试。

### 长期观察项

| 条目 | 类型 | 创建时间 | 最后更新 | 状态 |
|---|---|---|---|---|
| [#1096 Docker 工具失效](https://github.com/moltis-org/moltis/issues/1096) | Bug | 2026-06-03 | 2026-08-08 | ✅ 已修复并关闭 |
| [#1105 Docker 文件系统修复 PR](https://github.com/moltis-org/moltis/pull/1105) | PR | 2026-06-05 | 2026-08-08 | ✅ 已合并 |

这两个条目从创建到解决耗时约 2 个月。期间没有中间更新记录，反馈周期较长。建议维护团队考虑：
1. 对已 triage 的 Bug 设置更明确的 SLA 或有计划的里程碑归属；
2. 在 PR 长期待合并状态下，定期同步进度或标记为 blocked，减少社区等待的焦虑感。

---

*本日报由 AI 生成，数据基于 Moltis 公开 GitHub 仓库，统计窗口为 2026-08-08 至 2026-08-09。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-08-09）

> 注：数据源中链接路径为 `agentscope-ai/QwenPaw`，若仓库已迁移至 `agentscope-ai/CoPaw`，原链接会自动跳转。  
> 统计窗口：过去 24 小时。

## 今日速览

过去 24 小时项目活跃度高：18 条 Issue 更新（16 条新开/活跃、2 条关闭），50 条 PR 更新（47 条待合并、3 条关闭/合并），无新版本发布。稳定性问题仍是社区提交主力，集中在 MCP 会话阻塞、SQLite WAL 崩溃、OpenAI Responses 续写异常、前端高 CPU 等方向，且部分问题已有针对性 fix PR 进入队列。功能侧继续收到新模型 Provider 接入和审批/临时文件治理等诉求。整体呈现“高频反馈、快速修复、功能扩张并行”的健康状态。

## 项目进展

今日共有 3 个 PR 关闭/合并，已知两个为：

- [#6835 fix(llm): resolve KeyError '__aiter__' during auto-title generation](https://github.com/agentscope-ai/QwenPaw/pull/6835)  
  直接解决 [#6813](https://github.com/agentscope-ai/QwenPaw/issues/6813) 中聊天自动标题生成失败的问题。修复后，非流式 Provider 响应不再因缺少 `__aiter__` 导致自动命名崩溃。

- [#6836 fix(mcp): wire read_timeout_seconds into MCP SDK ClientSession](https://github.com/agentscope-ai/QwenPaw/pull/6836)  
  将配置中的 `read_timeout_seconds` 真正传递给 MCP SDK 的 `ClientSession`，避免 MCP 流读取超时或挂起。与 [#6825](https://github.com/agentscope-ai/QwenPaw/pull/6825) 一起覆盖 [#6822](https://github.com/agentscope-ai/QwenPaw/issues/6822) 中“MCP 瞬断后活跃会话永久阻塞”的根因之一。

另一个关闭/合并 PR 未出现在 Top 20 列表中，建议维护者在项目周报中补充说明。

## 社区热点

- [#6782 [Bug] 2.0.1 docker 版本，插件市场、应用市场始终提示维护中](https://github.com/agentscope-ai/QwenPaw/issues/6782)  
  9 条评论，为今日讨论最密集的 Issue。Docker 用户无法使用插件/应用市场，直接影响扩展生态的可用性，背后诉求是优先排查镜像内后端访问市场接口的连通性、环境变量或服务地址配置。

- [#6811 OpenAI Responses continuation summary ignores `disable_thinking` and misreports 60-second cancellation as malformed output](https://github.com/agentscope-ai/QwenPaw/issues/6811)  
  5 条评论。Scroll 淘汰旧对话时，同步请求主模型生成 continuation summary，会阻塞主对话；60 秒取消又被误报为 malformed output。反映 reasoning 模型场景下续写和取消机制兼容性不足。

- [#6490 [Feature] Add Volcengine Agent Plan and Xiaomi MiMo Standard API as built-in providers](https://github.com/agentscope-ai/QwenPaw/issues/6490)  
  5 条评论。用户对火山方舟、小米 MiMo 等国内 Provider 的接入需求强烈，且希望修复现有 Provider 配置问题。

- [#6820 [Bug] 前端 UI 界面未显示模型的输出、工具调用、思考过程，全部完成后才显示](https://github.com/agentscope-ai/QwenPaw/issues/6820)  
  4 条评论。流式展示仍是用户最敏感的体验问题之一，可能与前端 SSE 消费或渲染缓冲有关。

## Bug 与稳定性

按严重程度排列：

| 严重程度 | Issue | 概要 | 状态/修复 |
|---|---|---|---|
| 严重 | [#6814](https://github.com/agentscope-ai/QwenPaw/issues/6814) | macOS 上打开 Scroll `history.db` 时发生 SIGBUS，crash 在 `sqlite3WalFindFrame`，存在数据读取崩溃/丢失风险 | 暂无 fix PR |
| 严重 | [#6822](https://github.com/agentscope-ai/QwenPaw/issues/6822) | 远程 `streamable_http` MCP 连接瞬断后，自动重连仍无法恢复活跃对话，会话可能永久阻塞 | 已有 [#6825](https://github.com/agentscope-ai/QwenPaw/pull/6825)、[#6836](https://github.com/agentscope-ai/QwenPaw/pull/6836) |
| 严重 | [#6811](https://github.com/agentscope-ai/QwenPaw/issues/6811) | OpenAI Responses 续写 summary 忽略 `disable_thinking`，且 60 秒取消被误报为 malformed output | 暂无 fix PR |
| 严重 | [#6813](https://github.com/agentscope-ai/QwenPaw/issues/6813) | 自动标题生成因 `KeyError: '__aiter__'` 失败，影响 Chat 自动命名 | 已有关闭 PR [#6835](https://github.com/agentscope-ai/QwenPaw/pull/6835) |
| 严重 | [#6821](https://github.com/agentscope-ai/QwenPaw/issues/6821) | thinking-mode 模型多轮对话时 `reasoning_content` 回传失败，上游返回 400 | 暂无 fix PR |
| 高 | [#6812](https://github.com/agentscope-ai/QwenPaw/issues/6812) | Google Gemini Provider 发送含 `$schema` 的 tool schema，Gemini API 拒绝请求 | 暂无直接 fix PR，需 Provider 层清洗 |
| 高 | [#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810) | Windows 安装/更新未先结束占用进程，NSIS 报“无法打开要写入的文件”，自动更新卡死 | 暂无 fix PR |
| 中 | [#6828](https://github.com/agentscope-ai/QwenPaw/issues/6828) | 空闲时前端持续重绘，CPU 约 20%，根因是无限 CSS 动画 | 已有 [#6834](https://github.com/agentscope-ai/QwenPaw/pull/6834) |
| 中 | [#6831](https://github.com/agentscope-ai/QwenPaw/issues/6831) | macOS Desktop 本地 Whisper ffmpeg 显示 disabled，PATH 不含 `/opt/homebrew/bin` | 暂无 fix PR |
| 中 | [#6819](https://github.com/agentscope-ai/QwenPaw/issues/6819) | Channel 工具需要审批时不弹审批提示，用户无法判断是卡住还是等待审批 | 已有 [#6833](https://github.com/agentscope-ai/QwenPaw/pull/6833) |
| 中 | [#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) | 助手消息结束时间显示异常，实际思考 2 分钟但页面只显示几秒 | 暂无 fix PR |
| 已关闭 | [#6756](https://github.com/agentscope-ai/QwenPaw/issues/6756) | `run_tool_batch` 报 “No toolkit available in current context” | 已关闭 |
| 已关闭 | [#4558](https://github.com/agentscope-ai/QwenPaw/issues/4558) | 长文本输出时 CPU 异常升高，疑似前端渲染性能问题 | 已关闭；但新的 [#6828](https://github.com/agentscope-ai/QwenPaw/issues/6828) 说明前端渲染优化仍需继续 |

## 功能请求与路线图信号

- [#6490 [Feature] 内置火山方舟 Agent Plan 与小米 MiMo Standard API](https://github.com/agentscope-ai/QwenPaw/issues/6490)  
  用户希望新增两个国内 Provider 接入点，并修复既有配置问题。结合近期 Provider 扩展 PR，属于明确的路线图需求。

- [#6832 [Feature] AI 要求审批时加入审批项目描述](https://github.com/agentscope-ai/QwenPaw/issues/6832)  
  当前审批申请不直观，用户需阅读 PowerShell 代码才能判断用途；希望 AI 在提交审批时附带一句话说明。

- [#6827 [Feature] 删除对话时可选清理该对话产生的任意临时文件](https://github.com/agentscope-ai/QwenPaw/issues/6827)  
  用户希望删除 Chat 时能同步清理 agent 创建的工作区临时文件，避免孤立文件累积。

- [PR #6817 feat: integrate AnySearch web search (SearchProvider + MCP)](https://github.com/agentscope-ai/QwenPaw/pull/6817)  
  提出将 AnySearch 作为内置 Web 搜索能力并替换 Tavily，同时修复 MCP env-ref 头绑定问题。

- [PR #6526 feat: Add NVIDIA NIM provider support](https://github.com/agentscope-ai/QwenPaw/pull/6526)  
  企业用户可更方便选择 NVIDIA NIM endpoint 作为模型 Provider。

- [PR #6659 feat(providers): implement model fallback with cooldown mechanism](https://github.com/agentscope-ai/QwenPaw/pull/6659)  
  为限流、超时、服务错误提供模型自动故障转移和冷却机制，是稳定性方向的重要能力。

- [PR #6668 feat(providers): support responses prompt caching](https://github.com/agentscope-ai/QwenPaw/pull/6668)  
  为 OpenAI Responses Provider 增加 GPT-5.6+ prompt caching 支持，可能降低长对话成本。

- [PR #5930 feat: add structured run outcome to SSE response for API automation](https://github.com/agentscope-ai/QwenPaw/pull/5930)  
  让 Java 等 API 调用方通过 SSE 获得结构化运行结果，而不是靠关键字判断失败。

这些功能点若合并，将覆盖模型容错、国内 Provider、Web 搜索、API 自动化与前端性能优化，很可能成为 2.1.0 后续版本的重要增量。

## 用户反馈摘要

- Docker 用户受困于插件市场/应用市场持续“维护中”，已形成独立 issue 并引来 9 条讨论，说明容器部署路径的可用性需要重点回归。[#6782](https://github.com/agentscope-ai/QwenPaw/issues/6782)
- Windows 用户反馈自动更新体验差：v2.1.0b1 更新卡死，b2 安装时 NSIS 连续报文件被占用，根因是未提前终止占用安装目录的进程。[#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810)
- 审批场景中，用户面对权限申请无法快速判断用途，希望 AI 在审批卡片中直接给出简短描述。[#6832](https://github.com/agentscope-ai/QwenPaw/issues/6832)
- 删除对话后工作区会残留 agent 生成的临时脚本与配置文件，长期占用磁盘且难以区分垃圾文件，用户希望提供可选清理能力。[#6827](https://github.com/agentscope-ai/QwenPaw/issues/6827)
- 前端渲染体验是最大痛点之一：有用户反馈输出/思考/工具调用全部完成后才一次性显示，也有用户反馈空闲时 CPU 占用过高。[#6820](https://github.com/agentscope-ai/QwenPaw/issues/6820)、[#6828](https://github.com/agentscope-ai/QwenPaw/issues/6828)
- macOS Apple Silicon 用户已通过 Homebrew 安装 ffmpeg，但 Desktop 版仍显示“ffmpeg: disabled”，原因是后端 PATH 未包含 `/opt/homebrew/bin`。[#6831](https://github.com/agentscope-ai/QwenPaw/issues/6831)

## 待处理积压

以下 Issue/PR 已停留较久或长期未合并，建议维护者优先关注：

- [PR #5930 feat: add structured run outcome to SSE response](https://github.com/agentscope-ai/QwenPaw/pull/5930)  
  创建于 07-10，已超过 30 天。该能力对 API 自动化集成方很重要，Java 等服务端调用场景需要结构化成功/失败判断。

- [PR #6103 ci(coverage): raise frontend vitest thresholds to current baseline](https://github.com/agentscope-ai/QwenPaw/pull/6103)  
  创建于 07-14，已近 4 周未合并。将前端覆盖率阈值从 `5/4/3/5` 提升到当前基线，能有效防止已测代码被无感删除。

- [PR #6331 chore(website): declare Node 22 requirement](https://github.com/agentscope-ai/QwenPaw/pull/6331)  
  创建于 07-22，网站构建依赖已要求 Node.js >= 22，但文档仍可能误导用户使用 Node 20。

- [PR #6526 feat: Add NVIDIA NIM provider support](https://github.com/agentscope-ai/QwenPaw/pull/6526)  
  创建于 07-28，企业用户可从中受益，但仍等待评审合并。

- [PR #6615 fix(config): handle corrupted agent config and invalid JSON](https://github.com/agentscope-ai/QwenPaw/pull/6615)  
  创建于 07-31，处理配置损坏导致应用启动崩溃的问题，属于低风险高价值修复，建议尽快合入。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 — 2026-08-09

## 1. 今日速览

过去 24 小时 ZeroClaw 保持高活跃度：Issues 更新 50 条（新开/活跃 48，关闭 2），PR 更新 50 条（待合并 48，合并/关闭 2），无新版本发布。合并节奏偏慢，但 PR 队列中汇集了多项高优先级安全修复与架构重构；安全类问题（聊天频道越权、路径限制失效、成本统计失真、区块链地址被误脱敏）成为今日最集中的社区关注点。此外，SOP headless 运行修复（#9494）已合并，标志着 cron/channel 触发的自动化运行缺陷正式开始收敛。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 聚焦 SOP headless 运行修复，并围绕它展开了后续工作：

- **[#9494 fix(sop): drive cron-started headless runs](https://github.com/zeroclaw-labs/zeroclaw/pull/9494)（已关闭）** — 核心修复：cron 触发的 SOP 运行此前会因缺少 agent loop 而卡在 `ExecuteStep`，现改为统一走共享 headless run driver。该 PR 合并后直接回应了 [#9805](https://github.com/zeroclaw-labs/zeroclaw/issues/9805)（SOP auto-mode 在 channel/cron 触发下永远“running”）。
- **[#9841 fix(sop): drive headless SOP runs, and close the five defects found reviewing #9494](https://github.com/zeroclaw-labs/zeroclaw/pull/9841)（开放中）** — 作为 #9494 官方后续，基于 master rebase，携带评审中发现的 4 个阻塞性缺陷 + 1 个额外缺陷的修复，被视为当前主线的延续。说明 SOP 执行链路的修复没有止步于最小补丁，而是系统性收尾。
- **[#9798 docs(sop): document which agent executes SOP steps](https://github.com/zeroclaw-labs/zeroclaw/pull/9798)（已关闭）** — 被 #9841 取代，因其描述的仅是“临时 master 行为”，运行时修复移除后不再适用。

值得注意的信号是：SOP 相关 PR/Issue 密集出现（#9805、#9494、#9841、#9798），且跨 cron、channel、gateway 多个入口，说明自动化运行链路的稳定性正成为项目近期的投入重点。此外，今日关闭的 [#9843](https://github.com/zeroclaw-labs/zeroclaw/issues/9843)（长时间运行客户端 CPU 空转）表明可观测性方向的调查也有推进。

## 4. 社区热点

今日讨论最活跃的 Issues/PRs（按评论数排序）：

- **[#8043 RFC: Retire the standalone aardvark-sys crate](https://github.com/zeroclaw-labs/zeroclaw/issues/8043)（11 评论，已关闭）** — 与 [#9803](https://github.com/zeroclaw-labs/zeroclaw/issues/9803)（RFC: Retire zeroclaw-robot-kit）形成双胞胎议题，讨论聚焦在“硬件专属 crate 是否有必要作为独立 workspace 成员”上，背后是 crates.io 发布阻塞（见 #9381）和架构简化诉求。
- **[#8424 RFC: Workspace-relative forbidden path patterns and optional .zeroclawignore](https://github.com/zeroclaw-labs/zeroclaw/issues/8424)（11 评论，开放）** — 用户希望保护 workspace 内的敏感文件（如 `.env`、`config.yaml`），当前 `forbidden_paths` 只拦外部路径。话题延伸到了 `.gitignore` 式工作流，显示用户对“AI agent 能触碰哪些文件”的边界非常在意。
- **[#8054 System prompt tool-availability should match per-turn effective tools across all entry points](https://github.com/zeroclaw-labs/zeroclaw/issues/8054)（10 评论，开放）** — 核心矛盾是系统提示词告诉模型“No tools available”，但请求里实际带了 native/MCP 工具。修复已覆盖 direct runtime path，但 channel/gateway/WebSocket/多模态等入口仍存在同类问题。
- **[#9348 WhatsApp Web answers every DM and every group under mode = business](https://github.com/zeroclaw-labs/zeroclaw/issues/9348)（9 评论，开放）** — 安全级别 S1：配置看起来是锁定状态，实际行为却完全开放。这条 issue 之所以热，是因为它击中了“配置即安全承诺”这一信任基础。
- **[#5514 Telegram media groups should be batched into one multimodal turn](https://github.com/zeroclaw-labs/zeroclaw/issues/5514)（6 评论，开放）** — 已存活 4 个月，用户期望 Telegram 多图消息合并为一次多模态请求，而不是逐张触发。

热点集中反映了三类诉求：**架构简化**（RFC retire 系列）、**安全边界精细化**（文件路径、聊天成员、工具可用性）、**渠道体验一致性**（Telegram 多模态/流式/审批态）。

## 5. Bug 与稳定性

今日在报的 Bug 中，按严重程度排列如下（S1 为最高）：

**S1 — 安全风险/工作流完全阻塞**

- **[#9348 WhatsApp Web business 模式下回复所有 DM 和所有群聊](https://github.com/zeroclaw-labs/zeroclaw/issues/9348)** — `allowed_groups` 为空时放行全部群聊，`mode = business` 的聊天策略被完全绕过。配置显示为“锁定”但实际“全开”。暂无对应 fix PR。
- **[#9390 emergency stop 只是 CLI 状态文件，运行时无人读取](https://github.com/zeroclaw-labs/zeroclaw/issues/9390)** — 已在 `src/main.rs` 与 `estop.rs` 定位到具体行号，紧急停止功能形同虚设。暂无对应 fix PR。
- **[#9035 Docker Compose gateway 在发布端口后方仍回环绑定](https://github.com/zeroclaw-labs/zeroclaw/issues/9035)** — 容器成功构建并运行，但端口无法从外部访问，返回 “Connection refused”。
- **[#9340 CLI 创建的 cron job 输出被硬编码丢弃](https://github.com/zeroclaw-labs/zeroclaw/issues/9340)** — `delivery.mode` 固定为 `"none"`，任务执行成功但结果丢失，且没有任何告警提示。
- **[#8559 退出 Web 聊天窗口导致 agent 停止工作](https://github.com/zeroclaw-labs/zeroclaw/issues/8559)** — 用户只是关闭页面，agent 循环就被当作“用户中断”处理，后台任务无法继续。

**S1/S2 — 安全边界失效**

- **[#9815 forbidden_paths 对 allowed_roots/workspace 下的路径完全不生效](https://github.com/zeroclaw-labs/zeroclaw/issues/9815)** — `is_path_allowed` 在 allowed-root 检查处直接返回 `true`，永远走不到 forbidden 逻辑。
- **[#9387 Telegram/Slack/Lark/Matrix 上任何聊天成员都能响应审批请求](https://github.com/zeroclaw-labs/zeroclaw/issues/9387)** — 交互式审批缺乏发起人/成员校验。

**S2 — 功能降级**

- **[#9573 同一 provider 多个 alias 时价格查询失败](https://github.com/zeroclaw-labs/zeroclaw/issues/9573)** / **[#9816 Anthropic provider 上报 $0.00 花费，预算限额永不触发](https://github.com/zeroclaw-labs/zeroclaw/issues/9816)** — 成本统计链路存在两个独立缺陷，直接影响预算控制。
- **[#9486 高熵检测器把 Solana 钱包地址全部打码](https://github.com/zeroclaw-labs/zeroclaw/issues/9486)** / **[#9825 公链地址被误判为泄漏，支付链接无法投递](https://github.com/zeroclaw-labs/zeroclaw/issues/9825)** — 泄漏检测的误报已经从“显示问题”升级为“业务不可用”。
- **[#8731 stdio MCP 服务器进程堆积成僵尸进程](https://github.com/zeroclaw-labs/zeroclaw/issues/8731)** — 长期运行后 daemon 下残留大量未回收子进程。
- **[#9834 zeroclaw-runtime 测试因进程全局状态偶发失败](https://github.com/zeroclaw-labs/zeroclaw/issues/9834)** — CI 稳定性问题，已在 master `3f483f12a` 复现。

**已有 fix PR 对应关系**：`#9390` 暂无 PR；`#9340` 暂无 PR；`#9054` 暂无；`#9348` 暂无；`#9815` 暂无；`#9387` 暂无；`#9486/#9825` 暂无（但 #9580 的网络 guard 重构是相关基础设施）。目前明确有修复 PR 的是 `#9805`（SOP headless）→ #9841。

## 6. 功能请求与路线图信号

今日收到的功能/架构请求中，以下几个与已有 PR 形成明确呼应，预示可能纳入下一版本：

- **RFC retire `aardvark-sys`（#8043 已关闭）与 `zeroclaw-robot-kit`（#9803）** — 已有 **[#9853 chore(workspace): remove aardvark-sys and zeroclaw-robot-kit](https://github.com/zeroclaw-labs/zeroclaw/pull/9853)** 直接落地，两个 RFC 的决议正在转换为代码。这对 crates.io 发布（#9381）是实际利好。
- **[#8424 RFC: .zeroclawignore 和工作区相对 forbidden 路径](https://github.com/zeroclaw-labs/zeroclaw/issues/8424)** — 与 **[#9828 feat(tools): agent-facing config authoring with operator-approved policy previews](https://github.com/zeroclaw-labs/zeroclaw/pull/9828)** 在“Agent 对文件的可见性/可写性受控”这一理念上一致，后者已提交 6 个提交，每个独立可测。
- **[#9824 简化默认 web 工具面为 web_fetch + web_research + http_request](https://github.com/zeroclaw-labs/zeroclaw/issues/9824)** — 与 **[#9580 网络 guard 原语迁至 zeroclaw-infra::net_guard](https://github.com/zeroclaw-labs/zeroclaw/pull/9580)**（ADR-013，插件出口策略）相关联，属于同一波“网络工具治理”重构。
- **[#8550 增加 OpenAI 兼容 chat completions 端点](https://github.com/zeroclaw-labs/zeroclaw/issues/8550)** — 评论虽不多，但诉求明确（Open WebUI、LobeChat 等客户端无法直连），加上 **[#9540 上下文窗口发现重构](https://github.com/zeroclaw-labs/zeroclaw/pull/9854)** 正在做 provider 兼容性收尾，该功能是 ZeroClaw 拥抱 OpenAI 生态的一个强信号。
- **[#8445 Telegram 多消息模式](https://github.com/zeroclaw-labs/zeroclaw/issues/8445)** 与 **[#6663 Telegram 流式 tool-call 进度](https://github.com/zeroclaw-labs/zeroclaw/issues/6663)** — 两者都是 Telegram 渠道体验增强，后者已停留 3 个月仍在 in-progress，社区耐心在消耗。

## 7. 用户反馈摘要

从今日活跃的 Issues 评论中提炼的真实用户声音：

- **“配置说锁了，实际全开”是信任破坏点**（#9348）：WhatsApp 运营者按照文档配置了 allowlist，结果 agent 开始回复所有群聊消息。用户表述为“a config that reads as locked down behaves as fully open” —— 这比直接写明“无安全防护”更危险，因为它给运维者虚假的安全感。
- **俄语用户发现 Solana 钱包地址被整体脱敏**（#9486）：`“какой у меня кошелёк?”` → `[REDACTED_HIGH_ENTROPY_TOKEN]`。真实使用场景中，持有 Solana MCP server 的 agent 无法向用户报告自己的钱包地址，支付类任务直接不可用。用户进一步指出 `high_entropy_tokens=false` 在 channel 路径上不生效。
- **用户期望 agent 在后台持续工作**（#8559）：用户描述“exiting the chat session... stops the loop as interrupted by the user”，这暴露了 web dashboard 将“关闭页面”错误地翻译为“用户中断”。诉求本质是：**agent 的任务生命周期应独立于前端连接**。
- **Docker 部署的端口问题反复出现**（#9035）：用户运行 `docker compose up -d` 后容器一切正常但端口不可达。这类问题对自托管用户门槛影响很大。
- **Telegram 审批等待时 typing 指示器一直闪烁**（#9656）：用户感知层面，一个“等待审批”的 turn 看起来像“正常工作中”，说明任务状态对终端用户不够透明。
- **SOP headless 运行卡死**（#9805）：运行停留在 step 1 “forever”，持有并发槽位且跨 daemon 重启存活。这是自动化的“静默死亡” —— 没有失败，也没有完成。

## 8. 待处理积压

以下 Issue/PR 长期未闭环，建议维护者关注：

- **[#5514 Telegram media group 批量为多模态 turn](https://github.com/zeroclaw-labs/zeroclaw/issues/5514)** — 自 2026-04-08 创建，已存活 4 个月，`status:in-progress` 但无对应 PR，属于 Telegram 渠道的常见生活场景。
- **[#6663 Telegram 流式 tool-call 进度显示](https://github.com/zeroclaw-labs/zeroclaw/issues/6663)** — 自 2026-05-14 创建，3 个月未关闭，与 #8445（多消息模式）同方向。
- **[#7099 CLI status 输出接入 i18n](https://github.com/zeroclaw-labs/zeroclaw/issues/7099)** — 自 2026-06-02 创建，低优先级但属于长期技术债，持续有 `println!` 裸字符串进入代码库。
- **[#8337 Herdr agent reporting 集成](https://github.com/zeroclaw-labs/zeroclaw/pull/8337)** — PR 自 2026-06-26 开放，观察性集成（idle/working/blocked/released 状态上报），无维护者介入记录，存在被遗忘风险。
- **[#8731 stdio MCP 僵尸进程堆积](https://github.com/zeroclaw-labs/zeroclaw/issues/8731)** — 自 2026-07-05 创建，涉及长期运行稳定性，无人认领。
- **[#9390 emergency stop 失效](https://github.com/zeroclaw-labs/zeroclaw/issues/9390)** — S1 安全级别，但当前既无 assignee 也无 PR 指向，建议立即排期评估。

---

**总体判断**：ZeroClaw 当前处于“安全审计与架构收敛”的交叉阶段。社区反馈集中在安全边界和自动化可靠性上，而维护者响应也集中在同一方向（SOP headless、crates 合并、网络 guard 重构）。项目活跃度高、Issue 响应快，但 S1 级安全缺陷的修复 PR 尚未全部出现，建议在后续版本发布前优先清空 S1 积压。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*