# OpenClaw 生态日报 2026-06-06

> Issues: 467 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-06 00:27 UTC

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

# OpenClaw 项目动态日报 | 2026-06-06

## 1. 今日速览

OpenClaw 今日保持**极高活跃度**：24小时内 Issues 更新 467 条（340 活跃/新开，127 关闭），PR 更新 500 条（376 待合并，124 已合并/关闭），无新版本发布。社区聚焦于 **2026.6.1 版本稳定性修复**——多个关键回归问题集中爆发，包括 Matrix 通道崩溃、OpenAI ChatGPT Responses 传输层失效、Cron 状态迁移数据丢失等。同时，嵌入式运行性能优化（event-loop  stall）和子代理工具链转发成为代码层面的核心攻坚方向。项目整体处于**"版本发布后修复窗口期"**，社区响应迅速但维护者审查带宽面临压力。

---

## 2. 版本发布

**无新版本发布**

当前最新版本仍为 **2026.6.1**（发布于 2026-06-04 前后）。该版本已暴露多个严重回归问题，社区正密集提交修复 PR，预计短期内将有 **2026.6.2 补丁版本**。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 状态 |
|:---|:---|:---|:---|
| [#90775](https://github.com/openclaw/openclaw/pull/90775) | jalehman | **修复自动压缩后提示围栏刷新问题**：解决嵌入式尝试误报"会话接管"的竞态条件，将压缩持久化通过受保护的 `SessionManager` 拥有写入回调路径 | ⭐ 已关闭 |
| [#90785](https://github.com/openclaw/openclaw/pull/90785) | Yonge-Phonely | 忽略本地构建产物（`.toon`, `.wav`, `.xlsx`）的 `.gitignore` 更新 | 已关闭 |
| [#75167](https://github.com/openclaw/openclaw/pull/75167) | DevAbdullah90 | **抑制心跳轮询提示泄露至聊天界面**：修复 Telegram/Slack/Discord 中 `[OpenClaw heartbeat poll]` 系统消息污染用户对话的问题 | 已关闭 |

### 待合并关键 PR（推进中的核心功能）

| PR | 作者 | 影响评估 |
|:---|:---|:---|
| [#89040](https://github.com/openclaw/openclaw/pull/89040) | Jerry-Xin | **嵌入式运行性能突破**：消除 `embedded_run` 启动上下文中的 14-22 秒事件循环阻塞，解决消息丢失根因 |
| [#78441](https://github.com/openclaw/openclaw/pull/78441) | guanbear | **子代理工具链转发**：`sessions_spawn` 支持 `toolsAllow` 参数，解决 Issue #85030 报告的 MCP 工具无法注入子代理问题 |
| [#85651](https://github.com/openclaw/openclaw/pull/85651) | karmafeast | **上下文压力感知续期**：`continue_work`/`continue_delegate`/`request_compaction` 三大机制，解决长运行代理的自我调度能力 |
| [#90723](https://github.com/openclaw/openclaw/pull/90723) | joshp123 | **Gmail Pub/Sub 拉取投递模式**：扩展 hooks 系统支持邮件事件驱动 |

---

## 4. 社区热点

### 🔥 讨论最激烈的 Issues

| Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---|:---|
| **#22438** Tiered bootstrap file loading | 17 | 大型工作区用户迫切要求**分层加载引导文件**以节省 LLM 令牌消耗，涉及子代理和定时任务的渐进式上下文控制 | [链接](https://github.com/openclaw/openclaw/issues/22438) |
| **#62505** Coding Agent 永远无法完成任何任务 | 14 | **回归阻断**：2026.4.2 后代码代理仅输出模糊状态更新，严重影响生产力用户 | [链接](https://github.com/openclaw/openclaw/issues/62505) |
| **#76562** 升级后高 CPU + 控制平面 RPC 延迟 | 13 ⭐ | 已关闭。从 2026.4.24 升级至 2026.4.29/5.2 后的性能回归，Node 进程 CPU 100% | [链接](https://github.com/openclaw/openclaw/issues/76562) |
| **#78308** MCP 工具调用的通道中介审批 | 12 | **安全合规诉求**：要求 MCP 工具调用（发邮件、写保险库等）复用 `/approve <id>` 审批管道 | [链接](https://github.com/openclaw/openclaw/issues/78308) |
| **#90083** OpenAI ChatGPT Responses 传输层失效 | 12 | **2026.6.1 关键回归**：`gpt-5.4`/`gpt-5.5` 的 `invalid_provider_content_type` 错误 | [链接](https://github.com/openclaw/openclaw/issues/90083) |

### 背后诉求分析

- **成本控制驱动**：#22438（令牌优化）和 #14785（工具 schema 令牌开销 ~3,500 tok/会话）反映企业用户在大规模部署下的经济压力
- **版本信任危机**：#62505、#90083、#90325 等集中爆发，显示 2026.6.1 的 QA 流程存在漏洞，用户呼吁更严格的回归测试
- **安全合规升级**：#78308 的"同意信封"设计表明 MCP 生态成熟后，企业用户要求与 shell-exec 同等级的操作审计

---

## 5. Bug 与稳定性

### 🚨 P1 严重 Bug（按紧急程度排列）

| Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|
| [#90083](https://github.com/openclaw/openclaw/issues/90083) | **2026.6.1 OpenAI ChatGPT Responses 传输层完全失效**，`gpt-5.4`/`gpt-5.5` 报 `invalid_provider_content_type` | 开放，需实时复现 | 无 |
| [#90093](https://github.com/openclaw/openclaw/issues/90093) | **原生重放发送加密推理内容**，导致下一轮 `invalid_encrypted_content` 400 错误 | 开放 | 无 |
| [#90325](https://github.com/openclaw/openclaw/issues/90325) | **Matrix 通道调度崩溃**：`TypeError: Cannot read properties of undefined (reading 'run')` | 开放，2026.6.1 回归 | 无 |
| [#90072](https://github.com/openclaw/openclaw/issues/90072) | **SQLite 迁移静默清除 Cron 状态**：45 个任务仅剩 1 个 | ⭐ **已关闭** | 无（数据已丢失） |
| [#62505](https://github.com/openclaw/openclaw/issues/62505) | 代码代理完全失效，仅输出模糊状态 | 开放，标记 stale | 无 |
| [#90466](https://github.com/openclaw/openclaw/issues/90466) | **Memory-core dreaming 回归**：会话语料库包含 `.jsonl.deleted.*` 路径，叙事阶段写入回退内容 | 开放 | 无 |
| [#90711](https://github.com/openclaw/openclaw/issues/90711) | **launchd plist `StandardErrorPath` 硬编码为 `/dev/null`**，隐藏所有网关 stderr（5.28 回归） | 开放，当日新建 | 无 |
| [#77012](https://github.com/openclaw/openclaw/issues/77012) | WebChat 会话转录本每轮被覆盖，仅保留最新消息（5.2 回归） | 开放 | 无 |

### ⚠️ P2 重要 Bug

| Issue | 描述 | 状态 |
|:---|:---|:---|
| [#88929](https://github.com/openclaw/openclaw/issues/88929) | 飞书流式卡片：异常打字机效果 + 最终内容截断至末字符 | 开放 |
| [#64810](https://github.com/openclaw/openclaw/issues/64810) | Telegram 主题会话中心跳/异步事件打断进行中回复 | 开放 |
| [#85030](https://github.com/openclaw/openclaw/issues/85030) | MCP 工具未注入子代理会话，三个配置机制全部失效 | **有 PR #78441** |

---

## 6. 功能请求与路线图信号

### 高潜力功能（已有 PR 或强烈信号）

| 功能 | Issue/PR | 纳入可能性 | 关键障碍 |
|:---|:---|:---|:---|
| **子代理工具链白名单转发** | PR #78441 | ⭐⭐⭐⭐⭐ 高 | 需维护者审查，兼容性和会话状态风险标记 |
| **上下文压力感知续期** | PR #85651 | ⭐⭐⭐⭐⭐ 高 | 超大 PR（XL），跨 10+ 通道，需分阶段合并 |
| **分层引导文件加载** | Issue #22438 | ⭐⭐⭐⭐☆ 中高 | 需产品决策，涉及会话状态架构变更 |
| **每代理记忆维基保险库** | Issue #63829 | ⭐⭐⭐⭐☆ 中高 | 9 👍 社区支持，需安全审查 |
| **MCP 工具调用审批信封** | Issue #78308 | ⭐⭐⭐☆☆ 中 | 安全优先，需实时复现 |
| **会话硬上限配置** | Issue #64463 | ⭐⭐⭐☆☆ 中 | 成本管控场景明确，但偏离当前主线 |

### 新兴趋势

- **Agentic Kernel 可观测性**：PR #90248 引入通道轮次交付和控制通道诊断，预示 OpenClaw 正从"功能实现"转向"生产级可观测"
- **TUI 性能预热**：PR #90782 针对运行时插件预热的 CPU 剖面优化，反映桌面端用户体验成为新焦点

---

## 7. 用户反馈摘要

### 💔 核心痛点

| 场景 | 原声引用 | 关联 Issue |
|:---|:---|:---|
| **版本升级恐惧** | "Upgrading from 2026.5.28 to 2026.6.1 **silently wiped 44 of 45 cron jobs**... All other cron state was lost with **no warning or backup prompt**" | #90072 |
| **代理"变傻"** | "This has been pumping out work for me for weeks and now just **doesn't do anything** apart from vague status updates (and then apologies for the vagueness)" | #62505 |
| **调试黑盒** | "StandardErrorPath hardcoded to /dev/null, **hides all gateway stderr**" | #90711 |
| **企业多租户隔离缺失** | "each agent in a multi-agent setup to maintain **its own isolated knowledge wiki** instead of sharing a single global vault" | #63829 |

### 😊 正向反馈

- **Matrix 语音消息修复**：#78016 关闭，用户 frankdierolf 确认语音消息识别恢复正常
- **性能回归快速响应**：#76562 的高 CPU 问题在 13 条评论内完成诊断和关闭

### 🔍 使用场景洞察

- **ClawInstitute 多代理协作**：Issue #37446 暴露子代理超时恢复中的幂等性缺口，显示复杂工作流已进入生产
- **移动端 + Tailscale 远程**：Issue #61005 的 Android  onboarding 问题反映边缘网络部署场景增长

---

## 8. 待处理积压

### ⏳ 长期未响应的高价值 Issue（stale 标记 + 活跃需求）

| Issue | 创建 | 最后更新 | 积压天数 | 风险 |
|:---|:---|:---|:---|:---|
| [#22438](https://github.com/openclaw/openclaw/issues/22438) 分层引导加载 | 2026-02-21 | 2026-06-05 | **105天** | 企业成本核心诉求，17 评论无维护者决策 |
| [#14785](https://github.com/openclaw/openclaw/issues/14785) 工具 schema 令牌优化 | 2026-02-12 | 2026-06-05 | **114天** | 每会话 3,500 令牌固定开销 |
| [#58818](https://github.com/openclaw/openclaw/issues/58818) 保证最近 N 条原始消息存活 | 2026-04-01 | 2026-06-05 | 66天 | 每日重置导致上下文丢失 |
| [#58730](https://github.com/openclaw/openclaw/issues/58730) exec() 沙箱隔离（Claude Code 源码泄漏启示） | 2026-04-01 | 2026-06-05 | 66天 | 安全边界，需产品决策 + 安全审查 |
| [#64664](https://github.com/openclaw/openclaw/issues/64664) 网关重启后审批状态丢失 | 2026-04-11 | 2026-06-05 | 56天 | 用户体验断裂，Telegram 场景高频 |

### 🚨 维护者行动建议

1. **紧急**：为 2026.6.1 回归问题（#90083, #90093, #90325）指派专职修复者，考虑热修复分支
2. **本周**：审查 PR #78441（子代理工具转发）和 #89040（event-loop 性能），两者解决高赞痛点
3. **本月**：对 stale > 60 天的 P2 功能请求进行批量 triage，或明确标记为 "not planned"

---

*日报生成时间：2026-06-06 | 数据来源：GitHub API 聚合 | 下次更新：2026-06-07*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析 | 2026-06-06

---

## 1. 生态全景

个人 AI 助手开源生态正处于**"从功能竞赛转向质量巩固"的关键拐点**。头部项目 OpenClaw 日均 467 Issues/500 PR 的极端活跃背后，是 2026.6.1 版本严重回归引发的信任危机；IronClaw、ZeroClaw 等第二梯队以 50 PR/日的节奏推进安全架构与工具生态，但 E2E 持续失败、审阅队列拥堵等工程债务同步累积；LobsterAI、NanoBot 等商业背景项目展现出更高的交付闭环效率（100% 当日合并率），却在社区互动深度上显露出"静默开发"风险。整体而言，**MCP 生态成熟化、多 Agent 协作、企业级安全合规**已成为全生态的共性攻坚方向，而"版本发布即事故"的频发暴露出快速迭代与质量门禁之间的结构性张力。

---

## 2. 各项目活跃度对比

| 项目 | Issues (新/活跃/关闭) | PRs (待合并/已合并) | 今日 Release | 健康度评估 | 关键信号 |
|:---|:---|:---|:---:|:---|:---|
| **OpenClaw** | 467 (340/127) | 500 (376/124) | ❌ 无 | ⚠️ **高压修复期** | 2026.6.1 回归危机，P1 Bug 集群爆发，审查带宽濒临极限 |
| **IronClaw** | 13 (10/3) | 50 (29/21) | ❌ 无 | 🟡 **架构冲刺期** | Hook 框架生产激活完成，但 E2E 失败 10 天阻塞发版 |
| **ZeroClaw** | 50 (44/6) | 50 (34/16) | ❌ 无 | 🟡 **扩张承压期** | 工具生态大爆发（IoT/WASM/短信），34 PR 待审阅瓶颈凸显 |
| **CoPaw/QwenPaw** | 24 (18/6) | 25 (10/15) | ❌ 无 | 🟡 **质量转型期** | 2 个 P0 崩溃（内存泄漏/配置损坏）无修复，Yuanbao 渠道系统性故障 |
| **LobsterAI** | 3 (3/0, 全 stale) | 13 (0/13) | ✅ 2026.6.5 | 🟢 **高效交付期** | 100% 当日闭环率，但社区互动归零，存在"静默开发"风险 |
| **NanoBot** | 10 (6/4) | 28 (17/11) | ❌ 无 | 🟢 **稳步打磨期** | 桌面端正式发布筹备中，"运行时不丢状态"成为核心主题 |
| **Hermes Agent** | 50 (45/5) | 50 (46/4) | ❌ 无 | 🔴 **严重拥堵期** | PR 合并率仅 8%，46 PR 积压，WSL/中文输入问题集群爆发 |
| **Moltis** | 4 (3/1) | 5 (4/1) | ❌ 无 | 🟢 **精细打磨期** | 低活跃但聚焦，Docker/Podman 沙盒稳定性为核心 |
| **PicoClaw** | 4 (2/2) | 22 (0/22, 多为依赖更新) | ⚠️ nightly | 🟢 **稳健维护期** | 防御性编程为主，用户感知功能迭代弱 |
| **NanoClaw** | 0 | 3 (1/2) | ❌ 无 | 🟢 **低维护期** | HuggingFace 集成易用性打磨，Claude 529 容错待审 |
| **NullClaw** | 0 | 1 (1/0) | ❌ 无 | ⚪ **停滞期** | 零活动，单 PR 无审阅，外部贡献者留存风险 |
| **TinyClaw** | — | — | — | ⚪ **休眠期** | 24h 无活动 |
| **ZeptoClaw** | — | — | — | ⚪ **休眠期** | 24h 无活动 |

---

## 3. OpenClaw 在生态中的定位

### 规模与影响力：绝对头部，但信任边际递减

| 维度 | OpenClaw | 对比基准 |
|:---|:---|:---|
| **日活跃 Issues** | 467 | ZeroClaw/IronClaw 的 9-10 倍，NanoBot 的 47 倍 |
| **日活跃 PR** | 500 | 全生态最高，但待合并率 75%（376/500）暴露审查瓶颈 |
| **社区讨论深度** | #22438 105 天 17 评论无决策 | 对比 ZeroClaw #6808 的 9 评论即触发 RFC 流程 |

**核心悖论**：OpenClaw 的 Issue/PR 绝对数量构成生态"引力中心"，但高活跃与高流失并存——#62505 代码代理失效、#90072 Cron 数据静默丢失等回归问题正在侵蚀"版本升级信任"。

### 技术路线差异：通道优先 vs. 安全优先

| 特征 | OpenClaw | IronClaw | ZeroClaw |
|:---|:---|:---|:---|
| **架构核心** | 多通道编排（50+ 通道）+ 嵌入式运行 | Reborn 事件驱动 + Hook 安全框架 | WASM 插件沙盒 + 工具生态集市 |
| **安全模型** | 通道级审批（`/approve <id>`） | 租户隔离 + 对抗性一致性测试 | 可插拔安全层 Provider + OIDC |
| **扩展机制** | MCP/原生工具混合 | 技能包 + Hook 框架 | WASM/Extism 插件 + 内置工具 |
| **企业就绪度** | 成本优化驱动（#22438 令牌分层） | 审计合规驱动（SecurityAuditSink） | 通信渠道驱动（5 SMS 网关同日上线） |

**OpenClaw 的独特优势**：**"嵌入式运行"（embedded_run）的实时性能优化**（PR #89040 消除 14-22 秒 event-loop 阻塞）和**子代理工具链转发**（PR #78441 解决 MCP 注入难题）在复杂工作流场景下仍具技术领先性；但其**Matrix/Slack/Discord 等通道的稳定性**正被 NanoBot、Hermes Agent 等竞品追赶。

### 社区规模对比：广度 vs. 深度

| 指标 | OpenClaw | ZeroClaw | CoPaw |
|:---|:---|:---|:---|
| 长期积压 (>60 天) | #22438 (105天)、#14785 (114天) | #5601 (57天)、#6165 (40天) | #4744 (9天，相对年轻) |
| 首次贡献者友好度 | 低（XL PR #85651 跨 10+ 通道） | 中（theonlyhennygod 主导，存在单点） | **高**（今日 4 位首次贡献者合并） |
| 维护者响应模式 | 批量 triage 呼吁 | RFC 驱动决策 | 快速补丁（Yuanbao 4 Issue 2 PR 同日） |

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 紧迫度 |
|:---|:---|:---|:---:|
| **MCP 生态成熟化** | OpenClaw (#85030/#78308)、NanoBot (#4211)、Hermes Agent (#21563/#37589)、CoPaw (#1347) | 工具注入子代理、审批信封、连接生命周期管理、stdio 崩溃重连 | 🔴 **极高** |
| **多 Agent 协作** | OpenClaw (#78441 子代理工具转发)、NanoBot (#3992 跨 Agent 消息总线)、ZeroClaw (#7218 A2A Agent 发现)、IronClaw (Reborn 多租户) | 会话状态隔离、消息路由、能力发现协议、委托权限链 | 🟡 **高** |
| **企业级安全合规** | IronClaw (Hook 框架/审计日志)、ZeroClaw (OIDC/可插拔安全层/Air-gapped)、OpenClaw (#78308 审批管道)、LobsterAI (#1534 日志脱敏) | 人类在环审批、凭证脱敏、租户隔离、执行审计、离线模式 | 🟡 **高** |
| **上下文/记忆管理优化** | OpenClaw (#22438 分层引导/#85651 压力感知续期)、NanoBot (#4212 记忆可信度)、PicoClaw (#2968 双阈值展示)、CoPaw (#4968 内存泄漏) | 令牌成本控制、长会话稳定性、记忆推断可信度、上下文透明性 | 🟡 **高** |
| **桌面端/本地运行体验** | NanoBot (桌面正式发布筹备)、Hermes Agent (中文 IME/NVIDIA 兼容)、LobsterAI (Tauri/PyInstaller 双方案)、CoPaw (Tauri Intel 支持) | 跨平台打包、权限管理、状态持久化、更新机制 | 🟢 **中** |
| **生产级可观测性** | OpenClaw (PR #90248 通道诊断)、IronClaw (#7232 OTel 关联)、ZeroClaw (#7232 结构化可观测性) | 轮次追踪、错误分类精确性、性能剖面、API 错误码分布 | 🟢 **中** |

---

## 5. 差异化定位分析

| 项目 | 核心战场 | 目标用户画像 | 技术架构标签 | 关键差异点 |
|:---|:---|:---|:---|:---|
| **OpenClaw** | 多通道企业自动化 | 技术团队、DevOps、渠道运营者 | Node.js 事件驱动 + 嵌入式运行时 | **通道生态最丰富**，但版本质量波动大 |
| **IronClaw** | 安全优先的企业 AI 平台 | 金融、医疗等合规敏感行业 | Rust 事件溯源 + Reborn 架构 | **Hook 安全框架**生产级落地，审计能力最强 |
| **ZeroClaw** | 工具/插件生态集市 | 极客、IoT 开发者、通信集成商 | Rust/WASM 沙盒 + 可插拔架构 | **WASM 插件化**最彻底，内置工具扩展最快 |
| **LobsterAI** | 商业桌面生产力工具 | 知识工作者、文档协作用户 | Electron/Tauri 双壳 + 日历化发版 | **商业化闭环最完整**（订阅/额度/漏斗），但开源社区薄弱 |
| **NanoBot** | 轻量可嵌入 SDK | 二次开发者、多平台集成商 | Python 异步 + 技能系统 | **"状态不丢"体验**打磨最细，桌面端即将首发 |
| **CoPaw/QwenPaw** | 中文本土生态 + 浏览器自动化 | 中国开发者、RPA 用户 | Python + Tauri + Playwright | **Yuanbao/DeepSeek 等国产模型适配**最快，但稳定性债务累积 |
| **Hermes Agent** | CLI/TUI 优先的开发者工具 | 终端用户、Vim/Emacs 群体 | Python + Electron 桌面 | **技能路由**设计独特，但合并管道严重拥堵 |
| **Moltis** | Docker/Podman 自托管 | 中小企业自托管用户 | 容器原生 + 沙盒执行 | **部署环境感知**最精细，移动端体验待补 |
| **PicoClaw** | 低资源嵌入式场景 | 边缘设备、IoT 网关 | Go 轻量运行时 | **防御性编程**文化最强，但功能迭代保守 |

---

## 6. 社区热度与成熟度分层

```
快速迭代阶段（功能扩张 > 质量巩固）
├── ZeroClaw: 工具/渠道疯狂扩展，34 PR 积压，架构方向存争议 (#6165)
├── IronClaw: Reborn 重构 + Hook 激活，但 E2E 失败阻塞发版
└── CoPaw: Yuanbao 渠道紧急适配，P0 崩溃尚未响应

质量巩固阶段（稳定性/体验打磨）
├── NanoBot: 桌面端发布前夜，"不丢状态"成为唯一主题
├── Moltis: 低活跃但精准，Docker/Podman 沙盒收尾
├── LobsterAI: 100% 当日合并率，但社区互动归零
└── PicoClaw: 防御性修复为主，nightly 持续但无里程碑

危机/转型阶段
├── OpenClaw: 2026.6.1 回归危机，从"功能领先"转向"信任修复"
└── Hermes Agent: 8% 合并率，46 PR 积压，WSL/中文问题集群

休眠/停滞阶段
├── NanoClaw: 低维护，单 PR 待审
├── NullClaw: 零活动，外部贡献者留存风险
├── TinyClaw: 24h 无活动
└── ZeptoClaw: 24h 无活动
```

---

## 7. 值得关注的趋势信号

### 信号一：**"版本发布即事故"成为结构性风险**

| 证据 | 影响 |
|:---|:---|
| OpenClaw 2026.6.1: Matrix 崩溃 + ChatGPT 传输层失效 + Cron 数据丢失 | 用户呼吁"升级恐惧"成为常态 |
| Hermes Agent v0.15.1: sticky message 退化 + 更新机制断裂 | 补丁版本需求迫切但管道拥堵 |
| IronClaw v0.29.1: E2E 失败 10 天无法发版 | 质量门禁与交付节奏的冲突 |

**对开发者的价值**：建立**"金丝雀通道 + 自动回滚 + 状态备份"**的三层防御机制，将版本发布从"大爆炸"转为"渐进式交付"。OpenClaw #90072 的 Cron 数据丢失（无警告/无备份）是反面教材。

### 信号二：**MCP 从"协议标准"转向"安全战场"**

| 证据 | 演进 |
|:---|:---|
| OpenClaw #78308: MCP 工具调用需复用 `/approve` 审批管道 | 从"能调用"到"受控调用" |
| NanoBot #4211: SDK 嵌入时 MCP 连接生命周期管理 | 从"即插即用"到"全生命周期治理" |
| Hermes Agent #21563: MCP 审批 IPC 通道缺失导致安全架构空洞 | 从"表面合规"到"深度审计" |

**对开发者的价值**：MCP 集成不能止步于协议适配，需同步设计**调用审批、凭证隔离、执行审计、错误重试**四位一体的安全框架。

### 信号三：**"记忆可信度"从工程问题上升为产品问题**

| 证据 | 核心矛盾 |
|:---|:---|
| NanoBot #4212: consolidator 未确认推断被反复注入固化为"事实" | 记忆的"生成"与"验证"未分离 |
| OpenClaw #85651: 上下文压力感知续期机制 | 记忆的"保留"与"丢弃"无透明策略 |
| PicoClaw #3012: Evolution 模式静默消耗 token | 记忆的"主动思考"与"成本控制"失衡 |

**对开发者的价值**：Agent 记忆系统需引入**"置信度标签 + 来源追溯 + 人工修正回路"**，避免"AI 幻觉"通过记忆机制被放大为"系统性偏见"。

### 信号四：**中国企业微信/钉钉/飞书等渠道成为独立战场**

| 证据 | 生态位 |
|:---|:---|
| IronClaw: WeCom 群聊审批/标题区分/onboarding 事件错位（5+ Issue） | 企业微信深度适配 |
| NanoBot: 钉钉群白名单 + 微信/telegram 私聊配对修复 | 钉钉 + 微信生态 |
| LobsterAI: IM 回复仅基于当前轮次（#2115） | 通用 IM 场景优化 |
| CoPaw: Yuanbao 渠道 4 个系统性 Bug 紧急修复 | 腾讯元宝快速跟进 |

**对开发者的价值**：中国 IM 渠道的**审批语义、群聊身份模型、消息卡片格式**与 Slack/Discord 存在本质差异，需独立适配而非简单移植。IronClaw sunglow666 的深度反馈链（#4191/#4502/#4505/#4500）提供了企业微信的完整验收标准。

### 信号五：**从"单 Agent 全能"到"多 Agent 分工"的架构迁移**

| 证据 | 模式 |
|:---|:---|
| OpenClaw #78441: 子代理工具链转发 | 主-子代理工具委托 |
| NanoBot #3992: 跨 Agent 消息总线 | 多实例协作 |
| ZeroClaw #6969: 按渠道/紧急度路由回复方式 | Agent 间通信策略 |
| IronClaw #4506: ProductWorkflow 门面拆分 | 为 OpenAI 兼容 API 的多 Agent 接入铺路 |

**对开发者的价值**：多 Agent 架构需提前设计**"能力发现协议 + 会话状态隔离边界 + 委托权限链"**，避免从"单体智能"到"分布式混乱"的阵痛。OpenClaw 的 `sessions_spawn` + `toolsAllow` 参数设计是可参考的实践。

---

*分析基于 2026-06-06 各项目公开 GitHub 数据，未包含私有讨论或商业决策信息。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-06-06

## 1. 今日速览

过去24小时 NanoBot 社区保持**高活跃度**：Issues 更新 10 条（6 开/活跃，4 关闭），PR 更新 28 条（17 待合并，11 已合并/关闭），无新版本发布。今日核心工作围绕**稳定性修复**（SDK MCP 连接泄漏、会话消息截断 Bug）、**桌面/WebUI 体验打磨**（token 刷新、fork 对话、重启后消息回放）以及**渠道能力扩展**（钉钉群白名单、Exa 搜索、邮件 IMAP 后处理）展开。多个用户高频痛点（微信/telegram 私聊配对失败、浏览器刷新丢消息）在24小时内被关闭，响应速度较快。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 进展说明 |
|---|---|---|
| [#4210 Fix desktop restart token and replay gaps](https://github.com/HKUDS/nanobot/pull/4210) | chengyongru | 桌面端/WebUI 在原生引擎重启后自动刷新 bootstrap/API token；持久化 WebSocket transcript 事件，解决无客户端订阅时刷新/重连丢失流式输出的问题；新增桌面通知支持。这是桌面体验的关键修复。 |
| [#4197 Fix DM pairing for Weixin and Telegram](https://github.com/HKUDS/nanobot/pull/4197) | chengyongru | 修复微信和 Telegram 的私聊（DM）配对逻辑，被拒绝的私聊发送者现在走统一的 BaseChannel 配对流程，同时保留微信原有的副作用防护。 |
| [#3968 feat(command): add /skill slash command](https://github.com/HKUDS/nanobot/pull/3968) | Endeavour-Yuan | 新增 `/skill` 内置斜杠命令，列出所有已启用的技能名称和描述，回应了 #3959 的反馈。 |
| [#4216 fix(sdk): close MCP connections from Nanobot facade](https://github.com/HKUDS/nanobot/pull/4216) | axelray-dev | 对应 #4211，为 SDK 暴露 MCP 连接关闭能力，解决 `asyncio.run()` 退出时的 `RuntimeError`。 |

### 整体推进评估

今日合并工作集中在**"运行时不丢状态"**和**"多渠道私聊正确配对"**两个主题，属于项目从 demo 级体验向生产级体验过渡的关键补丁。`/skill` 命令补齐了用户发现性短板。

---

## 4. 社区热点

| 条目 | 热度信号 | 诉求分析 |
|---|---|---|
| [#3959 [bug] /skill list disabled skills](https://github.com/HKUDS/nanobot/issues/3959) | 4 条评论，已关闭 | 用户核心诉求：配置中禁用的技能不应出现在 `/skill` 列表中。该 Issue 推动了 #3968 的实现，说明社区对"技能可见性=实际可用性"有强一致预期。 |
| [#4204 [enhancement] Add extra_query support for OpenAI-compatible providers](https://github.com/HKUDS/nanobot/issues/4204) | 新建，含 PATCH 思路，1 评论 | 企业用户通过 Azure 风格网关调用时，需要注入 `?api-version=` 等查询参数，现有 ProviderConfig 无法覆盖。这是**企业私有化部署**的典型阻塞点。 |
| [#4212 Prevent re-injected history from reinforcing unconfirmed inferences](https://github.com/HKUDS/nanobot/issues/4212) | 新建，0 评论，但问题深度高 | 长期记忆机制中，consolidator 生成的"标记事实"被反复注入系统提示，可能将未确认推断固化为广泛事实，且修正后仍持续存在。这是**Agent 记忆可信度**的架构级问题。 |
| [#3992 feat(agent-collab) - enable cross agent messaging](https://github.com/HKUDS/nanobot/pull/3992) | 评论数最多 PR 之一，持续更新 | 多 Agent 实例通过共享消息总线协作，是 NanoBot 从单 Agent 向多 Agent 系统演进的重要功能，已标记为 ready。 |

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue/PR | 描述 | Fix PR 状态 |
|---|---|---|---|
| 🔴 高 | [#4211 SDK leaves stdio MCP open → RuntimeError at shutdown](https://github.com/HKUDS/nanobot/issues/4211) | SDK 嵌入 stdio MCP 服务器时，解释器关闭抛出未处理的 `RuntimeError`，影响所有 SDK 集成场景。 | ✅ [#4216](https://github.com/HKUDS/nanobot/pull/4216) 已提交 |
| 🔴 高 | [#4203 find_legal_message_start 丢弃所有消息](https://github.com/HKUDS/nanobot/issues/4203) | 用户消息后存在孤立工具结果时，函数错误返回列表长度，导致**整个消息历史被清空**。 | ✅ [#4215](https://github.com/HKUDS/nanobot/pull/4215) 已提交 |
| 🟡 中 | [#4200 bug user message loss when refresh browser](https://github.com/HKUDS/nanobot/issues/4200) | 浏览器刷新导致用户消息丢失，影响 WebUI 基础体验。 | ✅ 已由 [#4210](https://github.com/HKUDS/nanobot/pull/4210) 修复并关闭 |
| 🟡 中 | [#3959 /skill list disabled skills](https://github.com/HKUDS/nanobot/issues/3959) | `/skill` 列出已禁用技能，造成用户混淆。 | ✅ 已由 [#3968](https://github.com/HKUDS/nanobot/pull/3968) 修复并关闭 |
| 🟢 低 | [#1946 Matrix test error on main](https://github.com/HKUDS/nanobot/issues/1946) | `tests/test_matrix_channel.py` 在 main 分支测试失败，3 个月未解决，今日重新活跃。 | ❌ 待处理 |

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 纳入下一版本可能性 | 判断依据 |
|---|---|---|---|
| **OpenAI-compatible 提供商 `extra_query` 支持** | [#4204](https://github.com/HKUDS/nanobot/issues/4204) | ⭐⭐⭐⭐ 高 | 作者 mraad 已提供 PATCH 思路，企业部署刚需，改动面小。 |
| **子 Agent `fail_on_tool_error` 可配置** | [#4198](https://github.com/HKUDS/nanobot/issues/4198) | ⭐⭐⭐⭐ 高 | 呼声明确，只需暴露配置项，与现有子 Agent 重构方向一致。 |
| **火山引擎/自定义图片生成提供商** | [#4196](https://github.com/HKUDS/nanobot/issues/4196), [#4132](https://github.com/HKUDS/nanobot/issues/4132) | ⭐⭐⭐ 中 | #4132 已关闭但未说明是否合并实现，#4196 被标 duplicate，说明已在雷达上，但多渠道图像生成的架构统一仍需时间。 |
| **Exa 网页搜索提供商** | [#4213](https://github.com/HKUDS/nanobot/pull/4213) | ⭐⭐⭐⭐ 高 | PR 已提交，搜索提供商扩展模式成熟，易合并。 |
| **邮件 IMAP 处理后动作（移动/删除/标记已读）** | [#4170](https://github.com/HKUDS/nanobot/pull/4170) | ⭐⭐⭐⭐ 高 | 功能完整，对"Agent 托管邮箱"场景价值极高。 |
| **跨 Agent 消息总线** | [#3992](https://github.com/HKUDS/nanobot/pull/3992) | ⭐⭐⭐⭐ 高 | 已实现并测试，属于架构级演进，可能随较大版本发布。 |
| **桌面端正式发布准备** | [#4195](https://github.com/HKUDS/nanobot/pull/4195) | ⭐⭐⭐⭐⭐ 极高 | PR 明确标注"prepares nanobot's first open desktop surface"，是近期最优先级。 |
| **放弃 Python 3.11/3.12 支持** | [#4207](https://github.com/HKUDS/nanobot/pull/4207) | ⭐⭐⭐⭐ 高 | CI 已只测 3.13/3.14，同步声明是技术债清理，但需注意破坏性变更沟通。 |

---

## 7. 用户反馈摘要

### 真实痛点
- **状态丢失焦虑**：浏览器刷新丢消息、桌面引擎重启后 token/流式输出丢失——用户对"长会话不丢状态"有强预期。
- **配置即代码的盲区**：`disabledSkills` 被 `/skill` 列出、Azure 网关需要 `extra_query`、自定义图片生成提供商不被识别，均反映**配置语义与实际运行时行为不一致**。
- **SDK 集成粗糙**：嵌入 NanoBot 时 MCP 连接生命周期未暴露，错误信息晦涩（`exit cancel scope in a different task`），阻碍二次开发。

### 使用场景
- **企业私有化部署**：Azure 风格网关、火山引擎、Agnes AI 等自定义提供商接入需求密集。
- **Agent 托管邮箱/群聊**：邮件自动归档、钉钉群白名单、微信/telegram 私聊配对，说明用户正将 NanoBot 投入**生产型自动化场景**。
- **多 Agent 协作**：跨实例消息总线需求出现，项目用户开始探索复杂工作流。

### 满意/不满意
- ✅ 响应速度快：多个 Bug（#4200、#3959、#4197）24 小时内关闭。
- ❌ 测试覆盖与 CI 透明度不足：#1946 Matrix 测试失败 3 个月未修，两个 CI 相关 PR（#1408、#1284）长期挂起。

---

## 8. 待处理积压

| 条目 | 创建时间 | 最后更新 | 提醒 |
|---|---|---|---|
| [#1946 Matrix test error on main](https://github.com/HKUDS/nanobot/issues/1946) | 2026-03-13 | 2026-06-05 | 近 3 个月未解决，main 分支测试失败影响发布信心，建议维护者优先认领或标记 help-wanted。 |
| [#1408 feat(CI): add unit-test workflow with coverage gate and README badge](https://github.com/HKUDS/nanobot/pull/1408) | 2026-03-02 | 2026-06-05 | CI 基础设施 PR 已挂起 3 个月，与 #1284 存在重叠，建议维护者统一评审或明确取舍。 |
| [#1284 Add CI workflow with quality checks and coverage](https://github.com/HKUDS/nanobot/pull/1284) | 2026-02-27 | 2026-06-05 | 同上，两个 CI PR 并行，需维护者决策合并哪一个或合并两者。 |
| [#3538 feat: add gateway start/stop/restart commands](https://github.com/HKUDS/nanobot/pull/3538) | 2026-04-29 | 2026-06-05 | gateway 生命周期管理 PR 已挂起 1 个月，对运维场景重要，建议安排 review。 |

---

*日报基于 GitHub 公开数据生成，所有链接指向 github.com/HKUDS/nanobot。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-06-06

---

## 1. 今日速览

Hermes Agent 今日呈现**高活跃度、高积压状态**。过去24小时内 Issues 和 PR 各更新 50 条，但合并/关闭率极低（Issues 关闭率仅 10%，PR 合并/关闭率仅 8%），46 个 PR 处于待合并状态，显示代码审查管道严重拥堵。社区焦点集中在**桌面端稳定性**（Windows/WSL 路径处理、中文 IME 输入、NVIDIA 驱动兼容）和**网关/代理核心逻辑**（MCP 审批桥接、技能路由、max_tokens 传播）。无新版本发布，v0.15.1 的多个已知问题仍在等待修复。

---

## 2. 版本发布

**无新版本发布**

当前最新版本仍为 **v0.15.1**（commit `66a66b9c`），该版本引入了多项回归问题（见第5节），社区对补丁版本需求迫切。

---

## 3. 项目进展

### 已合并/关闭的 PR（4 条）

| PR | 作者 | 说明 | 进展评估 |
|:---|:---|:---|:---|
| [#40194](https://github.com/NousResearch/hermes-agent/pull/40194) | NosytLabs | 修复 `hermes update` 在 editable/git 安装模式下错误报告"Not a git repository"的问题 | ⭐ 关键修复：解决更新通道断裂 |
| [#40191](https://github.com/NousResearch/hermes-agent/pull/40191) | davidgut1982 | 聚合修复 `hermes update` 三大 P1 级 bug：venv 检测、uv 参数 arity、v25→v26 迁移 | ⭐⭐ 核心基础设施修复，直接影响用户升级体验 |
| [#20967](https://github.com/NousResearch/hermes-agent/pull/20967) | TheEpTic | 为 `session_search` 添加中断检查点，解决 15-30 秒 CLI 冻结 | 用户体验改进 |
| [#18726](https://github.com/NousResearch/hermes-agent/pull/18726) | Frankleee | `/model` 选择器支持用 provider config 的 `models` 字段作为白名单 | 自定义 provider 体验优化 |

**整体推进评估**：今日合并的 PR 集中在** CLI 更新基础设施**和**交互响应性**修复，但数量远少于待审积压。项目核心功能（网关、TUI、Agent 路由）的前向推进有限。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 核心诉求 |
|:---|:---|:---|:---|
| 1 | [#13944](https://github.com/NousResearch/hermes-agent/issues/13944) 技能描述截断至60字符破坏路由 | 6 | **Agent 核心能力受损**：系统提示中的技能索引硬截断描述，导致模型缺乏触发条件上下文，技能路由准确率下降 |
| 2 | [#40146](https://github.com/NousResearch/hermes-agent/issues/40146) 中文 IME 输入时发送按钮不切换 | 3 | **CJK 用户基础体验**：IME composition 状态下 UI 状态机未更新，反映国际化测试覆盖不足 |
| 3 | [#21563](https://github.com/NousResearch/hermes-agent/issues/21563) MCP 审批工具为无操作 | 3 | **安全架构断裂**：审批状态 IPC 通道缺失，MCP 桥接的权限系统形同虚设 |

### 热点分析

- **#13944** 虽创建于4月，但今日仍有活跃讨论，说明技能路由质量是长期痛点。60字符截断是**设计决策与模型能力错配**的典型——随着模型上下文窗口扩大，过度激进的截断反而损害性能。
- **#40146** 与 **#40145/#40142** 形成集群：桌面端中文输入问题在24小时内被不同用户重复报告，存在**重复 Issue 未去重**问题。
- **#21563** 暴露安全架构的深层缺陷：MCP 作为外部工具连接标准，其审批回路的 IPC 通道缺失意味着"人类在环"承诺无法兑现。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 优先级 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| **P2** | [#40139](https://github.com/NousResearch/hermes-agent/issues/40139) | Secret 脱敏功能**篡改实际命令执行**，破坏 `printf`/`sed`/`perl` 等工具 | 🔴 新报 | 无 |
| **P2** | [#40103](https://github.com/NousResearch/hermes-agent/issues/40103) | `sanitize_title` 错误移除 ESC 锚定符，ANSI 转义序列残留为标题垃圾 | 🔴 新报 | 无 |
| **P2** | [#37589](https://github.com/NousResearch/hermes-agent/issues/37589) | 桌面端会话丢失已配置 MCP 工具，macOS GUI PATH 下 `uvx` 服务器启动失败 | 🟡 活跃 | 无 |
| **P2** | [#40137](https://github.com/NousResearch/hermes-agent/issues/40137) | WSL 环境下终端工具注入 Windows 路径 | 🔴 新报 | 无 |
| **P2** | [#40138](https://github.com/NousResearch/hermes-agent/issues/40138) | 文件工具在 Linux 路径前预挂 Windows 盘符 | 🔴 新报 | 无 |
| **P2** | [#40140](https://github.com/NousResearch/hermes-agent/issues/40140) | 桌面端创建独立 HERMES_HOME，不连接现有 WSL 安装 | 🔴 新报 | 无 |
| **P2** | [#40144](https://github.com/NousResearch/hermes-agent/issues/40144) | 网关 `/clear` 未路由至会话重置 | 🟡 活跃 | [#40144](https://github.com/NousResearch/hermes-agent/pull/40144) ✅ |
| **P2** | [#39694](https://github.com/NousResearch/hermes-agent/issues/39694) | Telegram clarify 提示错误附加忙会话控件 | 🟡 活跃 | 无 |
| **P3** | [#40146](https://github.com/NousResearch/hermes-agent/issues/40146) | 中文 IME 输入时发送按钮不切换 | 🔴 新报 | 无 |
| **P3** | [#40077](https://github.com/NousResearch/hermes-agent/issues/40077) | NVIDIA 580+ 驱动下桌面端崩溃（Ubuntu 24.04） | 🔴 新报 | 无 |
| **P3** | [#40069](https://github.com/NousResearch/hermes-agent/issues/40069) | OAuth 模式下设置保存失败 `net::ERR_INVALID_ARGUMENT` | 🔴 新报 | 无 |
| **P3** | [#39860](https://github.com/NousResearch/hermes-agent/issues/39860) | macOS 桌面端更新失败，`electron-winstaller` postinstall EAGAIN | 🟡 活跃 | 无 |

### 关键模式

1. **WSL/跨平台路径问题集群**：#40137、#40138、#40140 由同一用户（BigDon86）在2小时内连续报告，反映 Windows 桌面端 ↔ WSL 后端的路径抽象层存在**系统性架构缺陷**，非孤立 bug。
2. **安全相关回归**：#40139 的 secret 脱敏"过度作用"是**安全功能反噬功能安全**的典型案例，影响所有依赖 shell 字符串操作的 workflow。
3. **Electron/NVIDIA 兼容性**：#40077 确认 Electron 40.9.3 与 NVIDIA 580 驱动系列存在已知兼容性问题，可能需要升级 Electron 或添加 `--disable-gpu` 回退。

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#40196](https://github.com/NousResearch/hermes-agent/issues/40196) CLI/TUI 会话谱系树查看器 | 功能请求 | ⭐⭐⭐ 高 | 复用现有 `parent_session_id` 数据，纯 UI 层工作 |
| [#40195](https://github.com/NousResearch/hermes-agent/issues/40195) ByteDance/BytePlus ModelArk 官方 provider | 功能请求 | ⭐⭐⭐ 高 | OpenAI/Anthropic 双兼容，接入成本低 |
| [#40189](https://github.com/NousResearch/hermes-agent/issues/40189) 委托会话添加 `delegated_role` 字段 | 功能请求 | ⭐⭐⭐ 高 | 数据模型小扩展，增强可观测性 |
| [#35573](https://github.com/NousResearch/hermes-agent/issues/35573) ToolCallStormBreaker — 抑制重复工具调用循环 | RFC | ⭐⭐ 中 | 有明确问题定义，但需设计检测启发式 |
| [#32247](https://github.com/NousResearch/hermes-agent/pull/32247) "cyber" 技能包 | PR | ⭐ 低 | 描述为空，缺乏上下文，长期未更新 |

### 已有关联 PR 的功能

| PR | 对应需求 | 状态 |
|:---|:---|:---|
| [#40192](https://github.com/NousResearch/hermes-agent/pull/40192) | #40190 Firecrawl 配置读取修复 | 待合并 |
| [#40188](https://github.com/NousResearch/hermes-agent/pull/40188) | #40183 文档澄清 curator 行为 | 待合并 |
| [#40186](https://github.com/NousResearch/hermes-agent/pull/40186) / [#40185](https://github.com/NousResearch/hermes-agent/pull/40185) | max_tokens 传播至 TUI/CLI 后台 agent | 待合并 |

---

## 7. 用户反馈摘要

### 痛点提炼

| 场景 | 原声反馈 | 频率 |
|:---|:---|:---|
| **Windows 桌面端 + WSL 后端** | "创建独立 HERMES_HOME，不连接现有 WSL 安装" | 🔥 高频（3 相关 Issue/2 小时） |
| **中文输入** | "发送消息后模型实际收到的内容被截断，只保留了前半部分" | 🔥 高频（重复报告） |
| **更新机制不可靠** | "最终阶段编译 electron app 失败" / "Not a git repository" | 🔥 高频（2 个 Fix PR 才覆盖） |
| **安全功能误伤** | "secret redaction 修改实际命令执行和输出" | ⚠️ 中频 |
| **MCP 工具发现不一致** | "CLI 能发现但 Desktop 缺失" | ⚠️ 中频 |

### 满意度信号

- **正面**：`archive-all` 确认对话框改进（#40197）显示对批量操作安全性的关注
- **负面**：v0.15.1 的 sticky message 行为（#37918）对 cron/定时会话造成体验退化

---

## 8. 待处理积压

### 需维护者优先关注的长期 Issue

| Issue | 创建日期 | 最后更新 | 风险 |
|:---|:---|:---|:---|
| [#13944](https://github.com/NousResearch/hermes-agent/issues/13944) 技能描述截断 | 2026-04-22 | 2026-06-05 | 🚨 **Agent 核心路由质量**，45天未解决，6 评论无维护者回应 |
| [#21563](https://github.com/NousResearch/hermes-agent/issues/21563) MCP 审批无操作 | 2026-05-07 | 2026-06-05 | 🚨 **安全架构空洞**，30天无修复，影响 MCP 生态信任 |
| [#35357](https://github.com/NousResearch/hermes-agent/issues/35357) Tirith 审批门未覆盖非 shell 工具 | 2026-05-30 | 2026-06-05 | 🚨 **安全绕过**，`send_message`/`write_file` 自动执行无审批 |
| [#37589](https://github.com/NousResearch/hermes-agent/issues/37589) 桌面端 MCP 工具缺失 | 2026-06-02 | 2026-06-05 | 4天，有 👍 1，跨平台 PATH 问题复杂 |
| [#37918](https://github.com/NousResearch/hermes-agent/issues/37918) sticky message 遮挡 cron 输出 | 2026-06-03 | 2026-06-05 | v0.15.1 回归，3天 |

### PR 审查积压警报

- **46 个待合并 PR** 中，包含 5 个今日提交的修复类 PR（#40192、#40188、#40186、#40185、#40184、#40182、#40177、#40179 等），建议维护者优先审查**安全相关**（#40179 CVE 清理）和**数据完整性**（#40177 WAL 文件锁）的 PR。

---

*日报生成时间：2026-06-06 | 数据来源：NousResearch/hermes-agent GitHub*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-06-06

> **项目**: [sipeed/picoclaw](https://github.com/sipeed/picoclaw)  
> **日期**: 2026-06-06 | **数据周期**: 过去24小时

---

## 1. 今日速览

PicoClaw 今日呈现**高合并吞吐量、低社区讨论热度**的特征。24小时内 22 个 PR 完成合并/关闭，但绝大多数为依赖更新和机器人提交的 stale PR 清理，仅 4 条含实质代码变更。Issues 侧 4 闭 2 开，新报 bug 涉及 **Evolution 模式持续消耗 token** 和 **skill-creator 文档失效**两个可用性问题。整体项目维护节奏稳健，但用户侧功能迭代感知较弱，nightly 构建持续输出表明主干开发活跃。

---

## 2. 版本发布

### 🔧 Nightly Build: v0.2.9-nightly.20260605.5224b9a4
- **发布时间**: 2026-06-05
- **类型**: 自动化构建（不稳定版本）
- **变更范围**: 自 `v0.2.9` 至 `main` 分支的全部增量提交
- **完整对比**: [v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

> ⚠️ **注意事项**: 此为自动化 nightly 构建，可能包含未充分测试的代码，生产环境建议继续使用稳定版 `v0.2.9`。

---

## 3. 项目进展

### 今日核心合并（4 项实质变更）

| PR | 作者 | 说明 | 关联 Issue |
|:---|:---|:---|:---|
| [#2985](https://github.com/sipeed/picoclaw/pull/2985) | chengzhichao-xydt | **`/context` 命令显示优化**：同时展示 summarize 和 compress 双阈值，解决用户仅看到压缩阈值 76800 tokens 的困惑 | [#2968](https://github.com/sipeed/picoclaw/issues/2968) |
| [#3009](https://github.com/sipeed/picoclaw/pull/3009) | chengzhichao-xydt | **OneBot 群聊路由修复**：为 group ChatID 添加 `group:` 前缀，修复误用 `send_private_msg` 发送群消息的问题 | [#3002](https://github.com/sipeed/picoclaw/issues/3002) |
| [#3010](https://github.com/sipeed/picoclaw/pull/3010) | chengzhichao-xydt | **防御性编程**：`toChannelHashes` 中添加类型断言 `ok` 检查，防止异常配置导致 panic | — |
| [#3011](https://github.com/sipeed/picoclaw/pull/3011) | chengzhichao-xydt | **并发安全修复**：`UnsubscribeEvents` 中 `sync.Map.LoadAndDelete` 的类型断言增加 `ok` 校验 | — |
| [#3013](https://github.com/sipeed/picoclaw/pull/3013) | shenjiecode | **文档修复**：移除 skill-creator 中缺失的 `init_skill.py` 引用，改为手动创建流程 | [#652](https://github.com/sipeed/picoclaw/issues/652) |

### 批量清理（18 项）
- **依赖更新**: React 19.2.6、shadcn 4.8.0、TanStack Router/Query、Tabler Icons、go.mau.fi/util、Anthropic SDK 等 6 项
- **Stale PR 关闭**: 包括 MiMo provider 模型定义、JSONL 会话索引优化、provider logo fallback、崩溃一致性修复、fallback chain 超时处理、CSRF 安全加固等历史提交

**整体评估**: 今日合并以**稳定性加固和用户体验修复**为主，无新功能落地。`chengzhichao-xydt` 单日贡献 4 项防御性修复，显示代码健壮性为当前优先方向。

---

## 4. 社区热点

### 讨论最活跃 Issue: [#1042](https://github.com/sipeed/picoclaw/issues/1042) — `exec` 工具 `guardCommand` 路径校验误杀
| 指标 | 数值 |
|:---|:---|
| 评论数 | **15**（今日最高）|
| 👍 | 2 |
| 状态 | ✅ 已关闭 |

**核心矛盾**: `restrict_to_workspace=true` 时，正则解析将 `curl -s "wttr.in/Beijing?T"` 中的 URL 参数误判为 `../../../../Beijing?T` 相对路径，触发安全拦截。  
**诉求分析**: 用户需要**更智能的命令意图识别**——区分"网络请求"与"文件系统操作"，而非单纯基于字符串模式的路径校验。该 Issue 历时 3 个月关闭，反映安全策略与实用性的长期张力。

### 反应最多 Issue: [#2968](https://github.com/sipeed/picoclaw/issues/2968) — `/context` 显示压缩阈值困惑
- **评论**: 5 | **👍**: 1 | **状态**: ✅ 已关闭（由 #2985 修复）

**诉求分析**: 用户配置 128K max_tokens 时期望看到完整的上下文管理策略，但系统仅暴露硬编码的压缩阈值，隐藏了 summarize 触发点。修复后双阈值展示，体现**配置透明度**是用户核心诉求。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#3012](https://github.com/sipeed/picoclaw/issues/3012) | **Evolution 模式持续消耗 token**：Draft 模式下每分钟触发代码路径分析，导致无意义 token 消耗 | — | 🆕 **待修复** |
| 🟡 中 | [#3002](https://github.com/sipeed/picoclaw/issues/3002) | OneBot 群聊路由错误，将群号作为 user_id 发送私聊消息 | [#3009](https://github.com/sipeed/picoclaw/pull/3009) | ✅ 已修复 |
| 🟡 中 | [#2968](https://github.com/sipeed/picoclaw/issues/2968) | `/context` 仅显示 compress 阈值，用户误判上下文管理机制 | [#2985](https://github.com/sipeed/picoclaw/pull/2985) | ✅ 已修复 |
| 🟡 中 | [#1042](https://github.com/sipeed/picoclaw/issues/1042) | `exec` 工具路径安全校验误杀合法网络请求命令 | — | ✅ 已关闭（方案未明示）|
| 🟢 低 | [#652](https://github.com/sipeed/picoclaw/issues/652) | skill-creator 文档指向缺失的 `init_skill.py` | [#3013](https://github.com/sipeed/picoclaw/pull/3013) | ✅ 已修复 |

### 防御性修复（无对应 Issue）
- [#3010](https://github.com/sipeed/picoclaw/pull/3010): 配置解析类型断言 panic 防护
- [#3011](https://github.com/sipeed/picoclaw/pull/3011): 事件订阅清理的类型安全加固

> **警示**: [#3012](https://github.com/sipeed/picoclaw/issues/3012) Evolution 模式 token 泄漏为今日唯一**无修复方案的新报 bug**，且涉及计费敏感场景，建议优先响应。

---

## 6. 功能请求与路线图信号

### 待评估功能方向

| 来源 | 内容 | 纳入可能性分析 |
|:---|:---|:---|
| [#2964](https://github.com/sipeed/picoclaw/pull/2964) | **图像输入压缩策略**：可配置的多级压缩管道，避免 vision 场景下 oversized payload | ⭐⭐⭐⭐ 高 — 已提交 PR，解决实际性能痛点，与多模态趋势契合 |
| [#2915](https://github.com/sipeed/picoclaw/pull/2915) | **MiMo provider 模型定义**：`mimo-v2.5`/`mimo-v2.5-pro` 的 CommonModels 支持 | ⭐⭐⭐ 中 — 已关闭的 stale PR，但国产模型生态建设为长期需求 |
| [#2551](https://github.com/sipeed/picoclaw/pull/2551) | **通道标识标准化**：解耦 channel name 与 provider type，支持同 provider 多实例 | ⭐⭐⭐ 中 — 架构级重构，影响面大，需评估兼容性成本 |
| [#2916](https://github.com/sipeed/picoclaw/issues/2916) | **CPU/Memory/IO 全面优化**：基于源码分析的系统性性能改进提案 | ⭐⭐ 低 — 作者未提交具体 PR，讨论已 stale |

### 版本信号
- `v0.2.9` 稳定版发布后，nightly 持续构建但无 `v0.3.0` 里程碑曝光
- 近期合并聚焦"修 bug 而非加功能"，可能处于 **v0.2.x 补丁周期**

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 | 核心不满 |
|:---|:---|:---|
| **成本控制焦虑** | [#3012](https://github.com/sipeed/picoclaw/issues/3012) | Evolution 模式"静默烧钱"——用户启用后未感知到每分钟自动触发，缺乏 token 消耗可视化或速率限制 |
| **配置黑箱** | [#2968](https://github.com/sipeed/picoclaw/issues/2968) | 上下文管理策略（summarize vs compress）不透明，用户无法预测何时会丢失历史 |
| **安全策略过度** | [#1042](https://github.com/sipeed/picoclaw/issues/1042) | `restrict_to_workspace` 一刀切，合法网络工具调用被误拦截，且错误提示未说明判定依据 |
| **上手摩擦** | [#652](https://github.com/sipeed/picoclaw/issues/652) | 官方 skill-creator 教程指向不存在文件，新手无法完成第一个 skill 创建 |

### 环境特征
- **重复出现**: FreeBSD 15.0 + MiniMax 模型 + Go 1.25.10（用户 `xpader` 贡献 2 条 issue）
- **渠道集中**: OneBot/NapCat 群聊场景、Web 渠道为主

---

## 8. 待处理积压

### 需维护者关注项

| 时长 | Issue/PR | 风险说明 |
|:---|:---|:---|
| **106 天** | [#652](https://github.com/sipeed/picoclaw/issues/652) skill-creator 文档失效 | 今日刚文档修复，但需验证是否还有其他 workspace skill 存在类似"文档与实际文件不同步" |
| **51 天** | [#2551](https://github.com/sipeed/picoclaw/pull/2551) 通道标识重构 | 架构改进方向正确，但长期未决，可能因合并冲突累积而废弃 |
| **16 天** | [#2964](https://github.com/sipeed/picoclaw/pull/2964) 图像压缩 | 功能 PR 处于 open stale 状态，vision 性能优化需求明确，建议 review 或给出反馈 |
| **新鲜** | [#3012](https://github.com/sipeed/picoclaw/issues/3012) Evolution token 泄漏 | **计费敏感型 bug，24 小时内无响应，建议 48 小时内确认或提供 workaround** |

---

> **日报生成说明**: 本报告基于 GitHub 公开数据自动生成，PR 评论数因 API 限制部分显示为 `undefined`，实际社区互动可能高于统计值。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-06-06

> **项目**: [NanoClaw](https://github.com/qwibitai/nanoclaw) — AI 智能体与个人 AI 助手领域开源项目  
> **报告日期**: 2026-06-06 | **数据周期**: 过去 24 小时

---

## 1. 今日速览

今日 NanoClaw 项目保持**低活跃但聚焦稳定性**的开发节奏。无新增 Issues，3 条 PR 中有 2 条已快速合并关闭，1 条待审阅的修复 PR 针对 Claude Agent SDK 的 5xx 错误重试机制——这是生产环境可靠性的关键改进。整体健康度良好：无版本发布压力，代码审查流转顺畅，核心贡献者 gavrielc 持续优化 HuggingFace 集成体验。项目处于**维护优化期**，而非功能扩张期。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 已合并/关闭 PR（2 条）

| PR | 贡献者 | 核心改进 | 项目推进 |
|:---|:---|:---|:---|
| [#2691](https://github.com/nanocoai/nanoclaw/pull/2691) | gavrielc | **动态网关 URL 发现**：移除 OneCLI 登录提示中的硬编码 URL，改为从网关错误响应中自动提取正确的 dashboard 地址 | 消除多部署环境（本地/托管）的配置歧义，降低新用户 onboarding 摩擦 |
| [#2690](https://github.com/nanocoai/nanoclaw/pull/2690) | gavrielc | **简化 HF Token 设置流程 + 文档修正**：移除冗余的 `secretMode` 手动赋值（默认即为 `all`），同步修正 `upload-trace.ts` 相关逻辑 | 减少 API 误用，文档与代码行为一致，提升开发者体验 |

**整体评估**：两日连续 PR 聚焦 **OneCLI × HuggingFace 生态集成**的易用性打磨，显示维护者优先级在**降低配置复杂度**而非新增功能。

---

## 4. 社区热点

今日无高讨论度条目。3 条 PR 均无 👍 反应和评论，社区参与度**偏低**。

| 条目 | 状态 | 潜在诉求分析 |
|:---|:---|:---|
| [#2692](https://github.com/nanocoai/nanoclaw/pull/2692) | OPEN | **生产可靠性诉求**：Claude SDK 的 529 Overloaded 错误当前被误判为终端失败，导致智能体任务不必要中断。贡献者 ddaniels 的修复方案（轮询重试 + 耗尽通知）直击云 API 不稳定场景下的容错需求——这是企业级部署的核心关切 |

> 💡 **信号**：该 PR 虽零互动，但解决的是**隐性高价值痛点**（API 瞬态故障的优雅降级），建议维护者优先审阅。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 来源 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | Claude Agent SDK 将瞬态 5xx 错误（529 Overloaded）报告为终端 `result`，导致轮询循环过早终止，智能体任务失败 | [#2692](https://github.com/nanocoai/nanoclaw/pull/2692) | #2692 | **待审阅** |
| 🟡 **中** | OneCLI 文档错误标注默认 `secretMode` 为 `selective`，与实际 `all` 不符，导致用户配置冗余 | [#2690](https://github.com/nanocoai/nanoclaw/pull/2690) | #2690 | ✅ 已合并 |
| 🟢 **低** | 未登录提示硬编码 URL，在混合部署场景下指向错误 gateway | [#2691](https://github.com/nanocoai/nanoclaw/pull/2691) | #2691 | ✅ 已合并 |

**关键风险**：#2692 未合并前，使用 Claude SDK 的生产环境仍暴露于 529 错误的不可恢复故障。

---

## 6. 功能请求与路线图信号

| 信号类型 | 来源 | 解读 |
|:---|:---|:---|
| **可靠性工程** | [#2692](https://github.com/nanocoai/nanoclaw/pull/2692) | 重试策略、熔断机制、API 错误分类——暗示项目正从"能运行"向"高可用"演进 |
| **平台集成深化** | [#2690](https://github.com/nanocoai/nanoclaw/pull/2690), [#2691](https://github.com/nanocoai/nanoclaw/pull/2691) | OneCLI/HuggingFace 仍是核心生态绑定方向，配置简化是持续主题 |

**下一版本可能纳入**：#2692 的重试机制若合并，建议配套：
- 可配置重试次数/退避策略
- 监控指标暴露（重试次数、API 错误码分布）

---

## 7. 用户反馈摘要

> ⚠️ **数据局限**：今日 0 条 Issues 活动，0 条 PR 评论，无法提取直接用户反馈。

**间接推断**（基于 PR 内容反向推导）：

| 痛点场景 | 证据 | 满意度推测 |
|:---|:---|:---|
| "刚部署完，提示登录但 URL 跳错环境" | #2691 修复硬编码 URL | ❌ 配置困惑 → 修复后改善 |
| "按文档设了 selective，结果 secrets 全注入了" | #2690 修正文档 | ❌ 文档-代码不一致 → 已解决 |
| "Claude 偶尔 529，任务直接挂了" | #2692 待合并 | ❌ 稳定性焦虑 → 等待验证 |

---

## 8. 待处理积压

| 条目 | 创建时间 | 滞留原因 | 建议行动 |
|:---|:---|:---|:---|
| [#2692](https://github.com/nanocoai/nanoclaw/pull/2692) | 2026-06-05 | 待维护者审阅 | **高优先级**：涉及生产稳定性，建议 24h 内响应；可要求补充测试用例（模拟 529 响应序列）|

> 📌 当前积压整体可控（仅 1 条 OPEN PR），但 #2692 的技术风险与价值不匹配其零关注度，需主动推进。

---

## 健康度仪表盘

| 指标 | 今日值 | 趋势 |
|:---|:---|:---|
| Issue 处理率 | N/A（无新增） | → 平稳 |
| PR 合并率 | 66.7% (2/3) | ↑ 高效 |
| 社区互动量 | 0 评论/反应 | ↓ 冷清 |
| 生产风险敞口 | #2692 待合并 | ⚠️ 关注 |

---

*日报生成基于公开 GitHub 数据，未包含私有讨论或外部沟通渠道信息。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-06-06

**项目地址**: [github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)

---

## 1. 今日速览

NullClaw 今日处于**低活跃维护状态**。过去24小时内仅产生 **1 条 PR 更新**，无 Issues 活动、无版本发布，社区互动指标（👍/评论）均为零值。项目核心代码库未发生合并变更，整体处于"接收外部贡献、等待维护者审阅"的平稳期。唯一值得关注的是一个新的 AI 服务商接入提案，反映出 NullClaw 作为 AI 智能体基础设施框架仍在扩展其多模型生态兼容性。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

**今日无已合并/已关闭 PR**

代码库未产生实质性推进。当前待审阅的 PR 为：

| PR | 状态 | 贡献 | 进展评估 |
|:---|:---|:---|:---|
| [#947 feat(providers): add Evolink as an OpenAI-compatible provider](https://github.com/nullclaw/nullclaw/pull/947) | 🟡 OPEN | 新增多模型网关服务商 | 等待维护者首次审阅 |

该 PR 若合并，将扩展 NullClaw 的 provider 生态至 **Evolink 多模型网关**（覆盖 GPT-5、Gemini、DeepSeek、Doubao、MiniMax 等），延续项目"统一 OpenAI-compatible 接口"的核心架构设计。但目前处于**零审阅、零讨论**状态，尚未进入代码审查流程。

**项目整体推进度：⚪ 停滞**（0/1 PR 完成闭环）

---

## 4. 社区热点

**唯一活跃 PR: #947 — Evolink 服务商接入**

| 指标 | 数值 | 健康度信号 |
|:---|:---|:---|
| 评论数 | undefined/0 | ⚠️ 零讨论 |
| 👍 反应 | 0 | ⚠️ 零社区投票 |
| 创建至今日 | 1 天 | 🆕 新鲜提案 |

**诉求分析**：  
贡献者 [EvoLinkAI](https://github.com/EvoLinkAI)（疑似 Evolink 官方/关联账号）采用"直接提交 PR"而非先开 Issue 讨论的策略，属于**服务商自我集成（self-onboarding）模式**。这反映出：
- 第三方 AI 基础设施厂商对 NullClaw 作为智能体框架的渠道价值认可
- 但零社区互动表明：① 该服务商知名度有限；② NullClaw 核心用户群对此类网关需求尚未显性化；③ 项目缺乏活跃的 provider 准入讨论机制

🔗 [查看 PR #947](https://github.com/nullclaw/nullclaw/pull/947)

---

## 5. Bug 与稳定性

**今日无 Bug 报告**

| 严重程度 | 数量 | 已修复 | 待处理 |
|:---|:---:|:---:|:---:|
| Critical (崩溃/数据丢失) | 0 | - | - |
| High (功能不可用) | 0 | - | - |
| Medium (体验受损) | 0 | - | - |
| Low (文档/边缘情况) | 0 | - | - |

---

## 6. 功能请求与路线图信号

**今日无独立功能请求 Issue**

从 PR #947 推断的路线图信号：

| 信号 | 强度 | 解读 |
|:---|:---|:---|
| 多模型网关聚合层 | 🔶 中 | Evolink 模式（单一 endpoint + Bearer token 聚合多后端）与现有 OpenAI/Anthropic/Google 等直连 provider 形成架构张力——长期或需抽象"网关型 provider"与"直连型 provider"的差异 |
| 国产模型生态（Doubao/MiniMax/DeepSeek） | 🔶 中 | PR 明确提及国产模型，暗示 NullClaw 用户群存在中文市场/合规部署需求 |
| Provider 准入标准 | 🔶 中 | 零审阅状态暴露项目缺乏自动化测试门槛或社区投票机制来决定新 provider 纳入 |

**纳入下一版本可能性评估**：PR #947 技术实现简单（OpenAI-compatible 适配成本低），但需维护者决策：是否接受商业网关服务商作为一等公民，抑或引导其以插件/community provider 形式存在。

---

## 7. 用户反馈摘要

**今日无用户反馈数据**

基于历史模式推断的潜在痛点：
- **Provider 碎片化**：用户可能需要自行维护非官方 provider 的适配代码
- **审阅延迟**：单 PR 24h+ 无响应可能影响外部贡献者留存（尤其商业合作方）

---

## 8. 待处理积压

| 类型 | 数量 | 风险 |
|:---|:---:|:---|
| 待合并 PR | **1** | PR #947 处于无人响应状态，若持续 7+ 天可能贡献者流失 |
| 无评论/无标签 | 1 | 未标注 `provider`、`needs-review` 等标签，维护者可能未收到通知 |

**⚠️ 维护者关注提醒**：
- [PR #947](https://github.com/nullclaw/nullclaw/pull/947) 需分配 reviewer 或添加标签进入队列
- 建议建立 **provider 贡献模板**（如要求提供测试账号、API 兼容性矩阵、最小可复现配置），降低审阅摩擦

---

## 附录：今日数据仪表盘

```
活跃度指数:    ░░░░░░░░░░ 0.1/10  (极低)
社区健康度:    ▓░░░░░░░░░ 1.5/10  (有外部贡献但零互动)
代码推进度:    ░░░░░░░░░░ 0.0/10  (无合并)
维护响应度:    ░░░░░░░░░░ 0.0/10  (24h+ 无审阅)
```

**生成时间**: 2026-06-06  
**数据窗口**: 2026-06-05 00:00 UTC 至 2026-06-06 00:00 UTC

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-06-06

> **项目**: [nearai/ironclaw](https://github.com/nearai/ironclaw)  
> **日期**: 2026-06-06  
> **分析师**: AI 智能体与个人 AI 助手领域开源项目分析师

---

## 1. 今日速览

IronClaw 今日呈现**高强度开发态势**，50 个 PR 更新（29 待合并、21 已合并/关闭）与 13 个 Issues 更新（10 活跃/新开、3 关闭）表明项目处于**密集迭代期**。核心焦点集中在 **Reborn 架构重构**（ProductWorkflow 门面拆分、Slack 通道现代化）与 **WeCom 企业微信通道的 staging 验证修复**。Hook 框架历经 4 个 PR 的持久化后端拆分后今日正式完成生产环境激活（#3938 合并），标志着安全审计与扩展能力进入新阶段。值得关注的是，Nightly E2E 持续失败（#4108）已逾 10 天，可能对 v0.29.1 发布节奏构成阻滞。

---

## 2. 版本发布

**无新版本发布**

> 注：PR #3708 包含 `ironclaw` 0.24.0 → 0.29.1 的版本升级变更，但该 PR 仍为 OPEN 状态，尚未正式发版。其中 `ironclaw_common` 0.5.0 与 `ironclaw_skills` 0.4.0 含 **API 破坏性变更**，需关注迁移文档。

---

## 3. 项目进展

### 🔒 Hook 框架生产激活完成（重大里程碑）

| PR | 状态 | 核心贡献 | 链接 |
|:---|:---|:---|:---|
| #3938 | **已合并** | Hook 框架正式接入 Reborn 实时运行时，默认 `HOOKS_ENABLED=OFF`（dark launch） | [PR #3938](https://github.com/nearai/ironclaw/pull/3938) |
| #3937 | **已合并** | 跨后端对抗性一致性测试套件，证明 Postgres/libSQL/InMemory 三种 `PredicateStateBackend` 行为等价 | [PR #3937](https://github.com/nearai/ironclaw/pull/3937) |
| #3936 | **已合并** | LibSQL 持久化后端独立 crate | [PR #3936](https://github.com/nearai/ironclaw/pull/3936) |
| #3933 | **已合并** | Postgres 持久化后端（替换 #3932） | [PR #3933](https://github.com/nearai/ironclaw/pull/3933) |
| #3931 | **已合并** | 修复跨租户泄漏、重放攻击、Provider 伪造三大安全漏洞 | [PR #3931](https://github.com/nearai/ironclaw/pull/3931) |
| #3941 | **已合并** | 清理 #3918/#3919 遗留的可维护性债务（死 API、空泛测试、常量暴露不足） | [PR #3941](https://github.com/nearai/ironclaw/pull/3941) |

**进展评估**：Hook 框架从 5 月 23 日的 6 个并行 PR 到今日全部合拢，完成**安全审计闭环**（SecurityAuditSink 接入义务处理与 Hook 拒绝路径 #3922）和**生产级持久化**。这是 IronClaw 从"功能可用"迈向"企业可信"的关键一跃。

### 🏗️ Reborn 架构现代化推进中

| PR | 状态 | 核心贡献 | 链接 |
|:---|:---|:---|:---|
| #4506 | **待合并** | `ProductWorkflow` 拆分为 `submit_inbound` / `read_projection` / `subscribe_events` 三门显式效应边界，为 OpenAI 兼容 API 铺路 | [PR #4506](https://github.com/nearai/ironclaw/pull/4506) |
| #4511 | **待合并** | 出站投递偏好门面合约（Phase 1），含浏览器安全 DTO 与 `RebornOutboundDeliveryTargetId` | [PR #4511](https://github.com/nearai/ironclaw/pull/4511) |
| #4479 | **待合并** | IronHub 安装流迁移至 Reborn，含 Ed25519 签名验证与 provenance 门控 | [PR #4479](https://github.com/nearai/ironclaw/pull/4479) |

### 📱 Slack 通道基础设施升级

| PR | 状态 | 核心贡献 | 链接 |
|:---|:---|:---|:---|
| #4510 | **待合并** | Slack 通道路由管理后台：动态产品工作流主题路由解析器 + 持久化通道路由存储 + WebUI 管理界面 | [PR #4510](https://github.com/nearai/ironclaw/pull/4510) |
| #4463 | **待合并** | Slack host-beta 持久化存储（对话/出站/幂等状态）+ Reborn turn runner 唤醒机制 | [PR #4463](https://github.com/nearai/ironclaw/pull/4463) |

---

## 4. 社区热点

### 讨论最活跃 Issues

| 排名 | Issue | 评论数 | 核心诉求 | 链接 |
|:---|:---|:---|:---|:---|
| 1 | #4311 Reborn model gateway 错误分类塌陷：预算治理失败被误判为上下文溢出 | 2 | **LLM 错误语义精确性**：开发者要求区分真正的 `BudgetExceeded` 与 `ContextOverflow`，避免 agent loop 错误恢复策略失效 | [Issue #4311](https://github.com/nearai/ironclaw/issues/4311) |
| 2 | #4488 ProductWorkflow 门面拆分设计评审 | 2 | **API 边界清晰度**：OpenAI 兼容层需要稳定的变异/只读/订阅分离，避免未来兼容层返工 | [Issue #4488](https://github.com/nearai/ironclaw/issues/4488) |

### 诉求分析

- **#4311** 反映 Reborn 错误处理链的**语义传递失真**：`HostManagedModelErrorKind::BudgetExceeded` → `AgentLoopHostErrorKind::BudgetExceeded` → `ModelErrorClass::ContextOverflow` 的三级映射存在逻辑漏洞，可能导致 agent 在预算耗尽时错误地尝试截断上下文而非终止或降级。
- **#4488 / #4506** 体现社区对 **M2-inbound-workflow 模块稳定性**的高度关注，这是 Reborn 对外暴露 OpenAI 兼容 API 的前提条件。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|:---|
| 🔴 **高** | #4512 | **并发沙箱 `job_semaphore` 从未被 acquire**：定义于 `src/tenant.rs:984-999` 但全仓库无调用，可能导致资源竞争或相反的无限制并发 | 新开，无评论 | ❌ 无 | [Issue #4512](https://github.com/nearai/ironclaw/issues/4512) |
| 🔴 **高** | #4108 | **Nightly E2E 持续失败**（>10 天）：`Full E2E / E2E (features)` 作业失败，影响发布信心 | 活跃，5-27 创建，6-5 更新 | ❌ 无 | [Issue #4108](https://github.com/nearai/ironclaw/issues/4108) |
| 🟡 **中** | #4502 | **WeCom 群聊审批回复失效**：`y`/`yes`/`always` 无法通过回复批准工具调用，bot 循环请求 | 新开，有复现 | ❌ 无 | [Issue #4502](https://github.com/nearai/ironclaw/issues/4502) |
| 🟡 **中** | #4500 | **通道 onboarding 系统事件写入错误对话**：WeCom/Telegram 均受影响，新通道设置后事件进入现有对话 | 新开 | ❌ 无 | [Issue #4500](https://github.com/nearai/ironclaw/issues/4500) |
| 🟢 **低** | #4505 | WeCom 群聊标题在 WebUI 侧边栏不可区分 | 新开 | ❌ 无 | [Issue #4505](https://github.com/nearai/ironclaw/issues/4505) |

### 已修复 Bug

| Issue | 修复内容 | 关闭 PR | 链接 |
|:---|:---|:---|:---|
| #4194 | WeCom 群聊与私聊合并为同一对话 | 隐含于 #4505 的前置修复 | [Issue #4194](https://github.com/nearai/ironclaw/issues/4194) |
| #4198 | 未配对用户在 owner WebUI 的可见性不明确 | 确认为预期隐私行为 | [Issue #4198](https://github.com/nearai/ironclaw/issues/4198) |

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 与现有 PR 关联 | 纳入可能性评估 |
|:---|:---|:---|:---|
| **Slack AI streaming 用于 Reborn 进度反馈** | #4491 | #4490（短期 stopgap 已合并）、#4510/#4463（基础设施） | ⭐⭐⭐⭐⭐ **高**：基础设施 PR #4510/#4463 正在铺设，Streaming 是 natural next step |
| **OpenAI 兼容 API 接线** | #4488, #4483 | #4506（门面拆分）、#4511（出站偏好） | ⭐⭐⭐⭐⭐ **高**：#3280 父 Issue 驱动，M2 模块核心目标 |
| **Runtime Profile 审批门控** | #4390 | #4390 待合并 | ⭐⭐⭐⭐☆ **中高**：安全合规关键路径 |
| **第三方扩展 Hook 激活** | #3951 | #3951 待合并（依赖 #3938） | ⭐⭐⭐⭐☆ **中高**：#3938 已合并，子 flag 机制 ready |

---

## 7. 用户反馈摘要

### 企业微信（WeCom）Staging 验证深度反馈（sunglow666）

> **来源**: #4191, #4502, #4505, #4500, #4194, #4198

| 维度 | 反馈 | 情绪 |
|:---|:---|:---|
| ✅ 稳定功能 | 核心文本流、配对/重连/持久化、Markdown/Emoji/多语言 | 😊 满意 |
| ⚠️ 关键缺陷 | 群聊审批回复失效（阻断工作流）、onboarding 事件错位 | 😤 沮丧 |
| 🔧 体验瑕疵 | 群聊标题不可区分（管理困难）、群聊/私聊历史合并（已修复） | 😐 困扰 |
| ❓ 设计疑问 | 未配对用户 owner 不可见是否为隐私设计 | 🤔 困惑 |

### Reborn 架构使用者反馈

> **来源**: #4311 (henrypark133), #4488 (danielwpz)

- **错误处理可观测性**：预算治理与上下文溢出的错误分类直接影响 agent 的自动恢复策略，当前"塌陷"设计迫使开发者手动区分
- **API 契约稳定性**：OpenAI 兼容层需要"submit/read/subscribe"的显式边界承诺，避免未来 breaking change

---

## 8. 待处理积压

| 风险等级 | 项目 | 年龄 | 阻塞影响 | 链接 |
|:---|:---|:---|:---|:---|
| 🔴 **紧急** | #4108 Nightly E2E 失败 | 10 天 | **v0.29.1 发布阻滞**：PR #3708 含 0.29.1 版本升级但无法合拢 | [Issue #4108](https://github.com/nearai/ironclaw/issues/4108) |
| 🟡 **高** | #3708 Release PR (0.29.1) | 21 天 | 含 `ironclaw_common` 0.5.0 等 breaking changes，E2E 失败后无法推进 | [PR #3708](https://github.com/nearai/ironclaw/pull/3708) |
| 🟡 **高** | #4002 Dependabot actions 组 16 项更新 | 13 天 | CI 基础设施债务，可能含安全补丁 | [PR #4002](https://github.com/nearai/ironclaw/pull/4002) |
| 🟡 **高** | #4503 Dependabot 38 项依赖更新 | 1 天 | "everything-else" 组大规模更新，rebase 中，可能引入兼容风险 | [PR #4503](https://github.com/nearai/ironclaw/pull/4503) |
| 🟢 **中** | #4311 错误分类塌陷 | 5 天 | Agent 可靠性，有 2 条评论但未分配 | [Issue #4311](https://github.com/nearai/ironclaw/issues/4311) |

---

## 健康度评分

| 维度 | 评分 | 说明 |
|:---|:---|:---|
| 开发活跃度 | ⭐⭐⭐⭐⭐ | 50 PR / 13 Issues 日更新量，核心贡献者 zmanian、serrrfirat、danielwpz 高频输出 |
| 代码质量门禁 | ⭐⭐⭐☆☆ | E2E 持续失败 10 天未修复，#4512 暴露 semaphore 未使用的低级缺陷 |
| 社区响应度 | ⭐⭐⭐⭐☆ | WeCom 反馈链（sunglow666）获得密集 issue 创建，但部分无评论分配 |
| 架构演进 | ⭐⭐⭐⭐⭐ | Hook 框架 4-PR 拆分完成，Reborn 门面现代化推进有序 |
| 发布就绪度 | ⭐⭐⭐☆☆ | v0.29.1 变更已准备但 E2E 阻塞，依赖更新堆积存在风险 |

---

*日报基于 GitHub 公开数据生成，未包含私有讨论或线下决策信息。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-06-06

> **项目**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
> **报告日期**: 2026-06-06（覆盖过去24小时：2026-06-05 至 2026-06-06）

---

## 1. 今日速览

LobsterAI 今日呈现**高活跃度、强交付节奏**态势。过去24小时内，项目团队完成 **13 个 PR 的合并/关闭**（含 10 个当日新建、3 个历史积压），并发布 **2026.6.5 版本**，覆盖协作会话同步、快捷键体系重构、语音输入、文件预览、IM 消息处理等核心模块。Issues 侧相对沉寂，3 条活跃 Issue 均为历史遗留的 stale 状态，无新增 Bug 报告，显示当前版本稳定性较好。整体健康度评估：**🟢 健康 — 交付密集，技术债务清理同步推进**。

---

## 2. 版本发布

### 🏷️ [LobsterAI 2026.6.5](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.6.5)（2026-06-05 发布）

| 维度 | 详情 |
|:---|:---|
| **核心更新** | 两大功能增强 + 多项底层优化 |
| **破坏性变更** | 无明确标注；快捷键体系"overhaul"建议用户核查自定义键位 |
| **迁移注意事项** | 快捷键配置可能因体系重构需重新适配；建议升级后检查 `Settings → Shortcuts` |

**更新内容详解**：

| PR | 作者 | 说明 |
|:---|:---|:---|
| [#2108](https://github.com/netease-youdao/LobsterAI/pull/2108) | @fisherdaddy | **feat(cowork)**: 改进频道会话同步与清理机制 — 提升多会话场景下的状态一致性，降低内存泄漏风险 |
| [Shortcuts 重构](https://github.com/netease-youdao/LobsterAI/pull/2108) | @fisherdaddy | **feat(shortcuts)**: 全面重构键盘快捷键系统 — 扩展可绑定动作范围，优化 UX 交互反馈 |

> **分析师注**：版本号采用日历化命名（2026.6.5），表明项目已进入稳定的持续交付节奏。快捷键"overhaul"为重大 UX 变更，建议维护者在 Release Note 中补充完整快捷键映射表以降低用户迁移成本。

---

## 3. 项目进展

### 当日新建 PR 全部合并（10/10，100% 当日闭环）

| PR | 作者 | 领域 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|:---|
| [#2119](https://github.com/netease-youdao/LobsterAI/pull/2119) | @fisherdaddy | 全栈 Release | **2026.6.4 版本发布** — 整合语音输入、Artifacts、快捷键、更新模块等 6 大领域变更 | 里程碑交付 |
| [#2118](https://github.com/netease-youdao/LobsterAI/pull/2118) | @fisherdaddy | Cowork | 剪贴板复制多层级降级策略（electron → navigator.clipboard → execCommand）；无可用模型时拦截提交并引导登录/订阅 | 跨平台可靠性 ↑ 商业化漏斗 ↑ |
| [#2117](https://github.com/netease-youdao/LobsterAI/pull/2117) | @liuzhq1986 | Config | 模型迁移版本追踪，防止默认模型重复注入；**保留用户删除的 provider 模型** | 用户配置主权 ↑ 回归测试覆盖 |
| [#2116](https://github.com/netease-youdao/LobsterAI/pull/2116) | @fisherdaddy | Cowork | 免费额度耗尽错误分类 + 升级链接露出；10s 窗口流错误去重；空态安装引导 | 商业化转化 ↑ 错误体验 ↑ |
| [#2115](https://github.com/netease-youdao/LobsterAI/pull/2115) | @fisherdaddy | IM | IM 回复仅基于当前轮次消息组装；Windows 更新启动器 vbscript → PowerShell | 上下文准确性 ↑ 安全基线 ↑ |
| [#2114](https://github.com/netease-youdao/LobsterAI/pull/2114) | @liugang519 | Artifacts | Office/PDF/Excel/PPT 预览体验全面增强；支持预览面板展开、紧凑输入区、HTML 浏览器预览 | 文档协作核心竞争力 ↑ |
| [#2113](https://github.com/netease-youdao/LobsterAI/pull/2113) | @btc69m979y-dotcom | Voice/macOS | macOS 麦克风权限元数据与 entitlement；ASR 诊断日志 | 语音功能合规上线 |
| [#2112](https://github.com/netease-youdao/LobsterAI/pull/2112) | @fisherdaddy | OpenClaw | 锁定模型点击触发订阅引导（替代静默禁用）；OpenClaw 修复流程 | 商业化变现路径显性化 |

### 历史积压 PR 清理（3/3，stale 债务偿还）

| PR | 作者 | 说明 | 积压时长 |
|:---|:---|:---|:---|
| [#1531](https://github.com/netease-youdao/LobsterAI/pull/1531) | @leedalei | 主题色选择器 UI 精简（网格 → 圆圈） | ~60 天 |
| [#1533](https://github.com/netease-youdao/LobsterAI/pull/1533) | @MaoQianTu | 设置页本地会话统计面板 | ~60 天 |
| [#1534](https://github.com/netease-youdao/LobsterAI/pull/1534) | @kayo5994 | API 代理日志脱敏（防凭证泄露） | ~60 天 |
| [#1535](https://github.com/netease-youdao/LobsterAI/pull/1535) | @kayo5994 | 渲染进程 KV Store 键白名单 | ~60 天 |
| [#367](https://github.com/netease-youdao/LobsterAI/pull/367) | @fancyboi999 | MCP JSON 配置导入与 streamable_http 规范化 | ~87 天 |

**整体推进评估**：今日交付密度极高，覆盖**商业化变现（订阅引导、额度管理）、核心协作体验（Artifacts 预览、语音输入）、安全合规（日志脱敏、权限白名单）、工程健康（配置迁移、更新机制）**四大战略方向。3 月-4 月的 stale PR 批量清理表明团队正主动偿还技术债务，项目治理状态改善。

---

## 4. 社区热点

> 过去24小时无高互动新增议题，以下分析基于今日获得更新的历史 Issue：

| 排名 | Issue | 作者 | 评论 | 核心诉求 | 背后信号 |
|:---|:---|:---|:---|:---|:---|
| 🔥 1 | [#1487](https://github.com/netease-youdao/LobsterAI/issues/1487) | @54huige | 2 | 本地 30B 模型下 Python 脚本调用异常（Claude Code CLI 正常） | **本地模型兼容性缺口**：用户期望 LobsterAI 的 skills 执行环境与 Claude Code 等竞品对齐，暗示工具链标准化需求 |
| 2 | [#1471](https://github.com/netease-youdao/LobsterAI/issues/1471) | @MaoQianTu | 1 | 去抖机制导致输入草稿丢失 | **状态持久化可靠性**：高频操作场景（快速切换）下的数据完整性 |
| 3 | [#1472](https://github.com/netease-youdao/LobsterAI/issues/1472) | @MaoQianTu | 1 | "重新编辑"覆盖输入框无确认提示 | **防误触设计**：用户内容保护机制缺失 |

**社区活跃度评估**：⚠️ **偏低**。3 条 Issue 均为 stale 状态更新（可能是 bot 标记或维护者批量处理），无实质新讨论。需注意：今日密集代码交付未伴随社区互动同步，可能存在"静默开发"风险。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 状态 | 说明 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#1487](https://github.com/netease-youdao/LobsterAI/issues/1487) | OPEN, stale | 本地模型 Python 脚本执行异常 — 影响核心 skills 功能 | ❌ 无 |
| 🟡 **中** | [#1471](https://github.com/netease-youdao/LobsterAI/issues/1471) | OPEN, stale | 草稿丢失 — 数据完整性风险，有明确复现路径 | ❌ 无（但 PR #2118 同期优化了输入提交 UX） |
| 🟡 **中** | [#1472](https://github.com/netease-youdao/LobsterAI/issues/1472) | OPEN, stale | 内容覆盖无确认 — 用户体验损失，非崩溃性 | ❌ 无 |

**今日 Fix 的稳定性问题**（已通过 PR 合并）：

| PR | 修复内容 | 影响面 |
|:---|:---|:---|
| [#2117](https://github.com/netease-youdao/LobsterAI/pull/2117) | 用户删除的 provider 模型被默认配置覆盖 | 配置持久化 |
| [#2115](https://github.com/netease-youdao/LobsterAI/pull/2115) | IM 回复错误包含历史轮次消息 | 消息上下文准确性 |
| [#2113](https://github.com/netease-youdao/LobsterAI/pull/2113) | macOS 麦克风权限缺失导致语音功能不可用 | 功能可用性 |
| [#1534](https://github.com/netease-youdao/LobsterAI/pull/1534) | API 代理日志泄露凭证与完整响应 | **安全合规** |
| [#1535](https://github.com/netease-youdao/LobsterAI/pull/1535) | 渲染进程可任意读写敏感 KV 键 | **安全纵深防御** |

> **安全专项**：@kayo5994 贡献的 #1534、#1535 两项安全修复今日合并，显著提升了日志与 IPC 层面的安全基线，建议维护者在 Release Note 中明确致谢并建议用户升级。

---

## 6. 功能请求与路线图信号

### 从已合并 PR 反推的下一版本方向

| 信号来源 | 功能方向 | 纳入可能性 | 说明 |
|:---|:---|:---|:---|
| #2112, #2116, #2118 | **商业化订阅体系深化** | 🔒 高 | 锁定模型引导、额度耗尽提示、登录拦截已形成完整漏斗 |
| #2114 | **Artifacts 文档协作增强** | 🔒 高 | Office/PDF/HTML 预览持续投入，对标 Cursor/Windsurf |
| #2113, #2119 | **语音输入（ASR）正式上线** | 🔒 高 | macOS 权限补齐，功能已合入 release |
| #2115 | **IM 场景优化** | 🔄 中 | 当前轮次回复修复，暗示 IM 是重点场景 |
| #1533 | **使用统计/数据洞察** | 🔄 中 | 本地统计面板已合并，可能扩展至云端同步 |
| #367 | **MCP 生态兼容** | 🔄 中 | streamable_http 规范化，跟进 Anthropic 协议演进 |

### 用户侧未满足需求（来自 Issues）

| 需求 | 来源 | 与路线图关联 |
|:---|:---|:---|
| 本地模型 skills 兼容性（#1487） | @54huige | 与 #2112 的"模型选择器"优化相关，需关注本地模型测试矩阵 |
| 输入状态防丢失机制（#1471, #1472） | @MaoQianTu | 与 #2118 的输入 UX 优化同域，建议合并评估 |

---

## 7. 用户反馈摘要

### 痛点提炼

| 痛点 | 来源 | 场景 | 严重程度 |
|:---|:---|:---|:---|
| **本地模型"二等公民"体验** | #1487 | 使用 30B 本地模型运行 Python skills 时失败，但同款 skills 在 Claude Code CLI 正常运行 | 高 — 核心功能兼容性 |
| **高频切换场景下的数据安全感缺失** | #1471, #1472 | 快速切换会话/重新编辑历史消息时，用户输入内容被静默覆盖或丢失 | 中 — 信任损耗累积 |
| **功能可用性与付费墙边界模糊** | #2112 修复方向 | 锁定模型此前"静默禁用"，用户无法感知为何无法使用 | 已缓解 |

### 满意点（从 PR 反推）

- **跨平台可靠性**：剪贴板多层级降级策略（#2118）显示团队重视边缘场景
- **安全响应**：日志脱敏与 IPC 白名单修复（#1534, #1535）体现安全优先文化

---

## 8. 待处理积压

> 以下 Issue/PR 长期未获实质响应，建议维护者优先评估：

| 积压项 | 创建时间 | 最后更新 | 积压天数 | 风险说明 | 建议动作 |
|:---|:---|:---|:---|:---|:---|
| [#1487](https://github.com/netease-youdao/LobsterAI/issues/1487) | 2026-04-05 | 2026-06-05 | **61 天** | 本地模型兼容性 — 直接影响开源/隐私敏感用户群体 | 分配 `area: skills, area: local-model` 标签，纳入下一 sprint |
| [#1471](https://github.com/netease-youdao/LobsterAI/issues/1471) | 2026-04-04 | 2026-06-05 | **62 天** | 数据丢失风险 — 有明确复现路径和期望行为描述 | 与 #2118 输入 UX 优化合并评估，或单独快速修复 |
| [#1472](https://github.com/netease-youdao/LobsterAI/issues/1472) | 2026-04-04 | 2026-06-05 | **62 天** | 防误触机制缺失 — 同类问题可与 #1471 统一方案 | 同上，建议合并为"输入状态保护"专项 |

**积压健康度警示**：⚠️ 3 条活跃 Issue 全部 stale，且均为 @MaoQianTu 和 @54huige 贡献的实质性 Bug 报告（非 feature request）。今日 13 个 PR 的密集交付与 Issue 侧的沉默形成对比，建议团队关注 **"代码交付-社区反馈"闭环**，避免贡献者流失。

---

## 附录：数据速查

| 指标 | 数值 | 环比评估 |
|:---|:---|:---|
| Issues 更新 | 3（新开/活跃 3，关闭 0） | 平稳，但全为 stale 唤醒 |
| PRs 更新 | 13（待合并 0，已合并/关闭 13） | 🚀 高 — 100% 当日闭环率 |
| 版本发布 | 1（2026.6.5） | 稳定节奏 |
| 安全修复合并 | 2（#1534, #1535） | ✅ 积极 |
| Stale PR 清理 | 3（#1531, #1533, #367） | ✅ 债务偿还 |
| 社区实质互动 | 0（无新增评论/反应） | ⚠️ 需关注 |

---

*本报告基于 GitHub 公开数据自动生成，如需深度分析特定模块或历史趋势，请联系项目维护者。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-06-06

---

## 1. 今日速览

过去 24 小时，Moltis 项目保持**中高活跃度**：Issues 更新 4 条（3 活跃/1 关闭），PR 更新 5 条（4 待合并/1 关闭），无新版本发布。社区贡献者 `penso` 单日提交 3 个 PR，聚焦沙盒系统（Podman/Docker）与模型偏好设置修复；`IlyaBizyaev` 集中反馈 3 个 UI/部署体验问题，显示前端与安装体验仍是用户痛点。Telegram 流式消息中间输出混入最终回复的 Bug（#1097）已通过 PR #1099 关闭，是今日最重要的稳定性进展。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 已合并/关闭 PR

| PR | 作者 | 说明 | 链接 |
|:---|:---|:---|:---|
| **#1099** [codex] Separate Telegram progress stream from final replies | s-salamatov | 修复 #1097：将 Telegram 频道流式输出重构为临时进度更新，流式结束后删除进度消息并单独发送最终回复，避免中间输出混入最终结果。 | [moltis-org/moltis#1099](https://github.com/moltis-org/moltis/pull/1099) |

**整体推进**：该修复解决了 Telegram 集成中一个影响用户体验的显著 Bug，提升了多平台交互的可靠性。其余 4 个 PR 仍处于待合并状态，覆盖沙盒兼容性、工具结果持久化和模型偏好管理，预计合并后将显著改善部署灵活性与配置体验。

---

## 4. 社区热点

今日无高评论数或高反应的议题。值得关注的是 **3 个由同一用户 `IlyaBizyaev` 在 6 月 5 日集中提交的 Issue**，反映了系统性的产品体验反馈：

| 议题 | 类型 | 核心诉求 | 链接 |
|:---|:---|:---|:---|
| **#1109** Docker 安装的更新提示横幅未识别容器化环境 | Bug | 避免在 Docker 部署中向用户展示误导性的本地更新提示 | [moltis-org/moltis#1109](https://github.com/moltis-org/moltis/issues/1109) |
| **#1108** Web UI 会话列表对昨日会话只显示时间不显示日期 | Bug | 提升跨天时间信息的可读性，避免用户混淆会话时间 | [moltis-org/moltis#1108](https://github.com/moltis-org/moltis/issues/1108) |
| **#1107** 移动端 Web UI 支持多行文本输入 | Feature | 改善移动设备上的长文本输入体验 | [moltis-org/moltis#1107](https://github.com/moltis-org/moltis/issues/1107) |

**背后诉求**：`IlyaBizyaev` 的连续反馈勾勒出一条清晰线索——Moltis 的核心功能已可用，但**安装渠道感知、Web UI 细节和移动端体验**仍存在"最后一公里"的粗糙感。这类反馈通常来自深度实际使用者，建议优先响应以提升留存率。

---

## 5. Bug 与稳定性

| 优先级 | Issue/PR | 描述 | 状态 | 链接 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | **#1106** fix(sandbox): support Podman escape hatches | 修复 rootless Podman 沙盒的 `cannot clone` / `cannot re-exec process` 等启动失败问题，增加 host socket 透传和特权嵌套 Podman 支持 | **PR 待合并** | [moltis-org/moltis#1106](https://github.com/moltis-org/moltis/pull/1106) |
| 🔴 **高** | **#1105** Fix Docker sandbox filesystem tool fallback | 修复 Docker/OCI 沙盒中 Read/Write/Edit/MultiEdit 工具在 host mount 不可访问时的回退路径，增加空拷贝失败的诊断信息 | **PR 待合并** | [moltis-org/moltis#1105](https://github.com/moltis-org/moltis/pull/1105) |
| 🟡 **中** | **#1109** 更新横幅未识别 Docker 安装 | 用户体验问题，可能导致 Docker 用户收到无法执行的更新提示 | **待修复** | [moltis-org/moltis#1109](https://github.com/moltis-org/moltis/issues/1109) |
| 🟡 **中** | **#1108** 会话列表时间显示缺少日期 | UI 可读性问题，影响跨天会话管理 | **待修复** | [moltis-org/moltis#1108](https://github.com/moltis-org/moltis/issues/1108) |
| 🟢 **已修复** | **#1097** Telegram 流式消息中间输出混入最终回复 | 已通过 #1099 关闭 | 已关闭 | [moltis-org/moltis#1097](https://github.com/moltis-org/moltis/issues/1097) |

**评估**：沙盒相关 2 个 PR（#1105、#1106）对自托管用户的稳定性至关重要，建议优先 review。Docker/Podman 是 Moltis 的核心部署方式，文件系统工具失败和 rootless Podman 启动问题属于阻断性故障。

---

## 6. 功能请求与路线图信号

| 议题 | 类型 | 纳入下一版本可能性 | 理由 | 链接 |
|:---|:---|:---|:---|:---|
| **#1107** 移动端 Web UI 多行文本输入 | Feature | ⭐⭐⭐⭐ 高 | 改动范围小、需求明确、与现有 Web UI 改进方向一致 | [moltis-org/moltis#1107](https://github.com/moltis-org/moltis/issues/1107) |
| **#1104** fix(providers): allow replacing preferred models | PR（修复/增强） | ⭐⭐⭐⭐⭐ 极高 | 已有完整 PR，含后端与 Playwright 回归测试，修复模型偏好管理的逻辑缺陷 | [moltis-org/moltis#1104](https://github.com/moltis-org/moltis/pull/1104) |
| **#1089** Cap persisted tool results before rehydration | PR（性能/可靠性） | ⭐⭐⭐⭐ 高 | 覆盖聊天、流式、重试、压缩等多个场景，属于系统性的历史记录优化 | [moltis-org/moltis#1089](https://github.com/moltis-org/moltis/pull/1089) |

**路线图信号**：今日 PR 集中在**"让 Moltis 在各种部署环境下更稳定"**（Podman/Docker 沙盒）和**"让配置管理更可靠"**（模型偏好、工具结果裁剪），显示项目正从功能建设期进入**打磨期/企业就绪期**。

---

## 7. 用户反馈摘要

### 真实痛点

- **部署环境感知缺失**：Docker 用户看到本地更新横幅，提示信息与实际情况脱节（#1109）。
- **时间信息不完整**：Web UI 会话列表仅显示"HH:MM"，跨天会话无法区分是"昨天 14:30"还是"今天 14:30"（#1108）。
- **移动端输入受限**：当前移动 Web UI 的输入框不支持多行，长提示词编辑困难（#1107）。
- **Telegram 流式体验混乱**：流式过程中不断编辑的消息最终残留中间内容，干扰最终答案（#1097，已修复）。

### 使用场景推断

反馈者 `IlyaBizyaev` 可能是**日常通过 Web UI + Docker 自托管使用的重度用户**，同时关注移动端适配。其反馈不涉及核心 AI 能力，而是围绕**日常使用的摩擦点**，说明基础功能已满足需求，产品成熟度成为关键。

### 满意度判断

- ✅ 满意：核心功能可用，社区响应活跃（同日提交的 Bug 有对应修复 PR 或已被记录）。
- ⚠️ 不满意：前端细节、部署环境适配、移动端体验仍有明显粗糙感。

---

## 8. 待处理积压

今日数据中无明显"长期未响应"议题（所有 Issue/PR 均创建于 6 月 1 日至 6 月 5 日之间）。但需要提醒维护者关注的是：

| 风险项 | 说明 | 建议行动 |
|:---|:---|:---|
| **#1089** Cap persisted tool results before rehydration | 创建于 6 月 1 日，已活跃 5 天，涉及聊天、流式、压缩等核心路径，改动面较广 | 尽快完成 review，避免与后续沙盒/模型偏好 PR 产生合并冲突 |
| **4 个待合并 PR 同时堆积** | 由 2 位贡献者在短期内集中提交，覆盖不同子系统 | 按优先级排序：#1105/#1106（沙盒稳定性）→ #1104（模型偏好）→ #1089（历史记录优化） |

---

*日报基于 GitHub 公开数据生成，未包含私有讨论或 CI 状态信息。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-06-06

> **项目地址**: [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)  
> **数据周期**: 2026-06-05 至 2026-06-06（24小时）

---

## 1. 今日速览

CoPaw 项目今日保持**高活跃度**，24小时内产生 **24 条 Issue 更新**（18 活跃/新开，6 关闭）和 **25 条 PR 更新**（10 待合并，15 已合并/关闭），无新版本发布。社区贡献呈现**多线程并行**特征：Yuanbao 渠道修复、浏览器自动化稳定性、Cron 任务增强、控制台体验优化四条主线同步推进。值得注意的是，首次贡献者参与度较高，但核心架构类 Issue（内存泄漏、配置损坏崩溃）仍需维护者优先响应。

---

## 2. 版本发布

**无新版本发布**

当前最新版本仍为 **v1.1.10**（pip 安装版）。该版本存在已知 Yuanbao 渠道 proto 文件缺失问题（[#4976](https://github.com/agentscope-ai/QwenPaw/issues/4976)），建议等待补丁版本。

---

## 3. 项目进展

### 已合并/关闭的关键 PR（15 条）

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#4972](https://github.com/agentscope-ai/QwenPaw/pull/4972) | zhaozhuang521 | **LaTeX 公式渲染修复**：引入 KaTeX 插件，解决数学公式显示异常 | [#4756](https://github.com/agentscope-ai/QwenPaw/issues/4756), [#4959](https://github.com/agentscope-ai/QwenPaw/issues/4959) |
| [#4944](https://github.com/agentscope-ai/QwenPaw/pull/4944) | x1n95c | **浏览器自动化稳定性**：CDP 超时参数 + 浏览器隔离配置文件，解决 Chrome/Edge 闪退 | [#4919](https://github.com/agentscope-ai/QwenPaw/issues/4919) |
| [#4026](https://github.com/agentscope-ai/QwenPaw/pull/4026) | 1105623876 | **安全增强**：`write_file` 工具增加非空文件覆盖保护（首次贡献者） | - |
| [#4934](https://github.com/agentscope-ai/QwenPaw/pull/4934) | hxnan | **新插件**：OpenSandbox 沙箱命令执行插件（首次贡献者） | - |
| [#3403](https://github.com/agentscope-ai/QwenPaw/pull/3403) | fancyboi999 | **部署修复**：延迟内置 Provider 实例化，修复 gunicorn 启动崩溃 | - |
| [#2079](https://github.com/agentscope-ai/QwenPaw/pull/2079) | fancyboi999 | **Anthropic 兼容性**：修复工具返回图片后的对话续传失败 | - |
| [#1347](https://github.com/agentscope-ai/QwenPaw/pull/1347) | fancyboi999 | **MCP 可靠性**：stdio 服务器崩溃后自动重连 | [#1308](https://github.com/agentscope-ai/QwenPaw/issues/1308) |
| [#1240](https://github.com/agentscope-ai/QwenPaw/pull/1240) | fancyboi999 | **状态存储加固**：JSON 状态文件损坏时降级 SQLite，防止会话崩溃 | [#1217](https://github.com/agentscope-ai/QwenPaw/issues/1217) |
| [#4765](https://github.com/agentscope-ai/QwenPaw/pull/4765) | SnowTQ | **UI 微调**：安全页面 shield 图标居中、规则表列宽优化（首次贡献者） | - |
| [#4766](https://github.com/agentscope-ai/QwenPaw/pull/4766) | SnowTQ | **UI 修复**：移除环境变量页 hover 位移，消除滚动条闪烁（首次贡献者） | - |
| [#4905](https://github.com/agentscope-ai/QwenPaw/pull/4905) | bfglx | **浏览器控制增强**：支持页面坐标点击（首次贡献者，审核中关闭） | - |

**进展评估**：今日合并 PR 覆盖**稳定性（4 条）、安全性（2 条）、兼容性（3 条）、UI 体验（3 条）**四大维度，项目整体向"生产级可靠"迈进一步。fancyboi999 作为核心维护者集中处理了历史技术债务（gunicorn、Anthropic、MCP、状态存储）。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 热度分析 |
|:---|:---|:---|:---|
| 1 | [#4754](https://github.com/agentscope-ai/QwenPaw/issues/4754) 打包方式对比（7 评论） | **用户教育缺口**：官方提供 PyInstaller 和 Tauri 两种 Windows 打包方案，但缺乏明确选型指南，导致用户困惑 |
| 2 | [#4919](https://github.com/agentscope-ai/QwenPaw/issues/4919) browser_use 启动失败（6 评论） | **Windows 生态痛点**：managed CDP 超时 + 浏览器闪退，用户尝试 3 种方案最终 npm playwright-cli 兜底，已有关键修复 PR #4944 |
| 3 | [#4770](https://github.com/agentscope-ai/QwenPaw/issues/4770) 会话列表列顺序调整（5 评论） | **UX 细节诉求**：ID/session ID 对用户无价值却占据左侧黄金位置，时间戳隐藏过深，已有 PR #4975 实现 |
| 4 | [#4705](https://github.com/agentscope-ai/QwenPaw/issues/4705) Mission Phase 2 迭代失控（4 评论） | **工作流引擎缺陷**：用户阻塞状态下外层循环仍继续，已关闭但需关注是否彻底修复 |
| 5 | [#4967](https://github.com/agentscope-ai/QwenPaw/issues/4967) 执行死循环无法退出（4 评论） | **紧急稳定性问题**：v1.1.10 新报告，无响应 PR，需立即介入 |

**诉求提炼**：社区核心矛盾从"功能有无"转向"体验好坏"和"稳定可靠"，反映用户基数扩大后的质量期望升级。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **P0-崩溃** | [#4968](https://github.com/agentscope-ai/QwenPaw/issues/4968) | 开放 | **内存泄漏导致 fork 失败**：Ubuntu 24.04 虚拟内存持续增长，subprocess 无法分配内存，1.1.1→1.1.10 仍存在 | **无** |
| 🔴 **P0-崩溃** | [#4970](https://github.com/agentscope-ai/QwenPaw/issues/4970) | 开放 | **配置文件损坏致会话全崩**：`loop_config.json`/`prd.json` JSONDecodeError 无降级处理，任何渠道无法交互 | **无**（历史 PR #1240 仅修复状态存储） |
| 🟡 **P1-功能阻断** | [#4967](https://github.com/agentscope-ai/QwenPaw/issues/4967) | 开放 | 执行死循环无法退出，v1.1.10 | **无** |
| 🟡 **P1-功能阻断** | [#4962](https://github.com/agentscope-ai/QwenPaw/issues/4962) | 开放 | DeepSeek API 回复折叠到思考过程，需手动展开 | **无** |
| 🟡 **P1-功能阻断** | [#4960](https://github.com/agentscope-ai/QwenPaw/issues/4960) | 开放 | 局域网手机访问控制台失败，防火墙全关仍拒绝连接 | **无** |
| 🟡 **P1-渠道故障** | [#4976](https://github.com/agentscope-ai/QwenPaw/issues/4976) | 开放 | Yuanbao 渠道 proto 文件 v1.1.10 wheel 缺失 | [#4983](https://github.com/agentscope-ai/QwenPaw/pull/4983) 关联修复 |
| 🟡 **P1-渠道故障** | [#4977](https://github.com/agentscope-ai/QwenPaw/issues/4977) | 开放 | Yuanbao protobuf 版本兼容：`including_default_value_fields` 参数不支持 | [#4983](https://github.com/agentscope-ai/QwenPaw/pull/4983) 关联修复 |
| 🟡 **P1-渠道故障** | [#4978](https://github.com/agentscope-ai/QwenPaw/issues/4978) | 开放 | Yuanbao `AuthBindRsp` 缺失 `connectId` 字段 | [#4983](https://github.com/agentscope-ai/QwenPaw/pull/4983) |
| 🟡 **P1-渠道故障** | [#4979](https://github.com/agentscope-ai/QwenPaw/issues/4979) | 开放 | Yuanbao `streaming_enabled=True` 时回复静默丢弃 | [#4982](https://github.com/agentscope-ai/QwenPaw/pull/4982) |
| 🟢 **P2-体验瑕疵** | [#4832](https://github.com/agentscope-ai/QwenPaw/issues/4832) | 开放 | Windows 执行 shell 命令时 cmd 窗口闪烁 | [#4900](https://github.com/agentscope-ai/QwenPaw/pull/4900) 包含修复 |
| 🟢 **P2-体验瑕疵** | [#4980](https://github.com/agentscope-ai/QwenPaw/issues/4980) | 开放 | Yuanbao `SendC2CMessage` 始终返回 `bot_id is required` | **无** |

**稳定性评估**：Yuanbao 渠道存在**系统性打包/兼容问题**（4 个关联 Issue），jc200808 已快速响应提交 2 个修复 PR，但内存泄漏和配置损坏崩溃两个 P0 问题尚无修复方案，构成最大风险敞口。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 可行性信号 | 纳入预测 |
|:---|:---|:---|:---|
| **Cron 直接执行脚本/Shell**（免 AI 中转） | [#4963](https://github.com/agentscope-ai/QwenPaw/issues/4963) | 作者 feng183043996 同日提交 [#4950](https://github.com/agentscope-ai/QwenPaw/issues/4950) 被关闭，可能为重复或方案调整 | ⭐⭐⭐ 高，需求明确且作者活跃 |
| **中断/中止 Agent 执行**（用户新消息打断） | [#4964](https://github.com/agentscope-ai/QwenPaw/issues/4964) | 同日 [#4961](https://github.com/agentscope-ai/QwenPaw/issues/4961) 被关闭，可能为重复 | ⭐⭐⭐ 高，解决实际痛点（纠正/停止误操作） |
| **Agent 自定义头像** | [#4974](https://github.com/agentscope-ai/QwenPaw/issues/4974) | 纯前端需求，实现成本低，用户体验增益明确 | ⭐⭐⭐ 高，适合首次贡献者 |
| **同品牌 Provider 卡片合并** | [#4965](https://github.com/agentscope-ai/QwenPaw/issues/4965) | 涉及前后端，智谱多版本冗余为已知问题 | ⭐⭐ 中，需设计评审 |
| **会话栏快速切换**（减少点击次数） | [#4971](https://github.com/agentscope-ai/QwenPaw/issues/4971) | 与 #4770 列顺序调整同属会话管理体验优化 | ⭐⭐ 中，可合并设计 |
| **会话列表列顺序自定义** | [#4770](https://agentscope-ai/QwenPaw/issues/4770) | **已有 PR [#4975](https://github.com/agentscope-ai/QwenPaw/pull/4975) 实现** | ✅ 即将合并 |

**路线图信号**：Cron 增强和 Agent 执行控制两个需求反映用户从"自动化"向"精准可控自动化"的演进，可能纳入 v1.2.x 功能主线。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 Issue | 核心不满 |
|:---|:---|:---|
| **Windows 打包部署** | [#4754](https://github.com/agentscope-ai/QwenPaw/issues/4754) | "两种方案有什么区别？我想打包成 exe" — 文档缺失导致决策困难 |
| **浏览器自动化脆弱性** | [#4919](https://github.com/agentscope-ai/QwenPaw/issues/4919) | "三种尝试均失败，最后只能 npm 兜底" — 多浏览器兼容路径未收敛 |
| **移动端访问受阻** | [#4960](https://github.com/agentscope-ai/QwenPaw/issues/4960) | "关闭所有防火墙仍拒绝连接" — 安全策略与便利性平衡失当 |
| **AI 回复可读性** | [#4962](https://github.com/agentscope-ai/QwenPaw/issues/4962) | DeepSeek 内容折叠到思考过程，"又要展开才可以看到" |
| **会话管理效率** | [#4770](https://github.com/agentscope-ai/QwenPaw/issues/4770), [#4971](https://github.com/agentscope-ai/QwenPaw/issues/4971) | "点两次才能切换"、"ID 对用户没有价值" |

### 满意点

- **多平台覆盖**：Tauri/PyInstaller 双方案、macOS/Windows/Linux 支持获认可
- **渠道扩展**：Yuanbao 等新渠道接入积极（尽管当前有 bug）
- **社区响应速度**：Issue #4919 6 评论内获得修复 PR，#4770 有对应 PR 实现

---

## 8. 待处理积压

| 风险等级 | 条目 | 创建时间 | 当前状态 | 提醒 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#4968](https://github.com/agentscope-ai/QwenPaw/issues/4968) 内存泄漏 | 2026-06-05 | 0 回复，无 PR | **基础设施级问题**，影响所有 Linux 部署，需核心维护者立即诊断 |
| 🔴 **高** | [#4970](https://github.com/agentscope-ai/QwenPaw/issues/4970) 配置损坏崩溃 | 2026-06-05 | 0 回复，无 PR | 与已合并 PR #1240 类似但范围不同（loop_config vs state），需统一加固策略 |
| 🟡 **中** | [#4744](https://github.com/agentscope-ai/QwenPaw/issues/4744) macOS Tauri Intel 芯片支持 | 2026-05-28 | 2 评论，无结论 | 硬件兼容性问题，影响 Intel Mac 用户群体 |
| 🟡 **中** | [#4967](https://github.com/agentscope-ai/QwenPaw/issues/4967) 死循环无法退出 | 2026-06-05 | 4 评论，无 PR | 需与 #4705 Mission Phase 2 迭代失控关联分析，可能为工作流引擎共性问题 |
| 🟡 **中** | [#4822](https://github.com/agentscope-ai/QwenPaw/pull/4822) fix share_session cron | 2026-05-29 | 开放，待合并 | 依赖 #4818，影响定时任务可靠性 |
| 🟡 **中** | [#4900](https://github.com/agentscope-ai/QwenPaw/pull/4900) 插件加载解耦 | 2026-06-02 | 开放，待合并 | 影响 Tauri/PyInstaller 冻结环境启动，桌面宠物体验 |

---

## 附录：关键链接速查

| 类别 | 链接 |
|:---|:---|
| 项目主页 | https://github.com/agentscope-ai/QwenPaw |
| 今日开放 Issues | https://github.com/agentscope-ai/QwenPaw/issues?q=is%3Aissue+updated%3A2026-06-05 |
| 今日开放 PRs | https://github.com/agentscope-ai/QwenPaw/pulls?q=is%3Apr+updated%3A2026-06-05 |
| Yuanbao 修复集群 | [#4976](https://github.com/agentscope-ai/QwenPaw/issues/4976) [#4977](https://github.com/agentscope-ai/QwenPaw/issues/4977) [#4978](https://github.com/agentscope-ai/QwenPaw/issues/4978) [#4979](https://github.com/agentscope-ai/QwenPaw/issues/4979) |
| 对应修复 PRs | [#4982](https://github.com/agentscope-ai/QwenPaw/pull/4982) [#4983](https://github.com/agentscope-ai/QwenPaw/pull/4983) |

---

> **分析师备注**：CoPaw/QwenPaw 项目正处于从"功能快速迭代"向"质量深度打磨"的转型期。v1.1.10 版本的 Yuanbao 渠道打包疏漏表明发布流程需加强自动化测试覆盖。建议维护者优先处理两个 P0 稳定性问题（内存泄漏、配置损坏），并建立"首次贡献者友好"的 Issue 标签以分流 UI/UX 类需求。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-06-06

## 1. 今日速览

ZeroClaw 今日保持**极高活跃度**：50 条 Issues 更新（44 活跃/新开，6 关闭）、50 条 PR 更新（34 待合并，16 已合并/关闭），无新版本发布。项目正处于**v0.9.0 安全架构冲刺期**——OIDC、可插拔安全层、Air-gapped 执行等 P1 级安全 RFC 密集推进；同时社区贡献者 `theonlyhennygod` 主导了工具生态大爆发（5 个集成工具批量合并、4 个新插件、5 个 SMS 渠道）。整体健康度：**活跃但合并队列承压**，34 个待合并 PR 需关注审阅瓶颈。

---

## 2. 版本发布

**无今日发布**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 内容 | 意义 |
|:---|:---|:---|:---|
| [#7278](https://github.com/zeroclaw-labs/zeroclaw/pull/7278) | theonlyhennygod | **批量整合 5 个 IoT/智能家居工具**：Home Assistant、Philips Hue、8Sleep (v2)、Spotify、Sonos | 终结了 5 个独立 PR（#6464/#6470/#6471/#6478/#6480）的碎片化状态，统一架构并减少维护负担 |
| [#7261](https://github.com/zeroclaw-labs/zeroclaw/pull/7261) | Audacity88 | **修复嵌套对象数组密钥泄露**：`#[secret]` 字段在 `prop_fields()` 和 `get_prop()` 中的脱敏处理 | 堵住配置导出/日志中的高危信息泄露路径 |
| [#7123](https://github.com/zeroclaw-labs/zeroclaw/pull/7123) | NiuBlibing | **修复 UTF-8 字符边界 panic**：Bluesky/LinkedIn 文本截断不再在 CJK 等多字节字符处崩溃 | 提升东亚用户稳定性，消除生产级 panic |
| [#7265](https://github.com/zeroclaw-labs/zeroclaw/pull/7265) | theonlyhennygod | **新增 5 个 SMS 渠道**（Twilio/Plivo/Telnyx/Sinch/Vonage），schema v3 格式，带签名验证 webhook | 企业级通信能力重大扩展 |
| [#7229](https://github.com/zeroclaw-labs/zeroclaw/pull/7229) + [#7235](https://github.com/zeroclaw-labs/zeroclaw/pull/7235) | theonlyhennygod | **Web Dashboard 四大管理页**：MCP/Skills/Plugins/Providers 的可视化管理 | 降低运维门槛，从"手写 TOML"转向 UI 驱动 |
| [#7280](https://github.com/zeroclaw-labs/zeroclaw/pull/7280) | theonlyhennygod | **Replicate 模型运行插件**（WASM/Extism） | 支持图像/视频/音频/文本任意模型调用 |
| [#7279](https://github.com/zeroclaw-labs/zeroclaw/pull/7279) | theonlyhennygod | **Firecrawl 网页抓取插件** | 高质量 Markdown 化网页内容获取 |
| [#7277](https://github.com/zeroclaw-labs/zeroclaw/pull/7277) | theonlyhennygod | **Shazam WASM 插件（Pilot）** | 音乐识别能力沙盒化，替代原生工具 |
| [#7276](https://github.com/zeroclaw-labs/zeroclaw/pull/7276) | Yyukan | **文档构建警告清零**：修复 15 个断裂内链、8 个无效 HTML 标签等 | 开发者体验基础工程 |
| [#7060](https://github.com/zeroclaw-labs/zeroclaw/pull/7060) | bheatwole | **WASI WIT 接口定义**：Tool/Channel/Memory 插件的标准接口（FND-001 §5.2） | 插件生态的架构基石 |

**整体推进评估**：今日是"**工具生态日**"——IoT 集成从" ComingSoon 占位符"变为可用功能，WASM 插件矩阵扩展至 4 个（Fal 图像生成、Replicate、Firecrawl、Shazam），通信渠道新增 5 个 SMS 网关。安全方面，密钥脱敏和 UTF-8 panic 修复堵住两个生产级漏洞。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 |
|:---|:---|:---:|:---|
| 🥇 | [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) RFC: Work Lanes, Board Automation, and Label Cleanup | 9 | **治理效率**：贡献者 Audacity88 提出轻量级 PR 泳道 + 标签自动化，减少维护者手动分类负担。反映社区规模扩大后的流程瓶颈。 |
| 🥈 | [#6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969) RFC: 统一输出路由模型（per-peer 模态偏好 + agent send_via 工具） | 7 | **迁移用户痛点**：从 Letta 迁移的用户失去了"回复投递方式控制"能力（如 Telegram 早间简报 vs 紧急电话）。需求本质是**渠道感知的路由策略**。 |
| 🥉 | [#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) 订阅原生 OAuth：Ollama Cloud/z.ai/Kimi/MiniMax | 6 | **国内/新兴模型生态接入**：四大订阅制服务商的免 API Key 认证，降低中国及新兴市场用户门槛。被 `status:blocked` 标签卡住，需维护者审阅。 |
| 4 | [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) 轻量核心：通过外部集成替代内置工具代码 | 4 | **架构哲学争议**：是否应将 gws-cli/jira/github 等内置工具迁出为技能/插件？与今日 #7278 批量合并内置工具形成**方向性张力**。 |
| 5 | [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) Shell 命令执行确认层级（Claude Code 风格 allow/ask/deny） | 4 | **安全 UX 对标**：用户明确引用 Claude Code 的 pattern-matching 策略，要求"允许但需确认"的中间态，而非当前二元的 allow/deny。 |

**热点分析**：社区正处于**"扩张 vs 精简"的架构抉择期**——一方面 theonlyhennygod 疯狂扩展内置工具/插件/渠道，另一方面 #6165 呼吁"核心瘦身"。#6969 和 #7155 显示用户希望 ZeroClaw 在**交互精细度**上追赶 Claude Code/Letta 等竞品。

---

## 5. Bug 与稳定性

| 严重度 | Issue/PR | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|:---|
| **S1 - 工作流阻断** | [#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120) | ✅ 已关闭 | 新用户引导：选择 OpenAI Codex 时错误提示输入 OpenAI API Key（而非 Codex 订阅凭证） | 已修复并关闭 |
| **S2 - 行为降级** | [#7059](https://github.com/zeroclaw-labs/zeroclaw/issues/7059) | 🔴 进行中 | 渠道编排器残留"默认模型提供商"回退逻辑，与 V3 schema 显式引用设计冲突 | 无明确 PR，标记 `status:in-progress` |
| **Panic/崩溃** | [#7123](https://github.com/zeroclaw-labs/zeroclaw/pull/7123) | ✅ 已合并 | CJK 文本截断时的 UTF-8 字符边界 panic | **#7123** |
| **信息泄露** | [#7261](https://github.com/zeroclaw-labs/zeroclaw/pull/7261) | ✅ 已合并 | 嵌套对象数组中 `#[secret]` 字段未脱敏 | **#7261** |

**风险评估**：#7059 是今日唯一未修复的活跃高危 Bug，涉及架构债务（V2→V3 schema 迁移残留），需优先跟进。

---

## 6. 功能请求与路线图信号

### 高概率纳入 v0.9.0 的功能（已有 Accepted RFC 或活跃 PR）

| 功能 | 来源 | 信号强度 | 关键路径 |
|:---|:---|:---:|:---|
| **OIDC 认证提供商（RPC/WSS）** | [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | ⭐⭐⭐⭐⭐ | P1, `status:accepted`, 安全架构核心 |
| **可插拔安全层 Provider 接口** | [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) | ⭐⭐⭐⭐⭐ | P1, `status:accepted`, v0.9.0 Tracking |
| **结构化可观测性增强（OTel 关联）** | [#7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232) | ⭐⭐⭐⭐⭐ | 今日新建，3 评论快速升温 |
| **A2A Agent 发现（.well-known）** | [#7218](https://github.com/zeroclaw-labs/zeroclaw/issues/7218) | ⭐⭐⭐⭐☆ | 多 Agent 互操作基础设施 |
| **按模型能力配置（vision/context_window）** | [#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) | ⭐⭐⭐⭐☆ | P1, 已 accepted，UI+预算控制 |

### 中期潜力（Blocked 或需架构决策）

| 功能 | 来源 | 阻碍因素 |
|:---|:---|:---|
| Air-gapped 执行模式 + Enclave | [#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293) | `status:blocked`, `needs-maintainer-review` |
| LSP 支持（ZeroCode 工作流） | [#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) | `status:blocked`, 架构评审 |
| 轻量核心（外置集成） | [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) | 与当前"批量合并内置工具"方向冲突 |

---

## 7. 用户反馈摘要

### 痛点

| 反馈 | 来源 | 场景 |
|:---|:---|:---|
| "从 Letta 迁移后，无法控制回复投递方式" | [#6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969) | 多模态通信（简报→Telegram，紧急→电话） |
| "200+ 废弃分支导致仓库混乱" | [#6715](https://github.com/zeroclaw-labs/zeroclaw/issues/6715) | 新贡献者 onboarding |
| "技能审计误杀 .md 文档链接" | [#6714](https://github.com/zeroclaw-labs/zeroclaw/issues/6714) | 第三方插件市场（anthropics/knowledge-work-plugins） |
| "llamacpp 配置无预警导致运行时失败" | [#6416](https://github.com/zeroclaw-labs/zeroclaw/issues/6416) | 本地模型用户 quickstart 体验 |

### 满意/期待

| 反馈 | 来源 |
|:---|:---|
| "批量合并 5 个 IoT 工具终于可用" | #7278 隐含（终结 5 个 stalled PR） |
| "WASM 插件让沙盒化扩展成为可能" | #7277, #7279, #7280 系列 |
| "Web Dashboard 告别手写 TOML" | #7229, #7235 |

---

## 8. 待处理积压

### 需维护者紧急关注（长期 Blocked 或高价值未响应）

| Issue/PR | 天数 | 状态 | 风险 |
|:---|:---:|:---|:---|
| [#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) OAuth 支持：Ollama Cloud/z.ai/Kimi/MiniMax | 57天 | `status:blocked` `needs-maintainer-review` | **中国市场准入壁垒**，竞品已支持 |
| [#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293) Air-gapped 执行模式 | 34天 | `status:blocked` `needs-maintainer-review` | 企业安全合规刚需 |
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) 轻量核心 RFC | 40天 | `status:blocked` `needs-maintainer-review` | 与当前扩展方向冲突，需决策 |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) 153 个 commit 批量回滚恢复审计 | 43天 | `status:in-progress` | **技术债务追踪**，防止修复丢失 |
| [#6279](https://github.com/zeroclaw-labs/zeroclaw/issues/6279) 发布标签里程碑筛选优化 | 35天 | `status:blocked` | 社区信任度维护 |

### 待合并 PR 队列压力

34 个待合并 PR 中，**theonlyhennygod 贡献占绝对主导**（今日 8 个活跃 PR），存在**审阅者集中依赖风险**。建议：
- 优先审阅安全相关 PR（#7261 已合并，#7265 SMS 渠道需安全 review webhook 签名实现）
- 建立第二审阅者梯队，减少单点瓶颈

---

*日报生成时间：2026-06-06 | 数据来源：GitHub API 概览 + Issues/PR 详情*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*