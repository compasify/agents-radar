# OpenClaw 生态日报 2026-05-21

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-21 00:26 UTC

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

# OpenClaw 项目动态日报 | 2026-05-21

---

## 1. 今日速览

OpenClaw 今日维持**极高活跃度**，24小时内 Issues 与 PR 各更新 500 条，但**合并吞吐量偏低**（PR 合并率仅 4.6%，23/500），表明社区贡献旺盛但代码审查成为瓶颈。3 个新版本发布聚焦 Discord 语音会话稳定性与依赖安全更新。核心风险领域集中在：**密钥安全暴露**（多个关联 Issue/PR 同时推进）、**消息投递可靠性**（Discord/Telegram 通道存在静默丢失问题）、以及 **MCP 工具注册回归**（跨版本持续故障）。项目健康度评分：**B+**（活跃度高，但审查积压与关键稳定性问题需优先处理）。

---

## 2. 版本发布

### [v2026.5.20-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.5.20-beta.1) — 最新 Beta
**Discord 语音会话重大改进**
- **核心变更**：语音会话现支持**跟随配置的 Discord 用户进入语音频道**，包含频道权限检查、多用户交接、有界协调机制，并保留 DAVE 协议恢复能力（[#84264](https://github.com/openclaw/openclaw/pull/84264)，感谢 @fuller-stack-dev）
- **文档补充**：新增 `IDENTITY.md`、`USER.md` 等边界定义文档

**迁移注意**：多用户语音交接逻辑变更可能影响现有单用户会话的并发行为，建议测试 DAVE 加密恢复场景。

---

### [v2026.5.19](https://github.com/openclaw/openclaw/releases/tag/v2026.5.19) — 稳定版
- **Agent 开发规范**：明确修复应默认采用**干净的有界重构**，精简内部实现，并显式声明插件 SDK/API 弃用路径
- **依赖更新**：
  - `@openclaw/proxyline` → 0.3.3
  - Pi 包 → 0.75.1
  - **最低 Node.js 版本提升至 22.x line**

**破坏性变更**：Node.js 版本要求提升，运行环境需确认升级。

---

### [v2026.5.19-alpha.1](https://github.com/openclaw/openclaw/releases/tag/v2026.5.19-alpha.1)
- 内容与 v2026.5.19 相同，Alpha 预发布通道。

---

## 3. 项目进展

### 已合并/关闭的关键 PR（23 条中的代表性进展）

| PR | 状态 | 核心贡献 | 影响 |
|:---|:---|:---|:---|
| [#84592](https://github.com/openclaw/openclaw/pull/84592) | **已关闭** | 抑制 rolldown-plugin-dts CommonJS dts 警告 | 构建体验优化，拒绝更侵入式修复 |
| [#71412](https://github.com/openclaw/openclaw/pull/71412) | **已关闭** | 修复 `stopChannel` 中止超时遗留僵尸任务，阻止健康监控重启 | **关键稳定性修复**：通道状态机可靠性 |
| [#83744](https://github.com/openclaw/openclaw/pull/83744) | **已关闭** | 修复 Discord `progress` 失败状态跨运行持久化，抑制后续最终回复 | **消息投递可靠性**回归修复 |
| [#84629](https://github.com/openclaw/openclaw/pull/84629) | **已关闭** | 修复 Talk Mode TTS 音频播放 1 秒后切断并重启（远程 UI 访问场景） | 语音交互体验 |
| [#57349](https://github.com/openclaw/openclaw/pull/57349) | **已关闭** | 修复扩展运行后堆耗尽 OOM（文件系统扫描期间）| **关键稳定性**：长期运行可靠性 |

**整体评估**：今日合并以**稳定性修复**为主，覆盖通道状态机、Discord/TTS 投递、内存管理，但**大量高价值功能 PR 仍在排队**（477 待合并）。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues（按评论数排序）

| # | Issue | 评论 | 核心诉求 | 状态 |
|:---|:---|:---:|:---|:---|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | **工具调用间文本泄漏至消息通道** | 26 | 🦞 Diamond Lobster 评级；Agent 内部处理文本（错误处理、确认信息）被路由到 Slack/iMessage 等通道，严重 UX/安全问题 | **待修复**，标记 `no-new-fix-pr` |
| [#9443](https://github.com/openclaw/openclaw/issues/9443) | **预构建 Android APK 发布请求** | 24 | 社区代表 AI 助手提交；`apps/android` 源码存在但无预编译包，阻碍非开发者用户 | **长期需求**，产品决策待定 |
| [#72808](https://github.com/openclaw/openclaw/issues/72808) | **Slack 连接静默丢失** | 18 | 演示场景下连接中断无感知，无自动恢复，严重影响可靠性信任 | **待修复** |
| [#22676](https://github.com/openclaw/openclaw/issues/22676) | **Signal daemon SIGUSR1 重启竞态条件** | 17 | 孤儿进程、发送失败、端口冲突；网关重启机制深层缺陷 | **待修复**，有链接 PR |
| [#11829](https://github.com/openclaw/openclaw/issues/11829) | **API 密钥防 Agent 访问路线图** | 17 | 多层密钥保护：LLM Provider 密钥、模型目录序列化泄漏、聊天暴露等 | **活跃推进中**，关联 PR [#84739](https://github.com/openclaw/openclaw/pull/84739)、[#84738](https://github.com/openclaw/openclaw/pull/84738) |

**诉求分析**：社区核心焦虑集中在**"静默失败"模式**——连接丢失、消息丢失、密钥泄漏均为"无感知"故障，用户难以调试。这反映了 OpenClaw 作为"隐形基础设施"的定位与其可观测性/可靠性之间的差距。

---

## 5. Bug 与稳定性

### P1（严重）级别 Bug

| Issue | 描述 | 影响 | Fix PR |
|:---|:---|:---|:---|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | 工具调用间文本泄漏至消息通道 | 安全/隐私泄露、UX 破坏 | ❌ 无，标记 `no-new-fix-pr` |
| [#22676](https://github.com/openclaw/openclaw/issues/22676) | Signal daemon 重启竞态：孤儿进程+发送失败 | 消息丢失、崩溃循环 | 🔗 有链接 PR 开放 |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | **Masked Secrets**：阻止 Agent 访问原始 API 密钥 | 安全核心需求 | 🔗 [#84739](https://github.com/openclaw/openclaw/pull/84739)、[#84738](https://github.com/openclaw/openclaw/pull/84738) 今日新建 |
| [#84038](https://github.com/openclaw/openclaw/issues/84038) | `doctor --fix` 静默迁移 `openai-codex/` 配置至 `openai/`，破坏 PI+OAuth 运行时，导致 3-4x Token 膨胀 | 回归、成本激增、认证失效 | ❌ 无 |
| [#84059](https://github.com/openclaw/openclaw/issues/84059) | `EmbeddedAttemptSessionTakeoverError`：嵌入式会话锁释放后文件变更 | 升级 05.18 后所有嵌入式运行失败 | 🔗 [#84250](https://github.com/openclaw/openclaw/pull/84250) 待审查 |
| [#72015](https://github.com/openclaw/openclaw/issues/72015) | `active-memory` 插件阻塞回复，QMD 启动过载多 Agent 网关 | 性能退化、可靠性下降 | ❌ 无 |
| [#44202](https://github.com/openclaw/openclaw/issues/44202) | Apple Silicon 本地内存嵌入崩溃（ggml-metal/node-llama-cpp）| 网关崩溃、Metal/GPU 路径缺失指导 | ❌ 无 |
| [#71491](https://github.com/openclaw/openclaw/issues/71491) | Kimi K2.6 `reasoning_content` 400 回归（长对话 LCM 压缩后）| 模型兼容性、长会话失败 | 🔗 标记 `queueable-fix` |
| [#74484](https://github.com/openclaw/openclaw/issues/74484) | 网关配对范围死锁：CLI 无法批准/拒绝过度范围修复请求 | 运维锁定、无法自助恢复 | ❌ 无 |

### 今日新建/活跃的关键 Bug

- **[#84607](https://github.com/openclaw/openclaw/issues/84607)**：主模型返回 `overloaded_error` 时无自动回退重试（minimax 提供商，05.19-beta.1）
- **[#84629](https://github.com/openclaw/openclaw/issues/84629)**：TTS 音频远程 UI 访问时切断（已关闭）

---

## 6. 功能请求与路线图信号

### 高概率纳入下一版本（已有活跃 PR 或强烈信号）

| 功能 | Issue/PR | 信号强度 | 关键阻碍 |
|:---|:---|:---:|:---|
| **密钥安全体系重构**（Masked Secrets + 停止 models.json 明文存储） | [#10659](https://github.com/openclaw/openclaw/issues/10659)、[#11829](https://github.com/openclaw/openclaw/issues/11829)、[#84739](https://github.com/openclaw/openclaw/pull/84739)、[#84738](https://github.com/openclaw/openclaw/pull/84738)、[#84718](https://github.com/openclaw/openclaw/pull/84718) | ⭐⭐⭐⭐⭐ | 需协调多 PR 避免冲突 |
| **Discord 消息工具仅最终投递保护** | [#84485](https://github.com/openclaw/openclaw/pull/84485) | ⭐⭐⭐⭐⭐ | 需行为证明 |
| **Codex 运行时隔离与修复** | [#72812](https://github.com/openclaw/openclaw/pull/72812)、[#84728](https://github.com/openclaw/openclaw/pull/84728)、[#84736](https://github.com/openclaw/openclaw/pull/84736) | ⭐⭐⭐⭐⭐ | 认证/会话状态风险 |
| **Telegram 流式最终消息防截断** | [#84563](https://github.com/openclaw/openclaw/pull/84563) | ⭐⭐⭐⭐ | 需 Telegram 可见性证明 |
| **systemd 更新交接修复** | [#84151](https://github.com/openclaw/openclaw/pull/84151) | ⭐⭐⭐⭐ | 需真实行为证明 |
| **会话存档/恢复 (`/restore`)** | [#51889](https://github.com/openclaw/openclaw/pull/51889) | ⭐⭐⭐⭐ | 大规模 PR，需审查资源 |

### 中长期路线图信号（产品决策待定）

| 功能 | Issue | 社区热度 | 战略价值 |
|:---|:---|:---:|:---|
| 分层引导文件加载（渐进式上下文控制） | [#22438](https://github.com/openclaw/openclaw/issues/22438) | 16 评论 | Token 效率、大型工作区 |
| Slack Block Kit 支持 | [#12602](https://github.com/openclaw/openclaw/issues/12602) | 13 评论 | 企业交互体验 |
| 直接执行模式（Cron 作业免 AgentTurn） | [#18160](https://github.com/openclaw/openclaw/issues/18160) | 11 评论，👍 9 | 可靠性、成本 |
| 预响应强制钩子（硬门控） | [#13583](https://github.com/openclaw/openclaw/issues/13583) | 10 评论 | 金融/安全合规 |
| 原生密钥管理集成（AWS Secrets Manager, Vault） | [#13610](https://github.com/openclaw/openclaw/issues/13610) | 7 评论 | 企业安全基线 |
| 能力型权限（Capability-based） | [#12678](https://github.com/openclaw/openclaw/issues/12678) | 6 评论 | 零信任安全模型 |

---

## 7. 用户反馈摘要

### 核心痛点（来自 Issue 评论与描述）

| 主题 | 典型引述/场景 | 来源 |
|:---|:---|:---|
| **"静默失败"焦虑** | "Slack 连接工作数天后突然无响应，演示时完全失效，无任何错误提示" | [#72808](https://github.com/openclaw/openclaw/issues/72808) |
| **密钥暴露恐惧** | "模型目录中解析的 apiKey 值被序列化到提示上下文中" | [#11829](https://github.com/openclaw/openclaw/issues/11829) |
| **升级即故障** | "从 03.13 升级到 05.18 后，所有嵌入式运行失败" | [#84059](https://github.com/openclaw/openclaw/issues/84059) |
| **Token 成本失控** | "`doctor --fix` 迁移后 Codex 运行时 Token 用量膨胀 3-4 倍" | [#84038](https://github.com/openclaw/openclaw/issues/84038) |
| **Cron 不可靠** | "当前 Cron 需要 agentTurn 执行，会超时，作业不运行" | [#18160](https://github.com/openclaw/openclaw/issues/18160) |
| **移动端门槛** | "有 Android 源码但无预编译 APK，非开发者无法使用" | [#9443](https://github.com/openclaw/openclaw/issues/9443) |

### 积极反馈
- Discord 语音会话跟随功能（v2026.5.20-beta.1）获贡献者认可
- 社区代表/AI 助手提交 Issue 的模式显现（[#9443](https://github.com/openclaw/openclaw/issues/9443) 由 QING 代提交），表明 OpenClaw 在 AI 辅助工作流中的渗透

---

## 8. 待处理积压

### ⚠️ 需维护者优先关注的高价值积压

| Issue/PR | 创建时间 | 积压天数 | 风险 | 行动建议 |
|:---|:---|:---:|:---|:---|
| [#9443](https://github.com/openclaw/openclaw/issues/9443) Android APK 预构建 | 2026-02-05 | **105 天** | 移动用户流失、竞品差距 | 产品决策：是否纳入官方 CI？ |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) 分层引导文件加载 | 2026-02-21 | **89 天** | Token 效率核心诉求 | 技术评审，评估与现有压缩机制的整合 |
| [#25592](https://github.com/openclaw/openclaw/issues/25592) 工具调用间文本泄漏 | 2026-02-24 | **86 天** | 🦞 Diamond Lobster，安全/UX | **禁止新增修复 PR 的标记需复审**——是否已阻塞有效贡献？ |
| [#31407](https://github.com/openclaw/openclaw/pull/31407) 压缩文档链接 | 2026-03-02 | **80 天** | 文档可发现性 | XS 级 PR，快速合并 |
| [#52025](https://github.com/openclaw/openclaw/pull/52025) 工具结果图片内联渲染 | 2026-03-22 | **60 天** | Web UI 体验 | 需真实行为证明，分配测试资源 |
| [#52012](https://github.com/openclaw/openclaw/pull/52012) 压缩模型回退 | 2026-03-22 | **60 天** | 可靠性 | XL 级 PR，需专门审查窗口 |
| [#51889](https://github.com/openclaw/openclaw/pull/51889) `/restore` 命令 | 2026-03-21 | **61 天** | 数据恢复 | 高社区价值，建议提升优先级 |

### 审查瓶颈信号
- **477 待合并 PR** vs 23 已合并/关闭，合并率 4.6%
- **"needs proof" 状态 PR 密集**：表明测试/验证基础设施可能成为瓶颈
- **"no-new-fix-pr" 标记的 Issue 累积**：需评估该策略是否有效，或已演变为贡献摩擦

---

**日报生成时间**：2026-05-21  
**数据基础**：OpenClaw GitHub 公开活动数据  
**下次关注建议**：密钥安全 PR 集群（#84739/#84738/#84718）的合并协调，以及 MCP 工具注册回归（#80909）的跨版本修复验证。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告
**数据基准：2026-05-21 | 分析框架：社区活跃度、技术路线、成熟度三维评估**

---

## 1. 生态全景

个人 AI 助手开源生态正处于**"架构重构期"与"企业级落地期"的叠加阶段**：头部项目（OpenClaw、ZeroClaw）正经历 v0.8/v2026.5 级别的配置系统与多智能体架构大迁移，中型项目（NanoBot、CoPaw、PicoClaw）在渠道扩展与安全加固上快速迭代，而尾部项目（NullClaw、ZeptoClaw）因维护者带宽不足陷入停滞。整体呈现**"功能同质化加剧、工程成熟度分化、企业部署需求倒逼可靠性升级"**的特征，密钥安全、静默失败治理、多租户隔离成为跨项目共识痛点。

---

## 2. 各项目活跃度对比

| 项目 | Issues (活跃/关闭) | PRs (待合并/已合并) | 今日 Release | 健康度评估 | 关键信号 |
|:---|:---|:---|:---:|:---|:---|
| **OpenClaw** | 500+ 更新 / 高活跃 | 477 待合并 / 23 已合并 (4.6%) | ✅ 3 个 (beta/稳定/alpha) | 🟡 **B+** | 审查瓶颈严重，密钥安全集群推进 |
| **NanoBot** | 11 更新 (10 活跃) | 13 待合并 / 27 已合并 | ❌ 无 | 🟢 **A-** | 工程成熟度跃迁，Signal 终落地 |
| **Hermes Agent** | 50 更新 (49 活跃) | 41 待合并 / 9 已合并 | ❌ 无 | 🟡 **B** | FD 竞态等生产级修复密集，v0.14.0 架构迁移中 |
| **PicoClaw** | 8 活跃 | 16 待合并 / 7 已合并 | ⚠️ Nightly (不稳定警告) | 🟡 **B** | SiYue-ZO 系统性稳定性治理包待审 |
| **NanoClaw** | 4 更新 (3 活跃) | 17 待合并 / 6 已合并 | ❌ 无 | 🟢 **A-** | WhatsApp 24h 闭环，ACP 协议双 PR 推进 |
| **NullClaw** | 0 | 2 待合并 / 0 已合并 | ❌ 无 | 🔴 **D** | 连续两日零活动，44 天 PR 积压 |
| **IronClaw** | 18 活跃 | 27 待合并 / 18 已关闭 | ❌ 无 | 🟡 **B+** | Reborn 架构"缝合期"，Nightly E2E 10 天红灯 |
| **LobsterAI** | 4 更新 (3 活跃) | 17 待合并 / 7 已合并 | ❌ 无 | 🟢 **A-** | 7 PR/日 合并，stale PR 批量刷新但未实质推进 |
| **Moltis** | 2 新开 / 1 关闭 | 0 待合并 / 3 已合并 | ❌ 无 | 🟢 **B+** | 低活跃但高质量，聚焦可靠性边界 |
| **CoPaw** | 38 更新 (16 活跃/22 关闭) | 19 待合并 / 17 已合并 | ✅ v1.1.8.post1 | 🟢 **A-** | 修复密度高，3 崩溃级问题当日闭环 |
| **ZeptoClaw** | 0 | 1 待合并 / 0 已合并 | ❌ 无 | 🔴 **C** | 极低活跃，单 PR 阻塞生产故障 |
| **ZeroClaw** | 29 更新 (19 活跃/10 关闭) | 47 待合并 / 3 已合并 | ❌ 无 | 🟡 **B** | v0.8.0 架构迁移收尾，286 PR 积压危机 |
| **TinyClaw** | — | — | — | — | **过去24小时无活动** |

> **活跃度分层**：CoPaw、NanoBot、LobsterAI 处于**高吞吐健康期**；OpenClaw、ZeroClaw、Hermes Agent 处于**高活跃高债务期**；PicoClaw、IronClaw 处于**架构迁移关键期**；NullClaw、ZeptoClaw、TinyClaw 处于**维护停滞风险期**。

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 表现 | 生态对比 |
|:---|:---|:---|
| **社区规模** | 24h 500+ Issues/PR 更新，绝对量级第一 | ZeroClaw (79)、CoPaw (74)、Hermes (100) 次之，量级差距 5-10x |
| **审查吞吐量** | 4.6% PR 合并率，477 待合并积压 | NanoBot (67.5%)、CoPaw (47.2%) 效率显著更高 |
| **技术路线** | **"渠道优先"的泛 IM 基础设施**：Discord/Telegram/Slack/iMessage 全覆盖，DAVE 协议、语音跟随等深度集成 | ZeroClaw 侧重"多智能体运行时"，NanoBot 侧重"WebSocket 实时通信"，Hermes 侧重"代码优先 TUI" |
| **优势** | ① 渠道生态最完整（含 Signal、WhatsApp 企业级场景）；② 语音会话能力领先（DAVE 加密恢复）；③ 插件 SDK 成熟度 | 对比：ZeroClaw 的 skills 体系更开放，CoPaw 的 Pet 插件交互更轻量 |
| **劣势** | ① **"静默失败"模式普遍**（连接丢失、消息丢失、密钥泄漏均无感知）；② 审查瓶颈导致贡献者摩擦；③ MCP 工具注册跨版本回归未根治 | NanoBot 的 MessageBus 去重、CoPaw 的微信 iLink 修复响应更快 |
| **差异化定位** | **"隐形基础设施"**——追求用户无感知的 AI 介入，但可观测性/可靠性债务与之成正比 | Hermes 明确对标 Claude Code 的"显式交互"，ZeroClaw 强调"配置即代码"的 DevOps 友好 |

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 紧迫程度 |
|:---|:---|:---|:---:|
| **密钥安全体系重构** | OpenClaw (#10659/#11829)、NanoClaw (#1999/#2004)、IronClaw (#3818/#3831)、ZeroClaw (#6375) | ① Masked Secrets 阻止 Agent 访问原始 API Key；② 停止 models.json 明文存储；③ 分阶段凭证强制；④ Vault 密码同步原子化 | 🔴 **P0** |
| **"静默失败"治理** | OpenClaw (#72808 Slack 静默丢失、#25592 文本泄漏)、Hermes (#28208 WhatsApp 强制回复)、PicoClaw (#2720 PID 复用崩溃)、CoPaw (#4477 微信无日志失败) | ① 连接中断自动恢复；② 错误信息透传至用户可见层；③ 健康监控与僵尸进程清理 | 🔴 **P0** |
| **多智能体/多租户隔离** | ZeroClaw (#6272 运行时隔离、#5890 UX 流 RFC)、NanoBot (#3744 Session 级 MEMORY)、OpenClaw (插件 SDK 多实例) | ① 独立 workspace/memory/identity；② 会话级记忆隔离；③ Agent 间授权机制 | 🟡 **P1** |
| **渠道扩展与可靠性** | NanoBot (#49 Signal 落地)、NanoClaw (#2560 WhatsApp @-mention)、CoPaw (#4576 微信 iLink)、Hermes (#29541 Slack Block Kit) | ① 企业 IM（飞书、钉钉、企业微信）深度适配；② 群聊消息聚合/去重；③ 流式输出完整性 | 🟡 **P1** |
| **IDE/开发者工具集成** | NanoClaw (#2542/#2575 ACP 协议)、IronClaw (#3808 benchmark 自动化)、ZeroClaw (#6810 支持矩阵文档) | ① Agent Client Protocol 双向支持；② PR 评论触发 benchmark；③ 模型验证工具 | 🟡 **P1** |
| **配置系统现代化** | ZeroClaw (Schema v3 迁移)、OpenClaw (doctor --fix 静默迁移)、PicoClaw (恢复出厂设置) | ① 版本化配置迁移；② 环境变量覆盖机制；③ 原子性变更与回滚 | 🟡 **P1** |
| **流式输出与实时交互** | PicoClaw (#1950/#2404 Web Chat 流式)、NanoBot (#3179/#3286 WebSocket)、LobsterAI (#2019 Thinking Block 流式) | ① 前端实时渲染；② 增量帧处理；③ 思考过程可视化 | 🟢 **P2** |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户画像 | 技术架构特征 |
|:---|:---|:---|:---|
| **OpenClaw** | 泛 IM 渠道基础设施、语音会话、插件生态 | **个人极客** + 小型团队（Discord/Telegram 重度用户）| Node.js 22.x，插件 SDK 成熟，但债务累积 |
| **ZeroClaw** | 多智能体运行时、Skills 优先架构、配置即代码 | **企业 DevOps** + 自托管用户（多模型混合部署）| Rust 核心，严格类型化配置，v3 Schema 迁移中 |
| **CoPaw** | 桌面端 AI 助手、Pet 插件、多模态自动路由 | **个人知识工作者** + 轻量企业用户（中文优先）| Electron/Tauri 双轨，飞书/微信/钉钉深度适配 |
| **NanoBot** | WebSocket 实时通信、Token 成本治理、多提供商路由 | **开发者** + 实时协作场景（教育/客服）| 工程成熟度最高，网关工厂化、会话持久化 |
| **Hermes Agent** | 代码优先 TUI、后台任务、Claude Code 对标 | **软件工程师**（终端重度用户）| Python 3.13，事件循环优化中，诊断工具可信度危机 |
| **IronClaw** | TEE 可信执行、Reborn 安全架构、NEAR 区块链集成 | **Web3/加密原生开发者** + 合规敏感企业| Rust + WASM，分阶段凭证，Lane 体系迁移 |
| **PicoClaw** | 边缘设备部署（Raspberry Pi）、Go 语言运行时 | **IoT/边缘计算开发者** + 低成本 homelab 用户| Go 实现，MediaStore 原生集成，资源受限优化 |
| **NanoClaw** | WhatsApp 企业客服、ACP IDE 集成、容器化部署 | **企业客服运维** + 开发者工具链集成| LXC/systemd 兼容，OneCLI 自动引导 |
| **LobsterAI** | 网易产品矩阵集成、OpenHuman 引擎、多显示器适配 | **网易生态用户** + 中文企业客户| Electron 封装，内部产品间端口冲突待解 |
| **Moltis** | 内存系统扩展、进程生命周期管理、Vault 安全 | **隐私敏感用户** + 自托管爱好者| Rust，collection-aware 内存，原子化密码同步 |

---

## 6. 社区热度与成熟度

```
快速迭代阶段（高活跃 + 高合并率 + 功能扩张）
├── CoPaw        ████████████████████  v1.1.8.post1 补丁节奏，崩溃修复当日闭环
├── NanoBot      ██████████████████    Signal 落地，工程成熟度跃迁
└── LobsterAI    ████████████████      7 PR/日，Thinking Block 流式创新

架构迁移关键期（高活跃 + 低合并率 + 技术债务集中）
├── OpenClaw     ████████████████████  477 PR 积压，密钥安全集群推进
├── ZeroClaw     ██████████████████    v0.8.0 Schema v3，286 PR 积压危机
├── IronClaw     ████████████████      Reborn "缝合期"，Nightly E2E 红灯
└── Hermes Agent ██████████████        v0.14.0 迁移，FD 竞态等生产修复

质量巩固阶段（中低活跃 + 高修复质量 + 边界场景硬化）
├── PicoClaw     ████████████          SiYue-ZO 稳定性治理包，Nightly 警告
├── NanoClaw     ██████████            WhatsApp 24h 闭环，ACP 协议前瞻
└── Moltis       ████████              3 PR 均聚焦可靠性边界，低活跃高质

维护停滞风险期（极低活跃 + PR 长期积压 + 社区信心下降）
├── ZeptoClaw    ████                  单 PR 阻塞生产故障，1 日无响应
├── NullClaw     ██                    连续两日零活动，44 天 PR 积压
└── TinyClaw     ░░                    过去24小时完全静默
```

---

## 7. 值得关注的趋势信号

| 趋势信号 | 证据链 | 对开发者的参考价值 |
|:---|:---|:---|
| **"配置即代码"成为企业采纳门槛** | ZeroClaw Schema v3 严格迁移、OpenClaw `doctor --fix` 误迁移导致 Token 膨胀 3-4x、NanoBot 提供商配置列表化 | 配置系统的**版本化、原子迁移、回滚能力**是生产级 AI 助手的基础设施，早期设计需预留迁移钩子 |
| **"静默失败"比崩溃更具破坏性** | OpenClaw Slack 连接"工作数天后突然无响应"、CoPaw 微信"图片发送无日志"、PicoClaw `SQLITE_READONLY` 静默失败 | 可靠性设计需**强制错误透传**——所有通道、存储、认证层必须配备可观测性埋点，"无错误"不等于"成功" |
| **AI 助手正从"聊天工具"进化为"工作流嵌入节点"** | NanoClaw ACP 协议（IDE 后端化）、ZeroClaw 多智能体 UX 流 RFC、CoPaw Coding Mode 浏览器内 IDE | 开发者应将 Agent 设计为**可组合的基础设施组件**，而非独立应用；协议标准化（ACP、MCP）优先于功能堆砌 |
| **密钥安全从"功能"上升为"架构"** | IronClaw 分阶段凭证强制、OpenClaw Masked Secrets 多 PR 集群、NanoClaw 安全 PR 积压 41 天 | 密钥管理需**运行时策略前置**（如 IronClaw #3820 的 `NetworkMode::Deny` 在调用层隐藏工具），而非仅依赖静态配置 |
| **国内生态适配成为差异化战场** | NanoBot 163 邮箱 86 天未修、CoPaw 微信 iLink 13 评论聚焦、PicoClaw DeepSeek 适配诉求 | 出海/国内双轨项目需预留**本土化适配层**（邮箱 ID 命令、IM 协议差异、模型参数映射），避免硬编码标准库假设 |
| **"技能经济"替代"专用集成"** | ZeroClaw #6165 轻量级提案（skills 替代 gws-cli/jira/github 专用代码）、CoPaw Skill Market | 长期看，**通用 skills 框架 + 社区市场**将降低维护者专用集成的负担，但需解决技能发现、版本兼容、信任验证问题 |

---

**报告生成时间**：2026-05-21  
**数据基础**：12 个开源项目 GitHub 公开活动流  
**下次追踪建议**：关注 OpenClaw 密钥安全 PR 集群（#84739/#84738/#84718）的合并协调，以及 ZeroClaw v0.8.0 发布窗口的稳定性验证。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-05-21

---

## 1. 今日速览

NanoBot 今日保持**高度活跃**状态，过去24小时产生 **40 个 PR 更新**（合并/关闭 27 个，待审阅 13 个）和 **11 个 Issue 更新**（10 个活跃，1 个关闭）。社区贡献呈现"**多线并进**"特征：Signal 渠道支持历经两个 PR 迭代后终获合并，xAI Grok OAuth、Novita AI 等新提供商接入加速，同时代码质量重构（工具注册统一、网关工厂化、模板渲染）持续深入底层架构。值得注意的是，今日**无新版本发布**，但多个高价值功能已进入主干，为下一版本积蓄势能。

---

## 2. 版本发布

**无今日发布**。最新 Release 待追踪。

---

## 3. 项目进展

### 🔀 今日合并/关闭的关键 PR（27 个中的核心项）

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#3935](https://github.com/HKUDS/nanobot/pull/3935) `feat(signal): add Signal channel support` | chengyongru | **Signal 渠道正式落地**：基于 signal-cli HTTP JSON-RPC，支持 DM/群聊、白名单策略、Markdown→Signal 文本样式、打字指示器、附件处理、群消息上下文缓冲 | 隐私安全通信场景关键突破，补全主流渠道版图 |
| [#3852](https://github.com/HKUDS/nanobot/pull/3852) `feat(signal): add Signal channel support` | zayfod | 前期 Signal 实现（被 #3935 取代合并） | 社区协作迭代典范，功能最终收敛 |
| [#3179](https://github.com/HKUDS/nanobot/pull/3179) `WebSocket tooling, session lifecycle, reasoning, chat_id` | JackLuguibin | WebSocket 工具事件处理增强、会话生命周期通知、推理内容流式处理、chat_id 会话恢复、状态/上下文命令 JSON 支持 | 实时交互基础设施重大升级 |
| [#3286](https://github.com/HKUDS/nanobot/pull/3286) `WebSocket session lifecycle, tooling, and delta streaming` | JackLuguibin | deltaChunkChars 配置与分块增量帧处理、增量合并与缓冲区管理优化 | 流式响应体验精细化 |
| [#3748](https://github.com/HKUDS/nanobot/pull/3748) `add reraise property to AgentHook` | JackLuguibin | AgentHook 异常传播控制、错误管理增强 | 可观测性与调试体验提升 |
| [#2932](https://github.com/HKUDS/nanobot/pull/2932) `record LLM token usage to workspace JSONL` | JackLuguibin | Token 使用持久化、按日 JSONL 记录、CLI/SDK 全链路接入 | 成本管控与审计能力奠基 |
| [#3026](https://github.com/HKUDS/nanobot/pull/3026) `migrate provider configuration to list format` | JackLuguibin | 提供商配置从单对象迁移至列表格式、多端点支持、向后兼容、优先级选择逻辑 | 企业级多模型路由前提条件 |
| [#3224](https://github.com/HKUDS/nanobot/pull/3224) `append-only session transcripts` | JackLuguibin | 会话转录持久化、工具结果包含控制、JSONL 格式管理 | 会话可审计、可回放 |
| [#2981](https://github.com/HKUDS/nanobot/pull/2981) `dedupe inbound messages per session` | JackLuguibin | MessageBus 会话级消息去重、可配置开关、单元测试覆盖 | 高并发场景稳定性保障 |
| [#2852](https://github.com/HKUDS/nanobot/pull/2852) `restructure gateway initialization` | JackLuguibin | 网关工厂化组装、组件类注入替代硬编码、可测试性提升 | 架构现代化，降低扩展门槛 |

**整体评估**：今日合并内容覆盖**渠道扩展（Signal）、实时通信（WebSocket）、成本治理（Token 记录）、架构解耦（网关工厂化）、数据持久化（转录/去重）**五大维度，项目正从"功能堆叠"向"工程成熟度"跃迁。

---

## 4. 社区热点

### 🔥 讨论最活跃的议题

| 排名 | Issue/PR | 评论数 | 热度分析 |
|:---|:---|:---:|:---|
| 1 | [#49](https://github.com/HKUDS/nanobot/issues/49) `feat: Add Signal channel support via signal-cli` | **4 评论, 5 👍** | **历时 3 个月+ 的长跑需求**，今日随 #3935 合并宣告解决。社区对隐私通信渠道的强烈诉求得到回应，👍 数全站最高印证用户价值 |
| 2 | [#3744](https://github.com/HKUDS/nanobot/issues/3744) `[团队合作] session级别MEMORY功能请求` | **4 评论** | 多用户共享 Agent 时的隔离与记忆冲突——**企业/团队部署的核心痛点**，涉及 USER.md/MEMORY.md 机制设计与 session/ 目录实际作用，需架构层面回应 |
| 3 | [#1123](https://github.com/HKUDS/nanobot/issues/1123) `163.com 邮箱 IMAP "SELECT Unsafe Login" 问题修复方案` | **4 评论, 1 👍** | 国内邮箱兼容性**悬而未决的老问题**，含完整根因分析（163 服务器要求 ID 命令）和修复方案，等待维护者采纳 |
| 4 | [#3934](https://github.com/HKUDS/nanobot/issues/3934) `exec工具无法通过pip正常安装python第三方库` | **3 评论** | 工具链可用性阻塞问题，用户已定位 PATH 追加顺序缺陷，修复路径明确 |

**诉求洞察**：社区正从"个人尝鲜"向**团队协作、企业合规、本地化适配**演进，对隔离性、审计、国内生态兼容的需求显著上升。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#3939](https://github.com/HKUDS/nanobot/issues/3939) | Moonshot API 拒绝 kimi-k2.5/k2.6 请求：`reasoning_effort` 与 `thinking` 参数冲突 | **✅ 已有 Fix PR [#3940](https://github.com/HKUDS/nanobot/pull/3940)**（同日提交，待合并） |
| 🔴 **高** | [#3931](https://github.com/HKUDS/nanobot/issues/3931) | `restrictToWorkspace=true` 误拦截 Web 请求（curl 外部域名被判定为路径越界） | ❌ 待处理 |
| 🟡 **中** | [#3884](https://github.com/HKUDS/nanobot/issues/3884) | WebUI 首条响应后对话自动关闭（WebSocket 会话生命周期问题） | ❌ 待处理，可能与 #3179/#3286 相关 |
| 🟡 **中** | [#3907](https://github.com/HKUDS/nanobot/issues/3907) | **已关闭** — deepseek-v4-pro 思考模式逐字换行显示（`IncrementalThinkExtractor` 缺乏行缓冲合并） | ✅ 已关闭 |
| 🟡 **中** | [#3934](https://github.com/HKUDS/nanobot/issues/3934) | exec 工具 PATH 追加顺序导致虚拟环境失效，pip 安装被系统 Python 拦截 | ❌ 待处理，社区已提供修复思路 |
| 🟢 **低** | [#3903](https://github.com/HKUDS/nanobot/issues/3903) | 图像生成代码质量：MiniMax/AIHubMix 硬编码 PNG MIME、绕过基类 `_http_post()` | ❌ 待处理，属技术债 |

**稳定性评估**：核心推理链路（Moonshot/deepseek）存在参数兼容性风险，安全策略（restrictToWorkspace）有过度拦截 regressions，工具链（exec PATH）可用性受损。好在社区响应迅速，#3939 当日即获 Fix PR。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 路线图信号 | 纳入可能性评估 |
|:---|:---|:---|:---|
| **Signal 渠道支持** | [#49](https://github.com/HKUDS/nanobot/issues/49) | #3935 已合并 | ✅ **已落地** |
| **Ollama 图像生成后端** | [#3941](https://github.com/HKUDS/nanobot/issues/3941) | 本地模型生态延伸，与现有 Ollama LLM 支持形成闭环 | 🔜 **高** — 架构路径清晰，社区可快速跟进 |
| **群聊消息缓冲/防抖** | [#3938](https://github.com/HKUDS/nanobot/issues/3938) | 团队场景刚需，Feishu/Telegram 群聊体验优化 | 🔜 **高** — 与 #2981 去重机制可协同 |
| **Session 级记忆隔离** | [#3744](https://github.com/HKUDS/nanobot/issues/3744) | 多用户架构核心设计问题 | ⚠️ **中** — 需架构决策，涉及 MEMORY.md/USER.md 重构 |
| **xAI Grok OAuth** | — | #3936 待审 PR | 🔜 **高** — PKCE 完整实现，降低 API Key 管理门槛 |
| **Novita AI 提供商** | — | #3927 待审 PR | 🔜 **高** — OpenAI 兼容路径，接入成本低 |
| **危险命令用户确认** | — | #3937 待审 PR（关联 #3887） | 🔜 **高** — 安全合规刚需，OpenClaw 风格实现 |

---

## 7. 用户反馈摘要

### 💬 真实痛点提炼

| 场景 | 来源 | 核心反馈 |
|:---|:---|:---|
| **团队协作** | [#3744](https://github.com/HKUDS/nanobot/issues/3744) | "多个 IM 用户使用同一个 agent 时，USER.md 和 MEMORY.md 怎么隔离？session/ 目录到底干什么用的？" — **架构文档缺失，多用户模型模糊** |
| **国内部署** | [#1123](https://github.com/HKUDS/nanobot/issues/1123) | 163 邮箱 IMAP 需要发送 ID 命令才能 SELECT，标准库不兼容 — **本土化适配成本** |
| **群聊体验** | [#3938](https://github.com/HKUDS/nanobot/issues/3938) | "连续发多条消息会触发多次独立回复，群聊很乱" — **消息聚合策略缺失** |
| **工具链灵活性** | [#3934](https://github.com/HKUDS/nanobot/issues/3934) | "想装第三方库但 exec 优先用系统 Python，虚拟环境加 PATH 不生效" — **环境隔离设计缺陷** |
| **安全策略误伤** | [#3931](https://github.com/HKUDS/nanobot/issues/3931) | "curl 外部网站被判定为路径越界" — **restrictToWorkspace 语义边界不清** |
| **提供商兼容性** | [#3939](https://github.com/HKUDS/nanobot/issues/3939) | Moonshot 同时拒绝 `reasoning_effort` + `thinking` — **多提供商参数策略需差异化** |

### 😊 满意点
- Signal 支持终落地，隐私场景用户长期诉求得到满足（[#49](https://github.com/HKUDS/nanobot/issues/49) 5 👍）
- WebSocket 实时交互能力持续增强（#3179/#3286）

### 😤 不满点
- 文档与架构设计透明度不足（session/ 目录用途、多用户模型）
- 安全策略过度保守导致正常功能受阻
- 国内生态（邮箱、模型提供商）适配滞后

---

## 8. 待处理积压

### ⏰ 需维护者关注的高价值积压

| Issue/PR | 创建时间 | 积压天数 | 风险与行动建议 |
|:---|:---|:---:|:---|
| [#1123](https://github.com/HKUDS/nanobot/issues/1123) `163.com 邮箱 IMAP 修复` | 2026-02-24 | **86 天** | ⚠️ **国内用户 onboarding 阻塞**，含完整根因分析与修复方案，建议直接采纳或指派 review |
| [#49](https://github.com/HKUDS/nanobot/issues/49) Signal 支持 | 2026-02-03 | **107 天** | ✅ 今日随 #3935 解决，建议关闭并更新文档 |
| [#3744](https://github.com/HKUDS/nanobot/issues/3744) Session 级记忆隔离 | 2026-05-11 | 10 天 | 🔥 **团队/企业场景核心设计债务**，建议维护者回应架构意图，或标记 `good first issue` 引导社区设计 |
| [#3884](https://github.com/HKUDS/nanobot/issues/3884) WebUI 对话自动关闭 | 2026-05-17 | 4 天 | 用户体验 regressions，可能与近期 WebSocket 重构相关，建议关联 #3179/#3286 作者排查 |
| [#3931](https://github.com/HKUDS/nanobot/issues/3931) restrictToWorkspace 误拦截 | 2026-05-20 | 1 天 | 安全策略逻辑缺陷，建议高优先级修复，区分"文件系统路径"与"网络 URL"的校验域 |

---

**日报生成时间**：2026-05-21  
**数据来源**：HKUDS/nanobot GitHub 公开活动  
**健康度评分**：⭐⭐⭐⭐☆（高活跃度，工程成熟度提升中，需加强文档与多用户架构透明度）

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-05-21

## 1. 今日速览

Hermes Agent 今日呈现**极高活跃度**：50 条 Issues 更新（49 条活跃/新开，仅 1 条关闭）与 50 条 PR 更新（41 条待合并，9 条已合并/关闭）表明社区处于**密集开发期**。核心关注点集中在**网关稳定性**（Discord/Slack/Feishu/WhatsApp 多平台修复）、**认证体系重构**（OAuth 状态隔离、Copilot/gh CLI 诊断误报）以及**关键安全修复**（TLS 字节写入 SQLite 数据库的 FD 回收竞态条件，P1 级别）。无新版本发布，但大量 PR 集中在今日创建或更新，显示 v0.14.0 架构迁移后的快速迭代阶段。

---

## 2. 版本发布

**无新版本发布**（0 个）

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 状态 | 关键进展 |
|:---|:---|:---|:---|
| [#29238](https://github.com/NousResearch/hermes-agent/pull/29238) | JerryLiu369 | **已关闭** | 修复自定义/自托管提供商（CCTQ、Ollama 等）的视觉能力回退问题，允许用户显式配置 `supports_vision: true` 生效 |
| [#19803](https://github.com/NousResearch/hermes-agent/pull/19803) | konsisumer | **已关闭** | 网关审批通知"快速失败"：消除平台适配器无法投递审批提示时的 5 分钟挂起，改为立即失败并暴露错误 |

### 待合并的关键 PR（今日创建/更新）

| PR | 作者 | 优先级 | 推进方向 |
|:---|:---|:---|:---|
| [#29544](https://github.com/NousResearch/hermes-agent/pull/29544) | xxxigm | **P1** | **FD 回收竞态修复**：TLS 应用数据字节被写入无关文件描述符（生产环境导致 `kanban.db` SQLite 头损坏），根因为 Python 3.13 异步 SSL 传输的 FD 复用漏洞 |
| [#29543](https://github.com/NousResearch/hermes-agent/pull/29543) | Angriff36 | P2 | 网关 `evaluate_after_turn` 同步 HTTP 调用阻塞事件循环 10-40 秒，导致 Discord 心跳超时；改为线程池卸载 |
| [#29541](https://github.com/NousResearch/hermes-agent/pull/29541) | bpross | P2 | Slack 线程上下文获取支持 Block Kit 内容（Honeycomb/PagerDuty/Datadog 告警 bot 的可操作数据） |
| [#29540](https://github.com/NousResearch/hermes-agent/pull/29540) | Amidwestnoob | P3 | 新增 `hermes providers validate` 部署就绪验证工具，通过真实 `hermes chat -Q` 回合评分工具调用行为 |
| [#29358](https://github.com/NousResearch/hermes-agent/pull/29358) | xxxigm | P2 | Windows `hermes update` 并发检查误报修复：排除 distlib 生成的 launcher-shim 祖先 PID |

**整体推进评估**：今日合并量偏低（9/50），但**关键基础设施修复密集**——FD 竞态、事件循环阻塞、认证状态隔离等问题直击生产稳定性，显示维护者正优先处理技术债务而非功能交付。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| Issue | 评论 | 👍 | 核心诉求 |
|:---|:---|:---|:---|
| [#5143](https://github.com/NousResearch/hermes-agent/issues/5143) Multi-Role Auto-Routing via Gateway Hooks | 4 | 12 | **v0.14.0 架构对齐后的 v2 提案**：上下文分类器 + 误路由恢复机制，12 个点赞显示社区对"网关级多角色路由"的强烈需求 |
| [#28419](https://github.com/NousResearch/hermes-agent/issues/28419) TUI ANSI 转义序列泄漏 | 4 | 0 | 网关管道断裂后 TUI 输入框被 stdout 渲染代码污染 stdin，影响终端交互可靠性 |
| [#4438](https://github.com/NousResearch/hermes-agent/issues/4438) Rich Spreadsheet Skill | 4 | 0 | 结构化 Excel/CSV 抽象层，避免每次从零调用 `openpyxl`/`pandas` |
| [#29481](https://github.com/NousResearch/hermes-agent/issues/29481) `hermes doctor` SSH 检查忽略配置 | 3 | 0 | 诊断工具与实际运行时行为不一致，配置漂移问题 |
| [#21910](https://github.com/NousResearch/hermes-agent/issues/21910) rewind/edit-and-resubmit | 3 | 4 | **Claude Code 体验对标**：双击 Esc 回滚到任意历史消息重新提示，4 个点赞反映交互范式迁移需求 |
| [#16946](https://github.com/NousResearch/hermes-agent/issues/16946) 后台任务持久化历史 | 3 | 0 | 进程注册表的 `_finished` 字典内存丢失，检查点仅持久化运行中任务 |

**诉求分析**：社区正从"基础功能可用"向**企业级部署体验**跃迁——多租户隔离（#14162、#27182）、会话 rewind（#21910）、后台任务持久化（#16946）均为规模化运营所需；同时**诊断工具可信度**（#29481、#29442）成为阻塞采纳的摩擦点。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 描述 | 状态 |
|:---|:---|:---|:---|
| **P1** | [#29544](https://github.com/NousResearch/hermes-agent/pull/29544) / [#29507](https://github.com/NousResearch/hermes-agent/issues/29507) | **TLS 字节写入 SQLite 数据库**：FD 回收竞态导致 `kanban.db` 头损坏，数据静默丢失 | **Fix PR 已提交** |
| **P1** | [#29522](https://github.com/NousResearch/hermes-agent/issues/29522) | 自动上下文压缩隐藏/丢弃刚完成的助手响应 | 待修复 |
| P2 | [#29511](https://github.com/NousResearch/hermes-agent/issues/29511) | 网关模式自动拒绝时 `DANGEROUS COMMAND` 警告文本泄漏到代理可见输出，污染下游消费者 | 待修复 |
| P2 | [#29528](https://github.com/NousResearch/hermes-agent/issues/29528) | Discord 点击斜杠命令建议未归一化，`<status:123456789>` 格式穿透命令检测 | 待修复 |
| P2 | [#29466](https://github.com/NousResearch/hermes-agent/issues/29466) | 飞书 DM 回复消息被路由到线程而非主聊天 | 待修复 |
| P2 | [#29471](https://github.com/NousResearch/hermes-agent/issues/29471) | 飞书长消息首块 `msg_type=text` 破坏 Markdown 渲染 | 待修复 |
| P2 | [#29529](https://github.com/NousResearch/hermes-agent/issues/29529) | Profile HOME 隔离隐藏宿主机 GitHub CLI 认证，子进程 `gh auth status` 显示未认证 | 待修复 |
| P2 | [#26847](https://github.com/NousResearch/hermes-agent/issues/26847) | xAI OAuth 403 错误：标准 SuperGrok 订阅者被后端强制要求 Heavy 套餐，与文档矛盾 | 待修复（xAI 侧问题） |
| P2 | [#5358](https://github.com/NousResearch/hermes-agent/issues/5358) | 存在 `OPENROUTER_API_KEY` 时网关/CLI 忽略 `model.provider` 配置 | 长期存在 |
| P2 | [#28419](https://github.com/NousResearch/hermes-agent/issues/28419) | TUI ANSI 转义序列泄漏 | 待修复 |

---

## 6. 功能请求与路线图信号

| Issue/PR | 功能方向 | 纳入可能性评估 |
|:---|:---|:---|
| [#5143](https://github.com/NousResearch/hermes-agent/issues/5143) 网关多角色自动路由 | **v0.14.0 核心架构能力** | ⭐⭐⭐⭐⭐ 高：已 rework 为 v2 提案，与架构演进一致 |
| [#29540](https://github.com/NousResearch/hermes-agent/pull/29540) 提供商验证工具 | 部署就绪检查 | ⭐⭐⭐⭐☆ 高：今日新 PR，直接解决运维痛点 |
| [#29535](https://github.com/NousResearch/hermes-agent/issues/29535) 单网关进程多 Profile 路由 | 多租户网关 | ⭐⭐⭐⭐☆ 高：与 #5143 互补，企业部署刚需 |
| [#29531](https://github.com/NousResearch/hermes-agent/issues/29531) 网关每会话工作目录 | API 会话隔离 | ⭐⭐⭐⭐☆ 高：OpenAI 兼容端点规模化前提 |
| [#21910](https://github.com/NousResearch/hermes-agent/issues/21910) rewind/edit-and-resubmit | 交互范式升级 | ⭐⭐⭐☆☆ 中：体验优化，非阻塞 |
| [#4438](https://github.com/NousResearch/hermes-agent/issues/4438) 富电子表格 Skill | 工具能力扩展 | ⭐⭐⭐☆☆ 中：技能生态建设，社区可贡献 |
| [#29431](https://github.com/NousResearch/hermes-agent/issues/29431) 🌙 Dreaming 记忆巩固插件 | 第三方插件创新 | ⭐⭐☆☆☆ 低：独立仓库提案，观察社区采纳 |
| [#25083](https://github.com/NousResearch/hermes-agent/issues/25083) 不可变/受保护 Skill | 安全治理 | ⭐⭐⭐⭐☆ 高：与 #25083 形成治理闭环，近期安全焦点 |

**路线图信号**：v0.14.0 架构正推动**网关层多租户化**（Profile 隔离、会话工作目录、角色路由）与**认证体系重构**（dashboard native auth #29536、共享 auth home #29530），预计下一版本将以"企业级部署"为核心叙事。

---

## 7. 用户反馈摘要

### 核心痛点

| 场景 | 来源 Issue | 用户原声提炼 |
|:---|:---|:---|
| **诊断工具不可信** | #29481, #29442 | "`hermes doctor` 报告 SSH 失败但实际终端工作"；"Copilot 明明能用却报未配置"——诊断误报消耗信任资本 |
| **网关沉默即错误** | #28208, #18848 | WhatsApp 群聊中"正确行为是不回复"，但系统强制重试/发送诊断垃圾信息 |
| **认证状态分裂** | #29529, #29530 | Profile 隔离后 `gh auth status` 失效，OAuth 刷新令牌在多个隔离 HOME 间竞争 |
| **本地模型体验劣化** | #29456 | "自动标题生成拖慢对话"，缺乏开关控制 |
| **TUI 交互脆弱** | #28419 | 网关崩溃后终端"被 ANSI 垃圾淹没"，恢复机制缺失 |

### 满意点

- **后台任务机制**受认可，但要求持久化归档（#16946）
- **Claude Code 交互范式**被明确引用为对标目标（#21910），显示用户认可 Hermes 的"代码优先"定位

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 最后更新 | 风险说明 |
|:---|:---|:---|:---|
| [#5143](https://github.com/NousResearch/hermes-agent/issues/5143) Multi-Role Auto-Routing | 2026-04-04 | 2026-05-20 | **47 天未关闭**，但 v2 提案刚更新；若 v0.14.0 发布前未合并将造成架构债务 |
| [#4438](https://github.com/NousResearch/hermes-agent/issues/4438) Rich Spreadsheet Skill | 2026-04-01 | 2026-05-20 | **50 天**，基础工具能力缺口，社区贡献友好但缺乏维护者响应 |
| [#5358](https://github.com/NousResearch/hermes-agent/issues/5358) OpenRouter 配置回退 | 2026-04-06 | 2026-05-20 | **45 天**，P2 优先级但影响多提供商切换的核心配置语义 |
| [#4922](https://github.com/NousResearch/hermes-agent/pull/4922) Docker 网络透传 | 2026-04-04 | 2026-05-21 | **47 天**，基础设施 PR，评论 undefined 状态不明，可能因审查资源不足停滞 |

**维护者关注建议**：FD 竞态修复（#29544）应优先合并以阻止数据损坏；长期 Issue #5143 与 #5358 需在 v0.14.0 稳定化窗口内决策，避免成为永久积压。

---

*日报生成时间：2026-05-21 | 数据来源：NousResearch/hermes-agent GitHub*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-05-21

## 1. 今日速览

PicoClaw 今日呈现**高强度开发态势**，24小时内27个PR更新（16个待合并）、8个Issues活跃，显示社区与核心开发者同步推进。安全加固成为主旋律：CSRF防护、路径遍历修复、TLS验证配置等安全PR集中提交。稳定性方面，SiYue-ZO单日提交5个PR，系统性修复JSONL存储崩溃一致性、消息总线背压、Agent循环panic清理等深层架构问题。值得注意的是，项目刚发布v0.2.8-nightly构建，但自动化构建标注"可能不稳定"，建议生产环境谨慎升级。

---

## 2. 版本发布

### 🔖 Nightly Build: v0.2.8-nightly.20260520.639b3270

| 属性 | 详情 |
|:---|:---|
| 发布类型 | 自动化夜间构建 |
| 稳定性警告 | ⚠️ **可能不稳定，谨慎使用** |
| 变更范围 | `v0.2.8...main` 全量差异 |
| 完整日志 | [→ 对比页面](https://github.com/sipeed/picoclaw/compare/v0.2.8...main) |

**迁移注意事项**：夜间构建包含未经验证的main分支提交，建议仅在测试环境部署。生产环境请等待正式版本或验证具体提交哈希的稳定性。

---

## 3. 项目进展

### ✅ 今日合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#2891](https://github.com/sipeed/picoclaw/pull/2891) | SiYue-ZO | **恢复出厂设置功能** — 配置版本不兼容时的安全恢复路径，保留API密钥等凭证 | ⬆️ 运维可靠性：解决升级回滚痛点 |
| [#2765](https://github.com/sipeed/picoclaw/pull/2765) | bogdanovich | `update_plan` 工具从OpenClaw移植 | ⬆️ 生态兼容：统一多步进度更新范式 |
| [#2760](https://github.com/sipeed/picoclaw/pull/2760) | bogdanovich |  provider-backed 图像生成工具（默认禁用） | ⬆️ 多模态能力：MediaStore原生集成 |
| [#2757](https://github.com/sipeed/picoclaw/pull/2757) | bogdanovich | OpenAI OAuth支持Codex与语音转录 | ⬆️ 企业集成：OAuth令牌复用与刷新 |
| [#2725](https://github.com/sipeed/picoclaw/pull/2725) | dtapps | MCP初始化失败非致命化 | ⬆️ 韧性：避免MCP全挂导致僵尸状态 |
| [#2691](https://github.com/sipeed/picoclaw/pull/2691) | dtapps | `get_current_time` 工具 | ⬆️ 基础能力：时区感知时间获取 |
| [#2679](https://github.com/sipeed/picoclaw/pull/2679) | tbeaudouin05 | ChatGPT订阅(OAuth)支持修复 | ⬆️ 付费用户：Plus订阅者可用性 |

**整体评估**：今日合并的7个PR覆盖**运维恢复、多模态、企业认证、韧性设计、基础工具**五大维度，项目从"功能扩展期"进入"质量加固期"特征明显。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| 排名 | Issue | 评论数 | 核心诉求 | 链接 |
|:---|:---|:---:|:---|:---|
| 1 | **Web Chat 流式输出** | 9 | 前端实时交互体验刚需 | [#1950](https://github.com/sipeed/picoclaw/issues/1950) |
| 2 | **配置化流式HTTP请求** | 7 | 对齐OpenAI客户端标准行为 | [#2404](https://github.com/sipeed/picoclaw/issues/2404) |
| 3 | **PID复用导致崩溃循环** | 5 | 生产环境稳定性致命缺陷 | [#2720](https://github.com/sipeed/picoclaw/issues/2720) |

**诉求分析**：
- **#1950 vs #2404 形成上下游关系**：用户既需要配置层`stream=True`的支持（#2404），也需要Web Chat前端的流式渲染（#1950）。两者均被标记`stale`且优先级偏低，但社区持续 bump，显示"流式输出"已成为用户体验的**隐性阻塞项**。
- **#2720 高危但响应滞后**：PID身份验证漏洞可能导致生产环境无法自愈，已有PR [#2813](https://github.com/sipeed/picoclaw/pull/2813) 待审阅，但Issue与PR均处于悬停状态。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | 修复PR | 链接 |
|:---|:---|:---|:---|:---|
| 🔴 **P0-崩溃循环** | PID文件残留+OS复用PID导致网关无法启动 | 待修复 | [#2813](https://github.com/sipeed/picoclaw/pull/2813) 待合并 | [#2720](https://github.com/sipeed/picoclaw/issues/2720) |
| 🔴 **P0-认证失效** | 有效API key返回401（多provider） | ✅ **已关闭** | 已修复于某nightly | [#2769](https://github.com/sipeed/picoclaw/issues/2769) |
| 🟡 **P1-存储损坏** | JSONL写入后崩溃导致元数据漂移 | 待合并 | [#2907](https://github.com/sipeed/picoclaw/pull/2907) | — |
| 🟡 **P1-背压泄漏** | 消息总线满缓冲阻塞goroutine无限累积 | 待合并 | [#2906](https://github.com/sipeed/picoclaw/pull/2906) | — |
| 🟡 **P1-Agent泄漏** | ReloadProvider创建游离goroutine+panic资源未清理 | 待合并 | [#2904](https://github.com/sipeed/picoclaw/pull/2904) | — |
| 🟡 **P1-上下文穿透** | 过期context未终止fallback链，无效重试 | 待合并 | [#2905](https://github.com/sipeed/picoclaw/pull/2905) | — |
| 🟢 **P2-安全绕过** | `find /` 与 `ls /` 绕过workspace沙箱 | 待合并 | [#2693](https://github.com/sipeed/picoclaw/pull/2693) | [#2688](https://github.com/sipeed/picoclaw/issues/2688) |

**关键信号**：SiYue-ZO的5个PR形成**系统性稳定性治理包**（#2904-#2907），针对同一份`improvement-report.md`的已知缺陷集中修复，建议优先批量审阅合并。

---

## 6. 功能请求与路线图信号

| 功能请求 | 类型 | 路线图契合度 | 实现概率评估 | 链接 |
|:---|:---|:---:|:---|:---|
| **DeepSeek thinking_level 映射** | Provider适配 | ⬆️ 高 | 🔶 高（lc6464已提Issue，过往贡献者） | [#2903](https://github.com/sipeed/picoclaw/issues/2903) |
| **GPT4Free原生支持+自动回退** | Provider扩展 | ⬇️ 低（官方态度存疑） | 🔶 中（需求明确但涉及灰色地带） | [#2901](https://github.com/sipeed/picoclaw/issues/2901) |
| **message工具富媒体+通道感知投递** | 通道增强 | ⬆️ 高 | 🟢 **已有PR #2856** | [#2855](https://github.com/sipeed/picoclaw/issues/2855) |
| **WhatsApp预编译构建** | 构建/分发 | ⬆️ 中 | 🔶 中（技术可行，维护成本考量） | [#2625](https://github.com/sipeed/picoclaw/issues/2625) |

**纳入下一版本信号**：
- **#2855/#2856 富媒体message**：PR与Issue配套，bogdanovich持续推动，v0.2.9或v0.3.0极可能纳入
- **#2903 DeepSeek适配**：国产模型合规要求驱动，短期优先级可能跳升

---

## 7. 用户反馈摘要

> 从Issues评论提炼的真实声音

| 场景 | 痛点/诉求 | 来源 |
|:---|:---|:---|
| **Raspberry Pi Zero 2 部署** | "默认arm64构建不含WhatsApp支持，更新困难" — 边缘设备用户需要预编译便利 | [#2625](https://github.com/sipeed/picoclaw/issues/2625) |
| **多Provider密钥管理** | "Groq/OpenRouter/Nvidia均报401，但直接调用有效" — 密钥传递层存在隐蔽bug（已修复） | [#2769](https://github.com/sipeed/picoclaw/issues/2769) |
| **Agent媒体发送体验** | "必须把媒体和文本拆分成两次发送" — 破坏通道原生富消息能力 | [#2855](https://github.com/sipeed/picoclaw/issues/2855) |
| **低成本推理接入** | "个人homelab需要灵活低成本的推理后端" — GPT4Free诉求的经济性驱动 | [#2901](https://github.com/sipeed/picoclaw/issues/2901) |
| **Android移动端** | Termux运行指南缺失，ARM64 Android用户文档门槛 | [#2902](https://github.com/sipeed/picoclaw/pull/2902) |

**满意度信号**：用户主动提交文档PR（#2902）表明社区参与度健康；但多个`stale` Issue持续活跃说明**维护响应速度落后于社区期望**。

---

## 8. 待处理积压

### ⚠️ 需维护者优先关注的长期悬停项

| 类型 | 编号 | 问题 | 悬停天数 | 风险 | 链接 |
|:---|:---|:---|:---:|:---|:---|
| **PR** | #2813 | PID身份验证修复（关联P0崩溃循环） | ~13天 | 🔴 生产稳定性 | [→](https://github.com/sipeed/picoclaw/pull/2813) |
| **Issue** | #1950 | Web Chat流式输出（9评论，用户持续bump） | ~58天 | 🟡 用户体验竞品差距 | [→](https://github.com/sipeed/picoclaw/issues/1950) |
| **Issue** | #2404 | 配置化流式HTTP（7评论，与#1950互补） | ~44天 | 🟡 标准兼容性 | [→](https://github.com/sipeed/picoclaw/issues/2404) |
| **PR** | #2858 | heredoc Markdown引号支持（安全与灵活性平衡） | ~8天 | 🟢 边缘场景 | [→](https://github.com/sipeed/picoclaw/pull/2858) |
| **PR** | #2768 | LLM瞬态HTTP错误重试 | ~16天 | 🟡 可靠性 | [→](https://github.com/sipeed/picoclaw/pull/2768) |

**行动建议**：
1. **立即**：审阅合并 #2813（P0稳定性）与 #2904-#2907（SiYue-ZO稳定性治理包）
2. **本周**：对 #1950/#2404 流式输出需求做出路线图承诺或技术方案回应
3. **本月**：评估 #2856 富媒体message的合并窗口，匹配 #2855 的用户期待

---

*日报生成时间：2026-05-21 | 数据来源：GitHub API 聚合 | 项目地址：[sipeed/picoclaw](https://github.com/sipeed/picoclaw)*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-05-21

> **项目**: [NanoClaw](https://github.com/qwibitai/nanoclaw) (nanocoai/nanoclaw)  
> **日期**: 2026-05-21  
> **分析师**: AI 智能体与个人 AI 助手领域开源项目分析师

---

## 1. 今日速览

今日 NanoClaw 社区保持**高活跃度**，24 小时内 23 个 PR 更新（17 待合并、6 已合并/关闭），4 个 Issue 更新（3 活跃、1 关闭）。核心进展集中在 **WhatsApp 渠道修复**、**ACP 协议生态扩展** 与 **安全加固** 三条主线。值得关注的是，WhatsApp 群组 @-mention 识别的高优先级 Bug（#2560）在 24 小时内完成从报告到修复合并的完整闭环，反映出关键路径问题的响应效率。同时，ACP（Agent Client Protocol）双向支持（客户端 #2542 + 服务端 #2575）同日推进，标志着 IDE 集成成为明确的战略方向。安全类 PR 持续积压，4 个安全修复仍待审阅，需关注维护带宽分配。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 作者 | 说明 | 链接 |
|:---|:---|:---|:---|
| **#2565** | glifocat | **修复 WhatsApp 群组 @-mention 检测**：通过 `contextInfo.mentionedJid` 正确识别机器人被提及状态，直接解决高优先级 Bug #2560 | [PR #2565](https://github.com/nanocoai/nanoclaw/pull/2565) |
| **#2143** | bitloi | **新增管理员取消活跃 Agent 运行的命令**：提升运维可控性，允许强制终止失控或长时间运行的 Agent 任务 | [PR #2143](https://github.com/nanocoai/nanoclaw/pull/2143) |
| **#2057** | dooha333 | **systemd 安装 LXC 兼容 + 主机重启集中化**：解决容器化部署场景下的服务管理痛点，依赖链 #2052/#2054/#2056 全部完成合并 | [PR #2057](https://github.com/nanocoai/nanoclaw/pull/2057) |
| **#2054** | dooha333 | **修复 spinner 驱动安装中的隐形 sudo 挂起**：消除安装体验中的静默阻塞问题 | [PR #2054](https://github.com/nanocoai/nanoclaw/pull/2054) |
| **#2052** | dooha333 | **本地 OneCLI 管理员自动引导**：首次安装后自动完成 CLI 认证，消除手动配置步骤 | [PR #2052](https://github.com/nanocoai/nanoclaw/pull/2052) |
| **#2056** | dooha333 | **LXC 检测与 polkit linger 噪音抑制**：完善容器环境检测逻辑 | [PR #2056](https://github.com/nanocoai/nanoclaw/pull/2056) |

**整体推进评估**：今日合并的 6 个 PR 覆盖 **渠道可靠性**（WhatsApp）、**运维可管理性**（systemd/LXC/取消命令）、**安装体验**（引导流程），属于"基础设施硬化"批次，为更大规模部署扫除环境适配障碍。

---

## 4. 社区热点

### 最具讨论价值的活跃议题

| 议题 | 热度指标 | 核心诉求分析 | 链接 |
|:---|:---|:---|:---|
| **#2574** `skill/apple-container` 分支陈旧 | 创建即引发关注，分支滞后 `main` 导致容器基础设施回滚风险 | **技能分支治理机制缺失**：社区贡献的技能分支缺乏自动同步或过期提醒机制，用户尝试合并时遭遇破坏性变更，反映"技能生态"与"核心迭代"的协调难题 | [Issue #2574](https://github.com/nanocoai/nanoclaw/issues/2574) |
| **#2575** `claw-acp` ACP 服务端桥接 | 同日双 PR（#2542 客户端 + #2575 服务端）形成完整协议栈 | **IDE 原生集成成为明确需求**：开发者希望将 NanoClaw 作为 IDE（WebStorm 等）的后端 Agent，而非仅作为独立聊天机器人；ACP 协议是实现该愿景的标准化路径 | [PR #2575](https://github.com/nanocoai/nanoclaw/pull/2575) |
| **#2573** 上下文窗口用量暴露给 Agent | 创新性地解决 Agent 自我预算管理盲区 | **Agent 自我感知能力缺口**：当前 Agent 无法感知自身 token 消耗，导致长任务中途因上下文溢出失败；该 PR 让 Agent 能像 Claude Code 客户端一样"看见"用量，实现自适应任务拆分 | [PR #2573](https://github.com/nanocoai/nanoclaw/pull/2573) |

**诉求洞察**：社区正从"让 NanoClaw 能运行"转向"让 NanoClaw 能深度嵌入工作流"——IDE 集成、Agent 自省、技能生命周期管理成为新焦点。

---

## 5. Bug 与稳定性

| 优先级 | 问题 | 状态 | 影响范围 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|:---|
| **🔴 High** | WhatsApp 群组 @-mention 永不为真，阻断渠道审批 onboarding 流程 | **✅ 已修复合并**（#2565） | 所有使用 WhatsApp 群组 + 审批流程的部署 | #2565 | [Issue #2560](https://github.com/nanocoai/nanoclaw/issues/2560) |
| **🟡 Medium** | WhatsApp 共享号码模式：@-提及操作员误触发 Agent | **⏳ 待修复**（新报告） | 共享号码部署的群组场景 | 无 | [Issue #2570](https://github.com/nanocoai/nanoclaw/issues/2570) |
| **🟡 Medium** | `add_reaction` schema 与 handler 不一致：要求 shortcode 却透传原始字符，破坏 WhatsApp + Discord | **⏳ 待修复**（新报告） | 所有使用反应功能的跨渠道部署 | 无 | [Issue #2569](https://github.com/nanocoai/nanoclaw/issues/2569) |
| **🟡 Medium** | `writeOutboundDirect` 以只读模式打开出站 DB，INSERT 静默失败 | **⏳ PR 待合并**（#2496，5 天前） | 命令门控拒绝响应无法送达用户 | #2496 | [PR #2496](https://github.com/nanocoai/nanoclaw/pull/2496) |
| **🟡 Medium** | rootless Podman 双 Bug 叠加导致 Agent 容器无法运行 | **⏳ PR 待合并**（#2572，新提交） | Podman 无根部署 | #2572 | [PR #2572](https://github.com/nanocoai/nanoclaw/pull/2572) |
| **🟢 Low** | `CLAUDE.local.md` 未被导入，每组记忆无法到达 Agent | **⏳ PR 待合并**（#2567，新提交） | 使用本地记忆覆盖的部署 | #2567 | [PR #2567](https://github.com/nanocoai/nanoclaw/pull/2567) |

**稳定性评估**：高优先级 Bug 响应迅速（24h 闭环），但新暴露的 WhatsApp 共享号码模式问题（#2570）与反应功能跨渠道不一致（#2569）显示 **WhatsApp 渠道仍为缺陷高发区**，且存在"修复一处、暴露一处"的深层架构张力。

---

## 6. 功能请求与路线图信号

| 功能方向 | 信号来源 | 成熟度评估 | 纳入下一版本概率 |
|:---|:---|:---|:---|
| **ACP 协议完整支持（客户端+服务端）** | #2542 + #2575 同日双 PR | 🔥 高：实现完整，含 WebStorm 演示 | **极高** — 可能作为 vNext 核心卖点 |
| **RTK 集成技能（60-90% token 节省）** | #2571 新提交 | 🌡️ 中高：有具体实现，依赖主机二进制挂载 | **高** — 成本优化是强卖点 |
| **可插拔中央数据库（SQLite + SeekDB）** | #1723（4 月 10 日，持续更新） | 🌡️ 中：核心重构，影响面大 | **中** — 需评估 v2 架构兼容性 |
| **Agent 上下文窗口自我感知** | #2573 新提交 | 🌡️ 中高：创新性强，解决实际痛点 | **高** — 相对独立，合并阻力小 |
| **渠道审批权限范围限定** | #2566 新提交（安全类） | 🌡️ 中：安全加固，依赖审计流程 | **中** — 安全 PR 审阅周期较长 |

**路线图推断**：IDE 集成（ACP）+ 成本优化（RTK）+ Agent 智能（上下文感知）构成"开发者生产力"叙事三角，可能成为 2026 Q2-Q3 版本的主题。

---

## 7. 用户反馈摘要

### 真实痛点

| 来源 | 痛点 | 场景 |
|:---|:---|:---|
| #2560 / #2570 | WhatsApp 渠道"看似可用，细节全错" | 企业客服部署中，群组审批流程和共享号码模式是常见配置，但 @-mention 逻辑反复出问题 |
| #2574 | 技能分支"用则过时" | 用户跟随文档尝试 `/convert-to-apple-container`，结果回滚核心基础设施，信任受损 |
| #2496 | 静默失败难以调试 | `SQLITE_READONLY` 无日志，命令门控拒绝后用户收不到任何反馈，误以为功能未触发 |
| #2572 | 容器运行时"Docker 优先，Podman 二等" | 安全敏感环境偏好 rootless Podman，但兼容性测试覆盖不足 |

### 满意点

- **响应速度**：高优先级 Bug（#2560）24 小时内从报告到修复合并，社区信心提振
- **架构前瞻性**：ACP 协议支持显示项目主动拥抱行业标准，而非闭门造车

---

## 8. 待处理积压

> 以下 Issue/PR 已长期未获最终响应，可能阻塞用户或消耗社区注意力：

| 条目 | 天数 | 风险说明 | 链接 |
|:---|:---|:---|:---|
| **#1723** 可插拔中央数据库 | **41 天** | 核心架构重构，持续更新但未合并；v2 数据库抽象是多项功能的依赖基础，拖延影响生态扩展 | [PR #1723](https://github.com/nanocoai/nanoclaw/pull/1723) |
| **#1999** 拒绝符号链接主机管理目录 | **26 天** | 安全加固 PR，容器逃逸防护；安全类 PR 审阅资源不足可能导致风险暴露窗口延长 | [PR #1999](https://github.com/nanocoai/nanoclaw/pull/1999) |
| **#2004** 仅信任规范渠道远程源 | **26 天** | 与 #1999 同批次安全修复，渠道安装器的信任根验证 | [PR #2004](https://github.com/nanocoai/nanoclaw/pull/2004) |
| **#2383** Agent 间创建授权 | **11 天** | Agent 自治能力的安全边界；随着 Agent 间协作功能推进，此授权机制成为必要前提 | [PR #2383](https://github.com/nanocoai/nanoclaw/pull/2383) |
| **#2496** 出站 DB 只写权限修复 | **6 天** | 虽非最久，但直接影响命令门控可靠性，且修复简单（单行变更），建议优先合并非阻塞 | [PR #2496](https://github.com/nanocoai/nanoclaw/pull/2496) |

**维护者提醒**：安全类 PR（#1999/#2004/#2383/#2566）已形成"安全债"集群，建议安排专项审阅窗口，避免成为发布阻塞或漏洞披露触发点。

---

> 📊 **健康度评分**: 7.5/10  
> ✅ 优势：关键 Bug 响应快、IDE 集成方向明确、社区贡献活跃  
> ⚠️ 风险：安全 PR 积压、WhatsApp 渠道技术债累积、技能分支治理机制缺失

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-05-21

> **项目**: [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)  
> **日期**: 2026-05-21（数据周期：过去24小时）

---

## 1. 今日速览

NullClaw 今日活跃度处于**低活跃状态**。过去24小时内无 Issues 更新，无新版本发布，仅有 **2 条 PR 处于待合并状态**（均无新活动产生）。两条 PR 的最后更新时间均为 2026-05-20，表明今日项目仓库无实质新进展。整体而言，这是一个维护性静默期，社区讨论与代码迭代均暂时停滞，项目健康度需关注 PR 积压情况。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

**今日无合并或关闭的 PR。**

两条处于 `OPEN` 状态的 PR 持续积压，分别代表两个不同方向的工程进展：

| PR | 方向 | 当前状态 | 项目推进意义 |
|:---|:---|:---|:---|
| [#892](https://github.com/nullclaw/nullclaw/pull/892) | 兼容性/测试补强 | 待合并（创建后16天） | 为 Windows 平台 `getAddressList` 修复补充回归测试，防止 #890 的 `HostResolutionFailed` 问题复发 |
| [#783](https://github.com/nullclaw/nullclaw/pull/783) | 功能扩展 | 待合并（创建后44天） | 引入 Cron 子代理引擎、JSON CLI 输出、安全加固，是显著的调度能力基础设施升级 |

**评估**：今日项目代码层面**零推进**。PR #783 已积压逾一个半月，PR #892 亦逾两周，合并瓶颈可能阻碍 Windows 稳定性验证与 Cron 功能落地。

---

## 4. 社区热点

**今日无活跃讨论。**

两条待合并 PR 均无评论（`评论: undefined`）且零点赞，社区参与度极低：

- **[#892](https://github.com/nullclaw/nullclaw/pull/892)** `test(compat/net): add Windows getAddressList regression tests` — 技术债务偿还型 PR，缺乏社区反馈可能反映 Windows 开发者占比小或测试基础设施关注度不足
- **[#783](https://github.com/nullclaw/nullclaw/pull/783)** `feat(cron): cron subagent, run history, JSON output, security hardening` — 功能重大但社区反应冷淡，可能原因：功能尚未可用导致用户无法体验、文档/预览不足、或目标用户群体对 Cron 调度需求不迫切

**诉求分析**：社区对这两个方向缺乏显性反馈，维护者需主动推进代码审查而非依赖社区驱动。

---

## 5. Bug 与稳定性

**今日无新报告 Bug。**

| 相关项 | 严重程度 | 状态 | 说明 |
|:---|:---|:---|:---|
| [#890](https://github.com/nullclaw/nullclaw/issues/890)（已修复，待测试补强） | **高**（曾导致聊天补全全失败） | 核心修复已入 `main`，[PR #892](https://github.com/nullclaw/nullclaw/pull/892) 提供回归测试 | Windows 平台 `getAddressList` 为 localhost-only stub，预解析主机名时触发 `HostResolutionFailed` |

> 注：#890 的修复（commits `973bfa4`, `dfc9f3b`, `d3c7ef7`）已合并至 `main`，但缺乏回归测试覆盖。PR #892 是防止复发的关键屏障，长期未合并存在回归风险。

---

## 6. 功能请求与路线图信号

**今日无新功能请求。**

从现有 PR 推断潜在路线图信号：

| 功能 | 来源 PR | 纳入下一版本可能性 | 判断依据 |
|:---|:---|:---|:---|
| **Cron 子代理调度引擎** | [#783](https://github.com/nullclaw/nullclaw/pull/783) | **高**（若合并） | 基础设施级功能，含 DB 架构、Worker 队列、原子操作设计，投入工程量大，表明是规划内核心能力 |
| **JSON CLI 输出** | [#783](https://github.com/nullclaw/nullclaw/pull/783) | 高 | 配套 Cron 功能的可观测性增强，脚本化/自动化集成必备 |
| **安全加固** | [#783](https://github.com/nullclaw/nullclaw/pull/783) | 高 | 未披露细节，但列为 PR 核心卖点，可能涉及 Cron 执行沙箱或权限隔离 |
| **Windows 网络兼容性回归测试** | [#892](https://github.com/nullclaw/nullclaw/pull/892) | 中 | 测试债务，非用户可见功能，但维护者可能优先合并以保障 CI 覆盖率 |

**阻塞信号**：PR #783 的 44 天积压可能表明：设计审查未完成、存在未公开的架构分歧、或维护者带宽不足。

---

## 7. 用户反馈摘要

**今日无可提炼的用户反馈。**

历史间接信号（基于 PR 描述推断）：

| 痛点/场景 | 来源 | 性质 |
|:---|:---|:---|
| Windows 开发者无法使用任何需要主机名预解析的聊天补全功能 | #890 修复记录 | **已解决** — 曾是完全阻断性缺陷 |
| 需要定时任务调度能力（skill/agent/shell 三种作业类型） | PR #783 | **待满足** — 企业级部署、自动化运维场景 |
| 需要结构化输出以便与外部系统集成 | PR #783 `--json` 标志 | **待满足** — DevOps/CI 集成需求 |
| 跨时区作业调度（per-job TZ offsets） | PR #783 | **待满足** — 全球化部署场景 |

> 缺乏真实用户评论反馈，项目需建立更主动的 beta 测试或 RFC 机制以收集使用体验。

---

## 8. 待处理积压

| 项目 | 积压时长 | 优先级评估 | 提醒 |
|:---|:---|:---|:---|
| [PR #783](https://github.com/nullclaw/nullclaw/pull/783) | **44 天** | 🔴 **高** | 重大功能 PR，长期未审。建议维护者：① 公开阻塞原因（如需设计修订）；② 拆分可独立合并的子模块（JSON 输出、安全加固可先行）；③ 设定审查截止日期 |
| [PR #892](https://github.com/nullclaw/nullclaw/pull/892) | **16 天** | 🟡 中 | 测试补强型 PR，技术债务低阻力合并项。建议优先处理以完善 Windows CI 覆盖，防止 #890 复发 |

**健康度警示**：连续两日（5-20 至 5-21）无仓库活动，结合 44 天 PR 积压，项目维护节奏出现明显放缓信号。建议关注核心维护者可用性，或考虑扩大审查者权限。

---

*日报基于公开 GitHub 数据生成，未包含私有讨论或线下沟通信息。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-05-21

> **项目定位**：NEAR AI 开源的 AI 智能体与个人 AI 助手运行时框架，当前处于 **Reborn 架构大规模迁移期**

---

## 1. 今日速览

IronClaw 今日保持**极高开发强度**，24小时内 45 个 PR 流动（27 待合并/18 已关闭），Issues 活跃度同步攀升至 18 条。核心信号是 **Reborn 架构进入"缝合期"**——大量基础设施 PR 从"定义契约"转向"生产落地"：本地开发 shell 权限模型定型、WebUI v2 网关组合上线、benchmark 自动化工具链打通。社区侧出现 v0.28.2 回归缺陷的快速修复闭环，但 Nightly E2E 持续失败（#3447）仍是质量红灯。

---

## 2. 版本发布

**无新版本发布**

> 最新版本仍为 **v0.28.2**（见 PR #3708 发布记录），该版本存在已修复的 UI 回归问题（见 Bug 与稳定性章节）。

---

## 3. 项目进展

### 🔧 已合并/关闭的关键 PR（按架构影响排序）

| PR | 作者 | 核心贡献 | 链接 |
|:---|:---|:---|:---|
| **#3808** `ci: add /benchmark slash-command dispatcher` | pranavraja99 | **开发者体验基础设施**：PR 评论触发 benchmark 的自动化工具链上线，已验证可运行（#3834 canary 测试） | [PR #3808](https://github.com/nearai/ironclaw/pull/3808) |
| **#3835** `fix(ci): grant pull-requests:write for /benchmark reactions endpoint` | pranavraja99 | 快速修复 benchmark 机器人的权限 403 错误，**当日发现当日闭环** | [PR #3835](https://github.com/nearai/ironclaw/pull/3835) |
| **#3816** `[codex] Port shell to Reborn built-ins` | serrrfirat | **Reborn 核心能力**：v1 shell 执行逻辑完整移植为 Reborn 一等公民内置能力，含调用者级权限校验 | [PR #3816](https://github.com/nearai/ironclaw/pull/3816) |
| **#3820** `Enforce runtime policy before host capability dispatch` | serrrfirat | **安全加固**：运行时策略检查前置到能力分派之前，`NetworkMode::Deny` 现在可在调用层彻底隐藏工具 | [PR #3820](https://github.com/nearai/ironclaw/pull/3820) |
| **#3818** `[codex] Enforce staged credentials for production egress` | serrrfirat | **安全架构**：生产环境 HTTP 出口强制使用分阶段凭证，直接 `SecretStoreLease` 被禁止，MCP 凭证仅限 `tools/call` 交换 | [PR #3818](https://github.com/nearai/ironclaw/pull/3818) |
| **#3825** `Require resolved runtime policy for Reborn live runtime` | serrrfirat | **故障安全**：Reborn 本地开发组合在无解析运行时策略时**失败关闭**（fail-closed），消除默认放行风险 | [PR #3825](https://github.com/nearai/ironclaw/pull/3825) |
| **#3782** `feat(reborn): add CLI serve handoff` | serrrfirat | **WebUI 入口**：`ironclaw-reborn serve` CLI 首片落地，为 WebUI v2 提供监听基础 | [PR #3782](https://github.com/nearai/ironclaw/pull/3782) |
| **#3734** 关联修复（见 Bug 章节） | — | v0.28.2 回归缺陷修复 | [Issue #3734](https://github.com/nearai/ironclaw/issues/3734) |

### 📊 进展评估

| 维度 | 状态 |
|:---|:---|
| **Reborn 核心运行时** | 🟢 进程端口缝合（#3826）、调用服务解析（#3830）、策略强制（#3820/#3825）形成完整闭环 |
| **开发者工具链** | 🟢 benchmark 自动化、本地开发 shell 权限模型定型 |
| **WebUI v2 迁移** | 🟡 网关组合（#3815）+ serve 委托（#3828）推进中，回复路径仍待实现 |
| **安全出口架构** | 🟢 分阶段凭证框架（#3831/#3818）从实验进入生产强制 |

---

## 4. 社区热点

### 讨论最活跃的议题

| 排名 | Issue/PR | 评论数 | 热度分析 |
|:---|:---|:---:|:---|
| 1 | **#3803** [Reborn] Lane 3: wire secrets/egress substrate through production tool composition | **2 评论** | [Issue #3803](https://github.com/nearai/ironclaw/issues/3803) — **架构缝合的关键路径**：secret-store、authorized-dispatch、production-builder 三大 PR 合并后的"最后一公里"，涉及工具组合中秘密注入的完整验证。评论聚焦依赖 PR 的合并时序协调。 |
| 2 | **#3094** [Reborn] Add approval/auth interaction services | **1 评论** | [Issue #3094](https://github.com/nearai/ironclaw/issues/3094) — **UX 安全桥梁**：被标记 `suggested_P0`，将阻塞的运行状态转化为适配器/UI 安全交互流。长期未关闭说明这是 Reborn 用户可见行为的**阻塞性基础能力**。 |
| 3 | **#3800** [Reborn] Lane 1: finish REPL golden path | **1 评论** | [Issue #3800](https://github.com/nearai/ironclaw/issues/3800) — **今日已关闭** ✅，REPL 证明成为 Reborn AgentLoop 工具路径的薄壳，里程碑达成。 |
| 4 | **#1519** Routine notifications lack context | **1 评论** | [Issue #1519](https://github.com/nearai/ironclaw/issues/1519) — **用户体验债务**：例行通知隔离在独立对话中，用户聊天线程丢失上下文。2个月未解决，反映多通道架构的历史设计债。 |

### 诉求提炼

> **核心矛盾**：Reborn 架构的"正确性优先"（契约先定义、策略失败关闭、分阶段凭证）与**用户可见功能的交付节奏**之间的张力。大量 Lane 3/5/7/9 议题处于"等前置 PR 合并"状态，社区需要更透明的**依赖看板**。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 | 链接 |
|:---|:---|:---|:---|:---|
| 🔴 **P0-持续** | **#3447** Nightly E2E failed | 定时 E2E 持续失败，最近一次报告 2026-05-20 04:40 UTC，`Full E2E / E2E (features)` 任务失败 | ❌ **无修复 PR**，10天未关闭 | [Issue #3447](https://github.com/nearai/ironclaw/issues/3447) |
| 🟡 **P1-已修复** | **#3734** v0.28.2 regression: provider config missing API Key and Fetch available models controls | Non-TEE v0.28.2 代理设置界面丢失 API Key 输入和模型获取按钮，v0.28.1 正常 | ✅ **已关闭**（2026-05-20） | [Issue #3734](https://github.com/nearai/ironclaw/issues/3734) |
| 🟡 **P1-待评估** | **#3821** Thread::restore_from_messages drops orphan assistant rows | `restore_from_messages` 按用户消息分 Turn，孤立 assistant 行被丢弃，**阻止带外上下文注入** | 🆕 **新报告**，无 PR | [Issue #3821](https://github.com/nearai/ironclaw/issues/3821) |

### 稳定性评估

> **质量红灯**：Nightly E2E 连续失败超过 10 天，且无任何评论或修复尝试，表明要么测试基础设施被判定为"不可信"而遭忽视，要么团队资源全部投入 Reborn 迁移导致质量门禁失效。#3821 的上下文注入缺陷若确认，将影响 Reborn AgentLoop 的历史消息恢复可靠性。

---

## 6. 功能请求与路线图信号

### 新功能需求（今日新建）

| Issue | 领域 | 纳入下一版本概率 | 判断依据 |
|:---|:---|:---:|:---|
| **#3829** [Reborn] Lane 9: Google Calendar + Gmail extension-v2 | 扩展能力 | **高** | 依赖 extension-v2 基线 + secrets/auth 组合，已有 Lane 体系规划，Google 生态为优先场景 |
| **#3805** [Reborn] Lane 5: Notion MCP capability path | 扩展能力 | **高** | 首个具体 MCP 工具包，"能力目录可发现"的示范实现，产品化关键 |
| **#3798** Design: subagent spawn for Reborn agent loop | 核心架构 | **中高** | 设计提案阶段，分支已创建，涉及 5 个 crate 的跨模块设计，需架构评审 |
| **#3811** Step 2: Wire product auth service seam into V1-compatible flows | 认证迁移 | **高** | #3289 三步走的第二步，依赖 Step 1（#3810），有明确父议题和依赖链 |
| **#3812** Step 3: Migrate OAuth callbacks to typed auth flows | 认证迁移 | **中** | 依赖前两步完成，减少路由层权限权威的长期目标 |

### 路线图信号

> **Reborn "Lane" 体系成熟化**：Lane 1（REPL）已关闭，Lane 3（secrets）、Lane 5（Notion MCP）、Lane 7（WebUI beta）、Lane 9（Google/技能上下文）并行推进，形成**可预测的功能交付节奏**。建议关注 Lane 编号是否有跳跃（当前无 Lane 2/4/6/8 公开），可能代表内部重构或尚未公开的模块。

---

## 7. 用户反馈摘要

### 从 Issues 提炼的真实痛点

| 痛点 | 来源 | 场景 | 情绪 |
|:---|:---|:---|:---|
| **"通知进了黑洞"** | #1519 | Telegram 例行通知孤立在专用对话，用户主聊天线程无上下文 | 😤 沮丧 — 2个月未解决 |
| **"设置界面突然坏了"** | #3734 | 升级 v0.28.2 后 provider 配置 UI 元素消失，降级 v0.28.1 恢复 | 😠 焦虑 — 回归缺陷破坏信任 |
| **"E2E 天天红"** | #3447 | 作为外部贡献者，无法判断主分支是否可用 | 😐 困惑 — 无维护者回应 |

### 满意信号

> **本地开发体验改善**：shell 权限的精细化（#3833 区分 workspace tools 与 shell 的网络权限）和 benchmark 一键触发（#3808）获得核心贡献者快速迭代，表明**内部开发者体验**是当前优先事项。

---

## 8. 待处理积压

### ⚠️ 需要维护者关注的长期议题

| Issue | 年龄 | 风险 | 建议行动 |
|:---|:---:|:---|:---|
| **#3447 Nightly E2E failed** | **11 天** | 🔴 质量门禁失效，外部贡献者信心下降 | 指派专人诊断或公开说明忽略原因 |
| **#1519 Routine notifications lack context** | **61 天** | 🟡 用户体验债务，多通道架构设计问题 | 评估是否纳入 Reborn 通道迁移（#3580）统一解决 |
| **#3094 Add approval/auth interaction services** | **22 天** | 🟡 `suggested_P0` 标签但进展缓慢，阻塞 Reborn 用户可见交互 | 确认优先级是否仍为 P0，或已被其他议题覆盖 |
| **#3281 EventStreamManager for durable projection fanout** | **15 天** | 🟡 事件流基础设施，Web SSE/WebSocket/API 订阅依赖 | 检查是否与 #3828 WebUI ingress 存在资源竞争 |

---

## 附录：关键链接速查

| 类型 | 链接 |
|:---|:---|
| 项目主页 | https://github.com/nearai/ironclaw |
| 今日活跃 Issues 列表 | https://github.com/nearai/ironclaw/issues?q=is%3Aissue+updated%3A2026-05-20 |
| 今日活跃 PR 列表 | https://github.com/nearai/ironclaw/pulls?q=is%3Apr+updated%3A2026-05-20 |
| Reborn 迁移指南 | https://github.com/nearai/ironclaw/blob/reborn-integration/docs/reborn/how-to-port-channel-to-reborn.md |

---

*日报生成时间：2026-05-21 | 数据来源：GitHub API 事件流 | 分析框架：IronClaw Reborn 迁移阶段评估模型*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-05-21

> **项目**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
> **报告日期**: 2026-05-21（数据覆盖过去24小时）

---

## 1. 今日速览

LobsterAI 今日保持**高活跃度开发节奏**，24小时内产生 **24 个 PR 更新**（7 个已合并/关闭，17 个待审阅）和 **4 条 Issue 动态**（3 个活跃，1 个关闭）。核心引擎团队聚焦**模型能力增强**（自定义参数透传、contextWindow 支持）、**多显示器 DPI 适配**及**网关稳定性优化**，7 个 PR 当日闭环显示迭代效率较高。社区侧出现**产品间端口冲突**的集成痛点（有道龙虾 vs 智企帝王蟹）及**本地开发环境构建**的入门门槛反馈，需关注开发者体验。

---

## 2. 版本发布

**无新版本发布**。

> 最新 Release 待后续追踪，当前主干处于快速迭代期，建议关注 nightly 构建稳定性。

---

## 3. 项目进展

### 已合并/关闭 PR（7 项）

| PR | 作者 | 核心贡献 | 影响面 |
|:---|:---|:---|:---|
| [#2023](https://github.com/netease-youdao/LobsterAI/pull/2023) | fisherdaddy | 提升浏览器抓取与 webfetch 稳定性及成功率 | renderer / docs / main / openclaw |
| [#2022](https://github.com/netease-youdao/LobsterAI/pull/2022) | liugang519 | HTML 预览体验优化：懒加载源码、主题适配、文件存在性校验 | renderer / main / cowork / artifacts |
| [#2021](https://github.com/netease-youdao/LobsterAI/pull/2021) | btc69m979y-dotcom | 套餐模型支持 `contextWindow` 配置，后端透传至引擎控制上下文截断 | main / openclaw |
| [#2020](https://github.com/netease-youdao/LobsterAI/pull/2020) | btc69m979y-dotcom | **修复 Windows 跨 DPI 多显示器窗口异常缩小问题**（800×600→400×300） | main |
| [#2019](https://github.com/netease-youdao/LobsterAI/pull/2019) | btc69m979y-dotcom | **模型自定义参数透传**（thinking/temperature 等）+ **Thinking Block 流式展示** | renderer / docs / main / openclaw / cowork |
| [#2018](https://github.com/netease-youdao/LobsterAI/pull/2018) | fisherdaddy | 避免 token 刷新时 OpenClaw 网关不必要的重启 | main / openclaw |
| [#2015](https://github.com/netease-youdao/LobsterAI/pull/2015) | fisherdaddy | 处理 OpenClaw 压缩重试及工具结果间隙问题 | renderer / docs / main / openclaw / cowork |

**关键里程碑**：
- **推理能力可视化**：#2019 实现 Thinking Block 独立生命周期与流式渲染，对标 Claude 3.7 Sonnet 等模型的"思考过程"展示，是 AI 助手交互体验的重要升级。
- **企业级稳定性**：#2020 修复 Windows 多显示器 DPI 适配这一长期痛点；#2018 减少网关无意义重启，降低服务抖动。

---

## 4. 社区热点

### 🔥 最高讨论热度：端口冲突与产品集成（Issue #1698）

**[#1698 有道龙虾启动状态下，安装智企帝王蟹必现 gateway 端口冲突和进程竞争](https://github.com/netease-youdao/LobsterAI/issues/1698)**
- **状态**: OPEN | 作者: yy987y | 创建: 2026-04-15 | 更新: 2026-05-20 | 评论: 2
- **核心矛盾**: 网易内部两款 AI 产品（有道龙虾 / 智企帝王蟹）共享 `openclaw` 网关进程与端口，存在**进程竞争与鉴权失败**，关闭一方才能恢复。
- **诉求分析**: 
  - **企业用户场景**：同一台开发/办公机器需同时运行多个网易 AI 产品
  - **根因推测**：`launchctl` 级别的守护进程冲突，端口绑定未做隔离或动态分配
  - **紧迫性**：标注"必现"，影响内部产品矩阵的协同部署

> ⚠️ **信号**：此 Issue 反映网易 AI 基础设施的**产品间协调问题**，非单纯技术 bug，需架构层面决策（是否统一网关、端口动态分配、或产品级互斥声明）。

---

## 5. Bug 与稳定性

| 优先级 | Issue/PR | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **P0-高** | [#1698](https://github.com/netease-youdao/LobsterAI/issues/1698) | 产品级端口冲突与进程竞争（有道龙虾 ↔ 智企帝王蟹）| OPEN | ❌ 无 |
| 🟡 **P1-中** | [#2017](https://github.com/netease-youdao/LobsterAI/issues/2017) | 本地运行无法登录/输入，提示缺失内置 OpenClaw runtime（cfmind）| OPEN | ❌ 无（文档/构建脚本问题）|
| 🟢 **P2-低** | [#1568](https://github.com/netease-youdao/LobsterAI/issues/1568) | 钉钉流式消息配置疑问（已关闭）| CLOSED | ✅ 社区解答 |

### 详细分析

**[#2017 本地运行登录不了...未检测到内置 OpenClaw runtime](https://github.com/netease-youdao/LobsterAI/issues/2017)**
- **影响**: 阻断新开发者本地贡献
- **根因**: `npm run dist` 前未执行构建脚本，缺少 `cfmind` runtime 打包
- **建议**: 需完善 CONTRIBUTING.md 或增加 `postinstall` 钩子检测

**已修复（今日合并）**:
- [#2020](https://github.com/netease-youdao/LobsterAI/pull/2020) Windows 跨 DPI 窗口缩小
- [#2018](https://github.com/netease-youdao/LobsterAI/pull/2018) 网关 token 刷新重启
- [#2015](https://github.com/netease-youdao/LobsterAI/pull/2015) 压缩重试与工具结果间隙

---

## 6. 功能请求与路线图信号

| 请求 | Issue/PR | 可行性评估 | 纳入概率 |
|:---|:---|:---|:---|
| **OpenHuman 引擎支持** | [#2016](https://github.com/netease-youdao/LobsterAI/issues/2016) | 高（网易已有 OpenHuman 产品线）| ⭐⭐⭐⭐⭐ |
| 流式活动栏耗时计时器 | [#1548](https://github.com/netease-youdao/LobsterAI/pull/1548) | 中（PR 已提交，stale 2个月）| ⭐⭐⭐☆☆ |
| IM 斜杠命令支持 | [#1573](https://github.com/netease-youdao/LobsterAI/pull/1573) | 高（多平台统一交互范式）| ⭐⭐⭐⭐☆ |
| 技能"最近使用"Tab + 使用统计 | [#1583](https://github.com/netease-youdao/LobsterAI/pull/1583) | 中（auto-routing 场景刚需）| ⭐⭐⭐⭐☆ |
| 输入框图片缩略图预览 | [#1580](https://github.com/netease-youdao/LobsterAI/pull/1580) | 高（体验优化，PR 已就绪）| ⭐⭐⭐⭐☆ |
| 权限审批弹窗 Bash 语法高亮 | [#1578](https://github.com/netease-youdao/LobsterAI/pull/1578) | 高（安全相关，PR 已就绪）| ⭐⭐⭐⭐☆ |

**路线图信号**：
- **模型层**: `contextWindow` + `customParams` + `thinking` 三连发（#2021/#2019），显示向**深度推理模型**（Claude 3.7 / o3 类）的全面适配
- **人机交互**: 计时器、缩略图、语法高亮等**细节体验** PR 集中积压，建议组织一次 **UX 专项合入**

---

## 7. 用户反馈摘要

### 😫 痛点
| 来源 | 反馈 | 本质问题 |
|:---|:---|:---|
| [#1698](https://github.com/netease-youdao/LobsterAI/issues/1698) | "关闭有道龙虾，重装帝王蟹，就恢复正常" | **产品生态割裂**，用户成排错主体 |
| [#2017](https://github.com/netease-youdao/LobsterAI/issues/2017) | 截图展示报错，无文字描述 | **新手引导缺失**，构建流程黑盒 |
| [#1568](https://github.com/netease-youdao/LobsterAI/issues/1568) | "openclaw 命令执行不了" | **外部连接器文档**与主项目脱节 |

### 😊 正向信号
- 钉钉连接器独立仓库（`DingTalk-Real-AI/dingtalk-openclaw-connector`）显示**生态扩展意愿**
- 多个 stale PR 持续被维护者更新（如 #1548-#1583 均更新于 2026-05-20），表明**社区贡献未被遗忘**

---

## 8. 待处理积压

> ⚠️ **以下 PR 均标记 `stale`，最后更新为 2026-05-20（维护者批量刷新），但最早创建于 2026-04-07~04-08，已超 6 周未决**

| PR | 功能 | 风险 | 建议行动 |
|:---|:---|:---|:---|
| [#1548](https://github.com/netease-youdao/LobsterAI/pull/1548) | 流式计时器 | 代码可能需 rebase 适配新消息结构 | 评估与 #2019 thinking block 的时序显示冲突 |
| [#1550](https://github.com/netease-youdao/LobsterAI/pull/1550) | 定时任务"不通知"模式修复 | 业务逻辑 bug，影响自动化工作流 | 优先合入，补充边界测试 |
| [#1553](https://github.com/netease-youdao/LobsterAI/pull/1553) | Write 工具文件卡片 + 预览面板 | 交互较重，需设计 review | 安排 UX 走查，或拆分独立发布 |
| [#1555](https://github.com/netease-youdao/LobsterAI/pull/1555) | macOS x64 打包修复（`shasum` 兼容）| 阻断 Intel Mac 用户安装 | **高优先**，影响分发 |
| [#1557](https://github.com/netease-youdao/LobsterAI/pull/1557) | 设置面板搜索筛选 | 纯体验优化，风险低 | 快速合入 |
| [#1560](https://github.com/netease-youdao/LobsterAI/pull/1560) | Agent 编辑后界面切换 bug | 交互状态管理问题 | 验证修复覆盖所有导航路径 |
| [#1570](https://github.com/netease-youdao/LobsterAI/pull/1570) | 定时任务编辑误开启 | 数据持久化 bug | 与 #1550 同域，可批量处理 |
| [#1573](https://github.com/netease-youdao/LobsterAI/pull/1573) | IM 斜杠命令 | 多平台适配成本 | 分平台灰度，优先 Telegram/钉钉 |
| [#1576](https://github.com/netease-youdao/LobsterAI/pull/1576) | SSE 流竞态条件 | **稳定性关键修复**，数据静默丢失 | **高优先**，需压力测试验证 |
| [#1578](https://github.com/netease-youdao/LobsterAI/pull/1578) | 权限审批语法高亮 | 安全体验，风险低 | 快速合入 |
| [#1580](https://github.com/netease-youdao/LobsterAI/pull/1580) | 图片缩略图预览 | 体验优化，PR 完整 | 快速合入 |
| [#1582](https://github.com/netease-youdao/LobsterAI/pull/1582) | Windows pip 递归调用修复 | 环境初始化问题 | 验证覆盖升级/全新安装场景 |
| [#1583](https://github.com/netease-youdao/LobsterAI/pull/1583) | 技能使用统计 | 数据埋点设计需确认 | 确认隐私合规与存储策略 |

---

## 健康度评估

| 维度 | 评分 | 说明 |
|:---|:---|:---|
| 开发活跃度 | ⭐⭐⭐⭐⭐ | 7 PR/日 合并，核心功能快速迭代 |
| 代码质量 | ⭐⭐⭐⭐☆ | DPI 适配、竞态条件等细节获重视 |
| 社区响应 | ⭐⭐⭐☆☆ | stale PR 批量刷新但无实质推进，Issue #1698 产品冲突悬置 |
| 开发者体验 | ⭐⭐☆☆☆ | 本地构建门槛（#2017）、产品间冲突（#1698）未解 |
| 生态扩展 | ⭐⭐⭐⭐☆ | OpenHuman 引擎请求、IM 连接器显示生态野心 |

**关键建议**：组织一次 **stale PR 清理冲刺**（尤其 #1555 打包修复、#1576 SSE 竞态、#1573 斜杠命令），并建立**产品间端口协调机制**以解决 #1698 类系统性冲突。

---

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-05-21

---

## 1. 今日速览

Moltis 今日保持中等活跃度，过去24小时内完成 **3 条 PR 的合并/关闭**（含 2 个修复、1 个功能增强），**2 条新 Issue 开启**、1 条关闭。无新版本发布。项目核心进展集中在 **内存系统扩展**、**进程生命周期管理** 和 **密钥库同步安全** 三个方向，显示维护者对边缘场景稳定性投入显著。社区新增两项平台集成需求（Google Antigravity SDK、官方文档 OOTB 访问），反映用户对生态扩展的期待。

---

## 2. 版本发布

**无新版本发布。** 最新 Release 暂无更新。

---

## 3. 项目进展

| PR | 作者 | 状态 | 核心贡献 | 项目推进度 |
|:---|:---|:---|:---|:---|
| [#1010](https://github.com/moltis-org/moltis/pull/1010) feat(memory): allow nested subfolders and collection-aware writes | gmoigneu | **已合并** | 内存系统从扁平文件结构升级为支持任意嵌套子目录（`memory/**`、`agents/**` 及用户自定义集合），解除 `memory_save`/`memory_delete` 仅支持单一层级的限制 | ⭐⭐⭐ 高：直接扩展 AI 代理的数据组织能力，为多代理协作场景奠基 |
| [#1009](https://github.com/moltis-org/moltis/pull/1009) fix(qmd): kill child process when run_with_timeout expires | gmoigneu | **已合并** | 修复 `QmdManager::run_with_timeout` 超时后子进程泄漏问题，新增 `kill_on_drop` 确保 QMD/Node 进程被正确终止 | ⭐⭐⭐ 高：消除生产环境资源泄漏与僵尸进程风险 |
| [#1026](https://github.com/moltis-org/moltis/pull/1026) fix(vault): keep auth password changes in sync | penso | **已关闭** | 将认证密码变更与密钥库密码轮换改为原子操作，拒绝会导致 auth/vault 密码不匹配的首密码/重置流程，新增回归测试覆盖密封密钥库场景 | ⭐⭐⭐ 高：堵住安全一致性漏洞，防止用户锁定 |

**整体评估**：今日合并的 PR 均针对**可靠性边界**（进程泄漏、密码同步、目录限制），体现项目从功能建设向生产级 hardened 的转型。内存系统的 collection-aware 写入为后续多代理架构预留了扩展空间。

---

## 4. 社区热点

| 议题 | 类型 | 互动指标 | 热度分析 |
|:---|:---|:---|:---|
| [#977](https://github.com/moltis-org/moltis/issues/977) [bug] Browser sandbox fails when Moltis runs in Docker | Issue (已关闭) | 3 条评论，0 👍 | **最高讨论密度**。Docker + Proxmox LXC 嵌套容器场景下的浏览器沙箱故障，涉及 `/data/browse` 目录创建失败。已关闭但未标注修复 PR，可能为配置解决或重复问题 |
| [#1028](https://github.com/moltis-org/moltis/issues/1028) [Feature]: Agent should have access to Moltis docs OOTB | Issue (开放) | 1 条评论，0 👍 | **最新功能诉求**。用户期望 AI 代理开箱即用访问官方文档，减少手动配置知识库 |
| [#1027](https://github.com/moltis-org/moltis/issues/1027) [Feature]: Support Google Antigravity SDK as provider | Issue (开放) | 0 条评论，0 👍 | **平台扩展信号**。Google 新兴 SDK 的集成请求，尚处早期阶段 |

**诉求洞察**：Docker 部署仍是社区痛点（#977 评论集中于环境配置细节）；用户对"零配置智能"（#1028）和"多供应商兼容"（#1027）的诉求并行增长，反映 Moltis 正从早期 adopter 向更广泛开发者群体渗透。

---

## 5. Bug 与稳定性

| 严重度 | 议题 | 状态 | 根因 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#977](https://github.com/moltis-org/moltis/issues/977) Docker 中浏览器沙箱失败 | 已关闭 | Docker 容器内 `/data/browse` 目录创建失败，可能与 LXC 嵌套、权限命名空间或卷挂载有关 | **未明确关联** — 关闭原因需核实 |
| 🟡 **中**（已修复） | [#1009](https://github.com/moltis-org/moltis/pull/1009) QMD 超时子进程泄漏 | 已合并 | `tokio::time::timeout` 仅丢弃 Future 不终止底层进程，导致内存泄漏 | ✅ [#1009](https://github.com/moltis-org/moltis/pull/1009) |
| 🟡 **中**（已修复） | [#1026](https://github.com/moltis-org/moltis/pull/1026) Vault 密码不同步 | 已关闭 | 认证密码与密钥库密码轮换非原子，密封状态下可能产生不匹配 | ✅ [#1026](https://github.com/moltis-org/moltis/pull/1026) |

**风险提示**：#977 的关闭状态与无关联修复 PR 存在信息缺口，建议维护者确认是否为**配置方案解决**（需文档化）或**误关闭**，避免社区重复报告。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 纳入可能性评估 | 关键依赖 |
|:---|:---|:---|:---|
| **官方文档 OOTB 访问** | [#1028](https://github.com/moltis-org/moltis/issues/1028) | ⭐⭐⭐ **高** — 与 #1010 的 collection-aware 内存系统直接契合，可将官方文档作为预置知识集合注入 | 需维护者维护文档向量快照或结构化索引 |
| **Google Antigravity SDK 支持** | [#1027](https://github.com/moltis-org/moltis/issues/1027) | ⭐⭐ **中** — 新供应商 SDK，需评估社区需求强度与维护成本；Antigravity 为 Google 实验性项目，稳定性存疑 | SDK 公开文档、认证机制、与现有 provider 抽象层的兼容性 |
| **嵌套目录内存管理** | [#1010](https://github.com/moltis-org/moltis/pull/1010) | ✅ **已实现** — 为上述功能提供基础设施 | — |

**路线图推断**：内存系统的 collection-aware 架构（#1010）可能是为**内置知识库**和**多代理数据隔离**铺路，#1028 的 OOTB 文档访问将成为该能力的首个官方应用场景。

---

## 7. 用户反馈摘要

| 维度 | 提炼内容 |
|:---|:---|
| **痛点** | Docker 嵌套部署（Proxmox LXC → Docker）的浏览器沙箱兼容性复杂，错误信息（`Failed to create /data/browse`）缺乏诊断指引 |
| **场景** | 用户倾向在虚拟化/容器化环境中运行 Moltis（Proxmox、Docker），对隔离性与资源控制有强需求 |
| **期望** | "开箱即用"优先级上升：代理应自带领域知识（官方文档），减少用户配置负担 |
| **隐忧** | #1027 未勾选"包含会话上下文"复选框，反映部分用户报告问题时对模板依从性不足，可能影响问题定位效率 |

---

## 8. 待处理积压

| 议题 | 创建时间 | 当前状态 | 关注理由 |
|:---|:---|:---|:---|
| [#1028](https://github.com/moltis-org/moltis/issues/1028) Agent 官方文档 OOTB 访问 | 2026-05-20 | 开放，1 评论 | 与今日合并的 #1010 高度协同，建议维护者快速响应以释放功能价值 |
| [#1027](https://github.com/moltis-org/moltis/issues/1027) Google Antigravity SDK | 2026-05-20 | 开放，0 评论 | 新供应商请求，需标记 `provider-request` 标签并评估社区投票 |
| [#977](https://github.com/moltis-org/moltis/issues/977) Docker 浏览器沙箱 | 2026-05-06 | **已关闭但无修复 PR** | ⚠️ 需核实关闭原因，若为用户自解应提取为文档 FAQ；若为误关闭需重开 |

---

*日报基于 GitHub 公开数据生成，时间范围：2026-05-20 至 2026-05-21 UTC。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-05-21

> **项目**: [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)（注：实际仓库名为 QwenPaw）  
> **统计周期**: 过去 24 小时  
> **数据基准**: Issues 38 条（新开/活跃 16，关闭 22）| PRs 36 条（待合并 19，已合并/关闭 17）| 新版本 1 个

---

## 1. 今日速览

CoPaw 今日维持**高活跃度运转**，24 小时内 38 条 Issues 与 36 条 PR 的吞吐量表明社区协作密集。v1.1.8.post1 补丁版本紧急发布，聚焦安装文档备份目录补充与 OpenCode Go 提供商接入。Bug 修复占据主导——22 条 Issues 关闭、17 条 PR 合并/关闭，修复效率优于新增问题增速。但 **Pet 插件稳定性**与**微信 iLink 通道可靠性**仍是用户投诉焦点，需持续关注。整体健康度：**良好，局部有稳定性压力**。

---

## 2. 版本发布

### [v1.1.8.post1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.8.post1)

| 维度 | 详情 |
|:---|:---|
| **发布性质** | 补丁版本（post-release） |
| **核心变更** | ① 安装文档补充备份目录说明（[#4534](https://github.com/agentscope-ai/QwenPaw/pull/4534) by @xieyxclack）；② 通过 `meta.base_url_options` 将 **OpenCode Go** 接入 opencode 提供商（[#4536](https://github.com/agentscope-ai/QwenPaw/pull/4536) by @DICKQI） |
| **破坏性变更** | 无 |
| **迁移注意** | OpenCode Go 与原有 OpenCode (Zen) 共享同一 provider，通过 `meta.base_url_options` 切换端点：`https://opencode.ai/zen/v1`（Zen）vs `https://opencode.ai/zen/go/v1`（Go）。合并后模型列表扩展至 12 个模型。 |
| **关联 Issue** | 关闭用户长期诉求 [#4441](https://github.com/agentscope-ai/QwenPaw/issues/4441)「一键配置 OpenCode Go」 |

---

## 3. 项目进展

### 今日合并/关闭的关键 PR（17 条中的核心项）

| PR | 作者 | 推进内容 | 关联 Issue |
|:---|:---|:---|:---|
| [#4536](https://github.com/agentscope-ai/QwenPaw/pull/4536) | @DICKQI | **OpenCode Go 提供商正式接入**，12 模型统一配置 | [#4441](https://github.com/agentscope-ai/QwenPaw/issues/4441) |
| [#4564](https://github.com/agentscope-ai/QwenPaw/pull/4564) | @Osier-Yi | **Pet 插件 Windows 兼容性大修**：进程检测改用 `tasklist`/`taskkill`、修复生命周期气泡覆盖、双语 UI、打包修复 | [#4541](https://github.com/agentscope-ai/QwenPaw/issues/4541), [#4575](https://github.com/agentscope-ai/QwenPaw/issues/4575) |
| [#4576](https://github.com/agentscope-ai/QwenPaw/pull/4576) | @hongxicheng | **微信 iLink 双修复**：消息去重绕过漏洞 + `context_token` 过期无限重试问题 | [#4477](https://github.com/agentscope-ai/QwenPaw/issues/4477) |
| [#4563](https://github.com/agentscope-ai/QwenPaw/pull/4563) | @jinglinpeng | **备份 API 主机白名单移除**，修复 Docker `localhost` 访问 403 问题 | [#4535](https://github.com/agentscope-ai/QwenPaw/issues/4535) |
| [#4573](https://github.com/agentscope-ai/QwenPaw/pull/4573) | @zhaozhuang521 | **Console 会话无限切换循环修复**：根治 `displayId`/`realId` 双 ID 导致的竞态 | [#4557](https://github.com/agentscope-ai/QwenPaw/issues/4557) |
| [#4574](https://github.com/agentscope-ai/QwenPaw/pull/4574) | @zhijianma | 消息内容文件名处理规范化 | — |
| [#4570](https://github.com/agentscope-ai/QwenPaw/pull/4570) | @ltzu929 | 暗色模式计划面板标题不可见修复 | [#4568](https://github.com/agentscope-ai/QwenPaw/issues/4568) |
| [#4571](https://github.com/agentscope-ai/QwenPaw/pull/4571) | @zhijianma | 测试隔离：provider 数据 fixture 防污染 | — |
| [#2862](https://github.com/agentscope-ai/QwenPaw/pull/2862) | @carlos999-hqsama | **飞书 CardKit 流式打字机卡片**（长期 PR 终于合并） | — |
| [#4298](https://github.com/agentscope-ai/QwenPaw/pull/4298) | @aqilaziz | 桌面端外部链接打开修复 | [#3816](https://github.com/agentscope-ai/QwenPaw/issues/3816) |
| [#4288](https://github.com/agentscope-ai/QwenPaw/pull/4288) | @aqilaziz | 助手文件预览优化：文件名规范化、URL 解析、图片放大 | [#4260](https://github.com/agentscope-ai/QwenPaw/issues/4260) |

**整体迈进评估**：今日修复密度高，覆盖 **3 个崩溃级问题**（Pet 闪退、会话死循环、微信推送失败）、**2 个部署阻塞问题**（Docker 备份 403、安装文档缺失），以及 **1 个长期功能 PR**（飞书流式卡片）。项目稳定性显著改善。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 状态 | 核心诉求分析 |
|:---|:---|:---:|:---|:---|
| 1 | [#4477](https://github.com/agentscope-ai/QwenPaw/issues/4477) WeChat iLink 定时任务推送失败 | 13 | 🔴 OPEN | **企业微信场景可靠性**：`context_token` 隔夜过期无重试、图片/文件发送无日志，直接影响生产环境定时推送。用户 @zhanggegehao 持续跟进，已有 PR [#4576](https://github.com/agentscope-ai/QwenPaw/pull/4576) 修复待审 |
| 2 | [#4496](https://github.com/agentscope-ai/QwenPaw/issues/4496) AGENTS.md 加载为内置模板而非工作区文件 | 13 | ✅ CLOSED | **配置可预期性**：v1.1.7 升级后系统提示词加载逻辑变更，用户自定义规则被覆盖。已关闭但反映版本升级体验痛点 |
| 3 | [#4559](https://github.com/agentscope-ai/QwenPaw/issues/4559) 40+ Agent 后页面明显变慢 | 7 | 🔴 OPEN | **规模化性能瓶颈**：回归历史 Issue [#3499](https://github.com/agentscope-ai/QwenPaw/issues/3499)，前端渲染/后端查询效率在 Agent 数量膨胀时恶化，需架构级优化 |
| 4 | [#4474](https://github.com/agentscope-ai/QwenPaw/issues/4474) 是否支持 ChatGPT-5.5 | 7 | 🔴 OPEN | **模型追新焦虑**：用户配置失败，社区需明确模型兼容策略与更新节奏 |
| 5 | [#4535](https://github.com/agentscope-ai/QwenPaw/issues/4535) `/backups` localhost 403 | 6 | ✅ CLOSED | **部署灵活性**：Docker 桥接网络下主机识别问题，PR [#4563](https://github.com/agentscope-ai/QwenPaw/pull/4563) 已快速修复 |

**诉求洞察**：企业级部署可靠性（微信、飞书、Docker）> 规模化性能 > 模型生态紧跟。用户愿意为稳定性投入调试时间，但期望问题被承认和快速响应。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 现象 | Fix PR | 状态 |
|:---|:---|:---|:---|:---:|
| 🔴 **崩溃/闪退** | [#4541](https://github.com/agentscope-ai/QwenPaw/issues/4541) | Pet 插件启用后首条消息触发 ConnectTimeout → 主程序闪退 | [#4564](https://github.com/agentscope-ai/QwenPaw/pull/4564) | ✅ 已修复 |
| 🔴 **崩溃/闪退** | [#4575](https://github.com/agentscope-ai/QwenPaw/issues/4575) | Pet 插件 Windows 下对话触发 `KeyboardInterrupt` 式进程终止 | [#4564](https://github.com/agentscope-ai/QwenPaw/pull/4564) | ✅ 已修复 |
| 🔴 **功能失效** | [#4557](https://github.com/agentscope-ai/QwenPaw/issues/4557) | Console 快速切换会话导致无限自动切换死循环 | [#4573](https://github.com/agentscope-ai/QwenPaw/pull/4573) | ✅ 已修复 |
| 🔴 **功能失效** | [#4477](https://github.com/agentscope-ai/QwenPaw/issues/4477) | 微信 iLink 定时任务 `context_token` 过期无重试、图片/文件发送无日志 | [#4576](https://github.com/agentscope-ai/QwenPaw/pull/4576) | 🟡 待合并 |
| 🟡 **功能异常** | [#4543](https://github.com/agentscope-ai/QwenPaw/issues/4543) | API 首次流式调用数据返回不全，二次正常 | — | 🔴 待处理 |
| 🟡 **功能异常** | [#4572](https://github.com/agentscope-ai/QwenPaw/issues/4572) | 飞书 CardKit 流式输出 `sequence=0` 导致 API 错误 300317 | — | 🔴 待处理 |
| 🟡 **功能异常** | [#4497](https://github.com/agentscope-ai/QwenPaw/issues/4497) | Markdown 表格内 `<br>` 换行失效（用户第 3 次报告） | — | 🔴 长期未修 |
| 🟡 **回归** | [#4581](https://github.com/agentscope-ai/QwenPaw/issues/4581) | 模型切换导致长期记忆（MEMORY.md）清空 | — | 🔴 待处理 |
| 🟡 **回归** | [#4583](https://github.com/agentscope-ai/QwenPaw/issues/4583) | 容器环境备份恢复时 secrets 丢失（v1.1.4.post1 旧 Bug 复现） | — | ✅ 已关闭（待验证） |
| 🟢 **边界异常** | [#4554](https://github.com/agentscope-ai/QwenPaw/issues/4554) | Pet 功能离线环境无法使用（硬编码 CDN 图片下载） | — | ✅ 已关闭 |

**稳定性评估**：今日修复了 3 个崩溃/死循环级问题，但 **首次流式数据缺失**、**飞书 CardKit sequence 规范**、**Markdown 换行长期未修** 形成新的积压。模型切换丢记忆问题可能涉及架构设计，需优先评估。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 用户场景 | 纳入可能性 |
|:---|:---|:---|:---:|
| **免费多模态自动路由**（发图/视频/语音自动切视觉模型） | [#4539](https://github.com/agentscope-ai/QwenPaw/issues/4539) | 对标豆包体验，消除手动切换摩擦 | ⭐⭐⭐ 高 — 体验差异化关键 |
| **Coding Mode 浏览器内 IDE** | [#4578](https://github.com/agentscope-ai/QwenPaw/pull/4578) | VS Code-like 嵌入，实时文件管理+Git | ⭐⭐⭐ 高 — PR 已开，产品形态升级 |
| **浏览器自动化稳定性增强**（Playwright 优先于 CDP） | [#4584](https://github.com/agentscope-ai/QwenPaw/issues/4584) | 定时任务 CDP 连接失败、进程残留、卡审批 | ⭐⭐⭐ 高 — 企业场景刚需 |
| **轻量级 Goal 模式**（会话级目标追踪） | [#4443](https://github.com/agentscope-ai/QwenPaw/pull/4443) | `/goal` 命令管理持续目标，注入后续对话 | ⭐⭐⭐ 高 — PR 已开，MVP 完成 |
| **Tauri 2.x 桌面端** | [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) | 替代 Electron，更轻量桌面封装 | ⭐⭐☆ 中 — 长期架构，Under Review |
| **上下文 Token 估算优化**（缓存 prompt usage） | [#4463](https://github.com/agentscope-ai/QwenPaw/issues/4463) | 大上下文场景减少重复计算 | ⭐⭐☆ 中 — 性能优化，技术债 |
| **Skill Market + httpx 重构** | [#4518](https://github.com/agentscope-ai/QwenPaw/pull/4518) | 统一技能市场，3 提供商异步搜索 | ⭐⭐☆ 中 — PR 已开，生态扩展 |
| **CLI 模型列表 JSON/配置过滤** | [#4577](https://github.com/agentscope-ai/QwenPaw/pull/4577) | 自动化脚本友好输出 | ⭐⭐☆ 中 — 开发者体验 |
| **Console Chat API 注入 extraSystemPrompt** | [#4580](https://github.com/agentscope-ai/QwenPaw/pull/4580) | 每请求动态注入业务参数/API Key | ⭐⭐☆ 中 — API 灵活性 |

**路线图信号**：多模态路由 + Coding Mode 构成 **"无摩擦 AI 助手"** 产品主线；浏览器自动化稳定性是 **B 端交付前提**。Tauri 桌面端若合并，将标志技术栈重大迁移。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 原声摘录 | 来源 |
|:---|:---|:---|
| **升级焦虑** | "卸载重装后，之前 1.1.6 中配置的 API keys、模型参数、对话历史等数据是否会丢失？" | [#4430](https://github.com/agentscope-ai/QwenPaw/issues/4430) |
| **调试黑盒** | "图片/文件发送失败时无任何日志" | [#4477](https://github.com/agentscope-ai/QwenPaw/issues/4477) |
| **插件脆弱性** | "Pet 窗口可以正常弹出，一旦发送第一条消息，整个主程序立即崩溃闪退" | [#4541](https://github.com/agentscope-ai/QwenPaw/issues/4541) |
| **企业部署摩擦** | "内网纯离线环境下，点击 Pet 按钮后台报错 `urlopenerror [WinError 10061]`" | [#4554](https://github.com/agentscope-ai/QwenPaw/issues/4554) |
| **版本升级预期违背** | "升级到 1.1.7 后，系统提示词中加载的 AGENTS.md 是内置的默认模板，而非工作区中的实际文件内容" | [#4496](https://github.com/agentscope-ai/QwenPaw/issues/4496) |
| **规模化恐惧** | "超过 40 多个 agent 后，页面访问明显变慢" | [#4559](https://github.com/agentscope-ai/QwenPaw/issues/4559) |

### 满意点

- **快速响应**：Docker 备份 403 问题从报告到修复仅 1 天（[#4535](https://github.com/agentscope-ai/QwenPaw/issues/4535) → [#4563](https://github.com/agentscope-ai/QwenPaw/pull/4563)）
- **社区协作**：OpenCode Go 一键配置诉求从 Issue [#4441](https://github.com/agentscope-ai/QwenPaw/issues/4441) 到 PR 合并仅 4 天

---

## 8. 待处理积压

### 需维护者重点关注

| 积压项 | 时长 | 风险 | 行动建议 |
|:---|:---|:---|:---|
| [#4497](https://github.com/agentscope-ai/QwenPaw/issues/4497) Markdown 表格 `<br>` 换行失效 | 3 次报告 | 用户体验持续受损，社区信任消耗 | 指定前端 owner，评估 marked 渲染配置 |
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) Tauri 2.x 桌面端支持 | 27 天 Under Review | 架构决策悬而未决，贡献者可能流失 | 明确技术评审标准与合并时间表 |
| [#4559](https://github.com/agentscope-ai/QwenPaw/issues/4559) 40+ Agent 性能衰减 | 关联历史 Issue | 规模化天花板，影响企业采购决策 | 纳入性能专项，分配后端 profiling 资源 |
| [#4543](https://github.com/agentscope-ai/QwenPaw/issues/4543) API 首次流式数据缺失 | 1 天 | 影响 API 可靠性承诺 | 复现并定位 session 初始化竞态 |
| [#4581](https://github.com/agentscope-ai/QwenPaw/issues/4581) 模型切换丢记忆 | 1 天 | **

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 | 2026-05-21

> 项目地址: [github.com/qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)  
> 报告周期: 2026-05-20 至 2026-05-21

---

## 1. 今日速览

ZeptoClaw 今日活跃度处于**极低水平**，社区贡献节奏明显放缓。过去24小时内仅产生 **1 条 PR 更新**，无 Issues 活动、无版本发布、无合并动作。唯一待审 PR 聚焦于生产环境稳定性修复，涉及模型提供商解析的关键逻辑缺陷，该问题已导致 NIM 部署场景下 100% 错误率。整体而言，项目处于**维护性低活跃状态**，核心工作流依赖维护者对单条 PR 的审阅响应。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

**今日无已合并/已关闭的 PR**

| 状态 | 数量 | 说明 |
|:---|:---|:---|
| 已合并 | 0 | — |
| 已关闭（未合并） | 0 | — |
| 待审阅 | 1 | 见下方社区热点 |

**进展评估**: 今日项目未产生实质性代码推进。核心功能迭代处于停滞状态，唯一进展取决于维护者对 PR #592 的审阅决策。

---

## 4. 社区热点

### 🔥 PR #592: 提供商关键词回退逻辑修复（待审阅）

| 属性 | 详情 |
|:---|:---|
| **标题** | `fix(providers): keyword fallback must not claim unconfigured provider` |
| **作者** | [@Sisuthros](https://github.com/Sisuthros) |
| **创建/更新** | 2026-05-20 |
| **状态** | 🟡 **OPEN（待合并）** |
| **链接** | [qhkm/zeptoclaw/pull/592](https://github.com/qhkm/zeptoclaw/pull/592) |

**核心问题分析**:

该 PR 修复了 `infer_provider_name_for_model` 函数的关键缺陷——其**关键词匹配的最终回退逻辑忽略了 `available_providers` 白名单**，导致模型 ID 可能解析到用户**未配置**的提供商。

**生产影响**: 在 NIM（NVIDIA Inference Microservices）部署的 Photon 实例中，模型 ID `openai/gpt-oss-120b` 被错误解析至未配置的提供商，造成 **100% 错误率**。

**诉求解读**:  
- **稳定性优先**: 贡献者来自生产环境故障驱动，修复紧迫性高  
- **配置隔离性**: 用户期望 `available_providers` 作为严格边界，任何回退逻辑不得越界  
- **NIM 生态兼容**: 反映 ZeptoClaw 在企业级部署场景（NVIDIA 栈）的适配压力

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 来源 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **P0 - 生产崩溃** | `infer_provider_name_for_model` 解析未配置提供商，导致 NIM 部署 100% 错误 | PR #592 描述 | **#592** | 🟡 待合并 |

**风险评估**: 该缺陷属于**配置安全边界失效**类 Bug——回退逻辑绕过用户显式配置，违背最小权限原则。在 multi-tenant 或合规敏感环境中，可能引发未授权 API 调用或数据泄露风险。

---

## 6. 功能请求与路线图信号

**今日无新增功能请求**（0 Issues 活动）

**从现有 PR 推断下一版本信号**:

| 信号 | 说明 |
|:---|:---|
| 提供商解析鲁棒性 | PR #592 表明模型-提供商映射逻辑需系统性审计，可能触发重构 |
| 企业部署适配 | NIM 场景故障暴露云原生/容器化部署的测试覆盖缺口 |

---

## 7. 用户反馈摘要

**今日无 Issues 评论可供提炼**

**间接反馈（从 PR #592 推断）**:

| 维度 | 内容 |
|:---|:---|
| **痛点** | 模型 ID 解析行为不可预期，调试困难（"manifested as 100% error rate"） |
| **使用场景** | NIM + Photon 企业级推理服务部署 |
| **不满意** | 回退逻辑静默绕过配置，缺乏可见性与控制 |
| **期望** | `available_providers` 应作为**硬约束**，任何解析路径不得违反 |

---

## 8. 待处理积压

| 项目 | 类型 | 创建时间 | 阻塞时长 | 风险 | 链接 |
|:---|:---|:---|:---|:---|:---|
| PR #592 | 修复 PR | 2026-05-20 | **1 天** | 生产故障未修复，影响 NIM 用户 | [PR #592](https://github.com/qhkm/zeptoclaw/pull/592) |

**维护者提醒**:  
- 该 PR 为**单点故障修复**，无替代方案，建议优先审阅  
- 需验证：修复后是否覆盖所有回退路径（keyword/regex/heuristic）  
- 建议补充回归测试：模拟 `available_providers` 为子集场景

---

## 健康度仪表盘

| 指标 | 数值 | 评估 |
|:---|:---|:---|
| 日活跃 Issues | 0 | ⚠️ 偏低 |
| 日活跃 PRs | 1 | ⚠️ 偏低 |
| 待审 PR 积压 | 1 | 🟡 需关注 |
| 生产故障未修复 | 1 | 🔴 **高风险** |
| 社区互动热度 | 低 | ⚠️ 需激活 |

---

*日报生成时间: 2026-05-21*  
*数据来源: GitHub API / 项目公开活动流*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-05-21

## 1. 今日速览

ZeroClaw 项目今日保持**高活跃度**，24小时内 Issues 更新 29 条（19 新开/活跃，10 关闭），PR 更新 50 条（47 待合并，3 已合并/关闭）。**无新版本发布**。社区焦点集中在 v0.8.0 集成分支的稳定性修复、多智能体运行时架构落地，以及 DeepSeek-V4 API 兼容性等 P1 级问题。值得注意的是，今日出现 8 条由 nick-pape 提交的"配置声明但未消费"系列死代码/无效配置 Bug，暴露出 v3 配置迁移后的技术债务集中爆发。

---

## 2. 版本发布

**无新版本发布**（0 个）

---

## 3. 项目进展

### 今日关闭的重要 Issues（10 条）

| Issue | 类型 | 进展说明 |
|:---|:---|:---|
| [#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) | RFC 采纳 | **多智能体 UX 流设计 RFC 正式关闭** — 完成 7 天讨论期、核心团队 2/3 多数投票，已接受。待提取至 `docs/proposals/multi-agent-ux-flow.md`。标志多智能体架构从设计阶段进入实施阶段。 |
| [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) | 破坏性迁移 | **Schema v3 批量字段迁移关闭** — `CURRENT_SCHEMA_VERSION` 升至 3，所有破坏性变更通过 `upstream/integration/v0.8.0` 分支合并，**阻塞器解除**，v0.8.0 发布路径打通。 |
| [#6272](https://github.com/zeroclaw-labs/zeroclaw/issues/6272) | 运行时架构 | **多智能体运行时隔离模型关闭** — 每个 `[agents.<alias>]` 获得独立 workspace、memory、identity file 和可继承 SubAgents，替代 #6266 的单 workspace 身份模型。 |
| [#5891](https://github.com/zeroclaw-labs/zeroclaw/issues/5891) | 功能追踪 | **Multi-agent v1 追踪器关闭** — 协调用 meta-issue 完成历史使命，相关子工作已分散至具体实现 issue。 |
| [#6270](https://github.com/zeroclaw-labs/zeroclaw/issues/6270) | 配置系统 | **Configurable 宏支持 v3 嵌套配置形状** — 解决 `providers.models` 从标量到 `HashMap` 的宏适配问题， onboarding 流程兼容 v3。 |
| [#6053](https://github.com/zeroclaw-labs/zeroclaw/issues/6053) | CLI 工具 | **`config set/init` 支持动态 map 条目** — 可创建/修改 `providers.models.<name>` 等用户自定义键。 |
| [#6375](https://github.com/zeroclaw-labs/zeroclaw/issues/6375) | 运维机制 | **V3 环境变量覆盖机制恢复** — 替代被 #6266 移除的 V1/V2 `apply_env_overrides()`，解决嵌套 alias 结构下的扁平 env-key 路由歧义。 |
| [#6273](https://github.com/zeroclaw-labs/zeroclaw/issues/6273) | 配置重构 | **模型/TTS 提供商类型化拆分** — 消除别名/同义词，统一为 `#[serde(flatten)]` 组合模式，删除 dead Azure 字段。 |
| [#6373](https://github.com/zeroclaw-labs/zeroclaw/issues/6373) | Bug 修复 | **web_search 新安装失效修复** — DuckDuckGo API 调用问题，web_fetch 正常而 web_search 返回空结果的根因定位。 |
| [#6734](https://github.com/zeroclaw-labs/zeroclaw/issues/6734) | 渠道修复 | **Qwen 3.6 工具调用信封泄漏至 Matrix 回复** — 已合并修复，防止内部协议负载暴露为用户可见文本。 |

**整体评估**：v0.8.0 集成分支的**配置系统重构进入收尾阶段**，多智能体架构的**设计-实现闭环完成**，项目正从"架构迁移期"转向"稳定性打磨期"。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论数 | 核心诉求分析 |
|:---|:---|:---|:---|
| 🔥1 | [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) DeepSeek-V4 API 格式不兼容 | **11 评论** | **生产阻断级诉求**：DeepSeek-V4-Pro/Flash 的 thinking mode 引发运行时错误，影响使用 DeepSeek 作为主力模型的企业用户。标签堆叠 `provider:deepseek` + `provider:compatible` 反映社区对"兼容层是否应兜底新模型特性"的架构争议。 |
| 2 | [#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) 多智能体 UX 流 RFC | 9 评论（已关闭） | 设计哲学层面的路由决策：智能体间委托的 UX 边界、用户可见性、权限收敛模式。投票流程的严格执行体现治理成熟度。 |
| 3 | [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) Schema v3 迁移 | 7 评论（已关闭） | **"无部分着陆"的严格合并策略**引发讨论，维护者选择牺牲速度换取迁移原子性，社区接受度较高。 |

### 反应最多的 Issues

| Issue | 👍 数 | 说明 |
|:---|:---|:---|
| [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) DeepSeek-V4 | **4 👍** | 唯一获得非零反应的 issue，反映该 Bug 的广泛影响 |

---

## 5. Bug 与稳定性

### P1/S1 级（生产阻断/工作流阻断）

| Issue | 严重度 | 状态 | Fix PR | 描述 |
|:---|:---|:---|:---|:---|
| [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) | **S2/P1** | `in-progress` | ❌ 无 | DeepSeek-V4 thinking mode API 格式不兼容 |
| [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) | **P1** | `accepted` | ❌ 无 | `tool_filter_groups` 对真实 MCP 工具无操作（前缀匹配 Bug）+ `deferred_loading` 未集成 |
| [#6721](https://github.com/zeroclaw-labs/zeroclaw/issues/6721) | **P1** | `accepted` | ❌ 无 | `tool_search` 不在 `default_auto_approve()` → webhook 模式静默挂起 120s 后自动拒绝 |
| [#6801](https://github.com/zeroclaw-labs/zeroclaw/issues/6801) | **P1/S2** | `in-progress` | ✅ [#6777](https://github.com/zeroclaw-labs/zeroclaw/pull/6777) | `purge_namespace` 错误按 `category` 列删除而非 `namespace` |
| [#6771](https://github.com/zeroclaw-labs/zeroclaw/issues/6771) | **S1/P1** | 新开 | ✅ [#6816](https://github.com/zeroclaw-labs/zeroclaw/pull/6816) | 多行 Heredoc 被 SecurityPolicy 错误阻断（ZeroClaw 自身技能无法执行） |

### P2 级（高优先级）

| Issue | 严重度 | 状态 | Fix PR | 描述 |
|:---|:---|:---|:---|:---|
| [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) | **P3/S2** | 新开 | ❌ 无 | 所有 channel `enabled=false` 时 supervisor 崩溃循环（~2s 间隔） |
| [#6722](https://github.com/zeroclaw-labs/zeroclaw/issues/6722) | **P2** | `accepted` | ❌ 无 | `MemoryConfig.rerank_enabled/rerank_threshold` 仅声明无消费者 |
| [#6720](https://github.com/zeroclaw-labs/zeroclaw/issues/6720) | **P2** | `accepted` | ❌ 无 | `[agent] context_aware_tools` 配置字段死代码 |
| [#6723](https://github.com/zeroclaw-labs/zeroclaw/issues/6723) | **P2** | `accepted` | ❌ 无 | OpenAI 原生提供商硬编码 120s 超时，忽略 `timeout_secs` 配置 |

### 关键模式：**nick-pape 配置审计系列**（5-16 至 5-20 集中提交）

5 月 16 日，nick-pape 一次性提交 5 个配置相关 Bug，揭示 v3 配置迁移后的系统性技术债务：
- **3 个"声明但未消费"死代码**（#6720, #6722, #6723）
- **1 个权限/工作流阻断**（#6721 `tool_search` 审批链缺失）
- **1 个运行时崩溃**（#6724 channel supervisor 循环）

**风险评估**：配置系统的"表面完备、实际失效"问题可能广泛存在，建议维护者发起专项审计。

---

## 6. 功能请求与路线图信号

### 已纳入/接近纳入 v0.8.0 的功能

| 功能 | 来源 | 信号强度 | 说明 |
|:---|:---|:---|:---|
| **文件批量上传工具** | [#6775](https://github.com/zeroclaw-labs/zeroclaw/pull/6775) | 🔒 高 | PR 已开，`file_upload_bundle` 原子多文件上传，#6773 的配套扩展 |
| **本地提供商模型验证** | [#6811](https://github.com/zeroclaw-labs/zeroclaw/pull/6811) | 🔒 高 | onboarding 流程阻断不可达/无模型本地提供商 |
| **严格工具解析模式** | [#6675](https://github.com/zeroclaw-labs/zeroclaw/pull/6675) | 🔒 高 | 按智能体配置 `strict_tool_parsing`，混合提供商安装的精细控制 |
| **Skills 管理 API + Web 仪表板** | [#6700](https://github.com/zeroclaw-labs/zeroclaw/pull/6700) | 🔄 中 | 需作者行动（`needs-author-action`），API + 页面已完成，范围边界争议 |

### 路线图信号（中长期）

| 功能 | 来源 | 信号强度 | 分析 |
|:---|:---|:---|:---|
| **轻量级 ZeroClaw（技能替代专用工具）** | [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) | 📡 强 | `type:rfc` + `needs-maintainer-review`，主张用通用 skills 替代 gws-cli/jira/github 等专用集成代码，与项目"技能优先"方向一致，但涉及大规模代码删除，需维护者决策 |
| **Telegram 自定义 WebAPI 端点** | [#6807](https://github.com/zeroclaw-labs/zeroclaw/issues/6807) | 📡 中 | 中国大陆/网络受限地区用户的刚需，改动面小，社区 PR 潜力高 |
| **工作流泳道与看板自动化** | [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | 📡 中 | 治理 RFC，解决 286 open PRs / 94 open issues 的合并节奏滞后问题，与 #6060 的 1.0 重构追踪诉求呼应 |
| **用户可见功能支持矩阵** | [#6810](https://github.com/zeroclaw-labs/zeroclaw/issues/6810) | 📡 低 | 文档改进，降低新用户准入门槛 |

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 | 核心不满 |
|:---|:---|:---|
| **"我按文档配置了，但没效果"** | #6699, #6720, #6722, #6723 | 配置系统"表面可用、实际无操作"的隐性失效模式，比显性崩溃更难调试 |
| **Webhook/非交互部署的静默失败** | #6721 | `tool_search` 在 `deferred_loading=true`（默认）+ webhook 模式下挂起 120s 后自动拒绝，无日志、无告警、无重试机制 |
| **新安装即损坏** | #6373 | `web_search` 全新安装后不可用，`web_fetch` 正常，用户难以区分是配置问题还是服务问题 |
| **安全策略反噬自身** | #6771 | ZeroClaw 官方推荐的 PR 创建技能因 Heredoc 被安全策略阻断，"自己阻止自己"的信任危机 |

### 使用场景洞察

- **企业/自托管用户**（#6807 Telegram 自定义端点、#6771 Heredoc 阻断）：需要绕过网络限制、自动化 CI/CD 流水线，对"配置即代码"和"非交互模式可靠性"要求极高
- **多模型混合部署用户**（#6675 strict_tool_parsing）：在同一 ZeroClaw 实例中混用原生提供商和兼容层，需要精细的执行策略控制
- **v3 早期采用者**（#6270, #6375 等）：积极跟进新配置架构，但承受迁移摩擦和文档滞后成本

---

## 8. 待处理积压

### 需维护者紧急关注的长期 Issue

| Issue | 创建日期 | 最后更新 | 风险 | 提醒 |
|:---|:---|:---|:---|:---|
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | 2026-04-24 | 2026-05-20 | **153 次提交在批量回滚中丢失** | 已标记 `help wanted`，但 53 天过去仅 2 条评论。回滚涉及 `c3ff635`（2026-03-28），其中包含的 Groq 泄漏检测模式今日才通过 #6812 部分恢复。**系统性恢复进度严重滞后**。 |
| [#6060](https://github.com/zeroclaw-labs/zeroclaw/issues/6060) | 2026-04-24 | 2026-05-20 | **286 open PRs / 94 open issues** 合并节奏危机 | 27 天前提出 1.0 重构追踪和 PR 合并策略，仅 1 条评论。今日 #6808 RFC 再次触及同一问题，**需维护者主动介入建立合并纪律**。 |
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) | 2026-04-27 | 2026-05-20 | `blocked` + `needs-maintainer-review` | "轻量级 ZeroClaw"方向性 RFC，24 天无维护者响应，可能抑制社区贡献动力。 |

### 高评论 PR 中的阻塞项

| PR | 阻塞标签 | 风险 |
|:---|:---|:---|
| [#6706](https://github.com/zeroclaw-labs/zeroclaw/pull/6706) WhatsApp 协议恢复 | `needs-author-action` | 协议库升级依赖 oxidezap/whatsapp-rust 0.6，作者未响应可能错过 v0.8.0 窗口 |
| [#6512](https://github.com/zeroclaw-labs/zeroclaw/pull/6512) Email 渠道修复 | `needs-author-action` | 涉及 17 个 channel 标签的广泛变更，长期停滞将导致 rebase 冲突恶化 |
| [#6700](https://github.com/zeroclaw-labs/zeroclaw/pull/6700) Skills 管理 API | `needs-author-action` | 功能完整度高，但作者未明确范围边界，维护者需主动推进或拆分 |

---

**日报生成时间**：2026-05-21  
**数据基准**：GitHub API 过去 24 小时活动快照  
**健康度评分**：🟡 中偏高（活跃度高，但配置技术债务和 PR 合并积压构成下行风险）

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*