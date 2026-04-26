# OpenClaw 生态日报 2026-04-26

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-04-26 00:15 UTC

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

# OpenClaw 项目动态日报 | 2026-04-26

## 1. 今日速览

OpenClaw 今日保持**极高活跃度**，24小时内处理 **500 条 Issues**（关闭率 86%）和 **500 条 PR**（合并/关闭率 83.4%），显示出维护团队强劲的迭代能力。版本发布节奏密集，**v2026.4.24 正式版及 5 个 beta 版本**同日推进，核心亮点为 **Google Meet 内置插件**上线与 **DeepSeek V4 模型支持**。社区讨论热度集中于消息生命周期钩子失效、模型切换时的上下文损坏、以及新版本引入的消息重复注入问题。稳定性方面，mDNS/Bonjour 相关崩溃在 VPS/云环境持续发酵，Windows 平台 ESM 加载问题仍有残余。整体项目健康度**良好但承压**——功能交付快，但回归测试覆盖需加强。

---

## 2. 版本发布

### v2026.4.24 正式版 & Beta 系列（beta.1 - beta.5）
**发布时间**：2026-04-24 至 2026-04-25

| 版本 | 状态 | 关键变更 |
|:---|:---|:---|
| [v2026.4.24](https://github.com/openclaw/openclaw/releases/tag/v2026.4.24) | **Stable** | Google Meet 插件、DeepSeek V4 支持 |
| [v2026.4.24-beta.5](https://github.com/openclaw/openclaw/releases/tag/v2026.4.24-beta.5) | Beta | 同上 |
| [v2026.4.24-beta.4](https://github.com/openclaw/openclaw/releases/tag/v2026.4.24-beta.4) | Beta | 同上 |
| [v2026.4.24-beta.3](https://github.com/openclaw/openclaw/releases/tag/v2026.4.24-beta.3) | Beta | 同上 |
| [v2026.4.24-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.4.24-beta.2) | Beta | **Windows 修复**：打包插件运行时镜像路径解析；旧版本升级时禁用新插件防兼容性问题 |
| [v2026.4.24-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.4.24-beta.1) | Beta | 初始功能集 |

#### 核心功能详解

**🎥 Google Meet 内置参与者插件**（[PR #71108](https://github.com/openclaw/openclaw/pull/71108) 关联）
- 个人 Google 账号 OAuth 认证
- Chrome / Twilio 实时会话双模式
- 配对节点 Chrome 支持（分布式部署）
- 会议产物导出（artifacts）与出勤记录
- 已打开 Meet 标签页的恢复工具

**🤖 DeepSeek V4 Flash / V4 Pro 模型支持**
- 注：Release notes 被截断，完整集成细节待文档更新

#### ⚠️ 已知问题与迁移注意

| 问题 | 影响版本 | 状态 |
|:---|:---|:---|
| 消息重复注入（所有渠道） | 2026.4.24 | **[#71761](https://github.com/openclaw/openclaw/issues/71761)** 开放，P0 |
| Windows Telegram ESM 崩溃 | 2026.4.24 | **[#71749](https://github.com/openclaw/openclaw/issues/71749)** 需禁用 native Jiti 绕过 |
| Docker mDNS 崩溃 (`CIAO PROBING CANCELLED`) | 2026.4.24 | **[#71751](https://github.com/openclaw/openclaw/issues/71751)** 开放 |
| 捆绑运行时首次用户回合重 staging | 2026.4.24-beta.2 | **[#71599](https://github.com/openclaw/openclaw/issues/71599)** Beta 阻断器 |

**迁移建议**：生产环境建议暂缓升级至 2026.4.24，等待 [#71761](https://github.com/openclaw/openclaw/issues/71761) 修复；Windows 用户若遇 Telegram 崩溃，设置 `NATIVE_JITI=false`。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR（15 项）

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#71808](https://github.com/openclaw/openclaw/pull/71808) | pash-openai | **Codex 应用服务器二进制管理**：将 `codex` CLI 版本与插件协议版本绑定，避免握手失败 | — |
| [#71842](https://github.com/openclaw/openclaw/pull/71842) | pash-openai | **Codex Computer Use 设置路径**：支持从 Codex 市场安装 `computer-use` 插件并验证 MCP 就绪状态 | — |
| [#71815](https://github.com/openclaw/openclaw/pull/71815) | pashpashpash | **去重生成媒体附件**：修复 image_generate 队列与显式 MEDIA 行重复发送问题 | — |
| [#71824](https://github.com/openclaw/openclaw/pull/71824) | coygeek | **Fly.io 部署修复**：从 CLI `--bind`/`--port` 种子化控制 UI 来源，解决启动崩溃 | — |
| [#71837](https://github.com/openclaw/openclaw/pull/71837) | vicenteliu | **Memory Dreaming 降噪**：剥离包装器脚手架，提升 REM 真实记忆晋升质量 | — |
| [#71827](https://github.com/openclaw/openclaw/pull/71827) / [#71836](https://github.com/openclaw/openclaw/pull/71836) | scottgl9 / hclsys | **Cron jobId 暴露至插件钩子上下文**：支持插件按持久任务 ID 定向逻辑 | [#71826](https://github.com/openclaw/openclaw/issues/71826) |
| [#71839](https://github.com/openclaw/openclaw/pull/71839) | Zozi96 | **Telegram 回复引用优化**：停止默认自动引用，保留显式引用能力 | — |
| [#71816](https://github.com/openclaw/openclaw/pull/71816) | shivanker | **Fal Seedance 参考视频支持**：多参考输入（图像/视频/音频） | — |
| [#71819](https://github.com/openclaw/openclaw/pull/71819) | martingarramon | **自动回复去毒修复**：防止外部可见分派后的重复回放入侵 | [#69303](https://github.com/openclaw/openclaw/issues/69303) |
| [#71833](https://github.com/openclaw/openclaw/pull/71833) | mjamiv | **网关启动时引导 Undici 代理分发器**：修复启动阶段提供商请求代理缺失 | — |
| [#71817](https://github.com/openclaw/openclaw/pull/71817) | anagnorisis2peripeteia | **Telegram/Feishu 推理默认配置尊重**：`reasoningDefault` 配置生效修复 | — |
| [#71840](https://github.com/openclaw/openclaw/pull/71840) / [#71841](https://github.com/openclaw/openclaw/pull/71841) | martingarramon | **测试覆盖**：`buildReplyPromptBodies` 不对称行为、`formatSlackFileReference` 助手 | — |
| [#71686](https://github.com/openclaw/openclaw/pull/71686) | serkonyc | **心跳路由与头像覆盖稳定化**：隔离心跳通道，防止重复通道实例化 | 替代 [#71674](https://github.com/openclaw/openclaw/pull/71674) |
| [#71585](https://github.com/openclaw/openclaw/pull/71585) | BunsDev | **控制 UI 个人卡片重构**：用户/助手身份视觉对称 | — |

**整体推进评估**：今日合并 PR 聚焦 **Codex 生态完善**（2 项）、**消息系统可靠性**（3 项）、**部署体验**（Fly.io、代理）、**AI 媒体生成**（Fal 视频、去重），以及 **基础设施健壮性**（cron、心跳、测试）。项目在向 **企业级部署就绪** 和 **多模态 AI 工作流** 方向稳步迈进。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 👍 | 核心诉求 |
|:---|:---|:---:|:---|:---|
| 1 | [#65867](https://github.com/openclaw/openclaw/issues/65867) Gemini `<final>` 标签泄漏至用户消息 | 15 | 0 | **模型输出净化失效**：Google 模型特定标签污染用户体验，回归问题反复出现 |
| 2 | [#26422](https://github.com/openclaw/openclaw/issues/26422) `message_sending` 钩子永不触发——死代码 | 12 | 1 | **插件扩展性核心诉求**：出站消息拦截能力缺失，影响审计、过滤、合规场景 |
| 3 | [#33185](https://github.com/openclaw/openclaw/issues/33185) `imageModel` "Unknown model" 崩溃 | 12 | 0 | **视觉模型配置断裂**：配置验证与运行时解析不一致 |
| 4 | [#47705](https://github.com/openclaw/openclaw/issues/47705) 回退模型永久覆盖主配置 | 11 | 0 | **状态管理危险行为**：故障恢复导致配置漂移，不可逆 |
| 5 | [#32621](https://github.com/openclaw/openclaw/issues/32621) `message` 工具内钩子点缺失 | 9 | 0 | **显式 vs 隐式消息路径不一致**：`message_sending` 仅捕获自动回复 |

### 诉求深度分析

**钩子系统完整性** 是今日最热主题——[#26422](https://github.com/openclaw/openclaw/issues/26422)、[#32621](https://github.com/openclaw/openclaw/issues/32621)、[#49765](https://github.com/openclaw/openclaw/issues/49765)、[#52144](https://github.com/openclaw/openclaw/issues/52144)、[#66579](https://github.com/openclaw/openclaw/issues/66579) 形成 **5 个关联 Issue 集群**，用户需要：
- 出站全路径可观测（`message:sent` 事件可靠触发）
- 显式工具调用可拦截（`message(action=send)` 纳入钩子）
- 渠道一致性（WhatsApp 自动回复尊重 `cancel`/`handled` 返回）

**模型切换上下文损坏** 集群——[#47705](https://github.com/openclaw/openclaw/issues/47705)、[#50094](https://github.com/openclaw/openclaw/issues/50094)、[#70654](https://github.com/openclaw/openclaw/issues/70654) 显示 **多模型会话的序列化/反序列化** 是架构级痛点。

---

## 5. Bug 与稳定性

### 🚨 P0/P1 严重问题

| 级别 | Issue | 描述 | 修复状态 |
|:---|:---|:---|:---|
| **P0** | [#71761](https://github.com/openclaw/openclaw/issues/71761) | **2026.4.24 所有渠道消息重复注入**——双倍 token 消耗，所有入站消息在 WebChat/QQ 重复 | ❌ **开放，无 PR** |
| **P0** | [#71751](https://github.com/openclaw/openclaw/issues/71751) | **Docker 崩溃**：`CIAO PROBING CANCELLED` mDNS 未处理 Promise 拒绝 | ❌ **开放**（[#70232](https://github.com/openclaw/openclaw/issues/70232) 重复） |
| **P1** | [#71749](https://github.com/openclaw/openclaw/issues/71749) | **Windows Telegram ESM URL 崩溃**，需禁用 native Jiti | ⚠️ **有绕过方案，无根本修复** |
| **P1** | [#71178](https://github.com/openclaw/openclaw/issues/71178) | **`openclaw update` 中回合导致消息全丢失**（Telegram/Discord） | ❌ **开放** |
| **P1** | [#70678](https://github.com/openclaw/openclaw/issues/70678) | **WhatsApp 每 30 分钟强制重连**——安静会话不必要的 socket 重建 | ❌ **开放** |

### 🔶 P2 中等问题（已关闭/有修复）

| Issue | 描述 | 修复 |
|:---|:---|:---|
| [#70654](https://github.com/openclaw/openclaw/issues/70654) | GPT-5.4 Responses API `encrypted_content` item_id 不匹配（模型切换后） | ✅ 已关闭 |
| [#70699](https://github.com/openclaw/openclaw/issues/70699) | ACP 接受输入无输出，one-shot 超时 | ✅ 已关闭 |
| [#70277](https://github.com/openclaw/openclaw/issues/70277) | Signal 入站媒体路径被 image 工具 allowed-root 检查拒绝 | ✅ 已关闭 |
| [#70004](https://github.com/openclaw/openclaw/issues/70004) | Agent 会话锁崩溃后未释放——阻塞所有后续运行 | ✅ 已关闭 |
| [#69320](https://github.com/openclaw/openclaw/issues/69320) | Dreaming cron 硬编码 10 分钟超时 | ✅ 已关闭 |
| [#71629](https://github.com/openclaw/openclaw/issues/71629) | `active-memory timeoutMs` 非硬截止时间（5s 设置 11-13s 返回） | ✅ 已关闭 |
| [#71621](https://github.com/openclaw/openclaw/issues/71621) | 4.23 验证器拒绝 `allowConversationAccess` 同时错误信息要求设置 | ✅ 已关闭 |

### 稳定性趋势评估

| 指标 | 状态 | 说明 |
|:---|:---|:---|
| 关闭率 | ✅ 86% | 维护响应极快 |
| 回归密度 | ⚠️ **偏高** | 4 个标注 `regression` 的 Issue 含 2 个开放 |
| 平台特定问题 | ⚠️ **Windows/Docker 承压** | ESM、mDNS、捆绑运行时 |
| 新版本阻断器 | 🔴 **存在** | [#71761](https://github.com/openclaw/openclaw/issues/71761) 建议回滚或紧急补丁 |

---

## 6. 功能请求与路线图信号

### 用户明确提出的功能需求

| Issue/PR | 需求 | 纳入可能性 | 信号强度 |
|:---|:---|:---|:---:|
| [#43756](https://github.com/openclaw/openclaw/issues/43756) | **Slack `threadBindings` + `spawnAcpSessions`**（Discord/Telegram parity） | ⭐⭐⭐⭐⭐ | **高**——已有 PR 实现模式，社区投票 2👍 |
| [#8185](https://github.com/openclaw/openclaw/issues/8185) | **`/new` `/reset` 前预重置记忆保存** | ⭐⭐⭐⭐⭐ | **高**——7👍 最高，用户体验核心痛点 |
| [#16085](https://github.com/openclaw/openclaw/pull/16085) | **Signal REST API 支持**（容器化部署） | ⭐⭐⭐⭐☆ | **高**——XL 级 PR 开放中，企业部署刚需 |
| [#69208](https://github.com/openclaw/openclaw/issues/69208) | **Umbrella: 跨渠道重复转录/回放/上下文组装** | ⭐⭐⭐⭐☆ | **高**——维护者标记，系统性问题 |
| [#71816](https://github.com/openclaw/openclaw/pull/71816) | **Fal Seedance 参考视频** | ⭐⭐⭐⭐⭐ | **已合并**——多模态视频生成前沿 |
| [#71842](https://github.com/openclaw/openclaw/pull/71842) | **Codex Computer Use** | ⭐⭐⭐⭐⭐ | **已合并**——OpenAI 官方推动，战略级 |

### 路线图推断

**短期（2026.5 前）**：
- 消息系统可靠性紧急修复（重复注入、钩子完整性）
- Codex 生态 GA（Computer Use + 版本管理）

**中期（2026.Q2）**：
- 跨渠道上下文一致性重构（[#69208](https://github.com/openclaw/openclaw/issues/69208) umbrella）
- 记忆系统深度优化（Dreaming 降噪已完成，预重置保存待实现）

**长期信号**：
- 企业部署成熟度（Signal REST、Slack 线程、Fly.io 等 PaaS 优化）
- 多模态工作流（视频生成参考输入、会议产物处理）

---

## 7. 用户反馈摘要

### 💔 核心痛点

| 场景 | 原声摘录 | 影响面 |
|:---|:---|:---|
| **升级恐惧** | "After updating from 2026.4.23 to 2026.4.24, every inbound message is injected twice" — [#71761](https://github.com/openclaw/openclaw/issues/71761) | 所有渠道用户 |
| **配置漂移** | "fallback model gets persisted back to openclaw.json... permanently replacing the configured primary" — [#47705](https://github.com/openclaw/openclaw/issues/47705) | 多模型用户 |
| **钩子不可靠** | "message_sending plugin hook registers successfully... however, it never fires" — [#26422](https://github.com/openclaw/openclaw/issues/26422) | 插件开发者 |
| **平台二等公民** | "Windows Telegram provider still crashes... unless native Jiti is disabled" — [#71749](https://github.com/openclaw/openclaw/issues/71749) | Windows 用户 |
| **云部署脆弱** | "Docker container crashes... CIAO PROBING CANCELLED" — [#71751](https://github.com/openclaw/openclaw/issues/71751

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析
**分析日期：2026-04-26 | 数据周期：过去24小时**

---

## 1. 生态全景

个人 AI 助手开源生态正处于**从"功能验证"向"生产就绪"跃迁的关键阵痛期**。头部项目（OpenClaw、ZeroClaw）日均处理 50-100 条 Issues/PR，但关闭率分化明显（OpenClaw 86% vs Hermes 4-14%），反映维护带宽成为核心瓶颈。DeepSeek V4 推理模式兼容性成为全生态"火场"，至少 5 个项目同日出现相关 Bug。MCP 协议栈从"可选扩展"升级为"基础设施标配"，但 stdio/HTTP 传输稳定性、OAuth 预检逻辑等边缘场景仍存大量摩擦。企业级需求（RBAC、多租户、审计合规）开始从"边缘诉求"进入"核心路线图"，标志着用户群体从极客向 B2B 场景渗透。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 今日 Release | 关闭/合并率 | 健康度评估 |
|:---|:---:|:---:|:---|:---|:---|
| **OpenClaw** | 500 | 500 | v2026.4.24 + 5 betas | Issues 86% / PR 83.4% | ⭐⭐⭐⭐⭐ 功能交付极快，P0 回归需紧急补丁 |
| **NanoBot** | 6 活跃 | 29 (18 待合) | 无 | PR 38% | ⭐⭐⭐⭐☆ 安全加固主线，Provider 层修复响应快 |
| **Hermes Agent** | 50 | 50 | 无 | Issues 4% / PR 14% | ⭐⭐⭐☆☆ 需求井喷但维护吞吐严重不足，3 个 P1 安全 Issue 10 天未响应 |
| **PicoClaw** | 7 (5 关闭) | 21 (12 已处理) | Nightly v0.2.7 | Issues 71% / PR 57% | ⭐⭐⭐⭐☆ 修复导向，v0.2.7 发布冲刺中 |
| **NanoClaw** | 3 | 28 (17 待合) | 无 | PR 39% | ⭐⭐⭐⭐☆ 架构突破（Web 通道），安装体验待加固 |
| **NullClaw** | 3 | 1 | 无 | Issues 33% / PR 100% | ⭐⭐⭐☆☆ 活跃度偏低，搜索架构与定位存在张力 |
| **IronClaw** | 6 | 24 (22 待合) | 无 | PR 8% | ⭐⭐⭐☆☆ Engine V2 迁移期，MCP 生态活跃但合并瓶颈 |
| **LobsterAI** | 4 (stale) | 11 (10 已处理) | 无 | PR 91% | ⭐⭐⭐⭐☆ 代码迭代密集，Issue 响应滞后 2 个月 |
| **Moltis** | 2 | 7 (4 待合) | 无 | Issues 50% / PR 43% | ⭐⭐⭐☆☆ 中等活跃，技能过滤前后端同步漏洞需阻塞发布 |
| **CoPaw** | 14 (13 活跃) | 10 (7 待合) | v1.1.4.post2 | Issues 7% / PR 30% | ⭐⭐⭐☆☆ 配置持久化信任危机，紧急补丁未触核心 |
| **ZeptoClaw** | 0 | 4 (1 待合) | 无 | PR 75% | ⭐⭐⭐☆☆ 稳健但静默，外部贡献流程摩擦待解 |
| **ZeroClaw** | 50 (37 活跃) | 43 (31 待合) | 无 | Issues 26% / PR 28% | ⭐⭐⭐☆☆ v0.7.4 冲刺中，历史债务清偿显著但新 Bug 持续涌现 |
| **TinyClaw** | — | — | — | — | 无活动 |

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 表现 | 生态对比 |
|:---|:---|:---|
| **规模** | 日处理 1000 条事务，绝对量级领先 | ZeroClaw ~100、Hermes ~100、其余 <50 |
| **迭代速度** | 同日发布正式版+5 beta，版本节奏密集 | PicoClaw Nightly 构建、CoPaw post-release 热修复为次快节奏 |
| **功能广度** | Google Meet 插件、DeepSeek V4、Codex Computer Use、Fal Seedance 视频——多模态+企业场景全覆盖 | NanoClaw 侧重"主权优先"容器化、ZeroClaw 轻量边缘部署、Hermes 网关抽象层 |
| **技术债务** | 消息重复注入（P0）、mDNS 崩溃、Windows ESM 问题——回归密度偏高 | PicoClaw 同类问题（DeepSeek 推理顺序）但修复更聚焦；ZeroClaw 历史债务更厚重 |
| **社区治理** | 维护团队响应极快（86% 关闭率），但 beta 版本质量门槛存争议 | Hermes 4% 关闭率形成极端反差；NanoBot 安全 PR 批量审阅策略更稳健 |

**核心差异**：OpenClaw 是生态中**唯一同时覆盖"消费者多模态体验"（Meet 插件、视频生成）与"开发者基础设施"（Codex 绑定、MCP 就绪）**的项目，其技术路线偏向**"全栈整合"**而非垂直深耕。代价是架构复杂度带来的回归风险——消息生命周期钩子、模型切换状态管理等底层机制反复出现断裂。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 紧迫程度 |
|:---|:---|:---|:---|
| **DeepSeek V4 推理模式兼容** | OpenClaw、Hermes、PicoClaw、LobsterAI、ZeroClaw | `reasoning_content` 字段处理、thinking mode 工具调用、历史顺序序列化 | 🔴 最高 |
| **MCP 协议栈成熟化** | OpenClaw、PicoClaw、IronClaw、Moltis、NanoClaw | stdio 传输稳定性、HTTP 会话重连、空参数规范、`mcporter` 兼容层清理 | 🔴 最高 |
| **配置持久化/状态管理** | CoPaw、ZeroClaw、OpenClaw、Hermes | `config.json` vs `agent.json` 双源冲突、刷新丢失、模型切换后配置漂移 | 🔴 高 |
| **多租户/RBAC 隔离** | ZeroClaw、Moltis、NanoClaw | 按发送者隔离工作空间、技能黑白名单、速率限制分层 | 🟡 中高 |
| **Provider 容灾/Failover** | NanoBot、OpenClaw、ZeroClaw | 单点故障自动降级、基于错误码的健康检查、跨模型优雅回切 | 🟡 中高 |
| **Windows 平台兼容性** | OpenClaw、CoPaw、ZeptoClaw | ESM 加载崩溃、渲染异常、控制台闪烁、启动器体验 | 🟡 中 |
| **钩子系统完整性** | OpenClaw、Hermes | 出站消息全路径可观测、显式工具调用拦截、渠道一致性 | 🟡 中 |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户 | 技术架构特征 |
|:---|:---|:---|:---|
| **OpenClaw** | 多模态 AI 工作流（视频/会议/图像）、Codex 生态集成 | 高级消费者、AI 原生开发者 | Node.js/TypeScript，插件化消息系统，密集功能迭代 |
| **NanoBot** | 安全加固、企业 IM 集成（飞书/Teams）、人机协作确认 | 企业 IT 部署、安全敏感用户 | Python，Provider 抽象层，主动安全审计文化 |
| **Hermes Agent** | 网关抽象、多平台统一接入、视觉模型路由 | 多平台 Bot 运营者、SaaS 集成商 | Python，网关-会话状态机，商务模型耦合（Anthropic 订阅） |
| **PicoClaw** | 轻量桌面端、MCP 工具链、Web Chat UX 打磨 | 个人开发者、中文社区 | Rust/Tauri，Nightly 构建驱动，推理模式稳定性优先 |
| **NanoClaw** | "主权优先"零依赖部署、容器化技能、金融/隐私场景 | 隐私极客、自托管爱好者 | 容器-宿主分离架构，OneCLI 密钥管理，拒绝外部依赖 |
| **NullClaw** | 低资源边缘设备、开箱即用搜索 | 嵌入式/树莓派用户、极简主义者 | 轻量运行时，但搜索架构与定位存在张力 |
| **IronClaw** | Engine V2 标准化、NEAR AI 生态绑定、WASM 通道 | Web3/区块链开发者、协议标准化推动者 | Rust，模块化引擎，MCP + ACP 双协议栈 |
| **LobsterAI** | 协作会话（cowork）、代理网络配置、CJK 优化 | 中国本土企业、跨境团队 | 基于 OpenClaw 衍生，回滚验证策略保守 |
| **Moltis** | 技能治理（黑白名单）、内核级沙箱（Landlock）、Cron 稳定性 | 企业多租户、合规审计场景 | 渐进式硬化：Landlock + 技能过滤 + MCP 清理 |
| **CoPaw** | Tauri 桌面端、长期记忆、计划模式 Agent | 个人生产力用户、多设备同步需求者 | Electrobun→Tauri 迁移中，配置系统债务沉重 |
| **ZeroClaw** | 轻量边缘部署（Raspberry Pi）、多通道矩阵、i18n | 全球极客、多语言社区、硬件玩家 | Rust，Schema v3 迁移中，功能广度优先于深度 |
| **ZeptoClaw** | Rust 基础设施、可选模块编译检查、依赖链维护 | Rust 生态贡献者、模块化系统开发者 | 最小核心 + feature-gated 扩展，CI 驱动质量 |

---

## 6. 社区热度与成熟度

### 快速迭代阶段（功能扩张 > 质量巩固）

| 项目 | 信号 | 风险 |
|:---|:---|:---|
| **OpenClaw** | 日 1000 条事务，同日多 beta 发布 | 回归密度偏高，P0 阻断器建议暂缓生产升级 |
| **PicoClaw** | v0.2.7 发布冲刺，Nightly 持续构建 | 需验证 DeepSeek + MCP 组合场景稳定性 |
| **NanoClaw** | Web 通道架构突破，28 PR 日更新 | 17 PR 待审，安装脚本阻塞首次体验 |
| **IronClaw** | Engine V2 迁移，MCP Prompts/权限门控密集开发 | 22 PR 待合，#2960/#2957 重复修复需裁定 |
| **ZeroClaw** | v0.7.4 里程碑冲刺，Schema v3 批量迁移 | 31 PR 待合，历史债务与新 Bug 并行 |

### 质量巩固阶段（稳定性/安全 > 新功能）

| 项目 | 信号 | 待解问题 |
|:---|:---|:---|
| **NanoBot** | 3 个安全 PR 并行，Provider 层集中修复 | Provider Failover 架构级需求待实现 |
| **Moltis** | Landlock 沙箱、技能过滤、Cron 防重燃 | #875 前后端同步漏洞阻塞发布 |
| **ZeptoClaw** | CI 矩阵扩张，依赖链主动修复 | 外部贡献 OAuth 流程摩擦 |
| **CoPaw** | v1.1.4.post2 紧急补丁 | 配置持久化集群 Bug 未触核心，信任危机 |

### 活跃度偏低/转型期

| 项目 | 状态 | 关键挑战 |
|:---|:---|:---|
| **Hermes** | 需求井喷（日 100 条）但关闭率 4-14% | 维护带宽危机，3 个 P1 安全 Issue 10 天未响应 |
| **LobsterAI** | 代码迭代密集（91% PR 处理率）但 Issue 滞后 2 月 | 用户沟通断层，stale Issue 堆积 |
| **NullClaw** | 日 3 Issues + 1 PR | 搜索架构与"低资源"定位张力，WSL2 兼容性 |
| **TinyClaw** | 无活动 | — |

---

## 7. 值得关注的趋势信号

### 信号一：推理模式兼容性成为"生态税"

DeepSeek V4 的 `reasoning_content` 字段处理已从"单一项目适配"演变为**全生态基础设施重构**。5 个项目同日出现相关 Bug，根源在于：
- 推理内容与常规内容的**历史序列化顺序**未标准化（PicoClaw #2657）
- 工具调用场景下**必填字段校验**与模型实际输出不匹配（LobsterAI #1819, Hermes #15741）
- 流式/非流式路径**字段透传策略**不一致（NanoBot #3443）

**对开发者的价值**：设计 Agent 框架时，需将"推理模式"视为**一等公民**而非模型特定适配，提前定义 `reasoning_content` 的生命周期（捕获→存储→透传→隔离显示）。

### 信号二：MCP 从"协议支持"进入"体验打磨"

MCP 不再是"是否支持"的布尔问题，而是**传输层稳定性**（PicoClaw HTTP 会话重连 #2664）、**参数规范合规性**（空对象 vs null #2666）、**调用路径一致性**（Moltis 移除 `mcporter` #874）的精细化竞争。

**对开发者的价值**：自研 MCP 客户端时，优先投入 **stdio 的 OAuth 预检跳过逻辑**（IronClaw #2960）和 **HTTP SSE 的会话恢复机制**——这两个边缘场景是当前用户流失的主因。

### 信号三："配置持久化"成为生产采纳的生死线

CoPaw #3824（配置全部丢失）、ZeroClaw #5947（Schema v3 迁移）、OpenClaw #47705（回退模型永久覆盖主配置）共同指向：**用户从"尝鲜"进入"生产依赖"阶段，对配置可靠性要求质变**。

**对开发者的价值**：Agent 框架的配置系统需满足：
- **单一事实来源**（消除 `config.json` vs `agent.json` 双源冲突）
- **原子化写入**（避免竞态导致部分持久化）
- **版本化迁移**（Schema 变更时自动升级而非静默覆盖）

### 信号四："企业级需求从"边缘"进入"核心路线图"

ZeroClaw #5982（按发送者 RBAC）、Moltis #870（技能黑白名单）、NanoClaw #1968（逐代理模型配置）显示：**多租户隔离、成本管控、审计合规** 开始影响架构设计。

**对开发者的价值**：早期架构决策需预留 **会话级模型选择**（成本优化）、**技能级权限边界**（安全合规）、**操作级审计日志**（监管要求）的扩展点，避免后期重构。

### 信号五："主权优先"成为差异化旗帜

NanoClaw 的"容器内语音转录"（#2003 拒绝宿主侧实现）、IronClaw 的 ACP 权限门控（#2962）、Moltis 的 Landlock 沙箱（#866）共同构成 **"数据不离开控制域"** 的技术叙事。

**对开发者的价值**：在欧盟 AI Act、中国数据安全法等监管背景下，**本地优先（local-first）架构** 正从极客偏好变为合规刚需。设计时需评估：哪些组件必须容器化、哪些数据必须本地加密、哪些操作必须用户显式授权。

---

*本报告基于 12 个开源项目 2026-04-26 的 GitHub 公开数据生成，适合技术决策者评估项目健康度、开发者选择技术栈参考。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-04-26

> **项目**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | **日期**: 2026-04-26 | **分析师**: AI 智能体与开源项目分析师

---

## 1. 今日速览

NanoBot 今日保持**高活跃度开发节奏**，29 个 PR 更新（18 待合并/11 已处理）与 6 个活跃 Issue 显示社区贡献持续涌入。安全加固成为主线：3 个安全相关 PR 涉及 Shell 注入防护、SSRF 检测和历史文件保护，反映项目正从功能扩展转向生产级 hardening。Provider 层出现集中修复潮——reasoning 字段泄漏、HTTP keepalive 导致本地模型连接失败等问题在 24 小时内被报告并已有 PR 响应。无新版本发布，当前处于密集迭代期而非发布窗口。

---

## 2. 版本发布

**无新版本发布**

当前版本仍为 **v0.1.5**（据 Issue #3435 用户报告）。近期无 release 计划信号，但安全修复积累可能催生 patch 版本。

---

## 3. 项目进展

### 今日合并/关闭的关键 PR（11 条中筛选）

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#2345](https://github.com/HKUDS/nanobot/pull/2345) | JasonYeYuhe | **中文 README 翻译** | 降低中文开发者准入门槛，社区国际化基础设施 |
| [#3336](https://github.com/HKUDS/nanobot/pull/3336) | aiguozhi123456 | **Office 文档支持（DOCX/XLSX/PPTX）** | 扩展 `read_file` 工具能力边界，企业场景适用性↑ |
| [#2791](https://github.com/HKUDS/nanobot/pull/2791) | lzmjlrt | **ask_user 交互式工具** | 引入人机协作确认机制，减少 agent 自主决策风险 |
| [#3176](https://github.com/HKUDS/nanobot/pull/3176) → 关闭，[#3449](https://github.com/HKUDS/nanobot/pull/3449) 重开 | chengyongru | **飞书线程会话隔离**（迭代优化） | 企业 IM 场景体验打磨，从"能用"到"好用" |
| [#3447](https://github.com/HKUDS/nanobot/pull/3447) | chengyongru | **MS Teams 线程回复修复** | 多平台渠道稳定性补齐 |
| [#3450](https://github.com/HKUDS/nanobot/pull/3450) | ronkommoji | 关闭（无描述，疑似测试/误提） | — |

**整体评估**: 今日合并内容覆盖**文档国际化、文件处理能力、人机交互安全、企业 IM 渠道**四大维度，项目从"核心 agent 能力"向"企业级交付套件"演进。

---

## 4. 社区热点

### 🔥 讨论最活跃：Provider 容灾与 Failover（8 评论）

| 条目 | 链接 | 热度分析 |
|:---|:---|:---|
| **Issue #3376** - 支持模型异常自动切换（Provider/Model Failover） | [链接](https://github.com/HKUDS/nanobot/issues/3376) | **8 评论，1 👍**，为今日最高互动 |

**诉求深度解析**:
- **痛点本质**: 多 provider 配置沦为"摆设"，单点故障即中断任务
- **用户场景**: 生产环境 7×24 运行，需跨 OpenAI/Anthropic/本地模型/国产 API 的自动降级
- **技术期待**: 不仅是"重试"，而是基于错误码（429/5xx/超时）的智能路由 + 健康检查 + 优雅回切
- **路线图信号**: 该 Issue 创建于 4-22，4-26 仍有更新，说明需求紧迫且未被现有 PR 覆盖。**可能成为 v0.2.0 核心特性**

---

### 其他高关注议题

| 条目 | 链接 | 核心诉求 |
|:---|:---|:---|
| Issue #3292 - Session-Level Focus Tool | [链接](https://github.com/HKUDS/nanobot/issues/3292) | 长任务中断后恢复主上下文，agent 需要"任务板"心智模型 |
| Issue #3436 - 调用外部 agent（OpenCode/Codex） | [链接](https://github.com/HKUDS/nanobot/issues/3436) | 避免重复造轮子，纳入生态而非封闭自研 |

---

## 5. Bug 与稳定性

| 严重程度 | 条目 | 状态 | 详情 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | **Issue #3443** - `reasoning` 字段泄漏至用户可见内容 | [OPEN](https://github.com/HKUDS/nanobot/issues/3443) | 非流式路径下模型思维链被当作用户回复输出，**隐私/体验双重风险** | ✅ **#3445** [GUTYL](https://github.com/HKUDS/nanobot/pull/3445) + **#3446** [chengyongru](https://github.com/HKUDS/nanobot/pull/3446) **双方案竞争** |
| 🔴 **高** | **PR #3366** - Shell 注入漏洞（`path_append`） | [OPEN](https://github.com/HKUDS/nanobot/pull/3366) | 非 Windows 平台 `_guard_command` 绕过，**任意命令执行** | 自身即为 fix，待合并 |
| 🟡 **中** | **PR #3252** - SSRF 扫描漏检非 HTTP scheme | [OPEN](https://github.com/HKUDS/nanobot/pull/3252) | `file://`, `gopher://` 等协议绕过内网保护 | 自身即为 fix，待合并 |
| 🟡 **中** | **Issue #3435** - 企业微信媒体文件返回失败 | [OPEN](https://github.com/HKUDS/nanobot/issues/3435) | `[file upload failed: xxxxxx]`，影响文件类交互 | ❌ 暂无 PR |
| 🟡 **中** | **PR #3444** - 本地模型 HTTP keepalive 导致连接失败 | [OPEN](https://github.com/HKUDS/nanobot/pull/3444) | Ollama/vLLM/llama.cpp 空闲连接被服务端关闭后复用失败 | 自身即为 fix，待合并 |
| 🟢 **低** | **PR #3427** - DeepSeek 非字符串 content 导致请求失败 | [OPEN](https://github.com/HKUDS/nanobot/pull/3427) | 类型不规范引发 API 错误 | 自身即为 fix，待合并 |

**安全态势**: 3 个安全 PR 同时待审（#3366, #3252, #3255），建议维护者优先处理以降低 CVE 风险。

---

## 6. 功能请求与路线图信号

| 功能请求 | 来源 | 成熟度评估 | 纳入可能性 |
|:---|:---|:---|:---|
| **Provider Failover / 自动容灾切换** | [Issue #3376](https://github.com/HKUDS/nanobot/issues/3376) | 需求清晰，有详细错误码分类，社区呼声高 | ⭐⭐⭐⭐⭐ **高优先级，预计 v0.2.0** |
| **Session-Level Focus / 任务锚定** | [Issue #3292](https://github.com/HKUDS/nanobot/issues/3292) | 概念抽象，实现路径待讨论 | ⭐⭐⭐⭐ 中长期 |
| **外部 Agent 调用（OpenCode/Codex）** | [Issue #3436](https://github.com/HKUDS/nanobot/issues/3436) | 有参考实现（TinyAgent），架构兼容待评估 | ⭐⭐⭐⭐ 生态战略级 |
| **MGP 记忆治理协议集成** | [PR #3408](https://github.com/HKUDS/nanobot/pull/3408) | **已有完整 PR**，sidecar 架构，opt-in 设计 | ⭐⭐⭐⭐⭐ **即将合并** |
| **Heartbeat 调试触发器** | [Issue #3437](https://github.com/HKUDS/nanobot/issues/3437) | 开发体验优化，范围可控 | ⭐⭐⭐ 短期 |
| **OpenRouter 免费模型优先** | [PR #3416](https://github.com/HKUDS/nanobot/pull/3416) | **已有 PR**，`:free` 后缀自动追加 | ⭐⭐⭐⭐⭐ **即将合并** |

**路线图推断**: 下一版本（v0.1.6 或 v0.2.0）将聚焦 **"稳定性 + 成本优化 + 企业集成"** 三角，而非纯功能扩张。

---

## 7. 用户反馈摘要

> 从 Issues 评论中提炼的真实声音

| 主题 | 用户原声/场景 | 情感 |
|:---|:---|:---|
| **多 Provider 可靠性** | "任务仍然因为单点异常而中断，影响可用性和连续运行体验" | 😤 不满 |
| **长任务上下文丢失** | "人们会维护一个心理'任务板'——处理完打断后回到主任务，LLM agent 缺乏这种锚定能力" | 😔 期待 |
| **生态开放性** | "能否让 NanoBot 依赖 OpenCode/Codex 工作，而非其内部 agent？" | 🤔 质疑封闭性 |
| **企业微信体验** | 文件上传失败，无有效错误信息 | 😤 不满 |
| **调试体验** | "Heartbeat 只能通过 30 分钟定时器和日志观察，无法从已知渠道上下文触发" | 😤 不满 |
| **安全信任** | 社区主动提交 3 个安全 PR，反映用户将 NanoBot 用于**生产环境** | 👍 认可项目价值 |

**关键洞察**: 用户正将 NanoBot 从"实验性 agent"推向"生产基础设施"，对稳定性、可观测性、安全性的要求质变升级。

---

## 8. 待处理积压

> 提醒维护者关注：长期未响应或高价值但停滞的条目

| 条目 | 创建日期 | 最后更新 | 风险/提醒 |
|:---|:---|:---|:---|
| **PR #3253** - Whisper 转录瞬态失败重试 | 2026-04-17 | 2026-04-25 | 语音场景核心体验，9 天待审，竞争 PR 可能涌现 |
| **PR #3255** - history.jsonl 文件系统层保护 | 2026-04-17 | 2026-04-25 | 安全加固，与 #3252、#3366 形成安全修复矩阵，建议**批量审阅合并** |
| **Issue #3292** - Session Focus Tool | 2026-04-19 | 2026-04-25 | 仅 2 评论，但概念前瞻性强，建议维护者回应是否纳入路线图 |
| **PR #3303** - spawn_status/cancel + 循环检测 | 2026-04-19 | 2026-04-25 | 子 agent 治理能力，PR 体积可能较大，需分配 review 资源 |

---

## 今日数据看板

```
Issues:  6 活跃 | 0 关闭 | 净增 +6
PRs:     18 待合并 | 11 已处理 | 29 总更新
Releases: 0
安全相关 PR: 3（#3366, #3252, #3255）
Provider 层修复: 4（#3443/#3445/#3446, #3444, #3427, #3416）
```

---

*本日报基于 GitHub 公开数据生成，未包含私有讨论或离线沟通信息。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**日期**: 2026-04-26  
**项目**: [NousResearch/hermes-agent](https://github.com/nousresearch/hermes-agent)

---

## 1. 今日速览

Hermes Agent 今日呈现**极高社区活跃度**：24小时内 Issues 与 PR 各更新50条，但合并/关闭率偏低（Issues 仅关闭2条，PR 仅合并/关闭7条），显示社区需求井喷但维护吞吐存在瓶颈。核心战场集中在 **DeepSeek/Kimi 推理模式兼容性**（多起关联 Bug）、**安全漏洞修复**（3个 P1 级安全问题待处理）以及 **多平台网关稳定性**（Discord、Slack、Feishu 均有配置或连接问题）。今日无新版本发布，项目处于密集修 Bug 与功能打磨阶段。

---

## 2. 版本发布

**无** — 今日未发布新版本。

---

## 3. 项目进展

### 今日合并/关闭的 PR（7条）

| PR | 作者 | 状态 | 核心贡献 |
|:---|:---|:---|:---|
| [#15807](https://github.com/NousResearch/hermes-agent/pull/15807) | briandevans | **合并** | 修复网关缓存代理的中断递归问题：保护 `_last_activity_ts` 仅在深度为0时重置，新增5个针对性测试 |
| [#9638](https://github.com/NousResearch/hermes-agent/pull/9638) | justyx404 | **合并** | 修复 CLI `@` 补全崩溃：移除错误的 `@staticmethod` 装饰，解决 `NameError` |
| [#15814](https://github.com/NousResearch/hermes-agent/pull/15814) | Whaleylaw | **关闭** | `delegate_task` 的 `session_target` 路由功能（将子代理转录路由至命名网关会话），未说明关闭原因 |
| [#15809](https://github.com/NousResearch/hermes-agent/pull/15809) | teknium1 | **合并** | 文档：在 webhooks 和配置页面嵌入教程视频 |
| [#15808](https://github.com/NousResearch/hermes-agent/pull/15808) | teknium1 | **合并** | 文档：在 obliteratus 技能中链接 YouTube 视频指南 |
| [#11581](https://github.com/NousResearch/hermes-agent/pull/11581) | el-analista | **合并** | 修复网关回复上下文注入：确保 Telegram 等平台的 `[Replying to: ...]` 锚点始终显示 |

**整体推进评估**：今日合并以**稳定性修复**和**文档完善**为主，缺乏重大功能落地。网关核心状态机（#15807）和 CLI 补全崩溃（#9638）两个长期痛点得到修复，但 43 个待合并 PR 的积压显示维护带宽紧张。

---

## 4. 社区热点

### 🔥 最高讨论热度

| 排名 | Issue/PR | 评论数 | 核心诉求 |
|:---|:---|:---|:---|
| 1 | [#6475](https://github.com/NousResearch/hermes-agent/issues/6475) **Anthropic Claude 订阅认证返回"额外用量已耗尽"** | **25** | 用户支付后仍被错误拦截，重启/重登录无效，疑似 Anthropic 代理层的用量计算 Bug 或状态同步延迟 |
| 2 | [#13065](https://github.com/NousResearch/hermes-agent/issues/13065) **原生视觉支持（反对强制路由到辅助视觉模型）** | **6** | 用户要求 GPT-4o、GLM-5V 等原生视觉模型直接处理图像，而非强制经 qwen3-vl 中转，附带参考实现 |
| 3 | [#15741](https://github.com/NousResearch/hermes-agent/issues/15741) / [#15717](https://github.com/NousResearch/hermes-agent/issues/15717) **DeepSeek `reasoning_content` 400 错误** | **4+4** | Cron 路径和常规路径均触发 DeepSeek V4 推理模式的必填字段校验失败，#15213 修复未覆盖 Cron 场景 |

**诉求分析**：社区核心矛盾集中在 **"代理层抽象过度 vs. 原生能力透传"**——用户希望 Hermes 减少中间层干预（视觉路由、推理内容字段处理），直接暴露底层模型能力。同时 Anthropic 订阅体系的商务/技术耦合问题持续引发付费用户流失焦虑。

---

## 5. Bug 与稳定性

### P1（严重）— 需立即关注

| Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|
| [#10695](https://github.com/NousResearch/hermes-agent/issues/10695) | **Python 依赖 CVE**：aiohttp、cryptography、curl-cffi 版本过低存在已知漏洞 | 待处理 | ❌ 无 |
| [#15459](https://github.com/NousResearch/hermes-agent/issues/15459) | **Terminal 工具泄漏 `declare -x` 环境变量转储** 至 LLM 上下文（macOS 持久化 Shell） | 待处理 | ❌ 无 |
| [#15812](https://github.com/NousResearch/hermes-agent/issues/15812) | **回归**：#15749 破坏 DeepSeek/Kimi 工具调用消息的 `reasoning` 字段提升 | 待处理 | [#15478](https://github.com/NousResearch/hermes-agent/pull/15478) 待审 |
| [#10692](https://github.com/NousResearch/hermes-agent/issues/10692) | **`shell=True` 绕过终端工具安全控制**：配置驱动执行路径无审批/审计/脱敏 | 待处理 | ❌ 无 |
| [#10693](https://github.com/NousResearch/hermes-agent/issues/10693) | **OAuth PKCE `code_verifier` 复用为 `state` 参数**：验证器通过授权 URL 泄漏 | 待处理 | ❌ 无 |
| [#10719](https://github.com/NousResearch/hermes-agent/issues/10719) | **上下文压缩静默丢弃全部对话轮次**（摘要生成失败时无通知/恢复） | 待处理 | ❌ 无 |

### P2（重要）

| Issue | 描述 | Fix PR |
|:---|:---|:---|
| [#15741](https://github.com/NousResearch/hermes-agent/issues/15741) | Cron 路径 DeepSeek `reasoning_content` 400 错误（#15213 修复未覆盖） | [#15478](https://github.com/NousResearch/hermes-agent/pull/15478) 待审 |
| [#15717](https://github.com/NousResearch/hermes-agent/issues/15717) | DeepSeek 推理模式需将 `reasoning_content` 回传 API | [#15478](https://github.com/NousResearch/hermes-agent/pull/15478) 待审 |
| [#15262](https://github.com/NousResearch/hermes-agent/issues/15262) | Discord `free_response_channels` 正确匹配破坏依赖通配符 `*` 的旧工作流 | ❌ 无 |
| [#15290](https://github.com/NousResearch/hermes-agent/issues/15290) | NAS Docker 部署权限被拒绝（`/opt/data/config.yaml`） | ❌ 无 |
| [#15275](https://github.com/NousResearch/hermes-agent/issues/15275) | TUI 重复生成 `hermes mcp serve` 子进程 | ❌ 无 |

---

## 6. 功能请求与路线图信号

| Issue | 需求 | 成熟度 | 纳入可能性 |
|:---|:---|:---|:---|
| [#13065](https://github.com/NousResearch/hermes-agent/issues/13065) | **原生视觉支持**（主模型直接处理图像，非强制辅助模型路由） | ⭐⭐⭐ 含参考实现+Bug 发现 | **高** — 社区强烈诉求，已有技术方案 |
| [#10835](https://github.com/NousResearch/hermes-agent/issues/10835) | **MCP 服务器暴露 Hermes 记忆**（MEMORY.md/USER.md） | ⭐⭐⭐ 含详细设计 | **高** — MCP 生态扩展关键 |
| [#10674](https://github.com/NousResearch/hermes-agent/issues/10674) | **Web Dashboard 多配置切换** | ⭐⭐⭐ 含根因分析与推荐设计 | **中** — 架构改动较大 |
| [#10644](https://github.com/NousResearch/hermes-agent/issues/10644) | **Brave Search 原生搜索后端** | ⭐⭐ 标准功能请求 | **中** — 搜索后端扩展，竞品已有 |
| [#15789](https://github.com/NousResearch/hermes-agent/issues/15789) | **`delegate_task` 按任务覆盖模型/提供商** | ⭐⭐ 场景明确 | **中** — 与 #15814 的 `session_target` 方向协同 |
| [#15801](https://github.com/NousResearch/hermes-agent/issues/15801) | **会话压缩结构化 API 原语** | ⭐⭐ 架构层需求 | **低-中** — 需 API 设计评审 |
| [#10567](https://github.com/NousResearch/hermes-agent/issues/10567) | **Dashboard `--host` 与 CORS 配置**（Tailscale/VPN 远程访问） | ⭐⭐ 配置扩展 | **高** — 低改动高价值 |
| [#10589](https://github.com/NousResearch/hermes-agent/pull/10589) | **Telegram Managed Bots 自动创建**（Bot API 9.6） | ⭐⭐⭐ 完整 PR 待审 | **高** — 已实现，需合并 |

---

## 7. 用户反馈摘要

### 😤 核心痛点

| 场景 | 来源 Issue |
|:---|:---|
| **"付费了还被拦在门外"** — Anthropic 订阅认证反复提示用量耗尽，用户感到"被诈骗" | [#6475](https://github.com/NousResearch/hermes-agent/issues/6475) |
| **"视觉模型明明支持，非要绕一圈"** — 强制辅助视觉模型导致延迟、成本、可靠性三重损失 | [#13065](https://github.com/NousResearch/hermes-agent/issues/13065) |
| **"DeepSeek 推理模式一碰就碎"** — 同一根因在不同路径反复出现，修复像打地鼠 | [#15741](https://github.com/NousResearch/hermes-agent/issues/15741) [#15717](https://github.com/NousResearch/hermes-agent/issues/15717) |
| **"Docker 部署权限地狱"** — NAS 用户卡在 `Permission denied`，文档缺失 | [#15290](https://github.com/NousResearch/hermes-agent/issues/15290) |
| **"终端工具输出被污染"** — macOS 持久化 Shell 的环境变量转储淹没真实输出 | [#15459](https://github.com/NousResearch/hermes-agent/issues/15459) |

### 😐 中性/复杂反馈

- **配置系统碎片化**：环境变量 vs YAML 回退逻辑不一致（[#10581](https://github.com/NousResearch/hermes-agent/issues/10581)），自定义提供商 `context_length` 被忽略（[#15779](https://github.com/NousResearch/hermes-agent/issues/15779)）
- **Discord 行为变更破坏工作流**：正确实现 `free_response_channels` 反而成为"破坏性变更"（[#15262](https://github.com/NousResearch/hermes-agent/issues/15262)）

### 👍 积极信号

- Brave Search 集成请求获 10 👍（[#10644](https://github.com/NousResearch/hermes-agent/issues/10644)），显示社区对搜索成本敏感
- 用户主动提供参考实现（[#13065](https://github.com/NousResearch/hermes-agent/issues/13065)）和详细设计文档（[#10674](https://github.com/NousResearch/hermes-agent/issues/10674)），贡献质量提升

---

## 8. 待处理积压

### ⚠️ 长期未响应的高价值 Issue/PR

| 条目 | 创建时间 | 最后更新 | 风险 |
|:---|:---|:---|:---|
| [#10695](https://github.com/NousResearch/hermes-agent/issues/10695) **Python 依赖 CVE 安全审计** | 2026-04-16 | 2026-04-25 | 🔴 **10天未关闭**，多个 CVE 影响生产安全 |
| [#10692](https://github.com/NousResearch/hermes-agent/issues/10692) **`shell=True` 绕过安全控制** | 2026-04-16 | 2026-04-25 | 🔴 **10天未响应**，配置注入即可 RCE |
| [#10693](https://github.com/NousResearch/hermes-agent/issues/10693) **OAuth PKCE 验证器泄漏** | 2026-04-16 | 2026-04-25 | 🔴 **10天未响应**，认证流程加密缺陷 |
| [#8993](https://github.com/NousResearch/hermes-agent/issues/8993) **v0.8.0 工具调用不稳定/幻觉** | 2026-04-13 | 2026-04-25 | 🟡 **13天**，影响核心功能体验 |
| [#10678](https://github.com/NousResearch/hermes-agent/issues/10678) **`delegate_task` 无限挂起** | 2026-04-16 | 2026-04-25 | 🟡 **10天**，生产环境任务堆积风险 |
| [#13267](https://github.com/NousResearch/hermes-agent/pull/13267) **Copilot Remote 功能** | 2026-04-21 | 2026-04-26 | 🟡 **PR 待审5天**，GitHub 新功能对接窗口期 |

---

## 健康度评估

| 维度 | 评分 | 说明 |
|:---|:---|:---|
| 社区活跃度 | ⭐⭐⭐⭐⭐ | 日更100条（Issues+PR），参与度极高 |
| 维护响应速度 | ⭐⭐⭐☆☆ | 关闭率仅 4-14%，43 PR 积压，安全 Issue 10天未响应 |
| 代码质量趋势 | ⭐⭐⭐⭐☆ | 回归测试覆盖提升（#15807 新增5测试），但回归引入率仍高 |
| 安全态势 | ⭐⭐☆☆☆ | **3个 P1 安全 Issue 未处理**，依赖 CVE 未修复 |
| 功能演进 | ⭐⭐⭐☆☆ | 以修 Bug 为主，重大功能（视觉、MCP 记忆）有设计但未落地 |

**建议优先级**：安全 CVE 修复 > DeepSeek 推理模式统一修复 > 原生视觉支持评审 > 维护流程扩容（增加 reviewer 或自动化合并策略）。

---

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-04-26

> **项目**: [sipeed/picoclaw](https://github.com/sipeed/picoclaw) | **日期**: 2026-04-26 | **数据周期**: 过去24小时

---

## 1. 今日速览

PicoClaw 今日保持**高活跃度**，21 个 PR 更新（12 个已合并/关闭）与 7 个 Issues 更新（5 个关闭）显示社区与核心团队同步推进。DeepSeek 推理模式与 MCP 工具链成为今日修复焦点，共 4 个相关 PR 合并；Web Chat 体验持续打磨，结构化工具调用与思考气泡 UX 进入迭代深水区。Nightly 构建持续发布，v0.2.7 正式版临近。

---

## 