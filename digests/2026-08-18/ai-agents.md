# OpenClaw 生态日报 2026-08-18

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-08-17 23:11 UTC

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

# OpenClaw 项目动态日报 — 2026-08-18

## 1. 今日速览

过去 24 小时 OpenClaw 仓库保持**极高活跃度**：Issue 与 PR 更新均达到 500 条上限，其中 Issue 新开/活跃 488 条、PR 待合并 404 条。96 条 PR 被合并或关闭，但**无新版本发布**。值得警惕的是，大量高优先级问题（P1/P0）被 ClawSweeper 标记为 `no-new-fix-pr` 和 `needs-maintainer-review`，说明社区提交密集但**维护者响应与合入节奏明显滞后**，合并积压问题正在加剧。安全与稳定性类 PR 是今日推进的重点方向。

---

## 2. 版本发布

过去 24 小时**无新版本发布**（最新 Releases 为空）。上一个已知版本线停留在 2026.6.x，而仓库中仍有多个标记为"2026.5.x 回归"的未解决问题，版本迭代节奏有待观察。

---

## 3. 项目进展

今日有 96 条 PR 被合并或关闭，虽未发布新版本，但以下合入/关闭的 PR 值得关注：

- **安全策略确认机制（双端落地）**：[PR #116489](https://github.com/openclaw/openclaw/pull/116489)（CLI）与 [PR #120900](https://github.com/openclaw/openclaw/pull/120900)（Control UI）均已关闭，为 `installPolicy` 警告引入了显式的用户确认流程，增强了插件/技能安装时的安全边界。
- **测试基建稳定性**：[PR #125441](https://github.com/openclaw/openclaw/pull/125441) 修复了 managed-child-process 测试在 CI 高负载下的竞态失败；[PR #125440](https://github.com/openclaw/openclaw/pull/125440) 消除了浏览器测试对共享 `/tmp` 固定路径的依赖；[PR #125439](https://github.com/openclaw/openclaw/pull/125439) 修复了 Control UI e2e 重复请求等待的 flake。测试基建的加固有助于缓解 CI 阻塞。
- **工具链修复**：[PR #123975](https://github.com/openclaw/openclaw/pull/123975) 修复了 tsgo 编译器卡死时 typecheck 无限挂起的问题，改善了本地开发与 CI 体验。

**项目整体向前迈进的评估**：安全确认机制属于实质性功能推进；更多 PR（404 条）仍在等待审查与合入，包括多 Teams Bot 支持、Codex 线程绑定修复等大型 PR，**维护者的合入吞吐量是当前瓶颈**。

---

## 4. 社区热点

- **[#77598 Track live dev agent behavior and trajectory](https://github.com/openclaw/openclaw/issues/77598)**（23 评论，P2）
  这是 Pash 对自身 dev agent 的 24 小时观察笔记追踪 issue，属于团队 dogfooding 的透明化实践。社区持续关注 AI 代理在真实开发任务中的行为轨迹，反映了对自主代理可观测性的强烈兴趣。

- **[#91009 Codex PreToolUse native hook relay spawns CPU-bound openclaw-hooks processes](https://github.com/openclaw/openclaw/issues/91009)**（20 评论，P1，platinum 评级）
  Codex 集成中 hook relay 进程消耗 100%+ CPU 并卡死 gateway RPC。这是当前**进程生命周期管理类问题的一个缩影**，与 #97616（zombie 进程累积）、#53540（工具调用参数过大导致连接断开）相互印证——**子进程/资源回收机制是社区近期集中反馈的薄弱环节**。

- **[#68596 Configurable streaming watchdog timeout threshold](https://github.com/openclaw/openclaw/issues/68596)**（15 评论，8 👍，P2）
  用户在使用长思维链模型（如 DeepSeek-R1、kimi-k2.5）时频繁触发 30s 流式看门狗误报。8 个 👍 表明这是一个被广泛需要的配置能力，而不只是个别场景问题。

- **[#62505 Coding Agent never completes anything](https://github.com/openclaw/openclaw/issues/62505)**（15 评论，P1，回归）
  "一直正常工作的编码代理现在什么都不做了"——回归类问题对依赖 OpenClaw 自动化日常工作的用户造成直接影响，引发了大量共鸣讨论。

---

## 5. Bug 与稳定性

按严重程度排列，重点关注以下未解决问题：

**P0（高严重度）**

- [#70903 Persistent file-based provider cooldown blocks user for hours](https://github.com/openclaw/openclaw/issues/70903)——402 计费错误后 `disabledUntil` 持久化跨重启，用户充值后仍被长时间封禁。**但该 issue 已被标记为 `stale`，极需维护者恢复关注**。尚无 fix PR。

**P1（消息丢失/会话状态类，影响核心体验）**

- [#96834 WhatsApp 1:1 图片消息卡住主通道 ~3 分钟](https://github.com/openclaw/openclaw/issues/96834)（platinum 评级）——多模态输入导致 run 卡死，尚无 fix PR。
- [#91009 Codex hook CPU 占用与 gateway RPC 卡死](https://github.com/openclaw/openclaw/issues/91009)（platinum）——同上。
- [#62505 编码代理不完成任何任务](https://github.com/openclaw/openclaw/issues/62505)（回归，2026.4.2 之前正常）——长时间未修复。
- [#38327 "Cannot convert undefined or null to object"](https://github.com/openclaw/openclaw/issues/38327)——google-vertex/gemini-3.1-pro-preview 在 2026.3.2 后崩溃，至今未解决。
- [#67777 子代理完成交付在超时/drain/orphan 清理时丢失](https://github.com/openclaw/openclaw/issues/67777)——影响消息投递可靠性。
- [#86215 Codex OAuth 刷新失败导致代理卡死数小时](https://github.com/openclaw/openclaw/issues/86215)——缺少告警与 profile 轮换机制。
- [#53408 write/exec 工具参数在长对话后静默丢失](https://github.com/openclaw/openclaw/issues/53408)——空参数对象被提交调用。

**P1/P2 回归类**

- [#51429 硬编码工作路径被合并发布](https://github.com/openclaw/openclaw/issues/51429)——用户报告代码中混入了 `/Users/wangtao` 的硬编码路径，这属于**严重的代码审查事故**，引发社区对 PR 审查质量的质疑。
- [#77930 Discord 频道在 2026.5.4 无法加载](https://github.com/openclaw/openclaw/issues/77930)（回归，beta.1 正常）。
- [#97616 子进程/僵尸进程泄漏导致运行时性能劣化](https://github.com/openclaw/openclaw/issues/97616)。

**已有 fix PR 但尚未合入的**：

- [#125357 fix(subagents): keep the failure cause on pending-error timeout announces](https://github.com/openclaw/openclaw/pull/125357)——修复子代理失败原因在超时快照中被丢弃的问题（对应 #125356）。
- [#125163 fix: archived channel sessions resume on new messages](https://github.com/openclaw/openclaw/pull/125163)——修复归档会话不响应新消息。
- [#120443 fix: read codex thread binding before deferring automatic compaction](https://github.com/openclaw/openclaw/pull/120443)——修复 Codex 自动压缩后话轮丢失问题（对应 #119977/#119971）。

---

## 6. 功能请求与路线图信号

社区今日提出的功能需求中，以下方向有较高呼声或明确 PR 支撑：

- **多 Teams 机器人支持**：[#71058](https://github.com/openclaw/openclaw/issues/71058)（P2）——已有大型 PR [#112811](https://github.com/openclaw/openclaw/pull/112811) 实现多 bot 账号配置，目前仍开放等待合入。**预计可进入下一版本**。
- **LaTeX/MathJax 渲染**：[#42840](https://github.com/openclaw/openclaw/issues/42840)（P3，10 👍）——教育/科研用户在 Control UI 中展示公式的刚需。
- **Per-agent dreaming 配置**：[#67413](https://github.com/openclaw/openclaw/issues/67413)（P2，5 👍）——避免所有 workspace 同时 OOM，属于资源治理类需求，与稳定运行强相关。
- **多插槽记忆架构（Multi-Slot Memory）**：[#60572](https://github.com/openclaw/openclaw/issues/60572)（4 👍）——拆分单一 memory slot，允许不同记忆层使用不同 provider。
- **回退模型链**：[#56781](https://github.com/openclaw/openclaw/issues/56781)——compaction/LCM summary 模型不可用时静默失败的问题。
- **YAML 配置文件支持**：[#45758](https://github.com/openclaw/openclaw/issues/45758)（P3，2 👍）——DevOps 用户偏好。
- **WhatsApp 断线重连后消息回填**：[#50093](https://github.com/openclaw/openclaw/issues/50093)（P1，platinum）——直接关系消息可靠性，虽标记为 Feature Request 但实际是数据丢失修复。

这些需求大多处于 `needs-maintainer-review` / `needs-product-decision` 状态，**决定权在维护者一方**。

---

## 7. 用户反馈摘要

- **对回归问题的不满情绪上升**：#62505 中用户表示"这个代理几周来一直稳定产出，现在什么都不做了，只发模糊的状态更新然后道歉"；#51429 更直言"有人把工作路径硬编码进代码而且居然被合并发布了"——社区对 2026.5.x 后的质量把控表达了明显失望。
- **长思维链模型支持不足**：#68596 中多位用户反馈，OpenClaw 面向 DeepSeek-R1 / kimi-k2.5 等模型的 30s 看门狗阈值过于激进，频繁误报中断流式体验。
- **token 成本敏感**：#67419 用户量化了 bootstrap 文件每轮重注入导致 20-30% token 浪费，说明用户对上下文管理精细度要求越来越高。
- **正面反馈依然存在**：#73537 用户主动感谢团队："OpenClaw 已经成为我们家庭和业务日常工作流的一部分"，同时建议增加 production-readiness 稳定性标签——**用户希望有更明确的版本稳定性预期管理**。
- **多语言用户需求浮现**：#79458（i18n 斜杠命令描述）与 #68105（RTL 双向文本隔离）分别代表中文与希伯来语/阿拉伯语用户的诉求，国际化打磨正在成为社区关注点。

---

## 8. 待处理积压

以下问题长期未得到解决或合入，建议维护者优先关注：

- **[#70903 P0 但被标记为 stale](https://github.com/openclaw/openclaw/issues/70903)**：用户被 402 冷却文件封禁数小时，至今无法通过配置绕过。P0 级别 issue 不应进入 stale 状态。
- **[#38327 P1 已存活 5 个多月](https://github.com/openclaw/openclaw/issues/38327)**：Google Vertex/Gemini 的崩溃回归从 3 月延续至今，涉及 auth-provider 与主流模型兼容性。
- **[#62505 P1 已存活 4 个多月](https://github.com/openclaw/openclaw/issues/62505)**：编码代理核心功能回归至今无 fix PR。
- **[#80396 PR 已开放 3 个多月](https://github.com/openclaw/openclaw/pull/80396)**：修复 MEDIA: token 在代码块中被跳过时无提示的问题。属于小而明确的修复，不应长期悬置。
- **整体合入积压**：404 条待合并 PR 是当前项目最大的流程风险，远超维护者正常处理能力。大量 PR 被标记为 `needs proof` 或 `waiting on author`，但最终都需要维护者拍板。

---

**总体健康度评估**：OpenClaw 社区贡献意愿与使用规模持续增长（Issue/PR 双双触达 500 条上限），但**维护者响应速度与合入吞吐量成为项目当前最短木板**。安全与测试基础设施在稳步改善，但核心链路的可靠性问题（消息丢失、会话卡死、回归）积压严重，需尽快提升审查与发布节奏，避免社区信任流失。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告（2026-08-18）

## 1. 生态全景

当前个人 AI 助手与自主智能体开源生态整体处于**高活跃、快迭代、治理分化**的阶段。头部项目（OpenClaw）社区规模触顶，Issue/PR 双双达到平台上限，但维护者合入吞吐量成为核心瓶颈；中坚力量（Hermes Agent、ZeroClaw、IronClaw、CoPaw 等）在安全加固、性能优化、渠道适配和架构演进上密集产出；与此同时，多个项目共同暴露出**子进程生命周期管理、多会话隔离、成本控制、可观测性**等共性问题，说明生态正从“功能堆砌”转向“生产可用的稳定性与治理”阶段。整体来看，社区贡献意愿旺盛，但大量 PR 积压和回归问题在考验各项目维护团队的响应与发布节奏。

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | Release | 健康度评估 |
|---|---|---|---|---|
| OpenClaw | 488（触上限） | 500（待合并404，合并/关闭96） | 无 | ★★☆☆☆ 活跃度极高但维护瓶颈严重，P1/P0 积压 |
| Hermes Agent | 50（新开/活跃38，关闭12） | 50（待合并42，合并/关闭8） | v0.20.3 | ★★★★☆ 发布补丁版本，多 Profile 与安全议题集中 |
| ZeroClaw | 50（新开/活跃43，关闭7） | 50（待合并34，合并/关闭16） | 无 | ★★★★☆ 安全加固与 RFC 驱动，CI 覆盖仍待完善 |
| IronClaw | 28（活跃22，关闭6） | 44（待合并28，合并/关闭16） | 无 | ★★★★☆ DB 写入优化落地快，libSQL 连接饥饿需优先修复 |
| CoPaw | 14（新开/活跃8，关闭6） | 35（待合并13，合并/关闭22） | 无 | ★★★★☆ 合入效率高，2.1.0 回归问题正在清理 |
| LobsterAI | 7（活跃7，关闭0） | 21（合并/关闭17，待合并4） | 无 | ★★★☆☆ 代码收敛积极，但社区 issue 长期 stale |
| NanoClaw | 4（新开/活跃3，关闭1） | 39（合并/关闭8，待合并12+） | 无 | ★★★☆☆ 架构扩展点建设密集，评审积压需关注 |
| NanoBot | 3（新开/活跃2） | 15（合并/关闭5，待合并10） | 无 | ★★★★☆ WebUI 功能群活跃，成本控制诉求上升 |
| Moltis | 2（关闭2） | 9（合并/关闭6，待合并3） | 无 | ★★★★☆ 外部代理与 RPC 配置推进，心跳修复待合入 |
| PicoClaw | 4（新开2） | 4（合并/关闭3，待合并1） | 无 | ★★★★☆ 稳定性修复及时，新增 bug 响应较快 |
| NullClaw | 0 | 1（待合并） | 无 | ★★☆☆☆ 低活跃，依赖升级 PR 积压 64 天 |
| ZeptoClaw | 0 | 0 | 无 | ★☆☆☆☆ 无活动，项目停滞 |

## 3. OpenClaw 在生态中的定位

OpenClaw 是当前生态中**社区规模最大、功能覆盖面最全**的标杆项目，Issue/PR 双双触达 500 上限，说明其使用者与贡献者基数远超同类。相比 Hermes Agent、ZeroClaw 等，OpenClaw 在双端（CLI + Control UI）安全确认机制、插件/技能安装策略、测试基建加固等方面有明显投入，工具链支持也较完整。但其技术路线的问题同样突出：**大量 P1/P0 问题被标记为 `needs-maintainer-review`，404 条 PR 待合并，核心链路回归（如“编码代理不完成任何任务”）长期无 fix**，维护者吞吐量已难以匹配社区提交密度。相比之下，Hermes Agent 能定期发布补丁版本、ZeroClaw 能快速合入安全修复，OpenClaw 的发布节奏与合入效率明显滞后。因此，OpenClaw 在生态中仍扮演“功能与需求风向标”角色，但其工程治理模式正被更敏捷的中型项目挑战。

## 4. 共同关注的技术方向

**多会话/Profile 隔离与状态管理**  
涉及项目：OpenClaw（多 Teams Bot 支持）、Hermes Agent（多 Profile 串号、会话 ID 交叉）、CoPaw（Console 停止请求取消飞书会话）、NanoClaw（adapter-declared session-mode）、ZeroClaw（runtime-owned conversation sessions）。  
诉求：在多渠道、多账号、多 UI 并发的场景下，确保会话上下文互相隔离、操作不串扰，并提供可配置的会话所有权模型。

**子进程/资源生命周期管理**  
涉及项目：OpenClaw（Codex hook CPU 占用、zombie 进程累积）、Hermes Agent（SessionDB fd 泄漏）、IronClaw（libSQL 写连接饥饿）、NanoBot（gateway 进程身份标识）、PicoClaw（重复工具失败静默循环）。  
诉求：进程创建、回收、超时和资源上限需要系统性治理，避免后台任务拖垮主进程或产生不可恢复的级联故障。

**成本控制与预算安全**  
涉及项目：NanoBot（Hybrid Spend Firewall、complete_goal 无限循环耗 token）、OpenClaw（bootstrap 每轮重注入浪费 20-30% token、流式 watchdog 误报）、ZeroClaw（action budget 原子化、双计费修复）、IronClaw（DB 写入压力优化）。  
诉求：开发者普遍希望框架内置预算配额、调用上限、费用防火墙，而不是依赖上层应用自行防范。

**可观测性与调试诊断**  
涉及项目：OpenClaw（dev agent trajectory 追踪）、NanoClaw（ClawMetry 本地仪表盘）、IronClaw（clawbench 失败分类）、CoPaw（定时任务运行细节展示）、NanoBot（日志桥接与存活检查）。  
诉求：实时查看 Agent 行为轨迹、任务执行阶段、工具调用结果和资源画像，降低“黑盒”调试成本。

**安全默认值与密钥/凭据治理**  
涉及项目：ZeroClaw（Gemini API Key 移出 URL、附件下载边界、WhatsApp token 孤儿）、OpenClaw（installPolicy 确认流程）、Hermes Agent（child-process credential-inheritance）、LobsterAI（日志脱敏）、CoPaw（媒体 URL 防盗链本地化）。  
诉求：安全能力应默认开启，敏感信息不得出现在日志、URL 或子进程环境中。

## 5. 差异化定位分析

- **OpenClaw**：面向个人与团队的全功能 AI 助手，插件生态丰富，CLI/Web 双端一体。技术路线以 Node/TypeScript 为主，追求功能广度，但目前受限于合入积压与回归问题。
- **Hermes Agent**：主打桌面端 + Bot Mode 的跨网关机器人，支持多 Profile 隔离。重视 bot-to-bot 通信（`hermes peer`）与 webhook 修复，是“桌面交互 + 网关代理”场景的代表。
- **ZeroClaw**：以安全与架构 RFC 驱动，强调安全默认值、动作预算原子化和 OpenAI Chat Completions 兼容。面向需要企业级安全边界的自部署用户。
- **IronClaw**：追求性能与规模化，DB 写入优化、automations、通知收件箱等企业级功能密集落地。适合高吞吐、长时间运行的部署场景。
- **CoPaw**：重点服务中文多渠道用户（钉钉、微信、飞书、QQ），Console 体验打磨细致，2.1.0 后的回归清理迅速。是中文社区最活跃的项目之一。
- **LobsterAI**：背靠网易有道，面向中文用户的多 Agent 工作区桌面应用（Electron），同时集成 OpenClaw 运行时，正在向新引擎（dsh）扩展。
- **NanoBot**：轻量级 Python 实现，以 Telegram 为核心渠道，WebUI 多会话方向明确，适合资源敏感型个人部署。
- **Moltis**：Rust 技术栈，强调外部 ACP 代理接入、Shadow DOM 自动化、WebUI RPC 可配置性，属于高扩展性的模块化实现。
- **PicoClaw**：面向嵌入式/轻量设备（Sipeed），渠道覆盖 IRC/Slack/微信等，追求在受限环境下的稳定性。
- **NanoClaw**：以扩展点/接缝为核心设计，通过 hook 和 adapter 机制让第三方模块即插即用，架构演进意图明显，适合二次开发。
- **NullClaw / ZeptoClaw**：活跃度极低或停滞，暂无可观察的差异化输出。

## 6. 社区热度与成熟度

**快速迭代期**  
OpenClaw、Hermes Agent、ZeroClaw、IronClaw、CoPaw、NanoClaw 均保持高 PR 流量。其中 OpenClaw 因基数过大而合入效率下降；Hermes Agent 与 ZeroClaw 在安全/架构层面持续输出；IronClaw 和 CoPaw 是“合并效率高 + 新功能密集”的典型代表。

**质量巩固期**  
NanoBot、Moltis、PicoClaw 处于稳定迭代状态，PR 数量适中、修复针对性强，项目健康度较好。它们更适合作为“高可靠、低维护负担”的参考实现。

**停滞/观察期**  
NullClaw 和 ZeptoClaw 无实质代码活动，不建议作为活跃依赖引入，但可关注其历史设计是否提供独特思路。

**社区分层结论**：生态头部依然是 OpenClaw，但中型项目正在以更快的响应速度、更聚焦的定位抢占生产部署场景。对于技术决策者，选择项目时不仅要看社区热度，还要评估维护者合入节奏、issue 响应时间和安全加固力度。

## 7. 值得关注的趋势信号

- **“可观测性”正在成为 Agent 框架的标配能力**：从 OpenClaw 的 dev agent trajectory 到 NanoClaw 的 ClawMetry，再到 IronClaw 的 clawbench，社区已不满足于看日志，而是要求看到 Agent 的完整决策轨迹和资源消耗。开发者应尽早内置 trace、度量与回放机制。
- **成本护栏是规模化落地的必要条件**：多起“无限循环烧 token”“参数序列化回归导致持续失败”事件，直接催生了“支出防火墙”需求。未来智能体框架会将预算配额、调用上限、异常熔断作为一等公民能力。
- **进程生命周期管理成为稳定性短板**：zombie 进程、fd 泄漏、连接饥饿、hook 子进程 CPU 爆炸等跨项目高频出现，表明 Agent 框架在长时间运行时对子进程的治理能力尚未跟上功能膨胀。建议在架构中引入 supervisor 模式与资源回收契约。
- **多 Profile/多会话隔离是天然后发优势**：早期单用户单会话架构在多渠道、多账号场景下出现大量串扰。新项目若能在设计初期支持会话所有权、按 profile 隔离状态，将显著降低后期重构成本。
- **安全默认值从“建议”变成“要求”**：Gemini API Key 进 URL、日志明文 Token、文件下载无大小限制等漏洞被快速修复，说明社区安全敏感度显著提升。开发者应在发布功能时强制安全评审。
- **维护者吞吐量是社区健康度的最大风险**：OpenClaw 404 条待合并 PR 并非孤例，多个项目都出现小型修复 PR 长期滞留。对决策者而言，评估项目时需关注 PR 合并中位数时间，而不只是 star 数或 issue 数。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 — 2026-08-18

## 1. 今日速览

NanoBot 今日保持较高开发活跃度：过去 24 小时共产生 15 条 PR 更新（5 条已合并/关闭），3 条 Issue 更新（2 条新开/活跃）。修复重点聚焦在 Telegram 轮询稳定性（#5156 已合并）、CLI 终端 UI（#5406 已合并）和 goal 循环控制（#5410 已合并）。同时，10 条待合并 PR 中有 5 条为 WebUI 增强（会话提及、侧边对话、后续建议），预示 WebUI 将成为近版本迭代重点。社区侧，用户对成本控制（#5409）与 gateway 参数序列化回归（#4864）表达较高关注。

---

## 2. 版本发布

过去 24 小时无新版本发布。

---

## 3. 项目进展

今日 5 条 PR 被合并/关闭，主要推进了三方面工作：

**稳定性修复**
- **#5156** `fix(telegram): recover from silently stalled polling` — 修复 Telegram 轮询永久静默停止问题（Fixes #5171），重建连接池后恢复消息接收，属于生产环境关键修复。
- **#5410** `fix(goal): stop repeating clarification replies` — 修复持续目标（sustained goal）在普通模型响应后错误重复注入续接逻辑，同时保留工具调用边界处的正确行为。
- **#5416** `fix(gateway): stabilize process identities` — 使用原生 `proc_pidinfo` 替代 macOS 地区依赖的 `ps lstart`，统一跨平台进程身份契约，减少 gateway 租约误判。

**新功能落地**
- **#5406** `feat(cli): add native TypeScript terminal UI` — 为 CLI 提供原生 TypeScript 终端界面（替代此前误合并的 #4329），携带完整提交历史及跨终端修复，是 CLI 交互体验的重要升级。

**可观测性改进**
- **#5301** `fix(telegram): bridge stdlib logging and detect stalled polling` — 将 Python 标准库日志桥接至 loguru，并添加仅记录的轻量存活检查，作为 #5156 的低风险前置拆分。

综合来看，今日项目在 Telegram 稳定性、CLI 体验、goal 循环控制三个方向均有关键合并，项目整体健康度良好。

| PR | 类型 | 状态 | 影响 |
|---|---|---|---|
| #5156 | 修复 | 已合并 | 解决 Telegram 静默停摆 |
| #5410 | 修复 | 已合并 | 消除重复澄清回复，节省 token |
| #5416 | 修复 | 已合并 | 跨平台 gateway 进程身份统一 |
| #5406 | 功能 | 已合并 | 原生 TypeScript TUI |
| #5301 | 可观测性 | 已合并 | 日志桥接与存活检查 |

---

## 4. 社区热点

**#4864 — `[bug] Endless loop for <tool_call> <function=complete_goal>`** — 评论 7 条，👍 1
- [GitHub Issue #4864](https://github.com/HKUDS/nanobot/issues/4864)
- 该 Issue 虽创建于 7 月 9 日，但今天仍有活跃讨论（最后更新 2026-08-17），是当前受关注度最高的问题。核心争议指向 gateway 在最近更新中改变了工具参数序列化方式，导致 `recap` 参数被解析为裸字符串而非 JSON 对象，从而触发 `complete_goal` 循环报错。用户期望：工具参数序列化行为应兼容旧格式或提供显式迁移路径。

**#5409 — `[OPEN] Prevent Margin Leaks & Surprise LLM Bills: Add a Hybrid Spend Firewall`** — 新建 1 天
- [GitHub Issue #5409](https://github.com/HKUDS/nanobot/issues/5409)
- 虽无评论，但从选题和行文看直指商业化进程中的成本失控痛点，要求为无限循环场景增设"支出防火墙"。社区对 LLM 费用的敏感度正在上升，值得维护者提前考虑预算配额、调用上限等防护机制。

**WebUI 功能 PR 群（#5358、#5364、#5408）**
- [PR #5358 - session messaging via mentions](https://github.com/HKUDS/nanobot/pull/5358)
- [PR #5364 - temporary side conversations](https://github.com/HKUDS/nanobot/pull/5364)
- [PR #5408 - follow-up suggestions](https://github.com/HKUDS/nanobot/pull/5408)
- 三个 WebUI 增强 PR 共同指向同一诉求：让 WebUI 具备更接近专业聊天产品的会话管理能力（会话间消息、侧边对话、后续追问建议）。

---

## 5. Bug 与稳定性

按严重程度排列：

**高严重度**
- **#4864（OPEN）** `Endless loop for <tool_call> <function=complete_goal>` — [Issue](https://github.com/HKUDS/nanobot/issues/4864)。gateway 参数序列化回归导致 `complete_goal` 错误循环，可能持续消耗 LLM tokens。目前无公开 fix PR，作为持续 40 天的活跃 bug，需优先定位。相关修复方向可能在 gateway 参数序列化模块。

**中严重度**
- **#5171（CLOSED）** `Telegram polling stalls silently` — [Issue](https://github.com/HKUDS/nanobot/issues/5171)。已由 #5156 修复合并，但建议补充回归测试防止复用连接池场景复发。

- **#5407（OPEN）** `fix(cron): retire persisted heartbeat/dream system jobs when disabled` — [PR](https://github.com/HKUDS/nanobot/pull/5407)。用户在配置中禁用 heartbeat/dream 后，持久化的系统 cron job 仍继续触发烧 token，属于配置语义与运行时行为不一致的隐蔽 bug。已有修复 PR 待合并且带 `priority: p2, conflict` 标签。

**低严重度 / 待关注**
- **#5413（OPEN）** `fix(providers): apply fallback policy to raised errors` — [PR](https://github.com/HKUDS/nanobot/pull/5413)。Provider 抛异常时绕过 fallback 策略，导致 failover 不生效，已有修复 PR。
- **#5412（OPEN）** `fix(gateway): flush background child output to logs` — [PR](https://github.com/HKUDS/nanobot/pull/5412)。后台进程 stdout 块缓冲导致日志延迟，已有修复 PR。
- **#5414（OPEN）** `fix(slack): validate file downloads across redirects` — [PR](https://github.com/HKUDS/nanobot/pull/5414)。涉及重定向链下载的安全校验，已有修复 PR。
- **#5415（OPEN）** `fix(gateway): adopt Windows venv child process` — [PR](https://github.com/HKUDS/nanobot/pull/5415)。Windows 下 venv launcher PID 管理问题，已有修复 PR。

---

## 6. 功能请求与路线图信号

**高优先级信号**
- **#5409 — Hybrid Spend Firewall（支出防火墙）** — [Issue](https://github.com/HKUDS/nanobot/issues/5409)。用户主动提出在无限循环/恶意调用场景下保护 LLM 预算的方案，与 #4864 的 token 燃烧问题互相印证，预计会被纳入近期商业安全层面的路线图。

**WebUI 功能群（大概率进入下一版本）**
- **#5358** Session messaging via mentions — [PR](https://github.com/HKUDS/nanobot/pull/5358)
- **#5364** Temporary side conversations — [PR](https://github.com/HKUDS/nanobot/pull/5364)
- **#5408** Follow-up suggestions — [PR](https://github.com/HKUDS/nanobot/pull/5408)
- 三个功能互相配套：会话身份、多会话并行、智能建议，组合后 WebUI 将具备完整的"多会话工作台"体验。目前均在待审状态，可能随下一版本统一发布。

**CLI 方向**
- **#5406** 原生 TypeScript TUI 已合并 — 说明项目在 CLI 交互上正从补充性脚本走向完整 TUI 应用。

**其他待审**
- **#5341** `fix(skills): make weather workflow Windows-safe` — [PR](https://github.com/HKUDS/nanobot/pull/5341)。修复 Windows 上 `curl` 别名导致的 weather 技能失效，属于易用性修复，待合并且带冲突标签。

---

## 7. 用户反馈摘要

- **工具参数回归令用户困扰（#4864）**：评论中用户指出"gateway 近期更新后才出现"、“每次执行都失败但无清晰报错”，反映出序列化变更缺少兼容层或迁移提示，回归影响面较大。

- **静默故障最令运营头疼（#5171）**：日志无输出、进程存活但不工作，用户需手动调用 `getUpdates` 才能确认状态——此类"隐形宕机"对生产部署极不友好，好在 #5156 已提供修复。

- **成本控制诉求提升（#5409）**：用户从商业角度明确表达对"无限循环烧钱"的担忧，希望框架层面提供内置限额能力，而非依赖上层应用自己防范。

- **开发活跃度获认可（#5409 开头语）**：用户对项目从开源走向商业化表示认可（"Love the work"），同时提示规模化后的治理缺口，属于带有鼓励性质的反馈。

---

## 8. 待处理积压

| 项目 | 类型 | 状态 | 风险 | 链接 |
|---|---|---|---|---|
| **#4864** complete_goal 无限循环 | Bug | OPEN（40 天） | 高：持续消耗 token，无修复 PR | [Issue](https://github.com/HKUDS/nanobot/issues/4864) |
| **#5341** Windows weather workflow 修复 | PR | OPEN（7 天，conflict） | 中：冲突待解决，影响 Windows 用户体验 | [PR](https://github.com/HKUDS/nanobot/pull/5341) |
| **#5407** cron 禁用后仍触发 | PR | OPEN（conflict） | 中：配置语义不一致，烧 token | [PR](https://github.com/HKUDS/nanobot/pull/5407) |
| **#5364** 侧边对话 PR | PR | OPEN（5 天，conflict） | 低：功能完整但存在冲突，需 rebase | [PR](https://github.com/HKUDS/nanobot/pull/5364) |
| **#5408** 后续建议 PR | PR | OPEN（conflict） | 低：同上，冲突需处理 | [PR](https://github.com/HKUDS/nanobot/pull/5408) |

**维护者关注建议**：优先处理 #4864 的 gateway 参数序列化回退方案；对 #5407 这类配置失效问题补充集成测试；对 3 个带 `conflict` 标签的 PR 安排 rebase。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

## Hermes Agent 项目动态日报 — 2026-08-18

### 1. 今日速览
- 过去 24 小时项目保持高度活跃：50 条 Issue 更新（38 条新开/活跃、12 条已关闭），50 条 PR 更新（42 条待合并、8 条已合并/关闭）。
- 发布补丁版本 **v0.20.3 (v2026.8.16.2)**，一次性汇总结算自 v0.20.2 以来约 125 个已合并 PR，为 Docker 镜像、托管部署和新安装提供稳定基线。
- 维护者 teknium1 批量提交了多个桌面端修复 PR（#88731–#88737），重点围绕多 Profile 会话隔离、cron 作业可见性与插件设置清理。
- 社区讨论集中在 Webhook 功能包修复（#84834）、GPU 高功耗异常（#53902）以及安全加固类议题（#83565、#88706）。
- 项目整体健康度良好，Issue 关闭率 24%（12/50），PR 合并/关闭率 16%（8/50）；但 P1/P2 级 bug 仍有一定积压，需关注。

---

### 2. 版本发布
📦 **v0.20.3 (v2026.8.16.2)** — 2026-08-16 发布  
[https://github.com/NousResearch/hermes-agent/releases](https://github.com/NousResearch/hermes-agent/releases)

- **性质**：Patch release，汇总 v0.20.2 之后合并的约 125 个 PR。
- **目标受众**：Docker 镜像、托管部署、全新安装的下游消费者；对于已有 v0.20.2 的用户，升级为增量补丁风险较低。
- **破坏性变更**：发布说明未列明；建议升级前关注 Config 相关 PR（如 profile 作用域 `state.db` 变更）可能带来的行为变化。
- **迁移注意**：如使用多 Profile 或自定义 cron 配置，建议在 staging 环境验证后再上生产。

---

### 3. 项目进展
过去 24 小时有 8 个 PR 被合并/关闭，以下为代表性合并：

- **#88614 — fix(bot-mode): show profile-owned cronjobs** ⭐ 已合并  
  [https://github.com/NousResearch/hermes-agent/pull/88614](https://github.com/NousResearch/hermes-agent/pull/88614)  
  修复 Bot Mode 侧边栏 Cronjobs 面板不显示 profile 自有任务的问题。此前 `cron.manage` 已返回正确数据，但前端按 `[bot:<profile>]` 前缀过滤导致普通任务被隐藏。

- **#88720 — fmt(js): auto-fix** ⭐ 已自动合并  
  [https://github.com/NousResearch/hermes-agent/pull/88720](https://github.com/NousResearch/hermes-agent/pull/88720)  
  由自动化工作流生成的代码格式化 PR，保持 JS 代码风格一致性。

其余合并为维护性更新与依赖收拢。即使多数 PR 仍处于待合并状态（42 个），维护者今日从旧 PR 中 salvage 出多个关键修复重新提交（#88734、#88732、#88727 等），说明 main 分支整合在进行中。

---

### 4. 社区热点
讨论热度最高的 Issues：

- **#78647 — [CLOSED] Large-file decomposition: 20/20 done**（76 评论）  
  [https://github.com/NousResearch/hermes-agent/issues/78647](https://github.com/NousResearch/hermes-agent/issues/78647)  
  大型重构 Epic，宣布全部 god-file 切分完成。社区关注点在于仓库长期可维护性，已关闭，可视为项目架构技术债清理的里程碑。

- **#84834 — Webhook Feature Package — graph-gated repair (meta-issue)**（17 评论）  
  [https://github.com/NousResearch/hermes-agent/issues/84834](https://github.com/NousResearch/hermes-agent/issues/84834)  
  针对整个 webhook 表面（ingress、execution、delivery、配置、管理 UI、部署、文档）的 5×2×3 修复追踪。这是一个跨组件的大型问题包，社区讨论活跃，反映 webhook 是当前可用性短板之一。

- **#53902 — Renderer stuck in fontations+temporal_rs loop — GPU 98%, 13W**（7 评论）  
  [https://github.com/NousResearch/hermes-agent/issues/53902](https://github.com/NousResearch/hermes-agent/issues/53902)  
  自 v0.17.0 起，桌面端 Electron Renderer 陷入字体/时间库渲染循环，GPU 占用 98%、功耗 13W，约为正常空载 4 倍。该问题持续 50 天未关闭，用户关注度高。

- **#87654 — Vision tools disappear after first availability probe**（5 评论）  
  [https://github.com/NousResearch/hermes-agent/issues/87654](https://github.com/NousResearch/hermes-agent/issues/87654)  
  视觉工具在长期运行进程首次探测后即从会话中消失，Dashboard 显示 enabled 但实际不可用。属于直接影响 agent 能力的回归。

- **#83565 — Child-process credential-inheritance closure (tracker)**（4 评论）  
  [https://github.com/NousResearch/hermes-agent/issues/83565](https://github.com/NousResearch/hermes-agent/issues/83565)  
  追踪敏感凭据泄漏到子进程问题的 Epic，与多项安全修复 PR 联动，体现社区对安全边界的重视。

---

### 5. Bug 与稳定性
按严重程度排序，标注目前处理状态：

**P1**
- **#79742 — SessionDB 每线程 WAL 读连接泄漏，fd 耗尽 → EMFILE**  
  [https://github.com/NousResearch/hermes-agent/issues/79742](https://github.com/NousResearch/hermes-agent/issues/79742)  
  长期运行进程会逐步耗尽文件描述符。目前无 fix PR，风险较高，需关注。

- **#53666 — `clarify` 工具提示在聊天 UI 不渲染，用户看不到问题**  
  [https://github.com/NousResearch/hermes-agent/issues/53666](https://github.com/NousResearch/hermes-agent/issues/53666)  
  CLI 询问已发出但 Electron UI 不显示，导致用户困惑且回复为空。超过 50 天未关闭。

- **#88655 — Scheduler 级 cron 处理错误绕过 failure_nudge 告警**  
  [https://github.com/NousResearch/hermes-agent/issues/88655](https://github.com/NousResearch/hermes-agent/issues/88655)  
  cron 任务每 10 分钟静默失败持续 5 小时，无告警。直接影响任务可靠性，暂无 fix PR。

**P2**
- **#87654 — 视觉工具 (vision_analyze/browser_vision) 首次探测后消失**  
  [https://github.com/NousResearch/hermes-agent/issues/87654](https://github.com/NousResearch/hermes-agent/issues/87654)  
  `_AuxProbeClientStub` 被缓存导致工具不可用，暂无 fix PR。

- **#72716 — optimize-storage 在中断后写入空 FTS，永久丢失历史搜索**  
  [https://github.com/NousResearch/hermes-agent/issues/72716](https://github.com/NousResearch/hermes-agent/issues/72716)  
  数据损坏风险高，暂无 fix PR。

- **#61828 — install.sh `--stage` 协议掩盖失败，显示成功但实际失败**  
  [https://github.com/NousResearch/hermes-agent/issues/61828](https://github.com/NousResearch/hermes-agent/issues/61828)  
  `set -e` 在子 shell 中被关闭，uv venv 失败后仍输出 “✓ Virtual environment ready”。影响安装体验。

- **#88695 — Codex OAuth 窗口已升至 900K，但原生压缩仍按 200K 触发**  
  [https://github.com/NousResearch/hermes-agent/issues/88695](https://github.com/NousResearch/hermes-agent/issues/88695)  
  已有对应修复 PR：**#88722 — fix(compression): derive native threshold from local trigger**  
  [https://github.com/NousResearch/hermes-agent/pull/88722](https://github.com/NousResearch/hermes-agent/pull/88722)

- **#87823 — Desktop “Read Aloud Replies” 触发两次 TTS 合成与播放**  
  [https://github.com/NousResearch/hermes-agent/issues/87823](https://github.com/NousResearch/hermes-agent/issues/87823)  
  临时 ID 变异导致重复播放，暂无 fix PR。

**P3 / 安全**
- **#88706 — 安全边界缺口：use-time、provenance、authority gaps**  
  [https://github.com/NousResearch/hermes-agent/issues/88706](https://github.com/NousResearch/hermes-agent/issues/88706)  
  跟进 #88232 的具体路径与 #88435 的十项加固，属于安全专项。

- **#87025 — `hermes doctor` 报告 npm 高危漏洞（nanoid / vite）**  
  [https://github.com/NousResearch/hermes-agent/issues/87025](https://github.com/NousResearch/hermes-agent/issues/87025)  
  提供最小修复方案：nanoid 3.3.18 + vite 8.2.1 覆盖 override。

---

### 6. 功能请求与路线图信号
今日收到的功能请求与已有 PR 的匹配情况：

- **git 后端共享技能库 → 已进入 PR 阶段**  
  Issue #48970 提出项目本地 `.hermes/`；新 PR **#88719 — feat(skills): add skills.external_repo for git-backed shared skills**  
  [https://github.com/NousResearch/hermes-agent/pull/88719](https://github.com/NousResearch/hermes-agent/pull/88719)  
  通过 git repo 在多个 Hermes 安装间同步技能，已实现 shallow-clone + `--ff-only` 更新，大概率进入下一版本。

- **代码执行状态持久化 → 已进入 PR 阶段**  
  **#88637 — feat(code-execution): persist Python state per conversation**  
  [https://github.com/NousResearch/hermes-agent/pull/88637](https://github.com/NousResearch/hermes-agent/pull/88637)  
  让 `execute_code` 在会话内保留 imports、变量和中间对象，摆脱每次调用都开新进程的局限。

- **bot-to-bot 跨网关 DM → 已进入 PR 阶段**  
  **#88725 — feat(cli): hermes peer**  
  [https://github.com/NousResearch/hermes-agent/pull/88725](https://github.com/NousResearch/hermes-agent/pull/88725)  
  机器人可在不同网关间互发 DM，无需桌面端参与；会推动 Bot Mode 协议演进。

- **Webhook 功能包修复（#84834）**  
  [https://github.com/NousResearch/hermes-agent/issues/84834](https://github.com/NousResearch/hermes-agent/issues/84834)  
  仍处于 meta-issue 规划阶段，属于跨领域大工程，预计需要多个 sprint 完成。

- **ByteDance（TikTok/Douyin）插件包（#86950）**  
  [https://github.com/NousResearch/hermes-agent/issues/86950](https://github.com/NousResearch/hermes-agent/issues/86950)  
  尚在需求整理阶段，暂无 PR，属于远期路线。

---

### 7. 用户反馈摘要
从今日活跃 Issue 中提炼真实用户反馈：

- **多 Profile 场景痛点集中**：桌面端在多 profile 下出现会话串号（#88200）、后端重复启动（#61023）、跨 profile 切换落到空白路由（#88540）以及配置双写冲突（#37751）。  
  - #88200: https://github.com/NousResearch/hermes-agent/issues/88200  
  - #61023: https://github.com/NousResearch/hermes-agent/issues/61023

- **TTS 功能满意度下降**：两位不同用户分别报告自动朗读重复播放（#86601）和双倍合成请求（#87823），说明 TTS 功能在桌面端体验有回归。

- **Cron 静默失败引发信任危机**：#88655 用户明确表达对后台任务可靠性的担忧——“jobs can die silently for hours”，并怀疑混合版本部署导致的隐患。

- **安全敏感用户积极上报**：#88706、#83565 等安全议题获得持续关注，用户对凭据泄漏路径非常警惕。

- **Windows 生态仍存在兼容性摩擦**：删除 profile 时 WinError 32（PR #88727）、桌面与 Gateway 配置冲突（#37751）等 Windows 专属问题反复出现。

---

### 8. 待处理积压
以下为长期未响应/未关闭的重要议题，建议维护者优先关注：

- **#53902 — Renderer 高 GPU 功耗循环**（自 2026-06-28，51 天未解决）  
  [https://github.com/NousResearch/hermes-agent/issues/53902](https://github.com/NousResearch/hermes-agent/issues/53902)  
  P3 优先级但影响能耗与设备寿命，用户持续关注。

- **#53666 — `clarify` 工具 UI 不渲染**（自 2026-06-27，52 天未解决）  
  [https://github.com/NousResearch/hermes-agent/issues/53666](https://github.com/NousResearch/hermes-agent/issues/53666)  
  P1 级别且直接影响对话体验，亟需计划。

- **#61828 — install.sh 掩码错误**（自 2026-07-10，39 天未解决）  
  [https://github.com/NousResearch/hermes-agent/issues/61828](https://github.com/NousResearch/hermes-agent/issues/61828)  
  新用户安装时可能被成功提示误导，影响转化率。

- **#79742 — SessionDB fd 泄漏**（自 2026-08-05，13 天未解决，P1）  
  [https://github.com/NousResearch/hermes-agent/issues/79742](https://github.com/NousResearch/hermes-agent/issues/79742)  
  长跑服务稳定性风险，需尽早排查。

- **PR #70370 / #70372 — 桌面端凭据擦除**（自 2026-07-23，26 天待合并）  
  [https://github.com/NousResearch/hermes-agent/pull/70370](https://github.com/NousResearch/hermes-agent/pull/70370)  
  [https://github.com/NousResearch/hermes-agent/pull/70372](https://github.com/NousResearch/hermes-agent/pull/70372)  
  安全加固类 PR，已在队列中滞留近一个月，建议推动合并。

---

**总体评价**：Hermes Agent 项目今日处于高活跃状态，常规 bug 修复与重构持续推进，同时安全与多 profile 稳定性是当前社区最关心的方向。v0.20.3 的发布为生态提供了一个更干净的基线，但 P1 级 issue 的解决速度和长期 PR 的积压仍需维护团队重视。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-08-18

## 1. 今日速览

昨日项目活跃度中等偏上：**4 条 Issue 更新**（其中 2 个新 Bug 上报）与 **4 条 PR 更新**（1 个待合并、3 个已关闭）并行推进，无新版本发布。值得关注的是，**重复工具失败导致 Agent 静默无响应** 的严重 Bug 修复 PR（#3312）已合并关闭，稳定性问题得到及时处理。与此同时，Slack 图片上传 0 字节 Bug 已有对应修复 PR（#3340）待审查，修复线路清晰。社区侧 IRC 长消息支持功能请求（#3287）讨论热度最高，已积累 6 条评论，但处于 stale 状态，需维护者关注。

## 2. 版本发布

过去 24 小时无新版本发布或预发布。

## 3. 项目进展

今日合并/关闭了 3 个 PR，涵盖 1 个重要 Bug 修复、1 个配置缺陷修复和 1 个渠道功能增强：

- **[PR #3312] fix(agent): stop turn early on repeated identical tool failure**（已合并/关闭）  
  修复了当工具以相同错误反复失败时（如 git 无凭据、shell 安全限制），Agent 静默循环调用 LLM 直至 `max_tool_iterations` 耗尽而从不回复用户的问题。现在会在检测到重复失败时提前终止 turn 并回应用户。该 PR 解决了 Issue #3311 报告的生产环境 Telegram 长时间无响应问题，显著提升 Agent 交互可靠性。
- **[PR #271] fix: env overrides when config.json is missing and add regression test**（已合并/关闭）  
  修复了 config.json 缺失（例如 Fly 部署仅使用 secrets/env）时，环境变量覆盖未生效、仍加载默认模型 `glm-4.7` 而导致凭据缺失的问题。现在无论 config.json 是否存在都会执行 `env.Parse(cfg)`，并新增回归测试防止复发。
- **[PR #2606] feat: enhance Weixin channel support and configuration**（已合并/关闭）  
  增强微信渠道多实例支持与配置管理，涉及后端、前端和文档三端，新增渠道目录与动态实例处理，加强对非法渠道名的校验与容错，提升多实例流程稳定性。

当前仍有 **[PR #3340] fix(slack): set FileSize on media upload params** 待合并，修复 Slack 媒体上传因缺少 FileSize 而被 SDK 拒绝的问题。

## 4. 社区热点

**[Issue #3287] [Feature] Better support long messages in IRC**（评论最多，6 条）  
链接：https://github.com/sipeed/picoclaw/issues/3287

该功能请求由 `superuser-does` 于 2026-07-22 提出，讨论持续活跃。核心诉求：IRC 协议默认限制单条消息 512 字节，超长消息会被客户端自动拆分，PicoClaw 应能将 IRCv3 拆分后的长消息正确识别并合并为单条语义完整的消息，避免上下文割裂。该 Issue 已标记 `[stale]`，但评论热度表明用户对 IRC 渠道消息完整性的真实痛点，值得维护者重新评估优先级。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | 修复状态 |
|---|---|---|---|
| 高 | [#3339] Antigravity generation returns generic 429 | Google Antigravity 认证与模型发现正常，但每次生成请求均返回 `429 RESOURCE_EXHAUSTED`，且响应中不包含任何 quota 细节，用户完全无法判断是配额耗尽还是集成配置问题 | 无 PR，待维护者排查 |
| 中 | [#3338] Slack does not attach image media content | `SendMedia` 构建 `slack.UploadFileParameters` 时未设置 `FileSize`，slack-go SDK 在请求前即拒绝上传，报错 `file.upload.v2: file size cannot be 0`，导致 Slack 图片发送完全不可用 | 已有修复 PR #3340，待合并 |
| 低（已修复） | [#3311] Repeated identical tool failure loops silently to max_tool_iterations | 生产环境 Telegram 用户请求 Agent 执行 git 命令后长时间无任何回复，直到 `max_tool_iterations` 才静默放弃，体验极差 | PR #3312 已合并关闭 |

另注意 [#3312] 本身标记为 `[stale]`，但已关闭，不影响修复有效性。

## 6. 功能请求与路线图信号

- **[Issue #3287] Better support long messages in IRC**  
  用户明确要求 IRCv3 长消息的合并语义支持。考虑到 IRC 仍是重要渠道、且该 Issue 有 6 条讨论，若维护者认可可纳入下版本 channel 增强方向。
- **[PR #2606] Weixin channel 增强** 今日已合并，说明渠道体验是当前迭代重点，IRC 长消息支持有望成为下一步渠道优化的候选。

## 7. 用户反馈摘要

- **生产环境稳定性痛点（Issue #3311）**：用户 `lucapette` 在 Telegram 生产环境观察到，当工具调用反复失败时 Agent 会“安静地空转”数分钟，用户「从未得到答案」，这是对交互可靠性最直接的负面体验。该问题已随 PR #3312 合入得到修复。
- **IRC 用户诉求（Issue #3287）**：`superuser-does` 描述了真实使用场景——IRC 客户端自动拆分超长消息导致 PicoClaw 将其识别为多条独立消息，破坏了对话连贯性。用户希望 PicoClaw「理解长消息应被视为单一、有内聚力的消息」。

## 8. 待处理积压

- **[Issue #3287] IRC 长消息支持**：创建于 2026-07-22，已标记 `[stale]` 但仍为 open 状态。社区讨论持续，功能诉求明确，建议维护者评估纳入迭代计划或明确回应。
- **[Issue #3339] Antigravity 429 错误**：2026-08-17 新上报的 Bug，截至今日零评论零 PR。若确认为 PicoClaw 集成问题，应尽快响应；若为 Google API 端配额限制，也建议给出说明或错误透传优化，避免用户无从排查。
- **[Issue #3338] Slack 图片附件失败**：新 Bug 已有对应修复 PR #3340 待审查，请维护者尽快 review，避免 Slack 渠道媒体功能长时间不可用。

---
*本报告基于 PicoClaw GitHub 仓库 2026-08-18 数据生成，重点跟踪项目健康度：今日 Bug 响应效率良好（3 个 PR 关闭、1 个重大稳定性修复落地），但新上报的 Antigravity 429 与 Slack 附件问题仍需持续跟踪。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-08-18

## 1. 今日速览

过去 24 小时项目保持高活跃度：共 4 条 Issue 更新（3 条新开/活跃、1 条关闭）、39 条 PR 更新（8 条已合并/关闭、至少 12 条仍开放待审），无新版本发布。核心团队（core-team）围绕 channels（渠道接入层）、drivers（会话运行时驱动层）、setup wizard（安装向导）等方向密集合并了一批扩展点（seam/hook），显示项目正在为多渠道生态和运行时抽象铺路；社区侧也提交了 web chat 渠道、ClawMetry 观测工具等新功能。值得关注的是，两位作者各自提交了 Web Chat 渠道实现（#3298 vs #3290），以及两个由工具链回归引发的 bug（#3301、#3289）均已出现对应 fix PR。整体项目处于快速迭代、架构演进活跃期，但需留意合并节奏与代码评审积压。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 主要集中在核心团队对扩展机制的系统性建设，为后续渠道接入和运行时替换做准备。合并的 8 条 PR 摘要如下：

- **[#3305](https://github.com/nanocoai/nanoclaw/pull/3305) [CLOSED] slack: shared channel-layer library + canvas cluster (wave A)** — 合并 main 分支并落地前两个 channel-layer 模块：共享 Slack Web API 客户端与 token-key 约定、canvas 集群动作模块。这是 Slack 渠道整合的第一波。
- **[#3304](https://github.com/nanocoai/nanoclaw/pull/3304) [CLOSED] channels: adapter-declared session-mode context defaults** — 允许渠道适配器声明 `shared` / `per-thread` 会话模式，threads 语义改为由适配器派生，不再由调用方硬编码。
- **[#3297](https://github.com/nanocoai/nanoclaw/pull/3297) [CLOSED] setup: per-channel pre-step and companion-skill declarations** — 为安装向导增加两个通用扩展点：渠道安装前的预置步骤（可编程获取凭据）、安装后的伴随技能声明，提升向导对不同渠道的适配能力。
- **[#3296](https://github.com/nanocoai/nanoclaw/pull/3296) [CLOSED] agent-runner: extendTool — additive MCP tool schema extension** — 新增 `extendTool` 扩展点，允许已安装模块在不改基础工具源码的情况下增量扩展 MCP 工具的输入 schema、描述与透传键，降低集成摩擦。
- **[#3295](https://github.com/nanocoai/nanoclaw/pull/3295) [CLOSED] channels: generic membership-event hook on the Chat SDK bridge** — 在 Chat SDK 桥上新增通用成员事件（如 `onMemberJoinedChannel`）注册机制，渠道模块无需修改桥源码即可处理入群/退群逻辑。
- **[#3294](https://github.com/nanocoai/nanoclaw/pull/3294) [CLOSED] delivery: post-delivery hook with first-delivery context** — 出站投递循环新增投递后钩子，带 first-delivery 标记，渠道模块可以在会话首条对外消息后执行一次性引导动作。
- **[#3293](https://github.com/nanocoai/nanoclaw/pull/3293) [CLOSED] router: session-created hook for brand-new engaged sessions** — 路由层新增新会话创建钩子，向注册模块传递消息组、thread id、会话模式与触发消息，便于平台侧初始化会话（如命名线程）。
- **[#3292](https://github.com/nanocoai/nanoclaw/pull/3292) [CLOSED] channels: bridge inbound-policy registration seam** — 在 Chat SDK 桥上建立入站策略注册接缝，使 bot 消息策略等逻辑可通过模块注册挂载，替代原先直接改桥源码的方式。

整体来看，项目今日向前迈了一大步：渠道接入从“改桥源码”演化为“注册即用”，运行时层面也确立了 driver 接缝（见 #3306/#3307，虽未合并但已在评审中），架构清晰度显著提升。

## 4. 社区热点

- **[#3298](https://github.com/nanocoai/nanoclaw/pull/3298) [OPEN] feat(channels): add local web chat**（core-team，amit-shafnir）与 **[#3290](https://github.com/nanocoai/nanoclaw/pull/3290) [OPEN] Add webchat channel: local browser chat via native HTTP bridge**（外部贡献者，viiluxx）—— 两个 Web Chat 渠道几乎同时出现。核心团队版本定位为 loopback-only 本地渠道适配器并带浏览器 UI；社区版本则强调零依赖、单文件、基于 daemon 原生 HTTP 桥。这反映出“本地浏览器直接对话”是当前社区与团队共同识别的需求空白，预计其中一种（或合并方案）将被纳入下一版本。

- **[#3299](https://github.com/nanocoai/nanoclaw/pull/3299) [OPEN] fix(add-codex): bump @openai/codex pin 0.138.0 → 0.146.0** —— 针对 2026-08-31 GPT-5.4 将从 Codex 退役的倒计时修复。由于 0.138.0 默认模型即 GPT-5.4，保留旧 pin 会使 `/add-codex` 在 8 月底后失效。此 PR 属于时间敏感型修复，社区关注度较高，预计维护者会优先处理。

- **[#3288](https://github.com/nanocoai/nanoclaw/pull/3288) [OPEN] Add /add-clawmetry skill** —— 引入本地只读仪表盘 ClawMetry（带 NanoClaw 会话适配器），用于夜间会话扫描与调试。这呼应了 FAQ 中“调试靠 Claude Code”的痛点，说明用户对可观测性/可视化有明确需求，很可能被纳入下一版本。

## 5. Bug 与稳定性

按严重程度排列：

**高：任务运行日志丢失 / 回复被吞（已有 fix PR）**
- [#3301](https://github.com/nanocoai/nanoclaw/issues/3301) [OPEN] 聊天会话中触发的任务行将整个查询切换到任务模式，导致 `task_log` 日志丢失、回复被吞、系列未列出。自 2.1.48 起出现（#2988 one-door task delivery 引入），对使用聊天会话触发任务的用户影响较大。
- 对应修复：[#3303](https://github.com/nanocoai/nanoclaw/pull/3303) [OPEN] fix(tasks): keep run logs for task rows firing in chat sessions —— 为任务行保留运行日志，修复日志缺失问题。建议 reviewer 优先合并。

**高：待处理消息轮询无界加载（已有 fix PR）**
- [#3289](https://github.com/nanocoai/nanoclaw/issues/3289) [OPEN] `getPendingMessages()` 将全部到期待发消息一次性加载进 JS 内存后再批量处理。在积压场景下会造成明显内存/CPU 峰值。
- 对应修复：[#3291](https://github.com/nanocoai/nanoclaw/pull/3291) [OPEN] fix: bound pending message polling —— 为待处理消息轮询增加分批边界，避免一次性全量加载。两个 PR 均来自 glifocat，属于同一类系统性稳定性问题，建议合并后纳入回归测试。

**中：codex provider 未声明 `file` 事件导致类型检查失败（无对应 fix PR）**
- [#3203](https://github.com/nanocoai/nanoclaw/issues/3203) [OPEN] codex provider 发出 `ProviderEvent` 中未声明的 `file` 事件，导致 `/add-codex` 在当前 main 上无法通过容器类型检查，且该事件无人消费，codex 生成的图片被静默丢弃。创建于 8 月 8 日，至今无直接修复 PR，仅 #3299（bump codex 版本）可能间接缓解默认模型问题，但类型问题仍需单独解决。

**中：attachment type 未转义（已有 fix PR）**
- [#3300](https://github.com/nanocoai/nanoclaw/pull/3300) [OPEN] fix(agent-runner): escape the attachment type in agent-facing XML —— `formatAttachments` 中除 `type` 外所有字段均转义，类型字段存在注入/解析风险。修复虽小，但属于安全与稳定性相关修正。

**低：OneCLI 网关默认绑定地址错误（已有 fix PR）**
- [#2903](https://github.com/nanocoai/nanoclaw/issues/2903) [OPEN] OneCLI gateway 默认绑定到 `0.0.0.0`，不匹配客户端发现地址 `10.0.0.1:10254`。
- 对应修复：[#3302](https://github.com/nanocoai/nanoclaw/pull/3302) [OPEN] 修正默认绑定地址，确保 `ONECLI_URL` 与 gateway 监听地址一致。

**已关闭：文档路径过期**
- [#1143](https://github.com/nanocoai/nanoclaw/issues/1143) [CLOSED] Skills 文档仍引用已移除的 `/data/env` 路径。该 issue 创建于 2026-03-16，今日（8 月 17 日）关闭，但积压时间长达 5 个月，说明文档类 issue 的响应周期偏长。

## 6. 功能请求与路线图信号

- **本地 Web Chat 渠道**：#3298 与 #3290 的双提交表明该需求已接近必然纳入。核心团队的方案（loopback-only + 浏览器 UI）与社区方案（零依赖原生 HTTP）各有取舍，后续可能合并为单一实现。
- **可观测性工具链**：#3288 的 `/add-clawmetry` 与 FAQ 调试痛点呼应，结合近期多处 bug 反馈，项目可能将观测性纳入下一版本重点。
- **CLI 结构化输入**：#3218 [OPEN] feat(cli): accept bounded JSON from stdin —— 为 `ncl` 客户端增加 `--stdin-json` 模式，对脚本自动化、管道集成有直接价值。自 8 月 9 日创建至今未合并，但今日有更新，仍处于活跃评审中。
- **运行时抽象化（roadmap 信号）**：#3306 drivers seam + #3307 session lifecycle routing + #3308 防数据丢失保护，显示了从“Docker 专用”到“可插拔会话运行时”的迁移意图，是中长期架构方向。

## 7. 用户反馈摘要

- **调试与日志痛点**：glifocat 连续提交 #3301 和 #3289，反映深层使用的真实痛点——任务在聊天会话触发后日志丢失使排查困难，积压消息造成资源毛刺。这类“运行稳定性”反馈是本日最需要重视的用户声音。
- **Codex 用户面临图片静默丢失**：mshirel 在 #3203 中报告 codex 生成的图片被静默丢弃，且类型检查失败，说明该路径在 main 上已破损超过一周，影响实际使用者。
- **文档过期困扰**：#1143 显示用户按文档操作会走入死路，虽然今日已关闭，但 5 个月的响应周期暴露了文档维护流程待改进。
- **OneCLI 网络配置困惑**：#2903 说明默认绑定 `0.0.0.0` 带来的网络不安感与连通性问题，属于安装体验类反馈。
- **时间敏感型担忧**：#3299 的贡献者提醒 GPT-5.4 退役倒计时，表现出对“技能失效”的提前预防意愿，这类用户对依赖外部服务变更有较高警觉度。

## 8. 待处理积压

- **[#3203](https://github.com/nanocoai/nanoclaw/issues/3203) codex provider 未声明 file 事件** —— 创建于 8 月 8 日，已滞留 10 天，容器类型检查失败且功能实际不可用，建议维护者优先给出修复或指派。
- **[#3218](https://github.com/nanocoai/nanoclaw/pull/3218) CLI stdin JSON 模式** —— 8 月 9 日创建，9 天未合并。今天有更新但目前非 core-team 成员提交，可能因评审容量不足被延后。
- **待评审 fix PR 集群**：#3291、#3300、#3302、#3303 均为社区贡献的修复性 PR，建议维护者在下一轮评审中集中处理，避免 bug 悬置时间过长。
- **文档类 issue 处理周期过长**：#1143 虽已关闭，但 5 个月的存续时间提示：可考虑为文档类 issue 设置独立 SLA 或机器人自动巡查机制。

---

*报告生成时间：2026-08-18 · 数据来源：[NanoClaw GitHub](https://github.com/qwibitai/nanoclaw)*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-08-18

## 1. 今日速览
项目在过去 24 小时整体处于低活跃状态：**无新增或关闭 Issue**，**仅 1 条由 dependabot 发起的依赖更新 PR**（处于待合并状态），无新版本发布。该 PR 为 Docker 基础镜像 `alpine` 的常规升级（3.23 → 3.24），并非功能或修复类变动，说明项目当前没有面向用户的实质代码变更。结合 PR 创建于 6 月 15 日至今仍未合并的情况，项目近期可能处于维护节奏放缓或维护者响应周期较长的阶段，建议关注后续社区互动与合并动态。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日**没有合并或关闭任何 PR**，唯一活跃 PR 为依赖升级，尚未进入合并阶段，因此没有可确认的功能新增或 Bug 修复落地。

- [#956 [dependencies, docker] ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group](https://github.com/nullclaw/nullclaw/pull/956)
  - 状态：OPEN（待合并）
  - 说明：该 PR 由 dependabot 自动创建，将 Docker 镜像中的 Alpine Linux 从 3.23 升级至 3.24，属于持续集成与容器环境的常规维护。虽然不直接推进业务功能，但有助于保持基础设施的安全性与稳定性，建议维护者尽快审阅并合并，避免依赖版本持续滞后。

## 4. 社区热点
今日**仅 PR #956 一条动态**，且无用户评论（评论数为 0），互动热度极低。该 PR 是当前唯一引起更新的条目，可作为“最活跃”（但实际冷清）的讨论对象。

- [PR #956 — bump alpine from 3.23 to 3.24](https://github.com/nullclaw/nullclaw/pull/956)
  - 作者：dependabot[bot] ｜ 创建：2026-06-15 ｜ 最后更新：2026-08-17
  - 分析：该 PR 长时间未被处理（已超过两个月），反映维护者对自动化依赖更新 PR 的响应不够及时，同时社区也没有围绕该变更展开讨论。此类低风险升级通常应快速合并，长期挂起可能积累技术债务。

## 5. Bug 与稳定性
今日**无新增 Bug、崩溃或回归问题报告**，项目当前未暴露新的稳定性风险。唯一基础设施相关变更为 Alpine 版本升级（PR #956），该变更隐含对运行时环境安全补丁的跟进需求，但尚无用户报告相关异常，稳定性观测指标保持平稳。

## 6. 功能请求与路线图信号
今日**无新功能请求**，也没有用户在 Issue 或 PR 中提出路线图相关建议。结合唯一的 PR 为基础设施依赖更新，可以判断项目当前处于功能开发沉寂期，暂无新特性进入研发管线的明显信号。建议关注未来数日是否出现新的 Issue 或讨论，以判断社区需求动向。

## 7. 用户反馈摘要
今日**无 Issue 或 PR 评论**，因此缺乏可直接引用的真实用户反馈。基于可观测数据，社区对项目的主动反馈意愿较低，当前阶段难以从用户视角评估产品满意度。可结合历史 Issue/PR 中的反馈规律，待新的互动出现后再做进一步分析。

## 8. 待处理积压
重点提醒维护者关注以下长期未合并的 PR，其延迟处理可能影响项目基础设施的健壮性：

- [#956 [dependencies, docker] ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group](https://github.com/nullclaw/nullclaw/pull/956)
  - 创建时间：2026-06-15 ｜ 已开放约 **64 天** ｜ 状态：OPEN
  - 影响：Alpine 3.24 的升级涉及容器运行时的安全修复与兼容性改进，长期搁置可能导致部署环境依赖过旧版本，存在潜在安全风险。建议维护者尽快进行审阅与合并，或明确说明延后原因，以减少自动化依赖更新 PR 的积压。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-18

## 1. 今日速览

过去 24 小时 IronClaw 保持高活跃度：44 条 PR 更新（含 28 条待合并）、28 条 Issue 更新（22 条活跃、6 条关闭），无新版本发布。工程重心清晰：以 DB 写入压力优化 Epic (#7591) 为主线，多个 Tier 1–Tier 3 优化项落地关闭，预计可显著降低每轮对话的 durable store 写入行数。稳定性方面，今日发现 libSQL 后端写连接饥饿引发的级联故障（#7714），已快速出修复 PR (#7717)。新功能管道充实，多个 XL 级 PR（run-now 触发、Google Docs 语义编辑、durable suggestions）在审。项目整体处于功能扩展与性能加固并行的健康节奏。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 内容 | 影响 |
|---|---|---|
| [#7663](https://github.com/nearai/ironclaw PR #7663) | `fix(release): forward-port 1.2 fixes and thread repair` — 将 1.2 版本中已验证的 Windows 文件系统可靠性、Windows JSON 输出、运行时 curl 健康检查及稳定元数据修复 forward-port 到 main，并包含一次性线程索引投影修复 | 提升跨平台发布稳定性，main 分支与 1.2 修复线对齐 |
| [#7710](https://github.com/nearai/ironclaw PR #7710) | `fix(slack): address multi-agent review findings on #7682` — 针对 Slack 私密连接 PR #7682 的多智能体审查发现（connect 链接落地加固等 7 项）提交两个修复 commit | 直接改进待合并 PR #7682 的工程质量，推进 Slack 连接体验落地 |
| [#7703](https://github.com/nearai/ironclaw PR #7703) | `feat(wasm): typed WIT tool response and bundled guest migration` — 已关闭并折叠进 #7711 | 避免 add-then-remove 的 API 兼容层 churn |

### 关闭的 Issue（对应的实现 PR 已合并）

DB 写入压力 Epic (#7591) 的三个核心优化项已关闭落地：

- **[#7594](https://github.com/nearai/ironclaw Issue #7594)（Tier 1）**：将 loop milestone sink 路由到 CoalescingEventSink，每轮对话从关键路径移除约 30 次连接池 checkout。
- **[#7598](https://github.com/nearai/ironclaw Issue #7598)（Tier 2）**：压缩 capability 调用状态写入，预计每轮对话减少约 40 行写入（从 60→20），为全部优化中最大的单项收益。
- **[#7605](https://github.com/nearai/ironclaw Issue #7605)（Tier 3）**：将消息查找索引的 sibling 行折叠进消息行本身，减少最热表上的写放大（每条消息 1–3 个条目行）。

其他关闭项：

- **[#7647](https://github.com/nearai/ironclaw Issue #7647)**（automations）：为计划任务引入确定性的 no-delivery 输出结果，解决模型用 prompt 文本自行判断是否静默交付的不可靠问题。
- **[#7637](https://github.com/nearai/ironclaw Issue #7637)**（design system）：为共享设计系统组件补全显式 prop 类型，修复非法变体/事件处理器绕过 TS 校验的问题。
- **[#7275](https://github.com/nearai/ironclaw Issue #7275)**（memory）：完成跨对话显式持久记忆的生产环境验证（对应功能已具备兼容覆盖）。

**整体判断**：DB 写入优化从审计发现问题（8/13）到首个批次落地仅用 4 天，且每个环节都配套安全回退（如 #7712 的可选化 batching），执行效率与工程审慎度兼备。修复线、功能线双线推进顺利。

## 4. 社区热点

今日评论最为集中的 Issues 集中在性能优化计划与长期用户痛点：

| Issue | 评论数 | 主题 |
|---|---|---|
| [#7275](https://github.com/nearai/ironclaw Issue #7275)（已关闭） | 4 | 生产环境验证跨对话持久记忆召回。该 issue 源于用户反馈 #7185（显式建立的信息未被后续对话可靠召回），社区关注度高 |
| [#7591](https://github.com/nearai/ironclaw Issue #7591) | 3 | DB 写入压力 Epic，静态审计发现每轮典型对话产生大量持久化写入，引发对系统开销与扩展性的讨论 |
| [#7701](https://github.com/nearai/ironclaw Issue #7701) | 2 | 资源治理器 reserve+reconcile 合并（Tier 2/3 补充分解） |
| [#7603](https://github.com/nearai/ironclaw Issue #7603)、[#7604](https://github.com/nearai/ironclaw Issue #7604) | 各 2 | 分别为 BeforeModel checkpoint 批处理与配对行写入折叠 |
| [#3762](https://github.com/nearai/ironclaw Issue #3762) | 2 | Web UI 编辑 AGENTS.md 不更新系统提示（已持续 3 个月，用户关注持久） |

**背后诉求分析**：DB 写入优化系列的热度反映社区对操作成本与规模化部署可持续性的关切；#7275 和 #3762 则体现用户对"配置/记忆能即刻生效且跨对话一致"的核心体验期待。此外，Slack 私密连接问题（#7681）虽然没有高评论数，但其配套 PR（#7682 + #7710）在一天内连续推进，说明维护者对这类影响日常可用性的 UX 问题响应迅速。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue/PR | 描述 | 状态 |
|---|---|---|---|
| **高** | [#7714](https://github.com/nearai/ironclaw Issue #7714) | `libSQL: single shared write connection starves the resource-governor journal under bench load` — 单共享写连接导致资源治理器 delta journal 阻塞 ~40s，进而级联触发 authority 失效、journal 替换、持久状态重载，且保留的 reservation 永久泄漏；capability 调用以误导性错误失败 | **已有修复 PR**：[#7717](https://github.com/nearai/ironclaw PR #7717) — 阻止 libSQL 写通道饥饿级联穿透资源治理器 |
| **高** | [#7702](https://github.com/nearai/ironclaw Issue #7702) | Obligation 审计记录（AuditBefore/AuditAfter）在生产环境中**从未被写入**，违反 host-api 文档契约 | 发现中，尚无对应 PR |
| **中** | [#7705](https://github.com/nearai/ironclaw Issue #7705) | CoalescingEventSink 两处非阻塞缺陷：事件后端故障时 shutdown flush 可能永久挂起；pending_flush_error 被 latching 后无法恢复（PR #7631 审查时发现，刻意留出） | 待处理 |
| **中** | [#7716](https://github.com/nearai/ironclaw Issue #7716) | "Add MCP server" 流程缺少 bearer key/token 认证输入，也无 STDIO/HTTP 传输选项（QA bug，标记 bug_bash_P2） | 待处理 |
| **中** | [#7715](https://github.com/nearai/ironclaw Issue #7715) | Telegram 连接流在 bot 与个人账号之间缺少选择/确认机制，用户不知当前连接模式（QA bug，标记 bug_bash_P2） | 待处理 |
| **低-中** | [#7704](https://github.com/nearai/ironclaw Issue #7704) | clawbench 失败分类发现最大可修复缺陷为存储写通道并发问题（与 #7714 同源），其余失败分为多种 | 由 #7717 部分覆盖 |
| **用户反馈** | [#7275](https://github.com/nearai/ironclaw Issue #7275) | 显式持久记忆跨会话召回不可靠的生产反馈 | 已关闭（经验证） |

整体稳定性态势：libSQL 写饥饿是今日最严重的运行态问题，修复 PR 已快速提出；#7702 为代表的契约偏差需要后续补齐；#7715/#7716 属 QA 迭代中的功能体验缺陷。

## 6. 功能请求与路线图信号

| 功能请求 | 当前状态 | 纳入下一版本可能性 |
|---|---|---|
| [#7719](https://github.com/nearai/ironclaw Issue #7719)：在 GitHub 工具中暴露 Projects v2 字段操作 | 新开，无实现 | 中 — 提到受 #7716 的 Main backlog 优先级更新阻塞，说明是内部 dogfooding 刚需 |
| [#7681](https://github.com/nearai/ironclaw Issue #7681)：Slack 未链接用户引导消息私密化 + 一键连接 | PR [#7682](https://github.com/nearai/ironclaw PR #7682) 待合并，[#7710](https://github.com/nearai/ironclaw PR #7710) 已补强 | 高 — 已有完整实现，待合并 |
| [#7687](https://github.com/nearai/ironclaw Issue #7687)-[#7691](https://github.com/nearai/ironclaw Issue #7691)：通知中心 → 通用持久化用户收件箱 | 五个子 issue 处于待实现状态（#7688 契约/存储、#7689 前端泛化、#7690 各类型通知发布、#7691 run outcome 通知、#7706 后续清理兼容层） | 高 — 由同一维护者系统性推进，属于明确的路线图工作 |
| [#7694](https://github.com/nearai/ironclaw PR #7694)：durable backend suggestions（suggestions.list / generate / start / dismiss） | PR 待合并 | 高 — 实现已完整，无前端文件改动 |
| [#7718](https://github.com/nearai/ironclaw PR #7718)：Google Docs 语义编辑工具（结构化检查、批量编辑、表格填充、确定性验证） | PR 待合并 | 高 — 兼容保留全部 11 个旧工具 |
| [#7708](https://github.com/nearai/ironclaw PR #7708)：automations 的 run-now 手动触发（保留原 schedule、domain-separated fire identity） | PR 待合并 | 高 — 覆盖 trigger 域与 WebUI |

**路线图判断**：通知收件箱重构是一个完整的下一版本主题；Slack 与 automations run-now 已基本就绪，预计近期进入 main。Google Docs 与 suggestions 的后端能力与现有 OAuth/runner 架构衔接良好，有较大概率随下一版本发布。

## 7. 用户反馈摘要

- **持久记忆仍是用户核心关注点**（[#7275](https://github.com/nearai/ironclaw Issue #7275)）：用户明确报告"在一个对话中显式建立的信息，后续对话未被可靠召回"。虽然该 issue 已关闭（验证完成），但说明用户对跨对话记忆的期望是"零丢失"，任何模糊性都会带来信任损失。
- **AGENTS.md 编辑不生效持续困扰用户**（[#3762](https://github.com/nearai/ironclaw Issue #3762)）：Web UI 中编辑身份文件后，当前及未来会话的系统提示均不更新，且保存成功给用户造成"已生效"的错觉。该问题自 5 月起存在，已列入 v1.4.0 计划，用户关注度不低。
- **QA 对新增连接流程的体验反馈**（[#7715](https://github.com/nearai/ironclaw Issue #7715)、[#7716](https://github.com/nearai/ironclaw Issue #7716)）：MCP server 添加流程缺少认证能力和传输选项；Telegram 连接流程在 bot 与个人账号之间没有明确选择与告知。反映用户对"连接第三方服务"的操作期待是：有明确模式选择、有认证支持、有状态反馈。
- **Slack 公共频道隐私问题**（[#7681](https://github.com/nearai/ironclaw Issue #7681)）：未链接用户在共享频道 @bot 时会收到所有成员可见的连接引导，且该引导无法跳转到有效连接操作。这既是隐私问题，也是流程断裂（用户不知道该做什么）。

## 8. 待处理积压

| 项目 | 创建时间 | 状态 | 说明 |
|---|---|---|---|
| [#3762](https://github.com/nearai/ironclaw Issue #3762)：AGENTS.md 编辑不更新系统提示 | 2026-05-18（3 个月） | OPEN，v1.4.0 目标 | 长时间未解决的核心配置体验 issue，直接影响用户对"配置即生效"的信任，建议优先排期 |
| [#7184](https://github.com/nearai/ironclaw PR #7184)：Nostr host functions for WASM tools (reborn) | 2026-08-04（2 周） | OPEN，contributor: new | 新贡献者提交，功能完整但需维护者 review 与 CI 验证，注意避免新贡献者等待过久 |
| [#7406](https://github.com/nearai/ironclaw PR #7406)：dependabot actions 组 4 项依赖更新 | 2026-08-09 | OPEN | 常规依赖更新待合并，低风险但建议及时处理以保持依赖新鲜度 |
| [#6994](https://github.com/nearai/ironclaw PR #6994)：WebUI OOBE 自动化任务原型 | 2026-08-01（2.5 周） | OPEN，XL 规模 | 设计 + 实现集成于一个 PR，体积大导致审查周期长，可考虑拆分为多个合入单元 |
| [#7513](https://github.com/nearai/ironclaw PR #7513)：CLI ACP serve 命令（streaming + cancel） | 2026-08-11 | OPEN，contributor: new | 外部工具（Copilot CLI/VS Code）集成能力，等待 review |

---

**总结**：IronClaw 目前处于高速迭代期。性能优化（DB 写入）已进入收割阶段，多个 Tier 项快速关闭；新功能管道充实且大多已在审查尾声。最需关注的风险点是 libSQL 写通道饥饿问题（#7714）对规模化部署的稳定性影响，建议优先合入其修复 PR #7717。长期用户痛点 #3762（AGENTS.md）持续悬置，期待在 v1.4.0 中按期解决。整体项目健康度良好。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

好的，这是 2026-08-18 的 LobsterAI 项目动态日报，基于您提供的 GitHub 数据生成。

---

# LobsterAI 项目日报 — 2026-08-18

## 今日速览
过去 24 小时内，LobsterAI 项目经历了高强度的代码合入与收尾工作。**21 条 PR 更新中，17 条已合并/关闭**，其中包括多条从 4 月积压至今的历史 PR（如 Cowork UI 增强、OpenClaw 升级与安全修复），同时新提交的 dsh 引擎集成相关 PR（#2502、#2505）也已关闭，推测已完成合并，表明项目正处于版本迭代前的密集收敛期。相比之下，Issue 侧活跃度偏低：**7 条更新均为活跃或更新，无已关闭项**，且多数为标记为 `[stale]` 的遗留问题，今日未有新 Bug 被报告。总体状态：**代码前进节奏快，但社区反馈问题处理仍需加强**。

---

## 版本发布
今日无新版本 Release。

---

## 项目进展
今日合并/关闭的 PR 数量可观，主要覆盖**新引擎集成、安全加固、UI/UX 打磨与依赖升级**四大板块。尤其值得注意的是，一批 4 月提交的 PR 在今日被集中处理，标志着此前积压的开发成果正逐步并入主干。

### 1. 新引擎集成：dsh（DeepSeek Harness）
- **PR #2502**（[链接](https://github.com/netease-youdao/LobsterAI/pull/2502)）：`Feat: dsh engine integration`（已关闭）
- **PR #2505**（[链接](https://github.com/netease-youdao/LobsterAI/pull/2505)）：`feat: dsh process launcher`（已关闭）
- 配套文档 **PR #2506**（[链接](https://github.com/netease-youdao/LobsterAI/pull/2506)）仍处于打开状态。
> 这组 PR 显示 LobsterAI 正在为 **DeepSeek Harness** 提供一等运行时支持，扩展其 AI 引擎生态。

### 2. 核心功能与架构
- **PR #1663**（[链接](https://github.com/netease-youdao/LobsterAI/pull/1663)）：将 **OpenClaw 运行时从 v2026.3.2 升级至 v2026.4.12**，并同步升级 openclaw-weixin 插件（1.0.3 → 2.1.8），修复配置同步中失效的 `skipMissedJobs` 键。（已关闭）
- **PR #1668**（[链接](https://github.com/netease-youdao/LobsterAI/pull/1668)）：为每个非 main Agent 引入**独立的工作目录配置**，未配置时回退至 OpenClaw 默认行为。（已关闭）

### 3. Cowork 协作体验大面积增强（含批量合并的积压 PR）
- **PR #1636**（[链接](https://github.com/netease-youdao/LobsterAI/pull/1636)）：聊天窗口新增悬浮「滚动到底部」按钮。
- **PR #1637**（[链接](https://github.com/netease-youdao/LobsterAI/pull/1637)）：AI 回复消息新增「重新生成」按钮。
- **PR #1640**（[链接](https://github.com/netease-youdao/LobsterAI/pull/1640)）：工具执行结果（Bash 输出、文件读取等）增加一键复制按钮。
- **PR #1641**（[链接](https://github.com/netease-youdao/LobsterAI/pull/1641)）：所有弹窗统一支持 Esc 键关闭。
- **PR #1639**（[链接](https://github.com/netease-youdao/LobsterAI/pull/1639)）：修复多处按钮 tooltip 硬编码英文未国际化的问题。
- **PR #1675**（[链接](https://github.com/netease-youdao/LobsterAI/pull/1675)）：会话列表按时间段（今天/昨天/7 天内等）分组展示。
- **PR #2501**（[链接](https://github.com/netease-youdao/LobsterAI/pull/2501)）：修复 skill 升级进度覆盖层，使其完整覆盖应用外壳，并补充渲染进程日志。

### 4. 安全与稳定性
- **PR #1661**（[链接](https://github.com/netease-youdao/LobsterAI/pull/1661)）：**导出日志脱敏**，集中处理明文 API Key、Bearer token、OAuth token 及请求/响应体。这是一个重要的安全修复。（已关闭）
- **PR #1642**（[链接](https://github.com/netease-youdao/LobsterAI/pull/1642)）：为 Windows 添加注册表级右键菜单支持（通过 `--open-directory` 打开目录）。
- **PR #1667**（[链接](https://github.com/netease-youdao/LobsterAI/pull/1667)）：将 Qwen 控制台链接从已废弃的灵积迁移至百炼。
- **PR #1669**（[链接](https://github.com/netease-youdao/LobsterAI/pull/1669)）：修复设置页「测试连接」按钮的禁用逻辑，并修正自定义提供商名称显示。
- **PR #2503**（[链接](https://github.com/netease-youdao/LobsterAI/pull/2503)）：为 Electron 文本输入框补上右键编辑菜单（剪切/复制/粘贴）。

> **项目进度评估**：上述合入内容使 Cowork 模块的交互完整性、多 Agent 管理能力和敏感信息安全性均有显著提升。dsh 引擎的引入也预示着对更多模型提供商的支持。整体项目正从“功能堆砌”转向“体验打磨与安全加固”阶段。

---

## 社区热点
- **Issue #2500：VOKO 项目自荐**（[链接](https://github.com/netease-youdao/LobsterAI/issues/2500)）
  VOKO 作者发来详细的合作提案，阐述其“AI 智能体跨平台通信层”的定位，希望推动 A2A 标准化，已接入 OpenClaw、AstrBot 等。该讨论体现了社区对 **Agent 间互操作与群协作**的浓厚兴趣，与项目中长期存在的“多个 Agent 互不感知”诉求（Issue #1644）形成呼应。

- **Issue #1653：groupPolicy 反复被覆盖**（[链接](https://github.com/netease-youdao/LobsterAI/issues/1653)）
  该问题今日获得 2 条评论（为今日 Issues 中评论最多），用户反馈“每过一会”policy 就被重写为 allowlist，属配置持久化类问题，引发了多位用户的关注和猜测。

- **PR 系列（#1636-#1641）共建的聊天体验改进**：来自单个贡献者的这批 PR 今日被合并，通过“重新生成”“一键复制”“滚动到底部”等细节，解决了长对话和工具调用场景下的效率痛点，获得较高关注度。

---

## Bug 与稳定性
以下问题按严重程度降序排列，均未发现关联的修复 PR（今日合并的 PR #1661 为日志脱敏安全修复，而非下述 Bug）。

1. **高严重度 | 本地模型集成中断**：`ollama的本地模型没法使用`（Issue #1635，[链接](https://github.com/netease-youdao/LobsterAI/issues/1635)）
   用户报告从 qwen3 到 gemma4 均无法调用，但 ollama 本身正常（在 cherrystudio 中可用）。若此问题影响范围扩大，将严重打击希望使用本地私有模型的用户群体。`[stale]`，等待处理已超 4 个月。

2. **高严重度 | 配置被强制覆盖**：`groupPolicy 被覆盖为 allowlist`（Issue #1653，[链接](https://github.com/netease-youdao/LobsterAI/issues/1653)）
   周期性覆盖导致安全配置丢失，属于可能引发权限问题的数据一致性 Bug。`[stale]`。

3. **中严重度 | MCP 协议支持不全**：`除 sse 之外的 mcp 无法使用`（Issue #1662，[链接](https://github.com/netease-youdao/LobsterAI/issues/1662)）
   仅支持 SSE 传输模式，导致基于 stdio/HTTP 的 MCP 服务不可用，限制了 Agent 工具生态接入。`[stale]`。

4. **中严重度 | 长任务截断**：`md 文件转 word 做了一半提示 sse response finish reason: full`（Issue #1671，[链接](https://github.com/netease-youdao/LobsterAI/issues/1671)）
   输出的 token 达到上限导致任务中断，需要续写或断点机制。`[stale]`。

5. **轻微 | 弹窗误报**：`手动创建定时任务保存时提示“还有内容未保存”`（Issue #1643，[链接](https://github.com/netease-youdao/LobsterAI/issues/1643)）
   提示信息与实际保存结果不一致，误报率高，影响体验。`[stale]`。

---

## 功能请求与路线图信号
- **多 Agent 编排工作流（Issue #1644，[链接](https://github.com/netease-youdao/LobsterAI/issues/1644)）**：用户明确希望 main agent 可以感知并调度其它已创建的 agent，通过基于 Markdown 的工作流文件组织复杂任务。
  > **路线图信号**：与此对应，PR #1660（[链接](https://github.com/netease-youdao/LobsterAI/pull/1660)，状态 OPEN）为非 main agent 增加了个性化的首页欢迎区，表明项目方正在增强多 Agent 的“存在感”，但距离真正的跨 Agent 协作仍有差距。

- **统一外部模型网关（PR #2504，[链接](https://github.com/netease-youdao/LobsterAI/pull/2504)，状态 OPEN）**：新增 **OrcaRouter** 作为一等提供商（对标现有 OpenRouter 的接入方式），支持 Anthropic/OpenAI 兼容的命名空间模型 ID。结合今日合并的 dsh 引擎，说明 **模型接入层的扩展是当前开发重点之一**，预计将随下个版本发布。

- **跨 Agent 即时通信（Issue #2500，[链接](https://github.com/netease-youdao/LobsterAI/issues/2500)）**：VOKO 项目的 A2A 通信层提案虽来自外部，但回应了社区对 Agent 群聊协作的潜在需求，建议维护者评估。

---

## 用户反馈摘要
- **本地模型用户受阻**：Issue #1635 的用户表达了对 ollama 无法接入的困惑，并贴出了详细的对比测试（cherrystudio 下可正常调用且支持 MCP），强烈暗示 LobsterAI 的模型适配存在兼容性缺陷。用户侧已提供充分信息，等待官方修复。

- **配置持久化信任危机**：Issue #1653 的“覆盖”现象并非静态，而是“每过一会”发生一次，这种**不可预期性**让用户对配置管理的可靠性产生明显不信任感。

- **对“智能”的期待高于“自动化”**：来自 Issue #1644 的用户尝试向主 Agent 询问其它 Agent 的状态，得到的回答是“当前可用的 sub-agent 只有 main”。这一交互过程直观地暴露了当前系统在 Agent 协作上的空白，用户失望情绪明显。

- **积压问题长期挂起**：今日所有被评论的 Issues 均被系统标记为 `[stale]`，社区缺乏来自维护者的有效反馈，可能导致外部贡献意愿降低。

---

## 待处理积压
以下为重点值得维护者关注的历史遗留项：

1. **Issue #1635（ollama 不可用）**（[链接](https://github.com/netease-youdao/LobsterAI/issues/1635)）：自 2026-04-12 创建，搁置 4 个月，影响本地推理用户，反馈信息充分，建议优先处理。
2. **Issue #1662（非 SSE MCP 不可用）**（[链接](https://github.com/netease-youdao/LobsterAI/issues/1662)）：自 2026-04-14 创建，涉及的 MCP 协议兼容性问题关系到生态扩展上限。
3. **Issue #1653（groupPolicy 被覆盖）**（[链接](https://github.com/netease-youdao/LobsterAI/issues/1653)）：自 2026-04-13 创建，持续活跃，属于权限安全类问题，需尽快给出修复或临时解决方案。
4. **PR #1660（Agent 首页欢迎区域个性化）**（[链接](https://github.com/netease-youdao/LobsterAI/pull/1660)）：自 2026-04-13 提出，至今处于 OPEN 状态。该 PR 已完成开发，且与多 Agent 体验相关，建议评估合入。
5. **PR #1277（Dependabot：electron 升级 40.2.1 → 43.4.0）**（[链接](https://github.com/netease-youdao/LobsterAI/pull/1277)）：依赖自动升级 PR 悬置已超 4 个月，Electron 跨多个大版本，存在安全风险与维护成本，建议安排升级窗口。

---
**数据来源**：GitHub - netease-youdao/LobsterAI（数据抓取时间：2026-08-18）

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 · 2026-08-18

## 今日速览

Moltis 项目过去 24 小时保持较高活跃度：2 个 Issue 被关闭（含 1 个长期功能请求），6 个 PR 完成合并/关闭，另有 3 个 PR 等待合并。第三方贡献者（Lstarsky0、khimaros、penso、hetaoBackend）参与度较高，覆盖代理集成、UI 功能与依赖维护多个方向。今日无新版本发布，但代码库在外部代理支持、RPC 配置性、Shadow DOM 处理等方面均有实质推进，整体项目健康度良好。

## 版本发布

今日无新版本发布。

## 项目进展

今日合并/关闭了 6 个 PR，覆盖功能开发、Bug 修复、外部代理集成和依赖升级，具体如下：

| PR | 内容 | 状态 |
|---|---|---|
| [#1125](https://github.com/moltis-org/moltis/pull/1125) | 外部代理的模型与 effort 选择支持：在 `/model` 中提供 `models`/`efforts` 配置、`external-agent/<kind>` 分组及元数据持久化 | 已合并 |
| [#1130](https://github.com/moltis-org/moltis/pull/1130) | 使 WebUI 的 RPC 超时时间可配置（对应 Issue #1127） | 已合并 |
| [#1103](https://github.com/moltis-org/moltis/pull/1103) | 浏览器快照与 ref 查找路径高效穿透 Shadow DOM，保留原实现并添加 review 修复 | 已合并 |
| [#1204](https://github.com/moltis-org/moltis/pull/1204) | 新增 MiniMax Code ACP 代理（`acp-minimax-code`），纳入默认可执行检测与注册表 | 已合并 |
| [#1207](https://github.com/moltis-org/moltis/pull/1207) | 依赖升级：`wasmtime-wasi`、`cmov`、`quinn-proto`、`serde_with` 4 项 | 已合并 |
| [#1087](https://github.com/moltis-org/moltis/pull/1087) | `tar` 0.4.45 → 0.4.46 | 已合并 |

这些合并意味着：项目在 **外部代理生态**（MiniMax Code）、**配置可调性**（RPC 超时）、**浏览器自动化能力**（Shadow DOM）和 **依赖健康** 四个方面均有进步。特别是 #1125 和 #1204 完善了 `/model` 体系与第三方代理接入路径，对外部工具集成场景有直接价值。

## 社区热点

今日 Issue/PR 的评论数均为 0，但以下条目因功能规模或修复紧迫性值得关注：

- **[#1206 Add managed Files library and Settings browser](https://github.com/moltis-org/moltis/pull/1206)**（penso，OPEN）：新增持久化文件库（上传/下载/移动/删除等认证 API）、Finder 风格设置浏览器、`MOLTIS_FILES_DIR` 环境变量发现，以及 Docker/Podman/Apple Container 的只读挂载。这是较大的功能型 PR，可能吸引后续讨论与 review。

- **[#1208 fix(cron): honor heartbeat active hours when the scheduler fires](https://github.com/moltis-org/moltis/pull/1208)** 与 **[#1209 fix(gateway): treat heartbeat.update params as a patch, not a whole config](https://github.com/moltis-org/moltis/pull/1209)**：均由 Lstarsky0 提交，直接修复心跳配置行为，属于影响现有用户的可靠性问题。

社区诉求整体集中在 **配置灵活性和可预期行为** 上，相关修复/功能（RPC 超时、active_hours、默认值 patch 语义）正在被快速吸收。

## Bug 与稳定性

按影响面排列：

1. **Heartbeat active_hours 从未生效**（对应 [Issue #1205](https://github.com/moltis-org/moltis/issues/1205)，修复 PR [##1208](https://github.com/moltis-org/moltis/pull/1208) 待合并）：`is_within_active_hours` 虽已实现并测试，但调度器未调用，导致计划任务在非活跃时段仍执行。功能形同虚设，影响定时任务用户。

2. **Heartbeat.update 会覆盖整个配置**（对应 [Issue #1187](https://github.com/moltis-org/moltis/issues/1187)，修复 PR [##1209](https://github.com/moltis-org/moltis/pull/1209) 待合并）：由于 `#[serde(default)]`，缺失的字段会重置为默认值，而非保留原有配置。可能导致用户配置意外丢失。

3. **CI 格式门禁失败**（[Issue #1202](https://github.com/moltis-org/moltis/issues/1202)，已关闭）：`crates/memory-zvec/src/store.rs`（1799 行）和 `crates/gateway/src/methods/services/admin.rs`(1531 行) 超出 1500 行限制，导致 `Format` 任务红色。该 Issue 已在 24 小时内关闭，但未必意味着代码已拆分——需确认是否通过行数豁免或其他方式解决。

4. **Shadow DOM 查找失效**（#1103 已合并）：该修复正确解决了浏览器快照和 ref 查找路径下的问题，属于体验改进，无新增回归。

## 功能请求与路线图信号

- **RPC 超时可配置**（[Issue #1127](https://github.com/moltis-org/moltis/issues/1127)）已被 [PR #1130](https://github.com/moltis-org/moltis/pull/1130) 实现并合并。这反映出用户对 WebUI/外部调用的网络稳定性有明确需求，且项目对该类轻量配置请求响应迅速。

- **MiniMax Code 集成**（#1204）显示项目正持续推进第三方编码代理的“开箱即用”支持。预计未来将看到更多 ACP 代理接入。

- **托管文件库与设置浏览器**（[#1206](https://github.com/moltis-org/moltis/pull/1206)）处于 OPEN 状态，规模较大、涉及数据目录、认证和挂载权限设计，可能成为下一版本的核心功能，并引发关于安全性和数据管理边界的讨论。

## 用户反馈摘要

由于今日所有 Issue/PR 的评论数为 0，无法提取直接用户对话。从提交内容归纳出的用户诉求模式为：

- **对系统可配置性的持续渴望**（RPC 超时、心跳活跃时段），倾向于通过 WebUI 或 TOML 暴露更多控制选项。
- **对守护进程行为确定性的要求**（heartbeat.update 部分更新语义），即“发送部分配置不应重置未提及字段”，这是良好的 REST/配置 API 实践反馈。
- **对 CI 健康的敏感性**：Lstarsky0 主动报告了格式门禁失败，说明核心贡献者对主干保持绿色有较高期待。

## 待处理积压

- **[#1206 Add managed Files library and Settings browser](https://github.com/moltis-org/moltis/pull/1206)**：大型功能 PR，已开放 1 天。作者为 penso（三方贡献者），需维护者规划 review 与测试资源，避免长期搁置。

- **[#1208](https://github.com/moltis-org/moltis/pull/1208) 与 [#1209](https://github.com/moltis-org/moltis/pull/1209)**：两个 heartbeat 修复已等待合并。鉴于对应 Issue #1205、#1187 影响真实用户行为，建议优先合入并补充 changelog。

- **Issue #1202 的后续**：Issue 已关闭，但未见专门拆分代码的 PR。如通过更新 `scripts/check-file-size.sh` 的白名单或临时提高阈值处理，应关注后续是否重新引入大文件，避免“门禁形同虚设”。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

这份日报基于 CoPaw 开源项目（github.com/agentscope-ai/CoPaw）截至 2026-08-18 的 GitHub 数据生成。

---

# CoPaw 项目动态日报 | 2026-08-18

## 1. 今日速览

CoPaw 项目在过去 24 小时内保持了非常高的社区活跃度：共产生 14 条 Issue 更新（8 条新开/活跃，6 条关闭）和 35 条 PR 更新（13 条待合并，22 条已合并/关闭），无新版本发布。合并/关闭的 PR 数量（22 条）明显高于待合并数量（13 条），说明维护者响应与合入效率很高，尤其体现在控制台（Console）UI、Token 计数与媒体处理等多项修复的快速落地。社区方面，中国开发者反馈活跃，多个与 2.1.0 版本相关的功能请求（如按频道独立配置模型）和稳定性问题（如 MCP 工具调用崩溃）成为讨论热点。整体项目健康度良好，但需关注几个 2.1.0 版本引入的回归 Bug。

## 2. 版本发布

过去 24 小时内无新版本发布（最新版本仍为 v2.1.0 及 2.0.0post3）。

## 3. 项目进展

昨日共 22 条 PR 被合并/关闭，其中多项工作对 Console 用户体验和后台稳定性有直接改进：

- **控制台体验优化**：
  - [PR #7083](https://github.com/agentscope-ai/QwenPaw/pull/7083) 优化后台任务列表，固定高度并支持滚动，避免长任务列表将聊天输入框“顶”出屏幕，同时移除容易产生误导的剩余数量提示。
  - [PR #7036](https://github.com/agentscope-ai/QwenPaw/pull/7036) 为聊天中的媒体附件（音频/视频/图片）新增统一下载控件，按钮顺序与键盘焦点顺序对齐。
  - [PR #7017](https://github.com/agentscope-ai/QwenPaw/pull/7017) 修复了新安装的应用（PawApp）无法立即从桌面/应用中心打开的问题，用户无需手动刷新页面；更新已安装应用时则自动重载。该 PR 显著降低了新手的使用门槛。
- **稳定性与正确性修复**：
  - [PR #6968](https://github.com/agentscope-ai/QwenPaw/pull/6968) 修复了 Token 计数中把图片 base64 长度当作文本 Token 计算导致上下文用量虚高（甚至一两张图就显示 100% 已满）的问题。
  - [PR #6975](https://github.com/agentscope-ai/QwenPaw/pull/6975) 修复了执行 `/compact` 命令后，上下文用量圆环指标不刷新的问题。
  - [PR #5151](https://github.com/agentscope-ai/QwenPaw/pull/5151) 修复了 GitPanel 因 CSS 选择器前缀（`ant-` vs `qwenpaw`）不匹配导致 Tab 样式失效的问题。
- **生态与工程化**：
  - [PR #6940](https://github.com/agentscope-ai/QwenPaw/pull/6940) 合入了原生 DataPaw 应用运行时与持久化分析工作区，为后续数据应用铺路。
  - [PR #6981](https://github.com/agentscope-ai/QwenPaw/pull/6981) 清理了全部 7 个语言文件中聊天输入框占位符中不再需要的 `/approve` 和 `/deny` 命令提示文案。

## 4. 社区热点

- **Issue #6405（已关闭，7 条评论）**：[升级 2.0 后 MCP 工具提示 Tool not found](https://github.com/agentscope-ai/QwenPaw/issues/6405)
  用户反馈升级 2.0 后工具名变为 `[mcp-key]__[tool_name]`，但调用仍提示找不到。即便该问题已关闭，仍反映出用户对 MCP 工具命名与注册机制变更的困惑，可能值得在升级文档或迁移指南中强化说明。
- **Issue #7011（活跃，6 条评论）**：[Console 停止请求会取消活跃的飞书会话（多 UI 会话场景）](https://github.com/agentscope-ai/QwenPaw/issues/7011)
  该问题在 2.1.0 版本中仍然存在，并提供了更新的证据：在多个 UI 会话之间身份值交叉后，Console 的停止操作会中断正在进行的飞书对话。涉及多端会话隔离与请求生命周期管理，需要维护者重点关注。
- **Issue #7085（新功能，3 条评论）**：[按频道独立配置模型](https://github.com/agentscope-ai/QwenPaw/issues/7085)
  该提议对多平台用户非常实用（钉钉、微信、Console 各自绑定不同模型）。评论数不多但反映了 PR #6302 所推动的模型路由统一能力尚不能完全满足用户对“按频道”级的精细化控制需求。

## 5. Bug 与稳定性

按严重程度排列：

- **高 - Agent 执行工具调用时必现崩溃（Issue #7063，已关闭）**：[Agent 执行工具调用时必现崩溃](https://github.com/agentscope-ai/QwenPaw/issues/7063)
  `agentscope` 在 `_execute_tool_call` 中对 coroutine 错误地使用了 `async for`（应为 `await`），导致 `TypeError`。该问题已关闭但未见对应修复 PR，需确认是否为直接 push 修复或已通过其它方式解决。
- **高 - OneBot 频道传 QQ 短期图片 URL 给模型，签名过期后毒化会话（Issue #7088，已关闭）**：[OneBot 频道将过期 QQ 图片 URL 传入模型导致 400 错误](https://github.com/agentscope-ai/QwenPaw/issues/7088)
  NapCat 等 OneBot 实现返回的 `rkey` 签名 URL 有效期约 2 小时，过期后模型下载失败，且历史中的过期 URL 会进一步污染后续每次回复。这会导致用户体验严重受损。建议考虑在传给模型前本地缓存媒体或做 URL 有效期检查。修复 PR 暂未关联。
- **中 - Console 停止请求取消飞书会话（Issue #7011，活跃）**：[Console stop request can cancel an active Feishu session](https://github.com/agentscope-ai/QwenPaw/issues/7011)
  多 UI 会话下会话身份标识交叉导致操作互相干扰。已有 6 条评论讨论但无修复 PR 跟进。
- **中 - 图片附件在会话重载后丢失（Issue #7051，已关闭）**：[Console 会话重载后图片附件丢失，前端显示破碎缩略图](https://github.com/agentscope-ai/QwenPaw/issues/7051)
  历史消息中的图片在重新打开会话后无法渲染。虽已关闭，但同属媒体处理链路问题，建议回归测试。
- **中 - 结构化输出类未完整定义导致初始化失败（Issue #7082，活跃）**：[Model 'unknown' execution failed: _StructuredOutputDynamicClass is not fully defined](https://github.com/agentscope-ai/QwenPaw/issues/7082)
  Pydantic 动态类定义不完整（提示需要定义 Optional 并调用 `model_rebuild`），影响 Console 渠道初始化，目前无明确修复 PR。
- **低 - 插件热重载后运行时钩子丢失（Issue #7077，已关闭）**：[Plugin runtime hooks silently lost after workspace reload](https://github.com/agentscope-ai/QwenPaw/issues/7077)
  工作区 reload 时插件通过 `api.register_runtime_hook()` 等注册的回调被静默丢弃，对插件生态健康有潜在影响，已被关闭但需确认修复方案。
- **低 - 历史会话仅一条时无法打开（Issue #7084，活跃）**：[历史对话只有一条时，打开新聊天后点不开历史会话](https://github.com/agentscope-ai/QwenPaw/issues/7084)
  新开聊天后若历史列表中只有一条记录，点击无反应，发送一条消息创建新会话后才恢复正常。疑似前端列表状态问题。
- **配套修复 PR 已就绪**：
  - [PR #7087](https://github.com/agentscope-ai/QwenPaw/pull/7087) 解决历史媒体 URL 被直接转发给模型后端导致防盗链 403 的问题，采用客户端本地化后“再上传”策略。
  - [PR #6986](https://github.com/agentscope-ai/QwenPaw/pull/6986) 修复 Sandbox 被杀毒软件拦截的问题（仍处于开放状态）。

## 6. 功能请求与路线图信号

- **按频道独立配置模型（Issue #7085）**：[Feature: 按频道独立配置模型](https://github.com/agentscope-ai/QwenPaw/issues/7085)
  用户明确希望不同渠道绑定不同模型（如钉钉用 GPT-4o、微信用 qwen-max、Console 用本地模型）。当前全局/智能体级配置无法满足，与 PR #6302 的“模型路由统一”方向契合，很可能被纳入下一版本的模型路由设计中。
- **智能体协作在同一会话窗口内完成（Issue #6925）**：[智能体协作希望在一个会话窗口里](https://github.com/agentscope-ai/QwenPaw/issues/6925)
  当前多智能体协作时每个任务创建新会话，用户需要频繁切换。说明工作区（Workspace）与会话绑定机制需要提供“同屏协作”视图。
- **增加定时任务运行细节（Issue #7075）**：[定时任务的运行细节展示](https://github.com/agentscope-ai/QwenPaw/issues/7075)
  用户希望在任务运行中（尤其耗时较长任务）能看到开始时间、运行时长、结束时间与结果，而不只是失败时才给出信息。
- **可选 PowerContext 长期记忆后端（Issue #7079 + PR #7080）**：[Add optional PowerContext pluggable long-term memory backend](https://github.com/agentscope-ai/QwenPaw/issues/7079)
  社区贡献者提出了基于 `BaseMemoryManager` 的插件化记忆后端，已提供实现 PR，方向与现有架构一致，合入希望较大。
- **新提供商接入持续活跃**：
  - [PR #6515](https://github.com/agentscope-ai/QwenPaw/pull/6515) 新增火山引擎 Agent Plan 与小米 MiMo V2.5 的内置支持（自 7-28 开放至今）。
  - [PR #6817/#7081](https://github.com/agentscope-ai/QwenPaw/pull/6817) AnySearch 集成的第一版已关闭，新的重构版本已开启，确认 MCP env-ref 头绑定相关修复被继续推进。

## 7. 用户反馈摘要

- **MCP 工具升级路径不清晰**（#6405）：多位用户对 2.0 之后 MCP 工具名变更与“找不到工具”的报错产生困惑，尽管 Issue 已关闭，但反映工具解析的报错信息可能不够直观、文档指引不足，建议优化报错提示并补充升级指南。
- **多端会话互相干扰**（#7011）：用户指出 Console 的“停止”操作会意外取消飞书中的会话，且该问题在更新后依旧。这体现了用户对多会话隔离性和操作精确性的高要求。
- **媒体文件处理链路的痛点**（#7088、#7051、#7036、#7087）：从 QQ 图片 URL 过期、图片附件重载丢失再到下载控件、媒体 URL 本地化，社区对图片/附件的处理关注度很高，核心诉求是**可靠、持久且可控**的媒体体验。
- **模型配置精细化诉求**（#7085）：用户希望“一个渠道一个模型”，比如用最快的模型响应钉钉、用中文优选的模型服务微信、用本地模型做测试，反映出真实的多场景部署需求。
- **对 2.1.0 新功能的认可**：虽然未直接出现正面表扬评论，但从多个小体量 UI/UX PR（#7036、#7083、#7017）被快速合入和反馈来看，Console 端的打磨方向是被社区接受并持续收获贡献的。

## 8. 待处理积压

- **[PR #6302] feat: unify provider discovery, model metadata, routing, and agent controls**：7-21 开放，仍在活跃更新
  这是当前最重量级的 PR，涉及模型路由与 Agent 控制的大统一，直接影响 #7085 等需求的落地。开放近一个月，建议维护者评估拆分或加速评审，以免与社区后续重复实现冲突。
- **[PR #6515] feat(providers): add Volcengine Agent Plan and Xiaomi MiMo V2.5 API as built-in providers**：7-28 开放
  新增两个国内用户常用的提供方接入，持续维护中（8-17 仍有更新），使用者期待较高。
- **[PR #6719] feat(chat): add persistent workspace artifact cards**：8-05 开放，仍活跃
  实现聊天回合中工作区工件卡片与持久化，与 DataPaw 功能互补，可考虑安排在 2.2 版本计划。
- **[PR #6976] feat: session-scoped multi project directories**：8-13 开放
  将项目目录从单一绑定扩展为有序多目录绑定（主目录决定相对路径与 shell cwd），对复杂项目协作工作流有价值，需关注。

---

**报告日期**：2026-08-18
**数据来源**：[CoPaw GitHub 仓库](https://github.com/agentscope-ai/CoPaw) Issues / Pull Requests 页面
**总结**：CoPaw 正处在 v2.1.0 后的高频迭代期，开发和社区反馈都在加速。一方面 Console 体验持续打磨，另一方面 2.1.0 引入的若干回归（图片附件、会话取消、Token 计数）正在被逐一清理。项目整体健康，社区贡献者活跃，但仍需优先处理工具调用崩溃、会话隔离与媒体 URL 过期这三个高影响力问题。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-18

## 1. 今日速览

过去 24 小时内，ZeroClaw 仓库保持高强度活跃：共更新 50 条 Issue（43 条新开/活跃，7 条关闭）与 50 条 PR（34 条待合并，16 条已合并/关闭），无新版本发布。**安全与架构类 RFC 仍是社区讨论的核心**，动作预算原子化（#9996）、Gemini API Key 泄露（#9973）、渠道附件下载边界（#10000）等安全修复已在本日合入。项目正处于 v0.9.0 安全/架构里程碑的密集实施期，但需关注 RFC 决策队列（#8692）的持续积压与 Windows 平台测试覆盖（#7462）的推进进展。

## 2. 版本发布

过去 24 小时无新版本发布。

## 3. 项目进展

本日共合并/关闭 16 个 PR，按主题归类如下：

### 安全加固（高优先级）
- **[#9996] fix(security): make action budget accounting atomic** — 修复 `RateLimitedTool` 在并发调度下的非原子预算检查（对应 Issue #9849），并消除 Coding-agent 工具动作预算双计费问题（Issue #9594）。这是今日最重要的运行时正确性修复，采用"先预留、后提交"策略。 [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/9996)
- **[#9973] fix(providers): keep Gemini API keys out of URLs** — 将 Gemini API Key 从生成/预热请求 URL 迁移至 `x-goog-api-key` 头，避免密钥经 URL 日志/诊断泄露。 [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/9973)
- **[#10000] fix(channels): bound QQ and Mattermost downloads** — 为 QQ 和 Mattermost 渠道的附件下载引入共享的受限 HTTP 响应读取器，分别执行 10 MiB 与 25 MiB 边界。 [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/10000)
- **[#9993] fix(email): stop implicit attachment file reads** — 阻止 Email 渠道把空载荷的显示文件名隐式读取为本地文件。 [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/9993)
- **[#9612] fix(channels): tie the WhatsApp Cloud approval token to a guard so no exit orphans it** — 修复 WhatsApp Cloud 审批 token 在异常退出时残留为持有凭据的问题。 [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/9612)

### 正确性与配置修复
- **[#9765] fix(sop): load SOP definitions from the shared workspace, not data_dir** — 修复 SOP 引擎错误地从 `data_dir` 而非共享工作区加载定义的问题。 [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/9765)
- **[#9544] fix(delegate): honor configured provider fallbacks** — 委托目标改用规范会话构建器，使 fallback 配置在代理场景真正生效。 [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/9544)
- **[#9547] chore(channels): upgrade CPAL to 0.18** — Voice Wake 通道升级至 CPAL 0.18.1，统一音频 API。 [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/9547)

### CI / 测试基建
- **[#9398] ci(tests): add scheduled macOS and Windows tests** — 新增 nightly 跨平台测试矩阵，响应 Issue #7462 的 Windows 覆盖缺口。 [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/9398)
- **[#10039] ci(clippy): share Clippy command runner across workflows** — 提取 `run_clippy.sh` 共享脚本，避免三个 Clippy 工作流逻辑漂移。 [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/10039)
- **[#10043] ci(lint): remove duplicate architecture test guards** — 剔除 Lint 中重复的架构测试调用，明确 Test 工作流为 owner。 [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/10043)
- **[#10010] test(cron): avoid ETXTBSY race in custom shell test** — 用 symlink 替代运行时写入的临时可执行文件，消除测试竞态。 [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/10010)

**整体判断**：项目在本日完成了多项安全漏洞修复与 CI 基线加固，特别是 #9996 与 #9973 属于直接影响生产安全的修订，表明维护者正在密集处理 0.9.0 安全架构里程碑的技术债。

## 4. 社区热点

今日讨论最活跃的 Issue 集中于**架构治理与开放协议兼容**：

- **[#6808] RFC: Work Lanes, Board Automation, and Label Cleanup**（23 评论）— 已进入 0.8.4 落地阶段，讨论点聚焦"如何减少维护者手动跟踪"。 [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)
- **[#8603] RFC: ZeroClaw Chat Completions profile**（23 评论）— 呼声较高：社区希望接入 Open WebUI、LobeChat、Continue.dev、LangChain 等 OpenAI 协议生态。该 RFC 若落地将显著降低接入门槛。 [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)
- **[#8303] RFC: Goal mode v1 — bounded foreground Matrix work**（22 评论）— 围绕跨多轮 Agent 的持久化目标执行，属于 Agent 能力深化的核心方向。 [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)
- **[#7155] RFC: Per-execution confirmation tier for high-risk shell commands**（20 评论）— 社区对高危命令执行策略（allow/ask/deny）的诉求强烈，已有 Rev 3 范围收敛。 [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)
- **[#9487] RFC: Runtime-owned conversation sessions and transport surface adapters**（19 评论）— 运行时会话所有权与传输适配器，与 #9488、#9600 形成边界协同。 [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)

**共性分析**：社区讨论呈现"平台化"趋势——希望 ZeroClaw 减少自成一体的协议栈，转向兼容 OpenAI 生态、统一运行时会话与安全策略，并提供可插拔的轻量核心。

## 5. Bug 与稳定性

按严重程度排列：

| 严重级 | Issue / PR | 状态 | 说明 |
|--------|-----------|------|------|
| **S2 高** | [#7462] 74 test failures on Windows | 开放，无直接 fix PR | Unix-only 命令、路径语义、代码页 936 导致 74 个测试失败，CI 长期只跑 Linux。已有 #9398 合入，但需验证是否真正覆盖。 [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) |
| **S2 高** | [#9849] RateLimitedTool 非原子预算检查 | **已关闭（PR #9996）** | 并发调度下 max_actions_per_hour 可能被超额消耗。 |
| **S2 高** | [#9594] Coding-agent 工具动作预算双计费 | **已关闭（PR #9996）** | 同一次工具调用被 `SecurityPolicy::enforce_tool_operation` 记录两次。 |
| **S2 中** | [#10023] Fallback 日志记录请求模型而非实际服务模型 | 开放，暂无 PR | 日志误导运维排查。 [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10023) |
| **安全修复（已合入）** | #10000 / #9993 / #9973 / #9612 | 已合并 | QQ/Mattermost 下载边界、Email 隐式文件读取、Gemini Key 入 URL、WhatsApp token 孤儿问题均已修复。 |

## 6. 功能请求与路线图信号

多个 RFC 仍处活跃讨论期，结合已合入的 PR 可判断：

- **OpenAI Chat Completions 兼容（#8603）**：社区需求强烈的接入层功能，涉及 WebSocket、ACP、webhook 之外的第四种对外协议。若通过，Open WebUI 等工具可无缝对接。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)
- **运行时会话所有权与传输适配（#9487）**：与 #9488（统一附件架构）互为表里，是 v0.9.0 安全边界重建的核心。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)
- **轻量核心 / 外部化集成（#6165）**：讨论是否将 MCP 等长期尾集成移出默认核心，支持按需安装。已获 15 条评论，`needs-maintainer-review` 状态。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6165)
- **统一 catalog 契约（#9346）**：为插件 / 能力 / 配置 / 运行时状态定义产品级目录，属于长期架构项。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9346)
- **Hailo-Ollama 原生支持（PR #9109）**：待合并的 XL 级功能 PR，增加 `hailo_ollama` 提供方，适配边缘硬件推理。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/9109)

**路线图判断**：v0.9.0 已明确包含 auth、安全加固、gateway 边界、工具策略，上述 RFC 大多与之一致，预计部分将随 0.9.0 里程碑落地。

## 7. 用户反馈摘要

从今日 Issue 评论中可提炼以下真实痛点：

- **RFC 流程成为负担**（#9496）：维护者与贡献者均反映"七天的讨论期 + 广泛一致要求 + 手动票数协调"拖慢决策。Rev 多次被要求收敛范围，表明流程亟待简化。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9496)
- **Windows 开发者被 CI 排除**（#7462）：Windows 用户明确反馈"CI 不跑，问题到发布才暴露"。新增的 scheduled macOS/Windows workflow（#9398）是对此的直接回应，但仅限 nightly，需观察执行效果。
- **默认配置的安全性**（#9397）：WhatsApp Web 的 `allowed_groups` 空列表默认放行所有群组，用户要求改为 permit-none。这表明社区对"安全默认值"有明确预期。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9397)
- **配置热更新不可见**（#7897）：保存配置后运行时子系统仍使用旧状态，直到 `/admin/reload` 重建，用户认为"保存成功但不生效"是误导。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7897)
- **日志可诊断性不足**（#10023）：fallback 模型日志显示请求模型而非实际服务模型，增加排障成本。同类诉求在 PR #9056（cause-specific provider failure diagnostics）中亦有体现。

## 8. 待处理积压

需维护者重点关注的长尾项：

- **[#6165] RFC: Prefer a lighter ZeroClaw core through external integrations** — 创建于 2026-04-27，15 条评论，`needs-maintainer-review` 已挂 3 个多月，涉及核心瘦身方向性决策。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6165)
- **[#6653] Feature: Define host-architecture policy for emulated installs** — 5 月 14 日创建，7 条评论，仍开放且无 maintainer 回应标签。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6653)
- **[#9056] PR: surface cause-specific provider failure diagnostics** — 7 月 14 日创建，已标记 `stale-candidate`，需要 author 响应或 maintainer 介入。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/9056)
- **[#9808] chore(deps): bump rust-all group with 46 updates** — 依赖机器人提交的大批量依赖更新（tokio、clap 等），因风险高（risk:high）待合并中，需安排 reviewer 处理。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/9808)
- **[#10038] PR: reject invalid session_target instead of isolating** — 已标记 `needs-author-action`，等待贡献者补充信息。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/10038)

---

**健康度总评**：9/10。安全修复与 CI 基建推进扎实，社区讨论高质量且议题集中；主要风险在 RFC 决策队列长度与 Windows 平台长期覆盖缺口，需维护者在 0.9.0 排期中明确优先级。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*