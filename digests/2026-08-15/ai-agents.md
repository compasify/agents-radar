# OpenClaw 生态日报 2026-08-15

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-08-14 23:11 UTC

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

# OpenClaw 项目动态日报 — 2026-08-15

## 1. 今日速览

过去24小时，OpenClaw 项目保持极高活跃度：500条 Issue 更新（488条新开/活跃，12条关闭）与500条 PR 更新（404条待合并，96条已合并/关闭）均处于高位，显示社区参与和开发节奏均十分强劲。无新版本发布，项目处于两次发布之间的密集修整期。最受关注的事件是 #121058「静默回复失败复发」累计94条评论成为社区焦点，以及 #91588「网关内存泄漏至OOM」等多项 P0/P1 级稳定性问题仍在推进中。整体来看，项目在稳定性修复、多通道适配（Telegram/Matrix/WhatsApp）与 UI 打磨三个方向均有大量 PR 在途，健康度中等偏上，但长期未决的高优先级 Bug 积压仍需警惕。

---

## 2. 版本发布

过去24小时内无新版本发布。

---

## 3. 项目进展

过去24小时内共有96个 PR 被合并或关闭。以下为本日关键 PR 进展：

**🔧 稳定性与修复**
- [#123495 fix(sessions): prevent cleanup from deleting readable transcripts](https://github.com/openclaw/openclaw/pull/123495) — 修复 `openclaw sessions cleanup --fix-missing` 在单条 transcript 行损坏时将整个可读 SQLite 内容误删的问题，关闭 #119085。
- [#123877 fix: honor provider timeouts during stuck-session recovery](https://github.com/openclaw/openclaw/pull/123877) — 修复卡死会话恢复逻辑无视用户配置的 provider 超时、过早中止正常模型请求的问题，关闭 #121018。
- [#123827 fix(compaction): preserve generated summaries when suffix context overflows](https://github.com/openclaw/openclaw/pull/123827) — 修复压缩后缀过长耗尽 artifact 预算导致已生成的摘要被丢弃的问题，关闭 #119272。
- [#121106 fix(sessions): treat non-positive pruneAfterMs as disabled instead of pruning all entries](https://github.com/openclaw/openclaw/pull/121106) — P0 级别修复：插件传入 `pruneAfterMs: 0` 会导致会话维护逻辑删除**所有**会话条目，现改为非正值视为禁用。
- [#121044 fix: memory_search rebuilds the whole index after an ordinary zero-hit query](https://github.com/openclaw/openclaw/pull/121044) — 修复零命中查询触发全量索引重建的性能问题，关闭 #121043。

**📱 多通道适配**
- [#123837 feat(telegram): support copy-text presentation buttons](https://github.com/openclaw/openclaw/pull/123837) — 为 Telegram 富文本消息增加原生一键复制按钮（关联 #36105），面向复制命令/ID/令牌等场景。
- [#122862 fix(matrix): resolve exact room session routes](https://github.com/openclaw/openclaw/pull/122862) — 修复 Matrix 显式房间投递无法在默认 DM 作用域下推导会话、必须手动传 `--session-key` 的问题。
- [#120919 fix: preserve Bedrock discovered image capability](https://github.com/openclaw/openclaw/pull/120919) — 修复用户显式配置 Bedrock 模型列表后丢失 Claude 模型 image capability 的问题，关闭 #71921。

**🎨 UI/UX 改进**
- [#123356 improve(control-ui): stage slash command arguments in the composer](https://github.com/openclaw/openclaw/pull/123356) — Control UI 编辑器支持斜杠命令参数暂存，改善交互流畅度（UI 阶段，协议决策仍开放）。
- [#123856 refactor(ui): trim pairing uncertainty state](https://github.com/openclaw/openclaw/pull/123856) — 清理 Control UI 配对状态中冗余的 `deviceName` 状态字段。
- [#123682 improve(ui): consolidate sidebar issues into a quiet panel](https://github.com/openclaw/openclaw/pull/123682) + [#123597 improve(ui): make sidebar updates a focused call to action](https://github.com/openclaw/openclaw/pull/123597) + [#123582 improve(ui): unify sidebar account footer and identity menu](https://github.com/openclaw/openclaw/pull/123582) — 三个 UI 改进 PR 形成系列，统一侧边栏操作与信息层级（依赖链 #123597 → #123582）。

**🛡️ 其他**
- [#123866 fix(skills): repair valid skills above the reviewer read cap](https://github.com/openclaw/openclaw/pull/123866) — 修复超过 20,000 字符的 Skill Workshop 技能只能读取截断前缀、无法获得自主修复 receipt 的问题，关闭 #123833。

整体来看，项目正在体系化推进「会话数据安全」「通道路由准确性」「UI 操作效率」三条主线，每日合并量保持在较高水平。

---

## 4. 社区热点

### 最热 Issue：#121058 — 静默回复失败复发（94条评论）
[openclaw/openclaw Issue #121058](https://github.com/openclaw/openclaw/issues/121058)

该 Issue 指出 #116277 关闭后，静默回复失败（silent reply failure）仍持续发生，监控 cron 仍在记录新事件。**94条评论**说明大量用户正在遭遇相同问题但此前被误判为已解决。核心诉求：修复不彻底、缺少根因分析与可观测性，用户希望维护者重新打开并给出真正的解决方案，而非关闭标记了事。

### P0 热点：#91588 — 网关内存泄漏导致 OOM（24条评论）
[openclaw/openclaw Issue #91588](https://github.com/openclaw/openclaw/issues/91588)

RSS 从启动时约 350MB 增长到 15.5GB 并触发 OOM kill，导致 `launchd-handoff` 反复重启。该 Issue 自 6 月 9 日创建至今仍未修复，标签为 `P0` + `issue-rating: 🐚 platinum hermit`，是项目中最严重的稳定性债务之一。

### 讨论趋势：#121953 — DeepSeek 上 Cron 代理 stall（20条评论）
[openclaw/openclaw Issue #121953](https://github.com/openclaw/openclaw/issues/121953)

用户发现 OpenClaw 在 cron 消息前加 `[cron:<jobId> <name>]` 前缀后，DeepSeek API 边缘节点会将该请求降优先级处理，导致 cron 任务停滞数十秒至数分钟。这一「前缀导致降级」的现象反映了第三方 API 行为对 agent 框架设计的反向约束，是框架与模型提供商生态博弈的典型案例。

### 活跃 PR 系列：vyctorbrzezowski 的 UI 改进三联
[#123682](https://github.com/openclaw/openclaw/pull/123682) · [#123597](https://github.com/openclaw/openclaw/pull/123597) · [#123582](https://github.com/openclaw/openclaw/pull/123582)

同一位贡献者连续提交 3 个 UI 改进 PR（侧边栏问题面板、更新 CTA 聚焦、账户页脚统一），配合此前已合并的 #123356，OpenClaw 团队与社区正在系统性重做 Control UI 的交互设计。三个 PR 形成依赖链，显示这是一次有规划的 UI 重构而非零散修补。

---

## 5. Bug 与稳定性

按严重程度排列如下：

### 🔴 P0 / 严重
| Issue | 问题 | 状态 | Fix PR |
|---|---|---|---|
| [#91588 网关内存泄漏 — RSS 350MB→15.5GB 致 OOM](https://github.com/openclaw/openclaw/issues/91588) | 内存泄漏导致反复 OOM 崩溃，6/9 创建至今未修复 | OPEN，awaiting maintainer | 无 |
| [#108435 2026.7.1 更新后 gateway 无法启动](https://github.com/openclaw/openclaw/issues/108435) | 系统d/ollama/手动启动均失败，报 `gateway did not start` | OPEN，needs-info | 无 |
| [#119270 文件工具剥离目标路径前导 @ 符号 — 静默写错/删错文件](https://github.com/openclaw/openclaw/issues/119270) | `write`/`edit`/`apply_patch` 因剥离 `@` 操作错误文件，可能导致数据覆盖 | OPEN，P0 | 无 |

### 🟠 P1 / 高
| Issue | 问题 | 状态 | Fix PR |
|---|---|---|---|
| [#121058 静默回复失败在 #116277 关闭后仍复发](https://github.com/openclaw/openclaw/issues/121058) | 无 queued reply payload，监控持续记录新事件，**94条评论** | OPEN | 无 |
| [#96834 WhatsApp 1:1 入站图片卡住主通道约 3 分钟](https://github.com/openclaw/openclaw/issues/96834) | 多模态图片注入导致 `active_reply_work` 悬挂 | OPEN | 无 |
| [#62505 Coding Agent 完全不完成任务](https://github.com/openclaw/openclaw/issues/62505) | 2026.4.2 起的回归，agent 只发模糊状态更新 | OPEN，needs-maintainer-review | 无 |
| [#121953 Cron agent 在 DeepSeek 上 stall](https://github.com/openclaw/openclaw/issues/121953) | `[cron:` 前缀导致请求被降优先级 | OPEN | 无 |
| [#86215 Codex OAuth 刷新失败可致 agent 卡死数小时](https://github.com/openclaw/openclaw/issues/86215) | 缺少清晰告警与 profile 轮换 | OPEN | 无 |
| [#86214 Codex app-server 在图像/工具请求期间中途关闭](https://github.com/openclaw/openclaw/issues/86214) | 大日志 SQLite 下客户端 mid-turn 中断 | OPEN | 无 |
| [#120563 自定义/Ollama provider 不发送对话历史](https://github.com/openclaw/openclaw/issues/120563) | 每轮固定大小上下文，无视先前的轮次 | OPEN，needs-info | 无 |
| [#99947 Codex harness 镜像会话历史读取失败](https://github.com/openclaw/openclaw/issues/99947) | 临时会话/故障转移时读取失败，共享 app-server client 被过早清理 | OPEN | 无 |
| [#98702 继承的 OpenAI OAuth 在 openclaw runtime 被拒](https://github.com/openclaw/openclaw/issues/98702) | 主 main 使用同一 profile 却成功 | OPEN | 无 |
| [#99910 Memory dreaming 运行卡死事件循环约 10 分钟](https://github.com/openclaw/openclaw/issues/99910) | 2026.6.9 起每次 dreaming promotion 都 peg 主线程 | OPEN | 无 |
| [#107244 WhatsApp 群消息永远不进入入站处理](https://github.com/openclaw/openclaw/issues/107244) | DM 正常，群消息 LID 组不触发 | OPEN | 无 |
| [#106704 sessions_yield 在子代理首轮静默成功](https://github.com/openclaw/openclaw/issues/106704) | 无子代理/无 wake source 时 yield 被误判为 ok | OPEN | [#123834](https://github.com/openclaw/openclaw/pull/123834) |

### 🟡 P2 / 中（部分）
- [#94939 6.x 迁移致 channel conversation-store SQLite 为空（0字节）](https://github.com/openclaw/openclaw/issues/94939) — 有 [fix PR #114287](https://github.com/openclaw/openclaw/pull/114287) 关联
- [#91144 Windows 原生 CLI 网关 Scheduled Task 不保持运行](https://github.com/openclaw/openclaw/issues/91144) — 有 [fix PR 待审](https://github.com/openclaw/openclaw/pull/88084)
- [#97616 未回收 hook/tool 子进程致僵尸累积](https://github.com/openclaw/openclaw/issues/97616) — 无 fix PR
- [#87109 网关空闲时堆内存增长至 1073MB+，cron 静默失败](https://github.com/openclaw/openclaw/issues/87109)
- [#92241 更新/回滚后网关持有陈旧模块路径，入站消息静默丢弃](https://github.com/openclaw/openclaw/issues/92241)
- [#115001 混合记忆搜索经 FTS LIKE 回退返回虚假 1.0 相似度](https://github.com/openclaw/openclaw/issues/115001) — 有 [fix PR #121103](https://github.com/openclaw/openclaw/pull/121103) 关联
- [#120735 Telegram 入站贴纸为原始文件引用，无法被 agent 使用](https://github.com/openclaw/openclaw/issues/120735)
- [#97826 大视频 sendVideo 丢失宽高比](https://github.com/openclaw/openclaw/issues/97826)

**已有关联 fix PR 的 Bug：**
- #121046（memory 子目录 temporalDecay 不生效）→ [PR #121103](https://github.com/openclaw/openclaw/pull/121103)
- #121034（ACP 模型 ref 保留 amazon-bedrock 前缀）→ [PR #121105](https://github.com/openclaw/openclaw/pull/121105)
- #121043（memory_search 零命中重建索引）→ [PR #121044](https://github.com/openclaw/openclaw/pull/121044)
- #121078（automations.update 暴露一律被拒的 agentId 字段）→ [PR #121100](https://github.com/openclaw/openclaw/pull/121100)
- #119272（compaction 摘要丢失）→ [PR #123827](https://github.com/openclaw/openclaw/pull/123827)

---

## 6. 功能请求与路线图信号

### 高潜力纳入下一版本

- **[#10687 Models: 完全动态模型发现（OpenRouter 及更多）](https://github.com/openclaw/openclaw/issues/10687)** — 3👍、10条评论。当前模型选择是静态目录，无法跟上 OpenRouter 等快速变化的模型列表。鉴于 DeepSeek/多 provider 生态的快速发展，此功能预计会进入路线图。
- **[#50093 WhatsApp: 重连后回填错过的消息](https://github.com/openclaw/openclaw/issues/50093)** — P2、platinum hermit 评级。连接中断期间的消息静默丢失，对依赖 WhatsApp 做自动化的重要用户是硬伤。
- **[#88154 Slack Modal 支持](https://github.com/openclaw/openclaw/issues/88154)** — 结构化输入可解锁确认/表单/多步交互，社区有明确需求信号。
- **[#81061 Hook: before_route_inbound_message — 路由前拦截](https://github.com/openclaw/openclaw/issues/81061)** — 3👍，8条评论。为 channel bridging/proxying 提供架构级扩展点，与现有 hook 系统形成互补。
- **[#13219 按模型使用量计费日志](https://github.com/openclaw/openclaw/issues/13219)** — 原生 cost tracking，企业/重度用户强烈需求。

### UI/UX 方向
- [#71142 可配置 Control UI 上传大小限制](https://github.com/openclaw/openclaw/issues/71142) — 5MB 硬编码限制阻碍大图上传。
- [#75947 基于 UX 评分的 UI 质量更新](https://github.com/openclaw/openclaw/issues/75947) — 2👍，与当前 UI 重构潮（#123597/#123682/#123856）方向一致。
- [#17840 可选 reaction-triggered agent turns](https://github.com/openclaw/openclaw/issues/17840) — 轮询/交互式模式的新交互维度。

### 产品决策待定
- **[#96975 隔离子代理完成与父上下文](https://github.com/openclaw/openclaw/issues/96975)** — 12条评论，标签 `needs-product-decision`，涉及子代理内容回灌父会话的架构取舍。
- **[#80319 QA tool-defaults 测试套件混同 Codex 原生工具与 OpenClaw 动态工具平价](https://github.com/openclaw/openclaw/issues/80319)** — 需要产品层面厘清两者边界。

---

## 7. 用户反馈摘要

### 真实痛点

- **「修复不彻底比不修复更令人沮丧」** — #121058 用户指出：#116277 关闭后问题仍在，监控 cron 持续报警。用户诉求是「让我们看到真正的根因分析和修复，而不是关闭了事」。
- **「内存泄漏正在杀死我的长期运行实例」** — #91588 用户在 2-3 天正常使用后遭遇 OOM 被杀，触发 `launchd-handoff` 重启循环。P0 已存在两个多月未修复，社区信任正在消耗。
- **「升级后的回归比 Bug 本身更可怕」** — #108435 用户升级 2026.7.1 后 gateway 完全无法启动（systemd/ollama/手动均失败）；#62505 用户报告 Coding Agent 从 2026.4.2 起「什么都不做了」；#94939 用户升级 6.x 后会话存储被迁移为空。**升级风险成为用户最大恐惧。**
- **「静默失败让自动化形同虚设」** — #87109 cron 任务在内存压力下静默失败——无输出、无推送、无错误；#91892 cron 在模型调用时卡死。对依赖 OpenClaw 做家庭/业务自动化的用户来说，这是致命伤。
- **「同一 profile，main 能用，继承的 runtime 不能」** — #98702 OAuth-only 网关上内置 openclaw 运行时继承 OAuth 被拒，而 main 使用同一 profile 成功。权限继承模型的不一致令用户困惑。

### 使用场景

- **家庭/个人助理落地**：#73537 用户将 OpenClaw 用于家庭与业务助理（Telegram 集成、自动化、cron、Home Assistant 控制），并请求生产就绪稳定性标签——说明 OpenClaw 已从「开发者玩具」走向「真实生产力工具」。
- **多模型提供商共存**：#121953/#120563/#108379 用户的模型选择横跨 DeepSeek、Ollama/Qwen、小米 MiMo、xAI，反映用户希望构建「模型无关」的 agent 层，任何 provider 的边界行为都不应中断核心流程。
- **WhatsApp/Telegram 群组场景**：多个 issue（#96834、#107244、#92186、#50093）指向群聊/图片/贴纸等富媒体场景的不稳定，说明 IM 通道是用户最依赖的交互界面。

### 满意点

- UI 改进 PR 获得较多「ready for maintainer look」标签和截图 proof，社区对 UI 方向的改进反馈积极。
- 用户对维护者快速响应部分 issue（如 #121044 修复零命中重建索引）表示认可。

---

## 8. 待处理积压

### ⚠️ 长期未决高优先级 Issue

| Issue | 创建时间 | 已持续 | 严重度 | 备注 |
|---|---|---|---|---|
| [#91588 网关内存泄漏致 OOM](https://github.com/openclaw/openclaw/issues/91588) | 2026-06-09 | **67天** | P0 | 无 fix PR，`needs-maintainer-review`，community 持续 +1 |
| [#62505 Coding Agent 完全不完成任务](https://github.com/openclaw/openclaw/issues/62505) | 2026-04-07 | **130天** | P1 | 长时间回归，`needs-maintainer-review` + `needs-product-decision` |
| [#50093 WhatsApp 重连后回填消息](https://github.com/openclaw/openclaw/issues/50093) | 2026-03-19 | **149天** | P2 | 用户明确的需求型 issue，无 PR |
| [#86215 Codex OAuth 刷新失败致 agent 卡死数小时](https://github.com/openclaw/openclaw/issues/86215) | 2026-05-24 | **83天** | P1 | `needs-live-repro`，无 PR |
| [#121058 静默回复失败复发](https://github.com/openclaw/openclaw/issues/121058) | 2026-08-09 | 6天 | P1 | **94条评论**，社区呼声极高，需优先处理 |
| [#96834 WhatsApp 图片卡住主通道](https://github.com/openclaw/openclaw/issues/96834) | 2026-06-25 | **51天** | P1 | `clawsweeper-recovery-stuck` |
| [#99947 Codex harness 镜像历史读取失败](https://github.com/openclaw/openclaw/issues/99947) | 2026-07-04 | 42天 | P1 | `clawsweeper-recovery-stuck` |

### ⚠️ 长期未决 PR

| PR | 创建时间 | 已持续 | 状态 | 备注 |
|---|---|---|---|---|
| [#68236 test(auth): OAuth e2e 回归覆盖](https://github.com/openclaw/openclaw/pull/68236) | 2026-04-17 | **120天** | waiting on author | OAuth 相关 issue 频发（#86215/#98702），回归测试有助于根除 |
| [#88084 fix: 让审批命令绕过活跃回复通道](https://github.com/openclaw/openclaw/pull/88084) | 2026-05-29 | **78天** | waiting on author | 审批卡死会导致自动化流程中断 |
| [#81176 feat: context-window-relative 压缩预算份额](https://github.com/openclaw/openclaw/pull/81176) | 2026-05-12 | **95天** | needs proof | 涉及 session-state merge-risk，需谨慎但不应无限搁置 |
| [#64064 feat(anthropic): advisor tool 支持](https://github.com/openclaw/openclaw/pull/64064) | 2026-04-10 | **127天** | needs proof | 大型功能 PR，merge-risk 标红较多 |
| [#117712 dependabot: actions 组 10 项更新](https://github.com/openclaw/openclaw/pull/117712) | 2026-08-02 | 13天 | waiting on author | 供应链安全相关，建议优先处理 |

### 📌 维护者提醒

1. **#121058（94条评论）** 是本日最需要维护者响应的 Issue——用户认为此前关闭是「误判」，若不给出明确根因分析和修复计划，可能引发更大范围的社区信任危机。
2. **P0 #91588 内存泄漏** 已存在 67 天无 fix PR，建议安排专人跟进。
3. **#121083（文档：SecretRef `provider: "default"` 隐式别名）** 有 `fix-shape-clear` + `queueable-fix` 标签，是低成本高收益的文档修复，值得尽快合入。
4. **#91144 Windows Scheduled Task** 问题影响 Windows 原生用户的核心体验，建议优先确认。

---

*本日报基于 OpenClaw (github.com/openclaw/openclaw) 2026-08-15 公开 GitHub 数据自动生成，数据覆盖过去 24 小时。*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比报告

**分析日期：2026-08-15**
**数据覆盖：过去 24 小时（2026-08-14 至 08-15）**


## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态正处于「密集功能迭代与稳定性债务累积并存」的爆发期。以 OpenClaw 为核心的多分支生态（Claw 家族）保持极高开发强度——单日合计处理超 700 条 Issue/PR 更新，头部项目每日合并量达 50~100 条。与此同时，跨项目高度一致地涌现出四条主线：**MCP/工具链稳定性**（连接失败挂起、工具前缀解析、结果去重）、**IM 多渠道适配深化**（Telegram/WhatsApp/Matrix/钉钉等富媒体与权限治理）、**自动化可靠性**（cron 静默失败、执行语义确定性）、以及 **UI/UX 系统性重构**。值得注意的是，升级回归（OpenClaw #108435、CoPaw #6405）正在超越新功能缺失，成为社区信任消耗的最大风险源。


## 2. 各项目活跃度对比

| 项目 | Issues（活跃/关闭） | PRs（待合并/合并关闭） | Release | 健康度总评 | 关键风险信号 |
|---|---|---|---|---|---|
| **OpenClaw** | 488 / 12 | 404 / 96 | 无 | ⚠️ 中高 | P0 内存泄漏 67 天未修复；#121058 静默失败复发 94 条评论 |
| **Hermes Agent** | 46 / 4 | 45 / 5 | 无 | ✅ 高 | Windows/macOS 平台 P2 Bug 缺修复；Discord 战役推进迅猛 |
| **IronClaw** | 16 / 9 | 25 / 22 | ✅ v1.2.0 稳定版 | ✅ 高 | v1.3.0 自动化 epic 密集开发中；unbound-turns 架构切换需观察回归 |
| **ZeroClaw** | 30 / 3 | 47 / 3 | 无 | ⚠️ 中 | **47 个 PR 积压**（部分超 50 天）；Windows CI 盲区；S1 Bug 已有修复 |
| **CoPaw** | 42? / 38 | 26 / 15 | 无 | ⚠️ 中 | MCP 工具链系统性回归（Tool not found/404）；多 UI 会话并发冲突 |
| **NanoBot** | 1 / 2 | 14 / 8 | 无 | ✅ 高 | 8 个 PR 带 conflict 标签；P0 会话覆盖 Bug 待合入 |
| **PicoClaw** | 1 / 2 | 4 / 5 | 无 | ✅ 中高 | MCP 连接失败挂起已有修复 PR，但高价值 PR 滞留（46 天/43 天） |
| **LobsterAI** | 2 / 0 | 5 / 22 | ✅ 2026.8.14 增量版 | ✅ 中高 | 3 条 PR/Issue 积压约 4.5 个月；v4pro 用户催更 |
| **NanoClaw** | 2 / 0 | 6 / 3 | 无 | ✅ 中高 | Dial 渠道 PR 32 天未评审；CPU 指令集兼容性 Bug |
| **Moltis** | 0 / 0 | 1 / 0 | 无 | ✅ 稳定 | 单一大型 PR 待专项 review |
| **NullClaw** | 0 / 0 | 1 / 0（合并） | 无 | ✅ 稳定 | 活跃度低谷，无明显风险 |
| **ZeptoClaw** | — | — | — | ⏸️ 静默 | 24h 无活动 |

*注：CoPaw Issue 数按 50 条更新、38 条关闭计。*


## 3. OpenClaw 在生态中的定位

**OpenClaw 是当前生态的绝对中心和基础设施层**，其社区规模（单日 500 条 Issue/PR 更新）约为第二梯队（Hermes/IronClaw/ZeroClaw，各约 50 条）的 10 倍，差距显著。其优势体现在：

- **全渠道覆盖广度**：Telegram/Matrix/WhatsApp/Bedrock 多通道同步推进，且已进入「富文本按钮、群组消息路由、图片能力保留」等精细化打磨阶段，领先于 CoPaw（OneBot/钉钉）、PicoClaw（微信/钉钉）等渠道局部补全。
- **稳定性修复的系统性**：会话数据安全（#123495 防误删）、provider 超时语义（#123877）、压缩摘要保留（#123827）等 PR 显示其已从「修 Bug」升级为「修 Bug 类别」，具备平台级工程成熟度。
- **技术路线差异**：采用「core + skill/plugin 生态 + artifacts」的架构纵深，对比 Hermes 聚焦 Discord API omniscience、IronClaw 押注 automations 可靠性、ZeroClaw 以 RFC 驱动架构变革，OpenClaw 采取「广度铺开 + 深度加固」的均衡策略。

**核心风险**：高达 94 条评论的 P0/P1 积压（#91588 内存泄漏 67 天无 fix）正在消耗社区信任，对比 NanoBot 当日报告当日修复的速度，OpenClaw 的维护者响应效率已成为其最大短板。


## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **MCP/工具链稳定性** | CoPaw（Tool not found、offload 404、结果重复）、PicoClaw（连接失败挂起）、NanoBot（MCP SDK v2 迁移）、IronClaw（MCP OAuth、MCP 内存提供器）、OpenClaw（ACP 模型前缀） | MCP 外部依赖故障需优雅降级；工具结果数据应去重且结构一致；SDK 迁移需保留安全策略 |
| **自动化/定时任务可靠性** | OpenClaw（cron 静默失败、DeepSeek 降级）、IronClaw（#6879 自动化运行不可靠，v1.3.0 epic）、ZeroClaw（终止响应判定 S1）、CoPaw（heartbeat 不投递） | 同一 prompt 执行结果应确定；cron 静默失败需可观测；不完整响应不得报告为成功 |
| **Windows 平台支持** | ZeroClaw（74 个测试失败、CI 盲区）、NanoBot（os.replace 权限崩溃）、PicoClaw（Windows 原生 CLI）、Hermes（LSP shim、RDP 缩放）、NanoClaw（POSIX 引号解析） | CI 应覆盖 Windows；路径/编码/进程语义需平台适配；安装脚本边界情况 |
| **UI/UX 系统性重构** | OpenClaw（侧边栏三联 PR、slash 参数暂存）、NanoBot（WebUI 本地化/拖拽/设置流程）、CoPaw（子代理分组、标题同步）、LobsterAI（广告横幅、字号升级） | 侧边栏信息层级统一；技能管理可视化；会话组织体验；用户对 UI 操作效率有明确期待 |
| **多模型/多 Provider 容错** | OpenClaw（Bedrock 能力保留、provider 超时）、PicoClaw（fallback 链）、Hermes（MiMo 工具不可见）、IronClaw（自动化固定模型 profile）、CoPaw（DashScope 降级重试） | 第三方 provider 边界行为不应中断核心流程；需要 fallback 机制与模型能力协商 |
| **安全边界加固** | ZeroClaw（原子化预算、危险命令拦截、认证 RFC）、IronClaw（多用户隔离）、Hermes（skills 签名验证）、LobsterAI（commandSafety 测试） | 安全机制需防绕过、预算需原子化、多租户数据隔离、安装信任链加固 |


## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 架构关键特征 |
|---|---|---|---|
| **OpenClaw** | 全渠道 AI 助手 + 技能生态 | 开发者/重度自托管用户 | 多通道统一网关 + skills 插件 + Control UI，广度优先 |
| **Hermes Agent** | Discord 深度集成 + TUI/Dashboard | Discord 社区运营者、桌面端用户 | Discord REST v10 全量 API 对齐（omniscience），功能战役式推进 |
| **IronClaw** | 自动化/无人值守运行可靠性 | 企业级/自动化场景 | v1.3.0 聚焦 automations 语义确定性；unbound-turns 新执行模型探索 |
| **ZeroClaw** | 安全优先 + RFC 驱动架构演进 | 安全敏感型用户、多租户部署 | 以 RFC 文档驱动（Goal mode/认证/shell 策略），安全预算与原子化设计 |
| **CoPaw** | 多 IM 渠道 + 技能市场 | 中文用户、桌面端（基于 AgentScope） | 依托 AgentScope 2.0，OneBot/钉钉/Feishu 渠道，本地模型支持 |
| **NanoBot** | 轻量 WebUI + Skills + Provider 运维 | 个人轻量使用、快速部署 | WebUI 体验密集迭代（本地化/拖拽/动画），MCP SDK v2 现代化 |
| **PicoClaw** | 嵌入式/边缘多 IM 机器人 | IoT/嵌入式/轻量服务器 | 体积小、渠道广（钉钉/微信/Telegram），Go 实现 |
| **NanoClaw** | 安装向导 + 渠道 picker | 新手/快速上手 | 侧重 setup 体验，Dial 渠道（SMS+AI 语音）探索 |
| **LobsterAI** | 中文协作（cowork）+ 团队版 | 中文团队协作场景 | 网易有道背景，技能/连接器刷新，团队账户/配额流程 |
| **Moltis** | 日历/邮件/频道连接器 | 数据聚合/知识管理 | 多提供商持久化连接器 + 原子快照，provider-scoped trust |
| **NullClaw** | 稳定小步迭代 | 轻度用户 | 存储层可配置性打磨 |


## 6. 社区热度与成熟度

**第一梯队（爆发期，单日 PR 更新 >40）**：OpenClaw（500）、Hermes Agent（50）、ZeroClaw（50）、IronClaw（47）。这些项目处于功能密集输出阶段，但分化明显——OpenClaw/ZeroClaw 面临合并吞吐跟不上提交速度的压力（ZeroClaw 47 个 PR 积压），Hermes/IronClaw 则保持较好的合并闭环。

**第二梯队（活跃迭代期，单日 PR 更新 9~41）**：CoPaw（41）、LobsterAI（27）、NanoBot（22）、PicoClaw（9）、NanoClaw（9）。Bug 响应速度快（NanoBot 当日闭环、CoPaw QA Bug 当日修复），但存在高价值 PR 长期滞留、冲突堆积等结构性效率问题。

**第三梯队（质量巩固/稳定期）**：Moltis、NullClaw。开发节奏慢但稳定，无紧急风险，处于「聚能」阶段。

**成熟度判断**：OpenClaw 与 Hermes/IronClaw 已具备平台级工程能力（专项修复、架构迁移、测试基建），ZeroClaw 在架构设计层面最严谨（RFC 驱动）但交付效率受积压拖累。PicoClaw/NanoClaw 尚处「功能补全 + 吸收贡献」阶段，维护者响应节奏仍需提升。


## 7. 值得关注的趋势信号

1. **「修复不彻底」正取代「功能缺失」成为社区不满首要来源**。OpenClaw #121058（94 条评论）、#62505 升级回归 130 天未解决、CoPaw 2.0 升级后 MCP 工具链系统性故障——用户对「升级后变得更糟」的容忍度极低。**参考价值**：版本发布前需建立回归门禁，尤其针对核心执行链路。

2. **MCP 已成为事实上的工具互操作标准，但其稳定性决定了 agent 的可用性上限**。CoPaw/PicoClaw/OpenClaw/NanoBot 四个项目同日遇到 MCP 相关问题（连接挂起、前缀解析、结果去重、SDK 迁移）。**参考价值**：MCP 引入应配套超时隔离、优雅降级与结果规范化层。

3. **第三方模型提供商的边界行为正在倒逼 agent 框架设计**。OpenClaw 发现 `[cron:` 前缀被 DeepSeek 降优先级、IronClaw 确认小模型下自动化执行路径错误、Hermes 报告小米 MiMo 工具不可见。**参考价值**：框架需提供 provider 行为抽象层（能力协商、超时语义、降级策略），而非假设所有模型行为一致。

4. **自动化/无人值守运行正从「功能」升级为「一等公民」**。IronClaw 将 v1.3.0 完全押注在 automations 可靠性；ZeroClaw 修复「不完整响应被报告为成功」的 S1；OpenClaw cron 静默失败持续被抱怨。**参考价值**：无论构建 agent 框架还是使用 agent，「执行确定性」与「失败可观测性」将取代「单轮对话质量」成为核心竞争维度。

5. **Windows 与移动端体验成为生态扩张的隐形瓶颈**。ZeroClaw 的 74 个 Windows 测试失败、Hermes 的 RDP 缩放/LSP shim、NanoBot 的 Windows 崩溃、OpenClaw 的 Windows Scheduled Task——跨平台 CI 覆盖和桌面端首启体验正在从「锦上添花」变为「用户留存关键」。

6. **社区自发形成「RFC 决策队列」机制**（ZeroClaw #8692），折射出大型开源项目在架构方向上的决策透明化需求。**参考价值**：当项目进入架构定型期，显式的决策追踪机制可有效缓解社区焦虑。

---

*本报告基于 2026-08-15 各项目公开 GitHub 数据自动生成，仅供技术决策参考。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 开源项目动态日报

**日期：2026-08-15**

## 1. 今日速览

- 过去 24 小时项目**高度活跃**：22 个 PR 更新（14 个待合并，8 个已关闭/合并），3 个 Issue 更新（1 个活跃，2 个已关闭）
- **Bug 响应闭环速度快**：昨日报告的两个 Bug（#5391 流式超时、#5378 归档失败）均已关闭，其中 #5391 已有对应修复 PR #5392 同步关闭；#5378 暂无修复 PR，值得后续关注
- **WebUI 体验升级是本轮核心方向**：多个 WebUI 相关 PR 处于开放状态（本地化、拖拽分组、设置流程、会话协作、侧边栏优化等），同时已有 2 个 WebUI PR 今日关闭（#5393、#5395），说明该方向正在密集落地
- **基础设施加固并行推进**：Pyright strict 类型检查收窄（#5161/#5396）、MCP SDK v2 迁移（#5179）、会话持久化防覆盖（#5271）等方向均有实质进展
- **无新版本发布**：功能积累仍在多个长期开放的 PR 中蓄力

> ⚠️ 健康度提示：8 个 PR 被打上 `conflict` 标签（#5356、#5389、#5371、#5358、#5340、#5382 等），并行开发密度较高，需关注冲突解决效率。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日共有 8 个 PR 关闭/合并，重点进展如下：

| PR | 内容 | 意义 |
|---|---|---|
| [#5392](https://github.com/HKUDS/nanobot/pull/5392) | fix(anthropic): 流式空闲超时仅作为"无活动"判定，不再作为总超时 | 修复 #5391，避免长时活跃生成被杀 |
| [#5393](https://github.com/HKUDS/nanobot/pull/5393) | feat(webui): 侧边栏层级、连接线、文件夹展示与会话过渡动画 | 从 #5358 拆出的纯 UI 改进，已独立合并 |
| [#5395](https://github.com/HKUDS/nanobot/pull/5395) | feat(webui): 会话分组术语统一、删除确认简化、共享样式体系 | WebUI 分组交互进一步打磨 |
| [#4689](https://github.com/HKUDS/nanobot/pull/4689) | feat(providers): OAuth 状态可见性与令牌过期警告 | 挂了近 6 周的 PR 终于关闭，Provider 运维体验提升 |
| [#5018](https://github.com/HKUDS/nanobot/pull/5018) | feat(skills): 支持显式上下文加载 `skill_names` | Skills 系统补齐了此前被忽略的输入参数通路 |

另外两个新关闭的 PR 为：#5390（Agent/knowledge graph，无摘要内容，疑似占位 PR）、#4689（存在 `invalid` 标签，需确认是否合并还是关闭）。

**整体判断**：项目在 WebUI 用户体验、技能系统、Provider 稳定性三个方向均有实质推进，且修复类 PR 从报告到关闭的速度很快（#5391→#5392 当日闭环）。

---

## 4. 社区热点

> 注：当前数据未提供 PR 评论数，以下基于更新频率、标签维度和跨 PR 关联性分析。

**1. Pyright strict 类型检查收窄（[#5161 Issue](https://github.com/HKUDS/nanobot/issues/5161) / [#5396 PR](https://github.com/HKUDS/nanobot/pull/5396)）**
- 该 Issue 有 1 条评论，已开放 17 天，今日仍处于活跃状态
- 由 BasedPyright strict 模式产生 31 个文件级抑制指令，PR 试图逐个收窄到更精确的语句级抑制
- 涉及 `agent/tools/` 下 8 个文件，工程量大但属于代码质量基础设施改进
- 分析：这是项目从"宽松检查"走向"严格类型安全"的信号，对长期可维护性有正面意义

**2. Windows 平台 session 保存崩溃（[#5382 PR](https://github.com/HKUDS/nanobot/pull/5382)）**
- PR 不是简单描述，而是给出了两次真实日志证据（2026-08-11 15:44 和 18:45 CDT 的 `gateway.log`）
- 触点是 `os.replace()` 在 Windows 上的瞬态 `[WinError 5] Access is denied`，导致整个 gateway 崩溃
- 这类带生产日志佐证的 PR 往往反映运维侧真实痛点，容易获得维护者关注

**3. Marketplace 技能与内置技能冲突（[#5309 PR](https://github.com/HKUDS/nanobot/pull/5309)）**
- 已开放 6 天，仍在推进中
- 用户困惑点：同名技能下市场技能无法"覆盖"内置技能，安装按钮不可用，两个安装后端都直接返回

---

## 5. Bug 与稳定性

按严重程度从高到低排列：

| 严重度 | 问题 | 状态 | Fix PR |
|---|---|---|---|
| 🔴 P0 | **Session 后台任务保存覆盖用户数据**：[#5271](https://github.com/HKUDS/nanobot/pull/5271) 防止 `/new` 后旧任务保存覆盖新会话，涉及并发竞争条件 | PR 待合并 | 已有 PR 开放中 |
| 🟠 P1 | **Anthropic 流式生成被总超时误杀**：[#5391](https://github.com/HKUDS/nanobot/issues/5391) `NANOBOT_STREAM_IDLE_TIMEOUT_S` 被当作总超时，长时间活跃生成（>90s）会被 `asyncio.wait_for` 强制终止 | ✅ 已关闭 | [#5392](https://github.com/HKUDS/nanobot/pull/5392) 已关闭 |
| 🟠 P1 | **Windows 上 `os.replace()` 瞬态权限错误致 gateway 崩溃**：见 [#5382](https://github.com/HKUDS/nanobot/pull/5382)，发生在 heartbeat cron 的 session 保存中，log 中已出现两次 | PR 开放中 | 该 PR 即修复 |
| 🟡 P2 | **文件归档失败后会话内存不一致**：[#5378](https://github.com/HKUDS/nanobot/issues/5378) `enforce_file_cap()` 先修改内存再调用归档回调，回调异常时内存已被污染 | ✅ 已关闭 | 暂无 fix PR |
| 🟡 P2 | **Marketplace 技能无法 shadow 内置技能**：[#5309](https://github.com/HKUDS/nanobot/pull/5309) 与工作区 override 能力不一致 | PR 开放中 | 该 PR 即修复 |

**亮点**：#5391 从报告到修复闭环仅用不到 1 天，项目对高影响 Bug 的响应速度优秀。**隐患**：#5378 虽然已关闭 Issue，但暂未看到对应的修复 PR，需确认是已在其他 PR 中修复还是被挂起。

---

## 6. 功能请求与路线图信号

综合今日活跃的 Issues/PRs，可见以下路线图信号：

**🔮 大概率进入下一版本的方向：**

| 方向 | 代表性 PR | 说明 |
|---|---|---|
| **WebUI 体验全面升级** | [#5367](https://github.com/HKUDS/nanobot/pull/5367) 本地化、[#5389](https://github.com/HKUDS/nanobot/pull/5389) 拖拽分组、[#5356](https://github.com/HKUDS/nanobot/pull/5356) 设置流程、[#5358](https://github.com/HKUDS/nanobot/pull/5358) 会话协作、[#5371](https://github.com/HKUDS/nanobot/pull/5371) 助手操作时机 | WebUI 是当前最密集的开发方向，覆盖面广，预计会成为下一版本的主要特性集 |
| **会话管理与持久化加固** | [#5271](https://github.com/HKUDS/nanobot/pull/5271) 防脏保存覆盖、[#5382](https://github.com/HKUDS/nanobot/pull/5382) Windows 重试 | P0/P1 级稳定性修复，大概率优先合入 |
| **MCP SDK v2 迁移** | [#5179](https://github.com/HKUDS/nanobot/pull/5179) | v1 `ClientSession` API → v2 `Client` API，保留 SSRF 校验与安全策略，同时兼容 legacy SSE；是较大的基础设施重构 |
| **CLI 原生 TypeScript UI** | [#4329](https://github.com/HKUDS/nanobot/pull/4329) | 用 OpenTUI 重写 `nanobot agent`，Python 网关保持为唯一实现核心逻辑，已开放 2 个月仍活跃 |

**🔍 值得关注的新信号：**
- **Agent/knowledge graph**：[#5390](https://github.com/HKUDS/nanobot/pull/5390) 今日关闭，但无任何摘要内容，仅标题传达了知识图谱方向的探索意图。建议留意后续是否会开出正式 Issue 或设计文档
- **OAuth 状态可见性**：[#4689](https://github.com/HKUDS/nanobot/pull/4689) 虽然关闭，但代表 Provider 运维体验方向，可与近期 Anthropic 超时修复结合看，说明 Provider 层稳定性是持续投入点

---

## 7. 用户反馈摘要

以下反馈提炼自今日活跃的 Issue 描述与 PR 动机：

**1. 长时间生成任务被超时机制误杀（#5391）**
> 用户（shen0122）报告：通过 Anthropic provider 进行长时间生成的 callback 路径中，`NANOBOT_STREAM_IDLE_TIMEOUT_S`（默认 90s）被当作总超时，`stream.get_final_message()` 被 `wait_for` 包裹后，即使流仍然活跃，也会被强制中断。这是典型的"配置语义与实现不一致"问题，对实际使用影响较大。

**2. 归档失败导致会话数据不一致（#5378）**
> 用户（dajiaohuang）报告：`Session.enforce_file_cap()` 在调用归档回调**之前**就修改了内存中的 Session，当回调抛出异常时，保存逻辑虽然报错，但调用方的内存数据已经被截断。后续即使保存成功，也拿不回被丢弃的溢出内容。凸显了"先变更后回调"这种顺序在失败场景下导致的数据完整性问题。

**3. Windows 上 gateway 频繁崩溃（#5382）**
> 用户（albatrossflyon-coder）在 PR 中提供了生产环境日志证据：`os.replace()` 在 Windows 上因瞬态权限错误导致整个 gateway 崩溃，两次发生在 heartbeat cron 的 session 保存期间。这类环境相关 Bug 往往会被交叉环境用户放大关注。

**4. Marketplace 技能安装困惑（#5309）**
> 用户（KDB-Wind）指出：工作区技能可以 override 同名内置技能，但 Marketplace 在同等场景下会表现为"已安装"状态，无法安装工作区副本，且两个安装后端都直接返回。同一个加载器，两种不同的行为模式，让人困惑。

---

## 8. 待处理积压

以下为长期开放、需要维护者关注的 PR/Issue：

**⏳ 超长等待 PR（> 3 周）：**

| PR | 创建时间 | 等待时长 | 说明 |
|---|---|---|---|
| [#4145](https://github.com/HKUDS/nanobot/pull/4145) Weather Skill | 2026-06-01 | **75 天** | 解决 #3958 的组合型贡献，包含新 skill 文件与测试，今日有更新，但始终未合并。建议维护者明确合并意向或给出补充要求 |
| [#4329](https://github.com/HKUDS/nanobot/pull/4329) TypeScript CLI | 2026-06-13 | **63 天** | 大型重构方向，可能需要更长 review 周期，但今日仍有更新，说明未被放弃 |
| [#5152](https://github.com/HKUDS/nanobot/pull/5152) subagent 部分完成标记 | 2026-07-28 | **18 天** | 修复"子任务未完成时模型误判结果"的问题，涉及 `subagent_remaining_count` 元数据，需要确认进度 |

**🔴 P0 级但未合并：**

- [#5271](https://github.com/HKUDS/nanobot/pull/5271)（priority: p0）——会话后台保存覆盖问题，已开放 9 天，属于数据安全级别的高优先级修复，建议优先处理

**⚠️ 已关闭 Issue 但无显式修复跟踪：**

- [#5378](https://github.com/HKUDS/nanobot/issues/5378) 归档失败内存不一致——Issue 虽关闭，但未在今日 PR 中看到明确的 fix，建议确认修复载体，避免"关了问题但没修"的情况

**📌 其他风险信号：**

- 8 个开放 PR 存在 `conflict` 标签（[#5356](https://github.com/HKUDS/nanobot/pull/5356)、[#5389](https://github.com/HKUDS/nanobot/pull/5389)、[#5371](https://github.com/HKUDS/nanobot/pull/5371)、[#5358](https://github.com/HKUDS/nanobot/pull/5358)、[#5340](https://github.com/HKUDS/nanobot/pull/5340)、[#5382](https://github.com/HKUDS/nanobot/pull/5382) 等），说明 main 分支近期变动频繁，建议安排一次集中的 conflict 清理
- [#5390](https://github.com/HKUDS/nanobot/pull/5390) 属于无摘要的空 PR（"Agent/knowledge graph"），如果只是占位或实验性提交，建议尽早关闭或补充设计说明，避免长期悬挂

---

**总体评价**：NanoBot 目前处于**功能密集输出期**，WebUI 和基础设施两条主线并行推进，Bug 响应速度快，社区贡献者活跃（今日至少有 12 个不同作者提交 PR）。需要关注的核心风险是 `conflict` 标签数量偏多、以及 #4145/#4329 这类方向性 PR 长期悬挂可能消耗社区贡献者耐心。建议维护者在下一轮版本发布前，优先解决 P0 级 #5271 与集中处理一批冲突 PR。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-15

## 1. 今日速览

过去 24 小时 Hermes Agent 仓库保持高度活跃：共产生 50 条 Issue 更新（46 条新增/活跃、4 条关闭）与 50 条 PR 更新（45 条待合并、5 条合并/关闭），无新版本发布。**Discord Omniscience 功能战役（[#79564](https://github.com/NousResearch/hermes-agent/issues/79564)）是当前绝对主线**，单日贡献 15 个新子 Issue 与 8 个新 PR，系统性地向 Discord REST v10 全量 API 对齐推进。与此同时，平台稳定性修复（Windows LSP、浏览器子进程环境、TUI 测试收尾）与长期积压 PR（delegation 生命周期、skills 安装安全）均有实质更新。整体项目健康度良好、交付节奏快，但 Windows/macOS 桌面端多项 P2 级 Bug 仍缺少对应修复 PR，值得关注。

---

## 2. 版本发布

今日无新版本 Release。

---

## 3. 项目进展

今日可见的合并/关闭项以**缺陷修复落地**为主，说明近期报告的稳定性问题正在被逐步收敛：

- **[PR #86427（已关闭）](https://github.com/NousResearch/hermes-agent/pull/86427)**：修复 TUI 通知轮询器在测试间泄漏的问题，消除了 `test_run_prompt_submit_requeues_all_unstarted_notifications_with_real_threading` 在 CI 上的 flaky 失败（该失败一小时内在 #86371、#86374 两个无关 PR 上各触发一次）。这是对测试基础设施的直接加固。
- **[Issue #59591（已关闭）](https://github.com/NousResearch/hermes-agent/issues/59591)**：Dashboard 恢复会话后 transcript 显示不完整、需切换主题才能刷新的问题已关闭，前端状态刷新逻辑得到修复。
- **[Issue #66490（已关闭）](https://github.com/NousResearch/hermes-agent/issues/66490)**：TUI 在 Zellij 环境下错误启用 DEC 2026 同步输出、导致帧重复滚动的问题已解决。
- **[Issue #41480（已关闭）](https://github.com/NousResearch/hermes-agent/issues/41480)**：iTerm2 上 TUI 状态栏在流式输出时严重闪烁的问题已解决。
- **[Issue #82713（已关闭）](https://github.com/NousResearch/hermes-agent/issues/82713)**：macOS 上启动/退出其他 Electron 应用导致 Hermes 窗口 UI 缩放回落到 100% 的问题已修复。

**待合并通道**：45 条 PR 正在等待合入，其中 8 条 Discord Omniscience 功能 PR（#86449、#86451、#86454、#86458、#86460、#86462、#86466、#86468）均为"新模块-only"且附带完整测试通过记录（22~82 个测试不等），合入风险较低，预计将快速推进。项目整体正在从"Discord 读能力"向"全量写能力 + 治理能力（限流、分页、遥测）"迈进。

---

## 4. 社区热点

- **[Issue #79564 — Discord Feature Parity & Alignment Campaign（meta-issue，4 条评论）](https://github.com/NousResearch/hermes-agent/issues/79564)**：今日最热议题，也是整个 Discord 战役的枢纽。该 meta-issue 将 Discord API v10（discord.py 2.7.1）对齐工作拆解为消息/线程/论坛/频道/角色/审核/限流/分页/遥测等多个阶段，单日新增的 15 个子 Issue 与 8 个 PR 全部挂靠于此。背后诉求明确：**让 Hermes 的 Discord 集成从"能收发消息"升级为"覆盖官方 REST API 全量能力"的 omniscience 形态**。

- **[Issue #8751 — PermissionError when walking parent directories（3 条评论）](https://github.com/NousResearch/hermes-agent/issues/8751)**：4 月报告的 P2 级老 Bug，今日仍有讨论。当运行用户对父目录无读权限时 `agent/prompt_builder.py` 多个函数崩溃。作为存活最久的 P2 问题之一，它持续获得关注说明多用户/受限权限环境下的部署需求真实存在。

- **[Issue #59591 — Dashboard transcript 不完整（已关闭，3 条评论）](https://github.com/NousResearch/hermes-agent/issues/59591)**：关闭前积累了 3 条讨论，反映了 Dashboard 会话恢复体验是用户高频使用场景，涉及问题即使不算严重也备受关注。

- **Discord 子 Issue 批量创建潮**：#86448、#86450、#86453、#86457、#86459、#86461、#86467、#86465、#86463、#86431、#86436、#86439、#86441、#86428、#86418 等 15 条新 Issue 均由同一作者在同一时间段创建，每条附带 1 条评论并指向对应 PR，形成规范的"Issue-PR 一一对应"交付流水线，社区协作模式值得肯定。

---

## 5. Bug 与稳定性

### 未修复（按严重程度排序）

| 严重度 | Issue | 问题摘要 | 修复 PR |
|---|---|---|---|
| **P2** | [#73722](https://github.com/NousResearch/hermes-agent/issues/73722) | Windows Desktop 启动时遇到瞬时网关连接失败会直接致命退出——启动路径不重试（重连路径会），且瞬时 token 刷新失败被误报为"session 已过期" | 无 |
| **P2** | [#8751](https://github.com/NousResearch/hermes-agent/issues/8751) | 运行用户无目录访问权限时 `prompt_builder.py` 抛 `PermissionError`（存活 4 个月） | 无 |
| **P2** | [#86411](https://github.com/NousResearch/hermes-agent/issues/86411) | 本地后端中显式 `terminal.cwd` 会在回合中途重新钉住工作目录，覆盖启动目录的权威设定 | 无 |
| **P2** | [#86385](https://github.com/NousResearch/hermes-agent/issues/86385) | macOS 更新后屏幕录制权限陷入死循环：签名修复 #73681 后，旧 cdhash 授权的 TCC 记录显示开关为开但实际失效，且无途径重新授权 | 无 |
| **P3** | [#86445](https://github.com/NousResearch/hermes-agent/issues/86445) | Windows 上 LSP 服务器解析选中 POSIX shim，触发 WinError 193（%1 不是有效的 Win32 程序） | **[#86456](https://github.com/NousResearch/hermes-agent/pull/86456) 已提交**，改为优先探测 `.cmd`/`.exe` 包装器 |
| **P3** | [#84274](https://github.com/NousResearch/hermes-agent/issues/84274) | Windows 下 RDP 断开/重连后 UI 缩重回落到 100%（`zoom-state.json` 仍保存 125%，但渲染层未响应 display-metrics-changed） | 无 |
| **P3** | [#86403](https://github.com/NousResearch/hermes-agent/issues/86403) | Xiaomi MiMo v2.5 Pro 下工具调用损坏：已启用 17/26 个工具但模型会话中完全不可见 | 无 |
| **P3** | [#86452](https://github.com/NousResearch/hermes-agent/issues/86452) | 未配置任何 MCP 服务器的 CLI/Kanban worker 反复打印后台发现重试 WARNING（噪音，不影响功能） | 无 |
| **P3** | [#86393](https://github.com/NousResearch/hermes-agent/issues/86393) | Kanban 运行时 `TERMINAL_CWD` 被 CLI 启动日志误报为已废弃的 `.env` 设置 | 无 |

### 今日已关闭

- [#66490](https://github.com/NousResearch/hermes-agent/issues/66490)（P2）：TUI 在 Zellij 下 DEC 2026 同步输出导致帧重复 — 已修复。
- [#59591](https://github.com/NousResearch/hermes-agent/issues/59591)（P3）：Dashboard 会话 transcript 需主题切换才刷新 — 已修复。
- [#41480](https://github.com/NousResearch/hermes-agent/issues/41480)（P3）：iTerm2 上 TUI 状态栏流式输出闪烁 — 已修复。
- [#82713](https://github.com/NousResearch/hermes-agent/issues/82713)（P3）：macOS 上外部 Electron 应用导致 UI 缩放跳变 — 已修复。

**观察**：Windows 平台仍是稳定性短板最集中的区域（今日 4 条 Windows 相关 Bug），且 P2 级问题普遍缺少修复 PR；macOS 权限循环问题涉及 TCC 与签名机制，修复复杂度较高，建议维护者优先分配资源。

---

## 6. 功能请求与路线图信号

- **Discord Omniscience 战役（#79564）**：今日密集提交的 15 个功能 Issue 勾勒出完整的 REST v10 覆盖路线图——
  - **Phase 2A（消息侧）**：M1 结构化入站消息模型（[#86439](https://github.com/NousResearch/hermes-agent/issues/86439)）、M2 消息编辑/删除（[#86448](https://github.com/NousResearch/hermes-agent/issues/86448)）、M3 表情回应（[#86418](https://github.com/NousResearch/hermes-agent/issues/86418)）、M5 投票只读投影（[#86450](https://github.com/NousResearch/hermes-agent/issues/86450)）；
  - **Phase 2B（线程侧）**：T1 线程生命周期（[#86453](https://github.com/NousResearch/hermes-agent/issues/86453)）、T3 论坛帖子/标签（[#86457](https://github.com/NousResearch/hermes-agent/issues/86457)）；
  - **Phase 2E（治理侧）**：A1 频道/分类 CRUD（[#86459](https://github.com/NousResearch/hermes-agent/issues/86459)）、A2 权限覆盖（[#86428](https://github.com/NousResearch/hermes-agent/issues/86428)）、A3 角色 CRUD 与分配（[#86461](https://github.com/NousResearch/hermes-agent/issues/86461)）、A4 审核动作（[#86463](https://github.com/NousResearch/hermes-agent/issues/86463)）、A5 标量公会设置（[#86431](https://github.com/NousResearch/hermes-agent/issues/86431)）、A6 定时活动（[#86465](https://github.com/NousResearch/hermes-agent/issues/86465)）；
  - **Phase 2G（可靠性侧）**：R1 路由感知限流契约（[#86467](https://github.com/NousResearch/hermes-agent/issues/86467)）、R2 分页一致性（[#86436](https://github.com/NousResearch/hermes-agent/issues/86436)）、R4 本地可靠性遥测（[#86441](https://github.com/NousResearch/hermes-agent/issues/86441)）。
  
  对应 8 个 PR（#86449、#86451、#86454、#86458、#86460、#86462、#86466、#86468）已就绪且全部标注"New module only"+ 全量测试通过，**极有可能随下一版本发布合入**。

- **[PR #85631 — Freemaxxing: 可选免认证多提供商故障转移池](https://github.com/NousResearch/hermes-agent/pull/85631)**（8/13 创建，今日更新）：将 Freemaxxing 作为一等公民的 model-provider 插件，通过本地 OpenAI 兼容代理提供稳定的 provider/model 对与故障转移能力。这是一个重要的架构级功能请求，已进入评审阶段。

- **[PR #71723 — 阻止未签名 skills-index 安装危险技能为 builtin](https://github.com/NousResearch/hermes-agent/pull/71723)**（安全相关，今日更新）：将 builtin 信任与具体校验来源绑定，而非信任 `bundle.source == "official"` 字符串。属于安全边界加固，建议优先合入。

---

## 7. 用户反馈摘要

- **Windows 桌面用户（痛点最集中）**：多条反馈指向桌面端在 Windows 上的基础体验问题——启动时网关瞬时故障直接崩溃（[#73722](https://github.com/NousResearch/hermes-agent/issues/73722)）、RDP 重连后 UI 缩放宽高比错乱（[#84274](https://github.com/NousResearch/hermes-agent/issues/84274)）、LSP 语言服务器因 POSIX shim 误选而无法启动（[#86445](https://github.com/NousResearch/hermes-agent/issues/86445)）。用户对"配置正确但界面表现错误"类问题（如 zoom 设置显示 125% 但实际渲染 100%）尤其不满。

- **macOS 用户（信任受损风险）**：[#86385](https://github.com/NousResearch/hermes-agent/issues/86385) 中用户因更新后屏幕录制权限死循环而完全无法使用相关功能，且"toggle 显示为开却实际失效"的状态极具误导性。这是签名策略变更（#73681）引入的回归，用户期待官方给出 TCC 重置指引或迁移逻辑。

- **CI/自动化用户（噪音敏感）**：多位用户反馈日志噪音问题——无 MCP 配置时反复打印 discovery WARNING（[#86452](https://github.com/NousResearch/hermes-agent/issues/86452)）、Kanban 运行时环境变量被误报为废弃设置（[#86393](https://github.com/NousResearch/hermes-agent/issues/86393)）。虽然不影响功能，但会污染日志检索与告警体系。

- **特定模型提供商用户（功能缺失）**：[#86403](https://github.com/NousResearch/hermes-agent/issues/86403) 报告 Xiaomi MiMo v2.5 Pro 下全部核心工具不可用，说明第三方 provider 接入的工具协商兼容性需要更系统的回归测试矩阵。

- **Dashboard 用户（正向反馈）**：[#59591](https://github.com/NousResearch/hermes-agent/issues/59591) 虽已关闭，但讨论中体现出用户对会话恢复/延续体验的高度依赖，修复 transcript 刷新问题获得了社区认可。

---

## 8. 待处理积压

以下为长期未合入/未响应、但重要性高的条目，提醒维护者关注：

| 类型 | 编号 | 创建时间 | 严重度 | 说明 |
|---|---|---|---|---|
| Issue | [#8751](https://github.com/NousResearch/hermes-agent/issues/8751) | 2026-04-13 | P2 | `PermissionError` 崩溃，存活约 4 个月，仍无修复 PR，涉及多用户/受限权限环境的稳定性 |
| PR | [#68499](https://github.com/NousResearch/hermes-agent/pull/68499) | 2026-07-21 | P2 | delegation 生命周期与任务结果分离，涉及 TUI/Desktop/Gateway 多处状态渲染，改动面大，已搁置 25 天 |
| PR | [#71723](https://github.com/NousResearch/hermes-agent/pull/71723) | 2026-07-26 | P3（安全） | 未签名 skills-index 可安装危险技能为 builtin，安全边界问题，等待决策 |
| PR | [#76650](https://github.com/NousResearch/hermes-agent/pull/76650) | 2026-08-02 | P2 | 恢复 Gemini/Copilot 风格扁平化 deferred-tool 参数，影响 MCP 工具链兼容性 |
| PR | [#77050](https://github.com/NousResearch/hermes-agent/pull/77050) | 2026-08-02 | P2 | 暴露远程可读的 delegation artifact 路径，Docker 后端下产物可读性问题 |
| Issue | [#79564](https://github.com/NousResearch/hermes-agent/issues/79564) | 2026-08-05 | — | Discord 战役 meta-issue，已拆出 20+ 子任务，需持续跟踪各 Phase 合入节奏 |

**优先建议**：① 为 #73722、#86385 两个 P2 平台 Bug 指派修复；② 推动 #71723 安全 PR 尽快合入；③ 确认 #8751 的修复排期，避免跨季度积压。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-08-15

## 1. 今日速览

过去24小时内，PicoClaw 项目保持中等活跃度：共产生3条 Issue 更新（1条活跃、2条关闭）和9条 PR 更新（4条待合并、5条已关闭）。最重要的进展是 **PR #3337 针对 MCP 服务器连接失败导致 agent 循环挂起的关键 Bug 提交了修复**，直接回应了社区最关注的稳定性问题。此外，多个 PR 在持续优化代码结构（deltachat 重构减少约 200 行）、修复工具执行超时逻辑和更新模型默认配置。值得注意的是，项目存在较多被标记为 `[stale]` 的 PR/Issue 集中关闭的情况，建议维护团队关注清理节奏与响应时效。

## 2. 版本发布

过去24小时内无新版本发布。上一个已知版本为 `picoclaw nightly (git: 2cf030d2)`，由最新 Issue 报告确认。

## 3. 项目进展

今日关闭的5个 PR 中，有3个值得关注的功能/修复推进：

- **#3270 [CLOSED] — 新增 DashScope TTS 提供商与微信语音发送**  
  新增阿里云百炼 DashScope TTS 支持（`pkg/audio/tts/dashscope_tts.go`），并扩展微信渠道的音频文件发送能力。这标志着项目在多模态交互（语音）和国内 IM 渠道覆盖上又进了一步。  
  [PR 链接](https://github.com/sipeed/picoclaw/pull/3270)

- **#3283 [CLOSED] — 钉钉渠道支持图片消息接收**  
  为钉钉渠道新增 OpenAPI token 缓存、图片下载与消息解析能力，使钉钉机器人能够接收并处理图片消息，提升了实际场景可用性。  
  [PR 链接](https://github.com/sipeed/picoclaw/pull/3283)

- **#3279 [CLOSED] — 修复 seahorse 工具调用格式泄漏问题**  
  修复 `partsToReadableContent` 函数将工具调用格式泄漏到用户可见消息中的问题，消除了 LLM 摘要污染的一类隐藏 Bug。  
  [PR 链接](https://github.com/sipeed/picoclaw/pull/3279)

另外两个关闭 PR 为维护性更新：#3271 刷新9家提供商默认模型名称（含 OpenAI `gpt-5.6` 系列等）、#3303 升级 `actions/stale` GitHub Action 依赖。

当前仍有4个 PR 处于待合并状态（#3222、#3337、#3319、#3200），其中 #3222（deltachat 重构）和 #3337（MCP 挂起修复）具有较高合并价值。

## 4. 社区热点

**🔥 Issue #3269 — MCP 服务器连接失败导致聊天界面停止响应**（5条评论 | 1个👍）  
这是当前社区最关注的问题。用户 `ruiyigen` 报告称，当 MCP 服务器连接失败时，agent 循环会挂起，整个 PicoClaw 聊天界面完全停止回复。该 Issue 获得了5条评论，反映了自托管用户对 **MCP 外部依赖故障时的优雅降级能力** 有强烈需求。值得庆幸的是，PR #3337 已于8月14日提交修复（当前开放待合并），直接回应了这一痛点。  
[Issue 链接](https://github.com/sipeed/picoclaw/issues/3269) | [Fix PR 链接](https://github.com/sipeed/picoclaw/pull/3337)

**Issue #3308 — 代码审查：并发危险、goroutine 泄漏与性能优化建议**（2条评论，已关闭）  
社区成员以 Code Review 形式提出了 SeaHorse、Channel Manager 和 Hooks 的并发安全隐患，虽是 [stale] 关闭，但其中的技术观点对项目长期健壮性有参考价值。  
[Issue 链接](https://github.com/sipeed/picoclaw/issues/3308)

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue | 描述 | 修复状态 |
|--------|-------|------|----------|
| 🔴 高 | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP 服务器连接失败 → agent loop 挂起 → 聊天界面完全无响应（**已确认**） | ✅ 已有 fix PR [#3337](https://github.com/sipeed/picoclaw/pull/3337)，开放中 |
| 🟡 中 | [#3319](https://github.com/sipeed/picoclaw/pull/3319)（PR） | `exec` 工具透传的 `timeout` 参数被忽略，始终使用全局超时；`background`/`pty` 类型声明错误 | 🔧 fix PR 开放中 |
| 🟡 中 | [#3279](https://github.com/sipeed/picoclaw/pull/3279)（PR） | seahorse 摘要中工具调用格式泄漏（与已知 bug 同类症状） | ✅ PR 已关闭（修复完成） |

#3269 是当前唯一已确认且影响面较大的开放性 Bug，修复 PR 尚未合并，建议优先review。另外 #3319 的 exec 超时修复也涉及实际使用体验，应尽快跟进。

## 6. 功能请求与路线图信号

- **Telegram session 管理命令（#3307 [CLOSED]）** — 用户要求为 Telegram 等非 Web UI 渠道增加会话列表/切换命令，以匹配 Web UI 的完整 session 管理系统。虽然标记为 stale 关闭，但这是多渠道协调中的合理诉求，尤其对于 Telegram 重度用户是刚需。  
  [Issue 链接](https://github.com/sipeed/picoclaw/issues/3307)

- **可配置默认模型 fallback 链（#3200 [OPEN]）** — PR 提出在 Web UI 模型页面支持设置默认模型和 fallback 模型链（添加、排序、持久化），预计能显著提升模型调用的容错性，是部署稳定性方向的重要补充。  
  [PR 链接](https://github.com/sipeed/picoclaw/pull/3200)

- **多模态/语音能力扩展（#3270、#3283）** — 已合并的 DashScope TTS + 微信语音、钉钉图片消息接收，表明项目在向多模态交互方向稳步推进。下一个版本中语音和图片支持预计将覆盖更多渠道。

## 7. 用户反馈摘要

- **核心痛点：外部依赖故障不应导致整体服务不可用。** Issue #3269 的讨论表明，用户将 PicoClaw 作为实时聊天助手使用时，对 MCP 这类外部服务的信任度直接影响到对 PicoClaw 本身的信任。用户期望在 MCP 连接失败时，agent 可以跳过该工具或给出错误提示，而不是整体挂死。
- **代码质量关注度高**：Issue #3308 的评论表明社区中有开发者愿意深入源码，关注 goroutine 生命周期和并发正确性。这对项目透明度是加分项，但也提示维护者应关注这类深度 review 的反馈沉淀。
- **渠道覆盖诉求持续存在**：Telegram session 管理（#3307）和此前钉钉/微信渠道的 PR 都说明多平台用户对“Web UI 有的功能，其他渠道也应具备”的期望越来越高。

## 8. 待处理积压

⚠️ **以下 PR/Issue 已开放较久且无维护者明确跟进，建议关注：**

- **PR #3200 — 可配置默认 fallback 链**（创建于 2026-07-01，已开放46天）  
  功能完整且实用，若被纳入下一版本，将改善多模型场景下的稳定性。  
  [PR 链接](https://github.com/sipeed/picoclaw/pull/3200)

- **PR #3222 — deltachat 重构清理**（创建于 2026-07-03，已开放43天）  
  削减约200行代码，去掉遗留特性和硬编码 URL，并补充完整文档。属于质量改进型 PR，合并难度低，但长期未被处理。  
  [PR 链接](https://github.com/sipeed/picoclaw/pull/3222)

- **PR #3319 — exec 工具超时与布尔选项修复**（创建于 2026-08-07，已开放8天）  
  修复执行工具的实际行为与 schema 声明不一致的问题，等待维护者 review。  
  [PR 链接](https://github.com/sipeed/picoclaw/pull/3319)

- **Issue #3269 — MCP 连接失败挂起问题**（创建于 2026-07-20，已开放26天）  
  虽然已有 fix PR，但 issue 本身尚未关闭，需确认修复合并后及时闭环。  
  [Issue 链接](https://github.com/sipeed/picoclaw/issues/3269)

---

**项目健康度评估**：PicoClaw 目前在功能迭代与稳定性修复并行推进，社区反馈积极，但存在两个潜在信号需要维护者关注——① 多个高价值 PR 长期滞留待合并（#3200、#3222），可能降低社区贡献者积极性；② 大量 `[stale]` 标签自动关闭的 Issue/PR 可能掩盖了真实需求，建议在自动清理前增加人工确认环节。整体而言，项目处于“活跃修复、缓慢吸收贡献”的阶段，主要稳定性风险（#3269）有望在 PR #3337 合并后得到缓解。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-08-15

## 1. 今日速览

项目目前处于活跃迭代阶段。过去 24 小时共更新 2 条 Issue（均为新报告 bug）和 9 条 PR（6 条待合并，3 条已关闭），无新版本发布，核心维护者仍在进行 CI 签名验证链路的收尾工作。值得关注的是，今日新开的 #3248（安装脚本对旧版 Node 处理逻辑缺陷）与 #3249（对应的修复 PR）呈现「当日问题当日响应」的健康节奏；同时，社区贡献的 Dial 渠道集成 PR（#3050、#3041）已持续一个月未合并，可能反映了维护者对新功能审批的审慎态度。整体项目健康度良好，Bug 反馈集中在安装与运行环境兼容性上，均有明确修复方向。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无功能合并进入主线，但有 3 条 core-team 相关的 PR 被关闭（均未合并），其目的事件本身反映了项目基础设施的口径在收紧：

- **[PR #3243]（已关闭）** `verify-agent-image: arming auto-merge is not a verdict` — 修复了 CI 中错误地将「启用自动合并」作为镜像验证成功判定的逻辑。此前该步骤失败会误判验证结论，现已区分开。这表明项目对发布物验证的严谨性在增强。
- **[PR #3242]（已关闭）** 对签名审批流程的 live-fire 测试，验证 verify → approve → cosign → review 完整链路。
- **[PR #3244]（已关闭）** 同一签名审批流程的第二次实弹测试，确认在 draft PR 场景下审批动作能正确触发。

另有多条修复型 PR 待合并（见第 5 节），预计将在未来一两天内逐步合入。整体而言，代码实现上的进展以「修复存量缺陷」为主，新功能仍在等待通道评估。

## 4. 社区热点

今日新开的 Issues 和 PR 评论数均为 0，没有爆发式讨论。受关注度较高的是持续活跃较久的功能性 PR：

- **[PR #3050]（待合并）** `feat(setup): add Dial to the channel picker + wizard/skills` — 创建于 2026-07-14，今日仍保持更新。这是将新通信渠道集成进安装向导的完整方案，涉及安装脚本、技能描述与运行模型。
- **[PR #3041]（待合并）** `feat(channels): add Dial channel adapter (SMS + AI voice calls)` — 与 #3050 同一作者、同批次的 Dial 渠道适配器实现。

这两条 PR 已悬置 32 天，期间持续被 push 更新，说明贡献者一直在跟进评审意见。背后诉求是希望 NanoClaw 支持 Dial 作为新的消息/语音渠道，扩大可用集成面。维护者虽未直接表态，但 PR 未被关闭，说明仍在评估范围内。

## 5. Bug 与稳定性

今日报告 2 个新 Bug，按严重程度排列如下：

**中等（功能异常但可绕过）**

- **[Issue #3248]（OPEN）** `setup.sh` 对旧版 Node 的判断存在逻辑缺陷：脚本先通过版本检查判定 `NODE_OK`，若 Node 过旧则会跳转到 `install-node.sh` 辅助安装，但该辅助脚本本身在任何 Node 存在时就会短路，导致「检测到过旧 Node」的分支实际无法执行安装，安装进程可能因此静默失败或陷入错误状态。
  - **状态**：已有对应的修复 PR **[#3249]（OPEN，待合并）**，由同一位贡献者提交，核心思路是修正安装脚本对该分支的处理逻辑。

**较低（特定硬件受影响）**

- **[Issue #3245]（OPEN）** 默认拉取的预构建 agent 镜像（`NANOCLAW_HARDENED_IMAGE=true` 向导推荐配置）中包含的 Bun 二进制按非基线 x64 目标编译（要求 AVX2 指令集）。在没有 AVX2 的处理器（如 Intel Tremont/Elkhart Lake 系列的 Celeron J6413/N5105 等）上运行时会产生 SIGILL 崩溃，导致 agent 无法启动。
  - **状态**：暂无对应修复 PR。可能需要构建基线版（baseline x64）二进制，或至少根据 CPU 能力降级使用系统 Node 运行。

此外，还有两条待合并的修复 PR 值得关注：

- **[PR #3247]** 修复调度系统中 malformed cron 字符串导致每个 sweep 周期反复报错的问题——现在会主动作废错误条目并避免日志刷屏。
- **[PR #3246]** 修复 `cleanupOrphans()` 在 Windows 下因 POSIX 单引号无法被 `cmd.exe` 正确解析而静默失效的问题，避免了容器清理功能在 Windows 上「假运行」。

## 6. 功能请求与路线图信号

- **Dial 渠道支持（SMS + AI 语音通话）** — 由外部贡献者通过 PR #3050 / #3041 完整实现，包含 setup 向导集成与频道适配器。若合入将显著提升消息渠道多样性，但目前处于长期待评审状态，尚无合并时间表。
- **无新的功能请求 Issue 今日提出**。两个新 Issue 均为 bug 报告，不涉及新功能。

## 7. 用户反馈摘要

今日 Issues 评论为 0，反馈主要从 issue 描述中提取：

- **Issue #3248** 中，用户报告了「安装脚本对旧版 Node 处理不当」的场景，其体验痛点是：用户已根据脚本检查提示去调用辅助安装，但辅助流程实际不可用，容易让用户不知所措。这反映了安装脚本在设计上对「边界情况」的提示应更清晰，尤其当用户环境中已存在旧版 Node 时。
- **Issue #3245** 则反映了特定硬件（低端 Atom 系列）用户可能被预构建镜像「拦在门外」。这类用户多为廉价 NAS、软路由或低功耗迷你主机使用者，对镜像体积不敏感，但需要稳定的 CPU 指令集兼容性。这类反馈也暗示项目官方镜像可能需要增加 baseline 构建或至少提供构建选项。

## 8. 待处理积压

以下事项较长时间未得到明确处理或回复，建议维护者关注：

- **[PR #3050] 与 [PR #3041]** — 已 32 天未合并，也未被关闭，处于长期评审状态。贡献者一直在跟进更新，建议维护者阶段性给出明确评审意见（如「等待某功能发布后再合入」或「补充某测试」）。
- **[Issue #3245]** — 虽然优先级不高，但影响的是实际设备上的可用性。若无计划处理，建议先给用户一个可行的规避方案（如用 Docker 而非预构建镜像，或手动替换 Bun 为 Node）。

---

*以上数据来自 GitHub 仓库 Nanoclaw (nanocoai/nanoclaw)，报告日期 2026-08-15。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

## NullClaw 项目日报 — 2026-08-15

### 1. 今日速览

今日 NullClaw 项目整体处于**低活跃但稳定**的状态：过去24小时内无新 Issue、无版本发布，仅有一条 PR（#986）完成合并/关闭。该 PR 为 SQLite 内存数据库路径引入了可配置能力，属于存储引擎层面的**小步功能增强**，方向契合部署灵活性需求。社区讨论热度较低，暂无明显争议或紧急问题，项目健康度良好，但需要关注近期是否存在活跃度周期性低谷。

---

### 2. 版本发布

**今日无新版本发布。**

---

### 3. 项目进展

- **PR #986（已合并/关闭）：支持 SQLite 内存数据库路径可配置**  
  [GitHub 链接](https://github.com/nullclaw/nullclaw/pull/986)  
  该 PR 围绕内部任务编号 GEN-548 实施，核心改动包括：  
  - 新增 `memory.database_path` 配置项，用于自定义 SQLite 主内存引擎的数据库文件位置；  
  - 保留现有 `<workspace>/memory.db` 作为默认路径（配置为空时）；  
  - 支持相对路径（基于 workspace 解析）与绝对路径（适配只读工作区部署）；  
  - 在示例配置中补充了相关文档说明。  

  **影响评估**：此项改进虽然改动范围小，但解除了此前 SQLite 路径不可配置的限制，尤其**利好只读工作区容器化部署**，也为此前依赖固定路径的运维方式提供了迁移路径。从项目进程看，这是一次针对部署灵活性的打磨性更新，无破坏性变更。

---

### 4. 社区热点

今日无高讨论量的 Issue 或 PR。唯一更新的 PR #986 当前评论数据不足（未记录到有效讨论），未形成公开讨论热度。但该 PR 本身所对应的需求方向（存储路径可配置）代表了部分用户对**部署形态多样化**的诉求——例如只读文件系统环境、多实例数据隔离等场景。若该需求来自用户反馈，则说明社区对运行时可配置性的关注在上升，值得维护者后续重点收集相关场景反馈。

---

### 5. Bug 与稳定性

今日未报告新的 Bug、崩溃或回归问题，无相关修复 PR。项目稳定性状态暂无负面信号。

---

### 6. 功能请求与路线图信号

- **可配置化存储路径（已通过 PR #986 落地）**  
  虽然该功能已实现，但其本身即为一个明确的路由图信号：项目正在**增强存储层的可接入性**，以适配更多部署环境。结合「绝对路径用于只读工作区部署」这一设计，推测后续可能继续出现以下方向的功能：  
  - 支持其他外部数据库（如 Postgres/MySQL）作为主存储引擎；  
  - 为多实例场景提供分布式存储适配。  
  目前没有新的开放功能请求 Issue，建议维护者在合适节点发布 CHANGELOG 以便社区感知该能力变化。

---

### 7. 用户反馈摘要

由于今日无新 Issue 且 PR #986 未产生公开评论，暂无直接的用户反馈文本可供分析。但从该 PR 的代码设计可间接提炼真实用户痛点：

- **需要自定义数据库位置**：部分用户可能在多环境（开发/生产）之间同步时希望固定数据库路径，或希望避开默认的 workspace 目录；
- **只读工作区部署受限**：绝对路径支持表明已有或潜在用户采用只读挂载运行工作区，原先写死 `<workspace>/memory.db` 的方式无法覆盖此类场景。  

建议维护者在后续 release notes 中注明该变更，以收集更多用户反馈验证假设。

---

### 8. 待处理积压

**当前积压为零**。今日无长期未响应的 Issue 或 PR，也无明显需要维护者介入的遗留事项。项目维护状态较为及时。建议继续保持对自动化依赖更新与安全相关 Issue 的例行检查。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-15

## 1. 今日速览

过去 24 小时 IronClaw 项目保持高度活跃：**47 条 PR 更新**（25 待合并 / 22 已合并关闭）、**25 条 Issue 更新**（16 新开或活跃 / 9 已关闭），并正式发布了 **v1.2.0 稳定版**。项目当前的核心工作集中在三条主线：**v1.3.0 自动化可靠性增强**（#6879 系列）、**unbound-turns 架构切换**（#7634/#7562 训练），以及 **QA bug 密集修复**（Slack/Telegram 连接与扩展注册表问题）。值得关注的是，自动化（Automations）相关 PR 数量显著攀升（#7650/#7651/#7644-#7647），表明 v1.3.0 的功能开发已进入密集落地期。整体来看，项目健康度良好，贡献者活跃且问题响应及时。

---

## 2. 版本发布

### ironclaw-v1.2.0 — 稳定版发布（2026-08-13）

**Release Notes 摘要：**

本次为 `1.2.0-rc.3` 的稳定晋升，包含 RC2 和 RC3 中验证的修复，以及 RC1 的完整功能集。

**RC3 修复：**
- 运行时容器镜像现安装 `curl`，使得容器内 HTTP 健康检查可以执行（编排器通过该工具探测 worker 状态）

**发布细节：**
- 发布标签：`ironclaw-v1.2.0`
- 发布日期：2026-08-13
- 关联 PR：**#7657**（合并 1.2.0 发布线回 main）、**#7663**（前向移植 1.2 修复至 main）

**破坏性变更与迁移注意：**
- 无明确标注的破坏性变更
- 1.0/1.1 → 1.2 的启动迁移已随 #7657 前向移植至 main，并具备后端/域合约测试覆盖
- 发布工件升级 canary 已包含在合并中（来源：PR #7657）

---

## 3. 项目进展

今日合并/关闭的重要 PR 显示项目在多个维度同步推进：

### 3.1 自动化可靠性（v1.3.0 核心方向）

| PR | 标题 | 状态 | 意义 |
|---|---|---|---|
| [#7650](https://github.com/nearai/ironclaw/pull/7650) | feat(automations): persist semantic execution outcomes | OPEN | 引入运行时拥有的异步 judge 任务，替代隐藏的一秒存储协调器，使语义执行结果在运行终止后可持久化评估 |
| [#7651](https://github.com/nearai/ironclaw/pull/7651) | feat(automations): add deterministic no-result suppression | OPEN | 强制 `trigger_create` 显式选择 `deliver` 或 `suppress_when_nothing_to_report`，为 `[SILENT]` 协议提供确定性消费端 |
| [#7652](https://github.com/nearai/ironclaw/pull/7652) | perf(stress): measure production DB write workloads | CLOSED | 完成生产级 agent 单轮的 DB 写负载测量（10 个内置调用/11 次模型尝试），为 #7591 写压力 epic 提供基准数据 |
| [#7628](https://github.com/nearai/ironclaw/pull/7628) | perf(processes): remove heartbeat journal churn | OPEN | 停止追加心跳日志行，减少 DB 写压力（#7591 的保守安全子集） |

### 3.2 unbound-turns 架构切换

| PR | 标题 | 状态 | 意义 |
|---|---|---|---|
| [#7634](https://github.com/nearai/ironclaw/pull/7634) | feat(unbound-turns): complete the switchover to prepared-context turns | OPEN | 完成向 unbound-turns 模型的全面切换，包含 #7633 全部 follow-up、71 条一致性审计通过 |
| [#7562](https://github.com/nearai/ironclaw/pull/7562) | feat(unbound-turns): design + phase 1 | OPEN | unbound-turns 训练的基础 PR，包含设计文档与阶段 1 实现 |

### 3.3 扩展与集成修复

| PR | 标题 | 状态 | 意义 |
|---|---|---|---|
| [#7668](https://github.com/nearai/ironclaw/pull/7668) | fix(extensions): surface provider auth diagnostics | CLOSED | 保留 GitHub provider 错误信息与稳定错误码，使认证诊断贯穿 WASM/ABI/能力/运行时门控全链路 |
| [#7666](https://github.com/nearai/ironclaw/pull/7666) | fix(extensions): tell the truth on cards and install results | CLOSED | 修复扩展卡片状态失真问题（对应 QA #7660） |
| [#7665](https://github.com/nearai/ironclaw/pull/7665) | fix(auth): support origin-scoped hosted MCP OAuth | CLOSED | 支持 MKT1 所需的托管 MCP OAuth 形状（RFC 9728） |

### 3.4 其他

| PR | 标题 | 状态 | 意义 |
|---|---|---|---|
| [#7658](https://github.com/nearai/ironclaw/pull/7658) | fix(telegram): recognize the 2FA gate on migrated DCs | CLOSED | 修复 Telegram 链接设备时 2FA 门控识别，明确登录码到达位置 |
| [#7657](https://github.com/nearai/ironclaw/pull/7657) | chore: merge the 1.2.0 release line back into main | CLOSED | 1.2.0 发布线合回 main，携带迁移、canary、Windows 修复 |
| [#7655](https://github.com/nearai/ironclaw/pull/7655) | fix(ci): re-pin coverage floors to observed reality | CLOSED | 将两个失败 crate 的覆盖率下限调至实测值（降低 CI 噪音） |

---

## 4. 社区热点

### 4.1 讨论焦点：#6879 自动化运行不可靠（v1.3.0 epic）

[Issue #6879](https://github.com/nearai/ironclaw/issues/6879) — *[OPEN] Automation runs are hit-or-miss: unattended runs execute as plain interactive chat turns*

- **作者**：serrrfirat（创建于 2026-07-29，最后更新 2026-08-14）
- **评论**：1 | 👍：0
- **核心诉求**：同一存储 prompt 的自动化运行结果时好时坏，小模型（DeepSeek V4 Flash）上尤其明显。2026-07-30 的审计显示这是**结构性问题**而非模型噪声：触发器触发后被执行成了普通交互式对话轮次。
- **热度分析**：该 issue 是当前 v1.3.0 开发的**核心 epic**，直接衍生出 #7644-#7647 四个子任务和 #7650/#7651 两个 PR。虽然评论数不多，但其驱动的开发工作量在今日 PR 中占比最高，说明这是项目当前最优先的方向。

### 4.2 高关注 PR：#7634 unbound-turns 切换完成

[PR #7634](https://github.com/nearai/ironclaw/pull/7634) — *[size: XL, risk: low, scope: docs] feat(unbound-turns): complete the switchover to prepared-context turns*

- **作者**：BenKurrek | 创建/更新：2026-08-14
- **意义**：这是 unbound-turns 训练的收尾 PR，包含 71 条一致性审计，全部通过。与 #7562 共同构成项目的长期架构演进方向。
- **背后诉求**：unbound-turns 模式将对话轮次从"绑定到单次运行"转变为"独立的上下文准备"，为更灵活的 agent 执行模型铺路。

---

## 5. Bug 与稳定性

### 5.1 高优先级 QA Bug（来自 2026-08-14 bug bash）

| Issue | 标题 | 严重程度 | 状态 | 修复 PR |
|---|---|---|---|---|
| [#7662](https://github.com/nearai/ironclaw/issues/7662) | MP4 attachment fails with invalid_value (attachments.mime_type) in Telegram | P2 | OPEN，无 PR | — |
| [#7660](https://github.com/nearai/ironclaw/issues/7660) | Slack shows "Reconnect" and "Finish Setup" despite active working connection | P2 | OPEN | **已有**：[#7666](https://github.com/nearai/ironclaw/pull/7666)（已合并）+ 修复扩展卡片失真的同时处理了此问题 |
| [#7659](https://github.com/nearai/ironclaw/issues/7659) | Extensions installed by other users are visible on Extensions/Registry page | P2 | OPEN，无 PR | — |

**分析**：三个 P2 QA bug 均来自 Railway 测试实例（ironclaw-qa-testing-libsql.up.railway.app），涉及 Telegram 附件类型校验、Slack 连接状态 UI 错误、扩展跨用户数据泄漏（涉及租户隔离，需优先关注）。

### 5.2 其他稳定性问题

| Issue | 标题 | 状态 | 备注 |
|---|---|---|---|
| [#7667](https://github.com/nearai/ironclaw/issues/7667) | telegram: phone-mode login code hint should reflect sentCode.type_ | OPEN | QA 中发现登录码提示与实际接收方式不匹配（`PHONE_MIGRATE_1` 后用户未在预期位置收到验证码）；已有 #7658 部分修复，但此 issue 仍开放 |
| [#6869](https://github.com/nearai/ironclaw/issues/6869) | Generated DOCX files unreadable by Word due to corruption | CLOSED | 长期存在的反馈类 bug，已关闭（修复可能已合入 1.2.0） |

### 5.3 回归风险提示

- **#7634（unbound-turns 切换）** 为 XL 规模 PR，虽标注 low risk 且通过 71 条审计，但涉及核心执行模型变更，需关注后续回归测试结果
- **#7661（MCP 内存提供器）** 为 XL 规模 PR（risk: medium），涉及配置绑定路径替换工厂模式，可能影响现有内存提供方（native/mem0）

---

## 6. 功能请求与路线图信号

### 6.1 v1.3.0 明确纳入的功能（自动化方向）

以下 issue 均标注 `[v1.3.0]`，且已有对应实现中 PR，**基本确认进入下一版本**：

| Issue | 功能 | 对应 PR | 状态 |
|---|---|---|---|
| [#7644](https://github.com/nearai/ironclaw/issues/7644) | 调度前对结构化自动化做一次验证 | 待创建 | OPEN |
| [#7645](https://github.com/nearai/ironclaw/issues/7645) | 按执行契约固定 LLM 模型 profile | 待创建 | OPEN |
| [#7646](https://github.com/nearai/ironclaw/issues/7646) | 预检 grants 并获取作用域 standing approval 租约 | 待创建 | OPEN |
| [#7647](https://github.com/nearai/ironclaw/issues/7647) | 定时运行的确定性"无投递"结果 | [#7651](https://github.com/nearai/ironclaw/pull/7651) | OPEN（实现中） |

### 6.2 高价值新功能请求（可能进入后续版本）

| Issue | 功能 | 分析 |
|---|---|---|
| [#7664](https://github.com/nearai/ironclaw/issues/7664) | 可插拔内存（MCP-backed） | 已开放 [#7661 PR](https://github.com/nearai/ironclaw/pull/7661)，实现中 |
| [#7653](https://github.com/nearai/ironclaw/issues/7653) | WebUI Ask User 卡片（结构化的 `ask` 工具） | 基于终端已有 `LoopCompletionKind::AskUserReply`，设计成熟，进入实现的可能性高 |
| [#7656](https://github.com/nearai/ironclaw/issues/7656) | Slack-to-Console bridge（含交互元数据） | 已 CLOSED，但闭因未注明（可能已实现或暂缓），需关注 |
| [#7624](https://github.com/nearai/ironclaw/issues/7624) | ACP harness executor（claude-code 作为循环） | 对应 [#7648 PR](https://github.com/nearai/ironclaw/pull/7648)（experimental），属 v0 验证阶段 |

### 6.3 前端/WebUI 方向功能请求

| Issue | 功能 | 状态 |
|---|---|---|
| [#7639](https://github.com/nearai/ironclaw/issues/7639) | 统一 InlineNotice 组件 | OPEN（design-system 层） |
| [#7637](https://github.com/nearai/ironclaw/issues/7637) | 设计系统组件边界类型化 | OPEN（TypeScript 严格化前奏） |
| [#7638](https://github.com/nearai/ironclaw/issues/7638) | 线程删除告警替换为全局 toast | OPEN（UX 一致性） |

---

## 7. 用户反馈摘要

### 7.1 用户痛点

- **自动化不稳定**（#6879）：用户报告同一 prompt 有时成功有时完全无输出，尤其在小模型上。结构性原因（执行路径错误）而非随机模型噪声，该反馈直接驱动了 v1.3.0 自动化方向的大部分工作。
- **DOCX 生成损坏**（#6869，已关闭）：用户尝试生成标记好的 NDA 文档失败，对比 ChatGPT/Claude 可轻松完成。两次尝试均未成功（首次协议违规，第二次结果待确认）。该 issue 已关闭，表示修复已合入。
- **多用户隔离问题**（#7659）：扩展安装状态在当前用户与其他用户之间泄漏，涉及隐私和租户隔离，属于需要优先处理的正确性问题。

### 7.2 使用场景观察

- **QA bug bash 密集反馈**：从 #7659/#7660/#7662 等 issue 可以看出，项目正在对 Railway 上的 QA 实例进行系统性功能演练，覆盖 Telegram 附件、Slack 连接状态、扩展注册表等真实用户路径。这种方式有效暴露了集成都市的边缘情况。

### 7.3 满意度信号

- 无明确负面情绪表达；issue 均以结构化 bug 报告或功能请求形式提出
- 项目对 QA 发现的问题响应迅速（#7660 在报告当天即有 PR #7666 修复并合并）

---

## 8. 待处理积压

### 8.1 长期未关闭的重要 Issue

| Issue | 标题 | 创建时间 | 最后更新 | 分析 |
|---|---|---|---|---|
| [#6869](https://github.com/nearai/ironclaw/issues/6869) | DOCX 生成文件损坏 | 2026-07-29 | 2026-08-14 | 已关闭 ✓，但耗时约 2.5 周，期间用户可能已流失 |
| [#6879](https://github.com/nearai/ironclaw/issues/6879) | 自动化运行不可靠（epic） | 2026-07-29 | 2026-08-14 | 已持续 2.5 周，当前为 v1.3.0 核心工作，子任务仍开放中，预计短期不会关闭 |

### 8.2 值得关注的长期开放 PR（>7 天）

| PR | 标题 | 创建 | 状态 | 风险 |
|---|---|---|---|---|
| [#7456](https://github.com/nearai/ironclaw/pull/7456) | fix(reborn): make durable storage profile-agnostic | 2026-08-10 | OPEN（5 天） | size: XL, risk: medium |
| [#7379](https://github.com/nearai/ironclaw/pull/7379) | release(docs): deploy public docs from docs-live branch | 2026-08-07 | OPEN（8 天） | size: L, risk: medium |
| [#7378](https://github.com/nearai/ironclaw/pull/7378) | test(docs): doc-fact contract tests | 2026-08-07 | OPEN（8 天） | size: L, risk: low |
| [#7255](https://github.com/nearai/ironclaw/pull/7255) | docs(governance): evaluate APDD kit | 2026-08-05 | OPEN（10 天） | size: XL, risk: low |

**提示**：#7378/#7379 为文档事实性保障的系列 PR（doc-truth PR 3/5 和 4/5），已开放超过一周，建议维护者关注以避免文档与代码持续漂移。

### 8.3 新出现但响应迅速的问题（正分）

- 今日新开的 6 个 v1.3.0 自动化子 issue（#7644-#7647 等）均有明确的 PR 对应或在短时间内获得开发投入
- QA bug（#7660/#7662/#7659）均在报告当天获得 PR 响应（其中 #7660 已修复合并）

---

*本日报基于 2026-08-15 的 GitHub 数据生成，覆盖过去 24 小时的项目动态。所有数据点均来自公开仓库 nearai/ironclaw。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 · 2026-08-15

## 1. 今日速览

过去24小时 LobsterAI 保持高活跃度：2 条 Issue 更新（新开/活跃），27 条 PR 更新，其中 22 条已合并/关闭、5 条待合并。项目发布 2026.8.14 增量版本，并将 2026.7.30 发布分支合并回 main（#2498，67 commits，264 files），正式引入团队版账户/配额流程。社区侧用户对 v4pro 版本更新表达强烈期待（#2489），同时 3 月遗留的两条 PR（#1153、#1155）仍处于 stale 状态。整体项目健康度良好，合并节奏稳定。

## 2. 版本发布

### LobsterAI 2026.8.14
- **feat(sidebar)**：支持签到和 banner 轮播（#2411）
- **feat(sidebar)**：新增多智能体任务活动筛选器（#2418）
- 其余变更未在该 release notes 中展开，建议访问 [GitHub Releases](https://github.com/netease-youdao/LobsterAI/releases) 查看完整清单。

### Release 2026.7.30 合入 main（PR #2498）
- 将 `release/2026.7.30` 最终变更合并至 main：领先 origin/main 67 commits，变更 264 文件（+24,736/-4,253）。
- 引入团队版（Team Edition）账户与配额流程，刷新 Skills 与 Connectors 体验。
- **注意**：该合并包含较大规模的代码变更，若你正在维护下游分支，建议关注 [PR #2498](https://github.com/netease-youdao/LobsterAI/pull/2498) 中的冲突解决记录与迁移说明。

## 3. 项目进展

今日合并/关闭的 22 条 PR 中，代表性工作包括：

- **发布整合**：
  - #2498 Release: 2026.7.30 合并回 main。
- **功能增强**：
  - #2490 feat(cowork)：浏览器批注附件在 artifact 面板中预览，替代通用图片弹窗。
  - #2495 feat(typography)：默认 UI/代码字号升级，含一次性迁移。
- **关键修复**：
  - #2491 / #2483 fix(openclaw)：技能入口键改用 frontmatter name，修复 UI 开关静默失效（关联 #2446 社区反馈）。
  - #2499 fix(cowork)：回合等待答案时不提前折叠。
  - #2493 fix：会话导出图片与卡片切换 UI。
  - #2496 fix(cowork)：徽章弹窗视口约束与层级修正。
  - #2497 fix(i18n)：cowork 目标/转向文案优化。
- **账户/UI**：
  - #2494 / #2492 fix(account)：积分图标样式与颜色对齐。
- **风险信号**：
  - #2423 回滚了 #2422 “Liuzhq/fix btw tools”，回滚原因需维护者澄清，可能涉及兼容性或回归问题。

## 4. 社区热点

- **#2489 “快更新v4pro！”**（1 评论）：用户于今日创建 issue 并获响应，代表了一部分用户对 v4pro 版本的迫切需求。背后的诉求可能是对团队版、性能或新模型的期待。建议维护者建立版本预告机制。链接：[#2489](https://github.com/netease-youdao/LobsterAI/issues/2489)
- **#1154 安全模块单元测试补充**（1 评论）：今日有新的评论活跃。提出者强调 `commandSafety` 的误判可能让 AI 静默执行 `rm -rf` 等破坏性命令，属于高风险关切。该 issue 已 stale 约 4.5 个月，仍在讨论，说明社区对安全测试覆盖有持续需求。链接：[#1154](https://github.com/netease-youdao/LobsterAI/issues/1154)
- **#2374 永久隐藏侧边栏广告横幅**：当前最受关注的功能 PR 之一（针对 issue #2342），解决用户无法永久关闭广告的痛点。PR 已开放 3 周，建议维护者加快 review。链接：[#2374](https://github.com/netease-youdao/LobsterAI/pull/2374)

## 5. Bug 与稳定性

| 严重程度 | 描述 | 状态 | 修复/跟踪 |
|---|---|---|---|
| 中 | OpenClaw 技能开关静默失效（技能目录与 frontmatter name 不一致） | 已修复 | #2491 / #2483 |
| 中 | 侧边栏广告无法永久隐藏，仅能临时关闭 | 修复 PR 待合并 | Issue #2342 / PR #2374 |
| 低 | cowork 回合提前折叠，空行易被误读为失败 | 已修复 | #2499 |
| 低 | 会话导出图片/卡片切换 UI 异常 | 已修复 | #2493 |
| 低 | Google Gemini baseURL 以 `/v1` 结尾时 URL 拼接错误（缺 `/` 分隔符） | 待合并（stale） | PR #1153（关联 #1151） |

今日无高危安全/稳定性事件报告。

## 6. 功能请求与路线图信号

- **永久隐藏侧边栏广告**（PR #2374）：已有实现，预计可进入下一版本。
- **会话内页内搜索 Ctrl+F**（PR #1155）：功能完整，若采纳将提升会话检索效率，当前 stale，需维护者决策。
- **会话标记为未读**（PR #1228）：已关闭，建议确认合入状态。
- **AgentCreateModal UX 改进**（PR #1231）：已关闭，推测已合入。
- **依赖升级**（PR #2460 rimraf 5→6，PR #2465 vite 5→8）：vite 跨 major 升级，建议优先合并以保持依赖健康与安全。

## 7. 用户反馈摘要

- **版本期待**：#2489 用户直接催促“快更新v4pro”，反映部分用户对新版本迭代周期的敏感度较高。
- **安全担忧**：#1154 提到 `commandSafety` 误判可能造成破坏性命令执行，开发者对安全测试覆盖的缺口表示担忧。
- **广告控制权**：#2374/issue #2342 表明用户对侧边栏广告缺少永久关闭选项感到不便，希望有更长效的控制。
- **技能配置信任度**：#2483/#2491 背后的 #2446 反馈显示，技能开关无效会显著影响用户对产品可靠性评价。

## 8. 待处理积压

| 项目 | 说明 | 搁置时长 | 链接 |
|---|---|---|---|
| PR #1153 | Gemini URL 拼接修复，含测试，stale 未合并 | 约 4.5 个月 | [链接](https://github.com/netease-youdao/LobsterAI/pull/1153) |
| Issue #1154 | 安全模块单元测试，高风险模块，建议优先排期 | 约 4.5 个月 | [链接](https://github.com/netease-youdao/LobsterAI/issues/1154) |
| PR #1155 | 会话内 Ctrl+F 搜索，实现较完整，stale | 约 4.5 个月 | [链接](https://github.com/netease-youdao/LobsterAI/pull/1155) |
| PR #2374 | 永久隐藏侧边栏广告，待 review | 约 3 周 | [链接](https://github.com/netease-youdao/LobsterAI/pull/2374) |
| PR #2460/#2465 | dependabot 依赖升级（rimraf、vite），待合并 | 5 天 | [链接](https://github.com/netease-youdao/LobsterAI/pull/2460) / [链接](https://github.com/netease-youdao/LobsterAI/pull/2465) |

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-08-15)

> 数据来源: [github.com/moltis-org/moltis](https://github.com/moltis-org/moltis)  
> 数据时间: 过去 24 小时 (2026-08-14 至 08-15)  
> 数据范围: Issues、PR、Releases

---

## 1. 今日速览

过去 24 小时内，Moltis 项目的 GitHub 活动处于低水平：**无新增或关闭的 Issue**，**无新版本发布**，仅 **1 条待合并 PR** 获得更新（#1190）。该 PR 体量较大，涉及连接器持久化、原子快照、调度、搜索及多个只读数据源适配，是项目在集成能力方向上的一次重要推进。整体而言，项目社区讨论热度暂低，但代码层面的功能迭代仍在持续进行，贡献者集中打磨单一 PR，属于正常开发周期中的“聚能”阶段。项目健康度良好，未见明显阻塞或回归信号。

---

## 2. 版本发布

无新版本发布。

最新 Release 时间未知，当前没有可披露的版本变更、破坏性变更或迁移注意事项。

---

## 3. 项目进展

### 今日无合并 PR

过去 24 小时内 **没有 PR 被合并或关闭**，因此无代码进入主分支。所有功能进展均体现在 **待合并 PR #1190** 中，该 PR 目前处于开放状态，且最近一次更新发生在 2026-08-14，说明作者仍在积极维护或补充内容。

### 值得关注的功能预集成: PR #1190

| 项目 | 详情 |
|------|------|
| PR | [moltis-org/moltis #1190](https://github.com/moltis-org/moltis/pull/1190) |
| 标题 | Add durable calendar, channel, and email connectors |
| 作者 | penso |
| 状态 | Open（待合并） |
| 创建 | 2026-08-11 |
| 最近更新 | 2026-08-14 |
| 评论数 | 暂无数据 |

**核心内容**:
- 提供**与具体提供商无关的连接器持久化**，支持原子快照、调度、投影以及受限的本地全文搜索。
- 新增 **只读 CalDAV、Gmail、Himalaya v2** 适配，以及可复用的频道历史数据集。
- 强调**provider-scoped trust（提供商作用域信任）**，且不复制任何凭据，进一步增强了第三方连接的安全边界。

**对项目的意义**: 该 PR 一旦合并，将把 Moltis 的集成能力从单一数据源扩展为可插拔的多提供商连接器体系，同时引入持久化与搜索基础能力。这为后续日历、邮件、聊天记录的统一管理和跨源查询打下了基础，预计是下一版本的核心功能模块。

---

## 4. 社区热点

今日没有产生新的 Issue，也没有 PR 评论数据可供分析（#1190 评论数显示为 undefined）。因此在严格的数据范围内，**不存在可量化的“讨论热度”**。

唯一活跃的 PR #1190 本身是当前社区关注的最大信号：
- [PR #1190: Add durable calendar, channel, and email connectors](https://github.com/moltis-org/moltis/pull/1190)

它既是功能开发，也是一次较大的设计提案。虽然没有评论数据，但 PR 在创建后三天仍有更新，说明作者与维护者之间可能正在通过其他渠道沟通，或者作者在持续完善代码。社区对多源连接器的潜在需求，可从中一窥端倪。

---

## 5. Bug 与稳定性

**过去 24 小时无新报告的 Bug、崩溃或回归问题。**

- 开放 Bug: 0 条
- 已关闭 Bug: 0 条
- 相关修复 PR: 无

项目当前未暴露稳定性风险，也未收到用户对异常行为的反馈。整体处于稳定期。

---

## 6. 功能请求与路线图信号

尽管今日没有用户提交新的功能请求 Issue，但 PR #1190 本身承载了强烈的路线图信号。

**从 PR #1190 中可提炼的功能方向:**
- 多提供商连接器抽象（provider-neutral）
- 数据持久化与原子快照机制
- 定时调度与数据投影
- 本地全文搜索（有界）
- 日历（CalDAV）、邮件（Gmail、Himalaya v2）、频道历史记录等只读数据源接入
- 安全信任模型增强（provider-scoped trust、不复制凭据）

这些特性表明 Moltis 正从“单一来源聚合”向**“泛化连接器平台”**过渡。如果 PR #1190 被合并，预计后续版本（如 v0.x 或 v1.x 的某一迭代）将包含该可扩展连接器框架，并可能带动更多数据源适配器（如 Slack、Discord、Outlook 等）的社区贡献。用户侧若希望提前介入，可关注该 PR 的 review 进程并参与测试。

---

## 7. 用户反馈摘要

过去 24 小时内无新的 Issue 评论或讨论，因此无法抽取直接的**用户痛点或使用场景反馈**。

基于现有数据，可以间接推断:
- 无人提交 Bug 或抱怨，可能说明现有版本运行稳定，或社区活跃度处于低谷。
- PR #1190 的“只读”设计和对“不复制凭据”的强调，反映出开发者对**安全与信任边界**的重视——这可能是用户侧对第三方集成最敏感的点。

待未来 48-72 小时若有 Issue 或评论出现，可进一步补充该板块。

---

## 8. 待处理积压

当前没有长期未响应的重要 Issue 或 PR。

唯一未合并的 PR 是 **#1190**（创建于 2026-08-11，至今约 4 天），尚属正常 review 周期。

**提醒维护者关注:**
- [PR #1190](https://github.com/moltis-org/moltis/pull/1190) 已进入第 5 天，且该 PR 功能覆盖面较大（涉及持久化、调度、搜索、多个提供商适配），建议安排专项 review，避免长时间的 open 状态导致分支过时或与主线产生冲突。如果代码可直接合并，可考虑尽快并入 main 分支；若需要调整，建议明确给出反馈意见，以加速迭代闭环。

---

> 本报告基于 2026-08-15 前 24 小时的数据自动生成。所有链接指向 GitHub 上的相关条目。  
> 说明: 因数据范围内无 Issue 评论和关闭事件，部分板块（社区热点、用户反馈）内容受限，仅作客观呈现。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-08-15）

## 一、今日速览

过去 24 小时 CoPaw 社区活跃度处于中高水平：共发生 **50 条 Issue 更新**（其中 38 条关闭）与 **41 条 PR 更新**（其中 15 条合并/关闭），维护者对历史 Issue 的清理力度明显加大，同时有 8 个以上新功能 PR 进入待合并队列。**无新版本发布**。当前项目健康度整体良好，但存在两类关键信号需关注：一是 MCP/插件生态出现多处兼容性回归（Tool not found、Creator 插件冲突、离线工具 404）；二是多 UI 会话并发下出现会话互相取消的较严重 Bug。功能开发侧，技能系统动态加载、会话标题自动同步、子代理分组、Computer Use 观察层增强等一批 PR 正在密集推进，预示下一版本功能面将有明显扩展。

---

## 二、版本发布

**无新版本发布。** 上次发布仍为 v2.1.0 系列，当前无 release 动态。

---

## 三、项目进展

今日共有 **15 条 PR 合并/关闭**，另有 **26 条 PR 处于待合并状态**，其中多条功能 PR 已进入 reviewer 视野。按功能方向梳理如下：

### 已合并/关闭 PR（重点关注）

| PR | 方向 | 说明 |
|---|---|---|
| [PR #6715](https://github.com/agentscope-ai/CoPaw/pull/6715) | OneBot 渠道 | `feat(onebot): localize inbound media before agent processing` — 将 OneBot 入站图片/音视频/文件统一本地化为 AgentScope 2.0 DataBlock，解决渠道媒体引用失效问题 |
| [PR #6943](https://github.com/agentscope-ai/CoPaw/pull/6943) | 插件渠道配置 | 恢复 plugin channel `get_configurator()` 交互式配置能力，修复插件注册 HTTP router 时的加载问题 |
| [PR #2105](https://github.com/agentscope-ai/CoPaw/pull/2105) | 文档 | 补充 Whisper 本地语音转文本安装说明（`--extras whisper`），中英文 README 同步更新 |

> 说明：技能系统相关 PR #7029 / #7030 / #7031 在今日关闭，同一作者已提交新版本 PR #7033 / #7032 继续推进，推测为分支或实现方式调整，功能仍在演进中。

### 新增待合并 PR（可能进入下一版本）

- **[PR #7033](https://github.com/agentscope-ai/CoPaw/pull/7033) — 动态技能加载 + 自动卸载 + frontmatter 修复**：新增 `load_skill/unload_skill/check_skill_status` 工具链、每 5 轮自动卸载闲置技能的 `AutoUnloadHook`，并修复 lazy-skill 路径 Bug。补齐了技能管理系统缺失的运行时生命周期能力。
- **[PR #7032](https://github.com/agentscope-ai/CoPaw/pull/7032) — 自动标题同步**：会话标题不再固定为首条消息截断，随 auto-memory 生成的新记忆自动刷新，提升长会话可扫读性。
- **[PR #7035](https://github.com/agentscope-ai/CoPaw/pull/7035) — 子代理会话分组**：Console 端将 subagent 会话与 cron 会话按来源固定分组展示，已保留用户自定义分组。
- **[PR #7036](https://github.com/agentscope-ai/CoPaw/pull/7036) — 媒体下载控制**：为聊天中的音频/媒体附件在播放条上统一增加下载按钮。
- **[PR #7037](https://github.com/agentscope-ai/CoPaw/pull/7037) — Computer Use 观察层增强**：支持捕获原生菜单、下拉框、owned dialog 等关联窗口表面，扩大 UI Automation 的观察范围。
- **[PR #7024](https://github.com/agentscope-ai/CoPaw/pull/7024) — DashScope 音频修复**：将 Base64 音频格式化为 data URL，并在 provider 拒绝时自动降级重试（不改变历史消息）。
- **[PR #6969](https://github.com/agentscope-ai/CoPaw/pull/6969) — MCP Tool Result 去重修复**：针对 FastMCP 同时返回 `content` 与 `structuredContent` 时写入重复数据的问题，改为只保留结构化字段。
- **[PR #6908](https://github.com/agentscope-ai/CoPaw/pull/6908) — 升级 AgentScope 至 2.0.6**：解决与新版 AgentScope 的兼容性问题。

**整体评价**：项目今日在技能生命周期管理、会话组织体验、Computer Use 能力边界三个方向同时发力，功能迭代节奏明显加快；同时 OneBot 媒体本地化与 AgentScope 2.0.6 升级体现了对渠道层与依赖层稳定性的重视。

---

## 四、社区热点

### 1. [Issue #3045](https://github.com/agentscope-ai/CoPaw/issues/3045) — 自动获取模型为什么不可用（8 条评论，已关闭）
v1.0.1 Windows 桌面版用户反馈自动获取模型功能不可用。该 Issue 累计 8 条评论，为本日讨论量最高，说明模型配置向导的可用性是用户的强痛点。

### 2. [Issue #2418](https://github.com/agentscope-ai/CoPaw/issues/2418) — 建议新增 skills-hub 管理页面（7 条评论，已关闭）
用户建议在界面内直接浏览并一键安装主流 skills，免去手动操作。该需求获 7 条评论支持，与今日 PR #7033 动态技能加载形成呼应——技能运行时能力就绪后，管理界面是自然的下一步。

### 3. [Issue #7010](https://github.com/agentscope-ai/CoPaw/issues/7010) — qwenpaw app 只能前台运行，无守护模式（6 条评论，已关闭）
用户通过 SSH 或脚本启动服务时命令一直挂住不返回，`nohup ... &` 也无法脱钩。这是服务端部署场景的硬需求，尤其在 CI/CD 与远程服务器使用中影响严重。

### 4. [Issue #6405](https://github.com/agentscope-ai/CoPaw/issues/6405) — 升级 2.0 后 MCP 工具总是 Tool not found（6 条评论，已关闭）
Docker 版 2.0.0.post3 用户反馈工具名已带 `[mcp-key]__[tool_name]` 前缀但仍找不到工具。结合今日 [Issue #6958](https://github.com/agentscope-ai/CoPaw/issues/6958) 与 [Issue #7016](https://github.com/agentscope-ai/CoPaw/issues/7016)，MCP 工具链路存在系统性稳定性问题，已成为当前社区最大的不满集中点。

### 5. [Issue #7011](https://github.com/agentscope-ai/CoPaw/issues/7011) — Console stop 请求在多 UI 会话下误取消 Feishu 会话（5 条评论，OPEN）
用户已定位到直接证据：两个 UI 会话的 session identity 交叉后，Console 发出的 stop 请求会取消正在进行的 Feishu 会话。该 Issue 仍开放，属于并发安全类 Bug，存在实际业务影响。

**社区诉求归纳**：模型配置体验、技能市场、后台运行、MCP 稳定性是最集中的四大议题。

---

## 五、Bug 与稳定性

今日关闭的 38 条 Issue 中包含一批历史 Bug 的清理（如 #2303 MiniMax 连接检查 404、#6972 Chrome 扩展 WS 断连、#6951 Scroll 压缩后记录不可见、#6197 nvidia-smi 挂起导致启动卡死、#4832 Windows 下 cmd 窗口闪烁等），但仍有多项新问题待处理：

### 高严重度

| Issue | 问题描述 | 状态 |
|---|---|---|
| [Issue #7011](https://github.com/agentscope-ai/CoPaw/issues/7011) | **多 UI 会话并发冲突**：Console stop 请求可取消活跃的 Feishu 会话（session identity 串线），为 2.1.0 版本并发缺陷 | OPEN，无 fix PR |
| [Issue #7025](https://github.com/agentscope-ai/CoPaw/issues/7025) | **Creator 插件安装后导致所有插件失效**，带截图与日志佐证 | OPEN，无 fix PR |
| [Issue #7016](https://github.com/agentscope-ai/CoPaw/issues/7016) | **工具调用 offload 接口 404**：流式会话时页面反复请求 `/api/tool-calls/{id}/offload` 返回 `{"detail":"Tool call not found"}`，导致工具结果无法正常回收 | OPEN，无 fix PR |

### 中严重度

| Issue | 问题描述 | 状态 |
|---|---|---|
| [Issue #6958](https://github.com/agentscope-ai/CoPaw/issues/6958) | FastMCP 工具返回超过截断阈值时，Tool Result 文件写入两份重复数据（一份非结构化、一份格式化），浪费存储且易混淆 | OPEN，已有 [PR #6969](https://github.com/agentscope-ai/CoPaw/pull/6969) 修复中 |
| [Issue #6819](https://github.com/agentscope-ai/CoPaw/issues/6819) | Channel 工具在需要审批时不弹出提示，无法区分"正常调用"与"挂起等待审批" | CLOSED（今日关闭，状态待确认） |

### 低严重度

- [Issue #7040](https://github.com/agentscope-ai/CoPaw/issues/7040) — "Stop Running" 误拼为 "Stopp Running"，用户批量反馈文案错别字。

**稳定性评估**：插件体系（#7025）与 MCP 工具链（#6405/#6958/#7016）是当前稳定性短板；并发会话管理（#7011）为潜在高危项，建议优先排查。

---

## 六、功能请求与路线图信号

### 已有实现/关联 PR 支撑的需求（预计可能进入下一版本）

| 需求 Issue | 对应 PR/信号 |
|---|---|
| [Issue #5551](https://github.com/agentscope-ai/CoPaw/issues/5551) Computer Use 支持 | [PR #7037](https://github.com/agentscope-ai/CoPaw/pull/7037) 已提交 Computer Use 观察窗口表面增强，功能开发中 |
| [Issue #2418](https://github.com/agentscope-ai/CoPaw/issues/2418) skills-hub 管理页面 | [PR #7033](https://github.com/agentscope-ai/CoPaw/pull/7033) 补齐技能动态加载/卸载，为管理界面铺路 |
| [Issue #944](https://github.com/agentscope-ai/CoPaw/issues/944)、[#3002](https://github.com/agentscope-ai/CoPaw/issues/3002)、[#2737](https://github.com/agentscope-ai/CoPaw/issues/2737) OpenAI Responses API 兼容 | [PR #6302](https://github.com/agentscope-ai/CoPaw/pull/6302) 统一 provider 发现/模型元数据/路由，有望系统性解决 |
| [Issue #2314](https://github.com/agentscope-ai/CoPaw/issues/2314) 跨 provider 对话历史兼容 | 同上，PR #6302 覆盖 |
| [Issue #2846](https://github.com/agentscope-ai/CoPaw/issues/2846)、[#3464](https://github.com/agentscope-ai/CoPaw/issues/3464) 桌面端自动更新 | 用户呼声高，未看到明确对应 PR，仍需推动 |

### 尚无对应 PR 的开放需求

- [Issue #4001](https://github.com/agentscope-ai/CoPaw/issues/4001) — 对话中手动删除单条消息（4 条评论，OPEN）
- [Issue #4436](https://github.com/agentscope-ai/CoPaw/issues/4436) — 支持将部分对话转移至新会话（会话拆分，OPEN）
- [Issue #2554](https://github.com/agentscope-ai/CoPaw/issues/2554) — 定时任务支持最终输出 heartbeat_ok 时不投递到频道
- [Issue #2763](https://github.com/agentscope-ai/CoPaw/issues/2763) — 通过对话指令 `/models` 查看与切换模型（获 👍 2）
- [Issue #6433](https://github.com/agentscope-ai/CoPaw/issues/6433) — 应用内直接下载并运行 GGUF 本地模型（零配置本地模型）

---

## 七、用户反馈摘要

从今日 Issue 与评论中提炼的用户真实声音：

- **桌面端更新体验差（高频反馈）**："每次都要卸载后再更新很麻烦"（[#2846](https://github.com/agentscope-ai/CoPaw/issues/2846)）；Windows 任务栏显示 Python 图标而非 CoPaw 图标，品牌感知受损。
- **MCP 工具链升级阵痛**：2.0 升级后工具名带前缀却找不到（[#6405](https://github.com/agentscope-ai/CoPaw/issues/6405)）；工具结果文件出现重复数据（[#6958](https://github.com/agentscope-ai/CoPaw/issues/6958)）；offload 接口 404（[#7016](https://github.com/agentscope-ai/CoPaw/issues/7016)）。
- **服务端部署受阻**：SSH/脚本启动命令卡死不返回，用户期望真正的守护进程模式（[#7010](https://github.com/agentscope-ai/CoPaw/issues/7010)）。
- **压缩机制损害用户可见记录**：Scroll 策略压缩后重新进入会话，历史消息消失只剩内部 eviction index，用户认为"上下文压缩应只影响模型输入，不应破坏用户可见的完整 transcript"（[#6951](https://github.com/agentscope-ai/CoPaw/issues/6951)）。
- **模型配置兼容性仍受限**：仅支持 Responses API 的 OpenAI 兼容网关无法使用（[#944](https://github.com/agentscope-ai/CoPaw/issues/944)、[#3002](https://github.com/agentscope-ai/CoPaw/issues/3002)）；MiniMax 的 `/models` 端点不被 Anthropic client 支持（[#2303](https://github.com/agentscope-ai/CoPaw/issues/2303)）。

---

## 八、待处理积压

### 长期未合并的重要 PR（请维护者关注）

| PR | 创建时间 | 说明 |
|---|---|---|
| [PR #5992](https://github.com/agentscope-ai/CoPaw/pull/5992) | 2026-07-12 | **按会话覆盖模型配置**（per-session model overrides），已等待超过 1 个月，功能与应用场景明确 |
| [PR #6302](https://github.com/agentscope-ai/CoPaw/pull/6302) | 2026-07-21 | **统一 provider 发现、模型元数据、路由与 agent 模型控制**，涉及面广，是解决多起模型兼容性问题的关键 PR |
| [PR #6869](https://github.com/agentscope-ai/CoPaw/pull/6869) | 2026-08-10 | 统一后台任务超时契约，修复 stop 覆盖 spawn 超时问题，等待 review 中 |
| [PR #6908](https://github.com/agentscope-ai/CoPaw/pull/6908) | 2026-08-11 | AgentScope 升级至 2.0.6，若合并可缓解 [Issue #6612](https://github.com/agentscope-ai/CoPaw/issues/6612) 描述的两大兼容性故障 |

### 长期开放的重要 Issue

- [Issue #4001](https://github.com/agentscope-ai/CoPaw/issues/4001)（2026-05-02 创建）— 单条消息删除，已开放 3 个半月，4 条评论，需求持续可见。
- [Issue #4436](https://github.com/agentscope-ai/CoPaw/issues/4436)（2026-05-16 创建）— 会话拆分，已开放 3 个月，属于长上下文管理的合理补充。

### 风险提示

PR 待合并队列已达 **26 条**，其中 #5992 与 #6302 等待超过三周。建议维护者评估是否需要增加 review 人力或对大型 PR 做分段合并，避免功能积压导致社区贡献者流失。

---

**数据来源**：[github.com/agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw) ｜ 统计窗口：2026-08-14 至 2026-08-15

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-15

## 1. 今日速览

ZeroClaw 过去 24 小时保持极高活跃度：共更新 **33 条 Issues**（30 条活跃、3 条关闭）和 **50 条 PR**（47 条待合并、3 条完成合并/关闭），无新版本发布。讨论重心集中在多个高优先级 RFC（Goal mode、高危 shell 命令策略、Chat Completions 兼容层、认证体系等），显示项目正处于 v0.8.5 稳定化与 v0.9.0 架构定型的叠加期。安全类修复成为今日 PR 主流（原子化 action 预算、阻止危险命令、HTTP egress 加固），同时一个 S1 级 Bug（不完整终端响应被报告为成功）已有修复 PR 提交。不过 **47 个 PR 长期排队**（部分已挂起近 50 天）是当前项目健康度的主要隐患。

---

## 2. 版本发布

无。过去 24 小时没有新 Release。

---

## 3. 项目进展

今日有 **3 个 PR 完成合并/关闭**（具体清单未在公开摘要中列出），另有 3 个 Issue 关闭。从关闭项可确认：

- **[#6663] feat(telegram): show tool-call progress during partial streaming**（已关闭）— Telegram 渠道在 `stream_mode = "partial"` 下展示工具调用进度的功能已落地，改善流式响应体验。
- **[#9982] Hosted memory for ZeroClaw users — ViBo Cloud API**（已关闭，wontfix）— 外部第三方托管记忆提案被婉拒，说明维护者倾向自研内存基础设施，而非引入商业托管依赖。

**今日新提交的关键 PR**（6 个，均为 8 月 14 日创建）：

- **安全修复**
  - [#9996 fix(security): make action budget accounting atomic](https://github.com/zeroclaw-labs/zeroclaw/pull/9996) — 将发件人维度的 action 预算扣减改为原子操作，防止并行工具调用突破 `max_actions_per_hour` 上限。
  - [#9839 feat(security): block direct spellings of irreversible destructive commands](https://github.com/zeroclaw-labs/zeroclaw/pull/9839) — 在 allowlist 放行 `*` 时仍拦截不可逆的破坏性命令拼写，修复安全策略绕过隐患。
- **Bug 修复**
  - [#9999 fix(compatible): classify output-limited terminal responses](https://github.com/zeroclaw-labs/zeroclaw/pull/9999) — 修复 [#9421（S1）](https://github.com/zeroclaw-labs/zeroclaw/issues/9421)：将 OpenAI 兼容 `finish_reason: "length"` 正确归类为输出 token 上限触发的终止失败，避免将不完整响应报告为成功。
  - [#10002 fix(tools): accept camelCase segments in google_workspace validation](https://github.com/zeroclaw-labs/zeroclaw/pull/10002) — 修复 Google Workspace 工具因 API 标识符为 camelCase（如 `calendarList`、`batchUpdate`）而被校验误拒的问题。
  - [#10001 fix(tests): gate non-UTF-8 browser path fixtures to Linux](https://github.com/zeroclaw-labs/zeroclaw/pull/10001) — 将依赖 `0xFF` 字节路径的浏览器相关测试限定在 Linux，提升跨平台测试稳定性。
- **功能**
  - [#9994 feat(zerocode): add transcript copy context menu](https://github.com/zeroclaw-labs/zeroclaw/pull/9994) — ZeroCode 转录消息和代码块新增右键复制菜单。

整体来看，项目在**安全策略闭环**（预算原子化 + 危险命令拦截 + 终止响应判定）和**跨平台修复**两个方向同时推进，但合并吞吐量远低于提交速度，积压问题正在累积。

---

## 4. 社区热点

今日评论最集中的议题清一色为 RFC 架构讨论，说明社区正处于"定边界"阶段：

- **[#8303] RFC: Goal mode v1 — bounded foreground Matrix work**（22 评论）  
  https://github.com/zeroclaw-labs/zeroclaw/issues/8303  
  讨论核心：如何用持久化方式跨多个 agent 回合追踪用户目标，同时刻意缩小首版范围，不捆绑重启交接、异步子任务、Web 等复杂特性。社区诉求是"分期落地"，避免大而全的首次交付。

- **[#7155] RFC: Per-execution confirmation tier for high-risk shell commands**（20 评论）  
  https://github.com/zeroclaw-labs/zeroclaw/issues/7155  
  参照 Claude Code 的 allow/ask/deny 三档策略，为高危 shell 命令建立分级确认机制。这是安全与效率平衡的典型诉求，已进入第三版修订。

- **[#8603] RFC: ZeroClaw Chat Completions profile**（19 评论）  
  https://github.com/zeroclaw-labs/zeroclaw/issues/8603  
  核心诉求是让 ZeroClaw 暴露 OpenAI Chat Completions 兼容接口，从而接入 Open WebUI、LobeChat、Continue.dev、Aider、LangChain、OpenAI SDK 等主流生态客户端，降低集成门槛。

- **[#7141] RFC: Pluggable inbound authentication and canonical principals**（16 评论）  
  https://github.com/zeroclaw-labs/zeroclaw/issues/7141  
  讨论 OIDC 与可插拔认证供应商，面向企业级身份接入需求。已有 8 个修订版本，落地概率高。

- **[#7462] [Bug]: 74 test failures on Windows**（15 评论）  
  https://github.com/zeroclaw-labs/zeroclaw/issues/7462  
  持续两个月的 Windows 测试失败问题获得大量社区关注，暴露 CI 仅覆盖 Linux 的短板。

**趋势判断**：社区讨论集中在"安全边界"（shell 策略、认证、高危操作）和"生态兼容"（Chat Completions）两条线，预计 v0.9.0 的架构轮廓将由这批 RFC 决定。

---

## 5. Bug 与稳定性

按严重程度排列：

### S1 — 工作流阻断

- **[#9421] Incomplete terminal responses can be reported as successful**  
  https://github.com/zeroclaw-labs/zeroclaw/issues/9421  
  Provider 可以在没有可信最终答案的情况下结束回合，但运行时仍向调用方报告成功，影响依赖可靠终态的自动化流程。  
  **✅ 已有修复 PR：[#9999](https://github.com/zeroclaw-labs/zeroclaw/pull/9999)**（提交于今日）。

### S2 — 行为降级

- **[#7462] 74 test failures on Windows**（Unix-only 测试命令、路径语义、控制台编码）  
  https://github.com/zeroclaw-labs/zeroclaw/issues/7462  
  简体中文 Windows 11 + 代码页 936 环境下运行测试套件产生 74 个失败，CI 未覆盖 Windows 导致回归未被发现。已挂起超过两个月，无修复 PR。

- **[#9486] High-entropy detector redacts Solana wallet addresses**  
  https://github.com/zeroclaw-labs/zeroclaw/issues/9486  
  高熵检测器将 Solana 钱包地址误判为敏感信息，Telegram 出站消息中的地址全部被替换为 `[REDACTED_HIGH_ENTROPY_TOKEN]`，且 `high_entropy_tokens=false` 在 channel 路径不生效。无修复 PR。

- **[#9759] Quickstart 接受重复的启用 webhook 端口**  
  https://github.com/zeroclaw-labs/zeroclaw/issues/9759  
  PR #9605 默认 webhook 端口后，Quickstart 可暂存多个相同端口的 webhook 别名，造成配置歧义。无修复 PR。

### S3 — 轻微问题

- **[#9983] Fallback model without vision incorrectly reports cause of error**  
  https://github.com/zeroclaw-labs/zeroclaw/issues/9983  
  主模型支持视觉、fallback 不支持视觉时，错误信息将失败归因到"vision capability"而非真实的 fallback 配置问题。无修复 PR。

### 测试基础设施

- **[#9965] cron custom-shell test hits ETXTBSY under parallel runtime gate**  
  https://github.com/zeroclaw-labs/zeroclaw/issues/9965  
  `cron::scheduler::tests::build_cron_shell_command_executes_with_custom_native_shell` 在 Parallel Runtime Test 门禁下触发 ETXTBSY 竞态，导致无关 PR 出现红色检查。已有 CI 迁移至 Blacksmith 的 PR（[#9985](https://github.com/zeroclaw-labs/zeroclaw/pull/9985)）可能间接缓解，但尚无直接修复。

### 内存后端

- **[#9919] Qdrant 在 builder-only factory 中静默回退到 MarkdownMemory**  
  https://github.com/zeroclaw-labs/zeroclaw/issues/9919  
  当存储配置不可用时，`create_memory_with_builders` 将 Qdrant 请求静默降级至 MarkdownMemory，可能让用户误以为在使用 Qdrant。p1 优先级，无修复 PR。

---

## 6. 功能请求与路线图信号

**最可能进入下一版本（已有对应实现）：**

- **[#9895] Provider-grouped, paginated Telegram /model picker**（8 月 10 日）  
  https://github.com/zeroclaw-labs/zeroclaw/issues/9895  
  移动端 Telegram 用户选择 provider/model 体验不佳，请求分组分页的内联键盘选择器。  
  **✅ 今日已有 PR [#9997](https://github.com/zeroclaw-labs/zeroclaw/pull/9997)** 实现，进入合并流程的可能性大。

- **[#7065] Agent evaluation harness (`zeroclaw eval`)** — replay + live 模式  
  https://github.com/zeroclaw-labs/zeroclaw/issues/7065  
  配套 tracker **[#9967](https://github.com/zeroclaw-labs/zeroclaw/issues/9967)** 于 8 月 13 日建立，要求确立 benchmark 选择、配置 pinning、逐轮插桩和基线运行。这是开发方向信号：团队准备系统性度量 agent/harness 质量。

**新提出但尚无实现：**

- **[#9970] Authorize Discord members by role, not just user ID**（8 月 13 日）  
  https://github.com/zeroclaw-labs/zeroclaw/issues/9970  
  请求新增 `allowed_role_ids`，与现有用户 ID allowlist 叠加。风险等级 high，标签 `status:in-progress`，可能在 v0.8.5 窗口内被纳入。

- **[#9788] Report the active shell dialect in the system prompt**（8 月 6 日，blocked）  
  https://github.com/zeroclaw-labs/zeroclaw/issues/9788  
  让模型知道具体 shell 方言而不是从 OS 名称猜测，提升工具调用准确率。当前为 `status:blocked`。

- **[#9621] Staged opt-in product telemetry with operator-reviewed reports**  
  https://github.com/zeroclaw-labs/zeroclaw/issues/9621  
  通过分阶段可选遥测解决维护者"不知道哪些功能被真正使用"的决策困境。

- **[#9986] Export an agent to a portable bundle**（PR 已提交）  
  https://github.com/zeroclaw-labs/zeroclaw/pull/9986  
  `zeroclaw agents export <alias> --out <dir>`，将 agent 配置闭包与工作区打包，简化多机迁移。

**路线图判断**：v0.8.5 稳定线（8 月 30 日截止，intake 已冻结）预计只收小型修复（如 #9919、#9759）；Telegram model picker、portable agent bundle、agent eval 基线更可能落入 v0.8.5 之后的迭代；Goal mode、Chat Completions profile、统一附件架构等大型 RFC 则属于 v0.9.0 及以后的交付。

---

## 7. 用户反馈摘要

从今日活跃的 Issue 评论中提炼的真实用户声音：

- **Telegram 渠道误伤真实资产地址**（[#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486)）：俄语用户反馈，接入 Solana MCP server 后，agent 无法在 Telegram 中说出钱包地址，所有地址被 `[REDACTED_HIGH_ENTROPY_TOKEN]` 替换，且显式关闭 `high_entropy_tokens` 无效。这是**安全机制与真实业务场景冲突**的典型案例，影响 MCP 生态可用性。

- **Windows 开发者被 CI 盲区困扰**（[#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)）：简体中文 Windows 用户遇到 74 个测试失败，涉及 Unix-only 测试命令、路径语义和控制台编码。评论反映出社区对 CI 只跑 Linux 的不满："CI does not catch this because the Test job only runs on Linux"。

- **移动端 Telegram 管理不便**（[#9895](https://github.com/zeroclaw-labs/zeroclaw/issues/9895)）：用户称文本式 `/model` 命令在配置多路由时"手机上操作很笨重"（cumbersome on mobile），直接催生了今日的 [#9997 PR](https://github.com/zeroclaw-labs/zeroclaw/pull/9997)。

- **Discord 权限模型单一**（[#9970](https://github.com/zeroclaw-labs/zeroclaw/issues/9970)）：社区成员需要按角色而非仅按用户 ID 授权，这是服务器管理员的常见诉求。

- **错误信息的"归因误导"**（[#9983](https://github.com/zeroclaw-labs/zeroclaw/issues/9983)）：无视觉能力的 fallback 模型导致视觉请求失败时，用户看到的是"vision capability"错误，而非真正的 fallback 配置问题。用户希望错误信息更准确地指向修复路径。

- **外部商业化提案遇冷**（[#9982](https://github.com/zeroclaw-labs/zeroclaw/issues/9982)）：第三方托管记忆 API 的提案在 2 条评论内被标记 wontfix 关闭。社区/维护者对引入商业托管依赖保持审慎，偏好自建。

---

## 8. 待处理积压

### PR 合并积压（最需关注）

当前 **47 个 PR 待合并**，部分分支已悬置超过一个月：

- [#8443 feat(matrix): add single-message progress drafts](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) — 6 月 28 日创建，Matrix 渠道单消息进度草稿，`size:XL`，等待作者响应。
- [#9137 feat(plugins): add shared egress policy foundation](https://github.com/zeroclaw-labs/zeroclaw/pull/9137) — 7 月 18 日创建，`size:XL`，依赖 [#9580](https://github.com/zeroclaw-labs/zeroclaw/pull/9580) 合并。
- [#9126 feat(plugins): validate typed instance config](https://github.com/zeroclaw-labs/zeroclaw/pull/9126) — 7 月 18 日创建，`size:XL`，同为插件体系基础。
- [#9580 fix(security): harden built-in HTTP egress on the shared network guard](https://github.com/zeroclaw-labs/zeroclaw/pull/9580) — 7 月 31 日创建，`priority:p1`，HTTP egress 安全加固，阻塞下游多项工作。

### 等待维护者审查

- [#9002 fix(gateway): keep agent turns alive after viewer disconnect](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) — 7 月 11 日创建，dashboard WebSocket 断连不应取消 agent 任务。
- [#9281 fix(config): roll back auto-created map aliases when config set fails](https://github.com/zeroclaw-labs/zeroclaw/pull/9281) — 7 月 23 日创建，config/set 失败时的回滚一致性。

### 长期悬而未决的 RFC

以下 RFC 均创建于 **5 月底至 6 月初**，虽有持续修订但迟迟未关闭，建议维护者给出明确决策：

- [#6954 RFC: Provenance, conversation binding, and reply contract for internally initiated agent turns](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) — 5 月 26 日创建。
- [#6971 RFC: Security posture, credential boundaries, and universal ingress policy](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) — 5 月 27 日创建。
- [#7155 RFC: per-execution confirmation tier for high-risk shell commands](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) — 6 月 3 日创建，20 条评论，p1 优先级。
- [#7141 RFC: Pluggable inbound authentication and canonical principals](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) — 6 月 3 日创建，16 条评论，p1 优先级。
- [#7142 RFC: Runtime-owned security decision pipeline and restrictive overlays](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) — 6 月 3 日创建。

### 维护者决策队列

社区已自发建立了 **[#8692 Tracker: Maintainer decision queue for RFCs and design issues](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)**，作为 RFC 和设计问题的集中决策入口。该 tracker 本身目前获得 13 条评论，说明社区对"决策透明化"有明确期待，建议维护者按此队列逐项推进、更新状态。

---

**总结**：ZeroClaw 正处于架构收敛的关键窗口期。社区活跃度高、安全类贡献密集，但 PR 合并积压（47 个）和 Windows 测试基础设施缺失是两项最需要优先处理的健康度风险。若能在 v0.8.5 稳定线（8 月 30 日）前消化部分长尾 PR，将显著提升交付信心。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*