# OpenClaw 生态日报 2026-08-24

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-08-23 23:10 UTC

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

# OpenClaw 开源项目动态日报 2026-08-24

## 1. 今日速览

过去24小时内，OpenClaw 项目继续保持高活跃度：共更新 500 条 Issues（新开/活跃 452 条，关闭 48 条）和 500 条 PR（待合并 391 条，已合并/关闭 109 条），无新版本发布。当前项目正处于 v2026.8.1-beta.2 的发布验证阶段（[#125626](https://github.com/openclaw/openclaw/issues/125626)），维护者 steipete 在 Discord 通道、Gateway 重连、TTS 冷启动等多个方向持续提交修复 PR，整体呈现"发布前密集打磨"的态势。值得关注的是，P0 级 SQLite 损坏回归（[#126821](https://github.com/openclaw/openclaw/issues/126821)）与多起消息丢失类问题（[#127710](https://github.com/openclaw/openclaw/issues/127710)、[#126246](https://github.com/openclaw/openclaw/issues/126246)）仍在排查中，稳定性是当前版本的主要挑战。

## 2. 版本发布

过去24小时无新版本发布。当前处于 v2026.8.1-beta.2 验证阶段，相关进展见 [#125626](https://github.com/openclaw/openclaw/issues/125626)。

## 3. 项目进展

今日共有 109 条 PR 被合并或关闭，以下为关键合并项：

**稳定性与修复**

- [PR #126566](https://github.com/openclaw/openclaw/pull/126566)（合入候选）：修复主模型失败后 fallback 任务悬挂的问题，关闭 [#126311](https://github.com/openclaw/openclaw/issues/126311)（任务一直 running，取消提示 "already terminal"）
- [PR #128371](https://github.com/openclaw/openclaw/pull/128371)（已关闭）：修复 beta.3 发布阻塞——聚焦版 beta 验证证据被规范化拒绝的问题，配套 PR #128405 已跟进
- [PR #116489](https://github.com/openclaw/openclaw/pull/116489)（已关闭）与 [PR #120900](https://github.com/openclaw/openclaw/pull/120900)（已关闭）：联合落地安装策略警告（install policy warnings）的 CLI 确认与 UI 审查流程，提升供应链安全
- [PR #123975](https://github.com/openclaw/openclaw/pull/123975)（已关闭）：加固 tsgo 编译器进程树的清理逻辑，减少超时/信号残留进程

**渠道与 UI 改进**

- [PR #113520](https://github.com/openclaw/openclaw/pull/113520)（待合并）：修复 MEDIA 泄漏、大视频宽高比、steered webchat 接管三类投递缺陷
- [PR #121576](https://github.com/openclaw/openclaw/pull/121576)（待合并）：修正 `stripModelSpecialTokens` 在剥离 token 时仅应在相邻单词字符间插入分隔符的问题
- [PR #124301](https://github.com/openclaw/openclaw/pull/124301)（待合并）：重构 Control UI 编辑器为多行输入面，统一布局与状态管理

**项目成熟度信号**：安全相关 PR（install policy）合入比重明显上升；发布流程自动化（beta 证据机制）正在补强；多条修复 PR 自带 proof 标签（截图/视频），验证规范趋于完善。

## 4. 社区热点

| Issue/PR | 评论数 | 关注点 |
|---|---|---|
| [#125626](https://github.com/openclaw/openclaw/issues/125626) Release validation: v2026.8.1-beta.2 | 18 | 版本发布验证，社区测试者协作 |
| [#119796](https://github.com/openclaw/openclaw/issues/119796) Windows vitest teardown EBUSY | 15 | Windows 平台测试稳定性 |
| [#121953](https://github.com/openclaw/openclaw/issues/121953) Cron agent stall on DeepSeek | 13 | 模型供应商 API 行为差异导致的核心功能受损 |
| [#39476](https://github.com/openclaw/openclaw/issues/39476) A2A sessions_send 重复消息 | 12 | A2A 协议设计缺陷，存在 5 个月未修复 |
| [#6599](https://github.com/openclaw/openclaw/issues/6599) /models test-fallback 命令 | 11 | 模型 fallback 链验证需求 |

**热点分析**：社区讨论集中在三类诉求——(1) 发布验证的透明度（#125626）；(2) 特定平台（Windows）与特定模型（DeepSeek）的适配问题（#119796、#121953）；(3) 长期悬而未决的架构级问题（#39476 的 A2A 消息去重）持续获得关注，用户对老 issue 的推进速度存在不满。

## 5. Bug 与稳定性

按严重程度排列：

**P0 级**

- [SQLite 损坏反复出现（#126821）](https://github.com/openclaw/openclaw/issues/126821)——全新重建的数据库在 15-24 小时内再次损坏，出现 "paralyzed gateway" 模式。**无 fix PR**，需紧急排查 freelist miscount 根因

**P1 级**

- [prepared-model-runtime 故障导致消息丢失（#127710）](https://github.com/openclaw/openclaw/issues/127710)——指纹漂移导致网关永久卡死 + owner-commit 竞态丢消息。**无 fix PR**
- [Voice Mode 删除会话记录（#126423）](https://github.com/openclaw/openclaw/issues/126423)——macOS App 中 voice 对话框不保存且布局损坏。**无 fix PR**
- [Cron agent 在 DeepSeek 上停滞（#121953）](https://github.com/openclaw/openclaw/issues/121953)——`[cron:...]` 前缀被 DeepSeek API 降级处理。**无 fix PR**
- [Telegram 外发消息卡在 send_attempt_started 并在重启后丢失（#126246）](https://github.com/openclaw/openclaw/issues/126246)。**无 fix PR**
- [Fallback 模型在主模型 terminal error 后继续运行（#126311）](https://github.com/openclaw/openclaw/issues/126311)。**已有 fix PR [#126566](https://github.com/openclaw/openclaw/pull/126566)**
- [子进程泄漏导致僵尸进程累积（#97616）](https://github.com/openclaw/openclaw/issues/97616)——hook/tool 子进程未被正确回收，运行时性能渐进劣化。**无 fix PR**
- [原生 Codex 压实后重复发送消息（#126707）](https://github.com/openclaw/openclaw/issues/126707)。**无 fix PR**

**P2 级**

- [Windows vitest teardown EBUSY（#119796）](https://github.com/openclaw/openclaw/issues/119796)——agent state DB 句柄未释放。**有 linked PR**
- [混合记忆搜索返回虚假相似度 1.0（#115001）](https://github.com/openclaw/openclaw/issues/115001)——FTS LIKE 回退硬编码 textScore。**有 linked PR**
- [压实严格模式误判十进制片段为标识符（#126016）](https://github.com/openclaw/openclaw/issues/126016)——导致 guard_blocked。**有 linked PR**
- [远程扩展配对竞态（#127728）](https://github.com/openclaw/openclaw/issues/127728)——gateway 在扩展 attach 前 ~10ms 拒绝请求。**有 linked PR**

**趋势判断**：Windows 平台稳定性、SQLite 持久层可靠性、以及围绕 sessions_send/消息投递的生命周期问题构成当前稳定性三大短板。部分 P1 已存在关联修复 PR，但多数仍停留在"已复现待修复"状态。

## 6. 功能请求与路线图信号

| Issue | 需求 | 状态 |
|---|---|---|
| [#6599](https://github.com/openclaw/openclaw/issues/6599) /models test-fallback 命令 | 在不触发真实故障的前提下验证 fallback 链有效性 | 开放中，获 👍1，评论 11 |
| [#72591](https://github.com/openclaw/openclaw/issues/72591) 每-agent MCP server 作用域 | 避免所有 MCP 服务器为所有 agent 重复启动（12 agents × 10 servers = 120 进程） | 开放中，含 security 标签 |
| [#99583](https://github.com/openclaw/openclaw/issues/99583) 智能会话自动标题 | 利用现有 llm-slug-generator 实现懒生成、主题感知重命名 | 开放中，获 👍2 |
| [#75947](https://github.com/openclaw/openclaw/issues/75947) UI 质量全面升级 | 基于无障碍与人体工学标准重构配置页面 | 开放中，获 👍2 |
| [#79458](https://github.com/openclaw/openclaw/issues/79458) 斜杠命令描述 i18n | 为中文等非英语用户本地化命令描述 | 开放中，获 👍1 |
| [#91455](https://github.com/openclaw/openclaw/issues/91455) Kubernetes 文档改进 | 现有安装说明体验不佳，考虑 Helm 的适用性说明 | 开放中，获 👍1 |

**路线图信号**：MCP server 资源效率（#72591）与模型 fallback 可观测性（#6599）的呼声较高，且与近期稳定性主题契合，有望在后续版本获得优先处理。UI 相关请求（#75947、#79458、#91455）均属体验优化，尚未出现对应 PR。

## 7. 用户反馈摘要

**满意/正面反馈**：

- 发布验证流程（#125626）中多位测试者协作，模板化验证方式获得认可
- PR 附带 proof（截图/视频/链接）的做法获得维护者与贡献者双方认可

**不满意/痛点**：

- **DeepSeek 集成体验**：Cron agent 因前缀被 API 降级而停滞（#121953），用户对模型兼容性测试不足表达不满
- **Windows 平台长期二等公民**：EBUSY 问题（#119796）与 Scheduled Task 不驻留（#91144）说明 Windows 支持仍有大量打磨空间
- **A2A 架构缺陷悬置过久**：#39476 自 3 月创建至今 5 个月仍在开放，用户询问进展
- **配置与文档不一致**：多个渠道的 `historyLimit` 覆盖被 schema 拒绝（PR #118152），SecretRef 的 `provider: "default"` 魔法别名未在文档中说明（#121083），文档驱动的配置体验有待改进
- **会话状态类问题频繁出现**：session-state 与 message-loss 标签下的 issue 密度较高，用户对"消息发出但未送达"类bug容忍度较低

## 8. 待处理积压

**长期未响应的关键 Issue**

| Issue | 创建时间 | 持续时间 | 描述 |
|---|---|---|---|
| [#39476](https://github.com/openclaw/openclaw/issues/39476) | 2026-03-08 | ~5.5 个月 | A2A sessions_send 重复消息（P1，diamond lobster） |
| [#6599](https://github.com/openclaw/openclaw/issues/6599) | 2026-02-01 | ~6.5 个月 | /models test-fallback 功能请求 |
| [#54157](https://github.com/openclaw/openclaw/issues/54157) | 2026-03-25 | ~5 个月 | Doubao/BytePlus 模型缓存定价为 0，成本计算失真 |
| [#60612](https://github.com/openclaw/openclaw/issues/60612) | 2026-04-04 | ~4.5 个月 | doctor 警告 NVM node 但无法修复 |
| [#56619](https://github.com/openclaw/openclaw/issues/56619) | 2026-03-28 | ~5 个月 | WhatsApp 配对批准后无通知 |
| [#77694](https://github.com/openclaw/openclaw/issues/77694) | 2026-05-05 | ~3.5 个月 | acpx flow run 输出空字符串 |

**建议关注**：#39476 虽被标记 `linked-pr-open` 但 5 个月未合入，建议维护者明确时间表或说明阻塞原因；#54157 属成本核算错误，影响使用 Doubao/BytePlus 模型用户的费用可视化，修复成本预计较低，适合作为新手任务。

**今日新增高龄信号**：#72591（MCP scoping）自 4 月开放已 4 个月，随着 MCP 生态扩大，120 进程的资源浪费问题会愈发严重，建议提升优先级。

---

*本日报由 AI 分析师自动生成，数据来源于 OpenClaw GitHub 仓库公开信息。*

---

## 横向生态对比

# 个人 AI 智能体开源生态横向对比分析报告（2026-08-24）

## 1. 生态全景

个人 AI 助手/自主智能体开源生态正处于从"功能验证"向"生产可用"跨越的关键阶段。以 OpenClaw 为核心的 **-Claw 家族**（NanoClaw、PicoClaw、NullClaw、ZeroClaw、ZeptoClaw 及 CoPaw）已形成规模化衍生生态，头部项目单日 PR/Issue 更新量达 50–500 条，但 SQLite 损坏、消息丢失/重复投递等数据面可靠性问题成为普遍痛点。安全左移趋势明显，SSRF 防护、凭据隔离、沙箱加固在同一天内于多个项目集中涌现。MCP 协议从"可用"进入"生产化"打磨期，连接生命周期、鉴权升级与资源隔离成为跨项目共同议题。整体呈现"头部高活跃收敛、尾部维护停滞"的两极分化格局，生态正在经历一轮由稳定性驱动的自然筛选。

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 合入/关闭 | Release 动态 | 健康度 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（452 活跃 / 48 关闭） | 500（391 待合并 / 109 合入关闭） | 109 PR + 48 Issue | 无（v2026.8.1-beta.2 验证中） | ★★★★☆ 高活跃，P0 稳定性隐患 |
| **ZeroClaw** | 50（38 活跃 / 12 关闭） | 50（45 待合并 / 5 合入关闭） | 5 PR + 12 Issue | 无 | ★★★★☆ 高活跃，架构收敛期 |
| **Hermes Agent** | 50（36 活跃 / 14 关闭） | 50（33 待合并 / 17 合入关闭） | 17 PR + 14 Issue | 无 | ★★★★☆ 安全响应迅速 |
| **NanoClaw** | 4（3 活跃 / 1 关闭） | 50（30 待合并 / 20 合入关闭） | 20 PR + 1 Issue | 无（v2.3.0 冲刺） | ★★★★☆ 发布前密集打磨 |
| **IronClaw** | 9（全活跃） | 24（19 待合并 / 5 合入关闭） | 5 PR（均 Dependabot） | 无（v1.4.0 推进） | ★★★☆☆ 集成认证 Bug 堆积 |
| **CoPaw** | 5（全活跃） | 14（6 待合并 / 8 合入关闭） | 8 PR | 无 | ★★★☆☆ 高严重度 Bug 无修复 |
| **NanoBot** | 2（1 新开 / 1 关闭） | 19（14 待合并 / 5 合入关闭） | 5 PR + 1 Issue | 无 | ★★★☆☆ 功能扩展期 |
| **Moltis** | 3（2 活跃 / 1 关闭） | 6（全待合并） | 0 PR + 1 Issue | 无 | ★★☆☆☆ 合并瓶颈 |
| **PicoClaw** | 0 新开（2 stale 关闭） | 7（2 开放 / 5 stale 关闭） | 0 | 无 | ★★☆☆☆ 维护清理 |
| **LobsterAI** | 0 新开（4 stale 关闭） | 3（全 stale 关闭） | 0 | 无 | ★★☆☆☆ 停滞 |
| **NullClaw** | 1（新开） | 0 | 0 | 无 | ★★☆☆☆ 观望 |
| **ZeptoClaw** | 0 | 0 | 0 | 无 | ★☆☆☆☆ 休眠 |

**结论**：OpenClaw 单日更新量是第二梯队（50 条量级）的 **10 倍**，社区规模断层领先；ZeroClaw、Hermes Agent、NanoClaw 组成第二集团；Moltis 及以下项目活跃度走低，其中 PicoClaw、LobsterAI 出现"安全修复 PR 被 stale 关闭但问题未解决"的危险信号。

## 3. OpenClaw 在生态中的定位

**社区规模**：单日 500 Issues + 500 PRs 更新、109 条 PR 合入关闭，远超同行一个数量级；维护者 steipete 高频响应，P0/P1 问题当日即有讨论与修复推进，属典型的"大社区 + 核心团队强控"模式。

**生态辐射**：NanoClaw、PicoClaw、NullClaw、ZeroClaw、ZeptoClaw 及 CoPaw（QwenPaw）在命名与领域概念（gateway、渠道、MCP、agent、会话持久化）上均与 OpenClaw 高度同源，OpenClaw 事实上承担了 **-Claw 家族上游参考实现**的角色。

**技术路线差异**：

| 维度 | OpenClaw | 对比项 |
|---|---|---|
| 发展驱动 | 发布驱动：beta 证据机制 + proof 标签，工程质量规范成熟 | ZeroClaw 走 RFC 驱动（WASM 插件化愿景），Hermes Agent 走安全/桌面体验驱动 |
| 架构重心 | 全栈通用（网关 + 渠道 + Agent + UI），SQLite 统一持久化 | IronClaw 聚焦 per-user 沙箱与凭据代理；Moltis 聚焦隐私与本地嵌入 |
| 合入节奏 | 109 条合入/关闭，合入率高，发布前密集打磨 | ZeroClaw 仅 5 条合入但 45 条待合并，呈"评审积压" |
| 当前最大风险 | SQLite 损坏 P0（#126821）+ 消息丢失类问题未闭环 | Hermes 的 profile 切换缺陷、ZeroClaw 的 45 条 PR 积压 |

**核心优势**：发布工程严谨度（install policy 供应链安全、beta 验证规范化）与渠道/功能覆盖广度目前无同类可及；**核心短板**：数据层可靠性（SQLite、消息生命周期）尚未达到与其社区规模匹配的稳定度，A2A 协议去重缺陷悬置 5 个月未修复。

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **MCP 生产化** | Moltis（#1231 重启后连接失效）、NullClaw（#991 stdio 锁无限挂起）、OpenClaw（#72591 每-agent 作用域，12 agents × 10 servers = 120 进程）、PicoClaw（#3302 OAuth 2.1）、NanoBot（#5388 schema 字节预算） | 连接生命周期管理、锁超时、资源隔离、现代鉴权 |
| **消息可靠性与幂等** | OpenClaw（#127710 消息丢失、#39476 A2A 重复）、NanoClaw（#2404 双路径重复投递、#3457 UNIQUE 约束崩溃）、CoPaw（#7217 对话状态污染） | 幂等写入、去重机制、投递状态机 |
| **沙箱与供应链安全** | ZeroClaw（#10098 Landlock DNS、#9977 工作区写入限制）、PicoClaw（#3322–3324 多渠道 SSRF）、Hermes（#93230/#77463 凭据泄漏）、OpenClaw（install policy 合入） | 最小权限、出站过滤、凭据隔离 |
| **模型 Fallback 与可观测性** | OpenClaw（#126311 fallback 悬挂 + #6599 test-fallback 命令）、Hermes（#79840 被 ban 凭据处理）、CoPaw（#7219 Token 用量趋势） | fallback 链可验证、用量/配额可视化 |
| **Windows 平台支持** | OpenClaw（#119796 EBUSY）、Hermes（#91675 gateway 6 秒误杀、#75460 更新超时）、CoPaw（#6203 tasklist 探测加固） | 测试稳定性、启动流程、更新机制 |
| **Cron/定时任务可靠性** | OpenClaw（#121953 Cron agent 停滞）、ZeroClaw（#6105 cron 上下文缺失）、Moltis（#1226 输出回投来源会话） | 模型兼容、上下文传递、结果路由 |
| **第三方集成认证** | IronClaw（#7828–7830 Notion/Gmail/Slack 同日故障）、NanoBot（#5444 Docker OAuth 持久化）、CoPaw（#7053 refresh_token 轮换丢失） | OAuth 弹窗、凭据持久化、错误反馈 |

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 关键架构特征 |
|---|---|---|---|
| **OpenClaw** | 全栈通用助手，发布工程标杆 | 开发者/团队/企业 | 网关 + 渠道 + Agent + UI，SQLite 持久化，proof 验证机制 |
| **ZeroClaw** | 平台化/插件化，"everything is a plugin" | 架构师、自托管社区 | RFC 驱动，WASM 三层插件架构，去中心化社交渠道（Lemmy/Mastodon/Zulip） |
| **Hermes Agent** | 桌面优先 + Bot 多代理协作 | 桌面重度用户、安全敏感组织 | 桌面壳 + gateway，child-env 安全边界，Bot Mode 可靠性项目 |
| **NanoClaw** | Chat SDK 深度集成、渠道体验精修 | IM 重度用户 | Chat SDK 4.32.0 统一锁定，Discord 审批流，打字指示器生命周期 |
| **IronClaw** | NEAR 生态 + 远程沙箱 | NEAR 开发者 | per-user 持久化容器，iron-proxy 凭据代理，CI 四轨道（T1–T4）|
| **CoPaw** | Qwen 生态 + 技能生命周期 + 用量观测 | Qwen/AgentScope 用户 | 动态技能加载/卸载，Token Usage 趋势，OAuth2 持久化 |
| **NanoBot** | 轻量、WebSocket 优先、Docker 友好 | 个人开发者/研究者 | 单进程多角色（agent/webui/gateway），MCP 精细管理 |
| **Moltis** | 隐私优先 + 安全默认 | 企业、隐私敏感用户 | 本地 GGUF 嵌入，fail-closed 安全钩子，ALPN/WebSocket 兼容 |
| **PicoClaw** | 多 IM 渠道嵌入式 | 国内 IM/多频道用户 | WhatsApp/企微/微信渠道，SSRF 修复停滞 |
| **LobsterAI** | 网易 NIM 集成 | 网易生态企业 | nimGateway，NIM 超大群支持，存在 key 泄漏风险 |
| **NullClaw** | 极简部署、混合模式 | 基础设施运维 | 常驻 gateway + 独立 agent，Proxmox MCP bridge |

## 6. 社区热度与成熟度

**第一梯队 · 发布冲刺/快速迭代期（日更新 50–500 条）**
- **OpenClaw**：发布验证阶段，合入量大（109 条），工程规范成熟，但稳定性问题（SQLite/消息丢失）尚未闭环。
- **NanoClaw**：v2.3.0 发布冲刺，单日合入 20 条 PR，对高严重度 Issue（Discord 审批按钮）实现 24 小时关闭，响应速度突出。
- **Hermes Agent**：安全修复（CRITICAL 凭据泄漏当日修复）+ 桌面稳定性并行推进，合入率 34%，为头部最高。

**第二梯队 · 架构收敛/质量巩固期（日更新 9–50 条）**
- **ZeroClaw**：RFC 密集（会话所有权、附件架构、WASM 插件化），安全加固质量高，但 45 条 PR 待合并形成积压风险。
- **IronClaw**：CI 重构 + v1.4.0 沙箱基建双线推进，工程严谨度极高（THROWAWAY 验证分支），但功能合入停滞（今日合入全为 Dependabot），且第三方集成认证 Bug 集中爆发。
- **CoPaw**：技能动态加载与会话标题功能收尾成功，但内存泄漏（20.7GB）与对话状态污染等高严重度 Issue 无修复 PR。

**第三梯队 · 正常维护期（日更新 2–24 条）**
- **NanoBot**：Docker OAuth、WebUI 修复落地，渠道扩展健康，社区反馈质量高。
- **Moltis**：贡献者产出密集（6 个 PR 待合），但合并通道为零，长期 TLS/WebSocket Bug（#245）悬置近 6 个月。

**第四梯队 · 停滞/清理期（日更新 ≤1 条或全为 stale 清理）**
- **PicoClaw、LobsterAI、NullClaw、ZeptoClaw**：今日均无实质代码合入。PicoClaw 与 LobsterAI 出现"修复方案已提交但被 stale 关闭、底层问题仍未解决"的恶性循环，项目活跃度已不足以支撑安全维护。

## 7. 值得关注的趋势信号

1. **消息投递可靠性是头号信任危机**：OpenClaw 多条 P1 消息丢失、NanoClaw 双路径重复投递与约束崩溃、CoPaw 对话状态污染在同一天出现。用户对"消息发出但未送达/重复送达"零容忍。**参考价值**：幂等写入、at-least-once 语义、去重机制应作为基础设施而非事后补丁。

2. **MCP 正从"协议 demo"走向"生产负载"**：连接重启失效（Moltis）、锁死锁（NullClaw）、120 进程资源浪费（OpenClaw）、OAuth 2.1 诉求（PicoClaw）集中出现。**参考价值**：新一代 MCP 框架需默认内置超时、重连、作用域隔离与鉴权，而非依赖各 Agent 自行实现。

3. **安全左移成为社区默认预期**：同一天内 Hermes 关闭 2 个 CRITICAL 凭据泄漏、ZeroClaw 提交 Landlock 沙箱补全、PicoClaw 积累 3 个渠道 SSRF 修复、OpenClaw 合入安装策略警告。**参考价值**：安全审查应进入 CI 门禁与发布流水线，凭据隔离应在架构层设计而非运行后修补。

4. **第三方集成认证流程是生态共同瓶颈**：IronClaw 三个高优 OAuth/安装故障同日上报、NanoBot Docker OAuth 凭据丢失、CoPaw refresh_token 轮换未持久化。**参考价值**：OAuth 流程需要可操作的错误反馈与跨重启的凭据持久化设计，这是渠道类功能能否被企业采纳的前置条件。

5. **Windows 平台支持仍是系统性短板**：OpenClaw（EBUSY）、Hermes（gateway 误杀、更新超时）、CoPaw（tasklist 闪窗）同日暴露 Windows 问题。**参考价值**：将 Windows runner 纳入默认 CI 矩阵，可显著降低生态内重复报障成本。

6. **模型 fallback 与用量可观测性成为企业采纳前提**：OpenClaw 用户呼吁 `/models test-fallback` 命令、CoPaw 上线全 Agent Token 趋势图、Hermes 提交 OAuth 配额可视化 PR。**参考价值**：多模型路由策略需要配套验证工具链与成本可视化，否则难以在真实生产环境中信任。

7. **架构分岔正在形成：工程交付 vs 平台化愿景**：OpenClaw/NanoClaw 走"发布驱动、快速合入"路线，ZeroClaw 走"RFC 驱动、WASM 插件化"路线。前者合入率高但积累技术债，后者架构清晰但面临 45 条 PR 积压的吞吐瓶颈。**参考价值**：团队需尽早明确自身定位——"快速交付占领市场"与"平台化沉淀生态"难以兼得，中间路线可能导致两端承压。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-08-24）

## 1. 今日速览

NanoBot 过去 24 小时保持较高活跃度：共 19 条 PR 更新，其中 5 条已合并/关闭、14 条仍处于待合并状态；Issue 侧有 2 条更新，1 条已解决、1 条为新功能请求。核心维护者 chengyongru 贡献了今日大部分 PR，覆盖配置编辑器、新渠道集成、WebUI 修复与性能优化，显示项目正同时在稳定性和功能扩展两条线推进。无新版本发布，但合并的多项修复为下一次发版积累了实质性变更。

## 2. 版本发布

本报告周期内无新版本发布（最新 Releases 为空）。

## 3. 项目进展

今日共有 5 个 PR 被合并/关闭，涉及运行时恢复、Docker 可靠性、WebUI 修复、CLI 可观测性和代码健康度：

- [PR #5420](https://github.com/HKUDS/nanobot/pull/5420)（已合并）— **feat(runtime): add user-controlled turn recovery**。为中断的 WebSocket turn 增加用户控制恢复机制，在 WebUI 与 TUI 中提供显式 Continue/Dismiss 操作，避免自动恢复带来的不确定性。
- [PR #5445](https://github.com/HKUDS/nanobot/pull/5445)（已合并）— **fix(docker): persist OAuth client data**。修复 Docker 容器中 OAuth 凭据无法持久化的问题，将 XDG 应用数据指向已挂载的实例目录，并保证非 root 用户可写。
- [PR #5491](https://github.com/HKUDS/nanobot/pull/5491)（已合并）— **fix(webui): keep answer text outside reasoning shell**。修复多轮 answer→tool→answer 切换时答案文本被误置于 reasoning 区域的问题。
- [PR #5492](https://github.com/HKUDS/nanobot/pull/5492)（已合并）— **feat(cli): expose nanobot process identities**。为 CLI 进程赋予可识别的角色名（如 `nanobot-agent`、`nanobot-webui`、`nanobot-gateway`），提升进程管理体验。
- [PR #5475](https://github.com/HKUDS/nanobot/pull/5475)（已合并）— **refactor: remove remaining dead code**。清除零消费者代码、无效配置字段及未使用的 `websocket-client` 依赖，保持动态入口和公共兼容性。

整体来看，项目在中断恢复、容器部署可靠性、UI 正确性、可观测性和技术债清理五个方面均有实际进展，为下一版本奠定了基础。

## 4. 社区热点

- [Issue #5444](https://github.com/HKUDS/nanobot/issues/5444)（已关闭，2 条评论）— 今日最受关注的问题：用户在 Docker 中通过 OAuth 登录 OpenAI 失败，错误出现在授权码交换环节。该问题已由 [PR #5445](https://github.com/HKUDS/nanobot/pull/5445) 修复，且已合并。
- [Issue #5493](https://github.com/HKUDS/nanobot/issues/5493)（新开）— 用户请求在 Channel 相关界面中支持 HTML、.txt、.md 等文档的预览，提出了基于原生 iframe + srcdoc 的沙箱隔离方案。

社区讨论集中在两件事：一是 Docker 部署环境的真实可用性（OAuth 问题影响实际使用），二是对文档类内容预览的需求——说明用户已不满足于纯文本展示，正在将 NanoBot 用于更丰富的文档交互场景。

## 5. Bug 与稳定性

今日报告的 Bug/回归问题按严重程度排列如下（均已有对应 PR）：

| 严重程度 | 问题 | 状态 | 修复 PR |
|---------|------|------|---------|
| 高 | [Issue #5444](https://github.com/HKUDS/nanobot/issues/5444) Docker 中 OpenAI OAuth 登录失败 | 已关闭 | [PR #5445](https://github.com/HKUDS/nanobot/pull/5445)（已合并） |
| 中 | [PR #5500](https://github.com/HKUDS/nanobot/pull/5500) Codex provider 为每次请求重复构造 TLS context，导致性能退化 | 待合并 | 同一 PR 内修复 |
| 中 | [PR #5496](https://github.com/HKUDS/nanobot/pull/5496) AgentRunner 无工具请求缺少 wall-clock 超时保护，可能长时间挂起 | 待合并 | 同一 PR 内修复 |
| 低 | [PR #5491](https://github.com/HKUDS/nanobot/pull/5491) WebUI 答案文本被错误归入 reasoning 区域 | 已合并 | 同一 PR |

此外，3 个 PR（[#5480](https://github.com/HKUDS/nanobot/pull/5480)、[#5467](https://github.com/HKUDS/nanobot/pull/5467)、[#5430](https://github.com/HKUDS/nanobot/pull/5430)）带有 `conflict` 标签，需要解决分支冲突，请维护者优先处理，以避免阻塞合并进度。

## 6. 功能请求与路线图信号

- [Issue #5493](https://github.com/HKUDS/nanobot/issues/5493) — **HTML/.txt/.md 文档预览**。用户明确提出了方案（iframe + srcdoc 沙箱隔离），目前尚无对应 PR，但实现成本较低且需求场景明确，有可能在后续版本被纳入。
- [PR #5495](https://github.com/HKUDS/nanobot/pull/5495) — **原生 Linear Agent 渠道**。新增 Linear 渠道，含 OAuth PKCE、SQLite 持久化 Webhook 队列与 WebUI 配置流程，属于渠道生态扩展。
- [PR #5497](https://github.com/HKUDS/nanobot/pull/5497) 与 [PR #5498](https://github.com/HKUDS/nanobot/pull/5498) — **配置编辑器契约与 Agent TUI 统一 onboarding**。两个 PR 来自同一位作者，搭建了传输无关的全量配置编辑契约，并在 TUI 中新增 `/config` 界面，属于配置体验的较大升级。
- MCP 方向有 3 个 PR 待合并：[#5386](https://github.com/HKUDS/nanobot/pull/5386)（保留 MCP Apps 元数据）、[#5388](https://github.com/HKUDS/nanobot/pull/5388)（模型可见 MCP schema 字节预算）。这些 PR 共同指向 MCP 生态的精细化管理能力。

综合来看，下一版本可能包含：新的 Linear 渠道、统一配置编辑体验、MCP 增强，以及文档预览（如被采纳）。

## 7. 用户反馈摘要

- **Docker OAuth 痛点（Issue #5444）**：用户反馈在 Docker 中运行 NanoBot 时 OAuth 登录失败，根因是 OAuth 客户端凭据存储默认写入 XDG 数据目录，而容器中该目录不可写且无法跨容器持久化。该问题已通过 PR #5445 解决，用户侧无需额外配置即可获得修复。
- **文档预览需求（Issue #5493）**：用户希望直接在 NanoBot 中预览 HTML/文本文档，且主动提出安全方案（iframe srcdoc + 沙箱隔离），说明用户具备安全意识，也更倾向于轻量、内建的能力而非外链。
- 今日 PR 侧反馈较少，大多数工作来自核心维护者，社区直接反馈的声音相对有限。

## 8. 待处理积压

以下 PR 长期未合并或存在合并障碍，建议维护者重点关注：

- [PR #5152](https://github.com/HKUDS/nanobot/pull/5152) — **fix(subagent): mark partial completion results**（2026-07-28 创建，近一个月未合并）。修复子代理部分完成结果标记问题，属于可靠性修复，积压时间较长。
- [PR #5385](https://github.com/HKUDS/nanobot/pull/5385) — **fix(matrix): complete Element SAS request flow**（2026-08-13 创建）。完善 Element SAS 验证流程，涉及安全相关逻辑，建议尽快 review。
- [PR #5386](https://github.com/HKUDS/nanobot/pull/5386) 与 [PR #5388](https://github.com/HKUDS/nanobot/pull/5388)（均 2026-08-13 创建）— MCP 相关功能增强，待合并超过 10 天。
- 冲突待解决：[PR #5480](https://github.com/HKUDS/nanobot/pull/5480)、[PR #5467](https://github.com/HKUDS/nanobot/pull/5467)、[PR #5430](https://github.com/HKUDS/nanobot/pull/5430) — 三个 PR 均带有 `conflict` 标签，需要维护者协助解决冲突，否则可能进一步拖延交付周期。

---

**项目健康度评估**：合并/关闭比例 5/19（26%），活跃 PR 数量较多，但存在 3 个冲突和 1 个近一个月的积压，合并管线有一定阻塞风险。整体项目处于功能快速扩展与稳定性修复并行的阶段，社区反馈质量较高（问题明确、方案具体），项目响应速度良好。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

## Hermes Agent 项目日报 — 2026-08-24

### 1. 今日速览
过去 24 小时项目活跃度维持高位：共产生 50 条 Issue 更新（新开/活跃 36 条，关闭 14 条）和 50 条 PR 更新（待合并 33 条，已合并/关闭 17 条），无新版本 Release。今日重点集中在**安全漏洞修复**（多个 child-env 凭据泄漏问题被修复）、**桌面应用稳定性**（gateway 重连、profile 切换、认证页面提示）以及 **Bot Mode 可靠性** 相关讨论。整体来看，社区反馈积极，安全响应迅速，但仍有大量待处理积压，尤其是多 profile 切换、Windows 兼容性和 Bot 模式问题。

---

### 2. 版本发布
今日无新版本发布。

---

### 3. 项目进展
今日合入/关闭的 PR 主要聚焦于桌面端和 Dashboard 的稳定性修复：

- **[#93288](https://github.com/NousResearch/hermes-agent/pulls/93288) — fix(desktop): remote ticket blips no longer lock the chat behind the boot overlay**（已合并）  
  修复远端 gateway 短暂断线（WebSocket ticket 重连）导致桌面 UI 被锁死的问题。用户现在即使连接闪断，也能继续阅读和编辑对话，无需等待 1–3 分钟解锁。该 PR 为 #82907 的 salvage 版本，直接关闭了 #82906。

- **[#93281](https://github.com/NousResearch/hermes-agent/pulls/93281) — fix(dashboard-auth): 'Sign-in unavailable' page stops recommending the dead --insecure bypass**（已合并）  
  Dashboard 的「无法登录」页面不再建议使用自 6 月已失效的 `--insecure` 选项，改为引导用户配置受支持的认证方式或改为 loopback 绑定 + SSH 隧道。同步关闭 #87788。

- **[#82907](https://github.com/NousResearch/hermes-agent/pulls/82907) — fix(desktop): stop transient remote ticket blips locking the chat**（已合并）  
  初版桌面锁屏修复，为 #93288 提供基础，解决远端网关瞬时错误导致全屏「Hermes couldn't start」覆盖层的问题。

- **[#87813](https://github.com/NousResearch/hermes-agent/pulls/87813) — fix(dashboard-auth): stop unavailable sign-in page from suggesting a no-op bypass**（已合并）  
  Dashboard 认证页面文案修复，与 #93281 相同主题，已由 salvage 版本取代。

- **[#93287](https://github.com/NousResearch/hermes-agent/pulls/93287) — fmt(js): `npm run fix` auto-fix**（已合并）  
  自动代码格式化 PR，由 bot 提交，保持代码风格一致。

这些合入使桌面端在连接异常时的可用性显著提升，并修正了误导性的认证提示。项目在「连接韧性」和「用户引导」两个方向上前进了一步。

---

### 4. 社区热点
今日评论最活跃的 Issue 反映了用户核心痛点：

- **[#67605](https://github.com/NousResearch/hermes-agent/issues/67605) — [Bug]: Dashboard/desktop profile switch is partial**（9 评论）  
  用户在选择 Desktop/Web Dashboard 的 profile 后，MCP 工具不会加载，且环境变量（`secrets/${VAR}`）仍来自启动 profile 而非所选的 profile。创建于 7 月 19 日，至今未关闭，说明该问题困扰较多用户，且修复难度较高。

- **[#91675](https://github.com/NousResearch/hermes-agent/issues/91675) — [Bug]: Windows: gateway start still prints ✓ then dies after the 6s liveness poll**（6 评论）  
  这是 #84185 的后续问题，Windows 上 gateway 启动后 6 秒被 liveness 检查误杀。Windows 用户对启动流程的稳定性持续关注。

- **[#93091](https://github.com/NousResearch/hermes-agent/issues/93091) — Bot Mode reliability program**（6 评论）  
  一个综合功能请求，提出在 Bot Mode 中加入类型化失败原因、信封 TTL、注意力徽章、leader 路由群聊、重试会话策略等。反映社区对多 bot 协作可靠性的强烈需求。

- **[#57512](https://github.com/NousResearch/hermes-agent/issues/57512) — [Bug]: Desktop 'Restart Gateway' button silently fails**（5 评论，已关闭）  
  桌面端「Restart Gateway」按钮失效问题，根因是 `_HERMES_GATEWAY` 环境变量守卫。该 Issue 今日关闭，意味着已有修复合入。

这些热点背后是：**多 profile 隔离与切换不彻底**、**Windows 平台支持不完善**、**Bot 模式在真实工作负载下可靠性不足**。

---

### 5. Bug 与稳定性
今日报告的 Bug 按严重程度排列如下（🔥 表示已有相关修复 PR）：

| 严重度 | Issue | 摘要 | 状态 |
|--------|-------|------|------|
| CRITICAL | [#93230](https://github.com/NousResearch/hermes-agent/issues/93230) | child-env 在 scrub 后又被 `env.update(os.environ)` 污染，导致子进程凭据环泄漏 | 已关闭 🔥 |
| CRITICAL | [#77463](https://github.com/NousResearch/hermes-agent/issues/77463) | 一组 child-env scrub 绕过（TUI host、LSP full-env、docker forward-env 等），共 6 个发现 | 开放中 |
| HIGH | [#93233](https://github.com/NousResearch/hermes-agent/issues/93233) | LSP 进程 spawn 时直接 `dict(os.environ)` 导致凭据全量泄漏 | 已关闭 🔥 |
| HIGH | [#93242](https://github.com/NousResearch/hermes-agent/issues/93242) | `create_ssrf_safe_async_client()` 多处调用未设置 User-Agent，触发 CDN 403 | 开放中 |
| P1 | [#93064](https://github.com/NousResearch/hermes-agent/issues/93064) | `state.db` 自动修复可能在未证明恢复成功前破坏原始数据 | 开放中 |
| P1 | [#93251](https://github.com/NousResearch/hermes-agent/issues/93251) | 并行工具调用 ≥4 个时所有结果丢失（`Result unavailable`） | 开放中 |
| P1 | [#91675](https://github.com/NousResearch/hermes-agent/issues/91675) | Windows gateway 启动后 6 秒被 liveness 误杀 | 开放中 |
| P2 | [#92414](https://github.com/NousResearch/hermes-agent/issues/92414) | TUI Docker 后端在 `-v` 挂载路径中使用了 `session:<id>` 格式，启动失败 | 开放中 |
| P2 | [#93134](https://github.com/NousResearch/hermes-agent/issues/93134) | TUI 剪贴板路径的 `execFileNoThrow` 可能永不 settle | 开放中 |
| P2 | [#75460](https://github.com/NousResearch/hermes-agent/issues/75460) | Windows 桌面更新预检扫描超时（15s）导致更新永远中止 | 开放中 |
| P2 | [#93262](https://github.com/NousResearch/hermes-agent/issues/93262) | Desktop Bots pane 永远不渲染 roster 行，但 profile 数据正常 | 开放中 |
| P3 | [#92361](https://github.com/NousResearch/hermes-agent/issues/92361) | Camofox 浏览器工具冷启动时首屏绘制过慢，超时/重试不足 | 开放中 |
| P3 | [#80276](https://github.com/NousResearch/hermes-agent/issues/80276) | Camofox 陈旧 tab 恢复不处理 HTTP 410，导致工具挂死 | 开放中 |
| P3 | [#93273](https://github.com/NousResearch/hermes-agent/issues/93273) | 桌面 ⌘F 在 find bar 已可见但失焦时无法重新聚焦 | 开放中 |

安全相关问题今日占比高（2 个 CRITICAL 已关闭，1 个 HIGH 已关闭），但仍有一个 CRITICAL 集群 #77463 开放，需持续关注。

---

### 6. 功能请求与路线图信号
今日出现的功能请求多与**可观测性**、**配额透明化**和**Bot 模式增强**相关：

- **Bot Mode 可靠性程序** ([#93091](https://github.com/NousResearch/hermes-agent/issues/93091))  
  请求引入类型化失败原因、envelope TTL、注意力徽章等。结合近期多条 Bot 行为异常 Issue（如 #93129 bot 无视 stop、#92687 聊天被归档），该项目很可能被纳入近期迭代。

- **完整机器可读工具枚举端点** ([#92711](https://github.com/NousResearch/hermes-agent/issues/92711))  
  用户要求提供 per-platform、完整模型可见的工具清单，用于验证 agent 隔离性，属于平台扩展性诉求。

- **pre_api_request 升级为 Transform hook** ([#90432](https://github.com/NousResearch/hermes-agent/issues/90432))  
  允许插件在每个请求中覆盖 model/provider/base_url，适用于高级路由场景。

- **OAuth 配额可视化**：PR **[#93282](https://github.com/NousResearch/hermes-agent/pulls/93282)**（CLI `hermes usage`）和 **[#93285](https://github.com/NousResearch/hermes-agent/pulls/93285)**（桌面状态栏 quota chip）已提交，为同一功能的两层 UI，预计进入下一版本。

- **富 HTML 邮件回复** ([#93294](https://github.com/NousResearch/hermes-agent/pulls/93294))：邮件网关支持 `multipart/alternative` 的 HTML 渲染，增加邮件交互表现力。

- **交互式皮肤选择器** ([#46150](https://github.com/NousResearch/hermes-agent/issues/46150))：自 6 月持续开放，今日有更新，社区仍有需求，但优先级较低。

这些 feature 中，OAuth 配额相关 PR 已准备就绪，Bot 可靠性是用户呼声最高的方向，下一版本有较大概率纳入。

---

### 7. 用户反馈摘要
从今日 Issue/PR 评论中提炼的典型用户反馈：

- **多 profile 切换不完整**（#67605）：用户明确表示“选择 profile 后并没有真正切换”，MCP 工具和环境变量来自错误 profile，导致代理行为异常。这一痛点直接影响多环境工作流。
- **Windows 体验仍是短板**（#91675、#75460）：Windows 用户反复报告 gateway 启动失败、更新流程被误杀，有评论称“每次更新都像赌博”。平台兼容性已成为用户流失风险点。
- **安全边界受关注**（#93230、#93233）：提交安全漏洞的用户给出了详细复现和代码分析，并很快被维护者确认修复。用户对项目安全响应速度表示满意（“修复很快，点赞”）。
- **Bot Mode 需要“能够信任”**（#93091、#93129）：用户反馈 bot 不听停止指令、会话丢失、任务重复执行，评论中强调“在真实协作中无法使用”。可靠性是 Bot 功能推广的关键前提。
- **桌面 UI 细节重要**（#93273、#93197）：尽管是小问题，但用户对 ⌘F 习惯行为、偏好保存等细节的缺失感到明显不便，这类反馈有助于打磨产品体验。

---

### 8. 待处理积压
以下 Issue/PR 持续开放且创建时间较早，需要维护者关注：

- **Issue [#67605](https://github.com/NousResearch/hermes-agent/issues/67605)**（7/19 创建，9 评论）：Dashboard/profile 切换不完整，社区热度高，长期未修复。
- **Issue [#46150](https://github.com/NousResearch/hermes-agent/issues/46150)**（6/14 创建）：交互式皮肤选择器，功能请求，长期无实现进展。
- **Issue [#76175](https://github.com/NousResearch/hermes-agent/issues/76175)**（8/1 创建）：Photon 适配器中 iMessage 投票静默丢失，影响原生消息集成可靠性。
- **Issue [#80276](https://github.com/NousResearch/hermes-agent/issues/80276)**（8/6 创建）：Camofox 工具处理 HTTP 410 缺失，导致工具挂死，需手动重启。
- **PR [#56043](https://github.com/NousResearch/hermes-agent/pulls/56043)**（7/1 创建）：Spotify 工具 URI 规范化与设备引导增强，已开放超 7 周，尚未合并。
- **PR [#79840](https://github.com/NousResearch/hermes-agent/pulls/79840)**（8/6 创建）：fallback 链中被 ban 的凭据不应使整个链失效，修复 DeepSeek 402 场景，开放两周无动态。

这些积压项横跨 Bug 修复、功能演进与插件生态，建议维护者按优先级排期，尤其关注 #67605 和 #76175 等直接影响用户体验的问题。

---

**总结**：Hermes Agent 今日活跃度高，安全响应迅速，桌面端稳定性有所提升，但多 profile、Windows 兼容和 Bot 模式可靠性仍是社区最关心的待解难题。项目健康度中等偏上，若能加速处理积压问题，将进一步提升用户信任。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-08-24）

## 1. 今日速览

- 过去 24 小时无新 Issue、无新 Release；2 个旧 Issue 被标记为 `stale` 后关闭。
- PR 更新 7 条：5 个 PR 被关闭（均为 `stale`，未合并），2 个 PR 仍开放。
- 今日主要动作是「存量清理」，没有实际代码合入主干，项目代码层面进展有限。
- 值得注意：一批安全加固和 WhatsApp 兼容性修复 PR 被 stale 关闭，但问题本身仍未解决。
- 活跃度评估：整体偏低，维护重心偏向 stale 清理；新 PR #3344 带来一个新功能方向，是当前少数增量信号。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日没有 PR 被合并进主干，项目代码层面没有向前推进。关闭的 5 个 PR 均是因为长期未更新/未合入而被 stale 机制关闭，主要涉及以下修复/改进：

- [PR #3320](https://github.com/sipeed/picoclaw/pull/3320)：升级 `whatsmeow` 依赖，尝试修复 WhatsApp 频道「client outdated (405)」导致频道不可用的问题。
- [PR #3321](https://github.com/sipeed/picoclaw/pull/3321)：将动态上下文移到 conversation history 之后，避免破坏 LLM prefix caching。
- [PR #3322](https://github.com/sipeed/picoclaw/pull/3322)：为 QQ / Telegram / Discord / LINE / Slack 的入站媒体下载增加 SSRF 防护。
- [PR #3323](https://github.com/sipeed/picoclaw/pull/3323)：修复企微（WeCom）媒体下载使用不安全 HTTP client 的问题。
- [PR #3324](https://github.com/sipeed/picoclaw/pull/3324)：修复微信（Weixin）CDN/远程媒体下载存在 SSRF 风险的问题。

这些 PR 被关闭意味着相关修复仍未进入主线，问题仍停留在代码库之外。维护层面，stale 清理有助于减少无效 PR 堆积，但实质性的功能推进今日为 0。

## 4. 社区热点

今日讨论集中在两个被关闭的旧 Issue 上，均非新建，但仍有用户关注：

- [Issue #3302 - Support OAuth 2.1 for MCP servers](https://github.com/sipeed/picoclaw/issues/3302)  
  评论 4 条，今天被 stale 关闭。用户希望 MCP server 支持 OAuth 2.1，并明确关联了 #2546。由于该 Issue 已被关闭，后续需要维护者判断是否重新开启或并入原有路线图。

- [Issue #3325 - Render Telegram tables with rich messages](https://github.com/sipeed/picoclaw/issues/3325)  
  评论 2 条。用户反馈 Telegram 表格在 `sendMessage` HTML/MarkdownV2 路径下会退化为纯文本或代码块，无法使用 Telegram Bot API 10.1 引入的原生表格 UI。这属于体验增强需求，目前同样被 stale 关闭。

此外，新提交的 [PR #3344 - Add Build Remote Agent phone pairing](https://github.com/sipeed/picoclaw/pull/3344) 是今日唯一新 PR，暂无评论，但它提出通过 `gbr/1` 协议让手机作为远程 spectator 查看桌面 Agent。如果被维护者关注，可能成为下一个社区讨论热点。

## 5. Bug 与稳定性

今日没有新上报的 Bug，但存在多个已被修复方案、却因 stale 关闭而未落地的稳定性/安全问题：

- **高严重度：WhatsApp 频道不可用**  
  [PR #3320](https://github.com/sipeed/picoclaw/pull/3320) 指出当前 `whatsmeow` 版本导致 WhatsApp 连接后约 5 秒被服务端拒绝，错误为 `Client outdated (405)`，且不会自动重连。该修复 PR 已被 stale 关闭，WhatsApp 原生频道目前仍处于不可用状态。

- **中高严重度：多频道 SSRF 风险**  
  [PR #3322](https://github.com/sipeed/picoclaw/pull/3322)、[PR #3323](https://github.com/sipeed/picoclaw/pull/3323)、[PR #3324](https://github.com/sipeed/picoclaw/pull/3324) 分别修复了一组 SSRF 问题：QQ、Telegram、Discord、LINE、Slack、企微、微信等渠道在下载入站媒体时，可能被恶意 URL 引导访问 loopback、link-local 或 RFC1918 内网地址。相关修复均未合入。

- **低严重度 / 性能问题：LLM prefix cache 失效**  
  [PR #3321](https://github.com/sipeed/picoclaw/pull/3321) 指出动态上下文块位于 system message 中、且在 conversation history 之前，导致 prefix caching 每次请求都可能失效。该优化未合入，当前长对话场景的 token 缓存收益仍受影响。

## 6. 功能请求与路线图信号

今日没有新功能请求涌入，但以下信号值得维护者关注：

- **OAuth 2.1 for MCP servers**  
  [Issue #3302](https://github.com/sipeed/picoclaw/issues/3302) 被标为 Nice-to-Have / Enhancement，目前已 stale 关闭。若项目仍计划完善 MCP server 接入的鉴权能力，应重新评估该需求。

- **Telegram 富文本表格渲染**  
  [Issue #3325](https://github.com/sipeed/picoclaw/issues/3325) 是清晰的体验类功能：利用 Telegram Bot API 10.1 的原生 table UI，而不是退化为纯文本。该需求适合作为低风险增强进入后续版本。

- **远程 Agent 手机配对**  
  [PR #3344](https://github.com/sipeed/picoclaw/pull/3344) 提出新增 `gbr/1` 协议适配器，让手机可以「围观」桌面 Agent。目前处于未 review 状态，如果方向可行，可能成为下阶段功能方向之一。

- **DeltaChat 实现清理**  
  [PR #3222](https://github.com/sipeed/picoclaw/pull/3222) 仍在开放中，内容包括删除 legacy 特性、更新官方 relay list 引用方式、去掉密码邮件配置、将 `invite_link` 重命名为 `join_invite_link` 并新增 `show_invite_link`，整体净减约 200 行代码。这符合「精简实现 + 文档补齐」的路线，建议维护者尽快 review。

## 7. 用户反馈摘要

从今日 Issue / PR 摘要中可以提取到以下用户痛点和使用场景：

- **Telegram 消息格式不完整**：用户希望结构化 Markdown 表格能通过 Telegram 原生 table UI 展示，而不是退化成代码块。说明当前 `sendMessage` 路径对 Telegram 新特性的适配滞后。
- **MCP Server 鉴权诉求**：用户提出 OAuth 2.1 支持，并引用 #2546，表明存在一批用户希望 PicoClaw 与更现代的 MCP 鉴权方式对齐。
- **WhatsApp 渠道断连**：PR #3320 的摘要直接说明 WhatsApp 官方开始拒绝当前客户端版本，频道无法连接、无重连，属于影响实际使用的稳定性问题。
- **安全加固的隐性需求**：多个渠道的媒体下载缺少 SSRF 防护，说明用户提供的外部媒体 URL 可能被滥用；虽然这不是普通用户直接反馈，但已有贡献者主动提交修复。

总体来看，用户侧更关心「渠道可用性」「消息渲染完整性」和「安全边界」，但目前这些修复均未进入主线。

## 8. 待处理积压

以下条目需要维护者重点跟进：

- [PR #3222 - refactor(deltachat): cleanup implementation, documentation -200LOC](https://github.com/sipeed/picoclaw/pull/3222)  
  已开放约 1.5 个月，最近一次更新为 2026-08-23，仍无 review。DeltaChat 实现清理和 API 改名需要维护者确认，否则可能逐渐 stale。

- [PR #3344 - Add Build Remote Agent phone pairing](https://github.com/sipeed/picoclaw/pull/3344)  
  新建于 2026-08-23，目前没有评论和 review。新功能应尽快给出初步反馈，避免贡献者等待过久。

- [PR #3320 / #3322 / #3323 / #3324](https://github.com/sipeed/picoclaw/pulls?q=is%3Apr+is%3Aclosed+stale)  
  这些安全/兼容性修复已被 stale 关闭，但底层问题依然存在。建议维护者从积压中恢复并优先评审，尤其是 WhatsApp 出问题和 SSRF 风险两个方向。

- [Issue #3302 / #3325](https://github.com/sipeed/picoclaw/issues?q=is%3Aissue+is%3Aclosed+stale)  
  虽已关闭，但仍代表真实用户需求。若后续版本计划涉及 MCP 鉴权或 Telegram 富文本，应重新打开作为路线图参考。

---

**整体健康度判断**：PicoClaw 今日处于「维护清理 > 功能推进」的状态，社区讨论热度低，但并非没有信号。当前最关键的风险是安全修复和 WhatsApp 兼容性修复被 stale 机制关闭后无人跟进，建议维护者优先恢复这些 PR 的评审流程。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-08-24）

## 1. 今日速览

过去 24 小时内，NanoClaw 出现 4 条 Issue 更新（3 条新开/活跃、1 条关闭）和 50 条 PR 更新（30 条待合并、20 条已合并/关闭），无新版本 Release。今日未发布新版本，但 `core-team` 提交了包括 v2.3.0 发布准备、Chat SDK 4.32.0 升级、`minimumReleaseAge` 门禁开启等密集修复，并针对 Discord 审批按钮、claim-stuck watchdog 等高严重度问题快速响应。整体社区活跃度高，稳定性修复正在加速推进，但仍有多个长期积压的 PR/Issue 待维护者关注。

## 3. 项目进展

今日有 20 条 PR 被合并/关闭，其中以下变更对项目有实质推进：

- **[#3496] [CLOSED] versions: repin to hardened-2026-08-23 and let benign lock drift through**  
  gavrielc 提交的临时修复，让新安装的镜像能正常完成 setup，解决自 2026-08-21 起 “hardened installs failed setup” 的阻断问题。  
  https://nanocoai/nanoclaw PR #3496

- **[#3495] [CLOSED] chore(release): v2.3.0**  
  为 v2.3.0 准备的发布 PR，更新 `package.json` 版本号、整理 CHANGELOG，为即将发布的版本铺路。  
  https://nanocoai/nanoclaw PR #3495

- **[#3466] [CLOSED] fix(deps): bump chat core to 4.32.0 and pin every Chat SDK channel skill to it**  
  将 Chat SDK 核心依赖升级到 4.32.0，并统一锁定各 Chat SDK 通道技能版本，减少依赖漂移。  
  https://nanocoai/nanoclaw PR #3466

- **[#3467] [CLOSED] feat(typing): let a channel adapter declare its typing-indicator lifetime**  
  允许通道适配器声明打字指示器的生效时长，为后续 WhatsApp、Telegram 等通道的精细化体验打基础。  
  https://nanocoai/nanoclaw PR #3467

- **[#3469] [CLOSED] fix(pnpm): turn the minimumReleaseAge gate on (hoist out of the pnpm: key) + regression test**  
  pnpm 配置修正，将 `minimumReleaseAge` 从 `pnpm:` 键中提出并真正启用，附带回归测试。  
  https://nanocoai/nanoclaw PR #3469

这些变更表明项目正在同时推进依赖安全、发布流程、通道适配层通用能力，并为 v2.3.0 做准备。

## 4. 社区热点

- **[#2404] Issue: Double delivery when agent uses send_message MCP tool and <message> blocks in the same turn**  
  创建于 5 月，今日仍有更新（4 条评论），用户 mshirel 报告了同一文本通过两条输出路径重复投递的问题。评论数最多，说明该问题影响面较广且讨论仍在持续。  
  https://nanocoai/nanoclaw Issue #2404

- **[#3456] Issue: chat-sdk-bridge: redundant Button 'value' param corrupts Discord approval custom_id**  
  昨日新建、今日关闭，高严重度。用户 DawoudIO 指出 Discord 审批/提问卡片因按钮 `id` 与 `value` 重复导致静默拒绝、重复发送。此 Issue 一天内完成关闭，反馈响应迅速。  
  https://nanocoai/nanoclaw Issue #3456

- **amit-shafnir 的高密度 Stacked PR 链**  
  #3490 → #3491 → #3492 及对应的 channels twin PR（#3465、#3468、#3470 等）展示出 core-team 在 Chat SDK 升级、打字指示器、pnpm 门禁上的协同推进，是今日 PR 活跃度的主要来源。  
  https://nanocoai/nanoclaw PR #3490

## 5. Bug 与稳定性

按严重程度从高到低排列：

- **[#3455] [OPEN] poll-loop: heartbeat not touched between claim and first SDK event — claim-stuck watchdog kills legitimately busy turns forever**  
  **Severity: high**。`host-sweep` 的 claim-stuck watchdog（60 秒超时）在 `markProcessing()` 后未及时更新心跳，导致正常处理的 turn 被误杀并永久阻塞会话回复，且无自恢复机制。目前尚无 fix PR。  
  https://nanocoai/nanoclaw Issue #3455

- **[#3456] [CLOSED] chat-sdk-bridge: redundant Button 'value' param corrupts Discord approval custom_id, causing silent-reject + duplicate resend**  
  **Severity: high**。Discord 审批/提问卡片不可用，每次点击都会解析到错误选项。该 Issue 已关闭，表示已有修复或合并解决。  
  https://nanocoai/nanoclaw Issue #3456

- **[#3457] [OPEN] session-db: insertMessage() UNIQUE-constraint crash on a retried delivery with the same message id**  
  **Severity: medium**。重试投递同一消息 ID 时触发 `UNIQUE` 约束崩溃，表现为反复出现 “Message delivery failed, will retry”，且可能加剧重复消息问题。目前无对应 fix PR。  
  https://nanocoai/nanoclaw Issue #3457

- **[#2404] [OPEN] Double delivery when agent uses send_message MCP tool and <message> blocks in the same turn**  
  **Bug**。MCP `send_message` 工具与 `<message>` 块同时使用导致消息重复投递，根因已定位到 `StdioServerTransport` 子进程隔离与主进程轮询路径的重复，尚未出现修复 PR。  
  https://nanocoai/nanoclaw Issue #2404

## 6. 功能请求与路线图信号

以下开放 PR 体现了近期功能方向，有可能被纳入 v2.3.0 或后续版本：

- **Build Remote Agent phone pairing (#3494)**：新增 gbr/1 协议，允许手机通过二维码或 8 位码配对并旁观桌面 Agent，属于远程控制/多端协作类功能。  
  https://nanocoai/nanoclaw PR #3494

- **Cursor Agent 支持 (#3355, #3356)**：添加 `/add-cursor` 安装技能及 Cursor Agent SDK 负载，扩张 provider 生态。  
  https://nanocoai/nanoclaw PR #3355  
  https://nanocoai/nanoclaw PR #3356

- **Codex provider 结构化 setup-driver 认证 (#3489)**：为 Codex 提供方完善认证流程，属于配置体验优化。  
  https://nanocoai/nanoclaw PR #3489

- **MindsHub 提供方指南与 setup 技能 (#3493)**：新增文档和运维技能，降低新平台接入门槛。  
  https://nanocoai/nanoclaw PR #3493

- **允许通道适配器声明打字指示器生命周期 (#3491)**：这是对通道体验的细粒度 API 设计，与 #3467 形成 main 分支上的连续演进。  
  https://nanocoai/nanoclaw PR #3491

结合 v2.3.0 发布准备，项目正在从“核心稳定”转向“更多 provider + 通道体验精修”。

## 7. 用户反馈摘要

从 Issue 内容和评论中提炼出的用户真实痛点：

- **重复消息成为多路径输出的共性问题**  
  #2404 中，用户同时使用 MCP `send_message` 工具和 `<message>` 块时，消息被投递两次。这对自动化/多通道场景是明确的功能缺陷，用户希望两条输出路径有一方去重或优先级处理。

- **审批操作在 Discord 上完全不可用**  
  #3456 严重影响了依赖 Discord 审批流的用户，简单点击会被解析为错误选项，导致审批被静默拒绝、重复发送。该 Issue 一天内关闭，表明维护者重视审批链路可用性。

- **会话阻塞无自愈手段，重试无效**  
  #3455 用户指出，一旦被 watchdog 误杀，该会话将永久阻塞，且每次重试都重复失败。用户期待更智能的心跳更新或自动恢复机制，而不是让整个 turn 永久卡死。

- **重试机制自身产生重复消息**  
  #3457 中，`insertMessage()` 的约束冲突让重试投递变成“重复投递”的来源，用户认为这加剧了消息重复的观感，需要幂等写入策略。

## 8. 待处理积压

以下重要 Issue / PR 长期未关闭或被忽略，建议维护者安排资源处理：

- **Issue #2404**：MCP 工具与 message 块重复投递问题，5 月 10 日创建，至今已超 3 个月，仍无修复 PR。  
  https://nanocoai/nanoclaw Issue #2404

- **PR #2301**：GitHub 轮询模式、git 访问问题、OneCLI 安全合并，5 月 6 日创建，仍处于打开状态。该 PR 对 NAT 环境用户很有价值。  
  https://nanocoai/nanoclaw PR #2301

- **PR #2537**：增加 pre-commit hooks（prettier、eslint、typecheck、vitest），5 月 18 日创建，长期未合并，影响工程化体验。  
  https://nanocoai/nanoclaw PR #2537

- **PR #3142**：Signal 适配器附件路径修复，7 月 27 日创建，解决图片/文件附件无法被 Read 工具读取的问题，仍未合并。  
  https://nanocoai/nanoclaw PR #3142

这些积压项涉及核心稳定性、开发体验和渠道兼容性，若近期能纳入冲刺，将有助于项目健康度提升。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-08-24

## 1. 今日速览

过去 24 小时 NullClaw 项目活跃度偏低：共新增 1 条 Issue，无 PR 提交/合并，无新版本发布。唯一新 Issue 报告了 MCP stdio 调用在 Proxmox launcher 锁下可能无限挂起的问题，核心矛盾是常驻 gateway 与独立 `agent` 进程对同一 stdio MCP server 的资源竞争，值得维护者优先排查。代码库今日无功能迭代落地，整体处于相对平静的维护观察期，项目健康度中等——无回归引入，但存在一个未修复的稳定性隐患。

## 2. 版本发布

今日无新版本发布。当前用户环境基线为 NullClaw 2026.8.22。

## 3. 项目进展

今日无 PR 被合并或关闭，代码库无可见的功能推进或缺陷修复落地。项目当前进展主要围绕新 Issue #991 的初步讨论与问题确认展开，尚处于"报告→响应"阶段。

## 4. 社区热点

**Issue #991 [OPEN]** — MCP stdio calls can hang indefinitely behind the Proxmox launcher lock
- 作者: locke1979 | 创建: 2026-08-23 | 更新: 2026-08-23 | 评论: 2 | 👍: 0
- 链接: https://github.com/nullclaw/nullclaw/issues/991

今日唯一议题，也是社区唯一讨论焦点。该 Issue 在发布后短时间内获得 2 条评论，说明已引起维护者或社区成员初步回应。用户报告在配置了 148 个工具的只读 Proxmox MCP bridge 后，独立执行 `nullclaw agent` 时若目标 stdio MCP server 已被常驻 gateway 进程持有，调用将无限期挂起。背后诉求可归纳为两点：**MCP stdio 连接需要锁获取的超时/失败快速反馈机制**；**gateway 与独立 agent 并存的部署模式下需要更合理的连接共享或排队策略**。

## 5. Bug 与稳定性

| 严重程度 | Issue | 现象 | 复现环境 | Fix PR |
|---------|-------|------|---------|--------|
| ⚠️ 中高 | #991 [OPEN] | 独立 `nullclaw agent` 调用在 stdio MCP server 被 gateway 持有时无限挂起（hung indefinitely） | Proxmox CT 151，NullClaw 2026.8.22，只读 Proxmox MCP bridge（148 tools） | 无 |

该问题为死锁/资源竞争类稳定性和故障，复现路径清晰：启动 `nullclaw-gateway.service...` 持有 MCP server 后，独立 agent 调用即挂起。当前无任何关联 Fix PR，也未看到 workaround 建议（截至数据快照时间）。

## 6. 功能请求与路线图信号

今日无明确的新功能请求。但 Issue #991 隐含了以下产品级健壮性需求，可能进入后续版本规划：

- **锁等待超时机制**：MCP stdio 连接获取锁失败时应超时返回错误，而非无限阻塞；
- **连接复用/共享**：gateway 与独立 agent 可协商共享同一 stdio MCP 连接，而非互斥独占；
- **诊断可观测性**：挂起发生时提供明确日志或错误码，降低用户排查成本。

若上述改进落地，预计将随下一个 patch/minor 版本发布。

## 7. 用户反馈摘要

- **真实痛点**：用户 locke1979 在 Proxmox 生产环境（CT 151）中使用 NullClaw 2026.8.22 搭配只读 Proxmox MCP bridge（148 个工具），遭遇独立 agent 调用无限挂起，直接导致 CLI 按需调用场景不可用。
- **使用场景**：常驻 gateway 服务与按需独立 agent 调用并存，是真实世界中典型的混合部署模式。该问题暴露了此模式下的资源竞争隐患。
- **满意度**：用户问题描述专业、复现步骤完整，对项目机制有较深理解；不满点集中在挂起无超时、无错误提示、排障成本高——这属于稳定性体验层面的负面反馈，而非功能缺失。

## 8. 待处理积压

- **Issue #991 [OPEN]**（2026-08-23 创建）：最新报告、尚无人认领或指派。建议维护者尽快确认锁冲突根因，给出临时 workaround（如手动释放锁、串行化调用）并在下个版本中修复。
- 今日无其他长期未响应的历史 Issue/PR 进入视野，积压压力整体可控。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-24

> 数据窗口：过去 24 小时｜数据源：github.com/nearai/ironclaw

## 1. 今日速览

过去 24 小时 IronClaw 保持高活跃度：9 条 Issue 更新（全部处于开启/活跃状态，无关闭），24 条 PR 更新（19 条待合并、5 条已合并/关闭），无新版本发布。开发力量集中于两条主线：一是 CI 基础设施全面提速与收敛（四条并行轨道 T1–T4，涉及 6 个以上大型 PR），二是 v1.4.0 里程碑的持久化 per-user 沙箱运行时（epic [#7732](https://github.com/nearai/ironclaw/issues/7732) 与核心实现 [PR #7810](https://github.com/nearai/ironclaw/pull/7810)）。值得警惕的是，产品反馈渠道今日集中上报 3 个第三方集成设置故障（Notion/Gmail/Slack），目前均无关联修复 PR。今日合入的 PR 全部为 Dependabot 自动依赖升级；CI 团队另建两个 "THROWAWAY" 验证分支（[#7838](https://github.com/nearai/ironclaw/pull/7838)/[#7839](https://github.com/nearai/ironclaw/pull/7839)）预先演练 nextest 迁移，工程严谨度较高。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

**今日已合并/关闭（5 条）**：可见记录中 3 条，均为 Dependabot 依赖升级，无功能代码合入；另 2 条关闭记录未在展示列表中。

- [PR #7730](https://github.com/nearai/ironclaw/pull/7730)：everything-else 依赖组 6 项升级（uuid、base64、toml 等），08-18 创建，今日关闭
- [PR #7406](https://github.com/nearai/ironclaw/pull/7406)：actions 依赖组 4 项升级（claude-code-action、setup-node、rust-cache 等），08-09 创建，今日关闭
- [PR #7262](https://github.com/nearai/ironclaw/pull/7262)：wasm 依赖组 2 项升级（wit-component、wit-parser），08-05 创建，今日关闭

**重点在审功能 PR（今日均有更新）**：

- [PR #7810](https://github.com/nearai/ironclaw/pull/7810)（XL，sandbox）：manifest 声明的直接执行凭据绑定 + 托管代理，完成 per-user 持久沙箱运行时闭环；`gh` 为首个落地的凭据代理命令，直接服务 epic #7732
- [PR #7833](https://github.com/nearai/ironclaw/pull/7833)（M）：建议生成改为基于用户自己的 no-approval、只读工具，关闭 [#7812](https://github.com/nearai/ironclaw/issues/7812)
- [PR #7826](https://github.com/nearai/ironclaw/pull/7826)（XL）：修复 Hub 发布包安装失败的 4 个根因（见 Bug 章节）
- [PR #7818](https://github.com/nearai/ironclaw/pull/7818)（XL）：后台子代理模式 slices 2b+2c（receipt 生成、按子级投递、激活与修复扫描）
- CI 四轨道：T1 [PR #7821](https://github.com/nearai/ironclaw/pull/7821)、T2 [PR #7817](https://github.com/nearai/ironclaw/pull/7817)、T3 [PR #7819](https://github.com/nearai/ironclaw/pull/7819)、T4 [PR #7809](https://github.com/nearai/ironclaw/pull/7809)
- 设计系统：[PR #7831](https://github.com/nearai/ironclaw/pull/7831)（Design System Phase 3a，Chromatic 视觉回归基线 + 缺失 token 轴）

**整体判断**：今日为"功能合入空窗、review 密集推进"的一天。两个 XL 级工作流（CI 重构、沙箱基建）并行推进，合入后预期显著降低 CI 耗时与"本地绿、CI 红"类问题；依赖维护也在清理 2–3 周前的旧 PR，整体健康度良好。

## 4. 社区热点

- **[Issue #7732](https://github.com/nearai/ironclaw/issues/7732)（9 条评论，今日最多）**：v1.4.0 旗舰 epic「持久化 per-user 沙箱 + iron-proxy，推迟 loop executors」。讨论核心：现状每个 shell 命令都创建/销毁 Docker 容器（无状态、开销大），目标改为 per-(tenant, user) 持久化容器与 `/workspace` 持久化。评论热度反映该架构方向是团队当前最高优先级关注点。
- **[Issue #7812](https://github.com/nearai/ironclaw/issues/7812)（3 条评论）**：Onboarding 建议生成应尊重用户级工具权限、以只读方式访问真实数据。诉求本质是"建议卡片要 grounded 在用户真实数据上"，而非仅靠内部搜索工具，已有 PR #7833 响应。

注：PR 侧评论数未提供，无法量化 PR 讨论热度；但从更新频率看，CI 四轨道 PR 是当前协作密度最高的区域。

## 5. Bug 与稳定性

| 严重度 | 编号 | 问题描述 | Fix PR |
|---|---|---|---|
| 高 | [#7829](https://github.com/nearai/ironclaw/issues/7829) | Gmail 设置：Google 认证弹窗约 1 秒即消失，流程中断 | 无 |
| 高 | [#7830](https://github.com/nearai/ironclaw/issues/7830) | Notion 扩展无法安装 | 无 |
| 高 | [#7828](https://github.com/nearai/ironclaw/issues/7828) | Slack 设置在 NEAR Foundation 账号下被阻断 | 无 |
| 中 | [PR #7826](https://github.com/nearai/ironclaw/pull/7826) 自述 | 4 个目录条目安装失败：legacy `capabilities.json` sidecar 被强制要求；`max_egress_bytes` 错误地约束响应而非出站请求；host 合成的 `standard:` schema 引用与公开版本匹配失败 | 即 PR #7826（在审） |
| 中 | [#7836](https://github.com/nearai/ironclaw/issues/7836) | 模型可见工具面广告了实际不可执行的能力（未安装/未激活/凭据未就绪/未授权）；PinchBench 实测模型会发出注定失败的调用 | 无 |

**信号**：3 个"高"级 Bug 同一天经产品反馈 triage 上报，且全部集中在第三方集成安装/认证流程（OAuth 弹窗被拦截或回调异常、扩展安装校验过严），提示该链路存在系统性问题，建议优先归因排查。工具广告失真（#7836）直接影响模型调用成功率与 PinchBench 表现，值得下一迭代优先处理。

## 6. 功能请求与路线图信号

- **v1.4.0 路线图核心**：[epic #7732](https://github.com/nearai/ironclaw/issues/7732) 明确标注 v1.4.0 目标；[#7825](https://github.com/nearai/ironclaw/issues/7825) 进一步提出"原生 iron-proxy recipes + 主机凭据代理"，替代 GitHub 专用 carve-out——沙箱出口认证正从"特例"走向"通用机制"，[PR #7810](https://github.com/nearai/ironclaw/pull/7810) 为其落地载体。
- **建议生成增强**：[#7812](https://github.com/nearai/ironclaw/issues/7812) 已由 PR #7833 实现（only read/list、尊重用户权限），预计下次合入进入用户可见版本。
- **工具广告可信度**：[#7836](https://github.com/nearai/ironclaw/issues/7836) 提出按"已安装 + 已激活 + 凭据就绪 + 已授权"四重条件过滤模型可见工具面，与评测表现直接挂钩，较可能纳入下一迭代。

## 7. 用户反馈摘要

来自 Slack #x-ai-product-feedback 渠道 triage（[#7827](https://github.com/nearai/ironclaw/issues/7827)、[#7832](https://github.com/nearai/ironclaw/issues/7832)）的真实用户声音：

- **Notion 用户**："Notion tool doesn't want to install in my IronClaw"——安装流程直接失败，且无有效报错引导。
- **Gmail 用户**：通过 webUI（Extensions > Registry > Gmail）设置时，Google 认证弹窗"a window popup appears... it stays for like 1 seconds and goes away"，无法完成认证。典型的弹窗拦截或回调未正确处理的体验。
- **Slack 用户（NEAR Foundation 内部账号）**：无法在 `alejo.escriva@near.foundation` 的 IronClaw 中完成 Slack 设置，内部员工同样受阻。

**共同痛点**：第三方集成（Notion/Gmail/Slack）的设置与认证流程脆弱，失败时缺少可操作的错误信息。**正面信号**：Slack → Issue 的自动化 triage 管道工作正常，反馈能在 3 小时内进入项目追踪体系。

## 8. 待处理积压

需维护者关注的长尾项：

- **[PR #7020](https://github.com/nearai/ironclaw/pull/7020)**：tokio-tungstenite 0.29→0.30 升级，08-02 开启至今 21 天未合入；S 尺寸、低风险，建议尽快处理避免依赖滞后。
- **[PR #7255](https://github.com/nearai/ironclaw/pull/7255)**：APDD Kit 治理框架评估与集成建议，已开启 18 天；governance 文档类长期搁置可能影响决策进度。
- **[PR #7516](https://github.com/nearai/ironclaw/pull/7516)**：IronHub agent link 的 WebUI 运维界面，已开启 11 天；XL 尺寸、低风险，等待 review。
- **CI 四轨道（T1–T4）**：6 个 XL 级 PR 同时在审（[#7817](https://github.com/nearai/ironclaw/pull/7817)/[#7821](https://github.com/nearai/ironclaw/pull/7821)/[#7819](https://github.com/nearai/ironclaw/pull/7819)/[#7809](https://github.com/nearai/ironclaw/pull/7809) 及两个 THROWAWAY 验证分支），存在 review 瓶颈风险；建议按 T1→T2→T3→T4 依赖顺序分批合入。
- **新增 Dependabot 待审**：[#7837](https://github.com/nearai/ironclaw/pull/7837)（11 项更新）、[#7834](https://github.com/nearai/ironclaw/pull/7834)（wasm 4 项）、[#7835](https://github.com/nearai/ironclaw/pull/7835)（actions 5 项；其中 `actions/setup-node` 4.0.2→7.0.0 为 major 升级，需确认 CI 兼容性后再合入）。

---

**健康度小结**：项目协作活跃、CI 工程严谨、反馈闭环高效，但存在"功能合入停滞、集成设置类 Bug 堆积、XL PR review 集中"三个风险点，建议在 v1.4.0 冲刺前优先清理集成认证链路问题，并为 CI 四轨道安排专项 review 时间。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

## LobsterAI 项目动态日报 (2026-08-24)

### 1. 今日速览
今日项目活跃度较低：过去24小时无新开 Issue、无新开 PR、无新版本发布。4 个历史 Issue 与 3 个历史 PR 被标记为 stale 并关闭（均为 4 月 1 日创建，8 月 23 日更新）。项目当前处于“旧务清理”状态，而非功能快速迭代期。不过，关闭的 Issue 中包含了安全漏洞、NIM 群名编码 Bug 等重要反馈，值得维护团队复盘并跟进。

### 2. 版本发布
无新版本发布。

### 3. 项目进展
今日无 PR 合并，代码仓库没有实际代码推进。3 个 PR 均因 stale 关闭，但其中包含两个值得注意的功能/修复提案，建议后续由维护者重新评估或邀请作者 rebase 后再提交：

- [#1197 Feature/Agent 管理页面交互优化](https://github.com/netease-youdao/LobsterAI/pull/1197)（作者：leefinder）—— 针对 Agent 管理页面的删除操作路径过深、侧边栏体验问题提出优化方案，是 #1176 的冲突解决版本，但未获合并。
- [#1199 feat(model): add context window and token settings](https://github.com/netease-youdao/LobsterAI/pull/1199)（作者：leedalei）—— 为模型增加 `contextWindow` 与 `maxTokens` 配置，并透传到 Cowork/OpenClaw 配置，功能价值高，但同样未合并。

| PR | 状态 | 内容 | 合并情况 |
|---|---|---|---|
| [#1197](https://github.com/netease-youdao/LobsterAI/pull/1197) | CLOSED (stale) | Agent 管理页面交互优化 | 未合并 |
| [#1199](https://github.com/netease-youdao/LobsterAI/pull/1199) | CLOSED (stale) | 增加模型 context window 与 token 设置 | 未合并 |
| [#1201](https://github.com/netease-youdao/LobsterAI/pull/1201) | CLOSED (stale) | 修复 NIM 超大群 teamTypeNum 硬编码错误 | 未合并（与 #1200 关联） |

整体来看，今日项目在代码层面停滞，但历史中积累的若干有价值的 PR 都因未及时评审而超期关闭，这是项目健康度上需要注意的信号。

### 4. 社区热点
今日所有 Issue 与 PR 均无新增评论（评论数均为 0~2 条），社区讨论热度整体偏低。在近期被关闭的 Issue 中，**评论最多（2 条）** 的分别是：

- [#1196 不要强制在工作目录中建立 Agents.md、User.md 等 6 个文件](https://github.com/netease-youdao/LobsterAI/issues/1196)（👍 0）—— 用户对强制生成系统文件感到困扰，希望提供全局配置或隐藏目录方案。
- [#1198 网关重启到一半进度条消失，还不知道重启状态，后续对话全显示模型不可用](https://github.com/netease-youdao/LobsterAI/issues/1198)（👍 0）—— 用户对网关重启时的 UI 反馈和信息透明度不满。
- [#1202 agent 泄漏 model key 信息，存在敏感信息泄漏风险](https://github.com/netease-youdao/LobsterAI/issues/1202)（👍 0）—— 安全相关，用户指出 Agent 会泄露 key 配置信息。

这些 Issue 虽然“陈旧”，但反映的核心诉求 —— **减少文件侵入、提升状态可见性、加强敏感信息防护** —— 仍然是用户真实的长期诉求，且并未过期。

### 5. Bug 与稳定性
以下 Bug 均在今日被关闭，但值得团队重视并按严重程度处理：

| 严重程度 | Issue | 问题概述 | 是否已有修复 PR |
|---|---|---|---|
| **高**（安全） | [#1202 agent 泄漏 model key 信息](https://github.com/netease-youdao/LobsterAI/issues/1202) | 用户可诱导 Agent 泄露模型 key 相关环境变量与配置文件位置，存在敏感信息暴露风险 | ❌ 无 Fix PR |
| **中**（功能缺陷） | [#1200 NIM 超大群消息中 teamTypeNum 硬编码错误导致群名无法正确获取](https://github.com/netease-youdao/LobsterAI/issues/1200) | `nimGateway.ts` 第 917 行 `teamTypeNum` 传参错误，导致超大群/普通群 @ 机器人时群名显示为原始 ID | ✅ 关联 [#1201](https://github.com/netease-youdao/LobsterAI/pull/1201)（但该 PR 今日被 stale 关闭，需重新提交） |
| **低**（体验） | [#1198 网关重启到一半进度条消失，后续对话全部显示模型不可用](https://github.com/netease-youdao/LobsterAI/issues/1198) | 重启状态不可见，且期间没有明确的“恢复中/不可用”提示，容易让用户误以为产品故障 | ❌ 无 Fix PR |

其中，**#1202 的安全问题需要立即关注**，建议安排安全专项排查；**#1200/#1201** 的修复方案已由社区贡献者完成（一行修改），但可惜 PR 未及时合并而被自动关闭，建议联系作者以较低成本恢复该修复。

### 6. 功能请求与路线图信号
今日虽然无新提交，但关闭的 Issue/PR 中透露出以下高潜力的路线图信号：

1. **全局 Agent 配置（而非工作目录强制文件）**（[#1196](https://github.com/netease-youdao/LobsterAI/issues/1196)）：用户明确要求类似 CC 的公共 `AGENTS.md` 机制，或把配置放入隐藏目录。这关系到多项目切换时的用户体验，值得纳入后续版本规划。
2. **模型级 token 配置**（[#1199](https://github.com/netease-youdao/LobsterAI/pull/1199)）：按模型设置上下文窗口和最大 token 数，并透传到 Cowork/OpenClaw。此类精细化配置对“高级用户”有吸引力，且实现思路成熟，建议重新收编进主干。
3. **Agent 管理页面交互优化**（[#1197](https://github.com/netease-youdao/LobsterAI/pull/1197)）：减少操作路径层级，优化侧边栏，属于打磨类改进，可与 [#1196](#) 统一考虑。

这三项虽然并非今日新增，但均为社区持续关注的议题，建议维护团队在下个版本规划时重新打开这些关联任务。

### 7. 用户反馈摘要
从今日关闭的 Issue 内容可提炼出如下真实用户声音：

- **对文件侵入 0 容忍**（#1196）：用户对项目工作目录强制创建 6 个系统文件表达了明显不满，原话“太乱了，而且删了还要重建！”。这说明 LobsterAI 在“对既有项目目录的零干扰”方面尚未达到用户预期，是影响采用率的重要因素。
- **对敏感信息泄漏零容忍**（#1202）：用户通过正常对话即可诱导 Agent 暴露模型 key 配置。这意味着 Agent 的 prompt 级防护存在薄弱环节，有用户主动提交了详细复现步骤与日志文件，说明其非常重视安全问题。
- **对状态反馈要求透明**（#1198）：“进度条消失”“也不知道重启状态”这类描述直接反映了用户对中间状态可视化的渴求——不只要功能可用，还要让用户知道“它正在恢复”或“当前不可用”。
- **进阶用户愿意参与技术修复**（#1200）：该 Issue 用户不仅报告了 Bug，还给出了精确的代码行号、枚举映射关系，并主动提交修复 PR。这是高质量社区贡献的典型，值得维护团队保护并快速响应。

### 8. 待处理积压
以下长期未响应的重要 Issue/PR 今日被 stale 自动关闭，虽然已不再是“open”状态，但其诉求和修复价值仍悬而未决，**建议维护者逐一查看并决定是否 reopen 或重新开启任务**：

| 类型 | 编号 | 标题 | 长期积压时长 | 建议动作 |
|---|---|---|---|---|
| Issue | [#1202](https://github.com/netease-youdao/LobsterAI/issues/1202) | agent 泄漏 model key 信息，存在安全风险 | 约 145 天 | ⚠️ 安全漏洞，**强烈建议 reopen 并优先处理**，安排安全修复版本 |
| Issue + PR | [#1200](https://github.com/netease-youdao/LobsterAI/issues/1200) / [#1201](https://github.com/netease-youdao/LobsterAI/pull/1201) | NIM 群名获取 teamTypeNum 硬编码错误 | 约 145 天 | 一行修改、方案明确，建议联系贡献者重新提 PR 或直接合入 |
| Issue | [#1196](https://github.com/netease-youdao/LobsterAI/issues/1196) | 强制在工作目录建 6 个文件 | 约 145 天 | 产品决策问题，建议收集更多用户反馈后在后续版本优化 |
| Issue | [#1198](https://github.com/netease-youdao/LobsterAI/issues/1198) | 网关重启状态不可见 | 约 145 天 | UI/UX 改进，可列入体验优化池 |
| PR | [#1197](https://github.com/netease-youdao/LobsterAI/pull/1197) | Agent 管理页面交互优化 | 约 145 天 | 功能增强提案，建议确认是否延续 |
| PR | [#1199](https://github.com/netease-youdao/LobsterAI/pull/1199) | 模型 context window 与 token 设置 | 约 145 天 | 高价值功能，可考虑纳入新版本规划 |

> 整体评价：今日项目活跃度低，但积压内容反映出社区存在明确的安全隐患、功能需求和一个“缺失的修复”。对 maintainer 而言，快速处理 #1200/#1201 与 #1202 是当前最能提升项目健康度与社区信任感的行动项。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 · 2026-08-24

> 数据窗口：2026-08-23 21:00 UTC 起 24 小时 | 来源：github.com/moltis-org/moltis

## 1. 今日速览

过去 24 小时项目整体活跃度较高：共 6 个 PR 处于待审查/待合并状态、3 个 Issue 有更新（其中 1 个关闭），但**无合并 PR、无新版本发布**。开发侧（由 rubenssoto、IlyaBizyaev 等核心贡献者驱动）推进密集，覆盖记忆子系统稳定性、MCP 客户端重连、Cron 投递路由与 WhatsApp 文档摄入等方向；维护侧合并通道为零，存在轻度积压。值得关注的是，一个创建于 2026-02-26 的 TLS/WebSocket 兼容性 Bug（#245）今日重新活跃，可能暗示用户影响面在扩大。

| 指标 | 数值 |
|---|---|
| Issues 新增/活跃 | 2 |
| Issues 关闭 | 1 |
| PR 待合并 | 6 |
| PR 合并/关闭 | 0 |
| 新版本发布 | 0 |

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日 **无 PR 被合并**，合并队列保持 6 个待处理状态。唯一关闭的 Issue 是 [#1230 [CLOSED] feat(hooks): add an opt-in fail-closed error policy for modifying security hooks](https://github.com/moltis-org/moltis/issues/1230)，该提案要求为安全类修改钩子提供“故障即关闭”策略，防止运行时超时/异常导致安全边界被静默绕过。关闭原因未在数据中标注（可能为重复、已实现或维护者决策），但该议题本身已进入讨论链路。

尽管合并数为零，今日新增/活跃的 6 个 PR 清晰呈现了项目当前的技术攻关方向：

- **[#1236 fix(memory): bound local embedding encoder batches](https://github.com/moltis-org/moltis/pull/1236)**：修复本地 GGUF 嵌入模型因 `n_batch` 配置不当导致进程崩溃的问题（输入超 512 tokens 即终止 Moltis）。
- **[#1235 fix(memory): normalize built-in backend config value](https://github.com/moltis-org/moltis/pull/1235)**：统一内置记忆后端配置项名称（`sqlite` → `builtin`），并补充 Rust 端与端到端回归测试。
- **[#1234 fix(skills): materialize recursive bundled sidecars](https://github.com/moltis-org/moltis/pull/1234)**：解决预发布产物/Docker 镜像中 `skill-creator` 的 sidecar 文件递归打包后路径失效问题。
- **[#1226 fix(cron): deliver scheduled output to the originating chat](https://github.com/moltis-org/moltis/pull/1226)**：让定时任务结果投递回触发它的聊天会话，同时保留显式投递字段兼容原有行为。
- **[#1233 Add opt-in WhatsApp document ingestion](https://github.com/moltis-org/moltis/pull/1233)**：新增 WhatsApp 文档字节流下载与持久化能力（按账户 opt-in）。
- **[#1231 fix(mcp): resolve current client after server restart](https://github.com/moltis-org/moltis/pull/1231)**：修复 MCP Server 重启后聊天轮次仍通过已关闭的旧客户端分发工具调用的问题。

若这些 PR 在未来 48 小时内完成合并，项目将在本地嵌入稳定性、发布产物一致性、跨渠道消息投递与 MCP 连接韧性方面获得显著提升。

---

## 4. 社区热点

**[#245 [OPEN] fix(tls): h2 in ALPN breaks WebSocket — browser negotiates h2, WS upgrade returns 405](https://github.com/moltis-org/moltis/issues/245)** —— 2 条评论（今日最多）

该 Issue 创建于 2026-02-26，今日（2026-08-23）再次更新，说明问题仍未被解决且持续有用户触及。核心冲突在于：Moltis 启用 TLS 后将 `h2` 置于 ALPN 首位，导致浏览器新标签页/刷新后的 WebSocket 连接协商为 HTTP/2，而 WS 升级需要 HTTP/1.1，最终返回 405。已建立的连接依赖 TLS 会话复用得以幸存，但任何新连接都会失败——这对所有 Web 客户端（包括 DevTools 远程调试、实时推送、浏览器内 Agent 交互）均有影响。该议题的持久活跃反映了 **“TLS + WebSocket”在真实浏览器环境中的兼容性优先级** 问题：ALPN 协议顺序不应默认优先 h2，或至少应提供配置项。

**[#1230 [CLOSED] feat(hooks): add an opt-in fail-closed error policy for modifying security hooks](https://github.com/moltis-org/moltis/issues/1230)** —— 1 条评论

该Issue讨论的是安全钩子（如 `BeforeToolCall`）在运行失败时默认为“继续执行”的隐患。对于将 Moltis 作为安全边界的组织，shell-hook 超时等故障不应静默放行。这一诉求反映了企业/安全敏感用户对 **Fail-Closed 默认值** 的期待，属于高价值安全反馈。该议题今日关闭，但无对应的合并 PR 或 Release 说明，建议维护者在更新日志中明确最终处理方式。

---

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 | 对应修复 PR |
|---|---|---|---|
| 🔴 严重 | [#245 TLS 下 ALPN 优先 h2，导致 WebSocket 升级 405](https://github.com/moltis-org/moltis/issues/245)：所有新浏览器会话/刷新均受影响，已存在近 6 个月，今日重新活跃 | 开放中，无 fix PR | — |
| 🔴 严重 | [#1236 本地嵌入模型输入超 512 tokens 导致 Moltis 进程终止](https://github.com/moltis-org/moltis/issues/1236)（PR 引述）：属崩溃级缺陷，用户本地数据可能丢失 | 由 [#1236 PR](https://github.com/moltis-org/moltis/pull/1236) 修复，待合并 | ✅ 已有 |
| 🟠 中高 | [#1224 Slack 共享频道中工具停止工作](https://github.com/moltis-org/moltis/issues/1224)：创建于 08-21，无评论、无 PR、今日有更新但无响应 | 开放中，无人认领 | — |
| 🟠 中 | [#1231 MCP Server 重启后客户端未刷新，工具调用继续走已关闭连接](https://github.com/moltis-org/moltis/issues/1231)（PR 引述）：影响长会话使用时 MCP 工具稳定性 | 由 [#1231 PR](https://github.com/moltis-org/moltis/pull/1231) 修复，待合并 | ✅ 已有 |
| 🟡 中低 | [#1234 预发布包中 skill sidecar 文件路径缺失](https://github.com/moltis-org/moltis/issues/1234)（PR 引述）：影响使用 Docker/预编译产物的 skill-creator 用户 | 由 [#1234 PR](https://github.com/moltis-org/moltis/pull/1234) 修复，待合并 | ✅ 已有 |

两个崩溃级问题（#245、#1236）中，只有 #1236 已产出 fix PR；#245 的修复方案需要维护者对 ALPN 配置策略做设计决策，预计优先级应上调。

---

## 6. 功能请求与路线图信号

- **安全钩子 Fail-Closed 策略**（[#1230](https://github.com/moltis-org/moltis/issues/1230)）：社区明确提出“钩子故障时默认放行”是安全缺陷。虽 Issue 已关闭，这一需求大概率会被纳入后续版本的安全加固路线。
- **WhatsApp 文档摄入**（[#1233 PR](https://github.com/moltis-org/moltis/pull/1233)）：补齐 WhatsApp 通道最重要的缺口之一——让 Agent 能真正读取文档内容而非仅有元数据。属于渠道能力的实质性扩展，很可能进入下一版本。
- **Cron 输出回投到来源会话**（[#1226 PR](https://github.com/moltis-org/moltis/pull/1226)）：改善定时任务的上下文闭环，属于“会话体验”类优化，对依赖定时任务做主动通知的用户很重要。
- **记忆后端配置标准化**（[#1235 PR](https://github.com/moltis-org/moltis/pull/1235)）：属于配置一致性重构，通过回归测试保障行为可预期，短期用户无感，但降低后续迭代成本。

综合看，下一版本预计将重点覆盖 **连接器内容摄入（WhatsApp 文档）、MCP 可靠性、本地嵌入崩溃修复** 三个方向。

---

## 7. 用户反馈摘要

> 以下反馈基于 Issue/PR 正文摘要提炼，评论原文未完整披露。

- **TLS 场景的 WebSocket 挫败感**（[#245](https://github.com/moltis-org/moltis/issues/245)）：用户 P2Chill 描述的场景很典型——刷新页面/新开标签页后所有 WS 实时能力失效，但已打开的页面却一切正常。这种“状态依赖”的故障极具迷惑性，用户在排查时会先在应用层找原因，浪费大量时间。同时该 Issue 自 2 月至今未修复，可能已导致部分用户放弃在 TLS 生产环境使用 Moltis 的浏览器交互能力。
- **对安全默认值的担忧**（[#1230](https://github.com/moltis-org/moltis/issues/1230)）：用户 kantorcodes 直指行为安全钩子在超时/异常时“降级为放行”的设计，认为这会使 Moltis 无法作为强安全边界。此类反馈多来自将模型接入企业权限体系的开发者，说明 Moltis 已有真实的企业级安全使用场景。
- **本地嵌入进程崩溃的挫败**（[#1236 PR](https://github.com/moltis-org/moltis/pull/1236) 引述）：提交者 rubenssoto 记录的“tokenized chunk/query 超 512 tokens 即终止整个 Moltis 进程”是破坏性极强的错误，本地模型用户对数据隐私的偏好可能因此受挫。
- **Slack 协作中断**（[#1224](https://github.com/moltis-org/moltis/issues/1224)）：共享频道（shared channels）是 Slack 跨组织协作的常用形态，工具在此场景失效会影响团队间的自动化流程，但该 Issue 目前 0 评论，可能尚未被维护者注意。

---

## 8. 待处理积压

- 🔴 **#245 TLS/WebSocket 兼容性问题**：开放近 6 个月，2026-02-26 创建，今日再度活跃。这是当前最老的开放 Issue，且影响所有 TLS 环境下的浏览器 WebSocket 用户。建议维护者本周内至少给出方案或临时规避建议。
- 🔴 **6 个 PR 待合并**：其中 #1236（进程崩溃）、#1231（MCP 重启失效）、#1234（发布产物缺陷）都是明确的 Bug 修复，且均已待合并 1-3 天，建议优先 Review 合入。
- 🟠 **#1224 Slack 共享频道工具失效**：无评论、无 assignee、无 fix PR，处于无人认领状态，建议维护者先确认能否复现。
- 🟡 **#1230 关闭后的透明化**：该安全钩子提案今日关闭，但既无合并 PR 也无 Release 记录。建议维护者用 GitHub 评论说明关闭原因（是已实现、重复、还是暂缓），避免贡献者困惑。

---

**项目健康度判断**：贡献者活跃度高、新功能/修复产出密集，但合并通道存在积压，长期未解决的 #245 是一个风险信号——项目整体处于“产出旺盛、吞吐不足”的阶段。建议维护者将 PR Review 作为本周最高优先级。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw（QwenPaw）项目动态日报 — 2026-08-24

> 数据来源：github.com/agentscope-ai/QwenPaw ｜ 统计周期：过去 24 小时

## 1. 今日速览

过去 24 小时项目整体活跃度**中高**：共 5 条 Issue 更新（全部为新增/活跃，无关闭）、14 条 PR 更新（8 条关闭/合并，6 条待合并），无新版本发布。合并端以**稳定性修复**和**技能系统/会话标题功能收尾**为主，说明维护者在集中清理此前积压的 PR；但 Issue 侧存在**内存泄漏、对话状态污染、reload 丢失插件注册**等多个高影响问题且尚无对应修复 PR，是当前项目健康度的主要风险点。

---

## 3. 项目进展

今日关闭/合并的 8 个 PR 集中在三个方向：

**稳定性修复（3 个）**
- [#6220 fix(token_usage): don't persist an unseeded cache on shutdown](https://github.com/agentscope-ai/QwenPaw/pull/6220)：修复 `TokenUsageBuffer.stop()` 在磁盘缓存从未初始化时仍强制刷盘的问题，避免关机时写脏数据。
- [#6203 fix(utils): bound and hide the Windows tasklist liveness probe](https://github.com/agentscope-ai/QwenPaw/pull/6203)：为 Windows 下 `tasklist` 进程探测补上 `timeout` 并隐藏窗口，避免命令阻塞/闪窗。
- [#6616 fix(cli): build a valid user message for the headless task command](https://github.com/agentscope-ai/QwenPaw/pull/6616)：修复 `qwenpaw task` 在 `agentscope==2.0.4.post1` 类型约束下消息结构非法导致任务无法执行的问题。

**技能系统生命周期（3 个）**
[#7033](https://github.com/agentscope-ai/QwenPaw/pull/7033) / [#7031](https://github.com/agentscope-ai/QwenPaw/pull/7031) / [#7027](https://github.com/agentscope-ai/QwenPaw/pull/7027)：实现**动态技能加载 + 空闲自动卸载 + frontmatter 路径修复**，为运行期技能管理提供最小可用的运行时基础设施。这是 QwenPaw 技能系统从"静态配置"走向"动态生命周期"的关键一步。

**会话标题自动同步（2 个）**
[#7032](https://github.com/agentscope-ai/QwenPaw/pull/7032) / [#7030](https://github.com/agentscope-ai/QwenPaw/pull/7030)：当 auto-memory 生成新的记忆条目时，会话标题不再停留在首条消息截断，而是随对话演进自动刷新，并配套可观测化。属于会话体验与记忆联动的重要改进，在今日被合并/关闭。

**待合并队列中值得关注的新功能/修复（6 条）**
- [#7223 fix(providers): refresh DeepSeek catalog per vendor retirement and docs](https://github.com/agentscope-ai/QwenPaw/pull/7223)：根据上游 API 移除已停售的 deepseek-chat/reasoner，加入 v4-flash/v4-pro，紧跟厂商模型迭代。
- [#7220 fix(media): reject oversized image dimensions](https://github.com/agentscope-ai/QwenPaw/pull/7220)：修复图片字节数低于 2MiB 但像素超限导致的视觉模型异常（关闭 #7212）。
- [#7219 feat(console): show all-agent LLM and tool-call trend on Token Usage](https://github.com/agentscope-ai/QwenPaw/pull/7219)：在 Token Usage 页面增加全 Agent 的 LLM 调用与工具调用趋势图，提升可观测性。
- [#7183 feat(skills): add workspace-scoped always-on loading](https://github.com/agentscope-ai/QwenPaw/pull/7183)：为技能增加 workspace 级常驻加载模式，适合定义 Agent 核心行为的技能。
- [#7187 fix(chat): exclude reasoning from generated titles](https://github.com/agentscope-ai/QwenPaw/pull/7187)：防止模型思考内容污染自动生成的会话标题（修复 #6979）。
- [#7066 fix(drivers): persist rotated refresh_token for OAuth2 auth-code providers](https://github.com/agentscope-ai/QwenPaw/pull/7066)：修复 OAuth2 授权码模式下旋转后的 refresh_token 未持久化导致远端 MCP 认证失效的问题（修复 #7053）。

---

## 4. 社区热点

今日评论最集中的是两条 Issue，均体现了真实部署场景下的高成本痛点：

- **[#7221 [enhancement] reload_agent() drops plugin workspace-scoped registrations](https://github.com/agentscope-ai/QwenPaw/issues/7221)**（3 条评论）：任何配置变更触发零停机 reload 后，插件在工作区注册的 runtime hooks、modes、slash commands 全部丢失。用户将其标记为 enhancement，但本质上是一个**动态 reload 与插件体系的兼容性回归**，与今日合并的技能动态加载 (#7033) 直接相关。

- **[#7222 [Performance] qwenpaw-backend 运行 2 天内存涨到 20.7GB](https://github.com/agentscope-ai/QwenPaw/issues/7222)**（2 条评论）：进程正常启动并运行两天后内存持续累积至 20.7GB，最终拖慢整机。作者明确区分了"启动阶段泄漏"（#9）与"运行时逐步累积"，是高质量的内存增长类报告。

这两条 Issue 反映出社区对**长跑稳定性**和**热加载/插件一致性**的诉求正变得越来越强烈。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue / PR | 描述 | Fix PR 状态 |
|---|---|---|---|
| 🔴 高 | [#7222](https://github.com/agentscope-ai/QwenPaw/issues/7222) | 后端进程 2 天内存从数百 MB 涨至 20.7GB，运行时持续累积 | 无 fix PR |
| 🔴 高 | [#7217](https://github.com/agentscope-ai/QwenPaw/issues/7217) | 中途停止任务/对话后，下一次对话完全复现上一次的思考与结果，无论问什么 | 无 fix PR |
| 🟠 中 | [#7221](https://github.com/agentscope-ai/QwenPaw/issues/7221) | reload_agent() 后插件 workspace 级注册全部丢失 | 无 fix PR |
| 🟠 中 | [#7218](https://github.com/agentscope-ai/QwenPaw/issues/7218) | 长文本/长推理时高概率出现 "peer closed connection without sending complete message body (incomplete chunked read)" | 无 fix PR，用户正与模型服务商定位超时边界 |
| 🟡 待合入 | [#7212](https://github.com/agentscope-ai/QwenPaw/issues/7212) | 超大像素图片转 base64 导致视觉模型请求异常 | [#7220](https://github.com/agentscope-ai/QwenPaw/pull/7220) 已提交待合并 |
| 🟡 待合入 | [#7053](https://github.com/agentscope-ai/QwenPaw/issues/7053) | OAuth2 旋转 refresh_token 未持久化 | [#7066](https://github.com/agentscope-ai/QwenPaw/pull/7066) 已提交待合并 |
| 🟡 待合入 | [#6979](https://github.com/agentscope-ai/QwenPaw/issues/6979) | 模型 reasoning 内容被写入自动生成标题 | [#7187](https://github.com/agentscope-ai/QwenPaw/pull/7187) 已提交待合并 |

整体来看，**高严重度 Bug 暂无修复 PR**，如果 #7222 与 #7217 下周仍无进展，建议维护者优先介入。

---

## 6. 功能请求与路线图信号

- **reload 后保留插件注册（[#7221](https://github.com/agentscope-ai/QwenPaw/issues/7221)）**：零停机 reload 是生产环境刚需，该能力大概率会被纳入近期版本，与技能系统动态加载路线形成互补。
- **Aider CLI 作为 Agent 接入（[#7224](https://github.com/agentscope-ai/QwenPaw/issues/7224)）**：俄语用户希望将 aider-chat 作为受管 Agent 接入 QwenPaw。这代表了"外部 CLI/API 工具作为一等 Agent"的集成需求。
- **Token Usage 趋势可视化（[#7219](https://github.com/agentscope-ai/QwenPaw/pull/7219)）**：后端接口已实现，前端图表待合入，表明项目在用量可观测性方向持续投入。
- **Workspace 级 always-on 技能（[#7183](https://github.com/agentscope-ai/QwenPaw/pull/7183)）**：为"专职 Agent"场景提供常驻技能加载模式，预计与 #7221 的 reload 保留机制配合使用。
- **DeepSeek v4 模型目录更新（[#7223](https://github.com/agentscope-ai/QwenPaw/pull/7223)）**：属于跟随上游厂商变化的基础维护，预计会快速合并。

---

## 7. 用户反馈摘要

- **超时配置不透明（#7218）**：用户自定义模型服务商反馈"工具是否设置了超时？我这边 180s，你 130-140s 就被退出了"。用户表示在 QwenPaw 中找不到相关超时设置，说明**超时控制的可配置性和文档透明性**存在缺口。
- **停止后状态污染（#7217）**：用户中断对话后，下一次无论问什么，模型都照搬上一次的完整输出。这是直接导致"不可用"的体验级 Bug，破坏信任感。
- **长跑内存焦虑（#7222）**：连续运行两天内存到 20.7GB 的反馈，说明社区已有用户将 qwenpaw-backend 作为常驻服务使用，对资源占用有明确预期。
- **外部 CLI 集成诉求（#7224）**：用户想用 QwenPaw 编排 Aider CLI，表明在真实工作流中，Agent 生态工具的互操作需求正在增长。
- 整体来看，社区用户**愿意提供日志、复现条件和环境细节**（如 #7218 用户主动提出可私下提供完整报错文件），反馈质量较高，值得维护者认真对待。

---

## 8. 待处理积压

- **[PR #7066](https://github.com/agentscope-ai/QwenPaw/pull/7066)（OAuth2 refresh_token 持久化修复）**：创建于 8/16，已满一周，涉及远程 MCP 认证稳定性，建议尽快安排 review。
- **[PR #7183](https://github.com/agentscope-ai/QwenPaw/pull/7183)（workspace-scoped always-on 技能）**：创建于 8/20，待合并队列持续 4 天，属于技能系统路线的一部分，建议与 #7221 一起评估。
- **高严重度 Issue 跟进**：#7222（内存泄漏）与 #7217（对话状态污染）目前无任何 Assignee 或 fix PR，若继续沉默可能影响社区信心。

---

**总结**：QwenPaw 今日的 PR 合并吞吐良好，技能系统与会话体验的功能收尾值得肯定；但无新版本发布、高严重度 Bug 缺少修复 PR、待合并队列存在一周以上的 PR，整体健康度**中等偏上但需警惕稳定性债务积累**。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-24

## 1. 今日速览

ZeroClaw 项目继续保持高强度迭代节奏：过去 24 小时共更新 50 条 Issue（38 条新开/活跃、12 条关闭）和 50 条 PR（45 条待合并、5 条已合并/关闭）。值得注意的是，当日无新版本发布，绝大多数活动集中在架构 RFC 讨论（涉及会话持久化、附件架构、WASM 插件化等）以及安全/稳定性修复（cron 上下文、Landlock 沙箱、文件系统越界写入等）。整体社区讨论深度较高，核心维护者（NiuBlibing、Audacity88、JordanTheJet、vrurg 等）参与频繁，多名受信任贡献者（principal/distinguished contributor）持续产出高质量补丁。项目健康度良好，但需警惕约 45 条 PR 长期待合并造成的积压风险。

## 2. 版本发布

过去 24 小时无新版本发布，最新 Releases 为空。相关发布流程与决策可跟踪维护者决策队列 tracker（[Issue #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)）。

## 3. 项目进展

过去 24 小时共关闭 5 条 PR、12 条 Issue，本轮合入/关闭的主要成果包括：

- **文件系统监听器取消感知修复**（[PR #10217](https://github.com/zeroclaw-labs/zeroclaw/pull/10217) 已关闭，关联 [Issue #9666](https://github.com/zeroclaw-labs/zeroclaw/issues/9666) 已关闭）：修复异步监听器在空闲时调用阻塞 `std::sync::mpsc::Receiver::recv()` 导致 Tokio runtime worker 被挂起、无法被 supervisor 关闭或 reload 的问题（含 v0.8.4 Alpine 现场复现）。由 distinguished contributor JordanTheJet 提交，修复直接消除了一个高风险的运行时挂死隐患。

- **Lemmy 频道功能落地**（[Issue #6441](https://github.com/zeroclaw-labs/zeroclaw/issues/6441) 已关闭）：Lemmy 私信轮询 MVP 频道已完成（与已合并的 Mastodon #6426、Rocket.Chat #6436、Zulip #6438 同批）。这标志着去中心化/自托管社交平台频道矩阵基本补齐。

- **CLI i18n 改造完成**（[Issue #7099](https://github.com/zeroclaw-labs/zeroclaw/issues/7099) 已关闭）：`zeroclaw status` 输出已全部接入 CLI i18n 层，不再使用裸 `println!` 输出用户可见字符串。

- **WASM 插件程序跟踪器第一阶段收尾**（[Issue #7314](https://github.com/zeroclaw-labs/zeroclaw/issues/7314) 已关闭）：作为 WASM 生态（架构、WIT/component-model、宿主边界、生命周期钩子、安全等）的协调 tracker 已完成第一阶段使命，后续将由具体 RFC 承接。

**整体进展判断**：当前项目重心明显向"架构固化"倾斜——大量活跃 RFC 正在集中界定 runtime 会话所有权（[#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)）、附件架构（[#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488)）、会话持久化契约（[#9600](https://github.com/zeroclaw-labs/zeroclaw/issues/9600)）等边界。同时，安全加固类 PR（Landlock、工作区写入限制、egress 治理）密集提交，说明项目在快速扩张后正经历一轮"补安全课"的收敛期。

## 4. 社区热点

今日讨论热度最高的议题全部集中在架构 RFC，反映了社区对"定义清晰的运行时边界"的强烈关注：

- **[Issue #9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) — Runtime-owned conversation sessions and transport surface adapters（25 条评论）**：由 NiuBlibing 提交的 RFC，主张将会话所有权上收到 runtime，并引入传输面适配器。已修订至 Rev 2，包含 `InboundAction` 强制入站、持久化准入与模糊结果语义等细节。该 RFC 与 #9488/#9600 构成一个连环架构变更组，讨论密度高，风险标记为 high。

- **[Issue #9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) — Unified attachment architecture for web chat and channels（19 条评论）**：同样出自 NiuBlibing，目标是统一 Web Chat 与各频道的附件处理模型，解决"每个频道各自实现附件逻辑"的碎片化问题。

- **[Issue #6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) — Decouple memory lifecycle policy from storage backends（17 条评论）**：fanchanghu 提出的 RFC，要求将持久化存储与生命周期治理策略解耦，避免各 gateway/channel/backend 重复实现 consolidation 逻辑。该议题已持续 3 个月，讨论仍很活跃。

- **[Issue #8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) — Realtime speech-to-speech channel for Gemini Live（17 条评论）**：8 月 16 日已被重写为 broker 契约的 v2 方案，为实时语音对话规划了一个 feature-gated 的 broker 层，优先对接 Gemini Live。

- **[Issue #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — Maintainer decision queue for RFCs（13 条评论）**：Audacity88 建立的维护者决策 tracker，当前是 RFC/设计问题/发布策略问题进入接受/拒绝/延期流程的"总入口"。该 tracker 的存在本身说明项目 RFC 数量已多到需要专门的调度队列。

**背后的诉求**：这些热点共同指向一个信号——ZeroClaw 正在从"功能拼装"走向"平台化"。社区希望将分散在 channel/gateway/runtime 中的横切逻辑（会话、附件、内存、语音）收拢为 runtime 层面的统一契约，以支撑后续 WASM 插件体系（[#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076)）的大规模扩展。

## 5. Bug 与稳定性

按严重程度排列（不含已关闭修复项）：

### 高风险

- **[Issue #6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105)（[OPEN] [Bug] Agent doesn't have context of the cron job it's run，严重度 S2，状态 blocked）**：Agent 响应 cron 任务时没有该任务的上下文引用（例如定时提醒发出后，Agent 无法知晓这是它自己发出的消息）。已获得 accepted 标签但被 blocked，需等待相关架构变更（cron 上下文传递）落地。今日有两条 PR 与该问题相关：[PR #10258](https://github.com/zeroclaw-labs/zeroclaw/pull/10258)（修复 `cron update --command` 写入未用列并误触发 shell 策略校验）和 [PR #10253](https://github.com/zeroclaw-labs/zeroclaw/pull/10253)（修复 cron 调度器二次解析 SecurityPolicy 导致工作区策略丢失的问题）。

- **[PR #10241](https://github.com/zeroclaw-labs/zeroclaw/pull/10241) — restore supervised shell approval routing（[OPEN] risk:high）**：修复频道驱动的受监督 shell 调用当前"在任何人响应前就被拒绝"的问题，并支持优先使用独立配置的审批人。这是与用户直接相关的安全+可用性双重修复。

- **[PR #10098](https://github.com/zeroclaw-labs/zeroclaw/pull/10098) — grant Landlock access to DNS and TLS configuration（[OPEN] risk:high，needs-author-action）**：Landlock 文件系统白名单缺少 glibc resolver 所需路径，导致所有沙箱子进程 `getaddrinfo()` 失败（网络能力完全不可用）。修复方案为补充 `/etc/resolv.conf`、`/etc/nsswitch.conf` 等读取规则。

- **[PR #9977](https://github.com/zeroclaw-labs/zeroclaw/pull/9977) — confine filesystem mutations to workspace（[OPEN] risk:high，needs-maintainer-review）**：确保共享数据目录在备份/保留中的权威性，并阻止文件写入操作（即使通过符号链接或文件系统重解析点绕过）越出活动策略授权范围。这是对沙箱逃逸/授权路径绕过类攻击的防护加固。

### 中低风险

- **[PR #10256](https://github.com/zeroclaw-labs/zeroclaw/pull/10256) — redact duplicate idempotency keys from logs（[OPEN]）**：停止将调用方控制的 `X-Idempotency-Key` 原值写入日志，仅记录 `idempotency_key_present: true`，防止敏感信息经日志泄露。

- **[PR #9999](https://github.com/zeroclaw-labs/zeroclaw/pull/9999) / [PR #9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447) — 终端响应分类修复（[OPEN] blocked/in-progress）**：将 OpenAI-compatible `finish_reason: "length"` 和 Anthropic 不完整终端响应分类为类型化输出截断失败，而非成功回复。这两条 PR 为 stacked 关系，需按 #9447 → #9999 顺序合入，当前前者仍处于 in-progress + needs-author-action。

- **[PR #10250](https://github.com/zeroclaw-labs/zeroclaw/pull/10250) — contain plugin private egress carveouts（[OPEN]）**：收紧插件出口白名单，仅当私有地址 carveout 的所有匹配目标已由 `egress_hosts`（如公共 IP）覆盖时才被接受。

## 6. 功能请求与路线图信号

当日功能请求值得关注的信号如下（结合 PR 生态判断）:

**可能进入下一版本的高概率项：**

- **Agent Plugins 1.0 标准加载支持**（[Issue #9810](https://github.com/zeroclaw-labs/zeroclaw/issues/9810)）：加载符合 [agent-plugins.org](https://agent-plugins.org/) v1.0.0 的 `plugin.json + skills/ + mcp.json` 社区插件包。配合 [PR #10146](https://github.com/zeroclaw-labs/zeroclaw/pull/10146)（feat(plugins): activate logical channel instances，XL 规模，已 restack 到已合入的 #9126 之上）以及 [PR #9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109)（Hailo-Ollama 原生支持）判断，插件生态正在从"能力支持"走向"分发标准"。

- **跨 Agent 记忆授权**（[PR #10252](https://github.com/zeroclaw-labs/zeroclaw/pull/10252)）：新增按类别范围限定的跨 Agent 记忆授权（category-scoped cross-agent grants），保留旧字符串格式兼容。该能力是上一条 [RFC #6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850)（内存生命周期与存储解耦）的落地前奏。

- **WASM 全方位插件架构**（[Issue #10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076)）：hook/backend/capability 三层插件化提案，"everything is a plugin"。这是当前 WASM 相关 tracker（#7314 已关闭）的终极形态。

- **异步子任务监督——Goal mode v3**（[Issue #9703](https://github.com/zeroclaw-labs/zeroclaw/issues/9703)）：父目标对分离/并发子工作保留持久所有权、预留预算、回收结果。目前状态 blocked。

**新频道请求仍是社区刚需：**

- **Slack Events API HTTP 模式**（[Issue #9022](https://github.com/zeroclaw-labs/zeroclaw/issues/9022)）：为 scale-to-zero 部署提供 Webhook 接收方式，避免轮询开销。
- **Twilio SMS**（[#6427](https://github.com/zeroclaw-labs/zeroclaw/issues/6427)）、**Zulip**（[#6437](https://github.com/zeroclaw-labs/zeroclaw/issues/6437)）、**Rocket.Chat**（[#6435](https://github.com/zeroclaw-labs/zeroclaw/issues/6435)）、**Mastodon**（[#6423](https://github.com/zeroclaw-labs/zeroclaw/issues/6423)）：均为 accepted 状态、长期未关闭，其中 Mastodon 点赞数最高（👍 1 🏆 全场唯一获得点踩之外正反馈的功能请求）。

**安全/隐私向功能：**

- **公链地址发布白名单例外**（[Issue #9825](https://github.com/zeroclaw-labs/zeroclaw/issues/9825)）：出站泄漏检测器将公开区块链地址误判为高熵密钥，导致支付链接无法送达。该问题切中"安全检测误伤正常业务"的典型痛点。

- **工作区相对禁用路径 + .zeroclawignore**（[Issue #8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424)）：保护工作区内部敏感文件（`.env`、`config.yaml`、`rust-toolchain.toml` 等），与 [PR #9977](https://github.com/zeroclaw-labs/zeroclaw/pull/9977)（限制文件系统变更到工作区）形成互补。

- **网关注入原样消息发送**（[Issue #10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050)）：当前 gateway 挂载的 47 个 `/api/*` 路径中，没有一个能"不经过 agent 回合、直接将调用方提供的消息原样发送到指定频道"。这是一个非常具体且实用的运维/集成缺口。

## 7. 用户反馈摘要

- **"找不到 napcat / onebot 选项"**（[Issue #2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503)，已关闭）：用户 irunmyway 希望接入 OneBot 协议（NapCat），但在现有配置界面找不到选项。该需求已被接受并落地，说明项目对第三方协议适配有持续投入——但仍反映出官方频道列表中 QQ/OneBot 生态的重要性。

- **"Webhook 系统对通用发送方不可用"**（[Issue #2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467)，已关闭）：用户 MexHigh 反馈 Webhook 无法处理 GitHub Webhook 这类任意 payload，建议支持自定义路径和转换（transform）以进行 payload 检查。该问题已关闭，但类似的"低成本集成能力"诉求仍高频出现（参见 #10050 的原样消息发送需求）。

- **"Agent 不知道它自己发的定时消息"**（[Issue #6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105)，开放中）：用户 radther 描述了一个典型场景——让 Agent 定时发送提醒后，Agent 在后续对话中对这条已发送消息没有上下文，无法基于它进行追问或修正。这是 cron 与会话上下文割裂的直接体现，用户期望"Agent 应该像记得对话一样记得自己发过的定时任务"。

- **"内存策略不该由每个 gateway 重新实现"**（[Issue #6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850)，开放中）：社区对当前记忆/存储架构的批评集中在"同一套生命周期治理逻辑在多个后端重复实现"，要求明确 `Memory` trait 的边界——存储归存储、治理归治理。

- **来自 PR 侧的用户声音**：多条 PR 的作者（jstar0、zyw02 等新面孔）集中提交了 cron 与安全修复，侧面说明有实际部署用户在使用 cron 功能（`zeroclaw cron update`）并踩中工作区策略丢失、命令列写入错误等具体问题。

## 8. 待处理积压

以下事项长期开放且进展缓慢或处于阻塞状态，需维护者关注：

- **[Issue #6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850)（RFC: Decouple memory lifecycle policy from storage backends）**：创建于 2026-05-22，已近 3 个月，17 条评论，状态 needs-author-action。作为架构性 RFC，其结论将深刻影响后续记忆功能开发，建议维护者尽快给出方向性裁定（接受/拒绝/拆分），别让它继续悬置。

- **[Issue #6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105)（Agent cron 上下文缺失，S2 严重度）**：状态 blocked，绑定的修复 PR（#10258、#10253）均已出现但仍待合入。这属于用户可感知的功能缺陷，而非纯架构债，建议优先推动。

- **一组 accepted 超 3 个月的频道功能请求**：[#6423 Mastodon](https://github.com/zeroclaw-labs/zeroclaw/issues/6423)、[#6427 Twilio SMS](https://github.com/zeroclaw-labs/zeroclaw/issues/6427)、[#6435 Rocket.Chat](https://github.com/zeroclaw-labs/zeroclaw/issues/6435)、[#6437 Zulip](https://github.com/zeroclaw-labs/zeroclaw/issues/6437)、[#6448 Home Assistant](https://github.com/zeroclaw-labs/zeroclaw/issues/6448)。注意同期提交的 Lemmy 频道（#6441）已关闭落地，而这 5 条仍处于 accepted 状态无实质进展。如果频道宽度是 v0.9/1.0 的差异化卖点，建议按"协议族"批量推进。

- **[PR #9977](https://github.com/zeroclaw-labs/zeroclaw/pull/9977)（confine filesystem mutations to workspace，risk:high）**：已在 needs-maintainer-review 状态停留超 10 天（提交于 08-13，今日仍未合入）。作为威胁模型级别的安全修复，搁置越长，暴露面越大。

- **[PR #10144](https://github.com/zeroclaw-labs/zeroclaw/pull/10144) 与 [PR #10146](https://github.com/zeroclaw-labs/zeroclaw/pull/10146)**：均为 XL 规模、分别处于 in-progress 和 open 状态的高复杂度 PR（provider 生命周期核算、逻辑频道实例激活），这类超大 PR 长期停留在待合并区间会持续增加后续 merge 冲突成本，建议维护者明确分割或优先评审路径。

---

*本日报由 AI 分析师根据 ZeroClaw GitHub 仓库公开数据自动生成，仅供参考。数据采集截止 2026-08-23 23:59 UTC。*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*