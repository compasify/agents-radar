# OpenClaw 生态日报 2026-03-29

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-03-29 00:10 UTC

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

# OpenClaw 项目动态日报 | 2026-03-29

## 1. 今日速览

OpenClaw 今日呈现**高活跃度、高压力**态势：24小时内 Issues 和 PR 各更新 500 条，社区讨论密度极高。核心事件是 **v2026.3.28-beta.1 版本发布**，包含重大破坏性变更（Qwen OAuth 废弃）。与此同时，主分支因 `pi-coding-agent 0.63.0` 升级引发**严重回归**——嵌入式 Agent 认证失效，导致大量用户遭遇 "No API key for provider" 错误，维护团队已紧急合并多个修复 PR。Linux/Windows 原生客户端需求 (#75) 持续升温（58 评论），成为社区最期待的功能缺口。

---

## 2. 版本发布

### [v2026.3.28-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.3.28-beta.1)

| 属性 | 内容 |
|:---|:---|
| 发布日期 | 2026-03-28 |
| 版本性质 | Beta 预发布 |
| 关键评级 | ⚠️ **包含 Breaking Changes** |

#### 破坏性变更 (Breaking Changes)

| 变更项 | 影响 | 迁移路径 |
|:---|:---|:---|
| **Qwen Portal OAuth 移除** | `qwen-portal-auth` 认证方式完全废弃 | 执行 `openclaw onboard --auth-choice modelstudio-api-key` 迁移至 Model Studio |
| **自动配置迁移终止** | `openclaw doctor` 不再自动修复旧版配置 | 手动备份后重新配置，或参考 [迁移指南](https://docs.openclaw.ai/migrate) |

> **维护者备注**：此次变更响应阿里云 Qwen 平台战略调整，建议所有 Qwen 用户在升级前完成 API Key 迁移。

---

## 3. 项目进展

### 今日已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#55909](https://github.com/openclaw/openclaw/pull/55909) | w-sss | **修复嵌入式 Agent 认证回归**：恢复 `getApiKey` callback，解决 `pi-coding-agent 0.63.0` 升级后的 auth-injection 失效 | #55816, #55760 |
| [#55588](https://github.com/openclaw/openclaw/pull/55588) | BrianCerberus | 嵌入式 runner 中重新连接 `agent.getApiKey`，覆盖 6+ 主流 provider | - |
| [#55867](https://github.com/openclaw/openclaw/pull/55867) | rbutera | **标记为 CRITICAL**：系统级修复 streamFn override 绕过 auth wrapper 的问题 | - |
| [#55898](https://github.com/openclaw/openclaw/pull/55898) | openperf | 恢复 `pi-coding-agent 0.63.0` 升级后的嵌入式认证注入 | - |
| [#55782](https://github.com/openclaw/openclaw/pull/55782) | rodrigouroz | 保留嵌入式 stream override 中的认证信息 | - |
| [#56665](https://github.com/openclaw/openclaw/pull/56665) | Whaleylaw | **大型合并** (XL)：跨 Web-UI/Gateway/CLI/Commands/Agents 的多模块整合 | - |
| [#56616](https://github.com/openclaw/openclaw/pull/56616) | tonga54 | `/v1/responses` 端点返回 reasoning/thinking 内容 | - |
| [#56607](https://github.com/openclaw/openclaw/pull/56607) | tonga54 | 新增 `sessions_await` 工具，支持并行子 Agent 编排 | - |

### 进展评估

- **稳定性修复**：5 个 PR 紧急修复认证回归，显示团队对主分支稳定性的快速响应能力
- **API 演进**：OpenResponses 协议开始暴露模型推理内容，向更透明的 Agent 执行迈进
- **架构能力**：`sessions_await` 工具填补并行编排关键缺口，多 Agent 工作流成熟度提升

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 👍 | 核心诉求 |
|:---|:---|:---:|:---:|:---|
| 1 | [#75 - Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75) | 58 | 66 | **跨平台原生客户端**：macOS/iOS/Android 已有支持，Linux/Windows 用户强烈呼吁功能对等 |
| 2 | [#23538 - Anthropic setup-token 401 错误](https://github.com/openclaw/openclaw/issues/23538) | 25 | 0 | 隔离环境可复现的认证失效，影响生产部署 |
| 3 | [#13688 - Discord WebSocket 断开与无限退避](https://github.com/openclaw/openclaw/issues/13688) | 19 | 2 | 连接稳定性危机，DM 消息在 30+ 分钟断线期间静默丢失 |
| 4 | [#34830 - OpenRouter 401 缺失认证头](https://github.com/openclaw/openclaw/issues/34830) | 18 | 0 | v2026.3.2 回归，阻断 OpenRouter 用户 |
| 5 | [#14593 - Docker 中 brew 技能安装失败](https://github.com/openclaw/openclaw/issues/14593) | 17 | 14 | 容器化部署的技能生态缺口 |

### 诉求分析

- **平台公平性**：#75 的高票（66👍）反映非苹果生态用户的不满，PR [#56005](https://github.com/openclaw/openclaw/pull/56005) 已开始 Linux 原生网关客户端实现
- **认证可靠性**：Anthropic/OpenRouter 的 401 问题显示 OAuth/token 刷新机制的脆弱性
- **连接韧性**：Discord WebSocket 问题（#13688, #54729, #54931, #55346）形成集群，表明通道层的健康监控需要重构

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重度 | Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **P0-回归** | [#55672](https://github.com/openclaw/openclaw/issues/55672) | ✅ 已关闭 | "No API key for provider" 阻断所有 Baidu 千帆用户 | #55909, #55588, #55867, #55898, #55782 |
| 🔴 **P0-崩溃** | [#54729](https://github.com/openclaw/openclaw/issues/54729) | ✅ 已关闭 | Discord stale-socket 健康监控重启导致网关崩溃 | - |
| 🔴 **P0-崩溃** | [#54931](https://github.com/openclaw/openclaw/issues/54931) | 🟡 开放 | Discord health-monitor 未捕获异常引发崩溃循环（v2026.3.24） | 待修复 |
| 🟡 **P1-功能失效** | [#23538](https://github.com/openclaw/openclaw/issues/23538) | 🟡 开放 | Anthropic setup-token 认证 401 | 待验证 #55909 |
| 🟡 **P1-功能失效** | [#34830](https://github.com/openclaw/openclaw/issues/34830) | 🟡 开放 | OpenRouter 401 缺失认证头（v2026.3.2 回归） | 待修复 |
| 🟡 **P1-功能失效** | [#53959](https://github.com/openclaw/openclaw/issues/53959) | 🟡 开放 | openai-codex/gpt-5.3-codex 工具执行完全静默失败 | 待修复 |
| 🟡 **P1-功能失效** | [#40069](https://github.com/openclaw/openclaw/issues/40069) | 🟡 开放 | 工具执行声称成功但实际未调用（kimi-coding/k2p5） | 待修复 |
| 🟡 **P1-安全** | [#53870](https://github.com/openclaw/openclaw/issues/53870) | 🟡 开放 | Matrix 插件被 VirusTotal 安全扫描阻塞 | 待修复 |
| 🟡 **P1-连接** | [#13688](https://github.com/openclaw/openclaw/issues/13688) | 🟡 开放 | Discord WebSocket 1005/1006 断开 + 无限退避 | 待修复 |
| 🟢 **P2-体验** | [#14593](https://github.com/openclaw/openclaw/issues/14593) | 🟡 开放 | Docker 环境 brew 技能不可用 | 待设计 |

### 稳定性健康度

| 指标 | 评估 |
|:---|:---|
| 关键修复响应 | ⭐⭐⭐⭐⭐ 24小时内 5 个 PR 修复认证危机 |
| 通道稳定性 | ⭐⭐⭐☆☆ Discord 相关问题 4+ 个，存在系统性风险 |
| 回归预防 | ⭐⭐⭐☆☆ 升级 `pi-coding-agent` 缺乏充分集成测试 |

---

## 6. 功能请求与路线图信号

### 高潜力功能（已有 PR 或强烈信号）

| 功能 | Issue/PR | 状态 | 纳入可能性 |
|:---|:---|:---|:---:|
| **Linux 原生网关客户端** | [#75](https://github.com/openclaw/openclaw/issues/75), [#56005](https://github.com/openclaw/openclaw/pull/56005) | PR 开发中 | 🔥 **高** - 社区最热门需求 |
| **并行子 Agent 编排 (`sessions_await`)** | [#56673](https://github.com/openclaw/openclaw/pull/56673), [#56607](https://github.com/openclaw/openclaw/pull/56607) | PR 已合并 | ✅ **已纳入** |
| **推理内容暴露 (`/v1/responses`)** | [#56674](https://github.com/openclaw/openclaw/pull/56674), [#56616](https://github.com/openclaw/openclaw/pull/56616) | PR 已合并 | ✅ **已纳入** |
| **Agent 身份与信任验证 (ERC-8004/DID/VC)** | [#49971](https://github.com/openclaw/openclaw/issues/49971) | RFC 讨论中 | 🔥 **高** - 企业级需求 |
| **Memory v2 架构** | [#28930](https://github.com/openclaw/openclaw/issues/28930) | 设计讨论 | 🔥 **高** - 长期运行 Agent 痛点 |
| **Baidu 网页搜索 provider** | [#56304](https://github.com/openclaw/openclaw/issues/56304) | 今日新提 | 🟡 **中** - 中文市场优化 |
| **会话历史备份层** | [#7598](https://github.com/openclaw/openclaw/issues/7598) | 长期开放 | 🟡 **中** - 数据安全需求 |

### 技术债务信号

- **Windows 支持**：仅 [#56285](https://github.com/openclaw/openclaw/pull/56285) 在推进 exec allowlist，整体落后 Linux
- **配置系统**：`doctor --fix` 生成数千备份文件 ([#56671](https://github.com/openclaw/openclaw/pull/56671))，显示配置管理需要重构

---

## 7. 用户反馈摘要

### 真实痛点（直接引用 Issue 评论提炼）

| 场景 | 痛点 | 代表 Issue |
|:---|:---|:---|
| **长期运行 Agent** | "连续运行 11 天，内存是我思考最多的问题。每 30 分钟一次上下文压缩，信息永久丢失" - AI Agent Brian | [#28930](https://github.com/openclaw/openclaw/issues/28930) |
| **容器化部署** | "Docker 镜像不包含 brew，选择 openai-whisper 技能立即失败" | [#14593](https://github.com/openclaw/openclaw/issues/14593) |
| **企业网络环境** | "Clash TUN 模式的 fake-ip 被 SSRF 防护阻断，web_fetch 完全不可用" | [#48080](https://github.com/openclaw/openclaw/issues/48080) |
| **多平台团队** | "我们有 macOS、iOS、Android，但 Linux 和 Windows 缺失，功能不对等" | [#75](https://github.com/openclaw/openclaw/issues/75) |
| **认证配置** | "升级后所有 provider 报 No API key，生产环境完全中断" | 多个 401 Issue |

### 满意度亮点

- **快速修复认证危机**：用户认可维护团队对 #55672 等问题的 24 小时响应
- **TUI 体验**：`/model` 命令等交互设计获正面反馈（尽管存在 #29572 的 bug）

### 不满意集中区

- **Discord 可靠性**："每 35 分钟崩溃一次"（#54931）
- **工具执行透明度**："声称执行但实际无调用"（#40069）
- **配置迁移体验**：破坏性变更缺乏平滑过渡

---

## 8. 待处理积压

### 需要维护者关注的重要 Issue

| Issue | 天数 | 风险 | 建议行动 |
|:---|:---:|:---|:---|
| [#75 - Linux/Windows 客户端](https://github.com/openclaw/openclaw/issues/75) | 87天 | 平台生态分裂 | 确认 #56005 里程碑，发布技术预览计划 |
| [#28930 - Memory v2 设计](https://github.com/openclaw/openclaw/issues/28930) | 30天 | 长期运行 Agent 不可用 | 纳入 v2026.4 路线图，分配架构师 |
| [#49971 - Agent 身份验证 RFC](https://github.com/openclaw/openclaw/issues/49971) | 11天 | 企业合规门槛 | 安排安全架构评审，回应 ERC-8004 兼容性 |
| [#29254 - 技能检查在网关而非沙箱执行](https://github.com/openclaw/openclaw/issues/29254) | 29天 | 容器化部署阻塞 | 标记为 `good first issue`，引导社区贡献 |
| [#29572 - /model 命令静默失败](https://github.com/openclaw/openclaw/issues/29572) | 29天 | 核心交互 bug | 与 #56673 sessions_await 协调修复 |
| [#29134 - ACP runtime Windows 不可用](https://github.com/openclaw/openclaw/issues/29134) | 30天 | Windows 生态落后 | 关联 #56285，统一 Windows 支持计划 |

### 维护者行动建议

1. **本周优先**：验证 #55909 等认证修复是否完全解决 #23538 (Anthropic) 和 #34830 (OpenRouter)
2. **本月规划**：Discord 连接层重构，合并 #13688 #54729 #54931 #55346 的根因分析
3. **下季度承诺**：#75 的 Linux 原生客户端公开 beta 时间表

---

*日报生成时间：2026-03-29 | 数据来源：GitHub API 快照 | 项目地址：https://github.com/openclaw/openclaw*

---

## 横向生态对比

# 个人 AI 助手开源生态横向对比分析报告
**分析日期：2026-03-29**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态正处于**从"功能可用"向"生产可靠"跃迁的关键期**。头部项目（OpenClaw、NanoBot、Moltis）日均处理 30-50 个 PR，聚焦稳定性修复与安全加固；腰部项目（CoPaw、PicoClaw）在快速功能扩张中积累工程债务；新兴项目（TinyClaw、ZeptoClaw）以"零积压"的敏捷姿态探索差异化场景。整体呈现**三大共性张力**：多平台原生客户端需求与资源投入的矛盾、LLM Provider 生态碎片化与统一抽象的挑战、Agent 自主性与可控性之间的安全边界博弈。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 版本发布 | 健康度评估 | 关键信号 |
|:---|:---:|:---:|:---|:---|:---|
| **OpenClaw** | 500 更新 | 500 更新 | v2026.3.28-beta.1 | ⚠️ 高活跃/高压力 | 认证回归危机，24h 内 5 个紧急修复 |
| **NanoBot** | 21 (18 活跃) | 38 (25 待合并) | 无 | 🟡 活跃/质量波动 | post6 引入 4 项回归，需热修复 |
| **ZeroClaw** | 50 (20 活跃) | 50 (25 待合并) | 无 | 🟢 高活跃/健康 | 企业功能（日历/CRM）与安全基建并行 |
| **PicoClaw** | 38 (16 活跃) | 89 (35 待合并) | nightly | 🟢 极高吞吐 | 安全债务清理 + OpenWrt 边缘部署 |
| **NanoClaw** | 数据未披露 | 32 (22 待合并) | 无 | 🟢 高活跃 | 多模态媒体处理（WhatsApp/Telegram） |
| **NullClaw** | 3 新开 | 8 (7 待合并) | 无 | 🟡 中等活跃 | Windows 平台可用性攻坚 |
| **IronClaw** | 9 更新 | 50 (37 待合并) | 无 | 🟡 活跃/响应落差 | 安全修复自动化 vs 用户功能诉求响应慢 |
| **LobsterAI** | 数据未披露 | 12 合并 | 2026.3.29 | 🟢 稳定发布 | 配置持久化架构争议 |
| **TinyClaw** | 7 关闭 | 15 合并 | 无 | 🟢 **零积压** | 阶段性代码冻结，发布就绪 |
| **Moltis** | 8 关闭 | 13 合并 | 4 个连续版本 | 🟢 高频交付 | 零新增 Issue，闭环效率极高 |
| **CoPaw** | 39 (35 活跃) | 24 (11 待合并) | 无 | ⚠️ 高活跃/债务累积 | 3 个 P0 稳定性问题 5 天无响应 |
| **ZeptoClaw** | 1 新开 | 2 待合并 | 无 | 🟡 低活跃/聚焦 | 单开发者深度迭代 |
| **EasyClaw/RivonClaw** | 2 重复 Bug | 0 | v1.7.8 | 🔴 维护性停滞 | 核心功能阻塞，无修复 PR |

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 表现 | 生态对比 |
|:---|:---|:---|
| **社区规模** | 24h 500 Issues + 500 PRs，绝对量级领先 | 2-10 倍于 NanoBot/Moltis，但密度稀释 |
| **技术路线** | **"全栈统一运行时"**：Web-UI/Gateway/CLI/Commands/Agents 多模块整合（PR #56665） | NanoBot 侧重"配置即代码"开发者体验；Moltis 聚焦"Channels 场景"的群聊协作；TinyClaw 探索"TinyOffice 产品化" |
| **核心优势** | ① **响应速度**：认证危机 24h 内 5 PR 修复；② **协议前瞻性**：OpenResponses 协议暴露 reasoning 内容；③ **并行编排**：`sessions_await` 填补多 Agent 工作流缺口 | 对比 IronClaw 的"HTTP 工具层稳定性"落差、CoPaw 的"CPU 100% 空转"5 天无响应 |
| **结构性压力** | 破坏性变更频繁（Qwen OAuth 废弃）、Discord 通道系统性不稳定（4+ Issues 集群）、平台公平性争议（Linux/Windows 原生客户端 #75 积压 87 天） | Moltis 以"高频小版本"策略缓解升级焦虑；ZeroClaw 以 HMAC 工具收据等安全创新建立差异化 |

**定位判断**：OpenClaw 是生态的**"创新压力测试场"**——新功能（并行编排、推理透明化）首发验证，但稳定性代价由大规模用户承担；适合追求前沿能力的早期采用者，而非保守的生产环境部署。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 紧迫程度 |
|:---|:---|:---|:---:|
| **多平台原生客户端** | OpenClaw (#75, 66👍), NanoClaw (Apple Container #1523), NullClaw (Windows WebSocket #739), PicoClaw (Termux/OpenWrt) | 非苹果生态用户要求功能对等，边缘设备（路由器/IoT）部署需求涌现 | 🔥 极高 |
| **LLM Provider 生态碎片化治理** | OpenClaw (Qwen OAuth 废弃), NanoBot (post6 回归 4 项), Moltis (#514 模型选择失效), CoPaw (#2298 Ollama 困难) | 统一发现逻辑、动态参数适配、本地模型友好配置 | 🔥 极高 |
| **Agent 长期记忆与上下文管理** | OpenClaw (#28930 Memory v2), Moltis (#503 会话召回), ZeptoClaw (#460 压缩重构), CoPaw (#2449 长文档截断) | 突破 token 限制、信息永久丢失、跨会话状态持久化 | 🔥 高 |
| **多模态媒体处理** | NanoClaw (#1522 WhatsApp 媒体, #1507 Telegram 媒体), PicoClaw (#2137 实时任务列表), LobsterAI (文档解析) | 语音/图片/视频的原生处理，非文本交互成为标配 | 🌡️ 中高 |
| **安全与可控性边界** | ZeroClaw (#4943 HMAC 防幻觉), IronClaw (4 个安全 Issue 自动化关闭), NanoBot (Matrix E2EE #1681), OpenClaw (#53870 VirusTotal 阻塞) | 工具执行证明、密钥管理、沙箱隔离、提示词注入防护 | 🌡️ 中高 |
| **配置管理与持久化** | LobsterAI (#1006 配置重置争议), OpenClaw (doctor --fix 生成数千备份), CoPaw (版本升级后配置断裂) | 用户自定义 vs 防御性设计的架构冲突 | 🌡️ 中 |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户画像 | 技术架构特征 |
|:---|:---|:---|:---|
| **OpenClaw** | 全栈统一运行时、并行 Agent 编排、协议标准化 | 追求前沿能力的开发者、多 Agent 工作流构建者 | 多模块整合（Web/Gateway/CLI），破坏性变更容忍度高 |
| **NanoBot** | 配置即代码、多通道（Telegram/Discord/Matrix）稳定性 | 开发者优先的 self-host 用户、IM 集成场景 | Rust + TOML 配置，post6 SDK 迁移引发兼容性阵痛 |
| **Moltis** | Channels 群聊协作场景、高频小版本交付、本地优先 | 企业/社区群组管理员、隐私敏感型用户 | GraphQL + 动态服务绑定，"零 Issue 积压"运维文化 |
| **ZeroClaw** | 企业功能（日历/CRM）、安全基础设施（HMAC/密钥管理） | B2B 场景、合规要求严格的组织 | Rust 为主，装饰器模式工具系统（RateLimitedTool/PathGuardedTool） |
| **TinyClaw** | TinyOffice 产品化、curl 一键安装、Docker 生产就绪 | 终端用户（非开发者）、家庭助理场景 | Node.js/TypeScript，Web 控制面板为核心入口 |
| **PicoClaw** | 边缘部署（OpenWrt/Termux）、安全债务清理、多平台兼容 | IoT/路由器开发者、中文市场用户 | Go 为主，Agent Refactor Phase 2 路线图明确 |
| **CoPaw** | 首次贡献者友好（#2291 任务清单）、钉钉/飞书企业集成 | 中国本土企业用户、AgentScope 生态迁移者 | Python 为主，功能扩张快于稳定性建设 |
| **ZeptoClaw** | 长会话可靠性、Telegram 场景深耕 | 研究型任务用户、轻量级 self-host | 单开发者深度迭代，上下文压缩多层防御策略 |
| **IronClaw** | 安全自动化（CI 审查）、自托管 LLM 支持、架构重构（执行引擎 v2） | NEAR 生态用户、安全优先的开发者 | Rust，前端抽离为独立 crate，与上游 OpenClaw 254 commits 差距 |

---

## 6. 社区热度与成熟度分层

| 层级 | 项目 | 特征 | 阶段判断 |
|:---|:---|:---|:---|
| **S 级：生态领导者** | OpenClaw | 量级绝对领先，但稳定性债务与社区公平性争议并存 | **创新压力测试期** |
| **A 级：快速迭代者** | Moltis, ZeroClaw, NanoClaw, PicoClaw | 高频交付、闭环效率极高、技术债务控制良好 | **质量巩固期** |
| **B 级：功能扩张期** | CoPaw, NanoBot, LobsterAI | 功能丰富但工程债务累积，稳定性问题响应滞后 | **债务偿还窗口期** |
| **C 级：聚焦打磨期** | TinyClaw, ZeptoClaw | 零积压、单点突破，但社区广度有限 | **产品化冲刺期** |
| **D 级：维护性停滞** | EasyClaw/RivonClaw, NullClaw | 核心功能阻塞、无修复响应、资源投入不足 | **生存危机期** |

**关键观察**：IronClaw 呈现**"A 级技术投入，C 级用户响应"**的落差——安全修复自动化程度高，但 #1676 HTTP 工具层问题 10 条评论无核心开发者回应，存在贡献者流失风险。

---

## 7. 值得关注的趋势信号

| 趋势 | 信号来源 | 对开发者的参考价值 |
|:---|:---|:---|
| **"本地优先"成为新默认** | Moltis (Prompt Caching + Fireworks.ai + 本地 LLM 优化)、PicoClaw (OpenWrt 官方支持)、NanoBot (Ollama 回归 #2570) | 设计时优先考虑离线能力、边缘部署、自托管成本优化，而非仅优化云端 API 调用 |
| **配置即代码 vs 防御性设计的张力** | LobsterAI (#1006 用户 cron workaround 争议)、OpenClaw (doctor --fix 过度备份) | 用户自主权与系统稳定性的权衡需要显式设计，而非隐性强制；考虑"模板合并策略"替代"覆盖策略" |
| **Agent 可观测性从"调试工具"变为"核心功能"** | ZeptoClaw (#461 "沉默即故障" → #462 进度反馈)、CoPaw (#2293 QA Agent 失控)、TinyClaw (#193 实时任务列表) | 长任务需要流式状态推送、工具执行需要实时反馈、失败时需要降级输出而非静默 |
| **多模态从"增值功能"变为"基础能力"** | NanoClaw (WhatsApp/Telegram 媒体 PR 集群)、PicoClaw (#2137 实时任务列表) | 语音/图片处理不再是"技能插件"，而是通道层的原生能力；需要重新设计消息协议的媒体字段 |
| **安全从"合规检查"变为"架构内核"** | ZeroClaw (HMAC 工具收据 #4943)、IronClaw (CI 自动化安全审查)、NanoBot (Matrix E2EE #2596) | 工具执行证明、密钥代理化、沙箱隔离需要早期纳入架构，而非后期补丁 |
| **"零积压"作为竞争力指标** | TinyClaw (今日零待处理项)、Moltis (零新增 Issue) | 敏捷交付文化可能成为吸引贡献者的差异化因素，对比 OpenClaw 的 500 PR 积压压力 |

---

**报告结论**：生态整体向生产就绪演进，但分化加剧。建议技术决策者根据场景选择：追求前沿能力选 OpenClaw，追求稳定交付选 Moltis/ZeroClaw，追求边缘部署选 PicoClaw，追求产品化体验选 TinyClaw；同时警惕 CoPaw/NanoBot 的债务累积期风险。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-03-29

## 1. 今日速览

NanoBot 今日维持**高活跃开发状态**，24小时内产生 **21 条 Issues 更新**（18 活跃/新开，3 关闭）和 **38 条 PR 更新**（25 待合并，13 已合并/关闭），无新版本发布。社区聚焦 **v0.1.4.post6 版本的稳定性修复**，特别是 Kimi K2.5 思考模式、Matrix E2EE 认证、Telegram 渲染等关键问题。Microsoft Teams 频道集成经历重构后重新提交，iMessage 集成进入代码审查阶段。整体项目健康度良好，修复响应速度较快，但 post6 版本引入的回归问题需要持续关注。

---

## 2. 版本发布

**无新版本发布**

当前稳定版本仍为 **v0.1.4.post6**，该版本自发布以来已暴露多个回归问题（见第5节），建议用户关注 nightly 分支的修复进展。

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 影响 |
|:---|:---|:---|:---|
| [#2577](https://github.com/HKUDS/nanobot/pull/2577) | songsong-hui | Telegram 工具提示静默发送 + 代码标记 | 减少用户干扰，提升体验 |
| [#2580](https://github.com/HKUDS/nanobot/pull/2580) | songsong-hui | 修复空最终响应的兜底逻辑 | 消除 "I've completed processing but have no response" 尴尬回复 |
| [#2081](https://github.com/HKUDS/nanobot/pull/2081) → 关闭 | T3chC0wb0y | Microsoft Teams 集成（被 #2129 取代） | 为 #2600 清理历史包袱 |
| [#2212](https://github.com/HKUDS/nanobot/pull/2212) | EvanNotFound | 运行时密钥引用解析 | 基础设施安全强化 |
| [#2265](https://github.com/HKUDS/nanobot/pull/2265) | EvanNotFound | 环境变量引用保存语义加固 | 配置持久化可靠性 |
| [#2420](https://github.com/HKUDS/nanobot/pull/2420) | EvanNotFound | 心跳机制无状态化 | 解决 token 无限增长问题 |
| [#2425](https://github.com/HKUDS/nanobot/pull/2425) | holk26 | 部署配置向导 + 环境变量支持 | 大幅降低新手部署门槛 |
| [#2447](https://github.com/HKUDS/nanobot/pull/2447) | npodbielski | Matrix 流式响应支持 | 交互体验重大改进 |

**整体进展评估**：今日合并集中在**配置管理基础设施**和**用户体验打磨**两个维度，为后续功能扩展奠定稳定基础。

---

## 4. 社区热点

### 讨论最活跃的议题

| 排名 | Issue/PR | 评论数 | 核心诉求 |
|:---|:---|:---:|:---|
| 🔥1 | [#2240](https://github.com/HKUDS/nanobot/issues/2240) 思考模式开关 | 5 | 用户需要显式控制推理可见性，已关闭但需求持续 |
| 🔥2 | [#2570](https://github.com/HKUDS/nanobot/issues/2570) Ollama 本地配置 404 | 5 | **post6 回归**：本地模型连接故障，影响边缘部署场景 |
| 🔥3 | [#2590](https://github.com/HKUDS/nanobot/issues/2590) MiniMax 提供商失效 | 2 | **post6 回归**：第三方提供商配置解析变更 |
| 🔥4 | [#2568](https://github.com/HKUDS/nanobot/issues/2568) Telegram Markdown 渲染不稳定 | 2 | 流式响应与格式解析的时序竞争问题 |
| 🔥5 | [#2572](https://github.com/HKUDS/nanobot/issues/2572) 搜索提供商准入标准讨论 | 2 | 社区治理：建立 PR 审查规范，防止提供商膨胀 |

**背后信号**：v0.1.4.post6 的架构调整（OpenAI SDK 替换 LiteLLM）正在产生**连锁兼容性问题**，用户侧感知明显，需要更完善的迁移指南。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 优先级 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---:|
| 🚨 **P0-回归** | [#2579](https://github.com/HKUDS/nanobot/issues/2579) | Kimi K2.5 思考模式 `reasoning_content` 缺失导致请求失败 | **已有 PR** | [#2598](https://github.com/HKUDS/nanobot/pull/2598) |
| 🚨 **P0-回归** | [#2573](https://github.com/HKUDS/nanobot/issues/2573) | GitHub Copilot 登录失败（OAuth 头格式错误） | 待修复 | - |
| 🔴 **P1-回归** | [#2590](https://github.com/HKUDS/nanobot/issues/2590) | MiniMax 内置提供商配置解析失效 | 待修复 | - |
| 🔴 **P1-回归** | [#2570](https://github.com/HKUDS/nanobot/issues/2570) | Ollama 本地网关 18790 端口监听异常 | 待修复 | - |
| 🔴 **P1** | [#2583](https://github.com/HKUDS/nanobot/issues/2583) | `_find_legal_start` 越界错误 | **已有 PR** | [#2597](https://github.com/HKUDS/nanobot/pull/2597) |
| 🟡 **P2** | [#2568](https://github.com/HKUDS/nanobot/issues/2568) | Telegram Markdown 渲染间歇性失效 | 待修复 | - |
| 🟡 **P2** | [#2559](https://github.com/HKUDS/nanobot/issues/2559) | Telegram 长消息流式响应 `Message_too_long` | 待修复 | - |
| 🟡 **P2** | [#2591](https://github.com/HKUDS/nanobot/issues/2591) | CLI 终端 ANSI 转义序列重复输出 | 待修复 | - |
| 🟡 **P2** | [#1681](https://github.com/HKUDS/nanobot/issues/1681) | Matrix E2EE 会话密钥解密失败 | **已有 PR** | [#2596](https://github.com/HKUDS/nanobot/pull/2596) |

**风险评估**：post6 版本的 SDK 迁移引入 **4 项回归缺陷**，建议维护者优先发布 post7 热修复版本。

---

## 6. 功能请求与路线图信号

| 功能方向 | 代表 Issue/PR | 纳入可能性 | 关键障碍 |
|:---|:---|:---:|:---|
| **Microsoft Teams 官方集成** | [#2600](https://github.com/HKUDS/nanobot/pull/2600) | ⭐⭐⭐⭐⭐ 极高 | 已重构为 clean commit，待合并 |
| **iMessage 原生支持** | [#2539](https://github.com/HKUDS/nanobot/pull/2539) | ⭐⭐⭐⭐☆ 高 | Photon 依赖的本地/远程双模式设计完整 |
| **WhatsApp 语音消息原生支持** | [#2152](https://github.com/HKUDS/nanobot/issues/2152) | ⭐⭐⭐⭐☆ 高 | 已有社区技能实现，需官方桥接补丁支持 |
| **可插拔内存框架** | [#2515](https://github.com/HKUDS/nanobot/pull/2515) | ⭐⭐⭐☆☆ 中 | Mem0/Graphiti/Memobase 多后端，架构改动大 |
| **Cron 命令级执行** | [#2309](https://github.com/HKUDS/nanobot/issues/2309) | ⭐⭐⭐☆☆ 中 | 已有关闭 PR，需重新评估设计 |
| **心跳机制静默优化** | [#1443](https://github.com/HKUDS/nanobot/pull/1443) | ⭐⭐⭐⭐☆ 高 | 配置向后兼容，社区反馈积极 |
| **子代理官方配置文档** | [#2599](https://github.com/HKUDS/nanobot/issues/2599) | ⭐⭐⭐⭐⭐ 极高 | 纯文档缺口，零技术风险 |

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 用户原声 | 频率 |
|:---|:---|:---:|
| **版本升级恐惧** | "Was working in prior version. After upgrade to post 6..." [#2590](https://github.com/HKUDS/nanobot/issues/2590) | 🔴 高频 |
| **配置文档缺失** | "I've searched the issues and documentation, but there's no official description" [#2599](https://github.com/HKUDS/nanobot/issues/2599) | 🔴 高频 |
| **边缘部署困难** | Raspberry Pi + Ollama 本地模型连接失败 [#2570](https://github.com/HKUDS/nanobot/issues/2570) | 🟡 中频 |
| **多模态工具调用** | "I am not able to make it use a tool" - Home Assistant 集成 [#2588](https://github.com/HKUDS/nanobot/issues/2588) | 🟡 中频 |

### 满意度亮点

- Telegram 流式响应 "Before with v1.4.post5 update (everything working perfectly fine)" [#2568](https://github.com/HKUDS/nanobot/issues/2568)
- 社区技能生态活跃（Fish Audio WhatsApp 集成）[#2152](https://github.com/HKUDS/nanobot/issues/2152)

---

## 8. 待处理积压

### 需要维护者关注

| Issue/PR | 创建时间 | 阻塞原因 | 建议行动 |
|:---|:---:|:---|:---|
| [#1121](https://github.com/HKUDS/nanobot/issues/1121) Fallback 模型超时未触发 | 32天前 | 核心可靠性机制，影响生产部署 | 优先级提升至 P1 |
| [#1195](https://github.com/HKUDS/nanobot/pull/1195) Telegram 论坛线程支持 | 32天前 | 企业场景刚需，审查停滞 | 指定审查人 |
| [#2010](https://github.com/HKUDS/nanobot/pull/2010) WhatsApp 媒体收发 | 15天前 | 功能完整但测试覆盖待确认 | 明确合并标准 |
| [#2450](https://github.com/HKUDS/nanobot/issues/2450) MiniMax-M2.7 二次请求失败 | 5天前 | 标记为 good first issue 但无响应 | 分配导师或降级标签 |

---

*本日报基于 GitHub 公开数据生成，不代表项目官方立场。*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 | 2026-03-29

## 1. 今日速览

ZeroClaw 今日保持**高活跃度**：24小时内 50 个 Issues 更新（20 活跃/新开，30 关闭），50 个 PR 更新（25 待合并，25 已合并/关闭），无新版本发布。项目正处于**密集迭代期**，核心聚焦三大方向：Matrix 通道稳定性修复、工具系统架构重构（RateLimitedTool/PathGuardedTool 装饰器模式推广）、以及安全/可靠性增强（HMAC 工具执行收据、密钥管理 CLI）。社区对文档缺口（GitHub Copilot 配置、OpenAI 兼容流式设置）反馈强烈，多个 PR 已快速响应。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 项目推进 |
|:---|:---|:---|:---|
| [#4937](https://github.com/zeroclaw-labs/zeroclaw/pull/4937) | ninenox | 修复 TOML 配置键不一致：`[channels.xxx]` 作为主键，`[channels_config.xxx]` 作为别名 | **关键兼容性修复** — 解决 README 文档与实际配置键长期不一致问题，所有通道示例现可正常工作 |
| [#4921](https://github.com/zeroclaw-labs/zeroclaw/pull/4921) → 重开为 [#4943](https://github.com/zeroclaw-labs/zeroclaw/pull/4943) | singlerider | HMAC-SHA256 工具执行收据（首次实现关闭后优化重开） | **安全基础设施** — 为工具调用提供加密证明，防止 LLM 幻觉工具执行 |
| [#4527](https://github.com/zeroclaw-labs/zeroclaw/pull/4527) | theredspoon | 日历驱动的缺勤检测触发器（`CalendarPoller`, `NoShowEvent`） | **企业场景扩展** — 支持基于日历事件的 SOP 自动激活 |
| [#4493](https://github.com/zeroclaw-labs/zeroclaw/pull/4493) | theredspoon | `message_sent` Hook 在通道投递成功后触发 | **可观测性增强** — 完善消息生命周期追踪 |
| [#4507](https://github.com/zeroclaw-labs/zeroclaw/pull/4507) | theredspoon | 知识图谱客户关系节点（`Client`, `Contact`, `Interaction`） | **CRM 能力基建** — 为 B2B 场景提供客户管理数据模型 |
| [#4504](https://github.com/zeroclaw-labs/zeroclaw/pull/4504) | theredspoon | `Channel` trait 新增 `create_room()` / `invite_user()`，Matrix 通道实现 | **通道能力标准化** — 为程序化房间管理提供统一抽象 |
| [#4314](https://github.com/zeroclaw-labs/zeroclaw/pull/4314) | theredspoon | Slack 音频转录迁移至 `TranscriptionManager` | **技术债务清理** — 统一转录路径，支持 `default_provider` 和全局限制 |

**整体进展评估**：今日合并 PR 覆盖配置兼容性、安全基础设施、企业功能（日历/CRM）、通道标准化四大维度，项目正从"功能完备"向"企业级可靠"演进。

---

## 4. 社区热点

### 高讨论 Issues

| Issue | 评论 | 热度分析 |
|:---|:---|:---|
| [#4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657) Matrix channel: friction tracker | 9 评论 | **核心痛点聚合帖** — singlerider 维护的 Matrix 通道问题总览，涵盖 E2EE OTK 重试循环、线程上下文丢失等 6 项摩擦点，标记"优先接受 PR"。反映 Matrix 作为重点通道的稳定性压力 |
| [#4804](https://github.com/zeroclaw-labs/zeroclaw/issues/4804) Matrix 线程回复缺乏对话上下文 | 5 评论 | **已关闭** — 与 #4657 关联的具体问题，说明线程状态管理在 Matrix 实现中的复杂性 |
| [#4863](https://github.com/zeroclaw-labs/zeroclaw/issues/4863) open-codex 无法正常工作，文档缺失 | 4 评论 | **新用户障碍** — 配置 `openai-codex` provider 后无输出，用户无法自助排查，凸显 provider 特定文档缺口 |
| [#3513](https://github.com/zeroclaw-labs/zeroclaw/issues/3513) Agent 聊天发送多条消息而非单条响应 | 4 评论 | **已关闭** — 长期存在的 UX 问题，影响对话自然度 |
| [#4810](https://github.com/zeroclaw-labs/zeroclaw/issues/4810) History pruner 切断 tool_use/tool_result 对导致 Anthropic 400 错误 | 3 评论 | **已关闭** — 上下文修剪器的边界情况，影响长会话稳定性 |

### 高讨论 PRs

| PR | 范围 | 意义 |
|:---|:---|:---|
| [#4943](https://github.com/zeroclaw-labs/zeroclaw/pull/4943) HMAC 工具执行收据 | 跨 15+ 模块 | **安全创新** — 解决 LLM 幻觉工具调用的行业性难题，singlerider 主导设计 |
| [#4936](https://github.com/zeroclaw-labs/zeroclaw/pull/4936) 修复 auto_save 递归雪崩 | 跨 15+ 模块 | **关键稳定性修复** — 解决 #4916 报告的内存耗尽问题，影响所有启用 `auto_save` 和 `memory_recall` 的部署 |

**社区诉求总结**：Matrix 稳定性、文档完备性（尤其是 provider 配置）、内存/性能可靠性是三大核心关切。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|:---|
| **S1 - 工作流阻断** | [#4851](https://github.com/zeroclaw-labs/zeroclaw/issues/4851) | 🔴 Open | GitHub Copilot provider 配置无文档 | [#4941](https://github.com/zeroclaw-labs/zeroclaw/pull/4941) 已提交 |
| **S1 - 工作流阻断** | [#4808](https://github.com/zeroclaw-labs/zeroclaw/issues/4808) | ✅ Closed | Discord 通道将图片误处理为文本嵌入 | 已修复 |
| **S1 - 工作流阻断** | [#4644](https://github.com/zeroclaw-labs/zeroclaw/issues/4644) | ✅ Closed | Web 聊天两轮对话后失忆 | 已修复 |
| **S1 - 工作流阻断** | [#4296](https://github.com/zeroclaw-labs/zeroclaw/issues/4296) | ✅ Closed | 0.5.6+ 自定义 OpenAI 响应 provider 错误 | 已修复 |
| **S1 - 工作流阻断** | [#4946](https://github.com/zeroclaw-labs/zeroclaw/issues/4946) | 🔴 Open | v0.6.66 缺少 `rumqttc` 依赖导致编译失败 | 待响应 |
| **S1 - 工作流阻断** | [#4916](https://github.com/zeroclaw-labs/zeroclaw/issues/4916) | 🟡 Fix Ready | `auto_save` 存储 `[Memory context]` 导致递归内存耗尽 | [#4936](https://github.com/zeroclaw-labs/zeroclaw/pull/4936) 待合并 |
| **S2 - 降级行为** | [#4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657) | 🟡 In Progress | Matrix 通道多项摩擦点（E2EE、线程等） | 部分有 PR |
| **S2 - 降级行为** | [#4863](https://github.com/zeroclaw-labs/zeroclaw/issues/4863) | 🔴 Open | open-codex 无输出，文档缺失 | 待响应 |
| **S2 - 降级行为** | [#4810](https://github.com/zeroclaw-labs/zeroclaw/issues/4810) | ✅ Closed | History pruner 切断 tool 对 | 已修复 |
| **S2 - 降级行为** | [#4699](https://github.com/zeroclaw-labs/zeroclaw/issues/4699) | ✅ Closed | 无界对话历史映射导致内存增长 | 已修复 |
| **S2 - 降级行为** | [#4806](https://github.com/zeroclaw-labs/zeroclaw/issues/4806) | ✅ Closed | Matrix 线程上下文守护进程重启丢失 | 已修复 |
| **S2 - 降级行为** | [#4656](https://github.com/zeroclaw-labs/zeroclaw/issues/4656) | 🟡 Fix Ready | CI clippy 跳过可选功能警告 | [#4940](https://github.com/zeroclaw-labs/zeroclaw/pull/4940) 待合并 |
| **S2 - 降级行为** | [#4918](https://github.com/zeroclaw-labs/zeroclaw/issues/4918) | 🔴 Open | Dashboard 会话打开报错 `Cannot read properties of undefined` | 待响应 |
| **S3 - 次要问题** | [#4873](https://github.com/zeroclaw-labs/zeroclaw/issues/4873) | 🟡 Fix Ready | 飞书集成默认调用 LLM 而非 Agent | [#4950](https://github.com/zeroclaw-labs/zeroclaw/pull/4950) 待合并 |
| **S3 - 次要问题** | [#4864](https://github.com/zeroclaw-labs/zeroclaw/issues/4864) | ✅ Closed | 安全策略误拦截标准 shell 重定向 | 已修复 |

**稳定性评估**：今日 S1 问题 6 项（4 已关闭，2 有待合并修复），S2 问题 7 项（4 已关闭，3 有待合并修复）。核心风险在于 MQTT 依赖缺失（#4946）和 Dashboard JS 错误（#4918）尚无响应。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue/PR | 状态 | 纳入可能性 |
|:---|:---|:---|:---|
| **HMAC 工具执行收据**（防幻觉） | [#4830](https://github.com/zeroclaw-labs/zeroclaw/issues/4830) → [#4943](https://github.com/zeroclaw-labs/zeroclaw/pull/4943) | 🟡 PR 待合并 | **高** — singlerider 主导，跨模块实现，安全基础设施优先级 |
| **密钥管理 CLI**（`zeroclaw secret`） | [#4920](https://github.com/zeroclaw-labs/zeroclaw/pull/4920) | 🟡 PR 待合并 | **高** — 配置管理体验核心改进 |
| **SSRF 绕过白名单**（`allowed_private_hosts`） | [#4868](https://github.com/zeroclaw-labs/zeroclaw/issues/4868) → [#4945](https://github.com/zeroclaw-labs/zeroclaw/pull/4945) | 🟡 PR 待合并 | **高** — 企业内网场景刚需，镜像已有 `web_fetch` 实现 |
| **Markdown 内存自动清理** | [#4829](https://github.com/zeroclaw-labs/zeroclaw/issues/4829) | 🔴 Open | **中** — 边缘设备需求，需设计保留策略 |
| **禁用 LeakDetector 高熵令牌脱敏** | [#4832](https://github.com/zeroclaw-labs/zeroclaw/issues/4832) | 🔴 Open | **中** — 误报影响用户体验，配置开关即可 |
| **多模型设置与回退文档** | [#4872](https://github.com/zeroclaw-labs/zeroclaw/issues/4872) | ✅ Closed | 已关闭，文档需求 |
| **热重载配置 CLI** | [#3569](https://github.com/zeroclaw-labs/zeroclaw/issues/3569) | ✅ Closed | 已关闭，用户体验改进 |
| **内存命名空间隔离暴露给委托 Agent** | [#4870](https://github.com/zeroclaw-labs/zeroclaw/issues/4870) | ✅ Closed | 已关闭，多租户能力 |

**路线图信号**：安全（HMAC、密钥管理）、企业部署（SSRF 白名单、内存清理）、开发者体验（文档、配置）构成下一版本三大主题。

---

## 7. 用户反馈摘要

### 痛点
| 反馈 | 来源 |
|:---|:---|
| "GitHub Copilot 有提交记录但无文档，完全不知道怎么配置" | [#4851](https://github.com/zeroclaw-labs/zeroclaw/issues/4851) |
| "自定义 OpenAI 兼容 provider 需要 `stream=true` 但没文档说明怎么强制" | [#4646](https://github.com/zeroclaw-labs/zeroclaw/issues/4646) |
| "Matrix 加密房间完全崩溃，OTK 重试循环" | [#4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657) |
| "飞书集成后只调 LLM 不调 Agent，没有工具能力" | [#4873](https://github.com/zeroclaw-labs/zeroclaw/issues/4873) |
| "Raspberry Pi 编译 OOM，README 说 <$10 硬件可运行但没说编译要求" | [#4704](https://github.com/zeroclaw-labs/zeroclaw/issues/4704) |
| "Dashboard 打开会话就报错，完全无法使用" | [#4918](https://github.com/zeroclaw-labs/zeroclaw/issues/4918) |

### 满意点
| 反馈 | 来源 |
|:---|:---|
| "HMAC 收据设计很棒，解决幻觉问题" — 社区对 [#4943](https://github.com/zeroclaw-labs/zeroclaw/pull/4943) 技术方案认可 | PR 讨论 |
| 快速响应：Copilot 文档 PR [#4941](https://github.com/zeroclaw-labs/zeroclaw/pull/4941) 在 Issue 报告后 1 天内提交 | 时间线观察 |

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 风险 | 提醒 |
|:---|:---|:---|:---|
| [#4946](https://github.com/zeroclaw-labs/zeroclaw/issues/4946) `rumqttc` 依赖缺失 | 今日 | **高** — v0.6.66 标签版本无法编译 | 需紧急补丁版本或 yank |
| [#4918](https://github.com/zeroclaw-labs/zeroclaw/issues/4918) Dashboard JS 错误 | 今日 | **高** — 核心功能完全不可用 | 需前端维护者响应 |
| [#4863](https://github.com/zeroclaw-labs/zeroclaw/issues/4863) open-codex 文档缺失 | 昨日 | 中 — 新用户流失风险 | 可与 [#4941](https://github.com/zeroclaw-labs/zeroclaw/pull/4941) 模式复用 |
| [#4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657) Matrix 摩擦追踪 | 4 天前 | 中 — 长期积累技术债务 | 需定期更新进度，避免社区挫败感 |

---

**日报生成时间**：2026-03-29  
**数据来源**：Zeroclaw GitHub 仓库公开数据

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-03-29

## 1. 今日速览

PicoClaw 今日展现**极高活跃度**，24小时内处理 **38 条 Issues**（关闭 22 条，新开/活跃 16 条）和 **89 条 PR**（合并/关闭 54 条，待合并 35 条），代码吞吐量处于近期峰值。社区焦点集中在**安全加固**（4 项安全相关 Issue 批量关闭）、**多平台兼容性**（Windows/Termux/OpenWrt）及**工具链稳定性**（工具调用序列化、MCP 服务器兼容）。nightly 构建持续迭代，v0.2.4 分支进入稳定化冲刺阶段。

---

## 2. 版本发布

### 🌙 Nightly Build: v0.2.4-nightly.20260328.60d7ec20

| 属性 | 详情 |
|:---|:---|
| 版本号 | `v0.2.4-nightly.20260328.60d7ec20` |
| 类型 | 自动化构建（可能不稳定） |
| 变更对比 | [v0.2.4...main](https://github.com/sipeed/picoclaw/compare/v0.2.4...main) |

**⚠️ 使用建议**：此为 CI 自动构建版本，建议测试环境验证后再用于生产。

---

## 3. 项目进展

### ✅ 今日合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 项目意义 |
|:---|:---|:---|:---|
| [#2124](https://github.com/sipeed/picoclaw/pull/2124) | champly | **微信渠道稳定性**：持久化 context_token 到磁盘，解决重启后消息发送失败 | 消除微信渠道的状态丢失痛点，提升生产可靠性 |
| [#2130](https://github.com/sipeed/picoclaw/pull/2130) | GennKann | **OpenWrt 官方支持**：新增 LuCI Web 管理界面 | 回应 #1132 长期诉求，拓展路由器/IoT 部署场景 |
| [#2118](https://github.com/sipeed/picoclaw/pull/2118) | imalasong | **配置系统修复**：合并 `_secret` 编辑字段，修复飞书等渠道密钥保存失败 | 解决 v0.2.4 引入的回归问题 |
| [#1770](https://github.com/sipeed/picoclaw/pull/1770) | acapxasyraf | **国际化**：新增马来语文档 | 东南亚社区覆盖扩展 |

### 📊 整体推进评估

| 维度 | 进展 |
|:---|:---|
| **稳定性** | 微信持久化 + 配置修复，渠道可靠性显著提升 |
| **平台扩展** | OpenWrt 官方支持落地，边缘部署场景打开 |
| **安全债务** | 批量关闭 4 项安全 Issue，安全基线收紧 |
| **技术债务** | 工具调用序列化、MCP 兼容等修复进入 review 队列 |

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 核心诉求 | 状态 |
|:---|:---|:---:|:---|:---|
| 1 | [#1161](https://github.com/sipeed/picoclaw/issues/1161) Ollama 本地模型配置指南 | 18 | **本地 AI 部署文档缺失**：用户反复卡在"agent 运行但无响应" | ✅ 已关闭 |
| 2 | [#2107](https://github.com/sipeed/picoclaw/issues/2107) 工具调用被安全守卫误拦截 | 14 | **安全策略过度敏感**：`exec` 工具合法命令被误判为危险操作 | ✅ 已关闭 |
| 3 | [#1941](https://github.com/sipeed/picoclaw/issues/1941) 配置被意外清空 | 12 | **数据持久化可靠性**：Telegram 渠道触发配置丢失 | ✅ 已关闭 |

### 💡 诉求分析

- **#1161 深层信号**：本地模型（Ollama/llama.cpp）用户群体快速增长，但文档/示例配置跟不上，需建立"本地优先"的 onboarding 流程
- **#2107 深层信号**：安全守卫（safety guard）的启发式规则与真实使用场景冲突，需要更精细的策略分级或用户可配置的白名单

---

## 5. Bug 与稳定性

### 🐛 今日报告的问题（按严重程度排序）

| 严重程度 | Issue | 描述 | Fix PR 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#2136](https://github.com/sipeed/picoclaw/issues/2136) | 工具调用提取逻辑缺陷（`tool_call_extract.go`），可能导致工具调用丢失 | 作者称已提交 PR 但存在冲突，**待维护者协调** |
| 🔴 **高** | [#2001](https://github.com/sipeed/picoclaw/issues/2001) | v0.2.4 空闲时 CPU 占用过高（FreeBSD） | 无 PR，需性能分析 |
| 🟡 **中** | [#2105](https://github.com/sipeed/picoclaw/issues/2105) | 首次安装 gateway 无法启动（无 PID） | 无 PR，配置/文档问题 |
| 🟡 **中** | [#2080](https://github.com/sipeed/picoclaw/issues/2080) | Windows QQ 渠道无法使用 | 无 PR，平台兼容性问题 |
| 🟡 **中** | [#2052](https://github.com/sipeed/picoclaw/issues/2052) | 网页端飞书配置界面异常（Android Termux） | 无 PR，UI/环境兼容 |
| 🟡 **中** | [#1936](https://github.com/sipeed/picoclaw/issues/1936) | Termux 环境 Telegram 渠道失败 | 无 PR，移动端适配 |
| 🟢 **低** | [#1437](https://github.com/sipeed/picoclaw/issues/1437) | 手机热点网络下飞书消息间歇性丢失 | ✅ 已关闭（网络环境问题） |

### 🔧 待合并的关键修复 PR

| PR | 修复问题 | 状态 |
|:---|:---|:---|
| [#2128](https://github.com/sipeed/picoclaw/pull/2128) | MCP 服务器工具 schema 缺少 `properties` 字段导致严格 API 拒绝 | 待合并 |
| [#1460](https://github.com/sipeed/picoclaw/pull/1460) | OpenAI 兼容 provider 工具调用序列化格式错误（空 content） | 待合并（长期 open） |
| [#1814](https://github.com/sipeed/picoclaw/pull/1814) | Subagent 使用全局 provider 而非 per-agent 配置 | 待合并 |

---

## 6. 功能请求与路线图信号

### 🚀 新功能请求

| Issue | 领域 | 需求描述 | 纳入可能性评估 |
|:---|:---|:---|:---|
| [#2137](https://github.com/sipeed/picoclaw/issues/2137) | Agent 体验 | **实时任务列表**：通过消息编辑和反应工具展示多步骤任务进度 | ⭐⭐⭐⭐ 高 — 与 #1934 Multi-Agent 路线图直接相关，已有技能基础设施 |
| [#2030](https://github.com/sipeed/picoclaw/issues/2030) | 飞书渠道 | 文件下载目录可配置 + 智能去重 | ⭐⭐⭐ 中 — 用户体验优化，实现复杂度中等 |
| [#2045](https://github.com/sipeed/picoclaw/issues/2045) | Provider | 硅基流动（SiliconFlow）平台支持 | ⭐⭐⭐ 中 — 国产模型生态扩展，前缀匹配即可 |
| [#1328](https://github.com/sipeed/picoclaw/issues/1328) | Telegram | 原生表情反应替代文字回复（低噪音确认） | ⭐⭐ 低 —  nice-to-have，优先级标记为 low |

### 🗺️ 路线图信号

| 信号源 | 关键信息 |
|:---|:---|
| [#1934](https://github.com/sipeed/picoclaw/issues/1934) | **Agent Refactor Phase 2** 正式提出：Multi-Agent 协作、Agent 记忆、动态工具发现 |
| [#1940](https://github.com/sipeed/picoclaw/pull/1940) | Team 工具恢复并集成 SubTurn 机制，Phase 2 首个落地功能 |
| [#1755](https://github.com/sipeed/picoclaw/issues/1755) | SOUL.md 结构规范：从自由格式向可选 schema 演进，提升 Agent 可预测性 |

---

## 7. 用户反馈摘要

### 😊 满意点

> *"配置修复后飞书终于能正常保存密钥了"* — #2118 相关反馈

> *"OpenWrt 支持让路由器跑 Agent 成为可能"* — #2130 社区反应

### 😤 核心痛点

| 痛点 | 典型场景 | 代表 Issue |
|:---|:---|:---|
| **本地模型配置黑箱** | 按文档配置 Ollama 后 agent 静默失败，无错误提示 | #1161 |
| **安全策略不可控** | 合法脚本被安全守卫拦截，无法白名单绕过 | #2107 |
| **配置持久化不可靠** | 渠道切换/重启后配置丢失，需反复重新设置 | #1941 |
| **跨平台兼容性碎片化** | Windows/Termux/移动端问题集中爆发 | #2080, #1936, #2052 |
| **空闲资源占用异常** | v0.2.4 升级后 CPU 飙升 | #2001 |

### 🎯 使用场景洞察

- **边缘部署需求强烈**：OpenWrt 支持、Termux 运行、低功耗设备适配反复出现
- **企业/团队场景萌芽**：Multi-Agent 协作、任务进度可视化、网关编排协议（OpenClaw 兼容）进入需求池

---

## 8. 待处理积压

### ⏳ 长期未响应的重要项

| 类型 | 编号 | 描述 | 阻塞原因 | 建议行动 |
|:---|:---|:---|:---|:---|
| PR | [#1460](https://github.com/sipeed/picoclaw/pull/1460) | OpenAI 兼容工具调用序列化修复 | Open 15 天，与 #2136 工具调用问题相关 | 优先 review，可能解决一类兼容性问题 |
| PR | [#1814](https://github.com/sipeed/picoclaw/pull/1814) | Subagent provider 路由修复 | Open 8 天，涉及架构调整 | 协调与 #1934 Phase 2 的集成计划 |
| Issue | [#1934](https://github.com/sipeed/picoclaw/issues/1934) | Agent Refactor Phase 2 路线图 | 刚创建，需维护者确认优先级 | 标记为 `roadmap` 并分配负责人 |
| Issue | [#2001](https://github.com/sipeed/picoclaw/issues/2001) | v0.2.4 CPU 占用过高 | 无响应 3 天，生产环境影响 | 请求性能剖析数据，标记 `priority: high` |

### 📌 维护者关注提醒

- **安全债务**：今日关闭 4 项安全 Issue 由 SebastianBoehler 集中提交，建议建立安全响应 SLA
- **工具链稳定性**：#2136 工具调用提取缺陷 + #2128 MCP schema 修复 + #1460 序列化修复 形成工具链可靠性主题，建议专项跟进

---

*本日报基于 GitHub 公开数据生成，时间窗口：2026-03-28 至 2026-03-29*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-03-29

> 📊 数据周期：过去24小时 | 项目地址：[qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)

---

## 1. 今日速览

NanoClaw 今日呈现**高度活跃的开发态势**，32 个 PR 更新（22 个待合并）显示社区贡献热情高涨。核心焦点集中在**安全架构升级**（OneCLI Vault 迁移、OAuth 凭证代理化）与**多通道媒体能力补全**（WhatsApp/Telegram 媒体下载、Discord 图像支持）。基础设施层面，Apple Container 网络修复和任务调度可靠性改进已合并，但 SSL 证书过期问题暴露运维盲点。整体健康度良好，技术债务清理与功能扩张并行推进。

---

## 2. 版本发布

**无新版本发布** — 当前处于密集开发周期，预计待 OneCLI 迁移和核心安全 PR 合并后发布 v1.3.x。

---

## 3. 项目进展

### ✅ 今日合并/关闭的关键 PR（10 条）

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#1525](https://github.com/qwibitai/nanoclaw/pull/1525) | thamam | 添加 `.claude/launch.json` 开发配置 | 标准化 VS Code 调试体验，降低新贡献者门槛 |
| [#1523](https://github.com/qwibitai/nanoclaw/pull/1523) | gavrielc | **Apple Container 网络与 .env 挂载修复** | 解锁 Apple Silicon 原生容器支持，修复 `host.docker.internal` 硬编码问题 |
| [#1521](https://github.com/qwibitai/nanoclaw/pull/1521) | javexed | 本地 PWA 聊天通道（已关闭） | 探索自托管 Web 界面方向，可能以重构形式回归 |
| [#1513](https://github.com/qwibitai/nanoclaw/pull/1513) | fookhk | LazyLibrarian 书籍管理技能 | 扩展智能家居/媒体管理生态 |
| [#1508](https://github.com/qwibitai/nanoclaw/pull/1508) | SimonKvalheim | 审查代理容器资源泄漏修复 | 每个草稿节省 ~240MB 内存，生产环境稳定性提升 |
| [#1115](https://github.com/qwibitai/nanoclaw/pull/1115) | Nitrousbob | 会话自愈 + IPC 权限修复 | 解决 root/非 root 用户混合部署的静默失败 |
| [#1512](https://github.com/qwibitai/nanoclaw/issues/1512) | JanusD25 | 上游安全修复 cherry-pick（Issue 关闭） | 254 commits 差距中的 5 项关键安全修复已识别 |
| [#1511](https://github.com/qwibitai/nanoclaw/issues/1511) | JanusD25 | OneCLI Agent Vault 评估（Issue 关闭） | 凭证代理架构升级决策完成 |
| [#1510](https://github.com/qwibitai/nanoclaw/issues/1510) | JanusD25 | 周度上游审查流程（Issue 关闭） | 建立可持续的同步机制 |

**里程碑意义**：Apple Container 支持修复消除了平台锁定，任务调度可靠性修复（#1519 待合并）将解决长期存在的重复执行问题，为生产级部署扫清障碍。

---

## 4. 社区热点

### 🔥 高讨论度议题

| 议题 | 类型 | 热度指标 | 核心诉求分析 |
|:---|:---|:---|:---|
| [#1503](https://github.com/qwibitai/nanoclaw/issues/1503) | SSL 证书过期 | 3 评论，快速响应 | **运维基础设施缺口**：官方文档站 `nanoclaw.dev` 证书失效，反映发布流程缺少自动化监控。用户依赖该站点获取技能文档，直接影响采用体验 |
| [#1522](https://github.com/qwibitai/nanoclaw/issues/1522) | WhatsApp 媒体访问 | 新 Issue，0 评论但关联 PR | **多模态能力刚需**：Agent 无法处理语音/图片消息严重限制客服、家庭助理等场景，PR #1526 已快速响应 |
| [#1512](https://github.com/qwibitai/nanoclaw/issues/1512) | 上游同步策略 | 1 评论，战略性关闭 | **分叉管理张力**：Janus 分叉与上游 254 commits 差距引发架构决策讨论，社区需要清晰的贡献指南 |

**深层信号**：用户正将 NanoClaw 推向**生产级多模态助手**场景，对可靠性、媒体处理、跨平台部署的要求急剧提升。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | 修复进展 |
|:---|:---|:---|:---|
| 🔴 **高** | SSL 证书过期阻断文档访问 | [#1503](https://github.com/qwibitai/nanoclaw/issues/1503) Open | ❌ 无 PR，需运维介入 |
| 🔴 **高** | Gmail/Calendar OAuth 令牌容器内明文挂载 | [#1500](https://github.com/qwibitai/nanoclaw/issues/1500) Open | 🔄 PR [#1520](https://github.com/qwibitai/nanoclaw/pull/1520) 待合并（OneCLI Vault 迁移） |
| 🟡 **中** | 任务调度重复执行（>60s 任务） | 已知 | 🔄 PR [#1519](https://github.com/qwibitai/nanoclaw/pull/1519) 待合并 |
| 🟡 **中** | 非自回显通道消息历史丢失 | 已知 | 🔄 PR [#1518](https://github.com/qwibitai/nanoclaw/pull/1518) 待合并 |
| 🟢 **低** | Apple Container 网络不可用 | 已修复 | ✅ [#1523](https://github.com/qwibitai/nanoclaw/pull/1523) 已合并 |
| 🟢 **低** | 审查代理容器泄漏 | 已修复 | ✅ [#1508](https://github.com/qwibitai/nanoclaw/pull/1508) 已合并 |

**安全态势**：#1500 披露的提示词注入攻击向量（读取容器内 OAuth 令牌）是当前最大风险，OneCLI Vault 迁移为阻断性修复。

---

## 6. 功能请求与路线图信号

### 🎯 高优先级功能（已有实现 PR）

| 功能 | PR | 纳入下一版本概率 | 关键依赖 |
|:---|:---|:---|:---|
| WhatsApp 媒体下载器 | [#1526](https://github.com/qwibitai/nanoclaw/pull/1526) | ⭐⭐⭐⭐⭐ 极高 | 需合并后补充测试 |
| Telegram 媒体下载 | [#1507](https://github.com/qwibitai/nanoclaw/pull/1507) | ⭐⭐⭐⭐⭐ 极高 | 与 #1526 形成媒体处理矩阵 |
| Discord 通道 + 图像支持 | [#1517](https://github.com/qwibitai/nanoclaw/pull/1517) | ⭐⭐⭐⭐☆ 高 | 社区运营场景刚需 |
| NanoClaw 间点对点通信 | [#1516](https://github.com/qwibitai/nanoclaw/pull/1516) | ⭐⭐⭐⭐☆ 高 | 分布式 Agent 网络基础 |
| 群组级 MCP 服务器配置 | [#1515](https://github.com/qwibitai/nanoclaw/pull/1515) | ⭐⭐⭐⭐☆ 高 | 生态扩展关键能力 |

### 📡 路线图信号（Issue 阶段）

- **Signal 通道** ([#1121](https://github.com/qwibitai/nanoclaw/pull/1121))：隐私优先用户强烈需求，PR 已挂起 12 天，需维护者评审
- **Web 监控仪表板** ([#1514](https://github.com/qwibitai/nanoclaw/pull/1514), [#1524](https://github.com/qwibitai/nanoclaw/pull/1524))：两位贡献者撞车，需协调合并策略
- **定时脚本任务** ([#1190](https://github.com/qwibitai/nanoclaw/pull/1190))：运维自动化需求，PR 挂起 12 天

---

## 7. 用户反馈摘要

### 😫 痛点
> "WhatsApp 发图片给 Agent，完全没反应" — [#1522](https://github.com/qwibitai/nanoclaw/issues/1522)  
> 媒体处理缺口是**采用阻断器**，用户期望"像聊天一样自然的多模态交互"

> "nanoclaw.dev 证书坏了" — [#1503](https://github.com/qwibitai/nanoclaw/issues/1503)  
> 基础设施可信度影响专业用户评估

### 🎯 使用场景
- **家庭助理**：通过 Signal/WhatsApp 控制 Home Assistant（[#1515](https://github.com/qwibitai/nanoclaw/pull/1515) MCP 配置需求来源）
- **小型企业客服**：需要 Discord/Telegram 图像处理能力处理订单截图
- **开发团队**：多 NanoClaw 实例协作（[#1516](https://github.com/qwibitai/nanoclaw/pull/1516) 点对点通道）

### ✅ 满意点
- 技能即代码架构（skills-as-repos）获得贡献者认可
- `/init-onecli` 迁移工具降低架构升级成本

---

## 8. 待处理积压

### ⏰ 需维护者关注（>10 天无响应）

| PR/Issue | 创建 | 风险 | 建议行动 |
|:---|:---|:---|:---|
| [#1121 Signal 通道](https://github.com/qwibitai/nanoclaw/pull/1121) | 2026-03-16 (13天) | 贡献者流失风险 | 分配评审人或明确路线图优先级 |
| [#1190 定时脚本任务](https://github.com/qwibitai/nanoclaw/pull/1190) | 2026-03-17 (12天) | 运维场景覆盖缺口 | 与核心维护者确认设计一致性 |
| [#1115 IPC 权限修复](https://github.com/qwibitai/nanoclaw/pull/1115) | 已关闭 | — | 确认修复已纳入主分支 |

### 🚨 阻塞性 Issue

- **#1503 SSL 证书**：需立即运维响应
- **#1500 OAuth 安全**：待 #1520 合并后关闭

---

> 📌 **明日关注**：OneCLI Vault 迁移 PR (#1520) 合并进度、WhatsApp/Telegram 媒体 PR 测试反馈、Signal 通道评审决策。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-03-29

## 1. 今日速览

NullClaw 今日保持**高活跃度**，24小时内新增3条Issue与8条PR，其中7条PR待审阅。核心开发者 **manelsen** 贡献尤为突出，单日提交6条PR覆盖WebSocket修复、Windows打包优化、技能系统扩展等关键领域。Windows平台成为今日焦点——既有紧急Bug修复（WebSocket 1006断开），也有体验优化（eget下载文件名、zip归档分发）。社区方面，微信插件集成需求持续发酵（#714，7条评论），反映出亚太市场用户的强烈诉求。整体项目健康度良好，修复响应迅速，但PR积压量偏高，建议关注审阅带宽。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭 PR

| PR | 作者 | 状态 | 进展说明 |
|:---|:---|:---|:---|
| [#741](https://github.com/nullclaw/nullclaw/pull/741) Feature/anthropic only onboarding | jasonxmansour | **已关闭** | Anthropic专属引导流程实验，未达预期目标而关闭 |

### 关键待审 PR 进展

| PR | 核心贡献 | 项目推进价值 |
|:---|:---|:---|
| [#742](https://github.com/nullclaw/nullclaw/pull/742) 修复 Windows WebSocket 立即断开 | 将 `websocket` 依赖 vendor 化，针对性修复 code 1006 断开问题 | **阻断性修复**——解决 Windows 用户无法使用 Web 通道的回归问题 |
| [#738](https://github.com/nullclaw/nullclaw/pull/738) Windows 二进制 zip 归档打包 | 发布产物同时提供 `nullclaw-windows-x86_64.exe`（兼容）与 `nullclaw.zip`（内含重命名后的 `nullclaw.exe`） | **体验优化**——根本性解决 #737 报告的 eget 下载后需手动重命名问题 |
| [#735](https://github.com/nullclaw/nullclaw/pull/735) Web 发现式技能安装 | 支持 `nullclaw skills install https://...` 与 `.well-known/nullclaw-skill.json` 自动发现 | **生态扩展**——降低技能分发门槛，为技能市场铺路 |
| [#727](https://github.com/nullclaw/nullclaw/pull/727) 交互式多 Provider 模型选择 | Telegram/Discord/Slack/Lark 会话内 `/model` 分页选择，保留跨页 Provider 上下文 | **交互升级**——解决模型列表过长时的选择痛点 |
| [#725](https://github.com/nullclaw/nullclaw/pull/725) CLI 引导流程优化 | 移除模型获取20条限制，`:free` 优先+字典序排序，优化模型步骤向导 | **入门体验**——降低新用户配置摩擦 |

**今日里程碑**：Windows 平台可用性获得系统性提升（Bug修复+分发优化），技能系统向 Web 化分发迈出关键一步。

---

## 4. 社区热点

### 最活跃讨论：微信插件集成需求 [#714](https://github.com/nullclaw/nullclaw/issues/714)

| 指标 | 数据 |
|:---|:---|
| 评论数 | **7条**（24小时内新增） |
| 创建时间 | 2026-03-25 |
| 最后更新 | 2026-03-28 |

**核心诉求分析**：
- **市场驱动**：微信在中国大陆及东南亚的庞大用户基础
- **竞争压力**：其他 OpenClaw 分支已实现该功能，NullClaw 存在生态位流失风险
- **技术路径**：官方 WeChat 插件已发布，支持与 OpenClaw 集成，降低实现门槛

**维护者信号**：尚未有核心开发者正式回应，但高互动量表明社区需求真实且紧迫。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **P0-阻断** | [#739](https://github.com/nullclaw/nullclaw/issues/739) | Windows 原生环境 WebSocket 立即断开（code 1006），Web 通道完全不可用 | 待验证 | [#742](https://github.com/nullclaw/nullclaw/pull/742) 已提交，待合并 |
| 🟡 **P2-体验** | [#737](https://github.com/nullclaw/nullclaw/issues/737) | `eget` 下载的 Windows 二进制保留平台后缀，需手动重命名 | 已解决 | [#738](https://github.com/nullclaw/nullclaw/pull/738) 提供 zip 归档方案 |

**风险评估**：#739 为近期回归问题，影响 Windows 全量用户；#742 采用 vendor 化依赖的策略虽能快速修复，但需关注长期维护成本。

---

## 6. 功能请求与路线图信号

| 需求来源 | 功能方向 | 纳入可能性 | 依据 |
|:---|:---|:---|:---|
| #714 微信插件 | 亚太市场即时通讯集成 | **高** | 官方插件已存在、竞品已实现、社区声量高 |
| #735 Web 技能发现 | 去中心化技能分发 | **已提交** | PR 待审，技术方案完整（.well-known 发现机制） |
| #727/#725 模型选择优化 | 降低多 Provider 配置复杂度 | **已提交** | 双 PR 形成完整体验闭环（CLI引导 + 会话内切换） |
| #676 入站消息防抖 | 防刷屏/降低 API 成本 | **已提交** | 覆盖 Telegram/Discord/CLI，默认 3000ms 可配置 |

**下一版本信号**：技能生态（Web发现）+ 跨平台体验（Windows修复+模型选择）构成 2026 Q2 核心主题。

---

## 7. 用户反馈摘要

### 痛点
- **Windows 二等公民体验**："每次升级后 WebSocket 就断"（#739）、下载后还要 `mv` 重命名（#737）
- **模型配置认知负荷**："列表太长找不到免费模型"、"Provider 切换后不知道当前选中哪个"

### 场景
- **企业/团队部署**：微信集成需求暗示国内团队协作场景
- **自动化/CI 使用**：eget 用户偏好表明有 headless 部署需求

### 满意度
- 快速响应：#739 报告当日即有修复 PR（#742）
- 开发者活跃度：manelsen 的单日多 PR 输出展现项目活力

---

## 8. 待处理积压

| 类型 | 条目 | 风险 | 建议动作 |
|:---|:---|:---|:---|
| 高互动需求 | [#714](https://github.com/nullclaw/nullclaw/issues/714) 微信插件 | 竞品分流、社区流失 | 维护者正式回应技术可行性，或创建 tracking issue |
| 审阅积压 | 7条待合并 PR | 贡献者疲劳、代码漂移 | 优先审阅 #742（阻断性修复）、#738（体验优化） |
| 长期功能 | #676 防抖（创建 2026-03-21） | 功能完整度 | 确认测试覆盖后合并 |

---

*日报生成时间：2026-03-29 | 数据来源：github.com/nullclaw/nullclaw*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-03-29

## 1. 今日速览

IronClaw 今日保持**高活跃度**，50 个 PR 更新（37 待合并，13 已处理）和 9 个 Issues 更新显示核心团队持续推进。安全加固成为主线：数据库错误信息泄露、OAuth 状态验证、敏感路径保护等 3 个安全 Issue 被关闭，同时 4 个安全相关 PR 正在审查中。架构层面，前端抽离为独立 crate（`ironclaw_frontend`）和统一执行引擎 v2（`ironclaw_engine`）两大重构并行推进，显示项目正为规模化扩展做深度准备。暂无新版本发布。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 今日关闭的重要 PR

| PR | 作者 | 核心贡献 | 影响 |
|:---|:---|:---|:---|
| [#1650](https://github.com/nearai/ironclaw/pull/1650) | ilblackdragon | **Routine 执行可靠性全面重构** — 修复 full_job routine 的自对话循环、输出丢失、无限重试等问题 | 解决生产环境 routine 不稳定的核心痛点，为自动化工作流奠定基础 |

### 今日关闭的安全 Issue（CI 自动审查）

| Issue | 严重度 | 修复内容 | 关联 PR |
|:---|:---|:---|:---|
| [#1702](https://github.com/nearai/ironclaw/issues/1702) | **HIGH** | 数据库错误详情泄露至 API 客户端 — 错误消息直接格式化 DB 异常 | #1719 |
| [#1443](https://github.com/nearai/ironclaw/issues/1443) | MEDIUM | 遗留 OAuth 状态验证过于宽松 | #1439 |
| [#1303](https://github.com/nearai/ironclaw/issues/1303) | MEDIUM | WASM 工具向 LLM 暴露过度宽松的 `{}` schema（Brave 搜索等） | — |
| [#1444](https://github.com/nearai/ironclaw/issues/1444) | LOW | 状态参数重写存在脆弱的字符串回退 | #1439 |

**整体推进评估**：今日关闭 4 个安全债务，合并 1 个可靠性关键修复，项目安全基线和生产稳定性均有实质性提升。

---

## 4. 社区热点

### 讨论最活跃的 Issue

| 排名 | Issue | 评论数 | 核心诉求 |
|:---|:---|:---|:---|
| 🔥 1 | [#1676](https://github.com/nearai/ironclaw/issues/1676) HTTP 工具 routine 错误 — Telegram Bot 半工作状态 | **10 条** | 用户 jamieduk 持续反馈：对比 OpenClaw 的成熟方案，IronClaw 的 HTTP 工具在轮询 Telegram 消息时仍失败，质疑工具层稳定性 |
| 2 | [#1673](https://github.com/nearai/ironclaw/issues/1673) 飞书/Lark 通道卡在"等待配对"状态 | 1 条 | 企业 IM 集成阻断，配对码流程缺失 |

**诉求分析**：#1676 的高评论量反映**工具层与通道层的集成摩擦**是用户当前最大痛点 — 用户明确对比竞品（OpenClaw），压力显著。开发者需优先回应 HTTP 工具在轮询场景下的可靠性，或提供明确的迁移/替代方案。

---

## 5. Bug 与稳定性

| 严重度 | Issue/PR | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|:---|
| **HIGH** | [#1702](https://github.com/nearai/ironclaw/issues/1702) | ✅ **已关闭** | 数据库错误信息泄露 — 安全风险 | [#1719](https://github.com/nearai/ironclaw/pull/1719) 审查中 |
| **HIGH（用户感知）** | [#1676](https://github.com/nearai/ironclaw/issues/1676) | 🟡 **开放** | HTTP 工具 routine 持续错误，Telegram 集成失败 | 无明确 PR |
| MEDIUM | [#1673](https://github.com/nearai/ironclaw/issues/1673) | 🟡 **开放** | 飞书/Lark 通道配对流程断裂 | 无 |
| MEDIUM | [#1303](https://github.com/nearai/ironclaw/issues/1303) | ✅ **已关闭** | WASM 工具 schema 类型丢失 | — |

**稳定性信号**：安全层面的 HIGH 问题已被 CI 捕获并修复，但**用户侧的功能性 HIGH 问题（#1676）缺乏响应**，存在体验落差风险。

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 内容 | 纳入可能性 |
|:---|:---|:---|:---|
| [#1731](https://github.com/nearai/ironclaw/issues/1731) | 度量优化 | 用 `pass@k` 和 `pass^k` 替代 `pass_rate`，更准确反映 LLM 评测结果 | **高** — 评估基础设施的关键改进，无破坏性 |
| [#1350](https://github.com/nearai/ironclaw/issues/1350) | 体验优化 | LLM Provider 热重载（无需重启） | **中** — 依赖 #1119 配置统一化前置 |
| [#1119](https://github.com/nearai/ironclaw/issues/1119) | 架构债务 | 统一 5 种配置源（env/TOML/DB/JSON/CLI），为热重载铺路 | **高** — 明确标记为 #86 前置，P2 优先级 |
| [#1557](https://github.com/nearai/ironclaw/pull/1557) | 架构重构 | **统一 Thread-Capability-CodeAct 执行引擎 v2** — 43 文件、7275 行 Rust，替换 10 个碎片化抽象 | **战略级** — 并行开发中，通过桥接适配器逐步切换 |
| [#1725](https://github.com/nearai/ironclaw/pull/1725) | 架构重构 | **前端抽离为独立 crate + Widget 系统** — 支持企业定制 UI | **战略级** — 今日新建，与 #1723 元数据驱动工作空间配合 |

**路线图判断**：配置系统统一（#1119）→ 热重载（#1350）→ 执行引擎 v2（#1557）→ 可扩展前端（#1725）形成清晰的**架构演进链条**，预计 Q2-Q3 逐步落地。

---

## 7. 用户反馈摘要

### 痛点
> *"Updated ironclaw again today trying to pair telegram bot and have ironclaw auto poll for new messages! and still fails! **openclaw knows how to do this perfect from day 1** but ironclaw still fails due to tool issue!"*
> — [#1676](https://github.com/nearai/ironclaw/issues/1676) jamieduk

**核心不满**：HTTP 工具层稳定性不及竞品，反复更新未解决，用户耐心消耗中。

> *"the channel remains in an **Awaiting Pairing state indefinitely**. It appears the system does not prompt the user with a pairing code"*
> — [#1673](https://github.com/nearai/ironclaw/issues/1673) sunglow666

**企业场景阻断**：飞书/Lark 集成流程不完整，缺失关键 UX 步骤。

### 满意/期待
- 安全加固获 CI 自动化保障（#1702 等快速关闭）
- 自托管 LLM 支持改进（#1696 `LLM_ALLOW_LOCAL_NETWORK`）回应了本地部署需求

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 状态 | 风险提示 |
|:---|:---|:---|:---|
| [#1676](https://github.com/nearai/ironclaw/issues/1676) HTTP 工具 routine 错误 | 2026-03-26 | 开放，10 评论 | **用户情绪升级**，竞品对比压力，需 48 小时内核心开发者回应 |
| [#1119](https://github.com/nearai/ironclaw/issues/1119) 配置源统一 | 2026-03-13 | 开放，P2 | 阻塞热重载、通道启停等多个体验功能，建议提升优先级 |
| [#944](https://github.com/nearai/ironclaw/pull/944) Discord Gateway WASM 通道 | 2026-03-11 | 开放，XL 规模 | 社区贡献的大型功能，审查周期过长可能挫伤贡献者积极性 |
| [#1549](https://github.com/nearai/ironclaw/pull/1549) Slack Socket Mode | 2026-03-21 | 开放 | NAT 友好连接方案，企业部署刚需，建议加速审查 |

---

**日报生成时间**：2026-03-29  
**数据基准**：GitHub API 过去 24 小时活动

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-03-29

> **项目**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
> **日期**: 2026-03-29  
> **分析师**: AI 智能体与个人 AI 助手领域开源项目分析师

---

## 1. 今日速览

LobsterAI 今日保持**高活跃度开发节奏**，24小时内完成 **12 个 PR 合并/关闭**，发布 **2026.3.29 版本**，核心聚焦**稳定性修复与用户体验优化**。社区反馈呈现**两极分化**：一方面 MCP 生态扩展加速（SSE/流式HTTP支持、Notion集成修复），另一方面**配置持久化问题**成为用户痛点，3个相关 Issue 被密集提交。整体项目健康度良好，但需关注配置管理架构的技术债务。

---

## 2. 版本发布

### [2026.3.29](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.3.29) 已发布

| 变更类型 | 内容 | 影响面 |
|---------|------|--------|
| **feat** | [AskUserQuestion 插件 — 删除确认弹窗与结构化用户交互](https://github.com/netease-youdao/LobsterAI/pull/942) | 协作工作流：人机交互更安全，避免误删 |
| **refactor** | [消息导航重构为迷你轨道样式](https://github.com/netease-youdao/LobsterAI/pull/988) | UI/UX：对话导航更紧凑高效 |
| **fix** | [修复导出日志挂起及 "reply was never sent" 错误](https://github.com/netease-youdao/LobsterAI/pull/xxx) | 稳定性：解决日志系统死锁 |

**迁移注意事项**：消息导航样式变更可能影响自定义主题用户，建议验证 CSS 覆盖兼容性。

---

## 3. 项目进展

### 核心合并 PR（按技术领域分类）

| 领域 | PR | 贡献者 | 进展说明 |
|-----|-----|--------|---------|
| **MCP 生态** | [#1002](https://github.com/netease-youdao/LobsterAI/pull/1002) 移除 McpBridgeServer secret 鉴权 | @liuzhq1986 | 根治 app 重启后 401 问题，绑定 127.0.0.1 保障本地安全 |
| | [#1004](https://github.com/netease-youdao/LobsterAI/pull/1004) MCP & Ask Question 修复 | @liuzhq1986 | 配套修复，完善 MCP 工具链 |
| **OpenClaw 稳定性** | [#894](https://github.com/netease-youdao/LobsterAI/pull/894) 修复模型名称丢失与 Gateway 无限重启 | @Aoxiang-001 | **关键修复**：阻断配置错误导致的级联故障 |
| | [#997](https://github.com/netease-youdao/LobsterAI/pull/997) 排除 stream=error 诊断事件干扰 | @liuzhq1986 | 消除 "still running" 误报 |
| **IM 平台** | [#984](https://github.com/netease-youdao/LobsterAI/pull/984) / [#994](https://github.com/netease-youdao/LobsterAI/pull/994) 小蜜蜂迁移至 OpenClaw 插件 | @nmgwddj | 架构统一：删除 ~994 行独立代码，与 QQ/企业微信/微信/POPO 保持一致运行时 |
| **Cron 可靠性** | [#993](https://github.com/netease-youdao/LobsterAI/pull/993) 防止定时任务执行期间 Gateway 崩溃 | @nmgwddj | 修复 "Channel is required" 死锁与 SIGUSR1 强制重启冲突 |
| **渲染层** | [#851](https://github.com/netease-youdao/LobsterAI/pull/851) 修复任务切换时附件丢失 | @johnnyhwa | 解决跨会话状态污染问题 |

**整体推进**：今日合并 PR 覆盖 **MCP 协议层、OpenClaw 运行时、IM 网关、定时任务、前端状态管理**五大核心模块，项目架构向"插件化统一运行时"目标显著迈进。

---

## 4. 社区热点

### 讨论最活跃议题

| Issue/PR | 热度指标 | 核心诉求分析 |
|---------|---------|-----------|
| [#1006](https://github.com/netease-youdao/LobsterAI/issues/1006) 配置文件重启后被重置 | 🔥 新建即热点，关联 #1005 | **架构设计冲突**：模板覆盖机制 vs 用户自定义需求，用户被迫用 cron workaround |
| [#986](https://github.com/netease-youdao/LobsterAI/issues/986) 微信回复不同步，批量发送体验差 | 1 评论 | **实时性诉求**：流式输出预期 vs 实际批量行为，企业微信/飞书场景同理 |
| [#1003](https://github.com/netease-youdao/LobsterAI/issues/1003) Notion MCP 环境变量传递失败 | 技术深度高 | **MCP 生态成熟度**：Bridge 层环境变量处理存在盲区，阻碍第三方集成 |

**背后信号**：用户从"能用"转向"好用"，对**配置即代码、实时反馈、第三方生态**的期望显著提升。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | 修复 PR |
|---------|------|------|---------|
| 🔴 **Critical** | Gateway 无限崩溃重启（#859） | ✅ 已修复 | [#894](https://github.com/netease-youdao/LobsterAI/pull/894) |
| 🔴 **Critical** | 模型名称字段数据丢失导致配置损坏（#858） | ✅ 已修复 | [#894](https://github.com/netease-youdao/LobsterAI/pull/894) |
| 🟡 **High** | 定时任务触发 Gateway 崩溃（SIGUSR1 冲突） | ✅ 已修复 | [#993](https://github.com/netease-youdao/LobsterAI/pull/993) |
| 🟡 **High** | MCP Bridge secret 不匹配 401 错误 | ✅ 已修复 | [#1002](https://github.com/netease-youdao/LobsterAI/pull/1002) |
| 🟡 **High** | 导出日志挂起 / "reply was never sent" | ✅ 已修复 | 2026.3.29 版本 |
| 🟢 **Medium** | 微信回复批量发送体验差（#986） | ⏳ 待处理 | 无 |
| 🟢 **Medium** | 配置文件持久化失效（#1006） | ⏳ 待处理 | 无 |

**稳定性评估**：今日修复 5 个高严重度问题，但 #858/#859 的**根因同源**（配置同步机制缺陷），建议复盘 OpenClaw 配置管道的防御性设计。

---

## 6. 功能请求与路线图信号

| 需求来源 | 内容 | 纳入可能性 | 判断依据 |
|---------|------|----------|---------|
| [#1001](https://github.com/netease-youdao/LobsterAI/pull/1001) SSE & 流式 HTTP MCP 支持 | 扩展 MCP 传输协议 | ⭐⭐⭐⭐⭐ **高** | PR 已提交，技术债务清理中 |
| [#999](https://github.com/netease-youdao/LobsterAI/pull/999) Cmd+K 命令面板 | 统一快速操作入口 | ⭐⭐⭐⭐⭐ **高** | 体验优化主线，模块化设计 |
| [#998](https://github.com/netease-youdao/LobsterAI/pull/998) 选中文本浮动工具栏 | 一键复制/引用/解释/翻译 | ⭐⭐⭐⭐⭐ **高** | 补齐竞品基础体验 |
| [#991](https://github.com/netease-youdao/LobsterAI/pull/991) 预设 Agent 国际化 | 英文名称与描述 | ⭐⭐⭐⭐☆ **中高** | 国际化主线，PR 已提交 |
| [#990](https://github.com/netease-youdao/LobsterAI/pull/990) Agent 删除确认弹窗 | 防误删 + 图标统一 | ⭐⭐⭐⭐☆ **中高** | UX 安全基础项 |
| #1006 配置持久化机制 | 官方支持用户自定义保留 | ⭐⭐⭐☆☆ **中** | 架构改动大，需设计评审 |

---

## 7. 用户反馈摘要

### 😤 痛点
> *"每5分钟定时任务恢复配置这样的 workaround"* — [#1005](https://github.com/netease-youdao/LobsterAI/issues/1005)  
> **核心不满**：防御性设计过度侵蚀用户自主权，配置管理信任崩塌

> *"前面等待时间长，后面又消息狂发"* — [#986](https://github.com/netease-youdao/LobsterAI/issues/986)  
> **场景**：微信客服场景，用户体验与企业形象受损

### 🎯 使用场景
- **MCP 集成**：Notion 知识库对接需求强烈，环境变量调试成本高
- **多平台 IM**：企业微信、飞书、微信并行部署，配置同步成为瓶颈
- **定时任务**：自动化工作流依赖稳定 Cron，Gateway 重启导致任务中断

### 👍 认可
- 小蜜蜂迁移插件化：架构统一降低维护成本（开发者视角）
- AskUserQuestion 删除确认：人机协作安全感提升

---

## 8. 待处理积压

| 项目 | 时长 | 风险 | 建议行动 |
|-----|------|------|---------|
| [#986](https://github.com/netease-youdao/LobsterAI/issues/986) 微信回复实时性优化 | 2 天 | 企业用户流失 | 评估 IM 网关流式输出架构改造 |
| [#1006](https://github.com/netease-youdao/LobsterAI/issues/1006) / [#1005](https://github.com/netease-youdao/LobsterAI/issues/1005) 配置持久化 | 1-2 天 | 用户信任损耗 | 设计评审：模板合并策略 vs 用户覆盖策略 |
| [#1003](https://github.com/netease-youdao/LobsterAI/issues/1003) Notion MCP 环境变量 | 1 天 | 生态扩展受阻 | 联合 #1001 作者验证 Bridge 层 env 传递 |

---

**日报生成时间**: 2026-03-29  
**数据截止时间**: 2026-03-29 24:00 UTC+8

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报 | 2026-03-29

---

## 1. 今日速览

今日 TinyClaw 项目呈现**高强度收尾态势**：24小时内集中关闭7条Issues和15条PR，**零新增待处理项**，表明团队正进行阶段性代码冻结或版本收尾工作。核心贡献者 `jlia0` 单日主导合并8条PR，聚焦安装体验、Docker部署和TinyOffice控制面板重构；`mczabca-boop` 完成插件安全加固与OpenViking功能栈的合并。项目当前**零待合并PR、零活跃Issue**，健康度指标优异，但需关注是否因发布窗口期导致的临时静默。

---

## 2. 版本发布

**无新版本发布**

> 注：今日大规模PR合并（15条）可能为即将发布的版本做准备，建议关注后续Release动态。

---

## 3. 项目进展

### 🔒 安全与架构加固
| PR | 作者 | 核心变更 |
|:---|:---|:---|
| [#149](https://github.com/TinyAGI/tinyagi/pull/149) | mczabca-boop | **插件系统安全加固**：引入插件门禁、Hook超时控制、元数据清洗，为后续功能扩展奠定安全基础 |
| [#150](https://github.com/TinyAGI/tinyagi/pull/150) | mczabca-boop | **OpenViking功能栈**：基于#149的安全基础，推进多模态/外部服务集成能力 |

### 🚀 安装与部署体验革命
| PR | 作者 | 核心变更 |
|:---|:---|:---|
| [#237](https://github.com/TinyAGI/tinyagi/pull/237) / [#235](https://github.com/TinyAGI/tinyagi/pull/235) | jlia0 | **curl一键安装成为默认方式**，替代npx/source安装；修复TMPDIR环境变量遮蔽问题 |
| [#239](https://github.com/TinyAGI/tinyagi/pull/239) | jlia0 | **数据迁移自动化**：`~/.tinyclaw` → `~/.tinyagi` 自动迁移，保护老用户数据 |
| [#240](https://github.com/TinyAGI/tinyagi/pull/240) | jlia0 | 原生模块重建机制，解决跨平台二进制兼容性问题 |

### 🐳 Docker生产就绪
| PR | 作者 | 核心变更 |
|:---|:---|:---|
| [#265](https://github.com/TinyAGI/tinyagi/pull/265) | jlia0 | 持久化数据目录重构：`/data` → `/home/tinyagi`，统一覆盖应用数据与AI CLI状态 |
| [#266](https://github.com/TinyAGI/tinyagi/pull/266) | jlia0 | **关键修复**：移除`gosu`降权，以root运行解决Codex读取`auth.json`权限问题 |
| [#264](https://github.com/TinyAGI/tinyagi/pull/264) | jlia0 | TypeScript严格模式类型修复 |

### 🎛️ TinyOffice控制面板重构
| PR | 作者 | 核心变更 |
|:---|:---|:---|
| [#268](https://github.com/TinyAGI/tinyagi/pull/268) | jlia0 | **控制平面简化**：Providers合并入Services标签，移除独立/logs页面，三标签架构（Overview/Services/Logs） |
| [#255](https://github.com/TinyAGI/tinyagi/pull/255) | jlia0 | 会话状态真实显示：修复"queued/processing"状态误判问题 |
| [#259](https://github.com/TinyAGI/tinyagi/pull/259) | jlia0 | 定时消息持久化：修复`fireSchedule()`未写入`agent_messages`表的问题 |

### 🤖 多智能体与生态扩展
| PR | 作者 | 核心变更 |
|:---|:---|:---|
| [#168](https://github.com/TinyAGI/tinyagi/pull/168) | dpbmaverick98 | **多智能体支持** + Kimi2.5/Minimax2.5通过Claude Code接入 |
| [#113](https://github.com/TinyAGI/tinyagi/pull/113) | williamlmao | **实时工具流**：Telegram渠道实时显示工具执行状态（"Read /src/index.ts"等） |
| [#218](https://github.com/TinyAGI/tinyagi/pull/218) | jcenters | **进程保活**：5分钟超时强制终止卡死Agent进程，解决僵尸进程问题 |

---

## 4. 社区热点

### 🔥 最高讨论热度：[#193 TinyOffice首次启动Web引导](https://github.com/TinyAGI/tinyagi/issues/193)
| 指标 | 数据 |
|:---|:---|
| 评论数 | **10条**（今日最高） |
| 状态 | ✅ 已关闭 |
| 核心诉求 | 将TinyOffice从"已配置用户的工具"转变为"新用户的第一入口"，替代CLI配置流程 |

**背后信号**：项目正从"开发者工具"向"终端用户产品"转型， onboarding体验成为战略优先级。与[#194](https://github.com/TinyAGI/tinyagi/issues/194)（运行时控制面板）形成配套，构建完整的Web化运维体系。

### 📊 其他高关注议题
| Issue | 评论 | 核心诉求 | 状态 |
|:---|:---|:---|:---|
| [#126 Telegram自动重连失败](https://github.com/TinyAGI/tinyagi/issues/126) | 7条 | 生产环境连接稳定性 | ✅ 已关闭 |
| [#124 扩展Provider支持](https://github.com/TinyAGI/tinyagi/issues/124) | 6条 | 降低Claude Code API配额消耗，接入z.ai/Kimi/OpenRouter等替代方案 | ✅ 已关闭（PR#168部分实现）|

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 问题描述 | Fix状态 |
|:---|:---|:---|:---|
| **高** | [#126](https://github.com/TinyAGI/tinyagi/issues/126) / [#84](https://github.com/TinyAGI/tinyagi/issues/84) | Telegram客户端WSL2环境ETIMEDOUT/自动重连失败 | ✅ **已修复**（PR#113实时流重写连接层） |
| **高** | [#266](https://github.com/TinyAGI/tinyagi/pull/266) | Docker中Codex因权限问题无法读取`auth.json`导致WebSocket 500错误 | ✅ **已修复**（移除gosu降权） |
| **中** | [#218](https://github.com/TinyAGI/tinyagi/pull/218) | Agent进程卡死5分钟无自动清理，导致消息重复入队 | ✅ **已修复**（SIGKILL强制终止） |
| **中** | [#255](https://github.com/TinyAGI/tinyagi/pull/255) | 仪表盘错误显示所有消息为"processing"状态 | ✅ **已修复**（API返回真实status字段） |
| **低** | [#259](https://github.com/TinyAGI/tinyagi/pull/259) | 定时消息未持久化到`agent_messages`表 | ✅ **已修复** |
| **低** | [#264](https://github.com/TinyAGI/tinyagi/pull/264) | TypeScript严格模式`unknown`类型编译错误 | ✅ **已修复** |

> **稳定性评估**：今日关闭的Bug均为历史积压问题，无新增回归。Docker部署链路经连续3条PR修复后趋于稳定。

---

## 6. 功能请求与路线图信号

| 需求来源 | 需求内容 | 实现可能性 | 相关PR/Issue |
|:---|:---|:---|:---|
| [#193](https://github.com/TinyAGI/tinyagi/issues/193) | TinyOffice首次启动Web引导 | **🔜 下一版本核心功能** | 与#194配套，控制面板重构已完成基础 |
| [#194](https://github.com/TinyAGI/tinyagi/issues/194) | 运行时控制面板（daemon/queue/heartbeat/channels） | **🔜 下一版本核心功能** | PR#268完成UI简化，后端API待扩展 |
| [#124](https://github.com/TinyAGI/tinyagi/issues/124) | 扩展LLM Provider（z.ai/Kimi/OpenRouter等） | **🔄 部分实现** | PR#168接入Kimi2.5/Minimax2.5，OpenRouter待跟进 |
| [#100](https://github.com/TinyAGI/tinyagi/issues/100) | Docker Compose/Swarm多Agent编排 | **📋 长期规划** | 基础设施就绪，需设计Agent调度层 |
| [#120](https://github.com/TinyAGI/tinyagi/issues/120) | 详细日志选项与频道状态反馈 | **✅ 已实现** | PR#113实时工具流覆盖核心诉求 |

**路线图推断**：下一版本（v0.1.0?）或将聚焦 **"TinyOffice产品化"** —— 完成首次引导+运行时控制的Web闭环，降低CLI依赖。

---

## 7. 用户反馈摘要

### 😫 核心痛点（已解决或推进中）
| 痛点 | 来源 | 解决方案 |
|:---|:---|:---|
| "安装依赖npx/source，对非Node用户不友好" | PR#237讨论 | curl一键安装成为默认方式 |
| "Docker部署后Codex无法认证，反复报错" | PR#266描述 | 权限模型重构，root运行保障AI CLI状态访问 |
| "Telegram连接断了不知道，Agent假死" | #126, #84 | 实时流重写+进程保活机制 |
| "配置全靠改文件，没有Web界面" | #193 | 首次引导+控制面板开发中 |

### 🎯 使用场景洞察
- **多Agent配额管理**：用户主动寻求Kimi/OpenRouter等替代方案（#124），反映Claude Code成本敏感型使用模式
- **WSL2开发环境**：Windows开发者占比显著，网络层兼容性需持续关注（#84）
- **Docker生产部署**：从"能跑"到"稳定跑"的需求升级，数据持久化、权限、进程管理逐一被攻克

### ✅ 满意度信号
- PR#113实时工具流、PR#168多Provider支持等特性获快速合并，社区贡献路径通畅

---

## 8. 待处理积压

**⚠️ 当前零积压项**

所有历史Issues与PRs均已关闭，项目处于**干净的发布就绪状态**。建议维护者关注：

| 风险点 | 建议动作 |
|:---|:---|
| 今日大规模合并后的回归测试 | 优先验证Docker部署链路（#265-#266-#268变更链） |
| 品牌迁移遗留问题 | 监控`~/.tinyclaw` → `~/.tinyagi`迁移是否覆盖边缘场景（#239） |
| 社区贡献者体验 | 文档更新滞后于代码变更（README安装指引已更新，但官网可能未同步） |

---

*日报生成时间：2026-03-29 | 数据来源：TinyAGI/tinyclaw GitHub*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-03-29

> **项目**: [moltis-org/moltis](https://github.com/moltis-org/moltis) | **日期**: 2026-03-29  
> **领域**: AI 智能体与个人 AI 助手开源框架

---

## 1. 今日速览

Moltis 今日呈现**高强度迭代态势**，24小时内完成 **13 个 PR 的合并/关闭**与 **8 个 Issue 的清理**，零新增 Issue 表明社区反馈闭环效率极高。核心维护者 `penso` 主导了绝大多数技术决策，聚焦**三大攻坚方向**：Provider 生态扩展（Fireworks.ai、Jina.ai 接入）、Telegram 频道体验优化（论坛主题隔离、文档解析）、以及架构级稳定性修复（GraphQL 运行时绑定、上下文压缩修复）。4 个连续版本发布（`20260327.05` 至 `20260328.03`）显示团队采用**高频小步快跑**的交付策略，适合快速验证修复效果。整体健康度：**优秀**，但需关注 Matrix 集成等长期 PR 的合并进度。

---

## 2. 版本发布

| 版本 | 发布时间 | 关键更新 |
|:---|:---|:---|
| [`20260328.03`](https://github.com/moltis-org/moltis/releases/tag/20260328.03) | 2026-03-28 | 累积修复批次 |
| [`20260328.02`](https://github.com/moltis-org/moltis/releases/tag/20260328.02) | 2026-03-28 | Provider 超时与发现逻辑优化 |
| [`20260328.01`](https://github.com/moltis-org/moltis/releases/tag/20260328.01) | 2026-03-28 | GraphQL 运行时绑定修复 |
| [`20260327.05`](https://github.com/moltis-org/moltis/releases/tag/20260327.05) | 2026-03-27 | Prompt Caching 与 Fireworks.ai 支持 |

**迁移注意事项**：
- **自定义 Provider 用户**：若曾遇到模型发现超时或 404 错误，升级后需重新配置（[#507](https://github.com/moltis-org/moltis/pull/507)、[#506](https://github.com/moltis-org/moltis/pull/506) 已重构发现逻辑）
- **MiniMax 用户**：`20260328.01+` 修复了系统提示词格式问题，此前版本可能出现 "invalid chat setting" 错误
- **本地 LLM 用户**：模型探测超时已从 10s 提升至 30s，首次加载大模型时体验改善

---

## 3. 项目进展

### 🔧 核心架构修复
| PR | 作者 | 进展说明 |
|:---|:---|:---|
| [#511](https://github.com/moltis-org/moltis/pull/511) | `penso` | **GraphQL 运行时服务绑定**：解决长期存在的架构债务，GraphQL 层现在通过 `GatewayState::chat()` 动态解析服务，而非冻结的 `services.chat` 槽位。这使 `chat_override` 等动态配置对 GraphQL 请求生效，统一了 RPC 与 GraphQL 的行为语义。 |
| [#505](https://github.com/moltis-org/moltis/pull/505) | `penso` | **上下文压缩修复**：手动 `/compact` 与自动压缩不再破坏严格 LLM 后端（如 llama.cpp）的对话，将压缩摘要的角色从 `Assistant` 改为 `System`，避免角色序列违规。 |

### 📡 频道生态扩展
| PR | 作者 | 进展说明 |
|:---|:---|:---|
| [#498](https://github.com/moltis-org/moltis/pull/498) + [#512](https://github.com/moltis-org/moltis/pull/512) | `penso` | **Telegram 论坛主题完整支持**：实现会话级隔离（每个主题独立 session key、中断桶、消息历史），并修复回复路由确保消息落入正确主题。这是企业/社区场景的关键基础设施。 |
| [#276](https://github.com/moltis-org/moltis/pull/276) | `alexhooketh` | **Telegram 文档解析**：支持提取 `.txt`、`.md` 附件内容为内联提示词，弥补此前"无法读取文件"的显著能力缺口。 |
| [#331](https://github.com/moltis-org/moltis/pull/331) / [#500](https://github.com/moltis-org/moltis/pull/500) | `tensiondriven` / `penso` | **Matrix 协议集成**：基于 `matrix-sdk 0.16` 的新 crate，支持 DM/房间消息、OTP 门控、流式编辑、反应与输入指示器。PR #331 已关闭，#500 为清理后的重提版本，待合并。 |

### 🚀 Provider 生态
| PR | 作者 | 进展说明 |
|:---|:---|:---|
| [#497](https://github.com/moltis-org/moltis/pull/497) | `penso` | **Fireworks.ai 官方支持**：新增 OpenAI 兼容 Provider，内置 Kimi K2.5 Turbo、DeepSeek V3p2、Qwen3 235B 等模型目录。 |
| [#495](https://github.com/moltis-org/moltis/pull/495) | `penso` | **Prompt Caching 落地**：Anthropic 直连与 OpenRouter 路径均支持 `cache_control` 断点，可配置 `cache_retention` 策略降低长对话成本。 |
| [#515](https://github.com/moltis-org/moltis/pull/515) | `penso` | **本地 LLM 体验优化**：探测超时 10s→30s，超时非阻塞保存（带警告），显著改善 Ollama/llama.cpp 等冷启动场景。 |

### 🧪 质量基础设施
| PR | 作者 | 进展说明 |
|:---|:---|:---|
| [#509](https://github.com/moltis-org/moltis/pull/509) | `penso` | **回归测试覆盖**：为 #502 的 Provider 发现逻辑添加专项测试，确保"无模型时跳过探测"行为有契约保障。 |

**整体推进评估**：今日合并内容覆盖**架构债务清偿**（GraphQL 绑定）、**企业级场景**（Telegram 论坛、Matrix）、**成本优化**（Prompt Caching）、**开发者体验**（本地 LLM 支持）四大战略维度，项目成熟度向生产就绪迈进显著一步。

---

## 4. 社区热点

| 排名 | 条目 | 互动数据 | 热度分析 |
|:---|:---|:---|:---|
| 🥇 | [#437](https://github.com/moltis-org/moltis/issues/437) Expandable "Reasoning" 仅返回消息问题 | 3 评论，创建于 03-14 | **跨期热点**：14天周期内唯一获得评论的 Issue，反映 Channels 场景下推理展示的 UX 争议。用户期望在群聊/频道中看到可展开的推理过程，但当前实现可能仅输出推理块而非完整回复。诉求：**AI 透明度与协作场景的平衡**。 |
| 🥈 | [#496](https://github.com/moltis-org/moltis/issues/496) ARM64 安装脚本 404 | 2 评论，24小时内关闭 | **快速响应典范**：`orangesoncom` 报告后当日修复，体现对边缘架构（aarch64 Linux）的重视。 |
| 🥉 | *其余 Issue 均为 0 评论当日关闭* | — | 零评论快速闭环表明：a) Issue 质量高、复现清晰；b) 维护者响应极快；c) 或存在同步沟通渠道（Discord/Telegram）分流讨论。 |

**深层诉求洞察**：社区对 **Channels（多用户/群聊场景）的 AI 交互体验** 有强烈关注，#437 的推理展示问题与 #498/#512 的论坛主题隔离形成呼应——用户希望 Moltis 在"个人助手"与"群组协作者"双重身份间无缝切换。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#514](https://github.com/moltis-org/moltis/issues/514) | 大多数模型无法选择 | ✅ **已修复**（#515 超时调整 + #506/#507 发现逻辑重构） |
| 🔴 **高** | [#508](https://github.com/moltis-org/moltis/issues/508) | 升级后聊天返回 "invalid chat setting" 错误 | ✅ **已修复**（#510 恢复 MiniMax 顶层系统提示词） |
| 🟡 **中** | [#502](https://github.com/moltis-org/moltis/issues/502) | OpenAI 兼容 LLM 无模型规格导致超时 | ✅ **已修复**（#507 跳过无模型时的探测循环） |
| 🟡 **中** | [#504](https://github.com/moltis-org/moltis/issues/504) | 指定模型后仍查询所有可用模型 | ✅ **已修复**（#506 显式模型时跳过发现） |
| 🟡 **中** | [#501](https://github.com/moltis-org/moltis/issues/501) | 手动上下文压缩破坏聊天 | ✅ **已修复**（#505 角色改为 System） |
| 🟡 **中** | [#496](https://github.com/moltis-org/moltis/issues/496) | ARM64 安装脚本 404 | ✅ **已修复** |
| 🟢 **低** | [#437](https://github.com/moltis-org/moltis/issues/437) | Channels 中推理展示不完整 | ✅ **已关闭**（可能为设计决策） |

**稳定性趋势**：今日 8 个 Bug Issue **全部当日关闭**，无遗留。修复集群显示 **Provider 配置层**是近期脆弱点（4/8 相关），可能与快速扩展供应商生态有关。建议加强该模块的集成测试覆盖。

---

## 6. 功能请求与路线图信号

| 状态 | 条目 | 功能方向 | 纳入可能性评估 |
|:---|:---|:---|:---|
| 🔄 [OPEN](https://github.com/moltis-org/moltis/pull/513) | #513 Jina.ai 搜索 Provider | Web 搜索扩展 | **高** — 代码已就绪，与现有 Brave/Perplexity 架构对齐，仅待审查 |
| 🔄 [OPEN](https://github.com/moltis-org/moltis/pull/503) | #503 会话召回、托管 SSH、技能可移植性 | 长期记忆、DevOps 集成、技能市场 | **中-高** — 大型功能集，含"Hermes 对比路线图"文档工作，可能拆分为多阶段发布 |
| 🔄 [OPEN](https://github.com/moltis-org/moltis/pull/500) | #500 Matrix 频道集成 | 去中心化通信 | **中** — #331 的清理重提，技术就绪但需维护者带宽 |
| 🔄 [OPEN](https://github.com/moltis-org/moltis/pull/499) | #499 OpenAI TTS/STT base_url 配置 | 本地语音服务 | **高** — 简单配置扩展，与 #497 Fireworks 等本地友好策略一致 |

**路线图信号**：
- **"本地优先"战略明确**：TTS/STT base_url、Fireworks.ai、本地 LLM 超时优化连续落地，暗示项目瞄准**隐私敏感型企业与自托管用户**。
- **技能/记忆层酝酿中**：#503 的"会话召回""技能可移植性"指向**Agent 长期记忆与协作能力**，可能是对标 CrewAI、AutoGen 的差异化方向。

---

## 7. 用户反馈摘要

> 从 Issue 内容提炼的真实声音（无直接评论引用，基于报告模式推断）

| 维度 | 痛点/诉求 | 代表场景 |
|:---|:---|:---|
| **配置体验** | 自定义 OpenAI 兼容 Provider 的"模型发现"行为不可预测 | 接入内部部署的 vLLM/Ollama 时，不清楚该留空模型名还是指定具体模型 |
| **升级体验** | 版本升级后配置失效或行为变更（#508） | 生产环境滚动更新时的向后兼容性焦虑 |
| **平台覆盖** | 需要 Matrix 作为 Telegram/Discord 的去中心化替代 | 企业合规要求、隐私优先社区 |
| **成本敏感** | 长对话成本优化需求（Prompt Caching 受关注） | 高频个人用户、多 Agent 并发场景 |
| **边缘架构** | ARM64 支持完整性（#496） | 树莓派/边缘设备部署、Apple Silicon 服务器 |

**满意度信号**：快速 Issue 关闭周期（多数 < 24h）表明用户对响应速度认可；零重复报告说明修复有效性高。

---

## 8. 待处理积压

| 条目 | 创建时间 | 阻塞原因 | 建议行动 |
|:---|:---|:---|:---|
| [#500](https://github.com/moltis-org/moltis/pull/500) Matrix 集成 | 2026-03-28（重提） | 原 #331 因混杂功能被关闭，清理后待审查 | 优先合并以兑现"去中心化通信"路线图承诺 |
| [#503](https://github.com/moltis-org/moltis/pull/503) 会话召回与技能可移植性 | 2026-03-28 | 大型 PR，含多个功能与文档变更 | 建议拆分为：a) 会话召回 b) SSH UX c) 技能导出/导入 d) 文档，加速审查 |
| [#499](https://github.com/moltis-org/moltis/pull/499) TTS/STT base_url | 2026-03-28 | 待审查 | 快速路径合并，与本地优先战略一致 |
| [#513](https://github.com/moltis-org/moltis/pull/513) Jina.ai 搜索 | 2026-03-28 | 待审查 | 搜索 Provider 扩展，低风险评估后合并 |

**维护者提醒**：当前 **4 个 Open PR 均创建于 24 小时内**，暂无长期积压。但 #500（Matrix）历经 #331 的曲折，建议明确合并时间表以避免贡献者流失。

---

## 附录：快速链接

| 类别 | 链接 |
|:---|:---|
| 项目主页 | https://github.com/moltis-org/moltis |
| 今日 Releases | [20260328.03](https://github.com/moltis-org/moltis/releases/tag/20260328.03) · [20260328.02](https://github.com/moltis-org/moltis/releases/tag/20260328.02) · [20260328.01](https://github.com/moltis-org/moltis/releases/tag/20260328.01) · [20260327.05](https://github.com/moltis-org/moltis/releases/tag/20260327.05) |
| 待审查 PR 列表 | [Open PRs](https://github.com/moltis-org/moltis/pulls?q=is%3Aopen+sort%3Aupdated-desc) |

---

*日报生成时间: 2026-03-29 | 数据来源: GitHub API 与公开仓库活动*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-03-29

---

## 1. 今日速览

CoPaw 今日保持**高活跃开发状态**，24小时内产生 **39 条 Issues 更新**（35 活跃/新开，4 关闭）和 **24 条 PR 更新**（11 待合并，13 已合并/关闭）。社区贡献显著加速，首次贡献者 PR 占比提升，涵盖 MiniMax OAuth、OpenCode 集成、钉钉 AI 表格等新功能。稳定性方面，CPU 空转、网关重启卡死、网络波动导致 Agent 失效等核心问题持续暴露，需优先关注。整体项目处于**功能快速扩张期**，但工程债务开始累积。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭 PR（13 条）

| PR | 作者 | 核心贡献 | 链接 |
|:---|:---|:---|:---|
| #2461 | xieyxclack | 配置文档更新 | [链接](https://github.com/agentscope-ai/CoPaw/pull/2461) |
| #2460 | jinliyl | 上下文管理文档与依赖更新 | [链接](https://github.com/agentscope-ai/CoPaw/pull/2460) |
| #2449 | jinliyl | **重构文件截断逻辑**：Markdown 内容保护（最大50KB）、截断提示优化、支持连续阅读长文档 | [链接](https://github.com/agentscope-ai/CoPaw/pull/2449) |
| #2450 | xieyxclack | Agent 文档更新 | [链接](https://github.com/agentscope-ai/CoPaw/pull/2450) |
| #2444 | xieyxclack | MCP 与工具文档更新 | [链接](https://github.com/agentscope-ai/CoPaw/pull/2444) |
| #2440 | Leirunlin | **修复 Skill 配置传递问题**：支持创建工作区 Skill 时传递配置 | [链接](https://github.com/agentscope-ai/CoPaw/pull/2440) |
| #2410 | jinliyl | Skill 工具结果截断优化 | [链接](https://github.com/agentscope-ai/CoPaw/pull/2410) |
| #2352 | zhaozhuang521 | **Console 整体样式重构**：页面主题调整 | [链接](https://github.com/agentscope-ai/CoPaw/pull/2352) |
| #2436 | Leirunlin | **修复 Skill 频道配置**：UI-后端频道配置同步 | [链接](https://github.com/agentscope-ai/CoPaw/pull/2436) |
| #2423 | TranscendenceLiang | MiniMax OAuth 认证（首次贡献，后重开为 #2448） | [链接](https://github.com/agentscope-ai/CoPaw/pull/2423) |

**关键进展**：
- **文档体系完善**：配置、Agent、MCP、上下文管理四大模块文档同步更新
- **长文档处理能力突破**：#2449 重构截断逻辑，解决大文件阅读场景的核心瓶颈
- **Skill 系统稳定性修复**：#2440、#2436 连续修复配置传递与频道同步问题
- **UI 体验升级**：Console 主题重构完成

---

## 4. 社区热点

### 🔥 最高讨论热度

| 排名 | Issue/PR | 评论数 | 核心诉求 | 链接 |
|:---|:---|:---:|:---|:---|
| 1 | **#2291 Help Wanted: Open Tasks** | 32 | 官方任务清单，P0-P2 优先级任务认领，社区贡献入口 | [链接](https://github.com/agentscope-ai/CoPaw/issues/2291) |
| 2 | **#2218 CPU 100% 空转问题** | 10 | 核心性能 Bug：epoll 忙等待循环导致空闲时 CPU 满载 | [链接](https://github.com/agentscope-ai/CoPaw/issues/2218) |
| 3 | **#2293 QA Agent 导致 UI 崩溃** | 9 | Agent 自主操作破坏前端状态，需加强沙箱隔离 | [链接](https://github.com/agentscope-ai/CoPaw/issues/2293) |

### 热点分析

- **#2291** 成为社区贡献核心枢纽，32 条评论反映任务认领活跃，但需维护者及时更新状态避免重复劳动
- **#2218** 暴露底层事件循环缺陷，影响所有部署场景，用户持续追问修复进度
- **#2293** 揭示 Agent 自主性边界问题：QA Agent "一顿操作猛如虎"导致 UI 无法恢复，重装无效，需紧急修复状态隔离机制

---

## 5. Bug 与稳定性

### 🔴 严重（P0）

| Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|
| [#2218](https://github.com/agentscope-ai/CoPaw/issues/2218) | **CPU 100% 空转**：epoll 忙等待循环，空闲时持续满载 | Open | 无 |
| [#2445](https://github.com/agentscope-ai/CoPaw/issues/2445) | **网关重启导致 Agent 永久卡死**：100% 复现，无 SSH 权限用户无法恢复 | Open | 无 |
| [#2435](https://github.com/agentscope-ai/CoPaw/issues/2435) | **严重网络波动**：execute_shell_command 30-60% 超时，gh CLI 完全不可用 | Open | 无 |

### 🟡 重要（P1）

| Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|
| [#2293](https://github.com/agentscope-ai/CoPaw/issues/2293) | QA Agent 操作导致 UI 崩溃（`Uncaught SyntaxError`） | Open | 无 |
| [#2439](https://github.com/agentscope-ai/CoPaw/issues/2439) | 语音消息转录功能失效 | Open | 无 |
| [#2378](https://github.com/agentscope-ai/CoPaw/issues/2378) | 工具密集型 Skill 无限循环（46+ 迭代），`max_iters` 过高 + MemoryCompactionHook 问题 | Open | 无 |
| [#2462](https://github.com/agentscope-ai/CoPaw/issues/2462) | **MCP ConfigWatcher 空值检查缺失**：CLI 工具完全失败 | Open | 无 |
| [#2459](https://github.com/agentscope-ai/CoPaw/issues/2459) | 多 Agent 通信中 `/approve` 命令转发失效 | Open | 无 |
| [#2421](https://github.com/agentscope-ai/CoPaw/issues/2421) | 飞书频道单条消息重复回复 | Open | 无 |

### 🟢 一般（P2）

| Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|
| [#2298](https://github.com/agentscope-ai/CoPaw/issues/2298) | LLM 选择项缺失，Ollama 配置困难 | Open | 无 |
| [#2425](https://github.com/agentscope-ai/CoPaw/issues/2425) | v0.x.0 更新后模型选择框消失 | Open | 无 |
| [#2455](https://github.com/agentscope-ai/CoPaw/issues/2455) | Gemini 模型调用报错（function response parts 不匹配） | Open | 无 |
| [#2458](https://github.com/agentscope-ai/CoPaw/issues/2458) | Windows 桌面版添加飞书频道 SSL 错误 | Open | 无 |

---

## 6. 功能请求与路线图信号

| Issue/PR | 功能 | 可行性评估 | 纳入下一版本概率 |
|:---|:---|:---|:---:|
| [#2448](https://github.com/agentscope-ai/CoPaw/pull/2448) | **MiniMax OAuth 认证**（Device Code Flow + PKCE） | PR 已开，首次贡献者 | ⭐⭐⭐⭐⭐ |
| [#2465](https://github.com/agentscope-ai/CoPaw/pull/2465) | **钉钉 AI 表格/文档操作**（内置工具） | PR 已开，首次贡献者 | ⭐⭐⭐⭐⭐ |
| [#2463](https://github.com/agentscope-ai/CoPaw/pull/2463) | **OpenCode 集成**（原生支持） | PR 已开，与 #2428 竞争 | ⭐⭐⭐⭐☆ |
| [#2457](https://github.com/agentscope-ai/CoPaw/pull/2457) | **用户资产备份与迁移**（ZIP 导出/导入、自动备份） | PR 已开，配套 #2443 | ⭐⭐⭐⭐⭐ |
| [#2419](https://github.com/agentscope-ai/CoPaw/pull/2419) | **CoPaw Local Model**（3 步配置、完全重构） | PR 已开，架构级改动 | ⭐⭐⭐⭐☆ |
| [#2366](https://github.com/agentscope-ai/CoPaw/pull/2366) | **GitHub Copilot Provider**（OAuth 支持） | PR 已开，测试覆盖完整 | ⭐⭐⭐⭐☆ |
| [#2434](https://github.com/agentscope-ai/CoPaw/issues/2434) | Console Web 粘贴图片/文件（Ctrl+V） | 技术分析已提供，实现清晰 | ⭐⭐⭐⭐☆ |
| [#2456](https://github.com/agentscope-ai/CoPaw/issues/2456) | **Magic Command `/break`**（强制中断 Agent） | 飞书/钉钉渠道需求明确 | ⭐⭐⭐⭐☆ |
| [#2407](https://github.com/agentscope-ai/CoPaw/issues/2407) | 开放 AgentScope Hook 能力供自定义 | 架构设计需求，需评估 | ⭐⭐⭐☆☆ |
| [#2418](https://github.com/agentscope-ai/CoPaw/issues/2418) | Skills-Hub 管理页面（快速下载主流 Skills） | 生态建设需求 | ⭐⭐⭐☆☆ |

**关键信号**：首次贡献者爆发（MiniMax、OpenCode、钉钉 AI 表格），表明 #2291 任务清单策略有效。备份迁移、Local Model、Copilot Provider 构成 v0.3.0 潜在核心功能。

---

## 7. 用户反馈摘要

### 😫 核心痛点

| 反馈来源 | 痛点 | 场景 |
|:---|:---|:---|
| [#2218](https://github.com/agentscope-ai/CoPaw/issues/2218) | "CoPaw 一启动 CPU 就 100%，什么都不做也这样" | 服务器部署，资源敏感环境 |
| [#2445](https://github.com/agentscope-ai/CoPaw/issues/2445) | "网关重启后 Agent 卡死 4 小时，重装都没用，我没有 SSH 权限" | 远程容器部署，运维权限受限 |
| [#2293](https://github.com/agentscope-ai/CoPaw/issues/2293) | "问了个 QA agent，他一顿操作猛如虎，我的 UI 进不了了" | Agent 自主性失控 |
| [#2435](https://github.com/agentscope-ai/CoPaw/issues/2435) | "几乎每次 shell 命令都超时，gh CLI 完全不能用，成功率 <70%" | 网络不稳定环境 |
| [#2298](https://github.com/agentscope-ai/CoPaw/issues/2298) | `pip install 'copaw[ollama]'` 各种问题，文档没说清楚 | 本地模型部署门槛 |
| [#2425](https://github.com/agentscope-ai/CoPaw/issues/2425) | "更新后模型选择框消失了，找遍 issue 和 docs 都没办法" | 版本升级体验断裂 |

### 😊 正向反馈

| 反馈来源 | 亮点 |
|:---|:---|
| [#2449](https://github.com/agentscope-ai/CoPaw/pull/2449) | "成功用模型连续阅读一本小说"——长文档处理能力突破 |
| [#2465](https://github.com/agentscope-ai/CoPaw/pull/2465) | 钉钉 AI 表格功能社区主动贡献 |

### 💡 产品洞察

- **稳定性 > 功能**：用户反复提及"重装也不行""重新部署后问题依旧"，表明状态持久化和故障恢复机制缺失
- **文档缺口**：Ollama 配置、版本升级变更说明严重不足
- **企业场景诉求**：钉钉/飞书深度集成（AI 表格、文档操作）、权限管控（`/break` 中断命令）明确

---

## 8. 待处理积压

### ⚠️ 需维护者紧急关注

| Issue/PR | 创建时间 | 问题 | 风险 |
|:---|:---|:---|:---|
| [#2218](https://github.com/agentscope-ai/CoPaw/issues/2218) | 2026-03-24 | CPU 100% 空转，性能核心 Bug | 影响所有用户，5 天无响应 |
| [#2445](https://github.com/agentscope-ai/CoPaw/issues/2445) | 2026-03-28 | 网关重启卡死 100% 复现 | 生产环境致命，当日报告需跟进 |
| [#2462](https://github.com/agentscope-ai/CoPaw/issues/2462) | 2026-03-28 | MCP ConfigWatcher 空值检查缺失 | CLI 完全不可用，当日报告 |
| [#2426](https://github.com/agentscope-ai/CoPaw/pull/2426) | 2026-03-27 | 频道管理模块懒加载重构 | 架构级 PR，1 天无 Review |
| [#2419](https://github.com/agentscope-ai/CoPaw/pull/2419) | 2026-03-27 | CoPaw Local Model 重构 | 核心功能，1 天无 Review |

---

*日报生成时间：2026-03-29 | 数据来源：GitHub API*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报 | 2026-03-29

---

## 1. 今日速览

今日 ZeptoClaw 项目活跃度**中等偏低**，核心开发者 stuartbowness 持续主导技术迭代。社区聚焦 Telegram 集成的稳定性修复与上下文管理的长效优化，呈现"问题驱动开发"特征。两个待合并 PR 形成互补：#460 解决底层 token 溢出的系统性风险，#462 修复用户层面的消息静默失败。无新版本发布，当前处于功能打磨期而非发布窗口期。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

| PR | 状态 | 核心贡献 | 项目推进度 |
|:---|:---|:---|:---|
| [#460](https://github.com/qhkm/zeptoclaw/pull/460) | 待合并 | **上下文压缩系统重构**：将单遍词数统计替换为多层防御策略（语义摘要→分层剪枝→紧急截断），根治长对话 token 溢出崩溃 | ⭐⭐⭐⭐⭐ 架构级改进，解锁长会话场景 |
| [#462](https://github.com/qhkm/zeptoclaw/pull/462) | 待合并 | **Telegram 消息可靠性修复**：实现智能分块（4000字符阈值）+ HTML 标签修复 + 纯文本降级三重保障 | ⭐⭐⭐⭐☆ 关键用户体验修复 |

**技术协同观察**：#460 与 #462 形成"底层容量扩展→上层传输保障"的完整链路，合并后将显著改善 Telegram 场景下的复杂任务可靠性。

---

## 4. 社区热点

| 议题 | 热度指标 | 核心诉求分析 |
|:---|:---|:---|
| [#461](https://github.com/qhkm/zeptoclaw/issues/461) | 新开 Issue，0 评论，0 👍 | **沉默即故障**：用户报告研究类任务（尤其涉及浏览器操作）在 Telegram 端"静默失败"——无响应、无错误提示。诉求本质是**可观测性缺失**，用户宁愿看到错误也不接受沉默。该 Issue 直接催生了 #462 的修复方案，呈现"问题报告→快速响应"的健康循环。 |

**社区信号**：单一开发者（stuartbowness）同时作为报告者、修复者，表明项目仍处于核心团队深度参与阶段，社区外部贡献者尚未大规模涌入。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | Fix PR |
|:---|:---|:---|:---|
| 🔴 **高** | Telegram 研究任务静默失败（[#461](https://github.com/qhkm/zeptoclaw/issues/461)） | 已定位根因 | ✅ [#462](https://github.com/qhkm/zeptoclaw/pull/462) 待合并 |
| 🟡 **中高** | 长对话 token 溢出崩溃（历史问题，今日通过 PR 根治） | 系统性修复 | ✅ [#460](https://github.com/qhkm/zeptoclaw/pull/460) 待合并 |

**根因深度**：
- #461 实际包含三重故障模式：HTML 标签畸形渲染、消息超长截断无反馈、异常路径无降级
- #460 揭示原压缩策略的架构缺陷：单遍词数统计无法应对多模态内容（代码块、工具输出、思维链）

---

## 6. 功能请求与路线图信号

| 来源 | 隐含需求 | 纳入可能性 |
|:---|:---|:---|
| #460 设计文档 | 上下文管理的**可配置性**（压缩层级阈值、保留策略） | 🔮 高 — 架构已预留扩展点 |
| #462 实现细节 | 多平台消息适配层（Telegram/Discord/Slack 差异化处理） | 🔮 中 — 当前聚焦 Telegram，抽象层待验证 |
| #461 用户场景 | 浏览器自动化任务的**进度反馈机制** | 🔮 中高 — 与"沉默失败"直接相关，可能以状态推送形式实现 |

**路线图推测**：项目正从"功能可用"向"生产可靠"演进，下一版本（v0.x 或 v1.0）可能聚焦：
1. 多平台消息可靠性标准化
2. 长会话性能基准测试与监控
3. 浏览器工具的可观测性增强

---

## 7. 用户反馈摘要

> *"Shorter tasks (4 sources or fewer) work fine, but anything requiring extensive browsing goes silent"*
> — stuartbowness, [#462](https://github.com/qhkm/zeptoclaw/pull/462)

| 维度 | 洞察 |
|:---|:---|
| **满意场景** | 轻量级查询（≤4 个信息源）、短对话 |
| **痛点阈值** | 研究深度与失败概率正相关——恰好是 ZeptoClaw 作为"智能体"的核心价值场景 |
| **情感诉求** | *"No response, no error, nothing"* — 不确定性比错误更令人挫败 |
| **隐性需求** | 任务执行中的进度感知（"正在浏览第 X 个来源"）、失败时的降级输出（部分结果+原因说明） |

---

## 8. 待处理积压

| 类型 | 项目 | 风险 | 建议动作 |
|:---|:---|:---|:---|
| PR 审查队列 | [#460](https://github.com/qhkm/zeptoclaw/pull/460), [#462](https://github.com/qhkm/zeptoclaw/pull/462) | 双 PR 存在潜在冲突（均涉及消息生成逻辑），且 #462 依赖 #460 的压缩后内容长度可控性 | 建议按序合并：先 #460 确保内容长度边界，再 #462 确保传输可靠性 |
| 单点依赖 | 全部今日活动来自 stuartbowness | 核心开发者瓶颈，缺乏代码审查的独立视角 | 建议引入第二位 maintainer 或建立社区 review 机制 |

---

**数据截止**：2026-03-29 00:00 UTC  
**项目健康度评分**：🟢 7/10（技术迭代活跃，社区广度待扩展）

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 | 2026-03-29

> 项目地址：https://github.com/gaoyangz77/easyclaw  
> 注：根据数据，实际活跃仓库为 **RivonClaw**（gaoyangz77/rivonclaw），以下分析基于该仓库

---

## 1. 今日速览

今日 RivonClaw 项目活跃度**中等偏低**，核心动态为发布 v1.7.8 补丁版本，主要解决 macOS 签名问题。社区层面出现**同一 Bug 的重复报告**（#28、#29），涉及百炼套餐模型切换后的 API 调用失败，目前尚无修复 PR。过去 24 小时无代码合并活动，项目处于维护性更新阶段，稳定性问题成为当前主要关注点。

---

## 2. 版本发布

### [v1.7.8 - RivonClaw](https://github.com/gaoyangz77/rivonclaw/releases/tag/v1.7.8)

| 属性 | 详情 |
|:---|:---|
| 发布日期 | 2026-03-28 |
| 更新类型 | 补丁修复（非功能性） |
| 核心变更 | 补充 macOS 安装文档与 Gatekeeper 绕过指南 |

**关键内容：**

本次发布未包含代码变更，主要为**文档级修复**，针对 macOS 用户普遍遇到的 `"RivonClaw" is damaged and can't be opened` 误报问题：

- **问题根因**：macOS Gatekeeper 对未签名应用的拦截机制
- **官方解决方案**：提供 Terminal 命令行绕过步骤（文档中未完整展示，推测为 `xattr -cr` 或 `spctl` 相关命令）

**迁移注意事项：**
- 从 v1.7.7 升级无需数据迁移
- macOS 用户首次安装需手动执行安全例外操作

---

## 3. 项目进展

**今日无合并 PR**，代码库未推进功能性变更。

项目整体进展评估：**停滞状态**。v1.7.8 为文档补丁，未触及核心功能。结合 Issues 趋势，开发资源可能正聚焦于百炼套餐的模型兼容性问题（见第 5 节）。

---

## 4. 社区热点

### 热点 Issue：百炼套餐模型切换 Bug（重复报告）

| Issue | 状态 | 作者 | 互动 | 链接 |
|:---|:---|:---|:---|:---|
| #29 | 🔴 Open | slowayear | 1 评论 | [gaoyangz77/rivonclaw#29](https://github.com/gaoyangz77/rivonclaw/issues/29) |
| #28 | 🔴 Open | slowayear | 0 评论 | [gaoyangz77/rivonclaw/issues/28](https://github.com/gaoyangz77/rivonclaw/issues/28) |

**诉求分析：**

- **重复报告信号**：同一用户在 24 小时内提交两份几乎相同的 Bug 报告，表明：
  1. 问题**复现率 100%**，阻塞核心使用路径
  2. 用户对首次报告的响应时效**存在焦虑**（#28 无评论后追加 #29）
  3. 百炼套餐作为付费/增值功能，稳定性直接影响用户付费意愿

- **技术线索**：错误码 `InternalError.Algo.InvalidParameter: Range of input length should be [1, 202752]` 暗示：
  - Qwen3.5 与其他模型（GLM/Kimi）的 **token 长度限制参数传递存在差异**
  - 可能是模型配置表未同步更新，或 API 请求构造时未根据目标模型动态调整 `max_tokens` 等参数

---

## 5. Bug 与稳定性

| 优先级 | 问题 | Issue | 状态 | 修复 PR | 影响范围 |
|:---|:---|:---|:---|:---|:---|
| 🔴 **P0-紧急** | 百炼套餐模型切换后 API 400 错误 | [#29](https://github.com/gaoyangz77/rivonclaw/issues/29) [#28](https://github.com/gaoyangz77/rivonclaw/issues/28) | 待修复 | ❌ 无 | 百炼套餐全量用户（Windows 已确认，macOS 待验证）|

**技术诊断：**

```
错误特征：InternalError.Algo.InvalidParameter: Range of input length should be [1, 202752]
├── 触发条件：从 Qwen3.5 切换至 GLM-5 / Kimi-2.5
├── 错误码：HTTP 400（客户端参数错误，但实际为服务端拒绝）
└── 推测根因：
    ├── 可能 A：模型配置硬编码了 Qwen3.5 的上下文长度（202752），未按目标模型动态调整
    ├── 可能 B：百炼套餐的模型路由层未正确传递模型特定参数
    └── 可能 C：GLM/Kimi 的 API 版本与 Qwen3.5 不兼容，需独立适配
```

**建议修复路径：**
1. 检查 `src/` 下模型配置表的 `context_window` 字段是否按模型隔离
2. 验证切换模型时是否重置了对话历史 token 计数器
3. 为百炼套餐增加模型切换时的参数校验层

---

## 6. 功能请求与路线图信号

**今日无新增功能请求。**

结合现有 Bug 模式，推测下一版本（v1.7.9 或 v1.8.0）可能优先纳入：

| 方向 | 优先级 | 依据 |
|:---|:---|:---|
| 百炼套餐多模型兼容层重构 | P0 | 阻塞性 Bug 的系统性修复需求 |
| 模型切换时的参数自动适配 | P0 | #29 的直接解决方案 |
| 错误信息本地化优化 | P1 | 当前英文错误码对中文用户不友好 |

---

## 7. 用户反馈摘要

从 Issues 评论提炼的真实痛点：

| 维度 | 反馈内容 | 来源 |
|:---|:---|:---|
| **阻塞性痛点** | "从 Qwen3.5 切换到 Kimi2.5 和 GLM5 之后，输入信息后得到错误" | #28 标题 |
| **环境信息** | Windows 11 + v1.7.7 | #28 正文 |
| **行为模式** | 用户倾向于在多模型间频繁切换对比效果，而非固定使用单一模型 | #29 复现步骤推断 |
| **焦虑信号** | 24 小时内重复提交相同 Issue，未等待首次响应 | #28 → #29 时间线 |

**满意度推断：**
- ❌ **不满意点**：核心付费功能（百炼套餐）的模型切换体验断裂
- ⚠️ **中性点**：macOS 安装问题有文档 workaround，但非根本解决（仍需签名流程）

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 问题类型 | 风险提示 |
|:---|:---|:---|:---|
| [#28](https://github.com/gaoyangz77/rivonclaw/issues/28) | 2026-03-28 | Bug-重复报告 | 建议维护者关闭并合并至 #29，避免信息分散 |
| [#29](https://github.com/gaoyangz77/rivonclaw/issues/29) | 2026-03-28 | Bug-核心功能 | **需 48 小时内响应**，否则可能引发更多重复报告或用户流失 |

**维护者行动建议：**
1. 立即确认 #29 的修复排期，在 Issue 中置顶回复
2. 检查是否有其他用户通过邮件/Discord 等渠道报告相同问题（数据漏斗外损失）
3. 考虑为百炼套餐增加模型切换的灰度测试或 Beta 标签，降低正式用户触达风险

---

> **日报生成时间**：2026-03-29  
> **数据覆盖范围**：过去 24 小时（2026-03-28 至 2026-03-29）

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*