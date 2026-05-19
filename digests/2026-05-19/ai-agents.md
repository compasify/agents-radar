# OpenClaw 生态日报 2026-05-19

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-19 00:26 UTC

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

# OpenClaw 项目动态日报 | 2026-05-19

---

## 1. 今日速览

OpenClaw 今日维持极高活跃度，24小时内 **500 条 Issues**（441 新开/活跃，59 关闭）与 **500 条 PR**（446 待合并，54 已合并/关闭）的双高数据表明社区处于密集开发周期。5 个新版本连续发布显示发布节奏紧凑，但大量 PR 仍处于 `needs-real-behavior-proof` 等待验证状态，合并漏斗存在瓶颈。核心关注点集中在 **Codex 插件生态修复**、**多通道消息投递可靠性** 及 **会话状态一致性** 三大主题，同时内存管理（RSS 泄漏、僵尸会话）问题在今日获得关键修复。

---

## 2. 版本发布

### v2026.5.19-beta.1 | [Release 链接](https://github.com/openclaw/openclaw/releases/tag/v2026.5.19-beta.1)
> 最新 beta 版本，包含代理架构规范澄清与依赖升级

| 变更项 | 详情 | 影响评估 |
|:---|:---|:---|
| **Agents 架构规范** | 修复应默认采用"干净的有界重构、精简内部实现、显式插件 SDK/API 弃用路径" | 🔶 破坏性：影响第三方插件开发规范 |
| **依赖升级** | `@openclaw/proxyline` → 0.3.3；Pi packages → 0.75.1 | 🟢 安全更新 |
| **Node.js 最低版本** | 提升至 Node.js 22 系列（具体版本未完整显示） | 🔶 破坏性：需验证部署环境 |

### v2026.5.18 | [Release 链接](https://github.com/openclaw/openclaw/releases/tag/v2026.5.18)
> 稳定版，变更内容与 beta.1 一致

### v2026.5.16-beta.7 / beta.6 | [Release 链接](https://github.com/openclaw/openclaw/releases/tag/v2026.5.16-beta.7)
| 变更项 | 详情 |
|:---|:---|
| **Docker/Podman 构建** | 新增 `OPENCLAW_IMAGE_APT_PACKAGES` 运行时中立构建参数，替代旧方案 |
| **Mac 应用设置页** | 全面重设计置页面：统一卡片布局、缓存导航、更清晰的权限/语音/技能/定时任务/执行/调试面板 |

**迁移注意事项**：Node.js 22 最低版本要求可能影响使用旧 LTS 的生产环境；`OPENCLAW_IMAGE_APT_PACKAGES` 为新增构建参数，旧 `CLAW_*` 前缀参数将逐步弃用。

---

## 3. 项目进展

### 已合并/关闭的关键 PR（54 条中的高价值项）

| PR | 作者 | 核心贡献 | 状态 |
|:---|:---|:---|:---|
| [#83821](https://github.com/openclaw/openclaw/pull/83821) | RomneyDa | **修复 iOS PWA 推送**：将默认 VAPID subject 从 `mailto:openclaw@localhost` 改为 `https://openclaw.ai`，解决 Apple Web Push 403 拒绝 | ✅ 已关闭 |
| [#83752](https://github.com/openclaw/openclaw/issues/83752) | brokemac79 | **网关 RSS 内存泄漏修复**：Telegram Active Memory 全上下文预检导致的 RSS 从 1.6GB 降至 450MB，确认修复有效 | ✅ 已关闭 |
| [#82858](https://github.com/openclaw/openclaw/issues/82858) | Piste | **Discord 分块发送修复**：`sendDurableMessageBatch` 在 2026.5.12 引入的回归问题，静默丢弃分块 | ✅ 已关闭 |
| [#49692](https://github.com/openclaw/openclaw/issues/49692) | skillz-xx | **网关优雅重启 UX 改进**：更友好的 drain 消息 + 自动重试未处理消息 | ✅ 已关闭 |
| [#44353](https://github.com/openclaw/openclaw/issues/44353) | lucca-alma | **模型回退机制修复**：AWS Bedrock 模型 ID 变更等提供商级错误现在触发 fallback | ✅ 已关闭 |

### 整体推进评估

| 维度 | 进展 | 阻塞 |
|:---|:---|:---|
| **可靠性** | ⬆️ 高：内存泄漏、消息丢失、分块发送等核心问题获修复 | 大量 PR 等待行为验证证明 |
| **Codex 生态** | ➡️ 中：3 个关键 PR 待合并（插件绑定、工具认证、回复保留） | 需维护者审核队列 |
| **多通道适配** | ➡️ 中：Feishu、Mattermost、Telegram 修复 PR 密集但均未合并 | 缺乏端到端测试验证 |
| **开发者体验** | ⬆️ 高：Doctor 命令结构化、VAPID 默认修复、zh-TW 本地化完成 | — |

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 | 标签信号 |
|:---|:---|:---:|:---|:---|
| 1 | [#48788](https://github.com/openclaw/openclaw/issues/48788) 集中式文件名编码工具 | 17 | 多编码 Content-Disposition 处理架构化，超越 Feishu 单点修复 | `impact:data-loss`, `needs-product-decision` |
| 2 | [#48183](https://github.com/openclaw/openclaw/issues/48183) Feishu 监控状态内存泄漏 | 17 | httpServers Map 清理不完整，关闭后未等待完全释放 | `impact:message-loss`, `source-repro` |
| 3 | [#50090](https://github.com/openclaw/openclaw/issues/50090) 社区技能开发与 ClawHub 生态 | 14 | 技能注册表分散、版本混乱、缺乏治理，呼吁中心化生态 | `impact:security`, `needs-product-decision` |
| 4 | [#45740](https://github.com/openclaw/openclaw/issues/45740) gh-issues 技能提示注入漏洞 | 12 | 原始 issue body 直接注入子代理提示，无隔离/消毒 | `impact:security`, `needs-security-review` |
| 5 | [#44925](https://github.com/openclaw/openclaw/issues/44925) 子代理完成静默丢失 | 12 | 超时无重试、无通知、无自动重启，任务状态不可靠 | `impact:session-state`, `impact:message-loss` |

### 背后诉求分析

> **架构债务 vs 功能扩展的张力**：社区在 #48788、#50090 中反复呼吁"不要做单点修复，要做架构级解决方案"，但维护者标签显示 `clawsweeper:no-new-fix-pr`（禁止新修复 PR）与 `needs-product-decision` 并存，表明产品决策层对重大架构变更持保守态度。

> **安全与便利的冲突**：#45740（提示注入）、#83018（沙箱嵌套）、#45031（技能安全扫描）显示社区强烈关注 AI 代理的安全边界，但安全审查标签 `needs-security-review` 长期挂起，可能成为生态扩展的瓶颈。

---

## 5. Bug 与稳定性

### P1 严重级别（生产影响）

| Issue | 症状 | 状态 | Fix PR |
|:---|:---|:---|:---:|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) 子代理完成静默丢失 | 超时无重试、无通知、任务结果消失 | 🔴 开放，高讨论 | ❌ 无 |
| [#39476](https://github.com/openclaw/openclaw/issues/39476) A2A sessions_send 双向调用导致重复消息 | 目标代理回调发送方，消息重复 | 🔴 开放 | ❌ 无 |
| [#83018](https://github.com/openclaw/openclaw/issues/83018) Codex 内层沙箱与 Docker 沙箱冲突 | 嵌套沙箱启动失败，bwrap  inside Docker | 🔴 开放，昨日新建 | ❌ 无 |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) write 工具缺乏追加模式 | 定时任务隔离会话覆盖共享文件，数据丢失 | 🔴 开放 | ❌ 无 |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) Steer 模式未向主会话注入消息 | 消息排队至回合结束，非实时干预 | 🔴 开放，有 PR 链接 | 🔗 #52278 相关 |
| [#43661](https://github.com/openclaw/openclaw/issues/43661) 压缩超时导致会话无限挂起 | 重复发送相同消息，无恢复机制 | 🔴 开放 | ❌ 无 |
| [#49876](https://github.com/openclaw/openclaw/issues/49876) 定时任务工具失败时产生幻觉输出 | 伪造可信输出而非干净失败 | 🔴 开放 | ❌ 无 |
| [#51593](https://github.com/openclaw/openclaw/issues/51593) moonshot/kimi-k2.5 工具调用 ID 重复崩溃 | WhatsApp 群聊中 HTTP 400 崩溃 | 🔴 开放，昨日更新 | ❌ 无 |
| [#51396](https://github.com/openclaw/openclaw/issues/51396) clearUnboundScopes 无条件剥离操作员作用域 | 令牌认证客户端无法 chat.send | 🔴 开放，回归问题 | ❌ 无 |
| [#45494](https://github.com/openclaw/openclaw/issues/45494) 定时任务在 LLM 故障时静默超时 | 未快速失败，耗尽完整超时窗口 | 🔴 开放 | ❌ 无 |

### P2 重要级别（功能影响）

| Issue | 症状 | 状态 | Fix PR |
|:---|:---|:---|:---:|
| [#51429](https://github.com/openclaw/openclaw/issues/51429) 工作路径硬编码 `/Users/wangtao` | 安装后创建他人目录为工作区 | 🟡 开放，高关注度 | ❌ 无 |
| [#51871](https://github.com/openclaw/openclaw/issues/51871) Control UI 不显示定时任务 | 页面空白，jobs.json 有数据 | 🟡 开放，昨日更新 | ❌ 无 |
| [#43747](https://github.com/openclaw/openclaw/issues/43747) 内存管理混乱 | 不同用户行为不一致，chunk/embedding/SQLite 路径各异 | 🟡 开放，回归 | ❌ 无 |
| [#45698](https://github.com/openclaw/openclaw/issues/45698) Control UI 渐进式卡死 | 打开一段时间后无响应 | 🟡 开放，`needs-info` | ❌ 无 |

### 今日已修复

| Issue | 修复内容 | 验证状态 |
|:---|:---|:---|
| [#83752](https://github.com/openclaw/openclaw/issues/83752) | 网关 RSS 泄漏：Telegram Active Memory 预检优化 | ✅ 现场验证，RSS 从 1.6GB → 450MB |
| [#82858](https://github.com/openclaw/openclaw/issues/82858) | Discord `sendDurableMessageBatch` 分块静默丢弃 | ✅ 已合并 |

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 热度 | 可行性信号 | 版本预测 |
|:---|:---|:---:|:---|:---|
| **按技能路由模型** | [#43260](https://github.com/openclaw/openclaw/issues/43260) | 9 评论 | 有架构需求，但 `needs-product-decision` | 2026.Q3 |
| **网关级代理成本预算** | [#42475](https://github.com/openclaw/openclaw/issues/42475) | 11 评论 | 与现有 `session-cost-usage.ts` 可集成 | 2026.Q3 |
| **技能优先级配置** | [#50199](https://github.com/openclaw/openclaw/issues/50199) | 7 评论 | 需求明确，但重叠技能问题需先治理 | 2026.Q4 |
| **预重置代理记忆刷新** | [#45608](https://github.com/openclaw/openclaw/issues/45608) | 8 评论，3 👍 | 复用现有 `runMemoryFlushIfNeeded` 机制 | **2026.6 可能** |
| **系统事件优先/绕过队列** | [#50739](https://github.com/openclaw/openclaw/issues/50739) | 6 评论 | 可靠性关键，有具体场景 | **2026.6 可能** |
| **多会话架构 RFC** | [#48874](https://github.com/openclaw/openclaw/issues/48874) | 6 评论 | 架构级变更，长期讨论 | 2027 |
| **SearXNG 搜索提供商** | PR [#52207](https://github.com/openclaw/openclaw/pull/52207) | 待合并 | 隐私导向需求高，PR 已提供 | **2026.6 可能** |

### 已有关键 PR 待合并

| PR | 功能 | 状态 | 风险标签 |
|:---|:---|:---|:---|
| [#52207](https://github.com/openclaw/openclaw/pull/52207) | SearXNG 提供商 + Tavily 新鲜度支持 | 📣 needs proof | 兼容性、认证、安全边界 |
| [#52012](https://github.com/openclaw/openclaw/pull/52012) | 压缩模型回退配置 | 📣 needs proof | 兼容性、认证、会话状态 |
| [#83753](https://github.com/openclaw/openclaw/pull/83753) | Doctor 命令结构化维护检查 | 👀 维护者审核中 | 兼容性、可用性 |

---

## 7. 用户反馈摘要

### 🔴 核心痛点

> **"任务完成状态不可信"** — 多位用户报告子代理/定时任务"显示完成但实际未完成"（#44925、#50165、#49876），直接影响自动化工作流的可靠性

> **"内存管理像黑箱"** — #43747 中三位用户同一版本三种不同内存行为，缺乏可预测性

> **"嵌套沙箱启动失败"** — #83018 用户描述 Codex 在 Docker 内尝试启动 bwrap 沙箱的典型云原生部署痛点

### 🟡 体验摩擦

> **"安装后创建了别人的工作目录"** — #51429 的 `/Users/wangtao` 硬编码问题引发社区对代码审查流程的质疑

> **"Control UI 和 TUI 显示不一致"** — #77136 WebChat 消息"消失"但 TUI 正常，前端渲染可靠性存疑

> **"文档超前于发布"** — #48920 用户按文档配置 `IsolatedSessions` 但版本不支持，信任损耗

### 🟢 积极信号

> **"内存泄漏修复验证有效"** — #83752 报告者确认 RSS 从 1.6GB 降至 450MB，社区对快速响应表示认可

> **"Doctor 命令改进期待"** — #83753 的结构化健康检查获 `platinum hermit` 评级，运维体验持续优化

---

## 8. 待处理积压

### 长期未响应的高价值 Issue（提醒维护者关注）

| Issue | 创建日期 | 最后更新 | 阻塞原因 | 行动建议 |
|:---|:---:|:---:|:---|:---|
| [#43367](https://github.com/openclaw/openclaw/issues/43367) 多代理编排不稳定 | 2026-03-11 | 2026-05-18 | `needs-live-repro`, `needs-product-decision` | 提供最小复现模板，或降级为已知限制文档化 |
| [#45740](https://github.com/openclaw/openclaw/issues/45740) gh-issues 技能提示注入 | 2026-03-14 | 2026-05-18 | `needs-security-review` 长期挂起 | 安全团队专项审查，或社区安全专家介入 |
| [#50090](https://github.com/openclaw/openclaw/issues/50090) ClawHub 生态治理 | 2026-03-19 | 2026-05-18 | `needs-product-decision`, `needs-security-review` | 产品路线图公开，或成立社区治理工作组 |
| [#43260](https://github.com/openclaw/openclaw/issues/43260) 按技能模型路由 | 2026-03-11 | 2026-05-18 | `needs-product-decision` | 与 #50199 技能优先级合并评估 |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) 网关成本预算 | 2026-03-10 | 2026-05-18 | `needs-product-decision` | 企业用户场景收集，推动产品决策 |

### PR 合并瓶颈

> **446 条待合并 PR** 中大量标记 `📣 needs proof`（需要真实行为证明），反映项目测试基础设施或社区验证文化存在瓶颈。建议：
> - 优先合并已有 `proof: sufficient` 且 `👀 ready for maintainer look` 的 PR（如 #83807、#83603、#83753）
> - 对 `needs-real-behavior-proof` 建立自动化测试沙箱或社区众测机制

---

*日报生成时间：2026-05-19 | 数据来源：OpenClaw GitHub 仓库公开数据*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析 | 2026-05-19

---

## 1. 生态全景

个人 AI 助手开源生态正处于**"从原型验证向生产可靠性跃迁"**的关键拐点。头部项目（OpenClaw、ZeroClaw、IronClaw）日均 Issues/PR 双高（50+），但合并率普遍低于健康阈值（14%-20%），反映**贡献活跃与审查带宽的严重错配**。安全加固成为跨项目共识——CSPRNG、命令注入防护、提示隔离等 PR 密集涌现，AI Agent 的攻击面正从理论风险转为工程优先事项。与此同时，**记忆系统、多通道适配、流式传输**构成三大技术深水区，各项目解法分化明显。

---

## 2. 各项目活跃度对比

| 项目 | Issues (活跃/关闭) | PR (待合并/已处理) | 今日 Release | 合并率 | 健康度评估 |
|:---|:---|:---|:---|:---:|:---|
| **OpenClaw** | 441 / 59 | 446 / 54 | v2026.5.19-beta.1 等 5 个 | 10.8% | 🔶 **高压活跃**：双 500 吞吐量但合并漏斗瓶颈严重，`needs-real-behavior-proof` 标签泛滥 |
| **NanoBot** | 5 / 2 | 11 / 10 | 无 | 47.6% | 🟢 **高效迭代**：合并率健康，图像生成基础设施快速扩张，用户痛点响应待加强 |
| **Hermes Agent** | 44 / 6 | 43 / 7 | 无 | 14.0% | 🔴 **回归危机**：v0.14.0 引入 4 个 P1 Bug，审查瓶颈 + 稳定性双重承压 |
| **PicoClaw** | 5 / 3 | 18 / 8 | v0.2.8-nightly | 30.8% | 🟢 **敏捷修复**：Seahorse 预算漏洞当日闭环，但 11/18 PR 标记 stale |
| **NanoClaw** | 4 / 0 | 29 / 6 | v2.0.64 | 17.1% | 🟡 **安全冲刺**：3 个 P0 安全 PR 待审，SSL 证书过期 52 天损害品牌 |
| **NullClaw** | 1 / 0 | 1 / 0 | 无 | 0% | 🟢 **低维护稳态**：Zig 语言小众生态，Windows DNS 修复待合并 |
| **IronClaw** | 34 / 2 | 32 / 15 | 无（CI 就绪 0.28.2） | 31.9% | 🟡 **架构迁移期**：Reborn 基础设施密集落地，但 crates.io 发布阻塞 14 天 |
| **LobsterAI** | 0 / 0 | 6 / 12 | 2026.5.18 | 66.7% | 🟢 **内部驱动**：发布节奏快，但 Issues 零活动、PR 评论 undefined，外部社区薄弱 |
| **Moltis** | 1 / 7 | 2 / 6 | 20260518.01 | 75.0% | 🟢 **债务清理日**：Hook 系统回归当日修复发版，但 Feature Request 零互动 |
| **CoPaw** | 19 / 12 | 16 / 7 | v1.1.8-beta.1 | 30.4% | 🟡 **稳定性攻坚**：#4487 根治全局限流假死，但 RCE 漏洞 48 小时无响应 |
| **ZeroClaw** | 15 / 11 | 42 / 8 | 无 | 16.0% | 🟡 **功能扩张**：技能系统 + 平台支持双线推进，CI 故障与 42 PR 积压叠加 |
| **TinyClaw** | — | — | — | — | ⚪ **休眠** |
| **ZeptoClaw** | — | — | — | — | ⚪ **休眠** |

> **合并率健康阈值**：>25% 为健康，14-25% 为承压，<14% 为危机。

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 表现 | 生态对比 |
|:---|:---|:---|
| **规模** | 日双 500 Issues/PR，绝对量级第一 | ZeroClaw（50+）、IronClaw（47+）次之，差距约 10 倍 |
| **优势** | **多通道适配最完整**（Telegram/Discord/Feishu/WhatsApp/Mattermost 全覆盖）；**Codex 插件生态**深度绑定；内存泄漏等硬核问题修复验证充分（#83752 RSS 1.6GB→450MB 现场数据） | NanoBot 图像生成 Provider 扩展快，但通道单一；Hermes 多平台网关但稳定性差 |
| **技术路线差异** | **"网关中心"架构**：消息投递、会话状态、成本追踪集中治理，强调跨通道一致性 | ZeroClaw "技能中心"（SkillForge 严格 schema）；IronClaw "Reborn 事件流"（EventStreamManager 投影快照）；Moltis "Hook 驱动"（事件拦截修改） |
| **社区模式** | **企业级治理**：`clawsweeper:no-new-fix-pr` 标签显示产品决策层对架构变更保守，安全审查 `needs-security-review` 长期挂起 | PicoClaw/Moltis 维护者个人响应快（penso 当日 6 PR）；LobsterAI 纯内部驱动 |
| **核心风险** | **验证文化瓶颈**：446 待合并 PR 中大量 `needs-real-behavior-proof`，自动化测试基础设施滞后于贡献速度 | NanoClaw 类似（29 待审），但安全 PR 优先级清晰 |

**定位总结**：OpenClaw 是生态中**"最像基础设施公司"**的项目——规模庞大、治理规范、多通道覆盖全面，但创新节奏受产品决策层节制，社区贡献者面临"高门槛验证"摩擦。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 信号强度 |
|:---|:---|:---|:---:|
| **记忆系统可控化** | OpenClaw (#44925 子代理静默丢失)、PicoClaw (#2894 Seahorse 预算漏洞)、NullClaw (#919 FTS5 强制召回)、NanoBot (#3885 Dream 系统不可关闭) | 从"黑盒自动"到**显式预算/开关/分层**：记忆召回需可配置、可观测、可限制 | 🔥🔥🔥🔥🔥 |
| **安全边界硬化** | NanoClaw (#2545 CSPRNG, #2538 命令注入)、CoPaw (#4470 RCE 漏洞)、OpenClaw (#45740 提示注入)、ZeroClaw (#6729 Agent 能力标志) | **输入消毒、沙箱隔离、凭证脱敏、能力最小化**从可选变为必需 | 🔥🔥🔥🔥🔥 |
| **流式传输全链路** | PicoClaw (#2892, #2853 双 PR)、IronClaw (#3761 EventStreamManager)、OpenClaw (#48003 Steer 模式消息排队) | 实时反馈、进度可见、中断恢复，替代"生成后一次性交付" | 🔥🔥🔥🔥 |
| **多通道适配可靠性** | OpenClaw (Feishu/Discord/Telegram 修复密集)、CoPaw (#4477 微信 iLink 失败)、NanoBot (#3863 微信登录阻断)、ZeroClaw (#6724 Channels supervisor 崩溃) | 消息**不丢失、不重复、不静默失败**，端到端状态一致性 | 🔥🔥🔥🔥 |
| **长上下文成本管理** | LobsterAI (#2001 2M 窗口 + #752 /compact 压缩)、OpenClaw (#42475 网关成本预算)、ZeroClaw (#6661 WebSocket 流保留) | **大窗口 + 智能压缩 + 成本追踪**三位一体 | 🔥🔥🔥 |
| **自定义/私有化端点** | NanoClaw (#1984 OpenAI 兼容端点)、ZeroClaw (#6558 DashScope 405)、Hermes (#15895 Gemini 配额误判) | 企业数据不出域，但"兼容层"质量参差不齐 | 🔥🔥🔥 |
| **诊断/可观测性** | Hermes (#28223 doctor 命令)、OpenClaw (#83753 Doctor 结构化)、ZeroClaw (#6756 doctor 忽略 api_key) | "重启无效"场景下，用户需要**自服务诊断**而非提 Issue | 🔥🔥🔥 |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户 | 技术架构关键差异 |
|:---|:---|:---|:---|
| **OpenClaw** | 多通道消息中枢 + Codex 插件生态 | 企业级部署、需要统一消息网关的团队 | Node.js/TypeScript，网关集中式，强调"行为验证"文化 |
| **NanoBot** | 多模态生成（图像/文本）+ 开放 Provider 扩展 | 开发者、需要快速接入新模型的技术用户 | Python，AgentRunner 重构中，Provider Registry 模式解决扩展性 |
| **Hermes Agent** | CLI/TUI 优先的本地 Agent + 竞品迁移 | 个人开发者、从 Claude Code/Cursor 迁移的用户 | Python，"Caelus"模型路由层，但 v0.14.0 重构引入稳定性危机 |
| **PicoClaw** | 嵌入式/边缘部署 + 生物启发记忆 | 低资源硬件、RISC-V/TrueNAS 场景 | Go，Seahorse 记忆系统，本土化（SiliconFlow）优先 |
| **NanoClaw** | 容器化 Agent 网络 + ACP 协议 | 需要多 Agent 编排的云原生用户 | Elixir/Erlang VM，分布式会话状态，审批流即时同步 |
| **NullClaw** | 极简可控 Agent + Zig 性能 | 系统编程爱好者、内存敏感场景 | Zig，FTS5 记忆硬编码，追求"可审计的简单" |
| **IronClaw** | TEE 可信执行 + Reborn 产品工作流 | 高安全要求企业、NEAR AI 生态 | Rust，EventStreamManager + 持久化账本，架构最重 |
| **LobsterAI** | 中文本土化 + 网易生态集成 | 中文用户、POPO/有道生态企业 | TypeScript/Electron，内部迭代驱动，外部社区薄弱 |
| **Moltis** | Hook 事件拦截 + 小模型精确控制 | 成本敏感的生产部署、需要工具路由可控性 | Elixir，Hook 系统为核心扩展机制，fail-fast 配置文化 |
| **CoPaw** | 自主任务执行（Plan Mode）+ 微信生态 | 中文个人用户、需要自动化工作流 | Python/TypeScript，Plan reaffirm 机制，LLM 限流精细化 |
| **ZeroClaw** | 技能生态（SkillForge）+ 跨平台运行时 | 多技能组合开发者、BSD/边缘服务器用户 | Rust，strict schema 技能系统，Morph/Gemini 编码优化 |

---

## 6. 社区热度与成熟度

### 活跃度分层

| 层级 | 项目 | 特征 |
|:---|:---|:---|
| **🔥 超活跃·高压期** | OpenClaw、ZeroClaw、IronClaw | 日 30+ PR，合并率 <20%，架构迁移或功能扩张中，审查债务累积 |
| **⚡ 活跃·高效期** | NanoBot、PicoClaw、Moltis、CoPaw | 日 10-20 PR，合并率 30-75%，聚焦特定技术债务或稳定性修复 |
| **🌱 活跃·瓶颈期** | NanoClaw、Hermes Agent | 安全/回归危机与审查队列叠加，需优先级重组 |
| **💤 低活跃·稳态** | NullClaw、LobsterAI | 日 <2 活动，前者小众语言生态，后者内部驱动外部沉默 |
| **🚫 休眠** | TinyClaw、ZeptoClaw | 24 小时零活动 |

### 成熟度阶段

| 阶段 | 项目 | 标志 |
|:---|:---|:---|
| **质量巩固期** | Moltis、PicoClaw | 当日 Bug 当日发版，Hook/记忆系统技术债务快速清理 |
| **架构迁移期** | IronClaw（Reborn）、NanoBot（AgentRunner 重构） | 大规模内部重构，测试覆盖追赶中 |
| **功能扩张期** | ZeroClaw（技能系统）、NanoBot（图像生成） | Provider/平台/工具快速叠加，底层抽象滞后 |
| **稳定性修复期** | OpenClaw、CoPaw、Hermes Agent | P0/P1 Bug 密集，用户"任务完成不可信"反馈集中 |
| **生态培育期** | LobsterAI、NullClaw | 外部贡献机制薄弱，依赖核心团队或几乎无社区 |

---

## 7. 值得关注的趋势信号

### 信号一：**"确定性完成"取代"生成即结束"**

> *"模型生成了文本就算完成？我需要验证实际结果"* — Hermes #28056

CoPaw Plan Mode、Hermes 质量门控、OpenClaw 子代理状态追踪，共同指向**Agent 执行需要从"概率性输出"转向"契约式完成"**。对开发者的价值：设计 Agent 时需显式定义完成证据（exit code、断言、人工确认），而非依赖 LLM 自判。

### 信号二：**记忆系统的"预算制"革命**

PicoClaw Seahorse 预算漏洞（32 条消息完全豁免）、NullClaw FTS5 强制召回不可禁用、NanoBot Dream 系统"关不掉的 telemetry"，揭示同一范式冲突：**默认全量记忆 = 性能/成本/隐私的三重损耗**。下一代 Agent 架构需支持**按轮次/按技能/按成本的精细记忆预算**。

### 信号三：**"伪兼容"陷阱——OpenAI API 不是银弹**

ZeroClaw #6558（DashScope 405）、NanoClaw #1984（自定义端点文档缺失）、Hermes #15895（Gemini 配额误判），共同暴露 **"OpenAI-compatible" 标签的欺骗性**。实际集成中，路径拼接、`/v1` 重复、`extra_headers` 处理、流式事件解析均有差异。建议：将 Provider 适配层视为**一等工程问题**，而非配置项。

### 信号四：**诊断工具成为采纳门槛**

OpenClaw Doctor 结构化、Hermes `hermes doctor` 呼声、ZeroClaw `doctor` 忽略 api_key 的 Bug，显示 **"重启无效"场景下用户自服务能力直接决定留存**。Agent 项目需内置健康检查、配置验证、连接测试、日志导出（IronClaw Ctrl-S 日志）的完整工具链。

### 信号五：**中文模型生态的"兼容层质量"决定亚太市场**

Qwen（ZeroClaw #6558、CoPaw #4489）、GLM（ZeroClaw #6643）、MiniMax（NanoBot #3879、ZeroClaw #6758）、SiliconFlow（PicoClaw #2885）密集出现，但**每家的流式协议、错误码、工具调用格式均有微妙差异**。对开发者的价值：若目标亚太市场，需预留 20-30% 工程资源在 Provider 适配层，而非假设"兼容即工作"。

---

*分析基于 2026-05-19 各项目 GitHub 公开数据 | 适合技术决策者评估项目健康度、开发者选择技术栈参考*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-05-19

> **项目**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot)  
> **分析日期**: 2026-05-19（基于过去24小时数据）  
> **数据周期**: 2026-05-18 至 2026-05-19

---

## 1. 今日速览

NanoBot 今日保持**高活跃度开发节奏**，21个PR更新（10个已合并/关闭）显示核心团队推进效率强劲。图像生成模块成为今日技术焦点，MiniMax、Gemini两大新Provider相继合入，同时底层架构开始引入Provider Registry模式以解决扩展性问题。WebUI/部署体验持续优化，但微信登录等用户-facing Bug仍未修复。社区侧，用户开始自发构建生态插件（Mnemon持久记忆），显示项目外围生态萌芽。整体健康度：**开发活跃，用户痛点响应需加强**。

---

## 2. 版本发布

**无新版本发布**

> 最新版本仍为 v0.15 post 3（据 Issue #3863 用户报告）。今日10个PR合并未触发版本发布，可能处于版本迭代间隙期。

---

## 3. 项目进展

### ✅ 已合并/关闭的重要 PR（10个）

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#3892](https://github.com/HKUDS/nanobot/pull/3892) | chengyongru | **AgentRunner.run() 重构**：330行单体方法拆分为9个聚焦方法，引入`RunContext`和`LoopAction`枚举 | 🏗️ **架构债务偿还**：核心执行引擎可读性大幅提升，为后续Agent并行、调试工具奠定基础 |
| [#3900](https://github.com/HKUDS/nanobot/pull/3900) | Re-bin | **新增 Ant Ling Provider**：OpenAI兼容API的一等公民支持 | 🌐 生态扩展：减少用户自定义配置摩擦 |
| [#3899](https://github.com/HKUDS/nanobot/pull/3899) | Re-bin | **WebUI实时文件编辑活动流**：`write_file`/`edit_file`/`notebook_edit`事件 + 流式参数增量 | 🎨 可观测性突破：解决"Agent黑盒操作"用户痛点 |
| [#3886](https://github.com/HKUDS/nanobot/pull/3886) | zayfod | **Gemini图像生成支持**：Imagen 4 + Gemini Flash双端点 | 🖼️ 多模态能力补齐，Google生态用户覆盖 |
| [#3879](https://github.com/HKUDS/nanobot/pull/3879) | yaotutu | **MiniMax图像生成支持**：`image-01`模型 + 参考图能力 | 🖼️ 国产模型生态接入 |
| [#3890](https://github.com/HKUDS/nanobot/pull/3890) | chengyongru | **CLI模型预设向导**：交互式CRUD界面，从废弃PR #3696 复活 | 🧑‍💻 新手 onboarding 体验优化 |
| [#3889](https://github.com/HKUDS/nanobot/pull/3889) | chengyongru | **Markdown单换行渲染修复**：`remark-breaks`插件 | 🐛 `/help`等命令输出可读性修复 |
| [#3875](https://github.com/HKUDS/nanobot/pull/3875) | algojogacor | **Docker文档补全**：WebUI配置要求 + bwrap安全标志 | 📚 解决 #3873 部署陷阱，降低容器化门槛 |
| [#3897](https://github.com/HKUDS/nanobot/pull/3897) | SaiAkashNeela | `Vision`（无描述，已关闭） | — |
| [#3883](https://github.com/HKUDS/nanobot/pull/3883) | AZX-Eddie | `feat(cli): add model configuration management commands`（标记[invalid]关闭） | — 功能与 #3890 重复/冲突？ |

### 📊 今日合并主题聚类
```
图像生成基础设施 ████████░░ 40% (Gemini/MiniMax/Registry)
WebUI/部署体验   █████░░░░░ 25% (实时活动/换行渲染/Docker文档)
开发者体验       ███░░░░░░░ 15% (CLI向导/Agent重构)
Provider生态     ██░░░░░░░░ 10% (Ant Ling)
```

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issue：[#3863 微信不能Login](https://github.com/HKUDS/nanobot/issues/3863)
| 指标 | 数据 |
|:---|:---|
| 评论数 | **5**（今日最高）|
| 创建 | 2026-05-16 | 更新 | 2026-05-18 |
| 状态 | **OPEN**，👍 0 |

**用户诉求分析**：微信生态接入是中文用户核心场景，但"WeChat版本过低"错误提示表明NanoBot的微信登录协议可能落后于微信客户端更新。该Issue已存在3天未获维护者响应，存在**用户流失风险**。

> 对比：同类社交接入（如X API）也有问题 [#3901](https://github.com/HKUDS/nanobot/issues/3901)，但微信问题影响面更广。

### 🔥 最具生态信号的讨论：[#3888 Mnemon持久记忆集成](https://github.com/HKUDS/nanobot/issues/3888)
- 虽为CLOSED（推广性质），但反映**社区自发填补官方能力缺口**
- NanoBot原生记忆机制（Dream系统）正受质疑（见 [#3885](https://github.com/HKUDS/nanobot/issues/3885)），第三方方案趁机切入

### 🔥 技术债务焦点：[#3903 image generation followups](https://github.com/HKUDS/nanobot/issues/3903)
- 由 #3893 作者自开，列出**2项架构级问题**：MIME类型硬编码、HTTP客户端绕过基类
- 显示图像生成模块快速扩张中的**技术债务累积**

---

## 5. Bug 与稳定性

| 优先级 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **P0-用户阻断** | [#3863](https://github.com/HKUDS/nanobot/issues/3863) | 微信登录完全不可用（"版本过低"）| OPEN 3天 | ❌ 无 |
| 🟡 **P1-功能异常** | [#3901](https://github.com/HKUDS/nanobot/issues/3901) | X API定时任务陷入工具调用循环，达最大迭代次数 | OPEN | ❌ 无 |
| 🟡 **P1-架构缺陷** | [#3903](https://github.com/HKUDS/nanobot/issues/3903) | MiniMax/AIHubMix图像生成：MIME硬编码 + HTTP客户端绕过基类 | OPEN | 🔄 [#3893](https://github.com/HKUDS/nanobot/pull/3893) 部分覆盖 |
| 🟢 **P2-部署摩擦** | [#3873](https://github.com/HKUDS/nanobot/issues/3873) | Docker文档与v0.2.0不一致（WebUI/bwrap/反向代理）| **CLOSED** | ✅ [#3875](https://github.com/HKUDS/nanobot/pull/3875) |

**稳定性评估**：核心执行引擎因 #3892 重构获得长期健康度提升，但**外部集成脆弱性突出**（微信协议过时、X API流控逻辑缺陷）。图像生成模块存在"快速功能叠加、底层抽象滞后"风险。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 成熟度 | 纳入下一版本概率 |
|:---|:---|:---|:---|
| **Dream系统全局开关** | [#3885](https://github.com/HKUDS/nanobot/issues/3885) | 有明确方案（`enabled`布尔字段），社区已+1 | **高** ⭐ |
| **危险命令用户授权机制** | [#3887](https://github.com/HKUDS/nanobot/issues/3887) | 需求清晰，与现有`deny_patterns`硬编码冲突 | 中高 |
| **图像生成Provider Registry** | [#3893](https://github.com/HKUDS/nanobot/pull/3893) | PR已开，解决"改8个文件加Provider"痛点 | **高** ⭐（已开）|
| **受限模式工具隔离** | [#3898](https://github.com/HKUDS/nanobot/pull/3898) | PR已开，安全加固方向 | 中 |
| **skill_load工具防内容丢失** | [#3847](https://github.com/HKUDS/nanobot/pull/3847) | 待合并，多轮对话关键修复 | 中高 |

**路线图信号**：
- **安全加固**成为显性主题：#3887（授权）、#3898（受限模式）、#3892（Agent重构降低bug面）
- **多模态基础设施**进入平台期：Provider Registry (#3893) 是"从加法到乘法"的关键转折

---

## 7. 用户反馈摘要

### 😫 核心痛点

| 痛点 | 来源 | 典型场景 |
|:---|:---|:---|
| **微信生态断裂** | [#3863](https://github.com/HKUDS/nanobot/issues/3863) 评论 | "QR code弹出，WeChat一扫就说版本低"——中文用户主力入口失效 |
| **记忆系统不可控** | [#3885](https://github.com/HKUDS/nanobot/issues/3885) | 禁用memory后Dream作业仍后台运行，"感觉像关不掉的telemetry" |
| **部署黑魔法** | [#3873](https://github.com/HKUDS/nanobot/issues/3873) | Docker+WebUI+bwrap组合需要读源码才能配通 |
| **Agent操作不可见** | 间接（#3899 修复方向）| 文件编辑等关键动作无实时反馈，用户焦虑 |

### 😊 满意点
- **生态开放性**：用户能自发集成Mnemon等第三方方案（[#3888](https://github.com/HKUDS/nanobot/issues/3888)）
- **Provider扩展速度**：Ant Ling、Gemini、MiniMax等快速接入

### 💡 隐含需求
> "希望添加明确的配置开关，让人可以选择**完全不注册**Dream系统作业" —— [#3885](https://github.com/HKUDS/nanobot/issues/3885)

用户要的不是"更多配置"，而是**确定性的控制感**。当前系统过于"智能自动"，反而引发不信任。

---

## 8. 待处理积压

### ⏳ 长期未响应的高价值PR

| PR | 创建 | 最后更新 | 风险 | 建议动作 |
|:---|:---|:---|:---|:---|
| [#3621](https://github.com/HKUDS/nanobot/pull/3621) HF Spaces多角色部署 | 2026-05-04 | 2026-05-18 | **15天未决**，生产环境验证已完成 | 需维护者明确合并标准或拆分 |
| [#3568](https://github.com/HKUDS/nanobot/pull/3568) Manifest LLM Router | 2026-04-30 | 2026-05-18 | **19天未决**，网关型Provider模式 | 与 #3893 Registry 重构存在依赖关系，需协调 |
| [#3643](https://github.com/HKUDS/nanobot/pull/3643) 七牛云Provider | 2026-05-06 | 2026-05-18 | **13天未决**，国产云厂商 | 测试覆盖完整，可能卡在review带宽 |
| [#3762](https://github.com/HKUDS/nanobot/pull/3762) Codex失败重试 | 2026-05-12 | 2026-05-18 | **7天未决**，稳定性修复 | 作者标注[question]，需维护者澄清设计 |

### ⏳ 用户-facing Bug未响应

| Issue | 天数 | 影响 |
|:---|:---|:---|
| [#3863](https://github.com/HKUDS/nanobot/issues/3863) 微信登录 | **3天** | 中文用户核心入口 |
| [#3901](https://github.com/HKUDS/nanobot/issues/3901) X API循环 | **1天** | 社交媒体自动化场景 |

---

## 附录：今日数据仪表盘

```
Issues  ████████░░░░░░░░░░░░  7条 (5活跃/2关闭)
PRs     ████████████████████ 21条 (11待合并/10已处理)
Releases ░░░░░░░░░░░░░░░░░░░░  0个
评论热点 #3863(5) > #3888(1) = #3885(1) = #3873(1)
```

> **维护建议**：优先响应 #3863 微信登录问题（用户增长阻断），加速 #3893 图像生成Registry合并（技术债务遏制），为 #3621/#3568 等长期PR设定明确的review deadline。

---

*日报生成时间: 2026-05-19*  
*数据来源: GitHub API / HKUDS/nanobot*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-05-19

---

## 1. 今日速览

Hermes Agent 今日呈现**高活跃度、高积压特征**。过去24小时内 Issues 与 PR 各更新 50 条，但合并/关闭比例偏低（Issues 仅关闭 6/50，PR 仅合并 7/50），表明社区贡献活跃但代码审查吞吐存在瓶颈。v0.14.0 发布仅3天即暴露多处关键回归（P1 级 Bug 4 个），尤其是 `conversation_loop.py` 的 `NameError` 和 Anthropic 流式处理挂起问题，显示 v0.14.0 重构引入的稳定性风险正在集中释放。无新版本发布，维护团队重心明显转向紧急修复。

---

## 2. 版本发布

**无新版本发布。**

当前最新版本仍为 **v0.14.0 (2026-05-16)**，但该版本已成为今日多个 P1 级回归 Bug 的源头。

---

## 3. 项目进展

### 已合并/关闭的重要 PR（7 条）

| PR | 类型 | 说明 | 链接 |
|:---|:---|:---|:---|
| #28257 | ❌ CLOSED | `feat: add dry-run model routing preview` — Caelus 模型层级推荐策略的 dry-run 预览，因安全/范围评审未通过被关闭 | [PR #28257](https://github.com/NousResearch/hermes-agent/pull/28257) |
| #23854 | ❌ CLOSED | `feat(cli): add /update slash command to CLI and TUI` — 将 `/update` 从 gateway_only 扩展至 CLI/TUI，提升更新便利性 | [PR #23854](https://github.com/NousResearch/hermes-agent/pull/23854) |
| #28247 | ❌ CLOSED | `Add redacted credential wrapper` — 凭证脱敏包装器，安全强化 PR 被关闭（原因未明，可能待重构） | [PR #28247](https://github.com/NousResearch/hermes-agent/pull/28247) |

> **注**：7 条已合并/关闭 PR 中仅 3 条在展示列表中，其余 4 条未进入 Top 20 评论榜单。今日合并率 14%（7/50），低于健康项目的 25-30% 阈值，**审查瓶颈显著**。

### 推进中的关键方向

| 方向 | 代表 PR | 状态 |
|:---|:---|:---|
| 会话生命周期治理 | #27029, #28255 | 修复 CLI/TUI 会话泄漏，数据库行残留问题 |
| MCP 生态完整性 | #22148 | 修复 wheel 构建遗漏 `mcp_serve` 模块（NixOS 可用性） |
| 平台适配健壮性 | #28261 (Discord), #28259 (Telegram) | 延迟加载、回归测试覆盖 |
| 跨平台 ACP 安全 | #28262 | macOS/Windows 的 workspace 自动审批修复 |

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---|:---|
| **#15895** google-gemini-cli 429 配额误判 | **13 评论** | 用户持有有效 Gemini Pro 配额（`/gquotas` 确认），但 OAuth 模式持续触发 429，怀疑 Hermes 的速率限制逻辑与 Google 配额系统不同步 | [Issue #15895](https://github.com/NousResearch/hermes-agent/issues/15895) |
| **#7746** qwen-oauth JSON 刷新失败 | **5 评论** | 同一凭证文件在 `qwen-code-api` 正常工作，Hermes 却解析失败，**跨工具凭证兼容性**成痛点 | [Issue #7746](https://github.com/NousResearch/hermes-agent/issues/7746) |
| **#23799** OpenClaw 舰队重复生成 + MCP 孤儿进程 | **5 评论** | 双向工具调用场景下的**内存泄漏与进程治理**缺陷，影响长期运行稳定性 | [Issue #23799](https://github.com/NousResearch/hermes-agent/issues/23799) |
| **#28056** 运行中质量门控与有界重试 | **4 评论** | 企业级自动化场景（安全巡检、合规检查）需要**确定性完成标准**，而非模型"生成即结束" | [Issue #28056](https://github.com/NousResearch/hermes-agent/issues/28056) |
| **#524** Agent 迁移系统（竞品导入）| **4 评论** | **降低迁移成本**的顶层需求——从 Claude Code/Codex/Cursor 等一键导入配置、密钥、MCP 服务器 | [Issue #524](https://github.com/NousResearch/hermes-agent/issues/524) |

### 热点分析

- **#15895** 的 13 评论热度反映 **Google OAuth 路径的可靠性危机**：用户无法区分"Google 限流"与"Hermes 误判"，诊断工具缺失。
- **#524** 持续获得关注（3个月老 Issue），说明 Hermes 正处于**用户增长窗口期**，竞品迁移体验直接影响留存。

---

## 5. Bug 与稳定性

### P1（严重）— 需立即处理

| Issue | 描述 | 影响 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|
| **#27370** | `conversation_loop.py` `NameError: '_pool_may_recover_from_rate_limit'` | v0.14.0 重构提取文件时遗漏导入，速率限制回退路径崩溃 | **#28254** (duplicate), **#27374** | [Issue #27370](https://github.com/NousResearch/hermes-agent/issues/27370) |
| **#27555** | vision `fallback_chain` 静默失效 — 错误 kwargs 导致 `TypeError` 被吞 | 视觉模型故障时无降级，用户体验为"功能突然消失" | 暂无 | [Issue #27555](https://github.com/NousResearch/hermes-agent/issues/27555) |
| **#28161** | Anthropic 流式清理路径错误调用 `_replace_primary_openai_client`，导致 15 分钟挂起 | Anthropic 原生用户遭遇假死，严重损害交互体验 | 暂无 | [Issue #28161](https://github.com/NousResearch/hermes-agent/issues/28161) |
| **#28153** | Telegram 群组回复派生 thread ID 错配，人工交接"done"回复路由至错误会话 | 多会话场景下人类接管流程断裂 | 暂无 | [Issue #28153](https://github.com/NousResearch/hermes-agent/issues/28153) |

### P2（重要）

| Issue | 描述 | Fix PR | 链接 |
|:---|:---|:---|:---|
| **#28181** | Kanban worker SIGTERM 后僵尸状态，任务锁永不释放 | 暂无 | [Issue #28181](https://github.com/NousResearch/hermes-agent/issues/28181) |
| **#28250** | xAI Grok OAuth token 24h 过期，辅助标题生成 403 | 暂无 | [Issue #28250](https://github.com/NousResearch/hermes-agent/issues/28250) |
| **#28260** | 自签名 HTTPS 自定义 provider 因 SSL 验证失败 | 暂无 | [Issue #28260](https://github.com/NousResearch/hermes-agent/issues/28260) |
| **#16560** | `shell=True` 命令注入漏洞（安全） | 暂无 | [Issue #16560](https://github.com/NousResearch/hermes-agent/issues/16560) |

### P3（一般）

- **#28103** Teal Large 主题模态框层级错误
- **#28140** 空凭证池条目导致 provider 误显示为已认证
- **#28141** `install.ps1` Windows 安装器参数块解析错误
- **#28135** macOS gateway 更新后 launchd 服务未重启

> **v0.14.0 回归风险评估**：4 个 P1 中 2 个直接源于 `053025238` 提交（`conversation_loop.py` 提取重构），**代码重构的测试覆盖不足**。

---

## 6. 功能请求与路线图信号

| Issue/PR | 功能 | 纳入可能性评估 | 链接 |
|:---|:---|:---|:---|
| **#28056** 运行中质量门控 | cron/agent 任务的显式完成标准与有界重试 | ⭐⭐⭐⭐⭐ **高** — 企业自动化刚需，与现有 cron/kanban 组件耦合 | [Issue #28056](https://github.com/NousResearch/hermes-agent/issues/28056) |
| **#524** Agent 迁移系统 | 竞品配置一键导入 | ⭐⭐⭐⭐⭐ **高** — 用户增长关键，3个月持续活跃 | [Issue #524](https://github.com/NousResearch/hermes-agent/issues/524) |
| **#28223** `hermes doctor` 诊断命令 | 一键系统健康检查 | ⭐⭐⭐⭐☆ **中高** — 降低支持成本，社区呼声明确 | [Issue #28223](https://github.com/NousResearch/hermes-agent/issues/28223) |
| **#28204** Gateway 工具使用加固 | skill 预加载、循环守卫恢复、路径解析文档 | ⭐⭐⭐⭐☆ **中高** — 内部团队提出的系统性改进 | [Issue #28204](https://github.com/NousResearch/hermes-agent/issues/28204) |
| **#23445** `/rewind` 回溯重提示 | 类 Claude Code 双 Esc 行为 | ⭐⭐⭐⭐☆ **中高** — PR 已开，交互体验优化 | [PR #23445](https://github.com/NousResearch/hermes-agent/pull/23445) |
| **#28253** Nebius Token Factory provider | 新模型提供商接入 | ⭐⭐⭐☆☆ **中** — 插件化接入成本低，已提交 PR | [PR #28253](https://github.com/NousResearch/hermes-agent/pull/28253) |
| **#19331** source-bound cognee 查询工具 | 隔离数据集只读查询 | ⭐⭐⭐☆☆ **中** — 记忆系统扩展，PR 已开 | [PR #19331](https://github.com/NousResearch/hermes-agent/pull/19331) |

---

## 7. 用户反馈摘要

### 核心痛点

| 主题 | 典型反馈 | 来源 |
|:---|:---|:---|
| **OAuth 可靠性** | "Gemini 配额正常但 Hermes 报 429，无法区分是谁的问题" | #15895 |
| **凭证管理碎片化** | "同一台机器 qwen-code-api 能用，Hermes 不能" | #7746 |
| **v0.14.0 稳定性** | "升级后遇到 NameError，回退路径直接崩溃" | #27370 |
| **长期运行治理** | "OpenClaw 每次调用都重新生成子进程，内存爆炸" | #23799 |
| **企业自动化确定性** | "模型生成了文本就算完成？我需要验证实际结果" | #28056 |
| **视觉降级失效** | "Gemini 503 时不触发 fallback，功能直接消失" | #25822, #27555 |

### 满意点

- **SSH Tunnel 模式** 存在且能连接（尽管 `sessions.patch` 实现缺失 #27455）
- **多平台网关**（Telegram/Discord/WhatsApp/WeCom）持续迭代

### 不满意点

- **诊断工具缺失**："silent failures invisible at default log level" (#28223)
- **Windows 体验**：PowerShell 安装器、路径处理持续出问题
- **主题/UI 细节**：Teal Large 主题模态框层级错误 (#28103)

---

## 8. 待处理积压

### ⚠️ 长期未响应的高价值 Issue

| Issue | 创建日期 | 天数 | 风险 | 链接 |
|:---|:---|:---|:---|:---|
| **#7069** 本地 LLM 预填充阶段流超时无限重试 | 2026-04-10 | **39 天** | 本地部署核心体验断裂，👍 2 | [Issue #7069](https://github.com/NousResearch/hermes-agent/issues/7069) |
| **#6204** Telegram 需额外"just do it"才执行指令 | 2026-04-08 | **41 天** | 交互信任损耗，平台适配深层问题 | [Issue #6204](https://github.com/NousResearch/hermes-agent/issues/6204) |
| **#524** Agent 迁移系统 | 2026-03-06 | **74 天** | 用户增长关键，持续活跃但无里程碑 | [Issue #524](https://github.com/NousResearch/hermes-agent/issues/524) |

### 审查瓶颈提醒

- **#22148** MCP wheel 构建修复（5月9日）— **10 天未合并**，影响 NixOS 用户基础可用性
- **#18310** TUI fallback provider 链保留（5月1日）— **18 天未合并**，可靠性修复
- **#27029** 会话泄漏修复（5月16日）— **3 天，需加速审查**，与 #28255 存在潜在冲突需协调

---

## 附录：项目健康度仪表盘

| 指标 | 数值 | 健康阈值 | 状态 |
|:---|:---|:---|:---|
| 日 Issues 更新 | 50 | — | 🟡 高活跃 |
| Issues 关闭率 | 12% (6/50) | >30% | 🔴 偏低 |
| PR 合并率 | 14% (7/50) | >25% | 🔴 偏低 |
| P1 Bug 数量 | 4 | 0-1 | 🔴 紧急 |
| 无 Fix PR 的 P1 | 2/4 | 0 | 🔴 需立即分配 |
| 长期积压 (>30天) | 3 | 0 | 🟡 需清理 |

---

*日报生成时间：2026-05-19 | 数据来源：GitHub API 与公开 Issue/PR 元数据*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-05-19

## 1. 今日速览

PicoClaw 项目今日保持**高活跃度**，24小时内产生 **26 个 PR 更新**（含 18 个待合并）和 **8 个 Issues 更新**（5 个新开/活跃）。核心亮点包括：**Seahorse 记忆系统预算控制漏洞被紧急修复**（#2894→#2895）、**SiliconFlow 原生提供商支持落地**（#2885 已合并）、**流式传输能力**成为今日 PR 集中攻关方向（3 个相关 PR）。社区对嵌入式部署（RISC-V、Yocto）和即时通讯渠道扩展（Telegram Business/Guest、Server酱³）的需求显著增长，项目正从"功能补齐"向"生产环境稳定性"阶段过渡。

---

## 2. 版本发布

### 🔖 Nightly Build: v0.2.8-nightly.20260518.0df050ff

| 属性 | 详情 |
|:---|:---|
| **版本号** | `v0.2.8-nightly.20260518.0df050ff` |
| **构建时间** | 2026-05-18 |
| **稳定性** | ⚠️ 自动化构建，可能不稳定 |
| **完整变更** | [v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main) |

**关键变更预览**（基于 main 分支累积）：
- SiliconFlow 原生提供商支持（#2885）
- 聊天 UI 代码块独立复制/折叠控制（#2882）
- 聊天详情可见性四态选择器（#2886）
- Seahorse 记忆系统预算强制修复（#2895， nightly 构建后合并）

**迁移注意事项**：nightly 构建包含未充分测试的流式传输重构代码，生产环境建议等待 `v0.2.9` 正式版。

---

## 3. 项目进展

### ✅ 今日合并/关闭的重要 PR

| PR | 作者 | 说明 | 项目推进 |
|:---|:---|:---|:---|
| [#2885](https://github.com/sipeed/picoclaw/pull/2885) | lc6464 | **SiliconFlow 原生提供商支持** — 从 OpenAI-compatible 模式升级为一级提供商，覆盖后端工厂、模型获取 API、请求归一化、Web 注册表 | 降低国内用户配置门槛，完善提供商生态 |
| [#2882](https://github.com/sipeed/picoclaw/pull/2882) | lc6464 | **聊天代码块独立复制/折叠控制** — 助手/用户消息复用复制流，工具调用参数块 JSON 高亮 | Web UI 体验精细化，开发者场景友好度↑ |
| [#2886](https://github.com/sipeed/picoclaw/pull/2886) | lc6464 | **聊天详情可见性四态选择器** — 推理/工具调用显示状态从布尔值迁移为四态枚举（均不显示/仅推理/仅工具/均显示），浏览器偏好存储迁移 | 解决信息密度与可读性的长期矛盾 |
| [#2895](https://github.com/sipeed/picoclaw/pull/2895) | afjcjsbx | **Seahorse 预算强制修复** — 修复 FreshTail 32 条消息完全绕过预算限制的致命漏洞 | **阻塞性 Bug 解除**，记忆系统生产可用性关键一步 |

**整体评估**：今日合并聚焦 **"国内生态适配"**（SiliconFlow）和 **"交互体验打磨"**（UI 控件），配合 Seahorse 核心漏洞修复，项目在 **AI Agent 记忆可靠性** 和 **本土化部署** 两条主线上取得实质进展。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 👍 | 核心诉求分析 |
|:---|:---|:---:|:---:|:---|
| 1 | [#1919](https://github.com/sipeed/picoclaw/issues/1919) Seahorse 生物启发记忆系统 | 11 | 0 | **长期技术愿景讨论** — 社区对"类人记忆"架构的高度兴趣，虽今日关闭，但催生了 #2894/#2895 等工程化落地，显示"大议题→具体 Bug"的转化路径 |
| 2 | [#2674](https://github.com/sipeed/picoclaw/issues/2674) Codex OAuth 空响应 Bug | 4 | 4 | **企业集成痛点** — ChatGPT backend 的 `response.output_item.done` 流式事件处理失败，影响 OpenAI 官方 Codex 接入，👍 数高表明波及面广 |
| 3 | [#2796](https://github.com/sipeed/picoclaw/issues/2796) 历史记录多用户消息丢失 | 3 | 0 | **基础体验缺陷** — 消息压缩逻辑错误地作用于用户可见层，而非仅 LLM 上下文层，"应该完整显示"的反馈直指设计哲学冲突 |

**背后诉求洞察**：社区正从"能跑通"转向"跑得稳"，**流式协议兼容性**（#2674）、**状态一致性**（#2796）、**内存预算安全性**（#2894）成为新焦点，反映生产环境部署比例上升。

---

## 5. Bug 与稳定性

### 🐛 今日报告 Bug（按严重程度排列）

| 严重度 | Issue | 状态 | 说明 | Fix PR |
|:---|:---|:---|:---|:---:|
| 🔴 **P0-阻塞** | [#2894](https://github.com/sipeed/picoclaw/issues/2894) Seahorse FreshTail 绕过预算限制 | 新报 | 32 条最新消息完全豁免预算，导致 400 BadRequestError 超出上下文窗口 | ✅ [#2895](https://github.com/sipeed/picoclaw/pull/2895) |
| 🟡 **P1-严重** | [#2887](https://github.com/sipeed/picoclaw/issues/2887) RISC-V .deb 版 OpenAI 模型不可用 | 新报 | Debian RISC-V 架构下 `gpt-5.4` 模型功能异常，嵌入式场景受阻 | ❌ 无 |
| 🟡 **P1-严重** | [#2674](https://github.com/sipeed/picoclaw/issues/2674) Codex OAuth 空响应 | 活跃 | ChatGPT backend 流式事件 `response.output_item.done` 解析失败 | ❌ 无 |
| 🟢 **P2-一般** | [#2796](https://github.com/sipeed/picoclaw/issues/2796) 历史记录仅显示最后一条用户消息 | 活跃 | 消息压缩逻辑泄漏至 UI 层 | ❌ 无 |
| 🟢 **P2-一般** | [#2878](https://github.com/sipeed/picoclaw/issues/2878) `load_image` 无法通过 config.json 配置 | **已关闭** | 工具注册逻辑硬编码，配置系统未覆盖 | ✅ 已修复（关闭） |

**稳定性评估**：Seahorse 预算漏洞的**当日发现-当日修复**（#2894→#2895）显示核心模块响应敏捷，但 RISC-V 架构支持和 Codex 协议兼容性存在**平台级盲区**，需专项测试覆盖。

---

## 6. 功能请求与路线图信号

### 📋 用户新功能需求与纳入可能性评估

| 需求 | Issue/PR | 类型 | 纳入下一版本可能性 | 判断依据 |
|:---|:---|:---|:---:|:---|
| **流式传输全链路支持** | [#2892](https://github.com/sipeed/picoclaw/pull/2892), [#2853](https://github.com/sipeed/picoclaw/pull/2853) | 基础设施 | ⭐⭐⭐⭐⭐ **极高** | 双 PR 同日提交，覆盖通用代理流式资格判定 + pico 渠道 WebSocket 实时推送，架构设计完整 |
| **Server酱³ Bot 渠道** | [#2893](https://github.com/sipeed/picoclaw/pull/2893) | 渠道扩展 | ⭐⭐⭐⭐☆ **高** | 国内通知生态补全，实现完整（轮询+Webhook），与现有渠道模式一致 |
| **Telegram Business/Guest 模式** | [#2845](https://github.com/sipeed/picoclaw/pull/2845), [#2849](https://github.com/sipeed/picoclaw/pull/2849) | 渠道扩展 | ⭐⭐⭐⭐☆ **高** | 商业场景刚需，PR 已挂起多日，需维护者评审 |
| **同 Agent 最终轮渲染** | [#2843](https://github.com/sipeed/picoclaw/issues/2843)→[#2844](https://github.com/sipeed/picoclaw/pull/2844) | Agent 体验 | ⭐⭐⭐☆☆ **中** | 实验性功能，需配置开启， steering-heavy 场景优化，可能作为预览功能 |
| **出厂设置重置** | [#2891](https://github.com/sipeed/picoclaw/pull/2891) | 运维工具 | ⭐⭐⭐⭐☆ **高** | 版本兼容性痛点明确，实现包含配置备份+凭证保留，安全设计周到 |
| **Yocto 嵌入式层** | [#2851](https://github.com/sipeed/picoclaw/pull/2851) | 生态 | ⭐⭐⭐☆☆ **中** | 社区贡献文档层，非核心代码，可作为生态链接纳入 |
| **MCP 动态请求头** | [#2696](https://github.com/sipeed/picoclaw/pull/2696) | 协议扩展 | ⭐⭐⭐⭐☆ **高** | 企业认证场景必需，设计通过 `context.Context` 透传，工程成熟 |

**路线图信号**：`v0.2.9` 极可能以 **"流式传输 + 国内生态 + 运维安全"** 为主题，嵌入式（RISC-V/Yocto）或成为 `v0.3.0` 重点。

---

## 7. 用户反馈摘要

### 😤 痛点

> *"消息压缩应该是针对大模型的，对用户显示的历史消息应该完整"* — [#2796](https://github.com/sipeed/picoclaw/issues/2796)  
> **核心矛盾**：系统优化逻辑（压缩省 token）与用户体验逻辑（信息完整性）的边界模糊，用户不信任"黑盒"压缩。

> *"只能使用 openai compatible mode 连接 siliconflow，不方便配置"* — [#2884](https://github.com/sipeed/picoclaw/issues/2884)  
> **迁移前痛点**：国内主流服务商需"借壳"配置，模型发现、价格策略、特性支持均受限于兼容层抽象泄漏。

> *"config files become incompatible between software versions"* — [#2891](https://github.com/sipeed/picoclaw/pull/2891)  
> **运维恐惧**：升级导致配置失效，无安全回退路径，阻碍版本跟进。

### 😊 满意/期待

> *"Since PicoClaw is perfect for low-resource hardware"* — [#2851](https://github.com/sipeed/picoclaw/pull/2851)  
> **定位认同**：嵌入式/边缘场景的用户主动贡献，验证项目差异化价值。

> *"human-like memory system — short-term for lossless context compaction"* — [#1919](https://github.com/sipeed/picoclaw/issues/1919)  
> **愿景共鸣**：生物启发架构获得技术社区长期关注（11 评论），虽关闭但精神延续。

---

## 8. 待处理积压

### ⚠️ 长期未响应的重要项（提醒维护者）

| 项 | 创建时间 | 最后更新 | 风险 | 行动建议 |
|:---|:---|:---|:---|:---|
| [#2239](https://github.com/sipeed/picoclaw/pull/2239) Docker Compose privileged 模式 | 2026-04-01 | 2026-05-18 | **47天挂起** | 嵌入式硬件权限需求明确，需决策是否纳入官方 compose 模板 |
| [#2551](https://github.com/sipeed/picoclaw/pull/2551) 渠道标识标准化重构 | 2026-04-16 | 2026-05-18 | **33天挂起，影响多实例部署** | 阻塞 Telegram Business/Guest、飞书多实例等 PR 的干净合并，建议优先评审 |
| [#2750](https://github.com/sipeed/picoclaw/pull/2750) / [#2826](https://github.com/sipeed/picoclaw/pull/2826) exec 工具路径安全双 PR | 2026-05-02/08 | 2026-05-18 | **功能重复，社区贡献者冲突** | 两个 PR 解决同一问题（#2749），需维护者裁定合并哪一个，避免贡献者挫败感 |
| [#2845](https://github.com/sipeed/picoclaw/pull/2845) / [#2849](https://github.com/sipeed/picoclaw/pull/2849) Telegram Business/Guest | 2026-05-10/11 | 2026-05-18 | **8-9天挂起，商业场景刚需** | 同作者（stolyarchuk）连续贡献，建议打包评审 |
| [#2844](https://github.com/sipeed/picoclaw/pull/2844) / [#2840](https://github.com/sipeed/picoclaw/pull/2840) steering-heavy 渲染优化双 PR | 2026-05-09/10 | 2026-05-18 | **依赖关系复杂** | #2840 修复消息发送方式，#2844 添加最终轮渲染模式，建议按序合并 |

**健康度警示**：18 个待合并 PR 中 **11 个标记 stale**，累积评审债务可能抑制社区贡献积极性。建议本周集中处理渠道标识标准化（#2551）以解锁下游 PR 队列。

---

*日报生成时间：2026-05-19 | 数据来源：GitHub API 快照 | 项目地址：[sipeed/picoclaw](https://github.com/sipeed/picoclaw)*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-05-19

> **项目**: [nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw) | **日期**: 2026-05-19 | **分析师**: AI 智能体开源项目分析

---

## 1. 今日速览

NanoClaw 今日呈现**高活跃度开发态势**：24小时内 35 个 PR 更新（29 个待审），4 个 Issues 活跃，并发布了 v2.0.64 补丁版本。核心主题集中在**安全加固**（CSPRNG、OS 命令注入防护）、**基础设施韧性**（webhook 绑定策略、端口配置、数据库一致性）以及**新协议扩展**（ACP Client Protocol）。社区对 WhatsApp LID 加密和自定义 OpenAI 端点的需求持续升温，SSL 证书运维问题仍未解决。整体健康度：**活跃但审阅队列承压**，29 个待合并 PR 提示维护者需关注审阅带宽。

---

## 2. 版本发布

### [v2.0.64](https://github.com/nanocoai/nanoclaw/releases/tag/v2.0.64) | 补丁版本 | 2026-05-18

| 属性 | 内容 |
|:---|:---|
| **类型** | Bug 修复（关键运行时修复） |
| **破坏性变更** | 无 |
| **迁移注意** | 无需操作；已部署实例自动生效 |

**核心变更**：
- **`ncl destinations add/remove` 审批流即时生效修复** ([#2510](https://github.com/nanocoai/nanoclaw/pull/2510), 修复 [#2465](https://github.com/nanocoai/nanoclaw/issues/2465))

**技术细节**：此前通过审批流添加的目标地址（destinations）未被投影到接收代理的本地会话状态，导致新添加的目标在 `send_message` 时静默失败并返回 `unknown destination`。此修复确保审批后的目标状态立即同步至接收端，消除了"审批通过但消息投递失败"的幽灵故障。

> 📎 变更日志 PR: [#2536](https://github.com/nanocoai/nanoclaw/pull/2536)（已合并）

---

## 3. 项目进展

### 今日合并/关闭的关键 PR（6 项）

| PR | 作者 | 状态 | 推进领域 |
|:---|:---|:---|:---|
| [#2536](https://github.com/nanocoai/nanoclaw/pull/2536) `docs(changelog): add v2.0.64 entry` | glifocat | ✅ **已合并** | 发布流程规范化 |
| [#2533](https://github.com/nanocoai/nanoclaw/issues/2533) 关联修复 | danshapiro | ✅ **已关闭** | 会话状态一致性（见下方 Issue） |
| [#1310](https://github.com/nanocoai/nanoclaw/pull/1310) `docs: add credentials and environment variables guide` | evenisse | ❌ **已关闭** | 运维文档（未合并，可能因内容重叠或方向调整） |
| [#867](https://github.com/nanocoai/nanoclaw/pull/867) `fix: allow scheduled-task agents to send_message to their task output JID` | perweum | ❌ **已关闭** | 定时任务代理消息路由（长期悬停后关闭，可能方案替代） |
| [#2375](https://github.com/nanocoai/nanoclaw/pull/2375) `fix(sessions): exclude per-thread sessions from agent-shared lookup` | ira-at-work | ❌ **已关闭** | 会话隔离性修复（可能以其他 PR 实现） |

**整体进展评估**：今日以"质量基础设施"建设为主轴——v2.0.64 修复了关键的审批流状态同步缺陷，多个安全相关 PR 进入待审队列（CSPRNG、命令注入防护、loopback 绑定）。项目在生产可靠性方面迈出实质性步伐，但**审阅积压**（29 open PRs）可能成为交付瓶颈。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论数 | 热度分析 |
|:---|:---|:---|:---|
| 🔥 **#1** | [#1503](https://github.com/nanocoai/nanoclaw/issues/1503) `nanoclaw.dev has an invalid ssl cert right now` | **19 评论** | **运维信任危机**：证书过期 52 天（3-28 创建，5-18 仍活跃），直接影响官方文档/注册站点的可访问性。高评论数反映用户反复遭遇和催促，但至今无修复迹象，损害项目专业形象。 |
| 🔥 **#2** | [#1984](https://github.com/nanocoai/nanoclaw/issues/1984) `Provider support for custom/local OpenAI-compat endpoints (Codex + OpenCode)` | **6 评论** | **企业私有化部署诉求**：用户需要连接自托管的 OpenAI 兼容端点（如本地 Codex、OpenCode），文档标记为"实验性"但实际缺乏路由支持。这是 AI 基础设施项目的**核心竞争性功能缺口**，直接影响企业采用。 |

### 新进入视野的高优先级 Issue

| Issue | 紧急度 | 诉求 |
|:---|:---|:---|
| [#2535](https://github.com/nanocoai/nanoclaw/issues/2535) `[WhatsApp] LID encryption desync — group messages appear as "Waiting for this message"` | 🔴 **高** | WhatsApp 商业场景阻塞：群组消息因 LID（Line Identity）加密同步失败， bot 无法处理希伯来语/阿拉伯语等 RTL 市场的群组消息。零评论但**直接影响多语言生产部署**。 |

---

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 | 修复 PR | 影响范围 |
|:---|:---|:---|:---|:---|
| 🔴 **P0 - 安全漏洞** | 审批卡 ID 使用 `Math.random()` 而非 CSPRNG，存在可预测性风险 | 🟡 **待审** | [#2545](https://github.com/nanocoai/nanoclaw/pull/2545) | 审批流劫持、未授权操作 |
| 🔴 **P0 - 安全漏洞** | 容器镜像构建时 package 名未校验，存在 OS 命令注入 (CWE-78) | 🟡 **待审** | [#2538](https://github.com/nanocoai/nanoclaw/pull/2538) | 任意代码执行 |
| 🟡 **P1 - 可用性** | Webhook 服务器默认绑定 `0.0.0.0`，暴露所有接口 | 🟡 **待审** | [#2546](https://github.com/nanocoai/nanoclaw/pull/2546) | 未授权网络暴露 |
| 🟡 **P1 - 数据一致性** | `ncl groups delete` 外键约束失败，无法清理代理组 | 🟡 **待审** | [#2540](https://github.com/nanocoai/nanoclaw/pull/2540) | 资源泄漏 |
| 🟡 **P1 - 数据一致性** | 新建代理组缺少 `container_configs` 行，导致容器启动永久失败 | 🟡 **待审** | [#2539](https://github.com/nanocoai/nanoclaw/pull/2539) | 新用户 onboarding 阻塞 |
| 🟡 **P1 - 解析错误** | `</message>` 在消息体中被误识别为结束标签 | 🟡 **待审** | [#2541](https://github.com/nanocoai/nanoclaw/pull/2541) | 消息截断/格式错乱 |
| 🟢 **P2 - 状态同步** | 部署/重启后会话 `container_status` 残留为 `running` | ✅ **已修复** (v2.0.64 相关) | [#2533](https://github.com/nanocoai/nanoclaw/issues/2533) | 运维监控噪声 |

> **安全态势评估**：今日 3 个安全相关 PR 集中提交（[#2545](https://github.com/nanocoai/nanoclaw/pull/2545)、[#2538](https://github.com/nanocoai/nanoclaw/pull/2538)、[#2546](https://github.com/nanocoai/nanoclaw/pull/2546)），显示维护者或安全审计后的主动加固，但均需尽快合并。

---

## 6. 功能请求与路线图信号

| 功能方向 | 信号源 | 成熟度 | 纳入下一版本概率 |
|:---|:---|:---|:---|
| **ACP Client Protocol 支持** | PR [#2542](https://github.com/nanocoai/nanoclaw/pull/2542) | 🟡 **PR 已提交** | **高** — 完整实现（子进程 + TCP 双模式），符合项目"协议即插件"架构 |
| **自定义 OpenAI 兼容端点** | Issue [#1984](https://github.com/nanocoai/nanoclaw/issues/1984) | 🟡 **需求明确，缺实现** | **中高** — 文档已有钩子，需补齐路由逻辑；Codex/OpenCode 生态推动力强 |
| **GitHub 轮询模式（无端口）** | PR [#2301](https://github.com/nanocoai/nanoclaw/pull/2301) | 🟡 **PR 待审** | **高** — 解决 NAT/防火墙企业部署痛点 |
| **Telegram 消息反应 + 回调查询** | PR [#2544](https://github.com/nanocoai/nanoclaw/pull/2544) | 🟢 **小功能，Ready** | **高** — 单行配置变更，低风险 |
| **按消息 reasoning effort 路由** | PR [#2406](https://github.com/nanocoai/nanoclaw/pull/2406) | 🟡 **架构级变更** | **中** — 成本优化关键，需评估对现有容器调度影响 |
| **Agent Network（技能）** | PR [#2497](https://github.com/nanocoai/nanoclaw/pull/2497) | 🟡 **大型 Feature PR** | **中** — 新技能类别，审阅周期长 |

---

## 7. 用户反馈摘要

### 真实痛点

| 来源 | 痛点 | 场景 |
|:---|:---|:---|
| [#1503](https://github.com/nanocoai/nanoclaw/issues/1503) 评论 | "证书过期导致无法访问文档，第一印象极差" | 新用户评估、现有用户查阅 API |
| [#1984](https://github.com/nanocoai/nanoclaw/issues/1984) | "BYO endpoint 文档说支持实际不支持，被迫用官方端点" | 金融/医疗等合规要求数据不出域 |
| [#2535](https://github.com/nanocoai/nanoclaw/issues/2535) | "WhatsApp 群组完全不可用，RTL 市场 blocked" | 以色列/中东客户支持自动化 |
| [#2435](https://github.com/nanocoai/nanoclaw/pull/2435) 隐含 | "端口 3000 被占用，webhook 起不来，无文档说明" | 多服务共享服务器部署 |

### 满意信号

- v2.0.64 的审批流修复获得隐性认可（无回归投诉）
- 社区贡献者活跃：smith-vosburg、evenisse 等多人同日提交高质量 PR，显示开发者体验（DX）健康

---

## 8. 待处理积压

### 需维护者优先关注的长期/高影响项

| 项目 | 创建时间 | 最后更新 | 风险 | 行动建议 |
|:---|:---|:---|:---|:---|
| [#1503](https://github.com/nanocoai/nanoclaw/issues/1503) SSL 证书过期 | 2026-03-28 | 2026-05-18 | 🔴 **品牌信任崩塌**，52 天未修复 | 立即续期证书；评估自动化 Let's Encrypt 流程 |
| [#1845](https://github.com/nanocoai/nanoclaw/pull/1845) 时间戳 ISO 8601 规范化 | 2026-04-18 | 2026-05-18 | 🟡 数据互操作性，1 个月悬停 | 合并或明确拒绝；影响下游集成 |
| [#2405](https://github.com/nanocoai/nanoclaw/pull/2405) + [#2406](https://github.com/nanocoai/nanoclaw/pull/2406) poll-loop 双 PR | 2026-05-11 | 2026-05-18 | 🟡 核心消息循环稳定性 | 协调合并顺序，避免冲突 |
| [#2301](https://github.com/nanocoai/nanoclaw/pull/2301) GitHub 轮询模式 | 2026-05-06 | 2026-05-18 | 🟡 企业采用关键功能，2 周待审 | 安排架构审阅，或拆分合并 |

### 审阅队列健康度

> **29 个待合并 PR** 中，**7 个为今日提交的安全/关键修复**，建议维护者采用 **"安全优先 + 功能分批"** 策略，避免关键修复淹没在 feature PR 中。

---

*本日报基于 GitHub 公开数据生成，未包含私有仓库或讨论区信息。如需特定模块深度分析，请告知。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-05-19

> **项目**: [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw) | **日期**: 2026-05-19 | **分析周期**: 过去24小时

---

## 1. 今日速览

NullClaw 今日维持**低活跃度的稳定维护状态**。社区产出 1 条新 Issue 和 1 条待合并 PR，无版本发布。值得关注的是，两条新增内容分别触及项目的**核心架构灵活性**（内存召回机制可配置性）与**跨平台兼容性**（Windows 网络层 DNS 解析），显示出贡献者正从"功能补全"向"边缘场景打磨"演进。整体健康度平稳，但 PR 合并节奏偏慢，单条 PR 的评论数为 `undefined` 提示可能存在数据同步或社区互动不足的情况。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

| 项目 | 状态 | 说明 |
|:---|:---|:---|
| PR #920 | 🟡 **待合并** | Windows DNS 解析修复，解决远程服务商连接失败问题 |

**详细进展**：

- **[PR #920](https://github.com/nullclaw/nullclaw/pull/920)** — `fix(net): fix Windows DNS resolution for non-localhost hostnames`
  - **作者**: @chenhlSH
  - **影响范围**: Windows 平台所有非 localhost 的网络连接
  - **技术细节**: `net.zig` 中 `getAddressList()` 原实现存在平台判断逻辑缺陷，对所有非 localhost 主机名直接返回 `UnknownHostName`，导致 `error.HostResolutionFailed`
  - **项目推进价值**: ⭐⭐⭐☆☆ — 修复平台兼容性阻塞问题，解锁 Windows 用户连接远程 LLM 提供商的能力；属于"解锁型"修复而非"增量型"功能

> ⚠️ **合并阻塞提示**: 该 PR 当前评论数为 `undefined`，建议维护者确认 CI 状态与代码审查进度。

---

## 4. 社区热点

| 排名 | 条目 | 互动指标 | 热度分析 |
|:---|:---|:---|:---|
| #1 | [Issue #919](https://github.com/nullclaw/nullclaw/issues/919) | 👍 0, 💬 0 | 架构灵活性诉求，零互动反映"预期内需求"或社区规模有限 |
| #2 | [PR #920](https://github.com/nullclaw/nullclaw/pull/920) | 👍 0, 💬 undefined | 平台兼容性修复，技术债务清理 |

**诉求深度分析**:

- **Issue #919** 的核心诉求指向 **"智能体记忆系统的可控性"**：
  - 当前 `enrichMessageWithRuntime()` 对每条消息强制执行 FTS5 + BM25 召回，硬编码 4 个关键参数
  - 用户场景推测：高频消息场景下（如群聊、流式输入），强制召回造成不必要的延迟与 Token 消耗；部分工作流可能根本不需要上下文记忆
  - 信号价值: 🔮 **高** — 与当前 AI Agent 领域"记忆分层/按需召回"的架构演进趋势一致，可能推动配置化改造甚至插件化记忆后端

---

## 5. Bug 与稳定性

| 严重等级 | 条目 | 描述 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **P1 - 平台阻塞** | [PR #920](https://github.com/nullclaw/nullclaw/pull/920) | Windows 全量远程 DNS 解析失败，所有非本地服务不可用 | #920 (自身) | 🟡 待合并 |
| 🟡 **P2 - 架构僵化** | [Issue #919](https://github.com/nullclaw/nullclaw/issues/919) | 记忆召回不可禁用，存在性能/成本隐性损耗 | 无 | 🔴 待响应 |

**风险评估**:
- PR #920 若久未合并，将持续排斥 Windows 开发者群体，影响跨平台采用率
- Issue #919 暂无修复承诺，但属于"渐进式损伤"而非"即时崩溃"

---

## 6. 功能请求与路线图信号

| 功能请求 | 来源 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| **可配置/禁用 FTS5 记忆召回** | [Issue #919](https://github.com/nullclaw/nullclaw/issues/919) | 🔮 **中高** | 改动面可控（参数暴露 + 条件跳过），契合性能优化方向；需设计配置 API 避免碎片化 |

**路线图信号解读**:
- 两个新增项共同指向 **"生产环境精细化控制"** — 从"能跑"到"可控"的成熟度跃迁
- 建议维护者考虑将记忆系统配置纳入 `runtimeConfig` 或 `AgentOptions` 统一设计，而非单点参数开关

---

## 7. 用户反馈摘要

> 基于今日有限样本的痛点提炼

| 维度 | 内容 | 来源 |
|:---|:---|:---|
| **痛点** | Windows 平台完全无法连接远程服务，开发体验断裂 | PR #920 问题描述 |
| **痛点** | 每条消息强制触发记忆召回，无成本/性能权衡空间 | Issue #919 |
| **隐含诉求** | 希望获得类似 `recall: { enabled: false, limit?: number }` 的显式控制 | Issue #919 问题结构 |
| **满意度盲区** | 今日无正面反馈或功能赞美类评论 | — |

**使用场景推断**:
- @weissfl 可能在构建**高并发或成本敏感**的 Agent 部署（如客服机器人、高频工具调用），需要精细控制记忆触发策略
- @chenhlSH 的 Windows 环境调试经历反映跨平台测试覆盖存在缺口

---

## 8. 待处理积压

> 以下为基于单日本身无法判断"长期性"的提醒项，建议维护者结合项目实际积压审视

| 条目 | 创建时间 | 风险提醒 |
|:---|:---|:---|
| [Issue #919](https://github.com/nullclaw/nullclaw/issues/919) | 2026-05-18 | **配置化架构决策窗口期** — 若快速响应可纳入统一设计；若拖延，社区可能提交碎片化 PR 增加技术债务 |
| [PR #920](https://github.com/nullclaw/nullclaw/pull/920) | 2026-05-18 | **平台兼容性基础修复**，建议优先合并；`undefined` 评论数需排查是否为 GitHub API 同步问题或真实零互动 |

---

## 附录：数据健康度指标

| 指标 | 数值 | 评估 |
|:---|:---|:---|
| 日 Issue 吞吐量 | 1 新开 / 0 关闭 | 净流入，需关注处理节奏 |
| PR 合并率 | 0% (0/1) | 待观察，单样本无统计意义 |
| 社区互动密度 | 0 评论 / 0 反应 | ⚠️ 偏低，建议维护者主动引导 |
| 跨平台问题占比 | 50% (1/2) | 反映多平台适配进入深水区 |

---

*日报生成基于公开 GitHub 数据，PR #920 评论数 `undefined` 为原始数据异常，建议复核。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-05-19

## 1. 今日速览

IronClaw 今日维持**高强度开发节奏**，47 个 PR 更新（32 个待合并）、36 个 Issues 活跃（34 个新开/活跃，仅 2 个关闭），显示项目处于**密集迭代期**。核心焦点集中在 **Reborn 架构迁移**（身份策略、测试框架、产品工作流）与 **Embeddings 子系统重构** 两大主线。社区报告了若干 UI/UX 回归问题（工具安装状态显示错误、AGENTS.md 编辑不生效），同时依赖升级和安全加固工作并行推进。无新版本发布，但 CI 发布 PR #3708 已准备将版本推至 0.28.2。

---

## 2. 版本发布

**无今日发布**。但需注意：

- **PR #3708** `chore: release` 已就绪，计划将 `ironclaw` 从 `0.24.0` 升级至 **`0.28.2`**，`ironclaw_common` 从 `0.4.2` 升级至 `0.5.0`（⚠️ **含 API 破坏性变更**：`enum_no_repr_variant_discriminant_changed`）
- **Issue #3259** 持续追踪：GitHub 已打 tag 至 v0.27.0，但 [crates.io](https://crates.io/crates/ironclaw) 仍停留在 0.24.0，下游用户受 wasmtime 28.x CVE 影响无法升级

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 作者 | 状态 | 进展说明 |
|:---|:---|:---|:---|
| [#3730](https://github.com/nearai/ironclaw/pull/3730) | serrrfirat | **已合并** | Reborn 产品级 AgentLoop 工具调用测试框架重新基于 Henry 的 provider-tool-calls 分支堆叠，消除并行实现漂移 |
| [#3658](https://github.com/nearai/ironclaw/pull/3658) | zetyquickly | **已合并** | TUI 新增 Ctrl-S 日志导出功能，支持 `~/.ironclaw/logs/` 路径，带自适应宽度 toast 提示 |
| [#3361](https://github.com/nearai/ironclaw/pull/3361) | dependabot | **已关闭** | 43 项依赖升级被取代，由 [#3764](https://github.com/nearai/ironclaw/pull/3764) 覆盖（44 项升级） |

### 关键推进中的 PR

| PR | 作者 | 核心贡献 |
|:---|:---|:---|
| [#3739](https://github.com/nearai/ironclaw/pull/3739) | ilblackdragon | **Embeddings 子系统大规模重构**：提取独立 crate `ironclaw_embeddings`，统一 OpenAI/NearAI/Ollama/Bedrock 提供商，为后续修复 5 个相关 bug 奠定基础 |
| [#3721](https://github.com/nearai/ironclaw/pull/3721) | henrypark133 | **Reborn 个人上下文策略门控**：`ResolvedRunProfile.personal_context_policy` 实现向后兼容的默认排除机制，`USER.md` 和 `context/assistant-directives.md` 按运行策略授权 |
| [#3761](https://github.com/nearai/ironclaw/pull/3761) | serrrfirat | **Reborn EventStreamManager 首片**：传输无关的产品级流管理器，支持投影快照/重放、订阅准入、滞后/重基流项、动态脱敏 |
| [#3759](https://github.com/nearai/ironclaw/pull/3759) | serrrfirat | **持久化产品工作流账本**：libSQL/PostgreSQL 双后端，支持幂等性预留/结果、恢复租约语义 |
| [#3766](https://github.com/nearai/ironclaw/pull/3766) | serrrfirat | **调度权限封印**：`AuthorizedDispatchRequest` + `DispatchAuthorityProof`，`CapabilityDispatcher` 不再接受原始 payload，安全模型硬化 |
| [#3767](https://github.com/nearai/ironclaw/pull/3767) | serrrfirat | **NoExposureGuard 服务**：基于 `ironclaw_safety::LeakDetector` 的边界感知文本/JSON/HTTP 检查，脱敏违规输出 |

**整体评估**：Reborn 架构从"可编译"向"可安全运行"跨越，产品工作流、事件流、权限模型三大基础设施同日推进，距离 WebUI Beta 目标显著靠近。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 核心诉求 |
|:---|:---|:---|:---|
| 🥇 | [#3692](https://github.com/nearai/ironclaw/issues/3692) Reborn: policy-gated personal identity and heartbeat prompt context | **6 条** | 身份策略的完整闭环：WS-15 仅实现稳定身份文件，需补充策略门控的个人身份和心跳提示上下文形状设计 |
| 🥈 | [#3259](https://github.com/nearai/ironclaw/issues/3259) Publish 0.25.0–0.27.0 to crates.io | **5 条** | **下游阻塞性诉求**：crates.io 滞后导致安全补丁无法分发，企业用户被迫 pin 在含 CVE 的 0.24.0 |
| 🥉 | [#3622](https://github.com/nearai/ironclaw/issues/3622) + [#3620](https://github.com/nearai/ironclaw/issues/3620) | **各 3 条** | 工具调用结果证据链完整性：内部工具结果完成证据验证、provider 工具调用转换为 `ParentLoopOutput::CapabilityCalls` |

### 热点分析

- **#3692** 反映 Reborn 身份模型的深层设计张力：稳定文件 vs. 动态策略、个人上下文 vs. 系统心跳，需在安全性和灵活性间取得平衡
- **#3259** 暴露发布流程瓶颈：tag 已打但 crates.io 未同步，可能因 workspace 版本协调或 CI 发布权限问题，建议优先解决以维护生态信任

---

## 5. Bug 与稳定性

| 优先级 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| **P0-回归** | [#3729](https://github.com/nearai/ironclaw/issues/3729) | `tool_install` 失败状态页面刷新后变为成功显示（UI 状态持久化错误） | **待修复** | 无 |
| **P1-回归** | [#3762](https://github.com/nearai/ironclaw/issues/3762) | Web UI 编辑 `AGENTS.md` 不更新系统提示（当前/未来会话均不生效） | **待修复** | 无 |
| **P1-缺陷** | [#3756](https://github.com/nearai/ironclaw/issues/3756) | ANSI 颜色代码导致日志序列化为字节数组，破坏结构化日志解析 | **待修复** | 无 |
| **P1-缺陷** | [#3755](https://github.com/nearai/ironclaw/issues/3755) | `AuthFailed` 错误提示硬编码 OpenAI 特定文案，但错误可能来自 NEAR AI/Bedrock | **待修复** | [#3739](https://github.com/nearai/ironclaw/pull/3739) 相关 |
| **P1-缺陷** | [#3754](https://github.com/nearai/ironclaw/issues/3754) | `base_url` 已含 `/v1` 时路径重复为 `/v1/v1/embeddings` | **待修复** | [#3739](https://github.com/nearai/ironclaw/pull/3739) 相关 |
| **P1-缺陷** | [#3753](https://github.com/nearai/ironclaw/issues/3753) | `ironclaw doctor` Bedrock embeddings 错误回退到 `OPENAI_API_KEY` 检查 | **待修复** | [#3739](https://github.com/nearai/ironclaw/pull/3739) 相关 |
| **P2-缺陷** | [#3752](https://github.com/nearai/ironclaw/issues/3752) | `embed_batch` 覆盖跳过单条 `max_input_length` 检查 | **待修复** | [#3739](https://github.com/nearai/ironclaw/pull/3739) 相关 |
| **P2-缺陷** | [#3751](https://github.com/nearai/ironclaw/issues/3751) | 未知 embedding provider 静默路由到 OpenAI（应为错误） | **待修复** | [#3739](https://github.com/nearai/ironclaw/pull/3739) 相关 |
| **P2-缺陷** | [#3750](https://github.com/nearai/ironclaw/issues/3750) | Bedrock embeddings 忽略 DB/TOML model 设置，硬编码 `amazon.titan-embed` | **待修复** | [#3739](https://github.com/nearai/ironclaw/pull/3739) 相关 |
| **P2-回归** | [#3736](https://github.com/nearai/ironclaw/issues/3736) | v0.28.2 TEE agent 中未配置 provider 仍显示 Use 按钮（可能误切） | **已关闭** | 转为 question，待确认 |

**关键信号**：ilblackdragon 在 [#3739](https://github.com/nearai/ironclaw/pull/3739) 审查中**一次性发现 5 个 embeddings 相关缺陷**，表明该子系统此前缺乏系统性测试。提取独立 crate 的时机恰当，但需加强回归测试覆盖。

---

## 6. 功能请求与路线图信号

| Issue | 需求 | 与现有 PR 关联 | 纳入可能性 |
|:---|:---|:---|:---|
| [#3763](https://github.com/nearai/ironclaw/issues/3763) Per-user/per-tenant 工具启用/禁用 Web UI | 客户部署需 UI 化工具开关，避免重启 | [#1378](https://github.com/nearai/ironclaw/pull/1378) per-channel MCP/tool 过滤 | **高** — 架构互补，可叠加租户维度 |
| [#3698](https://github.com/nearai/ironclaw/issues/3698) + [#3702](https://github.com/nearai/ironclaw/issues/3702) Reborn 产品级运行时测试/干燥运行框架 | 88 个测试文件分类，29 个核心循环需 Rust 集成测试对等 | [#3768](https://github.com/nearai/ironclaw/pull/3768) 首个通用支持 shim | **高** — 已启动，Beta 阻塞项 |
| [#3697](https://github.com/nearai/ironclaw/issues/3697) Reborn 里程碑 → Web AppEvents | 浏览器可见进度，当前投影不足 | [#3761](https://github.com/nearai/ironclaw/pull/3761) EventStreamManager | **高** — 直接对应 |
| [#3700](https://github.com/nearai/ironclaw/issues/3700) + [#3699](https://github.com/nearai/ironclaw/issues/3699) Web/CLI/Telegram/webhooks 产品工作流路由 | 非 web 通道在产品级验证后 rollout | [#3759](https://github.com/nearai/ironclaw/pull/3759) 持久化账本 | **中** — 依赖 web 先行验证 |
| [#3745](https://github.com/nearai/ironclaw/issues/3745) Owner-aware personal context 授权 | #3692 子任务，拆分自 #3721 | [#3721](https://github.com/nearai/ironclaw/pull/3721) | **高** — 已有关联 PR |

---

## 7. 用户反馈摘要

### 真实痛点

| 来源 | 痛点 | 场景 |
|:---|:---|:---|
| [#3729](https://github.com/nearai/ironclaw/issues/3729) sunglow666 | **工具安装状态误导**：拒绝后刷新变成功，用户无法信任 UI 反馈 | TEE 生产环境工具审批工作流 |
| [#3762](https://github.com/nearai/ironclaw/issues/3762) zetyquickly | **身份编辑不生效**：AGENTS.md 保存后系统提示不变，配置-运行脱节 | 实时调整 agent 人格/指令 |
| [#3763](https://github.com/nearai/ironclaw/issues/3763) zetyquickly | **工具开关无 UI**：多租户场景下需代码+重启，运营效率低 | SaaS 化客户部署 |
| [#3259](https://github.com/nearai/ironclaw/issues/3259) dacoldest | **crates.io 滞后 = 安全风险**：CVE 补丁无法通过正规渠道获取 | 企业合规供应链 |

### 满意度信号

- TUI 日志导出（[#3658](https://github.com/nearai/ironclaw/pull/3658)）——开发者体验改进获认可
- Reborn 架构文档公开（[#3607](https://github.com/nearai/ironclaw/issues/3607) architecture view）——透明度提升

---

## 8. 待处理积压

| Issue | 创建时间 | 最后更新 | 风险 | 提醒 |
|:---|:---|:---|:---|:---|
| [#3259](https://github.com/nearai/ironclaw/issues/3259) crates.io 发布阻塞 | 2026-05-05 | 2026-05-18 | **安全/生态** | 14 天未解决，下游 CVE 暴露，建议 @dacoldest 协调发布权限或文档化 workaround |
| [#3068](https://github.com/nearai/ironclaw/issues/3068) Reborn 切换阻塞：HTTP 凭证注入 | 2026-04-29 | 2026-05-18 | **切换阻塞** | 21 天，标记 P0 + cutover blocker，需确认 #3289/#3745 是否覆盖 |
| [#3289](https://github.com/nearai/ironclaw/issues/3289) Secrets/OAuth/auth 产品流迁移 | 2026-05-06 | 2026-05-18 | **切换阻塞** | 13 天，parent #3031 长期未闭环 |
| [#3287](https://github.com/nearai/ironclaw/issues/3287) Memory/workspace 产品面迁移 | 2026-05-06 | 2026-05-18 | **切换阻塞** | 同上，Reborn Beta 需 M1 模块完整 |
| [#1378](https://github.com/nearai/ironclaw/pull/1378) Per-channel MCP/tool 过滤 | 2026-03-18 | 2026-05-19 | **功能就绪** | **62 天开放**，XL 规模，多通道部署核心需求，需评估是否 rebase 或拆分 |

---

**日报生成时间**：2026-05-19  
**数据覆盖**：过去 24 小时 GitHub 活动  
**项目健康度**：🟡 **活跃但承压** — 架构迁移进展顺利，UI/UX 回归和发布流程瓶颈需优先处理

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-05-19

> **项目**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
> **日期**: 2026-05-19  
> **分析师**: AI 智能体与个人 AI 助手领域开源项目分析师

---

## 1. 今日速览

LobsterAI 今日呈现**高强度发布冲刺态势**：24小时内完成 **12 个 PR 的合并/关闭**，并正式推送 **2026.5.18 版本**。开发活动集中在模型配置体验优化（上下文窗口滑动条）、UI 一致性修复及 OpenClaw 兼容性增强三大方向。Issues 板块完全静默（0 条更新），社区讨论热度偏低，项目目前以**内部迭代驱动为主**，外部贡献者参与度有限。6 个待合并 PR 中 5 个为 3 月份积压的 stale PR，合并队列存在明显的"新旧断层"现象。

---

## 2. 版本发布

### 🚀 [LobsterAI 2026.5.18](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.5.18) | 2026-05-18

| 维度 | 详情 |
|:---|:---|
| **发布类型** | 功能迭代版本 |
| **核心贡献者** | @liuzhq1986, @btc69m979y-dotcom |

#### What's Changed

| PR | 变更类型 | 说明 |
|:---|:---|:---|
| [#1991](https://github.com/netease-youdao/LobsterAI/pull/1991) | `feat(keyfrom)` | 新增渠道归因打包与请求上下文功能，支持更精细的流量来源追踪 |
| [#2](https://github.com/netease-youdao/LobsterAI/pull/2) | `feat(models)` | 模型设置新增**单模型上下文窗口滑动条**，支持非线性刻度与 **2M tokens 上限** |

#### 破坏性变更与迁移注意
- **无明确破坏性变更**。上下文窗口配置为新增可选字段，向后兼容。
- **已知限制**：[#2004](https://github.com/netease-youdao/LobsterAI/pull/2004) 重构后模态框遮罩范围存在定位上下文变化，虽已在发布前关闭，但二次开发基于旧 `Settings.tsx` 的分支可能需手动适配。

---

## 3. 项目进展

### 今日合并/关闭的 12 个 PR 功能矩阵

| 类别 | PR | 核心进展 | 影响面 |
|:---|:---|:---|:---|
| **模型体验** | [#2001](https://github.com/netease-youdao/LobsterAI/pull/2001) ➜ 含于发布 | 单模型上下文窗口独立配置，滑动条非线性刻度，最大 2M tokens | 所有使用多模型切换的用户 |
| | [#2004](https://github.com/netease-youdao/LobsterAI/pull/2004) | `Settings.tsx` 瘦身 31%（5162→3502 行），模型设置组件化 | 代码可维护性、后续功能迭代效率 |
| **OpenClaw 兼容性** | [#2006](https://github.com/netease-youdao/LobsterAI/pull/2006) | 非 ASCII MCP 服务器名称 MD5 哈希化，解决中文名被 sanitize 为 `"------"` 的致命问题 | 中文/CJK 用户、企业级 MCP 集成 |
| | [#2000](https://github.com/netease-youdao/LobsterAI/pull/2000) | 修复 mimo 模型 Anthropic 格式兼容性问题 | mimo 模型使用者 |
| **UI 一致性** | [#2005](https://github.com/netease-youdao/LobsterAI/pull/2005) | Dreaming 设置页文字按钮 → 滑动开关，统一 Embedding 开关样式 | 设置页交互一致性 |
| | [#2007](https://github.com/netease-youdao/LobsterAI/pull/2007) | 恢复新建任务页主题色背景（修复 [#822d0596](https://github.com/netease-youdao/LobsterAI/commit/822d0596) 回归） | 视觉体验 |
| | [#2009](https://github.com/netease-youdao/LobsterAI/pull/2009) | Cron UI 更新 | 定时任务界面 |
| | [#2008](https://github.com/netease-youdao/LobsterAI/pull/2008) | 图标更新 | 品牌视觉 |
| **内容渲染** | [#2002](https://github.com/netease-youdao/LobsterAI/pull/2002) | Markdown 预览本地图片路径解析修复（相对路径 → `localfile://` 协议） | 本地 Markdown 文件预览 |
| **插件/依赖** | [#2003](https://github.com/netease-youdao/LobsterAI/pull/2003) | 泡泡插件 moltbot-popo 2.1.1 → 2.1.8 | POPO IM 通道稳定性 |
| | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | Electron 40.2.1 → 42.1.0, electron-builder 同步升级 | 底层框架安全与性能 |
| **发布工程** | [#2010](https://github.com/netease-youdao/LobsterAI/pull/2010) | 发布分支整合 | — |

### 整体推进评估
- **技术债偿还**：Settings.tsx 重构显著降低认知负荷
- **国际化/本地化**：OpenClaw 中文兼容性修复消除关键障碍
- **发布节奏**：从 PR 创建到合并平均 < 1 天，显示**高效的内部 CI/CD 流水线**

---

## 4. 社区热点

> ⚠️ **数据异常提示**：今日所有 PR 评论数均为 `undefined`，👍 数均为 0，Issues 零活动。**项目缺乏公开的社区互动数据**，以下为基于 PR 内容重要性的替代分析。

| 伪"热点" PR | 实际关注度 | 背后诉求分析 |
|:---|:---|:---|
| [#2006](https://github.com/netease-youdao/LobsterAI/pull/2006) 非 ASCII MCP 名称哈希 | 🔴 高（隐性） | **中文开发者基础设施诉求**：MCP 生态默认 ASCII-centric，CJK 用户被迫使用英文别名或遭遇功能损坏。此修复揭示 LobsterAI 作为中文本土 AI 助手的差异化战场——**本地化兼容性优先于国际化标准**。 |
| [#2001](https://github.com/netease-youdao/LobsterAI/pull/2001) 2M 上下文窗口 | 🟡 中（功能驱动） | 长上下文竞赛（Gemini 2M, Claude 200K→1M）的跟进响应，但"非线性刻度"设计暗示产品团队对**用户实际理解成本**的考量——避免线性大数滑动的精度灾难。 |
| [#2005](https://github.com/netease-youdao/LobsterAI/pull/2005) Dreaming 开关统一 | 🟢 低（ polish 级） | 内部设计系统一致性工程，非用户痛点驱动。 |

**核心洞察**：社区热点实际由**产品战略（长上下文）× 本土适配（中文 MCP）** 双轴定义，而非传统开源项目的讨论热度。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 修复 PR | 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | 非 ASCII MCP 服务器名称被 sanitize 为 `"------"`，导致中文名完全不可用 | [#2006](https://github.com/netease-youdao/LobsterAI/pull/2006) | ✅ **已修复** |
| 🟡 **中** | 新建任务页背景被误改为白色（`bg-surface`），破坏主题一致性 | [#2007](https://github.com/netease-youdao/LobsterAI/pull/2007) | ✅ **已修复** |
| 🟡 **中** | Markdown 预览相对图片路径无法显示 | [#2002](https://github.com/netease-youdao/LobsterAI/pull/2002) | ✅ **已修复** |
| 🟡 **中** | mimo 模型 Anthropic 格式兼容性问题 | [#2000](https://github.com/netease-youdao/LobsterAI/pull/2000) | ✅ **已修复** |
| 🟢 **低** | 模态框遮罩范围因重构发生变化（已知问题，未标记阻塞） | [#2004](https://github.com/netease-youdao/LobsterAI/pull/2004) | ⚠️ **已合并且有已知问题** |

**稳定性评估**：今日修复的 4 个 bug 均为**功能损坏级（broken feature）** 而非崩溃级，修复响应极快（当日创建当日合并）。但 [#2004](https://github.com/netease-youdao/LobsterAI/pull/2004) 的已知问题未在发布说明中显式披露，存在**用户困惑风险**。

---

## 6. 功能请求与路线图信号

### 从待合并 PR 推断的潜在路线图

| 待合并 PR | 功能方向 | 纳入下一版本概率 | 阻塞原因 |
|:---|:---|:---|:---|
| [#752](https://github.com/netease-youdao/LobsterAI/pull/752) `/compact` 命令 + 自动压缩机制 | 长会话成本优化 | 🔴 **高** | 3 月 stale，可能与 2M 上下文窗口形成**功能对偶**（大窗口 ↔ 智能压缩） |
| [#755](https://github.com/netease-youdao/LobsterAI/pull/755) 聊天记录导出 Markdown/JSON | 数据可移植性 | 🟡 **中** | 3 月 stale，需求明确但实现可能需与现有同步机制协调 |
| [#749](https://github.com/netease-youdao/LobsterAI/pull/749) React.memo 优化流式渲染 | 性能工程 | 🟡 **中** | 3 月 stale，技术债类优化，优先级易被功能开发挤压 |
| [#748](https://github.com/netease-youdao/LobsterAI/pull/748) IM 平台配置工厂函数重构 | 代码质量 | 🟢 **低** | 纯重构，无用户可见价值 |
| [#760](https://github.com/netease-youdao/LobsterAI/pull/760) 移除冗余 session status 更新 | 性能/正确性 | 🟢 **低** | 单点优化，影响有限 |

### 信号解读
- **2M 上下文窗口 + /compact 压缩 = 完整的"长会话叙事"**：大窗口降低压缩频率，压缩机制兜底极端场景，两者结合可构成**版本级卖点**。
- **导出功能 [#755](https://github.com/netease-youdao/LobsterAI/pull/755)** 与 OpenClaw 的"归档"定位高度契合，但 2 个月未合并暗示**产品优先级争议**（是否鼓励用户离开生态？）。

---

## 7. 用户反馈摘要

> ⚠️ **数据缺失声明**：今日 0 条 Issues 更新，所有 PR 评论数为 `undefined`。以下为基于 PR 描述反推的**隐性用户画像**。

| 用户群体 | 推断痛点 | 证据来源 |
|:---|:---|:---|
| **中文企业用户** | MCP 中文命名刚需，OpenClaw 生态对 CJK 支持薄弱 | [#2006](https://github.com/netease-youdao/LobsterAI/pull/2006) 的详细问题描述 |
| **多模型高级用户** | 不同模型需要不同的上下文策略（如轻量模型 4K，旗舰模型 128K+） | [#2001](https://github.com/netease-youdao/LobsterAI/pull/2001) "per-model" 设计 |
| **本地知识库用户** | Markdown 文件预览图片断裂，影响文档向量化后的可视化验证 | [#2002](https://github.com/netease-youdao/LobsterAI/pull/2002) |
| **POPO/网易生态用户** | IM 通道稳定性依赖特定插件版本 | [#2003](https://github.com/netease-youdao/LobsterAI/pull/2003) 升级验证 |

**满意度推测**：今日修复密集且响应极快，**现有用户满意度可能处于上升期**；但社区渠道静默，**新用户获取与外部反馈机制健康度存疑**。

---

## 8. 待处理积压

### 🔴 需维护者紧急关注的 Stale PR（> 55 天未合并）

| PR | 创建日期 | 最后更新 | 价值评估 | 建议动作 |
|:---|:---|:---|:---|:---|
| [#752](https://github.com/netease-youdao/LobsterAI/pull/752) `/compact` 自动压缩 | 2026-03-24 | 2026-05-18 | **高** — 与 2M 窗口形成互补，降低 API 成本 | 评估与当前 `coworkSlice` 架构兼容性，优先合并或关闭 |
| [#755](https://github.com/netease-youdao/LobsterAI/pull/755) 聊天记录导出 | 2026-03-24 | 2026-05-18 | **中高** — 数据可移植性刚需 | 明确产品立场：若支持导出则合并，若战略保留则关闭并文档化 |
| [#749](https://github.com/netease-youdao/LobsterAI/pull/749) 流式渲染 memo 优化 | 2026-03-24 | 2026-05-18 | **中** — 长会话性能瓶颈 | 需基准测试数据支撑，建议要求贡献者补充 |
| [#748](https://github.com/netease-youdao/LobsterAI/pull/748) IM 平台工厂重构 | 2026-03-24 | 2026-05-18 | **低** — 代码质量 | 可合并但非阻塞，建议作为"good first review" |
| [#760](https://github.com/netease-youdao/LobsterAI/pull/760) 移除冗余 status 更新 | 2026-03-24 | 2026-05-18 | **低** — 微优化 | 快速决策：合并或关闭 |

### 队列健康度诊断
- **"新旧断层"**：新 PR（#2000+）当日处理，旧 PR（#700+）积压 2 个月，可能原因：
  1. 架构重构（如 [#2004](https://github.com/netease-youdao/LobsterAI/pull/2004) Settings 拆分）导致旧 PR 需大量 rebase
  2. 内部发布周期优先，外部贡献协调机制不足
- **建议**：维护者应对 3 月 PR 批次进行**批量 triage**，明确"需更新 / 已过时 / 等待资源"标签，降低贡献者流失风险。

---

## 附录：今日 PR 完整状态速查

```
已关闭 (12):  #2010 #2009 #2008 #2007 #2006 #2005 #2004 #2003 #2002 #2001 #2000 #811
待合并 (6):   #1277 #748 #749 #752 #755 #760
```

---

*本日报基于 GitHub API 数据自动生成，社区互动数据缺失可能影响"热点"与"反馈"章节完整性。建议项目启用 GitHub Discussions 或配置 issue 模板以提升外部参与度。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-05-19

## 1. 今日速览

Moltis 昨日迎来**高强度修复冲刺日**：24 小时内 7 个 Issues 关闭、6 个 PR 合并，仅 2 个 PR 和 1 个 Feature Request 仍处于开放状态。核心维护者 `penso` 单日合并 6 个修复 PR，集中解决 4 月重构引入的 Hook 系统回归、安全扫描误报、模型推理标签解析等关键问题。项目同步发布 `20260518.01` 版本，稳定性修复密集落地。社区活跃度指标：**健康偏热**，技术债务清理效率突出，但 Feature Request 响应节奏值得关注。

---

## 2. 版本发布

### [20260518.01](https://github.com/moltis-org/moltis/releases/tag/20260518.01)

| 属性 | 详情 |
|:---|:---|
| 发布日期 | 2026-05-18 |
| 版本类型 | 补丁版本（高频修复合集） |

**更新内容推断**（基于同日合并 PR 集）：
- **Hook 系统修复**：恢复 `BeforeAgentStart` 事件派发，修复 `BeforeLLMCall` 的 `ModifyPayload` 被静默丢弃问题
- **安全扫描增强**：heredoc 内容不再触发危险命令正则误报
- **模型兼容性**：Gemma-4-31b-it 的 `<thought>` 推理标签正确解析为 reasoning blocks
- **配置稳定性**：启动时保留显式默认值，阻止 Coqui TTS 配置"消失"
- **沙盒修复**：更新 `slacrawl` Go 模块路径

**破坏性变更**：无（均为向后兼容修复）

**迁移注意事项**：使用 Hook 系统的用户建议升级，4 月重构后的 Hook 回归问题在本版本彻底解决。

---

## 3. 项目进展

### 已合并/关闭 PR（6 项）

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#1021](https://github.com/moltis-org/moltis/pull/1021) | penso | 沙盒依赖路径同步修复，防止 `slacrawl` 模块路径漂移 | — |
| [#1019](https://github.com/moltis-org/moltis/pull/1019) | penso | **安全关键**：heredoc 体内危险命令扫描豁免，消除误报 | [#1014](https://github.com/moltis-org/moltis/issues/1014) |
| [#1018](https://github.com/moltis-org/moltis/pull/1018) | penso | **Hook 系统修复**：`BeforeLLMCall` 修改负载真正生效 | [#1013](https://github.com/moltis-org/moltis/issues/1013) |
| [#1017](https://github.com/moltis-org/moltis/pull/1017) | penso | **Hook 系统修复**：恢复 `BeforeAgentStart` 事件派发 | [#1012](https://github.com/moltis-org/moltis/issues/1012) |
| [#1016](https://github.com/moltis-org/moltis/pull/1016) | penso | **模型兼容性**：`<thought>` 标签推理解析，支持 Gemma/Google | [#1007](https://github.com/moltis-org/moltis/issues/1007) |
| [#1015](https://github.com/moltis-org/moltis/pull/1015) | penso | **配置稳定性**：阻止启动时自动压缩用户配置 | [#1006](https://github.com/moltis-org/moltis/issues/1006) |

**整体推进评估**：本日修复了 4 月重构（`e9674b2a`）引入的 **2 个 Hook 系统回归缺陷**，属于架构级技术债务清理；安全扫描和模型兼容性修复扩展了运行时鲁棒性。项目健康度 **+1 个主版本当量**的稳定性提升。

---

## 4. 社区热点

> 注：本日所有 Issues/PRs 评论数均为 0 或 1，无传统意义上的"高讨论"条目。以下按**技术影响力**排序。

| 条目 | 类型 | 热度指标 | 核心诉求分析 |
|:---|:---|:---|:---|
| [#1011](https://github.com/moltis-org/moltis/issues/1011) | Feature Request | 新建，0 评论，0 👍 | **Agent 路由可控性**：用户需要每轮对话级 `tool_choice` + `active_tools` 过滤，解决小模型（Claude haiku-4-5 级别）的工具误调用问题——"drift-resistant"诉求反映生产环境对**确定性路由**的强需求 |
| [#1012](https://github.com/moltis-org/moltis/issues/1012) + [#1013](https://github.com/moltis-org/moltis/issues/1013) | Bug 组合 | 同日创建+关闭 | Hook 文档承诺与实现脱节，用户 `dmitriikeler` 连续报告 2 个 Hook 失效问题，暴露**文档-实现一致性**治理短板 |
| [#1010](https://github.com/moltis-org/moltis/pull/1010) | Open PR | 待合并 | **Memory 子系统扩展**：社区贡献者 `gmoigneu` 推动 memory 写入支持嵌套子文件夹和 collection 感知，QMD 后端能力向用户层暴露 |

**背后诉求洞察**：社区正从"能运行"向"可管控"演进——小模型生产部署需要精细化工具控制，Memory 系统需要更灵活的组织结构。

---

## 5. Bug 与稳定性

| 优先级 | 问题 | 状态 | Fix PR | 影响范围 |
|:---|:---|:---|:---|:---|
| 🔴 **P0-已修复** | Hook 事件静默丢失：`BeforeAgentStart` 永不触发 | [#1012](https://github.com/moltis-org/moltis/issues/1012) 关闭 | [#1017](https://github.com/moltis-org/moltis/pull/1017) | 所有依赖 Hook 扩展的 Agent 工作流 |
| 🔴 **P0-已修复** | Hook 修改无效：`BeforeLLMCall` 的 `ModifyPayload` 被丢弃 | [#1013](https://github.com/moltis-org/moltis/issues/1013) 关闭 | [#1018](https://github.com/moltis-org/moltis/pull/1018) | 需要动态修改 LLM 负载的安全/审计场景 |
| 🟡 **P1-已修复** | 危险命令扫描误报：heredoc 内容被正则匹配 | [#1014](https://github.com/moltis-org/moltis/issues/1014) 关闭 | [#1019](https://github.com/moltis-org/moltis/pull/1019) | 包含 heredoc 的脚本执行场景 |
| 🟡 **P1-已修复** | 推理标签泄漏：`<thought>` 被当纯文本 | [#1007](https://github.com/moltis-org/moltis/issues/1007) 关闭 | [#1016](https://github.com/moltis-org/moltis/pull/1016) | Gemma/Google 模型用户 |
| 🟡 **P1-已修复** | 配置"消失"：显式默认值被自动压缩剥离 | [#1006](https://github.com/moltis-org/moltis/issues/1006) 关闭 | [#1015](https://github.com/moltis-org/moltis/pull/1015) | Coqui TTS 等含默认值的配置 |
| 🟡 **P1-已修复** | Heartbeat  tight loop：exec 期间心跳重触发 | [#858](https://github.com/moltis-org/moltis/issues/858) 关闭 | —（未标注 PR） | 长时 exec 的 Agent 会话 |
| 🟢 **P2-已修复** | 沙盒镜像预构建失败 | [#1020](https://github.com/moltis-org/moltis/issues/1020) 关闭 | [#1021](https://github.com/moltis-org/moltis/pull/1021) | Docker 沙盒首次初始化 |

**稳定性评估**：本日 7/7 关闭 Issues 均为 Bug，且 6/7 有明确修复 PR 关联，修复闭环率 **85.7%**。遗留风险：[#858](https://github.com/moltis-org/moltis/issues/858) 未标注修复 PR，需确认是否随其他变更间接解决。

---

## 6. 功能请求与路线图信号

| 条目 | 提出者 | 核心需求 | 纳入可能性评估 |
|:---|:---|:---|:---|
| [#1011](https://github.com/moltis-org/moltis/issues/1011) Per-turn `tool_choice` + `active_tools` | dmitriikeler | 小模型精确工具控制，防漂移路由 | ⭐⭐⭐⭐☆ **高** — 直接回应生产痛点，与现有 Hook/工具系统架构契合 |
| [#1010](https://github.com/moltis-org/moltis/pull/1010) Memory 嵌套子文件夹 | gmoigneu | QMD collection 能力用户层暴露 | ⭐⭐⭐⭐☆ **高** — PR 已开，实现完整，社区贡献者活跃 |

**路线图信号**：项目正处于"基础稳定性 → 生产可控性"转型期。下一版本可能聚焦：
- Agent 执行层的**精细化控制 API**（[#1011](https://github.com/moltis-org/moltis/issues/1011) 方向）
- Memory/知识管理的**目录语义扩展**（[#1010](https://github.com/moltis-org/moltis/pull/1010) 方向）

---

## 7. 用户反馈摘要

### 痛点提炼

| 来源 | 痛点 | 场景 |
|:---|:---|:---|
| [#1011](https://github.com/moltis-org/moltis/issues/1011) | 小模型"工具幻觉"——便宜 LLM 无法可靠遵循系统提示的工具限制 | 成本敏感的生产部署，需 haiku-4-5 级别模型做路由/分类任务 |
| [#1012](https://github.com/moltis-org/moltis/issues/1012)-[#1013](https://github.com/moltis-org/moltis/issues/1013) | 文档说"Can Modify: yes"，实际代码不生效 | 企业用户按文档实现 Hook 扩展，调试成本极高 |
| [#1014](https://github.com/moltis-org/moltis/issues/1014) | 安全扫描过度敏感，正常脚本被拦截 | 运维自动化场景，heredoc 内包含示例命令 |

### 满意度信号
- **修复响应速度**：`dmitriikeler` 同日报告 2 个 Hook Bug，`penso` 当日修复合并——核心维护者响应力获认可
- **版本发布节奏**：修复当日即发版（`20260518.01`），用户无需等待

### 不满意/风险信号
- **回归测试缺口**：4 月重构引入的 Hook 问题 1 个月后才被发现，反映**大规模重构的测试覆盖不足**
- **Feature Request 零互动**：[#1011](https://github.com/moltis-org/moltis/issues/1011) 0 评论 0 👍，可能因报告时间太短或社区参与度低

---

## 8. 待处理积压

| 条目 | 状态 | 等待时长 | 风险说明 |
|:---|:---|:---|:---|
| [#1011](https://github.com/moltis-org/moltis/issues/1011) Per-turn tool_choice | Open | 1 天 | ⚠️ **需维护者响应** — 生产高价值需求，建议标记 `roadmap` 或 `help wanted` |
| [#1010](https://github.com/moltis-org/moltis/pull/1010) Memory 嵌套子文件夹 | Open, 待合并 | 1 天 | 社区贡献完整实现，建议优先 review 以激励外部贡献 |
| [#1009](https://github.com/moltis-org/moltis/pull/1009) QMD 超时子进程泄漏 | Open, 待合并 | 1 天 | 🔴 **资源泄漏风险** — 超时场景下子进程僵尸化，影响长期运行稳定性 |

**维护者行动建议**：
1. **今日优先**：[#1009](https://github.com/moltis-org/moltis/pull/1009) 资源泄漏类 PR 建议加速合并
2. **本周规划**：对 [#1011](https://github.com/moltis-org/moltis/issues/1011) 给出路线图回应，维持社区参与动力
3. **流程改进**：考虑为大规模重构（如 4 月 `e9674b2a`）建立 Hook/事件系统的专项回归测试套件

---

*日报生成时间：2026-05-19 | 数据来源：GitHub API 快照 | 项目地址：[moltis-org/moltis](https://github.com/moltis-org/moltis)*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-05-19

> **项目地址**: [github.com/agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)（注：数据中仓库名显示为 `QwenPaw`，可能为品牌迁移期）
> **数据周期**: 2026-05-18 至 2026-05-19（24小时）

---

## 1. 今日速览

CoPaw 过去24小时维持**高活跃度**，Issues 更新 31 条（19 活跃/新开，12 关闭）、PR 更新 23 条（16 待合并，7 已合并/关闭），并发布 v1.1.8-beta.1 预发布版本。社区聚焦**微信通道稳定性**、**LLM 限流策略缺陷**及**插件系统安全**三大主题。值得关注的是，两个高影响 Bug（#4469 聊天无响应、#4470 插件 RCE 漏洞）在24小时内均获得快速响应或修复 PR，项目维护节奏健康。

---

## 2. 版本发布

### v1.1.8-beta.1 预发布
| 属性 | 内容 |
|:---|:---|
| **发布时间** | 2026-05-18 |
| **完整变更** | [Release 页面](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.8-beta.1) |

**核心变更**：
- **feat(plan mode)**: 增强从用户消息中进行计划确认（plan reaffirm）的能力 —— 提升多轮任务规划的可靠性 ([#4198](https://github.com/agentscope-ai/QwenPaw/pull/4198))
- **fix(tool)**: 浏览器工具实现修复（摘要截断，完整内容见 PR）
- **chore**: 版本号升级至 1.1.8b1 ([#4346](https://github.com/agentscope-ai/QwenPaw/pull/4346))

**评估**：本次 beta 为**增量更新**，无已知破坏性变更。Plan mode 的强化暗示项目正向**自主任务执行（Agentic Execution）**方向演进。

---

## 3. 项目进展

### 今日已合并/关闭的关键 PR（7 条）

| PR | 作者 | 影响 | 关联 Issue |
|:---|:---|:---|:---|
| [#4487](https://github.com/agentscope-ai/QwenPaw/pull/4487) `fix(providers)` | rayrayraykk | **🔴 高影响**：将全局 LLM 限流器替换为按模型实例隔离，根本解决 #4469/#4453 聊天无响应（"三个点跳动"） | [#4469](https://github.com/agentscope-ai/QwenPaw/issues/4469), [#4453](https://github.com/agentscope-ai/QwenPaw/issues/4453) |
| [#4488](https://github.com/agentscope-ai/QwenPaw/pull/4488) `fix(console/chat)` | zhijianma | 升级 `@agentscope-ai/chat` 至 1.1.63，修复页面导航时 SSE 连接泄漏（6 次切换后触发浏览器连接上限） | — |
| [#4489](https://github.com/agentscope-ai/QwenPaw/pull/4489) `fix(openai_provider)` | qbc2016 | 将 `max_tokens` 最小值从 1 提升至 20，兼容 `qwen3.5-omni-plus` 等模型的 API 约束 | — |
| [#4476](https://github.com/agentscope-ai/QwenPaw/pull/4476) `fix(token_usage)` | zhijianma | 新增按模型的 token 用量聚合统计 | [#4473](https://github.com/agentscope-ai/QwenPaw/issues/4473) |
| [#4484](https://github.com/agentscope-ai/QwenPaw/pull/4484) `fix(providers)` | Andrai985 | 修复 OpenAIProvider 连接测试未读取 `extra_headers` 的问题 | [#4484](https://github.com/agentscope-ai/QwenPaw/issues/4484) |
| [#4429](https://github.com/agentscope-ai/QwenPaw/pull/4429) `Fix(backup)` | jinglinpeng | 备份恢复信任机制后续加固（桌面导出兼容性、CORS 同站行为、签名外部备份的恢复时信任） | — |
| [#4471](https://github.com/agentscope-ai/QwenPaw/pull/4471) `feat(skill)` | ekzhu | 新增内置技能 `html-video-demo`（中英双语），支持单文件 HTML 视频演示编排 | — |

**里程碑意义**：[#4487](https://github.com/agentscope-ai/QwenPaw/pull/4487) 的合并标志着困扰多个版本的**核心稳定性问题**（全局限流导致的聊天假死）得到根治，项目可靠性向前迈进关键一步。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 热度分析 |
|:---|:---|:---|:---|
| 🥇 | [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) `Help Wanted: Open Tasks` | 62 | **长期社区协作入口**，P0-P2 任务分级招募贡献者，今日仍有更新，显示项目处于积极扩张期 |
| 🥈 | [#4469](https://github.com/agentscope-ai/QwenPaw/issues/4469) `[Bug] 聊天窗口无回应，三个点跳动` | 17 | **v1.1.7 最严重用户痛点**，Docker 重启、版本回退均无效，已随 #4487 关闭 |
| 🥉 | [#4453](https://github.com/agentscope-ai/QwenPaw/issues/4453) `[Question] 聊天窗口无回应` | 10 | 与 #4469 同源问题，用户自行尝试多种排错手段无果，反映**故障排查体验待优化** |

**诉求洞察**：用户高频反馈"重启/重装/回退均无效"的绝望感，说明需要**更透明的诊断工具**或**健康检查面板**。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重程度 | Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **Critical** | [#4470](https://github.com/agentscope-ai/QwenPaw/issues/4470) | **OPEN** | **插件接口存在未授权远程代码执行（RCE）漏洞** | ⛔ 暂无 |
| 🔴 **Critical** | [#4469](https://github.com/agentscope-ai/QwenPaw/issues/4469) | ✅ CLOSED | 聊天窗口完全无响应（全局限流器 Bug） | [#4487](https://github.com/agentscope-ai/QwenPaw/pull/4487) |
| 🟡 **High** | [#4496](https://github.com/agentscope-ai/QwenPaw/issues/4496) | **OPEN** | v1.1.7 升级后 AGENTS.md 加载为内置模板而非工作区实际文件 | ⛔ 暂无 |
| 🟡 **High** | [#4494](https://github.com/agentscope-ai/QwenPaw/issues/4494) | **OPEN** | Console 流式输出中途停止，误报"你打断了我" | ⛔ 暂无 |
| 🟡 **High** | [#4448](https://github.com/agentscope-ai/QwenPaw/issues/4448) | **OPEN** | 长对话上下文压缩频繁失败："invalid format (missing ## header)" | ⛔ 暂无（#4447 为重复关闭） |
| 🟡 **High** | [#4477](https://github.com/agentscope-ai/QwenPaw/issues/4477) | **OPEN** | 微信 iLink 定时任务推送失败：`context_token` 过期无重试，图片/文件发送无日志 | ⛔ 暂无（[#4490](https://github.com/agentscope-ai/QwenPaw/pull/4490) 为相关微信通道改进） |
| 🟡 **High** | [#4485](https://github.com/agentscope-ai/QwenPaw/issues/4485) | **OPEN** | 插件工具写入 agent.json 但未注入 Agent Toolkit，function-calling 不可见 | ⛔ 暂无 |
| 🟢 **Medium** | [#4367](https://github.com/agentscope-ai/QwenPaw/issues/4367) | **OPEN** | Assistant 仅显示"Thinking"无可见文本，直到后续轮次 | ⛔ 暂无 |
| 🟢 **Medium** | [#4051](https://github.com/agentscope-ai/QwenPaw/issues/4051) | ✅ CLOSED | DeepSeek 模型 think 内容解析异常，回复落入 thinking 标签 | — |
| 🟢 **Medium** | [#4497](https://github.com/agentscope-ai/QwenPaw/issues/4497) | ✅ CLOSED | Markdown 表格内 `<br>` 换行符不生效（用户第三次提交） | — |

**安全警报**：[#4470](https://github.com/agentscope-ai/QwenPaw/issues/4470) RCE 漏洞目前**无修复 PR**，需维护者优先响应。

---

## 6. 功能请求与路线图信号

### 用户提出的新功能需求

| Issue | 需求 | 可行性信号 | 纳入下一版本概率 |
|:---|:---|:---|:---|
| [#4472](https://github.com/agentscope-ai/QwenPaw/issues/4472) | CLI 从 `click` 迁移至 `typer`，支持彩色输出和类型注解 | 纯前端/CLI 改进，无依赖阻塞 | ⭐⭐⭐⭐ 高 |
| [#4437](https://github.com/agentscope-ai/QwenPaw/issues/4437) | 支持删除会话中单条/多条对话 | 已有 #4436（会话拆分）同作者系列提案 | ⭐⭐⭐⭐ 高 |
| [#4436](https://github.com/agentscope-ai/QwenPaw/issues/4436) | 会话拆分：部分对话转移至新会话 | 上下文管理痛点明确 | ⭐⭐⭐⭐ 高 |
| [#4435](https://github.com/agentscope-ai/QwenPaw/issues/4435) | 显示对话轮数计数，辅助上下文管理 | 与 #4436/#4437 形成功能矩阵 | ⭐⭐⭐⭐ 高 |
| [#4486](https://github.com/agentscope-ai/QwenPaw/issues/4486) | Flathub/Flatpak 隔离安装包 | 作者自认优先级低，项目为 Web 应用 | ⭐⭐ 低 |
| [#4491](https://github.com/agentscope-ai/QwenPaw/issues/4491) | 子 Agent 是否继承全局 MCP/ACP 配置 | 架构设计讨论，需核心维护者决策 | ⭐⭐⭐ 中 |

**路线图信号**：`hyper0x` 连续提交 3 个会话管理相关 Issue（#4435-4437），形成**上下文生命周期管理**功能簇，预计将被纳入 v1.2.x 规划。

---

## 7. 用户反馈摘要

### 真实痛点

| 痛点 | 来源 | 典型引述 |
|:---|:---|:---|
| **"三个点跳动"假死** | [#4469](https://github.com/agentscope-ai/QwenPaw/issues/4469), [#4453](https://github.com/agentscope-ai/QwenPaw/issues/4453) | *"重启docker，清空重新安装，结果都一样！发送消息后一直是三个点在跳动状态"* — 用户 `linllyw` |
| **版本升级后配置失效** | [#4496](https://github.com/agentscope-ai/QwenPaw/issues/4496) | AGENTS.md 加载为内置模板，工作区自定义配置被覆盖 |
| **Windows GBK 编码噩梦** | [#4481](https://github.com/agentscope-ai/QwenPaw/issues/4481) | *"一天能看到无数次类似错误：遇到了 GBK 编码问题！Windows 命令行不支持 emoji"* — 现有修复为"零散打补丁" |
| **第三方 API 兼容性** | [#4484](https://github.com/agentscope-ai/QwenPaw/issues/4484) | `extra_headers` 配置在连接测试中被忽略，实际对话却正常 — 诊断困惑 |
| **LLM 限流误伤** | [#4468](https://github.com/agentscope-ai/QwenPaw/issues/4468), [#4478](https://github.com/agentscope-ai/QwenPaw/issues/4478) | *"Operation LLM execution is too frequent, please retry after 300 seconds"* — 飞书/多通道场景频繁触发 |

### 满意度信号
- **快速修复认可**：#4469 用户在 #4487 合并后确认问题解决
- **新技能期待**：`html-video-demo` 技能获合并，展示单文件 HTML 编排能力

---

## 8. 待处理积压

### 需维护者优先关注

| Issue/PR | 创建时间 | 滞留原因 | 风险 |
|:---|:---|:---|:---|
| [#4470](https://github.com/agentscope-ai/QwenPaw/issues/4470) **插件 RCE 漏洞** | 2026-05-17 | 安全类 Issue，暂无 PR | 🔴 **安全事件风险**，建议 48 小时内响应 |
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) **Tauri 2.x 桌面端支持** | 2026-04-24 | 大型功能 PR，审核周期长 | 用户桌面化需求旺盛，长期滞留可能流失贡献者 |
| [#4332](https://github.com/agentscope-ai/QwenPaw/pull/4332) **前端单元测试里程碑** | 2026-05-14 | Under Review，测试覆盖 10 文件 ~100 用例 | 技术债务积累，影响后续重构信心 |
| [#4418](https://github.com/agentscope-ai/QwenPaw/pull/4418) **QwenPaw Pet 插件** | 2026-05-15 | 描述极简，无关联 Issue | 需维护者引导贡献者完善文档 |

---

## 附录：数据速查

| 指标 | 数值 | 环比趋势 |
|:---|:---|:---|
| Issues 更新 | 31 条 | — |
| Issues 活跃/新开 | 19 | — |
| Issues 关闭 | 12 | — |
| PR 更新 | 23 条 | — |
| PR 待合并 | 16 | 积压略高，建议加速审核 |
| PR 已合并/关闭 | 7 | — |
| 新版本发布 | 1 (v1.1.8-beta.1) | — |

---

*本日报基于 GitHub 公开数据生成，不构成投资建议。项目链接均以 `agentscope-ai/QwenPaw` 为准。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-05-19

---

## 1. 今日速览

ZeroClaw 今日保持**高活跃度**，24小时内 Issues 更新 26 条（15 新开/活跃，11 关闭），PR 更新 50 条（42 待合并，8 已合并/关闭）。项目处于**密集迭代期**：技能系统（skills）完成多项技术债务清理，平台支持扩展至 FreeBSD，但 CI 基础设施出现明显故障（PR 标题校验工作流自部署以来从未成功运行），同时渠道（channels）和定时任务（cron）子系统存在多个高严重度稳定性问题待修复。整体健康度**中等偏上**，功能推进迅速，但工程债务和运维问题同步累积。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 今日关闭/合并的重要 Issues & PRs

| 项目 | 类型 | 说明 |
|:---|:---|:---|
| [#1924 FreeBSD 平台支持](https://github.com/zeroclaw-labs/zeroclaw/issues/1924) | ✅ 关闭 | 历时近3个月的平台扩展请求终获解决，ZeroClaw 现提供 FreeBSD amd64 预编译二进制，覆盖服务器、jails 及 TrueNAS 场景，降低 BSD 用户从源码编译的维护负担。 |
| [#6210 SkillForge 自动集成器非 schema 字段泄漏](https://github.com/zeroclaw-labs/zeroclaw/issues/6210) | ✅ 关闭 | 修复 #6128 的后续问题，消除 `generate_toml` 在 `[skill]` 块中错误输出 `source`/`owner`/`language` 等字段的问题，确保 `deny_unknown_fields` 严格校验生效。 |
| [#6128 SkillMeta 增加 deny_unknown_fields](https://github.com/zeroclaw-labs/zeroclaw/issues/6128) | ✅ 关闭 | 核心防御性编程改进，防止拼写错误的字段被静默丢弃，减少技能开发者的调试噩梦。 |
| [#6245 Tavily 搜索提供商未实现](https://github.com/zeroclaw-labs/zeroclaw/issues/6245) | ✅ 关闭 | 填补 web 搜索工具的关键缺口，Tavily 从 TODO stub 转为完整实现，不再回退到 DuckDuckGo。 |
| [#6742 流式负载追踪测试](https://github.com/zeroclaw-labs/zeroclaw/issues/6742) | ✅ 关闭 | 为 `--log-llm` 选项补充 ReliableProvider 流式方法的测试覆盖，确保 LLM 原始负载追踪路径可达。 |
| [#6681 skills install clawhub:* 崩溃](https://github.com/zeroclaw-labs/zeroclaw/issues/6681) | ✅ 关闭 | 修复 `reqwest::blocking` 在 `#[tokio::main]` 上下文中被丢弃导致的 panic，技能安装流程恢复可用。 |
| [#6439 新增 Morph 模型提供商](https://github.com/zeroclaw-labs/zeroclaw/issues/6439) | ✅ 关闭 | 集成 Morph Fast Apply API（10,500+ tok/s），专为编码代理的文件手术式重写优化。 |
| [#6444 新增 GitHub Models 提供商](https://github.com/zeroclaw-labs/zeroclaw/issues/6444) | ✅ 关闭 | 通过单一 GitHub PAT 统一访问 OpenAI、Meta、Microsoft、Mistral、DeepSeek 等模型目录，降低多密钥管理成本。 |
| [#6739 Cron 时区合约不一致](https://github.com/zeroclaw-labs/zeroclaw/issues/6739) | ✅ 关闭 | 修复跨工具、CLI、API 的时区处理语义混乱，消除调度行为的不可预测性。 |
| [#6252 config patch --json 错误响应格式统一](https://github.com/zeroclaw-labs/zeroclaw/issues/6252) | ✅ 关闭 | CLI 与 HTTP API 的错误响应格式达成 parity，提升脚本化调用的可靠性。 |
| [#6749 扩展跨平台构建矩阵](https://github.com/zeroclaw-labs/zeroclaw/pull/6749) | ✅ 合并 | 手动跨平台构建补齐 release 覆盖缺口，新增 x86_64-unknown-freebsd 等目标。 |
| [#6750 Windows 快照 TTL 过短](https://github.com/zeroclaw-labs/zeroclaw/pull/6750) | ✅ 合并 | 权限快照缓存从 1s 提升至 5s，避免每 2 秒轮询触发 PowerShell 进程风暴。 |
| [#6758 MiniMax 提供商拆分](https://github.com/zeroclaw-labs/zeroclaw/pull/6758) | ✅ 合并 | 将 MiniMax 单一条目拆分为 Global/China 双入口，解决 `is_minimax_intl_alias` 导致的用户配置歧义。 |

**整体推进评估**：技能系统完成一轮重要的技术债务清理（schema 严格化、安装稳定性、自动集成器健壮性），平台支持边界扩展（FreeBSD、GitHub Models、Morph），基础设施持续加固（跨平台构建、Windows 性能）。但 42 个待合并 PR 显示代码审查队列承压。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 |
|:---|:---|:---|:---|
| 🥇 | [#1924 FreeBSD 平台支持](https://github.com/zeroclaw-labs/zeroclaw/issues/1924) | 7 | **基础设施多元化**：企业用户（尤其是 TrueNAS 存储/虚拟化场景）拒绝维护私有构建流水线，要求官方预编译二进制。 |
| 🥈 | [#6210 SkillForge 非 schema 字段泄漏](https://github.com/zeroclaw-labs/zeroclaw/issues/6210) | 5 | **开发者体验一致性**：技能元数据的序列化/反序列化必须可预测，静默字段泄漏破坏 `deny_unknown_fields` 的安全承诺。 |
| 🥉 | [#6128 SkillMeta deny_unknown_fields](https://github.com/zeroclaw-labs/zeroclaw/issues/6128) | 4 | **防御性编程**：社区贡献者主动识别"静默丢弃"这一 Rust/serde 常见陷阱，推动项目向 fail-fast 演进。 |

### 背后诉求分析

- **平台长尾需求觉醒**：FreeBSD 支持的落地表明 ZeroClaw 正从"Linux/macOS/Windows 三件套"向真正的跨平台运行时演进，NAS/服务器/边缘场景成为新增长点。
- **技能生态成熟度焦虑**：#6128→#6210 的连锁修复显示技能系统仍处于"边跑边修"阶段，开发者需要更严格的契约保障以降低心智负担。
- **提供商碎片化应对**：Morph（#6439）、GitHub Models（#6444）、MiniMax 拆分（#6758）反映社区对"单一入口、多元后端"的强烈需求，降低配置复杂度是采纳关键。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|:---|
| **S0 - 数据丢失/安全风险** | [#6558 providers erro (Qwen 405 Method Not Allowed)](https://github.com/zeroclaw-labs/zeroclaw/issues/6558) | 🔴 开放 | 自定义 OpenAI 兼容端点（阿里云 DashScope）返回 405，所有提供商/模型尝试失败 | **无** |
| **S1 - 工作流阻塞** | [#6681 skills install clawhub:* panics](https://github.com/zeroclaw-labs/zeroclaw/issues/6681) | ✅ 已关闭 | `reqwest::blocking` 在 async 运行时中 panic | 已修复 |
| **S2 - 行为降级** | [#6632 cron_run 持久化最佳努力投递失败为 ok](https://github.com/zeroclaw-labs/zeroclaw/issues/6632) | 🔴 开放 | 手动 cron_run 仍将投递失败标记为 `ok`，与 #6026 的调度器路径不一致 | **无** |
| **S2 - 行为降级** | [#6739 Cron 时区合约不一致](https://github.com/zeroclaw-labs/zeroclaw/issues/6739) | ✅ 已关闭 | 跨工具/CLI/API 时区语义混乱 | 已修复 |
| **S2 - 行为降级** | [#6643 GLM-5.1 Thoughts 混入最终消息](https://github.com/zeroclaw-labs/zeroclaw/issues/6643) | 🔴 开放 | 思维链内容逃逸至用户可见响应，#5285 回归 | **无** |
| **S2 - 行为降级** | [#6724 Channels supervisor 全禁用配置时崩溃循环](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) | 🔴 开放 | 所有 channel `enabled=false` 时 orchestrator 每 ~2 秒重启，CPU/日志风暴 | **无** |
| **高** | [#6756 models list 自定义提供商未读取 api_key](https://github.com/zeroclaw-labs/zeroclaw/issues/6756) | 🔴 开放 | `doctor` 路径忽略已存储的 api_key，导致模型列表获取失败 | **无** |
| **高** | [#6751 PR 标题校验工作流从未运行](https://github.com/zeroclaw-labs/zeroclaw/issues/6751) | 🔴 开放 | #6396 部署的 CI 工作流持续 `startup_failure`，语义化提交检查形同虚设 | **无** |

**关键风险**：CI 基础设施故障（#6751）与多个高严重度运行时问题（#6558、#6724、#6756）形成叠加效应，可能延缓发布节奏。S0 级 #6558 涉及主流中文模型 Qwen 的兼容性，影响亚太地区用户采纳。

---

## 6. 功能请求与路线图信号

| Issue | 主题 | 纳入可能性 | 信号强度 |
|:---|:---|:---|:---|
| [#6253 Track: zeroclaw skills support and UX (v0.7.6)](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) | v0.7.6 技能系统大迭代协调 | ⭐⭐⭐⭐⭐ **已确认** | 官方路线图 tracker，覆盖 CLI、加载器、审计、安装、沙箱、测试工具链 |
| [#6661 保留 WebSocket 转向时的已提交流式输出](https://github.com/zeroclaw-labs/zeroclaw/issues/6661) | 实时协作/人机协同 | ⭐⭐⭐⭐☆ 高 | 与 #5161 探索相关，编辑器 ACP 场景的核心体验 |
| [#6729 Agent 能力标志（shared/ 访问、workspace 逃逸）](https://github.com/zeroclaw-labs/zeroclaw/issues/6729) | 多租户安全模型 | ⭐⭐⭐⭐☆ 高 | v0.8.0 明确方向，当前硬编码行为阻碍企业部署 |
| [#6754 ACP bridge 自动配对不依赖一次性代码](https://github.com/zeroclaw-labs/zeroclaw/issues/6754) | 运维可靠性 | ⭐⭐⭐⭐☆ 高 | 现有 token 缓存机制对操作员工作流过于脆弱 |
| [#5745 PDF 工具支持](https://github.com/zeroclaw-labs/zeroclaw/issues/5745) | 知识工作负载 | ⭐⭐⭐☆☆ 中 | 学术/科研场景刚需，但工具链复杂度较高 |
| [#6074 审计：恢复 153 个被批量回滚的提交](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | 技术债务偿还 | ⭐⭐⭐☆☆ 中 | 历史包袱，需要维护者投入专门精力 |
| [#6760 Docker 文档更新 (v0.7.5-debian)](https://github.com/zeroclaw-labs/zeroclaw/issues/6760) | 部署体验 | ⭐⭐⭐☆☆ 中 | 社区贡献的 working yaml，待官方采纳 |
| [#6715 清理 200+ 废弃分支](https://github.com/zeroclaw-labs/zeroclaw/issues/6715) | 仓库治理 | ⭐⭐☆☆☆ 低 | 维护者操作，无技术阻力 |

**下一版本（v0.7.6/v0.8.0）关键方向**：技能系统 UX 全面翻新（#6253）、安全能力标志（#6729）、实时协作完整性（#6661）、ACP 桥接健壮性（#6754）。

---

## 7. 用户反馈摘要

### 痛点
- **"每次都要从源码编译"**（#1924）：FreeBSD 用户的运维负担直接转化为平台支持请求，反映企业场景对"开箱即用"的硬性要求。
- **"静默丢弃让我调试了两天"**（#6128）：技能开发者的典型挫败——serde 的默认宽容行为在复杂配置场景成为陷阱。
- **"所有提供商都失败了"**（#6558）：阿里云 DashScope 的 405 错误显示 OpenAI 兼容层的"伪兼容"问题，自定义端点的错误诊断信息不足。
- **"supervisor 每 2 秒重启一次"**（#6724）：配置未完成时的优雅降级缺失，导致"空配置=系统风暴"的反直觉行为。

### 满意点
- **"终于不用自己维护 FreeBSD 构建了"**（#1924 隐含）
- **"Tavily 从 TODO 变成真功能"**（#6245）：社区对"承诺兑现"的正面反馈
- **"GitHub Models 一个 token 搞定所有"**（#6444）：简化密钥管理的统一入口受好评

### 使用场景洞察
- **NAS/ homelab 场景崛起**：TrueNAS CORE/SCALE + FreeBSD 组合显示个人/小型企业基础设施的多元化。
- **中文模型生态依赖**：Qwen（#6558）、GLM（#6643）、MiniMax（#6758）的密集反馈表明亚太市场是增长引擎，但兼容层质量是瓶颈。
- **编辑器集成深化**：ACP（Agent-Computer Protocol）相关 Issue（#6649、#6661、#6754）显示 VS Code/Cursor 类工具的集成需求从"能用"向"可靠"演进。

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 最后更新 | 阻塞原因 | 建议行动 |
|:---|:---|:---|:---|:---|
| [#6074 恢复 153 个被批量回滚的提交](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | 2026-04-24 | 2026-05-18 | 需要维护者专项时间，涉及大规模 cherry-pick/冲突解决 | 指定专人，按子系统分批恢复 |
| [#6303 丢弃提供商调用前的非用户 turns](https://github.com/zeroclaw-labs/zeroclaw/pull/6303) | 2026-05-03 | 2026-05-18 | `needs-author-action`，Google Gemini 严格校验的修复，但作者未响应 | 维护者接管或关闭重开 |
| [#6278 Discord reply-to-bot 隐式提及](https://github.com/zeroclaw-labs/zeroclaw/pull/6278) | 2026-05-02 | 2026-05-18 | `needs-author-action`，社区高频需求（Discord 回复不触发 bot） | 维护者协助完成或重新分配 |
| [#6481 Jira 工具扩展](https://github.com/zeroclaw-labs/zeroclaw/pull/6481) | 2026-05-06 | 2026-05-19 | `needs-author-action`，XL 规模 PR，企业用户刚需 | 要求作者拆分或维护者协同审查 |
| [#6611 文件轮转 crate](https://github.com/zeroclaw-labs/zeroclaw/pull/6611) | 2026-05-13 | 2026-05-18 | `status:blocked`，XL 规模，跨多个核心模块 | 明确阻塞依赖，制定分阶段合并计划 |
| [#6649 ACP 会话持久化](https://github.com/zeroclaw-labs/zeroclaw/pull/6649) | 2026-05-14 | 2026-05-18 | XL 规模，新存储层设计，需要架构审查 | 安排设计评审会议 |

**维护者关注提醒**：42 个待合并 PR 中大量标记 `needs-author-action` 或处于 XL 规模，建议建立"停滞 PR 清理周"机制，避免贡献者流失和代码腐烂。

---

*日报生成时间：2026-05-19 | 数据来源：ZeroClaw GitHub 仓库公开活动*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*