# OpenClaw 生态日报 2026-04-22

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-04-22 00:13 UTC

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

# OpenClaw 项目动态日报 | 2026-04-22

---

## 1. 今日速览

OpenClaw 项目在 2026-04-22 保持**极高活跃度**：24 小时内 500 条 Issues 更新（324 活跃/新开，176 关闭）与 500 条 PR 更新（341 待合并，159 已合并/关闭）形成 1:1 的 Issue-PR 处理节奏，表明社区需求旺盛且维护团队响应迅速。3 个新版本发布聚焦向导体验优化，但核心基础设施层面仍存在大量回归性 Bug 待修复，特别是 OpenRouter/Codex 集成路径、Telegram/Discord 等渠道稳定性问题突出。PR 队列中 341 个待合并请求显示代码审查压力较大，部分贡献者因"too-many-prs"标签被关闭 PR，反映合并带宽瓶颈。

---

## 2. 版本发布

### v2026.4.20 (稳定版) & v2026.4.20-beta.2 / beta.1
- **发布日期**: 2026-04-20
- **更新内容**: 统一优化 Onboard/Wizard 体验：
  - 安全免责声明重设计：单条黄色警告横幅替代原有样式，增加章节标题与项目符号清单，取消注释正文置灰效果以提升关键指引可读性
  - 模型目录初始加载时新增加载动画，消除向导页面空白闪烁
- **破坏性变更**: 无
- **迁移注意事项**: 无需操作；UI 变更自动生效

> 注：三个版本变更日志内容高度重复，beta → stable 的发布流程显示该版本经过完整测试周期。

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 状态 |
|:---|:---|:---|:---|
| [#69868](https://github.com/openclaw/openclaw/pull/69868) | gumadeiras | 插件源路径验证：防止 `openclaw.extensions` 或 `openclaw.setupEntry` 路径逃逸加载包内运行时文件 | ✅ 已关闭 |
| [#69884](https://github.com/openclaw/openclaw/pull/69884) | Eruditi | 日志子系统可选链修复 | ✅ 已关闭 |
| [#69882](https://github.com/openclaw/openclaw/pull/69882) | Eruditi | MiniMax M2.7 VLM 支持修复 | ✅ 已关闭 |
| [#69883](https://github.com/openclaw/openclaw/pull/69883) | Eruditi | MiniMax 529 过载故障转移修复 | ✅ 已关闭 |
| [#69881](https://github.com/openclaw/openclaw/pull/69881) | Eruditi | Onboard trim TypeError 修复 | ✅ 已关闭 |
| [#45166](https://github.com/openclaw/openclaw/pull/45166) | hugh-agent | Telegram `replyToModeByChatType` 功能（被 #69757 替代） | ✅ 已关闭 |
| [#69869](https://github.com/openclaw/openclaw/pull/69869) | gumadeiras | Discord slash 命令后续回复保持 ephemeral 可见性 | ✅ 已关闭 |

### 推进中的重大功能

| PR | 作者 | 规模 | 意义 |
|:---|:---|:---|:---|
| [#69757](https://github.com/openclaw/openclaw/pull/69757) | hugh-agent | **XL** | Telegram 按聊天类型回复模式，对齐 Slack 已有能力，解决群组/频道回复上下文丢失问题 |
| [#69584](https://github.com/openclaw/openclaw/pull/69584) | mmy4shadow | **XL** | Codex 网关运行时流修复：OAuth 浏览器回退、概览加载优化、Windows 调度任务支持 |
| [#69862](https://github.com/openclaw/openclaw/pull/69862) | gumadeiras | **XL** | 禁用插件的渠道存在性门控集中化：防止环境变量与过期认证泄漏已禁用渠道 |
| [#69608](https://github.com/openclaw/openclaw/pull/69608) | rubencu | **XL** | 启动上下文与日记忆处理对齐 session-summary 变体，修复 `/new` 端点行为 |
| [#68936](https://github.com/openclaw/openclaw/pull/68936) | OFABLE | **XL** | **PR 审查自动修复管道** + Windows 后台守护进程：引入 Claude Agent SDK 订阅自动处理审查评论 |
| [#69832](https://github.com/openclaw/openclaw/pull/69832) | DanWebb1949 | **XL** | **`openclaw diagnose` AI 诊断 CLI**：网关运营数据组装 → AI 模型结构化分析 → Markdown 报告 |

**里程碑判断**: `#68936` 的自动修复管道若合并，将标志 OpenClaw 成为首批内置 AI 驱动代码审查自动化的开源 AI 助手框架；`#69832` 的 diagnose 命令则体现运维可观测性的系统化升级。

---

## 4. 社区热点

### 最高讨论热度 Issues

| 排名 | Issue | 评论 | 👍 | 核心诉求 |
|:---|:---|:---:|:---:|:---|
| 1 | [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Clawdbot Apps | **89** | 71 | **跨平台桌面客户端缺口**：macOS/iOS/Android 已有，Linux/Windows 长期缺失，71 赞显示大量开发者被排除在原生体验外 |
| 2 | [#55342](https://github.com/openclaw/openclaw/issues/55342) 技能行为声誉层 — 超越身份验证的缺失层 | 17 | 0 | **安全架构升级**：341 个恶意技能、13.4% 关键漏洞率、VirusTotal 无法检测提示注入，呼吁从"验证身份"扩展到"验证行为" |
| 3 | [#29053](https://github.com/openclaw/openclaw/issues/29053) MCP 客户端原生支持 | 17 | 19 | **生态互操作性**：OpenClaw 自有工具系统与行业标准化 MCP 协议的对接，避免生态孤岛 |
| 4 | [#35220](https://github.com/openclaw/openclaw/issues/35220) Codex Responses API 流式 server_error 不触发模型回退 | 16 | 0 | **可靠性工程**：流式错误处理链路断裂，已关闭但关联 #24378 显示根因未彻底修复 |
| 5 | [#65603](https://github.com/openclaw/openclaw/issues/65603) Azure Foundry GPT 模型请求被拒 | 15 | 0 | **云服务商兼容性**：2026.4.11 升级后推理模型与工具调用能力失效 |

### 诉求分析

- **平台公平性** (#75): 71 赞是数据中最强烈的用户信号，Linux/Windows 开发者构成贡献者基础却被边缘化
- **安全范式转移** (#55342): 零点赞但 17 条深度评论反映技术社区对"后身份验证安全"的严肃讨论，而非情绪反应
- **协议标准化** (#29053): 19 赞 + 17 评论显示 MCP 支持是"期待已久的基础设施"，与 OpenClaw 自有工具系统的张力需架构决策

---

## 5. Bug 与稳定性

### 🔴 严重/回归性 Bug（按影响范围排序）

| Issue | 类型 | 严重程度 | 状态 | 是否有 Fix PR | 关键信息 |
|:---|:---|:---:|:---|:---:|:---|
| [#66633](https://github.com/openclaw/openclaw/issues/66633) | Cloudflare 403 阻断 Codex 全部请求 | **回归** | ✅ 已关闭 | ⚠️ 关联 #69584 | 2026.4.12→4.14 升级后 `chatgpt.com/backend-api/v1` 触发 bot 缓解挑战 |
| [#68735](https://github.com/openclaw/openclaw/issues/68735) | GitHub Copilot 模型请求被拒 | **回归** | 🔴 开放 | ❌ 无 | 2026.4.14→4.15 升级后首条消息成功、后续失败 |
| [#65603](https://github.com/openclaw/openclaw/issues/65603) | Azure Foundry GPT 推理+工具调用失效 | **回归** | 🔴 开放 | ❌ 无 | 2026.4.11 引入，禁用推理后仍有问题 |
| [#65867](https://github.com/openclaw/openclaw/issues/65867) | Gemini `<final>` 标签泄漏到消息 | **回归** | 🔴 开放 | ❌ 无 | #48587 历史重现，WebUI 可见 WhatsApp 不可见 |
| [#68056](https://github.com/openclaw/openclaw/issues/68056) | WhatsApp 单条媒体回复发送两次 | **回归** | 🔴 开放 | ❌ 无 | 2026.4.15 引入 |
| [#69064](https://github.com/openclaw/openclaw/issues/69064) | Telegram 轮询停滞自动恢复静默失败 | **崩溃/挂起** | 🔴 开放 | ❌ 无 | 检测器触发但无后续轮询，需手动 `systemctl restart` |
| [#69831](https://github.com/openclaw/openclaw/issues/69831) | `grammy` 模块缺失导致更新失败 | **回归** | 🔴 开放 | ❌ 无 | **今日新增**，Telegram 扩展依赖问题，6 赞显示影响广泛 |
| [#63129](https://github.com/openclaw/openclaw/issues/63129) | `@larksuiteoapi/node-sdk` 模块缺失 | **行为** | 🔴 开放 | ❌ 无 | 飞书依赖默认引入引发用户强烈不满（含辱骂性评论） |

### 🟡 渠道稳定性集群

| Issue | 渠道 | 问题 | 状态 |
|:---|:---|:---|:---|
| [#29214](https://github.com/openclaw/openclaw/issues/29214) | Signal | 群组 @提及不工作，每条消息都回复 | 🔴 开放（有变通方案）|
| [#37844](https://github.com/openclaw/openclaw/issues/37844) | Discord | 重复回复同一消息 | 🔴 开放 |
| [#38061](https://github.com/openclaw/openclaw/issues/38061) | Webchat | 重复助手消息（delivery-mirror 转录条目）| 🔴 开放 |
| [#36232](https://github.com/openclaw/openclaw/issues/36232) | Telegram | Markdown 表格渲染为文本墙 | 🔴 开放 |

**稳定性评估**: 2026.4.14-4.15 版本引入**密集回归**，涉及 Codex、Azure、GitHub Copilot、Gemini 四大提供商及 WhatsApp、Telegram 两大渠道。`#69831` 的 `grammy` 缺失与 `#63129` 的飞书依赖争议显示**扩展依赖管理**存在系统性风险。

---

## 6. 功能请求与路线图信号

### 高可行性（已有 PR 或明确路径）

| 需求 | Issue/PR | 纳入信号 |
|:---|:---|:---|
| Telegram 按聊天类型回复模式 | [#69757](https://github.com/openclaw/openclaw/pull/69757) | PR 已开，XL 规模，匹配 Slack 已有形状 |
| WhatsApp 引用回复 | [#62305](https://github.com/openclaw/openclaw/pull/62305) | PR 已开，采用 `replyToMode` 既有契约 |
| AI 诊断 CLI | [#69832](https://github.com/openclaw/openclaw/pull/69832) | PR 已开，运维体验升级 |
| PR 自动修复管道 | [#68936](https://github.com/openclaw/openclaw/pull/68936) | PR 已开，依赖 Claude Agent SDK 订阅 |

### 需架构决策

| 需求 | Issue | 障碍/考量 |
|:---|:---|:---|
| MCP 客户端原生支持 | [#29053](https://github.com/openclaw/openclaw/issues/29053) | 与自有工具系统的定位冲突：替代、并存还是桥接？ |
| 行为声誉系统 | [#55342](https://github.com/openclaw/openclaw/issues/55342) | 需设计去中心化/联邦化声誉基础设施，非短期可实现 |
| Linux/Windows 原生应用 | [#75](https://github.com/openclaw/openclaw/issues/75) | 71 赞但无 PR，可能受 Electron/Tauri 技术选型或资源约束 |
| Amazon Bedrock API Key 认证 | [#30215](https://github.com/openclaw/openclaw/issues/30215) | AWS SDK 默认凭证链之外的替代路径，云原生策略权衡 |

### 性能优化

| 需求 | Issue | 技术价值 |
|:---|:---|:---|
| 系统提示词前缀缓存优化 | [#40256](https://github.com/openclaw/openclaw/issues/40256) | 动态内容前置导致本地模型 8-16x 延迟，重排即可修复 |

---

## 7. 用户反馈摘要

### 😤 痛点（直接引用或提炼）

> **依赖管理失控**
> - "#63129: 妈的 傻逼国内开发者不会写代码就他妈别来污染openclaw行不 默认还他妈引入飞书的核心" — 情绪极端化反映**可选依赖默认加载**策略的伤害
> - "#69831: `grammy` 模块缺失导致 `openclaw update` 失败" — 扩展依赖未在更新流程中自动安装

> **升级恐惧**
> - "#66633: 升级后 every request fails"
> - "#68735: 首条消息成功，后续失败" — 非确定性回归比完全失败更难调试
> - "#62045: 2026.4.5 坏了 Codex mini，回滚到 2026.4.2 立即修复" — 用户形成"延迟升级"策略

> **平台歧视感**
> - "#75: Linux and Windows are missing" — 长期未响应导致"二等公民"认知

### 😊 满意点

> - 社区响应速度：176 Issues 关闭/500 显示维护团队活跃
> - 变通方案文化：#29214 标注 "[Workaround provided]"，#69104 用户自发提供 OpenRouter 修复配置

### 🔍 使用场景洞察

| 场景 | 来源 Issue | 隐含需求 |
|:---|:---|:---|
| systemd 托管的 Ubuntu VPS 长期运行 | #52037, #29736 | 守护进程稳定性、状态持久化路径可配置 |
| 多模型故障转移配置 | #66633, #35220 | 回退链路的端到端测试覆盖 |
| 中国大陆网络环境 | #38503 | 代理配置 JSON schema 合法性、文档可达性 |
| 企业/团队群组部署 | #29214, #37844, #69757 | 渠道特定的回复策略、身份识别、权限控制 |

---

## 8. 待处理积压

### ⚠️ 长期 stale 但高价值 Issue

| Issue | 创建 | 最后更新 | 停滞天数 | 风险 |
|:---|:---|:---|:---|:---|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows 原生应用 | 2026-01-01 | 2026-04-21 | ~110 天 | **71 赞**，平台公平性承诺未兑现，竞争者可能填补空缺 |
| [#26422](https://github.com/openclaw/openclaw/issues/26422) `message_sending` 插件钩子死代码 | 2026-02-25 | 2026-04-21 | ~55 天 | 插件 API 契约失效，破坏扩展生态信任 |
| [#29387](https://github.com/openclaw/openclaw/issues/29387) `agentDir` bootstrap 文件被静默忽略 | 2026-02-28 | 2026-04-21 | ~52 天 | 多代理配置的核心功能文档与实现不一致 |
| [#31583](https://github.com/openclaw/openclaw/issues/31583) `exec` 工具不继承 `skills.entries.*.env` | 2026-03-02 | 2026-04-21 | ~50 天 | 密钥注入失败，用户被迫使用不安全替代方案 |
| [#37634](https://github.com/openclaw/openclaw/issues/37634) sandbox `workspaceAccess: "none"` 工作区只读 | 2026-03-06 | 2026-04-21 | ~46 天 | 隔离模型与可写工作区的设计矛盾 |

### 🔔 维护者行动建议

1. **优先级重校准**: `#75` 的 71 赞与 110 天停滞形成强烈反差，建议至少发布技术选型 RFC
2. **回归防护**: 2026.4.11-4.15 版本引入的 Bug 集群显示发布流程缺少提供商兼容性回归测试
3. **依赖治理**: `#63129` 与 `#69831` 表明需将扩展依赖改为懒加载或可选安装
4. **PR 带宽**: 341 待合并 PR 中大量为 Eruditi 的 XS 修复，建议设立"快速通道"自动化审查减少维护者负载

---

*日报生成时间: 2026-04-22 | 数据来源: github.com/openclaw/openclaw*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析 | 2026-04-22

---

## 1. 生态全景

个人 AI 助手开源生态正处于**"基础设施升级与质量巩固"的关键转折期**：头部项目（OpenClaw、NanoBot、Hermes Agent）日均 Issue/PR 处理量突破 50-100 条，社区规模与商业项目相当；MCP 协议成为事实标准但集成稳定性普遍不足，3 个项目同日报告 MCP 相关故障；安全纵深从"沙箱有无"转向"行为审计、供应链安全、执行审批绕过"等精细化防御；边缘部署（Raspberry Pi、WSL、Windows 原生）从"能跑"变为"跑得稳"的新战场。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 版本发布 | 健康度评估 |
|:---|:---|:---|:---|:---|
| **OpenClaw** | 500 (324活跃/176关闭) | 500 (341待合/159已合) | v2026.4.20 稳定版 + 2 beta | ⚠️ **高活跃高压** — 1:1 Issue-PR 节奏但 341 待合并暴露审查带宽瓶颈，回归 Bug 密集 |
| **NanoBot** | 69 (关闭率88.4%) | 39 (合并率59%) | v0.1.5.post2 | ✅ **健康迭代** — 高关闭率+新增12贡献者，LiteLLM供应链风险待解 |
| **Hermes Agent** | 50 (39活跃/11关闭) | 50 (34待合/16已合) | 无 | ✅ **质量打磨期** — TUI 集中治理4 PR，P1 审批死锁修复就绪 |
| **PicoClaw** | 7 | 18 (11已合) | v0.2.6-nightly | ✅ **架构升级** — Pipeline 重构完成，认证安全重构，i18n/历史持久化待补 |
| **NanoClaw** | 4 (全开放) | 27 (10已合/17待审) | 无 | ⚠️ **v2 摩擦期** — 多通道隔离、WSL 兼容、安装体验待打磨，Nostr 生态激进布局 |
| **NullClaw** | 2 | 1 (待合) | 无 | ⚠️ **低活跃待修复** — 边缘设备 CPU 空转有 PR 未合，Tailscale 文档缺口7天未响应 |
| **IronClaw** | 21 (9关闭) | 39 (待合积压) | v0.26.0 (含Linux安装器回归) | ⚠️ **高交付高压** — Engine V2 切换中，发布即遇阻塞性回归 |
| **LobsterAI** | 活跃中 | 18 (13已合) | v2026.4.21 | ✅ **稳健扩展** — 邮件通道上线，diff 回归待热修，依赖升级需协调 |
| **TinyClaw** | 0 | 0 | 无 | 🔴 **停滞** — 连续周期无活动 |
| **Moltis** | 6 (闭环) + 6 新增 | 3 已合 + 1 待合 | 20260421.05 | ✅ **高质量闭环** — 安全漏洞当日修复，6/8 Bug 闭环率 |
| **CoPaw** | 50 (关闭率58%) | 40 (合并率45%) | v1.1.3-beta.2 | ⚠️ **快速迭代承压** — MCP 成重灾区2个P0，记忆重构等架构级 PR 待审 |
| **ZeptoClaw** | 1 (新增) | 4 (3 Dependabot待合) | 无 | 🔴 **功能停滞** — 仅依赖自动更新，Telegram 配置阻断无响应 |
| **ZeroClaw** | 25 (13关闭) | 50 (32待合/18已合) | 无 | ⚠️ **架构还债期** — Schema v3+Onboard 重写阻塞发布，S0/S1 Bug 4个待解 |

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 表现 | 生态对比 |
|:---|:---|:---|
| **社区规模** | 500 Issues/500 PRs 单日 = 2-10x 于同类 | 绝对领先，但 Hermes/NanoBot/CoPaw 的关闭率更高（59-88%），OpenClaw 的 341 待合并 PR 暴露**审查带宽瓶颈** |
| **技术路线** | 插件化扩展 + 多网关原生支持（15+ 渠道） | vs NanoBot 的 AgentScope 框架深度集成、vs Hermes 的 TUI 原生体验、vs ZeroClaw 的 Rust 安全优先 |
| **核心优势** | **渠道矩阵最完整**（Telegram/Discord/WhatsApp/Signal/Slack/Webchat/飞书全覆盖），**企业集成最深**（Azure Foundry/GitHub Copilot/OpenRouter/Codex） | NanoBot 胜在文档处理（DOCX/XLSX/PPTX），Hermes 胜在区块链/自主机器经济，Moltis 胜在安全纵深 |
| **关键劣势** | **回归密度最高**（2026.4.11-4.15 连续版本破坏 4 大提供商+2 渠道），**扩展依赖管理失控**（grammy/飞书 SDK 默认引入引发众怒） | NanoBot 的 LiteLLM 供应链风险、IronClaw 的 Linux 安装器回归、CoPaw 的 MCP 稳定性均属同类问题 |
| **差异化壁垒** | `openclaw diagnose` AI 诊断 CLI（#69832）、PR 审查自动修复管道（#68936）—— **首个内置 AI 驱动代码审查自动化的开源 AI 助手框架** | 其他项目无同类基础设施级工具 |

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 紧迫程度 |
|:---|:---|:---|:---:|
| **MCP 协议集成与稳定性** | OpenClaw (#29053)、CoPaw (#3640/#3642)、NanoClaw (#1906 Ollama MCP 故障)、PicoClaw (#2535 MCP Slash 命令) | 从"功能卖点"变为"稳定性债务"：MCP Client 异常致 Agent 假死、SSE 流 task 泄漏、工具调用失败无降级 | 🔴 高 |
| **多通道状态隔离与路由可靠性** | OpenClaw (#69757 Telegram 回复模式)、NanoClaw (#1902 跨通道泄漏)、ZeroClaw (#5591 权限模型不一致)、Hermes (#13607 Telegram 论坛群组) | 共享 agent group 时的 destination/credential 状态残留、mention_only 边界失效、跨平台会话恢复 | 🔴 高 |
| **记忆系统重构与上下文管理** | CoPaw (#3548 记忆重构/#2289 MEMORY.md 膨胀)、NanoBot (#2463 prompt 前缀一致性)、OpenClaw (#69608 启动上下文对齐)、PicoClaw (#2310 历史截断) | 从文本文件持久化 → 向量检索/结构化缓存/语义压缩，解决"长任务连续性"与"成本效率"矛盾 | 🟡 中高 |
| **安全纵深：从沙箱到行为审计** | Moltis (#822 审批绕过修复/#815 SAFE_BINS 严格模式)、OpenClaw (#55342 行为声誉层)、ZeroClaw (#5741 交互式审批)、NanoBot (#3366 Shell 注入) | 验证"身份"→验证"行为"：环境变量注入、LD_PRELOAD 绕过、Skill 级权限控制、去中心化声誉 | 🟡 中高 |
| **边缘与跨平台部署** | NullClaw (#851 RPi5 CPU 空转)、NanoClaw (#1903 WSL systemd/#1904 Docker)、OpenClaw (#75 Linux/Windows 原生应用)、PicoClaw (#2613 Windows govet) | 从 macOS 优先 → 全平台公平：ARM SBC、WSL、Windows 原生、systemd 托管 VPS | 🟡 中 |
| **可观测性与 AI 驱动诊断** | OpenClaw (#69832 diagnose CLI)、Moltis (#820 浏览器容器诊断)、IronClaw (#5980 Otel Traces)、NanoBot (#3367 延迟观测) | 从"看日志"到"AI 分析结构化数据"：网关运营数据 → 模型诊断 → Markdown 报告 | 🟢 新兴 |
| **供应链与依赖安全** | NanoBot (#2443 LiteLLM 被隔离)、OpenClaw (#63129 飞书依赖争议/#69831 grammy 缺失)、LobsterAI (#1781 钉钉连接器降级) | 可选依赖默认加载、PyPI 安全标记响应、SDK 版本锁定策略 | 🔴 高 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|:---|:---|:---|:---|
| **OpenClaw** | 企业级多网关集成、渠道矩阵、AI 驱动 DevOps | 中大型企业、SaaS 集成商、多平台运营者 | Node.js/TypeScript 插件化；OpenClaw 自有工具系统 vs MCP 张力 |
| **NanoBot** | 文档处理工作流、AgentScope 框架深度集成、子 agent 编排 | 中国企业用户、Office 自动化场景、多模态需求 | Python；LiteLLM 统一接入（供应链风险）；AgentHook 可扩展 |
| **Hermes Agent** | 终端原生体验（TUI）、区块链/自主机器经济、规模化工程自动化 | 开发者、DeFi/自主机器、CLI 重度用户 | Python；Exfer 区块链技能；Claude Code `/batch` 对标 |
| **PicoClaw** | 硬件亲和（Sipeed 生态）、Go 语言高性能、微信/飞书中国生态 | 嵌入式开发者、中国中小企业、硬件集成场景 | Go；Pipeline 四阶段 Agent 架构；bcrypt 认证迁移 |
| **NanoClaw** | v2 多通道隔离、Nostr/Lightning 去中心化协议、品牌化安装体验 | 密码朋克、去中心化信仰者、多协议极客 | TypeScript/Node.js；Claude Code + Agent SDK 严格版本锁定；Plan B SDLC |
| **Moltis** | 安全纵深（Rust 内存安全）、执行审批、沙箱隔离、容器化可观测性 | 安全敏感型企业、容器化部署、合规要求场景 | Rust；双层防御（Regex+语义）执行审批；Landlock FS 隔离探索 |
| **IronClaw** | Engine V2 沙箱成本追踪、Workspace 实体、NEAR AI 生态集成 | Web3/区块链企业、成本优化需求、多租户 SaaS | Rust；Engine V1/V2 双轨运行；WASM TEE 可信执行 |
| **CoPaw** | 记忆重构、语义化 Skill 路由、语音/通话渠道、低维护成本 | 个人高级用户、QQ/微信生态、长任务自动化 | Python/AgentScope；asyncio.Future 审批异步化；"梦境日志"创新概念 |
| **ZeroClaw** | Schema 驱动配置、RBAC 多租户、Provider 统一架构 | 企业多租户部署、配置即代码团队、权限严格场景 | Rust；TOML→Mozilla Fluent i18n 迁移探索；Tauri 桌面端 |

---

## 6. 社区热度与成熟度分层

| 层级 | 项目 | 特征 | 阶段判断 |
|:---|:---|:---|:---|
| **第一梯队：规模领先，质量承压** | OpenClaw、ZeroClaw、CoPaw | 日均 25-100+ Issue/PR，待合并队列 30-340，架构级重构并行 | **快速迭代期** — 功能扩张与基础设施升级叠加，回归风险高 |
| **第二梯队：健康迭代，质量巩固** | NanoBot、Hermes Agent、Moltis、PicoClaw、LobsterAI | 关闭率 45-88%，有明确版本节奏，当日 Bug 当日/当周闭环 | **质量巩固期** — 从"能用"转向"好用"，工程债务清理 |
| **第三梯队：低活跃或停滞** | NullClaw、ZeptoClaw、TinyClaw | 日均 <5 人类贡献，依赖自动更新或零活动 | **维护瓶颈期** — 核心维护者带宽不足或项目转型中 |
| **特殊：激进实验** | NanoClaw | v2 重构阵痛 + Nostr/Lightning 生态激进布局 | **架构重构期** — 高风险高潜力，需观察 3-6 个月 |

---

## 7. 值得关注的趋势信号

| 趋势 | 信号来源 | 对开发者的参考价值 |
|:---|:---|:---|
| **"AI 驱动自身运维"成为竞争力分水岭** | OpenClaw 的 `diagnose` CLI + PR 自动修复管道；Moltis 的浏览器容器诊断增强 | 智能体框架的下一步是"自修复基础设施"——开发者应关注如何将 LLM 能力注入 CI/CD、故障排查、代码审查，而非仅停留在对话层 |
| **MCP 从"功能卖点"变为"稳定性债务"** | CoPaw 2个P0、NanoClaw Ollama MCP 故障、OpenClaw 原生工具系统与 MCP 的张力 | 过早全面拥抱 MCP 可能引入不可控的故障域；建议采用"桥接+降级"策略，保留自有工具系统作为 fallback |
| **"行为安全"取代"身份安全"成为新范式** | OpenClaw #55342 行为声誉层、Moltis #822 审批绕过修复、ZeroClaw #5741 交互式审批 | 提示注入、工具滥用、环境变量注入等"行为级攻击"无法通过传统身份验证防御；建议在设计阶段引入"最小权限 Skill"和"执行审计追踪" |
| **边缘部署从"小众"走向"刚需"** | NullClaw RPi5、NanoClaw WSL、OpenClaw #75 71赞、PicoClaw Windows 支持 | 个人 AI 助手的终极形态是"常驻设备"而非"云端服务"；开发者需重视 ARM、systemd、容器嵌套、资源受限环境的测试覆盖 |
| **记忆系统的"成本意识"觉醒** | CoPaw MEMORY.md 膨胀、NanoBot prompt cache 失效、OpenClaw 上下文压缩 | 长上下文模型普及不解决成本问题；prompt 前缀缓存、语义压缩、结构化记忆检索将成为标配，而非可选优化 |
| **供应链安全进入"日常运维"** | NanoBot LiteLLM 被隔离、OpenClaw 飞书依赖争议、LobsterAI 钉钉连接器降级 | 依赖自动更新工具（Dependabot）需配合"关键依赖人工审计"策略；建议建立"供应商安全响应 SLA"评估矩阵 |

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-04-22

## 1. 今日速览

NanoBot 今日展现出**极高的社区活跃度与工程成熟度**：24小时内 Issues 处理量达 69 条（关闭率 88.4%），PR 处理量 39 条（合并/关闭率 59%），并发布了 `v0.1.5.post2` 补丁版本。项目正处于**快速迭代期**，核心聚焦于多平台兼容性扩展（Windows/Python 3.14）、安全性加固及企业级集成能力。社区贡献者规模持续扩大（本版本新增 12 位贡献者），但长期架构债务（如 prompt 前缀一致性、LiteLLM 依赖风险）仍需关注。

---

## 2. 版本发布

### [v0.1.5.post2](https://github.com/HKUDS/nanobot/releases/tag/v0.1.5.post2)

| 属性 | 详情 |
|:---|:---|
| **发布日期** | 2026-04-21 |
| **合并 PR 数** | 67 |
| **新增贡献者** | 12 |
| **版本定位** | Reach & Polish（扩展性与打磨） |

**核心更新内容：**

| 领域 | 变更 |
|:---|:---|
| **平台扩展** | Windows 支持加入官方矩阵；Python 3.14 兼容性验证通过 |
| **工具增强** | `read_file` 工具能力扩展（详见下方 PR #3336） |
| **稳定性** | 相比 `v0.1.5.post1`（侧重 agent 自管理），本版本聚焦运行环境覆盖与边缘场景处理 |

**迁移注意事项：**
- Windows 用户可直接通过 pip 安装，无需 WSL 环境
- Python 3.14 为预览级支持，生产环境建议 3.11-3.13

---

## 3. 项目进展

### 今日合并/关闭的关键 PR（23 条）

| PR | 作者 | 影响领域 | 推进价值 |
|:---|:---|:---|:---|
| [#3336](https://github.com/HKUDS/nanobot/pull/3336) | aiguozhi123456 | **文档处理能力** | `read_file` 工具正式支持 DOCX/XLSX/PPTX，打通 Office 文档工作流 |
| [#3355](https://github.com/HKUDS/nanobot/pull/3355) | hussein1362 | **渠道体验** | Telegram Markdown 渲染升级，适配 GPT-5.4/Claude/Gemini 的现代输出格式 |
| [#3356](https://github.com/HKUDS/nanobot/pull/3356) | chengyongru | **可靠性** | 智谱 AI (ZhiPu) 1302 速率限制错误码纳入重试机制，解决中文 API 适配盲区 |
| [#3359](https://github.com/HKUDS/nanobot/pull/3359) | chengyongru | **交互安全** | 修复活跃对话中 `/new` 等命令被误注入为普通消息的 bug |
| [#3353](https://github.com/HKUDS/nanobot/pull/3353) | XJPeng12 | **资源管理** | XLSX 提取异常时确保 workbook 强制关闭，防止文件句柄泄漏 |
| [#3363](https://github.com/HKUDS/nanobot/pull/3363) | lahuman | **模型兼容** | MiniMax reasoning 能力修复，OpenAI 兼容后端支持 reasoning_split |
| [#3347](https://github.com/HKUDS/nanobot/pull/3347) | XJPeng12 | **开发者体验** | WebSocket 渠道配置文档补全，降低 WebUI 开发门槛 |

**整体进展评估：** 项目在企业级场景（文档处理、多渠道适配、错误恢复）上迈出实质性步伐，工程债务清理同步推进。

---

## 4. 社区热点

### 讨论最活跃的议题

| 排名 | Issue/PR | 评论数 | 核心诉求 | 状态 |
|:---|:---|:---:|:---|:---|
| 1 | [#2463](https://github.com/HKUDS/nanobot/issues/2463) 架构缺陷：prompt 前缀未持久化 | 10 | **OpenAI prompt cache 兼容性危机** — 历史记录存储格式与实际发送前缀不一致，导致缓存失效与成本飙升 | 🔴 OPEN |
| 2 | [#2062](https://github.com/HKUDS/nanobot/issues/2062) 如何清空/重启/新建 session | 8 | **飞书场景下的上下文爆炸** — 固定用户 ID 导致 session 文件无限增长，缺乏自动化生命周期管理 | ✅ CLOSED |
| 3 | [#2049](https://github.com/HKUDS/nanobot/issues/2049) Skill 创建能力缺失 | 6 | **功能回归** — 升级后 skill-creator 工具不可用，阻断用户自定义扩展 | ✅ CLOSED |
| 4 | [#161](https://github.com/HKUDS/nanobot/issues/161) 替换 LiteLLM 为原生 SDK | 6 | **依赖安全与精简** — LiteLLM 体积大、透明度低，且近期出现凭据窃取事件（见 #2443） | ✅ CLOSED |
| 5 | [#2443](https://github.com/HKUDS/nanobot/issues/2443) LiteLLM 被隔离 | 6 | **供应链安全警报** — PyPI 标记 LiteLLM 存在凭据窃取风险，要求紧急响应 | ✅ CLOSED |

**诉求分析：** 社区正从"功能可用"向"生产可信"演进——prompt 缓存效率、依赖安全、session 治理成为核心关切。架构层面决策（#161 LiteLLM 替换 vs. #2463 prompt 一致性）将决定项目长期竞争力。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | Fix 状态 |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#3366](https://github.com/HKUDS/nanobot/pull/3366) | **Shell 注入漏洞**：`path_append` 在非 Windows 平台直接拼接 shell 命令，可绕过 `_guard_command` | 🟡 PR OPEN，待审查 |
| 🔴 **Critical** | [#2443](https://github.com/HKUDS/nanobot/issues/2443) / [#161](https://github.com/HKUDS/nanobot/issues/161) | **供应链攻击**：LiteLLM 被 PyPI 隔离（凭据窃取），项目依赖存在安全风险 | 🟡 已关闭但未完全解决，需长期架构调整 |
| 🟡 **High** | [#2463](https://github.com/HKUDS/nanobot/issues/2463) | **架构缺陷**：prompt 前缀不一致导致 OpenAI prompt cache 失效，成本与延迟双高 | 🔴 无 fix PR，标记 stale |
| 🟡 **High** | [#1833](https://github.com/HKUDS/nanobot/issues/1833) | **无原因 SIGTERM 退出**：半小时内两次异常终止，无诊断信息 | ✅ CLOSED（需确认修复版本） |
| 🟡 **High** | [#1157](https://github.com/HKUDS/nanobot/issues/1157) | **OpenRouter + StepFun 400 错误**：模型请求格式不兼容 | ✅ CLOSED |
| 🟡 **High** | [#2200](https://github.com/HKUDS/nanobot/issues/2200) | **Anthropic provider 突发失效**：无配置变更下返回 BadRequestError | ✅ CLOSED |
| 🟢 **Medium** | [#3369](https://github.com/HKUDS/nanobot/pull/3369) | **数据丢失风险**：graceful shutdown 时 session 未 fsync，write-back 缓存场景下丢失 | 🟡 PR OPEN |
| 🟢 **Medium** | [#1236](https://github.com/HKUDS/nanobot/issues/1236) | **对话历史丢失**：assistant 回复未追加至消息数组，导致"失忆" | ✅ CLOSED |

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 实现信号 | 纳入可能性 |
|:---|:---|:---|:---:|
| **音频转录语言指定** | [#3371](https://github.com/HKUDS/nanobot/pull/3371) | PR 已提交，配置 `channels.transcriptionLanguage` | ⭐⭐⭐ 高 |
| **Web 聊天渠道（SSE 流式）** | [#2871](https://github.com/HKUDS/nanobot/pull/2871) | PR 开放中，零核心文件变更，设计干净 | ⭐⭐⭐ 高 |
| **WebSocket 文件附件** | [#3361](https://github.com/HKUDS/nanobot/pull/3361) | PR 已提交，10MB/25MB 限制设计 | ⭐⭐⭐ 高 |
| **AgentHiFive 集成** | [#3144](https://github.com/HKUDS/nanobot/pull/3144) | PR 开放中，MCP 后端、审批追踪、Telegram/Slack vault | ⭐⭐⭐ 高 |
| **子 agent 状态/取消工具** | [#3303](https://github.com/HKUDS/nanobot/pull/3303) | PR 已提交，`spawn_status`/`spawn_cancel` + 循环检测 | ⭐⭐⭐ 高 |
| **心跳模型独立配置** | [#3368](https://github.com/HKUDS/nanobot/pull/3368) | PR 已提交，`gateway.heartbeat.model` 降本 | ⭐⭐⭐ 高 |
| **LLM 调用延迟观测** | [#3367](https://github.com/HKUDS/nanobot/pull/3367) | PR 已提交，`latency_ms` 暴露至 AgentHookContext | ⭐⭐⭐ 高 |
| **Langfuse 可观测性** | [#2189](https://github.com/HKUDS/nanobot/issues/2189) | Issue 已关闭，无 PR 关联 | ⭐⭐ 中 |
| **Telegram 模型切换命令** | [#1113](https://github.com/HKUDS/nanobot/issues/1113), [#1292](https://github.com/HKUDS/nanobot/issues/1292) | 6 👍 支持，无 PR | ⭐⭐ 中 |
| **DingTalk 文件上传** | [#3344](https://github.com/HKUDS/nanobot/issues/3344) | 今日新 Issue，PR 未现 | ⭐⭐ 中 |
| **PostHog 分析钩子** | [#3365](https://github.com/HKUDS/nanobot/pull/3365) | PR 今日关闭（非合并），可能需调整 | ⭐ 待观察 |

**路线图信号：** 项目正从"单一聊天机器人"向"企业级 agent 平台"演进——子 agent 编排、多渠道统一、可观测性、成本优化四大方向并行推进。

---

## 7. 用户反馈摘要

### 😫 核心痛点

| 痛点 | 典型场景 | 来源 |
|:---|:---|:---|
| **上下文管理黑盒** | 飞书固定 ID 导致 session 文件膨胀，必须手动删文件重启 | [#2062](https://github.com/HKUDS/nanobot/issues/2062) |
| **状态不可见** | 不知道当前有多少 task 在跑、retry 何时终止 | [#3107](https://github.com/HKUDS/nanobot/issues/3107) |
| **模型切换困难** | 移动端无法 SSH，Telegram 不能换模型，遇 rate limit 只能干等 | [#1292](https://github.com/HKUDS/nanobot/issues/1292) |
| **错误信息不透明** | SIGTERM 无原因、400 错误无上下文、fallback 失败静默 | [#1833](https://github.com/HKUDS/nanobot/issues/1833), [#942](https://github.com/HKUDS/nanobot/issues/942) |
| **HISTORY.md 噪音** | 自动生成的历史文件膨胀且包含大量无意义记录 | [#1449](https://github.com/HKUDS/nanobot/issues/1449) |

### 😊 满意点

- **多平台覆盖**：Windows 支持降低部署门槛
- **文档处理扩展**：Office 文件读取能力实用
- **社区响应快**：Issue 关闭率高，维护者活跃

### 🔮 期望方向

> "能不能做一个清空 session 的功能？聊完一个功能后，想开启一个新的会话。" — [#2062](https://github.com/HKUDS/nanobot/issues/2062)

> "启动传参支持 `-model`，便于 claw team 共同使用" — [#3107](https://github.com/HKUDS/nanobot/issues/3107)

> "LLM provider 可以 fallback，为按 prompt 计费但不太稳定的供应商提供缓冲" — [#3107](https://github.com/HKUDS/nanobot/issues/3107)

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 最后更新 | 风险说明 |
|:---|:---|:---|:---|
| [#2463](https://github.com/HKUDS/nanobot/issues/2463) **prompt 前缀一致性** | 2026-03-25 | 2026-04-21 | 🔴 **架构债务核心**：影响 OpenAI prompt cache 效率，直接关联成本。标记 stale 但无 fix PR，可能被低估 |
| [#3344](https://github.com/HKUDS/nanobot/issues/3344) **DingTalk 文件上传** | 2026-04-21 | 2026-04-21 | 🟡 新 Issue，企业微信生态关键场景，需评估是否纳入近期迭代 |
| [#3144](https://github.com/HKUDS/nanobot/pull/3144) **AgentHiFive 集成** | 2026-04-14 | 2026-04-21 | 🟡 大型 PR（MCP 后端、vault、多渠道），审查周期可能较长，建议拆分或加速 review |
| [#2871](https://github.com/HKUDS/nanobot/pull/2871) **Web 聊天渠道** | 2026-04-06 | 2026-04-21 | 🟡 开放 16 天，设计成熟但缺乏合并信号，可能阻塞 WebUI 生态发展 |

**维护者行动建议：**
1. **优先处理 #2463**：召开架构评审，明确 prompt 存储格式改造方案
2. **加速 #3144 审查**：或拆分为 MCP 核心、渠道适配、设置流程三个独立 PR
3. **确认 #2871 合并窗口**：Web 渠道是扩展用户基数的关键基础设施

---

*本日报基于 GitHub 公开数据生成，时间范围：2026-04-21 00:00 - 2026-04-21 23:59 UTC*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-04-22

## 1. 今日速览

Hermes Agent 今日保持**高活跃度**，24小时内产生 **50 条 Issues 更新**（39 活跃/新开，11 关闭）与 **50 条 PR 更新**（34 待合并，16 已合并/关闭），无新版本发布。项目核心聚焦于**终端交互稳定性修复**（TUI/CLI 冻结问题）、**多平台网关可靠性**（Telegram/Discord/Feishu）以及**并发执行死锁**等关键 Bug。值得注意的是，TUI 组件在单日内有 4 个相关 PR 被合并，显示该领域正经历集中治理。整体健康度良好，但 P1 级 Bug 仍需关注。

---

## 2. 版本发布

**无新版本发布**

- 最新 Docker 镜像存在已知滞后问题：Gemini bearer auth 修复（[ca32a2a](https://github.com/NousResearch/hermes-agent/commit/ca32a2a60bd8655c001b96394e68309ba53b4550)）已于 4 月 18 日合并，但 `latest` 镜像构建时间早 3 小时，未包含该修复 → 详见 Issue [#12386](https://github.com/NousResearch/hermes-agent/issues/12386)

---

## 3. 项目进展

### 已合并/关闭的关键 PR（16 条中精选）

| PR | 作者 | 核心贡献 | 链接 |
|:---|:---|:---|:---|
| #13528 | teknium1 | **Qwen 提示缓存性能修复**：为 OpenCode/Alibaba 平台的 Qwen3.6-plus 启用 Anthropic 风格 `cache_control` 标记，解决零缓存命中导致的订阅费用激增问题 | [PR #13528](https://github.com/NousResearch/hermes-agent/pull/13528) |
| #13530 | teknium1 | **DNS 重绑定安全加固**：为 Web 仪表盘和 WhatsApp 桥接验证 Host 头与绑定接口匹配，阻断同源绕过攻击 | [PR #13530](https://github.com/NousResearch/hermes-agent/pull/13530) |
| #13728 | OutThisLife | **TUI `/history` 命令修复**：拦截为原生 TUI 转录本渲染，替代原先空会话的子进程方案，并增加滚动支持 | [PR #13728](https://github.com/NousResearch/hermes-agent/pull/13728) |
| #13724 | OutThisLife | **TUI `/resume` 跨平台会话支持**：移除 `source="tui"/"cli"` 过滤，允许在 TUI 中恢复 Telegram/Discord 等网关会话 | [PR #13724](https://github.com/NousResearch/hermes-agent/pull/13724) |
| #13726 | OutThisLife | **TUI 多行输入历史导航修复**：Shift-Enter 多行草稿状态下，上箭头移动光标而非切换历史记录 | [PR #13726](https://github.com/NousResearch/hermes-agent/pull/13726) |
| #8809 | ahuman-exfer | **Exfer 区块链技能**：新增可选的区块链技能，支持钱包生成、HTLC 原子交换、多签等，用于自主机器的点对点结算 | [PR #8809](https://github.com/NousResearch/hermes-agent/pull/8809) |

**整体推进评估**：今日合并集中在**终端体验精细化**（4 个 TUI PR）、**成本控制**（Qwen 缓存）、**安全基线**（DNS 重绑定）三个维度，显示项目从功能扩张转向质量打磨阶段。

---

## 4. 社区热点

### 讨论最活跃的 Issues/PRs

| 排名 | Issue/PR | 评论 | 核心诉求 | 链接 |
|:---|:---|:---|:---|:---|
| 🔥 #1 | **Issue #13618** — TUI 审批覆盖层冻结终端 | 5 条 | **终端可用性危机**：`useInput` 处理程序竞争导致审批提示无法接收按键，终端完全锁死需强制关闭 | [Issue #13618](https://github.com/NousResearch/hermes-agent/issues/13618) |
| 🔥 #2 | **Issue #13617** — 终端审批提示冻结输入区 | 5 条 | **CLI 交互阻断**：危险命令触发 `[o]nce/[s]ession/[a]lways/[d]eny` 提示后，用户无法键入响应 | [Issue #13617](https://github.com/NousResearch/hermes-agent/issues/13617) |
| #3 | **Issue #7952** — mautrix-python 切换后 Matrix 网关仍损坏 | 3 条 | **重构回归**：密钥相关的新错误，Matrix 集成在架构迁移后持续不可用 | [Issue #7952](https://github.com/NousResearch/hermes-agent/issues/7952) |
| #4 | **Issue #8552** — Slack Block Kit 替代 legacy mrkdwn | 3 条 | **富文本渲染**：用户需要表格、标准 Markdown 语法支持，legacy 格式限制严重 | [Issue #8552](https://github.com/NousResearch/hermes-agent/issues/8552) |

**诉求分析**：审批冻结问题（#13617/#13618）形成**阻塞性体验痛点**，已有对应修复 PR #13734（并发工具工作线程的审批回调传播），但社区对终端可靠性的信任已受损，需快速验证并发布。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 优先级 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| **P1** | [#13618](https://github.com/NousResearch/hermes-agent/issues/13618) | TUI 审批覆盖层冻结终端（useInput 竞争） | ✅ **已关闭** | #13734 相关 |
| **P1** | [#13617](https://github.com/NousResearch/hermes-agent/issues/13617) | CLI 终端审批提示冻结输入区 | ✅ **已关闭** | [#13734](https://github.com/NousResearch/hermes-agent/pull/13734) |
| **P1** | [#13574](https://github.com/NousResearch/hermes-agent/issues/13574) | 上下文压缩截断 `tool_call.arguments` 致 JSON 无效，MiniMax 返回 400 | 🟡 **开放** | 暂无 |
| **P1** | [#13655](https://github.com/NousResearch/hermes-agent/issues/13655) | 崩溃后 `gateway.pid` 残留导致网关重启循环（需手动干预） | 🟡 **开放** | 暂无 |
| **P1** | [#12386](https://github.com/NousResearch/hermes-agent/issues/12386) | Docker `latest` 镜像未包含 Gemini auth 修复 | 🟡 **开放** | 需重新构建镜像 |
| P2 | [#13657](https://github.com/NousResearch/hermes-agent/issues/13657) | 终端命令执行顺序不可控（用户困惑于并行执行） | 🟡 **开放** | 暂无 |
| P2 | [#13545](https://github.com/NousResearch/hermes-agent/issues/13545) | `hermes doctor` 误报浏览器不可用（仅 `browser_cdp` 缺失时） | 🟡 **开放** | 暂无 |
| P2 | [#13581](https://github.com/NousResearch/hermes-agent/issues/13581) | `agent.transports` 子包未包含在构建分发中（setuptools glob 缺失） | 🟡 **开放** | 暂无 |
| P2 | [#13607](https://github.com/NousResearch/hermes-agent/issues/13607) | Telegram 论坛超级群组 General 主题消息无法到达 Hermes | 🟡 **开放** | 暂无 |
| P2 | [#13710](https://github.com/NousResearch/hermes-agent/issues/13710) | 中断信号处理导致 `OSError: [Errno 5] Input/output error` | 🟡 **开放** | 暂无 |

**关键修复进展**：PR [#13734](https://github.com/NousResearch/hermes-agent/pull/13734) 针对并发工具执行的审批死锁提出根本修复，将审批回调传播到工作线程，是解决 #13617 回归的关键。

---

## 6. 功能请求与路线图信号

| Issue | 功能方向 | 纳入可能性评估 | 链接 |
|:---|:---|:---|:---|
| [#380](https://github.com/NousResearch/hermes-agent/issues/380) | **Batch Migration Skill**：Git worktree 隔离的并行代码迁移（受 Claude Code `/batch` 启发） | ⭐⭐⭐ 高 — teknium1 参与，符合规模化工程方向 | [Issue #380](https://github.com/NousResearch/hermes-agent/issues/380) |
| [#13534](https://github.com/NousResearch/hermes-agent/issues/13534) | **Skill 管理系统**：使用追踪、冲突检测、预创建验证（生产环境 146+ skills 的经验） | ⭐⭐⭐ 高 — 直接解决规模化痛点，有详细设计 | [Issue #13534](https://github.com/NousResearch/hermes-agent/issues/13534) |
| [#13566](https://github.com/NousResearch/hermes-agent/issues/13566) | **Cron 投递重试机制**：瞬态网络故障的自动重试 | ⭐⭐⭐ 高 — 可靠性基线需求 | [Issue #13566](https://github.com/NousResearch/hermes-agent/issues/13566) |
| [#13711](https://github.com/NousResearch/hermes-agent/issues/13711) | **LangFlow 低代码**：替换硬编码流程的 UI 可视化 | ⭐⭐ 中 — 架构变动大，需评估维护成本 | [Issue #13711](https://github.com/NousResearch/hermes-agent/issues/13711) |
| [#13532](https://github.com/NousResearch/hermes-agent/issues/13532) | **Self-Verification Loop**：生成→验证→精炼的 SOUL.md 扩展 | ⭐⭐ 中 — 俄语提交，需社区评审 | [Issue #13532](https://github.com/NousResearch/hermes-agent/issues/13532) |
| [#4595](https://github.com/NousResearch/hermes-agent/issues/4595) | **Cron 结果可观测**：主代理会话能感知 Cron 执行状态 | ⭐⭐⭐ 高 — 已关闭，可能已有部分实现 | [Issue #4595](https://github.com/NousResearch/hermes-agent/issues/4595) |

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 Issue | 核心不满 |
|:---|:---|:---|
| **"我要求测试 GitHub 连接，结果命令乱序执行"** | [#13657](https://github.com/NousResearch/hermes-agent/issues/13657) | 终端并行执行缺乏可视化顺序控制，用户无法预测行为 |
| **"Docker 在 UnRAID 上权限失败"** | [#13731](https://github.com/NousResearch/hermes-agent/issues/13731) | `USER hermes` 绕过 entrypoint 权限修复，UID 不匹配 |
| **"Telegram 私聊正常，群组完全静默"** | [#13607](https://github.com/NousResearch/hermes-agent/issues/13607) | 论坛超级群组的 General 主题消息路由失败，无错误日志 |
| **"OpenAI Codex OAuth CLI 能用，Telegram 网关报无凭证"** | [#12058](https://github.com/NousResearch/hermes-agent/issues/12058) | 网关间认证状态隔离，配置同步机制不透明 |

### 正向信号

- Exfer 区块链技能的贡献显示 Hermes 正被**自主机器经济**场景采用
- 用户对 `/batch` 迁移技能的积极反馈（Claude Code 对标）表明**规模化工程自动化**是差异化方向

---

## 8. 待处理积压

### 需维护者关注的高价值/长期 Issue

| Issue | 创建时间 | 积压天数 | 风险 | 链接 |
|:---|:---|:---|:---|:---|
| [#380](https://github.com/NousResearch/hermes-agent/issues/380) Batch Migration Skill | 2026-03-04 | **49 天** | 被 Claude Code 抢先，需加速差异化 | [Issue #380](https://github.com/NousResearch/hermes-agent/issues/380) |
| [#8552](https://github.com/NousResearch/hermes-agent/issues/8552) Slack Block Kit 迁移 | 2026-04-12 | **10 天** | 3 👍，企业用户富文本需求受阻 | [Issue #8552](https://github.com/NousResearch/hermes-agent/issues/8552) |
| [#12058](https://github.com/NousResearch/hermes-agent/issues/12058) Codex OAuth 网关隔离 | 2026-04-18 | **4 天** | 认证架构设计债务 | [Issue #12058](https://github.com/NousResearch/hermes-agent/issues/12058) |
| [#7952](https://github.com/NousResearch/hermes-agent/issues/7952) Matrix 网关持续损坏 | 2026-04-11 | **11 天** | 架构迁移后二次回归，信任损耗 | [Issue #7952](https://github.com/NousResearch/hermes-agent/issues/7952) |

### 今日新增需跟进

- **PR #13734**（审批死锁修复）应尽快评审合并，以验证 #13617/#13618 的关闭状态
- **Docker 镜像重建**：#12386 的 Gemini 修复已合并 4 天，`latest` 标签仍未更新，影响云部署用户

---

*日报生成时间：2026-04-22 | 数据来源：NousResearch/hermes-agent GitHub 仓库*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-04-22

> **项目**: [sipeed/picoclaw](https://github.com/sipeed/picoclaw)  
> **日期**: 2026-04-22  
> **分析周期**: 过去 24 小时（2026-04-21）

---

## 1. 今日速览

PicoClaw 今日保持**高活跃度开发节奏**：18 个 PR 更新（11 个已合并/关闭）、7 个 Issue 更新，并推送了 v0.2.6-nightly 构建。核心工程聚焦于**认证安全重构**（Dashboard 密码化迁移）、**渠道生态扩展**（微信、飞书多实例支持）以及**Agent 架构升级