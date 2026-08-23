# OpenClaw 生态日报 2026-08-23

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-08-22 23:10 UTC

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

# OpenClaw 项目动态日报 — 2026-08-23

## 今日速览

OpenClaw 项目在过去 24 小时内保持极高的社区活跃度：共产生 500 条 Issue 更新（其中 479 条新开或活跃、21 条关闭）和 500 条 PR 更新（其中 424 条待合并、76 条已合并/关闭）。尽管无新版本发布，但项目正处于 **v2026.8.1-beta.2 的发布验证关键期**，beta 版本暴露了多个 P0/P1 稳定性问题（事件循环阻塞、SQLite 损坏、子代理交付丢失等），维护者通过 clawsweeper 自动化机器人和活跃的 PR 提交正在密集响应。社区讨论热度集中在发布验证流程、流式传输超时配置、WhatsApp 多模态消息阻塞和子代理会话状态一致性等核心痛点。

---

## 项目进展

今日有 76 个 PR 被合并或关闭，以下为重要变更：

### 安全与策略
- **PR #116489**（已关闭）: feat(security): require acknowledgement for install policy warnings — 引入 `security.installPolicy` 命令的 `warn` 返回，交互式 CLI 安装需输入精确目标名称确认后才能继续，强化插件/技能安装的安全边界。链接: https://github.com/openclaw/openclaw/pull/116489
- **PR #120900**（已关闭）: feat(ui): review install policy warnings — 作为 #116489 的 UI 层配套，管理员可在 Control UI 中审阅安装策略警告并主动确认继续。链接: https://github.com/openclaw/openclaw/pull/120900

### 消息交付与网关稳定性
- **PR #126424**（已关闭）: fix(gateway): keep conversation delivery within agent bindings — 修复多智能体操作者通过会话工具将对话投递到错误智能体绑定的问题，涵盖 Discord、Slack、Telegram 等 13+ 渠道。链接: https://github.com/openclaw/openclaw/pull/126424
- **PR #125617**（开放）: fix(message): settle WebChat media sends promptly — 修复 WebChat 媒体发送确认后仍保持缓冲、导致发送看起来卡住并引发用户重试的体验问题。链接: https://github.com/openclaw/openclaw/pull/125617

### 认证与会话修复
- **PR #125471**（已关闭）: fix(models): keep Claude CLI OAuth available in Control UI — 修复旧版 `anthropic:claude-cli` 认证配置导致重启后 OAuth 刷新所有权丢失的问题。链接: https://github.com/openclaw/openclaw/pull/125471
- **PR #127713**（已关闭）: fix: macOS onboarding waits for Gateway restart — 修复 macOS 首次配置时新旧 socket 切换导致激活响应被误分类为已有模型的问题。链接: https://github.com/openclaw/openclaw/pull/127713
- **PR #127530**（开放）: fix: explicit session resets clear prior context — 确保显式 `/new` 或 `/reset` 后不再向模型发送重置前的旧消息。链接: https://github.com/openclaw/openclaw/pull/127530

### 新增功能（开放待合并）
- **PR #128053**: feat: add session trajectory view — 允许运维人员就地检查会话实际执行路径（模型尝试、工具嵌套、审批等待、压缩事件），大幅提升可观测性。链接: https://github.com/openclaw/openclaw/pull/128053
- **PR #128050**: feat(ui): send composer prompts to background sessions — Control UI 支持向后台会话发送任务，无需离开当前聊天即可启动独立工作。链接: https://github.com/openclaw/openclaw/pull/128050
- **PR #127982**: feat(plugins): expose durable plugin session state — 外部插件的持久会话扩展可在后续轮次重启后读取自身状态。链接: https://github.com/openclaw/openclaw/pull/127982

> 项目整体迈进的判断：**发布验证驱动的高密度修复期**。76 个 PR 中大量集中在 beta.2 引入的回归和可靠性问题，安全边界持续加固，Control UI 功能快速扩展中。

---

## 社区热点

### 1. Release validation: v2026.8.1-beta.2（Issue #125626，19 条评论）
当前最热 Issue，作为 beta.2 发布验证的跟踪条目，要求测试者通过验证技能在真实网关上升级并填写工作单。**背后诉求**：社区担心 beta 质量，希望建立系统化的发布验证流程。作者: Patrick-Erichsen。链接: https://github.com/openclaw/openclaw/issues/125626

### 2. 可配置流式传输看门狗超时阈值（Issue #68596，15 条评论，👍 8）
用户要求为流式传输看门狗增加可配置超时，因为 kimi-k2.5、DeepSeek-R1 等长推理模型频繁触发 `no stream updates for 30s` 警告。**背后诉求**：长推理模型（R1 风格）日益普及，固定超时已不适用，需要灵活性。链接: https://github.com/openclaw/openclaw/issues/68596

### 3. WhatsApp 1:1 图片消息阻塞主通道约 3 分钟（Issue #96834，14 条评论）
多模态图片注入导致消息通道卡死约 3 分钟，run 被困在 `active_reply_work/queued_work_without_active_run` 状态。**背后诉求**：多模态输入在真实聊天渠道的处理路径存在严重状态管理缺陷，用户等待时间不可接受。链接: https://github.com/openclaw/openclaw/issues/96834

### 4. 硬编码工作路径被合并发布（Issue #51429，12 条评论）
用户安装最新版后发现 OpenClaw 创建了 `/Users/wangtao` 文件夹并将工作区指向该目录，质疑硬编码路径为何被合并发布。**背后诉求**：代码审查流程存在漏洞，用户对发布质量产生信任危机。链接: https://github.com/openclaw/openclaw/issues/51429

### 5. MCP 工具未注入子代理会话（Issue #85030，12 条评论，👍 6）
`bundle-mcp`、per-tool 允许列表和 per-agent 允许列表在 `sessions_spawn` 会话中全部被忽略，子代理只能看到内置工具。**背后诉求**：MCP 生态扩展的核心场景（子代理使用 MCP 工具）无法工作，影响面大。链接: https://github.com/openclaw/openclaw/issues/85030

---

## Bug 与稳定性

### P0 级（严重）
- **beta.2 网关事件循环阻塞 ~100 秒/周期**（#124788）：2026.8.1-beta.2 每约 10.9 分钟阻塞 100-120 秒，WebSocket 断开、`/ready` 无响应、cron 停滞，禁用全部内存插件仍复现。**无 fix PR**。链接: https://github.com/openclaw/openclaw/issues/124788
- **SQLite 损坏在重建后 15-24 小时内复发**（#126821）：5 天 5 次事件，包括"瘫痪网关"模式（拒绝所有服务但不退出）。WSL2 环境，beta.2。**无 fix PR**。链接: https://github.com/openclaw/openclaw/issues/126821

### P1 级（高严重度）
- **子代理完成交付丢失**（#67777）：direct-announce 超时、drain 或 orphan 清理时可丢失子代理完成消息。**无 fix PR**。链接: https://github.com/openclaw/openclaw/issues/67777
- **僵尸子进程积累导致运行时退化**（#97616）：hook/tool 子进程未被回收，`openclaw-hooks`、`bash`、`codex` 僵尸进程堆积。**无 fix PR**。链接: https://github.com/openclaw/openclaw/issues/97616
- **备份验证退出 13 并留下损坏 .tmp 存档**（#89257）：`openclaw backup create --verify` 退出码 13，遗留损坏临时文件。**无 fix PR**。链接: https://github.com/openclaw/openclaw/issues/89257
- **Codex OAuth 刷新超时导致 cron/heartbeat 失败**（#89278）：OAuth 刷新成功但耗时 >10 秒，触发 cron 任务 10 秒超时。**有 PR 关联**（#116248 部分相关）。链接: https://github.com/openclaw/openclaw/issues/89278
- **子代理生成失败：vLLM thinking 模型 XML 工具调用格式错误**（#124284）：beta.2 引入的 `wrapStreamFnWithProviderPromptState` 破坏 vLLM 兼容性。**无 fix PR**。链接: https://github.com/openclaw/openclaw/issues/124284
- **未处理的 Playwright 断言错误崩溃网关**（#45224）：CDP 会话断言错误未捕获导致进程退出。**无 fix PR**。链接: https://github.com/openclaw/openclaw/issues/45224
- **同步 I/O（execSync/readFileSync）导致事件循环阻塞**（#78805）：主线程阻塞最长 4 秒，影响所有渠道，**有 open PR**（#121576 部分相关）。链接: https://github.com/openclaw/openclaw/issues/78805

### P2 级（中严重度）
- **MCP 工具未注入子代理**（#85030，12 条评论，👍 6） — 无 fix PR。链接: https://github.com/openclaw/openclaw/issues/85030
- **内存插件阻塞回复且 QMD 启动过载**（#72015） — 无 fix PR。链接: https://github.com/openclaw/openclaw/issues/72015
- **compaction 重试产生孤儿 fork，破坏会话链重建**（#48810） — 无 fix PR。链接: https://github.com/openclaw/openclaw/issues/48810
- **上下文使用量从 57% 骤降至 13% 但压缩计数为 0**（#108215） — 无 fix PR。链接: https://github.com/openclaw/openclaw/issues/108215

### 已有 fix PR 在途的 Bug
- **Code Mode 预检拒绝后无法修复** → PR #128054（开放）链接: https://github.com/openclaw/openclaw/pull/128054
- **Tool Search 元 tool_call 循环** → PR #126618（开放）链接: https://github.com/openclaw/openclaw/pull/126618
- **默认 agent 在二次 paste-api-key 后丢失密钥** → PR #116248（开放）链接: https://github.com/openclaw/openclaw/pull/116248
- **Matrix 轮询答案格式错误导致 TypeError** → PR #123231（开放）链接: https://github.com/openclaw/openclaw/pull/123231
- **Gateway 更新中删除 dist 导致运行中实例故障** → PR #125896（开放）链接: https://github.com/openclaw/openclaw/pull/125896
- **累积 provider usage 导致过早压缩** → PR #125833（开放）链接: https://github.com/openclaw/openclaw/pull/125833

---

## 功能请求与路线图信号

| 功能请求 | Issue | 热度 | 相关 PR/信号 | 可能纳入版本判断 |
|---------|-------|------|-------------|----------------|
| 可配置流式看门狗超时 | #68596 | 👍 8 | 无直接 PR | **高概率** — 长推理模型普及，P2 且有 product-decision 标签 |
| UI 全面改版（UX 评分驱动） | #75947 | 👍 2 | 多个 Control UI PR 在途（#128050、#128047） | 部分已实现，改版方向明确 |
| 会话快照保存/加载（`/session save\|load`） | #13700 | 👍 0 | 无 | 方向不明确，P2 长期挂起 |
| 内置节奏感知限流 | #45771 | 👍 2 | 无 | 需求真实但优先级低，P3 |
| 优雅重启与会话恢复 | #57425 | 👍 1 | 相关 PR #127713 解决 macOS onboarding 场景 | 部分场景已覆盖，完整方案仍缺 |
| 手动清除工具结果 | #45503 | 👍 2 | 无 | 与 compaction 优化相关，可能作为远期增强 |
| per-session 开发者工具模式（Control UI） | #128045 → PR #128046 | — | **已提交 PR** | **高概率** — AI-assisted PR 已提交 |
| 会话轨迹视图（可观测性） | #128052 → PR #128053 | — | **已提交 PR** | **高概率** — 直接响应运维需求 |

**路线图信号分析**：Control UI 是当前最活跃的功能开发方向（今日 4 个新 PR 与 UI 相关）；安全策略确认机制（#116489）已进入收尾；可观测性（会话轨迹）是新崛起的方向。

---

## 用户反馈摘要

### 明确痛点
1. **发布质量堪忧**：用户发现硬编码个人路径（`/Users/wangtao`）被合并发布（#51429），质疑代码审查流程。"Apparently some wangtao hardcode his working space path into the code and somebody merged his code and published"
2. **beta.2 可靠性严重退步**：#124788 事件循环阻塞、#126821 SQLite 持续损坏，用户反馈"pristine DB develops freelist miscount within 15-24 hours of normal operation"
3. **多模态消息处理失败**：WhatsApp 图片消息导致 3 分钟阻塞，用户等待时间不可接受（#96834）
4. **MCP 生态断裂**：子代理无法使用 MCP 工具，文档配置方式全部无效（#85030），用户评论"regardless of how the documented exposure mechanism is configured"
5. **长推理模型适配不足**：固定 30 秒流式超时频繁误报（#68596），用户使用 kimi-k2.5、DeepSeek-R1 时反复被中断

### 使用场景反馈
- 生产环境用户（#123799）受 Codex compact 404 影响，主动寻求升级/回退指导："need operational guidance after #123706 was closed"
- AI Agent 代发 Issue 的现象出现（#124911，Scott Hanselman 的 agent 代为提交），说明 AI 开发者工作流已进入真实生产
- 用户对 UI 的批评集中在"配置页难以阅读和导航，看起来像 AI 生成的代码或原始配置"（#75947）

### 积极信号
- 自动化机器人（clawsweeper）在密集维护 issue 状态，`clawsweeper:fix-shape-clear` 和 `clawsweeper:queueable-fix` 标签帮助快速识别可修复项
- 用户对 PR 响应积极，proof 标签（`proof: 🎥 video`）表明社区愿意提供高质量复现材料

---

## 待处理积压

### 长期未响应/滞留的高热度 Issue
- **Issue #51429**（P2，3/21 创建，12 条评论）：硬编码路径问题至今未关闭，`needs-maintainer-review` 已挂 5 个月。链接: https://github.com/openclaw/openclaw/issues/51429
- **Issue #85030**（P1，👍 6，5/21 创建）：MCP 工具未注入子代理，5 月提出至今无 fix PR，被标记 `needs-live-repro` 和 `needs-product-decision`。链接: https://github.com/openclaw/openclaw/issues/85030
- **Issue #68596**（P2，4/18 创建）可配置流式超时，15 条评论 8 个 👍，仍处于 `needs-product-decision`。链接: https://github.com/openclaw/openclaw/issues/68596
- **Issue #50291**（P2，3/19 创建）：Plugin Hooks 缺少追踪上下文字段，9 条评论，`needs-product-decision` 滞留 5 个月。链接: https://github.com/openclaw/openclaw/issues/50291

### 关键 PR 等待审查
- **PR #121576**（size: XL，8/10 创建）：stripModelSpecialTokens 空格插入逻辑修复，涉及 30+ 渠道/平台标签，等待 maintainer review。链接: https://github.com/openclaw/openclaw/pull/121576
- **PR #117937**（size: L，8/2 创建）：visible-reply 循环检测接入运行时，状态 `needs-pr-context`，尚未获得审查上下文。链接: https://github.com/openclaw/openclaw/pull/117937

### 被标记 `clawsweeper-recovery-stuck` 的 Issue（卡在恢复流程）
- #125626（发布验证主 Issue）链接: https://github.com/openclaw/openclaw/issues/125626
- #85030（MCP 工具注入）链接: https://github.com/openclaw/openclaw/issues/85030
- #124788（事件循环阻塞）链接: https://github.com/openclaw/openclaw/issues/124788
- #112196（memory_search 恢复）链接: https://github.com/openclaw/openclaw/issues/112196
- #113701（上下文溢出恢复失败）链接: https://github.com/openclaw/openclaw/issues/113701

---

*报告生成时间：2026-08-23 | 数据来源：github.com/openclaw/openclaw*

---

## 横向生态对比

# 个人 AI 助手与自主智能体开源生态横向对比分析

**分析日期：2026-08-23** | 基于 12 个项目的 GitHub 社区动态日报（过去 24 小时）

---

## 1. 生态全景

当前生态处于"β 质量密集修复期"：头部项目的社区讨论高度集中于发布验证、会话一致性与更新可靠性，功能已越过"能用"拐点、进入"可信赖"竞争阶段。MCP 集成、多模态消息处理、长上下文压缩与可观测性构成跨项目共性投入方向，但评审吞吐（ZeroClaw 48 个待合并 PR）与关键稳定性修复速度（OpenClaw 多个 P0/P1 无 fix PR）是普遍瓶颈。以 OpenClaw 为参照，"Claw 系"衍生项目（ZeroClaw、NanoClaw、PicoClaw 等）围绕轻量化、特定渠道与插件化形成差异化生态位；研究型/企业型项目（NanoBot、IronClaw）则在用量契约与成本工程上率先建立量化基准。整体呈现"一个高密度中心 + 多个垂直支点"的生态格局。

## 2. 各项目活跃度对比

| 项目 | Issue 更新 | PR 更新 | 合并/关闭 PR | Release | 健康度评估 |
|------|-----------|---------|-------------|---------|-----------|
| **OpenClaw** | 500（479 活跃/21 关） | 500（424 待合并） | 76 | 无（v2026.8.1-beta.2 验证期） | 🔴 极高活跃，P0/P1 稳定性承压 |
| **ZeroClaw** | 50（43 活跃/7 关） | 50（48 待合并） | 2 | 无 | 🟡 高活跃，评审瓶颈显著 |
| **Hermes Agent** | 50（45 活跃/5 关） | 50（46 待合并） | 4 | 无 | 🟡 高迭代，安全/稳定积压 |
| **NanoClaw** | 1 | 25（17 待合并） | 8 | 无 | 🟢 快速修复迭代，健康 |
| **IronClaw** | 11（7 活跃/4 关） | 22（17 待合并） | 5 | 无 | 🟢 健康，合并队列消化正常 |
| **NanoBot** | 0 | 21（14 待合并） | 7 | 无 | 🟢 基础设施重构+债务清理 |
| **CoPaw** | 7（6 活跃/1 关） | 6（全待合并） | 0 | 无 | 🟡 新 Bug 暂无修复 PR |
| **PicoClaw** | 2 | 6（2 待合并） | 4 | 无 | 🟡 积压清理积极，有一严重新问题 |
| **Moltis** | 1 | 3（全待合并） | 0 | 无 | 🟢 小体量高信号 |
| **LobsterAI** | 0 | 0（5 条 stale 关闭） | 0 | 无 | ⚪ 低活跃维护期 |
| **NullClaw** | — | — | — | 无 | ⚪ 无活动 |
| **ZeptoClaw** | — | — | — | 无 | ⚪ 无活动 |

## 3. OpenClaw 在生态中的定位

- **社区规模断层领先**：单日 500 Issue / 500 PR 更新是第二梯队（Hermes、ZeroClaw 各 50）的 10 倍，合并 PR 数（76）也超过多数项目全量 PR 数，是事实上的生态基准与最大试验场。
- **技术路线差异**：以全渠道消息网关（13+ 渠道）、多智能体操作者绑定、安装策略安全确认与 Control UI 为核心，覆盖广度大于 Hermes 的 Fleet 运营侧重和 NanoBot 的 provider 中立 WebUI；其路线本质是"个人 AI 助手的完整参考实现"，而非某一垂直切面。
- **当前阶段与隐患**：正值 v2026.8.1-beta.2 发布验证关键期，大量合并集中在 beta 回归修复与安全加固（安装策略确认、网关投递绑定）。但事件循环阻塞（#124788）、SQLite 复发损坏（#126821）等 P0 级问题尚无 fix PR，硬编码开发者路径被合并发布（#51429）引发社区对审查流程的信任质疑——大版本的规模优势与质量风险并存。
- **独特优势**：clawsweeper 自动化机器人的 Issue 治理与 `proof: 🎥 video` 证据标签体系，是目前唯一规模化使用自动化运维的 Claw 系项目，修复可验证性显著强于同类。

## 4. 共同关注的技术方向

| 方向 | 涉及项目与具体诉求 |
|------|-------------------|
| **MCP 工具生态可靠性** | OpenClaw #85030（工具未注入子代理会话）；PicoClaw #3269（MCP 故障挂起 agent loop，PR #3337 待合并）；Moltis #1231（服务器重启后客户端失效）；NanoBot #5484（业务错误信封 `isError=false` 误判）；ZeroClaw #9339（远程自定义 CA） |
| **会话状态一致性与恢复** | OpenClaw #67777/#127530（子代理交付丢失、显式重置仍需清除旧上下文）；Hermes #78981（50 万 token 会话压缩后永久死亡）；NanoBot #5483（删除的会话被延迟消息重建）；Moltis #1231（重启后继续用陈旧客户端） |
| **可观测性与用量透明** | NanoBot #5486/#5480/#5481（turn 统一视图、typed usage 契约、trajectory 后端）+ #5485（LangSmith 恢复）；OpenClaw #128053（会话轨迹视图）；Hermes #91616（Codex 用量预测）；IronClaw #7700（通知从"观察推断"转向"证据驱动"） |
| **长上下文与长推理模型适配** | OpenClaw #68596（流式看门狗 30s 固定超时，kimi-k2.5/DeepSeek-R1 频繁误报）；IronClaw #7824（全量回放成本倒挂：227.7M tokens/$10.31/54.4% vs 55.1M/$2.52/60.5%）；Hermes #78981（长会话压缩停滞） |
| **发布/更新可靠性** | OpenClaw #125626（系统化发布验证流程）；Hermes #91277（30 个 issue/15 个 PR 汇聚为单一 tracking）；NanoClaw #3444（非 Git 安装版本误判）；LobsterAI 5 个有功能价值的 PR 因 review 缺位被 stale 自动关闭 |
| **安全策略可预测性** | Moltis #1230（hooks fail-closed 提案）；OpenClaw #116489（安装策略警告需精确确认）；ZeroClaw #9403/#9128（WASM 超时边界+密钥作用域隔离）；Hermes #92457（暴露凭据轮换） |
| **多模态消息通道稳定** | OpenClaw #96834（WhatsApp 图片阻塞主通道约 3 分钟）；CoPaw #7212（图片像素超限直接崩溃）；NanoClaw #3449/#3450（Telegram 频道消息黑洞/审批门拦截） |
| **Windows/跨平台兼容** | ZeroClaw #7462（74 个测试失败，19 条评论，CI 仅覆盖 Linux）；CoPaw #7043（中文 Windows chcp 编码，已关闭）；Hermes #65562（NODE_ENV 回归，已修复） |

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 关键技术特征 |
|------|---------|---------|-------------|
| **OpenClaw** | 全渠道个人 AI 助手参考实现 | 自托管重度用户、运维 | 13+ 渠道网关、多智能体绑定、Control UI、自动化 Issue 治理 |
| **Hermes Agent** | Agent Fleet 运营与更新治理 | 多机/企业运维 | Desktop/CLI 双端、技能索引流水线、更新契约（provenance/receipt） |
| **ZeroClaw** | 轻量级插件化 Claw | 扩展型开发者 | WASM 插件（超时+密钥作用域）、A2A outbound、Android 工具集 |
| **NanoBot** | Provider 中立与研究友好 | 研究者、Web 优先 | typed usage 契约、turn 级可观测性、LangSmith 集成 |
| **IronClaw** | 基础设施与成本工程 | 大规模/成本敏感部署 | 上下文压缩经济性量化、CI 四轨提速、sandbox 出口认证通用化 |
| **NanoClaw** | 聊天适配器深度打磨 | 聊天工具优先用户 | Telegram 多 bot、Slack 手动安装 fallback、setup 幂等性 |
| **PicoClaw** | 边缘/轻量渠道 | 嵌入式爱好者 | DeltaChat 通道、技能 repo@branch 安装（GitHub Trees API） |
| **CoPaw** | Qwen 生态 + Cron 自动化 | 中文用户、Qwen 模型用户 | per-cron 模型选择、Chrome 远程 bridge、私有化部署（kimi2.5 反馈） |
| **Moltis** | 策略执行与安全钩子 | 安全敏感企业 | hooks fail-closed 提案、OpenAI strict schema 兼容、Browserless v2 |
| **LobsterAI** | 协作与导出（网易有道） | 私有化部署用户 | 会话 Markdown 导出、自定义 provider 上限扩容（均被 stale 积压） |

## 6. 社区热度与成熟度

**快速迭代期（功能与修复并行，活性最高）**：**OpenClaw** 发布验证驱动的高密度修复，安全边界持续加固；**Hermes Agent** 功能落地快（Codex 用量预测、Tavily keyless）但 P1 级会话死亡/凭据暴露无完整方案；**ZeroClaw** RFC 密集、WASM 插件化提速，48 个待合并 PR 是明显瓶颈；**NanoClaw** 7 个 Telegram 相关 PR 同日聚集，采用率上升正带来边缘问题爆发。

**质量巩固期（技术债清理与基础设施重构）**：**NanoBot** 单日关闭 4 条积压 2-4 个月的老 PR，统一 provider 用量契约与 WebUI 可观测性；**IronClaw** 通知系统证据驱动化与扩展配置可视化同日落地，CI 提速四轨并行；**Moltis** 小体量高信号，3 个 PR 直击工具契约与运行期生命周期。

**维护/低活跃期**：**LobsterAI** 5 个有价值的 PR 因无人 review 被机器人自动关闭，维护通道缺位是核心问题；**PicoClaw** 清理积压积极，但新严重问题 #3343（22.8 万次 Telegram 请求）暂无修复；**NullClaw、ZeptoClaw** 完全无活动。

## 7. 值得关注的趋势信号

1. **长上下文经济性倒挂将驱动架构变革**。IronClaw #7824 给出量化铁证：全量回放导致成本翻 4 倍且准确率下降 6 个百分点。面向长会话的 agent 框架应评估压缩屏障、结构化摘要与溢出恢复，而非无条件全量重放——这是数据支撑最强的架构级信号。

2. **可观测性正从调试工具升级为产品功能**。NanoBot 的 typed usage contract + trajectory backend、OpenClaw 的会话轨迹视图（#128053）、Hermes 的 Codex 用量预测，共同指向"每一次工具调用与 token 消耗都可审计、可回放"的产品标准。

3. **MCP 进入"可靠性深水区"**。痛点已从连接层转移到子代理注入、服务器热重启、业务错误语义（`isError=false`）——这是 MCP 从 demo 走向生产必须跨过的门槛，也是当前生态最大的共性阻塞点。

4. **安全默认值从 fail-open 向 fail-closed 迁移**。Moltis #1230（hook 出错应阻断）、OpenClaw 安装策略警告确认、ZeroClaw WASM 超时与密钥作用域，形成"自主 agent 越强大、安全边界越要可预测"的共识。

5. **发布/更新可靠性成为社区信任分水岭**。Hermes 将 30 个 issue/15 个 PR 汇聚为单一 tracking issue，OpenClaw 将发布验证流程化为最热 Issue，LobsterAI 因 review 缺位损失 5 个 PR——合并纪律与验证流程正在成为用户选型的新权重项。

6. **AI 驱动的开发工作流已进入真实生产**。Scott Hanselman 的 agent 代发 Issue（OpenClaw #124911）、clawsweeper 自动化标签、`proof: 🎥 video` 证据文化，说明 agent 协作开发已是社区基础设施而非实验。

7. **多模态与长推理模型是最大的"未预期负载"**。WhatsApp 图片阻塞 3 分钟、CoPaw 图片像素超限崩溃、R1 风格模型触发流式超时误报——真实多模态流量与"慢思考"模型正在冲击为文本/快速响应设计的既有架构，适配层抽象与动态超时必须前置。

8. **跨平台（尤其 Windows）仍是系统性短板**。ZeroClaw 74 个 Windows 测试失败长期未修且 CI 不覆盖，叠加 CoPaw 编码问题与 Hermes 构建回归——对面向大众用户的个人 AI 助手，Windows 支持质量可能成为下一个竞争差异点。

---

*数据说明：基于 2026-08-23 各项目 GitHub 社区动态日报，Issue/PR 数字为过去 24 小时更新量；健康度评估综合活跃度、修复响应速度、问题积压程度与社区反馈情绪。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-23

> 数据来源：GitHub (HKUDS/nanobot) 过去 24 小时（2026-08-22）项目动态

---

## 1. 今日速览

过去 24 小时 NanoBot 保持了较高的开发活跃度：**Issues 零更新**，无新版本发布；**PR 更新 21 条**，其中 **7 条已合并/关闭、14 条待合并**，提交节奏稳定。今日最突出的进展集中在 **WebUI 可观测性统一**与**多项稳定性修复**上，同时维护者关闭了多条积压数月的老 PR（#4430、#3869、#3294、#5156），显示项目在推进功能开发的同时也在清理技术债务。整体项目健康度良好，社区参与度较高——今日共有 10 余位外部贡献者提交 PR。

---

## 2. 版本发布

**无新版本发布。** 最新 Releases 为空，项目仍处于密集开发阶段。

---

## 3. 项目进展

今日共 **7 条 PR 被合并/关闭**，取得以下实质进展：

### ✅ 已合并（2 条）

- **#5486 feat(webui): unify turn observability**（作者：Re-bin，8/22 合并） — WebUI 层面将每个用户 turn 统一投影到单一 answer 表面，同时保留 reasoning、tool、file-edit、intermediate assistant 等片段的有序展示；合并后自动折叠已完成的 activity，并支持用户手动展开/折叠。此外该 PR 还改进了 turn 级别输入/输出 token 报告的可信度。这是 WebUI 可观测性的一次重要整合。
  https://github.com/HKUDS/nanobot/pull/5486

- **#5488 docs: refresh team and contributor credits**（作者：Re-bin，8/22 合并） — 更新维护者与贡献者列表，改用响应式社区头像墙替代 contrib.rocks 图片，并确保包含所有已注册的人类贡献者（移除 bot 和维护者）。
  https://github.com/HKUDS/nanobot/pull/5488

### 📦 已关闭（4 条主要 PR）

- **#5156 fix(telegram): recover from silently stalled polling**（作者：QQQ300kuai，8/22 关闭） — 修复 Telegram 通道在网络波动后出现的轮询静默停滞问题（进程存活但永久收不到消息），已在生产环境观测到。此次关闭意味着该问题已合入主线或已通过其他方案解决，对 Telegram 用户是重要修复。
  https://github.com/HKUDS/nanobot/pull/5156

- **#4430 feat(web): configure web_fetch provider**（作者：ChachAloha，6/21 创建，8/22 关闭） — 支持 `auto`/`tavily`/`jina`/`readability` 模式的 web_fetch provider 配置，替换原有的 `useJinaReader` 开关。该 PR 在悬置 2 个月后关闭，功能可能已被其他方案覆盖。
  https://github.com/HKUDS/nanobot/pull/4430

- **#3869 fix(providers): DeepSeek message hardening**（作者：DreamShepherd2006，5/16 创建，8/22 关闭） — 针对 DeepSeek v4-pro/v4-flash 的 null content 400、"(empty)" 占位符泄漏、assistant 文本被丢弃等消息处理问题。悬置 3 个月后关闭，问题或已通过 provider 层重构解决。
  https://github.com/HKUDS/nanobot/pull/3869

- **#3294 feat(dream): optional kill switch + custom template paths**（作者：pixan-ai，4/19 创建，8/22 关闭） — 添加 DreamConfig 的 `enabled` 开关与自定义 Phase 1/2 模板路径。悬置 4 个月后关闭。
  https://github.com/HKUDS/nanobot/pull/3294

> **整体判断**：项目在 WebUI 可观测性方向明显加速，同时在清理长期积压的 PR。维护者正在对 provider 层做更系统的重构（见 #5480），因此部分早期定向修复被统一方案取代后关闭，属于健康的演进路径。

---

## 4. 社区热点

由于今日无新增 Issue 且 PR 评论数据未记录，以下基于 **PR 主题分布与贡献者活跃度**进行分析：

### 最活跃的贡献者与方向

- **chengyongru** 今日共有 5 条 PR（#5491、#5490、#5469、#5481、#5480），全部集中在 token 用量计算、provider 用量契约、轨迹记录与 WebUI/TUI 展示，是当前最核心的**可观测性基础设施**建设者。
  - #5480 refactor(providers): define typed LLM usage contract — 定义类型化 LLM 用量契约，统一 OpenAI Chat/Responses、Anthropic、Bedrock 的 token 语义
    https://github.com/HKUDS/nanobot/pull/5480
  - #5481 feat(trajectory): add unified provider usage backend — 将每次 retry-managed provider 尝试（包括 fallback、错误、取消）记录为轨迹
    https://github.com/HKUDS/nanobot/pull/5481

- **Re-bin** 贡献了 3 条 PR（#5420、#5488、#5486），其中 turn 级可观测性统一（#5486）已经合并，turn recovery（#5420）仍待合并。

### 潜在高关注 PR

- **#5491 fix(webui): keep answer text outside reasoning shell** — 涉及"推理内容"与"最终答案"的展示分离，是用户对 AI 输出可读性的核心诉求
  https://github.com/HKUDS/nanobot/pull/5491

- **#5483 fix(session): prevent deleted sessions from being recreated** — 会话数据管理问题，直接影响用户数据控制权
  https://github.com/HKUDS/nanobot/pull/5483

- **#5485 fix: restore LangSmith tracing for native providers** — 修复迁移后丢失的 LangSmith tracing，对依赖可观测性的开发者影响较大，且修复了 issue #2493
  https://github.com/HKUDS/nanobot/pull/5485

> **背后诉求**：社区当前最关心三件事——**AI 输出的可读性与展示**、**用量计费与 token 消耗透明度**、**会话/数据安全**。这些方向在今日 PR 中均有多条对应，说明维护者与用户在需求上形成了较好的对齐。

---

## 5. Bug 与稳定性

今日围绕 Bug 与稳定性共有 **7 条 PR**，其中 6 条为修复、1 条为 SDK 行为修正。按严重程度排列如下：

### 🔴 高

- **#5483 fix(session): prevent deleted sessions from being recreated by delayed messages** — 跨会话延迟消息（timeout/delivery）在会话被删除后将其重建，属于数据完整性问题。已有修复 PR，要求跨会话消息必须存在持久化会话，且仅恢复缓存或持久化中的内容。
  https://github.com/HKUDS/nanobot/pull/5483

- **#5485 fix: restore LangSmith tracing for native providers** — LiteLLM 迁移到原生 SDK 后丢失了 LangSmith tracing 回调，导致可观测性失效（对应 issue #2493）。修复通过 `langsmith.wrappers` 重新包装 OpenAI/Anthropic 客户端。
  https://github.com/HKUDS/nanobot/pull/5485

### 🟡 中

- **#5484 fix(mcp): flag business-error envelopes returned with isError=false** — 部分 MCP 服务器将业务错误放在 result content 中返回但 `isError=false`，导致 agent 误判成功并反复调用失败工具。修复将识别这类错误信封并正确标记。
  https://github.com/HKUDS/nanobot/pull/5484

- **#5471 fix(sdk): make ephemeral runs leave session state unchanged** — `Nanobot.run(ephemeral=True)` 文档声明不持久化 turn，但实现未遵守，实际修改了会话状态。修复保证 ephemeral 运行完全不影响会话。
  https://github.com/HKUDS/nanobot/pull/5471

- **#5490 fix(webui): clarify aggregate turn token usage** — 当一个 turn 聚合多个 prompt-token 报告时，显示模型调用次数，并在 tooltip 中公开最近的请求上下文与配置容量。这是一处回归修复。
  https://github.com/HKUDS/nanobot/pull/5490

### 🟢 低

- **#5469 fix(tui): show measured request context** — TUI idle footer 显示 provider 报告的实际请求上下文（而非累计值），包括 prompt context/window、缓存命中率、输出 token 与生成速率。
  https://github.com/HKUDS/nanobot/pull/5469

- **#5491 fix(webui): keep answer text outside reasoning shell** — 修复 reasoning 内容与最终答案混淆的问题，保留 media-only 答案与 fork 边界所需的原始消息计数。
  https://github.com/HKUDS/nanobot/pull/5491

> **已有 fix 覆盖**：以上所有 Bug 均有对应 PR，其中 #5485 为回归修复、#5490 为回归，项目对稳定性问题的响应速度较快。另 #5156 Telegram 轮询停滞问题已随 PR 关闭确认解决。

---

## 6. 功能请求与路线图信号

以下功能已有 PR 提交流转中，按合入概率与阶段判断：

### 🚀 可能纳入下一版本（PR 已提交，审查中）

- **#5408 feat(webui): add follow-up suggestions** — 在成功的 WebUI turn 后生成临时的、聊天范围的后续建议；采用 provider 中立协议和单一 primary-provider 请求；交互模式与 DeerFlow 对齐（空输入框直接发送，已有草稿则追加/替换）。这是一个提升对话流畅度的体验型功能。
  https://github.com/HKUDS/nanobot/pull/5408

- **#5367 feat(webui): localize agent activity** — 将 WebUI 拥有的 Agent 活动标签本地化为全部 10 种支持语言，并在切换语言时即时更新，同时保留路径、命令、URL 等原始工具值。面向多语言用户群体的本地化增强。
  https://github.com/HKUDS/nanobot/pull/5367

- **#5420 feat(runtime): add user-controlled turn recovery** — 为中断的 WebSocket turn 保存轻量 sidecar checkpoint，用户可主动 **Continue** / **Dismiss**，绝不自动恢复；已持久化的最终答案可直接恢复，无需再次调用模型。这是对不稳定的网络环境下用户体验的重要改进。
  https://github.com/HKUDS/nanobot/pull/5420

### 🧱 基础设施方向（系列 PR 推进中）

- **#5480 + #5481（usage contract + trajectory backend）** — typed LLM usage 契约与统一 provider 用量轨迹后端，是 token 计算与可观测性的底层重构。两个 PR 为堆叠关系（#5481 stacked on #5480），reviewer 需要按顺序审查。该方向可能成为下一版本可观测性能力的基础。
  https://github.com/HKUDS/nanobot/pull/5480
  https://github.com/HKUDS/nanobot/pull/5481

- **#5487 feat(webui): file preview path fixes + subagent activity & lifecycle replay** — 文件预览面板增加 markdown 渲染与系统打开方式，并将文件路径基准与 tool evidence 对齐；同时包含 subagent 活动与生命周期回放的功能扩展。
  https://github.com/HKUDS/nanobot/pull/5487

### ⚡ 性能优化

- **#5489 perf(email): fetch headers before body, use UID SEARCH to skip re-fetch** — IMAP 轮询先取 header、再按需拉取 body，使用 UID SEARCH 跳过已处理邮件。对邮件通道是显著的性能与带宽优化。
  https://github.com/HKUDS/nanobot/pull/5489

---

## 7. 用户反馈摘要

由于今日无新增 Issue，以下反馈来自 PR 描述中引用的用户场景与问题：

| 用户痛点 | 来源 PR | 场景说明 |
|---------|---------|---------|
| Telegram bot 在短暂网络波动后永久失联，进程存活但日志静默，只能手动重启 | #5156 | 不稳定的代理/网络环境下生产可用性受损；该问题已随 PR 关闭确认解决 |
| 删除会话后，延迟跨会话消息又把会话"复活"了，用户对数据被重建感到困扰 | #5483 | 期望删除操作是不可逆的、确定的，不应被后台机制悄悄逆转 |
| MCP 服务器返回业务错误（如 404）但 `isError=false`，agent 反复调用失败工具，浪费 token 且行为异常 | #5484 | 企业级用户在真实业务错误场景下遇到 agent 行为不可控 |
| DeepSeek 消息因 null content 返回 400、"(empty)" 占位符泄漏到对话、assistant 文本被无条件丢弃 | #3869 | v4-pro/v4-flash 用户的直接阻塞问题；该 PR 已关闭，需关注是否已通过其他方式修复 |
| `run(ephemeral=True)` 文档声明不持久化，但实际运行却修改了会话状态，与预期不符 | #5471 | SDK 用户对文档契约的信任被破坏 |
| LangSmith tracing 在 LiteLLM→Native SDK 迁移后失效，开发者无法追踪 LLM 调用链 | #5485 | 可观测性工具链中断，影响排查效率（对应 issue #2493） |
| WebUI 中一个 turn 的 token 用量显示不直观，用户无法区分累计输入与最终请求上下文 | #5490 | 对计费透明度和资源消耗理解有明确需求 |

---

## 8. 待处理积压

### ⚠️ 需要维护者关注的 PR

- **#5367 feat(webui): localize agent activity**（8/13 创建，已 10 天未合并，带 `conflict` 标签） — 最早的待合并 PR 之一，且存在冲突，需要解决冲突并推进审查。
  https://github.com/HKUDS/nanobot/pull/5367

- **#5408 feat(webui): add follow-up suggestions**（8/17 创建，带 `conflict` 标签） — 已等待近一周，功能已就绪但被冲突阻塞。
  https://github.com/HKUDS/nanobot/pull/5408

- **#5469 fix(tui): show measured request context**（8/21 创建，带 `conflict` 标签） — 与 #5480/#5481 用量重构直接相关，建议与用量契约系列 PR 协同审查。
  https://github.com/HKUDS/nanobot/pull/5469

- **#5487 feat(webui): file preview path fixes + subagent activity & lifecycle replay**（带 `conflict` 标签） — 包含两组功能变更的复合 PR，建议拆分为两个独立 PR 以便审查，或与相关 PR 协调合并顺序。
  https://github.com/HKUDS/nanobot/pull/5487

### 📚 堆叠 PR 审查提醒

- **#5481 → #5480** 为堆叠关系：需要先合并 #5480（typed LLM usage contract），再审查 #5481（trajectory backend）。建议维护者优先推进 #5480 的 review 流程，以免阻塞下游 PR。
  https://github.com/HKUDS/nanobot/pull/5480
  https://github.com/HKUDS/nanobot/pull/5481

### 📊 今日积压清理进展

今日关闭了 4 条悬置时间较长的老 PR（#4430 悬置 2 个月、#3869 悬置 3 个月、#3294 悬置 4 个月、#5156 悬置近 1 个月），清理解散了一批长期积压的技术债。但仍有 **14 条 PR 待合并**，其中多条集中在用量计算与 WebUI 展示方向，建议按依赖关系分批次安排审查，避免进一步积压。

---

*本日报由 AI 分析师基于 GitHub 公开数据自动生成，数据范围为 2026-08-22 00:00 至 2026-08-22 24:00（UTC）。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

## Hermes Agent 项目动态日报 — 2026-08-23

### 1. 今日速览

过去 24 小时项目活跃度处于高位：共 50 条 Issue 更新（45 条新开/活跃、5 条关闭）和 50 条 PR 更新（46 条待合并、4 条关闭/合并），但**无新版本发布**。社区讨论高度集中在技能索引自动化检查失效（#66616，77 条评论）与 Fleet 更新可靠性追踪（#91277，13 条评论）两个方向，说明用户对“自动化运维”和“更新一致性”的诉求强烈。今日关闭了 5 个 Issue 和 4 个 PR，其中 Desktop 远程网关回退（#38873）与 TUI NODE_ENV 回归（#65562）已标记修复，整体看项目处于“高讨论、高修复、但仍有 P1 稳定性/安全积压”的状态。

---

### 2. 版本发布

今日无新版本发布。

---

### 3. 项目进展

今日关闭/合并的 PR 虽数量不多（4 条），但包含两项明确的功能落地：

- **PR #91616 — Codex 用量预测命令**（closed）：新增 `/codex-usage` CLI 与 gateway 命令，可显示剩余 Codex 配额、重置倒计时，并基于当前窗口均值线性预测配额耗尽时间。验证通过 90 个测试，覆盖账户用量、gateway 命令、命令注册与 CLI 输出，属于面向用户的实用功能增量。  
  https://github.com/NousResearch/hermes-agent/pull/91616

- **PR #88591 — Tavily 支持 keyless 访问**（closed）：Tavily Search/Extract 现支持有 Key（`Authorization: Bearer`）与无 Key（`X-Tavily-Access-Mode: keyless`）两种模式，并在所有请求上附加 `X-Client-Name: hermes-agent` 归属标识，降低第三方搜索集成门槛。  
  https://github.com/NousResearch/hermes-agent/pull/88591

此外，两个标记为修复的 Issue 关闭值得注意：

- **#38873**（P2, Desktop）：远程 gateway 模式回退到本地后端的问题已标记 `sweeper:implemented-on-main`，即修复已合入主分支。  
  https://github.com/NousResearch/hermes-agent/issues/38873

- **#65562**（P1, CLI）：`hermes update` 因 TUI 注入 `NODE_ENV=production` 导致 Web UI 构建失败（`tsc: not found`）的回归已关闭，问题根因与 #27430 同源，当前 main 上已修复。  
  https://github.com/NousResearch/hermes-agent/issues/65562

整体来看，项目今日在“开发者体验”（Codex 配额、Tavily 集成）和“既有回归修复”两方面有所推进，但主干没有新版本对外发布。

---

### 4. 社区热点

- **#66616 — Skills 索引过期/退化**（77 条评论，热度最高）  
  自动化探针报告 `/docs/api/skills-index.json` 已 29.8 小时未更新（上限 26 小时），状态为 `degraded`。该问题由 `skills-index.yml` 的 cron 调度（6/18 UTC）与 `deploy-site.yml` 协同决定，牵涉文档站点与技能仓库的一致性。77 条评论表明社区对“自动化流水线失效”高度敏感，长期不修复会侵蚀对项目 CI/CD 的信心。  
  https://github.com/NousResearch/hermes-agent/issues/66616

- **#91277 — Fleet 更新可靠性统一方案**（13 条评论）  
  P1 级 tracking issue：安装/更新是目前最不可靠的能力，约 30 个 open issue 和 15 个 open PR 都在修补同一类问题——本地、多 profile、远程、容器镜像管理的更新流程缺乏统一方案和验证机制。该 issue 已成为“更新可靠性”社区的汇聚点。  
  https://github.com/NousResearch/hermes-agent/issues/91277

- **#38873 — Desktop 远程 gateway 模式回退**（11 条评论，已关闭）  
  Windows 桌面端连接远程 VPS 后端成功后仍会跳回本地后端。该问题关闭并标记修复，但 11 条评论说明远程/本地切换的用户基数不小，相关体验仍需持续加固。  
  https://github.com/NousResearch/hermes-agent/issues/38873

- **#78981 — DeepSeek 长会话上下文压缩后永久死亡**（8 条评论）  
  50 万 token 会话在上下文压缩时流式停滞，中断后整个会话无法恢复，后续消息也无法开启新 turn。该 Issue 涉及流式、压缩、会话状态多个子系统，评论虽不多但严重性极高。  
  https://github.com/NousResearch/hermes-agent/issues/78981

---

### 5. Bug 与稳定性

按严重程度排列，重点关注 P1/P2 问题：

**P1 级**

- **#78981 — DeepSeek 长会话压缩后永久死亡**：50 万 token 会话经过 2 次压缩停滞（单次等待 600s），后续消息永远无法开始新 turn。目前未见关联 fix PR。  
  https://github.com/NousResearch/hermes-agent/issues/78981

- **#92279 — Telegram profile 路由导致会话历史每次丢失**：0.20.1→0.20.5 回归，缓存探针/重建读取主 store，而消息实际存在 profile store 中。已标记 duplicate，但属于数据一致性高风险问题。  
  https://github.com/NousResearch/hermes-agent/issues/92279

- **#92457 — 已暴露的 webhook 凭据需轮换并重发镜像**：合并 #92394 只移除了构建上下文中的 `default.tar.gz`，但历史中的 archive blob 仍可访问，且暴露的凭据需立即轮换。属于安全事件收尾，暂无 PR。  
  https://github.com/NousResearch/hermes-agent/issues/92457

**P2 级**

- **#92553 — `pre_tool_call` 钩子的 `approve` 指令被静默丢弃**：钩子文档明确支持 `{"action": "approve"}`，但实现解析为 `None`，且 `hooks doctor` 仍报告健康，安全机制形同虚设。无 fix PR。  
  https://github.com/NousResearch/hermes-agent/issues/92553

- **#92554 — 写入 config.yaml 会销毁所有用户注释**：`config set`/`plugins enable` 等命令会以默认样板注释重写整个文件，用户记录的“为什么这样配置”全部丢失。无 fix PR。  
  https://github.com/NousResearch/hermes-agent/issues/92554

- **#91621 — Codex 大上下文 TTFB 超时上限仍为 120s**：本应随请求 token 数放大的首字节超时，被默认最大值立即封顶回 120 秒，导致大请求频繁超时。无 fix PR。  
  https://github.com/NousResearch/hermes-agent/issues/91621

- **#89332 — state.db 被外部替换时 gateway 无感知**：gateway 持有旧文件的 fd，但 DB 已被替换，整个持久层静默失效。需要文件身份守卫。无 fix PR。  
  https://github.com/NousResearch/hermes-agent/issues/89332

- **#92434 — Desktop 切换 profile 后 WebSocket 断开**：Bot profile 与 Default profile 之间切换会破坏与 `hermes serve` 的连接，必须重启应用。无 fix PR。  
  https://github.com/NousResearch/hermes-agent/issues/92434

- **#92535 — Git 更新成功后丢失 update_receipt**：更新完成但 `<HERMES_HOME>/logs/update_receipts/` 从未创建，属于 CLI 承诺与实现不符。无 fix PR。  
  https://github.com/NousResearch/hermes-agent/issues/92535

- **#92549 — security audit 误报 shadowed 旧版本依赖**：`hermes security audit` 会把 lazy-install 目标中的旧包标为 active，即使实际导入来自已修补的 core venv，导致 `--fail-on high` 误失败。无 fix PR。  
  https://github.com/NousResearch/hermes-agent/issues/92549

- **#92441 — U+200C（ZWNJ）被当作注入标记**：所有波斯语/阿拉伯语/希伯来语文件因 ZWNJ 被静默拦截，直接阻断非拉丁文字用户使用。无 fix PR。  
  https://github.com/NousResearch/hermes-agent/issues/92441

- **#92515 — Desktop 右侧边栏滚动闪烁 + 置顶会话硬限制 2 个**：有视频证据，且无解置顶/替换方式。无 fix PR。  
  https://github.com/NousResearch/hermes-agent/issues/92515

**已有关联 PR 的修复项**

- **#91621** 暂无；但 **#91788**（Bedrock Converse 输出 cap 修复）与 **#92090**（desktop entry 使用 venv 解释器）等 PR 仍在开放中。  
  https://github.com/NousResearch/hermes-agent/pull/91788
- **#92410 / #92448** 均针对 `hermes update` 在无人值守时阻塞的问题，分别修复“隐藏窗口挂死”和“stdin 未关闭导致 input() 永久阻塞”，与 #92535 同属更新可靠性域。  
  https://github.com/NousResearch/hermes-agent/pull/92410  
  https://github.com/NousResearch/hermes-agent/pull/92448

---

### 6. 功能请求与路线图信号

- **Fleet 更新可靠性统一方案（#91277，P1）**：这是当前最明确的路线图主线。PR #92545（WIP，image-managed 更新拒绝契约）正按该 tracking issue 的 Phase 3 实施，包含镜像 provenance、共享变更前拒绝、持久化 receipt 与 CLI/API/Desktop 对齐。  
  https://github.com/NousResearch/hermes-agent/issues/91277  
  https://github.com/NousResearch/hermes-agent/pull/92545

- **Tavily keyless 已合入（#88591）**：说明集成类功能正在争取更低的接入门槛，后续第三方工具集成可能继续沿用“有 Key/无 Key 双模式”策略。  
  https://github.com/NousResearch/hermes-agent/pull/88591

- **Energy 启发的自动化技能（#92000、#92005）**：新增 `live-dashboard` 技能（一句话生成自刷新状态页）和 inbox-triage 语气校准（基于用户已发送回复调整草稿风格）。两个 PR 均为 P3，但作者是 teknium1（高频贡献者），可能进入下一版本。  
  https://github.com/NousResearch/hermes-agent/pull/92000  
  https://github.com/NousResearch/hermes-agent/pull/92005

- **架构级提案：#91230 — “任务完成验证”作为第六条 Hermes 法则**：提出 exact-object completion 作为对抗性验证的补充，属于设计文档类，需 maintainer 决策。  
  https://github.com/NousResearch/hermes-agent/issues/91230

- **#84340 — MEMORY.md/USER.md/AGENTS.md/SOUL.md 文件放置契约**：四个扁平文件的注入位置缺少合同约束，用户希望有 lint 与默认路径规范。  
  https://github.com/NousResearch/hermes-agent/issues/84340

- **#92361 — camofox 浏览器导航加固**：小改动（约 9 行 + 19 行测试），对冷启动首帧等待更耐心，属于“低成本高收益”的 PR 候选。  
  https://github.com/NousResearch/hermes-agent/issues/92361

- **#91260 — IM 入口驱动多 profile 多机器人管线**：用户期望一个 profile 跑 IM gateway、其他 profile 作为无 IM 的 worker，形成“SOUL handoff”而非虚构的领导/工人结构。  
  https://github.com/NousResearch/hermes-agent/issues/91260

- **Python 3.14 运行时支持（#92548）**：扩展支持范围到 3.14，并更新 uv.lock 与回归测试，属于前瞻性平台适配。  
  https://github.com/NousResearch/hermes-agent/pull/92548

- **#55811 — 高风险工具执行的运行时能力契约**：将安全规则从 skills/memory/代码中分散状态收敛为运行时强制契约，被标记为 P3，但设计思路与 #28984 呼应。  
  https://github.com/NousResearch/hermes-agent/issues/55811

---

### 7. 用户反馈摘要

- **配置注释被抹除引发不满（#92554）**：用户明确表示 `config.yaml` 中的注释是记录“为什么这样配置”的自然位置，而所有写配置的命令都会用默认样板注释替换，导致配置意图丢失。这是对“配置可维护性”的尖锐反馈。  
  https://github.com/NousResearch/hermes-agent/issues/92554

- **非拉丁文字用户被误伤（#92441）**：波斯语用户报告 U+200C（ZWNJ）被安全扫描器当作注入标记，所有波斯语/阿拉伯语/希伯来语文件和记忆条目被静默阻断，属于国际化回归，影响面广且情绪较强。  
  https://github.com/NousResearch/hermes-agent/issues/92441

- **Hindsight embedding 配置被反复覆盖（#70606）**：用户在 `local_embedded` 模式下每次 daemon 启动，`hermes.env` 都会用 `write_text()` 完全覆写，导致 embedding provider、ONNX 参数、reranker 等配置丢失。用户表达“Only ... ”的无奈，说明该问题已多次发生。  
  https://github.com/NousResearch/hermes-agent/issues/70606

- **多 profile 下 Telegram token 显示串位（#83391）**：Desktop 的 Messaging Platforms 页面在不同 profile 下显示同一个 Telegram bot token，用户怀疑是否串配置。类似问题会严重打击多租户/multiplex 场景的信任。  
  https://github.com/NousResearch/hermes-agent/issues/83391

- **远程网关回退问题修复获认可（#38873）**：虽然关闭时标记为 implemented-on-main，但用户使用了完整的复现环境（Windows + VPS + Tailscale）描述问题，社区反馈积极（3 👍），属于“问题明确、修复可验证”的良性闭环。  
  https://github.com/NousResearch/hermes-agent/issues/38873

- **长会话稳定性是最大痛点（#78981）**：132 个工具调用、50 万 token 的会话因压缩挂起而永久死亡，用户描述非常详细。这类问题对“用 Hermes 跑真实长任务”的用户是致命打击。  
  https://github.com/NousResearch/hermes-agent/issues/78981

---

### 8. 待处理积压

以下 Issue/PR 长期未获得维护者响应或进展缓慢，提醒关注：

- **#28984 — Typed Config-Runtime Contract**（5 月 19 日创建，P3，仅 1 条评论）：要求消除 config→runtime、state→path、interface→caller 三大边界的静默绑定缺口。已开放 3 个月，是“配置契约”方向的基础提案。  
  https://github.com/NousResearch/hermes-agent/issues/28984

- **PR #3954 — `hermes memory` CLI 子命令**（3 月 30 日创建，开放近 5 个月）：用户需要不启动 agent 即可查看/删除 MEMORY.md 与 USER.md 中的持久记忆，至今未合并。该能力对隐私管理和调试非常重要。  
  https://github.com/NousResearch/hermes-agent/pull/3954

- **#55811 — 高风险工具执行的能力契约**（6 月 30 日创建，P3，2 条评论）：与 #28984 相辅相成，但讨论有限。安全问题不应长期积压。  
  https://github.com/NousResearch/hermes-agent/issues/55811

- **PR #51762 — Desktop 德语 locale**（6 月 24 日创建）：已完成与现有 `ja`/`zh`/`zh-hant` 的全量对齐，但 2 个月未合并。i18n 贡献属于低风险高价值，建议维护者尽快 review。  
  https://github.com/NousResearch/hermes-agent/pull/51762

- **#71239 — Telegram 更新消费但 dispatcher 停滞**（7 月 25 日创建，P3）：Telegram 显示已连接，但 `getUpdates` 持续拉取并删除服务端消息，`Application.dispatcher` 停止消费，机器人“假活”。该问题会造成静默消息丢失，建议提升优先级。  
  https://github.com/NousResearch/hermes-agent/issues/71239

- **PR #80580 — exec env-shebang 重启动脚本解释器修复**（8 月 6 日创建，P2）：修复 `env` 解析的 shebang 在重启动时落入错误解释器的问题，已超过两周未合入。  
  https://github.com/NousResearch/hermes-agent/pull/80580

---

**总结**：Hermes Agent 今日社区讨论热度高、修复也在持续，但 P1 级别的会话死亡、凭据暴露与更新可靠性问题仍未形成完整解决方案；长期未动的 i18n 与内存管理 PR 也需维护者关注。项目整体处于“功能迭代快、稳定性承压”的阶段。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-08-23

## 1. 今日速览

过去 24 小时 PicoClaw 仓库无新版本发布，但沟通与合并活动较为活跃：2 条新活跃 Issue、6 条 PR 更新（其中 4 条已合并/关闭、2 条待合并）。两条新 Issue 均指向稳定性问题——一是 MCP 服务器故障导致 Agent 循环挂起，二是 Telegram 工具反馈动画无限循环调用 API，均涉及长时间运行场景下的可靠性。PR 方面，社区贡献者已提交针对 MCP 挂起问题的修复 PR（#3337），且多个积压 PR 于昨日批量关闭/合并，项目整体处于 bug 修复与积压清理并行推进的健康节奏。

## 2. 版本发布

过去 24 小时无新版本发布。

## 3. 项目进展

昨日有 4 条 PR 被合并/关闭，累计推进了多个模块的修复与重构：

- **[#3319 - fix(tools): honor exec timeout and boolean run options](https://github.com/sipeed/picoclaw/pull/3319)**（已关闭 ✓）：修复 `exec` 工具同步执行时忽略 per-run `timeout` 参数、且 schema 将 `background` / `pty` 错误声明为字符串的问题。这使工具行为与文档一致，避免用户配置失效。
- **[#714 - skills: install/reinstall CLI and refactor into skillsCmd](https://github.com/sipeed/picoclaw/pull/714)**（已关闭 ✓）：对技能（skills）管理系统进行重构，新增 `reinstall` 子命令、支持 `repo@branch` 与子路径安装，并改用 GitHub Trees API 拉取完整目录。提升了第三方技能的安装灵活性与工程化程度。
- **[#1083 - fix(cron): preserve recurring job schedule after execution](https://github.com/sipeed/picoclaw/pull/1083)**（已关闭 ✓）：修复周期 cron 任务（`every_seconds` / `cron_expr`）在执行一次后静默退化为一次性 "at" 任务的 bug，确保 `computeNextRun()` 异常时不会丢失周期调度。
- **[#1545 - fix: merge PR #1500 #1490 #1488 #1487 #1485](https://github.com/sipeed/picoclaw/pull/1545)**（已关闭 ✓）：批量合入 5 个来自开源社区的修复 PR。仓库维护者开始系统清理长期未合入的社区贡献，降低分叉风险。

整体来看，昨日项目向前迈进了重要一步：修复了 cron 任务丢失调度这一功能性 bug，规范了 exec 工具的参数语义，同时向社区释放了“积压 PR 将被处理”的积极信号。

## 4. 社区热点

- **[Issue #3269 - MCP 服务器连接失败导致 Agent 循环挂起](https://github.com/sipeed/picoclaw/issues/3269)**
  - 评论 6 条 / 👍 1 / 创建于 2026-07-20，昨日（08-22）仍有更新
  - 该问题持续一个月未解决，社区持续关注，是当前最热门的讨论点。用户报告当 MCP 服务器不可达时，`AgentLoop.Run` 返回错误并退出，导致聊天界面永久停止回复。该问题的解决对依赖外部 MCP 工具链的重度用户至关重要。

- **[Issue #3343 - 工具反馈动画无限循环编辑 Telegram 消息](https://github.com/sipeed/picoclaw/issues/3343)**
  - 新开 Issue（08-22），0 评论但严重性极高。反馈动画在 agent turn 已停止后仍每 3 秒调用一次 `editMessageText`，持续数天共计 22.8 万+ 次请求，触发 Telegram 服务端限流（`retry_after`）。这暴露了长期运行任务缺少动画终止信号的问题。

- **[PR #3337 - Fix/mcp failure hangs agent loop](https://github.com/sipeed/picoclaw/pull/3337)**
  - 该 PR 直接回应 #3269，通过合入 `ensureMCPInitialized` 错误处理逻辑来避免 agent loop 传播错误并退出。是当前社区最期待的修复之一，仍在待合并状态。

**热点诉求分析**：社区对“外部服务（MCP / Telegram）异常时的降级与恢复”关注度极高——既要避免界面彻底无响应，也要防止后台任务对上游 API 产生污染性请求。这背后是对 PicoClaw 在长时间无人值守场景下稳定性的真切需求。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 描述 | 状态 |
|--------|------|------|
| 🔴 严重 | **[#3343 - Telegram 消息无限循环编辑（22.8万次请求）](https://github.com/sipeed/picoclaw/issues/3343)**：工具反馈动画缺少停止条件，持续数天调用 `editMessageText`，触发 Telegram 限流并可能耗尽 API 配额。 | **无 fix PR**，新开 |
| 🟠 高 | **[#3269 - MCP 连接失败导致 Agent 循环挂起](https://github.com/sipeed/picoclaw/issues/3269)**：MCP server 不可达时，聊天界面永久停止回复，用户需手动重启。 | **已有 fix PR：[#3337](https://github.com/sipeed/picoclaw/pull/3337)**（待合并） |
| 🟡 中 | **[#3319 - exec 工具忽略 timeout 参数、布尔选项类型错误](https://github.com/sipeed/picoclaw/pull/3319)**：同步执行始终使用全局超时，导致 per-run `timeout` 无效；`background` / `pty` 被错误声明为 string。 | **已修复**（PR 已关闭） |

其中 #3343 属于新发现的回归类问题，且暂无修复方案，需特别关注。它暴露出工具反馈机制缺少“一次性动画”或“超时终止”的兜底逻辑。

## 6. 功能请求与路线图信号

- **DeltaChat 后端持续瘦身重构（[PR #3222](https://github.com/sipeed/picoclaw/pull/3222)）**：该 PR 仍处于待合并状态，其摘要显示将移除遗留特性与 fallback 测试、删除硬编码的 relay list、强制 secrets 只存在于 jsonrpc 层，并新增 `show_invite_link` 等 API。累计减少 200 行代码，传递出“精简依赖、文档优先”的路线图信号。若合并，DeltaChat 集成将更简洁、更易维护。

- **技能安装能力增强（[PR #714 已合并](https://github.com/sipeed/picoclaw/pull/714)）**：支持 `repo@branch` 和子路径安装，并新增 `reinstall` 命令。表明项目正在将技能（skills）生态从单一仓库的“复制粘贴”模式转向分布式、可版本化的 GitHub 安装模式，符合社区对第三方技能分发的需求。

## 7. 用户反馈摘要

- **用户依赖 MCP 但宽容度极低**（来自 #3269）：评论区内用户反馈表明，MCP 服务器连接失败并非罕见场景，尤其在自托管或网络不稳定的环境中。用户期望失败时能有「降级运行」或「自动重连」机制，而不是整个聊天窗口锁死。
- **远程 API 速率限制是真实痛点**（来自 #3343）：该 Issue 揭示了 UI 动画与业务逻辑未完全解耦。用户在 Telegram 上长时间运行 Agent 时，后台动画不但浪费资源，还会引发服务商限流，甚至可能影响正常运行的其他消息。用户希望动画有明确的「生命期」绑定。
- **cron 任务静默退化为一次性任务**（来自 #1083，已修复）：社区反馈此类问题难以察觉，因为任务看似执行成功，但周期被静默取消，属于隐蔽的数据丢失型 bug。用户对这类“无日志的无声故障”尤为不满。

## 8. 待处理积压

- **[PR #3222 - refactor(deltachat): cleanup implementation, documentation -200LOC](https://github.com/sipeed/picoclaw/pull/3222)**
  - 创建于 2026-07-03，已 stale，超过 50 天未合并。该重构对 DeltaChat 通道的质量有明确改善，长期滞留会持续产生合并冲突。建议维护者尽快 review 或关闭并反馈意见。

- **[PR #3337 - Fix/mcp failure hangs agent loop](https://github.com/sipeed/picoclaw/pull/3337)**
  - 创建于 2026-08-14，已 stale 但仍处于 OPEN 状态。它直接修复最热门的 #3269 问题，建议优先合并并补测。

- **[Issue #3269 - MCP 服务器连接失败导致 Agent 循环挂起](https://github.com/sipeed/picoclaw/issues/3269)**
  - 已开放超过一个月，虽有 PR 但未关闭，仍需维护者确认修复方案并给出合入时间表。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-08-23

## 1. 今日速览

过去 24 小时项目活跃度较高：共 25 条 PR 更新，其中 8 条已合并/关闭、17 条待合并；Issues 侧仅新增 1 条。工作重点集中在**聊天适配器稳定化**（Telegram 密集修复、Slack 安装恢复路径）与**CLI/setup 体验打磨**（多 bot 支持、输出缓冲、参数覆盖警告）。多项 PR 直接回应了社区已报问题（#2991、#2464、#3235），显示维护者对用户反馈的响应速度较好。整体上项目处于快速迭代修复期，健康度良好；唯一新增 Issue 为 Node 25+ 的测试兼容性问题，影响面有限。

## 2. 版本发布

今日无新版本发布，暂无更新内容、破坏性变更或迁移注意事项。

## 3. 项目进展

今日合并/关闭的 PR 中（表中可见 5 条），实质性推进了以下方向：

- **[Slack 安装恢复]** [#3394 [CLOSED] fix(slack): working manual-install fallback, delivered to the requester](https://github.com/qwibitai/nanoclaw/pull/3394) — 修复被 app-approval policy 阻断时手动安装 fallback URL 的 `redirect_uri` 校验失败，以及 agent-driven provisioning 无恢复路径的问题。对企业 Slack 工作区而言是重要的稳定性修复。
- **[Slack setup 幂等性]** [#3390 [CLOSED] fix(setup): skip Slack auto-provisioning when a bot is already saved](https://github.com/qwibitai/nanoclaw/pull/3390) — 修复用户在 bot 已创建后重跑 setup 时重复创建第二个 Slack app 的问题，提升了设置流程的容错能力。
- **[构建优化]** [#3443 [CLOSED] build: drop better-sqlite3 from onlyBuiltDependencies](https://github.com/qwibitai/nanoclaw/pull/3443) — 移除安装时对 better-sqlite3 的 `node-gyp rebuild`，改用 npm 包自带的预构建二进制。可显著减少安装时间，并降低因本地无编译工具链导致的安装失败率。
- **[升级状态检测]** [#3444 [CLOSED] fix(upgrade-state): accept a version-matching marker when Git cannot identify the checkout](https://github.com/qwibitai/nanoclaw/pull/3444) — 当 Git 无法识别运行中 checkout 时（如非 Git 安装），将升级判断降级为版本号匹配并给出 WARN，避免误判“已是最新”。
- [#3445 [CLOSED] Closing: wrong repository](https://github.com/qwibitai/nanoclaw/pull/3445) — 作者误提交至本仓库，已自行关闭，无实际影响。

此外，17 条待合并 PR 已形成较强的功能/修复梯队（Telegram 多 bot 支持、circuit-breaker 修复、审批卡片改进等），预计未来几天还有一波集中合入。

## 4. 社区热点

今日 PR 的评论数据未完整统计（表中评论数为 undefined），但从 PR 聚集度可清晰看出**Telegram 集成是当前社区最热主题**，相关 PR 共 8 条：

- [#3450 Telegram: trust channel's own identity in sender_scope gate](https://github.com/qwibitai/nanoclaw/pull/3450) — 修复频道消息因 `sender_chat` 身份无法通过审批门的问题（对应 issue #2991）
- [#3449 fix(telegram): pin explicit allowedUpdates to stop channel-post blackholing](https://github.com/qwibitai/nanoclaw/pull/3449) — 修复 `allowed_updates` 服务端持久化导致的频道消息黑洞
- [#3438 feat(setup): the wizard offers "add another Telegram bot" when one is already configured](https://github.com/qwibitai/nanoclaw/pull/3438)
- [#3437 docs(add-telegram): add-another-bot path, instance-aware pairing and wiring](https://github.com/qwibitai/nanoclaw/pull/3437)
- [#3435 feat(setup): carry the adapter instance through pairing, init-first-agent and the CLI welcome](https://github.com/qwibitai/nanoclaw/pull/3435)
- [#3434 fix(chat-sdk): polling adapters do not open the webhook server](https://github.com/qwibitai/nanoclaw/pull/3434)
- [#3431 fix(telegram-setup): pairing card says 6 digits](https://github.com/qwibitai/nanoclaw/pull/3431)

**背后诉求**：社区用户正在把 Telegram 作为主要聊天前端使用，且涉及广播频道、多 bot 管理等真实场景。多个 PR 同时指向 Telegram，说明该集成在实际使用中暴露出较多边缘问题，但也说明采用率在上升。

## 5. Bug 与稳定性

按严重程度排列：

- **高：circuit-breaker 跨实例误伤** — [#3447 fix(circuit-breaker): scope crash strikes to the instance that earned them](https://github.com/qwibitai/nanoclaw/pull/3447)：崩溃计数器仅依赖 `data/circuit-breaker.json` 文件存在，任何挂载同一 `data/` 目录的实例都会共享计数，导致一个实例的连续崩溃被错误算到另一个实例头上。已有 fix PR，待合并。
- **中：Node 25+ 测试失败** — [#3453 [OPEN] stdin-json tests fail on Node 25+: tsx loader deprecation pollutes asserted stderr](https://github.com/qwibitai/nanoclaw/issues/3453)：Node 25 上 tsx loader 触发 `module.register()` 弃用警告，污染 stderr，导致 `stdin-json` 测试断言失败。目前**尚无 fix PR**，对新 Node 版本的用户有影响。
- **中：Telegram 频道消息黑洞** — [#3449 pin explicit allowedUpdates](https://github.com/qwibitai/nanoclaw/pull/3449)：Telegram 服务端按 bot token 持久化 `allowed_updates`，适配器未显式指定时沿用旧设置，导致频道 post 被静默丢弃。已有 fix PR。
- **中：Telegram 频道消息被审批门拦截** — [#3450 trust channel identity](https://github.com/qwibitai/nanoclaw/pull/3450)：频道身份 `chat:<id>` 不在 `agent_contacts` 中，导致频道消息被当成未知发送者，产生无人能点击的审批卡。已有 fix PR。
- **低：自动化发送者误触发审批** — [#3446 Auto-drop automated senders in the unknown-sender gate](https://github.com/qwibitai/nanoclaw/pull/3446)：Discord/Slack/Telegram 的 bot 或 webhook 发送者触发 `request_approval` 未知发送者门，生成无法操作的审批卡（对应 issue #3235）。已有 fix PR。
- **低：Slack 手动安装 fallback 彻底不可用** — [#3394](https://github.com/qwibitai/nanoclaw/pull/3394)（已合并）：fallback URL 在 Slack 侧校验失败，用户被卡死在安装流程中。已修复。
- **低：Git 不可用时版本判断失败** — [#3444](https://github.com/qwibitai/nanoclaw/pull/3444)（已合并）：非 Git 安装下 `isUpgradeCurrent` 无条件要求 version+commit+tree 三者相等，导致升级状态误判。已修复。

## 6. 功能请求与路线图信号

- **Telegram 多 bot 支持（强信号）** — [#3438 设置向导支持“添加另一个 Telegram bot”](https://github.com/qwibitai/nanoclaw/pull/3438) 与配套文档[#3437](https://github.com/qwibitai/nanoclaw/pull/3437)、实例贯穿[#3435](https://github.com/qwibitai/nanoclaw/pull/3435) 构成完整的多 bot 管理特性，预计随后续版本合入。
- **Cursor Agent SDK provider** — [#3355 feat(setup): add /add-cursor agent provider skill](https://github.com/qwibitai/nanoclaw/pull/3355) 和 [#3356 feat(providers): add Cursor Agent SDK payload](https://github.com/qwibitai/nanoclaw/pull/3356)：新增 Cursor 作为 agent provider，属于模型/平台扩展方向。已待合并 4 天，时间较早，可能在积蓄 review 资源。
- **CLI 交互可感知性** — [#3448 ncl: warn when group scope overrides an explicit auto-fill arg](https://github.com/qwibitai/nanoclaw/pull/3448)：group 作用域自动填充与显式参数冲突时给出警告，改善 ncl 命令行使用时的可预期性，是开发者体验类的微优化。

## 7. 用户反馈摘要

由于目前 Issues/PR 评论区尚无充分的文本数据，以下从 PR 所针对的修复场景提炼用户痛点：

- **Slack 托管安装被策略阻断时无出路**（#3394）：用户所在工作区不允许托管安装，手动安装 fallback 又因 `redirect_uri` 校验失败而无法使用；同时 agent 自助创建另一个 agent 的路径也中途卡死。修复后这部分用户可获得完整恢复路径。
- **setup 重跑导致资源重复**（#3390）：用户在取消安装并重跑时，系统未识别已有 bot/agent，为同一 agent 又创建了第二个 Slack app。属于典型的中断恢复场景，修复后流程具备幂等性。
- **Telegram 频道广播触发无人处理的审批**（#3450）：发送者是频道本身而非成员用户，导致审批门将频道身份判为未知发送者，产生永远无法点击通过的审批卡。真实使用场景为“用 Telegram 频道发消息驱动 agent 执行”。
- **安装时原生编译失败**（#3443）：better-sqlite3 在 `pnpm install` 时触发 `node-gyp rebuild`，对没有编译工具链的用户是已知痛点。改用预构建二进制可直接消除。
- **非 Git 部署被误判为旧版本**（#3444）：用户以非 Git 方式运行，无法拿到 commit/tree 信息，`isUpgradeCurrent` 直接判定不是最新版本。降级为版本比较后至少能给出正确结论。

## 8. 待处理积压

| 项目 | 创建时间 | 等待天数 | 说明 |
|---|---|---|---|
| [#3355 feat(setup): add /add-cursor agent provider skill](https://github.com/qwibitai/nanoclaw/pull/3355) | 2026-08-19 | 4 天 | 新 provider 功能，含 skill 与引导逻辑，尚未获得合入 |
| [#3356 feat(providers): add Cursor Agent SDK payload](https://github.com/qwibitai/nanoclaw/pull/3356) | 2026-08-19 | 4 天 | 与 #3355 配套的 SDK 层改动，属新功能而非简单修复 |
| [#3385 fix(approvals): MPDM-aware approval cards via resolveConversation seam](https://github.com/qwibitai/nanoclaw/pull/3385) | 2026-08-20 | 3 天 | Slack 群组 DM 中审批卡片错误显示 `mpdm-…` 原始 slug；需要 channel-vs-group-DM 的识别扩展 |
| [#3394](https://github.com/qwibitai/nanoclaw/pull/3394) / #3390 | 2026-08-20 | 3 天（已合并） | Slack 修复已完成，不再积压 |

最值得关注的是 #3355/#3356，它们是功能型改动、等待时间最长，且涉及新 SDK 集成，建议维护者尽快安排 review，避免长期漂移。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-23

## 1. 今日速览

过去 24 小时 IronClaw 保持高强度迭代：11 条 Issue 更新（7 新开/活跃，4 关闭）与 22 条 PR 更新（17 待合并，5 关闭/合入），核心贡献者与常规贡献者双线活跃。当日无新版本发布，但有 4 个此前积压的功能/修复 PR 完成关闭（通知系统、WebUI 清理、扩展配置修复、时区测试修复），同时 4 条 CI 提速轨（T1–T4）共 5 个 PR 在并行推进。两条架构级讨论值得关注：上下文成本问题（#7824）与沙箱出口认证通用化（#7825/#7810）。另有 2 条来自真实用户的 Slack/Notion 集成安装故障反馈（原始反馈于 7 月底产生，时隔近一月才转为 Issue）。总体活跃度与健康度良好，合并队列消化正常，但存在若干 XL 级核心 PR 待合入的积压风险。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

当日 5 个 PR 关闭/合入，其中 4 个对应此前 Issue 的收尾：

- **通知系统落地（#7700 → 关闭 Issue #7691）**：从 committed Process Journal transitions 派生调度任务的完成/失败通知，而非依赖 delivery watcher 猜测。完成通知仅在最终 assistant 回复持久化后发布，并排除前台运行、子运行与 ownerless 运行等噪音场景。这标志着通知机制从"观察推断"转向"证据驱动"。链接: https://github.com/nearai/ironclaw/pull/7700
- **WebUI 重复导航清理（#7773 → 关闭 Issue #7768）**：移除 Settings 与 Extensions 中未使用的 tab 组件及重复的 `SETTINGS_TABS`/`EXTENSIONS_TABS` 元数据清单，消除与当前实际路由漂移的重复定义。链接: https://github.com/nearai/ironclaw/pull/7773
- **扩展配置状态可视化（#7772 → 关闭 Issue #7769）**：将扩展 setup API 返回的权威 `phase`、readiness `blockers` 及配置字段存在性透传到 Configure 表单，并对每种 blocker 类型提供本地化说明。修复了"modal 错误地报告无需配置"的问题。链接: https://github.com/nearai/ironclaw/pull/7772
- **时区稳健测试（#7774 → 关闭 Issue #7767）**：Automation presenter 日期断言改为由浏览器本地格式化器推导期望值，消除 `Asia/Shanghai` 等时区下的假失败，并补充显式 UTC 与上海时区格式用例。链接: https://github.com/nearai/ironclaw/pull/7774
- **目录包安装对齐（#7076）**：三个月陈旧分支完成 rebase（修复 `prompt_url` 字段与 Basic-manifest fixture 的组合冲突）后关闭，使实际安装包与 catalog 发布保持一致。链接: https://github.com/nearai/ironclaw/pull/7076

**整体判断**：通知系统与扩展配置两块"可靠性短板"同日落幕，配合 WebUI 清理，产品面正为 onboarding 流程（#7815）的规模化铺路；但当日未合入任何新的大型功能 PR（#7765、#7810、#7818 等均仍待合并）。

## 4. 社区热点

- **#7824 Context projection（2 评论，当日最高）**：serrrfirat 用实测数据发起讨论——全量回放线程历史导致 PinchBench 上单次运行消耗 227.7M input tokens / $10.31（PR #7491 构建，54.4% 准确率），而旧 shell 基线仅 55.1M / $2.52（60.5% 准确率）。"更贵且更差"的组合使 Pi-style 压缩屏障、结构化摘要与溢出恢复成为明确的技术优先级。链接: https://github.com/nearai/ironclaw/issues/7824
- **#7815 Onboarding suggestions epic 规划（1 评论）**：rdisandro 汇总了 connect → suggest → thread 闭环的剩余 net-new 工作量，配套前端 PR #7816 同日提交（为就绪的建议集增加 refresh 入口、在建议抽屉中增加 connect 入口，跟随 `oobe_suggestions` flag，不触碰 wire contract）。链接: https://github.com/nearai/ironclaw/issues/7815
- **#7765 AfterTurn 生命周期钩子（核心成员，XL，risk: low）**：引入 `ironclaw_hooks` 中首个 act-capable 钩子点，在 turn 达到终态后触发一次；特权模型严格区分 `Builtin`/`Trusted` 与 `Installed`/`SelfAuthored`（后者安装时即拒绝），首个消费者是记忆整理（#7770 phase 1）。这是 hooks 体系从"观察"走向"行动"的关键一步。链接: https://github.com/nearai/ironclaw/pull/7765

**诉求分析**：热点集中于两端——一是大上下文全量重放的经济性不可持续（成本/准确率双重倒挂），二是第三方集成（Slack/Notion）的可用性直接影响真实用户留存。

## 5. Bug 与稳定性

按严重程度排列：

- **中 — Notion 安装失败（#7823）**：来自 Slack #x-ai-product-feedback（原始时间戳 2026-07-28），用户报告 Notion 工具无法在 IronClaw 环境中安装。建议归类为 `integration-install / Notion`。暂无 fix PR。链接: https://github.com/nearai/ironclaw/issues/7823
- **中 — Slack 无法设置（#7822）**：同一渠道用户的关联反馈，Slack 集成无法完成账户设置，并明确指出与 Notion 安装问题相关。建议归类为 `integration-install / Slack`。暂无 fix PR。链接: https://github.com/nearai/ironclaw/issues/7822
- **低（视觉） — 建议面板出现时标题被裁切（#7813）**：聊天首页渲染 "Suggested for you" 面板时，"What do you need help with?" 标题顶部被裁切而非布局重排。已附截图，属 UI 回归。暂无 fix PR。链接: https://github.com/nearai/ironclaw/issues/7813
- **低（权限） — 建议生成未遵守用户级工具权限（#7812）**：当前建议生成仅使用内部搜索工具（memory/extensions/tools），未接入用户实际数据；需在建议生成期间启用已连接工具、遵守用户级权限，并更新 prompt 为只读/仅列出模式。此问题与 #7815 onboarding 工作高度相关，可能随该 epic 一并解决。链接: https://github.com/nearai/ironclaw/issues/7812

**稳定性补充**：当日关闭的 #7774（时区测试）与 #7700（通知证据化）分别消除了测试脆弱性与通知误报/漏报两个系统性风险源。

## 6. 功能请求与路线图信号

- **上下文压缩/投影（#7824）**：Pi-style 压缩屏障 + 结构化摘要 + 溢出恢复，由 $10.31 vs $2.52 的实测成本差驱动。这是当前最明确的经济性优化信号，预计进入近期路线图。链接: https://github.com/nearai/ironclaw/issues/7824
- **沙箱出口认证通用化（#7825 + #7810）**：退役 GitHub 专用 carve-out，改为 provider-neutral 授权命令绑定 + per-user `iron-proxy` sidecar + host credential broker。配套 PR #7810（XL）已完成 Sandbox worker 镜像的 `gh` 安装与 argv 边界保留，处于待合并状态。链接: https://github.com/nearai/ironclaw/issues/7825 | https://github.com/nearai/ironclaw/pull/7810
- **后台 Subagent 模式（#7818，slices 2b+2c）**：实现 receipt spawns、per-child delivery、activation 与 healing sweeps，在前序 slice 2a（#7788）落地的静止表面上激活生产者半区；提交按 2b→2c 排序以便后续可机械拆分，并含部署门禁说明。链接: https://github.com/nearai/ironclaw/pull/7818
- **CI 提速四轨并行（T1–T4）**：T1 #7821（单一样 setup-rust composite：toolchain pin、mold、集中化 build profiles，关闭 #7798）；T2 #7817（nextest 流水线 + 全失败信号 + PR unthrottle，关闭 #7799）+ #7820（scope-isolation 套件整合探针，叠加于 #7817）；T3 #7819（PR/queue 检查收敛：planner drift guard、default-features clippy，关闭 #7800）；T4 #7809（canonical preflight 门禁列表 + worktree-safe hooks + 自打印 REPRO，tasks 1–5）。5 个 PR 全部同日更新，反映维护者对 CI 可靠性/速度的系统性投入。链接: https://github.com/nearai/ironclaw/pull/7821 | https://github.com/nearai/ironclaw/pull/7817 | https://github.com/nearai/ironclaw/pull/7819 | https://github.com/nearai/ironclaw/pull/7809
- **OOBE 建议抽屉增强（#7816）**：为建议集增加 refresh 入口、为抽屉增加 connect 入口，均在 `oobe_suggestions` flag 后默认关闭，不改变 wire contract。链接: https://github.com/nearai/ironclaw/pull/7816

## 7. 用户反馈摘要

- **第三方集成安装是当前最大用户痛点**：Slack #x-ai-product-feedback 渠道的两条反馈（#7822、#7823）指向同一问题域——用户在 IronClaw 中无法安装/设置 Notion 与 Slack。值得注意的是，这两条反馈的原始时间戳为 2026-07-28，时隔近一个月才被转为 Issue（创建于 2026-08-22），说明从用户反馈渠道到 Issue 跟踪存在明显延迟。链接: https://github.com/nearai/ironclaw/issues/7823 | https://github.com/nearai/ironclaw/issues/7822
- **成本敏感场景的量化反馈**：#7824 的测算虽来自内部基准（PinchBench + DeepSeek-V4-Flash via OpenRouter），但其"成本翻四倍 + 准确率下降"的组合（227.7M tokens/$10.31/54.4% vs 55.1M/$2.52/60.5%）代表了长会话用户的共同体验，是强信号级别的经济性反馈。链接: https://github.com/nearai/ironclaw/issues/7824
- **Onboarding 闭环的"最后一公里"讨论**：#7815 的讨论总结了 connect → suggest → thread 流程中仍需后端/前端配合补齐的缺口（如建议生成时用户数据不可见、就绪建议集无法刷新、缺少连接入口），核心诉求是让新用户从连接到建议再到开聊的路径顺畅无断点。链接: https://github.com/nearai/ironclaw/issues/7815

## 8. 待处理积压

- **陈旧的 docs 类大型 PR（18 天未合）**：
  - #7257（2026-08-05 创建）：WebUI Storybook + design-system catalog 的 north-star 提案，横跨 #7038（Phase 1）与 #7781（Phases 2–3）三个 tracking epic，纯文档。链接: https://github.com/nearai/ironclaw/pull/7257
  - #7255（2026-08-05 创建）：APDD Kit 治理框架评估 + 本地化集成提案，评估文档对无仓库访问权限的评审者自包含。链接: https://github.com/nearai/ironclaw/pull/7255
- **高风险/高价值核心 PR 等待合入**：
  - #7491（omp core-tool contract，risk: medium，2026-08-11 创建）：将编码工具面收敛为 `read`/`write`/`edit`/`glob`/`grep`/`bash` 六个裸名称并附带 benchmark arm；#7824 的成本对比数据正是基于该构建（`949991b5`），其合入状态影响后续优化讨论的基准。链接: https://github.com/nearai/ironclaw/pull/7491
  - #7650（automations 运行时证据推导，2026-08-14 创建）：以确定性的 capability-call 记录替代 answer-only 语义判断，与已关闭的 #7700 同属"证据驱动"方向；为避免两个实现分叉，建议尽快推进审查。链接: https://github.com/nearai/ironclaw/pull/7650
  - #7765（AfterTurn 生命周期钩子，2026-08-20 创建）：hooks 体系首个 act-capable 扩展点，涉及安装期权限校验，属架构级变更，值得核心维护者优先 review。链接: https://github.com/nearai/ironclaw/pull/7765
- **临时占位 PR**：#7749 是仅供评论 `/benchmark` 触发 `qa-automation-preview` 重测的占位 PR（非产品变更），运行完成后应由作者关闭。链接: https://github.com/nearai/ironclaw/pull/7749

---

*数据来源：github.com/nearai/ironclaw，统计窗口 2026-08-22 至 2026-08-23。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-08-23）

## 1. 今日速览

过去 24 小时 LobsterAI 处于**低活跃维护状态**：无新 Issue、无新 PR、无新版本发布。2 条旧 Issue 和 5 条旧 PR 被标记 `[stale]` 并自动关闭，均来自 2026-04-01 的积压条目，属于机器人清理，而非实质性开发进展。当前唯一活跃信号是待合并 PR [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) 于今日继续更新。总体来看，项目社区输入偏低，需关注被自动关闭的 PR/Issue 是否真正解决，而非仅被“清掉”。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日**没有新的代码合并进主干**，被关闭的 5 条 PR 均为 `[stale]` 自动关闭，而非维护者主动合入：

- [#1205 fix(cowork): show error toast when session rename fails](https://github.com/netease-youdao/LobsterAI/pull/1205) —— 会话重命名失败时无用户提示的问题。
- [#1208 feat(cowork): 新增手动重试按钮，支持频繁请求等瞬时错误快速重试](https://github.com/netease-youdao/LobsterAI/pull/1208) —— 为 429、网络故障等场景增加一键重试。
- [#1209 fix(web-search): web-search-block-unsupported-chrome-flags](https://github.com/netease-youdao/LobsterAI/pull/1209) —— 修复 Chrome 自动化标志外部注入问题。
- [#1212 fix(model): allow up to 20 custom providers](https://github.com/netease-youdao/LobsterAI/pull/1212) —— 自定义模型 provider 上限从 10 提升到 20。
- [#1214 会话详情新增导出为 Markdown 文件功能](https://github.com/netease-youdao/LobsterAI/pull/1214) —— 实现会话详情导出 Markdown。

这些 PR 本身具备明确功能价值，却因长期无人 review 被自动关闭，属于项目流程上的**积压损耗**。目前唯一仍开放并更新中的 PR 是：

- [#2452 fix(openclaw): preserve provider for slashed model ids](https://github.com/netease-youdao/LobsterAI/pull/2452) —— 修复 OpenClaw 模型 ID 包含 `/` 时 provider 前缀丢失的问题，待维护者 review 和合入。

## 4. 社区热点

今日没有高热度讨论。相对最有“社区信号”的仍是两个被 stale 关闭的条目，各有 2 条评论：

- [Issue #1206 【bug】私有化部署的 kimi2.5 模型分析文档会重复处理或回复进度](https://github.com/netease-youdao/LobsterAI/issues/1206)  
  用户报告 kimi2.5 在文档分析场景下会重复回复当前动作，且当前任务必现，切换模型后正常。背后诉求是 AI 助手在执行长任务时需要**清晰的进度反馈**，而不是让用户困惑于“是 bug 还是在继续执行”。

- [Issue #1213 【功能建议】为会话详情添加「导出为 Markdown」功能](https://github.com/netease-youdao/LobsterAI/issues/1213)  
  用户表示当前只能导出图片，无法方便地引用、编辑、检索对话内容，明确提出 Markdown 导出需求。值得注意的是，该需求已有对应实现 PR [#1214](https://github.com/netease-youdao/LobsterAI/pull/1214)，但两者均被 stale 关闭，说明**需求真实，但维护通道未及时响应**。

## 5. Bug 与稳定性

今日没有新增 Bug 报告。但存在被自动关闭的旧问题，需维护者确认是否真实解决：

| 严重程度 | 问题 | 状态 | 是否有修复 PR |
|---|---|---|---|
| 中 | [Issue #1206](https://github.com/netease-youdao/LobsterAI/issues/1206)：kimi2.5 私有化部署时文档分析出现重复处理/重复回复，必现 | 已关闭（stale） | 未发现对应 fix PR |
| 低（体验） | [PR #1205](https://github.com/netease-youdao/LobsterAI/pull/1205)：会话重命名失败时静默无提示 | PR 已关闭（stale） | 修复 PR 本身被关闭，未合入 |
| 低（体验） | [PR #1208](https://github.com/netease-youdao/LobsterAI/pull/1208)：429/网络错误中断后用户只能手动重发消息 | PR 已关闭（stale） | 修复 PR 本身被关闭，未合入 |

这些项虽被自动关闭，但本质上仍是“未解决/未合入”状态，建议维护者回捞评估。

## 6. 功能请求与路线图信号

从今日清理的旧条目中，可以识别出以下社区明确期待的功能方向：

- **会话导出为 Markdown**：[Issue #1213](https://github.com/netease-youdao/LobsterAI/issues/1213) 提出需求，[PR #1214](https://github.com/netease-youdao/LobsterAI/pull/1214) 已完成实现，但被自动关闭。若维护者接受该功能，直接恢复 PR 即可进入下一版本候选。
- **瞬时错误一键重试**：[PR #1208](https://github.com/netease-youdao/LobsterAI/pull/1208) 针对 429、网络故障等场景提供了内联“重试”按钮，属于典型的体验优化，适合纳入下一迭代。
- **自定义模型 provider 数量扩展**：[PR #1212](https://github.com/netease-youdao/LobsterAI/pull/1212) 将上限从 10 提升到 20，体现多模型管理需求正在增长。
- **OpenClaw 模型 ID 兼容性**：[PR #2452](https://github.com/netease-youdao/LobsterAI/pull/2452) 目前仍开放，修复 `custom_0` + `deepseek-ai/DeepSeek-V4-Flash` 这类带 `/` 模型 ID 的 provider 保留问题，方向明确，建议优先 review。

## 7. 用户反馈摘要

从 today 关联的 Issue/PR 描述中，可以提炼出真实用户场景：

- **私有化模型用户反馈困惑**：在 [Issue #1206](https://github.com/netease-youdao/LobsterAI/issues/1206) 中，用户直言“一个行为提示一遍即可，重复的情况不清楚是出现 bug 还是要继续等待执行”。这说明当 AI 任务流程较长时，用户需要**更清晰的“进度 vs 重复动作”区分**。
- **对话导出需求强烈**：[Issue #1213](https://github.com/netease-youdao/LobsterAI/issues/1213) 中提到“只能截图或手动复制，操作繁琐，且图片格式不便于后续编辑和检索”，这是典型的知识管理场景，说明用户希望 LobsterAI 沉淀为可复用的文本资产，而不只是聊天工具。
- **错误恢复路径太陡**：根据 [PR #1208](https://github.com/netease-youdao/LobsterAI/pull/1208) 的背景描述，当 Cowork 因 429/网络故障中断后，用户必须手动重新输入上一条消息才能继续，这类瞬时错误直接打断了工作流，体验损失明显。

## 8. 待处理积压

当前供应链中需要维护者重点关注的历史积压项：

- [PR #2452（OPEN）](https://github.com/netease-youdao/LobsterAI/pull/2452)：已开放 16 天，今日仍在更新。该 PR 影响 OpenClaw 模型 ID 含 `/` 时 provider 前缀丢失的问题，可能导致模型路由错误，**建议尽快 review 并合入**。
- [Issue #1206（CLOSED/stale）](https://github.com/netease-youdao/LobsterAI/issues/1206)：kimi2.5 重复处理问题没有对应修复，被自动关闭后存在“假关闭”风险，建议重新打开或在新版本发布说明中明确状态。
- [Issue #1213（CLOSED/stale）](https://github.com/netease-youdao/LobsterAI/issues/1213) 与 [PR #1214（CLOSED/stale）](https://github.com/netease-youdao/LobsterAI/pull/1214)：需求与实现均已存在，只因无 review 被关闭。如果团队有 Markdown 导出规划，应恢复该 PR，避免重复开发。

---

**总结**：LobsterAI 今日无新代码合入、无版本发布，活跃度偏低；大量 `[stale]` 清理让积压数字下降，但真实问题并未全部闭合。项目健康度处于“维护期”状态，建议维护者优先处理唯一开放 PR [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452)，并回捞被误关的有价值 PR（尤其是 Markdown 导出和重试按钮），以保持社区贡献者的积极性。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 2026-08-23

## 1. 今日速览

过去24小时 Moltis 仓库保持中等强度活跃度：新开放 3 个 PR 和 1 个 Issue，无合并、无关闭、无新版本发布。项目进展集中在三个方向——OpenAI 工具模式兼容性修复、MCP 服务器重启后的会话稳定性修复、以及 Browserless v2 容器支持。社区同时提出一项安全相关的 hooks fail-closed 策略请求，显示用户对安全边界的关注度上升。整体项目状态健康，PR 队列质量较高，未出现阻塞性事故。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无 PR 被合并或关闭，但 3 个新 PR 已进入待审查队列，分别覆盖工具兼容性、运行时稳定性与浏览器自动化能力三个维度：

- **#1232 fix(tools): make object schemas OpenAI-safe** — 修复 OpenAI strict tool schemas 强制 `additionalProperties=false` 导致 patch/map 字段被替换为 null 或空值的问题。通过显式声明 cron 与 webhook patch 字段、将 MCP 环境变量建模为固定 name/value 条目来保证 schema 与数据完整性。该 PR 直接影响 Codex 等 OpenAI 兼容客户端的工具调用正确性。（[链接](https://github.com/moltis-org/moltis/pull/1232)）
- **#1231 fix(mcp): resolve current client after server restart** — 修复 MCP 服务器重启后活动聊天会话继续通过已关闭客户端实例调度调用的问题。PR 将为每个服务器连接保持最新客户端引用，避免在下一轮工具注册表重建前出现调用失败。（[链接](https://github.com/moltis-org/moltis/pull/1231)）
- **#1229 fix(browser): support Browserless v2 containers** — 为 Browserless v2 添加完整容器协议支持，同时保留现有 v1 镜像、配置与公共启动 API 作为默认。通过 Base64 `launch` WebSocket 查询传递 v2 启动参数，支持 `TIMEOUT`/`CONCURRENT` 等新配置。（[链接](https://github.com/moltis-org/moltis/pull/1229)）

## 4. 社区热点

今日无评论或表情反应数据累积，唯一的 Issue 与全部 3 个 PR 均处于创建当日。值得关注的是安全相关的 #1230：

- **Issue #1230 feat(hooks): add an opt-in fail-closed error policy for modifying security hooks** — 指出 Moltis 修改型 hooks（如 `BeforeToolCall`）作为安全边界使用时的一个设计缺口：运行时 hook 失败目前默认继续执行（fail-open），可能导致安全策略被绕过。该请求建议增加 fail-closed 错误策略选项，在 hook 自身出错时阻断工具调用。（[链接](https://github.com/moltis-org/moltis/issues/1230)）

虽然没有互动数据，但该 Issue 指向 hook 安全语义中的关键设计决策，预计后续会引发维护者与用户的深入讨论。

## 5. Bug 与稳定性

今日报告/修复的稳定性问题按严重程度排列：

| 严重程度 | 描述 | 相关 PR | 状态 |
|---------|------|--------|------|
| 高 | OpenAI strict 模式下对象 schema（patch/map）字段数据丢失，被迫发送 null/空值 | #1232 | 待合并 |
| 中 | MCP 服务器重启后活动对话仍通过已关闭客户端实例调度，导致调用失败 | #1231 | 待合并 |
| 中 | Browserless v2 容器与现有协议不兼容，浏览器工具调用受阻 | #1229 | 待合并 |

目前无崩溃级回归报告，三个问题均有针对性修复 PR 在队列中等待审查。

## 6. 功能请求与路线图信号

- **Fail-closed Hook 错误策略（#1230）**：明确要求修改型 hooks 支持失败时阻断执行的安全策略。这与 Moltis 的 policy enforcement 定位相符，有可能被纳入下一版本，成为安全相关的可选配置项。（[链接](https://github.com/moltis-org/moltis/issues/1230)）
- **Browserless v2 容器支持（#1229）**：PR 已实现功能，表明贡献者认可 v2 容器方向的演进；若合并，可能预告 Browserless v1 模式将逐步过渡到 v2。（[链接](https://github.com/moltis-org/moltis/pull/1229)）

## 7. 用户反馈摘要

今日无公开评论数据，但从 Issue 与 PR 的问题描述中可以提炼三类用户诉求：

1. **安全边界确定性** —— 使用 hooks 执行安全策略的用户希望在 hook 自身出错时阻断工具调用，而非放行；
2. **OpenAI 生态兼容性** —— 使用 Codex 等 OpenAI 严格模式工具的用户遭遇 schema 约束导致参数丢失，影响实际任务的正确性；
3. **长会话可靠性** —— 使用 MCP 服务器的用户希望服务器重启/更新后，进行中的对话不会被“陈旧”客户端中断。

这些诉求共同指向生产环境对 AI 代理框架的信任要求：安全策略上宁可失败也不放行，工具契约上严格匹配，运行过程中保持连接稳定。

## 8. 待处理积压

- 今日新增的 3 个 PR 均处于待审查状态，未超过 24 小时无响应，暂无长期未处理事项。
- 建议维护者优先关注 **#1231**（MCP 重启后客户端解析）：该问题与运行期连接生命周期直接相关，涉及 MCP 服务器热重启场景的用户可能正受影响，建议尽早安排审查与合并。
- 同时建议将 **#1230** 的安全策略讨论提上路线图议程，明确 fail-open/fail-closed 的默认行为及迁移路径。

---

*数据来源：Moltis GitHub 仓库（2026-08-22 至 2026-08-23）*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-08-23

## 1. 今日速览

- 过去 24 小时共产生 7 条 Issue 更新（6 条新开/活跃，1 条关闭）和 6 条 PR 更新（全部待合并），无新版本发布。
- 社区反馈集中在**推理过程显示干扰（#7196）**、**shell 工具字符损坏（#7216）**、**模型后端 UI 显示异常（#7215）** 等体验与稳定性问题上。
- PR 池中有 6 个待合并变更，其中 4 个来自 first-time-contributor，覆盖文档、Chrome 远程桥接、Cron 模型选择、自定义 profile 显示等，社区参与度明显上升。
- 今日无 PR 被合并或关闭，功能落地节奏暂缓，但多个 PR 进入更新活跃期，维护者正在推进 review。
- 整体健康度中等：Issue 响应及时，但尚无针对新报告 Bug 的修复 PR 出现，稳定性风险需要跟踪。

## 2. 版本发布

今日无新版本发布（最新 Releases 为空）。

## 3. 项目进展

今日没有 PR 被合并或关闭，6 个 PR 均处于待合并状态。其中多个 PR 在本日有更新，说明正在接受 review 或迭代：

- [#7214 docs(readme): list Access Policy as the fifth security layer](https://github.com/agentscope-ai/QwenPaw/pull/7214) — 修正 README 安全特性清单，将 Access Policy 补齐为第五层安全机制。由首次贡献者提交，文档完整性问题小但利于用户理解安全模型。
- [#7054 feat(chrome): support remote bridge endpoint for LAN/network browsers](https://github.com/agentscope-ai/QwenPaw/pull/7054) — 允许 Chrome 插件通过远程 bridge 连接局域网/网络浏览器，突破当前 loopback-only 限制，对远程开发场景有实际价值。
- [#7050 feat(console): add per-cron-job model override picker](https://github.com/agentscope-ai/QwenPaw/pull/7050) — 为 Cron 任务增加独立模型选择器，后端契约已存在，属于完善已有能力的前端补齐。
- [#6808 fix(console): show custom profile markdown files](https://github.com/agentscope-ai/QwenPaw/pull/6808) — 修复工作区 Profile 分类只显示内置 persona 文件、隐藏自定义 Markdown 文件的问题。已等待约 16 天，建议维护者优先处理。
- [#7190 feat(qwenpaw-data): PyPI runtime path, docker-compose one-shot demo, and env inheritance fix](https://github.com/agentscope-ai/QwenPaw/pull/7190) — 让 qwenpaw-data 可以不依赖源码直接通过 PyPI 安装运行，并提供完整 GAAP demo 的 docker-compose 栈，降低数据功能的上手门槛。
- [#7187 fix(chat): disable thinking for title generation](https://github.com/agentscope-ai/QwenPaw/pull/7187) — 自动生成对话标题时禁用 thinking，避免推理模型输出 “thinking process” 等文本污染标题，并附带回归测试。

这些 PR 分别涉及文档、浏览器集成、定时任务、工作区 UI、数据组件和聊天体验，整体方向是**完善细节体验与扩展部署场景**，但尚未进入主干。

## 4. 社区热点

- [#7196 [Feature] 一直显示推理过程是严重的视觉干扰，希望可以设置默认是否折叠](https://github.com/agentscope-ai/QwenPaw/issues/7196) — 今日评论最多（2 条）、唯一有 👍 的 Issue。用户以 hermes 为参照，希望默认折叠推理过程，仅在调试 skill/agent 或排查异常时展示。这说明**推理过程展示策略**已成为影响日常使用体验的显性痛点，且与 [#7187 fix(chat): disable thinking for title generation](https://github.com/agentscope-ai/QwenPaw/pull/7187) 构成“控制 thinking 输出”的一组需求，建议维护者合并评估。

## 5. Bug 与稳定性

按严重程度排列：

1. **[#7216 execute_shell_command 工具名在 LLM 输出中被间歇性字符替换（如 l→|），导致 ToolNotFoundError](https://github.com/agentscope-ai/QwenPaw/issues/7216)** — 严重。工具名被字符替换会直接导致核心 shell 工具调用失败，且为间歇性，定位难度高。暂无关联 fix PR。
2. **[#7212 Inlining an image whose pixel dimensions exceed the provider's limit crashes the request instead of degrading gracefully](https://github.com/agentscope-ai/QwenPaw/issues/7212)** — 严重。图片未超 2MB 内联上限但像素超限时，请求崩溃 `MODEL_EXECUTION_ERROR` 并结束会话，用户无降级路径。暂无关联 fix PR。
3. **[#7215 The interface does not display after adding OpenRouter and OpenCode model backends](https://github.com/agentscope-ai/QwenPaw/issues/7215)** — 中等。添加模型后端后 GUI 不完整显示，影响多模型用户配置。暂无关联 fix PR。
4. **[#7213 会话输出总是有无意义的空行](https://github.com/agentscope-ai/QwenPaw/issues/7213)** — 低/中。用户反馈“说了 N 次还是很多空行”，属输出格式控制问题，影响阅读体验，但无功能阻断。暂无关联 fix PR。

目前新报告的 4 个 Bug 均未看到对应修复 PR，其中 #7216 和 #7212 直接影响核心链路，建议优先排查。另注意 #7212 与 #7201（按媒体类型拆分配额）来自同一作者，可能指向更深层的媒体内联校验机制缺失。

## 6. 功能请求与路线图信号

- [#7196 设置默认是否折叠推理过程](https://github.com/agentscope-ai/QwenPaw/issues/7196) — 与已存在 PR [#7187](https://github.com/agentscope-ai/QwenPaw/pull/7187) 同属 “thinking 显示控制” 主题，后者已落地到标题生成场景，前者若被采纳则可能扩展为全局 UI 配置项，纳入下一版本的概率较高。
- [#7201 Separate per-provider max_image_bytes / max_video_bytes / max_audio_bytes caps and expose them in the provider advanced settings](https://github.com/agentscope-ai/QwenPaw/issues/7201) — 要求将单一 `max_inline_media_bytes` 拆分为图片/视频/音频三个独立上限，并在高级设置中开放。属于配置粒度细化，与 #7212 的崩溃问题形成呼应，是明确的稳定性+体验改进方向。
- [#7043 启动时执行 chcp 65001 切换到 UTF-8 环境](https://github.com/agentscope-ai/QwenPaw/issues/7043) — 今日已关闭。该请求解决中文 Windows 下 shell 工具输出乱码/编码不匹配问题，关闭可能意味着已通过其他方式处理或暂时搁置，建议在 release notes 中说明结论。

## 7. 用户反馈摘要

- **推理过程展示是“视觉干扰”而非增值特性**（#7196）：用户 rernbin 表示关注工作进程时默认展示推理过程造成干扰，只有在调试 skill/agent 时才有需要，并明确认可 hermes 的可配置做法。这说明当前的默认展示策略与部分用户工作流不匹配。
- **中文 Windows 编码问题使 shell 工具难以稳定使用**（#7043，已关闭）：用户 One-sixth 详细分析了 QwenPaw 以 `-NoProfile -NonInteractive` 启动 pwsh 导致用户 `$PROFILE` 不加载、输出编码跟随控制台代码页的问题。该 Issue 已关闭，但未在数据中看到具体解决方案。
- **“空行”问题反复出现引发不满**（#7213）：用户 xiaohushi512 表示多次要求后仍输出大量空行，说明当前输出后处理对用户指令的遵循度不足，也反映出对生成格式控制能力的期待。
- **工具名替换导致核心操作失败**（#7216）：用户 liuyils 报告 `execute_shell_command` 中 `l` 被替换为 `|`，这类模型输出字符级别扰动虽然偶发，但对工具调用可靠性影响极大，用户明确表达了对此类不确定性的焦虑。
- **图片内联崩溃直接终结会话**（#7212）：用户 xiaoka76 强调图片“小于 2MB 但像素超限”即崩溃并结束对话，期望优雅降级而非直接失败，这是对错误处理机制的重要反馈。

## 8. 待处理积压

- **[#6808 fix(console): show custom profile markdown files](https://github.com/agentscope-ai/QwenPaw/pull/6808)** — 创建于 2026-08-07，已等待 16 天。首次贡献者提交，修复自定义 persona 文件被隐藏的问题，代码改动量预计不大，长时间未合并容易打击新贡献者积极性，建议维护者尽快 review。
- **[#7050 feat(console): add per-cron-job model override picker](https://github.com/agentscope-ai/QwenPaw/pull/7050)** 与 **[#7054 feat(chrome): support remote bridge endpoint for LAN/network browsers](https://github.com/agentscope-ai/QwenPaw/pull/7054)** — 均创建于 2026-08-15，已等待 8 天，且来自同一贡献者 cillins。两个 PR 分别完善 Cron 模型选择和 Chrome 远程桥接，功能方向明确，建议合并或给出明确反馈以避免社区贡献流失。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-23

## 今日速览

过去 24 小时 ZeroClaw 仓库活跃度处于高位：共 50 条 Issue 更新（新开/活跃 43 条，关闭 7 条）和 50 条 PR 更新（待合并 48 条，合并/关闭 2 条），无新版本发布。合并吞吐量偏低（仅 2 条 PR 合入），待合并 PR 积压至 48 条，评审队列压力明显。社区讨论热点集中在架构级 RFC（运行时会话所有权、Gemini Live 语音通道）和 Windows 平台兼容性；新合入的 2 条 PR 均为 WASM 插件安全加固，显著改善了插件超时与密钥隔离能力。

## 项目进展

过去 24 小时仅有 2 条 PR 被合并/关闭，均落在插件安全基线加固上：

| PR | 内容 | 状态 |
|----|------|------|
| [fix(plugins): bound WASM exports by a wall-clock deadline (#9403)](https://github.com/zeroclaw-labs/zeroclaw/pull/9403) | 为所有 WASM 插件导出（tool/memory/channel）增加可配置的 wall-clock 截止时间，默认 30s（`plugins.limits.call_timeout_ms`），修复了 [WASM 插件调用无超时、可被慢响应无限拖住的问题 (#9255)](https://github.com/zeroclaw-labs/zeroclaw/issues/9255) | 已合并 |
| [feat(plugins): add scoped tool secret service (#9128)](https://github.com/zeroclaw-labs/zeroclaw/pull/9128) | 为 tool 组件新增宿主托管的 `secrets.get(name)` 服务，按插件实例作用域隔离，仅在工具执行期间授予访问权限 | 已合并 |

这两项合入是 WASM 插件化路线（[#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850)）的重要铺垫：超时边界和密钥作用域补齐了插件隔离的关键缺口。同时，昨日关闭的 7 条 Issue 中包含 4 条值得注意：WASM 超时 bug（#9255，被 #9403 修复）、WhatsApp 文档键名错误（[#9640](https://github.com/zeroclaw-labs/zeroclaw/issues/9640)）、`config init` 生成模板损坏（[#9436](https://github.com/zeroclaw-labs/zeroclaw/issues/9436)）、以及远程 MCP 自定义 CA 支持（[#9339](https://github.com/zeroclaw-labs/zeroclaw/issues/9339)，作为功能请求关闭）。

## 社区热点

最活跃的 Issue 集中在 RFC 与跨平台体验，前五名评论数均超过 13 条：

1. **[RFC: Runtime-owned conversation sessions and transport surface adapters (#9487)](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)** — 23 条评论
   讨论运行时会话所有权与传输适配器的架构边界，涉及 #9488/#9600 所有权划分，是当前最核心的架构演进方向。

2. **[Bug: 74 test failures on Windows (#7462)](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)** — 19 条评论
   Windows 11 中文环境跑出 74 个测试失败，CI 仅覆盖 Linux。同一问题在昨日新增的 [#10251](https://github.com/zeroclaw-labs/zeroclaw/issues/10251) 中被再次放大（17 个 telegram 测试依赖墙钟时间断言）。

3. **[RFC: Decouple memory lifecycle policy from storage backends (#6850)](https://github.com/zeroclaw-labs/zeroclaw/issues/6850)** — 15 条评论
   15 条评论，要求将内存生命周期策略与存储后端解耦，与 [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103)（13 条评论，存储/富集连接器分离）形成记忆架构重构的组合信号。

4. **[RFC: Realtime speech-to-speech channel for Gemini Live (#8780)](https://github.com/zeroclaw-labs/zeroclaw/issues/8780)** — 15 条评论
   语音交互的真实需求，v2 改写成 broker 契约后讨论热度持续。

5. **[Tracker: Maintainer decision queue for RFCs and design issues (#8692)](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)** — 13 条评论
   维护者决策队列 tracker，反映 RFC 评审积压已成为社区关注焦点。

**热点背后的诉求**：开发者既在推动前瞻性架构（运行时会话、语音通道、插件化），也在被基础体验问题困扰（Windows 测试失败、会话管理难用）。RFC 密集而评审缓慢的矛盾正在积聚。

## Bug 与稳定性

按严重程度排列，标注修复状态：

### P1 — 高优先级

| Issue | 描述 | 状态 |
|-------|------|------|
| [block_high_risk_commands = false 不生效 (#10164)](https://github.com/zeroclaw-labs/zeroclaw/issues/10164) | `allowed_commands` 中的高危命令（`rm`）在父/代理直接路径仍被硬阻止，安全配置出现矛盾行为 | 已接受，暂无 fix PR |
| [Telegram 频道重复投递 tool_call+content (#9718)](https://github.com/zeroclaw-labs/zeroclaw/issues/9718) | 模型同时返回 tool_calls 和 content 时，用户收到重复消息 | in-progress；新增 PR [#10215](https://github.com/zeroclaw-labs/zeroclaw/pull/10215)（同一轮 send_via 重复投递抑制）可能覆盖此问题，需确认关联 |
| [agent-browser 子进程等待无界 (#9946)](https://github.com/zeroclaw-labs/zeroclaw/issues/9946) | 可用性探测和 run_command 均无 deadline 与 kill_on_drop，CLI 卡死会挂起整个 agent turn | in-progress，暂无 fix PR |
| [filesystem listener 不支持取消 (#9666)](https://github.com/zeroclaw-labs/zeroclaw/issues/9666) | 阻塞的 `recv()` 无法被取消，阻碍 supervisor 关闭/重载 | in-progress，暂无 fix PR |
| [Windows 74 个测试失败 (#7462)](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | Unix-only 命令、路径语义和控制台编码问题，CI 不覆盖 Windows | 已接受，长期未修复 |

### P2 — 中优先级

| Issue | 描述 | 状态 |
|-------|------|------|
| [telegram listen_* 测试依赖墙钟断言 (#10251)](https://github.com/zeroclaw-labs/zeroclaw/issues/10251) | 与 #9429 同类，17 个测试在负载 runner 上假失败 | 新开 |
| [daemon 日志无界增长 (#9708)](https://github.com/zeroclaw-labs/zeroclaw/issues/9708) | stdout/stderr 重定向到固定文件，无大小/年龄/数量限制 | in-progress |
| [StoragePolicy::Rolling 性能回退 (#10073)](https://github.com/zeroclaw-labs/zeroclaw/issues/10073) | 默认日志策略在持续事件量下存在严重性能回退 | in-progress，已接受 |
| [provider 错误被泛化吞掉 (#9001)](https://github.com/zeroclaw-labs/zeroclaw/issues/9001) | 终端 provider 失败全部包装为 “All model_providers/models failed”，无法区分 LM Studio/Ollama 等具体原因 | in-progress |
| [models refresh 并发丢失缓存 (#9590)](https://github.com/zeroclaw-labs/zeroclaw/issues/9590) | 读-改-写无跨进程锁，并发刷新会静默丢失条目 | in-progress |
| [daemon diagnostics 丢失错误链 (#10232)](https://github.com/zeroclaw-labs/zeroclaw/issues/10232) | `e.to_string()` 只保留外层 context，丢失底层 cause | 已接受 |

## 功能请求与路线图信号

- **实时语音/流式通信**：Gemini Live 语音频道 RFC（[#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780)，15 条评论）与 voice-host 频道（[#7943](https://github.com/zeroclaw-labs/zeroclaw/issues/7943)）持续活跃，语音交互诉求强烈。相关 PR [#8561](https://github.com/zeroclaw-labs/zeroclaw/pull/8561)（Telegram multi_message streaming）仍在等待作者更新，若合入将补齐主流 IM 频道的一致性体验。
- **WASM 插件化路线**：目标是把可选频道/工具从编译期 feature flag 迁移到运行时插件（[#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850)）。昨日合入的 #9128/#9403 已为该路线打下安全地基，[#9129（channel config 服务）](https://github.com/zeroclaw-labs/zeroclaw/pull/9129) 是下一个关键块。
- **安全与认证强化**：主线集中在 v0.9.0 安全队列（[#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)）。新提交的 stacked PR 系列（[#10263](https://github.com/zeroclaw-labs/zeroclaw/pull/10263)、[#10259](https://github.com/zeroclaw-labs/zeroclaw/pull/10259)）将 principal 工具选择器合成进 agent 会话，并在 RPC 层强制认证（native+peercred），是 #8289 安全 RFC 的落地推进。
- **记忆架构重构**：[#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) 与 [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) 形成组合信号——将存储后端与生命周期策略/富集连接器分离，目前均在维护者评审阶段，大概率进入下一轮设计决策。
- **A2A 多智能体协议**：[#9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324) 为 A2A outbound client 的 Phase 1（四个可用工具 + 共享 wire model + 默认关闭的 config 块），实现 RFC #9106 的六个维护者立场，是 v0.9.0 A2A 边界的关键拼图。
- **Android 原生支持**：[#10205](https://github.com/zeroclaw-labs/zeroclaw/pull/10205) 新增 5 个 Android-only 工具（截图、无障碍树、UI 操作、应用启动、设备信息）与独立 App，说明项目在向移动端延伸。
- **cron 确定性**：[#5607](https://github.com/zeroclaw-labs/zeroclaw/issues/5607)（precondition gate）已接受但长时间无 PR 跟进；cron 作业 wall-clock 超时则由 PR [#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) 覆盖，处于待评审状态。

## 用户反馈摘要

- **Windows 二等公民感明显**：评论最多的 bug #7462 持续获得用户共鸣，CI 只跑 Linux 导致 Windows 上 74 个测试失败无人察觉，#10251 又在同一方向上二次爆发，用户对跨平台承诺的信任正在流失。
- **会话管理令人沮丧**：[#10141 “Please make sessions usable”](https://github.com/zeroclaw-labs/zeroclaw/issues/10141) 以第一人称表达了强烈不满——“很难回到之前的会话”“复制会话/消息需要两个放在上下的 ASCII 按钮”。这是极少数以情绪化标题出现的功能请求，直接反映 zerocode TUI 会话体验与用户预期的落差。
- **配置引导存在断裂**：[#9436](https://github.com/zeroclaw-labs/zeroclaw/issues/9436) 中 `config init` 生成的模板无法通过严格加载器，新配置“出生即残缺”，导致新用户首次体验即失败。该问题已在昨日关闭，修复方向正确。
- **安全策略行为反直觉**：[#10164](https://github.com/zeroclaw-labs/zeroclaw/issues/10164) 中用户按文档配置 `block_high_risk_commands = false` + `allowed_commands` 添加 `rm`，却仍然被硬阻止且无审批路径，安全配置的可预测性需要改进。
- **语音通道诉求真实**：多个语音相关 RFC（#8780、#7943）持续有 maintainer 重写和用户追问，说明语音交互不是锦上添花，而是部分场景的核心需求。

## 待处理积压

| 类型 | 项目 | 创建时间 | 优先级 | 备注 |
|------|------|---------|--------|------|
| Issue | [Windows 74 个测试失败 (#7462)](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | 2026-06-10 | P1 | 已 accepted，19 条评论，无 PR；#10251 是同类新证。建议维护者明确是否投入 Windows CI |
| RFC | [Granular sandbox policy (#6996)](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | 2026-05-28 | P2 | 标记 `needs-author-action`，等待作者回应维护者意见 |
| RFC | [Decouple memory lifecycle from storage (#6850)](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | 2026-05-22 | P2 | `needs-maintainer-review`，与 #9103 成对，评审积压中 |
| Issue | [cron precondition gates (#5607)](https://github.com/zeroclaw-labs/zeroclaw/issues/5607) | 2026-04-10 | P2 | 已 accepted 超 4 个月无 PR，功能需求明确但无人认领 |
| PR | [A2A outbound client Phase 1 (#9324)](https://github.com/zeroclaw-labs/zeroclaw/pull/9324) | 2026-07-24 | — | XL 尺寸，`needs-author-action`，等待作者响应两轮评审意见 |
| PR | [Telegram multi_message streaming (#8561)](https://github.com/zeroclaw-labs/zeroclaw/pull/8561) | 2026-06-30 | — | XL 尺寸，`needs-author-action`，与 #8780/#7943 的语音/流式路线直接相关 |

**项目健康度小结**：社区活跃度高、贡献者梯队稳定（IftekharUddin、JordanTheJet、metalmon 等持续输出），但评审吞吐是当前瓶颈——48 条待合并 PR 与 7 条等待维护者评审的 RFC 并存。建议维护者优先处理 P1 bug（#10164、#9946、#9666）与 Windows CI 决策，以缓解用户侧积累的不满情绪。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*