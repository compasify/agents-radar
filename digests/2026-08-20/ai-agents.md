# OpenClaw 生态日报 2026-08-20

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-08-19 23:12 UTC

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

# OpenClaw 项目动态日报 — 2026-08-20

## 今日速览

过去 24 小时 OpenClaw 仓库保持高强度活跃：Issues 更新 500 条（新开/活跃 460 条，关闭 40 条），PR 更新 500 条（合并/关闭 84 条，待合并 416 条）。无新版本发布，项目正处于 v2026.8.1-beta.2 的 release validation 阶段（#125626），维护者已同步新增验证交接文档（#126456）。值得关注的是，待合并 PR 数量高达 416 条，且大量 P0/P1 级 Bug（如 #108435 gateway 启动失败、#70903 provider 冷却阻塞）长期挂起、未见对应修复 PR，项目修复吞吐与问题涌入之间存在明显剪刀差。

## 版本发布

今日无新版本 Release 发布。当前最新验证版本为 v2026.8.1-beta.2（#125626 正在收集多测试者验证结果），上一个稳定版为 2026.7.1。另有一个值得注意的发布工程 PR #120522（`ci: publish extended-stable GitHub releases`）正处于等待作者状态，拟将 extended-stable 构建接入现有发布管道，完善多通道发布流程。

## 项目进展

今日有 84 个 PR 被合并/关闭，主要集中于以下可确认的成果：

- **fix(matrix): accept Room v12 IDs without server suffix**（#123931，已合并）— 修复 Matrix Room v12 无后缀 ID 被误判为未解析而静默丢弃的问题，涉及消息投递可靠性，merge-risk 标注为 message-delivery。
- **fix: thinking controls update after dynamic model discovery**（#125847，已合并）— 修复动态 provider 加载完成后 Web UI 思考开关不刷新的问题，属于 Web UI/gateway/agents 三端联动修复，merge-risk 标注为 compatibility。
- **fix(providers): report request acceptance consistently**（#126028，新建、待合并）— 覆盖 Amazon Bedrock、Anthropic Vertex、Google、Ollama 等多个 provider，统一请求受理状态上报逻辑，是当前最大的跨 provider 修复 PR，merge-risk 标注为 compatibility + availability，处于 ready for maintainer look。

此外，今日新开的 #126466（QA 脚本错误保留）、#126248（Telegram 流式提问落定）、#126465（cloud worker 租约恢复）均来自核心维护者 steipete，正处于维护者评审阶段，说明日常修复管线仍在运转。

## 社区热点

- **#116201 Realtime voice work 无界状态保留**（60 条评论，🦞 diamond lobster） — 今日评论数最高的 Issue。讨论集中在 Realtime voice 会话在慢/突发 provider 场景下对 superseded consult、provider frames、pre-ready audio 的无界保留问题，涉及 session-state 与资源回收，社区诉求是提供硬性所有权边界。目前无对应 fix PR。
- **#44925 Subagent 完成静默丢失**（26 条评论，👍 2）— Telegram forum bot 场景下 subagent 完成通知失败后无重试、无提示、无自动重启，存在 E31/E42/E45 多个失败模式。社区对“静默失败”的容忍度已接近零，但该 Issue 标记为 needs-maintainer-review + needs-product-decision，已积压 5 个月。
- **#62505 Coding Agent 完全不干活**（15 条评论，👍 1）— 用户 drpau 报告 2026.4.2 之后 coding agent 退化为仅输出 vague status updates 然后道歉，属于典型回归问题，目前仍无 fix PR 链接。

**诉求分析**：今日热点集中在“静默失败”与“无界资源”两大类——用户对系统不报错但行为异常（subagent 丢失、coding agent 空转、voice 状态膨胀）的容忍度最低。这些问题的共性在于缺少显式的失败信号与资源上限，社区期望的是“fail loudly, bounded by default”。

## Bug 与稳定性

按严重程度排列今日活跃的 Bug：

**P0（阻塞级）**
- **#108435** gateway 启动失败（7.15 创建，14 条评论）— 更新到 2026.7.1 后 systemd/ollama/手动三种方式均无法启动，`Error: gateway did not start on 127.0...`，标注 crash-loop、ux-release-blocker。暂无 fix PR。
- **#70903** 文件级 provider 冷却阻塞（4.24 创建，8 条评论，stale）— 402 billing 错误后 `disabledUntil` 持久化且逐次延展，用户充值后仍被阻止数小时。P0 + ux-release-blocker，但已 stale，无法确认是否仍在影响最新版本。

**P1（严重）**
- **#116201** Realtime voice 无界状态保留（60 条评论）— 无 fix PR。
- **#44925** Subagent 静默丢失（26 条评论）— 无 fix PR。
- **#62505** Coding Agent 回归不工作（15 条评论）— 无 fix PR。
- **#38327** `Cannot convert undefined or null to object` with google-vertex（14 条评论）— 2026.3.2 回归，无 fix PR。
- **#40001** write 工具无 append 模式导致共享文件被覆盖（14 条评论）— data-loss，无 fix PR。
- **#111498** Anthropic auth 恢复后 workspace-state 迁移阻塞主 agent（已关闭）— 已有 linked PR 修复，属于今日少数已闭环的高危 Bug。
- **#94939** 6.x 迁移致 conversation-store SQLite 空文件（8 条评论）— MS Teams proactive 发送被破坏，已有 linked-pr-open。
- **#115546** CLI-budget 压缩超时提前 4.9s–50s 触发、100% 失败（8 条评论）— 无 fix PR。
- **#112391** Docker `:latest` 标签从 2026.7.1 回退到 2026.6.33，触发降级保护（6 条评论，👍 2）— 发布管道事故，社区反馈强烈。

总体来看，P0/P1 问题数量庞大且多数缺乏 fix PR，项目稳定性仍处于“高压力、低闭合”状态。### 待合并 PR 中的修复倾向

- **#120573**（P1, merge-risk: session-state, ready for maintainer look）— 阻止 transcript 变更后陈旧 context usage 被持久化，修复 retries/forks/rebases 场景。
- **#120622**（P1, ready for maintainer look）— 修复 legacy CLI assistant 导致 terminal context provenance 被错误恢复的回归问题。
- **#126248**（P1, ready for maintainer look）— Telegram 流式 ask_user 提示绕过问题注册、按钮失败误报、重复 fallback 三合一修复。
- **#120230**（P1, clawsweeper 自动生成）— Windows Scheduled Task 重启时保留 gateway 调用方 CLI，避免 `taskkill /T` 误杀。
- **#120299**（P1, needs proof）— 修复用户固定模型后 fallback 安全被绕过的路由问题。

## 功能请求与路线图信号

今日无新增高热度 feature request，但以下既有请求持续获得关注，且部分已有对应实现 PR：

- **#56675 fallback model chain for compaction and LCM summaryModel**（P2，6 条评论）— 核心诉求是压缩与 LCM 摘要模型支持 fallback 链，避免单模型故障导致 session 无限增长。当前无直接 PR，但 #120569（mark missing OpenAI Completions usage unavailable）和 #120573（prevent stale context usage）在向“更健壮的上下文管理”方向铺路。
- **#60572 Multi-Slot Memory Architecture**（P2，👍 3）— 多 memory provider 分层共存，解决单一 slot 限制。该 Issue 与 #114612（SQLite 无界增长）叠加，社区对 memory 架构演进需求明确。
- **#63930 Anthropic advisor tool 支持**（P2）— 增加 beta 服务器端 tool block 的通用处理，属于 provider 能力跟进，预计会随 Anthropic API 演进进入路线图。
- **#9016 OpenRouter 用量成本暴露给 agent**（P2）— 社区持续期望 agent 能感知 token 成本，目前仍处于 needs-maintainer-review 状态。
- **#42276 Reasoning stream**（P3，🦞 diamond lobster）— 用户希望像 OpenAI/Grok 那样覆盖式显示思考过程，属于 UX 改进，但目前无 PR。

## 用户反馈摘要

- **强烈不满——回归破坏工作流**：#62505 用户 drpau 明确表示“pumping out work for weeks and now just doesnt do _anything_”，显示回归 Bug 对生产力影响极大。#112391 的 Docker 标签回退让用户 czjlc3c3c3 直接遭遇降级保护而无法启动，社区对发布管道信任度下降。
- **静默失败是最痛的点**：#44925 subagent 完成丢失、#49876 cron 会话在工具失败时生成幻觉输出并发送给用户、#119401 NO_REPLY 抑制无法被 silentReply 策略覆盖——用户多次提到“无法判断是系统问题还是配置问题”，这类缺乏显式信号的行为最令用户困扰。
- **本地/小众模型支持诉求上升**：#120563 用户 gaili-personal 报告 Ollama 自定义 provider 每轮只发送固定上下文、历史完全不携带；#108379 小米 MiMo 模型重复生成；#124284 vLLM + thinking 组合在 beta.2 中 XML 工具调用被破坏——长尾 provider 的适配质量成为用户流失风险点。
- **对维护节奏的隐性不满**：多个高赞 issue（#70903、#83598）长期无 fix PR，用户已出现“locally hotfixed”（#90361）、“have workaround locally” 的表述，说明部分用户开始自行修补而非等待上游。

## 待处理积压

以下为创建时间早、影响重大但长期未闭合的重要 Issue / PR，提醒维护者优先关注：

| Issue/PR | 创建时间 | 标签 | 积压原因 |
|---|---|---|---|
| **#70903** Persistent provider cooldown blocks user | 2026-04-24 | P0, stale | P0 但已 stale，可能已在新版本修复但未关闭，需确认 |
| **#44925** Subagent completion silently lost | 2026-03-13 | P1, diamond lobster | 无 fix PR，needs-product-decision，5 个月无人接手 |
| **#49876** Cron hallucinated output on tool failure | 2026-03-18 | P1, security | 安全相关问题却需 product decision，已拖 5 个月 |
| **#40001** Write tool lacks append mode | 2026-03-08 | P1, data-loss | data-loss 级别但长期无 PR，社区已有自行 workaround |
| **#83598** anthropic:claude-cli OAuth refresh dead-end | 2026-05-18 | P1, auth-provider | #73682 修复后仍复现，说明修复不彻底 |
| **#56217** 1Password secret provider crash-loop exhausts rate limits | 2026-03-28 | P1, crash-loop | 有 linked-pr-open 但 PR 也在积压 |
| **#16670** Onboarding Wizard missing Memory/Embedding setup | 2026-02-15 | P2, ux-friction | 4 个月无人处理，影响新用户上手 |
| **PR #120522** ci: publish extended-stable releases | 2026-08-08 | maintainer, waiting on author | 等待作者更新，发布管道完整性受阻 |

另有 416 个待合并 PR 本身构成积压——其中相当比例标注 `status: 👀 ready for maintainer look`（如 #120573、#120622、#126028），说明维护者评审带宽是当前项目的主要瓶颈。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比报告 — 2026-08-20

## 1. 生态全景

过去 24 小时，生态呈现"高活跃、零重磅发布"的密集迭代态势：12 个追踪项目中仅 Moltis 发布 2 个增量版本，IronClaw 完成 1.3.0 的 promote 动作，其余项目均在为下一版本积蓄代码。共性痛点集中在三个层面——**静默失败**（subagent 丢失、提问无反馈、健康检查误报）、**更新/安装链路可靠性**（Windows 蓝屏、Docker 标签回退、安装器破坏安装）以及**维护者评审带宽不足**（OpenClaw 积压 416 个待合并 PR、ZeroClaw 积压 48 个）。与此同时，多项目同步向"模型回退链、上下文/会话所有权、安全 fail-closed"三个方向收敛，生态正从"功能扩张期"转入"稳定性与治理期"。

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 合并率 | Release | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（460 活跃 / 40 关闭） | 500（84 合并 / 416 待） | 16.8% | 无（v2026.8.1-beta.2 验证中） | ⚠️ 高涌入、低闭合；P0/P1 大量无 fix PR，发布验证流程仍在运转 |
| **Hermes Agent** | 50（41 活跃 / 9 关闭） | 50（11 合并 / 39 待） | 22% | 无 | ⚠️ 高活跃；ultra 兼容 bug class 全链路闭环，但 3 个 P1 更新链路 Bug 无 PR 认领 |
| **NanoClaw** | 3 新开 | 34（24 合并 / 10 待） | 70.6% | 无 | ✅ 健康高产；社区报障当日即有修复 PR，Node 26 问题闭环快 |
| **ZeroClaw** | 43（41 活跃 / 2 关闭） | 50（2 关闭 / 48 待） | 4% | 无 | ✅ 架构治理期；防 panic 重构密集提交，但合并率极低、Windows 兼容积压 71 天 |
| **CoPaw** | 50（46 关闭 / 4 活跃） | 48（17 合并 / 31 待） | 35.4% | 无 | ✅ 清理高效；单日关 46 条老 Issue，但 #2884 数据安全事件需公开复盘 |
| **IronClaw** | 13（9 活跃 / 4 关闭） | 39（15 合并 / 24 待） | 38.5% | 1.3.0 promote（PR） | ✅ 路线图清晰；v1.4.0 预研双线展开，CI apt-get 悬挂待修 |
| **Moltis** | 3 关闭 | 10（5 合并 / 5 待） | 50% | 2 个增量版 | ✅ 闭环效率最佳；高危 vault 认证漏洞（CWE-306）修复待合并为当前最大风险 |
| **NanoBot** | 5 新开/活跃 | 27（8 合并 / 19 待） | 29.6% | 无 | ✅ 功能实质落地（ask_clarification）；8 个 conflict PR 阻塞含 p0，LangSmith 回归悬置 5 个月 |
| **PicoClaw** | 0 新开 / 1 关闭 | 5（2 关闭 / 3 待） | 40% | 无 | 🟡 中上；Telegram UX 升级合入，2 条 stale PR 需决断 |
| **LobsterAI** | 6 条 stale 标记 | 8 全部关闭 | 100%（今日） | 无 | ⚠️ 6 条高影响 Issue 积压 4 个月被标 stale，响应滞后明显 |
| **NullClaw** | 0 | 1 待合并 | 0% | 无 | ⚪ 几乎停滞，仅文档修复 |
| **ZeptoClaw** | 0 | 0 | — | 无 | ⚪ 无活动 |

## 3. OpenClaw 在生态中的定位

**社区规模：生态绝对中心，但吞吐承压。** OpenClaw 单日 500 Issue + 500 PR 更新，是 Hermes/ZeroClaw/CoPaw（各约 50）的 10 倍、NanoClaw（34 PR）的 15 倍。但需区分"涌入量"与"吞吐量"：其合并率仅 16.8%，远低于 NanoClaw（70.6%）、Moltis（50%）、IronClaw（38.5%），416 个待合并 PR 是全网最大积压，维护者评审带宽已是硬瓶颈。

**技术路线：覆盖面最广的"全家桶"路线。** gateway/provider/agent 三端分层 + 多 provider 抽象（Bedrock、Vertex、Ollama 等）+ 多消息渠道（Matrix、Telegram）+ 多发布通道（extended-stable）。相比 Hermes 偏重 Desktop SDK 与推理参数治理、NanoClaw/CoPaw 偏重 IM 团队协作、IronClaw/ZeroClaw 偏重 Rust 内核与性能，OpenClaw 以最大兼容性矩阵换取生态位，也因此承受最重的跨端回归压力。

**优势：** 社区反馈量级与用户深度全网第一（diamond lobster 级高投入用户、clawsweeper 自动生成 PR 的自动化贡献管线、正式的 release validation 流程），生态外围工具链（自动化 PR、发布工程）是其他项目未建立的。

**风险：** 修复吞吐与问题涌入的"剪刀差"是最显眼警示——P0 级 #108435（gateway 启动失败）无 fix PR、#44925（subagent 静默丢失）积压 5 个月、Docker 标签回退事故（#112391）损害发布信任。对比 Moltis 24 小时内闭环 3 个 bug、NanoClaw 社区报障当日即有修复，OpenClaw 需在评审带宽上找到杠杆点。

## 4. 共同关注的技术方向

| 方向 | 涉及项目与具体诉求 |
|---|---|
| **消灭静默失败 / 可观测性** | OpenClaw（#44925 subagent 丢失、#62505 coding agent 空转）、Hermes（#90159 健康检查误报）、LobsterAI（#1569 提问无反馈）、CoPaw（#7102 流冻结 10 分钟无提示）、NanoBot（#5441 已恢复错误仍判失败）、IronClaw（#7748 "got confused"）。**共识：显式失败信号 + 资源上限 + 状态可视化** |
| **模型回退链与多 provider 路由** | OpenClaw（#56675 压缩模型 fallback 链）、Hermes（#74558 Copilot 沿梯子降级、ultra 钳制矩阵）、PicoClaw（#3200 默认回退链，stale 关闭）、CoPaw（#2089 fallbacks 机制）、Moltis（#1198 Responses vs Chat Completions 分线）。**共识：单模型故障不拖垮会话；推理参数按 provider 能力钳制** |
| **会话/上下文所有权与生命周期** | ZeroClaw（RFC #9487 runtime-owned sessions）、OpenClaw（#116201 无界状态保留、#120573 stale context）、IronClaw（#7751 持久化 per-user 容器）、CoPaw（#2723 切频道任务消失）、NanoBot（#5271 陈旧任务覆盖新会话）。**共识：状态有界、持久可恢复、所有权归属清晰** |
| **更新与安装链路可靠性** | Hermes（#83529 更新破坏安装、#89614 蓝屏、#89675 更新后会话全空）、OpenClaw（#112391 标签回退）、ZeroClaw（#9290 安装器崩溃、#7462 Windows 74 测试失败）、NanoClaw（#3354 非交互 shell、#3359 Node 26）、LobsterAI（#2511 Windows 安装器）。**共识：更新即破坏不可接受；容器标签不可变；CI 需覆盖 Windows/非交互环境** |
| **安全 fail-closed 与凭据治理** | Moltis（#1216 vault 端点无认证，CWE-306）、ZeroClaw（#9976 凭据片段泄漏日志、#9397 空群组=禁止所有）、NanoClaw（#3339 凭据不可验证时 fail closed）、CoPaw（#2884 目录被清空信任危机）、Hermes（#90317 用户选择的 provider 有最终决定权）。**共识：未认证端点不可存在；空配置默认拒绝；凭据最小暴露** |
| **长尾/本地模型兼容** | OpenClaw（#120563 Ollama 固定上下文、#108379 MiMo 重复生成）、Hermes（#90335 执行纪律扩展到 DeepSeek/Kimi/Qwen/GLM）、Moltis（#1213 GPT-5.6 Luna 路由）、CoPaw（#7102 GLM 5.3 冻结）、ZeroClaw（#10106 转录服务代理过严）。**共识：模型名匹配走向能力契约；需兼容性回归测试与降级策略** |

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户/场景 | 关键架构特征 |
|---|---|---|---|
| **OpenClaw** | 全功能个人 AI 助手（多 provider + 多渠道 + 多 agent） | 泛个人用户与开发者；生态参照系 | gateway/provider/agent 三端分层；最大渠道与 provider 矩阵；多发布通道工程 |
| **Hermes Agent** | Desktop 优先 + Discord/语音 + 推理参数治理 | 桌面重度用户、技术爱好者 | Electron Desktop + gateway；SDK contract 敏感；`reasoning_effort` 跨 provider 钳制体系 |
| **NanoClaw** | Slack/Telegram 团队协作 + Cursor Agent 互操作 | 团队/企业 channel 运维 | `--slack-agents` 功能分层；Telegram 原生群组选择器；安装向导对多样环境的适配 |
| **ZeroClaw** | Rust 内核 + ZeroCode DSL + 架构治理 | Rust/自托管技术用户 | 系统性防 panic 重构（17 处隐患）；WASM 插件化 RFC；反模式清理 tracker（307 处） |
| **IronClaw** | 性能 + 持久化沙箱 + 企业级发布 | 对延迟敏感的重度用户（nearai 生态） | Rust；Docker Exec 复用容器（延迟 1–2.5s→~40ms）；能力响应规范化；automations 执行契约 |
| **CoPaw** | Desktop 客户端 + 邮件智能管理 + 浏览器自动化 | 中文用户、日常生产力（agentscope 生态） | 大扫除式 Issue 清理；流停滞看门狗；远程图片 SSRF 防护；多用户 Hub 在途 |
| **Moltis** | 多后端容器（Apple Container）+ 快速迭代 | 多后端/集成开发者 | 按日多版本自动化发布（20260818.08/.10）；强制回归测试；OpenAI 官方 vs 兼容 endpoint 显式分线 |
| **NanoBot** | 轻量 WebUI/TUI + skills + 对话澄清 | 教育/入门/轻量部署（HKUDS） | ask_clarification 工具短路澄清；本地压缩复用 system prefix；零依赖 nano_timer 在途 |
| **PicoClaw** | Telegram 交互体验打磨 | 轻量个人用户 | 交互式命令引导替换 CLI 子命令记忆；话题模式识别；模型回退链方案搁置 |
| **LobsterAI** | IM 渠道斜杠命令 + Windows 安装器 | 网易有道生态用户 | IM 会话管理（/new、/compact、/help）；SSE 竞态修复；历史 PR 统一收尾 |
| **NullClaw / ZeptoClaw** | 文档维护 / 无活动 | 观察者 | 无实质开发信号，建议关注是否进入维护休眠 |

## 6. 社区热度与成熟度

**快速迭代期（功能扩张 + 高 PR 流动）**：OpenClaw（500/500 日更新，但合并率 16.8%，处于"涌入 > 消化"状态）、CoPaw（单日关闭 46 条 Issue，清理与扩张并行）、NanoClaw（合并率 70.6%，功能落地最密集）、Hermes（ultra 修复全链路闭环，更新链路欠账）。

**质量巩固期（架构治理 / 版本化 / 高闭环）**：ZeroClaw（无重大合并但 refactor 集群密集提交，技术债清理导向）、IronClaw（1.3.0 收官 + v1.4.0 预研，路线图最清晰）、Moltis（3 个存量 bug 24h 全闭环，按日发布自动化成熟度全网最高）。

**体验打磨与冲突清理期**：NanoBot（功能落地但 8 个 conflict PR 含 p0 阻塞）、PicoClaw（小步快走，stale PR 待决断）。

**维护滞后风险期**：LobsterAI（高影响 Issue 积压 4 个月被标 stale）、NullClaw / ZeptoClaw（无实质活动）。

**成熟度关键指标**：闭环速度（Moltis 24h、NanoClaw 当日）比 PR 体量更能反映项目健康度；OpenClaw 与 ZeroClaw 的积压本质上都是"评审带宽 < 贡献流入"的治理问题。

## 7. 值得关注的趋势信号

1. **"fail loudly, bounded by default"正成为智能体框架的设计共识。** 六个项目最高热度问题均指向静默失败（subagent 丢失、提问无反馈、健康检查误报、流冻结无提示），社区容忍度已接近零。开发者参考：agent 系统必须显式暴露失败信号并设置资源上限，而非"礼貌地不工作"；状态保留必须设硬边界。

2. **更新/安装链路是信任的第一道防线，也是最普遍的失分项。** "It was working yesterday"（Hermes #83529）、Docker 标签回退触发降级保护（OpenClaw #112391）、更新后会话全空（Hermes #89675）——发布管道事故正在系统性消耗社区信任。参考价值：容器标签不可变、更新必须可回滚、CI 矩阵需覆盖 Windows 与非交互环境。

3. **模型回退链从"高级特性"变为"基础能力"。** 至少 5 个项目在讨论或实现 fallback chains；OpenAI 官方 vs 兼容 endpoint 的分线路由（Moltis #1198）、推理强度跨 provider 钳制（Hermes ultra 修复）正在沉淀为中间层标准词汇。模型发布节奏快于框架适配，多模型容灾将是留存率胜负手。

4. **会话/上下文所有权是下一场架构战役。** ZeroClaw RFC "runtime-owned sessions"、OpenClaw 无界 voice 状态、IronClaw 持久化 per-user 容器、CoPaw 任务消失——四个项目从不同入口撞到同一问题：状态生命周期不清导致资源泄漏、任务丢失、恢复困难。智能体框架需在架构层定义 session/context/container 的归属与回收。

5. **安全默认值（fail-closed）与最小暴露原则加速落地。** 从 Moltis vault 无认证（CWE-306）到 ZeroClaw "空群组=禁止所有"、NanoClaw "凭据不可验证即拒绝"，涉及凭据、资金、删除类操作的敏感面正在被重新审计。开发者参考：安全修复的优先级应高于功能 PR——Moltis 高危修复未合并即是最紧迫的反面案例。

6. **维护者带宽是生态共同瓶颈，AI 辅助评审是下一个工具机会。** OpenClaw（416 待合并）、ZeroClaw（48）、CoPaw（31）、Hermes（39）积压的共同根因是评审人力不足；Moltis 6/10 的 PR 来自同一维护者，贡献者集中度同样脆弱。OpenClaw 已有 clawsweeper 自动生成 PR 的先例，用 AI 辅助 triage/review 以匹配贡献流入速度，将是生态基础设施层面的确定性需求。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-20

## 1. 今日速览

过去 24 小时项目活跃度中等偏高：新增/活跃 Issue 5 条，PR 更新 27 条（19 条待合并，8 条已合并/关闭），无新版本发布。合并内容以缺陷修复与体验优化为主，**ask_clarification 工具（#4527）与 WebUI 文件管理（#4282）** 是其中较实质的功能进展。值得关注的健康度信号：8 个 PR 挂有 `conflict` 标签，其中包含 p0 优先级的 [#5271](https://github.com/HKUDS/nanobot/pull/5271) 与 p1 的 [#4853](https://github.com/HKUDS/nanobot/pull/4853)、[#5403](https://github.com/HKUDS/nanobot/pull/5403)，合并通道存在一定阻塞。社区讨论热度集中在 LangSmith 集成回归（[#2493](https://github.com/HKUDS/nanobot/issues/2493)，7 条评论）与 Docker 环境下 OpenAI OAuth 登录失败（[#5444](https://github.com/HKUDS/nanobot/issues/5444)），后者已催生两个修复 PR，属"社区先痛、修复跟进"的良性循环。

## 2. 版本发布

今日无新版本 Release。

## 3. 项目进展

今日共 8 个 PR 合并/关闭（列表展示 6 个），主要推进方向如下：

| PR | 类型 | 进展 |
|---|---|---|
| [Add ask_clarification tool #4527](https://github.com/HKUDS/nanobot/pull/4527) | 功能 | 新增内置澄清工具，支持在代理回合中短路返回澄清问题，并在上下文裁剪时保留澄清内容，是 Agent 交互能力的重要补强（6 月提出，今日尘埃落定） |
| [feat: file management in settings view #4282](https://github.com/HKUDS/nanobot/pull/4282) | 功能 | 设置视图新增文件夹浏览能力，用户无需登录宿主机即可查看/修改 Agent 生成的文件与 SOUL 配置，显著改善 WebUI 易用性 |
| [perf(memory): reuse conversation prefix for local compaction #5440](https://github.com/HKUDS/nanobot/pull/5440) | 性能 | 本地压缩复用模型侧 system/history 前缀并追加临时指令，保留结构化工具调用同时降低 token 开销 |
| [fix(webui): return promptly after Ctrl-C #5438](https://github.com/HKUDS/nanobot/pull/5438) | 修复 | WebUI 前台退出路径均以 `wait_for_stop=False` 释放客户端租约，避免 Ctrl-C 后进程挂起 |
| [fix(skills): weather workflow Windows-safe #5341](https://github.com/HKUDS/nanobot/pull/5341) | 修复 | 天气 skill 示例中裸 `curl` 在 PowerShell 下可能解析为 `Invoke-WebRequest` 别名，已改为 Windows 安全写法，提升跨平台可靠性 |
| [fix(tui): expose /exit in command menu #5443](https://github.com/HKUDS/nanobot/pull/5443) | 修复 | `/exit` 注册进 TUI 本地命令并纳入发现/补全，沿既有退出路径工作 |

整体评估：今日合并以"缝补"为主——跨平台兼容、进程退出、菜单可见性、内存压缩性能——但 ask_clarification 与文件管理两项能力落地，说明产品在**对话澄清机制**与**WebUI 资产可视化**两个方向上有实质推进。PR 合并平均周期偏长（#4527 历时近两个月），维护者可考虑加快高价值 PR 的评审节奏。

## 4. 社区热点

- **[Issue #2493：LANGSMITH is not working after latest update](https://github.com/HKUDS/nanobot/issues/2493)** — 7 条评论，今日最活跃。用户报告 `litellm_provider.py` 被移除后 langchain.com 集成失效，且该 Issue 自 3 月创建至今仍未关闭，带有 `regression` + `feature request` + `good first issue` 多重标签。背后诉求是**对破坏性变更缺少迁移指引的不满**——移除 provider 时应同步给出替代方案。
- **[Issue #5447：Paid security-scan MCP integration (ScanPay x402)](https://github.com/HKUDS/nanobot/issues/5447)** — 0 评论但话题新颖。用户提出基于 Solana x402 微支付（0.0007 SOL/次）的安全扫描 MCP 服务，并自建了 AgentBridge 任务中间层。这反映出社区开始探索**将 NanoBot 接入链上支付/商业化的新场景**，是路线图层面的潜在信号（尽管当前更像项目宣传而非严谨需求）。
- **[Issue #5444：Failed to login OpenAI via OAuth in Docker](https://github.com/HKUDS/nanobot/issues/5444)** — Docker 内 OAuth 登录失败，附带完整错误输出，催生两个同题修复 PR（[#5446](https://github.com/HKUDS/nanobot/pull/5446) 路由 Codex OAuth 存储至 data dir、[#5445](https://github.com/HKUDS/nanobot/pull/5445) 持久化 OAuth 客户端数据），说明**容器化部署的认证体验是当前社区集中痛点**。

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue | 状态 | 修复 PR |
|---|---|---|---|
| 🔴 高 | [#5444](https://github.com/HKUDS/nanobot/issues/5444) Docker 中 OpenAI OAuth 登录失败（`localhost:1455` 回调后交换 token 报错） | 今日新开 | [PR #5446](https://github.com/HKUDS/nanobot/pull/5446)、[PR #5445](https://github.com/HKUDS/nanobot/pull/5445) 均已提交待合并 |
| 🔴 高 | [#2493](https://github.com/HKUDS/nanobot/issues/2493) LangSmith 集成回归：`litellm_provider.py` 移除后 langchain.com 完全不可用 | 3 月提出，**至今未修复** | 暂无 fix PR |
| 🟠 中 | [#5441](https://github.com/HKUDS/nanobot/issues/5441) Dream 运行中单个"已恢复"的工具错误（如 `edit_file` 旧文本匹配失败后重试成功）仍会让整个 run 判为未完成，`memory/.dream_cursor` 不推进，后续任务重复处理并产生重复编辑 | 今日新开 | [PR #5442](https://github.com/HKUDS/nanobot/pull/5442) 提交待合并 |
| 🟡 低 | [#5425](https://github.com/HKUDS/nanobot/issues/5425) 自定义 OpenAI 兼容 provider 配置 `socks://` 代理时，请求在到达 provider 前即失败 | 昨日新开，1 条评论 | [PR #5439](https://github.com/HKUDS/nanobot/pull/5439) 仅支持标准 `socks5://`，**明确不接受 legacy `socks://` 别名**，与 issue 诉求不完全一致，需关注后续走向 |

稳定性观察：今日 5 个新 Issue 中 4 个为缺陷/回归，且均涉及**配置环境（代理、Docker、记忆状态）而非核心推理逻辑**，说明当前版本在环境适配层存在较多边角问题。好消息是除 #2493 外均有对应 PR 跟进，响应速度较快。

## 6. 功能请求与路线图信号

- **付费 MCP / x402 微支付集成（[#5447](https://github.com/HKUDS/nanobot/issues/5447)）**：用户提议将 NanoBot 与 Solana x402 付费安全扫描服务对接。当前无维护者回应，但"Agent 按次付费调用外部服务"是明确的生态方向，可作为 MCP 商业化场景储备。
- **手动-only 技能调用（[PR #5405](https://github.com/HKUDS/nanobot/pull/5405)）**：支持 `disable-model-invocation: true`，让部署/发布等有副作用的技能仅限用户显式触发——符合安全最佳实践，待合并。
- **nano_timer 核心工具（[PR #4853](https://github.com/HKUDS/nanobot/pull/4853)）**：零依赖时间/时区/日历工具，含 IANA 时区与 DST 自动处理，已挂 p1 + conflict 标签一个多月，需要维护者解决冲突。
- **WebUI 回合可观测性（[PR #5420](https://github.com/HKUDS/nanobot/pull/5420)）**：将推理/工具/文件编辑整合为单一答案面板，并展示 provider 用量估算——与"可观测性"方向一致。
- **WebUI 后续追问建议（[PR #5408](https://github.com/HKUDS/nanobot/pull/5408)）**：借鉴 DeerFlow 交互，生成 chat-scoped 的 follow-up 建议，空编辑器直接发送、有草稿则追加。

路线图判断：今日无官方 Release，但从活跃 PR 看，下一版本大概率包含 **ask_clarification、memory 压缩优化、OAuth 持久化修复**；`nano_timer`、`socks5://` 代理支持若冲突解决顺利也有望进入。

## 7. 用户反馈摘要

- **破坏性变更缺乏迁移指引（#2493）**：`litellm_provider.py` 被删除后用户直接失去 langchain.com 集成能力，评论中充满"Any ideas how to fix this?"式的困惑。移除内部模块时应在 Release Notes 或迁移文档中给出替代配置，这是本次反馈最核心的痛点。
- **Docker 部署认证脆弱的抱怨（#5444 及相关 PR）**：OAuth 登录在容器内失败、token 写入位置不受管理、entrypoint 降权后目录不可写，说明 **Docker 镜像的默认权限模型与 OAuth 数据生命周期设计**尚未完全对齐，用户需要"开箱即用"的认证体验。
- **代理兼容性焦虑（#5425）**：用户配置了合法的 `socks://` 代理，请求却在到达 provider 前失败，且报错信息不够明确。社区对"合法配置被静默拒绝"这类问题容忍度低。
- **重复处理的挫败感（#5441）**：Dream 明明完成了有效编辑，却因一次已恢复的错误被整体判失败，导致同批历史被反复重放、产生重复编辑。用户对"结果合理但被系统判定失败"的**状态机不一致**问题尤为不满。

## 8. 待处理积压

**需维护者优先关注：**

- **[Issue #2493 LangSmith 回归](https://github.com/HKUDS/nanobot/issues/2493)**：3 月 25 日提出，近 5 个月未解决，7 条评论、1 个 👍，仍是 open 状态且活跃更新于昨日。要么给出替代方案，要么明确标注不兼容，不应继续悬置。
- **[PR #5271（p0, conflict）](https://github.com/HKUDS/nanobot/pull/5271)**：防止 `/new` 后陈旧后台任务保存覆盖新会话数据——数据安全级别的问题，却因合并冲突卡了近两周。p0 优先级的 PR 应优先解决冲突。

**冲突积压的 PR（8 个带 `conflict` 标签）：**

- [#4853](https://github.com/HKUDS/nanobot/pull/4853)（p1, nano_timer）、[#5403](https://github.com/HKUDS/nanobot/pull/5403)（p1, 记忆压缩 token 计数）、[#5405](https://github.com/HKUDS/nanobot/pull/5405)（技能手动调用）、[#5379](https://github.com/HKUDS/nanobot/pull/5379)（记忆压缩保真）、[#5271](https://github.com/HKUDS/nanobot/pull/5271)（p0, 会话覆盖）。多个 PR 集中在 **memory/会话子系统**，说明该模块近期改动频繁，建议维护者统一协调，避免多个修复互相踩踏或反复 rebase。

**长期未合并但有价值：**

- [#5257](https://github.com/HKUDS/nanobot/pull/5257)（sustained-goal 无限循环防护）、[#5430](https://github.com/HKUDS/nanobot/pull/5430)（释放完成任务组）、[#5431](https://github.com/HKUDS/nanobot/pull/5431)（报告后台任务异常）——三者均属 Agent 生命周期健壮性改进，建议合并 #5430/#5431 后统一回归。

---

**报告总结**：NanoBot 今日处于"高 PR 流动、零 Release"的迭代期，功能与修复双线推进，社区反馈活跃且具体。最大风险是**合并冲突积压**与 **LangSmith 回归长期悬置**；最大亮点是 ask_clarification 与文件管理功能落地、OAuth 问题快速得到双重修复预案。整体项目健康度良好，但维护者需要在"清冲突、解旧 Issue"上增加投入。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-20

> 数据窗口：2026-08-19 至 2026-08-20（GitHub 活动数据）

## 1. 今日速览

- 过去 24 小时共产生 50 条 Issue 更新（41 条新开/活跃，9 条关闭）与 50 条 PR 更新（39 条待合并，11 条合并/关闭），**无新版本发布**，整体处于高活跃迭代状态。
- 当日最大进展：**`reasoning_effort: ultra` 跨提供商兼容性 bug 类闭环**——9 个相关 PR 集中合并/关闭，终结了从 7/23 起累积的 GLM 400、Copilot 静默降级、OpenRouter/DeepSeek 422 等一系列问题。
- 风险信号集中在 **Windows 平台与更新链路**：3 个 P1 级 Bug（svchost.exe 被杀导致蓝屏、`hermes update` 破坏安装、Desktop 更新后会话全空）均无对应修复 PR，更新/安装路径的可靠性已成为社区信任的主要缺口。
- 社区注意力被两个大型 meta-issue 占据（[Webhook Feature Package #84834](https://github.com/nousresearch/hermes-agent/issues/84834) 19 评论、[Discord Feature Parity #79564](https://github.com/nousresearch/hermes-agent/issues/79564) 8 评论），反映用户对 Gateway/平台面功能完备性的长期期待。
- 活跃度评估：**高**。50+50 的日更新量、41 条新开/活跃 Issue、11 个 PR 合并/关闭，均处于近 30 天高位；但 39 条 PR 待合并，维护者 review 带宽可能承压。


## 2. 版本发布

过去 24 小时无新版本发布（最新 Releases 为空）。


## 3. 项目进展

今日合并/关闭的 PR 主要收尾了四类工作，最集中的是 **reasoning_effort "ultra" 兼容性 bug class 的全链路修复**。

### 3.1 reasoning_effort "ultra" 兼容性修复集中合并（今日最大进展）

一批从 7 月下旬开始积累的 PR 在今天集中合并，彻底修复了 `ultra` 推理强度在非 Anthropic 线路上的所有已知问题：

| PR | 说明 | 对应 Issue |
|---|---|---|
| [#90330](https://github.com/nousresearch/hermes-agent/pull/90330) | 系统性修复 `ultra` 在非 Anthropic wire 上的 400 错误（salvage #89509） | [#89503](https://github.com/nousresearch/hermes-agent/issues/89503) |
| [#89509](https://github.com/nousresearch/hermes-agent/pull/89509) | 将 ultra 限制在 wire 词汇表内（OpenRouter 线路） | — |
| [#74558](https://github.com/nousresearch/hermes-agent/pull/74558) | Copilot 线路不再钳制到 medium，而是沿梯子逐级下降 | [#74295](https://github.com/nousresearch/hermes-agent/issues/74295) |
| [#80291](https://github.com/nousresearch/hermes-agent/pull/80291) | 自定义 OpenAI 兼容提供商：ultra/max 钳制为 high | #80242 |
| [#70182](https://github.com/nousresearch/hermes-agent/pull/70182) | GLM 线路 ultra 归一化 + 丢弃空 tool_calls key | [#70058](https://github.com/nousresearch/hermes-agent/issues/70058)、#70126 |
| [#70079](https://github.com/nousresearch/hermes-agent/pull/70079) | 将 ultra→max 钳制扩展到所有模型 | [#70058](https://github.com/nousresearch/hermes-agent/issues/70058) |

对应关闭的 Issue：[#74295](https://github.com/nousresearch/hermes-agent/issues/74295)、[#70058](https://github.com/nousresearch/hermes-agent/issues/70058)、[#89503](https://github.com/nousresearch/hermes-agent/issues/89503)。这是从 7/23 延续至今的跨月 bug class，今天终于全部闭合。

### 3.2 Desktop SDK contract 修复

- [#90311](https://github.com/nousresearch/hermes-agent/pull/90311) fix(sdk): `host.connections()` 返回文档承诺的连接行（salvage #89893，完成 #89823）
- [#89893](https://github.com/nousresearch/hermes-agent/pull/89893) fix(sdk): 返回注册连接列表

修复了 Bot Mode "Create on" 选择器因 IPC 返回注册表对象（而非数组）导致永不出现的问题。Desktop/SDK 版本偏差时也可正常工作。

### 3.3 工具路由行为收紧

- [#90317](https://github.com/nousresearch/hermes-agent/pull/90317) fix(tools): **用户在 `hermes tools`/Desktop GUI 中选择的提供商现在拥有最终决定权**，不再因环境中存在其他 API Key 而静默改道。这修复了"选了 A 提供商实际跑的是 B"的隐蔽行为。

### 3.4 Bot Mode 活跃信号修复

- [#90326](https://github.com/nousresearch/hermes-agent/pull/90326) fix(bot-mode): roster 活跃信号不再忽略 canonical Bot Chat（`hidden=1`），修复了刚发过消息的 bot 仍显示过期 "6d ago" 的问题。

### 值得关注的开放 PR（可能进入下一版本）

- [#90335](https://github.com/nousresearch/hermes-agent/pull/90335) feat: 执行纪律指引扩展到 DeepSeek/Kimi/Qwen/GLM 等模型（此前仅 gpt/codex/grok 名称匹配）
- [#90336](https://github.com/nousresearch/hermes-agent/pull/90336) feat: MCP 结果 50K 字符即 spill 到磁盘，并标记 provider 侧省略
- [#90337](https://github.com/nousresearch/hermes-agent/pull/90337) feat: 墙钟运行预算——80% 预算时注入收尾提示
- [#90343](https://github.com/nousresearch/hermes-agent/pull/90343) fix(bot-mode): room 会话始终跟随 profile 当前配置（修复 [#89497](https://github.com/nousresearch/hermes-agent/issues/89497)）
- [#90342](https://github.com/nousresearch/hermes-agent/pull/90342) fix(mcp): 快速重连后刷新工具注册表

整体上，项目在"多提供商兼容性"和"运行时可控性"两个方向上有明确的持续投入。


## 4. 社区热点

| Issue / PR | 评论数 | 主题 | 背后诉求 |
|---|---|---|---|
| [#84834](https://github.com/nousresearch/hermes-agent/issues/84834) Webhook Feature Package（meta-issue） | **19** | 整个 Webhook 表面（ingress/execution/delivery/config/UI/deployment/docs）的图门控修复包 | 资深用户在系统化追踪 Gateway 平台能力差距，期待一次彻底修复而非打补丁 |
| [#89675](https://github.com/nousresearch/hermes-agent/issues/89675) Desktop: no sessions load after update | 11（👍 2） | macOS Desktop 更新后所有 profile 会话为空，后端以无 `--profile` 方式启动 | 更新回归，直接影响日常使用 |
| [#79564](https://github.com/nousresearch/hermes-agent/issues/79564) Discord Feature Parity Campaign（meta-issue） | 8 | 将 Discord 面与官方 API v10 对齐，含 30+ 子 issue/PR | 平台功能完备性追赶 |
| [#83529](https://github.com/nousresearch/hermes-agent/issues/83529) `hermes update` destroys hermes | 6 | Debian Trixie 上更新命令灾难性失败 | 更新可靠性，用户原话 "It was working yesterday" |
| [#89614](https://github.com/nousresearch/hermes-agent/issues/89614) Windows kills svchost.exe → 0xEF 蓝屏 | 5 | stale-PID `taskkill /F /PID` 杀死 svchost.exe，反复蓝屏 | 系统级破坏，最严重的稳定性问题 |

**热点分析**：两大 meta-issue 显示核心用户群在用"战役式管理"推动平台面功能对齐；而三个更新相关 Bug（#89675、#83529、#89614）合计 22 条评论且全部无修复 PR，说明**更新/安装链路的回归测试缺口已成为社区最集中的不满来源**。


## 5. Bug 与稳定性

### P1 — 高优先级（影响大范围用户，均无修复 PR）

| Issue | 描述 | Fix 状态 |
|---|---|---|
| [#89675](https://github.com/nousresearch/hermes-agent/issues/89675) | macOS Desktop 更新后所有 profile 的会话列表无法加载，后台进程未携带 `--profile` 参数 | ❌ 无 PR |
| [#83529](https://github.com/nousresearch/hermes-agent/issues/83529) | `hermes update` 在 Debian Trixie 上彻底破坏安装（用户原话 "It was working yesterday"） | ❌ 无 PR |
| [#89614](https://github.com/nousresearch/hermes-agent/issues/89614) | Windows 11 上 Hermes Desktop 用 stale-PID 执行 `taskkill /F /PID` 杀死 `svchost.exe`，触发 0xEF CRITICAL_PROCESS_DIED 蓝屏 | ❌ 无 PR |

今日关闭的 P1：[#89034](https://github.com/nousresearch/hermes-agent/issues/89034) Gateway 重启循环 + s6 无退避 → state.db FTS5 损坏（✅ 已关闭）。

### P2 — 中优先级

| Issue | 描述 | Fix 状态 |
|---|---|---|
| [#90159](https://github.com/nousresearch/hermes-agent/issues/90159) | `hermes update` 将 `mcp==1.28.1` pin 覆盖为 2.0.0，所有 HTTP/SSE MCP 服务器静默断开，`gateway status` 仍报健康 | ❌ 无 PR |
| [#90229](https://github.com/nousresearch/hermes-agent/issues/90229) | Windows 11 Desktop 右侧文件树启动后永远停在 skeleton，刷新按钮禁用 | ❌ 无 PR |
| [#90299](https://github.com/nousresearch/hermes-agent/issues/90299) | TUI 每次启动误报 "TERMINAL_CWD found in .env" 弃用警告（root cause 已定位到 `warn_deprecated_cwd_env_vars()`） | ❌ 无 PR |
| [#90134](https://github.com/nousresearch/hermes-agent/issues/90134) | Windows 上 `hermes desktop` 构建在 blockmap.js 失败 | ❌ 无 PR |
| [#89897](https://github.com/nousresearch/hermes-agent/issues/89897) | Codex 工具后续请求发送不支持的 `prompt_cache_retention` 到 gpt-5.6-sol | ✅ 已关闭 |
| [#89503](https://github.com/nousresearch/hermes-agent/issues/89503) | Cron 按任务模型覆盖在非 Anthropic 提供商上失败 | ✅ 已关闭，由 [#90330](https://github.com/nousresearch/hermes-agent/pull/90330) 修复 |
| [#89823](https://github.com/nousresearch/hermes-agent/issues/89823) | Bot Mode "Create on" 选择器永不出现 | ✅ 已关闭，由 [#90311](https://github.com/nousresearch/hermes-agent/pull/90311)/[#89893](https://github.com/nousresearch/hermes-agent/pull/89893) 修复 |

### P3 — 低优先级 / 体验问题

- [#90277](https://github.com/nousresearch/hermes-agent/issues/90277) Kanban 插件未声明 gateway 依赖，无 gateway 时静默失败
- [#90268](https://github.com/nousresearch/hermes-agent/issues/90268) 运行中的 kanban/tool worker 在 Desktop UI 完全不可见（会话列表过滤掉、ACTIVE NOW 不统计）
- [#89788](https://github.com/nousresearch/hermes-agent/issues/89788) Bots 区打开群聊后菜单区也打开同一聊天，bot 列表被遮挡
- [#90316](https://github.com/nousresearch/hermes-agent/issues/90316) Remote-primary Desktop 仍为 "This device" 启动 loopback agent（已标记 invalid，但现象真实存在）
- [#90333](https://github.com/nousresearch/hermes-agent/issues/90333) macOS Google 登录 passkey 2FA 失败陷入 "try again" 循环（已标记 duplicate）


## 6. 功能请求与路线图信号

### 已有配套 PR / 明确方向

- **执行纪律模型覆盖扩展**：[#90335](https://github.com/nousresearch/hermes-agent/pull/90335) 让执行验证/计算压力提示不再只按模型名匹配 gpt/codex/grok，而是扩展到 DeepSeek/Kimi/Qwen/GLM 等全部工具型模型。这是对"非 GPT 模型执行纪律弱"的正面回应。
- **MCP 上下文控制**：[#90336](https://github.com/nousresearch/hermes-agent/pull/90336) 将 MCP 结果 spill 阈值从 100K 降到 50K，并显式标记 provider 侧省略——解决大响应撑爆上下文的问题。
- **运行时间预算**：[#90337](https://github.com/nousresearch/hermes-agent/pull/90337) 新增 `agent.run_budget_seconds` / `--run-budget`，80% 预算时注入收尾提示，避免"答案已算出但没来得及说"。

### 社区提出的新方向

- [#90007](https://github.com/nousresearch/hermes-agent/issues/90007) **资源感知的低内存 Windows 执行 profile**（P3, needs-decision）——用户希望有开箱即用的低内存模式，而非手动协调 context/provider/fallback 等 6 个旋钮。
- [#82140](https://github.com/nousresearch/hermes-agent/issues/82140) 将 Desktop 的 local/remote 连接模式暴露给 skills/MCP/plugins（P3，2 条评论）。
- [#84483](https://github.com/nousresearch/hermes-agent/issues/84483) Desktop 连接带**自托管 OIDC auth_provider** 的远程后端——当前 UI 只显示 "Remote gateway incomplete"，无跳转按钮。
- [#90144](https://github.com/nousresearch/hermes-agent/issues/90144) 架构原则："**证明范围必须等于变更范围**"——总结多类缺陷的共同模式：过窄的观察授权了过宽的变更。这更像是核心贡献者对代码库的架构批评，可能影响后续设计取向。

**路线图判断**：#90335/#90336/#90337 三个 PR 均来自同一作者（teknium1）且标注了 "Composio eval findings"，说明项目正基于真实评估结果批量改进模型执行与 MCP 行为，这些大概率会进入下一版本。


## 7. 用户反馈摘要

- **"更新即破坏"已成为最大信任危机**。三个独立用户分别报告：Debian 上 `hermes update` 直接弄坏安装（#83529）、macOS 上更新后所有会话消失（#89675）、Windows 上更新后 svchost.exe 被杀导致蓝屏（#89614）。用户原话 "It was working yesterday" 直观反映了对发布质量的失望。
- **健康检查误导比报错更危险**。[#90159](https://github.com/nousresearch/hermes-agent/issues/90159) 中 mcp SDK 被静默覆盖为不兼容的 2.0.0 后，`hermes gateway status` 仍显示 healthy、`hermes mcp list` 仍能列出服务器——所有 HTTP/SSE MCP 服务器实际已断开。
- **配置隔离不足导致认知混乱**。[#89497](https://github.com/nousresearch/hermes-agent/issues/89497) 中房间内 bot 被持久化的 model_config 卡在旧 provider/模型，而 profile 已更新。用户困惑于"bot 不走 Nous 却报 Nous credits 不足"。
- **Desktop UI 透明性不足**。[#90268](https://github.com/nousresearch/hermes-agent/issues/90268) Kanban worker 运行中在会话列表和 ACTIVE NOW 均不可见，用户无法从 UI 判断后台任务状态。
- **认证摩擦**。[#90333](https://github.com/nousresearch/hermes-agent/issues/90333) macOS 上 Google 登录 passkey 2FA 反复失败，只能被迫走 fallback；[#84483](https://github.com/nousresearch/hermes-agent/issues/84483) 自托管 OIDC 用户在 Desktop 上完全没有跳转入口。


## 8. 待处理积压

### 长时间未响应的重要 Issue

| Issue | 创建时间 | 优先级 | 备注 |
|---|---|---|---|
| [#79564](https://github.com/nousresearch/hermes-agent/issues/79564) Discord Feature Parity meta | 08-05 | P3 | 8 条评论，与 #79650/#79651 等 refactor PR 联动 |
| [#79539](https://github.com/nousresearch/hermes-agent/issues/79539) Windows recovery loop（#58749 follow-up） | 08-05 | P2 | base interpreter 缺失后交给 `hermes-setup.exe --update`，但该命令无法成功 → 不可恢复循环 |
| [#81427](https://github.com/nousresearch/hermes-agent/issues/81427) Memory provider tools 不注入桌面会话 | 08-08 | P3 | 外部 memory provider 注册成功但工具 schema 不到达模型，`inject_memory_provider_tools` 返回 0 |
| [#83529](https://github.com/nousresearch/hermes-agent/issues/83529) `hermes update` destroys hermes | 08-10 | **P1** | 6 条评论，**至今无任何 fix PR 认领** |
| [#84834](https://github.com/nousresearch/hermes-agent/issues/84834) Webhook Feature Package meta | 08-12 | P3 | 19 条评论，当日最高热度 issue |
| [#85605](https://github.com/nousresearch/hermes-agent/issues/85605) Desktop Electron 连不上 `hermes serve`（404 on session token handshake） | 08-13 | P2 | 无 PR |
| [#85422](https://github.com/nousresearch/hermes-agent/issues/85422) macOS 官方安装器强制本地 bootstrap，无法做纯 remote-client | 08-13 | P2 | 👍 2 |

### 长期未合并的 PR

- [#79650](https://github.com/nousresearch/hermes-agent/pull/79650) refactor(discord): 提取 VoiceReceiver（adapter.py god-file slice R1，08-05 创建）
- [#79651](https://github.com/nousresearch/hermes-agent/pull/79651) refactor(discord): 提取 recovery backfill + reaction hooks（slice R2，08-05 创建）

这两个 Discord adapter 拆分 PR 已开放两周，属于 repo 级大文件分解（#78647）的一部分，目前无 review 活动迹象。考虑到 Discord meta-issue #79564 的高热度，若长期无人跟进会进一步拉大 Discord 面的功能差距。


**总结**：Hermes Agent 过去 24 小时处于高活跃状态，修复端在推理参数兼容性上取得系统性突破（ultra bug class 全链路闭合），演进端在执行纪律、MCP 上下文控制、运行预算三线并进。但 Windows 平台与更新链路的 P1 问题（蓝屏、更新破坏安装、Desktop 会话全空）全部悬而未决且无 PR 认领，是当前项目健康度的最大隐患。建议维护者优先调配 review 带宽处理这三个 P1，并在下个 release 前补充更新链路的回归测试。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

## PicoClaw 项目动态日报 — 2026-08-20

### 1. 今日速览

过去 24 小时 PicoClaw 项目 **PR 侧明显活跃**：共 5 条 PR 更新，其中 2 条已关闭（含 1 条新功能的快速合并，1 条 stale 关闭）、3 条仍待合并。**Issue 侧较为平静**：无新 Issue 提交，仅 1 条存量 Bug（#1305）关闭。无新版本发布，项目核心迭代仍以功能增强与缺陷修复为主。整体活跃度处于中上水平，但 3 条待合并 PR 中有 2 条已被标记为 stale，维护者响应速度有待提升。

[查看 PicoClaw 仓库](https://github.com/sipeed/picoclaw)

### 3. 项目进展

今日共关闭 2 条 PR，是项目向前推进的主要标志：

- **PR #3341 — feat(telegram): add interactive command UX and formatted ephemeral fallback**（[链接](https://github.com/sipeed/picoclaw/pull/3341)）  
  Telegram 频道迎来了交互式命令体验升级：`/memory` 等命令不再要求用户记忆完整 CLI 子命令语法，改为引导式交互；`/help` 输出精简化；并新增结构化内容的格式化的临时消息回退方案。该 PR 今日创建即被关闭，通常意味着已快速合入主干，为 Telegram 用户带来体验改善。

- **PR #3200 — feat(models): add configurable default fallback chain**（[链接](https://github.com/sipeed/picoclaw/pull/3200)）  
  为 Web UI 模型页面引入可配置的默认模型回退链，支持设置默认模型、添加回退模型、调整顺序并持久化到后端 API。该 PR 创建于 7 月 1 日，今日以 stale 状态关闭。尽管方案未能合入，但其中涉及的模型容灾与链路配置思路仍可能在未来版本中以其他形式实现。

此外，3 条 OPEN 状态的 PR 仍在推进中，值得留意：

- **PR #3329** — 修复无用的 `webhook_host`/`webhook_port` 配置项静默生效问题，改为启动时警告（[链接](https://github.com/sipeed/picoclaw/pull/3329)）
- **PR #3316** — 修复 routed-agent 上下文管理不尊重历史、摘要、压缩与 seahorse bootstrap 的问题（[链接](https://github.com/sipeed/picoclaw/pull/3316)）
- **PR #3315** — 支持 Telegram 私聊机器人启用论坛话题模式时的 topic 识别（[链接](https://github.com/sipeed/picoclaw/pull/3315)）

### 4. 社区热点

今日讨论最集中的是 **[Issue #1305](https://github.com/sipeed/picoclaw/issues/1305)**（4 条评论）。尽管该 Issue 创建于 3 月，但今日随关闭动作再度受到关注。用户报告：新版本启动 banner 被打印到 STDOUT，破坏了 `picoclaw completion zsh > _picoclaw` 这类自动补全脚本的生成流程，且疑似由 PR #1008 引入。

其核心诉求是：**CLI 工具在非交互/重定向场景下应保持输出纯净，遵循 Unix 哲学 —— 无消息即是成功**。该问题虽已关闭，但反映出用户对命令行工具行为规范的高度敏感性，值得后续版本在输出机制上引入更严格的 stdout/stderr 分离策略。

### 5. Bug 与稳定性

今日无新 Bug 上报，但有 1 条存量 Bug 关闭、2 条修复性 PR 在途：

| 严重度 | 问题 | 状态 | 说明 |
|---|---|---|---|
| 中 | **[#1305 — banner 打印到 STDOUT 破坏补全流程](https://github.com/sipeed/picoclaw/issues/1305)** | ✅ 已关闭 | 影响 `completion zsh` 等自动化场景，由 PR #1008 引入；已关闭表明后续已处理或回退该 banner 行为 |
| 低 | **[PR #3329 — webhook_host/port 声明但从未使用](https://github.com/sipeed/picoclaw/pull/3329)** | 🟡 待合并 | 消除配置项“伪生效”的误导，避免用户在 line 通道上浪费排障时间 |
| 低 | **[PR #3316 — routed-agent 上下文不压缩/不记忆](https://github.com/sipeed/picoclaw/pull/3316)** | 🟡 待合并（stale） | 影响多轮会话的上下文压缩与历史保留，长期未合并可能累积技术债 |

整体来看，当前仓库没有已知的严重崩溃或数据丢失类问题，稳定性处于可控范围。

### 6. 功能请求与路线图信号

从今日关闭/活跃的 PR 看，以下方向可能进入后续版本路线图：

- **Telegram 交互体验增强（高潜力）**：PR #3341 已合入交互式命令引导；PR #3315 仍在开放中，针对私聊机器人话题模式的支持将进一步补齐 Telegram 场景。
- **模型回退链配置（产品方向）**：尽管 PR #3200 以 stale 关闭，但用户对多模型容灾的需求是真实存在的，Web UI 的 fallback 配置很可能在重构后重新提交。
- **Routed-agent 上下文治理（技术债方向）**：PR #3316 修的是 routed-agent 会话不遵守系统级上下文策略的问题，这类功能对生产部署用户至关重要。

建议维护者在下一迭代中优先关注 #3315 与 #3316 这两条 stale PR，推动其落地或给出明确收尾意见。

### 7. 用户反馈摘要

基于今日动态中最活跃的 Issue #1305，可提炼以下几点真实用户反馈：

- **使用场景**：用户在生成 zsh 补全脚本时执行 `picoclaw completion zsh > _picoclaw`，期望输出严格符合补全脚本格式。
- **痛点**：PicoClaw 在启动时向 STDOUT 打印的新 banner 混入了输出文件，导致补全脚本失效。
- **用户预期**：CLI 工具应在非 TTY 环境下保持安静，所有非核心输出（banner、日志）应走 STDERR 或由 `--quiet` 开关控制。
- **项目认知**：用户准确指出了引入该回归的 PR #1008，说明社区对项目内部变更追踪较细，且对输出稳定性有较高要求。

此外，PR #3341 的快速合入也从侧面回应了用户对 Telegram 命令冗长、学习成本高的不满，社区对轻量化交互体验的呼声得到认可。

### 8. 待处理积压

以下 PR 长期未获明确处理信号，建议维护者重点关注：

- **[PR #3316 — routed-agent context management 修复](https://github.com/sipeed/picoclaw/pull/3316)**  
  创建于 8 月 3 日，已标记 [stale]。该 PR 涉及 routed-agent 会话的历史记忆与自动压缩失效问题，直接影响多轮对话体验，且修复逻辑复杂，放置过久易与新代码冲突。

- **[PR #3315 — Telegram 私聊话题支持](https://github.com/sipeed/picoclaw/pull/3315)**  
  创建于 8 月 3 日，同样已标记 [stale]。Telegram 论坛模式的私聊场景是相对小众但明确的功能缺口，建议明确合入或关闭，避免长期悬置。

- **[PR #3329 — webhook 配置警告](https://github.com/sipeed/picoclaw/pull/3329)**  
  创建于 8 月 11 日，已一周有余，虽非 stale 但有搁置风险。其修复范围小、价值明确（消除虚假配置项），建议优先评审。

---

**项目健康度小结**：PicoClaw 正处于功能迭代活跃期，今日以 Telegram 体验升级和问题修复为主；Issue 侧虽无新增，但 stale PR 积压情况值得注意。整体生态健康，社区反馈集中在 CLI 规范性与通道体验层面，期待更多通道功能在下个版本中释放。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-08-20

## 1. 今日速览

过去 24 小时 NanoClaw 项目活跃度极高：共 34 条 PR 更新，其中 24 条已合并/关闭，10 条待合并；新增 3 条 Issue，均为活跃讨论状态。核心团队在 Slack 功能拆分与元数据传递、Telegram 群组连接、Node 22+ 运行时升级三条线路上推进明显。值得关注的是，Node 26 兼容性问题（#3359）与 Dial SMS 投递状态不一致（#3353）是当前最突出的稳定性隐患，但两者均已有对应修复 PR 在列。总体来看，项目正处于功能扩展与基础设施加固并行的健康开发阶段。

## 2. 版本发布

过去 24 小时无新版本发布，相关部分从略。

## 3. 项目进展

今日合并/关闭的 PR 共 24 条，覆盖核心基础设施、Slack 体验、Telegram 连接、安装程序修复四个方向，最重要的进展如下：

**核心基础设施修复**
- [#3340](https://github.com/qwibitai/nanoclaw/pull/3340) fix(approvals): `pending_approvals` 新增 `instance` 列，修复 OneCLI 凭证卡片在命名实例场景下由错误 bot 身份投递的问题。
- [#3341](https://github.com/qwibitai/nanoclaw/pull/3341) fix(provisioning): 从凭证的 issuer 派生 Slack 服务，解决账号服务与 Slack 服务间认证配对缺失的隐患（原配置分散且 key 不一致）。
- [#3339](https://github.com/qwibitai/nanoclaw/pull/3339) fix(setup): 存储的账户凭据无法验证时改为“fail closed”，不再将其视为通过检测——修复了断网/不可达场景下安全策略被绕过的问题。

**Slack 体验完善**
- [#3357](https://github.com/qwibitai/nanoclaw/pull/3357) 与 [#3358](https://github.com/qwibitai/nanoclaw/pull/3358) 是配套改动：将 Slack 基础体验（单 bot + DM/频道聊天）与完整 agents 功能（子 bot 编排、a2a 房间、画布）按 `--slack-agents` 标志拆分，同时适配 trunk 的异步中央数据库。
- [#3342](https://github.com/qwibitai/nanoclaw/pull/3342) Slack 频道邀请在 owner 不在场时直接拒绝而非升级为审批卡片——解决 bot 被任意成员拉入频道后“未授权即可见”的问题。
- [#3345](https://github.com/qwibitai/nanoclaw/pull/3345) / [#3344](https://github.com/qwibitai/nanoclaw/pull/3344)：Slack 服务请求与 app 创建流程新增可选的客户端元数据（`client_version`、请求来源等），便于云端追踪部署来源。

**Telegram 群组能力**
- [#3351](https://github.com/qwibitai/nanoclaw/pull/3351) 新增 `/connect_group` DM 命令，支持 owner/全局管理员通过 Telegram 原生群组选择器建立已批准群组连接，并附带群组范围的欢迎/引导流程。
- [#3352](https://github.com/qwibitai/nanoclaw/pull/3352) 配套文档更新，并让 `/manage-channels` 委派频道专属发现逻辑。

**安装程序修复**
- [#3350](https://github.com/qwibitai/nanoclaw/pull/3350) fix setup ping 文件夹兼容性问题（合入后安装向导在多平台路径下行为一致）。

整体来看，项目今日在“基础设施可靠性”（审批身份绑定、凭据验证、服务发现配对）上完成了多笔关键修复，质量改进扎实；同时 Slack 与 Telegram 的体验边界被进一步明确。团队合并速度与提交量处于高产状态。

## 4. 社区热点

今日新增的 3 条 Issue 均来自同一用户 `glifocat`，反映其正在全新环境（macOS arm64 + 非登录 SSH）中执行安装验证，触达了三个真实缺口：

- **Node 26 兼容性** [#3359](https://github.com/qwibitai/nanoclaw/issues/3359)：Node 26.7.0 通过版本检查但 `better-sqlite3 11.10.0` 无法编译，安装流程在 bootstrap 阶段中止。该 Issue 直接推动 PR [#3360](https://github.com/qwibitai/nanoclaw/pull/3360) 升级 `better-sqlite3` 至 13.0.3 并将最低 Node 版本提升至 22——这是一个典型的社区驱动修复循环。
- **非交互 shell 安装缺陷** [#3354](https://github.com/qwibitai/nanoclaw/issues/3354)：在无登录 shell 的干净机器上，`git show` 失败后残留 0 字节 channel 文件，且 PATH 修复前就运行了 onecli 检查。直接指向安装脚本对交互式 shell 的隐含假设。
- **SMS 状态一致性** [#3353](https://github.com/qwibitai/nanoclaw/issues/3353)：Dial 适配器将“已接受发送”记为“已投递”，运营商后续拒绝时状态永远停留在 delivered，重试预算与 agent 均被蒙蔽，语义准确性存疑。

此外，查看 PR 侧，Dial 频道适配器相关 PR（[#3041](https://github.com/qwibitai/nanoclaw/pull/3041)、[#3050](https://github.com/qwibitai/nanoclaw/pull/3050)）已打开超过一个月仍未合并，但频繁被更新（今日有更新记录），说明该功能在社区一侧有持续呼声，且已与新出现的 SMS 状态 Issue 产生联动讨论价值。

**社区诉求分析**：最集中的信号是“安装体验必须适配多样环境”（新 Node 运行时、无交互式 shell、干净机器）。用户期待安装脚本不会假设特定 shell 或 Node 版本，这也印证了核心团队今日提升 Node 最低版本/升级 SQLite 依赖的方向是正确且急迫的。

## 5. Bug 与稳定性

按严重程度排列今日报告的问题：

| 严重程度 | 问题 | 状态 |
|---|---|---|
| **高** | **Node 26 下安装失败**（[#3359](https://github.com/qwibitai/nanoclaw/issues/3359)）：`check_node` 仅检查了下界，`better-sqlite3 11.10.0` 无法在 Node 26 上编译，导致全新安装中止 | 已有修复 PR [#3360](https://github.com/qwibitai/nanoclaw/pull/3360)（升级 better-sqlite3 至 13.0.3 + Node 最低版本提升至 22） |
| **高** | **Dial SMS 投递状态失真**（[#3353](https://github.com/qwibitai/nanoclaw/issues/3353)）：运营商事后拒绝时，会话状态仍为 delivered，重试预算不消耗，agent 与 owner 无法感知 | 暂无直接修复 PR，但 #3041 (Dial adapter) 尚未合入，可在合入前补上状态机逻辑 |
| **中** | **非交互式 SSH 安装异常**（[#3354](https://github.com/qwibitai/nanoclaw/issues/3354)）：`git show` 失败残留 0 字节文件；onecli 检查在 PATH 修复前执行 | 关联 PR [#3249](https://github.com/qwibitai/nanoclaw/pull/3249)（[OPEN] 处理超出支持范围的已存在 Node）尚待合并 |
| **中** | **存储凭据不可验证时被当作通过**（PR [#3339](https://github.com/qwibitai/nanoclaw/pull/3339) 描述的 bug） | 已在今日合入的 #3339 中修复 |
| **低** | **Slack 服务与账号服务认证未配对**（PR [#3341](https://github.com/qwibitai/nanoclaw/pull/3341) 描述的 bug） | 已在今日合入的 #3341 中修复 |

注意：上述 Node 26 问题与今日核心团队在 [#3360](https://github.com/qwibitai/nanoclaw/pull/3360) 中升级依赖是一一对应的，社区报告推动了即时修复，闭环链路值得肯定。

## 6. 功能请求与路线图信号

今日 PR 侧释放了多个强路线图信号：

- **Dial 频道适配器**（ [#3041](https://github.com/qwibitai/nanoclaw/pull/3041) 、[#3050](https://github.com/qwibitai/nanoclaw/pull/3050) ）：SMS + AI 语音通话频道，仍未合入但持续活跃。考虑到 #3353 暴露的状态一致性问题，合并前需要补齐投递状态机；一旦合并将显著扩展 NanoClaw 的通信覆盖面。
- **Cursor Agent SDK 集成**（[#3356](https://github.com/qwibitai/nanoclaw/pull/3356)、[#3355](https://github.com/qwibitai/nanoclaw/pull/3355)、[#3349](https://github.com/qwibitai/nanoclaw/pull/3349)）：新增 Cursor Agent SDK 提供商、`/add-cursor` 安装技能与 agent 邮箱注册表。这是继 Slack agents 之后又一个“多 agent 互操作”的重要拼图。
- **Slack agents 功能标志**（[#3357](https://github.com/qwibitai/nanoclaw/pull/3357)、[#3358](https://github.com/qwibitai/nanoclaw/pull/3358) 已合入）：基础 Slack 与完整 agents 体验分离，标志 `--slack-agents` 明确路线图阶段。
- **decline 通知覆盖机制**（[#3361](https://github.com/qwibitai/nanoclaw/pull/3361)、[#3362](https://github.com/qwibitai/nanoclaw/pull/3362)，OPEN）：为 Slack agent flow 暴露 `dedupeKey`、`declineText`、`fyiText` 可配置项，并校验前置条件——属于面向企业用户的投产前打磨。

从这些信号看，下一版本可能围绕 **Dial 频道合入**（前提是状态机修复）、**Cursor Agent 支持（mailbox 注册表先行）、Node 22+ 基准**三项打包发布。Dial 与新 Node 支持之间的依赖冲突需要维护者协调。

## 7. 用户反馈摘要

今日仅有 3 条 Issue，无评论互动，但三条 Issue 的文本本身透露了清晰的用户画像与痛点：

- **痛点 1 — 依赖上游太激进**（#3359）：用户使用 Homebrew 最新 Node (26.7.0)，默认环境即触发安装失败。开发者期望“安装脚本能正确识别我的环境，并给出明确提示或直接兼容”，而不是在检查通过后中途崩溃。用户还指出 `check_node` 只检查下界、不检查上界或构建兼容性——这是对安装器质量的具体批评。
- **痛点 2 — 安装脚本无法在无交互式 shell 下工作**（#3354）：`~/.local/bin` 未在 PATH 中就运行了 onecli 检查，且失败时残留 0 字节文件。用户强调“clean box + non-login ssh”是真实运维场景，安装器必须假设非交互环境。
- **痛点 3 — 消息投递语义不一致**（#3353）：用户期望“发送被运营商拒绝”应被识别并触发重试或 agent 通知，而不是永久显示为已送达。这不仅是 Bug，也是对通信语义准确性的明确期望。

由于 3 条 Issue 均由同一用户提交，且该用户同时贡献了修复 PR（#3249、#3360、#3361、#3362），可以认为其属于“高投入的深度用户”，其反馈具备工程参考价值。遗憾的是新 Issue 均没有评论，社区讨论还尚未展开，需要维护者主动回应引导。

## 8. 待处理积压

以下 Issue/PR 持续未关闭，值得维护者关注：

- **[PR #3050](https://github.com/qwibitai/nanoclaw/pull/3050)（OPEN，超 30 天）** feat(setup): 将 Dial 加入频道选择器和向导 —— 社区功能请求，长期未合入，近期仍有更新，作者耐心等待中。
- **[PR #3041](https://github.com/qwibitai/nanoclaw/pull/3041)（OPEN，超 30 天）** feat(channels): 添加 Dial 频道适配器 —— 与 #3050 同源。目前 #3353 的 Bug 报告与其直接相关，建议合入前补齐投递状态机，避免带着已知问题上线。
- **[PR #3249](https://github.com/qwibitai/nanoclaw/pull/3249)（OPEN，5 天）** fix(setup): 处理超出支持范围的已存在 Node —— 与今日 #3359（Node 26）直接关联，但 #3360 已选择升级依赖路线，优先级可能被替代；维护者需明确决策并告知作者。
- **[PR #3349](https://github.com/qwibitai/nanoclaw/pull/3349)（OPEN，1 天）** feat: agent mailbox seam and registry —— 功能性基础件，若与 #3355/#3356 一同评估，建议打包决策避免碎片化合入。

这些长期悬挂的 PR 反映了维护带宽与社区贡献之间的张力。Dial 频道相关的两个 PR 尤其值得尽快定夺——要么合入、要么明确给出时间表，否则不仅会沉淀社区热情，还会让新报告的 SMS 相关 Bug 无处安放。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-08-20

## 1. 今日速览

过去 24 小时项目活跃度较低：无新 Issue，无新版本发布，仅有 1 个待合并的 Pull Request（#989）。该 PR 修复了 README 中星标历史图表因依赖受限 API 而无法显示的问题，属于文档/展示层面的维护改进。项目整体处于平稳期，未出现大规模功能变更或社区讨论热潮。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日没有 PR 被合并或关闭，因此没有直接推进功能的合并变更。唯一新增的 PR `#989` 处于待合并状态，目标是修复 README 中的星标历史图表。该修复不涉及核心代码逻辑，但可提升项目展示页的可用性，为潜在用户提供更直观的星标趋势信息。若后续合并，将完成一次针对文档/展示层的小型修复。

## 4. 社区热点

今日唯一活跃的 PR 为 [#989 [OPEN] fix: restore broken star history chart](https://github.com/nullclaw/nullclaw/pull/989)，由 FaintFlower 提交。该 PR 无评论，关注度目前不高。其核心诉求是解决 README 中星标历史图因 GitHub stargazer API 访问限制而失效的问题，并提议改用 star-history.dera.page 这个无需令牌的替代服务。这反映了外部依赖 API 对项目展示稳定性的影响，维护者需评估新数据源的可靠性并决定是否合并。

## 5. Bug 与稳定性

今日报告的 Bug 主要来自 PR `#989` 描述的问题：README 中的星标历史图表无法正常渲染，根因是依赖的 GitHub stargazer API 存在访问限制。严重程度为低（仅影响 README 展示，不影响代码功能）。已有对应修复 PR：[#989 fix: restore broken star history chart](https://github.com/nullclaw/nullclaw/pull/989)，等待维护者审核合并。

## 6. 功能请求与路线图信号

今日无新功能请求。PR `#989` 虽然属于 Bug 修复，但其建议切换图表数据源到第三方服务，可视为一种对项目文档展示功能的改进信号，但暂未涉及核心路线图方向。

## 7. 用户反馈摘要

今日无 Issue 或评论可供提炼用户痛点与使用场景。PR `#989` 的作者仅针对图表失效问题做了技术性说明，未涉及更广泛的用户反馈。

## 8. 待处理积压

当前最值得关注的是待合并 PR `[#989 fix: restore broken star history chart](https://github.com/nullclaw/nullclaw/pull/989)`，它已开放 1 天，且与 README 展示质量直接相关。建议维护者尽快审核该修复，确认替代服务的长期可用性与隐私兼容性后合并，以避免项目展示页持续存在失效图表。

---
*数据来源：github.com/nullclaw/nullclaw，统计区间 2026-08-19 至 2026-08-20。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-20

## 今日速览

项目今日维持高活跃度：过去 24 小时共产生 13 条 Issue 更新（9 活跃 / 4 关闭）和 39 条 PR 更新（24 待合并 / 15 已合并或关闭）。核心推进集中在三条主线：**1.3.0 正式版发布**（PR #7754 将 rc.2 提升为 stable）、**持久化 sandbox 方案落地**（PR #7751 取代 #7741，引入 Docker Exec 复用容器）以及 **capability-response 规范化收尾**（PR #7686 已合入，PR #7692/#7711 持续推进）。与此同时，CI 基础设施的 apt-get 悬挂问题和 3 个 QA Bug 被集中上报，稳定性治理仍有欠账。整体判断：项目处于 v1.3.0 发布后的密集迭代期，路线图清晰，但需警惕 CI 抖动对合并队列的拖累。

---

## 版本发布

今日无新 Release 发布，但值得关注的是 **PR #7754** 已关闭——将 `ironclaw-v1.3.0-rc.2`（`8483596bf`）正式 promote 为 **1.3.0 stable**。该 PR 仅涉及版本号与依赖锁定变更，无生产行为改动，三层次变更（CLI Cargo.toml、Cargo.lock、release 分支）均为标准发布流程。回滚风险低，用户无需迁移操作。

- [PR #7754: chore(release): promote 1.3.0-rc.2 to 1.3.0](https://github.com/nearai/ironclaw/pull/7754)

---

## 项目进展

今日合入/关闭的重要 PR 集中在以下方向，标志着项目在 **性能、sandbox 架构和工具链规范化** 三条线上均有实质推进：

| PR | 内容 | 影响 |
|---|---|---|
| [#7491](https://github.com/nearai/ironclaw/pull/7491) | omp core-tool 契约 + 引擎 + 基准测试臂（slices 1-4） | 模型侧统一为 `read`/`write`/`edit`/`glob`/`grep`/`bash` 六个精确工具名，删除旧文件工具与 `builtin__*` 拼写变体，大幅降低模型工具选择成本 |
| [#7686](https://github.com/nearai/ironclaw/pull/7686) | 集中 capability 结果处理（capability-response-normalization PR 1） | 行为保持型重构：fresh invocation / approval resume / auth resume 统一走 `RuntimeCapabilityOutcome`，为后续 typed response 打基础 |
| [#7754](https://github.com/nearai/ironclaw/pull/7754) | 1.3.0 正式版发布 | 见上文 |
| [#7751](https://github.com/nearai/ironclaw/pull/7751) | 持久化 per-user 容器（Docker Exec，Step 1） | 新方案将容器生命周期从 per-command 改为 per-(tenant,user)，预计将 shell 命令延迟从 1–2.5s 降至 ~40ms；#7741 同类方案因粒度较粗被取代 |

此外，**[#7743](https://github.com/nearai/ironclaw/pull/7743)**（automations 创建预检）和 **[#7752](https://github.com/nearai/ironclaw/pull/7752)**（subagent 激活来源与 `activate()` 原语）均为 XL 尺寸新功能 PR，仍处于 open 状态，预计后续合入将支撑 v1.4.0 的 automations 与多智能体能力。

整体看，今日项目完成了 v1.3.0 的收官动作，并同步开启了 v1.4.0 的关键技术预研。

---

## 社区热点

**1. [Issue #7732 — Epic: Persistent per-user sandbox with iron-proxy; defer loop executors](https://github.com/nearai/ironclaw/issues/7732)**（7 条评论，热度最高）

该 Epic 是近期讨论的核心，明确指出现状痛点：每次 shell 命令都创建/销毁 Docker 容器，`/workspace` 无法跨命令持久。此 Epic 直接催生了今日的两个 sandbox PR（#7751 与已关闭的 #7741）——社区关注重点从「能否跑通」转向「跑得有多快、状态是否持久」。这也暗示 iron-proxy 相关设计将在后续 Step 中落地。

**2. [Issue #5998 — Reborn 不支持本地 MCP 服务器](https://github.com/nearai/ironclaw/issues/5998)**（1 条评论，但已开放 39 天）

老 Issue 今日迎来曙光——**[PR #7757](https://github.com/nearai/ironclaw/pull/7757)** 提交了对字面 loopback IP 的 hosted MCP 支持。Issue 指出 `stdio` 被拒、`http://127.0.0.1:PORT/mcp` 被 deny_private_ip_ranges 拦截，导致本地 MCP 完全不可用。这一组合（issue + PR）反映开发者对本地优先、离线可用的开发体验诉求强烈。

**3. [Issue #7603 — 批量 BeforeModel 检查点](https://github.com/nearai/ironclaw/issues/7603)**（2 条评论，已关闭）

性能优化讨论，估算每 turn 可减少 14 行 journal 写入（11 次检查点 → ~4 次）。虽然已关闭，但「减少 journal-pool 读压力」的同类优化（#7602）也在今日关闭，说明性能账本在持续结算。

---

## Bug 与稳定性

今日上报 Bug 共 3 条，严重程度排序如下：

**P2 — [Issue #7745: Copilot MCP 扩展安装失败（auth_required、重复目录条目、token 类型不清）](https://github.com/nearai/ironclaw/issues/7745)**

扩展目录中存在两个 Copilot 条目（`mcp-gh-copilot-mcp` 与另一个），且安装流程报 `auth_required`、token 类型描述不清晰。属于扩展生态入口的体验问题，影响 QA 环境验证，**暂无对应 fix PR**。

**未分级 — [Issue #7748: IronClaw got confused and stopped working](https://github.com/nearai/ironclaw/issues/7748)**

来自 Slack 产品反馈渠道（bianca.guimaraes-chadwick），用户报告 "It just got confused and stopped working"，无更多上下文。**暂无 fix PR**，建议维护者尽快向反馈人索取复现步骤。

**P3 — [Issue #7744: Cron 任务 UI 缺少编辑和测试按钮](https://github.com/nearai/ironclaw/issues/7744)**

QA 环境（Railway / ironclaw-qa-testing-libsql）发现 cron 管理界面仅支持查看，无法编辑既有任务或手动触发。功能性缺口，**暂无 fix PR**。

**CI 稳定性 — [PR #7756](https://github.com/nearai/ironclaw/pull/7756)（open）**

该 PR 针对 merge queue 反复超时问题做了根因分析：过去两天 69 次 `Tests (Reborn)` 运行中的 1,193 个 job 以及 500 个 `Reborn E2E` job 的暂停，均与未限时 `apt-get` 有关。PR 为每次 apt fetch 增加 bound，属于基建健壮性修复，值得优先合入。

---

## 功能请求与路线图信号

以下需求今日有明确 PR 呼应，很可能进入后续版本：

| 需求 Issue | 对应 PR | 方向 | 版本信号 |
|---|---|---|---|
| [#7732](https://github.com/nearai/ironclaw/issues/7732)（Epic） | [#7751](https://github.com/nearai/ironclaw/pull/7751) | 持久化 per-user sandbox，Docker Exec 复用容器 | 明确标记 `v1.4.0` |
| [#7742](https://github.com/nearai/ironclaw/issues/7742) | [#7743](https://github.com/nearai/ironclaw/pull/7743) | automations 创建预检：区分「编排未来运行」与「立即执行」，前置校验 schedule/goal/成功标准 | 标记 `v1.3.0`，但 PR 未合入，可能顺延 |
| [#5998](https://github.com/nearai/ironclaw/issues/5998) | [#7757](https://github.com/nearai/ironclaw/pull/7757) | 允许本地 loopback IP 的 hosted MCP 服务器 | 未标版本，属先行修复 |
| [#7038](https://github.com/nearai/ironclaw/issues/7038)（Epic） | [#7750](https://github.com/nearai/ironclaw/pull/7750) | Storybook + AI-first 设计系统（Phase 1 集成） | Epic 标签，长期投入 |

此外，**[#7752](https://github.com/nearai/ironclaw/pull/7752)**（subagent 激活来源）虽未绑定 Issue，但其 `ActivationProvenance`（Human/ParentAgent/System）为子代理自主唤醒机制奠定基础，且明确「无生产行为变化」，属于为未来多智能体编排铺路的架构性 PR。

综合看，**v1.4.0 的特征已初步浮现：持久化 sandbox、automations 执行契约、子代理激活语义，外加 WebUI 设计系统**。

---

## 用户反馈摘要

从今日 Issue 评论可提炼出以下真实用户/QA 反馈：

1. **本地开发体验受限（#5998）**：开发者 Anubhav-Koul 明确指出 Reborn 无法连接同一台机器上的 MCP 服务器，`stdio` 被拒、HTTP 回环被 deny。这说明用户有强烈的本地优先、离线优先的开发诉求，当前仅允许 HTTPS 公网 MCP 的策略过于严格。

2. **「模型困惑」仍是真实痛点（#7748）**：用户报告 IronClaw "got confused and stopped working"，类似大模型 agent 最常见的「迷失」问题。虽然信息有限，但此类反馈频发可能指向 loop 死循环、上下文丢失或工具返回异常处理不足。

3. **扩展安装流程混乱（#7745）**：QA 反馈 Copilot MCP 扩展的目录存在重复条目、auth_required 报错难理解、token 类型描述不明确。这属于「最后一公里」的可用性问题——功能已就绪，但用户卡在安装/认证环节。

4. **cron 管理不完整（#7744）**：用户只能查看 cron 任务状态，无法编辑或手动触发。对于依赖定时自动化的用户而言，这是一个明显的效率阻碍。

---

## 待处理积压

以下 Issue/PR 长期未获关注或处于停滞状态，建议维护者重点审视：

| 条目 | 创建时间 | 状态 | 建议 |
|---|---|---|---|
| [#5998](https://github.com/nearai/ironclaw/issues/5998)（本地 MCP 不可用） | 2026-07-11（40 天） | OPEN，已有 #7757 修复 PR | 尽快 review #7757，并评估是否同步放开 `stdio` 传输 |
| [#6994](https://github.com/nearai/ironclaw/pull/6994)（OOBE 自动化任务原型） | 2026-08-01（20 天） | OPEN，XL 尺寸 | 后端部分（#6993）已关闭，前端原型仍悬置，建议明确 Phase-1 收口时间 |
| [#7257](https://github.com/nearai/ironclaw/pull/7257)（设计系统提案） | 2026-08-05（15 天） | OPEN，docs-only | 提案已在 8/19 更新，但与 #7750 的关系需澄清（#7750 是 Phase 1 实现） |
| [#7516](https://github.com/nearai/ironclaw/pull/7516)（WebUI IronHub 链接操作员界面） | 2026-08-12（8 天） | OPEN，XL 尺寸 | 涉及 secrets/channel-web 权限边界，安全性敏感，建议纳入近期审查 |
| [#7456](https://github.com/nearai/ironclaw/pull/7456)（durable storage profile-agnostic） | 2026-08-10（10 天） | OPEN，XL 尺寸 | 存储布局重构，虽风险标记 medium，但对后续多 profile 支持关键，建议排期 |

---

**整体评估**：IronClaw 项目处于健康迭代节奏，v1.3.0 发布后未出现重大回归，v1.4.0 技术预研已通过 Epic、PR 双线展开。主要风险集中在两点——**CI 可靠性（apt-get 悬挂）** 拖累合并效率，以及 **多个 P2 级 QA Bug 无对应修复 PR**。建议下一步优先合入 #7756 修复 CI，然后处理 #7745 的扩展安装认证问题，同时保证 #7751（sandbox Step 1）通过 review 顺利落地。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-20

## 今日速览

过去 24 小时项目无新版本发布。Issues 侧新增/活跃 6 条，均为 2026-04-08 创建的历史问题，今日被标记为 [stale]，无新 Issue 上报，也无 Issue 关闭。PR 侧 8 条状态更新，其中 [#2511](https://github.com/netease-youdao/LobsterAI/pull/2511)、[#2512](https://github.com/netease-youdao/LobsterAI/pull/2512) 为近两日新增的 Windows 安装器修复并已关闭，其余 6 条为积压 4 个月的存量 PR 统一收尾。整体活跃度中等：贡献流存在但规模不大，Issue 积压和响应滞后是当前最突出的健康度风险。

## 项目进展

今日 8 条 PR 均为已关闭状态，覆盖方向集中在 Windows 安装器、运行时稳定性、IM 交互与编辑器体验。

### 今日新增并关闭

- [PR #2511](https://github.com/netease-youdao/LobsterAI/pull/2511) — fix(installer): 支持 NOS 托管载荷的静默上传优先 Web 安装器流程，新增两遍构建流程，并通过 SHA-256 不变式校验确保证书 stub 不会使已上传载荷失效。
- [PR #2512](https://github.com/netease-youdao/LobsterAI/pull/2512) — fix(installer): 为 dictbind 双击静默安装通道隐藏插件自有 Banner，保持 UAC 行为不变，并更新了安装器设计规格与契约测试。

### 存量 PR 收尾（今日关闭）

- [PR #1570](https://github.com/netease-youdao/LobsterAI/pull/1570) — 修复定时任务列表中将任务禁用后，编辑并保存会导致任务被强制重新开启的问题。
- [PR #1573](https://github.com/netease-youdao/LobsterAI/pull/1573) — 为 Telegram/钉钉/飞书/Discord/QQ/微信等 IM 渠道新增 /help、/status、/new、/compact 等斜杠命令，用户无需打开桌面端即可管理会话。
- [PR #1576](https://github.com/netease-youdao/LobsterAI/pull/1576) — 修复 SSE 流监听器被旧请求异步 abort 回调错误清理的竞态条件，避免新请求的流式数据静默丢失。
- [PR #1578](https://github.com/netease-youdao/LobsterAI/pull/1578) — 权限审批弹窗中的 Bash 命令增加语法高亮，帮助用户更快识别 `rm -rf`、`--force` 等危险操作片段。
- [PR #1580](https://github.com/netease-youdao/LobsterAI/pull/1580) — 输入框图片附件由纯 icon + 文件名改为 64×64 缩略图卡片，hover 显示删除按钮，提升附件确认效率。
- [PR #1582](https://github.com/netease-youdao/LobsterAI/pull/1582) — 修复旧版本残留 `__main__.py` 未被覆盖导致 pip 调用递归报错的问题，确保 setup-python 升级后 pip 可用。

这些变更若顺利进入主干，将使 Windows 安装体验、IM 渠道可操控性、SSE 流稳定性、权限审批可读性和输入框交互均获得提升。

## 社区热点

今日讨论最集中的是 [Issue #1569](https://github.com/netease-youdao/LobsterAI/issues/1569)（5 条评论）：用户提问后不运行，也不显示任何信息。该问题涉及核心使用链路，且与其他几个 Bug 报告（[#1566](https://github.com/netease-youdao/LobsterAI/issues/1566)、[#1561](https://github.com/netease-youdao/LobsterAI/issues/1561)）共同指向“新版本功能回归 + 错误提示缺失”的痛点。用户目前无法自行判断是上下文超限、后端故障还是 UI 渲染问题，说明客户端侧的运行状态可见性和错误诊断能力亟需增强。

## Bug 与稳定性

按严重程度排序，目前均无对应 fix PR：

| 严重度 | Issue | 描述 | Fix 状态 |
|---|---|---|---|
| 严重 | [#1566](https://github.com/netease-youdao/LobsterAI/issues/1566) | 2026.4.3 版本中无论输入什么内容，回复均相同；用户已附日志 zip | 无 |
| 严重 | [#1569](https://github.com/netease-youdao/LobsterAI/issues/1569) | 提问后完全不运行且无任何信息展示 | 无 |
| 高 | [#1561](https://github.com/netease-youdao/LobsterAI/issues/1561) | 新版本上传文件后模型无法感知文件存在；旧版本会将其放入 project 目录供模型搜索（功能回归） | 无 |
| 中 | [#1551](https://github.com/netease-youdao/LobsterAI/issues/1551) | 网络环境变化时网关反复重启，恢复原网络后正常 | 无 |
| 低 | [#1563](https://github.com/netease-youdao/LobsterAI/issues/1563) | “LobsterAI 流量包服务条款”页面存在明显文字错误 | 无 |

## 功能请求与路线图信号

- [Issue #1567](https://github.com/netease-youdao/LobsterAI/issues/1567) 提出在输入框添加快捷操作按钮，支持停止当前话题、压缩上下文，并提供 help 指令作为兜底恢复手段。该诉求与今日关闭的 [PR #1573](https://github.com/netease-youdao/LobsterAI/pull/1573)（IM 渠道 /new、/compact、/help 斜杠命令）高度重合，说明这一能力已有具体实现方案。建议维护者确认 PR #1573 的合并状态，并将同类能力向桌面端输入框扩展。
- 输入框附件缩略图（[PR #1580](https://github.com/netease-youdao/LobsterAI/pull/1580)）与权限弹窗语法高亮（[PR #1578](https://github.com/netease-youdao/LobsterAI/pull/1578)）属于编辑器体验和安全工效改进，存在被纳入下一版本的可能。

## 用户反馈摘要

- 文件感知回归：用户明确指出旧版本上传文件后文件会放到 project 目录、模型可自行搜索；新版本此行为不再生效，导致工作流被破坏（[#1561](https://github.com/netease-youdao/LobsterAI/issues/1561)）。
- 无反馈困惑：用户提交后既无运行迹象也无报错，难以定位问题环节，反映错误提示和状态展示的缺失（[#1569](https://github.com/netease-youdao/LobsterAI/issues/1569)）。
- 回复内容异常：所有输入返回相同内容，属于高影响回归，用户提供了日志便于排查（[#1566](https://github.com/netease-youdao/LobsterAI/issues/1566)）。
- 网络韧性不足：切换网络环境会导致网关反复重启，且无法自恢复（[#1551](https://github.com/netease-youdao/LobsterAI/issues/1551)）。
- 用户对上下文过长和后端 Bug 已有预期，主动建议增加快捷键/强制中断等恢复手段（[#1567](https://github.com/netease-youdao/LobsterAI/issues/1567)）。

## 待处理积压

目前 6 条开放 Issues 均创建于 2026-04-08，已积压约 4 个月，今日被标记为 [stale]：

- [#1569](https://github.com/netease-youdao/LobsterAI/issues/1569) 提问后无反馈
- [#1566](https://github.com/netease-youdao/LobsterAI/issues/1566) 所有输入均返回相同内容
- [#1561](https://github.com/netease-youdao/LobsterAI/issues/1561) 模型无法获取上传文件
- [#1551](https://github.com/netease-youdao/LobsterAI/issues/1551) 网络变化导致网关反复重启
- [#1563](https://github.com/netease-youdao/LobsterAI/issues/1563) 流量包服务条款文字错误
- [#1567](https://github.com/netease-youdao/LobsterAI/issues/1567) 输入框快捷操作按钮建议

其中 #1569、#1566、#1561 属于高影响用户可见 Bug，建议优先处理；若已在后续版本修复，请尽快回复用户并关闭 Issue。另请注意：6 条带有 [stale] 标签的历史 PR（#1570、#1573、#1576、#1578、#1580、#1582）今日统一关闭，若其中包含已实现但未合并的功能，需要维护者重新评估并决定是否重新提交。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-08-20

## 1. 今日速览

过去 24 小时 Moltis 保持高速迭代：3 个存量 issue 全部关闭（无新增 bug 报告），10 条 PR 获得更新，其中 5 条已合并/关闭、5 条待合并，另发布 2 个新版本（20260818.08、20260818.10），延续了按日多版本的交付节奏。此前遗留的 Apple Container 后端两个 bug（状态误判、资源限制失效）及 GPT-5.6 Luna 兼容问题均已在 24 小时内由对应 PR 修复并关闭，闭环效率高。值得关注的是，今日出现一条高危安全修复（vault 解锁/恢复端点缺少认证，CWE-306），目前尚未合并，应优先处理。整体项目健康度良好，但 6/10 的 PR 来自同一维护者（penso），贡献者集中度值得留意。

## 2. 版本发布

- **[20260818.10](https://github.com/moltis-org/moltis/releases/tag/20260818.10)** — 增量构建版本，未提供详细 changelog。
- **[20260818.08](https://github.com/moltis-org/moltis/releases/tag/20260818.08)** — 增量构建版本，未提供详细 changelog。

版本号格式为「日期 + 构建序号」，单日出现 .08 与 .10 两个版本，说明发布管道已高度自动化。结合当日合并的 PR 推断，这两个版本大概率包含 Apple Container 资源限制与状态解析修复、OpenAI Responses 路由相关改进。无破坏性变更或迁移说明发布；使用 Apple Container 后端或自定义 OpenAI endpoint 的用户建议关注上述修复的回归测试结果。

## 3. 项目进展

今日 5 条 PR 合并/关闭，集中在两条主线：

**Apple Container 后端生产可用性补全**
- [PR #1214 Fix Apple Container status parsing across versions](https://github.com/moltis-org/moltis/pull/1214) — 将原始 JSON 子串匹配替换为类型化状态解码器，同时兼容 pre-1.x 标量 `status` 与 1.x 嵌套 `status.state` 格式，解决了「沙箱已运行但被误判」的问题，并覆盖就绪检查、生命周期检查、失败清理分类等场景。
- [PR #1215 Fix Apple Container sandbox resource limits](https://github.com/moltis-org/moltis/pull/1215) — 通过 `--memory`、`--cpus` 正确传递内存与整机 CPU 限制，使用原生 `--ulimit nproc=` 语法应用 `pids_max`，并显式拒绝小数 CPU 配额（此前会静默削弱用户配置）。

**OpenAI 路由策略优化与模型覆盖**
- [PR #1198 Route OpenAI reasoning tool calls through Responses](https://github.com/moltis-org/moltis/pull/1198) — 官方内置 OpenAI 请求在「函数工具 + reasoning_effort」组合下改走 Responses API；无工具/无推理或第三方 OpenAI 兼容服务仍走 Chat Completions，避免破坏既有行为。
- [PR #1212 Preserve Responses routing for explicit OpenAI endpoints](https://github.com/moltis-org/moltis/pull/1212) — 修正内置 endpoint 的识别逻辑：按归一化 URL 而非「是否显式配置」判断，防止用户显式填入官方 URL 后路由策略意外改变。
- [PR #1213 Add GPT-5.6 Luna routing coverage](https://github.com/moltis-org/moltis/pull/1213) — 将 GPT-5.6 Sol/Terra/Luna 纳入确定性「推理 + 工具」响应路由测试，同步在线模型健康列表，并新增 Luna 流式回归用例。

这些改动让 Moltis 在 Apple Container 1.x 上的可用性与 OpenAI 新模型的接入完整性均前进了一步，且各 PR 均带回归测试。

## 4. 社区热点

- **[Issue #1185 Apple Container 1.x sandbox 运行状态误判](https://github.com/moltis-org/moltis/issues/1185)** — 今日讨论最活跃的 issue（3 条评论）。用户报告 1.x 沙箱实际已启动、但 Moltis 判定为未运行，背后的核心诉求是对新版容器运行时的兼容性与状态同步可靠性。已关闭，对应修复 PR #1214 已合并。
- **[PR #1198 OpenAI 推理工具调用路由改造](https://github.com/moltis-org/moltis/pull/1198)** — 从 8 月 15 日活跃至 19 日，是近期持续最久的 PR。它定义了一条关键行为分界线：官方 OpenAI endpoint 走 Responses API，OpenAI 兼容 provider 保留 Chat Completions。凡依赖旧行为的用户都需关注这一变更。
- **[PR #1216 vault 解锁/恢复接口缺少认证](https://github.com/moltis-org/moltis/pull/1216)** — 属于高危安全修复（CWE-306），修复内容会使未认证的远程爆破尝试失效，预计合入后关注度会很高。

## 5. Bug 与稳定性

按严重程度排列：

1. **严重（安全漏洞）** — [PR #1216 修复 `POST /api/auth/vault/unlock` 与 `POST /api/auth/vault/recovery` 无认证校验问题](https://github.com/moltis-org/moltis/pull/1216)。`is_public_path()` 放行整个 `/api/auth/` 前缀导致 `auth_gate` 从未执行，**任何未认证远程调用者均可暴力破解 vault**。修复已提交，**尚未合并**，为当前最高优先级风险。
2. **高** — [Issue #1185 Apple Container 1.x 沙箱启动但被判定为未运行](https://github.com/moltis-org/moltis/issues/1185)。已有 fix PR #1214，已合并。
3. **中高** — [Issue #1188 apple-container 后端资源限制未生效](https://github.com/moltis-org/moltis/issues/1188)。内存/CPU/pids 隔离失效。已有 fix PR #1215，已合并。
4. **中** — [Issue #1181 GPT-5.6 Luna 使用异常](https://github.com/moltis-org/moltis/issues/1181)。已由 PR #1213 补充路由测试与模型健康列表同步，已合并。

今日无新增 bug 报告；3 个存量 bug 全部在 24 小时内关闭并附带对应修复，稳定性表现与维护响应速度良好。

## 6. 功能请求与路线图信号

今日无新增功能类 issue，但多条待合并 PR 透露了下一阶段的演进方向：

- **可配置的权限边界** — [PR #1219 将 untrusted-turn 工具上限改为可配置](https://github.com/moltis-org/moltis/pull/1219)。该 PR 修正了 #1170 引入的硬编码 deny-all 工具策略，为公共受众恢复工具注册并让权限分层重新可达。信号：社区对分享/直聊场景下灵活、细粒度的工具权限控制有明确需求，很可能进入下一版本。
- **定时任务行为补全** — [PR #1208 让 heartbeat.active_hours 真正生效](https://github.com/moltis-org/moltis/pull/1208)。`is_within_active_hours` 函数早已编写、文档化和测试，但调度器从未调用。属于既定功能的缺陷补全，合入概率高。
- **WhatsApp 渠道体验打磨** — [PR #1217 将「回复 bot 消息」识别为提及](https://github.com/moltis-org/moltis/pull/1217) 与 [PR #1218 停止硬编码推送名为 "Moltis"](https://github.com/moltis-org/moltis/pull/1218)，方向是让群聊交互更符合用户直觉（@提及与回复等价），并支持 bot 个性化命名。

## 7. 用户反馈摘要

- 用户 **mikz** 反馈的 Apple Container 1.x 兼容问题获得了今日最多的讨论（3 条评论），说明新版容器运行时的升级路径是用户关注焦点；「实际运行但被误判为未运行」这类状态同步问题会直接打断自动化流程，属于高痛感缺陷。
- 用户 **holgzn** 反馈资源限制未生效，表明生产环境中资源隔离是硬需求，尤其 `--memory`、`--cpus`、pids 上限的传递可靠性需要长期回归保障。
- 用户 **ndrewtl** 反馈 GPT-5.6 Luna 异常，结合 PR #1213 同步「在线模型健康列表」的动作，可见用户对最新模型接入的速度与稳定性有较高预期。
- 整体看，今日用户反馈以技术性集成问题为主，反映出 Moltis 用户群体对多后端（Apple Container）与多模型（OpenAI 系列）扩展能力的高度依赖。

## 8. 待处理积压

当前 5 条 PR 待合并，按优先级排序：

1. **[PR #1216 fix(httpd): vault 解锁与恢复端点要求认证](https://github.com/moltis-org/moltis/pull/1216)** — 安全漏洞修复（CWE-306），应最优先 review 并合入。
2. **[PR #1219 fix(channels): untrusted-turn 工具上限可配置](https://github.com/moltis-org/moltis/pull/1219)** — 涉及权限模型调整，建议重点 review 后合入。
3. **[PR #1217 fix(whatsapp): 回复消息视为提及](https://github.com/moltis-org/moltis/pull/1217)** — 逻辑简单的用户体验修复。
4. **[PR #1218 fix(whatsapp): 停止硬编码推送名 "Moltis"](https://github.com/moltis-org/moltis/pull/1218)** — 品牌与个性化配置修复。
5. **[PR #1208 fix(cron): 调度器尊重 heartbeat 活跃时段](https://github.com/moltis-org/moltis/pull/1208)** — 已等待 3 天（8-17 创建），属既定功能补全，建议尽快合入。

Issue 积压方面：无长期无响应的 issue；三个已关闭 issue 中，[#1181](https://github.com/moltis-org/moltis/issues/1181) 历时约 20 天，[#1185](https://github.com/moltis-org/moltis/issues/1185) 与 [#1188](https://github.com/moltis-org/moltis/issues/1188) 均在两周内完成闭环，积压情况健康。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-08-20

## 1. 今日速览

过去24小时项目处理量显著：**50条Issue更新（46条关闭，4条新开/活跃）**，**48条PR更新（17条合并/关闭，31条待合并）**，无新版本发布。整体呈 **“清理积压+新功能推进”** 双线并行的态势——大量3-4月的老Issue在昨日集中收尾，同时8月19日有一批新PR提交，覆盖LLM流冻结修复、远程图片安全、文件浏览器增强等方向。社区侧，高热度讨论集中在**本地数据安全（#2884）**与**长任务稳定性**两大主题，项目整体健康度良好，维护者响应速度较快。

---

## 2. 版本发布

**今日无新版本发布。** 最新版本仍为 Desktop 2.1.0（来自 #7102 中的用户版本标注），无破坏性变更或迁移注意事项。

---

## 3. 项目进展

今日关闭/合并的 PR 集中在以下方向，反映项目在 **UI 可用性、集成测试覆盖、安全修复、生态功能** 四个维度的持续推进：

| 维度 | PR | 说明 |
|------|-----|------|
| **文件管理** | [#7151](https://github.com/agentscope-ai/CoPaw/pull/7151) feat(console): add folder creation to directory browser | 文件浏览器支持新建文件夹，并优化了图标语义（Home icon 替换） |
| **稳定性修复** | [#6986](https://github.com/agentscope-ai/CoPaw/pull/6986) fix(sandbox): fix antivirus software blocking issues | 对应 #6847 用户反馈的杀软拦截问题，沙箱层已修复 |
| **测试覆盖** | [#7103](https://github.com/agentscope-ai/CoPaw/pull/7103) test(integration): expand integration test coverage | 大幅扩展集成测试：覆盖 routing、telegram /version 控制命令、DingTalk/Feishu/Matrix 等10+渠道的 mock I/O、工具、MCP、coding-project 模块 |
| **UI 打磨** | [#7137](https://github.com/agentscope-ai/CoPaw/pull/7137) fix(console): polish model selector styles | 模型选择器样式优化 |
| **新功能** | [#6800](https://github.com/agentscope-ai/CoPaw/pull/6800) feat(mailbox): intelligent email management assistant | 首次贡献者合入：支持多邮箱提供商的 AI 邮件智能管理（接收、分类、自动回复、实时推送），具备访问控制 |

**整体判断**：项目在昨日完成了对历史积压问题的系统性收尾，同时新提交的 PR 表明开发团队正在向 **多用户 Hub、知识库 UI 配置、Computer Use 窗口感知** 等方向扩张能力边界。

---

## 4. 社区热点

| 排名 | Issue/PR | 热度 | 核心诉求 |
|------|----------|------|----------|
| 1 | [#2884](https://github.com/agentscope-ai/CoPaw/issues/2884) [已关闭] 用户个人目录内容几乎被清空 | 27条评论 | **最严重的信任危机事件**。用户安装 CoPaw 后工作目录几乎被清空、软件被删，情绪激动。虽然该 Issue 已关闭，但此类事故对项目口碑的长期影响需要团队重视（建议后续公开事件复盘） |
| 2 | [#2301](https://github.com/agentscope-ai/CoPaw/issues/2301) [已关闭] 6条功能建议合辑 | 10条评论 | 一键更新、/approve 按钮化、自动切换模型、内置自我反思能力、手机端同步、更多模型商支持——覆盖面广，代表典型用户对**产品化完善度**的期望 |
| 3 | [#2035](https://github.com/agentscope-ai/CoPaw/issues/2035) [已关闭] 多智能体 bot 绑定与协作 | 10条评论 | 用户已有多个智能体但无法分别绑定 Bot，也不能多智能体协作对话。说明 **multi-agent 协作仍是高频需求** |
| 4 | [#2723](https://github.com/agentscope-ai/CoPaw/issues/2723) [已关闭] 切换频道后任务消失 | 9条评论 | 频道切换导致进行中任务丢失，用户对任务可恢复性有强需求 |
| 5 | [#7102](https://github.com/agentscope-ai/CoPaw/issues/7102) [开放] 运行 GLM 5.3 时冻结超10分钟 | 9条评论 | 模型流式输出卡死，用户已确认并非 GLM 问题，判定为客户端缺陷（已有修复 PR #7150） |

**热度共性**：用户最为敏感的三大问题——**数据持久性**（任务丢失、目录被清空）、**长任务可靠性**（冻结、中断）、**多智能体协作能力**。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | Fix 状态 |
|--------|-------|------|----------|
| 🔴 严重 | [#2884](https://github.com/agentscope-ai/CoPaw/issues/2884) | 用户个人目录内容几乎被清空、软件被删（Ubuntu 22.04） | 已关闭，但未在列表中看到关联 fix PR，建议维护者回应根因 |
| 🟠 高 | [#7102](https://github.com/agentscope-ai/CoPaw/issues/7102) | LLM 流式输出冻结 >10 分钟，无 token 返回、界面卡死（QwenPaw Desktop 2.1.0 + GLM 5.3） | **已有修复 PR**：[#7150](https://github.com/agentscope-ai/CoPaw/pull/7150) 添加语义流看门狗，检测停滞流并释放资源 |
| 🟠 高 | [#6847](https://github.com/agentscope-ai/CoPaw/issues/6847) | 杀软频繁拦截并强制关停 QwenPaw 进程（同任务 WorkBuddy 不受影响） | **已修复**：[#6986](https://github.com/agentscope-ai/CoPaw/pull/6986) 今日已合并 |
| 🟡 中 | [#2377](https://github.com/agentscope-ai/CoPaw/issues/2377) | 处理 1500 个文件时仅处理几个后自动中断，即使已配置分批和断点续传 | 已关闭，无关联 fix PR 可见 |
| 🟡 中 | [#2663](https://github.com/agentscope-ai/CoPaw/issues/2663) | 任务卡住无法暂停；语言/主题设置重启后失效 | 已关闭，无关联 fix PR 可见 |
| 🟡 中 | [#6624](https://github.com/agentscope-ai/CoPaw/issues/6624) | 2.0 自动压缩（Scroll）不触发 summarize_when_compact 记忆流程，手动 /compact 可触发 | 已关闭（2.1.0 版本可能已修复，待确认） |
| 🟢 低 | [#7034](https://github.com/agentscope-ai/CoPaw/issues/7034) | ReactAgent 并发执行工具调用时抛出 async for 类型错误 | 已关闭 |

**此外**，今日新提交的修复类 PR 还包括：
- [#7150](https://github.com/agentscope-ai/CoPaw/pull/7150) LLM 流停滞检测与恢复（已确认对应 #7102）
- [#7146](https://github.com/agentscope-ai/CoPaw/pull/7146) 远程 view_image 下载防护（bounded size、SSRF 防护、不可变 Base64 持久化）
- [#7135](https://github.com/agentscope-ai/CoPaw/pull/7135) 环境文件原子写入，防止崩溃导致 env 文件损坏
- [#7152](https://github.com/agentscope-ai/CoPaw/pull/7152) 修复集成测试中 spawn 递归与端口竞争导致的偶发失败

**稳定性趋势**：开发团队当前重点在解决**流式输出卡死**这一关键体验问题，同时强化远程资源访问安全边界。

---

## 6. 功能请求与路线图信号

| 需求方向 | 来源 Issue | 已有对应 PR / 信号 | 判断 |
|----------|-----------|-------------------|------|
| **多用户 / 多实例 Hub** | — | [#7112](https://github.com/agentscope-ai/CoPaw/pull/7112) 自托管多用户控制平面，为本地账户运行隔离的 QwenPaw App 实例（8/18 提交，仍开放） | 大概率进入下一版本 |
| **更多模型提供商** | [#2598](https://github.com/agentscope-ai/CoPaw/issues/2598) Qwen3-235B 非思考模型支持、[#2296](https://github.com/agentscope-ai/CoPaw/issues/2296) 公司私有网关 | [#6515](https://github.com/agentscope-ai/CoPaw/pull/6515) 新增火山引擎 Agent Plan & MiMo V2.5 提供商（7/28 开放，仍在 review） | 进行中，火山引擎先行 |
| **备用模型自动切换** | [#2089](https://github.com/agentscope-ai/CoPaw/issues/2089) fallbacks 备用模型 | 无直接 PR，但 #2301 同样提及“模型自动切换 + 天梯排行” | 需求持续存在，建议关注 |
| **文件操作回滚** | [#2590](https://github.com/agentscope-ai/CoPaw/issues/2590) 文件删除恢复/覆盖回滚 | 有实现方案讨论（该 Issue 即讨论帖） | 设计已启动 |
| **多智能体 Bot 绑定 / 协作** | [#2035](https://github.com/agentscope-ai/CoPaw/issues/2035) | 未看到相关 PR | 仍为空白，需求明确 |
| **Computer Use 增强** | — | [#7037](https://github.com/agentscope-ai/CoPaw/pull/7037) 观测关联窗口表面（原生菜单、下拉框、owned dialogs） | 持续推进 |
| **session 级多项目目录** | — | [#6976](https://github.com/agentscope-ai/CoPaw/pull/6976) 聊天会话可绑定有序项目目录列表 | 开发中 |
| **API 自动化结果感知** | — | [#5930](https://github.com/agentscope-ai/CoPaw/pull/5930) SSE 响应中增加结构化运行结果（便于 Java 服务等检测对话异常失败） | 开放中，解决 API 调用方难以感知失败的问题 |
| **内置工具文档展示** | — | [#6325](https://github.com/agentscope-ai/CoPaw/pull/6325) Console 中展示内置工具文档和参数 | 产品化体验优化 |

**路线图信号总结**：项目接下来最可能的版本方向包括——**多用户 Hub、Computer Use 窗口感知、会话级多项目目录**；同时 **内存记忆相关 UI 配置**（[#6399](https://github.com/agentscope-ai/CoPaw/pull/6399) reranker 配置面板）也在推进中。

---

## 7. 用户反馈摘要

| 用户场景 | 反馈要点 | 来源 |
|----------|----------|------|
| **数据安全（最严重）** | “个人目录内容几乎被清空，软件也被删干净了……我也不知道是 coPaw 改了什么，还是有漏洞被别人黑了。要疯！！” | [#2884](https://github.com/agentscope-ai/CoPaw/issues/2884) 评论者：baodachuan |
| **杀软共存** | “QwenPaw 在执行任务时经常被杀软拦截，甚至强制关停进程；同样的任务 WorkBuddy 不会。” | [#6847](https://github.com/agentscope-ai/CoPaw/issues/6847) 评论者：cmhaoso |
| **长任务可靠性** | “让 CoPaw 读取 1500 个文件并总结，已配置分批和断点续传，但只能处理几个文件后就罢工了。” | [#2377](https://github.com/agentscope-ai/CoPaw/issues/2377) 评论者：jersey44168 |
| **本地模型显存** | “RTX 3080 10G + copaw-flash-4b + 128k 上下文，显存占用 9.2/10GB，能跑但想知道 16GB 以上显卡的实际占用。” | [#2776](https://github.com/agentscope-ai/CoPaw/issues/2776) 评论者：tianheng2017 |
| **浏览器自动化** | “浏览器自动化能力非常差，无法模拟人操作，易触发机器人告警，不能复用登录状态。” | [#3261](https://github.com/agentscope-ai/CoPaw/issues/3261) 评论者：MEI-ALEX-2026 |
| **移动端体验** | “手机浏览器访问 CoPaw 页面效果太差，连输入框都看不到；本地模型希望支持 14B/27B 参数版本；发送图片无法解析内容。” | [#2856](https://github.com/agentscope-ai/CoPaw/issues/2856) 评论者：devilardis |
| **审批操作体验** | “申请 approve 时具体操作的描述在正文中不易识别，需展开 thinking 才能知道要删什么，不够友好。” | [#2845](https://github.com/agentscope-ai/CoPaw/issues/2845) 评论者：MrR-oss |
| **产品功能期待** | “一键更新按钮；/approve 改为按钮形式；自动切换模型 + 天梯排行；内置自我反思；手机端继续操作；支持智谱和美团 longconv。” | [#2301](https://github.com/agentscope-ai/CoPaw/issues/2301) 评论者：948324394 |

---

## 8. 待处理积压

以下重要 Issue/PR 长时间未关闭或未合入，建议维护者关注：

| 类型 | 编号 | 内容 | 待处理时长 | 优先级建议 |
|------|------|------|-----------|-----------|
| PR | [#6515](https://github.com/agentscope-ai/CoPaw/pull/6515) | 火山引擎 Agent Plan & MiMo V2.5 providers | 23 天（7/28 创建，仍在 review） | 高——模型提供商扩展是用户高频诉求 |
| PR | [#5930](https://github.com/agentscope-ai/CoPaw/pull/5930) | SSE 增加结构化运行结果响应 | 41 天（7/10 创建） | 中——API 自动化调用方等待，建议尽快合入 |
| PR | [#6325](https://github.com/agentscope-ai/CoPaw/pull/6325) | Console 内置工具文档展示 | 29 天（7/22 创建） | 中——纯产品化提升 |
| PR | [#6399](https://github.com/agentscope-ai/CoPaw/pull/6399) | ReMeLightMemoryCard reranker UI 配置 | 28 天（7/23 创建，待 review） | 中 |
| Issue | [#2089](https://github.com/agentscope-ai/CoPaw/issues/2089) | 备用模型 fallbacks 机制 | 5 个月（3/23 创建，仍开放） | 高——涉及任务可靠性 |
| Issue | [#2296](https://github.com/agentscope-ai/CoPaw/issues/2296) | 支持对接公司私有大模型网关 | 5 个月（3/25 创建，仍开放） | 中——企业私有化部署关键路径 |
| Issue | [#2035](https://github.com/agentscope-ai/CoPaw/issues/2035) | 多智能体 Bot 绑定与协作对话 | 5 个月（3/21 创建） | 中——虽已关闭，但功能尚未实现 |

---

**项目健康度总结**：CoPaw 在 Issue 清理速度和 PR 合入效率上表现优秀（单日关闭 46 条 Issue、17 条 PR），核心稳定性问题（流冻结、杀软拦截）均有对应修复在推进。需要重点关注的是：**#2884 数据安全事件虽已关闭，但其社区影响远未消散，建议团队发布事故报告以重建信任；#7102 的冻结修复 PR #7150 应优先合入并发布补丁版本。**

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-20

## 1. 今日速览

ZeroClaw 项目过去 24 小时保持高活跃度：43 条 Issue 更新（41 条新开/活跃、2 条关闭）、50 条 PR 更新（48 条待合并、2 条关闭），无新版本发布，正处于 v0.8.x 积累期。当日核心动向是**技术债清理与防崩溃重构**：维护者集中提交了 5 个 refactor 类 PR（移除运行时 17 个 panic 隐患、替代 21 处工具假设、清理死代码抑制、审计 25 处 unsafe 边界等），同时多个高风险架构 RFC（sessions 归属、WASM 插件化、SOP 权限契约）仍在持续讨论中。Issue 端社区关注热点集中在 Windows 兼容性、安全审计与核心瘦身三大方向。整体判断：**项目健康度良好，开发重心从功能扩张转向架构治理与稳定性加固**。

---

## 3. 项目进展

今日**无重大合并**，唯一关闭的 PR #10145 为作者主动撤回；但合并队列中积聚了多个高质量 PR，其中技术债清理集群尤为突出。值得注意的进展信号：

- **运行时防 panic 重构**：PR #10134（移除 agent/turn/RPC dispatch/skills/SOP 共 17 处 panic 候选）与 PR #10129（替代 11 个工具中 21 处 panic/断言假设）同日提交，说明项目正系统性地消除运行时崩溃路径，提升稳定性基线。
- **死代码与 unsafe 边界清理**：PR #10123 删除非 ZeroCode 生产代码的 `allow(dead_code)` 抑制，PR #10124 审计 25 处原生/平台 unsafe 调用并记录每处不变量，是代码质量治理的具体落地。
- **ZeroRelay 安全传输**：PR #10142 引入强制双向 mTLS 与盲转发器，为远程 WSS 通道建立安全前门，属于基础设施安全能力补强。
- **WhatsApp passkey 兼容**：PR #10084 升级 `whatsapp-rust` 依赖至 SHORTCAKE 支持版本，解决设备链接阻塞问题，打通渠道可用性。

**综合评估**：虽然当日无代码合入，但新增 PR 在稳定性、安全性、代码质量三个维度的密集推进，表明项目正向更健壮的工程基线收敛。

---

## 4. 社区热点

### 最热 Issues（按评论数排序）

| Issue | 标题 | 评论 | 核心话题 |
|-------|------|------|----------|
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | RFC: Runtime-owned conversation sessions and transport surface adapters | 20 | 会话所有权与传输层适配器架构设计 |
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | [Bug]: 74 test failures on Windows | 18 | Windows 平台 74 个测试失败，Unix-only 命令与路径语义 |
| [#10118](https://github.com/zeroclaw-labs/zeroclaw/issues/10118) | [Tracker]: Rust anti-slop policy debt remediation | 16 | 307 处 Rust 反模式清理协调 |
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) | RFC: Prefer a lighter ZeroClaw core through external integrations | 16 | 核心瘦身与外部集成策略 |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | [Tracker]: Maintainer decision queue for RFCs | 13 | 维护者决策队列管理 |
| [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) | RFC: Treat empty WhatsApp Web allowed_groups as permit-none | 13 | 空配置默认安全策略（fail-closed） |

**讨论诉求分析**：

1. **架构治理成为第一话题** — #9487（sessions 所有权）与 #6165（核心瘦身）合计 36 条评论，社区对运行时架构边界和内核精简有强烈讨论意愿；#8692 决策队列体现了维护者希望收敛 RFC 讨论节奏的态度。
2. **Windows 可用性痛点持续升温** — #7462 虽已提出两个多月，今日仍有 18 条评论，说明中文 Windows 环境下的测试失败严重影响开发者体验，CI 不覆盖 Windows 是根本症结。
3. **安全默认值引发共鸣** — #9397 提出「空 `allowed_groups` 应禁止所有群组」的 fail-closed 主张，反映用户对渠道安全默认配置的关切。

---

## 5. Bug 与稳定性

### 按严重程度排列

**S0 — 数据丢失/安全风险**

- [#9976](https://github.com/zeroclaw-labs/zeroclaw/issues/9976) `[p1, in-progress]` **Anthropic 凭证片段泄漏至日志** — Debug 级别下认证事件记录凭据的前 8 和后 4 个字符，违反最小暴露原则。已在处理中，高风险。
- **[已关闭]** [#10067](https://github.com/zeroclaw-labs/zeroclaw/issues/10067) `[p1]` tool-result 截断问题 — 原报告声称 1MB shell 结果导致不可恢复，经评审重新界定为「固定 50000 字符截断、无可见提示、按字节截断结构化输出」后关闭。说明多轮沟通后问题被正确收敛。

**S1 — 工作流受阻**

- [#10066](https://github.com/zeroclaw-labs/zeroclaw/issues/10066) `[p0, accepted]` **SOP 引擎输出 schema 校验时序错误** — 步骤输出校验失败后，后续步骤仍先被执行、拒绝记录滞后。工作流状态机存在逻辑缺陷，S1 级影响。
- [#9290](https://github.com/zeroclaw-labs/zeroclaw/issues/9290) `[p1, accepted, help wanted]` **Windows 桌面安装器启动崩溃** — v0.8.3 安装包运行时报 `TaskDialogIndirect` 缺失。S1 级阻断用户桌面端使用，需社区协助。

**S2 — 行为降级**

- [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) `[p1, accepted]` **Windows 10 下 74 个测试失败** — 涉及 Unix-only 命令、路径语义和控制台编码（代码页 936），CI 仅跑 Linux 未能捕获，已持续两个多月。
- [#10045](https://github.com/zeroclaw-labs/zeroclaw/issues/10045) `[p2, in-progress]` **持久化图片标记残留临时路径** — 临时文件路径被写入 `[IMAGE:...]` 标记后产生重复告警。
- [#10106](https://github.com/zeroclaw-labs/zeroclaw/issues/10106) `[p2]` **精确代理选择器拒绝受支持的转录服务** — `transcription.groq/openai/deepgram` 等服务的代理匹配逻辑过严。

**S3 — 轻微问题**

- [#10103](https://github.com/zeroclaw-labs/zeroclaw/issues/10103) `[p3]` ZeroCode Health 法/西语标签宽度溢出
- [#9760](https://github.com/zeroclaw-labs/zeroclaw/issues/9760) `[p3]` Web Quickstart 未展示渠道描述符默认值

**稳定性趋势**：当日新报 Bug 多为 S3 级小问题；无新增 S0/S1 级崩溃报告，S1 级 #10066 虽严重但已获接受。整体稳定性处于**可控且改善中**状态。

---

## 6. 功能请求与路线图信号

### 可能进入下一版本（v0.9.0）的需求

1. **[#10141](https://github.com/zeroclaw-labs/zeroclaw/issues/10141) — 会话可用性优化**（用户强烈反馈）：「copy session」「进入上一会话」流程繁琐、按钮重复。结合已存在的 #9487（sessions 所有权）、#9600（session 持久化）+ PR #9739（多会话窗格），会话 UX 改进很可能被整合进下一迭代。
2. **[#10086](https://github.com/zeroclaw-labs/zeroclaw/issues/10086) — ZeroCode Logs 文本可选中/复制**（accepted, p2）：当前仅支持隐藏的 `y` 键整段复制，排障体验差，属低风险 UI 改进。
3. **[#10087](https://github.com/zeroclaw-labs/zeroclaw/issues/10087) — memory-postgres 测试纳入必选 CI**（p2）：补齐数据库后端测试覆盖，与 #9318（PostgreSQL session 后端 CI）形成呼应，是架构质量保障类需求。

### 技术债路线图

- **[#10118](https://github.com/zeroclaw-labs/zeroclaw/issues/10118) — Rust anti-slop 清理**：307 个候选问题（202 个 panic、生产代码质量问题），今日已有 4 个对应 refactor PR 提交，该 Tracker 是后续数周代码质量主线。
- **[#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) — WASM 插件架构 RFC**：提出 hook/backend/capability 三层「一切皆插件」设计，若被采纳将从架构层面改变扩展模型，属远期方向。
- **[#9702](https://github.com/zeroclaw-labs/zeroclaw/issues/9702) — Goal mode v2**：持久化续跑 + Web 控制面，「可信浏览器控制表面」安全设计是中高风险需求。

### 社区呼声强烈但尚无 PR 的需求

- **核心瘦身**（#6165, 16 评论）：将长尾集成移出默认核心，多位贡献者参与讨论，但尚未有实现方案 PR。这可能成为 v0.9.0 的架构级决策候选。

---

## 7. 用户反馈摘要

| 用户/来源 | 反馈要点 | 情感倾向 |
|-----------|----------|----------|
| `klonuo`（#10141） | 「很难管理 session」「复制上一段消息要操作两个 ascii 按钮，很沮丧」 | 不满 / 受挫 |
| Windows 中文用户群（#7462） | 代码页 936 控制台下 74 个测试失败，CI 不跑 Windows 导致问题长期潜伏 | 失望 / 期待修复 |
| `Audacity88`（#10086） | 日志只能通过隐藏快捷键整段复制，无法选中单行，排查故障成本高 | 不便 / 请求改进 |
| 安全相关用户（#9976） | 认证密钥前 8/后 4 字符写入日志，无法接受 | 关切 / 催促修复 |
| `melbinjp`（#10074） | SECURITY.md 引用的 CI 任务已于 4 月删除，文档与事实脱节 | 提醒 / 希望修正 |
| macOS 用户（#10059） | ZeroCode 仅支持 Ctrl+W 删词，不识别 Option-Backspace | 期望平台惯例对齐 |

**共性洞察**：用户在「跨平台一致性」（Windows/macOS）和「可发现性」（日志复制、默认值展示）上反馈最集中；安全类问题（凭据日志、文档过时）虽数量少但情绪强烈，应优先响应。

---

## 8. 待处理积压

### 需维护者关注的关键项

1. **[#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) — RFC: 轻量化核心**（4月27日创建，16 评论，`needs-maintainer-review`）：搁置近 4 个月，作为架构级 RFC 已积累充分讨论，需要维护者给出方向性裁决。
2. **[#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) — Windows 74 测试失败**（6月10日创建，18 评论，p1）：p1 严重度持续 71 天无人认领，是当前最大的跨平台兼容性历史包袱。
3. **[#9290](https://github.com/zeroclaw-labs/zeroclaw/issues/9290) — Windows 安装器启动失败**（7月23日创建，p1，`help wanted`）：阻断桌面端用户，已近一个月无进展，建议考虑回滚 v0.8.3 安装包或紧急修复。
4. **[#9318](https://github.com/zeroclaw-labs/zeroclaw/issues/9318) — PostgreSQL session 后端 CI**（7月23日创建，`blocked`）：被 #9251 阻塞，需确认上游落地进度后解除阻塞。
5. **[#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108) — CI 缓存与关键路径优化**（6月2日创建，p2，accepted）：PR CI 15-20 分钟耗时问题承诺改进但至今无对应 PR，影响全体贡献者交付效率。

### PR 积压提示

- **8 个 `needs-author-action` 的 PR**（#9739、#9320、#9828、#9454、#9399、#9317 等）等待作者响应维护者反馈，若本周内无更新建议考虑关闭或接手。
- **#9981**（`do-not-merge`, size:XL, p3）被显式标记禁止合并，需维护者明确阻塞原因以避免长期悬置。

---

*报告生成时间：2026-08-20 ｜ 数据窗口：过去 24 小时 ｜ 数据来源：ZeroClaw GitHub 仓库*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*