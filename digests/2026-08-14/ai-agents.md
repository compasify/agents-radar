# OpenClaw 生态日报 2026-08-14

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-08-14 00:59 UTC

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

# OpenClaw 项目动态日报 — 2026-08-14

## 1. 今日速览

过去 24 小时内，OpenClaw 仓库保持**非常高的活跃度**：共更新 500 条 Issue（新开/活跃 337 条，关闭 163 条）和 500 条 PR（待合并 391 条，合并/关闭 109 条），无新版本发布。值得关注的是：Issue 关闭率仅 32.6%，PR 合并率仅 21.8%，大量 P1 级别的消息丢失/会话状态问题（#121058、#67777、#92433 等）仍在积压，**社区活跃但交付/解决效率相对滞后**是当前项目健康度的主要隐忧。当日提交的多个高价值修复 PR（#123397、#123398、#123399）仍处于待审查状态，尚未合并。

- 过去 24 小时 Issue 更新：500 条（新开/活跃: 337，关闭: 163）
- 过去 24 小时 PR 更新：500 条（待合并: 391，合并/关闭: 109）
- 新版本发布：0 个

---

## 2. 版本发布

过去 24 小时内无新版本发布。

---

## 3. 项目进展

今日合并/关闭的 PR 主要集中在 **UI/UX 体验修复、CLI/网关稳定性和配置一致性**方面，整体属于质量加固型推进，没有大型功能落地。

### 已合并/关闭 PR

- **fix(ui): re-clicking the active nav item stacks duplicate history entries (#123205, CLOSED)** — 修复控制台 UI 中重复点击当前导航项导致历史记录堆积、返回键失灵的缺陷。属纯前端体验修复，风险低。
  https://github.com/openclaw/openclaw/pull/123205

- **fix(slack): apply updated global settings to new messages (#123373, CLOSED)** — 修复 Slack 渠道不即时应用全局设置变更（模型/思考模式/路由等）的问题，避免需要重启渠道或 Gateway 才能生效。
  https://github.com/openclaw/openclaw/pull/123373

- **fix(doctor): repeated no-op OAuth migration prompt and swallowed migration error cause (#123164, CLOSED)** — 消除 `openclaw doctor` 中重复的无操作 OAuth 迁移提示，同时不再吞掉迁移错误原因，提升可诊断性。
  https://github.com/openclaw/openclaw/pull/123164

- **fix(gateway): models.list returns empty forever while chat works (#123208, CLOSED)** — 修复一个导致控制台 UI 模型选择器永久显示 "No models available" 的 owner binding-flag 不匹配问题，属影响面较大的网关修复。
  https://github.com/openclaw/openclaw/pull/123208

- **fix(ui): create automations for selected agent in all-agents view (#123381, CLOSED)** — 修复多代理环境下在 "All agents" 视图创建自动化时无法正确传递 owner 的问题。
  https://github.com/openclaw/openclaw/pull/123381

### 今日新提交、待审查的高价值 PR

以下 PR 于 8 月 14 日当天提交，反映维护者正在集中治理**消息可靠性、会话状态一致性、升级路径**等核心问题，值得密切关注：

- **fix(openai): unify server-side compaction gates and harden compaction recovery (#123397)** — 统一 OpenAI 服务端 compactions 的双重判断逻辑，并加固 compaction 恢复路径。
  https://github.com/openclaw/openclaw/pull/123397

- **fix(ai): recover OpenAI WebSocket turns after compaction rejection (#123398)** — 修复 OpenAI WebSocket 运输层在加密 compaction checkpoint 被拒绝后反复失败的缺陷。
  https://github.com/openclaw/openclaw/pull/123398

- **fix: install externalized configured plugins during upgrades (#123399)** — 修复升级后外部化配置插件未被自动安装的问题，直接影响升级体验。
  https://github.com/openclaw/openclaw/pull/123399

- **fix(ci): restore Codex state test shard owner after merge drift (#123400)** — 修复并发合并且引发的 CI 分片归属漂移，维护基础设施健康。
  https://github.com/openclaw/openclaw/pull/123400

### 整体评估

项目今日向前推进的幅度中等偏小：修复集中在局部体验与稳定性问题上，但大量关键 P1 消息可靠性 PR（如 #121578、#120794、#82950）仍处于 "needs proof" 或 "waiting on author" 状态，表明审查/验证瓶颈是当前交付节奏的主要约束。

---

## 4. 社区热点

今日讨论最活跃的 Issue 反映了用户对**消息投递可靠性、安全信任机制、会话污染**的强烈关注。

### #121058 — Silent reply failures still recurring after #116277 closed（92 评论）

- 作者: sloptop-the-terrible | 创建: 2026-08-09 | 评论: 92
- https://github.com/openclaw/openclaw/issues/121058

最受关注的问题。用户明确指出 **#116277 被关闭后静默回复失败的缺陷仍在发生**，监控 cron 在 issue 关闭后仍持续记录新故障。这暴露了"关闭 issue 但未真正修复"的流程问题，是社区信任度的直接打击。

### #7707 — Feature Request: Memory Trust Tagging by Source（48 评论）

- 作者: LumenLantern | 创建: 2026-02-03 | 评论: 48
- https://github.com/openclaw/openclaw/issues/7707

一个被标记为需要安全审查、产品决策的长期功能请求。用户要求根据记忆来源（用户命令、网页抓取、第三方 skill）标记信任等级，以防御通过恶意网页/消息实现的记忆投毒攻击，进而影响后续 agent 行为。该 issue 自 2 月 3 日创建至今已过半年，但仍停留在讨论阶段，**社区耐心正在消耗**。

### #25592 — Text between tool calls leaks to messaging channels（48 评论）

- 作者: doomclaw | 创建: 2026-02-24 | 评论: 48 | 👍: 1
- https://github.com/openclaw/openclaw/issues/25592

P1 安全问题（属 session-state/security 影响）。agent 在工具调用间隙产生的内部处理文本被路由到 Slack/iMessage 等可见消息通道，导致内部处理过程、错误信息泄露给终端用户。这是严重 UX 与隐私问题，但自 2 月以来一直未修复。

### #121953 — Cron agent turns stall on DeepSeek（16 评论）

- 作者: Dytchem | 创建: 2026-08-11 | 评论: 16
- https://github.com/openclaw/openclaw/issues/121953

用户发现 OpenClaw 给 cron 任务加 `[cron:<jobId> <name>]` 消息前缀，而 DeepSeek API 对该前缀的请求从低优先级队列服务，导致 cron 任务停滞数十秒至数分钟。这是**具体供应商与产品行为之间的冲突**，需要产品决策。

### #44925 — Subagent completion silently lost（27 评论）

- 作者: IIIyban | 创建: 2026-03-13 | 评论: 27 | 👍: 2
- https://github.com/openclaw/openclaw/issues/44925

子代理任务编排存在多种"结果静默丢失"路径：完成通知失败、E31/E42/E45 错误、超时、无重试、无通知、无自动重启。用户痛点是**失败完全不可见**，属于 P1 消息丢失问题。

---

## 5. Bug 与稳定性

按严重程度排列今日关注的 Bug 与回归问题（P1 为最高优先级）。

### 严重（数据/消息丢失、会话阻塞）

| Issue/PR | 标题 | 优先级 | 状态 | 修复 PR |
|---|---|---|---|---|
| [#121058](https://github.com/openclaw/openclaw/issues/121058) | Silent reply failures still recurring after #116277 closed | P1 | OPEN，92 评论 | 无明确修复 |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent completion silently lost — no retry/no notification | P1 | OPEN | 无 |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) | Subagent completion delivery lost on timeout/drain/orphan prune | P1 | OPEN | 无 |
| [#92433](https://github.com/openclaw/openclaw/issues/92433) | Subagent completion dropped when announce steers into ending run | P1 | OPEN | 无 |
| [#47975](https://github.com/openclaw/openclaw/issues/47975) | Subagent sessions persist after completion, main session unresponsive | P1 | OPEN | 无 |
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | Text between tool calls leaks to messaging channels | P1 安全 | OPEN，48 评论 | 无 |
| [#111498](https://github.com/openclaw/openclaw/issues/111498) | Main agent blocked by persistent workspace-state migration (macOS, Anthropic) | P1 回归 | OPEN | 无 |

### 中高（功能异常、性能退化）

| Issue/PR | 标题 | 优先级 | 状态 | 备注 |
|---|---|---|---|---|
| [#121953](https://github.com/openclaw/openclaw/issues/121953) | Cron agent stalls on DeepSeek due to `[cron:]` prefix deprioritized | P1 | OPEN | 涉及供应商行为，需产品决策 |
| [#91363](https://github.com/openclaw/openclaw/issues/91363) | Isolated cron fails with "LLM request failed" at model-call-started | P1 | OPEN | 模型请求从未到达供应商，手动 `cron run` 正常 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | Leaks unreaped hook/tool child processes (zombies) | P1 | OPEN | 长期运行导致运行时退化 |
| [#89278](https://github.com/openclaw/openclaw/issues/89278) | Codex OAuth refresh timeout on cron/heartbeat despite probe OK | P1 回归 | OPEN | 10s 超时 < 实际刷新耗时 |
| [#123073](https://github.com/openclaw/openclaw/issues/123073) | dev-channel update fails: EUNSUPPORTEDPROTOCOL workspace:* | P1 | OPEN | 新 issue（2026-08-13），升级管道的 pnpm/npm 冲突 |
| [#115421](https://github.com/openclaw/openclaw/issues/115421) | Schema downgrade recovery quarantines/wipes state DB (cron jobs lost) | P1 | OPEN | 数据丢失级 |
| [#78493](https://github.com/openclaw/openclaw/issues/78493) | `sudo openclaw update` creates mixed ownership, doctor overwrites config | P1 | OPEN | 升级事故链 |

### 中低（回归、体验问题）

| Issue/PR | 标题 | 优先级 | 状态 |
|---|---|---|---|
| [#43747](https://github.com/openclaw/openclaw/issues/43747) | Memory management chaos across users/installs | P2 回归 | OPEN，11 评论 |
| [#72015](https://github.com/openclaw/openclaw/issues/72015) | active-memory blocks replies; QMD boot init overloads gateway | P1 | OPEN（fix-shape-clear） |
| [#97983](https://github.com/openclaw/openclaw/issues/97983) | iOS/WebChat append to transcript but don't trigger replies | P1 | OPEN，9 评论 |
| [#85714](https://github.com/openclaw/openclaw/issues/85714) | Final agent_message stranded when LLM forgets delivery tool | P1 | CLOSED（已修复？） |
| [#40611](https://github.com/openclaw/openclaw/issues/40611) | Heartbeat drift fix causes aggressive retry blocking Telegram | P1 | OPEN |
| [#54488](https://github.com/openclaw/openclaw/issues/54488) | Session lane starvation: followup drain monopolizes dispatch | P1 | OPEN |
| [#105342](https://github.com/openclaw/openclaw/issues/105342) | exec outputs rendered as images instead of text | P2 | CLOSED |

### 值得注意的修复 PR（今日提交或活跃）

- **#123397 fix(openai): unify server-side compaction gates and harden compaction recovery** — 直接回应 #95553（preflight compaction 超时）类问题
  https://github.com/openclaw/openclaw/pull/123397

- **#123398 fix(ai): recover OpenAI WebSocket turns after compaction rejection** — 修复 WebSocket 场景下的 compaction 拒绝死循环
  https://github.com/openclaw/openclaw/pull/123398

- **#123193 fix(channels/turn): clear pending history on error paths** — 修复群聊中 turn 失败时历史缓冲残留、重复喂给模型的问题
  https://github.com/openclaw/openclaw/pull/123193

- **#123208 fix(gateway): models.list returns empty forever**（已合并）— 修复模型选择器永久空置
  https://github.com/openclaw/openclaw/pull/123208

---

## 6. 功能请求与路线图信号

### 高热度 / 存在已久的功能请求

| Issue | 标题 | 创建时间 | 热度 | 状态 |
|---|---|---|---|---|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | Memory Trust Tagging by Source（记忆信任标记） | 2026-02-03 | 48 评论 | 等待安全审查/产品决策 |
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | Text between tool calls leaks to channels（修复建议） | 2026-02-24 | 48 评论 | P1 安全，未修复 |
| [#9016](https://github.com/openclaw/openclaw/issues/9016) | Expose OpenRouter usage cost to agent runtime | 2026-02-04 | 8 评论 | 等待维护者审查 |
| [#45758](https://github.com/openclaw/openclaw/issues/45758) | Support YAML as config file format | 2026-03-14 | 8 评论 | 等待审查，近期有更新（08-14），社区兴趣上升 |
| [#16555](https://github.com/openclaw/openclaw/issues/16555) | Add TTL/Expiry for Delivery Queue Messages | 2026-02-14 | 6 评论 | 与 #121058 等投递可靠性问题直接相关 |
| [#45771](https://github.com/openclaw/openclaw/issues/45771) | Built-in pace-aware rate limiting for autonomous agents | 2026-03-14 | 7 评论 | 等待产品决策 |
| [#45508](https://github.com/openclaw/openclaw/issues/45508) | Self-hosted STT/TTS provider support in webchat | 2026-03-13 | 7 评论 | 等待维护者审查，近期更新于 08-14 |
| [#46058](https://github.com/openclaw/openclaw/issues/46058) | Chat-first Android surface（开源讨论） | 2026-03-14 | 6 评论 | 等待维护者反馈 |

### 路线图信号分析

1. **记忆与安全机制成为核心诉求**：`#7707 Memory Trust Tagging` 和 `#25592 文本泄露` 共同指向"Agent 内容信任边界"这一深层需求。目前 `clawsweeper:needs-security-review` 标注意味着安全团队已在跟进，但进度缓慢。

2. **消息投递可靠性仍是第一大痛点**：`#121058`、`#44925`、`#67777`、`#92433`、`#47975` 等形成了一组关于子代理完成消息丢失的"问题族"。虽然 `clawsweeper:linked-pr-open` 标注表明已有相关 PR，但社区已经出现对"关闭后复发"的质疑，**建议在下一版本中作为里程碑级 P0 处理**。

3. **配置格式现代化（YAML）**：`#45758` 在 8 月 14 日仍有更新，社区关注度在上升。作为一个低成本、高感知度的功能，有可能被纳入后续 minor release。

4. **移动端/多端统一体验**：`#46058` Android 讨论与 iOS/WebChat 消息不触发回复的 `#97983` 相互呼应，OpenClaw 的移动端体验正在成为用户关注的新方向。

---

## 7. 用户反馈摘要

### 真实用户痛点（从今日活跃 Issues 提炼）

1. **"Issue 关闭≠问题修复"的信任危机**
   > #121058 用户 sloptop-the-terrible：监控 cron 在 #116277 关闭后仍持续记录静默回复失败——"closed but still happening" 成为社区对项目健康度的最大质疑点。

2. **多用户场景下内存管理混乱**
   > #43747 用户 AM-young-fun（3 人团队）：每个人的 Claw 存储路径、分块方式、嵌入策略完全不同，有的用 `main.sqlite`，有的存 `~/.openclaw/memory/`，缺乏统一管理，团队协作困难。

3. **内部处理文本对外可见，隐私暴露风险**
   > #25592 用户 doomclaw：agent 处理错误、执行确认、叙述性文本被当作正常消息发到 Slack/iMessage，导致内部处理过程暴露给终端用户，多人场景下极尴尬，也构成信息泄露。

4. **子代理失败完全不可见**
   > #44925 用户 IIIyban 与 #67777 用户 100yenadmin 都描述了同一类问题：子代理超时、失败、完成通知丢失后，主会话没有任何提示，也没有重试，用户只能干等或手动干预。

5. **供应商特定行为与产品功能冲突**
   > #121953 用户 Dytchem：OpenClaw 的 cron 前缀在 DeepSeek 上触发低优先级路由，导致原本应该按时执行的任务停滞数分钟——"The prefix is deprioritized" 这种问题需要产品层面决策是否调整。

6. **升级过程破坏既有环境**
   > #123073 用户 galli-personal：dev-channel 升级因 pnpm/npm 的 `workspace:` 协议不兼容直接失败；#78493 用户 scarlettdetekelala：`sudo openclaw update` 导致文件所有权混合，`doctor` 又覆写了配置——升级路径的鲁棒性亟待加强。

### 用户积极反馈

- #123208（models.list 空置）修复获得 "proof: 📸 screenshot" 验证，显示社区对快速修复的认可度高。
- #123386（UI 弹窗边界）和 #123288（会话活动指示器）均在提交当天获得 maintainer 关注，社区对 UI 打磨方向的 PR 响应速度明显好于深层架构问题。

---

## 8. 待处理积压

以下为长期未响应、但影响面较大的 Issue/PR，提醒维护者优先关注：

| 项目 | 创建时间 | 备注 |
|---|---|---|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) Memory Trust Tagging by Source | 2026-02-03（已 6 个月） | 48 评论，安全相关，仍停在 needs-product-decision，社区耐心消耗中 |
| [#25592](https://github.com/openclaw/openclaw/issues/25592) Text between tool calls leaks to channels | 2026-02-24（已近 6 个月） | P1 安全/隐私问题，48 评论，无明确修复 PR |
| [#42276](https://github.com/openclaw/openclaw/issues/42276) Reasoning stream / 流式思考输出 | 2026-03-10 | 用户期望类功能，讨论度高但无进展 |
| [#82950](https://github.com/openclaw/openclaw/pull/82950) Prevent unsafe approval patterns from hanging command authorization | 2026-05-17 提交（已 3 个月） | 安全修复 PR，标注 stale/needs proof，**长时间未合并**，涉及 regex 灾难性回溯安全问题 |
| [#120794](https://github.com/openclaw/openclaw/pull/120794) fix(prompt): unbounded channel context arrays flood the model | 2026-08-09 | P1，已关联 #119213 review 反馈，但目前仅 "needs proof"，没有明确阻塞项 |
| [#121578](https://github.com/openclaw/openclaw/pull/121578) fix(secrets): accept config-owned env markers in models.json audit | 2026-08-10 | P2，security-boundary 相关，等待作者响应 |

### 健康度总结

| 维度 | 评价 |
|---|---|
| 社区活跃度 | ★★★★★（24h 500 Issue / 500 PR 更新） |
| 交付效率 | ★★☆☆☆（PR 合并率 21.8%，Issue 关闭率 32.6%） |
| 版本节奏 | ★★☆☆☆（24h 无新版本，且大量修复积压在待合并状态） |
| 质量趋势 | ★★★☆☆（今日合并修复多为 UI/CLI 局部问题，核心消息可靠性缺陷仍未解决，#121058 的"复发"投诉有损信任） |
| 风险信号 | 高——P1 消息丢失/会话阻塞类 issue 数量庞大，且生命周期长达数月；安全相关 issue/PR（#25592、#82950）长期得不到合并 |

---

*本日报基于 2026-08-14 OpenClaw GitHub 公开数据自动生成，仅供参考。*

---

## 横向生态对比

# 个人 AI 助手开源生态横向对比分析报告

**报告日期：2026-08-14**
**数据窗口：过去 24 小时**


## 1. 生态全景

个人 AI 助手开源生态已进入**活力与裂痕并存**的密集迭代期。以 OpenClaw 为中心的“Claw 系”衍生项目（NanoClaw、PicoClaw、IronClaw、ZeroClaw 等）与独立路线（NanoBot、Hermes Agent、CoPaw）形成了多极竞争格局，头部项目单日 Issue/PR 更新可达 500 条量级，社区参与度极高。然而，**消息可靠性、记忆信任边界、安全权限模型**三类核心问题在全生态范围内持续积压，反映出行业尚未形成稳定范式。与此同时，供应链安全（签名验证、依赖升级）、成本治理（token 计量、上下文压缩）和 MCP 工具生态正快速成为新的差异化竞争焦点。


## 2. 各项目活跃度对比

| 项目 | Issue 更新 | PR 更新 | Release | 合并/关闭率 | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（337 活跃 / 163 关闭） | 500（391 待合并 / 109 合并关闭） | 无 | Issue 关闭 32.6%，PR 合并 21.8% | ⚠️ 高活跃但交付滞后，P1 消息丢失问题积压严重，社区信任承压 |
| **NanoBot** | 12（11 活跃 / 1 关闭） | 31（22 待合并 / 9 合并关闭） | 无 | PR 合并 29% | ✅ 社区反馈→修复闭环最快（3 个高危 bug 当日获 PR），良性循环 |
| **Hermes Agent** | 50（45 活跃 / 5 关闭） | 50（3 合并 / 47 待合并） | v0.20.1 | PR 合并 6% | ⚠️ 高活跃，但 47 条 PR 积压，P1 TUI 回归 13 天未修，安全 PR 排队 |
| **PicoClaw** | 3（全部活跃） | 9（6 待合并 / 3 关闭） | 无 | 0 功能合并 | 🟡 低活力依赖维护期，Web UI 性能 bug 24 天未响应 |
| **NanoClaw** | 2（1 新增 / 1 关闭） | 19（6 待合并 / 13 合并关闭） | v2.2.0 | PR 合并 68% | ✅ 核心团队驱动，供应链安全 CI 闭环密集落地，交付效率高 |
| **IronClaw** | 50（32 活跃 / 18 关闭） | 50（26 待合并 / 24 合并关闭） | ironclaw-v1.2.0 | PR 合并 48% | ✅ 架构转型期，Reborn 计划规划落定，稳定版发布，整体健康 |
| **LobsterAI** | 1（stale） | 6（全部合并/关闭） | 无 | PR 合并 100% | 🟡 UI 重构密集但社区声音弱，无外部贡献者活跃，商业化铺垫期 |
| **Moltis** | 1（新增） | 4（全部待合并） | 无 | 0 合并 | 🟡 上游依赖迁移修复明确，但 PR 全部悬置，合并节奏慢 |
| **CoPaw** | 42（25 活跃 / 17 关闭） | 50（31 待合并 / 19 合并关闭） | v2.1.0 + beta.5 | PR 合并 38% | ⚠️ 迭代快、功能强，但存在安全质疑（端口暴露/无鉴权）与核心体验中断问题 |
| **ZeroClaw** | 50（37 活跃 / 13 关闭） | 50（41 待合并 / 9 合并关闭） | 无 | PR 合并 18% | ⚠️ 安全/权限议题讨论深、质量高，但 41 条 PR 待合并，维护者决策成瓶颈 |
| **NullClaw / ZeptoClaw** | 无活动 | 无活动 | — | — | 💤 停滞 |


## 3. OpenClaw 在生态中的定位

**生态核心与规模标杆**：OpenClaw 单日 500 Issue + 500 PR 的流量是第二名（IronClaw/ZeroClaw/Hermes 的 50 条）的 10 倍，社区规模在生态中断层领先。从命名生态看，PicoClaw、NanoClaw、ZeroClaw、IronClaw、CoPaw（原名 QwenPaw）等均属 Claw 系衍生或受其启发的项目，OpenClaw 事实上定义了该品类的功能基线（渠道网关、子代理、记忆、技能系统）。

**技术路线差异**：OpenClaw 走"**大而全的通用运行时**"路线——多渠道接入（Slack/iMessage/Telegram）、子代理编排、记忆与自动化全栈覆盖，类似 agent 领域的"操作系统"。相比之下，NanoBot 走"**本地优先 + WebUI 为中心**"的轻量路线，IronClaw 走"**云原生多租户 + 可插拔 harness**"的企业架构路线，ZeroClaw 则以 Rust 实现聚焦"**安全与权限模型深度**"。

**核心矛盾**：OpenClaw 的最大优势（规模）也是其最大隐患——社区活跃度极高（★★★），但 PR 合并率仅 21.8%、Issue 关闭率仅 32.6%，大量 P1 消息可靠性问题（#121058、#44925、#67777 等）积压数月，出现"issue 关闭但问题复发"的信任危机。**生态领导地位稳固，但交付效率与社区期望的差距正在拉大。**


## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **消息/任务投递可靠性** | OpenClaw（#121058 静默回复失败、#44925 子代理结果丢失）、NanoBot（#5373 cron 调度器永久死亡）、Hermes（#62142 流式答案丢失）、CoPaw（#6921 多步任务无提示中断）、LobsterAI（#1232 首次执行结果不推送） | 失败必须可见、可重试、不静默；单次故障不能导致永久性损坏 |
| **记忆系统与信任边界** | OpenClaw（#7707 记忆来源信任标记）、NanoBot（#5377 记忆整合截断丢消息、#5372 跨会话记忆）、IronClaw（#7185 跨会话记忆不可靠）、CoPaw（#6853 prompts 对记忆行为"说谎"）、ZeroClaw（#6850 memory 生命周期解耦）、Hermes（#85418 local-first 记忆层） | 记忆来源需分级信任、防投毒；压缩不应破坏用户可见的完整记录；文档须与实现一致 |
| **安全与权限模型** | ZeroClaw（#7155 shell 命令 allow/ask/deny、#9328 凭证链验证）、CoPaw（#6992 端口暴露/API 无鉴权）、NanoBot（#5306 exec.allowPatterns 绕过）、Hermes（#82350 MCP OAuth scheme 白名单、#35601 profile 导出防泄漏）、OpenClaw（#25592 内部文本泄露到渠道、#82950 审批挂起） | 安全不能依赖单一检查点；需要纵深防御与可审计性 |
| **MCP 工具生态治理** | NanoBot（#5298 schema 预算、#5251 Apps 元数据保留）、NanoClaw（#2624 per-server disabledTools）、IronClaw（#7626 MCP 认证卡住）、Hermes（#82350 MCP OAuth 加固）、Moltis（#1190 连接器持久化） | 工具集膨胀下的上下文成本控制；认证流程完整支持；连接器数据可持久化 |
| **子代理/多智能体编排** | OpenClaw（#44925/#67777/#92433 子代理完成丢失问题族）、PicoClaw（#3330 子代理动态指定模型）、CoPaw（#6652 max_iterations 服务端强制）、ZeroClaw（#8303 Goal mode RFC）、IronClaw（#7482 可插拔 agent loop） | 子任务需可观测、可控制（迭代上限）、可指定模型；编排架构走向开放可插拔 |
| **WebUI/桌面端体验** | PicoClaw（#3281 长会话卡顿）、NanoBot（#5368 状态信号冲突）、Hermes（#69592 TUI 核心功能不可用）、CoPaw（#6955 启动崩溃）、LobsterAI（#2486-2488 管理 UI 统一） | 长会话渲染性能、完成状态一致性、跨平台稳定性是普遍短板 |
| **cron/定时任务可靠性** | OpenClaw（#121953 DeepSeek 前缀降级）、NanoBot（#5373 持久化失败致死）、Hermes（#85215 模型配额耗尽后持续失败）、LobsterAI（#1163 立即运行无反馈） | 定时任务在供应商异常、配额耗尽、持久化失败下需有明确降级与重试策略 |


## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全栈通用个人 AI 助手：多渠道 + 子代理 + 记忆 + 自动化 | 个人开发者、重度自托管用户、社区生态参与者 | 渠道网关中枢，大而全的模块化运行时 |
| **NanoBot** | 本地优先 WebUI、MCP 应用宿主、cron 调度 | 追求轻量部署与 Web 交互的开发者 | 单二进制本地运行，MCP 元数据保留，提案→PR 闭环快 |
| **Hermes Agent** | 生产级自动化：cron、桌面端 Desktop/TUI、技能系统 | 将 agent 用于生产工作流的团队、桌面端重度用户 | 强调 Desktop/TUI 双前端，cron 秘密管理优化，安全 PR 密集 |
| **PicoClaw** | 轻量 Go 实现，嵌入式场景（Sipeed 硬件背景） | 嵌入式/IoT 开发者、资源受限环境 | Go 单二进制，依赖维护期，无大型功能开发 |
| **NanoClaw** | 供应链安全、模板/插件引擎、CI 工程化 | 企业级 agent 平台运维、安全敏感团队 | 供应链验证闭环（签名审批→自动合并），Agent Plugins 1.0.0 |
| **IronClaw** | 云原生多租户、可插拔 agent loop（Reborn）、Postgres 存储 | NEAR AI 云用户、企业级部署 | 内核/代理循环解耦，harness 适配器（claude-code/pi/codex），写放大优化 |
| **LobsterAI** | 桌面端管理 UI、企业版功能、签到活动运营 | 网易有道生态用户、桌面端优先人群 | Electron 风格桌面应用，renderer 层 UI 统一重构，商业化铺垫 |
| **Moltis** | 数据连接器持久化、CalDAV/频道历史、sandbox | 需要长期记忆 + 多源数据接入的开发者 | Rust 实现，原子快照 + 本地全文搜索，上游依赖敏感 |
| **CoPaw** | Qwen 生态桌面级 agent 工作台（OS Shell）、Mission 模式 | 阿里 Qwen 用户、桌面端多任务自动化 | OS Shell 窗口管理，Qwen 模型深度绑定，MissionGate 成本防护 |
| **ZeroClaw** | Rust 实现，安全/权限模型深度（VI 凭证链、shell 策略） | 安全敏感的高级用户、Rust 生态开发者 | 与 OpenClaw 同源但 Rust 重写，将安全抽象放在架构核心位置 |


## 6. 社区热度与成熟度

**第一梯队：快速迭代期（高活跃 + 高功能产出）**
- **OpenClaw**：规模断层领先，但深陷"高流量→低合并"的效率困境，处于**规模扩张与交付瓶颈并存**阶段
- **CoPaw**：v2.1.0 带来 OS Shell 重大更新，迭代速度快，但安全质疑（端口暴露）和核心体验问题（多步中断）并存，属"快速奔跑中修补"型
- **ZeroClaw**：讨论质量高（安全 RFC 深度十足），但 41 条 PR 待合并 + 维护者决策队列积压，处于**架构决策瓶颈期**
- **IronClaw**：Reborn 架构规划落定 + 稳定版发布，方向明确、执行有序，处于**转型推进期**

**第二梯队：社区驱动型（高响应 + 高效率）**
- **NanoBot**：当日 6 个 bug 中 3 个 24 小时内获修复 PR，社区"报一个修一个"，是生态中**反馈闭环效率最佳**的项目
- **NanoClaw**：核心团队驱动，供应链安全 CI 闭环密集落地，合并率 68%，属**工程化程度最高**的项目

**第三梯队：质量巩固期（中活跃 + 局部迭代）**
- **Hermes Agent**：v0.20.1 稳定发布，但 47 条 PR 积压 + P1 TUI bug 13 天未修复，属**功能饱和后的消化期**
- **LobsterAI**：UI 统一重构 + 企业版合入，但社区外部声音弱，属**商业化转型期**
- **Moltis**：功能方向明确（连接器持久化），但合并节奏慢，属**小团队维护期**
- **PicoClaw**：依赖维护为主，核心 bug 24 天无响应，属**低活力维持期**

**第四梯队：停滞**
- **NullClaw / ZeptoClaw**：24 小时无任何活动


## 7. 值得关注的趋势信号

**① "可靠性优先"取代"功能优先"成为社区第一诉求。** 从 OpenClaw 的静默回复失败、NanoBot 的 cron 永久死亡到 CoPaw 的多步任务中断，跨项目用户共识高度一致：**"失败不可怕，静默才可怕"**。开发者应把可观测性（失败可见、可重试、有通知）作为 agent 产品的第一公民能力，而非事后补丁。

**② 记忆系统进入"信任革命"前夜。** 多项目同时出现对记忆来源分级、防投毒、跨会话可靠性、用户可见性的讨论（OpenClaw #7707、CoPaw #6853、ZeroClaw #6850）。记忆不再只是"存什么"，而是"信不信、谁写的、能否追溯"——这将是下一轮 agent 差异化竞争的核心战场。

**③ 供应链安全从"最佳实践"变为"默认要求"。** NanoClaw 已实现签名验证→自动审批→自动合并的完整 CI 闭环，ZeroClaw 修复路径逃逸漏洞，Hermes 排队 4 个安全 PR，CoPaw 遭遇公网端口暴露质疑。**软件签名、依赖溯源、CI/CD 安全门禁正在成为 agent 框架的标配能力**。

**④ 成本治理成为刚需。** OpenRouter 重放 system prompt 导致费用虚高（ZeroClaw #9631）、模型配额耗尽后 cron 持续失败（Hermes #85215）、Mission 模式子 agent 无限派发直到余额耗尽（CoPaw #6652）——token 计量、schema 预算、配额感知的降级策略是用户愿意付费的务实功能。

**⑤ MCP 生态从"接入"走向"治理"。** 当工具数量超过一定阈值，上下文成本失控（NanoBot #5298）、认证流程断裂（IronClaw #7626）、权限粒度不足（NanoClaw #2624）会集中爆发。"工具集治理"（预算、发现、禁用、审计）将成为 agent 平台的新竞争维度。

**⑥ 跨平台体验是系统性短板。** Windows 崩溃（Hermes #83851）、杀软误报（CoPaw #6847）、Mac 更新 split-brain（Hermes #52339）、移动端选模型难（ZeroClaw #9895）——桌面/移动端的工程成熟度远落后于核心 agent 能力，**谁先补齐多平台稳定性，谁就能赢得下一批非技术用户**。

**⑦ 架构走向开放与可插拔。** IronClaw 的可插拔 agent loop（#7482）、NanoClaw 的 Agent Plugins 1.0.0、ZeroClaw 的插件加载 RFC（#9810）表明：**社区不再满足于单体 agent，而是要求内核稳定 + 执行器可替换 + 插件标准统一**。对开发者而言，基于开放插件标准构建可复用能力，比绑定单一框架更具长期价值。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**日期：2026-08-14**  
**数据窗口：过去 24 小时（截至 2026-08-14）**

---

## 1. 今日速览

过去 24 小时内，NanoBot 项目保持高活跃度：共产生 12 条 Issue 更新（其中 11 条新增/活跃，1 条关闭）和 31 条 PR 更新（其中 9 条已合并/关闭，22 条待合并）。无新版本 Release 发布。值得关注的是，今日涌现多个由 Issue 驱动的即时修复 PR，例如 cron 调度器持久化失败致死（#5373→#5376）、会话文件容量归档失败状态污染（#5378→#5380）、记忆整合截断丢弃消息（#5377→#5379）等问题，均在 24 小时内形成了对应补丁。整体来看，项目正处于"社区反馈密集、维护者响应迅速"的良性循环阶段，但 PR 待合并队列（22 条）也提示合流压力正在积累。

---

## 2. 版本发布

今日无新版本 Release。

---

## 3. 项目进展

今日共 9 条 PR 被合并/关闭，其中包含重要功能闭环和冲突 PR 的清理：

- **feat(webui): add native workspace folder picker（#5381，已合并）**  
  为本地托管的 WebUI 会话增加 macOS/Windows/Linux 原生文件夹选择器，仅在回环地址且浏览器连接为本地时开放，保留远程手动路径输入作为兜底。  
  https://github.com/HKUDS/nanobot/pull/5381

- **fix(webui): restore transcript-only session history（#5384，已合并）**  
  修复了仅有展示层转录、但 canonical session JSONL 已不存在时的 WebUI 侧边栏历史发现与打开/删除能力，且不重建有损的模型上下文。  
  https://github.com/HKUDS/nanobot/pull/5384

- **fix(cron): keep scheduler alive when job-store persistence fails（#5374/#5375，已关闭，由 #5376 取代）**  
  两个早期 PR 被关闭，最终由同一作者的新 PR #5376 接续，说明该问题已进入正式修复通道。  
  https://github.com/HKUDS/nanobot/pull/5374  
  https://github.com/HKUDS/nanobot/pull/5375

- **feat(dream): wire up model_override for Dream consolidation（#4556，已关闭）**  
  实现了 DreamConfig.model_override 在周期性记忆整合中的运行时生效，修复 #4029。  
  https://github.com/HKUDS/nanobot/pull/4556

- **fix(cron): use per-run session key to prevent context sharing across cron runs（#4550，已关闭）**  
  修复 #4082：为每次 cron 运行追加唯一 run_id 到 session key，避免后续执行看到前次运行的陈旧上下文。  
  https://github.com/HKUDS/nanobot/pull/4550

**总体判断**：合并项以 WebUI 体验修复和 cron 隔离性修复为主，属于体验与正确性层面的增量打磨；而今日新提交的 PR（MCP schema 预算、Telegram 贴纸、Matrix SAS 验证流等）更多指向新功能落地。项目整体处于"修复存量问题 + 推进新能力"的双轨节奏。

---

## 4. 社区热点

今日讨论最集中、最能反映社区诉求的条目如下：

- **Issue #5373：Cron scheduler dies permanently after a single job-store persistence failure**（新开，1 评论）  
  这是今日 Bug 类热点。用户 `rickererer` 明确指出 `_arm_timer()` 位于 `try/finally` 之外，任何一次持久化失败都会让调度器永久静默死亡。该问题迅速获得了 PR #5376 的修复，属于社区"报一个修一个"的高效案例。  
  https://github.com/HKUDS/nanobot/issues/5373

- **PR #5358：feat(webui): add session collaboration via mentions**（待合并，评论数高）  
  为持久化 WebUI 会话分配稳定的服务端持有的 `@name`，并扩展现有 composer 的提及选择器，使用户可以选择对等会话进行协作。这是社区对多会话协同工作流的直接需求信号。  
  https://github.com/HKUDS/nanobot/pull/5358

- **Issue #5298：Proposal: budget model-visible MCP schemas for large tool sets**（活跃，1 评论）  
  用户关注大型 MCP 工具集带来的上下文成本，建议为模型可见的 MCP tool schemas 设置预算。该提案已由 PR #5388 响应，形成"提案即实现"的快速闭环。  
  https://github.com/HKUDS/nanobot/issues/5298

- **Issue #4841：Matrix bot device shows as 'untrusted' in Element——no cross-signing or bot-initiated SAS verification path**（老 Issue 今日仍活跃，1 评论）  
  该问题持续获得关注，今天出现了 PR #5385 尝试完整实现 Element SAS 请求流。说明 Matrix 端到端加密信任问题长期困扰用户，且修复复杂度较高。  
  https://github.com/HKUDS/nanobot/issues/4841

**分析**：社区热点集中在三个层面——调度器鲁棒性（cron 静默死亡）、MCP 工具集扩展的上下文成本控制、以及聊天平台能力补齐（Matrix 信任验证、WebUI 会话协作）。这些诉求的共同特征是：用户正在把 NanoBot 用于更真实、更长期的生产环境，因此对稳定性、成本可见性和协作能力的要求显著提升。

---

## 5. Bug 与稳定性

今日报告了 6 个 Bug/回归类 Issue，按严重程度排列如下：

| 严重程度 | Issue | 描述 | 状态 |
|---------|-------|------|------|
| 高 | [#5373](https://github.com/HKUDS/nanobot/issues/5373) | Cron 调度器在单次 job-store 持久化失败后永久死亡 | 已有 PR #5376 |
| 高 | [#5378](https://github.com/HKUDS/nanobot/issues/5378) | 文件容量归档失败会先变更内存会话状态，导致后续保存无法回滚 | 已有 PR #5380 |
| 高 | [#5377](https://github.com/HKUDS/nanobot/issues/5377) | 记忆整合截断输入但推进完整批次游标，消息丢失 | 已有 PR #5379 |
| 中 | [#5368](https://github.com/HKUDS/nanobot/issues/5368) | Agent 回合还在运行时，WebUI 已显示复制/分叉操作按钮，完成状态信号冲突 | 暂无 PR |
| 中 | [#5306](https://github.com/HKUDS/nanobot/issues/5306)（已关闭） | `exec.allowPatterns` 存在 shell 链绕过风险，可执行非预期命令 | 已关闭（Security advisory 处理） |
| 低 | [#5348](https://github.com/HKUDS/nanobot/issues/5348)（见 PR #5349） | 测试在每日约 5 小时窗口内因 `timezone_name` 缺失而确定性失败 | 已有 PR #5349 |

**稳定性评估**：三个高风险 Bug（cron 死亡、会话状态污染、记忆整合丢消息）全部在 24 小时内获得了修复 PR，响应速度非常积极。但注意这三个问题分别涉及 cron、session、consolidation 三个核心子系统，反映项目在关键路径上的异常处理仍有盲区。尤其是 #5373 和 #5377 都是"单次故障引发持久性损坏/数据丢失"类型，建议维护者在合入修复后进行系统性的错误注入测试。

---

## 6. 功能请求与路线图信号

今日活跃的功能请求体现了明确的路线图信号：

- **MCP 工具集上下文成本控制**  
  Issue #5298（budget model-visible MCP schemas）→ PR #5388 已实现一个默认关闭的字节预算机制，保持内置工具完整、MCP 工具可执行集不变，并从最新用户请求中确定性选取子集。这一功能若合入，将大幅提升大型 MCP 工具集场景下的可用性。  
  https://github.com/HKUDS/nanobot/issues/5298  
  https://github.com/HKUDS/nanobot/pull/5388

- **MCP Apps host 支持（WebUI）**  
  Issue #5251 提出将 MCP 调用结果以结构化 App 形式呈现在 WebUI 中，而不仅仅是模型可见的文本/图像。对应的 PR #5386 已经提交，保留了 MCP Apps 的元数据和丰富调用结果，且不扩展模型上下文。该功能指向 NanoBot 从"聊天机器人"向"MCP 应用宿主"演进的路线。  
  https://github.com/HKUDS/nanobot/issues/5251  
  https://github.com/HKUDS/nanobot/pull/5386

- **Telegram 贴纸与消息反应**  
  Issue #5289 要求支持发送贴纸和 Agent 主动发起的消息反应。PR #5387 已实现入站贴纸元数据提取与可复用贴纸回复分发，说明项目在补齐 IM 平台的原生表达力。  
  https://github.com/HKUDS/nanobot/issues/5289  
  https://github.com/HKUDS/nanobot/pull/5387

- **QwenCloud provider 兼容路径**  
  Issue #5350 提议在现有 DashScope 支持之外增加 QwenCloud 国际平台路径，考虑与既有配置的后向兼容。目前尚无对应 PR，但作为阿里云千问生态的国际扩展信号值得关注。  
  https://github.com/HKUDS/nanobot/issues/5350

- **Agent 持久记忆**  
  Issue #5372 提出为 Agent 引入跨会话持久记忆系统（ViBo），并附带了免费试用链接，属于推广性质提案。这类第三方集成提案通常不会被直接采纳，但反映了用户对"每次会话从零开始"的明显痛点，路线图层面值得将"记忆持久化"列为备选方向。  
  https://github.com/HKUDS/nanobot/issues/5372

**判断**：MCP 相关能力（schema 预算、Apps 元数据保留）是本轮功能开发的核心主线，且全部由社区提案驱动。这两项若随下一版本发布，将成为 NanoBot 区别于普通聊天框架的重要竞争力。

---

## 7. 用户反馈摘要

从今日活跃的 Issue 评论和 PR 讨论中提炼的用户真实反馈如下：

- **稳定性是第一诉求**：Issue #5373 的作者以非常细致的代码定位描述了 cron 调度器如何被一次磁盘写入失败永久杀死，并观察到"silently and permanently"两个关键特征。这说明用户已经将 NanoBot 用于常驻服务，对后台任务（如 heartbeat cron）的可靠性有生产级要求。

- **Windows 平台问题开始浮现**：PR #5382 记录了 Windows 上 `os.replace()` 遭遇 `[WinError 5] Access is denied` 导致整个网关崩溃，且在 2026-08-11 的 gateway.log 中确认出现两次。这是跨平台部署的真实阵痛，值得维护者重视 Windows 文件锁语义差异。

- **Matrix 端到端加密信任问题持续积累**：Issue #4841 自 7 月初以来一直未关闭，用户明确表示"没有干净的方式清除这个警告"。Element 客户端使用交叉签名后，bot 设备无法完成信任闭环，这已成为影响 Matrix 频道采用率的关键障碍。

- **用户对"模型上下文成本"高度敏感**：Issue #5298 和 #5251 都从"token 成本""不扩展模型上下文"角度出发提出设计目标，说明社区用户正在监控 NanoBot 的长上下文消耗，并期待更细粒度的资源控制。

- **WebUI 交互细节反馈集中**：#5368（运行中显示复制/分叉按钮）和 #5366（Agent 活动文本未本地化）均来自同一用户 `ZhouJ-sh`，表明 WebUI 的完成状态一致性和国际化是当前比较突出的体验短板。

---

## 8. 待处理积压

以下为长期未关闭/未合并且值得维护者关注的事项：

- **Issue #4841：Matrix bot device untrusted（2026-07-07 创建，已活跃 38 天）**  
  今日出现对应 PR #5385 尝试完整实现 Element SAS 请求流，但尚未合并。这是目前悬置时间最长的核心可用性问题。  
  https://github.com/HKUDS/nanobot/issues/4841

- **PR #4549 / #4551：heartbeat model_override 与 isolated_session（2026-06-26 创建，已 49 天）**  
  两个功能 PR 均已提交近 7 周仍未合并。它们是低成本使用专用模型做 heartbeat 通知的能力，对部署成本有直接影响，可能被后续版本迭代所阻塞。  
  https://github.com/HKUDS/nanobot/pull/4549  
  https://github.com/HKUDS/nanobot/pull/4551

- **PR #4556 / #4550 虽已关闭，但均为 conflict 状态关闭**  
  这两个 PR 在今日被标记为 closed，但标签中带有 `conflict`，意味着合入路径并不干净。与之同源的 #4549/#4551 也可能面临同样的仓库分支冲突问题，建议维护者做一次集中 rebase 处理。

- **Issue #5306（Security：`exec.allowPatterns` 绕过）已关闭，但无公开 advisory 链接**  
  该安全 Issue 关闭时未显示对应的 commit 或 advisory 引用。建议维护者在 Release Notes 中明确说明受影响版本和安全修复版本，方便下游用户升级判断。  
  https://github.com/HKUDS/nanobot/issues/5306

- **PR #5358：session collaboration via mentions（2026-08-12 创建）**  
  该 PR 涉及 WebUI 会话协作模型，变更面较大且与现有的 canonical session 存储存在交互（标签含 `conflict`）。在合入前需要确保与 #5383 的会话文件序列化改动兼容。  
  https://github.com/HKUDS/nanobot/pull/5358

---

**总体健康度评估**：NanoBot 当前处于活跃开发期，社区提案与维护者响应形成正反馈循环。当日 12 条 Issue 中有 6 条立即获得 PR，修复效率极高；但 22 条待合并 PR 及多个老 PR 上的 `conflict` 标签意味着合并积压正在积累。建议维护者在不牺牲代码质量的前提下，优先处理核心可靠性修复（#5376、#5379、#5380），并在下一版本发布时同步提供安全 advisory（#5306）的完整说明。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-14

## 今日速览

过去 24 小时项目保持高活跃度：50 条 Issue 更新（45 条新增/活跃，5 条关闭）、50 条 PR 更新（3 条合并/关闭）、1 个 Patch 版本发布。v0.20.1 已作为稳定标签发布，汇总了 v0.20.0 以来约 656 个 PR，为下游 Docker 镜像和托管部署提供稳定基线。社区讨论集中在 Webhook 修复战役（#84834）、Skills 索引自动监控告警（#66616）、以及一个已持续 13 天的 P1 TUI 回归（#69592）。安全与兼容性 PR 持续增加，但 47 条 PR 待合并的积压值得关注。

## 版本发布

### Hermes Agent v0.20.1 (v2026.8.13)

- **类型**：Patch release
- **发布日期**：2026 年 8 月 13 日
- **内容**：滚动汇总 v0.20.0 以来约 656 个已合并 PR，提供稳定标签供 Docker 镜像、托管部署和 tag 安装用户使用
- **破坏性变更**：无说明（Patch 版本，预期向后兼容）
- **迁移注意**：面向生产环境消费者，建议验证本地配置与自定义插件兼容性

## 项目进展

- **cron 秘密管理优化**：[PR #85710](https://github.com/NousResearch/hermes-agent/pull/85710)（已合并）复用进程缓存的 secret 快照，避免每次触发时强制刷新所有后端，同时在 cron 运行时继续重载本地 `.env` 变更
- **tool-schema 类型边界修复**：[#85707](https://github.com/NousResearch/hermes-agent/issues/85707)（已关闭）在直接原生 tool-cache 路径中，对 `planned_tools[-1]` 打 `cache_control` 标记前先做类型归一化，避免类型不一致
- **安全加固 PR 密集排队中**（待合并）：
  - [PR #82350](https://github.com/NousResearch/hermes-agent/pull/82350)：MCP OAuth 授权 URL 仅允许 `http/https`，拒绝 `javascript:` 等危险 scheme，防浏览器打开恶意地址
  - [PR #35601](https://github.com/NousResearch/hermes-agent/pull/35601)：profile 导出时彻底防止凭据泄漏与 SQLite 数据丢失
  - [PR #83787](https://github.com/NousResearch/hermes-agent/pull/83787)：阻止消息平台会话执行信任敏感的文件写入
  - [PR #81939](https://github.com/NousResearch/hermes-agent/pull/81939)：skill 发现/检索全程 fail-closed 保护治理
- **平台兼容性修复**：
  - [PR #72229](https://github.com/NousResearch/hermes-agent/pull/72229)：`search_files` 分页逻辑与用户 shell 别名隔离，防止 `head` 被 shadow 导致搜索结果被截断
  - [PR #52289](https://github.com/NousResearch/hermes-agent/pull/52289)：将本地推理 provider（oMLX/MLX）内存超限 400 错误分类为过载而非上下文溢出
- **桌面端**：[PR #85673](https://github.com/NousResearch/hermes-agent/pull/85673) 停止在 Desktop 上提供 GitHub 托管 MCP 的通用一键 OAuth（GitHub 要求自有 OAuth app）；[PR #77773](https://github.com/NousResearch/hermes-agent/pull/77773) 更新 Playwright 修复安装卡住问题

## 社区热点

- **[Issue #66616](https://github.com/NousResearch/hermes-agent/issues/66616) — Skills 索引陈旧告警（25 评论）**：`skills-index-watchdog` 自动化探针报告索引已 29.8 小时未更新（上限 26 小时），状态 degraded。说明项目已部署自动化健康监控，但索引流水线存在不稳定点
- **[Issue #84834](https://github.com/NousResearch/hermes-agent/issues/84834) — Webhook Revolution 史诗战役（16 评论）**：社区成员发起 5×2×3 webhook 全表面修复计划，覆盖 ingress、执行、投递、配置、管理 UI、部署和文档，反映用户对 webhook 整体可靠性的强烈诉求
- **[Issue #69592](https://github.com/NousResearch/hermes-agent/issues/69592) — TUI 核心功能不可用（12 评论）**：P1 Bug，`/sessions` 与 `/models` 在 ambient widget dock 下不可见，已持续 13 天，用户无法在 TUI 中切换会话或模型
- **[Issue #83390](https://github.com/NousResearch/hermes-agent/issues/83390) — DeepSeek 标题生成兼容性（9 评论，2 👍）**：`title_generation` 在 DeepSeek 上因 `response_format` 不被支持返回 HTTP 400，影响自动会话标题生成

## Bug 与稳定性

### P1 严重

- **[#69592](https://github.com/NousResearch/hermes-agent/issues/69592)** — `/sessions` 和 `/models` 覆盖层在 ambient widget dock 下不可见，`/reload` 静默失败。**第 13 天未修复**，两个核心 TUI 工作流（会话恢复/切换、模型切换）不可用，无 fix PR
- **[#62142](https://github.com/NousResearch/hermes-agent/issues/62142)** — verification-stop 会丢弃流式最终答案和 cron 报告；agent 编辑文件后，完整回答可能从持久化记录中丢失

### P2 中等

- **[#85215](https://github.com/NousResearch/hermes-agent/issues/85215)** — cron 任务固定 model/provider 快照，模型配额耗尽后所有运行持续 402 失败，`fallback_providers` 被忽略
- **[#83851](https://github.com/NousResearch/hermes-agent/issues/83851)** — 中文 Windows (GBK/cp936) 上 Desktop gateway 进程崩溃，升级 v0.20.0 后出现
- **[#85614](https://github.com/NousResearch/hermes-agent/issues/85614)** — Slack bot-to-bot 授权分裂：早期投递检查与最终授权检查使用不同身份，peer bot 可能被拒
- **[#85693](https://github.com/NousResearch/hermes-agent/issues/85693)** — `computer_use` 工具仅在 CLI 平台声明，Desktop 会话无截图式桌面自动化能力
- **[#83427](https://github.com/NousResearch/hermes-agent/issues/83427)** — `browser_exec` 在 Desktop 环境因 `PYTHONPATH` 指向 Hermes venv 导致 `pydantic_core` ModuleNotFoundError
- **[#52339](https://github.com/NousResearch/hermes-agent/issues/52339)** — 终端 `hermes update` 重建 Desktop 到仓库本地输出，但 `/Applications/Hermes.app` 保持陈旧，形成 split-brain 状态
- **[#76267](https://github.com/NousResearch/hermes-agent/issues/76267)** — Windows 下远程 sandbox 销毁时 `sync_back` 静默丢失远程文件改动
- **[#85406](https://github.com/NousResearch/hermes-agent/issues/85406)** — Windows host + Docker terminal 上 `vision_analyze` 路径分隔符被宿主 `Path()` 破坏，sandbox 内 POSIX 路径被转成反斜杠
- **[#85658](https://github.com/NousResearch/hermes-agent/issues/85658)** — 中断的命令导致当前会话继承另一个会话的工作目录，后续命令全部在错误目录执行

### 已关闭 / 重复

- [#81639](https://github.com/NousResearch/hermes-agent/issues/81639)（P0，closed）：`_canonicalize_api_tool_calls` 修复路径中 `{}` 替换写入持久化历史导致会话卡死——标记为重复，但原 issue 指向的深层问题仍需关注
- [#35838](https://github.com/NousResearch/hermes-agent/issues/35838)（closed）：`models.dev` 不可达且本地缓存过期时 `get_provider_info()` 阻塞，关闭为重复

## 功能请求与路线图信号

- **[#4438 — Rich Spreadsheet Skill（8 评论）](https://github.com/NousResearch/hermes-agent/issues/4438)**：结构化 xlsx/csv 读写抽象，已有原始 `openpyxl`/`pandas` 方案但缺乏统一封装。从评论热度看社区需求明确
- **[#39043 — Signal 适配器增强（7 评论，3 👍）](https://github.com/NousResearch/hermes-agent/issues/39043)**：原生 quote/reply、编辑、远程删除、已读回执，被标记 `needs-decision`，等待维护者裁决
- **[#33049 — 凭据池 TTL 可配置（3 评论，1 👍）](https://github.com/NousResearch/hermes-agent/issues/33049)**：`EXHAUSTED_TTL_*_SECONDS` 目前硬编码为 1 小时，用户希望可调
- **[#85418 — Local-first 零依赖记忆层（2 评论）](https://github.com/NousResearch/hermes-agent/issues/85418)**：社区基于 Hermes 自建记忆方案，并主动对标 Honcho 做 benchmark。已在 issue 中联系核心维护者，若纳入插件体系可能成为官方 memory provider
- **[#84317 — Telegram drop_pending_updates 可选项（2 评论）](https://github.com/NousResearch/hermes-agent/issues/84317)**：冷启动丢弃最多 24h 的 pending updates，用户希望可以选择保留
- **[#82801 — personality 系统与 SOUL.md 冲突（1 评论）](https://github.com/NousResearch/hermes-agent/issues/82801)**：内建 personality（kawaii 等）覆盖用户 SOUL.md 配置，且无优先级提示
- **PR 侧路线图信号**：[#81806](https://github.com/NousResearch/hermes-agent/pull/81806) 为 `/v1/runs` 编排器暴露 session 异步委派查询；[#85723](https://github.com/NousResearch/hermes-agent/pull/85723) 为文档站新增日文 locale；[#85732](https://github.com/NousResearch/hermes-agent/pull/85732) 为 Ollama cloud Kimi 模型固定 `top_p=0.95`

## 用户反馈摘要

- **TUI 用户强烈不满**：[#69592](https://github.com/NousResearch/hermes-agent/issues/69592) 中用户指出"Day 13 since this broke"，两个核心工作流（会话恢复、模型切换）完全不可用，默认 dock 模式即触发
- **cron 用户切肤之痛**：[#85215](https://github.com/NousResearch/hermes-agent/issues/85215) 中 cron 任务因模型配额耗尽静默失败数天，`fallback_providers` 未如文档所述生效，影响生产自动化
- **中文 Windows 用户升级受挫**：[#83851](https://github.com/NousResearch/hermes-agent/issues/83851) 报告升级 v0.20.0 后 gateway 因 GBK 编码崩溃；同一天有 3 个 Windows 相关 Bug（#76267、#85406、#83851），Windows 平台稳定性是明显短板
- **社区正向反馈**：[#85418](https://github.com/NousResearch/hermes-agent/issues/85418) 用户感谢 DavidMetcalfe 此前解决了 #52954 的 Chrome DevTools 问题，并基于 Hermes 构建了记忆层，说明核心体验有吸引力
- **桌面端体验问题**：#85104（消息重复渲染，DB 仅一条记录）、#84058（工具调用开始时输入框光标丢失）、#85672（Kanban 附件下载路径错误）——Desktop 前端渲染层稳定性和交互细节仍需打磨

## 待处理积压

### 长期未解决的高优先级 Issue

- **[#69592（P1，7 月 22 日创建，已 13 天未修复）](https://github.com/NousResearch/hermes-agent/issues/69592)**：TUI 两个核心工作流不可用，优先级最高但仍无 fix PR
- **[#62142（P1，7 月 10 日创建）](https://github.com/NousResearch/hermes-agent/issues/62142)**：流式最终答案可能从持久记录中丢失，影响 Desktop/TUI 和 cron 投递
- **[#52339（P2，6 月 25 日创建）](https://github.com/NousResearch/hermes-agent/issues/52339)**：macOS Desktop 更新后应用包陈旧，split-brain 状态让用户困惑

### 长期未合并的重要 PR

- **[#35601（5 月 31 日创建）](https://github.com/NousResearch/hermes-agent/pull/35601)**：profile 导出凭据泄漏与数据丢失防护，安全边界 PR 滞留近 3 个月
- **[#72229（7 月 26 日创建）](https://github.com/NousResearch/hermes-agent/pull/72229)**：`search_files` 分页与 shell alias 隔离，影响搜索可靠性
- **[#73063（7 月 28 日创建）](https://github.com/NousResearch/hermes-agent/pull/73063)**：Telegram 命令投递前停止 typing 刷新
- **[#64866（7 月 15 日创建）](https://github.com/NousResearch/hermes-agent/pull/64866)**：WeCom websocket 认证期间关闭时退避重连

### 维护者关注建议

- 47 条 PR 待合并，其中安全相关（#82350、#35601、#83787、#81939）应优先评审
- P1 的 TUI 问题（#69592、#62142）已跨多个版本，建议纳入 v0.21.0 必修范围
- Windows 平台（#83851、#76267、#85406）和 DeepSeek 兼容性（#83390）是当前用户痛点的集中爆发区

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-08-14

## 1. 今日速览

过去 24 小时 PicoClaw 仓库整体活跃度中等偏上：新增/活跃 Issue 3 条，PR 9 条（6 条待合并，3 条已关闭）。**今日没有任何新版本 Release**。活跃内容以 Dependabot 批量提交的 Go 依赖更新为主（共 5 条，涉及 AWS SDK、Anthropic SDK、mautrix），另有一条由社区维护者提交的 `pnpm-lock.yaml` 修复 PR 待审。Issue 方面最值得注意的是一个存在已超过 3 周的 Web UI 长会话性能 Bug（#3281），至今仍无关联修复 PR，是当前项目稳定性的主要隐患。此外社区提出了两项新功能请求，分别指向语音转录模型兼容性与子代理动态模型覆盖。

---

## 2. 版本发布

今日无新版本发布，上一版本仍为 **0.3.1**。

---

## 3. 项目进展

今日**没有功能性 PR 被合并**，关闭的 3 条 PR 均为 Dependabot 发起的 Go 依赖更新请求，因版本落后或标记为 stale 而关闭：

| PR | 说明 | 状态 |
|---|---|---|
| [#3304](https://github.com/sipeed/picoclaw/pull/3304) | bump `anthropics/anthropic-sdk-go` 1.55.1 → 1.61.0 | CLOSED（stale，已被 #3334 取代） |
| [#3305](https://github.com/sipeed/picoclaw/pull/3305) | bump `aws-sdk-go-v2/service/bedrockruntime` 1.53.3 → 1.56.2 | CLOSED（stale，已被 #3336 取代） |
| [#3306](https://github.com/sipeed/picoclaw/pull/3306) | bump `aws-sdk-go-v2/config` 1.32.25 → 1.32.33 | CLOSED（stale，已被 #3335 取代） |

> 📌 这 3 条旧 PR 的关闭并非代码进展，而是 Dependabot 自动淘汰旧升级路径后重新发起了更新请求。若新 PR 获得合并，依赖版本将被推进至更新基线。

**真正值得关注的是** [#3318](https://github.com/sipeed/picoclaw/pull/3318)——一项手写的 Web 前端修复，针对 `pnpm-lock.yaml` 中重复映射 key 导致锁文件损坏的问题。该 PR 虽已标记 `[stale]` 但仍处于 OPEN 状态，等待维护者 Review。

**进度小结**：项目今日在功能层面没有实质推进，主要动作集中在依赖维护与构建系统修复上。整体看处于低开发活力的依赖维护期。

---

## 4. 社区热点

### 🔥 [Issue #3281（OPEN）Web UI 聊天输入在历史较长时严重卡顿](https://github.com/sipeed/picoclaw/issues/3281)

- **作者**：xpader | **创建**：2026-07-21 | **最后更新**：2026-08-13
- **评论**：5 条 | **👍**：1 | **状态**：仍为 OPEN，无关联 fix PR

这是当前社区最受关注的 Issue。用户报告在 PicoClaw 0.3.1 的 Web UI 中，当单个会话积累了较多聊天历史后，输入框响应变得“非常卡顿”。该问题从创建至今已持续 24 天仍未被解决，且是当前唯一带 👍 的活跃 Issue。其背后反映的是 Web 前端在长消息列表渲染 / 状态更新场景下的性能瓶颈，对重度用户日常使用体验影响显著。

### 新增功能请求（评论数暂为 0，但需求方向明确）

| Issue | 核心诉求 |
|---|---|
| [#3331](https://github.com/sipeed/picoclaw/issues/3331) | 支持所有提供 `/audio/transcriptions` 端点的模型，而非限定 `*-whisper-*` 系列 |
| [#3330](https://github.com/sipeed/picoclaw/issues/3330) | `delegate` / `spawn` / `subagent` 工具应支持在调用时动态指定模型 |

这两个新 Issue 虽然刚创建、尚无讨论热度，但指向了用户对模型兼容性和多智能体编排灵活性的真实需求，值得关注。

---

## 5. Bug 与稳定性

### 🟠 中等严重度

| Issue | 问题描述 | 影响面 | 是否有 fix PR |
|---|---|---|---|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI 在会话历史较长时输入框严重卡顿 | Web 端所有长会话用户，影响日常聊天与调试效率 | ❌ 无，仍 OPEN |

### 🟡 低严重度（构建问题）

| Issue / PR | 问题描述 | 状态 |
|---|---|---|
| [#3318](https://github.com/sipeed/picoclaw/pull/3318) | `web/frontend/pnpm-lock.yaml` 中 `semver@7.8.5` 出现重复 key，导致 pnpm 拒绝解析 lockfile，构建失败 | 已有修复 PR 待合并，但被标记 `[stale]` |

### ⚠️ 稳定性提醒

今日有 3 条依赖更新 PR（#3304 / #3305 / #3306）因 stale 被关闭，**对应依赖的升级任务已转移至新的 PR**（#3334 / #3336 / #3335）。若这些新 PR 长时间不合并，项目依赖将停留在较旧基线（如 `anthropic-sdk-go` 停留在 1.55.1，`aws-sdk-go-v2/service/bedrockruntime` 停留在 1.53.3），存在潜在的兼容性与安全风险积累。

---

## 6. 功能请求与路线图信号

### 新增功能请求

| Issue | 需求 | 潜在价值 | 纳入下版可能性 |
|---|---|---|---|
| [#3331](https://github.com/sipeed/picoclaw/issues/3331) | 语音转录接口支持任意符合 OpenAI 兼容 `/audio/transcriptions` 的模型，不再硬编码 `whisper` 路径 | 扩大 ASR 模型选择范围，避免用户被锁定在过时且缓慢的 whisper 系列 | 中——实现成本相对低（只需要在模型/语音配置中加一个开关），且对云端转录场景用户有直接价值 |
| [#3330](https://github.com/sipeed/picoclaw/issues/3330) | `delegate` / `spawn` / `subagent` 支持调用时指定 `model` 参数，覆盖静态配置 | 增强多智能体编排灵活性，允许子任务按需切换更小/更快的模型 | 中——涉及工具接口与配置文件的改动，属于架构层面的增强，可能排期靠后 |

### 路线图信号

- 目前没有与这两项功能请求关联的 PR。
- 从今日 PR 结构看，维护团队仍以依赖维护为主，功能开发节奏未见明显加速迹象。
- 但 #3330 若被采纳，将成为 PicoClaw 多智能体能力的一个重要差异化点，值得关注其在后续版本中的演进。

---

## 7. 用户反馈摘要

基于现有 Issue 及评论，可以提炼出以下用户声音：

### 痛点 1：Web UI 长会话性能不达标

> 来自 [Issue #3281](https://github.com/sipeed/picoclaw/issues/3281)：用户明确表示在会话历史“有点长”时，Web UI 输入框响应出现明显延迟。从描述推断，可能原因是前端渲染整个消息历史列表时没有做虚拟化或分片渲染，导致 DOM 节点过多、输入事件处理变慢。此问题自 7 月 21 日提出至今未获响应，用户侧挫败感可能正在累积。

### 痛点 2：ASR 模型绑定过死

> 来自 [Issue #3331](https://github.com/sipeed/picoclaw/issues/3331)：用户认为 `*-whisper-*` 模型“太旧且太慢”，希望 ASR 路径能适配更现代的模型（通过 OpenAI 兼容的 `/audio/transcriptions` 接口）。说明用户对语音输入有实际需求，且对模型性能敏感。

### 潜在需求 3：子智能体模型灵活性

> 来自 [Issue #3330](https://github.com/sipeed/picoclaw/issues/3330)：用户正在使用 `delegate`/`spawn`/`subagent` 等工具做多智能体编排，但受限于模型静态配置，无法在运行时按需切换模型，期望增加动态覆盖能力。这是较高级用户对系统灵活性的直接反馈。

---

## 8. 待处理积压

以下为目前值得维护者重点关注、但长期处于未响应或等待 Review 状态的事项：

| 类型 | 编号 | 说明 | 滞留时间 | 建议 |
|---|---|---|---|---|
| 🐛 Bug | [Issue #3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI 长会话输入卡顿，5 条评论，1 👍，无 fix PR | 24 天 | 尽快确认是否为前端渲染性能问题，并优先排期修复 |
| 🔧 修复 PR | [PR #3318](https://github.com/sipeed/picoclaw/pull/3318) | `pnpm-lock.yaml` 损坏修复，社区贡献，仍为 OPEN 且被 stale 标记 | 9 天 | 尽快 review 并合并，该 PR 影响前端构建稳定性 |
| 🤖 依赖更新 | [PR #3332](https://github.com/sipeed/picoclaw/pull/3332) / [#3333](https://github.com/sipeed/picoclaw/pull/3333) / [#3334](https://github.com/sipeed/picoclaw/pull/3334) / [#3335](https://github.com/sipeed/picoclaw/pull/3335) / [#3336](https://github.com/sipeed/picoclaw/pull/3336) | 5 条 Dependabot 依赖升级 PR 全部等待合并 | 1 天（批量进入） | 在 3 条旧 PR 因 stale 被关闭后，应及时合并新 PR 以保持依赖基线更新 |

---

**日报总结**：PicoClaw 今日处于**低功能开发、高依赖维护**的状态。社区侧最大的信号是一个持续 3 周未解决的 Web UI 性能 Bug，以及两个新提出的功能增强请求。项目健康度总体稳定，但 #3281 的长期悬置和 #3318（lockfile 修复）被 stale 标记，都提醒维护者需要尽快接手处理，以避免社区贡献者积极性受损。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 · 2026-08-14

## 1. 今日速览

过去 24 小时 NanoClaw 活跃度极高：共发生 **2 条 Issue 更新（1 新增 / 1 关闭）**、**19 条 PR 更新（6 待合并 / 13 已合并或关闭）**，并发布了 **v2.2.0**。核心团队（core-team）在供应链安全验证流水线上投入密集，完成了 agent-image 从「身份绑定 → 全 PR 触发 → 签名审批 → 自动合并」的闭环，同时模板系统正式升级为 Agent Plugins 1.0.0 目录格式。社区侧 Issue 讨论相对平稳，新出现一个关于 webhook/bot 触发无上限审批卡的问题，值得关注。整体项目健康度良好，CI 工程化与安全加固节奏明显加快。

## 2. 版本发布：v2.2.0

**v2.2.0** 于 2026-08-13 发布。根据 Release 描述（内容因数据截断未能完整展示）与同日合并的 PR，核心变化有以下几点：

- **模板插件原地更新**：`ncl groups create --template <ref>` 在目标 group 已携带该模板插件时，不再重复创建 agent，而是转为原地更新；dry-run 模式会打印所有插件所辖 surface（插件文件、skills、MCP server 等）的变更计划。
- **Agent 模板格式迁移**：PR [#3220](https://github.com/nanocoai/nanoclaw/pull/3220)（`feat!: agent templates become Agent Plugins 1.0.0 directories`）将模板目录结构迁移为 Agent Plugins 1.0.0 规范，并在 stamp-time 增加 symlink/caps/secret 安全加固。
- **Setup 向导模板流**：PR [#2909](https://github.com/nanocoai/nanoclaw/pull/2909) 合并，补齐了 setup 向导的模板选择流程与 first-agent stamping。

> ⚠️ 破坏性变更：模板目录格式迁移属于引擎级变更，旧版模板可能需要进行目录结构调整。建议升级前先在 dry-run 模式下验证变更计划，并确认 `ncl groups create --template` 的幂等行为符合预期。

## 3. 项目进展

### 🛡️ 供应链安全与 CI 闭环（核心团队主攻方向）

- [#3238](https://github.com/nanocoai/nanoclaw/pull/3238) 合并：`verify-agent-image` 从路径过滤改为**在所有 PR 上运行**，解决其作为 required status check 的前提问题。
- [#3158](https://github.com/nanocoai/nanoclaw/pull/3158) 合并：修复 `AGENT_IMAGE_SIGNER_IDENTITY` / `_ISSUER` 变量缺失导致签名验证被静默跳过的问题，绑定发布者真实身份并**按架构检查 attestations**。
- [#3241](https://github.com/nanocoai/nanoclaw/pull/3241) 合并：将已验证的发布者签名作为 pin bump 的 approving review，**默认关闭**（需 `AGENT_IMAGE_AUTO_APPROVE=true`），未开启时仅报告可批准项并停止。
- [#3240](https://github.com/nanocoai/nanoclaw/pull/3240) 合并：新增 `repository_dispatch` 触发的 agent-image bump PR 打开流程，AWS worker 验证镜像后自动提起 `versions.json` PR。
- [#3236](https://github.com/nanocoai/nanoclaw/pull/3236) 合并：agent 镜像重新固定至 `hardened-2026-08-13`，此次携带了 NanoClaw 自身内容更新而非仅 base 刷新。

### 🧩 模板 / 插件引擎

- [#3220](https://github.com/nanocoai/nanoclaw/pull/3220) 合并：Agent 模板正式成为 Agent Plugins 1.0.0 目录，属于格式迁移 + stamp-time 安全加固。
- [#2909](https://github.com/nanocoai/nanoclaw/pull/2909) 合并：setup 向导模板流与 first-agent stamping 落地，模板功能从「CLI only」补齐到「交互式初始化」。
- [#3231](https://github.com/nanocoai/nanoclaw/pull/3231) 合并：Codex / OpenCode 两侧 provider 配置写入插件 MCP working directory。

### 🐛 稳定性与安全修复

- [#3229](https://github.com/nanocoai/nanoclaw/pull/3229) 合并：Telegram pairing code 由 `Math.random()` 改为 `crypto.randomInt`，并将空间从 4 位扩大，修复弱随机数安全风险。
- [#3145](https://github.com/nanocoai/nanoclaw/pull/3145) 合并：新增 DB migration 021，为既有 messaging-group wirings 回填缺失的 channel destinations。
- [#2624](https://github.com/nanocoai/nanoclaw/pull/2624) 合并：`McpServerConfig` 支持 per-server `disabledTools`，提升 MCP 服务治理粒度。

## 4. 社区热点

社区评论数据整体有限（唯一带评论的 Issue 为 #3234，「1 条」），但有两个信号值得关注：

- **[#3235](https://github.com/nanocoai/nanoclaw/issues/3235)（新开，0 评论）**：`unknown_sender_policy = 'request_approval'` 下，webhook / bot 等自动化发送者会触发**无上限审批卡片**，且拒绝状态不持久。虽暂无评论，但其「自动发送者审批风暴」场景命中真实运维痛点，预计会引发较多讨论。
- **[#3242](https://github.com/nanocoai/nanoclaw/pull/3242)（Draft, DO NOT MERGE）**：core-team 用 draft PR 进行「签名审批人」流程的 live-fire 测试。以临时 PR 形式验证完整链路（verify → approve-agent-image → cosign verify → approving review），结束后关闭不合并——这种「把 CI 当测试沙箱」的工程实践值得社区关注。

## 5. Bug 与稳定性

| 严重度 | Issue/PR | 说明 | 状态 |
|---|---|---|---|
| 中高 | [#3235](https://github.com/nanocoai/nanoclaw/issues/3235) | unknown-sender 审批对 webhook/bot 生成无上限审批卡，拒绝不持久，影响自动化消息群组 | 无 fix PR |
| 中 | [#3234](https://github.com/nanocoai/nanoclaw/issues/3234) | 模板创建的 agent group 拿到裸 UUID，缺 `ag-` 前缀，被 OneCLI `ensureAgent` 拒绝 | 已关闭，疑由 v2.2.0 模板引擎重写覆盖，建议在 release notes 确认 |
| 中（安全） | [#3229](https://github.com/nanocoai/nanoclaw/pull/3229) | Telegram 配对码使用 `Math.random()`，可预测 | 已合并修复 |
| 低 | [#3158](https://github.com/nanocoai/nanoclaw/pull/3158) | `verify-agent-image` 因 CI 变量缺失导致验证被静默跳过 | 已合并修复 |

## 6. 功能请求与路线图信号

- **[#3218](https://github.com/nanocoai/nanoclaw/pull/3218)（OPEN）**：为 host / container 的 `ncl` 客户端增加 `--stdin-json` 有界 JSON 输入模式，为 CLI 可编程调用铺路，对脚本化和 Agent 编排场景有价值。
- **[#2420](https://github.com/nanocoai/nanoclaw/pull/2420)（OPEN）**：`/add-hindsight` skill，以 bundled MCP wrapper 接入 Hindsight 长期记忆引擎，对应「Agent 长期记忆」方向。
- **[#2346](https://github.com/nanocoai/nanoclaw/pull/2346)（OPEN）**：未知斜杠命令改为按普通聊天处理，避免 Agent SDK 静默丢弃响应。
- **[#2624](https://github.com/nanocoai/nanoclaw/pull/2624)（已合并）**：per-server `disabledTools` 已被采纳，说明 MCP 服务治理是当前重点方向之一。

## 7. 用户反馈摘要

- **模板 ID 一致性**（来自 [#3234](https://github.com/nanocoai/nanoclaw/issues/3234) 评论）：用户发现 `--template` 路径与 `--folder` 路径生成的 agent-group id 格式不一致，导致依赖 OneCLI 的流程断掉——暴露的是「同一功能两种入口、两种 ID 规则」的体验落差。
- **自动化消息审批风暴**（来自 [#3235](https://github.com/nanocoai/nanoclaw/issues/3235)）：采用 `request_approval` 策略的组织，在收到平台 webhook 或 bot 消息时会持续生成审批卡，且无法通过「拒绝」持久生效；自动化场景下该策略实际不可用。

## 8. 待处理积压

以下 PR 长期未合入，提醒维护者关注：

- [#2346](https://github.com/nanocoai/nanoclaw/pull/2346)（2026-05-08 创建，OPEN）：formatter 将未知斜杠命令视为普通聊天，修复响应被静默丢弃问题。已积压 3 个月+。
- [#2420](https://github.com/nanocoai/nanoclaw/pull/2420)（2026-05-11 创建，OPEN）：Hindsight 长期记忆 MCP 包装器，功能完整但久未 review。若与近期「模板/插件」重构方向冲突，建议明确关闭或拆分。
- [#3218](https://github.com/nanocoai/nanoclaw/pull/3218)（2026-08-09 创建，OPEN）：`--stdin-json` 输入模式，等待 review。

---

*报告生成时间：2026-08-14。数据来源：NanoClaw GitHub（过去 24 小时动态）。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

## IronClaw 项目日报 — 2026-08-14

### 1. 今日速览

过去24小时项目处于**高活跃度**状态：共更新50条 Issue（新开/活跃 32，关闭 18）与50条 PR（待合并 26，已合并/关闭 24），并正式发布 **ironclaw-v1.2.0** 稳定版。核心事件是“可插拔代理循环”史诗级重构（[#7482](https://github.com/nearai/ironclaw/issues/7482)）完成大规模规划：同批创建约20个子任务并关闭其中15个规范性问题，仅保留4个按序推进的实施项（[#7624](https://github.com/nearai/ironclaw/issues/7624) 立即开工，[#7621](https://github.com/nearai/ironclaw/issues/7621)/[#7622](https://github.com/nearai/ironclaw/issues/7622)/[#7623](https://github.com/nearai/ironclaw/issues/7623) 延迟阶梯）。同时并行了多项 Postgres 写放大优化 PR（[#7628](https://github.com/nearai/ironclaw/pull/7628)–[#7631](https://github.com/nearai/ironclaw/pull/7631)）。社区反馈集中在 MCP 认证流程受阻与 GitHub 扩展状态误报两个体验问题上。

| 指标 | 数值 |
|---|---|
| Issue 更新 | 50（新开/活跃 32，关闭 18） |
| PR 更新 | 50（待合并 26，已合并/关闭 24） |
| 新版本 | 1 个（ironclaw-v1.2.0） |

---

### 2. 版本发布

**ironclaw-v1.2.0**（发布于 2026-08-13）—— 将已验证候选版 `1.2.0-rc.3` 稳定提升为正式版。

**内容要点：**
- **1.2.0-rc.3 修复**：运行时容器镜像现预装 `curl`，容器内 HTTP 健康检查可正常执行，编排器探测 worker 时不再因缺少工具而失败。
- **完整继承 RC1 功能集**及 RC2/RC3 中已验证的所有修复。
- 发布配套 PR [##7625](https://github.com/nearai/ironclaw/pull/7625) 同步更新包清单与锁文件，并将 RC1–RC3 变更日志统一归入正式版条目。

现有 Release Notes 未提及破坏性变更；升级路径为常规稳定版替换，建议关注容器镜像重建后 `curl` 引入的体积变化。

链接：[Release 页面](https://github.com/nearai/ironclaw/releases) • [发布 PR #7625](https://github.com/nearai/ironclaw/pull/7625)

---

### 3. 项目进展

过去24小时合并/关闭24条 PR，主要推进方向如下：

**架构演进（Reborn 计划）**
- 为 [#7482](https://github.com/nearai/ironclaw/issues/7482) 完成约20个规划任务的创建与关闭（[#7606](https://github.com/nearai/ironclaw/issues/7606)–[#7623](https://github.com/nearai/ironclaw/issues/7623)），明确了出口代理方案（iron-proxy 代替 WS2 推理网关）、HarnessDriver v1 契约、phase-0 适配器集合（claude-code、pi、codex）、每线程工作区挂载、策略记录等绑定决策。**注意**：这些关闭属于规范定型，实际代码执行集中在4个保留项——[#7624](https://github.com/nearai/ironclaw/issues/7624)（v0: ACP 执行器，明确为“现在唯一要构建的工作项”）与 #7621/#7622/#7623（延迟阶梯，每级以 v0 验证为触发条件）。

**功能交付**
- [`#7163`](https://github.com/nearai/ironclaw/pull/7163)（已合并）：结构化编辑 docx/xlsx/pptx、由 HTML 渲染 PDF，并修复 #7109 引入的文本日志回归——补齐“真实文档往返”能力闭环。

**稳定性修复（已合并）**
- [`#7531`](https://github.com/nearai/ironclaw/pull/7531)：重复调用检测由滑动窗口频率改为“连续三次相同签名”的简单判断，仅输出模型可见告警，不再拦截执行。
- [`#7581`](https://github.com/nearai/ironclaw/pull/7581)：OAuth 发现后刷新内置托管 MCP 目录投影，避免工具认证后仍显示 `setup_needed`。
- [`#7579`](https://github.com/nearai/ironclaw/pull/7579) / [`#7590`](https://github.com/nearai/ironclaw/pull/7590)：Live Canary 链路修正——扩大 seeded Slack 授权范围、对齐技能快照 marker 所有者，修复 QA 车道在 Slack 连接时的崩溃。

**性能优化（今日开放、方向明确）**
- [`#7628`](https://github.com/nearai/ironclaw/pull/7628) 停止心跳日志刷写；[`#7629`](https://github.com/nearai/ironclaw/pull/7629) 减少触发器与外发状态写入；[`#7630`](https://github.com/nearai/ironclaw/pull/7630) 新增 Postgres 每轮写量压力测试预设；[`#7631`](https://github.com/nearai/ironclaw/pull/7631) 引入共享 `CoalescingEventSink` 合并运行时里程碑写入。这批 PR 是对 [#7591](https://github.com/nearai/ironclaw/issues/7591)（写放大）系统优化的直接落地。

**文档与工程保障**
- [`#7376`](https://github.com/nearai/ironclaw/pull/7376)（已合并）：将路径引用门禁扩展到 `docs/`（Mintlify 页面、zh 镜像、内部契约文档），此前公开文档树路径检查为零覆盖；[`#7378`](https://github.com/nearai/ironclaw/pull/7378)（开放）为其配套的 doc-fact 契约测试。

---

### 4. 社区热点

- **[#7482 Epic: Pluggable agent loops](https://github.com/nearai/ironclaw/issues/7482)（评论 6）** —— 当前最热议题：提出 IronClaw 转型为“内核”（调度、租户、能力膜、密钥、出口边界、审计），将 agent loop 与外置 harness 解耦。核心贡献者 serrrfirat 在评论中记录了绑定决策1–7，全部 Reborn 子任务均挂靠于此，代表项目级架构方向。

- **[#6257 PDF 附件 mime_type 报错](https://github.com/nearai/ironclaw/issues/6257)（评论 4，状态 CLOSED）** —— 用户 Michael Kelly 在 Slack 反馈发送/生成 PDF 报 `Invalid value (attachments.mime_type)`。多方关注，但今日可见 PR 列表中未直接对应修复，建议留意关闭原因是否为实际修复。

- **[#2117 ironclaw-bridge 本地文件/MCP 桥接守护进程](https://github.com/nearai/ironclaw/issues/2117)（评论 2，👍 1）** —— 云托管部署下访问本地 Obsidian 仓库/项目目录的持续诉求，属“本地-云端混合”场景的长期痛点（4月提出）。

- **当天 #7482 子任务批量创建与关闭（#7606–#7623）** 本身构成一项热点事件：同作者同日创建近20个 Issue，形成事实上的“路线图公告”，外部贡献者借此看到 Reborn 计划的完整交付顺序（egress → harness 执行 → 能力接入 → 推广梯子）。

---

### 5. Bug 与稳定性

按严重程度排序：

| 严重程度 | Issue | 状态 | 修复 PR |
|---|---|---|---|
| 高（认证阻断） | [#7626 自定义 MCP 浏览器/邮箱认证卡住](https://github.com/nearai/ironclaw/issues/7626) | OPEN（8-13 新开） | 无 |
| 高（状态误报） | [#7627 GitHub 扩展无效凭证仍显示已连接](https://github.com/nearai/ironclaw/issues/7627) | OPEN（8-13 新开） | 无 |
| 中（记忆 / 信任） | [#7185 跨会话记忆不可靠](https://github.com/nearai/ironclaw/issues/7185) | OPEN（8-04） | 无（Reborn 架构可能间接改善） |
| 中（已关闭） | [#7589 NEAR AI Cloud Sonnet-5 持续 500](https://github.com/nearai/ironclaw/issues/7589) | CLOSED（8-13） | 关联 nearai/cloud-api#920 |
| 低（已关闭） | [#6257 PDF 附件 mime_type 错误](https://github.com/nearai/ironclaw/issues/6257) | CLOSED（8-13） | 列表内未见明确 fix PR |

今日没有出现大规模回归报告；相反，昨日合并的 #7531、#7581、#7579 本身即是针对此前缺陷的修复，体现出“发现→修复→验证”在24小时内闭环的节奏。

---

### 6. 功能请求与路线图信号

- **可插拔 Agent Loop（#7482）**：路线图最清晰信号。**[#7624 v0: ACP harness executor](https://github.com/nearai/ironclaw/issues/7624)** 是当前唯一排定的构建项——以 claude-code 作为外部 loop、dev-only yolo 模式先行验证插槽；[#7621](https://github.com/nearai/ironclaw/issues/7621)（出口边缘）、[#7622](https://github.com/nearai/ironclaw/issues/7622)（外部 harness 执行）、[#7623](https://github.com/nearai/ironclaw/issues/7623)（能力接入/上线）逐级触发。

- **Unbound-turns 设计落地（[PR #7633](https://github.com/nearai/ironclaw/pull/7633)，今日新开）**：线程成为协调器任务单元、对话 = 线程 + 产品侧绑定、内核不再携带回复路由。属新方向的较大架构改动（XL 规模），值得关注其与 #7482 的配合关系。

- **本地桥接（[#2117](https://github.com/nearai/ironclaw/issues/2117)）**：评论与 👍 显示真实需求。待 #7624 重构出 harness slot 后，`ironclaw-bridge` 可能作为生态方向被激活。

- **Web UI 版本可见性（[#7580](https://github.com/nearai/ironclaw/issues/7580)）**：用户希望从界面直接看到 Reborn 版本——小而明确的 UI 增强信号。

- **自动化执行契约（[PR #7548](https://github.com/nearai/ironclaw/pull/7548)，开放中）**：为定时自动化引入版本化 structured execution contract（目标、成功标准、输出指令、无结果行为、允许能力等），并强制新建自动化时填写。

- **性能优化路线（#7591 系列）**：[#7603](https://github.com/nearai/ironclaw/issues/7603)、[#7604](https://github.com/nearai/ironclaw/issues/7604)、[#7605](https://github.com/nearai/ironclaw/issues/7605) 构成 Tier-3 写放大削减计划——每条消息减少 1–3 行条目、每轮减少约 14 行 checkpoint 写，属可扩展性主动投资。

---

### 7. 用户反馈摘要

- **MCP 交互式认证失败（[#7626](https://github.com/nearai/ironclaw/issues/7626)）**：连接需要浏览器/邮箱双重验证的 MCP 时，IronClaw 卡在等待状态。该场景出现在 MKT1 等付费服务上，直接影响真实使用；说明当前 custom-MCP harness 缺少交互式认证状态推进机制。

- **GitHub 扩展状态误导（[#7627](https://github.com/nearai/ironclaw/issues/7627)）**：用户输入任意凭据（如 "1"）后扩展即显示已连接，后续认证虽会失败但 UI 已先表达“成功”，削弱信任。

- **跨会话记忆不可靠（[#7185](https://github.com/nearai/ironclaw/issues/7185)）**：多位测试者独立观察到一个会话建立的信息无法在后续会话被召回，涉及律师等专业场景，说明记忆是当前体验的核心短板。

- **Sonnet-5 三天不可用（[#7589](https://github.com/nearai/ironclaw/issues/7589)）**：用户对 NEAR AI Cloud 上 Sonnet-5 连续三天 500 的抱怨，虽关联上游 Anthropic 问题且已关闭，但“三天未解决”的感知值得团队关注。

- **版本信息不可得（[#7580](https://github.com/nearai/ironclaw/issues/7580)）**：用户无法从 Web UI 得知 IronClaw Reborn 版本号，发布信息的可发现性不足。

---

### 8. 待处理积压

以下为长期未关闭/未合并且相对重要的事项，建议维护者关注：

1. **[#2117 ironclaw-bridge 本地文件/MCP 桥接](https://github.com/nearai/ironclaw/issues/2117)**（4月7日创建，4个月+）——“云上 IronClaw + 本地文件”场景的长期阻塞项；若 Reborn 架构成型，建议评估是否纳入后续 harness 生态。

2. **[PR #7184 Nostr 主机函数（WASM 工具）](https://github.com/nearai/ironclaw/pull/7184)**（8月4日开，10天未合并）——为 WASM 沙箱添加 `nostr-sign-event` 等三个 host 函数；是否受 Reborn 工具重架构（集成策略记录、WASM 包再定位）影响需重新评估？

3. **[PR #7020 tokio-tungstenite 0.29→0.30](https://github.com/nearai/ironclaw/pull/7020)**（8月2日开，12天未合并）——依赖升级长期搁置，建议明确阻塞原因或尽快合入，避免分叉积累。

4. **[PR #7262 wasm 工具链依赖升级（wit-component/wit-parser）](https://github.com/nearai/ironclaw/pull/7262)**（8月5日开，9天未合并）——与 WASM 沙箱相关，可能与 #7184 相互影响，建议统一评估。

5. **[#7185 跨会话记忆不可靠](https://github.com/nearai/ironclaw/issues/7185)**（8月4日开，多位测试者复现）——暂无维护者回复；记忆是 agent 核心体验，建议至少给出定位结论与修复时间表。

---

**总结**：IronClaw 处于架构转型快车道——1.2.0 稳定发布 + Reborn 规划落定 + 写放大性能优化同步推进，项目健康度良好。主要风险点在于外部 harness（MCP 认证、扩展状态误报）体验问题尚无修复 PR，以及多个依赖/功能 PR 的长期积压。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-14

## 1. 今日速览

过去24小时项目整体活跃度**中等偏上**，主要表现为 PR 合并动作密集（6 条合并/关闭），但新 Issue 讨论几乎停滞（仅 1 条且带有 stale 标记）。今日合入的 PR 集中于 **renderer 层 UI 统一重构**（skills/MCP/cowork 管理界面）与 **企业版功能落地的首轮合并**，同时在定时任务稳定性方面有一条 bug fix 合入。尚未合并的 5 条 PR 中，4 条均带有 stale 标记，存在长期搁置风险。无新版本发布，项目处于功能迭代与 UI 收敛的并行阶段。

## 3. 项目进展

今日共有 6 条 PR 完成合并/关闭，是近段时间合并密度较高的一天，主要集中在 UI 层收敛与企业版功能首轮合入。

### 已合并 / 已关闭 PR

- **[#2484] Feat/enterprise edition**（`area: renderer, docs, main, openclaw`）— 企业版功能初步合入，横跨 renderer、docs、main、openclaw 四个模块，是当前最重要的合入项。PR 描述为模板占位，缺实际变更清单，需要维护者后续补充合入说明，但合入本身标志着企业版从开发分支向主干回流的开始。
  https://github.com/netease-youdao/LobsterAI/pull/2484

- **[#2487] refactor(skills): merge skills and mcp views into unified skills-and-connectors view** — 将 Skills 与 MCP 两个视图合并为统一的 "Skills and Connectors" 视图，是 renderer 层信息架构收敛的关键一步，有利于减少用户在不同管理面板间切换的认知成本。
  https://github.com/netease-youdao/LobsterAI/pull/2487

- **[#2488] Refactor/cowork btw and management UI** — 配合上一条，对 cowork 的 BTW（By The Way）与管理界面进行了重构，与 skills/mcp 视图合并联动，桌面端整体管理体验趋于一致。
  https://github.com/netease-youdao/LobsterAI/pull/2488

- **[#2486] refactor(mcp): unify MCP card/detail UI with kits and skills styling** — 提取通用 `CardOverflowMenu` 和 `managementTypography`，统一 MCP 与 kits/skills 的卡片及详情样式，并拆分了 `McpCard`、`McpDetailModal`、`mcpTabs` 等组件。属于纯 UI 层重构，降低后续维护成本。
  https://github.com/netease-youdao/LobsterAI/pull/2486

- **[#2485] feat(activity): support evergreen daily check-in** — 将原签到活动（#2408）从一次性活动改为 **evergreen 常驻形态**，并调整了账户菜单积分入口（由端内展开改为跳转网页积分详情）。验证齐备：7/7 Vitest 通过，ESLint 零警告，构建通过。
  https://github.com/netease-youdao/LobsterAI/pull/2485

- **[#1232] fix(scheduledTask): 修复定时任务首次执行结果不推送到 UI 的问题** — 修复 cron 任务首次运行结果不实时推送到 UI 的 bug（合并时带 stale 标记，属延迟合入）。根因是 `pollOnce()` 中 `previousRunAtMs > 0` 的条件在首轮执行时为 false，导致 UI 需等第二次执行才能看到结果推送。
  https://github.com/netease-youdao/LobsterAI/pull/1232

### 总结

今日合并内容呈现清晰的推进方向：**① 管理端 UI 统一**（#2486、#2487、#2488 联动），**② 企业版功能回流 main**（#2484），**③ 签到活动常驻化**（#2485），**④ 老 bug fix 收尾**（#1232）。其中 UI 三条 PR 联动说明项目正在做桌面端信息架构的集中收敛，这通常是为后续商业化功能铺路。项目整体前进了一个迭代步长，但大量改动集中在 renderer 层，main/openclaw 层面的结构性改动只有企业版合入一项。

## 4. 社区热点

今日社区讨论热度整体偏低。唯一有明确评论记录的 Issue 为 #1162，同时也是当日唯一有更新的 Issue。

- **[#1162] [OPEN] [stale] 为 openclawMemoryFile 和 openclawLocalTimeContextPrompt 补充 Vitest 单元测试** — 创建于 2026-03-31，昨日（08-13）有一条新评论。该 Issue 的核心诉求是为两个零测试覆盖的核心模块补齐测试，在搁置 4 个多月后被重新触碰，可能与近期稳定性工作优先级提升有关。
  https://github.com/netease-youdao/LobsterAI/issues/1162

值得注意的趋势：该项目目前的社区讨论信号较弱（新 PR 评论数据均为 undefined，即无有效评论），活跃输出主要集中在维护者自身，而非外部贡献者。社区热点集中在**测试补全**与**安全模块**方向（#1156、#1162/PR #1165），说明社区关注的是项目长期可靠性而非新功能。

## 5. Bug 与稳定性

今日合并/关闭的 PR 中包含 1 条 bug fix，另有 1 条已合入 PR 涉及行为变化可能引入回归风险，需要关注。

### 已修复

- **[#1232] 定时任务首次执行结果不推送到 UI** — 中等严重度。用户首次运行定时任务时无法收到实时状态推送，需等第二次执行才能看到结果，造成"任务是否执行成功"的困惑。根因明确（`previousRunAtMs > 0` 条件在首轮不成立），修复逻辑清晰。该 PR 创建于 2026-04-01，时隔 4 个多月才合入，说明此类低频 bug 的修复周期偏长。
  https://github.com/netease-youdao/LobsterAI/pull/1232

### 仍待处理

- **[#2483] fix(openclaw): key skill entries by frontmatter name** — 待合并。修复 skill 目录名与 frontmatter `name` 不一致时，OpenClaw 的 enable/disable 开关静默失效的问题。涉及用户侧可感知的配置失效问题（UI 开关无实际效果），属于功能正确性缺陷但非崩溃级。
  https://github.com/netease-youdao/LobsterAI/pull/2483

- **[#1163] 定时任务"立即运行"交互无反馈** — 待合并（stale）。点击立即运行后界面无状态反馈，任务状态需轮询等待最长 15 秒，容易导致用户重复点击。涉及 IPC 层 `RunManually` 同步阻塞、UI loading 状态缺失、右键菜单样式不一致等多个维度。创建于 2026-03-31，搁置超 4 个月。
  https://github.com/netease-youdao/LobsterAI/pull/1163

- **[#1232 同类复发风险]** #1232 修复了"首次执行不推送"的问题，但 #1163 中提到的"轮询最长 15 秒"的延迟问题仍未处理，两者叠加依然是定时任务整体体验的短板。

## 6. 功能请求与路线图信号

今日无新 Issue 提出功能请求，但已合并 PR 释放出几个明确的路线图信号：

1. **企业版（Enterprise Edition）已进入主干合入阶段**（#2484） — 横跨 renderer/main/openclaw/docs 四个 area，说明企业版不是简单加几个页面，而是涉及 core 层的系统级功能。结合 #2485 签到活动的 evergreen 化（为运营活动提供常驻入口），可推断商业化功能（企业版 + 活动运营）正在同步推进。

2. **管理端 UI 统一是当前迭代主题**（#2486、#2487、#2488） — skills/MCP/cowork 三块管理界面正在融合为一套设计语言和交互范式。这种重构通常是产品功能板块进入稳定期的信号。

3. **OpenClaw 技能管理正确性受关注**（#2483） — 该 PR 将技能条目 key 从目录名改为 frontmatter 中的 `name`，使 OpenClaw 的 enable overrides 能够正确解析。这表明项目正在收紧 agent 技能配置的一致性与可靠性，属于 agent 能力建设的基础工作。

## 7. 用户反馈摘要

今日数据中缺乏直接的 Issue 用户评论，但可从 PR 描述中提炼出以下用户痛点场景：

- **定时任务状态反馈缺失**（#1163）：用户在点击"立即运行"后无任何界面反馈，且任务状态最长需 15 秒轮询才会更新，导致用户对操作是否生效产生疑虑，并可能重复点击造成重复执行。这是定时任务模块操作体验的主要短板。

- **首次执行结果不推送**（#1232）：任务从未运行过时，第一次执行的结果不会实时推送到 UI，用户只能在下一次执行后才能看到结果，影响对任务正确性的即时判断。

- **自定义 Agent 重名无校验**（#1166）：用户可提交已存在的 agent 名称，导致列表出现歧义条目，用户需手动找到原始条目进行区分。

- **技能启停开关可能静默失效**（#2483）：当技能目录名与 frontmatter `name` 不一致时，UI 上的 enable/disable 开关虽然显示已切换，但 OpenClaw 实际未生效，用户会误以为配置已生效，属于隐蔽性较强的问题。

- **核心模块零测试覆盖**（#1156、#1162）：社区贡献者指出 `commandSafety`（危险命令检测）和记忆管理模块此前完全没有测试覆盖，担心误判导致 AI 执行破坏性命令（如 `rm -rf`、`git push --force`）或记忆质量失控。这反映出用户对 agent 安全性和记忆可靠性的深层顾虑。

## 8. 待处理积压

以下 PR/Issue 长期未获合入或响应，已出现 stale 标记，建议维护者重点关注：

| 编号 | 类型 | 标题 | 搁置时长 | 风险等级 | 建议 |
|---|---|---|---|---|---|
| #1166 | PR | fix(agent): prevent duplicate custom agent names | 4.5 个月（stale） | 中 — 功能正确性 | 代码量应不大（renderer 层名称查重），建议优先 review |
| #1163 | PR | fix(定时任务): 补全"立即运行"交互反馈，引入乐观更新与 Gateway 状态同步 | 4.5 个月（stale） | 中 — 体验缺陷 | 涉及 IPC/状态层改动，建议在定时任务模块下个迭代排期 |
| #1156 | PR | 为 commandSafety 和 coworkMemoryJudge 补充 Vitest 单元测试 | 4.5 个月（stale） | 高 — 安全核心模块零覆盖 | 与 #1162/PR #1165 同批，社区贡献者已备好测试，建议尽快合入并致谢 |
| #1165 | PR | 为 openclawMemoryFile 和 openclawLocalTimeContextPrompt 补充 Vitest 单元测试 | 4.5 个月（stale） | 高 — 核心模块零覆盖 | 与 Issue #1162 对应，测试代码已就绪，搁置过久会打击社区贡献积极性 |

**延展提醒**：#2483（OpenClaw skill key fix）今日新开暂未合入，虽然不在积压范畴，但涉及功能开关静默失效问题，建议在本周内给予明确处理结论。

---

*数据抓取时间：2026-08-14。Issue/PR 评论数标注为 undefined 的项表示无有效评论数据或接口未返回。*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-08-14

## 1. 今日速览

过去 24 小时 Moltis 提交了 4 条 PR（全部待合并），新增 1 条测试稳定性 Issue，无新版本发布。整体提交活跃度中等偏高，但合并节奏暂缓（0 merge/close）。值得注意的是，4 条 PR 中有 3 条针对同一类问题——上游工具 `wacrawl` / `gogcli` 迁移至 openclaw 组织导致模块路径失效；另外 1 条为连接器基础设施大型功能 PR。社区讨论平静，无高互动议题。项目当前健康度良好，修复方向明确，但需关注合并积压问题。

---

## 3. 项目进展

**今日无 PR 被合并或关闭，但 4 条待合并 PR 披露了项目近期推进方向：**

- **[#1194 fix(scripts): guard empty bash array expansions for macOS bash 3.2](https://github.com/moltis-org/moltis/pull/1194)** — 修复 macOS 上 `just local-validate-full` 因空数组展开导致脚本崩溃的问题，属开发者工具链修复。
- **[#1192 fix(skills): point wacrawl install metadata at the openclaw org](https://github.com/moltis-org/moltis/pull/1192)** — 修复 `wacrawl` skill 的 Go install 路径指向已迁移的 openclaw 仓库。
- **[#1191 fix(sandbox): point gogcli module path at the openclaw org](https://github.com/moltis-org/moltis/pull/1191)** — 修复 `moltis sandbox build` 因 gogcli 模块路径迁移导致全部预构建镜像失败的问题。
- **[#1190 Add durable CalDAV and channel history connectors](https://github.com/moltis-org/moltis/pull/1190)** — 大型功能 PR：新增持久化连接器（原子快照、调度、投影、本地全文搜索），以及只读 CalDAV 数据集和 Slack/Discord/Matrix/Teams 消息历史数据集。

**解读**：大量 `openclaw` org 迁移修复表明项目正在跟随上游依赖变更，属于维护性工作；#1190 则是数据接入层的架构性扩展，是下一版本可能包含的核心功能。

---

## 4. 社区热点

今日无高互动讨论（评论数与 👍 均为 0）。相对受关注的是：

- **[#1190 Add durable CalDAV and channel history connectors](https://github.com/moltis-org/moltis/pull/1190)** — 该 PR 体量最大，横跨连接器持久化、日历数据、多个聊天平台历史消息、本地搜索等多个模块，代表了项目向「长期记忆 + 多源数据接入」方向推进的意图，后续评审可能引发较多讨论。

其余 3 条 PR 均为小而明确的修复，讨论热度有限。

---

## 5. Bug 与稳定性

今日报告 1 个新 Issue（测试稳定性），另有 3 个通过 PR 暴露的修复类问题。按严重程度排序：

**🔴 高 — 阻断全部预构建镜像的 sandbox 构建**
- **Issue/PR**：[#1191 fix(sandbox): point gogcli module path at the openclaw org](https://github.com/moltis-org/moltis/pull/1191)
- **现象**：`moltis sandbox build` 在**所有**预构建镜像上失败，原因是生成的 Dockerfile 中 `go install github.com/steipete/gogcli/cmd/gog@latest` 路径已失效（gogcli 迁移至 openclaw org）。
- **影响**：完全阻断 sandbox 相关功能。
- **状态**：已有修复 PR 待合并。

**🟠 中 — wacrawl skill 安装损坏**
- **Issue/PR**：[#1192 fix(skills): point wacrawl install metadata at the openclaw org](https://github.com/moltis-org/moltis/pull/1192)
- **现象**：`wacrawl` skill 的 Go install fallback 因模块路径变更而报 HTTP 重定向错误。
- **影响**：用户无法通过 skill 安装 wacrawl。
- **状态**：已有修复 PR 待合并。

**🟡 低 — macOS 下本地校验脚本崩溃**
- **Issue/PR**：[#1194 fix(scripts): guard empty bash array expansions for macOS bash 3.2](https://github.com/moltis-org/moltis/pull/1194)
- **现象**：`just local-validate-full` 在 macOS 上因 `args[@]: unbound variable` 直接失败（bash 3.2 与 `set -u` 行为差异）。
- **影响**：macOS 开发者本地验证流程不可用。
- **状态**：已有修复 PR 待合并。

**🟡 低 — 测试偶发失败（新 Issue）**
- **[#1193 Flaky test: push fanout timeout assertion races under full-suite load](https://github.com/moltis-org/moltis/issues/1193)**
- **现象**：`moltis-gateway push::tests::fanout_is_bounded_and_times_out_a_hung_endpoint` 在完整测试套件运行下 2/3 概率失败（10 核 macOS 空闲机器），单独/局部运行时通过。
- **影响**：无生产影响，但影响 CI 可靠性。
- **状态**：尚无修复 PR，可能需调整超时断言或使用更宽松的同步机制。

---

## 6. 功能请求与路线图信号

- **[#1190 Add durable CalDAV and channel history connectors](https://github.com/moltis-org/moltis/pull/1190)** — 这是当前最明确的路线图信号。该 PR 引入：
  - 连接器持久化层（原子快照、调度、投影）
  - 只读 CalDAV 数据源
  - Slack/Discord/Matrix/Teams 消息历史数据集（不复制凭据）
  - 本地全文搜索（有界）

  这大概率是下一版本的核心功能，暗示 Moltis 正从「会话式助手」向「持久记忆 + 多渠道记录 + 本地检索」方向演进。但该 PR 已开放 3 天且未合并，建议维护者尽快安排评审。

- 此外，3 条 openclaw 迁移修复表明项目正跟随上游仓库重组，后续所有引用 `steipete/*` 路径的模块都需要检查是否同样需要迁移。

---

## 7. 用户反馈摘要

今日 Issues/PRs 无评论内容，无直接用户反馈可提炼。但从提交描述可观察到：

- 开发者在使用 macOS 作为日常开发环境（#1194 暴露 bash 3.2 兼容性问题）。
- 用户/开发者对「安装即用」的期望较高：#1191/#1192 的失败模式（sandbox 构建全挂、skill 安装失败）说明 Moltis 的预构建镜像和 skill 安装流程需要更强的回归测试。
- Flaky test（#1193）在满负载下触发，侧面反映项目测试体量庞大（7017 个测试用例），说明测试覆盖充分，但隔离性有待优化。

---

## 8. 待处理积压

今日无长期未响应（7 天以上无更新）的 Issue 或 PR，但在相对短时间内需关注：

- **[#1190 Add durable CalDAV and channel history connectors](https://github.com/moltis-org/moltis/pull/1190)** — 已开放 3 天（8/11 创建），仍无合并迹象。这是大型功能 PR，涉及面广，建议明确评审进度，避免长时间悬置导致与后续提交冲突。
- **[#1193 Flaky test](https://github.com/moltis-org/moltis/issues/1193)** — 新报告，尚无回应。建议标记为 `flaky-test` 并排入测试稳定性修复队列；若短期无法修复，可考虑通过 `#[ignore]` 或并行测试分组缓解影响。

---

**总体健康度评估**：提交活跃、修复方向明确、无严重回归或用户投诉；主要风险在于 4 条 PR 全部待合并，部分修复已阻断关键路径（sandbox 构建，#1191）。建议优先合并 #1191/#1192 的迁移修复，随后安排 #1190 的评审窗口。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 — 2026-08-14

> 数据來源：github.com/agentscope-ai/QwenPaw（以下链接均为该仓库）

---

## 1. 今日速览

过去 24 小时项目保持高活跃度：共更新 42 条 Issue（新开/活跃 25 条、关闭 17 条）与 50 条 PR（待合并 31 条、已合并/关闭 19 条），并正式发布 **v2.1.0** 与 **v2.1.0-beta.5** 两个版本。v2.1.0 引入全新的 QwenPaw OS Shell 窗口管理能力，标志着产品从对话工具向桌面级智能体工作台演进。社区侧最集中的反馈是「多步任务执行中途无提示停止」(#6921) 与「插件安全/鉴权问题」(#6992/#6916)，前者直接影响核心体验，后者涉及平台安全边界，建议维护团队优先关注。整体来看，项目迭代速度快、社区参与度高，但安全和稳定性议题已成为当前阶段不可忽视的焦点。

---

## 2. 版本发布

### v2.1.0（正式版）
https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.0

**核心新增：QwenPaw OS Shell**
- 支持以可移动、可调整大小的窗口打开应用，配套启动器（launcher）、任务栏、通知中心与布局保存功能（PR #6645）
- 已安装应用与市场（marketplace）应用在 App Center 中共享统一目录

**破坏性变更 / 迁移注意**：本轮更新涉及 UI 框架层较大变动，若使用自定义前端嵌入或依赖旧版窗口布局的脚本，建议先在小范围验证再全量升级。目前未发现数据迁移相关的硬性要求，但长时间运行的任务进程建议在升级前保存状态。

### v2.1.0-beta.5（预发布）
https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.0-beta.5

- `fix(chats): handle dict-like model responses` — 修复模型返回 dict 类型响应时聊天处理异常的问题（PR #6816，@RerankerGuo）
- `fix(memory): simplify long-term memory guidance` — 简化长期记忆系统提示词，降低理解成本（PR #6942，@jinliyl）
- `docs(website): make the Files workspace ...` — 网站文档中 Files 工作区相关改进

---

## 3. 项目进展

今日合并/关闭的 PR 中，以下几项对项目健康度有实质提升：

### 会话与上下文稳定性
- **PR #6636（已合并）**：`fix(chats): add pagination to chat history and enable GZip compression`
  https://github.com/agentscope-ai/QwenPaw/pull/6636
  修复长聊天记录（1MB+）单次返回导致的 30 秒超时问题，增加分页与 GZip 压缩。对慢网络用户与长会话场景有明显收益。

- **PR #6652（已合并）**：`fix(mission): enforce max_iterations server-side in MissionGate`
  https://github.com/agentscope-ai/QwenPaw/pull/6652
  修复 Mission 模式下 `max_iterations` 未在服务端强制执行的问题——此前控制器 LLM 可无限派发子 agent，导致实际产生 54+ 个子会话（配置为 20），直至账户余额耗尽。此修复对成本控制至关重要。

- **PR #6884（已合并）**：`fix: make Auto-Dream integration resilient`（首次贡献者）
  https://github.com/agentscope-ai/QwenPaw/pull/6884
  让 Auto-Dream 在 LLM 输出畸形时保持韧性，单个失败单元不再拖垮整个任务。

### 依赖与工程化
- **PR #6387（已合并）**：`feat(channels): install optional dependencies on demand`
  https://github.com/agentscope-ai/QwenPaw/pull/6387
  将 Channel 的 SDK 依赖从默认安装中剥离，改为按需安装。降低默认安装体积与依赖冲突风险。

### 版本管理
- **PR #6989（已合并）**：`chore: update release notes for v2.1.0`
  https://github.com/agentscope-ai/QwenPaw/pull/6989

**整体判断**：随着 v2.1.0 正式版的发布、长会话性能修复与 Mission 模式成本防护落地，项目在「能用」向「好用」过渡的关键路径上又推进了一步。

---

## 4. 社区热点

### 🔥 最热 Issue：#6921 — 多步任务无提示中断，需用户说「继续」才推进（6 评论）
https://github.com/agentscope-ai/QwenPaw/issues/6921

> 执行多步骤任务时，模型输出类似 "Now 2.1, 3.1, 3.2. Let me do all three." 后便停止，无任何视觉提示。用户必须手动说"继续"才会恢复任务。

**分析**：这是当前最集中的体验问题，且并非个例——同一模式下"规划但未执行"的问题多次出现。从描述看，可能涉及流式输出终止、Tool Call 未触发或 Reasoning 链路截断。该问题直接影响 agent 的自动化闭环能力，建议优先定位。

### #6811 — OpenAI Responses 延续摘要忽略 `disable_thinking`，60 秒取消被误报为格式错误（5 评论）
https://github.com/agentscope-ai/QwenPaw/issues/6811

上下文滚动（Scroll eviction）时，同步请求主模型生成延续摘要，因 reasoning 模型思考过程阻塞主对话 60 秒，且取消超时被误判为 malformed output。涉及 reasoning 模型与上下文压缩的兼容性问题。

### #6853 — `prompts.py` 对 agent 说谎：Dream 写的是 digest/ 而非 MEMORY.md（5 评论）
https://github.com/agentscope-ai/QwenPaw/issues/6853

实际 ReMe dream 管线的 4 个步骤（summarize → extract → integrate...）从未实现将 digest 同步至 MEMORY.md，但提示词中声称已自动完成。**文档与实现不符会严重损害用户对记忆系统的信任**。

### #6973 — 是否支持阿里云百炼 token plan？（5 评论）
https://github.com/agentscope-ai/QwenPaw/issues/6973

国内用户对阿里云百炼 token 套餐的接入需求明确，涉及成本结构和供应商绑定问题。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 严重 — 安全与持久化风险
- **#6992 / #6993（已关闭）**：[Bug] 重大架构漏洞与安全问题：端口暴露、API 无鉴权
  https://github.com/agentscope-ai/QwenPaw/issues/6992  
  https://github.com/agentscope-ai/QwenPaw/issues/6993

  > QwenPaw 服务以 0.0.0.0 暴露公网 8088 端口，插件安装 API 无鉴权且插件具备任意命令执行能力；攻击者可投递恶意插件、植入 SSH 后门 + 隐藏用户 + C2 心跳实现持久化。

  两条同内容 issue 均被标记关闭（一为 invalid，一为 bug）。无论关闭原因如何，**公网端口暴露 + API 无鉴权**的风险模式值得官方给出正式说明与防护建议。

### 🟠 高 — 核心体验受损
- **#6921（开放）**：多步任务无提示中断（详见社区热点）
  https://github.com/agentscope-ai/QwenPaw/issues/6921
  **状态**：尚无对应 fix PR

- **#6768（已关闭）**：多步任务完成后进入无限循环，会话阻塞数小时
  https://github.com/agentscope-ai/QwenPaw/issues/6768
  用户消息已收到但长时间不处理，定位为顺序任务执行中的状态机问题。

### 🟡 中 — 功能缺陷与兼容性问题
- **#6951（开放）**：Scroll 压缩后重新进入会话，压缩前聊天记录不可见，仅显示内部 eviction index
  https://github.com/agentscope-ai/QwenPaw/issues/6951
  原始记录仍在 `history.db`，但 UI 只展示压缩后的 AgentState.context。上下文压缩不应破坏用户可见的完整 transcript。
  **相关 PR**：#6975 `fix(console): reset context-usage ring after compact` 可部分改善，但未解决 transcript 可见性问题。

- **#7008（开放）**：Anthropic 模型端 "input sensitive image" 误审核导致长历史会话中断（错误码 1026）
  https://github.com/agentscope-ai/QwenPaw/issues/7008
  61 条历史消息 + 多张图片的历史会话被模型端安全审核拦截，但用户人工复核不存在敏感内容。属于模型端/平台方误判，需在客户端增加容错机制。

- **#6847（开放）**：同样的任务和模型，QwenPaw 经常被杀软拦截并强制关停进程
  https://github.com/agentscope-ai/QwenPaw/issues/6847
  Windows 用户反复遭遇杀软误报，附有截图。对桌面端普及有负面影响。

### 🟢 低 — 轻量问题
- **#6955（开放）**：v2.0.1 pip 安装版概率性启动崩溃（Windows asyncio 相关 traceback）
  https://github.com/agentscope-ai/QwenPaw/issues/6955

- **#7005（开放）**：启用 Shabox 后 UV 无法写入 `~/.cache/uv`，需手动在 policy.yaml 添加写权限
  https://github.com/agentscope-ai/QwenPaw/issues/7005

- **#7007（开放）**：Windows Desktop TUI 启动失败，`transport: Connection closed`（打包后的 qwenpaw.exe 拒绝 `-m qwenpaw acp` 参数）
  https://github.com/agentscope-ai/QwenPaw/issues/7007

---

## 6. 功能请求与路线图信号

| 功能请求 | 链接 | 信号强度 |
|---|---|---|
| 支持阿里云百炼 token plan | [Issue #6973](https://github.com/agentscope-ai/QwenPaw/issues/6973) | 高。国内用户成本敏感，多家竞品已支持 |
| 可嵌入的 Chat 子页面（无侧边栏/头部）+ URL 带 API Key 鉴权 | [Issue #6970](https://github.com/agentscope-ai/QwenPaw/issues/6970) | 高。面向嵌入式与企业集成场景，配合 PR #7004（spawn 父子链接持久化）可构成完整的宿主化方案 |
| 服务器端部署 + 轻量代理客户端（避免笨重桌面端） | [Issue #7002](https://github.com/agentscope-ai/QwenPaw/issues/7002) | 中。用户希望服务器端运行 agent、本地安装代理客户端复用桌面控制能力 |
| ViBo 记忆方案：加密记忆 + 每请求降低 97.5% token | [Issue #7003](https://github.com/agentscope-ai/QwenPaw/issues/7003) | 中。外部方案提案，与 5 月 ReMeLight 路线图可对照 |
| 智能模式写入沙盘之外失败，期望正常执行或明确边界 | [Issue #6945](https://github.com/agentscope-ai/QwenPaw/issues/6945) | 中。沙盘/审批机制的权限模型需更清晰 |

**已被 PR 覆盖的功能方向**：
- **PR #7004**：将 spawn 父子会话关联持久化到 ChatSpec.meta（含 subagent 工具/技能限制），为子 agent 管理提供完整链路
- **PR #6976**：session-scoped 多项目目录（首个目录为主目录，其余为附加），满足多项目并行开发需求
- **PR #6960**：从 Codex/Qoder 等其他 agent 导入配置/技能/插件/项目的迁移流程（Pawport）
- **PR #6995**：在 shell 子进程注入 `QWENPAW_CHANNEL` 环境变量，便于外部脚本感知渠道来源

---

## 7. 用户反馈摘要

**最集中的痛点**：多步任务执行不闭环。用户反映模型经常「规划完就停下」，需要人为催促才继续（#6921）。这不是偶发现象，而是当前版本中影响任务自动化的系统性体验问题。

**记忆与上下文方面**：#6951 的用户指出压缩后 UI 看不到完整对话记录，「压缩应只影响模型输入，不应破坏用户可见的完整 transcript」。这说明长期记忆/上下文压缩机制需要重新审视**用户可见性**这一维度。

**Windows 体验**：#6847 杀软误报并非个例，频繁的强制关停已导致用户准备转向同类竞品（用户明确表示"WorkBuddy 不会"）。这提示打包签名和进程行为需要优化以降低安全软件误判率。

**正向反馈**：#6585 用户开头即表示"非常不错的项目"，同时对 UI 动态数字显示提出改进建议（已关闭，说明已有处理方案）；#7003 外部用户主动提案记忆优化方案，说明项目在 agent 框架领域已获得足够的关注度与生态号召力。

---

## 8. 待处理积压

以下为长期未闭环或需维护者特别关注的事项：

### 优先关注
- **[Issue #6047]**（2026-07-13 创建，已关闭）：升级 2.0.0 后新聊天重新打开旧会话，`chats.json` 排序与 session index 同步问题
  https://github.com/agentscope-ai/QwenPaw/issues/6047

- **[Issue #6100]**（2026-07-14 创建，已关闭）：升级后内置 agent 的 `agent.json` 被覆盖为空配置，`active_model` 等关键字段丢失
  https://github.com/agentscope-ai/QwenPaw/issues/6100

  ⚠️ 以上两条均为升级数据一致性问题，虽然已关闭，但若缺少持久化的修复方案，后续版本仍有可能复现相同模式。

### 长期开放的重要 PR
- **[PR #6302]**（2026-07-21 创建，开放中）：`feat: unify provider discovery, model metadata, routing, and agent controls`
  https://github.com/agentscope-ai/QwenPaw/pull/6302
  这是一个大型架构级 PR，涉及 provider 目录驱动、运行时模型发现、能力感知路由与回退支持。已开放超三周，仍在 review 阶段。若合入将对自建模型接入体验产生根本性改善，建议维护者给出明确时间表或阶段性拆解计划。

- **[PR #6715]**（2026-08-05 创建，Under Review）：`feat(onebot): localize inbound media before agent processing`
  https://github.com/agentscope-ai/QwenPaw/pull/6715
  将 OneBot 入站图片/音视频/文件先本地化再交给 agent，并解决入站/出站大小限制分离与有界流式下载问题。QQ 生态用户等待中。

---

*本日报由 AI 开源项目分析师生成，数据采集自 GitHub API 公开数据（截至 2026-08-14）。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-14

> 数据来源：github.com/zeroclaw-labs/zeroclaw 过去 24 小时 Issue/PR 更新

## 今日速览

过去 24 小时项目保持极高活跃度：50 条 Issue 更新（新开/活跃 37 条、关闭 13 条）与 50 条 PR 更新（待合并 41 条、合并/关闭 9 条），但无新版本发布。讨论重心集中在安全与权限模型（shell 策略、凭证链验证、仪表盘资产隔离）、会话持久化架构归属，以及长期目标执行模式（Goal mode）等横跨 v0.9.0 的架构级议题。今日合入的 PR 以安全修复和 CI 基建优化为主，含 1 项 P1 安全修复（gateway 仪表盘路径逃逸）和 1 项核心运行时修复（会话队列驱逐序列化）。需关注的风险信号是：41 条 PR 待合并中包括多条 XL 尺寸、审查周期超过 3 周的深度分支，维护者决策队列（#8692）积压明显，可能成为 v0.9.0 发布路径上的瓶颈。

## 版本发布

无。

---

## 项目进展

### 今日合入/关闭的关键 PR

**安全加固**

- [PR #9969](zeroclaw-labs/zeroclaw PR #9969) — **fix(gateway): contain filesystem dashboard assets**（P1, 已合并）  
  修复仪表盘静态资源路径解析漏洞：在读取前对文件系统路径做 canonicalize，并在解析时校验路径始终位于配置的 distribution root 内，阻断符号链接逃逸。这是今日最重要的安全修复。

- [PR #9709](zeroclaw-labs/zeroclaw PR #9709) — **fix(tts): clean up Edge TTS temp output on every error path**（已合并）  
  补齐 Edge TTS 临时音频文件在所有错误路径下的清理逻辑，消除 /tmp 下的文件泄漏。

**核心运行时稳定性**

- [PR #9674](zeroclaw-labs/zeroclaw PR #9674) — **fix(infra): preserve session queue serialization during eviction**（P1, 已合并）  
  在会话槽位映射仍处于锁定时注册会话请求，避免空闲驱逐在 pending 计数可见前移除已选槽位，修复了会话队列序列化竞争条件（与 #9600 会话持久化合同相关）。

**配置与 CLI**

- [PR #9705](zeroclaw-labs/zeroclaw PR #9705) — **fix(config): allow config set on existing hyphenated cron aliases**（已合并）  
  修复 `zeroclaw config set cron.<alias>…` 无法处理含连字符的 cron 别名配置的问题，与 TOML 加载器和调度器行为对齐。

- [PR #8546](zeroclaw-labs/zeroclaw PR #8546) — **fix(cli): localize status fragments**（已关闭）  
  将 `zeroclaw status` 的 agent 风险摘要片段接入 Fluent i18n 体系，补齐 Web UI 可用性文案的本地化。

**文档与工程质量**

- [PR #9639](zeroclaw-labs/zeroclaw PR #9639) — **docs(architecture): document provider routing lifecycle**（已合并）  
  新增来源可溯的 provider 路由生命周期文档，覆盖 profile 构建、hint 路由、重试/回退顺序、冷却、流式恢复、no-replay 边界及请求/实际服务归因，弥合了架构文档与实现之间的缺口。

- [PR #9932](zeroclaw-labs/zeroclaw PR #9932) — **ci(codeql): drop rust/hard-coded-cryptographic-value**（已合并）  
  在 CodeQL 配置中排除 `rust/hard-coded-cryptographic-value` 查询——该查询在 `cfg(test)` 下产生 27 个全误报的 "critical" 告警，清除 CI 噪音。

- [PR #9980](zeroclaw-labs/zeroclaw PR #9980) — **ci(docker): sticky-disk layer cache for PR image builds on Blacksmith**（已合并）  
  为 Blacksmith runner 上最重的 Docker 层缓存（78 runs/两周）引入本地 sticky-disk 缓存，缓解 GitHub 10GB/repo 缓存上限导致的抖动。

### 小结

今日合入内容整体提升项目健康度：堵住了一个 P1 安全漏洞，修复了一个核心运行时竞态，清理了 CI 误报和临时文件泄漏，并补齐了 provider 路由生命周期文档。这些工作与 v0.9.0 的 auth/security/gateway 主线（见 Tracker #7432）一致，但距离版本发布仍有相当距离——大量 XL PR 和 RFC 尚待决策。

---

## 社区热点

> PR 数据中评论数字段缺失，以下以 Issue 讨论热度为准。

**讨论最活跃的 Issues**

1. **[Issue #8303 — RFC: Goal mode v1, bounded foreground Matrix work](zeroclaw-labs/zeroclaw Issue #8303)**（20 条评论｜👍 1）  
   关于跨多轮执行有界用户目标的 RFC，是目前讨论度最高的议题。核心争议在于首版范围：作者明确主张**不要**把重启移交、全渠道接纳、Web 与异步子任务塞进第一个交付，但是否应包含 Matrix 前台工作仍在拉扯。该 issue 带 `needs-maintainer-review` 和 `risk:high`，预计还需多轮评审。

2. **[Issue #7155 — RFC: 高危 shell 命令按执行确认 + allow/ask/deny 策略](zeroclaw-labs/zeroclaw Issue #7155)**（18 条评论｜P1, risk:high）  
   经历了三版修订（8/5 更新），维护者已确认将规范范围收窄到“shell 策略契约”。社区对 Claude Code 式命令策略（allow/ask/deny）的诉求强烈，但 scope 控制和与其他权限机制（如 SOP）的接口仍需澄清。这是当前权限模型最关键的一条线。

3. **[Issue #8692 — Tracker: 维护者决策队列](zeroclaw-labs/zeroclaw Issue #8692)**（13 条评论）  
   这是个 meta-tracker，用于排队所有需要维护者拍板的 RFC/设计/发布策略问题。该 tracker 本身积压了大量条目（含 #7155、#8303、#9487、#9598 等），直接反映出项目架构决策的瓶颈在维护者侧。

4. **[Issue #6850 — RFC: 解耦 memory 生命周期策略与存储后端](zeroclaw-labs/zeroclaw Issue #6850)**（12 条评论｜risk:high）  
   主张 Memory trait 只负责存储操作，整合/治理等生命周期决策交由更高层策略处理。讨论已趋向收敛但状态为 `needs-author-action`，等待作者按 review 意见更新。

5. **[Issue #9328 — Bug: verifiable-intent 不验证凭证链](zeroclaw-labs/zeroclaw Issue #9328)**（12 条评论｜P2, risk:high, in-progress）  
   安全漏洞讨论：`evaluate_constraints` 直接使用来自调用方的 `fulfillment` 对象做 L2 约束检查，而参考实现只对密码学验证过的值执行约束检查。社区对 VI 信任模型表示了明确担忧，已有配套 PR（#9942）但仅覆盖配置可见性问题。

### 背后的诉求

社区关注点高度集中在三个方向：**安全边界细化**（shell 策略、凭证验证、资产隔离）、**架构抽象解耦**（memory 生命周期、会话持久化合同、slash-command 注册表统一）、**务实成本与可用性**（OpenRouter 缓存、Telegram 端可用性、browser 工具能力扩充）。其中安全类讨论的参与度与优先级标签（P1/P2, risk:high）显著高于其他类别。

---

## Bug 与稳定性

### 严重 / 高优先级

- **[Issue #9389](zeroclaw-labs/zeroclaw Issue #9389) — [P1, 已关闭] 未认证 POST /api/pair 将锁定状态绑定到攻击者可控的 header**  
  安全审计中发现的认证旁路风险：配对接口的锁存逻辑使用攻击者可控 header 进行计数，未经认证即可触发。该 issue 已关闭，修复应已合入。

- **[Issue #9929](zeroclaw-labs/zeroclaw Issue #9929) — [P1, OPEN, blocked] 无头 SOP 步骤 turn 被赋予 session path 但从未持久化**  
  `drive_headless_run` 为每个 SOP 步骤构造 `session_path`，但从不写入 session store，导致无头执行轨迹丢失。Severity S2（降级行为），状态 `blocked` + `accepted`，仍无对应修复 PR。

- **[Issue #9328](zeroclaw-labs/zeroclaw Issue #9328) — [P2, OPEN, in-progress] verifiable-intent 约束检查不验证凭证链**  
  安全模型缺陷：约束值（`fulfillment`）和 L2 约束均来自调用方，未经过密码学链验证。风险等级 high，`status:accepted` + `in-progress`，配套 PR #9942 仅解决“能力被扣留时无日志可查”的配置可见性问题，核心修复未出现。

### 中低优先级

- **[Issue #9951](zeroclaw-labs/zeroclaw Issue #9951) — [P2, 已关闭] WeChat 通道代码及 51 个 lib 单元测试从未在 CI 编译/执行**  
  `channel-wechat` feature 不在任何 CI feature matrix 中，相关代码长期无编译保障。Severity S3，测试盲区虽已关闭，但需要确认 CI 是否已覆盖该 feature。

- **[Issue #9366](zeroclaw-labs/zeroclaw Issue #9366) — [P2, 已关闭] WhatsApp Web 接收 `approval_timeout_secs` 但从不读取**  
  配置项在两个 WhatsApp 传输上都验证通过，但仅在一个传输上生效。已作为独立 bug 拆分并关闭。

### 临时文件清理（低严重度，今日已修复）

- [Issue #9706](zeroclaw-labs/zeroclaw Issue #9706) — Edge TTS 临时文件在部分错误路径未清理，对应 PR #9709 今日合入。
- [Issue #9710](zeroclaw-labs/zeroclaw Issue #9710) — macOS 桌面截图临时文件在两条提前返回路径上未清理，已关闭。

---

## 功能请求与路线图信号

### 已被接受 / 处于实施管道中的功能（`status:accepted` 或 `in-progress`）

- **[Issue #9895 — Telegram /model 选择器分组分页](zeroclaw-labs/zeroclaw Issue #9895)**（已接受）  
  将文本式 /model 命令升级为 provider 分组 + 分页的 Telegram inline keyboard，解决多 provider 配置下手机端选模型难的问题。

- **[Issue #9945 — browser 工具扩充至完整 agent-browser 命令集](zeroclaw-labs/zeroclaw Issue #9945)**（已接受，blocked）  
  当前 browser 工具只暴露 16/100+ 个命令，iframe、JS 对话框、标签页和核心表单控件不可达。升级依赖分阶段接口设计，进入 blocked 状态。

- **[Issue #9887 — 超大图片降采样而非直接丢弃](zeroclaw-labs/zeroclaw Issue #9887)**（已接受，blocked）  
  将超过 `max_image_size_mb` 的图片降采样后送入模型，并允许配置 `0` 完全禁用多模态大小限制。对合法大图更友好，同时保留对恶意负载的拒绝路径。

### 值得关注的 RFC（新方向 / 架构变化）

- **[Issue #9487 — Runtime 持有会话与传输适配器](zeroclaw-labs/zeroclaw Issue #9487)** — 与 #9488/#9600 构成会话持久化合同重组，影响面大。
- **[Issue #9825 — 区块链地址的“可发布安全例外”](zeroclaw-labs/zeroclaw Issue #9825)** — 解决外发泄露检测器把公开地址误判为高熵密钥导致支付链接不可用的问题。
- **[Issue #9810 — 加载 Agent Plugins 1.0 技能/MCP 包](zeroclaw-labs/zeroclaw Issue #9810)** — 引入 vendor-neutral 插件标准，扩展生态。
- **[Issue #9880 — 用类型化的 peer policy 替代 Vec\<String\> 字符串语法](zeroclaw-labs/zeroclaw Issue #9880)** — 消除 `!` 前缀、`*` 通配符等手写语法在各自消费方的重复解析。

### 对应开放 PR（若合入将构成下一版本能力）

- [PR #9109](zeroclaw-labs/zeroclaw PR #9109) — 原生 Hailo-Ollama provider 支持（端侧硬件路线）。
- [PR #9420](zeroclaw-labs/zeroclaw PR #9420) — Anthropic 存储型 OAuth profile 支持（企业级认证）。
- [PR #9986](zeroclaw-labs/zeroclaw PR #9986) — `agents export` 便携 bundle，支持跨实例迁移 agent。
- [PR #9713](zeroclaw-labs/zeroclaw PR #9713) — history-trim 事件暴露 token 计量，提升 token 消耗透明度。

---

## 用户反馈摘要

- **成本敏感度高**：[Issue #9631](zeroclaw-labs/zeroclaw Issue #9631) 的提交者指出走 OpenRouter 时同一会话内每次请求都重放 system prompt 和工具 schema，费用虚高；期望通过稳定 `session_id` 触发 prompt 缓存。这是典型的真实部署成本痛点。

- **移动端可用性不足**：[Issue #9895](zeroclaw-labs/zeroclaw Issue #9895) 请求者明确说“手机上操作仍然笨重”——大量 route 配置下文本式 /model 无法快速切换，需要分组分页选择器。项目早期文本命令优先的策略在移动端遇到瓶颈。

- **安全机制过度误伤**：[Issue #9825](zeroclaw-labs/zeroclaw Issue #9825) 反馈泄露检测器将链上公开地址识别为高熵密钥并打码，导致支付请求 URL 不可投递。用户认可检测器“按设计工作”，但要求为公开标识符建立可发布白名单例外，属于安全策略精细化诉求。

- **信任模型担忧**：[Issue #9328](zeroclaw-labs/zeroclaw Issue #9328) 的讨论者直接质疑 vi_verify 的约束评估可以被调用方构造数据绕过，认为参考实现的作风是只对“密码学链已验证”的值做约束检查。这不仅是 bug，更是对 VI 子系统信任根基的拷问。

- **开发者体验阻点**：[Issue #5907](zeroclaw-labs/zeroclaw Issue #5907)（LSP 支持）自 4 月以来一直挂着，用户强调 LSP 能“减少幻觉，尤其是本地模型”，希望补齐与 Claude Code / OpenCode 对齐的能力；[Issue #9951](zeroclaw-labs/zeroclaw Issue #9951) 指出 WeChat 模块测试从未进 CI，属于对工程保障缺失的抱怨。

- **架构方向期待收敛**：[Issue #8303](zeroclaw-labs/zeroclaw Issue #8303) 评论区显示社区认可 goal mode 的方向，但强烈建议首个版本做小做专（有界前台任务），避免把重启移交、Web、异步子任务等全塞进来。多个评论者偏好“先解决核心控制面，再逐步扩展”。

---

## 待处理积压

### 长时间未合并的大型 PR（>3 周，XL 尺寸）

- [PR #9109](zeroclaw-labs/zeroclaw PR #9109) — Hailo-Ollama 支持（7/17 创建，XL，`needs-maintainer-review` 无标注）
- [PR #9203](zeroclaw-labs/zeroclaw PR #9203) — SOP 认证 HTTP fan-in（7/20 创建，XL，distinguished contributor）
- [PR #9013](zeroclaw-labs/zeroclaw PR #9013) — TodoWrite 显示配置从 daemon 迁往 zerocode（7/12 创建，XL，破坏性重构）
- [PR #9420](zeroclaw-labs/zeroclaw PR #9420) — Anthropic 存储型 OAuth profiles（7/26 创建，XL，trusted contributor，`needs-author-action`）
- [PR #9713](zeroclaw-labs/zeroclaw PR #9713) — history-trim token 计量（8/3 创建，XL，principal contributor，`needs-author-action`）

### 长期未决的重要 Issue

- [Issue #7155](zeroclaw-labs/zeroclaw Issue #7155)（P1, risk:high）— 高危 shell 命令确认层级 RFC，已修订 3 版，等待维护者对规范范围的最终裁决。
- [Issue #6850](zeroclaw-labs/zeroclaw Issue #6850)（P2, risk:high）— memory 生命周期与存储解耦 RFC，12 条评论后停在 `needs-author-action`，作者超过 3 周未更新。
- [Issue #5907](zeroclaw-labs/zeroclaw Issue #5907)（P2, risk:high）— LSP 支持功能请求，4/19 创建至今无实质推进，是最老的开放 enhancement 之一。
- [Issue #9631](zeroclaw-labs/zeroclaw Issue #9631)（P2, risk:high, blocked）— OpenRouter `session_id` 透传，依赖上游行为确认，无维护者响应记录。

### 维护者需关注的系统性问题

[Issue #8692](zeroclaw-labs/zeroclaw Issue #8692) 维护者决策队列中，`needs-maintainer-review` 的 RFC 已形成清晰积压（#7155、#8303、#9487、#9598、#9810、#9880、#9825 等）。建议维护者优先排定 #7155（P1 shell 策略）与 #8303（goal mode 范围）两个高热度议题的决策时间表，其次是 #9487 会话所有权与 #9598 SOP 权限契约——它们均处于 v0.9.0 关键路径上，且相互之间存在依赖关系（SOP 契约影响权限模型，会话所有权影响传输层改造）。

---

*本日报基于 2026-08-14 GitHub 数据自动生成，所有链接均指向 zeroclaw-labs/zeroclaw 仓库原始内容。*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*