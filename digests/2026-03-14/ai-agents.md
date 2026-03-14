# OpenClaw 生态日报 2026-03-14

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-03-14 00:19 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyclaw)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 | 2026-03-14

## 1. 今日速览

OpenClaw 今日呈现**高活跃度与高风险并存**的态势。过去24小时产生 **500 条 Issues 更新**（436 活跃/新开，64 关闭）和 **500 条 PR 更新**（362 待合并，138 已合并/关闭），社区参与度极高。v2026.3.12 版本发布带来全新 Control UI Dashboard v2，但同日爆发大量**回归性 Bug 报告**，涉及内存泄漏、WhatsApp/Telegram 通道故障、CLI 连接超时等核心功能，稳定性成为今日首要关注点。维护团队响应迅速，已有关键修复 PR 进入审查阶段。

---

## 2. 版本发布

### [v2026.3.12](https://github.com/openclaw/openclaw/releases/tag/v2026.3.12) — 2026-03-13

| 属性 | 内容 |
|:---|:---|
| **发布者** | @BunsDev |
| **核心变更** | Control UI/Dashboard-v2 全面重构 |
| **破坏性变更** | 无明确标注，但实际出现多项回归 |

**主要更新内容：**

- **全新 Dashboard v2**：模块化架构，包含 Overview、Chat、Config、Agent、Session 五大视图
- **命令面板（Command Palette）**：快速导航与操作入口
- **移动端适配**：底部标签栏优化
- **增强聊天工具**：斜杠命令、搜索、导出、置顶消息
- **OpenAI/GPT-5.4 支持**

**⚠️ 迁移注意事项：**
- 多名用户报告升级后出现 **"device identity required"** 错误（[#29801](https://github.com/openclaw/openclaw/issues/29801), [#44967](https://github.com/openclaw/openclaw/issues/44967)）
- **内存泄漏严重**：Raspberry Pi 4 及 4GB 服务器出现 OOM（[#45440](https://github.com/openclaw/openclaw/issues/45440), [#45064](https://github.com/openclaw/openclaw/issues/45064), [#41778](https://github.com/openclaw/openclaw/issues/41778)）
- **WhatsApp 通道故障**：入站消息丢失、发送失败（[#45474](https://github.com/openclaw/openclaw/issues/45474), [#45171](https://github.com/openclaw/openclaw/issues/45171)）

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 说明 | 影响 |
|:---|:---|:---|:---|
| [#45533](https://github.com/openclaw/openclaw/pull/45533) | @BunsDev | 修复聊天上下文警告图标尺寸异常膨胀问题 | 解决 UI 遮挡问题 |
| [#45518](https://github.com/openclaw/openclaw/pull/45518) | @Takhoffman | 保留测试包装器行为，修复 `pnpm test --` 参数透传 | 开发体验优化 |
| [#45361](https://github.com/openclaw/openclaw/pull/45361) | @frankekn | CI 测试夹具类型注解 | 构建稳定性 |
| [#13694](https://github.com/openclaw/openclaw/pull/13694) | @JordanCoin | Cron 任务结构化输出支持 `responseSchema` | 自动化能力增强 |

### 关键待合并 PR（推进中）

| PR | 作者 | 功能/修复 | 状态 |
|:---|:---|:---|:---|
| [#45512](https://github.com/openclaw/openclaw/pull/45512) | @sallyom | **修复 Control UI 认证绕过和设备连接失败分类** — 针对 #29801, #45398, #45401, #41618 | 🔥 高优先级审查中 |
| [#45541](https://github.com/openclaw/openclaw/pull/45541) | @BunsDev | 修复 Dashboard 聊天历史重载风暴 | 性能关键修复 |
| [#45531](https://github.com/openclaw/openclaw/pull/45531) | @scoootscooob | Signal 通道迁移至扩展架构（~9K LOC） | 架构现代化 |
| [#45539](https://github.com/openclaw/openclaw/pull/45539) | @scoootscooob | iMessage 通道迁移至扩展架构（5K LOC） | 架构现代化 |
| [#45132](https://github.com/openclaw/openclaw/pull/45132) | @markshields-tl | Slack 多网关部署 Mux 接收器 | 企业级扩展 |
| [#41496](https://github.com/openclaw/openclaw/pull/41496) | @kesor | 统一 AI 提供商能力插件钩子（TTS/ASR/Embedding/图像/视频） | 生态扩展 |

**整体进展评估**：架构现代化（通道扩展化）稳步推进，但 v2026.3.12 的稳定性问题需要紧急补丁。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论 | 反应 | 核心诉求 |
|:---|:---:|:---:|:---|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) 国际化 (i18n) 与本地化支持 | 101 | 👍3 | **长期呼声最高**：社区多次提交 PR，但维护团队明确表示"当前无带宽支持多语言"，需建立可持续的社区驱动翻译流程 |
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Clawdbot 桌面应用 | 38 | 👍60 | **高票功能请求**：macOS/iOS/Android 已有应用，Linux/Windows 用户强烈呼吁功能对等的原生应用 |
| [#45471](https://github.com/openclaw/openclaw/issues/45471) UI 聊天无法打开（回归） | 33 | 0 | v2026.3.12 升级后 Chat 功能失效，影响基础使用 |
| [#27009](https://github.com/openclaw/openclaw/issues/27009) OpenCode Go 订阅支持 | 23 | 👍25 | 用户希望集成 OpenCode Go ($10/月) 的开放权重模型（Kimi K2.5, GLM-5, Minimax M2.5）|
| [#45440](https://github.com/openclaw/openclaw/issues/45440) Raspberry Pi 4 内存泄漏与 OOM | 13 | 0 | 边缘设备稳定性，升级后 2GB RAM 环境迅速耗尽 |

### 热点分析

- **i18n 需求与资源矛盾**：101 条评论显示社区热情高涨，但维护团队资源受限，可能需要建立 RFC 流程或寻找社区维护者
- **桌面应用缺口**：60 👍 的 #75 反映跨平台战略不平衡，Linux/Windows 开发者体验受损
- **v2026.3.12 质量门控**：大量回归 Bug 集中在发布当日，提示发布流程可能需要加强 Canary/Beta 阶段

---

## 5. Bug 与稳定性

### 🔴 严重（崩溃/核心功能失效）

| Issue | 描述 | 环境 | Fix PR |
|:---|:---|:---|:---:|
| [#45064](https://github.com/openclaw/openclaw/issues/45064) | **内存泄漏 — 基础 CLI 命令 OOM**（gateway status, doctor） | 全平台 | 待定位 |
| [#45440](https://github.com/openclaw/openclaw/issues/45440) | **Raspberry Pi 4 内存暴涨 + OOM**，UI 断连无法恢复 | ARM/嵌入式 | 待定位 |
| [#41778](https://github.com/openclaw/openclaw/issues/41778) | `openclaw-message` 4GB 服务器 OOM（v2026.3.7+）| 低配服务器 | 待定位 |
| [#45474](https://github.com/openclaw/openclaw/issues/45474) | **WhatsApp 入站消息丢失**（单 tick，440/401 重连循环）| v2026.3.12 | 待定位 |
| [#45171](https://github.com/openclaw/openclaw/issues/45171) | **WhatsApp 出站发送路径断裂**（auto-reply 正常，工具/CLI 失败）| v2026.3.12 | 待定位 |
| [#45471](https://github.com/openclaw/openclaw/issues/45471) | **UI Chat 完全无法打开**（回归）| Pop!_OS | 待定位 |

### 🟡 高（功能异常/体验严重受损）

| Issue | 描述 | Fix PR |
|:---|:---|:---:|
| [#45504](https://github.com/openclaw/openclaw/issues/45504) | CLI `devices list/approve` 对本地 loopback 网关失效 | 待定位 |
| [#45419](https://github.com/openclaw/openclaw/issues/45419) | CLI WebSocket 握手超时（3000ms），Web UI 正常 | 待定位 |
| [#44714](https://github.com/openclaw/openclaw/issues/44714) | `openclaw logs --follow` 握手超时 | 待定位 |
| [#44835](https://github.com/openclaw/openclaw/issues/44835) | 配置循环验证错误 `models.0.id undefined` | 待定位 |
| [#44755](https://github.com/openclaw/openclaw/issues/44755) | `/compact` 命令导致主聊天白屏/不可恢复 | 待定位 |
| [#45089](https://github.com/openclaw/openclaw/issues/45089) | 聊天框 GUI 视图异常（Chrome） | 待定位 |
| [#44906](https://github.com/openclaw/openclaw/issues/44906) | 上下文限制警告图标异常放大遮挡界面 | ✅ [#45533](https://github.com/openclaw/openclaw/pull/45533) |

### 🟢 中（行为异常/非阻塞）

| Issue | 描述 | Fix PR |
|:---|:---|:---:|
| [#45289](https://github.com/openclaw/openclaw/issues/45289) | Telegram 反应通知未工作 | 待定位 |
| [#45271](https://github.com/openclaw/openclaw/issues/45271) | 模型工具调用前产生"叙述性"文本（v2026.3.7+） | 待定位 |
| [#44269](https://github.com/openclaw/openclaw/issues/44269) | Kimi 模型隔离 Cron 任务无法使用工具 | 待定位 |

**稳定性评估**：v2026.3.12 存在**系统性质量风险**，建议维护团队考虑紧急补丁版本或回滚建议。

---

## 6. 功能请求与路线图信号

### 高潜力功能（已有 PR 或明确需求）

| 功能 | Issue/PR | 状态 | 纳入可能性 |
|:---|:---|:---|:---:|
| **Chrome DevTools MCP 预设** | [#45373](https://github.com/openclaw/openclaw/pull/45373), [#45362](https://github.com/openclaw/openclaw/pull/45362) | PR 开放 | ⭐⭐⭐⭐⭐ 高 |
| **Slack 多网关 Mux 部署** | [#45132](https://github.com/openclaw/openclaw/pull/45132) | PR 开放 | ⭐⭐⭐⭐⭐ 企业需求 |
| **统一 AI 提供商能力插件** | [#41496](https://github.com/openclaw/openclaw/pull/41496) | PR 开放 | ⭐⭐⭐⭐⭐ 架构核心 |
| **TTS 语音持久化切换** | [#45530](https://github.com/openclaw/openclaw/pull/45530) | PR 开放 | ⭐⭐⭐⭐☆ |
| **标题感知记忆分块** | [#45545](https://github.com/openclaw/openclaw/pull/45545) | PR 开放 | ⭐⭐⭐⭐☆ |
| **xAI/Grok 原生工具支持** | [#6872](https://github.com/openclaw/openclaw/issues/6872) | Issue 开放，多次 PR 被拒 | ⭐⭐⭐☆☆ 需重新评估 |
| **出站消息审批门控** | [#25145](https://github.com/openclaw/openclaw/issues/25145) | Issue 开放，10 评论 | ⭐⭐⭐⭐☆ 安全关键 |

### 长期战略信号

- **通道扩展化**：Signal、iMessage 迁移至扩展架构，预示未来可能开放第三方通道生态
- **MCP 生态整合**：Chrome DevTools MCP 支持显示 OpenClaw 正积极拥抱 Model Context Protocol 标准

---

## 7. 用户反馈摘要

### 😊 满意点

- **Dashboard v2 设计**：用户期待新的模块化界面和移动端优化
- **快速迭代**：社区认可开发团队的响应速度
- **多通道支持**：Telegram、Discord、WhatsApp 等集成受到好评

### 😤 痛点集中区

| 痛点 | 典型反馈 | 来源 Issue |
|:---|:---|:---|
| **升级恐惧** | "每次升级都怕破坏现有功能" | #45440, #45064 等多条 |
| **内存管理** | "4GB 服务器无法运行基础命令" | #41778 |
| **WhatsApp 可靠性** | "生产环境不敢用 WhatsApp 通道" | #45474, #45171, #34741 |
| **文档不足** | "Docker 技能安装失败，brew 未安装" | #14593 |
| **配置验证混乱** | "字段已填写但提示 undefined" | #44835 |
| **边缘设备支持** | "Raspberry Pi 曾是主要用例，现在 OOM" | #45440 |

### 使用场景洞察

- **个人自动化**：Raspberry Pi 用户希望低成本运行个人助手
- **多通道客服**：企业用户需要 WhatsApp/Telegram 稳定接入
- **开发工作流**：开发者期望 CLI 工具稳定可靠，用于 CI/CD 集成

---

## 8. 待处理积压

### 长期未响应的重要 Issue（>30 天，高互动）

| Issue | 年龄 | 最后更新 | 状态 | 行动建议 |
|:---|:---:|:---|:---|:---|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) i18n 支持 | 45 天 | 2026-03-13 | 开放，101 评论 | 建立 RFC 或寻找社区维护者 |
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows 桌面应用 | 73 天 | 2026-03-13 | 开放，👍60 | 产品路线图澄清 |
| [#5813](https://github.com/openclaw/openclaw/issues/5813) agentToAgent 启用破坏 sessions_spawn | 42 天 | 2026-03-13 | 开放，11 评论 | 子代理架构审查 |
| [#7116](https://github.com/openclaw/openclaw/issues/7116) Telegram 文件附件接收失败 | 41 天 | 2026-03-13 | 开放，8 评论 | 媒体处理管道审查 |
| [#8619](https://github.com/openclaw/openclaw/issues/8619) Gateway 安装失败 launchctl | 39 天 | 2026-03-13 | 开放，9 评论 | macOS 安装流程优化 |

### 提醒维护者关注

- **#3460 i18n**：社区已多次尝试贡献，需明确接受标准或任命协调者
- **#75 跨平台桌面应用**：高票需求，建议评估 Tauri/Electron 方案或官方立场说明

---

## 附录：数据仪表板

| 指标 | 数值 | 趋势 |
|:---|:---:|:---|
| 24h Issues 更新 | 500 | 📈 极高 |
| 24h PR 更新 | 500 | 📈 极高 |
| 新开/活跃 Issues | 436 | ⚠️ 需关注质量 |
| 已关闭 Issues | 64 | — |
| 待合并 PR | 362 | — |
| 已合并/关闭 PR | 138 | — |
| 新版本 | 1 | v2026.3.12 |

---

*本日报基于 OpenClaw GitHub 公开数据生成，数据截止时间：2026-03-14*

---

## 横向生态对比

# 个人 AI 助手开源生态横向对比分析报告 | 2026-03-14

---

## 1. 生态全景

个人 AI 助手开源生态正经历**从"功能可用"向"生产就绪"的集体跃迁**。OpenClaw 以 500 Issues/500 PR 的绝对体量领跑，但 v2026.3.12 的稳定性危机暴露快速迭代的质量风险；NanoBot、ZeroClaw、PicoClaw 等第二梯队日均 100+ PR 活跃推进架构现代化（插件化、MCP 集成、边缘硬件支持）；ZeptoClaw、TinyClaw 等新兴项目以安全优先、极简架构切入，形成差异化竞争。整体呈现**"头部承压、腰部扩张、尾部创新"**的三层格局，企业级部署能力（多通道稳定性、安全加固、可观测性）成为共同攻坚方向。

---

## 2. 各项目活跃度对比

| 项目 | 24h Issues | 24h PR | 今日 Release | 健康度评估 | 关键信号 |
|:---|:---:|:---:|:---:|:---|:---|
| **OpenClaw** | 500 (436活跃/64关闭) | 500 (362待合/138已处理) | v2026.3.12 | 🟡 **高风险活跃** | 发布即回归：内存泄漏、WhatsApp故障、CLI超时 |
| **NanoBot** | 26 (16活跃/10关闭) | 154 (37待合/117已处理) | 无 | 🟢 **健康迭代** | 通道插件化、Ollama修复、子Agent可观测性 |
| **ZeroClaw** | 87 (11活跃/76关闭) | 87 (处理率100%) | v0.1.9-beta.140/136 | 🟢 **高效交付** | 30语言文档中心、Windows完整支持、MCP按需加载 |
| **PicoClaw** | 35 (28活跃/7关闭) | 109 (60待合/49已处理) | v0.2.2-nightly | 🟡 **架构重构期** | Agent Steering、凭证加密、安全漏洞密集暴露 |
| **NanoClaw** | 18 (14活跃/4关闭) | 37 (21待合/16已处理) | 无 | 🟢 **渠道冲刺** | WhatsApp/Signal/Nostr三箭齐发，内存系统BM25升级 |
| **NullClaw** | 15 (处理率100%) | 35 (处理率100%) | v2026.3.13/3.12 | 🟢 **企业级稳固** | Slack/Teams/飞书/钉钉全通道加固，零积压 |
| **IronClaw** | 25 (18活跃/7关闭) | 50 (42待合/8已处理) | 无 | 🟡 **XL PR堆积** | 42% PR为XL级，边缘硬件支持落地但性能/安全问题待解 |
| **LobsterAI** | 11 (10净增) | 9 (处理率100%) | 无 | 🟡 **本地模型危机** | OpenClaw统一架构转型，Ollama工具调用断裂 |
| **TinyClaw** | 数据有限 | 4已合并/2待合 | v0.0.13 | 🟢 **基础设施完善** | Agent配置UI、分层内存、动态系统提示词 |
| **Moltis** | 11 (处理闭环) | 11 (处理闭环) | 无 | 🟢 **精准修复** | 会话连续性、认证体验、节点架构问题暴露 |
| **CoPaw** | 50 (41活跃/9关闭) | 44 (21待合/23已处理) | 无 | 🟡 **架构争议** | 时区设计争议、飞书稳定性、CPU 100%性能危机 |
| **ZeptoClaw** | 6 (全关闭) | 6 (3已合/3待合) | 无 | 🟢 **安全范式转换** | 默认autonomous→assistant，交互式审批落地 |
| **EasyClaw** | 0 | 0 | 无 | ⚪ **休眠** | 24小时无活动 |

---

## 3. OpenClaw 在生态中的定位

### 规模与影响力
- **绝对领先**：Issues/PR 数量级达 500，为第二名 NanoBot 的 **3.2 倍**，形成事实上的生态基准
- **社区惯性**：i18n (#3460, 101评论)、Linux/Windows桌面应用 (#75, 👍60) 等长期需求持续积压，显示用户基数庞大但资源匹配不足

### 技术路线差异
| 维度 | OpenClaw | 生态对比 |
|:---|:---|:---|
| **架构哲学** | 一体化巨石架构，内置多通道、Dashboard、CLI | ZeroClaw/NanoBot 推进插件化/扩展架构 |
| **发布策略** | 功能密集发布，v2026.3.12 含 Dashboard v2 等大量变更 | NullClaw 双版本快速迭代修复，ZeptoClaw 安全优先渐进 |
| **质量门控** | 明显薄弱：同日发布即爆发内存泄漏、WhatsApp故障等回归 | IronClaw CI 自动检测高危问题，PicoClaw 安全 Issue 密集但响应快 |

### 相对优势与风险
- **优势**：功能完备性（Control UI、多通道、Cron、MCP 预设）、生态惯性、品牌认知度
- **风险**：质量债务累积，"升级恐惧"成为用户痛点；架构现代化滞后于 ZeroClaw/NanoBot 的插件化趋势

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求与进展 |
|:---|:---|:---|
| **MCP 生态整合** | OpenClaw、ZeroClaw、NanoClaw、IronClaw、CoPaw | OpenClaw Chrome DevTools MCP 预设；ZeroClaw MCP 按需加载；IronClaw MCP 注册表数据驱动重构；CoPaw MCP 相关 CPU 100% 性能危机 |
| **通道插件化/扩展架构** | NanoBot、ZeroClaw、PicoClaw、NanoClaw | NanoBot Python entry_points 外部插件发现；ZeroClaw Signal/iMessage 迁移扩展架构；PicoClaw 动态节点发现 WebSocket 运行时插件化 |
| **本地模型（Ollama）深度支持** | NanoBot、ZeroClaw、PicoClaw、LobsterAI、CoPaw | NanoBot 无 API Key 配置修复；LobsterAI 本地模型工具调用断裂成危机；CoPaw Ollama 局域网连接失败 |
| **安全加固与隐私** | PicoClaw、ZeptoClaw、NanoClaw、Moltis | PicoClaw 凭证加密、公网暴露漏洞；ZeptoClaw 默认 assistant 模式、交互式审批；NanoClaw 凭证验证；Moltis vault 密封状态历史泄露 |
| **子 Agent/多 Agent 可观测性** | NanoBot、IronClaw、CoPaw | NanoBot #1955 子 Agent 黑盒问题；IronClaw Subagents 文档缺失；CoPaw 多 Agent 并行需求 |
| **企业级通道稳定性** | NullClaw、OpenClaw、CoPaw、PicoClaw | NullClaw Slack/Teams/飞书/钉钉全加固；OpenClaw WhatsApp 入站/出站双断裂；CoPaw 飞书延迟回复/消息去重 |
| **边缘/嵌入式部署** | OpenClaw、PicoClaw、IronClaw | OpenClaw Raspberry Pi OOM；PicoClaw 嵌入式硬件优化；IronClaw #134 边缘硬件 GPIO 架构落地 |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户画像 | 技术架构特征 |
|:---|:---|:---|:---|
| **OpenClaw** | 全功能平台（UI+CLI+多通道+自动化） | 技术爱好者、中小团队、多场景自动化需求 | Node.js 巨石架构，功能堆叠，质量债务累积 |
| **NanoBot** | 轻量可扩展、子 Agent 编排 | 开发者、多 Agent 系统构建者 | Python 插件化架构，Soul.md/User.md 控制哲学 |
| **ZeroClaw** | 跨平台原生性能、Rust 安全 | 性能敏感用户、Windows 企业部署 | Rust 系统级，esbuild 优化，30 语言国际化 |
| **PicoClaw** | 嵌入式/边缘硬件、安全优先 | IoT 开发者、隐私敏感企业 | Rust 分层架构，Agent Steering 实时干预 |
| **NanoClaw** | Claude 生态深度集成、加密原生 | Claude 重度用户、Web3/隐私社区 | TypeScript，Signal/Nostr/Lightning 差异化 |
| **NullClaw** | 企业级多通道、国产模型适配 | 中国企业、钉钉/飞书/微信生态 | 稳定优先，零积压，快速修复响应 |
| **IronClaw** | NEAR 区块链生态、WASM 沙箱 | Web3 开发者、去中心化场景 | Rust+WASM，边缘硬件突破，XL PR 架构重构 |
| **LobsterAI** | OpenClaw 嵌入式、网易有道生态 | 中国用户、企业知识库场景 | OpenClaw 模式统一，性能优化，本地模型危机 |
| **ZeptoClaw** | 极简安全、人机协同执行 | 安全敏感开发者、生产环境部署 | 默认受控模式，TTY 感知审批，流式优先 |
| **CoPaw** | 多 Agent 并行、技能生态 | AgentScope 用户、复杂工作流 | 时区架构争议，技能去重，MCP 性能问题 |
| **TinyClaw** | Agent 配置体验、分层记忆 | 个人开发者、快速原型构建 | Node.js，AGENTS.md 动态注入，符号链接优化 |
| **Moltis** | 节点执行、隐私安全 | 多节点分布式场景、隐私优先 | 节点系统架构问题暴露，会话连续性修复 |

---

## 6. 社区热度与成熟度

### 快速迭代阶段（日均 100+ PR 或架构级变更）
| 项目 | 特征 | 关键指标 |
|:---|:---|:---|
| **OpenClaw** | 高活跃高风险，质量门控薄弱 | 500 PR，发布即回归 |
| **PicoClaw** | 架构重构深水区，安全债务暴露 | Agent Steering、凭证加密、安全漏洞密集 |
| **IronClaw** | XL PR 堆积，架构重构并行 | 42% PR 为 XL 级，边缘硬件突破 |
| **CoPaw** | 架构争议与性能危机交织 | 时区设计争论，CPU 100%，飞书稳定性 |

### 质量巩固阶段（高处理率，低积压）
| 项目 | 特征 | 关键指标 |
|:---|:---|:---|
| **NullClaw** | 企业级零积压，快速响应 | 100% 处理率，双版本日更 |
| **ZeroClaw** | 高效交付，文档与跨平台领先 | 100% 处理率，30 语言文档 |
| **ZeptoClaw** | 安全范式转换完成，生态扩展启动 | 100% 处理率，ACP 协议待审 |
| **NanoBot** | 插件化架构成熟，子 Agent 可观测性攻坚 | 154 PR，通道解耦完成 |
| **Moltis** | 精准修复，节点架构问题识别 | 1:1 处理闭环，安全隐私问题暴露 |

### 基础设施完善期（功能密集落地）
| 项目 | 特征 | 关键指标 |
|:---|:---|:---|
| **NanoClaw** | 渠道扩张冲刺，内存系统升级 | WhatsApp/Signal/Nostr 三箭齐发 |
| **TinyClaw** | Agent 基础设施质变 | v0.0.13 配置 UI + 分层内存 |
| **LobsterAI** | 架构转型阵痛 | OpenClaw 统一，本地模型断裂 |

### 休眠/观察期
| 项目 | 状态 |
|:---|:---|
| **EasyClaw** | 24 小时零活动 |

---

## 7. 值得关注的趋势信号

### 信号一：安全默认成为准入门槛
> **ZeptoClaw** 完成范式转换：默认 `autonomous` → `assistant`，交互式审批 + TTY 感知；**PicoClaw** 安全漏洞密集暴露后启动凭证加密专项；**Moltis** vault 密封状态历史泄露引发隐私危机。

**参考价值**：AI Agent 从"功能演示"走向"生产部署"，**安全默认策略**（deny-by-default、最小权限、人机协同）将成为差异化竞争力，而非可选项。

### 信号二：MCP 协议成为事实标准，但实现质量分化
> **OpenClaw** Chrome DevTools MCP 预设、**ZeroClaw** MCP 按需加载、**IronClaw** MCP 注册表重构、**CoPaw** MCP 相关 CPU 100% 性能危机。

**参考价值**：MCP 集成已从"功能有无"进入"性能与架构深度"竞争，**工具发现效率**（按需加载 vs 全量注册）、**执行隔离**（WASM/进程/线程）是下一代差异点。

### 信号三：本地模型体验成为用户留存关键
> **LobsterAI** Ollama 工具调用断裂成"本地模型危机"；**NanoBot** 快速修复 Ollama 无 Key 配置；**CoPaw** Ollama 局域网连接失败、上下文失忆反复报告。

**参考价值**：隐私敏感用户推动本地模型需求，但**工具调用链路完整性**（非仅聊天）、**配置诊断透明度**（错误日志、调试指南）是体验鸿沟。

### 信号四：企业级通道稳定性决定商业化天花板
> **NullClaw** Slack/Teams/飞书/钉钉全加固形成护城河；**OpenClaw** WhatsApp 双断裂、**CoPaw** 飞书延迟回复/消息去重、**PicoClaw** 飞书消息丢失。

**参考价值**：IM 通道的**消息可靠性**（去重、顺序、状态同步）、**Webhook 稳定性**（重连、超时、回退）是企业付费决策的核心指标，技术债务在此集中暴露。

### 信号五：子 Agent/多 Agent 可观测性成为新瓶颈
> **NanoBot** #1955 "子 Agent 黑盒"获 9 评论；**IronClaw** Subagents 文档缺失用户困惑；**CoPaw** 多 Agent 并行需求强烈。

**参考价值**：从单 Agent 到多 Agent 编排，**执行可视化**（思考链、工具调用、跨 Agent 通信）、**状态共享机制**（记忆、上下文、工具注册）是架构升级方向。

### 信号六：边缘/嵌入式部署开辟新战场
> **IronClaw** #134 边缘硬件 GPIO 架构落地；**PicoClaw** 嵌入式硬件优化；**OpenClaw** Raspberry Pi OOM 危机。

**参考价值**：AI Agent 从云端向**边缘-云混合**延伸，**资源约束下的性能优化**（启动速度、内存占用）、**特权操作安全隔离**（GPIO、文件系统）是技术制高点。

---

*报告生成时间：2026-03-14*  
*数据来源：各项目 GitHub 公开动态*  
*分析框架：活跃度-质量-差异化三维模型*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-03-14

---

## 1. 今日速览

NanoBot 今日保持**高活跃度开发节奏**，24小时内产生 **154 个 PR 更新**（117 个已合并/关闭，37 个待审）和 **26 个 Issues 更新**（16 个活跃/新开，10 个关闭）。核心进展集中在**通道架构重构**（插件化改造）、**多模型提供商兼容性修复**（Ollama、Azure Entra ID、DashScope）以及**子 Agent 可观测性增强**。社区对子 Agent 执行透明度、动态 Provider 切换等高级功能需求显著上升，反映用户正在将 NanoBot 推向更复杂的生产场景。

---

## 2. 版本发布

**今日无新版本发布**

> 最新版本仍为历史版本，PyPI 同步问题（[#1059](https://github.com/HKUDS/nanobot/issues/1059)）已于今日关闭。

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 项目推进 |
|:---|:---|:---|:---|
| [#1984](https://github.com/HKUDS/nanobot/pull/1984) / [#1982](https://github.com/HKUDS/nanobot/pull/1982) | @chengyongru / @Re-bin | **通道插件架构重构**：通过 Python entry_points 实现外部通道插件发现，将 11 个内置通道配置从 schema.py 解耦至各自模块 | **架构级升级**：实现"零侵入"第三方通道扩展，为生态繁荣奠定技术基础 |
| [#1983](https://github.com/HKUDS/nanobot/pull/1983) | @ducheng121 | **修复 Ollama 本地模型兼容性**：支持无 API Key 配置本地 Ollama 实例 | 打通本地部署最后一公里，回应 [#1947](https://github.com/HKUDS/nanobot/issues/1947) |
| [#1909](https://github.com/HKUDS/nanobot/pull/1909) | @Re-bin | **强制记忆整合工具调用**：将 `tool_choice="auto"` 改为 `"required"`，防止 LLM 跳过 `save_memory` | 根治 [#1931](https://github.com/HKUDS/nanobot/issues/1931) 记忆丢失问题 |
| [#1941](https://github.com/HKUDS/nanobot/pull/1941) | @tsubasakong | **QQ 通道回退**：恢复纯文本回复（`msg_type=0`），修复老版本客户端兼容性 | 快速响应 [#1936](https://github.com/HKUDS/nanobot/issues/1936) 回归问题 |
| [#1981](https://github.com/HKUDS/nanobot/pull/1981) | @chengyongru | **企业微信 SDK 升级**：wecom-aibot-sdk-python ≥0.1.5，修复重复接收循环和心跳超时 | 提升企业级部署稳定性 |
| [#157](https://github.com/HKUDS/nanobot/pull/157) | @de-rk | **NVIDIA 集成支持**：新增 NVIDIA 模型提供商，修复 Telegram 轮询冲突 | 扩展大模型生态覆盖 |
| [#605](https://github.com/HKUDS/nanobot/pull/605) | @dimitree2k | **WhatsApp 桥接安全加固**：强制 BRIDGE_TOKEN 认证（破坏性变更） | 生产环境安全基线提升 |

**整体评估**：今日合并的 PR 覆盖**架构扩展性**（插件系统）、**模型兼容性**（Ollama/NVIDIA）、**通道稳定性**（QQ/企业微信/WhatsApp）、**核心功能可靠性**（记忆系统）四大维度，项目正从"功能可用"向"企业级可扩展"演进。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论 | 热度分析 |
|:---|:---|:---|
| [#1955](https://github.com/HKUDS/nanobot/issues/1955) **子 Agent 执行过程可观测性** | 9 | 🔥 **核心诉求**：用户要求打破子 Agent "黑盒"，实现与主 Agent 同等的实时执行可视化（工具调用思考+执行）。反映 NanoBot 正被用于复杂多 Agent 编排场景，可观测性成为生产化瓶颈 |
| [#1931](https://github.com/HKUDS/nanobot/issues/1931) **记忆整合失败** | 8 | 已关闭。LLM 未调用 `save_memory` 导致记忆丢失，用户日志显示 token 超限触发整合但工具调用被跳过。PR [#1909](https://github.com/HKUDS/nanobot/pull/1909) 已根治 |
| [#1822](https://github.com/HKUDS/nanobot/issues/1822) **NVIDIA 模型支持缺失** | 7 | 用户反馈近期版本不再支持 NVIDIA 模型，PR [#157](https://github.com/HKUDS/nanobot/pull/157) 已合并修复 |
| [#1927](https://github.com/HKUDS/nanobot/issues/1927) **DashScope 不支持 `tool_choice="required"`** | 6 | 阿里云百炼 API 限制导致记忆归档失败，需关注多提供商工具调用策略兼容性 |

### 待审高价值 PR

| PR | 亮点 | 潜在影响 |
|:---|:---|:---|
| [#1987](https://github.com/HKUDS/nanobot/pull/1987) Azure OpenAI Entra ID OAuth | 企业级身份认证支持，含令牌缓存与刷新逻辑 | 打通 Azure AD 企业部署场景 |
| [#1935](https://github.com/HKUDS/nanobot/pull/1935) Spawn 工具 `working_dir` 参数 | 子 Agent 项目级工作目录隔离，自动继承 `AGENTS.md` | 多项目并行开发的关键能力 |
| [#1246](https://github.com/HKUDS/nanobot/pull/1246) 模型自主结束回合 | 新增 `end_turn` 工具调用，解决"做不够"或"过早停止"问题 | 交互质量显著提升（作者称"指数级改善"） |
| [#1945](https://github.com/HKUDS/nanobot/pull/1945) XMPP 通道 | 去中心化即时通讯协议支持，已验证 Snikket 服务器 | 隐私敏感用户的新选择 |

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#1979](https://github.com/HKUDS/nanobot/issues/1979) | 长会话导致上下文窗口溢出（`ContextWindowExceededError`），LLM 调用完全失败 | **待修复**：需实现主动上下文截断或摘要机制 |
| 🔴 **高** | [#1927](https://github.com/HKUDS/nanobot/issues/1927) | DashScope `tool_choice="required"` 不支持导致记忆归档失败 | **待修复**：需提供商级工具调用策略适配 |
| 🟡 **中** | [#1948](https://github.com/HKUDS/nanobot/issues/1948) | `exec` 工具运行 npx/npm 时 `/tmp` 只读，但手动可写 | **待修复**：沙箱环境权限隔离问题 |
| 🟡 **中** | [#1829](https://github.com/HKUDS/nanobot/issues/1829) | 自定义命令创建后重启容器不生效 | **待调查**：Docker 环境配置持久化问题 |
| 🟡 **中** | [#1988](https://github.com/HKUDS/nanobot/issues/1988) | 企业微信通道配置缺失，手动添加后仍显示 "No Channels Enabled" | **待修复**：可能与 SDK 升级相关 |
| 🟡 **中** | [#1946](https://github.com/HKUDS/nanobot/issues/1946) / [#1968](https://github.com/HKUDS/nanobot/issues/1968) | Matrix 通道测试失败 | **待修复**：CI 测试回归 |
| 🟢 **低** | [#1956](https://github.com/HKUDS/nanobot/issues/1956) | 命令行 `nanobot is thinking...` 未清除 | 视觉瑕疵 |
| ✅ **已修复** | [#1931](https://github.com/HKUDS/nanobot/issues/1931) | 记忆整合跳过 `save_memory` | PR [#1909](https://github.com/HKUDS/nanobot/pull/1909) |
| ✅ **已修复** | [#1947](https://github.com/HKUDS/nanobot/issues/1947) | Ollama 连接要求 API Key | PR [#1983](https://github.com/HKUDS/nanobot/pull/1983) |
| ✅ **已修复** | [#1936](https://github.com/HKUDS/nanobot/issues/1936) | QQ Markdown 破坏老客户端 | PR [#1941](https://github.com/HKUDS/nanobot/pull/1941) |

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 可行性评估 | 纳入信号 |
|:---|:---|:---|:---|
| **子 Agent 执行可观测性** | [#1955](https://github.com/HKUDS/nanobot/issues/1955) | 高。需扩展事件流架构，与主 Agent 日志系统统一 | ⭐ 强烈信号：多用户生产痛点 |
| **对话中动态切换 Provider** | [#1954](https://github.com/HKUDS/nanobot/issues/1954) | 中。涉及运行时配置热重载和会话状态迁移 | 架构改造后更易实现 |
| **技能启用/禁用开关** | PR [#1934](https://github.com/HKUDS/nanobot/pull/1934) | **已实现待审**。`enabled: false` frontmatter 支持 | 🚀 下一版本高概率纳入 |
| **Mistral 提供商 + 通用转录** | PR [#1680](https://github.com/HKUDS/nanobot/pull/1680) | 高。已验证 Telegram 场景 | 多模态能力扩展 |
| **A2A 协议通道** | PR [#1368](https://github.com/HKUDS/nanobot/pull/1368) | 高。基于官方 a2a-sdk，Google 推动的 Agent 互操作标准 | 生态战略级功能 |
| **CI/CD 体系建设** | [#1915](https://github.com/HKUDS/nanobot/issues/1915) | 高。社区志愿者已承诺开发 | 项目成熟度标志 |
| **Docker 镜像自动构建** | PR [#126](https://github.com/HKUDS/nanobot/pull/126) | 高。已有成功推送验证 | 部署体验优化 |

---

## 7. 用户反馈摘要

### 真实痛点
- **可观测性缺口**："主 agent 能看到循环过程，子 agent 却是黑盒" —— 复杂工作流调试困难 ([#1955](https://github.com/HKUDS/nanobot/issues/1955))
- **长会话稳定性**："聊天太长导致上下文溢出，LLM 完全失败" —— 缺乏自动上下文管理 ([#1979](https://github.com/HKUDS/nanobot/issues/1979))
- **企业部署摩擦**：Azure Entra ID、Ollama 无 Key 配置等场景需要更灵活的认证设计
- **通道配置体验**：企业微信等通道配置缺失/不生效，文档与实现存在 gap

### 满意之处
- **轻量架构**："NanoBot 给 Soul.md 和 User.md 控制，没有新逻辑" —— 被认可的设计哲学 ([#1977](https://github.com/HKUDS/nanobot/issues/1977))
- **快速修复**：QQ 兼容性、Ollama 支持等问题 24 小时内响应
- **扩展潜力**：插件化架构获得社区积极反馈

### 使用场景演进
- 从个人助手 → **多 Agent 协作系统**
- 从简单对话 → **长时运行、多项目并行**
- 从实验部署 → **企业级生产环境**

---

## 8. 待处理积压

| 类型 | 项目 | 创建时间 | 风险 | 建议动作 |
|:---|:---|:---|:---|:---|
| Issue | [#1822](https://github.com/HKUDS/nanobot/issues/1822) NVIDIA 模型支持 | 2026-03-10 | PR [#157](https://github.com/HKUDS/nanobot/pull/157) 已合并但未关闭 | 维护者验证后关闭 |
| Issue | [#1487](https://github.com/HKUDS/nanobot/issues/1487) Qwen3.5 PDF 生成 JSON 格式错误 | 2026-03-03 | 模型特定兼容性问题，无近期更新 | 需 DashScope 提供商专项跟进 |
| PR | [#1246](https://github.com/HKUDS/nanobot/pull/1246) 模型自主结束回合 | 2026-02-26 | 18天待审，作者称"指数级改善" | 优先评审，交互质量关键优化 |
| PR | [#1680](https://github.com/HKUDS/nanobot/pull/1680) Mistral + 通用转录 | 2026-03-07 | 7天待审，多场景已验证 | 多模态能力扩展，建议纳入 |
| PR | [#1368](https://github.com/HKUDS/nanobot/pull/1368) A2A 协议通道 | 2026-03-01 | 13天待审，Google 推动标准 | 生态战略价值高，需架构评审 |

---

**日报生成时间**：2026-03-14  
**数据来源**：HKUDS/nanobot GitHub 仓库  
**分析师**：AI 智能体与开源项目分析师

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-03-14

## 1. 今日速览

ZeroClaw 今日呈现**高强度迭代态势**：24小时内处理 **87 条** Issues/PR（关闭/合并 76 条，活跃 11 条），发布 **2 个 beta 版本**。核心团队聚焦 **master 分支稳定性修复**（32位编译、MCP功能回归、Matrix通道修复），同时推进 **Windows 平台完整支持**（shell工具、CI构建、测试修复）。文档国际化取得重大进展——**30 种语言文档中心正式上线**。项目处于 **v0.1.9 版本冲刺期**，功能完备性与跨平台兼容性同步提升。

---

## 2. 版本发布

### v0.1.9-beta.140 | [Release](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.1.9-beta.140)
| 属性 | 内容 |
|:---|:---|
| **核心更新** | 文档国际化枢纽完成，覆盖 30 种语言 |
| **关键 PR** | #3450 全语言文档中心翻译、#3429 简体中文完整文档迁移 |
| **迁移注意** | 中文文档从根目录迁移至 `i18n/zh-CN/`，原有 `.zh-CN.md` 链接需更新 |

### v0.1.9-beta.136 | [Release](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.1.9-beta.136)
| 属性 | 内容 |
|:---|:---|
| **核心更新** | 浏览器兼容性修复 + Ollama 模型推理支持增强 |
| **关键 PR** | #3407 `crypto.randomUUID` 旧浏览器回退方案、#3411 Ollama 不支持模型的 `reasoning_enabled` 处理 |
| **破坏性变更** | 无 |

---

## 3. 项目进展

### 已合并核心 PR（按影响面排序）

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#3442](https://github.com/zeroclaw-labs/zeroclaw/pull/3442) | @theonlyhennygod | **Windows Shell 工具完整支持** — `cmd.exe /C` 替代 `sh -c`，平台感知命令白名单 | ⭐⭐⭐ 解锁 Windows 企业用户场景 |
| [#3446](https://github.com/zeroclaw-labs/zeroclaw/pull/3446) | @theonlyhennygod | **MCP 工具按需加载** — `tool_search` 延迟激活，减少上下文窗口浪费 | ⭐⭐⭐ 解决大规模 MCP 注册表性能瓶颈 |
| [#3448](https://github.com/zeroclaw-labs/zeroclaw/pull/3448) | @theonlyhennygod | **动态节点发现与能力广播** — WebSocket 运行时插件化工具面 | ⭐⭐⭐ 架构级扩展：IoT/微服务生态入口 |
| [#3447](https://github.com/zeroclaw-labs/zeroclaw/pull/3447) | @theonlyhennygod | **自定义 API 路径后缀** — 非标准 `/v1/chat/completions` 端点支持 | ⭐⭐ 自托管 LLM 兼容性提升 |
| [#3443](https://github.com/zeroclaw-labs/zeroclaw/pull/3443) | @theonlyhennygod | **消息草稿持久化** — 跨视图切换不丢失输入状态 | ⭐⭐ 用户体验关键优化 |
| [#3445](https://github.com/zeroclaw-labs/zeroclaw/pull/3445) | @theonlyhennygod | **仪表盘视觉重构** — 电光蓝主题、玻璃拟态、动效系统 | ⭐⭐ 品牌识别度提升 |
| [#3421](https://github.com/zeroclaw-labs/zeroclaw/pull/3421) | @Asuta | **交互式会话状态持久化** — `--session-state-file` 断点续传 | ⭐⭐ 长任务场景可靠性 |
| [#3405](https://github.com/zeroclaw-labs/zeroclaw/pull/3405) | @bitscrafts | **Cron 调度器容错** — 跳过不可解析任务行而非全局中止 | ⭐⭐ 生产环境稳定性 |
| [#3414](https://github.com/zeroclaw-labs/zeroclaw/pull/3414) | @faustoheikkinen | **Ollama 环境变量覆盖** — `ZEROCLAW_PROVIDER_URL` 动态配置 | ⭐ 容器化部署友好性 |
| [#3368](https://github.com/zeroclaw-labs/zeroclaw/pull/3368) | @sghael | **Matrix 通道编译修复** — `Relation` 类型导入补全 | ⭐ 阻断性构建问题修复 |

**整体进展评估**：今日合并 41 条 PR，覆盖 **运行时稳定性、跨平台支持、架构扩展性、用户体验、国际化** 五大维度，项目成熟度向 **v0.2.0 候选** 稳步迈进。

---

## 4. 社区热点

### 高讨论 Issues（按评论数排序）

| Issue | 评论 | 核心诉求 | 状态分析 |
|:---|:---|:---|:---|
| [#2953](https://github.com/zeroclaw-labs/zeroclaw/issues/2953) Matrix 官方构建缺失 `channel-matrix` 标志 | 5 | **企业 Matrix 部署受阻** — 官方 Windows 构建无法启用 Matrix 通道 | 🔴 **仍开放**，需维护者确认构建配置 |
| [#3153](https://github.com/zeroclaw-labs/zeroclaw/issues/3153) Agent 子命令 MCP 支持 | 5 | **架构一致性** — `agent.run()` 应加载 MCP 配置而非仅内置工具 | ✅ 已关闭，PR #3446 部分覆盖 |
| [#3069](https://github.com/zeroclaw-labs/zeroclaw/issues/3069) MCP 工具未暴露给子代理 | 3 | **多代理协作瓶颈** — 委托代理无法调用 MCP 原生工具 | ✅ 已关闭，需验证 #3446 修复效果 |
| [#3397](https://github.com/zeroclaw-labs/zeroclaw/issues/3397) master 分支功能大规模丢失 | 3 | **分支管理危机** — `main`→`master` 切换导致 agent_ipc、mcp 等功能消失 | ✅ 已关闭，社区呼吁明确分支策略 |
| [#2693](https://github.com/zeroclaw-labs/zeroclaw/issues/2693) Mistral 422 错误 | 3 | **提供商兼容性** — 工具调用场景下 Mistral API 拒绝请求 | ✅ 已关闭 |

**热点洞察**：社区对 **Matrix 企业级支持** 和 **MCP 架构完整性** 需求强烈，分支管理混乱（`main`/`master`/`dev`）已造成实际用户困扰，需维护者发布明确分支策略文档。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重度 | Issue | 描述 | 修复状态 |
|:---|:---|:---|:---|
| **S0 - 数据丢失/安全风险** | [#3397](https://github.com/zeroclaw-labs/zeroclaw/issues/3397) | master 分支功能大规模丢失（agent_ipc、mcp 等） | ✅ 已关闭，建议用户检查分支 |
| | [#3379](https://github.com/zeroclaw-labs/zeroclaw/issues/3379) | MCP 配置在 master 分支消失 | ✅ 已关闭，同上 |
| **S1 - 工作流阻断** | [#3452](https://github.com/zeroclaw-labs/zeroclaw/issues/3452) | **32位编译失败**：`AtomicU32` 未声明（PR #3432 回归） | 🔴 **新报告，待修复** |
| | [#3430](https://github.com/zeroclaw-labs/zeroclaw/issues/3430) | `mcp_client.rs` 遗漏 `AtomicU64` 32位修复 | ✅ 已关闭，PR #3442 覆盖 |
| | [#3425](https://github.com/zeroclaw-labs/zeroclaw/issues/3425) | Matrix 通道编译失败（`matrix-sdk` 特性） | ✅ 已关闭，PR #3368 修复 |
| | [#2693](https://github.com/zeroclaw-labs/zeroclaw/issues/2693) | Mistral 提供商 422 错误 | ✅ 已关闭 |
| **S2 - 功能降级** | [#2953](https://github.com/zeroclaw-labs/zeroclaw/issues/2953) | 官方构建缺失 Matrix 标志 | 🔴 **仍开放** |
| **S3 - 轻微问题** | [#3417](https://github.com/zeroclaw-labs/zeroclaw/issues/3417) | 守护进程创建多余 `~` 文件夹 | ✅ 已关闭 |

**稳定性评估**：32位架构支持存在**回归风险**，PR #3432 引入的 `AtomicU32` 问题在 #3430 修复后仍有残留（#3452），建议优先处理。Matrix 通道从"编译失败"到"功能缺失"形成连锁问题，需端到端验证。

---

## 6. 功能请求与路线图信号

### 高潜力功能（已有 PR 或强烈信号）

| 功能 | 来源 | 实现状态 | 纳入 v0.2.0 概率 |
|:---|:---|:---|:---|
| **Windows 完整支持** | #3327, #3442, #3390, #3449 | PR 已合并，CI 构建中 | **95%** |
| **MCP 按需加载** | #3095, #3446 | PR #3446 已合并 | **90%** |
| **动态节点发现** | #3093, #3448 | PR #3448 已合并 | **85%** |
| **Bridge WebSocket 通道** | #2816, #3401 | PR #3401 待合并（原 dev 分支丢失） | **75%** |
| **LinkedIn 工具集成** | #3400 | PR 开放，需安全审计 | **60%** |
| **消息草稿持久化** | #3129, #3443 | PR #3443 已合并 | **已发布** |
| **自定义 API 路径** | #3125, #3447 | PR #3447 已合并 | **已发布** |

### 长期路线图信号

| 需求 | Issue | 社区强度 | 技术挑战 |
|:---|:---|:---|:---|
| WeChat Enterprise (WeCom) 通道 | [#3396](https://github.com/zeroclaw-labs/zeroclaw/issues/3396) | 企业用户刚需 | 需官方 API 接入 |
| Cron 运行历史 API + 仪表盘 | [#3299](https://github.com/zeroclaw-labs/zeroclaw/issues/3299) | 运维场景核心 | 数据保留策略设计 |
| Verbose 调试模式 | [#3316](https://github.com/zeroclaw-labs/zeroclaw/issues/3316) | 开发者体验 | 与现有日志系统整合 |
| Docker 容器 shell 支持 | [#3359](https://github.com/zeroclaw-labs/zeroclaw/issues/3359) | 文件操作必需 | 镜像体积 vs 功能权衡 |

---

## 7. 用户反馈摘要

### 真实痛点（来自 Issue 评论）

> **"After default branch switch to master, a lot of features lost"** — @shady831213  
> *分支管理混乱导致生产环境功能缺失，用户被迫维护个人 fork*

> **"Compiling ZeroClaw with `cargo` and feature flag for `matrix-sdk` fails"** — @singlerider  
> *特性组合编译测试覆盖不足，企业自定义构建受阻*

> **"The agent cannot use any commandline tools since the official Docker container... is based on a distroless image"** — @MexHigh  
> *安全优先的镜像策略与功能需求冲突*

> **"When switching to settings or different chat threads, we should preserve user's draft messages"** — @djfdat  
> *高频交互场景的体验断层*

### 满意点

- **国际化速度**：30 语言文档中心获社区认可（#3450）
- **响应速度**：Windows 支持从报告到 PR 合并仅 2 天（#3327 → #3442）

---

## 8. 待处理积压

### 需维护者优先关注

| 类型 | 条目 | 滞留时间 | 风险 |
|:---|:---|:---|:---|
| **开放 Issue** | [#2953](https://github.com/zeroclaw-labs/zeroclaw/issues/2953) Matrix 官方构建标志缺失 | 7 天 | 企业用户流失 |
| | [#3452](https://github.com/zeroclaw-labs/zeroclaw/issues/3452) 32位编译回归 | 当日 | 架构支持承诺破裂 |
| **开放 PR** | [#3451](https://github.com/zeroclaw-labs/zeroclaw/pull/3451) Windows 向导死锁修复 | 1 天 | 测试基础设施阻塞 |
| | [#3401](https://github.com/zeroclaw-labs/zeroclaw/pull/3401) Bridge WebSocket 通道恢复 | 1 天 | #2816 功能长期悬置 |
| | [#2017](https://github.com/zeroclaw-labs/zeroclaw/pull/2017) Avian 提供商支持 | 15 天 | 社区贡献者体验 |
| **策略债务** | [#3131](https://github.com/zeroclaw-labs/zeroclaw/issues/3131) 分支策略澄清 | 4 天 | 持续造成用户困惑 |

---

**日报生成时间**：2026-03-14  
**数据基准**：GitHub API 24h 滚动窗口  
**项目健康度评分**：🟢🟢🟢🟡⚪ (7.2/10 — 高迭代活力，需加强分支管理与回归测试)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-03-14

## 1. 今日速览

PicoClaw 今日呈现**高强度开发态势**，24小时内 Issues 更新 35 条（28 活跃/7 关闭）、PR 更新 109 条（60 待合并/49 已处理），活跃度处于近两周峰值。核心信号：**Agent 架构重构进入深水区**（#1216 Meta 议题持续发酵），安全加固成为新焦点（SebastianBoehler 单日提交 5 个安全相关 Issue），同时社区对本地模型（Ollama）和渠道集成（飞书/Azure/钉钉）的需求持续高涨。v0.2.2-nightly 版本保持日更节奏，但需注意自动化构建的稳定性风险。

---

## 2. 版本发布

### [v0.2.2-nightly.20260313.19835b2f](https://github.com/sipeed/picoclaw/compare/v0.2.2...main) ⚠️ 预发布版本

| 属性 | 说明 |
|:---|:---|
| **构建类型** | 自动化 Nightly Build |
| **稳定性** | ⚠️ 可能不稳定，生产环境慎用 |
| **变更范围** | 自 v0.2.2 以来 main 分支全部提交 |
| **关键变更预览** | Agent Steering 功能（#1517）、Kimi For Coding 支持（#1514）、凭证加密 Part1（#1521） |

**迁移注意事项**：Nightly 版本包含正在进行的 Agent 重构代码，配置文件格式可能存在向前不兼容风险，建议测试环境验证后再部署。

---

## 3. 项目进展

### 今日已合并/关闭的关键 PR（49 条中的核心项）

| PR | 作者 | 影响域 | 进展说明 |
|:---|:---|:---|:---|
| [#90](https://github.com/sipeed/picoclaw/pull/90) | @pngarland | Agent/Memory | **向量搜索与生命周期钩子** — 为记忆系统引入可选的语义检索能力，默认关闭保持向后兼容 |
| [#1494](https://github.com/sipeed/picoclaw/pull/1494) → 重开为 [#1518](https://github.com/sipeed/picoclaw/pull/1518) | @nnlgsakib | Cron | Cron 服务性能优化（内存索引替代线性查找），针对嵌入式硬件优化 |
| [#1410](https://github.com/sipeed/picoclaw/issues/1410) | - | Static Server | **SVG MIME 类型修复** — 解决 CSS `mask-image` 下图标不可见问题 |

### 待合并高价值 PR（60 条中的核心项）

| PR | 作者 | 状态 | 里程碑意义 |
|:---|:---|:---|:---|
| [#1517](https://github.com/sipeed/picoclaw/pull/1517) | @afjcjsbx | 🔄 Review 中 | **Agent Steering** — 用户可在工具调用链执行中实时干预/重定向，回应 #1316 事件驱动架构提案 |
| [#1521](https://github.com/sipeed/picoclaw/pull/1521) + [#1522](https://github.com/sipeed/picoclaw/pull/1522) | @sky5454 | 🔄 2-part 系列 | **凭证系统加密** — AES-256-GCM + SSH 密钥绑定，解决配置文件中 API Key 明文存储问题 |
| [#1516](https://github.com/sipeed/picoclaw/pull/1516) | @dataCenter430 | 🔄 Review 中 | **飞书文件工具支持** — 非图片媒体文件本地路径暴露，直接回应 #1506 功能请求 |
| [#1455](https://github.com/sipeed/picoclaw/pull/1455) | @Alix-007 | 🔄 Review 中 | **Telegram 长轮询重连** — 解决运行时断线后无法自动恢复的问题 |

**整体推进评估**：Agent 架构重构（#1216）从设计讨论进入代码实现阶段，安全与隐私加固从零散 Issue 升级为系统性工程，渠道生态（飞书/Telegram）的可靠性持续改进。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues（按评论数排序）

| Issue | 评论 | 核心诉求 | 背后信号 |
|:---|:---|:---|:---|
| [#1218](https://github.com/sipeed/picoclaw/issues/1218) Agent 定义重构 | **24** | 明确 `SOUL.md`（人格/价值观）与 `AGENT.md`（行为/工具）的分层定义 | 社区需要**可解释、可迁移的 Agent 身份系统**，避免配置碎片化 |
| [#1161](https://github.com/sipeed/picoclaw/issues/1161) Ollama 本地模型配置 | **17** | 本地模型运行无响应的排查指南 | **本地/私有化部署需求强烈**，但文档和错误诊断机制不足 |
| [#1316](https://github.com/sipeed/picoclaw/issues/1316) 事件驱动 Agent Loop | **9** | Hook、中断、追加消息的可观测架构 | 开发者需要**可编程的 Agent 运行时**，而非黑盒执行 |
| [#1506](https://github.com/sipeed/picoclaw/issues/1506) 飞书文件路径暴露 | **9** | 非图片文件无法被 Agent 工具处理 | **企业场景文件处理**是刚需，PR #1516 已响应 |

### 社区情绪分析
- **兴奋点**：Agent Steering（#1517）、向量记忆（#90）、凭证加密（#1521）获得技术用户高度认可
- **摩擦点**：配置复杂度（#1489 文档缺失）、本地模型调试困难（#1161）、安全默认值过于宽松（#1529-#1530）

---

## 5. Bug 与稳定性

### 🚨 高优先级（需立即关注）

| Issue | 严重程度 | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|:---|
| [#1150](https://github.com/sipeed/picoclaw/issues/1150) | **Critical** | 🔴 Open | Pool factory panic 导致永久死锁 — 路由层并发缺陷 | ❌ 无 |
| [#1529](https://github.com/sipeed/picoclaw/issues/1529) | **High** | 🔴 Open | 公网模式无 CIDR 限制时暴露 Web 控制台 — 安全漏洞 | ❌ 无 |
| [#1530](https://github.com/sipeed/picoclaw/issues/1530) | **High** | 🔴 Open | `pico setup` 默认启用 query-token 和通配符 origin — 攻击面扩大 | ❌ 无 |

### ⚠️ 中优先级（有 workaround）

| Issue | 域 | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|:---|
| [#1526](https://github.com/sipeed/picoclaw/issues/1526) | Tool/Security | 🔴 Open | `exec` 工具通过符号链接绕过工作区限制 | ❌ 无 |
| [#1525](https://github.com/sipeed/picoclaw/issues/1525) | Tool/Config | 🔴 Open | `exec.allow_remote` 默认 `true` — 远程执行风险 | ❌ 无 |
| [#1502](https://github.com/sipeed/picoclaw/issues/1502) | Provider | 🔴 Open | Mistral 集成 "Extra inputs" 错误 | ❌ 无 |
| [#1493](https://github.com/sipeed/picoclaw/issues/1493) | Provider | 🔴 Open | 新增模型需重启 gateway 生效 — 热加载失效 | ❌ 无 |
| [#1437](https://github.com/sipeed/picoclaw/issues/1437) | Channel | 🔴 Open | 手机热点环境下飞书消息间歇性丢失 | ❌ 无 |

### ✅ 今日已修复

| Issue | 修复内容 |
|:---|:---|
| [#1410](https://github.com/sipeed/picoclaw/issues/1410) | SVG MIME 类型修正为 `image/svg+xml` |
| [#1242](https://github.com/sipeed/picoclaw/issues/1242) | QQ 渠道 bindings 区分 Agent 问题 |
| [#269](https://github.com/sipeed/picoclaw/issues/269) | Anthropic/Claude 404 错误 |
| [#1245](https://github.com/sipeed/picoclaw/issues/1245) | Skill 安装不全问题 |
| [#1203](https://github.com/sipeed/picoclaw/issues/1203) | URL 包含命令被安全守卫误拦截 |

---

## 6. 功能请求与路线图信号

### 🎯 已纳入开发轨道（有 PR 或明确标签）

| 功能 | Issue/PR | 预计版本 | 信心度 |
|:---|:---|:---|:---|
| Agent Steering（执行中干预） | [#1517](https://github.com/sipeed/picoclaw/pull/1517) | v0.2.2 | ⭐⭐⭐⭐⭐ |
| 凭证加密存储 | [#1521](https://github.com/sipeed/picoclaw/pull/1521) | v0.2.2 | ⭐⭐⭐⭐⭐ |
| 飞书文件工具支持 | [#1516](https://github.com/sipeed/picoclaw/pull/1516) | v0.2.2 | ⭐⭐⭐⭐⭐ |
| Kimi For Coding 支持 | [#1514](https://github.com/sipeed/picoclaw/pull/1514) | v0.2.2 | ⭐⭐⭐⭐⭐ |
| Telegram 重连机制 | [#1455](https://github.com/sipeed/picoclaw/pull/1455) | v0.2.2 | ⭐⭐⭐⭐☆ |

### 📋 待评估（无 PR，但高需求）

| 功能 | Issue | 需求强度 | 技术复杂度 | 路线图契合度 |
|:---|:---|:---|:---|:---|
| Azure OpenAI 官方支持 | [#1424](https://github.com/sipeed/picoclaw/issues/1424) | 中 | 低 | 高 |
| OpenIM 渠道插件 | [#1372](https://github.com/sipeed/picoclaw/issues/1372) | 低 | 中 | 中 |
| 模型端搜索 + FastEmbed | [#1498](https://github.com/sipeed/picoclaw/issues/1498) | 中 | 高 | 中 |
| 可插拔语音 I/O | [#1503](https://github.com/sipeed/picoclaw/issues/1503) | 中 | 高 | 中 |
| 能力发现/编排端点 | [#1474](https://github.com/sipeed/picoclaw/issues/1474) | 低 | 中 | 高（企业） |

---

## 7. 用户反馈摘要

### 💬 真实痛点（来自 Issue 评论）

> **配置地狱** — "阅读 config.go 才发现大量未文档化的参数，官方文档与代码严重脱节" ([#1489](https://github.com/sipeed/picoclaw/issues/1489))

> **本地模型调试黑盒** — "Ollama 配置后 agent 运行但无响应，没有任何错误日志提示哪里出错" ([#1161](https://github.com/sipeed/picoclaw/issues/1161))

> **安全焦虑** — "刚部署就发现 Web 控制台暴露在公网，没有任何认证" ([#1529](https://github.com/sipeed/picoclaw/issues/1529))

> **企业文件场景** — "飞书用户发 PDF 报告，Agent 完全无法处理，只能看到图片" ([#1506](https://github.com/sipeed/picoclaw/issues/1506))

### ✅ 满意点
- 向量记忆功能被认可为"不改变现有行为的优雅扩展"（#90）
- Agent Steering 被期待为"终于能阻止 agent 无限循环的工具调用"（#1517）

### ❌ 不满意点
- 安全默认值过于宽松，"开箱即用"变成"开箱即危"
- 配置热加载不稳定，"每次改模型要重启整个 gateway"
- 移动端/弱网环境可靠性不足（#1437 手机热点问题）

---

## 8. 待处理积压

### ⏰ 长期未响应的高价值 Issue（>7天无维护者回复）

| Issue | 年龄 | 风险 | 建议动作 |
|:---|:---|:---|:---|
| [#1216](https://github.com/sipeed/picoclaw/issues/1216) Meta: Agent refactor | 7天 | 架构决策阻塞后续开发 | 维护者需确认 #1218/#1316 的优先级排序 |
| [#1161](https://github.com/sipeed/picoclaw/issues/1161) Ollama 配置指南 | 7天 | 本地部署用户流失 | 分配文档专项，或录制配置视频 |
| [#528](https://github.com/sipeed/picoclaw/issues/528) Cron 调度问题 | 21天 | 核心功能可靠性受损 | 确认 #757 修复是否覆盖此场景 |
| [#751](https://github.com/sipeed/picoclaw/pull/751) WebSocket Gateway | 17天 | 实时通信能力缺失 | 评估与当前 Agent 重构的兼容性 |

### 🔔 维护者特别提醒
- **SebastianBoehler** 今日密集提交 5 个安全 Issue（#1525-#1530），建议批量评估并制定安全加固专项
- **Agent 重构** 存在多个并行 PR（#1517  steering、#1521 凭证、#1417 TOOLS.md），需协调合并顺序避免冲突

---

*本日报基于 GitHub 公开数据生成，时间窗口：2026-03-13 00:00 - 2026-03-13 23:59 UTC*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-03-14

---

## 1. 今日速览

NanoClaw 今日活跃度极高，24小时内产生 **18 条 Issues 更新**（14 活跃/新开，4 关闭）和 **37 条 PR 更新**（21 待合并，16 已合并/关闭），无新版本发布。核心看点：**WhatsApp 渠道集成进入冲刺阶段**，伴随 3 个关联 PR 同时推进；**内存检索系统迎来重大升级**，BM25+向量混合检索方案已提交；**安全加固**成为社区焦点，Web 内容净化相关 PR 经历多次迭代。项目整体处于功能快速扩张期，但稳定性问题（WhatsApp 崩溃、定时任务凭证挂载）仍需优先解决。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 关键进展 |
|:---|:---|:---|
| [#1040](https://github.com/qwibitai/nanoclaw/pull/1040) | @trevorWieland | **修复消息丢失问题**：新增 `getAllMessagesSince()` 全量拉取机制，解决 `LIMIT 200` 导致的历史消息截断；新增 `formatMessagesWithCap()` 智能截断提示词，确保上下文不超限 |
| [#1037](https://github.com/qwibitai/nanoclaw/pull/1037) | @trevorWieland | **Tanren API 客户端**：为 worker-manager 系统添加完整的 16 端点类型化 HTTP 客户端，支持 7 枚举、4 请求类型、16 响应类型、10 事件类型的 discriminated union |
| [#1036](https://github.com/qwibitai/nanoclaw/pull/1036) | @clawtom | **Web 内容安全净化**：`PostToolUse` 钩子过滤 `WebFetch`/`WebSearch` 输出，移除对抗性提示注入内容（替代了 #1032） |
| [#1034](https://github.com/qwibitai/nanoclaw/pull/1034) | @PanidaRumriankit | **CI 安全加固**：集成 Trivy 容器镜像扫描，配置 critical/high 级别 CVE 阻断合并 |
| [#1038](https://github.com/qwibitai/nanoclaw/pull/1038) | @JayStormX8 | ~~Chrome 扩展浏览器自动化~~（已关闭，未说明原因） |

**整体推进评估**：今日合并聚焦**数据完整性**（消息不丢失）、**基础设施**（Tanren API）、**安全基线**（供应链+运行时），为即将推出的 WhatsApp 和 Signal 渠道奠定稳定性基础。

---

## 4. 社区热点

### 高关注度议题

| 议题 | 类型 | 热度指标 | 核心诉求分析 |
|:---|:---|:---|:---|
| [#1043](https://github.com/qwibitai/nanoclaw/pull/1043) 内存系统升级 | PR | 功能重大变更 | **痛点**：纯向量检索对关键词查询召回率低。方案：引入 [memory-lancedb-pro](https://github.com/CortexReach/memory-lancedb-pro) 实现 BM25+向量混合检索，支持重排序、时间衰减、噪声过滤。信号：社区对"长期记忆"需求迫切，与 #979 LanceDB 记忆技能形成互补 |
| [#1047](https://github.com/qwibitai/nanoclaw/issues/1047) WhatsApp 渠道崩溃 | Issue | High Priority + 紧急修复 PR | **痛点**：`process.exit()` 导致服务不可恢复，阻碍 headless/Linux 部署。关联 PR [#1050](https://github.com/qwibitai/nanoclaw/pull/1050) 已提交，社区对生产级 WhatsApp 支持期待极高 |
| [#1045](https://github.com/qwibitai/nanoclaw/issues/1045) / [#1044](https://github.com/qwibitai/nanoclaw/pull/1044) 凭证验证 | Issue+PR | 用户体验痛点 | **痛点**：无效 Claude token 直到首条消息才暴露。方案：setup 阶段即时验证，减少调试成本。PR #1048 同期竞争提交，显示社区对"首次体验"优化共识 |
| [#1041](https://github.com/qwibitai/nanoclaw/pull/1041) / [#1042](https://github.com/qwibitai/nanoclaw/pull/1042) Nostr 生态集成 | PR×2 | 加密原生功能 | **诉求**：NIP-17 私密消息 + NIP-47 闪电网络钱包，将 NanoClaw 推向加密社区。技术亮点：私钥隔离于 `nostr-signer` 守护进程，AES-256-GCM 解密图片 |

**背后趋势**：社区正从"单一 Claude 渠道"向**多平台智能体中枢**演进，同时强调**隐私优先架构**（Signal、Nostr）和**金融原生能力**（Lightning）。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | Issue/PR | 状态 | 影响范围 |
|:---|:---|:---|:---|:---|
| **🔴 High** | WhatsApp 服务崩溃：QR 码扫描退出 + 会话过期退出 | [#1047](https://github.com/qwibitai/nanoclaw/issues/1047) / [#1050](https://github.com/qwibitai/nanoclaw/pull/1050) | **Fix PR 已提交，待合并** | 所有非 macOS headless 部署 |
| **🔴 High** | 定时任务容器缺失 MCP 凭证挂载 | [#1046](https://github.com/qwibitai/nanoclaw/issues/1046) / [#1049](https://github.com/qwibitai/nanoclaw/pull/1049) | **Fix PR 已提交，待合并** | 使用 Gmail/Calendar/Todoist 的定时任务 |
| **🔴 High** | SDK 多结果导致重复消息发送 | [#1020](https://github.com/qwibitai/nanoclaw/issues/1020) | **待处理** | 所有渠道用户消息体验 |
| **🟡 Medium** | Setup 阶段无 Claude token 有效性验证 | [#1045](https://github.com/qwibitai/nanoclaw/issues/1045) | **双 PR 竞争修复中** (#1044, #1048) | 新用户首次配置体验 |
| **🟡 Medium** | Telegram 多容器场景重复消息 | [#835](https://github.com/qwibitai/nanoclaw/pull/835) | **PR 待合并，Blocked** | 多容器高可用部署 |
| **🟡 Medium** | 助手名称未同步至 `groups/main/CLAUDE.md` | [#753](https://github.com/qwibitai/nanoclaw/issues/753) | **待处理，good first issue** | 自定义助手名称用户 |
| **🟡 Medium** | Agent 无法从 ISO 时间戳确定星期几 | [#698](https://github.com/qwibitai/nanoclaw/issues/698) | **待处理，good first issue** | 时间敏感调度场景 |
| **🟢 Low** | WhatsApp 手机号提示误导性示例 | [#447](https://github.com/qwibitai/nanoclaw/issues/447) | **待处理，good first issue** | 新用户 WhatsApp 配置 |

**健康度评估**：High 级别 Bug 均有活跃修复 PR，但 WhatsApp 和定时任务问题阻塞生产部署，建议优先合并 #1050、#1049。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 成熟度 | 纳入下一版本概率 |
|:---|:---|:---|:---|
| **FTS5 对话索引与搜索** | [#908](https://github.com/qwibitai/nanoclaw/issues/908) / [#909](https://github.com/qwibitai/nanoclaw/issues/909) | 设计完成，待实现 | **高** — 与 #1043 内存升级协同，形成完整记忆体系 |
| **Signal 消息渠道** | [#1023](https://github.com/qwibitai/nanoclaw/pull/1023) / [#1016](https://github.com/qwibitai/nanoclaw/pull/1016) | **双 PR 竞争，#1023 功能更完整** | **高** — 隐私优先用户强烈需求，#1023 支持 JSON-RPC 守护进程 |
| **WhatsApp 渠道** | [#1051](https://github.com/qwibitai/nanoclaw/pull/1051) | 功能完整，待修复崩溃 Bug | **高** — 修复 #1050 合并后即可发布 |
| **LanceDB 长期记忆技能** | [#979](https://github.com/qwibitai/nanoclaw/pull/979) | 待 Review | **中高** — 4 个 MCP 工具，跨会话记忆 |
| **Nostr DM + 闪电钱包** | [#1041](https://github.com/qwibitai/nanoclaw/pull/1041) / [#1042](https://github.com/qwibitai/nanoclaw/pull/1042) | 技术先进，Blocked | **中** — 加密社区小众需求，架构优秀但需评估维护成本 |
| **Chrome 浏览器自动化** | [#1038](https://github.com/qwibitai/nanoclaw/pull/1038) | **已关闭** | 低 — 可能因架构争议或安全顾虑 |
| **BoxLite 沙箱后端** | [#520](https://github.com/qwibitai/nanoclaw/issues/520) | 提案阶段 | **低** — 实验性，与现有 Docker/Apple Container 并行 |
| **Prompt Caching 成本优化** | [#1033](https://github.com/qwibitai/nanoclaw/issues/1033) | 已关闭（Question） | 中 — 社区关注成本，需评估 Anthropic API 支持状态 |

**路线图信号**：短期（1-2 周）聚焦**渠道扩张**（WhatsApp、Signal）+ **记忆系统升级**（FTS5 + LanceDB）；中期关注**加密原生集成**（Nostr、Lightning）作为差异化卖点。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 | 核心不满 |
|:---|:---|:---|
| **Claude 订阅 vs API 令牌** | [#1029](https://github.com/qwibitai/nanoclaw/issues/1029) | "能用 API token 运行，但 Claude 订阅的 OAuth token 几小时就过期" — 用户期望个人订阅替代按量付费 |
| **多 LLM 提供商支持** | [#1015](https://github.com/qwibitai/nanoclaw/issues/1015) | DeepInfra/GLM-5 配置后报错模型不存在，文档未明确提供商兼容性边界 |
| **首次配置挫败感** | [#1045](https://github.com/qwibitai/nanoclaw/issues/1045) | 无效 token 直到发第一条消息才发现，调试周期长 |
| **安全焦虑** | [#411](https://github.com/qwibitai/nanoclaw/issues/411) | 间接提示注入风险未在文档显著位置警示，用户担忧"不可信数据可控制 NanoClaw" |

### 满意点

- **架构灵活性**：用户积极尝试自定义渠道（Signal、Nostr）和记忆后端（LanceDB）
- **技能扩展机制**：`/add-*` CLI 技能安装模式降低贡献门槛（#1016 作者称"首次开源贡献"）

---

## 8. 待处理积压

| 问题 | 创建时间 | 最后更新 | 风险 | 建议行动 |
|:---|:---|:---|:---|:---|
| [#835](https://github.com/qwibitai/nanoclaw/pull/835) Telegram 重复消息 | 2026-03-08 | 2026-03-13 | 多容器部署阻塞 | 解除 Blocked 状态，评估与 #1040 消息拉取机制的兼容性 |
| [#879](https://github.com/qwibitai/nanoclaw/pull/879) ANTHROPIC_AUTH_TOKEN 支持 | 2026-03-09 | 2026-03-13 | 企业 SSO 用户无法使用 | 合并前需确认与 #1044/#1048 凭证验证逻辑的冲突 |
| [#829](https://github.com/qwibitai/nanoclaw/issues/829) SOUL.md 反虚构规则 | 2026-03-08 | 2026-03-13 | 幻觉导致用户信任危机 | 标记 `good first issue` 吸引文档贡献者 |
| [#527](https://github.com/qwibitai/nanoclaw/issues/527) 主组 CLAUDE.md 只读路径误导 | 2026-02-26 | 2026-03-13 | 新用户反复遭遇权限失败 | 快速文档修复，影响首次体验 |
| [#411](https://github.com/qwibitai/nanoclaw/issues/411) 间接提示注入安全文档 | 2026-02-23 | 2026-03-13 | 安全合规风险 | 与 #1035/#1036 安全 PR 联动，形成完整安全指南 |

---

*日报生成时间：2026-03-14 | 数据来源：GitHub API 快照*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-03-14

## 1. 今日速览

NullClaw 今日展现**极高活跃度**，24小时内完成 **35个 PR 的全量处理**（合并/关闭率 100%）和 **15个 Issue 的闭环解决**，同步发布 **v2026.3.12 与 v2026.3.13 双版本**。核心进展集中在**企业级通道稳定性**（Slack/Teams/飞书/钉钉）、**Windows 服务化部署**和**开发者体验优化**三大方向。社区贡献者 @manelsen、@vedmalex、@lighterEB 表现活跃，项目维护节奏健康，无重大阻塞性 issue 积压。

---

## 2. 版本发布

### v2026.3.13（最新）
| 属性 | 内容 |
|:---|:---|
| **发布日期** | 2026-03-13 |
| **核心变更** | 速率限制重试策略修复 + Windows 二进制分发优化 |

**详细更新：**
- **[#474](https://github.com/nullclaw/nullclaw/pull/474)** `fix(agent)`: 避免速率限制后立即重试 — 解决 Alibaba Coding Plan 等场景的"Rate limit exceeded"误触发问题
- **[#479](https://github.com/nullclaw/nullclaw/pull/479)** `docs`: 新增 Windows 用户二进制文件直接运行指南（中文社区贡献）

**迁移注意**：无破坏性变更，建议所有使用 Alibaba/Qwen 等国内 API 的用户升级。

---

### v2026.3.12
| 属性 | 内容 |
|:---|:---|
| **发布日期** | 2026-03-13 |
| **核心变更** | Telegram 论坛主题稳定性 + 飞书 WebSocket 栈溢出修复 |

**详细更新：**
- **[#436](https://github.com/nullclaw/nullclaw/pull/436)** `fix`: 加固 Telegram 论坛主题支持，命令菜单可配置化
- **飞书修复**: 使用 `HEAVY_RUNTIME_STACK_SIZE` 修复 WebSocket 线程总线错误（bus error）

---

## 3. 项目进展

### 🔧 企业通道稳定性（高优先级闭环）

| PR | 作者 | 贡献 |
|:---|:---|:---|
| **[#505](https://github.com/nullclaw/nullclaw/pull/505)** | @manelsen | **Slack HTTP 模式交互回调持久化** — 解决 [#499](https://github.com/nullclaw/nullclaw/issues/499) 中 `pending_interactions` 在请求间丢失的致命问题，新增富文本按钮回复支持 |
| **[#438](https://github.com/nullclaw/nullclaw/pull/438)** | @ethanbrown3 | **Microsoft Teams 通道完整实现** — Bot Framework v4 REST API 接入，支持 webhook 监听模式 |
| **[#450](https://github.com/nullclaw/nullclaw/pull/450)** | @vedmalex | **Telegram 论坛主题级 Agent 绑定** — 支持按 topic ID 路由到不同 agent，解决 [#434](https://github.com/nullclaw/nullclaw/issues/434) |
| **[#469](https://github.com/nullclaw/nullclaw/pull/469)** | @manelsen | **OneBot 网关循环修复** — 从"标记运行"到真实启动，新增纯 `ws://` 支持 |

### 🖥️ Windows 生态完善

| PR | 作者 | 贡献 |
|:---|:---|:---|
| **[#467](https://github.com/nullclaw/nullclaw/pull/467)** | @manelsen | **Windows 服务 SCM 状态报告** — 根治 [#323](https://github.com/nullclaw/nullclaw/issues/323) 的 1053 超时错误，实现真正的服务控制管理器感知 |
| **[#489](https://github.com/nullclaw/nullclaw/pull/489)** / **[#488](https://github.com/nullclaw/nullclaw/pull/488)** / **[#482](https://github.com/nullclaw/nullclaw/pull/482)** | @neoliuhua | **Windows 二进制文件 PATH 配置 + 新手引导** — 降低 Windows 开发者入门门槛 |

### 🚀 开发者体验与基础设施

| PR | 作者 | 贡献 |
|:---|:---|:---|
| **[#502](https://github.com/nullclaw/nullclaw/pull/502)** | @lighterEB | **Tunnel 模块集成至 Gateway 启动** — Cloudflare/ngrok/tailscale/自定义隧道自动启动，解决 [#498](https://github.com/nullclaw/nullclaw/issues/498) |
| **[#480](https://github.com/nullclaw/nullclaw/pull/480)** | @manelsen | **models.dev 自动发现** —  onboarding 和 `--list-models` 支持模型自动发现，响应 [#196](https://github.com/nullclaw/nullclaw/issues/196) |
| **[#487](https://github.com/nullclaw/nullclaw/pull/487)** | @kuzeofficial | **WebSocket TLS 连接过早关闭修复** — v2026.3.12 重构引入的回归，影响 Discord/飞书/钉钉/QQ 等所有 wss 通道 |
| **[#500](https://github.com/nullclaw/nullclaw/pull/500)** | @vedmalex | **命名 Agent 会话悬垂指针修复** — [#450](https://github.com/nullclaw/nullclaw/pull/450) 合并后的回归，导致 `/bind <agent>` 无响应 |

### 📊 今日推进度量
- **企业通道**: Slack/Teams/飞书/钉钉/OneBot 五大通道完成稳定性加固
- **平台覆盖**: Windows 服务化从零散问题到生产可用
- **开发者体验**: 模型发现、隧道自动化、文档完善三线并进

---

## 4. 社区热点

### 讨论最活跃 Issue（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 | 状态 |
|:---|:---|:---:|:---|:---|
| 1 | **[#17](https://github.com/nullclaw/nullclaw/issues/17)** Termux 安装指南 | 7 | **移动端/低资源设备部署需求** — 用户希望在 Android 手机上直接运行 NullClaw | ✅ 已关闭 |
| 2 | **[#222](https://github.com/nullclaw/nullclaw/issues/222)** MiniMax-M2.5 初始化对话失败 | 6 | **国产模型兼容性** — Windows 环境下特定 LLM 的 onboarding 流程中断 | ✅ 已关闭 |
| 3 | **[#341](https://github.com/nullclaw/nullclaw/issues/341)** Alibaba Coding Plan 速率限制 | 5 | **国内 API 服务商适配** — 高频调用场景下的限流策略优化 | ✅ 已关闭（#474） |
| 4 | **[#477](https://github.com/nullclaw/nullclaw/issues/477)** 飞书 WS 断开 | 3 | **企业微信生态稳定性** — 生产环境 WebSocket 连接可靠性 | 🔴 开放中 |
| 5 | **[#413](https://github.com/nullclaw/nullclaw/issues/413)** file_read tool_call 中断 | 2 | **Skill 执行可靠性** — weather skill 示例中的工具调用中断 | 🔴 开放中 |

**诉求分析**：社区核心关注从"功能有无"转向"生产稳定"，企业级部署场景（飞书、钉钉、Slack）的可靠性成为焦点，同时国产模型/服务商适配需求显著。

---

## 5. Bug 与稳定性

| 优先级 | Issue/PR | 描述 | 修复状态 |
|:---|:---|:---|:---|
| 🔴 **P0-已修复** | [#487](https://github.com/nullclaw/nullclaw/pull/487) | WebSocket TLS 连接因空读取误判为关闭 — **影响所有 wss 通道** | ✅ v2026.3.13 已合并 |
| 🔴 **P0-已修复** | [#500](https://github.com/nullclaw/nullclaw/pull/500) | 命名 Agent 绑定后会话无响应 — **#450 合并回归** | ✅ v2026.3.13 已合并 |
| 🟡 **P1-开放** | [#477](https://github.com/nullclaw/nullclaw/issues/477) | 飞书 WebSocket 断开（生产环境） | 🔍 待诊断，关联 [#484](https://github.com/nullclaw/nullclaw/issues/484) 联网查询失败 |
| 🟡 **P1-开放** | [#413](https://github.com/nullclaw/nullclaw/issues/413) | file_read tool_call 在 weather skill 中中断 | 🔍 待复现 |
| 🟡 **P1-开放** | [#504](https://github.com/nullclaw/nullclaw/issues/504) | `gateway --help` / `agent --help` 错误启动运行时而非显示帮助 | 🔍 新报告 |
| 🟡 **P1-开放** | [#503](https://github.com/nullclaw/nullclaw/issues/503) | Telegram 语音消息和文件附件未转发至 agent | 🔍 新报告 |
| 🟢 **P2-开放** | [#506](https://github.com/nullclaw/nullclaw/issues/506) | "Network error. Please try again" — 同服务器其他 agent 正常 | 🔍 待诊断 |

**回归风险警示**：v2026.3.12 的 WebSocket 重构引入了两个关键回归（#487 TLS 问题、#500 会话指针问题），虽已在 v2026.3.13 修复，建议团队加强重构后的集成测试覆盖。

---

## 6. 功能请求与路线图信号

| Issue | 需求 | 可行性评估 | 路线图信号 |
|:---|:---|:---|:---|
| **[#492](https://github.com/nullclaw/nullclaw/issues/492)** Qwen OAuth Token 原生支持 | 参照 Gemini 实现 `~/.qwen/oauth_creds.json` 自动解析 | 🟢 高 — 已有 Gemini 实现范式 | **v2026.3.14 候选** |
| **[#495](https://github.com/nullclaw/nullclaw/issues/495)** CloudFlare/nginx 隧道公开本地 Web 通道 | 与 [#502](https://github.com/nullclaw/nullclaw/pull/502) 已实现的 tunnel 模块直接相关 | 🟢 高 — 基础设施已就绪 | **文档待完善** |
| **[#485](https://github.com/nullclaw/nullclaw/issues/485)** 一键自托管隐私服务（.onion/.i2p） | `nullclaw -Self Invidious` 式命令 | 🟡 中 — 架构匹配，需生态集成 | 长期愿景 |
| **[#508](https://github.com/nullclaw/nullclaw/issues/508)** / **[#507](https://github.com/nullclaw/nullclaw/issues/507)** Subagents/Identity 配置文档与示例 | AIEOS v1.1 JSON 格式定义指南 | 🟢 高 — 功能已存在，文档缺口 | **高优先级文档任务** |
| **[#376](https://github.com/nullclaw/nullclaw/issues/376)** 钉钉双向消息接收 | 当前仅支持发送（send-only） | 🟡 中 — 需钉钉开放平台能力确认 | 待评估 |
| **[#195](https://github.com/nullclaw/nullclaw/issues/195)** 非模型 Provider API 密钥统一管理 | Tavily/Zapier/ClickUp 等密钥与模型密钥分离 | 🟡 中 — 安全架构调整 | 待设计 |

**下一版本预测**：v2026.3.14 大概率包含 Qwen OAuth 支持、Subagents 文档完善，以及飞书稳定性修复。

---

## 7. 用户反馈摘要

### ✅ 满意点
- **"Subagents is a really great feature!"** — @neoliuhua ([#496](https://github.com/nullclaw/nullclaw/issues/496))
- **Windows 二进制分发降低门槛** — 中文社区积极反馈 ([#479](https://github.com/nullclaw/nullclaw/pull/479))
- **模型自动发现简化 onboarding** — models.dev 集成获认可 ([#480](https://github.com/nullclaw/nullclaw/pull/480))

### ❌ 痛点
- **文档滞后于功能**："I cannot find any configuration instructions" — Subagents 和 MCP 配置缺失 ([#496](https://github.com/nullclaw/nullclaw/issues/496), [#497](https://github.com/nullclaw/nullclaw/issues/497))
- **企业通道生产稳定性**：飞书 WS 断开、钉钉仅发送模式限制实际部署
- **CLI 行为不符合直觉**：`--help` 启动运行时、autonomy "yolo" 选项在 onboarding 中缺失 ([#504](https://github.com/nullclaw/nullclaw/issues/504), [#493](https://github.com/nullclaw/nullclaw/issues/493))

### 🎯 使用场景洞察
- **移动端部署**：Termux 需求反映开发者希望在个人设备上快速验证
- **多 Agent 协作**：Telegram 论坛主题绑定、Subagents 路由需求显示团队级使用场景兴起
- **国产模型优先**：MiniMax、Qwen、Alibaba 等国内服务适配需求密集

---

## 8. 待处理积压

| Issue | 创建时间 | 阻塞原因 | 建议行动 |
|:---|:---|:---|:---|
| **[#473](https://github.com/nullclaw/nullclaw/issues/473)** README 基准数据过时 | 2026-03-13 | 二进制体积、内存占用数据与实际不符，可能引发争议 | 维护者确认最新基准，更新或添加版本说明 |
| **[#376](https://github.com/nullclaw/nullclaw/issues/376)** 钉钉双向接收 | 2026-03-08 | "send-only" 是设计限制还是实现缺失？ | 产品决策：评估钉钉机器人能力，明确 roadmap |
| **[#484](https://github.com/nullclaw/nullclaw/issues/484)** 飞书无法联网查询 | 2026-03-13 | 与 [#477](https://github.com/nullclaw/nullclaw/issues/477) WS 断开可能同源 | 优先诊断，关联 issue 合并跟踪 |
| **[#493](https://github.com/nullclaw/nullclaw/issues/493)** autonomy "yolo" 选项 onboarding 缺失 | 2026-03-13 | 配置覆盖风险 — 用户被迫选择 "full" | 快速修复，维护配置向后兼容 |

**健康度评估**：项目 issue 处理效率极高（15/30 当日关闭），无长期僵尸 issue。建议关注文档债务（Subagents/MCP/Identity）和飞书稳定性两个集中反馈点。

---

*日报生成时间：2026-03-14 | 数据来源：NullClaw GitHub 仓库*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-03-14

## 1. 今日速览

IronClaw 今日保持**高活跃度**：24小时内 Issues 更新 25 条（18 活跃/新开，7 关闭），PR 更新 50 条（42 待合并，8 已合并/关闭），无新版本发布。社区贡献者 @reidliu41 表现突出，单日提交 5 个 PR 覆盖 CLI、配置系统、飞书渠道等核心模块。CI 自动检测发现 4 个高危代码质量问题（O(n²) 分配、SSRF 风险等），显示项目质量门禁运行有效。整体处于**功能密集开发期**，多租户隔离、OpenAI Codex 集成、MCP 注册表重构等架构级变更并行推进。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 今日关闭的重要 Issues

| Issue | 说明 | 进展意义 |
|:---|:---|:---|
| [#1126](https://github.com/nearai/ironclaw/issues/1126) | time/routine 工具空字符串参数处理修复 | 消除模型传递空可选参数时的崩溃 |
| [#134](https://github.com/nearai/ironclaw/issues/134) | 边缘硬件 Pattern A 架构（MCP GPIO Daemon） | **里程碑**：Raspberry Pi 等边缘设备安全 GPIO 支持落地，不破坏 WASM 沙箱 |
| [#764](https://github.com/nearai/ironclaw/issues/764) | 机器容量预警告警 | 托管基础设施可观测性提升 |
| [#825](https://github.com/nearai/ironclaw/issues/825) | ReDoS 高危漏洞（事件触发正则） | 安全债务清理，CI 自动检测生效 |
| [#639](https://github.com/nearai/ironclaw/issues/639) | MCP 自定义认证头支持 | 解锁 Browser-Use 等 MCP 服务集成 |
| [#1123](https://github.com/nearai/ironclaw/issues/1123) | 图片上传分析功能请求（重复关闭） | 与 #1122 合并跟踪 |
| [#1027](https://github.com/nearai/ironclaw/issues/1027) | BYOK 模型配置支持 | 用户自有 API Key 场景正式纳入产品能力 |

**关键里程碑**：边缘硬件支持（#134）的关闭标志着 IronClaw 从纯云端向**边缘-云混合部署**迈出实质性一步，通过 Unix Socket + systemd 守护进程架构实现了特权操作与 WASM 沙箱的隔离。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---:|:---|:---|
| 1 | **Kimi K2.5 模型兼容性** | 4 | 国产大模型适配：温度限制强制为1、reasoning_content 字段缺失 | [#728](https://github.com/nearai/ironclaw/issues/728) |
| 2 | **time/routine 工具空参数 Bug** | 2 | 工具参数鲁棒性：模型传空字符串导致失败 | [#1126](https://github.com/nearai/ironclaw/issues/1126) ✅ |
| 3 | **边缘硬件 GPIO 架构** | 2 | IoT/边缘场景：安全硬件访问模式设计评审 | [#134](https://github.com/nearai/ironclaw/issues/134) ✅ |

### 高反应 Issues
- **#728**（👍3）：Kimi K2.5 兼容性问题获 3 个赞，反映中文开发者社区对国产模型支持的迫切需求
- **#1116**（👍1）：OpenAI 兼容后端 401 错误，用户发现环境变量导出顺序影响认证

**诉求分析**：社区焦点正从"功能有无"转向**多模型生态适配**（Kimi、Anthropic OAuth、OpenAI Codex）和**生产环境鲁棒性**（边缘部署、认证稳定性）。

---

## 5. Bug 与稳定性

### 高危问题（CI 自动检测 + 社区报告）

| 严重程度 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| **HIGH** | [#825](https://github.com/nearai/ironclaw/issues/825) | ReDoS：事件触发正则无验证 | ✅ 已关闭 | 已修复 |
| **HIGH** | [#1103](https://github.com/nearai/ironclaw/issues/1103) | SSRF：embedding base URL 无校验 | 🔴 开放 | 待修复 |
| **HIGH** | [#1142](https://github.com/nearai/ironclaw/issues/1142) | O(n²) 字符串分配：SSE 解析热点路径 | 🔴 开放 | [#1153](https://github.com/nearai/ironclaw/pull/1153) |
| **HIGH** | [#1141](https://github.com/nearai/ironclaw/issues/1141) | 错误类型丢失：oauth_http_client 存 String 非 AuthError | 🔴 开放 | [#1152](https://github.com/nearai/ironclaw/pull/1152) |
| **HIGH** | [#1150](https://github.com/nearai/ironclaw/issues/1150) | 版本不匹配：manifest 0.2.1 但 artifact URL 指向 0.2.0 | 🔴 开放 | 待修复 |
| **P1** | [#1139](https://github.com/nearai/ironclaw/issues/1139) | Safari IME 回车误触发送（CJK 输入） | 🔴 开放 | 待修复 |
| **P1** | [#1002](https://github.com/nearai/ironclaw/issues/1002) | Google Sheets 静默写入不完整 | 🔴 开放 | 待修复 |
| **P1** | [#991](https://github.com/nearai/ironclaw/issues/991) | Telegram Bot Token 验证间歇性 404 | 🔴 开放 | 待修复 |
| **P1** | [#1051](https://github.com/nearai/ironclaw/issues/1051) | 事件触发 Routine 永不执行 | 🔴 开放 | 待修复 |

### 稳定性风险信号
- **Anthropic OAuth 令牌过期**（[#1136](https://github.com/nearai/ironclaw/issues/1136)）：对话中途认证失败，请求丢失，需改进令牌刷新机制
- **NEAR AI 400 错误**（[#763](https://github.com/nearai/ironclaw/issues/763)）：Routine 引擎构造的消息历史缺少 user 角色消息

---

## 6. 功能请求与路线图信号

### 用户提出的新功能

| 功能 | Issue | 成熟度信号 | 纳入可能性 |
|:---|:---|:---|:---|
| **图片上传分析** | [#1122](https://github.com/nearai/ironclaw/issues/1122) | 已有 #1123 被关闭（重复），需求明确 | ⭐⭐⭐ 高 |
| **Slack Socket Mode** | [#1155](https://github.com/nearai/ironclaw/issues/1155) | OpenClaw 迁移用户刚需，免入站流量 | ⭐⭐⭐ 高 |
| **飞书/Lark 渠道** | PR [#1110](https://github.com/nearai/ironclaw/pull/1110) | **已实现待合并**，企业微信生态覆盖 | ⭐⭐⭐⭐ 已就绪 |
| **Cron 可读化显示** | [#1131](https://github.com/nearai/ironclaw/issues/1131) + PR [#1154](https://github.com/nearai/ironclaw/pull/1154) | **PR 已提交**，UX 改进 | ⭐⭐⭐⭐ 即将合并 |
| **配置热重载前置** | [#1119](https://github.com/nearai/ironclaw/issues/1119) | P2，#86 前置依赖，架构级变更 | ⭐⭐ 中 |
| **OpenAI Codex 集成** | PR [#744](https://github.com/nearai/ironclaw/pull/744) | **XL 级 PR 开放**，ChatGPT 订阅者免 API Key | ⭐⭐⭐ 开发中 |
| **多租户隔离** | PR [#1118](https://github.com/nearai/ironclaw/pull/1118) | **XL 级 PR 开放**，#760 架构级修复 | ⭐⭐⭐ 开发中 |
| **LLM-as-Judge 安全层** | PR [#614](https://github.com/nearai/ironclaw/pull/614) | XL 级，语义工具调用评估，高风险 | ⭐⭐ 评审中 |

### 下一版本（0.19.0?）可能包含
- 飞书/Lark 官方支持（#1110）
- Cron 表达式可读化（#1154）
- MCP 注册表数据驱动重构（#1144）
- SSE 性能优化（#1153）

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 | 核心不满 |
|:---|:---|:---|
| **国产模型适配** | [#728](https://github.com/nearai/ironclaw/issues/728) | Kimi K2.5 温度强制为1、reasoning_content 缺失，"Easy Fix" 却未响应 6 天 |
| **认证配置困惑** | [#1116](https://github.com/nearai/ironclaw/issues/1116) | 环境变量导出顺序影响 OpenAI 兼容后端，与 curl 行为不一致 |
| **初始化体验断裂** | [#846](https://github.com/nearai/ironclaw/issues/846) | `onboard` 失败但 `ironclaw` 直接启动成功，数据库迁移逻辑矛盾 |
| **工具执行静默失败** | [#1002](https://github.com/nearai/ironclaw/issues/1002) | Google Sheets 创建成功但数据未写入，"technical limitation" 成为用户可见的失败 |
| **CJK 输入体验** | [#1139](https://github.com/nearai/ironclaw/issues/1139) | Safari 输入法回车确认变发送，东亚用户基础体验受损 |

### 积极信号
- 边缘硬件架构（#134）获认可："without breaking the WASM sandbox model" 是设计亮点
- Telegram 热激活改进（#1157）显示对渠道设置体验的持续关注

---

## 8. 待处理积压

### 需维护者关注的重要事项

| 时长 | Issue/PR | 风险 | 建议动作 |
|:---|:---|:---|:---|
| **6 天** | [#728](https://github.com/nearai/ironclaw/issues/728) Kimi K2.5 兼容 | 中文社区流失 | 标记 `good first issue` 或快速修复 |
| **5 天** | [#744](https://github.com/nearai/ironclaw/pull/744) OpenAI Codex XL PR | 大型 PR 腐烂风险 | 安排架构评审，拆分或合并 |
| **5 天** | [#614](https://github.com/nearai/ironclaw/pull/614) LLM-as-Judge XL PR | 安全功能延迟 | 明确优先级：blocking 或 defer |
| **4 天** | [#763](https://github.com/nearai/ironclaw/issues/763) NEAR AI 400 错误 | Routine 核心功能损坏 | 与 #1051 事件触发问题联合诊断 |
| **4 天** | [#846](https://github.com/nearai/ironclaw/issues/846) onboard 数据库错误 | 新用户流失 | 复现并修复或降级为非阻塞错误 |

### 统计
- **>5 天无响应的高优先级 Issue**：2 个（#728, #763）
- **>5 天的 XL 级 PR**：2 个（#744, #614）
- **42 个待合并 PR** 中，size XL 占 **12 个**（28.6%），存在合并冲突风险

---

*日报生成时间：2026-03-14 | 数据来源：GitHub API 快照*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 | 2026-03-14

---

## 1. 今日速览

LobsterAI 今日呈现**高强度开发迭代**态势：24小时内 9 个 PR 全部完成合并/关闭，0 个待合并，显示团队推进效率极高；同期 Issues 新增 11 条，仅关闭 1 条，**净增 10 条未解决 Issue**，社区反馈压力显著上升。核心进展集中在 **OpenClaw 架构重构**（移除内置沙箱、MCP Bridge 支持、启动速度优化）与**定时任务功能完善**。值得关注的是，本地模型（Ollama）与技能调用、工具执行的兼容性问题成为用户集中反馈痛点，可能影响本地部署用户体验。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 今日合并/关闭的关键 PR（9 条）

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#395](https://github.com/netease-youdao/LobsterAI/pull/395) | @btc69m979y-dotcom | **OpenClaw 启动速度优化**：esbuild 单文件 bundle + compile cache + 插件预编译，Windows 首次启动从 180s+ 降至 ~85s，后续 ~15s | **里程碑级性能突破**，解决 Windows 用户长期抱怨的启动超时问题 |
| [#408](https://github.com/netease-youdao/LobsterAI/pull/408) | @btc69m979y-dotcom | **MCP Bridge for OpenClaw**：MCP 服务器（Tavily/Context7/GitHub 等）通过 HTTP 回调代理嵌入 OpenClaw 模式；支持热重载 | **架构扩展**，统一本地与云端工具生态 |
| [#403](https://github.com/netease-youdao/LobsterAI/pull/403) | @liuzhq1986 | **移除内置沙箱**：精简系统提示词与 OpenClaw 默认提示词合并 | **架构瘦身**，降低维护复杂度，但可能影响依赖内置沙箱的用户 |
| [#412](https://github.com/netease-youdao/LobsterAI/pull/412) | @liuzhq1986 | 强制 executionMode 为 local，修复覆盖安装后 Docker 缺失报错 | **稳定性修复**，解决升级路径问题 |
| [#411](https://github.com/netease-youdao/LobsterAI/pull/411) | @liuzhq1986 | 设置记忆 Tab 对接 OpenClaw MEMORY.md 文件存储 | **数据持久化**改进 |
| [#410](https://github.com/netease-youdao/LobsterAI/pull/410) | @liugang519 | 删除定时任务错误引用 | Bug 修复 |
| [#409](https://github.com/netease-youdao/LobsterAI/pull/409) | @liugang519 | 定时任务支持 OpenClaw | **功能扩展**，定时任务与 OpenClaw 集成 |
| [#401](https://github.com/netease-youdao/LobsterAI/pull/401) | @btc69m979y-dotcom | Gateway 启动去重 + 频道消息显示修复 | 稳定性与体验优化 |
| [#346](https://github.com/netease-youdao/LobsterAI/pull/346) | @btc69m979y-dotcom | OpenClaw 插件预安装系统 + IM 频道配置同步 | **生态建设**，支持钉钉/飞书/QQ/企业微信 |

**整体评估**：今日合并的 PR 标志着 LobsterAI 正从"双轨架构"（内置沙箱 vs OpenClaw）向 **OpenClaw 统一架构** 战略转型，同时通过 esbuild 等技术手段解决性能瓶颈。这是一次**深度架构演进日**。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论数 | 核心诉求 | 背后信号 |
|:---|:---:|:---|:---|
| [#112](https://github.com/netease-youdao/LobsterAI/issues/112) | 2 | **本地 Ollama 模型无法通过自然语言调用技能** | 本地部署用户的核心痛点，与今日"移除内置沙箱"PR 形成张力——架构简化可能加剧本地模型兼容性问题 |
| [#370](https://github.com/netease-youdao/LobsterAI/issues/370) | 2 | 输入"你好"触发 8961 tokens 输入限制 | 提示词工程或上下文管理存在严重膨胀问题，新用户体验受损 |
| [#405](https://github.com/netease-youdao/LobsterAI/issues/405) | 1 | 本地 Ollama 只能聊天不能执行命令 | 与 #112 同源：**本地模型的工具调用链路断裂**，用户明确对比"线上模型正常" |

**趋势洞察**：Issues #112、#405、#370 形成**"本地模型体验危机"**主题簇。团队在推进 OpenClaw 统一架构时，需优先保障本地模型（Ollama/Qwen/DeepSeek）的技能调用与工具执行能力，否则将流失隐私敏感型用户。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR 状态 |
|:---|:---|:---|:---:|
| 🔴 **高** | [#370](https://github.com/netease-youdao/LobsterAI/issues/370) | 极简输入触发近 9K tokens，上下文爆炸 | ❌ 无 |
| 🔴 **高** | [#402](https://github.com/netease-youdao/LobsterAI/issues/402) | 沙箱启动即崩溃（Debian 12.2 + ESXi 虚拟机） | ⚠️ [#403](https://github.com/netease-youdao/LobsterAI/pull/403) 移除内置沙箱，可能间接解决但需验证 |
| 🟡 **中** | [#399](https://github.com/netease-youdao/LobsterAI/issues/399) | 阿里云百炼 GLM 4.5 报错 "Claude run failed" | ❌ 无 |
| 🟡 **中** | [#406](https://github.com/netease-youdao/LobsterAI/issues/406) | 百度千帆 codingplan API 连接失败 | ❌ 无 |
| 🟡 **中** | [#358](https://github.com/netease-youdao/LobsterAI/issues/358) | 任务未完成即标记完成，需手动"继续" | ❌ 无 |
| 🟡 **中** | [#285](https://github.com/netease-youdao/LobsterAI/issues/285) | 定时任务钉钉通知自动失效 | ❌ 无 |
| 🟢 **低** | [#407](https://github.com/netease-youdao/LobsterAI/issues/407) | 定时任务 Cron 表达式生成错误（"每隔10分钟"） | ❌ 无，但 [#409](https://github.com/netease-youdao/LobsterAI/pull/409) 相关功能刚合并 |

**关键风险**：#402 沙箱崩溃与 #403 移除内置沙箱的时序关系需澄清——若用户依赖内置沙箱，今日更新可能导致**功能回退**。

---

## 6. 功能请求与路线图信号

| Issue | 需求 | 与现有 PR 关联 | 纳入下一版本可能性 |
|:---|:---|:---|:---:|
| [#404](https://github.com/netease-youdao/LobsterAI/issues/404) | 对话框技能按钮支持选择**自定义 Skill** | [#409](https://github.com/netease-youdao/LobsterAI/pull/409) 定时任务已支持 OpenClaw | ⭐⭐⭐ 高，工作流自定义是核心差异化能力 |
| [#400](https://github.com/netease-youdao/LobsterAI/issues/400) | 速度优化，消除莫名等待 | [#395](https://github.com/netease-youdao/LobsterAI/pull/395) 已大幅优化启动速度 | ⭐⭐⭐ 高，性能是近期重点 |
| [#353](https://github.com/netease-youdao/LobsterAI/issues/353) | 速度对标 OpenClaw，建议简化架构 | 今日多个 PR 已响应（移除沙箱、esbuild 优化） | ⭐⭐⭐ 高，已部分实现 |

**路线图信号**：团队明确押注 **OpenClaw 嵌入式模式** 作为统一运行时，内置沙箱退出历史舞台；性能优化（启动速度、运行速度）将成为接下来 1-2 个版本的核心主题。

---

## 7. 用户反馈摘要

### 😫 核心痛点
- **"本地模型二等公民"**：#112、#405 用户反复对比"线上模型正常/本地模型异常"，产生被抛弃感
- **性能焦虑**：#400"速度太慢"、#353 对比竞品"套壳 OpenClaw 执行更快"、#370 输入即爆 token
- **稳定性黑洞**：#402 沙箱崩溃、#358 任务中断、#285 定时任务失效——"自动化"反而需要人工 babysit

### 🎯 使用场景
- **隐私优先型**：明确选择 Ollama + 本地模型（Qwen3:14b、DeepSeek-R1:8b）的企业/个人用户
- **自动化运维**：定时任务 + 钉钉通知的 DevOps 场景（#285、#407）
- **多模型策略**：同时配置阿里云百炼、百度千帆等国内 API（#399、#406）

### 💡 满意点（从 #353 反推）
- 认可 LobsterAI 相比 OpenClaw 的某些优势（未具体说明，但作者仍选择反馈建议而非直接离开）

---

## 8. 待处理积压

### 需维护者关注的高价值 Issue

| Issue | 创建时间 | 积压天数 | 风险 |
|:---|:---:|:---:|:---|
| [#112](https://github.com/netease-youdao/LobsterAI/issues/112) | 2026-02-26 | 16 | **本地模型技能调用**——架构转型期若忽视，将流失核心用户群 |
| [#285](https://github.com/netease-youdao/LobsterAI/issues/285) | 2026-03-05 | 9 | 定时任务可靠性——企业用户关键场景 |
| [#358](https://github.com/netease-youdao/LobsterAI/issues/358) | 2026-03-10 | 4 | 任务完成判断逻辑缺陷 |

### 建议行动
1. **紧急**：针对 #112、#405 创建"本地模型兼容性"专项，验证 OpenClaw 模式下 Ollama 的工具调用链路
2. **高优**：#370 上下文膨胀问题需排查系统提示词或历史记录管理机制
3. **跟进**：#402 用户在 [#403](https://github.com/netease-youdao/LobsterAI/pull/403) 合并后重新测试，确认沙箱移除后的替代方案

---

*日报生成时间：2026-03-14 | 数据来源：netease-youdao/LobsterAI GitHub*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目日报 · 2026-03-14

> 项目地址：https://github.com/TinyAGI/tinyclaw  
> 报告周期：2026-03-13 至 2026-03-14

---

## 1. 今日速览

TinyClaw 今日迎来**高强度迭代日**：核心贡献者 @jlia0 单日合并 4 个功能 PR，推动 v0.0.13 版本发布，聚焦 Agent 配置体验与内存架构升级。社区活跃度中等，2 个待合并 PR 涉及品牌重塑与 UI 重构，需关注决策进度。整体项目健康度良好，发布节奏稳定，但 ES Module 兼容性问题刚修复，需观察稳定性。

---

## 2. 版本发布

### v0.0.13 已发布
**发布日期**：2026-03-13  
**完整变更日志**：https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.13

| 特性 | 说明 | 关联 Commit |
|:---|:---|:---|
| **Agent 配置 UI** | 新增标签页式界面，支持技能管理、系统提示词、内存、心跳监控四模块 | 74c3e91 |
| **Agent 目录重构** | 统一工作区创建逻辑，技能目录改用符号链接，减少磁盘冗余 | 44ad272 |
| **分层内存系统** | 持久化知识存储，Markdown + YAML 元数据格式，支持跨会话召回 | aaca334 |
| **AGENTS.md 动态注入** | 运行时内存构建系统提示词，消除文件 I/O 与数据过期问题 | - |

**⚠️ 迁移注意事项**：
- 技能目录从物理复制改为符号链接，现有 Agent 需重新 `tinyclaw agent provision` 生效
- 内存系统依赖新的 `memory/` 目录结构，旧版本 Agent 数据不自动迁移

---

## 3. 项目进展

### 今日已合并/关闭 PR（4 条）

| PR | 作者 | 核心贡献 | 项目推进度 |
|:---|:---|:---|:---|
| [#207](https://github.com/TinyAGI/tinyclaw/pull/207) | @jlia0 | Agent 配置页面完整实现 | ⭐⭐⭐⭐⭐ 核心交互里程碑 |
| [#211](https://github.com/TinyAGI/tinyclaw/pull/211) | @jlia0 | 目录预配逻辑统一 + 符号链接优化 | ⭐⭐⭐⭐ 架构债务清理 |
| [#209](https://github.com/TinyAGI/tinyclaw/pull/209) | @jlia0 | 分层内存系统落地 | ⭐⭐⭐⭐⭐ Agent 能力质变 |
| [#208](https://github.com/TinyAGI/tinyclaw/pull/208) | @jlia0 | 系统提示词动态化重构 | ⭐⭐⭐⭐ 性能与可靠性提升 |

**今日推进总结**：Agent 基础设施从"可用"迈向"可配置、可记忆、可观测"，为多 Agent 协作场景奠定架构基础。

---

## 4. 社区热点

### 待决策高关注议题

| 议题 | 状态 | 热度分析 | 链接 |
|:---|:---|:---|:---|
| **品牌重塑：TinyClaw → TinyAGI** | 🔥 待合并 | 命名与项目定位的长期分歧，涉及全仓库 50+ 文件变更，需维护者最终拍板 | [#191](https://github.com/TinyAGI/tinyclaw/pull/191) |
| **Live Office 工作区重设计** | 🆕 新提交 | 用户体验升级，但缺乏设计文档与社区反馈，存在与现有配置 UI 风格统一性问题 | [#212](https://github.com/TinyAGI/tinyclaw/pull/212) |

**诉求洞察**：品牌 PR 反映社区对"AGI"叙事更强的认同，但需评估与现有生态（npm 包名、文档、社交账号）的迁移成本。

---

## 5. Bug 与稳定性

| 问题 | 严重程度 | 状态 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|
| `ReferenceError: exports is not defined in ES module scope` | 🔴 **High** | ✅ 已关闭 | #207 系列（Node 20/24 兼容性修复） | [#210](https://github.com/TinyAGI/tinyclaw/issues/210) |

**技术债务信号**：ES Module 与 CommonJS 混用问题在 #205 修复后复发，建议建立 Node 18/20/24 矩阵 CI 防止回归。

---

## 6. 功能请求与路线图信号

| 需求 | 提出时间 | 当前状态 | 纳入可能性 |
|:---|:---|:---|:---|
| Google Chat / Slack / Teams 集成 | 2026-02-14 | 开放，无 PR | ⭐⭐⭐ 中 - 基础设施就绪但需社区贡献 |
| 品牌重塑完成 | 2026-03-11 | PR 待合并 | ⭐⭐⭐⭐⭐ 高 - 决策层推动中 |

**下一版本信号**：v0.0.14 可能聚焦通信渠道扩展（#57）或品牌切换落地（#191），取决于维护者优先级。

---

## 7. 用户反馈摘要

> 基于 #210 评论与 PR 描述提炼

| 维度 | 反馈内容 |
|:---|:---|
| **痛点** | Node.js 版本兼容性敏感，错误信息对终端用户不友好 |
| **场景** | 企业用户需 Google Workspace 集成（#57），当前仅支持基础通信 |
| **满意度** | Agent 配置 UI 获正面预期，"终于不用手动改 JSON" |
| **担忧** | 品牌变更可能导致现有脚本/文档失效，需迁移指南 |

---

## 8. 待处理积压

| 项目 | 年龄 | 风险 | 行动建议 |
|:---|:---|:---|:---|
| [#57 Google Chat/Slack/Teams](https://github.com/TinyAGI/tinyclaw/issues/57) | 28 天 | 用户流失至竞品 | 标记 `good first issue`，提供 MCP 协议接入模板 |
| [#191 品牌重塑](https://github.com/TinyAGI/tinyclaw/pull/191) | 3 天 | 代码漂移 | 48 小时内决策合并或关闭，避免后续冲突 |

---

**分析师备注**：今日提交密度异常高（4 PR 同作者同日），建议关注代码审查深度与测试覆盖率，防止技术债务累积。品牌与通信集成两个议题代表"身份认同"与"生态扩展"两条路线，需产品层面明确优先级。

---

*日报生成时间：2026-03-14*  
*数据来源：GitHub API / TinyClaw 公开仓库*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-03-14

## 1. 今日速览

Moltis 今日保持**高活跃度**，24小时内 Issues 和 PR 各更新 11 条，形成健康的 1:1 处理闭环。社区贡献者 @DanTup 成为今日最活跃报告者，连续提交 4 个高质量 Issue 暴露节点执行与隐私安全漏洞；核心维护者 @penso 主导 5 个 PR 的合并/推进，修复了认证重置、密码管理器兼容、中断会话记忆丢失等用户痛点。项目无新版本发布，但主干代码通过密集修复持续进化，稳定性与用户体验同步提升。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的关键 PR（5 项）

| PR | 作者 | 核心改进 | 关联 Issue |
|:---|:---|:---|:---|
| [#418](https://github.com/moltis-org/moltis/pull/418) `fix(chat): persist aborted partial history` | @penso | **会话可靠性突破**：中断的 Agent 运行现在会保留已生成的助手回复和推理过程，解决"强制停止后对话失忆"问题 | #186 |
| [#402](https://github.com/moltis-org/moltis/pull/402) `docs(memory): fix QMD install instructions` | @penso | 修正内存文档中的 QMD 包名（`@tobilu/qmd`），消除用户安装困惑 | #184 |
| [#406](https://github.com/moltis-org/moltis/pull/406) `fix(web): improve onboarding password autofill hints` | @penso | 密码管理器兼容性：添加标准 HTML 属性使 1Password/Bitwarden 等可自动识别填充 | #183 |
| [#415](https://github.com/moltis-org/moltis/pull/415) `fix(web): keep onboarding accessible after auth reset` | @penso | 认证系统鲁棒性：重置认证后 onboarding 流程可重新进入，避免死锁 | #316 |
| [#409](https://github.com/moltis-org/moltis/pull/409) `fix(web): clarify cron setup modal copy` | @penso | Cron 定时任务 UX 优化：文案更清晰，时区行为明确 | #244 |

**整体推进评估**：今日合并聚焦**会话连续性**、**认证体验**、**文档准确性**三大主题，均为用户 onboarding 和日常使用的关键路径，项目成熟度显著提升。

---

## 4. 社区热点

### 高关注度议题

| 议题 | 热度指标 | 核心诉求分析 |
|:---|:---|:---|
| [#383](https://github.com/moltis-org/moltis/issues/383) `Support Lark/Feishu` | 👍×2，评论×1 | **企业集成需求**：飞书/Lark 是中国企业主流协作平台，2 个赞表明亚太用户群体存在明确诉求，可能对接企业级部署场景 |
| [#430](https://github.com/moltis-org/moltis/issues/430) `Agent unable to use cron tools` | 新建+评论×1 | **功能断裂**：Agent 无法调用已配置的定时工具，属于核心能力缺陷，影响自动化工作流可靠性 |
| [#426](https://github.com/moltis-org/moltis/issues/426) `wrong address in nodes` + [#427](https://github.com/moltis-org/moltis/issues/427) `Agent repeatedly gets confused about nodes` | 同作者连续报告 | **节点系统架构问题**：@DanTup 暴露的系统性 Bug——节点地址解析错误 + LLM 对节点参数 hallucination，表明多节点执行模块需要重构 |

**趋势洞察**：今日热点从"功能缺失"转向"架构稳定性"，节点执行引擎成为新的技术债务焦点。

---

## 5. Bug 与稳定性

### 按严重程度排序

| 优先级 | Issue | 描述 | Fix PR 状态 |
|:---|:---|:---|:---|
| 🔴 **P0-安全** | [#428](https://github.com/moltis-org/moltis/issues/428) `Full chat history available despite "vault is sealed"` | **隐私泄露**：加密 vault 状态下仍可通过 context 按钮查看完整历史，违反安全承诺 | 🚫 无 PR |
| 🔴 **P0-功能断裂** | [#430](https://github.com/moltis-org/moltis/issues/430) `Agent unable to use cron tools` | Agent 无法执行定时工具调用，自动化能力失效 | 🚫 无 PR |
| 🟡 **P1-架构** | [#426](https://github.com/moltis-org/moltis/issues/426) / [#427](https://github.com/moltis-org/moltis/issues/427) | 节点地址解析错误 + LLM 节点参数幻觉 | [#432](https://github.com/moltis-org/moltis/pull/432) `fix(tools): only expose exec node parameter when nodes are connected` 待审 |
| 🟡 **P1-兼容** | [#317](https://github.com/moltis-org/moltis/issues/317) `Jinja Exception: System message must be at the beginning` | Qwen 等国产模型兼容性问题 | [#431](https://github.com/moltis-org/moltis/pull/431) `consolidate system messages` 待审 |

**风险评估**：安全类 Issue #428 无修复 PR，需立即响应；节点相关问题已有社区贡献者 @bennyhodl 提交修复，建议优先 review。

---

## 6. 功能请求与路线图信号

| 请求 | 来源 | 纳入可能性评估 |
|:---|:---|:---|
| **Lark/Feishu 支持** #383 | @memwey | ⭐⭐⭐ 高——企业集成是 AI 助手核心场景，2 个赞显示真实需求，实现成本适中（Webhook/机器人对接） |
| **Cron 设置界面优化** #244 | @kingo55 | ✅ 已完成——PR #409 已合并 |
| **密码管理器兼容** #183 | @pomazanbohdan | ✅ 已完成——PR #406 已合并 |

**下一版本信号**：企业集成（Lark/Slack/Teams 生态）可能成为 v0.x 的差异化功能，建议维护者回应 #383 并收集更多企业场景细节。

---

## 7. 用户反馈摘要

### 真实痛点（来自 Issue 正文与评论）

> *"When stopping the agent before it's finished, none of what it did/said is remembered"* — @mfclarke #186

**会话连续性焦虑**：用户强制中断长任务后丢失全部进度，产生不信任感 → **已修复** #418

> *"The exec tool unconditionally added a `node` parameter... caused the LLM to hallucinate node values like `"host"`* — PR #432 描述

**LLM 可控性困境**：工具 schema 设计缺陷导致模型输出不可预测，需严格约束参数暴露

> *"npm install -g @anthropic/qmd" - not work* — @pomazanbohdan #184

**文档-代码不同步**：包名变更未同步文档，新用户 onboarding 受阻 → **已修复** #402

### 满意度信号
- 认证系统重置后无法重新进入 onboarding 的问题得到快速响应（#316 → #415 2天内闭环）
- 中断会话记忆修复体现维护者对"边缘情况"的重视

---

## 8. 待处理积压

### 需维护者关注的长期事项

| Issue/PR | 创建时间 | 状态 | 提醒 |
|:---|:---|:---|:---|
| [#317](https://github.com/moltis-org/moltis/issues/317) Jinja 系统消息顺序错误 | 2026-03-03（11天前） | 有 PR #431 待审 | 国产模型兼容性，影响中国用户群体 |
| [#410](https://github.com/moltis-org/moltis/pull/410) retry empty structured tool names | 2026-03-11 | 待合并 | 工具调用稳定性，关联 #179 |
| [#417](https://github.com/moltis-org/moltis/pull/417) restore custom GGUF setup without restart | 2026-03-11 | 待合并 | 本地 LLM 用户体验关键改进 |

### 今日新增需跟进
- **#428 安全隐私问题**：vault sealed 状态下历史泄露，建议 24h 内评估并创建修复 PR
- **#430 Cron 工具失效**：核心功能断裂，建议与 #410 工具调用修复统筹处理

---

*日报生成时间：2026-03-14 · 数据来源：GitHub API · 分析框架：Moltis 社区健康度模型*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-03-14

## 1. 今日速览

CoPaw 昨日保持**高活跃度**，24小时内产生 **50 条 Issues 更新**（41条新开/活跃，9条关闭）和 **44 条 PR 更新**（23条已合并/关闭，21条待审阅）。社区聚焦三大主题：**时区/时间处理架构争议**（#1346, #1451, #1432）、**飞书频道稳定性问题**（#1345, #1403）以及**企业微信等渠道扩展**（#51, #1407, #1267）。值得注意的是，项目今日无新版本发布，但合并了多项关键修复，包括技能去重、LobeHub技能导入和Mattermost频道支持，整体健康度良好，积压问题需关注。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#1432](https://github.com/agentscope-ai/CoPaw/pull/1432) | @howyoungchen | **时区架构重构**：在 `env_context` 固定注入 UTC 时间，统一 `get_current_time` 与 cron 的时区语义 | 根治弱模型不主动调用时间工具导致的时区错误，回应 #1346 的核心诉求 |
| [#1451](https://github.com/agentscope-ai/CoPaw/pull/1451) | @Alexxigang | **Cron 默认本地时区**：将定时任务默认从硬编码 UTC 改为 `COPAW_TIMEZONE` 或检测到的本地时区 | 解决 #1387 用户反馈的"记忆时区但执行仍用 UTC"问题 |
| [#1396](https://github.com/agentscope-ai/CoPaw/pull/1396) | @Alexxigang | **技能去重修复**：解决 0.0.7 版本技能列表重复显示问题（active/customized/venv 重复） | 修复 #1370 的 UI 混乱问题，提升用户体验 |
| [#1350](https://github.com/agentscope-ai/CoPaw/pull/1350) | @fancyboi999 | **LobeHub 技能导入**：支持从 lobehub.com 导入技能，解析页面 URL 和直链下载 | 扩展技能生态，降低用户自定义技能门槛 |
| [#1071](https://github.com/agentscope-ai/CoPaw/pull/1071) | @2niuhe | **Mattermost 频道集成**：新增企业级协作平台 Mattermost 支持 | 丰富 B 端渠道矩阵，回应 #621 |
| [#943](https://github.com/agentscope-ai/CoPaw/pull/943) | @Leirunlin | **统一白名单控制**：将飞书、Discord 的访问控制统一到 BaseChannel | 技术债务清理，提升代码可维护性 |
| [#1433](https://github.com/agentscope-ai/CoPaw/pull/1433) | @pan-x-c | **Ollama 文档警告**：针对上下文长度设置问题添加文档警示 | 缓解 #1416 #1137 #1390 的重复报告 |
| [#1250](https://github.com/agentscope-ai/CoPaw/pull/1250) | @mautops | **Shell 工具与上下文管理优化**：隐式用户身份传递机制 | 为 Tool/MCP/Skill 提供无侵入的上下文获取能力 |

**整体进展评估**：今日合并的 PR 覆盖了**核心架构修复**（时区）、**稳定性提升**（技能去重）、**生态扩展**（LobeHub、Mattermost）和**工程优化**（统一白名单、上下文管理），项目在技术债务和功能完整性上均有显著推进。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 核心诉求分析 |
|:---|:---|:---:|:---|
| 1 | [#1346](https://github.com/agentscope-ai/CoPaw/issues/1346) 为何不在上下文固定嵌入本地时间？ | 7 | **架构设计争议**：用户质疑"工具调用"模式的可靠性，认为弱模型不会主动调用 `get_current_time`。维护者通过 #1432 回应，但方案（固定 UTC）与用户期望（本地时间）仍有差距 |
| 2 | [#51](https://github.com/agentscope-ai/CoPaw/issues/51) 企业微信支持 | 7 | **企业渠道刚需**：历时近半月，今日随 #1407 #1267 关闭，反映企业用户对微信生态的强依赖 |
| 3 | [#1385](https://github.com/agentscope-ai/CoPaw/issues/1385) CPU 100% 占用（MCP 相关） | 6 | **性能危机**：用户持续更新诊断，锁定 MCP/read_file 为根因，已提交修复 PR，但尚未合并 |
| 4 | [#1293](https://github.com/agentscope-ai/CoPaw/issues/1293) write_file/execute_shell 工具调用失败 | 6 | **上下文超限疑云**：用户怀疑 token 过长导致工具失效，触及 CoPaw 上下文管理的核心痛点 |
| 5 | [#1345](https://github.com/agentscope-ai/CoPaw/issues/1345) 飞书"延迟回复"（回答上一个问题） | 5 | **状态同步 Bug**：消息队列或会话状态管理缺陷，严重影响飞书用户体验 |

**热点洞察**：时区/时间处理已成为**架构级争议点**——用户希望"开箱即用"的本地时间感知，而项目倾向"工具调用"的灵活设计。#1346 的 7 评论争论体现了**用户体验 vs 架构纯粹性**的张力。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|:---:|
| 🔴 **高** | [#1385](https://github.com/agentscope-ai/CoPaw/issues/1385) | OPEN | **CPU 100% 持续占用**（MCP/read_file 引发），风扇狂转，影响可用性 | 用户已提交，待审 |
| 🔴 **高** | [#1345](https://github.com/agentscope-ai/CoPaw/issues/1345) | OPEN | **飞书延迟回复**：Bot 回答上一个问题，状态错乱 | 无 |
| 🔴 **高** | [#1403](https://github.com/agentscope-ai/CoPaw/issues/1403) | OPEN | **飞书消息无去重**：单条消息多次处理 | 无 |
| 🟡 **中** | [#1293](https://github.com/agentscope-ai/CoPaw/issues/1293) | OPEN | **工具调用失败**：write_file/execute_shell 异常，疑似 token 超限 | 无 |
| 🟡 **中** | [#1270](https://github.com/agentscope-ai/CoPaw/issues/1270) | OPEN | **Agent 静默停止**：长对话中 token 超限（Error 1210）无提示 | 无 |
| 🟡 **中** | [#1437](https://github.com/agentscope-ai/CoPaw/issues/1437) | OPEN | **Compactor 幻觉**：消息压缩时虚构用户未发送的内容 | 无 |
| 🟡 **中** | [#1458](https://github.com/agentscope-ai/CoPaw/issues/1458) | OPEN | **Ollama 局域网连接失败**：v0.0.7 回归，浏览器可通但 CoPaw 不通 | 无 |
| 🟡 **中** | [#1416](https://github.com/agentscope-ai/CoPaw/issues/1416) | CLOSED | Ollama 失忆+无法调用工具（上下文长度设置问题） | #1433 文档缓解 |
| 🟢 **低** | [#1370](https://github.com/agentscope-ai/CoPaw/issues/1370) | CLOSED | 技能列表重复显示 | #1396 ✅ |
| 🟢 **低** | [#1387](https://github.com/agentscope-ai/CoPaw/issues/1387) | CLOSED | 定时任务时区记忆不生效 | #1451 ✅ |

**稳定性评估**：飞书频道存在**系统性问题**（延迟回复、消息去重），建议优先处理；MCP 相关的 CPU 100% 问题已有社区修复，需尽快审阅合并。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue/PR | 信号强度 | 纳入可能性分析 |
|:---|:---|:---:|:---|
| **ACP 协议支持**（Agent Communication Protocol） | [#1059](https://github.com/agentscope-ai/CoPaw/issues/1059) | ⭐⭐⭐⭐⭐ | **高**。与 Codex/Claude Code/OpenCode 双向集成，符合 AI Agent 生态趋势，无冲突 PR |
| **多 Agent 并行执行**（OpenClaw 式侧边栏） | [#1298](https://github.com/agentscope-ai/CoPaw/issues/1298) | ⭐⭐⭐⭐⭐ | **中高**。架构层面需重大调整，但用户需求强烈，竞品已实现 |
| **网页版图片上传/多模态** | [#1045](https://github.com/agentscope-ai/CoPaw/issues/1045) | ⭐⭐⭐⭐☆ | **中高**。多模态为明确趋势，用户愿贡献但前端压缩阻碍 |
| **小艺开放平台频道** | [#1085](https://github.com/agentscope-ai/CoPaw/issues/1085) | ⭐⭐⭐⭐☆ | **中**。华为生态扩展，OpenClaw 已支持，技术可行 |
| **Nextcloud Talk 频道** | [#1460](https://github.com/agentscope-ai/CoPaw/pull/1460) | ⭐⭐⭐⭐⭐ | **极高**。PR 已提交，含 Webhook + WebDAV 完整实现 |
| **QQ 流式进度回复** | [#1428](https://github.com/agentscope-ai/CoPaw/pull/1428) | ⭐⭐⭐⭐⭐ | **极高**。PR 已提交，解决长任务无反馈痛点 |
| **自定义 Skill 资源文件支持** | [#1316](https://github.com/agentscope-ai/CoPaw/issues/1316) [#1430](https://github.com/agentscope-ai/CoPaw/issues/1430) | ⭐⭐⭐⭐⭐ | **高**。重复诉求，当前仅支持 prompt 限制大 |
| **会话压缩前 Hook/摘要落盘** | [#1439](https://github.com/agentscope-ai/CoPaw/issues/1439) | ⭐⭐⭐⭐☆ | **中**。数据持久化诉求合理，需架构评估 |

---

## 7. 用户反馈摘要

### 真实痛点

| 痛点 | 来源 | 典型表述 |
|:---|:---|:---|
| **时区混乱** | #1346 #1387 | "告诉 CoPaw 记录到长记忆后依然不能改变，除非每次强制要求" |
| **弱模型不可靠** | #1346 | "能力较弱的模型在复杂任务中往往不会主动调用工具" |
| **飞书体验差** | #1345 #1403 | "回答的是上一个问题的内容，当前发送的新问题被忽略" |
| **上下文黑洞** | #1439 | "压缩后原始对话内容不可恢复，技术决策彻底丢失" |
| **Ollama 局域网难配** | #1458 #1416 | "浏览器能通，CoPaw 不通；升级到 0.0.7 后失忆" |
| **Skill 扩展受限** | #1316 #1430 | "只能写 prompt，不能添加 python 脚本，且不允许编辑" |

### 满意点

- **企业微信终落地**："什么时候支持" → 今日关闭（#51）
- **社区响应快**：#1385 用户 3 次更新诊断，维护者跟进及时

---

## 8. 待处理积压

### 需维护者关注的高价值 Issue/PR

| 类型 | 条目 | 天数 | 风险/价值 |
|:---|:---|:---:|:---|
| **PR 待审** | [#1385 相关修复](https://github.com/agentscope-ai/CoPaw/issues/1385)（CPU 100%） | 1 | 🔴 性能危机，用户已自修复 |
| **PR 待审** | [#1460](https://github.com/agentscope-ai/CoPaw/pull/1460) Nextcloud Talk | 0 | 🟢 完整实现，企业用户需求 |
| **PR 待审** | [#1428](https://github.com/agentscope-ai/CoPaw/pull/1428) QQ 流式进度 | 0 | 🟢 体验提升，代码已就绪 |
| **PR 待审** | [#1278](https://github.com/agentscope-ai/CoPaw/pull/1278) `copaw update` 命令 | 2 | 🟡 运维体验，社区多次呼吁 |
| **Issue 无响应** | [#1059](https://github.com/agentscope-ai/CoPaw/issues/1059) ACP 协议 | 4 | 🟡 战略级功能，需路线图回应 |
| **Issue 无响应** | [#1298](https://github.com/agentscope-ai/CoPaw/issues/1298) 多 Agent 并行 | 2 | 🟡 竞品差异化功能 |

---

**日报生成时间**：2026-03-14  
**数据来源**：agentscope-ai/CoPaw GitHub 公开数据

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报 · 2026-03-14

> 📊 数据来源：github.com/qhkm/zeptoclaw | 统计周期：过去24小时

---

## 1. 今日速览

今日 ZeptoClaw 项目活跃度**极高**，核心维护者 @qhkm 主导了密集的安全加固与 CLI 体验优化工作。过去24小时内完成 **6 个 Issue 关闭**、**3 个 PR 合并**，全部聚焦于安全策略收紧（默认 autonomous → assistant 模式）、交互式审批流程、以及流式响应默认化。同时有 **3 个 PR 待合并**，涉及 ACP 协议实现与图像处理修复，显示项目正从"安全基线建设"向"多通道生态扩展"演进。无新版本发布，但主分支已积累大量破坏性变更，建议关注迁移指南。

---

## 2. 版本发布

**无新版本发布**

> 注：尽管今日无 Release，但主分支包含多项破坏性默认配置变更（见第3节），建议维护者考虑发布 v0.x.0 版本以明确信号。

---

## 3. 项目进展

### ✅ 已合并/关闭的关键 PR

| PR | 作者 | 核心变更 | 项目推进意义 |
|:---|:---|:---|:---|
| [#353](https://github.com/qhkm/zeptoclaw/pull/353) | @qhkm | **交互式审批 + 可信会话 + 流式对齐** | 🔒 安全架构里程碑：实现 TTY 感知的 `[y/N]` 实时审批、`/trust` 会话级覆盖、流式/非流式执行路径一致性 |
| [#342](https://github.com/qhkm/zeptoclaw/pull/342) | @qhkm | **流式默认化 + 响应元数据页脚** | ⚡ UX 重大升级：`--no-stream` 反向标志、`agents.defaults.streaming=true`、令牌/工具/耗时可视化 |
| [#349](https://github.com/qhkm/zeptoclaw/pull/349) | @qhkm | **修复 AgentLoop 构造器忽略流式配置** | 🐛 配置系统完整性修复，添加回归测试 |

**整体进展评估**：今日合并内容相当于完成了 ZeptoClaw 从"自动执行工具"到"人机协同执行"的范式转换，安全默认策略从"宽松自主"转向"严格受控"，为生产环境部署奠定信任基础。

---

## 4. 社区热点

### 🔥 讨论最活跃议题

| 排名 | Issue/PR | 互动数据 | 核心诉求分析 |
|:---|:---|:---|:---|
| 1 | [#354](https://github.com/qhkm/zeptoclaw/issues/354) | 1 评论，P1-critical | **安全精确性诉求**：社区关注 #342 引入的文件系统安全扫描范围过宽，要求"窄化 carve-out"避免误杀合法代码编辑场景 |
| 2 | [#352](https://github.com/qhkm/zeptoclaw/issues/352) | 1 评论，P2-high | **自动化 vs 交互式边界**：要求 `/trust` 必须通过 TTY 检测，防止 CI/管道环境意外获得特权 |
| 3 | [#356](https://github.com/qhkm/zeptoclaw/pull/356) | 待合并 | **生态互操作性诉求**：@starsy 贡献 ACP (Agent Client Protocol) 双通道实现，推动 ZeptoClaw 成为可嵌入的 Agent 后端 |

**背后信号**：社区核心关切从"功能有无"转向"安全精确性"和"生态标准化"，项目成熟度进入新阶段。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|:---|
| P1-critical | [#354](https://github.com/qhkm/zeptoclaw/issues/354) | ✅ 已关闭 | 文件系统安全扫描范围过宽（#342 副作用） | #353 已包含修复 |
| P2-high | [#351](https://github.com/qhkm/zeptoclaw/issues/351) | ✅ 已关闭 | 流式执行路径缺失钩子/指标/日志，与主路径不一致 | #353 已包含修复 |
| P2-high | [#352](https://github.com/qhkm/zeptoclaw/issues/352) | ✅ 已关闭 | 可信会话缺乏 TTY 校验，可能被自动化滥用 | #353 已包含修复 |
| - | [#355](https://github.com/qhkm/zeptoclaw/pull/355) | 🔄 待合并 | 循环中图像内容处理修复 | 待审 |
| - | [#346](https://github.com/qhkm/zeptoclaw/pull/346) | 🔄 待合并 | Discord 通道忽略纯图像消息 | 待审 |

**稳定性评估**：今日所有 P1/P2 级别安全问题均已闭环，主分支安全态势显著改善。待合并 PR 聚焦边缘场景（图像处理），不影响核心稳定性。

---

## 6. 功能请求与路线图信号

| 来源 | 需求 | 可行性判断 | 纳入下一版本概率 |
|:---|:---|:---|:---|
| [#334](https://github.com/qhkm/zeptoclaw/issues/334) | 加入 Shelldex 目录 | 低工作量，生态营销价值 | ⭐⭐⭐⭐⭐ 极高 |
| [#356](https://github.com/qhkm/zeptoclaw/pull/356) | ACP 协议 stdio + HTTP 实现 | 架构级扩展，需协议稳定性承诺 | ⭐⭐⭐⭐☆ 高（若测试通过） |
| [#341](https://github.com/qhkm/zeptoclaw/issues/341) / [#342](https://github.com/qhkm/zeptoclaw/pull/342) | 流式默认化 | ✅ 已实现 | 已发布 |
| [#350](https://github.com/qhkm/zeptoclaw/issues/350) / [#353](https://github.com/qhkm/zeptoclaw/pull/353) | 交互式审批 + 可信会话 | ✅ 已实现 | 已发布 |

**路线图信号**：项目短期聚焦"安全加固完成 → 生态目录曝光 → 协议标准化"，中长期可能向 MCP/ACP 多协议 Agent 平台演进。

---

## 7. 用户反馈摘要

> 基于 Issue 描述与评论提炼的真实信号

| 维度 | 反馈内容 | 来源 |
|:---|:---|:---|
| ✅ **满意** | 流式响应"最大的感知性能提升"（biggest perceived performance improvement） | [#341](https://github.com/qhkm/zeptoclaw/issues/341) |
| ✅ **满意** | 元数据页脚设计（tokens · tool calls · wall time）满足可观测性需求 | [#341](https://github.com/qhkm/zeptoclaw/issues/341) |
| ⚠️ **担忧** | 默认 autonomous 模式 + AlwaysAllow 在生产环境"危险" | [#348](https://github.com/qhkm/zeptoclaw/issues/348), [#347](https://github.com/qhkm/zeptoclaw/issues/347) |
| ⚠️ **担忧** | 安全扫描误伤代码编辑场景，需要"精确 carve-out" | [#354](https://github.com/qhkm/zeptoclaw/issues/354) |
| 🔮 **期待** | 成为 Shelldex 收录的"标准 claws"之一 | [#334](https://github.com/qhkm/zeptoclaw/issues/334) |

**核心痛点**：用户对 AI Agent 的"默认安全"预期与早期版本设计存在落差，今日密集修复正是对此的响应。

---

## 8. 待处理积压

| 类型 | 项目 | 状态 | 风险提示 |
|:---|:---|:---|:---|
| 📋 社区贡献 | [#334](https://github.com/qhkm/zeptoclaw/issues/334) Shelldex 收录 | 开放 2 天 | 低工作量高价值，建议 @qhkm 快速响应以获取生态曝光 |
| 🔧 功能修复 | [#355](https://github.com/qhkm/zeptoclaw/pull/355) 图像内容处理 | 待合并 1 天 | @rafaellin 贡献，需代码审查避免与 #346 重复或冲突 |
| 🔧 功能修复 | [#346](https://github.com/qhkm/zeptoclaw/pull/346) Discord 图像消息 | 待合并 1 天 | 同上，建议合并前确认两者是否解决同一根因 |
| 🚀 架构扩展 | [#356](https://github.com/qhkm/zeptoclaw/pull/356) ACP 协议实现 | 待合并 1 天 | 重大架构变更，需评估长期维护承诺与协议稳定性 |

**维护者行动建议**：优先处理 #334（分钟级工作量），协调 #355/#346 避免重复劳动，为 #356 安排架构评审会议。

---

> 📌 **订阅本日报**：关注 [ZeptoClaw](https://github.com/qhkm/zeptoclaw) 获取每日更新

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*