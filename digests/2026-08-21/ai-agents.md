# OpenClaw 生态日报 2026-08-21

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-08-20 23:15 UTC

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

# OpenClaw 项目动态日报 — 2026-08-21

## 1. 今日速览

过去 24 小时 OpenClaw 仓库保持高度活跃：共更新 500 条 Issue（新开/活跃 463 条，关闭 37 条，关闭率仅 7.4%）和 500 条 PR（待合并 339 条，合并/关闭 161 条，合并率约 32.2%），无新版本发布。项目正处于 v2026.8.1-beta.2 发布验证期，社区讨论集中在成本治理、多编码文件处理等架构级议题；但多个 P0/P1 级回归（网关启动失败、文件工具数据丢失、Gemini 兼容性）仍长期无 fix PR，整体健康度"活跃但承压"。

## 2. 版本发布

本期无新版本发布。（最新为 v2026.8.1-beta.2，处于验证阶段）

## 3. 项目进展

过去 24 小时共 161 条 PR 合并/关闭，其中最受关注的三条已关闭 PR 集中在安全与认证方向：

- [#116489](https://github.com/openclaw/openclaw/pull/116489) [closed] feat(security): require acknowledgement for install policy warnings — 外部 `security.installPolicy` 命令可返回 `warn`，交互式 CLI 安装可疑插件/技能前要求运维人员输入精确目标名确认，收紧安装策略安全边界。
- [#120900](https://github.com/openclaw/openclaw/pull/120900) [closed] feat(ui): review install policy warnings — 与 #116489 配套，在 Control UI 中为管理员提供安装策略警告的审查与"继续安装"确认能力，打通安全策略的 UI 闭环。
- [#125471](https://github.com/openclaw/openclaw/pull/125471) [closed] fix(models): keep Claude CLI OAuth available in Control UI — 修复网关重启后 Claude CLI OAuth 刷新所有权丢失、`auth.profiles` 中遗留旧 token 模式条目导致 Control UI 发布矛盾空状态的问题。

三条 PR 分别从"安全策略确认流"和"模型认证状态修复"两个方向推进项目。但需注意：339 条待合并 PR 中不乏 [#124543](https://github.com/openclaw/openclaw/pull/124543)（修复 CLI 后端助手消息双份渲染，对应 Issue #123792）、[#126859](https://github.com/openclaw/openclaw/pull/126859)（Codex 执行会话传输重构）等中大型改动，合并吞吐是当前瓶颈。

## 4. 社区热点

- [#42475](https://github.com/openclaw/openclaw/issues/42475)（23 评论）[Feature] 网关级 per-agent 成本预算强制 — 要求为每个 agent 设置日/月成本上限，在调度模型调用前拦截，避免失控支出。背后是运维侧"无外部监控即无法止损"的真实痛点，讨论热度居首。
- [#48788](https://github.com/openclaw/openclaw/issues/48788)（20 评论）集中式文件名多编码处理 — 由 PR #48578 的 UTF-8/Latin-1 修复延伸而来，提出建立中央编码工具统一处理 Shift-JIS、EUC-KR、GB18030 等，涉及所有渠道适配器，属架构级方案讨论。
- [#125626](https://github.com/openclaw/openclaw/issues/125626)（17 评论）v2026.8.1-beta.2 发布验证 — 维护者发起的 beta 验证清单，要求测试者按 worksheet 升级真实网关并逐项验证，是当前版本质量信号的核心来源。
- [#108435](https://github.com/openclaw/openclaw/issues/108435)（14 评论，👍3）P0 回归：升级 2026.7.1 后网关无法启动 — systemd、ollama、手动启动三种方式均报 `gateway did not start on 127.0...`，影响面大，是目前最受关注的 Bug 讨论。
- [#38327](https://github.com/openclaw/openclaw/issues/38327)（14 评论，👍3）"Cannot convert undefined or null to object" — google-vertex/gemini-3.1-pro-preview 下所有消息失败，自 2026.3.2 起已持续 5 个月+，社区耐心接近极限。

## 5. Bug 与稳定性

**P0（发布阻断 / 数据安全）**

- [#108435](https://github.com/openclaw/openclaw/issues/108435) 网关启动失败（2026.7.1 回归，crash-loop，maturity:stable）— 无 fix PR。
- [#119270](https://github.com/openclaw/openclaw/issues/119270) 文件工具剥离目标路径开头的 `@`，静默写入/删除错误文件（data-loss）— 已有关联 PR 打开。
- [#48920](https://github.com/openclaw/openclaw/issues/48920) Live 文档超前于发布版本（`IsolatedSessions` 在 2026.3.13 不存在，ux-release-blocker）— 无 fix PR。

**P1（核心功能受损 / 消息丢失）**

- [#38327](https://github.com/openclaw/openclaw/issues/38327) Gemini 3.1-pro 调用报 "Cannot convert undefined or null to object"（3 月创建，超长龄未修复）— 无 fix PR。
- [#123073](https://github.com/openclaw/openclaw/issues/123073) dev 渠道更新因 pnpm `workspace:*` 协议报 EUNSUPPORTEDPROTOCOL — 已有关联 PR。
- [#123273](https://github.com/openclaw/openclaw/issues/123273) 命名 agent 图片附件失败（"failed to hydrate structured image attachment"），默认 agent 正常 — 无 fix PR。
- [#97616](https://github.com/openclaw/openclaw/issues/97616) hook/tool 子进程泄漏，僵尸进程累积导致运行时劣化 — 无 fix PR。
- [#126246](https://github.com/openclaw/openclaw/issues/126246) 新增热门：Telegram 外发消息卡在 `send_attempt_started`，重启后投递丢失（8-19 创建，快速升温）— 无 fix PR。
- [#124284](https://github.com/openclaw/openclaw/issues/124284) v2026.8.1-beta.2 引入的流包装器导致 vLLM thinking 模型生成畸形 XML 工具调用 — 无 fix PR。
- [#92241](https://github.com/openclaw/openclaw/issues/92241) 更新/回滚后网关持有陈旧 dist 模块路径，入站消息静默丢弃（ERR_MODULE_NOT_FOUND）— 无 fix PR。
- [#125431](https://github.com/openclaw/openclaw/issues/125431) Codex 受限工具策略静默禁用 workspace AGENTS.md（安全边界+会话状态）— 无 fix PR。
- [#112259](https://github.com/openclaw/openclaw/issues/112259) 可见入站消息零 payload 分发，无重试/死信/用户可见失败，直接静默丢弃 — 无 fix PR。
- [#80498](https://github.com/openclaw/openclaw/issues/80498) 子代理完成公告在工具调用轮后过早或重复触发（👍3）— 无 fix PR。
- [#72015](https://github.com/openclaw/openclaw/issues/72015) active-memory 插件阻塞回复，QMD 引导初始化可压垮多智能体网关 — 无 fix PR。

## 6. 功能请求与路线图信号

**高讨论量功能请求**

- [#42475](https://github.com/openclaw/openclaw/issues/42475) 网关级 per-agent 成本预算（23 评论）— 成本治理方向，运维刚需，可能进入 v2026.9 路线图。
- [#48788](https://github.com/openclaw/openclaw/issues/48788) 集中式文件名多编码工具（20 评论）— 已有 #48578 前置修复，架构方案待产品决策。
- [#47910](https://github.com/openclaw/openclaw/issues/47910) 按失败类型做 provider 故障转移，隔离 auth 损坏的 provider — 实现成本低、收益明确。
- [#71142](https://github.com/openclaw/openclaw/issues/71142) Control UI 可配置上传大小上限（当前硬编码 5MB）。
- [#45501](https://github.com/openclaw/openclaw/issues/45501) `session.resetPrompt` 可配置会话启动消息。
- [#45564](https://github.com/openclaw/openclaw/issues/45564) `/new` 与 `/reset` 增加二次确认，防误触清空会话。

**与已有 PR 的路线图呼应**

- [#124633](https://github.com/openclaw/openclaw/pull/124633)（open）将 `/new|/reset` 确认标记为状态通知并传递 reset 原因 — 与 #45564 的确认流需求方向一致，但未关闭原 Issue。
- [#123356](https://github.com/openclaw/openclaw/pull/123356)（open）Control UI composer 分阶段输入斜杠命令参数 — 为 #123306 的 UI 阶段实现，但命令目录不传输解析器元数据等决策仍开放，故未关闭原 Issue。

**路线图判断**：安全安装策略（#116489/#120900 已合并）与成本治理（#42475）是当前两大投入主线；渠道编码统一（#48788）是潜在架构级重构。

## 7. 用户反馈摘要

- **记忆管理行为不一致**（[#43747](https://github.com/openclaw/openclaw/issues/43747)）：3 人团队使用同一版本，记忆存储路径与行为各不相同（chunking/embedding 路径、SQLite 位置差异），用户对"同版本不同行为"表达困惑。
- **Google Antigravity 账号被误封**（[#44134](https://github.com/openclaw/openclaw/issues/44134)）：频繁工具 schema 重载触发反滥用检测导致封号，用户损失真实账号，情绪强烈。
- **DeepSeek V4 Flash 逐版本回归**（[#88657](https://github.com/openclaw/openclaw/issues/88657)）：5.26 正常、5.27/5.28 出现不完整 turn（payloads=0），用户逐版本排查定位，对稳定性高度敏感。
- **飞书群激活模式失效**（[#50490](https://github.com/openclaw/openclaw/issues/50490)）：`/activation mention` 返回成功但行为不变，中文用户反馈群聊体验受损。
- **文档与版本脱节引发信任成本**（[#48920](https://github.com/openclaw/openclaw/issues/48920)）：用户按官方文档配置 `IsolatedSessions` 失败，文档超前于发布版本。
- **macOS doctor 工具可信度问题**（[#60612](https://github.com/openclaw/openclaw/issues/60612)）：误报 NVM node 问题且警告无法消除，用户对体检工具的实用性产生质疑。

## 8. 待处理积压

**长期未闭环的重要 Issue**

- [#38327](https://github.com/openclaw/openclaw/issues/38327)（2026-03-06，P1）Gemini 回归，5 个月+ 无 fix PR — 高优先级积压的典型代表。
- [#42475](https://github.com/openclaw/openclaw/issues/42475)（2026-03-10，23 评论）成本预算功能，讨论充分但未进入实现。
- [#48788](https://github.com/openclaw/openclaw/issues/48788)（2026-03-17，20 评论）编码工具架构方案，等待产品决策。
- [#14747](https://github.com/openclaw/openclaw/issues/14747)（2026-02-12）lane 等待诊断阈值硬编码 2s，Gmail 轮询等 60-120s cron 长任务持续误报。
- [#40644](https://github.com/openclaw/openclaw/issues/40644)（2026-03-09）Cron 日历/时间轴视图，UI 类需求长期未排期。
- [#45564](https://github.com/openclaw/openclaw/issues/45564)（2026-03-14）`/new` `/reset` 确认步骤，与 #124633 部分相关但仍未闭环。

**维护者提醒**：339 条 PR 待合并、多个 P0/P1 无 fix PR。建议优先处理 #108435（网关启动失败）、#119270（文件数据丢失）与 #123073（dev 渠道更新阻断），并考虑对 #38327 这类超长龄 P1 进行资源倾斜；同时关注 #126246 这一快速升温的 Telegram 消息丢失问题。

---

*数据来源：[github.com/openclaw/openclaw](https://github.com/openclaw/openclaw) Issues/PRs 快照（2026-08-21）*

---

## 横向生态对比

## 1. 生态全景

个人 AI 助手 / 自主智能体开源生态正处于**高速迭代但分化加剧**的阶段。头部项目（OpenClaw、ZeroClaw、CoPaw 等）单日可产生数十至数百条 Issue/PR，但普遍面临**合并吞吐不足、P0/P1 积压**的共性瓶颈；安全加固（认证、沙箱、供应链）与稳定性治理（数据丢失、消息投递、会话损坏）是当下最集中的资源投入方向，成本治理与多模型适配正在成为新的竞争焦点。与此同时，部分项目（NullClaw、ZeptoClaw）完全停滞，“大社区高承压、中社区稳推进、小社区易停滞”的马太效应愈发明显。

## 2. 各项目活跃度对比

| 项目 | Issue 更新 | PR 更新 | Release | 健康度评估 |
|---|---:|---:|---|---|
| OpenClaw | 500 | 500 | 无（beta 验证期） | 活跃但承压，合并率 32.2%，P0/P1 无 fix 堆积 |
| NanoBot | 5 | 29 | 无 | 良好，17 条待合并 PR 为最大积压点 |
| Hermes Agent | 50 | 50 | 无 | 高活跃但合并率仅 8%，安装/更新类 Bug 集中 |
| PicoClaw | 3 | 8 | 无 | 健康，Anthropic 协议支持落地；5 个依赖 PR 滞留 |
| NanoClaw | ~3 | 50 | 无 | 高密度修复，技能生态审计推进，响应迅速 |
| IronClaw | 23 | 36 | v1.3.0 | 良好，自动化/沙箱/Hook 主线清晰，待合并 19 条 |
| LobsterAI | 2 | 7 | 无 | 存量清理阶段，批量合并 4 月积压 PR |
| Moltis | 1（关闭） | 8 | 20260820.01 | 良好，安全漏洞 3 周闭环，Windows PR 长期滞留 |
| CoPaw | 27 | 50 | v2.1.1-beta.1 | 高频迭代，任务中断与数据膨胀问题待消化 |
| ZeroClaw | 50 | 50 | 无 | 讨论旺盛但交付停滞，0 合并，RFC 积压严重 |
| NullClaw | 0 | 0 | 无 | 无活动 |
| ZeptoClaw | 0 | 0 | 无 | 无活动 |

## 3. OpenClaw 在生态中的定位

OpenClaw 是当前生态中**社区规模最大、议题覆盖最广**的网关型项目，单日 500 Issue / 500 PR 的体量远高于其他项目（CoPaw、ZeroClaw、Hermes 均为 50 量级）。其技术路线侧重**平台级基础设施**：安全安装策略、网关级成本预算、多渠道消息路由、架构级编码统一等，而非单点客户端体验。优势在于生态辐射力和功能广度，且安全/认证方向已有实质合并（如安装策略确认流、Claude CLI OAuth 修复）；但劣势同样明显——**合并吞吐不足（32.2%）**与多个 P0/P1 长期无 fix（网关启动失败、Gemini 兼容性）正在消耗社区信任。相比之下，NanoBot 偏轻量 Bot 框架、Hermes 偏桌面端用户体验、IronClaw 偏企业级沙箱安全，OpenClaw 更接近“智能体中间件”的角色。

## 4. 共同关注的技术方向

**安全与权限加固**：涉及 OpenClaw（安装策略确认）、Hermes Agent（MCP 环境变量边界）、Moltis（Vault 端点认证，CWE-306 修复）、ZeroClaw（插件 egress 策略、Git shell 策略）、CoPaw（供应链依赖漏洞修补）。表明安全已从应用层扩展到沙箱、供应链和认证链。

**成本治理与配额控制**：OpenClaw #42475（per-agent 成本预算）、Hermes #90286（/goal token 预算）、NanoClaw #3270（token 用量统计）、CoPaw #6436（自动模型路由降低成本）。企业级运维对“可止损”的需求正在成为路线图硬指标。

**稳定性与数据完整性**：OpenClaw（文件工具 `@` 剥离致数据丢失、Telegram 消息投递丢失）、Hermes（state.db 损坏、更新删除桌面应用）、CoPaw（history.db 膨胀至 7.6GB、任务无提示中断）、NanoBot（流式 server_error 不重试）、ZeroClaw（工具轮被拒导致工作流阻塞）。消息不丢、数据不坏、任务不中断成为各项目共性最高优先级。

**多模型 / 多提供商兼容**：OpenClaw 修复 Gemini、NanoBot 新增 Vertex AI / SenseNova provider、PicoClaw 支持 Anthropic 原生 Messages API、NanoClaw 增加 Cursor Agent SDK、CoPaw 适配 GLM、ZeroClaw 处理 OpenAI reasoning effort 拒绝。生态正在从“单一模型绑定”走向“模型路由与协议兼容层”。

**安装 / 更新 / 跨平台体验**：Hermes 的 `hermes update` 破坏 Windows 桌面应用、Moltis 的 Windows shell hooks 5 个月未合并、ZeroClaw 的 Windows 启动失败、LobsterAI 的 macOS 打包修复。安装脚本与更新链路的健壮性已成为影响用户信任的门槛。

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 技术架构特征 |
|---|---|---|---|
| OpenClaw | 通用智能体网关 / 平台 | 大规模部署团队、运维 | 插件化网关，消息适配器众多，架构级协议与编码统一 |
| NanoBot | 轻量 Bot 框架 | 个人开发者、快速部署 | Python，侧重 CLI/TUI/WebUI 多渠道接入，MCP SDK 迁移中 |
| Hermes Agent | 桌面优先的智能体客户端 | 桌面端个人用户、Windows 用户 | Electron 桌面 + 本地 gateway，安装/更新链路较重 |
| PicoClaw | 轻量协议兼容层 | 嵌入式/边缘设备玩家（SiPEED） | 专注 Anthropic 兼容 API，多智能体框架探索（WIP） |
| NanoClaw | 技能生态型智能体 | 社群运营、渠道集成者 | `add-*` 技能仓库制，强调安装/卸载契约与文档一致性 |
| IronClaw | 企业级安全沙箱 | 高可靠性生产环境 | Rust 实现，强沙箱（Landlock）、持久化用户 workspace、Hook 体系 |
| LobsterAI | 协作办公与文件预览 | 中文企业用户（网易有道） | 紧耦合 OpenClaw 运行时，侧重 AI 产物可视化、IM 机器人 |
| Moltis | 多渠道消息集成 + 安全加固 | 隐私敏感 / WhatsApp 用户 | 单仓库快速发版，安全漏洞响应快，但 Windows 支持滞后 |
| CoPaw | 多模型自托管智能体 | 中文社区、模型多样性用户 | 支持 Qwen/GLM 等多模型，统一市场、记忆系统演进 |
| ZeroClaw | 架构实验与插件化创新 | 开发者 / 极客 | Rust + WASM 插件路线，RFC 驱动设计，交付节奏慢 |

## 6. 社区热度与成熟度

**第一梯队：高活跃 + 快速迭代**：OpenClaw、CoPaw、NanoClaw、Hermes Agent、IronClaw。它们每日有大量 PR/Issue 涌动，但 OpenClaw 与 Hermes 已因合并滞后导致 P0/P1 积压，属于“热度高、承压重”；CoPaw 和 IronClaw 合并节奏相对健康，处于功能扩展与安全加固并行的阶段。

**第二梯队：质量巩固 / 稳健推进**：NanoBot、Moltis、LobsterAI、PicoClaw。活跃度适中，但合并效率较高，且能快速闭环用户反馈（如 Moltis 安全漏洞 3 周修复、NanoBot 流式重试当日提交 PR）。这类项目更适合需要稳定依赖的开发者。

**第三梯队：停滞 / 高风险**：NullClaw、ZeptoClaw 无任何活动；ZeroClaw 虽然讨论丰富，但 24 小时内 0 合并、50 条 PR 全部待审，叠加多条 RFC 悬置 90 天以上，属于“设计热度高、工程交付阻塞”的特殊状态，采用前需评估维护响应风险。

## 7. 值得关注的趋势信号

**成本可观测与硬性预算将成为企业采用的前置条件**。OpenClaw、Hermes、NanoClaw、CoPaw 不约而同收到成本相关请求，说明用户不再满足于“能用”，而是要求可核算、可拦截、可配额。开发者应从架构层面预留 cost accounting 接口，而非事后补丁。

**安全正在从“应用漏洞修复”转向“默认防御”**。Moltis 的认证修复、ZeroClaw 的插件 egress 策略、IronClaw 的沙箱分层、CoPaw 的依赖漏洞清理，共同指向“deny-by-default”的权限模型。新项目在设计插件/工具系统时，应内置权限边界，而非发布后再补救。

**稳定性比新功能更能决定社区口碑**。OpenClaw 的 Telegram 消息丢失、Hermes 的 state.db 损坏、CoPaw 的任务静默中断、NanoBot 的流式重试失败——这些“非华丽但致命”的问题占据大量讨论热度，且直接影响用户留存。建议开发者将“消息不丢、状态不坏、失败可见”作为第一优先级。

**模型层正在走向“多提供商适配 + 动态路由”**。PicoClaw 增加 Anthropic 原生协议、NanoBot 新增多家 provider、CoPaw 提出自动模型路由、ZeroClaw 修复 reasoning effort 兼容性。智能体框架的未来竞争力不在于绑定某一家模型，而在于能否在协议层灵活接入新模型，并在成本/能力/延迟间动态权衡。

**安装与更新体验是当前生态最脆弱的信任缺口**。Hermes 的更新删除应用、ZeroClaw 的 Windows 启动失败、LobsterAI 的打包修复、Moltis 的 Windows hook 搁置，共同说明“First-run 体验”正在决定项目能否跨越早期采用者阶段。任何涉及桌面端、跨平台发布的项目，都应优先做原子化更新与失败回滚。

**可解释性与可观测性开始成为社区主动诉求**。Hermes 的压缩原因标记、IronClaw 的 Hook 审计、NanoClaw 的 add-why 技能、ZeroClaw 的 anti-slop 质量门禁，均显示用户与贡献者都在追求“知其所以然”。这对于构建长期可信的自主智能体尤为重要——不是让 agent 更强大，而是让 agent 的每一个决策都可被审查。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-08-21）

## 1. 今日速览

NanoBot 项目过去 24 小时保持高活跃度：共新增/更新 5 条 Issue（其中 2 条已关闭），29 条 PR 更新（待合并 17 条，已合并/关闭 12 条）。社区提交集中在 Bug 修复（流式重试、通道异常边界、矩阵日志上下文）与功能增强（SenseNova provider、WebUI 可观测性、Telegram 贴纸支持）两大方向。无新版本发布，但 12 条 PR 被合并/关闭，说明核心维护团队正在积极吸收社区贡献。项目整体健康度良好，社区响应快，PR 审阅队列（17 条待合并）是目前最大的积压风险点。

---

## 2. 版本发布

**无新版本发布**，最新 Release 仍为较早版本。此部分略。

---

## 3. 项目进展

过去 24 小时共有 **12 条 PR 被合并或关闭**，其中值得关注的有：

### 已合并/关闭的重要 PR

| PR | 内容 | 意义 |
|---|---|---|
| [#1203](https://github.com/HKUDS/nanobot/pull/1203) | 修复 Linux 上 "Event loop is closed" 错误 | 解决长期困扰 Python 3.11 用户的 CLI 退出报错问题，该 PR 最初创建于 2 月 25 日，今天终于关闭，是一个漫长的历史遗留问题。 |
| [#5452](https://github.com/HKUDS/nanobot/pull/5452) | TUI 退出时打印 resume 命令 | 提升 CLI 用户体验，让用户退出 TUI 后可以轻松恢复会话。 |
| [#5240](https://github.com/HKUDS/nanobot/pull/5240) | 重构 WebUI 浮动控件 | 统一悬浮层样式，规范 Menu/Popover/Combobox 语义，提升界面一致性。 |

### 已关闭的 Issue 所反映的修复

- [#5425](https://github.com/HKUDS/nanobot/issues/5425)：`socks://` 代理 URL 兼容性问题已关闭，说明相关修复已被处理。
- [#5447](https://github.com/HKUDS/nanobot/issues/5447)：付费安全扫描 MCP 集成提案已关闭，可能被移到 roadmap 或做进一步评估。

**整体评价**：虽然今日没有 Release 发布，但这些被合并的修复和改进表明项目在**稳定性（CLI 异常）、用户体验（TUI resume 命令）、前端质量（WebUI 控件统一）** 三个维度上都在稳步推进。

---

## 4. 社区热点

今日讨论热度最高的内容来自以下条目：

### #5444 - OpenAI OAuth 登录失败（Bug）

- **链接**: https://github.com/HKUDS/nanobot/issues/5444
- **状态**: OPEN | 评论: 1 | 👍: 0
- **分析**: 用户报告在 Docker 环境通过 OAuth 登录 OpenAI 失败，目前仅 1 条评论，说明用户刚遇到问题，正在等待维护者响应。这属于环境相关配置问题，可能与回调 URL 处理有关。

### #5455 - Codex server_error 重试修复（PR，关联 #5454）

- **链接**: https://github.com/HKUDS/nanobot/pull/5455
- **状态**: OPEN | 修复 #5454
- **分析**: 社区对流式响应中途 server_error 不重试的问题给出了快速修复（PR #5455 关联 Issue #5454），这是典型的社区自驱型 bug 响应。维护者应当尽快 review 该 PR。

### #5179 & #5180 - MCP SDK v2 迁移（双 PR 竞争）

- **链接**: https://github.com/HKUDS/nanobot/pull/5179 / https://github.com/HKUDS/nanobot/pull/5180
- **状态**: OPEN | 创建于 7 月 30 日，持续更新中
- **分析**: 两个 PR 试图以不同路径实现同一目标（MCP SDK v2 迁移），且都带 `conflict` 标签。这是一个**社区产出的分叉竞争**，维护者需要尽快决定方向，否则会造成社区贡献浪费。

**社区诉求总结**：
1. 用户对 Docker 环境下的 OAuth 体验不满，希望快速修复。
2. 社区对 MCP 现代化有强烈兴趣，但需要维护者引导统一方案。
3. 流式响应的稳定性受到关注，多个 issue/PR 围绕 retry 行为和错误处理展开。

---

## 5. Bug 与稳定性

过去 24 小时报告的 Bug 按严重程度排列如下：

### 🔴 高严重度

| Issue | 问题 | Fix PR | 状态 |
|---|---|---|---|
| [#5444](https://github.com/HKUDS/nanobot/issues/5444) | Docker 环境 OpenAI OAuth 登录失败 | **暂无** | OPEN |
| [#5454](https://github.com/HKUDS/nanobot/issues/5454) | 流式输出中途 server_error 不重试 | [#5455](https://github.com/HKUDS/nanobot/pull/5455) 已提交 | OPEN，PR 待合并 |

### 🟡 中严重度

| Issue/PR | 问题 | Fix PR | 状态 |
|---|---|---|---|
| [#5425](https://github.com/HKUDS/nanobot/issues/5425) | 自定义 OpenAI 兼容 provider 的 `socks://` 代理 URL 不被识别 | 已关闭，修复已到位 | CLOSED |
| [#5314](https://github.com/HKUDS/nanobot/pull/5414) | Slack 文件下载未验证完整重定向链 | 本条 PR 即修复方案 | OPEN |
| [#5413](https://github.com/HKUDS/nanobot/pull/5413) | provider 抛异常时 fallback 策略未生效 | 本条 PR 即修复方案 | OPEN |

### 🟢 低严重度（代码质量）

| PR | 修复方向 | 状态 |
|---|---|---|
| [#5458](https://github.com/HKUDS/nanobot/pull/5458) | Matrix 错误日志中 `%s` 与 Loguru 不兼容，导致上下文丢失 | OPEN |
| [#5431](https://github.com/HKUDS/nanobot/pull/5431) | Agent 后台任务失败未记录 traceback | OPEN |
| [#5430](https://github.com/HKUDS/nanobot/pull/5430) | Agent 任务组完成后未释放内存，存在轻微泄漏 | OPEN |
| [#5412](https://github.com/HKUDS/nanobot/pull/5412) | 后台 gateway 进程启动日志因 block-buffer 未及时刷出 | OPEN |

**稳定性趋势判断**：
- 最严重的问题（OAuth 登录失败）仍无 fix PR，需要优先关注。
- 流式重试问题已有对应 PR（#5455），修复方案简单清晰（在 `_TRANSIENT_ERROR_MARKERS` 中增加 `"server_error"`），预计很快可合并。
- 多个中低危修复等待合并，建议维护者在下次 release 中集中发布。

---

## 6. 功能请求与路线图信号

### 明确的功能请求

| Issue/PR | 功能 | 状态 | 是否可能进入下版本 |
|---|---|---|---|
| [#5459](https://github.com/HKUDS/nanobot/issues/5459) | 原生 Google Vertex AI provider（支持 Claude 模型） | OPEN | 可能性中等，需要维护者评估与现有 Anthropic/AWS Bedrock provider 的架构复用度 |
| [#5453](https://github.com/HKUDS/nanobot/pull/5453) | 新增 SenseNova（商汤日日新）provider | OPEN，带 `feature` 标签 | 较高，已实现并附带测试，只待 review |
| [#5387](https://github.com/HKUDS/nanobot/pull/5387) | Telegram 支持可复用 sticker 回复 | OPEN | 较高，对 Telegram 用户体验有明显提升 |
| [#5420](https://github.com/HKUDS/nanobot/pull/5420) | WebUI 新增 turn 级可观测性与安全恢复 | OPEN，大型 feature | 中等，需要较大篇幅 review |

### 路线图信号

- **MCP SDK v2 迁移**（PR #5179/#5180）：这是目前最大的架构演进信号。虽然今天没有合并，但 `priority: p1` 标签和长期持续的活跃讨论表明维护者正在评估中。
- **OAuth 可移植性**：多个 issue（如 #5444）集中反映 Docker/非浏览器环境下 OAuth 流程的脆弱性。这可能是下一轮优化的重点。

**结论**：SenseNova provider 和 Telegram sticker 功能是最接近进入主线的两个 feature；Vertex AI 是新出现的需求，还需时间验证规模。

---

## 7. 用户反馈摘要

### 来自 Issue 评论的真实用户声音

1. **Docker 环境下 OAuth 便捷性受损**（#5444）
   - 用户 `Bennett-Yang` 报告：在 Docker 中运行 NanoBot 时，OAuth 登录流程要求用户在浏览器中打开 localhost URL 并手动回贴完整 redirect URL，体验中断。反馈核心诉求：**希望 Docker 用户也能获得无头/自动化的 OAuth 体验**。

2. **代理配置的兼容性**（#5425）
   - 用户 `pxy0592` 反应：自定义 OpenAI 兼容 provider 使用 `socks://` 常见别名时无法正常请求。虽然该 issue 已被关闭（修复到位），但反映了用户在**私有网络/代理环境下的真实部署痛点**。

3. **社区商业化探索**（#5447）
   - 用户 `Misterio070` 提到用 NanoBot 对接 ScanPay（基于 Solana x402 的付费安全扫描服务），虽然提案被关闭，但说明**已有用户将 NanoBot 用于商业化 agent 服务场景**。这是一类需要关注的用户群体，未来可能有 monetization/API 稳定性的额外需求。

4. **流式响应容错性**（#5454）
   - 用户 `akinolur` 复现了 Codex 流式输出中途 `server_error` 导致整轮回复失败的问题，并自己提交了 fix PR（#5455）。体现了**用户在真实 code agent 场景中对长输出稳定性的高要求**。

**总体评价**：用户反馈高度集中在部署环境适配（Docker/代理）、长任务稳定性（流式重试）、以及第三方服务集成的可扩展性上。这些都是生产级 AI agent 工具的关键 Capability。

---

## 8. 待处理积压

### 需要维护者重点关注的历史遗留 PR

| PR | 创建时间 | 积压天数 | 重要性 |
|---|---|---|---|
| [#5179](https://github.com/HKUDS/nanobot/pull/5179) MCP SDK v2 迁移 | 2026-07-30 | 22 天 | **高**（priority: p1，且与 #5180 形成竞争，等待维护者裁决） |
| [#5180](https://github.com/HKUDS/nanobot/pull/5180) MCP SDK v2 最小化迁移评估 | 2026-07-30 | 22 天 | **高**（作为 #5179 的替代方案，需决定取舍） |
| [#5338](https://github.com/HKUDS/nanobot/pull/5338) MCP OAuth 凭证保护 | 2026-08-11 | 10 天 | 中（安全相关，建议优先 review） |
| [#5339](https://github.com/HKUDS/nanobot/pull/5339) WebUI 临时聊天丢弃后恢复问题 | 2026-08-11 | 10 天 | 中 |

### 长期未回应的 Issue

| Issue | 创建时间 | 关注度 |
|---|---|---|
| [#5444](https://github.com/HKUDS/nanobot/issues/5444) OpenAI OAuth 登录失败 | 2026-08-19 | 评论数少，但属于高影响问题（Docker 是主流部署方式），建议维护者尽快确认 |

### 积压观察

当前有 **17 条 PR 待合并**，其中 5 条带 `conflict` 标签，需要 rebase 或重新评审。高优先级的 MCP v2 迁移双 PR 已存在 3 周以上，是最大的路线图悬而未决项。建议维护者：

1. 近期发布一个 patch/minor release，合并当前所有低风险 fix PR。
2. 明确 MCP v2 迁移方向（选 #5179 或 #5180），关闭另一个，避免社区精力分散。
3. 对 #5444（OAuth Docker 问题）给予官方 Response，说明是否已纳入修复计划。

---

*本日报由 AI 自动生成，数据截至 2026-08-21。所有链接均指向 GitHub 原始 Issue/PR。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-21

---

## 1. 今日速览

过去 24 小时项目活跃度处于**高位**：共产生 50 条 Issue 更新（新开/活跃 38 条，关闭 12 条）和 50 条 PR 更新（待合并 46 条，合并/关闭仅 4 条），另有 0 个新版本发布。值得关注的是，**P0/P1 级严重 Bug 集中在安装更新（install-update）、桌面端（Desktop）、会话状态（session-state）三大区域**，其中 `hermes update` 在 Windows 上破坏桌面应用的问题持续复发（#86443、#44225、#90829 等多条关联 Issue）。PR 提交活跃但合并率偏低（8%），大量修复与功能 PR 处于待合并状态，存在一定的合并积压。社区对安装体验、更新可靠性、会话数据安全三项的反馈最为集中。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

今日 PR 合并/关闭数量较少（4/50），但社区提交了大量新 PR（46 条待合并），覆盖以下关键方向：

| PR | 内容 | 状态 |
|---|---|---|
| [#91150](https://github.com/NousResearch/hermes-agent/pull/91150) | fix(gateway): 将截断写入与 `/undo` 操作路由到 profile 数据库，修复桌面端全局远程 profile 会话中的编辑失败问题 | 待合并 |
| [#91157](https://github.com/NousResearch/hermes-agent/pull/91157) | fix: 修复流式传输丢弃重试时 attempt 编号多计 1 的问题（对应 Issue #90215） | 待合并 |
| [#91158](https://github.com/NousResearch/hermes-agent/pull/91158) | feat(agent): 每次上下文压缩（compaction）标明触发原因，提升可解释性 | 待合并 |
| [#91155](https://github.com/NousResearch/hermes-agent/pull/91155) | chore(gateway): 默认 scale-to-zero 空闲超时从 5 分钟下调至 2 分钟 | 待合并 |
| [#91139](https://github.com/NousResearch/hermes-agent/pull/91139) | fix(mcp): 限制 MCP 目录环境变量写入，加固安全边界（type/security） | 待合并 |
| [#91156](https://github.com/NousResearch/hermes-agent/pull/91156) | fix(auth): 在辅助调用中保留命名提供商的 headers（Codex User-Agent、originator 等） | 待合并 |
| [#91140](https://github.com/NousResearch/hermes-agent/pull/91140) | feat(discord): 新增 `discord.voice_channels_enabled` 配置，区分语音频道与语音消息 | 待合并 |
| [#91159](https://github.com/NousResearch/hermes-agent/pull/91159) | feat(desktop): 远程文件夹选择器新增类型化路径导航 | 待合并 |
| [#91148](https://github.com/NousResearch/hermes-agent/pull/91148) | fix(wake): 桌面端麦克风采集保持在客户端，不依赖后端麦克风配置 | 待合并 |

此外，多个**长期待合并** PR 今日获得更新（见第 8 部分），说明维护者仍在持续 review 历史提交，但合并节奏仍需加快。

---

## 4. 社区热点

今日讨论热度最高的 Issue 集中在**安装/更新体验**与**数据完整性**两条主线上：

1. **[#87093 — Debian 13.6 安装失败（14 条评论，2 👍）](https://github.com/NousResearch/hermes-agent/issues/87093)**
   用户通过官方 `curl | bash` 脚本安装时，`uv.lock` 与 `npm install` 相继失败。有明确复现步骤、环境信息完整。**诉求：安装脚本的跨发行版兼容性需系统性改进**，且已有类似反馈（#90932）表明安装过程缺乏进度反馈与错误诊断。

2. **[#86443 — `hermes update` 删除桌面应用但退出码为 0（6 条评论）](https://github.com/NousResearch/hermes-agent/issues/86443)**
   Windows 下更新流程中，Electron 重建失败时 `Hermes.exe` 被删除且不报错。此 Issue 与 #44225（5 条评论）、#90829 高度重复，属于**同根因的复发问题**。社区已多次反馈，修复 PR（#59942）仍处于待合并状态。

3. **[#90950 — state.db 在 SQLite 3.53.1 下反复损坏（5 条评论）](https://github.com/NousResearch/hermes-agent/issues/90950)**
   用户在两个 profile 上经历多次 `state.db` 损坏，包含并发写导致 WAL sidecar unlink。**诉求：会话存储层的并发安全与错误透出需要根本性加固**，关联 #90493（错误信息被吞）。

4. **[#46082 — Dashboard 内存泄漏至 5.2GB 被 OOM 杀死（6 条评论）](https://github.com/NousResearch/hermes-agent/issues/46082)**
   从 6 月持续至今的 P2 内存泄漏问题，用户等待三个月未修复。今日仍有更新，社区关注度不减。

---

## 5. Bug 与稳定性

今日报告的 Bug 按严重程度排列：

### 🔴 P0
- **[#90971 — `apply_anthropic_cache_control` 对预装饰输入非幂等](https://github.com/NousResearch/hermes-agent/issues/90971)**：虽经社区验证原 overflow 场景不可达，但函数幂等性问题本身仍待修复。已有维护者介入调查。

### 🟠 P1
- **[#87093 — Debian 13.6 安装失败；`uv.lock` & `npm install` 失败](https://github.com/NousResearch/hermes-agent/issues/87093)**：影响新用户上手，阻塞 Linux 平台采用。暂无关联 fix PR。
- **[#86443 — `hermes update` 删除桌面应用且退出码为 0](https://github.com/NousResearch/hermes-agent/issues/86443)**：数据/应用丢失风险极高。关联 PR #59942 待合并。
- **[#90950 — state.db 在 SQLite 3.53.1 下反复损坏](https://github.com/NousResearch/hermes-agent/issues/90950)**：并发写导致 WAL 损坏，影响 session 数据完整性。暂无 fix PR。

### 🟡 P2
- **[#44225 — Windows 更新失败导致 Hermes.exe 被删除、快捷方式失效](https://github.com/NousResearch/hermes-agent/issues/44225)**（#86443 的早期版本，尚未关闭）。
- **[#46082 — Dashboard 内存泄漏至 5.2GB 被 OOM 杀死](https://github.com/NousResearch/hermes-agent/issues/46082)**：长期未修复，影响桌面端稳定性。
- **[#90829 — 每日桌面更新失败：win32-x64 的 fail-closed 门禁 + 损坏的 node_modules](https://github.com/NousResearch/hermes-agent/issues/90829)**：与 #86443/#44225 同簇问题，需要合并处理。
- **[#91090 — ACP `session/set_model` 总是报 "No LLM provider configured"](https://github.com/NousResearch/hermes-agent/issues/91090)**：错误信息误导性强，影响 ACP 集成体验。
- **[#90134 — `hermes desktop` 构建失败：blockmap.js](https://github.com/NousResearch/hermes-agent/issues/90134)**：Windows 桌面构建链路问题。
- **[#74982 — Windows bash 能力探测可能无限挂起 turn](https://github.com/NousResearch/hermes-agent/issues/74982)**：timeout 失效，生产环境已观察。

### 🟢 P3
- **[#90215 — 流式丢弃日志中 attempt 计数多 1](https://github.com/NousResearch/hermes-agent/issues/90215)**：已有 fix PR #91157。
- **[#91153 — 模型在全新工具结果上叙述过时列表项](https://github.com/NousResearch/hermes-agent/issues/91153)**：上下文混用导致。
- **[#91068 — 桌面侧边栏会话搜索将匹配消息内容显示为会话名](https://github.com/NousResearch/hermes-agent/issues/91068)**。

### ✅ 今日已关闭（12 条，示例）
- [#90929](https://github.com/NousResearch/hermes-agent/issues/90929)（环境整体崩溃，需复现）
- [#79684](https://github.com/NousResearch/hermes-agent/issues/79684)（Windows 更新 cua-driver 提示隐藏）
- [#90630](https://github.com/NousResearch/hermes-agent/issues/90630)（::preview 意图在会话标签页中被静默丢弃）
- [#90287](https://github.com/NousResearch/hermes-agent/issues/90287)（peer + broadcast 会话 steering 功能）

---

## 6. 功能请求与路线图信号

今日出现了多个值得纳入路线图的功能信号：

| Issue/PR | 方向 | 分析 |
|---|---|---|
| [#90866 — 可观察状态从源头到副作用全程可证明（P3, needs-decision）](https://github.com/NousResearch/hermes-agent/issues/90866) | 架构演进 | 提出将状态可观察性提升为"proof-carrying"级别，属于深度架构改进，短期内落地概率低，但方向与近期 session-state 修复一致 |
| [#91149 — 预览面板路由 localhost 到远程/SSH 后端](https://github.com/NousResearch/hermes-agent/issues/91149) | 桌面端体验 | 远程开发场景刚需；关联 PR #91159（远程文件夹导航），说明桌面端远程能力正在系统化补齐 |
| [#84340 — 记忆文件放置契约（MEMORY.md / USER.md 等）](https://github.com/NousResearch/hermes-agent/issues/84340) | 记忆系统 | 4 个记忆文件缺乏明确放置契约，用户希望有 lint 约束；P3 + needs-decision，可能进入下一里程碑 |
| [#90286 — /goal 增加 token 预算](https://github.com/NousResearch/hermes-agent/issues/90286) | 成本控制 | 已关闭（标记为 needs-decision），与 #90283（/refine 撤销）同批，属于 CLI 增强，有待产品决策 |
| [#91140 — Discord 语音频道与语音消息分离（PR）](https://github.com/NousResearch/hermes-agent/pull/91140) | 平台集成 | 新增 `voice_channels_enabled` 配置，默认行为兼容。小步快走式改进，预计可合入下一版本 |
| [#91158 — 压缩触发原因可解释（PR）](https://github.com/NousResearch/hermes-agent/pull/91158) | 可解释性 | 与 #90785 配套，提升用户对自动压缩行为的信任感，合入概率高 |

---

## 7. 用户反馈摘要

来自 Issue 评论的真实用户声音：

- **安装/更新体验是最大痛点。** #87093 的用户称"Basic Debian 13.6 installation"仅额外安装了 Yum 即失败；#90932 的用户情绪化地描述"waste fucking ridiculous amounts of time"——安装过程无进度、无错误、无超时机制。**核心诉求：安装脚本需要更健壮的依赖处理与清晰的错误报告。**

- **更新破坏现有环境的信任危机。** #86443 与 #44225 的用户均描述了 `hermes update` 后"桌面快捷方式成为死链""Hermes.exe 完全消失"，且更新命令仍返回成功。**核心诉求：更新必须原子化——失败时回滚，而不是留下半成品。**

- **长期问题未获回应的不满。** #46082（Dashboard 内存泄漏）自 6 月 14 日提出，至今 2 个月未关闭，用户持续在评论中补充信息。**核心诉求：对 P2 级稳定性问题给出明确的时间表或临时规避方案。**

- **可解释性需求上升。** #91153 与 #91158 的评论显示，用户开始关注"模型为什么这么做"——为什么压缩、为什么任务列表出现过期项。**说明用户对 Hermes 的信任程度正在从"能用"走向"可解释"。**

- **正面信号：** 部分用户（如 #90866、#91149 的提出者）基于自身对 Hermes 代码结构的深度理解，提出了高质量架构建议，表明**核心用户群体具有较高技术水平**，社区存在持续的技术共建氛围。

---

## 8. 待处理积压

以下 Issue/PR 长期未合并或未关闭，建议维护者优先关注：

### 高风险 Issue（多日/多月未解决）
| Issue | 创建时间 | 风险 |
|---|---|---|
| [#46082 — Dashboard 内存泄漏 OOM（P2）](https://github.com/NousResearch/hermes-agent/issues/46082) | 2026-06-14 | 已持续 68 天，影响桌面端稳定性 |
| [#44225 — 更新破坏桌面可执行文件（P2）](https://github.com/NousResearch/hermes-agent/issues/44225) | 2026-06-11 | 与 #86443 重复，根因未修复，影响 Windows 用户 |
| [#74982 — Windows bash 探测无限挂起（P2）](https://github.com/NousResearch/hermes-agent/issues/74982) | 2026-07-30 | timeout 失效，生产环境可复现 |

### 长存 PR（超过 30 天未合并）
| PR | 创建时间 | 内容 |
|---|---|---|
| [#58146 — 跨 profile 重置 auth 冷却](https://github.com/NousResearch/hermes-agent/pull/58146) | 2026-07-04 | 涉及安全边界（sweeper:risk-security-boundary），需安全审查 |
| [#72816 — 允许 profile 禁用全局凭据回退](https://github.com/NousResearch/hermes-agent/pull/72816) | 2026-07-27 | 同上 |
| [#59942 — 更新后将重建应用安装到系统位置](https://github.com/NousResearch/hermes-agent/pull/59942) | 2026-07-07 | **直接修复 #86443/#44225/#90829 等 P1/P2 Bug，建议优先合并** |
| [#63298 — 端到端保留排队 prompt 边界](https://github.com/NousResearch/hermes-agent/pull/63298) | 2026-07-12 | 修复 #45560，sweeper:blast-massive，影响面大需谨慎评估 |
| [#62492 — serve/dashboard 启动时自动迁移过期配置](https://github.com/NousResearch/hermes-agent/pull/62492) | 2026-07-11 | 与更新后 profile 配置失效直接相关 |
| [#63009 — Codex GPT-5.6 压缩阈值自动提升扩展](https://github.com/NousResearch/hermes-agent/pull/63009) | 2026-07-12 | provider 兼容性修复，中等风险 |

---

**总结：** Hermes Agent 社区今日处于高活跃投稿状态，但**合并速度（8%）明显滞后于提交速度**。多个 P1/P2 级稳定性问题（更新破坏桌面应用、state.db 损坏、Dashboard 内存泄漏）存在重复报告现象，建议维护者对"更新-重建-安装"链路进行专项治理，并优先合并 #59942 等直接修复 PR。同时，安装脚本的跨平台健壮性已成为社区信任度的关键瓶颈，值得在下一版本中作为重点改进项。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-08-21

## 1. 今日速览

PicoClaw 项目今日整体活跃度中等偏上，共产生 **3 条 Issue 更新** 与 **8 条 PR 更新**，其中一条重要功能 PR 已闭环。核心看点在于：**Anthropic 原生 Messages API 协议支持（PR #1158）已合并**，这是对 #269 issue 的重要修复，扩展了项目的模型服务兼容性；多智能体协作框架 PR #423 进入长周期收尾评估阶段。此外，**5 个 AWS/Anthropic SDK 依赖更新 PR（#3332-#3336）已滞留 8 天未合并**，需维护者及时处理，否则可能累积依赖安全/兼容性风险。Issue 侧，Web UI 输入卡顿问题（#3281）依然是社区讨论最多的话题，连续一个月未关闭，值得关注。项目整体健康度良好，功能迭代与依赖维护节奏均在轨道上，但需注意部分 PR 堆积时间偏长。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日 **3 个 PR 进入关闭/合并状态**，其中 2 个对项目有实质性推进：

| PR | 状态 | 描述 | 影响 |
|----|------|------|------|
| [#1158](https://github.com/sipeed/picoclaw/pull/1158) ✅ Merged | **feat: add anthropic-messages protocol for native Anthropic API format** (Fixes #269) | 新增 `anthropic-messages` 协议前缀，支持使用 Anthropic 原生 Messages API 格式（`/v1/messages` 端点）。解决了仅支持 Anthropic 原生格式的代理/服务无法使用的问题。 | 显著扩大了可接入的模型服务范围，特别是 Anthropic 生态兼容服务。 |
| [#423](https://github.com/sipeed/picoclaw/pull/423) 📕 Closed (WIP) | **feat: base multi-agent collaboration framework & shared context** | 基于已合并的 #213 和 #131 构建多智能体协作基础：包括线程安全共享上下文 Blackboard、Agent Handoff、发现工具等。 | 进入关闭/收尾阶段，可能是 WIP 已纳入主线分支的其他合并方式，需关注后续拆分 PR。 |
| [#3318](https://github.com/sipeed/picoclaw/pull/3318) 📕 Closed | **fix(web): repair unparseable pnpm-lock.yaml** | 修复 `web/frontend/pnpm-lock.yaml` 中 `semver@7.8.5` 重复 key 导致的 pnpm 锁文件损坏问题（ERR_PNPM_BROKEN_LOCKFILE）。 | 修复前端构建失败问题，提升开发者体验与 CI 稳定性。 |

**总结**：Anthropic 原生协议支持的落地是今日最重要的功能进展，使 PicoClaw 在模型协议兼容性上跨出了一大步；多智能体框架是项目远期路线图中的关键模块，建议关注后续拆分后的推进进度。

## 4. 社区热点

### 🔥 最热 Issue：[#3281](https://github.com/sipeed/picoclaw/issues/3281) *[BUG] Web UI chat input is very laggy when history has a little bit long*

- **作者**：xpader | 创建：2026-07-21 | 更新：2026-08-20 | 评论：6 | 👍：1
- **状态**：已标记 `stale`

**分析**：该 Issue 是当前社区讨论最活跃的话题，核心痛点是 **Web UI 在会话历史较长时输入框出现严重卡顿**。从评论数与持续更新时间来看，用户非常关注此问题。此问题直接影响日常使用体验，涉及前端渲染性能优化，可能需要对聊天列表的虚拟滚动或消息渲染进行重构。值得关注的是此 Issue 已被标记 `stale`，说明项目维护者近期未对其作出明确响应，存在被自动关闭的风险。

**诉求**：用户期望在长会话场景下 Web UI 的输入流畅度得到明显改善，或至少提供一种机制（如历史截断、分页加载、虚拟化渲染）来避免性能退化。

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 处理状态 |
|---------|-------|------|----------|
| 🟠 中等 | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI 在会话历史较长时输入框严重卡顿（laggy），影响日常聊天输入体验。 | ❌ 无关联 Fix PR，且已标记 `stale`（超过 30 天未活动）。 |
| 🟡 低 | [PR #3318](https://github.com/sipeed/picoclaw/pull/3318)（已关闭） | 前端 pnpm-lock.yaml 存在重复 key，导致 `ERR_PNPM_BROKEN_LOCKFILE` 构建失败。 | ✅ 已通过 PR #3318 修复。 |

> 其他已关闭/合并 PR 未发现导致崩溃或回归的问题。

## 6. 功能请求与路线图信号

| Issue | 功能需求 | 分析 | 潜在纳入版本 |
|-------|---------|------|-------------|
| [#3331](https://github.com/sipeed/picoclaw/issues/3331) | **语音转写端点兼容性扩展**：允许使用任意遵循 `/audio/transcriptions` 端点的模型，而非仅限 `*-whisper-*` 系列（作者认为旧的 whisper 模型速度慢）。建议在模型/语音配置中增加 `whisper-transcription: true` 标志来强制/选择 ASR 路径。 | 该项目反映了对语音输入链路灵活性的需求，尤其是用户自建或第三方 ASR 服务接入能力的扩展。与当前 AI 应用接入多服务商的趋势相符。 | 可能纳入 v0.4.x 的 ASR 模块增强。 |
| [#3330](https://github.com/sipeed/picoclaw/issues/3330) | **动态模型覆盖能力**：`delegate`、`spawn`、`subagent` 工具目前无法在调用时动态指定模型，模型选择完全由静态配置决定。建议支持调用期动态覆盖模型。 | 这是对多智能体/子代理编排能力的重要补充，可大幅提升工具链的灵活性。结合 PR #423 多智能体协作框架，此需求可能成为下一阶段的核心能力之一。 | 与多智能体框架路线图高度契合，值得优先规划。 |
| [PR #423](https://github.com/sipeed/picoclaw/pull/423) | **多智能体协作框架**（Blackboard 共享上下文、Agent Handoff、发现工具） | 虽 WIP 关闭，但表明项目正在布局多智能体编排领域。若落地，PicoClaw 将具备复杂 AI 协作任务的承载能力。 | 远期路线图（v0.5+）核心方向。 |

## 7. 用户反馈摘要

- **Web UI 长会话卡顿是核心痛点**（#3281）：用户反馈在单会话中积累较多聊天记录后，输入框打字明显变卡，严重影响交互流畅度。该问题持续超过一个月未得到修复，可能使用户对 Web 端的稳定性产生疑虑，进而转向 CLI 或其他客户端。
- **Anthropic 原生协议支持获正向反馈**（#269 / #1158）：此前部分用户因代理服务仅支持 Anthropic 原生 API 而无法使用 PicoClaw，PR #1158 合并后，这些用户的接入门槛降低，社区满意度有望提升。
- **语音转写模型选择受限**（#3331）：用户认为 `*-whisper-*` 模型"过时且慢"，希望接入更多更新、更快的 ASR 模型，说明用户对语音交互质量有更高期待。
- **子代理模型灵活性需求**（#3330）：对工具调用场景中模型不可动态指定感到受限，希望获得更细粒度的模型控制能力。

## 8. 待处理积压

| 项目 | 类型 | 创建时间 | 搁置时长 | 重要性 | 建议 |
|------|------|---------|---------|--------|------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) Web UI 输入卡顿 | Issue (BUG) | 2026-07-21 | 31 天 | 🟠 高 | 已标记 `stale`，建议维护者尽快评估并分配前端性能优化任务，或明确在 roadmap 中排期，避免自动关闭导致用户不满。 |
| [#3332](https://github.com/sipeed/picoclaw/pull/3332) ~ [#3336](https://github.com/sipeed/picoclaw/pull/3336) 依赖更新 PR ×5 | PR (dependabot) | 2026-08-13 | 8 天 | 🟡 中 | 涉及 AWS SDK v2、Anthropic SDK、mautrix 核心依赖升级，长期不合并将导致依赖树落后，可能带来安全隐患与兼容性问题。建议集中 review 并合并。 |
| [#423](https://github.com/sipeed/picoclaw/pull/423) 多智能体协作框架 | PR (WIP) | 2026-02-18 | 6 个月+ | 🔵 长期 | WIP 已关闭，但多智能体能力是项目差异化的重要方向。建议维护者说明后续计划（拆分 or 重开），以便社区了解路线图。 |
| [#3330](https://github.com/sipeed/picoclaw/issues/3330) / [#3331](https://github.com/sipeed/picoclaw/issues/3331) | Issue (Feature) | 2026-08-13 | 8 天 | 🟡 中 | 均为合理且明确的增强请求，建议维护者确认是否纳入迭代计划，并打上 `accepted` 或 `roadmap` 标签，提升社区参与感。 |

---

**结论**：PicoClaw 今日核心进展为 Anthropic 原生协议支持落地（PR #1158 合并），项目功能广度得到有效扩展；但需注意 Web UI 卡顿问题（#3281）已进入 `stale` 状态，以及 5 个依赖更新 PR 搁置时间过长，建议优先处理以维持项目健康度与社区信任。

*数据来源：github.com/sipeed/picoclaw | 生成时间：2026-08-21*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-08-21

## 今日速览

NanoClaw 今日保持高度活跃：过去 24 小时内共发生 53 条 Issue/PR 更新，其中 Pull Request 更新达 50 条（含 16 条已合并/关闭），显示出维护团队正在进行一次大规模的代码审计与修复行动。值得关注的是，`@gavrielc` 连续提交了 10+ 个针对既有技能（skill）的修复 PR（#3413-#3420），覆盖 Vercel、Ollama、Dashboard、CLIDash 等多个组件，暗示官方正在系统性整顿技能生态的配置一致性与安装可靠性。与此同时，社区报告了 2 个新 Issue（WhatsApp 附件不可达、Slack mention-sticky 误触发），均为功能性缺陷，且都已出现对应修复 PR，项目响应速度良好。无新版本发布，整体处于"高密度修复、稳健迭代"阶段。

---

## 项目进展

今日合并/关闭的 16 条 PR 标志着一次跨组件的质量修复浪潮。以下按主题归纳：

### 核心路由与消息处理
- **#3422 [OPEN] fix(router): mention-sticky subscribes on a mention, not on a session…** — 修复 `mention-sticky` 模式在 `accumulate` 策略下未提及也回复的问题。作者 teran13，直接针对今日新开 Issue #3369，表明团队对社区反馈的即时跟进。（[链接](https://github.com/nanocoai/nanoclaw/pull/3422)）

### 新增功能 — 提供商与技能扩展
- **#3423 [OPEN] fix(add-slack): add missing app_mentions:read bot scope** — 修复 Slack 集成步骤中遗漏的权限声明，确保 `app_mention` 事件订阅可用。Marcelomarra 提交。（[链接](https://github.com/nanocoai/nanoclaw/pull/3423)）
- **#3356 [OPEN] feat(providers): add Cursor Agent SDK payload** — 为 Cursor Agent 提供商添加 SDK 支持，属于新功能开发。（[链接](https://github.com/nanocoai/nanoclaw/pull/3356)）
- **#3355 [OPEN] feat(setup): add /add-cursor agent provider skill** — 配套的 `/add-cursor` 安装技能，两者共同构成 Cursor 集成能力。（[链接](https://github.com/nanocoai/nanoclaw/pull/3355)）

### 既有技能全面审计修复（@gavrielc 系列，均基于 #3408）
这一系列 PR 体现了一次系统的技能仓库质量审计，覆盖 12 个技能中的多个：

| PR | 技能 | 核心修复 |
|---|---|---|
| [#3413](https://github.com/nanocoai/nanoclaw/pull/3413) | add-vercel | 删除破坏性 rsync、修复密钥赋值、对齐守卫条件 |
| [#3414](https://github.com/nanocoai/nanoclaw/pull/3414) | add-clidash | 修复刷新扇出导致的超时（29 并发 → 受控）、修复 payload 测试（87→102 全绿） |
| [#3415](https://github.com/nanocoai/nanoclaw/pull/3415) | add-atomic-chat-tool | 将配置迁移到 per-group MCP seam，修复 inert env 读取 |
| [#3416](https://github.com/nanocoai/nanoclaw/pull/3416) | add-ollama-tool | 修复 ollamaEnv 只读 process.env 的死配置问题，改用 per-group MCP seam |
| [#3417](https://github.com/nanocoai/nanoclaw/pull/3417) | add-dashboard | 新增 REMOVE.md、修复 SQL 可移植性、关机接线 |
| [#3418](https://github.com/nanocoai/nanoclaw/pull/3418) | add-tavily-tool | 修复 smoke test 静默 no-op、幂等移除、补充守卫 |
| [#3419](https://github.com/nanocoai/nanoclaw/pull/3419) | add-anydoc | 安装作用域 ncl、可移植技能测试、文档修正 |
| [#3420](https://github.com/nanocoai/nanoclaw/pull/3420) | add-macos-statusbar | Swift 代码与 plist 标签 slug-aware，修复 launchctl 服务名不匹配 |

### 提供商兼容性修复（@zvi-fried）
- **#3402 [OPEN] fix(codex): deliver provider-generated files** — 修复 Codex 提供商生成文件的投递路径与所有权契约。（[链接](https://github.com/nanocoai/nanoclaw/pull/3402)）
- **#3403 [OPEN] fix(matrix): use a refresh-safe ESM patch** — 修复 Node 22 下 Matrix 适配器扩展名 ESM 导入失败的问题。（[链接](https://github.com/nanocoai/nanoclaw/pull/3403)）
- **#3401 [OPEN] fix(whatsapp-cloud): keep skill payload compatible with main** — 修复 add-whatsapp-cloud 与主分支组合时的注册依赖问题。（[链接](https://github.com/nanocoai/nanoclaw/pull/3401)）

**小结：** 今日 PR 活动呈现明显的"生态治理"特征——核心团队对既有技能进行地毯式审计，修复配置失效、安装残留、文档漂移等问题；同时社区贡献者针对 Slack 集成与路由逻辑提交精准修复。项目整体的稳定性与可维护性正通过这些密集修复得到实质提升。

---

## 社区热点

今日讨论热度集中在以下 PR/Issue（评论数最多的 20 条 PR 中，大部分为 @gavrielc 的审计修复，但以下条目因涉及功能性 Bug 与核心行为，更受关注）：

- **Issue #3369 [OPEN] mention-sticky engages without a mention** — 作者 nilsborg 报告：在 Slack 线程平台上，配置 `engage_mode: 'mention-sticky'` 且 `ignored_message_policy: 'accumulate'` 的 agent 会在从未被提及的线程中回复。该 Issue 创建当天即获得 fix PR（#3422），是社区与维护者互动最迅速的案例。（[Issue #3369](https://github.com/nanocoai/nanoclaw/issues/3369) | [PR #3422](https://github.com/nanocoai/nanoclaw/pull/3422)）

- **PR #3423 [OPEN] fix(add-slack): add missing app_mentions:read bot scope** — 这一 PR 直接降低了 Slack 集成的配置摩擦。作者 marcelomarra 精准指出步骤 2 的作用域列表遗漏了 `app_mentions:read`，这可能导致新用户按文档操作后无法收到 app_mention 事件，属于"文档/向导 Bug"的典型代表。（[链接](https://github.com/nanocoai/nanoclaw/pull/3423)）

- **Issue #2715 [OPEN] Inbound WhatsApp media is unreachable by the agent** — 该 Issue 虽创建于 6 月，但今日获得 1 条新评论。问题描述清晰：v2 版本中 WhatsApp 附件下载到未挂载到 agent 容器的主机目录，导致代理无法访问用户发来的图片、文档或音频。这反映了 attach-to-container 架构中的路径抽象问题，是重要的架构级反馈。（[链接](https://github.com/nanocoai/nanoclaw/issues/2715)）

**诉求分析：** 这些热点背后反映了两类核心诉求：一是**配置与文档的准确性**（Slack scope 缺失、WhatsApp 路径不符）——用户希望"按文档操作即可用"；二是**行为语义的精确性**（mention-sticky 误触发）——用户期望 `accumulate` 策略严格区分为静默上下文与主动响应。

---

## Bug 与稳定性

今日报告的 Bug 按严重程度排列：

### 高 — 功能性阻断
1. **WhatsApp 媒体附件不可达（#2715 [OPEN]）**
   - 影响：agent 无法查看用户发送的图片/文档/音频，破坏核心交互体验
   - 详情：附件存入未挂载的 `DATA_DIR/attachments`，而 agent 被赋予 `/workspace/attachments/...` 的不存在路径
   - 状态：**无直接 fix PR**；与此相关的 #3401 侧重测试兼容性而非路径问题，需维护者进一步确认
   - （[链接](https://github.com/nanocoai/nanoclaw/issues/2715)）

### 中 — 行为异常
2. **mention-sticky 在未提及线程中触发回复（#3369 [OPEN]）**
   - 影响：`accumulate` 策略下，本应静默存储的消息触发了 agent 回复，可能导致信息泄露或噪音
   - 状态：**已有 fix PR #3422**，正在评审中
   - （[链接](https://github.com/nanocoai/nanoclaw/issues/3369)）

### 中低 — 配置/安装隐患（来自 @gavrielc 审计系列）
3. **多个技能配置表面失效**：add-atomic-chat-tool（#3415）、add-ollama-tool（#3416）的 env helper 只读 `process.env`，导致配置无法生效；add-clidash（#3414）刷新扇出约 29 个并发进程，在 2-vCPU 主机上大面积超时；add-vercel（#3413）存在破坏性 rsync 步骤。这些均已通过对应 PR 修复。

4. **已关闭的回归确认**：Issue #2606（`engage_mode='always'` 静默丢弃消息）今日标记为已关闭，确认该问题已解决。（[链接](https://github.com/nanocoai/nanoclaw/issues/2606)）

---

## 功能请求与路线图信号

- **Cursor Agent 集成（#3356 + #3355）**：两个 PR 分别添加 Cursor Agent SDK payload 与 `/add-cursor` 安装技能，表明项目正扩展对 Cursor 这一新兴编码代理的支持，可能成为下一版本的 noteworthy 特性。
- **技能生态标准化**：@gavrielc 的审计系列（#3413-#3420）暗示路线图中存在一个"技能质量门禁"或"审计框架"，要求每个技能必须携带 REMOVE.md、使用 per-group MCP seam、通过可移植 smoke test 等。这些修复虽为 Bug 修复，但本质上是在为技能生态的长期可维护性铺路。
- **社区信号**：Issue #2715 的持续存留可能促使开发组为附件系统设计更统一的挂载抽象（如 `attachments` 改用 bind mount 或通过 API 传递）。此外，Slack 权限遗漏（#3423）暴露出引导流程缺少自动化校验，未来或引入"配置预检"机制。

---

## 用户反馈摘要

- **痛点**：WhatsApp 用户因附件路径错配而无法与 agent 进行媒体交互，影响了实际使用场景中的文件共享（Issue #2715 的评论者反馈）；Slack 用户对"静默上下文"与"主动回复"的边界敏感，希望 `accumulate` 具备严格语义（Issue #3369）。
- **对文档的期待**：PR #3423 显示了用户对安装指南的细节有较高要求，遗漏的 scope 会直接阻断事件流，此类"按图施工却失败"的体验需通过文档修复或自动化检查消除。
- **对维护动作的认可**：@gavrielc 的系列 PR 在描述中引用了具体的审计结论（如 "healthiest of the twelve"、"the only full-suite failure"），这种透明、量化的修复风格获得社区认可，也提高了用户对项目健康度的信任。

---

## 待处理积压

以下项目长期未响应，建议维护者关注：

1. **Issue #2715 [OPEN]（创建于 2026-06-08）**：WhatsApp 附件路径问题已存在 2 个月+，期间虽获得评论但无明确修复 PR，属于高影响的慢性 Bug。（[链接](https://github.com/nanocoai/nanoclaw/issues/2715)）

2. **PR #3421 [CLOSED] docs+setup: announce one-click Slack agents**：该 PR 今日疑似关闭，但描述中提到基于 #3404（默认 flip）并堆叠于此。若关闭而非合并，可能影响 Slack 一键创建功能的发布节奏，需确认替代方案。（[链接](https://github.com/nanocoai/nanoclaw/pull/3421)）

3. **PR #1311 [CLOSED] Feature create new session**：创建于 2026-03-21 的旧 PR 今日被关闭，但摘要未说明合并与否。该 PR 涉及新会话创建功能，关闭可能意味着该功能未采纳或已通过其他方式实现，建议维护者补充关闭说明。（[链接](https://github.com/nanocoai/nanoclaw/pull/1311)）

4. **PR #3189 [OPEN] feat(skill): add-why**：自 8 月 5 日创建后持续更新（今日仍有活动），但未标记合并。该技能提供消息行为解释功能，对调试和可观测性有价值，若延期过长可能错过用户在稳定期的需求窗口。（[链接](https://github.com/nanocoai/nanoclaw/pull/3189)）

5. **PR #3270 [OPEN] feat/ncl token usage**：自 8 月 16 日创建，今日仍有更新，但长期处于开放状态。涉及 token 用量统计，对成本敏感型用户有吸引力，建议评估进度与阻塞点。（[链接](https://github.com/nanocoai/nanoclaw/pull/3270)）

---

*报告生成时间：2026-08-21 | 数据来源：NanoClaw GitHub 仓库（nanocoai/nanoclaw）*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-21

## 1. 今日速览

过去 24 小时 IronClaw 保持高活跃度：23 条 Issue 更新（17 条新开/活跃、6 条关闭），36 条 PR 更新（19 条待合并、17 条已合并/关闭），并有 1 个新版本发布。项目当前聚焦三条主线：持久化用户沙箱与网络代理（[#7732](https://github.com/nearai/ironclaw/issues/7732)/[#7779](https://github.com/nearai/ironclaw/pull/7779)）、Agent 生命周期 Hook 体系（[#7770](https://github.com/nearai/ironclaw/issues/7770)/[#7765](https://github.com/nearai/ironclaw/pull/7765)）、WebUI 设计系统五阶段规划（[#7038](https://github.com/nearai/ironclaw/issues/7038)/[#7781](https://github.com/nearai/ironclaw/issues/7781)/[#7782](https://github.com/nearai/ironclaw/issues/7782)）。此外，团队当日完成了 Rust 1.98 新版 clippy 引发的 CI 泛红修复（[#7777](https://github.com/nearai/ironclaw/pull/7777)/[#7778](https://github.com/nearai/ironclaw/pull/7778)），并推进多项代码卫生与文档整合。整体项目健康度良好，PR 审查密度高，但 19 条待合并 PR 的积压量值得关注。

## 2. 版本发布

### ironclaw-v1.3.0

- **发布日期**：2026-08-19（数据窗口内标记为最新版本）
- **性质**：`1.3.0-rc.2` 的稳定版晋升（stable promotion），包含 RC2 中验证通过的升级与容器修复，并完整纳入 RC1 的既定范围。
- **关键修复**：
  - 从 1.2 版本升级时，现在可以正确接受并保留已发布扩展的 `activation_state` 字段，不再在升级/状态迁移阶段崩溃循环。
- **迁移注意事项**：官方未列出破坏性变更；建议 1.2 用户升级后重点验证扩展 `activation_state` 字段的保留行为，并复查容器相关配置。

详见 [GitHub Releases 页](https://github.com/nearai/ironclaw/releases)。

## 3. 项目进展

过去 24 小时内有 17 条 PR 关闭/合并，重要的进展包括：

- **自动化 run-now 落地**：[PR #7729](https://github.com/nearai/ironclaw/pull/7729)（feat(automations): add run-now across trigger domain and WebUI，size XL）关闭，对应 [Issue #7193](https://github.com/nearai/ironclaw/issues/7193) 同步关闭。自动化现在支持"立即触发"，覆盖模型能力、产品服务、WebUI API 与本地化界面。
- **子代理设计文档整合**：[PR #7763](https://github.com/nearai/ironclaw/pull/7763) 关闭，将 7 份相互矛盾的子代理设计文档（7,000+ 行）合并为 1 份 canonical README，净减少 **9,713 行**，大幅降低文档维护成本。
- **CI 稳定性修复**：[PR #7777](https://github.com/nearai/ironclaw/pull/7777) 与 [PR #7778](https://github.com/nearai/ironclaw/pull/7778) 关闭，解决 Rust 1.98 新 clippy lint 导致的 `-D warnings` 全分支失败，合并队列恢复绿色。
- **Slack 配置体验改进**：[PR #7738](https://github.com/nearai/ironclaw/pull/7738) 关闭，Slack 部署配置卡片每个字段新增帮助文本，运维人员在 Admin → Configuration 可直接看到字段说明。
- **WebUI 登录页优化**：[PR #7304](https://github.com/nearai/ironclaw/pull/7304) 关闭，OAuth 登录按钮（如 Continue with Google）调整至 gateway token 表单上方。
- **代码卫生**：[Issue #7755](https://github.com/nearai/ironclaw/issues/7755) 关闭，折叠 turn/subagent 词汇中的重复类型。

整体来看，项目在自动化能力、扩展配置体验、WebUI 登录流程、文档治理与 CI 稳定性方面均取得实质进展。

## 4. 社区热点

- **[Issue #7732](https://github.com/nearai/ironclaw/issues/7732) — Persistent per-user sandbox with iron-proxy（8 条评论，最高）**：讨论最集中。用户指出当前每次 shell 命令都创建/销毁 Docker 容器的实现过于笨重，`/workspace` 需要按 `(tenant, user)` 持久化。配套实现 [PR #7779](https://github.com/nearai/ironclaw/pull/7779) 已提交 Step 2，引入 per-user 代理边车方案。
- **[Issue #7770](https://github.com/nearai/ironclaw/issues/7770) — Agent 生命周期 Hook 扩展（3 条评论）**：社区希望"当 X 发生时执行 Y"不再需要修改核心引擎，而是通过 hook 注册实现。Phase 1（AfterTurn）已在 [PR #7765](https://github.com/nearai/ironclaw/pull/7765) 落地。
- **设计系统 Epic 重构（[#7038](https://github.com/nearai/ironclaw/issues/7038)/[#7781](https://github.com/nearai/ironclaw/issues/7781)/[#7782](https://github.com/nearai/ironclaw/issues/7782)）**：团队将五阶段设计系统计划重新切分，Phase 1 由 #7038 负责，Phase 2–3 合并进 #7781（取代 #7733），Phase 4–5 拆分至 #7782。社区关注点在于 UI 一致性和 Storybook 基础设施。

热门诉求共性：基础设施层关注沙箱持久化与网络隔离；扩展性层关注 hook 机制；前端层关注设计系统统一与配置体验修复。

## 5. Bug 与稳定性

按严重程度排列：

- **高 — LLM 超时策略缺陷（[#7783](https://github.com/nearai/ironclaw/issues/7783)，risk: medium）**：结构化输出 finalization 走非流式 HTTP 客户端，无法测量 TTFT，单次传输 stall 在 60s 超时后仍可能被 75s deadline 杀死 run，且重试预算无法适配。尚无直接修复 PR，需策略层设计调整。
- **高 — memory.write 并发覆盖风险（[#7776](https://github.com/nearai/ironclaw/issues/7776)，IronLoop High）**：`append: false` 是 read-modify-write，现有 CAS 只防止撕裂写（torn write），无法防止完整文档覆写导致并发更新丢失。该问题来自 [PR #7765](https://github.com/nearai/ironclaw/pull/7765) 审查发现，尚无修复 PR，需要增加 expected-version 模式。
- **中 — AfterTurn Hook 绕过（[#7780](https://github.com/nearai/ironclaw/issues/7780)）**：scheduler 侧失败终止路径（driver failure / exit-application failure）不经过 AfterTurn 分发，导致 hook 覆盖不完整，是 #7770 审计发现。
- **中 — Hosted MCP OAuth 注册失败（[#7308](https://github.com/nearai/ironclaw/issues/7308)）**：Attio 扩展注册时 OAuth scope 无效且无法纠正，今日已关闭。
- **低 — 时区脆弱测试（[#7767](https://github.com/nearai/ironclaw/issues/7767)）**：Automation presenter 测试假设浏览器本地时间为 UTC，在 Asia/Shanghai 时区失败。已有修复 [PR #7774](https://github.com/nearai/ironclaw/pull/7774)。
- **已修复 — CI 全红**：Rust 1.98 clippy 新 lint 导致所有分支 CI 失败（[#7777](https://github.com/nearai/ironclaw/pull/7777) 描述），两个修复 PR 均在今日关闭。

## 6. 功能请求与路线图信号

- **v1.4.0 清晰信号**：[#7732](https://github.com/nearai/ironclaw/issues/7732)（持久化沙箱）与 [#7781](https://github.com/nearai/ironclaw/issues/7781)（设计系统 Phase 2–3）均标记 `v1.4.0` milestone。
- **Agent Hook 体系（[#7770](https://github.com/nearai/ironclaw/issues/7770)）**：AfterTurn 已实现（[PR #7765](https://github.com/nearai/ironclaw/pull/7765)），后续 BeforeTurn、compaction、tool-result seams 将按 phase 逐步落地，每阶段独立可交付。
- **Unbound runs 的 gate 策略（[#7775](https://github.com/nearai/ironclaw/issues/7775)）**：建议在无会话界面时跳过 gating capability 而非直接 abort，是 #7770 Phase 1 遗留的开放决策。
- **扩展配置可观测性（[#7769](https://github.com/nearai/ironclaw/issues/7769)）**：要求 Configure 模态展示扩展 setup phase 和所有 blockers，实现在 [PR #7772](https://github.com/nearai/ironclaw/pull/7772) 中。
- **WebUI 清理（[#7768](https://github.com/nearai/ironclaw/issues/7768)）**：移除 Settings/Extensions 未使用 Tab 与重复路由元数据，实现在 [PR #7773](https://github.com/nearai/ironclaw/pull/7773)。
- **通知中心（[#7698](https://github.com/nearai/ironclaw/pull/7698)/[#7699](https://github.com/nearai/ironclaw/pull/7699)）**：前端通知中心与后端 Inbox 发布均待合并，可能随 v1.4.0 推出。

## 7. 用户反馈摘要

- **沙箱效率痛点是真实需求**：当前"每条 shell 命令新建并销毁容器"的实现被明确批评为低效，用户期望持久化 per-user workspace 与网络隔离（[#7732](https://github.com/nearai/ironclaw/issues/7732)）。
- **可靠性是最敏感话题**：一次传输 stall 就能毁掉整个 run（[#7783](https://github.com/nearai/ironclaw/issues/7783)）；memory 并发写入存在静默覆盖风险（[#7776](https://github.com/nearai/ironclaw/issues/7776)）。这些直接影响用户任务成功率。
- **模型质量占失败主导**：[#7771](https://github.com/nearai/ironclaw/issues/7771) 显示 officeqa 的 58 个失败中绝大多数是模型质量问题（DeepSeek-V4-Flash），而非基础设施缺陷，说明平台稳定性在改善。
- **配置流程误导用户**：[#7769](https://github.com/nearai/ironclaw/issues/7769) 指出扩展 setup 的 blockers 被静默丢弃，导致模态框错误地报告"无需配置"。
- **审查文化正向**：[#7776](https://github.com/nearai/ironclaw/issues/7776) 是 PR 审查者发现"CAS 保证安全"的说法只对了一半并重新开启的 issue，体现较高审查标准。

## 8. 待处理积压

以下为开放时间较长或仍需维护者关注的重要条目：

- **[Issue #7038](https://github.com/nearai/ironclaw/issues/7038)**（08-03 创建）— 设计系统 Phase 1 Epic，配套 [PR #7750](https://github.com/nearai/ironclaw/pull/7750) 待合并，已停留 18 天。
- **[Issue #7042](https://github.com/nearai/ironclaw/issues/7042)**（08-03 创建）— DESIGN.md 治理文档 Phase 2，归属 Epic #7781，等待推进。
- **[PR #7257](https://github.com/nearai/ironclaw/pull/7257)**（08-05 创建）— 设计系统说明书 proposal，与 #7038/#7781 关联，文档型 PR 仍开放。
- **[PR #7491](https://github.com/nearai/ironclaw/pull/7491)**（08-11 创建，size XL）— omp core-tool 契约 + 引擎 + benchmark arm（#7392 slices 1–4），大型功能 PR，待审查/合并已 10 天。
- **[PR #7698](https://github.com/nearai/ironclaw/pull/7698)/[#7699](https://github.com/nearai/ironclaw/pull/7699)**（08-17 创建）— 通知中心前后端，均为 size XL，仍在待合并队列。

建议维护者优先关注上述积压项中与 v1.4.0 直接相关的 [PR #7491](https://github.com/nearai/ironclaw/pull/7491) 和通知中心 PR，及时拆解或推进审查，避免版本发布前集中合并带来回归风险。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-21

## 今日速览

- 过去 24 小时共更新 2 条 Issue、7 条 PR；其中 6 条 PR 被合并/关闭，1 条待合并，0 条新开 PR 和 Issue。
- 今日合并的 6 条 PR 全部为 4 月创建的存量项（标记 `[stale]`），呈现明显的"历史积压批量合并"特征，维护者正在集中收尾旧工作。
- 功能方面最值得关注的是 Write 工具文件卡片与 Markdown 分屏预览（PR #1553）落地，直接回应了 Issue #1552 的用户诉求。
- 无新版本发布，也无新功能或新缺陷被报告，项目总体处于存量清理与稳定性修复阶段。
- 唯一待合并的 PR #1547 修复定时任务通知渠道无法改回"不通知"的问题，改动量小、风险低，建议优先 review。

---

## 版本发布

无新版本发布。

---

## 项目进展

今日共有 6 条 PR 被合并/关闭，覆盖 6 个不同模块，属一次密度较高的批量合并：

| PR | 模块 | 类型 | 内容 |
|----|------|------|------|
| [#1545](https://github.com/netease-youdao/LobsterAI/pull/1545) | Agent | fix | 更新 Agent 技能后 `activeSkillIds` 立即同步，技能徽章不再需要切换 Agent 才刷新（修复 #1502） |
| [#1546](https://github.com/netease-youdao/LobsterAI/pull/1546) | Engine Overlay | feat | 引擎启动超过 30 秒后显示"取消启动"和"查看日志"按钮，避免用户只能干等 5 分钟硬超时 |
| [#1553](https://github.com/netease-youdao/LobsterAI/pull/1553) | Cowork / File Preview | feat | Write 工具调用后展示文件卡片（FileCard），支持拖拽分割的右侧预览面板（Markdown 渲染、HTML 沙箱、SVG 内联、代码高亮），关闭 #1552 |
| [#1555](https://github.com/netease-youdao/LobsterAI/pull/1555) | 打包工具链 | fix | macOS x64 打包失败修复：`build-openclaw-runtime.sh` 中增加 `shasum` 兼容（macOS 不支持 `sha256sum`） |
| [#1557](https://github.com/netease-youdao/LobsterAI/pull/1557) | 设置面板 | feat | 设置弹窗侧栏新增搜索框，支持中英文关键词 AND 匹配、NFKC 规范化、无匹配提示，Tab 被过滤时自动切换 |
| [#1560](https://github.com/netease-youdao/LobsterAI/pull/1560) | Agent 列表 | fix | 修复 Agent 编辑后点击原选中 Agent 无法切回聊天界面的问题 |

**整体判断**：一次批量合并在文件预览、启动诊断、设置搜索、Agent 交互四个方向同时推进，产品在"产物可视化"和"紧急状态逃逸"两个场景上有实质提升；同时修复了 3 个影响日常使用的缺陷。稳定性与可用性均有正向积累。

---

## 社区热点

1. **[Issue #1556：IM 机器人配置指南 404](https://github.com/netease-youdao/LobsterAI/issues/1556)**（2 评论）
   用户报告官方文档链接 `lobsterai.youdao.com/LobsterAI-IM机器人配置指南.md` 返回 404。这是今日评论数最高的条目，反映开发者文档死链问题，直接影响用户接入 IM 机器人的效率。

2. **[Issue #1552：AI 产物 Markdown 预览及文件卡片支持](https://github.com/netease-youdao/LobsterAI/issues/1552)**（1 评论）+ 关联 **[PR #1553](https://github.com/netease-youdao/LobsterAI/pull/1553)**
   用户提出 Agent 使用 Write 工具创建文件后无法在应用内直接预览，只能让 Agent 读取全文（占用对话空间）或手动打开文件管理器。该诉求当日获得完整实现并合并，是今日"需求→交付"闭环最快的案例，也是社区最关注的功能性讨论。

3. **[PR #1560：Agent 编辑后无法切换回聊天界面](https://github.com/netease-youdao/LobsterAI/pull/1560)**
   该问题属于高频交互路径上的边界缺陷，PR 定位准确（`agentId === currentAgentId` 时提前 return），关闭后能显著改善使用连贯性，反应社区对细节体验的敏感度。

---

## Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 |
|--------|------|------|
| 高 | [macOS x64 打包失败（`sha256sum` 不存在）](https://github.com/netease-youdao/LobsterAI/pull/1555) | 已有修复 PR 并合并，发布阻塞解除 |
| 中 | [Agent 编辑后点击原 Agent 无法切回聊天界面](https://github.com/netease-youdao/LobsterAI/pull/1560) | 已合并修复 |
| 中 | [定时任务通知渠道无法改回"不通知"](https://github.com/netease-youdao/LobsterAI/pull/1547) | 修复 PR 待合并 |
| 低 | [Agent 技能徽章更新不及时](https://github.com/netease-youdao/LobsterAI/pull/1545) | 已合并修复 |
| 低 | [IM 机器人配置指南 404（文档死链）](https://github.com/netease-youdao/LobsterAI/issues/1556) | 暂无 fix PR，需补文档或改链接 |

其中定时任务通知渠道问题（#1547）被定位为 commit `61cfe60` 引入的历史 bug，属于表单初始化逻辑与保存逻辑不一致的回归问题，修复仅 +2 行，建议尽快合入。

---

## 功能请求与路线图信号

- **AI 产物预览 / 文件卡片（#1552 → #1553）**：用户需求明确且已被完整实现。从 PR 中的 FilePreviewPanel 设计来看，项目正将"Agent 产物可视化"作为体验优化的重要方向，后续版本预计会持续推进文件类型覆盖与预览交互。
- **引擎启动诊断与逃逸（#1546）**：启动超时后提供"取消启动"与"查看日志"按钮，释放了用户在卡死场景下的操作束缚。可预期后续会加入更多启动阶段的可观测性能力。
- **设置面板搜索（#1557）**：设置项膨胀后的可用性优化，侧栏搜索 + i18n 关键词 + Tab 自动切换。这一 PR 暗示项目功能配置项增多，开发者正向"降低配置查找成本"发力。
- **信号总结**：下一版本将重点落在 **文件产物消费链路（写→预览→打开/定位）**、**启动失败可诊断性** 与 **设置/导航的搜索化** 三个方面。

---

## 用户反馈摘要

- **文档可访问性痛点（#1556）**：有用户按照指引访问 IM 机器人配置文档时遇到 404，说明文档站存在死链，直接影响新用户接入体验。
- **文件产物预览体验差（#1552）**：用户详细描述工作流中的阻塞——"让 Agent 用 Read 读取后将全文贴到聊天中，占用大量对话空间；手动切到文件管理器打开则打断流程"。这一反馈已成为正式功能（#1553），代表社区需求被快速响应的正向案例。
- **设置被历史 bug 困扰（#1547）**：用户将通知渠道从 IM 改为"不通知"后，再次编辑仍显示旧渠道，根因是两类表单逻辑不一致。侧面反映此类低频路径上的回归测试覆盖不足。

---

## 待处理积压

1. **[Issue #1556：IM 机器人配置指南 404](https://github.com/netease-youdao/LobsterAI/issues/1556)**
   自 2026-04-08 创建，已 stale 超 4 个月，今日仍 OPEN。建议维护者尽快修复文档链接或补充新地址，然后关闭。

2. **[Issue #1552：AI 产物 Markdown 预览及文件卡片支持](https://github.com/netease-youdao/LobsterAI/issues/1552)**
   虽然实现 PR #1553 已合并，但 Issue 状态仍为 OPEN。建议在发布后验证功能并关闭该 Issue，以免与 stale bot 冲突导致误判。

3. **[PR #1547：定时任务通知渠道修复](https://github.com/netease-youdao/LobsterAI/pull/1547)**
   当前唯一待合并 PR，修复明确、改动量小（+2 行），是存量回归问题，越早合入越能减少后续用户报错。

> 提示：今日所有 `[stale]` 项的更新时间均停留在 2026-08-20，若项目有自动化 stale 关闭策略，需人工确认这些长期开放项是否应在清理前归档或关联正确状态。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-08-21）

## 1. 今日速览
过去24小时项目活跃度较高：共产生 8 条 PR 更新（4 条已合并/关闭，4 条待审），关闭 1 个安全相关的 Issue，并发布 1 个新版本。其中值得关注的是：**严重安全漏洞 CWE-306（Vault 解锁/恢复端点缺少认证）在今日完成闭环**——对应 Issue #1177 关闭，修复 PR #1216 已合并。项目当前聚焦于安全加固（Web 镜像校验、供应链扫描固定版本、认证补全）、WhatsApp 渠道体验优化及 Windows 兼容性修复，整体健康度良好，社区贡献者活跃。

## 2. 版本发布
**Release 20260820.01**（链接：[Releases](https://github.com/moltis-org/moltis/releases)）

本次发布的具体 changelog 在数据源中未提供，但基于当日合并的 PR，可推断包含以下变更：

- **安全性修复**：`POST /api/auth/vault/unlock` 与 `/api/auth/vault/recovery` 增加强制认证（PR #1216，修复 #1177）
- **WhatsApp 修复**：
  - 群组中回复机器人消息现在会被正确视为提及（PR #1217）
  - 停止将推送名称硬编码为 "Moltis"，改用正确配置的机器人名称（PR #1218）
- **渠道配置调整**：新增 `untrusted-turn` 工具上限的配置项，替换原先的硬编码 deny-all 策略（PR #1219）

**破坏性变更与迁移注意**：
- 由于 #1219 的配置化改造，若已有部署依赖之前“非操作员回合一律禁止工具”的硬编码行为，升级后需显式配置新的上限策略，否则公共受众可用的工具集合可能发生变化。
- #1216 的认证修复意味着 Vault 解锁/恢复 API 从开放变为需要会话认证，任何依赖旧行为的脚本/客户端在升级后需要适配。

## 3. 项目进展
今日共合并 4 个 PR，修复 1 个安全漏洞，项目安全性与消息渠道稳定性均有明显提升：

| PR | 说明 | 状态 |
|---|---|---|
| [#1216](https://github.com/moltis-org/moltis/pull/1216) | Vault 解锁/恢复端点增加 `AuthSession` 校验，堵住未认证远程暴力破解入口 | ✅ 已合并 |
| [#1217](https://github.com/moltis-org/moltis/pull/1217) | WhatsApp 群组中“回复机器人消息”现在会被识别为提及，修复消息丢失问题 | ✅ 已合并 |
| [#1218](https://github.com/moltis-org/moltis/pull/1218) | WhatsApp 推送名称不再硬编码为 "Moltis"，正确使用配置的 bot 名称 | ✅ 已合并 |
| [#1219](https://github.com/moltis-org/moltis/pull/1219) | 将不受信任回合的 deny-all 工具策略改为可配置上限（回应 #1170 的副作用） | ✅ 已合并 |

安全漏洞 #1177 从 7 月 30 日报告到今日修复闭环，周期约 3 周，响应速度符合安全项目预期。项目正在从“功能优先”阶段逐步向“安全加固 + 细节打磨”阶段过渡。

## 4. 社区热点
今日数据中没有出现评论数或高反应数（👍）特别高的 PR/Issue 讨论。但有一个值得关注的案例：

- **[Issue #1177](https://github.com/moltis-org/moltis/issues/1177)「Vault Unlock/Recovery Endpoints Missing Authentication (CWE-306)」**：这是一个由外部安全研究人员（Practice100101）报告的严重漏洞——Vault 解锁/恢复端点因为 `is_public_path()` 放行 `api/auth/` 前缀而绕过认证，存在远程暴力破解风险。虽然该 Issue 本身无评论，但它触发了当天的安全修复 PR #1216，并在提交后约 3 周内完成闭环。此类安全问题虽然没有广泛讨论，但其实质影响和社区关注度都非常高。

## 5. Bug 与稳定性
按严重程度排列：

| 严重度 | 描述 | 相关 Issue/PR | 状态 |
|---|---|---|---|
| 🔴 严重 | Vault 解锁/恢复端点缺少认证（CWE-306），任何人可远程暴力破解密码 | [Issue #1177](https://github.com/moltis-org/moltis/issues/1177) / [PR #1216](https://github.com/moltis-org/moltis/pull/1216) | ✅ 已修复 |
| 🟡 中等 | WhatsApp 群组中“回复机器人消息”会被忽略（mention_mode="mention" 时） | [PR #1217](https://github.com/moltis-org/moltis/pull/1217) | ✅ 已修复 |
| 🟡 中等 | WhatsApp 推送名称硬编码为 "Moltis"，与 bot 实际名称不一致 | [PR #1218](https://github.com/moltis-org/moltis/pull/1218) | ✅ 已修复 |
| 🟠 待关注 | Windows 环境下 shell hooks 因 `sh -c` 不可用而失败 | [PR #468](https://github.com/moltis-org/moltis/pull/468) | ⏳ 修复 PR 已提交 5 个月，尚未合并 |

## 6. 功能请求与路线图信号
今日没有新的功能请求 Issue 被打开，但 3 个待审 PR 传递了明确的路线图信号：

| PR | 信号 |
|---|---|
| [#1222](https://github.com/moltis-org/moltis/pull/1222) fix(web): validate sandbox image requests | 入站镜像/包名校验 + 仅限管理员操作。这是一个安全加固动作，同时也暗含沙箱功能可能扩展到更多用户（需要更严格校验才能放开）。 |
| [#1221](https://github.com/moltis-org/moltis/pull/1221) fix(gateway): pin Snyk Agent Scan | 通过 `uvx` 固定 Snyk Agent Scan 版本，并移除 mcp-scan 回退。表明项目重视供应链攻击防护，未来工具链会逐步收紧。 |
| [#1220](https://github.com/moltis-org/moltis/pull/1220) fix(whatsapp): render Markdown in outbound messages | 出站 WhatsApp 消息将支持 Markdown 转原生格式，同时保留会话历史中的原始 Markdown。这是用户体验优化方向。 |

结合 #1219 将硬编码策略配置化，可以判断：**项目正在增强“可配置性”和“防御纵深”，下一版本可能包含沙箱镜像校验与更安全的扫描流程。**

## 7. 用户反馈摘要
当前数据中公开评论数量有限，无法全面提炼用户反馈。从已关闭的 Issue 和 PR 描述中，可以观察到以下真实用户痛点：

- **安全敏感用户/研究者的诉求**：Vault 解锁/恢复端点不设防，存在被攻击的隐患（#1177）。该反馈的直接结果是今天合并的 #1216 修复，表明项目方对安全反馈响应积极。
- **WhatsApp 重度用户的困扰**：在启用 `mention_mode = "mention"` 的群里“回复机器人”却被当作未提及而丢弃，和直觉行为相悖（#1217）；显示给陌生联系人的机器人名称无法自定义（#1218）。这些问题均已修复。
- **Windows 用户的使用障碍**：shell hooks 在 Windows 上不可用（见 PR #468），说明部分用户在 Windows 环境下的插件体验受阻，但这个 PR 长时间未合并，可能给相关用户带来挫败感。

## 8. 待处理积压
- **[PR #468 fix(plugins): use cmd.exe on Windows for shell hooks](https://github.com/moltis-org/moltis/pull/468)**

  创建于 2026-03-23，距今已约 5 个月，仍未合并。该 PR 解决 Windows 上 `sh -c` 不可用导致 shell hooks 失败的问题，作者已在 Windows 10 上自测，且 Windows CI 通过。长期未合并可能原因是维护者优先级不高或存在 Windows 运行时检测的设计分歧。建议维护者关注并给出明确回复，否则会打击平台特定贡献者的积极性。

- **[PR #1220 / #1221 / #1222](https://github.com/moltis-org/moltis/pulls?q=is%3Apr+is%3Aopen+updated%3A2026-08-20)**

  3 个今日新提交的待审 PR，均已完成代码格式检查，部分尚未跑完测试。为避免堆积，建议维护者尽快安排 review。

---

> **整体结论**：Moltis 项目今日表现活跃，安全漏洞闭环及时，合并 PR 数量（4 个）与新增待审 PR（3 个）均在合理水平。项目中长期积压的 Windows 兼容性 PR 值得尽快推进；同时，当日一次合并 4 个面向不同模块的修复也表明代码库正在健康演进。
>
> **项目健康度评级**：🟢 良好

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-08-21

> 数据来源：github.com/agentscope-ai/QwenPaw（即 CoPaw）  
> 统计窗口：过去 24 小时（截至 2026-08-20 数据快照）

---

## 1. 今日速览

CoPaw（QwenPaw）在过去 24 小时保持高活跃度：**27 条 Issue 更新（14 条新开/活跃、13 条关闭），50 条 PR 更新（21 条待合并、29 条已合并/关闭），并发布 v2.1.1-beta.1**。社区对**任务中断、长时冻结、网络恢复**等稳定性问题的反馈最为集中（#6921 达 10 条评论、#7102 达 9 条），同时安全加固（master key 权限、依赖漏洞修复）与性能优化（驱动并发初始化、长会话响应优化）也在持续推进。整体来看，项目正处于**高频迭代、社区反馈活跃、稳定性问题待消化**的快速发展阶段。

---

## 2. 版本发布

**v2.1.1-beta.1** 已发布（[Release 页面](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.1-beta.1)），包含 3 项变更：

- **feat(console):** 改进编辑器标签页溢出导航（[PR #6983](https://github.com/agentscope-ai/QwenPaw/pull/6983)）
- **fix(providers):** 降低速率限制器初始化日志级别，减少日志噪音（[PR #6988](https://github.com/agentscope-ai/QwenPaw/pull/6988)）
- **chore:** 更新发布说明

**破坏性变更：无。** 这是增量 beta 版本，升级风险低，但需注意其为 beta 通道，生产环境建议评估后再升级。

---

## 3. 项目进展

今日合并/关闭的 29 条 PR 中，以下合并项对项目有实质推进：

| 方向 | PR | 说明 |
|---|---|---|
| **功能整合** | [#6880](https://github.com/agentscope-ai/QwenPaw/pull/6880) | 将应用、插件、技能市场统一到 `/market` 页面，保留各自业务逻辑，形成单一入口 |
| **性能** | [#7174](https://github.com/agentscope-ai/QwenPaw/pull/7174) | 工作区启动时并发初始化持久化 Drivers，缩短冷启动时间，同时保留故障隔离与原子发布语义 |
| **安全** | [#7172](https://github.com/agentscope-ai/QwenPaw/pull/7172) | 修补 website 与 Creator 依赖漏洞：Vite 任意文件读取、Rollup、react-router-dom、js-yaml 等 |
| **发布工程** | [#7166](https://github.com/agentscope-ai/QwenPaw/pull/7166) | 将 qwenpawmail MCP 服务器打包为独立 sidecar，优化冻结（frozen）构建下的发布结构 |
| **数据安全** | [#7135](https://github.com/agentscope-ai/QwenPaw/pull/7135) | envs.json 损坏时不再静默覆盖，改为保留损坏文件并原子写入（修复 #7118） |
| **文件处理** | [#6371](https://github.com/agentscope-ai/QwenPaw/pull/6371) | 下载器超时后继续走 wget→curl→urllib fallback 链（修复 #6370） |
| **前端体验** | [#7161](https://github.com/agentscope-ai/QwenPaw/pull/7161) | 助手回复卡片中新增 artifacts 展示 |
| **技能系统** | [#7073](https://github.com/agentscope-ai/QwenPaw/pull/7073) | 技能名称去重，防止 workspace 技能与内置技能重复加载 |

**总结：** 项目在功能统一入口、冷启动性能、供应链安全、数据可靠性、发布工程五个维度均有实际合并，整体处于稳健向前状态。

---

## 4. 社区热点

今日讨论热度最高的 Issue/PR 反映了用户对**任务可靠性与可用性**的强烈关注：

| 热度 | Issue | 状态 | 评论数 | 核心诉求 |
|---|---|---|---|---|
| 🔥 最高 | [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | OPEN | 10 | 多步骤任务执行中自行停止并**无任何提示**，需用户说“继续”才能恢复。模型输出显示已规划下一步但未执行。用户对“静默失败”体验不满 |
| 🔥 高 | [#7102](https://github.com/agentscope-ai/QwenPaw/issues/7102) | CLOSED | 9 | 使用 GLM 5.3 时客户端冻结超 10 分钟，无任何 token 输出，thinking 也卡住 |
| 高 | [#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643) | CLOSED | 6 | 任务产出物全部堆积在 media 目录，希望按任务建目录隔离 |
| 中 | [#6436](https://github.com/agentscope-ai/QwenPaw/issues/6436) | OPEN | 4 | 自动模型路由：简单请求用本地小模型、图像用视觉模型、困难推理用大模型，而非固定单一模型 |

**分析：** #6921 是今日最值得关注的 Issue——它揭示了 Agent 任务执行链路中的一个关键缺陷：模型“说出计划”后，循环被意外中断且无兜底提示。这类问题直接影响用户对 Agent 自主完成任务的信任度，建议优先排查会话循环终止条件。此外，用户对产物组织（#6643）和模型路由（#6436）的需求反映了从“能用”到“好用”的诉求升级。

---

## 5. Bug 与稳定性

按严重程度排列今日报告的 Bug：

### 🔴 严重（影响核心任务执行 / 数据安全）

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | 多步骤任务自行停止，无提示，需人工“继续” | OPEN，10 评论 | ❌ 无 |
| [#7102](https://github.com/agentscope-ai/QwenPaw/issues/7102) | 客户端冻结 10 分钟以上，无 token 输出 | CLOSED | ❌ 无 |
| [#6932](https://github.com/agentscope-ai/QwenPaw/issues/6932) | 网络短暂中断恢复后所有 LLM 请求持续超时，必须重启服务 | OPEN，3 评论 | ❌ 无 |
| [#7168](https://github.com/agentscope-ai/QwenPaw/issues/7168) | `conversation_history` 被 recall_history 整段写入，history.db 膨胀至 **7.6GB**，且同一区间重复落库 | OPEN | ❌ 无 |
| [#7110](https://github.com/agentscope-ai/QwenPaw/issues/7110) | 上下文中出现无法下载的图片链接，整个会话不可用，只有 /clear 可恢复 | CLOSED | ❌ 无 |

### 🟡 中等（功能异常但可绕过）

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#7162](https://github.com/agentscope-ai/QwenPaw/issues/7162) | 流式输出中途 httpx.ReadError 导致偶发 UNKNOWN_AGENT_ERROR，且重试判定遗漏 ReadError | CLOSED | ❌ 无 |
| [#7156](https://github.com/agentscope-ai/QwenPaw/issues/7156) | embedding health check 超时硬编码 5s，预热后仍超时，导致降级为 BM25-only | OPEN | ✅ [#7133](https://github.com/agentscope-ai/QwenPaw/pull/7133)（WIP，增加可配置超时） |
| [#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) | 助手消息结束时间显示异常（实际 2 分钟显示几秒） | CLOSED | ❌ 无 |
| [#7060](https://github.com/agentscope-ai/QwenPaw/issues/7060) | view_video 内联媒体上限硬编码 2MB，provider 的 max_inline_media_bytes 不生效 | CLOSED | ✅ [#7061](https://github.com/agentscope-ai/QwenPaw/pull/7061)（OpenAI Responses API 视频修复） |

### 🟢 安全与数据完整性

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#7118](https://github.com/agentscope-ai/QwenPaw/issues/7118) | envs.json 单字节损坏即被静默覆盖，**所有环境变量丢失** | CLOSED | ✅ [#7135](https://github.com/agentscope-ai/QwenPaw/pull/7135)（已合并） |
| [#7119](https://github.com/agentscope-ai/QwenPaw/pull/7119) | master key 文件未按文档以 0o600 权限创建 | OPEN | 该 PR 本身即修复 |

---

## 6. 功能请求与路线图信号

今日新增/活跃的功能请求中，以下方向值得关注：

### 高潜力（可能与现有 PR 形成呼应）

| 功能请求 | 对应 PR / 信号 |
|---|---|
| **自动模型路由** [#6436](https://github.com/agentscope-ai/QwenPaw/issues/6436) — 按任务难度/模态动态选择模型 | 暂无直接 PR，但与 #7163（session 级 thinking 模式）方向互补 |
| **always-on Skills（工作区级常驻技能）** [#7182](https://github.com/agentscope-ai/QwenPaw/issues/7182) | ✅ [#7183](https://github.com/agentscope-ai/QwenPaw/pull/7183)（first-time-contributor，已开 PR） |
| **embedding health check 超时可配置** [#7156](https://github.com/agentscope-ai/QwenPaw/issues/7156) | ✅ [#7133](https://github.com/agentscope-ai/QwenPaw/pull/7133)（WIP，已在推进） |

### 新需求信号（暂无对应 PR）

- **Chat 统一工具面板/工作台** [#7013](https://github.com/agentscope-ai/QwenPaw/issues/7013)：文件预览、Diff、Web 服务预览、交互式终端，形成 Agent 开发闭环
- **Agent 切换优化** [#7179](https://github.com/agentscope-ai/QwenPaw/issues/7179)：智能体多时下拉框需上下滑动，希望一次性展示更多 agents
- **钉钉群共享上下文模式** [#7158](https://github.com/agentscope-ai/QwenPaw/issues/7158)：按群聊配置隔离/共享上下文
- **QQ 群定时消息** [#7159](https://github.com/agentscope-ai/QwenPaw/issues/7159)：基于 QQ 机器人主动推送能力做定时任务
- **Qwen_Code 作为第三方 harness** [#7181](https://github.com/agentscope-ai/QwenPaw/issues/7181)：对网络受限用户更友好的代码执行后端

### 路线图信号

结合已合并/开放 PR，项目在以下方向有明确投入：**统一市场（#6880）**、**记忆系统演进（#7133 ReMe 超时、#7080 PowerContext 后端）**、**自托管多用户 Hub（#7112）**、**Creator 视频生成增强（#7167）**。这些表明项目正从单机工具向平台化、记忆增强、多用户方向演进。

---

## 7. 用户反馈摘要

从今日 Issue 评论中提炼的真实用户声音：

- **“任务中断”是最大体验痛点：** 用户 rerbin 多次报告“规划好下一步就停止，需要我说‘继续’”，且**界面无任何可见提示**，只能通过查看模型输出日志发现问题（[#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921)）。这反映出 Agent 自主执行链路对**异常静默**缺乏兜底。
- **网络韧性不足：** 用户 tina0501853 在一天内复现两次“网络恢复后 QwenPaw 无法自动重连”，必须重启进程（[#6932](https://github.com/agentscope-ai/QwenPaw/issues/6932)）。对于常驻服务场景，这是**可用性硬伤**。
- **数据膨胀真实发生：** 用户 zhexiuinori 报告 history.db 膨胀到 7.6GB，根因是工具输出超过 token cap 时被**完整写入历史库**且同一区间重复落库（[#7168](https://github.com/agentscope-ai/QwenPaw/issues/7168)）。长期运行用户会先遇到此问题。
- **中文体验细节被持续提出：** 中文文件名被转成不可读占位符（[#6453](https://github.com/agentscope-ai/QwenPaw/issues/6453)）、“新建聊天”文案被认为不符合任务工具定位（[#6734](https://github.com/agentscope-ai/QwenPaw/issues/6734)）——中文用户群体对本地化细节敏感。
- **VPN/网络受限场景：** 用户 rerbin 反馈“使用 VPN 时整个桌面客户端基本不可用”（[#6974](https://github.com/agentscope-ai/QwenPaw/issues/6974)），这在企业/跨境场景较常见。
- **社区贡献意愿强：** 今日多个 PR 来自 first-time-contributor（[#7061](https://github.com/agentscope-ai/QwenPaw/pull/7061)、[#7080](https://github.com/agentscope-ai/QwenPaw/pull/7080)、[#7183](https://github.com/agentscope-ai/QwenPaw/pull/7183)），且有用户明确标记 “Willing to Contribute”（[#6453](https://github.com/agentscope-ai/QwenPaw/issues/6453)），社区生态健康。

---

## 8. 待处理积压

以下 Issue/PR 值得维护者重点关注：

### 高优先级（影响面大或有数据风险）

| 项目 | 创建时间 | 状态 | 备注 |
|---|---|---|---|
| [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) 任务自行停止 | 08-12 | OPEN，10 评论 | 社区最热，无 Fix PR，建议优先排查 |
| [#6932](https://github.com/agentscope-ai/QwenPaw/issues/6932) 网络恢复不自动重连 | 08-12 | OPEN，3 评论 | 影响所有不稳定网络环境用户，无 Fix PR |
| [#7168](https://github.com/agentscope-ai/QwenPaw/issues/7168) history.db 膨胀至 7.6G | 08-20 | OPEN，1 评论 | 数据存储隐患严重，刚报告，需确认复现与影响范围 |

### 中长期未闭环

| 项目 | 创建时间 | 状态 | 备注 |
|---|---|---|---|
| [#6436](https://github.com/agentscope-ai/QwenPaw/issues/6436) 自动模型路由 | 07-24 | OPEN，4 评论 | 已近一个月，方向与多模型生态契合，建议纳入路线图评估 |
| [#6974](https://github.com/agentscope-ai/QwenPaw/issues/6974) VPN 环境下客户端不可用 | 08-13 | CLOSED（1 评论） | 关闭但未见解决方案说明，国内网络环境属常见痛点 |
| [#7080](https://github.com/agentscope-ai/QwenPaw/pull/7080) PowerContext 记忆后端 PR | 08-17 | OPEN，Under Review | 涉及记忆系统架构，Review 周期可能较长，需关注进展 |
| [#7061](https://github.com/agentscope-ai/QwenPaw/pull/7061) 视频工具结果修复 PR | 08-15 | OPEN，first-time-contributor | 已有明确问题分析与修复，等待 Review |

---

**健康度评估：** 社区活跃度优秀（50 PR / 27 Issue 每日），合入节奏稳定，安全与性能投入可见。主要风险集中在**任务执行可靠性**（#6921、#7102、#6932）与**历史数据膨胀**（#7168）两个维度，建议下一迭代优先分配研发资源。项目整体处于**高迭代速度 + 社区高期待**的良性上升期，但稳定性口碑是当前需要守住的关键战线。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

## ZeroClaw 项目动态日报 — 2026-08-21

> 数据窗口：2026-08-20 至 2026-08-21 | 来源：GitHub Issues/PR/Releases

---

### 1. 今日速览

过去 24 小时 ZeroClaw 仓库活跃度极高：**50 条 Issue 更新（45 条活跃，5 条关闭）**与 **50 条 PR 更新（全部待合并）**，但 **0 个新版本发布**、**0 个 PR 被合并**。社区讨论集中在三大主题：RFC 架构评审（运行时会话所有权 #9487 获 22 条评论）、Rust 反敷衍策略（anti-slop）债务清理追踪 #10118（16 条评论）、以及 WASM 插件/安全加固等长期技术债。PR 侧虽有多条高优先级（p1）安全修复处于就绪状态（如 webhook 审计加固 #9995、插件 egress 策略 #9582/#9584），但**合并通道完全停滞**，可能是当前项目健康度的最大风险信号。整体判断：**设计讨论旺盛、交付节奏受阻**。

---

### 3. 项目进展

> 注：过去 24 小时 **0 个 PR 合并、0 个 PR 关闭**，无功能或修复正式落地。以下为活跃 PR 中值得关注的在途工作，反映项目即将推进的方向。

| PR | 标题 | 状态 | 关键标签 | 说明 |
|---|---|---|---|---|
| #9582 | feat(plugins): enforce a host-owned egress policy on plugin wasi:http | OPEN | p1, risk:high, size:XL, distinguished contributor | 插件 egress 策略 Stage 2：所有插件 HTTP 请求在建立连接前经过宿主策略检查。配套 #9584 提供授权仪式（Stage 3），两者互相依赖不可拆分合并。 |
| #9584 | feat(cli): add the egress grant ceremony to plugin install and list | OPEN | p1, risk:high, size:XL | #9582 的迁移辅助，为 deny-by-default 提供 CLI 授权入口。两条 PR 已等待约 3 周，未见合并动作。 |
| #10142 | feat(zerorelay): secure transport and browser enrollment frontdoor | OPEN | risk:high, size:XL, distinguished contributor | 接替 #9080 的 ZeroRelay 安全传输方案：远程 WSS 平面强制双向 mTLS，per-daemon CA + CSR-only 签发，新增盲转发器。覆盖 CI/docs/daemon/gateway/zerocode 多域。 |
| #10119 | feat(dev): make anti-slop a shared PR gate | OPEN | risk:low, size:XL, type:ci | 将 anti-slop 检查固化为共享 PR 门禁：杜绝生产代码死代码抑制、文档化 unsafe 边界、文档化 panic 不变式、merge-base 诊断增量化。与 #10118 追踪器协同。 |
| #9995 | fix(hooks): harden webhook audit exports | OPEN | p1, risk:high, size:M, needs-author-action | 在应用字节限制前清洗常见凭据、provider token 模式、内联图片标记。堆叠依赖 #10016（按身份关联审计调用）。 |
| #9678 | fix(config): harden Git shell policy arguments | OPEN | p1, risk:high, size:XL | 在命令策略边界统一规范化 shell 词，使可执行文件白名单、Git 风险分类、环境变量赋值检查、路径检查使用同一表示。 |
| #10100 | feat(security): honor allowed_roots tiers in the Landlock sandbox | OPEN | risk:high, size:M | 将 `SecurityPolicy` 的三层 allowed_roots（读写/只读/只写）完整映射到 Landlock 沙箱，修复应用层已支持但沙箱层未生效的问题。 |

**整体判断**：安全加固（webhook 审计、Git shell 策略、插件 egress、Landlock 分层）和 WASM 插件化是当前主线，但多集中在 `Audacity88` 与 `JordanTheJet` 两位贡献者身上，且大量 PR 挂有 `stacked`（堆叠依赖）或 `blocked` 标签，任何一环延迟都会阻塞链条。

---

### 4. 社区热点

| 排名 | Issue/PR | 评论数 | 核心诉求 |
|---|---|---|---|
| 1 | [#9487 RFC: Runtime-owned conversation sessions and transport surface adapters](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | 22 | 将对话会话所有权从通道层上移到运行时，所有迁移后的入口点统一提交 `InboundAction`，引入持久化准入（durable admission）与模糊结果语义。属于深度架构级讨论。 |
| 2 | [#10118 [Tracker]: Rust anti-slop policy debt remediation](https://github.com/zeroclaw-labs/zeroclaw/issues/10118) | 16 | 上游 master 上 anti-slop profile 报告 **307 个候选问题**（覆盖 1,078 个 Rust 文件），其中 202 个为生产环境 panic 相关。社区明显关注代码质量债务的系统性清理。 |
| 3 | [#6850 RFC: Decouple memory lifecycle policy from storage backends](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | 14 | 要求明确区分持久化存储（Memory trait）与生命周期策略（合并/治理），避免每个网关/通道/后端重复实现。讨论已持续约 3 个月仍未定案。 |
| 4 | [#8780 RFC: Realtime speech-to-speech channel for Gemini Live](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) | 14 | 提议新增实时语音到语音通道，以 Gemini Live 为首个 provider，采用 broker 契约设计。反映用户对实时语音交互的强烈需求。 |
| 5 | [#8692 [Tracker]: Maintainer decision queue for RFCs and design issues](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | 13 | 社区自发建立维护者决策队列，跟踪所有待处理 RFC/设计问题的接受/拒绝/延期状态。**该追踪器的存在本身就暗示着 RFC 评审积压问题。** |

**热点分析**：当前社区讨论的深层诉求是 **ZeroClaw 正从单体架构走向插件化/服务化/实时化**——会话所有权上移（#9487）、存储与策略解耦（#6850）、实时语音通道（#8780）均指向这一方向。同时 anti-slop 追踪器（#10118）显示贡献者对代码质量有较高自我要求，但对维护者的评审响应速度存在隐性不满（见 #8692）。

---

### 5. Bug 与稳定性

过去 24 小时共报告 **8 个新 Bug**，其中 **3 个已关闭**（含 1 个重复、1 个已修复、1 个确认修复中）。按严重程度排列如下：

| 严重度 | Issue | 问题 | 状态 | 对应 PR |
|---|---|---|---|---|
| **S1 工作流阻塞** | [#9016 OpenAI tool turns fail when Chat Completions rejects reasoning effort](https://github.com/zeroclaw-labs/zeroclaw/issues/9016) | 带非 `none` reasoning effort 的函数调用在 `/v1/chat/completions` 被拒，整个 turn 无输出。影响所有使用 `gpt-5.6-sol` 类模型的用户。 | ✅ 已关闭（修复随 #10194 验证） | — |
| **S2 降级行为** | [#10068 Interactive agent session caps context at 32k](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) | 交互式会话硬编码 32k 上下文上限，完全忽略 `max_context_tokens = 131072` 配置。当前显示 `ctx: 15,538 / 32,000` 并触发压缩。 | 🔧 in-progress | 无 |
| **S2 降级行为** | [#10106 Exact proxy selectors reject supported transcription services](https://github.com/zeroclaw-labs/zeroclaw/issues/10106) | 严格代理选择器无法匹配 `transcription.groq`、`transcription.openai` 等 6 种转写服务键，导致代理感知的客户端创建失败。 | 🔧 in-progress / accepted | 无 |
| **S2 降级行为** | [#10194 PR reviewer publishes in-flight results after the PR merges](https://github.com/zeroclaw-labs/zeroclaw/issues/10194) | 部署的 AI reviewer 在 PR 合并后仍发布审查结果（如 #9104 合并后仍收到评论）。CI 工具链时序缺陷，已确认。 | ✅ 已关闭 | 声称已修复 |
| **S2 降级行为** | [#10074 SECURITY.md documents a CI job that was removed in April](https://github.com/zeroclaw-labs/zeroclaw/issues/10074) | SECURITY.md 引用的 `docker` CI 任务 4 月已删除，容器安全检查实际靠约定执行，文档与事实脱节。 | 🔧 in-progress | 无 |
| **S3 轻微** | [#10103 ZeroCode Health status values misalign in French and Spanish](https://github.com/zeroclaw-labs/zeroclaw/issues/10103) | 健康面板的 Uptime/PID 标签固定宽度 11，法语（Disponibilité）和西语（Tiempo activo）长 13 个单元格，导致错位。 | 🔧 in-progress | 无 |
| **S3 轻微** | [#10111 Windows: Entry Point Not Found — TaskDialogIndirect](https://github.com/zeroclaw-labs/zeroclaw/issues/10111) | Windows 桌面版因缺少 Comctl32 v6 激活上下文启动失败。 | ✅ 已关闭（重复） | [#10080 fix(desktop): select Common Controls v6 on Windows](https://github.com/zeroclaw-labs/zeroclaw/pull/10080) 已在待合并队列 |

**稳定性评价**：S1 级问题已清零，剩余为 S2 级配置/兼容性缺陷。核心风险集中在**上下文限制被硬编码**（#10068）和**代理选择器配置不匹配**（#10106），两个问题均已有 `in-progress` 或 `accepted` 标记。安全相关文档过期（#10074）需尽快修正以免误导用户。

---

### 6. 功能请求与路线图信号

**已获 accepted/正式纳入路线图的特性（大概率进入下一版本）：**

| Issue | 特性 | 信号强度 | 说明 |
|---|---|---|---|
| [#10168 Enable stall watchdog by default](https://github.com/zeroclaw-labs/zeroclaw/issues/10168) | 🟢 accepted | `stall_timeout_secs` 默认值从 0（禁用）改为保守非零值，卡住的 turn 自动中止重试。直击体验痛点。 |
| [#10166 Default stream_mode to partial](https://github.com/zeroclaw-labs/zeroclaw/issues/10166) | 🟢 accepted | 默认 `stream_mode` 从 `off` 改为 `partial`，通道回复改为流式输出，避免用户等待整个 turn 完成。 |
| [#10086 Make ZeroCode Logs text selectable and copyable](https://github.com/zeroclaw-labs/zeroclaw/issues/10086) | 🟢 accepted | 日志面板支持鼠标选择/复制，当前仅支持隐藏的 `y` 键复制路径。 |
| [#10087 Run memory-postgres tests in required CI](https://github.com/zeroclaw-labs/zeroclaw/issues/10087) | 🟢 accepted | 将 memory-postgres 测试套件纳入必需 CI，含临时 PostgreSQL 服务的验收覆盖。 |
| [#10162 plugin install persists package before config-entry seeding and cannot retry](https://github.com/zeroclaw-labs/zeroclaw/issues/10162) | 🟡 accepted+follow-up | 插件安装需将「持久化包」与「种子配置」合并为可重试的原子操作。 |

**处于 RFC 阶段但热度较高的提案（候选路线图）：**

| Issue | 特性 | 信号强度 | 说明 |
|---|---|---|---|
| [#10069 RFC: Agent Portability](https://github.com/zeroclaw-labs/zeroclaw/issues/10069) | 🟡 RFC+in-progress | 3 阶段实现 agent 导出/共享：原生导出包 → 独立包格式 → 跨部署迁移。 |
| [#10076 RFC: Comprehensive WASM plugin architecture](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) | 🟡 accepted | 将 hook/backend/capability 全面插件化，实现"everything is a plugin"愿景。 |
| [#10050 RFC: Verbatim channel send over the gateway](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) | 🟡 needs-maintainer-review | 在 47 个已有 API 路径之外新增「原样消息发送」路由。 |
| [#10025 RFC: zeroclaw swarm — ephemeral agent swarms with TUI](https://github.com/zeroclaw-labs/zeroclaw/issues/10025) | 🟡 needs-author-action | 临时 agent 集群 + crush 风格 TUI，复用已有 `GoalTaskRecord` 控制面。 |

**路线图判断**：短期（下一版本）大概率包含**流式响应默认化**（#10166）、**卡死看门狗默认开启**（#10168）等体验优化；中期核心方向是 **WASM 插件架构深化**（#10076 + #9582/#9584 egress 策略）与 **Agent 可移植性**（#10069）；长期则有**实时语音通道**（#8780）和**临时 agent 集群**（#10025）两个创新性功能储备。

---

### 7. 用户反馈摘要

| 来源 | 用户声音 | 类型 |
|---|---|---|
| [#10111 评论](https://github.com/zeroclaw-labs/zeroclaw/issues/10111) | 安装后直接弹出 `Entry Point Not Found — TaskDialogIndirect`，**桌面版"无法启动"**。反馈附图显示为 Windows 常见 Comctl32 版本问题。 | 😠 安装受阻 |
| [#10068 评论](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) | 配置了 `max_context_tokens = 131072`，但会话实际显示 32k 上限并提前压缩。**用户显式配置被静默忽略**，削弱对长对话场景的信任。 | 😠 配置无效 |
| [#10106 评论](https://github.com/zeroclaw-labs/zeroclaw/issues/10106) | 严格代理选择器拒绝全部 6 个转写服务键，**配置代理后转写功能直接不可用**，且报错不直观。 | 😠 兼容性断裂 |
| [#9016 评论](https://github.com/zeroclaw-labs/zeroclaw/issues/9016) | OpenAI 兼容模型 `gpt-5.6-sol` 在发送函数工具 + reasoning effort 时直接失败，**"workflow blocked"**，用户需手动降级配置绕行。 | 😠 工作流中断 |
| [#10194 评论](https://github.com/zeroclaw-labs/zeroclaw/issues/10194) | PR #9104 合并 3 分钟后仍收到 AI reviewer 的审查结果，**CI 工具对已合并 PR 继续输出噪音**，干扰通知流。 | 😐 工具噪音 |
| [#10118 评论](https://github.com/zeroclaw-labs/zeroclaw/issues/10118) | 用户（贡献者视角）对 307 个 anti-slop 候选问题表示**对代码质量的系统性担忧**，特别是 202 个生产 panic 路径需要逐一审计。 | 😐 技术债焦虑 |

**整体用户情绪**：多数用户对 ZeroClaw 的架构方向（插件化、实时化）持积极态度，但**配置被忽略、兼容性断裂、Windows 桌面端稳定性**是目前最集中的吐槽点。代码贡献者群体则在主动推动 quality gate（#10119）与债务清理（#10118），显示出社区自我修复意愿。

---

### 8. 待处理积压

以下为长期未解决、可能出现「被遗忘」或「评审停滞」风险的重要 Issue/PR：

| 项目 | 创建时间 | 持续时间 | 当前状态 | 风险提示 |
|---|---|---|---|---|
| [#6850 RFC: Decouple memory lifecycle policy from storage backends](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | 2026-05-22 | **91 天** | needs-maintainer-review | 核心架构 RFC，14 条评论/3 次修订，至今无维护者明确结论。是否与 #9487 会话所有权 RFC 合并决策？ |
| [#6996 RFC: Granular sandbox policy — filesystem and network restrictions](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | 2026-05-28 | **85 天** | needs-author-action | 安全沙箱策略的边界长期未定，与 #10100（Landlock 分层）直接相关。 |
| [#8132 RFC: Replace React/Vite web UI build with Rust→Wasm framework](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) | 2026-06-22 | **60 天** | needs-author-action | 前端技术栈大方向决策悬而未决，影响 web 端后续投入方向。已有 1 👍。 |
| [#8398 RFC: Plugin permission, config, and secrets model](https://github.com/zeroclaw-labs/zeroclaw/issues/8398) | 2026-06-27 | **55 天** | needs-author-action | 插件权限模型已迭代两版仍有关键未决问题，是 #9582/#9584 egress 策略的上层依赖。 |
| [#7910 Add Windows runtime test coverage for self-update](https://github.com/zeroclaw-labs/zeroclaw/issues/7910) | 2026-06-18 | **64 天** | status:accepted, no-stale | 已接受的改进项，但无 PR 认领。Windows 自更新可靠性是桌面端核心体验。 |
| **PR #9582 + #9584**（插件 egress 策略完整方案） | 2026-07-31 | **21 天** | p1, risk:high | 安全关键 PR，标注 "must not merge without" 互依关系，但保持 0 评论、0 审查推进。 |

**特别提醒**：#8692（维护者决策队列追踪器）本身已存在 48 天，其存在意味着 RFC 评审积压已成为社区公认问题。建议维护者优先处置 #6850、#6996、#8398 三个「卡住」的安全/架构类 RFC，避免后续 PR 因缺少决策基础而继续堆叠阻塞。

---

*本日报由 AI 助手自动生成，数据抓取范围为 2026-08-20 至 2026-08-21 的 GitHub 公开数据。所有链接均指向 zeroclaw-labs/zeroclaw 仓库。*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*