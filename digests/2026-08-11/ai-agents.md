# OpenClaw 生态日报 2026-08-11

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-08-11 00:52 UTC

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

# OpenClaw 项目动态日报 — 2026-08-11

---

## 1. 今日速览

过去 24 小时项目活跃度极高：共更新 500 条 Issue（新开/活跃 406 条，关闭 94 条）和 500 条 PR（待合并 349 条，合并/关闭 151 条）。今日无新版本发布，但合并了 14 个 PR，包括多个 P1 级修复（空响应工具收尾、审批路由归属、Codex 钩子中继配置化等）。社区热度集中在消息可靠性问题上——#121058 以 47 条评论成为焦点，用户明确表达对反复出现的静默回复失败的不满。总体来看，项目 Bug 修复节奏快，但消息投递、会话状态、OAuth 认证等核心链路的稳定性仍是主要矛盾。

---

## 2. 版本发布

今日无新版本发布（最新 Releases 为空）。

---

## 3. 项目进展

今日合并/关闭了 14 个 PR，集中在 **消息可靠性、UI 体验、安全边界、基础设施** 四个方向：

| PR | 关键内容 | 类型 |
|---|---|---|
| [#115104](https://github.com/openclaw/openclaw/pull/115104) | 修复工具调用返回空最终响应时，已完成工具工作未正确收尾的问题（Closes #111764） | 🐛 Bug 修复 |
| [#121673](https://github.com/openclaw/openclaw/pull/121673) | 审批请求现在固定路由到所属 channel 账号，防止跨账号误解析（Related #112067） | 🐛 Bug 修复 |
| [#121637](https://github.com/openclaw/openclaw/pull/121637) | Control UI 终端页在 Gateway 重连后不再出现乱码/陈旧单元格 | 🐛 Bug 修复 |
| [#121653](https://github.com/openclaw/openclaw/pull/121653) | 新增技能集合的原子化 reconcile 操作，`/learn` 优先修订已有技能而非新建 | ✨ 新功能 |
| [#121664](https://github.com/openclaw/openclaw/pull/121664) | 即使托管服务交接失败，也记录已验证的安装回执，避免 dev-channel 更新卡死 | 🐛 Bug 修复 |
| [#121249](https://github.com/openclaw/openclaw/pull/121249) | 新会话分组命名改为 OpenClaw 自有对话框，不再使用浏览器 `window.prompt` | ✨ UI 改进 |
| [#121658](https://github.com/openclaw/openclaw/pull/121658) | 重构 cloud-workers 的 placement 生命周期栅栏，统一 dispatch/activation/reclaim 逻辑 | ♻️ 重构 |
| [#121677](https://github.com/openclaw/openclaw/pull/121677) | 修复 QA 压测串行化问题，使 Gateway 压力测试真实反映并发配置 | 🐛 Bug 修复 |
| [#121696](https://github.com/openclaw/openclaw/pull/121696) | 拒绝无效的 memory 父级引用，并清理测试专用 facade 代码 | ♻️ 重构 |
| [#121695](https://github.com/openclaw/openclaw/pull/121695) | 清除 `main` 分支 CI 红灯（6 个失败检查），解除所有 PR 的合并阻断 | 🛠️ CI 修复 |
| [#111205](https://github.com/openclaw/openclaw/pull/111205) | Codex 原生钩子中继（native hook relay）新增配置开关，可禁用或限定范围 | ✨ 新功能 |
| [#121663](https://github.com/openclaw/openclaw/pull/121663) | 稳定移动端抽屉焦点 E2E 测试 | 🛠️ 测试修复 |

**项目向前推进的量化判断**：核心消息链路（#115104、#121673）、UI 稳定性（#121637、#121249）、基础设施可靠性（#121664、#121677）均有实质修复落地；`main` 分支 CI 恢复绿色消除了合并阻塞，后续 PR 流转效率将显著提升。

---

## 4. 社区热点

### 🔥 最热 Issue

**[#121058 — Silent reply failures still recurring after #116277 closed](https://github.com/openclaw/openclaw/issues/121058) · 47 评论 · P1**
- 摘要：即使 #116277 被关闭，静默回复失败仍在持续发生。监控 cron 持续记录新事件（包括 2026-08-09 当天），且无队列化的回复负载。
- 诉求分析：用户对"关闭 issue 但问题未真正解决"的模式强烈不满，要求给出可观测的失败原因和根治方案。

**[#7707 — Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707) · 33 评论 · P2 · 2026-02-03 创建**
- 摘要：按来源（用户命令、网页抓取、第三方技能）为代理记忆条目打信任标记，防止提示注入/记忆投毒。
- 诉求分析：安全类需求持续获得高关注。涉及 AI 代理的供应链攻击面，社区对 memory poisoning 的担忧强烈。

**[#22438 — Tiered bootstrap file loading](https://github.com/openclaw/openclaw/issues/22438) · 18 评论 · P2 · 2026-02-21 创建**
- 摘要：分层加载 bootstrap 文件，避免大型工作区在子代理和 cron 任务中浪费上下文窗口。
- 诉求分析：上下文窗口成本优化是高频诉求，用户对 token 消耗敏感度持续上升。

**[#86519 — Agent repeats identical replies on Telegram](https://github.com/openclaw/openclaw/issues/86519) · 15 评论 · 已关闭 · P1**
- 摘要：5.20 更新后 Telegram 上代理重复发送相同回复 2-10 次；5.22 降为 2-3 次但未完全修复。
- 诉求分析：重复消息在 IM 场景下造成严重体验问题，已带 `regression` 标签，用户持续关注后续版本验证。

**[#42475 — Per-agent cost budget enforcement](https://github.com/openclaw/openclaw/issues/42475) · 14 评论 · P2 · 2026-03-10 创建**
- 摘要：在 Gateway 层实施按代理的日/月成本上限，防止失控支出。
- 诉求分析：企业/自托管用户最关心可观测性和成本控制，配套 `session-cost-usage.ts` 已有使用基础。

### 📌 热门 PR

**[#117184 — Clean empty staged inbound media directories](https://github.com/openclaw/openclaw/pull/117184) · P1 · 待合并**
- 修复 #104358：清理 host 模式下 `media/inbound/<uuid>` 临时目录。涉及 session-state 和 message-delivery 的 merge-risk 标记。

**[#121692 — Edit a queued chat message in place](https://github.com/openclaw/openclaw/pull/121692) · P1 · 待合并**
- 修复 #121667：允许在发送前直接编辑队列中的消息，避免整个丢弃重写。UI 工作流改进需求明确。

---

## 5. Bug 与稳定性

### P1 级（已标记待处理）

| Issue | 状态 | 描述 | 是否有 Fix PR |
|---|---|---|---|
| [#121058](https://github.com/openclaw/openclaw/issues/121058) | OPEN | 静默回复失败复发，无队列回复负载 | ⚠️ 无 |
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | OPEN | Session 转录投影在持续写入下 livelock，阻塞主线程和所有 channel 传输 | ⚠️ 无 |
| [#97983](https://github.com/openclaw/openclaw/issues/97983) | OPEN | iOS/WebChat 消息写入转录但不触发代理回复 | ⚠️ 无 |
| [#89278](https://github.com/openclaw/openclaw/issues/89278) | OPEN | Codex OAuth 刷新成功但 cron/heartbeat 遭遇 10s 超时死路 | ✅ [#121764](https://github.com/openclaw/openclaw/pull/121764) 待合并 |
| [#92516](https://github.com/openclaw/openclaw/issues/92516) | OPEN | 容器化部署无法信任外部 channel 插件（openKeyedStore 门控） | ⚠️ 无 |
| [#119087](https://github.com/openclaw/openclaw/issues/119087) | OPEN | Gateway 冷启动从 7.1-beta.1 到 7.2-beta.7 回归 ~2.5x | ⚠️ 无 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | OPEN | hook/tool 子进程泄漏，zombie 累积导致运行时退化 | ⚠️ 无 |
| [#98702](https://github.com/openclaw/openclaw/issues/98702) | OPEN | 继承的 OpenAI OAuth 在 openai-chatgpt-responses transport 被拒绝 | ⚠️ 无 |
| [#83598](https://github.com/openclaw/openclaw/issues/83598) | OPEN | anthropic:claude-cli OAuth 刷新仍使主通道 dead-end | ⚠️ 无 |
| [#100941](https://github.com/openclaw/openclaw/issues/100941) | OPEN | 并行工具扇出时 Gateway 丢弃 WebSocket 连接（1006），误报 Gateway 崩溃 | ⚠️ 无 |
| [#118793](https://github.com/openclaw/openclaw/issues/118793) | OPEN | Claude CLI "session limit" 错误未触发模型 fallback 链 | ⚠️ 无 |
| [#119333](https://github.com/openclaw/openclaw/issues/119333) | OPEN | Codex 在 Default 模式下暴露 `request_user_input`，调用时被拒 | ⚠️ 无 |
| [#114020](https://github.com/openclaw/openclaw/issues/114020) | OPEN | Feishu/Telegram 升级 7.2-beta.4 后 dispatch 失败（缺 runDispatchLifecycle） | ⚠️ 无 |

### P2 级（部分已有关联 PR）

| Issue | 状态 | 描述 | 是否有 Fix PR |
|---|---|---|---|
| [#40001](https://github.com/openclaw/openclaw/issues/40001) | OPEN | `write` 工具缺 append 模式，隔离 cron 会话覆盖共享文件导致数据丢失 | ⚠️ 无 |
| [#120735](https://github.com/openclaw/openclaw/issues/120735) | OPEN | Telegram sticker 进入原始文件引用，无法被 image 工具分析 | ⚠️ 无 |
| [#119796](https://github.com/openclaw/openclaw/issues/119796) | OPEN | Windows 下 vitest teardown 报 EBUSY（SQLite 句柄未释放） | ⚠️ 无 |
| [#40919](https://github.com/openclaw/openclaw/issues/40919) | OPEN | Session 内存同步全量 delete-reinsert 模式导致性能退化 | ⚠️ 无 |
| [#45494](https://github.com/openclaw/openclaw/issues/45494) | OPEN | Cron agent 在 LLM 持续故障时耗尽超时窗口而非快速失败 | ⚠️ 无 |
| [#82662](https://github.com/openclaw/openclaw/issues/82662) | OPEN | 隔离 cron agentTurn "setup timed out before runner start"，6 个 fallback 全失败 | ⚠️ 无 |

### 已有 Fix PR 的关键 Bug

- **Context engine 长会话卡死**（[#121623](https://github.com/openclaw/openclaw/issues/121623)）→ 修复 PR [#121647](https://github.com/openclaw/openclaw/pull/121647) 已提交，修复转录超过 20k 事件/8MiB 后 durable outbox 永久阻塞的问题。
- **Codex 自动压缩丢 turn**（[#119977](https://github.com/openclaw/openclaw/issues/119977)）→ 修复 PR [#120443](https://github.com/openclaw/openclaw/pull/120443) 已提交，在 defer 自动压缩前正确读取 thread 绑定。
- **宿主模式入境媒体目录残留**（[#104358](https://github.com/openclaw/openclaw/issues/104358)）→ 修复 PR [#117184](https://github.com/openclaw/openclaw/pull/117184) 已提交，回合结束/超时清理临时目录。

---

## 6. 功能请求与路线图信号

### 社区强烈要求但尚无 PR 的功能

- **[#7707 Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707)** — 记忆来源信任分层（33 评论，安全需求，2 月创建）
- **[#15032 Per-spawn tool restrictions for sub-agents](https://github.com/openclaw/openclaw/issues/15032)** — 子代理工具白名单（防提示注入的 DMZ 场景）
- **[#40786 .gitignore-like exclude for backup CLI](https://github.com/openclaw/openclaw/issues/40786)** — 备份排除敏感文件和大目录
- **[#33413 Slack tool-level progress in thread status](https://github.com/openclaw/openclaw/issues/33413)** — 动态显示当前运行工具而非静态 "typing..."
- **[#28300 Theme Customization System](https://github.com/openclaw/openclaw/issues/28300)** — Control UI 预设主题 + 自定义主题（5 👍，社区呼声高）
- **[#38568 Inject context window % into system prompt](https://github.com/openclaw/openclaw/issues/38568)** — 让代理感知自身上下文使用率

### 已有 PR 支撑、预计可能进入 7.x 版本的功能

| 功能 | Issue/PR | 说明 |
|---|---|---|
| 队列消息原地编辑 | [#121692](https://github.com/openclaw/openclaw/pull/121692) | 修复 typo 无需整条丢弃 |
| 桌面应用 + 浏览器自主 | [#121475](https://github.com/openclaw/openclaw/pull/121475) | Cloud Worker Desktop 增加应用面板和浏览器控制 |
| 可取消的 OAuth 刷新插件钩子 | [#121764](https://github.com/openclaw/openclaw/pull/121764) | 关联 #89278，解决 Codex OAuth 刷新超时 |
| 技能集合 reconcile | [#121653](https://github.com/openclaw/openclaw/pull/121653，已合并) | `/learn` 优先修订已有技能 |
| Codex 钩子中继可配置 | [#111205](https://github.com/openclaw/openclaw/pull/111205，已合并) | 可禁用或限定 native hook relay 范围 |

### 路线图信号

- **上层 UI 体验加速迭代**：#121692、#121249、#121663 集中在 Control UI 交互细节的打磨，说明 Web UI 进入精细化阶段。
- **认证与 OAuth 是当前最突出的技术债**：至少 5 个 P1 Issue 与 OAuth 刷新/继承相关（#89278、#83598、#98702、#114690），且有 2 个 PR（#121764、#112932）在途，下一个 minor 版本大概率重点修复该领域。
- **安全边界持续加固**：#119702（patternProperties ReDoS）、#92516（插件信任门控）、#15032（子代理工具限制）表明供应链安全和沙箱隔离是主线需求。

---

## 7. 用户反馈摘要

### 高频痛点

1. **消息可靠性反复**：用户明确表达对 #116277 关闭后问题复现的不满（#121058 评论区："监控 cron 仍在记录新事件"）。类似情绪也在 #86519（Telegram 重复回复从 8-10 次降到 2-3 次但未彻底修复）中体现——"5.22 修复不完整"。
2. **数据丢失风险**：#40001 的 `write` 工具覆盖问题被多个用户引用，"多个隔离 cron 会话共同写入 memory/YYYY-MM-DD.md 时静默互相覆盖"。
3. **成本与资源消耗**：#42475 请求在 Gateway 层实施成本上限；#80131 指出单次请求认证耗时 5.5s + 工具打包 8.9s，占 TTFT 的 ~33%；#40786 抱怨备份包含 node_modules 导致体积膨胀。
4. **自托管/容器化受阻**：#92516 自托管容器无法信任外部 channel 插件；#119087 冷启动 2.5x 回归；#114154 MCP 工具通过策略检查但从未被代理会话加载。
5. **Windows 平台体验差异**：#93081 Ctrl+C 无法中断前台进程（仅 Windows 受影响）、#119796 测试环境 EBUSY。

### 真实使用场景

- **多区隔离搜索管道**（来自 #15032）：用户构建三区 Web 搜索管道防提示注入，但子代理继承全部工具权限无法约束——安全敏感场景的刚性需求。
- **大型工作区 token 压力**（来自 #22438）：子代理和 cron 任务加载全量 bootstrap 文件浪费上下文，"文件代理从不引用"。
- **IM 渠道的运营级需求**（来自 #33413、#45565）：Slack 状态仅显示 "is typing..."，Gateway 生命周期警告混入正常对话频道，需要通道分离。

### 正面反馈/满意点

- 今日合并的 #121673（审批请求路由归属）直接回应用户对跨账号审批误判的投诉。
- #121695 清除 `main` 分支 CI 红灯，解除了 8+ 个在途 PR 的合并阻塞，社区对维护速度的观感会因此改善。
- 多个 UI 细节改进（#121249、#121663）说明上游积极响应用户体验反馈。

---

## 8. 待处理积压

### 长期未响应的 Issue（超 3 个月且仍 OPEN）

| Issue | 创建日期 | 标签 | 说明 |
|---|---|---|---|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | 2026-02-03 | P2, needs-maintainer-review, needs-product-decision, needs-security-review | 记忆信任标记，33 评论 |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | 2026-02-21 | P2, needs-maintainer-review, needs-product-decision | 分层 bootstrap 加载 |
| [#27445](https://github.com/openclaw/openclaw/issues/27445) | 2026-02-26 | P1, needs-product-decision, needs-security-review | announceTarget 路由（5 👍） |
| [#15032](https://github.com/openclaw/openclaw/issues/15032) | 2026-02-12 | P2, needs-product-decision, needs-security-review | 子代理工具限制 |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | 2026-03-10 | P2, needs-maintainer-review, needs-product-decision | 代理级成本预算 |
| [#40786](https://github.com/openclaw/openclaw/issues/40786) | 2026-03-09 | P2, needs-product-decision, needs-security-review | 备份排除模式 |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) | 2026-03-08 | P1, needs-maintainer-review, needs-product-decision | write 工具 append 模式（数据丢失） |
| [#38568](https://github.com/openclaw/openclaw/issues/38568) | 2026-03-07 | P3, needs-maintainer-review | context 百分比注入 |

> 注意：#7707、#22438、#27445、#42475、#40786 均长时间没有新的 fix PR 关联，且带有 `needs-product-decision` / `needs-maintainer-review` 标签——维护团队需优先给出产品决策，避免社区持续反复提相似请求。

### 长期未合并的 PR（超 1 个月）

| PR | 创建日期 | 说明 |
|---|---|---|
| [#88908](https://github.com/openclaw/openclaw/pull/88908) | 2026-06-01 | Gateway 监督锁恢复感知 draining 状态，已有 proof，待维护者 review |
| [#89526](https://github.com/openclaw/openclaw/pull/89526) | 2026-06-02 | `openclaw health` 显示重启必需的运行时配置漂移 |
| [#112932](https://github.com/openclaw/openclaw/pull/112932) | 2026-07-23 | 仅重新播种 tombstoned 的 OAuth 目标，来自最新 Codex 登录 |

### 今日新出现的高关注待办

- **#121058 静默回复失败**：47 条评论的 P1 问题尚无 fix PR，需要立即排查 #116277 修复为何无效。
- **#119087 Gateway 冷启动回归 2.5x**：影响 1-vCPU 容器环境，需性能回归分析。
- **#115908 Session 投影 livelock**：可阻塞主线程导致全 channel 瘫痪，建议优先处理（已有 `clawsweeper:source-repro` 标签）。

---

## 结语

OpenClaw 社区活跃度和维护响应速度均处于高位：今日 151 个 PR 合并/关闭、14 个关键 PR 落地、CI 恢复绿色。但需警惕的是，大量 P1 级 Bug 集中在消息可靠性和 OAuth 两大领域且长期无 fix PR；同时 14 个积压 3 个月以上的功能请求等待产品决策。建议维护团队在下一版本优先处理 OAuth 刷新机制的整体重构，并对积压的功能请求给出明确取舍，以维持社区的长期信心。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析报告

**报告日期：2026-08-11**

---

## 1. 生态全景

当前生态已形成以 OpenClaw 为事实中心的"一超多强"格局：OpenClaw 单日 500 条 Issue/PR 的流量是第二梯队（Hermes、IronClaw、ZeroClaw 等，各约 50 条）的 10 倍，且催生了 LobsterAI、NanoClaw、PicoClaw 等衍生或借鉴项目。生态整体处于功能高密度迭代与稳定性瓶颈并存的阶段——各项目同步在消息投递可靠性、OAuth 认证链路、安全加固与 Token 成本控制四条主线上攻坚，其中"静默失败"已成为跨项目头号负面体验。与此同时，社区活跃度与维护吞吐量出现分化：部分项目（ZeroClaw、Moltis）面临严重的 PR 合并积压，治理效率正在成为继代码质量之后的第二信任维度。

---

## 2. 各项目活跃度对比

| 项目 | Issue 更新（新开/活跃·关闭） | PR 更新（待合并·合并/关闭） | 今日 Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（406·94） | 500（349·151） | 无 | 🔴 高活跃，核心链路稳定性承压 |
| **Hermes Agent** | 50（44·6） | 50（33·17） | 无 | 🟢 高活跃，治理机制成熟 |
| **IronClaw** | 50（26·24） | 50（33·17） | **v1.1.1-rc.1** | 🟢 高活跃，架构重构攻坚 |
| **ZeroClaw** | 50（50·0） | 50（49·1） | 无（v0.8.3） | 🟠 社区热，合并瓶颈 + 安全债 |
| **CoPaw** | 40（34·6） | 50（31·19） | 无（v2.1.0b2） | 🟢 发布前密集修复冲刺 |
| **LobsterAI** | 1（0·1） | 34（14·20） | 无 | 🟢 高产出低噪音 |
| **NanoBot** | 5（2·3） | 23（13·10） | 无 | 🟢 健康，迭代稳定 |
| **NanoClaw** | 3（3·0） | 20（10·10） | 无 | 🟢 高迭代，重复 PR 需协调 |
| **PicoClaw** | 4 | 9（2·7） | 无（v0.3.1） | 🟡 中活跃，2 条 stale PR 待救 |
| **Moltis** | 3（3 新 Bug） | 1（长期 PR 更新） | 无 | 🔴 社区与维护端脱节 |
| **NullClaw** | 0 新开，1 关闭 | 1（依赖升级） | 无 | 🟡 低活跃，稳定 |
| **ZeptoClaw** | 0 | 0 | - | ⚪ 休眠 |

**关键读数**：合并吞吐最能区分健康度——OpenClaw/Hermes/IronClaw/CoPaw/LobsterAI 日合并均超过 14 条；ZeroClaw 49 条 PR 待合并且 12 项安全缺陷无修复；Moltis 核心 PR #531 搁置 133 天。

---

## 3. OpenClaw 在生态中的定位

- **体量即生态位**：单日 500 Issue + 500 PR，约等于其余 10 个活跃项目流量之和。已形成"问题先在 OpenClaw 爆发、修复方案被衍生项目移植"的扩散路径（LobsterAI 直接 fork OpenClaw 改造桌面 cowork；NanoClaw/PicoClaw 在命名与功能设计上明显承接其范式）。
- **技术路线差异**：OpenClaw 走"Gateway 统一消息路由 + 云端 worker + 技能聚合"的大一统路线；Hermes 以 cron/kanban/SSH 等企业自动化见长，正在做 god-file 字节级拆分重构；IronClaw 则推进 Reborn 架构的扩展分层（extension_host → loops），三者代表了"平台型 / 自动化型 / 扩展生态型"三种架构哲学。
- **核心优势**：渠道覆盖面最广（Telegram/Feishu/Slack/WebChat）、PR 合并节奏快（今日 151 条闭环）、CI 恢复绿色解除合并阻塞。
- **核心风险**：社区信任正被消息可靠性问题侵蚀——#121058 静默回复失败（47 评论）直接质疑"关闭 issue 但问题未解决"；OAuth 领域积压 5+ 个 P1 无修复 PR。若稳定性债务持续累积，高流量可能反噬为负面口碑。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目与具体诉求 |
|---|---|
| **消息可靠性 / 静默失败** | OpenClaw #121058 静默回复复发、#86519 Telegram 重复回复；NanoClaw #3226 平台 ID 重用导致消息静默丢弃（"与 agent 无视了我无法区分"）；Hermes cron 投递链多故障（#69304/#83484）；PicoClaw #3311 工具失败静默循环至超时；ZeroClaw #9779 配置静默不生效 |
| **OAuth / 认证链路** | OpenClaw 5+ P1（#89278 Codex OAuth 超时、#83598 Claude CLI dead-end）；NanoBot #5297 MCP 网页 OAuth 2 天闭环；IronClaw #5882 Slack 重连认证卡死；CoPaw StepFun/Gemini 严格 provider 校验拒收 |
| **安全边界 / 供应链** | ZeroClaw 3 S0 + 9 S1 审计缺陷（git 命令绕过、LINE 群绕过 allowlist）；OpenClaw #7707 记忆信任标记防投毒；NanoClaw #3225/#3229 Telegram 配对码 CSPRNG 双 PR 撞车；PicoClaw #3297 远程执行默认禁用；NanoBot WebSocket 认证迁移 |
| **Token 成本 / 上下文管理** | OpenClaw #42475 代理级成本预算、#22438 分层 bootstrap；NanoBot #5324 Dream 记忆循环吞 10M tokens；Hermes #83553 tokens_in/out 页脚；PicoClaw #2132 模型级 max_tokens；CoPaw #6724 MCP 调用超时配置 |
| **子代理 / 工具权限隔离** | OpenClaw #15032 子代理工具白名单（DMZ 场景）；ZeroClaw #9627 git 命令 `-C` 绕过审批；PicoClaw #3314 customAllowPatterns 被默认 deny 覆盖；Hermes god-file 重构收敛权限面 |
| **多 Agent 路由 / 会话一致性** | OpenClaw #121673 审批路由归属、#121058 会话状态；PicoClaw #3301 dispatch 路由下 `/clear` 失效；Hermes #83550 profile busy mode 未生效；IronClaw #7336 steering 重放去重 |

**共性结论**：可靠性（消息不丢、不重、不静默）、认证（OAuth 刷新不卡死、第三方兼容）、安全（默认收紧而非放宽）、成本（可见、可控、可限额）是四大跨项目主线，并非单一项目的个性问题。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 关键架构差异 |
|---|---|---|---|
| **OpenClaw** | 全功能个人 AI 助手，多 channel + 技能 + Control UI | 开发者 / 自托管 / 企业 | Gateway 中心路由，云 worker，超大体量单体 |
| **Hermes** | 企业自动化运营（cron、Kanban、SSH、Matrix E2EE） | 运维 / 自动化工程师 | god-file 重构中，sweeper 自动化治理标签 |
| **IronClaw** | 渠道交付与扩展生态（Slack/Telegram/Web Push/Telegram linked-device） | 渠道运营者 | Reborn 架构，extension_host → loops 分层 |
| **ZeroClaw** | 安全强化 + 边缘硬件（知识图谱、SOP、Hailo-Ollama、PowerShell） | 安全敏感部署者 | Rust 系 + 治理 RFC 流程，审计驱动开发 |
| **CoPaw** | Qwen 生态 + ReMe 记忆系统 + 插件市场 | 中文用户 / 记忆重度使用 | ReMe Light/ReMe4 双轨记忆后端，Tauri 桌面 |
| **NanoBot** | 轻量 MCP 网关 + WebUI | MCP 服务集成开发者 | 确定性事件投影，网关持有配置，OrcaRouter 多 Provider |
| **NanoClaw** | 模块化重构 + 远程 Streamable HTTP MCP | 开发者 | host seams 能力缝点，模块迁移注册表 |
| **PicoClaw** | 轻量嵌入式部署（树莓派 + DeepSeek） | 边缘 / 个人极客 | Go 实现，schema v4 配置，Telegram 原生富表格 |
| **LobsterAI** | 桌面 cowork 协作 + 文件操作 | 桌面知识工作者 | 基于 OpenClaw 二次开发，React 19/Vite 8 现代化 |
| **Moltis** | 沙箱后端 + 浏览器可视化自动化 | 沙箱自动化用户 | Apple Container/WASI 后端，CDP screencast UI |
| **NullClaw** | A2A 协议服务端 | 多实例/多代理互操作 | A2A v0.3.0 服务端，极简主义 |

**一句话概括**：OpenClaw 做广度，Hermes/IronClaw 做深度运营，CoPaw 做记忆与生态，ZeroClaw 做安全边界，NanoBot/NanoClaw/PicoClaw 做轻量接入，LobsterAI 做桌面体验，Moltis 做沙箱底层。

---

## 6. 社区热度与成熟度

**第一梯队 · 快速迭代期（日 PR 合并 > 14，Issue 讨论密集）**
OpenClaw、Hermes、IronClaw、CoPaw、ZeroClaw（社区侧）。其中 OpenClaw/CoPaw 处于功能与修复并行的高密度期；Hermes/IronClaw 处于架构重构攻坚期，迭代质量受控。

**第二梯队 · 质量巩固期（合并节奏稳定，聚焦打磨）**
LobsterAI（依赖升级 + cowork 交互）、NanoBot（MCP 生态补全 + 安全迁移）、NanoClaw（模块化重构）、PicoClaw（安全收敛 + 渠道体验）。此类项目噪音低，适合作为"功能相对稳定的参考实现"。

**第三梯队 · 低活跃 / 停滞风险（合并吞吐低）**
NullClaw（单日仅依赖升级 PR）、Moltis（PR #531 搁置 133 天，新 Bug 无响应）、ZeptoClaw（休眠）。

**成熟度特征**：Hermes 的 sweeper 自动化标签与 IronClaw 的架构审计机制展示了成熟的工程治理；ZeroClaw 的 RFC 流程（#6808 修订 24 版仍未定稿）则警示"过度治理"同样会拖累生态。

---

## 7. 值得关注的趋势信号

1. **"静默失败"是智能体信任的头号杀手**：OpenClaw #121058（47 评论）、NanoClaw #3226、PicoClaw #3311、ZeroClaw #9779 跨项目共振。用户对"无报错、无响应、无日志"的容忍度极低，可观测性（失败原因可见、队列负载可见、错误可达）正在成为基础要求而非增强特性。

2. **OAuth 是 MCP/Agent 互操作的下一块硬骨头**：NanoBot 用 2 天完成"Issue → 浏览器 OAuth → 合并"的闭环，而 OpenClaw 的 OAuth 债积压 5+ P1。商业 MCP 服务普遍采用 OAuth 而非 API Key，谁能先完成刷新不死锁、继承不拒绝、第三方兼容，谁就掌握生态接入的主动权。

3. **安全默认值从"宽松优先"转向"收紧优先"**：PicoClaw 远程执行默认禁用、ZeroClaw 主张空列表 fail-closed、NanoClaw 修复可预测配对码、NanoBot 移除未认证变更面——安全不再是被动补丁，而是主动的产品决策。

4. **成本可视化内建化**：从 OpenClaw 的代理级预算到 Hermes 的 tokens 页脚、PicoClaw 的模型级 max_tokens，Token 计量正从开发者工具属性演变为用户可感知的产品功能。10M token 事故（NanoBot #5324）表明，缺乏护栏的自主循环是真实的经济风险。

5. **子代理权限隔离将成为自主智能体的标配安全边界**：OpenClaw #15032 的 DMZ 搜索管道、ZeroClaw 的 git 命令绕过、Hermes 的 god-file 拆分，共同指向"最小权限子代理"方向。多代理协作越普及，这个问题的优先级越高。

6. **桌面端与 Windows 平台是第二轮竞争战场**：Hermes 修 Windows SSH/沙箱、LobsterAI 修 Windows pip 运行时、CoPaw 修 Windows 安装占用、ZeroClaw 新增 PowerShell 支持、IronClaw 推桌面导航三件套——移动端之后，桌面体验正在成为自托管 agent 的差异化抓手。

7. **治理吞吐量决定社区长期信心**：ZeroClaw 49 条待合并 PR + Moltis PR #531 搁置 133 天，与 OpenClaw 今日解除 CI 合并阻断形成鲜明对比。对开发者而言，"提 PR 后多久有回应"正成为选型的重要隐性指标。

---

**总结建议**：对技术决策者，若追求生态兼容与渠道广度，OpenClaw 仍是必选参照系但需评估其消息可靠性风险；若重视企业级自动化成熟度，Hermes/IronClaw 更稳健；若业务强依赖记忆与中文生态，CoPaw 值得跟进；若在边缘/安全敏感环境部署，PicoClaw/ZeroClaw 的路线更贴合。生态整体仍处上半场，消息可靠性、OAuth 互操作与子代理权限隔离是未来 6 个月最具确定性的技术投资方向。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-11

## 今日速览

过去24小时内，NanoBot 项目保持了较高的迭代活跃度：共产生 23 条 PR 更新（其中 10 条已合并/关闭），5 条 Issue 更新（2 条新开、3 条已关闭），无新版本发布。核心开发集中在 WebUI 重构、MCP OAuth 支持、安全加固（WebSocket 鉴权、能力降级）以及多项稳定性修复（后台任务覆盖、文件编辑校验）。值得注意的是 MCP OAuth 网页授权功能已通过 PR #5316 落地，回应了用户此前提出的核心需求；同时一个引发超高 token 消耗的 Dream 记忆循环 Bug（#5324）已定位并附带修复 PR（#5325），体现了团队对重大稳定性问题的快速响应。整体来看，项目正处于密集功能迭代与安全/稳定性加固并行推进的阶段，健康度良好。

## 项目进展

今日共合并/关闭 10 个 PR，主要集中在以下方向：

### 功能推进
- **MCP 浏览器 OAuth 支持**（#5316，已合并）：为远程 Streamable HTTP/SSE MCP 服务器添加官方 SDK 支持的浏览器 OAuth 授权流程，并提供 Xmind、Notion、Linear 一键预设。直接回应了 Issue #5297 中用户对网页授权 MCP 的迫切需求。
- **微信强制二维码登录**（#5310，已合并）：修复 CLI 与 WebUI 中强制微信登录时未能完全刷新 QR 流程的问题。
- **OrcaRouter 网关 Provider 接入**（#5328，待合并）：新增 OpenAI 兼容的模型路由网关 OrcaRouter，统一接入 150+ 模型，并附带网关级零信任安全能力。

### 架构与安全加固
- **WebUI 变更迁移至认证 WebSocket**（#5317，已合并）：将 WebUI 状态变更操作从 GET/query-string/custom-header 迁移到经过认证的 WebSocket 请求/响应帧，拒绝未认证的变更，属安全加固项。
- **移除反射式运行时状态访问**（#5319，已合并）：`MyTool` 的反射循环状态包装器替换为显式 `RuntimeControl` 协议与 `AgentRuntimeControl` 适配器，仅暴露白名单、脱敏快照，提升安全性与可维护性。
- **网关持有设置服务**（#5321，已合并）：WebUI 设置服务改为网关持有，引入显式配置路径与串行化原子读写，OAuth 流状态移入网关级注册表。
- **提取确定性事件投影辅助函数**（#5318，已合并）：将 `useNanobotStream` 中可复用的确定性 folds 提取为独立模块，推理完成时间改为显式输入而非读取时钟，增强可测试性。

### 稳定性修复
- **拒绝无意义文件编辑**（#5325，已合并）：`edit_file` 若 old_text 与 new_text 完全相同则返回错误，防止虚假成功报告。直接修复 #5324 的触发条件之一。
- **WebUI UX 恢复与空状态改善**（#5315，已合并）：工作区级聊天创建失败时保留首条 prompt 与被拒项目路径，并提供键盘聚焦恢复与 pending-send 交互锁定；简化认证挑战界面。

**整体判断**：在 WebUI 体系、MCP 生态接入、安全边界三个维度均有实质进展，且多数 PR 附带完整测试覆盖（如 #5325 验证 `60 passed`），代码质量把控稳定。


## 社区热点

### 热点一：MCP 网页 OAuth 授权（Issue #5297 + PR #5316）
- **Issue #5297**（已关闭，3 条评论）：用户 sunboy0523 提出希望 MCP 支持 OAuth 网页授权，明确点名 Xmind MCP（`app.xmind.com/api/mcp`），并给出通过 gateway 获取授权信息、远程访问的具体方案建议。
- **关联 PR #5316**（已合并）：实现浏览器 OAuth + 一键预设，已直接回应此需求。

**诉求分析**：该 Issue 从提交到合并仅约 2 天，说明 MCP 远程服务器网页授权是真实且高频的落地场景痛点——许多商业 MCP 服务（思维导图、文档协作、项目管理）均采用 OAuth 而非简单的 API Key，缺乏该能力严重阻碍 MCP 的日常使用。

### 热点二：Dream 记忆整理异常消耗（Issue #5324 + PR #5325）
- **Issue #5324**（已关闭，2 条评论）：用户一次性报告消耗超 10M token（约半个月用量），异常运行 23 分钟，并提供中英双语详细会话日志分析。
- **关联 PR #5325**（已合并）：拒绝无意义编辑，为触发条件之一打上补丁。

**诉求分析**：资源消耗是自托管 AI 用户的核心敏感点，10M token 相当于显著的经济损失。用户选择提供冗长日志，说明其对项目有较高期望，愿意协助排查。此类问题团队快速闭环有助于维持用户信任。


## Bug 与稳定性

| 严重程度 | Issue / PR | 描述 | 状态 |
|---------|-----------|------|------|
| **P0-Critical** | #5324 / #5325 | Dream 记忆整理在 `edit_file` 接受无意义编辑时陷入无限循环，消耗超过 10M tokens、异常运行 23 分钟 | 已关闭 / 已有修复 PR 合并 |
| **P1-High** | #5317 | WebUI 状态变更操作可通过 GET 等非认证方式发起，存在未授权变更面 | 已关闭 / 修复已合并 |
| **P1-High** | #5271（PR 待合并，`priority: p0`） | 后台任务（如标题生成）保存会话时覆盖用户 `/new` 后的新会话数据 | Issue 未单独列出，PR 待合并 |
| **P2-Medium** | #5327（OPEN） | Nanobot 在推理过程中随机重复同一消息多次（如 "Good points, let me investigate the issue"），无复现步骤细节 | 新开，暂无 fix PR |
| **P2-Medium** | #5300（CLOSED） | 远程 MCP 返回 HTTP 530 时，MCP 客户端触发 `RuntimeError: Attempted to exit cancel scope in a different task`，导致网关崩溃/卡死、事件循环空转、CPU 飙升 | 已关闭（未显示合并的修复 PR） |
| **P2-Medium** | #5311 / #5314 | Agnes AI provider 对嵌套对象工具参数双重 JSON 编码，导致 MCP 工具调用验证失败 | Issue OPEN / PR #5314 待合并 |

**注释**：#5271 的 PR 标注为 `priority: p0`，且关联后台任务覆盖数据的并发问题，建议维护者优先推进；#5300 虽已关闭，但未见对应修复 PR，稳定性影响较大（可导致进程崩溃），建议关注后续回归。


## 功能请求与路线图信号

| 需求 | 来源 | 当前状态 | 路线图判断 |
|------|------|---------|-----------|
| MCP OAuth 网页授权（含 Xmind/Notion/Linear 预设） | Issue #5297 | 已实现（PR #5316 已合并） | **已进入主线**，下一版本将包含 |
| OrcaRouter 网关 Provider（150+ 模型统一接入） | PR #5328 | 待合并 | 较大概率纳入，丰富 provider 生态是开放网关类项目持续方向 |
| 结构化 Token 用量记录 API | PR #5299 | 待合并 | 沉淀用量细粒度记录，配合诊断需求，方向契合资源透明化趋势 |
| Agent Plugins 与 CLI Apps 集成 | PR #5288 | 待合并 | 推进插件边界标准化，属于平台化能力演进 |

综合判断：MCP OAuth 能力补全与多 Provider 接入是近期明确路线；Token 用量结构化记录与插件体系标准化则是中长线平台能力的信号。


## 用户反馈摘要

- **MCP OAuth 需求明确且迫切**（#5297）：用户 sunboy0523 在描述中直接给出目标服务（Xmind MCP 链接）与实现路径建议（gateway 获取授权、远程通过 IP/域名访问），说明该用户已在实际工作流中遇到硬阻塞，而非预期性需求。
- **资源消耗敏感度高**（#5324）：用户详细记录了时间区间（16:45-17:08）、消耗量（超 10M token）并给出中英双语对照，情绪上对“半个月用量被消耗”有明显焦虑，但配合度极高，提供了完整日志。
- **WebUI 体验细节持续被关注**（#5315、#5326）：PR 中涉及恢复失败项目路径、简化认证挑战界面、柔化表单控件焦点样式等细节，说明用户群体对 WebUI 交互质感有一定要求，社区维护者也在持续打磨。
- **Provider 兼容性是长期痛点**（#5311）：用户在使用 Agnes AI 自定义 provider 时遭遇 MCP 工具参数双重编码问题，说明第三方 OpenAI 兼容接口的字段处理差异是实际使用中的高频摩擦点，针对性修复（#5314）待合入即是直接回应。


## 待处理积压

以下为需维护者关注的长期未合入/重要 PR：

| PR | 创建时间 | 待处理天数 | 优先级 | 说明 |
|----|---------|-----------|--------|------|
| **#5179** MCP 集成迁移至 SDK v2（保留旧兼容层） | 2026-07-30 | 12 天 | p1 | 大规模架构迁移 PR，早期 MCP 生态重要升级路径，但有 `conflict` 标签需解决 |
| **#5271** 防止后台任务覆盖会话数据 | 2026-08-06 | 5 天 | p0 | 会话并发一致性关键修复，长时间未合入有数据丢失风险 |
| **#5257** 持续目标延续无界循环修复 | 2026-08-05 | 6 天 | p2 | 修复目标延续在空闲轮次无限注入 nudge 的问题，节省 token 资源，有 `conflict` 标签 |
| **#5292** Matrix 房间级消息回复修复 | 2026-08-08 | 3 天 | 无 | 非线程房间回复无法关联用户消息，影响 Matrix 渠道体验 |

**提醒**：以上 PR 均已有较完整实现且标注了测试覆盖，建议维护者在下次迭代窗口优先解决 conflict 并合入，避免陈旧化。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-08-11

## 1. 今日速览

过去 24 小时项目保持高强度迭代：**50 条 Issue 更新**（新开/活跃 44 条，关闭 6 条），**50 条 PR 更新**（待合并 33 条，已合并/关闭 17 条），**无新版本发布**。今日核心主题是「**文件描述符泄漏/EMFILE 问题群收尾**」与「**god-file 重构 Epic（#78647）稳步落地**」：多个 P1/P2 稳定性问题关闭，同时两个重构子任务 PR 同日提交。项目使用 `sweeper:*` 自动化标签对会话状态、消息投递、平台兼容性等风险域进行分流，治理机制成熟。综合 Issue 关闭率、PR 合入率和贡献者活跃度，项目今日活跃度评估为**高**。

## 2. 版本发布

无新版本。

## 3. 项目进展

根据数据概览，今日 **17 个 PR 已合并/关闭**。Top 20 快照中可见的已关闭 PR 包括：

- **[#83545] fix(ssh): make Windows sandbox routing reliable**（已关闭）— 修复原生 Windows 运行 Hermes 时 SSH 后端文件路径被错误套用 Windows 规范化、OpenSSH ControlMaster 不可配置的问题，显著提升 Windows 平台远程终端/沙箱可靠性。
- **[#83397] fix SQLite file descriptor leak on exception paths**（已关闭，标记 duplicate）— 修复 SessionDB 在异常/关闭路径上未收归连接导致的 FD 泄漏；因与既有修复重复被关闭，其修复范围已被其他 PR 覆盖。

今日新提交的重要 PR（等待合并）：

- **[#83542] EMFILE follow-up 修复**（P2）— 清理 EMFILE 问题群剩余环节：重启路径网关回收、Desktop 网关子进程关闭清理、SSH 远程后端 `ulimit -n 65536`、scandir 修复等。这是多日 FD 泄漏战役的收官性 PR。
- **[#83538] 技能指令队列反馈修复**（P2）— 修复 agent 忙时技能指令被静默排队、用户无感知且重复发送导致 N 份副本的问题（对应 #83209）。
- **[#83550] 修复网关路由后 profile busy mode 未生效**（P2）— 多路复用网关中 `queue`/`steer` 等忙碌模式现在按 profile 配置正确执行。
- **[#83552] Kanban 全局工作线程并发上限**（P3）— 修复各 board watcher 各自执行 `max_in_progress` 导致突破全局 worker 上限的问题。
- **[#83549] 负价格哨兵处理**（P2，kilocode 移植）— 模型目录中的 `"-1"` 等负定价不再进入成本核算，降级为 unknown。

**god-file 重构（#78647）进展：**

- **[#83546] 提取 api_server 幂等性模块** — 从 `gateway/platforms/api_server.py`（7,188 行）字节级提取 `_IdempotencyCache` 等至独立模块，对应子任务 #78643。
- **[#83547] 提取内容策略阻断辅助函数** — 从 `agent/conversation_loop.py`（7,306 行）字节级提取 `_content_policy_blocked_result`，对应子任务 #78641。

整体评价：重构采用「字节级提取、零行为变化」策略，风险可控；桌面稳定性与 Windows 平台兼容性明显补强；EMFILE 系列问题已从「用户密集报告」转入「系统化收尾」阶段。以上修复均未发布，预计随下一版本统一生效。

## 4. 社区热点

| 条目 | 评论数 | 类型 | 热度分析 |
|---|---|---|---|
| [#78647] Epic: Shard all 20 god files | 64 | 重构/架构 | 仓库范围 god-file 拆分政策引发大量讨论，多个子任务 PR 在同日落地，说明社区对架构债偿还形成共识，讨论正转化为实际产出。 |
| [#75269] SessionDB WAL 读者泄漏导致 RLIMIT_NOFILE 耗尽 | 9（已关闭） | P1 Bug | 一直是社区关心的长期稳定性问题，今日关闭。但新报告 #83512（P1）说明部分场景可能仍有残留，社区对该问题保持高度警觉。 |
| [#66824] cronjob `repeat='forever'` 报类型错误 | 7 | P2 Bug | 简单类型错误，已开放 24 天未修复，用户可能对修复优先级产生疑问。 |
| [#69451] Desktop 自定义端点忽略 active profile | 5 | P2 Bug | 多配置文件用户的真实工作流痛点：Desktop 端五个 Custom Endpoint 助手均未携带 `profile` 字段。 |
| [#63395] Matrix 加密房间 cron 投递后日志刷屏并断开 | 5 | P3 Bug | Matrix/E2EE 生命周期与 cron 投递的兼容性问题，相关用户多为企业/去中心化部署，影响面虽窄但体验破坏性强。 |

## 5. Bug 与稳定性

### P1（严重）

| Issue | 描述 | Fix PR 状态 |
|---|---|---|
| [#83445] Kanban 空数据库（0.17.0 回归） | `~/.hermes/kanban.db` 存在但 `boards` 表未创建，UI 无看板，重启不恢复 | 暂无 PR |
| [#79434] `uv sync --locked` 每日失败 | 锁文件因相对 `exclude-newer` + 多个无日期包固定而失效，阻断 Tier 0 安装与自动更新 | 暂无 PR |
| [#83512] SessionDB 每 agent 线程泄漏一个只读连接 | 与 #75269 同族，标记 duplicate；EMFILE 在 ~40h 后击穿 FD 上限 | 相关修复见 #83542 |
| [#75269] SessionDB WAL 读者泄漏（已关闭） | 长生命周期 SessionDB 保留每个 worker 线程的只读连接，直至耗尽 FD 上限 | 已修复并关闭 |

### P2（中等）

- **[#80560] Windows 桌面加载插件即崩 React #310**（已关闭，修复完成）
- **[#78872] macOS 桌面孤儿 `hermes serve` 进程堆积 → EMFILE**（已关闭，修复完成）
- **[#80898] macOS 重复重启桌面累积孤儿后端**（已有 PR #77297 待合并）
- **[#66824] `cronjob repeat='forever'` 类型错误**（24 天未修复，暂无 PR）
- **[#69304] cron `deliver=origin` 在 api_server 会话中静默失败**（暂无 PR）
- **[#83484] cron 对永久不兼容投递目标无限重试**（暂无 PR）
- **[#83455] `/refine` 拒绝已完成 Desktop 会话**（暂无 PR）
- **[#83213] 后台进程完成通知路由到错误会话**（暂无 PR）
- **[#83006] TUI 粘贴 `0x1A` 误触发 Ctrl+Z，挂起整个进程组**（暂无 PR）
- **[#83017] Desktop HUD 模式无法退出**（暂无 PR）
- **[#83473] Linux/X11 HUD 点击穿透后无法恢复**（暂无 PR）

### P3（较低）

- **[#63395] Matrix 加密房间 cron 投递后 `database pool has been stopped`**（暂无 PR）
- **[#83380] Desktop 产物页时间戳显示 1970 年 1 月 + 图片无法显示**（暂无 PR）
- **[#82816] OpenAI 兼容 provider 上会话自动标题 100% 失败（HTTP 400）**（暂无 PR）
- **[#83482] Linux 桌面关窗泄漏孤儿后端**（重复报告，与 #80898 同类，相关 PR #77297）

集中观察：cron/交付链路和 Desktop HUD 是当前最集中的薄弱领域；EMFILE 系列则从「爆发期」进入「清理期」。

## 6. 功能请求与路线图信号

**新功能 PR（今日活跃）：**

- **[#83553] 运行时页脚增加 `tokens_in`/`tokens_out`/`effort` 字段**（新增）— 在 gateway runtime footer 中提供 opt-in 元数据展示，Feishu 同步获得卡片式页脚，属于 #19922 功能伞的可观测性增强。
- **[#83551] 解释静默自动批准的危险命令**（新增，kilocode 移植）— 安全透明度方向：让用户明确知道命令「为何免提示执行」（会话内批准/永久 allowlist 条目等）。
- **[#82821] / [#82822] / [#82823] 桌面导航三件套**（更新）— 视图切换器、会话上下步进按钮、切换网关时清除项目缓存。同一作者连发，指向 #66894、#53017 等历史用户体验诉求，桌面可用性正在系统性改善。
- **[#80758] hashline-guard 插件：内容寻址补丁锚点**（更新）— 扩大 `pre_tool_call` 补丁保护能力，属插件生态与安全加固方向。
- **[#77915] NeMo Relay 插件初始化**（更新）— 在原生 in-process Relay 运行时中加入显式插件激活，并移除重叠的 bundled 插件，属可观测性/插件基建方向。

**新功能请求：**

- **[#9485] HermesClaw — CRM 前端**（4/14 提出，2 条评论）— 用户希望在 Hermes 之上构建销售 pipeline 可视化界面，与 Camoufox、WhatsApp/LinkedIn 渠道能力结合。体量较大，短期进入迭代的可能性低，但代表社区对上层应用生态的探索意愿。

**路线图信号**：结合 kilocode 移植 PR（#83549、#83551）、桌面 UX 三连发（#82821-#82823）和运行时页脚扩展（#83553），下一版本的主题可能是「**桌面体验 + 可观测性 + 安全透明度**」。

## 7. 用户反馈摘要

- **EMFILE 是跨场景普遍痛点**：用户从 macOS Desktop（#78872、#80898）、Linux 桌面关窗（#83482）、Gateway 线程池（#83512）、后台 worker（#75269）等多个路径报告同一类问题，现象高度一致（`OSError: [Errno 24] Too many open files`），且多份报告自带根因分析，贡献者专业度较高。
- **Windows 桌面端稳定性曾让用户受挫**：#80560（装插件即崩）与 #79428（开第二窗口 3.5 分钟后崩溃）均为 React #310，现已双双关闭，用户正等待 release 验证。
- **cron 是高频功能，交付可靠性受关注**：#66824（repeat 参数类型错）、#69304（deliver=origin 静默失败）、#83484（无限重试）、#63395（Matrix 投递后断开）叠加成一条「定时任务交付链」的用户抱怨带。
- **存在中文用户社区**：#83380 以中文详细报告了产物页时间戳与图片渲染问题，说明项目拥有中文用户基础，但该问题目前仅 2 条评论，响应度一般。
- **响应速度观察**：可见样本中 P1/P2 高优 bug 平均约 8 天关闭（#75269 为 12 天、#78872 为 7 天、#80560 为 5 天），但 #66824 这类简单 P2 已搁置 24 天，用户可能对优先级排序产生困惑。
- **贡献者生态呈良性循环**：多位普通用户直接提交修复 PR（#83538、#83542、#83550），并主动移植 kilocode 等外部项目修复，说明社区已形成「发现问题 → 提交修复 → 审查合入」的正向协作链路。

## 8. 待处理积压

| Issue | 提出时间 | 搁置时长 | 重要性 |
|---|---|---|---|
| [#5908] kimi-coding credential pool `base_url` 不重新解析 | 2026-04-07 | ~126 天 | P2，2👍；影响老配置/旧版本升级用户 |
| [#9485] HermesClaw — CRM 前端功能请求 | 2026-04-14 | ~119 天 | 无维护者回应，社区上层应用需求待评估 |
| [#63395] Matrix E2EE cron 投递后数据库池停止 | 2026-07-12 | ~30 天 | P3，但直接破坏实际投递体验 |
| [#66824] `cronjob repeat='forever'` 类型错误 | 2026-07-18 | ~24 天 | 简单类型错误，修复成本低，搁置偏久 |
| [#69451] Desktop 自定义端点忽略 active profile | 2026-07-22 | ~20 天 | 影响多配置文件工作流 |
| [#69304] cron `deliver=origin` 在 api_server 会话中静默失败 | 2026-07-22 | ~20 天 | 影响 API 驱动的自动化场景 |

**维护者关注建议**：god-file 重构各子任务（#78640、#78641、#78642、#78643 等）目前均停留在 `P3/needs-decision` 状态，若决策流程过长，可能影响已投入重构贡献者的积极性，建议明确排期与决策时点。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 · 2026-08-11

## 1. 今日速览

过去 24 小时项目保持较活跃的整合节奏：4 条 Issue 更新、9 条 PR 更新，无新版本发布（当前仍停留在 v0.3.1）。维护者集中关闭/合并了 7 条 PR，覆盖**远程执行安全加固**（#3297）、**Telegram 原生表格渲染**（#3327）和**模型级 `max_tokens` 配置**（#2132）等实质性进展。与此同时，2 条针对高影响 Bug 的修复 PR（#3312、#3314）仍处于待 review 状态，且被标记为 `[stale]`，需要维护者尽快跟进。Issue 侧出现多 agent 路由与会话管理方面的反馈，反映高级部署场景的稳定性仍需打磨。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭了 7 条 PR，按主题归类如下：

- **安全基线显著提升** — PR #3297（[链接](https://github.com/sipeed/picoclaw/pull/3297)）：加固远程提示词与命令执行边界，将远程发送者/聊天元数据放入规范化用户角色信封（不再混入 provider system instructions）；远程执行默认禁用，启用后需逐次独立批准，执行时再次强制来源策略；同时将配置迁移至 schema v4。这是一次主动的安全收敛，但对自托管用户可能属于**破坏性变更**，升级时需关注配置迁移说明。
- **Telegram 渠道体验升级** — PR #3327（[链接](https://github.com/sipeed/picoclaw/pull/3327)）：识别 GFM 表格及非代码块内的 HTML `<table>`，改用 Bot API 原生富消息发送/编辑，替代原先的等宽代码块渲染。Telegram 用户阅读表格数据的体验将有明显改善。
- **配置系统增强** — PR #2132（[链接](https://github.com/sipeed/picoclaw/pull/2132)）：修复 `gateway.go` 用 provider 技术 `modelID` 覆盖 `Defaults.ModelName` 导致 `GetModelConfig()` 失效的问题，并支持对单个模型配置独立 `max_tokens`。该 PR 从 3 月 28 日创建到今日关闭，耗时约 4.5 个月，属于长期打磨的配置完整性修复。
- **稳定性与基建修复** — PR #3295（[链接](https://github.com/sipeed/picoclaw/pull/3295)）修复 `SplitMessage` 在超大围栏头（fenced-code info string）下卡死的问题，补充回归测试；PR #3326（[链接](https://github.com/sipeed/picoclaw/pull/3326)）移除 `web/frontend/pnpm-lock.yaml` 中重复的 `semver` 映射条目，解除 `pnpm install --frozen-lockfile` 的 `ERR_PNPM_BROKEN_LOCKFILE` 错误。
- **本地化与历史清理** — PR #3296（[链接](https://github.com/sipeed/picoclaw/pull/3296)）补全捷克语代码换行标签；PR #1547（[链接](https://github.com/sipeed/picoclaw/pull/1547)）被关闭，该 PR 原本意图汇总合并 #1466、#1465 的修复，最终以关闭收尾，具体修复去向需维护者进一步说明。

整体来看，项目在**安全、配置灵活性、渠道消息体验**三个方向各前进了一步，同时清理了一批历史积压 PR。

## 4. 社区热点

- **Issue #3301**（[链接](https://github.com/sipeed/picoclaw/issues/3301)，3 条评论）—「/clear 与会话自动压缩在经 dispatch rules 路由到非默认 agent 时不生效」。讨论围绕多 agent 路由场景下的会话管理失效展开，用户 j-v 在 Raspberry Pi + DeepSeek + Telegram/Discord 环境下复现。可见 dispatch rules 虽已落地，但与既有会话命令的联动仍存在盲区。
- **Issue #3298**（[链接](https://github.com/sipeed/picoclaw/issues/3298)，2 条评论）— 第三方 AI Router 服务维护者提议增加官方 provider preset，并声明愿意代为贡献。已关闭，说明维护者对此类特定服务商预设持审慎态度；而社区对「开箱即用集成更多路由服务」确实存在诉求。
- **Issue #3294**（[链接](https://github.com/sipeed/picoclaw/issues/3294)，2 条评论）— 用户 2suige-coder 指出 `/list models` 只显示当前模型，与命令描述「Configured models」不符。该反馈反映聊天命令的输出透明度问题，已关闭但值得在后续 UX 改进中吸收。
- **Issue #3311**（[链接](https://github.com/sipeed/picoclaw/issues/3311)，1 条评论）— 工具以相同错误反复失败时，agent 静默循环至 `max_tool_iterations`，用户在 Telegram 上长时间等不到任何回复。虽然评论数不多，但影响严重，且与待合并 PR #3312 直接关联，属于高关注度 Bug。

## 5. Bug 与稳定性

按严重程度排列：

- **严重 — 工具失败静默循环，用户得不到任何答复**（Issue #3311，[链接](https://github.com/sipeed/picoclaw/issues/3311)）：生产环境 Telegram 中，`git` 命令因缺少凭据反复失败，agent 不断重试直至 `max_tool_iterations`，用户数分钟无响应。该问题可能导致 token 消耗与信任受损。**已有对应修复 PR #3312**（[链接](https://github.com/sipeed/picoclaw/pull/3312)，待合并）。
- **较严重 — 多 agent 路由下会话管理功能失效**（Issue #3301，[链接](https://github.com/sipeed/picoclaw/issues/3301)）：`/clear` 与 auto-compression 在非默认 agent 的路由聊天中不工作。目前**无对应修复 PR**，需要维护者确认是否涉及调度层与会话状态的耦合设计。
- **中等 — SplitMessage 遇超大围栏头挂起**（PR #3295，[链接](https://github.com/sipeed/picoclaw/pull/3295)）：问题已被合并的修复 PR 解决，增加了有界回退分割逻辑和回归测试。
- **较低 — web 前端 lockfile 损坏**（PR #3326，[链接](https://github.com/sipeed/picoclaw/pull/3326)）：重复映射条目导致 `pnpm install --frozen-lockfile` 失败，已随 PR 修复。

## 6. 功能请求与路线图信号

- **模型级 `max_tokens` 已落地**（PR #2132，[链接](https://github.com/sipeed/picoclaw/pull/2132)）：多模型部署用户将能更精细地控制各模型的输出长度与成本，预计随下个版本 Release。
- **Telegram 原生富表格已落地**（PR #3327，[链接](https://github.com/sipeed/picoclaw/pull/3327)）：对依赖 Telegram 阅读结构化数据的用户是直接利好。
- **AI Router 官方预设被关闭**（Issue #3298，[链接](https://github.com/sipeed/picoclaw/issues/3298)）：虽然通用 `openai` provider 已允许通过 `api_base` 接入，但该请求的关闭意味着项目暂时不倾向为单一服务商提供官方 preset。若社区对第三方路由商预设的需求持续升温，未来或许会转向更通用的「自定义 provider 模板」机制。
- **`/list models` 行为分歧**（Issue #3294，[链接](https://github.com/sipeed/picoclaw/issues/3294)）：用户期望命令列出所有已配置模型，而非仅当前模型。这是一个低成本 UX 改进点，可能被纳入后续命令交互优化。

## 7. 用户反馈摘要

- **工具执行权限的「安全 vs. 可用」矛盾**：用户 j-v 在 PR #3314（[链接](https://github.com/sipeed/picoclaw/pull/3314)）中反馈，`git push` 已加入 `customAllowPatterns` 仍无法执行，原因是默认 deny 模式始终优先——「根据测试它本应能用」。同时 lucapette 在 #3311 中遇到的卡死也涉及 shell 安全拦截导致的循环。两个独立用户都撞上工具执行边界，提示该处默认策略与可配置性的权衡需要重新审视。
- **多 agent 部署的会话一致性痛点**：Issue #3301（[链接](https://github.com/sipeed/picoclaw/issues/3301)）来自同时使用 Discord/Telegram、通过 dispatch rules 管理多个 agent 的用户。其核心诉求是：无论聊天被路由到哪个 agent，基础会话指令（`/clear`、自动压缩）都应可靠工作。
- **命令输出与直觉不符**：2suige-coder 在 #3294（[链接](https://github.com/sipeed/picoclaw/issues/3294)）中表达了困惑：名为 `/list models` 但只显示当前模型，「我原以为它会列出所有配置的模型」。这类命名与行为不一致会直接影响用户对系统的掌控感。

## 8. 待处理积压

以下条目均已存在一段时间且带有 `[stale]` 标记，提醒维护者优先处理：

| 项目 | 类型 | 创建时间 | 状态 | 说明 |
|---|---|---|---|---|
| [#3311](https://github.com/sipeed/picoclaw/issues/3311) | Issue/Bug | 2026-08-02 | OPEN / stale | 工具重复失败静默循环，users 无响应；已有 PR #3312 待 review |
| [#3312](https://github.com/sipeed/picoclaw/pull/3312) | PR/Fix | 2026-08-02 | OPEN / stale | 提前终止重复工具失败循环，对应 #3311 |
| [#3314](https://github.com/sipeed/picoclaw/pull/3314) | PR/Fix | 2026-08-03 | OPEN / stale | 修复 `customAllowPatterns` 被默认 deny 规则覆盖的问题 |
| [#3301](https://github.com/sipeed/picoclaw/issues/3301) | Issue/Bug | 2026-07-29 | OPEN / stale | 多 agent 路由下 `/clear` 与自动压缩失效，无关联修复 PR |

**特别提醒**：#3312 与 #3314 均为已具备修复逻辑的 PR，但已被 stale bot 标记，若长时间不 review 存在被自动关闭的风险。这两条分别对应 #3311 和工具权限配置失效两个用户可感知的严重问题，建议维护者在本周内完成 review 与合并决策。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-08-11

## 今日速览

过去 24 小时 NanoClaw 保持高活跃度：3 条新增/活跃 Issue，20 条 PR 更新，其中 10 条已合并/关闭、10 条待合并，合并率 50%。合并内容以重构、文档与稳定性修复为主，核心特性（远程 HTTP MCP、Agent Plugins）仍在开放分支推进。值得注意的是，两位贡献者（[#3225](https://github.com/nanocoai/nanoclaw/pull/3225) 与 [#3229](https://github.com/nanocoai/nanoclaw/pull/3229)）几乎同时提交了 Telegram 配对码安全修复，表明社区对同一问题形成了共识。整体看，项目处于高频率迭代期，但全新功能落地节奏较稳，问题响应速度参差——新 Bug 已迅速出现对应修复 PR，而长期开放的核心 PR 仍待推动。

## 版本发布

本期无新版本发布。

## 项目进展

过去 24 小时合并/关闭 10 条 PR，以重构、文档与稳定性修复为主，为后续大型特性落地做了架构准备：

**修复类**

- [#3228](https://github.com/nanocoai/nanoclaw/pull/3228) `fix: deduplicate turn-scoped chat delivery` – 修复单轮对话内消息重复投递问题
- [#3215](https://github.com/nanocoai/nanoclaw/pull/3215) `fix(permissions): redact DM resolution logs` – 脱敏私信解析日志中的敏感信息
- [#3219](https://github.com/nanocoai/nanoclaw/pull/3219) Telegram 与容器环境相关调整（PR 描述信息有限）

**功能类**

- [#3222](https://github.com/nanocoai/nanoclaw/pull/3222) `feat(permissions): add opt-in privacy-safe DM logs` – 新增可选的隐私安全 DM 日志，默认保持原有详细日志行为

**重构类**

- [#3186](https://github.com/nanocoai/nanoclaw/pull/3186) `refactor: add host seams for skill-owned capabilities` – 为技能能力在宿主侧注入提供缝点
- [#3213](https://github.com/nanocoai/nanoclaw/pull/3213) `refactor(channels): register question renderers`
- [#3214](https://github.com/nanocoai/nanoclaw/pull/3214) `refactor(host): unify module lifecycle hooks`
- [#3212](https://github.com/nanocoai/nanoclaw/pull/3212) `refactor(db): add module migration registry`

**文档类**

- [#3216](https://github.com/nanocoai/nanoclaw/pull/3216) `docs(hardened-image): note that install_packages covers apt and npm only`
- [#3211](https://github.com/nanocoai/nanoclaw/pull/3211) `docs(skills): define single-responsibility integration rule`

整体判断：今日合并内容以代码内聚性和可维护性提升为主，方向是收敛模块边界、统一生命周期与迁移机制，同时开始重视隐私日志与消息去重等可靠性问题。

## 社区热点

- [#3075 Silent log loss + inbound message duplicate-insert errors after long uptime; no systemd unit installed](https://github.com/nanocoai/nanoclaw/issues/3075) 是今日唯一带有评论的 Issue（1 条）。该 Issue 创建于 2026-07-17，今天再次更新，说明长期可靠性问题仍在被社区关注，但尚未进入修复流程。
- **Telegram 配对码安全成为社区焦点**：chiptoe-svg 提交 [#3229（CSPRNG 替换 `Math.random()`）](https://github.com/nanocoai/nanoclaw/pull/3229)，dweekly 提交 [#3225（配对码 CSPRNG + 文件权限加固）](https://github.com/nanocoai/nanoclaw/pull/3225)。两个 PR 解决同一安全问题、范围互补，是典型的社区自发协作信号，但也需要维护者协调合并策略。
- **dweekly 单日完成报 Bug 到提修复**：先提交 Issue [#3226 入站消息因平台 ID 重用被静默丢弃](https://github.com/nanocoai/nanoclaw/issues/3226)，随即提交修复 PR [#3224](https://github.com/nanocoai/nanoclaw/pull/3224)，响应效率高。

## Bug 与稳定性

按严重程度排列：

1. **入站消息静默丢弃（高）** – [#3226](https://github.com/nanocoai/nanoclaw/issues/3226)：平台在会话中重用消息 ID 时，入站消息因主键冲突被记录后直接丢弃，用户侧表现为「agent 无视了我」。已有作者提交修复 PR [#3224](https://github.com/nanocoai/nanoclaw/pull/3224)，待 review。
2. **计划任务失败错误被静默丢弃（高）** – [#3223](https://github.com/nanocoai/nanoclaw/issues/3223)：计划任务触发的 agent turn 出错时，错误消息因任务消息本身不携带路由字段而无法投递，操作者永远不知道任务失败。暂无对应修复 PR。
3. **Telegram 配对码可预测 + 存储权限过宽（高/安全）** – [#3229](https://github.com/nanocoai/nanoclaw/pull/3229) / [#3225](https://github.com/nanocoai/nanoclaw/pull/3225)：使用 `Math.random()` 生成配对码，且配对码目录/存储文件权限未收紧。两个修复 PR 待协调合并。
4. **长期运行后日志静默丢失 + 入站重复插入错误（中）** – [#3075](https://github.com/nanocoai/nanoclaw/issues/3075)：WSL2 + Docker Desktop + Matrix 环境中长时间运行后出现。同时报告了缺少 systemd unit 的部署问题。暂无修复 PR。
5. **对话消息重复投递（中）** – [#3228](https://github.com/nanocoai/nanoclaw/pull/3228)：已合并修复。

## 功能请求与路线图信号

本期未收到明确的新功能请求 Issue，但以下 PR 与 Issue 揭示了项目方向：

- **远程 Streamable HTTP MCP 服务器**：核心团队 PR [#3092](https://github.com/nanocoai/nanoclaw/pull/3092)（引擎 + Claude provider）与 [#3221](https://github.com/nanocoai/nanoclaw/pull/3221)（codex/opencode provider）正在推进，支持 `{ type: 'http', url }` 形式的 MCP 配置。这是当前最明确的路线图功能。
- **Agent 模板升级为 Agent Plugins 1.0.0**：[#3220](https://github.com/nanocoai/nanoclaw/pull/3220) 为格式迁移 + 安全加固（破坏性变更），[#2909](https://github.com/nanocoai/nanoclaw/pull/2909) 为 setup 向导与首个 agent stamping 流程。若进入下一版本，需要发布升级迁移指南。
- **CLI 支持 bounded JSON stdin**：[#3218](https://github.com/nanocoai/nanoclaw/pull/3218)（zvi-fried）为 `ncl` 增加 `--stdin-json` 输入模式，属于开发体验类功能，方向明确。
- **计划任务失败通知机制（信号）**：Issue [#3223](https://github.com/nanocoai/nanoclaw/issues/3223) 揭示的错误不可达问题，可能推动开发团队设计任务级错误通知/路由机制。
- **部署友好性（信号）**：Issue [#3075](https://github.com/nanocoai/nanoclaw/issues/3075) 提到缺少 systemd unit，隐含对托管部署支持的需求。

## 用户反馈摘要

- **#3075 作者（libellebilai-collab）** 报告了两个独立问题：长时间运行后静默日志丢失、入站消息重复插入错误，并指出项目未提供 systemd unit，导致在 WSL2/Windows 环境下难以将 NanoClaw 作为托管服务运行。反映用户对部署运维标配支持有明确期待。
- **#3226 作者（dweekly）** 观察到「从用户侧看，这与 agent 无视了我无法区分」——平台复用消息 ID 导致的静默丢弃，直接损害用户对 agent 可靠性的信任。
- **#3223 作者（chiptoe-svg）** 指出错误消息由于「任务消息不携带路由字段」的设计而无处可达，操作者永远不会知道任务失败。这提示计划任务功能的错误上报链路需要重新设计。

## 待处理积压

**长期未合并的核心 PR：**

- [#2909](https://github.com/nanocoai/nanoclaw/pull/2909)（2026-07-02 创建，约 6 周）：setup 向导中的模板流程与 first-agent stamping
- [#3092](https://github.com/nanocoai/nanoclaw/pull/3092)（2026-07-19 创建，约 3 周）：远程 Streamable HTTP MCP 服务器支持
- [#3193](https://github.com/nanocoai/nanoclaw/pull/3193)（2026-08-06 创建）：Telegram Chat SDK 更新以支持富消息，待 review

**新提交待 review 的 PR：**

[#3227](https://github.com/nanocoai/nanoclaw/pull/3227)、[#3224](https://github.com/nanocoai/nanoclaw/pull/3224)、[#3225](https://github.com/nanocoai/nanoclaw/pull/3225)、[#3229](https://github.com/nanocoai/nanoclaw/pull/3229)、[#3218](https://github.com/nanocoai/nanoclaw/pull/3218)、[#3221](https://github.com/nanocoai/nanoclaw/pull/3221)

**维护者提醒：**

- **重叠 PR**：#3225 与 [#3229](https://github.com/nanocoai/nanoclaw/pull/3229) 均修复 Telegram 配对码安全问题，建议维护者协调后合并统一，避免重复修改或冲突。
- **长期 Issue**：[#3075](https://github.com/nanocoai/nanoclaw/issues/3075) 已开放约 4 周，今日再次更新但仍无 fix 安排，建议排期推进。
- **质量观察**：[#3219](https://github.com/nanocoai/nanoclaw/pull/3219) 已合并，但其 PR 描述未勾选任何 Type of Change 且标题信息有限，建议后续在 CI 中强制校验 PR 模板填写完整性。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

### 1. 今日速览

过去 24 小时 NullClaw 项目的活跃度处于**平稳偏低**水平：无新版本发布、无新开 Issue / PR，但发生了 1 条历史 Issue 的关闭（#700），另有 1 条依赖升级 PR（#956）等待合入。整体来看，项目仍在正常维护节奏中，没有出现紧急故障或高强度社区讨论，核心信号是 **A2A 客户端能力需求获得阶段性收尾**，以及 **Docker 依赖更新等待处理**。

---

### 2. 版本发布

今日无新版本发布。

---

### 3. 项目进展

今日**无 PR 被合并或关闭**。

值得关注的是功能请求 Issue #700（Add a2a_call client tool for calling remote agents）被标记为 **CLOSED**。该 Issue 提出为 nullclaw 增加 A2A 协议（v0.3.0）的客户端侧实现 `a2a_call`，使 Agent 能够向远程 Agent 发送 `message/send` JSON-RPC 请求。作者 georgeglarson 已自行构建了该工具，结合 Issue 状态变更（最后更新于 2026-08-10），判断该需求已得到解决或明确回应，但这**不代表对应实现的 PR 已在今日合入**——目前仓库中并未观察到相关 PR 的合并记录。整体项目进展以需求梳理和依赖维护为主。

---

### 4. 社区热点

**今日唯一且最具讨论度的条目为 Issue #700：**

- **标题**：Add a2a_call client tool for calling remote agents
- **链接**：https://github.com/nullclaw/nullclaw/issues/700
- **作者**：georgeglarson
- **评论**：1 条　**👍**：1 个
- **状态**：已关闭（最后更新 2026-08-10）

该 Issue 所反映的诉求非常具体：作者同时运行**两个 nullclaw 实例**——一个公网 facing 的 “doorman” 和一个私有个人 agent，需要 nullclaw 具备 A2A 客户端能力，才能实现跨实例的 Agent 互相调用。这显示出用户对 **A2A 多实例部署与互操作性**的需求正在显现，而 nullclaw 目前“只服务端、不客户端”的定位是体验上的明显缺口。虽然评论量和反应数不大，但这是在当前数据集范围内**社区交互最集中**的一处热点。

---

### 5. Bug 与稳定性

今日**无新增 Bug、崩溃或回归问题报告**。

从已有数据来看，项目当前稳定性状态良好，未出现需要紧急修复的缺陷或安全事件。

---

### 6. 功能请求与路线图信号

今日唯一的功能信号来自 **Issue #700**，提出为 nullclaw 增加 A2A 协议客户端侧实现 `a2a_call`。

这一需求释放了明确的路线图信号：

- **方向**：从“A2A 服务端支持”走向“A2A 客户端支持”，使 nullclaw Agent 具备主动调用其他 Agent 的能力。
- **与现有生态的关系**：nullclaw 已支持 A2A v0.3.0 服务端；补齐客户端能力后，项目有望成为 **A2A 全栈 Agent 节点**。
- **可能纳入版本**：若该功能被接受并完成代码合入，将极大支撑下一版本的“Agent 间互联互通”能力，建议维护团队在后续发布中补充相应 API 文档和使用示例。

**链接**：https://github.com/nullclaw/nullclaw/issues/700

---

### 7. 用户反馈摘要

来自 Issue #700 作者 georgeglarson 的反馈，是今日唯一可提取的用户声音：

> “nullclaw serves the A2A protocol (v0.3.0) but has no client-side implementation.”

- **使用场景**：一个公网 doorman 实例 + 一个私有个人 agent 实例的组合部署。
- **核心痛点**：Agent 之间无法直接通过 A2A 协议互相调用，用户被迫依赖外部桥接方案。
- **满意点**：对 nullclaw 已有的 A2A v0.3.0 服务端能力是认可的。
- **不满意点**：缺少客户端侧能力，导致“自己无法调用自己”的体验断层。

整体用户反馈指向：**多 Agent 协作和跨实例通信是真实且高频的需求**，nullclaw 在这一方向的完整闭环仍有提升空间。

---

### 8. 待处理积压

**PR #956（待合并）：**

- **标题**：`[dependencies, docker] ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group`
- **链接**：https://github.com/nullclaw/nullclaw/pull/956
- **作者**：dependabot[bot]
- **创建时间**：2026-06-15
- **最后更新**：2026-08-10
- **状态**：OPEN

该 PR 为 Docker 基础镜像的常规依赖升级（Alpine 3.23 → 3.24），属于安全与构建环境维护类更新。自创建以来已近 **2 个月**仍未合入，虽非紧急功能，但长期积压可能带来 Alpine 3.23 停止维护的风险，或与后续 CI 产生兼容性问题。建议维护者确认 CI 状态后尽快处理。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-11

## 1. 今日速览

过去 24 小时 IronClaw 项目保持高活跃度：50 条 Issue 更新（26 条新开/活跃，24 条关闭）与 50 条 PR 更新（33 条待合并，17 条已合并/关闭），并有 1 个候选补丁版本 v1.1.1-rc.1 发布。核心工作集中在 Reborn 架构深化（持久存储配置无关化、架构治理审计修复）与渠道/QA 稳定性收敛，大量修复性 PR 已进入审查或合并阶段。与此同时，社区反馈的 PDF 附件、Slack 认证等问题仍在跟踪中，整体项目健康度良好，但架构债务和部分遗留 Bug 仍需持续关注。

## 2. 版本发布

### ironclaw-v1.1.1-rc.1（2026-08-10）

🔗 [Release v1.1.1-rc.1](https://github.com/nearai/ironclaw/releases)

1.1 线的紧急补丁候选版本，集中解决渠道交付与配对、IronHub/自定义 MCP 兼容性、WebUI 流式稳定性、持久检索及安全升级路径问题。

**主要更新内容：**
- **渠道交付与配对**：修复多个渠道（如 Slack、Telegram）在配对与消息投递链路上的缺陷。
- **IronHub / 自定义 MCP 兼容性**：提升对自定义 MCP 服务器及 IronHub 配套文件的兼容支持。
- **WebUI 流式稳定性**：改善流式输出场景下的连接稳定性。
- **持久检索**：增强 durable retrieval 的可靠性。
- **升级安全**：明确并修复从两个受支持的稳定前序版本升级的路径。

**⚠️ 迁移注意事项（从 1.0.0 升级）：**
- **必须停止所有写入者**（Stop all writers）后再执行升级，以避免升级期间的数据写入冲突或状态不一致。
- 建议在维护窗口内完成升级操作，并提前备份持久化数据。

## 3. 项目进展

今日合并/关闭的关键 PR 主要围绕消息循环去重与渠道体验优化，多项大规模架构/功能 PR 正处于审查或待合并状态。

### ✅ 已合并/关闭

| PR | 内容 | 影响 |
|---|---|---|
| [#7336 fix(loop-host): dedup consumed steering replays](https://github.com/nearai/ironclaw/pull/7336) | 为已消费的 steering 消息保留有界持久身份窗口，对延迟重放进行去重，防止重复模型迭代和重复回复 | 直接修复了消息循环中因重放导致的重复输出问题，提升 loop-host 稳定性 |
| [#7446 feat(channels): rich working indicator](https://github.com/nearai/ironclaw/pull/7446) | Slack/Telegram 渠道的"工作中"状态改为轮换提示文案（"On it!"/"Digging in…"），并新增 reactions、失败状态、进度提醒 | 明显改善渠道侧用户对 agent 运行状态的感知体验 |

### 📌 重要待合并 PR（信号）

- [#7456 fix(reborn): make durable storage profile-agnostic](https://github.com/nearai/ironclaw/pull/7456) — Reborn 存储根目录改为 profile-agnostic 布局，并增加类型化安全封套，解决配置切换导致数据"消失"的严重问题。
- [#7474 fix(qa): stop the agent asserting unverified state](https://github.com/nearai/ironclaw/pull/7474) — 一键修复三个 Railway-QA"agent 断言未验证状态"的 Bug，每个修复均带确定性复现。
- [#7464 feat(telegram): linked-device](https://github.com/nearai/ironclaw/pull/7464) — 实现 Telegram 链接设备认证、会话托管与标准操作工具。

整体来看，Reborn 架构重构正从"文件搬移"阶段进入"存储模型、并发控制、安全语义"等深水区，多个大型 PR 集中在同一时段提交，说明重构已进入攻坚与验证阶段。

## 4. 社区热点

### 🔥 最热 Issue

**[#7137 [enhancement] live-canary: shard artifacts are 700MB-1.5GB; exclude regenerable/intermediate paths from upload](https://github.com/nearai/ironclaw/issues/7137)**
- 评论数：12 条（全场最高）
- 创建：2026-08-04 | 更新：2026-08-10
- 作者：serrrfirat

**诉求分析：**
live-canary 工作流的 QA 分片产物单包体积高达 700MB–1.5GB，累计 13 个 bundle 超过 5GB，拖慢下载速度并大量消耗 GitHub Actions 存储配额（仅留存 14 天），同时让故障排查变得困难。社区对 **CI 产物瘦身** 的呼声集中且具体。目前已有关联 PR [#7466 Trim live-QA shard artifacts](https://github.com/nearai/ironclaw/pull/7466) 提交修复，方向是排除可再生/中间产物、保留排障输出，预计很快进入合并流程。

### 💬 其他活跃讨论

- [#7145 WS2: finish the extension_host → loops re-layer](https://github.com/nearai/ironclaw/issues/7145)（4 评论）— 架构分层重构执行中发现的规模度量问题，讨论已闭环并关闭。
- [#6257 PDF MIME 类型错误](https://github.com/nearai/ironclaw/issues/6257)（3 评论）— 用户可直接复现的附件功能故障，社区关注度高，但尚无 fix PR 关联。

## 5. Bug 与稳定性

### 高严重度

**[#6257 "Invalid value (attachments.mime_type)" error when sending/generating PDF files](https://github.com/nearai/ironclaw/issues/6257)**
- 创建：2026-07-19 | 状态：开放
- 影响：发送/生成 PDF 附件时直接报错，用户无法使用相关功能
- 修复 PR：无

**[#5882 Repeated Slack reconnect attempts leave authentication flow in broken state](https://github.com/nearai/ironclaw/issues/5882)**
- 创建：2026-07-09 | 状态：已关闭
- 影响：多次重连 Slack 后认证流程彻底卡死，浏览器回调报 "Authorization failed"，唯一恢复方式是重装扩展
- 备注：已关闭，**但需确认修复在哪个版本落地**，建议在 v1.1.1 发布说明中明确标注

### 中严重度

**[#7473 post_notice → release_connect_nudge collapses "delivered with no vendor ref" into "not delivered"](https://github.com/nearai/ironclaw/issues/7473)**
- 创建：2026-08-10 | 状态：开放
- 影响：Web Push/Slack 等"已投递但无供应商引用"的消息会被误判为未投递，导致用户收到重复"请连接"提醒
- 修复 PR：**[#7475 fix(product): stop releasing the connect-nudge throttle on ref-less delivery](https://github.com/nearai/ironclaw/pull/7475)**（已提交，待合并）

**[#7447 Agent fails to complete task after calling too many tools](https://github.com/nearai/ironclaw/issues/7447)**
- 创建：2026-08-10 | 状态：开放
- 影响：agent 在冗余 fetch-retry 循环中烧光工具调用预算，典型失败场景是 4 轮近重复的 GitHub 查询，而非使用 `result_read` 分页
- 修复 PR：无

### 架构治理类（低用户影响、高长期价值）

- [#7149 同层耦合无默认守卫，68 条现存边 + ~550 条合法新组合在约束外](https://github.com/nearai/ironclaw/issues/7149)
- [#7150 D-E 厂商约束缺少 pin，承诺的 vendor-name 普查不存在](https://github.com/nearai/ironclaw/issues/7150)
- [#7151 composition 质量门基于份额，功能流入使分母失效](https://github.com/nearai/ironclaw/issues/7151)

这三个 Issue 均为 2026-08-04 架构审计发现，已在今日关闭，说明相关修复或文档修正已落地，但架构约束的真正"机械执行"仍需后续 PR 加强。

## 6. 功能请求与路线图信号

### v1.3.0 信号

**[#3762 Editing AGENTS.md in the web UI does not update the system prompt](https://github.com/nearai/ironclaw/issues/3762)**
- 标签：suggested_P1, customer, v1.3.0
- 开放 85 天，更新于 2026-08-10，仍被关注
- 开发者体验关键痛点：编辑身份文件不热更新系统提示词，导致"保存成功但无效"的割裂感
- 建议：纳入 v1.3.0 规划并明确修复方案

**[#7038 Epic: Storybook + an AI-first Design System](https://github.com/nearai/ironclaw/issues/7038)**
- 已有完整提案包（PR #7257），并基于目标 crate-architecture docs（PR #6918）
- 设计系统 + Storybook 组件库，覆盖 theming、assets、interactions、IA
- 路线图意义：为 WebUI 的长期 UX 一致性打基础

### v1.4.0 信号

**[#7046 Configure all tools, channels, and extensions from AI chat as an Admin](https://github.com/nearai/ironclaw/issues/7046)**
- 让管理员通过 AI 对话完成全部配置，减少 WebUI 多入口割裂
- 与 #7044（Onboarding to channel-first）配套，构成"用户引导 + 管理效率"双线

### 近期交付信号（v1.1.0 目标）

**[#6941 Epic: skills the model can self-create, find, choose, and use](https://github.com/nearai/ironclaw/issues/6941)**（已关闭，说明相关子任务已分解完毕）

**[#7354 Epic: Extensions vNext — Web Push, Rich Messaging, Telegram User Sessions, Signal](https://github.com/nearai/ironclaw/issues/7354)**
- 目标日期：2026-08-14
- 已有 PR #7464（Telegram linked-device）在审查中，时间线紧凑

### 新功能需求（今日新增）

**[#7467 Epic: Make Reborn durable state profile-agnostic and migrate legacy profile roots](https://github.com/nearai/ironclaw/issues/7467)**
- 由 [#7456 PR](https://github.com/nearai/ironclaw/pull/7456) 支撑，让存储与部署配置解耦
- 影响面：对话历史、加密密钥、扩展、技能、提示词、设置和工作区均可跨 profile 迁移

## 7. 用户反馈摘要

### 明确痛点

- **PDF 附件功能不可用**（[#6257](https://github.com/nearai/ironclaw/issues/6257)）：用户 Michael Kelly（Slack 反馈）尝试发送和生成 PDF 时报 `Invalid value (attachments.mime_type)`，直接阻断工作流。
- **Slack 集成设置失败**（[#6834](https://github.com/nearai/ironclaw/issues/6834)）：near.foundation 账户用户报告连接/认证流程无法完成，扩展进入不可用状态。
- **配置文件切换后数据"消失"**（[#7467](https://github.com/nearai/ironclaw/issues/7467)）：变更部署配置后，已有数据仍留在旧目录，导致部署看起来是空的，用户被迫面对"数据丢失"的心理冲击。

### 体验改进认可

- 渠道"工作中"指示器多样化（[#7446](https://github.com/nearai/ironclaw/pull/7446)）被社区视为提升交互温度的正向改动，评论区反馈积极。

### 功能期望

- 用户期望 AGENTS.md 等身份文件在 WebUI 编辑后即时生效（[#3762](https://github.com/nearai/ironclaw/issues/3762)），反映出对"配置即代码"一致性的高要求。
- 管理员用户期望能通过 AI 对话完成全部配置（[#7046](https://github.com/nearai/ironclaw/issues/7046)），降低多页面跳转成本。

## 8. 待处理积压

### ⏳ 长时间未解决的重要 Issue

| Issue | 创建时间 | 开放天数 | 状态 | 备注 |
|---|---|---|---|---|
| [#3762 AGENTS.md 编辑不更新系统提示词](https://github.com/nearai/ironclaw/issues/3762) | 2026-05-18 | 85 天 | 开放 | 已标 v1.3.0，仍无具体修复 PR |
| [#5101 ci: reuse cargo-component installer in live canary](https://github.com/nearai/ironclaw/pull/5101) | 2026-06-20 | 52 天 | 开放 PR | 优化 CI 安装路径，等待审查 |
| [#6257 PDF MIME 类型错误](https://github.com/nearai/ironclaw/issues/6257) | 2026-07-19 | 23 天 | 开放 | 用户反馈明确，无修复 PR，建议优先处理 |
| [#7137 live-canary 产物过大](https://github.com/nearai/ironclaw/issues/7137) | 2026-08-04 | 7 天 | 开放 | 已有 PR #7466 修复，等待合并 |

### 📌 维护者关注建议

1. **#6257 PDF 附件问题**已开放 23 天且无修复 PR，作为"可稳定复现 + 用户直接受影响"的 Bug，建议分配到具体 owner 并评估是否为 MCP 类型映射缺陷。
2. **#5101** 与 **#7137** 均指向 CI 基础设施优化，已有实现方案但合并节奏偏慢，建议本周内推进，以缓解 GitHub Actions 存储配额压力。
3. **#3762** 作为 v1.3.0 的 P1 客户反馈，长期无实质进展，建议在 v1.3.0 规划中明确技术方案（如：文件监听 + 会话级热更新）。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

## LobsterAI 项目动态日报 — 2026-08-11

### 1. 今日速览

过去 24 小时项目开发节奏非常紧凑：共 34 条 PR 更新，其中 20 条已合并/关闭，14 条仍在待合并状态，提交者以 `fisherdaddy` 为主，集中在 cowork 交互体验优化、OpenClaw 运行时稳定性修复和 Windows 环境兼容性改进三个方向。Issue 侧仅有 1 条更新（存量 #1243 被标记 stale 后关闭），无新 bug 上报，整体项目健康度良好，属于典型的"高产出、低噪音"开发日。无新版本发布。

### 2. 版本发布

今日无新版本 Release。

---

### 3. 项目进展

今日合并/关闭的 20 条 PR 中，功能推进与稳定性修复并重，主要成果集中在以下四方面：

**（1）OpenClaw 网关稳定性显著增强**
- [#2454 fix(openclaw): stop tool-loop guard from killing legitimate polling](https://github.com/netease-youdao/LobsterAI/pull/2454) — 修复工具循环保护机制误杀正常轮询的问题，降低网关误重启风险。
- [#2470 fix(openclaw): surface provider runtime failures on late chat error](https://github.com/netease-youdao/LobsterAI/pull/2470) — 修复延迟聊天错误发生时 provider/LLM 真实运行故障被吞掉的问题，提升错误可观测性。
- [#2466 Fix/renderer init ipc stall retry](https://github.com/netease-youdao/LobsterAI/pull/2466) — 解决渲染进程初始化时 IPC 停滞导致的重试机制失效问题。

**（2）Windows 运行时体验改进**
- [#2467 fix(python-runtime): repair stale pip shims on Windows runtime upgrade](https://github.com/netease-youdao/LobsterAI/pull/2467) — 将 pip shim 模板提取为共享模块，在打包和启动时统一收敛旧 shim，修复 Windows 运行时升级后 pip 失效的问题。

**（3）cowork 交互体验升级（系列 PR）**
- [#2471 feat(cowork): render submitted file attachments as clickable cards](https://github.com/netease-youdao/LobsterAI/pull/2471) — 非图片附件现在以文件卡片形式渲染，替代原先的纯文本路径，视觉与操作一致性提升。
- [#2469 feat(cowork): add collapse-agent-tasks shortcut and allow modifier shortcuts while typing](https://github.com/netease-youdao/LobsterAI/pull/2469) — 新增折叠 agent 任务快捷键，并允许输入时使用修饰键组合。
- [#2468 refactor(cowork): unify streaming loading indicators](https://github.com/netease-youdao/LobsterAI/pull/2468) — 统一流式加载指示器，消减视觉碎片化。

**（4）依赖升级批量落地**
- Dependabot 自动 PR 合入：[#1766 vite 5→8](https://github.com/netease-youdao/LobsterAI/pull/1766)、[#1764 react-dom 18→19](https://github.com/netease-youdao/LobsterAI/pull/1764)、[#1763 @vitejs/plugin-react](https://github.com/netease-youdao/LobsterAI/pull/1763) — 前端核心依赖升级已陆续合并，为后续功能迭代打好底座。

> 另有一条社区贡献 PR [#2452 fix(openclaw): preserve provider for slashed model ids](https://github.com/netease-youdao/LobsterAI/pull/2452) 仍处于待合并状态，修复含 `/` 的模型 ID（如 `deepseek-ai/DeepSeek-V4-Flash`）存储时 provider 前缀丢失的问题，建议尽快 review。

---

### 4. 社区热点

今日社区讨论热度不高，仅有 1 条 Issue 更新：

- [Issue #1243 [BUG] qwen-portal-auth 插件配置循环写入导致网关频繁重启](https://github.com/netease-youdao/LobsterAI/issues/1243) — 创建于 2026-04-01，今日被 stale 流程自动关闭，共 2 条评论，0 👍。

该 Issue 的核心痛点是：`qwen-portal-auth` 插件配置被持续自动变更，导致网关每 5-20 分钟重启一次，且弹出"AI 引擎正在启动网关..."提示。虽然今日被自动关闭，但不代表问题已修复——[#2454](https://github.com/netease-youdao/LobsterAI/pull/2454) 和 [#2470](https://github.com/netease-youdao/LobsterAI/pull/2470) 可能间接缓解了相关重启场景，但尚未有直接针对插件配置循环写入的修复 PR 出现。对于真实用户而言，"配置自动变化"是非常诡异的体验，建议维护者复核 stale 关闭的合理性。

---

### 5. Bug 与稳定性

今日无新报告 Bug，存量 Issue #1243 被关闭。但从合并的 PR 可以看出，项目团队正主动修复以下潜在稳定性问题：

| 严重程度 | 问题描述 | 状态 |
|---|---|---|
| 🔴 高 | 网关频繁重启（#1243 描述，插件配置循环写入） | 无直接 fix PR，已被 stale 关闭 |
| 🟠 中 | OpenClaw 工具循环保护误杀正常轮询 | ✅ 已有 fix：[#2454](https://github.com/netease-youdao/LobsterAI/pull/2454) 已合并 |
| 🟠 中 | 迟到聊天错误吞掉 provider 真实运行故障 | ✅ 已有 fix：[#2470](https://github.com/netease-youdao/LobsterAI/pull/2470) 已合并 |
| 🟡 低 | 渲染进程 IPC 停滞时重试无效 | ✅ 已有 fix：[#2466](https://github.com/netease-youdao/LobsterAI/pull/2466) 已合并 |
| 🟡 低 | Windows 升级后 pip shim 残留导致命令失效 | ✅ 已有 fix：[#2467](https://github.com/netease-youdao/LobsterAI/pull/2467) 已合并 |

整体来看，#1243 描述的重启问题虽未根治，但多个相关稳定性修复已在今日合入，建议关注下一版本的实际表现。

---

### 6. 功能请求与路线图信号

今日无新功能请求 Issue。但从合并的 PR 看，项目在以下方向有明显投入，可能成为下一版本亮点：

- **cowork 文件交互增强**：本地文件链接右键菜单（[#2473 待合并](https://github.com/netease-youdao/LobsterAI/pull/2473)，含打开方式/另存为/复制路径/复制内容/复制图片/在文件夹中显示）、附件卡片化（[#2471](https://github.com/netease-youdao/LobsterAI/pull/2471) 已合并）——表明桌面端文件处理体验是当前迭代重点。
- **快捷键体系补全**：折叠 agent 任务等新增快捷键（[#2469](https://github.com/netease-youdao/LobsterAI/pull/2469) 已合并），暗示产品在向"高效键盘流"方向演进。
- **依赖现代化**：Vite 8、React 19 等大版本升级陆续合入，为后续性能和生态兼容性打基础。

---

### 7. 用户反馈摘要

基于今日唯一条目（#1243）及其评论，可以提炼以下用户声音：

- **"配置会自己变"是最令人困惑的点**：用户使用任意模型（包括非 Qwen 模型）时，`qwen-portal-auth` 插件配置仍会自动变更，说明插件存在横跨不同模型提供商的副作用，而非仅在 Qwen 场景触发。
- **"AI 引擎正在启动网关..."弹窗频繁打断使用**：这种重度打断在 5-20 分钟/次的频率下，基本无法正常工作，用户情绪明显受挫，属于典型的高负面影响体验。

此外，社区贡献者 `ump45nose` 提交的 [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) 针对模型 ID 含 `/` 时 provider 丢失问题，说明部分用户在接入第三方模型服务时遇到了配置持久化的边界情况，这可能是继 Qwen 之后引入自定义/分叉模型时出现的新问题。

---

### 8. 待处理积压

下述事项值得维护者关注：

**Issue 侧：**
- [Issue #1243](https://github.com/netease-youdao/LobsterAI/issues/1243)（网关频繁重启）虽已被 stale 关闭，但并没有看到明确的修复 PR 关联。建议维护者确认该问题在最新构建中是否已消失，否则应重新打开并跟踪。

**PR 侧（14 条待合并）：**

| PR 编号 | 内容 | 等待时长 | 优先级建议 |
|---|---|---|---|
| [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) | fix(openclaw): preserve provider for slashed model ids（社区贡献） | 8 月 7 日创建，已 4 天 | 高 — 社区贡献且修复明确 |
| [#2473](https://github.com/netease-youdao/LobsterAI/pull/2473) | feat(cowork): add right-click context menu for local file links | 今天创建 | 中 — 新功能，可并入下个版本 |
| [#2465](https://github.com/netease-youdao/LobsterAI/pull/2465) | chore(deps-dev): vite 8.2.1 | 今天 | 低 — Dependabot 自动升级 |
| [#2464](https://github.com/netease-youdao/LobsterAI/pull/2464) | chore(deps): react-dom 19.2.8 | 今天 | 低 |
| [#2463](https://github.com/netease-youdao/LobsterAI/pull/2463) | chore(deps-dev): @vitejs/plugin-react 6.0.5 | 今天 | 低 |
| [#2462](https://github.com/netease-youdao/LobsterAI/pull/2462) | chore(deps): mermaid 11.16.1 | 今天 | 低 |
| [#2461](https://github.com/netease-youdao/LobsterAI/pull/2461) | chore(deps-dev): eslint-plugin-react-hooks 7.1.1 | 今天 | 低 |
| [#2460](https://github.com/netease-youdao/LobsterAI/pull/2460) | chore(deps-dev): rimraf 6.1.3 | 今天 | 低 |
| [#2459](https://github.com/netease-youdao/LobsterAI/pull/2459) | chore(deps): @nodesecure/js-x-ray 16.0.0 | 今天 | 低 |

> 说明：Dependabot 类 PR 大量积压在开放状态，可能与项目组的依赖升级策略（如每月集中处理一次）有关，不一定是响应迟缓。但 [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) 作为社区 PR 已等待 4 天，建议优先处理以维护贡献者积极性。

---

**日报总结**：今日是典型的"内部迭代日"——无新功能请求、无新 Issue、无 Release，但通过高密度 PR 合入显著加固了 OpenClaw 运行时稳定性与 cowork 交互细节。项目健康度良好，唯需注意 stale 关闭的 #1243 背后问题是否真正消退，以及对社区 PR [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) 的响应时效。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-08-11

## 1. 今日速览

过去 24 小时 Moltis 项目维持中等活跃度：新增 3 个 Issue（全部为 Bug 报告）与 1 个搁置已久的待合并 PR 获得更新。值得关注的是，本轮 Bug 全部集中在 Apple Container 后端相关功能与构建工具链 `gogcli` 的 URL 配置问题上，表明当前稳定性的主要薄弱环节仍在沙箱后端兼容性和构建依赖管理。PR #531 浏览器交互 UI 自 2026-03-31 发起后至今未合并，项目在用户可见的功能迭代层面已停滞较长时间。整体而言，项目处于"社区发现问题踊跃、维护端合并响应偏慢"的状态。

## 3. 项目进展

- **无已合并/关闭的 PR。** 过去 24 小时没有 PR 被合并或关闭，项目代码主干没有新的可见变更。
- **一处待合并的长期 PR 获得更新：**
  - [Moltis PR #531: feat(browser) - interactive browser viewing UI with CDP screencast](https://github.com/moltis-org/moltis/pull/531)
    - 作者: penso | 创建: 2026-03-31 | 最后更新: 2026-08-10 | 状态: Open
    - 该 PR 为 Settings > Browser 页面添加完整的浏览器查看与交互 UI，支持通过 CDP screencast 实时查看会话、鼠标/键盘/滚动交互、历史会话回放及 action logs，并按 agent 隔离浏览器 profile（cookie isolation）。这是项目在浏览器自动化领域的重要功能扩展，但已搁置超过 4 个月，建议维护者尽快安排 review 或明确其状态。

**整体判断：** 本项目在功能推进上没有新增的合并变动，核心进展集中在社区反馈端；PR #531 的更新（8 月 10 日）说明作者仍在跟进，但合并节奏亟待加速。

## 4. 社区热点

- [Moltis Issue #1185: [Bug] Apple Container 1.x sandbox starts but Moltis treats it as not running](https://github.com/moltis-org/moltis/issues/1185)
  - 作者: mikz | 创建: 2026-08-08 | 更新: 2026-08-10 | 评论: 3 | 👍: 0
  - 该 Issue 是过去 24 小时唯一有评论讨论的议题（共 3 条），同时横跨多日仍在活跃。讨论集中在：Apple Container 1.x 沙箱实际已启动，但 Moltis 的运行时状态检测却判定为"未运行"，导致依赖沙箱启动状态的自动化流程被阻断。这一问题的核心诉求是运行时状态判断的准确性与后端版本兼容性，直接影响用户对 Moltis 沙箱自动化的信任，是当前社区最关注的技术议题。

## 5. Bug 与稳定性

过去 24 小时无 Bug 关闭，共报告 3 个新 Bug（含 1 个跨日活跃），严重程度从高到低排列如下：

| 严重度 | Issue | 描述 | 是否有 Fix PR |
|---|---|---|---|
| 🔴 高 | [#1185 Bug: Apple Container 1.x sandbox starts but Moltis treats it as not running](https://github.com/moltis-org/moltis/issues/1185) | Apple Container 1.x 沙箱已启动但被误判为未运行，影响自动化流程，已有多条评论、存在较大争议 | 无 |
| 🟠 中 | [#1188 Bug: resource limits not applied for apple-container backend](https://github.com/moltis-org/moltis/issues/1188) | Apple Container 后端的资源限制（resource limits）未生效，可能引发资源耗尽风险 | 无 |
| 🟡 低-中 | [#1189 Bug: Sandbox build failing due to wrong gogcli github URL](https://github.com/moltis-org/moltis/issues/1189) | 沙箱构建因 `gogcli` GitHub URL 配置错误而失败，属构建期问题，易修复 | 无 |

三个 Bug 均尚未关联任何 Fix PR，其中 #1188 和 #1189 均为 8 月 10 日新提交，判断尚在维护者响应窗口内。

## 6. 功能请求与路线图信号

- 过去 24 小时无新的功能请求类 Issue（全部为 Bug 标签）。
- 路线图信号集中在 **[PR #531 的浏览器交互 UI](https://github.com/moltis-org/moltis/pull/531)**：若该 PR 合并，将意味着 Moltis 首次支持浏览器实时可视化交互与会话回放，是浏览器代理从"黑盒运行"迈向"可观察、可操控"的关键一步，很可能作为下一版本的重要功能纳入。
- 暂无其他明确的新版本功能信号。

## 7. 用户反馈摘要

来自 Issue #1185 的评论（共 3 条）是本日主要用户反馈来源：

- 用户明确表示已进行 Preflight 检查（搜索已有 issue、确认使用最新版本），排除已知问题后才提交报告，说明该问题具真实可复现性，非重复报障。
- 从用户描述看，Apple Container 1.x 沙箱进程实际已正常运行，但 Moltis 运行时检测逻辑与容器实际状态不一致——用户期望沙箱可用性判定由容器真实运行状态驱动，而非依赖内部状态机。
- 该 Issue 同时涉及用户在自动化场景下对沙箱启动时序的强依赖，反映了生产级用户在稳定性和可观测性方面的核心痛点。
- Issue #1188、#1189 尚无评论，但其报告者清晰填写了 Preflight Checklist，反馈质量整体较高，真实价值可靠。

## 8. 待处理积压

- **[Moltis PR #531（待合并，已开放 133 天）](https://github.com/moltis-org/moltis/pull/531)**：feat(browser) 交互式浏览器查看 UI。自 2026-03-31 创建至今，虽在 8 月 10 日有更新，但仍未获 review/merge。这是当前项目最大的积压 PR，长时间搁置将消耗贡献者热情并阻塞浏览器功能落地，建议维护者尽快排期 review。
- **[Moltis Issue #1185（已开放 3 天，跨日活跃）](https://github.com/moltis-org/moltis/issues/1185)**：Apple Container 1.x 状态误判。当前热门议题，已有多轮评论但无维护者回应记录，需尽快确认是否可复现并给出处理意见。

---

**综合健康度评估：** 当前项目社区反馈活跃（尤其是沙箱后端相关 Bug），但 PR 合并周期长（#531 积累 4 个月以上）、无最近 Release、新报告 Bug 均未获得响应，整体维护活跃度与社区活跃度存在脱节。短期建议优先处理 #1185 的 Apple Container 运行时误判问题（阻断用户真实工作流），并对 #531 做出明确合入或拒绝的决定，以恢复社区信心。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-08-11）

> 数据采集时间：2026-08-11 | 数据来源：GitHub Issues / PR

---

## 1. 今日速览

过去 24 小时 CoPaw 仓库活跃度较高：**40 条 Issue 更新**（新开/活跃 34 条、关闭 6 条），**50 条 PR 更新**（待合并 31 条、已合并/关闭 19 条），无新版本发布。社区讨论集中在 **v2.0.1 / v2.1.0b2 的兼容性与稳定性问题**——包括 OpenAI 兼容接口的严格 provider 校验、MCP 工具调用异常、桌面端 UI 崩溃与性能回退。与此同时，维护者反应迅速，已有多项针对性修复 PR 被提出（如 #6809 修复 StepFun 严格 provider 报错、#6889 修复 IME 崩溃、#6845 修复助手完成时间显示异常）。项目整体处于 **v2.1.0 发布前的密集修复与社区验证阶段**，健康度良好，但需关注若干长时间未闭环的存量问题。

---

## 2. 版本发布

**无新版本发布。** 最近版本仍为 v2.1.0b2（预发布），社区反馈的多个问题正在集中修复中，预计 v2.1.0 正式版临近（已有 release notes PR #6875 在准备中）。

---

## 3. 项目进展

过去 24 小时共有 **19 条 PR 被合并/关闭**，以下几项值得关注：

| PR | 内容 | 意义 |
|---|---|---|
| [#6809](https://github.com/agentscope-ai/QwenPaw/pull/6809)（已关闭） | 修复严格 OpenAI-compatible provider（如 StepFun）拒绝 Chat Completions 请求的问题——清理内部运行时字段与 Responses API 文本类型 | 直接解决 #6803 社区热点，提升第三方兼容性 |
| [#6878](https://github.com/agentscope-ai/QwenPaw/pull/6878)（已关闭） | Console 项目目录选择器增加"显示隐藏文件夹"开关 | 提升桌面端文件工作区实用性 |
| [#6615](https://github.com/agentscope-ai/QwenPaw/pull/6615)（已关闭） | 处理 agent 配置文件损坏或非法 JSON 时的加载错误 | 提升配置健壮性，避免崩溃 |
| [#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398)（已关闭） | 为 ReMe 记忆搜索添加 **reranker 后端支持** | 记忆检索能力升级，配合 ReMe4 路线图 |

此外，**待合并 PR（31 条）** 中体现了下一版本的几个重要方向：

- **#6877** 窗口几何记忆（解决 #4634，来源社区常见痛点）
- **#6884** Auto-Dream 集成单元容错（解决 #6841）
- **#6889** 修复中文 IME 导致的 Console UI 崩溃（解决 #6885）
- **#6845** 保留助手实际完成时间（解决 #6826）
- **#6870** Creator 插件大规模聚合 PR（设置中心、agent skills、多模态编排、跨平台加固）
- **#6880** 统一应用/插件/技能市场页面（/market）
- **#6772** ReMe Light 增加 embedding 热更新与每日论文功能

总体来看，项目在 **兼容性修复、桌面体验、记忆系统迭代、插件生态** 四条线并行推进，v2.1.0 的发布准备已进入冲刺阶段。

---

## 4. 社区热点

过去 24 小时讨论最活跃的 Issue 及背后诉求：

**[#6782 · Docker 版插件/应用市场始终"维护中"](https://github.com/agentscope-ai/QwenPaw/issues/6782)**（9 条评论）
> 用户升级 2.0.1 Docker 版后，插件市场和应用市场均提示维护中，无法安装任何扩展。这是今日**最热话题**，说明 Docker 部署渠道的扩展分发链路存在问题，影响面较大——该 Issue 已持续 4 天仍为 OPEN，建议优先排查。

**[#6803 · OpenAI 兼容请求被严格 provider 拒收](https://github.com/agentscope-ai/QwenPaw/issues/6803)**（6 条评论，已关闭）
> 请求中携带 Responses-API 的 `input_text` 类型 + 原始流式字段，被 StepFun 以 `400 Unrecognized chat message` 拒绝。此问题已通过 PR #6809 修复并关闭，体现了社区反馈→快速修复的良性循环。

**[#6811 · OpenAI Responses 续写摘要忽略 disable_thinking](https://github.com/agentscope-ai/QwenPaw/issues/6811)**（5 条评论）
> Scroll 驱逐旧对话时同步触发摘要生成，但该调用忽略 `disable_thinking` 并阻塞主对话；60 秒取消被误报为 malformed output。用户关注的是**后台任务对主对话的阻塞**与**取消语义不明确**两个设计问题。

**[#6826 · 助手消息结束时间显示异常](https://github.com/agentscope-ai/QwenPaw/issues/6826)**（5 条评论）
> 实际思考 2 分钟后页面显示仅几秒。该 Issue 已有对应修复 PR #6845（正在待合并），但社区在讨论中进一步质疑时间戳在持久化链路中的准确性。

**热点小结**：社区当前最关心的是（1）扩展分发通道的可用性，（2）第三方 API 提供商的严格校验兼容，（3）后台任务与主对话的交互设计（阻塞、超时、取消、时间显示）。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | 状态 |
|---|---|---|---|
| 🔴 严重 | [#6814](https://github.com/agentscope-ai/QwenPaw/issues/6814) | macOS 上打开 Scroll `history.db`（SQLite WAL）触发 **SIGBUS 崩溃**（`sqlite3WalFindFrame`），非模型推理问题 | OPEN，暂无修复 PR |
| 🔴 严重 | [#6885](https://github.com/agentscope-ai/QwenPaw/issues/6885) | **Console UI 崩溃**：agent 运行中中文输入法 compositionEnd 导致消息队列不可用（v2.1.0b2） | OPEN，**已有 PR #6889** |
| 🟠 高 | [#6780](https://github.com/agentscope-ai/QwenPaw/issues/6780) | 2.0.1 不使用时数十分钟后**卡死**，只能杀进程重启 | OPEN，暂无定位 |
| 🟠 高 | [#6828](https://github.com/agentscope-ai/QwenPaw/issues/6828) | v2.1.0b2 桌面端**空闲时持续重绘**（~20% CPU），源于无限 CSS 动画 | OPEN，暂无修复 PR |
| 🟠 高 | [#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810) | Windows 更新/安装时**不检测占用进程**，导致 NSIS 写入失败、安装中断 | OPEN，暂无修复 PR |
| 🟡 中 | [#6812](https://github.com/agentscope-ai/QwenPaw/issues/6812)（已关闭） | Gemini provider 发送含 `$schema` 字段的工具 schema 被拒绝 | 已关闭，应已修复 |
| 🟡 中 | [#6821](https://github.com/agentscope-ai/QwenPaw/issues/6821) | 多轮对话时 `reasoning_content` 未回传导致 400 错误 | OPEN，关联 #6811 系列 |
| 🟡 中 | [#6867](https://github.com/agentscope-ai/QwenPaw/issues/6867) | Gemini 压缩（compaction）时缺少 `thought_signature` 导致 400 | OPEN |
| 🟡 中 | [#6813](https://github.com/agentscope-ai/QwenPaw/issues/6813) | `consume_model_response` 引发 `KeyError: '__aiter__'`，自动标题生成失败 | OPEN，暂无修复 PR |
| 🟢 低 | [#6782](https://github.com/agentscope-ai/QwenPaw/issues/6782) | Docker 版插件/应用市场始终"维护中"（已从热点角度说明） | OPEN，影响面大但非崩溃类 |
| 🟢 低 | [#6866](https://github.com/agentscope-ai/QwenPaw/issues/6866)（已关闭） | workspace 下 agent 目录生成大量临时 py/sh 文件 | 已关闭（关闭原因未知，建议关注） |

---

## 6. 功能请求与路线图信号

**可能被纳入下一版本（已有对应 PR）：**

- **#4634** 窗口大小和位置记忆 → **PR #6877**（Tauri `window-state` 插件实现，待合并）
- **#6841** Auto-Dream 集成单元容错（空 schema 不应判定整个任务失败）→ **PR #6884**（待合并）
- **#6885**（Bug 关联）IME 事件处理 → **PR #6889**（待合并）

**已提需求但尚无明确实现 PR：**

- **#4237**（5月12日开启，4 条评论）In-chat 运行中 shell 命令面板——查看、kill、延长超时。**长期未响应，建议维护者给出规划回复。**
- **#6724**（8月5日开启，2 条评论）MCP 工具调用超时可配置（`MCPClientConfig.timeout` + call-level guard）。
- **#6876** 后台任务面板默认折叠/收纳到独立区域（3 条评论）——桌面端聊天窗口被任务卡片占满，信息密度低。
- **#6881** 自动记忆更新后自动刷新会话标题。
- **#6840** ReMe4 完整路线图（Auto-Link、三模态搜索、4 类摘要权重）的时间线咨询。

**生态方向信号：**

- **#6806 / #6807 / #6683** 三连击：qwenpaw-creator 插件在 Windows 上存在模型配置保存失败、视频/图像生成完全不可用、以及顶层模块名 `utils` 冲突导致无法加载。Creator 插件是 CoPaw 生态中重要的 agentic 创作能力入口，但 Windows 支持明显未达生产级。**PR #6870** 正在推进 Creator 的跨平台加固，但尚未确认是否完整解决上述三个 Issue。

---

## 7. 用户反馈摘要

从今日活跃 Issue 评论中提炼的真实用户声音：

**满意与认可：**

- 用户对 v2.1.0b2 引入 ReMe Light（0.4.1.4）作为记忆后端表示认可，认为与 ReMe4 架构方向一致（#6840）。

**不满意与痛点：**

- **Docker 分发可靠性**：多个用户报告 2.0.1 容器版插件市场不可用、升级后卡死、MCP 工具丢失。"升级2.0以后，mcp工具总是提示Tool notfound"，用户自行排查发现工具名已改为 `[mcp-key]__[tool_name]` 但仍无法调用（#6405，4 条评论）。
- **UI 信息密度与干扰**：用户对加载字符动态闪烁表示"闪的眼睛疼"（#6585），后台任务卡片占满聊天窗口导致看不到实际对话（#6876）。
- **杀软与系统的信任冲突**：有用户对比测试发现同样任务 QwenPaw 被杀软拦截/强制关停而同类工具不会（#6847），暗示行为模式需要优化。
- **配置/安装的工程细节**：Windows 更新卡死、安装时文件占用导致卸载重装（#6810）；配置文件损坏时崩溃而非提示（#6615）。
- **第三方模型接入摩擦**：StepFun、Gemini、DeepSeek V4 系列在 thinking-mode、tool schema 上均出现兼容性报错，用户对"官方支持但接入失败"感到沮丧。

---

## 8. 待处理积压

以下长期未闭环或虽活跃但尚无结论的重要 Issue / PR，建议维护者优先审视：

| 类型 | 编号 | 创建时间 | 问题 |
|---|---|---|---|
| Issue | [#4237](https://github.com/agentscope-ai/QwenPaw/issues/4237) | 2026-05-12 | In-chat shell 命令可观测性面板——**已积压 3 个月**，4 条评论，需求明确，建议给出排期 |
| Issue | [#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405) | 2026-07-23 | MCP 工具升级后 Tool not found——已近 3 周，4 条评论，Docker 用户受限 |
| Issue | [#6585](https://github.com/agentscope-ai/QwenPaw/issues/6585) | 2026-07-30 | 加载字符动态闪烁无关闭入口——3 条评论，简单易改但影响日常体验 |
| Issue | [#6782](https://github.com/agentscope-ai/QwenPaw/issues/6782) | 2026-08-07 | Docker 版市场不可用——今日最热 Issue，已 4 天未解决 |
| Issue | [#6814](https://github.com/agentscope-ai/QwenPaw/issues/6814) | 2026-08-08 | macOS SQLite WAL SIGBUS 崩溃——严重度高，尚无修复 PR |
| PR | [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) | 2026-07-12 | 每会话模型覆盖（per-session model overrides）——**已近 1 个月的 first-time-contributor PR**，仍待 review |
| PR | [#6764](https://github.com/agentscope-ai/QwenPaw/pull/6764) | 2026-08-06 | CI 主分支合并门禁（tests required）——尚需管理员导入规则集 |

---

**整体评估**：CoPaw 当前处于 v2.1.0 发布前的高密度迭代期，社区活跃、维护者响应速度较快，修复型 PR 的提出与合入闭环顺畅。值得警惕的是：**macOS SIGBUS 崩溃、Docker 市场服务不可用、Windows 安装缺陷** 三个方向均触及核心用户体验且尚无明确修复排期；同时，**内存系统（ReMe）与插件生态（Creator）** 的功能扩展力度较大，但相应带来的兼容性和稳定性问题也正在成为社区讨论焦点。建议维护团队在推进 v2.1.0 功能收口的同时，优先补齐上述高优 bug 的修复确认。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-11

## 1. 今日速览

过去 24 小时项目保持**高活跃度**：50 条 Issue 更新（全部处于活跃/开启状态，0 关闭）、50 条 PR 更新（49 条待合并，仅 1 条闭环），但合并吞吐量极低。安全审计类 Issue 持续主导议题，当前存在 **3 个 S0 级**与 **9 个 S1 级**未修复缺陷，且多数尚无对应修复 PR。社区讨论重心集中在治理流程重构（RFC #6808）与安全默认值收紧（#9397）两大方向。无新版本发布，最新版本仍为 v0.8.3。

## 2. 版本发布

无新版本发布（24 小时内 release 数为 0）。

## 3. 项目进展

过去 24 小时仅 1 条 PR 闭环：

- **PR #8301**（closed）：为硬件 catalog 工具命名格式添加回归测试（`tool_names_are_lower_snake_case_identifiers`），纯测试变更，无生产代码改动。链接：[zeroclaw-labs/zeroclaw PR #8301](https://github.com/zeroclaw-labs/zeroclaw/pull/8301)

**合并瓶颈值得关注**：49 条已更新 PR 全部停留在待合并状态，其中包含多条 size:XL 的大型功能 PR，反映维护者 review 容量吃紧：

| PR | 功能 | 状态 |
|---|---|---|
| [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) | OpenAI Chat Completions 兼容端点 | XL，needs-author-action |
| [#9182](https://github.com/zeroclaw-labs/zeroclaw/pull/9182) | Windows 原生 PowerShell shell 支持 | XL，principal contributor |
| [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) | Hailo-Ollama 原生 provider 支持 | XL |
| [#8561](https://github.com/zeroclaw-labs/zeroclaw/pull/8561) | Telegram multi_message 流式模式 | XL，needs-author-action |
| [#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) | Matrix 单消息进度草稿 | XL，needs-author-action |
| [#9126](https://github.com/zeroclaw-labs/zeroclaw/pull/9126) | 插件类型化实例配置验证 | XL，needs-author-action |

## 4. 社区热点

| Issue | 评论数 | 主题 |
|---|---|---|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | 23 | RFC：Work Lanes、看板自动化与标签清理（Rev. 24，状态：批准推迟 / 逐步落地） |
| [#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) | 13 | RFC：per-model 能力与 context-window 配置（风险 high） |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | 12 | Tracker：维护者决策队列（RFC 与设计 Issue 的集中裁决队列） |
| [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) | 12 | RFC：将空 WhatsApp `allowed_groups` 视为 permit-none（风险 high） |

**核心诉求分析**：评论热榜呈现两个清晰信号——其一，社区对**治理流程效率**不满（#6808 已修订 24 版仍未定稿，#9496 提议缩短 7 天讨论期与放宽 unanimity 要求）；其二，对**安全默认值**高度关注（#9397 主张 empty-list 应 fail-closed 而非 fail-open）。两者共同指向项目正从"功能扩张期"进入"治理与安全加固期"。

## 5. Bug 与稳定性

### S0 级（数据丢失 / 安全风险）— 均无修复 PR

| Issue | 问题 | 修复 PR |
|---|---|---|
| [#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) | 知识图谱无 per-agent 归属，任何 agent 可读/写他人知识 | 无 |
| [#9855](https://github.com/zeroclaw-labs/zeroclaw/issues/9855) | Matrix 通道绕过 `.well-known/matrix/client` 发现，homeserver 解析失败 | 无 |
| [#9627](https://github.com/zeroclaw-labs/zeroclaw/issues/9627) | git 写命令经 `-C` / `--git-dir` 全局选项绕过风险分类器与审批门 | 无 |

### S1 级（工作流阻塞）

| Issue | 问题 | 修复 PR |
|---|---|---|
| [#9207](https://github.com/zeroclaw-labs/zeroclaw/issues/9207) | `web_fetch` 对 gzip/brotli/deflate 压缩响应返回乱码，agent 无法解析 | 无 |
| [#9425](https://github.com/zeroclaw-labs/zeroclaw/issues/9425) | Web 面板无法取消运行中的 SOP 任务 | 无 |
| [#9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035) | Docker Compose 网关在端口发布后仍绑定 loopback，报 Connection refused | 无 |
| [#9393](https://github.com/zeroclaw-labs/zeroclaw/issues/9393) | Bluesky/Reddit 通道无发送者授权，无中央门禁覆盖 | 无 |
| [#9395](https://github.com/zeroclaw-labs/zeroclaw/issues/9395) | wasi:http 插件出口无目标策略与配置旋钮 | 无 |
| [#9392](https://github.com/zeroclaw-labs/zeroclaw/issues/9392) | LINE 群消息跳过 allowlist 与配对握手 | 无 |
| [#9389](https://github.com/zeroclaw-labs/zeroclaw/issues/9389) | 未认证 `POST /api/pair` 的锁定基于攻击者可控 header | 无 |
| [#9391](https://github.com/zeroclaw-labs/zeroclaw/issues/9391) | 命令审计日志默认开启但实际不写入任何内容 | 无 |
| [#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779) | `sops_dir` 文档默认值未被 daemon 生效，SOP 静默不加载 | 无 |

**健康度警示**：S0/S1 共计 12 项，其中 8 项来自 2026-07-26 前后集中提交的安全审计（by belumume），截至今日全部在案、**无一条有对应修复 PR**，安全债务持续累积。已有修复方向的 PR 包括：[#8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713)（file_download SSRF 白名单）、[#9110](https://github.com/zeroclaw-labs/zeroclaw/pull/9110)（Lark token 常量时间比较）、[#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002)（viewer 断开后保持 agent turn 存活），但均处于待合并状态。

## 6. 功能请求与路线图信号

- **CI 自动化方向明确**：[#9345](https://github.com/zeroclaw-labs/zeroclaw/issues/9345) 要求每次 PR 更新时重算风险/规模标签，[PR #9867](https://github.com/zeroclaw-labs/zeroclaw/pull/9867) 已提交 size 标签自动化 workflow（stdlib-only Python classifier）；[#9545](https://github.com/zeroclaw-labs/zeroclaw/issues/9545) 提议在必选 CI 中启用 `RUSTDOCFLAGS="-D warnings"` 门禁。
- **评估体系落地**：[PR #9222](https://github.com/zeroclaw-labs/zeroclaw/pull/9222) 引入分维度 LLM-judge 评分器（diagnostic-first，校准前不上线），[PR #9225](https://github.com/zeroclaw-labs/zeroclaw/pull/9225) 补充边界回放用例。
- **平台扩展**：[#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) Hailo-Ollama 原生支持、[#9182](https://github.com/zeroclaw-labs/zeroclaw/pull/9182) PowerShell 支持，显示向边缘硬件与 Windows 环境的覆盖意图。
- **协议兼容**：[#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) OpenAI Chat Completions 端点，直接对接 LangChain/OpenAI SDK/Continue.dev 等生态。
- **安全加固**：[#9339](https://github.com/zeroclaw-labs/zeroclaw/issues/9339) 请求为远程 MCP server 提供自定义 CA 信任配置。

综合判断，下一迭代（0.8.x 后续）大概率纳入：CI 标签自动化、OpenAI 兼容端点、CRI 安全修复（SSRF 白名单、Lark 常量时间比较）。

## 7. 用户反馈摘要

- **web_fetch 解压缺陷是当前头号体验杀手**（#9207）：用户明确表示"garbage binary data... cannot be parsed by an agent"，直接阻塞依赖网页抓取的 agent 工作流。
- **运维操作缺失取消路径**（#9425）：SOP 运行中只能查看、无法停止，"Approve/Deny 仅在 run 未启动时出现"，操作员对失控任务无计可施。
- **监控指标误导**（#9844）：ZeroCode Dashboard 的 CPU 数值实为 daemon 进程指标，用户认为"misleading"。
- **流式场景阅读体验差**（#9562）：WebChat 自动滚动覆盖手动滚动，「impossible to read history while agent is replying」。
- **CLI 帮助文档失效**（#9796）：`zeroclaw cron --help` 中 add-at/add-every/once 示例为无效命令，用户按文档操作会直接失败。
- **配置文档与实现不一致**（#9779）：依赖 sops_dir 默认值的用户遭遇"no error, no warning, no log line"的静默失败，SOP 引擎完全不启动。
- **小模型对话体验问题**（#8999）：Ollama 上的 llama3.2 将 ZeroCode 流式用户消息误判为协议/日志数据，普通问候被当成 API payload。

## 8. 待处理积压

| 项目 | 类型 | 积压时长 | 备注 |
|---|---|---|---|
| [#5842](https://github.com/zeroclaw-labs/zeroclaw/issues/5842) | Issue（增强） | 近 4 个月（2026-04-17） | Codex CLI extra_args 削弱沙箱边界时无告警，5 评论无后续 |
| [#9383](https://github.com/zeroclaw-labs/zeroclaw/issues/9383) | Issue（安全） | 16 天 | npm audit 报 6 个 high/critical 漏洞，bot 上报后无人工跟进 |
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | RFC | 83 天 | 治理 RFC 修订 24 版，批准状态持续推迟 |
| [#8576](https://github.com/zeroclaw-labs/zeroclaw/pull/8576) | PR | 41 天 | OpenAI STT 环境变量回退，stale-candidate，needs-author-action |
| [#8655](https://github.com/zeroclaw-labs/zeroclaw/pull/8655) | PR | 39 天 | zerocode Code pane 整合重构（XL），stale-candidate |
| 49 条待合并 PR | PR 队列 | — | 大量标注 `needs-author-action`，维护者与作者的响应链存在阻塞 |

---

**一句话总结**：ZeroClaw 社区活跃度与功能产出旺盛，但正面临"高安全债务 + 低合并吞吐 + 治理流程待优化"的三重压力；建议维护者优先处理 12 项 S0/S1 安全问题，并集中 review 一批已就绪的 needs-author-action PR，疏通合并瓶颈。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*