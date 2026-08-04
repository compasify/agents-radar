# OpenClaw 生态日报 2026-08-04

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-08-04 01:22 UTC

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

## OpenClaw 项目动态日报 — 2026-08-04

### 1. 今日速览

过去 24 小时项目保持**极高活跃度**：共更新 500 条 Issue（新开/活跃 469 条，关闭 31 条）、500 条 PR（待合并 328 条，合并/关闭 172 条），并发布 2 个补丁版本（v2026.7.1-1 / v2026.7.1-2）。社区讨论焦点集中在 DeepSeek v4 静默失败（100 条评论）与 Realtime voice 状态无界增长（50 条评论）两大 P1 可靠性问题上。维护者今日合并/关闭了多个 QA 补强 PR，并持续推动沙箱安全、Codex 回复完整性等关键修复，整体修复节奏良好；但 P1 级会话状态与消息丢失类问题积压仍多，是当前项目健康度的主要隐患。

---

### 2. 版本发布

#### v2026.7.1-2 — openclaw 2026.7.1-2
**Fixes**
- **npm 插件更新**：接受新版 npm 客户端返回的 singleton-array metadata，使受跟踪的官方插件能够正常安装并更新至修复版本。（[#108336](https://github.com/openclaw/openclaw/issues/108336)）

#### v2026.7.1-1 — openclaw 2026.7.1-1
**Fixes**
- **Codex 进度回复**：app-server 在投递进度消息后保持回合运行，确保 GPT/Codex 能到达权威终态回复，而非中途停止。（[#106961](https://github.com/openclaw/openclaw/issues/106961)、[#108487](https://github.com/openclaw/openclaw/issues/108487)，感谢 @joshavant）
- **Memory Core 启动修复**：恢复派生的 legacy-index 及相关启动链路。

**破坏性变更**：无。**迁移注意**：使用 Codex 后端的用户建议尽快升级至 v2026.7.1-1 以获取回复完整性修复；npm 插件用户需同步更新插件客户端。

---

### 3. 项目进展

今日合并/关闭 172 个 PR，从可见数据看，**维护者 vincentkoc 的 QA 体系补强系列**是今日合并重点：

- **chore(qa): cover sandbox workspace isolation**（[#119038](https://github.com/openclaw/openclaw/pull/119038)）：为 `tools.workspace-isolation` 增加真实 Linux Docker 沙箱运行时证明。
- **test(qa): cover progress followthrough evidence**（[#119039](https://github.com/openclaw/openclaw/pull/119039)）：为进度可见性与完成回执建立主证据链。
- **chore(qa): cover plugin testing harness contracts**（[#118933](https://github.com/openclaw/openclaw/pull/118933)）：补全插件测试脚手架/夹具的 QA 所有权。

这批 QA 合并表明项目正在系统性地将关键路径从"口头验证"转向"可执行产品证明"，对长期稳定性意义重大。此外，以下在途 PR 展现了明确的修复方向：

- **fix(memory): taint turns for conversations_turn, pdf, and image tools**（[#116238](https://github.com/openclaw/openclaw/pull/116238)）：为外部内容工具补充 prompt injection 污染标记，安全边界补强。
- **fix(gateway): project effective session reasoning**（[#118682](https://github.com/openclaw/openclaw/pull/118682)）：修复 Control UI 隐藏推理状态的问题。
- **fix(telegram): bound the request deadline to the body read**（[#119037](https://github.com/openclaw/openclaw/pull/119037)）：将 Telegram long-polling 卡死从 150-184s 缩短至配置的 45s 超时。

整体看，项目在可靠性修复、安全边界、QA 覆盖三个维度同步推进。

---

### 4. 社区热点

| 排名 | Issue/PR | 评论数 | 状态 | 核心诉求 |
|---|---|---|---|---|
| 1 | [#116277 DeepSeek v4 Flash silent reply failure](https://github.com/openclaw/openclaw/issues/116277) | 100 | 已关闭 | DeepSeek v4 Flash 静默失败，不回帖却投递通用 fallback "No reply was generated"。社区对"静默失败"模式强烈不满 |
| 2 | [#116201 Realtime voice unbounded provider/consult state](https://github.com/openclaw/openclaw/issues/116201) | 50 | 开放，P1 | 实时语音会话在慢/突发供应商行为下可无限保留 superseded 状态，缺少硬所有权边界 |
| 3 | [#7707 Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707) | 24 | 开放，P2 | 按来源为记忆条目打信任标签，防网页/三方内容投毒记忆 |
| 4 | [#44925 Subagent completion silently lost](https://github.com/openclaw/openclaw/issues/44925) | 23 | 开放，P1 | Subagent 完成结果在超时/直发失败后无重试、无通知、无自动重启 |
| 5 | [#48788 Central filename encoding utility](https://github.com/openclaw/openclaw/issues/48788) | 20 | 开放，P3 | 跨渠道统一文件名多编码处理（Shift-JIS、EUC-KR、GB18030 等） |

**分析**：评论量 Top 2 均属 P1 可靠性问题，说明当前社区最敏感的痛点是"系统静默出错且无恢复路径"。DeepSeek 事件 100 条评论是近期最热 Issue，反映出用户对模型供应商故障时的降级体验期待较高。Memory Trust Tagging 长期保持热度，显示安全方向是社区持续关注的投资标的。

---

### 5. Bug 与稳定性

按严重程度排列（标注是否已有 fix PR）：

#### P0 · 阻断级
- **[Bug] service-env generator double-quotes values, breaking AWS_REGION hostname**（[#103804](https://github.com/openclaw/openclaw/issues/103804)）：环境变量序列化同时包裹 JSON 双引号与 shell 单引号，导致 AWS_REGION 等配置失效。已有 linked PR。
- **[fix(security)] narrow sandbox parent to exact active session workspace**（[#108979](https://github.com/openclaw/openclaw/pull/108979)，PR）：防止跨会话读取沙箱媒体文件，P0 安全修复，**仍需 proof**。

#### P1 · 高
- **Realtime voice 状态无界增长**（[#116201](https://github.com/openclaw/openclaw/issues/116201)）：无 fix PR，维护者审查中。
- **Subagent 完成结果静默丢失**（[#44925](https://github.com/openclaw/openclaw/issues/44925)）：无 fix PR，需产品决策。
- **Codex 长回复被静默截断至 ~1000-1100 字符**（[#84516](https://github.com/openclaw/openclaw/issues/84516)）：`stop=null` 且 `aborted=false`，无 fix PR。
- **Subagent 完成投递在直发超时/清理时丢失**（[#67777](https://github.com/openclaw/openclaw/issues/67777)）：无 fix PR。
- **A2A sessions_send 双向调用导致重复消息**（[#39476](https://github.com/openclaw/openclaw/issues/39476)）：已有 linked PR。
- **所有持久会话被硬编码限制在 128k 上下文**（[#116010](https://github.com/openclaw/openclaw/issues/116010)）：不随模型/配置变化，已有 linked PR。
- **chat.send 因 stale expectedLeafEntryId 被拒**（[#115700](https://github.com/openclaw/openclaw/issues/115700)）：已有 linked PR。

#### P2 · 回归与体验
- **rich messages 折叠标签渲染损坏**（[#112906](https://github.com/openclaw/openclaw/issues/112906)）：v2026.7.1 引入的回归，`:::collapsible` 内容无法折叠，无 fix PR。
- **记忆管理行为不一致**（[#43747](https://github.com/openclaw/openclaw/issues/43747)）：3 人团队使用同一版本，记忆存储路径/方式各不相同。
- **openclaw status 误报 mem0 不可用**（[#57256](https://github.com/openclaw/openclaw/issues/57256)）：状态显示与实际运行不符。

> 说明：DeepSeek 静默失败（#116277）今日已关闭并附带修复 PR，响应速度值得肯定。

---

### 6. 功能请求与路线图信号

| 功能请求 | 评论/点赞 | 状态 | 路线图判断 |
|---|---|---|---|
| [Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707) | 24 评论 | 开放，需维护者决策 | 安全基础能力，呼声高，可能进入下一阶段安全专项 |
| [Central filename encoding utility](https://github.com/openclaw/openclaw/issues/48788) | 20 评论 | 开放，已有部分修复（#48578） | 架构优化方向明确，跨渠道收益大，建议纳入 |
| [MathJax/LaTeX support in Control UI](https://github.com/openclaw/openclaw/issues/42840) | 👍10 | 开放 | 用户意愿强，学术/科学场景刚需 |
| [Self-hosted STT/TTS in webchat](https://github.com/openclaw/openclaw/issues/45508) | 👍2 | 开放 | 需产品决策，与 gateway 架构契合度较高 |
| [Provider fallback by failure class](https://github.com/openclaw/openclaw/issues/47910) | 8 评论 | 开放 | 与 402 死循环（#39807）直接相关，有落地价值 |
| [YAML config format support](https://github.com/openclaw/openclaw/issues/45758) | 👍2 | 开放 | 低优先级 |

**新功能 PR 信号**：今日提交的 [feat(agents): allow session_status to set thinking level](https://github.com/openclaw/openclaw/pull/119006) 与 Custodian 向导 UX 改进（[#118953](https://github.com/openclaw/openclaw/pull/118953)、[#118954](https://github.com/openclaw/openclaw/pull/118954)）显示项目在 agent 可控性与配置向导体验上持续投入，有望进入 v2026.7.2 或 v2026.8 路线。

---

### 7. 用户反馈摘要

- **"静默失败"是最集中的负面体验**：DeepSeek 不回帖只给 fallback、Codex 截断、Subagent 结果丢失、write/exec 参数静默清空（[#53408](https://github.com/openclaw/openclaw/issues/53408)）。用户普遍诉求为：失败必须可见、可重试、有告警，而非无声吞掉。
- **部署配置摩擦**：#45765（OPENCLAW_HOME 嵌套目录）今日关闭，问题已处理；[#103804](https://github.com/openclaw/openclaw/issues/103804)（AWS_REGION 被引号破坏）影响真实云部署，用户期待快速修复。
- **记忆功能体验混乱**：[#43747](https://github.com/openclaw/openclaw/issues/43747) 用户反馈多人使用同一版本但记忆存储行为不一致，"从未看到两个人的记忆被同样管理"。
- **上下文限制引发质疑**：[#116010](https://github.com/openclaw/openclaw/issues/116010) 用户测试多档模型均被限制在 128k，认为浪费了更高模型的上下文能力。
- **正面信号**：DeepSeek 事件（#116277）从爆发到关闭处理迅速；维护者持续合并 QA 补强 PR，用户对项目工程严谨性的信心在提升。

---

### 8. 待处理积压

以下问题长期未获明确推进，建议维护者优先级关注：

1. **[Feature Request] Memory Trust Tagging by Source**（[#7707](https://github.com/openclaw/openclaw/issues/7707)）：2 月 3 日创建，已积压 6 个月，24 条评论，涉及安全基础能力。
2. **[Bug] Subagent completion silently lost**（[#44925](https://github.com/openclaw/openclaw/issues/44925)）：3 月 13 日创建，P1，23 条评论，无 fix PR。
3. **[PR] Redact exec tool result payloads**（[#81185](https://github.com/openclaw/openclaw/pull/81185)）：5 月 12 日创建，XL 规模，已等待近 3 个月，状态 waiting on author。
4. **[PR] fix(security): narrow sandbox parent**（[#108979](https://github.com/openclaw/openclaw/pull/108979)）：P0 安全修复，7 月 16 日创建，仍处 needs proof，建议优先推进。
5. **[PR] fix(doctor): stop advisory state-dir skips from wedging gateway startup**（[#114678](https://github.com/openclaw/openclaw/pull/114678)）：7 月 27 日已标记 "ready for maintainer look"，尚未合并。
6. **[Bug] rich messages 折叠标签回归**（[#112906](https://github.com/openclaw/openclaw/issues/112906)）：7 月 23 日报告，影响 v2026.7.1 全系用户，尚无 fix PR。

---

**日报总结**：OpenClaw 当前处于"高活跃、高压力"状态。修复速度与 QA 投入显著提升，但 P1 可靠性债（静默失败、状态丢失）仍是社区最大不满来源。建议下一版本优先聚焦三类工作：① 消灭静默失败路径（统一错误可见性与重试策略）；② 推进 P0 沙箱安全 PR 合并；③ 将 Memory Trust Tagging 纳入路线图讨论。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析报告

**报告日期**：2026-08-04  
**数据来源**：OpenClaw、NanoBot、Hermes Agent、PicoClaw、NanoClaw、NullClaw、IronClaw、LobsterAI、Moltis、CoPaw、ZeptoClaw、ZeroClaw 项目日报

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态呈现“头部领跑、多元分层”格局。OpenClaw 以每日 500 条 Issue/PR 更新的体量一骑绝尘，生态位类似“旗舰参照”；NanoBot、CoPaw 则保持高合并率，体现快速迭代能力；Hermes Agent、IronClaw、ZeroClaw 进入大规模重构/质量巩固期，合并率偏低。社区关注点高度聚焦于三大问题：**静默失败与可恢复性**、**安全与审计**、**新模型/Provider 的快速适配**。同时，MCP 生态治理正成为各项目新的竞争焦点。

---

## 2. 各项目活跃度对比

| 项目 | Issue 更新 | PR 更新 | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（关闭 31） | 500（合并/关闭 172） | 2 个补丁版本 | 极高活跃；修复节奏好，但 P1 可靠性积压多 |
| **NanoBot** | 2 | 36（合并/关闭 25） | 无 | 高活跃且高效，合并率 69%，维护者响应迅速 |
| **Hermes Agent** | 50（关闭 9） | 50（合并/关闭 3） | 无（昨日发布 v0.20.0） | 极高活跃；但 47 条 PR 待合并，合并带宽瓶颈 |
| **PicoClaw** | 8（关闭 5） | 6（合并/关闭 3） | 无 | 中等活跃；积压清理好，高影响 Bug 仍缺修复 |
| **NanoClaw** | 1 | 9（合并/关闭 6） | 无 | 健康；核心维护与社区贡献双线并进 |
| **NullClaw** | 1 | 5（合并/关闭 2） | 无 | 中等活跃；长期 Bug 未决，流式工具调用已落地 |
| **IronClaw** | 45（关闭 9） | 50（合并/关闭 18） | 无（release PR 积压 32 天） | 架构重构期；治理强度高，但版本交付阻塞 |
| **LobsterAI** | 2（更新） | 11（合并/关闭 6） | 无 | 活跃；核心 PR 合并快，但社区 PR 长期 stale |
| **Moltis** | 0 | 1（开放） | 无 | 低活跃；单点推进，聚焦 MCP 治理 |
| **CoPaw** | 23（关闭 6） | 50（合并/关闭 24） | v2.1.0-beta.1 | 高活跃；功能与稳定并行，中文社区活跃 |
| **ZeroClaw** | 50（关闭 7） | 50（合并/关闭 3） | 无 | 高活跃但合并率仅 6%；RFC 密集，架构决策期 |
| **ZeptoClaw** | 无 | 无 | 无 | 停滞 |

---

## 3. OpenClaw 在生态中的定位

- **社区规模绝对领先**：每日 500 条 Issue/PR 更新，是 Hermes/IronClaw/ZeroClaw 的 10 倍，NanoBot 的 14 倍。DeepSeek 静默失败 Issue 获 100 条评论，为全生态最高。
- **优势**：多模型后端抽象（GPT/Codex/DeepSeek 等）、官方插件生态、QA 体系系统化（真实沙箱证明）、发布节奏快（同日 2 个补丁）。
- **技术路线差异**：OpenClaw 更强调“会话状态 + 沙箱安全 + 多通道”的综合治理，区别于 NanoBot 的轻量快速接入、IronClaw 的架构重构驱动、Moltis 的单一 MCP 深度治理。
- **潜在瓶颈**：合并率约 34%，328 条 PR 待合并，显示高流量下评审容量饱和；P1 级可靠性问题（状态丢失、静默失败）积压仍是健康度主要隐患。

---

## 4. 共同关注的技术方向

### 4.1 静默失败与错误可恢复性
- **OpenClaw**：DeepSeek 静默失败、Subagent 完成结果丢失、Codex 回复截断
- **CoPaw**：微信 cron 推送显示成功但从未送达、审批请求静默超时
- **Hermes Agent**：Telegram gateway 挂起且无根因
- **ZeroClaw**：审批超时被记录为“操作者明确拒绝”
- **IronClaw**：失败 run 后模型忽略用户追问
- **PicoClaw**：MCP 连接失败导致整个 Agent 挂起

**核心诉求**：失败必须可见、可重试、有告警，杜绝“假成功”。

### 4.2 模型/Provider 适配与自动回退
- **NanoBot**：Opus 5 因 temperature 参数弃用导致请求被拒
- **OpenClaw**：DeepSeek v4 静默失败、npm 插件元数据兼容
- **CoPaw**：GPT-5.6 prompt caching 支持、模型回退 PR
- **ZeroClaw**：OpenAI Responses 运行时代理未生效
- **PicoClaw**：Antigravity token 刷新 scope 错误

**核心诉求**：快速跟进新模型、抽象 Provider 差异、建立按错误类型的自动回退机制。

### 4.3 会话与上下文生命周期管理
- **OpenClaw**：Realtime voice 状态无界增长、全模型硬编码 128k 上下文
- **PicoClaw**：路由 Agent 不记忆历史、`/clear` 与自动压缩不生效
- **NanoClaw**：“No conversation found” 冷会话恢复失败
- **CoPaw**：自动压缩不触发记忆流程
- **Hermes Agent**：v23 迁移后 `/resume` 对旧 session 失败

**核心诉求**：会话持久化、恢复容错、清理与压缩策略可配置。

### 4.4 安全与审计/权限边界
- **OpenClaw**：沙箱隔离证明、Prompt Injection 污染标记、Memory Trust Tagging
- **ZeroClaw**：审批响应者授权、SSRF 门禁、`vi_verify` 签名绕过
- **IronClaw**：Google 服务重复 OAuth、sandbox 精确收紧
- **Hermes Agent**：Profile 隔离不完整、密钥移出 config.yaml
- **CoPaw**：Sandbox 约束不可执行时主动报告

**核心诉求**：最小权限、防绕过、审计日志可信。

### 4.5 MCP 生态治理
- **Moltis**：MCP managed repository bundles、vault 集成、SSH 凭据管理
- **PicoClaw**：MCP 失败导致 Agent 挂起
- **IronClaw**：hosted MCP 注册期认证，消除 `auth_required` 循环
- **NanoClaw**：远程 Streamable HTTP MCP 服务器支持
- **CoPaw**：MCP 子进程/exec 会话清理

**核心诉求**：MCP 连接可靠性、认证机制、生命周期管理。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全能型个人 AI 助手：多模型、多通道、插件生态 | 开发者/高级用户 | 重型全栈，会话/沙箱/插件体系复杂 |
| **NanoBot** | WebUI 体验优先，多 Provider 快速接入 | 个人/小团队快速部署 | 轻量，合并率高，i18n 完善 |
| **Hermes Agent** | 技能系统 + 桌面应用 + 大规模自动化 | 生产力工具用户 | 巨型 monorepo（v0.20.0 约 3650 commits） |
| **PicoClaw** | 嵌入式/轻量 chat 路由（Telegram/Discord） | 树莓派/低资源环境 | 极简，聚焦路由与渠道适配 |
| **NanoClaw** | 渠道接入优化 + 审批卡片 UX + 安全加固 | 团队协作场景 | 核心团队主导，社区修复补充 |
| **NullClaw** | 本地/外部 Ollama 集成 + 流式工具调用 | 自托管与本地模型用户 | 轻量，调度器仍在完善 |
| **IronClaw** | 架构治理驱动 + 多工具会议调研 + 每周发布 | 需要合规/可维护性团队 | Rust 系，Wave 3 重构，强调边界与测试 |
| **LobsterAI** | 多智能体协作 + 商业运营功能（积分） | 中文市场/私有化部署 | 桌面客户端 + 多 Agent 任务治理 |
| **Moltis** | MCP 服务器全生命周期管理 | 企业级 MCP 重度用户 | 专注 managed bundles + vault 集成 |
| **CoPaw** | 大而全 Agent 框架：文件管理、多智能体、积分 | 中文开发者/企业 | 功能覆盖面广，中文社区活跃 |
| **ZeroClaw** | 企业级治理：SOP、审批、OTel、安全加固 | 企业/审计敏感场景 | RFC 驱动，v0.9.0 架构决策期 |

---

## 6. 社区热度与成熟度分层

### 第一梯队：高热度、大规模（OpenClaw、Hermes Agent、IronClaw、CoPaw、ZeroClaw）
- **快速迭代型**：OpenClaw（172 合并）、CoPaw（24 合并），版本输出活跃。
- **质量巩固/架构重构型**：Hermes（合并率 6%，发布后修回归）、IronClaw（合并率 36%，Wave 3 重构）、ZeroClaw（合并率 6%，RFC 与安全 PR 密集）。

### 第二梯队：中高热度、健康迭代（NanoBot、PicoClaw、NanoClaw、LobsterAI、NullClaw）
- NanoBot 合并率 69%，PicoClaw 合并率 50%，NanoClaw 合并率 67%，均为高效迭代型。
- LobsterAI 核心合并快但社区 PR stale，NullClaw 中等活跃但 Long-tail Bug 积压。

### 第三梯队：低活跃（Moltis、ZeptoClaw）
- Moltis 仅 1 个开放 PR，方向明确但社区互动极少；ZeptoClaw 完全停滞。

---

## 7. 值得关注的趋势信号

1. **“静默失败”成为用户信任最大杀手**——多个头部项目均出现“任务显示成功但实际未送达/未执行”，可观测性（结构化运行结果、超时告警、审计差异）已从加分项变为硬性需求。
2. **模型快速迭代倒逼 Provider 抽象层升级**——Opus 5、GPT-5.6、DeepSeek v4 接连发布，各项目都在补兼容层，自动回退（fallback）按错误分类将是标准能力。
3. **MCP 生态进入“治理时代”**——从“能连”到“能管”，生命周期、认证、凭据管理、SSRF 防护成为新竞争点，Moltis 的仓库级 bundle 是一个明确方向。
4. **会话/上下文生命周期管理成为标配**——状态丢失、无效恢复、128k 硬限制等痛点普遍存在，未来将出现更细粒度的会话策略（TTL、归档、压缩、跨会话引用）。
5. **安全与审计前置**——审批超时不得记为“拒绝”、沙箱命令不可静默失效、Profile 必须隔离，这些需求正从“bug 修复”上升为产品级合规特性。
6. **本地/私有化部署需求旺盛**——Windows 路径兼容、离线模型、低资源硬件（树莓派）多次被提及，开源项目在跨平台一致性上的投入将直接影响采用率。
7. **社区贡献模式升级，但维护者带宽成为共同瓶颈**——越来越多用户直接提交修复 PR（PicoClaw、NanoClaw、ZeroClaw），但多个项目 PR 积压严重，如何优化评审流、设置 RFC 响应时限，是保持社区健康度的关键。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-04

## 今日速览

过去 24 小时 NanoBot 项目保持了高强度的开发迭代节奏：共收到 36 条 PR 更新，其中 25 条已合并/关闭，11 条待合并，合并率为 69.4%，表明维护者响应迅速、项目活跃度极高。Issue 侧更新较少（2 条），但其中一条涉及 Anthropic Opus 5 新模型的 API 兼容性问题，值得关注。今日无新版本发布，项目正处于版本累积、功能密集提交的窗口期。整体判断：项目健康、社区贡献活跃、Bug 修复效率高。

---

## 版本发布

今日无新版本发布。

---

## 项目进展

今日共有 25 条 PR 合并或关闭，按领域可归纳为以下几条主线：

### 1. WebUI 体验与国际化修复（集中合并，共 4 条）
由贡献者 `chengyongru` 主导，今日合并了一组 WebUI 前端修复，覆盖移动端与国际化：
- **[#5227] fix(webui): complete i18n audit** — 完成了 WebUI 全部语言资源的键值对齐、插值对齐审查，修正了简/繁体中文术语（如 `网页` → `网络`、`网页搜索` → `网络搜索`），并本地化了硬编码 UI/无障碍标签。
- **[#5228] fix(webui): show actual local trigger messages** — 持久化本地触发器收到的最后一条消息，并透传到自动化 payload，使会话弹窗展示真实的触发内容。
- **[#5229] fix(webui): stabilize thread during IME input** — 修复 IME（中文/日文等输入法）组合输入期间 textarea 自动调整尺寸导致滚动位置跳动的问题。
- **[#5226] fix(webui): dismiss mobile keyboard after send** — 在触屏设备上发送消息后自动收起虚拟键盘，并保留桌面端聚焦行为。

### 2. Provider 稳定性修复（合并 2 条）
- **[#5214] fix(providers): keep DeepSeek reasoning items wire-valid** — 修复经 OpenAI Responses API 路由时 DeepSeek 推理内容因 JSON 类型不匹配导致反序列化失败的问题。
- **[#5230]（状态：OPEN）fix(providers): drop unsigned tool calls when replaying to Gemini** — 修复跨提供方切换后 Gemini 收到缺少签名的工具调用而报 400 错误的问题（见下节）。

### 3. Gateway 与内存可靠性（合并 2 条）
- **[#5215] fix(gateway): close agent resources deterministically on stop** — 修复网关停止时 MCP 子进程/exec 会话清理不干净导致 asyncio 关停报错的问题。
- **[#5221] fix(memory): harden history tail read against invalid UTF-8** — 修复读取 `history.jsonl` 尾部 4KiB 窗口时因多字节字符截断导致的 UTF-8 解码失败。

### 4. 新功能/能力落地（合并 3 条）
- **[#4861] feat(providers): add Eden AI as an OpenAI-compatible gateway provider** — 新增 Eden AI 聚合网关提供商（合并周期约 1 个月，属长期 PR 收尾）。
- **[#5038] docs(providers): add ModelScope (魔搭) section** — 补充 ModelScope 提供商的完整文档。
- **[#5141] fix(cron): validate expression syntax in _validate_schedule_for_add** — 定时任务表达式的提前校验，将失败从运行时提前到持久化前。

### 5. 长期 PR 收尾
- **[#1550] feat(codex)** — 为 `openai_codex` 增加 OAuth 与自定义 Responses 双模式支持（创建于 2026-03-05，今日合并/关闭）。

**项目整体向前推进**：多语言体验、跨 provider 兼容性、资源生命周期管理三个维度均有实质提升；新增 Eden AI provider 与 ModelScope 文档扩大了生态覆盖。

---

## 社区热点

今日最值得关注的动态是 Issue **[#5235]**（Anthropic Opus 5 配置被 API 拒绝），虽然尚无评论，但涉及 7 月 24 日刚发布的官方新模型 `claude-opus-5`，属于时效性强、影响面广的兼容性问题。该问题指出：`omit_temperature` 的子串列表至今未加入 `"opus-5"`，而 Opus 5 已完全弃用 temperature 参数，导致每次请求仍携带 temperature 字段被 API 拒绝。这反映了**新模型发布后项目快速跟进（tracking）的滞后风险**。

PR 侧今日讨论量较低（绝大多数 PR 评论数为 0），但 36 条 PR 更新的提交量本身说明 fork 社区的贡献热情依然高涨，尤其 `chengyongru`、`arcdrake22` 等核心贡献者密集提交，形成了可预期的高频发布节奏。

- 热点 Issue：[#5235] [bug] Anthropic: Opus 5 configuration by Nanobot always rejected on the API
- 高频贡献者：`chengyongru`（今日 4 条 WebUI PR）、`arcdrake22`（今日 2 条 provider/gateway 修复）

---

## Bug 与稳定性

按严重程度排列：

| 严重程度 | 描述 | Issue/PR | 状态 |
|---|---|---|---|
| ⚠️ 高 | Opus 5 因温度参数弃用导致所有请求被 API 拒绝 | [#5235] | 未修复（无 PR 关联） |
| 中 | 跨 provider 切换后 Gemini 拒绝处理未签名工具调用（400 INVALID_ARGUMENT） | [#5230] | 已提交 fix PR（待合并） |
| 中 | 网关停止时 MCP 子进程/exec 会话产生 asyncio 关停噪音 | [#5215] | 已合并修复 |
| 中 | DeepSeek 推理内容 wire-format 无效导致反序列化失败 | [#5214] | 已合并修复 |
| 低 | `history.jsonl` 尾部读取遇多字节字符报 UTF-8 错误 | [#5221] | 已合并修复 |
| 低 | 前端 Module script 因 MIME 类型 "text/plain" 加载失败 | [#5190] | 已关闭（昨日已标记，今日确认关闭） |

**重点关注**：`#5235` 尚未有对应修复 PR，而 Opus 5 已发布逾一周，建议维护者尽快在 `omit_temperature` 子串列表中加入 `"opus-5"` 或在配置层对 Opus 5 做温度参数剥离。

---

## 功能请求与路线图信号

今日开放的 PR 中隐含以下功能演进方向（均可能进入下一版本）：

1. **Meta-Search Tool (MST) 元搜索提供商** — [#5234] 将 DuckDuckGo、Google、Brave、Bing 等多引擎结果用 RRF（Reciprocal Rank Fusion）融合，定位为更强覆盖的搜索 provider。若合并，NanoBot 的搜索增强能力将显著提升。
2. **跨会话搜索与提及** — [#5211] 支持 `search_sessions` / `read_session` 的只读会话访问，WebUI 中可直接 `@` 选择另一聊天会话。这属于对话记忆/上下文的向外延伸。
3. **Mattermost 线程独立群组策略** — [#5233] 为线程与主频道提供不同的 `groupPolicyInThread` 提及策略，并在 WebUI 暴露配置。注意其前身 [#5232] 已被关闭，推测为重复 PR 被替代。
4. **Dream 空闲会话归档** — [#5231] 让未超过 `retain_recent_legal_suffix` 保护窗口的短会话也能生成 `history.jsonl`，使 Dream 可获得更完整的输入。属记忆增强类需求。

**路线图信号**：以上 4 个开放 PR 覆盖 provider 扩展、会话记忆、协作渠道策略，方向与当前 AI 助手向"多源搜索 + 跨会话上下文 + 团队协作"演进的趋势一致，预计有望进入下一里程碑。

---

## 用户反馈摘要

- **兼容性滞后痛点**（来自 [#5235]）：用户主动尝试最新模型 Opus 5，但工具链内置的 URL/参数处理更新不及时，导致新模型完全不可用。此类"新模型发布—项目适配"之间的延迟会给用户带来直接挫折感。
- **部署环境问题**（来自 [#5190]）：用户从启动前端即遇到 Module 脚本 MIME 类型错误，说明**开箱即用的部署体验**仍是用户关注的核心问题，虽然该问题已修复，但侧面反映静态资源服务配置需加强回归测试。
- **多 provider 场景真实存在**（来自 [#5230]）：用户会在对话中途切换模型（如从 OpenAI 切到 Gemini），导致工具调用历史不兼容；这验证了**混合 provider 工作流是真实高频场景**，需要更健壮的跨模型历史转换层。

---

## 待处理积压

| 项目 | 类型 | 创建时间 | 最后更新 | 说明 |
|---|---|---|---|---|
| **[#5235]** Opus 5 配置被 API 拒绝 | Open Issue | 2026-08-03 | 2026-08-03 | 高影响 Bug，尚无修复 PR 关联，需尽快处置 |
| **[#5204]** refactor(providers): declare Responses capabilities | Open PR | 2026-08-01 | 2026-08-03 | 带 `conflict` 标签，属声明式重构，长期未合并可能因冲突持续累积 |
| **[#5211]** feat(session): add cross-session search and mentions | Open PR | 2026-08-01 | 2026-08-03 | 功能型 PR，核心改动跨越 store/WebSocket/WebUI，需多方 review |
| **[#5233]** Mattermost 线程独立群组策略 | Open PR | 2026-08-03 | 2026-08-03 | 新提交 PR，等待 review |

另请注意：Issue #5190 虽已关闭，但其修复 PR 的合并验证与 release 发布节奏需要后续跟踪。

---

> **总结**：NanoBot 今日展现出极强的迭代纪律与社区活力。WebUI 一次集成了 4 项刷新体验的修复，provider 层 2 项稳定性修复落地，另有 11 个 PR 在途。核心风险集中在 Opus 5 兼容性与带 conflict 标签的 #5204 重构 PR，建议维护者优先 review 开放 provider 修复，并在下一 release 前完成新版模型适配。

[#5235]: https://github.com/HKUDS/nanobot/issues/5235
[#5190]: https://github.com/HKUDS/nanobot/issues/5190
[#5233]: https://github.com/HKUDS/nanobot/pull/5233
[#5232]: https://github.com/HKUDS/nanobot/pull/5232
[#5234]: https://github.com/HKUDS/nanobot/pull/5234
[#5211]: https://github.com/HKUDS/nanobot/pull/5211
[#5204]: https://github.com/HKUDS/nanobot/pull/5204
[#5231]: https://github.com/HKUDS/nanobot/pull/5231
[#5214]: https://github.com/HKUDS/nanobot/pull/5214
[#5227]: https://github.com/HKUDS/nanobot/pull/5227
[#1550]: https://github.com/HKUDS/nanobot/pull/1550
[#5230]: https://github.com/HKUDS/nanobot/pull/5230
[#5038]: https://github.com/HKUDS/nanobot/pull/5038
[#5228]: https://github.com/HKUDS/nanobot/pull/5228
[#5229]: https://github.com/HKUDS/nanobot/pull/5229
[#4861]: https://github.com/HKUDS/nanobot/pull/4861
[#5141]: https://github.com/HKUDS/nanobot/pull/5141
[#5226]: https://github.com/HKUDS/nanobot/pull/5226
[#5215]: https://github.com/HKUDS/nanobot/pull/5215
[#5213]: https://github.com/HKUDS/nanobot/pull/5213
[#5222]: https://github.com/HKUDS/nanobot/pull/5222
[#5221]: https://github.com/HKUDS/nanobot/pull/5221

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报（2026-08-04）

## 1. 今日速览

v0.20.0（v2026.8.3，"The Herald Release"）于昨日正式发布，版本规模巨大——自v0.19.0以来累计约 3,650 commits、1,400 merged PRs、约1,200 issues closed、650+ contributors。24小时内项目保持极高活跃度：50条Issue更新（41条新开/活跃、9条关闭）、50条PR更新（47条待合并、3条合并/关闭）。发布后出现少量回归信号：Telegram gateway连接挂起（[#78052](https://github.com/NousResearch/hermes-agent/issues/78052)）和read_file误判二进制（[#76886](https://github.com/NousResearch/hermes-agent/issues/76886)）获社区快速反馈；同时Windows平台修复成为PR主力（[#78079](https://github.com/NousResearch/hermes-agent/pull/78079)、[#78082](https://github.com/NousResearch/hermes-agent/pull/78082)、[#71889](https://github.com/NousResearch/hermes-agent/pull/71889)、[#65124](https://github.com/NousResearch/hermes-agent/pull/65124)）。需注意的是，待合并PR积压至47条，合并带宽可能成为短期瓶颈。

## 2. 版本发布

### v0.20.0 (v2026.8.3) — "The Herald Release"

- **发布日期**：2026年8月3日
- **版本规模**：自v0.19.0以来约3,650 commits、~1,400 merged PRs、~5,200 files changed、~559,000 insertions、~405,000 deletions、~1,200 issues closed、650+ contributors
- **代号含义**：发布说明提及 "Hermes is the herald of the gods"——呼应赫尔墨斯作为诸神信使的神话角色，契合AI Agent与个人助手的定位

**迁移注意事项（基于Issue数据推断）**：
- **v23 schema迁移风险**：[#71322](https://github.com/NousResearch/hermes-agent/issues/71322) 指出 sessions 表新增 chat_id/chat_type/thread_id 列但旧行未回填，导致 `/resume` 对迁移前 session 永久失败（NULL chat_id → IDOR guard 拒绝）。该 Issue 今日已关闭，但涉及该迁移的升级用户应验证旧 session 恢复能力。
- **Telegram gateway 回归**：[#78052](https://github.com/NousResearch/hermes-agent/issues/78052) 报告 v0.20.0 中 gateway 进程内 Telegram 连接永久挂起，而 standalone adapter 连接正常，说明问题位于 gateway 进程环境而非凭据。升级前建议关注。
- **read_file 回归**：[#76886](https://github.com/NousResearch/hermes-agent/issues/76886) 确认 0.19.1 引入的 1000 字节采样截断 UTF-8 多字节字符问题仍存在。

## 3. 项目进展

过去24小时合并/关闭3个PR，数据集中可见：

- **PR [#78005](https://github.com/NousResearch/hermes-agent/pull/78005) [CLOSED]** feat(skills): add index-excluded visibility state — 为技能引入 `index_excluded`/`platform_index_excluded` 第三可见性状态：从发现索引中隐藏但保持精确可加载，并统一应用到 prompt 组装、`skills list`、斜杠命令发现、`--skills` 强制预加载等场景。这是技能管理精细化的重要一步。

其余2个合并/关闭PR未在展示数据中，但整体方向可从待合并PR队列辨识：

**Windows 平台修复集群**（多个PR同期在队，形成明显主题）：
- [#78079](https://github.com/NousResearch/hermes-agent/pull/78079)：敏感路径写入保护在 Windows 上静默失效（POSIX 常量 vs Windows 路径格式）
- [#78082](https://github.com/NousResearch/hermes-agent/pull/78082)：技能包 bundle/installed 内容哈希在 Windows 上不对称
- [#71889](https://github.com/NousResearch/hermes-agent/pull/71889)：Windows 主 checkout 因路径分隔符差异被重复显示
- [#65124](https://github.com/NousResearch/hermes-agent/pull/65124)：.env 文件 UTF-8 BOM 导致首 key 丢失

**安全加固方向**：
- [#78086](https://github.com/NousResearch/hermes-agent/pull/78086)：webhook secret 与模型 API 密钥改用 `.env` 引用，不再写入 config.yaml
- [#78083](https://github.com/NousResearch/hermes-agent/pull/78083)：cron 生命周期守卫改为检测 magic bytes 而非裸 NUL，堵住 bash 执行含 NUL 文本脚本的绕过

**稳定性修复**：
- [#78087](https://github.com/NousResearch/hermes-agent/pull/78087)：Relay 会话在 turn 清理失败后恢复损坏的 LIFO scope 栈
- [#69847](https://github.com/NousResearch/hermes-agent/pull/69847)：gateway 手动压缩时保留调用方 contextvars
- [#65824](https://github.com/NousResearch/hermes-agent/pull/65824)：delegate_task 子代理超时时保留已完成的工具结果，而非全部丢弃

## 4. 社区热点

| 排名 | Issue | 评论 | 核心诉求 |
|---|---|---|---|
| 1 | [#30220](https://github.com/NousResearch/hermes-agent/issues/30220) 背景自我改进审查误分类内容到 memory/skill/user 存储 | 7 | Agent 自主学习的正确性与记忆可信度 |
| 2 | [#76886](https://github.com/NousResearch/hermes-agent/issues/76886) read_file 将有效 UTF-8 文本误判为二进制（0.19.1 回归） | 7 | 日常笔记工作流被阻断 |
| 3 | [#67498](https://github.com/NousResearch/hermes-agent/issues/67498) [已关闭] Telegram gateway 挂起（即使应用 workaround） | 7 | Telegram 集成长期不稳定 |
| 4 | [#39043](https://github.com/NousResearch/hermes-agent/issues/39043) Signal 适配器缺少 quote/reply/edit/delete/read-receipt | 7 | 平台功能完整度 |
| 5 | [#68559](https://github.com/NousResearch/hermes-agent/issues/68559) 多路网关忽略路由 profile 的终端后端（2👍） | 4 | 安全边界与配置隔离 |

**热点分析**：
- 三条评论数最高的 Issue 分别涉及 **agent 自主学习的正确性**、**文件工具回归质量**和 **Telegram 网关长期痛点**。其中 Telegram 连接问题呈反复态势——#67498 虽已关闭，但同根问题 [#72454](https://github.com/NousResearch/hermes-agent/issues/72454) 和 [#78052](https://github.com/NousResearch/hermes-agent/issues/78052) 仍开放，社区用户已自行用 py-spy 等工具做深度诊断。
- read_file 误判看似小概率边界（1000 字节截断多字节字符），但影响的是 Obsidian 笔记等真实高频场景，说明工具链容错性对用户体验至关重要。
- Telegram 与 Signal 两个消息平台适配问题同时进入热点榜，社区对**消息平台的生产级能力**（可靠连接、消息编辑、回执）有明确期待。

## 5. Bug 与稳定性

按严重程度排列，并标注 fix PR 状态：

**P1（严重）**
- [#69216](https://github.com/NousResearch/hermes-agent/issues/69216) **Windows 新用户安装"uv installed but not found"**——安装流程阻断，新用户第一印象受损。无 fix PR。
- [#78052](https://github.com/NousResearch/hermes-agent/issues/78052) [已关闭] **v0.20.0 Telegram gateway-only 连接永久挂起**——standalone adapter 正常，问题隔离在 gateway 进程内。无直接 fix PR（[#63309](https://github.com/NousResearch/hermes-agent/issues/63309)/[#64370](https://github.com/NousResearch/hermes-agent/issues/64370) 为 IPv4 fallback workaround）。
- [#67498](https://github.com/NousResearch/hermes-agent/issues/67498) [已关闭] **Telegram gateway 挂起且 py-spy 显示所有线程空闲**——用户已尝试社区 workaround 仍无法解决，最终关闭但根因未明。

**P2（中等）**
- [#76886](https://github.com/NousResearch/hermes-agent/issues/76886) **read_file 0.19.1 回归**：1000 字节采样截断 UTF-8 多字节字符→纯文本笔记被拒读（7 评论，社区关注高）。无 fix PR。
- [#60551](https://github.com/NousResearch/hermes-agent/issues/60551) **config.yaml 写入保护与 list 键被写成字符串标量**——配置管理两处行为不符合预期。相关改进：[#78086](https://github.com/NousResearch/hermes-agent/pull/78086) 将密钥移出 config.yaml。
- [#68559](https://github.com/NousResearch/hermes-agent/issues/68559) **多路网关忽略路由 profile 的 terminal 配置，Docker profile 继承本地后端**——涉及安全边界，获 2👍。
- [#67629](https://github.com/NousResearch/hermes-agent/issues/67629) **Windows search_files 绝对路径失败**：`D:\` 被 `_bash_safe_path` 重写为 `/d/`，原生 rg 无法解析（IO error 3）。无直接 fix PR；[#78079](https://github.com/NousResearch/hermes-agent/pull/78079) 和 [#71889](https://github.com/NousResearch/hermes-agent/pull/71889) 反映项目正系统化修复 Windows 路径处理。
- [#73692](https://github.com/NousResearch/hermes-agent/issues/73692) **`agent.disabled_toolsets: [browser]` 意外连带移除 web_search**，且两处实现行为不一致。
- [#78022](https://github.com/NousResearch/hermes-agent/issues/78022) **webhook 平台端口冲突时进入重连循环**，gateway 进程不退出。
- [#78072](https://github.com/NousResearch/hermes-agent/issues/78072) [今日新开] **自定义 provider 的 `model.provider` 被写入 display name**（如 "9router"）而非 runtime name（"custom:Custom"），导致 "Unknown provider"。
- [#71322](https://github.com/NousResearch/hermes-agent/issues/71322) [已关闭] **v23 迁移后 `/resume` 对所有旧 session 失败**（NULL chat_id → IDOR guard）。

**P3（轻微/需复现）**
- [#75329](https://github.com/NousResearch/hermes-agent/issues/75329) 桌面"语音对话"仅第一轮有效，麦克风未 re-arm。
- [#77618](https://github.com/NousResearch/hermes-agent/issues/77618) 官网标注 macOS 12+，但 macOS 15 用户无法运行桌面应用（信息不足，needs-repro）。
- [#76902](https://github.com/NousResearch/hermes-agent/issues/76902) 桌面应用 TERMINAL_CWD 指向 home 目录，导致 SubdirectoryHintTracker 扫描整个 home 树。
- [#78078](https://github.com/NousResearch/hermes-agent/issues/78078) 状态栏显示两个 gateway 状态指示器。
- [#78057](https://github.com/NousResearch/hermes-agent/issues/78057) [已关闭] 网关启动通知意外完成 A2A 任务。

## 6. 功能请求与路线图信号

**新功能需求（今日活跃）**
- [#78061](https://github.com/NousResearch/hermes-agent/issues/78061)（新开，P3）：允许工具直接消费前序工具的输出（尤其 MCP 二进制内容），避免模型重新 emit 超出上下文预算。指向**工具间数据管道**能力，可能是未来 tool orchestration 重要方向。
- [#77744](https://github.com/NousResearch/hermes-agent/issues/77744)（新开，P3）：TUI 状态栏上下文百分比在每次工具调用后增量刷新，而非等最终回复。
- [#77367](https://github.com/NousResearch/hermes-agent/issues/77367)（新开，P3）：大型功能提案，对比 Oh My Pi 提出 LSP/AST/xd:///安全/SQLite/冲突检测等综合分析能力，范围大，需拆解评估。
- [#29771](https://github.com/NousResearch/hermes-agent/issues/29771)（P2）：将 credential pool 扩展到 Tavily/Exa 等搜索后端，与 [#26031](https://github.com/NousResearch/hermes-agent/issues/26031) 的 auxiliary LLM 路由形成统一凭据体系。
- [#39043](https://github.com/NousResearch/hermes-agent/issues/39043)（P3，2👍）：Signal 适配器完整支持 quote/edit/remote-delete/read-receipt。
- [#68859](https://github.com/NousResearch/hermes-agent/issues/68859)（P3）：明确 lifecycle hooks 的工具重试语义（attempt count/retry count）。

**已有对应 PR、可能进入下一版本**
- [#53958](https://github.com/NousResearch/hermes-agent/pull/53958)：`compression.warn_after_compressions` 阈值可配置（默认 2，0 禁用）——回应长会话痛点。
- [#56613](https://github.com/NousResearch/hermes-agent/pull/56613)：持久化指数退避 CooldownManager，替代 ad-hoc `_rate_limited_until`——provider failover 体系化。
- [#65102](https://github.com/NousResearch/hermes-agent/pull/65102)：API 会话身份早期解析为原生平台身份，统一 Telegram/Discord 会话命名空间。
- [#52107](https://github.com/NousResearch/hermes-agent/pull/52107)：新增 Box 生产力技能（CCG service-account auth）。

## 7. 用户反馈摘要

**高频痛点**
- **Telegram 连接反复失败**（[#67498](https://github.com/NousResearch/hermes-agent/issues/67498)/[#72454](https://github.com/NousResearch/hermes-agent/issues/72454)/[#78052](https://github.com/NousResearch/hermes-agent/issues/78052)）：用户反馈从"尝试 1/8 后永久挂起"到"py-spy 显示所有线程空闲"再到"standalone 正常、gateway 内挂起"，诊断不断深入但问题长期未彻底解决。
- **文件工具回归直接影响工作流**（[#76886](https://github.com/NousResearch/hermes-agent/issues/76886)）："A couple of my Obsidian notes stopped opening"——用户以真实笔记库作为回归验证场景，这类反馈对工具链质量最有说服力。
- **Windows 用户体验缺口**：[#69216](https://github.com/NousResearch/hermes-agent/issues/69216) 新用户安装即失败；[#67629](https://github.com/NousResearch/hermes-agent/issues/67629) 原生 rg 不理解 `/d/` 路径。多个 Windows PR 在队列中表明项目已在补课，但用户侧体验改善仍需等待合并发布。

**配置信任问题**
- [#73692](https://github.com/NousResearch/hermes-agent/issues/73692) "我只想禁 browser，结果 web_search 也没了"——配置项的连坐效应超出用户心智模型。
- [#10376](https://github.com/NousResearch/hermes-agent/issues/10376) 宣称 "fully isolated" 的 profile 实际可跨 profile 读文件、`--clone` 还复制 memory——文档承诺与实际行为落差引发信任问题（已开放近 4 个月）。
- [#60551](https://github.com/NousResearch/hermes-agent/issues/60551) agent 无法写入 config.yaml 但 `hermes config set` 对 list 键写出 scalar——单向保护加错误写入的组合让用户"按文档操作"也踩坑。

**安全敏感度提升**
- [#68559](https://github.com/NousResearch/hermes-agent/issues/68559) 获 2👍，用户明确意识到 "multiplexed gateway 忽略 profile 终端后端"意味着 Docker 沙箱配置被静默绕过。
- 值得肯定的是，[#78086](https://github.com/NousResearch/hermes-agent/pull/78086)（密钥移出 config.yaml）虽是社区 PR，方向与用户诉求一致，反映用户对配置文件中明文密钥的警惕。

## 8. 待处理积压

**长期未关闭的重要 Issue**（按创建时间排序）

| Issue | 创建 | 标题 | 优先级 | 备注 |
|---|---|---|---|---|
| [#10376](https://github.com/NousResearch/hermes-agent/issues/10376) | 04-15 | Profile 隔离不完整：`--clone` 复制 memory、可跨 profile 读文件 | P2 | 已开放近 4 个月 |
| [#29771](https://github.com/NousResearch/hermes-agent/issues/29771) | 05-21 | 凭证池扩展到 Tavily/Exa 搜索后端 | P2 | 基础设施统一 |
| [#30220](https://github.com/NousResearch/hermes-agent/issues/30220) | 05-22 | 背景自我改进审查误分类 memory/skill/user | P2 | 7 评论，社区持续关注 |
| [#39043](https://github.com/NousResearch/hermes-agent/issues/39043) | 06-04 | Signal 适配器 quote/edit/delete/read-receipt | P3 | 2👍 |
| [#60551](https://github.com/NousResearch/hermes-agent/issues/60551) | 07-07 | config.yaml 写入保护与 list 键标量问题 | P2 | |
| [#64392](https://github.com/NousResearch/hermes-agent/issues/64392) | 07-14 | 重复技能名在 list/prompt/skill_view 三种处理 | P2 | |
| [#68559](https://github.com/NousResearch/hermes-agent/issues/68559) | 07-21 | 多路网关忽略路由 profile 终端后端 | P2 | 2👍，安全边界 |

**长期未合并的 PR**（按创建时间排序，均已超过一周）

| PR | 创建 | 标题 | 优先级 |
|---|---|---|---|
| [#52107](https://github.com/NousResearch/hermes-agent/pull/52107) | 06-24 | feat(skills): add bundled Box productivity skill | P3 |
| [#53958](https://github.com/NousResearch/hermes-agent/pull/53958) | 06-28 | feat(compression): configurable warn_after_compressions | P3 |
| [#56613](https://github.com/NousResearch/hermes-agent/pull/56613) | 07-01 | feat(agent): persistent exponential cooldown manager | P3 |
| [#63789](https://github.com/NousResearch/hermes-agent/pull/63789) | 07-13 | fix(desktop): chmod 755 spawn-helper for macOS 26 | P3 |
| [#65124](https://github.com/NousResearch/hermes-agent/pull/65124) | 07-15 | fix(cli): read .env as utf-8-sig (BOM fix) | P2 |
| [#65102](https://github.com/NousResearch/hermes-agent/pull/65102) | 07-15 | feat(api): resolve configured session identities early | P3 |
| [#65824](https://github.com/NousResearch/hermes-agent/pull/65824) | 07-16 | fix(delegation): preserve redacted output on timeout | P2 |
| [#68414](https://github.com/NousResearch/hermes-agent/pull/68414) | 07-21 | fix(desktop): allow new chats in non-git projects | P2 |
| [#69847](https://github.com/NousResearch/hermes-agent/pull/69847) | 07-23 | fix(gateway): preserve context during manual compression | P2 |
| [#71834](https://github.com/NousResearch/hermes-agent/pull/71834) | 07-26 | fix(tui_gateway): stop live profile session reuse from hiding verification answers | P2 |
| [#71889](https://github.com/NousResearch/hermes-agent/pull/71889) | 07-26 | fix(tui_gateway): normalize lane roots for Windows | P3 |

**维护者建议**
- 47 条待合并 PR 已形成显著积压，其中多条 P2 修复（[#65124](https://github.com/NousResearch/hermes-agent/pull/65124)/[#65824](https://github.com/NousResearch/hermes-agent/pull/65824)/[#68414](https://github.com/NousResearch/hermes-agent/pull/68414)/[#69847](https://github.com/NousResearch/hermes-agent/pull/69847)/[#71834](https://github.com/NousResearch/hermes-agent/pull/71834)）直接对应社区反馈痛点，建议优先处理并规划下一个 patch release。
- [#30220](https://github.com/NousResearch/hermes-agent/issues/30220)（自我改进误分类）已活跃 2.5 个月且 7 条评论，涉及 agent 核心的记忆/技能写入正确性，建议明确负责人和修复版本。
- Windows 平台 P2 bug（[#67629](https://github.com/NousResearch/hermes-agent/issues/67629)/[#69216](https://github.com/NousResearch/hermes-agent/issues/69216)）与多个 Windows 修复 PR 并存，可考虑集中整合为一个 Windows 兼容性里程碑。
- v0.20.0 发布后 2 个回归报告（[#76886](https://github.com/NousResearch/hermes-agent/issues/76886)/[#78052](https://github.com/NousResearch/hermes-agent/issues/78052)）需尽快确认是否为 blocking issue，避免问题随版本扩散。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-08-04）

> 数据窗口：2026-08-03 → 2026-08-04 ｜ 数据来源：github.com/sipeed/picoclaw

## 1. 今日速览

过去 24 小时内，PicoClaw 项目保持**中等偏活跃**状态：共 8 条 Issue 更新（3 条活跃、5 条关闭），6 条 PR 更新（3 条待合并、3 条已合并/关闭），**无新版本发布**。社区贡献集中在三个真实使用场景的修复上——路由 Agent 上下文管理（#3316）、Telegram 私聊话题支持（#3315）、命令白名单失效（#3314），说明社区深度使用者正在积极参与共建。维护者今日同时关闭了 5 个长期积压的 stale Issue/PR，积压清理节奏良好。**主要风险点**是 MCP 连接失败导致 Agent 挂起（#3269）和 Web UI 长会话卡顿（#3281）两个高影响 Bug 仍无对应 fix PR。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日 3 个 PR 被合并/关闭，在三个方向各前进一步：

| PR | 方向 | 内容 |
|---|---|---|
| [#3267](https://github.com/sipeed/picoclaw/pull/3267) | 提供商兼容性 | 修复 Antigravity token 刷新时 scope 参数传递错误导致的 `PERMISSION_DENIED` 问题，解决"主认证成功但刷新后 LLM 调用持续失败"的故障链路 |
| [#3273](https://github.com/sipeed/picoclaw/pull/3273) | 国际化 | 为 WebUI 增加完整日语本地化（`ja.json` 全量 968 行翻译，含 dayjs locale 注册），对应 Issue #3272 一并关闭；至此 WebUI 语言覆盖与官方日语文档对齐 |
| [#3202](https://github.com/sipeed/picoclaw/pull/3202) | 路由健壮性 | 修复 `NormalizeAgentID`/`NormalizeAccountID` 未去除首尾下划线的问题，使 ID 规范化输出严格符合 `^[a-z0-9][a-z0-9_-]{0,63}$`，避免非法 ID 进入路由匹配 |

整体评估：项目在"提供商兼容 → 国际语言 → 路由规范"三个链条上均有关闭项落地，但今日**没有大规模功能合入**，进展以点状修复为主。

## 4. 社区热点

- **Issue #3281 Web UI 输入卡顿**（[链接](https://github.com/sipeed/picoclaw/issues/3281)）：3 条评论、1 👍，为今日讨论热度最高。用户反馈会话历史稍长时输入框严重 laggy，直指 Web 前端的**长会话性能瓶颈**。
- **Issue #3269 MCP 失败致 Agent 挂起**（[链接](https://github.com/sipeed/picoclaw/issues/3269)）：2 条评论、1 👍。MCP server 连接失败会让整个 agent loop 永久 hang，聊天界面完全停止响应，开发者关注度高。
- **PR #3316 路由上下文管理修复**（[链接](https://github.com/sipeed/picoclaw/pull/3316)）：今日新开即成为热点，直接回应用户对 dispatch rules 路由 Agent"不记忆任何历史"的强烈不满，属于**社区自驱修复**的典型。
- **PR #3315 Telegram 私聊话题**（[链接](https://github.com/sipeed/picoclaw/pull/3315)）：针对 `Chat.IsForum` 无法覆盖私聊 bot 话题模式的场景，补全 `IsTopicMessage` 处理，是 Telegram 频道能力的明确扩展。

## 5. Bug 与稳定性

按严重程度从高到低排列：

| 严重度 | Issue / PR | 描述 | 状态 |
|---|---|---|---|
| 🔴 高 | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP 服务器连接失败 → agent loop 挂起 → 聊天界面停止回复，无超时/降级机制 | 开放，**无 fix PR** |
| 🟠 中高 | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | 会话历史稍长时 Web UI 输入框严重 laggy，交互不可用 | 开放，**无 fix PR** |
| 🟡 中 | [#3301](https://github.com/sipeed/picoclaw/issues/3301) | 路由到非默认 Agent 的会话中 `/clear` 与自动压缩均不生效，上下文既无法手动清空也不会自动压缩 | 开放，**已有 PR #3316（待合并）** |
| 🟡 中 | [#3314](https://github.com/sipeed/picoclaw/pull/3314) | `customAllowPatterns` 中加入 `git push` 后仍被默认 deny 规则拦截，白名单失效 | **PR 待合并**，作者已提交修复 |
| 🟢 低（已解决） | [#3264](https://github.com/sipeed/picoclaw/issues/3264) | `SplitMessage` 在超大 fenced-code 信息串处死循环 | 今日关闭 |
| 🟢 低（已解决） | [#3265](https://github.com/sipeed/picoclaw/issues/3265) | 未配置 deltachat 时 Gateway 仍因 unknown channel type 启动失败 | 今日关闭 |
| 🟢 低（已解决） | [#3268](https://github.com/sipeed/picoclaw/issues/3268) | exec 工具 `action` 参数被强制必填，LLM 调用常省略导致不可预测失败 | 今日关闭 |

## 6. 功能请求与路线图信号

- **✅ 日语本地化（[#3272](https://github.com/sipeed/picoclaw/issues/3272)）**：已由 PR #3273 落地并关闭，**确认纳入项目**。WebUI/Launcher 现支持日语，i18n 框架的完善可能吸引更多语言贡献。
- **ℹ️ Launcher 支持 systemd 外部管理 Gateway（[#3276](https://github.com/sipeed/picoclaw/issues/3276)）**：今日关闭。核心诉求是 headless 部署场景下 launcher 不应假定自己独占 gateway 生命周期，且对未知 channel 类型应降级而非硬失败。虽然已关闭，但**配置容错与 systemd 集成**是明确的部署体验改进信号，建议在后续版本以更完整的形式（如配置校验优化）重新评估。
- **🔮 Telegram 私聊话题支持（[PR #3315](https://github.com/sipeed/picoclaw/pull/3315)）**：待合并的明确新功能，补充私聊 bot 的 forum topic 场景，若能合入将进入下一版本。

## 7. 用户反馈摘要

- **路由 Agent 的记忆功能形同虚设（[#3301](https://github.com/sipeed/picoclaw/issues/3301) / [#3316](https://github.com/sipeed/picoclaw/pull/3316)）**：用户 j-v 在 Raspberry Pi 上通过 dispatch rules 将 Agent 路由到 Discord 频道后，Agent"完全不记得之前的消息"，且自动压缩"无论设置多少消息或 token 限制都从不触发"。这表明**非默认路由 Agent 的会话管理存在系统性缺陷**，而非单一功能异常。
- **MCP 故障缺乏隔离机制（[#3269](https://github.com/sipeed/picoclaw/issues/3269)）**：用户 ruiyigen 明确反馈"MCP server 连接失败后 agent loop 挂起，聊天界面停止回复用户"，期望的是**故障隔离、超时或降级**，而非整个 Agent 不可用。外部依赖的健壮性已成为用户痛点。
- **Web 端长会话体验不佳（[#3281](https://github.com/sipeed/picoclaw/issues/3281)）**：用户 xpader 复现路径清晰——单会话历史增长后，输入框操作变得非常卡顿，反映前端对长历史会话的渲染/状态管理需要优化。
- **LLM 实际调用行为与工具契约的错位（[#3268](https://github.com/sipeed/picoclaw/issues/3268)，已关闭）**：用户 MrTreasure 观察到 LLM 调用 exec 工具时经常省略 `action: "run"`，而 API 将其设为必填导致频繁失败。此类问题说明工具参数设计需**以 LLM 的实际调用习惯为准**，而非严格的强类型契约。

## 8. 待处理积压

以下事项需维护者关注：

- **Issue #3281 Web UI 长会话卡顿**（[链接](https://github.com/sipeed/picoclaw/issues/3281)）：开放 14 天，3 条评论，无 PR。长会话性能问题会随用户会话量增长而扩大影响面，建议排期优化。
- **Issue #3269 MCP 挂起**（[链接](https://github.com/sipeed/picoclaw/issues/3269)）：开放 15 天，高影响稳定性缺陷，无代码层面回应。建议至少确认是否为已知问题，并给出超时/隔离的修复计划。
- **PR #3314 / #3315 / #3316**（[链接 1](https://github.com/sipeed/picoclaw/pull/3314) · [链接 2](https://github.com/sipeed/picoclaw/pull/3315) · [链接 3](https://github.com/sipeed/picoclaw/pull/3316)）：今日新提交的三个 PR 均针对真实场景且互不冲突，审核通过后可一次性改善命令白名单、Telegram 话题、路由上下文三大问题。目前均处于待 review 状态。
- **Issue #3301**（[链接](https://github.com/sipeed/picoclaw/issues/3301)）：与 PR #3316 强关联，建议 PR 合并后立即回归验证并关闭。

---

**项目健康度小结**：PicoClaw 社区活跃度良好，贡献者愿意主动提交修复而非仅仅报障；维护者清积压效率在线。但当前**没有未发布版本**意味着上述 3 个待合并 PR 的修复可能要等待下一个 release 周期，考虑到 #3269 和 #3281 的影响面，建议考虑提前发布一个 patch 版本。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-08-04

## 1. 今日速览

过去 24 小时 NanoClaw 保持较高的开发活跃度：共 1 条新 Issue、9 条 PR 更新，其中 6 条已合并/关闭、3 条待合并，无新版本发布。核心团队主导了安全加固镜像重固定（#3182/#3180）、engagement 策略自服务控制（#3137）、iMessage 接入优化（#3181）与审批卡片 UX 修复（#3143）等多项合并；社区贡献者则提交了 2 个针对 "No conversation found" 会话丢失问题的修复 PR（#3184/#3183）。当日唯一新 Issue 为 Node.js 版本兼容性导致的启动崩溃（#3179），暂无对应修复。整体项目健康度良好，核心维护与社区贡献双线并进。

## 2. 版本发布

本期无新版本发布（最新 Releases 为空）。

## 3. 项目进展

今日共 6 条 PR 关闭/合并，主要进展如下：

- **安全基础设施加固**
  - [#3182 [CLOSED] versions: repin the agent image to hardened-2026-08-02](nanocoai/nanoclaw PR #3182)：将 agent 镜像重固定至 `hardened-2026-08-02`（旧镜像 built 2026-07-30，新镜像 built 2026-08-02）。两次构建携带相同的 `ai.echo.image.upstream.digest`，确认 NanoClaw 内容层无变化，属于纯基础镜像安全刷新。
  - [#3180 [CLOSED] fix(update): surface hardened image migration](nanocoai/nanoclaw PR #3180)：以 Operational/container skill 形式在更新流程中显式呈现加固镜像迁移，配合上述镜像升级。

- **会话与渠道可靠性**
  - [#3181 [CLOSED] fix(imessage): opt in via first message to the assigned line](nanocoai/nanoclaw PR #3181)：iMessage 渠道现在可以通过向指定线路发送首条消息完成主动接入，降低渠道开通门槛。
  - [#3137 [CLOSED] Fix engagement consistency and expose self-serve wiring controls](nanocoai/nanoclaw PR #3137)（7 月 26 日创建，今日合并）：将累积消息保留为上下文而不触发 warm-container 跟进轮次；允许 group-scoped agent 检视自身 wiring 并请求审批 engagement 策略更新；同时拒绝非法 JavaScript engagement 正则表达式。

- **审批与卡片 UX**
  - [#3143 [CLOSED] Preserve resolved approval card content](nanocoai/nanoclaw PR #3143)：已解决的审批卡片保留标题与请求详情，仅将按钮替换为静默的决策/操作者或超时状态，原始正文持久化，使终态卡片在桌面端与移动端均完整可读。

- 另有 [#3178 [CLOSED]](nanocoai/nanoclaw PR #3178) 为误针对错误仓库开启的 PR，已关闭，无上游变更。

## 4. 社区热点

当日社区讨论热度集中在唯一的新 Issue 上：

- [#3179 [OPEN] SyntaxError: The requested module 'node:util' does not provide an export named 'styleText'](nanocoai/nanoclaw Issue #3179)：评论 1 条，是当日唯一产生讨论的 Issue。用户报告 CLI 启动时在 `@clack/core@1.2.0` 处崩溃，提示 `node:util` 缺少 `styleText` 导出。该错误通常出现在 Node.js < 20.12 环境（`styleText` 自 Node 20.12/21.7 起可用）。背后诉求是项目对运行时版本要求不够清晰，或需要向下兼容更广的 Node 版本。

各 PR 当日尚未记录公开评论数，但社区贡献的 2 个修复 PR（[#3184](nanocoai/nanoclaw PR #3184)、[#3183](nanocoai/nanoclaw PR #3183)）直指真实用户场景中的高频错误，反映了 "会话恢复路径容错不足" 这一集中痛点。

## 5. Bug 与稳定性

按严重程度排列：

1. **中高 — CLI 启动崩溃（环境兼容性）**
   - [#3179 [OPEN] SyntaxError: 'node:util' 缺少 'styleText' 导出](nanocoai/nanoclaw Issue #3179)：用户环境 Node 版本低于 `@clack/core` 所需版本，CLI 启动即崩溃。暂无对应 fix PR，需维护者确认最低 Node 版本要求，并补充启动前版本检测或更友好的错误提示。

2. **中 — 会话恢复死路（missing transcript）**
   - [#3184 [OPEN] fix(claude): rotate on missing transcript instead of resuming into a dead session](nanocoai/nanoclaw PR #3184)：当存储的续接会话 transcript 文件不存在时，下一条消息会以 `No conversation found with session ID: <uuid>` 失败。已有社区修复 PR 待合并，建议改为自动轮转新会话而非恢复到死会话。

3. **中 — 冷会话被保留策略误清理**
   - [#3183 [OPEN] fix(group-init): pin cleanupPeriodDays so retention cleanup can't reap cold sessions](nanocoai/nanoclaw PR #3183)：`cleanupPeriodDays` 未固定，导致保留清理可能回收 30+ 天未活跃的冷会话；用户向此类频道发消息会得到原始 `No conversation found` 错误。已有社区修复 PR 待合并。

4. **低 — 非法 engagement 正则导致异常**
   - [#3137 [CLOSED]](nanocoai/nanoclaw PR #3137) 今日合并内容中包含拒绝非法 JavaScript engagement 正则表达式的校验，属于主动性防御修复。

## 6. 功能请求与路线图信号

- **远程 Streamable HTTP MCP 服务器支持**
  - [#3092 [OPEN] feat: support remote Streamable HTTP MCP servers](nanocoai/nanoclaw PR #3092)：7 月 19 日创建、8 月 3 日仍有更新，带 `core-team` 标签。该 PR 扩展 MCP 连接能力至远程 Streamable HTTP 模式，是当前最值得关注的长期开放功能 PR，有可能纳入下一版本。

- **Agent 自服务治理能力**
  - 今日合并的 [#3137](nanocoai/nanoclaw PR #3137) 让 group-scoped agent 能够检视自身 wiring 并请求更新 engagement 策略，释放了 "agent 自治 + 人工审批" 的治理信号，预计后续会有更多面向 agent 自助配置的接口/技能跟进。

- **渠道接入体验优化**
  - [#3181](nanocoai/nanoclaw PR #3181) 的 iMessage 首条消息接入模式，表明项目在持续降低新渠道的启用门槛，符合 "self-serve"（自助服务）的整体路线。

## 7. 用户反馈摘要

- **Node 版本兼容性痛点（[#3179](nanocoai/nanoclaw Issue #3179)）**：用户执行初始化流程后（"Basics ready (9s)"）随即崩溃，问题直指 `@clack/core` 对 `node:util.styleText` 的依赖。真实痛点是：CLI 未在启动前校验运行时版本，错误信息对普通用户不友好，难以快速定位为 Node 版本过低。建议在文档/安装脚本/启动检查中明确 Node ≥ 20.12 的要求，或调整依赖以兼容更广版本。

- **内部错误直接暴露给终端用户（[#3183](nanocoai/nanoclaw PR #3183) / [#3184](nanocoai/nanoclaw PR #3184) 描述场景）**：多个真实场景中，用户向静默 30+ 天的频道或 transcript 已丢失的会话发送消息，会直接收到内部错误 `No conversation found with session ID: <uuid>`，而非自动新建会话或给出友好提示。这反映出恢复路径容错不足，两个 PR 的合入将显著改善冷会话/失效会话的使用体验。

## 8. 待处理积压

- **#3092 远程 Streamable HTTP MCP 服务器支持**（[链接](nanocoai/nanoclaw PR #3092)）：已开放 16 天，属带 core-team 标签的较大功能 PR，8 月 3 日仍有更新但未合并。建议维护者安排 review 或明确排期，避免长期悬挂。

- **#3184 缺失 transcript 时轮转会话语**（[链接](nanocoai/nanoclaw PR #3184)）与 **#3183 固定 cleanupPeriodDays**（[链接](nanocoai/nanoclaw PR #3183)）：均为 8 月 3 日提交的社区修复 PR，直指 "No conversation found" 系列用户体验问题，建议尽快 review 并合并，以降低同类 Bug 的持续影响。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-08-04

## 今日速览

过去 24 小时内，NullClaw 项目保持中等活跃的开发节奏：共更新 5 条 PR（2 条关闭，3 条待合并）、1 条 Issue（持续开放），无新版本发布。社区贡献者 mtdphn 的流式工具调用系列 PR（#964/#965）已全部关闭，标志着原生流式工具调用能力正式进入主分支。此外，ArcanePivot 提交了两个聚焦代理场景的修复 PR（#982/#983）仍待审查合并。当前项目核心关注点集中在通信层稳定性（代理、curl 传输）与工具调用能力深化上，整体项目健康度良好。

## 项目进展

今日有 2 个 PR 关闭，均来自贡献者 mtdphn，属于同一功能链路的实现与配套修复：

- **#964 [CLOSED] Enable native API-level tool calls during streaming**  
  https://github.com/nullclaw/nullclaw/pull/964  
  该 PR 在流式请求过程中保留 `StreamChatResult` 中的结构化工具调用增量数据，使 Agent 能够执行纯流式工具响应。同时修正了 Provider 级能力检查，确保工具调用在流式场景下不再被意外丢弃。

- **#965 [CLOSED] Proposal: structured streaming tool-call support for SSE parser**  
  https://github.com/nullclaw/nullclaw/pull/965  
  作为上述 PR 的配套修复，强化了 SSE 解析器对 `delta.content` 中模型输出的 XML 结构化工具调用数据的解析支持，解决了部分服务端不提供原生工具增量时的兼容问题。

这两个 PR 的关闭意味着流式工具调用从“API 可发送”到“Agent 可执行”的链路已完整打通，项目在原生工具调用能力上迈出了重要一步，后续版本中流式工具调用有望被更多 Provider 直接使用。

## 社区热点

- **#915 [OPEN] [bug] Problem with scheduler unauthorized**  
  https://github.com/nullclaw/nullclaw/issues/915  
  该 Issue 是过去 24 小时内评论最多（4 条）且唯一活跃的 Issue，并获得了 1 个 👍。用户 scabros 在 Ubuntu + 外部 Ollama 主机（qwen3.6:27b, RTX 3090）环境下运行 NullClaw，LLM 与工具调用均正常，但调度器（scheduler）在 Telegram 和命令行端都无法工作，报错涉及“unauthorized”。评论讨论焦点在于调度器认证机制与外部模型服务联动时的配置兼容问题，反映了用户对调度器可靠性的较高期待。

## Bug 与稳定性

| 严重程度 | 问题 | 状态 | 影响范围 |
|---------|------|------|---------|
| 中等 | **#915 Scheduler unauthorized**  
https://github.com/nullclaw/nullclaw/issues/915 | 开放，尚无直接关联的 Fix PR | 影响所有依赖调度器的 Telegram / CLI 场景，在外部 Ollama 环境下可稳定复现 |

该 Bug 自 2026-05-15 创建以来已持续近三个月，属于长期未解决的重要问题。目前仅有用户自查（如网络配置、token 检查）讨论，尚未有维护者或社区提交修复补丁。

## 功能请求与路线图信号

- **流式工具调用支持（路线图已兑现）**  
  #964 和 #965 的关闭表明流式工具调用正式成为受支持能力。这很可能会被纳入下一个 minor 版本，并成为 0.x 系列的重要功能亮点。后续社区可能围绕该能力提出更多 Provider 适配请求。

- **代理环境通信增强（潜在路线图方向）**  
  两个待合并 PR（#982,#983）都聚焦于代理场景下的网络传输：  
  - #982 为 Telegram Bot API 在显式 proxy 配置下改用 curl 传输  
  - #983 为 Provider 非流式 POST 请求固定 curl 路径并避免凭据进入 argv  
  这暗示项目正在积极响应受限网络环境下的部署需求，未来也许会增加更丰富的代理配置项或文档说明。

- **调度器认证改进（用户需求信号）**  
  #915 的错误提示为“unauthorized”，很可能与调度器在执行时使用的凭据或权限模型有关。随着该问题声量增加（已有 👍），预计会推动调度器认证逻辑的重构或配置简化。

## 用户反馈摘要

- **正面反馈**：用户 scabros 明确表示“LLM 工作正常”“工具调用整体上也基本正常”，说明在外部 Ollama 模型接入场景下，NullClaw 的核心对话与工具调用体验能够满足预期。
- **痛点**：调度器功能完全不可用（“not working in telegram chat nor c...”），这不仅影响特定功能，也削弱了用户将 NullClaw 作为自动化助手的信心。用户可能期望调度器能像普通对话一样，与外部模型和服务无缝联动。
- **使用场景**：用户采用 Ubuntu + Ollama 外部主机 + RTX 3090 的硬件方案，说明该项目有一定比例的自托管用户，他们关心与本地/局域网模型服务的集成顺畅度。

## 待处理积压

- **#915 [bug] Problem with scheduler unauthorized**  
  https://github.com/nullclaw/nullclaw/issues/915  
  创建于 2026-05-15，今日仍在更新，无修复 PR。建议维护者优先排查调度器认证流程，特别是带外部模型服务时的 token/权限校验逻辑。

- **#956 [dependencies] ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group**  
  https://github.com/nullclaw/nullclaw/pull/956  
  由 dependabot 发起，自 2026-06-15 至今未合并。虽然只是 Alpine 基础镜像的 patch 级更新，风险较低，但长期滞留会在 CI 中累积技术债，建议安排快速评审并合并。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-08-04

## 1. 今日速览

过去 24 小时项目活跃度极高：45 条 Issue 更新（新开/活跃 36，关闭 9）与 50 条 PR 更新（待合并 32，已合并/关闭 18）共同构成了大规模架构重构（WS2/WS3/WS4）的高峰期。核心贡献者 BenKurrek 主导的多个 Wave 3 重构 PR 集中落地，方向是层架构重新划分、WIT 目录迁移与依赖边界收紧；QA 团队（joe-rlo）通过 bug_bash 提交了 5 个 P1/P2 级别的真实环境缺陷。值得关注的是：**今日无版本发布**，且已开放一个月的 release PR #5598 仍未被合并，版本交付节奏可能处于阻塞状态。整体判断：项目正处于**架构治理强度 > 迭代交付速度**的阶段。

---

## 2. 版本发布

无新版本发布（最新 Releases 为空）。注意：定期发布 PR #5598 自 7 月 3 日起已开放超过一个月，包含 `ironclaw_common` 0.4.2 → 0.5.0 与 `ironclaw_skills` 0.3.0 → 0.4.0 的破坏性变更（见「待处理积压」）。

---

## 3. 项目进展

过去 24 小时合并/关闭的 PR 标志着两个关键里程碑：

**🔵 Wave 3 重构主线部分落地**
- **#7064 [已合并]** `refactor(loop): shed the model gateway and tool disclosure into loop_host (WS3/WS4)` — 将模型网关与工具披露移入 `ironclaw_loop_host`，属 move-only 变更，零测试损失。这是 Wave 3 runner shed + WS4 重新分层的重要一步。
  https://github.com/nearai/ironclaw/pull/7064

- **#7040 [已合并]** `refactor(contracts): close the WS2 strays and WS2.1 follow-ups` — 关闭三行 WS2 待办，并修订 CHECKLIST/PROPOSAL 中两条过时声明。
  https://github.com/nearai/ironclaw/pull/7040

**🔵 功能与稳定性修复**
- **#7024 [已合并]** `fix(extensions): resolve custom MCP auth during registration` — 在注册阶段解析 hosted-MCP 认证，杜绝后续运行时的 `auth_required` 循环。
  https://github.com/nearai/ironclaw/pull/7024

- **#7070 [已合并]** `fix(webui): unblock main E2E coverage` — 修复自 #6876 以来持续变红的 5 个 WebUI v2 E2E 测试，包含 SSE keep_alive 光标与 admin 重试两个面向用户的生产行为修复。
  https://github.com/nearai/ironclaw/pull/7070

- **#7049 [已合并]** `docs: add weekly Wednesday release strategy` — 确立每周三生产发布策略（周一 RC、周二 QA、周三发布），为后续版本节奏提供制度基础。
  https://github.com/nearai/ironclaw/pull/7049

**🔵 依赖维护**
- **#7023 [已合并]** 6 项 Rust 依赖 bumped（base64 0.22→0.23、toml、rstest 等）。
  https://github.com/nearai/ironclaw/pull/7023

已关闭的 Epic 包括 #6284（错误可恢复性终局）、#6524（Hermetic 能力与旅程测试平台）、#6481（Manifest 驱动扩展生命周期）、#6482（可插拔内存提供者），说明这些长期目标的验收标准已达成或收尾。

---

## 4. 社区热点

| 排名 | Issue/PR | 评论数 | 状态 | 核心诉求 |
|---|---|---|---|---|
| 1 | [#6284 [EPIC] 错误可恢复性终局](https://github.com/nearai/ironclaw/issues/6284) | 15 | 已关闭 | 每次运行中错误必须满足可恢复契约：运行存活、模型可见、携带原因与成功路径、模型可行动、绝不报告非成功状态。这是长期质量愿景的收官讨论 |
| 2 | [#6524 [EPIC] Hermetic 能力与旅程测试平台](https://github.com/nearai/ironclaw/issues/6524) | 4 | 已关闭 | 能否机械地回答「每个受支持能力和关键用户旅程都有确定性覆盖」——测试基础设施的终极拷问 |
| 3 | [#7087 Reborn PR 测试规划器在 .claude/ 等路径上硬失败](https://github.com/nearai/ironclaw/issues/7087) | 3 | Open | CI 规划器有缺口：触碰 `.claude/`、`Dockerfile`、`.githooks/` 等路径即整条 workflow 失败，导致 PR 被迫绕过。这是 CI 系统自身的 Bug |
| 4 | [#7085 check-version-bumps.sh 在 macOS 上静默跳过版本检查](https://github.com/nearai/ironclaw/issues/7085) | 2 | Open | GNU-only 的 sed 正则（`\+`）在 BSD sed 下失效，导致 `WIT_TOOL_VERSION` 交叉检查被静默跳过——平台兼容性隐患 |
| 5 | [#7060 [QA] 平台拥有的 WIT 和扩展包变更触发 Reborn 作用域分类器误判](https://github.com/nearai/ironclaw/issues/7060) | 2 | Open | 与 #7087 同源：Reborn 规划器无法正确分类平台自身的包变更，妨碍 CI 正常执行 |

**热点分析**：社区讨论聚焦于**「架构治理工具（Reborn 规划器、边界检查、覆盖工具）自身的正确性」**——当治理工具误伤正常 PR 时，会直接消耗核心贡献者的绕行成本（如 #7084 被迫放弃 .claude/ 修改）。值得注意：高热度的 #6284、#6524 均为已关闭的史诗级 Issue，说明社区对长期架构目标的关注度极高，但新的活跃讨论集中在 CI 工具链缺陷上。

---

## 5. Bug 与稳定性

### 🔴 P1 — 高优先级

| Issue | 描述 | fix PR |
|---|---|---|
| [#7069 Google 服务要求重复认证](https://github.com/nearai/ironclaw/issues/7069) | 每个 Google 服务（Calendar、Docs、Gmail）各自要求独立 OAuth 授权，即使同一账号已多次完成 Google 授权流程，严重割裂用户体验 | ✅ [#7077](https://github.com/nearai/ironclaw/pull/7077)（Open，一次性 vendor 授权覆盖所有共享账号的扩展） |
| [#7074 多工具会议调研在多步工具调用后失败](https://github.com/nearai/ironclaw/issues/7074) | 同时使用 Google Calendar + Docs + 新闻搜索时，模型在成功获取日历数据后尝试调用一个「不可用函数」，整个 run 失败 | ❌ 暂无 |

### 🟠 P2 — 中优先级

| Issue | 描述 |
|---|---|
| [#7075 失败 run 后模型忽略用户追问](https://github.com/nearai/ironclaw/issues/7075) | 运行失败（如 provider 不可用）后，用户提出新问题，agent 却继续重试失败的任务而非响应用户 |
| [#7071 每次流式更新都闪现「Reconnecting」](https://github.com/nearai/ironclaw/issues/7071) | 连接状态指示器在每次流式响应块之间错误切换，造成连接不稳定的错觉 |
| [#7073 agent 向用户暴露内部实现细节](https://github.com/nearai/ironclaw/issues/7073) | 用户可见回复中泄漏工具名与投递路由逻辑，而非给出简洁人话 |
| [#7072 Telegram 消息以纯文本渲染 Markdown](https://github.com/nearai/ironclaw/issues/7072) | `###` 标题、`**` 加粗等语法原样显示，未被格式化 |

### 🟡 系统/工具链缺陷（架构治理副作用）

| Issue | 描述 |
|---|---|
| [#7085 check-version-bumps.sh 在 macOS 上静默跳过（BSD sed 不兼容）](https://github.com/nearai/ironclaw/issues/7085) | 版本交叉检查在 macOS 上失效且无告警 |
| [#7081 Docker fail-closed 测试门控未接线](https://github.com/nearai/ironclaw/issues/7081) | `IRONCLAW_REQUIRE_DOCKER_TESTS` 永远未被 CI 设置，fail-closed 机制形同虚设 |
| [#7083 crates/extensions/ 全家在覆盖率工具中「黑暗」](https://github.com/nearai/ironclaw/issues/7083) | 5 个受影响的 crate（含 2 个 channel 适配器）在 Reborn 覆盖率表格与全局聚合中缺席，不可设置下限 | ✅ [#7094](https://github.com/nearai/ironclaw/pull/7094)（Open） |
| [#7068 hosted MCP destructiveHint 默认值错误](https://github.com/nearai/ironclaw/issues/7068) | MCP 规范规定省略时默认 `true`，但实现默认为 `false`，破坏性工具可被误判为非破坏性 |

---

## 6. 功能请求与路线图信号

**🔮 可能纳入下一版本的功能方向：**

1. **统一 AI 配置入口** — [#7046 [EPIC] 从 AI 聊天配置所有工具、channels 与扩展](https://github.com/nearai/ironclaw/issues/7046)：用户无需在 WebUI 中逐项配置，通过自然语言即可完成全部设置。当前有相关基础（#7088 将 custom MCP 注册暴露为模型可见工具），具备落地条件。

2. **Channel 优先的新手引导** — [#7044 [EPIC] Onboarding to channel-first approach](https://github.com/nearai/ironclaw/issues/7044)：WebUI 空白初始态是采纳摩擦的核心来源，聚焦 General Assistant 用例的引导流程。PR #6994（OOBE 原型）已提供设计验证。

3. **Billing 支持升级路径** — [#7097 为账单页面添加支持升级途径](https://github.com/nearai/ironclaw/issues/7097)：用户明确反馈账单页面缺少责任人与求助路径——典型的成熟度补齐需求，实现成本低，适合快速跟进。

4. **Skills 开创性 Epic** — [#6941 [EPIC] 模型自建/自选/自用高价值 skills](https://github.com/nearai/ironclaw/issues/6941)：从 #6565 拆分出的可测量子集，21 条验收标准中的一部分；与 #7046 形成协同（skills 可通过 AI 聊天安装）。

---

## 7. 用户反馈摘要

- **认证体验割裂（P1）**：真实用户在 Railway QA 实例上反复被要求对 Google 服务单独授权，「即使已经完成了多次授权流程，每个 Google 服务仍要求独立的认证」（#7069）。影响面覆盖 Google Calendar、Docs 等多个常用服务。修复 PR #7077 已提交。
- **失败后对话「失忆」**：用户观察到一个令人沮丧的行为——某次运行失败后，用户提出新的追问，agent 反而继续执行失败的任务。（#7075）。
- **输出「过于工程化」**：用户对 agent 暴露内部工具名与投递路由逻辑表示不满，期望更接近人类助理的表达方式（#7073）。
- **Telegram 渠道 Markdown 不渲染**：使用 Telegram channel 的用户收到原始 Markdown 文本，实际使用中表现为「乱码式」输出（#7072）。
- **账单支持归属不清**：用户反馈「不清楚 NEAR AI 账单问题该找谁处理」——产品透明度诉求（#7097）。

---

## 8. 待处理积压

| 项目 | 类型 | 开放时间 | 风险 | 说明 |
|---|---|---|---|---|
| [#5598 `chore: release`](https://github.com/nearai/ironclaw/pull/5598) | PR | 2026-07-03（**32 天**） | 🔴 **高** | 包含 `ironclaw_common` 与 `ironclaw_skills` 的破坏性变更；与 #7049 确立的周三发布策略（8 月 6 日）紧迫相关，强烈建议尽快合并 |
| [#6957 `feat(reborn-ironhub): manage installed package lifecycle`](https://github.com/nearai/ironclaw/pull/6957) | PR | 2026-07-31（4 天） | 🟡 中 | 大体积功能 PR：持久化 IronHub 安装回执 + `ironhub.status`/`ironhub.update` 模型工具。无 review 评论，需维护者安排评审 |
| [#6994 `feat(webui): OOBE automation-tasks prototype`](https://github.com/nearai/ironclaw/pull/6994) | PR | 2026-08-01（3 天） | 🟡 中 | UI 原型 + 演示数据，已 rebase 至最新 main；与 #7044 前端引导紧密相关，需设计/产品侧确认 |
| [#6941 Skills 自我创建/选择/使用 Epic](https://github.com/nearai/ironclaw/issues/6941) | Issue | 2026-07-31 | 🟢 低 | 新 Epic，已有一个评论；拆分自 #6565，等待认领或进一步讨论 |

**维护者关注提醒**：`#5598` 的长期开放与「今日 0 release」结合，暗示发布管道存在阻塞，建议在周三（8/6）发布窗口前优先处理；同时 #7087、#7081 等 CI/基础设施缺陷已导致核心 PR 需要 workaround（如 #7084），建议提升处理优先级。

---

*本日报由 AI 生成，数据来自 GitHub 公开仓库 nearai/ironclaw（生成时间：2026-08-04）。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-04

## 今日速览

项目今日处于**活跃开发与合并高峰期**：过去 24 小时无新版本发布，但 Pull Request 动作频繁——共 11 条 PR 更新，其中 6 条已合并/关闭、5 条仍处于开放状态。值得注意的是，其中 4 条开放 PR 均来自 4 月创建且已被系统标记为 `[stale]`，表明存在一定程度的积压待处理。Issue 方面，今日无新开 Issue，但 2 条 4 月创建的 Issue（#1206、#1213）今日被更新（评论/状态变更），说明旧问题仍有讨论热度。整体项目健康度良好，核心开发者的修复/功能 PR 合并迅速，但社区贡献的 PR 合并周期较长。

## 项目进展

今日共有 6 条 PR 被合并/关闭，主要集中在多智能体协作、桌面客户端体验与安装稳定性方向：

- **多智能体任务活动过滤器**（[#2418](https://github.com/netease-youdao/LobsterAI/pull/2418)）— 在侧边栏新增 Codex 风格的任务活动过滤器，帮助用户在多个 agent 间快速定位需要关注的任务。该功能已合并，表明多智能体协作场景的 UI 正在从基础会话逐步演进为可治理的工作台体验。
- **Windows 安装器进程清理修复**（[#2420](https://github.com/netease-youdao/LobsterAI/pull/2420)）— 修复 NSIS 安装器在停止轮询阶段未重复清理残留进程的问题，避免进程存活导致安装/升级受阻。该修复直接提升 Windows 平台更新可靠性。
- **启动积分活动功能**（[#2419](https://github.com/netease-youdao/LobsterAI/pull/2419)）— 为网易获客活动添加可配置的启动积分弹窗与新建会话页入口，包含登录续接和领取流程。表明项目正在面向市场推广整合运营能力。
- 另外 3 条围绕 “fix btw tools” 的还原/重复提交（[#2421](https://github.com/netease-youdao/LobsterAI/pull/2421)、[#2422](https://github.com/netease-youdao/LobsterAI/pull/2422)、[#2423](https://github.com/netease-youdao/LobsterAI/pull/2423)）已关闭，疑似为提交过程中的误操作或分支整理，无实质功能进展。

整体来看，项目在今日完成了多项面向易用性、稳定性与商业化能力的落地，向前迈进了一个完整的小版本迭代量级。

## 社区热点

今日社区讨论集中在两条历史 Issue 的新动态上：

- **[#1206](https://github.com/netease-youdao/LobsterAI/issues/1206) — 私有化部署 Kimi2.5 模型重复回复问题**：该 Issue 自 4 月 1 日创建，今日获得新评论。用户报告在分析文档时模型会“重复回复当前动作”，且为必现问题，切换模型后恢复正常。评论数 1，暂无 👍。该问题直接关系到私有化部署场景下的核心使用体验，疑似指向模型适配层而非通用逻辑。

- **[#1213](https://github.com/netease-youdao/LobsterAI/issues/1213) — 会话详情「导出为 Markdown」功能请求**：同样为 4 月创建，今日有新评论。用户希望将对话内容（含用户输入、AI 回复及工具调用信息）以 `.md` 格式导出，而非仅限图片。该请求与 [#1214](https://github.com/netease-youdao/LobsterAI/pull/1214) PR 直接对应，但后者仍处于 `[stale]` 状态，显示社区需求与维护进度之间存在时间差。

两条热点的共同点在于：**用户对“私有化/本地化场景下可预测、可追溯的 AI 交互记录”有强烈需求**，这可能是下一阶段功能规划的重要信号。

## Bug 与稳定性

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 高 | **Kimi2.5 模型分析文档时重复回复**（[#1206](https://github.com/netease-youdao/LobsterAI/issues/1206)）：必现 bug，用户无法判断是异常还是需要继续等待，严重影响私有化部署体验 | 无对应 fix PR，社区仅 1 条评论，持续 4 个月 |
| 中 | **Web 搜索受外部注入 Chrome flag 影响**（[#1209](https://github.com/netease-youdao/LobsterAI/pull/1209)）：`--disable-blink-features=AutomationControlled` 被外部工具/配置注入，导致 web-search 功能受限 | 已有 PR 提交（stale），等待合并 |
| 低 | **Windows NSIS 安装器残留进程**（[#2420](https://github.com/netease-youdao/LobsterAI/pull/2420)）：已修复并合并 | 已关闭 |

其中 Kimi2.5 重复回复问题为最活跃的待处理 Bug，涉及模型行为的一致性，建议维护团队优先排查模型流式输出的回调覆盖逻辑或会话状态管理。

## 功能请求与路线图信号

| 功能请求 | 来源 | 对应 PR | 预测 |
|---|---|---|---|
| **会话详情导出为 Markdown** | Issue [#1213](https://github.com/netease-youdao/LobsterAI/issues/1213) | [PR #1214](https://github.com/netease-youdao/LobsterAI/pull/1214)（开放且 stale） | 实现方案完整（复用 `buildDisplayItems` + 保存对话框），且社区需求明确，极可能被纳入下一小版本。需维护者主动 review 合并 |
| **Cowork 失败手动重试按钮** | — | [PR #1208](https://github.com/netease-youdao/LobsterAI/pull/1208)（开放且 stale） | 针对 429/网络错误的体验优化，属于高频痛点，价值高。已 4 个月未合并，存在被遗忘风险 |
| **自定义模型提供商上限自 10 提升至 20** | — | [PR #1212](https://github.com/netease-youdao/LobsterAI/pull/1212)（开放且 stale） | 低风险配置类改动，可快速合并，有助于维护者释放信号 |
| **多智能体任务活动过滤器** | — | [#2418](https://github.com/netease-youdao/LobsterAI/pull/2418) 已合并 | 已落地，预计将带动多 agent 协作场景的 UI 迭代 |

路线图信号：项目正在从“单会话 AI 助手”向“多智能体协作平台”演进，同时商业化运营功能（如积分活动）也开始进入代码库。

## 用户反馈摘要

- **痛点：模型行为不可预期**。Issue #1206 用户明确表达了对 Kimi2.5 重复回复行为的困惑：“不清楚是出现 bug 还是要继续等待执行”。该类不确定性会直接降低用户对私有化部署版本的信任度，反馈虽少但信号强烈。
- **痛点：导出能力单一**。Issue #1213 指出当前导出仅支持图片，无法满足引用、整理、分享等二次加工需求，用户操作成本高。该需求具有普适性，几乎所有会话类工具均有 Markdown 导出能力，属于不应缺失的基础功能。
- **满意度/进度反馈**：今日合并的 6 个 PR 均来自核心维护者/合作方，未见社区对合并速度的明确抱怨，但由于 4 条社区 PR 长期 stale，隐性不满可能潜伏在维护者的待办列表中。

## 待处理积压

以下 Issue/PR 已超过 4 个月未获得处理，建议维护者关注并明确决定“合并/关闭/打回”：

- **PR #1277**（依赖项更新，Electron 40.2.1 → 43.2.0，含 electron-builder）：跨大版本更新，影响面较大，但长期未合并会让依赖债越滚越大，建议单独排期评估。
- **PR #1208**（Cowork 手动重试按钮）：高频痛点修复，代码逻辑清晰（错误分类 + 内联重试按钮），开放 4 个月，建议尽快处理。
- **PR #1209**（web-search Chrome flag 阻断）：安全/兼容性修复，可用于规避外部注入导致的不可预期行为，建议合并。
- **PR #1212**（自定义 provider 上限 10 → 20）：零风险配置改动，适合作为低优先级批量合并的候选。
- **PR #1214**（导出 Markdown 功能）：直接对应 Issue #1213 的需求，如合并可一并关闭 Issue，提升社区对项目响应速度的观感。
- **Issue #1206**（Kimi 重复回复）：已活跃 4 个月，无 assignee、无 fix PR，若无法短期解决，建议至少给出临时规避方案，并在 Issue 中明确状态，避免用户流失。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-08-04

---

## 1. 今日速览

过去24小时内，Moltis 项目整体活跃度偏低，但存在一个值得关注的进展信号：

- **Issues**：0 条新增/活跃，0 条关闭 —— 社区未报告新问题，也未见旧问题推进。
- **PR**：仅 1 条处于 Open 状态（#1183），无合并、无关闭。
- **版本发布**：无新版本。

唯一活跃的 PR #1183 聚焦 MCP（Model Context Protocol）服务器的托管式管理，涉及仓库发现、安装、更新、回滚等完整生命周期能力，并有引入 HTTPS 凭据管理和 vault 集成的迹象。这表明项目正从"基础连接能力"向"企业级 MCP 配置治理"方向演进。整体来看，项目处于小幅推进的稳定期，开发重心倾向于 MCP 生态的深度集成。

> **活跃度评估**：低。当前进展集中在单条功能性 PR，社区互动较少。

---

## 2. 版本发布

今日无新版本发布，暂无相关信息。

---

## 3. 项目进展

### 🔵 PR #1183 (Open) — feat(mcp): add managed repository bundles

- **作者**：[penso](https://github.com/penso)
- **创建**：2026-08-02 ｜ **最后更新**：2026-08-03
- **链接**：[moltis-org/moltis PR #1183](https://github.com/moltis-org/moltis/pull/1183)

**摘要要点**：

- 新增 **托管 Git 仓库捆绑（managed repository bundles）**，用于发现、预览、安装、更新、回滚和移除 MCP 服务器。
- 支持 **HTTPS 凭据** 与 **托管 SSH 传输**（pinned managed SSH transport）。
- 引入 **vault 生命周期集成**（vault lifecycle integration）。
- 支持导入基于仓库的 MCP 配置（imported repository-backed MCP configurations）。
- 简化 **Web onboarding** 流程。

**意义**：这是 MCP 服务器管理从"手动配置"走向"可编程、可治理"的关键一步。将 MCP 服务器的安装、版本控制、回滚等操作统一纳入 managed bundle 机制，配合 vault 做敏感信息管理，说明项目在**生产级可用性**和**安全合规**方向上前进了一步。虽然尚未合并，但如果该 PR 落地，预期的用户价值包括：

- 运维人员无需手工编辑配置文件即可管理 MCP 服务器；
- 企业用户可通过 HTTPS/SSH 凭据安全访问私有仓库；
- 通过与 vault 集成，实现凭据动态注入与轮换。

**整体推进度**：本项目在 MCP server 生态上从"支持连接"迈向"支持全生命周期管理"。

---

## 4. 社区热点

今日社区讨论极少。唯一活跃条目为 PR #1183：

- **链接**：[PR #1183](https://github.com/moltis-org/moltis/pull/1183)

该 PR 获得 0 条评论、0 个 👍，但它是过去 24 小时唯一被更新的条目，说明维护者/贡献者仍在推进此事。从 PR 内容看，背后的核心诉求是：

> 解决 MCP 服务器配置分散、升级困难、难以回滚的问题 —— 用户需要一种**集中式、可版本化、可审计**的 MCP 服务器管理方式，特别是当 MCP 生态中服务器数量增多时，手工管理变得不可持续。

由于该 PR 尚在 Open 状态，预计社区讨论将在后续 Review 过程中展开。

---

## 5. Bug 与稳定性

今日无新 Bug、崩溃或回归问题报告。

- 过去 24 小时：**0 条 Issue 新增，0 条关闭**。
- 无已知稳定性风险被上报。

这是一个健康信号：当前主分支无明显回归，也未收到用户环境中的异常反馈。但需注意，低 Issue 量可能也意味着低使用率或用户尚未大规模测试新功能。

---

## 6. 功能请求与路线图信号

### 明确的功能信号

来自 PR #1183 的内容暗示了以下几个潜在路线图方向：

| 方向 | 具体功能 | 状态 |
|------|---------|------|
| MCP 服务器治理 | 托管仓库捆绑，支持安装/更新/回滚/移除 | 已在 PR 中实现，等待合并 |
| 安全与凭据管理 | HTTPS 凭据 + vault 生命周期集成 | 已在 PR 中实现，等待合并 |
| 传输层安全 | 托管 SSH 传输（pinned） | 已在 PR 中实现，等待合并 |
| 配置迁移 | 导入仓库备份的 MCP 配置 | 已在 PR 中实现，等待合并 |
| 用户体验 | 简化 Web onboarding 流程 | 已在 PR 中实现，等待合并 |

**结论**：如果 PR #1183 被合并，上述能力极有可能进入下一版本（如 v0.x 后续版本）。特别是 **vault 集成** 和 **SSH pinning** 表明项目在安全合规层面有明确规划。

---

## 7. 用户反馈摘要

由于过去 24 小时内 **0 条 Issue 评论** 和 **0 条 PR 评论**，暂无直接的用户反馈文本可供分析。

从 PR #1183 的变更内容反推，其针对的痛点可能包括：

- 用户手动配置 MCP server 时容易出错，尤其涉及私有仓库凭据时；
- 无法便捷地回滚到之前的 MCP 服务器版本；
- Web onboarding 流程复杂，新用户上手成本高。

这些属于**间接反馈**，来源于贡献者对用户痛点的判断，而非社区直接发声。

---

## 8. 待处理积压

### PR #1183 (Open，待 Review)

- **链接**：[PR #1183](https://github.com/moltis-org/moltis/pull/1183)
- **创建时间**：2026-08-02（距今 2 天）
- **最后更新**：2026-08-03（距今 1 天）

该 PR 是当前唯一处于 Open 状态的 PR，尚待维护者 Review 与合并。功能覆盖面较广（新增 managed repository bundles 子系统），建议维护者关注：

- 代码变更范围是否过大，是否需要拆分以降低 Review 负担；
- 是否已包含完善的测试覆盖（尤其是 vault 集成与 SSH 凭据路径）；
- 与现有 MCP 配置系统是否存在兼容性冲突。

虽然仅 2 天不算"长期积压"，但由于它是今日唯一的活跃项，建议在下一个工作周期优先处理。

---

## 总结

Moltis 项目今日处于**低活跃、单点推进**状态。核心信号是 PR #1183 带来的 MCP 管理能力升级，这符合 MCP 生态快速发展的趋势。项目健康度良好，无新增 Bug，无版本发布压力。建议关注 PR #1183 的 Review 进展，并留意合并后可能带来的配置迁移影响。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-08-04

## 1. 今日速览

过去 24 小时 CoPaw 项目保持高活跃度：共产生 **23 条 Issue 更新**（17 条新开/活跃，6 条关闭）与 **50 条 PR 更新**（26 条待合并，24 条已合并/关闭），并发布了 **v2.1.0-beta.1** 新版本。从动态分布看，稳定性修复（`spawn_subagent` 批处理参数误判、ACP 通知竞争、CI 沙箱拦截）与基础设施类 PR（沙箱约束汇报、模型回退、文件管理 REST API）同步推进，项目处于"功能开发与稳定性加固并行"的健康节奏。值得关注的是，多个中文用户深度使用后提出的体验类反馈（文件拖拽路径、任务产出物目录、多智能体引导缺失）获得较高共鸣，表明项目正在从核心功能完备走向打磨期。

---

## 2. 版本发布

### v2.1.0-beta.1（2026-08-03 发布）

**主要更新内容：**

| 类型 | 内容 | PR |
|------|------|-----|
| Bugfix | 修复聊天中陈旧的 channel 身份泄漏到新会话的问题 | [#6382](https://github.com/agentscope-ai/QwenPaw/pull/6382) |
| Feature | 收件箱（inbox）在新审批到达时增加侧边栏摆动提示，并优化徽标圆点颜色编码 | 同上 |

**破坏性变更：** 未发现明显破坏性变更。

**迁移注意事项：**

- 本版本为 Beta 预发布版，建议在非生产环境验证收件箱 UI 变化是否符合团队使用习惯。
- 由于 fix 涉及 channel 身份隔离，升级后请检查多账号/多通道场景下的会话上下文是否正确隔离。
- 2026-08-03 发布的 [Release Duty 验证追踪 Issue #6656](https://github.com/agentscope-ai/QwenPaw/issues/6656) 要求各平台在 4 小时内完成安装验证，平台技术负责人可关注该事项的验收状态。

---

## 3. 项目进展

过去 24 小时共 **24 条 PR 合并/关闭**，主要推进方向如下：

### 🔧 关键 Bug 修复

| PR | 内容 | 状态 |
|----|------|------|
| [#6653](https://github.com/agentscope-ai/QwenPaw/pull/6653) | 修复 Real-behavior-proof CI 对仅含 fenced code block 的 Evidence 区段整体剥离问题（修复 #6626） | ✅ 已合并 |
| [#6579](https://github.com/agentscope-ai/QwenPaw/pull/6579) | 桌面版改用内置 Python 执行脚本（回应社区长期诉求 #6160） | ✅ 已合并 |
| [#6609](https://github.com/agentscope-ai/QwenPaw/pull/6609) + [#6595](https://github.com/agentscope-ai/QwenPaw/pull/6595) | 修复 `spawn_subagent` 对 `batch` 可选参数的模式识别与空字符串强转问题（修复 #6588） | ✅ 已合并（#6609）；#6595 待合并 |
| [#6203](https://github.com/agentscope-ai/QwenPaw/pull/6203) | 为 Windows `tasklist` 存活探针增加超时与输出边界控制，防止 subprocess 卡死 | ✅ 已合并 |
| [#6654](https://github.com/agentscope-ai/QwenPaw/pull/6654) | 将 Playwright 版本锁定在 1.62 以下，修复 macOS 桌面构建验证超时 | ✅ 已合并 |
| [#6646](https://github.com/agentscope-ai/QwenPaw/pull/6646) | 修复 fork PR 在 `pull_request_target` 事件下因 body 被剥离导致 CI 误判（修复 #6563） | ✅ 已合并 |

### 🚀 新功能与架构演进

| PR | 内容 | 状态 |
|----|------|------|
| [#6650](https://github.com/agentscope-ai/QwenPaw/pull/6650) | Skill 列表接口瘦身：分离轻量摘要与详情端点，列表不再返回全量 content/config/scripts | 🟡 待 review |
| [#6651](https://github.com/agentscope-ai/QwenPaw/pull/6651) | 新增文件/文件夹管理 REST API（删除、重命名/移动、建目录、上传/下载、目录列表），沿用 FileGuard 安全模型 | 🟡 待 review |
| [#6659](https://github.com/agentscope-ai/QwenPaw/pull/6659) | 实现带冷却期的模型自动回退（fallback），应对限流/超时/服务错误 | 🟡 待 review |
| [#6657](https://github.com/agentscope-ai/QwenPaw/pull/6657) | Sandbox 约束不可强制执行时主动报告（如 `deny_paths` 在 `NoneSandbox` 下不再静默失效） | 🟡 待 review |
| [#6652](https://github.com/agentscope-ai/QwenPaw/pull/6652) | Mission 模式下 `max_iterations` 改为服务端强制生效，防止 controller LLM 无限派发子代理（修复 #6505） | 🟡 待 review |

### 📌 小结

24 小时内的合入集中在 **"稳定现有功能、疏通 CI 阻塞"** 层面，同时多条待 review 的功能 PR 已形成明确路线图信号：Skill 接口优化、文件管理 API、模型 fallback、沙箱约束透明化，这些大概率进入 v2.1 正式版或 v2.2 规划。

---

## 4. 社区热点

### 🔥 讨论最热 Issue Top 3

**#1 — Issue #6537：Skill tags 重启后消失（评论 11 条，已关闭）**
> [Skill tags disappear on restart (regression of #3270)](https://github.com/agentscope-ai/QwenPaw/issues/6537)

- 现象：Skill Pool UI 中设置的标签在重启后丢失，虽然 `PUT /skills/pool/{name}/tags` 已成功保存到 `skill.json`，但在启动时 manifest 重放阶段被抹除。
- 热度高的原因：这是一个 **回归 bug**，且严重干扰 Skill 管理核心工作流；11 条评论表明社区在复现与临时规避上有较多交流。该 Issue 已于今日关闭，但文档中未明确关闭原因，建议关注是否已对应修复 PR。

**#2 — Issue #6649：支持 GPT-5.6 prompt caching 参数（评论 8 条）**
> [Support GPT-5.6 prompt caching parameters in Responses API provider](https://github.com/agentscope-ai/QwenPaw/issues/6649)

- 诉求：为 `prompt_cache_key`、`prompt_cache_options`、`prompt_cache_breakpoint` 提供支持，降低多轮 Agent 对话的延迟与成本。
- 信号：GPT-5.6 刚发布，社区已迅速跟进模型能力接入；8 条评论中预计有关键实现细节讨论（如缓存前缀粒度、与现有 tool-calling 的配合）。

**#3 — Issue #6588：`spawn_subagent` 空 batch 占位符被误判为批处理模式（评论 6 条）**
> [`spawn_subagent` treats empty `batch` placeholders as batch mode in single-task calls](https://github.com/agentscope-ai/QwenPaw/issues/6588)

- 现象：Responses 兼容模型在单任务调用时返回空 `batch`，QwenPaw 将任何非 `None` 值视为批处理模式，导致语义错误。
- 热度高的原因：该 bug 触发路径复杂（三步骤失败链），且影响所有通过 OpenAI Responses 协议接入的模型。目前已有关联 PR #6595、#6658、#6609（#6609 已合并），预计今日可部分缓解。

### 💬 值得关注的 PR

- **PR #6525（feat: 用户上下文透明穿透）**：将 `user_id`、`channel` 等元数据从 Chat API 穿透到 Agent→Tool→MCP→SKILL CLI 子进程。该 PR 实现面广，涉及多链路改造，讨论度与实现复杂度的匹配值得后续重点跟盯。
- **PR #5930（feat: SSE 响应增加结构化运行结果）**：为 Java 等外部服务通过 `POST /api/console/chat` 调用时提供结构化"运行结束"信号，避免靠关键字猜失败。这反映了 **API 自动化集成场景**的硬需求。

---

## 5. Bug 与稳定性

按严重程度排序（🔴 = 严重 / 🟠 = 中等 / 🟡 = 轻微）：

### 🔴 严重（导致服务不可用、数据/资源浪费）

| Issue | 问题描述 | Fix PR 状态 |
|-------|---------|-------------|
| [#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612) | **与 agentscope 2.0.4.post1 不兼容**：proactive/memory 子系统出现 `Msg.content` 类型崩溃与工具权限死锁；同时 [#6619](https://github.com/agentscope-ai/QwenPaw/issues/6619) 报告 `ToolCallBlock` 缺失 `extra_content` 字段崩溃。 | ❌ 暂无 |
| [#6608](https://github.com/agentscope-ai/QwenPaw/issues/6608) | 长时 shell 命令绕过 `shell_command_timeout`，导致飞书会话被阻塞 **1.5 小时**；取消后产生孤儿子进程，且无按 channel 的总超时。 | ❌ 暂无 |
| [#6614](https://github.com/agentscope-ai/QwenPaw/issues/6614) | 微信 cron 定时推送**从未真正送达**但任务显示 `success`；`ret=-2 context_token` 失效，已消耗约 **44M tokens** 排查与重试。 | ❌ 暂无 |

### 🟠 中等（影响特定场景或部分用户）

| Issue | 问题描述 | Fix PR 状态 |
|-------|---------|-------------|
| [#6647](https://github.com/agentscope-ai/QwenPaw/issues/6647) | 桌面版 WebView2 进程崩溃（`STATUS_IN_PAGE_ERROR 0xc0000006`）导致 UI 全黑且无恢复路径。 | ❌ 暂无 |
| [#6635](https://github.com/agentscope-ai/QwenPaw/issues/6635) + [#6633](https://github.com/agentscope-ai/QwenPaw/issues/6633) | 慢网络下 Console 页面与 Skills/Skill Pool 页面因"MB 级未压缩 payload + 前端固定 30s 超时"而加载失败。 | 🟡 [#6650](https://github.com/agentscope-ai/QwenPaw/pull/6650) 部分修复（Skill 列表瘦身） |
| [#6625](https://github.com/agentscope-ai/QwenPaw/issues/6625) | ACP `delegate_external_agent` 在 `session/update` 通知与 `session/prompt` 响应同段到达时偶发"completed without text output"。 | ✅ [#6623](https://github.com/agentscope-ai/QwenPaw/pull/6623) 待合并 |
| [#6565](https://github.com/agentscope-ai/QwenPaw/issues/6565) | `execute_shell_command` 引号外换行被折叠为空格破坏语法；Linux PIPE 模式下后台进程卡住。 | ❌ 暂无 |

### 🟡 轻微（体验问题/回归）

| Issue | 问题描述 | Fix PR 状态 |
|-------|---------|-------------|
| [#6589](https://github.com/agentscope-ai/QwenPaw/issues/6589) | 超长 stdout（数万行）一次性渲染导致前端 UI 冻结（已关闭）。 | ✅ 已关闭（推测已修复） |
| [#6547](https://github.com/agentscope-ai/QwenPaw/issues/6547) | Coding Mode 编辑器中光标渲染位置偏移（已关闭）。 | ✅ 已关闭 |
| [#6624](https://github.com/agentscope-ai/QwenPaw/issues/6624) | Scroll 自动压缩不触发 `summarize_when_compact` 记忆流程，手动 `/compact` 可触发。 | ❌ 暂无 |
| [#6655](https://github.com/agentscope-ai/QwenPaw/issues/6655) | Console 通道不渲染安全审批提示，[HIGH] 风险命令等待 300s 后静默超时（已关闭）。 | ✅ 已关闭 |

**总体判断**：今日报告的 Bug 中，**最严重的是依赖兼容问题（#6612/#6619）与通道级阻塞/静默失败（#6608/#6614）**，均为用户生产环境已实际影响的问题。好消息是 #6588 已获多个 PR 修复并部分合入，CI 侧的两个阻塞（#6563、macOS verify）也已解决，项目主干的交付通道正在恢复畅通。

---

## 6. 功能请求与路线图信号

### 🧭 明确路线图信号（已有对应 PR）

| 功能需求 | 对应 PR | 判断 |
|---------|---------|------|
| Skill 列表页/磁盘页慢网络加载失败 | [#6650](https://github.com/agentscope-ai/QwenPaw/pull/6650) | 已被维护者采纳，采用"列表摘要 + 详情按需"方案，与社区诉求一致，预计进入 v2.1 |
| 模型自动回退（应对限流/超时） | [#6659](https://github.com/agentscope-ai/QwenPaw/pull/6659)（新）+ [#2199](https://github.com/agentscope-ai/QwenPaw/pull/2199)（3 月老 PR） | 两个 PR 功能重叠，需注意整合。老 PR #2199 已积压 5 个月，新 PR 的出现说明维护者正在推动此事 |
| 任务产出物按任务分目录放置 | [#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643) | 暂无直接 PR，但 [#6651](https://github.com/agentscope-ai/QwenPaw/pull/6651) 文件管理 API 可作为基础能力 |
| 文件管理器/文件 REST API | [#6651](https://github.com/agentscope-ai/QwenPaw/pull/6651) | 已实现，待 review |

### 💡 高质量用户建议（待维护者评估）

- **#6649 — GPT-5.6 prompt caching 支持**：降低多轮 Agent 成本，若 CoPaw 定位为"生产级 Agent 框架"，此能力应优先级较高。
- **#6621 — 多智能体协作引导缺失**：用户反馈"Default Agent 默认不调用其他 Agent，必须在 PROFILE.md 显式写指令"。这不仅是文档问题，更可能是 **系统默认行为设计**问题。该反馈获得了用户长达 50+ 轮对话调试的实践支撑，值得维护者认真评估是否调整默认激活策略或增加 UI 引导。
- **#6583 + #6642 — 文件拖拽体验优化**：两者是同一使用场景的两面——"完整展示文件名"与"直接读原路径而非先复制上传"。后者触及桌面 Agent 工具的常规预期，建议与 #6643（产出物目录）合并考虑，形成一套完整的本地文件处理体验改进方案。

---

## 7. 用户反馈摘要

### 😊 用户认可点

- 文档质量获认可：Issue #6621 用户明确表示"已完整阅读官方文档《Multi-Agent》"，说明文档本身仍是用户解决问题的第一入口。
- CI 门禁的"Real behavior proof" 机制被频繁提及（#6626、#6563、#6653），虽然当前有 bug，但社区整体接受该机制作为质量保障手段。

### 😠 核心痛点

| 痛点 | 用户场景 | 引用 |
|------|---------|------|
| **静默失败是最深的信任危机** | 微信 cron 推送"任务显示 success 但从未送达"，且已烧 44M tokens | 来自 [#6614](https://github.com/agentscope-ai/QwenPaw/issues/6614) |
| **依赖版本地狱** | 安装 `qwenpaw==2.0.1` + `agentscope==2.0.4.post1` 即触发两处运行时崩溃 | 来自 [#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612)、[#6619](https://github.com/agentscope-ai/QwenPaw/issues/6619) |
| **桌面版 Python 环境割裂** | Windows 用户使用 Conda 管理环境，QwenPaw 却调用系统全局 Python 导致脚本无法执行 | 来自 [#6160](https://github.com/agentscope-ai/QwenPaw/issues/6160) —— 该 issue 已关闭，且 [#6579](https://github.com/agentscope-ai/QwenPaw/pull/6579) 已合入使用内置 Python，**此项显著改善** |
| **文件处理不符合桌面工具直觉** | 拖入文件先上传复制到 media 目录、任务产出物全部堆积 | 来自 [#6642](https://github.com/agentscope-ai/QwenPaw/issues/6642)、[#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643) |
| **多智能体默认不协作** | 用户进行了 50+ 轮对话才发现需要手动写 PROFILE.md 调用指令，"大量无效调试和时间损耗" | 来自 [#6621](https://github.com/agentscope-ai/QwenPaw/issues/6621) |
| **安全审批在非 Web 通道不可见** | Console 通道下审批请求不渲染，用户无感知，agent 等待 300s 超时 | 来自 [#6655](https://github.com/agentscope-ai/QwenPaw/issues/6655) |

### 🧐 用户行为洞察

- **中文社区活跃度高**：本次 23 条 Issue 中约半数由中文用户提交，涉及场景具体（微信推送、飞书会话、桌面端使用习惯），说明 CoPaw 在中文开发者群体中已有实际落地。
- **用户对"可观测性"非常敏感**：多个 Issue 聚焦于"失败未被感知"（#6614 微信、#6655 审批、#6635/#6633 慢网络、#6625 ACP 静默无输出），建议项目组将"失败的可见性"列为稳定性优先项。

---

## 8. 待处理积压

### ⚠️ 长期未合并的 PR（需维护者决策）

| PR | 创建时间 | 积压时长 | 重要性 |
|----|---------|---------|--------|
| [#2199](https://github.com/agentscope-ai/QwenPaw/pull/2199) feat(model-fallback): 模型回退 + 冷却机制 | 2026-03-24 | **约 4.5 个月** | 高 —— 多个 Issue（#1327、#2089）关联限流场景，且新 PR #6659 功能重叠，建议尽快决策合并方案 |
| [#6525](https://github.com/agentscope-ai/QwenPaw/pull/6525) feat: 用户上下文透明穿透（Chat API→Tool→MCP→SKILL） | 2026-07-28 | 约 1 周 | 中高 —— 涉及面广（多链路元数据透传），需要充分评审安全性 |
| [#5930](https://github.com/agentscope-ai/QwenPaw/pull/5930) feat: SSE 响应增加结构化运行结果 | 2026-07-10 | 约 1 个月 | 中 —— API 自动化集成方（Java 服务等）的强需求 |
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) feat: unify provider discovery / routing / agent controls | 2026-07-21 | 约 2 周 | 中 —— 与 #6167 关联，属于架构级整合 |

### 📋 长期未响应的重要 Issue

| Issue | 创建时间 | 问题 |
|-------|---------|------|
| [#6565](https://github.com/agentscope-ai/QwenPaw/issues/6565) execute_shell_command 换行折叠 + 后台进程卡住 | 2026-07-30 | 两个 bug 均直接影响 Unix/Linux 用户的日常命令执行，评论仅 1 条，维护者未明确回复 |
| [#6624](https://github.com/agentscope-ai/QwenPaw/issues/6624) 自动压缩不触发记忆流程 | 2026-08-01 | 涉及 memory 配置行为一致性，用户表示"不确定是设计如此还是缺陷"，需要维护者确认 |
| [#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612) + [#6619](https://github.com/agentscope-ai/QwenPaw/issues/6619) agentscope 兼容性崩溃 | 2026-07-31 / 08-01 | **优先级最高**：两个独立崩溃均由依赖版本漂移导致，建议尽快在 `pyproject.toml`/`requirements.txt` 中锁定兼容版本范围 |

### 📌 维护者行动建议（按优先级）

1. **锁定 dependencies 版本**（trivial but critical）：立即处理 #6612/#6619，限制 `agentscope` 兼容版本范围，避免新用户一装即崩。
2. **决策 model-fallback 方案**：二选一或整合 #2199 与 #6659，该功能被长期挂起导致多个 issue 反复提及。
3. **关注飞书/微信通道稳定性**（#6608/#6614）：通道级阻塞+静默失败属于生产事故级别，建议补全"按 channel 总超时 + 失败可观测性"。
4. **回应 #6621 多智能体协作引导**：即使不改变默认行为，也应在文档或 UI 层增加显式引导，避免用户 50+ 轮对话的时间损耗。

---

*数据来源：GitHub agentscope-ai/CoPaw 仓库，统计时间窗口 2026-08-03 ~ 2026-08-04。本报告由 AI 分析师基于公开仓库元数据自动生成，供项目维护者与社区参考。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-04

## 1. 今日速览

ZeroClaw 过去 24 小时保持高活跃度：Issue 更新 50 条（新开/活跃 43，关闭 7），PR 更新 50 条（待合并 47，合并/关闭 3），无新版本发布。社区讨论高度集中在 **RFC 类架构议题**上，包括 Goal mode 有界任务模式（#8303）、统一附件架构（#9488）、SOP 权限契约（#9598）等，表明 v0.9.0 的架构决策周期正在密集推进。安全与稳定性修复占据今日 PR 流量的较大比重，包括响应缓存边界（#9720）、审批响应者授权（#9574）、代理配置生效（#9606）等高优先级修复。整体来看，项目处于 **"架构决策驱动 + 安全加固并进"** 的活跃开发阶段。

---

## 2. 版本发布

今日无新版本发布。多项 RFC 与 Tracker（#7432、#8692、#9600）显示项目正在为 v0.9.0 里程碑集中处理 auth、security、gateway 等 breaking-change 工作，v0.9.0 仍处于规划与合并前的密集评审期。

---

## 3. 项目进展

数据概览显示今日有 3 条 PR 合并/关闭，虽最新列表中未直接标注具体条目（列表中均为 OPEN 状态，多为等待合并或 needs-author-action），但从活跃 PR 的趋势上可以看到以下关键推进方向：

**安全加固（多条 P1 级 PR 在审）**
- [#9574 fix(channels): authorize approval responders](https://github.com/zeroclaw-labs/zeroclaw/issues/9574)（P1，risk:high）：将 Telegram/Slack/Lark/Matrix 的工具审批绑定到原始 chat/room，并校验回复者身份，修复审批伪造风险。
- [#9720 fix(runtime): enforce response cache request boundaries](https://github.com/zeroclaw-labs/zeroclaw/issues/9720)（P1，risk:high）：将 modifying/cancelling 钩子应用到 ephemeral final request，且仅对确定性请求启用本地缓存，避免缓存绕过安全策略。
- [#9606 fix(providers): honor runtime proxy for OpenAI Responses](https://github.com/zeroclaw-labs/zeroclaw/issues/9606)（P1，risk:high）：修复 OpenAI Responses API 路径未走运行时代理的问题。
- [#9472 fix(vi): stop registering vi_verify as a model-callable tool](https://github.com/zeroclaw-labs/zeroclaw/issues/9472)：移除 `vi_verify` 的工具注册，避免模型自供参数绕过签名凭证校验（关联 #9328）。

**可靠性修复**
- [#9722 fix(hardware): preserve timeout error context](https://github.com/zeroclaw-labs/zeroclaw/issues/9722)：保留超时错误的原始上下文，避免序列化时丢失分类信息。
- [#9721 fix(zerocode): gate signal cleanup to Unix](https://github.com/zeroclaw-labs/zeroclaw/issues/9721)：修复 Windows 下 Clippy lane 对 Unix-only 信号处理辅助函数的编译告警。
- [#9709 fix(tts): clean up Edge TTS temp output on every error path](https://github.com/zeroclaw-labs/zeroclaw/issues/9709)：补齐 Edge TTS 临时文件在所有错误路径上的清理。

**架构重构（XL 级）**
- [#9069 fix(dashboard): per-agent backend + memory count](https://github.com/zeroclaw-labs/zeroclaw/issues/9069)（stack 7/7）：仪表板后端与内存计数语义修正，失败 handle 报告 distinct `unavailable` 状态，未知 `?agent=` 返回 404。已 rebase 至最新 master。
- [#9072 feat(memory): separate authoritative storage from optional enrichment connectors](https://github.com/zeroclaw-labs/zeroclaw/issues/9072)：将权威存储与可选 enrichment 解耦，新增 `memory.enricher` 选择器与独立 catalog。

整体来看，项目今日没有出现新的合并高潮，但 **P1 级安全修复 PR 密集涌现，且多为质量较高的定向修复**，v0.9.0 的安全基础正在快速补齐。同时多个长期大型 PR（#9069、#9072）处于持续 rebase 和评审迭代中。

---

## 4. 社区热点

今日评论数最多的议题高度集中于 **RFC 与治理类讨论**，体现了社区对架构方向的高度关注：

**[#8303 RFC: Goal mode v1 — bounded foreground Matrix work](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)（评论 11，👍 1）**
自 6 月 24 日创建后持续活跃至今，是当前评论最多的议题。讨论的核心是 ZeroClaw 如何在一个以上的 agent turn 中持久地追并有界用户目标，涉及重启交接、频道准入、模型发起控制等边界问题。该 RFC 风险等级为 high，仍在 needs-maintainer-review 状态，说明维护者对其实现边界非常谨慎。

**[#8692 Tracker: Maintainer decision queue for RFCs and design issues](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)（评论 8）**
维护者决策队列，用于跟踪 RFC、设计议题、发布策略问题的接受/拒绝/推迟决策。这是当前项目治理节奏的"控制台"，其存在本身就暗示了大量 RFC 积压需要消化。

**[#6641 Feature: Turn-level OTel trace correlation](https://github.com/zeroclaw-labs/zeroclaw/issues/6641)（评论 8，已关闭）**
OTel 追踪关联功能的落地，将 `llm.call` / `tool.call` / `memory.*` span 嵌套到单一 turn trace 下。已关闭，说明该功能实现了闭环，是今日少数完成合并/关闭的 feature。

**[#9488 RFC: Unified attachment architecture for web chat and channels](https://github.com/zeroclaw-labs/zeroclaw/issues/9488)（评论 8）**
由 @NiuBlibing 提出的统一附件架构 RFC，覆盖 web chat 与各 channel 的附件处理。属于高风险的架构级提案，当前处于 Proposed 状态。

**热点诉求分析**：社区当前最关心的是 **(1) 有界任务执行模型（Goal mode）**、(2) **跨 channel 的统一能力抽象（附件、审批）**、(3) **可观测性的结构化落地**。这些诉求共同指向一个方向：ZeroClaw 正从"单轮对话助手"向"可承载复杂任务、可审计、可治理的 Agent 运行时"演进。

---

## 5. Bug 与稳定性

按严重程度排列：

**S1 — 工作流阻塞 / 审计日志伪造**

- [#7527 [Bug]: macOS desktop app can reopen blank or without a window](https://github.com/zeroclaw-labs/zeroclaw/issues/7527)（P1，r:needs-repro，needs-author-action）：macOS 15.7.7 上安装后权限检测失效、显示空白页，重启后窗口消失。S1 级别，但标注为 needs-repro，目前缺少复现步骤，阻塞修复进展。
- [#9642 [Bug]: an approval that times out is recorded as an explicit operator denial](https://github.com/zeroclaw-labs/zeroclaw/issues/9642)（P1，已关闭）：**审计日志被篡改**——审批超时被记录为"操作者明确拒绝"。这是严重的审计可信度问题，已有关联修复 PR（#9574 授权审批响应者），该 issue 本身已关闭但修复尚未合并。
- [#6002 [Bug]: Not clearly addressed to the assistant](https://github.com/zeroclaw-labs/zeroclaw/issues/6002)（S1，已关闭，stale）：Telegram 场景下，用户在容器中运行 ZeroClaw 查询本地 llama.cpp，消息未明确指向助手，导致工作流阻塞。该 Issue 已被标记 stale 并关闭，可能已通过其他途径解决或不再追踪。

**S2 — 行为降级**

- [#9718 [Bug]: Telegram channel delivers duplicate messages when model emits both tool_call and content](https://github.com/zeroclaw-labs/zeroclaw/issues/9718)（新开，2026-08-03）：LLM 同时返回 `tool_calls` 数组和 `content` 字段时，Telegram 频道重复投递消息。ZeroClaw 应做防御性去重。当前仅 1 条评论，尚无修复 PR。

**S3 — 次要问题**

- [#6157 [Bug]: Nextcloud Talk use correct bot message API](https://github.com/zeroclaw-labs/zeroclaw/issues/6157)（S3，blocked）：Nextcloud Talk 使用错误的 bot 消息 API（URL 构造和 bot secret 传递方式有误）。已 accepted 但被 blocked，等待上游或相关依赖的变更。

**稳定性趋势总结**：今日新发现的 Bug 数量较少（#9718 为全新 issue），已关闭的 Bug 多为 stale 处理或已完成修复。"审批超时伪造审计日志"（#9642）虽然是今日的关闭项，但隐蔽性极高、影响审计公信力，值得在 PR #9574 合并时重点回归验证。

---

## 6. 功能请求与路线图信号

以下功能请求处于 accepted / in-progress 或 RFC 讨论中，是 v0.9.0 的候选内容：

**已 accepted 的功能请求（接近落地）**

- [#6641 Turn-level OTel trace correlation（已关闭，落地完成）](https://github.com/zeroclaw-labs/zeroclaw/issues/6641)：turn 级 OpenTelemetry 追踪关联，为后续可观测性功能奠定基础。
- [#8134 Reset stale channel sessions after channels.session_ttl_hours](https://github.com/zeroclaw-labs/zeroclaw/issues/8134)（accepted）：实现 `session_ttl_hours` 配置，自动截断过期会话历史，降低 token 消耗并改善响应时间。对长期运行 Slack/Telegram 的团队有直接收益。
- [#7759 Decouple gateway WebSocket lifetime from agent turn lifecycle](https://github.com/zeroclaw-labs/zeroclaw/issues/7759)（P1，accepted）：WebSocket 断连不应取消 in-flight turn，改为后台运行 + 重连恢复。这是 Web 聊天体验的关键改进。
- [#9005 Inject active interaction harness context into agent prompts](https://github.com/zeroclaw-labs/zeroclaw/issues/9005)（accepted）：让模型知道当前由哪个用户侧 harness 驱动，提升多入口场景下的行为准确性。
- [#9682 Tracker: zerocode SOP pane MVP](https://github.com/zeroclaw-labs/zeroclaw/issues/9682)（in-progress）：SOP 面板只读状态可见性（运行状态图标），已 rescoped 为纯状态展示，Run/Resume 控件推迟。

**RFC 阶段（needs-maintainer-review，风险较高）**

- [#9488 Unified attachment architecture（web chat + channels）](https://github.com/zeroclaw-labs/zeroclaw/issues/9488)
- [#9598 SOP capability permission contract](https://github.com/zeroclaw-labs/zeroclaw/issues/9598)——当前 Rev 2，目标 v0.9.0，确定 SOP 权限模型的权威来源
- [#9621 Staged opt-in product telemetry with operator-reviewed reports](https://github.com/zeroclaw-labs/zeroclaw/issues/9621)——解决维护者"不知道功能是否被使用"的决策盲区，与 #9103（Lucid/Qdrant 实际使用情况）相关

**与现有 PR 的衔接判断**：Goal mode（#8303）若被接受，将与 #7759（后台 turn 执行）形成互补；#9598（SOP 权限契约）与 #9574（审批响应者授权）共同构成 v0.9.0 的权限治理闭环。#9621 产品遥测虽然敏感（涉及隐私），但可能会以 opt-in + 操作者审查的形式进入路线图。

---

## 7. 用户反馈摘要

从今日活跃的 Issues 评论中，可以提炼出以下真实用户痛点与场景：

**集成场景的真实摩擦**

- [#6002](https://github.com/zeroclaw-labs/zeroclaw/issues/6002) 用户描述了一个典型自托管场景："我从 Telegram 发送 'Hi' → ZeroClaw 捕获消息 → 发给本地 llama.cpp → llama.cpp 处理后返回"。这类数据闭环的易用性直接影响用户对 ZeroClaw 的第一印象。该 issue 已被关闭（stale），但可能意味着问题已解决或不再被维护者优先处理。

**客户端体验缺陷**

- [#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) macOS 用户表述：安装后"无法检测到授予的权限→响应迟钝→显示空白页→重启后窗口消失"。这类桌面端问题对非技术用户的伤害最大，且当前标注 needs-repro，需要更多用户提供复现信息。
- [#9718](https://github.com/zeroclaw-labs/zeroclaw/issues/9718) Telegram 重复消息：当模型同时返回工具调用和文本内容时，用户会看到两条消息。这是多模态模型逐步普及后越来越常见的行为模式，防御性去重应当成为默认策略。

**对维护者响应速度的认可**

- [#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641)（已关闭）中，提交者 @JordanTheJet 对维护者 @alexandme 的响应表达了明确感谢："你在两个 PR 上的响应速度都很出色"。这说明当前维护者在可观测性领域的投入获得了社区正面反馈。

**对架构方向的专业担忧**

- [#9642](https://github.com/zeroclaw-labs/zeroclaw/issues/9642) 的提交者 @ZiBibro 用非常直白的语言强调了审计日志伪造的严重性："这改变了日志对人类行为的记录内容"，并指出"此列表中的其他问题只是降低印象，这一个伪造了审计线索"。这种来自安全敏感用户的表达，说明了审批超时语义（timeout vs denial）需要从产品层面区分对待。

---

## 8. 待处理积压

以下为需要维护者关注的长周期或阻塞性项目：

**长期未合并的大型 PR（XL 级，标注 needs-author-action 或 stale-candidate）**

- [#8713 fix(tools): add allowed_private_hosts opt-in to file_download SSRF gate](https://github.com/zeroclaw-labs/zeroclaw/issues/8713)（2026-07-04 创建，stale-candidate，risk:high，size:XL）：SSRF 门禁 + 尾点主机名处理修复，已经历多轮 review，当前有 stale 风险。**SSRF 属于高危安全问题，建议尽快评估合并或明确阻塞原因。**
- [#9069 fix(dashboard): per-agent backend + memory count](https://github.com/zeroclaw-labs/zeroclaw/issues/9069)（2026-07-14 创建，stack 7/7，risk:high）：已 rebase 至最新 master，涉及 core/config/runtime/tool 等多模块，语义修正较复杂。
- [#9072 feat(memory): separate authoritative storage from optional enrichment connectors](https://github.com/zeroclaw-labs/zeroclaw/issues/9072)（2026-07-14 创建，risk:high）：记忆系统架构解耦，影响面大。
- [#9419 fix(providers): rotate live credentials after rate limits](https://github.com/zeroclaw-labs/zeroclaw/issues/9419)（2026-07-26，principal contributor，risk:high）：可靠 provider 的凭证轮换机制，绑定具体凭证到尝试并仅冷却触发 429 的凭证。

**长期未决的高风险 Issue**

- [#8303 RFC: Goal mode v1](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)（2026-06-24 创建，评论 11，risk:high）：已有大量讨论，但仍 needs-maintainer-review。作为当前社区评论最多的议题，维护者应尽快给出方向性决策（接受 / 要求重构 / 拒绝），避免社区投入继续沉没。
- [#6157 Nextcloud Talk bot message API](https://github.com/zeroclaw-labs/zeroclaw/issues/6157)（2026-04-27 创建，blocked）：已 accepted 但被阻塞超过 3 个月。建议查明阻塞原因（上游依赖 / 内部排期），必要时降级或转移所有权。
- [#7527 macOS 窗口空白](https://github.com/zeroclaw-labs/zeroclaw/issues/7527)（2026-06-12 创建，S1，needs-repro）：最严重级别的桌面端问题，但缺少复现步骤。建议维护者主动联系提交者或提供带日志的调试版本，推动复现闭环。

**需要作者响应的 RFC（needs-author-action）**

- [#8424 Workspace-relative forbidden path patterns and optional .zeroclawignore](https://github.com/zeroclaw-labs/zeroclaw/issues/8424)（2026-06-28，risk:high，评论 7）
- [#9246 Preserve Todo tracker configuration during ZeroCode ownership migration](https://github.com/zeroclaw-labs/zeroclaw/issues/9246)（2026-07-21，risk:high，评论 5）

这些 RFC 均处于 needs-author-action 状态，作者长时间未回应会消耗维护者的 review 上下文。**建议维护者设置 RFC 响应时限，超时自动关闭或标记为 deferral。**

---

**日报总结语**：ZeroClaw 正处于 v0.9.0 的关键架构决策期，RFC 密度与社区讨论热度都很高。安全修复 PR 的大规模出现是积极信号，但多个 XL 级 PR 和 RFC 的长期未决也积累了一定的治理债。下一步值得重点观察的是：(1) #8303 Goal mode 的维护者决策；(2) #9574 审批授权修复的合并进度；(3) #8713 SSRF 门禁是否会因 stale 而丢失。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*