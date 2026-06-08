# OpenClaw 生态日报 2026-06-08

> Issues: 296 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-08 00:29 UTC

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

# OpenClaw 项目动态日报 | 2026-06-08

## 1. 今日速览

OpenClaw 今日保持**极高活跃度**：24小时内 Issues 更新 296 条（177 活跃/119 关闭）、PR 更新 500 条（374 待合并/126 已合并关闭），但**零版本发布**。社区讨论集中在消息投递可靠性、会话状态管理和多通道适配器稳定性三大主题。值得关注的是，P1 级 Bug 中多个涉及"消息丢失"和"会话状态损坏"的回归问题仍无修复 PR，而今日新增的 5 条 PR 聚焦 UI/CLI 体验优化，显示维护者在"救火"与"打磨"之间分散精力。整体健康度：**功能迭代活跃，但核心稳定性债务累积**。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 今日合并/关闭的重要 PR（5 条）

| PR | 作者 | 核心贡献 | 链接 |
|:---|:---|:---|:---|
| #91252 | XuZehan-iCenter | **修复技能运行时文件描述符泄漏**：chokidar 监听器长期占用 FD 导致网关重启前资源耗尽，通过原始事件检测替代持久监听 | [PR #91252](https://github.com/openclaw/openclaw/pull/91252) |
| #88796 | SebTardif | **Discord search 动作自动解析 guildId**：消除模型未显式传递 guildId 时的 `ToolInputError`，从会话通道元数据推断 | [PR #88796](https://github.com/openclaw/openclaw/pull/88796) |
| #91281 | whiteyzy | **飞书测试工具缓存清理**：`setFeishuClientRuntimeForTest` 替换 SDK 后清除旧客户端缓存，修复测试可靠性 | [PR #91281](https://github.com/openclaw/openclaw/pull/91281) |
| #91246 | TurboTheTurtle | **WebChat 媒体完成事件修复**：生成媒体的完成提示携带显式 `MEDIA:<path>` 指令，附件型负载视为可见投递事件 | [PR #91246](https://github.com/openclaw/openclaw/pull/91246) |
| #91076 | LiuwqGit | **Codex 孤儿 tool.call 回复投递**：修复 2026.6.1 回归——存在已完成 `agentMessage` 但孤儿 `tool.call` 时抑制通道投递的问题 | [PR #91076](https://github.com/openclaw/openclaw/pull/91076) |

**整体推进评估**：今日合并以"补丁级修复"为主，无架构级改进。Codex 相关修复（#91076）对 Plus 订阅用户关键，但更大的会话状态管理重构（如 #88838 SQLite 迁移）仍在等待。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---:|:---|:---|
| 🥇 | #25592 工具调用间文本泄漏至消息通道 | **27** | **安全与 UX 的根本冲突**：内部处理文本（错误处理、执行确认）不应暴露给终端用户，但当前路由层无"内部/外部"区分机制 | [Issue #25592](https://github.com/openclaw/openclaw/issues/25592) |
| 🥈 | #88838 会话/转录 SQLite 迁移追踪 | **18** | **技术债务可视化**：要求将大型迁移拆分为可审查的 PR 序列，避免"大爆炸"重写风险 | [Issue #88838](https://github.com/openclaw/openclaw/issues/88838) |
| 🥉 | #88312 Codex 回合完成停滞回归 | **14** | **订阅服务可靠性**：ChatGPT Plus 子服务的多工具代理回合在 2026.5.27 后可靠失败，用户被迫降级版本 | [Issue #88312](https://github.com/openclaw/openclaw/issues/88312) |
| 4 | #29387 agentDir 引导文件被静默忽略 | **14** | **配置模型一致性**：per-agent 目录与 workspace 目录的加载优先级混乱，破坏多代理隔离预期 | [Issue #29387](https://github.com/openclaw/openclaw/issues/29387) |
| 5 | #90991 Cron 定时触发器污染全局运行时状态 | **13** | **多租户隔离缺陷**：单个 cron 作业的异常导致全系统瞬时过载，无资源边界保护 | [Issue #90991](https://github.com/openclaw/openclaw/issues/90991) |

**背后诉求分析**：热点议题呈现"**边缘通道复杂化 > 核心引擎稳定性**"的特征——Slack/iMessage/Telegram/Feishu 等适配器的特殊行为不断暴露架构假设漏洞，而会话状态作为核心抽象缺乏清晰的边界契约。

---

## 5. Bug 与稳定性

### 按严重程度排列的今日活跃 Bug

| 优先级 | Issue | 类型 | 状态 | 修复 PR | 影响评估 |
|:---|:---|:---|:---|:---|:---|
| **P1** | [#25592](https://github.com/openclaw/openclaw/issues/25592) 工具调用间文本泄漏 | 安全/UX | 🟡 开放，多标签阻塞 | ❌ 无 | **高危**：内部错误处理文本暴露给用户，可能泄漏敏感信息 |
| **P1** | [#88312](https://github.com/openclaw/openclaw/issues/88312) Codex 回合完成停滞 | 回归 | 🟡 开放，需现场复现 | ❌ 无 | **订阅服务中断**：ChatGPT Plus 用户核心功能失效 |
| **P1** | [#29387](https://github.com/openclaw/openclaw/issues/29387) agentDir 引导文件被忽略 | 配置 | 🟡 开放，安全审查阻塞 | ❌ 无 | 多代理部署配置失效，安全策略无法按代理隔离 |
| **P1** | [#90991](https://github.com/openclaw/openclaw/issues/90991) Cron 全局状态污染 | 可靠性 | 🟡 开放，需现场复现 | ❌ 无 | **系统性风险**：单作业故障级联至全集群 |
| **P1** | [#31583](https://github.com/openclaw/openclaw/issues/31583) exec 工具不继承 skills.env | 回归 | 🟡 开放，多标签阻塞 | ❌ 无 | 密钥注入失效，外部集成中断 |
| **P1** | [#40001](https://github.com/openclaw/openclaw/issues/40001) write 工具无追加模式 | 数据丢失 | 🟡 开放，产品决策阻塞 | ❌ 无 | Cron 会话间数据覆盖，记忆文件损坏 |
| **P1** | [#91212](https://github.com/openclaw/openclaw/issues/91212) 投递恢复在通道就绪前启动 | 消息丢失 | 🔴 **今日新建** | ❌ 无 | 网关重启后消息静默丢失，retryCount 错误累加 |
| **P1** | [#90639](https://github.com/openclaw/openclaw/issues/90639) safeguard 压缩模式失效 | 成本/可用性 | 🔴 **6-5 新建，活跃中** | ❌ 无 | 会话膨胀至 200K+ tokens 才触发压缩，单会话成本失控 |
| **P2** | [#87136](https://github.com/openclaw/openclaw/issues/87136) 压缩绝对阈值跨模型失效 | 配置 | 🟡 开放 | ❌ 无 | DeepSeek 1M vs GLM-5.1 200K 上下文窗口差异导致阈值百分比畸变 |

**关键信号**：6 月 7 日新建的 **#91212** 投递恢复时序问题与 **#90639** 压缩 safeguard 失效形成"**重启即丢消息 + 长会话必崩溃**"的组合风险，生产环境稳定性堪忧。

---

## 6. 功能请求与路线图信号

| Issue/PR | 功能方向 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#86881](https://github.com/openclaw/openclaw/issues/86881) Gateway-lite 无 AI  harness 模式 | **边缘部署轻量化** | ⭐⭐⭐⭐ 高 | 与 #90101 "运行时自上下文" PR 方向一致，企业确定性部署刚需 |
| [#90916](https://github.com/openclaw/openclaw/issues/90916) 主题会话家族 | **多上下文隔离** | ⭐⭐⭐ 中 | 产品决策标签阻塞，但 #78441 subagent toolsAllow 已铺垫代理间隔离机制 |
| [#45501](https://github.com/openclaw/openclaw/issues/45501) 可配置会话重置提示 | **运营可定制性** | ⭐⭐⭐ 中 | 硬编码文本阻碍品牌化部署，改动面小 |
| [#40215](https://github.com/openclaw/openclaw/issues/40215) 累积上下文用量显示 | **可观测性** | ⭐⭐⭐⭐ 高 | #90328 模型选择器运行时暴露已证明 UI 元数据扩展可行 |
| [#33413](https://github.com/openclaw/openclaw/issues/33413) Slack 工具级进度状态 | **通道原生体验** | ⭐⭐ 低 | 需通道 API 深度集成，维护者未响应 |
| [#22358](https://github.com/openclaw/openclaw/issues/22358) 子代理完成后扩展钩子 | **生态扩展性** | ⭐⭐ 低 | 安全审查+产品决策双阻塞，架构争议大 |

**路线图信号**："运行时自感知"（#90101 PR）与"轻量化部署"（#86881）形成 **OpenClaw 从"AI 优先"向"基础设施优先"扩展** 的明确信号，可能预示项目定位从个人助手向企业代理中间件演进。

---

## 7. 用户反馈摘要

### 真实痛点（来自 Issue 评论与描述）

| 场景 | 痛点 | 来源 Issue |
|:---|:---|:---|
| **企业多代理部署** | "每个代理的 agentDir 配置完全失效，所有代理共享 workspace 密钥" | #29387 |
| **长会话运营** | "10 天后 /dreaming 生成的总结像存在主义练习，与真实工作无关" | #70005（已关闭，未解决根因） |
| **网关运维** | "重启后 13 个 24 小时前的 CLI 子代理任务自动执行，像僵尸复活" | #69778（已关闭） |
| **成本敏感用户** | "safeguard 模式让单会话涨到 200K tokens，没有通道内恢复，只有 /new" | #90639 |
| **飞书企业用户** | "消息 ID 带 reaction 后缀导致所有后续 API 400 错误" | #34528 |
| **WSL 开发者** | "exec 工具触发网关 SIGTERM 重启，Node 24 + WSL2 完全不可用" | #90428 |

### 满意度分化

- **满意**：WebUI 模型选择器运行时标签（#90328）、Telegram TTS 最终模式优化（#83988）
- **不满**：核心稳定性承诺与频繁回归之间的落差（#88312 "fixed by #85107" 再次回归）、配置系统"看似生效实则忽略"的沉默失败模式（#29387, #38657）

---

## 8. 待处理积压

### 长期未响应的高价值 Issue（>90 天，多标签阻塞）

| Issue | 创建 | 天数 | 阻塞标签 | 风险 |
|:---|:---|:---:|:---|:---|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) 工具调用文本泄漏 | 2026-02-24 | **104** | 安全审查、产品决策、源代码复现、修复 PR 形状清理 | **安全合规风险**：内部处理文本暴露可能违反数据分类策略 |
| [#29387](https://github.com/openclaw/openclaw/issues/29387) agentDir 引导忽略 | 2026-02-28 | **100** | 同上 + 维护者审查 | 多代理安全模型根基不稳 |
| [#22358](https://github.com/openclaw/openclaw/issues/22358) 子代理扩展钩子 | 2026-02-21 | **107** | 同上 | 生态扩展性承诺未兑现 |
| [#29736](https://github.com/openclaw/openclaw/issues/29736) exec 审批路径忽略状态根 | 2026-02-28 | **100** | 安全审查、产品决策 | 容器化/系统服务部署的配置漂移 |
| [#37634](https://github.com/openclaw/openclaw/issues/37634) sandbox workspaceAccess=none 只读 | 2026-03-06 | **94** | 维护者审查、产品决策、安全审查 | **安全与功能冲突**：完全隔离却不可写，违背沙箱设计意图 |

### 待合并关键 PR（就绪但阻塞）

| PR | 就绪时间 | 阻塞原因 | 价值 |
|:---|:---|:---|:---|
| [#78441](https://github.com/openclaw/openclaw/pull/78441) subagent toolsAllow 转发 | 5-06 | 维护者审查 | 多代理权限控制基础设施 |
| [#89045](https://github.com/openclaw/openclaw/pull/89045) 终端会话状态恢复 | 6-01 | 需 Telegram 可见证明 | 群聊会话失败自愈 |
| [#90101](https://github.com/openclaw/openclaw/pull/90101) 运行时自上下文配置 | 6-04 | 等待作者更新 | 下一代运行时/卸载/成本感知架构 |

---

**维护者行动建议**：
1. **紧急**：为 #91212 和 #90639 分配修复责任人，两者组合构成生产环境"重启丢消息→长会话崩溃"的致命循环
2. **本周**：清理 #25592/#29387 的跨团队阻塞（安全审查+产品决策），104 天无进展损害社区信任
3. **本月**：确立"通道适配器行为"与"核心引擎契约"的边界文档，减少边缘通道修复对核心架构的侵蚀

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析 | 2026-06-08

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态正经历**从"功能竞赛"向"稳定性还债"的关键转折**。头部项目（OpenClaw、ZeroClaw、IronClaw）日均 Issues/PR 双双突破 50+，但版本发布节奏放缓，核心维护者精力被 P0-P1 级稳定性债务严重挤压。企业级部署需求（多租户隔离、沙箱安全、配置即代码）从边缘诉求跃升为主流优先级，而 A2A 协议、分层记忆、视觉模型解耦等架构级功能成为下一代差异化战场。与此同时，尾部项目（LobsterAI、TinyClaw、ZeptoClaw）活跃度骤降，生态呈现明显的**"马太效应"加剧**态势。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 合并/关闭率 | 版本发布 | 健康度评估 |
|:---|:---|:---|:---|:---|:---|
| **OpenClaw** | 296 (177活跃/119关闭) | 500 (374待合并/126已合并关闭) | PR 25% | ❌ 无 | ⚠️ **高活跃高债务**——核心稳定性债务累积，P1 Bug 修复 PR 缺失 |
| **Hermes Agent** | 50 (49开放/1关闭) | 50 (48待合并/2关闭) | PR 4% | ❌ 无 | ⚠️ **审查瓶颈严重**——48 个待合并 PR 仅 2 条关闭，Desktop/Gateway 稳定性危机 |
| **IronClaw** | 50 (42活跃/8关闭) | 38 (22待合并/16已合并) | PR 42% | ❌ 无 | 🟡 **架构推进中**——Reborn Beta  blocker 清除 15-20%，4 个 P0 安全项待解 |
| **ZeroClaw** | 50 (33活跃/17关闭) | 50 (39待合并/11已合并) | PR 22% | 🔄 v0.8.0 准备中 | 🟢 **迭代稳健**——TUI 三连跳（主题/队列/模型切换），但 S0 数据丢失 Bug 长期未决 |
| **PicoClaw** | 21 (4活跃/17关闭) | 19 (7待合并/12已合并) | PR 63% | ✅ v0.2.9-nightly | 🟢 **修复密度最高**——81% Issue 关闭率，防御性编程系统性加固 |
| **NanoBot** | 7 (5活跃/2关闭) | 18 (14待合并/4已合并) | PR 22% | ❌ 无 | 🟢 **企业通道收尾**——飞书/WhatsApp 遗留问题闭环，bwrap 安全紧急响应 |
| **NanoClaw** | 3 (3活跃/0关闭) | 9 (6待合并/3关闭) | PR 33% | ❌ 无 | ⚠️ **安全漏洞暴露**——MCP 未鉴权（#2711）当日零响应，RBAC 债务显性化 |
| **CoPaw** | 5 (5活跃/0关闭) | 2 (2待合并/0关闭) | PR 0% | ❌ 无 | 🟡 **修稳压舱**——版本回归 Bug（#4989）未响应，ACP 协议审查中 |
| **Moltis** | 1 (1活跃/0关闭) | 3 (3待合并/0关闭) | PR 0% | ❌ 无 | 🟡 **质量加固期**——零合并但系统性风险管控，企业就绪前置 |
| **LobsterAI** | 15 (全部 stale 刷新) | 0 | 0% | ❌ 无 | 🔴 **实质停滞**——无 PR 合并，核心 Bug 全标记 stale，用户流失风险 |
| **NullClaw** | 0 | 0 | — | — | 🔴 **零活动** |
| **TinyClaw** | 0 | 0 | — | — | 🔴 **零活动** |
| **ZeptoClaw** | 0 | 0 | — | — | 🔴 **零活动** |

---

## 3. OpenClaw 在生态中的定位

### 规模与影响力
- **绝对体量领先**：296 Issues / 500 PRs 为今日全生态最高，但**健康度与规模倒挂**——25% PR 合并率远低于 PicoClaw（63%），"高活跃高债务"模式不可持续
- **社区讨论深度突出**：#25592 工具调用文本泄漏（104 天 27 评论）、#88838 SQLite 迁移（18 评论）等议题的技术深度远超同类，反映**核心开发者密度高**

### 技术路线差异
| 维度 | OpenClaw | 同类对比 |
|:---|:---|:---|
| **架构哲学** | "AI 优先"向"基础设施优先"试探（#90101 运行时自上下文 + #86881 Gateway-lite） | ZeroClaw 坚守"zerocode TUI 极致体验"，IronClaw 押注"Reborn 安全内核" |
| **通道策略** | 最广适配（Slack/iMessage/Telegram/Feishu/WebChat），但**边缘通道侵蚀核心稳定性** | NanoBot 企业通道精修（飞书话题群/WhatsApp LID），PicoClaw 轻量化渠道 |
| **状态管理** | 会话状态为核心抽象，但缺乏清晰边界契约，#91212 + #90639 形成"重启丢消息→长会话崩溃"致命组合 | ZeroClaw 已关闭 #4880 daemon 压缩问题，IronClaw 推进结构化工具观测（#4530） |
| **配置系统** | 碎片化严重（.env + JSON + flags），Config-as-Code 诉求强烈但无实现 | IronClaw #3036 已列为 EPIC，NanoClaw #2709 DB-backed 配置推进中 |

### 核心优势
- **生态位最完整**：个人助手→团队协作→企业网关的全场景覆盖
- **Plus 订阅商业化验证**：Codex 子服务（#88312, #91076）显示付费用户真实负载

### 关键风险
- **稳定性承诺透支**："fixed by #85107 再次回归"（#88312）损害信任，104 天 P1 安全 Issue（#25592）无修复损害社区凝聚力

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 紧迫程度 |
|:---|:---|:---|:---:|
| **A2A (Agent-to-Agent) 协议** | Hermes (#514, 19评论/18👍)、ZeroClaw (#3566, 7👍/高优先级)、OpenClaw（隐含于子代理隔离诉求） | 从"单 Agent 框架"升级为"Agent 联邦网络节点"，MCP 回答"用什么工具"，A2A 回答"找谁帮忙" | ⭐⭐⭐⭐⭐ |
| **分层记忆系统** | CoPaw (#4994, "主流 agent 标配焦虑")、OpenClaw（#70005 长会话总结质量差）、ZeroClaw（#5146 Skill 编译/上下文压缩） | 短期工作记忆→中期摘要记忆→长期知识库的三层架构，避免"10 天后总结像存在主义练习" | ⭐⭐⭐⭐⭐ |
| **视觉模型解耦** | CoPaw (#4992, "视觉中转站"模式：纯文本主模型 + 独立视觉模型) | 拒绝为单一视觉能力支付模型替换成本，deepseek-v4-flash + 按需视觉处理 | ⭐⭐⭐⭐☆ |
| **沙箱安全硬化** | NanoBot (#4236/#4237 bwrap Ubuntu 24.04 失效 + HOME 逃逸)、ZeroClaw (#5127 Bubblewrap 可配置、#6293 气隙执行)、PicoClaw (#3016 goroutine 泄漏防护) | 从"功能可用"到"安全可信"：命名空间限制、可写路径控制、网络访问边界 | ⭐⭐⭐⭐⭐ |
| **配置即代码 / 声明式运维** | IronClaw (#3036 EPIC)、OpenClaw（碎片化配置痛点）、ZeroClaw（#4647 配置分散导致回退难预测） | .env + JSON + flags → 单一 schema 化配置，支持 diff/审计/版本控制 | ⭐⭐⭐⭐☆ |
| **多租户隔离** | NanoClaw (#1626 Telegram 话题隔离，悬停 65 天)、OpenClaw (#29387 agentDir 失效)、Moltis (#1093 频道活动日志权限三级控制) | per-agent 目录/密钥/会话隔离，cron 作业资源边界，防止"单作业故障级联全集群" | ⭐⭐⭐⭐☆ |
| **Token 成本优化** | ZeroClaw (#5146, 400+ 行 SKILL.md 重复传输)、OpenClaw (#90639 safeguard 压缩 200K+ tokens 才触发)、CoPaw (#2121 重复输出浪费焦虑) | 预编译/缓存机制、上下文压力触发压缩（非固定计数）、输出去重 | ⭐⭐⭐⭐☆ |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户画像 | 技术架构关键差异 |
|:---|:---|:---|:---|
| **OpenClaw** | 最广通道适配 + 订阅商业化（Plus/Codex） | **技术早期采用者**→**团队协作用户**→**企业网关部署者** | TypeScript/Node 为主，网关-代理分离，会话状态为核心抽象，边缘通道适配器持续侵蚀核心 |
| **ZeroClaw** | zerocode TUI 极致体验 + 多提供者故障回退 | **开发者/CLI 重度用户**、自托管爱好者 | Rust 核心，schema-v3 提供者架构，强调"无代码配置"的声明式体验，TUI 三连跳（主题/队列/模型切换） |
| **IronClaw** | Reborn 安全内核 + WebUI v2 Beta + 企业合规 | **企业平台运维**、安全敏感型组织 | Rust 全栈，Hermetic 本地门禁（#3298），四层安全架构（approval lease/dispatch authority/seal/no-exposure），WASM 组件化演进中 |
| **Hermes Agent** | Desktop 原生客户端 + Gateway 多平台 + A2A 协议探索 | **个人生产力用户**（Desktop）、**中国市场团队**（微信多账号诉求 #29144） | Tauri/Electron Desktop，Python Gateway，插件化技能系统，但 Wayland/macOS 构建稳定性危机 |
| **PicoClaw** | 轻量部署 + 边缘设备（Android Termux/ARM SBC） | **硬件极客**、低资源环境部署者 | Go 语言，nightly 构建节奏，防御性编程密集（chengzhichao-xydt 单日 8 个 error-handling PR），Kagi 搜索等工具生态扩展 |
| **NanoBot** | 企业 IM 通道精修（飞书/WhatsApp）+ 沙箱安全 | **中国企业用户**、合规要求严格的组织 | Python，bwrap 沙箱，yu-xin-c 测试框架持续投入，企业级部署鲁棒性优先于功能扩张 |
| **CoPaw** | 千问生态深度集成 + ACP 协议扩展 | **中文开发者**、阿里云/通义千问用户 | Python，Qwen 模型优化，ACP（Agent Communication Protocol）作为差异化生态基础设施 |
| **NanoClaw** | 容器化多租户 + 账号轮换机制 | **企业 DevOps**、多模型策略部署者 | Node.js/TypeScript，DB-backed 容器配置（#2709），但 RBAC 漏洞（#2711）暴露安全架构缺口 |
| **Moltis** | 企业权限精细化 + 资源边界控制 | **B 端 SaaS 部署**、多团队组织 | 渐进式加固，三级日志权限（all/errors_only/off），工具结果持久化上限（6 路径覆盖） |
| **LobsterAI** | （功能停滞中）原网易有道产品化路径 | 普通消费者/轻度用户 | 产品化封装度高，但核心状态管理缺陷（#1500/#1502/#1506）全标记 stale，技术债务无人清偿 |

---

## 6. 社区热度与成熟度

### 快速迭代阶段（高活跃 + 高合并吞吐）
| 项目 | 特征 | 风险 |
|:---|:---|:---|
| **PicoClaw** | 81% Issue 关闭率，63% PR 合并率，防御性修复密集 | 功能节奏保守，nightly 不建议生产 |
| **NanoBot** | 飞书/WhatsApp 遗留问题闭环，bwrap 安全紧急响应 | Ubuntu 24.04 兼容性阻断新发行版部署 |

### 质量巩固阶段（高活跃 + 低合并吞吐 + 稳定性优先）
| 项目 | 特征 | 风险 |
|:---|:---|:---|
| **OpenClaw** | 500 PRs 但核心 P1 Bug 无修复 PR，"救火"与"打磨"精力分散 | 稳定性债务累积至临界点，"重启丢消息+长会话崩溃"组合风险 |
| **ZeroClaw** | v0.8.0 发布准备，TUI 体验三连跳，但 4 个 XL PR 自管合并 | S0 数据丢失 Bug（#4627）长期未决，集成瓶颈可能延迟交付 |
| **IronClaw** | Reborn Beta blocker 系统性清除，安全架构四层推进 | 4 个 P0 安全项 40 天无关闭，设计已定实现未全 |
| **Hermes Agent** | A2A 协议 3 个月持续讨论，Desktop 睡眠恢复等体验修复 | 审查瓶颈极端（4% 合并率），48 待合并 PR vs 2 关闭 |

### 停滞/衰退阶段
| 项目 | 特征 | 预后 |
|:---|:---|:---|
| **CoPaw** | 版本回归 Bug 未响应，ACP 审查 4 天无结论 | 记忆系统落后竞品，用户流失风险 |
| **Moltis** | 零合并，仅 1 条社区 Issue | 企业就绪前置但社区参与度低，需激活反馈渠道 |
| **NanoClaw** | 安全漏洞当日零响应，65 天 PR 悬停 | RBAC 债务显性化，生产就绪性缺口 |
| **LobsterAI** | 无 PR 合并，全部 stale 刷新，用户对比 OpenClaw | 实质死亡螺旋，建议评估归档或寻找接盘方 |
| **NullClaw/TinyClaw/ZeptoClaw** | 零活动 | 已实质弃用 |

---

## 7. 值得关注的趋势信号

### 信号一：从"AI 能力"到"基础设施韧性"的价值迁移
> **数据支撑**：OpenClaw #90101"运行时自上下文"、IronClaw #3036"Config-as-Code"、ZeroClaw #6293"气隙执行模式"、NanoBot bwrap 紧急修复——**安全/可观测性/可运维性**的 PR 占比从 Q1 的 ~15% 跃升至 Q2 的 ~35%。

**对开发者的价值**：个人项目可继续追逐 LLM 新能力，但**企业级采用的核心决策因素已从"功能多寡"转向"崩溃时能否优雅降级"**。建议优先投资：结构化日志、配置 schema 化、沙箱边界测试、故障注入框架。

### 信号二："模型解耦"成为成本优化核心策略
> **数据支撑**：CoPaw #4992"视觉中转站"（纯文本主模型 + 独立视觉模型）、ZeroClaw #5146"Skill 编译降低 Token"、OpenClaw #90639"safeguard 压缩失效"——社区明确拒绝"为单一能力支付全量模型溢价"。

**对开发者的价值**：架构设计需预留**模型路由抽象层**，支持 per-tool/per-task 的模型选择，而非全局单一模型。DeepSeek/Kimi/Qwen 等性价比模型的接入优先级应高于 GPT-5 的追逐。

### 信号三：A2A 协议从"讨论"进入"卡位"窗口期
> **数据支撑**：Hermes #514（3 个月 19 评论/18👍）、ZeroClaw #3566（已接受高优先级但进展缓慢）、OpenClaw 子代理隔离机制（#78441 toolsAllow）为 A2A 铺垫——**尚无项目实现完整 A2A，但社区共识已形成**。

**对开发者的价值**：MCP 解决"工具发现"，A2A 解决"Agent 发现"。建议在新项目中预留**能力广播（capability advertisement）**和**任务委托（task delegation）**的接口，避免未来重构成本。Google A2A 规范（Apache 2.0）可作为设计参考，但需警惕标准分裂风险。

### 信号四：通道适配器从"扩展优势"变为"架构负债"
> **数据支撑**：OpenClaw "边缘通道复杂化 > 核心引擎稳定性"（Slack/iMessage/Telegram/Feishu 特殊行为持续暴露架构漏洞）、NanoBot 飞书话题群 3 个月修复、Hermes 微信多账号结构性冲突——**每新增一个通道，核心状态管理契约的维护成本指数上升**。

**对开发者的价值**：通道适配应**严格隔离于核心引擎**，通过清晰的消息格式契约（如 IronClaw #4530 结构化工具观测）而非特殊 case 堆叠。建议评估：是否所有通道都值得原生支持，抑或通过 Webhook/标准化 API 交由社区扩展。

### 信号五：开源项目的"审查带宽"成为比"贡献数量"更稀缺的资源
> **数据支撑**：Hermes 4% PR 合并率（48 待合并/2 关闭）、OpenClaw 374 待合并 PR、IronClaw 22 待合并 PR 含 XL 级——**贡献者增长速度超过维护者审查能力成为普遍瓶颈**。

**对开发者的价值**：作为贡献者，**"小步快跑、完整测试、清晰上下文"**的 PR 更易获合并；作为维护者，需建立**自动化门禁**（如 IronClaw #3298 Hermetic 本地门禁）和**领域专家轮值**机制，避免核心人员成为单点瓶颈。

---

*报告

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-06-08

> **项目**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot)  
> **日期**: 2026-06-08  
> **分析师**: AI 智能体开源项目分析师

---

## 1. 今日速览

NanoBot 今日保持**高活跃度**，24小时内18个PR更新（14个待审）、7个Issue动态（5个活跃）。社区聚焦三大主线：**飞书生态收尾**（话题群回复、提及解析长期PR终合并）、**沙箱安全加固**（bwrap双Bug连报连修）、**核心会话稳定性**（孤儿工具结果丢弃、空推理内容保留等边界情况修复）。测试基础设施持续投入，yu-xin-c 贡献多个测试框架PR。整体健康度良好，但bwrap沙箱在Ubuntu 24.04的兼容性问题需优先关注。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 状态 |
|:---|:---|:---|:---|
| [#2885](https://github.com/HKUDS/nanobot/pull/2885) | xwind | **飞书通道最终修复**：解析提及数据（`@_user_n` → `@name (open_id)`），新增精准@提及检测；确保access token初始化。关闭关联Issue #2256 | ✅ 已合并 |
| [#4227](https://github.com/HKUDS/nanobot/pull/4227) | michaelxer | **修复自定义Provider空推理内容丢失**：保留`reasoning_content=""`而非强制转为`None`，解决DeepSeek/Kimi等模型的显式空推理场景 | ✅ 已合并 |
| [#4240](https://github.com/HKUDS/nanobot/pull/4240) | Re-bin | **WebUI ANSI渲染**（实验性）：代码块内支持ANSI颜色解析（256色/RGB/样式），复制时自动剥离控制序列。因实现策略调整关闭，功能可能由后续PR承接 | ❌ 已关闭 |
| [#2663](https://github.com/HKUDS/nanobot/pull/2663) | danielphang | **WhatsApp LID提及修复**：规范化JID处理群组提及，支持滑动回复触发mention策略 | ✅ 已合并 |

**里程碑意义**：飞书话题群回复问题（#2256，历时近3个月）和WhatsApp LID问题（#2663，历时2个月）两大**跨月遗留Issue今日闭环**，企业IM通道稳定性显著改善。

---

## 4. 社区热点

| 热度指标 | Issue/PR | 分析 |
|:---|:---|:---|
| **评论最多（4条）** | [#2256](https://github.com/HKUDS/nanobot/issues/2256) 飞书话题群bot回复 | 企业用户强需求：话题群（thread）场景下bot回复必须挂在话题内而非主串，否则信息混乱。最终由 #2885 解决，体现**企业协作场景对通道精细行为的严苛要求** |
| **紧急连报（2个Issue+1个PR同日）** | [#4236](https://github.com/HKUDS/nanobot/issues/4236) / [#4237](https://github.com/HKUDS/nanobot/issues/4237) / [#4239](https://github.com/HKUDS/nanobot/pull/4239) bwrap沙箱问题 | Ubuntu 24.04 LTS默认限制非特权用户命名空间，导致bwrap静默失败；同时HOME环境变量未重置导致工具写入失败。**Linux桌面/服务器部署的两大阻断性问题**，primit1v0 当日报修并提交修复 |

**诉求洞察**：社区正从"功能可用"向**企业级部署鲁棒性**演进——沙箱安全、多租户隔离、版本可观测性成为新焦点。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | Issue/PR | 状态 | 影响范围 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | bwrap沙箱在Ubuntu 24.04因用户命名空间限制完全失效 | [#4236](https://github.com/HKUDS/nanobot/issues/4236) | 🔄 待修复 | Linux新发行版部署阻断 |
| 🔴 **高** | bwrap沙箱HOME未重置，工具写入实际指向宿主机（沙箱逃逸风险） | [#4237](https://github.com/HKUDS/nanobot/issues/4237) | ✅ [PR #4239](https://github.com/HKUDS/nanobot/pull/4239) 待审 | 沙箱安全边界失效 |
| 🟡 **中** | `find_legal_message_start`丢弃孤儿工具结果后的所有消息 | [#4203](https://github.com/HKUDS/nanobot/issues/4203) | ✅ [PR #4219](https://github.com/HKUDS/nanobot/pull/4219) 待审 | 长会话历史丢失 |
| 🟡 **中** | OpenAI兼容API空响应重试导致用户消息重复写入 | [#4234](https://github.com/HKUDS/nanobot/pull/4234) | 🔄 待审 | API用户会话污染 |
| 🟢 **低** | 自定义Provider空字符串`reasoning_content`被转为`None` | [#4105](https://github.com/HKUDS/nanobot/issues/4105) | ✅ 已修复 | DeepSeek/Kimi用户推理链显示 |

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 可行性评估 | 版本预测 |
|:---|:---|:---|:---|
| **WebUI显示版本号+更新检测** | [#4233](https://github.com/HKUDS/nanobot/issues/4233) / [#4235](https://github.com/HKUDS/nanobot/pull/4235) | ⭐⭐⭐⭐⭐ 高 — PR已提交，含PyPI缓存检查，实现完整 | **下一版本** |
| **spawn工具支持子Agent模型覆盖** | [#4231](https://github.com/HKUDS/nanobot/issues/4231) | ⭐⭐⭐⭐☆ 中高 — 参数扩展，架构清晰，社区多次提及 | **下一版本** |
| **语音输入全局共享（非通道独占）** | [#4232](https://github.com/HKUDS/nanobot/pull/4232) | ⭐⭐⭐⭐☆ 中高 — PR已提交，重构配置层级，WebUI+桌面端受益 | **下一版本** |
| **微压缩按上下文压力触发（非固定计数）** | [#4238](https://github.com/HKUDS/nanobot/pull/4238) | ⭐⭐⭐☆☆ 中 — 架构重构（提取ContextGovernor），需充分测试 | **下下版本** |
| **工具调用验证严格化** | [#4190](https://github.com/HKUDS/nanobot/pull/4190) | ⭐⭐⭐☆☆ 中 — 行为变更可能影响依赖宽松调用的用户 | 需评估兼容性 |

---

## 7. 用户反馈摘要

> 从Issue/PR描述中提炼的真实声音

| 场景 | 痛点/诉求 | 情绪 |
|:---|:---|:---|
| **飞书企业用户** | "话题群里bot回复散落在主串，信息完全没法跟踪" | 😤 → 😊（已解决） |
| **Linux运维部署** | "Ubuntu 24.04开bwrap直接静默失败，排查了半天" | 😤（紧急） |
| **API集成开发者** | "一个请求进去，历史里冒出两条用户消息，完全不可预期" | 😠 |
| **WebUI日常用户** | "连自己在跑哪个版本都不知道，/status又难找" | 🤷 |
| **多模型策略用户** | "子Agent必须用轻量模型，现在只能全局改，太笨了" | 😤 |
| **安全敏感用户** | "沙箱里$HOME指向宿主机，那沙箱意义何在？" | 😱 |

**满意度上升区**：飞书/WhatsApp企业通道修复、自定义Provider推理链完整性。  
**焦虑集中区**：Linux新发行版兼容性、沙箱安全边界可信度、版本可观测性。

---

## 8. 待处理积压

> 长期活跃但未闭环的重要项，提醒维护者关注

| 时长 | PR/Issue | 风险说明 |
|:---|:---|:---|
| **~2个月** | [#3982](https://github.com/HKUDS/nanobot/pull/3982) 脚本化Agent Runner测试框架 | 测试基础设施债务，阻塞核心逻辑重构信心 |
| **~2个月** | [#3983](https://github.com/HKUDS/nanobot/pull/3983) Runner阻塞工具调用完成原因覆盖 | 同上，安全关键路径缺乏回归 |
| **~1.5个月** | [#4053](https://github.com/HKUDS/nanobot/pull/4053) 只读根目录排除写入路径 | 安全边界PR，与当前bwrap修复形成互补 |
| **~1个月** | [#4119](https://github.com/HKUDS/nanobot/pull/4119) 阻断相对符号链接工作区逃逸 | 与#4053同属文件系统沙箱硬化，建议打包审查 |
| **~1个月** | [#4123](https://github.com/HKUDS/nanobot/pull/4123) MCP SSRF URL前置校验 | MCP生态安全基础，随MCP采用率上升优先级增高 |

---

**日报生成完毕** | 数据来源：GitHub API 2026-06-08 snapshot

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-06-08

---

## 1. 今日速览

Hermes Agent 今日呈现**极高活跃度**，24小时内 Issues 与 PR 各更新 50 条，形成 98:2 的开放/关闭比，显示社区处于密集开发期。核心特征为：**Desktop 客户端稳定性问题集中爆发**（Wayland 闪烁、睡眠恢复、构建签名等），**Gateway 多平台适配持续承压**（微信多账号、Discord 超时、WhatsApp 路由），同时 **A2A 协议支持**成为长期架构讨论焦点。PR 侧以修复为主，WolframRavenwolf 与 liuhao1024 贡献突出，但合并吞吐量偏低（仅 2 条关闭），代码审查瓶颈显现。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭 PR（2 条）

| PR | 作者 | 说明 | 链接 |
|:---|:---|:---|:---|
| #41350 | teknium1 | **Desktop 睡眠/唤醒恢复重构**：将 #40135 的 555 行方案精简为 63 行，解决远程后端 stale 状态导致的"Starting Hermes…"卡死问题。根因诊断归功于社区成员 @AlchemistChaos | [PR #41350](https://github.com/NousResearch/hermes-agent/pull/41350) |
| #41595 | mnajafian-nv | **嵌套插件列表对齐**：修复 `hermes plugins list` 对 `observability/nemo_relay` 等嵌套 bundle 插件的识别，与运行时加载器行为保持一致 | [PR #41595](https://github.com/NousResearch/hermes-agent/pull/41595) |

### 关键推进方向

- **Desktop 可靠性**：睡眠恢复、WebSocket 探测超时（#41570 待合并）、资源路径解析（#41629）形成修复矩阵
- **Gateway 配置隔离**：`--profile` 标志被忽略问题（#41355）与 TUI worker 子进程传递（#41526）同步修复
- **MCP 生态就绪**：发现超时从 0.75s 延长至 3s（#41630），解决 HTTP-based MCP 服务器的竞态条件

---

## 4. 社区热点

### 🔥 最高讨论：A2A 协议支持（19 评论，18 👍）

**[#514 - Feature: A2A (Agent-to-Agent) Protocol Support](https://github.com/NousResearch/hermes-agent/issues/514)**

| 维度 | 内容 |
|:---|:---|
| 核心诉求 | 将 Google A2A 协议（Linux Foundation Apache 2.0）作为 MCP 的互补层——MCP 回答"用什么工具"，A2A 回答"找谁帮忙" |
| 技术范围 | 远程 Agent 发现、能力广播、任务委托、安全握手、多轮协商 |
| 社区信号 | 自 3 月创建以来持续活跃，今日仍有更新；18 👍 显示强烈需求 |
| 战略意义 | 若实现，Hermes 将从"单 Agent 框架"升级为"Agent 联邦网络节点"，与 AutoGen、CrewAI 等形成差异化 |

**其他高关注议题：**

| Issue | 评论 | 核心矛盾 | 链接 |
|:---|:---|:---|:---|
| #41092 Desktop 辅助模型切换残留 base_url | 3 | 配置状态机不完整，自定义/OpenRouter 端点与内置端点切换时 base_url 污染 | [Issue #41092](https://github.com/NousResearch/hermes-agent/issues/41092) |
| #37997 Desktop 聊天滚动条跳跃（已关闭）| 3 | TUI 渲染引擎的定时器/状态同步缺陷，6月3日报告后 4 日内修复 | [Issue #37997](https://github.com/NousResearch/hermes-agent/issues/37997) |
| #29144 微信多账号企业部署阻塞 | 2 | 产品设计假设（单用户）与中国市场现实（团队多成员）的结构性冲突 | [Issue #29144](https://github.com/NousResearch/hermes-agent/issues/29144) |

---

## 5. Bug 与稳定性

### P1（严重，需立即处理）

| Issue | 描述 | Fix PR 状态 | 链接 |
|:---|:---|:---|:---|
| #38798 | **配置迁移 v25→v26 静默摧毁所有工具**：`platform_toolsets` 中 `hermes-cli` 被错误重写为 `hermes`，工具全灭且无错误提示 | ❌ 无 | [Issue #38798](https://github.com/NousResearch/hermes-agent/issues/38798) |
| #41355 | **Gateway 完全忽略 `--profile` 标志**：加载默认配置而非指定 profile，多环境部署失效 | ❌ 无 | [Issue #41355](https://github.com/NousResearch/hermes-agent/issues/41355) |
| #41311 | **Kanban 调度器注入已归档 skill 导致 worker 崩溃**：`rglob` 匹配归档副本，loader 拒绝加载，调度-加载一致性断裂 | ❌ 无 | [Issue #41311](https://github.com/NousResearch/hermes-agent/issues/41311) |

### P2（高优先级）

| Issue | 描述 | Fix PR 状态 | 链接 |
|:---|:---|:---|:---|
| #41457 | **Desktop/ACP 中 shell hooks 静默失效**：`pre_tool_call` 拦截逻辑未注册，安全策略被绕过 | ❌ 无 | [Issue #41457](https://github.com/NousResearch/hermes-agent/issues/41457) |
| #41534 | **managed_uv 单路径硬编码无回退**：`$HERMES_HOME/bin/uv` 损坏即瘫痪，忽略系统 `uv` | ❌ 无 | [Issue #41534](https://github.com/NousResearch/hermes-agent/issues/41534) |
| #41517 | **Desktop chat worker 丢失选中 profile 回退默认**：与 #41355 同源，UI 显示与实际执行分离 | ✅ #41526 待合并 | [Issue #41517](https://github.com/NousResearch/hermes-agent/issues/41517) |
| #41296 | **Bedrock 区域推理配置文件切换失败**：`_bedrock_region` 未设置，`jp.*`/`eu.*`/`apac.*` 模型标识符无效 | ❌ 无 | [Issue #41296](https://github.com/NousResearch/hermes-agent/issues/41296) |
| #41321 | **Bedrock mantle GPT-5.x 输出重复累积**：`output_items` 未去重，5957 字符膨胀至 9500+ | ❌ 无 | [Issue #41321](https://github.com/NousResearch/hermes-agent/issues/41321) |
| #41331 | **Email IMAP/SMTP 登录用户硬编码为 EMAIL_ADDRESS**：自定义域名场景（如 Google Workspace 别名）断裂 | ❌ 无 | [Issue #41331](https://github.com/NousResearch/hermes-agent/issues/41331) |
| #41366 | **Telegram 视频消息缓存未暴露给 AI**：仅接收文本 caption，视觉能力浪费 | ❌ 无 | [Issue #41366](https://github.com/NousResearch/hermes-agent/issues/41366) |
| #41327 | **Desktop dashboard HTTP 404**：`dist/` 打包进 `app.asar` 未解压，静态路由不可达 | ❌ 无 | [Issue #41327](https://github.com/NousResearch/hermes-agent/issues/41327) |
| #41407 | **WhatsApp group/LID JID 静默回退 home channel**：目标解析失败无报错，消息发往错误会话 | ❌ 无 | [Issue #41407](https://github.com/NousResearch/hermes-agent/issues/41407) |
| #41377 | **Cron 模型回退完全静默**：404 工具不支持时无审计记录、无用户披露，合规风险 | ❌ 无 | [Issue #41377](https://github.com/NousResearch/hermes-agent/issues/41377) |
| #41392 | **`hermes cron list` 遇 `deliver: null` 崩溃**：TypeError，未防御空值 | ❌ 无 | [Issue #41392](https://github.com/NousResearch/hermes-agent/issues/41392) |

### P3（中等优先级，含回归）

| Issue | 描述 | Fix PR 状态 | 链接 |
|:---|:---|:---|:---|
| #41518 | **macOS 自动安装到 /Applications + Dock 固定被 OAuth 重构误删**：commit `9d07927a2` 回退 `746618217` | ❌ 无 | [Issue #41518](https://github.com/NousResearch/hermes-agent/issues/41518) |
| #38015 | **Linux Wayland 原生会话聊天闪烁**：Electron 渲染周期与 Wayland 合成器冲突，无已知 workaround | ❌ 无 | [Issue #38015](https://github.com/NousResearch/hermes-agent/issues/38015) |
| #41092 | 辅助模型切换 base_url 残留 | ❌ 无 | [Issue #41092](https://github.com/NousResearch/hermes-agent/issues/41092) |
| #41499 | Apple 代码签名身份导致本地构建失败 | ❌ 无 | [Issue #41499](https://github.com/NousResearch/hermes-agent/issues/41499) |

---

## 6. 功能请求与路线图信号

### 架构级需求

| Issue/PR | 内容 | 纳入可能性 | 链接 |
|:---|:---|:---|:---|
| #514 A2A 协议支持 | Agent 联邦网络基础设施 | ⭐⭐⭐⭐⭐ 战略级，3个月持续讨论 | [Issue #514](https://github.com/NousResearch/hermes-agent/issues/514) |
| #41190 统一插件路由选择器 | 每轮 provider/model 覆盖的单一钩子 | ⭐⭐⭐⭐☆ 插件生态瓶颈，已有 PR 方向 | [Issue #41190](https://github.com/NousResearch/hermes-agent/issues/41190) |
| #38602 Desktop 纯客户端安装 | 瘦客户端连接远程 Hermes | ⭐⭐⭐⭐☆ 企业部署刚需，8 👍 | [Issue #38602](https://github.com/NousResearch/hermes-agent/issues/38602) |
| #41553 Hermes Workspace 官方集成 | 社区工具纳入官方 Desktop | ⭐⭐⭐☆☆ 生态整合信号 | [Issue #41553](https://github.com/NousResearch/hermes-agent/issues/41553) |
| #41554 `delegated_role` 字段 | 子 Agent 归因追踪 | ⭐⭐⭐☆☆ 与 #514 A2A 协同 | [Issue #41554](https://github.com/NousResearch/hermes-agent/issues/41554) |

### 今日新增 PR 中的功能信号

| PR | 功能 | 路线图关联 | 链接 |
|:---|:---|:---|:---|
| #41624 `session:compress` 生命周期事件 | 外部集成可观测性 | 企业监控/审计基础设施 | [PR #41624](https://github.com/NousResearch/hermes-agent/pull/41624) |
| #41626 MoA 专家路由 provider 感知 | 混合专家系统生产化 | 多模型编排架构 | [PR #41626](https://github.com/NousResearch/hermes-agent/pull/41626) |
| #41632 `inject_image` 工具 | 安全的多模态输入 | 视觉能力扩展 | [PR #41632](https://github.com/NousResearch/hermes-agent/pull/41632) |
| #41633 Gateway 消息时间戳 | LLM 时间感知上下文 | 时序推理增强 | [PR #41633](https://github.com/NousResearch/hermes-agent/pull/41633) |
| #41574 熵守卫 pre-tool-use hook | 工具调用安全拦截 | 安全/合规框架 | [PR #41574](https://github.com/NousResearch/hermes-agent/pull/41574) |

---

## 7. 用户反馈摘要

### 痛点矩阵

| 场景 | 具体表现 | 涉及 Issue |
|:---|:---|:---|
| **企业部署** | 微信单账号限制阻断团队协作；Discord 30s 超时 Windows 不可用；profile 隔离失效 | #29144, #41539, #41355, #41517 |
| **桌面体验** | Wayland 闪烁无法工作、睡眠后卡死、滚动条跳跃、构建失败（签名/404） | #38015, #41350, #37997, #41499, #41327 |
| **配置可靠性** | 迁移静默毁配置、模型切换残留 URL、cron 空值崩溃、回退完全不可见 | #38798, #41092, #41392, #41377 |
| **多平台适配** | Bedrock 区域模型、Email 域名别名、WhatsApp JID、Telegram 视频，各平台边缘 case 未覆盖 | #41296, #41331, #41407, #41366 |
| **Agent 智能** | 重复工具调用死循环、无进展检测缺失、错误分类粗糙 | #41490, #41313, #41314 |

### 满意度信号

- **积极**：社区成员 @AlchemistChaos 参与根因诊断，显示技术社区深度；teknium1 快速重构精简方案
- **消极**："silently kills all tools"、"no workaround found"、"no disclosure of substitution" 等表述频繁出现，反映**错误处理透明度**为系统性短板

---

## 8. 待处理积压

### 长期高价值 Issue 提醒

| Issue | 创建时间 | 最后更新 | 风险 | 链接 |
|:---|:---|:---|:---|:---|
| #514 A2A 协议支持 | 2026-03-06 | **今日** | 3个月未进入实现阶段，竞争对手可能抢先 | [Issue #514](https://github.com/NousResearch/hermes-agent/issues/514) |
| #29144 微信多账号 | 2026-05-20 | 2026-06-07 | 中国市场准入硬阻塞，架构假设需重新设计 | [Issue #29144](https://github.com/NousResearch/hermes-agent/issues/29144) |
| #38602 Desktop 瘦客户端 | 2026-06-04 | 2026-06-07 | 企业部署刚需，与当前"本地启动"假设冲突 | [Issue #38602](https://github.com/NousResearch/hermes-agent/issues/38602) |

### 审查瓶颈

- **48 个待合并 PR** 仅 2 个关闭，合并率 4%。WolframRavenwolf 单日提交 6 PR（#41624-#41633），liuhao1024 提交 3 PR，需关注核心维护者审查带宽是否匹配社区贡献速度。

---

*日报生成时间：2026-06-08 | 数据来源：NousResearch/hermes-agent GitHub 公开数据*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-06-08

> **项目**: [sipeed/picoclaw](https://github.com/sipeed/picoclaw) | **日期**: 2026-06-08 | **分析周期**: 过去24小时

---

## 1. 今日速览

PicoClaw 今日展现**极高维护活跃度**：21 条 Issues 中 17 条被关闭（81% 关闭率），19 条 PR 中 12 条已合并/关闭（63% 吞吐率）。核心维护团队（尤其 `chengzhichao-xydt`）集中推进**防御性编程加固**，单日提交 8 个 error-handling 相关 PR，系统性修复类型断言、资源关闭、错误丢弃等隐患。同时发布 v0.2.9-nightly 构建，表明版本迭代节奏正常。社区侧出现 Matrix `allow_from` 解析缺陷的连锁报告（3 个关联 Issue），以及 Telegram 位置消息支持的新需求，渠道兼容性仍是用户关注焦点。

---

## 2. 版本发布

### [v0.2.9-nightly.20260607.7d2b0c2a](https://github.com/sipeed/picoclaw/compare/v0.2.9...main) — Nightly Build

| 属性 | 详情 |
|:---|:---|
| **构建类型** | 自动化夜间构建（可能不稳定） |
| **基线对比** | `v0.2.9...main` |
| **主要变更方向** | 基于 PR 合并记录，main 分支累积了大量防御性修复（error handling、类型安全、资源泄漏防护） |

⚠️ **迁移注意事项**：
- Nightly 构建**不建议生产环境直接使用**
- 若从 v0.2.8 升级，需关注 Matrix `allow_from` 配置格式变更（见 [PR #3045](https://github.com/sipeed/picoclaw/pull/3045)）
- Anthropic 默认模型 ID 已从 `claude-sonnet-4.6` 修正为 `claude-sonnet-4-6`（[PR #3036](https://github.com/sipeed/picoclaw/pull/3036)），旧配置可能 404

---

## 3. 项目进展

### 已合并/关闭的关键 PR（12 条）

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#3036](https://github.com/sipeed/picoclaw/pull/3036) | SutraHsing | **修正 Anthropic 默认模型 ID**：`claude-sonnet-4.6` → `claude-sonnet-4-6`，保留用户可见别名 | 消除新用户首次安装的 404 崩溃，降低 onboarding 流失 |
| [#3037](https://github.com/sipeed/picoclaw/pull/3037) | jp39 | **新增 Kagi 搜索原生提供商**：集成官方 Go SDK，支持 `tools.web` / `web_search` | 扩展搜索工具生态，对标现有 DuckDuckGo/Google 提供商 |
| [#3016](https://github.com/sipeed/picoclaw/pull/3016) | chengzhichao-xydt | **修复 goroutine 泄漏**：`Reload()` 时取消旧 `dispatchTask`，防护 `nil ts.agent` | 解决长运行实例的内存泄漏，提升守护进程稳定性 |
| [#3033](https://github.com/sipeed/picoclaw/pull/3033)-[#3035](https://github.com/sipeed/picoclaw/pull/3035) | chengzhichao-xydt | **资源关闭错误检查三部曲**：媒体下载、文件拷贝、飞书资源下载后显式 `Close()` 错误处理 | 防止静默数据截断（磁盘满/I/O 错误），数据完整性提升 |
| [#3040](https://github.com/sipeed/picoclaw/pull/3040) | chengzhichao-xydt | **singleflight 类型断言防护**：`runCachedModelProbe` 增加 `ok` 检查 | 消除缓存边缘场景的 panic 风险 |
| [#3042](https://github.com/sipeed/picoclaw/pull/3042) | chengzhichao-xydt | **`os.Getwd()` 错误处理**：Evolution 技能召回与草稿生成 | 修复工作目录解析失败时的级联错误 |
| [#3046](https://github.com/sipeed/picoclaw/pull/3046) | chengzhichao-xydt | **Agent 启动信息类型断言防护** | 提升配置变更后的运行时韧性 |
| [#2902](https://github.com/sipeed/picoclaw/pull/2902) | puneetdixit200 | **Android Termux 部署文档** | 拓展边缘设备部署场景（ARM64 Android） |
| [#2936](https://github.com/sipeed/picoclaw/pull/2936) | maxmilian | **技能二进制依赖检查**：`metadata.nanobot.requires.bins` PATH 解析，缺失则跳过 | 防止 LLM 调用不可执行技能（如 `$10 VPS` 无浏览器场景） |
| [#2906](https://github.com/sipeed/picoclaw/pull/2906) | SiYue-ZO | **消息总线背压处理**：有界等待替代无界阻塞，健康状态可见性 | 高负载下防止 OOM，提升可观测性 |

**整体评估**：今日合并以 **"稳定性基建"** 为主轴，无重大功能突破，但系统性消除了 10+ 个生产环境隐患。项目健康度评分：**A-**（修复密度高，但新功能节奏偏保守）。

---

## 4. 社区热点

### 🔥 讨论最活跃：Codex OAuth 空响应问题（8 评论）
- **Issue**: [#2674](https://github.com/sipeed/picoclaw/issues/2674) | [CLOSED]
- **作者**: geekgonecrazy | 👍: 4
- **核心矛盾**: OpenAI Codex OAuth 流式返回 `response.output_item.done` 时，PicoClaw 误报 "empty response"
- **背后诉求**: 用户希望 PicoClaw 作为**通用 AI 网关**兼容 OpenAI 非标准流式协议，而非仅支持官方 API 格式。这反映了社区对"ChatGPT 逆向/非官方端点"的强烈需求，但维护团队倾向于关闭为 provider-specific hack。

### 📱 文档热点：Android Termux 指南（8 评论）
- **Issue**: [#286](https://github.com/sipeed/picoclaw/issues/286) | [CLOSED]
- **作者**: Zepan | 👍: 2
- **信号**: 边缘设备（手机、ARM SBC）运行 AI Agent 的场景正在增长，文档缺口被快速填补。

### ⚠️ 连锁缺陷：Matrix `allow_from` 冒号解析（3 个 Issue）
- **Issue**: [#3044](https://github.com/sipeed/picoclaw/issues/3044) [OPEN] / [#3038](https://github.com/sipeed/picoclaw/issues/3038) [#3039](https://github.com/sipeed/picoclaw/issues/3039) [CLOSED, PLEASE DELETE]
- **作者**: weissfl
- **社区行为模式**: 用户因首次报告格式问题（空标题/内容仅"."）连续开 3 个 Issue，反映**新手 Issue 模板引导不足**和**紧急缺陷时的焦虑重复报告**。

---

## 5. Bug 与稳定性

| 严重度 | 问题 | Issue/PR | 状态 | 影响范围 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | Matrix `allow_from` 冒号解析错误：标准 MXID (`@user:domain`) 被拆分为 `platform="@user"`, `id="domain"`，导致消息静默丢弃 | [#3044](https://github.com/sipeed/picoclaw/issues/3044) | **Fix PR 待合并** [#3045](https://github.com/sipeed/picoclaw/pull/3045) | Matrix 渠道白名单功能完全失效 |
| 🔴 **高** | `mcp add` 全局标志误解析为位置参数：`--no-color` 等根级标志被当作 server name，导致 HTTP/SSE 添加失败、STDIO 服务器静默重命名 | [#3041](https://github.com/sipeed/picoclaw/issues/3041) | **Fix PR 待合并** [#3048](https://github.com/sipeed/picoclaw/pull/3048) | MCP 工具注册可靠性 |
| 🟡 **中** | Telegram 位置消息完全无响应：`message.location` 未进入 agent pipeline | [#3049](https://github.com/sipeed/picoclaw/issues/3049) | **无 Fix PR** | 地理位置触发场景（LBS 服务、物流跟踪） |
| 🟡 **中** | Agent reload 后 goroutine 泄漏 + panic 清理不稳定 | [#2904](https://github.com/sipeed/picoclaw/pull/2904) | **Stale PR 待审查** | 长运行实例稳定性 |
| 🟢 **低** | 多处类型断言无 `ok` 检查、资源 `Close()` 错误静默丢弃、空指针解引用 | [#3018](https://github.com/sipeed/picoclaw/pull/3018) 等 | **已合并** | 防御性加固，预防未来 panic |

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 可行性评估 | 版本预测 |
|:---|:---|:---|:---|
| **OmniRoute 提供商接入** | [#2978](https://github.com/sipeed/picoclaw/issues/2978) | 用户请求 + 提供上游仓库；需评估 OpenAI 兼容层是否已覆盖 | v0.3.0+（若现有兼容层不支持） |
| **Telegram 回复即 @提及** | [#2975](https://github.com/sipeed/picoclaw/pull/2975) | PR 已提交，实现简洁，符合 Telegram UX 惯例 | **v0.2.9 或 v0.3.0** |
| **Telegram 位置消息支持** | [#3049](https://github.com/sipeed/picoclaw/issues/3049) | 需新增 `message.location` 处理分支，可能涉及地理编码工具调用 | v0.3.0+ |
| **模型提供商 UI 优化**：默认显示已保存 key 的提供商、下拉选择、一键测试添加 | [#2952](https://github.com/sipeed/picoclaw/issues/2952) | 体验优化，非阻塞；与现有配置系统耦合度中等 | v0.3.0+ |
| **源码更新指南** | [#2834](https://github.com/sipeed/picoclaw/issues/2834) | 文档需求，低优先级 | 社区贡献即可 |

**路线图信号**：今日无重大架构级功能合并，但 [PR #3037](https://github.com/sipeed/picoclaw/pull/3037)（Kagi 搜索）表明 **tools 生态扩展** 是持续方向。交易/量化相关 Issue（[#3024](https://github.com/sipeed/picoclaw/issues/3024)-[#3032](https://github.com/sipeed/picoclaw/issues/3032)）批量出现后被快速关闭，疑似**外部项目误提交或内部 sprint 管理实验**，需关注是否为 PicoClaw 向金融 Agent 领域扩展的信号。

---

## 7. 用户反馈摘要

### 😤 痛点
- **配置即踩坑**：Anthropic 默认模型 ID 带点号导致 404（[#2941](https://github.com/sipeed/picoclaw/issues/2941)），新用户首次运行即失败
- **渠道白名单不可靠**：Matrix `allow_from` 对标准用户 ID 格式不兼容，且**静默拒绝**（无日志），调试困难
- **MCP 工具注册脆弱**：`mcp add` 对全局标志的解析错误导致"明明命令对了却加不上"的挫败感
- **版本感知缺失**：用户主动催促发版（[#2952](https://github.com/sipeed/picoclaw/issues/2952) "好久没发新版本了"），反映 nightly/正式版节奏不透明

### 😊 满意
- **Android 部署文档**快速响应，边缘设备用户得到支持
- **Kagi 搜索集成**上线，付费搜索用户有了高质量替代方案

### 🎯 使用场景洞察
- **多渠道路由**：用户同时使用 QQ、Telegram、Matrix，期望跨渠道状态一致（QQ 重启循环 bug 见 [#2952](https://github.com/sipeed/picoclaw/issues/2952)）
- **轻量硬件部署**：Raspberry Pi、Android Termux 等 ARM/低资源场景需求真实存在

---

## 8. 待处理积压

| 类型 | 条目 | 创建时间 | 最后更新 | 风险说明 |
|:---|:---|:---|:---|:---|
| **PR Stale** | [#2904](https://github.com/sipeed/picoclaw/pull/2904) Fix agent loop reload and panic cleanup stability | 2026-05-20 | 2026-06-07 | **18 天未合并**，解决 goroutine 泄漏和 panic 恢复，与今日已合并的 [#3016](https://github.com/sipeed/picoclaw/pull/3016) 部分重叠但覆盖更广；需评估是否 superseded |
| **PR Stale** | [#2975](https://github.com/sipeed/picoclaw/pull/2975) Telegram 回复即 @提及 | 2026-05-30 | 2026-06-07 | **9 天未合并**，UX 改进明确，实现简单，建议优先审查 |
| **Issue Stale** | [#2978](https://github.com/sipeed/picoclaw/issues/2978) Add omniroute as provider | 2026-05-31 | 2026-06-07 | 用户主动提供上游仓库，社区贡献友好，建议标记 `good first issue` |
| **Issue Open** | [#3049](https://github.com/sipeed/picoclaw/issues/3049) Telegram 位置消息忽略 | 2026-06-07 | 2026-06-07 | 新提交无响应，需确认是否纳入渠道消息类型扩展计划 |
| **Issue Open** | [#3041](https://github.com/sipeed/picoclaw/issues/3041) `mcp add` 标志解析 | 2026-06-07 | 2026-06-07 | 有 Fix PR [#3048](https://github.com/sipeed/picoclaw/pull/3048) 待合并，建议 24h 内审查 |

---

> **日报生成时间**: 2026-06-08 00:00 UTC  
> **数据截止**: 2026-06-07 23:59 UTC  
> **下次关注**: Matrix 修复合并、Telegram 位置消息 PR 响应、v0.2.9 正式版发布时间

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-06-08

> **项目**: [qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw) | **分析周期**: 过去24小时 | **数据截止**: 2026-06-08 00:00 UTC

---

## 1. 今日速览

NanoClaw 今日呈现**高活跃度开发态势**：24小时内产生 **9 个 PR 更新**（6 个待审、3 个已关闭）和 **3 个活跃 Issue**，无新版本发布。社区聚焦于**安装体验修复**（setup 流程断裂）、**安全权限缺口**（MCP 工具未鉴权）和**运行时稳定性**（容器泄漏、账号轮换状态漂移）三大主题。值得关注的是，3 个 PR 在同日被关闭，显示维护者对非合规提交的快速决断，但 6 个待合并 PR 中 4 个为当日新建，代码审查压力陡增。

---

## 2. 版本发布

**无新版本发布**。最新版本仍为历史版本，建议关注 [Releases 页面](https://github.com/qwibitai/nanoclaw/releases) 获取后续更新。

---

## 3. 项目进展

### 已关闭 PR（3 个）

| PR | 作者 | 状态 | 进展说明 |
|:---|:---|:---|:---|
| [#2710](https://github.com/nanocoai/nanoclaw/pull/2710) | markbala | **已关闭** | Ollama 文档优化：新增提示缓存配置指南，解决 Claude-Code-CLI → Ollama 路径的缓存穿透导致的性能劣化。虽为文档类 PR，但直接改善本地模型用户的首次体验。 |
| [#2707](https://github.com/nanocoai/nanoclaw/pull/2707) | gavrielc | **已关闭** | **升级安全机制**：引入启动"绊线"（tripwire），禁止未经 `/setup`、`/update-nanoclaw`、`/migrate-nanoclaw` 官方路径的 `git pull` 直接启动，防止迁移跳过导致的静默损坏。属于**基础设施韧性提升**。 |
| [#2706](https://github.com/nanocoai/nanoclaw/pull/2706) | tier2tech-tian | **已关闭** | 账号轮换状态校准：修复 Codex/Gemini 模式误入 Anthropic 轮换、DB 游标漂移、切换通知延迟等 4 处生产级问题，含 SIGTERM/SIGKILL 兜底机制。**关键运行时修复**，但作者自陈未跑完整 `npm run build`，质量门禁存疑。 |

### 关键待合并 PR（6 个中高优先级）

| PR | 作者 | 核心贡献 | 项目推进度 |
|:---|:---|:---|:---|
| [#2709](https://github.com/nanocoai/nanoclaw/pull/2709) | markbala | **DB 化容器配置**：`container_configs` 新增 `env` 和 `blocked_hosts` 持久化字段，替代内存态配置 | 基础设施现代化，解耦容器生命周期与配置状态 |
| [#2708](https://github.com/nanocoai/nanoclaw/pull/2708) | danilomendonca | **容器泄漏修复**：服务停止时收割孤儿 agent 容器 | 资源治理关键补丁，直接影响多租户稳定性 |
| [#2705](https://github.com/nanocoai/nanoclaw/pull/2705) | premald | **凭证代理穿透修复**：`use-native-credential-proxy` 技能真正绕过 OneCLI 网关 | 企业部署合规性，修复 launchd/systemd 环境下的双重回退缺陷 |
| [#2531](https://github.com/nanocoai/nanoclaw/pull/2531) | cfis | **轮询循环去重**：`send_message` 中程触发时的文本重复抑制 | 用户体验抛光，长期悬停的交互瑕疵 |
| [#1626](https://github.com/nanocoai/nanoclaw/pull/1626) | rsdrahat | **Telegram 话题隔离**：自动注册的话题级隔离机制 | 社区最大功能 PR（创建 2 个月前），拓展多租户场景 |
| [#2704](https://github.com/nanocoai/nanoclaw/pull/2704) | Luggagethecat | **CLI 参数解析测试**：`parseArgs` 单元测试覆盖 | 工程债务偿还，setup 模块可测试性基础 |

---

## 4. 社区热点

### 讨论热度排序（按信息量与潜在影响）

| 排名 | Issue/PR | 热度指标 | 核心诉求分析 |
|:---|:---|:---|:---|
| 🔥 1 | [#2711](https://github.com/nanocoai/nanoclaw/issues/2711) `create_agent` MCP 工具未鉴权 | 新建 0 评论，但**安全敏感** | **"注释说 admin-only，实现却是 world-writable"** — 文档与代码的契约断裂，任何容器可创建 agent 群组，多租户场景下为**权限提升漏洞**。社区需要明确的 RBAC 边界。 |
| 🔥 2 | [#2703](https://github.com/nanocoai/nanoclaw/issues/2703) setup 推荐路径导致 `pnpm run chat hi` 挂死 120s | 新建 0 评论，但** onboarding 阻断** | **" happy path 不快乐"** — 安装流程的最后一步向用户推荐一个必挂的命令，120s 超时无诊断信息。新用户流失的直接诱因，与 [#2708](https://github.com/nanocoai/nanoclaw/pull/2708) 容器修复存在关联。 |
| 🔥 3 | [#2312](https://github.com/nanocoai/nanoclaw/issues/2312) `CLAUDE.md` 每次启动被无条件删除 | 2 评论，1 个月老问题 | **"永久脏工作区"** — 文件既在仓库又必被删，Git 状态持续污染。反映全局配置与本地生成的边界设计缺陷，需决定是移出版控还是改为条件删除。 |

**诉求聚类**：安全边界模糊（#2711）、安装体验断裂（#2703）、配置管理反模式（#2312）—— 三者共同指向**"生产就绪性"**缺口，项目正从黑客友好型向企业可部署型过渡的阵痛。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | Fix PR 状态 |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#2711](https://github.com/nanocoai/nanoclaw/issues/2711) | MCP `create_agent` 工具未鉴权，任意容器可创建 agent 群组 | ❌ **无 Fix PR**，需紧急响应 |
| 🟠 **High** | [#2703](https://github.com/nanocoai/nanoclaw/issues/2703) | 推荐安装路径 `cli/local` 未连接，`pnpm run chat hi` 挂死 120s | 🟡 **关联 PR** [#2708](https://github.com/nanocoai/nanoclaw/pull/2708) 修复容器泄漏，但未直接解决 CLI 连接问题 |
| 🟠 **High** | [#2706](https://github.com/nanocoai/nanoclaw/pull/2706)（已关闭）| 账号轮换状态漂移、模式串扰、进程残留 | ✅ **已有关闭 PR**，但作者未跑完整构建，需验证合并质量 |
| 🟡 **Medium** | [#2531](https://github.com/nanocoai/nanoclaw/pull/2531) | 轮询循环中 `send_message` 触发文本重复 | 🟡 **Fix PR 待合并**，悬停 20 天 |
| 🟡 **Medium** | [#2705](https://github.com/nanocoai/nanoclaw/pull/2705) | `use-native-credential-proxy` 静默回退 OneCLI 网关 | 🟡 **Fix PR 待合并**，企业部署场景 |
| 🟢 **Low** | [#2312](https://github.com/nanocoai/nanoclaw/issues/2312) | 工作区永久 dirty，功能无损 | ❌ 无 Fix PR，设计决策待拍板 |

---

## 6. 功能请求与路线图信号

| 信号源 | 功能方向 | 纳入下一版本概率 | 判断依据 |
|:---|:---|:---|:---|
| [#2709](https://github.com/nanocoai/nanoclaw/pull/2709) DB-backed ContainerConfig | 容器配置持久化 | **高** | 实现 maintainer 自提的 #1867，符合架构演进方向 |
| [#1626](https://github.com/nanocoai/nanoclaw/pull/1626) Telegram 话题隔离 | 多租户通讯隔离 | **中-高** | 2 个月未合并，功能完整但可能需 rebase；社区有真实需求 |
| [#2707](https://github.com/nanocoai/nanoclaw/pull/2707) 升级绊线机制 | 安全启动校验 | **高**（概念已采纳）| 已关闭但设计被认可，可能以修订形式重提 |
| [#2711](https://github.com/nanocoai/nanoclaw/issues/2711) 隐含需求 | MCP 工具 RBAC 框架 | **中** | 安全漏洞驱动，需系统性设计而非单点修复 |

**路线图推断**：项目正从 **v2.0.x 的"功能填充期"** 转向 **v2.1 的"治理加固期"** — 配置持久化、启动安全、容器生命周期管理成为主线，通讯渠道扩展（Telegram）为支线。

---

## 7. 用户反馈摘要

### 痛点提炼（来自 Issue 描述）

| 用户场景 | 痛点 | 情绪信号 |
|:---|:---|:---|
| **首次安装用户**（#2703） | 跟着官方推荐走，最后一步必挂，120s 死等无反馈 | 😤 **挫败感极强** — "no hint that the cause" |
| **多租户部署者**（#2711） | 文档承诺 admin-only，实际任意容器可创建 agent，信任崩塌 | 😰 **安全感缺失** — "Claim vs. reality" 标题显讽刺 |
| **Git 洁癖开发者**（#2312） | 每次启动必 dirty，无法保持干净工作区 | 😑 **持续磨损** — 1 个月老问题，慢性痛苦 |
| **企业 systemd 部署者**（#2705） | 原生凭证代理技能失效，静默回退至云端网关，合规审计失败 | 😤 **预期违背** — "failed on a real install" |

### 满意点
- 文档贡献者（markbala）持续活跃，Ollama 性能调优指南体现社区知识反哺
- 安全机制（#2707）被快速响应，显示维护者对基础设施风险的敏感

---

## 8. 待处理积压

| 积压项 | 创建时间 | 最后更新 | 风险等级 | 提醒 |
|:---|:---|:---|:---|:---|
| [#1626](https://github.com/nanocoai/nanoclaw/pull/1626) Telegram 话题隔离 | 2026-04-04 | 2026-06-07 | 🟠 **中高** | **悬停 65 天**，功能完整但可能因代码漂移需大量 rebase；多租户场景的关键差异化功能，建议优先审阅或明确里程碑 |
| [#2531](https://github.com/nanocoai/nanoclaw/pull/2531) 轮询去重修复 | 2026-05-18 | 2026-06-07 | 🟡 **中** | 悬停 20 天，用户体验抛光类修复，合并成本低但收益明确 |
| [#2312](https://github.com/nanocoai/nanoclaw/issues/2312) CLAUDE.md 删除问题 | 2026-05-06 | 2026-06-07 | 🟢 **低** | 1 个月未决，需设计决策（移出版控或条件化删除），建议标记 `good first issue` 或 maintainer 拍板 |

---

## 健康度评估

| 维度 | 评分 | 说明 |
|:---|:---|:---|
| **开发活跃度** | ⭐⭐⭐⭐☆ | 单日 9 PR 为高吞吐，但 67% 为当日新建，审查深度存疑 |
| **社区响应度** | ⭐⭐⭐☆☆ | 3 个 Issue 0-2 评论，安全漏洞（#2711）无 maintainer 介入痕迹 |
| **代码质量门禁** | ⭐⭐⭐☆☆ | #2706 作者自陈未跑完整构建即提交，已关闭 PR 的质量把控可见 |
| **安全态势** | ⭐⭐☆☆☆ | #2711 权限提升漏洞当日未响应，RBAC 债务显性化 |
| **新用户友好度** | ⭐⭐☆☆☆ | #2703 阻断 happy path，直接影响漏斗转化 |

> **建议关注**：#2711 安全漏洞需 48 小时内 maintainer 响应；#1626 长期 PR 建议进入 v2.1 里程碑或明确关闭理由。

---

*日报生成时间: 2026-06-08 | 数据来源: GitHub API 与公开 Issue/PR 元数据*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-06-08

## 1. 今日速览

IronClaw 项目在 2026-06-07 保持**高强度活跃状态**：24小时内 Issues 更新 50 条（42 条新开/活跃，8 条关闭），PR 更新 38 条（22 条待合并，16 条已合并/关闭），无新版本发布。核心开发力量集中在 **Reborn 架构落地**（WebUI v2 Beta、主机内核安全加固、工作流门面层）和 **Codex 生产力功能**（技能管理、Slack 集成、会话控制）两大主线。Dependabot 驱动的依赖更新群形成显著维护负担（5 个待合并依赖 PR）。整体项目健康度良好，但 XL 级 PR 比例偏高，提示代码审查周期可能承压。

---

## 2. 版本发布

**无新版本发布**

> 注：PR #3708（[chore: release](https://github.com/nearai/ironclaw/pull/3708)）为 CI 自动发布的版本号更新，涉及 `ironclaw_common` 0.4.2→0.5.0、`ironclaw_skills` 0.3.0→0.4.0 等 **API 破坏性变更**，但该 PR 仍处于 OPEN 状态，尚未实际发布。

---

## 3. 项目进展

### 今日已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#4532](https://github.com/nearai/ironclaw/pull/4532) | serrrfirat | **[codex] Slack 允许频道选择器** — WebUI v2 管理员可配置 Slack 允许频道列表，并接入 Reborn Slack host-beta 后端 | Reborn 企业集成场景（Slack 工作区治理）从"可用"迈向"可管"，为 Beta 企业部署扫清合规障碍 |
| [#4511](https://github.com/nearai/ironclaw/pull/4511) | henrypark133 | **[codex] 出站偏好门面合约** — Phase 1 出站投递偏好合约 + `RebornServicesApi` 布线 + 浏览器安全 DTO | 建立 Reborn 消息路由（邮件/Slack/等）的声明式配置基础，支撑多通道用户偏好 |
| [#4530](https://github.com/nearai/ironclaw/pull/4530) | serrrfirat | **结构化模型可见工具观测** — `LoopSafeSummary` + `ModelVisibleToolObservation` 类型化 DTO，替代 #4526 | 关键安全边界：工具执行结果对 LLM 的可见性从"字符串黑箱"升级为"结构化、可验证、可恢复"，直接影响 #4059 错误恢复体验 |
| [#4463](https://github.com/nearai/ironclaw/pull/4463) | serrrfirat | **[codex] Slack host-beta 持久化存储布线** — 对话/出站/幂等状态接入 host 文件系统持久存储 + 唤醒 turn runner | Slack 通道从"内存原型"升级为"可重启、可观测"的 host-beta 品质，直接支撑 #3607 WebUI Beta 发布路径 |
| [#4516](https://github.com/nearai/ironclaw/pull/4516) | serrrfirat | **[codex] WebChat v2 线程删除** — DELETE 线程路由 + 描述符/路由/处理器/组合/门面全链路 + 侧载测试 | 用户数据生命周期管理（GDPR/CCPA 合规）的 P0 需求落地，#3607 Beta  blocker -1 |
| [#3298](https://github.com/nearai/ironclaw/pull/3298) | serrrfirat | **Hermetic 本地门禁** — fmt/安全检查/clippy/分层 Rust 测试的 Hermes 风格包装 + pre-push 钩子 | 开发者体验基础设施：从"文档建议"升级为"强制门禁"，长期降低 CI 失败率和审查噪音 |
| [#3565](https://github.com/nearai/ironclaw/pull/3565) | serrrfirat | **CI 夜间 E2E 超时延长 + AGENTS.md 刷新** | 工程可持续性：缓解 flaky E2E 导致的假阴性，新贡献者 onboarding 文档现代化 |

**整体推进评估**：Reborn WebUI Beta 发布路径（#3607）的 M1-WebUI 表面和 M4-Host-Kernel 安全模块今日均有实质性代码落地，预计 Beta  blocker 清除进度约 **15-20%**。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 核心诉求分析 |
|:---|:---|:---|:---|
| 🔥1 | [#3280](https://github.com/nearai/ironclaw/issues/3280) [Reborn] Add ProductWorkflow and InboundTurnService facade | **7 条** | **架构中枢争议**：ProductAdapter → ProductWorkflow → Host Reborn services 的三层门面是否过度抽象？评论显示对"facade 是否会成为变更瓶颈"存在设计权衡讨论，关联 11 个子 issue 的协调复杂度 |
| 2 | [#3036](https://github.com/nearai/ironclaw/issues/3036) [EPIC] Configuration-as-Code | **5 条** | **运维体验痛点**：.env + .system/ + JSON + flags 的碎片化配置无 schema/无 diff/无审计，两类操作者（平台运维 + 用例开发者）均要求声明式蓝图。这是 Reborn 从"能跑"到"可运营"的关键跃迁 |
| 3 | [#3044](https://github.com/nearai/ironclaw/issues/3044) 本地开发者运行时配置文件 | **3 条** | **开发者体验**：`ironclaw --profile dev` 一键本地编码代理的需求，避免手动配置 grants/mounts/process backends |
| 3 | [#3283](https://github.com/nearai/ironclaw/issues/3283) 迁移 OpenAI 兼容 API 到 Reborn | **3 条** | **生态兼容性**：/v1/chat/completions 和 /v1/responses 的 Reborn 化，保留外部兼容性，直接影响现有集成迁移成本 |
| 3 | [#3333](https://github.com/nearai/ironclaw/issues/3333) 生产布线和缺失 crates | **3 条** | **生产就绪审计**：reborn-integration 分支仍有 fake/in-memory/no-op 接缝，需从"演示品质"到"生产品质" |

### 热点背后的诉求模式

```
技术债务焦虑 ──→ #3333 生产布线、#3032 no-exposure safeguards、#3026 组合根
开发者体验诉求 ──→ #3044 本地配置、#3036 Config-as-Code、#4118 CLI provider parity
安全信任建立 ──→ #3609 approval lease 重衰减、#3608 dispatch authority 密封、#3959 SecurityAuditSink
生态锁定规避 ──→ #3283 OpenAI API 兼容、#3572 WASM 组件化 ProductAdapters
```

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 状态 |
|:---|:---|:---|:---|
| 🔴 **P0 - 阻断性** | [#3032](https://github.com/nearai/ironclaw/issues/3032) Reborn 切换阻断：no-exposure safeguards | 敏感数据防泄露的生产安全层缺失，直接阻断 Reborn 生产部署 | **OPEN，无 fix PR** |
| 🔴 **P0 - 阻断性** | [#3026](https://github.com/nearai/ironclaw/issues/3026) Reborn 切换阻断：config-driven composition root | 生产启动/组合图无法从类型化配置构建，存在部分暴露风险 | **OPEN，无 fix PR** |
| 🔴 **P0 - 阻断性** | [#3609](https://github.com/nearai/ironclaw/issues/3609) Re-attenuate approval leases | UI 提供的衰减值可被恶意/错误加宽，突破审核过的 capability 边界 | **OPEN，无 fix PR** |
| 🔴 **P0 - 阻断性** | [#3608](https://github.com/nearai/ironclaw/issues/3608) Seal dispatch authority | dispatch 请求构造缺乏不透明权威证明，依赖代码审查而非密码学保证 | **OPEN，无 fix PR** |
| 🟡 **P1 - 高** | [#4116](https://github.com/nearai/ironclaw/issues/4116) 携带 v1 SSO 到 WebChat v2 | Google/GitHub/NEAR 登录在 Reborn WebChat v2 路径缺失，用户迁移阻断 | **OPEN，无 fix PR** |
| 🟡 **P1 - 高** | [#4042](https://github.com/nearai/ironclaw/issues/4042) Complete tenant sandbox process capabilities | Docker 租户沙箱仅支持简单命令执行，workspace 挂载/网络/secret 注入未完成 | **OPEN，无 fix PR** |
| 🟡 **P1 - 高** | [#3957](https://github.com/nearai/ironclaw/issues/3957) Third-party activation hardening | HOOKS_THIRD_PARTY_ENABLED 生产启用前：隔离持久化、审计归因、供应商签名验证缺失 | **OPEN，无 fix PR，security-review-required 标签** |
| 🟢 **P2 - 中** | [#3956](https://github.com/nearai/ironclaw/issues/3956) RESOLVE_NO_XDEV bind-mount containment | openat2 TOCTOU 加固的后续：跨设备边界挂载点遍历未阻断 | **OPEN，无 fix PR** |

> **风险评估**：4 个 P0 安全 blocker 全部与 #2987 Reborn 切换里程碑关联，目前均处于"设计已定、实现未全"状态，是 Beta 发布的实际瓶颈。

---

## 6. 功能请求与路线图信号

| 功能需求 | 来源 Issue | 已有 PR 支撑 | 纳入下一版本概率 | 判断依据 |
|:---|:---|:---|:---|:---|
| **Config-as-Code 声明式配置** | [#3036](https://github.com/nearai/ironclaw/issues/3036) | 无直接 PR，#4517 种子 config.toml 为前置 | ⭐⭐⭐⭐☆ 高 | EPIC 级、多角色痛点、与 #3026 composition root 强耦合 |
| **本地开发者一键配置** | [#3044](https://github.com/nearai/ironclaw/issues/3044) | #4517 种子配置（部分） | ⭐⭐⭐⭐☆ 高 | 开发者体验核心，#4517 已启动基础设施 |
| **Reborn CLI provider 管理** | [#4118](https://github.com/nearai/ironclaw/issues/4118) | 无 | ⭐⭐⭐☆☆ 中 | LLM crate 已提取，但 CLI 优先级次于 WebUI Beta |
| **WASM 组件化 ProductAdapters** | [#3572](https://github.com/nearai/ironclaw/issues/3572) | 无 | ⭐⭐⭐☆☆ 中 | Telegram v2 已模糊边界，技术债务但非 Beta 阻断 |
| **并发后台 fan-out 运行时** | [#3169](https://github.com/nearai/ironclaw/issues/3169) | 无 | ⭐⭐☆☆☆ 低 | #3161 故意限制为单 handoff，架构深化阶段需求 |
| **Google Calendar/Gmail native 扩展** | [#3829](https://github.com/nearai/ironclaw/issues/3829) | **已关闭**（Lane 9 完成） | ✅ 已落地 | 扩展 v2 目录/运行时基线就绪后的自然延伸 |

**路线图信号**：今日合并的 #4530（结构化工具观测）+ #4511（出站偏好）+ #4532（Slack 频道治理）表明 **"Reborn 产品化收尾"** 阶段已启动，从"内核能力构建"转向"用户可配置、可治理、可集成"。

---

## 7. 用户反馈摘要

> 注：以下从 Issue 描述和评论中提炼，IronClaw 作为基础设施项目，"用户"主要指内部开发者和早期企业部署者。

### 痛点

| 反馈 | 来源 |
|:---|:---|
| "配置碎片化：.env + .system/ + JSON + flags，无 schema、无 diff、无审计" | [#3036](https://github.com/nearai/ironclaw/issues/3036) |
| "本地运行需要手动配置 grants, mounts, process backends, network policy, approvals" | [#3044](https://github.com/nearai/ironclaw/issues/3044) |
| "v1 有完整浏览器登录路径；WebChat v2 只有 bearer/session/OIDC 片段" | [#4116](https://github.com/nearai/ironclaw/issues/4116) |
| "当前模型可见错误输出保守：稳定 kind + 有限安全摘要，不够有用" | [#4059](https://github.com/nearai/ironclaw/issues/4059) |
| "Telegram v2 ProductAdapter 是原生 Rust 而非 WASM 组件，安全边界模糊" | [#3572](https://github.com/nearai/ironclaw/issues/3572) |

### 满意/认可

| 反馈 | 来源 |
|:---|:---|
| "PR #3161 故意保持单 handoff 是 narrow/safe 的 substrate slice" | [#3169](https://github.com/nearai/ironclaw/issues/3169)（设计意图获认可）|
| "SecurityAuditSink primitive + hook-deny 已落地" | [#3959](https://github.com/nearai/ironclaw/issues/3959)（安全基础设施进展）|
| "reborn-integration 分支已有生产-ish 组件， mostly need composition wiring" | [#3333](https://github.com/nearai/ironclaw/issues/3333)（对现有资产价值的认可）|

---

## 8. 待处理积压

### 长期活跃无关闭信号的重要 Issue

| Issue | 创建 | 最后更新 | 天数 | 风险 | 提醒 |
|:---|:---|:---|:---|:---|:---|
| [#3036](https://github.com/nearai/ironclaw/issues/3036) Config-as-Code EPIC | 2026-04-28 | 2026-06-07 | **40 天** | 架构债务累积 | 需确认是否与 #3026 composition root 合并规划 |
| [#3044](https://github.com/nearai/ironclaw/issues/3044) 本地开发者配置文件 | 2026-04-28 | 2026-06-07 | **40 天** | 开发者流失 | #4517 已部分覆盖，需关联关闭或拆分 |
| [#3280](https://github.com/nearai/ironclaw/issues/3280) ProductWorkflow facade | 2026-05-06 | 2026-06-07 | **32 天** | 7 评论无结论 | 架构评审需 owner 决策，避免成为"永久讨论" |
| [#3032](https://github.com/nearai/ironclaw/issues/3032) No-exposure safeguards | 2026-04-28 | 2026-06-07 | **40 天** | **P0 阻断** | 40 天无关闭，安全 blocker 需专项冲刺 |
| [#3026](https://github.com/nearai/ironclaw/issues/3026) Config-driven composition root | 2026-04-28 | 2026-06-07 | **40 天** | **P0 阻断** | 同上，与 #3036 可能需合并治理 |

### 待合并 PR 审查压力

| PR | 规模 | 风险 | 等待天数 | 提醒 |
|:---|:---|:---|:---|:---|
| [#4503](https://github.com/nearai/ironclaw/pull/4503) 依赖大更新（38 个） | XL | medium | 2 天 | Dependabot 积压，需验证 agent-client-protocol 0.10→0.14 破坏性变更 |
| [#3708](https://github.com/nearai/ironclaw/pull/3708) 版本发布 | M | medium | **22 天** | API 破坏性变更已就绪但迟迟未发布，阻塞下游采用 |
| [#4534](https://github.com/nearai/ironclaw/pull/4534) 任务保留压缩 | XL | low | 1 天 | 今日新提，codex 核心功能，需优先审查 |
| [#4531](https://github.com/nearai/ironclaw/pull/4531) 技能渐进披露 | XL | low | 1 天 | 今日新提，与 #4527 技能设置 UI 配套 |

---

## 附录：关键链接速查

| 类型 | 链接 |
|:---|:---|
| 项目主页 | https://github.com/nearai/ironclaw |
| Reborn EPIC | [#2987](https://github.com/nearai/ironclaw/issues/2987) |
| WebUI Beta 追踪 | [#3607](https://github.com/nearai/ironclaw/issues/3607) |
| 今日全部 Issues | `is:issue updated:2026-06-07` |
| 今日全部 PRs | `is:pr updated:2026-06-07` |

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-06-08

## 1. 今日速览

LobsterAI 今日社区活跃度处于**低活跃状态**。过去24小时内仅 Issues 有15条更新，但全部为存量 Issue 的自动标记（stale）刷新或单一评论补充，**无实质性新进展**；PR 合并与发布活动完全停滞。值得关注的是，今日新增一条用户关于 Token 重复输出浪费的疑问（#2121），反映出实际使用中的成本焦虑。整体而言，项目维护节奏明显放缓，社区驱动动能不足，需警惕 Issues 积压导致的用户流失风险。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

**今日无 PR 合并或关闭**，代码层面零推进。

过去24小时内的15条 Issues 更新均为 **stale 标记刷新**（系统自动化行为）或作者补充评论，无维护者实质性响应。项目整体处于**停滞状态**，未向前推进任何功能或修复。

---

## 4. 社区热点

| 排名 | Issue | 互动量 | 核心诉求 |
|:---|:---|:---|:---|
| 1 | [#1509](https://github.com/netease-youdao/LobsterAI/issues/1509) skills 文件生成阻塞无感知，同模型不同产品理解偏差 | 2 评论 | **技能生成可靠性**与**模型一致性**——用户对比 OpenClaw 发现相同模型表现差异，质疑产品层 prompt 工程或编排逻辑 |
| 2 | [#2121](https://github.com/netease-youdao/LobsterAI/issues/2121) 重复输出疑似浪费 Token | 0 评论（今日新建） | **使用成本透明化**——用户发现输出重复内容，担忧计费模型下的隐性成本 |

**诉求分析**：热点议题集中在**产品可靠性**（技能生成中断无反馈）与**经济成本**（Token 浪费）。用户开始横向对比竞品（OpenClaw），且对 AI 产品的"黑箱"计费模式敏感度上升。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#1500](https://github.com/netease-youdao/LobsterAI/issues/1500) | 禁用技能后仍保留在 `activeSkillIds`，对话中继续被调用——**状态同步逻辑缺陷**，导致用户配置失效 | Open, stale | 无 |
| 🔴 **高** | [#1502](https://github.com/netease-youdao/LobsterAI/issues/1502) | Agent 设置保存后 `activeSkillIds` 未同步，需切换 Agent 强制刷新——**缓存/状态管理缺陷** | Open, stale | 无 |
| 🔴 **高** | [#1506](https://github.com/netease-youdao/LobsterAI/issues/1506) | 定时任务 IM 通知未选会话即可提交，运行时静默失败——**表单校验缺失+错误处理缺失** | Open, stale | 无 |
| 🟡 **中** | [#1516](https://github.com/netease-youdao/LobsterAI/issues/1516) | GitHub Copilot OAuth 轮询未清理，Token 静默丢失——**资源泄漏+竞态条件** | Open, stale | 无 |
| 🟡 **中** | [#1504](https://github.com/netease-youdao/LobsterAI/issues/1504) | IM 机器人 AES Key 缺少必填校验——**配置安全性隐患** | Open, stale | 无 |
| 🟡 **中** | [#1512](https://github.com/netease-youdao/LobsterAI/issues/1512) | QQ Bot 白名单 UI 缺失添加功能——**功能完整性缺陷** | Open, stale | 无 |
| 🟢 **低** | [#1513](https://github.com/netease-youdao/LobsterAI/issues/1513) | 声明条款内容格式不规范——**文案/UI  polish** | Open, stale | 无 |

**关键风险**：#1500、#1502、#1506 构成**技能/Agent 状态管理综合征**——核心交互路径（技能启用、Agent 切换、定时任务）存在系统性状态同步缺陷，且全部标记 stale 超过2个月无修复，严重影响用户信任。

---

## 6. 功能请求与路线图信号

| Issue | 功能方向 | 用户价值 | 纳入可能性评估 |
|:---|:---|:---|:---|
| [#1525](https://github.com/netease-youdao/LobsterAI/issues/1525) 会话颜色标注 | 信息可视化 | 重度用户会话管理效率 | ⭐⭐⭐ 中——实现成本低，竞品标配 |
| [#1528](https://github.com/netease-youdao/LobsterAI/issues/1528) 批量导出会话 | 数据可移植性 | 备份/迁移/团队共享 | ⭐⭐⭐⭐ 中高——基础设施能力，合规相关 |
| [#1532](https://github.com/netease-youdao/LobsterAI/issues/1532) 本地使用统计 | 用户洞察 | 使用模式认知 | ⭐⭐⭐ 中——纯前端+SQLite 查询，技术门槛低 |
| [#1537](https://github.com/netease-youdao/LobsterAI/issues/1537) 消息收藏/书签 | 信息管理 | 长对话关键信息检索 | ⭐⭐⭐⭐ 中高——生产力工具核心能力 |
| [#1541](https://github.com/netease-youdao/LobsterAI/issues/1541) 会话标签分类筛选 | 内容组织 | 多维度会话管理 | ⭐⭐⭐⭐⭐ 高——与 #1525 互补，形成完整标签体系 |

**路线图信号**：所有功能请求均来自同一用户（MaoQianTu），且集中于**会话管理基础设施**（标签、颜色、导出、统计、书签）。这暗示：
- 存在重度用户/内部测试者深度使用后的系统性反馈
- 产品当前会话管理能力落后于用户规模增长
- 若优先实现 #1541（标签体系），可连带覆盖 #1525、#1537 的场景

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 | 核心不满 |
|:---|:---|:---|
| **技能开发生命周期** | #1509 | 生成过程"黑箱"，阻塞无反馈，失败无报错；同模型竞品表现更优 |
| **配置操作即时生效** | #1500, #1502 | 开关/保存动作与系统状态存在"幽灵延迟"，需手动刷新或切换才能同步 |
| **后台任务可靠性** | #1506 | 表单允许提交无效配置，运行时静默失败，无监控无告警 |
| **第三方认证体验** | #1516 | OAuth 流程与 UI 生命周期未绑定，关闭窗口导致资源泄漏和认证丢失 |
| **使用成本焦虑** | #2121 | 输出重复内容引发 Token 计费担忧，缺乏透明度 |

### 满意度观察
- **未表达明确满意点**：今日数据无正面反馈
- **隐性期望落差**：用户将 LobsterAI 与 OpenClaw 直接对比（#1509），暗示产品差异化价值不清晰

---

## 8. 待处理积压

### ⚠️ 长期未响应高危 Issue（建议优先处理）

| Issue | 滞留时间 | 风险说明 |
|:---|:---|:---|
| [#1500](https://github.com/netease-youdao/LobsterAI/issues/1500) | ~2个月 | 技能禁用失效——**安全/权限相关**，用户显式关闭的功能仍生效 |
| [#1502](https://github.com/netease-youdao/LobsterAI/issues/1502) | ~2个月 | Agent 配置不同步——**每日高频操作路径**，影响所有用户 |
| [#1506](https://github.com/netease-youdao/LobsterAI/issues/1506) | ~2个月 | 定时任务静默失败——**企业场景关键功能**，可靠性底线 |
| [#1516](https://github.com/netease-youdao/LobsterAI/issues/1516) | ~2个月 | OAuth Token 丢失——**付费功能（Copilot）体验阻断** |
| [#1518](https://github.com/netease-youdao/LobsterAI/issues/1518) | ~2个月 | CI Labeler 权限修复——**开发者体验基础设施**，阻碍社区贡献 |

### 维护者行动建议

1. **立即**：确认 stale bot 配置是否过度激进——核心功能 Bug 不应仅因无活动而自动标记
2. **本周**：分配 #1500/#1502 给状态管理模块负责人，Redux slice 同步逻辑需系统性审查
3. **本月**：建立 Bug 分级响应 SLA，高严重度 Issue 禁止进入 stale 流程

---

*日报生成时间：2026-06-08 | 数据来源：netease-youdao/LobsterAI GitHub 公开数据*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-06-08

---

## 1. 今日速览

Moltis 项目在过去 24 小时保持**中等活跃度**，核心开发工作持续推进但尚未进入合并阶段。3 个 PR 均处于待合并状态，集中在 Telegram 流式传输修复、工具结果持久化优化及频道活动日志权限控制三大方向，显示团队正聚焦**稳定性加固与精细化权限管理**。社区仅 1 个新活跃 Issue，反映移动端 Web UI 的多行文本输入需求，用户参与度偏低（👍 均为 0）。整体项目健康度**平稳**，但缺乏社区互动信号，需关注用户反馈渠道的活跃度。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

今日**无 PR 合并或关闭**，3 个待合并 PR 代表项目当前的技术推进方向：

| PR | 方向 | 进展意义 |
|:---|:---|:---|
| [#1113](https://github.com/moltis-org/moltis/pull/1113) | Telegram 流式传输热修复 | 修复 #1099 引入的回归问题，确保流式最终回复在关闭完成通知时仍能正确渲染 |
| [#1089](https://github.com/moltis-org/moltis/pull/1089) | 工具结果持久化上限控制 | 防止会话历史重水合时工具内容膨胀，覆盖 6 个关键路径（正常聊天/流式/压缩重试/提示检查/静默记忆/LLM 压缩提示） |
| [#1093](https://github.com/moltis-org/moltis/pull/1093) | 频道活动日志可见性设置 | 引入三级权限体系（账户/频道/用户），支持 `all`/`errors_only`/`off` 三级控制 |

**整体评估**：项目处于**质量加固期**，无功能突破但系统性风险管控加强。PR #1089 的工程覆盖面最广，是近期技术债务清理的核心；PR #1113 为紧急修复，优先级最高。

---

## 4. 社区热点

| 项目 | 数据 | 分析 |
|:---|:---|:---|
| [#1107](https://github.com/moltis-org/moltis/issues/1107) Mobile Web UI 多行文本输入 | 1 评论, 0 👍 | **唯一社区声音**，反映移动端体验短板。作者 IlyaBizyaev 已完成预检清单，诉求明确但缺乏社区共鸣 |
| [#1113](https://github.com/moltis-org/moltis/pull/1113) Telegram hotfix | 创建与更新同日均 6/7，无评论 | 团队内部驱动，非社区热点 |

**诉求分析**：移动端 Web UI 的文本输入体验是**被低估的痛点**。当前单/多行输入限制可能阻碍复杂指令输入场景（如代码、长提示词），但社区反应冷淡暗示：① 移动端用户占比有限；② 或用户已转向原生客户端规避此问题。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | Fix PR |
|:---|:---|:---|:---|
| 🔴 **高** | Telegram 流式传输最终回复丢失（关闭完成通知时） | **待合并** | [#1113](https://github.com/moltis-org/moltis/pull/1113) |

**回归分析**：该 Bug 由 [#1099](https://github.com/moltis-org/moltis/pull/1099) 引入，属于**配置组合边界情况**（streaming enabled + completion notify disabled）。PR #1113 明确标记为 `hotfix`，建议维护者优先审查合并以避免影响生产环境 Telegram 用户。

无崩溃报告或安全相关 Issue。

---

## 6. 功能请求与路线图信号

| 来源 | 功能方向 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#1107](https://github.com/moltis-org/moltis/issues/1107) | 移动端 Web UI 多行文本输入 | ⭐⭐⭐ **中** | 纯前端改动，实现成本低；但需与现有移动端设计体系对齐 |
| [#1093](https://github.com/moltis-org/moltis/pull/1093) | 活动日志可见性分级控制 | ⭐⭐⭐⭐⭐ **高**（已开发） | PR 已就绪，属于企业/多租户场景的合规刚需 |
| [#1089](https://github.com/moltis-org/moltis/pull/1089) | 工具结果持久化上限 | ⭐⭐⭐⭐⭐ **高**（已开发） | 性能与成本关键路径，阻塞大规模部署 |

**路线图信号**：团队正从"功能扩张"转向"企业就绪"——权限精细化（#1093）与资源边界控制（#1089）均为 B 端部署的前置条件。下一版本可能以**稳定性 + 治理增强**为主题，而非新 Agent 能力。

---

## 7. 用户反馈摘要

> ⚠️ **数据局限**：仅 1 条 Issue 含用户直接反馈，以下为有限提炼。

**痛点**：
- 移动端 Web 场景下，长文本/多段输入被迫使用单行文本框，"Probl..."截断显示问题描述涉及输入体验受阻（[#1107](https://github.com/moltis-org/moltis/issues/1107)）

**使用场景暗示**：
- IlyaBizyaev 的预检清单勾选"搜索现有请求"但未勾选"包含会话上下文"，可能为**独立功能请求**而非生产阻塞问题，紧急程度有限

**满意度信号**：无显性满意/不满意数据（👍 均为 0，无正面评论）。

---

## 8. 待处理积压

| PR/Issue | 创建日期 | 已开放天数 | 风险标记 |
|:---|:---|:---|:---|
| [#1089](https://github.com/moltis-org/moltis/pull/1089) Cap persisted tool results | 2026-06-01 | **7 天** | ⚠️ 中等——工程量大但无冲突信号 |
| [#1093](https://github.com/moltis-org/moltis/pull/1093) Channel activity log settings | 2026-06-03 | **5 天** | ⚠️ 中等——权限逻辑需仔细审查 |
| [#1113](https://github.com/moltis-org/moltis/pull/1113) Telegram hotfix | 2026-06-07 | 1 天 | 🔴 **建议 24h 内合并**——生产回归修复 |

**维护者提醒**：PR #1089 已开放 7 天且覆盖 6 个代码路径，建议加速审查以避免与后续流式/压缩改动产生合并冲突。社区 Issue #1107 无维护者响应，若计划支持移动端 Web 建议给予状态更新以维持社区参与。

---

*日报生成时间：2026-06-08 | 数据来源：GitHub API 快照*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-06-08

> **项目**: [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)（注：数据中实际指向 QwenPaw 仓库）
> **分析日期**: 2026-06-08
> **数据周期**: 过去 24 小时

---

## 1. 今日速览

过去 24 小时 CoPaw 社区保持**中等活跃度**，新增 5 条 Issues（全部开放）和 2 条 PR（均待合并），无版本发布。社区关注点呈现明显的**"两端分化"**：一端是围绕 v1.1.9/v1.1.10 的**稳定性危机**（本地模型无响应、前端交互异常），另一端是对**架构升级**的长线诉求（独立视觉模型、分层记忆系统）。PR 侧有首次贡献者参与通道渲染修复，同时 ACP 协议扩展进入持续审查阶段，整体项目处于"**修稳压舱、谋定后动**"的状态。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

| PR | 状态 | 进展说明 |
|:---|:---|:---|
| [#4995](https://github.com/agentscope-ai/QwenPaw/pull/4995) fix(channels): preserve renderer tool output | 🟡 待合并 | **首次贡献者提交**。修复通道渲染器在 `show_tool_details` 关闭时丢失工具输出附件和可见文本的问题，同时保留音频 `media_type`。此修复直接影响工具调用链的完整性，对依赖复杂工具工作流的 Agent 场景至关重要。 |
| [#4949](https://github.com/agentscope-ai/QwenPaw/pull/4949) feat(acp): advertise commands, surface errors, tool params, agent/model meta, file links | 🟡 审查中（更新于今日） | **ACP 协议核心扩展**。为终端 UI `paw` 提供命令发现、错误透传、工具参数、Agent/模型元数据及文件链接等能力。该 PR 已持续审查 4 天，今日仍有更新，说明协议设计在精细打磨中，是项目**生态扩展的关键基础设施**。 |

**整体评估**: 今日无合并进主线的代码，项目代码层面处于"蓄力"状态。ACP 协议扩展的落地将决定第三方客户端生态的丰富度，值得持续关注。

---

## 4. 社区热点

| 排名 | Issue/PR | 互动量 | 热点分析 |
|:---|:---|:---|:---|
| 🔥1 | [#4992](https://github.com/agentscope-ai/QwenPaw/issues/4992) 独立视觉模型配置 | 💬 2 评论 | **架构解耦诉求的集中爆发**。用户明确提出"视觉中转站"模式——纯文本主模型 + 独立视觉模型处理图片，避免为视觉能力绑架主模型选择。这与当前大模型市场"文本模型便宜、多模态模型贵"的成本结构高度契合，**具备成为差异化竞争力的潜力**。 |
| 🔥2 | [#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989) v1.1.9/1.1.10 本地千问3.6-27B 无响应 | 💬 2 评论 | **回归性故障引发信任危机**。同一模型、同一配置在 v1.1.5.post2 正常，升级后完全失效且无错误日志，属于**静默失败（silent failure）**——最难调试、最伤用户体验的 Bug 类型。Docker 部署 + vLLM 本地推理是生产环境典型配置，影响面不可小觑。 |
| 3 | [#4994](https://github.com/agentscope-ai/QwenPaw/issues/4994) 分层记忆系统 | 💬 1 评论 | Agent 框架的"标配焦虑"。社区明确点名"主流 agent 的分层记忆系统框架"，暗示 CoPaw 在记忆模块上已落后于 AutoGen、LangGraph 等竞品，**存在用户流失风险**。 |
| 4 | [#4993](https://github.com/agentscope-ai/QwenPaw/issues/4993) 图片预览拖动抖动 | 💬 1 评论 | 前端体验细节，macOS 特定版本问题，影响专业用户的工作流流畅度。 |
| 5 | [#4991](https://github.com/agentscope-ai/QwenPaw/issues/4991) 未命名 Question | 💬 1 评论 | 用户仅上传截图无文字描述，社区支持成本较高，反映部分用户尚未养成规范的 Issue 提交习惯。 |

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 影响版本 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|:---|
| 🔴 **P0-严重** | [#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989) | 本地千问3.6-27B 对话完全无响应，静默失败 | v1.1.9, v1.1.10 | ❌ 无 | **待紧急响应** |
| 🟡 **P1-中等** | [#4993](https://github.com/agentscope-ai/QwenPaw/issues/4993) | 图片放大拖动异常抖动 | V1.1.10 | ❌ 无 | 待处理 |
| 🟡 **P1-中等** | [#4995](https://github.com/agentscope-ai/QwenPaw/pull/4995) 相关 | 工具输出附件/文本丢失（已有 PR 修复） | - | ✅ [#4995](https://github.com/agentscope-ai/QwenPaw/pull/4995) | 待合并 |

**关键风险**: [#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989) 的"无错误日志"特征表明日志系统或异常捕获链存在缺陷，需优先复现并补充诊断日志。建议维护者要求用户提供：vLLM 服务端日志、QwenPaw 容器内网络连通性测试、以及 `1.1.5.post2 → 1.1.9` 的完整变更 diff 比对。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 纳入下一版本可能性 | 判断依据 |
|:---|:---|:---|:---|
| **独立视觉模型配置（Visual Model Fallback）** | [#4992](https://github.com/agentscope-ai/QwenPaw/issues/4992) | ⭐⭐⭐⭐☆ 高 | 架构改动相对隔离（新增配置项 + 路由逻辑），社区呼声明确，符合"模型解耦"行业趋势。若已有模型路由抽象，实现成本可控。 |
| **分层记忆系统 + 自进化逻辑** | [#4994](https://github.com/agentscope-ai/QwenPaw/issues/4994) | ⭐⭐⭐☆☆ 中 | 涉及核心架构重构，非短期可完成。但"主流 agent"的对比压力可能加速规划，建议维护者公开路线图回应社区焦虑。 |
| **ACP 协议扩展（命令发现、错误透传等）** | [#4949](https://github.com/agentscope-ai/QwenPaw/pull/4949) | ⭐⭐⭐⭐⭐ 极高 | 已在活跃审查中，是确定性的下一版本内容，直接支撑终端生态。 |

---

## 7. 用户反馈摘要

### 😣 核心痛点
- **升级恐惧**: "1.1.5.post2 正常，升级后失效"——用户对版本升级产生信任裂痕，担心"越升越崩"
- **诊断黑箱**: "后台也没有报错日志"——静默失败让用户无从自救，被迫依赖官方响应
- **架构锁定**: "不想为了视觉能力而更换主模型"——用户拒绝为单一功能支付模型替换成本

### 🎯 真实场景
- **成本敏感型部署**: 纯文本主模型（deepseek-v4-flash）+ 按需视觉处理，追求性价比最优解
- **本地私有化**: Docker + vLLM 千问3.6-27B，企业/个人私有部署的典型技术栈
- **专业工作流**: macOS 原生客户端的图片预览交互，设计师/分析师等视觉密集型用户

### 💡 隐含期待
- 版本发布需附带**更清晰的兼容性说明**和**降级路径**
- 日志系统需增强**链路追踪能力**，覆盖模型调用全生命周期

---

## 8. 待处理积压

| 类型 | 条目 | 创建时间 | 当前状态 | 提醒 |
|:---|:---|:---|:---|:---|
| PR | [#4949](https://github.com/agentscope-ai/QwenPaw/pull/4949) ACP 协议扩展 | 2026-06-03 | 审查中（已 4 天） | ⚠️ 协议设计需平衡扩展性与稳定性，建议设定明确合并 deadline 避免无限期审查 |
| Issue | [#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989) 本地模型无响应 | 2026-06-06 | 开放，无维护者响应 | 🚨 **最高优先级**。涉及版本回归，建议 24 小时内指派专人跟进 |
| Issue | [#4994](https://github.com/agentscope-ai/QwenPaw/issues/4994) 记忆系统 | 2026-06-07 | 开放，仅 1 评论 | 需维护者公开记忆模块路线图，哪怕是否定性回应也比沉默强 |

---

> **健康度评分**: 🟡 6.5/10
> - 优势: 社区活跃、首次贡献者出现、协议生态有规划
> - 风险: 版本回归 Bug 未响应、核心架构（记忆）落后竞品、PR 审查周期偏长

**明日建议关注**: [#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989) 是否有维护者介入、[#4949](https://github.com/agentscope-ai/QwenPaw/pull/4949) 是否进入最终审查轮次、是否有针对 [#4992](https://github.com/agentscope-ai/QwenPaw/issues/4992) 的技术可行性讨论。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-06-08

> **项目**: [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)  
> **日期**: 2026-06-08  
> **分析范围**: 过去24小时（2026-06-07 至 2026-06-08）

---

## 1. 今日速览

ZeroClaw 今日保持**高活跃度**：50 条 Issues 更新（33 新开/活跃，17 关闭）与 50 条 PR 更新（39 待合并，11 已合并/关闭），无新版本发布。社区讨论集中在**运行时稳定性**（daemon 模式上下文压缩、Webhook 安全）、**多模态通道能力**（语音投递修复、Telegram/Slack 路由）以及**v0.8.0 发布准备**。值得注意的是，v0.8.0 的发布 PR #7364 已开启，标志着该版本进入最终交付阶段，但多个核心功能 PR 仍标记"DO NOT MERGE"，显示发布前存在集成风险。

---

## 2. 版本发布

**无新版本发布**

- v0.8.0 发布准备中：[PR #7364](https://github.com/zeroclaw-labs/zeroclaw/pull/7364) `[chore(release): release v0.8.0]` 已开启，主要修复 `--no-default-features` 构建时的 `unused_imports` 警告
- 该版本预计包含 schema-v3 提供者架构、zerocode TUI 重大改进（主题系统、消息队列、模型切换器）、7 个新 OpenAI 兼容提供者等

---

## 3. 项目进展

### 已合并/关闭的关键 PR（11 条中精选）

| PR | 作者 | 核心贡献 | 影响评估 |
|:---|:---|:---|:---|
| [#7249](https://github.com/zeroclaw-labs/zeroclaw/pull/7249) | singlerider | **主题系统增强**：24-bit 色深回退、注册表生成预设、按代理覆盖、调色板样本 | **高** — 解决旧终端/macOS Terminal.app 的渲染乱码问题，提升 TUI 兼容性 |
| [#7190](https://github.com/zeroclaw-labs/zeroclaw/pull/7190) | singlerider | **出站消息队列**：替换硬阻塞输入，支持边栏查看与消息注入 | **高** — 根本性改善 zerocode 交互体验，消除响应期间的输入冻结 |
| [#7209](https://github.com/zeroclaw-labs/zeroclaw/pull/7209) | singlerider | **`/model` 与 `/model-provider` 实时切换器** | **高** — 无需退出重配即可切换模型，降低多模型工作流摩擦 |
| [#7178](https://github.com/zeroclaw-labs/zeroclaw/pull/7178) | singlerider | **按别名模型-提供者故障回退链** | **中高** — 重新引入显式声明的故障转移机制，替代被移除的 V2/V3 隐式机制 |
| [#7315](https://github.com/zeroclaw-labs/zeroclaw/pull/7315) | theonlyhennygod | **Bedrock 提示缓存兼容性修复**：跳过不支持缓存的模型 | **中** — 修复 Qwen 等非 Claude/Nova 模型的二次请求 400 错误 |
| [#7357](https://github.com/zeroclaw-labs/zeroclaw/pull/7357) | Audacity88 | **通道图像历史回归测试夹具更新** | **低** — 适配 model-provider-ref 字段变更 |
| [#7262](https://github.com/zeroclaw-labs/zeroclaw/pull/7262) | theonlyhennygod | **7 个 schema-v3 提供者使用文档** | **低** — 配套文档，降低新提供者采纳门槛 |
| [#7011](https://github.com/zeroclaw-labs/zeroclaw/pull/7011) | Audacity88 | **维护者工作流：Issue 所有权路径定义** | **中** — 流程改进，区分活跃指派人与架构监护人 |

**整体推进评估**：zerocode TUI 体验本周实现三连跳（主题→队列→模型切换），runtime 核心稳定性通过 Bedrock 修复和测试夹具更新得到加固。v0.8.0 功能集已基本冻结，进入集成收尾。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 👍 | 核心诉求 | 状态 |
|:---|:---|:---:|:---:|:---|:---|
| 1 | [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) Web dashboard 不可用 | 28 | 0 | **构建/分发流程缺陷**：Web UI 和 Tauri 桌面端持续提示未构建，跨版本未修复 | ✅ **已关闭** |
| 2 | [#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) 更好的 LOGO 设计 | 11 | 2 | **品牌识别**：社区设计师提交新方案，寻求采纳 | ⏳ 开放，需作者行动 |
| 3 | [#5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146) Skill 编译降低 Token 消耗 | 9 | 1 | **成本优化**：每次天气查询重复传输 400+ 行 SKILL.md，请求预编译/缓存机制 | ⏳ 已接受，高优先级 |
| 4 | [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) "完整" Docker 镜像 | 9 | 3 | **降低入门门槛**：非技术用户需要开箱即用的全功能镜像（含 WhatsApp 等） | ⏳ 已接受，被阻塞 |
| 5 | [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) NapCat/OneBot 通道缺失 | 9 | 0 | **生态兼容**：QQ 机器人社区主流协议 NapCat 未找到配置入口 | ⏳ 已接受 |

**诉求分析**：社区核心矛盾在于**"先进功能"与"易用性"的张力**——Token 最小化、A2A 协议、多代理路由等前沿功能持续推进，但基础分发（Docker 镜像完整性、Web UI 构建、通道协议覆盖）仍是新用户流失点。#4866 的关闭可能意味着该问题在 v0.8.0 中得到修复，需验证。

---

## 5. Bug 与稳定性

### 今日活跃 Bug Issues（按严重程度排列）

| 严重程度 | Issue | 描述 | Fix PR 状态 |
|:---|:---|:---|:---|
| **S0 - 数据丢失/安全风险** | [#4627](https://github.com/zeroclaw-labs/zeroclaw/issues/4627) | `file_write` 工具静默失败——文件写入成功但主机文件系统不可见（Docker 安全沙箱相关） | ⏳ **无 fix PR**，标记 in-progress |
| **S1 - 工作流阻塞** | [#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879) | Gemini CLI OAuth 完全不可用，认证后仍报 rate_limited | ⏳ **无 fix PR**，in-progress |
| **S1 - 工作流阻塞** | [#4873](https://github.com/zeroclaw-labs/zeroclaw/issues/4873) | 飞书集成后默认调用 LLM 而非 Agent | ⏳ **无 fix PR**，已接受 |
| **S2 - 体验降级** | [#4721](https://github.com/zeroclaw-labs/zeroclaw/issues/4721) | 日志输出至 stdout 而非 stderr，破坏管道命令 | ⏳ **无 fix PR**，已接受 |
| **S2 - 体验降级** | [#4880](https://github.com/zeroclaw-labs/zeroclaw/issues/4880) | daemon/通道模式下 `context_compression` 未触发 | ✅ **已关闭**（修复于近期提交） |
| **S2 - 体验降级** | [#4827](https://github.com/zeroclaw-labs/zeroclaw/issues/4827) | 通道模式仅存储最终文本，丢弃工具调用上下文 | ✅ **已关闭** |
| **S2 - 行为异常** | [#5122](https://github.com/zeroclaw-labs/zeroclaw/issues/5122) | `allowed_private_hosts` 对解析至私有 IP 的域名无效 | ✅ **已关闭** |

**稳定性评估**：今日关闭 3 个高/中严重 Bug，但 **S0 级数据丢失问题 #4627** 已长期未决，且涉及 Docker 安全沙箱架构，风险极高。Gemini OAuth 和飞书集成问题阻塞特定用户群体，需优先分配维护资源。

---

## 6. 功能请求与路线图信号

### 高概率纳入 v0.8.x 或 v0.9.0 的功能

| 功能 | Issue/PR | 信号强度 | 判断依据 |
|:---|:---|:---:|:---|
| **Schema-v3 提供者扩展** | PR [#7260](https://github.com/zeroclaw-labs/zeroclaw/pull/7260) + 7 新提供者 | ⭐⭐⭐⭐⭐ | PR 已就绪，文档已合并，v0.8.0 发布 PR 已开启 |
| **按别名 Webhook 路径路由** | Issue [#6312](https://github.com/zeroclaw-labs/zeroclaw/issues/6312) / PR [#7361](https://github.com/zeroclaw-labs/zeroclaw/pull/7361) | ⭐⭐⭐⭐⭐ | PR #7361 今日新建，含 RFC-6969 实现，修复双发/语音投递 bug |
| **Azure OpenAI reasoning_effort** | PR [#7350](https://github.com/zeroclaw-labs/zeroclaw/pull/7350) | ⭐⭐⭐⭐☆ | GPT-5.x/o-series 必需，PR 已提交 |
| **按回合输出路由 (`send_via`)** | PR [#7361](https://github.com/zeroclaw-labs/zeroclaw/pull/7361) | ⭐⭐⭐⭐☆ | 与 Webhook 路由同 PR，多通道场景核心能力 |
| **Skill 编译/Token 最小化** | Issue [#5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146) | ⭐⭐⭐☆☆ | 高评论活跃度，已接受，但实现复杂度高（涉及 agent/runtime/skills/tool 多域） |
| **A2A (Agent-to-Agent) 协议** | Issue [#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) | ⭐⭐⭐☆☆ | 7 👍 高社区支持，已接受，但标记高优先级后进展缓慢 |
| **多代理路由** | Issue [#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) | ⭐⭐⭐☆☆ | 9 👍 最高社区支持，对标 OpenClaw，架构改动大 |

### 长期愿景型（v0.9+）

- **气隙执行模式** [#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293)：离线代理容器 + Unix socket 伴生守护进程，安全敏感场景
- **Bubblewrap 沙箱可配置** [#5127](https://github.com/zeroclaw-labs/zeroclaw/issues/5127)：可写路径与网络访问控制

---

## 7. 用户反馈摘要

### 真实痛点

| 痛点 | 来源 | 场景 |
|:---|:---|:---|
| **"我构建了但 Web UI 仍不可用"** | [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) 评论 | 开发者反复执行 `cd web && npm ci && npm run build` 无效，怀疑构建产物未被 daemon 发现 |
| **"Docker 里文件写了但找不到"** | [#4627](https://github.com/zeroclaw-labs/zeroclaw/issues/4627) | CI/CD 场景下 agent 生成报告，宿主机目录挂载后文件消失，导致下游步骤失败 |
| **"Gemini 认证完还是报错"** | [#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879) | 企业用户偏好 Gemini 3 Flash，OAuth 流程完成后 API 调用仍失败，无法区分认证与授权问题 |
| **"日志混在 JSON 输出里"** | [#4721](https://github.com/zeroclaw-labs/zeroclaw/issues/4721) | 脚本化使用 `zeroclaw config schema` 时，INFO 日志污染 stdout 管道 |

### 满意点

- **zerocode TUI 迭代速度**：用户注意到近期主题、队列、模型切换的连续改进
- **提供者生态扩展**：7 个新 OpenAI 兼容提供者降低厂商锁定担忧

### 不满意/摩擦点

- **配置分散**：`[providers.X]` 配置与 `reliability.fallback_providers` 分离导致回退行为难以预测（[#4647](https://github.com/zeroclaw-labs/zeroclaw/issues/4647)）
- **安全误报**：`LeakDetector` 高熵启发式将 MD5 文件名、随机文件名误判为敏感 Token（[#4832](https://github.com/zeroclaw-labs/zeroclaw/issues/4832)）

---

## 8. 待处理积压

### 需维护者紧急关注

| Issue | 创建日期 | 最后更新 | 阻塞原因 | 建议行动 |
|:---|:---|:---|:---|:---|
| [#4627](https://github.com/zeroclaw-labs/zeroclaw/issues/4627) `file_write` 静默失败 | 2026-03-25 | 2026-06-07 | S0 数据丢失，Docker 安全沙箱交互复杂 | 指定 Docker/runtime 域专家，复现宿主机挂载场景 |
| [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) 完整 Docker 镜像 | 2026-03-15 | 2026-06-07 | 内存/功能权衡，CI 构建耗时 | 决策：是否提供 `zeroclaw:full` 标签，或文档化多阶段构建 |
| [#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293) 气隙执行模式 RFC | 2026-05-03 | 2026-06-07 | 架构改动大，需维护者评审 | 安排 RFC 评审会议，或拆分 MVP（Unix socket 代理先行） |
| [#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) LOGO 设计 | 2026-03-25 | 2026-06-07 | 标记 `needs-author-action`，设计师等待反馈 | 品牌决策：社区投票或核心团队裁定 |
| [#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879) Gemini OAuth 失效 | 2026-03-28 | 2026-06-07 | 认证与 API 调用链路分离，错误信息模糊 | 添加诊断日志，区分 OAuth token 获取与 API key 使用 |

### PR 侧积压

- **4 个 XL/L 级 PR 标记 "DO NOT MERGE"**（[#7249](https://github.com/zeroclaw-labs/zeroclaw/pull/7249), [#7190](https://github.com/zeroclaw-labs/zeroclaw/pull/7190), [#7209](https://github.com/zeroclaw-labs/zeroclaw/pull/7209), [#7178](https://github.com/zeroclaw-labs/zeroclaw/pull/7178)）：作者自管合并策略导致集成瓶颈，建议设定合并截止时间或转交维护者。

---

> **健康度评分**: 7.5/10  
> **优势**: TUI 体验快速迭代、提供者生态扩展、社区参与度高  
> **风险**: S0 Bug 长期未决、v0.8.0 发布前大型 PR 自管合并可能延迟交付、新用户入门门槛（Docker/构建）未系统性解决

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*