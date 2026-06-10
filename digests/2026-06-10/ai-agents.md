# OpenClaw 生态日报 2026-06-10

> Issues: 452 | PRs: 497 | 覆盖项目: 13 个 | 生成时间: 2026-06-10 00:30 UTC

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

# OpenClaw 项目动态日报 | 2026-06-10

---

## 1. 今日速览

OpenClaw 今日保持**极高活跃度**：24 小时内 452 条 Issues 更新（315 活跃/新开，137 关闭）、497 条 PR 更新（353 待合并，144 已合并/关闭），并发布 2 个版本。项目核心聚焦于**消息通道可靠性修复**（QQBot 推理内容泄漏、Feishu 卡片渲染）和**MCP 工具结果标准化**，同时社区对**会话状态管理、内存泄漏、长运行稳定性**的焦虑持续升温。PR 队列积压严重（353 待合并），维护者审阅带宽成为明显瓶颈。

---

## 2. 版本发布

### [v2026.6.5](https://github.com/openclaw/openclaw/releases/tag/v2026.6.5) — 稳定版
### [v2026.6.5-beta.6](https://github.com/openclaw/openclaw/releases/tag/v2026.6.5-beta.6) — 预发布版

**共同更新内容：**

| 变更项 | 详情 | 影响 |
|--------|------|------|
| **QQBot 推理内容过滤** | 模型生成的 `<thinking>` 等推理脚手架内容在投递至 QQ 频道前被自动剥离 | 修复 [#89913](https://github.com/openclaw/openclaw/issues/89913)、[#90132](https://github.com/openclaw/openclaw/issues/90132)，感谢 @openperf |
| **MCP 工具结果强制转换** | 对 `resource_link`、`resource`、`audio`、畸形图片及未来新类型进行标准化强制转换 | 提升跨工具互操作性，减少类型不匹配导致的静默失败 |

**迁移注意事项：** 无破坏性变更，建议所有 QQBot 用户升级以避免推理内容泄漏。

---

## 3. 项目进展

### 今日已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 状态 |
|:---|:---|:---|:---|
| [#91787](https://github.com/openclaw/openclaw/pull/91787) | openclaw-clownfish[bot] | 限制 TTS 旧版迁移至受支持路径，停止重写不支持的 `agents.defaults.tts` 和 Discord 根级 TTS 配置 | ✅ 已关闭 |
| [#91782](https://github.com/openclaw/openclaw/pull/91782) | jason-allen-oneal | 语音通话实时 WebSocket 路径边界修复（被 [#91784](https://github.com/openclaw/openclaw/pull/91784) 取代） | ✅ 已关闭 |
| [#91780](https://github.com/openclaw/openclaw/pull/91780) | openclaw-clownfish[bot] | Web UI 会话切换后恢复队列排空修复，防止历史消息错误注入新会话 | ✅ 已关闭 |
| [#91757](https://github.com/openclaw/openclaw/pull/91757) | RomneyDa | 澄清已退役 `skill-workshop` 插件警告，引导用户至新版内置 Skill Workshop | ✅ 已关闭 |
| [#91750](https://github.com/openclaw/openclaw/pull/91750) | eleqtrizit | 强制原生网页搜索工具策略，在启用 Codex/OpenAI `web_search` 前通过多层策略校验 | ✅ 已关闭 |

**整体推进评估：** 今日合并以**配置清理、安全策略加固、UI 边缘修复**为主，无重大架构变更。核心功能修复（Feishu 卡片、内存搜索超时、iMessage 诊断）仍滞留待审队列。

---

## 4. 社区热点

### 🔥 评论最多 Issues（深度讨论中）

| Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---|:---|
| **#25592** Text between tool calls leaks to messaging channels | 29 条 | **最高优先级安全/UX 问题**：工具调用间的内部处理文本（错误处理、处理确认、旁白）被路由至 Slack/iMessage 等通道，暴露内部状态。标记为 `impact:security` + `impact:message-loss` + `🦞 diamond lobster` | [链接](https://github.com/openclaw/openclaw/issues/25592) |
| **#88312** Codex app-server turn-completion stall regression | 15 条 | 2026.5.27 回归：多工具智能体回合因 "Codex stopped before confirming the turn was complete" 失败，2026.5.26 正常。是 [#84076](https://github.com/openclaw/openclaw/issues/84076) 的再次回归 | [链接](https://github.com/openclaw/openclaw/issues/88312) |
| **#87307** Matrix thread replies sent as normal replies | 14 条 | 2026.5.22 回归：Matrix 线程回复变为普通回复，`/status` 和 `/model` 命令静默无响应 | [链接](https://github.com/openclaw/openclaw/issues/87307) |
| **#54253** RISC-V64 系统 LLM Request Failed | 13 条 | 架构支持缺口：RISC-V64 安装成功但运行时失败，社区渴望边缘/嵌入式部署 | [链接](https://github.com/openclaw/openclaw/issues/54253) |
| **#53628** `${XDG_CONFIG_HOME}` 安装 skill 时未解析 | 13 条 | Docker 环境下环境变量未展开，阻碍多用户/多实例配置管理 | [链接](https://github.com/openclaw/openclaw/issues/53628) |

### 🔥 高价值待审 PR（维护者需关注）

| PR | 规模 | 核心贡献 | 风险标签 | 链接 |
|:---|:---|:---|:---|:---|
| **#87893** 修复陈旧自动运行时认证选择 | XL | 防止 Control UI 会话继承临时回退认证/模型选择 | `🚨 compatibility` `🚨 auth-provider` `🚨 session-state` | [链接](https://github.com/openclaw/openclaw/pull/87893) |
| **#91722** HTTP 出口重构：强制外部代理 | XL | 替换分散的 SSRF 防护为统一外部代理架构，**影响 50+ 扩展/通道** | `🚨 compatibility` `🚨 security-boundary` | [链接](https://github.com/openclaw/openclaw/pull/91722) |
| **#89835** 原生模板化 `/usage` 完整页脚渲染 | XL | 核心内渲染用量页脚，消除插件依赖 | `🚨 compatibility` `🚨 auth-provider` `🚨 availability` | [链接](https://github.com/openclaw/openclaw/pull/89835) |

**背后诉求分析：** 社区核心焦虑集中于**"内部状态外泄"**（工具调用间文本、推理脚手架、NO_REPLY 标记）和**"会话状态脆弱性"**（认证切换导致重置、心跳阻塞、长运行 OOM）。用户需要 OpenClaw 作为"可靠的基础设施"而非"需要持续调试的实验品"。

---

## 5. Bug 与稳定性

### P1（严重）| 生产阻断或数据丢失风险

| Issue | 描述 | 状态 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|
| **#25592** | 工具调用间文本泄漏至消息通道 | 🔴 OPEN | ❌ 无 | [链接](https://github.com/openclaw/openclaw/issues/25592) |
| **#88312** | Codex 回合完成停滞回归 | 🔴 OPEN | ❌ 无 | [链接](https://github.com/openclaw/openclaw/issues/88312) |
| **#87307** | Matrix 线程回复退化 | 🔴 OPEN | ❌ 无 | [链接](https://github.com/openclaw/openclaw/issues/87307) |
| **#48003** | Steer 模式未向主会话注入消息 | 🔴 OPEN | ❌ 有链接 PR 开放中 | [链接](https://github.com/openclaw/openclaw/issues/48003) |
| **#31331** | Docker + Sandbox workspaceAccess 完全失效 | 🔴 OPEN | ❌ 有链接 PR 开放中 | [链接](https://github.com/openclaw/openclaw/issues/31331) |
| **#89315** | Gateway 堆内存无界增长，systemd 部署 OOM | 🔴 OPEN | ❌ 无 | [链接](https://github.com/openclaw/openclaw/issues/89315) |
| **#84569** | WhatsApp 长 model_call 会话停滞，回复永不投递 | 🔴 OPEN | ❌ 无 | [链接](https://github.com/openclaw/openclaw/issues/84569) |
| **#83184** | 心跳驱动回复使 pendingFinalDelivery 卡住 | 🔴 OPEN | ❌ 有链接 PR 开放中 | [链接](https://github.com/openclaw/openclaw/issues/83184) |
| **#76233** | exec-approval-followup 与 bundle-mcp 运行时处置竞态 | 🔴 OPEN | ❌ 无 | [链接](https://github.com/openclaw/openclaw/issues/76233) |

### P1 已关闭（今日修复验证）

| Issue | 描述 | 关闭原因 | 链接 |
|:---|:---|:---|:---|
| **#86599** | Windows beta 本地模型调用阻塞 Gateway 事件循环（~4 分钟） | 已解决/信息不足 | [链接](https://github.com/openclaw/openclaw/issues/86599) |

### P2（中等）| 功能退化或体验受损

| Issue | 描述 | 链接 |
|:---|:---|:---|
| **#87299** | Telegram 大会话中虚假 "Something went wrong" | [链接](https://github.com/openclaw/openclaw/issues/87299) |
| **#52186** | ElevenLabs TTS 生成成功但播放 OpenAI 语音（回归） | [链接](https://github.com/openclaw/openclaw/issues/52186) |
| **#50442** | `backup create` 超时遗留 .tmp 文件导致磁盘耗尽 | [链接](https://github.com/openclaw/openclaw/issues/50442) |

---

## 6. 功能请求与路线图信号

| Issue/PR | 需求 | 纳入可能性 | 信号强度 | 链接 |
|:---|:---|:---|:---|:---|
| **#42840** MathJax/LaTeX Control UI 支持 | 科学/数学内容渲染 | ⭐⭐⭐⭐⭐ 高 | 👍 6，长期高票 | [链接](https://github.com/openclaw/openclaw/issues/42840) |
| **#52640** 持久化任务状态表面 | 长运行通道回合状态反馈 | ⭐⭐⭐⭐☆ 中高 | 与现有流式/心跳机制互补 | [链接](https://github.com/openclaw/openclaw/issues/52640) |
| **#53638** 每通道/每群组/每 DM 模型覆盖 | 精细化模型路由 | ⭐⭐⭐⭐☆ 中高 | 👍 2，配置架构自然延伸 | [链接](https://github.com/openclaw/openclaw/issues/53638) |
| **#55249** 会话标签/昵称 | 可识别会话管理 | ⭐⭐⭐☆☆ 中 | 用户体验痛点明确 | [链接](https://github.com/openclaw/openclaw/issues/55249) |
| **#56110** STATE.md 自动加载 | 上下文压缩后状态恢复 | ⭐⭐⭐⭐⭐ 高 | 引用 Anthropic 研究，架构趋势 | [链接](https://github.com/openclaw/openclaw/issues/56110) |
| **#54794** Telegram Inline Query 支持 | 任意聊天中 @botname 调用 | ⭐⭐⭐☆☆ 中 | 生态扩展，但实现复杂 | [链接](https://github.com/openclaw/openclaw/issues/54794) |
| **#90354** 预压缩内存刷新的有界/验证追加语义 | 数据完整性加固 | ⭐⭐⭐⭐⭐ 高 | 有配套 PR 讨论中，安全导向 | [链接](https://github.com/openclaw/openclaw/issues/90354) |

**路线图推断：** 下一版本（2026.6.x 或 2026.7）极可能包含：
- **MathJax/LaTeX 渲染**（社区高票，教育/科研场景刚需）
- **STATE.md 工作区引导**（与 Anthropic 长期智能体研究对齐）
- **per-channel 模型覆盖**（配置系统渐进增强）
- **内存刷新安全边界**（[#90354](https://github.com/openclaw/openclaw/issues/90354) 与 [#84792](https://github.com/openclaw/openclaw/pull/84792) 协同）

---

## 7. 用户反馈摘要

### 😤 核心痛点

> **"内部状态像筛子一样漏给用户"**
> - 工具调用间文本、`<thinking>` 推理、NO_REPLY 标记、原始 JSON 参数——"用户不该看到任何机器内部语言" ([#25592](https://github.com/openclaw/openclaw/issues/25592), [#44905](https://github.com/openclaw/openclaw/issues/44905), [#89913](https://github.com/openclaw/openclaw/issues/89913))

> **"会话状态像纸糊的"**
> - 认证配置切换 → 整个对话重置 ([#85505](https://github.com/openclaw/openclaw/pull/85505))
> - 心跳修复反而阻塞 Telegram ([#40611](https://github.com/openclaw/openclaw/issues/40611))
> - 长运行 → OOM → systemd 杀死 ([#89315](https://github.com/openclaw/openclaw/issues/89315))

> **"Matrix/WhatsApp/Telegram 二等公民"**
> - 线程回复退化、发送动作无限重试、长调用回复丢失——非 Slack/Discord 通道的可靠性差距明显 ([#87307](https://github.com/openclaw/openclaw/issues/87307), [#84569](https://github.com/openclaw/openclaw/issues/84569), [#56096](https://github.com/openclaw/openclaw/issues/56096))

### 😊 正面反馈

> **"Docker 安装体验顺畅，Mac/x86 很棒"** — 来自 RISC-V 尝试者，暗示主流平台成熟度获认可 ([#54253](https://github.com/openclaw/openclaw/issues/54253))

> **"Claude Code 集成让复杂工作流成为可能"** — CLI 运行器诊断事件 PR 显示专业用户深度依赖 ([#84540](https://github.com/openclaw/openclaw/pull/84540))

### 🎯 使用场景洞察

| 场景 | 代表 Issue | 隐含需求 |
|:---|:---|:---|
| 多用户团队部署 | [#56263](https://github.com/openclaw/openclaw/issues/56263) 可配置文件权限 | 企业/托管服务商需要多租户隔离 |
| 长期自主运行智能体 | [#56110](https://github.com/openclaw/openclaw/issues/56110) STATE.md, [#89315](https://github.com/openclaw/openclaw/issues/89315) OOM | "设置后忘记" 的基础设施级可靠性 |
| 跨机器浏览器自动化 | [#53599](https://github.com/openclaw/openclaw/issues/53599) Chrome 扩展中继移除 | 托管服务商需要远程浏览器代理 |

---

## 8. 待处理积压

### 🚨 需维护者紧急介入（>30 天无实质进展，P1）

| Issue | 天数 | 阻塞原因 | 行动建议 | 链接 |
|:---|:---|:---|:---|:---|
| **#25592** 工具调用间文本泄漏 | 106 天 | 标签堆砌（7 个 clawsweeper 标签），需产品+安全+维护者三方决策 | 指定单一负责人，剥离非必要标签，设定决策截止日期 | [链接](https://github.com/openclaw/openclaw/issues/25592) |
| **#48003** Steer 模式主会话注入失效 | 86 天 | 有链接 PR 但审阅停滞 | 强制 PR 审阅排期或重新分配审阅者 | [链接](https://github.com/openclaw/openclaw/issues/48003) |
| **#31331** Docker+Sandbox workspaceAccess | 100 天 | 安全审查+产品决策双阻塞 | 召开专项技术评审会 | [链接](https://github.com/openclaw/openclaw/issues/31331) |
| **#54531** 强制回复至源通道 | 77 天 | 多通道（Telegram/Discord/WhatsApp）统一抽象待决策 | 拆分至各通道独立实现，降低决策复杂度 | [链接](https://github.com/openclaw/openclaw/issues/54531) |
| **#44905** Discord 工具调用痕迹泄漏 | 89 天 | 与 #25592 同源问题，需统一修复策略 | 合并至 #25592 或建立母 issue 跟踪 | [链接](https://github.com/openclaw/openclaw/issues/44905) |

### 📋 PR 审阅瓶颈（ready for maintainer look 但积压）

| PR | 等待天数 | 风险 | 链接 |
|:---|:---|:---|:---|
| **#88800** 生成的 secret refs 不出现在明文 | 10 天 | 安全修复，低合并风险 | [链接](https://github.com/openclaw/openclaw/pull/88800) |
| **#87893** 修复陈旧自动运行时认证选择 | 12 天 | 影响所有 WebChat/TUI 会话启动体验 | [链接](https://github.com/openclaw/openclaw/pull/87893) |
| **#84792** 预压缩前运行内存刷新 | 20 天 | 防止上下文压缩导致数据丢失 | [链接](https://github.com/openclaw/openclaw/pull/84792) |
| **#85316** 保持别名兼容的认证配置覆盖 | 19 天 | Claude CLI 会话稳定性 | [链接](https://github.com/openclaw/openclaw/pull/85316) |

---

**日报生成时间：** 2026-06-10  
**数据基准：** GitHub API 过去 24 小时活动  
**项目健康度评分：** ⚡ 活跃度 A+ | 🔧 维护响应 B

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向分析报告
**分析基准日：2026-06-10**

---

## 1. 生态全景

个人 AI 助手开源生态已进入**"生产就绪冲刺期"**：头部项目日均 Issues/PR 双双突破 50+，但审查吞吐量成为普遍瓶颈（OpenClaw 353 待合并 PR、ZeroClaw 49 待合并 PR）。社区焦点从"功能堆砌"转向**可靠性工程**——会话状态隔离、内部信息防泄漏、长运行稳定性成为共性焦虑。同时，**多模型动态路由**与**MCP/工具生态标准化**正从差异化特性演变为基础设施标配，而安全债务的集中暴露（PicoClaw 单日 10 个漏洞）警示生态整体成熟度仍处爬坡阶段。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PR (24h) | 待合并 PR | Release | 健康度评估 |
|:---|:---:|:---:|:---:|:---:|:---|
| **OpenClaw** | 452 (315 活跃/137 关闭) | 497 (353 待合并/144 已处理) | **353** | v2026.6.5 + beta.6 | ⚡ 活跃度 A+ / 🔧 维护响应 B —— 高活跃高积压，审阅带宽瓶颈显著 |
| **NanoBot** | 6 活跃 | 23 (12 待合并/11 已处理) | 12 | 无 | 稳健，内存污染新 Bug 需紧急响应 |
| **Hermes Agent** | 50 (45 活跃/5 关闭) | 50 (46 待合并/4 已处理) | **46** | 无 | 高活跃低合并率(8%)，审查瓶颈严重 |
| **PicoClaw** | 20 (18 活跃/2 关闭) | 20 (15 待合并/5 已处理) | 15 | v0.2.9-nightly | 🔴 安全警报 —— 10 个漏洞单日暴露，响应滞后 |
| **NanoClaw** | 0 新开 | 43 (4 待合并/39 已处理) | 4 | 无 | 积压清理期，安全修复待合并 |
| **NullClaw** | 5 (1 开放/4 关闭) | 7 (1 待合并/6 已处理) | 1 | 无 | 高质量修复窗口，4 个回归清零 |
| **IronClaw** | 47+ | 50+ | — | 无 | Reborn 迁移冲刺，生产化焦虑峰值 |
| **LobsterAI** | 2 新开 | 4 已处理 | 1 | 无 | 中等活跃，社区参与度偏低 |
| **CoPaw** | 33 (16 活跃/17 关闭) | 34 (18 待合并/16 已处理) | 18 | v1.1.11-beta.2 | 高活跃，Windows 稳定性债务待解 |
| **ZeroClaw** | 50 (48 活跃/2 关闭) | 50 (49 待合并/1 已处理) | **49** | 无 (v0.8.0-beta-1) | 🔴 审查危机 —— 合并率 2%，S1 Bug 堆积 |
| **TinyClaw** | — | — | — | — | 24h 无活动 |
| **Moltis** | — | — | — | — | 24h 无活动 |

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 表现 | 生态对比 |
|:---|:---|:---|
| **规模领先** | 452 Issues / 497 PR 日活，绝对量级第一 | 2-5 倍于 NanoBot/Hermes/CoPaw，10 倍于 NullClaw/LobsterAI |
| **通道覆盖** | QQBot、Feishu、iMessage、Slack、Discord、Matrix、WhatsApp、Telegram | **最广泛**的企业 IM 覆盖，尤其国内生态（QQ、飞书）独有 |
| **技术路线** | 多通道统一抽象 + MCP 工具标准化 + 会话状态中心化管理 | Hermes 侧重桌面/远程网关，NanoBot 强调"Dream"人格化，CoPaw 绑定 AgentScope 框架 |
| **核心优势** | 生产级多通道部署经验、MCP 生态先发、Claude Code 深度集成 | 但"内部状态外泄"（#25592，106 天未解）暴露架构债务 |
| **关键劣势** | 维护者审阅带宽瓶颈（353 待合并 PR），P1 Bug 响应滞后 | NullClaw 同日修复 4 个回归，OpenClaw 核心修复滞留队列 |

**定位结论**：OpenClaw 是**生态事实标准的基础设施层候选**，但正经历"成功者的诅咒"——规模扩张速度超越治理能力建设，需警惕 Hermes（自主路由架构）和 NanoClaw（确定性安全策略）在架构层面的后发追赶。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 紧迫程度 |
|:---|:---|:---|:---:|
| **多模型动态路由** | OpenClaw (#53638)、NanoBot (#4253)、Hermes (#16525, #43134)、NanoClaw (#1690) | 隐私任务↔效率任务即时切换，"模型即策略"而非全局绑定 | 🔴 高 |
| **会话状态/内存隔离** | OpenClaw (#89315 OOM, #85505 认证切换重置)、NanoBot (#4259 跨会话污染)、Hermes (#4726 命名空间隔离) | 长运行稳定性、多租户数据不串扰、纠错记忆不丢失 | 🔴 高 |
| **内部状态防泄漏** | OpenClaw (#25592 工具间文本泄漏, #89913 thinking 标签)、CoPaw (#5031 Skill 实现暴露)、NullClaw (#944 PII 误杀) | "用户不该看到任何机器内部语言" | 🔴 高 |
| **MCP/工具标准化** | OpenClaw (MCP 结果强制转换)、NanoClaw (Skill Marketplace)、ZeroClaw (#6876 MCP 不受 allowed_tools 限制) | 工具发现、权限边界、跨工具互操作 | 🟡 中高 |
| **流式传输/实时响应** | PicoClaw (#2404 stream=True)、NanoBot (#4267 WebSocket 竞态)、CoPaw (CDP 超时) | 消除等待焦虑，协议边界信号清晰 | 🟡 中高 |
| **安全基线加固** | PicoClaw (10 漏洞单日)、NanoClaw (#1605 确定性策略)、ZeroClaw (#6250 认证中间件化) | 从"功能优先"转向"防御性设计" | 🔴 高 |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户 | 技术架构关键差异 |
|:---|:---|:---|:---|
| **OpenClaw** | 多通道企业 IM 机器人、MCP 工具生态 | 开发者/企业 IT 部署者 | 通道抽象层 + 插件化技能，Rust/Node 混合 |
| **NanoBot** | 人格化 AI 伴侣（Dream）、记忆自进化 | 个人用户/AI 陪伴场景 | Python 生态，SOUL.md/USER.md 身份文件，强调"可控 AI 边界" |
| **Hermes Agent** | 桌面自动化、远程网关、多模型自主路由 | 高级用户/自托管开发者 | macOS launchd 原生集成，holographic memory，向"自我管理 agent"演进 |
| **PicoClaw** | 轻量部署、快速配置 | 中文社区/中小企业 | 配置驱动，但安全架构系统性薄弱 |
| **NanoClaw** | 确定性安全执行、技能市场 | 安全敏感企业/合规场景 | "非基于提示的强制执行"安全策略引擎，Docker 沙箱 |
| **NullClaw** | 跨实例记忆同步、可观测性 | 多 agent 运维场景 | event stream 原语，Agent 追踪 Web UI |
| **IronClaw** | NEAR 区块链集成、多租户企业 SaaS | Web3/企业混合部署 | Rust 全栈，Project-scoped ownership 架构，Reborn 迁移中 |
| **LobsterAI** | 多 Agent 协作（Cowork）、跨模型编排 | 团队生产力场景 | Electron 桌面应用，M3+DeepSeek 异构模型协作 |
| **CoPaw** | 零配置上手、浏览器自动化、技能自进化 | 中文开发者/AgentScope 用户 | 绑定 AgentScope 框架，Tauri 桌面端，OpenRouter 一键接入 |
| **ZeroClaw** | 极多通道覆盖（SMS/智能家居）、Cron 调度 | 极客/IoT 集成者 | Rust 运行时，SopEngine 回合引擎，但三重实现债务待重构 |

---

## 6. 社区热度与成熟度

### 快速迭代阶段（活跃度 >30 Issues+PR/日，功能扩张优先）

| 项目 | 特征 | 风险 |
|:---|:---|:---|
| **OpenClaw** | 通道扩展、MCP 标准化、配置系统增强 | 审阅瓶颈导致 P1 Bug 滞留，"基础设施级可靠性"承诺受质疑 |
| **Hermes Agent** | 自主路由、内存命名空间、Dashboard 远程访问 | 合并率 8%，架构讨论（#7415 RFC）可能触发核心重构 |
| **CoPaw** | 零配置 OAuth、OpenSandbox、E2E CI | Windows 稳定性债务（#4988/#4989），AgentScope 2.0 迁移阻塞 |
| **IronClaw** | Reborn 生产化、Project-scoped ownership、Omni 搜索 | "有 substrate 没剧本"——生产 cutover 故事线缺失 |
| **ZeroClaw** | 批量通道/生态扩展（SMS/智能家居） | 🔴 **审查危机**——49 PR 待合并，S1 Bug 未解，建议冻结功能 PR |

### 质量巩固阶段（活跃度 10-30，修复与架构优化并重）

| 项目 | 特征 | 关键动作 |
|:---|:---|:---|
| **NanoBot** | 文档重构、数学渲染、内存污染响应 | 需紧急修复 #4259 跨会话污染，避免架构腐蚀 |
| **PicoClaw** | 安全漏洞响应、配置健壮性 | 🔴 安全债务集中爆发，需立即召开安全响应会议 |
| **NanoClaw** | 历史 PR 清理、安全策略落地 | 合并 #2722 Critical 漏洞修复，明确 #1690 多模型架构决策 |

### 稳健维护阶段（活跃度 <10，精细化运营）

| 项目 | 特征 | 观察点 |
|:---|:---|:---|
| **NullClaw** | 回归修复、cross-memory 架构功能落地 | 高质量修复窗口，#941 agent cron 子进程是唯一直播风险 |
| **LobsterAI** | 通知系统、数据备份、跨模型状态同步 | 社区参与度偏低，#2132 架构问题零回复需警惕 |

### 休眠/停滞

| 项目 | 状态 |
|:---|:---|
| **TinyClaw** | 24h 无活动 |
| **Moltis** | 24h 无活动 |

---

## 7. 值得关注的趋势信号

| 趋势信号 | 证据来源 | 对开发者的参考价值 |
|:---|:---|:---|
| **"模型即策略"成为用户心智标配** | NanoBot #4253（"我需要两个大脑"）、Hermes #16525（agent 自主 model_switch）、OpenClaw #53638（per-channel 覆盖） | 设计 Agent 系统时，模型选择不应是部署时静态配置，而需支持运行时动态路由；考虑引入"成本-隐私-延迟"三维策略引擎 |
| **安全与可用性的设计张力显性化** | Hermes #43083（密码脱敏导致工具链断裂）、NullClaw #944（PII 误杀日期）、PicoClaw 10 漏洞 | 防御性编程需与 LLM 行为预测协同设计——文本替换脱敏已显脆弱，探索结构化标记或可信执行环境（TEE） |
| **"内部状态外泄"成为可靠性试金石** | OpenClaw #25592（106 天，29 评论）、#89913 thinking 标签、CoPaw #5031 Skill 暴露 | Agent 系统的"产品感"取决于能否完全隐藏机器语言；建议建立"零泄漏"自动化测试套件，覆盖工具间文本、推理脚手架、NO_REPLY 标记 |
| **多租户隔离从"高级功能"变为"入门门槛"** | ZeroClaw #5982（RBAC）、IronClaw #4585（tenant identity）、Hermes #10674（多 profile） | 早期架构需预留租户边界，事后修补成本指数级上升；Project-scoped ownership（IronClaw #4662-4664）是值得关注的设计范式 |
| **Cron/调度可靠性成为自主 Agent 的致命短板** | ZeroClaw #6037（20 次重入）、NullClaw #941（子进程未启动）、Hermes #37968（审批环境隔离漏洞） | "设置后忘记"的基础设施承诺需要：幂等执行、超时熔断、投递确认、可观测追踪——四者缺一不可 |
| **Anthropic 研究方向快速渗透社区** | OpenClaw #56110（STATE.md 自动加载）、NanoBot #4264（idleCompact 策略） | 上下文压缩与状态恢复是长运行 Agent 的核心课题，关注 Anthropic 的"effective compute"研究，提前布局语义压缩替代固定窗口 |
| **TUI/桌面端体验债务普遍被低估** | ZeroClaw #7377-7378（主题/Cmd-C）、CoPaw #5015（Windows 卡顿）、Hermes #42006（launchd 重启） | 开发者工具向大众用户扩展时，平台原生集成质量直接决定留存；建议设立"平台体验负责人"角色 |

---

**报告结论**：2026-06-10 的生态快照显示，个人 AI 助手领域正从"功能验证期"集体跃迁"生产就绪期"，但**治理能力建设（审阅吞吐、安全响应、架构决策速度）**已成为比功能创新更关键的差异化变量。OpenClaw 的规模优势显著，但 NullClaw 的修复效率、NanoClaw 的安全架构、Hermes 的自主路由设计均构成架构层面的替代威胁。建议技术决策者关注各项目的**P1 Bug 平均修复时长**与**安全漏洞响应 SLA**，作为比 Star 数更可靠的生产就绪度指标。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-06-10

## 1. 今日速览

NanoBot 今日保持**高活跃度**，23 个 PR 更新（12 待合并/11 已关闭）与 6 个活跃 Issue 显示社区贡献持续强劲。核心开发聚焦于**内存系统稳定性**（history 污染、cursor 单调性）、**WebUI 可靠性**（会话内容丢失修复）以及**大模型兼容性**（GPT-5.x 参数适配）。测试基础设施持续完善，yu-xin-c 贡献者单日推动 6 个测试/修复类 PR。无新版本发布，整体项目健康度良好，但需关注内存架构的跨会话污染问题。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 项目推进 |
|:---|:---|:---|:---|
| [#4208](https://github.com/HKUDS/nanobot/pull/4208) | Bayern4ever-dot | **WebUI "Fork from here" 功能** — 从助手回复处创建分支对话，原对话不受影响 | 对话管理体验重大提升，支持非线性探索式交互 |
| [#4177](https://github.com/HKUDS/nanobot/pull/4177) | chengyongru | **文档重构** — 重新设计入门路径，新增 CLI 命令选择器、配置任务地图、部署就绪检查表 | 降低新用户门槛，解决长期"上手困难"反馈 |
| [#4265](https://github.com/HKUDS/nanobot/pull/4265) | wrightwei1118 | **English Read 技能调度优化** — cron 从每日改为每 2 日 | 减少 API 调用成本，Agent 技能精细化运营 |
| [#3434](https://github.com/HKUDS/nanobot/pull/3434) | c137650 | **飞书频道 LaTeX 渲染** — 通过 CodeCogs API 将公式转为图片上传 | 企业场景（飞书）数学表达完整支持 |
| [#3400](https://github.com/HKUDS/nanobot/pull/3400) | c137650 | **Dream 身份文件保护** — 可选禁止自动编辑 SOUL.md/USER.md | 用户可控的 AI 自我边界，伦理与稳定性兼顾 |
| [#4034](https://github.com/HKUDS/nanobot/pull/4034) | computer-agent | ~~GitAgent Protocol 支持~~（标记 duplicate，关闭） | 标准化方向受关注，但需避免协议碎片化 |
| [#4190](https://github.com/HKUDS/nanobot/pull/4190) | chengyongru | **工具调用验证严格化** — 保留原始参数、拒绝非对象值、强化 schema 校验 | 安全关键修复，防止注入式工具误执行 |
| [#4252](https://github.com/HKUDS/nanobot/pull/4252) | chengyongru | **WebUI TeX 数学渲染** — 支持 `\(...\)` `\[\]` 及安全单美元行内公式 | 学术/技术场景展示能力补齐 |

**整体评估**：今日合并覆盖**用户体验**（文档、Fork、数学渲染）、**系统安全**（工具验证、文件边界）、**企业集成**（飞书 LaTeX）三大维度，项目向生产就绪稳步迈进。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 热度分析 |
|:---|:---|:---|:---|
| 🔥1 | [#4253](https://github.com/HKUDS/nanobot/issues/4253) **按对话覆盖模型** | 3 评论 | **核心痛点**：用户需在 OpenRouter（快/能力强）与本地 llama.cpp（隐私/慢/便宜）间动态切换。当前全局设置无法满足隐私敏感任务的即时切换需求。诉求本质是**"模型即策略"**——不同任务匹配不同成本-隐私-延迟组合 |
| 🔥2 | [#4259](https://github.com/HKUDS/nanobot/issues/4259) **history.jsonl 跨会话污染** | 2 评论 | **架构级 Bug**：`Consolidator.archive()` 生成的会话摘要未隔离，被 `ContextBuilder.build_system_prompt()` 全局混入。社区成员 chxuan 提供了完整数据流分析（写入路径→读取路径→污染机制），显示对内存子系统的深度理解 |

### 高价值待合并 PR

| PR | 核心看点 |
|:---|:---|
| [#4255](https://github.com/HKUDS/nanobot/pull/4255) **按需版本检查** — 替换实时 PyPI 轮询为 Settings > About 手动检查，消除后台线程与周期性请求，契合隐私/极简设计哲学 |
| [#4257](https://github.com/HKUDS/nanobot/pull/4257) **代码块感知消息分割** — 解决长消息在围栏代码块边界处截断导致的 HTML 渲染灾难，IM 频道（Discord/Slack/飞书）稳定性关键修复 |

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | Fix 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#4259](https://github.com/HKUDS/nanobot/issues/4259) | **内存污染**：跨会话 history 注入导致上下文混淆，长期可能产生"幻觉记忆" | ❌ 无 PR，需紧急响应 |
| 🔴 **高** | [#4267](https://github.com/HKUDS/nanobot/pull/4267) | **WebUI 丢消息**：WebSocket 竞态导致助手回复间歇性不渲染（与 token 生成速度相关） | ✅ **PR 已提交**（Syoc, 2026-06-09） |
| 🟡 **中** | [#4061](https://github.com/HKUDS/nanobot/issues/4061) | **工具调用解析失败**：OpenAI 兼容提供商以文本格式输出 tool calls，未转为结构化 `LLMResponse.tool_calls` | ❌ 无 PR，影响第三方提供商兼容性 |
| 🟡 **中** | [#4264](https://github.com/HKUDS/nanobot/issues/4264) | **idleCompact 总结遗漏**：最后 8 条消息排除机制导致用户纠错行为与正确结果丢失，history 留存错误结论 | ❌ 无 PR，需重新设计压缩窗口策略 |
| 🟡 **中** | [#4261](https://github.com/HKUDS/nanobot/issues/4261) | **GPT-5.x 参数不兼容**：`max_tokens` 被弃用，需 `max_completion_tokens` | ✅ **PR #4263 已提交**（axelray-dev, 2026-06-09） |
| 🟢 **低** | [#4262](https://github.com/HKUDS/nanobot/issues/4262) | **Agent 模式启动图标**：首次显示 "puppy" 而非用户自定义 `botIcon` | ❌ 无 PR，体验瑕疵 |

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| **对话级模型覆盖** | [#4253](https://github.com/HKUDS/nanobot/issues/4253) | ⭐⭐⭐⭐ 高 | 多模型工作流已成用户刚需，与现有 preset 系统可自然扩展；需设计 per-conversation 配置持久化 |
| **StepFun ASR 语音转录** | [#4260](https://github.com/HKUDS/nanobot/pull/4260) | ⭐⭐⭐⭐⭐ 极高 | PR 已完整实现（SSE 流解析、registry 注册、默认模型配置），代码质量就绪 |
| **botIcon Agent 启动一致** | [#4262](https://github.com/HKUDS/nanobot/issues/4262) | ⭐⭐⭐⭐ 高 | 单点修复，配置系统已存在，实现成本低 |
| **Dream 身份文件保护** | [#3400](https://github.com/HKUDS/nanobot/pull/3400) | ✅ **已合并** | 用户可控 AI 边界的趋势性需求 |
| **飞书 LaTeX** | [#3434](https://github.com/HKUDS/nanobot/pull/3434) | ✅ **已合并** | 企业场景深度适配 |

**下一版本信号**：ASR 多提供商扩展（StepFun）、模型动态切换、内存架构重构（污染修复 + idleCompact 策略优化）构成核心方向。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 | 核心不满 |
|:---|:---|:---|
| **"我需要两个大脑"** | [#4253](https://github.com/HKUDS/nanobot/issues/4253) rombert | 隐私任务 vs 效率任务被迫二选一，全局配置僵化 |
| **"纠正被系统遗忘"** | [#4264](https://github.com/HKUDS/nanobot/issues/4264) imkuang | 多轮纠错后正确结果因压缩窗口设计被排除，历史留下错误记录 |
| **"消息凭空消失"** | [#4267](https://github.com/HKUDS/nanobot/pull/4267) Syoc | WebUI 间歇性丢消息，因与速度相关难以复现，信任感崩塌 |

### 使用场景洞察

- **双模型策略**：OpenRouter（公开知识、快速响应）+ 本地 llama.cpp（代码/隐私文档）的交替使用已成典型模式
- **纠错密集型工作流**：编程、数据分析等场景中，用户纠正 AI 错误是常态，当前压缩机制未为此优化

### 满意度信号

- 文档重构 PR [#4177](https://github.com/HKUDS/nanobot/pull/4177) 显示社区主动解决"上手难"——反向印证此前入门体验不佳
- 飞书 LaTeX、Dream 边界控制等 PR 的合并，反映企业/高级用户对**可控性**与**专业表达**的重视

---

## 8. 待处理积压

### 需维护者紧急关注

| Issue/PR | 天数 | 风险 | 建议行动 |
|:---|:---|:---|:---|
| [#4259](https://github.com/HKUDS/nanobot/issues/4259) **history 跨会话污染** | 1 天（新） | 🔴 **架构腐蚀**：长期运行后所有会话上下文相互污染，AI 行为不可预测 | 指派内存子系统负责人，评估 `ContextBuilder` 隔离改造或 `history.jsonl` 结构变更 |
| [#4061](https://github.com/HKUDS/nanobot/issues/4061) **OpenAI 兼容工具调用解析** | 11 天 | 🟡 提供商兼容性断裂，影响生态扩展 | 需确认是否为结构化输出规范差异，或需增加文本→结构化启发式解析层 |
| [#4264](https://github.com/HKUDS/nanobot/issues/4264) **idleCompact 窗口策略** | 1 天（新） | 🟡 历史质量衰减，用户信任下降 | 评估"语义压缩"替代"固定消息数排除"，或保留用户显式标记的关键消息 |

### 长期未响应提醒

| PR | 天数 | 状态 | 阻塞原因推测 |
|:---|:---|:---|:---|
| [#4193](https://github.com/HKUDS/nanobot/pull/4193) **内存生命周期测试框架** | 6 天 | OPEN | 可能等待 #4259 架构决策，避免测试覆盖错误设计 |
| [#4119](https://github.com/HKUDS/nanobot/pull/4119) **符号链接逃逸防护** | 10 天 | OPEN | 安全类 PR，需仔细审计，可能人力瓶颈 |
| [#4053](https://github.com/HKUDS/nanobot/pull/4053) **只读根目录保护** | 12 天 | OPEN | 与 #4119 同属文件系统安全，可合并评审 |
| [#3983](https://github.com/HKUDS/nanobot/pull/3983) **Runner 阻塞工具调用测试** | 17 天 | OPEN | 测试基础设施，优先级可能被功能开发挤压 |
| [#3982](https://github.com/HKUDS/nanobot/pull/3982) **Agent Runner 测试框架** | 17 天 | OPEN | 同上，yu-xin-c 批量测试 PR 需统一评审窗口 |

---

*日报生成时间：2026-06-10 | 数据来源：HKUDS/nanobot GitHub 公开活动*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-06-10

---

## 1. 今日速览

Hermes Agent 今日保持**极高社区活跃度**，24小时内产生 **50 条 Issues 更新**（45 条新开/活跃，仅 5 条关闭）和 **50 条 PR 更新**（46 条待合并，4 条已合并/关闭）。无新版本发布，项目处于密集开发迭代期。核心关注点集中在**远程访问体验**（Dashboard CORS/VPN 支持）、**安全与隐私**（密码脱敏漏洞）、**macOS 网关稳定性**（launchd 重启故障）三大领域。社区对多模型自主路由、内存命名空间隔离等架构级功能讨论持续升温，但 PR 合并率偏低（8%），需关注代码审查瓶颈。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 今日已合并/关闭的 PR（4 条）

| PR | 作者 | 内容 | 影响 |
|:---|:---|:---|:---|
| [#43109](https://github.com/NousResearch/hermes-agent/pull/43109) | OutThisLife | **fix(desktop)**: 远程网关场景下文件拖放支持 — 将 Finder 拖放的文件 staging 到远程 session workspace，解决 PDF/CSV 等非图片文件在 VPS 网关环境下无法送达 agent 的问题 | 修复远程桌面核心体验断裂点 |
| [#43171](https://github.com/NousResearch/hermes-agent/pull/43171) | djdlzl | **fix**: cron 交付镜像与 ACP 覆盖清理 — 无 agent 的 cron 交付后镜像到网关 session transcript，清理不支持 ACP stdio 的 CLI 的 delegate 覆盖 | 提升 cron 可观测性，减少配置污染 |
| — | — | 另有 2 条关闭 PR 未在数据中详列 | — |

### 关键推进中的 PR（高价值待合并）

| PR | 作者 | 状态 | 价值 |
|:---|:---|:---|:---|
| [#43181](https://github.com/NousResearch/hermes-agent/pull/43181) | edufalcao | **OPEN** | 修复 macOS `hermes update` 后 launchd job 未加载的致命网关故障（对应 Issue #42006） |
| [#43067](https://github.com/NousResearch/hermes-agent/pull/43067) | KiruyaMomochi | **OPEN** | 修复上下文压缩后消息丢失 + 用户 follow-up 合并为单轮的 P1 级数据丢失 bug |
| [#43185](https://github.com/NousResearch/hermes-agent/pull/43185) | rafaumeu | **OPEN** | `delegate_tool` 多 provider 覆盖的评审后修复版，解决批量任务模型隔离需求 |
| [#43187](https://github.com/NousResearch/hermes-agent/pull/43187) | Tranquil-Flow | **OPEN** | Bedrock 命名 AWS profile 配置生效修复 |

**整体评估**：今日合并量偏低，但待合并 PR 质量较高，集中在**数据持久化安全**、**网关生命周期可靠性**、**多模型调度**三个战略方向。项目处于"厚积"阶段，需加速审查闭环以释放进展信号。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 👍 | 核心诉求 |
|:---|:---|:---:|:---:|:---|
| 1 | [#10567](https://github.com/NousResearch/hermes-agent/issues/10567) Add `--host` and CORS config for dashboard remote access | 8 | 11 | **远程/内网部署刚需**：Tailscale/VPN 场景下 Dashboard 硬编码 `127.0.0.1` 和 localhost CORS 阻断访问，企业用户和自托管场景强烈需要可配置的 bind 地址和 origin 白名单 |
| 2 | [#43083](https://github.com/NousResearch/hermes-agent/issues/43083) 密码脱敏后模型读取历史导致二次工具调用失败 | 6 | 0 | **安全-功能冲突**：深度防御的 `***` 脱敏被模型误读为真实参数，引发工具链断裂，反映"安全加固"与"模型推理一致性"的设计张力 |
| 3 | [#16525](https://github.com/NousResearch/hermes-agent/issues/16525) 暴露 `model_switch` 为 agent 可调工具 | 6 | 2 | **自主智能体架构**：用户希望 agent 能基于任务复杂度自决策路由模型，而非依赖人工 `/model` 命令或子代理委托，这是向"自我改进 agent"演进的关键能力 |
| 4 | [#42006](https://github.com/NousResearch/hermes-agent/issues/42006) macOS launchd 重启缺失 `bootout` | 5 | 0 | **平台稳定性**：`hermes update` 后网关无法重启，launchd 残留注册导致 bootstrap 拒绝，影响 macOS 生产环境可用性 |
| 5 | [#10674](https://github.com/NousResearch/hermes-agent/issues/10674) Dashboard 多 profile 切换支持 | 5 | 2 | **多租户体验**：CLI 已支持多 profile，但 Web UI 单进程单 `HERMES_HOME` 绑定造成切换摩擦，需架构级重设计 |

### 诉求分析

- **基础设施层**（#10567, #42006）：自托管用户群体扩大，网络绑定和系统服务集成成熟度不足成为 adoption 瓶颈
- **智能体自主性**（#16525, #38954）：社区从"更好的 CLI 工具"期待转向"能自我管理的 agent 系统"，模型路由决策权下放是核心信号
- **安全可用平衡**（#43083）：防御性编程与 LLM 行为预测的冲突需要更精细的方案（如结构化脱敏标记而非文本替换）

---

## 5. Bug 与稳定性

### P1（严重）— 数据丢失/核心功能断裂

| Issue | 描述 | Fix PR 状态 |
|:---|:---|:---|
| [#43083](https://github.com/NousResearch/hermes-agent/issues/43083) | 密码脱敏 `***` 被模型读取为历史记录，二次工具调用失败 | ❌ **无** — 需设计级决策（脱敏标记格式 vs 模型提示工程） |
| [#43014](https://github.com/NousResearch/hermes-agent/issues/43014) | `deliver=origin` 在 CLI session 中无法解析交付目标 | ❌ **无** — cron 交付链路断裂 |
| [#43067](https://github.com/NousResearch/hermes-agent/pull/43067) *(PR)* | 上下文压缩后 assistant 消息丢失 + follow-up 合并 | 🔄 **PR 待合并** #43067 |

### P2（高优先级）

| Issue | 描述 | Fix PR 状态 |
|:---|:---|:---|
| [#42006](https://github.com/NousResearch/hermes-agent/issues/42006) | macOS launchd 重启失败，网关更新后无法恢复 | 🔄 **PR 待合并** #43181 |
| [#43026](https://github.com/NousResearch/hermes-agent/issues/43026) | Gemini OpenAI 兼容端点返回 HTTP 400/404 | ❌ **无** |
| [#37968](https://github.com/NousResearch/hermes-agent/issues/37968) | cron 网关审批环境隔离漏洞（CVSS 7.0 High） | ❌ **无** — 安全 issue 长期未闭环 |
| [#34070](https://github.com/NousResearch/hermes-agent/issues/34070) | Honcho memory prefetch 在 v0.15.0 冷启动子进程挂起（#27190 回归） | ❌ **无** |

### P3（中优先级）

| Issue | 描述 | Fix PR 状态 |
|:---|:---|:---|
| [#43042](https://github.com/NousResearch/hermes-agent/issues/43042) | Desktop 文件浏览器 `session.info` CWD 覆盖导致 ENOENT | ❌ **无** — 标记 duplicate，需确认主 issue |
| [#43054](https://github.com/NousResearch/hermes-agent/issues/43054) | Gmail 仅返回顶层 MIME，嵌套/转发邮件正文丢失 | ❌ **无** |
| [#43117](https://github.com/NousResearch/hermes-agent/issues/43117) | `hermes plugins enable` 拒绝运行时支持的 pip entry-point 插件 | ❌ **无** |
| [#43122](https://github.com/NousResearch/hermes-agent/issues/43122) | 消息 provider 图标深色主题不可见 | ❌ **无** |

---

## 6. 功能请求与路线图信号

### 高信号强度（有 PR 支撑或架构讨论深入）

| 功能 | Issue/PR | 纳入下一版本概率 | 判断依据 |
|:---|:---|:---:|:---|
| **Dashboard 远程访问/CORS 配置** | #10567 | 🔶 **高** | 11 👍，企业场景刚需，改动边界清晰（`web_server.py` + CLI 参数） |
| **Agent 自主模型路由** | #16525, #38954, **PR #43134/#43185** | 🔶 **高** | PR 已迭代至评审修复版，delegate_tool 多 provider 覆盖是基础设施 |
| **Bedrock `service_tier`/`profile` 支持** | #31322, **PR #43187** | 🟢 **极高** | PR 已开，修复配置生效问题，AWS 企业用户刚需 |
| **You.com 搜索/研究后端** | **PR #13314** | 🔶 **中高** | 4月 PR 持续更新，web 后端扩展对 research 场景有价值 |
| **Desktop i18n 多语言（15 语言）** | **PR #38846** | 🔶 **中高** | 与上游 v0.16.0 原生 i18n 骨架并存，需合并策略决策 |

### 架构级需求（长期路线图信号）

| 功能 | Issue | 概率 | 关键障碍 |
|:---|:---|:---:|:---|
| **Profile 级内存命名空间隔离** | #4726 | 🔶 **中** | 需重构 holographic memory 的 SQLite schema，影响现有用户数据 |
| **多 profile Dashboard 切换** | #10674 | 🔶 **中** | 需重新设计 session 绑定架构，与 #4726 有关联 |
| **OpenSSF Scorecard 安全健康检查** | #43074 | 🟢 **高** | 纯 CI 工作流添加，低阻力高价值 |
| **Telegram inline keyboard 审批** | #42696 | 🔶 **中高** | 已有 `send_exec_approval()` 基础，扩展至 agent 审批短语 |

### 争议性/需谨慎评估

| 功能 | Issue | 风险 |
|:---|:---|:---|
| **execute_code "YOLO mode" 禁用审批** | #42921 | 安全边界问题，与现有 `subagent_auto_approve` 等配置语义冲突，需统一"自动审批"框架 |
| **clarify tool MAX_CHOICES 可配置** | #43056 | 低改动成本，但需评估对 agent 决策质量的长期影响 |

---

## 7. 用户反馈摘要

### 真实痛点

> *"Tailscale 上无法访问 Dashboard，CORS 硬编码 localhost"* — #10567
> 
> **场景**：团队内网/零信任网络部署，Dashboard 作为共享监控界面
> 
> **不满**：绑定地址和 CORS 双硬编码，无 override 路径

> *"密码变成 *** 后，模型第二次调用工具时读历史记录，把 *** 当真实密码传"* — #43083
> 
> **场景**：安全敏感环境使用 agent 管理凭证
> 
> **不满**：防御性脱敏与模型上下文理解机制冲突，"安全"反而导致功能失败

> *"macOS 上 `hermes update` 后网关起不来，launchctl bootstrap 报已注册"* — #42006
> 
> **场景**：自动化更新后的服务恢复
> 
> **不满**：平台原生集成（launchd）的边界情况未覆盖，更新=宕机

> *"Ollama 本地模型 spinner 转 30 秒，终端被占住"* — #43028
> 
> **场景**：本地慢模型开发调试
> 
> **不满**：进度指示器未适配长尾延迟场景，缺乏 quiet 模式自动降级

### 满意/期待点

- **多模型路由灵活性**：用户对 `delegate_tool` 按任务指定 model/provider（#43134）反应积极，期待"一个 agent 协调不同能力模型"的工作流
- **Telegram 网关成熟度**：inline keyboard 审批（#42696）和上下文统计展示（#42989）反馈显示用户将 Telegram 作为生产级交互入口
- **内存生态开放**：usememos 集成请求（#42506，已关闭）反映用户对"个人知识库+agent 记忆"联动的兴趣

---

## 8. 待处理积压

### 长期活跃未闭环的重要 Issue

| Issue | 创建 | 最后更新 | 天数 | 风险 | 行动建议 |
|:---|:---|:---|:---:|:---|:---|
| [#10567](https://github.com/NousResearch/hermes-agent/issues/10567) Dashboard 远程访问 | 2026-04-15 | 2026-06-09 | **56** | 企业 adoption 阻断 | 指派 owner，评估与 #10674 多 profile 的联合设计 |
| [#4726](https://github.com/NousResearch/hermes-agent/issues/4726) Profile 级内存命名空间 | 2026-04-03 | 2026-06-09 | **68** | 多 agent 部署数据污染 | 纳入 v0.17 架构评审，与 memory plugin 重构同步 |
| [#16525](https://github.com/NousResearch/hermes-agent/issues/16525) Agent 自主 model_switch | 2026-04-27 | 2026-06-09 | **44** | 自主 agent 能力缺口 | PR #43134/#43185 合并后自然闭环，需加速审查 |
| [#10674](https://github.com/NousResearch/hermes-agent/issues/10674) Dashboard 多 profile | 2026-04-16 | 2026-06-09 | **55** | 与 CLI 体验不一致 | 需产品决策：Dashboard 是否支持多进程架构？ |

### 高价值 PR 审查瓶颈

| PR | 创建 | 状态 | 阻塞原因 |
|:---|:---|:---|:---|
| [#13314](https://github.com/NousResearch/hermes-agent/pull/13314) You.com 后端 | 2026-04-21 | 待合并 50 天 | 第三方 API 依赖、测试覆盖、与现有 web backend 的抽象统一 |
| [#14390](https://github.com/NousResearch/hermes-agent/pull/14390) 网关运行时稳定 + 测试绿化 | 2026-04-23 | 待合并 48 天 | 跨套件 mock 污染修复涉及面广，需核心维护者深度 review |
| [#38846](https://github.com/NousResearch/hermes-agent/pull/38846) Desktop i18n 15 语言 | 2026-06-04 | 与上游 i18n 骨架冲突 | 需决策：合并为统一系统，还是维持双轨？ |

---

**日报生成时间**：2026-06-10  
**数据来源**：NousResearch/hermes-agent GitHub 公开活动  
**分析师**：AI 智能体与开源项目分析系统

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-06-10

## 1. 今日速览

PicoClaw 今日迎来**安全审计密集爆发日**，同一安全研究员（YLChen-007）集中提交 **10 个安全漏洞**，涵盖 SSRF 绕过、认证绕过、CSRF、命令注入等多个高危类别，项目安全态势面临严峻考验。与此同时，社区保持高活跃度：Issues 更新 20 条（18 活跃/2 关闭）、PR 更新 20 条（15 待合并/5 已合并），并发布 v0.2.9-nightly 构建。值得注意的是，历史消息显示问题（#2796）和 Claude 模型温度参数兼容性问题（#2939）终获关闭，但安全债务的集中暴露成为今日最大变量。

---

## 2. 版本发布

### 🔖 v0.2.9-nightly.20260609.46b29a0a
- **类型**: 自动化夜间构建
- **稳定性**: ⚠️ 不稳定（明确标注 "may be unstable"）
- **变更范围**: 自 v0.2.9 以来 main 分支全部累积变更
- **完整变更日志**: https://github.com/sipeed/picoclaw/compare/v0.2.9...main

> **迁移注意事项**: 夜间构建不建议用于生产环境。鉴于今日大量安全漏洞披露，建议等待官方安全补丁版本而非直接使用此 nightly。

---

## 3. 项目进展

### ✅ 已合并/关闭的重要 PR

| PR | 作者 | 说明 | 链接 |
|:---|:---|:---|:---|
| **#3064** | chengzhichao-xydt | 修复配置迁移中的 panic：为模型名称类型断言添加 `ok` 检查，避免非字符串值导致崩溃 | [链接](https://github.com/sipeed/picoclaw/pull/3064) |
| **#2942** | LegendAlessandro-Liguori | 修正默认 Claude 模型 ID 格式：将 `claude-sonnet-4.6`（点号）改为标准连字符格式，解决全新安装首次调用即失败的问题 | [链接](https://github.com/sipeed/picoclaw/pull/2942) |
| **#2940** | LegendAlessandro-Liguori | 修复 `claude-opus-4-7` 兼容性问题：对该模型省略 `temperature` 参数，解决 HTTP 400 错误 | [链接](https://github.com/sipeed/picoclaw/pull/2940) |
| **#3086** | imguoguo | 更新微信二维码文档 | [链接](https://github.com/sipeed/picoclaw/pull/3086) |

### 📊 进展评估
- **稳定性提升**: 配置系统健壮性增强（panic 防护 + 模型 ID 规范化）
- **生态兼容**: Anthropic 最新模型适配完成
- **安全响应滞后**: 10 个安全 issue 中仅 1 个有对应 PR（#3085 针对 SSRF IP 段），其余 9 个尚无修复方案

---

## 4. 社区热点

### 🔥 讨论最活跃的议题

| 排名 | Issue/PR | 评论数 | 核心诉求 | 链接 |
|:---|:---|:---:|:---|:---|
| 1 | **#2404** 流式 HTTP 请求配置支持 | **11 条** | 用户强烈要求原生支持 `stream=True` 的 LLM 后端调用，对标 Python OpenAI 客户端体验 | [链接](https://github.com/sipeed/picoclaw/issues/2404) |
| 2 | **#2796** [已关闭] 历史消息显示不全 | 6 条 | 多轮对话中仅显示最后一条用户消息的问题终获修复 | [链接](https://github.com/sipeed/picoclaw/issues/2796) |
| 3 | **#2939** [已关闭] Claude 温度参数废弃 | 2 条 | 新模型 API 变更的兼容性适配 | [链接](https://github.com/sipeed/picoclaw/issues/2939) |

**诉求分析**: 
- **#2404** 反映用户对"实时响应体验"的迫切需求——当前非流式等待严重影响交互感知，且该 issue 自 4 月创建已逾 2 个月，社区耐心正在消耗。
- **#2984**（WebSocket 回合完成信号，1 评论）与 #2404 形成呼应：流式传输需要明确的协议边界信号，两者应协同设计。

---

## 5. Bug 与稳定性

### 🚨 今日报告的安全漏洞（按严重程度排列）

| 严重度 | Issue | 标题 | 已有 Fix PR | 链接 |
|:---|:---|:---|:---:|:---|
| **🔴 严重** | #3072 | **CSRF 漏洞**: 首次运行密码设置端点允许本地控制平面接管 | ❌ | [链接](https://github.com/sipeed/picoclaw/issues/3072) |
| **🔴 严重** | #3080/#3069 | **launcher `allowed_cidrs` 绕过**: 通过同主机反向代理/环回代理绕过网络访问控制 | #3083（部分） | [链接](https://github.com/sipeed/picoclaw/issues/3080) [链接](https://github.com/sipeed/picoclaw/issues/3069) |
| **🔴 严重** | #3078/#3077/#3074 | **SSRF 多重绕过**: HTTP 代理环境变量、198.18.0.0/15 基准测试段、ISATAP IPv6 嵌套私有地址 | #3085（仅 198.18.0.0/15） | [链接](https://github.com/sipeed/picoclaw/issues/3078) [链接](https://github.com/sipeed/picoclaw/issues/3077) [链接](https://github.com/sipeed/picoclaw/issues/3074) |
| **🟠 高危** | #3082 | **Feishu `allow_from` 绕过**: 回复消息获取父消息时未重新校验发送者身份 | ❌ | [链接](https://github.com/sipeed/picoclaw/issues/3082) |
| **🟠 高危** | #3081 | **Approval hook 目录遍历**: `cwd` 符号链接竞争导致 exec 在未经审批目录执行 | ❌ | [链接](https://github.com/sipeed/picoclaw/issues/3081) |
| **🟠 高危** | #3079 | **Exec 命令白名单绕过**: `jq` 命令跳过拒绝模式执行，导致环境信息泄露 | ❌ | [链接](https://github.com/sipeed/picoclaw/issues/3079) |
| **🟠 高危** | #3076 | **WeCom 触发策略绕过**: 未 @ 提及的群消息可到达 Agent 运行时 | ❌ | [链接](https://github.com/sipeed/picoclaw/issues/3076) |
| **🟡 中危** | #3075 | **Skills 元数据自动加载**: 当前工作目录下的 `skills/` 被自动注入系统提示，存在供应链攻击面 | ❌ | [链接](https://github.com/sipeed/picoclaw/issues/3075) |
| **🟡 中危** | #3073 | **LINE Webhook 重放攻击**: 相同签名交付可被重复执行 | ❌ | [链接](https://github.com/sipeed/picoclaw/issues/3073) |
| **🟡 中危** | #3071 | **WebSocket 配置重载越权**: 认证客户端可触发网关配置重载 | ❌ | [链接](https://github.com/sipeed/picoclaw/issues/3071) |
| **🟡 中危** | #3070 | **OneBot 媒体 URL 任意获取**: 攻击者控制 URL 导致服务端请求伪造 | ❌ | [链接](https://github.com/sipeed/picoclaw/issues/3070) |
| **🟡 中危** | #3068 | **MQTT `allow_from` 绕过**: 伪造 topic 中的 `client_id` 绕过授权 | ❌ | [链接](https://github.com/sipeed/picoclaw/issues/3068) |

### ✅ 已修复的常规 Bug
- **#2796** 历史消息显示不全 → PR #2990 修复（已合并）
- **#2939** Claude 温度参数兼容 → PR #2940 修复（已合并）

---

## 6. 功能请求与路线图信号

| 功能需求 | Issue/PR | 状态 | 纳入可能性评估 |
|:---|:---|:---|:---|
| **流式 HTTP 请求配置** | #2404 | 开放，11 评论 | ⭐⭐⭐⭐⭐ 高需求、明确方案，预计 v0.3.0 纳入 |
| **WebSocket 回合完成信号** | #2984 | 开放，stale | ⭐⭐⭐⭐☆ 协议层必要补充，需与 #2404 协同 |
| **vodozemac 替换 libolm** | #3088 | 开放，今日创建 | ⭐⭐⭐⭐☆ 安全债务驱动，libolm 已废弃，优先级上升 |
| **DeltaChat 网关** | PR #3063 | 待合并 | ⭐⭐⭐☆☆ 新渠道扩展，需评估维护负担 |
| **NEAR AI Cloud 提供商** | PR #2917 | stale 待合并 | ⭐⭐⭐☆☆ TEE 能力契合安全强化方向 |
| **Agent 协作总线** | PR #2937 | 已关闭 | ⭐★☆☆☆ 架构复杂度高，可能回炉重设计 |

**路线图信号**: 安全漏洞的集中暴露将迫使项目优先处理基础设施加固（SSRF 防护、认证体系、输入校验），新功能节奏可能放缓。

---

## 7. 用户反馈摘要

### 😫 真实痛点
> *"消息压缩应该是针对大模型的，对用户显示的历史消息应该完整"* —— EverestSnow, #2796

**核心矛盾**: 上下文压缩机制侵入用户可见层，导致多轮对话体验断裂。修复后用户应验证是否彻底解决。

### 😤 兼容性焦虑
> *"全新安装首次消息即失败"* —— 模型 ID 格式不匹配（#2942）、温度参数废弃（#2939）

**信号**: 上游 LLM 提供商 API 变更频繁，用户期望 PicoClaw 提供更主动的适配机制，而非被动响应。

### 🙏 体验诉求
> *"Like python openai client `stream=True`"* —— OuSatoru, #2404

**深层需求**: 开发者希望 PicoClaw 的配置抽象层不牺牲底层 LLM 的原生能力，"配置即代码"的灵活性期待。

### 🔒 安全信任危机（新增）
YLChen-007 的 10 个漏洞披露显示：
- 攻击面覆盖 **6 个渠道**（Feishu、WeCom、LINE、OneBot、MQTT、WebSocket）
- **3 类架构性缺陷**: 网络访问控制信任链断裂、输入校验不完整、权限边界模糊

---

## 8. 待处理积压

### ⏳ 长期未响应的高价值 PR

| PR | 创建日期 | 停滞天数 | 风险 | 链接 |
|:---|:---|:---:|:---|:---|
| **#2937** Agent 协作总线 | 2026-05-24 | 16 天 | 架构 PR 关闭后无后续，社区协作需求被搁置 | [链接](https://github.com/sipeed/picoclaw/pull/2937) |
| **#2917** NEAR AI Cloud 提供商 | 2026-05-21 | 19 天 | TEE/去中心化 AI 赛道布局延迟 | [链接](https://github.com/sipeed/picoclaw/pull/2917) |

### ⚠️ 需维护者紧急介入的安全 Issue

| Issue | 优先级理由 | 建议行动 |
|:---|:---|:---|
| #3072 CSRF | 本地控制平面完全接管，攻击门槛低 | 48 小时内评估修复方案 |
| #3080/#3069 CIDR 绕过 | 部署架构常见场景（反向代理后） | 与 PR #3083 协同完善 |
| #3078/#3074 SSRF 代理绕过 | 云环境常见配置，利用难度低 | 统一 SSRF 防护架构审查 |
| #3081 符号链接竞争 | 审批机制的核心安全承诺被破坏 | 设计层面修复，非简单补丁 |

### 📋 综合健康度评估

| 维度 | 评分 | 说明 |
|:---|:---:|:---|
| 社区活跃度 | ⭐⭐⭐⭐☆ | 20+ 更新/日，但安全议题占比过高 |
| 响应及时性 | ⭐⭐⭐☆☆ | 常规 Bug 修复尚可，安全响应尚未启动 |
| 代码质量 | ⭐⭐⭐☆☆ | 类型断言 panic、错误处理遗漏等基础问题仍存在 |
| 安全态势 | ⭐★☆☆☆ | **红色警报**：10 个漏洞单日暴露，防护体系存在系统性缺陷 |
| 路线图清晰度 | ⭐⭐⭐☆☆ | 流式传输等需求明确，但安全债务可能打乱节奏 |

---

> **分析师备注**: 建议 PicoClaw 维护团队立即召开安全响应会议，对 YLChen-007 披露的漏洞进行 CVSS 评级和修复排期。同时考虑建立安全漏洞赏金计划，将外部审计能力转化为持续的安全生态共建。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-06-10

> **项目**: [nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw) | **日期**: 2026-06-10 | **数据周期**: 过去24小时

---

## 1. 今日速览

NanoClaw 今日呈现**高强度代码审查与积压清理**特征：24小时内 **39 条 PR 被合并/关闭**，但 **4 条 PR 仍待合并**，无新 Issue 产生。社区活跃度体现在大规模历史 PR 的集中处置（多为 2026年2-4月创建），显示维护团队正在进行季度性债务清理。唯一活跃 Issue #1690 聚焦多运行时 Agent SDK 抽象，反映项目正从单一 Claude 依赖向多模型生态演进的关键转型期。**整体健康度：稳健，但需关注待合并安全修复的响应速度。**

---

## 2. 版本发布

**无新版本发布。** 最新 Release 仍待维护者推送。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR（按影响面排序）

| PR | 作者 | 类型 | 关键进展 |
|:---|:---|:---|:---|
| [#2722](https://github.com/nanocoai/nanoclaw/pull/2722) | dweekly | **安全修复** | Telegram 配对码从 `Math.random` 迁移至 `crypto.randomInt`，消除可预测性漏洞；收紧存储权限 |
| [#1605](https://github.com/nanocoai/nanoclaw/pull/1605) | ebenezer-isaac | **安全架构** | 确定性安全策略引擎落地：用户门控、工具限制、只读挂载，**非基于提示的强制执行** |
| [#1309](https://github.com/nanocoai/nanoclaw/pull/1309) | tysoncung | **生态基建** | Skill Marketplace/Registry 系统完成，支持 GitHub 托管技能的发现、安装、管理 |
| [#1285](https://github.com/nanocoai/nanoclaw/pull/1285) | lpoee | **运行模式** | 直接运行器模式（`NANOCLAW_DIRECT_RUNNER=1`），绕过 Docker 容器，降低资源开销 |
| [#1245](https://github.com/nanocoai/nanoclaw/pull/1245) | akshan-main | **治理能力** | `/approve` `/reject` 技能上线，实现能力变更的审批门控机制 |
| [#1202](https://github.com/nanocoai/nanoclaw/pull/1202) | klapom | **可观测性** | Agent 追踪可观测性 + Web UI（端口3001），完整记录调用链、工具 IO、Token 消耗 |

**整体推进评估**：安全基座（#2722, #1605）+ 生态扩展（#1309）+ 运维灵活性（#1285, #1202）三线并进，项目从"功能验证期"进入"生产就绪期"的特征明显。

---

## 4. 社区热点

### 最活跃讨论：Issue #1690 — 多运行时 Agent SDK 抽象
- **链接**: [nanocoai/nanoclaw#1690](https://github.com/nanocoai/nanoclaw/issues/1690)
- **状态**: Open | 评论: 4 | 👍: 3 | 最后更新: 2026-06-09
- **核心诉求**: 用户 `chiptoe-svg` 已构建基于 NanoClaw 的多运行时抽象层，支持 Claude/Codex/本地模型作为模块化技能安装（类比 `/add-telegram` 频道模式），提出 **AgentRuntime 接口** 标准化提案

**背后信号分析**：
| 维度 | 解读 |
|:---|:---|
| **技术债务** | 当前 NanoClaw 深度绑定 Claude Agent SDK，模型切换需侵入式修改 |
| **社区策略** | 用户主动提供完整实现方案（非纯需求请求），降低维护者采纳成本 |
| **竞争态势** | OpenAI Codex CLI、本地模型（Ollama/LM Studio）分流压力显现 |
| **架构演进** | 与现有 Skill 系统（#1309 Marketplace）天然契合，可能催生 **"模型即技能"** 范式 |

**待决策**: 是否将 `AgentRuntime` 接口纳入核心架构，或维持社区 Skill 层级实现。

---

## 5. Bug 与稳定性

| 严重程度 | 项目 | 状态 | 详情 |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#2722](https://github.com/nanocoai/nanoclaw/pull/2722) | **待合并** | Telegram 配对码可预测性漏洞 — 首个配对者可被提升为 owner，存在权限劫持风险 |
| 🟡 Medium | [#1333](https://github.com/nanocoai/nanoclaw/pull/1333) | 已关闭 | 构建时版本元数据缺失导致日志可观测性不足 |
| 🟢 Low | 历史 PR 清理 | 批量关闭 | #212, #337, #357, #380 等因"Blocked"/"Pending Closure"状态被清理，部分功能（WebUI、Prompt Trace）可能需重新实现 |

**风险提示**: [#2722](https://github.com/nanocoai/nanoclaw/pull/2722) 作为安全修复仍处 **OPEN** 状态（创建于 2026-06-09，即昨日），建议维护者优先审查合并。

---

## 6. 功能请求与路线图信号

| 来源 | 信号 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| Issue #1690 | 多模型运行时抽象 | **高** | 与 #1309 Skill Marketplace 架构协同，社区已提供完整实现 |
| PR #2721 | 技能定制化文档体系 | **高** | 文档 PR，低风险，完善开发者体验 |
| 已关闭 #212 | WebUI 控制面板 | **中（需重启）** | 功能完整但被 Blocked 关闭，可能因架构冲突需重新设计 |
| 已关闭 #1202 | Agent Trace Web UI | **已实现（替代路径）** | 同类功能已通过其他 PR 覆盖 |

**下一版本可能重点**: 多模型支持（#1690）+ 安全策略引擎（#1605）的组合，将定义 NanoClaw 2.x 架构主线。

---

## 7. 用户反馈摘要

从 Issue #1690 评论及历史 PR 提炼：

| 类别 | 反馈内容 |
|:---|:---|
| **痛点** | "Hard to find out which model is being used"（[#1192](https://github.com/nanocoai/nanoclaw/pull/1192)）— 模型黑盒问题 |
| **场景** | 团队需混合使用 Claude（生产）、Codex（代码）、本地模型（隐私/成本），但当前架构强制单一路径 |
| **满意** | Skill 系统的频道类比（`/add-telegram`）直观，用户期望 `/add-codex` `/add-ollama` 同等体验 |
| **不满** | 更新时 "merge fights"（[#2721](https://github.com/nanocoai/nanoclaw/pull/2721)）— 核心代码修改与自定义冲突，亟需技能化隔离 |
| **深层需求** | **"Every change is a skill"** — 零核心修改的扩展哲学（[#2721](https://github.com/nanocoai/nanoclaw/pull/2721) 文档明确） |

---

## 8. 待处理积压

| 项目 | 创建时间 | 当前状态 | 风险说明 |
|:---|:---|:---|:---|
| [#2722](https://github.com/nanocoai/nanoclaw/pull/2722) Telegram 安全修复 | 2026-06-09 | **OPEN / 待合并** | ⚠️ Critical 漏洞，暴露窗口已超24小时 |
| [#2721](https://github.com/nanocoai/nanoclaw/pull/2721) 定制化文档 | 2026-06-09 | **OPEN / 待合并** | 低技术风险，但阻塞开发者 onboarding |
| [#1690](https://github.com/nanocoai/nanoclaw/issues/1690) 多运行时抽象 | 2026-04-07 | Open / 4评论 | 架构级决策，超2个月未闭环，可能流失贡献者 |

**维护者行动建议**：
1. **今日优先**: 合并 [#2722](https://github.com/nanocoai/nanoclaw/pull/2722) 关闭安全窗口
2. **本周内**: 对 [#1690](https://github.com/nanocoai/nanoclaw/issues/1690) 给出架构决策（Accept/Modify/Decline），明确多模型路线
3. **流程改进**: 批量关闭历史 PR 时附迁移说明，避免贡献者困惑（如 #212 WebUI 功能是否彻底废弃）

---

*本日报基于 GitHub 公开数据生成，未包含私有仓库或线下讨论信息。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-06-10

> 项目：nullclaw/nullclaw（github.com/nullclaw/nullclaw）  
> 分析周期：过去 24 小时

---

## 1. 今日速览

NullClaw 过去 24 小时活跃度**中高**，核心维护节奏清晰：Issues 净关闭 4/5，PR 合并 6/7，仅 1 个 Issue 和 1 个 PR 仍处于开放状态。今日主线是**修复近期引入的 Telegram 交互、模型选择、PII 脱敏和配置失效等 4 个稳定性问题**，并合并了跨实例记忆同步这一长期功能 PR（#711）。没有新 Release，社区以 bug 修复和回归治理为主，整体健康度良好，但有一个 agent 定时任务子进程未启动的新 bug 待处理。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 已合并/关闭的 PR（6 条）

| PR | 作者 | 核心贡献 | 链接 |
|:---|:---|:---|:---|
| **#711 Feat/cross memory** | DonPrus | 新增确定性 memory event stream，使多 agent 实例间可同步记忆，不改变单 agent 工作流。这是长期能力基建，为后续多 agent 协作场景铺底。 | [PR #711](https://github.com/nullclaw/nullclaw/pull/711) |
| **#940 fix(models): query base_url for custom OpenAI-compatible providers** | raskevichai | 修复自定义 OpenAI-compatible provider 在 `/models` 菜单中回退到硬编码 Claude 模型列表的问题，改为动态查询 provider 的 `/v1/models`。关闭 #936。 | [PR #940](https://github.com/nullclaw/nullclaw/pull/940) |
| **#945 fix(redaction): reject ISO date/time patterns as false-positive phone matches** | vernonstinebaker | 修复 PII 脱敏将 ISO 日期时间误识别为电话号码（`[PHONE_X]`）的问题。关闭 #944。 | [PR #945](https://github.com/nullclaw/nullclaw/pull/945) |
| **#943 fix(telegram): show typing indicator during callback-query processing** | raskevichai | 修复 Telegram inline 按钮（callback_query）处理期间不显示"typing…"指示器的问题。关闭 #942。 | [PR #943](https://github.com/nullclaw/nullclaw/pull/943) |
| **#939 fix(agent): honor compact_context flag instead of always compacting** | raskevichai | 修复 `AgentConfig.compact_context` 死标志位问题，现在会按配置决定是否压缩上下文，而非每轮都压缩。关闭 #937。 | [PR #939](https://github.com/nullclaw/nullclaw/pull/939) |
| **#947 feat(providers): add Evolink as an OpenAI-compatible provider** | EvoLinkAI | 新增 Evolink 作为一等 OpenAI-compatible provider，支持 GPT-5、Gemini、DeepSeek 等模型统一接入。 | [PR #947](https://github.com/nullclaw/nullclaw/pull/947) |

**整体推进评估：** 今日合并了 1 个架构级功能（cross-memory）+ 4 个用户可见的稳定性修复 + 1 个生态扩展（新 provider）。项目从"近期引入多个回归"转向"集中修复并清理 backlog"，是近两周质量修复的高峰日。

---

## 4. 社区热点

今日所有 Issues/PR 的评论数和反应数均较低（最高评论数仅 1），社区互动偏**静默执行型**，但以下条目反映了核心诉求：

| 条目 | 热度指标 | 背后诉求分析 | 链接 |
|:---|:---|:---|:---|
| **#941 Agent-type cron jobs don't spawn a subprocess — Telegram delivery never happens** | 新 OPEN，1 条评论 | 用户对 `schedule` + `agent` + Telegram 的端到端可靠性提出质疑。这是将 agent 调度与消息投递链串联的关键场景，直接影响自动化工作流的可用性。 | [Issue #941](https://github.com/nullclaw/nullclaw/issues/941) |
| **#936 / #940 Custom OpenAI-compatible provider 模型回退问题** | 已关闭，原 Issue 1 评论 | 社区对"任意 OpenAI-compatible 端点"的诉求强烈，不希望被硬编码到 Claude 生态。PR #940 的合并说明项目正从"内置 provider 优先"转向"开放端点动态发现"。 | [Issue #936](https://github.com/nullclaw/nullclaw/issues/936) · [PR #940](https://github.com/nullclaw/nullclaw/pull/940) |
| **#944 / #945 PII 脱敏误杀日期时间** | 已关闭，0 评论 | 默认开启的 PII 脱敏（`enable_pii_redaction: true`）正在侵蚀基础工具输出质量，用户需要安全与可用性的平衡。 | [Issue #944](https://github.com/nullclaw/nullclaw/issues/944) · [PR #945](https://github.com/nullclaw/nullclaw/pull/945) |

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | 问题 | 状态 | 修复 PR | 链接 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | **Agent 定时任务不启动子进程，Telegram 消息无法投递** | **开放，待修复** | 无 | [Issue #941](https://github.com/nullclaw/nullclaw/issues/941) |
| 🟡 中 | PII 脱敏将 `date` 输出中的日期时间误识别为电话号码 | 已修复 | #945 | [Issue #944](https://github.com/nullclaw/nullclaw/issues/944) |
| 🟡 中 | 自定义 OpenAI-compatible provider 被强制回退到 Claude 模型列表 | 已修复 | #940 | [Issue #936](https://github.com/nullclaw/nullclaw/issues/936) |
| 🟢 低 | Telegram inline 按钮处理时缺少 typing 指示器 | 已修复 | #943 | [Issue #942](https://github.com/nullclaw/nullclaw/issues/942) |
| 🟢 低 | `compact_context` 配置标志位失效（死 flag） | 已修复 | #939 | [Issue #937](https://github.com/nullclaw/nullclaw/issues/937) |

**稳定性总结：** 今日 4 个已关闭 bug 均为 2026-05 下旬至 06 月初引入的回归，修复响应迅速（平均 3-7 天）。唯一开放的高优先级问题 #941 涉及 agent 调度与进程管理的边界，建议优先分配维护者跟进。

---

## 6. 功能请求与路线图信号

| 来源 | 信号 | 纳入下一版本可能性 | 链接 |
|:---|:---|:---|:---|
| **PR #711 cross-memory** | 已合并。为"多 agent 共享记忆"提供 event stream 原语，是路线图级能力。 | **高** — 已合入主干，将在下一版本体现 | [PR #711](https://github.com/nullclaw/nullclaw/pull/711) |
| **PR #947 Evolink provider** | 新增 OpenAI-compatible provider 接入，属于生态扩展。 | **高** — 已合并 | [PR #947](https://github.com/nullclaw/nullclaw/pull/947) |
| **PR #946 tool_filter_groups 过滤系统提示文本中的工具** | 开放中。优化 MCP 工具在系统提示中的暴露策略，平衡功能性与 token 效率。 | **中高** — 代码已提交，待 review | [PR #946](https://github.com/nullclaw/nullclaw/pull/946) |
| **Issue #941 agent cron job** | 表面是 bug，深层反映用户对"调度 agent 作为独立子进程执行"的可靠性需求。 | 中 — 需先修复，再考虑增强可观测性 | [Issue #941](https://github.com/nullclaw/nullclaw/issues/941) |

---

## 7. 用户反馈摘要

从 Issues 中提炼的真实用户声音：

| 痛点/场景 | 来源 | 说明 |
|:---|:---|:---|
| **"调度任务标记完成但什么也没发生"** | #941 | 用户对 silent failure 极度敏感，agent cron job 需要可观测的投递确认机制。 |
| **"自定义 OpenAI 端点应该被平等对待"** | #936 | 用户不希望项目内置的模型列表霸权覆盖自定义 provider 的真实能力。 |
| **"安全功能不应该破坏基础工具输出"** | #944 | 默认开启的 PII 脱敏过度敏感，用户需要在安全与可用性间可调。 |
| **"Telegram 交互细节影响信任感"** | #942 | 缺少 typing 指示器会让用户觉得"按钮没反应"，交互反馈的及时性直接影响产品体感。 |
| **"配置项如果无效请移除，不要假装支持"** | #937 | 用户对死配置项的容忍度低，反映配置系统需要更严格的运行时校验。 |

---

## 8. 待处理积压

| 条目 | 类型 | 状态 | 风险/提醒 | 链接 |
|:---|:---|:---|:---|:---|
| **#941 Agent-type cron jobs don't spawn a subprocess** | Issue | **开放 10 天** | 今日唯一开放 Issue，涉及核心调度-投递链路，建议维护者优先复现并分配修复。 | [Issue #941](https://github.com/nullclaw/nullclaw/issues/941) |
| **#946 fix(agent): filter tools in system prompt text by tool_filter_groups** | PR | **开放 7 天** | 与 MCP 工具治理相关，是 #937/#939 同一维护者（vernonstinebaker）的后续优化，建议尽快 review 避免工具提示策略碎片化。 | [PR #946](https://github.com/nullclaw/nullclaw/pull/946) |

---

**日报结论：** NullClaw 今日处于**高质量修复窗口期**，4 个回归 bug 全部清零，长期功能 cross-memory 落地。当前风险集中在 **#941（agent cron 子进程未启动）**，这是唯一可能阻塞用户自动化场景的问题，建议下一工作日优先处理。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-06-10

> **项目**: nearai/ironclaw | **日期**: 2026-06-10 | **分析区间**: 过去24小时

---

## 1. 今日速览

IronClaw 今日呈现**极高活跃度**，Issues 与 PR 双双突破 40+ 条，显示 Reborn 迁移进入关键冲刺阶段。社区焦点集中在**生产就绪性验证**（#3026 史诗级追踪）、**WebUI v2 端到端测试补全**（#4632 及其子任务群）以及**项目级所有权模型**的新架构落地（#4662-#4664 三连 PR）。代码质量管控同步收紧，两个核心文件因接近/超出 3,000 行架构上限被标记重构（#4665、#4666）。无新版本发布，所有能量集中于主干迭代。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已关闭/合并的重要 Issues（5 条）

| Issue | 说明 | 进展意义 |
|:---|:---|:---|
| [#4604](https://github.com/nearai/ironclaw/issues/4604) | Reborn WebUI v2 浏览器驱动全栈 E2E 缺失问题 | **测试基础设施里程碑**——标志着该缺口被正式识别并进入解决轨道 |
| [#4609](https://github.com/nearai/ironclaw/issues/4609) | WebChat v2 认证对等性审计（Bearer/DB/OIDC/Query-token） | **安全合规**——v1→v2 认证路径映射完成 |
| [#4591](https://github.com/nearai/ironclaw/issues/4591) | Operator 命令平面基础（setup/config/diagnostics/lifecycle API） | **运维能力奠基**——Reborn 生产运维的可观测性基础 |
| [#4447](https://github.com/nearai/ironclaw/issues/4447) | OpenAI 兼容 API 迁移收尾（兼容性+安全测试） | **生态兼容**——#3283 史诗级迁移正式关闭 |
| [#4446](https://github.com/nearai/ironclaw/issues/4446) | 投影流转换为 OpenAI 兼容 SSE | **流式协议对齐**——推理模型流式输出标准化 |

### 已合并/关闭的 PR（8 条中的关键项）

- **#4447/#4446 的关闭** 标志着 OpenAI 兼容层从"功能可用"进入"生产可信"状态，为下游集成者提供稳定契约。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求分析 |
|:---|:---|:---:|:---|
| 1 | [#3026](https://github.com/nearai/ironclaw/issues/3026) Epic: Reborn production wiring and cutover readiness | **3** | **生产阻断性焦虑**——社区需要明确的"生产图构建-验证-报告-熔断"完整故事线，而非分散的子任务 |
| 2 | [#4642](https://github.com/nearai/ironclaw/issues/4642) Strict-mode providers' null-for-unset-optionals rejected | **1** | **LLM 生态兼容性**——OpenAI/Anthropic 等严格模式提供商发送 `null` 表示未设置可选参数，与 IronClaw 的原生非空 schema 冲突，影响"大多数第一方工具" |
| 3 | [#88](https://github.com/nearai/ironclaw/issues/88) Security hardening (device pairing, elevated mode, safe bins, media URL validation) | **1** | **安全基线追赶**——OpenClaw 的安全特性（设备配对、提权模式等）尚未在 IronClaw 完全落地，长期悬而未决 |
| 4 | [#4551](https://github.com/nearai/ironclaw/issues/4551) Reborn: wire production Postgres storage config | **1** | **基础设施即代码**——PostgreSQL 功能已存在但 standalone binary 未暴露配置，生产部署卡壳 |
| 5 | [#4548](https://github.com/nearai/ironclaw/issues/4548) Duplicate `model` field breaks DeepSeek 400 | **1** | **第三方提供商脆弱性**——序列化逻辑缺陷导致 DeepSeek 拒绝请求，工具调用路径的特殊处理逻辑有漏洞 |
| 6 | [#4587](https://github.com/nearai/ironclaw/issues/4587) Cannot configure Minimax provider | **1** | **提供商生态覆盖**——Minimax 配置后密钥元数据读取失败，`api_key_set=false` 误导性报错 |
| 7 | [#4585](https://github.com/nearai/ironclaw/issues/4585) Reborn auth evidence should carry tenant identity | **1** | **多租户架构完整性**——#4495 的 review 遗留，认证证据缺少租户标识导致跨租户验证不可能 |

**诉求模式识别**：今日活跃讨论呈现 **"Reborn 生产化焦虑"** 与 **"LLM 提供商长尾兼容"** 双峰结构。前者是架构债务（配置、验证、熔断），后者是生态位竞争（严格模式、序列化、错误处理）。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR 状态 |
|:---|:---|:---|:---|
| **P0-阻塞** | [#4642](https://github.com/nearai/ironclaw/issues/4642) | 严格模式 LLM 提供商的工具调用因 `null` 值被 capability-port 验证拒绝 | **待修复** — 影响"大多数第一方工具" |
| **P1-高** | [#4548](https://github.com/nearai/ironclaw/issues/4548) | 含 tools 的 chat completion 序列化出重复 `model` 字段，DeepSeek 400 | **待修复** — 根因：工具路径的特殊序列化逻辑 |
| **P1-高** | [#4587](https://github.com/nearai/ironclaw/issues/4587) | Minimax 提供商配置后无法使用，密钥元数据读取失败 | **待修复** — 需诊断 SecretStore 路径 |
| **P1-高** | [#4640](https://github.com/nearai/ironclaw/issues/4640) | Google Calendar `list_events` 无时间下限/排序，返回最旧事件而非即将发生 | **待修复** — 参数透传缺失 |
| **P2-中** | [#4666](https://github.com/nearai/ironclaw/issues/4666) | `slack_host_state.rs` 2,823 行逼近 3,000 行架构上限 | **待重构** — #4600 加剧 |
| **P2-中** | [#4665](https://github.com/nearai/ironclaw/issues/4665) | `slack_host_beta.rs` 3,359 行已超上限，需分解 | **待重构** — 候选拆分方向已给出 |

**稳定性信号**：今日无崩溃/回归报告，但 **#4642 的"大多数第一方工具"受影响** 是显著风险——随着 o1/o3/o4/gpt-5.x 等严格模式模型普及，此缺陷将线性扩大影响面。

---

## 6. 功能请求与路线图信号

| 功能请求 | 来源 | 与现有 PR 的关联 | 纳入下一版本概率 |
|:---|:---|:---|:---:|
| **Omni 统一搜索**（跨 threads/skills/extensions/memory） | [#4647](https://github.com/nearai/ironclaw/issues/4647) | 与 #4632 E2E 测试群同属 M1 WebUI 产品面 | **高** — 设计完整，"fan-out first" 策略务实 |
| **Universal attachments 全渠道附件** | [#4644](https://github.com/nearai/ironclaw/issues/4644) | 依赖 v1 attachment pipeline 移植 + format registry | **中高** — P1 标记，但涉及 4+ 调用点重构 |
| **Slack 渠道路由的个人/团队 Agent** | [#4625](https://github.com/nearai/ironclaw/issues/4625) | 与 #4600 Slack personal DM outbound targets PR 互补 | **高** — #4600 已提供基础设施 |
| **Admin-shared tools/skills 租户内共享** | [#4628](https://github.com/nearai/ironclaw/issues/4628) | 与 #4663 project-scoped ownership 核心模型直接相关 | **高** — 架构底座正在合并 |
| **NEAR mainnet 只读扩展** | [#4661](https://github.com/nearai/ironclaw/pull/4661) | PR 已开，6 个 capability，RuntimeHttpEgress 统一路由 | **极高** — PR 状态开放，风险低 |
| **Persistent approval policies** | [#4613](https://github.com/nearai/ironclaw/pull/4613) | PR 已开，AlwaysAllow 已 wired | **极高** — #4539 子任务，接近完成 |
| **Durable gate resolution store** | [#4656](https://github.com/nearai/ironclaw/pull/4656) | PR 已开，子 agent 持久化核心 | **极高** — WU-C2 规格实现 |

**路线图信号**：**Project-scoped ownership**（#4662-#4664）是今日最强架构信号——它将取代 agent-keyed 共享作用域，成为多租户企业场景的核心抽象，直接影响 #4628（admin 共享）、#4625（Slack 路由）等产品功能的设计。

---

## 7. 用户反馈摘要

### 真实痛点

| 痛点 | 来源 | 场景 |
|:---|:---|:---|
| **"生产图构建后如何验证不服务流量？"** | [#3026](https://github.com/nearai/ironclaw/issues/3026) | 运维工程师需要自动化的"缺失服务/本地-only/未验证"熔断机制，而非人工检查清单 |
| **"用户完成一次 Google OAuth 后仍见多次授权门"** | [#4657](https://github.com/nearai/ironclaw/issues/4657) | GSuite 多 scope 场景下，per-extension 的凭证管理违背用户心智模型 |
| **"Reborn 的 transcript contract 是 text-only，附件静默丢失"** | [#4644](https://github.com/nearai/ironclaw/issues/4644) | 用户从 v1/v2 迁移至 Reborn 后，附件功能退化无感知 |

### 满意/不满意

- **满意**：OpenAI 兼容层迁移最终关闭（#4447），生态集成者有稳定预期
- **不满意**：Reborn 的"生产形状"已具，但"生产曝光"仍缺 owner-level cutover story（#3026 评论）——**"有 substrate，没剧本"**

---

## 8. 待处理积压

### 长期未响应的高价值 Issue

| Issue | 创建日期 | 最后更新 | 风险 | 提醒 |
|:---|:---|:---|:---|:---|
| [#88](https://github.com/nearai/ironclaw/issues/88) Security hardening | 2026-02-14 | 2026-06-09 | **高** | 4 个月未关闭，device pairing/elevated mode/safe bins 均为 OpenClaw 特性 parity，安全基线缺口 |
| [#3026](https://github.com/nearai/ironclaw/issues/3026) Reborn production cutover | 2026-04-28 | 2026-06-09 | **极高** | 史诗级追踪，子任务分散（#4551, #4620, #4621），需明确关闭标准与 owner |
| [#4647](https://github.com/nearai/ironclaw/issues/4647) Omni search | 2026-06-09 | 当日 | 中 | 设计完整但刚创建，需跟踪是否进入迭代 |

### 需维护者关注的 PR 堆积

| PR | 状态 | 风险 | 行动建议 |
|:---|:---|:---|:---|
| [#4492](https://github.com/nearai/ironclaw/pull/4492) Configured extension credential staging | OPEN, XL, DB MIGRATION | **高** | 6 月 5 日创建，涉及 15+ scope，需架构 review 避免成为"永远开放的 PR" |
| [#4559](https://github.com/nearai/ironclaw/pull/4559) Agent-driven Trace Commons onboarding | OPEN, XL | 中 | 6 月 8 日创建，替换 15 CLI flag 的复杂流程，需产品确认 UX 验收标准 |

---

> **健康度评分**: 7.5/10
> - **活跃度**: 9/10（47 Issues / 50 PRs 双高）
> - **稳定性**: 6/10（#4642 影响面大，无 fix PR）
> - **治理**: 7/10（文件大小预算执行中，但 #4492 XL PR 堆积风险）
> - **生态兼容**: 7/10（OpenAI 兼容层关闭是加分项，严格模式/Minimax/DeepSeek 问题待解）

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-06-10

> **项目地址**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
> **分析周期**: 2026-06-09 至 2026-06-10（24小时）

---

## 1. 今日速览

LobsterAI 今日保持**中等活跃度**，代码侧推进显著优于社区互动侧。过去24小时内完成 **4 个 PR 的合并/关闭**，核心围绕 **Cowork 协作通知机制** 与 **数据备份功能** 两条主线；但社区仅产生 **2 条新增 Issue** 且零回复，Issues 关闭率为 0%，用户参与度偏低。值得关注的是，跨模型子任务调用这一**架构级问题**被首次提出，可能暴露多 Agent 编排的深层设计挑战。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### ✅ 已合并/关闭 PR（4 条）

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#2130](https://github.com/netease-youdao/LobsterAI/pull/2130) | liuzhq1986 | **Cowork 任务完成通知系统**：隐私安全的前台状态检测通知，支持 macOS Dock 角标与 Windows 任务栏闪烁 | 补齐多 Agent 协作场景的关键 UX 闭环——用户无需常驻前台即可感知子任务完成 |
| [#2134](https://github.com/netease-youdao/LobsterAI/pull/2134) | liuzhq1986 | **通知系统健壮性增强**：主窗口关闭后从通知恢复、渲染进程就绪等待、macOS Notification Center 点击保活 | 解决 [#2130](https://github.com/netease-youdao/LobsterAI/pull/2130) 的边界场景，生产可用性提升 |
| [#2136](https://github.com/netease-youdao/LobsterAI/pull/2136) | fisherdaddy | **数据备份与迁移功能**（renderer/docs/main 多域） | 用户数据可移植性基础设施，为后续版本迭代降低用户迁移成本 |
| [#2135](https://github.com/netease-youdao/LobsterAI/pull/2135) | fisherdaddy | **临时关闭数据备份**（chore） | 疑似 [#2136](https://github.com/netease-youdao/LobsterAI/pull/2136) 的配套回滚或功能开关控制，策略性收敛 |

**整体评估**：今日代码交付聚焦 **"通知可达性"** 与 **"数据可迁移性"** 两大运维体验维度，Cowork 多 Agent 协作的产品心智持续强化。[#2130](https://github.com/netease-youdao/LobsterAI/pull/2130)+[#2134](https://github.com/netease-youdao/LobsterAI/pull/2134) 形成完整的功能-修复闭环，工程节奏健康。

---

## 4. 社区热点

### 🔥 最具讨论价值 Issue：[#2132 - 跨模型子任务调用的问题](https://github.com/netease-youdao/LobsterAI/issues/2132)

| 指标 | 数据 |
|:---|:---|
| 作者 | woxinsj |
| 评论数 | 0（但内容深度极高） |
| 👍 | 0 |

**核心诉求分析**：

该 Issue 提出了 **M3（规划/监督）+ DeepSeek（执行）** 的异构模型协作架构，并精准定位到根因：`call_function_gblu0nmqpcej_1` 作为**网关级函数调用（gateway function call）** 既不在 `sessions_list` 也不在 `subagents` 中，导致主任务无法感知子任务状态。

作者进一步提出**双轨优化方案**：
1. **同模型子任务的状态同步机制** → 迁移至跨模型场景
2. **子任务主动通知主任务** → 固化为跨模型调用规范

**背后信号**：这反映了社区对 **"模型即角色"** 架构的深度使用，已触及 LobsterAI 当前子 Agent 编排的设计边界。该 Issue 与今日合并的 [#2130](https://github.com/netease-youdao/LobsterAI/pull/2130)/[#2134](https://github.com/netease-youdao/LobsterAI/pull/2134)（任务完成通知）形成**需求-供给呼应**——通知系统已就绪，但跨模型的通知链路尚未打通。

---

## 5. Bug 与稳定性

| 严重级别 | 问题 | 来源 | Fix PR 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | 导出功能与代码复制 Bug | PR [#2133](https://github.com/netease-youdao/LobsterAI/pull/2133)（待合并） | **已有 Fix，待合并** |
| 🟡 中 | 网关级函数调用脱离 sessions/subagents 管控，导致跨模型状态失联 | Issue [#2132](https://github.com/netease-youdao/LobsterAI/issues/2132) | 无 Fix，需架构层面响应 |
| 🟢 低 | 数据备份功能被临时关闭（策略性回滚） | PR [#2135](https://github.com/netease-youdao/LobsterAI/pull/2135) | 已处理 |

> **风险预警**：[#2133](https://github.com/netease-youdao/LobsterAI/pull/2133) 作为唯一 Open PR，修复 renderer + cowork 双域的导出/复制问题，建议优先审阅合并以避免用户体验受损。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 可行性评估 | 纳入下一版本概率 |
|:---|:---|:---|:---|
| **Hermes Agent 支持** | Issue [#2131](https://github.com/netease-youdao/LobsterAI/issues/2131) | 中 | **中等** — 需评估与现有 Cowork 架构的兼容性，但社区呼声明确 |
| **跨模型子任务状态同步机制** | Issue [#2132](https://github.com/netease-youdao/LobsterAI/issues/2132) | 中高 | **高** — 与 [#2130](https://github.com/netease-youdao/LobsterAI/pull/2130)/[#2134](https://github.com/netease-youdao/LobsterAI/pull/2134) 同属通知体系，技术栈复用性强 |
| **子任务主动通知主任务（规范级）** | Issue [#2132](https://github.com/netease-youdao/LobsterAI/issues/2132) | 中 | **中高** — 涉及 Agent 协议层设计，可能需 RFC 流程 |

**路线图推断**：Cowork 协作通知 → 跨模型状态同步 → 异构模型编排规范，构成清晰的演进路径。Hermes Agent 若属同构扩展，可能作为独立里程碑并行推进。

---

## 7. 用户反馈摘要

### 从 Issues 提炼的真实痛点

| 用户 | 场景 | 痛点 | 情绪 |
|:---|:---|:---|:---|
| wtgoku-create | 评估 LobsterAI 与 Hermes 生态集成 | **"有计划吗？"** — 选型前的兼容性确认需求 | 观望/谨慎 |
| woxinsj | 生产级多模型协作（M3+DeepSeek） | **状态黑洞**：网关调用脱离管控，主任务"盲等"子任务 | 焦虑/主动求解 |

### 满意点（间接推断）
- 同模型子任务的状态同步机制被认可为"值得借鉴"，说明现有单模型编排体验达标
- 用户愿意投入深度调试（分析 `sessions_list`、`subagents`、gateway function call 等内部机制），反映工具开放性获信任

### 不满意点
- **跨模型场景成为二等公民**：同模型与跨模型的体验断层明显
- **Issue 零回复**：[#2132](https://github.com/netease-youdao/LobsterAI/issues/2132) 包含完整根因分析与方案设计，但 24 小时内无官方响应，社区参与感薄弱

---

## 8. 待处理积压

| 项目 | 时长 | 风险 | 建议动作 |
|:---|:---|:---|:---|
| **PR [#2133](https://github.com/netease-youdao/LobsterAI/pull/2133)** — 导出/复制 Bug 修复 | 1 天（Open） | 用户体验受损，且为唯一待合并 PR | **@fisherdaddy 优先审阅，建议 24h 内合并或反馈修订意见** |
| **Issue [#2132](https://github.com/netease-youdao/LobsterAI/issues/2132)** — 跨模型子任务架构问题 | 1 天（Open，零回复） | 深度用户可能流失；技术债务累积 | **@维护团队 指派架构负责人响应，至少确认是否纳入路线图** |
| **Issue [#2131](https://github.com/netease-youdao/LobsterAI/issues/2131)** — Hermes Agent 支持 | 1 天（Open，1 评论） | 生态扩展机会窗口 | 标记 `enhancement` + `needs-triage`，纳入季度规划评审 |

---

> **日报生成时间**: 2026-06-10  
> **数据置信度**: 基于 GitHub 公开 API 数据，PR 评论数显示为 `undefined` 可能存在数据抓取异常，建议人工复核。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-06-10

> **数据周期**：2026-06-09 00:00 - 2026-06-09 23:59 UTC  
> **项目地址**：https://github.com/agentscope-ai/CoPaw（原 QwenPaw）

---

## 1. 今日速览

CoPaw 今日保持**高活跃度**，24 小时内 33 条 Issues 更新（16 新开/活跃，17 关闭）、34 条 PR 更新（18 待合并，16 已合并/关闭），并发布 **v1.1.11-beta.2** 新版本。社区聚焦浏览器自动化增强、Windows 桌面端稳定性修复，以及 AgentScope 2.0 迁移等长期架构议题。首次贡献者参与活跃，但部分关键 Bug（如 Windows 路径溢出、桌面端后端端口漂移）仍需合并确认。

---

## 2. 版本发布

### v1.1.11-beta.2 已发布
| 属性 | 内容 |
|:---|:---|
| **版本号** | `1.1.11-beta.2` |
| **发布日期** | 2026-06-09 |
| **类型** | Beta 预发布 |

**更新内容**：
- **feat(browser)**: 为 `browser_control` 添加页面坐标点击支持（`page coordinate click`），扩展浏览器自动化能力 —— PR [#4905](https://github.com/agentscope-ai/QwenPaw/pull/4905) by @bfglx
- **fix(browser)**: 增加 CDP 超时参数与浏览器配置隔离，解决跨浏览器切换时的状态污染问题 —— by @x1n95c

**迁移注意事项**：Beta 版本建议测试环境验证；CDP 超时参数为新增配置项，现有 `browser_control` 调用无需修改但可显式指定以优化稳定性。

---

## 3. 项目进展

### 今日已合并/关闭的重要 PR（16 条）

| PR | 作者 | 核心贡献 | 链接 |
|:---|:---|:---|:---|
| **#5055** | @lalaliat | 版本号提升至 v1.1.11b2，正式标记 Beta 发布 | [PR #5055](https://github.com/agentscope-ai/QwenPaw/pull/5055) |
| **#5049** | @rayrayraykk | **零配置免费模型 + OAuth 一键认证** — 大幅降低新用户上手门槛，支持 OpenRouter 等付费提供商单点登录 | [PR #5049](https://github.com/agentscope-ai/QwenPaw/pull/5049) |
| **#5043** | @hxnan | **OpenSandbox MCP 插件** — 通过 MCP 协议为 Agent 提供隔离代码执行环境，回应 Issue #4951 的安全诉求 | [PR #5043](https://github.com/agentscope-ai/QwenPaw/pull/5043) |
| **#5048** | @rayrayraykk | **关键稳定性修复** — 修复 `_broadcast_to_subscribers` 中未 await 的协程，解决 AgentScope 元类钩子误识别 async 方法导致的运行时异常 | [PR #5048](https://github.com/agentscope-ai/QwenPaw/pull/5048) |
| **#5021** | @qbc2016 | 修复 `/compact` 与自动压缩忽略模型 `max_input_length` 的问题（回退至 128K 默认值），影响长上下文模型如 MiniMax M3 | [PR #5021](https://github.com/agentscope-ai/QwenPaw/pull/5021) |
| **#5054** | @yutai78786 | **E2E CI 管道完整落地** — 后端真实启动、覆盖率收集、修复 flaky 测试，并入 nightly 统一报告 | [PR #5054](https://github.com/agentscope-ai/QwenPaw/pull/5054) |
| **#5056** | @yutai78786 | 清理冗余 `channel-tests.yml` 工作流，减少 CI 资源浪费 | [PR #5056](https://github.com/agentscope-ai/QwenPaw/pull/5056) |
| **#5050** | @zhaozhuang521 | UI 微调：系统主题切换图标从"电脑"改为"太阳"，提升可识别性 | [PR #5050](https://github.com/agentscope-ai/QwenPaw/pull/5050) |
| **#4615** | @weidankong | 修复 ACP 关闭后孤儿进程残留问题 | [PR #4615](https://github.com/agentscope-ai/QwenPaw/pull/4615) |
| **#4857** | @x1n95c | **技能自进化流程增强** — 支持后台 `spawn_subagent(fork=True)` 模式创建自进化技能 | [PR #4857](https://github.com/agentscope-ai/QwenPaw/pull/4857) |

**整体推进评估**：今日合并 PR 覆盖**用户体验**（零配置/OAuth）、**安全基础设施**（OpenSandbox）、**核心稳定性**（协程修复、压缩修复）、**工程效能**（E2E CI）四大维度，项目向 1.1.11 正式版迈出关键一步。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 👍 | 核心诉求 | 链接 |
|:---|:---|:---:|:---:|:---|:---|
| **#1** | 借鉴 Hermes Agent "学习循环"特性 | 10 | 3 | **生态对标焦虑** — 用户认可 CoPaw 本地化优势，但担忧 Hermes（2 个月 46k+ stars）的技术迭代速度，呼吁吸收"自动技能创建与迭代"机制 | [#5017](https://github.com/agentscope-ai/QwenPaw/issues/5017) |
| **#2** | 阿里 Coding Plan qwen3.7-plus 卡死 | 8 | 0 | **生产阻塞** — 特定模型配置下无响应，需排查 provider 兼容性或流式处理逻辑 | [#5003](https://github.com/agentscope-ai/QwenPaw/issues/5003) |
| **#3** | AgentScope 1.x → 2.0 迁移 | 7 | 2 | **架构债务** — 长期开放的 breaking change，涉及新 API、运行时模型适配，社区关注迁移时间表 | [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) |

**背后诉求分析**：
- **#5017** 反映用户对"Agent 自主进化"能力的迫切期待，与今日合并的 #4857（技能自进化）形成呼应，但用户期望的是更系统的"学习循环"架构，非单一功能点
- **#4727** 持续 13 天未关闭，AgentScope 2.0 迁移是制约后续功能扩展的底层瓶颈，需维护者明确里程碑

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重度 | Issue | 描述 | 状态 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|:---|
| 🔴 **高** | **#4988** | Windows 路径溢出：`session_id` 重复拼接导致 `MAX_PATH` 超限，文件无法写入 | **OPEN** | **#5036 待合并** | [#4988](https://github.com/agentscope-ai/QwenPaw/issues/4988) |
| 🔴 **高** | **#5015** | Windows Desktop 前端卡顿：任务执行时会话切换 CPU 激增，影响核心使用场景 | **OPEN** | 无 | [#5015](https://github.com/agentscope-ai/QwenPaw/issues/5015) |
| 🔴 **高** | **#4989** | 本地千问 3.6-27B 无响应：1.1.9/1.1.10 回归，1.1.5.post2 正常，Docker 部署后台无报错 | **OPEN** | 无 | [#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989) |
| 🟡 **中** | **#5045/#5034** | MCP/内置工具名含点号（`pat.batch_plan`）违反 OpenAI `^[a-zA-Z0-9_-]+$` 规范，DeepSeek 等严格校验 API 拒绝 | **CLOSED** | 已修复（`stateful_client.py`） | [#5045](https://github.com/agentscope-ai/QwenPaw/issues/5045) |
| 🟡 **中** | **#5044** | Tauri 桌面版外部链接/下载失效：启动页重定向架构导致系统浏览器调用与文件下载被静默阻止 | **CLOSED** | 已修复 | [#5044](https://github.com/agentscope-ai/QwenPaw/issues/5044) |
| 🟡 **中** | **#5042** | Windows `Open Directory` 无法打开 C 盘外目录 | **CLOSED** | 已修复 | [#5042](https://github.com/agentscope-ai/QwenPaw/issues/5042) |
| 🟡 **中** | **#5030** | 微信频道主动模式重复回复：同一问题两次相似但不完全相同的回复 | **OPEN** | 无 | [#5030](https://github.com/agentscope-ai/QwenPaw/issues/5030) |
| 🟡 **中** | **#5025** | `submit_to_agent` 会话文件路径 Bug：`FileNotFoundError`，前景 `chat_with_agent` 正常 | **OPEN** | **#5036 待合并** | [#5025](https://github.com/agentscope-ai/QwenPaw/issues/5025) |
| 🟢 **低** | **#5031** | Skill `/` 调用在 Console 显示为展开的 `SKILL.md` 内容，暴露内部实现 | **OPEN** | 无 | [#5031](https://github.com/agentscope-ai/QwenPaw/issues/5031) |
| 🟢 **低** | **#5057** | 钉钉 AI Card 空输出仍发空卡片（"处理中..."） | **OPEN** | 无 | [#5057](https://github.com/agentscope-ai/QwenPaw/issues/5057) |

**关键风险**：#4988 + #5025 均由 #5036 统一修复（会话文件名去重 + Desktop 跨 Agent 调用），但该 PR 仍处于 OPEN 状态，阻塞 Windows 用户核心体验。

---

## 6. 功能请求与路线图信号

| Issue | 需求 | 热度 | 与现有 PR 关联 | 纳入可能性 | 链接 |
|:---|:---|:---:|:---|:---|:---|
| **#4992** | **独立视觉模型配置（Visual Model Fallback）**：纯文本主模型自动调用视觉模型中转图片理解 | 3👍, 3💬 | 无 | ⭐⭐⭐ 高 | [#4992](https://github.com/agentscope-ai/QwenPaw/issues/4992) |
| **#4994** | **记忆系统自进化**：分层记忆框架，吸收主流 Agent 设计 | 1👍, 3💬 | #4857 技能自进化已合并 | ⭐⭐⭐ 高（渐进实现） | [#4994](https://github.com/agentscope-ai/QwenPaw/issues/4994) |
| **#5009** | **可观测性集成**：Langfuse、OpenTelemetry、LLM 追踪平台 | 0👍, 2💬 | 无 | ⭐⭐☆ 中 | [#5009](https://github.com/agentscope-ai/QwenPaw/issues/5009) |
| **#4971** | 会话管理优化：侧边栏直接切换，减少点击次数 | 0👍, 3💬 | 无 | ⭐⭐☆ 中（UX 改进） | [#4971](https://github.com/agentscope-ai/QwenPaw/issues/4971) |
| **#4778** | 定时任务优化：会话名称显示、简化 JSON 输入、时间戳、跳转链接 | 0👍, 1💬 | 无 | ⭐⭐☆ 中 | [#4778](https://github.com/agentscope-ai/QwenPaw/issues/4778) |
| **#4727** | **AgentScope 2.0 迁移** | 2👍, 7💬 | 无明确 PR | ⭐⭐⭐ 高（阻塞性） | [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) |

**信号判断**：视觉模型 Fallback（#4992）与记忆自进化（#4994）是用户最明确的功能缺口，且技术路径清晰；AgentScope 2.0 迁移（#4727）是底层架构必选项，需优先排期。

---

## 7. 用户反馈摘要

### 😊 满意点
- **本地化体验**："国内用起来特别舒服——本地化做得很到位，设置清晰无门槛，开箱即用"（#5017）
- **功能完整性**：多模态测试、模型连接测试等基础设施可靠（#4989 提及测试成功）

### 😤 痛点与场景

| 痛点 | 典型场景 | 来源 |
|:---|:---|:---|
| **Windows 桌面端"二等公民"体验** | 路径溢出、跨盘目录打不开、前端卡顿、重启后 Agent 重置为默认 | #4988, #5015, #5042, #4733 |
| **模型兼容性黑盒** | 升级后本地模型突然无响应，无报错日志，回退版本解决 | #4989 |
| **频道行为不可预测** | 微信主动模式重复回复、钉钉空卡片，生产环境尴尬 | #5030, #5057 |
| **内部实现暴露** | Skill 调用显示原始 Markdown，破坏产品感 | #5031 |
| **配置心智负担** | 定时任务 JSON 输入反直觉、会话 ID 无名称标识 | #4971, #4778 |

---

## 8. 待处理积压

### 需维护者重点关注

| Issue/PR | 天数 | 风险 | 行动建议 | 链接 |
|:---|:---:|:---|:---|:---|
| **#4727 AgentScope 2.0 迁移** | **13 天** | 🔴 **架构阻塞** — 所有 AgentScope 新特性依赖此迁移 | 发布迁移 RFC，明确阶段里程碑与社区协作点 | [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) |
| **#4988 Windows 路径溢出** | **3 天** | 🔴 **数据丢失风险** — 会话文件无法写入 | **优先合并 #5036** | [#4988](https://github.com/agentscope-ai/QwenPaw/issues/4988) |
| **#4989 本地模型无响应回归** | **3 天** | 🔴 **版本信任危机** — 1.1.9/1.1.10 核心功能退化 |  bisect 定位 1.1.5→1.1.9 间 provider/流式处理变更 | [#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989) |
| **#2777 GPT-5.x max_tokens 参数错误** | **70 天** | 🟡 长期未响应，模型兼容性债务 | 评估是否随 AgentScope 2.0 统一修复或单独 hotfix | [#2777](https://github.com/agentscope-ai/QwenPaw/issues/2777) |
| **#4669 Tauri 自动更新** | **15 天** | 🟡 Desktop 体验关键补齐 | 推进代码审查，与 #5051（端口持久化）协调合并 | [#4669](https://github.com/agentscope-ai/QwenPaw/pull/4669) |
| **#5051 后端端口持久化** | **当日** | 🟡 解决 #4733 重启后 Agent 重置问题 | 与 #4669 合并节奏协调，避免冲突 | [#5051](https://github.com/agentscope-ai/QwenPaw/pull/5051) |

---

> **日报生成说明**：基于 GitHub 公开数据自动聚合，PR 评论数为 `undefined` 表示未返回具体数值。项目原名 QwenPaw，品牌升级中 CoPaw 与 QwenPaw 仓库链接并存。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-06-10

---

## 1. 今日速览

ZeroClaw 今日呈现**极高活跃度**：24小时内 Issues 与 PR 各更新 50 条，但**合并/关闭率极低**（Issues 关闭率 4%，PR 合并/关闭率仅 2%），表明社区贡献汹涌但代码审查瓶颈严重。核心战场集中在**运行时稳定性**（上下文预算溢出、消息丢失、Cron 重复执行）与**多通道架构扩展**（SMS、社交频道批量新增）。值得关注的是，今日涌现一条架构级 RFC（#7415）直指代理回合引擎的三重实现债务，可能触发核心重构。

---

## 2. 版本发布

**无新版本发布。** 最新版本仍为 v0.8.0-beta-1（2026-05-23 前后发布），该版本已暴露若干回归问题（见 #6862、#6876）。

---

## 3. 项目进展

### 已合并/关闭

| PR/Issue | 说明 | 推进价值 |
|---------|------|---------|
| [#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) [CLOSED] | Logo 设计提案因作者无响应被关闭 | 清理低优先级积压 |
| [#7117](https://github.com/zeroclaw-labs/zeroclaw/issues/7117) [CLOSED] | 跨表面配置 UX 统一需求，因范围过大或已有替代方案关闭 | 路线图聚焦 |
| [#7425](https://github.com/zeroclaw-labs/zeroclaw/pull/7425) [CLOSED] | 修复渠道成本追踪的 bare-type fallback 问题 | **关键修复**：解决所有渠道代理成本 USD=0 及预算失效，但因未知原因关闭而非合并 |

**整体评估**：今日实际代码合并近乎停滞，项目前进动能受阻于审查队列膨胀（49 PR 待合并）。

---

## 4. 社区热点

### 高讨论 Issues

| Issue | 评论 | 核心诉求 |
|-------|------|---------|
| [#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) Logo 改进 | 19 | 品牌形象专业化，社区设计参与感 |
| [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) 代理不自知 Cron 能力 | 12 | **工具发现机制缺陷**：代理无法将 `zeroclaw cron` 纳入自身能力边界，暴露工具注册与系统提示的割裂 |
| [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) 统一 Provider 架构 | 10 | 技术债务清理：`reqwest` 使用不一致、配置碎片化，影响新 Provider 接入成本 |
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) 按发送者 RBAC | 9 | **多租户刚需**：企业部署中隔离工作区、工具集、速率限制，当前单安全边界不可扩展 |
| [#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378) Discord 频道白名单 | 7 | 与 Matrix/Nextcloud Talk 配置范式对齐，运营精细化控制 |

### 高讨论 PRs

| PR | 规模 | 核心变更 |
|----|------|---------|
| [#7361](https://github.com/zeroclaw-labs/zeroclaw/pull/7361) XL | 每轮输出路由 + 语音交付修复 | 跨 7 个通道的复杂功能，双发 bug 修复 |
| [#7278](https://github.com/zeroclaw-labs/zeroclaw/pull/7278) XL | 5 个智能家居/媒体集成工具批量 | 生态扩展但需大量审查 |
| [#7265](https://github.com/zeroclaw-labs/zeroclaw/pull/7265) XL | 5 个 SMS 通道 | 企业通信场景覆盖 |

**诉求分析**：社区正从"能跑"转向"好管"——多租户隔离、配置一致性、运营精细化成为主旋律，反映早期采用者进入生产部署阶段。

---

## 5. Bug 与稳定性

### S1（工作流阻塞）

| Issue | 描述 | Fix PR 状态 |
|-------|------|------------|
| [#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) | **User message 丢失**：单轮/多轮对话中消息消失，导致 400 Bad Request | ❌ 无 |
| [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) | **默认 32k 上下文首轮即超预算 3.3x**：系统提示+工具定义导致无限 preemptive trim | [#7440](https://github.com/zeroclaw-labs/zeroclaw/pull/7440) ✅ 待审——跳过无效历史修剪 |
| [#6646](https://github.com/zeroclaw-labs/zeroclaw/issues/6646) | Telegram 通道 web_search/web_fetch 不触发 | [#7438](https://github.com/zeroclaw-labs/zeroclaw/pull/7438) ✅ 待审——修复交付提示抑制工具使用 |
| [#6037](https://github.com/zeroclaw-labs/zeroclaw/issues/6037) | **Cron 重复执行**：运行超 poll interval 时爆发 20 次重入 | [#7417](https://github.com/zeroclaw-labs/zeroclaw/pull/7417) ✅ 待审——编辑模态暴露全字段 |
| [#6687](https://github.com/zeroclaw-labs/zeroclaw/issues/6687) | **双 SopEngine 实例**：MQTT 启动的运行对代理不可见 | ❌ 无 |
| [#6862](https://github.com/zeroclaw-labs/zeroclaw/issues/6862) | Gateway SPA fallback 污染 /api/* 路由，dashboard JSON.parse 崩溃 | ❌ 无 |
| [#6876](https://github.com/zeroclaw-labs/zeroclaw/issues/6876) | `risk_profile.allowed_tools` 不限制 MCP 工具——设计或文档缺陷 | ❌ 无 |

### S2（行为降级）

| Issue | 描述 | Fix PR |
|-------|------|--------|
| [#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) | 过度强调记忆，Cron 场景尤甚 | ❌ 无 |
| [#6002](https://github.com/zeroclaw-labs/zeroclaw/issues/6002) | Telegram 消息未明确寻址助手 | ❌ 无 |
| [#6584](https://github.com/zeroclaw-labs/zeroclaw/issues/6584) | OpenAI-Compatible provider 忽略 `reasoning` 字段 | ❌ 无 |
| [#7376](https://github.com/zeroclaw-labs/zeroclaw/issues/7376) | zerocode Dashboard 隐藏错误状态 | ❌ 无 |

### S3（轻微问题）

| Issue | 描述 |
|-------|------|
| [#7377](https://github.com/zeroclaw-labs/zeroclaw/issues/7377) | zerocode 暗色主题继承不可读前景色 |
| [#7378](https://github.com/zeroclaw-labs/zeroclaw/issues/7378) | macOS Cmd-C 被误识别为退出和弦 |
| [#7400](https://github.com/zeroclaw-labs/zeroclaw/issues/7400) | 区域设置需重启+下载才生效 |

---

## 6. 功能请求与路线图信号

### 高优先级（P1）功能请求

| Issue | 领域 | 纳入下一版本信号强度 |
|-------|------|------------------|
| [#6250](https://github.com/zeroclaw-labs/zeroclaw/issues/6250) 认证中间件化 | Gateway/安全 | ⭐⭐⭐⭐⭐ 架构债务，影响所有 API 安全 |
| [#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916) Shell/Skill 子进程内存限制 | 运行时安全 | ⭐⭐⭐⭐⭐ 生产 OOM 亲历，有 PR #6916 |
| [#7248](https://github.com/zeroclaw-labs/zeroclaw/issues/7248) 缓存 Token 成本核算 | 可观测性 | ⭐⭐⭐⭐ 云成本精准化刚需 |

### 架构级信号

| Issue/PR | 意义 |
|---------|------|
| [#7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415) **RFC: 统一三重代理回合引擎** | 核心重构前兆：`run_tool_call_loop` + `turn_streamed` + `Agent::turn` 重复实现导致审计保护缺失，维护者 @Nillth 推动 |
| [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) Provider 架构统一 | 新 Provider 接入成本过高，社区呼声强 |

### 生态扩展（批量 PR 待审）

- **通信通道**：SMS 五家（#7265）、社交/聊天四家（#7270）、Lark 加固（#7256）
- **智能家居**：Home Assistant、Hue、8Sleep、Spotify、Sonos（#7278）

**判断**：v0.8.0 正式版需先解决 S1 稳定性问题，生态扩展 PR 可能批量延后至 v0.9.0。

---

## 7. 用户反馈摘要

### 痛点

| 场景 | 来源 |
|------|------|
| **"我让它每晚 8 点做事，它说自己没这工具"** | [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) — 代理能力自我认知断裂 |
| **"Cron 任务一天炸了 20 次"** | [#6037](https://github.com/zeroclaw-labs/zeroclaw/issues/6037) — 调度可靠性生产致命 |
| **"成本追踪全是 0，预算形同虚设"** | [#7425](https://github.com/zeroclaw-labs/zeroclaw/pull/7425) — 财务可控性缺失 |
| **"MCP 工具不受 allowed_tools 限制，文档没说"** | [#6876](https://github.com/zeroclaw-labs/zeroclaw/issues/6876) — 安全边界预期违背 |
| **"zerocode 在 macOS 上 Cmd-C 退出、主题 unreadable"** | [#7377](https://github.com/zeroclaw-labs/zeroclaw/issues/7377)-[#7378](https://github.com/zeroclaw-labs/zeroclaw/issues/7378) — TUI 跨平台体验粗糙 |

### 满意点

- 多通道覆盖速度受认可（Discord、Telegram、Matrix 等快速迭代）
- 配置灵活性（`allowed_rooms` 模式）被积极采用并请求扩展至更多通道

---

## 8. 待处理积压

### 长期阻塞需维护者介入

| Issue | 阻塞时长 | 关键行动 |
|-------|---------|---------|
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) 多租户 RBAC | ~50 天 | `needs-author-action` 标签，需架构决策 |
| [#5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775) Skill 级安全权限 | ~56 天 | 与 #5982 协同设计，避免全局开关 |
| [#5842](https://github.com/zeroclaw-labs/zeroclaw/issues/5842) Codex CLI extra_args 安全审计 | ~55 天 | 安全关键，需风险量化评估 |
| [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) `.well-known` Skill 安装 | ~76 天 | 标准跟踪中，Cloudflare/Vercel 已先行 |

### PR 审查队列警报

- **XL 规模 PR 堆积**：#7361、#7278、#7265、#7256、#7270 均待审，涉及大量通道与集成
- **风险**：批量合并窗口临近，但当前合并速率（1/50）无法消化，建议维护者启动 **PR 分流机制**（标记 `needs-review` 优先级、引入二级审查者）

---

**项目健康度评分**：⚡ 活跃度 9/10 | 🐛 稳定性 4/10 | 🔄 审查吞吐 2/10 | 📈 生态扩展 8/10

**关键建议**：立即冻结非修复类 PR 合并，集中火力处理 S1 Bug + 审查瓶颈，避免 v0.8.0 正式版发布质量危机。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*