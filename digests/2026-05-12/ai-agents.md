# OpenClaw 生态日报 2026-05-12

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-12 00:22 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 | 2026-05-12

---

## 1. 今日速览

OpenClaw 今日维持**极高活跃度**，24小时内 Issues 和 PR 各更新 500 条，社区参与密度显著。版本迭代节奏紧凑，连续发布 3 个 beta 版本聚焦 CI 插件检测与运行时环境识别。**核心信号**：QA 基础设施成为当日焦点——维护者 `100yenadmin` 集中关闭 4 个 harness/mock 相关 Issue，澄清了此前误报的 Codex 运行时缺陷；同时 Discord、Telegram 等渠道稳定性修复进入密集交付期，表明项目正从功能扩展转向**可靠性攻坚**阶段。434 个待合并 PR 显示贡献队列充裕，但审查带宽可能是瓶颈。

---

## 2. 版本发布

### v2026.5.10-beta.5 / beta.4 / beta.3
**发布日期**：2026-05-10 至 2026-05-11

| 版本 | 核心变更 | 影响评估 |
|:---|:---|:---|
| **beta.5** | CI: 新增非阻塞 `plugin-inspector-advisory` 工件至 Plugin Prerelease，捕获捆绑插件兼容性分类而不阻塞发布门控 | 🔧 仅 CI 流程，无用户可见变更 |
| | Runtime/Fly: 通过运行时环境变量检测 Fly Machines 容器环境，优化网关绑定 | 🚀 Fly.io 部署体验提升 |
| **beta.4** | 同上（重复发布，可能为构建流水线调整） | — |
| **beta.3** | Build: 启用更严格的 Vitest lint 规则（聚焦/禁用/条件测试、hook、matcher、expectation 风险） | 🔒 测试质量基线提升 |
| | Build: 锁定 oxfmt 默认配置，跨升级保持格式化行为稳定 | 🔒 开发者体验 |
| | TypeScript: 启用更严格的编译器检查 | ⚠️ 可能暴露既有类型问题 |

**迁移注意事项**：beta.3 的 TypeScript 严格模式升级可能导致自定义插件构建失败，建议插件开发者提前在 `strict: true` 下验证。

---

## 3. 项目进展

### 今日关闭的重要 Issue（含修复验证）

| Issue | 状态 | 核心修复 | 项目推进 |
|:---|:---|:---|:---|
| [#76877](https://github.com/openclaw/openclaw/issues/76877) | ✅ CLOSED | 2026.5.2 Agent 中途停止响应回归问题 | **Agent 可靠性**：解决工具调用后静默挂起的严重回归 |
| [#52305](https://github.com/openclaw/openclaw/issues/52305) | ✅ CLOSED | 异步任务完成报告因事件路由非会话定向而丢失 | **异步架构**：修复外部任务运行器通知可靠性 |
| [#80320](https://github.com/openclaw/openclaw/issues/80320) | ✅ CLOSED | QA harness mock Pi provider ID 与 apply_patch 失败夹具失真 | **质量基础设施**：澄清非产品缺陷，节省诊断资源 |
| [#80312](https://github.com/openclaw/openclaw/issues/80312) | ✅ CLOSED | QA harness fs.read 失败夹具比较对象错误 | **质量基础设施**：同上 |
| [#80236](https://github.com/openclaw/openclaw/issues/80236) | ✅ CLOSED | Mock approval followthrough 未声明 read 问题 | **质量基础设施**：同上 |
| [#80321](https://github.com/openclaw/openclaw/issues/80321) | ✅ CLOSED | 直接消息夹具目标工具与 coding profile 不匹配 | **质量基础设施**：同上 |
| [#80434](https://github.com/openclaw/openclaw/issues/80434) | ✅ CLOSED | first-hour-20 运行时 parity 3 个原生实时证明缺口 | **Codex 就绪度**：识别 harness 阻塞点，P1 优先级确认 |
| [#80760](https://github.com/openclaw/openclaw/issues/80760) | ✅ CLOSED | Codex context-engine 投影限制 LCM 输出至 24k 字符 | **Codex 集成**：修复上下文交付回归 |
| [#74879](https://github.com/openclaw/openclaw/issues/74879) | ✅ CLOSED | 近期版本 onboarding 减速 | **新用户体验**：性能回归修复 |
| [#58443](https://github.com/openclaw/openclaw/issues/58443) | ✅ CLOSED | 网关重复注入入站消息 | **消息管道**：消除重复回复洪水 |
| [#58890](https://github.com/openclaw/openclaw/issues/58890) | ✅ CLOSED | 自动更新子进程在 bootout 杀死父网关时崩溃 | **Mac 稳定性**：修复 stdout/stderr 管道依赖导致的无限卸载 |
| [#62294](https://github.com/openclaw/openclaw/issues/62294) | ✅ CLOSED | 非间隔心跳唤醒原因绕过间隔强制执行 | **调度系统**：消除突发运行和静默间隙 |
| [#57296](https://github.com/openclaw/openclaw/issues/57296) | ✅ CLOSED | WebChat TTS 报告成功但无音频输出 | **Web UI 媒体**：修复 Telegram 正常但 WebChat 失效的不一致 |
| [#79595](https://github.com/openclaw/openclaw/issues/79595) | ✅ CLOSED | `google-vertex` authEvidence 检测但无 profile 写入 | **GCP 认证**：修复运行时 API key 缺失失败 |

**整体迈进**：当日关闭 14 个 Issue，其中 4 个为 QA 基础设施澄清，5 个为产品级稳定性修复，显著提升了 Agent 执行可靠性、平台集成稳定性和 Codex 迁移就绪度。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 👍 | 核心诉求 | 链接 |
|:---|:---|:---:|:---:|:---|:---|
| 1 | Slack 静默断开连接 | 16 | 2 | **企业集成可靠性**：生产环境演示场景下的连接持久性 | [#72808](https://github.com/openclaw/openclaw/issues/72808) |
| 2 | Agent 中途停止响应（已关闭） | 14 | 4 | **Agent 执行完整性**：工具调用后状态机停滞 | [#76877](https://github.com/openclaw/openclaw/issues/76877) |
| 3 | 编码 Agent 永不完成（回归） | 12 | 1 | **开发者工作流**：核心编码场景可用性退化 | [#62505](https://github.com/openclaw/openclaw/issues/62505) |
| 4 | QA 工具默认套件混淆 Codex 原生与动态工具 | 12 | 1 | **测试准确性**：Codex 兼容性评估方法论 | [#80319](https://github.com/openclaw/openclaw/issues/80319) |
| 5 | Agent 承诺后续跟进但不启动动作 | 12 | 2 | **用户信任**：虚假承诺 vs 实际后台执行 | [#58450](https://github.com/openclaw/openclaw/issues/58450) |
| 6 | 网关启动过慢（hook 初始化阻塞） | 11 | 0 | **运维效率**：4 分钟启动时间不可接受 | [#61278](https://github.com/openclaw/openclaw/issues/61278) |
| 7 | 异步任务完成报告丢失（已关闭） | 11 | 0 | **任务系统可靠性**：外部运行器通知机制 | [#52305](https://github.com/openclaw/openclaw/issues/52305) |
| 8 | SQLite 转录/会话 seams 功能请求 | 11 | 2 | **生态扩展**：数据库优先运行时的可观测性 | [#79902](https://github.com/openclaw/openclaw/issues/79902) |

### 背后诉求分析

- **企业就绪度焦虑**：Slack 断开、网关启动慢、Agent 停滞等问题集中在"演示/生产可靠性"场景，反映用户从实验转向生产部署的临界点压力。
- **Codex 迁移不确定性**：QA 相关 Issue 的高活跃度显示社区对 OpenClaw vs Codex 功能 parity 的敏感，维护者主动澄清 harness 误报是积极的信任管理。
- **Agent 自主性边界**：#58450 的"虚假承诺"问题触及 AI 助手核心 UX 契约——用户需要可验证的执行保证，而非语言层面的安抚。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重程度 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **P0-阻塞** | [#76562](https://github.com/openclaw/openclaw/issues/76562) | 升级 2026.4.29/5.2 后 CPU 100%、控制平面 RPC 延迟极高、轮询不稳定 | OPEN | 无明确 PR |
| 🔴 **P0-阻塞** | [#63216](https://github.com/openclaw/openclaw/issues/63216) | 同会话键重复硬重置，retry 循环重新注入引导上下文 | OPEN | 无明确 PR |
| 🟡 **P1-严重** | [#72808](https://github.com/openclaw/openclaw/issues/72808) | Slack 静默断开连接（生产演示场景） | OPEN | 无明确 PR |
| 🟡 **P1-严重** | [#62505](https://github.com/openclaw/openclaw/issues/62505) | 编码 Agent 永不完成（2026.4.2 回归） | OPEN | 无明确 PR |
| 🟡 **P1-严重** | [#58479](https://github.com/openclaw/openclaw/issues/58479) | 审批对话框成功但 exec 未消费审批，生成新审批 ID | OPEN | 无明确 PR |
| 🟡 **P1-严重** | [#59330](https://github.com/openclaw/openclaw/issues/59330) | Control UI Raw 模式永久禁用（2026.3.31 回归，👍 12） | OPEN | 无明确 PR |
| 🟡 **P1-严重** | [#45698](https://github.com/openclaw/openclaw/issues/45698) | Control UI 打开后逐渐卡住（2026.3.12） | OPEN | 无明确 PR |
| 🟢 **P2-一般** | [#72879](https://github.com/openclaw/openclaw/issues/72879) | `thought_signature` 400 回归（2026.4.25） | OPEN | 无明确 PR |
| 🟢 **P2-一般** | [#61137](https://github.com/openclaw/openclaw/issues/61137) | arm64 Raspberry Pi 5 间歇性 JSON 解析错误 | OPEN | 无明确 PR |
| 🟢 **P2-一般** | [#80437](https://github.com/openclaw/openclaw/issues/80437) | Discord 原生斜杠命令部署失败（回归） | OPEN | 无明确 PR |
| 🟢 **P2-一般** | [#80777](https://github.com/openclaw/openclaw/issues/80777) | 升级后明文 token 条目未清理，凭证永久静态留存 | OPEN | 无明确 PR |

### 关键洞察

- **性能回归集群**：#76562 和 #63216 形成"升级后性能/稳定性恶化"模式，2026.4.24→2026.5.2 区间存在系统性问题。
- **UI 技术债务**：Control UI 相关 Issue (#59330, #45698) 长期未解，影响配置管理和日常运维体验。
- **安全合规**：#80777 的凭证残留问题虽新报告，但涉及审计合规，需快速响应。

---

## 6. 功能请求与路线图信号

| 功能请求 | 热度 | 技术方向 | 纳入可能性 | 相关 PR |
|:---|:---:|:---|:---|:---|
| **多租户支持**（共享服务器+RBAC） | 👍 0, 💬 6 | 企业架构 | ⭐⭐⭐ 高 | 无，但 #60127 结构完整 |
| **多槽位内存架构** | 👍 3, 💬 5 | 插件系统扩展 | ⭐⭐⭐ 高 | 无，与 #60572 直接对应 |
| **模型回退的每候选重试计数** | 👍 0, 💬 7 | 弹性/代理提供商 | ⭐⭐⭐ 高 | 无，#59413 问题定义清晰 |
| **SQLite 转录/会话 seams** | 👍 2, 💬 11 | 可观测性/生态 | ⭐⭐⭐ 高 | 无，#79902 有详细设计 |
| **网关启动异步化**（hook 非阻塞） | 👍 0, 💬 11 | 性能/运维 | ⭐⭐⭐ 高 | 无，#61278 痛点明确 |
| **Steer 模式消息注入** | 👍 2, 💬 9 | 交互实时性 | ⭐⭐☆ 中 | 无，#48003 有根因分析 |
| **per-candidate retry** 模型回退 | 👍 0, 💬 7 | 可靠性 | ⭐⭐☆ 中 | 无 |

### 路线图判断

- **企业功能加速**：多租户、RBAC、审计合规（#80777 驱动）预计进入 2026.H2 优先级。
- **数据库优先运行时深化**：#79902 的 SQLite seams 与近期"database-first runtime"方向一致，可能作为插件 API 扩展。
- **Codex 并行轨道**：QA harness 的密集投入暗示 Codex 原生支持是隐性高优先级，但社区可见度低。

---

## 7. 用户反馈摘要

### 痛点

| 场景 | 原声摘录 | Issue |
|:---|:---|:---|
| **演示失败** | "Today at lunch, I tried to demo to some friends and it never answered" | [#72808](https://github.com/openclaw/openclaw/issues/72808) |
| **升级恐惧** | "Due to a lot of bugs, I could not run anything newer than version 2026.04-23" | [#76877](https://github.com/openclaw/openclaw/issues/76877) |
| **Agent 虚假承诺** | "I'll check the project memory and come back with a short follow-up" — 实际无后台动作 | [#58450](https://github.com/openclaw/openclaw/issues/58450) |
| **配置漂移** | "After upgrading from v4.5 to v4.8, `openclaw gateway restart` shows error" | [#63101](https://github.com/openclaw/openclaw/issues/63101) |
| **启动不可接受** | "The gateway takes ~4 minutes to start" | [#61278](https://github.com/openclaw/openclaw/issues/61278) |

### 满意点

- **工具生态**：`list` 工具 PR [#62773](https://github.com/openclaw/openclaw/pull/62773) 显示社区积极填补 fs 工具组缺口。
- **环境注入**：`OPENCLAW_SESSION_KEY`/`AGENT_ID` 环境变量 PR [#73349](https://github.com/openclaw/openclaw/pull/73349) 解决脚本集成痛点。
- **渠道覆盖**：Telegram、Discord、Signal、Zalo、MS Teams 等多渠道修复并行推进，国际化部署友好。

---

## 8. 待处理积压

### 长期未响应的高价值 Issue/PR

| 项目 | 创建 | 最后更新 | 天数 | 风险 | 行动建议 |
|:---|:---|:---|:---:|:---|:---|
| [#48003](https://github.com/openclaw/openclaw/issues/48003) Steer 模式失效 | 2026-03-16 | 2026-05-11 | **56天** | 核心交互模式损坏，有根因分析 | 分配修复者，利用已有 `KeyedAsyncQueue` 上下文 |
| [#45698](https://github.com/openclaw/openclaw/issues/45698) Control UI 逐渐卡住 | 2026-03-14 | 2026-05-11 | **58天** | 日常运维阻塞，影响所有 Web UI 用户 | 前端性能分析，可能与内存泄漏相关 |
| [#57326](https://github.com/openclaw/openclaw/issues/57326) CLI 辅助路径绕过 CLI 调度 | 2026-03-29 | 2026-05-11 | **44天** | 架构一致性债务 | 标记 `good first issue`，明确 `isCliProvider()` 边界 |
| [#58450](https://github.com/openclaw/openclaw/issues/58450) Agent 虚假承诺 | 2026-03-31 | 2026-05-11 | **42天** | UX 信任侵蚀 | 设计"承诺-执行"验证协议，或限制未来时态输出 |
| [#62505](https://github.com/openclaw/openclaw/issues/62505) 编码 Agent 永不完成 | 2026-04-07 | 2026-05-11 | **35天** | 核心工作流失效 | 与 #76877 关联分析，可能是同根因 |
| [#43837](https://github.com/openclaw/openclaw/pull/43837) `/think` 一次性思考级别 | 2026-03-12 | 2026-05-12 | **61天** | 用户体验优化，实现完整 | 审查合并，低风险高价值 |

### 维护者提醒

- **#76562 性能回归** 需紧急诊断：CPU 100% + RPC 延迟是生产环境杀手，建议创建专项 war room。
- **QA harness 债务**：`100yenadmin` 当日关闭 4 个 harness Issue 是积极信号，但 #80434 揭示的 "18 total / 6 pass / 12 fail" 表明 Codex 迁移门控尚未就绪，需持续投入。
- **PR 审查带宽**：434 待合并 vs 66 已合并/关闭，比率约 6.6:1，审查队列健康度需关注。

---

*日报生成时间：2026-05-12 | 数据来源：openclaw/openclaw GitHub 仓库*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析 | 2026-05-12

---

## 1. 生态全景

个人 AI 助手开源生态正经历**从功能竞赛向可靠性攻坚的集体转向**。头部项目（OpenClaw、Hermes Agent、ZeroClaw）日均 50+ Issues/PR 的高吞吐背后，是社区从" demo 可用"到"生产可信"的焦虑迁移——Slack 断开、Agent 停滞、升级回归等稳定性问题占据热点榜首。与此同时，**多租户架构**（NanoBot、IronClaw）、**记忆系统智能化**（Hermes #509、NanoClaw Hindsight、LobsterAI Dreaming）和**Codex 兼容轨道**（OpenClaw、PicoClaw、NanoClaw）成为三大隐性主线，暗示行业正为"企业部署"和"下一代模型接口"做基础设施储备。值得关注的是，中国团队主导的项目（NanoBot、LobsterAI、CoPaw）在 IM 生态适配（飞书、企业微信、POPO、钉钉）上形成显著区域优势。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 版本发布 | 健康度评估 | 关键信号 |
|:---|:---:|:---:|:---|:---|:---|
| **OpenClaw** | 500 更新 | 500 更新 | 3 beta (5.10-5.11) | ⚡ 极高活跃 / ⚠️ 审查瓶颈 | 434 待合并 PR，可靠性攻坚阶段 |
| **Hermes Agent** | 50 (46 活跃) | 50 (36 待合) | 测试构建 (PR #20059) | ⚡ 极高活跃 / 🔴 队列承压 | 关闭率仅 8%，v0.10.x 回归压力 |
| **ZeroClaw** | 16 (10 活跃) | 48 (33 待合) | 无 | 🟡 中高活跃 / 🟡 版本滞后 | v0.8.0 集成分支阻塞，Matrix 门控 |
| **CoPaw** | 49 (28 活跃) | 38 (22 待合) | 无 | 🟡 中高活跃 / 🟢 修复响应快 | 会话稳定性突破，首次贡献者活跃 |
| **IronClaw** | 38 (23 活跃) | 50 (27 待合) | v0.28.1 | ⚡ 极高活跃 / ⚠️ 安全债务 | Reborn 架构落地期，P1 权限泄漏 |
| **LobsterAI** | 1 活跃 | 30 合并/1 待合 | 无 (发布分支合入) | 🟢 开发强劲 / 🔴 社区反馈弱 | "发布冲刺"特征，30 PR 单日合入 |
| **NanoBot** | 10 (7 活跃) | 21 (15 待合) | 无 | 🟡 中高活跃 / 🟢 方向清晰 | 多租户里程碑，MCP 稳定性风险 |
| **NanoClaw** | 4 活跃 | 18 (8 待合) | 无 | 🟡 中等活跃 / 🟡 生产风险 | v2 消息管道重构，双投递 Bug |
| **PicoClaw** | 12 (8 关闭) | 28 (19 待合) | nightly | 🟡 中高活跃 / 🟡 stale 清理激进 | 硬件实时流式传输，嵌入式场景 |
| **NullClaw** | 1 关闭 | 5 (全待合) | 无 | 🔴 低活跃 / 🔴 合并不及时 | #902 关而不修，Zig 实现小众 |
| **ZeptoClaw** | 1 关闭 | 1 待合 | 无 | 🔴 低活跃 / 🟡 架构重构中 | Phase 2 管道化，零外部反馈 |
| **Moltis** | 4 (3 关闭) | 2 合并 | 无 | 🟡 低活跃 / 🟢 积压控制好 | Proxmox 路径反复故障 |
| **TinyClaw** | 0 | 0 | 无 | ⚫ 无活动 | — |

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 表现 | 生态对比 |
|:---|:---|:---|
| **规模基准** | 500 Issues + 500 PR / 24h，434 待合并 | 数量级领先所有项目，是 Hermes/IronClaw 的 10x，ZeroClaw 的 20x |
| **技术路线** | **"全栈统一运行时"**：自研 Agent 循环、网关抽象、工具注册表、QA harness 全自建 | Hermes 侧重重度 Computer-Use（cua-driver）；ZeroClaw 走 Rust/WASM 安全沙箱；NanoBot 轻量插件化；IronClaw 押注 Reborn 事件溯源架构 |
| **核心优势** | ① **渠道覆盖最全**（Telegram/Discord/Slack/Signal/Zalo/MS Teams/WebChat）；② **Codex 就绪度最高**（harness 投入最早，#80434 原生实时证明缺口已识别）；③ **企业集成最深**（Gmail/Outlook/飞书/企业微信均有专项修复） | 对比：Hermes 强在 TUI 交互和浏览器自动化；NanoBot 强在中文 IM 适配速度；PicoClaw 强在硬件边缘场景 |
| **相对短板** | ① **审查带宽瓶颈**（434:66 合并比 6.6:1，健康阈值 ~1.5:1）；② **升级回归频繁**（2026.4.24→5.2 区间系统性问题，用户"升级恐惧"）；③ **Control UI 技术债务**（#59330、#45698 长期未解） | Hermes 的 TUI 输入处理同样脆弱；ZeroClaw 的 v0.8.0 分支阻塞更久 |
| **社区结构** | 维护者 `100yenadmin` 主导 QA 基础设施，Discord/Telegram 渠道修复并行 | 对比：IronClaw 的 `serrrfirat` 单点驱动 Reborn；NanoBot 的 `hoangtuanm` 多租户突破 |

> **定位判断**：OpenClaw 是生态的**"最大公约数"**——功能最全、社区最大、Issue 吞吐最高，但正从"功能扩展"被迫转向"可靠性攻坚"，与生态整体节奏同步。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 紧迫程度 |
|:---|:---|:---|:---:|
| **多租户/多用户隔离** | NanoBot (#3749)、IronClaw (#3490)、NanoClaw (#3744)、CoPaw (隐含) | WebUI/IM 渠道的用户级状态空间隔离，MEMORY/配置不冲突 | 🔴 高 |
| **Agent 执行可靠性** | OpenClaw (#76877 停滞、#58450 虚假承诺)、Hermes (#62505 永不完成)、CoPaw (#3843 历史消失)、NanoClaw (#2404 双投递) | 工具调用后不挂起、不重复、不丢失，状态机可验证 | 🔴 高 |
| **记忆系统智能化** | Hermes (#509 认知记忆)、NanoClaw (#2420 Hindsight)、LobsterAI (#1943 Dreaming)、CoPaw (#4220 向量索引同步) | 从被动文本存储 → 主动编码/巩固/自适应召回，跨会话持久 | 🟡 中高 |
| **Codex/下一代模型兼容** | OpenClaw (harness 密集)、PicoClaw (#2581 流式恢复)、NanoClaw (#1984 自定义端点)、CoPaw (#4133 OpenCode 失效) | 工具调用协议、流式输出、上下文交付的模型间一致性 | 🟡 中高 |
| **网络韧性/断线恢复** | OpenClaw (#72808 Slack 断开)、CoPaw (#4017 HEARTBEAT 冲突)、ZeroClaw (#6530 Matrix sdk)、NanoBot (#3742 /model 切换) | 企业代理环境、移动网络下的自动重连与降级 | 🟡 中 |
| **可观测性/成本追踪** | NullClaw (#909 性能统计)、NanoBot (#3731 /insights)、Hermes (#7798 路由压缩)、ZeroClaw (#6074 审计追踪) | Token I/O、工具成功率、模型路由决策的透明化 | 🟡 中 |
| **Windows 开发者体验** | CoPaw (#4123 控制台闪烁、#4103 PowerShell)、Hermes (TUI 竞态) | 突破 /bin/sh 硬编码、编码问题、UI 闪烁 | 🟢 中低 |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户画像 | 技术架构关键差异 |
|:---|:---|:---|:---|
| **OpenClaw** | 全渠道网关 + 企业集成 + Codex 就绪 | 需要"一个 Agent 覆盖所有工作流"的中大型团队 | TypeScript 单体，自研 Agent 循环，插件注册表 |
| **Hermes Agent** | 重度 Computer-Use（浏览器自动化）+ TUI 交互 | 开发者/极客，偏好终端控制的技术用户 | Rust + TS 混合，cua-driver 原生集成，Nix 包管理 |
| **ZeroClaw** | Rust 安全沙箱 + 隐私优先 + 多模型路由 | 安全敏感型企业、自托管优先用户 | Rust 全栈，WASM 扩展，Schema v3 配置驱动 |
| **NanoBot** | 轻量插件化 + 中文 IM 生态 + 多租户起步 | 中国中小企业、快速部署需求 | Node.js 轻量核心，IM 适配器插件化，HF Spaces 验证 |
| **IronClaw** | Reborn 事件溯源架构 + 信任边界硬化 | 需要审计合规、强隔离的企业级部署 | Rust 分层架构，ironclaw_turns 不可变流，WASM 注册表 |
| **NanoClaw** | v2 消息管道 + 技能市场 + BYO MCP | 技能开发者、需要自定义 Agent 工作流的用户 | 组织迁移后重新聚焦，poll-loop + MCP 双路径 |
| **PicoClaw** | 硬件边缘实时 + 多媒体消息 + 嵌入式 | IoT/边缘设备、Pico 系列硬件用户 | Go 实现，WebSocket 实时流，spawn 异步策略 |
| **LobsterAI** | 网易有道生态 + Artifacts 预览 + POPO/微信 | 中国企业用户、有道产品现有客户 | Electron 桌面端，Cowork/OpenClaw 双引擎（已统一） |
| **CoPaw** | 多 Agent 工作流 + 钉钉/飞书深度集成 + 控制台 | 中国企业协作场景、多角色 Agent 编排 | 会话路由引擎，auto_memory 文件+向量混合 |
| **NullClaw** | Zig 原生性能 + 极简核心 | 追求极致性能、愿意接受小众语言的技术用户 | Zig 全栈，异步 IO 自研，极简依赖 |
| **ZeptoClaw** | Rust Agent 中间件管道 | 需要可组合 Agent 架构的系统构建者 | Rust，Pipeline 模式，LegacyTerminal 过渡 |
| **Moltis** | 自托管部署自动化 + 沙箱容器 | 私有云/Homelab 用户 | Go，Proxmox LXC 一键部署，discrawl 沙箱 |

---

## 6. 社区热度与成熟度

| 层级 | 项目 | 特征 | 阶段判断 |
|:---|:---|:---|:---|
| **🔥 快速迭代期** | OpenClaw、Hermes Agent、IronClaw | 日均 50+ 活动量，新功能与稳定性修复并行，PR 队列承压，版本节奏紧凑（beta/补丁频繁） | 功能扩展 → 可靠性攻坚的阵痛期 |
| **🚀 架构突破期** | NanoBot、NanoClaw、PicoClaw | 关键架构变更落地（多租户、v2 管道、硬件实时），社区热情高，但生产稳定性待验证 | 技术债务清偿后的能力跃升窗口 |
| **🛠️ 质量巩固期** | ZeroClaw、CoPaw、LobsterAI | 高价值 Bug 修复响应快（CoPaw #3843 当日修复），但版本发布滞后（ZeroClaw v0.7.6 门控）、或社区反馈薄弱（LobsterAI 仅 1 活跃 Issue） | 产品化打磨，需补全用户反馈闭环 |
| **🔧 维护模式** | NullClaw、ZeptoClaw、Moltis | 活动量低，核心维护者驱动，外部贡献稀疏，架构重构中但零用户感知 | 生存风险：贡献者流失、Issue 无人响应 |
| **💀 停滞** | TinyClaw | 24h 零活动 | 项目健康度存疑 |

---

## 7. 值得关注的趋势信号

| 信号 | 来源证据 | 对开发者的价值 |
|:---|:---|:---|
| **"升级恐惧"成为集体痛点** | OpenClaw "Due to a lot of bugs, I could not run anything newer than 2026.04-23"；CoPaw "v1.1.5 完全正常，升级后报错" | **语义化版本 + 自动化回归测试**不再是可选，而是社区信任的基础设施。建议引入 canary 渠道和回滚机制。 |
| **Agent "虚假承诺"侵蚀 UX 契约** | OpenClaw #58450 "I'll check... and come back" 无后台动作；NanoClaw #2404 双投递导致"刷屏" | **可验证的执行协议**正在取代自然语言交互——开发者需设计"承诺-执行"的状态机可见性，限制未来时态输出或提供执行追踪 UI。 |
| **多租户从"功能"变为"门槛"** | NanoBot #3749 合并、IronClaw #3490 权限泄漏 P1、CoPaw 会话隔离修复 | **用户级状态隔离**是企业采购的硬性前提。建议早期引入 ULID/命名空间隔离，而非后期补丁。 |
| **MCP 生态的"双刃剑效应"** | NanoBot #3739 MCP 未启动即崩溃、NanoClaw MCP+XML 双路径竞态、Hermes #23799 MCP 子舰队孤儿进程 | **MCP 作为标准接口的同时引入新的故障面**。建议增加 TCP 预探测、进程生命周期治理、以及 MCP 工具的熔断降级。 |
| **"搜索即基础设施"的可靠性焦虑** | NanoBot DuckDuckGo 系统挂起致 Proxmox 强制关机；PicoClaw Brave 收费后的替代方案 scramble；ZeroClaw SearXNG 隐私搜索 | **搜索工具从"功能插件"升级为"系统级依赖"**。建议实现搜索 Provider 的 fallback 链，并隔离搜索失败的事件循环影响。 |
| **记忆系统的"可视化"竞争** | LobsterAI Dreaming 只读展示、NanoClaw Hindsight bundled 方案、Hermes #509 认知记忆 | **用户需要"看见"Agent 的记忆**，而非黑盒信任。记忆系统的 UI 化（时间线、置信度、来源追溯）将成为差异化卖点。 |
| **中国 IM 生态的"深度适配"壁垒** | LobsterAI POPO/微信、NanoBot 飞书/企业微信/LongCat、CoPaw 钉钉/飞书、Hermes WPS Xiezuo | **中国市场的 Agent 产品已形成独立的渠道适配矩阵**，海外项目（OpenClaw、Hermes）的 Slack/Discord 优势在此失效。出海/入华需评估 IM 适配成本。 |
| **Codex 兼容性成为隐性高优先级** | OpenClaw harness 18/6 通过率、PicoClaw Codex 流式恢复、NanoClaw 自定义端点张力 | **OpenAI Codex 的工具调用协议正成为事实标准**。建议提前验证 function calling、流式输出、上下文交付的兼容性，而非被动响应。 |

---

*分析基准：2026-05-12 各项目 GitHub 公开活动数据 | 方法论：定量指标（Issues/PRs/版本）+ 定性主题编码（痛点/诉求/架构信号）*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-05-12

## 1. 今日速览

NanoBot 今日呈现**高度活跃的开发态势**，24小时内21个PR更新（15个待合并）与10个Issues更新（7个活跃）表明社区贡献热情高涨。核心进展集中在**多租户架构、工具系统重构、MCP稳定性修复**三大方向，同时飞书、企业微信等国内渠道适配持续深化。值得注意的是，今日关闭的DuckDuckGo系统挂起问题（#2828）和MiMo推理控制问题（#3585）均为历史遗留痛点，显示维护团队正在清理积压Bug。整体健康度良好，但待合并PR数量较高（15个），需关注代码审查瓶颈。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#3749](https://github.com/HKUDS/nanobot/pull/3749) | hoangtuanm | **多租户WebUI账户体系**：从`~/.nanobot/`单租户架构迁移至`~/.nanobot/users/<ulid>/`多用户隔离 | **架构级突破**：为SaaS化部署奠定基础，WebUI首次支持个人用户独立状态空间；IM渠道（Telegram/Slack等）保持admin-scoped为v2预留扩展 |
| [#3673](https://github.com/HKUDS/nanobot/pull/3673) | ivelin | **WebSocket媒体透传修复**：`_dispatch_envelope`补全`media`字段处理，图片附件不再静默丢失 | 修复Agent多模态能力的关键路径缺陷，影响所有WebSocket渠道的图片交互 |
| [#3733](https://github.com/HKUDS/nanobot/pull/3733) | NearlCrews | **WebUI非安全上下文兼容**：为`crypto.randomUUID`添加shim，支持纯HTTP LAN访问 | 配合近期LAN访问提交（`bad584cb`等），降低本地网络部署门槛 |
| [#3734](https://github.com/HKUDS/nanobot/pull/3734) | pixan-ai | **MiMo推理控制修复**：`reasoning_effort: "none"`正确映射至`thinking.type: "disabled"` | 关闭#3585，补齐文档与实现的不一致，小米生态用户可控成本 |
| [#3736](https://github.com/HKUDS/nanobot/pull/3736) | JiajunBernoulli | **美团LongCat接入**：新增`longcat` provider，支持Flash-Chat/Flash-Thinking系列模型 | 国内大模型生态扩展，覆盖美团自研模型用户群体 |

**整体评估**：今日合并覆盖**架构（多租户）、稳定性（MCP/WebSocket）、生态（LongCat/MiMo）、部署（LAN HTTP）**四个维度，项目在企业级可用性和国产化适配方面显著推进。

---

## 4. 社区热点

### 讨论最活跃的议题

| 排名 | Issue/PR | 评论数 | 热度分析 |
|:---|:---|:---|:---|
| 🥇 | [#2828 DuckDuckGo搜索导致系统级挂起](https://github.com/HKUDS/nanobot/issues/2828) | 5 | **历史疑难终告解决**。5月5日创建，历经6天排查，最终定位DuckDuckGo特定实现导致的事件循环阻塞，甚至波及Proxmox宿主机强制关机。反映社区对**搜索工具稳定性**的极端敏感——搜索是Agent核心能力，系统级挂起属于最高严重级别 |
| 🥈 | [#3650 自定义Bot名称与图标](https://github.com/HKUDS/nanobot/issues/3650) | 3 | **品牌化诉求强烈**。用户希望替换默认"nanobot is thinking..."和猫咪图标，config.json配置方案被标记为`good first issue`，适合新贡献者切入 |
| 🥉 | [#3744 Session级MEMORY多用户隔离](https://github.com/HKUDS/nanobot/issues/3744) | 1 | **企业部署核心痛点**。多IM用户共享Agent时的`USER.md`/`MEMORY.md`冲突问题，直指当前记忆机制缺乏租户隔离，与#3749多租户PR形成需求-供给呼应 |

**诉求洞察**：社区正从"能运行"向"可定制、可隔离、可商用"演进，品牌化和多租户是ToB落地的关键信号。

---

## 5. Bug 与稳定性

| 严重级别 | 问题 | Issue/PR | 状态 | 影响范围 | 修复进展 |
|:---|:---|:---|:---|:---|:---|
| 🔴 **Critical** | MCP服务未启动时Agent崩溃 | [#3739](https://github.com/HKUDS/nanobot/issues/3739) | **OPEN** | 所有MCP用户 | 🛠️ [#3740](https://github.com/HKUDS/nanobot/pull/3740) 已提交：TCP端口预探测防止事件循环崩溃 |
| 🔴 **Critical** | DuckDuckGo搜索系统级挂起 | [#2828](https://github.com/HKUDS/nanobot/issues/2828) | **CLOSED** | DuckDuckGo用户 | ✅ 已关闭，根因系事件循环阻塞 |
| 🟡 **High** | WebUI预加载1MB+代码高亮chunk | [#3746](https://github.com/HKUDS/nanobot/issues/3746) | **OPEN** | WebUI全量用户 | ⏳ 待处理，影响启动性能和移动端体验 |
| 🟡 **High** | 企业微信文件名识别失败 | [#3737](https://github.com/HKUDS/nanobot/issues/3737) | **OPEN** | 企业微信用户 | ⏳ 待处理，标记`good first issue` |
| 🟡 **High** | VolcEngine同时发送max_tokens+max_completion_tokens被拒 | [#3738](https://github.com/HKUDS/nanobot/pull/3738) | **OPEN (PR)** | 火山引擎用户 | 🛠️ PR已提交，设置`supports_max_completion_tokens`标志 |
| 🟢 **Medium** | MiMo reasoning_effort: null未禁用推理 | [#3585](https://github.com/HKUDS/nanobot/issues/3585) | **CLOSED** | MiMo用户 | ✅ #3734已合并，新增`thinking_type`映射 |

**稳定性趋势**：MCP生态的健壮性是当前最大风险点——未启动即崩溃的体验极不友好，#3740的端口预探测方案值得优先审查合并。

---

## 6. 功能请求与路线图信号

| 功能需求 | Issue/PR | 与现有PR关联 | 纳入可能性评估 |
|:---|:---|:---|:---|
| **Session级记忆隔离**（多用户MEMORY） | [#3744](https://github.com/HKUDS/nanobot/issues/3744) | #3749多租户架构已合并WebUI隔离，IM渠道待扩展 | ⭐⭐⭐⭐⭐ **高**。需求与#3749架构方向一致，v2自然延伸 |
| **`/model` 动态切换模型** | [#3742](https://github.com/HKUDS/nanobot/issues/3742) | 无直接PR | ⭐⭐⭐⭐☆ **中高**。网络不稳定地区刚需，实现成本低 |
| **`/insights` 历史Token追踪** | [#3731](https://github.com/HKUDS/nanobot/issues/3731) | [#3735](https://github.com/HKUDS/nanobot/pull/3735) 已提交 | ⭐⭐⭐⭐⭐ **高**。PR已就绪，付费用户核心诉求 |
| **Provider-hosted web search**（Azure原生搜索） | [#3741](https://github.com/HKUDS/nanobot/issues/3741) | [#3743](https://github.com/HKUDS/nanobot/pull/3743) 已提交 | ⭐⭐⭐⭐⭐ **高**。PR与Issue同日提交，响应极快 |
| **工具进度SSE流式事件** | — | [#3745](https://github.com/HKUDS/nanobot/pull/3745) 已提交 | ⭐⭐⭐⭐☆ **中高**。提升前端体验，OpenAI兼容 |
| **Agent自纠正Hook**（循环检测+反思重试） | — | [#3728](https://github.com/HKUDS/nanobot/pull/3728) 已提交 | ⭐⭐⭐⭐⭐ **高**。解决Agent"工具调用死循环"和"盲目重试"两大顽疾 |
| **MGP跨Session记忆治理** | — | [#3408](https://github.com/HKUDS/nanobot/pull/3408) 开放中 | ⭐⭐⭐☆☆ **中**。架构前瞻但依赖外部协议成熟度 |

**路线图信号**：下一版本大概率聚焦**可观测性（/insights）、弹性（/model切换）、企业级（搜索/记忆治理）**三大主题。

---

## 7. 用户反馈摘要

### 真实痛点
- **"搜索即挂起"**：DuckDuckGo问题用户描述"甚至无法从Proxmox优雅关机，必须强制停止"——Agent工具链的可靠性被质疑到**基础设施层面**（[#2828](https://github.com/HKUDS/nanobot/issues/2828)）
- **"中国大陆网络不稳定"**：GPT-5.5用户请求/model切换，反映**模型可用性地域差异**是核心障碍（[#3742](https://github.com/HKUDS/nanobot/issues/3742)）
- **"付费无感知"**：`/status`仅当前session，跨session累计缺失导致**成本黑洞焦虑**（[#3731](https://github.com/HKUDS/nanobot/issues/3731)）

### 使用场景
- **团队协作**：多IM用户共享Agent的MEMORY冲突，暗示NanoBot正被用于**客服、内部助手等多人场景**（[#3744](https://github.com/HKUDS/nanobot/issues/3744)）
- **HF Spaces部署**：PR #3621验证多Agent编排（Neo/Trinity/Sentinel等角色）在单容器生产环境运行，**角色化Agent Squad**成为高级用法

### 满意点
- 多租户架构#3749的响应速度（Issue到PR闭环快）
- 国内渠道适配积极（飞书、企业微信、美团LongCat）

---

## 8. 待处理积压

| 风险项 | 创建时间 | 最后更新 | 阻塞原因 | 建议行动 |
|:---|:---|:---|:---|:---|
| [#3408 MGP跨Session记忆治理](https://github.com/HKUDS/nanobot/pull/3408) | 2026-04-23 | 2026-05-11 | 架构复杂，需外部MGP协议稳定 | 明确v1.0/ v2.0里程碑，避免无限期挂起 |
| [#3621 HF Spaces多角色Agent Squad](https://github.com/HKUDS/nanobot/pull/3621) | 2026-05-04 | 2026-05-11 | 生产验证周期长，单容器资源竞争待测 | 要求补充资源限制（CPU/Memory）基准测试 |
| [#3693 LLM并发门控集中化](https://github.com/HKUDS/nanobot/pull/3693) | 2026-05-08 | 2026-05-11 | 标记`invalid`原因不明，设计争议 | 维护者需澄清invalid理由或重新评估 |
| [#3729 工具系统插件化重构](https://github.com/HKUDS/nanobot/pull/3729) | 2026-05-10 | 2026-05-11 | 核心架构变更，影响面大 | 优先安排核心维护者review，避免与#3748/3728冲突 |

**审查瓶颈预警**：15个待合并PR中，5个为今日提交，但#3408等长期PR已积压近20天，建议维护团队区分**快速通道（bugfix/小feature）**与**深度审查通道（架构重构）**，防止贡献者流失。

---

*日报生成时间：2026-05-12 | 数据来源：HKUDS/nanobot GitHub 公开活动*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-05-12

## 1. 今日速览

Hermes Agent 今日呈现**高活跃度、高吞吐量**态势：24小时内 **50 条 Issues**（46 活跃/新开，仅 4 关闭）与 **50 条 PR**（36 待合并，14 已合并/关闭）并行推进，社区参与密度极高。核心引擎层（`comp/agent`）、网关层（`comp/gateway`）及 TUI/CLI 交互层均有密集修复，显示项目处于**快速迭代与稳定性攻坚并重**的阶段。值得关注的是，今日关闭率偏低（Issues 关闭率 8%，PR 合并/关闭率 28%），大量新 Bug 涌入与 PR 排队可能预示 **v0.10.x 版本存在回归压力**，维护者需关注合并队列健康度。

---

## 2. 版本发布

### `desktop-pr20059-installers` — 桌面端安装器 UX 冒烟测试构建（Ad-hoc）

| 属性 | 详情 |
|:---|:---|
| **类型** | Unsigned / Ad-hoc 测试构建（非签名稳定版） |
| **来源** | PR #20059 分支 `bb/gui` @ commit `bff052d61` |
| **目的** | 安装器用户体验冒烟测试 |

**分发产物：**
- `Hermes-0.0.0-mac-arm64.dmg`（macOS ARM64）
- Windows x64 + ARM64 NSIS 安装程序
- Linux x64 + ARM64 AppImage

| 校验值 | |
|:---|:---|
| `Hermes-0.0.0-mac-arm64.dmg` | `a598cd3b88df7381a4c52e4c4c65d4c...` |

> ⚠️ **重要提示**：此为**未签名测试构建**，仅用于 PR #20059 的安装流程验证，**不可用于生产环境**。正式版用户请等待签名稳定发布。

🔗 [Release 页面](https://github.com/NousResearch/hermes-agent/releases/tag/desktop-pr20059-installers)

---

## 3. 项目进展

### 今日已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 状态 |
|:---|:---|:---|:---|
| **#24063** | teknium1 | `hermes update` 自动刷新 cua-driver，解决上游 Safari 窗口焦点修复（v0.1.6）的手动重装痛点 | ✅ **已合并** |
| **#24061** → **#24062** | AgentArcLab | WPS Xiezuo（WPS365 协作）内置适配器，含 ACK-先响应、输出脱敏、死连接检测 | ⚠️ #24061 关闭，**#24062 重开优化** |
| **#24057** | ddupont808 | 修复 `capture_after=True` 时 `app=` 参数丢失导致的窗口捕获错位 | ✅ **已合并** |
| **#23848** → **#23269** | AgentArcLab | WPS Xiezuo 适配器早期版本迭代关闭 | ✅ 已关闭 |
| **#24031** | Eji4h | 修复时区分析端点崩溃：`utcoffset(None)` 在 zoneinfo 下返回 None | ✅ **已合并** |

### 里程碑意义

- **企业协作生态扩展**：WPS Xiezuo 适配器历经 3 个 PR 迭代（#23269 → #23848 → #24061 → #24062），标志 Hermes 正式进军**中国办公协作市场**，与 Feishu 并列为企业级网关。
- **Computer-Use 可靠性提升**：cua-driver 自动更新 + 窗口捕获修复，降低多模态 Agent 的运维摩擦。
- **全球化时区/本地化**：Bangkok 等亚洲时区崩溃修复，配合 Nix 本地化问题（#23943），显示国际化基础设施正在补强。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 👍 | 核心诉求 |
|:---|:---|:---:|:---:|:---|
| 1 | **[#15080](https://github.com/NousResearch/hermes-agent/issues/15080)** Claude Max 20x OAuth 400 错误 | 10 | 0 | **付费用户身份认证断裂**：Claude Max 订阅用户的有效 OAuth token 被 Anthropic 原生 API 拒绝，P1 级阻断 |
| 2 | **[#14853](https://github.com/NousResearch/hermes-agent/issues/14853)** 多 Agent Discord 频道协作 | 6 | 1 | **分布式 Agent 编排**：3 个 Hermes 实例共享频道时互相不可见，需历史注入 + 级联防循环 |
| 3 | **[#7798](https://github.com/NousResearch/hermes-agent/issues/7798)** `smart_model_routing` 预检压缩阈值错位 | 5 | 1 | **成本优化反噬**：路由到廉价模型时，上下文压缩按廉价模型阈值执行，导致本不应压缩的高质量上下文被截断 |
| 4 | **[#509](https://github.com/NousResearch/hermes-agent/issues/509)** 认知记忆操作（CrewAI 启发） | 5 | 2 | **记忆系统范式升级**：从被动文本存储 → 主动编码/巩固/自适应召回 |
| 5 | **[#13618](https://github.com/NousResearch/hermes-agent/issues/13618)** TUI 审批覆盖层冻结终端 | 4 | 0 | ✅ **已关闭** — `useInput` 处理器竞争导致键盘事件无法到达 `ApprovalPrompt` |

### 诉求深度分析

- **#15080** 反映 **Anthropic 提供商层的 OAuth 与 API 兼容性裂缝**：Max 订阅的 token 在 `api.anthropic.com` 与 Hermes 的 token 验证逻辑间存在语义鸿沟，可能涉及 Anthropic 近期 OAuth scope 变更。
- **#14853** 揭示 **多 Agent 部署的架构缺口**：当前网关层按"单 Agent-单频道"设计，多实例场景需引入**消息总线或共享状态层**，复杂度接近微服务编排。
- **#509** 获 teknium1（核心贡献者）亲自提交，且与今日 PR #24063（teknium1）同属**记忆/Computer-Use 基础设施**，显示团队正将资源投向**长期 Agent 自主性**。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 优先级 | Issue | 现象 | Fix PR 状态 |
|:---|:---|:---|:---|
| **P1** | **[#15080](https://github.com/NousResearch/hermes-agent/issues/15080)** | Claude Max OAuth → Anthropic API HTTP 400，付费用户完全阻断 | ❌ **无 Fix PR**，今日最热 |
| **P1** | **[#7798](https://github.com/NousResearch/hermes-agent/issues/7798)** | `smart_model_routing` 错误压缩，质量/成本双损 | ❌ 无 Fix PR |
| **P1** | **[#7233](https://github.com/NousResearch/hermes-agent/issues/7233)** | Telegram 会话恢复后内部 `Reasoning` 块泄漏给用户 | ❌ 无 Fix PR |
| **P1** | **[#23919](https://github.com/NousResearch/hermes-agent/issues/23919)** | TUI `/reset`、`/new` 被自动补全吞掉，无法执行 | ❌ 无 Fix PR |
| **P1** | **[#23920](https://github.com/NousResearch/hermes-agent/issues/23920)** | `/new` 确认模态冻结会话（`input()` 回退线程冲突） | ✅ **已关闭** — 相关修复已合并 |
| **P1** | **[#23943](https://github.com/NousResearch/hermes-agent/issues/23943)** | Nix 包缺失 locales，网关命令回复显示原始 i18n 键 | ❌ 无 Fix PR |
| **P1** | **[#24067](https://github.com/NousResearch/hermes-agent/issues/24067)** | macOS PID 锁检查失效：系统进程占用相同 PID 导致僵尸锁 | ❌ **今日新开**，无 Fix PR |
| **P2** | **[#11020](https://github.com/NousResearch/hermes-agent/issues/11020)** | 每轮 `cleanup_browser` 杀死 headed/persistent 会话 | 🔄 **[#24064](https://github.com/NousResearch/hermes-agent/pull/24064)** **已提交待审** |
| **P2** | **[#23799](https://github.com/NousResearch/hermes-agent/issues/23799)** | OpenClaw MCP 子舰队每调用重生 + 孤儿 `claude mcp serve` | ❌ 无 Fix PR |
| **P2** | **[#24029](https://github.com/NousResearch/hermes-agent/issues/24029)** | 辅助任务静默回退到付费 OpenRouter 模型，绕过 `:free` 配置 | ❌ 无 Fix PR |
| **P2** | **[#24034](https://github.com/NousResearch/hermes-agent/issues/24034)** | `state.db-wal` 无界增长，PASSIVE checkpoint 永不截断 | 🔄 **[#24056](https://github.com/NousResearch/hermes-agent/pull/24056)** **已提交待审** |
| **P2** | **[#24041](https://github.com/NousResearch/hermes-agent/issues/24041)** | Podman rootless 容器 UID/GID 被覆盖 | ❌ 无 Fix PR |

### 稳定性评估

- **回归风险**：`#23920` 的关闭与 `#23919` 的新开显示 **TUI 输入处理存在系统性脆弱性** — `input()` 回退、自动补全、模态对话框三者交互复杂，易引入竞态条件。
- **基础设施债务**：`#24034`（WAL 膨胀）+ `#24035`（硬编码 `~/.hermes` 路径）+ `#24042`（Dashboard 无视 `$HERMES_HOME`）构成 **配置/状态管理层的一致性危机**，`HERMES_HOME` 环境变量未被全链路尊重。

---

## 6. 功能请求与路线图信号

### 用户提出的新功能

| Issue | 领域 | 信号强度 | 纳入可能性评估 |
|:---|:---|:---:|:---|
| **[#14853](https://github.com/NousResearch/hermes-agent/issues/14853)** 多 Agent Discord 协作 | 网关/编排 | ⭐⭐⭐⭐⭐ | **高** — 与 #24065（Computer Workflow Runtime）的 `delegate_task` 原语方向一致 |
| **[#509](https://github.com/NousResearch/hermes-agent/issues/509)** 认知记忆操作 | Agent/记忆 | ⭐⭐⭐⭐⭐ | **极高** — teknium1 亲自提交，PR #24065 的 Computer Runtime 含事件回放机制，可复用 |
| **[#11424](https://github.com/NousResearch/hermes-agent/issues/11424)** JMAP 邮件集成 | 网关/邮件 | ⭐⭐⭐⭐ | 中 — 基础设施层扩展，无直接竞争 PR |
| **[#24055](https://github.com/NousResearch/hermes-agent/issues/24055)** Zoho Cliq 消息平台 | 网关/IM | ⭐⭐⭐ | 中 — 与 Slack 并列请求，WPS/Feishu 优先级更高 |
| **[#24026](https://github.com/NousResearch/hermes-agent/issues/24026)** Kimi API 心跳保活 | Agent/连接 | ⭐⭐⭐⭐ | **高** — 对标 OpenClaw 已有机制，实现成本低，Kimi 用户痛点明确 |
| **[#24020](https://github.com/NousResearch/hermes-agent/issues/24020)** Cron 消息头抑制 | 网关/定时任务 | ⭐⭐⭐ | 高 — 单配置项功能，社区 PR 友好 |
| **[#23965](https://github.com/NousResearch/hermes-agent/issues/23965)** Telegram 审批保留命令上下文 | 网关/Telegram | ⭐⭐⭐⭐ | **高** — UX 打磨，与 #24060（reply_to_mode 修复）同作者区域 |

### 路线图推断

- **v0.11.0 可能方向**：Computer Workflow Runtime（#24065）+ 认知记忆（#509）+ 多 Agent 编排（#14853）构成 **"持久化、可协作、有记忆的 Agent"** 三位一体。
- **中国企业市场**：WPS Xiezuo（#24062）+ Feishu 修复（#23938）显示 **亚太企业网关是 Q2-Q3 重点**。

---

## 7. 用户反馈摘要

### 💔 痛点

| 场景 | 原声 | Issue |
|:---|:---|:---|
| **认证断裂** | "Claude Max 20x 订阅，有效 OAuth token，每个请求都被 400 拒绝" | #15080 |
| **多 Agent 协作失明** | "3 个 specialized Hermes instances... have no visibility into each other's messages" | #14853 |
| **浏览器调试体验破碎** | "browser window flashes up and disappears on every response" | #11020 |
| **静默扣费** | "explicitly configure only `:free` models... still get billed" | #24029 |
| **状态层失控** | "state.db-wal grows without bound... manual `PRAGMA wal_checkpoint(TRUNCATE)` each time" | #24034 |
| **本地化粗糙** | "raw i18n key paths instead of user-facing text" | #23943 |

### ❤️ 期待

| 场景 | 原声 | Issue |
|:---|:---|:---|
| **记忆智能化** | "no contradiction detection, no confidence-aware retrieval" — 渴望 CrewAI 级记忆 | #509 |
| **Cron 专业化** | "For cron jobs delivering to APIs or bots, the header is noise" | #24020 |
| **长连接稳定** | "OpenClaw has `heartbeat: { every: '5s' }`... Hermes lacks this" | #24026 |

---

## 8. 待处理积压

### ⚠️ 需维护者重点关注

| Issue | 年龄 | 风险 | 行动建议 |
|:---|:---:|:---|:---|
| **[#509](https://github.com/NousResearch/hermes-agent/issues/509)** 认知记忆操作 | **67 天** | 高投票（👍2）、核心贡献者提交，但无 PR 关联 | 指派给记忆系统负责人，与 #24065 Runtime 事件回放整合设计 |
| **[#7798](https://github.com/NousResearch/hermes-agent/issues/7798)** 智能路由压缩阈值 | **31 天** | P1 级成本/质量双损，技术方案明确（绑定原始模型阈值） | 标记 `good first issue`，社区贡献者可快速修复 |
| **[#14853](https://github.com/NousResearch/hermes-agent/issues/14853)** 多 Agent Discord | **18 天** | 架构级需求，评论活跃，但涉及网关状态层重构 | 维护者回复路线图预期，避免社区流失到 AutoGen/CrewAI |
| **[#11020](https://github.com/NousResearch/hermes-agent/issues/11020)** 浏览器生命周期 | **26 天** | PR #24064 已提交，需加速 review | 优先合并 #24064，验证 headed 场景 |
| **[#10199](https://github.com/NousResearch/hermes-agent/issues/10199)** 破坏性命令未确认 | **27 天** | 安全风险，仅 1 评论 | 与 #13618/#23919 TUI 审批层统一修复 |

### 队列健康度预警

- **PR 积压比**：36 待合并 / 14 已处理 = **2.57:1**，高于健康阈值（1.5:1）
- **P1 Bug 关闭率**：4 关闭中仅 1 为 P1（#23920），其余 6 个活跃 P1 均待处理
- **建议**：维护者集中火力关闭 P1 Bug 集群（OAuth、TUI 输入、状态层），再推进功能 PR，避免技术债务滚雪球。

---

*日报生成时间：2026-05-12 | 数据来源：NousResearch/hermes-agent GitHub 公开活动流*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-05-12

## 1. 今日速览

PicoClaw 今日呈现**高活跃度开发态势**：28 个 PR 更新（含 19 个待合并）、12 个 Issues 更新（8 个关闭），社区清理了积压的 stale 问题，同时新功能开发密集推进。核心看点包括：**消息工具多媒体化**（PR #2856）、**Pico 硬件实时流式传输**（PR #2853）、**模型配置工作流重构**（PR #2831-2833 系列）三大主线并行。nightly 构建持续发布，项目处于 v0.2.8 发布前的密集迭代期。

---

## 2. 版本发布

### 🔧 Nightly Build: v0.2.8-nightly.20260511.6e6293e5
- **发布时间**：2026-05-11
- **类型**：自动化构建（可能不稳定，谨慎使用）
- **变更范围**：自 v0.2.8 以来 main 分支的全部累积变更
- **完整对比**：[v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)

> ⚠️ **迁移注意**：nightly 构建包含未发布的模型配置工作流重构（PR #2831-2833）和 spawn 异步策略变更（PR #2830），生产环境建议等待正式版。

---

## 3. 项目进展

### ✅ 今日合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#2831](https://github.com/sipeed/picoclaw/pull/2831) | SiYue-ZO | **模型配置基础架构**：CRUD 模型端点、Provider 元数据、默认 API 基础 URL | 解锁后续模型获取、连通性测试等高级功能，是配置系统的底层重构 |
| [#2719](https://github.com/sipeed/picoclaw/pull/2719) | loafoe | **Slack Webhook 输出通道**：Block Kit 格式化、多 webhook 目标、表格渲染 | 扩展企业通知集成能力，补齐 IM 生态覆盖 |
| [#2758](https://github.com/sipeed/picoclaw/pull/2758) | bogdanovich | **Telegram 媒体组相册处理**：缓冲聚合、保留标题、按序附加 | 修复多图发送体验，提升频道稳定性 |
| [#2645](https://github.com/sipeed/picoclaw/pull/2645) | loafoe | **Bedrock 流式 Provider**：AWS ConverseStream API 实时 token 传输 | 云原生 AI 基础设施的关键性能优化 |
| [#2581](https://github.com/sipeed/picoclaw/pull/2581) | astrada-c | **Codex 流式输出恢复**：从 `output_item.done` 事件重建响应 | 修复 OpenAI Codex 兼容性问题，保障工具链可靠性 |
| [#2565](https://github.com/sipeed/picoclaw/pull/2565) | stpwin | **群触发配置修复**：保留显式 `mention_only=false` | 修复 Go omitempty 导致的配置回退 bug |

**整体进展评估**：配置系统完成底层重构（Part 1/3），多媒体消息架构启动，硬件实时能力补齐，项目正从"功能堆砌"转向"架构深化"。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| Issue | 评论数 | 核心诉求 | 背后信号 |
|:---|:---|:---|:---|
| [#2046](https://github.com/sipeed/picoclaw/issues/2046) LongCat API 工具调用失败 | 6 条 | **第三方 API 兼容性** | 社区 LLM 提供商生态碎片化，工具调用协议（function calling）缺乏统一标准，用户被迫逐个适配 |
| [#2232](https://github.com/sipeed/picoclaw/issues/2232) 集成 Serp API | 5 条 | **搜索 API 成本敏感** | Brave 免费额度取消引发连锁反应，用户需要更经济的搜索替代方案 |
| [#2590](https://github.com/sipeed/picoclaw/issues/2590) Android 服务启动失败 | 4 条 | **移动端部署稳定性** | `libpicoclaw.so` 二进制执行权限问题，嵌入式/Android 场景的打包/分发机制需优化 |

### 🔥 最受关注的待合并 PR

| PR | 亮点 | 社区期待 |
|:---|:---|:---|
| [#2856](https://github.com/sipeed/picoclaw/pull/2856) 消息工具多媒体支持 | 关闭 [#2855](https://github.com/sipeed/picoclaw/issues/2855)，统一 text+media 为单条语义消息 | 解决 agent 被迫拆分发送的"尴尬工作流"，Telegram 富文本交付首发 |
| [#2853](https://github.com/sipeed/picoclaw/pull/2853) Pico 通道 ChatStream | 实时 token 流式传输至 WebSocket | **硬件场景的核心体验升级**，边缘设备终于获得低延迟响应能力 |
| [#2830](https://github.com/sipeed/picoclaw/pull/2830) spawn 异步交付策略 | 可配置 `delivery_mode`，避免子 agent 结果重复注入父 agent | 多 agent 编排的精细控制，企业级工作流刚需 |

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#2796](https://github.com/sipeed/picoclaw/issues/2796) | **历史记录消息丢失**：同一对话多次用户消息仅显示最后一条，消息压缩逻辑误作用于用户可见层 | ❌ **无 fix PR**，开放中 |
| 🟡 **中** | [#2780](https://github.com/sipeed/picoclaw/issues/2780) | **配置热重载破坏语音识别**：`groq-asr` 在 `Reload config` 后失效 | ✅ **已关闭**（无评论，可能 stale 清理） |
| 🟡 **中** | [#2690](https://github.com/sipeed/picoclaw/issues/2690) | **v0.2.7 Gateway 无通道启动**：Docker 部署下 QQ 通道配置加载异常 | ✅ **已关闭** |
| 🟡 **中** | [#2684](https://github.com/sipeed/picoclaw/issues/2684) | **第三方技能地址解析错误**：Android APK 环境下搜索技能仓库失败 | ✅ **已关闭** |
| 🟢 **低** | [#2046](https://github.com/sipeed/picoclaw/issues/2046) | LongCat API 工具调用不执行 | ✅ **已关闭** |

**稳定性评估**：历史记录消息丢失（#2796）是**唯一未修复的高影响 bug**，涉及核心 UX，建议优先处理。今日大量关闭的 stale issue 中，部分（如 #2780）缺乏验证即关闭，存在回归风险。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue/PR | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| **消息工具多媒体 + 频道感知交付** | [#2855](https://github.com/sipeed/picoclaw/issues/2855) → [#2856](https://github.com/sipeed/picoclaw/pull/2856) | 🟢 **高** | PR 已提交，架构设计清晰，匹配 Telegram 首发策略 |
| **edit_file 统一 diff 预览** | [#2848](https://github.com/sipeed/picoclaw/issues/2848) | 🟡 **中** | 参考 Claude Code CLI 体验，实现成本低，用户安全诉求强 |
| **spawn 显式异步交付策略** | [#2829](https://github.com/sipeed/picoclaw/issues/2829) → [#2830](https://github.com/sipeed/picoclaw/pull/2830) | 🟢 **高** | PR 已提交，解决实际运行时问题，企业编排刚需 |
| **Web Search API Fallback 链** | [#2582](https://github.com/sipeed/picoclaw/issues/2582) | 🟡 **中** | 需求合理，但 PR #2647 仅实现 DuckDuckGo 默认启用，未覆盖完整链 |
| **Serp API 集成** | [#2232](https://github.com/sipeed/picoclaw/issues/2232) | 🟡 **中** | 成本驱动需求，但已有 Gemini 搜索 Provider（PR #2763）可能替代 |
| **Raspberry Pi / Pi Zero 2W 支持** | [#2675](https://github.com/sipeed/picoclaw/issues/2675) | 🔴 **低** | 硬件适配文档需求，非核心优先级，社区贡献机会 |
| **Yocto/OpenEmbedded 层** | [#2851](https://github.com/sipeed/picoclaw/pull/2851) | 🟡 **中** | 外部社区贡献，嵌入式部署专业化信号，需维护者评估维护成本 |

**下一版本（v0.2.8?）预测**：多媒体消息、Pico 流式传输、模型配置工作流三大功能极可能纳入；spawn 策略、Gemini 搜索 Provider 为潜力功能。

---

## 7. 用户反馈摘要

### 😫 核心痛点

| 痛点 | 来源 | 典型场景 |
|:---|:---|:---|
| **历史记录不可靠** | [#2796](https://github.com/sipeed/picoclaw/issues/2796) | 多轮对话后回顾上下文，发现早期消息"被吞"，破坏信任 |
| **API 成本与可用性焦虑** | [#2232](https://github.com/sipeed/picoclaw/issues/2232), [#2582](https://github.com/sipeed/picoclaw/issues/2582) | Brave 收费后无备用方案，生产环境搜索能力突然中断 |
| **Android/嵌入式部署脆弱** | [#2590](https://github.com/sipeed/picoclaw/issues/2590), [#2684](https://github.com/sipeed/picoclaw/issues/2684) | `.so` 执行权限、地址解析等环境差异导致"同样配置不同结果" |
| **配置热重载副作用** | [#2780](https://github.com/sipeed/picoclaw/issues/2780), [#2690](https://github.com/sipeed/picoclaw/issues/2690) | 期望动态更新，实际需重启服务，且重载可能破坏已有功能 |

### 😊 满意方向

- **多通道覆盖**：Slack、Telegram、QQ、飞书、WebUI 等多平台支持获认可
- **硬件适配**：Pico 系列实时流式传输补齐边缘 AI 体验短板
- **搜索工具生态**：Brave、Tavily、Perplexity、DuckDuckGo、Gemini 多 Provider 策略受好评

### 💡 深层需求

> "消息压缩应该是针对大模型的，对用户显示的历史消息应该完整" —— [#2796](https://github.com/sipeed/picoclaw/issues/2796)

用户要求**内部优化与外部表现的明确分层**，技术透明性成为体验设计原则。

---

## 8. 待处理积压

### ⏳ 长期未响应的高价值 PR/Issue

| 项目 | 创建时间 | 最后更新 | 风险/建议 |
|:---|:---|:---|:---|
| [#2647](https://github.com/sipeed/picoclaw/pull/2647) DuckDuckGo 默认 + YAML 配置 | 2026-04-24 | 2026-05-11 | **stale 标签**，与 PR #2763（Gemini 搜索）功能重叠，需决策是否合并或关闭 |
| [#2768](https://github.com/sipeed/picoclaw/pull/2768) LLM 瞬态错误重试 | 2026-05-04 | 2026-05-11 | **stale 标签**，OpenRouter 500 错误直接影响生产稳定性，建议优先 review |
| [#2761](https://github.com/sipeed/picoclaw/pull/2761) sync subagent 支持 agent_id | 2026-05-04 | 2026-05-11 | **stale 标签**，同步/异步子 agent 能力不对等，企业编排场景阻塞 |
| [#2740](https://github.com/sipeed/picoclaw/pull/2740) DeepSeek reasoning_content 流式捕获 | 2026-05-01 | 2026-05-11 | DeepSeek 思维链模式兼容性，国产模型生态关键支持 |
| [#2752](https://github.com/sipeed/picoclaw/pull/2752) 模型配置工作流（母 PR） | 2026-05-03 | 2026-05-11 | 已拆分 #2831-2833，母 PR 应关闭或标记为 tracking |

### 🚨 维护者行动建议

1. **立即**：确认 #2796 修复优先级，历史记录丢失是信任破坏级问题
2. **本周**：Review #2768（错误重试）和 #2740（DeepSeek 兼容），直接影响生产稳定性
3. **清理**：明确 #2647 与 #2763 的搜索 Provider 策略，避免功能重复
4. **流程**：stale 自动关闭机制需增加"关闭前验证"环节，防止有效问题被误清

---

*日报生成时间：2026-05-12 | 数据来源：GitHub sipeed/picoclaw*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-05-12

> **项目**: [NanoClaw](https://github.com/qwibitai/nanoclaw) (已迁移至 [nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw))  
> **日期**: 2026-05-12  
> **数据周期**: 过去 24 小时

---

## 1. 今日速览

NanoClaw 今日呈现**高活跃度开发状态**：18 个 PR 更新（10 个已合并/关闭，8 个待审），4 个活跃 Issue 全部为新开或更新，无新版本发布。核心团队正集中攻关 **v2 架构稳定性**——围绕消息投递可靠性（poll-loop 双投递、compaction 后格式丢失）、模型降级容错（fallbackModel）、以及 CLI 工具链完整性展开密集修复。值得注意的是，项目组织已从 `qwibitai` 正式迁移至 `nanocoai`，相关引用清理已完成。整体健康度：**开发节奏稳健，但生产稳定性风险需警惕**——多个 Bug 涉及消息丢失或重复投递。

---

## 2. 版本发布

**无新版本发布**。

---

## 3. 项目进展

### 已合并/关闭的关键 PR（10 个）

| PR | 作者 | 核心贡献 | 项目推进 |
|:---|:---|:---|:---|
| [#2414](https://github.com/nanocoai/nanoclaw/pull/2414) | gavrielc | **poll-loop 裸文本兜底**：agent 输出未包裹 `<message>` 时自动 nudge 重发，防静默丢消息 | 消息可靠性 +1，用户体验止损 |
| [#2413](https://github.com/nanocoai/nanoclaw/pull/2413) | gavrielc | **compaction 路由提醒位置修正**：将 `<message to="name">` 提示强制置于摘要**末尾**，避免模型忽略 | 与 #2412 形成完整修复闭环 |
| [#2412](https://github.com/nanocoai/nanoclaw/pull/2412) | gavrielc | **Revert #2327**：移除 compaction 后注入的 `[system]` 标签提醒，该设计导致 agent 误发消息 | 消除回归，恢复 clean architecture |
| [#1785](https://github.com/nanocoai/nanoclaw/pull/1785) | carstenf | **通道故障隔离**：单个 channel `connect()` 失败（如 Gmail OAuth 过期）不再崩溃整个服务 | 运维稳定性里程碑，多租户场景关键 |
| [#2410](https://github.com/nanocoai/nanoclaw/pull/2410) | gavrielc | **缺失列兼容处理**：容器只读打开 `inbound.db` 时优雅处理缺失 `on_wake` 列，避免重启循环 | 升级兼容性保障 |
| [#2408](https://github.com/nanocoai/nanoclaw/pull/2408) | glifocat | **组织迁移收尾**：全量替换 `qwibitai/nanoclaw` → `nanocoai/nanoclaw` | 基础设施现代化 |
| [#2407](https://github.com/nanocoai/nanoclaw/pull/2407) | TriKro | **文档流程**：上游 PR review 通过 workspace `/zenodotus` skill 管控 | 治理流程标准化 |
| [#1662](https://github.com/nanocoai/nanoclaw/pull/1662) | TriKro | **Sentry IPC 集成**（关闭） | 错误监控能力 |
| [#63](https://github.com/nanocoai/nanoclaw/pull/63) | don7panic | **WhatsApp 认证重试**（关闭，原状态 Blocked） | 长期悬案清理 |
| [#2419](https://github.com/nanocoai/nanoclaw/pull/2419) | carstenf | `/add-hindsight` 技能（BYO MCP 版，关闭）→ 被 [#2420](https://github.com/nanocoai/nanoclaw/pull/2420) 取代 | 方案迭代，见下文 |

**整体评估**：今日合并聚焦 **"消息不丢、服务不崩、升级不挂"** 三大底线，gavrielc 单日贡献 4 个 PR 形成 compaction/poll-loop 修复组合拳，显示核心维护者对 v2 消息管道的深度重构进入收尾阶段。

---

## 4. 社区热点

### 最活跃讨论：Issue #1984 — 自定义 OpenAI 兼容端点支持
- **链接**: [nanocoai/nanoclaw#1984](https://github.com/nanocoai/nanoclaw/issues/1984)
- **数据**: 创建 2026-04-24，最后更新 2026-05-11，**4 条评论**，跨 18 天持续讨论
- **诉求分析**: 用户希望将 Codex/OpenCode 的 "实验性 BYO 端点" 文档路径转化为**生产级支持**。核心矛盾：NanoClaw 的 SKILL.md 和 OpenCode 的 provider config 都预留了钩子，但实际路由层对 "非官方认证" 端点存在隐性阻塞。这反映了**企业私有化部署需求**与**官方 provider 白名单策略**的张力——用户不愿被锁定在官方端点，但项目方对非标准路径的支持持谨慎实验态度。

### 高关注度 PR 对：Hindsight 长时记忆技能
- **[#2420](https://github.com/nanocoai/nanoclaw/pull/2420)**（OPEN，bundled MCP）vs **[#2419](https://github.com/nanocoai/nanoclaw/pull/2419)**（CLOSED，BYO MCP）
- **信号**: carstenf 在 24 小时内提交两版方案，最终选择 **bundled MCP wrapper**（将 Hindsight 的 HTTP API 桥接代码纳入主仓库）。社区偏好"开箱即用"而非"自行部署 MCP 服务"，降低了运维门槛，但增加了主仓库维护负担。此决策暗示项目正**从"极简核心"向"电池 included"倾斜**，以争夺易用性。

---

## 5. Bug 与稳定性

| 优先级 | 问题 | 状态 | Fix PR | 影响范围 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | **消息双投递**：`send_message` MCP 工具与 `<message>` 块同 turn 触发两次投递 | [Issue #2404](https://github.com/nanocoai/nanoclaw/issues/2404) OPEN | **待修复** | 所有使用 MCP + XML 混合输出的 agent |
| 🔴 **高** | **compaction 后任务失效**：SDK 自动压缩导致原始 task prompt 丢失，模型空转无输出 | [PR #2411](https://github.com/nanocoai/nanoclaw/pull/2411) OPEN | **#2411 待审** | 长会话自动压缩场景 |
| 🟡 **中** | **CLI 创建 group 跳过 container_configs**：首条消息触发 "Container config not found" | [Issue #2415](https://github.com/nanocoai/nanoclaw/issues/2415) OPEN | **[#2416](https://github.com/nanocoai/nanoclaw/pull/2416) 待审** | `ncl groups create` 新用户 |
| 🟡 **中** | **模型限额导致会话死亡**：无 fallbackModel 配置，Claude Opus 限额时任务中断 | [Issue #2417](https://github.com/nanocoai/nanoclaw/issues/2417) OPEN | **[#2418](https://github.com/nanocoai/nanoclaw/pull/2418) 待审** | 高用量 Claude Opus 用户 |

**关键风险**: #2404 的双投递 Bug 涉及 **MCP 子进程与 poll-loop 两条输出路径的竞态**，架构层面需明确"单 turn 单投递"原则；#2411 的 compaction 任务丢失则暴露 v2 自动压缩与显式 task prompt 的兼容性设计缺陷。两者均可能**导致用户数据不一致或业务逻辑中断**。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 成熟度 | 纳入可能性 |
|:---|:---|:---|:---|
| **`fallbackModel` 降级容错** | [Issue #2417](https://github.com/nanocoai/nanoclaw/issues/2417) + [PR #2418](https://github.com/nanocoai/nanoclaw/pull/2418) | ⭐⭐⭐⭐⭐ 已有完整 PR，含限额检测逻辑 | **高** — 预计下一版本合并 |
| **Hindsight 长时记忆** | [PR #2420](https://github.com/nanocoai/nanoclaw/pull/2420) | ⭐⭐⭐⭐⭐ 两版迭代，bundled 方案已定 | **高** — 技能市场扩展 |
| **X (Twitter) v2 全功能集成** | [PR #2409](https://github.com/nanocoai/nanoclaw/pull/2409) | ⭐⭐⭐⭐ 25 工具完整实现，Linux 兼容 | **中高** — 最大技能 PR，需 review 带宽 |
| **per-message reasoning effort 路由** | [PR #2406](https://github.com/nanocoai/nanoclaw/pull/2406) | ⭐⭐⭐⭐ 动态切换 heavy/light 模式 | **中** — 成本优化特性，与静态配置冲突需权衡 |
| **Fedora Podman 支持** | [PR #2421](https://github.com/nanocoai/nanoclaw/pull/2421) | ⭐⭐⭐ 容器运行时兼容性 | **中** — 企业 Linux 部署需求 |
| **自定义 OpenAI 端点** | [Issue #1984](https://github.com/nanocoai/nanoclaw/issues/1984) | ⭐⭐ 长期讨论，架构决策未明 | **低-中** — 涉及 provider 安全模型 |

---

## 7. 用户反馈摘要

> 从 Issue/PR 描述中提炼的真实痛点

| 痛点 | 场景 | 情绪 |
|:---|:---|:---|
| **"文档说支持，实际跑不通"** | #1984 用户按 SKILL.md "Option C" 配置自定义端点，发现路由层不识别 | 😤 挫败 — 实验性标注成为"免责声明" |
| **"一条消息发两次，对方以为我刷屏"** | #2404 混合使用 MCP 工具和 XML 块导致重复投递 | 😰 尴尬 — 生产社交场景不可接受 |
| **"任务做到一半，模型突然罢工"** | #2417 Opus 限额无预警，无自动降级 | 😤 愤怒 — 商业任务中断损失 |
| **"升级后容器无限重启"** | #2410 缺失 `on_wake` 列导致兼容性问题 | 😰 焦虑 — 升级恐惧 |
| **"创建完 group 第一条消息就报错"** | #2415 CLI 工具链数据不一致 | 😤 新手流失风险 |

**满意点**: Hindsight 记忆的 bundled 方案（#2420）获得隐性认可——用户倾向"一键启用"而非自建基础设施；X 集成 25 工具的完整度（#2409）显示社区对"功能对等"的执着。

---

## 8. 待处理积压

| 项目 | 时长 | 风险 | 建议行动 |
|:---|:---|:---|:---|
| **[PR #63](https://github.com/nanocoai/nanoclaw/pull/63) WhatsApp 认证重试** | ~3 个月（2/3→5/11 关闭） | 已关闭但未合并，方案可能过时 | 确认关闭理由归档，避免重复劳动 |
| **[PR #1785](https://github.com/nanocoai/nanoclaw/pull/1785) 通道故障隔离** | ~26 天（4/15→5/11） | 终于合并，但长期悬置显示 review 瓶颈 | 优化高价值基础设施 PR 的优先级 |
| **[Issue #1984](https://github.com/nanocoai/nanoclaw/issues/1984) 自定义端点** | ~18 天（4/24→今） | 企业私有化部署需求被搁置 | **建议维护者明确表态**：拒绝/排期/需要社区贡献？避免用户无限等待 |

---

## 附录：今日待审 PR 清单（8 个）

| PR | 作者 | 类型 | 紧急度 |
|:---|:---|:---|:---|
| [#2421](https://github.com/nanocoai/nanoclaw/pull/2421) | skalawag | Fedora Podman 支持 | 中 |
| [#2420](https://github.com/nanocoai/nanoclaw/pull/2420) | carstenf | Hindsight bundled 技能 | 高 |
| [#2418](https://github.com/nanocoai/nanoclaw/pull/2418) | dvirarad | fallbackModel 支持 | **紧急** — 对应生产 Bug |
| [#2416](https://github.com/nanocoai/nanoclaw/pull/2416) | glifocat | CLI 修复 container_configs | **紧急** — 对应生产 Bug |
| [#2411](https://github.com/nanocoai/nanoclaw/pull/2411) | romanbsd | compaction 任务重注入 | **紧急** — 数据完整性 |
| [#2409](https://github.com/nanocoai/nanoclaw/pull/2409) | jorgenclaw | X 集成 v2 完整版 | 高 — 大型 feature review |
| [#2406](https://github.com/nanocoai/nanoclaw/pull/2406) | matt1995ai | per-message effort 路由 | 中 |
| [#2405](https://github.com/nanocoai/nanoclaw/pull/2405) | matt1995ai | compaction 后裸输出兜底 | 高 — 与 #2411 相关 |

---

*日报生成依据：GitHub Issues/PRs 公开数据，分析视角独立，不代表项目官方立场。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-05-12

> **仓库**: [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)  
> **日期**: 2026-05-12  
> **分析窗口**: 过去24小时

---

## 1. 今日速览

NullClaw 今日维持**中等活跃度**，5 条 PR 全部处于待合并状态，无新增合并或发布。社区关注点集中在**网络稳定性修复**与**安全审计功能**两大方向。值得关注的是，PR #908 作为 WB × OpenSource Hackathon 参赛作品，直接关联并修复了昨日关闭的 HostResolutionFailed 回归问题（#902），显示社区贡献者响应迅速。性能统计需求（#909）的提出反映出企业级用户对可观测性的迫切需求，但目前尚无对应 PR。

---

## 2. 版本发布

**无新版本发布**

最新版本仍为 2026.5.x 系列。需注意的是，当前 5 条待合并 PR 中多条涉及稳定性修复，建议维护者评估是否需紧急发布补丁版本。

---

## 3. 项目进展

**今日无合并/关闭的 PR**

| 状态 | 数量 | 说明 |
|:---|:---|:---|
| 已合并 PR | 0 | — |
| 已关闭 Issue | 1 | #902 网络回归问题，由社区 PR #908 提供修复 |

**关键进展分析**：

- **#902 关闭**（[链接](https://github.com/nullclaw/nullclaw/issues/902)）：`HostResolutionFailed` 回归问题虽关闭，但实际修复代码尚未合并（存在于 PR #908）。关闭动作可能基于 Hackathon 作品提交，存在**"先关后并"的风险管理问题**。

- **PR #908 成为实际进展载体**：该 Hackathon 作品包含四项核心改进——网络/DNS 修复、推理流、成本追踪、增强 DDG 搜索，其中网络修复直接回应生产环境故障。

---

## 4. 社区热点

| 排名 | 条目 | 互动指标 | 热度分析 |
|:---|:---|:---|:---|
| 🔥 1 | [#902 HostResolutionFailed 回归](https://github.com/nullclaw/nullclaw/issues/902) | 2 评论，0 👍 | **生产阻断级问题**。2026.5.x 升级导致 siliconflow 提供商完全不可用，2026.4.9 回退可恢复，明确指向 HTTP/DNS 客户端重构引入的回归。用户 agiminds 提供了精确复现路径 |
| 2 | [#909 性能统计报告](https://github.com/nullclaw/nullclaw/issues/909) | 0 评论，0 👍 | **企业需求信号**。jacktang 提出 token I/O、工具调用成功率、安全警告等可观测性指标，目前无原生支持，需依赖外部监控 |

**诉求解读**：
- **稳定性优先于新功能**：#902 的快速关闭显示社区对 2026.5.x 质量焦虑
- **可观测性债务显现**：#909 暴露 NullClaw 在 Agent 运行时的"黑盒"问题，与当前 5 条 PR 中无一条直接相关

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | Fix PR | 风险说明 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#902] 2026.5.x HostResolutionFailed（siliconflow 提供商） | 已关闭 | [#908](https://github.com/nullclaw/nullclaw/pull/908)（待合并） | **代码未合即关**，若 #908 被拒或延迟，问题可能复现。影响所有使用 siliconflow 的 2026.5.x 用户 |
| 🟡 中 | [#910] Discord 网关心跳饥饿、TLS 竞态条件 | 待合并 | 自身 | 涉及 `io_mu` 互斥锁移除、`resume_url` 清理， soak-tested 四平台但需代码审查确认无回归 |
| 🟡 中 | [#883] `execve` 失败导致僵尸进程 | 待合并 | 自身 | Zig stdlib bug 规避，安全探针预检查可执行文件存在性 |

**关键风险**：PR #908 与 #910 均涉及网络/IO 层核心修改，合并时需验证是否冲突。#908 的 `HostResolutionFailed` 修复与 #910 的 `WsClient` 互斥锁移除可能共享底层 HTTP 工具代码。

---

## 6. 功能请求与路线图信号

| 需求来源 | 功能 | 成熟度评估 | 纳入可能性 |
|:---|:---|:---|:---|
| [#909](https://github.com/nullclaw/nullclaw/issues/909) | Agent 性能统计（token I/O、工具调用、安全警告） | 需求阶段，无 PR | ⭐⭐⭐ 高 — 企业采用关键，建议维护者标记 `good first issue` 或 `help wanted` |
| [#783](https://github.com/nullclaw/nullclaw/pull/783) | Cron 子代理、运行历史、JSON 输出、安全加固 | PR 已开 34 天，昨日更新 | ⭐⭐⭐⭐ 高 — 功能完整，含测试，长期未合并可能因审查队列拥堵 |
| [#911](https://github.com/nullclaw/nullclaw/pull/911) | 隐私保护的秘密分类审计（LLM 辅助） | 昨日新提，待审查 | ⭐⭐⭐ 中 — 创新性强，但"隐私保护信封"设计需安全审计 |

**路线图信号**：PR #783 的 Cron 引擎 + #909 的性能统计 = **可观测性+自动化运维双支柱**，建议维护者优先审查 #783 以释放贡献者产能。

---

## 7. 用户反馈摘要

> 从 Issues 评论提炼的真实声音

| 用户 | 场景 | 痛点 | 满意度 |
|:---|:---|:---|:---|
| **agiminds** | 生产环境升级 2026.5.x | "Exact same config, token, network works perfectly in 2026.4.9" — 升级即破坏，回退是唯一解 | 😠 低：回归测试覆盖不足 |
| **jacktang** | 企业级 Agent 运维 | 缺乏原生性能指标，无法评估 token 成本、工具可靠性、安全态势 | 😐 中：功能缺失但社区开放 |
| **ShEvVl**（PR #908） | Hackathon 参赛 | 直接修复生产 bug 作为参赛切入点，反映社区贡献者"问题导向"的参与模式 | 😊 高：快速响应机制有效 |

**深层洞察**：NullClaw 的 Zig 原生实现带来性能优势，但 HTTP/DNS 客户端重构（#902）和 Discord 网关（#910）的连续稳定性问题，暗示**异步 IO 边界存在系统性工程债务**。

---

## 8. 待处理积压

| 条目 | 创建时间 | 最后更新 | 积压天数 | 风险说明 |
|:---|:---|:---|:---|:---|
| [#783 feat(cron)](https://github.com/nullclaw/nullclaw/pull/783) | 2026-04-07 | 2026-05-11 | **34 天** | ⚠️ 高功能价值 PR 长期悬置，贡献者 yanggf8 昨日仍有更新，可能因审查反馈循环不足导致 |
| [#883 probe: resolve executable](https://github.com/nullclaw/nullclaw/pull/883) | 2026-05-03 | 2026-05-11 | 9 天 | 安全相关，Zig stdlib bug 规避，建议加速审查 |

**维护者行动建议**：
1. **立即**：确认 #902 关闭与 #908 合并的关联性，避免"关而不修"
2. **本周**：审查 #783 Cron 功能，释放 34 天积压
3. **短期**：为 #909 性能统计需求创建设计草案或标记社区贡献

---

*本日报基于公开 GitHub 数据生成，未包含私有讨论或安全披露信息。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-05-12

---

## 1. 今日速览

IronClaw 今日呈现**高强度开发态势**，24小时内 Issues 更新 38 条（23 活跃/新开，15 关闭）、PR 更新 50 条（27 待合并，23 已合并/关闭），并发布 v0.28.1 补丁版本。核心信号：**Reborn 架构进入密集落地期**——今日关闭的 15 个 Issues 中 11 个为 Reborn 子任务，同时新开 7 个 Reborn 相关 PR 聚焦信任边界硬化与生产就绪。社区层面，Slack Markdown 渲染、Gmail 502 错误、多租户权限隔离等用户-facing 问题获得关注，显示项目正同步推进架构重构与产品稳定性。

---

## 2. 版本发布

### [ironclaw-v0.28.1](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v0.28.1) | 2026-05-11

| 属性 | 内容 |
|:---|:---|
| **类型** | 补丁版本（Patch） |
| **风险等级** | 低 |

**新增功能：**
- **Slack 绑定增强**：新增 `pairing_approve` 工具，支持通过聊天完成 Slack 渠道绑定（[#3396](https://github.com/nearai/ironclaw/pull/3396)）
- **微信生态扩展**：新增微信注册表构件元数据支持（[#3386](https://github.com/nearai/ironclaw/pull/3386)）
- **平台路径描述**：`common` 模块新增路径与平台描述能力（release notes 截断）

**迁移注意事项：** 无破坏性变更；Slack 用户可通过新工具简化配对流程，微信渠道开发者可接入注册表元数据。

---

## 3. 项目进展

### 今日合并/关闭的关键 PR（5 项）

| PR | 作者 | 关联 Issue | 进展意义 |
|:---|:---|:---|:---|
| [#3476](https://github.com/nearai/ironclaw/pull/3476) | serrrfirat | #3432, #3492 | **Reborn 技能上下文服务落地**：将 `SkillContextService` 接入循环提示路径，实现宿主管控的 `HostSkillContextSource` 与解析器支持的快照构建，解决技能选择在循环中的信任边界问题 |
| [#3471](https://github.com/nearai/ironclaw/pull/3471) | serrrfirat | #3431 | **记忆提示上下文生产适配器**：`MemoryPromptContextService` 生产级实现，支撑 Reborn 循环中的记忆注入 |
| [#3468](https://github.com/nearai/ironclaw/pull/3468) | serrrfirat | #3451 | **循环检查点映射直接 DB 操作**：移除检查点持久化的间接层，降低 Reborn 状态管理的复杂性与故障面 |
| [#3493](https://github.com/nearai/ironclaw/pull/3493) | serrrfirat | - | **安全加固**：修复 Reborn 内存错误信息泄露（SQL/Provider 细节不再暴露）及 SQL 事件存储重放游标问题 |
| [#3504](https://github.com/nearai/ironclaw/pull/3504) | github-actions[bot] | - | **WASM 构件自动化**：更新注册表清单中的 SHA256 校验和与版本固定 URL，保障扩展分发完整性 |

**整体推进评估：** Reborn 架构从"契约定义"阶段（#3193、#3204、#3107 等今日关闭）全面转入"生产实现"阶段。今日关闭的架构契约 Issue 标志着核心抽象（会话绑定、线程存储、AgentLoopDriver、LoopExit）已冻结，后续 PR 聚焦硬化与集成。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 状态 | 核心诉求分析 |
|:---|:---|:---:|:---:|:---|
| 1 | [#3193](https://github.com/nearai/ironclaw/issues/3193) [Reborn] 定义会话绑定与线程契约 | 6 | ✅ CLOSED | **架构共识达成**：6 条评论聚焦 `origin/reborn-integration` 分支的语义切片实现，讨论涉及 `TurnCoordinator` 解耦与多入口点兼容，显示核心贡献者对 Reborn 事件溯源模型的深度投入 |
| 2 | [#3204](https://github.com/nearai/ironclaw/issues/3204) [Reborn] 定义转录与线程存储边界 | 5 | ✅ CLOSED | **存储分层策略**：讨论 `ironclaw_turns` crate 边界与公共 API 设计，关键决策在于"转录不可变流"与"线程可变状态"的分离 |
| 3 | [#3107](https://github.com/nearai/ironclaw/issues/3107) [Reborn] 定义 AgentLoopDriver 与运行类配置契约 | 4 | ✅ CLOSED | **执行模型标准化**：`run-class profile` 的引入使不同代理类型（对话型、任务型、批处理型）可共享同一驱动抽象 |

### 反应最多的 Open Issue

| Issue | 👍 | 诉求 |
|:---|:---:|:---|
| [#748](https://github.com/nearai/ironclaw/issues/748) 发布 ironclaw-worker Docker 镜像至公共注册表 | 6 | **新用户 onboarding 阻塞点**：Docker 沙箱功能因镜像不可拉取而失效，6 个赞显示社区广泛期待；当前仍依赖本地构建变通方案 |

---

## 5. Bug 与稳定性

| 优先级 | Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---:|:---|:---:|
| **P1-高** | [#3490](https://github.com/nearai/ironclaw/issues/3490) | 🔴 OPEN | **多租户权限隔离失效**：管理员禁用 shell 工具后，用户代理仍可访问——**安全边界突破** | 无 |
| **P1-高** | [#3478](https://github.com/nearai/ironclaw/issues/3478) | ✅ CLOSED | 系统运行时适配器与第一方注册表混用风险 | [#3478](https://github.com/nearai/ironclaw/issues/3478) |
| **P1-高** | [#3492](https://github.com/nearai/ironclaw/issues/3492) | 🔴 OPEN | **Reborn 信任边界硬化基线**：跨 PR 审查发现策略/证据/快照值在公共 API 处仍可自由构造 | 进行中（#3501-#3509 系列） |
| **P1** | [#3128](https://github.com/nearai/ironclaw/issues/3128) | 🔴 OPEN | Gmail 授权回调 502 错误（聊天助手路径），设置页面安装可规避 | 无 |
| **P1** | [#2903](https://github.com/nearai/ironclaw/issues/2903) | ✅ CLOSED | Telegram 长回复静默失败 | 已修复 |
| **P1** | [#3317](https://github.com/nearai/ironclaw/issues/3317) | ✅ CLOSED | Telegram 本地 IronClaw 设置失败 | 已修复 |
| **P2** | [#3499](https://github.com/nearai/ironclaw/issues/3499) | 🔴 OPEN | Slack 渠道发送原始 Markdown 而非 Slack mrkdwn 格式 | 无 |
| **P2** | [#3034](https://github.com/nearai/ironclaw/issues/3034) | 🔴 OPEN | V2 引擎 HTTP 工具默认禁用，无 onboarding 引导启用 | 无 |
| **P2** | [#2905](https://github.com/nearai/ironclaw/issues/2905) | 🔴 OPEN | 代理文件保存至 `/home/agent`，托管环境不可访问 | 无 |

**关键信号：** 今日关闭的 3 个 P1 bug 均为 Telegram 相关，显示渠道稳定性近期获得专项投入；但 **#3490 多租户权限泄漏** 与 **#3492 信任边界构造漏洞** 构成当前最大风险敞口，需紧急响应。

---

## 6. 功能请求与路线图信号

| 功能需求 | Issue/PR | 纳入可能性 | 判断依据 |
|:---|:---|:---:|:---|
| **Reborn 贡献者跑道：并行技能/工具/渠道移植** | [#3484](https://github.com/nearai/ironclaw/issues/3484) | ⭐⭐⭐⭐⭐ | **已确立为 EPIC**，明确目标为"贡献者不触碰内核即可移植"，配套 #3503 生产就绪门控 PR 已开 |
| **ironclaw-reborn 二进制发布打包** | [#3483](https://github.com/nearai/ironclaw/issues/3483) | ⭐⭐⭐⭐⭐ | 依赖 #3069（已部分完成），Cargo.toml 中发布策略故意禁用，待 cargo-dist 更新 |
| **本地 Web UI 可发现性** | [#3500](https://github.com/nearai/ironclaw/issues/3500) | ⭐⭐⭐⭐☆ | 用户体验阻塞，描述具体（`cargo run` 后无信号），易于实现 |
| **Telegram v2 适配器** | #3354-#3357 | ⭐⭐⭐⭐⭐ | **7 个 PR 的完整栈已就绪**，#3354-#3356 待合并，#3357 文档冻结，预计 v0.29 纳入 |
| **内存审计事件持久化** | [#3488](https://github.com/nearai/ironclaw/pull/3488) | ⭐⭐⭐⭐⭐ | PR 已开，关联 #3022 兼容性门控，生产就绪必要组件 |
| **pairing_approve 集成测试与 Web 编排共享** | #3475, #3474 | ⭐⭐⭐⭐☆ | 工具已发布（v0.28.1），测试债务与技术债务清理，预计快速跟进 |

---

## 7. 用户反馈摘要

### 🔴 痛点（Pain Points）

| 场景 | 来源 | 核心不满 |
|:---|:---|:---|
| **"我设置了禁用，但没用"** | [#3490](https://github.com/nearai/ironclaw/issues/3490) | 多租户权限配置的预期与实际行为严重不符，管理员信任受损 |
| **"认证完看到 502"** | [#3128](https://github.com/nearai/ironclaw/issues/3128) | Gmail 集成的聊天助手路径存在断路，用户完成 OAuth 流程后遭遇硬失败 |
| **"Slack 里看到 `**bold**`"** | [#3499](https://github.com/nearai/ironclaw/issues/3499) | 渠道格式转换缺失导致 LLM 输出直接暴露为原始 Markdown，专业感丧失 |
| **"本地装完不知道有 Web UI"** | [#3500](https://github.com/nearai/ironclaw/issues/3500) | 新手 onboarding 存在信息断层，功能"存在但不可见" |

### 🟡 摩擦点（Friction）

| 场景 | 来源 | 描述 |
|:---|:---|:---|
| Docker 沙箱"开箱即坏" | [#748](https://github.com/nearai/ironclaw/issues/748) | 默认 `auto_pull_image: true` 但镜像不存在，用户需手动构建 |
| V2 引擎工具发现性 | [#3034](https://github.com/nearai/ironclaw/issues/3034) | HTTP 工具默认关闭，但无 UI 提示如何开启 |

### 🟢 正向信号

- Telegram 渠道稳定性改善：#2903、#3317 关闭显示近期修复有效
- Reborn 架构透明度：核心贡献者 serrrfirat 的 Issue 描述详尽（依赖图、状态更新、验收标准），降低外部参与门槛

---

## 8. 待处理积压

### 长期未响应的高价值 Issue

| Issue | 创建日期 | 最后更新 | 天数 | 风险/影响 | 行动建议 |
|:---|:---:|:---:|:---:|:---|:---|
| [#748](https://github.com/nearai/ironclaw/issues/748) 发布公共 Docker 镜像 | 2026-03-09 | 2026-05-11 | **63 天** | 新用户 onboarding 阻塞，👍 6 | 优先级提升至 P1，协调 CI 发布流程 |
| [#3069](https://github.com/nearai/ironclaw/issues/3069) 独立 ironclaw-reborn 二进制 | 2026-04-29 | 2026-05-11 | 13 天 | Reborn 产品化里程碑 | 依赖 #3483，需 cargo-dist 配置更新 |
| [#2892](https://github.com/nearai/ironclaw/pull/2892) 修复 LLM base_url 空白字符 | 2026-04-23 | 2026-05-11 | 19 天 | CI 稳定性，贡献者 PR | 审查合并，影响 Provider Matrix 测试 |
| [#3461](https://github.com/nearai/ironclaw/pull/3461) 移动端布局 UI | 2026-05-11 | 2026-05-11 | 1 天 | 用户体验 | 快速审查，已附截图，风险低 |

### 需维护者特别关注的 Open PR 集群

| PR 组 | 主题 | 数量 | 状态 |
|:---|:---|:---:|:---|
| #3354-#3357 | Telegram v2 ProductAdapter | 4 | 待合并，栈式依赖 |
| #3501-#3509 | Reborn 信任边界硬化（#3492 跟进） | 9 | 今日新开，需协调审查顺序 |
| #3503 | Reborn 循环生产就绪门控 | 1 | XL 规模，关联 #3429 |

---

**日报生成时间：** 2026-05-12  
**数据基准：** GitHub API 过去 24 小时活动  
**项目健康度评分：** ⚡ 高活跃度 / 🛡️ 架构稳健推进 / ⚠️ 安全债务需紧急清理（#3490, #3492）

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-05-12

> **项目**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
> **日期**: 2026-05-12（数据覆盖 2026-05-11 24h）  
> **分析视角**: AI 智能体与个人 AI 助手领域开源项目

---

## 1. 今日速览

LobsterAI 今日展现**极高开发活跃度**，24小时内完成 **30 个 PR 的合并/关闭**，仅 1 个待合并 PR（Dependabot 的 Electron 依赖更新）。开发节奏呈现典型的"发布冲刺"特征——大量 PR 集中在 5 月 11 日集中合入，涉及 **Cowork/OpenClaw 核心引擎、IM 多平台集成、Artifacts 预览系统、内存管理架构** 四大主线。社区侧相对平静，仅 1 个活跃 Issue 关于追问时的 `NO_REPLY` 无限循环问题，该问题已有对应修复 PR #1940 当日合入。整体项目健康度：**开发侧强劲，社区反馈通道有待加强**。

---

## 2. 版本发布

**无新版本发布**

> 注：PR #1902 `Release/2026.05.01` 于今日完成合并，但此为发布分支合入 `main`，非正式 GitHub Release。项目可能采用"代码合并即发布"的内部节奏，建议关注后续是否打 Tag。

---

## 3. 项目进展

### 🔧 核心架构重构（技术债务清理）

| PR | 作者 | 核心贡献 |
|:---|:---|:---|
| [#1884](https://github.com/netease-youdao/LobsterAI/pull/1884) | btc69m979y-dotcom | **移除废弃 `yd_cowork` 引擎分支**，统一为 `openclaw` 单引擎路径，净减 65 行代码，消除长期维护负担 |
| [#1890](https://github.com/netease-youdao/LobsterAI/pull/1890) | btc69m979y-dotcom | **主 Agent 工作目录解耦**，固定至 `{stateDir}/workspace-main/`，解决用户修改工作目录导致 Agent 状态丢失的痛点 |
| [#1894](https://github.com/netease-youdao/LobsterAI/pull/1894) | btc69m979y-dotcom | 修复上述重构的迁移时序问题，`memory/` 目录正确迁移 |

### 🤖 IM 平台扩展（POPO 多实例 + 微信配置增强）

| PR | 作者 | 核心贡献 |
|:---|:---|:---|
| [#1883](https://github.com/netease-youdao/LobsterAI/pull/1883) | btc69m979y-dotcom | **POPO 多机器人实例支持**，升级 moltbot-popo 至 2.1.1，完整适配 IMStore/网关/配置同步 |
| [#1901](https://github.com/netease-youdao/LobsterAI/pull/1901) | btc69m979y-dotcom | POPO 设置页 UI 统一，修复 i18n 键值错误 |
| [#1893](https://github.com/netease-youdao/LobsterAI/pull/1893) | btc69m979y-dotcom | **微信插件配置化改造**，`dmPolicy`/`allowFrom` 从硬编码改为 `openclaw.json` 配置，新增高级设置面板 |

### 🎨 渲染与 Artifacts 体验优化

| PR | 作者 | 核心贡献 |
|:---|:---|:---|
| [#1945](https://github.com/netease-youdao/LobsterAI/pull/1945) | liugang519 | Artifacts 预览模块**5 项修复 + 3 项增强**：Mermaid 浏览器打开、PPTX sandbox 权限、Ctrl+滚轮缩放、文件搜索空状态文案、Mermaid 预览控制按钮 |
| [#1944](https://github.com/netease-youdao/LobsterAI/pull/1944) | btc69m979y-dotcom | 代码块水平滚动时背景色断裂修复，blockquote 溢出控制 |
| [#1946](https://github.com/netease-youdao/LobsterAI/pull/1946) | fisherdaddy | 输入框 UI 优化 |

### 🧠 记忆系统升级

| PR | 作者 | 核心贡献 |
|:---|:---|:---|
| [#1943](https://github.com/netease-youdao/LobsterAI/pull/1943) | btc69m979y-dotcom | **记忆设置页 Tab 重构**：记忆条目管理 / Embedding 语义搜索 / **Dreaming 记忆整理** 三栏分离，Dreaming 内容只读展示对标 OpenClaw 后台 |

### ⚡ 性能与稳定性

| PR | 作者 | 核心贡献 |
|:---|:---|:---|
| [#1907](https://github.com/netease-youdao/LobsterAI/pull/1907) | btc69m979y-dotcom | **会话列表与消息历史分页加载**（基于 #924），解决长会话内存占用与渲染卡顿 |
| [#1908](https://github.com/netease-youdao/LobsterAI/pull/1908) | btc69m979y-dotcom | **流式文本合并字符吞并修复**，移除 `computeSuffixPrefixOverlap` 误判逻辑（`.pptx` → `.ptx` 类错误） |
| [#1909](https://github.com/netease-youdao/LobsterAI/pull/1909) | btc69m979y-dotcom | **Windows 文件预览路径处理修复**，解决 `file:///` 与工具路径去重失败、重复盘符等 4 个问题 |
| [#1940](https://github.com/netease-youdao/LobsterAI/pull/1940) | liugang519 | **消息尾部 `NO_REPLY` 同步修复**（对应 Issue #1849） |

### 🔧 工程化与技能生态

| PR | 作者 | 核心贡献 |
|:---|:---|:---|
| [#1916](https://github.com/netease-youdao/LobsterAI/pull/1916) | btc69m979y-dotcom | **IMAP/SMTP 连通性 AI 诊断入口**，失败时一键预填错误上下文至 Cowork 输入框，LLM 辅助排障 |
| [#1941](https://github.com/netease-youdao/LobsterAI/pull/1941) | liuzhq1986 | 有道云笔记技能升级至 1.0.9 |
| [#1887](https://github.com/netease-youdao/LobsterAI/pull/1887) | btc69m979y-dotcom | Lint 清理，`no-explicit-any` 规则关闭 |

**整体评估**：今日合并内容相当于一个**中型版本迭代**，覆盖架构债务清理、跨平台 IM 扩展、核心渲染修复、性能优化、AI 辅助诊断等多个维度。项目处于**快速功能交付期**，代码 churn 率高，需关注回归风险。

---

## 4. 社区热点

> **数据说明**：所有 PR 评论数均显示为 `undefined`（API 数据异常），Issues 仅 1 条活跃。以下基于内容重要性分析。

### 唯一活跃 Issue：追问无限 `NO_REPLY` 问题
- **[#1849](https://github.com/netease-youdao/LobsterAI/issues/1849)** | [OPEN] 追问时会出现无限 NO_REPLY 或者输出几个文字就直接不输出了
  - 作者: @atdow | 创建: 2026-04-28 | 更新: 2026-05-11
  - **根因分析**：任务被提前 `complete`，但模型仍在输出，导致页面无数据响应
  - **社区诉求**：追问场景的流式输出可靠性是**高频交互路径**，直接影响用户核心体验
  - **响应状态**：✅ **当日已修复**（PR #1940 合入），修复速度优异

### 高影响力 PR（架构级变更）
| PR | 影响面 | 潜在争议点 |
|:---|:---|:---|
| [#1884](https://github.com/netease-youdao/LobsterAI/pull/1884) 引擎分支清理 | 11 个文件，移除 `yd_cowork` | 是否有外部用户仍依赖旧引擎？需观察 Issue 反馈 |
| [#1890](https://github.com/netease-youdao/LobsterAI/pull/1890) 工作目录解耦 | 所有主 Agent 用户 | 破坏性变更：旧工作目录下的 Agent 状态迁移路径 |

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | 关联 PR/Issue |
|:---|:---|:---|:---|
| 🔴 **高** | 追问时无限 `NO_REPLY` 或输出中断 | **已修复** | [#1849](https://github.com/netease-youdao/LobsterAI/issues/1849) / [#1940](https://github.com/netease-youdao/LobsterAI/pull/1940) |
| 🟡 **中** | 流式文本合并时重复字符被误吞（如 `.pptx` → `.ptx`） | **已修复** | [#1908](https://github.com/netease-youdao/LobsterAI/pull/1908) |
| 🟡 **中** | Windows 文件预览重复卡片、路径解析错误（`D:\D:\path`） | **已修复** | [#1909](https://github.com/netease-youdao/LobsterAI/pull/1909) |
| 🟡 **中** | 工作目录解耦后 `memory/` 目录迁移失败 | **已修复** | [#1894](https://github.com/netease-youdao/LobsterAI/pull/1894) |
| 🟢 **低** | 代码块水平滚动背景色断裂 | **已修复** | [#1944](https://github.com/netease-youdao/LobsterAI/pull/1944) |
| 🟢 **低** | POPO 设置页标题栏展示不一致、i18n 键值错误 | **已修复** | [#1901](https://github.com/netease-youdao/LobsterAI/pull/1901) |
| 🟢 **低** | 消息元数据悬停行为异常（点击后无法隐藏） | **已修复** | [#1942](https://github.com/netease-youdao/LobsterAI/pull/1942) |

**稳定性评估**：当日修复的 7 项问题中，2 项为高/中严重度的**核心交互缺陷**（追问中断、字符吞并），修复响应迅速。但需注意 **#1890 工作目录解耦** 引入的迁移问题（#1894）表明架构变更存在**级联风险**。

---

## 6. 功能请求与路线图信号

### 已落地信号（当日合入）

| 方向 | PR | 路线图判断 |
|:---|:---|:---|
| **记忆系统可视化** | [#1943](https://github.com/netease-youdao/LobsterAI/pull/1943) Dreaming 内容展示 | OpenClaw 后台能力前端化，**"可解释 AI 记忆"成为产品差异化点** |
| **AI 辅助诊断** | [#1916](https://github.com/netease-youdao/LobsterAI/pull/1916) IMAP/SMTP 诊断入口 | **技能生态的智能化运维**模式，可能扩展至其他技能 |
| **IM 平台矩阵扩展** | [#1883](https://github.com/netease-youdao/LobsterAI/pull/1883) POPO 多实例 | 企业 IM 集成深度化，多实例 = 多租户/多部门场景 |
| **性能基线提升** | [#1907](https://github.com/netease-youdao/LobsterAI/pull/1907) 分页加载 | 长会话支持是**企业级部署的硬性门槛** |

### 待观察信号

- **Electron 升级**：PR [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) Electron 40→42 待合并，涉及 2 个 major version 跨越，需关注 Chromium 版本兼容性
- **依赖自动化**：Dependabot 活跃，但 `undefined` 评论数可能暗示自动化流程待优化

---

## 7. 用户反馈摘要

> 基于唯一活跃 Issue #1849 及 PR 描述中的测试计划反推用户场景

| 维度 | 具体内容 |
|:---|:---|
| **核心痛点** | 追问（多轮对话中的 follow-up）时流式输出**突然中断**，显示 `NO_REPLY` 或仅输出几个字后静默 |
| **技术感知** | 用户通过日志发现"任务被提前 complete，但模型还在输出"——**用户对底层状态机有一定洞察能力** |
| **使用场景** | 高频多轮对话场景，可能是**长文档分析、代码生成后的迭代修正** |
| **满意度因素** | 修复响应快（14 天 Issue → 当日修复 PR），但问题发生在核心交互路径，**首次体验损伤难以挽回** |
| **隐含需求** | 流式输出的**可观测性**（progress indicator、token 级状态反馈）、**中断恢复机制** |

---

## 8. 待处理积压

| 项目 | 状态 | 持续时间 | 风险提示 |
|:---|:---|:---|:---|
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) Electron 依赖更新 | **待合并** | 创建于 2026-04-02，已 **39 天** | Electron 40→42 跨越 2 个 major version，延迟合并增加安全漏洞暴露面和后续升级成本 |
| #1849 追问 `NO_REPLY` 问题 | **已修复待验证** | Issue 仍 OPEN | 建议维护者关闭 Issue 并引导用户验证修复 |

**维护者行动建议**：
1. **优先处理 #1277**：评估 Electron 42 的 breaking changes，或拆分升级步骤
2. **建立 Issue 关闭流程**：修复 PR 合入后自动关联关闭，避免状态不一致
3. **补充社区反馈渠道**：24h 仅 1 个 Issue 活跃，与 30 PR 的高开发量不匹配，可能存在反馈漏斗

---

> **数据来源**: GitHub API / LobsterAI 公开仓库  
> **分析模型**: 项目健康度评估框架 v1.2（活跃度/稳定性/社区/技术债务四维度）

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-05-12

> **项目**: [moltis-org/moltis](https://github.com/moltis-org/moltis)  
> **报告日期**: 2026-05-12（数据覆盖：过去24小时）

---

## 1. 今日速览

Moltis 今日保持**中等活跃度**，社区以**缺陷修复为主导**。过去24小时内完成 3 个 Issue 关闭、2 个 PR 合并，无新版本发布。核心进展集中在 **Proxmox LXC 部署路径**和**沙箱容器构建稳定性**两个基础设施领域，显示项目正积极修复部署链路的边缘场景问题。目前仅剩 1 个活跃 Issue 待处理，整体积压控制良好。

---

## 2. 版本发布

**无新版本发布**（最新 Releases 为空）

---

## 3. 项目进展

| PR | 状态 | 作者 | 核心贡献 |
|:---|:---|:---|:---|
| [#992](https://github.com/moltis-org/moltis/pull/992) | **已合并/关闭** | [penso](https://github.com/penso) | **修复 Proxmox Docker 提示符失败**：解决 `lxc-attach` 无交互式 stdin 时的安装中断问题，保留 TTY 可用时的交互行为，非交互场景默认回退至 `MOLTIS_INSTALL_DOCKER` 环境变量或 `no` |
| [#989](https://github.com/moltis-org/moltis/pull/989) | **已合并/关闭** | [penso](https://github.com/penso) | **修复沙箱 discrawl 模块路径**：将依赖仓库从 `github.com/steipete/discrawl` 迁移至 `github.com/openclaw/discrawl`，同步更新技能元数据，并新增 Dockerfile 回归断言防止路径再次失效 |

**整体推进评估**：今日合并的 2 个 PR 均属**基础设施韧性建设**，未引入新功能，但消除了部署链路上的两个单点故障。Proxmox 路径的修复直接回应了用户报告的 LXC 创建失败问题（#991、#993），discrawl 路径更新则解决了外部依赖漂移导致的构建中断（#988）。项目稳定性评分提升，但功能迭代节奏放缓。

---

## 4. 社区热点

| 排名 | 条目 | 互动指标 | 热度分析 |
|:---|:---|:---|:---|
| 🥇 | [#990](https://github.com/moltis-org/moltis/issues/990) **用户自定义 Agent 模式失效** | 1 评论，0 👍 | **唯一含评论的 Issue**，反映核心功能层（Agent 模式配置）存在用户可见的断裂。虽快速关闭，但说明 Agent 自定义机制近期有回归风险，需持续关注 |
| 🥈 | [#993](https://github.com/moltis-org/moltis/issues/993) Proxmox LXC 第91行创建失败 | 0 评论，0 👍 | 同作者 Thndr 连续报告的第二处 Proxmox 脚本故障，显示该部署路径的代码审查或测试覆盖存在系统性缺口 |
| 🥉 | [#991](https://github.com/moltis-org/moltis/issues/991) / [#988](https://github.com/moltis-org/moltis/issues/988) | 0 评论，0 👍 | 标准 bug 报告，已由对应 PR 快速修复 |

**诉求洞察**：社区当前最突出的声音是**"部署可靠性"**——Proxmox LXC 作为自托管场景的关键路径，连续出现行号级脚本错误（#991 第29行、#993 第91行），暗示该代码分支可能缺乏自动化测试或 CI 覆盖。用户 [Thndr](https://github.com/Thndr) 的密集反馈值得维护者直接沟通，邀请其参与 Proxmox 路径的 beta 测试。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 状态 | Fix PR | 严重度说明 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#993](https://github.com/moltis-org/moltis/issues/993) Proxmox LXC 创建失败（第91行） | **开放** | ❌ **无** | 阻断性：Proxmox 自托管安装完全失败，与 #991 同根但不同触发点 |
| 🟡 **中** | [#990](https://github.com/moltis-org/moltis/issues/990) 用户自定义 Agent 模式失效 | 已关闭 | #990 内隐含 | 功能回归：核心 Agent 配置机制异常，影响用户自定义工作流 |
| 🟢 **低** | [#991](https://github.com/moltis-org/moltis/issues/991) Proxmox LXC 第29行失败 | 已关闭 | [#992](https://github.com/moltis-org/moltis/pull/992) | 已修复：Docker 提示符交互逻辑缺陷 |
| 🟢 **低** | [#988](https://github.com/moltis-org/moltis/issues/988) discrawl 仓库 URL 变更破坏沙箱构建 | 已关闭 | [#989](https://github.com/moltis-org/moltis/pull/989) | 已修复：外部依赖漂移，已加回归断言 |

**稳定性健康度**：⚠️ **需警惕** — 75% 的 bug 已快速修复，但 Proxmox 路径的**重复性故障模式**（不同行号、同一路径）和 Agent 模式回归表明，代码变更可能缺乏足够的集成测试覆盖。

---

## 6. 功能请求与路线图信号

**今日无显式功能请求**（全部 4 个 Issue 均为 `bug` 标签）。

**路线图推断信号**：
- **Agent 模式可扩展性**：#990 的修复可能暴露 Agent 模式配置系统的架构脆弱性，建议维护者评估是否需重构为更健壮的配置验证层
- **部署矩阵扩展**：Proxmox 相关 Issue 密度上升，暗示社区自托管需求增长，可考虑将 Proxmox LXC 安装路径提升至一级支持，配套自动化测试

---

## 7. 用户反馈摘要

| 痛点来源 | 真实场景 | 情绪信号 |
|:---|:---|:---|
| [Thndr](https://github.com/Thndr) 的连续报告 | Proxmox 环境下尝试自动化部署 Moltis，脚本在多行（29、91）崩溃 | 😤 **挫败** — 同一安装流程反复失败，用户被迫拆分报告 |
| [bsarkisov](https://github.com/bsarkisov) | 配置自定义 Agent 模式后发现配置不生效 | 😕 **困惑** — 功能界面正常但行为异常，属于最难调试的 bug 类型 |
| [holgzn](https://github.com/holgzn) | 沙箱容器构建因上游仓库更名失败 | 😐 **预期内** — 外部依赖漂移属于常见运维问题，对修复速度满意（当日关闭） |

**满意度亮点**：外部依赖问题（#988）的**当日修复+回归测试**模式值得保持，树立了基础设施问题的响应标杆。

---

## 8. 待处理积压

| 条目 | 创建时间 | 当前状态 | 风险提示 |
|:---|:---|:---|:---|
| [#993](https://github.com/moltis-org/moltis/issues/993) Proxmox LXC 第91行创建失败 | 2026-05-11 | **开放 0 评论** | ⚠️ **24小时内无响应** — 与已修复的 #991 高度关联，可能共享根因，建议优先指派给 #992 的作者 [penso](https://github.com/penso) 或 Proxmox 路径维护者 |

**维护者行动建议**：
1. **立即**：确认 #993 是否可被 #992 的修复覆盖，若否，需紧急补丁
2. **本周内**：为 Proxmox 安装脚本引入 ShellCheck 静态分析 + 容器化回归测试，防止行号级错误反复出现
3. **本月内**：邀请 [Thndr](https://github.com/Thndr) 验证修复，建立核心用户早期反馈通道

---

> 📊 **数据可信度**：基于 GitHub 公开 API 数据 | 生成时间：2026-05-12  
> 🔗 **项目主页**：https://github.com/moltis-org/moltis

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-05-12

## 1. 今日速览

CoPaw 今日保持**高活跃度**，24小时内产生 **49 条 Issues 更新**（28 活跃/新开，21 关闭）与 **38 条 PR 更新**（22 待合并，16 已合并/关闭），无新版本发布。社区聚焦三大主线：**会话稳定性修复**（历史消失、消息路由错误）、**Shell 执行环境可配置性**（跨平台兼容）、**记忆系统向量索引同步**。首次贡献者表现活跃，提交多个前端体验优化 PR。整体健康度良好，核心 Bug 修复响应迅速，但部分网络重连、Provider 配置读取等稳定性问题仍需持续关注。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 说明 | 关联 Issue |
|:---|:---|:---|:---|
| [#4203](https://github.com/agentscope-ai/QwenPaw/pull/4203) Fix(session): session history disappearing and messages being routed to a different session | zhaozhuang521 | **核心修复**：根因是 `applyChatsToSessionList` 错误使用 `sessionId`（格式 `channel:user_id`）匹配会话，导致同一用户的多会话互相覆盖。改为精确匹配解决历史消失与消息错发问题 | [#3843](https://github.com/agentscope-ai/QwenPaw/issues/3843) |
| [#4206](https://github.com/agentscope-ai/QwenPaw/pull/4206) feat(chat): enable multiple attachments support in chat page | zhijianma | 聊天页面支持多附件上传（Shift/Ctrl 多选），解决 Telegram 等场景下的体验差距 | [#4192](https://github.com/agentscope-ai/QwenPaw/issues/4192) |
| [#4209](https://github.com/agentscope-ai/QwenPaw/pull/4209) feat(DingTalk): process quoted messages for user-sent replies | hongxicheng | 钉钉渠道支持引用消息解析，与飞书、企业微信实现对齐 | [#3747](https://github.com/agentscope-ai/QwenPaw/issues/3747) |
| [#4197](https://github.com/agentscope-ai/QwenPaw/pull/4197) feat(tool): Add async execution support for delegate_external_agent | x1n95c | `delegate_external_agent` 支持异步执行，适配长时外部 ACP 工作流 | - |
| [#1791](https://github.com/agentscope-ai/QwenPaw/pull/1791) feat(console): support uploading avatars for agents | LudovicoYIN | 控制台支持 Agent 头像上传/预览/删除，增强多 Agent 工作流的可识别性 | - |

**整体推进评估**：会话系统稳定性取得关键突破（#3843 为 4 月以来的高票 Bug），多附件、引用消息等交互体验补齐短板，外部工具异步化扩展了集成边界。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 热度分析 |
|:---|:---|:---|:---|
| 1 | [#2429](https://github.com/agentscope-ai/QwenPaw/issues/2429) [CLOSED] Cron 任务触发 "I noticed that you have interrupted me" | 11 | **经典高频问题**：用户配置定时任务后收到中断提示，本质是 Cron 与会话状态的交互设计不直观。虽已关闭，但同类问题反复出现，说明文档与错误提示需优化 |
| 2 | [#4133](https://github.com/agentscope-ai/QwenPaw/issues/4133) [CLOSED] v1.1.5.post2 升级后 OpenCode provider 失效 | 10 | **回归问题**：相同配置在 v1.1.5 正常，升级后 `MODEL_EXECUTION_FAILED`，涉及版本间 provider 兼容性测试覆盖不足 |
| 3 | [#3843](https://github.com/agentscope-ai/QwenPaw/issues/3843) [CLOSED] 会话历史消失、消息路由到错误会话 | 9 | **高影响 Bug**：用户录制视频复现，会话列表标题残留但内容空白，严重影响信任度。今日已修复 |
| 4 | [#4165](https://github.com/agentscope-ai/QwenPaw/issues/4165) [CLOSED] v1.1.6 火山引擎内置模型配置全部测试失败 | 8 | **内置 Provider 质量**：官方集成的 Volcano Engine 模型配置存在系统性问题，用户逐模型测试均失败 |
| 5 | [#4017](https://github.com/agentscope-ai/QwenPaw/issues/4017) [CLOSED] HEARTBEAT.md 开启后网络中断无法自动重连 | 7 | **稳定性痛点**：心跳机制与网络恢复逻辑冲突，关闭 HEARTBEAT 后正常，说明该功能存在设计缺陷 |

**诉求洞察**：用户核心焦虑集中在**升级稳定性**（post 版本引入回归）、**网络韧性**（断线重连）、**内置集成可靠性**（火山引擎、DashScope 等官方 Provider）。企业场景对会话持久性要求极高。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 说明 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#3843](https://github.com/agentscope-ai/QwenPaw/issues/3843) 会话历史消失、消息路由错误 | ✅ 已关闭 | 会话匹配逻辑缺陷，同一用户多会话互相覆盖 | [#4203](https://github.com/agentscope-ai/QwenPaw/pull/4203) |
| 🔴 **高** | [#4017](https://github.com/agentscope-ai/QwenPaw/issues/4017) HEARTBEAT.md 导致网络断线无法自动恢复 | ✅ 已关闭 | 心跳文件与重连机制冲突，必须手动重启 | 待确认 |
| 🔴 **高** | [#4159](https://github.com/agentscope-ai/QwenPaw/issues/4159) DashScope provider 配置未读取，api_key 为空 401 | 🟡 **开放中** | 配置文件验证通过但运行时未加载，fallback 到 openai backend | 无 |
| 🟡 **中** | [#4123](https://github.com/agentscope-ai/QwenPaw/issues/4123) Windows 每次 shell 调用闪烁控制台窗口 | 🟡 **开放中** | `create_subprocess_shell` 在 Windows 的 UI 体验问题 | 无 |
| 🟡 **中** | [#4170](https://github.com/agentscope-ai/QwenPaw/issues/4170) Agent 动作信息全部完成后才显示，无法中途停止 | 🟡 **开放中** | 流式/实时反馈机制退化，长时任务用户失控 | 无 |
| 🟡 **中** | [#4185](https://github.com/agentscope-ai/QwenPaw/issues/4185) 含畸形 tool_use 的持久化历史导致会话无法打开 | 🟡 **开放中** | 数据持久化格式健壮性不足 | 无 |
| 🟡 **中** | [#4220](https://github.com/agentscope-ai/QwenPaw/issues/4220) auto_memory 写入文件但不同步向量索引 | 🟡 **开放中** | `/new` 后新会话搜索不到记忆 | [#4224](https://github.com/agentscope-ai/QwenPaw/pull/4224) |
| 🟢 **低** | [#4104](https://github.com/agentscope-ai/QwenPaw/issues/4104) 中英文数字文件名被插入空格 | ✅ 已关闭 | "2026年报告.word" → "2026 年报告.word" | 无 |

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| **Fallback 模型自动切换** | [#4011](https://github.com/agentscope-ai/QwenPaw/issues/4011) | ⭐⭐⭐ 高 | 生产环境刚需，架构上需模型路由层改造，社区呼声持续 |
| **Shell 可配置（突破 /bin/sh 硬编码）** | [#3767](https://github.com/agentscope-ai/QwenPaw/issues/3767) / [#4215](https://github.com/agentscope-ai/QwenPaw/pull/4215) | ⭐⭐⭐⭐ **已提交 PR** | PR #4215 今日提交，支持 `shell_command_executable` 配置，优先级明确 |
| **Windows Shell 选择** | [#4103](https://github.com/agentscope-ai/QwenPaw/issues/4103) | ⭐⭐⭐ 高 | 与 #3767 同源，PowerShell 5 编码问题困扰中文用户 |
| **链路追踪机制** | [#4114](https://github.com/agentscope-ai/QwenPaw/issues/4114) | ⭐⭐ 中 | 企业可观测性需求，但暂无 PR，需基础设施投入 |
| **记忆蒸馏插件** | [#4171](https://github.com/agentscope-ai/QwenPaw/pull/4171) | ⭐⭐⭐ 中 | 社区贡献的 title-diffing 蒸馏引擎，~92% 噪声降低，待 review |
| **ADBPG 长期记忆** | [#2308](https://github.com/agentscope-ai/QwenPaw/pull/2308) | ⭐⭐ 中 | 3 月提交至今开放，企业级持久化需求，但集成复杂度较高 |
| **Tauri 2.x 桌面端** | [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) | ⭐⭐⭐ 中 | 替代 Electrobun，跨平台桌面体验，Under Review 中 |
| **GPT-Image2 参考图支持** | [#4167](https://github.com/agentscope-ai/QwenPaw/issues/4167) | ⭐⭐ 低 | 单一功能点，需评估多模态 pipeline 优先级 |

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 | 核心不满 |
|:---|:---|:---|
| **升级焦虑** | [#4133](https://github.com/agentscope-ai/QwenPaw/issues/4133), [#4165](https://github.com/agentscope-ai/QwenPaw/issues/4165) | "v1.1.5 完全正常，升级后报错"——用户对小版本升级的信任度受损，post 版本测试覆盖不足 |
| **网络韧性** | [#4017](https://github.com/agentscope-ai/QwenPaw/issues/4017), [#2435](https://github.com/agentscope-ai/QwenPaw/issues/2435) | 企业代理环境网络波动大，gh CLI 30-60% 超时，Agent 工作效率断崖下降 |
| **Windows 二等公民** | [#4123](https://github.com/agentscope-ai/QwenPaw/issues/4123), [#4103](https://github.com/agentscope-ai/QwenPaw/issues/4103) | PowerShell 5 编码地狱、控制台闪烁、无法选择 Shell，开发者体验显著落后于 Unix |
| **实时反馈缺失** | [#4170](https://github.com/agentscope-ai/QwenPaw/issues/4170) | "5-10 分钟不知道发生什么，无法停止"——Agent 执行黑盒化，用户控制感丧失 |
| **配置与运行脱节** | [#4159](https://github.com/agentscope-ai/QwenPaw/issues/4159), [#4182](https://github.com/agentscope-ai/QwenPaw/issues/4182) | 配置文件修改不生效（桌面版默认 Agent、DashScope api_key），调试成本极高 |

### 满意点

- 多附件支持快速响应并合并（[#4192](https://github.com/agentscope-ai/QwenPaw/issues/4192) → [#4206](https://github.com/agentscope-ai/QwenPaw/pull/4206)）
- 钉钉引用消息补齐，多渠道体验趋于一致（[#4209](https://github.com/agentscope-ai/QwenPaw/pull/4209)）

---

## 8. 待处理积压

| 类型 | 条目 | 创建时间 | 最后更新 | 风险说明 |
|:---|:---|:---|:---|:---|
| **长期开放 PR** | [#2308](https://github.com/agentscope-ai/QwenPaw/pull/2308) ADBPG 长期记忆 | 2026-03-26 | 2026-05-11 | 近 7 周未合并，企业级记忆持久化需求，可能因 review 资源不足停滞 |
| **长期开放 PR** | [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) Tauri 2.x 桌面端 | 2026-04-24 | 2026-05-11 | Electrobun 替代方案，Under Review 状态，影响桌面版技术栈选型 |
| **待合并关键修复** | [#4224](https://github.com/agentscope-ai/QwenPaw/pull/4224) auto_memory 索引同步 | 2026-05-11 | 2026-05-11 | 今日新提交，修复 #4220 记忆搜索失效，建议优先 review |
| **待合并体验优化** | [#4225](https://github.com/agentscope-ai/QwenPaw/pull/4225) 移动端侧边栏折叠 / [#4226](https://github.com/agentscope-ai/QwenPaw/pull/4226) 简化添加模型流程 | 2026-05-11 | 2026-05-11 | 首次贡献者 aqilaziz 三连 PR，前端体验细节打磨 |
| **开放高影响 Bug** | [#4159](https://github.com/agentscope-ai/QwenPaw/issues/4159) DashScope 401 | 2026-05-09 | 2026-05-11 | 阿里云主力模型渠道无法使用，影响国内用户核心路径 |

---

*本日报基于 GitHub 公开数据生成，链接指向 agentscope-ai/QwenPaw 仓库。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 | 2026-05-12

**项目地址**: [github.com/qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)  
**日期**: 2026-05-12  
**分析范围**: 过去 24 小时（2026-05-11 至 2026-05-12）

---

## 1. 今日速览

ZeptoClaw 今日活跃度处于**低水平维护状态**。过去 24 小时内仅产生 1 条 Issue 关闭记录和 1 条待合并 PR，无新版本发布，社区互动指标（👍、评论数）均处于低位。核心开发工作聚焦于 **Agent 中间件管道架构的第二阶段落地**（PR #583），同时安全审计流程已完成闭环（Issue #584）。整体项目处于**技术债务清偿与架构重构期**，而非功能快速迭代期。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### ✅ 已关闭

| 项目 | 说明 | 推进价值 |
|:---|:---|:---|
| **#584** [chore(security): single-repository deep ai-vulns audit](https://github.com/qhkm/zeptoclaw/issues/584) | 由 `liey1` 执行、维护者关闭的定向安全审计任务 | 完成基于 `role-orchestrator` skill 的漏洞工作流验证，产出 `.codex-audit-work` 工件与共享内存，建立了**证据门控（evidence-gated）的安全发现追踪机制**——包括已接受发现、负向边界与阻塞项的体系化记录 |

**架构意义**: 该 Issue 的关闭标志着项目开始引入**可审计的 AI 辅助安全治理流程**，为后续自动化安全合规奠定基础。

### 🔄 待合并（关键路径）

| 项目 | 说明 | 技术影响 |
|:---|:---|:---|
| **#583** [refactor(agent): wire Pipeline into process_message + CoreLoop (phase 2 of #399)](https://github.com/qhkm/zeptoclaw/pull/583) | 作者 `qhkm`（项目所有者），将 #564 引入的 Agent 中间件管道接入核心消息处理循环 | 新增 `AgentLoop::build_subsystems()`、`build_pipeline_context()`、`build_pipeline()` 三大构造方法；新建 `src/agent/core_loop.rs` 模块，含 `LegacyTerminal` 占位桩（当前返回结构化错误短路） |

**阶段判断**: Phase 2 为**脚手架落地阶段**，`LegacyTerminal` 的短路设计表明：
- 完整终端迁移尚未完成，存在**向后兼容的过渡窗口**
- 错误处理路径已结构化，符合 Rust 的 `Result` 型安全实践
- 依赖 #564 的基础管道抽象，是 #399 长期重构计划的关键链路

> **项目整体迈进**: 今日无用户可见功能交付，但基础设施层面完成安全审计方法论验证 + Agent 核心循环的管道化架构骨架铺设，属于**"修内功"型进展**。

---

## 4. 社区热点

| 热度指标 | 项目 | 分析 |
|:---|:---|:---|
| **评论数最高** (2条) | [#584](https://github.com/qhkm/zeptoclaw/issues/584) | 安全审计 Issue 的评论互动集中于审计范围确认与结果同步，属于**流程性协作**而非技术辩论 |
| **无 👍 反应** | — | 两项更新均未获得社区情绪反馈，表明内容偏向内部维护，未触达外部用户痛点 |

**诉求解读**: 社区当前缺乏围绕用户场景的热烈讨论，项目沟通呈现**维护者驱动、工具链内向**的特征。PR #583 的 `undefined` 评论数（数据异常或零评论）尤其值得关注——核心架构重构缺乏公开的设计评审或 RFC 流程。

---

## 5. Bug 与稳定性

| 级别 | 项目 | 状态 | 说明 |
|:---|:---|:---|:---|
| **信息级** | [#583](https://github.com/qhkm/zeptoclaw/pull/583) 中的 `LegacyTerminal` 短路 | 已知/设计如此 | 占位桩故意返回结构化错误，防止未完成路径被误用；需监控是否影响集成测试通过率 |

**今日无新报 Bug、崩溃或回归问题。**

> 安全审计 #584 的关闭隐含正面信号：未发现需公开追踪的高危漏洞，或发现已按流程内部处理。

---

## 6. 功能请求与路线图信号

| 来源 | 信号 | 纳入可能性 |
|:---|:---|:---|
| **#399 系列** (via #583) | Agent 中间件管道化重构 | **高** — 已进入 Phase 2，由项目所有者直接推进 |
| **#564** (前置 PR) | 管道抽象基础设施 | 已合并，#583 依赖其完成 |
| 安全审计方法论 (#584) | 可复用的 `role-orchestrator` 审计流程 | **中高** — 工具链可能产品化为项目标准工作流 |

**缺失信号**: 今日无外部用户提交的功能请求（Feature Request），路线图完全由维护者技术愿景驱动。

---

## 7. 用户反馈摘要

**今日无可提炼的外部用户反馈。**

- Issue #584 为内部 chore 任务，无用户参与
- PR #583 零评论，无代码评审反馈
- 所有互动限于维护者 `qhkm` 与贡献者 `liey1` 之间

**健康度警示**: 项目处于**单点维护模式**，缺乏多元化的用户声音输入渠道。建议关注：
- 是否有公开的 Discord/Discussion 论坛承载非 Issue 形式的反馈
- `LegacyTerminal` 的迁移是否会影响现有终端用户的交互契约

---

## 8. 待处理积压

| 项目 | 创建时间 | 状态 | 风险提示 |
|:---|:---|:---|:---|
| **#583** [refactor(agent): wire Pipeline...](https://github.com/qhkm/zeptoclaw/pull/583) | 2026-05-11 | **OPEN，待合并** | Phase 2 脚手架已就绪但尚未合入主干；阻塞 #399 后续阶段及依赖管道化的功能开发 |

**维护者行动建议**:
1. **优先合并 #583** 或明确阻塞原因（CI 状态、评审待办、或故意延迟等待配套 PR）
2. 补充 PR 描述中的 `undefined` 评论数字段，完善数据可见性
3. 考虑为 #399 发布路线图更新，降低外部贡献者参与门槛

---

## 附录：数据健康度仪表盘

| 指标 | 数值 | 评估 |
|:---|:---|:---|
| 日 Issue 吞吐量 | 1 关闭 / 0 新建 | ⚠️ 低活跃，但负向问题清零 |
| PR 在途 | 1 开放 | ⚠️ 单点瓶颈风险 |
| 社区反应 (👍) | 0 | 🔴 外部参与度不足 |
| 安全流程成熟度 | 审计闭环 | 🟢 正向信号 |
| 架构重构进度 | Phase 2/≥3 | 🟡 中长期工程，短期无用户感知价值 |

---

*本日报基于 GitHub 公开数据生成，未包含私有仓库、Draft PR 或离线讨论内容。*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-05-12

## 1. 今日速览

ZeroClaw 过去 24 小时保持**高活跃度**：Issues 更新 16 条（10 活跃/新开，6 关闭），PR 更新 48 条（33 待合并，15 已合并/关闭），无新版本发布。社区聚焦于**Provider 生态兼容性修复**（OpenAI-compatible/Gemini/LM Studio）、**Matrix 渠道稳定性**（sdk 升级后烟雾测试）以及**大规模 v0.8.0 集成分支**的推进。文档修复类 PR 密集出现，反映新用户 onboarding 体验仍是摩擦点。整体健康度良好，但高优先级 Bug（P1 对话消息丢失、P2 审计追踪）仍需维护者介入。

---

## 2. 版本发布

**无新版本发布**

- 最新版本仍为 v0.7.5，Homebrew 合并失败问题刚于昨日关闭（[#6547](https://github.com/zeroclaw-labs/zeroclaw/issues/6547)）
- v0.7.6 发布门控：Matrix 渠道烟雾测试 Issue [#6576](https://github.com/zeroclaw-labs/zeroclaw/issues/6576) 已创建，待 matrix-sdk 0.17 升级验证完成后方可推进

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#6570](https://github.com/zeroclaw-labs/zeroclaw/pull/6570) | zwffff | **Docker 文档修正**：镜像仓库指向 GitHub Container Registry (`ghcr.io`)，补充 onboarding 和重新授权步骤 | [#6393](https://github.com/zeroclaw-labs/zeroclaw/issues/6393) |
| [#6505](https://github.com/zeroclaw-labs/zeroclaw/pull/6505) | ilteoood | **Cron 任务表 UX 修复**：表头对齐、Job ID 完整显示、CSS 截断替代字符串切片 | [#6504](https://github.com/zeroclaw-labs/zeroclaw/issues/6504) |
| [#6513](https://github.com/zeroclaw-labs/zeroclaw/pull/6513) | yanalialiuk | **新增 Atomic Chat 本地 Provider**：通过 OpenAI-compatible 路径接入，默认端点 `127.0.0.1:1337` | - |

### 关键推进中的 PR

| PR | 规模 | 意义 |
|:---|:---|:---|
| [#6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398) **Integration/v0.8.0** | XL | **项目里程碑**：Schema v3 迁移、多模块协调合并，明确标注 "DO NOT APPROVE/MERGE - STILL A DRAFT" |
| [#6572](https://github.com/zeroclaw-labs/zeroclaw/pull/6572) | L | Discord 媒体收发闭环：附件单次下载、多类型支持、转录统一 |
| [#6297](https://github.com/zeroclaw-labs/zeroclaw/pull/6297) | L | WhatsApp 渠道增强：投票/交互事件暴露 + `Channel::send_choice` 统一 API |

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| Issue | 评论 | 核心诉求 | 状态 |
|:---|:---|:---|:---|
| [#4083](https://github.com/zeroclaw-labs/zeroclaw/issues/4083) Web search 工具在 Telegram 渠道失效 | 5 | **工具权限的上下文一致性**：agent 模式可用，channel 模式不可用，用户期望"启用后全模式通用" | ✅ 已关闭 |
| [#6530](https://github.com/zeroclaw-labs/zeroclaw/issues/6530) matrix-sdk v0.16.0 递归限制溢出 | 5 | **Rust 编译稳定性**：channel-matrix feature 构建失败，需 sdk 升级 + 编译参数调整 | ✅ 已关闭 |
| [#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) 单轮/多轮对话丢失 user message | 4 | **生产级可靠性**：P1 优先级，自定义 Provider (Qwen3.5-35B) 400 Bad Request，对话中断 | 🔴 开放 |

### 热点分析

- **#4083 关闭但根因未完全消除**：问题标记为 tooling/ci，实际涉及工具在渠道层的注册逻辑，类似问题可能在其他渠道复现
- **#6034 是今日最大风险**：高优先级 + 高严重程度（S1），4 条评论但未出现 maintainer 指派或 fix PR，用户 lazy-hs 持续更新复现信息

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR 状态 |
|:---|:---|:---|:---|
| **S1 - workflow blocked** | [#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) | 对话丢失 user message，自定义 Provider 400 错误 | ❌ 无 Fix PR |
| **S2 - degraded behavior** | [#6589](https://github.com/zeroclaw-labs/zeroclaw/issues/6589) | `RouterProvider::supports_vision()` 与 `supports_native_tools()` 逻辑不一致，多模态回退静默失效 | ❌ 无 Fix PR |
| **S2 - degraded behavior** | [#6584](https://github.com/zeroclaw-labs/zeroclaw/issues/6584) | OpenAI-compatible Provider 忽略 `reasoning` 字段，仅读 `reasoning_content` | ✅ [#6587](https://github.com/zeroclaw-labs/zeroclaw/pull/6587) 已开 |
| **S2 - degraded behavior** | [#6561](https://github.com/zeroclaw-labs/zeroclaw/issues/6561) | Gateway 非回环 `--host` 恢复提示与 admin guard 冲突 | ❌ 无 Fix PR |
| **S3 - minor issue** | [#6393](https://github.com/zeroclaw-labs/zeroclaw/issues/6393) | Docker 安装文档错误（官网 + GitHub） | ✅ [#6570](https://github.com/zeroclaw-labs/zeroclaw/pull/6570) 已合并 |

### 今日新报 Bug（5-11 创建）

- [#6589](https://github.com/zeroclaw-labs/zeroclaw/issues/6589): 路由层多模态能力检测不一致
- [#6584](https://github.com/zeroclaw-labs/zeroclaw/issues/6584): OpenAI-compatible reasoning 字段兼容
- [#6574](https://github.com/zeroclaw-labs/zeroclaw/issues/6574): 无 vision 路径时图片消息用户体验差

---

## 6. 功能请求与路线图信号

| Feature | 风险等级 | 与现有 PR 关联 | 纳入 v0.8.0 可能性 |
|:---|:---|:---|:---|
| **SearXNG 搜索支持 + DuckDuckGo CAPTCHA 检测** | High | [#5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) Issue + [#6582](https://github.com/zeroclaw-labs/zeroclaw/pull/6582) DuckDuckGo 403 检测 PR | ⭐⭐⭐ 高：隐私搜索是差异化卖点 |
| **ComfyUI/Comfy Cloud 媒体生成 Provider** | High | [#6563](https://github.com/zeroclaw-labs/zeroclaw/issues/6563) | ⭐⭐ 中：需评估与现有媒体架构耦合度 |
| **Matrix 实时 homeserver 烟雾测试** | Low | [#6576](https://github.com/zeroclaw-labs/zeroclaw/issues/6576) | ⭐⭐⭐⭐ 极高：v0.7.6 发布门控 |
| **Telegram 工具审批消息状态反馈** | Medium | [#6565](https://github.com/zeroclaw-labs/zeroclaw/issues/6565) | ⭐⭐⭐ 高：UX 细节，实现成本低 |
| **图片消息无 vision 路径时可配置行为** | - | [#6574](https://github.com/zeroclaw-labs/zeroclaw/issues/6574) | ⭐⭐ 中：需设计配置语义 |

### 关键信号

- **#6074 审计追踪**：153 commits 被批量回滚后的恢复追踪，直接影响 v0.8.0 代码完整性，需 maintainer 优先级处理
- **Provider 生态扩张**：Atomic Chat、LM Studio、Gemini、OpenRouter/vLLM 兼容性修复密集，显示项目正向"任意模型即插即用"演进

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 | 情绪 |
|:---|:---|:---|
| "Docker install 全是错的" — 中文用户发现官网和 GitHub 文档双重错误 | [#6393](https://github.com/zeroclaw-labs/zeroclaw/issues/6393) | 😤 沮丧 |
| "官网也是 zeroclaw 的官网吗" — 品牌/域名信任危机 | [#6393](https://github.com/zeroclaw-labs/zeroclaw/issues/6393) | 😕 困惑 |
| "TTS voice replies are silently disabled" — 功能静默失效无提示 | [#6588](https://github.com/zeroclaw-labs/zeroclaw/pull/6588) | 😶 无感知 |
| "error string is surfaced to the end user channel" — 内部错误直接暴露给用户 | [#6574](https://github.com/zeroclaw-labs/zeroclaw/issues/6574) | 😤 专业感缺失 |

### 满意点

- 社区响应速度：[#6530](https://github.com/zeroclaw-labs/zeroclaw/issues/6530) matrix-sdk 构建问题 3 天内关闭
- 文档修复及时：[#6570](https://github.com/zeroclaw-labs/zeroclaw/pull/6570) 从报告到合并约 6 天

---

## 8. 待处理积压

### 需 Maintainer 紧急关注

| 项目 | 创建时间 | 阻塞原因 | 行动建议 |
|:---|:---|:---|:---|
| [#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) 对话消息丢失 | 2026-04-23 | P1 + S1，4 条评论无指派，用户持续复现 | 指派核心维护者，关联 Provider 运行时日志分析 |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) 153 commits 恢复审计 | 2026-04-24 | v0.8.0 代码完整性风险，仅 2 条评论 | 建立恢复清单，与 #6398 集成分支协调 |
| [#5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) SearXNG 支持 | 2026-04-05 | High risk + needs-maintainer-review，2 条评论 | 评估与 #6582 DuckDuckGo 修复的协同，或拆分落地 |
| [#4944](https://github.com/zeroclaw-labs/zeroclaw/pull/4944) 工具包装器重构 | 2026-03-28 | needs-author-action，停滞 6 周 | 确认作者可用性，或社区接管 |

### 长期沉默风险

- [#5120](https://github.com/zeroclaw-labs/zeroclaw/pull/5120) append-only markdown backend 清理拒绝（3-29 创建，最后一次更新 5-11，无评论无合并）

---

*日报生成时间：2026-05-12 | 数据来源：ZeroClaw GitHub 公开活动*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*