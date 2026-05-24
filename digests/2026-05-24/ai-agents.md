# OpenClaw 生态日报 2026-05-24

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-24 00:23 UTC

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

# OpenClaw 项目动态日报 | 2026-05-24

---

## 1. 今日速览

OpenClaw 今日保持**极高活跃度**：24小时内 Issues 更新 500 条（484 条新开/活跃，仅 16 条关闭），PR 更新 500 条（189 条待合并，311 条已合并/关闭），社区讨论密度显著。项目处于**快速迭代期**，但关闭率偏低（Issues 关闭率仅 3.2%），表明积压压力持续累积。v2026.5.22-beta.1 文档更新发布，无重大功能变更。核心风险集中在**消息投递可靠性**（Telegram/Signal/Discord 多通道泄漏与丢失）、**沙箱安全边界**和**会话状态管理**三大领域。

---

## 2. 版本发布

### [v2026.5.22-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.5.22-beta.1)

**发布日期**：2026-05-22  
**类型**：文档补丁版本

**更新内容**：
| 模块 | 变更 | 贡献者 |
|:---|:---|:---|
| 新手引导 | 澄清 README 入门流程与 Gateway 启动路径 | @deepujain |
| WhatsApp 集成 | QR 码扫描失败与 408 超时恢复指南 | @Zacxxx |
| 定时任务 | Cron 输出语言提示优化 | @Jah-yee |
| 技能系统 | 高级功能文档补充 | @neyric |
| 网关运维 | 上游 403 故障排查指南 | @usimic |
| 插件开发 | Fallback 覆盖机制说明 | (多人) |

**破坏性变更**：无  
**迁移注意**：纯文档更新，无需代码变更。建议所有用户同步更新本地文档索引。

---

## 3. 项目进展

### 今日合并/关闭的关键 PR（5 条）

| PR | 作者 | 核心变更 | 影响面 |
|:---|:---|:---|:---|
| [#85863](https://github.com/openclaw/openclaw/pull/85863) | @jjjhenriksen | **内存架构重构**：通过 `MemoryDreamingProvider` 接口解耦 dreaming 与 memory-core，支持插件化实现轻/深/REM 记忆巩固 | 扩展性 ↑，核心耦合 ↓ |
| [#85873](https://github.com/openclaw/openclaw/pull/85873) | @brokemac79 | **ACP 启动优化**：跳过 one-shot 模式的启动身份对账，减少无状态实例的冗余检查 | 启动性能 ↑ |
| [#41172](https://github.com/openclaw/openclaw/pull/41172) | @dredozubov | **Groq 错误识别**：支持 Groq 工具调用验证失败的特殊错误格式 | 模型兼容性 ↑ |
| [#41038](https://github.com/openclaw/openclaw/pull/41038) | @Narcooo | **ChatUI 工具输出**：结构化工具结果优先展示 stdout | 调试体验 ↑ |
| [#41037](https://github.com/openclaw/openclaw/pull/41037) | @Narcooo | **配置推断**：从 profile ID 自动推断 auth provider，修复配置验证 | 配置简化 ↑ |
| [#39762](https://github.com/openclaw/openclaw/pull/39762) | @fengbird | **飞书只读模式**：群组观察模式，接收但不回复消息 | 企业合规 ↑ |
| [#39761](https://github.com/openclaw/openclaw/pull/39761) | @rmzlb | **插件钩子增强**：`message_sending` 钩子注入 agent 推理上下文 | 可观测性 ↑ |

**整体评估**：今日合并以**中等规模的体验优化和缺陷修复**为主，无重大架构变更。记忆子系统的插件化重构（#85863）是长期技术债务偿还的关键一步。

---

## 4. 社区热点

### 🔥 讨论最激烈的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 👍 | 核心诉求 | 链接 |
|:---|:---|:---:|:---:|:---|:---|
| 1 | **Linux/Windows Clawdbot 原生应用** | 105 | 77 | 跨平台桌面客户端缺口，macOS/iOS/Android 已覆盖，开发者强烈呼吁补齐 | [#75](https://github.com/openclaw/openclaw/issues/75) |
| 2 | **工具调用间文本泄漏至消息通道** | 26 | 0 | **P1 安全/UX 缺陷**：agent 内部处理文本（错误处理、执行确认）被路由到 Slack/iMessage 等可见消息 | [#25592](https://github.com/openclaw/openclaw/issues/25592) |
| 3 | **预构建 Android APK 发布** | 25 | 1 | 降低移动端部署门槛，避免用户自行编译 | [#9443](https://github.com/openclaw/openclaw/issues/9443) |
| 4 | **Signal daemon 重启竞态条件** | 17 | 0 | **P1 稳定性**：SIGUSR1 重启时孤儿进程与端口冲突 | [#22676](https://github.com/openclaw/openclaw/issues/22676) |
| 5 | **分层引导文件加载** | 16 | 0 | 大工作区上下文窗口优化，按层级加载减少 token 浪费 | [#22438](https://github.com/openclaw/openclaw/issues/22438) |

### 诉求分析

- **#75 跨平台客户端**：历史最悠久的功能请求（创建于 2026-01-01），105 条评论显示社区耐心正在耗尽，已成为**平台完整性的象征性障碍**
- **#25592 文本泄漏**：零点赞但 26 条评论，表明这是**被动遭遇的痛点**而非主动追求的功能，用户期望静默修复而非讨论
- **#9443 Android APK**：由 AI 助手 QING 代提交，反映**AI-native 工作流**正在进入开源社区参与模式

---

## 5. Bug 与稳定性

### P1（严重）：需立即关注

| Issue | 描述 | 状态 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|
| **文本泄漏至消息通道** | 工具调用间内部文本暴露给用户 | 🔴 开放，无修复 PR | — | [#25592](https://github.com/openclaw/openclaw/issues/25592) |
| **Signal daemon 重启竞态** | SIGUSR1 重启导致孤儿进程、发送失败 | 🔴 开放，有链接 PR | [#36630](https://github.com/openclaw/openclaw/pull/36630) | [#22676](https://github.com/openclaw/openclaw/issues/22676) |
| **子 agent 完成静默丢失** | 超时无重试、无通知、无自动重启 | 🔴 开放，有链接 PR | — | [#44925](https://github.com/openclaw/openclaw/issues/44925) |
| **会话上下文混淆** | Agent 回复前一条而非当前消息 | 🔴 开放，需现场复现 | — | [#32296](https://github.com/openclaw/openclaw/issues/32296) |
| **Exec 审批路径忽略状态根** | 写入 `~/.openclaw` 而非配置的运行时根 | 🔴 开放 | — | [#29736](https://github.com/openclaw/openclaw/issues/29736) |
| **Discord 内部工具调用痕迹泄漏** | `NO_REPLY`、`to=functions` 等暴露 | 🔴 开放 | — | [#44905](https://github.com/openclaw/openclaw/issues/44905) |
| **沙箱 workspaceAccess=none 时只读** | 隔离工作区不可写，工具无法运行 | 🔴 开放 | — | [#37634](https://github.com/openclaw/openclaw/issues/37634) |
| **Docker + 沙箱 workspace 绑定失败** | 容器内路径映射错误 | 🔴 开放，有链接 PR | — | [#31331](https://github.com/openclaw/openclaw/issues/31331) |
| **会话压缩超时导致无限挂起** | 重复发送重复消息，无恢复机制 | 🔴 开放 | — | [#43661](https://github.com/openclaw/openclaw/issues/43661) |
| **apply_patch 被策略管道拦截** | 回归：内置工具被当作未知/仅插件工具 | 🔴 开放 | [#45269](https://github.com/openclaw/openclaw/issues/45269) |

### P2（重要）

| Issue | 描述 | 状态 | 链接 |
|:---|:---|:---|:---|
| Control UI 需要设备身份（HTTPS/localhost） | 回归：VPS+Docker 部署后 Brave key 配置失败 | 🔴 开放 | [#32473](https://github.com/openclaw/openclaw/issues/32473) |
| 心跳/Cron "当前时间" 时间戳陈旧 | 运行间不刷新，agent 获取错误时间 | 🔴 开放，有链接 PR | [#44993](https://github.com/openclaw/openclaw/issues/44993) |
| Webchat 头像端点 404 | 有效 IDENTITY.md 头像仍返回 404 | 🔴 开放 | [#38439](https://github.com/openclaw/openclaw/issues/38439) |
| 内存管理混乱 | 同一团队不同用户存储行为不一致 | 🔴 开放 | [#43747](https://github.com/openclaw/openclaw/issues/43747) |
| `exec` 工具不继承 `skills.entries.*.env` | 回归：环境变量无法注入子进程 | 🔴 开放，有链接 PR | [#31583](https://github.com/openclaw/openclaw/issues/31583) |
| OPENCLAW_HOME 嵌套目录 | `~/.openclaw/.openclaw` 重复创建 | 🔴 开放 | [#45765](https://github.com/openclaw/openclaw/issues/45765) |

---

## 6. 功能请求与路线图信号

### 高概率纳入下一版本（已有 PR 或强需求信号）

| 功能 | 状态 | 关键 PR/Issue | 信号强度 |
|:---|:---|:---|:---:|
| **Telegram 持久化重试目标规范化** | 🟡 自动合并待命 | [#85656](https://github.com/openclaw/openclaw/pull/85656) | ⭐⭐⭐⭐⭐ |
| **Agent 级策略覆盖** | 🟡 等待维护者审核 | [#85817](https://github.com/openclaw/openclaw/pull/85817) | ⭐⭐⭐⭐⭐ |
| **TTS 跳过表情符号** | 🟢 就绪待合并 | [#78172](https://github.com/openclaw/openclaw/pull/78172) | ⭐⭐⭐⭐⭐ |
| **进程监管器优雅取消** | 🟡 等待维护者审核 | [#85865](https://github.com/openclaw/openclaw/pull/85865) | ⭐⭐⭐⭐⭐ |
| **实时语音通话 active-run 控制** | 🟡 需行为证明 | [#84231](https://github.com/openclaw/openclaw/pull/84231) | ⭐⭐⭐⭐☆ |
| **Memory 递归子目录搜索** | 🔴 开放 | [#34400](https://github.com/openclaw/openclaw/issues/34400) | ⭐⭐⭐⭐☆ |
| **Gemini 3.1 Flash-Lite GA 迁移** | 🔴 开放 | [#80380](https://github.com/openclaw/openclaw/issues/80380) | ⭐⭐⭐⭐☆ |

### 中长期路线图信号（无近期 PR）

| 功能 | 核心障碍 | Issue |
|:---|:---|:---|
| **Linux/Windows 原生应用** | 资源投入，跨平台框架选型 | [#75](https://github.com/openclaw/openclaw/issues/75) |
| **预构建 Android APK** | CI/CD 签名与发布流程 | [#9443](https://github.com/openclaw/openclaw/issues/9443) |
| **Slack Block Kit 支持** | 富消息格式与现有文本管道的兼容 | [#12602](https://github.com/openclaw/openclaw/issues/12602) |
| **Agent 成本预算网关级强制** | 计费基础设施与策略引擎 | [#42475](https://github.com/openclaw/openclaw/issues/42475) |
| **原生密钥管理集成**（AWS Secrets Manager, Vault） | 多云抽象层设计 | [#13610](https://github.com/openclaw/openclaw/issues/13610) |
| **多 Agent 协作增强**（能力画像+共享黑板+分层记忆） | 架构复杂度，需 RFC 阶段 | [#35203](https://github.com/openclaw/openclaw/issues/35203) |

---

## 7. 用户反馈摘要

### 核心痛点（从 Issue 评论提炼）

| 主题 | 典型原声 | 出现频率 |
|:---|:---|:---:|
| **消息可靠性焦虑** | *"Subagent results are silently lost"* / *"Discord leaks internal tool-call traces"* | 🔴 极高 |
| **部署门槛** | *"I can't find how to solve this"* (VPS+Docker+HTTPS) / *"no precompiled APK"* | 🔴 极高 |
| **上下文窗口浪费** | *"Bootstrap files consume LLM tokens on every session"* / *"~3,500 tok/session fixed tax"* | 🟡 高 |
| **安全边界模糊** | *"Agent can see raw API keys"* / *"exec approvals path ignores active state root"* | 🟡 高 |
| **平台覆盖不完整** | *"Linux and Windows are missing"* | 🟡 高 |
| **内存行为不一致** | *"I never see any of our memory is managed in same way"* | 🟡 高 |
| **时间感知错误** | *"Current time timestamp is stale - not refreshing between runs"* | 🟢 中 |

### 满意度信号

- **正面**：记忆系统（概念上）、多通道支持（概念上）、插件扩展性
- **负面**：实际运行中的**静默失败**（无日志、无通知、无恢复）、**配置碎片化**（环境变量、JSON、状态根多处定义）、**Docker 场景的一等公民支持不足**

---

## 8. 待处理积压

### ⚠️ 维护者需优先响应的长期 Issue

| Issue | 创建日期 | 最后更新 | 天数 | 风险 | 链接 |
|:---|:---|:---|:---:|:---|:---|
| **Linux/Windows Clawdbot Apps** | 2026-01-01 | 2026-05-23 | **143** | 平台完整性承诺失效，社区信任损耗 | [#75](https://github.com/openclaw/openclaw/issues/75) |
| **Masked Secrets - 阻止 Agent 访问原始 API 密钥** | 2026-02-06 | 2026-05-23 | **107** | **安全合规 blocker**，企业采用障碍 | [#10659](https://github.com/openclaw/openclaw/issues/10659) |
| **Filesystem Sandboxing Config** | 2026-02-03 | 2026-05-23 | **110** | 多用户部署的安全基础 | [#7722](https://github.com/openclaw/openclaw/issues/7722) |
| **动态模型发现（OpenRouter+）** | 2026-02-06 | 2026-05-23 | **107** | 模型生态快速迭代，静态目录滞后 | [#10687](https://github.com/openclaw/openclaw/issues/10687) |
| **Exec 审批 Denylist** | 2026-02-01 | 2026-05-23 | **112** | 安全策略灵活性，7 👍 高社区支持 | [#6615](https://github.com/openclaw/openclaw/issues/6615) |
| **备份/恢复工具** | 2026-02-10 | 2026-05-23 | **103** | 灾难恢复与迁移刚需 | [#13616](https://github.com/openclaw/openclaw/issues/13616) |
| **Webhook 多轮会话复用** | 2026-02-08 | 2026-05-23 | **105** | 文档承诺与实际行为不符 | [#11665](https://github.com/openclaw/openclaw/issues/11665) |

### PR 侧积压风险

| PR | 创建日期 | 状态 | 风险 |
|:---|:---|:---|:---|
| [#38295](https://github.com/openclaw/openclaw/pull/38295) 配置去重与重启风暴 | 2026-03-06 | ⏳ 等待作者 | 80 天未推进，配置稳定性问题持续 |
| [#36630](https://github.com/openclaw/openclaw/pull/36630) Signal 双向引用回复 | 2026-03-05 | 📣 需证明 | 80 天，关联 P1 Issue #22676 |

---

## 附录：数据健康度指标

| 指标 | 数值 | 评估 |
|:---|:---:|:---|
| Issues 日更新量 | 500 | ⚠️ 极高，需关注分流机制 |
| Issues 关闭率 | 3.2% (16/500) | 🔴 过低，积压加速 |
| PR 合并/关闭率 | 62.2% (311/500) | 🟡 健康，但待合并 189 条需审核带宽 |
| P1 Issue 占比 | ~15% | 🔴 高优先级债务集中 |
| 平均 Issue 年龄（Top 50） | ~45 天 | 🟡 中等，但头部 Issue 超 140 天 |
| 社区参与度（评论>10 的 Issue 数） | 12 条 | 🟢 活跃讨论 |

---

*本日报基于 GitHub 公开数据生成，所有链接指向 github.com/openclaw/openclaw*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析
**分析日期：2026-05-24 | 数据来源：GitHub 公开活动流**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态正处于**从"功能可用"向"生产可靠"跃迁的关键阵痛期**。头部项目（OpenClaw、ZeroClaw、IronClaw）日均 50+ Issues/PR 的吞吐量显示技术迭代极快，但 Issues 关闭率普遍偏低（3-16%）、P1 级安全与稳定性债务大量积压，反映出**工程化成熟度滞后于功能扩张速度**。MCP（Model Context Protocol）作为新兴标准正被快速采纳，但适配层的测试覆盖不足已引发连锁 Bug。与此同时，社区诉求从单一功能扩展转向**多租户隔离、成本可控、安全可审计**等企业级特性，标志着该领域从个人玩具向基础设施平台的质变。

---

## 2. 各项目活跃度对比

| 项目 | Issues（24h） | PRs（24h） | 今日合并/关闭 | 版本发布 | 健康度评估 |
|:---|:---:|:---:|:---:|:---:|:---|
| **OpenClaw** | 500（484 活跃/新开，16 关闭） | 500（189 待合并，311 已合并/关闭） | 7 个关键 PR | v2026.5.22-beta.1（文档补丁） | 🔴 **高活跃-高积压**：关闭率仅 3.2%，P1 Issue 占比 ~15%，Issues 平均年龄 45 天，头部 Issue 超 140 天 |
| **NanoBot** | 8（5 活跃/新开，3 关闭） | 10（6 待合并，4 已合并/关闭） | 4 个 PR | 无 | 🟢 **高活跃-良闭环**：闭环效率 40%，但 1 个阻塞性 Bug（GPT Duplicate ID）18 天未修复 |
| **Hermes Agent** | 50（45 活跃/新开，5 关闭） | 50（40 待合并，10 已合并/关闭） | 5 个 PR | 无 | 🟡 **高活跃-中积压**：P1/P2 级平台适配器 Bug 密集（Telegram/QQ 重连、CPU 空转），修复 PR 响应快但验证周期长 |
| **PicoClaw** | 6（3 新开，3 关闭） | 6（3 待合并，3 已合并/关闭） | 6 个 PR | v0.2.9-nightly.20260523 | 🟢 **高活跃-强收敛**：关闭率 50%，关键修复（Seahorse 预算强制、DeepSeek thinking）当日落地，但 v0.2.8 零通道启动 Bug 22 天无响应 |
| **NanoClaw** | 4（1 新开，3 关闭） | 17（4 待合并，13 已合并/关闭） | 13 个 PR | 无 | 🟢 **极高吞吐-良闭环**：合并率 76%，WhatsApp 渠道与 agent-runner 可靠性大幅提升，但 v1→v2 迁移断裂（#2603） |
| **NullClaw** | 0 | 10（全部待合并） | 0 | 无 | 🔴 **高积压-零闭环**：10 个 PR 平均等待数日，最长 23 天，核心功能修复（子代理结果丢失、全局记忆不可见）无法进入主分支 |
| **IronClaw** | 15（全部新开） | 50（33 待合并，17 已合并/关闭） | 4 个 PR | 无 | 🟡 **极高开发速度-低发布就绪**：Reborn 架构重构全速推进，安全投入极高，但 E2E 持续失败 14 天、安装脚本损坏一个月未解 |
| **LobsterAI** | 3（全部新开） | 2（全部待合并） | 0 | 无 | 🔴 **低活跃-停滞**：两条 PR stale 47 天，工程推进近乎停滞，社区进入架构反思模式而非代码迭代 |
| **Moltis** | 8（5 新开，3 关闭） | 4（1 待合并，3 已合并/关闭） | 3 个 PR | 无 | 🟢 **高闭环效率**：60% 修复/关闭比，"报告-修复-关闭"当日闭环，但安全漏洞（MCP 环境变量泄露）无修复 PR |
| **CoPaw** | 11（10 活跃/新开，1 关闭） | 2（全部待合并） | 0 | 无 | 🟡 **问题暴露密集**：MCP 适配层 2 个 Critical Bug 当日集中爆发，Console UI Heisenbug 无日志调试黑箱 |
| **ZeptoClaw** | 2（1 新开，1 关闭） | 17（3 待合并，14 已合并/关闭） | 14 个 PR | 无 | 🟡 **高合并-零社区**：82% 合并率但 15/17 PR 为 Dependabot 自动化，零外部互动，RUSTSEC 漏洞阻断 CI |
| **ZeroClaw** | 50（42 活跃/新开，8 关闭） | 50（37 待合并，13 已合并/关闭） | 13 个 PR | 无 | 🟡 **高活跃-低合并率**：合并率 26%，16 通道架构重构 PR 全部阻塞在作者侧，v0.8.0-beta-1 回归集群显现 |
| **TinyClaw** | 0 | 0 | 0 | 无 | ⚫ **无活动** |

---

## 3. OpenClaw 在生态中的定位

### 规模与影响力
OpenClaw 是**生态中绝对体量最大的项目**（日均 1000 条 Issues+PR 更新），社区规模远超第二名 10 倍以上，Issues #75（Linux/Windows 客户端）143 天 105 条评论显示其作为**事实标准**的号召力。其文档化程度（v2026.5.22-beta.1 纯文档更新覆盖 6 个模块）和插件生态（5700 个 Skill，尽管 25.7% 恶意率暴露治理缺口）构成竞争壁垒。

### 技术路线差异
| 维度 | OpenClaw | 同类对比 |
|:---|:---|:---|
| **架构哲学** | "网关+通道+技能"的集中式管道，强调**多平台消息统一路由** | ZeroClaw 倾向 Rust 原生中间件管道；IronClaw 推进 WASM 沙箱化 hooks；NanoClaw 聚焦 per-group 配置隔离 |
| **安全模型** | 策略管道拦截（apply_patch 回归 #45269）、exec 审批路径 | IronClaw 内核级 `openat2`/`O_NOFOLLOW` 文件系统隔离；Moltis 的 Agent 级能力边界 |
| **记忆系统** | MemoryDreamingProvider 插件化重构（#85863），支持轻/深/REM 记忆巩固 | NanoBot 的 Dream Consolidator MECE 优化；LobsterAI 被社区指出缺乏真正的跨场景长期记忆 |
| **部署形态** | 云原生优先（Docker、K8s），但 Linux/Windows 原生客户端长期缺失（#75） | PicoClaw 覆盖 Android；ZeroClaw 推进 TUI 终端交互；NanoClaw 强调私有化部署（LiteLLM/vLLM） |

### 核心优势
- **通道覆盖最全**：Telegram/Signal/Discord/WhatsApp/iMessage/Slack/飞书/微信等 10+ 渠道，企业集成场景无出其右
- **社区生态最活跃**：插件市场、多语言贡献者、AI-native 工作流（QING 代提交 Issue #9443）

### 结构性风险
- **积压失控**：3.2% Issues 关闭率、45 天平均年龄，与 IronClaw（14 天 E2E 失败未解）、ZeroClaw（26% 合并率）共同构成**"高速建设、低速交付"**的行业通病
- **消息可靠性危机**：P1 级文本泄漏（#25592）、Discord 工具调用痕迹暴露（#44905）、子 agent 静默丢失（#44925）等 10 个开放 Issue 形成**信任侵蚀集群**

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求与紧急程度 |
|:---|:---|:---|
| **MCP（Model Context Protocol）生态集成** | CoPaw、Moltis、NanoClaw | CoPaw #4643 OAuth 不支持 `client_secret`、#4646 Schema Sanitizer 破坏工具定义；Moltis #1054 MCP 环境变量泄露至 LLM；NanoClaw #2600 MCP 轮播卡片发送工具。**诉求**：协议适配层测试矩阵、配置隔离、供应链安全 |
| **消息通道稳定性与可靠性** | OpenClaw、Hermes Agent、NanoClaw、PicoClaw、NullClaw | OpenClaw Signal 重启竞态（#22676）、Telegram 持久化重试（#85656）；Hermes Agent QQ Bot CPU 空转（#31193）、Telegram 话题劫持（#31086）；NanoClaw WhatsApp LID 映射丢失（#2194）；PicoClaw 零通道启动（#2742）；NullClaw 子代理结果静默丢失（#928）。**诉求**：重连逻辑健壮性、状态持久化、故障可观测性 |
| **记忆系统深度优化** | OpenClaw、NanoBot、LobsterAI、ZeroClaw | OpenClaw MemoryDreamingProvider 插件化（#85863）；NanoBot Dream Consolidator MECE 原则（#3952）；LobsterAI #2041 指出"最大瓶颈是记忆系统"；ZeroClaw MemoryStrategy trait 解耦（#6850）。**诉求**：跨场景长期记忆、记忆冗余消除、上下文窗口优化 |
| **安全边界与沙箱隔离** | OpenClaw、IronClaw、Moltis、NanoClaw | OpenClaw 沙箱 workspaceAccess=none 只读（#37634）、Docker 绑定失败（#31331）；IronClaw 跨租户泄漏（#3931）、TOCTOU 竞态（#3952）；Moltis Agent 能力边界（#1049）；NanoClaw CSPRNG 替换（#2545）。**诉求**：内核级隔离、租户间零信任、审批流程防预测攻击 |
| **配置系统简化与一致性** | OpenClaw、ZeroClaw、NanoBot、Hermes Agent | OpenClaw 配置推断（#41037）、状态根被忽略（#29736）；ZeroClaw v2→v3 schema 迁移遗漏（#6856）、`max_tool_iterations` 层级混乱（#6877）；NanoBot Groq 转录配置陷阱（#3637）；Hermes Agent `.env` 空字节崩溃（#29360）。**诉求**：配置验证前置、层级语义清晰、错误反馈即时 |
| **成本与预算控制** | OpenClaw、IronClaw、PicoClaw、NanoBot | OpenClaw Agent 成本预算网关级强制（#42475）；IronClaw Reborn 基于成本的预算控制（#3899）；PicoClaw Seahorse 预算强制修复（#2895）；NanoBot 子代理 temperature 精细化（#3969）。**诉求**：Token 用量透明、硬预算截断、模型选择成本优化 |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户画像 | 技术架构关键差异 |
|:---|:---|:---|:---|
| **OpenClaw** | 多通道消息路由、插件化技能市场、企业集成 | 需要统一 IM 入口的**企业 IT 管理员**、多平台运营者 | TypeScript/Node.js 网关+通道管道；WASM 技能沙箱（规划中）；策略管道拦截 |
| **NanoBot** | 子代理精细化控制（temperature）、Dream 记忆架构、开发者体验 | **AI 应用开发者**、需要深度定制代理行为的工程师 | 轻量级架构；内置 provider 抽象；MECE 记忆合并；Hooks 预留扩展点 |
| **Hermes Agent** | Claude 生态原生集成、多平台 Bot 适配器、本地 LLM 友好 | **Anthropic 生态用户**、本地模型爱好者、macOS 终端用户 | Python 核心；TUI 模式；kanban 调度器；SQLite 持久化；忙文本模式队列 |
| **PicoClaw** | 上下文预算引擎（Seahorse）、DeepSeek 原生对接、中国市场适配 | **成本敏感型用户**、DeepSeek 生态早期采用者、中文开发者 | Golang 实现；Seahorse Assembler 预算强制；微信多账号（PR #2883） |
| **NanoClaw** | per-group 配置隔离、WhatsApp 企业级部署、私有化模型接入 | **企业 WhatsApp 客服**、需要组级定制的 SaaS 运营商 | TypeScript；`container.json` 配置体系；agent-runner 自愈合；会话转录轮转 |
| **NullClaw** | Zig 原生 HTTP 栈、极简依赖、安全默认 | **系统编程爱好者**、对供应链攻击极度敏感的安全从业者 | Zig 全栈；curl 子进程移除中；零外部 HTTP 运行时依赖目标 |
| **IronClaw** | WASM hooks 框架、多租户沙箱、持久化 predicate 后端 | **多租户 SaaS 平台构建者**、企业安全合规团队 | Rust 核心；WASM 事件触发 hooks；Postgres/libSQL 状态后端；内核级文件系统隔离 |
| **LobsterAI** | Self-evolver 自动进化、Computer Use 多模态 | **研究型用户**、探索自主代理边界的实验者 | 进化算法驱动；.learnings 历史分析；与顶级多模态模型深度绑定 |
| **Moltis** | Agent 级能力边界（MCP/sandbox/skills 隔离）、家庭/企业多场景 | **家庭用户**（家长-儿童隔离）、**小型企业**多角色权限 | Rust 核心；Agent Preset → Capability Sandbox → Runtime Enforcement 三层架构 |
| **CoPaw** | Console UI 调试体验、DataPaw 数据分析插件、远程 Daemon 架构 | **数据分析师**、需要可视化 Agent 行为的运维人员 | Python；Streamlit 式 Console；插件化 BI 技能；服务器-客户端分离 |
| **ZeptoClaw** | 中间件 Pipeline 架构、本地优先、极致性能 | **Rust 开发者**、追求低延迟的边缘部署场景 | Rust 全栈；Phase 2b 中间件替换 `process_message`；154k LOC 自研为主 |
| **ZeroClaw** | TUI 终端原生交互、ACP 协议扩展、16 通道架构标准化 | **开发者/运维人员**、偏好终端工作流的技术用户 | Rust 核心；Ratatui TUI；ICSE 2027 评估驱动的 AllowlistAspect 迁移 |

---

## 6. 社区热度与成熟度

### 快速迭代阶段（日均 50+ 更新，功能扩张优先）
| 项目 | 特征 | 风险 |
|:---|:---|:---|
| **OpenClaw** | 社区规模最大，但关闭率 3.2% 显示**治理机制跟不上扩张速度** | 技术债务滚雪球，P1 安全 Issue 可能引发信任危机 |
| **IronClaw** | Reborn 架构重构全速推进，安全投入极高 | E2E 失败 14 天、安装脚本损坏一个月，**基础设施稳定性拖累创新速度** |
| **ZeroClaw** | TUI + ACP 协议双轨并行，beta 测试活跃 | v0.8.0-beta-1 回归集群，16 通道迁移 PR 全部阻塞，**集成风险累积** |

### 质量巩固阶段（闭环效率高，聚焦可靠性）
| 项目 | 特征 | 挑战 |
|:---|:---|:---|
| **NanoClaw** | 76% 合并率，WhatsApp 与 agent-runner 可靠性大幅提升 | v1→v2 迁移断裂，需维护者明确兼容性策略 |
| **PicoClaw** | 50% 关闭率，关键修复当日落地 | v0.2.8 零通道启动 Bug 22 天无响应，**新旧版本质量波动** |
| **Moltis** | 当日闭环 60%，"修复即加固"工程纪律 | 安全漏洞（#1054）无修复 PR，需启动安全响应流程 |

### 停滞或转型期（低活跃或架构反思）
| 项目 | 特征 | 风险 |
|:---|:---|:---|
| **LobsterAI** | 工程停滞，社区进入架构反思（记忆瓶颈、竞品对标） | 47 天 PR stale，可能流失贡献者；记忆系统重构无 RFC |
| **NullClaw** | 10 个 PR 全部待合并，零闭环 | 核心功能损坏无法修复，项目可能**事实停摆** |
| **ZeptoClaw** | 82% 合并率但 88% 为自动化依赖更新，零社区互动 | 维护者单打独斗，Phase 2b RFC 零反馈增加架构决策风险 |

---

## 7. 值得关注的趋势信号

### 信号一：从"功能扩展"到"故障可观测性"的范式转移
> **数据支撑**：OpenClaw #25592（文本泄漏，26 评论 0 👍）、CoPaw #4644（Console UI Heisenbug，"整个过程没有任何错误日志"）、NanoClaw #2194（LID 映射丢失"无诊断日志"）

**行业含义**：社区对**静默失败（silent failure）** 的容忍度已降至冰点。用户不再满足于"能跑"，而是要求**故障即时感知、根因自动定位、恢复路径明确**。这推动可观测性基础设施（结构化日志、分布式追踪、健康探针）从"锦上添花"变为"准入门槛"。

**对开发者的建议**：在设计 Agent 系统时，优先投资**失败模式显式化**——每一个异步边界、每一个外部调用、每一个状态转换都需有明确的"成功/失败/超时"语义和上报路径。

### 信号二：MCP 成为事实标准，但适配层成熟度严重不足
> **数据支撑**：CoPaw 连续 2 个 MCP Critical Bug（#4643 OAuth、#4646 Schema）；Moltis #1054 MCP 环境变量泄露；Nano

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-05-24

> **项目**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | **日期**: 2026-05-24 | **分析周期**: 过去24小时

---

## 1. 今日速览

NanoBot 今日保持**高活跃度**，24小时内产生 **8 条 Issue 更新**（5 新开/活跃，3 关闭）与 **10 条 PR 更新**（6 待合并，4 已合并/关闭），无新版本发布。社区聚焦三大主线：**子代理能力精细化**（temperature 控制）、**记忆系统深度优化**（Dream 架构反思）、**开发者体验提升**（配置透明化、命令发现）。值得关注的是，今日有 4 个 PR 快速闭环，显示维护团队响应效率较高；同时 6 个 PR 待审，积压压力适中。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### ✅ 今日已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#3967](https://github.com/HKUDS/nanobot/pull/3967) | `04cb` | **双修复：解除 exec 超时硬编码上限 + 规范化转录 apiBase 处理** | [#3595](https://github.com/HKUDS/nanobot/issues/3595), [#3637](https://github.com/HKUDS/nanobot/issues/3637) |
| [#3952](https://github.com/HKUDS/nanobot/pull/3952) | `chengyongru` | **Dream 记忆系统增强**：优化 Consolidator prompt，引入 MECE 原则减少记忆冗余 | [#3047](https://github.com/HKUDS/nanobot/issues/3047) 相关 |
| [#3972](https://github.com/HKUDS/nanobot/pull/3972) | `honjiaxuan` | **文档更新**：小米 MiMo 接入改用内置 `xiaomi_mimo` provider，替代此前的 `custom` 方案 | 替代 [#3619](https://github.com/HKUDS/nanobot/pull/3619) |
| [#3971](https://github.com/HKUDS/nanobot/pull/3971) | `JiajunBernoulli` | **新增智谱 AI 图像生成 provider** | — |

**进展评估**：今日合并的 PR 覆盖**基础设施修复**（超时、API 规范化）、**核心记忆架构优化**（MECE 原则）、**生态扩展**（智谱图像、小米 MiMo 文档化），项目在技术债务清理与能力扩展两条线均有实质推进。`04cb` 的单 PR 双修复尤其体现工程效率。

---

## 4. 社区热点

### 🔥 讨论最活跃的议题

| 排名 | 议题 | 评论数 | 核心诉求 |
|:---|:---|:---|:---|
| 1 | [#3637](https://github.com/HKUDS/nanobot/issues/3637) 转录 Provider 配置不透明 | 3 评论 | **开发者体验**：Groq 语音转录的 `apiBase` 配置与 OpenAI 风格混用导致无效设置，用户需要更清晰的配置边界 |
| 2 | [#3047](https://github.com/HKUDS/nanobot/issues/3047) Dream 记忆合并问题 | 2 评论 | **系统可靠性**：2小时窗口内上下文溢出、记忆回写延迟，影响长时任务连续性 |
| 3 | [#2182](https://github.com/HKUDS/nanobot/issues/2182) Hooks 功能请求 | 2 评论, 👍×2 | **可扩展性**：用户希望生命周期钩子（SessionStart/PreToolUse/PostToolUse）实现自动化工作流 |

**诉求分析**：社区正从"能用"向"好用、可定制"迁移——配置透明性（#3637）、系统可控性（#3047→已部分修复）、架构可扩展性（#2182）构成三层递进需求。Hooks 请求获 2 个 👍 但 2 个月未响应，存在需求-实现落差。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | Fix PR | 影响范围 |
|:---|:---|:---|:---|:---|
| 🔴 **中** | [#3633](https://github.com/HKUDS/nanobot/issues/3633) GPT 模型调用出现 `Duplicate item found with id` 错误，导致任务无法恢复 | **Open** | ❌ 无 | 使用 GPT-5.5 (Codex) 的用户，阻塞性故障 |
| 🟡 低-中 | [#3637](https://github.com/HKUDS/nanobot/issues/3637) Groq 转录配置与 OpenAI 风格 `apiBase` 混用导致无效设置 | **Closed** | ✅ [#3967](https://github.com/HKUDS/nanobot/pull/3967) | 语音转录功能配置阶段 |
| 🟡 低 | [#3047](https://github.com/HKDUDS/nanobot/issues/3047) Dream 2小时窗口上下文溢出 | **Closed** | ✅ [#3952](https://github.com/HKUDS/nanobot/pull/3952) 部分缓解 | 长时运行代理的记忆系统 |

**风险评估**：**#3633 是当前唯一未修复的阻塞性问题**，影响 GPT-5.5/Codex 用户且"cannot resume"表明具有任务破坏性。该 Issue 标记为 `good first issue`，但 18 天未获 PR 响应，建议提升优先级或分配核心维护者。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue/PR | 成熟度 | 纳入下一版本概率 | 关键信号 |
|:---|:---|:---|:---|:---|
| **子代理 temperature 参数** | [#3969](https://github.com/HKUDS/nanobot/issues/3969) → [#3975](https://github.com/HKUDS/nanobot/pull/3975) | 🔶 PR 已开，当日提交 | **高（~80%）** | 需求场景清晰（精确/创意/分析三类任务），实现轻量（"pipeline already existed; this just wires"），无破坏性变更 |
| **OpenAI API 类型与 extra body 配置** | [#3974](https://github.com/HKUDS/nanobot/pull/3974) | 🔶 PR 已开，当日提交 | **中高（~60%）** | 覆盖 `chat_completions`/`responses` 双模式，配置链路完整（config → provider → WebUI → cache），但需审阅复杂度 |
| **BM25-lite 技能路由** | [#3865](https://github.com/HKUDS/nanobot/pull/3865) | 🔶 待审 7 天 | **中（~50%）** | 系统 prompt 缩减 ~60% 的收益显著，但标记 `[question]` 表明设计存疑，需维护者决策 |
| **Heartbeat 推理与通知解耦** | [#1443](https://github.com/HKUDS/nanobot/pull/1443) | 🔶 待审 2.5 个月 | **中低（~40%）** | 长期未审，但功能完整（含配置、文档、默认行为变更），可能因优先级或兼容性顾虑搁置 |
| **Hooks 生命周期机制** | [#2182](https://github.com/HKUDS/nanobot/issues/2182) | 🔴 仅 Issue，2 个月无 PR | **低（~25%）** | 需求明确但实现复杂度高（shell/HTTP/LLM 三类钩子，多生命周期事件），缺乏核心维护者反馈 |
| **Azure Speech 语音转录** | [#3970](https://github.com/HKUDS/nanobot/pull/3970) | 🔶 PR 已开，当日提交 | **中高（~60%）** | 填补 Azure 生态空白，有免费 tier 使用场景，但代码审查质量待确认（作者自述"加了支持"） |
| **WhatsApp 人工回复暂停** | [#2837](https://github.com/HKUDS/nanobot/issues/2837) | 🔴 仅 Issue，1.5 个月 | **低（~20%）** | 场景垂直（WhatsApp），需跨平台状态管理，优先级可能低于核心架构 |

---

## 7. 用户反馈摘要

### 💡 真实痛点

| 来源 | 痛点 | 场景 |
|:---|:---|:---|
| [#3637](https://github.com/HKUDS/nanobot/issues/3637) | 配置"陷阱"：Groq 转录需 `/openai/v1` 路径但系统静默失败 | 用户按直觉配置 `apiBase` 后无法诊断问题，**错误反馈机制不足** |
| [#3047](https://github.com/HKUDS/nanobot/issues/3047) | 长时任务（40k token 预算）在 Dream 周期内耗尽上下文 | **高频、高 token 任务的代理连续性断裂** |
| [#3969](https://github.com/HKUDS/nanobot/issues/3969) | 所有子代理"思维模式"同质化，无法区分精确/创意任务 | **多代理协作的质量瓶颈** |
| [#2837](https://github.com/HKUDS/nanobot/issues/2837) | WhatsApp 群中人工与 bot 回复冲突 | **人机协作边界模糊**，社交场景下的体验破坏 |

### ✅ 满意度信号

- `04cb` 的 [#3967](https://github.com/HKUDS/nanobot/pull/3967) 单 PR 解决两个独立 Issue，体现**维护效率受认可**
- [#3975](https://github.com/HKUDS/nanobot/pull/3975) 引用 "pipeline already existed" 暗示**架构预留扩展点**，降低社区贡献门槛

### ❌ 不满信号

- [#2182](https://github.com/HKUDS/nanobot/issues/2182) Hooks 请求 2 个月无维护者回应，**高级用户的定制化需求被忽视**
- [#3633](https://github.com/HKUDS/nanobot/issues/3633) 标记 `good first issue` 但 18 天无进展，**新贡献者引导机制可能失效**

---

## 8. 待处理积压

> ⚠️ 以下 Issue/PR 长期未获响应，建议维护者优先审阅或明确状态

| 时长 | 项目 | 类型 | 风险/建议 |
|:---|:---|:---|:---|
| **2.5 个月** | [#1443](https://github.com/HKUDS/nanobot/pull/1443) Heartbeat 推理解耦 | PR 待审 | 功能完整但长期搁置，建议合入或明确拒绝理由；涉及默认行为变更（`sendReasoning: false`），需评估兼容性 |
| **2 个月** | [#2182](https://github.com/HKUDS/nanobot/issues/2182) Hooks 功能请求 | Issue 待响应 | 社区 👍×2 表明需求真实，建议维护者回复技术可行性或纳入 roadmap，避免需求流失至竞品 |
| **1.5 个月** | [#2837](https://github.com/HKUDS/nanobot/issues/2837) WhatsApp 人工暂停 | Issue 待响应 | 场景具体但实现不复杂（12h 计时器 + 聊天级状态），可标记 `good first issue` 或 `help wanted` |
| **18 天** | [#3633](https://github.com/HKUDS/nanobot/issues/3633) GPT Duplicate ID 错误 | **Bug 待修复** | 🔴 **最高优先级**：阻塞性故障，移除 `good first issue` 标签或主动分配，避免影响 GPT-5.5 用户群体 |
| **7 天** | [#3865](https://github.com/HKUDS/nanobot/pull/3865) BM25 技能路由 | PR 待审 | 性能收益显著（-60% prompt），`[question]` 标签需维护者明确设计疑虑点 |

---

## 附录：今日数据全景

```
Issues:  ████████░░ 8 更新 (5 活跃/新开, 3 关闭)
PRs:     ██████████ 10 更新 (6 待合并, 4 已合并/关闭)
Releases: 0
核心贡献者活跃: 04cb (2 PR), chengyongru, honjiaxuan, JiajunBernoulli 等
```

> **健康度评分**: 🟢 活跃度高，闭环效率好（4/10 PR 当日处理），但存在 **1 个阻塞性 Bug 未修复** 与 **2 个长期待审 PR** 需关注。

---

*本报告基于 GitHub 公开数据自动生成，仅供社区参考。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-05-24

## 1. 今日速览

Hermes Agent 今日维持**高活跃度**，24小时内产生 **50 条 Issues 更新**（45 活跃/新开，5 关闭）与 **50 条 PR 更新**（40 待合并，10 已合并/关闭），无新版本发布。社区聚焦**平台稳定性修复**（Telegram/QQ Bot 连接问题、SQLite 并发安全）与**开发者体验改进**（环境变量处理、配置覆盖逻辑）。值得关注的是，今日出现多起 **P1/P2 级网关与平台适配器 Bug**，涉及话题劫持、CPU 空转、消息丢失等生产环境问题，同时有多个针对性修复 PR 进入评审队列，显示维护团队响应迅速。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 说明 | 链接 |
|:---|:---|:---|:---|
| #31206 | ArnBdev | **修复环境变量提示**：`TERMINAL_CWD` 现在被正确识别用于本地环境提示，解决长运行进程的工作目录漂移问题 | [PR #31206](https://github.com/NousResearch/hermes-agent/pull/31206) |
| #31207 | ArnBdev | **委托超时诊断增强**：为运行中子代理写入超时诊断信息，此前仅覆盖 0-API 调用挂起场景 | [PR #31207](https://github.com/NousResearch/hermes-agent/pull/31207) |
| #29360 / #31211 | dskwe / teknium1 | **.env 空字节清理**：修复 API 密钥复制粘贴带入空字节导致的 `ValueError: embedded null byte` 启动崩溃（#31211 为 #29360 的 rebase 版本） | [PR #29360](https://github.com/NousResearch/hermes-agent/pull/29360) · [PR #31211](https://github.com/NousResearch/hermes-agent/pull/31211) |
| #30922 | WadydX | **模型提供者插件覆盖检测**：`hermes doctor` 与安装向导现在报告活跃插件覆盖状态（Issue 关闭） | [Issue #30922](https://github.com/NousResearch/hermes-agent/issues/30922) |
| #29943 | pnascimento9596 | **忙文本模式队列**（关闭）：快速连续消息合并为单轮处理，减少碎片化响应（B1.2/B1.3 架构） | [PR #29943](https://github.com/NousResearch/hermes-agent/pull/29943) |

### 核心推进方向

- **可靠性基础设施**：SQLite 加固（PR #31208）、kanban 调度器竞态修复（PR #30727）
- **开发者上手体验**：安装脚本依赖检测、环境变量容错、配置覆盖透明化
- **多平台适配器健康度**：Telegram/Matrix/QQ Bot 的消息上下文与重连逻辑

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---|:---|:---|
| 1 | **#29125** Claude CLI 兼容性问题 | **19 评论**, 👍7 | 用户强烈需求：通过 Claude CLI 使用 Hermes 的 Anthropic 原生集成，配置流程存在 token 传递与模型选择断点 | [Issue #29125](https://github.com/NousResearch/hermes-agent/issues/29125) |
| 2 | **#7066** 安装脚本网络阻塞 | **7 评论**, 👍2 | 中国大陆用户镜像源访问问题，安装脚本缺乏超时与降级机制 | [Issue #7066](https://github.com/NousResearch/hermes-agent/issues/7066) |
| 3 | **#27059** `session_search` 硬编码超时 | **4 评论** | 本地/慢速后端用户无法调优成本参数，功能实际不可用 | [Issue #27059](https://github.com/NousResearch/hermes-agent/issues/27059) |

### 诉求分析

- **#29125** 的高热度反映 **Anthropic 生态整合** 是用户获客关键路径，Claude CLI 作为官方入口的兼容性直接影响付费转化
- **#7066** 揭示**地理分布基础设施**缺口，需考虑 CDN 或离线安装包策略
- **#27059** 代表 **"边缘硬件友好性"** 诉求，与本地 LLM 趋势同步

---

## 5. Bug 与稳定性

### 🔴 P1 级（生产环境严重影响）

| Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|
| **#28161** | Anthropic 流式处理：错误重试路径调用 OpenAI 客户端重建，导致 **15 分钟挂起** | 开放 | 无明确 PR |
| **#31086** | Telegram DM 话题恢复逻辑**劫持所有新话题**至历史话题，上下文污染 | 开放 | **#31205** 已提交 |
| **#31165** | Cron Telegram 适配器：重连风暴后**静默丢消息**，调度器仍标记成功 | 开放 | 无 |
| **#31193** | QQ Bot 重连忙循环导致 **100% CPU 空转**数小时 | 开放 | 无 |

### 🟡 P2 级（功能受损或性能退化）

| Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|
| **#27282** | macOS TUI 模式网关因 stdin EOF 中途退出 | 开放 | 无 |
| **#31101** | QQ Bot WebSocket 重连失败后**静默无限循环**，永不重试 | 开放 | 无 |
| **#31162** | `hermes update` 后网关服务**不自动重启**（launchd） | 开放 | 无 |
| **#31169** | Telegram 群组命令因归因前缀在 `group_allowed_chats` 下失效 | 开放 | 无 |
| **#31158** | kanban 调度器 WAL/SHM 缓存污染导致**死锁** | 开放 | 无 |
| **#31155** | `delegation.model` 配置被忽略，子代理始终继承父模型 | 开放 | 无 |
| **#30445** | 多网关并发 SQLite 访问的 kanban DB 损坏风险 | 开放 | 无 |
| **#31049** | 未配置平台插件**无限重连**而非静默跳过 | 开放 | 无 |

### 🟢 P3 级（体验瑕疵）

| Issue | 描述 | Fix PR |
|:---|:---|:---|
| #31043 | `/new` 不刷新 `context_compressor.context_length` | 无 |
| #31000 | OpenViking 内存插件镜像写入 3 处静默失败 | 无 |
| #30793 | 仪表板 300+ 表单字段无无障碍标签 | 无 |

---

## 6. 功能请求与路线图信号

### 已提交的功能 PR（待合并）

| PR | 功能 | 纳入可能性评估 | 链接 |
|:---|:---|:---|:---|
| **#31201** | **LLM Wiki 记忆提供者** — 独立 `hermes-llm-wiki` 包集成，支持预取与能力门控更新 | ⭐⭐⭐⭐⭐ 高，完整测试覆盖 | [PR #31201](https://github.com/NousResearch/hermes-agent/pull/31201) |
| **#31202** | **ACP YOLO 会话模式** — 镜像 TUI `/yolo` 的终端审批绕过 | ⭐⭐⭐⭐☆ 高，协议一致性需求 | [PR #31202](https://github.com/NousResearch/hermes-agent/pull/31202) |
| **#31203** | **ScrapeCreators 搜索提供者** — 替代 Google Search 的 web 后端 | ⭐⭐⭐⭐☆ 中-高，生态扩展 | [PR #31203](https://github.com/NousResearch/hermes-agent/pull/31203) |
| **#31209** | **Mem0 自托管支持** — 通过 `MEM0_HOST` 指向私有 OSS 服务器 | ⭐⭐⭐⭐⭐ 高，企业隐私合规 | [PR #31209](https://github.com/NousResearch/hermes-agent/pull/31209) |
| **#30835** | **Cursor ACP 提供者** — 通过 ACP 协议调用 Cursor Composer | ⭐⭐⭐⭐☆ 高，IDE 生态整合 | [PR #30835](https://github.com/NousResearch/hermes-agent/pull/30835) |
| **#31208** | SQLite 加固（`secure_delete` + `cell_size_check` + `synchronous=FULL`） | ⭐⭐⭐⭐⭐ 高，数据安全基线 | [PR #31208](https://github.com/NousResearch/hermes-agent/pull/31208) |

### 社区功能请求（仅 Issue，无 PR）

| Issue | 功能 | 路线图信号 | 链接 |
|:---|:---|:---|:---|
| #22791 | **Infisical 外部 Vault 后端** | Phase 4 外部密钥管理扩展，👍5 显示需求明确 | [Issue #22791](https://github.com/NousResearch/hermes-agent/issues/22791) |
| #31166 | 蜡烛图模式从 indicator 移至 label | 金融/交易用户场景，bot 标记 | [Issue #31166](https://github.com/NousResearch/hermes-agent/issues/31166) |
| #19615 | Cron 任务区分全局 vs 固定模型配置 | 配置管理精细化，避免模型漂移 | [Issue #19615](https://github.com/NousResearch/hermes-agent/issues/19615) |
| #31167 | Discord 处理状态表情可配置（👀/✅/❌） | 品牌化/个性化需求 | [Issue #31167](https://github.com/NousResearch/hermes-agent/issues/31167) |
| #30999 | Skill `linked_files` 支持自定义子目录 | 扩展性改进，硬编码限制 | [Issue #30999](https://github.com/NousResearch/hermes-agent/issues/30999) |

---

## 7. 用户反馈摘要

### 😤 核心痛点

| 场景 | 典型反馈 | 来源 |
|:---|:---|:---|
| **配置黑洞** | "Azure OpenAI 配置不工作，没有 workaround" — 错误信息仅显示 404，无诊断指引 | #25378 |
| **安装即劝退** | `install.sh` 因 `xz-utils` 缺失静默失败、网络阻塞无超时反馈 | #11197, #7066 |
| **状态不一致** | "更新后网关 DOWN 直到手动重启"、"/new 后上下文长度显示旧值" | #31162, #31043 |
| **平台适配器脆弱性** | Telegram/QQ 重连逻辑"静默失败"或"CPU 100%"，无可见错误 | #31193, #31101, #31086 |

### 😊 满意场景

- **插件覆盖机制透明化**（#30922 关闭）：用户希望明确知道哪个模型提供者插件实际生效
- **记忆系统扩展性**：LLM Wiki、Mem0 自托管等 PR 显示社区对**私有化记忆基础设施**的积极投入

### 💡 隐性需求

- **短会话用户的自我改进机制**（#18369）：频繁 `/new` 的用户永远触达不到记忆/技能提示阈值——产品设计假设与真实使用模式错位
- **慢后端友好性**（#27059）：本地模型用户被硬编码的成本参数排斥

---

## 8. 待处理积压

### ⚠️ 长期未响应的高价值 Issue

| Issue | 创建日期 | 最后更新 | 风险 | 链接 |
|:---|:---|:---|:---|:---|
| **#7066** 安装脚本网络阻塞 | 2026-04-10 | 2026-05-23 | **新用户获取壁垒**，中国大陆市场 | [Issue #7066](https://github.com/NousResearch/hermes-agent/issues/7066) |
| **#18369** `/new` 重置 nudge 计数器 | 2026-05-01 | 2026-05-23 | **核心功能失效**（短会话用户无自我改进） | [Issue #18369](https://github.com/NousResearch/hermes-agent/issues/18369) |
| **#19615** Cron 模型配置漂移 | 2026-05-04 | 2026-05-23 | 调度任务隐性使用旧模型 | [Issue #19615](https://github.com/NousResearch/hermes-agent/issues/19615) |
| **#22791** Infisical Vault 支持 | 2026-05-09 | 2026-05-23 | 企业安全合规需求，👍5 | [Issue #22791](https://github.com/NousResearch/hermes-agent/issues/22791) |

### 🔧 需维护者介入的评审队列

| PR | 等待天数 | 阻塞原因 | 链接 |
|:---|:---|:---|:---|
| #28074 压缩器 token 估算修复 | **6 天** | P1 级，影响工具调用预算 | [PR #28074](https://github.com/NousResearch/hermes-agent/pull/28074) |
| #28039 Codex 响应状态归一化 | **6 天** | P1 级，影响最终答案判定 | [PR #28039](https://github.com/NousResearch/hermes-agent/pull/28039) |
| #27983 Matrix 引用回复上下文 | **6 天** | P1 级，消息语义丢失 | [PR #27983](https://github.com/NousResearch/hermes-agent/pull/27983) |
| #29952 `HERMES_PROFILE` 环境变量 | **3 天** | 多配置文件隔离场景 | [PR #29952](https://github.com/NousResearch/hermes-agent/pull/29952) |

---

**日报生成时间**：2026-05-24  
**数据来源**：NousResearch/hermes-agent GitHub 公开活动流

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-05-24

## 1. 今日速览

PicoClaw 项目今日呈现**高活跃度与强收敛态势**：24小时内完成6个Issue关闭（含2个功能请求、2个Bug修复）和6个PR合并/关闭，同时3个新PR进入待评审队列。核心进展集中在**上下文预算引擎修复**（Seahorse Assembler关键Bug）、**DeepSeek推理能力对接**及**前端体验增强**三个维度。社区对微信生态支持、邮件渠道扩展的诉求持续升温，但Android端存储权限等遗留问题仍未获响应。整体健康度评估：**代码迭代活跃，Issue清理高效，但多平台兼容性债务开始累积**。

---

## 2. 版本发布

### 🔖 Nightly Build: v0.2.9-nightly.20260523.f09a7d67

| 属性 | 详情 |
|:---|:---|
| 构建类型 | 自动化夜间构建（不稳定，谨慎使用） |
| 对比基线 | [v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main) |
| 包含关键变更 | Seahorse预算强制修复、DeepSeek thinking映射、Discord附件下载修复、golang.org/x/net安全更新 |

**迁移注意事项**：夜间构建未经验证，生产环境建议等待正式版。若测试预算控制或DeepSeek集成功能，需关注 #2895 和 #2928 的合并行为。

---

## 3. 项目进展

### 已合并/关闭的关键 PR（6项）

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#2895](https://github.com/sipeed/picoclaw/pull/2895) | afjcjsbx | **fix(seahorse): enforce budget on fresh tail and rebuild paths** | 🔴 **关键稳定性修复**：解决FreshTail完全绕过预算限制的致命Bug，防止32条历史消息无限制膨胀导致400 BadRequestError，上下文窗口管理可靠性质变 |
| [#2928](https://github.com/sipeed/picoclaw/pull/2928) | lc6464 | **feat(openai_compat): map DeepSeek thinking fields** | 完成DeepSeek `thinking_level` 抽象层映射（off/low/medium/high/xhigh → `thinking`/`reasoning_effort`），消除手动`extra_body`配置负担 |
| [#2931](https://github.com/sipeed/picoclaw/pull/2931) | hschne | **fix(discord): download attachments for vision pipeline** | 修复Discord非音频附件（图片/文件）被静默丢弃的Bug，视觉能力端到端可用 |
| [#2930](https://github.com/sipeed/picoclaw/pull/2930) | lc6464 | **build(deps): bump golang.org/x/net to v0.55.0** | 消除`govulncheck`安全警告，HtmlToMarkdown依赖链加固 |
| [#2835](https://github.com/sipeed/picoclaw/pull/2835) | bogdanovich | **fix(agent): always publish final reply after interim message** | 修复`message`工具进度更新后最终回复被抑制的交互中断问题 |
| [#1838](https://github.com/sipeed/picoclaw/pull/1838) | jonahzheng | **Update helpers.go** | 修正`picoclaw onboard`命令提示文本 |

**今日里程碑**：上下文预算引擎（Seahorse）完成**从"软性建议"到"硬性强制"**的架构修正，这是v0.2.9周期最核心的可靠性升级。

---

## 4. 社区热点

### 讨论最活跃的议题

| 排名 | Issue/PR | 评论数 | 热度分析 |
|:---|:---|:---:|:---|
| 🥇 | [#2421](https://github.com/sipeed/picoclaw/issues/2421) [CLOSED] Add email as native channel | **7** | 企业/科研场景对邮件渠道的强需求，作者aquaratixc详细论证了保守网络环境下的必要性。虽关闭但标签含`stale`，可能因缺乏维护者响应而非功能拒绝 |
| 🥈 | [#2742](https://github.com/sipeed/picoclaw/issues/2742) [OPEN] gateway starts with no channels in v0.2.8 | **5** | **当前最活跃开放Bug**：Telegram配置正确但网关零通道启动，影响v0.2.8基础可用性，5条评论显示用户反复验证配置无果 |
| 🥉 | [#2834](https://github.com/sipeed/picoclaw/issues/2834) [CLOSED] Update from source | **3** | 新手文档缺口：用户需要"删除旧版→全新安装"的明确指引，反映版本迁移文档不足 |

**诉求洞察**：渠道生态扩展（邮件#2421、微信多账号#2883）与**运维简化**（升级文档#2834）是社区两大主线，前者指向企业采用，后者影响用户留存。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 详情 | Fix PR |
|:---|:---|:---:|:---|:---:|
| 🔴 **高** | [#2742](https://github.com/sipeed/picoclaw/issues/2742) gateway starts with no channels in v0.2.8 | **OPEN** | v0.2.8回归：Telegram启用但网关启动后零通道，配置解析或初始化逻辑断裂 | ❌ **无** |
| 🔴 **高** | [#2894](https://github.com/sipeed/picoclaw/issues/2894) FreshTail bypasses budget limit | **CLOSED** | Seahorse Assembler预算穿透导致400错误 | ✅ [#2895](https://github.com/sipeed/picoclaw/pull/2895) |
| 🟡 **中** | [#2880](https://github.com/sipeed/picoclaw/issues/2880) Android permission denied on Downloads/picoclaw | **OPEN** | Android 10存储权限模型适配失败，"All files access"已授权仍崩溃 | ❌ **无** |
| 🟡 **中** | [#2931](https://github.com/sipeed/picoclaw/pull/2931) Discord附件视觉管道断裂 | **CLOSED** | 非音频附件CDN URL未转base64被静默丢弃 | ✅ [#2931](https://github.com/sipeed/picoclaw/pull/2931) |

**风险评估**：#2742 是**当前最大稳定性威胁**——v0.2.8基础功能回归且无任何维护者响应，可能迫使用户回退版本或放弃部署。

---

## 6. 功能请求与路线图信号

| 功能请求 | 来源 | 实现状态 | 纳入概率 |
|:---|:---|:---:|:---|
| **邮件原生渠道** | [#2421](https://github.com/sipeed/picoclaw/issues/2421) | 讨论关闭 | 🟡 **中** | 企业刚需，但需SMTP/IMAP基础设施，复杂度高于即时通讯渠道 |
| **微信多账号配置** | [#2883](https://github.com/sipeed/picoclaw/pull/2883) | **PR待评审** | 🟢 **高** | 动态`weixin_*` config_key识别方案已就绪，贴合中国市场需求，合并阻力小 |
| **DeepSeek thinking映射** | [#2903](https://github.com/sipeed/picoclaw/issues/2903) | **已实现** | ✅ | #2928已合并，v0.2.9将包含 |
| **代码块行号/换行切换** | [#2933](https://github.com/sipeed/picoclaw/pull/2933) | **PR待评审** | 🟢 **高** | 纯前端增强，无破坏性，lc6464持续贡献者信誉背书 |
| **捷克语本地化** | [#2932](https://github.com/sipeed/picoclaw/pull/2932) | **PR待评审** | 🟢 **高** | 792/792完整覆盖，i18n常规合并 |

**下一版本（v0.2.9）预期功能包**：DeepSeek原生thinking控制、微信多账号、代码块体验增强、捷克语支持，形成"**AI能力深化 + 中国市场适配 + 开发者体验**"的三维升级。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 | 核心不满 |
|:---|:---|:---|
| **企业封闭网络** | #2421 | "Users who rely on email as their primary or only communication channel"——现有渠道矩阵（Telegram/Discord/微信）覆盖不全 |
| **版本升级焦虑** | #2834 | "I need tutorial how upgrade to new version (remove old)"——缺乏官方迁移路径，用户恐惧配置丢失 |
| **Android边缘设备** | #2880 | Pocophone F1 (Android 10) 存储权限模型适配失败，**老旧设备兼容性被忽视** |
| **网关静默失败** | #2742 | 配置正确但服务零通道启动，**无诊断日志或错误提示**，调试成本极高 |

### 隐性满意信号

- DeepSeek用户群体对`thinking_level`抽象层有明确认知（#2903），说明PicoClaw的提供商抽象设计获得高级用户认可
- 微信多账号PR作者标注"Mostly AI-generated"，反映**AI辅助贡献模式**已被社区接受

---

## 8. 待处理积压

### ⚠️ 需维护者紧急关注

| 项目 | 时长 | 风险 | 行动建议 |
|:---|:---:|:---|:---|
| [#2742](https://github.com/sipeed/picoclaw/issues/2742) gateway零通道启动 | 22天 | **v0.2.8阻断性Bug**，5条评论无回应 | 指派核心维护者复现，优先于新功能开发 |
| [#2880](https://github.com/sipeed/picoclaw/issues/2880) Android存储权限崩溃 | 8天 | Android 10 Scoped Storage适配，影响低端设备市场 | 标记`platform: android`，评估是否需要运行时权限申请重构 |
| [#2883](https://github.com/sipeed/picoclaw/pull/2883) 微信多账号配置 | 8天 | 中国市场关键功能，stale标签 | 移除stale标签，安排代码评审，避免贡献者流失 |

### 长期债务信号

- **Issue #2421** 以`stale`关闭而非明确拒绝，邮件渠道需求未进入官方路线图
- **PR #2883** 的`stale`标签与其实际价值（微信生态核心功能）不匹配，反映标签策略可能过度自动化

---

*日报生成时间：2026-05-24 | 数据来源：GitHub API /sipeed/picoclaw*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-05-24

## 1. 今日速览

NanoClaw 今日展现**高活跃度与强推进力**：24小时内处理 **13 个 PR 合并/关闭**（含 4 个待合并），同时消化 **3 个历史 Issue**，仅剩 **1 个新 Issue 待处理**。核心团队聚焦 **WhatsApp 渠道稳定性修复**（3 个关联 Issue/PR 闭环）、**agent-runner 运行时可靠性**（数据库损坏、日志轮转、会话转录 3 个修复）以及 **安全加固**（CSPRNG 替换 `Math.random()`）。项目健康度良好，但需关注 `skill/compact` 分支合并导致的 v2 构建断裂问题（Issue #2603）。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 已合并/关闭的关键 PR（13 个）

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#2598](https://github.com/nanocoai/nanoclaw/pull/2598) | jonnychesthair-crypto | **修复 CLAUDE.local.md 加载**：将 `local` 加入 `settingSources`，解决 Issue #2185 | 兑现 per-group 本地记忆功能，SDK 可按组加载定制化配置 |
| [#2597](https://github.com/nanocoai/nanoclaw/pull/2597) | kartast | **agent-runner 退出策略**：`inbound.db` 损坏时主动退出而非无限循环 | 消除生产级阻塞故障（曾导致 25 分钟无消息投递） |
| [#2595](https://github.com/nanocoai/nanoclaw/pull/2595) + [#2586](https://github.com/nanocoai/nanoclaw/pull/2586) | IamAdamJowett | **会话转录轮转双修复**：零值正确禁用轮转 + 超大/老旧转录预清理 | 解决长会话内存膨胀与 base64 图片块阻塞读取问题 |
| [#2596](https://github.com/nanocoai/nanoclaw/pull/2596) | IamAdamJowett | 测试同步：适配 `<messages>` 信封移除后的格式化输出 | 保障 #2556 变更的测试覆盖 |
| [#2554](https://github.com/nanocoai/nanoclaw/pull/2554) | dvirarad | **WhatsApp 渠道 bug 修复集** | 与 Issue #2193/#2194 联动，修复 JID 前缀与映射持久化 |
| [#2553](https://github.com/nanocoai/nanoclaw/pull/2553) | IamAdamJowett | **新增 WhatsApp 格式化容器技能** | 规范 `@<phone-digits>` 提及语法，提升渠道原生体验 |
| [#2548](https://github.com/nanocoai/nanoclaw/pull/2548) | alexli-77 | Keychain 读取防回滚 + 静默失败提示修复 | 强化 OAuth token 生命周期安全 |
| [#2562](https://github.com/nanocoai/nanoclaw/pull/2562) | kky | 审批卡片送达源聊天 + 点击者验证 | 安全流程闭环 |
| [#2600](https://github.com/nanocoai/nanoclaw/pull/2600) | sumsumai | MCP 轮播卡片发送工具 | 扩展消息类型能力 |
| [#2601](https://github.com/nanocoai/nanoclaw/pull/2601) | sumsumai | 用户技能碎片化处理修复 | 技能系统架构优化 |
| [#2602](https://github.com/nanocoai/nanoclaw/pull/2602) | sumsumai | 渠道审批空值检查 | 防御性编程 |
| [#2599](https://github.com/nanocoai/nanoclaw/pull/2599) | Fede-ops | 新事件预填充日期修复 | 日历/事件工作流准确性 |

**整体里程碑**：WhatsApp 渠道从"能跑"进入"生产可靠"阶段；agent-runner 具备自愈合与资源管控能力；per-group 配置体系完整闭环。

---

## 4. 社区热点

| 排名 | 条目 | 热度指标 | 诉求分析 |
|:---|:---|:---|:---|
| 🔥 | [Issue #2194](https://github.com/nanocoai/nanoclaw/issues/2194) | 21 天周期，2 条评论，关联 2 个 PR | **WhatsApp 企业级部署刚需**：LID→phone 映射跨重启丢失导致消息路由黑洞，直接影响商业用户的消息可达性 |
| 🔥 | [Issue #2193](https://github.com/nanocoai/nanoclaw/issues/2193) | 21 天周期，1 条评论，关联 PR #2554 | **CLI 工具与运行时语义不一致**：`init-first-agent.ts` 的文档格式与实际存储格式脱节，新用户 onboarding 陷阱 |
| 🆕 | [Issue #2603](https://github.com/nanocoai/nanoclaw/issues/2603) | 创建即开放，0 评论 | **v1→v2 迁移痛点**：`skill/compact` 分支的自动合并机制存在语义冲突盲区，破坏构建 |

**核心诉求信号**：社区正从"功能可用"转向"升级平滑、运行稳定、企业可运维"。

---

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 | Fix PR | 影响范围 |
|:---|:---|:---|:---|:---|
| 🔴 **P0 - 构建断裂** | `skill/compact` 合并后引用 v1 符号导致编译失败 | **开放** | 无 | v2 用户尝试合并 compact 技能 |
| 🟡 **P1 - 生产阻塞** | `inbound.db` 损坏时 agent-runner 无限循环 | ✅ 已修复 | [#2597](https://github.com/nanocoai/nanoclaw/pull/2597) | Docker Desktop macOS 生产环境 |
| 🟡 **P1 - 消息丢失** | LID→phone 映射重启丢失 → 路由失败 | ✅ 已修复 | [#2554](https://github.com/nanocoai/nanoclaw/pull/2554) | WhatsApp LID 发送方 |
| 🟡 **P1 - 静默失败** | 未知 slash 命令被误分类为 `passthrough`，响应丢弃 | **待合并** | [#2346](https://github.com/nanocoai/nanoclaw/pull/2346) | 所有使用自定义命令的用户 |
| 🟢 **P2 - 配置失效** | `CLAUDE_TRANSCRIPT_ROTATE_AGE_DAYS=0` 未禁用轮转 | ✅ 已修复 | [#2595](https://github.com/nanocoai/nanoclaw/pull/2595) | 需要长会话保持的用户 |
| 🟢 **P2 - 安全漏洞** | `Math.random()` 用于审批 ID 与授权 | **待合并** | [#2545](https://github.com/nanocoai/nanoclaw/pull/2545) | 审批流程可被预测攻击 |
| 🟢 **P2 - 内存膨胀** | 长会话转录无限增长 | ✅ 已修复 | [#2586](https://github.com/nanocoai/nanoclaw/pull/2586) | 长运行 hub/parent 会话 |

---

## 6. 功能请求与路线图信号

| 需求来源 | 内容 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| PR [#1994](https://github.com/nanocoai/nanoclaw/pull/1994) | per-group 自定义 OpenAI 兼容端点（LiteLLM/vLLM/本地代理） | ⭐⭐⭐⭐⭐ **高** | 架构已支持 `container.json` 配置，仅需 auth 拷贝跳过逻辑，PR 就绪 |
| PR [#2600](https://github.com/nanocoai/nanoclaw/pull/2600) | MCP 轮播卡片发送工具 | ⭐⭐⭐⭐☆ **中高** | 已合并，消息类型扩展持续进行 |
| PR [#2553](https://github.com/nanocoai/nanoclaw/pull/2553) | 容器技能：WhatsApp 格式化规范 | ⭐⭐⭐⭐☆ **中高** | 已合并，渠道原生体验是明确方向 |
| PR [#2236](https://github.com/nanocoai/nanoclaw/pull/2236) | 容器 WORKDIR 与实际挂载路径对齐 | ⭐⭐⭐☆☆ **中** | 待合并，影响 exec/debug 体验，但非阻塞 |
| Issue #2603 隐含需求 | v2 分支合并兼容性检测/自动迁移工具 | ⭐⭐⭐☆☆ **中** | 技术债，需维护者决策是否提供迁移 CLI |

**路线图推断**：下一版本大概率聚焦 **"私有化部署就绪"**（自定义端点 + 本地模型）与 **"渠道体验精细化"**（WhatsApp 语法、卡片类型）。

---

## 7. 用户反馈摘要

### 😤 痛点
- **"重启即丢状态"**：WhatsApp LID 映射缓存设计假设"服务不重启"，与云原生部署模式冲突（Issue #2194）
- **"文档写 A，代码做 B"**：`--platform-id` 格式说明与实际存储不一致，调试耗时（Issue #2193）
- **"升级踩坑无预警"**：v1→v2 符号变更在自动合并时静默失败，缺乏构建前检查（Issue #2603）

### 😊 满意
- 审批流程安全加固响应迅速（PR #2545/#2562 同日级联修复）
- 长会话转录问题获得"根因+症状"双重修复（PR #2586/#2595）

### 🎯 使用场景
- **企业 WhatsApp 客服**：需要 LID 商业账号与 phone JID 双向稳定路由
- **私有化 AI 部署**：通过 LiteLLM 代理接入内部模型，绕过 ChatGPT 订阅
- **7×24 无人值守 agent**：要求 runner 具备自诊断与崩溃恢复能力

---

## 8. 待处理积压

| 条目 | 创建时间 | 最后更新 | 风险 | 建议动作 |
|:---|:---|:---|:---|:---|
| [Issue #2603](https://github.com/nanocoai/nanoclaw/issues/2603) | 2026-05-23 | 2026-05-23 | **阻塞 v2 用户合并技能** | 维护者需在 48h 内评估：a) 修复 compact 分支；b) 发布 v2 迁移指南；c) 添加 CI 构建检查 |
| [PR #2346](https://github.com/nanocoai/nanoclaw/pull/2346) | 2026-05-08 | 2026-05-23 | **15 天待合并**，slash 命令体验 | 合并或要求作者补充测试用例 |
| [PR #1994](https://github.com/nanocoai/nanoclaw/pull/1994) | 2026-04-24 | 2026-05-23 | **29 天待合并**，私有化部署关键路径 | 优先 code review，社区呼声高 |
| [PR #2545](https://github.com/nanocoai/nanoclaw/pull/2545) | 2026-05-18 | 2026-05-23 | **5 天待合并**，安全修复 | 建议 24h 内 review，涉及 `crypto.randomBytes` 需审计随机源可用性 |
| [PR #2236](https://github.com/nanocoai/nanoclaw/pull/2236) | 2026-05-03 | 2026-05-23 | **20 天待合并**，容器调试体验 | 低优先级，但需回应避免贡献者流失 |

---

> **数据置信度**：基于 GitHub 公开 API 数据，Issues/PR 状态截至 2026-05-24 00:00 UTC。评论数为 `undefined` 的条目可能因 API 限制未完整返回，建议直接访问链接核实讨论深度。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-05-24

> **项目**: [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)  
> **日期**: 2026-05-24（数据截至 2026-05-23）  
> **分析视角**: AI 智能体与个人 AI 助手领域开源项目

---

## 1. 今日速览

过去24小时，NullClaw 项目呈现**高活跃度开发态势**，10条 PR 待审阅但无合并动作，显示代码审查环节存在瓶颈。核心贡献者 `raskevichai` 集中提交4条 Telegram 通道与记忆系统修复，`vernonstinebaker` 贡献3条测试与基础设施改进，另有安全加固和 HTTP 架构重构两条长期 PR 持续更新。Issues 零活动表明社区反馈渠道未产生新输入，项目当前以**内部技术债务清理**为主要节奏，而非功能扩张。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

**今日无合并/关闭的 PR**，全部10条 PR 处于待合并状态。以下按技术领域梳理待审核心变更：

| 领域 | PR | 状态 | 技术价值 |
|:---|:---|:---|:---|
| **Telegram 通道** | [#930](https://github.com/nullclaw/nullclaw/pull/930) 回复消息上下文捕获 | 🔶 待审 | 解决群聊场景中 bot 无法理解用户回复上下文的关键体验缺陷 |
| | [#928](https://github.com/nullclaw/nullclaw/pull/928) 子代理结果投递修复 | 🔶 待审 | 修复生产环境严重 bug：subagent 执行结果静默丢失 |
| | [#924](https://github.com/nullclaw/nullclaw/pull/924) 数字 ID 白名单兼容 | 🔶 待审 | 消除配置陷阱，Telegram 整数型用户 ID 现可正常工作 |
| **记忆系统** | [#929](https://github.com/nullclaw/nullclaw/pull/929) 全局记忆可见性修复 | 🔶 待审 | 修复 `memory_list` 无法返回全局记忆的核心功能缺陷 |
| **测试基础设施** | [#926](https://github.com/nullclaw/nullclaw/pull/926) 搜索测试环境隔离 | 🔶 待审 | 消除环境依赖导致的测试不确定性 |
| | [#927](https://github.com/nullclaw/nullclaw/pull/927) 兼容层错误日志抑制 | 🔶 待审 | 清理测试输出，提升开发者体验 |
| | [#925](https://github.com/nullclaw/nullclaw/pull/925) macOS 路径安全策略 | 🔶 待审 | 解决 macOS 开发者工作区被误拦截的阻塞问题 |
| **安全架构** | [#907](https://github.com/nullclaw/nullclaw/pull/907) Webhook/HTTP/Cron 安全加固 | 🔶 待审（5月10日创建，持续更新） | 重大安全重构：移除 credential 传递、强制显式信任配置 |
| **网络层** | [#891](https://github.com/nullclaw/nullclaw/pull/891) curl 探针故障透传 | 🔶 待审（5月5日创建） | 提升可观测性，网络故障不再被掩盖 |
| **架构重构** | [#881](https://github.com/nullclaw/nullclaw/pull/881) 移除运行时 curl 子进程 | 🔶 待审（5月1日创建） | 里程碑式重构：全面迁移至 Zig 原生 HTTP，消除子进程攻击面 |

**整体评估**: 项目在技术深度上持续推进，但**审查吞吐量成为明显瓶颈**——10条 PR 平均等待时间已达数日，最长的一条（#881）已逾三周。今日无合并意味着零净代码进入主分支。

---

## 4. 社区热点

**今日无社区讨论热点**。全部 PR 评论数为 `undefined`（数据缺失或零评论），👍 反应均为 0。

**深层分析**: 这种"静默开发"模式反映两种可能：
- **积极解读**: 核心团队内部沟通充分，PR 描述详尽无需外部讨论
- **风险信号**: 社区参与度不足，缺乏外部审查者的安全网

值得关注的隐性热点是 [#907](https://github.com/nullclaw/nullclaw/pull/907) 安全加固 PR——其跨期13天的持续更新（5月10日→5月23日）暗示可能存在**内部安全审查的反复迭代**，这类变更通常涉及敏感讨论可能离线进行。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 关联 PR | 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | Telegram 子代理结果静默丢失（生产环境确认） | [#928](https://github.com/nullclaw/nullclaw/pull/928) | **Fix 待审** |
| 🔴 **高** | `memory_list` 全局记忆不可见（核心功能损坏） | [#929](https://github.com/nullclaw/nullclaw/pull/929) | **Fix 待审** |
| 🟡 **中** | Telegram 数字 ID 配置无效（用户配置陷阱） | [#924](https://github.com/nullclaw/nullclaw/pull/924) | **Fix 待审** |
| 🟡 **中** | 搜索测试因环境 API key 存在而失败 | [#926](https://github.com/nullclaw/nullclaw/pull/926) | **Fix 待审** |
| 🟢 **低** | 兼容层 API 错误污染测试输出 | [#927](https://github.com/nullclaw/nullclaw/pull/927) | **Fix 待审** |
| 🟢 **低** | macOS 工作区路径被安全策略误拦截 | [#925](https://github.com/nullclaw/nullclaw/pull/925) | **Fix 待审** |

**基础设施风险**: [#891](https://github.com/nullclaw/nullclaw/pull/891) 修复的 curl 探针故障掩盖问题，直接影响**健康检查可靠性**——系统可能误判不可用提供商为健康状态，导致请求路由至故障节点。

---

## 6. 功能请求与路线图信号

**今日无新功能请求**（Issues 零活动）。

**从现有 PR 推断路线图信号**:

| 信号 | 来源 | 解读 |
|:---|:---|:---|
| **Zig 原生 HTTP 全面替代 curl** | [#881](https://github.com/nullclaw/nullclaw/pull/881) | 项目正从"能工作"向"工程化可靠"演进，消除子进程开销与安全风险 |
| **安全默认策略收紧** | [#907](https://github.com/nullclaw/nullclaw/pull/907) | 企业级部署准备：显式信任、最小权限、secret 零泄露 |
| **Telegram 体验精细化** | #930, #928, #924 | 通道层从"基础连通"进入"场景深度适配"阶段 |
| **记忆系统语义完善** | [#929](https://github.com/nullclaw/nullclaw/pull/929) | 全局/会话记忆分层模型正在补全 |

**下一版本可能纳入**: 全部4条 Telegram 修复 + 记忆系统修复具备高优先级合并条件；安全加固与 HTTP 重构可能独立发布以隔离风险。

---

## 7. 用户反馈摘要

**今日无新增用户反馈**（Issues 零活动）。

**从 PR 描述逆向推断用户痛点**:

| 痛点 | 来源 | 场景 |
|:---|:---|:---|
| "子 agent 跑完了，用户收不到回复" | [#928](https://github.com/nullclaw/nullclaw/pull/928) | 生产 Telegram bot，多 agent 协作工作流 |
| "存了全局记忆，list 不出来" | [#929](https://github.com/nullclaw/nullclaw/pull/929) | 跨会话知识库构建 |
| "配置写了用户 ID，bot 完全不响应" | [#924](https://github.com/nullclaw/nullclaw/pull/924) | 权限白名单配置，整数 ID 为 Telegram 原生格式 |
| "回复历史消息时 bot 不懂上下文" | [#930](https://github.com/nullclaw/nullclaw/pull/930) | 群聊中 threaded conversation |

**满意度推测**: 项目功能完整性获认可（用户在生产环境部署），但**边缘场景打磨不足**，配置体验存在"静默失败"反模式。

---

## 8. 待处理积压

| PR | 创建日期 | 等待天数 | 风险说明 |
|:---|:---|:---|:---|
| [#881](https://github.com/nullclaw/nullclaw/pull/881) 移除运行时 curl 子进程 | 2026-05-01 | **23天** | 🔴 **架构重构长期悬置**：影响面广（providers/channels/gateway/tools/memory/voice/SSE），与其他 HTTP 相关 PR（#891, #907）存在潜在冲突风险；延迟合并将导致持续 rebase 成本 |
| [#891](https://github.com/nullclaw/nullclaw/pull/891) curl 探针故障透传 | 2026-05-05 | **18天** | 🟡 依赖 #881 的命名空间变更（Curl* → Http*），存在合并顺序依赖 |
| [#907](https://github.com/nullclaw/nullclaw/pull/907) 安全加固 | 2026-05-10 | **13天** | 🟡 跨期更新显示活跃迭代中，但长期未决可能反映安全审查复杂度 |

**维护者行动建议**: 
1. **优先确立 #881 合并时间表**——其为多条 PR 的阻塞依赖
2. **批量审查 Telegram 四连 PR**（#924, #928, #929, #930）——同一作者、同一通道、无冲突，适合集中 review
3. **评估测试 PR 快速通道**（#925, #926, #927）——低风险、高开发者体验收益

---

*日报生成基于公开 GitHub 数据，PR 评论数显示为 `undefined` 可能因 API 限制或数据同步延迟。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-05-24

> **项目**: nearai/ironclaw | **分析日期**: 2026-05-24 | **数据周期**: 过去24小时

---

## 1. 今日速览

IronClaw 今日呈现**极高强度开发态势**，24小时内产生 **50 个 PR**（33 待合并/17 已处理）和 **15 个活跃 Issue**，零版本发布。核心团队正全力推进 **"Reborn" 架构重构**——这是项目历史上最大规模的重写，涉及 hooks 框架生产化、安全加固、多租户沙箱隔离等关键基础设施。值得注意的是，**所有 15 个 Issue 均为今日新建**，无历史积压关闭，显示团队处于"开环推进"模式，问题发现速度超过解决速度。安全审计密度显著：多个 PR/Issue 带 `security-review-required` 标签，涉及 TOCTOU 竞态条件防护、跨租户泄漏防护等生产级安全议题。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 状态 |
|:---|:---|:---|:---|
| [#3950](https://github.com/nearai/ironclaw/pull/3950) | serrrfirat | Reborn setup marker skill parity——为技能激活添加设置标记源钩子，防止已满足条件的技能被重复注入 | **已关闭** |
| [#3943](https://github.com/nearai/ironclaw/pull/3943) | zmanian | 死代码/投机性公共 API 防护——通过 workspace lints + pre-commit grep 防止无用 API 表面膨胀 | **已关闭** |
| [#3900](https://github.com/nearai/ironclaw/pull/3900) | serrrfirat | Docker 沙箱命令传输——为 Reborn 租户沙箱进程执行建立容器化隔离基础 | **已关闭** |
| [#3935](https://github.com/nearai/ironclaw/pull/3935) | serrrfirat | Reborn 技能管理工具——`skill_list`/`skill_install`/`skill_remove` 内置能力 | **已关闭** |

### 关键推进方向

**Reborn 架构生产化（4条主线并行）：**

1. **Hooks 框架落地** — PR [#3938](https://github.com/nearai/ironclaw/pull/3938) 将 hooks 激活到生产路径（默认 OFF），[#3951](https://github.com/nearai/ironclaw/pull/3951) 追加第三方扩展 hook 激活，[#3937](https://github.com/nearai/ironclaw/pull/3937) 完成跨后端对抗性测试套件
2. **安全加固** — PR [#3952](https://github.com/nearai/ironclaw/pull/3952) 通过 `openat2`/`O_NOFOLLOW` 消除租户文件系统 TOCTOU 竞态；PR [#3931](https://github.com/nearai/ironclaw/pull/3931) 修复跨租户泄漏+重放+提供商欺骗三大漏洞
3. **持久化后端** — PR [#3933](https://github.com/nearai/ironclaw/pull/3933)/[#3936](https://github.com/nearai/ironclaw/pull/3936) 分别实现 Postgres/libSQL 持久化 predicate 状态后端
4. **预算/成本系统** — PR [#3899](https://github.com/nearai/ironclaw/pull/3899) 端到端实现 Reborn 基于成本的预算控制

---

## 4. 社区热点

> 注：今日所有 PR 评论数均显示 `undefined`，系统可能未采集评论数据。以下基于内容重要性和标签分析。

| 议题 | 链接 | 热度分析 |
|:---|:---|:---|
| **Hooks 框架生产激活** | [#3934](https://github.com/nearai/ironclaw/issues/3934) / [#3938](https://github.com/nearai/ironclaw/pull/3938) | **架构里程碑**：将历时数月的 hooks 基础设施（WASM 执行、事件触发、持久化计数器、工厂模式）正式接入实时运行时。默认暗发（default OFF）体现谨慎态度 |
| **CLAUDE.md 命名争议** | [#3954](https://github.com/nearai/ironclaw/issues/3954) | **社区治理信号**：贡献者 Leamsi9 指出 `CLAUDE.md` 命名与 Claude AI 的历史耦合造成解析困惑，提议改为语义化名称。反映项目从"AI 辅助实验"向"正式基础设施"转型中的品牌/文档债务 |
| **OpenAPI/AsyncAPI 契约提案** | [#3953](https://github.com/nearai/ironclaw/issues/3953) | **生态扩展诉求**：提案为 Gateway、WebUI、事件表面添加规范优先的 API 契约，使用 OpenAPI + AsyncAPI。这是企业集成和第三方开发者生态的关键前提 |

**背后诉求分析**：核心开发者（zmanian、serrrfirat）聚焦安全与架构正确性，外围贡献者（Leamsi9、xkww3n）关注开发者体验与可集成性，存在"基础设施深度"与"生态广度"的张力。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | Issue/PR | 状态 | 说明 |
|:---|:---|:---|:---|:---|
| 🔴 **CRITICAL** | 跨租户数据泄漏 + 请求重放 + 提供商欺骗 | [#3931](https://github.com/nearai/ironclaw/pull/3931) | **Fix PR 已开** | 事件触发 hooks 中的三大安全漏洞，zmanian 已提交 TDD 修复（先失败测试后修复），fail-closed 设计 |
| 🔴 **CRITICAL** | 文件系统 TOCTOU 竞态（跨设备挂载逃逸） | [#3952](https://github.com/nearai/ironclaw/pull/3952) / [#3956](https://github.com/nearai/ironclaw/issues/3956) | **Fix PR 已开，有后续** | `openat2` 加固已实施，但 `RESOLVE_NO_XDEV` 绑定挂载 containment 被标记为后续跟进 |
| 🟡 **HIGH** | macOS/Linux 安装脚本自 0.26 版本起损坏 | [#3945](https://github.com/nearai/ironclaw/issues/3945) | **无 Fix PR** | `select_archive_for_arch()` 和 `download_binary_and_run_installer()` 函数失效已一个月，影响新用户获取 |
| 🟡 **HIGH** | 夜间 E2E 测试持续失败 | [#3447](https://github.com/nearai/ironclaw/issues/3447) | **无 Fix PR，已持续14天** | 2026-05-10 首次报告，最新失败于 05-23，全量 E2E 特性测试失败 |
| 🟡 **HIGH** | 默认无操作护栏静默绕过模式 | [#3915](https://github.com/nearai/ironclaw/issues/3915) | **无 Fix PR** | 3 处独立发现的架构反模式：可选依赖默认 no-op 导致生产环境降级为本地开发语义 |
| 🟢 **MEDIUM** | `RuntimeCredentialTarget::PathPlaceholder` 安全质疑 | [#3917](https://github.com/nearai/ironclaw/issues/3917) | **讨论中** | 比 Header/Query 注入更差的凭证泄漏通道，需决策保留或移除 |
| 🟢 **MEDIUM** | `LocalFilesystem` 未正确实现 CAS + 持久化 | [#3916](https://github.com/nearai/ironclaw/issues/3916) | **无 Fix PR** | 原子重命名 + fsync 缺失，影响 checkpoint 状态存储正确性 |

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| **规范优先 API 契约**（OpenAPI/AsyncAPI） | [#3953](https://github.com/nearai/ironclaw/issues/3953) | ⭐⭐⭐ 高 | 项目正从内部工具向平台转型，Gateway/WebUI 已存在，缺少契约阻碍生态 |
| **语义化文档命名**（替换 CLAUDE.md） | [#3954](https://github.com/nearai/ironclaw/issues/3954) | ⭐⭐⭐ 高 | 低实施成本，高社区清晰度收益，符合项目成熟化趋势 |
| **Approval 交互服务与产品解析路由** | [#3889](https://github.com/nearai/ironclaw/issues/3889) | ⭐⭐⭐ 高 | 明确标记为 #3094 的延续，auth 侧已有干净实现，此为批准侧对应切片 |
| **SecurityAuditSink 全边界覆盖** | [#3959](https://github.com/nearai/ironclaw/issues/3959) | ⭐⭐⭐ 高 | 基础设施安全债务，#3919/#3922 已奠基，剩余 call sites 为自然延伸 |
| **Host runtime 生产布线验证拆分** | [#3946](https://github.com/nearai/ironclaw/issues/3946) | ⭐⭐⭐ 高 | 架构卫生问题，services.rs 已超 3k 行阈值，#3903 review 明确跟进 |

---

## 7. 用户反馈摘要

### 真实痛点

> **"安装脚本坏了整整一个月"** — [#3945](https://github.com/nearai/ironclaw/issues/3945)
> 
> 用户 xkww3n 报告自 0.26 版本（约一个月前）起，macOS/Linux 安装器的架构选择和二进制下载函数损坏。这是**新用户获取的关键阻塞**，但尚未得到响应。反馈模式：详细的环境、版本、复现步骤、实际/预期行为对比——典型的生产用户报告质量。

> **"CLAUDE.md 命名让我困惑"** — [#3954](https://github.com/nearai/ironclaw/issues/3954)
> 
> Leamsi9 的反馈揭示项目历史包袱：从"Claude 专属"起步的文档约定，在解耦后成为认知负担。"对解析和发现都造成困惑，对项目也不公平"。

### 使用场景与期望

| 用户类型 | 场景 | 期望 |
|:---|:---|:---|
| **平台集成者** | 将 IronClaw 接入现有基础设施 | 稳定的 OpenAPI/AsyncAPI 契约（[#3953](https://github.com/nearai/ironclaw/issues/3953)） |
| **多租户 SaaS 运营者** | 安全隔离不同客户数据 | 内核级文件系统隔离（[#3952](https://github.com/nearai/ironclaw/pull/3952)）、无静默降级（[#3915](https://github.com/nearai/ironclaw/issues/3915)） |
| **技能/扩展开发者** | 发布第三方 hooks | 安全的激活机制（[#3951](https://github.com/nearai/ironclaw/pull/3951)）、清晰的 manifest v2（[#3955](https://github.com/nearai/ironclaw/pull/3955)） |

---

## 8. 待处理积压

| 事项 | 创建时间 | 最后更新 | 风险 | 提醒 |
|:---|:---|:---|:---|:---|
| **夜间 E2E 持续失败** | 2026-05-10 | 2026-05-23 | 🔴 **发布阻塞** | 14天无修复，全量特性测试失败，可能掩盖更多回归 |
| **macOS/Linux 安装脚本损坏** | 2026-05-23 | 2026-05-23 | 🔴 **用户获取阻塞** | 已影响一个月，今日首次报告，需立即响应 |
| **NoExposureGuard 组合与可审计性** | 2026-05-23 | 2026-05-23 | 🟡 架构债务 | serrrfirat 标记为 #3767 的非阻塞后续，但涉及安全边界覆盖完整性 |

---

## 健康度评估

| 维度 | 评分 | 说明 |
|:---|:---|:---|
| **开发速度** | ⭐⭐⭐⭐⭐ | 50 PR/24h 为极高水平，Reborn 重构全速推进 |
| **安全投入** | ⭐⭐⭐⭐⭐ | TOCTOU、跨租户泄漏、审计追踪等多线并行，fail-closed 设计原则明确 |
| **问题响应** | ⭐⭐⭐☆☆ | 新 Issue 全部未关闭，E2E 失败 14 天未解，安装脚本损坏一个月 |
| **社区包容** | ⭐⭐⭐⭐☆ | 积极采纳外围贡献者反馈（CLAUDE.md 重命名、API 契约提案） |
| **发布就绪** | ⭐⭐☆☆☆ | 零版本发布，E2E 持续失败，大量 `security-review-required` 待审 |

> **关键建议**：在 Reborn 架构冲刺的同时，需分配带宽修复 E2E 和安装脚本等基础稳定性问题，避免"高速建设、低速交付"的累积风险。

---

*本日报基于 GitHub 公开数据自动生成，如需深度分析特定 PR/Issue 的技术细节，可进一步展开。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-05-24

## 1. 今日速览

LobsterAI 今日社区活跃度**中等偏低**，核心活动集中在理论层面的架构反思而非代码迭代。过去24小时新增3条开放式Issues，全部来自同一贡献者 `woxinsj`，聚焦**记忆系统瓶颈**、**竞品对标分析**及**已知Bug根因定位**；2条PR仍处待合并状态，均为4月初提交的"stale"功能增强，今日无代码合并或版本发布。整体信号显示项目正处于**深度技术债务梳理期**——社区开始系统性反思底层架构短板，但工程落地节奏放缓。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

**今日无合并/关闭的PR**

两条活跃PR均停滞近7周，尚未进入合并流程：

| PR | 功能 | 状态 | 风险 |
|:---|:---|:---|:---|
| [#1529](https://github.com/netease-youdao/LobsterAI/pull/1529) | 批量会话导出为JSON | `[stale]` 待合并 | 4/7提交，最后更新5/23，缺乏维护者评审 |
| [#1530](https://github.com/netease-youdao/LobsterAI/pull/1530) | 多Agent定时任务归属选择 | `[stale]` 待合并 | 同上，UI交互改动需产品确认 |

**进展评估**：功能层面（cowork协作、scheduledTask调度）有社区贡献，但**维护者响应瓶颈**明显，两条PR累计等待评审超47天，项目工程推进近乎停滞。

---

## 4. 社区热点

今日全部讨论热度集中于 `woxinsj` 发布的**架构反思三部曲**（0评论、0👍，但内容深度高）：

### 🔥 最热：#2041 [最大的瓶颈不是进化算法，而是记忆系统](https://github.com/netease-youdao/LobsterAI/issues/2041)
- **核心诉求**：作者引用外部文章框架，系统对比理想Agent记忆系统（轨迹/声明式/结构化三类记忆）与LobsterAI现状（`.learnings/` + `memory/`），指出**长期记忆能力存在结构性差距**
- **背后信号**：self-evolver模块的"伪进化"——有历史会话分析能力，但缺乏真正的跨场景、长周期经验沉淀机制

### #2040 [OpenClaw 的五大薄弱点](https://github.com/netease-youdao/LobsterAI/issues/2040)
- **核心诉求**：对标竞品OpenClaw进行SWOT式剖析，将**记忆缺失、安全漏洞+恶意技能、Token成本失控、部署繁琐**列为高危短板
- **关键数据**：OpenClaw 63天138个漏洞、5700个Skill中1467个恶意（25.7%恶意率）
- **隐含焦虑**：LobsterAI若沿用相似架构（Computer Use+多模态大模型），可能复现相同成本与安全隐患

### #2039 [Dreaming开关Bug根因定位](https://github.com/netease-youdao/LobsterAI/issues/2039)
- **核心诉求**：指出Web UI的`/dreaming on`配置写入**memory-core不识别路径**，Gateway重启后配置丢失
- **技术债务信号**：前端与核心存储schema脱节，需`memory-core`显式支持`dreaming`属性才能根治

---

## 5. Bug 与稳定性

| 优先级 | Issue | 描述 | 修复状态 | 影响范围 |
|:---|:---|:---|:---|:---|
| 🔴 **P0-高** | [#2039](https://github.com/netease-youdao/LobsterAI/issues/2039) | Dreaming开关配置持久化失效，Gateway重启后丢失 | ❌ **无Fix PR** | 所有启用Dreaming功能的用户 |
| 🔴 **P0-极高**（关联） | [#2040](https://github.com/netease-youdao/LobsterAI/issues/2040) | 安全架构风险：Skill生态若开放，可能复现OpenClaw 25.7%恶意Skill问题 | ❌ 设计层面未响应 | 未来Skill商店/第三方生态 |

**关键缺失**：#2039虽定位根因（schema不匹配），但**未指派维护者**、无修复计划；#2040的安全预警属于前瞻性风险，尚未转化为可执行的防御设计。

---

## 6. 功能请求与路线图信号

| 来源 | 需求 | 与现有PR关联 | 纳入可能性评估 |
|:---|:---|:---|:---|
| #2041 | 重构记忆系统：三类记忆（轨迹/声明式/结构化） | 无直接关联 | **低** — 架构级改动，无RFC或设计草案 |
| #2040（隐含） | Skill安全审计机制、成本优化（非顶级多模态依赖） | 无 | **中低** — 属于长期竞争力，但无工程投入 |
| #1529 PR | 批量会话导出JSON | 已提交，待合并 | **高** — 功能完成度高，仅需维护者评审 |
| #1530 PR | 多Agent任务归属选择 | 已提交，待合并 | **高** — 解决用户感知混乱问题，产品价值明确 |

**路线图判断**：短期（1-2版本）最可能落地的是#1529、#1530两项工程增强；记忆系统重构与安全架构升级需**维护者主动发起RFC**，目前仅停留在社区讨论层。

---

## 7. 用户反馈摘要

> 基于Issues内容提炼，非直接评论（今日0评论）

| 维度 | 反馈 |
|:---|:---|
| **痛点** | Dreaming功能"能用但不可靠"——配置丢失问题已知数月，仅提供`check_dreaming_schema.py`临时脚本，用户体验断裂 |
| **焦虑** | 对标OpenClaw后，对LobsterAI长期成本结构（Computer Use绑定顶级多模态模型）和开放生态安全性存疑 |
| **认可** | self-evolver的"历史会话分析→.learnings输出"机制被视为有潜力的起点，但**天花板明显** |
| **场景诉求** | 需要真正的"长周期跨场景"记忆——当前skill-self-evolver局限于单会话/短周期回溯，无法支撑复杂个人助理的连续性 |

---

## 8. 待处理积压

| 类型 | 条目 | 积压时长 | 风险说明 |
|:---|:---|:---|:---|
| **PR stale** | [#1529](https://github.com/netease-youdao/LobsterAI/pull/1529) 批量导出 | 47天 | 功能完整，社区贡献可能因无反馈而流失 |
| **PR stale** | [#1530](https://github.com/netease-youdao/LobsterAI/pull/1530) Agent选择器 | 47天 | 多Agent核心体验，阻塞调度功能迭代 |
| **Issue 无响应** | [#2039](https://github.com/netease-youdao/LobsterAI/issues/2039) Dreaming Bug | 已知（重复出现） | 配置丢失破坏功能可信度，临时脚本非解决方案 |
| **架构债务** | [#2041](https://github.com/netease-youdao/LobsterAI/issues/2041) 记忆系统瓶颈 | 新开，待观察 | 若维护者无回应，可能演变为社区信心流失点 |

---

**维护者行动建议**：
1. **立即**：评审并合并/反馈 #1529、#1530，释放47天积压
2. **本周**：指派 #2039 至核心存储模块负责人，明确schema升级排期
3. **本月**：就 #2041 发起RFC讨论，或声明记忆系统的当前设计边界与演进立场

---

*日报生成时间：2026-05-24 | 数据来源：GitHub API 公开数据*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-05-24

## 1. 今日速览

Moltis 今日展现**高活跃度修复节奏**：24小时内 8 条 Issues 更新（5 开 3 闭）、4 条 PR 处理（3 合 1 待审），核心维护者 `penso` 单日合并 3 个修复 PR，形成"报告-修复-关闭"的高效闭环。值得关注的是，用户 `IlyaBizyaev` 单日密集提交 4 个 Bug 报告，暴露 MCP 安全、UI 适配、会话管理等维度的稳定性问题；同时 `penso` 发起的架构级 PR #1049 将 Agent 重新定义为"能力边界"，可能标志项目向多租户/多场景隔离方向演进。无新版本发布。

---

## 2. 版本发布

**无** — 今日未发布新版本。

---

## 3. 项目进展

| PR | 状态 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#1048](https://github.com/moltis-org/moltis/pull/1048) `fix(gateway): register config-declared hooks` | ✅ 已合并 | 修复 `[[hooks.hooks]]` TOML 配置仅解析验证却未注册到运行时的漏洞，补全发现/禁用/执行全链路 | **运行时可靠性**：消除配置与行为割裂的"静默失效"模式，为生产环境 hooks 治理奠基 |
| [#1050](https://github.com/moltis-org/moltis/pull/1050) `fix(vault): initialize existing password vaults` | ✅ 已合并 | 新增已设密码但未初始化 vault 的认证端点，区分"设密码"与"初始化 vault"的 UI 文案 | **安全体验闭环**：解决用户升级后加密功能卡死的阻断性问题 |
| [#1047](https://github.com/moltis-org/moltis/pull/1047) `fix(web): restore light mode syntax highlighting` | ✅ 已合并 | 恢复 Shiki 亮色模式语法高亮，透明化代码块背景，新增 Playwright 回归测试 | **UI 品质保障**：填补主题覆盖盲区，建立视觉回归防护网 |

**整体迈进评估**：今日 3 个修复覆盖配置系统、安全加密、前端主题三大子系统，均附带回归测试，体现"修复即加固"的工程纪律。架构 PR #1049 待审，若合并将开启 Agent 能力边界重构。

---

## 4. 社区热点

| 条目 | 热度指标 | 诉求分析 |
|:---|:---|:---|
| [#1049](https://github.com/moltis-org/moltis/pull/1049) `feat: agents as capability boundaries` | 🔥 架构级 PR，评论数未显示但涉及 MCP/sandbox/skills 核心能力 | **多租户隔离诉求**：将 Agent 从"聊天角色"升级为"安全边界"，支持家庭/企业场景下不同用户（如儿童 vs 家长）访问差异化的模型、工具链、沙箱策略。这是从单用户助手向平台化部署的关键跃迁 |
| [#1054](https://github.com/moltis-org/moltis/issues/1054) Env vars exposed to LLM via `mcp_list` | 新报安全漏洞，0 评论 | **供应链安全焦虑**：MCP 服务器配置中的环境变量通过 `mcp_list` 泄露给 LLM，可能暴露 API keys、数据库凭证。用户期待最小权限原则下的配置隔离 |
| [#1053](https://github.com/moltis-org/moltis/issues/1053) Automatic session title generation broken | 新报体验问题，0 评论 | **会话管理智能化缺口**：自动标题生成失效导致长会话难以检索，反映用户对大规模会话组织的隐性需求 |

---

## 5. Bug 与稳定性

| 优先级 | Issue | 现象 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#1054](https://github.com/moltis-org/moltis/issues/1054) | MCP 环境变量经 `mcp_list` 泄露至 LLM 上下文 | ❌ 暂无 | **待修复** — 涉及凭证安全，建议 P0 响应 |
| 🟡 **中** | [#1053](https://github.com/moltis-org/moltis/issues/1053) | 会话自动标题生成失效 | ❌ 暂无 | 待修复 |
| 🟡 **中** | [#1052](https://github.com/moltis-org/moltis/issues/1052) | 模型选择器 UI 无法容纳长版本号 | ❌ 暂无 | 待修复 |
| 🟡 **中** | [#1051](https://github.com/moltis-org/moltis/issues/1051) | OpenAI 兼容 provider 的 baseUrl 未验证，失败时不记录构造 URL | ❌ 暂无 | 待修复 — 调试体验痛点 |
| ✅ **已修复** | [#1024](https://github.com/moltis-org/moltis/issues/1024) | `[hooks]` 配置解析后未注册 | [#1048](https://github.com/moltis-org/moltis/pull/1048) | 已合并 |
| ✅ **已修复** | [#1046](https://github.com/moltis-org/moltis/issues/1046) | Vault 因误判密码未设置而无法初始化 | [#1050](https://github.com/moltis-org/moltis/pull/1050) | 已合并 |
| ✅ **已修复** | [#1045](https://github.com/moltis-org/moltis/issues/1045) | 亮色模式代码块无语法高亮 | [#1047](https://github.com/moltis-org/moltis/pull/1047) | 已合并 |

**健康度信号**：修复/关闭比 3:5（60%），但 4 个新 Bug 中 1 个为安全漏洞且无修复，存在风险敞口。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 与现有 PR 的关联 | 纳入下一版本可能性 |
|:---|:---|:---|:---|
| **Agent 级 sloopback（回环）与超时设置** | [#553](https://github.com/moltis-org/moltis/issues/553) `bsarkisov` | PR #1049 正重构 Agent 能力边界，sloopback/timeout 可作为该模型的扩展配置项 | ⭐⭐⭐⭐☆ **高** — 架构契合，技术债务低 |
| **Agent 能力边界（MCP/sandbox/skills 隔离）** | [#1049](https://github.com/moltis-org/moltis/pull/1049) `penso` | 自身即实现 PR | ⭐⭐⭐⭐⭐ **极高** — 已开 PR，待合并 |

**路线图推断**：项目正从"统一配置"转向"Agent 级精细化管控"，#553 的 per-agent 网络策略与 #1049 的能力边界天然互补，预计形成 `Agent Preset → Capability Sandbox → Runtime Enforcement` 的三层架构。

---

## 7. 用户反馈摘要

| 维度 | 具体痛点/场景 | 来源 Issue |
|:---|:---|:---|
| **安全焦虑** | "环境变量不该出现在 LLM 视野" — 用户对 MCP 供应链安全的信任阈值提高 | #1054 |
| **升级摩擦** | Vault 初始化状态与密码设置状态混淆，导致加密功能"假死" | #1046 |
| **视觉一致性** | 亮色模式长期被忽视，语法高亮缺失影响代码审查体验 | #1045 |
| **可观测性** | URL 构造失败无日志，调试 OpenAI 兼容 provider 时"黑盒" | #1051 |
| **规模化使用** | 会话标题失效后，数十条历史会话难以快速定位 | #1053 |

**满意度信号**：`IlyaBizyaev` 高频报告且遵循 Preflight Checklist，说明核心用户群体参与度高、质量意识强；但同日 4 Bug 也暗示 2026-05-23 构建可能存在回归。

---

## 8. 待处理积压

| Issue | 创建日期 | 最后更新 | 风险说明 |
|:---|:---|:---|:---|
| [#553](https://github.com/moltis-org/moltis/issues/553) Agent sloopback/timeout | 2026-04-04 | 2026-05-23 | **50 天未闭环**，但 PR #1049 可能覆盖其架构基础；需确认是否重复或需拆分 |
| [#1054](https://github.com/moltis-org/moltis/issues/1054) MCP 环境变量泄露 | 2026-05-23 | 2026-05-23 | **安全漏洞，无修复 PR**，建议维护者优先响应 |

**维护者行动建议**：
1. 对 #1054 启动安全响应流程，评估是否需要 hotfix
2. 在 #1049 审查中明确 #553 的纳入范围，避免需求悬空

---

*日报基于 GitHub 公开数据生成，时间窗口：2026-05-23 00:00 UTC 至 2026-05-24 00:00 UTC*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-05-24

> **项目地址**: [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)  
> **数据周期**: 2026-05-23 至 2026-05-24（UTC）

---

## 1. 今日速览

CoPaw 今日社区活跃度处于**中高水平**，24 小时内产生 **11 条 Issue 更新**（10 条活跃/新开，1 条关闭）及 **2 条待合并 PR**。核心信号显示：MCP（Model Context Protocol）生态集成是当前技术债务集中区，连续出现 2 个 OAuth 与 Schema 相关的 Bug；用户体验层面，Console UI 的实时性与移动端适配成为社区呼声最高的改进方向。暂无新版本发布，整体处于"问题暴露密集、功能迭代蓄势"的阶段。

---

## 2. 版本发布

**无新版本发布。**

最新版本仍为 `v1.1.8.post1`（Issue 中多次提及）。值得注意的是，今日多个 Bug 报告均针对该版本，建议维护者评估是否需要紧急补丁版本。

---

## 3. 项目进展

| PR | 状态 | 贡献者 | 核心进展 |
|:---|:---|:---|:---|
| [#4630](https://github.com/agentscope-ai/QwenPaw/pull/4630) | **待合并** | @sunies（首次贡献） | **MCP 管理增强**：集成应用市场（MySQL/PostgreSQL/Redis/SQLite/GitHub/Gitee/GitLab/Jenkins/AliCloud 等预置服务器）、连接健康监控、客户端密钥验证 |
| [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) | **审核中** | @EliasMei（首次贡献） | **DataPaw 数据分析插件**：新增 12 项 BI 技能，以标准插件形式贡献至 `plugins/bundle/`，零宿主代码侵入 |

**整体评估**：两个 PR 均为首次贡献者提交，反映社区参与门槛友好度提升。MCP 生态扩展与垂直领域插件化（数据分析）是明确的产品演进方向，但尚未合并意味着**今日代码层面无实质推进**。

---

## 4. 社区热点

| 排名 | Issue/PR | 互动量 | 热度分析 |
|:---|:---|:---|:---|
| 🔥1 | [#4265](https://github.com/agentscope-ai/QwenPaw/issues/4265) 读取对话日志内存耗尽 | 5 评论 | **已关闭**。虽创建较早（5-13），但今日关闭说明维护者响应了资源管理类严重问题。循环压缩+读取导致 SSH 不可用的级联故障模式，暴露日志系统的流式处理缺失。 |
| 🔥2 | [#4644](https://github.com/agentscope-ai/QwenPaw/issues/4644) Console UI 工具调用不实时显示 | 3 评论 | **高优先级 Bug**。除 `read_file` 外多数工具调用"大概率"不实时渲染，且无错误日志——属于最难调试的 Heisenbug 类型，直接影响开发者对 Agent 行为的信任。 |
| 🔥3 | [#4635](https://github.com/agentscope-ai/QwenPaw/issues/4635) 移动端 Console 入口 | 2 评论 | **战略级需求**。用户明确对比 DingTalk/Feishu/QQ 等已有渠道"仅提供基础对话"，要求完整 Console 功能的移动化，反映远程运维/监控场景的真实诉求。 |

**背后诉求**：开发者体验（DX）> 终端用户体验。Console 作为核心调试与监控界面，其可靠性直接决定 Agent 系统的可维护性上限。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **Critical** | [#4644](https://github.com/agentscope-ai/QwenPaw/issues/4644) | Console UI 工具调用渲染失败（无错误日志，Heisenbug） | 无 | **待修复** |
| 🔴 **Critical** | [#4643](https://github.com/agentscope-ai/QwenPaw/issues/4643) | MCP OAuth 不支持 `client_secret` 的 Token Exchange，阻断机密客户端连接 | 无 | **待修复** |
| 🟡 **High** | [#4646](https://github.com/agentscope-ai/QwenPaw/issues/4646) | MCP Schema Sanitizer 将合法布尔关键字转换为无效对象，破坏工具定义 | 无 | **待修复** |
| 🟡 **High** | [#4641](https://github.com/agentscope-ai/QwenPaw/issues/4641) | `env set` 后子进程不可见环境变量，需重启 Agent | 无 | **待修复** |
| 🟢 **Medium** | [#4265](https://github.com/agentscope-ai/QwenPaw/issues/4265) | 对话日志读取内存耗尽（**已关闭**） | 已修复 | ✅ **Resolved** |

**MCP 生态风险评估**：连续 2 个 MCP 相关 Bug（#4643 OAuth、#4646 Schema）指向同一根因——MCP 协议适配层的测试覆盖不足，特别是边缘场景（机密客户端、复杂 JSON Schema）。建议维护者优先建立 MCP 兼容性测试矩阵。

---

## 6. 功能请求与路线图信号

| Issue | 需求 | 与现有 PR 关联 | 纳入下一版本可能性 |
|:---|:---|:---|:---|
| [#4647](https://github.com/agentscope-ai/QwenPaw/issues/4647) Token 速度/用量显示 | 成本透明化、性能监控 | 无 | **高** — 实现成本低，用户呼声明确 |
| [#4645](https://github.com/agentscope-ai/QwenPaw/issues/4645) Pet 连接远程 Daemon | 客户端-服务器分离架构 | 无 | **中** — 架构改动，需评估安全模型 |
| [#4635](https://github.com/agentscope-ai/QwenPaw/issues/4635) 移动端 Console | 响应式 UI 或独立 App | 无 | **中** — 与 #4645 远程连接需求可协同 |
| [#4642](https://github.com/agentscope-ai/QwenPaw/issues/4642) 非侵入式插件扩展 | 对标 OpenClaw 的扩展性 | #4622 DataPaw（部分验证） | **高** — 已有插件化实践，需体系化 |
| [#4640](https://github.com/agentscope-ai/QwenPaw/issues/4640) / [#4639](https://github.com/agentscope-ai/QwenPaw/issues/4639) 会话结束自动总结 | Memory 系统闭环 | 无 | **高** — 重复提交（#4640/#4639 内容相同），反映需求迫切性 |

**路线图信号**：插件化（#4642）+ Memory 自动化（#4640/#4639）+ 远程架构（#4645）形成"**可扩展的分布式 Agent 平台**"愿景，与当前 MCP 生态扩展（#4630）方向一致。

> ⚠️ **注意**：#4640 与 #4639 为**重复 Issue**（同一作者、同一内容、同时创建），建议维护者合并并标记 `duplicate`。

---

## 7. 用户反馈摘要

| 维度 | 具体反馈 | 来源 Issue |
|:---|:---|:---|
| **痛点** | "叫 AI 读对话记录，结果 SSH 都进不去了" — 资源管理失控的级联灾难 | #4265 |
| **痛点** | "整个过程没有任何错误日志" — 调试黑箱，开发者信任崩溃 | #4644 |
| **痛点** | "需要侵入式修改源码" — 扩展性瓶颈，生态建设受阻 | #4642 |
| **场景** | "DingTalk/Feishu/QQ 只提供基础对话" — 移动端深度运维需求未被满足 | #4635 |
| **场景** | "run the daemon/agents persistently on a server" — 服务器-客户端分离的生产部署模式 | #4645 |
| **对比** | 明确对标 OpenClaw、Codex、Claude Cowork — 用户以竞品功能为基准评估 CoPaw | #4642 |
| **满意** | Memory 工具链完备（`memory_search` 等）— 但"输入环节薄弱"，利用率低 | #4640 |

**核心洞察**：用户认可 CoPaw 的基础能力（Memory 工具、多通道接入），但**生产化成熟度**（资源隔离、错误观测、扩展机制）与**竞品功能 parity** 是 adoption 瓶颈。

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 问题 | 提醒 |
|:---|:---|:---|:---|
| [#4640](https://github.com/agentscope-ai/QwenPaw/issues/4640) / [#4639](https://github.com/agentscope-ai/QwenPaw/issues/4639) | 2026-05-23 | **重复提交**，需合并并引导作者 | @maintainers 请标记 `duplicate` 并关闭 #4639 |
| [#4630](https://github.com/agentscope-ai/QwenPaw/pull/4630) | 2026-05-22 | MCP 管理增强 PR 待合并已超 24 小时 | 涉及安全功能（密钥验证），建议优先代码审查 |
| [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) | 2026-05-22 | DataPaw 插件审核中 | 首次贡献者，建议及时反馈审核意见以维持社区动力 |

---

**日报生成时间**: 2026-05-24  
**数据置信度**: 基于 GitHub 公开 API 数据，Issue/PR 状态以实时页面为准

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 | 2026-05-24

> **项目**: [qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw) | **定位**: AI 智能体与个人 AI 助手开源基础设施 | **分析日期**: 2026-05-24

---

## 1. 今日速览

今日 ZeptoClaw 项目呈现**高合并吞吐量、低社区互动**的特征。过去 24 小时内 14 个 PR 被合并/关闭，但 3 个待合并 PR 中包括一个**阻塞性安全修复**（RUSTSEC 漏洞清理），该问题已导致 CI 全红并阻断其他 PR。核心架构方面，Phase 2b 重构 RFC 正式开启，试图解决此前 Phase 2 尝试失败的技术债务。整体活跃度评分：**中等偏上（维护者驱动型）**，社区外部贡献几乎为零，全部 17 个 PR 中仅 2 个来自项目所有者，其余 15 个为 Dependabot 自动化依赖更新。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 🔒 关键安全修复（待合并，阻塞状态）

| PR | 状态 | 说明 |
|:---|:---|:---|
| [#594](https://github.com/qhkm/zeptoclaw/pull/594) `chore(deps): clear RUSTSEC advisories (lettre 0.11.22, diesel 2.3.8)` | **OPEN** | 修复 6 个新增 RUSTSEC 安全公告；因 `deny.toml` 零容忍策略，已导致 Security audit 与 Cargo deny CI 作业全红，阻塞所有开放 PR |

**技术影响**: 这是今日最高优先级事项。`lettre`（邮件发送库）和 `diesel`（ORM）的漏洞直接影响项目安全基线，需立即关注。

---

### ✅ 已合并/关闭的核心 PR（按重要性排序）

| PR | 关联 Issue | 功能推进 |
|:---|:---|:---|
| [#571](https://github.com/qhkm/zeptoclaw/pull/571) `feat(tools): trigger-phrase nudges in longterm_memory description` | [#569](https://github.com/qhkm/zeptoclaw/issues/569) | **Hermes Agent 自改进循环 Phase 1.5 落地**：为 `longterm_memory` 工具重写描述，加入显式触发短语引导（"Use when"/"Do NOT use when"），并添加 doc-test 防止未来回归 |
| [#570](https://github.com/qhkm/zeptoclaw/pull/570) `docs: align ZeptoClaw positioning claims` | [#565](https://github.com/qhkm/zeptoclaw/issues/565) | **品牌定位校准**：统一 README、Cargo metadata、CLAUDE.md、AGENTS.md 的"本地优先个人 AI 助手基础设施"定位，软化对 Aisar/ZeptoStack/NemoClaw 的无依据竞品对比 |
| [#566](https://github.com/qhkm/zeptoclaw/pull/566) `docs: refresh positioning, channel/provider counts, test status` | — | 文档事实同步：代码量 106k→154k LOC，清理 MQTT 通道状态说明，移除已解决的 nextest 阻塞注释 |

**架构演进**: [#583](https://github.com/qhkm/zeptoclaw/pull/583) 关闭标志着 Phase 2 首次尝试正式终结——该 PR 仅交付了"脚手架契约"（`LegacyTerminal` stub + 未使用的 `build_pipeline`/`build_subsystems` helper），未真正切割 `process_message`，成为技术债务案例。[#593](https://github.com/qhkm/zeptoclaw/issues/593) 作为 Phase 2b RFC 启动，显示维护者对中间件管道化的持续承诺。

---

### ✅ 批量依赖更新（Dependabot，12 项已合并）

| 类别 | PR 列表 |
|:---|:---|
| **Rust 核心依赖** | [#573](https://github.com/qhkm/zeptoclaw/pull/573) tokio 1.51.1→1.52.1、[#575](https://github.com/qhkm/zeptoclaw/pull/575) axum 0.8.8→0.8.9、[#577](https://github.com/qhkm/zeptoclaw/pull/577) libc 0.2.185→0.2.186、[#579](https://github.com/qhkm/zeptoclaw/pull/579) rustls 0.23.37→0.23.39、[#581](https://github.com/qhkm/zeptoclaw/pull/581) rustyline 17.0.2→18.0.0 |
| **JavaScript/文档站点** | [#576](https://github.com/qhkm/zeptoclaw/pull/576) astro 6.1.6→6.1.9 (r8r/docs)、[#578](https://github.com/qhkm/zeptoclaw/pull/578) astro 6.1.6→6.3.1 (zeptoclaw/docs)、[#580](https://github.com/qhkm/zeptoclaw/pull/580) @astrojs/starlight 0.38.3→0.38.4、[#572](https://github.com/qhkm/zeptoclaw/pull/572) @astrojs/starlight 0.38.3→0.39.2 (r8r/docs) |
| **DevOps/基础设施** | [#582](https://github.com/qhkm/zeptoclaw/pull/582) globals 17.3.0→17.5.0 (panel)、[#585](https://github.com/qhkm/zeptoclaw/pull/585) debian trixie-slim 镜像 digest 更新、[#591](https://github.com/qhkm/zeptoclaw/pull/591) taiki-e/install-action 2.75.17→2.77.3 |

---

## 4. 社区热点

> ⚠️ **数据异常**: 所有 Issues/PRs 的 👍 数均为 0，评论数为 0 或 undefined，**零社区互动**。

| 条目 | 互动数据 | 分析 |
|:---|:---|:---|
| [#593](https://github.com/qhkm/zeptoclaw/issues/593) `[rfc] refactor(agent): Phase 2b` | 0 评论, 0 👍 | 架构 RFC 本应引发技术讨论，但零反馈。可能原因：(1) 项目尚处早期，外部贡献者极少；(2) RFC 描述过于内部化（引用 #399/#564/#583 等历史 PR），新参与者门槛高；(3) 发布时间（2026-05-23）过短，尚未形成讨论周期 |
| [#594](https://github.com/qhkm/zeptoclaw/pull/594) RUSTSEC 修复 | undefined 评论, 0 👍 | 阻塞性安全 PR 同样零互动，反映**维护者单打独斗**模式 |

**诉求洞察**: 项目当前是**维护者驱动（maintainer-driven）** 的典型状态，社区建设尚未形成。Phase 2b RFC 的零反馈尤其值得关注——这涉及核心架构重构，缺乏外部视角可能增加技术决策风险。

---

## 5. Bug 与稳定性

| 严重程度 | 条目 | 状态 | 说明 |
|:---|:---|:---|:---|
| 🔴 **Critical** | RUSTSEC-2026-05-22 批量漏洞（`lettre`, `diesel` 等） | [#594](https://github.com/qhkm/zeptoclaw/pull/594) 待合并 | CI 全红，阻断所有 PR；零容忍安全策略下的系统性故障 |
| 🟡 **Medium** | Phase 2 重构技术债务 | [#583](https://github.com/qhkm/zeptoclaw/pull/583) 已关闭 | 首次尝试失败：脚手架代码未实际切割 `process_message`，留下 `LegacyTerminal` stub 和未使用的 helper 函数 |

**修复建议**: [#594](https://github.com/qhkm/zeptoclaw/pull/594) 需优先合并，考虑临时放宽 `deny.toml` 的严格性（如添加限时 ignore）以恢复 CI，同时并行推进正式修复。

---

## 6. 功能请求与路线图信号

| 来源 | 功能方向 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#593](https://github.com/qhkm/zeptoclaw/issues/593) Phase 2b RFC | 中间件 Pipeline 全面替换 `process_message` | **高** | 延续 #399 路线图，Phase 1 (#564) 已落地 11 个中间件实现；维护者主动推进 |
| [#569](https://github.com/qhkm/zeptoclaw/issues/569) / [#571](https://github.com/qhkm/zeptoclaw/pull/571) | 工具描述触发短语机制 | **已落地** | Hermes Agent 自改进循环的 Phase 1.5，模式验证中 |
| [#565](https://github.com/qhkm/zeptoclaw/issues/565) / [#570](https://github.com/qhkm/zeptoclaw/pull/570) | 定位声明与竞品对比规范化 | **已落地** | 防御性文档工程，降低法律/社区信任风险 |

**路线图推断**: 项目处于 **"管道化架构转型"** 关键期（#399 系列）。短期（1-2 周）焦点是 [#594](https://github.com/qhkm/zeptoclaw/pull/594) 安全修复 + Phase 2b 实施；中期需观察中间件性能是否满足"fast, small, secure" 的自我定位。

---

## 7. 用户反馈摘要

> **数据局限**: 零评论 Issues/PRs，无直接用户反馈。以下从 Issue 描述推断维护者/设计者的自我认知与痛点：

| 维度 | 内容 |
|:---|:---|
| **自我定位焦虑** | [#565](https://github.com/qhkm/zeptoclaw/issues/565) 显式提到"remove or soften claims not backed by public sources"，反映项目曾存在**过度承诺**问题，正在修正 |
| **架构复杂性** | Phase 2 失败（[#583](https://github.com/qhkm/zeptoclaw/pull/583)）与 2b 重启（[#593](https://github.com/qhkm/zeptoclaw/issues/593)）显示 `process_message` 的单体逻辑难以拆解，中间件管道化的**迁移成本被低估** |
| **外部依赖脆弱性** | 15/17 PR 为 Dependabot 更新，且安全漏洞可瞬间阻断全仓 CI，反映**依赖面较广、供应链安全意识强但弹性不足** |

---

## 8. 待处理积压

| 条目 | 创建时间 | 阻塞原因 | 建议行动 |
|:---|:---|:---|:---|
| [#578](https://github.com/qhkm/zeptoclaw/pull/578) astro 6.1.6→6.3.1 (zeptoclaw/docs) | 2026-05-05 | 可能受 [#594](https://github.com/qhkm/zeptoclaw/pull/594) CI 全红间接阻塞 | 安全修复后优先合并，文档站点版本滞后 18 天 |
| [#572](https://github.com/qhkm/zeptoclaw/pull/572) @astrojs/starlight 0.38.3→0.39.2 (r8r/docs) | 2026-05-05 | 同上 | 同上，注意 r8r 与 zeptoclaw 文档站点的版本一致性 |
| [#593](https://github.com/qhkm/zeptoclaw/issues/593) Phase 2b RFC | 2026-05-23 | 等待社区反馈/维护者决策 | 建议设置 RFC 评论截止期限（如 7 天），无反馈则自主推进，避免无限期等待 |

---

## 健康度评分

| 指标 | 评分 | 说明 |
|:---|:---|:---|
| 代码活跃度 | ⭐⭐⭐⭐☆ | 高合并吞吐量，但自动化占比过高 |
| 社区健康度 | ⭐⭐☆☆☆ | 零外部互动，维护者单打独斗 |
| 安全响应 | ⭐⭐⭐⭐☆ | 快速识别 RUSTSEC，但零容忍策略导致韧性不足 |
| 架构清晰度 | ⭐⭐⭐☆☆ | 路线图存在（#399），但执行反复（Phase 2 失败） |
| 文档维护 | ⭐⭐⭐⭐☆ | 主动校准定位，事实同步及时 |

**综合建议**: 项目技术骨架稳健，但需从"维护者个人项目"向"可持续社区"转型。建议：(1) 为 [#593](https://github.com/qhkm/zeptoclaw/issues/593) Phase 2b 创建更友好的 RFC 模板，降低参与门槛；(2) 考虑引入 `cargo-deny` 的 advisory 分级机制，替代当前零容忍策略；(3) 在 README 显式标注"寻求贡献者"以吸引早期采用者。

---

*日报生成基于 GitHub 公开数据，未包含私有讨论或离线沟通信息。*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-05-24

## 1. 今日速览

ZeroClaw 昨日（2026-05-23）保持**极高活跃度**：Issues 和 PR 各更新 50 条，其中 42 个 Issues 处于新开或活跃讨论状态，37 个 PR 待合并。社区无新版本发布，但工程推进密集——核心围绕**通道架构重构**（16 个通道的 AllowlistAspect 迁移）、**TUI 代理聊天界面**开发、以及 **v0.8.0-beta-1 的多个 P1 级回归修复**。值得注意的是，昨日单日新建 Issues 达 6 个，包括 2 个 P1 优先级 bug，显示 beta 版本质量压力上升。PR 合并率偏低（13/50，26%），大量通道迁移 PR 因"needs-author-action"标签阻塞，存在集成风险。

---

## 2. 版本发布

**无新版本发布**（v0.8.0-beta-1 仍为最新）

---

## 3. 项目进展

### 已合并/关闭的重要 PR（13 条中的关键项）

| PR | 作者 | 状态 | 进展说明 |
|:---|:---|:---|:---|
| [#6843](https://github.com/zeroclaw-labs/zeroclaw/pull/6843) | kristofferkoch | **CLOSED** | 为 agent channel context 暴露 `message_id`，补全系统提示的元数据上下文，已集成 |
| [#6692](https://github.com/zeroclaw-labs/zeroclaw/pull/6692) | Audacity88 | **CLOSED** | 修复文档中过时的 `RUST_LOG=zeroclaw...` 示例，匹配当前分 crate 的 tracing target 结构 |
| [#6868](https://github.com/zeroclaw-labs/zeroclaw/pull/6868) | Project516 | **OPEN/待合并** | 稳定 mdbook gettext catalog diff，解决小文档编辑触发大面积 `.po` 重写问题，提升 i18n 维护效率 |

### 整体推进评估

- **架构标准化**：ICSE 2027 M1 评估驱动的 16 通道 AllowlistAspect 迁移工程已启动（PR #6792-#6800），但全部阻塞在作者侧修改，尚未进入主分支
- **TUI 产品化**：PR [#6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848) 集成 `zeroclaw-tui`，将 Ratatui 聊天界面纳入主仓库，标志终端交互从实验走向正式
- **协议扩展**：ACP 协议 diff/file-proposal 消息类型（[#6820](https://github.com/zeroclaw-labs/zeroclaw/issues/6820)）与 TUI Agent Chat（[#6824](https://github.com/zeroclaw-labs/zeroclaw/issues/6824)）并行开发，形成"协议-界面"闭环

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---|:---|:---|
| 1 | **#6856** `show_tool_calls` 在 schema v3 的 channel 配置中缺失 | 5 | **配置迁移完整性**：v2→v3 配置升级遗漏了工具调用展示选项，影响调试体验 | [Issue #6856](https://github.com/zeroclaw-labs/zeroclaw/issues/6856) |
| 2 | **#6127** Gateway silent-fallback 加固（#6099 后续） | 4 | **安全可观测性**：runtime 侧已修复的凭证解析"静默回退"问题，gateway 侧仍存在，要求 fail-loud | [Issue #6127](https://github.com/zeroclaw-labs/zeroclaw/issues/6127) |
| 3 | **#5262** 添加 ZeroClaw logo 至 Agent Skills 官方客户端列表 | 3 | **生态位确认**：项目希望在 agentskills.io 标准中获得官方认可，提升行业可见度 | [Issue #5262](https://github.com/zeroclaw-labs/zeroclaw/issues/5262) |
| 4 | **#6724** 全通道 `enabled=false` 导致 supervisor crashloop | 3 | **运维健壮性**：空配置场景下的守护进程稳定性，直接影响生产部署体验 | [Issue #6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) |
| 5 | **#6558** Qwen 兼容提供商 405 Method Not Allowed | 3 | **多模型兼容性**：DashScope API 端点适配问题，阻碍国内用户核心工作流 | [Issue #6558](https://github.com/zeroclaw-labs/zeroclaw/issues/6558) |

### 诉求分析

- **配置系统信任危机**：#6856、#6877（`runtime_profiles.max_tool_iterations` 失效）、#6862（gateway SPA fallback 错误）共同指向 **v0.8.0-beta-1 配置-运行时一致性**问题，beta 测试者遭遇"配置不生效"的挫败感
- **企业级安全诉求**：#6127 的 4 个月长跑显示社区对"静默失败"零容忍，与 #6729（agent capability flags）、#6714（skill audit 误报）形成安全治理主题集群

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重度 | Issue | 描述 | 状态 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|:---|
| **S0 - 数据丢失/安全风险** | #6558 | Qwen 兼容提供商 405 错误，全部模型调用失败 | 阻塞，需作者反馈 | 无 | [Issue #6558](https://github.com/zeroclaw-labs/zeroclaw/issues/6558) |
| **S0 - 数据丢失/安全风险** | #6063 | web_search_tool 搜索 "openclaw" 无结果 | 阻塞，需复现 | 无 | [Issue #6063](https://github.com/zeroclaw-labs/zeroclaw/issues/6063) |
| **S1 - 工作流阻塞** | #6862 | Gateway SPA fallback 对 `/api/*` 返回 HTML 导致 JSON.parse 崩溃 | **已接受，P1** | 无 | [Issue #6862](https://github.com/zeroclaw-labs/zeroclaw/issues/6862) |
| **S1 - 工作流阻塞** | #6180 | llama-server 服务无法使用 | 阻塞，需复现 | 无 | [Issue #6180](https://github.com/zeroclaw-labs/zeroclaw/issues/6180) |
| **S1 - 工作流阻塞** | #6881 | email 通道空白 SMTP 凭证覆盖导致配置失效 | **已接受，P1** | 无 | [Issue #6881](https://github.com/zeroclaw-labs/zeroclaw/issues/6881) |
| **S2 - 降级行为** | #6856 | `show_tool_calls` schema v3 缺失 | **已接受，P2** | 无 | [Issue #6856](https://github.com/zeroclaw-labs/zeroclaw/issues/6856) |
| **S2 - 降级行为** | #6877 | `runtime_profiles.*.max_tool_iterations` 无效 | 新建 | 无 | [Issue #6877](https://github.com/zeroclaw-labs/zeroclaw/issues/6877) |
| **S2 - 降级行为** | #6724 | 全禁用通道导致 supervisor crashloop | 阻塞，需作者反馈 | 无 | [Issue #6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) |
| **S2 - 降级行为** | #6632 | cron 手动运行仍把尽力交付失败记为 ok | **已接受，P2** | #6026（相关） | [Issue #6632](https://github.com/zeroclaw-labs/zeroclaw/issues/6632) |

### 关键风险

- **v0.8.0-beta-1 回归集群**：#6862、#6877、#6881 均为 beta 引入或暴露的配置-运行时错位，建议维护者设立 **beta 阻断 issue 看板**
- **Fix PR 缺口**：8 个活跃 bug 中仅 #6632 有关联 PR，其余 7 个无修复方案，S1 级问题存在生产阻塞风险

---

## 6. 功能请求与路线图信号

### 高概率纳入下一版本（已有 PR 或已接受）

| 功能 | 信号强度 | 依据 | 链接 |
|:---|:---|:---|:---|
| **TUI Agent Chat 终端界面** | ⭐⭐⭐⭐⭐ | PR #6848 已开，#6824 tracker 标记 in-progress | [PR #6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848), [Issue #6824](https://github.com/zeroclaw-labs/zeroclaw/issues/6824) |
| **ACP 协议 diff/file-proposal 扩展** | ⭐⭐⭐⭐⭐ | #6820 已标记 in-progress，与 TUI 协同 | [Issue #6820](https://github.com/zeroclaw-labs/zeroclaw/issues/6820) |
| **16 通道 AllowlistAspect 统一** | ⭐⭐⭐⭐☆ | 9 个 PR 并行，ICSE 2027 外部评估驱动，但全部阻塞 | [PR #6792-#6800](https://github.com/zeroclaw-labs/zeroclaw/pull/6792) |
| **NEAR AI Cloud 提供商** | ⭐⭐⭐⭐☆ | PR #6842 已开，size:S 风险可控 | [PR #6842](https://github.com/zeroclaw-labs/zeroclaw/pull/6842) |
| **Signal 出站表情反应** | ⭐⭐⭐☆☆ | PR #6840 已开，功能完整 | [PR #6840](https://github.com/zeroclaw-labs/zeroclaw/pull/6840) |
| **WeCom AI Bot WebSocket 通道** | ⭐⭐⭐☆☆ | PR #6680 size:XL，更新频繁但尚未合并 | [PR #6680](https://github.com/zeroclaw-labs/zeroclaw/pull/6680) |

### 路线图信号（长期）

| 功能 | 信号 | 链接 |
|:---|:---|:---|
| **MemoryStrategy trait 解耦** | RFC 级提案，需维护者评审 | [Issue #6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) |
| **zeroclaw-channels → zeroclaw-runtime 依赖反转** | 架构级重构，NiuBlibing 提出 | [Issue #6864](https://github.com/zeroclaw-labs/zeroclaw/issues/6864) |
| **MCP → Xcode 集成** | 生态扩展，工具链方向 | [Issue #6065](https://github.com/zeroclaw-labs/zeroclaw/issues/6065) |

---

## 7. 用户反馈摘要

### 真实痛点（直接引用/提炼）

| 场景 | 痛点 | 来源 |
|:---|:---|:---|
| **beta 升级后配置失效** | "设置 `max_tool_iterations` 在 `runtime_profiles.default` 下完全无效，必须放在 `[agents.*]` 下" — 配置层级混乱导致调试时间浪费 | [Issue #6877](https://github.com/zeroclaw-labs/zeroclaw/issues/6877) |
| **Dashboard 白屏崩溃** | `Unexpected token '<', "<!DOCTYPE "... is not valid JSON` — SPA fallback 错误吞噬 API 错误，开发者工具难以定位 | [Issue #6862](https://github.com/zeroclaw-labs/zeroclaw/issues/6862) |
| **嵌入式设备编译困难** | Orange Pi 3 上 `config.toml` 未生成，文档缺失 Podman 手动配置指南 | [Issue #3852](https://github.com/zeroclaw-labs/zeroclaw/issues/3852) |
| **长对话上下文管理失控** | "对话一长就开始 hallucination，话题漂移" — 上下文溢出无优雅降级 | [Issue #6517](https://github.com/zeroclaw-labs/zeroclaw/issues/6517) |
| **Skill 审计误报挫败** | "anthropics/knowledge-work-plugins 仅因引用 .md 文档 URL 就失败审计" — 高误报率阻碍生态贡献 | [Issue #6714](https://github.com/zeroclaw-labs/zeroclaw/issues/6714) |

### 满意点

- **TUI 开发进度受期待**：社区对终端原生交互有强烈需求，#6824 的 Ratatui 实现获得关注
- **Signal 通道功能补全**：表情反应 PR (#6840) 显示对隐私友好通道的持续投入

---

## 8. 待处理积压

### 需维护者紧急介入

| Issue/PR | 阻塞时长 | 风险 | 行动建议 |
|:---|:---|:---|:---|
| **PR #6792-#6800**（9 个 AllowlistAspect 迁移） | 5 天 | ICSE 2027 评估 deadline 风险，16 通道中 9 个 PR 全部 `needs-author-action` | 指派专人批量 review，统一反馈修改模式 |
| **Issue #6074**（153 commits 恢复审计） | 29 天 | 3 月 bulk revert 丢失的修复/功能长期未恢复 | 建立恢复优先级队列，关联具体 commit 到当前 issue |
| **Issue #6127**（Gateway silent-fallback） | 28 天 | 安全漏洞，#6099 的 merge condition 未兑现 | 指派 gateway 模块负责人，设定 1 周内 fix deadline |
| **Issue #6724**（supervisor crashloop） | 7 天 | 生产部署致命，配置 UX 与运行时健壮性冲突 | 复现确认后，或接受"零启用通道时优雅待机"方案 |
| **Issue #6517**（Context Overflow） | 16 天 | 核心体验缺陷，无 assignee | 关联 memory strategy 重构 #6850，或先实施硬截断 |

### 健康度指标预警

- **PR 作者响应率**：9/37 待合并 PR 带 `needs-author-action`，作者-维护者反馈循环效率低
- **Issue 关闭率**：8/50（16%）关闭，低于活跃项目 30-40% 健康线，反映验证/复现瓶颈
- **P1/P2 积压**：6 个已接受 P1/P2 问题无关联 PR，存在发布阻滞风险

---

*日报生成时间：2026-05-24 | 数据来源：ZeroClaw GitHub 仓库公开活动*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*