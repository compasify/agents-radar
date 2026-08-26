# OpenClaw 生态日报 2026-08-26

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-08-26 00:00 UTC

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

## OpenClaw 项目动态日报 — 2026-08-26

> 数据来源：[github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)  
> 统计窗口：过去 24 小时（约 2026-08-25 至 2026-08-26）

---

### 1. 今日速览

- 过去 24 小时共有 **500 条 Issue 更新**（新开/活跃 445，已关闭 55）和 **500 条 PR 更新**（待合并 273，已合并/关闭 227）。Issue 关闭率仅 11%，PR 合并/关闭率约 45%，说明社区反馈和提交非常活跃，但维护审查与修复落地存在一定滞后。
- 今日**无新版本发布**，项目仍处于 2026.8.1 beta 验证周期。beta 反馈聚合帖 `#125626` 以 18 条评论成为当前社区最热话题。
- 可靠性问题仍是最大隐忧：多个 P0/P1 级 Bug 集中在 SQLite 损坏、消息丢失、崩溃循环和进程泄漏，且部分在 beta 环境中稳定复现。
- 功能请求方向集中于**配置灵活性**（YAML、per-agent 控制）、**记忆/会话数据可编程性**（SQLite seams、OpenRouter 成本暴露）以及**开发者体验**（子代理优雅超时、Gateway 断路器）。
- 项目今日合并/关闭了多个 Control UI 重构、安全策略确认机制和 Gateway 修复 PR，显示 UI/安全方向有实质性推进。

---

### 2. 版本发布

本期无新版本发布（Releases 为空）。当前验证中的 beta 版本为 [v2026.8.1-beta.3](https://github.com/openclaw/openclaw/releases/tag/v2026.8.1-beta.3)。

---

### 3. 项目进展

过去 24 小时合并/关闭的重要 PR 主要集中在 **Control UI 体验、安全策略、Gateway 消息路由、Skills 加载与进程管理**：

- **Control UI 大规模重构**
  - [PR #124301](https://github.com/openclaw/openclaw/pull/124301)：将 composer 重构为多行输入面，统一了布局与状态机。
  - [PR #127824](https://github.com/openclaw/openclaw/pull/127824)：重新设计 composer 斜杠命令与技能调用，改善了键盘选择与视觉一致性。
  - [PR #120900](https://github.com/openclaw/openclaw/pull/120900) / [PR #116489](https://github.com/openclaw/openclaw/pull/116489)：在 Control UI 与 CLI 中引入安装策略警告的显式确认机制，加强插件/技能安装的安全边界。
- **Gateway 可靠性修复**
  - [PR #126424](https://github.com/openclaw/openclaw/pull/126424)：修复多 agent 场景下 conversation delivery 脱离 agent 绑定的问题，避免消息路由越权。
  - [PR #117567](https://github.com/openclaw/openclaw/pull/117567)：远程 Gateway 不可用时 fail closed，不再返回误导性的客户端本地 Skill/Hook 清单。
- **Skills 与脚本完善**
  - [PR #129662](https://github.com/openclaw/openclaw/pull/129662)：安全加载受信任 Bun/Nix 包的硬链接 `SKILL.md`，修复误报 hostile 的问题。
  - [PR #123975](https://github.com/openclaw/openclaw/pull/123975)：`tsgo` 包装器在超时或信号时清理进程树，避免编译器进程残留。
- **模型/OAuth 修复**
  - [PR #125471](https://github.com/openclaw/openclaw/pull/125471)：保证 Claude CLI OAuth 在 Gateway 重启后不丢失 refresh ownership，并修复 Control UI 中矛盾的空 `anthropic: missing` 显示。

整体来看，项目在 **UI 现代化、安全策略落地、Gateway 消息路由** 三个方向迈进了可见的一步；但核心稳定性 Bug（见第 5 节）尚未看到大批量修复 PR 合并。

---

### 4. 社区热点

以下 Issues 在过去 24 小时讨论最活跃，反映了社区当前最集中的诉求：

| Issue | 标题 | 评论数 | 核心诉求 |
|---|---|---|---|
| [#125626](https://github.com/openclaw/openclaw/issues/125626) | OpenClaw 2026.8.1 beta feedback | 18 | 用户集中汇报 beta 问题和期望修复，是官方收集反馈的聚合帖 |
| [#80319](https://github.com/openclaw/openclaw/issues/80319) | QA tool-defaults suite conflates Codex-native tools with OpenClaw dynamic tool parity | 17 | 测试基建误导：QA 套件无法区分 Codex 原生工具与 OpenClaw 动态工具，导致误报 tool dropout |
| [#79902](https://github.com/openclaw/openclaw/issues/79902) | Add companion-friendly SQLite transcript/session seams on top of database-first runtime | 14 | 高级用户希望在数据库优先运行时之上获得可编程的 SQLite 会话/transcript 接口 |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) | Subagent completion delivery can be lost on timeout/drain/orphan prune | 13 | 子代理完成消息在 busy-lane、超时、重启时可能永久丢失，影响任务可靠性 |
| [#67413](https://github.com/openclaw/openclaw/issues/67413) | Feature Request: Per-agent dreaming configuration | 9 | 用户要求按 agent 控制 memory dreaming，避免所有工作区同时触发导致 OOM |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | OpenClaw leaks unreaped hook/tool child processes | 9 | 子进程长期泄漏成 zombie，导致运行时性能退化 |
| [#45758](https://github.com/openclaw/openclaw/issues/45758) | Support YAML as config file format | 9 | 用户希望用 YAML 替代 JSON5，提高可读性，贴合 DevOps 习惯 |
| [#92633](https://github.com/openclaw/openclaw/issues/92633) | memory_search corpus=all times out | 9 | 搜索所有语料超时，但单独搜索均成功，影响记忆检索可用性 |
| [#16670](https://github.com/openclaw/openclaw/issues/16670) | Onboarding Wizard should include Memory/Embedding setup as a mandatory step | 9 | 新手引导未配置 embedding provider，导致 memory_search 开箱即用失败 |
| [#108379](https://github.com/openclaw/openclaw/issues/108379) | Duplicate assistant generation attempts for Xiaomi MiMo | 9 | MiMo provider 重复生成导致叙事文本重复后 abort，影响特定第三方模型 |

**分析**：社区热点呈现“可靠性焦虑”与“可配置性需求”并行的特征。用户对消息丢失、进程泄漏、记忆搜索失败等稳定性问题极为敏感；同时对配置格式、按 agent 控制、SQLite 接口等可编程/可定制能力有明确期待。

---

### 5. Bug 与稳定性

以下为当前活跃且影响严重的 Bug，按严重程度排列。标注“已有修复在途”的表示该 Issue 已关联开放中的 fix PR（`clawsweeper:linked-pr-open`）。

#### P0（数据损坏 / 系统瘫痪）

- [**#126821**](https://github.com/openclaw/openclaw/issues/126821) — **SQLite corruption recurs on pristine rebuilt DBs within 15–24h（2026.8.1-beta.2, WSL2）**。5 天内发生 5 次，包括“paralyzed gateway”模式（拒绝所有服务但进程不退出）。**暂无 fix PR**。

#### P1（消息丢失 / 崩溃循环 / 核心功能不可用）

- [**#67777**](https://github.com/openclaw/openclaw/issues/67777) — 子代理完成投递在 direct-announce timeout、drain、orphan prune 时可能丢失。**暂无 fix PR**。
- [**#127710**](https://github.com/openclaw/openclaw/issues/127710) — prepared-model-runtime 在瞬态 generation churn 下 fail-closed：一次指纹漂移永久楔住 Gateway，owner-commit race 静默丢消息。**暂无 fix PR**。
- [**#126246**](https://github.com/openclaw/openclaw/issues/126246) — Telegram 持久化投递卡在 `send_attempt_started`，重启后消息丢失。**暂无 fix PR**。
- [**#97616**](https://github.com/openclaw/openclaw/issues/97616) — hook/tool 子进程未收割，zombie 累积导致运行时退化。**暂无 fix PR**。
- [**#92633**](https://github.com/openclaw/openclaw/issues/92633) — `memory_search corpus=all` 15s 超时，而各单独 corpus 均成功。**暂无 fix PR**。
- [**#108379**](https://github.com/openclaw/openclaw/issues/108379) — Xiaomi MiMo provider 重复生成尝试，abort 前产生重复叙述文本。**暂无 fix PR**。
- [**#128067**](https://github.com/openclaw/openclaw/issues/128067) — beta.7 现场报告：6 类可靠性缺陷类（persistence、delivery、restart-recovery）+ 3 项次要问题。**暂无 fix PR**。

#### P1（已有修复在途）

- [**#127948**](https://github.com/openclaw/openclaw/issues/127948) — WhatsApp 群回复在 quote cache 过期后渲染为空白气泡。**已有修复在途**。
- [**#126900**](https://github.com/openclaw/openclaw/issues/126900) — `maxActiveTranscriptBytes` 在压缩后仍超阈值时无限循环压缩，channel 楔住。**已有修复在途**。
- [**#126631**](https://github.com/openclaw/openclaw/issues/126631) — Sandbox skills bind-mount 创建 root 拥有的 `/workspace/.openclaw`，锁死 uid 1000 用户。**已有修复在途**。
- [**#95746**](https://github.com/openclaw/openclaw/issues/95746) — memory-core dreaming 并行子代理导致本地模型 context/KV cache 耗尽。**已有修复在途**。
- [**#56217**](https://github.com/openclaw/openclaw/issues/56217) — 密钥提供者 crash-loop 耗竭 1Password service account rate limits。**已有修复在途**。

#### 已修复（今日闭环）

- [**#95553**](https://github.com/openclaw/openclaw/issues/95553) — preflight（budget-triggered）compaction 硬编码 ~60s 超时问题，该 Issue 已关闭，修复完成。

---

### 6. 功能请求与路线图信号

社区近期提出的功能请求中，以下需求呼声较高，部分可能与已有 PR 或维护方向相呼应：

| Issue | 需求 | 热度/信号 |
|---|---|---|
| [#67413](https://github.com/openclaw/openclaw/issues/67413) | **Per-agent dreaming 配置**—避免所有工作区同时 dream 导致 OOM，支持按 agent 开关 | 👍 5，与稳定性强相关，可能进入 2026.8.2 |
| [#45758](https://github.com/openclaw/openclaw/issues/45758) | **YAML 配置文件支持**（当前仅 JSON5） | 👍 2，长期开放（3 月至今） |
| [#79902](https://github.com/openclaw/openclaw/issues/79902) | **SQLite transcript/session seams**—供高级消费者在 database-first 运行时上构建工具 | 👍 2，讨论热烈（14 评论） |
| [#16670](https://github.com/openclaw/openclaw/issues/16670) | **Onboarding 强制加入 Memory/Embedding 设置**，避免 memory_search 开箱不可用 | 👍 1，UX 与首次体验相关 |
| [#9016](https://github.com/openclaw/openclaw/issues/9016) | **暴露 OpenRouter 使用成本给 agent 运行时** | 👍 1，成本可观测性 |
| [#6625](https://github.com/openclaw/openclaw/issues/6625) | **子代理优雅超时**—超时前注入警告消息，保留工作进度 | 👍 0，但多次被提及 |
| [#62615](https://github.com/openclaw/openclaw/issues/62615) | **Gateway-side circuit breaker**—连续失败后停止重试同一会话 | 👍 0，稳定性主题 |
| [#39343](https://github.com/openclaw/openclaw/issues/39343) | **图片批量/媒体组缓冲**—避免快速连续图片触发 N 次回复 | 👍 1，聊天体验 |
| [#71335](https://github.com/openclaw/openclaw/issues/71335) | **`sync.watch` 在 gateway 模式默认关闭**，避免文件描述符泄漏 | 👍 1，运维稳定性 |

**路线图信号**：今日合并的 PR 集中在**模型配置规范化**（[#129678](https://github.com/openclaw/openclaw/pull/129678)）、**媒体生成限制**（[#129591](https://github.com/openclaw/openclaw/pull/129591)）、**密钥安全管理**（[#129670](https://github.com/openclaw/openclaw/pull/129670)、[#128318](https://github.com/openclaw/openclaw/pull/128318)）以及 **UI 性能修复**（[#129620](https://github.com/openclaw/openclaw/pull/129620)）。这些更偏向稳定性和安全加固，而非直接实现上述功能请求。`#67413`（per-agent dreaming）和 `#62615`（Gateway 断路器）与当前稳定性主线契合，**最有可能在 2026.8.2 中被纳入**。

---

### 7. 用户反馈摘要

从过去 24 小时活跃的 Issues 评论中，可以提炼出以下真实用户声音：

- **数据库损坏导致信任危机**：用户 `liemnhoang` 在 [#126821](https://github.com/openclaw/openclaw/issues/126821) 中报告“即使 VACUUM INTO 重建后的 pristine DB，也会在 15–24 小时内复发 freelist miscount”，并要求维护者重视 WSL2 下的 beta 质量问题。
- **生产环境仍不可靠**：用户 `BillBOT33` 在 [#128067](https://github.com/openclaw/openclaw/issues/128067) 中提交了 3 周的多 agent 生产部署证据，列出 6 类可靠性缺陷类，并称“所有问题均已复现多次，可提供脱敏日志”。
- **对搜索功能困惑**：用户 `desksk` 在 [#92633](https://github.com/openclaw/openclaw/issues/92633) 中表示“CLI `openclaw memory search` 成功，但 agent 调用 `corpus=all` 超时”，难以排查是配置还是运行时问题。
- **无障碍用户存在**：用户 `xiaopinpin-music` 在 [#95601](https://github.com/openclaw/openclaw/issues/95601) 中感谢 v2026.6.9 的用量显示改进，同时请求 VoiceOver 友好的聊天历史——说明有视力障碍用户深度使用 OpenClaw。
- **对新用户引导不满**：用户 `actwebmaster` 在 [#16670](https://github.com/openclaw/openclaw/issues/16670) 中抱怨 onboarding 未引导配置 embedding provider，导致 `memory_search` 开箱即用失败。
- **对 WebChat 上下文丢失不满**：用户 `wsh819` 在 [#99925](https://github.com/openclaw/openclaw/issues/99925) 中反映“新会话开始后 AI 零上下文，仿佛失忆”，影响日常使用。
- **配置灵活性的长期诉求**：`#45758`（YAML）和 `#67413`（per-agent dreaming）支持者众，用户希望 OpenClaw 能融入更多 DevOps 习惯并精细控制资源消耗。

---

### 8. 待处理积压

以下为长期未解决/未合并的重要 Issue 或 PR，提醒维护者关注：

#### 长期未关闭的 Issue（创建超过 3 个月）

- [#45758](https://github.com/openclaw/openclaw/issues/45758) — YAML 配置支持（2026-03-14 创建，9 评论）
- [#16670](https://github.com/openclaw/openclaw/issues/16670) — Onboarding 必须包含 Memory/Embedding 设置（2026-02-15，9 评论）
- [#9016](https://github.com/openclaw/openclaw/issues/9016) — 暴露 OpenRouter 使用成本（2026-02-04，8 评论）
- [#6625](https://github.com/openclaw/openclaw/issues/6625) — 子代理优雅超时/预超时警告（2026-02-01，6 评论）
- [#26037](https://github.com/openclaw/openclaw/issues/26037) — Ali Bailian coding plan 支持（thinking/reasoning）（2026-02-25，6 评论）
- [#48709](https://github.com/openclaw/openclaw/issues/48709) — Gemini 2.5 Pro textSignature 膨胀 + think tags 导致会话失败（2026-03-17，6 评论）

#### 长期未合并的 PR（创建超过 2 周）

- [#83611](https://github.com/openclaw/openclaw/pull/83611) — fix(telegram): preserve custom reaction routing ownership（2026-05-18 创建，仍在等待审查）
- [#116108](https://github.com/openclaw/openclaw/pull/116108) — fix(config): save config changes into nested `$include` file（2026-07-29）
- [#116652](https://github.com/openclaw/openclaw/pull/116652) — fix(cli): restore accurate operator diagnostics and safe input handling（2026-07-31）
- [#117259](https://github.com/openclaw/openclaw/pull/117259) — fix(buzz): messages sent during Gateway downtime are dropped after restart（2026-08-01）
- [#123356](https://github.com/openclaw/openclaw/pull/123356) — improve(control-ui): stage slash command arguments in the composer（2026-08-13，P1）

---

**总结**：OpenClaw 今日社区活跃度极高，但项目健康度受限于 P0/P1 可靠性的持续发酵与 PR 审查积压。好消息是维护者在 UI、安全、Gateway 路由等方面持续合并修复；坏消息是消息丢失、SQLite 损坏等“伤筋动骨”的问题仍无公开 fix PR。建议维护者优先处理 [#126821](https://github.com/openclaw/openclaw/issues/126821)、[#67777](https://github.com/openclaw/openclaw/issues/67777) 和 [#97616](https://github.com/openclaw/openclaw/issues/97616) 三个高影响力问题，并加速长期 PR 的 review 闭环。

---

## 横向生态对比

# 个人AI助手/自主智能体开源生态横向对比分析报告

**报告日期**: 2026-08-26  
**数据窗口**: 过去24小时（约2026-08-25至2026-08-26）


## 1. 生态全景

当前个人AI助手/自主智能体开源生态正处于**“高活跃度与高质量焦虑并存”**的转折期。从12个项目的当日数据看，社区贡献密度极高（仅OpenClaw、Hermes、CoPaw、ZeroClaw四项目即合计产生超百条PR动态），但普遍面临**可靠性信任危机**——SQLite损坏、消息丢失、进程泄漏、MCP连接失效等基础问题在多项目中反复出现。与此同时，社区诉求正从“功能堆叠”转向**架构治理与安全边界**（沙箱隔离、per-agent权限、RFC流程化），且边缘设备算力利用（家庭mesh、闲置worker）成为跨项目涌现的新兴方向。整体来看，生态正处于从“可用”迈向“好用、可信、可治理”的关键爬坡期。


## 2. 各项目活跃度对比

| 项目 | Issues（今日） | PRs（今日） | Release | 活跃度 | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500更新（445新开/活跃，55关闭） | 500更新（273待合并，227合并/关闭） | 无（beta.3验证中） | ★★★★★ | ⚠️ 活跃度极高，但P0/P1可靠性Bug积压，Issue关闭率仅11%，稳定性信任危机 |
| **Hermes Agent** | 50更新（40新开/活跃，10关闭） | 50更新（26待合并，24合并/关闭） | 无 | ★★★★☆ | ✅ 高频迭代，多个关键修复合并；provider兼容性与桌面端状态一致性问题突出 |
| **CoPaw** (QwenPaw) | 33更新（19新开/活跃，14关闭） | 50更新（21待合并，29合并/关闭） | ✅ v2.1.1-beta.3 | ★★★★☆ | ✅ 迭代节奏快，技能生态与Provider兼容性推进明显；性能类Bug需跟踪 |
| **ZeroClaw** | 50更新（38新开/活跃，12关闭） | 50动态（49待合并，1合并/关闭） | 无 | ★★★★☆ | ⚠️ 合并管道严重阻塞（合并率仅2%），安全修复与RFC并行推进，人工审查是瓶颈 |
| **NanoBot** | 5新开 | 14合并/关闭，10待合并 | 无 | ★★★★☆ | ✅ 特性迭代与稳定性加固并重，Issue→PR闭环质量高，安全修复及时 |
| **NanoClaw** | 5新开，0关闭 | 50更新（16合并/关闭） | 无 | ★★★★☆ | ✅ 高强度迭代，核心链路修复集中；技能系统安全边界问题需关注 |
| **IronClaw** | 39更新（35活跃，4关闭） | 25更新（13待合并，12合并/关闭） | 无 | ★★★★☆ | ✅ 工程化冲刺期，设计系统/CI/通知中心三大主线实质产出；性能类Bug需优先 |
| **LobsterAI** | 1新开 | 9合并/关闭，2待合并 | ✅ 2026.8.25 / 2026.8.21 | ★★★☆☆ | ✅ 节奏稳健、无严重Bug，商业化路径清晰，资料库为重点投入方向 |
| **Moltis** | 2更新（1新开，1关闭） | 5更新（1合并，4待合并） | 无 | ★★★☆☆ | ✅ 工具Schema与MCP集成持续打磨；沙箱扩展方向明确；长周期PR需提速 |
| **PicoClaw** | 4更新（全部活跃/新开） | 1待合并，0合并 | 无 | ★★☆☆☆ | ⚠️ 维护响应滞后，关键Issue/PR均被标记stale，社区信任有流失风险 |
| **NullClaw** | 1新开 | 0 | 无 | ★☆☆☆☆ | ✅ 低活跃但提案含金量高，家庭边缘mesh提案与架构契合度好 |
| **ZeptoClaw** | 无活动 | 无活动 | 无 | ☆☆☆☆☆ | — 当日无动态 |


## 3. OpenClaw 在生态中的定位

**OpenClaw 是当前生态中体量最大、社区活跃度最高的核心参照项目，但同时也是可靠性压力最集中的焦点。**

- **社区规模断层领先**: 单日500条Issue + 500条PR更新的量级，是第二梯队（Hermes/ZeroClaw/CoPaw约50条）的10倍，表明其用户基数和贡献者生态均为全行业最大。beta反馈聚合帖（#125626）成为整个生态中单帖讨论量最高的话题（18评论），侧面说明其用户参与深度极高。

- **技术路线差异化**: 与其他项目相比，OpenClaw最显著的独特之处是**database-first runtime**（数据库优先的运行时架构），社区基于此提出了SQLite transcript/session seams的可编程性需求（#79902）；同时其**Gateway消息路由层**的设计（多agent会话绑定/越权修复PR #126424）在生态中最为复杂，是少数需要专门处理消息路由安全边界的项目。

- **处境警示**: 相较于NanoBot（14个PR合并/关闭零滞留）和LobsterAI（9个PR合并）的高效闭环，OpenClaw虽合并了227个PR，但Issue关闭率仅11%、P0/P1级Bug无fix PR，形成“大而不稳”的观感。若SQLite损坏（#126821）、消息丢失（#67777）等核心问题持续发酵，其生态公信力可能被新兴项目分流。


## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **沙箱/命令执行安全** | NanoBot（#5536受限shell fail-closed）、CoPaw（cron隔离）、ZeroClaw（S0级cron跨agent越权#9947、委托工作区解析#9872）、Moltis（Kubernetes沙箱#1118、Coder后端#1199）、NanoClaw（shell注入#3543、per-agent作用域绕过#3532） | 不可信LLM生成命令的安全边界、工具权限按agent隔离、沙箱后端可插拔化 |
| **MCP连接可靠性** | CoPaw（#6524后端重启后session失效）、Hermes（#94906 Windows MCP全挂、#94859重启后间歇失败）、PicoClaw（#3269 MCP挂起拖垮对话） | MCP server重启自动恢复、故障降级与超时机制、连接生命周期管理 |
| **消息/上下文丢失** | OpenClaw（#67777子代理完成消息丢失、#126246 Telegram持久化丢失）、Hermes（#90428 WS重连丢消息）、CoPaw（#7297 QQ重启丢失聊天记忆） | 跨渠道消息持久化、重启恢复、子代理结果可靠投递 |
| **边缘/家庭算力利用** | NanoClaw（#3538闲置设备worker）、NullClaw（#994家庭边缘mesh）、ZeroClaw（#10360边缘网格）、IronClaw（#7889远程边缘工作节点） | 将闲置PC/NAS/单板机纳入agent执行集群，签名收据/身份验证机制 |
| **搜索/检索能力** | NanoBot（AnySearch集成#5505、MST元搜索#5234）、ZeroClaw（AnySearch provider PR #10356）、OpenClaw（memory_search超时#92633、embedding配置引导#16670） | 多provider搜索、匿名配额、记忆检索可用性 |
| **配置灵活性与可编程性** | OpenClaw（YAML支持#45758、per-agent dreaming#67413、SQLite seams#79902）、NanoClaw（per-agent技能作用域）、CoPaw（workspace级Skill预加载#7182） | 摆脱单一配置格式、支持按agent精细化控制、提供底层数据接口 |
| **UI/UX体验治理** | OpenClaw（Control UI大规模重构）、IronClaw（Design System Phase 1完成）、NanoBot（TUI/WebUI多项体验优化）、CoPaw（长对话卡顿#7285）、PicoClaw（Web UI输入卡顿#3281）、Hermes（TUI输入破坏#90663） | 长会话性能、设计系统制度化、输入/交互一致性 |


## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 关键架构差异 | 突出优势 | 主要短板 |
|---|---|---|---|---|---|
| **OpenClaw** | 全功能个人AI助手/网关 | 开发者、高级用户、多agent部署 | database-first运行时、Gateway消息路由中枢 | 社区规模最大、功能覆盖最全、UI/安全推进积极 | P0/P1可靠性Bug积压，审查滞后 |
| **NanoBot** | 轻量可嵌入Agent框架 | 追求快速部署的开发者、外部服务商 | 模块化工具链、provider抽象 | 合并效率高（零滞留）、外部生态吸引力强（AnySearch主动接入）、Issue→PR闭环质量高 | 体量较小，长期架构沉淀待观察 |
| **Hermes Agent** | 桌面优先的跨平台Agent | 桌面重度用户、本地模型爱好者 | 桌面端+网关混合架构、多profile | Windows/macOS修复及时、架构治理意识强（Authority Execution Layer提案） | provider兼容性（xAI/Ollama）桌面端状态一致性 |
| **PicoClaw** | 嵌入式/边缘Agent运行时 | 嵌入式开发者、轻量部署场景 | 面向低资源设备优化 | 定位独特（RISC-V/ARM/低内存） | 维护响应严重滞后，stale积压 |
| **NanoClaw** | 技能/指令驱动的多Agent编排 | 深度定制者、自动化运维 | 每agent隔离容器、技能系统、指令组合 | runner会话护栏系列、指令文档完整性修复 | 技能系统安全边界漏洞、更新机制伤及定制用户 |
| **NullClaw** | 轻量级去中心化Agent运行时 | 极客/隐私敏感用户、家庭基础设施爱好者 | Zig运行时、Peripheral vtable抽象、WASM/Docker适配 | 极简、低资源占用、边缘mesh原生契合 | 活跃度过低，多个方向仅停留在提案 |
| **IronClaw** | 工程化/团队协作Agent平台 | 团队/企业用户 | 持久化用户沙箱（规划中）、通知中心、自动化运行 | CI基础设施扎实、设计系统推进、通知中心架构收尾 | Reborn性能问题（工具循环、payload未裁剪） |
| **LobsterAI** | 知识库+对话的协作工具 | 知识工作者、团队协作场景 | 资料库（Library）为核心模块、Session fork | 商业化路径清晰、迭代节奏稳健、体验细节打磨好 | 功能覆盖面较窄，主要围绕资料库/发布链路 |
| **Moltis** | 多渠道消息一致性的Agent框架 | 多渠道集成开发者、企业自动化 | cron渠道上下文保留、MCP OAuth标准化、沙箱后端可插拔 | 工具Schema精准度、MCP生态集成规范 | 长周期PR积压、功能请求响应慢 |
| **CoPaw** | IM渠道原生的多模态Agent | 中文用户、IM渠道重度使用者 | 微信/QQ深度集成、富媒体处理、Creator录制 | 中文社区活跃、技能生态扩展快、Provider模型目录更新及时 | 前端长会话卡顿、IM渠道特性与流式冲突 |
| **ZeroClaw** | 企业级治理优先的Agent平台 | 企业/关注合规的组织 | Rust实现、wire protocol抽象、权威存储与富集分离（RFC中） | 治理体系（RFC/维护者队列）、S0级安全响应流程有效 | PR合并率仅2%，人工审查严重阻塞 |
| **ZeptoClaw** | —（当日无动态） | — | — | — | — |


## 6. 社区热度与成熟度分层

**第一梯队：超高频迭代，但稳定性承压**（OpenClaw、Hermes、CoPaw、ZeroClaw）  
日均50+条Issue/PR动态。共性特征是社区反馈量大、功能推进快，但均面临不同程度的质量闭环问题——OpenClaw的Issue关闭率仅11%、ZeroClaw的PR合并率仅2%，而Hermes与CoPaw相对较好地维持了合并节奏。这四个项目已进入“社区规模反噬维护带宽”的阶段，治理机制（RFC流程、优先级队列、自动化审查）成为刚需。

**第二梯队：快速迭代且闭环健康，处于质量巩固与特性扩展并行期**（NanoBot、NanoClaw、IronClaw、LobsterAI）  
NanoBot今日合并14个PR且零积压，NanoClaw集中修复核心链路，IronClaw完成三大工程主线，LobsterAI发布两个版本。这些项目的共同特征是：合并/关闭率健康（60%-90%）、外部贡献者活跃、安全修复响应及时。处于从“功能叠加”向“体系化工程”过渡的甜蜜期。

**第三梯队：中低活跃，方向明确但验证不足**（Moltis、PicoClaw、NullClaw）  
Moltis保持在工具链打磨和沙箱生态扩展的稳定节奏；PicoClaw因维护响应滞后陷入信任风险；NullClaw以单条高含金量提案维持存在感。三者均需在“社区号召力”和“交付确定性”上补课。

**第四梯队：停滞观察**（ZeptoClaw）  
无活动，建议关注后续是否恢复活跃。


## 7. 值得关注的趋势信号

1. **可靠性已成为生态“生死线”**: OpenClaw的SQLite损坏、Hermes的Ollama流式取消、CoPaw的SSE序列化循环、ZeroClaw的cron越权——几乎所有高活跃项目都在为基础设施级稳定性买单。**开发启示**：消息持久化、崩溃恢复、资源清理应从“锦上添花”升级为“默认必须”的设计约束。

2. **安全边界从“应用层校验”走向“架构级隔离”**: NanoBot对受限shell采用fail-closed策略、CoPaw修复cron跨agent隔离、ZeroClaw将S0级越权列为最高优先、Moltis引入Kubernetes VM级沙箱。社区共识正在形成：**不要信任模型输出，即使经过应用层路径检查**。沙箱后端可插拔化（Coder/K8s/本地多后端）将成为下一轮基础设施竞争焦点。

3. **边缘计算成为真正的跨项目需求**: 同一位用户（kvnloo）几乎同时向NanoClaw、NullClaw、ZeroClaw提交了家庭边缘网格提案，且IronClaw也有远程工作节点RFC。这不是孤立请求，而是“AI Agent + 闲置设备”组合的真实用户需求，低资源运行时、可验证计算（签名收据）、设备发现协议将是潜在的技术突破口。

4. **“多Agent/多Profile状态一致性”是全行业难题**: Hermes的profile切换污染、OpenClaw的Gateway消息越权、CoPaw的MCP session失效——本质都是“共享运行时中的隔离边界”问题。**开发者启示**：在设计多租户/多agent架构时，应尽早将状态隔离（session、环境变量、工作目录、凭据）作为一等公民，而非事后打补丁。

5. **MCP生态进入“连接后治理”阶段**: 随着MCP成为事实标准，各项目开始处理MCP server重启恢复、OAuth scope规范化（Moltis）、stdio子进程生命周期（Hermes）等生产级问题。粗放接入时代结束，精细化连接治理是下一波竞争点。

6. **架构治理（RFC/决策队列）成为高活跃项目标配**: ZeroClaw的Work Lanes RFC（24评论）、维护者决策队列Tracker；Hermes的Authority Execution Layer提案；IronClaw的设计系统Epic——头部项目已意识到，**社区规模增长后，需要制度化的决策流程来维持演进质量**。这对新兴项目是前瞻性信号：尽早建立RFC文化和决策记录机制。

7. **AI Agent的“可观测性”需求爆发**: 从OpenClaw要求暴露OpenRouter成本、ZeroClaw修复工具错误细节被丢弃（#10357）、IronClaw披露49KiB MIME头未被投影裁剪导致19.7秒推理——用户对“代理在做什么、为什么慢、花了多少钱”的透明度要求已从“nice-to-have”变为“must-have”。

8. **性能劣化正在赶走早期用户**: 多个项目报告长会话卡顿（CoPaw #7285、PicoClaw #3281）、输入框卡死、内存泄漏。**开发启示**：对话历史增长是必然的，前端渲染效率、上下文窗口管理、增量更新机制需要从一开始就按“无限会话”设计，否则用户将在会话变长后流失。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-08-26

---

## 今日速览

过去 24 小时 NanoBot 项目保持高速迭代状态：5 条新 Issue 全部处于活跃讨论中，14 个 PR 已合并/关闭、10 个 PR 等待合入，社区贡献密度显著。合并内容横跨 **Telegram 渠道、WebUI、TUI、Agent 执行引擎、工具链与 provider 层**，涵盖能力增强与问题修复两大主线。虽然当日无新版本发布，但大量已合入的特性与修复正在为下一版本的发布蓄力。另有外部搜索团队主动提出 AnySearch 集成方案（#5505），表明 NanoBot 的生态吸引力正在扩展到第三方服务商。

---

## 项目进展

过去 24 小时合入的 14 个 PR 对项目整体推进明显，主要集中在以下几个方向：

### 🔍 需求驱动的文档检索（#5525，已合并）
将 `grep` 工具重构为 **demand-driven 按需内容检索**，返回有界匹配片段和 5 行上下文；对 PDF、DOCX、XLSX、PPTX 支持增量检索，并引入稳定的页码/段落/单元格定位符，不再受 200K 附件预览上限的制约。这是一个能力上限的显著提升，为后续 RAG 类功能打下了基础。

### ⚙️ 执行会话管理重构（#5526，已合并）
`write_stdin` 工具正式更名为 `exec_session`，暴露精简的七字段 schema，并新增 `until_exit` + `timeout_ms` 控制，让 Agent 可以**等待执行完成而无需轮询**。这是一个 breaking change，旧配置中调用 `write_stdin` 的用户需要迁移到新名称。

### ⏱️ 后端子代理等待时机优化（#5529，已合并）
重新设计了后台 subagent 的完成等待机制：普通 pending-message 保持非阻塞，仅在**正常无工具响应的回合退出时**统一等待后台子代理结果，并共享 300 秒截止时间。在保证结果完整性的前提下显著降低了响应延迟。

### 🐚 安全执行修复（#5536，待合并，P1）
`ExecTool` 在开启 `restrict_to_workspace` 时不再仅依赖应用层路径检查，而是要求**受限 shell 必须具有沙箱，否则 fail closed**。该修复针对 #4072，堵住了通过 symlink、shell 展开和命令替换绕过路径校验的安全漏洞，属于高风险修复，值得优先 review。

### 📇 Telegram 群组消息归属（#5541，已合并）
非私聊 Telegram 消息现在会**前缀发送者显示名称**，并按 first name → username → 数字 ID 的顺序回退，私聊内容保持原样。修复了 #1091 的长期困扰，并附带完整回归测试。

### 🧠 Codex prompt cache 路由稳定化（#5540，已合并）
在 provider 调用上下文中传播稳定的 nanobot 会话身份，并仅据此派生 OpenAI Codex 的 `prompt_cache_key`；无会话身份的请求直接省略该字段而非哈希消息。提升了缓存命中率与路由稳定性。

### 🖥️ TUI / WebUI 体验优化（#5534、#5538、#5530，均已合并）
- TUI 新增 **技能引用自动补全**（输入 `$skill-name` 时弹出过滤选择器）；
- Composer 操作提示由 `Steer this turn…` 改为更直观的 `Enter send now · Tab send next`；
- 短会话与输入框在纵向空间内保持顶部对齐，滚动行为更自然。

### 🧩 WebUI 拖拽式会话整理（#5389，已合并）
支持对侧边栏独立会话和组内会话拖拽排序，拖一个会话到另一个会话上即可创建分组，兼容最新 pane 布局。该 PR 从 8 月 14 日至今经过多轮迭代，今日合入。

---

## 社区热点

### 1. AnySearch 团队主动提出搜索集成方案 — [#5505](https://github.com/HKUDS/nanobot/issues/5505)（3 评论，今日最多）
AnySearch 团队以官方身份提交 Issue，计划以 **API / MCP / Skill** 三种标准方式将 AnySearch 集成进 NanoBot 的 `web_search` 工具，主打 key-optional 与匿名配额。这是 NanoBot 生态吸引第三方搜索服务商主动接入的积极信号。评论中讨论点集中在**匿名配额限制**和**与现有搜索提供商的共存策略**上。

### 2. Telegram 富消息与流式互斥 — [#5516](https://github.com/HKUDS/nanobot/issues/5516)（1 评论，已有修复 PR）
`rich_messages: true` 与 `streaming: true` 目前互斥——启用流式后 `sendRichMessage` 永远不会被调用，最终消息总是走旧版 HTML `editMessageText` 路径。Issue 提出了利用 Bot API 10.1-10.3 草稿能力的前瞻性解法。该问题直接点名了 #4488/#4539 引入的 opt-in 功能存在**功能短路**，属于比较典型的 feature 与 feature 之间的冲突。

### 3. WebUI 侧边栏标题显示异常 — [#5527](https://github.com/HKUDS/nanobot/issues/5527) + 修复 PR [#5528](https://github.com/HKUDS/nanobot/pull/5528)
`unifiedSession: true` 时所有轮次被路由到共享 `unified:default` 会话，导致标题生成、持久化与变更通知都发生在共享会话上，而 WebUI 侧边栏渲染的是 per-chat 的 `websocket:<id>` 会话——两边永远不会同步，于是所有会话标题始终停留在 "Untitled"。**贡献者 zpljd258 在提交 Issue 的同时直接附上了修复 PR**，通过将会话标题按 per-chat 会话做映射投影来解决，是一个高质量的 contributorship 闭环。

---

## Bug 与稳定性

| 严重程度 | Issue / PR | 描述 | 状态 | 修复 PR |
|---|---|---|---|---|
| **P2** | [#5532](https://github.com/HKUDS/nanobot/issues/5532) | Python 层 `autocompact.py` 中 `mask_session_key` 导入缺失，在处理复杂用户查询时会导致运行时错误 | Open，1 评论 | ⚠️ **暂无对应修复 PR**，标签为 `bug + question`，可能是新引入的引用遗漏，需确认 |
| **P2** | [#5516](https://github.com/HKUDS/nanobot/issues/5516) | Telegram 富消息与流式模式互斥，`rich_messages: true` 实际上永远无法通过流式路径发送 | Open，1 评论 | ✅ [PR #5531](https://github.com/HKUDS/nanobot/pull/5531) 待合并，已在 PR 描述中定位根因（`send_delta(stream_end=True)` 分支被 `if not buf.message_id` 提前挡住） |
| **P2** | [#5527](https://github.com/HKUDS/nanobot/issues/5527) | WebUI 侧边栏所有会话标题一直显示 "Untitled"（unifiedSession 开启时） | Open | ✅ [PR #5528](https://github.com/HKUDS/nanobot/pull/5528) 待合并，由 Issue 提交者一并给出修复 |
| **P1（安全）** | [#4072](https://github.com/HKUDS/nanobot/issues/4072)（底层） | 受限 shell 可绕过路径检查访问工作区外文件（通过 symlink/shell 展开/命令替换） | 由 PR 修复 | ✅ [PR #5536](https://github.com/HKUDS/nanobot/pull/5536) 待合并，fail-closed 策略，建议尽快 review |

另外，#5533（P1）对 `find_files` 扫描进行了 worker 化与预算化改造，解决了大目录扫描导致 UI 卡顿的问题，今日已合入，是对 **P1 性能问题**的一次成功修复。

整体来看，今日 Bug 修复效率较高：绝大多数新报告的问题都有对应的 open PR 在跟进，仅 #5532 处于孤立状态，需要维护者确认 Import 缺失的引入来源。

---

## 功能请求与路线图信号

### 可能进入下一版本的功能

1. **AnySearch 搜索提供商（#5505）** — 外部团队带着完整的三通道集成方案申请合入。考虑到 nanobot 已经支持多种 web_search 提供商，且任何搜索 provider 增加对生态都是净收益，此 PR 大概率会被接受。不过需要评估**匿名配额的波动性**是否会引入不可控的用户体验差异。

2. **WebUI 会话结束通知铃声（#5524）** — 典型的 UX 诉求：Agent 执行长任务（工具调用、文件编辑、shell 命令）期间用户无法感知完成状态。该 issue 给出了完整的期望行为设计（默认关闭、Settings 开关、短促提示音），**暂无对应 PR**，是新功能候选。社区对“任务完成可感知性”的关注已多次出现在 WebUI 相关 Issue 中。

3. **MST 元搜索提供商（#5234，已等待 23 天）** — 聚合 DuckDuckGo、Google、Brave、Bing 等引擎结果，使用 RRF（Reciprocal Rank Fusion）合并。与 #5505 同为 web_search 能力扩展，方向一致。目前标记 `conflict` 但 P1 优先级，说明维护者有意合入，只是需要解决冲突。

### 路线图信号

从今日合并的 PR 来看，近期开发主线集中在四个方向：

- **Agent 执行引擎可靠性**（#5529 子代理等待、#5540 Codex 缓存路由、#5535 MCP 就绪重试）
- **检索与工具链升级**（#5525 按需文档检索、#5533 find_files 性能）
- **Telegram 渠道完善**（#5541 群组归属、#5531 富消息流式兼容）
- **TUI/WebUI 体验打磨**（#5534 技能补全、#5538 composer 提示、#5389 拖拽整理、#5504 模型重试状态）

---

## 用户反馈摘要

> 根据今日 5 条 Issue 和 3 条 Issue 评论提炼，样本量有限，但能反映部分真实用户场景。

- **外部服务商主动拥抱 NanoBot**（#5505，来自 AnySearch 团队）： 搜索服务商愿意为 nanobot 定制集成方案，说明项目在 AI Agent 开源社区中的影响力正在跨出“纯框架”边界，形成生态协同。

- **复杂指令下的运行稳定性仍是用户的痛点**（#5532）： 用户在真实环境中执行“删除我之前创建的所有资源（不得清理技能目录）、清理所有记忆”这类**多约束、反事实条件**的自然语言指令时触发了 ImportError。说明 Agent 在复杂语义解析路径上的代码健壮性还有待加强。

- **`unifiedSession` 模式下的会话体验存在明显割裂**（#5527）： 用户在配置了统一会话后，所有对话内容虽然正常工作，但**侧边栏的会话标题完全不可用**——这是一个即影响观感也影响可用性的问题。用户选择同时提交 Issue 和 PR，表明社区维护者本身对 WebUI 会话模型的复杂度有足够深入的了解。

- **Telegram 重度用户在意富文本与流式的兼容性**（#5516）： 用户明确指出 Stream 开启时富消息完全不会走富文本渲染路径，且对 Bot API 10.1-10.3 的草稿修复能力有追踪研究，说明用户不仅是使用者，还在主动帮助项目探索未来解法，社区参与度较好。

- **等待长任务时缺乏感知反馈**（#5524）： 用户描述的场景是“WebUI 页面中等待长任务，没有明显提示，需要刷新或盯屏才发现新消息”——这是一个跨工具普遍存在的交互缺陷，需求描述非常结构化，含默认关闭、开关、短音三个预期行为，是值得排期的小而美的改进。

---

## 待处理积压

### ⚠️ 长期未合入且值得关注

1. **[PR #5234](https://github.com/HKUDS/nanobot/pull/5234) — MST 元搜索提供商（P1，已开放 23 天，标记 conflict）**  
   自 8 月 3 日提交至今未合入。P1 优先级说明受维护者重视，但 conflict 标签长时间未解除，需要维护者介入解决冲突或给出明确的方向性反馈。

2. **[PR #5152](https://github.com/HKUDS/nanobot/pull/5152) — 子代理部分完成结果标记（regression fix，已开放 29 天，标记 conflict）**  
   解决的是 subagent 结果未全部返回时模型误判的问题。距今已近一个月，长期带 conflict 标签会消耗社区的贡献积极性。考虑到今日 #5529 合入后子代理等待逻辑有更新，该 PR 可能需要 rebase 并重新对齐。

### 📋 今日新增待跟进

3. **[#5532](https://github.com/HKUDS/nanobot/issues/5532) — `mask_session_key` 导入缺失**  
   无对应 fix PR，且 Issue 本身同时带 `bug` 和 `question` 标签，建议维护者先确认是环境相关（可能是旧分支）还是主分支的实际引入，再决定是否需要 hotfix。

4. **[PR #5536](https://github.com/HKUDS/nanobot/pull/5536) — 受限 shell 安全修复（P1）**  
   今日提交、等待 review。安全相关修复应优先于功能开发处理，建议尽快安排 reviewer。

---

**日报总结**：NanoBot 今日活跃度位于高位——外部贡献者的 Issue→PR 闭环（#5527→#5528）、安全修复（#5536）、跨模块性能优化（#5533）同步推进，且均伴随完整测试覆盖。整个项目正处于一个**特性迭代与稳定性加固并重**的健康轨道上。唯一需要维护者重点关注的是 #5532 的孤立状态与两个长期冲突 PR 的收敛。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-26

## 今日速览

过去 24 小时项目活跃度极高：50 条 Issue 更新（40 新开/活跃、10 关闭）、50 条 PR 更新（26 待合并、24 已合并/关闭），无新版本发布。 xAI 保留工具名冲突（#95003）和 Ollama 流式请求被取消（#87697）成为社区讨论焦点，桌面端 session/profile 状态管理问题持续暴露。今日合并了多个关键修复（Windows 更新挂起、tool-search 并行屏障、旧版 auth 数据兼容），整体项目处于高频迭代的健康状态，但 provider 兼容性与桌面端状态一致性问题仍是主要薄弱环节。

## 项目进展

今日无新版本发布，但多项已合并/关闭的 PR 和 Issue 标记了实质性的功能推进与缺陷修复。

**已合并/关闭的 PR（关键成果）：**

| PR | 说明 |
|----|------|
| [PR #94296](https://github.com/NousResearch/hermes-agent/pull/94296) 已合并 | Windows 自动更新不再启动 CUA 交互式安装器，改为推迟到显式命令执行 — 直接修复 #87703 |
| [PR #95008](https://github.com/NousResearch/hermes-agent/pull/95008) 已合并 | 接续 #94296 的落地，验证 Windows 更新不再卡 11 分钟 |
| [PR #92693](https://github.com/NousResearch/hermes-agent/pull/92693) 已合并 | 一次性修复 tool-search 延迟层的 5 个 bug（并行屏障失效、列表截断、索引、缓存过期） |
| [PR #84053](https://github.com/NousResearch/hermes-agent/pull/84053) 已合并 | 修复 codex/xAI 最大迭代摘要时因 `tool_choice` 残留导致的 HTTP 400 |
| [PR #83278](https://github.com/NousResearch/hermes-agent/pull/83278) 已合并 | `hermes auth remove openai-codex` 兼容旧版 suppression 数据格式 |
| [PR #80581](https://github.com/NousResearch/hermes-agent/pull/80581) 已合并 | 修复旧版 auth 存储引发 `.append()` 崩溃问题 |
| [PR #82500](https://github.com/NousResearch/hermes-agent/pull/82500) 已合并 | 隔离测试套件与宿主环境凭据，避免 CI 误用用户本地 checkout |

**已关闭的关键 Issue（确认修复）：**

- [#16520](https://github.com/NousResearch/hermes-agent/issues/16520) 终端工具长行截断误判文件损坏 — 标记 `implemented-on-main`
- [#87703](https://github.com/NousResearch/hermes-agent/issues/87703) Windows 更新挂起 11 分钟 — 随 #94296/#95008 关闭
- [#94516](https://github.com/NousResearch/hermes-agent/issues/94516) + [#94483](https://github.com/NousResearch/hermes-agent/issues/94483) 桌面端 Routines/Cronjobs 面板回归 — 已修复并关闭
- [#90428](https://github.com/NousResearch/hermes-agent/issues/90428) 桌面端 WS 重连后消息静默丢弃 — 已关闭
- [#74973](https://github.com/NousResearch/hermes-agent/issues/74973) macOS 更新跳过网关重启 — 已关闭
- [#88055](https://github.com/NousResearch/hermes-agent/issues/88055) Cron 重复失败通知 — 已关闭

## 社区热点

**🔥 最高热度 Issue：xAI 保留工具名冲突（[#95003](https://github.com/NousResearch/hermes-agent/issues/95003)）**
9 条评论、6 个 👍，开放中。xAI（grok-4.6）拒绝所有包含 `tool_search` 工具名的请求，报错 `The function name tool_search is reserved`，导致所有启用了 Tool Search 的 Grok 通道不可用。高 👍 数说明影响面较大，社区对 provider 兼容性修复有强烈期待。

**💬 最活跃讨论：Ollama 流式取消 bug（[#87697](https://github.com/NousResearch/hermes-agent/issues/87697)）**
11 条评论，开放中，标记 `needs-repro`。Hermes 客户端在本地 Ollama 推理约 1.5 秒后主动取消流，并触发 `<unused49>` token 循环。本地模型用户升级后遭遇功能性回归，排查和修复优先级有待提高。

**🏗️ 架构议题引发讨论（[#95028](https://github.com/NousResearch/hermes-agent/issues/95028)）**
9 条评论，开放中。作者提出"12 个 issue 实为同一缺陷"，主张引入 Hermes Authority Execution Layer 统一处理边界穿越问题（session、profile、socket、环境变量等）。类似议题 [#91911](https://github.com/NousResearch/hermes-agent/issues/91911)（Bot Mode 控制平面统一）也获得 7 条评论。社区开始从"打补丁"转向"去根本原因"的系统性思考，与桌面端近期连发多起状态泄漏问题相呼应。

## Bug 与稳定性

按严重程度排列（P1 > P2，已标注修复状态）：

| 严重度 | Issue | 描述 | 状态 |
|--------|-------|------|------|
| P1 | [#94906](https://github.com/NousResearch/hermes-agent/issues/94906) | Windows 原生 stdio MCP 客户端所有工具调用失败：`subprocess has exited` | 开放，标记 duplicate，无 fix PR |
| P2 | [#87697](https://github.com/NousResearch/hermes-agent/issues/87697) | Ollama 本地流在 ~1.5s 后客户端取消，触发 token 循环 | 开放，needs-repro，无 fix PR |
| P2 | [#95003](https://github.com/NousResearch/hermes-agent/issues/95003) | xAI 拒绝 `tool_search` 保留名，Grok 通道不可用 | 开放，高热度 |
| P2 | [#94859](https://github.com/NousResearch/hermes-agent/issues/94859) | 多个 stdio MCP 服务器在网关重启后前几分钟间歇性失败 | 开放，无 fix PR |
| P2 | [#93937](https://github.com/NousResearch/hermes-agent/issues/93937) | 注册网关切换器泄漏上一运行时 session ID，报 "session not found" | 开放，标记 duplicate |
| P2 | [#95078](https://github.com/NousResearch/hermes-agent/issues/95078) | 嵌套 Hermes 继承旧 `TERMINAL_CWD`，忽略子进程工作目录 | 开放，待处理 |
| P2 | [#95054](https://github.com/NousResearch/hermes-agent/issues/95054) | Ollama fallback 条目静默解析为 `(None, None)`，冗余配置不生效 | 开放，标记 duplicate |
| P2 | [#72480](https://github.com/NousResearch/hermes-agent/issues/72480) | 桌面端工具执行环境使用错误 `HERMES_HOME`，不加载 profile .env | 开放（7 月 27 日创建），待处理 |
| P2 | [#79005](https://github.com/NousResearch/hermes-agent/issues/79005) | 桌面端 profile 切换可路由 session.create 到错误后端，跨 profile 污染 state.db | 开放，待处理 |
| P2 | [#90292](https://github.com/NousResearch/hermes-agent/issues/90292) | Linux 桌面 entry 生成的 Exec 不可运行，图标启动失败 | 开放，needs-decision |
| P2 | [#90663](https://github.com/NousResearch/hermes-agent/issues/90663) | TUI 在 Ghostty 上 Shift+字母被小写化，大写输入被破坏 | 开放，P3 |
| P2 | [#64322](https://github.com/NousResearch/hermes-agent/issues/64322) | 工具循环护栏硬停后静默终止任务，不给予模型恢复机会 | 开放，待处理 |
| P2 | [#84678](https://github.com/NousResearch/hermes-agent/issues/84678) | 无 Edge 机器上更新进度卡片最小化启动，仅裸 PowerShell 窗口 | 开放，待处理 |

**已有 fix PR 的 bug：**

- [#95125](https://github.com/NousResearch/hermes-agent/pull/95125) 修复 macOS setup 启动的 Desktop 静默失去麦克风权限 — 开放中
- [#95126](https://github.com/NousResearch/hermes-agent/pull/95126) 修复 Bots roster 被 profile 写锁阻塞、查询失败无错误卡 — 开放中
- [#95073](https://github.com/NousResearch/hermes-agent/pull/95073) 修复子代理后台进程噪音刷屏父会话 — 开放中
- [#95123](https://github.com/NousResearch/hermes-agent/pull/95123) 修复桌面端输入时重型 `sessions.changed` 列表刷新卡顿 — 开放中
- [#95045](https://github.com/NousResearch/hermes-agent/pull/95045) 修复 Git worktree 交接后 profile 丢失 — 开放中
- [#95120](https://github.com/NousResearch/hermes-agent/pull/95120) Discord 线程重命名与 slash 命令持久化 — 开放中
- [#95124](https://github.com/NousResearch/hermes-agent/pull/95124) Slack 跨作用域消息事件去重 — 开放中

## 功能请求与路线图信号

**架构级需求（较可能影响路线图）：**

- [#95028](https://github.com/NousResearch/hermes-agent/issues/95028) Hermes Authority Execution Layer — 系统性解决边界状态穿越问题，与桌面端近期 bug 群高度呼应
- [#91911](https://github.com/NousResearch/hermes-agent/issues/91911) Bot Mode 统一控制平面（身份、能力、投递、取消一站式管理）
- [#94484](https://github.com/NousResearch/hermes-agent/issues/94484) 桌面后端拆分启动 + 轻量 chat/event 平面

**用户功能诉求：**

- [#93382](https://github.com/NousResearch/hermes-agent/issues/93382) 自适应解释策略，为富交互学习产物提供按需解释
- [#67619](https://github.com/NousResearch/hermes-agent/issues/67619) 为 `quick_commands` 提供安全的结构化执行上下文
- [#68768](https://github.com/NousResearch/hermes-agent/issues/68768) Webhook 签名与事件类型头可配置化
- [#84000](https://github.com/NousResearch/hermes-agent/issues/84000) Chrome 扩展后端，实现共享可见浏览器控制（Claude-in-Chrome 风格）
- [#40963](https://github.com/NousResearch/hermes-agent/issues/40963) 模型选择下拉框高度过矮，影响多模型选择

**相关开放 PR（暗示下一步版本方向）：**

- [#93508](https://github.com/NousResearch/hermes-agent/pull/93508) `hermes webapp`：将桌面渲染器以浏览器模式服务，不再仅限 Web Dashboard — 值得关注的大功能
- [#93977](https://github.com/NousResearch/hermes-agent/pull/93977) Cron 可信定时运行钩子（operator-owned `max_turns` 上限）
- [#91093](https://github.com/NousResearch/hermes-agent/pull/91093) Kanban 卡片强制关联 upstream bead，增强可追溯性
- [#79159](https://github.com/NousResearch/hermes-agent/pull/79159) Hindsight 嵌入式模式继承 Hermes LLM（`llm_provider: hermes`）

## 用户反馈摘要

- **xAI 集成受阻**（[#95003](https://github.com/NousResearch/hermes-agent/issues/95003)）：用户对保留名冲突表示不满 — "This makes Grok providers unusable whenever the Tool Search is enabled" — 6 个 👍 说明这不是个例，而是普遍性阻塞。
- **Ollama 本地体验退化**（[#87697](https://github.com/NousResearch/hermes-agent/issues/87697)）：本地模型用户依赖 Hermes 与 Ollama 的协同工作，更新后流式推理被客户端取消，1.5 秒即失败，属于高影响回归。
- **桌面端长期状态一致性痛点**（[#72480](https://github.com/NousResearch/hermes-agent/issues/72480)、[#79005](https://github.com/NousResearch/hermes-agent/issues/79005)）：多个用户在 profile 切换后遭遇工具执行环境错误、错误后端路由、跨 profile 数据污染。用户描述详细且带有完整复现步骤，但部分问题自 7 月下旬起仍未被解决。
- **TUI 输入破坏**（[#90663](https://github.com/NousResearch/hermes-agent/issues/90663)）：Ghostty 用户无法输入大写字母，Shift+字母被强制小写化，影响日常命令编写，用户评价"uppercase input is destroyed"。
- **Cron 面板可用性回归**（[#94516](https://github.com/NousResearch/hermes-agent/issues/94516)、[#94483](https://github.com/NousResearch/hermes-agent/issues/94483)）：v0.20.5 中 Routines/Cronjobs 面板对所有 bot 显示"不可用"占位符，用户创建 cron 的常规操作被阻断。好在已被识别并关闭，用户等待修复验证。

## 待处理积压

**长期未关闭的 Issue（超过 2 周）：**

| Issue | 创建时间 | 主题 | 备注 |
|-------|---------|------|------|
| [#40963](https://github.com/NousResearch/hermes-agent/issues/40963) | 2026-06-07 | 模型选择下拉框高度过矮 | 已超 2 个月，低优先级 UX |
| [#64322](https://github.com/NousResearch/hermes-agent/issues/64322) | 2026-07-14 | 工具循环护栏硬停静默终止任务 | 超 6 周，P3 |
| [#67619](https://github.com/NousResearch/hermes-agent/issues/67619) | 2026-07-19 | quick_commands 安全结构化执行上下文 | 超 5 周，needs-decision |
| [#68768](https://github.com/NousResearch/hermes-agent/issues/68768) | 2026-07-21 | Webhook 签名/事件头可配置 | 超 5 周，带 `risk-security-boundary` 标记 |
| [#72480](https://github.com/NousResearch/hermes-agent/issues/72480) | 2026-07-27 | 桌面端工具执行使用错误 HERMES_HOME | 接近 4 周，P2 且影响数据隔离 |
| [#79005](https://github.com/NousResearch/hermes-agent/issues/79005) | 2026-08-05 | 桌面端 profile 交换路由到错误后端 | 超 3 周，P2 |
| [#84678](https://github.com/NousResearch/hermes-agent/issues/84678) | 2026-08-12 | 无 Edge 机器更新卡片最小化 | 2 周，P3 |

**长期未合并的 PR：**

- [#79159](https://github.com/NousResearch/hermes-agent/pull/79159) Hindsight 继承 Hermes LLM — 自 8 月 5 日开启，已超 3 周，涉及 plugin 架构，建议维护者评估或给出 review 意见。
- [#91093](https://github.com/NousResearch/hermes-agent/pull/91093) Kanban bead 链接强制 — 自 8 月 20 日开启，涉及 DB schema 变更，需关注兼容性。

**P1 待响应：**

- [#94906](https://github.com/NousResearch/hermes-agent/issues/94906) Windows MCP stdio 全量不可用（P1）目前标记 duplicate 但仍开放，建议尽快关联主 issue 并推进修复，Windows 用户受影响严重。

---

*数据来源：NousResearch/hermes-agent GitHub 仓库，统计窗口 2026-08-25 至 2026-08-26。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-08-26

## 1. 今日速览
过去24小时项目活跃度中等，无新版本发布；共4条Issue更新（全部为活跃/新开）与1条PR待合并，无合并/关闭事件。社区讨论集中于两项长期未决问题：Web UI长会话输入卡顿（[#3281](https://github.com/sipeed/picoclaw/issues/3281)）与MCP连接失败导致对话挂起（[#3269](https://github.com/sipeed/picoclaw/issues/3269)），二者均积累7条评论，但已双双被标记为stale，显示维护响应存在明显延迟。积极信号是Slack媒体上传缺陷已有修复PR [#3340](https://github.com/sipeed/picoclaw/pull/3340) 待合并，且昨日新增一项轻量worker模式功能提案 [#3345](https://github.com/sipeed/picoclaw/issues/3345)。整体来看，代码合入节奏放缓，但社区仍在持续输出高质量bug报告与产品构想。

## 2. 版本发布
过去24小时内无新版本发布。

## 3. 项目进展
过去24小时无PR被合并或关闭，代码合入处于停滞状态。目前唯一待合并PR为 [#3340](https://github.com/sipeed/picoclaw/pull/3340)（fix(slack): set FileSize on media upload params），修复Slack渠道媒体上传时 `FileSize` 为零被slack-go SDK拒绝的问题，直接对应Issue [#3338](https://github.com/sipeed/picoclaw/issues/3338)。若该PR被合并，将恢复Slack渠道的图片/媒体发送能力，但该PR目前同样被标记为stale，需维护者尽快处理。

## 4. 社区热点
- **Web UI长会话输入卡顿**（[#3281](https://github.com/sipeed/picoclaw/issues/3281)）：7条评论，👍1。用户`xpader`在PicoClaw 0.3.1上反馈，当会话历史稍长时，Web输入框严重卡顿。这正是长对话场景下的核心体验痛点，涉及前端渲染或状态管理随消息量增长而劣化的问题。
- **MCP连接失败导致agent挂起**（[#3269](https://github.com/sipeed/picoclaw/issues/3269)）：7条评论，👍1。nightly版本下MCP server连接失败会让agent loop完全hang住，聊天界面停止回复，触及外部依赖故障时系统无法自愈的可靠性核心问题。

以上两条Issue均在24小时内有更新，说明社区仍在持续讨论，但维护者尚未介入。

## 5. Bug 与稳定性
按严重程度排列：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🔴 严重 | **[#3269](https://github.com/sipeed/picoclaw/issues/3269) MCP连接失败导致agent loop挂起** — 聊天界面失去响应，影响agent核心流程；出现在nightly版本 + Qwen3环境 | 无fix PR，stale |
| 🔴 严重 | **[#3281](https://github.com/sipeed/picoclaw/issues/3281) Web UI长会话输入卡顿** — 历史稍长即严重延迟，影响Web日常使用；PicoClaw 0.3.1 | 无fix PR，stale |
| 🟡 中等 | **[#3338](https://github.com/sipeed/picoclaw/issues/3338) Slack媒体上传失败** — 报错 `file.upload.v2: file size cannot be 0`，上传图片/媒体完全不可用 | 已有修复PR [#3340](https://github.com/sipeed/picoclaw/pull/3340)，待合并，stale |

## 6. 功能请求与路线图信号
- **[#3345 轻量worker模式提案](https://github.com/sipeed/picoclaw/issues/3345)**：用户`kvnloo`提议为PicoClaw增加轻量worker模式，面向RISC-V/ARM/MIPS单板机、树莓派、旧安卓手机以及内存仅10–20MB的边缘设备，让它们作为分布式agent集群的worker节点与主控PC协同。这与PicoClaw在嵌入式/边缘场景的产品定位高度契合，具备被纳入中期路线图的潜力，值得维护者评估。
- 来自Bug的路线图信号：MCP连接健壮性（[#3269](https://github.com/sipeed/picoclaw/issues/3269)）呼声上升，agent循环对MCP外部依赖的容错能力（超时/重试/降级）很可能成为下一版本的基础设施优先级。

## 7. 用户反馈摘要
- **长会话性能不可接受**：用户在Web UI中随消息历史增加出现明显输入延迟，表明前端在长会话场景下存在真实性能瓶颈，影响实际工作流（[#3281](https://github.com/sipeed/picoclaw/issues/3281)）。
- **外部依赖需要容错**：MCP连接失败会直接拖垮整个对话界面，用户需要agent loop具备超时、重试或降级机制，而不是无限期hang住（[#3269](https://github.com/sipeed/picoclaw/issues/3269)）。
- **Slack渠道未达开箱即用**：Slack用户尝试上传图片/媒体时直接失败，说明跨渠道集成在实际体验上仍有明显粗糙之处（[#3338](https://github.com/sipeed/picoclaw/issues/3338)）。

## 8. 待处理积压
以下Issue/PR已超过stale阈值，长期未获得维护者有效响应或推进，建议尽快处理：

| 编号 | 创建时间 | 问题 | 优先级建议 |
|---|---|---|---|
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) | 2026-07-20 | MCP连接失败导致agent挂死，7条评论 | 🔴 高 — 核心可靠性问题，建议立即给出排查计划 |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | 2026-07-21 | Web UI长会话输入卡顿，7条评论 | 🔴 高 — 影响Web端日常体验，需性能定位 |
| [#3340](https://github.com/sipeed/picoclaw/pull/3340) | 2026-08-17 | Slack媒体上传修复PR，修复已就绪 | 🟡 中 — 建议尽快review并合并，连带解决#3338 |
| [#3338](https://github.com/sipeed/picoclaw/issues/3338) | 2026-08-17 | Slack媒体上传失败 | 🟡 中 — 依赖#3340合并后关闭 |

**项目健康度总结**：社区活跃度尚可，但维护响应速度明显滞后，stale标记积压较多。建议优先合并 [#3340](https://github.com/sipeed/picoclaw/pull/3340) 并针对 [#3269](https://github.com/sipeed/picoclaw/issues/3269) 给出明确回复，以避免社区信任进一步流失。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-08-26

## 1. 今日速览

过去 24 小时 NanoClaw 保持高强度迭代：5 个新 Issues 全部围绕技能（skill）系统的安全性、作用域完整性与更新机制，0 个关闭，显示质量反馈仍在快速积累。PR 侧更新 50 条，其中 16 条已合并/关闭，多条 core-team 修复（compose、codex、opencode、mnemon）落地，项目在指令分发与运行器一致性上取得了可见进展。值得注意的是，社区出现了多个“系列化贡献者”：`glifocat` 集中提交 5 个关联 Issue，`amit-shafnir` 连续推进 6 个 setup 基础设施 PR，`gavrielc` 则围绕 runner 会话护栏构建了一组栈式 PR。项目无新版本发布，整体处于功能加固与基础设施重构并行的活跃阶段。

## 2. 版本发布

过去 24 小时无新版本发布。

## 3. 项目进展

今日关闭/合并的 PR 集中修复了指令文档分发与运行器工作目录等核心链路问题，标志着项目在组合阶段的一致性问题得到一轮集中收敛。

- **指令组合完整性修复（[#3536](https://github.com/nanocoai/nanoclaw/pull/3536)）**：将全部指令来源内联到单一项目文档，绕开了 Claude Code 新安全门对 `@` 导入（解析到工作目录之外）的审批拦截。此前 agent 可能因拒绝一次导入而永久缺失能力指令，该修复让 agent 真正收到完整指令。
- **Codex 重复 composer 下线（[#3537](https://github.com/nanocoai/nanoclaw/pull/3537)、[#3539](https://github.com/nanocoai/nanoclaw/pull/3539)）**：Codex 改走 trunk 共享 composer，避免两份实现漂移；同时修复 `cli_scope: disabled` 组被错误交付 `ncl tasks` 手册的问题。
- **OpenCode 工作目录修复（[#3540](https://github.com/nanocoai/nanoclaw/pull/3540)）**：agent 会话现在在自身工作区运行，此前 `opencode serve` 继承了 runner 的 cwd（`/workspace/group`，是 agent 工作区的兄弟目录），导致项目文档遍历永远无法命中。
- **mnemon 初始化修复（[#2656](https://github.com/nanocoai/nanoclaw/pull/2656)）**：将 `mnemon setup` 从 `entrypoint.sh` 移入 `index.ts` 的 `main()`，修复宿主导入覆盖镜像 ENTRYPOINT 导致 hooks 从不注册的长期问题。该 PR 从 5 月 31 日开放至今，今日终于关闭。
- **Slack 房间交接 PR 重开（[#3545](https://github.com/nanocoai/nanoclaw/pull/3545)）**：在 #3544 关闭后由作者重开，新增显式 Slack 房间交接工具，支持多 agent 选择、真实 mention 解析与边界输入校验。

开放中的 PR 显示出两个方向正在成形：（a）`amit-shafnir` 的结构化安装体系（[#3482](https://github.com/nanocoai/nanoclaw/pull/3482) 至 [#3487](https://github.com/nanocoai/nanoclaw/pull/3487)，含宿主健康、driver 协议、时区预置、secret 防泄漏等）；（b）`gavrielc` 的 runner 会话护栏系列（[#3521](https://github.com/nanocoai/nanoclaw/pull/3521)、[#3528](https://github.com/nanocoai/nanoclaw/pull/3528)，涵盖 lease 认领、重启重叠保护、spawn/adoption/finish 全流程栅栏）。两者共同指向：让 NanoClaw 的安装与运行在无人值守场景下更安全、更可编程。

## 4. 社区热点

今日最值得关注的并非单一高讨论度帖子，而是两个“系列化”信号：

- **`glifocat` 的技能系统五连报（[#3543](https://github.com/nanocoai/nanoclaw/issues/3543)、[#3535](https://github.com/nanocoai/nanoclaw/issues/3535)、[#3532](https://github.com/nanocoai/nanoclaw/issues/3532)、[#3529](https://github.com/nanocoai/nanoclaw/issues/3529)）**：同一用户在一天内提交了 5 个 Issues，全部指向技能系统在真实使用中的完整性问题——shell 引号缺失造成注入、per-agent 作用域被后续创建代理绕过、会话级技能副本导致 symlink 同步失效、更新流程覆盖本地适配器。这已不是孤立 Bug，而是技能系统的结构性反馈。
- **`amit-shafnir` 的 setup 基础设施系列（[#3482](https://github.com/nanocoai/nanoclaw/pull/3482)、[#3483](https://github.com/nanocoai/nanoclaw/pull/3483)、[#3484](https://github.com/nanocoai/nanoclaw/pull/3484)、[#3485](https://github.com/nanocoai/nanoclaw/pull/3485)、[#3486](https://github.com/nanocoai/nanoclaw/pull/3486)、[#3487](https://github.com/nanocoai/nanoclaw/pull/3487)）**：6 个相互关联的 PR 在 3 天内相继提交，试图为安装向导建立结构化外部驱动协议、预置目录和健康检查接口。这反映出有用户正在做大规模/自动化部署，而当前 wizard 的文本交互方式无法满足该场景。

两者结合来看，社区在“深度使用”与“规模化部署”两个方向上同时给项目施压，对健康度而言是积极的信号。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue/PR | 问题描述 | 修复状态 |
|---|---|---|---|
| **高** | [#3543](https://github.com/nanocoai/nanoclaw/issues/3543) | add-dial 技能将 `{{owner_email}}` 未加引号拼入 `bash -c`，含撇号的邮箱会破坏登录，且 shell 元字符能通过校验。这是直接的命令注入面。 | 暂无关联 PR |
| **高** | [#3532](https://github.com/nanocoai/nanoclaw/issues/3532) | `add-*-tool` 的 per-agent 作用域只覆盖现存组，`onecli rules` 不会自动约束之后创建的 agent，新 agent 默认获得受限制工具。权限边界存在默认放行漏洞。 | 暂无关联 PR |
| **中** | [#3529](https://github.com/nanocoai/nanoclaw/issues/3529) | update 技能的 skill 刷新把本地手写适配器误判为技能导入，导致更新被本地验证失败阻塞，或本地适配器被覆盖，且无 opt-out。 | [#3452](https://github.com/nanocoai/nanoclaw/pull/3452) 修复了更新命令的输出缓冲，但不直接解决此问题 |
| **中** | [#3535](https://github.com/nanocoai/nanoclaw/issues/3535) | add-vercel 技能要求向每个会话目录 rsync 真实技能副本，破坏 spawn 时的 symlink 同步，并将整个 pin 组冻结在过期技能上。 | 暂无关联 PR |
| **中** | [#3542](https://github.com/nanocoai/nanoclaw/pull/3542) | 容器状态 `container_status` 漂移问题：启动收养（adoption）时状态不一致。 | 已有 fix PR 开放中 |

另有两条已在今日关闭的修复值得关联关注：`#3540`（OpenCode 工作区错误）和 `#2656`（mnemon 初始化从不执行），两者都属于“配置看起来正确、实际从未生效”的静默失效类问题，这类问题对用户信任伤害最大。

## 6. 功能请求与路线图信号

- **家庭边缘 worker（[#3538](https://github.com/nanocoai/nanoclaw/issues/3538)）**：`kvnloo` 提议将 NanoClaw 容器作为可选的闲置设备 worker（PC、笔记本、NAS、家庭服务器），避免购买 GPU 或云 worker。这与 NanoClaw 现有“每 agent 一个隔离容器”的架构天然契合，但涉及设备发现、网络穿透、异构平台等较大工作量。方向上有望成为里程碑级特性，短期内进入下一版本的可能性较低。
- **本地 Web 聊天通道（[#3298](https://github.com/nanocoai/nanoclaw/pull/3298)）**：`amit-shafnir` 的 PR，解决“首次安装必须先去外部平台注册 token”的试用摩擦。对新手体验有直接价值，且与家庭边缘 worker 场景互补，值得优先评估。
- **Slack 增强（[#3545](https://github.com/nanocoai/nanoclaw/pull/3545)、[#2431](https://github.com/nanocoai/nanoclaw/pull/2431)）**：显式房间交接 + 条件线程策略（DM 走顶层、频道走线程），如果都合入，Slack 适配器的人机协作模型将明显成熟。
- **可编程安装生态（[#3482](https://github.com/nanocoai/nanoclaw/pull/3482) 至 [#3487](https://github.com/nanocoai/nanoclaw/pull/3487)）**：结构化驱动协议、预置目录、主机健康检查——这套组合是在为“无人值守部署”和“外部编排工具集成”铺路，是项目走向运维成熟度的明确信号。

## 7. 用户反馈摘要

从今日 Issues 中可以提炼出以下真实用户场景与诉求：

- **深度定制者被更新流程误伤**（[#3529](https://github.com/nanocoai/nanoclaw/issues/3529)）：用户“自己写在 tree 里的适配器”被刷新逻辑当成技能导入，阻塞了整次更新。用户明确表达需要 opt-out。这反映更新机制对本地修改的感知能力不足，是定制型用户的共同痛点。
- **文档给出的 shell 命令在真实世界不安全**（[#3543](https://github.com/nanocoai/nanoclaw/issues/3543)）：用户用真实邮箱（含撇号、特殊字符）执行技能文档中的命令直接失败，说明技能模板的测试可能只覆盖了理想输入。对“复制粘贴型”用户来说，这是第一道门槛。
- **权限模型没有跟上 agent 动态创建**（[#3532](https://github.com/nanocoai/nanoclaw/issues/3532)）：用户按向导完成了“仅授予部分 agent”的操作，但新建 agent 后工具默认可用，安全配置被悄悄绕过。这是权限系统一致性的核心诉求。
- **多设备利用的真实需求**（[#3538](https://github.com/nanocoai/nanoclaw/issues/3538)）：用户明确表示“已有几台闲置 PC、笔记本、NAS”，不想“再买 GPU 或付云 worker”。成本敏感的个人/家庭用户是 NanoClaw 的重要受众，边缘 worker 对他们有真实吸引力。

## 8. 待处理积压

- **[#2431](https://github.com/nanocoai/nanoclaw/pull/2431)（PR，5 月 12 日开放至今）**：Slack 适配器条件线程策略。已在列表中存在 106 天，期间项目 Slack 相关功能持续演进（如今日 #3545），该 PR 若长期搁置可能出现合并冲突或需求变更，建议维护者明确合入/关闭决定。
- **`glifocat` 提交的 5 个 Issues（[#3543](https://github.com/nanocoai/nanoclaw/issues/3543)、[#3538](https://github.com/nanocoai/nanoclaw/issues/3538)、[#3535](https://github.com/nanocoai/nanoclaw/issues/3535)、[#3532](https://github.com/nanocoai/nanoclaw/issues/3532)、[#3529](https://github.com/nanocoai/nanoclaw/issues/3529)）**：目前均无评论、无指派、无关联 PR。其中两个高严重度问题（#3543、#3532）涉及安全边界，建议维护者优先响应，至少给出确认或 triage 标签。
- **[#3452](https://github.com/nanocoai/nanoclaw/pull/3452)（PR，8 月 22 日开放）**：为捕获的更新命令提供真实输出缓冲，目前尚无维护者互动。该 PR 直接关系更新失败时的可诊断性，与 #3529 的反馈相关。
- **[#3298](https://github.com/nanocoai/nanoclaw/pull/3298)（PR，8 月 17 日开放）**：本地 Web 聊天通道，10 天无更新。这是一个能显著降低新用户上手门槛的功能，建议尽快安排 review。

---

*本日报由 NanoClaw GitHub 公开数据自动分析生成，关注项目健康度与社区信号。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

好的，这是基于 NullClaw 项目 2026-08-26 的 GitHub 数据生成的动态日报。

---

# NullClaw 项目动态日报 — 2026-08-26

## 1. 今日速览

今日项目活跃度整体偏低，代码层面无 PR 合并/关闭，亦无新版本发布；社区层面产生 1 条新 Issue（#994），是一份关于利用 RuntimeAdapter 构筑家庭边缘网格的技术提案，讨论方向具有较高含金量。整体来看，项目处于“低频但方向性明确”的状态：虽有零星的代码提交空窗期，但社区提案正指向更深层的组网实践场景，说明关注者对 NullClaw 的轻量运行时与多端适配能力保有期待。

**活跃度评估**：⭐☆☆☆☆（低活跃，但信息密度高）

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无 PR 被合并或关闭，代码库未发生实际变更。不过在 Issue 层面，社区提出了 #994 家庭边缘网格方案，为项目指出了潜在的重要应用出口——将多台闲置 PC/笔记本通过 NullClaw 已有原语（RuntimeAdapter、Peripheral vtable、Docker/WASM 适配器、硬件发现、隧道、通道）互联为去中心化 mesh。虽然不涉及代码入库，但在路线图意义上，这可能是下一阶段项目形态的重要信号。

## 4. 社区热点

**#994 [OPEN] Household edge mesh using RuntimeAdapter workers and signed receipts**
- 作者：kvnloo
- 创建/更新：2026-08-25
- 链接：https://github.com/nullclaw/nullclaw/issues/994

这是今日唯一一条 Issue，虽然尚未产生评论或反应，但其内容本身具备较高的讨论潜力。作者明确指出 NullClaw “already has unusually good primitives for a household edge mesh”，并列举了 tiny Zig runtime、Peripheral vtables、严格的体积/内存目标等特性，进一步提出了基于签名收据（signed receipts）与 RuntimeAdapter workers 的组网方案。这反映出用户希望将项目能力从单机外设管理延伸到多机协同的家庭基础设施层面，诉求核心是最大化利用已有闲置算力。

## 5. Bug 与稳定性

今日无 Bug、崩溃或回归问题报告，项目稳定性暂无新增隐患。

## 6. 功能请求与路线图信号

今日唯一的功能请求即 #994。该提案建议在家庭局域网内构建边缘 mesh，将适配器（Adapter）注册为 worker，通过签名收据在节点间传递可信的执行结果与状态变更。方案以 RuntimeAdapter 为边界、以 WASM/Docker 为隔离载体，且契合项目“严格大小/内存目标”的承诺，整体上并未引入新的复杂依赖。

从可行性来看，这条提案与项目现有架构的契合度较高，若能被维护者采纳，将很有可能纳入后续版本的路线图讨论，尤其可能推动 **Peripheral vtable 的泛化**与 **Adapter 协议轻量化**相关的工作。

## 7. 用户反馈摘要

- **正面反馈**：提案作者对项目的底层设计表达了明确认可，称其具备“异常好的家庭边缘网格原语”，并特别提到 Zig 运行时的轻量性、硬件发现能力的完备性，以及内存/体积目标的一贯坚持。
- **使用场景**：用户画像为拥有多台闲置 PC、笔记本的家庭运维者，期望将散落的设备组合成可自发协作的私有计算节点网，覆盖本地 AI 推理、数据同步、网络隧道等场景。
- **潜在痛点**：当前缺失的是更高层次的编排/互信层；用户自发提出签名收据方案，暗示原生能力在外设控制之上仍需要一层节点间的身份与结果验证机制。

## 8. 待处理积压

当前无长期未响应或滞留时间较长的重要 Issue/PR。今日新增的 #994 正处于观察期，建议维护者在未来 48–72 小时内确认该提案是否纳入路线图，避免因响应过慢而降低社区贡献者的积极性。若该项目已有对应讨论区或 Discord，亦可在 #994 中回复引导深入讨论。

---

*本报告基于 GitHub 公开数据生成，链接均指向 nullclaw/nullclaw 仓库。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-26

## 1. 今日速览

过去24小时项目保持高活跃度：39条 Issue 更新（35条活跃、4条关闭）和25条 PR 更新（13条待合并、12条已合并/关闭），显示出持续的开发与社区参与。尽管无新版本发布，但核心开发围绕设计系统、CI 基础设施、可扩展性与通知中心等方向密集推进，数个大体积 PR 合并（#7817、#7818、#7846 等）标志着多个里程碑级能力正在落地。值得关注的是 Telegram 设备链接问题引发多个 Issue/PR 联动（#7853、#7862、#7861、#7887），是当下最集中的稳定性信号。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日合并/关闭了12个 PR，最值得关注的是以下几个，它们分别代表了 CI 现代化、设计系统推进和通知中心收敛三条主线：

### #7817 — CI nextest 测试流水线（关闭 #7799）
*[已合并] [size: XL, risk: medium, scope: ci/docs]*
将 `Tests (Reborn)` 工作流改为 cargo-nextest 流水线，单次运行报告全部失败用例而非只报首个失败 job，同时解除 PR 的 max-parallel 限制。预期显著缩短 CI 墙钟时间并提升失败信号完整性。
https://github.com/nearai/ironclaw/pull/7817

### #7818 — 后台子代理：后台模式（slices 2b+2c）
*[已合并] [size: XL, risk: low, scope: docs]*
R2 后台子代理的生产者半区正式落地，包含 receipt 生成、per-child 消息投递、激活与修复性清扫。此前 slice 2a 已合入但处于空转状态，本 PR 使其真正可运行。
https://github.com/nearai/ironclaw/pull/7818

### #7846 — 通知中心淘汰遗留审批回退（关闭 #7706）
*[已合并] [size: XL, risk: low, scope: docs]*
删除旧 `threads?needs_approval=true` 查询、审批兼容 presenter 和 localStorage seen 状态，使持久化通知 Inbox 成为唯一通知源。这是通知中心 Generalization Epic 的最后一块拼图。
https://github.com/nearai/ironclaw/pull/7846

### #7861 — 修复设备链接指引（针对 #7853）
*[已合并] [size: XL, risk: low, scope: dependencies]*
恢复扩展安装/激活路径上的设备链接引导信息，修复"Telegram 机器人已激活但个人账号无处可链"的自述缺失问题。
https://github.com/nearai/ironclaw/pull/7861

### CI 基础设施系列（#7809、#7819、#7820、#7894）
- #7809 将 `preflight-gates.sh` 确立为唯一规范 gate 列表（支持 pre-push 和 CI 共用）
- #7819 收敛 PR/队列检查，在 PR 中新增 default-features clippy 检查，消除 3 类 queue-only 失败
- #7820 为 scope-isolation 测试整合做测量门控探针
- #7894 减少 required-check 作用域 checkout 传输体积
这一系列共同推进 CI 基础设施的可靠性与速度。
https://github.com/nearai/ironclaw/pull/7809
https://github.com/nearai/ironclaw/pull/7819
https://github.com/nearai/ironclaw/pull/7820
https://github.com/nearai/ironclaw/pull/7894

**综合判断**：项目在前一日的基础上，正式迈入 nextest 时代，并完成了通知中心的架构收尾。后台子代理的启用使 Reborn 体系的自动化编排能力再进一步。

## 4. 社区热点

### #7732 — 持久化 per-user sandbox 与 iron-proxy（epic, v1.4.0）
*[OPEN] 评论: 9*
当前讨论焦点。核心问题是 Reborn 目前对每个 shell 命令都创建并销毁 Docker 容器，`/workspace` 需要按 `(tenant, user)` 持久化。该 epic 规划用 iron-proxy 实现常驻用户沙箱，并推迟循环执行器。社区对架构演进的关注度最高，直接影响开发体验与多租户隔离能力。
https://github.com/nearai/ironclaw/issues/7732

### Telegram 设备链接连锁问题（#7853 + #7862）
*[OPEN] 评论合计: 5*
#7853 报告 Telegram 设置流程中"个人账号链接"不可用（缺少工具）；#7862 进一步定位到 `telegram_api_id/api_hash` 未配置时页面只显示泛化错误。两者共同指向 Telegram 通道的配置引导不完善，是当前最集中的用户痛点之一，已催生 #7861（merge）和 #7887（repro 追踪）。
https://github.com/nearai/ironclaw/issues/7853
https://github.com/nearai/ironclaw/issues/7862

### #7038 — Design System Phase 1 Epic 关闭
*[CLOSED] 评论: 3*
设计系统第一阶段（Storybook 集成 + 设计系统目录）正式关闭，工作重心转移至 Phases 2–3（#7781）和 Phases 4–5（#7782）。该 Epic 从 8/3 开始，经过约三周完成 Phase 1 交付。
https://github.com/nearai/ironclaw/issues/7038

**诉求分析**：社区最关心的是（1）开发体验基础设施（沙箱持久化）、（2）通道完整性（Telegram 全链路可用）、（3）前端设计系统的制度化推进。三者均指向产品从「可用」迈向「好用」的工程化阶段。

## 5. Bug 与稳定性

按严重程度排列，多数 Bug 已在同日或此前有对应 fix PR。

| 严重度 | Issue | 问题描述 | 状态 |
|---|---|---|---|
| 🔴 高 | [#7892](https://github.com/nearai/ironclaw/issues/7892) | Agent 循环中同一能力被查找 15 次却从未调用，单次运行最长 123 秒且 4 个不同的调用反复重复，无终止保护 | OPEN，暂无 fix PR |
| 🔴 高 | [#7891](https://github.com/nearai/ironclaw/issues/7891) | 扩展 payload 未做投影裁剪，两封邮件的 MIME 头（49 KiB）全部塞入 prompt，推理耗时 19.2 秒 | OPEN，暂无 fix PR |
| 🟠 中 | [#7888](https://github.com/nearai/ironclaw/issues/7888) | 获取日志操作在多实例上无限期挂起，已由用户确认在超过两个实例复现 | OPEN，暂无 fix PR |
| 🟠 中 | [#7862](https://github.com/nearai/ironclaw/issues/7862) | Telegram 设备链接在 api_id/api_hash 未配置时仅显示泛化错误"Something went wrong" | OPEN，#7887 部分追踪 |
| 🟡 低 | [#7853](https://github.com/nearai/ironclaw/issues/7853) | Telegram 个人账号链接流程缺少可用工具 | OPEN，已由 #7861 修复安装路径，#7887 追踪更深层问题 |

**特别关注**：#7892 和 #7891 均属 Reborn/扩展的性能与正确性问题，且暂未有 Fix PR，建议优先分配资源评估。若两者叠加，将对生产环境的响应时间与 token 成本造成显著影响。

## 6. 功能请求与路线图信号

### Slack 深度集成成为明确方向
- [#7871](https://github.com/nearai/ironclaw/issues/7871) **Epic: Slack-to-console bridge + rich interactive Slack UX** — Slack 目前仍是薄聊天传输层，新 epic 规划将 Slack 升级为 agent 工作的富控制台
- [#4625](https://github.com/nearai/ironclaw/issues/4625) **Slack 频道路由的个人与团队 agents** — 从 6 月起持续开放，今日有新评论，与 #7871 形成呼应

### 通知中心覆盖面扩展（v1.4.0 相关）
italic-jinxin 一口气提交了 6 个相关 Issue（#7872–#7877、#7880），方向明确：将通知中心从仅审批扩展为覆盖自动化预运行失败、资源/策略阻塞、认证失效、低风险产品事件，并配套加载骨架屏与生命周期安全强化。考虑到 #7846 已为通知中心收尾，这批 Issue 很可能进入 v1.4.0 的 sprint。
- https://github.com/nearai/ironclaw/issues/7872
- https://github.com/nearai/ironclaw/issues/7873
- https://github.com/nearai/ironclaw/issues/7874
- https://github.com/nearai/ironclaw/issues/7875
- https://github.com/nearai/ironclaw/issues/7876
- https://github.com/nearai/ironclaw/issues/7880

### 记忆与学习能力
- [#7893](https://github.com/nearai/ironclaw/issues/7893) **feat(memory): per-automation lessons file** — 自动化运行间共享经验教训，避免每次都从零开始

### WebUI 体验增强
- [#7895](https://github.com/nearai/ironclaw/issues/7895) **Settings 中添加人格 (agent.md) 编辑器** — 用户明确提出配置人格困难
- [#7867](https://github.com/nearai/ironclaw/issues/7867) **WebUI composer 语音转文字** — 与 Slack/Telegram 对齐语音能力

### 安全与基础设施
- [#7889](https://github.com/nearai/ironclaw/issues/7889) **RFC: 可选远程边缘工作节点** — 将 worker pool 从单主机扩展为多云/多机协作
- [#7885](https://github.com/nearai/ironclaw/issues/7885) **OpenSSF Scorecard 工作流** — 开源项目安全度量的预启动检查，已有对应 PR #7886

**值得关注的趋势**：`scope: docs` 标签在大量 PR 中出现（#7737、#7859、#7884），说明项目正经历一次体系化的文档与开发者体验治理，这通常是产品走向成熟的前兆。

## 7. 用户反馈摘要

### Telegram 通道体验不佳（最集中的负反馈）
- 用户 emajoe 在 [#7853](https://github.com/nearai/ironclaw/issues/7853) 中报告："Telegram 设置流程提供个人账号链接选项，但完成不了。" 机器人引导用户同意链接个人账号，agent 却回复"没有可用工具"。
- 在 [#7862](https://github.com/nearai/ironclaw/issues/7862) 中，当 Telegram API 凭证未配置时，用户只看到"Something went wrong"的泛化错误，无任何配置引导。

### 人格配置困难（真实用户声音）
- [#7895](https://github.com/nearai/ironclaw/issues/7895) 引用用户原话："me trying to set up personality with ironclaw"，并建议在 Settings 中增加 agent.md 编辑区，说明当前的人格配置路径对普通用户不够直观。

### 性能问题令人沮丧
- [#7891](https://github.com/nearai/ironclaw/issues/7891) 披露：两封邮件（API 各 280ms）触发一次 19.7 秒的模型回合，其中 49 KiB 未投影的 MIME 头直接进入 prompt，用户可感知的延迟问题非常尖锐。
- [#7892](https://github.com/nearai/ironclaw/issues/7892) 描述同一线程中三次运行分别耗时 79 秒、86 秒和 123 秒，agent 反复调用相同工具却没有进展，用户对"卡死感"的容忍度必然有限。

### 对 CI/基础设施的评价
- CI 相关改进（#7799 等）虽然不直接面向终端用户，但从 #7817 的 PR 摘要看，作者明确提到"让每个红榜运行都有完整的失败信号"以及与本地 `quality_gate.sh` 的共享 seam——这体现了对开发者体验的关注。

## 8. 待处理积压

以下 Issue/PR 长时间未关闭，可能存在维护者未注意到或优先级排序问题：

### 长时间未响应的功能请求
- **#4625** — Slack 频道路由 agents（6月9日开，两个半月+）
  https://github.com/nearai/ironclaw/issues/4625
  作为 roadmap 中的 epic 且是 Slack 战略的一部分（与 #7871 呼应），建议维护者评估是否可以与 #7871 合并规划或标注明确的里程碑。

### 长期未合并的 PR
- **#7491** — omp 核心工具契约 + 引擎 + 基准（8月11日开，超过两周）
  https://github.com/nearai/ironclaw/pull/7491
  [size: XL, risk: medium] — 打通 `read/write/edit/glob/grep/bash` 统一编码工具表面，属于模型能力的关键基础设施，但迟迟未合入，可能与 XL 体量和风险偏好有关。

- **#7516** — IronHub agent 链接的操作员 WebUI 界面（8月12日开，两周+）
  https://github.com/nearai/ironclaw/pull/7516
  [size: XL, risk: low, contributor: new] — 让部署方无需 CLI 即可在 WebUI 完成 IronHub 链接，功能直接提升可运维性，建议 maintainer 给予 review 优先级。

- **#7737** — Slack 设置文档漂移修复（8月19日开，一周）
  https://github.com/nearai/ironclaw/pull/7737
  文档与代码不同步的问题越小越容易被忽略，但容易误导用户，建议尽快合入。

### 需要维护者关注的新 Bug
- **#7888** — 获取日志挂起（多实例复现）
  https://github.com/nearai/ironclaw/issues/7888
  两个独立实例均复现，说明不是偶发环境问题，可能涉及后端日志流或前端轮询逻辑缺陷。建议优先排查。

---

**日报总结**：IronClaw 正处在一个较高强度的工程化冲刺期——设计系统、CI、通知中心三大主线均有实质性产出。风险点集中在 Reborn 扩展的性能与循环控制，以及 Telegram 通道的端到端体验。建议在下一个版本中优先处理 #7892/#7891 的性能类问题，并评估将 #7888 提升为 P1。社区侧，Slack 深化集成与 WebUI 语音输入是清晰的功能需求信号，可作为路线图参考。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期**: 2026-08-26  
**数据窗口**: 2026-08-25 至 2026-08-26

---

## 1. 今日速览

过去24小时内，LobsterAI 项目保持了较高的迭代节奏：共产生 **1 条 Issue**、**11 条 PR**（其中 9 条已合并/关闭），并发布了 **2 个新版本**（2026.8.25 与 2026.8.21）。本日核心工作集中在 **资料库（Library）功能优化**、**设置页面模型目录（Plan Model Catalog）** 以及 **埋点分析与发布转化归因** 三大方向，均为合并状态，项目整体推进迅速。社区侧唯一的新 Issue 为微信群已满的运营反馈，侧面反映用户活跃度较高。`dependabot` 与标记为 `stale` 的旧 PR 在本日批量关闭，维护者正在积极清理技术债。

---

## 2. 版本发布

### 🔖 LobsterAI 2026.8.25（发布于 2026-08-25）

**主要更新内容：**
- **feat(library)**（PR #2513、#2524、#2526 等）：增强跨平台缩略图生成能力；优化本地产物（Artifacts）的生命周期管理与预览/操作体验。
- **修复与优化**：对本地服务的预览展示、后台刷新闪烁等体验问题进行了集中修复。

**破坏性变更**：未见明确标注的破坏性变更。

**迁移注意事项**：由于涉及本地产物生命周期与预览逻辑调整，建议用户升级后重新生成或刷新一次已有的 Artifact 预览；若使用企业级本地服务部署，请同步更新后端存储与文件监听配置。

---

### 🔖 LobsterAI 2026.8.21（发布于 2026-08-21）

**主要更新内容：**
- **feat(dsh)**（PR #2515、#2516）：为 DS Hook 引入使用分析能力（启用开关与工作台打开行为）；更新 `dsh` 至 `0.1.1-rc.1`。
- **refactor(dsh)**：重构使用分析逻辑，提升稳定性。

**迁移注意事项**：若已集成 `dsh` 插件，建议升级至最新版本以保持 API 兼容。

---

## 3. 项目进展

今日合并/关闭的 PR 数量为 **9 条**，主要集中在以下功能主线：

### 🔨 资料库（Library）体验优化（合并）
- **PR #2533** — `fix(artifacts): 区分网页与本地服务的预览展示`  
  将 HTML 网页与本地服务拆分为独立展示类型，补充图标映射、中英文文案与测试，并更新设计文档。提升了 Artifact 预览的语义清晰度。
- **PR #2531** — `fix(library): 修复本地产物后台刷新闪烁`  
  拆分首次加载、后台刷新与分页追加状态，避免内容退回整页骨架屏；支持批量查询接口与本地产物定向更新；合并历史回填与文件监听事件，减少并发请求。
- **PR #2529** — `feat(analytics): 完善资料库埋点与发布转化归因`  
  新增曝光、筛选、搜索、预览、收藏及刷新行为埋点；采用区间数据记录搜索行为以保护隐私；串联页面、文件分享与发布限制弹窗的行为上下文；实现发布 CTA 到付费状态的七天末次触点归因。

### ⚙️ 设置与 UI 优化（合并）
- **PR #2530** — `feat(settings): add plan model catalog`  
  在自定义模型设置上方新增“计划模型”标签页，加载定价目录中的文本、图像与视频模型，并以分类卡片展示；附带轻量级诊断功能。
- **PR #2535** — `feat(settings): add plan model catalog`（紧随 #2530 的后续调整，已关闭）
- **PR #2532** — `fix(sidebar): fade out login promo tip`  
  登录推广提示在 5 秒后淡出，并在认证状态变化时清理计时器，改善用户体验。

### 📦 版本发布与依赖维护（合并）
- **PR #2534** — `Release/2026.8.20`：集成本周期所有功能与修复。
- **PR #1275、#1276** — 由 `dependabot` 发起的 CI 依赖升级（`actions/stale`、`actions/first-interaction`），已关闭，标记为 stale。

> 说明：PR #1159（session fork 功能）仍为打开状态，未在本日合并。

---

## 4. 社区热点

本日社区讨论热度较低，仅 1 条新 Issue 产生：

- **Issue #2536 — [OPEN] 微信群已满人**（作者：MurrayHubert，评论 1）  
  🔗 https://github.com/netease-youdao/LobsterAI/issues/2536  
  用户反馈官方微信群已满，期望开设新群。虽然技术含量不高，但背后反映的是社区活跃度提升带来的用户支持渠道扩容需求。维护者可考虑建立新群或提供更高效的反馈渠道。

其余 PR 均以开发推进为主，暂未形成高互动讨论。

---

## 5. Bug 与稳定性

本日未报告严重 Bug 或崩溃，已合并的 PR 中包含若干体验修复：

| 严重程度 | 问题描述 | 状态 | 对应修复 PR |
|---------|---------|------|------------|
| 中 | 本地产物后台刷新时页面闪烁，已有内容退回整页骨架屏 | 已修复（合并） | [#2531](https://github.com/netease-youdao/LobsterAI/pull/2531) |
| 低 | 网页与本地服务在 Artifact 预览中展示逻辑混淆 | 已修复（合并） | [#2533](https://github.com/netease-youdao/LobsterAI/pull/2533) |
| 低 | 登录推广提示遮挡侧边栏，且未随认证状态清理 | 已修复（合并） | [#2532](https://github.com/netease-youdao/LobsterAI/pull/2532) |

未发现有尚未修复的回归问题或崩溃报告。

---

## 6. 功能请求与路线图信号

### 用户直接请求
- **微信群扩容（#2536）**：属于运营层面的用户支持需求，预计可通过社区管理解决，不会直接进入功能路线图。

### 从 PR 中观察到的路线图趋势
- **资料库（Library）成为重点投入方向**：连续多个 PR（#2529、#2531、#2533）围绕资料库的埋点、刷新体验、预览语义展开，暗示官方正在将资料库打造为核心功能模块，后续可能向“知识管理中枢”方向发展。
- **商业化能力持续增强**：`plan model catalog`（#2530）与“发布 CTA 到付费订阅归因”（#2529）表明项目正在完善付费转化路径，下一版本可能进一步强化订阅权益与模型目录的联动。
- **隐私友好型埋点**：使用区间数据而非原始搜索内容，体现了对用户隐私的重视，符合现代数据合规趋势。

---

## 7. 用户反馈摘要

- **Issue #2536** 中用户 `MurrayHubert` 反馈：“WeChat group is Full. Anticipating for another wechat group! Thanks.” 表明用户希望加入官方微信群以获取支持或参与交流，侧面印证了项目社区活跃度上升，但当前用户支持渠道容量已近饱和。

未收到其他明确的产品功能投诉或使用不满反馈。整体用户声音偏向正面与建设性。

---

## 8. 待处理积压

以下 PR 长期未合并，需维护者关注：

- **PR #1277** — `chore(deps-dev): bump the electron group across 1 directory with 2 updates`  
  🔗 https://github.com/netease-youdao/LobsterAI/pull/1277  
  创建于 2026-04-02，更新于 2026-08-25。将 Electron 从 40.2.1 升级至 43.4.1。长时间未合并，可能涉及兼容性验证，建议评估并完成升级或关闭。若长期不处理，建议明确标注阻塞原因。

- **PR #1159** — `feat(cowork): add session fork`  
  🔗 https://github.com/netease-youdao/LobsterAI/pull/1159  
  创建于 2026-03-31，仍为打开状态。该功能允许用户从会话详情页创建分支会话，对协作场景有明确价值，建议排期评审与测试。

---

## 📊 项目健康度小结

| 维度 | 状态 |
|------|------|
| 迭代速度 | ⭐⭐⭐⭐⭐ 过去24小时合并 9 条 PR，发布 2 个版本，节奏密集 |
| 代码质量 | ⭐⭐⭐⭐ 多数修复附带测试补充，埋点设计注重隐私 |
| 社区活跃 | ⭐⭐⭐⭐ 新 Issue 较少但用户活跃，渠道扩容需求出现 |
| 技术债清理 | ⭐⭐⭐ 部分 stale PR 被关闭，但仍有依赖升级 PR 积压 |
| 风险 | 低，无严重 Bug 或回归报告 |

> 数据来源：[LobsterAI](https://github.com/netease-youdao/LobsterAI) · 统计周期：2026-08-25 至 2026-08-26

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-08-26

## 1. 今日速览

过去 24 小时项目保持中高活跃度：共 2 条 Issue 更新（1 新开、1 关闭）、5 条 PR 更新（4 个待合并、1 个已合并）。无新版本发布。值得关注的变化集中在工具链稳定性和沙箱后端扩展两个方向：Brave 搜索参数验证、OpenAI 安全对象模式、Fastmail MCP OAuth 修复等 PR 均在本日推进，同时一个 Kubernetes 沙箱后端的功能请求被社区重新激活讨论。总体而言，项目处于快速迭代期，代码质量与工具兼容性改善明显，但功能请求积压和长周期 PR 合并节奏仍需关注。

---

## 3. 项目进展

本日无新版本发布，重要代码变更为 1 条 PR 被合并，另有 3 条 PR 处于待合并状态，整体推进速度良好。

### 已合并

- **[#1243] fix(cron): preserve delivered channel context** — `rubenssoto`  
  **状态**: 已关闭（合并）  
  修复了定时消息在同步至 WhatsApp 或其他渠道后丢失上下文的问题。核心改动是让 cron 执行保持隔离，但将最终投递的文本以 assistant 消息形式追加到目标会话中，并通过精确渠道 ID 解析历史。  
  该修复直接改善了多渠道场景下的消息连贯性，是对 cron 任务与即时通讯渠道集成的一次稳定性补强。  
  https://github.com/moltis-org/moltis/pull/1243

### 待合并（均更新于本日）

- **[#1245] fix(tools): validate Brave search parameters** — `rubenssoto`  
  仅在当前搜索提供商为 Brave 时暴露本地化参数，并在工具 Schema 中限制为受支持枚举；在构建请求前规范化国家、语言、UI 语言和新鲜度值，不支持的请求降级到 `ALL`。  
  这是对工具 Schema 精确性的又一次收紧，可避免无效参数导致的运行时错误并提升不同搜索引擎间的兼容性。  
  https://github.com/moltis-org/moltis/pull/1245

- **[#1244] Fix Fastmail MCP OAuth scope registration** — `penso`  
  修复 MCP OAuth 发现过程中错误使用授权服务器宽泛 scope 目录的问题，改为优先使用受保护资源 scope，并在 RFC 7591 动态客户端注册中包含所选 scope；同时新增 Fastmail 回归测试。对于 MCP 生态集成可靠性和未来第三方服务接入质量有直接帮助。  
  https://github.com/moltis-org/moltis/pull/1244

- **[#1232] fix(tools): make object schemas OpenAI-safe** — `IlyaBizyaev`  
  针对 OpenAI strict tool schema 要求，补全 webhook patch 字段声明，并将 MCP 环境变量转为固定 name/value 条目，避免 Codex 只能发送 null 或空值——修复了对象结构在严格模式下被破坏导致数据丢失的问题。  
  该修复涉及所有使用对象类型工具的后端兼容性，是工具互操作性的关键改进。  
  https://github.com/moltis-org/moltis/pull/1232

---

## 4. 社区热点

本日讨论热度最高的条目是 **Issue #1118**，这也是过去 24 小时唯一有评论互动的 Issue。

- **[#1118] [Feature]: Add Kubernetes-native sandbox backend with runtimeClassName support** — `AzgadAGZ`  
  **评论**: 2 | 👍: 1 | 更新于 08-25  
  这条功能请求创建于 6 月 12 日，今日被社区再次关注。核心诉求是让 Moltis 通过 `runtimeClassName` 挂接 Kata Containers、gVisor 等 OCI 兼容运行时，为代理命令执行提供 VM 级隔离的临时 Pod 后端。评论背后反映出用户对**更强隔离性、企业级资源调度、以及与 Kubernetes 基础设施共存**的现实需求，尤其是面对不可信 LLM 生成的命令时，安全边界必须有更坚固的默认选项。该 Issue 也是当前讨论中唯一带正向反馈（👍）的条目，说明其需求迫切性和认可度均较高。  
  https://github.com/moltis-org/moltis/issues/1118

---

## 5. Bug 与稳定性

本日仅 1 条 Bug 报告，且已关闭，稳定性整体可控。

- **[中高] [Bug]: Tools stop working in shared Slack channels** — `affanshahid`  
  **状态**: 已关闭（更新于 08-25，报告于 08-21）  
  在共享 Slack 频道中，工具功能停止工作，影响多团队协作场景。该问题在本日被标记为已关闭，未留下评论或关联修复 PR，建议维护者补充关闭原因（是否已在某次提交中修复，或属于使用配置问题），以确保用户可验证并避免重复上报。  
  https://github.com/moltis-org/moltis/issues/1224

**关联信号**：同日合并的 PR #1243 本质上也是渠道上下文丢失问题（面向 cron 消息），说明“多渠道/多会话上下文一致性”是近期稳定性的一个集中关注点。

---

## 6. 功能请求与路线图信号

- **[#1118] Kubernetes 原生沙箱后端** — 新功能请求，目前处于开放状态，已获 1 个 👍。  
  结合已在待合并队列中的 **PR #1199（Coder remote workspace sandbox support）**，可以清晰看到 Moltis 的沙箱后端正在从本地方案走向**多云、多运行时、企业基础设施友好**的扩展方向：
  - #1199 引入 Coder 后端，通过 REST API 创建临时工作区并经 WebSocket 执行命令，支持模板、富参数、TTL、环境别名等，主要由 `penso` 推动；
  - #1118 期望更进一步，直接对接 Kubernetes 原生能力，甚至提供 VM 级隔离的可选运行时。

  两者叠加，暗示下一阶段的路线图将围绕**“可插拔沙箱架构”**展开：从终端用户角度看，这意味着 Moltis 能逐步适配从个人开发机到大型 K8s 集群的不同部署场景。Kubernetes 后端若被纳入开发计划，将成为企业采用的重要催化剂。

  - Issue #1118: https://github.com/moltis-org/moltis/issues/1118  
  - PR #1199: https://github.com/moltis-org/moltis/pull/1199

---

## 7. 用户反馈摘要

基于 Issue #1118 的评论与问题场景（详细评论未完全提供，结合摘要推断）：

- **痛点**：在不可信、由 LLM 生成的命令环境中，当前沙箱隔离能力不足以满足安全预期，尤其是当部署在已有 Kubernetes 基础设施的企业环境中时，用户希望让代理执行直接融入集群治理模型。
- **使用场景**：用户期望 Moltis agents 执行命令时，能够像其他业务工作负载一样接受 Kubernetes 调度，并可通过 `runtimeClassName` 按需选择 Kata Containers 或 gVisor 获得 VM 级加固边界。
- **诉求信号**：该 Issue 已开放超过两个月且仍有活跃讨论，但未看到维护者明确排期，用户期待官方方向性回应（是否接受、计划在哪个版本落地）。

另外从已关闭的 **Bug #1224** 看，有用户实际在 Slack 共享频道这类 B2B/团队协作环境中使用 Moltis 工具，说明产品已在真实组织中承担日常工作任务，任何影响工具可用性的回归都会被快速触发上报。

---

## 8. 待处理积压

以下条目长期存在或处于等待状态，需维护者关注：

- **[#1118] Kubernetes 原生沙箱后端功能请求** — 已开放 2 个月以上，虽然有社区互动，但官方未给出明确回应或里程碑。结合 PR #1199 的进展，建议将两个沙箱扩展工作归入同一路线图，并对社区预期作出同步。  
  https://github.com/moltis-org/moltis/issues/1118

- **[#1199] Coder remote workspace sandbox support** — 创建于 8 月 15 日，已搁置约 10 天（最后更新 8 月 25 日），暂未合并。该 PR 实现完整、文档齐备，且与 #1118 所代表的沙箱扩展方向一致，若长时间未被 review，可能会造成社区贡献者流失或功能分支冲突风险。  
  https://github.com/moltis-org/moltis/pull/1199

- **[#1224] Slack 共享频道工具停止工作（Bug）** — 虽已关闭，但缺少关闭原因说明，建议补充一条注释，否则用户容易误以为问题尚未解决而重新开 Issue，增加维护噪音。  
  https://github.com/moltis-org/moltis/issues/1224

---

**总结**：Moltis 本日无明显版本更新，但通过 PR #1243、#1245、#1232、#1244 展现出对工具 Schema 精准度、MCP 生态集成、多渠道上下文一致性的系统性打磨。沙箱后端扩展（Coder/K8s）是当前最明确的路线图信号，值得密切关注。整体项目健康度良好，主要风险在于长周期 PR 和功能请求的响应节奏需要进一步提速。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-08-26）

## 1. 今日速览

- 过去 24 小时项目活跃度较高：共 33 条 Issue 更新（19 条新开/活跃，14 条关闭），50 条 PR 更新（21 条待合并，29 条合并/关闭），并发布 1 个新版本 v2.1.1-beta.3。
- 社区讨论集中在 Webhook 功能、微信频道思考过程设置、MCP 重连、内存泄漏、长对话性能等问题，多个 Issue 评论数达 5 条以上。
- 项目迭代节奏快，在技能生态、媒体处理、Provider 兼容性、定时任务稳定性等方面均有 PR 合并；但稳定性类 Bug（SSE 循环、长对话卡顿、MCP 会话失效）仍需重点跟踪。
- 总体活跃度评估：高；项目健康度良好，但用户对性能与 IM 渠道体验的反馈值得关注。

---

## 2. 版本发布

### v2.1.1-beta.3

- 发布链接：https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.1-beta.3
- 可见更新内容：
  - chore(console): pin `@agentscope-ai/chat` to `1.1.72`
  - docs(loop-engineering): fix `PluginAPI` casing to `PluginApi`
  - test(integration): expand i…（Release 摘要截断）
- 破坏性变更：未提及，可视为无已知破坏性变更。
- 迁移注意事项：Beta 版本建议在测试环境先行验证；若从较早 Beta 升级，建议清理浏览器缓存并重启后端服务。

---

## 3. 项目进展

今日关闭/合并的 PR 中，值得关注的有：

- **核心依赖升级**：[#7276 chore(deps): bump agentscope to 2.0.7](https://github.com/agentscope-ai/QwenPaw/pull/7276)
- **技能自我进化**：[#2773 feat(skills): add self-evolution skill](https://github.com/agentscope-ai/QwenPaw/pull/2773)
- **媒体读取工具**：[#1228 feat(tools): add read_media tool](https://github.com/agentscope-ai/QwenPaw/pull/1228)
- **定时任务稳定性**：[#1525 fix(cron): isolate invalid persisted schedules](https://github.com/agentscope-ai/QwenPaw/pull/1525)
- **Provider 模型支持**：
  - [#4881 feat(providers): add MiniMax M3](https://github.com/agentscope-ai/QwenPaw/pull/4881)
  - [#2304 fix: treat 404 from models.list as successful connection check](https://github.com/agentscope-ai/QwenPaw/pull/2304)
  - [#1552 feat(providers): add default_headers support](https://github.com/agentscope-ai/QwenPaw/pull/1552)
- **技能 SOP 与判定规则解耦**：[#5414 feat: decouple skill SOP and judgement rules](https://github.com/agentscope-ai/QwenPaw/pull/5414)
- **文档更新**：[#7300 Docs: update scroll context manager blog](https://github.com/agentscope-ai/QwenPaw/pull/7300)

此外，以下待合并 PR 也预示近期功能方向：

- [#7299 fix(console): reject conflicting chat payloads](https://github.com/agentscope-ai/QwenPaw/pull/7299) —— 修复活动 run 下静默丢弃消息 payload 的问题
- [#7293 feat(ci): split integration tests into three parallel shards](https://github.com/agentscope-ai/QwenPaw/pull/7293) —— 集成测试三路并行，提升 CI 效率
- [#7119 fix(security): create the master key file with owner-only permissions](https://github.com/agentscope-ai/QwenPaw/pull/7119) —— 安全加固
- [#7294 feat(media): add opt-in image resizing by pixel limit](https://github.com/agentscope-ai/QwenPaw/pull/7294)
- [#7163 feat: refine session thinking and model management](https://github.com/agentscope-ai/QwenPaw/pull/7163) —— 会话级思考模式 Off/Low/Medium/High
- [#7277 fix(providers): refresh Aliyun and Kimi model catalogs](https://github.com/agentscope-ai/QwenPaw/pull/7277)
- [#7190 feat(qwenpaw-data): PyPI runtime path, docker-compose one-shot demo](https://github.com/agentscope-ai/QwenPaw/pull/7190)

---

## 4. 社区热点

- **Webhook 功能请求**：[#338 [Feature] 建议添加 webhook 功能](https://github.com/agentscope-ai/QwenPaw/issues/338)（评论 9，👍 1）  
  用户诉求：外部软件向 CoPaw 发消息后，CoPaw 可异步回调，或返回一个 key 供用户查询结果。这是自动化集成与异构系统互通的高频需求。

- **微信频道“显示思考过程”设置无效**：[#7258 [Bug] 微信频道的不“显示思考过程”设置无效](https://github.com/agentscope-ai/QwenPaw/issues/7258)（评论 6）  
  设置未启用但实际仍输出思考过程，开关与控制逻辑不一致，直接影响 IM 渠道使用体验。

- **MCP 后端重启后客户端无法自动恢复**：[#6524 [Bug] MCP 后端重启后客户端无法自动恢复](https://github.com/agentscope-ai/QwenPaw/issues/6524)（评论 6）  
  远程 MCP Server 重启后 session 失效，QwenPaw 仍复用旧 `mcp-session-id`，需手动执行 `list mcp` 才能恢复。

- **内存泄漏反馈**：[#5720 [Bug] QwenPaw v1.1.12.post2 内存泄漏反馈](https://github.com/agentscope-ai/QwenPaw/issues/5720)（评论 5，已关闭）  
  两个根因：异步任务泄漏 + HTTP 会话不回收，最终导致进程被杀、数据库写入中断。

- **严重稳定性 Bug**：[#7261 QwenPaw 2.1.1b2 SSE runaway loop](https://github.com/agentscope-ai/QwenPaw/issues/7261)（评论 4，已关闭）  
  agent-to-agent run 后触发 SSE 序列化循环，导致 100% CPU、内存无限增长、服务器完全无响应。

---

## 5. Bug 与稳定性

按严重程度排列：

### 严重
- **[已关闭] [#7261 SSE 序列化循环导致 100% CPU / 内存无限增长 / 服务无响应](https://github.com/agentscope-ai/QwenPaw/issues/7261)**  
  QwenPaw 2.1.1b2，agent-to-agent run 后触发，需确认修复已进入后续版本。
- **[已关闭] [#5720 内存泄漏：64 分钟内存从 150MB 涨至 580MB 后被系统杀掉](https://github.com/agentscope-ai/QwenPaw/issues/5720)**  
  异步任务泄漏 + HTTP 会话不回收，且导致配置损坏。
- **[已关闭] [#7285 长对话性能降级，网页端卡顿导致整机卡顿](https://github.com/agentscope-ai/QwenPaw/issues/7285)**  
  v2.1.1b2，流式输出 1-2 分钟后电脑无法正常使用。

### 中等
- **[Open] [#7218 peer closed connection without sending complete message body](https://github.com/agentscope-ai/QwenPaw/issues/7218)**  
  长文本/推理时间较长时高频出现 `incomplete chunked read`，可能与模型侧超时配置有关。
- **[Open] [#6524 MCP 后端重启后客户端无法自动恢复](https://github.com/agentscope-ai/QwenPaw/issues/6524)**  
  需手动 `list mcp` 重新连接，影响远程 MCP 自动化场景。
- **[Open] [#7258 微信频道“显示思考过程”设置为无效](https://github.com/agentscope-ai/QwenPaw/issues/7258)**  
  开关与实际输出不一致。
- **[Open] [#7296 OpenAI Responses multi-turn fails with 400 “Referenced reasoning item expired”](https://github.com/agentscope-ai/QwenPaw/issues/7296)**  
  OpenCode Zen/Go Muse Spark 等无状态上游多轮对话失败。
- **[Open] [#7298 Desktop 内置 Python 3.11 / OpenSSL 3.0.x 在部分网络被中间盒 RST](https://github.com/agentscope-ai/QwenPaw/issues/7298)**  
  建议桌面 CI 升级到 Python 3.13。

### 较低
- **[Open] [#7291 qwenpaw-creator Windows 11 拉取示例项目报错](https://github.com/agentscope-ai/QwenPaw/issues/7291)**

---

## 6. 功能请求与路线图信号

- **Webhook 功能**：[#338](https://github.com/agentscope-ai/QwenPaw/issues/338)  
  评论最多、标记 good first issue，是集成能力的重要方向。

- **Workspace 级 Skill 预加载策略**：[#7182 [Feature] Add workspace-scoped Skill preload policy](https://github.com/agentscope-ai/QwenPaw/issues/7182)  
  为特定工作区优化 Skill 按需/预加载，减少首轮模型重复发现调用。

- **图片像素限制**：[#7294 PR 已实现 opt-in image resizing](https://github.com/agentscope-ai/QwenPaw/pull/7294)  
  通过 `QWENPAW_MAX_IMAGE_PIXELS` 控制，避免大图超出模型上下文限制。

- **会话级思考模式**：[#7163 PR 已实现 Session thinking modes](https://github.com/agentscope-ai/QwenPaw/pull/7163)  
  Off/Low/Medium/High 四档，并跨设备同步。

- **模型目录刷新**：[#7277 刷新阿里云/Kimi 模型目录](https://github.com/agentscope-ai/QwenPaw/pull/7277)  
  清理已下线模型 ID，补齐新上线模型。

- **Creator 1.1.1**：[#7274 feat(creator) 1.1.1](https://github.com/agentscope-ai/QwenPaw/pull/7274)  
  支持网站/桌面操作录制、Bailian Wan3 视频、APE-benchmark review operators。

- 其他用户建议：统一工具面板（[#7013](https://github.com/agentscope-ai/QwenPaw/issues/7013)）、默认折叠推理过程（[#7196](https://github.com/agentscope-ai/QwenPaw/issues/7196)）、任务完成提醒（[#7263](https://github.com/agentscope-ai/QwenPaw/issues/7263)）、后台任务自动清除（[#7280](https://github.com/agentscope-ai/QwenPaw/issues/7280)）、弹窗点选选项（[#7279](https://github.com/agentscope-ai/QwenPaw/issues/7279)）、皮肤网关（[#7287](https://github.com/agentscope-ai/QwenPaw/issues/7287)）等，均可作为后续路线图参考。

---

## 7. 用户反馈摘要

- **性能敏感型用户占比高**：多位用户反馈长会话 + 流式输出导致浏览器掉帧、整机卡顿（[#7129](https://github.com/agentscope-ai/QwenPaw/issues/7129)、[#7285](https://github.com/agentscope-ai/QwenPaw/issues/7285)），说明前端渲染与长上下文管理仍是体验瓶颈。
- **IM 渠道问题集中**：微信频道“显示思考过程”设置无效（[#7258](https://github.com/agentscope-ai/QwenPaw/issues/7258)）；QQ 中重启 CoPaw 会丢失最后聊天记忆（[#7297](https://github.com/agentscope-ai/QwenPaw/issues/7297)）。
- **MCP 稳定性影响自动化**：远程 MCP Server 重启后 session 失效，需手动恢复（[#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524)），对运维场景不友好。
- **Windows 安装/更新体验差**：浏览器扩展 NM host 锁文件导致 NSIS 多次报错（[#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810)），用户期望安装器覆盖前自动终止占用进程。
- **UI/交互细节反馈**：应用市场已安装应用 hover 仍显示“安装”（[#7228](https://github.com/agentscope-ai/QwenPaw/issues/7228)）；左侧菜单“应用”改名“市场”不合理（[#7256](https://github.com/agentscope-ai/QwenPaw/issues/7256)）。
- **积极的建议方向**：Webhook 异步通知、任务完成视觉提醒、选项点选、后台任务自动清理、推理过程默认折叠等，显示用户希望 CoPaw 更贴近“生产力工具”定位。

---

## 8. 待处理积压

- **[#338 Webhook 功能请求](https://github.com/agentscope-ai/QwenPaw/issues/338)**  
  创建于 2026-03-02，已持续 5 个月，评论 9 条仍为 Open。建议维护者明确排期或回应用户。

- **[#6524 MCP 后端重启后客户端无法自动恢复](https://github.com/agentscope-ai/QwenPaw/issues/6524)**  
  创建于 2026-07-28，影响远程 MCP 用户，尚无修复 PR 关联。

- **[#6810 Windows 安装/更新需先终止占用进程](https://github.com/agentscope-ai/QwenPaw/issues/6810)**  
  创建于 2026-08-07，有清晰复现路径，等待安装器逻辑修复。

- **开放 PR [#7119 master key 文件权限安全修复](https://github.com/agentscope-ai/QwenPaw/pull/7119)**  
  安全相关问题，建议优先 review 合并。

- **开放 PR [#6399 ReMeLightMemoryCard reranker UI](https://github.com/agentscope-ai/QwenPaw/pull/6399)**  
  创建于 2026-07-23，已超一个月未合并，建议维护者推动或关闭。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报（2026-08-26）

---

## 今日速览

过去 24 小时项目保持高活跃度：共产生 **50 条 Issue 更新**（新开/活跃 38，关闭 12）与 **50 条 PR 动态**（待合并 49，合并/关闭 1），无新版本发布。今日新报告 1 个 S1 级 Bug（工具执行错误路径丢弃详细错误体，[#10357](https://github.com/zeroclaw-labs/zeroclaw/issues/10357)），对应修复 PR 已在当日提交；多条高优先级安全修复与架构 RFC 在同步推进中。值得关注的健康度信号是**合并管道阻塞**——PR 合并率仅 2%，大量 `do-not-merge`/`needs-maintainer-review` 标签堆积，人工审查是当前瓶颈。社区讨论重心集中在工作流治理（[#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)）与架构边界定义（[#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103)、[#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396)），表明项目正从功能堆叠期过渡到架构收敛与治理规范化阶段。

---

## 版本发布

无新版本发布（最新版本停留在 0.8.4 beta/RC 阶段）。

---

## 项目进展

今日无显著 PR 合并（仅 1 条合并/关闭，未进入评论榜前 20）。但从 **12 条已关闭 Issue** 可以看出以下问题已解决并落地：

- **[#9206](https://github.com/zeroclaw-labs/zeroclaw/issues/9206)（S0）**：agent cron 任务间歇性将 `workspace_dir` 解析为 `/` 的安全 Bug 已关闭，对应了 runtime/daemon 路径解析的修复。
- **[#10257](https://github.com/zeroclaw-labs/zeroclaw/issues/10257)**：`cron update --command` 在 agent 任务上写入未使用列的问题已修复，CLI 与 API 行为达成一致。
- **[#9663](https://github.com/zeroclaw-labs/zeroclaw/issues/9663)**：Voice Wake 频道已绑定到所属 agent 的转录提供者，修复了将频道别名误传为 provider key 的问题。
- **[#10271](https://github.com/zeroclaw-labs/zeroclaw/issues/10271)**：三处 crate 本地 `floor_char_boundary` 副本已整合到 std 实现，完成 UTF-8 截断审计的后续工作。
- **[#10042](https://github.com/zeroclaw-labs/zeroclaw/issues/10042)**：MSRV CI 中系统依赖安装占用完整超时的问题已解决。
- **[#9769](https://github.com/zeroclaw-labs/zeroclaw/issues/9769)**：日志持久化关闭时，`vi_verify` 被扣留能力的运营通知不再消失，可见性得到保证。

整体来看，项目在 **安全修复、CI 稳定性、CLI/API 一致性**三个方向均有实际推进。

---

## 社区热点

| Issue | 评论数 | 主题 | 状态 |
|-------|--------|------|------|
| [#6808 Work Lanes & Board Automation RFC](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | 24 | 工作流自动化与标签清理治理 RFC，Rev. 26 | OPEN，已批准，0.8.0 落地中 |
| [#8692 维护者决策队列 Tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | 14 | 为 RFC/设计问题建立维护者决策队列 | OPEN |
| [#9103 权威存储与可插拔富集分离 RFC](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) | 14 | 拆分 memory.backend 的存储与增强职责，8/22 被维护者接管修订 | OPEN，需维护者审查 |
| [#8396 Wire Protocol 一等公民 RFC](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) | 12 | 将 wire protocol 设为 provider 构造与接入的一等概念 | OPEN，需维护者审查 |
| [#9965 并行运行时下可执行测试夹具硬化](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) | 9 | 测试稳定性任务，源于 cron shell 测试失败 | OPEN，in-progress |
| [#8132 Rust/WASM Web UI 原型评估](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) | 9 | 评估 Dioxus/Leptos/Yew 替代 React/Vite 的可行性 | OPEN，需作者行动 |

**分析**：社区讨论热度集中在**治理流程（RFC 管线、看板自动化）**与**架构分层（存储/富集分离、wire protocol 抽象）**。其中 #6808 维持 24 条评论的高讨论度，说明维护者体系建设已成为社区痛点；#9103 和 #8396 分别从数据层和协议层推动架构边界清晰化，且均已进入维护者接管修订阶段，值得重点关注。

---

## Bug 与稳定性

按严重程度排列：

**S0（数据丢失 / 安全风险）**

- **[#9947](https://github.com/zeroclaw-labs/zeroclaw/issues/9947)**：cron 工具未按所属 agent 隔离，任意 agent 可读/触发/修改/删除其他 agent 的任务。跨 agent 访问控制缺失。**状态**：OPEN，accepted，in-progress，暂无关联 PR。
- ~~[#9206](https://github.com/zeroclaw-labs/zeroclaw/issues/9206)~~：agent cron 间歇性将 workspace_dir 解析为 `/`。**状态**：已修复关闭。

**S1（工作流阻塞）**

- **[#10357](https://github.com/zeroclaw-labs/zeroclaw/issues/10357)**（今日新增）：工具调用失败时错误消息仅剩 “HTTP 400” 等裸状态，详细错误体在 `tool_execution.rs` 中被丢弃。**状态**：OPEN，accepted，已有修复 PR [#10364](https://github.com/zeroclaw-labs/zeroclaw/pull/10364) 在当日提交，保留详细输出作为 fallback。
- ~~[#10042](https://github.com/zeroclaw-labs/zeroclaw/issues/10042)~~：MSRV CI 系统依赖安装可耗尽 20 分钟任务超时。**状态**：已修复关闭。

**S2（降级行为）**

- **[#9872](https://github.com/zeroclaw-labs/zeroclaw/issues/9872)**：bounded 委托模式下，被委托 agent 的文件系统操作错误地解析到委托者工作区。**状态**：OPEN，accepted。
- ~~[#10058](https://github.com/zeroclaw-labs/zeroclaw/issues/10058)~~：ZeroCode 文件资源管理器搜索模式下上下键导航失效。**状态**：已修复关闭。
- ~~[#8999](https://github.com/zeroclaw-labs/zeroclaw/issues/8999)~~：流式用户消息被 Ollama 小模型误判为日志/API 载荷。**状态**：已带 follow-up 关闭。
- ~~[#10257](https://github.com/zeroclaw-labs/zeroclaw/issues/10257)~~：cron update --command 在 agent 任务上写入未使用列。**状态**：已修复关闭。

**S3（小问题 / 低风险）**

- **[#10103](https://github.com/zeroclaw-labs/zeroclaw/issues/10103)**：ZeroCode 健康面板中法语/西语标签长度超出固定宽度，导致数值错位。**状态**：OPEN，good first issue。

---

## 功能请求与路线图信号

**架构级 RFC（可能进入下一版本）**

- **[#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396)**：将 wire protocol 提升为 provider 构造和接入的一等成员，影响所有 provider 的接入方式。
- **[#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103)**：分离权威内存存储与可选富集连接器，打破 `memory.backend` 的单体约束。
- **[#10360](https://github.com/zeroclaw-labs/zeroclaw/issues/10360)**（今日新开）：可选的本地家庭边缘网格，支持 pull worker 与签名回执，让多台闲置设备组成分布式运行时。
- **[#10346](https://github.com/zeroclaw-labs/zeroclaw/issues/10346)**（今日新开）：让 Gateway 和 Channels 复用心跳 worker 的 MCP 注册表缓存模式，避免每次启动三次重复连接。

**功能型 PR（待合并，指向实质化新能力）**

- **[#10358](https://github.com/zeroclaw-labs/zeroclaw/pull/10358)**：为 Mattermost 渠道增加审批提示——该渠道目前完全没有审批路径。
- **[#10356](https://github.com/zeroclaw-labs/zeroclaw/pull/10356)**：新增 AnySearch 网页搜索 provider，支持匿名请求与可选 Bearer 认证。
- **[#10369](https://github.com/zeroclaw-labs/zeroclaw/pull/10369)**：为 skill 定义的 HTTP 工具增加出口边界（参数编码、地址固定、禁用代理/重定向、1 MiB 响应上限）。
- **[#10351](https://github.com/zeroclaw-labs/zeroclaw/pull/10351)**：强制执行执行树迭代预算，通过 `runtime_profiles.<name>.max_execution_tree_iterations` 控制前/后台任务 fan-out，对应 Issue [#9323](https://github.com/zeroclaw-labs/zeroclaw/issues/9323)。
- **[#10363](https://github.com/zeroclaw-labs/zeroclaw/pull/10363)**：将 Git channel 纳入官方制品（容器、Nix、AUR、Windows、Docker tag），回应 [#10138](https://github.com/zeroclaw-labs/zeroclaw/issues/10138)。

结合 [v0.9.0 Tracker #7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) 与这些新提交，下一版本的方向已比较清晰：**多代理安全边界**（cron 隔离、委托文件系统隔离、执行树预算）、**渠道能力补齐**（Mattermost 审批、Git 官方制品）、**部署模型扩展**（Hailo-Ollama、边缘网格、Zerorelay 多机中继）。

---

## 用户反馈摘要

- **治理负担大于功能需求**：[#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) 由资深维护者 Audacity88 发起，明确表达“让维护者不再手工维护另一套系统”，看板自动化、标签清理、工作流路由正在成为社区核心诉求。
- **本地小模型用户困惑**：[#8999](https://github.com/zeroclaw-labs/zeroclaw/issues/8999) 展示了零代码/TUI 下 Ollama 用户将普通问候误认为协议/日志数据，说明面向本地模型的消息格式化仍需打磨。
- **多语言 UI 质量问题**：[#10103](https://github.com/zeroclaw-labs/zeroclaw/issues/10103) 中法语/西语标签溢出，暴露了非英语用户的界面体验短板。
- **CLI/API 行为一致性**：[#10257](https://github.com/zeroclaw-labs/zeroclaw/issues/10257) 显示 `cron update --command` 在 agent 任务上写入无意义列，用户必须依赖 API 而非 CLI 来完成同一操作，CLI 与 API 路径存在行为分叉。
- **开发体验受测试稳定性影响**：[#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) 中并行运行时门禁下测试夹具不稳定，间接拖慢了开发者的本地验证循环。
- **对安全响应速度的正面反馈**：#9206（S0 级安全 Bug）从 7/20 提出到关闭约一个月，期间有完整的状态跟踪（in-progress → accepted → closed），表明项目对高危安全问题的处置流程是有效的。

---

## 待处理积压

以下为长期未闭合或等待关键审查的重要事项：

**需要维护者审查/决策的 RFC**

- [**#6808**](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)：Work Lanes/看板自动化 RFC，6 月 20 日创建，已迭代 26 版，处于 rollout 阶段，但仍保持 OPEN 作为跟踪器。
- [**#8396**](https://github.com/zeroclaw-labs/zeroclaw/issues/8396)：wire protocol RFC，6 月 27 日创建，带 `needs-maintainer-review` 标签。
- [**#9103**](https://github.com/zeroclaw-labs/zeroclaw/issues/9103)：存储/富集分离 RFC，7 月 16 日创建，`risk:high` + `needs-maintainer-review`。

**等待作者或 CI 的长期开放 PR**

- [**#9109**](https://github.com/zeroclaw-labs/zeroclaw/pull/9109)：Hailo-Ollama 原生支持，7 月 17 日创建，`do-not-merge` 且体积 XL，已停留 40 天。
- [**#9447**](https://github.com/zeroclaw-labs/zeroclaw/pull/9447)：Anthropic 终端响应不完整分类修复，7 月 27 日创建，带 `needs-author-action`。
- [**#9935**](https://github.com/zeroclaw-labs/zeroclaw/pull/9935)：vi 未知约束类型保留与严格模式读取，8 月 12 日创建，`do-not-merge` + `needs-maintainer-review`，安全相关不应久拖。
- [**#10142**](https://github.com/zeroclaw-labs/zeroclaw/pull/10142)：ZeroRelay 安全传输（盲中继 + 原生 mTLS），8 月 19 日创建，带 `needs-author-action`。
- [**#10246**](https://github.com/zeroclaw-labs/zeroclaw/pull/10246)：RPC 会话暴露已配置通道，8 月 22 日创建，带 `needs-author-action`。

**早期创建但推进缓慢的 Feature**

- [**#7461**](https://github.com/zeroclaw-labs/zeroclaw/issues/7461)：Windows/macOS 平台 CI 测试扩展，6 月 10 日创建，in-progress，等待落地。
- [**#8132**](https://github.com/zeroclaw-labs/zeroclaw/issues/8132)：Rust/WASM Web UI 原型评估，6 月 22 日创建，仍处于 `needs-author-action`，没有实际原型产出。

**风险提示**：当前 49 条 PR 待合并、仅 1 条合并/关闭的状态若持续，可能形成贡献者挫败感。建议维护者重点关注 `do-not-merge` 标签的 4 条高优安全 PR（[#10370](https://github.com/zeroclaw-labs/zeroclaw/pull/10370)、[#9935](https://github.com/zeroclaw-labs/zeroclaw/pull/9935)、[#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109)、[#10142](https://github.com/zeroclaw-labs/zeroclaw/pull/10142)），它们堵塞了项目在凭据安全、约束验证、Hailo 支持与传输安全四条关键链路。

---

*本日报基于 ZeroClaw GitHub 公开数据自动生成，数据截至 2026-08-25 24:00 UTC。所有链接均为对应 Issue/PR 的 GitHub 地址。*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*