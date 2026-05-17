# OpenClaw 生态日报 2026-05-17

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-17 00:21 UTC

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

# OpenClaw 项目动态日报 | 2026-05-17

---

## 1. 今日速览

OpenClaw 今日保持极高活跃度，24小时内 **500 条 Issues 更新**（430 新开/活跃，70 关闭）与 **500 条 PR 更新**（414 待合并，86 已合并/关闭），显示社区处于密集迭代期。3 个 beta 版本连续发布，聚焦 xAI 生态集成与 CLI 工具增强。Issues 侧 P1 级 Bug 占比显著，涉及会话管理、消息投递、多代理编排等核心稳定性问题；PR 侧今日涌现大量高优先级修复，特别是 Discord/Telegram 通道可靠性、内存嵌入超时中断、Codex 进度回溯等。整体项目处于**功能扩张与稳定性攻坚并行**的阶段，通道层（Discord/Telegram）和运行时（会话/内存/投递）是今日最热的两大战场。

---

## 2. 版本发布

### v2026.5.16-beta.3 | [Release 页面](https://github.com/openclaw/openclaw/releases/tag/v2026.5.16-beta.3)
- **Providers/xAI**: 为 SuperGrok 订阅者新增 xAI Grok OAuth 登录，支持 `xai/*` 模型及 xAI 媒体/工具提供商无需 `XAI_API_KEY` 即可认证
- **CLI/cron**: 新增 `openclaw cron run --wait` 命令，支持超时与轮询间隔控制；`cron.runs --run-id` 支持精确过滤

### v2026.5.16-beta.2 | [Release 页面](https://github.com/openclaw/openclaw/releases/tag/v2026.5.16-beta.2)
- 同 beta.3 的 xAI OAuth 与 CLI cron 增强（注：changelog 重复，可能为发布流程问题）

### v2026.5.16-beta.1 | [Release 页面](https://github.com/openclaw/openclaw/releases/tag/v2026.5.16-beta.1)
- **Maintainer tooling**: Crabbox 技能默认路由改为仓库代理的 AWS 配置，Blacksmith Testbox 变为显式 opt-in（原默认行为变更，**潜在破坏性变更**）
- **CLI/onboarding**: 设置向导与捆绑通道设置流程支持英语、简体中文本地化

**⚠️ 迁移注意事项**: beta.1 的 AWS 配置变更可能影响依赖 Blacksmith Testbox 的 CI 流程，需检查 `OPENCLAW_HOME` 下的技能默认配置。

---

## 3. 项目进展

### 已合并/关闭的关键 PR（今日）

| PR | 作者 | 核心改进 | 状态 |
|:---|:---|:---|:---|
| [#82795](https://github.com/openclaw/openclaw/pull/82795) | steipete | macOS 配对审批提示优化：友好文案替代原始 ID，按钮顺序调整（Approve 优先） | ✅ Closed |
| [#82756](https://github.com/openclaw/openclaw/pull/82756) | IWhatsskill | Telegram 无标题媒体消息捕获全量提及修复 | ✅ Closed |

### 高价值待合并 PR（今日新建/更新，推进中）

| PR | 作者 | 优先级 | 推进方向 |
|:---|:---|:---|:---|
| [#82804](https://github.com/openclaw/openclaw/pull/82804) | galiniliev | P1 | 子代理完成通知回退修复：解决"completion agent did not produce a visible reply"导致子代理输出不可见 |
| [#82796](https://github.com/openclaw/openclaw/pull/82796) | IWhatsskill | P1 | Cron 最佳 effort 投递尊重：隔离 cron 作业不再等待 fire-and-forget 子代理，避免超时预算耗尽 |
| [#81864](https://github.com/openclaw/openclaw/pull/81864) | kennykankush | P1 | 插件审批自然语言化：将调试级原始输出转为人类可读的审批提示 |
| [#81729](https://github.com/openclaw/openclaw/pull/81729) | jesse-merhi | - | 移除系统事件信任元数据：消除 `System (untrusted):` 前缀暴露，通过结构化运行时元数据保留权限行为 |
| [#82801](https://github.com/openclaw/openclaw/pull/82801) | joshavant | P1 | Discord LLM 边界回复上下文修复：保留当前用户回合入站元数据 |
| [#82799](https://github.com/openclaw/openclaw/pull/82799) | joshavant | P1 | Windows 图像模型事件循环卡顿修复：避免热路径上的 broad PI/plugin 发现 |
| [#82770](https://github.com/openclaw/openclaw/pull/82770) | steipete | P1 | 内存嵌入请求超时中断：AbortSignal 穿透嵌入提供商调用，替换超时包装器 |
| [#82797](https://github.com/openclaw/openclaw/pull/82797) | lisyoen | P1 | 工具输入 LLM sentinel token 消毒：防御 bash exec 和 web-fetch URL 中的 `<\|...\|>` 泄露 |

**整体推进评估**: 今日 PR 聚焦三大主题——**通道可靠性**（Discord/Telegram 上下文与投递）、**运行时安全**（token 消毒、审批 UX、系统事件去信任化）、**性能与可观测性**（Windows 事件循环、lane 等待诊断、嵌入超时中断）。项目正从"功能可用"向"生产鲁棒"阶段跃迁。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| # | Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---|:---|:---|
| #71127 | Stuck processing sessions detected but never aborted — gateway requires external restart | 14 | **运行时自愈能力缺失**: 诊断系统能检测卡住会话但无恢复动作，运维被迫手动重启 gateway | [链接](https://github.com/openclaw/openclaw/issues/71127) |
| #45740 | gh-issues skill: untrusted issue body injected directly into sub-agent prompt | 12 | **供应链安全**: GitHub issue 正文未经消毒直接注入子代理提示，存在提示注入攻击面 | [链接](https://github.com/openclaw/openclaw/issues/45740) |
| #39604 | Add tools.web.fetch.allowPrivateNetwork to allow private network access | 12 | **企业网络灵活性**: 7 👍 高支持度，用户需要显式 opt-in 访问内网地址（localhost/10.x/192.168.x） | [链接](https://github.com/openclaw/openclaw/issues/39604) |
| #41744 | Feishu: read image tool result loses media before final outbound payload | 11 | **企业 IM 集成质量**: 飞书场景下图片读取成功但最终投递丢失，阻塞办公自动化场景 | [链接](https://github.com/openclaw/openclaw/issues/41744) |
| #45326 | TUI: Input typed during model generation is swallowed and incorrectly queued | 10 | **交互体验**: 生成过程中用户输入被"吞噬"且错误排队到下一轮，中断机制失效 | [链接](https://github.com/openclaw/openclaw/issues/45326) |
| #44925 | Subagent completion silently lost — no retry, no notification, no auto-restart on timeout | 10 | **分布式可靠性**: 子代理结果在 E31/E42/E45 错误码下静默丢失，无重试无通知 | [链接](https://github.com/openclaw/openclaw/issues/44925) |
| #63216 | Repeated hard resets on same session key despite high reserveTokensFloor | 10 | **上下文管理失控**: 高预留令牌配置下仍反复硬重置，且重试循环重复注入 bootstrap 上下文 | [链接](https://github.com/openclaw/openclaw/issues/63216) |

**诉求分析**: 社区核心焦虑集中于**"静默失败"模式**——系统检测到问题但不恢复（#71127）、子代理失败无感知（#44925）、媒体丢失无反馈（#69309，对应 PR #69310）。用户期望 OpenClaw 从"能跑"升级为"可运维、可观测、自愈"。

---

## 5. Bug 与稳定性

### P1 级（生产阻塞）

| Issue | 描述 | 状态 | 关联 PR |
|:---|:---|:---|:---|
| [#71127](https://github.com/openclaw/openclaw/issues/71127) | 卡住会话检测后无终止动作，需外部重启 gateway | 🔴 开放，无 fix PR | - |
| [#41744](https://github.com/openclaw/openclaw/issues/41744) | 飞书图片读取后媒体在最终投递前丢失 | 🔴 开放，无 fix PR | - |
| [#45326](https://github.com/openclaw/openclaw/issues/45326) | TUI 生成期输入被吞噬，中断失败 | 🔴 开放，无 fix PR | - |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 子代理完成静默丢失（超时无重试/通知/自动重启） | 🔴 开放，无 fix PR | #82804 可能部分相关 |
| [#63216](https://github.com/openclaw/openclaw/issues/63216) | 同会话键反复硬重置，重试循环注入 bootstrap | 🔴 开放，无 fix PR | - |
| [#44905](https://github.com/openclaw/openclaw/issues/44905) | Discord 泄露内部工具调用痕迹（NO_REPLY, to=functions 等） | 🔴 开放，无 fix PR | #45290 涉及 outbound 恢复 |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | 多代理编排不稳定：并发 add/config 覆盖、会话锁失败、分离子工作 | 🔴 开放，无 fix PR | - |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) | Write 工具无追加模式，隔离 cron 会话覆盖共享文件 | 🔴 开放，无 fix PR | - |
| [#43661](https://github.com/openclaw/openclaw/issues/43661) | 压缩超时导致会话无限挂起，重复发送 duplicate 消息 | 🔴 开放，无 fix PR | #82770 嵌入超时中断可能相关 |
| [#41165](https://github.com/openclaw/openclaw/issues/41165) | Telegram DM 仍落入 agent:main:main，污染心跳/主会话 | 🔴 开放，无 fix PR | - |
| [#81114](https://github.com/openclaw/openclaw/issues/81114) | Codex app-server 近窗口期超时/回退 | 🔴 开放，无 fix PR | #82790 Codex 快照进度回溯 |
| [#45494](https://github.com/openclaw/openclaw/issues/45494) | Cron 代理作业在 LLM API 持续 500 时静默超时而非快速失败 | 🔴 开放，无 fix PR | #82796 可能相关 |
| [#43795](https://github.com/openclaw/openclaw/issues/43795) | 500 `v.content is not iterable` | 🔴 开放，无 fix PR | - |
| [#39223](https://github.com/openclaw/openclaw/issues/39223) | 配置向导在 Gateway 选择步骤挂起，阻塞 OAuth 流程 | 🔴 开放，无 fix PR | - |
| [#32868](https://github.com/openclaw/openclaw/issues/32868) | 块流式：工具执行前块回复未投递（同通道） | 🔴 开放，无 fix PR | - |

### P2 级（功能受损）

| Issue | 描述 | 状态 | 关联 PR |
|:---|:---|:---|:---|
| [#45740](https://github.com/openclaw/openclaw/issues/45740) | gh-issues 技能未消毒注入子代理提示 | 🟡 开放，clawsweeper 多标签阻塞 | - |
| [#44993](https://github.com/openclaw/openclaw/issues/44993) | 心跳/Cron "当前时间" 时间戳不刷新（回归） | 🟡 开放，无 fix PR | - |
| [#45698](https://github.com/openclaw/openclaw/issues/45698) | Control UI 运行一段时间后逐渐卡住（2026.3.12 回归） | 🟡 开放，需信息 | - |
| [#43747](https://github.com/openclaw/openclaw/issues/43747) | 内存管理混乱：不同用户行为不一致（chunking/embedding/SQLite vs 其他） | 🟡 开放，无 fix PR | - |
| [#45269](https://github.com/openclaw/openclaw/issues/45269) | `apply_patch` 被代理策略管道视为未知/仅插件工具 | 🟡 开放，无 fix PR | - |
| [#45765](https://github.com/openclaw/openclaw/issues/45765) | `OPENCLAW_HOME=~/.openclaw` 产生嵌套目录 `~/.openclaw/.openclaw`（回归） | 🟡 开放，无 fix PR | - |
| [#45706](https://github.com/openclaw/openclaw/issues/45706) | DeepSeek 满血版 + mindie 框架返回 HTTP 422 "Check open ai req parameter error" | 🟡 开放，无 fix PR | - |
| [#44599](https://github.com/openclaw/openclaw/issues/44599) | `OPENCLAW_CONFIG_DIR` 不能包含空格（回归） | 🟡 开放，无 fix PR | - |
| [#45488](https://github.com/openclaw/openclaw/issues/45488) | #18049 引入会话膨胀：系统提示部分被复制到上下文 | 🟡 开放，无 fix PR | - |

---

## 6. 功能请求与路线图信号

| Issue | 支持度 | 可行性信号 | 纳入下一版本概率 |
|:---|:---|:---|:---|
| [#39604](https://github.com/openclaw/openclaw/issues/39604) `tools.web.fetch.allowPrivateNetwork` | 7 👍 | 配置层变更，范围可控 | **高** — 企业用户刚需，已有明确设计 |
| [#63829](https://github.com/openclaw/openclaw/issues/63829) Per-agent memory-wiki vault | 7 👍 | 插件架构扩展 | **中高** — 多代理场景核心需求 |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) Per-agent cost budget enforcement | 0 👍 | 网关层拦截，需计费系统配合 | **中** — 与现有 `session-cost-usage.ts` 可衔接 |
| [#43260](https://github.com/openclaw/openclaw/issues/43260) SKILL.md frontmatter `model` 字段 | 0 👍 | 技能路由层变更 | **中** — 与 #45550 Anthropic 1M 上下文 GA 可协同 |
| [#45608](https://github.com/openclaw/openclaw/issues/45608) Pre-reset agentic memory flush | 3 👍 | 复用现有 `runMemoryFlushIfNeeded` | **高** — 技术债务小，用户体验增益大 |
| [#42840](https://github.com/openclaw/openclaw/issues/42840) Control UI MathJax/LaTeX 支持 | 4 👍 | 前端渲染层 | **中** — 教育/科研场景差异化 |
| [#45758](https://github.com/openclaw/openclaw/issues/45758) YAML 配置文件格式支持 | 2 👍 | 配置解析层扩展 | **中低** — 社区偏好，非阻塞 |
| [#45031](https://github.com/openclaw/openclaw/issues/45031) Built-in security scanning for skill installation | 0 👍，引用外部 AgentShield | 安全基础设施 | **中** — 与 #45740 安全审计趋势一致 |
| [#44431](https://github.com/openclaw/openclaw/issues/44431) Browser tool 7 项改进（CSS 选择器、iframe 等） | 0 👍，实地测试报告 | 工具层大改 | **中** — 自动化场景关键，但工作量大 |

**路线图信号**: xAI 生态深度集成（OAuth、SuperGrok）已落地，预示 OpenClaw 正积极拥抱多提供商战略。Anthropic 1M 上下文 GA 迁移（#45550）进行中，下一代上下文管理可能是重点。

---

## 7. 用户反馈摘要

### 痛点（高频/高情绪）

| 主题 | 典型反馈 | 来源 Issue |
|:---|:---|:---|
| **静默失败 = 信任杀手** | "子代理结果静默丢失，无重试无通知" | #44925 |
| **运维黑洞** | "诊断检测到卡住会话但无恢复，必须外部重启" | #71127 |
| **状态不一致噩梦** | "3 人团队，内存管理方式完全不同" | #43747 |
| **企业 IM 二等公民** | "飞书图片读取成功但最终丢失" | #41744 |
| **配置即陷阱** | `OPENCLAW_HOME=~/.openclaw` 产生嵌套目录 | #45765 |

### 使用场景

- **多代理并行编码批处理**（#43367）：用户尝试 `openclaw agents add` 并发配置，遭遇竞态覆盖
- **Cron 自动化报告**（#40001, #45778）：隔离 cron 会话覆盖共享文件，或无法向用户推送背景消息
- **Telegram 论坛机器人**（#44925, #41165）：群组/私信路由混淆，DM 污染主会话

### 满意点

- xAI OAuth 集成减少 API key 管理负担（Release 反馈）
- 设置向导中文本地化降低入门门槛（beta.1）

---

## 8. 待处理积压

### 长期未响应的高优先级 Issue（>2 个月，clawsweeper 标签堆积）

| Issue | 创建 | 最后更新 | 阻塞标签 | 风险 |
|:---|:---|:---|:---|:---|
| [#45740](https://github.com/openclaw/openclaw/issues/45740) gh-issues 技能提示注入 | 2026-03-14 | 2026-05-16 | `needs-security-review`,

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期**: 2026-05-17 | **数据来源**: GitHub 公开活动流

---

## 1. 生态全景

个人 AI 助手开源生态正经历**从"功能可用"向"生产鲁棒"的关键跃迁**。头部项目（OpenClaw、ZeroClaw、Hermes Agent）日均 50+ Issues/PR 的吞吐量表明社区进入密集迭代期，核心矛盾从"能否运行"转向"能否可靠运行、可运维、可自愈"。多智能体编排、上下文压缩可靠性、企业级部署（容器化/OAuth/多租户）成为共同攻坚方向，而技能系统（Skills）正逐步替代硬编码工具成为主流架构范式。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 今日 Release | 健康度评估 | 阶段定位 |
|:---|:---|:---|:---|:---|:---|
| **OpenClaw** | 500 更新 (430新开/活跃, 70关闭) | 500 更新 (414待合并, 86已合并/关闭) | 3 个 beta (v2026.5.16-beta.1~3) | 🟡 7/10 — 极高活跃度，P1 Bug 占比显著，稳定性攻坚中 | 功能扩张与稳定性并行 |
| **ZeroClaw** | 50 更新 (45新开/活跃, 5关闭) | 50 更新 (39待合并, 11已合并/关闭) | 无 | 🟡 7/10 — v0.8.0 大版本冲刺，技术债务累积需警惕 | 架构重构期 |
| **Hermes Agent** | 50 更新 (44新开/活跃, 6关闭) | 50 更新 (21待合并, 29已合并/关闭) | 无 (v0.14.0 昨日发布) | 🟡 7/10 — 发布日反馈洪峰，修复响应迅速但流程质量有缺口 | 发布后稳定期 |
| **IronClaw** | 14 更新 (14新开/活跃, 1关闭) | 32 更新 (17待合并, 15已合并/关闭) | 无 (v0.28.2 流水线就绪) | 🟢 8/10 — Reborn 架构推进清晰，E2E 稳定性待加强 | 架构升级期 |
| **CoPaw** | 13 更新 (12新开/活跃, 1关闭) | 11 更新 (10待合并, 1已合并/关闭) | 无 | 🟡 6/10 — 审查瓶颈明显，管道充盈但合入缓慢 | 快速迭代期 |
| **NanoBot** | 7 更新 | 26 更新 (10待审, 16已合并/关闭) | **v0.2.0** | 🟢 8/10 — 版本发布与代码合并双线并进，前端稳定性拖后腿 | 里程碑交付期 |
| **NanoClaw** | 6 更新 (5新开/活跃, 1关闭) | 9 更新 (7待合并, 2已合并/关闭) | 无 | 🟡 6/10 — 消息可靠性 P0 无 Fix PR，生产就绪度警示 | 功能积累期 |
| **LobsterAI** | 1 更新 (1新开) | 22 更新 (12待合并, 10已合并/关闭) | 无 (release/2026.5.15 已合入 main) | 🟡 5/10 — 高代码活跃度、低社区互动，66.7% stale PR 高风险 | 内部驱动期 |
| **Moltis** | 1 更新 (1新开) | 3 更新 (2待合并, 1已合并/关闭) | 无 | 🟢 7/10 — 中等活跃度，零 Bug 报告，稳健演进 | 功能蓄力期 |
| **PicoClaw** | 2 更新 (1新开, 1活跃) | 3 更新 (1待合并, 2关闭) | nightly v0.2.8-nightly.20260516 | 🟡 6/10 — 渠道扩展积极，稳定性回归待观察 | 渠道扩展期 |
| **NullClaw** | 0 | 0 | 无 | ⚪ 休眠 | — |
| **TinyClaw** | 0 | 0 | 无 | ⚪ 休眠 | — |
| **ZeptoClaw** | 0 | 0 | 无 | ⚪ 休眠 | — |

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 表现 | 生态对比 |
|:---|:---|:---|
| **社区规模** | 绝对领先：500 Issues/500 PR 日吞吐量 = 第 2~4 名总和的 5-10 倍 | ZeroClaw、Hermes 各 50/50，NanoBot 26 PR，存在数量级差距 |
| **迭代节奏** | 单日 3 个 beta 版本连续发布，xAI 生态集成速度最快 | Hermes v0.14.0 为月度大版本，NanoBot v0.2.0 为里程碑式 |
| **技术路线** | **"全渠道优先 + 多提供商深度集成"**：Discord/Telegram/飞书/微信同步攻坚，xAI/Anthropic/OpenAI 并行适配 | ZeroClaw 侧重 Schema V3 架构重构与桌面端；Hermes 强调"自安装运行"自治能力；IronClaw 押注 Reborn 声明式架构 |
| **核心优势** | ① 渠道生态最全（企业 IM 覆盖度最高）；② 提供商响应最快（xAI OAuth 首日落地）；③ CLI 工具链最成熟（`openclaw cron` 等） | 相对 ZeroClaw 的技能系统、Hermes 的 TUI 体验、IronClaw 的类型安全 Rust 架构，OpenClaw 胜在**集成广度与社区动能** |
| **相对短板** | **"静默失败"模式突出**：卡住会话不恢复、子代理丢失无通知、媒体投递失败无反馈——可观测性与自愈能力落后于架构复杂度 | NanoBot 的 goal 持久化、ZeroClaw 的 "dream mode" 记忆压缩、Hermes 的 receipt 溯源，均在可靠性工程上更前瞻 |

> **定位判断**: OpenClaw 是生态**"最大公约数"**——功能最全、社区最大、迭代最快，但正经历从"集成平台"向"可靠基础设施"的阵痛转型。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 紧迫程度 |
|:---|:---|:---|:---:|
| **上下文压缩可靠性** | OpenClaw (#63216 反复硬重置)、CoPaw (#4448/#4447 missing header)、ZeroClaw (#6269 reasoning_content 丢失)、Hermes (#27189 媒体剥离) | 压缩不丢内容、不循环重置、保留推理链 | 🔴 极高 |
| **多智能体编排** | OpenClaw (#43367 并发覆盖/锁失败)、Moltis (#1004 非阻塞 spawn_agent)、NanoClaw (#2497 Agent Network)、ZeroClaw (#6398 Multi-Agent Runtime) | 并发安全、非阻塞调用、子代理生命周期管理 | 🔴 极高 |
| **消息可靠性/去重** | OpenClaw (#44925 静默丢失)、NanoClaw (#2506 竞态丢消息)、CoPaw (#4449 零停机重载清空队列)、Hermes (#27033 工具结果污染循环) | 至少一次投递、可见错误、可重试、不静默丢 | 🔴 极高 |
| **企业部署/容器化** | NanoClaw (#957 Podman, #2516 SIGKILL 恢复)、OpenClaw (beta.1 AWS 配置变更)、IronClaw (#3036 Configuration-as-Code) | Docker 替代方案、配置声明化、故障恢复 | 🟡 高 |
| **OAuth/认证生态** | OpenClaw (xAI SuperGrok)、ZeroClaw (#5601 中国四家 OAuth)、Hermes (Vertex AI #13484)、NanoBot (#2172 密钥引用) | 减少静态 API key、订阅制原生集成、企业 SSO | 🟡 高 |
| **技能系统 (Skills)** | ZeroClaw (#6253 主题发布)、Hermes (receipt 溯源 #11692)、Moltis (#1003 agent system builder)、OpenClaw (#45740 gh-issues 安全) | 技能发现、版本治理、安全审计、自改进 | 🟡 高 |
| **推理模型适配** | NanoBot (#3845 MiMo thinking)、LobsterAI (#1994 MiMo reasoning_content)、Hermes (#24443 MiMo)、OpenClaw (Codex 进度回溯) | reasoning_content 透传/保留/压缩兼容 | 🟡 高 |
| **TUI/终端体验** | Hermes (#27174 Live session switcher)、ZeroClaw (#5882 Ratatui REPL)、OpenClaw (#45326 输入吞噬) | 实时会话管理、中断机制、现代化终端界面 | 🟢 中 |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户画像 | 技术架构特征 |
|:---|:---|:---|:---|
| **OpenClaw** | 全渠道集成平台 + CLI 工具链 | 多平台运营者、自动化工程师、IM Bot 开发者 | Node.js/TypeScript，插件化渠道适配器，强调快速集成 |
| **ZeroClaw** | 可扩展智能体运行时 + 技能生态 | 企业开发者、需要自定义 Agent 行为的团队 | Rust + Tauri 桌面端，Schema V3 强类型配置，ACP 协议 |
| **Hermes Agent** | 自维持自主 Agent + 开发者体验 | 个人开发者、日常编码助手重度用户 | Node.js，TUI 优先，"Foundation"自治定位，记忆持久化 |
| **IronClaw** | 类型安全的声明式 Agent 基础设施 | 企业平台运营商、需要审计追踪的组织 | Rust，Reborn 架构，composition root 模式，强类型安全 |
| **NanoBot** | 线程级目标持久化 + 上下文效率 | 长任务研究者、需要 Agent 持续跟踪目标的场景 | Python，goal 状态置顶，动态超时重评估 |
| **NanoClaw** | 消息管道可靠性 + 运维可观测性 | 容器化部署的运维团队、多实例编排者 | TypeScript/Bun，health-monitor 模块化，技能版本隔离 |
| **CoPaw** | 多频道审批交互 + 轻量目标模式 | 运营团队、需要人机协作审核的业务场景 | 未明确，QQ/Telegram 渠道深度，WebUI 专属功能 |
| **Moltis** | 分布式多智能体系统 + 企业远程访问 | 构建复杂多 Agent 系统的架构师 | 未明确，NetBird/Cloudflare Tunnel 基础设施集成 |
| **LobsterAI** | 桌面端本地 AI 引擎 + 中文模型生态 | 中文用户、偏好桌面应用的消费者 | Electron，MiMo 模型深度适配，有道生态集成 |
| **PicoClaw** | 移动端/嵌入式部署 + 微信生态 | 移动优先用户、微信生态运营者 | 未明确，Android 端、微信多账号 |

---

## 6. 社区热度与成熟度分层

```
┌─────────────────────────────────────────────────────────┐
│  🔥 快速迭代阶段（日均 50+ 更新）                         │
│  OpenClaw · ZeroClaw · Hermes Agent                      │
│  特征：功能扩张与稳定性攻坚并行，P1 Bug 密集，社区动能最大    │
├─────────────────────────────────────────────────────────┤
│  🚀 架构升级阶段（日均 15-35 更新）                       │
│  IronClaw · CoPaw · NanoBot                              │
│  特征：重大架构重构（Reborn/goal/Runner解耦），里程碑交付    │
├─────────────────────────────────────────────────────────┤
│  🛠️ 功能蓄力阶段（日均 <10 更新）                        │
│  NanoClaw · Moltis · PicoClaw                            │
│  特征：特定方向深耕（消息可靠性/远程访问/微信生态），稳健演进  │
├─────────────────────────────────────────────────────────┤
│  💤 休眠/低活跃阶段                                      │
│  NullClaw · TinyClaw · ZeptoClaw                         │
│  特征：24h 零活动，需关注项目可持续性                      │
├─────────────────────────────────────────────────────────┤
│  🏭 内部驱动阶段                                         │
│  LobsterAI                                               │
│  特征：高代码活跃度、低社区互动，stale PR 堆积，企业内驱特征   │
└─────────────────────────────────────────────────────────┘
```

---

## 7. 值得关注的趋势信号

| 趋势信号 | 证据来源 | 对开发者的价值 |
|:---|:---|:---|
| **"静默失败"成为信任杀手** | OpenClaw #44925/#71127、NanoClaw #2506、CoPaw #4449 共同模式 | **设计原则**: 任何失败必须可见、可追踪、可恢复。优先投资可观测性（health-monitor、receipt 溯源）而非仅功能覆盖 |
| **技能系统替代硬编码工具** | ZeroClaw #6165、Hermes #27187 插件发现、Moltis #1003 | **架构迁移**: 将工具能力外化为可版本治理、可审计、可市场分发的技能单元，是 Agent 平台化的必经之路 |
| **Goal/记忆持久化成为差异化** | NanoBot v0.2.0 `/goal`、ZeroClaw #6693 "dream mode"、Hermes 记忆持久化 | **用户体验**: 长任务场景下，Agent 能否"记住"并"坚持"目标，直接决定用户是否愿意委托复杂工作 |
| **中国 AI 生态接入紧迫** | ZeroClaw #5601 (Kimi/MiniMax/智谱/月之暗面)、LobsterAI MiMo 深度适配、OpenClaw 中文本地化 | **市场机会**: 国内模型厂商的 OAuth/推理特性适配存在窗口期，先发者获生态位优势 |
| **非阻塞/异步 Agent 架构** | Moltis #1004、OpenClaw #43367、NanoClaw #2497 | **性能瓶颈**: 同步 spawn_agent 设计在长任务场景下成为硬性约束，异步编排将从"优化"变为"必需" |
| **终端原生体验复兴** | Hermes #27174 Live TUI、ZeroClaw #5882 Ratatui、OpenClaw TUI 输入问题 | **交互范式**: 终端不再是"降级方案"，而是开发者高效工作流的核心场景，TUI 体验成为竞争力 |
| **配置即代码 (Configuration-as-Code)** | IronClaw #3036 EPIC、OpenClaw beta.1 AWS 配置变更 | **运维成熟度**: 从手编配置向声明式、版本化、可审计的配置管理演进，是企业采纳的前提条件 |

---

> **核心建议**: 对于技术决策者，当前生态正处于**"功能竞赛"向"可靠性竞赛"**的转折点。选择项目时，应优先评估其**错误处理策略、可观测性基础设施、社区对 P1 Bug 的响应速度**，而非仅关注功能清单的完整性。OpenClaw 的广度、ZeroClaw 的架构前瞻性、Hermes 的开发者体验各有优势，但共同面临"生产鲁棒"的终极考验。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-05-17

---

## 1. 今日速览

NanoBot 项目今日呈现**高活跃度、强交付节奏**：24小时内 **26个PR** 流转（16条已合并/关闭，10条待审），**7个Issue** 更新，并正式发布 **v0.2.0** 里程碑版本。核心工程团队（chengyongru、olgagaga 等）集中推进了 Agent 架构重构、Provider 层健壮性加固及安全机制完善。社区侧，微信登录失效与 WebUI 渲染错乱成为用户高频痛点，已有针对性 PR 进入评审队列。整体项目健康度：**良好**，版本发布与代码合并双线并进，但前端稳定性问题需持续关注。

---

## 2. 版本发布

### [v0.2.0](https://github.com/HKUDS/nanobot/releases/tag/v0.2.0) — Agent 目标持久化里程碑

| 属性 | 详情 |
|:---|:---|
| **合并 PR 数** | 105 |
| **新增贡献者** | 20 人 |
| **核心 headline** | `/goal` — 线程级长期目标持久化 |

**关键能力：**
- **`long_task` 标记**：将线程标记为持续目标，激活的 goal 在每轮 Runtime Context 中**保持置顶**
- **抗压缩/抗长工具链**：goal state 在上下文压缩、长工具调用序列中**持续存活**，避免目标漂移
- **Runtime Context 注入**：每轮自动携带，无需用户重复声明意图

**迁移注意事项：**
- 该版本为**功能增量发布**，无已知破坏性变更
- 现有 `config.json` 结构兼容，但建议新用户通过 `nanobot onboard` 体验 goal 工作流
- 开发者需注意：goal state 最大 4000 字符，已合并的 PR #3859 修复了 mid-turn 重复注入导致的 token 浪费问题

---

## 3. 项目进展

### 已合并/关闭的核心 PR（按影响面排序）

| PR | 作者 | 类别 | 进展说明 |
|:---|:---|:---|:---|
| [#3851](https://github.com/HKUDS/nanobot/pull/3851) | olgagaga | Provider 修复 | **MiMo 思考控制穿透网关**：修复 OpenRouter 等网关代理下 `reasoning_effort="none"` 失效问题，将 `thinking_style` 逻辑从 dedicated spec 下沉至请求层 |
| [#3859](https://github.com/HKUDS/nanobot/pull/3859) | chengyongru | Agent 性能 | **消除 mid-turn 重复上下文注入**：`_drain_pending` 不再重复注入 runtime context + goal state，单 turn 节省最高 4000 token |
| [#3861](https://github.com/HKUDS/nanobot/pull/3861) | chengyongru | Goal 稳定性 | **动态 LLM 超时重评估**：`long_task` 调用后，同 run 内后续请求自动切换至 goal 专用超时（禁用默认 300s 限制） |
| [#3856](https://github.com/HKUDS/nanobot/pull/3856) | chengyongru | 架构重构 | **提取 checkpoint.py / turn_writer.py**：`loop.py` 瘦身，持久化逻辑模块化，提升可维护性 |
| [#3858](https://github.com/HKUDS/nanobot/pull/3858) | chengyongru | 代码结构 | **`ContextBuilder.build_user_content()` 公共化**：合并 `_build_user_content` + `_build_runtime_context`，为外部调用提供统一入口 |
| [#3860](https://github.com/HKUDS/nanobot/pull/3860) | chengyongru | 文档更新 | **CLAUDE.md 同步**：补全 WeCom/DingTalk/Email/MoChat/MS Teams 等 5 个缺失渠道，新增 Bedrock/Codex/Responses API 等 4 个提供商 |
| [#3853](https://github.com/HKUDS/nanobot/pull/3853) | Endeavour-Yuan | 安全修复 | **ExecTool URL 参数误拦截**：`format` 作为 URL query param（如 `?format=json`）不再触发命令阻断 |
| [#3516](https://github.com/HKUDS/nanobot/pull/3516) | Zozi96 | 功能关闭 | 过期会话自动清理（因设计方向调整关闭） |
| [#3461](https://github.com/HKUDS/nanobot/pull/3461) | chengyongru | 功能关闭 | 多 Agent 邮箱通道插件（因架构演进关闭） |
| [#3223](https://github.com/HKUDS/nanobot/pull/3223) | MuataSr | 功能关闭 | spawn_status/spawn_cancel 工具（已整合至主线） |

**整体推进评估**：Agent 核心架构完成"目标持久化→上下文效率→超时可靠性"的闭环加固；Provider 层解决网关穿透难题；代码库进入主动重构期，为 v0.3.x 的插件生态铺路。

---

## 4. 社区热点

### 讨论最活跃的 Issue

| 排名 | Issue | 评论数 | 热度分析 |
|:---|:---|:---|:---|
| 🔥 | [#3790](https://github.com/HKUDS/nanobot/issues/3790) WebUI 会话打印内容显示错乱 | **12 评论** | **前端渲染引擎回归问题**。5.13 源码版本后，WebUI 会话内容打印后布局错乱，需手动刷新恢复。用户 kxsk-git 持续跟进，但尚未有维护者认领修复。诉求：前端 SSR/流式渲染的稳定性保障 |
| 2 | [#2172](https://github.com/HKUDS/nanobot/issues/2172) 支持密钥引用替代明文存储 | 5 评论 | **安全合规刚需**。用户明确要求支持 `file`/`exec` 模式读取密钥（如 1Password 集成），今日已由 olgagaga 提交文档增强 PR #3866 跟进，但核心实现 PR 尚未出现 |

**背后诉求洞察**：
- **企业用户入场信号**：密钥管理、多实例编排（PR #3854 的 peer roster）、合规审计需求密集出现
- **前端技术债暴露**：WebUI 作为用户触点，其稳定性滞后于后端 Agent 能力的快速迭代

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 状态 | 详情 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#3863](https://github.com/HKUDS/nanobot/issues/3863) 微信不能 Login | **OPEN** | 微信扫码提示"版本过低"，已更新至最新微信客户端。影响核心 IM 渠道可用性 | ❌ 无 |
| 🔴 **高** | [#3857](https://github.com/HKUDS/nanobot/issues/3857) bootstrap failed: HTTP 500 | **OPEN** | Gateway 运行正常但前端无法访问，500 错误阻断首次体验 | ❌ 无（Docker 修复 PR #3870 可能相关） |
| 🟡 **中** | [#3790](https://github.com/HKUDS/nanobot/issues/3790) WebUI 打印内容错乱 | **OPEN** | 5.13 版本回归，需刷新恢复，影响长会话可读性 | ❌ 无 |
| 🟡 **中** | [#3845](https://github.com/HKUDS/nanobot/issues/3845) MiMo thinking 网关控制失效 | **CLOSED** | OpenRouter 路由下 `reasoning_effort: "none"` 不生效 | ✅ [#3851](https://github.com/HKUDS/nanobot/pull/3851) 已合并，[#3867](https://github.com/HKUDS/nanobot/pull/3867) 跟进 OpenRouter `reasoning.effort` 注入 |
| 🟢 **低** | [#3849](https://github.com/HKUDS/nanobot/issues/3849) CONTRIBUTING.md ruff format 指令产生无关 diff | **CLOSED** | 文档与代码库格式状态不一致，影响新贡献者体验 | ✅ 文档已更新 |

**风险评估**：微信登录与 bootstrap 500 错误构成**新用户转化漏斗的双重阻断**，建议优先响应。Docker 构建修复 PR #3870 可能缓解部署场景下的 bootstrap 问题。

---

## 6. 功能请求与路线图信号

| 需求来源 | 内容 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#3846](https://github.com/HKUDS/nanobot/issues/3846) 多轮对话中保持 skill content | **高** | 与 v0.2.0 的 goal 持久化架构方向一致，当前 `read_file` 重复读取模式确为性能瓶颈 |
| [#3854](https://github.com/HKUDS/nanobot/pull/3854) peer roster 发现机制 | **高** | 已提交 PR，HF Spaces 多容器编排场景明确，设计为可选注入，无侵入性 |
| [#3852](https://github.com/HKUDS/nanobot/pull/3852) Signal 渠道支持 | **中** | 完整实现（DM/群聊/附件/打字指示器），但需 signal-cli 外部依赖，维护成本待评估 |
| [#3865](https://github.com/HKUDS/nanobot/pull/3865) BM25-lite skill router | **中-高** | 系统 prompt 降 60% 的量化收益显著，但需评估与现有向量检索的互补/替代关系 |
| [#3728](https://github.com/HKUDS/nanobot/pull/3728) LoopDetectHook / ReflectRetryHook | **中** | Agent 自校正能力为长期方向，但设计需与现有迭代限制机制协调 |
| [#2172](https://github.com/HKUDS/nanobot/issues/2172) 密钥引用机制 | **高** | 安全基线需求，文档 PR #3866 已铺垫，核心实现预计 v0.2.x 补丁或 v0.3.0 |

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 | 情绪 |
|:---|:---|:---|
| **"微信版本过低"阻断 IM 工作流** | [#3863](https://github.com/HKUDS/nanobot/issues/3863) KennethYCK | 😤 挫败 — 核心渠道突然失效，更新客户端无效 |
| **WebUI 打印后需手动刷新** | [#3790](https://github.com/HKUDS/nanobot/issues/3790) kxsk-git | 😤 反复困扰 — 12 条评论持续追踪，未获响应 |
| **Docker 构建失败阻断部署** | [#3870](https://github.com/HKUDS/nanobot/pull/3870) ariedov | 😰 阻塞 — "hatch_build.py not found" 单点故障 |

### 积极信号

| 场景 | 来源 | 情绪 |
|:---|:---|:---|
| **v0.2.0 goal 持久化获认可** | Release notes | 🎉 社区庆祝 — "The agent learned to hold a goal" |
| **安全机制主动改进** | [#2172](https://github.com/HKUDS/nanobot/issues/2172) → [#3866](https://github.com/HKUDS/nanobot/pull/3866) | 👍 协作 — 用户提需求→维护者快速文档跟进 |

### 深层洞察

> **"前端稳定性"成为能力外溢的瓶颈**：Agent 后端能力（goal、skill、provider）快速迭代，但 WebUI 渲染、渠道适配（微信）的维护带宽不足，形成"后端强、前端弱"的体验断层。

---

## 8. 待处理积压

| 项目 | 创建时间 | 最后更新 | 风险说明 |
|:---|:---|:---|:---|
| [#3790](https://github.com/HKUDS/nanobot/issues/3790) WebUI 打印错乱 | 2026-05-14 | 2026-05-16 | **3 天 12 评论无维护者响应**，前端回归问题持续影响用户体验 |
| [#3728](https://github.com/HKUDS/nanobot/pull/3728) Agent 自校正 Hook | 2026-05-10 | 2026-05-16 | **6 天未合并**，设计评审可能停滞，与 v0.2.x 的 goal 架构存在整合空间 |
| [#3863](https://github.com/HKUDS/nanobot/issues/3863) 微信登录失效 | 2026-05-16 | 2026-05-16 | **0 评论**，核心 IM 渠道故障，需确认是微信协议变更还是 nanobot 适配层问题 |
| [#3857](https://github.com/HKUDS/nanobot/issues/3857) bootstrap HTTP 500 | 2026-05-16 | 2026-05-16 | **0 评论**，新用户首次体验阻断，可能与 Docker/网关配置相关 |

**维护者行动建议**：
1. 🔴 优先响应 [#3863](https://github.com/HKUDS/nanobot/issues/3863) + [#3857](https://github.com/HKUDS/nanobot/issues/3857)，避免新用户流失
2. 🟡 指派前端负责人跟进 [#3790](https://github.com/HKUDS/nanobot/issues/3790)，5.13 版本变更范围需回溯
3. 🟢 评审 [#3728](https://github.com/HKUDS/nanobot/pull/3728) 与 goal 架构的整合可行性，避免设计漂移

---

*日报生成时间：2026-05-17 | 数据来源：HKUDS/nanobot GitHub 公开活动流*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-05-17

## 1. 今日速览

Hermes Agent 在 v0.14.0 发布后的首个完整日迎来极高社区活跃度：**50 条 Issues 更新**（44 条新开/活跃，6 条关闭）与 **50 条 PR 更新**（21 条待合并，29 条已合并/关闭），形成发布后的典型"反馈洪峰"。核心团队（以 teknium1 为首）响应迅速，单日合并 9 个修复 PR，重点扑灭 v0.14.0 引入的 Codex 429 回退失效、Docker 启动失败、配置迁移丢数据等 P1 级回归问题。社区讨论深度显著，"自改进 Agent 的溯源收据"等前沿话题获 11 条评论，显示项目正从工具型 CLI 向可治理的自主 Agent 平台演进。

---

## 2. 版本发布

### [v0.14.0 "The Foundation Release"](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.5.16) | 2026-05-16

| 指标 | 数据 |
|:---|:---|
| 周期 | v0.13.0 → v0.14.0 |
| Commits | 808 |
| 合并 PRs | 633 |
| 变更文件 | 1,393 |
| 代码行变化 | +165,061 / -未公开 |
| 关闭 Issues | 545（含 P0×12, P1×50） |
| 社区贡献者 | 215 人 |

**核心定位**：首个支持 Hermes **自我安装与运行**的版本——Agent 可自主完成环境搭建、依赖管理与持续运行，标志着从"被调用的工具"向"自维持系统"的关键跃迁。

**迁移注意事项**（基于首日反馈）：
- ⚠️ `hermes update` 可能静默剥离 `~/.hermes/.env` 中的自定义环境变量（[Issue #26804](https://github.com/NousResearch/hermes-agent/issues/26804)）——**升级前务必备份 `.env`**
- ⚠️ Docker 镜像 `--user` 参数导致 Telegram bot 启动失败（[Issue #27100](https://github.com/NousResearch/hermes-agent/issues/27100)）——暂无热修复，建议移除 `--user` 或等待补丁
- ⚠️ 全量测试套件在 main 分支不可用（[Issue #27004](https://github.com/NousResearch/hermes-agent/issues/27004)）——开发者需谨慎依赖 CI 状态

---

## 3. 项目进展

### 今日已合并/关闭的关键 PR（9 项）

| PR | 作者 | 核心改进 | 关联 Issue |
|:---|:---|:---|:---|
| [#27185](https://github.com/NousResearch/hermes-agent/pull/27185) | teknium1 | **修复 Codex 429 `usage_limit_reached` 回退失效**——交互式 CLI 现与 cron 作业行为一致，重置 `_fallback_index` 时机修正 | #20465, #20793 |
| [#27184](https://github.com/NousResearch/hermes-agent/pull/27184) | teknium1 | **Grok 4.3/4.20 错误透传**——SSE `error` 帧 surfaced 至用户，替代裸 `RuntimeError` 三重重试 | - |
| [#27181](https://github.com/NousResearch/hermes-agent/pull/27181) | cat-thats-fat | **Codex 辅助流读取容错**——`Bad file descriptor` 时降级非流式调用，保留压缩路径 | - |
| [#27189](https://github.com/NousResearch/hermes-agent/pull/27189) | teknium1 | **上下文压缩后剥离历史媒体**——大图片粘贴会话不再在压缩后 wedge（从 Kilo-Org/kilocode#9434 移植） | #19951 |
| [#27188](https://github.com/NousResearch/hermes-agent/pull/27188) | teknium1 | **新增 `hermes send` CLI 子命令**——管道脚本输出至任意已配置消息平台，零新增平台代码 | #19631 |
| [#27187](https://github.com/NousResearch/hermes-agent/pull/27187) | teknium1 | **插件发现修复**——46 个按类别命名空间的插件（如 `observability/langfuse`）现可通过 `hermes plugins list` 发现 | - |
| [#27130](https://github.com/NousResearch/hermes-agent/pull/27130) | zccyman | **ACP `/model` 命令解析 `--provider`/`--global` 标志**——Scarf/Zed 等客户端不再静默忽略标志 | #27119 |
| [#26362](https://github.com/NousResearch/hermes-agent/pull/26362) | Jesse-Rogers-0852 | **持久化 JSON 工具结果摘要**——超大负载省略原始/media/base64 数据，保留句柄与状态字段 | - |
| [#27161](https://github.com/NousResearch/hermes-agent/pull/27161) | guillaumemeyer | 插件列表子类别发现修复（与 #27187 重复领域，独立实现） | - |

**整体推进评估**：v0.14.0 的"发布日稳定性债务"正在被快速清偿。Codex 回退链、Grok 错误处理、媒体压缩三大核心路径的修复直接提升生产可靠性；`hermes send` 和插件发现修复扩展了集成生态。但测试套件崩溃（#27004）和 `.env` 迁移问题（#26804）表明发布流程仍有质量缺口。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 核心诉求 |
|:---|:---|:---|:---|
| 🥇 | [#11692](https://github.com/NousResearch/hermes-agent/issues/11692) Receipts for self-improving agents: proving which skill version produced which output | **11 条** | **可治理的自主 Agent 溯源**——Tom Farley 提出 Hermes 自我修改属性带来的出处证明问题，要求技能版本-输出-时间的密码学或日志学绑定，是 AI 安全与审计的前沿议题 |
| 🥈 | [#21574](https://github.com/NousResearch/hermes-agent/issues/21574) RFC: Per-user agent isolation and identity-based permission system | **6 条** | **多租户安全**——作者因女友通过 Telegram gateway 成功 prompt injection 冒充自己而提出，兼具安全漏洞报告与架构 RFC 双重性质 |
| 🥉 | [#20465](https://github.com/NousResearch/hermes-agent/issues/20465) [Bug] Interactive CLI session does not auto-fallback on Codex 429 | **4 条** | **生产可靠性**——cron 与交互式会话行为不一致，已修复（#27185） |

**诉求分析**：社区正从"功能可用"向"企业可部署"演进——隔离、审计、权限、溯源等治理需求涌现，与 v0.14.0 "Foundation" 定位形成呼应，但实现复杂度将显著增加架构负担。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 优先级 | Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|:---|
| **P1** | [#5563](https://github.com/NousResearch/hermes-agent/issues/5563) Memory persistence, token waste, state.db corruption, environment hallucination | 🔴 开放 | 生产重度使用报告：记忆持久化、会话回放 token 浪费、state.db 损坏、环境幻觉——系统性可靠性危机 | 无 |
| **P1** | [#26804](https://github.com/NousResearch/hermes-agent/issues/26804) `.env` File Silently Stripped During `hermes update` | 🔴 开放 | 配置迁移静默删除用户自定义环境变量，数据丢失风险 | 无 |
| **P1** | [#27004](https://github.com/NousResearch/hermes-agent/issues/27004) Full test suite is broken on main | 🔴 开放 | 全量测试套件级联失败+600s 超时，main 分支质量门失效 | 无 |
| **P1** | [#27033](https://github.com/NousResearch/hermes-agent/issues/27033) Tool Result Contamination Causes Persistent HTTP 400 Error Loop | 🔴 开放 | 工具错误结果写入会话消息并持久化，导致循环 400 | 无 |
| **P1** | [#27100](https://github.com/NousResearch/hermes-agent/issues/27100) v0.14.0 Docker: Telegram bot fails on launch with `--user` | 🔴 开放 | Docker 安全最佳实践（非 root 运行）与启动兼容性冲突 | 无 |
| **P1** | [#27166](https://github.com/NousResearch/hermes-agent/issues/27166) Telegram DM topic response routed to All Messages after session split | 🔴 开放 | 上下文压缩触发会话分裂后消息路由错误 | 无 |
| **P1** | [#27012](https://github.com/NousResearch/hermes-agent/issues/27012) `send_message` fails to deliver to Telegram forum topics | 🔴 开放 | Telegram forum topic 的消息投递不可靠 | 无 |
| **P1** | [#25585](https://github.com/NousResearch/hermes-agent/issues/25585) failed summaries should not discard conversation context | 🟡 开放 | 压缩失败时丢弃对话上下文，破坏性压缩 | 无 |
| **P2** | [#24443](https://github.com/NousResearch/hermes-agent/issues/24443) MiMo reasoning models fail: `reasoning_content` not preserved | 🟡 开放 | 小米 MiMo 推理模型多轮对话需回传 reasoning_content | 无 |
| **P2** | [#27038](https://github.com/NousResearch/hermes-agent/issues/27038) Codex Responses API rejects replayed assistant message with long `id` | 🟡 开放 | 会话恢复时长 id 字段导致 API 拒绝 | 无 |

**已修复**：
- ✅ Codex 429 回退失效 → [#27185](https://github.com/NousResearch/hermes-agent/pull/27185)
- ✅ Gateway `/v1/chat/completions` 绕过 image_routing → [#27020](https://github.com/NousResearch/hermes-agent/issues/27020)（已关闭）
- ✅ `hermes update` Node.js 依赖卡死 → [#18840](https://github.com/NousResearch/hermes-agent/issues/18840)（已关闭，Camofox postinstall 问题）

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#27155](https://github.com/NousResearch/hermes-agent/pull/27155) **DAG 上下文引擎（opt-in beta）** | 架构重构 | ⭐⭐⭐⭐⭐ 高 | 已提交 PR，含完整实现（store/assembler/compactor/engine/expansion/reconciliation），CLI/gateway 状态报告，projection-only 安全模式 |
| [#27183](https://github.com/NousResearch/hermes-agent/pull/27183) **Per-user `USER.md` isolation in MemoryStore** | 隐私/多租户 | ⭐⭐⭐⭐⭐ 高 | 已提交 PR，关闭 #27182，向后兼容（unset 时回退全局），直接回应 #21574/#11430 的隔离诉求 |
| [#27174](https://github.com/NousResearch/hermes-agent/pull/27174) **Live TUI session switcher** | UX 增强 | ⭐⭐⭐⭐☆ 中高 | Ink 实时会话切换，RPC 支持不关闭兄弟会话，TUI 体验显著升级 |
| [#27177](https://github.com/NousResearch/hermes-agent/pull/27177) **Smart `busy_input_mode` with LLM intent routing** | 交互智能 | ⭐⭐⭐⭐☆ 中高 | 自动分类 interrupt/queue/steer/ignore，解决 `/busy` 手动切换痛点 |
| [#11692](https://github.com/NousResearch/hermes-agent/issues/11692) Receipts for self-improving agents | 治理/安全 | ⭐⭐⭐☆☆ 中 | 前沿但复杂，需密码学基础设施，可能进入长期路线图而非近期 |
| [#13484](https://github.com/NousResearch/hermes-agent/issues/13484) Native Google Cloud Vertex AI provider | 云集成 | ⭐⭐⭐⭐☆ 中高 | 4 👍，OAuth 服务账户认证缺失是明确 gap，社区需求明确 |
| [#27117](https://github.com/NousResearch/hermes-agent/issues/27117) Native vision tool-result for Qwen | 模型支持 | ⭐⭐⭐☆☆ 中 | Qwen 视觉模型在 `computer_use`/`vision_analyze` 中的原生支持，依赖模型生态扩张 |

---

## 7. 用户反馈摘要

### 🔴 痛点

| 场景 | 来源 Issue | 情绪强度 |
|:---|:---|:---|
| **"女友 prompt injection 成功冒充我"** — Telegram gateway 无用户隔离，亲密关系即安全边界 | [#21574](https://github.com/NousResearch/hermes-agent/issues/21574) | 😱 极高 |
| **升级后配置全丢** — `.env` 被静默清空，Telegram/DeepSeek/浏览器设置全部重建 | [#26804](https://github.com/NousResearch/hermes-agent/issues/26804) | 😠 高 |
| **生产环境 state.db 损坏** — 每日使用的开发者遭遇记忆腐败、环境幻觉、token 账单暴涨 | [#5563](https://github.com/NousResearch/hermes-agent/issues/5563) | 😤 高（但先扬后抑）|
| **Docker 安全与功能二选一** — 非 root 运行即无法启动 Telegram | [#27100](https://github.com/NousResearch/hermes-agent/issues/27100) | 😒 中高 |
| **模型切换行为剧变** — 同一任务不同模型产出冗余技能版本，结果不一致 | [#27103](https://github.com/NousResearch/hermes-agent/issues/27103) | 😕 中 |

### 🟢 满意点

> *"Hermes is an extraordinary piece of work... the most capable CLI AI agent I've used"* — [#5563](https://github.com/NousResearch/hermes-agent/issues/5563) 作者 JuanDragin，重度生产用户

> *"I run it daily for production software development"* — 同上，技能系统、持久记忆、会话搜索、delegate_task 子代理、gateway 架构获明确赞誉

### 🟡 期望落差

- **"Foundation Release" 的自我安装运行**：用户期待的是"一键自治"，实际遭遇的是配置迁移陷阱、Docker 启动失败、测试套件不可用
- **TUI 弹窗被阻塞**：`/resume`, `/model` 等命令的覆盖层被 composer guard 拦截（[#14907](https://github.com/NousResearch/hermes-agent/issues/14907)），"现代化终端界面"承诺打折扣

---

## 8. 待处理积压

### 需维护者优先关注

| Issue | 天数 | 风险 | 行动建议 |
|:---|:---|:---|:---|
| [#5563](https://github.com/NousResearch/hermes-agent/issues/5563) Memory persistence field report | **41 天** | 🔥 生产用户流失风险 | 指派核心开发者专项跟进，或至少公开修复时间表 |
| [#11692](https://github.com/NousResearch/hermes-agent/issues/11692) Self-improving agent receipts | **30 天** | 架构债务累积 | 标记为 `roadmap` 或 `research`，明确与 v0.15/0.16 的关系 |
| [#11430](https://github.com/NousResearch/hermes-agent/issues/11430) Per-user memory isolation | **30 天** | #21574 重复爆发 | #27183 PR 已提交，建议加速 review |
| [#13484](https://github.com/NousResearch/hermes-agent/issues/13484) Vertex AI native support | **26 天** | 企业云市场 gap | 评估是否接受社区 PR 或需官方认证 |
| [#14907](https://github.com/NousResearch/hermes-agent/issues/14907) TUI slash-command popups | **23 天** | UX 核心路径破损 | TUI 团队专项修复，影响所有 composer 阻塞命令 |

---

**日报生成时间**：2026-05-17  
**数据来源**：NousResearch/hermes-agent GitHub 公开活动  
**健康度评分**：🟡 7/10（高活跃度，快速修复响应，但发布质量控制和测试基础设施需加强）

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-05-17

## 1. 今日速览

PicoClaw 今日保持中等活跃度，社区围绕**渠道生态扩展**与**交互体验优化**两条主线持续发力。微信多账号配置功能经快速迭代后重新提交（PR #2881 关闭，#2883 开启），显示贡献者对核心商务场景的积极响应。Android 端出现新的权限崩溃问题（Issue #2880），而 v0.2.8 版本的网关启动故障（Issue #2742）仍在排查中。 nightly 构建持续发布，但自动化版本尚未覆盖关键 bugfix。整体项目健康度：**良好，需关注稳定性回归**。

---

## 2. 版本发布

### 🔧 Nightly Build: v0.2.8-nightly.20260516.0df050ff
- **发布时间**: 2026-05-16
- **性质**: 自动化构建（⚠️ 可能不稳定）
- **变更范围**: [main 分支自 v0.2.8 以来的全部提交](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)
- **关键提示**: 
  - 此为 CI 自动产出，**非正式版本**，生产环境慎用
  - 当前 v0.2.8 存在已知网关启动问题（Issue #2742），nightly 尚未明确修复
  - 建议等待包含 #2835 等关键修复的稳定补丁版本

> 链接: https://github.com/sipeed/picoclaw/releases/tag/v0.2.8-nightly.20260516.0df050ff

---

## 3. 项目进展

| PR | 状态 | 贡献 | 推进价值 |
|:---|:---|:---|:---|
| [#2881](https://github.com/sipeed/picoclaw/pull/2881) | ❌ 关闭 | 微信多账号配置（首版） | 因代码生成标注与实现完整性问题被废弃，但验证了需求紧迫性 |
| [#2883](https://github.com/sipeed/picoclaw/pull/2883) | 🔄 开启（替代 #2881） | 微信多账号配置（重构版） | **核心商务能力**：动态识别 `weixin_*` 配置键，前端适配多账号管理；明确标注"AI 生成草稿+人工显著修改"，合规性提升 |

**整体迈进**: 微信生态从"单账号受限"向"多账号企业级部署"演进，渠道管理架构更具扩展性。但 #2881 的快速关闭反映社区对 AI 生成代码的审查趋严。

---

## 4. 社区热点

### 🔥 最高讨论热度：Issue #2421 — Add email as native channel
- **链接**: https://github.com/sipeed/picoclaw/issues/2421
- **数据**: 6 条评论，1 👍，创建于 2026-04-08，昨日更新
- **核心诉求**: 
  - **企业/科研场景**的刚性需求：Telegram、Discord 等平台在保守网络环境中不可用
  - **异步工作流**：邮件天然适合非即时、需留痕的 AI 交互场景
  - **渠道平权**：避免聊天平台优先导致的用户排斥
- **信号**: 被标记 `stale` 但持续活跃，说明需求真实且未满足，可能需维护者明确路线图表态

### 📌 次热点：Issue #2742 — gateway starts with no channels in v0.2.8
- **链接**: https://github.com/sipeed/picoclaw/issues/2742
- **数据**: 4 条评论，0 👍，昨日更新
- **核心矛盾**: 配置文件中 `enabled: true` 但网关启动后无可用渠道，涉及配置解析或初始化时序问题

---

## 5. Bug 与稳定性

| 优先级 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#2880](https://github.com/sipeed/picoclaw/issues/2880) | **Android 10 权限崩溃**：`Start Service` 时创建 `Downloads/picoclaw` 目录失败，已授予全部存储权限 | 🆕 今日新建，0 评论 | ❌ 无 |
| 🟡 **中高** | [#2742](https://github.com/sipeed/picoclaw/issues/2742) | **v0.2.8 网关空渠道启动**：Telegram 配置正确但网关未加载任何渠道 | 🔄 15 天未解决 | ❌ 无 |
| 🟢 **低**（已解决） | [#2782](https://github.com/sipeed/picoclaw/issues/2782) | MCP 客户端不支持 Streamable HTTP 传输 | ✅ 昨日关闭 | 隐含于 nightly |

**风险评估**: 
- #2880 影响 **Android 10 + MIUI 12** 用户群，Pocophone F1 为经典机型，可能波及其他旧版 Android 设备
- #2742 若确认为 v0.2.8 回归，建议阻止该版本广泛部署或紧急发布 v0.2.9

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| **Email 原生渠道** | Issue #2421 | ⭐⭐⭐ 中高 | 需求明确、场景刚性、社区长期呼吁；需评估与现有 channel 架构的耦合成本 |
| **微信多账号** | PR #2883 | ⭐⭐⭐⭐⭐ **高** | 已提交实现，企业场景刚需，代码结构清晰（动态 `weixin_*` 识别） |
| **Streamable HTTP for MCP** | Issue #2782 | ✅ 已完成 | 规范对齐，nightly 已包含 |
| **代码块交互优化** | PR #2882 | ⭐⭐⭐⭐ 高 | UI/UX 细节打磨，实现独立（复制/折叠控件），风险低 |

**下一版本（v0.2.9?）预测**: 微信多账号 + 代码块交互优化极可能合并；Email 渠道需维护者决策是否纳入 v0.3.0 里程碑。

---

## 7. 用户反馈摘要

> 从 Issues 评论与描述中提炼的真实声音

| 痛点/场景 | 来源 | 情绪 |
|:---|:---|:---|
| **"我需要教程：如何升级新版本（并删除旧版）"** | Issue #2834 | 😵 困惑 |
| **企业环境只能用邮件，被迫排斥 PicoClaw** | Issue #2421 | 😤 受阻 |
| **配置正确但服务不启动，无有效调试信息** | Issue #2742 | 😠 挫败 |
| **Android 旧设备权限模型适配不良** | Issue #2880 | 😫 崩溃 |
| **AI 生成的 PR 被快速关闭，需重新人工整理** | PR #2881 → #2883 | 😅 尴尬但积极 |

**满意度亮点**: 社区对微信多账号功能的响应速度认可（24 小时内重构提交）。

**系统性问题**: **升级路径文档缺失**（#2834）、**旧 Android 兼容性测试覆盖不足**、**配置验证与错误反馈机制薄弱**（#2742）。

---

## 8. 待处理积压

| 项目 | 年龄 | 风险 | 行动建议 |
|:---|:---|:---|:---|
| Issue #2421 Email 渠道 | **38 天** | 需求持续活跃却被 `stale` 标记，可能流失企业用户 | 维护者明确纳入/拒绝决策，或拆分 MVP 任务 |
| Issue #2834 升级教程 | **7 天** | 新用户 onboarding 摩擦 | 文档优先级提升，可结合 #2883 的多账号配置撰写统一指南 |
| PR #2835 Agent 消息修复 | **7 天** | `stale` 标记，修复消息抑制逻辑 | 审查合并，可能解决 #2742 相关交互问题 |

---

*日报基于 GitHub 公开数据生成，时间窗口：2026-05-16 UTC*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-05-17

> **项目**: [qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw) | **日期**: 2026-05-17 | **数据周期**: 过去24小时

---

## 1. 今日速览

NanoClaw 今日保持**高活跃度**，24小时内产生 **6 条 Issues 更新**（5 新开/活跃、1 关闭）和 **9 条 PR 更新**（7 待合并、2 已合并/关闭）。社区聚焦三大主题：**容器化部署稳定性**（Docker/Podman/Colima 兼容性问题集中爆发）、**核心消息管道可靠性**（send_message 去重逻辑缺陷、数据库崩溃恢复），以及 **WhatsApp/Telegram 渠道功能迭代**。值得注意的是，alexli-77 的 health-monitor 功能形成 PR 链式推进（#2498 → #2505 → #2508），显示模块化架构下功能演进的连贯性。无新版本发布，整体处于功能积累期。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的 PR

| PR | 作者 | 状态 | 贡献说明 |
|:---|:---|:---|:---|
| [#2515](https://github.com/nanocoai/nanoclaw/pull/2515) feat(telegram): add inline keyboard buttons support | mkeizer | **CLOSED** | 为 Telegram 渠道引入内联键盘按钮支持，扩展 MCP `send_message` 工具的交互能力。包含 `InlineButton`/`SendMessageOptions` 类型定义、IPC 管道透传、Grammy 键盘构建。该 PR 被关闭（非合并），可能因设计评审或替代方案。 |
| [#2509](https://github.com/nanocoai/nanoclaw/pull/2509) docs(changelog): align v2.0.63 rollup line with RELEASING.md voice | glifocat | **CLOSED** | 变更日志措辞规范化，遵循发布文档风格指南。文档基础设施的精细化维护信号。 |

### 待合并的关键 PR 进展

| PR | 作者 | 核心推进 |
|:---|:---|:---|
| [#2508](https://github.com/nanocoai/nanoclaw/pull/2508) feat(health-monitor): token status table + sweep all groups every 5 min | alexli-77 | **health-monitor 模块的第三次迭代**：在前两版（#2498 静默失败检测、#2505 OAuth 自动刷新）基础上，增加持久化状态表和全量 agent group 主动巡检，消除"仅告警触发刷新"的盲区。标志着运维可观测性从被动响应转向主动预防。 |
| [#2510](https://github.com/nanocoai/nanoclaw/pull/2510) fix(cli): hydrate receiver inbound.db on approval-path destinations add | glifocat | 修复 CLI 在添加审批路径目标时未初始化 receiver 数据库的缺陷，完善数据一致性保障。 |
| [#2507](https://github.com/nanocoai/nanoclaw/pull/2507) fix(skills): skip skill branches on a different major version | meeech | **v2 兼容性关键修复**：11/12 的 `upstream/skill/*` 分支仍停留在 v1.x，合并会导致 `GroupQueue` 等符号引用失败。通过 `package.json` 版本比对过滤，防止用户误升级至不兼容技能。 |
| [#2497](https://github.com/nanocoai/nanoclaw/pull/2497) Feature/agent network | kky | **新功能技能**：Agent Network 功能，扩展多 agent 协作拓扑。 |

---

## 4. 社区热点

### 最活跃讨论：Podman 支持倡议 [#957](https://github.com/nanocoai/nanoclaw/issues/957)

| 指标 | 数值 |
|:---|:---|
| 状态 | **CLOSED**（2026-05-16 关闭） |
| 评论数 | **8**（全 Issues 最高） |
| 👍 | **6** |
| 作者 | fuyb |

**诉求分析**：该 Issue 创建于 3 月 11 日，历经 2 个多月后关闭，反映社区对 **Docker 替代方案** 的长期关注。用户核心诉求包括：
- macOS/Linux 环境下 Podman 的 rootless 安全优势
- 避免 Docker Desktop 商业许可风险
- 统一开发/生产环境容器运行时

**关闭信号**：Issue 被关闭但未关联合并 PR，可能因维护者认为文档补充已足够，或该需求被其他 Issue/PR 覆盖。建议关注是否实际落地文档更新。

### 其他高关注议题

| Issue/PR | 核心张力 |
|:---|:---|
| [#2506](https://github.com/nanocoai/nanoclaw/issues/2506) send_message 去重静默丢消息 | 60秒窗口内的消息竞争条件，直接影响用户体验的可靠性承诺 |
| [#2515](https://github.com/nanocoai/nanoclaw/pull/2515) Telegram 内联键盘（已关闭） | 交互丰富性与渠道抽象层设计权衡 |

---

## 5. Bug 与稳定性

| 优先级 | Issue | 严重程度 | 状态 | 是否有 Fix PR | 影响范围 |
|:---|:---|:---|:---|:---|:---|
| 🔴 **P0** | [#2506](https://github.com/nanocoai/nanoclaw/issues/2506) send_message dedup silently drops responses | **高** - 消息丢失、客户端超时 | OPEN | ❌ 无 | 核心消息管道：所有使用 `send_message` 的场景，尤其是高频对话 |
| 🔴 **P0** | [#2516](https://github.com/nanocoai/nanoclaw/issues/2516) recover stale outbound.db journal after container SIGKILL | **高** - 数据损坏、持久化失效 | OPEN | ❌ 无 | 容器化部署：SIGKILL/exit 137 场景下的数据库完整性 |
| 🟡 **P1** | [#2513](https://github.com/nanocoai/nanoclaw/issues/2513) Colima + OneCLI CA cert: bind-mount 变空目录 | **中** - HTTPS 全失效 | OPEN | ❌ 无 | macOS + Colima 用户，企业 CA 环境 |
| 🟡 **P1** | [#2512](https://github.com/nanocoai/nanoclaw/issues/2512) OneCLI ↔ postgres 主机名解析失败 | **中** - 安装阻塞 | OPEN | ❌ 无 | Ubuntu 默认安装，Docker 网络 DNS |
| 🟢 **P2** | [#2514](https://github.com/nanocoai/nanoclaw/issues/2514) Setup stuck (needrestart whiptail) | **低** - 交互阻塞 | OPEN | ❌ 无 | Debian/Ubuntu 系统更新后的 TUI 交互 |

### 关键缺陷深度分析

**[#2506](https://github.com/nanocoai/nanoclaw/issues/2506) - 消息去重竞态条件**
- **根因**：`processQuery` 的 poll-loop 将跟进消息推入同一调用，与 60 秒去重窗口重叠
- **风险**：用户感知为"AI 不响应"或"对话中断"，严重损害产品信任
- **紧急度**：需立即分配维护者，建议关联 PR #2515 的 Telegram 按钮功能可能涉及的相同代码路径

**[#2516](https://github.com/nanocoai/nanoclaw/issues/2516) - 容器硬终止后的数据库恢复**
- **根因**：Bun 事务中途被杀 → journal 文件残留 → 只读打开时忽略未完成事务
- **风险**：消息投递状态丢失，可能重复发送或永久丢失
- **关联**：与 #2506 同属"消息可靠性"主题，建议统一纳入"交付保证"专项

---

## 6. 功能请求与路线图信号

| 来源 | 功能方向 | 纳入可能性评估 | 关键依赖 |
|:---|:---|:---|:---|
| [#957](https://github.com/nanocoai/nanoclaw/issues/957) Podman 文档支持 | 容器运行时多元化 | ⭐⭐⭐☆☆ **中** | 维护者容器抽象层设计意愿；已关闭但未解决，可能搁置 |
| PR [#2508](https://github.com/nanocoai/nanoclaw/pull/2508) health-monitor 全量巡检 | 运维可观测性 | ⭐⭐⭐⭐⭐ **极高** | PR 链 #2498→#2505→#2508 已就绪，预计 v2.0.64 或 v2.1.0 |
| PR [#2497](https://github.com/nanocoai/nanoclaw/pull/2497) Agent Network | 多 Agent 协作拓扑 | ⭐⭐⭐⭐☆ **高** | 技能系统（Skill）架构兼容性评审 |
| PR [#2515](https://github.com/nanocoai/nanoclaw/pull/2515) Telegram 内联键盘 | 渠道交互丰富性 | ⭐⭐⭐☆☆ **中** | PR 已关闭，可能重构后重新提交 |

**路线图信号**：health-monitor 的三连 PR 表明项目正从"功能交付"向"生产运维"成熟阶段演进，符合企业级 AI Agent 平台的发展路径。

---

## 7. 用户反馈摘要

### 痛点提炼

| 场景 | 具体表现 | 情绪信号 |
|:---|:---|:---|
| **容器化部署"最后一公里"** | Colima 证书挂载空目录、Ubuntu 默认安装网络不通、needrestart 交互阻塞 | 😤 挫败感集中——"Setup runs far too long" |
| **消息可靠性黑盒** | 消息静默丢失、超时无明确错误、去重逻辑不透明 | 😰 信任危机——"silently drops" |
| **容器运行时锁定** | Docker 依赖在企业环境受限，Podman 支持缺失 | 😕 合规焦虑 |
| **版本迁移摩擦** | v1 技能分支误合并导致符号错误 | 😤 升级恐惧 |

### 满意点

- fuyb 对项目设计的认可："very useful and well designed"
- health-monitor 系列 PR 显示社区对运维能力的主动建设

---

## 8. 待处理积压

> 以下 Issue/PR 需维护者关注，避免长期悬置损害社区信心

| 条目 | 创建时间 | 悬置天数 | 风险说明 |
|:---|:---|:---|:---|
| [#2498](https://github.com/nanocoai/nanoclaw/pull/2498) feat(health-monitor): host-side silent-fail detection | 2026-05-15 | 2 | 作为 PR 链基础，阻塞 #2505、#2508 合并评审 |
| [#2469](https://github.com/nanocoai/nanoclaw/pull/2469) fix(whatsapp): correct recovery guidance for decrypt failures and 401 logout | 2026-05-14 | 3 | WhatsApp 渠道稳定性，用户恢复体验 |
| [#957](https://github.com/nanocoai/nanoclaw/issues/957) Podman 支持 | 2026-03-11 | **67** | 高 👍 社区需求，关闭状态与实际解决状态不明 |

---

## 健康度评估

| 维度 | 评分 | 说明 |
|:---|:---|:---|
| 社区活跃度 | 🟢 高 | 24h 15 条更新，多作者并行贡献 |
| 代码质量 | 🟡 中 | 2 个 P0 Bug 无关联 PR，技能版本过滤机制待完善 |
| 响应及时性 | 🟡 中 | 新 Issue 当日创建，但历史 Issue 关闭逻辑不透明 |
| 架构演进 | 🟢 正向 | health-monitor 模块化、技能版本隔离机制显现设计成熟度 |
| 生产就绪 | 🔴 警示 | 消息丢失、数据库恢复、安装阻塞三类问题集中，建议暂缓大规模推广 |

---

*日报生成基于 GitHub 公开数据，链接均为可直接访问的原始资源。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-05-17

> **项目**: nearai/ironclaw | **日期**: 2026-05-17 | **分析师**: AI 智能体开源项目分析师

---

## 1. 今日速览

IronClaw 今日呈现**高强度开发态势**，过去24小时内 Issues 活跃度极高（14 条新开/活跃，仅 1 条关闭），PR 流水线繁忙（32 条更新，17 条待合并）。核心团队正全力推进 **Reborn 架构的 product-live 工作流落地**——从 composition root、runtime harness 到 capability adapter 的完整工具调用链路，已形成清晰的 PR 堆叠（#3714 → #3715 → #3716）。同时，v0.28.2 的发布相关 PR #3708 已就绪，包含 `ironclaw_common` 的破坏性 API 变更。整体健康度：**开发活跃，技术债务可控，但 E2E 测试稳定性仍需关注**。

---

## 2. 版本发布

**无新版本发布**，但发布流水线已就绪：

| 状态 | PR | 内容 |
|:---|:---|:---|
| 🟡 待合并 | [#3708](https://github.com/nearai/ironclaw/pull/3708) | **chore: release** — 由 `ironclaw-ci[bot]` 自动创建 |

### 预计发布内容（v0.28.2）
- **`ironclaw_common`: 0.4.2 → 0.5.0** ⚠️ **含 API 破坏性变更**
  - `enum_no_repr_variant_discriminant_changed`: 枚举变体判别值变更
- **`ironclaw`: 0.24.0 → 0.28.2**

> **迁移注意**: 依赖 `ironclaw_common` 0.4.x 的外部 crate 需检查枚举匹配逻辑，建议等待正式 release notes 后升级。

---

## 3. 项目进展

### 今日合并/关闭的关键 PR（15 条）

| PR | 作者 | 核心贡献 | 状态 |
|:---|:---|:---|:---|
| [#3710](https://github.com/nearai/ironclaw/pull/3710) | serrrfirat | **product-live planned AgentLoop harness** — 为 Reborn product-live 路径提供可复用的测试 harness，验证计划运行时能通过生产级工作流驱动 | ✅ 已关闭 |
| [#3712](https://github.com/nearai/ironclaw/pull/3712) | serrrfirat | **修复 durable reply 与 result refs 的信任冲突** — 解决循环退出时因 capability `result_refs` 与已验证 durable assistant reply 并存导致的误拒绝 | ✅ 已关闭 |
| [#3688](https://github.com/nearai/ironclaw/pull/3688) | serrrfirat | **ProductAdapter 单清单投影** — 将独立的 TOML 格式替换为 Extension Manifest v2 的 host-API 段投影，简化配置表面 | ✅ 已关闭 |
| [#3709](https://github.com/nearai/ironclaw/pull/3709) | ilblackdragon | **Responses API 端到端文档** — 覆盖 auth、sessions、streaming、externally-provided tools、structured context 及当前限制 | ✅ 已关闭 |
| [#3122](https://github.com/nearai/ironclaw/pull/3122) | ilblackdragon | **Responses API 原生外部工具支持** — 将 prompt-level fence 协议替换为 engine v2 原生工具调用，支持 per-thread `ExternalToolCatalog` | ✅ 已关闭 |
| [#3588](https://github.com/nearai/ironclaw/pull/3588) | serrrfirat | **Gateway 日志下载按钮** — 纯前端实现，从 `/api/logs/events` 导出 JSONL，无后端变更 | ✅ 已关闭 |
| [#3691](https://github.com/nearai/ironclaw/pull/3691) | italic-jinxin | **WebUI service facade 统一** — 整合至 `RebornServicesApi`，补全 thread-ownership 等安全检查 | ✅ 已关闭 |

### 里程碑意义

**Reborn 架构进入"可运行"阶段**：PR #3715/#3716 堆叠首次证明 product-live 组合能驱动**真实 host-runtime capability**（而非 staged IO 或 fake/recording ports），标志着从"计划验证"到"功能实现"的关键跨越。同时，[#3695](https://github.com/nearai/ironclaw/pull/3695) 将 `ironclaw_reborn_composition` 提升为正式 composition root 并交付 live binary，为 [#3036](https://github.com/nearai/ironclaw/issues/3036) Configuration-as-Code 史诗奠定基础。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---|:---|
| **#3692** Reborn: add policy-gated personal identity and heartbeat prompt context | 4 | 在 WS-15 稳定身份文件基础上，扩展**策略管控的个人身份**和**心跳提示上下文**，需定义额外的 prompt-context shape 和运行时规则 | [链接](https://github.com/nearai/ironclaw/issues/3692) |
| **#3036** [EPIC] Configuration-as-Code for IronClaw Reborn | 4 | 运营商要求**声明式配置**替代手编 `.env`/JSON/运行时标志，需 schema、diff、审计追踪、源代码控制 | [链接](https://github.com/nearai/ironclaw/issues/3036) |
| **#3616** Reborn: wire production app/gateway/channel ingress to product live workflow | 4 | 将**生产级入口路径**（非测试组合）切入 Reborn product-live 循环，是 #3616/WS17 的延续 | [链接](https://github.com/nearai/ironclaw/issues/3616) |

### 热点分析

**身份与配置是 Reborn 商业化前的两大拦路虎**。#3692 的"policy-gated"设计暗示团队正考虑**多租户场景下的身份隔离**（与 #3036 的 tenant blueprints 呼应）；而 #3036 作为长期 EPIC，今日被 [#3703](https://github.com/nearai/ironclaw/pull/3703) 主动"futureproof"——说明核心团队已将其纳入下一季度技术规划。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | Fix 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#3701](https://github.com/nearai/ironclaw/issues/3701) | **v0.28.2 macOS 预构建：gateway 永不绑定**，尽管 config + doctor 报告已启用 | ❌ 无 fix PR |
| 🟡 **中** | [#3447](https://github.com/nearai/ironclaw/issues/3447) | **Nightly E2E 持续失败**，Full E2E / E2E (features) job 失败 | ❌ 无 fix PR，已持续 7 天 |
| 🟡 **中** | [#3712](https://github.com/nearai/ironclaw/pull/3712) | ~~Reborn 循环退出时误拒绝含 result_refs 的 durable reply~~ | ✅ **已修复** |
| 🟢 **低** | [#3534](https://github.com/nearai/ironclaw/issues/3534) | ~~创建日志下载调试工具~~ | ✅ **已关闭** |

### 稳定性评估

- **macOS 预构建可靠性存疑**：#3701 影响平台特定用户，可能阻碍 v0.28.2 的推广
- **E2E 测试 regressions 需紧急关注**：Nightly 失败已超一周，可能与 Reborn 大规模重构相关，建议在 [#3702](https://github.com/nearai/ironclaw/issues/3702) 二进制 E2E 测试框架中优先覆盖

---

## 6. 功能请求与路线图信号

### 用户/开发者提出的新需求

| Issue | 类型 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#3692](https://github.com/nearai/ironclaw/issues/3692) Policy-gated identity + heartbeat context | 架构增强 | **高** | PR #3632 已添加 `BeforeInboundPolicy` seam，基础设施就绪 |
| [#3698](https://github.com/nearai/ironclaw/issues/3698) Test/dry-run product-live runtime harness | 测试设施 | **已进行中** | PR #3710-#3716 堆叠直接对应 |
| [#3700](https://github.com/nearai/ironclaw/issues/3700) Route web chat send through product-live workflow | 功能切换 | **中**（Deferred） | 显式标记 deferred，依赖 #3698 验证 |
| [#3699](https://github.com/nearai/ironclaw/issues/3699) Roll product-live to CLI/Telegram/webhooks | 多通道支持 | **低**（Deferred） | 明确排期在 web 验证之后 |
| [#3697](https://github.com/nearai/ironclaw/issues/3697) Project live turn milestones into web AppEvents | 可观测性 | **中**（Deferred） | 需要 SSE/projection model 先就绪 |

### 路线图信号

**Reborn 三阶段推进清晰**：
1. **当前**（5月）：Composition + harness + adapter 基础设施（#3714-#3716）
2. **近期**（6月）：Web 入口切换（#3700）+ milestone 可观测性（#3697）
3. **中期**（Q3）：CLI/Telegram/webhooks 扩展（#3699）+ Configuration-as-Code（#3036）

---

## 7. 用户反馈摘要

### 从 Issues/PR 评论中提炼的真实信号

| 来源 | 痛点/场景 | 情绪 |
|:---|:---|:---|
| #3701 报告者 sergeiest | **macOS 预构建"静默失败"**：配置正确但 gateway 不绑定，缺乏诊断信息 | 😤 沮丧 |
| #3036 讨论 | **配置碎片化**：`.env` + `.system/...` + JSON + 运行时标志混合，无 schema/审计 | 😫 疲惫 |
| #3692 讨论 | **身份上下文扩展性**：WS-15 仅覆盖 stable identity-file，需 policy-gated 动态层 | 🤔 期待 |
| #3588（已合并） | **调试体验**：前端直接下载日志 JSONL，无需后端变更——"终于不用 curl 了" | 😊 满意 |

### 关键洞察

> **"Silent failures are worse than loud crashes"** — macOS gateway 绑定问题暴露了预构建发布流程的测试缺口。建议将平台特定 smoke test 纳入 CI。

---

## 8. 待处理积压

### 需维护者关注的重要事项

| Issue/PR | 年龄 | 风险 | 行动建议 |
|:---|:---|:---|:---|
| [#3447](https://github.com/nearai/ironclaw/issues/3447) Nightly E2E failed | 7 天 | 🔴 **阻塞发布信心** | 指派专人根因分析，可能与 #3702 测试框架重构协同 |
| [#3026](https://github.com/nearai/ironclaw/issues/3026) [P0] Config-driven production composition root | 19 天 | 🟡 Reborn 切换阻塞 | #3695 已部分解决，需更新状态或拆分剩余工作 |
| [#3701](https://github.com/nearai/ironclaw/issues/3701) macOS gateway 绑定失败 | 1 天 | 🟡 平台可靠性 | 需 macOS 环境复现，可能关联 #3708 发布阻断 |
| [#3679](https://github.com/nearai/ironclaw/pull/3679) Universal FS dispatch (XL, +15k/-929 LOC) | 2 天 | 🟡 大规模变更风险 | 61 文件变更，建议加速 review 避免与 Reborn 堆叠冲突 |

### 维护者提醒

> **PR #3679**（ilblackdragon, +15k LOC）与 **PR #3695**/#3703/#3704（serrrfirat, Reborn composition）存在潜在的 `ironclaw_reborn` 公共表面冲突。建议两作者协调合并顺序，或安排联合 review session。

---

*本日报基于 GitHub 公开数据生成，未包含私有讨论或安全敏感信息。如需特定 Issue/PR 的深度分析，请告知。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-05-17

> **项目**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
> **分析日期**: 2026-05-17（基于过去24小时数据）

---

## 1. 今日速览

LobsterAI 今日呈现**高代码活跃度、低社区互动**的典型特征。过去24小时内，项目团队密集推进了 **10 个 PR 的合并/关闭**，主要围绕 **2026.5.15 版本发布集成**（含 Artifacts 预览、IM  onboarding、Cowork/OpenClaw 优化）及 MiMo 模型相关修复，显示产品迭代节奏紧凑。然而，**仅 1 条新增 Issue** 且社区反应平淡（0 👍），12 个待合并 PR 中 8 个为 3 月下旬提交的"stale"状态，反映出外部贡献者 PR 的 review 积压问题显著。无新版本正式发布，但 release 分支已合并至 main。

---

## 2. 版本发布

**无新版本发布。**

> 注：虽然 [PR #1998](https://github.com/netease-youdao/LobsterAI/pull/1998) 已将 `release/2026.5.15` 合并至 main（应用版本 **2026.5.16**），但 GitHub Releases 页面尚未创建正式 release，可能处于灰度或内部验证阶段。

---

## 3. 项目进展

### 🔀 今日合并/关闭的核心 PR（10 条）

| PR | 作者 | 领域 | 关键进展 |
|:---|:---|:---|:---|
| [#1998](https://github.com/netease-youdao/LobsterAI/pull/1998) | liuzhq1986 | 全栈 Release | **版本集成主干**：Artifacts 右侧预览多文件支持、Keyfrom/渠道构建归因、IM 新用户引导、Cowork/OpenClaw 相关变更 |
| [#1999](https://github.com/netease-youdao/LobsterAI/pull/1999) | fisherdaddy | docs | **MiMo 模型多轮会话修复**：`reasoning_content` 在多轮会话中的返回问题 |
| [#1997](https://github.com/netease-youdao/LobsterAI/pull/1997) | fisherdaddy | renderer | 更新各 provider 默认模型配置 |
| [#1996](https://github.com/netease-youdao/LobsterAI/pull/1996) | fisherdaddy | renderer, cowork | Dream UI 优化（迭代一） |
| [#1995](https://github.com/netease-youdao/LobsterAI/pull/1995) | fisherdaddy | renderer, main, openclaw, cowork | Dream UI 优化（迭代二，范围更广） |
| [#1994](https://github.com/netease-youdao/LobsterAI/pull/1994) | fisherdaddy | renderer, docs, main, openclaw, cowork | **MiMo 模型 reasoning content 修复**（核心逻辑） |
| [#1992](https://github.com/netease-youdao/LobsterAI/pull/1992) | fisherdaddy | renderer, docs | 修复模型列表中默认模型选项存在的 bug |
| [#813](https://github.com/netease-youdao/LobsterAI/pull/813) | swuzjb | config | 小米渠道新增 **MiMo V2 Pro** 和 **MiMo V2 Omni** 模型支持 |

**整体评估**：今日进展以 **MiMo 模型生态完善** 和 **2026.5.15 版本发布收尾** 为双主线，fisherdaddy 为绝对主力贡献者（6 PR）。Artifacts 多文件预览、IM onboarding 等用户体验改进进入主线，但 release 未正式打 tag，建议关注后续发布动作。

---

## 4. 社区热点

### 💬 唯一活跃 Issue：AI 引擎连接稳定性问题

| 项目 | 详情 |
|:---|:---|
| **[#1993](https://github.com/netease-youdao/LobsterAI/issues/1993)** | AI engine connection lost issue |
| 作者 | Shun-Calvin |
| 状态 | 🟡 OPEN，1 条评论，0 👍 |

**核心诉求分析**：
- **痛点**：桌面端应用持续报错 "AI engine connection lost"，而 **IM Bot 模式连接稳定** —— 表明非服务端全局故障，而是**桌面端特定连接链路问题**（可能涉及本地 AI 引擎进程、Electron 主进程通信、或桌面端特有的网络代理配置）
- **用户画像**：直接使用桌面应用的重度用户，非 IM 集成场景
- **潜在影响**：若桌面端连接可靠性劣于 IM Bot，可能动摇核心用户群体对本地 AI 助手定位的信任

> **社区热度偏低警示**：该 Issue 0 👍、仅 1 评论，但问题描述清晰且影响基础可用性，存在"沉默受损用户"风险。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|
| 🔴 **P0-高** | 桌面端 AI 引擎连接持续丢失（IM Bot 正常） | **无 Fix**，OPEN | ❌ 无 | [#1993](https://github.com/netease-youdao/LobsterAI/issues/1993) |
| 🟡 **P1-中** | MiMo 模型多轮会话 `reasoning_content` 返回异常 | **已修复** | ✅ [#1994](https://github.com/netease-youdao/LobsterAI/pull/1994), [#1999](https://github.com/netease-youdao/LobsterAI/pull/1999) | — |
| 🟡 **P1-中** | 模型列表存在无效默认模型选项 | **已修复** | ✅ [#1992](https://github.com/netease-youdao/LobsterAI/pull/1992) | — |
| 🟢 **P2-低** | Vite 依赖版本滞后（5.4.21 → 8.0.13） | 待合并 | ⏳ [#1766](https://github.com/netease-youdao/LobsterAI/pull/1766)（dependabot） | — |

**关键风险**：[#1993](https://github.com/netease-youdao/LobsterAI/issues/1993) 是今日唯一未解决的稳定性问题，且**无关联 Fix PR**。考虑到 2026.5.15 版本刚集成，需排查是否为 release 引入的桌面端回归。

---

## 6. 功能请求与路线图信号

### 从 stale PR 推断潜在路线图方向

以下 **8 个 3 月下旬提交的 OPEN PR** 今日被标记为 stale 但仍有价值，反映社区/内部已识别需求：

| 方向 | PR | 信号强度 | 说明 |
|:---|:---|:---|:---|
| **Cowork 会话导出** | [#789](https://github.com/netease-youdao/LobsterAI/pull/789) | ⭐⭐⭐⭐⭐ | Markdown/PDF 导出能力，用户留存与合规刚需 |
| **安全加固** | [#790](https://github.com/netease-youdao/LobsterAI/pull/790), [#794](https://github.com/netease-youdao/LobsterAI/pull/794) | ⭐⭐⭐⭐⭐ | 硬编码密码移除、URL scheme 白名单，安全合规基线 |
| **OpenClaw 第三方 API 兼容** | [#798](https://github.com/netease-youdao/LobsterAI/pull/798) | ⭐⭐⭐⭐☆ | 阿里百炼/火山引擎/智谱 Anthropic 兼容模式认证修复 |
| **Cowork 交互稳定性** | [#799](https://github.com/netease-youdao/LobsterAI/pull/799), [#803](https://github.com/netease-youdao/LobsterAI/pull/803), [#804](https://github.com/netease-youdao/LobsterAI/pull/804), [#805](https://github.com/netease-youdao/LobsterAI/pull/805) | ⭐⭐⭐⭐☆ | 流状态同步、重复提交保护、删除会话资源清理 |
| **Skills 治理** | [#793](https://github.com/netease-youdao/LobsterAI/pull/793), [#801](https://github.com/netease-youdao/LobsterAI/pull/801) | ⭐⭐⭐⭐☆ | 禁用开关生效、网关热重启机制 |

**纳入下一版本概率判断**：安全类 PR（#790, #794）和 API 兼容修复（#798）最可能优先纳入；Cowork 导出（#789）功能完整度高，但需 review 资源投入。

---

## 7. 用户反馈摘要

### 从 [#1993](https://github.com/netease-youdao/LobsterAI/issues/1993) 提炼的真实痛点

| 维度 | 内容 |
|:---|:---|
| **使用场景** | 桌面端直接作为 AI 助手日常使用（非 IM 集成场景） |
| **核心不满** | "always show AI engine connection lost" —— **持续性、非偶发** |
| **对比预期** | IM Bot 模式稳定 → 期望桌面端达到同等可靠性 |
| **已尝试自助** | 重启应用（官方建议无效） |
| **隐含诉求** | 桌面端需要更透明的连接诊断或降级机制（如自动切换至云端引擎） |

> **产品信号**：桌面端"本地 AI 引擎"架构的可靠性承诺与实际体验存在落差，用户可能更接受"云端优先+本地增强"的混合模式。

---

## 8. 待处理积压

### ⚠️ 需维护者紧急关注的 stale PR（>50 天无更新）

| PR | 类型 | 积压天数 | 风险/价值 | 建议动作 |
|:---|:---|:---|:---|:---|
| [#790](https://github.com/netease-youdao/LobsterAI/pull/790) | 安全修复 | ~53 天 | **硬编码密码泄露风险**，任何人可读源码解密导出 API 密钥 | 🔴 **立即 review 或 cherry-pick** |
| [#794](https://github.com/netease-youdao/LobsterAI/pull/794) | 安全修复 | ~53 天 | `shell.openExternal` URL scheme 未校验，存在 RCE/钓鱼风险 | 🔴 **立即 review 或 cherry-pick** |
| [#798](https://github.com/netease-youdao/LobsterAI/pull/798) | API 兼容 | ~53 天 | 阿里百炼等主流中文模型 401 错误，阻断用户使用 | 🟡 **高优先级 review** |
| [#789](https://github.com/netease-youdao/LobsterAI/pull/789) | 功能特性 | ~53 天 | 会话导出完整实现，代码量较大 | 🟡 安排专项 review |
| [#793](https://github.com/netease-youdao/LobsterAI/pull/793) / [#801](https://github.com/netease-youdao/LobsterAI/pull/801) | Bug 修复 | ~53 天 | Skills 禁用开关不生效（P0 级功能缺陷） | 🟡 合并 #793（更完整）或 #801 |

**根因分析**：3 月 25 日集中提交的 PR 批量 stale，可能与**当时版本冻结期**或**review 人力瓶颈**相关。建议维护者批量 triage，至少优先处理安全类 PR。

---

## 附录：数据仪表盘

| 指标 | 数值 | 健康度 |
|:---|:---|:---|
| 24h Issues 更新 | 1（新开 1 / 关闭 0） | 🟡 偏低 |
| 24h PR 更新 | 22（待合并 12 / 已处理 10） | 🟢 活跃 |
| 24h 版本发布 | 0 | ⚪ 无 |
| Stale PR 占比 | 8/12 = **66.7%** | 🔴 **高风险** |
| 社区反应（👍）| 0 | 🔴 冷淡 |
| 核心贡献者集中度 | fisherdaddy 6/10 关闭 PR | 🟡 单点依赖 |

---

*本日报基于 GitHub 公开数据生成，仅供参考。如需深度分析特定 PR 代码变更，可进一步展开。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-05-17

> **项目**: [moltis-org/moltis](https://github.com/moltis-org/moltis)  
> **分析日期**: 2026-05-17  
> **数据窗口**: 过去 24 小时

---

## 1. 今日速览

Moltis 今日保持**中等活跃度**，核心开发围绕**远程访问基础设施**与**OpenAI Codex 推理能力**两条技术主线推进。社区新提出一项关于 `spawn_agent` 阻塞机制的关键架构需求，反映出多智能体编排场景下的性能痛点。3 个 PR 中有 2 个处于待合并状态，1 个技能类 PR 已关闭，整体迭代节奏稳健但需关注代码审查积压。无新版本发布，项目处于功能蓄力期。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### ✅ 已关闭 PR

| PR | 作者 | 说明 |
|:---|:---|:---|
| [#1003 feat(skills): add agent system builder skill](https://github.com/moltis-org/moltis/pull/1003) | [kyungw00k](https://github.com/kyungw00k) | 新增内置 `build-agent-systems` 技能，封装多用户、多通道、分布式智能体系统的设计模式与蓝图模板。该 PR 将 Moltis 自身的架构经验沉淀为可复用的技能资产，降低用户构建复杂多智能体系统的认知门槛。 |

**进展评估**: 技能生态扩展 +1，但 PR 生命周期仅 1 天即关闭，需确认是合并还是弃用（无明确合并提交信息）。

---

### 🔜 待合并 PR（2 项）

| PR | 作者 | 技术价值 | 风险点 |
|:---|:---|:---|:---|
| [#1002 feat(remote-access): add NetBird and Cloudflare Tunnel support](https://github.com/moltis-org/moltis/pull/1002) | [penso](https://github.com/penso) | **基础设施重大扩展**：引入 NetBird 私有网格网络（含环回保留 TCP 转发器）与 Cloudflare Tunnel 全栈支持（含 WebAuthn 主机名更新、令牌处理）。使 Moltis 智能体具备企业级安全远程访问能力，突破局域网部署限制。 | 配置矩阵复杂度高，需审查 `cloudflared` 运行时控制器稳定性；NetBird 状态解析逻辑可能引入平台依赖。 |
| [#1005 feat(openai-codex): add reasoning effort support](https://github.com/moltis-org/moltis/pull/1005) | [PeterDaveHello](https://github.com/PeterDaveHello) | **模型能力对齐**：完整透传 `reasoning_effort` 参数至 Codex 克隆实例，支持 GPT-5 Codex 在 Responses API 中的推理强度控制；向后兼容保留加密推理 blob。直接对接 OpenAI 最新推理模型特性。 | 参数透传链路需验证克隆实例状态同步；加密内容处理需审计合规性。 |

**整体迈进**: 远程访问基础设施 + OpenAI 前沿模型适配双轨并行，项目从"本地智能体框架"向"分布式企业级智能体平台"演进信号明确。

---

## 4. 社区热点

### 最高关注度议题

| 类型 | 编号 | 标题 | 作者 | 热度分析 |
|:---|:---|:---|:---|:---|
| Issue | [#1004](https://github.com/moltis-org/moltis/issues/1004) | [Feature]: Non-blocking `spawn_agent` | [dmitriikeler](https://github.com/dmitriikeler) | **架构级痛点暴露**：当前 `spawn_agent` 阻塞父智能体 LLM 轮次的设计，在长时间子智能体运行场景（如深度研究、代码生成、外部工具链调用）下导致父会话"假死"。需求提出异步/非阻塞模式，使父智能体可继续响应或管理多个子智能体。 |

**背后诉求**: 
- **规模化瓶颈**: 用户正在构建需要并行子智能体的复杂工作流，同步架构成为硬性约束
- **用户体验**: 长时任务期间的 UI/会话无响应直接影响生产可用性
- **架构债务**: 该 Issue 编号达 #1004，暗示此类核心 API 行为变更需重大版本协调

> 🔗 关联影响：若 [#1002](https://github.com/moltis-org/moltis/pull/1002) 的远程访问合并，子智能体跨网络执行延迟将放大阻塞问题，非阻塞需求紧迫性上升。

---

## 5. Bug 与稳定性

**今日无新报告 Bug、崩溃或回归问题。**

| 严重程度 | 数量 | 说明 |
|:---|:---|:---|
| 🔴 Critical | 0 | — |
| 🟠 High | 0 | — |
| 🟡 Medium | 0 | — |
| 🟢 Low | 0 | — |

**健康度指标**: 过去 24 小时 Issues 仅 1 条且为功能请求，无稳定性告警，代码质量态势良好。但需关注 [#1002](https://github.com/moltis-org/moltis/pull/1002) 引入的网络栈复杂度可能带来的运行时风险。

---

## 6. 功能请求与路线图信号

| 需求来源 | 功能方向 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#1004](https://github.com/moltis-org/moltis/issues/1004) | 异步 `spawn_agent` / 非阻塞子智能体 | **高** | 架构瓶颈类需求，与项目分布式演进方向一致；编号 #1004 暗示已纳入长期讨论 |
| [#1002](https://github.com/moltis-org/moltis/pull/1002) | 企业远程访问（NetBird + Cloudflare） | **已就绪待合并** | 基础设施 PR 完整度高，预计下一版本核心功能 |
| [#1005](https://github.com/moltis-org/moltis/pull/1005) | OpenAI Codex 推理强度控制 | **已就绪待合并** | 模型适配类 PR 通常快速跟进，保持供应商特性同步 |

**路线图信号**: 
- **近期（vNext）**: 远程访问 + Codex 推理 = 企业部署 + 前沿模型双卖点
- **中期**: 非阻塞架构重构可能触发 v2.0 级别 API 变更，需设计 RFC

---

## 7. 用户反馈摘要

> ⚠️ 今日数据无 Issue/PR 评论内容，以下为基于摘要文本的推断分析：

| 维度 | 观察 |
|:---|:---|
| **痛点** | 子智能体长时间运行时的父会话阻塞（[#1004](https://github.com/moltis-org/moltis/issues/1004)） |
| **使用场景** | 多智能体协作、长周期任务（研究/生成/工具链）、分布式部署 |
| **满意点** | 技能生态扩展（[#1003](https://github.com/moltis-org/moltis/pull/1003) 的 agent system builder）降低系统架构门槛 |
| **不满意/担忧** | 核心 API 的同步设计限制规模化；远程访问方案选择（NetBird vs Cloudflare）的配置复杂性 |

**缺失信号**: 今日 0 评论、0 👍 的数据表明社区互动深度不足，或反映项目尚处早期采用者阶段，需关注用户参与度指标。

---

## 8. 待处理积压

| 项目 | 状态 | 滞留时间 | 提醒 |
|:---|:---|:---|:---|
| [#1002](https://github.com/moltis-org/moltis/pull/1002) | OPEN | 2 天 | **基础设施 PR 体积大**（NetBird + Cloudflare 双栈），需优先分配审查资源，避免与后续网络相关 PR 冲突 |
| [#1005](https://github.com/moltis-org/moltis/pull/1005) | OPEN | 1 天 | 模型适配类 PR 建议快速合并，保持与 OpenAI API 演进同步 |
| [#1004](https://github.com/moltis-org/moltis/issues/1004) | OPEN | 1 天 | 架构级需求，建议维护者回应是否纳入 RFC 流程，设定设计评审时间线 |

---

## 附录：今日数据总览

| 指标 | 数值 |
|:---|:---|
| Issues 更新 | 1（新开 1 / 关闭 0）|
| PRs 更新 | 3（待合并 2 / 已合并或关闭 1）|
| Releases | 0 |
| 评论总数 | 0 |
| 社区反应（👍）| 0 |

---

*本日报基于公开 GitHub 数据生成，未包含私有仓库或讨论区信息。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-05-17

> **数据周期**：2026-05-16 至 2026-05-17 | **项目**：agentscope-ai/QwenPaw

---

## 1. 今日速览

CoPaw 今日呈现**高活跃度开发态势**：24小时内新增 **13 个活跃 Issue** 与 **11 个待合并 PR**，仅 1 个 Issue 和 1 个 PR 关闭，社区贡献流量显著。核心关注集中在**上下文压缩稳定性**（2 个重复 Bug 报告）、**会话管理体验优化**（3 个关联功能请求）以及**零停机重载机制的消息丢失**这一关键可靠性问题。PR 侧同步推进了轻量级目标模式、xAI/Grok 接入、Cron 任务隔离修复等特性，显示项目正处于 v1.1.7 后的快速迭代期。

---

## 2. 版本发布

**无新版本发布**

当前最新版本仍为 **v1.1.7**（参考 Issue #4448/#4447 报告版本）。今日无 Release 产出，社区功能请求与 Bug 修复尚未打包。

---

## 3. 项目进展

| PR | 状态 | 进展说明 | 链接 |
|:---|:---|:---|:---|
| #3246 feat(qq): add configurable instant acknowledgment message | **已关闭** | QQ 频道即时确认消息功能（首次贡献者），因审查未通过或方案调整关闭 | [PR #3246](https://github.com/agentscope-ai/QwenPaw/pull/3246) |
| #4452 [TEST] 工具调用测试 - 不应合并 | **已关闭** | 纯测试 Issue，按预期关闭 | [Issue #4452](https://github.com/agentscope-ai/QwenPaw/issues/4452) |

**整体推进评估**：今日合入代码量有限（仅 1 PR 关闭且无合并），但 **11 个待审 PR 覆盖 6 大功能域**，表明开发管道充盈，瓶颈在于代码审查吞吐而非需求输入。核心架构改进（runner 解耦 #4446、Cron 隔离 #4303/#4084/#4223）若获合并，将显著提升系统可靠性。

---

## 4. 社区热点

| 排名 | 议题 | 评论数 | 热度分析 |
|:---|:---|:---|:---|
| 🔥1 | **#4448 / #4447 [Bug] Context compaction 失败** | 各 2/1 条 | **重复报告同一问题**，长对话场景下上下文压缩因 `## header` 缺失频繁失败，直接影响 v1.1.7 核心体验；用户 `gooqhy` 连发两 Issue 显焦虑 |
| 🔥2 | **#4449 [BUG] 429 限流→零停机重载清空消息队列** | 1 条 | **系统性可靠性问题**，Agent"冻结"感知强烈，涉及消息队列生命周期与故障恢复设计缺陷 |
| 🔥3 | **#4450 / #4451 审批交互优化** | 各 1 条 | 同一作者 `xielevi` 连续提交，聚焦**人机协作效率**：短命令补全 + 跨平台按钮化，与 #3436 WebUI 审批形成体验闭环诉求 |

**核心诉求洞察**：社区正从"功能可用"向**体验精致化**与**生产可靠性**迁移。上下文压缩和限流恢复属于基础稳定性，审批交互优化反映多频道部署场景下的运营效率痛点。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR 状态 | 链接 |
|:---|:---|:---|:---|:---|
| 🔴 **P0-严重** | #4449 | **429 限流触发 zero-downtime_reload → 永久清空 pending 消息 → Agent 冻结**；非模型切换可恢复，因消息队列被 `UnifiedQueueManager.stop()` 强制清空 | **无** | [Issue #4449](https://github.com/agentscope-ai/QwenPaw/issues/4449) |
| 🟡 **P1-高** | #4448 / #4447 | **Context compaction 格式解析失败**（`missing ## header`），长对话高频触发；重复报告确认影响面 | **无** | [Issue #4448](https://github.com/agentscope-ai/QwenPaw/issues/4448) / [Issue #4447](https://github.com/agentscope-ai/QwenPaw/issues/4447) |
| 🟡 **P1-高** | #4453 | **聊天窗口无回应**，消息持续加载中；后端 `Event loop stopped before Future completed`；Docker 重启/版本回退无效，疑似 WeChat 频道事件循环生命周期问题 | **无** | [Issue #4453](https://github.com/agentscope-ai/QwenPaw/issues/4453) |

**稳定性评估**：P0 问题 #4449 暴露**故障恢复机制的设计缺陷**——零停机重载本为提升可用性，却成为消息丢失的触发器。建议维护者优先响应该 Issue，并关联 Cron 相关 PR（#4303/#4223）审视会话生命周期一致性。

---

## 6. 功能请求与路线图信号

| 功能域 | Issue/PR | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| **会话管理增强** | #4435 对话轮数计数 / #4436 会话拆分 / #4437 删除单条对话 | ⭐⭐⭐⭐⭐ **高** | 同一作者 `hyper0x` 三连发，WebUI 专属，与上下文压缩 Bug 形成**问题-解决方案对**；实现成本低，用户感知强 |
| **轻量级目标模式** | #4442 (Issue) / #4443 (PR) | ⭐⭐⭐⭐⭐ **高** | **已有配套 PR**，`suntp` 自提自修，MVP 完整（`/goal` + status/pause/resume/clear），与现有 `/mission` 差异化定位清晰 |
| **审批交互升级** | #4450 短命令作用域 / #4451 Telegram/QQ 按钮 | ⭐⭐⭐⭐☆ **中高** | 作者 `xielevi` 有实现能力且需求具体；Telegram Inline Keyboard 有先例（WebUI #3436），QQ 卡片消息需评估 API 限制 |
| **外部记忆系统插件化** | #4439 hindsight 集成 | ⭐⭐⭐☆☆ **中** | 架构层面诉求，与当前记忆系统耦合度相关；需评估插件接口成熟度 |
| **模型配置一键化** | #4441 OpenCode Go | ⭐⭐⭐☆☆ **中** | 配置体验优化，依赖第三方服务接入优先级 |
| **xAI/Grok 接入** | #4444 | ⭐⭐⭐⭐⭐ **高** | **已有完整 PR**，含 OAuth PKCE、图像/视频工具插件；零侵入现有代码路径，合入阻力小 |

---

## 7. 用户反馈摘要

> 从 Issues 提炼真实场景痛点

| 痛点类型 | 典型反馈 | 来源 |
|:---|:---|:---|
| **可靠性恐惧** | "切换任何看似正常的模型也无法恢复，因为 console 消息已被清空" — 用户对零停机重载**失去信任**，认为系统"偷偷丢数据" | #4449 |
| **上下文焦虑** | 长对话 = 高频报错 + 高 API 成本；用户需要**可见的上下文度量**（轮数/token）和**精确的修剪控制**（单条删/拆分会话） | #4448/#4445/#4435-4437 |
| **频道体验落差** | WebUI 有审批按钮（#3436），Telegram/QQ 只能手打命令；**跨平台体验不一致**降低运营效率 | #4451 |
| **部署调试困难** | Docker 重启、版本回退均无法恢复聊天，事件循环错误信息对终端用户无指导意义 | #4453 |
| **开发环境脆弱性** | "partially installed development/test environment" 下 runner 包级联导入失败，阻碍轻量模块测试 | #4445 |

**满意度信号**：`/approve` `/deny` 短命令已实现但未暴露（#4450），用户**不知道已有功能**，反映文档/提示文本的 discoverability 问题。

---

## 8. 待处理积压

> 长期未响应且今日仍有更新的重要项

| PR/Issue | 创建时间 | 当前状态 | 风险提示 |
|:---|:---|:---|:---|
| **#4041 feat(cli-desktop): 系统托盘启动** | 2026-05-05（**12天前**） | [first-time-contributor, Under Review] | 首次贡献者长期等待反馈，可能流失；Win32 独占实现需评估跨平台路径 |
| **#4084 fix(crons): eliminate concurrency state leaks** | 2026-05-07（**10天前**） | Open | Cron 管理器并发状态泄漏，与今日 #4449 消息丢失问题同属**会话生命周期**范畴，建议关联审查 |
| **#4303 fix(cron): isolate non-shared runs** | 2026-05-14 | Open | 与 #4084/#4223 形成 Cron 修复集群，分散审查可能导致方案冲突 |

**维护者行动建议**：
1. **紧急**：响应 #4449 设计讨论，确认 zero-downtime_reload 与消息队列的协调机制
2. **优先**：合并 #4443（轻量 goal 模式，自包含）、#4446（runner 解耦，有配套 Issue #4445）
3. **审查提速**：为 #4041 首次贡献者提供明确反馈时间线，保护社区参与度

---

*日报生成基于 GitHub 公开数据，PR 评论数标记为 "undefined" 系数据源未返回，实际可能有未显示讨论。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-05-17

## 1. 今日速览

ZeroClaw 社区今日保持**极高活跃度**，24小时内产生 **50 条 Issue 更新**（45 条新开/活跃，5 条关闭）和 **50 条 PR 更新**（39 条待合并，11 条已合并/关闭），无新版本发布。项目正处于 **v0.8.0 大版本冲刺期**——PR #6398（Multi-Agent Runtime and Schema V3）进入增量审查阶段，同时技能系统（skills）、网关持久化、桌面端扩展成为三大并行战线。社区对架构级功能（OAuth 原生支持、Webhook 增强、LSP 支持）的讨论持续升温，但 P1 级 Bug 的修复响应速度良好，整体健康度处于**积极演进但技术债务累积需警惕**的状态。

---

## 2. 版本发布

**无今日发布**

> 注：v0.8.0 正在通过 PR #6398 进行增量审查，尚未合并发布。v0.7.6 的技能系统改进（Issue #6253）作为主题发布正在推进中。

---

## 3. 项目进展

### 已关闭/合并的关键 PR

| PR | 作者 | 说明 | 链接 |
|:---|:---|:---|:---|
| **#6728** [CLOSED] | Stealinglight | Web 仪表盘 M5.0 — 新增 Overview 页面与共享 SectionNav 组件，为 v0.8.0 的 Web UI 基础设施铺路 | [zeroclaw-labs/zeroclaw#6728](https://github.com/zeroclaw-labs/zeroclaw/pull/6728) |

### 高价值待合并 PR（今日更新活跃）

| PR | 作者 | 核心进展 | 链接 |
|:---|:---|:---|:---|
| **#6398** v0.8.0: Multi-Agent Runtime and Schema V3 | singlerider | **XL 级旗舰 PR**，进入增量审查阶段；涵盖多智能体运行时、Schema V3、全渠道/全提供商重构，明确标注"DO NOT APPROVE/MERGE" | [zeroclaw-labs/zeroclaw#6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398) |
| **#6649** feat(channels/acp): persist ACP sessions | tidux | ACP（Agent Communication Protocol）会话持久化落地，SQLite 后端支持编辑器会话断线重连不丢上下文 | [zeroclaw-labs/zeroclaw#6649](https://github.com/zeroclaw-labs/zeroclaw/pull/6649) |
| **#6667** feat(skills): background review fork + skill_manage tool | JordanTheJet | 补齐 #4619 的技术债，`SkillImprover` 首次具备实际调用路径，支持技能后台自改进 | [zeroclaw-labs/zeroclaw#6667](https://github.com/zeroclaw-labs/zeroclaw/pull/6667) |
| **#6693** feat(memory): add dream mode for periodic memory consolidation | JordanTheJet | "梦境模式"——空闲时段自动压缩日常记忆为核心洞察，5 阶段管道设计，直接回应上下文膨胀痛点 | [zeroclaw-labs/zeroclaw#6693](https://github.com/zeroclaw-labs/zeroclaw/pull/6693) |
| **#6719** fix(runtime,channels): persist model_switch across turns | JordanTheJet | 修复 Issue #6173 的模型切换不持久化问题，覆盖编排器与网关/UI 全路径 | [zeroclaw-labs/zeroclaw#6719](https://github.com/zeroclaw-labs/zeroclaw/pull/6719) |
| **#6710** [desktop] support for windows and linux | Project516 | 桌面端跨平台突破：Linux Wayland/X11 权限模型、Windows 支持，Tauri 桌面应用扩展 | [zeroclaw-labs/zeroclaw#6710](https://github.com/zeroclaw-labs/zeroclaw/pull/6710) |
| **#6700** feat(gateway): Add skills management API with enable/disable toggle | ilteoood | 网关层技能管理 API + Web 仪表盘页面，技能系统的运维可控性提升 | [zeroclaw-labs/zeroclaw#6700](https://github.com/zeroclaw-labs/zeroclaw/pull/6700) |

**整体评估**：今日进展呈现**"基础设施夯实 + 用户体验修复 + 前沿探索"**三层并进。v0.8.0 的 Schema V3 是最大变量，而 JordanTheJet 单日贡献 5 个 PR，成为技能系统和运行时稳定性的核心推手。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---:|:---|:---|
| 1 | **#6123** [Bug]: default_model issue on fresh install | **18** | 新安装用户体验断裂：LXC 容器 + 远程 Ollama 场景下 `default_model` 配置失效，**已关闭**但反映 onboarding 脆弱性 | [zeroclaw-labs/zeroclaw#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) |
| 2 | **#2467** [Feature]: Webhook transforms | 5 | 企业集成刚需：GitHub 等通用 Webhook 发送方无法适配 ZeroClaw 的固定 payload 格式，要求自定义路径和转换 | [zeroclaw-labs/zeroclaw#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) |
| 3 | **#5601** Add subscription-native OAuth for Ollama Cloud, z.ai, Kimi, MiniMax | 5 | **中国 AI 生态接入**：四家国内订阅制平台的原生 OAuth，减少对静态 API key 的依赖（👍 1） | [zeroclaw-labs/zeroclaw#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) |
| 4 | **#6269** Context compressor drops reasoning_content | 4 | DeepSeek 等推理模型的 `reasoning_content` 在上下文压缩时丢失，**P1 在修中** | [zeroclaw-labs/zeroclaw#6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269) |
| 5 | **#3542** Webhook endpoint support agent mode | 4 | 从"聊天模式"扩展到"完整 Agent 工作流触发"，**已关闭**但需求被 #2467 等继承 | [zeroclaw-labs/zeroclaw#3542](https://github.com/zeroclaw-labs/zeroclaw/issues/3542) |

### 热点分析

- **Onboarding 体验是最大漏斗**：#6123 的 18 条评论集中于容器化部署的配置陷阱，说明"首次安装→可用"的路径仍存在摩擦
- **中国/亚太市场信号强烈**：#5601 对智谱、月之暗面、MiniMax 的 OAuth 需求，配合已有的 provider:glm 标签，显示区域化适配是增长关键
- **Webhook 作为企业集成枢纽**：#2467 和 #3542 共同指向"从零散的聊天接口到可编排的 Agent 基础设施"的跃迁需求

---

## 5. Bug 与稳定性

### P1（严重）| 需立即关注

| Issue | 描述 | 状态 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|
| **#6123** | 全新安装后 `default_model` 错误，工作流阻断 | **已关闭** | - | [zeroclaw-labs/zeroclaw#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) |
| **#6269** | 上下文压缩丢失 `reasoning_content`，DeepSeek 等推理模型降级 | **in-progress** | 待关联 | [zeroclaw-labs/zeroclaw#6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269) |
| **#6399** | 自定义远程 provider 发送本地文件路径而非 data URL，多模态请求失败 | **已关闭** | - | [zeroclaw-labs/zeroclaw#6399](https://github.com/zeroclaw-labs/zeroclaw/issues/6399) |
| **#6127** | 网关静默回退（silent-fallback）安全加固，#6099 后续 | **accepted** | 待提交 | [zeroclaw-labs/zeroclaw#6127](https://github.com/zeroclaw-labs/zeroclaw/issues/6127) |
| **#6659** | 0.7.4 缺乏向网关会话推送通知的 API | **已关闭** | - | [zeroclaw-labs/zeroclaw#6659](https://github.com/zeroclaw-labs/zeroclaw/issues/6659) |
| **#6132** | 技能提示词注入审计覆盖不全，#5972 后续 | **已关闭** | - | [zeroclaw-labs/zeroclaw#6132](https://github.com/zeroclaw-labs/zeroclaw/issues/6132) |

### P2（重要）| 今日新增/活跃

| Issue | 描述 | 状态 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|
| **#6683** | `skill_manage patch` 忽略冷却期，可无限制补丁 | **in-progress** | **#6684, #6725** | [zeroclaw-labs/zeroclaw#6683](https://github.com/zeroclaw-labs/zeroclaw/issues/6683) |
| **#6173** | `model_switch` 工具跨 turn 不持久，网关/UI 路径完全忽略 | **blocked** | **#6719** | [zeroclaw-labs/zeroclaw#6173](https://github.com/zeroclaw-labs/zeroclaw/issues/6173) |
| **#6721** | `tool_search` 不在 `default_auto_approve`，webhook 模式静默挂起 120s 后拒绝 | 新开 | 待提交 | [zeroclaw-labs/zeroclaw#6721](https://github.com/zeroclaw-labs/zeroclaw/issues/6721) |
| **#6724** | 全渠道 `enabled=false` 时监管器崩溃循环 | 新开 | 待提交 | [zeroclaw-labs/zeroclaw#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) |
| **#6723** | OpenAI provider 硬编码 120s 超时，忽略 `timeout_secs` 配置 | 新开 | 待提交 | [zeroclaw-labs/zeroclaw#6723](https://github.com/zeroclaw-labs/zeroclaw/issues/6723) |

### 稳定性评估

- **积极信号**：JordanTheJet 的 PR 集群（#6719, #6684, #6725）快速响应运行时缺陷，修复-验证闭环效率提升
- **风险信号**：今日新开 3 个 P2 Bug 均指向**配置与默认值不一致**（超时、自动审批、空配置处理），说明 v0.8.0 的大规模重构可能引入回归

---

## 6. 功能请求与路线图信号

### 高可能性纳入下一版本（已有 PR 或 accepted）

| 功能 | Issue/PR | 证据 | 链接 |
|:---|:---|:---|:---|
| **技能系统全面落地** | #6253 (tracker), #6667, #6700, #6725 | v0.7.6 主题发布，PR 集群密集 | [zeroclaw-labs/zeroclaw#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) |
| **ACP 会话持久化** | #6649 | XL PR 活跃更新 | [zeroclaw-labs/zeroclaw#6649](https://github.com/zeroclaw-labs/zeroclaw/pull/6649) |
| **桌面端跨平台** | #6710 | Windows + Linux 双平台 PR 提交 | [zeroclaw-labs/zeroclaw#6710](https://github.com/zeroclaw-labs/zeroclaw/pull/6710) |
| **记忆梦境模式** | #6693 | 创新功能，直接解决上下文膨胀 | [zeroclaw-labs/zeroclaw#6693](https://github.com/zeroclaw-labs/zeroclaw/pull/6693) |

### 中期路线图信号（blocked/needs-maintainer-review）

| 功能 | Issue | 阻碍因素 | 链接 |
|:---|:---|:---|:---|
| **Webhook 转换与 Agent 模式** | #2467, #3542 | 需架构决策：网关层 vs 运行时层的职责边界 | [zeroclaw-labs/zeroclaw#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) |
| **原生扩展推理（Anthropic/Bedrock）** | #5652 | XL PR，需大上下文模型审查 | [zeroclaw-labs/zeroclaw#5652](https://github.com/zeroclaw-labs/zeroclaw/pull/5652) |
| **LSP 支持** | #5907 | 与 Claude Code/Codex 竞争的关键差异化功能，标记为 RFC | [zeroclaw-labs/zeroclaw#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) |
| **按模型推理配置** | #5843 | 架构决策：全局 `[runtime]` vs `[providers.models.<name>]` | [zeroclaw-labs/zeroclaw#5843](https://github.com/zeroclaw-labs/zeroclaw/issues/5843) |

### 长期探索性需求

| 功能 | Issue | 说明 | 链接 |
|:---|:---|:---|:---|
| **轻量 ZeroClaw（技能替代硬编码工具）** | #6165 | 架构哲学转变：用技能生态替代内置工具代码 | [zeroclaw-labs/zeroclaw#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) |
| **Ratatui Agent REPL** | #5882 | 终端原生交互体验，对标 Claude Code TUI | [zeroclaw-labs/zeroclaw#5882](https://github.com/zeroclaw-labs/zeroclaw/issues/5882) |
| **PDF 工具支持** | #5745 | 学术/研究场景刚需 | [zeroclaw-labs/zeroclaw#5745](https://github.com/zeroclaw-labs/zeroclaw/issues/5745) |

---

## 7. 用户反馈摘要

### 痛点

| 场景 | 来源 Issue | 典型引述 |
|:---|:---|:---|
| **容器化部署配置地狱** | #6123 | "fresh install on an LXC container... After I set up my onboarding I get this error" |
| **Webhook 企业集成受阻** | #2467 | "The Webhook system is not really usable right now for generic Webhook senders" |
| **推理模型内容丢失** | #6269 | "reasoning_content stored in assistant messages is lost" when compression triggers |
| **非交互模式静默失败** | #6721 | "deferred_loading+webhook silently hangs 120s then auto-denies" |
| **配置项被硬编码覆盖** | #6723 | "timeout_secs config field is never read by the native OpenAI provider" |

### 满意/期待点

- **技能系统潜力获认可**：#6253 的 tracker 明确邀请社区输入，#6165 提出"更轻量的技能优先架构"
- **记忆系统的创新设计**：#6693 的 "dream mode" 获关注，用户期待"减少上下文膨胀并提高长期回忆质量"
- **中国生态接入积极**：#5601 的 👍 显示区域用户活跃

---

## 8. 待处理积压

### 需维护者介入的长期 Issue

| Issue | 创建日期 | 最后更新 | 阻塞原因 | 行动建议 | 链接 |
|:---|:---|:---|:---|:---|:---|
| **#2467** Webhook transforms | 2026-03-02 | 2026-05-16 | `status:blocked` 超 2 个月 | 明确网关架构负责人，或拆分为 MVP（路径自定义）+ 增强（payload 转换）两阶段 | [zeroclaw-labs/zeroclaw#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) |
| **#5601** OAuth for 中国四家平台 | 2026-04-10 | 2026-05-16 | `needs-maintainer-review` | 评估与现有 provider:glm 的复用性，或引入社区贡献者作为区域维护者 | [zeroclaw-labs/zeroclaw#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) |
| **#5607** Cron pre-hook skip gates | 2026-04-10 | 2026-05-16 | `needs-maintainer-review` | 轻量级实现（exit code 约定），适合标记 `good-first-issue` | [zeroclaw-labs/zeroclaw#5607](https://github.com/zeroclaw-labs/zeroclaw/issues/5607) |
| **#5908** CI/CD Container Builds | 2026-04-19 | 2026-05-16 | `needs-maintainer-review` | v0.8.0 发布前必须解决的基础设施，建议优先审查 | [zeroclaw-labs/zeroclaw#5908](https://github.com/zeroclaw-labs/zeroclaw/issues/5908) |
| **#6074** 153 commits lost in bulk revert | 2026-04-24 | 2026-05-16 | `in-progress` | 需建立明确的恢复优先级和弃用决策，避免无限期跟踪 | [zeroclaw-labs/zeroclaw#6074](https://github.com/zeroclaw-labs/zer

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*