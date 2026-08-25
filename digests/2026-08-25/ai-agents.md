# OpenClaw 生态日报 2026-08-25

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-08-24 23:13 UTC

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

# OpenClaw 项目动态日报 — 2026-08-25

## 1. 今日速览

- 项目活跃度极高：24 小时内共更新 500 条 Issues（新开/活跃 476，关闭 24），500 条 PRs（待合并 425，合并/关闭 75），另有 1 个新版本发布。
- 发布 v2026.8.1-beta.3，重点新增 GPT-5.6 Sol/Terra/Luna/Ultra 推理支持与 Control UI 首次运行设置改进。
- 当前积压大量 P1 级稳定性 Bug，集中在消息投递丢失、僵尸进程积累、多渠道（Feishu/Telegram/QQBot）投递失败，社区反馈积极且多数附带详细复现步骤。
- 值得注意：#108520 的 P0 级 iOS 回归问题已持续 40 天未解决，另有 4 个 P1 级长期 Bug 已存在超 4 个月。
- PR 合并率为 15%（75/500），评审带宽可能成为项目推进瓶颈。

## 2. 版本发布

**v2026.8.1-beta.3**（2026-08-25 发布）

主要更新内容：
- **GPT-5.6 全家族推理支持**：在 OpenClaw 核心与 Codex 运行时中新增 GPT-5.6 Sol、Terra、Luna 和 Ultra 推理能力。
- **Control UI 首次运行设置**：完成模型验证后，引导用户继续配置 Custodian 与可选渠道。
- **Puppeteer 兼容 CDP 中继**：支持配对 Chrome 会话的 CDP（Chrome DevTools Protocol）中继。

⚠️ 迁移注意事项：
- 升级后需验证渠道消息投递，尤其是 Feishu 和 Telegram（参见 [Issue #114020](https://github.com/openclaw/openclaw/issues/114020)）。
- 使用 beta 标签安装外部官方插件时，确认插件与核心版本一致（参见 [Issue #97680](https://github.com/openclaw/openclaw/issues/97680)）。

## 3. 项目进展

今日合并/关闭 75 个 PR，以下为关键合入项：

- [PR #128371 fix(release): authorize focused beta evidence](https://github.com/openclaw/openclaw/pull/128371)：解决 beta.3 发布阻塞，允许发布验证图仅重跑失败分支，不再强制全量重复。
- [PR #123975 fix(scripts): clean up tsgo process trees on timeout or signal](https://github.com/openclaw/openclaw/pull/123975)：修复 tsgo 编译器进程树泄漏，避免 wedged 进程残留。
- [PR #125471 fix(models): keep Claude CLI OAuth available in Control UI](https://github.com/openclaw/openclaw/pull/125471)：修复 Gateway 重启后 Claude CLI OAuth 刷新所有权丢失，并消除矛盾的 `anthropic: missing` 状态。
- [PR #126424 fix(gateway): keep conversation delivery within agent bindings](https://github.com/openclaw/openclaw/pull/126424)：修复多 Agent 操作者通过 Conversation 工具将消息投递到错误 Agent 边界的问题。
- [PR #116489 feat(security): require acknowledgement for install policy warnings](https://github.com/openclaw/openclaw/pull/116489)：安装策略警告现需操作者显式确认，并支持 `security.installPolicy` 返回 `warn` 状态。

**整体判断**：项目在发布流程自动化、进程生命周期管理、OAuth 稳定性、多 Agent 消息边界和安全策略上均有实质修复，但量大面广的 P1 消息丢失类问题仍待合入。

## 4. 社区热点

| 议题 | 评论数 | 主题 | 链接 |
|------|--------|------|------|
| #125626 | 18 | Release validation: v2026.8.1-beta.2 验证流程 | [链接](https://github.com/openclaw/openclaw/issues/125626) |
| #67777 | 12 | 子代理完成消息在直接投递超时/排空/孤立清理时丢失 | [链接](https://github.com/openclaw/openclaw/issues/67777) |
| #97616 | 9 | Hook/Tool 子进程 Zombie 积累导致运行时退化 | [链接](https://github.com/openclaw/openclaw/issues/97616) |
| #10687 | 9 | 完全动态模型发现（OpenRouter + 其他） | [链接](https://github.com/openclaw/openclaw/issues/10687) |
| #6757 | 8 | Agent 自行触发上下文压缩（self-compact tool） | [链接](https://github.com/openclaw/openclaw/issues/6757) |

**分析**：社区最关心的是**消息投递可靠性**（#67777）、**系统长期运行稳定性**（#97616，获 1 👍）及**模型目录灵活性**（#10687，获 3 👍）。Release validation issue 获得 18 条评论，说明社区愿意参与验证，但现有流程要求每位测试者通过 validation skill 提交最终评论，流程偏重且易阻塞发版。

## 5. Bug 与稳定性

**P0 级别**

- [#108520](https://github.com/openclaw/openclaw/issues/108520)（iOS，持续 40 天）：iOS App 自动更新后 Talk Mode 完全失效，Gateway 连接正常但无功能，影响 iPhone 17 Pro Max 且单独设备复现。
- [#107707](https://github.com/openclaw/openclaw/issues/107707)（数据丢失，P0）：Skill Workshop Apply 将提案内容逐字覆盖 `SKILL.md`，原始技能内容丢失；与之相关的 [#125570](https://github.com/openclaw/openclaw/issues/125570) 表明 description frontmatter 也会被覆盖并破坏技能路由。

**P1 级别（节选）**

| Issue | 问题描述 | 修复状态 |
|-------|---------|---------|
| [#67777](https://github.com/openclaw/openclaw/issues/67777) | 子代理完成消息在直接投递超时/排空/孤立清理时丢失，fallback 队列也失败 | 无 fix PR |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | Hook/Tool 子进程 zombie 积累（`openclaw-hooks`/`bash`/`codex` 等），导致运行时降级 | 有 fix PR |
| [#114020](https://github.com/openclaw/openclaw/issues/114020) | 升级 2026.7.2-beta.4 后 Feishu/Telegram 全部 dispatch 失败：`runChannelInboundEvent` 要求 `runDispatchLifecycle` | 无 fix PR |
| [#112259](https://github.com/openclaw/openclaw/issues/112259) | 可见入站消息被静默丢弃：零 payload dispatch 无重试、无死信、无用户可见错误 | 无 fix PR |
| [#126246](https://github.com/openclaw/openclaw/issues/126246) | Telegram 持久化外发消息卡在 `send_attempt_started`，重启后恢复队列仍不投递 | 无 fix PR |
| [#126631](https://github.com/openclaw/openclaw/issues/126631) | Sandbox 技能 bind-mount 创建 root 拥有的 `/workspace/.openclaw`，uid 1000 用户被锁死 | 有 fix PR |
| [#126900](https://github.com/openclaw/openclaw/issues/126900) | `maxActiveTranscriptBytes` 压缩后仍超阈值时无限循环压缩，渠道被卡死 | 有 fix PR |
| [#126906](https://github.com/openclaw/openclaw/issues/126906) | 拒绝 write 工具静默禁用记忆持久化，agent 仍报告保存成功 | 无 fix PR |
| [#126458](https://github.com/openclaw/openclaw/issues/126458) | 自定义 openai-completions 未指定 maxTokens 时默认 8192，thinking 截断 tool-call JSON | 有 fix PR |
| [#82020](https://github.com/openclaw/openclaw/issues/82020) | 自定义 provider 共享 baseUrl 回归（对 #79640 的跟进），仍在最新版失败 | 无 fix PR |

**趋势**：消息丢失/卡死类 Bug 占比最高，且多条无有效修复 PR；多 issue 被标记 `clawsweeper:needs-maintainer-review` 或 `needs-product-decision`，说明维护者评审积压明显。

## 6. 功能请求与路线图信号

| Issue | 功能请求 | 优先级 | 获赞 | 链接 |
|-------|---------|--------|------|------|
| #10687 | 完全动态模型发现（OpenRouter 优先） | P3 | 3 | [链接](https://github.com/openclaw/openclaw/issues/10687) |
| #6757 | Agent 发起 self-compact 上下文压缩 | P2 | 2 | [链接](https://github.com/openclaw/openclaw/issues/6757) |
| #45508 | WebChat 自托管 STT/TTS 走 Gateway 路由 | P2 | 2 | [链接](https://github.com/openclaw/openclaw/issues/45508) |
| #45771 | 内置 pace-aware 速率限制 | P3 | 2 | [链接](https://github.com/openclaw/openclaw/issues/45771) |
| #53548 | `mode="session"` 解耦线程绑定要求 | P2 | 3 | [链接](https://github.com/openclaw/openclaw/issues/53548) |
| #7406 | Telegram 话题名称人类可读 | P2 | 1 | [链接](https://github.com/openclaw/openclaw/issues/7406) |
| #8673 | OAuth Token 刷新重试逻辑 | P2 | 0 | [链接](https://github.com/openclaw/openclaw/issues/8673) |
| #49740 | Cron 任务自动重试（--retry-count） | P2 | 0 | [链接](https://github.com/openclaw/openclaw/issues/49740) |
| #52803 | Control UI 多 Agent 编排增强 | P2 | 0 | [链接](https://github.com/openclaw/openclaw/issues/52803) |
| #50205 | Gemini API 请求标签（GCP 账单） | P3 | 0 | [链接](https://github.com/openclaw/openclaw/issues/50205) |

**路线图判断**：
- #10687 和 #53548 获 👍 最多，且 #10687 与 OpenRouter 快速变化的模型目录强相关，较可能进入后续版本。
- #6757 与现有 compaction 机制协同度高，已有 [PR #120467](https://github.com/openclaw/openclaw/pull/120467)（允许连续压缩）在推进，相关能力正在落地。
- #49740 Cron 自动重试与 #45771 速率限制反映用户对自主 Agent 生产化运行的需求上升，但均缺 maintainer 关注。

## 7. 用户反馈摘要

从今日活跃 Issues 提炼：

- **可靠性是第一痛点**：多条 issue（#112259、#126246、#67777）报告"消息静默丢失"，用户明确表示系统无重试、无死信、无用户可见失败提示，严重打击生产使用信心。来自 [#112259](https://github.com/openclaw/openclaw/issues/112259) 的原话："the turn dispatches with zero reply payloads, no agent run is ever created, nothing is persisted to the session transcript."
- **beta 版本回归频繁**：用户指出升级 2026.7.2-beta.4 后 Feishu 全渠道不可用（#114020），自定义 provider 共享 baseUrl 的回归在最新版仍存在（#82020），显示 beta 发布前的渠道回归覆盖不足。
- **配置错误不可见**：如 #126906 中，用户 deny write 工具后记忆持久化被静默禁用，"not the operator at startup, not doctor, and not the agent"——系统对配置副作用缺乏可观测性。
- **中文用户群活跃**：#73478（Gateway 无图片输出）、#125838（QQBot slash 命令无回复）、#77685（Feishu 流式卡片内容丢失）等显示 Feishu/QQBot 渠道在生产环境使用广泛，但投递链路缺陷多。
- **文档缺口影响落地**：#78537 用户指出 `allowInsecurePath` 的 Linux uid 校验行为未记录，导致无法使用系统包二进制（如 `/usr/bin/op`）；该 issue 已被标记 `clawsweeper:needs-security-review`。

## 8. 待处理积压

**长期未响应的关键 Issue**

| Issue | 级别 | 创建时间 | 状态 |
|-------|------|---------|------|
| [#108520](https://github.com/openclaw/openclaw/issues/108520) iOS Talk Mode 失效 | P0 | 2026-07-16 | 40 天未解决，`needs-info` |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) 子代理完成消息丢失 | P1 | 2026-04-16 | 4 个月，仅 `source-repro` |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) 动态模型发现 | P3 | 2026-02-06 | 6 个月，`needs-product-decision` |

**等待作者响应的 PR**

- [PR #112932 fix(auth): re-seed only the tombstoned OAuth target](https://github.com/openclaw/openclaw/pull/112932)：已等待作者超 1 个月，涉及 OAuth 刷新槽位替换，标记 `merge-risk: auth-provider`。
- [PR #121799 fix(gateway): usage.status no longer waits on provider HTTP](https://github.com/openclaw/openclaw/pull/121799)：解决 Usage 页在冷缓存下空白问题，PoC 视频已提交，等待作者。
- [PR #123535 fix(ui): avoid session catalog refresh storms](https://github.com/openclaw/openclaw/pull/123535)：Control UI 会话目录刷新风暴，等待作者。
- [PR #121982 feat(macos): default remote connections to WSS](https://github.com/openclaw/openclaw/pull/121982)：默认改用 WSS 而非 SSH 隧道，等待作者。

**积压信号**：500 条 PR 中 425 条待合并，仅 15% 在 24 小时内被合并/关闭。多个 P1 修复 PR（如 #126631、#126900、#126458）挂在 `needs proof` 或 `ready for maintainer look`，建议维护者优先评审带 linked-issue 的高危修复 PR。

---

*本日报由 OpenClaw GitHub 数据自动生成，数据采集窗口为 2026-08-24 至 2026-08-25。*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期：2026-08-25**
**数据窗口：2026-08-24 至 2026-08-25**


## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态已进入**规模化生产可用性冲刺阶段**。12 个样本项目单日合计产生约 760 条 Issue 更新和 800 条 PR 动态，但**消息投递可靠性、进程生命周期管理、跨平台稳定性**等生产级问题正在取代功能创新成为社区首要关切——OpenClaw 的 P1 消息丢失类 Bug 占比最高，CoPaw 出现 20.7GB 内存泄漏，Hermes 在 macOS arm64 上发生 SIGSEGV 崩溃。同时，**协议互操作**（OpenAI Chat Completions、MCP、WSS）和**token/成本可观测性**成为新热点，反映出生态正从"能用"向"好用且省"过渡。生态分层明显：头部项目（OpenClaw 500 Issues/500 PRs/日）主导话题，腰部项目（NanoBot、Hermes、CoPaw、ZeroClaw）在各自细分场景深耕，尾部项目（ZeptoClaw、NullClaw）处于维护期或等待下一增长曲线。

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 动态 | Release | 健康度评估 |
|------|------------|---------|---------|-----------|
| **OpenClaw** | 500（新开/活跃 476，关闭 24） | 500（待合并 425，合并/关闭 75） | v2026.8.1-beta.3 | ⚠️ 高活跃但评审瓶颈明显（PR 合并率 15%），P0 iOS 问题 40 天未解 |
| **NanoBot** | 8 新开 | 26（12 合并/关闭） | 无 | ✅ 健康；社区提案到合并 24 小时内闭环，质量与速度兼顾 |
| **Hermes Agent** | 50（46 活跃，4 关闭） | 50（47 待合并，3 合并/关闭） | 无 | ⚠️ 高强度迭代但 PR 合入缓慢（94% 待合并），SIGSEGV 崩溃需优先响应 |
| **PicoClaw** | 2 | 3（2 合并/关闭） | 无 | 🟡 中等；WebUI 路线明确，但 Slack 媒体 Bug 和 Exa PR 双双 stale |
| **NanoClaw** | 3 | 21（2 关闭） | v2.3.0 | ✅ 活跃；macOS 问题当天报当天修，多提供商框架落地 |
| **NullClaw** | 2 新开 | 1 待合并 | 无 | 🟡 稳定偏低；Docker 依赖 PR 积压 70 天+ |
| **IronClaw** | 22（13 活跃，9 关闭） | 32（17 待合并，15 合并/关闭） | 无 | ✅ 健康；当日 Bug 当日修复（#7845→#7857），CI 整合主线推进中 |
| **LobsterAI** | 3（全为 stale 关闭） | 11（10 合并/关闭） | 无 | 🟡 开发驱动型活跃；Issue 侧偏冷，stale 机制可能掩盖真实问题 |
| **Moltis** | 2 关闭 | 19（16 合并/关闭，3 待合并） | 20260824.01 | ✅ 健康；外部贡献者占比高，安全/功能双线推进 |
| **CoPaw** | 50（31 活跃，19 关闭） | 46（20 待合并，26 合并/关闭） | v2.1.1-beta.2 | ⚠️ 活跃但稳定性承压：内存泄漏 20.7GB、会话串线、任务中断均无明确修复 |
| **ZeptoClaw** | 1 新开 | 0 | 无 | ✅ 稳定维护期；REPL UX 改进建议待响应 |
| **ZeroClaw** | 50（43 活跃，7 关闭） | 50（45 待合并，5 合并/关闭） | 无 | ⚠️ 安全加固与协议互操作双主线推进，但 S0 权限绕过和 fallback 缺陷积压 |

## 3. OpenClaw 在生态中的定位

**生态绝对核心与参照系**。OpenClaw 以单日 500 Issues + 500 PRs 的体量领先第二名（CoPaw/ZeroClaw 各 50）一个数量级，是社区讨论、贡献者参与和 issue 沉淀的中心，多数项目（PicoClaw、NanoClaw、NullClaw、ZeptoClaw 等）从其命名到架构均可见借鉴痕迹。

- **优势**：发布节奏快（beta 版本持续迭代）、功能覆盖最全（GPT-5.6 全家族支持、Control UI、CDP 中继、多 Agent 编排）、社区自组织能力强（release validation issue 获 18 条评论）。生态位类似 Kubernetes 在云原生中的地位。
- **技术路线差异**：相比 Hermes 强调技能沉淀与 Desktop 体验、CoPaw 侧重多智能体协作、NanoBot 聚焦轻量网关，OpenClaw 走**全能型个人 AI 助手**路线，以渠道适配（Feishu/Telegram/QQBot）+ 沙箱/技能体系 + Gateway 架构为支柱。
- **核心风险**：PR 合并率仅 15%（75/500），425 条 PR 待合并；P0 iOS 回归 40 天未解决；消息丢失类 P1 多个无 fix PR。作为生态参照系，其"高活跃、低合并、稳定性欠账"的状态会向整个生态传导负面预期。

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---------|---------|---------|
| **消息投递可靠性与可观测性** | OpenClaw（#67777/#112259）、NanoBot（#5515）、Hermes（#85125）、CoPaw（#7231）、ZeroClaw（#10232） | 消息静默丢失、无重试/死信/用户可见错误；投递状态不可见；错误链丢失。普遍要求**至少一次投递 + 失败可观测** |
| **macOS/Windows 平台稳定性** | NanoClaw（#3497 better-sqlite3 段错误、#3498 更新路径）、Hermes（#94248 SIGSEGV、#90229 文件树卡死） | 平台特定崩溃、路径符号链接处理、UI 状态恢复失败。桌面端体验成为采用瓶颈 |
| **进程/资源生命周期管理** | OpenClaw（#97616 zombie 进程）、NanoBot（#5430 任务组内存释放）、CoPaw（#5720/#7222 内存泄漏）、Moltis（#1236 embedding 崩溃） | 子进程泄漏、长期运行内存增长、无墙钟超时保护。**自动化任务生产化运行的基础设施欠账** |
| **OAuth 与安全加固** | Moltis（#1179 配对签名）、OpenClaw（#125471 OAuth 所有权）、ZeroClaw（#10165 权限绕过）、CoPaw（#7066 refresh_token 持久化） | 安全补丁排队时间长；delegate 权限绕过；OAuth 刷新槽位管理。安全正在从"可选"变"准入门槛" |
| **CI 基础设施统一** | IronClaw（setup-rust composite）、ZeroClaw（#9512 CI 门禁标注）、CoPaw（#7248 Docker 版本派生）、LobsterAI（PR #1193 被 stale 关闭） | 消除本地/CI 环境漂移、减少 flaky 测试、统一测试工具链。项目规模化后的工程化必然需求 |
| **token 成本优化与可观测性** | NanoBot（#5510 条件触发）、Hermes（#94222 缓存命中可见性）、ZeroClaw（#10068 上下文上限）、IronClaw（#7001 缓存前缀稳定化） | 心跳轮询消耗完整 LLM turn；总 token 比竞品高 12%；配置 131072 实际 32k 截断。**成本竞争力决定用户去留** |

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 关键架构差异 |
|------|---------|---------|-------------|
| **OpenClaw** | 全能型个人 AI 助手（多渠道、多模型、Control UI、技能体系） | 开发者 + 极客用户，追求"一个助手管所有" | Gateway 为中心，渠道适配器 + 沙箱 + 技能三大支柱；Go/Rust 混合 |
| **NanoBot** | 轻量级消息网关与自动化触发（FTS5 搜索、条件触发器、cron） | 自托管用户，重视 token 成本与响应速度 | 类型化 usage 契约 + 统一用量后端；条件触发运行时实现零 token 预过滤 |
| **Hermes Agent** | 技能沉淀与闭环（Collective Wisdom）、Desktop 原生体验 | 知识工作者，重视桌面端交互与可审计性 | Desktop 渲染器 + WS-only server；技能正确性机制（bg-review）；macOS 崩溃率高是短板 |
| **PicoClaw** | 嵌入式轻量助手（TUI 优先，WebUI 规划中） | 终端用户、嵌入式场景 | Web 配置路径安全凭据前置校验；Exa 搜索提供商待合并 |
| **NanoClaw** | 多提供商适配（Claude Code/Codex 切换）、Slack 新体验 | 团队协作场景，多模型混用 | AI-coding-CLI 选择器 + 适配器框架；Apple Container 作为会话驱动 overlay |
| **NullClaw** | Zig 语言实现的极小化助手，自托管优先 | 极简主义者、自托管爱好者 | 无 PR 合并/发布，Docker 依赖更新积压 70 天，项目处于停滞期 |
| **IronClaw** | 企业级 Rust 实现，Onboarding 建议与 CI 工程化 | 企业用户，重视可审计性与 CI/CD 集成 | 缓存前缀字节级稳定化（降 token 消耗）；Onboarding 建议基于用户真实数据 |
| **LobsterAI** | 协作编辑器 + AI 技能（渲染器、分享、收藏） | 内容协作团队 | 跨平台缩略图渲染器 + 协作功能；SQLite 写放大优化被 stale 关闭 |
| **Moltis** | 连接器矩阵（xAI OAuth、Slack 共享频道、WhatsApp、Browserless） | 多平台集成需求强的用户 | 订阅 OAuth（设备码）矩阵化；Coder 远程工作区沙箱；节点配对签名校验 |
| **CoPaw** | 多智能体协作与任务编排 | 复杂任务自动化用户 | Creator 子系统（支持 Anthropic/Gemini 协议）；多智能体同会话协作仍在完善 |
| **ZeptoClaw** | REPL 交互优化与命令行体验 | CLI 重度用户 | 待改进：Ctrl+C/Ctrl+D 安全退出、/ 命令入口；处于维护期 |
| **ZeroClaw** | 安全加固 + 开放协议互操作（Chat Completions RFC） | 安全敏感型用户、生态集成方 | 高风险命令拦截（有绕过）、provider 生命周期会计、回退模型 ID 传递缺陷 |

## 6. 社区热度与成熟度

**快速迭代/高活跃层**：OpenClaw（500/500）、CoPaw（50/46）、ZeroClaw（50/50）、Hermes（50/50）、NanoBot（8/26，绝对值低但转化率高）——这些项目日均 PR/Issue 更新频繁，功能与修复并行推进，但普遍面临 PR 评审带宽不足的问题（OpenClaw 15% 合并率、Hermes 6% 合并率）。

**质量巩固/功能打磨层**：IronClaw（22/32）、Moltis（2/19）、NanoClaw（3/21）、LobsterAI（3/11）——当前无大版本发布，聚焦 CI 统一、Bug 修复、连接器扩展、体验优化。此层级的 PR 合并率较高（IronClaw 47%、Moltis 84%、LobsterAI 91%），交付效率优于活跃层。

**维护/低活跃层**：PicoClaw（2/3）、NullClaw（2/1）、ZeptoClaw（1/0）——活跃度显著低于其他项目，无发布或仅小版本迭代，社区讨论稀疏。PicoClaw 的 WebUI 需求（8 👍）和 NullClaw 的 Docker 依赖更新积压表明：即便低活跃项目，也存在明确但未满足的用户诉求。

## 7. 值得关注的趋势信号

1. **可靠性已成为采用的第一道门槛，而非功能丰富度。** 消息静默丢失（OpenClaw #112259：用户原话"nothing is persisted to the session transcript"）、内存泄漏至整机卡死（CoPaw 20.7GB）、配置副作用不可见（OpenClaw #126906）等问题的密集出现，说明 AI 智能体要从"demo 可用"走向"生产可信"，**可观测性、死信队列、配置审计**是必须补的基础设施。对开发者：在构建 agent 时，将投递确认、失败重试、状态持久化作为一等公民设计。

2. **协议互操作正在成为生态的"通用语"。** ZeroClaw Chat Completions RFC（24 条评论）、OpenClaw 的 CDP 中继、Moltis 的 OpenAI 兼容工具 schema、NanoBot 的 provider 统一 usage 契约——不同项目都在向 OpenAI/标准协议靠拢。这预示着**兼容层（OpenAI Chat Completions、MCP、WSS）将成为智能体接入外部生态的事实标准**，自研协议的空间正在收窄。

3. **token 成本与缓存命中率成为新的竞争维度。** Hermes 用户对比实测总 token 高 12%、成本高 58%（#94222）；IronClaw 通过缓存前缀字节级稳定化显著降本；NanoBot 推出条件触发运行时实现零 token 心跳。随着 LLM API 成本成为规模化运营的硬约束，**上下文管理策略、缓存利用率、条件触发等节省 token 的机制将决定产品的成本竞争力**。

4. **安全加固不再是"锦上添花"，而是社区贡献者的入场券。** Moltis 外部贡献者明确表示"想使用 Moltis，但希望先合入安全修复"；ZeroClaw S0 权限绕过被标记 risk:high；CoPaw OAuth refresh_token 持久化修复进入 review。安全类 PR 从提交到合并周期普遍偏长（Moltis 25 天、ZeroClaw 12 天+），**维护者需要建立安全补丁快车道**，否则将流失潜在贡献者与用户。

5. **桌面端体验与移动端稳定性是尚未被征服的"最后一公里"。** Hermes 的 Desktop 会话恢复失败、文件树卡死、布局漂移；NanoClaw 的 macOS 更新路径失效；OpenClaw 的 iOS Talk Mode 40 天未修——**桌面/移动端不是 Web 的简单封装，需要独立的会话状态管理、平台适配与回归测试投入**。对于主攻 Web 的团队，这是差异化机会；对于已涉足桌面的项目，这是当前最大的信任风险点。

6. **CI/CD 工程化水平正在成为项目健康度的先行指标。** IronClaw 投入 12 个 workflow 统一工具链、ZeroClaw 为 CI 门禁标注事故来源、CoPaw 从 package 派生 Docker 边界版本——这些"看不见"的工程投入直接反映在 Bug 修复速度和发布质量上。**建议技术决策者评估开源项目时，将 CI 健康度（合并率、flaky 测试率、构建时长）纳入考量**，它比 star 数更能预测项目的长期维护能力。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-25

## 今日速览

过去 24 小时，NanoBot 保持了较高的社区活跃度：共产生 8 条新 Issue、26 条 PR 动态（12 条已合并/关闭），无新版本发布。多条长期开放的性能与稳定性 PR 集中合并（FTS5 搜索索引、条件触发运行时、统一用量后端），显示项目正从功能迭代阶段向规模化基础设施方向收敛。社区诉求集中于网关稳定性（WebUI 卡死）、流式传输与富消息兼容性，以及提供商扩展（QwenCloud、AnySearch）；较值得关注的是，**Issue #5509 / #5510 分别在当天被实现为 PR #5507 / #5508 并已合并**，体现了社区提案到落地的高效闭环。

## 项目进展

今日有 12 个 PR 被合并/关闭，可归纳为以下四条主线：

**性能与搜索**
- [[#5507] feat(session): SQLite FTS5 full-text search index](https://github.com/HKUDS/nanobot/pull/5507) 已合并。为会话搜索引入 SQLite FTS5 镜像索引，替代原有对 JSONL 文件的线性全扫描，支持安全回退。对应 Issue #5509。
- [[#5508] feat(gateway): ConditionalTriggerRuntime for token-free event pre-filtering](https://github.com/HKUDS/nanobot/pull/5508) 已合并。在网关中新增轻量条件触发器运行时，脚本/外部系统可写入小型条件监视器，仅在条件匹配时唤醒 LLM，显著降低心跳轮询的 token 消耗。对应 Issue #5510。

**用量与可观测性**
- [[#5480] refactor(providers): typed LLM usage contract](https://github.com/HKUDS/nanobot/pull/5480) 已合并。用不可变的类型化 `LLMUsage` 契约替代动态 usage 字典，统一了 OpenAI Chat/Responses、Anthropic、Bedrock 的 token 与缓存语义。
- [[#5481] feat(usage): unified provider usage backend](https://github.com/HKUDS/nanobot/pull/5481) 已合并。在类型化契约基础上建立统一用量后端，为网关管理的 WebUI/TUI 会话记录每次重试的用量行。

**稳定性与超时控制**
- [[#5496] fix(agent): time out no-tools model requests](https://github.com/HKUDS/nanobot/pull/5496) 已合并。修复了无工具请求（格式错误恢复、空响应终结、最大迭代终结）缺少墙钟超时保护的问题。
- [[#5517] test(exec): remove Windows process timing races](https://github.com/HKUDS/nanobot/pull/5517) 已合并。引入显式根退出/子就绪握手，消除 Windows 下进程时序竞态导致的测试偶发失败。

**工作区上下文**
- [[#5506] fix(agent): honor selected project workspace](https://github.com/HKUDS/nanobot/pull/5506) 已关闭。将 WebUI 所选项目暴露给模型作为当前工作目录，并保留共享工具契约前缀，以维护提示缓存复用。

综合来看，今日合并在**会话搜索性能（线性扫描 → FTS5）**与**低成本自动化（全量 LLM 轮询 → 条件触发）**两个方向上是重要的架构级前进。

## 社区热点

- **[[#5350] 请求新增 QwenCloud 提供商路径（与 DashScope 并存）](https://github.com/HKUDS/nanobot/issues/5350)** — 8 月 12 日创建，目前为当日评论最多的 Issue（2 条评论），讨论热度持续。核心诉求是：NanoBot 已有 DashScope 兼容路径，但 QwenCloud 是 Qwen 开发者面向国际的模型平台，且现有用户可能仍在使用 DashScope 的 provider ID/API key/endpoint。社区关心的不只是新增 provider，而是**如何向后兼容地并存两套路径**，避免破坏既有配置。
- **[[#5512] WebUI 在 Gateway 重启后陷入 spinning 状态](https://github.com/HKUDS/nanobot/issues/5512)** — 收到 1 条评论，且已有对应修复 PR [[#5514]](https://github.com/HKUDS/nanobot/pull/5514)。该 Bug 触及前端流式状态的可靠性，影响面广，社区反应较快。
- **[[#5507] 与 [[#5508]](https://github.com/HKUDS/nanobot/pull/5508) 的快速合并** — 两个性能 PR 均由 Issue 提出者在同一天内提交并合入，体现维护者对社区提案的吸纳效率，是今日最值得关注的正向信号。

## Bug 与稳定性

按严重程度排序：

| 严重程度 | Issue | 状态 | 说明 |
|---|---|---|---|
| 高 | [[#5512] WebUI stalls in spinning state after Gateway restart](https://github.com/HKUDS/nanobot/issues/5512) | 开放，已有修复 PR [[#5514]](https://github.com/HKUDS/nanobot/pull/5514) | Gateway 重启后前端永远收不到 `goal_status: idle`，`isStreaming` 卡死。修复方案是在传输层上报 run 被重置时清除前端流状态。 |
| 中 | [[#5516] Telegram 富消息与流式互斥；Bot API 10.1-10.3 drafts 可解](https://github.com/HKUDS/nanobot/issues/5516) | 开放，暂无 PR | `rich_messages: true`（自 #4488/#4539 起 opt-in）与默认的 `streaming: true` 无法同时工作：流式开启时 `sendRichMessage` 永远不会被调用，最终消息总是通过旧式 HTML `editMessageText` 发送。需要利用 Bot API 10.1-10.3 的草稿能力重构。 |
| 中 | [[#5515] fix(agent): observe session reply timeout task failures](https://github.com/HKUDS/nanobot/pull/5515) | 待合并 | `SendSessionMessageTool` 的后台超时投递任务失败被静默丢弃，修复为观察失败并新增回归测试。 |
| 中 | [[#5518] fix(usage): record provider stream timing](https://github.com/HKUDS/nanobot/pull/5518) | 待合并 | 当前 runner 仅在流式完成后填充流式计时，导致 TTFT（首 token 时间）和生成时间缺失。修复为在物理流式请求处测量。 |
| 低 | [[#5349] fix(tests): pass timezone_name to record_token_usage in settings tests](https://github.com/HKUDS/nanobot/pull/5349) | 开放 | 确定性测试失败：每天约 5 小时窗口内因 UTC 默认值与 payload 回读时区不一致而报错。 |

## 功能请求与路线图信号

- **QwenCloud 提供商路径（[#5350](https://github.com/HKUDS/nanobot/issues/5350)）** — 需求明确且讨论延续多日；若维护者认可，预计将作为新 provider 类型加入，与 DashScope 并行。目前暂无对应 PR。
- **AnySearch 集成（[#5505](https://github.com/HKUDS/nanobot/issues/5505)）** — AnySearch 团队主动提出向 `web_search` 工具添加新提供商，支持 API/MCP/Skill 三种接入，且 key-optional、有匿名配额。属外部团队主动贡献，未来有较大合入可能。
- **cron 结果可配置路由（[#5513](https://github.com/HKUDS/nanobot/issues/5513)）** — 将 cron 执行结果定向投递到指定频道，并为累计任务提供批量归档能力，减少自动化消息对私人会话的打扰。与现有 cron 体系契合，属于体验增强型需求。
- **崩溃安全的多步任务账本（[#5511](https://github.com/HKUDS/nanobot/issues/5511)）** — Gateway 重启后多步 agent 任务丢失全部内存进度；提案引入 `tasks.json` 持久化任务账本，原子写入、重启后恢复。直击运维场景，预计会被纳入近期规划。
- **已被社区 PR 实现并合并**：会话搜索 FTS5（[#5509](https://github.com/HKUDS/nanobot/issues/5509) → [#5507](https://github.com/HKUDS/nanobot/pull/5507)）与零 token 条件触发（[#5510](https://github.com/HKUDS/nanobot/issues/5510) → [#5508](https://github.com/HKUDS/nanobot/pull/5508)）——这两个需求当天提出、当天实现、当天合并，是社区驱动开发的最佳例证。

## 用户反馈摘要

- **Telegram 用户对富消息的 opt-in 体验不满意**（[#5516](https://github.com/HKUDS/nanobot/issues/5516)）：用户明确选择开启 `rich_messages`，但因与默认的流式模式互斥而未生效，说明配置项之间存在**未文档化的隐性约束**，容易造成困惑。
- **Gateway 重启场景下 WebUI 卡死是真实痛点**（[#5512](https://github.com/HKUDS/nanobot/issues/5512)）：用户描述后端可能已恢复，但前端永久停在“spinning”状态，需要手动操作才能恢复，说明**网关生命周期管理需要更完善的前后端同步机制**。
- **性能敏感用户认可 token 成本优化方向**（[#5510](https://github.com/HKUDS/nanobot/issues/5510)）：提案者指出“心跳轮询每次 tick 即使无事可做也消耗完整 LLM turn”，这个成本模型在持续运行场景下不容忽视，条件触发运行时可以避免大量无效 token 消耗。
- **外部团队主动贡献生态**（[#5505](https://github.com/HKUDS/nanobot/issues/5505)）：AnySearch 团队以“我们团队”身份发起集成请求，并明确计划提交 PR，说明 NanoBot 的搜索工具抽象具备较好的可扩展性，能为外部服务提供接入入口。

## 待处理积压

以下为长期未合并/未解决的事项，建议维护者关注：

| 类型 | 编号 | 创建时间 | 说明 |
|---|---|---|---|
| Issue | [[#5350] QwenCloud provider](https://github.com/HKUDS/nanobot/issues/5350) | 2026-08-12 | 已开放 13 天，讨论热度在今日仍然最高，但尚无 PR 认领。 |
| PR | [[#4549] feat(heartbeat): add model_override config](https://github.com/HKUDS/nanobot/pull/4549) | 2026-06-26 | 已开放 60 天，为心跳指定更便宜的模型，功能成熟但其 `model`/`model_override` 双别名设计可能与近期配置体系重构产生冲突。 |
| PR | [[#5291] fix(agent): persist subagent conversation transcripts](https://github.com/HKUDS/nanobot/pull/5291) | 2026-08-07 | 已开放 18 天，子代理完整会话记录（工具调用、推理步骤）现在进程结束后即丢失，与 #5511 任务账本需求形成互补。 |
| PR | [[#5344] fix(agent): warn on repeated identical tool calls](https://github.com/HKUDS/nanobot/pull/5344) | 2026-08-11 | 已开放 14 天，针对 agent 卡在重复工具调用的兜底告警；对稳定性有直接价值，建议优先评审。 |
| PR | [[#5430] fix(agent): release completed task groups](https://github.com/HKUDS/nanobot/pull/5430) | 2026-08-18 | 已开放 7 天，修复长期运行 AgentLoop 中已完成任务组未释放导致的内存占用问题。 |

---

**总体评估**：项目健康状况良好，活动集中在性能基础设施（FTS5、条件触发、用量统一）与稳定性修复两大方向。社区提案转换率较高，且有多位外部贡献者持续提交高质量 PR。需关注的是 #5512 这类网关重启场景的体验问题，以及 #4549 等两个月的旧 PR 积压——建议维护者在下个版本窗口前对积压 PR 做一次集中评审/关闭，以免形成社区贡献阻塞。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-25

## 1. 今日速览

过去24小时项目处于高强度迭代状态：50条Issue更新（46条活跃/新开、4条关闭），50条PR动态（47条待合并、3条已合并/关闭），无新版本发布。当前最突出的风险点是多项P1/P2级稳定性问题——包括macOS arm64上Gateway的SIGSEGV崩溃（12份crash报告），以及一批Desktop会话状态恢复与布局持久化相关的回归。社区侧最热门的讨论是[#85125](https://github.com/NousResearch/hermes-agent/issues/85125)（20条评论）提出的"统一deadline层"架构级修复方案，反映了用户对超时/挂起问题结构性解决的高度期待。整体判断：项目功能推进与Bug治理并行，但PR合入节奏偏慢（47/50待合并），稳定性问题正在消耗社区信任。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

**已合并/关闭的重要变更：**

- **[PR #94199](https://github.com/NousResearch/hermes-agent/pull/94199)（已关闭）**：修复OpenRouter provider错误的扁平化处理。统一嵌套/扁平错误包装的解析逻辑，可从纯文本或JSON格式的`metadata.raw`中提取可操作的上游错误信息，并保留provider名称提取能力。对使用OpenRouter的用户排查故障有明显帮助。
- **[Issue #59499](https://github.com/NousResearch/hermes-agent/issues/59499)（已关闭，标记implemented-on-main）**：Kanban任务调度器此前忽略`max_in_progress_per_profile`配置、并发全量启动所有任务的问题已在主分支修复。这项修复对Chrome MCP等有限资源场景有实质意义。

**待合并的关键PR（47条）中值得关注的进展：**

- **[#94245](https://github.com/NousResearch/hermes-agent/pull/94245)**：精简WS-only服务器——从Desktop启动路径中移除FastAPI/uvicorn，改为裸websockets直接调用`handle_ws`。这是作者所述"拆除dashboard layer cake"的第一步，方向明确。
- **[#93508](https://github.com/NousResearch/hermes-agent/pull/93508)**：新增`hermes webapp`，通过浏览器托管真正的Desktop渲染器（非Web Dashboard），由宿主Hermes实例提供`window.hermesDesktop`后端实现，有望统一桌面与Web体验。
- **[#94277](https://github.com/NousResearch/hermes-agent/pull/94277)**：新增确定性的`hermes tools catalog` JSON工具清单，默认只读、支持`--probe`和`--include-plugins`，为审计和CI差异比对提供基础。
- **Hermes Collective Wisdom V1 三连PR堆栈**：**[#93609](https://github.com/NousResearch/hermes-agent/pull/93609)**（可信发布/安装基础）→ **[#93637](https://github.com/NousResearch/hermes-agent/pull/93637)**（私有贡献回路）→ **[#94266](https://github.com/NousResearch/hermes-agent/pull/94266)**（托管消费工作流）。三个PR均已提交，构成完整的技能/智慧共享基础设施。

## 4. 社区热点

| Issue | 评论数 | 热度分析 |
|---|---|---|
| [#85125](https://github.com/NousResearch/hermes-agent/issues/85125) | 20 | "统一deadline层"：4阶段架构级修复，目标结构性消除超时/挂起/卡死问题。背景是积压的400+相关issue，其中77个标题匹配的运行时卡死已被社区triage归纳为7种机制。讨论聚焦在方案的技术选型与分阶段实施路径。 |
| [#25833](https://github.com/NousResearch/hermes-agent/issues/25833) | 10 | 自创技能缺少机制级正确性与执行一致性保证。这是技能闭环的核心短板——Hermes的卖点是"从错误中学习并沉淀技能"，但沉淀出的技能可靠性无法保证。 |
| [#80246](https://github.com/NousResearch/hermes-agent/issues/80246) | 8 | Web UI上下文压缩阈值检查未计入`reasoning_content`，导致DeepSeek/Kimi思维模式的长会话被误判为"上下文溢出"。 |
| [#93888](https://github.com/NousResearch/hermes-agent/issues/93888) | 7 | Desktop向远程Gateway发送8字符本地运行时ID，所有已存会话恢复均报"Session not found"。这是Desktop×Remote Gateway场景的核心阻断问题。 |
| [#90229](https://github.com/NousResearch/hermes-agent/issues/90229) | 6 | Windows 11上Desktop右侧文件树无限期卡在skeleton加载态，刷新按钮也被禁用。 |

**背后诉求总结**：社区当前最强烈的信号集中在两个方向——（1）对超时/挂起这一长期顽疾，用户不满足于零散修复，希望看到架构级方案落地；（2）Desktop应用在会话状态、布局持久化、远程网关互操作等基础体验上的稳定性问题正在密集爆发，且多个issue共享"会话状态恢复失败"的根因，暗示需要一次系统性梳理。

## 5. Bug 与稳定性

**P1 — 严重**

- **[#94258](https://github.com/NousResearch/hermes-agent/issues/94258)**：SQLite会话写入偶发`SystemError`，数据库健康且可写，但会话以"session_persistence_failed"结束。当前标记为duplicate，但P1级别说明影响面大。
- **[#94248](https://github.com/NousResearch/hermes-agent/issues/94248)**：macOS arm64上Gateway在delegate worker到达600秒deadline后17-72毫秒内触发SIGSEGV崩溃。8月19-24日共收集12份Apple原生崩溃报告，其中5份集中在8月24日。已定位到Codex SSL读取路径。

**P2 — 高影响**

- **[#93888](https://github.com/NousResearch/hermes-agent/issues/93888)**：Desktop向远程Gateway发送本地运行时ID，远程会话恢复全部失败。Remote Gateway使用场景被完全阻断。
- **[#90229](https://github.com/NousResearch/hermes-agent/issues/90229)**：Windows 11上Desktop文件树永久卡在skeleton，刷新按钮禁用。
- **[#92818](https://github.com/NousResearch/hermes-agent/issues/92818)**：窗格布局跨重启不稳定，临时预览tile被持久化且无per-profile布局。已有 **[PR #93202](https://github.com/NousResearch/hermes-agent/pull/93202)** 提交（停止持久化临时tile窗格）但尚未合并。
- **[#93981](https://github.com/NousResearch/hermes-agent/issues/93981)**：非loopback的`dashboard.public_url`（如Tailscale地址）强制启用gated WS模式，导致Desktop聊天WebSocket鉴权失败。**[PR #94273](https://github.com/NousResearch/hermes-agent/pull/94273)** 已作为修复提交。
- **[#92701](https://github.com/NousResearch/hermes-agent/issues/92701)**：Docker后端在task_id含冒号时所有工具调用报exit 125 "too many colons"，持久化容器模式下全工具链不可用。
- **[#80246](https://github.com/NousResearch/hermes-agent/issues/80246)**：上下文压缩阈值未计入`reasoning_content`，推理模型长会话误报溢出。
- **[#94137](https://github.com/NousResearch/hermes-agent/issues/94137)**：Desktop Bot模式"Close All"仅视觉隐藏标签页，点击bot后已关闭标签全部复活。
- **[#94260](https://github.com/NousResearch/hermes-agent/issues/94260)**：应用已保存的Desktop布局预设会重挂session tile并跨profile触发`session.resume`，随后ws_orphan_reap和agent init失败。
- **[#94235](https://github.com/NousResearch/hermes-agent/issues/94235)**：通过"Clone from profile"创建的Bot删除后1-2秒内从面板复活（服务端DELETE返回ok但桌面轮询重新创建骨架）。
- **[#94078](https://github.com/NousResearch/hermes-agent/issues/94078)**：Shell启动诊断（如BASH_ENV输出）混入stdout被当作文件操作数据，可能污染`read_file`/`write_file`等结果。
- **[#93865](https://github.com/NousResearch/hermes-agent/issues/93865)**：工具选择器静默丢弃`browser.use_gateway`，但Browser Use CLI仍读取该键，导致托管网关连接断裂。
- **[#56337](https://github.com/NousResearch/hermes-agent/issues/56337)**：Telegram `/command@BotName args`被错误解析为`/commandargs`，命令与参数被合并。
- **[#94254](https://github.com/NousResearch/hermes-agent/issues/94254)**：邮件通道将所有邮件标记为已读且无法通过dashboard禁用，重启后自动恢复启用。隐私风险较高。

**P3/P4 — 低影响**

- **[#94271](https://github.com/NousResearch/hermes-agent/issues/94271)**：ACP会话忽略`agent.max_turns`，回退到90次迭代默认值（P4）。
- **[#94001](https://github.com/NousResearch/hermes-agent/issues/94001)**：Desktop状态栏上下文用量在压缩后显示过期数据，存在跨会话污染（P3）。
- **[#94167](https://github.com/NousResearch/hermes-agent/issues/94167)**：恢复的后台会话标签页标题保持"New session"直到首次激活（P3）。
- **[#91245](https://github.com/NousResearch/hermes-agent/issues/91245)**：Desktop右栏启动时可能隐藏但toggle显示为打开，或文件树卡在加载态（P2，可能与#90229同源）。

**稳定性小结**：P1级别出现崩溃类问题（SIGSEGV、SystemError），需要优先响应。Desktop会话状态领域已形成系统性病灶——#93888、#94137、#94260、#94235、#90229、#92818六个issue从不同角度指向会话生命周期管理缺陷。已有若干修复PR在途但尚未合并，建议维护者加快合入节奏。

## 6. 功能请求与路线图信号

**高关注度新功能需求**

- **[#85125](https://github.com/NousResearch/hermes-agent/issues/85125)**：统一deadline层——4阶段架构修复。若被采纳为路线图项目，将是里程碑级重构，直接关系400+超时/挂起issue的最终走向。
- **[#25833](https://github.com/NousResearch/hermes-agent/issues/25833)**：自创技能正确性与执行一致性的机制级保证。这是技能自动创建闭环信任基础。
- **[#90654](https://github.com/NousResearch/hermes-agent/issues/90654)**：RFC——应用内浏览器闭环：元素选择器+Agent页面操作，用户可"指"页面元素、Agent可"操作"页面。
- **[#33683](https://github.com/NousResearch/hermes-agent/issues/33683)**：Discord语音频道参与模式：加入语音频道、转录、走Agent管线、语音回复。
- **[#94222](https://github.com/NousResearch/hermes-agent/issues/94222)**：降低单请求上下文足迹并暴露缓存命中可见性。用户实测对比：相同任务Hermes比Reasonix总token多12%（86.1M vs 76.7M），成本高58%。这个需求与成本直接挂钩，用户诉求强烈。
- **[#94251](https://github.com/NousResearch/hermes-agent/issues/94251)**：内置"计划-然后-批准"模式——用户批准前不写入任何数据（当前标记为duplicate）。

**已有PR支撑、预计进入下一版本的功能**

- **Hermes Collective Wisdom V1**：三连PR（[#93609](https://github.com/NousResearch/hermes-agent/pull/93609)、[#93637](https://github.com/NousResearch/hermes-agent/pull/93637)、[#94266](https://github.com/NousResearch/hermes-agent/pull/94266)）均已提交，待合并后将成为完整的技能/智慧共享基础设施。
- **[#93508](https://github.com/NousResearch/hermes-agent/pull/93508)**：浏览器中的Desktop渲染器——统一桌面与Web体验。
- **[#94245](https://github.com/NousResearch/hermes-agent/pull/94245)**：精简WS-only服务器——推动架构瘦身。
- **[#74424](https://github.com/NousResearch/hermes-agent/pull/74424)**：在资产用量中展示Kimi Coding Plan配额。
- **[#94277](https://github.com/NousResearch/hermes-agent/pull/94277)**：确定性工具能力目录——审计与CI友好。

**路线图信号**：两个明确的技术方向——（1）成本可见性与token使用优化（缓存命中、明细展示）；（2）架构瘦身（去FastAPI依赖、WS-only server），以及知识共享生态（Wisdom V1）作为下一个大的功能支柱。

## 7. 用户反馈摘要

- **成本焦虑显著**：[#94222](https://github.com/NousResearch/hermes-agent/issues/94222)，用户对比同一任务在Reasonix与Hermes Studio上的消耗：Hermes API请求更少（257 vs 285）但总token更多（86.1M vs 76.7M）。用户认为多余token来自上下文管理策略，希望获得缓存命中可见性以优化成本。这是直接的用户流失风险信号。
- **长会话体验受损**：[#80246](https://github.com/NousResearch/hermes-agent/issues/80246)，推理模型长会话误报"context overflow"，用户被迫提前切新会话，而实际上下文远未用满。对深度使用DeepSeek/Kimi思考模式的用户尤其困扰。
- **Desktop基础体验是当前最大槽点**：文件树卡死（[#90229](https://github.com/NousResearch/hermes-agent/issues/90229)）、会话无法恢复（[#93888](https://github.com/NousResearch/hermes-agent/issues/93888)）、布局漂移（[#92818](https://github.com/NousResearch/hermes-agent/issues/92818)）、Bot删除后复活（[#94235](https://github.com/NousResearch/hermes-agent/issues/94235)）等多点并发，Windows用户受影响最重，涉及日常基本操作。
- **邮件通道存在隐私风险**：[#94254](https://github.com/NousResearch/hermes-agent/issues/94254)，邮件被自动标为已读、且用户无法通过dashboard禁用通道。这类"无法关闭"的能力会让用户产生对数据自主权的担忧。
- **集成生态诉求仍在**：[#7895](https://github.com/NousResearch/hermes-agent/issues/7895)，OpenWebUI集成的图片传递问题已持续4个月+，3个👍表明这是真实存在的集成断层。
- **积极信号**：社区整体反馈建设性强，对#94245（精简WS-only）、#93202（修复布局持久化）等PR的快速迭代方向表示认可，未见对抗性情绪。

## 8. 待处理积压

**长期未响应的关键Issue**

- **[#7895](https://github.com/NousResearch/hermes-agent/issues/7895)**（4月11日创建）：OpenWebUI图片不传递。已积压4个半月，3个👍，无人认领。持续压制OpenWebUI集成场景。
- **[#25833](https://github.com/NousResearch/hermes-agent/issues/25833)**（5月14日创建）：自创技能正确性保证。3个多月，10条评论讨论但无结论。技能闭环信任缺失，与Wisdom V1的发布计划直接相关。
- **[#33683](https://github.com/NousResearch/hermes-agent/issues/33683)**（5月28日创建）：Discord语音播放模式。近3个月，仅2条评论，功能前景未明确。
- **[#56337](https://github.com/NousResearch/hermes-agent/issues/56337)**（7月1日创建）：Telegram命令解析bug。近2个月，有清晰复现步骤但未分配负责人。
- **[#73965](https://github.com/NousResearch/hermes-agent/issues/73965)**（7月29日创建）：bg-review后台审查使用turn-scoped ContextVar，导致多轮view→patch工作流失效。一周内4个技能、13次patch尝试全部静默失败。此问题直接戳中技能自动创建闭环的可靠性。

**积压PR风险**

- **[#74424](https://github.com/NousResearch/hermes-agent/pull/74424)**（7月29日提交）：Kimi配额显示，近1个月未合并。
- **[#84297](https://github.com/NousResearch/hermes-agent/pull/84297)**（8月12日提交）：Kanban附件预览，近2周未合并。
- **[#89487](https://github.com/NousResearch/hermes-agent/pull/89487)**（8月18日提交）：侧边栏折叠/展开快捷键，1周未合并。

**维护者提醒**：#73965（bg-review静默失败）值得优先处理——技能自动创建是Hermes核心差异化能力，静默失败13次意味着用户已实际遭遇该功能不可用；#7895则持续压制OpenWebUI集成场景的满意度。建议上述积压按"影响核心体验→影响集成生态→增强功能"的优先级排期，并在相关issue中更新处理计划，避免社区进一步流失。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

## PicoClaw 项目动态日报 — 2026-08-25

### 1. 今日速览

PicoClaw 项目今日活跃度处于中等水平：过去 24 小时内共有 2 条 Issue 更新和 3 条 PR 更新，无新版本发布。核心亮点包括：一个高优先级 WebUI 功能请求（#806）持续活跃并获得社区认可；两个 PR（#1929、#1551）被合并/关闭，解决了 Web 配置路径的安全凭据校验及多分支修复合并问题。与此同时，一个关于 Slack 媒体上传失败的 Bug（#3338）和一个 Exa 搜索提供商 PR（#3299）均被标记为 stale，需维护者关注。整体来看，项目正处于功能重构与稳定性修复并行的活跃期。

### 2. 版本发布

今日无新版本发布。

### 3. 项目进展

今日有 2 个 PR 被合并/关闭，1 个 PR 仍在待合并状态：

- **[CLOSED] PR #1929 — fix: apply security credentials before config validation in web handlers**（[链接](https://github.com/sipeed/picoclaw/pull/1929)）
  - 修复了 Web 配置保存（PUT/PATCH `/api/config`）时，即使 `.security.yml` 中已正确存储 token，仍因 `validateConfig()` 校验时机过早而抛出 "channels.pico.token is required" 错误的问题。该修复已将安全凭据的应用前置到配置校验之前，对 Web 管理界面的可靠性有显著改进。
- **[CLOSED] PR #1551 — fix: merge PR #1428 #1422 #1417**（[链接](https://github.com/sipeed/picoclaw/pull/1551)）
  - 合并了三个此前未合并 PR（#1428、#1422、#1417）的修复内容，属于将分散的补丁集中落地的收尾动作，有助于减少积压。

**项目整体向前推进**：Web配置路径的 bug 修复落地，安全与可用性均有所提升；多 PR 合并意味着项目正在清理技术债与过时代码。目前仍有 1 个新功能类 PR（Exa 搜索）待合并。

### 4. 社区热点

- **Issue #806 — [Feature]: Add webUI support (Refactoring now)**（[链接](https://github.com/sipeed/picoclaw/issues/806)）
  - 热度最高：10 条评论，8 个 👍，且被标记为 `priority: high` 和 `type: roadmap`。该 issue 自 2026-02-26 提出，主张为 PicoClaw 构建浏览器 Web UI，以降低非技术用户的使用门槛（TUI 对终端用户友好，但对大众不友好）。
  - **背后诉求**：社区强烈希望项目面向更广泛的用户群体，WebUI 被视为从 "开发者工具" 走向 "大众产品" 的关键路径。其 roadmap 标签和 high 优先级表明维护者已将其纳入规划。

- **Issue #3338 — [BUG] Slack does not attach image media content**（[链接](https://github.com/sipeed/picoclaw/issues/3338)）
  - 虽仅有 1 条评论，但属于功能缺陷反馈，已标记为 stale，需维护者响应。

### 5. Bug 与稳定性

今日活跃 Bug/问题按严重程度排列：

| 严重程度 | 问题 | 状态 | 是否有 Fix PR |
|---|---|---|---|
| 高（功能不可用） | **Issue #3338**: Slack 媒体上传持续失败，`file.upload.v2` 报错 `file size cannot be 0`。根因是 `SendMedia` 构造 `slack.UploadFileParameters` 时未设置 `FileSize`，SDK 在发起网络请求前即拒绝上传。 | OPEN，stale | 暂无独立 Fix PR |
| 中（配置路径缺陷） | **PR #1929** 所修复的问题：Web 配置保存时，即使 `.security.yml` 中已有 token，校验仍误报缺失。 | 已修复（PR 已合并） | 对应 PR #1929 已合并 |

**总体判断**：今日无新出现的崩溃或严重回归，存量 Bug 中 Slack 媒体上传问题影响明显，且已 stale 一周，建议尽快响应或标记优先级。

### 6. 功能请求与路线图信号

- **WebUI 支持（#806）**：明确的高优先级 roadmap 需求，且 issue 标题注明 "Refactoring now"，暗示后端重构已在进行中，WebUI 可能是下一里程碑的核心交付物。该方向有望纳入 0.4 或后续版本。
- **原生 Exa 网络搜索提供商（PR #3299）**：已实现 `tools.web` / `web_search` 的 Exa 后端，支持日期范围筛选，代码完整度高，但已 stale 约 30 天。鉴于该 PR 能增强项目搜索能力且已有实现，被合入下一版本的可能性较大，但需要维护者回应测试结果或提出修改意见。

整体上，路线图信号指向两个方向：**面向普通用户的 UI 可访问性**（WebUI）与 **搜索/知识获取能力增强**（Exa Provider）。

### 7. 用户反馈摘要

- **真实用户痛点**：
  - **Slack 集成不可用**（#3338）：用户报告媒体内容**始终**上传失败，且报错信息具有误导性（提示文件大小为 0，但实际是 SDK 参数构建问题）。这表明 Slack 渠道的媒体发送功能当前完全不可用，对依赖 Slack 协作的团队影响直接。
  - **Web 配置保存异常**（#1929）：用户尝试通过 Web 界面保存配置时，即使凭据已正确存储，仍被错误地要求填写 token，导致配置无法保存。该问题已修复，但反映了此前 Web 配置校验逻辑对安全凭据处理的不完善。
- **积极反馈**：WebUI 请求（#806）获得 8 个 👍，社区参与度高，用户对项目方向表示支持。

### 8. 待处理积压

- **Issue #3338 — Slack does not attach image media content**（[链接](https://github.com/sipeed/picoclaw/issues/3338)）
  - 最终更新为 2026-08-24，但被标记 `stale`。该 Bug 影响 Slack 媒体上传功能，报告明确指出了根因（缺少 `FileSize` 字段）且修复路径清晰，建议维护者优先处理或与 PR #1929 的贡献者协调修复。
- **PR #3299 — Add native Exa web search provider**（[链接](https://github.com/sipeed/picoclaw/pull/3299)）
  - 自 2026-07-26 创建后已近 30 天无实质进展，且被标记 `stale`。功能实现完整且与现有搜索架构契合，若未计划合并，建议维护者明确告知作者原因，以避免 PR 因过期而丢失。
- **Issue #806 — Add webUI support**（[链接](https://github.com/sipeed/picoclaw/issues/806)）
  - 高优先级 roadmap 任务，已存在 6 个月。若项目确实进入 "Refactoring now" 阶段，建议在 issue 中同步重构进展、时间表与期望交付范围，以维持社区预期管理。

---

**总体健康度评估**：项目核心维护动作（合并 PR、修复 Web 配置）持续推进，但存在一定积压风险——高价值的 Exa 搜索 PR 和高影响 Slack Bug 均处于 stale 状态。WebUI 规划明确，是项目下一阶段的主要看点。建议维护者在未来 48 小时内对 #3338 和 #3299 做出明确响应，有助于保持社区活跃度和项目声誉。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-08-25

---

## 1. 今日速览

过去 24 小时 NanoClaw 保持高活跃度：共产生 3 条 Issue 更新、21 条 PR 更新，并发布 v2.3.0 版本。核心事件集中在三个方向：**v2.3.0 引入新的 Slack 体验（可选择迁移）**、**macOS 平台稳定性修复（better-sqlite3 崩溃与更新控制器路径问题）**、以及 **Telegram Markdown 兼容性清理完成**。此外，Mattermost 集成、Apple Container 驱动、邮件附件路由等多项功能 PR 仍在推进中。总体来看，项目正处于功能扩展与平台健壮性加固并行的阶段，维护者响应迅速。

---

## 2. 版本发布

### v2.3.0 — 新的 Slack 体验（可选择迁移）

> 链接：[Releases](https://github.com/nanocoai/nanoclaw/releases)

**核心变更：**

- 为经典单机器人 Slack 安装提供 **per-agent 预置 Slack 应用**、**从 Slack 直接生成代理** 以及多项 UX 改进。
- 经典 Slack 集成保持原有行为不变，本次发布是一个 **决策门（decision gate）**，而非强制迁移。

**⚠️ 破坏性变更与迁移注意：**

- 这是一个 **BREAKING** 级别变更。现有经典 Slack 安装**无需立即行动**，可继续使用原配置。
- 新安装和非 Slack 集成不受影响。
- 建议现有用户评估 per-agent 模式的优势（多代理隔离、独立配置），并在测试环境验证后再决定迁移时间。

---

## 3. 项目进展

今日有 2 个 PR 被关闭，另有 18 个 PR 待合并，整体推进节奏稳定。以下为重要进展：

### 已关闭 PR

| PR | 说明 |
|---|---|
| [#2474](https://github.com/nanocoai/nanoclaw/pull/2474) | **AI-coding-CLI 选择器** — 在 setup 流程中可选择 Claude Code 或 Codex 处理失败步骤和工具任务，为未来 Aider/Gemini-CLI 等提供适配器框架 |
| [#2475](https://github.com/nanocoai/nanoclaw/pull/2475) | **Codex 代理技能/人设对齐** — 使 Codex 代理能看到与 Claude Code 代理相同的 persona + 技能目录，切换提供商变为纯配置变更 |

这两个 PR 的合并意味着 **多提供商支持的基础框架已落地**，用户未来在设置 NanoClaw 时可以灵活选择 AI 后端而不牺牲功能一致性。

### 待合并的关键 PR（信号）

- [#3508](https://github.com/nanocoai/nanoclaw/pull/3508)：**持久化主机协调状态** — 为安全重启打基础，当前所有协调事实存于进程内存，重启会导致审批等待者丢失、投递重试计数重置、停止/重启意图丢失等问题
- [#3505](https://github.com/nanocoai/nanoclaw/pull/3505)：**邮件附件路由修复** — 使附件正确通过选定的邮箱挂载点，而非固定路径
- [#3503](https://github.com/nanocoai/nanoclaw/pull/3503)：**Apple Container 会话驱动** — macOS microVM 作为会话驱动 overlay，扩展运行时选项
- [#3502](https://github.com/nanocoai/nanoclaw/pull/3502) / [#3507](https://github.com/nanocoai/nanoclaw/pull/3507)：**Mattermost 集成** — 适配器 + 安装技能

---

## 4. 社区热点

今日没有单条 PR/Issue 出现大量评论（评论数均为 0-1），但有几个主题值得关注：

### 热门主题：macOS 更新流程缺陷

[Issue #3498](https://github.com/nanocoai/nanoclaw/issues/3498) 报告了 `/update-nanoclaw` 控制器在 macOS 上因符号链接（`/var` → `/private/var`）导致路径比较失败、更新无操作的问题。同主题的 [PR #3499](https://github.com/nanocoai/nanoclaw/pull/3499) 和 [PR #3506](https://github.com/nanocoai/nanoclaw/pull/3506) 在同日提交修复。**说明 macOS 用户基数可观，且维护者对平台缺陷响应迅速。**

### 热门主题：Telegram Markdown 兼容性收尾

[Issue #2767](https://github.com/nanocoai/nanoclaw/issues/2767) 被关闭，原因是上游 `@chat-adapter/telegram@4.30.0` 已原生支持 MarkdownV2，NanoClaw 的 legacy 清理器不再需要。**体现了依赖升级带来的简化。**

### 热门主题：Slack 新体验的大版本发布

虽然 v2.3.0 并非社区讨论产生的 PR，但其 BREAKING 性质和在 Slack 渠道 UX 上的大幅改进，预计将在未来几天引发迁移讨论。

---

## 5. Bug 与稳定性

### 严重 — better-sqlite3 在 macOS + 旧 Node 上段错误

- **Issue**: [#3497](https://github.com/nanocoai/nanoclaw/issues/3497)
- **现象**: `better-sqlite3@13.0.3` 在 Node <22.14.0 的 macOS 上打开数据库时段错误（segfault），导致安装后无法使用数据库层，`pnpm test` 失败
- **影响**: 声明的 Node 最低版本为 `>=22`，但实际需要 `>=22.14.0`；受影响的用户会通过所有检查却无法运行
- **修复状态**: ⚠️ **暂无对应 fix PR**，建议尽快在文档和引擎检测中做版本校验

### 中 — macOS 更新控制器路径比较失败

- **Issue**: [#3498](https://github.com/nanocoai/nanoclaw/issues/3498)
- **现象**: `os.tmpdir()` 和 `mktemp -d` 在 macOS 上返回 `/var/folders/...`（符号链接至 `/private/var/folders/...`），导致路径比较失败，update 控制器不执行任何操作
- **修复状态**: ✅ 已有 [PR #3499](https://github.com/nanocoai/nanoclaw/pull/3499)（symlink resolve 修复）和 [PR #3506](https://github.com/nanocoai/nanoclaw/pull/3506)（6 项 macOS 修复 + 1 项 Linux 共享缺陷修复）在审

### 低 — Telegram 遗留 Markdown 清理器废弃

- **Issue**: [#2767](https://github.com/nanocoai/nanoclaw/issues/2767)
- **状态**: 已关闭，上游适配器已原生支持 MarkdownV2，无需额外清理

---

## 6. 功能请求与路线图信号

结合今日 PR 和已有 Issue，以下几个方向可能进入下一版本：

### 高可能性 — 主机重启安全与持久化协调状态

[PR #3508](https://github.com/nanocoai/nanoclaw/pull/3508) 正在为持久化协调状态做铺垫。该 PR 解决的问题（重启丢状态、毒消息循环重试、停止/重启意图丢失）是生产环境的关键痛点，**预计后续会有一系列消费者 PR 跟进**。

### 高可能性 — Apple Container 作为会话驱动

[PR #3503](https://github.com/nanocoai/nanoclaw/pull/3503) 为 NanoClaw 增加了 macOS microVM 的容器驱动选项。这是"driver seam"的第一个 overlay，**意味着未来可能支持更多运行时后端**（Docker、Podman 之外的新选择）。

### 中可能性 — 从聊天中基于模板创建代理

[PR #3396](https://github.com/nanocoai/nanoclaw/pull/3396) 和 [PR #3428](https://github.com/nanocoai/nanoclaw/pull/3428) 配合，实现 `create_agent` 工具支持模板参数，并在 Slack 创建流程中透传模板引用。**模板化代理创建是提升易用性的重要方向。**

### 中可能性 — Mattermost 频道支持

[PR #3502](https://github.com/nanocoai/nanoclaw/pull/3502) + [PR #3507](https://github.com/nanocoai/nanoclaw/pull/3507) 组合，为 Mattermost 提供 SDK 适配器和安装技能。**聊天平台覆盖范围持续扩大。**

---

## 7. 用户反馈摘要

今日收集到的用户反馈集中在两个方向：

### 痛点：升级/安装体验仍需打磨

- **better-sqlite3 崩溃**（[#3497](https://github.com/nanocoai/nanoclaw/issues/3497)）：用户 brentkearney 指出版本声明与实际要求不符，导致「所有检查都通过了，安装却无法运行」，属于比较典型的依赖版本地板问题。
- **macOS 更新无操作**（[#3498](https://github.com/nanocoai/nanoclaw/issues/3498)）：同一位用户在真实 macOS 安装上执行更新时发现控制器静默退出，说明 **文档中的更新命令在 macOS 上完全失效**，对用户体验影响较大。

### 正向信号：上游依赖升级带来简化

- Issue #2767 的关闭表明 NanoClaw 团队关注上游升级并主动清理 workaround，**降低长期维护成本**。

---

## 8. 待处理积压

以下 PR 已存在较长时间但仍在待合并状态，建议维护者关注：

| PR | 创建时间 | 说明 | 关注原因 |
|---|---|---|---|
| [#2337](https://github.com/nanocoai/nanoclaw/pull/2337) | 2026-05-07 | 将 Claude Code 技能目录暴露给非 Claude 提供商 | 已等待 **3.5 个月**，是多提供商支持的核心组件之一，与已合并的 #2474/#2475 同属一条主线 |
| [#2361](https://github.com/nanocoai/nanoclaw/pull/2361) | 2026-05-09 | 收紧 Codex 提供商合约 | 同样活跃在 `codex` 相关主线上，与 #2337 一起构成了 Codex 支持的另一半 |
| [#3302](https://github.com/nanocoai/nanoclaw/pull/3302) | 2026-08-17 | 修正 OneCLI 网关默认绑定地址 | 修复 issue #2903，已存在 8 天，属于配置正确性修复 |

> ⚠️ 提示：#2337 和 #2361 在 2026-08-24 当天有更新，说明最近重新活跃，可能即将合并或需要 review。

---

## 总结

NanoClaw 项目正处于**快速迭代期**：v2.3.0 的 Slack 体验升级是产品层面的重要里程碑；macOS 稳定性问题（#3497、#3498）虽暴露了兼容性短板，但修复 PR 在一天内即被提出，体现了维护团队的响应速度。多提供商支持（Claude Code / Codex）的基础框架已经合并落地，配合模板化代理创建、新频道适配（Dial、Mattermost、Apple Container），可以预见未来几个版本将在**可扩展性**和**平台覆盖**上有显著提升。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-08-25

## 今日速览

过去 24 小时内，NullClaw 项目保持中等活跃度：共新增 2 条 Issue（1 个 Bug、1 个功能请求），1 条 PR 处于待合并状态（依赖更新），无新版本发布。两个新 Issue 分别涉及 Firecrawl 搜索端点可配置化（#993）和配对码可访问性（#992），表明社区对自托管部署体验和配置易用性的关注度上升。长期未合并的 Docker 镜像依赖更新 PR #956（已超两个月）仍然是项目健康度的一个小阻塞点，建议维护者尽快处理。

---

## 版本发布

今日无新版本发布。

---

## 项目进展

今日没有 PR 被合并或关闭，因此没有代码推进到主分支。当前唯一活跃的 PR #956（Alpine 3.23 → 3.24 依赖更新）处于待合并状态，该 PR 自 6 月 15 日创建以来已悬置两个月以上，维护者应评估处理方式——合并或关闭以避免积压。

项目整体进展速度偏缓，但社区通过 Issue 提交了明确的需求方向，可能为下一阶段功能规划提供输入。

**[PR #956]** [dependencies, docker] ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group  
https://github.com/nullclaw/nullclaw/pull/956

---

## 社区热点

今日没有出现高讨论度（评论数较多）的 Issue 或 PR，两个新 Issue 均为刚创建且暂无评论。不过从主题来看，它们可能很快引发讨论：

- **#993** 请求将 Firecrawl 搜索端点改为可配置，以支持自托管 Firecrawl 实例——这类与自托管场景相关的需求在 AI 工具社区中通常能获得较多共鸣。
- **#992** 报告配对码可见性问题，直接影响了用户配置 Gateway API 的体验，容易吸引到遇到相同问题的用户跟帖确认。

**[Issue #993]** [enhancement] feat: make Firecrawl search endpoint configurable for self-hosted instances  
https://github.com/nullclaw/nullclaw/issues/993

**[Issue #992]** [bug] if the pairing code is hidden, and not written to disk, how can we see it?  
https://github.com/nullclaw/nullclaw/issues/992

---

## Bug 与稳定性

今日报告了 1 个新 Bug，未见崩溃或回归类高严重度问题。

**中等问题：**

- **#992 [配对码不可见]** 自 PR #535 修改后，6 位配对 token 不再输出到 stdout 且不落盘，导致用户无法获取该 token 来完成 Gateway API 配置。该问题直接影响配置流程的可完成性，且尚无对应修复 PR 或维护者回应，建议优先关注。

**[Issue #992]** https://github.com/nullclaw/nullclaw/issues/992

---

## 功能请求与路线图信号

今日新增 1 个功能请求：

- **#993** 将 `src/tools/web_search_providers/firecrawl.zig` 中硬编码的端点 `https://api.firecrawl.dev/v1/search` 改为可通过配置覆盖，使自托管 Firecrawl 实例能够用作原生搜索提供商。

该请求与项目拥抱自托管生态的趋势高度契合。考虑到项目已有自托管相关支持的基础（如 Gateway API 等），此功能纳入下一里程碑的概率较高，但需要维护者评估配置体系的设计方式（环境变量 vs 配置文件）。

**[Issue #993]** https://github.com/nullclaw/nullclaw/issues/993

---

## 用户反馈摘要

从今日 Issue 描述中可以提炼出以下真实用户声音：

- **配置困惑**（#992）：用户明确表示对 Gateway API 配置过程感到困惑，花费数天未能找到配对 token 的获取方式。最终通过阅读代码才定位到是 PR #535 改变了行为——这反映了变更后缺少文档同步或用户通知的问题，属于「行为变更带来的可用性倒退」。
- **自托管部署诉求**（#993）：用户需要将项目集成到自身的 Firecrawl 自托管实例中，但当前代码硬编码了官方 API 地址，导致无法使用自定义端点。这是典型的「官方 SaaS 优先」设计对自托管用户造成的障碍。

两个 Issue 均无人评论，说明问题刚被提出，维护者若能快速回应，将有助于提升社区信任度。

---

## 待处理积压

**长期未响应的 PR：**

- **[PR #956]** Docker 基础镜像 Alpine 3.23 → 3.24 升级，创建于 2026-06-15，至今已超过 70 天未合并。由于这是依赖更新，长时间悬置会增加安全风险与后续升级难度，建议维护者本周内评估并合并或关闭。

**[PR #956]** https://github.com/nullclaw/nullclaw/pull/956

---

> 报告生成时间：2026-08-25 | 数据来源：NullClaw GitHub 仓库 | 活跃度评级：🟡 稳定（无版本发布，Issue/PR 正常流转但速度偏慢）

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-25

## 1. 今日速览

过去 24 小时 IronClaw 保持高强度迭代：22 条 Issue 更新（13 新开/活跃、9 关闭）与 32 条 PR 更新（17 待合并、15 已合并/关闭），无新版本发布。开发重心集中在 **Onboarding 建议流程闭环**（#7693/#7694/#6994 链路的后续修复与增强）、**CI 基础设施整合**（setup-rust composite T1 及 nextest T2 两条车道推进）以及 **WebUI 一致性与 Bug 修复**（共享页面原语、InlineNotice 迁移、登录页清理等）。多个当日报告的 Bug 已在 24 小时内修复并合入（如 #7845→#7857），维护者响应速度很快，项目整体健康度良好。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合并/关闭的 PR 中，以下几项对项目有显著推进：

- **CI 整合主力合入** — [PR #7821](https://github.com/nearai/ironclaw/pull/7821)（关闭 #7798）：引入单一 `.github/actions/setup-rust` composite action，统一 12 个 workflow 文件中的 43 处 `dtolnay/rust-toolchain` 调用，通过导出 `RUSTUP_TOOLCHAIN` 结构性消除“本地绿、CI 红”的漂移问题。同批次的 [PR #7817](https://github.com/nearai/ironclaw/pull/7817)（T2 nextest 管道）、[PR #7852](https://github.com/nearai/ironclaw/pull/7852)（T1 E2E 失败二分定位）、[PR #7858](https://github.com/nearai/ironclaw/pull/7858)（Windows 探针）仍在开放或作为探针运行，CI 改革尚未完全落地。
- **Onboarding 建议改造收尾** — [PR #7833](https://github.com/nearai/ironclaw/pull/7833)（关闭 #7812）：建议生成从硬编码的 4 能力白名单，改为读取用户级权限并收窄到 no-approval、read-only 工具，使建议真正“接地气”，能基于用户已连接的真实数据生成。配套 [PR #7857](https://github.com/nearai/ironclaw/pull/7857)（关闭 #7845）修复了启动建议任务后左侧会话列表不刷新的问题。
- **缓存前缀稳定化** — [PR #7001](https://github.com/nearai/ironclaw/pull/7001)（关闭 #6985，P0 #2）：停止在每次模型调用时修改 system block 前缀（nudges 位置调整、时间戳从分钟精度改为稳定化、按次检索 memory），使 provider 侧缓存前缀字节级稳定，预计显著降低 token 消耗与延迟。
- **WebUI 基础设施重构** — [PR #7794](https://github.com/nearai/ironclaw/pull/7794)（关闭 #7792）与 [PR #7795](https://github.com/nearai/ironclaw/pull/7795)（关闭 #7793）：引入共享 `PageScroll`/`PageStack`/`Skeleton` 原语，并将 Settings/Admin 页面级反馈横幅全部迁移至 `InlineNotice` 组件，提升跨路由一致性。
- **CI 健康恢复** — [PR #7844](https://github.com/nearai/ironclaw/pull/7844)（关闭 #7851）：更新 WASM fixtures 至最新 WIT 响应契约，重设覆盖率基线，修复 main 分支 CI 失败。

---

## 4. 社区热点

今日讨论最活跃的议题集中在 **Onboarding 建议流程** 与 **CI 基础设施** 两条线索：

- **Onboarding 建议闭环**（[#7812](https://github.com/nearai/ironclaw/issues/7812) 已关闭，3 评论；[#7815](https://github.com/nearai/ironclaw/issues/7815) epic，1 评论；[#7845](https://github.com/nearai/ironclaw/issues/7845) 已关闭，1 评论）：用户与维护者共同推动“连接 → 建议 → 线程”的完整体验。核心诉求是建议必须基于用户真实数据（已通过 #7833 解决），且 UI 侧要能看到启动后的线程入口（已通过 #7857 解决）。[#7816](https://github.com/nearai/ironclaw/pull/7816) 进一步为 OOBE 建议抽屉添加刷新与连接入口，仍在开放中。
- **CI 加速 T1/T2 车道**（[#7798](https://github.com/nearai/ironclaw/issues/7798) 已关闭，2 评论；[#7817](https://github.com/nearai/ironclaw/pull/7817)；[#7852](https://github.com/nearai/ironclaw/pull/7852)）：围绕 Rust CI 的工具链统一、nextest 管道、失败信号完整性展开。社区关注点在于**减少 CI 与本地环境差异**和**缩短测试等待时间**。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 |
|---------|-------|------|------|
| 高 | [#7297](https://github.com/nearai/ironclaw/issues/7297) | 每次失败 prompt 后，旧错误消息在 UI 底部持续堆积不清理，界面逐渐不可用（QA bug，Railway 实例） | 开放（8 月 6 日创建，无直接 fix PR） |
| 中 | [#7853](https://github.com/nearai/ironclaw/issues/7853) | Telegram 设置流程提供个人账号绑定选项，但实际缺少对应工具，流程无法完成 | 开放（8 月 24 日新建） |
| 中 | [#7845](https://github.com/nearai/ironclaw/issues/7845) | 激活建议任务后，左侧会话列表不出现对应线程入口（需刷新或跳转后才显示） | **已修复**（[#7857](https://github.com/nearai/ironclaw/pull/7857)） |
| 中 | [#7856](https://github.com/nearai/ironclaw/issues/7856) | MCP 工具发现逻辑静默跳过 camelCase 名称的工具 | 开放（8 月 24 日新建，0 评论） |
| 待确认 | [#7842](https://github.com/nearai/ironclaw/issues/7842) | 用户报告请求执行中收到泛化的 “invalid result” 错误，无更多上下文 | 开放（product feedback 自动创建） |
| 待确认 | [#7841](https://github.com/nearai/ironclaw/issues/7841) | Telegram 设置以 “admin must configure” 错误死胡同结束 | 开放（product feedback 自动创建） |
| 待确认 | [#7840](https://github.com/nearai/ironclaw/issues/7840) | 应用未清晰引导用户连接 Slack | 开放（product feedback 自动创建） |

CI 健康方面，[#7851](https://github.com/nearai/ironclaw/issues/7851)（main 分支 CI 失败）已由 [PR #7844](https://github.com/nearai/ironclaw/pull/7844) 修复。

---

## 6. 功能请求与路线图信号

今日新增的功能请求指向两个方向：

- **本地化扩展** — [#7855](https://github.com/nearai/ironclaw/issues/7855) 请求添加意大利语支持（类似现有语言列表）。低风险低成本，可能随下一个 v1.x 版本纳入。
- **Google Workspace 深度集成** — [#7849](https://github.com/nearai/ironclaw/issues/7849)（enhancement, suggested_P1, v1.4.0）提议捆绑 agent-first GSuite CLI，解决当前 Gmail 扩展“返回 ID 需二次读取、MIME/base64 嵌套暴露给模型”等体验问题。该 Issue 与 [#6774](https://github.com/nearai/ironclaw/issues/6774)（Gmail 终端设置文档化）形成呼应，说明 Google 系扩展是用户高频使用的场景。
- **架构级改进** — [#7825](https://github.com/nearai/ironclaw/issues/7825) 提议用原生 iron-proxy recipes + host credential broker 替代 GitHub 特判的沙箱 egress 认证，属于持续治理方向，与 PR #7810 配合。

---

## 7. 用户反馈摘要

从 Issue 描述与评论中可提炼以下真实用户痛点：

- **UI 错误堆积影响使用信心**（#7297）：用户连续多次失败后，旧错误一直留在底部无法清除，让聊天界面越来越乱。这不仅是视觉问题，更可能掩盖新错误。该问题已开放超两周，建议优先排期。
- **集成设置流程“半成品”体验**（#7853、#7841）：Telegram 设置主动展示“个人账号绑定”选项，但无法完成，且最终错误信息是泛化的 “admin must configure”，用户无法自行解决。同样，Slack 缺少连接引导（#7840）。这反映出新手引导中的连接/集成环节还不够成熟。
- **建议内容“不接地气”曾是核心不满**（#7812）：用户侧感知是 suggestion 只用内置搜索工具生成，与真实数据无关。该问题已通过 #7833 解决，方向正确——**建议应在用户授权范围内读取真实数据**。
- **错误信息过于泛化**（#7842）：“invalid result” 没有指出失败环节或修复方向，用户只能反馈给官方。

---

## 8. 待处理积压

以下 Issue/PR 长期未关闭，建议维护者关注：

- **[#6774](https://github.com/nearai/ironclaw/issues/6774)**（7 月 28 日创建）— Gmail 扩展要求终端/CLI 配置，需在 Extensions > Registry UI 中补充文档。开放近一个月，Google 系工具是高频需求，建议联动 #7849 一并处理。
- **[#7297](https://github.com/nearai/ironclaw/issues/7297)**（8 月 6 日创建）— UI 错误消息堆积问题，开放两周以上且无指派 PR，属影响日常体验的 QA bug。
- **[#7456](https://github.com/nearai/ironclaw/pull/7456)**（8 月 10 日开放）— Reborn 持久存储 profile-agnostic 重构，XL 规模且设计文档较多，需 core 成员持续 review。
- **[#7516](https://github.com/nearai/ironclaw/pull/7516)**（8 月 12 日开放）— WebUI 操作员 IronHub agent 链接界面，new contributor 提交，需要维护者给予 review 反馈以鼓励贡献。
- **[#7810](https://github.com/nearai/ironclaw/pull/7810)**（8 月 21 日开放）— 沙箱 direct-exec 凭据绑定，横跨 sandbox/docs/deps 且为 XL 规模，与 #7825 有协同关系，建议加快 review。
- **[#7826](https://github.com/nearai/ironclaw/pull/7826)**（8 月 23 日开放）— 修复 hub 发布包安装失败问题（涉及 capabilities.json 强制、egress 计量、schema refs 匹配等），new contributor 提交，涉及面较广。

---

**总结**：IronClaw 今日处于“高投入、快修复”的良性节奏。CI 基础设施整合与 Onboarding 建议闭环是当前两大主线，均有明确进展且配套修复及时。值得警惕的是数个连续多日未解决的用户侧集成体验问题（Telegram/Slack/Gmail）以及 UI 错误堆积类问题的积压，建议下一迭代优先分配人力。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

## 1. 今日速览

- 过去24小时 **Issues 更新仅 3 条，且全部为自动关闭的 stale 旧 Issue**，无新问题上报，社区反馈热度处于低位。
- **PR 更新 11 条，其中 10 条已合并/关闭，1 条长期积压未处理**，项目多个功能模块（渲染器、库、协作、插件）均有代码合入，研发推进节奏明显。
- **无新版本发布**，项目处于持续迭代期，今日成果以体验修复和功能完善为主。
- 整体活跃度评估：**开发驱动型活跃，Issue 侧偏冷**。项目健康度良好，但需警惕 stale 机制可能掩盖未解决的真实用户诉求。

## 2. 版本发布

今日无新版本发布。数据显示 2026-08-24 有 10 条 PR 密集合入，下个版本发布前积累了多项功能改进。

## 3. 项目进展

今日合入/关闭的 PR 覆盖渲染器、库管理、协作、插件生态四大模块，是功能体验的“精准修补”：

- **跨平台缩略图与本地产物生命周期（[PR #2524](https://github.com/netease-youdao/LobsterAI/pull/2524)）**  
  新增隔离的跨平台缩略图渲染器，支持图片、视频、PDF、Office、HTML；统一 16:9 尺寸与缓存策略；仅展示关联任务的本地产物，防止已删除任务的延迟事件重建关系。该 PR 同时补充了构建入口、测试与设计文档，是今日最重的功能提交。

- **文件分享与收藏交互完善（[PR #2522](https://github.com/netease-youdao/LobsterAI/pull/2522)）**  
  修复分享打包时 Unicode 文件名被破坏，兼容历史文件名的标题优先展示，优化收藏状态即时更新与失败回滚，统一订阅/发布额度限制弹窗样式。属于典型的用户可感知体验优化。

- **多个渲染器层修复（批量合入）**  
  - [PR #2528](https://github.com/netease-youdao/LobsterAI/pull/2528) 新增 credits 加载设置 UI；  
  - [PR #2527](https://github.com/netease-youdao/LobsterAI/pull/2527) 技能面板停止持久化选中 tab，默认回到 marketplace；  
  - [PR #2520](https://github.com/netease-youdao/LobsterAI/pull/2520) 修复插件安装失败时错误详情过长导致操作按钮不可用的问题，增加关闭按钮与 IPC 错误处理；  
  - [PR #2526](https://github.com/netease-youdao/LobsterAI/pull/2526) 更新部分 skills 图标 URL。

- **协作与 IM 体验（[PR #2521](https://github.com/netease-youdao/LobsterAI/pull/2521)、[PR #2525](https://github.com/netease-youdao/LobsterAI/pull/2525)、[PR #2523](https://github.com/netease-youdao/LobsterAI/pull/2523)）**  
  修复只读选区右键菜单不可用、macOS Ctrl-click 被过早清空选区的问题；新增登录引导页；补充 IM 图标。

- **性能架构优化贡献被关闭（[PR #1193](https://github.com/netease-youdao/LobsterAI/pull/1193)）**  
  该 PR 通过 debounce + 批量事务彻底消除 SQLite 写放大（每次行变更都触发全库 `db.export()` 的问题），但已被 stale 机制自动关闭，未获合并。该优化对本地数据量大的用户有显著价值，建议维护者重新评估。

## 4. 社区热点

今日 11 条 PR 均无用户评论，Issue 侧仅 3 条 stale 自动关闭事件，社区讨论热度偏低。从 Issue 评论数和用户交互看，以下两条相对受到关注：

- **[Issue #1187：上下文窗口大小与输出 token 设置](https://github.com/netease-youdao/LobsterAI/issues/1187)**（评论 3 条，👍 1）  
  用户运行 DeepSeek 时直接遭遇 `Context overflow: prompt too large for the model` 错误，说明模型上下文配置与长会话场景的适配存在缺口。该需求有 1 个 👍，虽被 stale 关闭，但指向“模型参数可配置化”这一明确方向。

- **[Issue #1195：自建 skill 安装到 OpenClaw 路径后技能面板无显示](https://github.com/netease-youdao/LobsterAI/issues/1195)**（评论 3 条）  
  用户按步骤创建 skill 并重启后技能面板无显示，且被安装到 `openclaw` 路径下，怀疑是跨工具路径映射问题。属于确定性 bug，因必现而可信度高。

## 5. Bug 与稳定性

今日无新上报 Bug、崩溃或回归问题。以下为 stale 关闭的历史 Bug，按严重程度排序：

| 严重程度 | Issue | 说明 | 是否有修复 PR |
|---|---|---|---|
| 高 | [#1195](https://github.com/netease-youdao/LobsterAI/issues/1195)（[已关闭]） | 自建 skill 安装到错误路径，重启后技能面板不显示，必现，影响核心功能使用。 | 无 |
| 高 | [#1187](https://github.com/netease-youdao/LobsterAI/issues/1187)（[已关闭]） | DeepSeek 模型长会话 Context overflow，无法通过 UI 调大上下文窗口，直接阻断对话。 | 无 |
| 低 | [#1192](https://github.com/netease-youdao/LobsterAI/issues/1192)（[已关闭]） | 大模型对“无头浏览器”的指令跟随不稳定，用户期望硬编码默认配置，属于交互设计缺陷。 | 无 |

三条 Bug 均无对应修复 PR 合入，且 stale 自动关闭可能让真实问题被埋没。建议维护者人工复查这三个 issue 是否仍在受影响版本中有效。

## 6. 功能请求与路线图信号

今日可通过老 Issue 识别出两个未被采纳的功能之声：

- **模型上下文/输出 token 可配置（[#1187](https://github.com/netease-youdao/LobsterAI/issues/1187)）**  
  用户希望面向不同模型自定义上下文窗口大小和输出 token 限制。结合今日合入的 [PR #2528](https://github.com/netease-youdao/LobsterAI/pull/2528)（credits 加载设置 UI），说明项目正处于“设置面板扩展期”，该请求有被纳入后续版本的逻辑基础。

- **工具默认配置“写死”（[#1192](https://github.com/netease-youdao/LobsterAI/issues/1192)）**  
  用户希望为 browser 等工具支持硬编码默认配置（如无头模式）。该请求对“指令跟随不可靠”下的工具可控性有普适意义，可考虑作为高级设置条目。

由于三条请求均为 stale 状态且无跟进 PR，推测短期进入路线图的概率较低。但#1187 的直接报错场景可复现且打断率高，建议重新开启并排期。

## 7. 用户反馈摘要

- **会话被 Context overflow 打断（[#1187](https://github.com/netease-youdao/LobsterAI/issues/1187)）**  
  > 在 deepseek 模型运行过程中出现 Context overflow: prompt too large for the model. Try /reset (or /new) to start a fresh session, or use a larger-context model.

  **痛点提炼**：用户不希望在长对话中途被迫手动 /reset，且无法自行切换到更长的上下文模型。这是模型适配层缺乏灵活性导致的体验降级。

- **技能安装路径错乱且重启后不显示（[#1195](https://github.com/netease-youdao/LobsterAI/issues/1195)）**  
  > 在 main agent 中创建一个 skill，让 agent 安装 skill，提示重启生效，重启后技能面板里无此 skill。

  **痛点提炼**：安装路径被指向 OpenClaw，而非 LobsterAI 自己的技能目录，用户对“安装成功”提示与重启后无显示的结果感到困惑。涉及路径映射与技能发现机制的一致性。

- **对“写死配置”的强烈需求（[#1192](https://github.com/netease-youdao/LobsterAI/issues/1192)）**  
  > 我加入了记忆让他以无头模式启动，但是大模型的指令跟随经常不好……能不能让我直接写死一个默认配置？

  **痛点提炼**：高级用户希望绕过大模型的不确定性，直接通过硬编码配置控制工具行为。反映出“AI 指令”与“确定性配置”之间存在的信任落差。

## 8. 待处理积压

- **[PR #1277：electron 与 electron-builder 依赖升级](https://github.com/netease-youdao/LobsterAI/pull/1277)（OPEN，创建于 2026-04-02，已积压 4 个月+）**  
  由 dependabot 发起，计划将 electron 从 40.2.1 升至 43.4.1，跨多个主版本。长时间未合入可能存在兼容性顾虑，但长期搁置会导致安全补丁缺失。建议维护者明确标注是否接受升级或给出延后理由。

- **[PR #1193：SQLite 写入放大优化](https://github.com/netease-youdao/LobsterAI/pull/1193)（CLOSED，stale）**  
  具有明确根因分析和性能收益的架构向 PR，被随手关闭。同类问题可能继续在用户侧造成隐性性能损耗，建议合入或以其思路另开新 PR。

- **三条 stale 关闭的 Issue（[#1187](https://github.com/netease-youdao/LobsterAI/issues/1187)、[#1192](https://github.com/netease-youdao/LobsterAI/issues/1192)、[#1195](https://github.com/netease-youdao/LobsterAI/issues/1195)）**  
  均为 2026-04-01 创建，更新于 2026-08-24 后被标记式关闭。间隔长达 4 个月未获实质性响应，再次提醒项目需建立“用户反馈人工复核”机制，避免机器人处理替代真实跟进。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-08-25）

## 1. 今日速览

过去 24 小时 Moltis 开发活跃度较高：共 19 条 PR 更新，其中 16 条已合并/关闭、3 条待合并；2 条 issue 关闭；同步发布 1 个新版本（20260824.01）。今日变动集中在连接器能力扩展（xAI Grok OAuth、Slack 共享频道工具策略、WhatsApp 文件持久化）、沙箱与浏览器兼容性修复、安全加固（节点配对签名验证）、以及多项稳定性与配置语义修正。社区贡献者参与度高，16 条已合并/关闭 PR 中有多条来自外部开发者（penso、rubenssoto、IlyaBizyaev、tsauvajon、PeterDaveHello、SP-937-215），项目整体健康度良好。

---

## 2. 版本发布

### 20260824.01
- 发布时间：2026-08-24
- 发布类型：常规迭代版本（未标注破坏性变更）
- 主要包含当日合并的修复与功能：xAI Grok 订阅 OAuth provider、Apple 容器标识符长度限制、Slack 共享频道工具策略、TTS provider 自动选择修正、heartbeat 活跃时段强制生效、WhatsApp/cron/browser/memory/MCP 等多项修复。

**迁移注意事项**：`fix(heartbeat)` 使 `active_hours` 配置真正生效且 `end=24:00` 被正确解析为一天结束。若此前配置了 `24:00` 或其他活跃时段，升级后实际行为会与文档一致，建议运维人员核对配置是否符合预期。

> 仓库 Releases 页面：https://github.com/moltis-org/moltis/releases

---

## 3. 项目进展

今日合并/关闭的 16 条 PR 覆盖多个模块，按主题归类如下：

### 连接器与 Provider
- **xAI Grok 订阅 OAuth（#1240，已合并/关闭）**：新增 `xai-oauth` provider，支持 SuperGrok / SuperGrok Heavy / X Premium+ 用户通过 RFC 8628 设备码登录使用 Grok，保留现有 API-key provider `xai` 作为回退。关联 issue #1239。https://github.com/moltis-org/moltis/pull/1240
- **Slack 共享频道工具策略（#1238，已合并/关闭）**：持久化并暴露 `untrusted_audience` / `untrusted_tools` 配置，保留 fail-closed 默认值，同时允许运维者为共享/非操作者会话显式配置工具访问策略。https://github.com/moltis-org/moltis/pull/1238
- **WhatsApp 入站文件持久化（#1228，已合并/关闭）**：下载入站图片/文档并存入会话媒体接口，使本地工具获得稳定的 `local_path`；设置 20MB 上限与文件名清理。https://github.com/moltis-org/moltis/pull/1228
- **WhatsApp 入站媒体下载限流（#1233，已合并/关闭）**：将入站媒体下载控制在流式传输期间的有界范围内，避免资源耗尽。https://github.com/moltis-org/moltis/pull/1233

### 沙箱与浏览器
- **Apple 容器标识符上限修复（#1237，已合并/关闭）**：将 Apple Container ID 绑定到 64 字符限制，使用 SHA-256 后缀生成稳定名称，修复启动失败。关联 issue #1137。https://github.com/moltis-org/moltis/pull/1237
- **Obscura 隐身模式默认开启（#1227，已合并/关闭）**：默认以 `--stealth` 启动 Obscura sidecar，新增 `tools.browser.obscura_stealth`（默认 `true`）供需要标准网络行为的场景关闭。https://github.com/moltis-org/moltis/pull/1227
- **Browserless v2 容器支持（#1229，已合并/关闭）**：支持 v2 容器协议（Base64 launch 参数、`TIMEOUT`/`CONCURRENT`），同时保持 v1 镜像与公共 API 兼容。https://github.com/moltis-org/moltis/pull/1229

### 安全
- **网关节点配对签名校验（#1179，已合并/关闭）**：将 `node.pair.verify` 绑定到服务端签发的 pending request，禁止调用方自供 key 或 challenge。该 PR 自 7 月 31 日开放，属外部贡献者推动打入的安全加固。https://github.com/moltis-org/moltis/pull/1179

### Cron 与消息投递
- **Cron 输出投递到发起聊天（#1226，已合并/关闭）**：通过 `payload.deliver_to_current_chat` 瞬态快捷方式，将计划任务输出投递到原始会话，保留规范化外发地址与线程路由。https://github.com/moltis-org/moltis/pull/1226

### 稳定性与配置修复
- **MCP 服务器重启后客户端解析（#1231，已合并/关闭）**：修复 MCP 工具桥在服务器重启后仍向已关闭客户端实例派发消息的问题。https://github.com/moltis-org/moltis/pull/1231
- **TTS provider 自动选择（#1242，已合并/关闭）**：不再将默认 Coqui 硬编码为“已配置”，消除未配置 TTS 时的误告警。https://github.com/moltis-org/moltis/pull/1242
- **Heartbeat 活跃时段（#1241，已合并/关闭）**：修复 `end=24:00` 被 chrono 拒绝的问题，并在 heartbeat agent-turn 路径实际调用 `is_within_active_hours`。https://github.com/moltis-org/moltis/pull/1241
- **递归打包 sidecar 物化（#1234，已合并/关闭）**：修复预构建 release/Docker 中 `skill-creator` 技能 `scripts/quick_validate.py` 侧车文件“找不到”的问题。https://github.com/moltis-org/moltis/pull/1234
- **内存后端配置归一化（#1235，已合并/关闭）**：将内置内存运行时名称从 `sqlite` 统一为可编辑配置值 `builtin`，并补充回归测试。https://github.com/moltis-org/moltis/pull/1235
- **本地嵌入编码器批次限制（#1236，已合并/关闭）**：将 GGUF 本地记忆嵌入的 `n_batch` 限制在 512 token 内，防止进程崩溃。https://github.com/moltis-org/moltis/pull/1236
- **工具对象模式 OpenAI 兼容（#1232，待合并）**：为 webhook patch 字段与 MCP 环境变量声明固定 schema，避免 OpenAI 严格工具模式要求下产生 null/空值。https://github.com/moltis-org/moltis/pull/1232
- **Cron 保留已投递渠道上下文（#1243，待合并）**：将计划消息的最终投递文本追加为目标会话的 assistant 消息，使后续追问保留上下文。https://github.com/moltis-org/moltis/pull/1243

### 国际化
- **繁体中文（zh-TW）全面更新（#1225，已合并/关闭）**：重写并扩展 `connectors.ts` 翻译，修正术语与风格一致性。https://github.com/moltis-org/moltis/pull/1225

---

## 4. 社区热点

- **Issue #1239（已关闭）：xAI Grok 订阅 OAuth 功能请求** —— 作者 SP-937-215 提出为 SuperGrok / SuperGrok Heavy / X Premium+ 用户增加 OAuth 登录方式的建议，获得 2 条评论，并**在同一天**通过 PR #1240 落地实现。如此快速的 request-to-implementation 闭环体现了项目对用户功能诉求的响应效率。https://github.com/moltis-org/moltis/issues/1239

- **PR #1179（已合并/关闭）：网关节点配对签名校验** —— 自 7 月 31 日开放，是本月积压最久的 PR 之一。提交者 tsauvajon 明确表示“想使用 Moltis，但希望先合入安全修复”。该 PR 在今日合并，安全类补丁从提交到合并耗时约 25 天，社区持续关注。https://github.com/moltis-org/moltis/pull/1179

- **Issue #1137（已关闭）：Apple 容器 ID 超限 bug** —— 由 holgzn 于 6 月 27 日报告，今日才由 PR #1237 修复，共 1 条评论。这是今日唯一一个“用户报告 bug 最终关闭”的事件，但从报告到修复耗时近 2 个月，提示沙箱相关 issue 的积压处理周期偏长。https://github.com/moltis-org/moltis/issues/1137

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 高 | **本地 GGUF 记忆嵌入导致进程崩溃**：当 tokenized chunk/query 超过 512 tokens 时，非因果 llama.cpp 编码器要求完整输入在单批次内，原配置 `n_batch=2048` 超限。 | ✅ 已修复（PR #1236） |
| 中 | **Apple 容器 ID 超限导致沙箱启动失败**：identity 前缀 + session UUID 拼接后超过 64 字符名称上限。 | ✅ 已修复（PR #1237） |
| 中 | **网关节点配对签名校验缺失**：调用方可自供 key/challenge，存在安全风险。 | ✅ 已修复（PR #1179） |
| 中 | **MCP 服务器重启后派发到已关闭客户端**：活动聊天轮次持续向已销毁的客户端实例发送工具调用。 | ✅ 已修复（PR #1231） |
| 中 | **TTS 未配置时误报 “provider 'coqui' not configured”**：默认 Coqui 被硬编码为已配置，实际未配置时产生红色告警。 | ✅ 已修复（PR #1242） |
| 低 | **heartbeat 的 active_hours 配置从未实际生效**，且 `end=24:00` 被错误解析为始终活跃。 | ✅ 已修复（PR #1241） |
| 低 | **skill-creator 递归打包 sidecar 文件缺失**：`scripts/quick_validate.py` 在预构建镜像中报“not found”。 | ✅ 已修复（PR #1234） |

无新增严重崩溃或回归问题报告。`fix(heartbeat)` 属于配置语义变更，升级后需关注行为变化。

---

## 6. 功能请求与路线图信号

- **xAI Grok 订阅 OAuth（已实现）**：Issue #1239 请求将 SuperGrok / X Premium+ 订阅用户纳入 Moltis 的 OAuth 支持范围，今日已由 PR #1240 完成。此类“订阅 OAuth”模式继 OpenAI Codex、GitHub Copilot 之后进一步扩展，说明 **provider OAuth 矩阵化路线**仍在推进。https://github.com/moltis-org/moltis/issues/1239 | https://github.com/moltis-org/moltis/pull/1240

- **Coder 远程工作区沙箱（待合并）**：PR #1199 为 Moltis 增加 Coder 沙箱后端，通过 REST API 创建临时工作区，并支持模板、预设参数、TTL、环境别名等特性。该 PR 自 8 月 15 日开放以来保持活跃，属于沙箱后端多样化方向的下一步。https://github.com/moltis-org/moltis/pull/1199

- **Cron 上下文延续（PR #1243 与 #1226 联动）**：#1226 先解决了 cron 输出“投递到发起聊天”，#1243 进一步将投递文本注入目标会话作为 assistant 消息，避免后续追问丢失上下文。这暗示 **cron 与消息渠道的双向上下文保持**是近期迭代重点。https://github.com/moltis-org/moltis/pull/1243

- **Slack 共享频道工具策略（已合并）**：PR #1238 为共享频道引入显式工具策略配置，同时保留 fail-closed 默认值。这符合企业环境中“外部分享频道需可审计、可限制”的诉求，可能为后续更多渠道提供策略范式参考。https://github.com/moltis-org/moltis/pull/1238

---

## 7. 用户反馈摘要

- **贡献者主动安全加固**（来源 PR #1179 描述）：tsauvajon 表示“我想使用 Moltis，但在我这样做之前，想先把几个安全问题修掉”。这说明安全审查是社区潜在用户引入 Moltis 的关键前置条件，同时反映项目存在可被外部审计的安全盲区。https://github.com/moltis-org/moltis/pull/1179

- **沙箱修复等待时间较长**（来源 Issue #1137）：用户 holgzn 于 6 月 27 日报告 Apple 容器 ID 超限导致沙箱启动失败，直到 8 月 24 日才随 PR #1237 修复。虽然该 issue 今日已关闭，但约 2 个月的修复周期值得关注，沙箱相关 bug 的处理时效可能是用户痛点之一。https://github.com/moltis-org/moltis/issues/1137

- **订阅用户对 OAuth 接入诉求明确**（来源 Issue #1239）：贡献者主动提出“已有 OpenAI Codex 与 Copilot OAuth，为何 xAI 只有 API key？”的对比，说明用户对主流订阅服务的 OAuth 矩阵一致性有较高期待。今日已实现并关闭。https://github.com/moltis-org/moltis/issues/1239

- **繁体中文用户参与翻译维护**（来源 PR #1225）：PeterDaveHello 提交了 zh-TW 界面的大范围翻译重写，多位贡献者持续维护多语言质量，表明项目在中文用户群体中具备稳定的社区基础。https://github.com/moltis-org/moltis/pull/1225

---

## 8. 待处理积压

- **PR #1199：Coder 远程工作区沙箱支持（开放中，无评论）** —— 自 2026-08-15 开放至今已 10 天，且是当前仅有的“旧”待合并 PR。功能量较大（含 REST API 工作区创建、PTY WebSocket、模板/预设/TTL 等），建议维护者安排 review 时间，避免继续积压。https://github.com/moltis-org/moltis/pull/1199

- **PR #1232：工具对象 schema OpenAI 兼容（待合并）** —— 8 月 22 日创建，涉及 Codex 严格工具模式下的数据丢失问题，属功能性修复，建议尽快纳入合并队列。https://github.com/moltis-org/moltis/pull/1232

- **PR #1243：Cron 保留已投递渠道上下文（待合并）** —— 8 月 24 日创建，与昨日合并的 #1226 属于同一功能链路的后续补充，可能需要在下一个版本中一并带出。https://github.com/moltis-org/moltis/pull/1243

- **Issue #1137（已关闭）暴露的处理流程提示**：虽然该 issue 已随 PR #1237 关闭，但从 6 月 27 日至 8 月 24 日的等待时间偏长，且期间无维护者标记 `triage` 或给出状态更新。若项目 wish 提升 bug 响应满意度，可考虑对沙箱/容器相关 issue 增加优先级标签机制。https://github.com/moltis-org/moltis/issues/1137

---

## 项目健康度小结

- **产量**：25 个 issue/PR 事件 / 24 小时，其中 16 条 PR 合并/关闭，交付效率高。
- **社区贡献**：外部开发者提交占比高（至少 6 名非核心作者），且覆盖功能、修复、i18n、安全多个领域。
- **风险点**：① 沙箱/容器类 bug 从报告到修复约 2 个月，需关注积压治理；② 安全类 PR #1179 排队 25 天才合并，安全补丁通道有提速空间；③ 当前 3 条待合并 PR 可能影响下个版本的发布范围，建议尽快推进 review。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

## CoPaw 项目动态日报 — 2026-08-25

> 数据来源：GitHub 仓库 [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)（即 CoPaw 项目代码库）。统计窗口：2026-08-24 至 2026-08-25。

---

### 1. 今日速览

CoPaw 过去 24 小时保持高活跃度：共 50 条 Issue 更新（新开/活跃 31 条，关闭 19 条），46 条 PR 更新（20 条待合并，26 条已关闭/合并），并发布了 v2.1.1-beta.2 测试版本。社区关注焦点集中在**多智能体协作可靠性与任务连续性**（如 #6921、#7011、#7231）、**长期运行内存泄漏**（#5720、#7222）以及**控制台会话串线**问题。项目方今日关闭了多个 PR，包括一处重要的 e2e 测试修复（#7173）和 CI 边界版本派生修复（#7248），整体推进节奏正常，但若干核心稳定性 Bug 仍缺少明确修复 PR，健康度处于“活跃但需重点跟进稳定性”的状态。

---

### 2. 版本发布

**v2.1.1-beta.2** 于今日发布，主要包含：

- **feat(console)**：在 assistant 响应卡片中新增 artifacts 展示（PR [#7161](https://github.com/agentscope-ai/QwenPaw/pull/7161)）。
- **fix(video)**：修复 OpenAI Responses API 上 tool-result 视频无法正确投递的问题（PR [#7061](https://github.com/agentscope-ai/QwenPaw/pull/7061)）。
- **test(browser)**：相关浏览器端测试调整（内容截断，未完整公开）。

该版本为 beta 测试版，未提及破坏性变更或特殊迁移步骤，建议用户升级后关注 console artifacts 与视频工具结果是否正常工作。

---

### 3. 项目进展

今日关闭/合并的 PR 中，对项目有实质推进的包括：

- **[#7173](https://github.com/agentscope-ai/QwenPaw/pull/7173) fix(e2e): re-anchor agents action cells and follow project-directory API rename** — 适配 agents 表格新增 “Backend” 列及 project-directory API 重命名，修复 e2e 测试定位失效问题，保证测试套件与前端改版同步。
- **[#7248](https://github.com/agentscope-ai/QwenPaw/pull/7248) fix(ci): derive Docker boundary version from package** — 消除 Dockerfile 中硬编码的 runtime 边界版本，改为从 `__version__.py` 派生，降低 CI 配置漂移风险。
- **[#7245](https://github.com/agentscope-ai/QwenPaw/pull/7245) chore(console): remove desktop mode reminder** — 移除控制台桌面模式提示，简化 UI。
- **[#6067](https://github.com/agentscope-ai/QwenPaw/pull/6067) feat: more sensitive files & allow read global** — 增强“敏感文件”规则并允许全局读取，提升安全配置灵活性。
- **[#7167](https://github.com/agentscope-ai/QwenPaw/pull/7167) feat(creator) 1.1.0** — 大型功能聚合：支持 Anthropic/Gemini 协议、主流图片/视频生成提供商、对话门控视频分发、扩展素材库、项目复制与重建、会话状态卡片、2GB 上传及运行时可靠性加固，是 Creator 子系统的重大版本推进。

另外，今日有两个标记 **DO NOT MERGE** 的 PR 已被关闭，未进入主线（详见第 5 节）。

---

### 4. 社区热点

按评论数排序，今日最受关注的问题：

- **[#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921)（11 评论）【Bug】多步骤任务规划后无提示停止**：用户报告 Agent 输出“Now 2.1, 3.1, 3.2. Let me do all three.” 这类规划后即停止，必须手动说“继续”才会执行。这反映了用户对 **任务自主连续性** 的强需求，核心是 LLM 工具调用决策与执行循环的一致性。
- **[#6782](https://github.com/agentscope-ai/QwenPaw/issues/6782)（9 评论）【Bug】Docker 版本插件/应用市场始终“维护中”**：用户无法使用关键扩展功能，此类问题影响面较大，需尽快定位后端服务状态判断逻辑。
- **[#338](https://github.com/agentscope-ai/QwenPaw/issues/338)（8 评论）【Feature】Webhook 功能**：长期需求，希望 CoPaw 能向外回调结果或支持外部系统异步查询，是开放平台能力的重要信号。
- **[#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011)（8 评论）【Bug】Console 停止请求取消活跃飞书会话**：多 UI 会话下的身份串扰问题，用户强调曾导致正在进行的飞书对话被取消。
- **[#3224](https://github.com/agentscope-ai/QwenPaw/issues/3224)（7 评论）【Feature】自然语言驱动的自进化多智能体协作团队**：用户提出“手动挡”创建多智能体团队门槛高，希望系统能以自然语言自动编排，属于更高阶的 Agent UX 方向。

---

### 5. Bug 与稳定性

按严重程度排列今日报告的 Bug：

| 严重度 | Issue | 描述 | 是否有对应 Fix PR |
|--------|-------|------|------------------|
| 🔴 严重 | [#7222](https://github.com/agentscope-ai/QwenPaw/issues/7222) | `qwenpaw-backend` 连续运行 2 天内存增长至 **20.7GB**，整机卡死。与 #5720 不同，属于运行时累积泄漏 | 暂无 |
| 🔴 严重 | [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | 多步骤任务在规划后自行停止，用户需输入“继续”才能推进，严重影响自动化 | 暂无 |
| 🔴 严重 | [#7231](https://github.com/agentscope-ai/QwenPaw/issues/7231) | Console 多会话并行时，发送消息可能被路由到**错误会话**并丢失 | **已有 PR [#7237](https://github.com/agentscope-ai/QwenPaw/pull/7237)**（freeze session identity for chat sends） |
| 🟠 较高 | [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) | Console 界面的停止请求可能取消其他活跃会话（如飞书），多 UI 会话身份串扰 | 暂无明确 fix，但 [#7237](https://github.com/agentscope-ai/QwenPaw/pull/7237) 可能覆盖 |
| 🟠 较高 | [#5720](https://github.com/agentscope-ai/QwenPaw/issues/5720) | v1.1.12.post2 后台任务与 HTTP 会话泄漏，内存从 150MB 涨至 580MB 后被杀，导致配置损坏需重配 | 暂无 |
| 🟠 较高 | [#7210](https://github.com/agentscope-ai/QwenPaw/issues/7210) | `agent.json` 中工具全部启用，但会话函数 schema 未注入工具 | 暂无 |
| 🟠 较高 | [#6822](https://github.com/agentscope-ai/QwenPaw/issues/6822) | 流式 HTTP MCP 连接短暂故障重连后，当前会话被永久阻塞 | 暂无 |
| 🟡 中等 | [#6782](https://github.com/agentscope-ai/QwenPaw/issues/6782) | Docker 版插件/应用市场始终提示维护中 | 暂无（已关闭，可能已修复） |
| 🟡 中等 | [#7199](https://github.com/agentscope-ai/QwenPaw/issues/7199) | `daily_paper` 处理 PDF 时因 surrogate 字符崩溃，整个任务失败 | 暂无 |
| 🟢 一般 | [#7121](https://github.com/agentscope-ai/QwenPaw/issues/7121) | macOS 上 `test_sibling_sessions_run_without_serializing` 定时性失败（已关闭） | 已关闭，测试已加固 |

另有两个 **DO NOT MERGE** 的修复 PR 今日被关闭，未进入主线，需关注后续处理：

- [#7234](https://github.com/agentscope-ai/QwenPaw/pull/7234)：恢复 ReMe 周期索引压缩，但被标记为 DO NOT MERGE。
- [#7247](https://github.com/agentscope-ai/QwenPaw/pull/7247)：停止向 SiliconFlow DeepSeek V4 发送媒体，同样被关闭。

这些代码可能包含有价值的修复，建议维护者说明关闭原因或重新提交。

---

### 6. 功能请求与路线图信号

今日社区提出的功能需求，与当前 PR 的对应关系如下：

- **Workspace 级 Skill 预加载策略** —— 用户 [#7182](https://github.com/agentscope-ai/QwenPaw/issues/7182) 提议为特定工作区预加载 Skill，已有对应实现 **[PR #7183](https://github.com/agentscope-ai/QwenPaw/pull/7183)**，很可能进入下个版本。
- **Webhook 功能**（[#338](https://github.com/agentscope-ai/QwenPaw/issues/338)）—— 长期要求，尚未看到相关 PR，可能属于外部集成路线图。
- **自然语言驱动多智能体团队**（[#3224](https://github.com/agentscope-ai/QwenPaw/issues/3224)）—— 无对应 PR，但项目已有 multi-agent 基础设施，可能是下一步迭代方向。
- **按频道独立配置模型**（[#7085](https://github.com/agentscope-ai/QwenPaw/issues/7085)）—— 当前模型配置粒度不够灵活，社区有明确场景。
- **多步骤消息聚合**（[#5563](https://github.com/agentscope-ai/QwenPaw/issues/5563)）—— 避免碎片化刷屏，提升交互体验。
- **多智能体同一会话窗口协作**（[#6925](https://github.com/agentscope-ai/QwenPaw/issues/6925)）与 **跨智能体交互机制优化**（[#3013](https://github.com/agentscope-ai/QwenPaw/issues/3013)）—— 反映用户对智能体协作可见性与连续性的强烈需求。

另外，PR [#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960) 提出从 Codex/Qoder 导入 Agent 配置的技能，目前处于 Open 状态，可能是扩展外部生态的方向。

---

### 7. 用户反馈摘要

从今日活跃 Issue 中提炼的真实用户声音：

- **任务连续性痛点**（#6921）：用户明确表达“规划完就停、要我说继续”是自动化任务的最大障碍，他们期望 Agent 在合理规划后**直接执行**，而非半途停顿。
- **审批模式干扰**（[#7198](https://github.com/agentscope-ai/QwenPaw/issues/7198)）：用户抱怨夜跑任务时审批弹窗阻断流程，认为对过程产物的操作不应触发审批，否则“整夜盯弹窗”不可接受。
- **上下文压缩策略建议**（[#7230](https://github.com/agentscope-ai/QwenPaw/issues/7230)）：用户通过手动压缩绕开了任务执行中的自动压缩中断，建议自动压缩仅在会话空闲时执行，并区分桌面/网页阈值。
- **内存泄漏造成的配置损坏**（#5720）：用户报告进程被杀后配置数据损坏、需重新配置，对持久化可靠性提出了质疑。
- **生态集成需求**（[#7224](https://github.com/agentscope-ai/QwenPaw/issues/7224)）：俄语用户询问如何将 Aider CLI 接入 CoPaw，说明社区对第三方 agent 接入有需求，但文档或支持尚不清晰。
- **市场不可用影响满意度**（#6782）：插件/应用市场无法使用直接削弱了产品扩展能力，用户期待尽快修复。

总体来看，用户对 CoPaw 的多智能体潜力认可，但对**执行稳定性、资源释放、审批策略**等领域有明确不满，这些是提升口碑的关键。

---

### 8. 待处理积压

以下重要 Issue/PR 长期未获得响应或关闭，建议维护团队优先关注：

**长期未关闭的 Issue：**

| Issue | 创建时间 | 更新时间 | 描述 |
|-------|---------|---------|------|
| [#338](https://github.com/agentscope-ai/QwenPaw/issues/338) | 2026-03-02 | 2026-08-24 | Webhook 功能需求 |
| [#2420](https://github.com/agentscope-ai/QwenPaw/issues/2420) | 2026-03-27 | 2026-08-24 | 跨智能体协作引导、身份混淆等体验反馈 |
| [#2750](https://github.com/agentscope-ai/QwenPaw/issues/2750) | 2026-04-01 | 2026-08-24 | 多智能体协作隔离机制增强 |
| [#3013](https://github.com/agentscope-ai/QwenPaw/issues/3013) | 2026-04-07 | 2026-08-24 | 多智能体交互机制优化 |
| [#3224](https://github.com/agentscope-ai/QwenPaw/issues/3224) | 2026-04-10 | 2026-08-24 | 自然语言驱动的自进化多智能体团队 |
| [#3425](https://github.com/agentscope-ai/QwenPaw/issues/3425) | 2026-04-15 | 2026-08-24 | 配置/会话支持关系型数据库，Teams 渠道 |
| [#5563](https://github.com/agentscope-ai/QwenPaw/issues/5563) | 2026-06-26 | 2026-08-24 | 多步骤消息聚合 |
| [#5720](https://github.com/agentscope-ai/QwenPaw/issues/5720) | 2026-07-02 | 2026-08-24 | v1.1.12.post2 内存泄漏 |

**长期未合并的 PR：**

- [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399)（2026-07-23 创建，Under Review）：ReMeLightMemoryCard 的 reranker UI 配置面板。
- [#7066](https://github.com/agentscope-ai/QwenPaw/pull/7066)（2026-08-16 创建，Under Review）：OAuth2 auth-code 提供商轮转 refresh_token 持久化修复。
- [#7080](https://github.com/agentscope-ai/QwenPaw/pull/7080)（2026-08-17 创建，Under Review）：可选 PowerContext 长时记忆后端。

这些积压项覆盖了从架构级功能到关键 Bug 修复，若不能及时推进，可能损害社区信心。建议维护者评估优先级并给出时间预期。

---

**总结**：CoPaw 项目今日迭代节奏良好，社区讨论度高，但在内存管理、会话路由、任务执行连续性等稳定性方面的 Bug 仍未得到完全解决。版本 v2.1.1-beta.2 带来的 console artifacts 与视频修复是正向信号，长期功能请求（如 webhook、Agent Teams）仍停留在收集阶段。建议下一阶段优先处理高严重度 Bug，并回应热门 feature 请求，以维持社区活跃度与信任。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 — 2026-08-25

> 数据来源：[github.com/qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw) | 统计周期：2026-08-24 ~ 2026-08-25


## 1. 今日速览

过去 24 小时 ZeptoClaw 活跃度较低：仅新增 1 条 Issue（#650），无新 PR、无新版本发布。唯一的新 Issue 聚焦于 REPL 交互的健壮性改进，属于 UX 打磨方向，而非核心功能迭代，说明项目当前处于相对平稳的维护/优化期。Issue 提交后暂无评论和讨论，社区参与度不高，但该需求本身具有明确价值，值得关注后续走向。整体项目健康度良好，无新引入的 Bug 或回归报告。

- 新开/活跃 Issue：1 条
- 新开 PR：0 条
- 新 Release：0 个


## 2. 版本发布

过去 24 小时无新版本发布，最新 Release 状态未发生变化。


## 3. 项目进展

今日无 PR 被合并或关闭，因此没有代码层面的实质性推进。唯一值得关注的项目动态是 Issue [#650](https://github.com/qhkm/zeptoclaw/issues/650) 提出的 REPL UX 改进建议，它描绘了交互层面两个明确的优化方向（详见下文），可视为未来小型迭代的潜在候选。整体来看，项目今日处于节奏放缓的状态，未向前迈出新的功能里程碑。


## 4. 社区热点

今日唯一活跃的 Issue 为 [qhkm/zeptoclaw Issue #650](https://github.com/qhkm/zeptoclaw/issues/650)（作者：Suraware），当前评论数为 0，尚未形成讨论热度。

- **标题**：feat(cli): REPL UX hardening - safe Ctrl+C/Ctrl+D, lone '/' command table
- **提出时间**：2026-08-24
- **诉求分析**：该 Issue 关注的是 `zeptoclaw agent` 交互式 REPL 的两个具体痛点：
  1. **任意 Ctrl+C/Ctrl+D 都会直接退出**，导致用户误触按键时正在进行的会话被意外销毁，缺少安全保护机制；
  2. **单独输入 `/` 被当作未知命令**（`Unknown command: /`），但用户视角下 `/` 有望作为命令面板的入口或命令提示符，当前的处理方式不符合直觉。

这反映出用户对 REPL 的安全退出机制和命令解析容错性的期待，属于命令行工具的常见高阶需求（如 vim 的 `<C-c>` 防护、shell 的空命令处理等）。该 Issue 虽无评论区讨论，但其问题描述详实、场景明确，具备成为社区共识的基础。


## 5. Bug 与稳定性

今日未报告崩溃、内存泄漏、回归或数据完整性等严重 Bug。Issue #650 所描述的两个问题更偏向交互设计缺陷与健壮性不足，而非功能性 Bug：

| 严重程度 | 问题描述 | 关联 Issue | Fix PR |
|---------|---------|-----------|--------|
| 低（UX 缺陷） | REPL 中任意 Ctrl+C/Ctrl+D 直接结束会话，可能造成误触丢失进度 | [#650](https://github.com/qhkm/zeptoclaw/issues/650) | 无 |
| 低（命令解析） | 单独输入 `/` 被作为未知命令处理，未提供帮助或候选命令展示 | [#650](https://github.com/qhkm/zeptoclaw/issues/650) | 无 |

两项问题均处于待讨论/待实现状态，未对现有用户造成数据安全层面的影响。


## 6. 功能请求与路线图信号

今日的唯一功能请求来自 Issue [#650](https://github.com/qhkm/zeptoclaw/issues/650)，包含两个明确的改进方向：

1. **安全退出机制**：区分“主动退出”（如输入 `exit`、`:q`）与“信号中断”（Ctrl+C/Ctrl+D），避免因误操作导致会话意外终止——这是对交互安全性的直接补强；
2. **`/` 命令入口**：将单独的 `/` 识别为命令前缀并展示命令列表/帮助信息，而非直接报错——这是对命令发现性的优化。

结合项目当前无新 PR、无新 Release 的状态，该 Issue 若获得维护者认可，很可能作为下一个小版本（如 `0.x.y` 的 patch/minor）的改进项纳入开发计划。鉴于 REPL 是 `zeptoclaw agent` 的核心交互入口，此类 UX 优化对提升日常使用体验有明显的正向价值。


## 7. 用户反馈摘要

今日无 Issue 评论或 PR 讨论可供提炼。从 Issue #650 的原始描述中，可以推测提交者 Suraware 的使用场景与潜在诉求：

- **真实痛点**：作为 REPL 的日常使用者，在长时间会话中可能因误触 Ctrl+C 导致会话中断，需要重新初始化上下文，造成效率损失；
- **对当前行为的理解**：用户认为“任何 Ctrl+C/Ctrl+D 都应该退出”并非合理行为，期望更细粒度的信号处理策略（例如首次按键提示确认、连续两次才退出等）；
- **对 `/` 的预期**：用户将 `/` 视为类 Slack/Discord 风格的命令触发符，期望其能引导至帮助或命令列表，而非简单报错。

这些信息表明，用户对 ZeptoClaw 的 REPL 交互有较高预期，并希望其达到主流命令行工具（如 `psql`、`redis-cli`）的交互完成度。


## 8. 待处理积压

今日暂无长期未响应的重要 Issue 或 PR 需要提醒维护者关注。唯一新增的 Issue #650 提交于 2026-08-24，距今不足 48 小时，尚处于正常响应窗口期内。建议维护者在下一个工作周期内对 #650 给出初步反馈（如打标签、指派负责人或回复采纳意向），以维持社区参与积极性。

---

**报告生成时间**：2026-08-25 | **数据窗口**：过去 24 小时 | **整体评估**：📊 活跃度低，项目处于稳定维护期，无风险信号，一条有价值的 UX 改进建议待响应。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-25

## 1. 今日速览

过去 24 小时 ZeroClaw 保持高位活跃：共更新 Issues 50 条（新开/活跃 43 条，关闭 7 条）、PR 50 条（待合并 45 条，合并/关闭 5 条），无新版本发布。项目当前工作重心集中在三大方向：**安全加固**（#10165 委托绕过风险命令、#9678 Git shell 策略、#10308 共享工作区隔离）、**provider 可靠性与可观测性**（#10023/#9812 回退模型逻辑、#10144 生命周期会计、#10234 终端失败原因透出）以及**开放协议互操作**（#8603 Chat Completions RFC 获得 24 条评论，成为当前社区讨论焦点）。值得注意的是一批 8 月 24 日创建的 PR（#10304–#10311）集中提交，说明维护者正在密集推进多项重构与测试补强工作；同时有 4 个 S0/S2 级安全与数据风险 issue 处于开放或进行中状态，需要社区关注。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日有 5 条 PR 被关闭/合并，以下为关键条目：

- **[PR #10208](https://github.com/zeroclaw-labs/zeroclaw/pull/10208) fix(tests): fix Windows platform test failures** — 修复了 Windows 平台上 `bash` 查找不安全、release 脚本门禁失败等多个测试问题；同时覆盖 cron/provider/工具链等多个组件的平台兼容性。
- **[PR #9563](https://github.com/zeroclaw-labs/zeroclaw/pull/9563) fix(channels): populate the typed media envelope from Telegram** — Telegram 此前仅将图片/文档解析为消息文本，导致下游无法判断"本轮是否携带图片"，该 PR 补齐了类型化媒体信封，为后续多通道媒体能力铺路。
- **[PR #10027](https://github.com/zeroclaw-labs/zeroclaw/pull/10027) fix(providers): report the served model in reliable fallback failure logs** — 解决了回退诊断日志中模型名不准确的问题（对应 #10023，已关闭）。
- **[PR #10144](https://github.com/zeroclaw-labs/zeroclaw/pull/10144) fix(providers): complete lifecycle provider accounting** — 完成 provider 调用生命周期会计（对应 #10143，已关闭），确保每个实际物理 provider 叶子按物理顺序精确记录一次。

整体来看，今日合并工作主要围绕 **provider 可观测性** 与 **跨平台测试稳定性** 两个方向，均为基础设施层面的修复，未引入新功能特性。

## 4. 社区热点

- **[Issue #8603: RFC: ZeroClaw Chat Completions profile](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)**（24 条评论，开放，risk:high）
  当前社区讨论最热条目，要求为 ZeroClaw 增加 OpenAI Chat Completions 协议兼容面，使 Open WebUI、LobeChat、Aider、LangChain 等生态工具可直接接入。该 issue 是明确的 **协议互操作诉求**，反映了用户希望将 ZeroClaw agent 能力接入成熟客户端生态的强烈意愿。考虑到该项目已支持 WebSocket/ACP/webhook，增加 Chat Completions profile 将显著降低接入门槛。

- **[Issue #7431: Pre-turn tool elicitation hints](https://github.com/zeroclaw-labs/zeroclaw/issues/7431)**（6 条评论，status:accepted，risk:high）
  建议在 LLM 主调用前增加轻量意图提取步骤，自动识别 NL 路由请求并设置 `send_via`。用户反馈 `send_via` 机制需显式声明，agent 不会主动调用，属于实际使用中的可用性痛点。

- **[Issue #9512: Annotate bespoke CI gates](https://github.com/zeroclaw-labs/zeroclaw/issues/9512)**（5 条评论）
  要求为 `repo-structure`、`nix-hash-drift` 等自定义 CI 门禁标注其对应的历史 issue/事故，提升工程可维护性。结合同日提交的 [PR #10304](https://github.com/zeroclaw-labs/zeroclaw/pull/10304)（生成 PR review 策略区域），项目正在系统性地优化贡献者协作体验。

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 严重（S0 安全/数据风险）

- **[Issue #10165](https://github.com/zeroclaw-labs/zeroclaw/issues/10165) independent delegate bypasses `block_high_risk_commands`（开放，in-progress，risk:high）**
  独立 delegate 可以绕过自身 `risk_profile` 中 `block_high_risk_commands = true` 的限制执行高危命令（如 `rm`），属于权限绕过漏洞。目前标记为 in-progress，**暂无对应 fix PR**。

- **[Issue #9812](https://github.com/zeroclaw-labs/zeroclaw/issues/9812) Provider fallback carries the primary's model id（开放，r:needs-repro，risk:high）**
  回退 provider 被要求使用主 provider 的模型 ID，导致回退永远不会触发，并在重试时把 fallback 拉入 cooldown。此问题与已关闭的 #10023 属于同源缺陷，[PR #10027](https://github.com/zeroclaw-labs/zeroclaw/pull/10027) 只修复了日志侧，模型 ID 传递问题仍待解决。且此 issue 已标记 `stale`，建议维护者优先处理。

### 🟠 高优先级（P1/P2 + risk:high）

- **[Issue #10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) 交互式 agent 会话上下文被限制在 32k tokens（开放，in-progress）**
  配置 `max_context_tokens = 131072` 时实际会话仍按 32k 截断，影响长对话场景。

- **[Issue #10073](https://github.com/zeroclaw-labs/zeroclaw/issues/10073) `StoragePolicy::Rolling` 性能回归（开放，in-progress）**
  默认存储策略在高事件量下性能严重下降，提议废弃 Rolling 并入 Rotating，并扩展 `/api/logs` 跨段文件查询。

- **[Issue #7759](https://github.com/zeroclaw-labs/zeroclaw/issues/7759) gateway WebSocket 生命周期与 agent turn 耦合（开放，in-progress）**
  客户端断开会取消进行中的 turn，要求解耦为后台执行+断线重连恢复。

- **[Issue #10232](https://github.com/zeroclaw-labs/zeroclaw/issues/10232) daemon 诊断信息丢失错误链（开放，in-progress/follow-up）**
  监督组件仅保留 `e.to_string()` 外层信息，底层 cause 丢失，建议记录完整错误链。

### 🟡 中低优先级

- **[Issue #9363](https://github.com/zeroclaw-labs/zeroclaw/issues/9363) 配置元数据未本地化**（开放，P2）— 非英语 locale 下 config 分组标题/帮助文本仍为英文。
- **[Issue #10238](https://github.com/zeroclaw-labs/zeroclaw/issues/10238) ZeroCode 显示过期 Connected 状态**（开放，P2）— daemon 退出后 TUI 界面仍显示绿色连接状态。
- **[Issue #10251](https://github.com/zeroclaw-labs/zeroclaw/issues/10251) 17 个 Telegram listen_* 测试依赖墙钟超时**（已关闭）— 并行 CI 负载下产生不稳定失败。
- **[Issue #9590](https://github.com/zeroclaw-labs/zeroclaw/issues/9590) 并发 `models refresh` 丢失缓存条目**（已关闭）— 读-改-写未加跨进程锁。

### ✅ 今日已关闭的 Bug

| Issue | 关联 PR | 说明 |
|---|---|---|
| #10023 回退日志模型名错误 | #10027 | 已修复 |
| #10106 代理选择器拒绝 transcription 服务 | — | 已关闭 |
| #10251 Telegram listen_* 测试不稳定 | — | 已关闭 |
| #9590 并发 models refresh 丢失缓存 | — | 已关闭 |
| #10224 自定义 provider 5xx 日志转义异常 | — | 已关闭 |
| #10190 推理回退分类器误判 | — | 已关闭 |

## 6. 功能请求与路线图信号

- **[#8603 Chat Completions profile（RFC）](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)** — 开放中且评论最多。这是当前最有可能进入路线的功能，会让 ZeroClaw 无缝接入 OpenAI 生态工具链。目前尚无对应实现 PR，但社区讨论热度极高。
- **[#7431 Pre-turn tool elicitation hints](https://github.com/zeroclaw-labs/zeroclaw/issues/7431)** — 已 accepted，等待实现。属于运行时可用性增强。
- **[#7759 Gateway WebSocket 生命周期解耦](https://github.com/zeroclaw-labs/zeroclaw/issues/7759)** — 已 accepted 且 in-progress，涉及 web 聊天体验的稳定性，预计将进入后续版本。
- **[#10243 退役遗留 HMAC node transport](https://github.com/zeroclaw-labs/zeroclaw/issues/10243)** — 已 accepted/in-progress，属于架构清理，建议在下一版本推进。
- **[#10173 强制 Alpine Docker 非 root 镜像元数据](https://github.com/zeroclaw-labs/zeroclaw/issues/10173)** — 已 accepted/in-progress，安全 CI 强化，与 #10307（配对码策略）、#10308（共享工作区开关）同属当前安全加固方向。

**值得关注的近期提交信号：** [PR #8965](https://github.com/zeroclaw-labs/zeroclaw/pull/8965)（skills 声明式自动激活 + provider switch + 图像轮工具阻断）已在 review 中被要求拆分并 rebase（stacked 分支），其中 media 部分随 #9563 合入，feature 部分仍在推进，有可能进入下一步路线图。

## 7. 用户反馈摘要

- **协议兼容是最大诉求**：#8603 引发了 24 条讨论，用户明确希望 ZeroClaw 能被 Open WebUI、LobeChat、Continue.dev、Aider 等 OpenAI 协议生态直接调用，说明当前"仅 WebSocket/ACP/webhook"的暴露方式构成实际采用壁垒。
- **上下文限制与配置不符引发困惑**：#10068 用户配置 131072 tokens 但会话显示 32,000 cap，直接影响长上下文 agent 任务，属于典型"配置不生效"的信任度损伤。
- **安全边界绕过引发担忧**：#10165 中高权限命令绕过 `block_high_risk_commands` 的问题被标记为 S0 数据丢失/安全风险，说明用户对 delegate 场景下的安全隔离有明确预期。
- **日志可诊断性不足**：多个 issue（#10023、#10232、#10224）指向错误日志中模型名、错误链、JSON 转义信息不准确，说明在真实排障场景中诊断信息质量已成为突出痛点。
- **本地化不完整**：#9363 显示界面已翻译但配置元数据仍为英文，反映多语言用户已进入实际使用阶段，对一致性有要求。
- **测试稳定性影响信任**：#10251 有用户在并行 CI 中反复因 wall-clock 超时失败，虽代码本身无问题，但这类 flaky 测试消耗了社区与维护者双方的时间。

## 8. 待处理积压

**长期未响应/高风险阻塞项（建议维护者优先关注）：**

- **[Issue #9812](https://github.com/zeroclaw-labs/zeroclaw/issues/9812) Provider fallback 永远无法触发（开放，r:needs-repro，risk:high，status:stale）**
  自 8 月 7 日创建已逾两周半，是影响回退机制正常工作的核心缺陷，已被标记 stale，需尽快由维护者复现或引导。

- **[PR #9948](https://github.com/zeroclaw-labs/zeroclaw/pull/9948) fix(cron): scope cron tools to calling agent（开放，do-not-merge，needs-maintainer-review，risk:high）**
  cron 工具未按调用 agent 隔离，可跨 agent 列出/触发/删除任务，属于权限边界问题。PR 已存在 12 天，目前被标记 do-not-merge 且等待维护者 review。

- **[PR #9678](https://github.com/zeroclaw-labs/zeroclaw/pull/9678) fix(config): harden Git shell policy arguments（开放，needs-author-action，risk:high，size:XL）**
  作者已超过 3 周未更新，等待作者回应。该 PR 涉及 shell 参数规范化，对命令策略边界的准确性有重要价值。

- **[Issue #7431](https://github.com/zeroclaw-labs/zeroclaw/issues/7431) Pre-turn tool elicitation hints（开放，accepted，risk:high）**
  已 accepted 但自 6 月 9 日提出至今已 2.5 个月无对应 PR，属于已批准但迟迟未落地的能力增强。

- **[Issue #8289](https://github.com/zeroclaw-labs/zeroclaw/issues/8289) OIDC 里程碑 tracker（开放，accepted，risk:high）**
  大型 roadmap tracker，协调 #7141 三阶段实现（AuthProvider 验证 → 令牌交换 → 会话建立），需要持续投入。

- **[PR #8965](https://github.com/zeroclaw-labs/zeroclaw/pull/8965) feat(skills): declarative auto-activation（开放，stacked，needs-author-action，risk:high）**
  依赖的分支 #9563 已合入，该 PR 注释标注了需要 rebase 和按 review 反馈拆分提交，目前处于 author 待行动状态。

---

*数据统计区间：2026-08-24 至 2026-08-25（UTC）。报告基于 GitHub 公开数据自动生成，如需完成某个 Issue/PR 的完整讨论上下文，可点击对应链接查看。*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*