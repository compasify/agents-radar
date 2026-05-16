# OpenClaw 生态日报 2026-05-16

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-16 00:20 UTC

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

# OpenClaw 项目动态日报 | 2026-05-16

---

## 1. 今日速览

OpenClaw 今日呈现**极高活跃度**，24小时内 Issues 与 PR 各更新 500 条，社区讨论密度达到近期峰值。v2026.5.14-beta.2 的发布标志着 Channels/SDK 与 Agents/config 两个核心子系统的持续迭代，但**合并率偏低**（PR 合并/关闭仅 31/500，6.2%）反映出代码审查队列承压。值得关注的是，2026.5.12 版本引发的**回归问题集群**仍在持续发酵，涉及 WebSocket 协议、身份注入、Telegram 交付等多个子系统，用户升级谨慎度上升。社区对 MCP 工具调用审批、跨后端上下文保持等架构级特性的讨论热度显著。

---

## 2. 版本发布

### [v2026.5.14-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.5.14-beta.2)

| 属性 | 内容 |
|:---|:---|
| 发布日期 | 2026-05-14（今日日报覆盖期内） |
| 版本性质 | Beta 预发布 |
| 风险等级 | 中等（涉及核心通道与配置子系统） |

**核心变更：**

| 模块 | 变更内容 | 潜在影响 |
|:---|:---|:---|
| **Channels/SDK** | 向通道回合构造中添加规范化命令回合事实（normalized command turn facts），并为插件入站上下文暴露 command-turn 辅助函数 | 插件开发者可利用标准化命令上下文；现有插件若依赖非规范化的命令数据格式需适配 |
| **Agents/config** | 支持按代理覆盖 bootstrap profile 的 `contextInjection`、`bootstrapMaxChars`、`bootstrapTotalMaxChars` 配置项，支持继承机制 | 精细化控制代理启动上下文注入策略；多代理场景下内存占用与响应延迟可预期改善 |

**迁移注意事项：**
- 使用自定义 bootstrap profile 的用户需验证继承链是否符合预期，建议通过 `openclaw doctor --fix` 检测配置兼容性
- 插件开发者若直接操作 channel turn 内部结构，需迁移至新暴露的 command-turn helpers

---

## 3. 项目进展

### 今日已合并/关闭的关键 PR

| PR | 作者 | 状态 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|:---|
| [#82363](https://github.com/openclaw/openclaw/pull/82363) | joshavant | **已合并** | 修复会话降级来源（fallback provenance）在配置重载后的丢失问题 | **稳定性基石修复**：解决 [#81982](https://github.com/openclaw/openclaw/issues/81982) 中 429 限流触发时 fallback chain 变空导致会话中断的根因 |
| [#82160](https://github.com/openclaw/openclaw/pull/82160) | rubencu | 待合并 | Codex 迁移等待目标插件清单加载完成后再终止发现流程 | 消除 Codex 后端"插件已迁移但未就绪"的竞争条件，提升多插件场景可靠性 |
| [#82298](https://github.com/openclaw/openclaw/pull/82298) | VACInc | 待合并 | 修复 Telegram stop 指令的 lane 处理与网关会话中止逻辑 | 直接响应 [#82234](https://github.com/openclaw/openclaw/issues/82234) 用户紧急诉求，解决"停止指令被排队阻塞"问题 |
| [#82366](https://github.com/openclaw/openclaw/pull/82366) | honor2030 | 待合并 | SQLite WAL 检查点改为 PASSIVE 模式 | 降低 30 分钟定时任务对主事件循环的阻塞，改善长会话稳定性 |

**整体推进评估：** 今日合并率虽低，但 [#82363](https://github.com/openclaw/openclaw/pull/82363) 的合并解决了近期高频出现的会话中断根因，属于**高杠杆修复**。Codex、Telegram、SQLite 三条线的并行推进显示团队在多燃点场景下的响应能力。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 状态 | 核心诉求 | 背后信号 |
|:---|:---|:---:|:---|:---|:---|
| 1 | [#78308](https://github.com/openclaw/openclaw/issues/78308) Channel-mediated approval for MCP tool calls | 10 | OPEN | 将现有 `/approve <id>` 审批管道扩展至 MCP 工具调用 | **安全架构标准化**：社区希望 shell-exec 的"同意信封"模式成为所有外部工具调用的统一范式 |
| 2 | [#82037](https://github.com/openclaw/openclaw/issues/82037) macOS 26.5 WebSocket "wrong protocol" 错误 | 10 | **CLOSED** | 2026.5.12 升级后网关连接失败 | **回归修复验证**：快速关闭显示团队对 5.12 回归集群的响应优先级 |
| 3 | [#78016](https://github.com/openclaw/openclaw/issues/78016) Matrix 语音消息代理无法处理 | 9 | OPEN | 语音消息被接收但不被"听见"（代理编造礼貌回复） | **多模态通道鸿沟**：音频处理管道与文本推理管道存在断层 |
| 4 | [#79794](https://github.com/openclaw/openclaw/issues/79794) Discord READY 事件不触发 | 8 | OPEN | 公会频道入站消息无法接收（5.7 回归） | **网关状态机脆弱性**：WebSocket 连接建立与事件订阅存在竞态 |
| 5 | [#78461](https://github.com/openclaw/openclaw/issues/78461) 网关重复扫描插件元数据 | 7 | OPEN | 模型规范化时的重复元数据加载 | **性能回归**：工作区作用域网关的运行时效率 |

**反应最强烈的 Issues（按 👍 排序）：**

| Issue | 👍 | 诉求 |
|:---|:---:|:---|
| [#77576](https://github.com/openclaw/openclaw/issues/77576) Telegram 群组响应路由至 WebChat | 4 | 跨通道会话路由的回归 |
| [#77467](https://github.com/openclaw/openclaw/issues/77467) MiniMax OAuth 无法自动刷新 | 3 | 认证基础设施缺口 |
| [#79026](https://github.com/openclaw/openclaw/issues/79026) active-memory 子代理死锁 | 3 | 内存子系统的并发安全 |
| [#82150](https://github.com/openclaw/openclaw/issues/82150) DeepSeek V4 500 错误 | 3 | OpenRouter 提供商兼容性 |

---

## 5. Bug 与稳定性

### 今日 Bug 分级矩阵

| 严重等级 | Issue | 描述 | 回归？ | Fix PR | 状态 |
|:---|:---|:---|:---:|:---|:---|
| **P0 - 会话中断** | [#81982](https://github.com/openclaw/openclaw/issues/81982) | 配置热重载时 fallback chain 变空，429 触发会话中断 | 是 | [#82363](https://github.com/openclaw/openclaw/pull/82363) | **已修复** |
| **P0 - 连接失败** | [#82037](https://github.com/openclaw/openclaw/issues/82037) | macOS 5.12 升级后 WebSocket "wrong protocol" | 是 | 未标注 | **已关闭**（需验证修复方式）|
| **P1 - 身份丢失** | [#81955](https://github.com/openclaw/openclaw/issues/81955) | 5.12 升级后代理失去 persona，IDENTITY.md/SOUL.md 注入失效 | 是 | 未标注 | 已关闭，可能为重复 |
| **P1 - 响应异常** | [#82254](https://github.com/openclaw/openclaw/issues/82254) | 升级后代理回复 "NO!" 或 "NO" | 是 | 未标注 | 已关闭 |
| **P1 - 交付失败** | [#82343](https://github.com/openclaw/openclaw/issues/82343) | Codex app-server 后端响应交付死锁 | 否 | 未标注 | OPEN，紧急 |
| **P1 - 路由错误** | [#77576](https://github.com/openclaw/openclaw/issues/77576) | Telegram 群组响应路由至 WebChat 而非返回 Telegram | 是 | 未标注 | OPEN |
| **P2 - 性能退化** | [#77532](https://github.com/openclaw/openclaw/issues/77532) | 代理启动 3+ 分钟/回合，核心插件加载耗时 45-75s | 否 | 未标注 | 已关闭 |
| **P2 - 交付截断** | [#82239](https://github.com/openclaw/openclaw/issues/82239) | Telegram 部分流式传输最终消息截断 | 是 | 未标注 | 已关闭 |

**关键风险信号：**
- **2026.5.12 回归集群** 仍在扩大，涉及 WebSocket 协议、身份注入、Telegram 流式传输、Discord 事件订阅等多个独立子系统，建议维护者评估是否需要发布 **5.12.1 热修复**
- [#82343](https://github.com/openclaw/openclaw/issues/82343) Codex app-server 死锁为**今日新增高优先级**，影响 Discord/Telegram 双通道交付

---

## 6. 功能请求与路线图信号

### 高潜力功能请求（已有相关 PR 或架构铺垫）

| 功能 | Issue | 状态 | 纳入下一版本概率 | 判断依据 |
|:---|:---|:---|:---:|:---|
| **MCP 工具调用审批管道** | [#78308](https://github.com/openclaw/openclaw/issues/78308) | OPEN | **高** | 复用现有 `/approve` 基础设施，设计文档完整，社区安全诉求强烈 |
| **跨后端模型切换上下文保持** | [#79047](https://github.com/openclaw/openclaw/issues/79047) | OPEN | 中 | 架构改动大，需会话序列化标准，但多提供商策略是明确趋势 |
| **Signal 实时工具调用进度** | [#77202](https://github.com/openclaw/openclaw/issues/77202) | OPEN | 中 | Telegram 已实现类似模式，技术路径可复制 |
| **Slash 命令 i18n** | [#79458](https://github.com/openclaw/openclaw/issues/79458) | OPEN | 中-高 | 本地化基础设施投入低，用户覆盖广 |

### 架构级信号

| PR/Issue | 信号 |
|:---|:---|
| [#81729](https://github.com/openclaw/openclaw/pull/81729) | 移除系统事件信任元数据，转向显式运行时权限——**安全模型简化** |
| [#68734](https://github.com/openclaw/openclaw/pull/68734) | 允许 prompt hooks 动态缩小工具+技能表面——**精细化权限控制** |
| [#80802](https://github.com/openclaw/openclaw/pull/80802) | Talk/Canvas/A2UI 加固 + macOS 环境叠加层——**多模态交互基础设施** |

---

## 7. 用户反馈摘要

### 真实痛点（直接引用语境）

| 场景 | 用户原声/行为描述 | 根因归类 |
|:---|:---|:---|
| **升级焦虑** | "After upgrading from 2006.5.7 to 2006.5.12... failing to connect" | 版本间兼容性测试覆盖不足 |
| **身份断裂** | "agent appears to lose its identity/persona and behaves as if workspace files... are missing" | 配置迁移时上下文注入管道断裂 |
| **停止失效** | "Telegram stop messages wait behind isolated polling spool" | 通道隔离架构下的信号优先级反转 |
| **多通道混乱** | "responses route to webchat instead of back to Telegram" | 会话路由键的规范化不一致 |
| **诊断困难** | "`openclaw agent` CLI silently falls back to embedded mode" | 静默降级掩盖真实网关状态 |

### 满意度信号

- **正面**：Realtime Talk 低延迟体验获认可（[#76952](https://github.com/openclaw/openclaw/issues/76952)），用户主动请求文档完善与移动端桥接
- **负面**：5.12 升级体验" deteriorated"（[#82254](https://github.com/openclaw/openclaw/issues/82254)），"NO!" 异常回复成为社区梗，反映品牌信任损耗

---

## 8. 待处理积压

### 长期未响应的高价值 Issue/PR

| 条目 | 创建日期 | 最后更新 | 积压天数 | 风险/提醒 |
|:---|:---|:---|:---:|:---|
| [#36614](https://github.com/openclaw/openclaw/issues/36614) per-channel-peer 路由污染主会话 | 2026-03-05 | 2026-05-15 | **71天** | 会话隔离架构的基础缺陷，影响 iMessage 及未来所有 per-peer 通道 |
| [#68209](https://github.com/openclaw/openclaw/issues/68209) 模型切换导致上下文失控 | 2026-04-17 | 2026-05-15 | 29天 | 高活跃用户报告的生产环境不稳定根因 |
| [#70493](https://github.com/openclaw/openclaw/issues/70493) 隔离会话网关缺少完整 Playwright | 2026-04-23 | 2026-05-15 | 23天 | 子代理浏览器自动化能力缺口，制约复杂工作流 |
| [#47318](https://github.com/openclaw/openclaw/pull/47318) 配置设置时验证模型标识符 | 2026-03-15 | 2026-05-16 | **62天** | XL 级 PR 审查瓶颈，用户体验改进（防止无效模型配置）|
| [#75369](https://github.com/openclaw/openclaw/pull/75369) 加固 sessions_send 委托公告信任 | 2026-05-01 | 2026-05-16 | 15天 | 安全加固，韩语摘要显示国际化贡献者活跃但审查资源不足 |

---

**日报编制说明**：本报告基于 GitHub 公开数据生成，PR 评论数字段存在 `undefined` 值，已按提交活跃度与关联 Issue 紧急度综合评估优先级。建议维护者优先关注 5.12 回归集群的统一根因分析与热修复发布决策。

---

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析 | 2026-05-16

---

## 1. 生态全景

个人 AI 助手开源生态正处于**"从功能验证向生产就绪"的关键转折期**。头部项目（OpenClaw、NanoBot、Hermes Agent）日均 Issues/PR 处理量达 50+，显示工程化投入加速；推理模型（DeepSeek/MiMo）兼容性成为共性技术债务，各项目并行修复；安全架构（审批管道、沙箱隔离、密钥管理）从边缘需求演进为核心竞争力；远程访问与多智能体协作正成为下一代差异化战场。整体呈现**"高迭代、深债务、强分化"**态势——快速扩张的功能面与基础设施的稳定性之间存在显著张力。

---

## 2. 各项目活跃度对比

| 项目 | Issues (新/关/活跃) | PRs (新/合/待) | Release | 健康度 | 关键信号 |
|:---|:---|:---|:---|:---|:---|
| **OpenClaw** | 500 / 31 / 高 | 500 / 31 / 高积压 | v2026.5.14-beta.2 | ⚠️ **承压** | 合并率仅 6.2%，5.12 回归集群发酵，审查队列瓶颈 |
| **NanoBot** | 58 / 53 / 5 | 22 / 17 / 5 | 无 (0.1.5.post3) | 🟢 **健康** | 日清率 91%/77%，文档工程化批量推进 |
| **Hermes Agent** | 50 / 8 / 42 | 50 / 16 / 34 | 无 | 🟡 **活跃偏热** | 社区贡献占比 ~80%，P1 Bug 新增 3 项，4 项无修复 PR |
| **PicoClaw** | 11 / 2 / 9 | 35 / 22 / 13 | v0.2.8-nightly | 🟡 **稳健** | 推理兼容性修复就绪，stale PR 积压需清理 |
| **NanoClaw** | 50 / 44 / 6 | 50 / 44 / 6 | **v2.0.63** (首个规范发布) | 🟢 **成熟转折** | 88% 处理率，架构治理（容器运行器/DB 拆分）完成 |
| **NullClaw** | 2 / 0 / 2 | 0 / 0 / 0 | 无 | 🔴 **低活跃** | 仅 2 条 Issue，无 PR 活动，维护响应待观察 |
| **IronClaw** | 17 / — / 17 | 50 / 28 / 22 | v0.28.2 | 🟡 **密集迭代** | Reborn 架构进入生产验证，E2E 失败 6 天未响应 |
| **LobsterAI** | — / — / 1 | 36 / 33 / 3 | 无 | 🟢 **高效** | 33 PR 合并仅 3 待审，但 #1988 信任危机需紧急响应 |
| **TinyClaw** | 0 | 0 | 无 | ⚫ **停滞** | 24h 零活动 |
| **Moltis** | 4 / 4 / 0 | 7 / 6 / 1 | 无 | 🟢 **优异** | 零积压，Issue→PR 转化 <24h，远程访问架构推进 |
| **CoPaw** | 24 / 11 / 13 | 50 / 34 / 16 | 无 (v1.1.7b1) | 🟡 **高活跃** | 安全加固密集，61 天语音 Issue 长期积压 |
| **ZeptoClaw** | 0 | 0 | 无 | ⚫ **停滞** | 24h 零活动 |
| **ZeroClaw** | 22 / 9 / 13 | 50 / 6 / 44 | 无 | 🟡 **高活跃高债务** | 44 PR 待合并，SOP 子系统"文档与实现脱节"暴露 |

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 表现 | 生态对比 | 定位判断 |
|:---|:---|:---|:---|
| **社区规模** | 24h 500 Issues + 500 PRs，绝对量级第一 | NanoBot 58+22，Hermes 50+50，NanoClaw 50+50 | **生态引力中心**，但审查带宽与规模不匹配 |
| **技术路线** | Channels/SDK + Agents/config 双核心，MCP 工具调用审批管道推进中 | NanoBot 侧重长任务架构（LongTaskTool + /goal）；Hermes 强在技能自动创建；IronClaw 押注 Reborn 多智能体运行时 | **"通用平台"路线**，通道抽象与代理配置精细化领先，但长任务/多智能体架构跟进滞后 |
| **优势领域** | ① 多通道生态广度（Telegram/Discord/WebChat/Matrix 全覆盖）<br>② 配置继承与上下文注入机制<br>③ 安全审批管道（shell-exec → MCP 扩展） | PicoClaw 硬件嵌入式场景；Moltis 自托管远程访问；CoPaw 企业微信/钉钉深度适配 | **IM 通道集成与配置工程化**的标杆，企业多通道部署首选 |
| **核心风险** | 5.12 回归集群（WebSocket/身份注入/Telegram/Discord）持续扩大，合并率 6.2% 反映治理危机 | NanoClaw 已完成 v2 架构治理；Moltis 零积压运营 | **"大而不稳"**——规模优势可能因质量信任损耗而衰减 |

**关键差异**：OpenClaw 是唯一同时面临 **"社区规模红利"与"治理规模诅咒"** 的项目。其 `/approve` 审批管道向 MCP 扩展的设计（#78308）具有架构前瞻性，但 5.12 版本的回归问题集群显示**发布质量控制**落后于功能迭代速度。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 紧迫程度 |
|:---|:---|:---|:---:|
| **推理模型兼容性（DeepSeek/MiMo）** | OpenClaw、Hermes Agent、PicoClaw、CoPaw、ZeroClaw | `reasoning_content` 回传/解析/传递标准化，多轮工具调用 400 错误修复 | 🔴 **极高** |
| **MCP 工具调用安全审批** | OpenClaw (#78308)、NanoBot、Hermes Agent | 将 shell-exec 的"同意信封"模式扩展至所有外部工具调用 | 🟡 **高** |
| **密钥/凭证外部化管理** | NanoBot (#2172)、NanoClaw (#80)、Hermes Agent (xAI OAuth) | 1Password/HashiCorp Vault 集成，禁止明文存储，自动刷新 | 🟡 **高** |
| **定时任务/会话隔离可靠性** | NanoBot、CoPaw (#4162)、NullClaw (#915) | 上下文清理、超时控制、认证令牌跨任务传递 | 🟡 **高** |
| **远程访问与零配置部署** | Moltis (#995/#1002)、PicoClaw (#28)、NanoClaw (#439) | NetBird/Cloudflare Tunnel/LM Studio 一键连接，TLS 证书自动化 | 🟢 **中-高** |
| **多智能体协作运行时** | IronClaw (Reborn/WS-13~17)、ZeroClaw (#6398)、NanoClaw (#2497 Agent Network) | 从"单智能体多通道"向"多智能体编排网络"跃迁 | 🟢 **中**（架构级）|
| **语音/多模态通道补齐** | CoPaw (#1516 Telegram Audio)、PicoClaw (#2817 语音转录断裂)、Hermes Agent (Matrix 语音) | 音频处理管道与文本推理管道的断层修复 | 🟢 **中** |
| **TUI/WebUI 渲染稳定性** | IronClaw (#3675 Markdown 表格)、NanoBot (#3790 打印错乱)、OpenClaw (WebSocket 协议) | 流式渲染、长内容布局、表格/代码块格式保真 | 🟢 **中** |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户画像 | 技术架构关键差异 |
|:---|:---|:---|:---|
| **OpenClaw** | 通用多通道 AI 助手平台，配置精细化 | 技术爱好者、多 IM 部署需求者、插件开发者 | TypeScript/Node，Channels/SDK 抽象，bootstrap profile 继承链 |
| **NanoBot** | 长任务执行（LongTaskTool）、企业 IM 深度集成 | 企业私域部署、飞书/钉钉用户、复杂工作流需求者 | Python，meta-ReAct 循环，session metadata 全链路持久化 |
| **Hermes Agent** | 技能自动创建、持久化记忆、子代理委托 | 重度 CLI 用户、开发者生产力工具、长会话场景 | Rust，state.db 持久化，delegate_task 子代理架构 |
| **PicoClaw** | 嵌入式/边缘硬件（Pico 客户端）、本地模型优先 | 资源受限环境、隐私敏感用户、硬件黑客 | Rust，OpenAI 兼容层，硬件媒体透传 |
| **NanoClaw** | "微小核心+按需扩展"安全模型、容器化技能 | 安全审计敏感用户、Claude Code 替代寻求者 | TypeScript，技能市场架构，launchd/systemd 服务化 |
| **IronClaw** | 多智能体运行时（Reborn）、WASM 沙箱扩展 | 企业级 Agent 编排、第三方扩展生态建设者 | Rust，planned runtime 状态机，host capability 端口模型 |
| **LobsterAI** | 多文件预览工作台（Artifacts）、推理深度控制 | 知识工作者、PPT/文档重度处理用户 | Electron/React，ThinkingLevelSelector，NSP-ClawGuard 安全监控 |
| **Moltis** | 自托管基础设施、远程安全访问、Proxmox/LXC | 家庭实验室用户、VPS 自托管者、去中心化偏好者 | Rust/Astro，TLS 自动化，NetBird/Cloudflare Tunnel 集成 |
| **CoPaw** | 企业级通道适配（钉钉/企微/QQ）、定时任务 | 中国企业 IT 部门、多平台 IM 统一接入需求 | Python，CloudPaw 远程 Agent，YARA 技能安全扫描 |
| **ZeroClaw** | SOP 标准操作程序、生产工作流编排、监督模式 | 金融/医疗/工业审计敏感行业、合规驱动部署 | Rust，SopEngine，WebSocket 审批协议，会话所有权模型 |

---

## 6. 社区热度与成熟度分层

| 层级 | 项目 | 特征 | 阶段判断 |
|:---|:---|:---|:---|
| **🔥 快速迭代期（功能扩张）** | OpenClaw、CoPaw、ZeroClaw | 高 Issues/PR 吞吐量，新功能密集，但债务同步累积 | 需警惕"速度-质量"剪刀差扩大 |
| **🚀 架构升级期（技术重构）** | IronClaw (Reborn)、NanoClaw (v2 治理)、NanoBot (长任务架构) | 核心子系统重写或治理规范化，短期稳定性波动换取长期扩展性 | 关键窗口期，重构成败决定下一代竞争力 |
| **🛡️ 质量巩固期（债务偿还）** | Hermes Agent、PicoClaw | 生产修复主导，技能验证/推理兼容/通道稳定性 | 从"能用"到"好用"的爬坡期 |
| **✅ 高效运营期（低债务）** | Moltis、LobsterAI | 高合并率、低积压、快速闭环，Issue→PR 转化效率高 | 可承受适度功能扩张而不失控 |
| **⚠️ 停滞/风险期** | NullClaw、TinyClaw、ZeptoClaw | 24h 零活动或极低活动，社区贡献枯竭 | 需评估维护者资源投入或项目存续价值 |

---

## 7. 值得关注的趋势信号

| 趋势 | 信号来源 | 对开发者的参考价值 |
|:---|:---|:---|
| **"推理模型兼容性"成为新的跨平台标准战场** | 5+ 项目同步修复 DeepSeek/MiMo `reasoning_content` | 设计 LLM 适配层时，需将 reasoning 字段的**累积-回传-解析**作为一等公民，而非事后补丁 |
| **安全从"功能"进化为"架构"** | OpenClaw MCP 审批管道、NanoBot 沙箱+密钥外部化、ZeroClaw 会话所有权、CoPaw YARA 扫描 | Agent 安全需**分层设计**：运行时沙箱（WASM）、供应链审计（技能签名）、交互审批（工具调用）、凭证生命周期（自动刷新） |
| **"去供应商锁定"成为用户核心诉求** | NanoClaw #80 (60👍)、Hermes 多提供商适配、IronClaw LLM facade | 架构设计需假设**主供应商可能不可用时**的优雅降级，LiteLLM/统一网关层成为基础设施标配 |
| **远程访问从"高级功能"变为"基础假设"** | Moltis NetBird/Cloudflare、PicoClaw LM Studio 一键连接 | 本地优先（local-first）AI 助手需内置 **NAT 穿透与零信任访问**，而非依赖用户自建 VPN |
| **多智能体从"演示"走向"运行时"** | IronClaw Reborn WS-13~17、ZeroClaw v0.8.0、NanoClaw Agent Network | 单智能体架构的天花板已现，下一代竞争焦点是**Agent 间委托、状态共享、冲突解决**的运行时原语 |
| **"文档与实现脱节"成为新型技术债务** | ZeroClaw SOP 审计系列、OpenClaw 5.12 回归集群 | 需建立**"文档即契约"**的工程纪律：功能发布需同步可验证的测试用例，而非仅用户手册描述 |
| **定时任务/会话隔离的可靠性缺口** | CoPaw #4162、NullClaw #915、NanoBot /goal 持久化 | 异步任务与交互式会话的**状态边界**是常见盲区，需显式设计 session lifecycle 与 cron context 的隔离机制 |

---

*分析基于 2026-05-16 各项目 GitHub 公开数据生成。建议技术决策者重点关注：OpenClaw 的治理瓶颈是否触发社区分叉、IronClaw Reborn 生产验证进度、以及 LiteLLM/统一网关层的生态收敛信号。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-05-16

> **项目**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | **日期**: 2026-05-16 | **分析师**: AI 智能体与开源项目分析

---

## 1. 今日速览

NanoBot 今日展现出**极高的社区活跃度与工程效率**：24 小时内 58 条 Issues 更新（53 条关闭，仅 5 条活跃/新开），22 条 PR 更新（17 条已合并/关闭），**清理效率高达 91%（Issues）和 77%（PRs）**。项目正经历一场大规模的**文档基础设施重构**——贡献者 `xianqiangfu` 单日批量关闭 21 个文档/注释/架构相关的任务型 Issue，标志着中文文档体系与代码注释工程进入系统化交付阶段。与此同时，核心功能持续迭代：WebUI 渲染优化、MiMo 推理控制、Codex 缓存稳定性、安全加固（媒体路径限制）等关键修复均已合入主干。

---

## 2. 版本发布

**无新版本发布**（最新版本仍为 `0.1.5.post3.2026.05.13`）

> 注：昨日密集的功能合并可能为近期版本发布积累素材，建议关注里程碑进度。

---

## 3. 项目进展

### 🔧 已合并/关闭的关键 PR（17 条）

| PR | 作者 | 核心贡献 | 影响评估 |
|:---|:---|:---|:---|
| [#3782](https://github.com/HKUDS/nanobot/pull/3782) | yorkhellen | **移除 WebUI 贪婪 Markdown 预加载**（>1MB  chunk 懒加载） | 显著降低首屏加载时间，修复 #3746 |
| [#3460](https://github.com/HKUDS/nanobot/pull/3460) | chengyongru | **LongTaskTool 多步 Agent 任务工具**（meta-ReAct 循环） | 长任务执行能力重大升级 |
| [#3788](https://github.com/HKUDS/nanobot/pull/3788) | Re-bin | **`/goal` 命令与长任务状态持久化**（session metadata → WebSocket → WebUI 全链路） | 用户目标追踪体验端到端闭环 |
| [#3373](https://github.com/HKUDS/nanobot/pull/3373) + [#3792](https://github.com/HKUDS/nanobot/pull/3792) | JiajunBernoulli | **Gateway 生命周期通知钩子**（on_start/on_stop），覆盖通用通道 + 飞书 | 运维可观测性提升，解决 #3279 |
| [#3793](https://github.com/HKUDS/nanobot/pull/3793) | boogieLing | **Codex prompt_cache_key 稳定性修复**（基于 system prompt + 首条 user message） | KV 缓存命中率提升，成本优化 |
| [#3840](https://github.com/HKUDS/nanobot/pull/3840) | boogieLing | **Brave 搜索 429 限流退避**（1 秒重试 + 清晰错误提示） | 解决 #2560，工具可靠性增强 |
| [#3844](https://github.com/HKUDS/nanobot/pull/3844) | chengyongru | **Runtime context 后置优化**（用户内容前缀稳定化） | 缓存命中率进一步提升 |
| [#3842](https://github.com/HKUDS/nanobot/pull/3842) | Hinotoi-agent | **本地媒体附件沙箱限制**（workspace restriction 下路径隔离） | **安全加固**，防止 LLM 越权访问 |
| [#3841](https://github.com/HKUDS/nanobot/pull/3841) | chengyongru | **移除冗余 GlobTool**（GrepTool.glob 已覆盖） | 代码精简，维护成本降低 |
| [#3752](https://github.com/HKUDS/nanobot/pull/3752) | tamvicky | **语音转录后清理 media_paths**（WhatsApp 场景） | 修复 LLM 误识别未处理音频 |
| [#3764](https://github.com/HKUDS/nanobot/pull/3764) | JiajunBernoulli | **Windows UNC 路径支持**（`\\server\share`） | 企业 Windows 部署兼容性 |
| [#3774](https://github.com/HKUDS/nanobot/pull/3774) | chengyongru | **DM 发送者配对审批流**（chat-native，私域部署安全） | 依赖 #3779，隐私场景关键能力 |
| [#3789](https://github.com/HKUDS/nanobot/pull/3789) | Hinotoi-agent | **飞书下载文件名沙箱化**（防止路径遍历） | **安全加固**，供应链安全 |
| [#3734](https://github.com/HKUDS/nanobot/pull/3734) | pixan-ai | **MiMo thinking_type 透传**（`reasoning_effort: "none"` 生效） | 解决 #3585，模型行为可控 |

**整体推进评估**：今日合并内容覆盖**性能优化（2 项）、安全加固（3 项）、长任务架构（2 项）、运维可观测性（2 项）、跨平台兼容（1 项）、缓存效率（2 项）**，属于**高质量的多维度迭代日**。

---

## 4. 社区热点

### 💬 讨论最活跃的议题

| 排名 | Issue/PR | 评论数 | 热度分析 |
|:---|:---|:---:|:---|
| 1 | [#3790](https://github.com/HKUDS/nanobot/issues/3790) WebUI 会话打印内容显示错乱 | **9** | **活跃 Bug**，0.1.5.post3 回归，刷新可恢复。用户 `kxsk-git` 持续跟进，尚未有 fix PR，影响打印/导出场景 |
| 2 | [#3402](https://github.com/HKUDS/nanobot/issues/3402) JSON → TOML 配置迁移 | **9** | **已关闭的设计讨论**，`cschur` 推动配置人机工程改进，社区对 TOML 的注释支持、多行字符串需求强烈。虽已关闭，但**配置格式现代化诉求持续存在** |
| 3 | [#2172](https://github.com/HKUDS/nanobot/issues/2172) 密钥引用机制（非明文存储） | **4** | **长期功能请求**，`EvanNotFound` 提出 `file`/`exec` 两种密钥注入方式（支持 1Password 等）。与今日安全加固 PR（#3842, #3789）形成呼应，**安全架构升级的前置需求** |

**诉求洞察**：
- **稳定性焦虑**：WebUI 渲染问题（#3790, #3848）连续出现，前端质量保障需加强
- **配置工程化**：从 JSON 迁移到 TOML 再到密钥外部化，用户希望 NanoBot 从"脚本工具"进化为"生产级服务"
- **安全合规**：企业部署场景下，密钥管理、路径隔离、审计日志成为硬性门槛

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#3790](https://github.com/HKUDS/nanobot/issues/3790) | **OPEN** | WebUI 会话打印内容错乱（0.1.5.post3 回归，需刷新恢复） | **暂无** |
| 🟡 **中** | [#3848](https://github.com/HKUDS/nanobot/issues/3848) | CLOSED | webui render bug（截图显示布局异常） | 已修复（关联 #3782） |
| 🟡 **中** | [#2440](https://github.com/HKUDS/nanobot/issues/2440) | CLOSED | Codex `prompt_cache_key` 每轮变化导致缓存失效 | [#3793](https://github.com/HKUDS/nanobot/pull/3793) ✅ |
| 🟢 **低** | [#3746](https://github.com/HKUDS/nanobot/issues/3746) | CLOSED | WebUI 贪婪预加载 Markdown chunk | [#3782](https://github.com/HKUDS/nanobot/pull/3782) ✅ |
| 🟢 **低** | [#2560](https://github.com/HKUDS/nanobot/issues/2560) | CLOSED | Brave 搜索 429 无退避 | [#3840](https://github.com/HKUDS/nanobot/pull/3840) ✅ |

**风险评估**：唯一未修复的 🔴 高优先级问题 #3790 涉及前端渲染管线，可能与 #3782 的懒加载改动存在关联，建议维护者优先排查。

---

## 6. 功能请求与路线图信号

| 功能方向 | 来源 | 成熟度信号 | 纳入可能性 |
|:---|:---|:---|:---|
| **密钥引用/外部化** | [#2172](https://github.com/HKUDS/nanobot/issues/2172) | 社区长期诉求 + 今日 3 个安全 PR 铺垫 | ⭐⭐⭐⭐⭐ **高**，下一版本核心特性 |
| **TOML 配置迁移** | [#3402](https://github.com/HKUDS/nanobot/issues/3402) | 已关闭但讨论充分，技术债务明确 | ⭐⭐⭐⭐☆ 中-高，需评估迁移成本 |
| **Plan 工具（任务分解）** | [#3791](https://github.com/HKUDS/nanobot/pull/3791) | **待合并 PR**，`create/update/show/delete` 完整 CRUD | ⭐⭐⭐⭐⭐ **高**，与 LongTaskTool 形成组合拳 |
| **skill_load 工具** | [#3847](https://github.com/HKUDS/nanobot/pull/3847) | **待合并 PR**，解决多轮对话 skill.md 丢失 | ⭐⭐⭐⭐⭐ **高**，用户体验关键修复 |
| **OpenCode Go 网关** | [#3785](https://github.com/HKUDS/nanobot/pull/3785) | **待合并 PR**，聚合 GLM/Kimi/DeepSeek/MiMo/Qwen/MiniMax | ⭐⭐⭐⭐☆ 中-高，商业化网关生态扩展 |
| **MiMo Gateway 推理控制** | [#3851](https://github.com/HKUDS/nanobot/pull/3851) | **待合并 PR**，修复 #3845，OpenRouter 等网关场景 | ⭐⭐⭐⭐☆ 中-高，补全 #3734 覆盖盲区 |

**路线图判断**：项目正从"功能堆砌"转向"架构治理"——长任务（LongTaskTool + /goal + plan）、安全加固（密钥管理 + 沙箱）、文档工程（中文体系）构成**下一版本（0.2.x？）的三大支柱**。

---

## 7. 用户反馈摘要

### 😤 痛点
- **前端稳定性**："更新最新源码后 WebUI 打印错乱，需刷新恢复"（#3790）——升级体验断裂
- **配置管理困难**：JSON 无注释、密钥明文存储，生产部署"安全噩梦"（#2172 引用 OpenClaw 对比）
- **缓存成本敏感**：Codex 缓存失效直接导致"每次请求都重新计费"（#2440）

### 😊 满意点
- **长任务能力**：LongTaskTool 的 meta-ReAct 设计获认可，复杂任务可拆解执行
- **飞书生态深度**：生命周期通知 + 语音消息处理 + 文件名安全，企业 IM 集成成熟
- **响应速度**：Brave 429 问题从报告到修复闭环高效（#2560 → #3840）

### 🎯 使用场景洞察
- **私域部署**：DM 配对审批（#3774）、workspace 限制（#3842）指向"企业内部 AI 助手"场景
- **多模型路由**：OpenCode Go（#3785）、MiMo gateway（#3851）反映用户需要"单一入口，多模型调度"

---

## 8. 待处理积压

| 类型 | 条目 | 创建时间 | 阻塞原因 | 建议行动 |
|:---|:---|:---:|:---|:---|
| **Bug** | [#3790](https://github.com/HKUDS/nanobot/issues/3790) WebUI 打印错乱 | 2026-05-14 | 无 assignee，无 fix PR | 🔴 **24h 内响应**，关联 #3782 变更排查 |
| **Feature** | [#2172](https://github.com/HKUDS/nanobot/issues/2172) 密钥引用机制 | 2026-03-17 | 设计讨论充分，无实现 PR | 结合今日安全 PR，制定密钥管理 RFC |
| **PR 待合并** | [#3791](https://github.com/HKUDS/nanobot/pull/3791) Plan 工具 | 2026-05-14 | 依赖 review | 优先 review，与 LongTaskTool 整合测试 |
| **PR 待合并** | [#3847](https://github.com/HKUDS/nanobot/pull/3847) skill_load 工具 | 2026-05-15 | 新提交 | 验证多轮对话 skill 持久化场景 |
| **PR 待合并** | [#3785](https://github.com/HKUDS/nanobot/pull/3785) OpenCode Go | 2026-05-14 | 网关生态扩展，需兼容性测试 | 模型覆盖矩阵测试（GLM/Kimi/DeepSeek 等） |
| **PR 待合并** | [#3851](https://github.com/HKUDS/nanobot/pull/3851) MiMo Gateway thinking | 2026-05-15 | 修复 #3845 | 与 #3734 联合验证，确保网关/直连行为一致 |
| **PR 待合并** | [#3850](https://github.com/HKUDS/nanobot/pull/3850) ruff format 文档警告 | 2026-05-15 | 贡献者体验 | 快速合并，降低新 contributor 摩擦 |

---

## 附录：数据健康度仪表盘

| 指标 | 数值 | 健康度 |
|:---|:---:|:---:|
| Issues 日清率 | 91.4% (53/58) | 🟢 优秀 |
| PR 日清率 | 77.3% (17/22) | 🟢 良好 |
| 待合并 PR 积压 | 5 条 | 🟡 可控 |
| 无响应 Bug >24h | 1 条 (#3790) | 🔴 需关注 |
| 安全相关合并 | 3 条 | 🟢 积极 |
| 文档工程投入 | 21 条 Issue 批量关闭 | 🟢 基础设施建设 |

---

> **明日关注**：#3790 WebUI 修复进展、#3791/#3847 核心功能 PR 合并、密钥管理 RFC 启动信号。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-05-16

---

## 1. 今日速览

Hermes Agent 今日维持**高强度开发节奏**，24小时内 50 个 Issues 和 50 个 PR 产生更新，社区活跃度处于**健康偏热区间**（活跃/新开 42:8 的 Issue 比例显示讨论旺盛）。核心进展集中在 **DeepSeek 推理模型兼容性修复**（3 个相关 Issue 关闭）、**xAI OAuth 生态完善**（SuperGrok 支持迭代）以及**网关架构稳定性加固**（僵尸进程锁清理、代理环境变量透传等）。值得注意的是，无新版本发布，但合并的 16 个 PR 中多项为生产环境关键修复，项目整体向**企业级可靠性**持续迈进。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#26660](https://github.com/NousResearch/hermes-agent/pull/26660) | someaka | **修复状态不一致**：`add_provider()` 先加载工具 schema 再修改状态，避免异常时留下脏状态 | #9948 |
| [#26659](https://github.com/NousResearch/hermes-agent/pull/26659) | someaka | **修复进程通知回归**：`poll()` 不应标记完成状态为"已消费"，解决重复通知抑制过度问题 | #10156 |
| [#26666](https://github.com/NousResearch/hermes-agent/pull/26666) | teknium1 | **UX 文案修复**：xAI 403 错误提示不再错误指责已订阅用户 | #26644 后续 |
| [#26664](https://github.com/NousResearch/hermes-agent/pull/26664) | teknium1 | **阻断无限循环**：xAI OAuth 403 时停止凭证刷新死循环；`grok-4.3` 上下文修正为 1M | - |

### 关键 Issue 关闭（生产修复落地）

| Issue | 标签 | 修复价值 |
|:---|:---|:---|
| [#17212](https://github.com/NousResearch/hermes-agent/issues/17212) | `provider/deepseek`, P2 | DeepSeek 直接 API 多轮工具调用 400 错误——**推理内容回传机制修复** |
| [#15700](https://github.com/NousResearch/hermes-agent/issues/15700) | `provider/deepseek`, P2 | DeepSeek Anthropic 兼容端点缺少 `thinking: disabled` 参数——**适配器参数补全** |
| [#17825](https://github.com/NousResearch/hermes-agent/issues/17825) | `provider/deepseek`, P3 | DeepSeek 推理模型会话重载时 `reasoning_content` 丢失——**会话序列化修复** |
| [#17063](https://github.com/NousResearch/hermes-agent/issues/17063) | `platform/telegram`, P1 | Telegram 网关重连 20 次后永久停用——**重试策略修正** |
| [#1594](https://github.com/NousResearch/hermes-agent/issues/1594) | `platform/telegram` | 回复消息上下文注入——**消息引用可追溯** |

**整体评估**：今日合并修复覆盖 **DeepSeek 全链路兼容性**（直接 API + Anthropic 兼容端点 + 会话持久化）、**网关长连接可靠性**、**第三方 OAuth 生态健壮性**，属于**高价值维护性迭代**。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 | 背后信号 |
|:---|:---|:---:|:---|:---|
| 1 | [#17212](https://github.com/NousResearch/hermes-agent/issues/17212) DeepSeek 400 "reasoning_content must be passed back" | 4 | 多轮工具调用稳定性 | **推理模型成为主流选择**，但各厂商实现差异大，适配成本高 |
| 2 | [#25833](https://github.com/NousResearch/hermes-agent/issues/25833) Self-created skills 缺乏正确性机制保障 | 4 | 技能系统自动生成的可靠性 | 用户信任**技能自动创建**功能，但担忧**"静默失败"**风险 |
| 3 | [#15700](https://github.com/NousResearch/hermes-agent/issues/15700) DeepSeek missing 'thinking: disabled' | 3 | Anthropic 兼容端点参数对齐 | 厂商"兼容层"实际不兼容，**适配器需要防御性编程** |
| 4 | [#416](https://github.com/NousResearch/hermes-agent/issues/416) Skill Validation & Linting | 3 | 技能质量自动化检查 | **与 #25833 形成需求共振**——技能生态进入"质量治理"阶段 |
| 5 | [#17063](https://github.com/NousResearch/hermes-agent/issues/17063) Gateway reconnect 20次后永久停止 | 3 | 长运行网关的韧性 | **生产环境 7×24 运行**成为常态，用户对"自愈能力"要求提高 |

### 反应最多的 Issues

| Issue | 👍 | 说明 |
|:---|:---:|:---|
| [#20470](https://github.com/NousResearch/hermes-agent/issues/20470) Telegram DM topic binding 未刷新导致压缩循环 | 3 | **生产痛点**：会话分裂与元数据不一致的级联故障 |
| [#5563](https://github.com/NousResearch/hermes-agent/issues/5563) Memory 持久化、token 浪费、state.db 损坏综合报告 | 1 | 重度用户万字长文，**系统架构级反馈** |
| [#416](https://github.com/NousResearch/hermes-agent/issues/416) Skill Validation & Linting | 1 | 早期功能请求持续获得认同 |

---

## 5. Bug 与稳定性

### 按严重程度排列

| 优先级 | Issue/PR | 状态 | 描述 | 修复状态 |
|:---|:---|:---|:---|:---|
| **P1** | [#5563](https://github.com/NousResearch/hermes-agent/issues/5563) | OPEN | Memory 持久化失败、token 浪费、state.db 损坏、环境幻觉——**生产环境综合危机** | ❌ 无 fix PR，长期 open |
| **P1** | [#20470](https://github.com/NousResearch/hermes-agent/issues/20470) | OPEN | Telegram DM topic binding 压缩后未刷新→**预检压缩死循环** | ❌ 无 fix PR |
| **P1** | [#25839](https://github.com/NousResearch/hermes-agent/issues/25839) | OPEN | **安全漏洞**：系统冒充 user 角色，诱导并行实例无授权修改技能 | ❌ 无 fix PR，需紧急评估 |
| **P1** | [#26599](https://github.com/NousResearch/hermes-agent/issues/26599) | OPEN | Codex backend 拒绝 `extra_headers`→**gpt-5.5 完全不可用** | ❌ 无 fix PR，**当日新增** |
| **P1** | [#26581](https://github.com/NousResearch/hermes-agent/issues/26581) | OPEN | Telegram 群聊无法获取发送者身份→**多用户场景崩溃** | ❌ 无 fix PR，**当日新增** |
| **P2** | [#26651](https://github.com/NousResearch/hermes-agent/issues/26651) / [#26652](https://github.com/NousResearch/hermes-agent/pull/26652) | OPEN/PR | 僵尸进程持有 scoped lock→**网关重启死锁** | ✅ **PR #26652 待合并** |
| **P2** | [#26658](https://github.com/NousResearch/hermes-agent/issues/26658) | OPEN | 飞书 markdown 表格强制文本 workaround 已过时 | ❌ 无 fix PR |
| **P2** | [#7723](https://github.com/NousResearch/hermes-agent/issues/7723) | OPEN | `tool_progress=verbose` 渲染退化与 `full` 相同 | ❌ 无 fix PR |
| **P2** | [#26596](https://github.com/NousResearch/hermes-agent/issues/26596) | OPEN | Gateway 模式忽略 SOUL.md 和 personalities→**身份定制失效** | ❌ 无 fix PR，**当日新增** |

### 当日新增 Bug 预警（2026-05-15/16 创建）

> 以下 Issue 反映**最新引入或暴露**的问题，需优先响应：

1. **[#26599](https://github.com/NousResearch/hermes-agent/issues/26599)** Codex `extra_headers` 被拒——OpenAI 兼容层变更导致 **gpt-5.5 全量不可用**
2. **[#26596](https://github.com/NousResearch/hermes-agent/issues/26596)** Gateway 身份系统硬编码回退——**Docker 部署场景定制能力丧失**
3. **[#26581](https://github.com/NousResearch/hermes-agent/issues/26581)** Telegram 群聊匿名化——**群聊场景核心功能断裂**

---

## 6. 功能请求与路线图信号

### 高潜力功能请求（已有 PR 或强烈需求共振）

| 功能 | Issue/PR | 成熟度 | 纳入下一版本概率 |
|:---|:---|:---|:---:|
| **阶段级工具白名单**（减少决策疲劳） | [#26524](https://github.com/NousResearch/hermes-agent/issues/26524) | RFC 阶段，设计完整 | ⭐⭐⭐⭐ |
| **技能验证与 Linting** | [#416](https://github.com/NousResearch/hermes-agent/issues/416) / [#25833](https://github.com/NousResearch/hermes-agent/issues/25833) | 需求共振，无 PR | ⭐⭐⭐⭐ |
| **NATS JetStream 集成**（Kanban 事件） | [#26671](https://github.com/NousResearch/hermes-agent/pull/26671) | **PR 已提交** | ⭐⭐⭐⭐⭐ |
| **Mattermost 环境会话摄取** | [#26663](https://github.com/NousResearch/hermes-agent/pull/26663) | **PR 已提交** | ⭐⭐⭐⭐⭐ |
| **内部消息总线**（MQTT + SQLite） | [#26375](https://github.com/NousResearch/hermes-agent/pull/26375) | **大型 PR 审查中** | ⭐⭐⭐⭐ |
| **用户注册表**（跨平台身份解析） | [#22085](https://github.com/NousResearch/hermes-agent/pull/22085) | PR 开放，架构级 | ⭐⭐⭐ |
| **会话硬 TTL** | [#22081](https://github.com/NousResearch/hermes-agent/pull/22081) | PR 开放，资源治理 | ⭐⭐⭐ |
| **时区自定义** | [#16610](https://github.com/NousResearch/hermes-agent/issues/16610) / [#26549](https://github.com/NousResearch/hermes-agent/issues/26549) | 需求明确，无 PR | ⭐⭐⭐ |

### 路线图信号解读

- **"技能质量治理"成为主题**：#416（2026-03 创建）与 #25833（2026-05 创建）形成跨时间需求共振，说明技能自动创建功能从"能用"进入"好用"阶段，**验证基础设施是下一个投资点**
- **网关平台生态扩张**：Mattermost (#26663)、Telegram Business (#26654)、Matrix (#22088) 并行推进，**企业 IM 集成是差异化竞争点**
- **事件驱动架构升级**：NATS JetStream (#26671) + 内部消息总线 (#26375) + 本地 SQLite 遥测 (#22095) 表明项目向**可观测、可编排**演进

---

## 7. 用户反馈摘要

### 真实痛点（来自 Issue 评论与描述）

| 来源 | 痛点 | 场景 |
|:---|:---|:---|
| [#5563](https://github.com/NousResearch/hermes-agent/issues/5563) JuanDragin | **"state.db 损坏后整个会话历史丢失，且无法恢复"** | 每日 8-12 小时生产开发使用，重度依赖持久化 |
| [#5563](https://github.com/NousResearch/hermes-agent/issues/5563) | **"Session replay 导致 token 爆炸，一次重载消耗 50K+ tokens"** | 长会话压缩策略失效，成本敏感用户受损 |
| [#25833](https://github.com/NousResearch/hermes-agent/issues/25833) fancpp | **"技能创建后没有 correctness guarantee，同样输入可能不同执行路径"** | 自动化工作流需要确定性 |
| [#12188](https://github.com/NousResearch/hermes-agent/issues/12188) PathosEthosLogos | **"Docker 部署文档薄弱，必须在容器内交互式运行 hermes model"** | 云原生/CI 场景部署困难 |
| [#26563](https://github.com/NousResearch/hermes-agent/issues/26563) spenceriam | **"Supergrok OAuth 无法在无头服务器完成认证"** | 纯 SSH 环境，无浏览器 |

### 满意点（值得保留/放大）

> *"Hermes is an extraordinary piece of work... the most capable CLI AI agent I've used"* — [#5563](https://github.com/NousResearch/hermes-agent/issues/5563) JuanDragin

- 技能系统、持久化记忆、会话搜索、delegate_task 子代理、网关架构获**重度用户高度认可**
- **技能自动创建**被视为核心竞争力，但用户愿意接受"有质量保证的自动创建"而非"完全自由"

---

## 8. 待处理积压

### 长期未响应的重要 Issue（提醒维护者关注）

| Issue | 创建日期 | 最后更新 | 阻塞天数 | 风险说明 |
|:---|:---|:---|:---:|:---|
| [#5563](https://github.com/NousResearch/hermes-agent/issues/5563) Memory 综合危机 | 2026-04-06 | 2026-05-15 | **40天** | **P1 级生产故障**，万字详细报告，无维护者正式回应 |
| [#416](https://github.com/NousResearch/hermes-agent/issues/416) Skill Validation | 2026-03-05 | 2026-05-15 | **72天** | 早期功能请求，与 #25833 形成共振，仍无 PR |
| [#12188](https://github.com/NousResearch/hermes-agent/issues/12188) Docker 环境变量配置 | 2026-04-18 | 2026-05-15 | **28天** | 云原生部署门槛，文档/功能双缺失 |
| [#7723](https://github.com/NousResearch/hermes-agent/issues/7723) CLI verbose 渲染退化 | 2026-04-11 | 2026-05-16 | **35天** | 用户体验回归，修复难度低但影响每日使用 |

### PR 审查积压

| PR | 创建日期 | 规模 | 风险 |
|:---|:---|:---|:---|
| [#26375](https://github.com/NousResearch/hermes-agent/pull/26375) 内部消息总线 | 2026-05-15 | **大型架构 PR** | 需优先分配审查资源，阻塞后续事件驱动功能 |
| [#22095](https://github.com/NousResearch/hermes-agent/pull/22095) 本地 SQLite 遥测 | 2026-05-08 | 中型 | 零依赖设计，可快速合并提升可观测性 |

---

## 附录：数据健康度指标

| 指标 | 数值 | 评估 |
|:---|:---:|:---|
| Issue 日更新量 | 50 | 🔥 活跃 |
| PR 日更新量 | 50 | 🔥 活跃 |
| 关闭/合并率 | 16% Issues, 32% PRs | ⚠️ PR 吞吐健康，Issue 关闭率偏低（积压信号）|
| P1 Bug 当日新增 | 3 | 🔴 需紧急响应 |
| 无修复 PR 的 P1 Bug | 4 | 🔴 风险敞口 |
| 社区贡献 PR 占比 | ~80%（非核心维护者）| 🟢 生态健康 |

---

*日报生成时间：2026-05-16 | 数据来源：NousResearch/hermes-agent GitHub 公开数据*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-05-16

## 1. 今日速览

PicoClaw 今日保持**高活跃度**，24小时内处理 **35 个 PR**（合并/关闭 22 个，待审 13 个）和 **11 个 Issues**（关闭 2 个，活跃 9 个）。项目迭代节奏稳健，核心聚焦在 **OpenAI 兼容层推理内容修复**、**Matrix/Telegram 渠道稳定性**、**工具配置可扩展性**三大方向。 nightly 构建持续输出，但多个 stale 标记的 Issue/PR 提示维护者需关注社区反馈积压。

---

## 2. 版本发布

### 🌙 Nightly Build: v0.2.8-nightly.20260515.794eb04f

| 属性 | 详情 |
|:---|:---|
| 版本 | `v0.2.8-nightly.20260515.794eb04f` |
| 类型 | 自动化夜间构建 |
| 稳定性 | ⚠️ 不稳定，谨慎使用 |
| 变更对比 | [v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main) |

**关键提示**：此为自动化构建，包含 main 分支最新但未发布正式版的全部提交。生产环境建议等待正式版。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR（6 项）

| PR | 作者 | 核心贡献 | 影响 |
|:---|:---|:---|:---|
| [#2741](https://github.com/sipeed/picoclaw/pull/2741) | lc6464 | **OpenAI 兼容流式响应解析强化**：累积 `reasoning_content` delta，修复 SSE 解析 | 🔴 **关键**：DeepSeek/MiMo 推理模型多轮对话基础修复 |
| [#2862](https://github.com/sipeed/picoclaw/pull/2862) | lc6464 | **MiMo 推理回放对齐 DeepSeek**：复用同一套规范化推理规则 | 🔴 **关键**：解决 Issue #2859 小米 MIMO 多轮对话 400 错误 |
| [#2811](https://github.com/sipeed/picoclaw/pull/2811) | afjcjsbx | **MCP 传输层重构**：Streamable HTTP 别名、请求-响应模式 + Docker 集成测试框架 | 🟡 重大：MCP 生态兼容性 + 工程基础设施升级 |
| [#2874](https://github.com/sipeed/picoclaw/pull/2874) | lxowalle | **Pico 客户端图像媒体透传**：修复 `media.create` 处理，图像不再丢失 | 🟡 Pico 硬件生态图像功能完整 |
| [#2766](https://github.com/sipeed/picoclaw/pull/2766) | SiYue-ZO | **文档全面同步 V3 配置格式**：26 个文件更新，`api_key`→`api_keys` 等 | 🟢 降低新用户配置迁移成本 |
| [#2270](https://github.com/sipeed/picoclaw/pull/2270) | loafoe | **SecureString 反射安全修复**：map 值非地址化 panic 修复 + 回归测试 | 🟢 稳定性加固 |

**整体推进**：今日合并集中解决 **推理模型兼容性**（DeepSeek/MiMo）和 **渠道上下文完整性**（Telegram/Matrix）两大技术债务，为 v0.2.9 正式版铺路。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 👍 | 核心诉求 |
|:---|:---|:---:|:---:|:---|
| 1 | [#28 LM Studio Easy Connect](https://github.com/sipeed/picoclaw/issues/28) | 19 | 2 | **本地模型接入门槛**：用户希望一键连接 LM Studio，降低 Android/Termux 部署难度 |
| 2 | [#1042 exec guardCommand 路径误判](https://github.com/sipeed/picoclaw/issues/1042) | 11 | 2 | **工具安全策略过严**：`curl` 等无路径命令被误拦截，影响天气等基础技能 |
| 3 | [#2706 DeepSeek v4 thinking model](https://github.com/sipeed/picoclaw/issues/2706) | 4 | 1 | ✅ **已关闭**：`reasoning_content` 未保存回传导致 400 错误——**今日 PR #2741/#2862 已解决** |

### 诉求分析

- **#28 长期未解决**（创建于 2026-02-11）：反映 **本地 LLM 生态集成** 是持续痛点，与 Ollama/LM Studio 等工具的"零配置"体验差距明显
- **#1042 技术债务**：安全沙箱的正则匹配过于简单粗暴，需区分"含路径字符的参数"与"实际文件路径"

---

## 5. Bug 与稳定性

### 今日报告/活跃的 Bug Issues（按严重程度）

| 严重程度 | Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---:|:---|:---:|
| 🔴 **高** | [#1042 exec guardCommand 路径误判](https://github.com/sipeed/picoclaw/issues/1042) | OPEN | `restrict_to_workspace=true` 时，URL 参数被误判为相对路径逃逸 | [#2814](https://github.com/sipeed/picoclaw/pull/2814) 待审 |
| 🔴 **高** | [#2817 语音转录未传入 LLM](https://github.com/sipeed/picoclaw/issues/2817) | OPEN | Groq Whisper 成功但 LLM 收到 `[voice]` 而非文本，模型自行尝试转录 | ❌ 无 |
| 🟡 **中** | [#2744 Android v0.2.8 数据访问失败](https://github.com/sipeed/picoclaw/issues/2744) | OPEN | Android 端所有 Tab 无法访问数据 | ❌ 无 |
| 🟡 **中** | [#2816 Matrix 发送者身份未注入](https://github.com/sipeed/picoclaw/issues/2816) | OPEN | 对比 Telegram 的 `chat_id`，Matrix 消息缺少发送者上下文 | ❌ 无 |
| 🟡 **中** | [#2815 Matrix allow_from 过滤失效](https://github.com/sipeed/picoclaw/issues/2815) | OPEN | 非空 `allow_from` 阻止所有消息，`[]` 才放行 | [#2827](https://github.com/sipeed/picoclaw/pull/2827) 待审 |
| 🟡 **中** | [#2878 load_image 无法配置](https://github.com/sipeed/picoclaw/issues/2878) | OPEN | `config.json` 无法启用/禁用 `load_image` 工具 | [#2879](https://github.com/sipeed/picoclaw/pull/2879) **今日已提交** |
| 🟢 **低** | [#2785 飞书工具反馈仅首条显示](https://github.com/sipeed/picoclaw/issues/2785) | OPEN | `separate_messages=false` 时通知中心只展示首条工具调用 | ❌ 无 |

**关键风险**：[#2817](https://github.com/sipeed/picoclaw/issues/2817) 语音管道断裂影响多模态核心体验，且无修复 PR，建议优先响应。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 可行性 | 纳入信号 |
|:---|:---|:---:|:---|
| **LM Studio 一键连接** | [#28](https://github.com/sipeed/picoclaw/issues/28) | 🟡 中 | 需求强烈但技术方案未明确；需抽象本地模型发现协议 |
| **非破坏性会话重置** | [#2820](https://github.com/sipeed/picoclaw/issues/2820) | 🟢 高 | 有详细技术方案（`/clear` vs `/reset`），作者已提配套 PR |
| **工具反馈动画可配置** | [#2789](https://github.com/sipeed/picoclaw/pull/2789) | 🟢 高 | PR 已提供 `animation_interval_secs` 配置，待审 |
| **Tirith 预执行安全扫描** | [#2877](https://github.com/sipeed/picoclaw/pull/2877) | 🟡 中 | 今日新 PR，内容级威胁检测补充正则规则，安全方向创新 |
| **Web/API 真实连通性测试** | [#2833](https://github.com/sipeed/picoclaw/pull/2833) | 🟢 高 | 分三部分提交中的第三部分，基础设施改进 |

**下一版本（v0.2.9?）预测**：推理模型兼容性修复已就绪；配置可扩展性（`load_image`、工具反馈）接近合并；安全扫描和连通性测试为增值功能。

---

## 7. 用户反馈摘要

### 😫 痛点

> *"i'm trying to get this installed on an android... its just outside my reach"*  
> — [#28](https://github.com/sipeed/picoclaw/issues/28) 用户，反映 **移动端/本地模型部署门槛**

> *"the usefulness of it would be nice"*  
> — 同上，暗示竞品（如 ChatGPT App）的即开即用体验落差

> *"Command blocked by safety guard (path outside working dir)"* — 天气查询被误杀  
> — [#1042](https://github.com/sipeed/picoclaw/issues/1042)，**安全策略与实用性冲突**

> *"That is too strong for an important real workflow"* — `/clear` 删除 SQLite 历史不可接受  
> — [#2820](https://github.com/sipeed/picoclaw/issues/2820)，**数据持久化预期管理**

### 😊 满意/期待

- MiMo/DeepSeek 推理修复快速响应（Issue #2706 → PR #2741/#2862，约 2 周闭环）
- 社区贡献活跃：bogdanovich 单日关联 5 个 PR，聚焦 Telegram/Matrix 渠道完善

---

## 8. 待处理积压

### ⚠️ Stale 标记需维护者关注的 Issue/PR

| 类型 | 编号 | 创建日期 | 问题 | 行动建议 |
|:---|:---|:---:|:---|:---|
| Issue | [#28](https://github.com/sipeed/picoclaw/issues/28) | 2026-02-11 | **94天无实质进展**，本地模型集成标杆需求 | 评估是否纳入官方插件计划或提供文档 workaround |
| PR | [#2827](https://github.com/sipeed/picoclaw/pull/2827) | 2026-05-08 | Matrix `allow_from` 修复，7天 stale | 代码审查，关联 Issue #2815 |
| PR | [#2822](https://github.com/sipeed/picoclaw/pull/2822) | 2026-05-08 | 子工具反馈清理，7天 stale | 审查，关联 Issue #2785 |
| PR | [#2814](https://github.com/sipeed/picoclaw/pull/2814) | 2026-05-07 | exec 路径守卫修复，8天 stale | **优先审查**，关联高优先级 Issue #1042 |
| PR | [#2794](https://github.com/sipeed/picoclaw/pull/2794) | 2026-05-07 | 异步跟进上下文保留，8天 stale | 审查，影响 Telegram 话题功能 |
| PR | [#2791](https://github.com/sipeed/picoclaw/pull/2791) | 2026-05-07 | Telegram 话题上下文，8天 stale | 审查，与 #2756 功能重叠需协调 |
| PR | [#2789](https://github.com/sipeed/picoclaw/pull/2789) | 2026-05-07 | 工具反馈节流可配置，8天 stale | 审查，低风险配置增强 |
| PR | [#2756](https://github.com/sipeed/picoclaw/pull/2756) | 2026-05-03 | Telegram 话题上下文（另一实现），12天 stale | 与 #2791 二选一或合并 |

**维护者行动清单**：建议本周集中审查 bogdanovich 的 5 个关联 PR（#2827/#2822/#2814/#2794/#2791），形成 Telegram/Matrix 渠道稳定性修复批次；[#28](https://github.com/sipeed/picoclaw/issues/28) 需产品层面决策是否官方支持 LM Studio。

---

*日报基于 GitHub 公开数据生成 | PicoClaw 主仓库: https://github.com/sipeed/picoclaw*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-05-16

## 1. 今日速览

NanoClaw 今日呈现**高强度维护与版本规范化**态势。过去24小时内，项目完成了 **44/50 条 Issues 的清理关闭**（88% 关闭率）和 **44/50 条 PR 的合并/关闭**（88% 处理率），同时发布 **v2.0.63** 作为首个规范化的 GitHub Release。社区活跃度极高，多线程并行推进：既有基础设施重构（output-parser、snapshot-writer 提取），也有关键 Bug 修复（OAuth 令牌过期、幽灵 socket 累积 OOM），更有供应商多元化（LiteLLM、Groq Whisper）和架构演进（Agent Network、技能市场 RFC）。项目正从"快速迭代期"进入"工程化成熟期"，发布流程和文档体系显著改善。

---

## 2. 版本发布

### [v2.0.63](https://github.com/nanocoai/nanoclaw/releases/tag/v2.0.63) — 首个规范化发布

| 属性 | 详情 |
|:---|:---|
| **发布性质** | 里程碑：首个按规范流程发布的版本 |
| **核心变更** | 建立 `package.json` 版本 bump → GitHub Release 的自动化映射机制 |
| **发布说明** | "Starting with v2.0.63, the goal is to publish a GitHub Release for every `package.json` version bump that lands on `main`" |
| **维护模式** | 手动切割，可能存在滞后；此前仅有版本 bump 和零散 tag |

**迁移与注意事项：**
- 此前用户依赖的 sporadic tags 将不再出现，建议迁移到 Release 页面追踪版本
- 维护者需关注 [PR #2502](https://github.com/nanocoai/nanoclaw/pull/2502) 新增的 `RELEASING.md` 文档，了解完整发布政策

---

## 3. 项目进展

### 已合并/关闭的关键 PRs

| PR | 作者 | 类型 | 进展说明 |
|:---|:---|:---|:---|
| [#2502](https://github.com/nanocoai/nanoclaw/pull/2502) | glifocat | 文档 | **发布基础设施完成**：v2.0.63 CHANGELOG 汇总 + `RELEASING.md` 定稿，标志项目工程化成熟 |
| [#2493](https://github.com/nanocoai/nanoclaw/pull/2493) | glifocat | 修复 | **v2 架构对齐**：服务名从硬编码 `com.nanoclaw` 改为按安装派生的 slug，解决多实例冲突 |
| [#954](https://github.com/nanocoai/nanoclaw/pull/954) | SebTardif | 修复 | **供应商兼容性**：OpenRouter 非 Anthropic 模型路由修复，解决 SDK proxy flow 中的无回复回归 |
| [#956](https://github.com/nanocoai/nanoclaw/pull/956) | SebTardif | 修复 | **体验优化**：安装向导阶段新增 LLM 凭证快速校验，避免运行时静默失败 |
| [#967](https://github.com/nanocoai/nanoclaw/pull/967) | SebTardif | 修复 | **可靠性提升**：卡住会话检测、流结束时机修正、IPC 轮询停止逻辑优化 |
| [#2489](https://github.com/nanocoai/nanoclaw/pull/2489) | glifocat | 文档 | **技能文档现代化**：`add-gmail-tool`/`add-gcal-tool` 与 v2 架构对齐 |
| [#523](https://github.com/nanocoai/nanoclaw/pull/523) | r-bart | 重构 | **容器运行器瘦身**：提取 `output-parser.ts`，复杂度降低 ~50 行，可独立测试 |
| [#524](https://github.com/nanocoai/nanoclaw/pull/524) | r-bart | 重构 | **职责分离完成**：提取 `snapshot-writer.ts`，容器运行器专注纯编排 |
| [#525](https://github.com/nanocoai/nanoclaw/pull/525) | r-bart | 重构 | **数据库模块化**：670 行 `db.ts` 拆分为 6 个域模块，零 breaking 迁移 |

**整体推进评估**：项目完成从"功能堆砌"到"架构治理"的关键转折。容器运行器（container-runner.ts）经过三轮重构后职责清晰，数据库层完成领域驱动拆分，发布流程建立规范。技术债务偿还进度显著。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 👍 | 核心诉求 |
|:---|:---|:---:|:---:|:---|
| 🥇 | [#80](https://github.com/nanocoai/nanoclaw/issues/80) 支持 Claude/Anthropic 以外的运行时和提供商 | 32 | 60 | **供应商锁定焦虑**：Anthropic 已封禁 OpenClaw 用户订阅，社区强烈要求 OpenCode、Codex、Gemini 等替代方案。这是项目**最高票长期需求**，直接关联生存风险 |
| 🥈 | [#384](https://github.com/nanocoai/nanoclaw/issues/384) 技能市场/注册表 | 9 | 16 | **生态扩展**：希望建立可审计、按需安装的技能分发机制，强化 NanoClaw "微小核心+按需扩展"的安全差异化 |
| 🥉 | [#730](https://github.com/nanocoai/nanoclaw/issues/730) OAuth 令牌过夜过期致容器 401 | 6 | 0 | **运维可靠性**：背景服务无法自助刷新令牌，每日早晨崩溃 |

**热点分析**：#80 的 60 👍 和 32 评论揭示了项目的**结构性风险**——过度依赖单一供应商。今日 [PR #2490](https://github.com/nanocoai/nanoclaw/pull/2490)（LiteLLM 提供商）和 [Issue #2396](https://github.com/nanocoai/nanoclaw/issues/2396)（Groq Whisper）显示团队正积极应对，但进度仍落后于社区预期。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 状态 | 修复 PR | 影响范围 |
|:---|:---|:---:|:---|:---|
| 🔴 **Critical** | [#595](https://github.com/nanocoai/nanoclaw/issues/595) OOM 崩溃 ~40h — 幽灵 socket 累积 | ✅ 已关闭 | #967 相关 | 长期运行实例；launchd 静默重启掩盖问题 |
| 🟠 **High** | [#730](https://github.com/nanocoai/nanoclaw/issues/730) CLAUDE_CODE_OAUTH_TOKEN 过夜过期 | ✅ 已关闭 | #2498（预刷新） | 所有使用 Claude Code CLI 安装的用户 |
| 🟠 **High** | [#341](https://github.com/nanocoai/nanoclaw/issues/341) add-discord 技能含过时 Apple Container 代码 | ✅ 已关闭 | — | Docker/Colima 用户 |
| 🟠 **High** | [#342](https://github.com/nanocoai/nanoclaw/issues/342) readSecrets() 不支持第三方 Anthropic 兼容 API | ✅ 已关闭 | — | OpenRouter、ZAI、Kimi 用户 |
| 🟠 **High** | [#635](https://github.com/nanocoai/nanoclaw/issues/635) WhatsApp 认证文件权限 644（应 600） | ✅ 已关闭 | — | 多用户服务器环境安全 |
| 🟠 **High** | [#233](https://github.com/nanocoai/nanoclaw/issues/233) IPC 消息在查询结果后丢弃 | ✅ 已关闭 | #967 | 活跃容器的后续消息处理 |
| 🟠 **High** | [#356](https://github.com/nanocoai/nanoclaw/issues/356) ExitPlanMode 工具未实际退出 | ✅ 已关闭 | — | 计划模式卡住 |
| 🟡 **Medium** | [#413](https://github.com/nanocoai/nanoclaw/issues/413) systemd 用户会话回退跳过可修复情况 | ✅ 已关闭 | #2494 | SSH 非 root 登录的 Linux 服务器 |
| 🟡 **Medium** | [#414](https://github.com/nanocoai/nanoclaw/issues/414) docker 组变更检测但不修复 | ✅ 已关闭 | — | 安装后 docker 权限问题 |
| 🟡 **Medium** | [#553](https://github.com/nanocoai/nanoclaw/issues/553) WhatsApp 连接恢复后容器执行失败 | ✅ 已关闭 | — | VPN/网络切换场景 |
| 🟡 **Medium** | [#611](https://github.com/nanocoai/nanoclaw/issues/611) agent-runner 源码复制永不过期更新 | ✅ 已关闭 | — | 长期运行实例的代码更新 |

**稳定性评估**：今日关闭 11 个 Bug 中的 7 个为 High/Critical 级别，显示维护团队对稳定性债务的集中清理。OOM 和 OAuth 过期两个最影响生产的问题均有对应修复或缓解方案。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 状态 | 纳入可能性 | 关键障碍 |
|:---|:---|:---:|:---|:---|
| **LiteLLM 统一提供商** | [PR #2490](https://github.com/nanocoai/nanoclaw/pull/2490) | 🟡 Open | **高** | 社区贡献活跃，直接回应 #80 诉求 |
| **Agent Network 多智能体协作** | [PR #2497](https://github.com/nanocoai/nanoclaw/pull/2497) | 🟡 Open | **中高** | 架构级变更，需评估与现有 channel-agent_group 模型的兼容性 |
| **早期压缩提示技能** | [PR #2500](https://github.com/nanocoai/nanoclaw/pull/2500) | 🟡 Open | **高** | 独立技能，风险低，解决上下文膨胀痛点 |
| **Groq Whisper 云后端** | [Issue #2396](https://github.com/nanocoai/nanoclaw/issues/2396) | 🟡 Open | **中高** | 延续 #2003 主权模型，云侧 opt-in 设计已验证 |
| **健康监控与静默失败检测** | [PR #2498](https://github.com/nanocoai/nanoclaw/pull/2498) | 🟡 Open | **高** | 生产运维刚需，含 Discord 告警和 OAuth 预刷新 |
| **Signal 消息通道** | [Issue #29](https://github.com/nanocoai/nanoclaw/issues/29) | ✅ Closed | 已关闭 | 需求明确但实现复杂，可能转为技能形式 |
| **技能市场/注册表** | [Issue #384](https://github.com/nanocoai/nanoclaw/issues/384) | ✅ Closed | 长期 | 需基础设施（签名、审计、分发），非短期可实现 |
| **消息注入（Message Steering）** | [Issue #617](https://github.com/nanocoai/nanoclaw/issues/617) | ✅ Closed | 中期 | 需运行时架构调整，与现有队列模式冲突 |
| **引用/回复支持** | [Issue #618](https://github.com/nanocoai/nanoclaw/issues/618) | ✅ Closed | 中期 | WhatsApp bridge 已支持，RustClaw 适配层待更新 |

**路线图信号**：v2.0.63 的规范化发布为功能迭代奠定基线。短期（1-2 版本）最可能落地的是 LiteLLM 提供商、健康监控、早期压缩提示——三者均为独立模块，风险可控。Agent Network 若合并，将标志项目从"单智能体多通道"向"多智能体协作网络"跃迁。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 | 引述 |
|:---|:---|:---|
| **供应商封禁恐惧** | [#80](https://github.com/nanocoai/nanoclaw/issues/80) | *"Anthropic is already shutting down peoples' subs for using them with OpenClaw"* — 用户将 NanoClaw 视为 OpenClaw 的更安全替代，但仍担忧同一命运 |
| **安装复杂度** | [#439](https://github.com/nanocoai/nanoclaw/issues/439) | *"a simple shell script and only a few question is way easier, faster and cheaper"* — 9 👍 认同，Claude 引导安装被视为过度工程 |
| **Docker 生态兼容性** | [#341](https://github.com/nanocoai/nanoclaw/issues/341), [#432](https://github.com/nanocoai/nanoclaw/issues/432) | Apple Container 硬编码、未使用原生 Claude Code Sandboxing，Docker/Colima 用户持续受阻 |
| **长期运行可靠性** | [#595](https://github.com/nanocoai/nanoclaw/issues/595) | OOM 后 launchd 静默重启，*easy to miss without checking logs* — 监控可观测性不足 |
| **上下文管理** | [#617](https://github.com/nanocoai/nanoclaw/issues/617) | 用户已前进但 Agent  reasoning on stale context — 交互模型与实时性预期错配 |

### 满意点

- **安全模型认可**：[#384](https://github.com/nanocoai/nanoclaw/issues/384) 中用户明确赞赏 *"tiny, auditable core"* 和 *"surface grows only with what you actually install"* 的设计哲学
- **架构可扩展性**：fork 维护者 [#362](https://github.com/nanocoai/nanoclaw/issues/362) 认可项目方向，但希望 `main()` 更模块化以降低合并冲突

---

## 8. 待处理积压

> 以下 Issue/PR 虽非今日新建，但长期未获最终响应，需维护者关注：

| 项目 | 创建时间 | 最后活动 | 风险说明 |
|:---|:---|:---|:---|
| [Issue #29](https://github.com/nanocoai/nanoclaw/issues/29) Signal 通道 | 2026-02-02 | 2026-05-15 关闭 | 关闭但无替代方案，4 👍 需求未满足，可能流失隐私敏感用户 |
| [Issue #439](https://github.com/nanocoai/nanoclaw/issues/439) 简化安装 | 2026-02-24 | 2026-05-15 关闭 | 9 👍 高票需求，关闭无替代，安装摩擦持续存在 |
| [PR #2494](https://github.com/nanocoai/nanoclaw/pull/2494) systemd 会话重探测 | 2026-05-15 | 2026-05-15 | 🟡 **Open**，修复 #413/#414 根因，影响 headless/容器部署 |
| [PR #2496](https://github.com/nanocoai/nanoclaw/pull/2496) 出站 DB 写权限修复 | 2026-05-15 | 2026-05-15 | 🟡 **Open**，命令门拒绝响应静默丢失，安全相关 |
| [Issue #2396](https://github.com/nanocoai/nanoclaw/issues/2396) Groq Whisper | 2026-05-10 | 2026-05-15 | 🟡 **Open**，语音功能云侧扩展，依赖 #2003 基础 |

**维护建议**：PR #2494、#2496 为今日新建但已具备合并条件，建议优先审查；#29 和 #439 的关闭缺乏社区共识，建议 reopen 或提供明确替代路线图。

---

*日报生成时间：2026-05-16 | 数据来源：NanoClaw GitHub (github.com/qwibitai/nanoclaw)*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-05-16

---

## 1. 今日速览

NullClaw 项目今日活跃度较低，过去 24 小时内仅产生 **2 条新 Issue**，无 PR 活动及版本发布。社区讨论处于平静期，未出现紧急安全事件或核心功能回归。两项新 Issue 分别涉及 **Telegram 集成增强** 与 **调度器权限故障**，均处于待响应状态，维护者需关注用户实际运行场景中的痛点。

---

## 2. 版本发布

*无新版本发布。*

---

## 3. 项目进展

*今日无合并或关闭的 PR，代码层面无直接进展。*

---

## 4. 社区热点

| 议题 | 类型 | 互动 | 核心诉求 |
|:---|:---|:---|:---|
| [#916 Telegram: include reply_to_message text in inbound context](https://github.com/nullclaw/nullclaw/issues/916) | 功能增强 | 0 评论, 0 👍 | **对话上下文完整性**：用户回复 Telegram 消息时，被引用消息的文本内容未传入 AI 上下文，导致 bot 无法理解对话脉络 |
| [#915 [bug] Problem with scheduler unauthorized](https://github.com/nullclaw/nullclaw/issues/915) | Bug 报告 | 0 评论, 0 👍 | **调度器可用性**：自托管场景下（Ubuntu + Ollama 外置主机）scheduler 触发 401 未授权错误，影响定时任务与提醒功能 |

**诉求分析**：两项 Issue 均指向 **生产环境可用性**——#916 关乎多轮对话体验质量，#915 则直接阻断核心调度能力。报告者提供了详细部署环境（RTX 3090、Qwen3.6:27b、外置 Ollama），表明用户群体已进入深度自托管阶段，对稳定性要求提升。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 描述 | 影响范围 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#915](https://github.com/nullclaw/nullclaw/issues/915) | Scheduler 401 Unauthorized | 所有依赖定时任务的场景（Telegram/Discord 等全平台） | ❌ 无 |
| 🟡 中 | [#916](https://github.com/nullclaw/nullclaw/issues/916) | Telegram reply 上下文缺失 | 群聊/线程对话体验降级，非阻断性 | ❌ 无 |

**#915 深度分析**：报错模式为 `unauthorized`，结合 Ollama 外置部署场景，可能原因包括：
- Scheduler 服务未正确继承主进程的 API 密钥/认证头
- 外置 Ollama 的 CORS/访问控制配置与 scheduler 的 HTTP 客户端行为冲突
- 定时任务触发时的上下文缺少 `Authorization` 头

建议维护者优先复现该场景，确认是否为认证令牌在异步任务中的传递缺陷。

---

## 6. 功能请求与路线图信号

| Issue | 功能方向 | 纳入可能性评估 |
|:---|:---|:---|
| [#916](https://github.com/nullclaw/nullclaw/issues/916) | Telegram 消息引用上下文补全 | ⭐⭐⭐⭐☆ **高**——改动面小（`TelegramAdapter` 提取 `reply_to_message.text`），符合对话式 AI 核心体验，无破坏性变更 |

**路线图信号**：Telegram 适配器近期若持续收到上下文相关反馈，建议统一审视：消息编辑历史、转发来源、媒体组（media group）等边缘场景的上下文传递完整性。

---

## 7. 用户反馈摘要

> **部署场景**：用户正将 NullClaw 用于 **高性能本地推理环境**（RTX 3090 + 27B 参数模型），外置 Ollama 架构表明对资源隔离与多服务编排有明确需求。

| 痛点 | 来源 | 严重程度 |
|:---|:---|:---|
| 调度器完全不可用，定时提醒/任务功能瘫痪 | #915 | 阻断性 |
| 群聊中回复历史消息时，AI "遗忘" 被引用的内容 | #916 | 体验性 |
| 工具调用"大多正常"但特定模块异常，暗示模块间一致性待加强 | #915 描述 | 潜在系统性 |

**满意度暗示**：报告者明确 LLM 与工具调用"works mostly fine"，表明核心架构获认可，但 **边缘模块的健壮性** 成为从"可用"到"好用"的关键瓶颈。

---

## 8. 待处理积压

| Issue | 创建时间 | 状态 | 提醒 |
|:---|:---|:---|:---|
| [#916](https://github.com/nullclaw/nullclaw/issues/916) | 2026-05-15 | 🆕 新提交，0 响应 | 需确认 Telegram Bot API 字段提取范围 |
| [#915](https://github.com/nullclaw/nullclaw/issues/915) | 2026-05-15 | 🆕 新提交，0 响应 | **建议 48h 内响应**——涉及认证安全类问题，延迟响应可能导致用户自行暴露密钥等危险 workaround |

---

*日报生成时间：2026-05-16 | 数据来源：GitHub API 概览*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-05-16

## 1. 今日速览

IronClaw 今日展现出**极高开发活跃度**，50 个 PR 更新（28 个已合并/关闭）与 17 个活跃 Issue 标志着项目处于密集迭代期。核心团队正全力推进 **Reborn 架构落地**——从生产就绪网关、WebUI Beta 到 planned runtime 全链路贯通，多个工作流（WS-13 至 WS-17）进入集成收尾阶段。安全与基础设施同步加固：通用文件系统调度、WASM 沙箱文档、工具禁用开关等工程化能力密集上线。社区侧 crates.io 发布滞后问题持续未解，下游安全依赖承压。

---

## 2. 版本发布

### [ironclaw-v0.28.2](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v0.28.2) | 2026-05-14

| 类别 | 内容 |
|:---|:---|
| **修复** | 恢复聊天驱动的 `tool_install` 功能；修复双重调用问题；消除 auto-approve 安全隐患 ([#3559](https://github.com/nearai/ironclaw/pull/3559)) |
| **变更** | LLM 层重构：将 provider 特定的认证、模型获取、embeddings 配置隐藏至 facade 后 ([#3416](https://github.com/nearai/ironclaw/pull/3416)) |

**迁移注意**：依赖 provider 直连配置的外部集成需验证 facade 兼容性；auto-approve 行为变更可能影响自动化工作流。

---

## 3. 项目进展

### 已合并/关闭的关键 PR（28 个中的核心项）

| PR | 作者 | 贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#3652](https://github.com/nearai/ironclaw/pull/3652) | henrypark133 | **WS-16: 实时 planned runtime 组合** | Reborn 生产运行时骨架完成——driver/registry/resolver/coordinator/runner/host 工厂全链路贯通 |
| [#3650](https://github.com/nearai/ironclaw/pull/3650) | henrypark133 | **WS-14 父集成：合并 WS-9~WS-13 + WS-15** | 六大主机端口能力（capability/checkpoint/input/progress/cancellation/identity）统一基线 |
| [#3651](https://github.com/nearai/ironclaw/pull/3651) | henrypark133 | **WS-14: planned driver 默认路径注册** | 生产切换的默认路径选择机制就绪，保留灰度能力 |
| [#3653](https://github.com/nearai/ironclaw/pull/3653) | henrypark133 | **WS-17: 产品 live planned-runtime 切换验证** | 端到端证明：正常用户消息 → planned runtime → 产品可见历史，Reborn 闭环验证完成 |
| [#3684](https://github.com/nearai/ironclaw/pull/3684) ~ [#3686](https://github.com/nearai/ironclaw/pull/3686) | serrrfirat | **WS-13: 实时取消机制三层修复** | 从 turn state 验证取消 → 输入排空确认 → 主机取消布线，可靠性逐层加固 |
| [#3532](https://github.com/nearai/ironclaw/pull/3532) | ilblackdragon | Slack `markdown_to_mrkdwn` 修复 | 多通道格式兼容性 |
| [#3665](https://github.com/nearai/ironclaw/pull/3665) | zetyquickly | `IRONCLAW_DISABLE_CODEACT` 开关 | 安全降级路径：可无风险关闭 v2 CodeAct，回退结构化工具 |

**里程碑判断**：Reborn 从"验证可行"进入"生产可部署"阶段，WS-13~WS-17 工作流全部闭合。

---

## 4. 社区热点

### 高讨论议题（按活跃度排序）

| 排名 | Issue/PR | 评论 | 核心诉求 | 链接 |
|:---|:---|:---|:---|:---|
| 1 | **#3259 crates.io 发布滞后** | 4 评论 | 下游因 wasmtime 28.x CVE 被钉死在 0.24.0，安全债务累积；要求维护者同步发布 0.25.0–0.27.0 | [Issue #3259](https://github.com/nearai/ironclaw/issues/3259) |
| 2 | **#3616 Reborn 生产网关接入** | 2 评论 | 手动测试循环已验证，需将 app/gateway/channel 入口切换至产品 live 工作流 | [Issue #3616](https://github.com/nearai/ironclaw/issues/3616) |
| 3 | **#3602 生产就绪门控集成** | 1 评论 | `RebornLoopProductionReport` 已存在但未在启动时调用，存在"未就绪即部署"风险 | [Issue #3602](https://github.com/nearai/ironclaw/issues/3602) |

**诉求分析**：社区存在**"核心工程高速推进 vs. 发布/运营基础设施滞后"**的张力。crates.io 同步问题已持续 10 天，成为最大信任损耗点；Reborn 生产化议题反映外部贡献者急于接入但边界未清。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | 修复 PR | 链接 |
|:---|:---|:---|:---|:---|
| 🔴 **High** | **Nightly E2E 持续失败**（5 月 10 日起） | ❌ 开放，0 评论 | **无** | [#3447](https://github.com/nearai/ironclaw/issues/3447) |
| 🟡 Medium | `openai_compatible` provider 丢弃 `reasoning_content`，破坏 DeepSeek v4-pro 多轮工具调用 | 开放，0 评论 | **无** | [#3673](https://github.com/nearai/ironclaw/issues/3673) |
| 🟡 Medium | TUI 无法正确渲染 Markdown 表格 | 开放，0 评论 | **无** | [#3675](https://github.com/nearai/ironclaw/issues/3675) |
| 🟢 Low | hooks: `RuntimeEvent` 全量暴露给 Installed-tier 扩展，信息泄露风险 | 开放，0 评论 | **无** | [#3690](https://github.com/nearai/ironclaw/issues/3690) |
| 🟢 Low | hooks: Installed-tier hook 失败触发递归 `HookFailed` 风暴（DoS） | 开放，0 评论 | **无** | [#3689](https://github.com/nearai/ironclaw/issues/3689) |

**健康度警示**：E2E 失败 6 天无响应是**红灯信号**；两个 hook 安全 Issue 虽标记 medium risk，但涉及扩展生态的 DoS 与信息泄露，需优先排期。

---

## 6. 功能请求与路线图信号

| 需求来源 | 内容 | 与现有 PR 关联 | 纳入下一版本概率 |
|:---|:---|:---|:---|
| **#3611** WebChat v2 原生路由（M1） | 最小可运行 WebChat v2 路由：创建线程、发送消息、时间线/快照 | PR #3695（live binary）、#3632（before-inbound policy） | **高** — P0 已标记，基础设施就位 |
| **#3625** WebUI 幂等性与消息账本（M2） | 防重复提交、客户端 action id 幂等键 | PR #3694（send-message idempotency replay guards） | **高** — 同日有 PR 对应 |
| **#3626** WebUI 调用者与线程作用域绑定（M2） | 认证调用者 → 标准 TurnScope 转换 | PR #3695（composition root  narrowing） | **高** — 架构依赖 |
| **#3627** RebornServices submit/cancel/resolve facade（M2） | WebUI 路由的稳定调用面 | 无直接 PR，但 #3632 policy seam 为其铺垫 | **中** — 预计 1-2 周内 |
| **#3692** 策略门控的身份与心跳提示上下文 | WS-15 的延续，需额外运行时策略支持 | PR #3650 已集成 WS-15 基础 | **中** — 设计未完成 |
| **#3578** Reborn HTTP 入口边界定义 | 主机所有的入口所有权模型 | 无直接 PR | **低-中** — 架构设计阶段 |

**路线图信号**：Reborn WebUI Beta（M1-M2）是**当前唯一明确的 P0 交付线**，4 个相关 Issue 均创建于 5 月 14 日且密集更新，预计构成 **v0.29.0** 的核心功能。

---

## 7. 用户反馈摘要

### 真实痛点

| 来源 | 场景 | 情绪 |
|:---|:---|:---|
| **dacoldest @ #3259** | "下游因 CVE 被钉死在 0.24.0，无法获取安全修复" | 😤 **挫败/焦虑** — 安全债务 + 发布流程不透明 |
| **NikZak @ #3673** | DeepSeek v4-pro 多轮工具调用因 `reasoning_content` 被吞而断裂 | 😤 **阻塞** — 生产级 provider 兼容性 |
| **chenyulue @ #3675** | TUI 中 Markdown 表格退化为纯文本，可读性崩溃 | 😐 **体验损耗** — 终端用户日常摩擦 |

### 隐含需求

- **可观测性**：#3447 E2E 失败无诊断输出，社区无法自助排查
- **扩展安全边界**：Installed-tier hook 的递归/泄露问题反映第三方扩展生态的治理框架尚未成熟

---

## 8. 待处理积压

|  Issue/PR  | 创建 | 最后更新 | 阻塞时长 | 风险 | 行动建议 |
|:---|:---|:---|:---|:---|:---|
| **#3259 crates.io 发布** | 05-05 | 05-15 | **10 天** | 安全 CVE 下游传染 | 维护者需明确发布时间表，或授权社区成员代为发布 |
| **#3447 Nightly E2E 失败** | 05-10 | 05-15 | **6 天** | 回归检测失明 | 分配 owner，公开失败日志，区分 flaky vs. 系统性故障 |
| **#1378 通道级 MCP/内置工具过滤** | 03-18 | 05-15 | **58 天** | 多通道生产需求 | XL 级 PR，需核心 review 资源，建议拆分或排期 |
| **#3548 DISABLE_TOOLS_LIST** | 05-12 | 05-15 | 4 天 | 安全加固 | 测试计划未完成（`cargo test` 未勾选），需 contributor 跟进 |

---

*日报基于 GitHub 公开数据生成，时间窗口：2026-05-15 UTC。项目仓库：[nearai/ironclaw](https://github.com/nearai/ironclaw)*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-05-16

## 1. 今日速览

LobsterAI 今日呈现**高强度代码合并态势**，24小时内 **33 个 PR 完成合并/关闭**，仅 3 个 PR 待合并，无新版本发布。项目活跃度极高，主要集中在 **Artifacts 预览体验重构**（多标签页、PPT 宽屏适配）、**IM 平台配对机制完善** 以及 **会话同步稳定性修复**。值得关注的是，今日出现一例 **配置覆盖型 Bug**（#1988），涉及第三方模型调用被强制替换为网易自有模型，直接影响用户付费使用体验。此外，大量 3 月提交的 stale PR 被集中清理，显示维护团队正在进行债务偿还与代码库整顿。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 🔥 核心功能推进

| PR | 作者 | 进展 | 价值 |
|:---|:---|:---|:---|
| [#1989](https://github.com/netease-youdao/LobsterAI/pull/1989) | liugang519 | **Artifacts 右侧预览多标签页** | 从单文件预览升级为多标签页模式，支持同时打开多个文件预览，顶部标签栏与右侧栏按钮同层布局，文件列表以标签样式兜底展示。这是 LobsterAI 作为 AI 助手**多任务并行处理能力**的关键交互升级 |
| [#1990](https://github.com/netease-youdao/LobsterAI/pull/1990) | liugang519 | **PPT 预览交互深度优化** | 宽屏 PPT 支持左侧缩略图栏、修复面板宽度调整异常关闭、顶部边界对齐、标签渐变模糊过渡。与 #1989 形成**文档预览体验闭环** |
| [#1985](https://github.com/netease-youdao/LobsterAI/pull/1985) | btc69m979y-dotcom | **会话思考层级控制**（待合并） | 新增 ThinkingLevelSelector（Off/Minimal/Low/Medium/High/Adaptive），端到端集成（类型定义、DB 迁移、Redux、IPC、i18n）。这是**模型推理成本与响应质量的精细化调控**能力，对标 Claude 的 extended thinking 模式 |

### 🛡️ 安全与稳定性

| PR | 作者 | 进展 | 价值 |
|:---|:---|:---|:---|
| [#1962](https://github.com/netease-youdao/LobsterAI/pull/1962) | btc69m979y-dotcom | **NSP-ClawGuard 安全监控热切换** | 将安全监控插件纳入 openclaw 插件体系，支持设置内动态启停，默认开启。体现项目对**AI 代理安全执行环境**的持续投入 |
| [#1986](https://github.com/netease-youdao/LobsterAI/pull/1986) | liugang519 | **会话同步字符丢失修复** | 修复网关侧 `appendUniqueSuffix` 的 suffix-prefix overlap 检测错误（如 `file:///→file://`、`.pptx→.ptx`），改用 `chat.history` 原始文本直接替换。这是**长会话数据一致性**的关键修复，避免用户内容静默损坏 |

### 📡 IM 生态扩展

| PR | 作者 | 进展 | 价值 |
|:---|:---|:---|:---|
| [#1987](https://github.com/netease-youdao/LobsterAI/pull/1987) | liugang519 | **四大 IM 平台配对码输入** | Telegram/Discord/QQ/POPO 在 `dmPolicy=pairing` 模式下新增配对码输入区域，复用 DingTalk/Feishu 的 PairingSection 组件。完成**IM Bot 全平台审批流程闭环** |

### 🧹 技术债务清理

- **11 个 3 月 stale PR 集中关闭**（#806/#807/#822/#826/#827/#828/#830/#835/#836/#838/#1185/#1186/#1190）：涵盖性能索引、token 刷新竞态、URL 协议校验、skill 重复安装、路径遍历防护、SQLite 参数优化、MCP 批量创建、流式渲染优化、Windows 卸载进程终止等。这些 PR 虽有价值，但长期未获评审，今日批量关闭可能意味着：
  - 功能已以其他方式实现
  - 代码库已发生结构性变化需重新提交
  - 维护团队优先处理近期高优先级需求

> **整体评估**：项目今日在**交互体验层**（Artifacts 多标签）、**执行控制层**（ThinkingLevel）、**安全层**（ClawGuard）、**数据层**（同步修复）均有实质推进，属于**多维度并进的健康发展日**。

---

## 4. 社区热点

### 最热讨论：模型调用被强制覆盖问题

| 项目 | 详情 |
|:---|:---|
| **Issue** | [#1988](https://github.com/netease-youdao/LobsterAI/issues/1988) |
| **标题** | 模型调用问题：lobsterai版本更新后，阿里百炼coding plan无法正常调用qwen3.6-plus |
| **作者** | nee207 |
| **状态** | 🔴 OPEN，1 条评论 |
| **核心诉求** | **配置自主权**：用户配置的第三方模型（阿里百炼 qwen3.6-plus）被系统强制替换为网易自有模型，且提示"没有额度"，修改配置文件无效 |

**背后诉求分析**：

| 层级 | 解读 |
|:---|:---|
| **表层** | qwen3.6-plus 模型调用失败 |
| **深层** | 网易自有模型与第三方模型的**商业竞争冲突**——系统优先导流至自有付费体系 |
| **用户信任危机** | "修改配置文件也没用，系统会强制改成错误的" → **配置不可信、用户无控制权** |
| **生态开放性质疑** | 其他网易未覆盖的模型正常，唯独重叠模型出问题，引发"故意限制第三方"猜测 |

**风险等级**：🔴 **高** — 涉及平台中立性、用户付费权益、开源项目公信力

---

## 5. Bug 与稳定性

| 优先级 | 问题 | 来源 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **P0 - 阻塞性** | **第三方模型被强制替换为网易自有模型，配置覆盖无效** | [#1988](https://github.com/netease-youdao/LobsterAI/issues/1988) | 待修复 | ❌ 无 |
| 🟡 **P1 - 严重** | 会话同步时字符丢失（file:///→file://, .pptx→.ptx） | [#1986](https://github.com/netease-youdao/LobsterAI/pull/1986) | **已修复** | ✅ [#1986](https://github.com/netease-youdao/LobsterAI/pull/1986) |
| 🟢 **P2 - 一般** | 宽屏 PPT 预览面板宽度调整异常关闭 | [#1990](https://github.com/netease-youdao/LobsterAI/pull/1990) | **已修复** | ✅ [#1990](https://github.com/netease-youdao/LobsterAI/pull/1990) |
| 🟢 **P2 - 一般** | Word 预览页面左右空白不对称 | [#1989](https://github.com/netease-youdao/LobsterAI/pull/1989) | **已修复** | ✅ [#1989](https://github.com/netease-youdao/LobsterAI/pull/1989) |

> **关键警示**：#1988 是今日唯一未关闭的 Issue，且性质敏感——若确认为商业策略导致的"强制替换"，需紧急澄清为 Bug 而非设计意图，否则将严重损害开源社区信任。

---

## 6. 功能请求与路线图信号

| 信号源 | 功能方向 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#1985](https://github.com/netease-youdao/LobsterAI/pull/1985) ThinkingLevelSelector | **模型推理深度控制** | ⭐⭐⭐⭐⭐ 极高 | PR 已提交，端到端完整实现，待合并 |
| [#1989](https://github.com/netease-youdao/LobsterAI/pull/1989) + [#1990](https://github.com/netease-youdao/LobsterAI/pull/1990) | **多文件并行预览工作台** | ⭐⭐⭐⭐⭐ 已落地 | 已合并，Artifacts 从单文件预览进化为 IDE 式多标签工作区 |
| [#1962](https://github.com/netease-youdao/LobsterAI/pull/1962) ClawGuard 热切换 | **安全执行环境可观测性** | ⭐⭐⭐⭐⭐ 已落地 | 已合并，安全插件体系化 |
| #838 (stale, 已关闭) | **IM 渠道独立模型配置** | ⭐⭐⭐⭐ 高 | 需求合理（不同渠道价格/能力差异），但 PR 因 stale 被关，可能由 #1985 的会话级模型控制间接覆盖 |
| #835 (stale, 已关闭) | **MCP 服务器 JSON 批量导入** | ⭐⭐⭐ 中 | MCP 生态建设需求，但需重新适配当前代码库 |
| #1186 (stale, 已关闭) | **流式渲染性能优化** | ⭐⭐⭐ 中 | 性能问题客观存在，但可能已被其他优化覆盖 |

**下一版本预测方向**：**"可控智能"** — 让用户精细控制 AI 的思考深度、成本消耗、安全边界，同时扩展多任务并行处理能力。

---

## 7. 用户反馈摘要

### 痛点

| 反馈 | 来源 | 严重程度 |
|:---|:---|:---|
| **"修改配置文件也没用，系统会强制改成错误的"** — 配置自主权被剥夺，付费使用的第三方模型被静默替换 | [#1988](https://github.com/netease-youdao/LobsterAI/issues/1988) | 🔴 极高 |
| 更新后出现回归问题，原有正常功能（阿里百炼 coding plan）突然失效 | [#1988](https://github.com/netease-youdao/LobsterAI/issues/1988) | 🟡 高 |

### 隐含诉求

- **模型选择透明化**：明确告知用户何时、为何切换模型
- **配置持久化保证**：用户手动配置应优先于系统默认/商业策略
- **额度体系互通**：若强制使用网易模型，应提供与第三方等价的额度体验

> 注：今日仅 1 条 Issue 评论，用户声音样本有限，#1988 的单一反馈权重被放大。

---

## 8. 待处理积压

| 项目 | 创建时间 | 最后更新 | 状态 | 风险 |
|:---|:---|:---|:---|:---|
| [#806](https://github.com/netease-youdao/LobsterAI/pull/806) 大量会话性能瓶颈（SQLite 索引优化） | 2026-03-25 | 2026-05-15 | 🔴 OPEN stale | **性能债务**：用户会话量增长后，置顶排序全表扫描、长对话打开延迟将恶化 |
| [#807](https://github.com/netease-youdao/LobsterAI/pull/807) executionMode 配置不生效 | 2026-03-25 | 2026-05-15 | 🔴 OPEN stale | **功能债务**：sandbox/auto 模式形同虚设，影响代码执行安全隔离 |
| [#1985](https://github.com/netease-youdao/LobsterAI/pull/1985) ThinkingLevelSelector | 2026-05-15 | 2026-05-15 | 🟡 OPEN 待合并 | 新功能，需尽快评审避免与后续提交冲突 |
| [#1988](https://github.com/netease-youdao/LobsterAI/issues/1988) 模型强制替换 | 2026-05-15 | 2026-05-15 | 🔴 OPEN 无响应 | **信任危机**：需 24h 内响应，澄清为 Bug 或提供绕过方案 |

### 维护者行动建议

| 优先级 | 行动 |
|:---|:---|
| **立即** | 响应 [#1988](https://github.com/netease-youdao/LobsterAI/issues/1988)，确认是配置覆盖 Bug 还是产品设计意图；若是 Bug，提供临时绕过方案 |
| **本周** | 评审 [#1985](https://github.com/netease-youdao/LobsterAI/pull/1985) ThinkingLevelSelector，该功能完整度高，延迟合并成本递增 |
| **本月** | 重新评估 #806/#807 的性能与功能修复价值，考虑基于当前代码库重新实现而非直接合并 stale PR |
| **持续** | 建立 stale PR 的明确处理机制（自动关闭前通知、标记替代方案），减少贡献者流失 |

---

*日报生成时间：2026-05-16 | 数据来源：GitHub API 快照 | 项目地址：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-05-16

## 1. 今日速览

Moltis 今日展现出**高强度的维护节奏**：24小时内关闭4个Issue、合并/关闭6个PR，仅1个PR待审，**零积压清理态势显著**。核心贡献者 `penso` 单日主导5个PR，覆盖TLS证书、Proxmox安装、Web UI修复、MCP OAuth及文档基础设施五大领域，显示项目处于**功能密集交付期**。远程访问能力成为新焦点——NetBird/Cloudflare Tunnel支持PR（#1002）已开启，预示Moltis正从本地部署向混合云/边缘场景延伸。无新版本发布，所有进展均沉淀于主干。

---

## 2. 版本发布

**无今日发布**。最新Release待追踪。

---

## 3. 项目进展

| PR | 状态 | 核心贡献 | 项目推进度 |
|:---|:---|:---|:---|
| [#1000 feat(tls): support public IP SAN for generated certs](https://github.com/moltis-org/moltis/pull/1000) | **已合并** | 自签名TLS证书新增`tls.public_ip`配置，支持将公网IP纳入SAN扩展，解决VPS/云部署场景下证书校验失败问题 | ⭐⭐⭐⭐⭐ 突破本地部署限制，为远程安全访问奠基 |
| [#1001 feat(mcp): support OAuth client secrets](https://github.com/moltis-org/moltis/pull/1001) | **已合并** | MCP（Model Context Protocol）OAuth流新增`client_secret`支持，完善企业级身份验证链路 | ⭐⭐⭐⭐☆ 强化AI助手与外部工具的安全集成 |
| [#998 fix(web): prevent chat composer horizontal overflow](https://github.com/moltis-org/moltis/pull/998) | **已合并** | 修复聊天界面长文本导致页面横向滚动回归问题，附Playwright回归测试 | ⭐⭐⭐⭐☆ UI稳定性加固，防止#994类问题复发 |
| [#997 fix(install): tolerate missing Proxmox CA cert](https://github.com/moltis-org/moltis/pull/997) | **已合并** | Proxmox LXC安装脚本容错增强：缺失可选CA证书时不再中断安装流程 | ⭐⭐⭐⭐☆ 降低自托管门槛，减少安装失败率 |
| [#987 Replace docs deployment with Astro site](https://github.com/moltis-org/moltis/pull/987) | **已合并** | 文档系统从mdBook迁移至Astro，新增搜索、主题切换、响应式导航 | ⭐⭐⭐⭐☆ 开发者体验长期基础设施升级 |
| [#999 chore(deps): bump astro 5.18.1 → 6.3.3](https://github.com/moltis-org/moltis/pull/999) | **已合并** | 依赖安全更新 | ⭐⭐☆☆☆ 常规维护 |

**关键里程碑**：TLS公网IP支持（#1000）与Proxmox容错修复（#997）形成组合拳——前者解决"证书只认localhost"的部署瓶颈，后者消除自托管场景的安装卡点，共同推动Moltis从**开发环境工具**向**生产级可部署服务**演进。

---

## 4. 社区热点

| 条目 | 互动指标 | 热度分析 |
|:---|:---|:---|
| [#995 Integration of `portal-tunnel` as a trustless relay channel](https://github.com/moltis-org/moltis/issues/995) | 1评论, 0👍 | **架构级提案**：用户`gg582`提议集成去信任中继通道，解决NAT穿透与零配置远程访问。该Issue虽快速关闭，但**诉求未被忽视**——同日开启的PR #1002（NetBird/Cloudflare Tunnel）正是对此类需求的工程回应，显示维护团队"以PR替代长期讨论"的敏捷策略 |
| [#996 Generated TLS certificates only work for localhost](https://github.com/moltis-org/moltis/issues/996) | 0评论, 0👍 | **文档-实现落差**：用户发现文档宣称的公网IP证书支持实际缺失，形成"文档先行、代码滞后"的典型摩擦。PR #1000在24小时内完成闭环，响应速度优异 |

**社区信号**：远程访问与证书管理是用户自托管的**最大痛点**，需求强度足以驱动当日两个独立Issue→PR的转化链路。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 根因 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#996 TLS certs limited to localhost](https://github.com/moltis-org/moltis/issues/996) | 文档承诺的公网IP证书SAN未实现 | [#1000](https://github.com/moltis-org/moltis/pull/1000) | ✅ **已修复** |
| 🟡 **中** | [#994 Chat horizontal scrolling regression](https://github.com/moltis-org/moltis/issues/994) | 长文本消息破坏flex布局约束，**二次复发** | [#998](https://github.com/moltis-org/moltis/pull/998) | ✅ **已修复**（含回归测试） |
| 🟡 **中** | [#993 Proxmox LXC creation fails on line 91](https://github.com/moltis-org/moltis/issues/993) | 可选CA证书读取失败触发致命错误，导致已创建LXC被误删 | [#997](https://github.com/moltis-org/moltis/pull/997) | ✅ **已修复** |

**稳定性评估**：今日**零未修复Bug**，所有Issue均有PR当日闭环。值得关注的是#994标注"again"——横向滚动为**已知复发问题**，PR #998新增Playwright测试是正确方向，但需观察测试覆盖是否充分（仅覆盖桌面+移动端长文本，未涉及特殊字符/RTL语言等边界）。

---

## 6. 功能请求与路线图信号

| 需求来源 | 内容 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#995 portal-tunnel trustless relay](https://github.com/moltis-org/moltis/issues/995) | 去信任化中继通道，零配置远程访问 | **高** | PR #1002已开启，NetBird（开源WireGuard mesh）+ Cloudflare Tunnel（托管relay）双轨并行，覆盖"自托管mesh"与"托管SaaS"两种偏好 |
| 隐含需求（由#996、#1000推导） | 自动化证书管理（Let's Encrypt/ACME） | **中-高** | 当前方案为手动配置`tls.public_ip`，下一步逻辑为全自动证书申请与续期 |

**路线图推测**：Moltis正构建**"远程优先"架构层**——从TLS证书→VPN mesh→托管tunnel，形成完整的"本地运行、随处访问"能力栈。下一版本（推测v0.x或v1.0）极可能以远程访问为核心卖点。

---

## 7. 用户反馈摘要

| 维度 | 具体反馈 | 来源 |
|:---|:---|:---|
| **痛点** | "文档说支持公网IP，实际证书只有localhost" — 文档与实现不同步损害信任 | [#996](https://github.com/moltis-org/moltis/issues/996) |
| **痛点** | Proxmox安装因可选证书缺失完全失败，且**回滚逻辑破坏已创建容器** — 错误处理粗暴 | [#993](https://github.com/moltis-org/moltis/issues/993) |
| **痛点** | 聊天UI反复出现横向滚动 — **回归测试不足的历史包袱** | [#994](https://github.com/moltis-org/moltis/issues/994) |
| **诉求** | 需要"无需信任第三方"的远程访问方案（portal-tunnel）— **去中心化偏好** | [#995](https://github.com/moltis-org/moltis/issues/995) |
| **满意度信号** | Issue关闭速度极快（平均<24h），但**零评论互动**可能反映用户验证不足 | 全局观察 |

**深层模式**：Moltis用户群体呈现**"技术自托管者"特征**——使用Proxmox、关注TLS细节、偏好去信任架构。他们对"开箱即用"的期待与对"底层可控"的坚持并存，是项目定位的关键张力。

---

## 8. 待处理积压

| PR/Issue | 等待时长 | 风险 | 建议动作 |
|:---|:---|:---|:---|
| [#1002 feat(remote-access): add NetBird and Cloudflare Tunnel support](https://github.com/moltis-org/moltis/pull/1002) | **~1天**（2026-05-15创建） | 功能复杂度高（含TCP forwarder、WebAuthn、token handling），快速合并可能引入安全漏洞 | 建议维护者重点审计：①NetBird loopback-preserving forwarder的权限边界 ②Cloudflare token存储是否落盘加密 ③`cloudflared`子进程生命周期管理 |
| — | — | — | 当前无长期积压，项目健康度优异 |

---

**日报结论**：Moltis处于**高动能、低债务**的理想状态。维护团队展现卓越的Issue→PR转化效率，但需警惕"速度优先"可能带来的代码审查深度折损——特别是#1002涉及网络与安全核心路径，值得投入额外评审周期。

*数据截止：2026-05-16 | 数据来源：github.com/moltis-org/moltis*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-05-16

## 1. 今日速览

CoPaw 今日保持**高活跃度**，24 小时内 Issues 更新 24 条（13 活跃/新开，11 关闭），PR 更新 50 条（16 待合并，34 已合并/关闭），无新版本发布。项目处于**密集迭代期**，核心关注点集中在：**安全性加固**（备份信任控制、文件访问防护）、**定时任务可靠性**（会话隔离与上下文清理）、**模型生态扩展**（MiMo 思考模式、DeepSeek 解析、Anthropic 自定义配置）以及**企业级通道适配**（钉钉、企业微信、Telegram）。社区首次贡献者活跃，功能覆盖从世界杯技能到 Matrix E2EE 加密，生态多样性显著提升。

---

## 2. 版本发布

**无新版本发布**

> 最新版本仍为 v1.1.7b1（2026-05-14 前后发布）。用户关注 v1.1.6 → v1.1.7 升级配置迁移问题，详见 [#4430](https://github.com/agentscope-ai/QwenPaw/issues/4430)。

---

## 3. 项目进展

### 已合并/关闭的重要 PR（34 条中的核心项）

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#4409](https://github.com/agentscope-ai/QwenPaw/pull/4409) | jinglinpeng | **备份导入恢复信任控制** — 本地 HMAC 签名、远程端点认证阻断 | 🔒 **安全基线提升**：修复备份导入/恢复漏洞，阻断未授权远程访问 |
| [#4423](https://github.com/agentscope-ai/QwenPaw/pull/4423) | xuanrui-L | **CloudPaw 插件修复 + 阿里云 Skills 远程托管增强** | ☁️ **云原生能力**：A2A 远程 Agent 集成稳定性提升 |
| [#4413](https://github.com/agentscope-ai/QwenPaw/pull/4413) | rayrayraykk | **自定义 HTTP Headers 编辑器 + Anthropic auth token 支持** | 🔧 **企业适配**：中转 API 场景（如 [#3796](https://github.com/agentscope-ai/QwenPaw/issues/3796)）终得解决 |
| [#4427](https://github.com/agentscope-ai/QwenPaw/pull/4427) | hongxicheng | **企业微信重复"Thinking…"占位符抑制** | 💬 **UX 优化**：快速消息场景下的界面整洁度 |
| [#4425](https://github.com/agentscope-ai/QwenPaw/pull/4425) | zhijianma | **定时任务超时控制 + run_id 替换 job.id** | ⏱️ **可靠性**：Agent 任务执行边界管控 |
| [#4416](https://github.com/agentscope-ai/QwenPaw/pull/4416) | zhijianma | **聊天会话置顶状态 localStorage 持久化** | 🎯 **体验细节**：前端状态保持 |
| [#4120](https://github.com/agentscope-ai/QwenPaw/pull/4120) | Morxi | **Matrix E2EE 验证流程增强** | 🔐 **隐私通道**：端到端加密配置灵活性 |
| [#4198](https://github.com/agentscope-ai/QwenPaw/pull/4198) | yuanxs21 | **计划模式门控强化** — 防止 `create_plan` 后绕过用户确认执行非计划工具 | 🛡️ **安全逻辑**：阻断计划模式执行路径绕过 |
| [#4387](https://github.com/agentscope-ai/QwenPaw/pull/4387) | ekzhu | **Anthropic Provider 自定义 base URL** — 移除 `freeze_url=True` | 🔗 **模型生态**：支持 Claude 兼容端点（如 Bedrock、中转服务） |
| [#1580](https://github.com/agentscope-ai/QwenPaw/pull/1580) / [#1581](https://github.com/agentscope-ai/QwenPaw/pull/1581) | gnipping | **Skill Scanner YARA + 一致性分析器** | 🛡️ **供应链安全**：Skills 恶意代码检测能力 |

**整体评估**：今日合并 PR 覆盖**安全加固**（3 项）、**模型生态扩展**（2 项）、**企业通道体验**（2 项）、**定时任务可靠性**（2 项），项目在安全性和企业级成熟度上迈出关键步伐。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 | 深层分析 |
|:---|:---|:---|:---|:---|
| 1 | [#3957](https://github.com/agentscope-ai/QwenPaw/issues/3957) Agent workspace 身份混淆 | 8 | **多 Agent 频道消息路由安全** | 🔴 **架构级隐患**：主控 Agent 接收其他 Agent 推送消息时 workspace 被劫持，导致身份认知错误。已关闭但未标注修复版本，需确认是否彻底根治 |
| 2 | [#4051](https://github.com/agentscope-ai/QwenPaw/issues/4051) DeepSeek V4 Flash think 内容解析失败 | 7 | **推理模型输出格式兼容** | 用户内容被包裹在 `<thinking>` 标签导致无正常回复，反映**推理模型（reasoning model）生态适配滞后** |
| 3 | [#4299](https://github.com/agentscope-ai/QwenPaw/issues/4299) `write_file()` 死循环/参数缺失 | 7 | **长内容文件写入稳定性** | 高频触发，影响生产力场景，**待修复**（OPEN） |
| 4 | [#4314](https://github.com/agentscope-ai/QwenPaw/issues/4314) MiMo 思考模式 + 工具调用 400 错误 | 7 | **国产模型多轮工具调用兼容性** | 小米 MiMo 开启 thinking 后 `reasoning_content` 字段缺失导致请求失败，**已关闭** |
| 5 | [#1516](https://github.com/agentscope-ai/QwenPaw/issues/1516) Telegram AudioContent 不支持 | 7 | **多媒体通道能力补齐** | 语音消息处理链路断裂，**长期未修复**（3 个月 OPEN） |

### 高价值 PR 讨论

| PR | 亮点 | 生态意义 |
|:---|:---|:---|
| [#4407](https://github.com/agentscope-ai/QwenPaw/pull/4407) 世界杯技能 | 首次贡献者，覆盖赛程/比分/预测/伤病/视频生成 | **垂直场景扩展**：体育赛事 AI 伴侣，验证 CoPaw 作为"技能平台"的扩展性 |
| [#4428](https://github.com/agentscope-ai/QwenPaw/pull/4428) MCP 工具名前缀防冲突 | 首次贡献者，解决多同类型 MCP Server 工具名碰撞 | **基础设施**：MCP 生态规模化接入的前提条件 |

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重度 | Issue | 状态 | 影响范围 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **Critical** | [#3957](https://github.com/agentscope-ai/QwenPaw/issues/3957) Agent 身份混淆/工作区劫持 | CLOSED | 多 Agent 协作场景安全性 | 未明确标注 |
| 🔴 **Critical** | [#4421](https://github.com/agentscope-ai/QwenPaw/issues/4421) Channel 配置明文写入 Agent 可读目录 | CLOSED | **安全漏洞**：敏感配置泄露 | [#4409](https://github.com/agentscope-ai/QwenPaw/pull/4409) |
| 🟡 **High** | [#4299](https://github.com/agentscope-ai/QwenPaw/issues/4299) `write_file()` 死循环/参数缺失 | **OPEN** | 长内容输出场景崩溃 | 无 |
| 🟡 **High** | [#4309](https://github.com/agentscope-ai/QwenPaw/issues/4309) browser_use CDP 连接超时导致 Agent 卡死 5 分钟 | CLOSED | 浏览器自动化可靠性 | 已合并 |
| 🟡 **High** | [#4314](https://github.com/agentscope-ai/QwenPaw/issues/4314) MiMo thinking + 工具调用 400 错误 | CLOSED | 国产模型兼容性 | 已合并 |
| 🟡 **High** | [#2751](https://github.com/agentscope-ai/QwenPaw/issues/2751) Anthropic API `content.type 'file'` 不支持 | **OPEN** | 文件发送后后续交互失败 | 无 |
| 🟢 **Medium** | [#4162](https://github.com/agentscope-ai/QwenPaw/issues/4162) 定时任务 session 删除后仍用旧上下文 | **OPEN** | 自动化任务状态管理 | [#4303](https://github.com/agentscope-ai/QwenPaw/pull/4303), [#4432](https://github.com/agentscope-ai/QwenPaw/issues/4432) |
| 🟢 **Medium** | [#4412](https://github.com/agentscope-ai/QwenPaw/issues/4412) macOS 15 图标大小异常 | **OPEN** | 桌面端体验 | 无 |
| 🟢 **Medium** | [#4367](https://github.com/agentscope-ai/QwenPaw/issues/4367) Console 通道仅显示"Thinking"无可见回答 | **OPEN** | 前端流式渲染逻辑 | 无 |

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 成熟度评估 | 纳入下一版本概率 |
|:---|:---|:---|:---|
| **定时任务"执行前清空上下文"开关** | [#4432](https://github.com/agentscope-ai/QwenPaw/issues/4432) + [#4303](https://github.com/agentscope-ai/QwenPaw/pull/4303) | 🔶 PR 已开，关联 #4162 | **高** — 解决生产痛点，技术方案明确 |
| **Token 用量统计（每轮/每会话）** | [#4433](https://github.com/agentscope-ai/QwenPaw/pull/4433) | 🔶 前后端完整实现 | **高** — 成本透明化刚需 |
| **内置插件发现与安装机制** | [#4406](https://github.com/agentscope-ai/QwenPaw/issues/4406) | 🔷 需求清晰，待设计 | 中 — 需产品决策（vs. 当前 Skills 体系关系） |
| **工作目录默认文件统一收纳（如 `.qwenpaw`）** | [#4408](https://github.com/agentscope-ai/QwenPaw/issues/4408) | 🔷 参考 OpenCode 先例 | 中 — 破坏性变更需版本规划 |
| **钉钉群聊不同用户消息并行处理** | [#4431](https://github.com/agentscope-ai/QwenPaw/issues/4431) | 🔷 架构改动（当前串行） | 中 — 需评估并发安全 |
| **每模型 max_tokens / max_input_length 配置** | [#4417](https://github.com/agentscope-ai/QwenPaw/pull/4417) | 🔶 实现中，向后兼容迁移 | **高** — 模型精细化管理 |
| **链路追踪机制** | [#4114](https://github.com/agentscope-ai/QwenPaw/issues/4114) | 🔷 仅需求提问 | 低 — 需技术方案设计 |

---

## 7. 用户反馈摘要

### 😤 核心痛点

| 场景 | 反馈来源 | 情绪强度 |
|:---|:---|:---|
| **升级配置迁移焦虑** | [#4430](https://github.com/agentscope-ai/QwenPaw/issues/4430) "卸载重装后 API keys、模型参数、对话历史是否会丢失？" | 😰 高 — 生产用户阻断性顾虑 |
| **定时任务"僵尸上下文"** | [#4162](https://github.com/agentscope-ai/QwenPaw/issues/4162) "删除会话、重启都无效，只有删定时任务重建" | 😤 极高 — 自动化场景致命 |
| **企业微信多问题并行回答** | [#4116](https://github.com/agentscope-ai/QwenPaw/issues/4116) | 😠 高 — 群聊场景体验差 |
| **长内容输出即崩溃** | [#4299](https://github.com/agentscope-ai/QwenPaw/issues/4299) "只要内容多就报错" | 😤 高 — 基础功能不稳定 |
| **推理模型适配滞后** | [#4051](https://github.com/agentscope-ai/QwenPaw/issues/4051) DeepSeek think 解析、[#4314](https://github.com/agentscope-ai/QwenPaw/issues/4314) MiMo thinking | 😕 中高 — 新模型生态跟进慢 |

### 😊 满意/期待点

- **自定义 Headers 终于落地**（[#3796](https://github.com/agentscope-ai/QwenPaw/issues/3796)→[#4413](https://github.com/agentscope-ai/QwenPaw/pull/4413)）：中转 API 用户长期诉求得解
- **Anthropic base URL 可配置**（[#4387](https://github.com/agentscope-ai/QwenPaw/pull/4387)）：Bedrock/中转场景灵活性
- **世界杯技能**（[#4407](https://github.com/agentscope-ai/QwenPaw/pull/4407)）：垂直场景趣味性获认可

---

## 8. 待处理积压

### ⚠️ 需维护者重点关注

| Issue | 创建时间 | 积压天数 | 风险说明 |
|:---|:---|:---|:---|
| [#1516](https://github.com/agentscope-ai/QwenPaw/issues/1516) Telegram AudioContent 不支持 | 2026-03-15 | **61 天** | 多媒体通道能力缺口，语音交互场景完全不可用 |
| [#1499](https://github.com/agentscope-ai/QwenPaw/issues/1499) QQ 接入 "No active model configured" | 2026-03-14 | **62 天** | 通道配置文档/错误提示不清晰，用户卡死 |
| [#2751](https://github.com/agentscope-ai/QwenPaw/issues/2751) Anthropic `content.type 'file'` 不支持 | 2026-04-01 | **45 天** | `send_file_to_user` 工具后链路断裂，文件交互场景不可用 |
| [#4162](https://github.com/agentscope-ai/QwenPaw/issues/4162) 定时任务 session 上下文残留 | 2026-05-09 | 7 天 | 有 PR [#4303](https://github.com/agentscope-ai/QwenPaw/pull/4303) 待合并，需加速 review |

### PR Review 瓶颈

| PR | 状态 | 阻塞风险 |
|:---|:---|:---|
| [#4303](https://github.com/agentscope-ai/QwenPaw/pull/4303) cron 会话隔离 | OPEN，2 天 | 关联 #4162 #4432，生产用户等待 |
| [#4361](https://github.com/agentscope-ai/QwenPaw/pull/4361) shell 文件访问绕过修复 | OPEN，2 天 | 安全类 PR，建议优先 review |
| [#4428](https://github.com/agentscope-ai/QwenPaw/pull/4428) MCP 工具名前缀 | OPEN，1 天 | 首次贡献者，快速反馈可提升社区活跃度 |

---

> **日报生成时间**：2026-05-16  
> **数据来源**：GitHub API 抓取（agentscope-ai/CoPaw）  
> **健康度评分**：⭐⭐⭐⭐☆（4/5）— 高活跃度，安全与可靠性持续投入，需关注长期积压 Issue 清理与首次贡献者响应速度。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-05-16

## 1. 今日速览

ZeroClaw 过去 24 小时保持**高活跃度**，Issues 更新 22 条（13 活跃/新开，9 关闭），PR 更新 50 条（44 待合并，6 已合并/关闭）。社区贡献者集中火力修复 SOP 子系统多个"有文档无实现"的幽灵功能，同时 v0.8.0 巨型 PR (#6398) 继续推进多智能体运行时架构升级。值得关注的是，今日出现 5 个由同一贡献者 JordanTheJet 提交的 SOP 相关 Issue，暴露出产线核心工作流引擎的完整性缺陷。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 说明 | 链接 |
|:---|:---|:---|:---|
| #6525 | drbparadise | **Matrix 频道修复**：根时间线消息不再自动开启线程，避免根消息错误回退到线程作用域 | [PR #6525](https://github.com/zeroclaw-labs/zeroclaw/pull/6525) |
| #6367 | ilteoood | **Gateway 状态端点增强**：`/api/status` 返回版本号，侧边栏页脚显示版本信息 | [PR #6367](https://github.com/zeroclaw-labs/zeroclaw/pull/6367) |

### 已关闭的重要 Issues

| Issue | 作者 | 说明 | 链接 |
|:---|:---|:---|:---|
| #5833 | Audacity88 | **会话所有权模型**：为破坏性操作（SessionReset/Delete）建立会话归属模型，解决跨 Agent 越权风险 | [Issue #5833](https://github.com/zeroclaw-labs/zeroclaw/issues/5833) |
| #6679 | Audacity88 | **CI 安全加固**：强制陈旧分支在合并前重新运行 PR 检查，防止过时绿灯结果被滥用 | [Issue #6679](https://github.com/zeroclaw-labs/zeroclaw/issues/6679) |
| #5533 | lucasjinreal | **路径安全修复**：`allowed_path` 的 contains 逻辑回归修复（S0 级安全漏洞） | [Issue #5533](https://github.com/zeroclaw-labs/zeroclaw/issues/5533) |
| #6400 | rikwade | **Docker 部署修复**：解决 bind mount 遮蔽预构建 Web 仪表盘的问题 | [Issue #6400](https://github.com/zeroclaw-labs/zeroclaw/issues/6400) |
| #6402 | Nillth | **Bash 补全崩溃修复**：消除无限递归导致的 SSH 会话崩溃 | [Issue #6402](https://github.com/zeroclaw-labs/zeroclaw/issues/6402) |
| #6657 | github-actions[bot] | **依赖安全**：lettre crate TLS 主机名验证漏洞（Boring TLS 后端） | [Issue #6657](https://github.com/zeroclaw-labs/zeroclaw/issues/6657) |
| #6522 | NiuBlibing | **Web 审批 UI**：监督模式下工具执行的 WebSocket 审批协议前端实现 | [Issue #6522](https://github.com/zeroclaw-labs/zeroclaw/issues/6522) |
| #6654 | drbparadise | **Cron 只读查询优化**：消除只读操作对可写 schema-ensure 路径的依赖 | [Issue #6654](https://github.com/zeroclaw-labs/zeroclaw/issues/6654) |

**整体评估**：今日关闭 8 个 Issue 涵盖安全、CI、部署、UX 多个维度，项目稳定性基线有所提升，但 SOP 子系统的系统性缺陷开始暴露。

---

## 4. 社区热点

### 最高讨论密度：SOP 子系统"文档与实现脱节"系列

JordanTheJet 今日连续提交 **5 个关联 Issue**，揭示 SOP（标准操作程序）引擎存在严重的"有文档承诺、无代码实现"问题：

| Issue | 核心问题 | 严重程度 | 链接 |
|:---|:---|:---|:---|
| #6689 | SOP 审计静默无操作：文档承诺的 `sop_run_*/sop_step_*` Memory 键从未写入 | **S0-数据丢失** | [Issue #6689](https://github.com/zeroclaw-labs/zeroclaw/issues/6689) |
| #6687 | 双 SopEngine 实例隔离：MQTT 启动的运行对 Agent 不可见 | **S1-工作流阻塞** | [Issue #6687](https://github.com/zeroclaw-labs/zeroclaw/issues/6687) |
| #6686 | SOP cron 触发器无生产调用方 | **S2-功能降级** | [Issue #6686](https://github.com/zeroclaw-labs/zeroclaw/issues/6686) |
| #6685 | SOP HTTP fan-in 端点未接线（`/sop/*`、`/webhook`） | **S2-功能降级** | [Issue #6685](https://github.com/zeroclaw-labs/zeroclaw/issues/6685) |
| #6683 | `skill_manage patch` 忽略冷却期，可无限补丁 | **S2-功能降级** | [Issue #6683](https://github.com/zeroclaw-labs/zeroclaw/issues/6683) |

**社区诉求分析**：这些 Issue 共享同一模式——SOP 作为 ZeroClaw 的核心差异化功能（面向生产的 Agent 工作流编排），其文档与实现存在系统性脱节。贡献者 JordanTheJet 显然在进行深度代码审计，其发现表明该子系统尚未达到生产就绪状态。项目维护者需优先回应此审计轨迹。

### 技能系统安装崩溃：异步运行时冲突

| Issue/PR | 问题 | 链接 |
|:---|:---|:---|
| #6681 | `zeroclaw skills install clawhub:*` panic：`reqwest::blocking` 在 `#[tokio::main]` 内被 drop | [Issue #6681](https://github.com/zeroclaw-labs/zeroclaw/issues/6681) |
| #6682 | **Fix PR**: 将 ClawHub 安装迁移到异步运行时 | [PR #6682](https://github.com/zeroclaw-labs/zeroclaw/pull/6682) |

---

## 5. Bug 与稳定性

| 优先级 | Issue | 严重度 | 状态 | 修复 PR | 链接 |
|:---|:---|:---|:---|:---|:---|
| 🔴 P1 | #6689 SOP 审计静默无操作 | S0-数据丢失/安全风险 | **无评论，待响应** | 无 | [Issue #6689](https://github.com/zeroclaw-labs/zeroclaw/issues/6689) |
| 🔴 P1 | #6681 clawhub 安装 panic | S1-工作流阻塞 | 新提交 | **#6682** | [Issue #6681](https://github.com/zeroclaw-labs/zeroclaw/issues/6681) |
| 🔴 P1 | #6687 双 SopEngine 状态隔离 | S1-工作流阻塞 | 新提交 | 无 | [Issue #6687](https://github.com/zeroclaw-labs/zeroclaw/issues/6687) |
| 🔴 P1 | #5533 allowed_path contains 逻辑错误 | S0-数据丢失/安全风险 | ✅ 已关闭 | 已合并 | [Issue #5533](https://github.com/zeroclaw-labs/zeroclaw/issues/5533) |
| 🟡 P2 | #6672 reasoning_content 未在 Xiaomi thinking 模型传递 | S0-数据丢失/安全风险 | 新提交 | 无 | [Issue #6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672) |
| 🟡 P2 | #6678 Anthropic API 拒绝技能工具名 | S1-工作流阻塞 | 新提交 | 无 | [Issue #6678](https://github.com/zeroclaw-labs/zeroclaw/issues/6678) |
| 🟡 P2 | #6683 skill_manage patch 无冷却 | S2-功能降级 | 新提交 | **#6684** | [Issue #6683](https://github.com/zeroclaw-labs/zeroclaw/issues/6683) |
| 🟡 P2 | #6685 SOP HTTP 端点未接线 | S2-功能降级 | 新提交 | 无 | [Issue #6685](https://github.com/zeroclaw-labs/zeroclaw/issues/6685) |
| 🟡 P2 | #6686 SOP cron 触发器无调用方 | S2-功能降级 | 新提交 | 无 | [Issue #6686](https://github.com/zeroclaw-labs/zeroclaw/issues/6686) |

**关键风险**：#6672（Xiaomi thinking 模型）和 #6678（Anthropic 工具名格式）均为今日新报的 **S0/S1 级阻塞问题**，且尚无修复 PR，可能影响主流模型用户的生产使用。

---

## 6. 功能请求与路线图信号

| 功能方向 | Issue/PR | 状态 | 纳入可能性评估 |
|:---|:---|:---|:---|
| **SearXNG 隐私搜索** | #5316 | Open, P2, needs-maintainer-review | ⭐⭐⭐ 高：隐私合规需求明确，与现有 DuckDuckGo 形成互补 |
| **多智能体运行时 v0.8.0** | #6398 | Open, XL 级, 增量审查中 | ⭐⭐⭐⭐⭐ 确定性纳入：项目核心架构升级 |
| **Anthropic/Bedrock 原生扩展思考** | #5652 | Open, L 级 | ⭐⭐⭐⭐ 高：模型能力深度集成趋势 |
| **ACP 会话持久化** | #6649 | Open, XL 级 | ⭐⭐⭐⭐ 高：编辑器场景刚需 |
| **TOTP 门控命令** | #5779 | Open, needs-author-action | ⭐⭐⭐ 中：安全增强，但作者需响应维护者反馈 |
| **Twitch/IRC 频道** | #6446 | Open, M 级 | ⭐⭐⭐ 中：社区扩展，依赖维护者带宽 |
| **Twilio SMS 频道** | #6429 | Open, L 级 | ⭐⭐⭐ 中：企业通信场景 |
| **IMAP/SMTP 分离凭证** | #6666 | Open | ⭐⭐⭐⭐ 高：实际部署痛点（relay 服务场景） |
| **Fluent 本地化技能安装输出** | #6670 | Open, P2 | ⭐⭐⭐ 中：代码质量债务，非阻塞 |
| **可观测性后端审计** | #6669 | Open, P2 | ⭐⭐⭐⭐ 高：#6596 的后续，生产可观测性基础 |

---

## 7. 用户反馈摘要

### 真实痛点

| 来源 | 痛点 | 场景 |
|:---|:---|:---|
| #6681 NiuBlibing | `clawhub:*` 技能安装完全不可用 | 尝试从官方仓库安装技能即崩溃 |
| #6687 JordanTheJet | MQTT 触发 SOP 后 Agent 无法查询状态 | 物联网/自动化场景，Agent 与外部触发器协同失败 |
| #6689 JordanTheJet | SOP 审计承诺的合规追踪不存在 | 金融/医疗等审计敏感行业无法采用 |
| #6678 KundKMC | 自定义技能导致 Anthropic API 全量拒绝 | 技能生态扩展受阻 |
| #6672 babaksh | Xiaomi thinking 模型的推理链断裂 | 中文用户群体，成本优化的 reasoning 场景 |
| #6688 JordanTheJet | 委托 Agent 技能注入模式硬编码为 Full | 小上下文模型（32K）+ 多技能 = 上下文溢出 |

### 满意点

- #6400 Docker 部署修复确认解决 bind mount 遮蔽问题
- #6522 Web 审批 UI 补齐监督模式的最后一块拼图
- #6253 技能系统 v0.7.6 追踪 Issue 显示项目对 UX 改进的系统性关注

---

## 8. 待处理积压

### 需维护者紧急关注

| 条目 | 积压天数 | 风险 | 链接 |
|:---|:---|:---|:---|
| #6074 153 个提交批量回滚恢复审计 | **48 天** | 高：代码资产流失，#6596 等修复可能遗漏 | [Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) |
| #5316 SearXNG 搜索支持 | **41 天** | 中：隐私搜索需求明确，社区有实现意愿 | [Issue #5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) |
| #5779 TOTP 门控命令 | **31 天** | 中：安全增强，标记 `needs-author-action` 后无更新 | [PR #5779](https://github.com/zeroclaw-labs/zeroclaw/pull/5779) |
| #5652 原生扩展思考 | **35 天** | 高：模型能力差距直接影响 Agent 效果 | [PR #5652](https://github.com/zeroclaw-labs/zeroclaw/pull/5652) |
| #6398 v0.8.0 多智能体运行时 | **11 天** | 极高：架构升级，"DO NOT APPROVE/MERGE" 状态需维护者协调增量审查 | [PR #6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398) |

### 今日新报待响应（0 评论）

| Issue | 严重度 | 链接 |
|:---|:---|:---|
| #6689 SOP 审计无操作 | S0 | [Issue #6689](https://github.com/zeroclaw-labs/zeroclaw/issues/6689) |
| #6687 双 SopEngine 隔离 | S1 | [Issue #6687](https://github.com/zeroclaw-labs/zeroclaw/issues/6687) |
| #6686 SOP cron 无调用方 | S2 | [Issue #6686](https://github.com/zeroclaw-labs/zeroclaw/issues/6686) |
| #6685 SOP HTTP 未接线 | S2 | [Issue #6685](https://github.com/zeroclaw-labs/zeroclaw/issues/6685) |
| #6683 skill_manage 无冷却 | S2 | [Issue #6683](https://github.com/zeroclaw-labs/zeroclaw/issues/6683) |
| #6678 Anthropic 工具名格式 | S1 | [Issue #6678](https://github.com/zeroclaw-labs/zeroclaw/issues/6678) |
| #6672 Xiaomi reasoning 丢失 | S0 | [Issue #6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672) |
| #6670 Fluent 本地化 | P2 | [Issue #6670](https://github.com/zeroclaw-labs/zeroclaw/issues/6670) |
| #6669 可观测性审计 | P2 | [Issue #6669](https://github.com/zeroclaw-labs/zeroclaw/issues/6669) |

---

**健康度评分**：⚡ 活跃度 A / 🐛 稳定性 B- / 📋 响应及时性 C+

*注：JordanTheJet 的 SOP 审计系列 Issue 与 #6074 的历史提交恢复形成呼应，建议维护者优先组织 SOP 子系统的专项代码审查，避免文档与实现持续脱节。*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*