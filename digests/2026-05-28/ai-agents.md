# OpenClaw 生态日报 2026-05-28

> Issues: 382 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-28 00:27 UTC

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

# OpenClaw 项目动态日报 | 2026-05-28

## 1. 今日速览

OpenClaw 今日呈现**高活跃度、高压修复**态势：24小时内 382 条 Issues 更新（175 活跃/新开，207 关闭）、500 条 PR 更新（269 待合并，231 已合并/关闭），并紧急推送 **v2026.5.26** 正式版及 beta.2 补丁。核心主题是**性能优化与稳定性救火**——新版聚焦 Gateway 启动加速与缓存优化，但社区反馈显示 **2026.5.26 引入的 Native hook relay 回归问题**正成为最大痛点，多个 P1 级故障集中爆发，维护团队处于高强度响应状态。

---

## 2. 版本发布

### [v2026.5.26](https://github.com/openclaw/openclaw/releases/tag/v2026.5.26) & [v2026.5.26-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.5.26-beta.2)

| 属性 | 内容 |
|:---|:---|
| **发布日期** | 2026-05-27 |
| **版本性质** | 正式版 + 紧急 beta 补丁 |
| **核心主题** | Gateway 性能优化与启动加速 |

**Highlights：**
- **Faster Gateway startup**：避免重复的 plugin、channel、session、usage-cost、warning、scheduled-service 及 filesystem 扫描
- **Visible replies 解耦**：将用户可见发送与耗时后续工作分离，降低感知延迟
- **Gateway runtime/session 缓存优化**：高负载下缓存抖动（churn）减少

**⚠️ 已知风险与迁移注意：**
- **Native hook relay 回归**：多个用户报告升级后 `Native hook relay unavailable` 错误，导致 Codex 工具调用、memory/filesystem 工具间歇性失效（[#87331](https://github.com/openclaw/openclaw/issues/87331)、[#87395](https://github.com/openclaw/openclaw/issues/87395)、[#87317](https://github.com/openclaw/openclaw/issues/87317)）
- **Telegram plugin-state 硬上限**：新增 1000 行 live row limit 导致部分用户迁移失败（[#87332](https://github.com/openclaw/openclaw/issues/87332)、[#87357](https://github.com/openclaw/openclaw/issues/87357)）
- **Docker 容器故障**：`clawdock-upgrade` 后代理无响应（[#87302](https://github.com/openclaw/openclaw/issues/87302)）

---

## 3. 项目进展

### 今日合并/关闭的重要 PR（231 条中精选）

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#87374](https://github.com/openclaw/openclaw/pull/87374) | TurboTheTurtle | **诊断系统增强**：新增 stale session activity 清理原语，解决退役 session 引用残留 | #87310 |
| [#87457](https://github.com/openclaw/openclaw/pull/87457) | IWhatsskill | **Nostr 通道修复**：DM 订阅保持存活至 abort，解决 #53858 重启循环 | #53858 |
| [#87149](https://github.com/openclaw/openclaw/pull/87149) | eleqtrizit | **QQBot 安全加固**：验证直接媒体上传 URL，防 SSRF 与特殊用途主机 | — |
| [#87458](https://github.com/openclaw/openclaw/pull/87458) | steipete | **性能优化**：内容寻址 blob 去重持久化 skill prompts，降低 session 存储开销 | — |
| [#87449](https://github.com/openclaw/openclaw/pull/87449) | yetval | **Mattermost 体验修复**：保留文本块边界，解决工具密集型 turn 中文本丢失 | #87322 |
| [#87456](https://github.com/openclaw/openclaw/pull/87456) | VACInc | **Codex OAuth 路由恢复**：恢复 `openai-codex/gpt-5.3-codex-spark` Spark 模型路由 | #73694 |
| [#62682](https://github.com/openclaw/openclaw/pull/62682) | simonusa | **Agent 容错增强**：区分终端 abort 与可重试失败，优化 fallback 策略 | #60388 |
| [#86463](https://github.com/openclaw/openclaw/pull/86463) | yaoyi1222 | **自动回复警告**：`message_tool_only` 最终回复遗漏时发出警告 | #85714 |

**整体推进评估**：今日合并集中在**通道稳定性（Nostr、QQBot、Mattermost）、诊断可观测性、OAuth 路由恢复**三大方向，但核心架构债务（SQLite 运行时状态迁移 [#81402](https://github.com/openclaw/openclaw/pull/81402) 仍待合并）进展缓慢。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 👍 | 核心诉求 | 链接 |
|:---|:---|:---:|:---:|:---|:---|
| 1 | **Feishu monitor 内存泄漏**：httpServers Map 清理不完整 | 17 | 0 | 企业 IM 集成稳定性，长期运行可靠性 | [#48183](https://github.com/openclaw/openclaw/issues/48183) |
| 2 | **MemoryIndexManager 竞态条件**：close() 与 in-flight sync 冲突 | 13 | 1 | 优雅关闭机制，数据完整性 | [#86702](https://github.com/openclaw/openclaw/issues/86702) |
| 3 | **Gemini 3.1 Flash-Lite GA 迁移**：替换 preview 版本 | 13 | 4 | 紧跟上游模型更新，成本控制 | [#80380](https://github.com/openclaw/openclaw/issues/80380) |
| 4 | **Windows 本地模型阻塞 Gateway**：trivial infer 4 分钟 | 13 | 1 | Windows 平台生产可用性 | [#86599](https://github.com/openclaw/openclaw/issues/86599) |
| 5 | **5.26 Native hook relay 回归**：UUID 陈旧导致工具失效 | 11 | 8 | 🔥 **升级阻断，紧急修复诉求** | [#87331](https://github.com/openclaw/openclaw/issues/87331) |

**诉求分析**：社区核心焦虑从"功能丰富度"转向**"升级稳定性"**——v2026.5.26 的性能优化收益被 hook relay 回归、Telegram plugin-state 上限、Docker 故障等**迁移摩擦成本**严重抵消。用户明确要求更平滑的升级路径和回滚机制。

---

## 5. Bug 与稳定性

### 按严重程度排列的今日 Bug

| 优先级 | Issue | 类型 | 状态 | Fix PR | 影响 |
|:---|:---|:---|:---:|:---|:---|
| **P0** | [#50630](https://github.com/openclaw/openclaw/issues/50630) Tailscale + auth.mode=none 暴露 Gateway 至全 Tailnet（CVSS 9.3） | 安全 | **已关闭** | 已合并 | 关键基础设施暴露 |
| **P1** | [#87331](https://github.com/openclaw/openclaw/issues/87331) Native hook relay unavailable（5.26 回归） | 回归 | **已关闭** | #87317 相关 | Codex 工具完全失效 |
| **P1** | [#87395](https://github.com/openclaw/openclaw/issues/87395) Native hook relay 间歇性不可用 | 回归 | **开放** | 🚨 **无** | memory/filesystem 工具阻塞 |
| **P1** | [#86599](https://github.com/openclaw/openclaw/issues/86599) Windows 本地模型阻塞事件循环 ~4 分钟 | 性能 | **开放** | 🚨 **无** | Windows beta 不可用 |
| **P1** | [#84903](https://github.com/openclaw/openclaw/issues/84903) 单 stalled session 阻塞整个 Gateway | 隔离失败 | **开放** | 🚨 **无** | 多租户可用性崩溃 |
| **P1** | [#87016](https://github.com/openclaw/openclaw/issues/87016) Preflight compaction 死锁：bot 逐消息反弹 | 死锁 | **开放** | 🚨 **无** | Discord 会话永久不可用 |
| **P1** | [#86508](https://github.com/openclaw/openclaw/issues/86508) Discord EmbeddedAttemptSessionTakeoverError | 竞态 | **开放** | 🚨 **无** | 嵌入式运行失败 |
| **P1** | [#83184](https://github.com/openclaw/openclaw/issues/83184) Heartbeat pendingFinalDelivery 卡住 | 状态机 | **开放** | 🚨 **无** | 心跳驱动回复阻塞 |
| **P1** | [#87357](https://github.com/openclaw/openclaw/issues/87357) Telegram plugin-state 1000 行上限锁死 | 容量 | **已关闭** | #87332 | 消息缓存写入失败 |
| **P2** | [#48183](https://github.com/openclaw/openclaw/issues/48183) Feishu 内存泄漏 | 资源泄漏 | **开放** | 🚨 **无** | 长期运行 OOM |

**稳定性健康度评估**：🔴 **高风险**——5.26 版本引入的回归问题密集爆发，且多个 P1 问题尚无 fix PR。事件循环阻塞、session 隔离失败、hook relay 失效构成**"雪崩三件套"**，单点故障易扩散为全局不可用。

---

## 6. 功能请求与路线图信号

| Issue/PR | 需求 | 成熟度 | 纳入可能性 |
|:---|:---|:---|:---|
| [#86881](https://github.com/openclaw/openclaw/issues/86881) **Gateway-lite 模式**：无 AI harness 的确定性部署 | 高（运维刚需） | 🟡 概念验证 | **高**——符合边缘/IoT 场景，与现有 gateway 解耦趋势一致 |
| [#34400](https://github.com/openclaw/openclaw/issues/34400) **memory_search 递归子目录搜索** | 中（用户体验） | 🟢 已有关闭 PR | **已纳入**——#34400 已关闭，实现待观察 |
| [#10142](https://github.com/openclaw/openclaw/issues/10142) **session:end 内部 hook 事件** | 中（生态集成） | 🟡 长期开放 | 中——Temporal 等工作流集成需求明确，但优先级被稳定性压制 |
| [#87362](https://github.com/openclaw/openclaw/issues/87362) **Task flow 生命周期 hook 事件** | 中（插件可观测性） | 🔴 今日新提 | 中——与现有内部系统衔接，需产品决策 |
| [#80380](https://github.com/openclaw/openclaw/issues/80380) **Gemini 3.1 Flash-Lite GA 迁移** | 高（模型更新） | 🟢 上游已 GA | **高**——Google 已弃用 preview，技术债务低 |

**路线图信号**：社区从"AI 能力扩展"转向**"基础设施硬化"**——Gateway-lite、确定性部署、插件可观测性等请求反映用户将 OpenClaw 从实验工具推向生产环境的压力。

---

## 7. 用户反馈摘要

### 痛点提炼

| 主题 | 典型反馈 | 来源 Issue |
|:---|:---|:---|
| **升级恐惧** | "5.26 升级后 Codex 工具完全失效，回滚到 5.20 才恢复" | [#87331](https://github.com/openclaw/openclaw/issues/87331)、[#86509](https://github.com/openclaw/openclaw/issues/86509) |
| **Windows 二等公民** | "trivial infer run takes ~4 minutes"——本地模型在 Windows 完全不可用 | [#86599](https://github.com/openclaw/openclaw/issues/86599) |
| **诊断黑盒** | "doctor --fix 没用，只能手动回滚"——故障自愈能力不足 | [#86508](https://github.com/openclaw/openclaw/issues/86508) |
| **成本失控** | Claude reasoning 默认开启"silently flipped"，Anthropic 支出翻倍 | [#73182](https://github.com/openclaw/openclaw/issues/73182) |
| **Docker 运维摩擦** | "clawdock-upgrade 后代理无响应"——容器化部署可靠性 | [#87302](https://github.com/openclaw/openclaw/issues/87302) |

### 满意点
- **性能优化被认可**：5.26 的启动加速和缓存优化获得期待（未升级用户）
- **多通道覆盖广度**：QQBot、Nostr、Mattermost 等小众通道获得及时修复

---

## 8. 待处理积压

### 长期未响应的高优先级 Issue（提醒维护者）

| Issue | 创建日期 | 最后更新 | 天数 | 风险 | 链接 |
|:---|:---|:---|:---:|:---|:---|
| A2A sessions_send 双向调用导致重复消息 | 2026-03-08 | 2026-05-27 | **80天** | 协议设计缺陷，影响多智能体可靠性 | [#39476](https://github.com/openclaw/openclaw/issues/39476) |
| Gateway 并行子代理 spawn 导致 1012 重启 | 2026-05-01 | 2026-05-27 | **27天** | 高并发场景雪崩 | [#75378](https://github.com/openclaw/openclaw/issues/75378) |
| Deferred turn-maintenance livelock | 2026-05-04 | 2026-05-27 | **24天** | 稳态聊天流量下会话累积 | [#77340](https://github.com/openclaw/openclaw/issues/77340) |
| Gateway 重复 spawn MCP 子进程（内存泄漏） | 2026-05-01 | 2026-05-27 | **27天** | 资源泄漏 | [#75621](https://github.com/openclaw/openclaw/issues/75621) |
| Nostr 通道重启循环 | 2026-03-24 | 2026-05-27 | **65天** | PR #87457 待合并 | [#53858](https://github.com/openclaw/openclaw/issues/53858) |

### 待合并关键 PR（269 条中提醒）

| PR | 等待天数 | 阻塞原因 | 链接 |
|:---|:---:|:---|:---|
| [#81402](https://github.com/openclaw/openclaw/pull/81402) 运行时状态迁移至 SQLite | **15天** | 超大 PR（XL），需全面行为验证 | 架构债务核心 |
| [#85572](https://github.com/openclaw/openclaw/pull/85572) 沙箱策略合规检查 | **5天** | 安全边界审查 | 安全加固 |
| [#85744](https://github.com/openclaw/openclaw/pull/85744) 入口通道合规检查 | **5天** | 与 #85572 配套 | 安全加固 |

---

**日报生成时间**：2026-05-28  
**数据来源**：GitHub openclaw/openclaw 公开仓库  
**健康度评分**：⭐⭐☆☆☆（2/5）—— 高活跃度掩盖不了稳定性 regressions 的系统性风险，建议维护团队暂停功能开发，集中进行 5.26 热修复。

---

## 横向生态对比

好的，作为资深技术分析师，我根据您提供的各项目2026-05-28动态摘要，为您生成一份面向技术决策者和开发者的横向对比分析报告。

---

### **个人 AI 助手/自主智能体开源生态横向分析报告 (2026-05-28)**

#### **1. 生态全景**

当前个人AI助手与自主智能体开源生态正处于一个 **“狂热迭代”与“阵痛分娩”交织的关键转折点**。一方面，以 OpenClaw 为首的项目在性能优化和多通道覆盖上持续攻坚，社区的“基础设施硬化”和“企业级部署”需求空前强烈。另一方面，新版发布频繁引入的稳定性和回归问题（特别是 Core 层和 Agent 调度），暴露了项目规模扩张与工程成熟度之间的裂痕。生态整体呈现出从“实验性探索”向“生产级可用”冲刺的激烈竞争态势，**稳定性与可靠的升级体验已成为核心护城河**，单纯的功能堆叠不再能赢得社区信任。

#### **2. 各项目活跃度对比**

| 项目名称 | 日活跃 Issues | 日活跃 PRs | 今日版本发布 | 健康度评估 | 核心状态标签 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 382 (175新/207关) | 500 (269待/231合) | v2026.5.26 & beta.2 | ⭐⭐☆☆☆ (风险) | 高活跃，高压修复，稳定性雪崩 |
| **NanoBot** | 5 | 22 (16待/6合) | 无 | ⭐⭐⭐☆☆ (亚健康) | 架构重构，MCP生态修复，升级体验断裂 |
| **Hermes Agent** | 50 (47活/3关) | 50 (44待/6合) | 无 | ⭐⭐☆☆☆ (风险) | 高积压，Kanban/配置系统质量黑洞，数据丢失风险 |
| **PicoClaw** | 4 | 6 (5待/1合) | Nightly v0.2.9-nightly | ⭐⭐⭐☆☆ (亚健康) | 通道稳定性修复，版本发布节奏受到质疑 |
| **NanoClaw** | 1 (关闭) | 9 (5待/4合) | 无 | ⭐⭐⭐⭐☆ (良好) | 多平台兼容修复，CLI体验提升，多提供商议题引争议 |
| **NullClaw** | 3 | 4 (2待/2合) | 无 | ⭐⭐⭐☆☆ (亚健康) | 基础设施加固期，自定义提供商配置Bug暴露设计债务 |
| **IronClaw** | 28 (23活/5关) | 50 (21待/29合) | 无 | ⭐⭐⭐☆☆ (亚健康) | **Reborn架构冲刺**，并发模型设计隐患，CI红线警报 |
| **LobsterAI** | 2 | 23 (18待/5合) | **2026.5.27 正式版** | ⭐⭐⭐☆☆ (亚健康) | 媒体生成能力上线，但P0级登录Bug阻塞付费转化 |
| **Moltis** | 3 (3活) | 2 (0待/2合) | 无 | ⭐⭐⭐⭐☆ (良好) | 向量存储基建升级，PTY伪终端需求浮现 |
| **CoPaw** | 40 (25活/15关) | 26 (11待/15合) | **v1.1.9 稳定版 & beta.2** | ⭐⭐⭐⭐☆ (良好) | 版本发布稳定，企业场景契合，但Beta版回归问题集中 |
| **ZeroClaw** | 30 (20活/10关) | 50 (39待/11合) | 无 | ⭐⭐⭐☆☆ (亚健康) | 安全加固主线，v0.8.1规划启动，DeepSeek兼容性问题成债务 |

*注：健康度评估基于Bug严重性、修复效率、社区情绪及项目积压综合判断。*

#### **3. OpenClaw 在生态中的定位**

- **生态定位**: **生态的绝对核心与“晴雨表”**。其社区规模（日Issue/PR数量级远超其他项目）、功能完整度和版本迭代速度是行业标杆。许多项目（如 NanoClaw、PicoClaw）在功能设计、插件生态上与之对标。
- **技术路线**: **“全面征服”**。覆盖最广的通道、最深的工具链、最复杂的多Agent协调。但这也导致其架构复杂度和版本升级风险最高。
- **当前困境**: 2026.5.26版本引入的**Native hook relay回归**和**Docker故障**，使其成为生态稳定性的“风暴眼”。其稳定性问题不仅影响自身用户，更会动摇整个生态对“高性能 = 高稳定性”的信心。
- **对比**: 相比 NanoBot 的模块化 Agent 设计，CoPaw 的桌面端 IDE，IronClaw 的重构式 Reborn 架构，**OpenClaw 代表了追求功能广度和极致性能的“重”路线**，但也因此在稳定性上付出了代价。

#### **4. 共同关注的技术方向**

1. **升级稳健性与回滚机制**：
    - **涉及项目**: **OpenClaw** (#87331)、**NanoBot** (#4013)、**Hermes Agent** (#25272)、**LobsterAI** (#1903)
    - **诉求**: 用户不再接受“升级后工具不可用/付费功能失效”的风险。多个社区明确要求**平滑的升级路径、稳定版的灰度发布策略和可靠的回滚能力**。

2. **多 Agent / 单网关多租户架构**：
    - **涉及项目**: **OpenClaw** (路线图信号)、**Hermes Agent** (#9514, #10143)、**IronClaw** (Reborn 背景子代理)
    - **诉求**: 用户希望降低在单一进程内管理多个独立 Agent 或运行不同“人格”的运维成本。这是对资源效率和部署灵活性的极致追求。

3. **模型提供商与向量存储的灵活性**：
    - **涉及项目**: **NullClaw** (#936)、**ZeroClaw** (#6059)、**Moltis** (PR #1074)、**NanoClaw** (Issue #80)
    - **诉求**: 社区强烈要求摆脱对单一模型提供商的依赖。这不仅是成本考虑，更是对**供应商锁定风险**的警惕。这要求项目提供标准化的兼容层和更灵活的配置能力。

4. **配置管理与安全策略的声明化**：
    - **涉及项目**: **IronClaw** (Reborn TOML策略)、**ZeroClaw** (#6971, #6981)、**Moltis** (PR #1074)
    - **诉求**: 从“编写代码”配置向“声明式策略文件”转变。将工具、网关、模型等权限治理从运行时逻辑解耦，实现**安全配置的审计、版本化和自动化**。

#### **5. 差异化定位分析**

| 项目 | 功能侧重点 | 目标用户 | 技术架构特征 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | **全栈通用型**，多通道、深工具链、强Agent | 尝鲜者、技术极客、深度玩家 | 单体式架构，性能优化优先，社区驱动 |
| **Hermes Agent** | **平台扩展与运维体验**，Telegram Topic、工具Profile | 多Agent运营者、社区管理者 | 高可扩展性，技能（Skills）系统，Kanban项目管理 |
| **NanoBot** | **MCP生态**与**模块化**，Dream记忆系统 | 知识工作者，偏好组件化搭建 | 高度模块化，Dream子系统独立，MCP原生支持 |
| **IronClaw** | **企业级架构**与**安全治理**，Reborn重构 | 企业用户、对安全/合规敏感者 | 分层架构（ProductAdapter->Reborn），强调认证边界与策略隔离 |
| **CoPaw** | **桌面端体验**与**Coding Mode**，IDE集成 | 开发者、技术创作者 | Tauri桌面应用，网页IDE，可视化工作流（Mission Mode） |
| **LobsterAI** | **媒体生成**与**内容生产**，视频/图像 | 内容创作者、教育、营销 | 服务商集成导向（Kling, Douyin），付费会员体系 |
| **Moltis** | **记忆与长期个性化**，向量存储可配置 | 追求深度个性化、知识管理的用户 | Rust语言重写，性能与内存安全，专注“记忆”基础设施 |
| **ZeroClaw** | **安全与Web3/容器**，集成化部署 | DevOps、云原生用户、安全意识强 | 容器化部署优先，强调运行时凭证和网络隔离 |

#### **6. 社区热度与成熟度分层**

- **快速迭代 / 功能冲刺期**:
    - **IronClaw**: 核心团队正全力冲刺 **Reborn 架构落地**，每日 PR 合并量极高，但随之而来的是并发模型的设计隐患和E2E测试失败。技术债务与功能交付并行。
    - **ZeroClaw**: 高强度开发，但**39个待合并PR**形成巨大压力，安全加固成为当前主线，v0.8.1的规划清晰。
    - **LobsterAI**: 发布新版本（媒体生成），但大量4月初的PR被标记为“僵尸”，存在治理压力，且P0级Bug未修复。

- **质量巩固 / 稳定性修复期**:
    - **OpenClaw**: 陷入**密集的稳定性救火**，高性能版本引入的回归问题成为焦点，暂停功能开发集中修复。
    - **Hermes Agent**: **Kanban与配置系统**是质量黑洞，数据丢失类Bug（P1）长期无修复进展，需暂停功能投入，优先解决核心稳定性。
    - **NanoBot**: 修复 **MCP 重连与流超时回归**，同时进行 Dream 记忆系统架构重构，处于修复与迭代并行。
    - **PicoClaw**: 版本发布节奏受到质疑，通道稳定性bug修复及时，但项目整体处于小幅修修补补阶段。

#### **7. 值得关注的趋势信号**

1. **“基础设施硬化”成为共识**: 社区首要关注点已从“Agent能做什么”转向“Agent如何在生产中稳定运行”。**升级稳健性、安全性、可观测性（如 NullClaw 的错误链透传）和平台兼容性（如 NixOS、Windows）是目前最受关注的价值点**。对于开发者，这意味着投资于易于运维和高度可靠的项目将获得更长期的红利。

2. **多 Agent 编排场景浮出水面**: Moltis 对 PTY 伪终端的需求，Hermes Agent 对单网关多 Agent 的讨论，都指向 **Agent们之间、Agent与现有CLI/SDK工具之间的交互闭环** 是一个被严重低估的市场。解决工具互操作的“最后一公里”体验，将是下一代 Agent 框架的决胜点。

3. **“应用为王”的单点突破**: 不同类型的项目开始走差异化路线。**CoPaw 的“Coding Mode”桌面IDE、LobsterAI 的“视频生成”**，都在尝试切入一个垂直但高频的场景，从而树立品牌。这表明，在通用 Agent 平台趋于同质化的背景下，**场景化、体验化的细分市场解决方案** 更具爆发潜力。

4. **AI 供应链风险**: 从 **NanoClaw 因 Anthropic 封号风险转而寻求多提供商支持**，到 NullClaw 和 ZeroClaw 对自定义兼容提供商的支持Bug修复，再到 LobsterAI 依赖厂商认证的会员登录故障，**AI 供应商锁定和技术依赖（API格式漂移）** 已成为现实风险。开源项目的价值，将体现在能否为用户提供一个“**中立且可靠的 AI 能力聚合层**”。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-05-28

> **项目**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot)  
> **日期**: 2026-05-28  
> **数据周期**: 过去 24 小时

---

## 1. 今日速览

NanoBot 今日保持**高活跃度**，22 个 PR 更新（6 条已合并/关闭，16 条待审阅），5 个 Issue 更新。社区聚焦三大主线：**MCP 生态稳定性修复**（重连、工具热更新）、**Dream 记忆系统架构重构**（单阶段合并、可配置化），以及**GitAgent Protocol 标准化接入**（3 个重复 PR 涌现，显示外部生态对 NanoBot 的关注）。无新版本发布，整体处于密集迭代期，技术债务清理与架构升级并行。

---

## 2. 版本发布

**无新版本发布**（v0.2.0 为当前最新版本，用户反馈存在 stream timeout 回归问题，见 #4013）。

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 说明 | 链接 |
|:---|:---|:---|:---|
| #4014 | bjoshuanoah | **MCP 工具热更新通知支持**：`tools/list_changed` 通知触发增量重载，不中断连接 | [链接](https://github.com/HKUDS/nanobot/pull/4014) |
| #4012 | bjoshuanoah | **MCP 重连机制修复**：解决 `_mcp_connected` 永真导致的死会话无法重建问题 | [链接](https://github.com/HKUDS/nanobot/pull/4012) |
| #4018 | yeounhyeok | **Codex Provider 流超时统一**：硬编码 60s 改为读取 `NANOBOT_STREAM_IDLE_TIMEOUT_S`，与其他 provider 对齐 | [链接](https://github.com/HKUDS/nanobot/pull/4018) |
| #4026 | msareposar | **Docker 工具链扩展**：新增 GitHub CLI (`gh`) 和 Google Workspace CLI (`gogcli`) | [链接](https://github.com/HKUDS/nanobot/pull/4026) |
| #4024 | computer-agent | **[重复关闭] GitAgent Protocol 支持** | [链接](https://github.com/HKUDS/nanobot/pull/4024) |
| #4005 | shreyas-lyzr | **[无效关闭] GitAgent Protocol 支持** | [链接](https://github.com/HKUDS/nanobot/pull/4005) |

**架构演进信号**：PR #4023 将独立 HeartbeatService 迁移为 cron 自动注册，PR #3990 将 Dream 两阶段合并为 AgentLoop 单阶段，显示项目正**精简专用基础设施、统一运行时模型**。

---

## 4. 社区热点

| 条目 | 热度指标 | 分析 | 链接 |
|:---|:---|:---|:---|
| #1922 [CLOSED] nanobot-webui 第三方管理面板 | 👍×10, 评论×10 | **社区生态里程碑**：用户 @Good0007 自研 WebUI 获官方认可关闭，标志 NanoBot 第三方工具链成熟。功能覆盖 dashboard、多用户、MCP/技能/cron 可视化配置，填补官方 WebUI 权限管理空白。 | [链接](https://github.com/HKUDS/nanobot/issues/1922) |
| #3885 [OPEN] Dream 系统作业全局开关 | 评论×4 | **核心诉求：可控性**。用户希望彻底禁用 Dream（即使 memory 技能关闭仍后台注册 cron），反映"默认启用"策略与资源敏感场景的冲突。PR #3990 正重构 Dream，此 Issue 需评估是否纳入。 | [链接](https://github.com/HKUDS/nanobot/issues/3885) |
| #4030/#4019 [OPEN] GitAgent Protocol 支持 | 3 个重复 PR | **外部标准化压力**：gitagent.sh 生态主动适配 NanoBot，但 PR 重复提交（#4005 无效、#4024 重复关闭、#4030/#4019 待审），维护者需建立 GAP 接入规范，避免社区精力分散。 | [链接](https://github.com/HKUDS/nanobot/pull/4030) |

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 修复状态 |
|:---|:---|:---|:---|
| 🔴 **高** | #4013 | **Stream stalled 90s 超时**：v0.2.0 升级后 Codex provider 硬编码超时，长任务中断，"render any real work useless" | **已修复** PR #4018（Codex 对齐 env var）、PR #4020（per-provider 可配置超时） |
| 🔴 **高** | #4012/#4027 | **MCP 死会话无法重连**：`_mcp_connected` 永真，transient error 后无恢复路径 | **已修复** PR #4012（关闭），PR #4027（待合并，增强版含 callback） |
| 🟡 **中** | #4021 | **Codex reasoning item 重复发送**：400 Duplicate item 中断多轮对话 | **待合并** PR #4021（去重+重试逻辑） |
| 🟡 **中** | #4011 | **孤儿 tool result 污染历史**：断连后残留 `role: "tool"` 导致恢复异常 | **待合并** PR #4011（session + checkpoint 双过滤） |
| 🟡 **中** | #4017 | **openai-compat text-format tool_calls 解析失败**：小米 MiMo 等 provider 非标准输出 | **待合并** PR #4017（文本格式兜底解析） |
| 🟢 **低** | #4025 | **未处理 history entry 被 compaction 误清理** | **待合并** PR #4025（保护机制） |

**稳定性评估**：v0.2.0 存在**流超时回归**（影响生产力场景），MCP 连接可靠性为近期修复重点。建议维护者优先审阅 #4020（per-provider 超时配置）和 #4027（MCP 重连增强）。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 可行性信号 | 纳入概率 |
|:---|:---|:---|:---|
| **Dream 模型独立 provider override** | #4029 | PR #3990 已含 "model override preset" | ⭐⭐⭐⭐⭐ 高，架构重构期自然纳入 |
| **Dream 完全禁用开关** | #3885 | 与 #3990 单阶段重构冲突需协调 | ⭐⭐⭐⭐ 高，用户呼声明确 |
| **per-provider stream timeout 配置** | #4020 | 直接关闭 #4013，env-var 扩展为 provider 级 | ⭐⭐⭐⭐⭐ 高，修复痛点 |
| **模块化 system prompt（组件开关）** | #4022 | 独立 PR，影响核心 context 构建 | ⭐⭐⭐ 中，需评估架构兼容性 |
| **DingTalk 群聊用户隔离** | #4016 | 企业场景刚需，实现清晰 | ⭐⭐⭐⭐ 高，垂直渠道优化 |
| **WebUI project workspace + 权限控制** | #4007 | Codex-style 项目绑定，与官方 WebUI 路线一致 | ⭐⭐⭐⭐ 高，生态建设重点 |
| **GitAgent Protocol 标准化** | #4030/#4019 | 需维护者决策是否官方支持 | ⭐⭐⭐ 中，外部生态对接 |

---

## 7. 用户反馈摘要

### 痛点
- **升级体验断裂**："updated to 0.2.0 and now i receive this error... renders any real work useless"（#4013）—— 超时策略变更未充分沟通
- **本地 LLM 歧视性默认**：90s 云优先超时对 LM Studio/Ollama 用户过激进（#4020）
- **微信场景限制**：context_token 硬编码 10 条消息上限，群聊长对话体验差（#2772）

### 满意点
- **WebUI 生态繁荣**：第三方 nanobot-webui 获 10 👍，"very good (way to say ty)"（#4013）
- **MCP 扩展能力认可**：用户主动构建复杂工作流，对工具热更新有强需求

### 场景洞察
- **企业部署**：DingTalk 群聊隔离、多用户权限控制（#4016, #4007）显示 B 端采用加速
- **个人知识管理**：Dream 记忆系统的"全有或全无"配置引发资源焦虑（#3885）

---

## 8. 待处理积压

| 条目 | 创建时间 | 状态 | 风险 | 链接 |
|:---|:---|:---|:---|:---|
| #2772 微信 10 条消息限制 | 2026-04-03 | 无评论更新，53 天 | **用户流失风险**：渠道核心体验缺陷长期无响应 | [链接](https://github.com/HKUDS/nanobot/issues/2772) |
| #3990 Dream 单阶段重构 | 2026-05-24 | 待合并，大型 PR | **阻塞依赖**：#3885、#4029 均需此 PR 架构决策 | [链接](https://github.com/HKUDS/nanobot/pull/3990) |
| #4007 WebUI workspace | 2026-05-26 | 待合并 | 与第三方 WebUI (#1922) 功能重叠，需明确官方/社区分工 | [链接](https://github.com/HKUDS/nanobot/pull/4007) |

**维护者行动建议**：
1. 优先审阅 **#3990**（Dream 架构重构），释放下游 Issue/PR 决策依赖
2. 对 **GitAgent Protocol** 建立统一响应机制，避免重复 PR 消耗审阅资源
3. 评估 **#2772** 微信限制的技术约束（协议层/配置层？），至少给予用户反馈时间线

---

*日报基于 GitHub 公开数据生成，未包含私有讨论或线下决策信息。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-05-28

---

## 1. 今日速览

Hermes Agent 今日呈现**高活跃度、高积压**态势：24小时内 Issues 与 PR 各更新 50 条，但关闭/合并率极低（Issues 仅关闭 3/50，PR 仅合并/关闭 6/50），社区需求井喷而维护吞吐承压。核心矛盾集中在**多 Agent 架构扩展**（单守护进程多 Agent、Topic 路由、内存隔离）与**Kanban/配置系统稳定性**（401 认证失败、更新丢配置、SQLite 并发崩溃）。今日无新版本发布，但 44 个待合并 PR 中有多个高价值修复（PostgreSQL Kanban 稳定化、Codex 默认模型安全降级、BlueBubbles 群聊过滤）即将落地。

---

## 2. 版本发布

**无新版本发布**（v0.14.0 仍为最新，发布于 2026-05-16）

---

## 3. 项目进展

### ✅ 今日合并/关闭的重要 PR

| PR | 作者 | 核心改进 | 关联 Issue |
|:---|:---|:---|:---|
| [#33544](https://github.com/NousResearch/hermes-agent/pull/33544) | Panchux78 | **PostgreSQL Kanban 稳定化**：避免 SQLite 遗留扫描，保留 Telegram/WhatsApp 语音回复的 Opus/OGG 格式 | Kanban 后端切换问题 |
| [#28633](https://github.com/NousResearch/hermes-agent/pull/28633) | JiehoonKwak | **macOS 原子重启**：`hermes gateway restart --all` 通过 launchd 事务化避免服务挂起 | 重启中断导致服务丢失 |
| [#33011](https://github.com/NousResearch/hermes-agent/issues/33011) | Drpshukla07 | **Codex OAuth 空指针修复**：`response.output=None` 时优雅处理，标记为 duplicate | [#33502](https://github.com/NousResearch/hermes-agent/issues/33502) 同类问题 |
| [#31158](https://github.com/NousResearch/hermes-agent/issues/31158) | valhir1 | **Kanban WAL/SHM 并发修复**：关闭多线程+子进程竞争导致的调度器死锁 | 高并发场景崩溃 |
| [#33537](https://github.com/NousResearch/hermes-agent/issues/33537) | zkhalpey | **Claude Code 一级提供商注册**：原生 streaming + tool_use 支持，关闭（可能已合并） | 代理方案移除 |

**整体推进评估**：今日合并以**稳定性修复**为主，未触及核心架构。多 Agent 隔离、动态模型路由等路线图级功能仍在 Issue 阶段，尚未进入实现。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 | 状态 |
|:---|:---|:---|:---|:---|
| 1 | [#9514](https://github.com/NousResearch/hermes-agent/issues/9514) Single-Daemon Multi-Agent | **11** | 资源效率：1 个进程运行 N 个 Agent，各隔离工作区/内存/人格 | `OPEN` P3 |
| 2 | [#8457](https://github.com/NousResearch/hermes-agent/issues/8457) 持久化会话内存 | **10** | 可靠性：网关重启不丢上下文，支持跨会话检索+自动压缩 | `OPEN` P3 |
| 3 | [#10143](https://github.com/NousResearch/hermes-agent/issues/10143) Telegram Topic-Profile 路由 | **10** | 运营效率：单 Bot 多 Topic = 多 Agent，降低部署成本 | `OPEN` P3 |
| 4 | [#24186](https://github.com/NousResearch/hermes-agent/issues/24186) Kanban 401 未授权 | **9** | 回归故障：更新后看板完全不可用 | `OPEN` P3 |
| 5 | [#21574](https://github.com/NousResearch/hermes-agent/issues/21574) 用户级 Agent 隔离 + 权限系统 | **8** | 安全：防止提示注入冒充，女友攻击成经典案例 | `OPEN` P3 |

**诉求分析**：前三项构成**"单网关多租户"**主题簇——用户强烈希望降低多 Agent 部署的运维成本，而非为每个 Agent 跑独立进程。这暗示 v0.15.0 若解决此架构问题，将大幅提升产品竞争力。

---

## 5. Bug 与稳定性

### 🚨 按严重程度排列

| 优先级 | Issue | 描述 | 影响 | Fix PR 状态 |
|:---|:---|:---|:---|:---|
| **P1** | [#30151](https://github.com/NousResearch/hermes-agent/issues/30151) | **Kanban Scratch Workspace 静默删除整个项目目录** | 数据丢失灾难 | ❌ 无 PR |
| **P1** | [#25272](https://github.com/NousResearch/hermes-agent/issues/25272) | **v0.13.0 更新后所有自定义模型配置消失** | 生产配置丢失 | ❌ 无 PR |
| **P2** | [#26655](https://github.com/NousResearch/hermes-agent/issues/26655) | Curator LLM 用 `delete` 替代 `mv` 归档，绕过 `.archive/` 恢复机制 | 技能永久丢失 | ❌ 无 PR |
| **P2** | [#24039](https://github.com/NousResearch/hermes-agent/issues/24039) | 辅助回退链硬编码，与用户 `fallback_providers` 不互通 | 可靠性设计缺陷 | ❌ 无 PR |
| **P2** | [#33367](https://github.com/NousResearch/hermes-agent/issues/33367) | `terminal_tool` 清理线程递归 `FileNotFoundError` | 日志污染/资源泄漏 | ❌ 无 PR |
| **P3** | [#24186](https://github.com/NousResearch/hermes-agent/issues/24186) | Kanban 401 Unauthorized | 功能完全不可用 | ❌ 无 PR |
| **P3** | [#33502](https://github.com/NousResearch/hermes-agent/issues/33502) | `openai-codex` provider 返回 HTTP None / NoneType 迭代错误 | 最新镜像回归 | ⚠️ [#33011](https://github.com/NousResearch/hermes-agent/issues/33011) 同类关闭 |
| **P3** | [#33488](https://github.com/NousResearch/hermes-agent/issues/33488) | `hermes kanban dispatch` 未传递 `max_in_progress` | 看板 WIP 限制失效 | ❌ 无 PR |
| **P3** | [#32698](https://github.com/NousResearch/hermes-agent/issues/32698) | `web_extract` 仅配置 SearXNG 时死循环错误 | 工具链可用性 | ❌ 无 PR |

**稳定性健康度评估**：⚠️ **亚健康**。两个 P1 数据丢失 Bug 无修复进展，且均与 Kanban/配置系统相关——该区域已成为**质量黑洞**。今日合并的 [#33544](https://github.com/NousResearch/hermes-agent/pull/33544) 仅覆盖 PostgreSQL 场景，SQLite 用户仍暴露于风险中。

---

## 6. 功能请求与路线图信号

### 📡 高信号强度功能请求（有 PR 关联或社区强需求）

| 功能 | Issue/PR | 纳入下一版本概率 | 判断依据 |
|:---|:---|:---|:---|
| **Telegram Topic 自动重命名** | [#9921](https://github.com/NousResearch/hermes-agent/pull/9921) PR 就绪 + [#16255](https://github.com/NousResearch/hermes-agent/issues/16255) | **高** | PR 已开，实现完整，与 #10143 多 Agent 路由协同 |
| **平台级工具 Profile** | [#33545](https://github.com/NousResearch/hermes-agent/pull/33545) | **高** | 今日新 PR，解决多平台工具集差异化配置痛点 |
| **单守护多 Agent** | [#9514](https://github.com/NousResearch/hermes-agent/issues/9514) | 中 | 评论最多，但架构改动大，需与 #10143/#10452 协同设计 |
| **持久化会话内存** | [#8457](https://github.com/NousResearch/hermes-agent/issues/8457) | 中 | 基础需求明确，但涉及存储格式/压缩策略争议 |
| **动态模型路由** | [#30652](https://github.com/NousResearch/hermes-agent/issues/30652) | 低-中 | 需求清晰但无 PR，与 #24039 回退链重构相关 |
| **声明式技能保护策略** | [#27997](https://github.com/NousResearch/hermes-agent/issues/27997) | 中 | 安全债务，#28213 技能生命周期透明化为其前置 |
| **GASP 自主进化引擎** | [#18092](https://github.com/NousResearch/hermes-agent/issues/18092) | 低 | 愿景宏大，但依赖前述基础设施（持久内存、技能版本化） |

**路线图信号**：v0.15.0 大概率聚焦 **"平台扩展性 + 运维体验"**（Telegram Topic、工具 Profile、多 Agent 架构），而非底层 AI 能力突破。

---

## 7. 用户反馈摘要

### 😫 真实痛点

| 场景 | 来源 Issue | 情绪强度 |
|:---|:---|:---|
| **"女友提示注入"** — 多用户共享网关时无身份隔离，导致权限逃逸 | [#21574](https://github.com/NousResearch/hermes-agent/issues/21574) | 🔴 极高（成社区梗） |
| **更新即灾难** — v0.13.0 丢模型配置，Kanban 更新后 401，技能更新后无 drift 检测 | [#25272](https://github.com/NousResearch/hermes-agent/issues/25272), [#24186](https://github.com/NousResearch/hermes-agent/issues/24186), [#33314](https://github.com/NousResearch/hermes-agent/issues/33314) | 🔴 高 |
| **内存墙** — 用户修正/偏好反复因字符限制丢失，"教了白教" | [#32064](https://github.com/NousResearch/hermes-agent/issues/32064) | 🟡 中高 |
| **技能黑盒** — 更新后不知道哪些技能被改、能否回滚 | [#20352](https://github.com/NousResearch/hermes-agent/issues/20352), [#28213](https://github.com/NousResearch/hermes-agent/issues/28213) | 🟡 中 |

### 😊 满意点

- 多平台网关架构（Telegram/Discord/Slack 等）覆盖全面，扩展性强
- 技能系统（Skills）的模块化设计受开发者认可
- 自动会话标题生成等"贴心"功能有用户主动提优化（[#16255](https://github.com/NousResearch/hermes-agent/issues/16255)）

---

## 8. 待处理积压

### ⏳ 长期未响应的重要项（提醒维护者）

| Issue/PR | 创建时间 | 天数 | 风险 |
|:---|:---|:---|:---|
| [#508](https://github.com/NousResearch/hermes-agent/issues/508) 模型家族专属系统提示 | 2026-03-06 | **83天** | 质量竞争力：Kilocode 已验证此模式为高影响架构 |
| [#6447](https://github.com/NousResearch/hermes-agent/issues/6447) `/sethome` 写入 config.yaml 而非 .env | 2026-04-09 | **49天** | 配置管理混乱，与安全模型冲突 |
| [#10452](https://github.com/NousResearch/hermes-agent/issues/10452) 多 Telegram Bot 支持 | 2026-04-15 | **43天** | 与 #9514/#10143 形成多 Agent 需求簇，单独解决价值有限 |
| [#14139](https://github.com/NousResearch/hermes-agent/pull/14139) Matrix E2EE 替换 python-olm | 2026-04-22 | **36天** | 安全依赖更新，Rust 替代 C 为行业趋势 |
| [#18092](https://github.com/NousResearch/hermes-agent/issues/18092) GASP 自主进化引擎 | 2026-04-30 | **28天** | 愿景级需求，但需基础设施先行 |

**维护建议**：优先关闭 P1 数据丢失 Bug（#30151, #25272），否则将侵蚀用户信任；同时需对"单网关多 Agent"需求簇（#9514/#10143/#10452/#21574）给出架构 RFC，避免社区 PR 各自为战。

---

*日报生成时间：2026-05-28 | 数据来源：NousResearch/hermes-agent GitHub*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-05-28

> **项目**: [sipeed/picoclaw](https://github.com/sipeed/picoclaw)  
> **日期**: 2026-05-28  
> **分析周期**: 过去 24 小时（2026-05-27）

---

## 1. 今日速览

PicoClaw 今日保持**中高活跃度**，24 小时内产生 4 条新 Issues 和 6 条 PR 更新，但**代码合并不足**——仅 1 条 PR 关闭（#2853 ChatStream 功能），5 条 PR 仍待合并。社区聚焦**通道稳定性**（pico channel 的 tool_calls 丢失、MQTT TLS 安全）和**配置管理**（security.yml 合并、PID 单例校验）。 nightly 构建持续发布，但用户反馈"久未发正式版"，版本节奏或成隐忧。

---

## 2. 版本发布

### 🔹 Nightly Build: v0.2.9-nightly.20260527.28ec5793

| 属性 | 详情 |
|:---|:---|
| **版本号** | `v0.2.9-nightly.20260527.28ec5793` |
| **类型** | 自动化夜间构建（**不稳定，谨慎使用**） |
| **对比基线** | [v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main) |
| **发布时间** | 2026-05-27 |

**⚠️ 关键观察**：自 v0.2.9 以来 main 分支持续积累变更，但**无正式版本发布**。社区 Issue #2952 直接质疑版本发布节奏，反映用户对稳定版的需求压力。

---

## 3. 项目进展

### ✅ 已合并/关闭 PR

| PR | 作者 | 说明 | 链接 |
|:---|:---|:---|:---|
| **#2853** | loafoe | **pico 通道实时流式传输（ChatStream）** — 为 WebSocket 客户端启用逐 token 实时流，核心变更：turnState 流式追踪器管理、ChatStream 集成、流控与错误恢复 | [PR #2853](https://github.com/sipeed/picoclaw/pull/2853) |

**进展评估**：该 PR 关闭标志着 pico 通道从"全量响应"向"实时交互"演进，对 AI 助手场景的体验提升显著。但 PR 创建于 5 月 11 日，历时 **16 天** 才关闭，合并周期偏长。

### 🔄 待合并 PR 队列（5 条）

| PR | 作者 | 状态 | 核心内容 | 链接 |
|:---|:---|:---|:---|:---|
| #2957 | loafoe | **新建** | 修复流式传输中 tool_calls 被误过滤 | [PR #2957](https://github.com/sipeed/picoclaw/pull/2957) |
| #2956 | yuxuan-7814 | **新建** | 修复 security.yml 合并时覆盖 channel enabled 状态 | [PR #2956](https://github.com/sipeed/picoclaw/pull/2956) |
| #2955 | yuxuan-7814 | **新建** | PID 单例校验增加进程身份验证（防 PID 复用攻击） | [PR #2955](https://github.com/sipeed/picoclaw/pull/2955) |
| #2899 | yangwenjie1231 | **stale（7天+）** | MQTT 通道 TLS 验证可配置（安全加固） | [PR #2899](https://github.com/sipeed/picoclaw/pull/2899) |
| #2696 | loafoe | **stale（29天+）** | MCP 动态请求头透传（channel→MCP server） | [PR #2696](https://github.com/sipeed/picoclaw/pull/2696) |

---

## 4. 社区热点

### 🔥 最活跃讨论

| 排名 | Issue/PR | 互动量 | 核心诉求 | 链接 |
|:---|:---|:---|:---|:---|
| 1 | **#2952 [Feature]好久没发新版本了** | 1 评论 | **版本焦虑**：用户汇总 3 个阻塞性问题（exec actions:run 默认缺失、QQ 渠道重启循环、模型提供商 UX），呼吁正式发版 | [Issue #2952](https://github.com/sipeed/picoclaw/issues/2952) |
| 2 | **#2954 [BUG]不支持32位Android系统** | 1 评论 | **移动端兼容性**：Termux/旧 Android 设备用户被排除 | [Issue #2954](https://github.com/sipeed/picoclaw/issues/2954) |
| 3 | **#2953 OpenAI/Codex OAuth 空响应** | 1 评论 | **主流模型适配**：OpenAI 新流式事件格式 `response.output_text.delta` 未被识别 | [Issue #2953](https://github.com/sipeed/picoclaw/issues/2953) |

**诉求分析**：
- **#2952** 是"元诉求"——用户不再满足于 nightly，需要**可预期的稳定版本节奏**
- **#2954 + #2953** 反映用户群体向**移动端开发者**和**前沿模型尝鲜者**扩展，项目需跟上生态变化

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | **#2958** | **pico 通道连续请求时 tool_calls 消息丢失** — 仅首次请求可见，后续工具调用 UI 不渲染 | **#2957**（同日提交，待合并） | [Issue #2958](https://github.com/sipeed/picoclaw/issues/2958) |
| 🔴 **高** | **#2953** | **OpenAI/Codex 返回空响应** — 后端使用新流式事件 `response.output_text.delta`，PicoClaw 忽略导致误判为空 | ❌ 无 | [Issue #2953](https://github.com/sipeed/picoclaw/issues/2953) |
| 🟡 **中** | **#2956（PR 修复中）** | **security.yml 合并覆盖 enabled 状态** — 用户添加凭证后渠道被意外禁用 | **#2956**（待合并） | [PR #2956](https://github.com/sipeed/picoclaw/pull/2956) |
| 🟡 **中** | **#2955（PR 修复中）** | **PID 复用导致启动失败** — systemd-resolved 等进程占用旧 PID，单例校验误杀 | **#2955**（待合并） | [PR #2955](https://github.com/sipeed/picoclaw/pull/2955) |
| 🟢 **低** | **#2954** | 32 位 Android 不支持 — 架构兼容性问题 | ❌ 无 | [Issue #2954](https://github.com/sipeed/picoclaw/issues/2954) |

**稳定性评估**：今日 2 个高严重 bug 中，1 个已有同日 PR 修复（#2957→#2958），响应速度优秀；但 **#2953 无 fix**，且涉及 OpenAI 官方 Codex 集成，影响主流用户路径。

---

## 6. 功能请求与路线图信号

| 需求来源 | 内容 | 可行性判断 | 纳入下版本概率 |
|:---|:---|:---|:---|
| **#2952** | 模型提供商下拉选择、key 复用、API 测试连接、/models 一键添加 | ⭐ 高 — 纯前端/配置层改动，无架构风险 | **高** |
| **#2952** | exec 命令默认带 `actions:run` | ⭐ 高 — 默认参数调整 | **高** |
| **#2952** | QQ 渠道重启循环修复 | ⚠️ 中 — 需复现上下文状态机问题 | **中** |
| **#2696（PR）** | MCP 动态请求头透传 | ⭐ 高 — 已提 PR 29 天，技术就绪 | **中**（需维护者 review） |
| **#2899（PR）** | MQTT TLS 可配置 | ⭐ 高 — 安全合规刚需，PR stale 7 天 | **中** |

**路线图信号**：社区明显向 **"降低配置门槛"**（#2952 的 UX 改进）和 **"企业级安全"**（TLS、PID 校验、请求头隔离）两极发展，项目或需明确 0.3.0 的优先级定位。

---

## 7. 用户反馈摘要

### 😫 痛点
> *"exec命令的actions:run问题，多数模型首次会默认不带，导致报错模型额外多余运行命令"*  
> — **配置隐性依赖**，新手易踩坑，且造成 token 浪费

> *"QQ渠道进行重启时...只有清除历史上下文才不会继续重启"*  
> — **状态机缺陷**，上下文污染导致无限循环，严重影响自动化场景

> *"picoclaw好像不太遵循agent.md"*  
> — **协议一致性存疑**，用户预期与实际行为偏差

### 😐 期望
> *"模型界面应该默认显示已有key保存的提供商，添加模型提供商可以下拉选择，key复用"*  
> — **配置管理简化**，当前多提供商重复录入体验差

> *"api测试连接获取/models模型列表一键添加保存"*  
> — **即时验证闭环**，减少"配完发现连不通"的挫败感

### 😊 认可
- ChatStream 实时流式功能最终合并（#2853），pico 通道交互体验获提升

---

## 8. 待处理积压

### ⏰ 需维护者紧急关注

| PR/Issue | 积压时间 | 风险 | 行动建议 | 链接 |
|:---|:---|:---|:---|:---|
| **#2696** | **29 天** | MCP 动态头透传 — 企业多租户场景刚需，长期未 review 可能流失 B 端用户 | 优先 review，或明确拒绝理由 | [PR #2696](https://github.com/sipeed/picoclaw/pull/2696) |
| **#2899** | **7 天（stale）** | MQTT TLS 安全加固 — 合规红线，默认 InsecureSkipVerify=true 存在安全责任 | 快速合并或要求修改 | [PR #2899](https://github.com/sipeed/picoclaw/pull/2899) |
| **#2952** | — | 版本发布节奏质疑 — 若持续无响应，社区信任度下降 | 维护者回复 roadmap，或发布 patch 版本 | [Issue #2952](https://github.com/sipeed/picoclaw/issues/2952) |

---

## 📊 健康度仪表盘

| 指标 | 今日值 | 趋势 | 评估 |
|:---|:---|:---|:---|
| 日新增 Issue | 4 | → | 正常 |
| 日新增 PR | 5（含 1 关闭） | → | 活跃但合并率低 |
| PR 合并周期 | #2853: 16 天 | ⚠️ | 偏长 |
| 高严重 Bug 修复响应 | #2958: **同日** PR | ✅ | 优秀 |
| 社区情绪 | 版本焦虑 + 功能诉求 | ⚠️ | 需维护者沟通 |
| 安全债务 | MQTT TLS + PID 复用 | 🔴 | 有 PR 待合并 |

---

*日报基于 GitHub 公开数据生成，仅供项目健康度参考。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-05-28

> **项目**: [NanoClaw](https://github.com/qwibitai/nanoclaw) — AI 智能体与个人 AI 助手开源框架  
> **数据周期**: 2026-05-27 至 2026-05-28（UTC）

---

## 1. 今日速览

今日 NanoClaw 社区保持**中高活跃度**，24 小时内 9 个 PR 更新（4 个已关闭/合并，5 个待审阅），1 个长期 Issue 关闭。核心开发节奏聚焦于**多平台兼容性修复**（NixOS 网络、Signal 服务重启、Teams 文件传输）与**CLI 体验改进**。值得注意的是，社区关注度最高的多提供商支持议题（Issue #80）在经历 33 条评论讨论后于今日关闭，但关闭原因待确认是否为实质解决或议题清理。PR 提交者 `eldar702` 单日贡献 4 个修复 PR，成为今日最活跃贡献者。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的 PR

| PR | 作者 | 核心改进 | 项目推进 |
|:---|:---|:---|:---|
| [#5](https://github.com/nanocoai/nanoclaw/pull/5) | gavrielc | **修复跨群组调度任务 JID 错误**：IPC 消息中容器误传自身 JID，改为从 `registeredGroups` 查找目标群组正确 JID | 消除多群组场景下的消息路由错误，提升隔离性与可靠性 |
| [#2629](https://github.com/nanocoai/nanoclaw/pull/2629) | mois-ilya | **NixOS 容器网络兼容**：`--add-host=host.docker.internal:host-gateway` 在 NixOS 失效，改用 `--network=host` + `127.0.0.1` 网关 | 扩展官方支持平台至 NixOS，降低特定发行版用户门槛 |
| [#2577](https://github.com/nanocoai/nanoclaw/pull/2577) | HokutoMorita | "miss pr"（无实质内容，疑似误提交） | — |
| [#2623](https://github.com/nanocoai/nanoclaw/pull/2623) | s1250026 | "miss pr"（无实质内容，疑似误提交） | — |

**整体评估**：实质性合并 2 项，均为**生产环境稳定性修复**。跨群组 JID 修复消除长期存在的 IPC 信任边界缺陷；NixOS 支持扩展用户基础。2 个 "miss pr" 提示需关注贡献者工作流或 CI 门禁是否足够严格。

---

## 4. 社区热点

### 🔥 Issue #80: 多提供商支持（Claude/Anthropic 替代方案）
- **链接**: [nanocoai/nanoclaw#80](https://github.com/nanocoai/nanoclaw/issues/80)
- **状态**: 今日 **CLOSED** | 创建: 2026-02-04 | 评论: **33** | 👍: **60**
- **核心诉求**: 
  - 用户报告 Anthropic 因"与 OpenClaw 配合使用"封禁订阅，担忧 NanoClaw 用户面临同样风险
  - 请求支持 OpenCode、Codex、Gemini 等替代提供商，降低对单一供应商的依赖
  - 特别提及 [OpenCode](https://github.com/opencode-ai/opencode) 作为开源 Claude Code CLI 竞品，已内置多模型支持

**关闭状态分析**：该 Issue 为**低优先级 Enhancement**，但社区情绪强烈（60 赞，33 评论）。今日关闭未伴随相关功能 PR，可能为：
- 维护者判定与项目路线图不符（架构锁定 Anthropic API）
- 议题清理（创建已逾 4 个月）
- **风险信号**：若未实质解决，可能引发社区分叉或用户流失

---

## 5. Bug 与稳定性

| 严重程度 | PR/Issue | 描述 | Fix PR 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#2626](https://github.com/nanocoai/nanoclaw/pull/2626) | **Signal 服务重启静默失败**：`launchctl kickstart -k` 因 `stdio: 'ignore'` 导致错误被吞，前置 `unload` 后操作无提示失效，向导报告"成功"但实际未重启 | **待审阅**（eldar702, 2026-05-27）|
| 🟡 **中** | [#2627](https://github.com/nanocoai/nanoclaw/pull/2627) | **MCP 反应表情符号 schema 与频道现实不匹配**：文档要求 shortcode（`thumbs_up`），但 WhatsApp/Discord/Telegram/Teams/GChat 需 unicode，仅 Slack 支持 shortcodes，导致跨平台反应静默失败 | **待审阅**（eldar702, 2026-05-27）|
| 🟡 **中** | [#2628](https://github.com/nanocoai/nanoclaw/pull/2628) | **CLI `--id` 标志被忽略**：`ncl groups create --id daily-os` 实际返回 UUID，用户自定义 ID 被 `randomUUID()` 静默覆盖，破坏自动化/命名约定工作流 | **待审阅**（eldar702, 2026-05-27）|
| 🟢 **低** | [#2625](https://github.com/nanocoai/nanoclaw/pull/2625) | **Teams 文件传输双向禁用**：`supportsFiles: false` 硬编码导致个人聊天中纸夹上传 UI 禁用，且 bot 端 `send_file` 被静默丢弃 | **待审阅**（eldar702, 2026-05-27）|

**稳定性趋势**：今日 4 个待审 PR 均含 **"Closes #XXXX"** 关联 Issue，修复覆盖 Signal、Teams、MCP 协议、CLI 四个子系统。`eldar702` 的单日集中修复表明可能为内部维护者或深度贡献者响应近期用户反馈。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 可行性信号 | 纳入下一版本概率 |
|:---|:---|:---|:---|
| **多模型/多提供商架构**（OpenCode, Codex, Gemini, 等） | Issue #80（33 评论, 60 👍）| ❌ 无相关 PR，Issue 被关闭 | **低** — 架构决策层未表态开放 |
| **MCP 服务器级工具禁用**（`disabledTools` in `McpServerConfig`） | PR [#2624](https://github.com/nanocoai/nanoclaw/pull/2624) | ✅ 已提交，标注 `[follows-guidelines]`，类型为 Refactor | **高** — 配置粒度增强，符合 MCP 生态演进 |

**路线图判断**：项目当前明显**优先深耕 Anthropic Claude 生态集成**（MCP 协议、多频道桥接），而非扩展模型提供商。这与社区呼声形成张力，需关注是否会在未来版本重新评估。

---

## 7. 用户反馈摘要

### 痛点提炼（来自 Issue #80 评论生态）
- **供应商锁定焦虑**："Anthropic is already shutting down peoples' subs for using them with OpenClaw" — 用户将 NanoClaw 与 OpenClaw 类比，担忧合规/ToS 风险
- **开源替代诉求**：明确指向 [OpenCode](https://github.com/opencode-ai/opencode) 作为"开源 Claude Code CLI 竞品"，暗示用户群对**完全开源栈**的偏好
- **企业/自动化场景**：`--id` 被覆盖（PR #2628）反映基础设施即代码（IaC）用户的命名规范需求

### 满意度信号
- Teams 文件传输修复（#2625）、NixOS 支持（#2629）显示项目**积极响应边缘平台需求**
- Signal 频道维护（#2626）表明对隐私敏感用户群体的持续投入

---

## 8. 待处理积压

| 项目 | 时长 | 风险 | 建议行动 |
|:---|:---|:---|:---|
| **PR #2624** — MCP 服务器级 `disabledTools` | 刚提交（<1天） | 无即时风险，但属配置架构改进 | 维护者审阅，评估与现有 `McpServerConfig` 的向后兼容 |
| **Issue #2390** — CLI `--id` 被忽略 | 待关联 PR #2628 关闭 | 自动化用户工作流受阻 | 确认 #2628 测试覆盖后合并 |
| **Issue #2569** — MCP 反应表情符号（Part 1）| 待 PR #2627 | 跨平台反应功能半失效 | 需 Part 2 规划（Slack shortcode ↔ unicode 转换层）|
| **"miss pr" 模式** — #2577, #2623 | 反复出现 | CI/贡献者教育成本 | 强化 PR 模板校验或预提交钩子 |

---

**日报生成时间**: 2026-05-28  
**数据置信度**: 基于 GitHub 公开 API 数据，Issue/PR 摘要来自原始描述截断

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-05-28

> **项目**: [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)  
> **日期**: 2026-05-28  
> **分析周期**: 过去 24 小时（2026-05-27）

---

## 1. 今日速览

NullClaw 今日保持**中等活跃度**，社区共产生 7 条有效更新（3 Issues + 4 PRs）。核心进展集中在 **Windows 网络栈稳定性修复**的收尾工作——Issue #890 已关闭，关联的 DNS 解析回归测试 PR #892 同步合并，标志着上月引入的 Windows 主机解析故障得到系统性解决。与此同时，2 个新暴露的配置层 Bug（#936、#937）显示用户对**自定义 OpenAI 兼容提供商**和**配置语义正确性**的关注度正在上升。2 个待合并 PR 均涉及底层兼容性（Zig 0.16 构建、POSIX nanosleep），项目正处于**基础设施加固期**，暂无新功能发布。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭 PR

| PR | 作者 | 核心贡献 | 项目推进 |
|:---|:---|:---|:---|
| [#892](https://github.com/nullclaw/nullclaw/pull/892) `test(compat/net): add Windows getAddressList regression tests` | [fatihaziz](https://github.com/fatihaziz) | 为 Windows `getAddressList` 添加回归测试套件，覆盖 `std.Io` 驱动的 `getAddressListWindows` 解析器（commits: 973bfa4, dfc9f3b, d3c7ef7） | **质量基建**：将 #890 的手工修复转化为自动化防护网，防止 DNS 解析回退到 localhost-only stub |
| [#891](https://github.com/nullclaw/nullclaw/pull/891) `fix(providers): preserve curl probe transport failures` | [vernonstinebaker](https://github.com/vernonstinebaker) | 在 OpenAI 兼容提供商的健康探针路径中，保留 curl 传输层错误（DNS/连接/超时/TLS/读写等 8 类错误），不再统一折叠为 `AllProvidersFailed` | **可观测性提升**：运维侧可区分"网络不可达"与"服务不可用"，缩短故障定位时间 |

**整体评估**：今日合并聚焦**测试覆盖**与**错误透传**，属于"还债式"工程改进。项目未向功能面扩展，但 Windows 生产环境的可靠性基线得到巩固。

---

## 4. 社区热点

| 热度指标 | Issue/PR | 分析 |
|:---|:---|:---|
| **历史评论最多** | [#890](https://github.com/nullclaw/nullclaw/issues/890) (1 评论, 👍×1) | Windows 网络故障的**长尾影响**——尽管已关闭，但其暴露的 `HostResolutionFailed` → `AllProvidersFailed` 错误链仍是用户搜索高频词 |
| **今日最新 & 潜在影响最大** | [#936](https://github.com/nullclaw/nullclaw/issues/936) | 自定义 OpenAI 兼容提供商**模型发现机制失效**：用户通过 `/models` 菜单选择自定义提供商时，系统跳过 `/v1/models` 查询，直接回退到硬编码的 `anthropic_fallback` 列表 |

**诉求洞察**：#936 揭示了一个**架构层假设偏差**——NullClaw 的交互式模型选择菜单似乎将"自定义提供商"与"Anthropic 模型池"隐式绑定。这反映出早期设计可能以 Claude 为中心，随着社区对 OpenAI 兼容生态（Ollama、vLLM、本地网关等）的需求增长，配置解析与 UI 状态的耦合需要重构。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#936](https://github.com/nullclaw/nullclaw/issues/936) | 自定义 OpenAI 兼容提供商模型发现回退至硬编码 Claude 列表，导致用户无法使用非 Anthropic 模型 | **无** | 待修复 |
| 🟡 **中** | [#937](https://github.com/nullclaw/nullclaw/issues/937) | `compact_context` 配置标志被解析但**从未使用**，存在配置语义与实际行为不一致的"死代码"风险 | **无** | 待修复 |
| 🟢 **已解决** | [#890](https://github.com/nullclaw/nullclaw/issues/890) | Windows `HostResolutionFailed`（根因：`getAddressList` localhost-only stub） | [#892](https://github.com/nullclaw/nullclaw/pull/892) + runtime commits | ✅ 关闭 |

**稳定性趋势**：Windows 网络层修复闭环完成，但**配置/提供商层的语义正确性**成为新的质量薄弱点。#936 的"硬编码回退"模式若广泛存在，可能暗示类似问题潜伏在其他代码路径。

---

## 6. 功能请求与路线图信号

| 来源 | 信号 | 纳入下一版本可能性 |
|:---|:---|:---|
| [#936](https://github.com/nullclaw/nullclaw/issues/936) | 自定义 OpenAI 兼容提供商需要**动态模型发现**（`/v1/models` 端点查询） | **高**——属于现有功能的 Bug 修复而非新需求，且直接影响多提供商架构的核心承诺 |
| [#937](https://github.com/nullclaw/nullclaw/issues/937) | `compact_context` 要么实现其语义（上下文压缩），要么从配置中移除 | **中**——技术债清理，取决于维护者对上下文压缩功能的 roadmap 优先级 |
| [#887](https://github.com/nullclaw/nullclaw/pull/887) | Zig 0.16 构建兼容性（Win/Linux） | **高**——语言版本升级属于维持项目可构建性的基础工作 |

**路线图推测**：NullClaw 下一版本（若遵循近期节奏） likely 为**补丁版本**，聚焦：
1. 自定义提供商模型发现修复
2. Zig 0.16 构建支持合并
3. 配置层死代码清理

暂无证据表明有大功能迭代（如多模态、MCP 协议支持等）进入开发。

---

## 7. 用户反馈摘要

| 维度 | 提炼 |
|:---|:---|
| **痛点** | Windows 用户曾长期受困于**不透明错误链**（`HostResolutionFailed` → `AllProvidersFailed`），故障定位成本极高；自定义提供商用户发现**配置与行为不符**（选了自定义提供商却出现 Claude 模型） |
| **使用场景** | 本地/私有部署 OpenAI 兼容 API（如 Ollama、llama.cpp server）通过 Telegram Bot 交互；跨平台开发（Windows 为主力桌面环境） |
| **满意点** | 社区响应速度尚可——#890 从报告到关闭约 22 天，且附带了回归测试 |
| **不满点** | 配置系统的**"表面灵活、实际受限"**——`compact_context` 存在却无功能，`custom` 提供商类型存在却回退硬编码列表，用户信任度受损 |

---

## 8. 待处理积压

| PR/Issue | 创建时间 | 当前状态 | 风险提示 |
|:---|:---|:---|:---|
| [#887](https://github.com/nullclaw/nullclaw/pull/887) `Fix build with zig v0.16 for win/linux` | 2026-05-04 | **OPEN** 23 天 | 语言版本升级 PR 长期悬置，可能因 Zig 0.16 正式发布而阻塞新贡献者入门 |
| [#878](https://github.com/nullclaw/nullclaw/pull/878) `fix(compat): use nanosleep on POSIX in thread.sleep` | 2026-04-30 | **OPEN** 28 天 | 核心运行时修复（POSIX 线程实际挂起 vs 协作式 yield），影响资源效率，接近 1 个月未审阅 |
| — | — | — | 建议维护者优先审阅 #878（性能/正确性）和 #887（构建门槛），两者均为**基础设施级**阻塞 |

---

> **数据健康度评分**: ⭐⭐⭐☆☆ (3/5)  
> 理由：Bug 修复闭环良好，但待合并 PR 积压偏长（最久 28 天），新 Issue 暴露配置层设计债务，社区互动密度偏低（多数条目 0 评论）。

*日报基于 GitHub 公开数据生成，未包含私有讨论或外部沟通渠道信息。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-05-28

## 1. 今日速览

IronClaw 今日呈现**高强度迭代态势**：24小时内 50 个 PR 更新（29 条已合并/关闭，21 条待审），28 个 Issues 活跃（23 条新开或更新）。核心团队正全力推进 **Reborn 架构落地**——今日合并的 15 个 PR 中，12 个直接关联 Reborn 模块（认证流、上下文压缩、技能激活、子代理生命周期等），显示项目处于关键重构期。值得注意的是，**Nightly E2E 测试失败**（[#4108](https://github.com/nearai/ironclaw/issues/4108)）与背景子代理模式的紧急禁用（[#4148](https://github.com/nearai/ironclaw/pull/4148)）暴露出稳定性风险，团队响应迅速但技术债务压力显现。社区层面，第三方桌面客户端开发者集中提交 4 个 Gateway API 缺口 Issue，反映生态扩展需求与官方 API 完备度之间的差距。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 今日已合并/关闭的核心 PR（按影响面排序）

| PR | 作者 | 核心贡献 | 关联模块 |
|:---|:---|:---|:---|
| [#4111](https://github.com/nearai/ironclaw/pull/4111) | henrypark133 | **GSuite OAuth 后端落地**：Google 回调码交换、token 持久化、类型化凭证故障映射 | Reborn/认证 |
| [#4148](https://github.com/nearai/ironclaw/pull/4148) | henrypark133 | **紧急禁用背景子代理模式**：移除 `run_in_background` 公开 schema，默认阻塞式执行，修复 [#4084](https://github.com/nearai/ironclaw/issues/4084) 结果滞留问题 | Reborn/AgentLoop |
| [#4089](https://github.com/nearai/ironclaw/pull/4089) | zmanian | 背景子代理完成通知修复（被 #4148 覆盖，但为同一问题的根因修复） | Reborn/AgentLoop |
| [#4110](https://github.com/nearai/ironclaw/pull/4110) | henrypark133 | **Reborn 上下文压缩 Phase 1**：策略槽位、执行器阶段、主机压缩端口、系统推理适配器 | Reborn/M3-agentloop |
| [#4140](https://github.com/nearai/ironclaw/pull/4140) | serrrfirat | 模型内容与安全摘要分离：消除工具结果字符串猜测，结构化结果回放 | Reborn/提示工程 |
| [#4141](https://github.com/nearai/ironclaw/pull/4141) | serrrfirat | 提示文本验证策略类型化：安全摘要 vs 可信技能指令区分策略 | Reborn/安全 |
| [#4070](https://github.com/nearai/ironclaw/pull/4070) | hanakannzashi | 认证刷新清理生命周期：token 刷新合约、范围重验证、所有权感知隔离 | Reborn/认证 |
| [#4105](https://github.com/nearai/ironclaw/pull/4105) | serrrfirat | HTTP `save_to` 权限修复：要求预准备写能力挂载视图，统一文件系统入口平面 | Reborn/工具 |
| [#4139](https://github.com/nearai/ironclaw/pull/4139) | serrrfirat | 回复完成停止策略修复：回复专属流转接现有停止策略，避免执行器旁路 | Reborn/执行器 |
| [#4136](https://github.com/nearai/ironclaw/pull/4136) | serrrfirat | 缺失运行时凭证阻塞认证门：将终端义务失败转为 `BlockedAuth` 状态 | Reborn/认证 |

**里程碑意义**：Reborn 认证栈（OAuth/GSuite/token 生命周期）今日完成闭环，上下文压缩启动 Phase 1，AgentLoop 执行可靠性通过紧急修复得到保障。项目整体向 **Reborn 生产就绪** 目标推进约 15-20%。

---

## 4. 社区热点

### 讨论最活跃的议题

| 排名 | Issue/PR | 评论数 | 热度分析 |
|:---|:---|:---|:---|
| 1 | [#3280](https://github.com/nearai/ironclaw/issues/3280) [Reborn] Add ProductWorkflow and InboundTurnService facade | 4 评论 | **架构设计级议题**，定义 ProductAdapter → ProductWorkflow → Reborn 服务的分层契约，12 个关联 Issue 的父节点，是 Reborn 前端集成的总线规范 |
| 2 | [#1907](https://github.com/nearai/ironclaw/issues/1907) Feature Request: 对话/线程删除功能 | 2 评论, 👍1 | **用户痛点持久化**：创建 4 月 2 日，今日再活跃，反映 WebUI 基础 CRUD 缺失对用户体验的累积伤害 |
| 3 | [#3281](https://github.com/nearai/ironclaw/issues/3281) [Reborn] Add EventStreamManager | 2 评论 | **实时流基础设施**：Web SSE/WebSocket/API 订阅的持久投影扇出，与 #3280 共同构成 Reborn 事件驱动架构双支柱 |

### 生态扩展信号：第三方桌面客户端驱动 API 缺口暴露

独立开发者 **abbyshekit** 单日提交 4 个 Gateway API 缺失 Issue（[#4150](https://github.com/nearai/ironclaw/issues/4150)-[#4153](https://github.com/nearai/ironclaw/issues/4153)），构建 [Tauri v2 + SvelteKit macOS 客户端](https://github.com/abbyshekit/ironclaw-desktop)：

| Issue | 阻塞功能 | 紧迫度 |
|:---|:---|:---|
| [#4150](https://github.com/nearai/ironclaw/issues/4150) | `POST /api/routines` 创建例行程序 | 高 |
| [#4151](https://github.com/nearai/ironclaw/issues/4151) | `DELETE /api/memory` 删除知识文档 | 高 |
| [#4152](https://github.com/nearai/ironclaw/issues/4152) | `POST /api/auth/signout` 服务端登出 | 高 |
| [#4153](https://github.com/nearai/ironclaw/issues/4153) | `GET /api/routines/recent-runs` 跨例行程序最近运行 | 高 |

**诉求本质**：IronClaw 的 Gateway API 目前以 WebUI 自用为设计中心，缺乏第三方客户端所需的完整 REST 语义（尤其是状态变更操作）。这既是生态扩展的瓶颈，也是 API 设计成熟度不足的指标。

---

## 5. Bug 与稳定性

| 严重度 | Issue/PR | 描述 | 状态 |
|:---|:---|:---|:---|
| 🔴 **P0 - 已修复** | [#4148](https://github.com/nearai/ironclaw/pull/4148) / [#4084](https://github.com/nearai/ironclaw/issues/4084) | 背景子代理完成后父代理无通知，结果永久滞留；更深层风险：子代理在父 turn 结束后写入 `LoopResultRef` 可能导致并发安全问题 | **已禁用该模式**（紧急修复）|
| 🔴 **P0 - 持续** | [#4108](https://github.com/nearai/ironclaw/issues/4108) | Nightly E2E 失败：`Full E2E / E2E (v2-engine)` job 失败，commit `9df5e8d` | **待调查**，无关联修复 PR |
| 🟡 **P1** | [#3436](https://github.com/nearai/ironclaw/issues/3436) | DeepSeek API 400 错误：`reasoning_content` 必须在 thinking 模式下回传 | 开放，1 评论，需 provider 层修复 |
| 🟡 **P1** | [#4106](https://github.com/nearai/ironclaw/issues/4106) | 安装向导沙盒镜像检查绕过 `SANDBOX_IMAGE` 环境变量，始终探测硬编码默认值 | 开放，配置优先级 bug |
| 🟡 **P1** | [#4115](https://github.com/nearai/ironclaw/issues/4115) | 微信渠道移除流程 UI 缺陷：Remove 按钮 hover 前不可见 | 开放，CSS/设计系统问题 |

**稳定性评估**：背景子代理的紧急禁用显示 Reborn 并发模型存在**设计级隐患**——今日 [#4147](https://github.com/nearai/ironclaw/issues/4147) 已专门开启"持久化后台子代理完成交付"的设计议题，表明团队意识到需要根本性重构而非简单修复。E2E 失败与沙盒配置 bug 则指向**本地开发/CI 环境的配置管理债务**。

---

## 6. 功能请求与路线图信号

| 功能请求 | 来源 | 与现有 PR 的关联 | 纳入可能性 |
|:---|:---|:---|:---|
| **声明式 Reborn 能力策略**（本地开发授权） | [#4120](https://github.com/nearai/ironclaw/issues/4120) serrrfirat | **PR #4127 已提交**：将内置授权移入 TOML 策略文件 | ⭐⭐⭐⭐⭐ 极高（Issue + PR 同日创建） |
| **Reborn CLI provider 添加/登录对等性** | [#4118](https://github.com/nearai/ironclaw/issues/4118) serrrfirat | 依赖 #4111 GSuite OAuth 后端 | ⭐⭐⭐⭐☆ 高（核心团队规划内） |
| **环境运行时上下文注入提示包** | [#4149](https://github.com/nearai/ironclaw/issues/4149) henrypark133 | 与 #4110 上下文压缩相关，但需新设计 | ⭐⭐⭐☆☆ 中（架构议题，非紧急） |
| **对话/线程删除** | [#1907](https://github.com/nearai/ironclaw/issues/1907) saga197410qq | 无关联 PR，WebUI v1 遗留功能 | ⭐⭐☆☆☆ 低（Reborn 优先，v1 维护模式）|
| **桌面客户端 API 补全**（4 个端点） | [#4150](https://github.com/nearai/ironclaw/issues/4150)-[#4153](https://github.com/nearai/ironclaw/issues/4153) abbyshekit | 无关联 PR，需 Gateway 团队响应 | ⭐⭐⭐☆☆ 中（生态价值高，但非核心路线图）|

**路线图信号**：Reborn 的"配置即代码"史诗（#3036）正在加速，能力策略声明化（#4127）是今日最明确的下一版本候选功能。GSuite 集成进入收尾阶段，但 token 刷新（[#4113](https://github.com/nearai/ironclaw/issues/4113), [#4160](https://github.com/nearai/ironclaw/issues/4160)）和适配器边界重构（[#4161](https://github.com/nearai/ironclaw/issues/4161)）显示**质量加固仍需 1-2 个迭代周期**。

---

## 7. 用户反馈摘要

### 真实痛点

| 用户/场景 | 反馈 | 来源 |
|:---|:---|:---|
| **桌面客户端开发者 abbyshekit** | "Gateway API 缺少创建/删除/登出/历史查询端点，阻塞原生客户端 UX" | [#4150](https://github.com/nearai/ironclaw/issues/4150)-[#4153](https://github.com/nearai/ironclaw/issues/4153) |
| **DeepSeek 用户 Serhioromano** | "启用 reasoning 模式后 API 400 错误，无法使用 thinking 功能" | [#3436](https://github.com/nearai/ironclaw/issues/3436) |
| **Web 用户 saga197410qq** | "无法删除旧对话，只能不断创建新的，界面混乱" | [#1907](https://github.com/nearai/ironclaw/issues/1907) |
| **微信渠道用户 sunglow666** | "移除确认按钮在 hover 前几乎不可见，误操作风险" | [#4115](https://github.com/nearai/ironclaw/issues/4115) |
| **部署用户 Gumbees** | "SANDBOX_IMAGE 环境变量被安装向导忽略，无法自定义沙盒镜像" | [#4106](https://github.com/nearai/ironclaw/issues/4106) |

### 满意度信号

- **Reborn 本地开发体验**：PR #4155、#4156 显示团队快速响应"yolo 模式"路径别名和工具授权问题，核心开发者体验受重视
- **安全设计**：#4141、#4140 的精细化提示验证策略，显示对提示注入攻击的防御深度

---

## 8. 待处理积压

| Issue | 创建日期 | 最后更新 | 积压天数 | 风险说明 |
|:---|:---|:---|:---|:---|
| [#1907](https://github.com/nearai/ironclaw/issues/1907) 对话/线程删除 | 2026-04-02 | 2026-05-27 | **56 天** | WebUI v1 基础功能缺失，用户持续抱怨，Reborn 迁移不应放弃此功能 |
| [#3280](https://github.com/nearai/ironclaw/issues/3280) ProductWorkflow 门面 | 2026-05-06 | 2026-05-27 | 22 天 | Reborn 前端集成总线，12 个下游 Issue 阻塞，架构关键路径 |
| [#3281](https://github.com/nearai/ironclaw/issues/3281) EventStreamManager | 2026-05-06 | 2026-05-27 | 22 天 | 实时流基础设施，与 #3280 共同决定 Reborn 事件架构成熟度 |
| [#3436](https://github.com/nearai/ironclaw/issues/3436) DeepSeek reasoning 400 | 2026-05-09 | 2026-05-27 | 19 天 | 第三方 provider 兼容性，影响多模型策略用户 |
| [#4108](https://github.com/nearai/ironclaw/issues/4108) Nightly E2E 失败 | 2026-05-27 | 2026-05-27 | 1 天 | **需 24 小时内响应**，CI 红线 |

**维护者行动建议**：
1. **立即**：指派 #4108 E2E 失败根因调查，阻断 Reborn 合并窗口风险
2. **本周**：将 #1907 对话删除纳入 WebUI v2 设计，或提供 v1 临时修复
3. **下周**：#3280/#3281 需要架构评审会议，协调 12 个关联 Issue 的依赖关系

---

*日报生成时间：2026-05-28 | 数据来源：GitHub API 聚合 | 项目地址：[nearai/ironclaw](https://github.com/nearai/ironclaw)*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-05-28

> **项目地址**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
> **分析日期**: 2026-05-28（覆盖 2026-05-27 24小时周期）

---

## 1. 今日速览

LobsterAI 今日呈现**高活跃度发布日**特征：24小时内产生 **23 个 PR 更新**（18 待合并/5 已关闭）及 **1 个正式版本发布**，但社区 Issue 侧相对静默，仅 2 条活跃且均为用户报障，无官方关闭。项目核心推进集中在 **2026.5.27 版本发布**（媒体生成能力上线），同时存在大量 4 月初提交的 PR 今日被批量更新标签（标记 `stale`），显示维护团队正在进行**积压清理**而非增量开发。整体健康度：**功能迭代积极，但用户反馈响应与长期 PR 治理存在结构性压力**。

---

## 2. 版本发布

### 🚀 LobsterAI 2026.5.27 已发布
**发布日期**: 2026-05-27 | [查看 Release](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.5.27)

| 维度 | 详情 |
|:---|:---|
| **核心亮点** | 媒体生成（视频）能力正式上线，集成 Kling V3、Douyin 等服务商；新增基于配额额度（quota-based）的权益控制体系 |
| **协作增强** | 输入区图片附件支持点击预览（复用 ImagePreviewModal） |
| **生态同步** | OpenClaw 插件/技能双向同步机制 |
| **基础设施** | HTML 分享服务；网关重启稳定性修复 |

**关键 PR 来源**: 
- 媒体生成: [#2064](https://github.com/netease-youdao/LobsterAI/pull/2064) by @liliangcai
- 图片预览: [#2061](https://github.com/netease-youdao/LobsterAI/pull/2061) by @liuzhq1986

> ⚠️ **迁移注意事项**: 媒体生成为付费功能，需关注配额系统对接；OpenClaw 双向同步可能改变现有插件加载行为，建议测试自定义插件兼容性。

---

## 3. 项目进展

### 今日已合并/关闭的关键 PR

| PR | 作者 | 状态 | 贡献说明 |
|:---|:---|:---|:---|
| [#2064](https://github.com/netease-youdao/LobsterAI/pull/2064) | @fisherdaddy | **已关闭**（发布合并） | **媒体生成主线功能** — 集成 Kling V3 视频生成，配额权益系统，HTML 分享服务，OpenClaw 双向同步及稳定性修复 |
| [#2061](https://github.com/netease-youdao/LobsterAI/pull/2061) | @liuzhq1986 | **已关闭** | **协作体验优化** — 输入区图片附件点击预览，减少用户反复上传确认的操作摩擦 |

### 待合并中的高价值 PR

| PR | 作者 | 状态 | 预期价值 |
|:---|:---|:---|:---|
| [#2060](https://github.com/netease-youdao/LobsterAI/pull/2060) | @btc69m979y-dotcom | **待合并** | **Kit（专家套件）商店** — 技能打包安装、对话集成、跨会话持久化，可能重塑 LobsterAI 的 Skill 分发模式 |
| [#2063](https://github.com/netease-youdao/LobsterAI/pull/2063) | @fisherdaddy | **待合并** | IM 回复作用域修复 — 限制回复组装至当前轮次，剥离 thinking blocks，解决多轮对话上下文污染 |

**整体推进评估**: 今日项目完成 **从"工具型 AI"向"内容生产型 AI"的关键跃迁**（视频生成上线），同时 Kit 商店 PR 预示平台化生态建设加速。但 18 个待合并 PR 中 14 个为 4 月初提交的"僵尸 PR"，实际有效并行开发约 4 条主线。

---

## 4. 社区热点

> 注：今日 Issues/PRs 评论数均为 0 或 `undefined`，无传统意义上的"讨论热点"。以下基于**用户影响面**和**信息完整性**识别关键项。

### 🔥 最高关注度：会员登录失败（直接影响付费转化）

| 项目 | 详情 |
|:---|:---|
| **Issue** | [#1903 会员登录频繁失败](https://github.com/netease-youdao/LobsterAI/issues/1903) |
| 作者 | @zhahongan-ctrl |
| 状态 | **OPEN**（创建于 2026-05-07，已持续 21 天） |
| 核心诉求 | 会员登录系统不稳定，导致**已付费用户无法使用网易付费模型** |

**背后分析**: 
- **商业阻断型 Bug**：非功能缺陷，直接切断付费用户价值兑现路径
- 截图显示为移动端/Web 端登录界面，可能涉及有道统一认证服务与 LobsterAI 的会话同步问题
- 21 天未关闭且今日仍被活跃更新，说明修复方案未根治或存在回归

### ⚡ 新报问题：任务时长限制阻断长时自动化

| 项目 | 详情 |
|:---|:---|
| **Issue** | [#2062 任务超过最大时长](https://github.com/netease-youdao/LobsterAI/issues/2062) |
| 作者 | @AK-blank |
| 状态 | **OPEN**（2026-05-27 新建） |
| 核心诉求 | 24 小时连续运行任务被强制终止，**任务状态不透明**（停止/后台运行未知） |

**背后分析**: 
- 用户尝试构建**长时自动化工作流**（可能对标 OpenClaw 的 Scheduled Task 能力）
- 报错信息提示"可继续执行"但实际行为模糊，暴露**任务生命周期管理**的设计缺陷
- 与今日发布的 2026.5.27 版本无直接关联，但可能受新配额系统影响

---

## 5. Bug 与稳定性

| 优先级 | 问题 | 来源 | 状态 | Fix PR | 影响评估 |
|:---|:---|:---|:---|:---|:---|
| 🔴 **P0** | 会员登录频繁失败，付费模型无法使用 | [#1903](https://github.com/netease-youdao/LobsterAI/issues/1903) | 21 天未修复 | **无** | **商业核心路径阻断**，直接影响 ARR |
| 🟡 **P1** | 任务超最大时长被强制停止，状态不透明 | [#2062](https://github.com/netease-youdao/LobsterAI/issues/2062) | 新建待响应 | **无** | 长时自动化场景不可用 |
| 🟢 **P2** | 网关重启导致服务中断（2026.5.27 提及修复） | Release Note | **已修复** | [#2064](https://github.com/netease-youdao/LobsterAI/pull/2064) | 基础设施稳定性 |

> **风险评估**: P0 级登录问题 21 天未关闭，在今日发布新版本背景下形成**"功能迭代快于基础体验修复"**的反差，可能引发付费用户流失。

---

## 6. 功能请求与路线图信号

### 从 PR 推断的下一版本方向

| 功能方向 | 支撑 PR | 成熟度 | 纳入概率 |
|:---|:---|:---|:---|
| **Kit（专家套件）生态** | [#2060](https://github.com/netease-youdao/LobsterAI/pull/2060) | 完整实现 + 设计文档 | **极高** — 可能随 2026.6.x 发布 |
| **定时任务 UX 全面升级** | [#1486](https://github.com/netease-youdao/LobsterAI/pull/1486), [#1488](https://github.com/netease-youdao/LobsterAI/pull/1488), [#1489](https://github.com/netease-youdao/LobsterAI/pull/1489) | 4 月初提交，今日批量标记 stale | **中等** — 需重新激活评审 |
| **会话裁剪/上下文管理** | [#1499](https://github.com/netease-youdao/LobsterAI/pull/1499) | 对标 OpenClaw，技术方案完整 | **中高** — 解决实际痛点 |
| **Windows 关闭行为配置** | [#1497](https://github.com/netease-youdao/LobsterAI/pull/1497) | 平台适配完成 | **中等** — 体验优化类 |

### 用户侧隐含需求（从 Issue 提炼）

- **长时任务可靠性**：#2062 反映用户对"7×24 自动化"的期望，当前产品定位为"单次会话"而非"持久化服务"
- **登录体验解耦**：付费会员体系与产品认证深度绑定，故障时无降级方案

---

## 7. 用户反馈摘要

### 真实痛点

| 来源 | 痛点 | 场景 |
|:---|:---|:---|
| [#1903](https://github.com/netease-youdao/LobsterAI/issues/1903) | "会员登录不进去，无法使用网易付费的模型" | **付费用户日常登录**，非偶发故障 |
| [#2062](https://github.com/netease-youdao/LobsterAI/issues/2062) | "不知道是停止了还是后台还在跑" | **长时任务运维监控**，缺乏可观测性 |

### 产品满意度信号

- ✅ **正面**: 2026.5.27 版本媒体生成功能上线，显示产品能力边界持续扩展
- ❌ **负面**: 基础功能（登录、任务状态）的可靠性信任受损，"频繁"一词暗示问题重复发生

### 使用模式洞察

- 用户尝试将 LobsterAI 作为**自动化基础设施**使用（24h 任务），但产品设计似乎仍偏向**交互式会话工具**
- 付费会员与模型能力的强绑定，使登录故障的**机会成本极高**

---

## 8. 待处理积压

### 🚨 需维护者紧急关注

| 类型 | 项目 | 积压时长 | 风险说明 |
|:---|:---|:---|:---|
| **Issue** | [#1903 会员登录频繁失败](https://github.com/netease-youdao/LobsterAI/issues/1903) | **21 天** | 付费用户流失风险，建议升级至 P0 并指派专人 |
| **PR 集群** | 4 月初 8 个定时任务/技能/设置相关 PR | **~50 天** | 今日批量更新标签为 `stale`，存在**静默放弃风险** |

### 具体僵尸 PR 清单（建议重新评审或明确关闭）

| PR | 主题 | 最后更新 | 行动建议 |
|:---|:---|:---|:---|
| [#1485](https://github.com/netease-youdao/LobsterAI/pull/1485) | 禁用技能仍被系统提示调用 | 2026-05-27 | 安全策略类，建议合并 |
| [#1486](https://github.com/netease-youdao/LobsterAI/pull/1486) | 定时任务"测试运行"按钮 | 2026-05-27 | UX 改进，低冲突可合 |
| [#1488](https://github.com/netease-youdao/LobsterAI/pull/1488) | 定时任务 UI 全面升级 | 2026-05-27 | 大 PR，需设计评审 |
| [#1489](https://github.com/netease-youdao/LobsterAI/pull/1489) | macOS 本地通知渠道 | 2026-05-27 | 平台适配完成，建议合 |
| [#1490](https://github.com/netease-youdao/LobsterAI/pull/1490) | 编辑任务通知渠道不更新 | 2026-05-27 | 数据一致性 Bug，建议合 |
| [#1494](https://github.com/netease-youdao/LobsterAI/pull/1494) | 技能选择按会话隔离 | 2026-05-27 | 架构改进，建议合 |
| [#1497](https://github.com/netease-youdao/LobsterAI/pull/1497) | Windows 关闭行为配置 | 2026-05-27 | 平台体验，建议合 |
| [#1499](https://github.com/netease-youdao/LobsterAI/pull/1499) | 会话裁剪防上下文溢出 | 2026-05-27 | **高价值**，建议优先评审 |

> **治理建议**: 50 天未处理的 PR 集群今日被统一标记 `stale`，若计划合并建议设定 **2 周评审 deadline**；若放弃建议明确关闭并说明原因，避免贡献者悬置期望。

---

*本日报基于 GitHub 公开数据生成，未包含私有仓库或内部沟通信息。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-05-28

> **项目**: [moltis-org/moltis](https://github.com/moltis-org/moltis) | **日期**: 2026-05-28 | **分析师**: AI 智能体与个人 AI 助手领域开源项目分析师

---

## 1. 今日速览

Moltis 今日呈现**中等活跃度**，24小时内产生3条Issue更新与2条PR关闭，无新版本发布。项目核心开发持续推进：内存系统的可配置嵌入维度功能（PR #1074）与 Novita AI 提供商支持（PR #451）均已完成合并/关闭，显示维护者在向量存储基础设施与多模型生态扩展上的稳定投入。社区侧出现一个值得关注的**多智能体编排技术瓶颈**（Issue #235获新增评论），以及一例用户身份一致性Bug（Issue #1077）待修复。整体健康度良好，但需注意外部合作问询（Issue #1076）的正式响应机制。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

| PR | 状态 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#1074](https://github.com/moltis-org/moltis/pull/1074) | **已关闭** | 可配置嵌入维度 + 安全自动重索引 | **向量存储基础设施升级**：解决不同嵌入模型维度不兼容的痛点，支持 OpenAI 兼容提供商的灵活切换，自动重索引机制降低运维风险 |
| [#451](https://github.com/moltis-org/moltis/pull/451) | **已关闭** | 新增 Novita AI 作为 OpenAI 兼容提供商 | **模型生态扩展**：接入 Kimi K2.5、DeepSeek-V3.2、GLM-5 三个国产/新兴模型，降低用户对单一供应商的依赖 |

**整体评估**：今日关闭的2个PR分别对应 Moltis 架构的"深度"（向量层可配置性）与"广度"（模型提供商多样性），属于**中期基础设施夯实型进展**，为后续个人AI助手的长期记忆能力与模型选择自由度奠定基础。

---

## 4. 社区热点

### 🔥 最热讨论：PTY 伪终端交互控制（[Issue #235](https://github.com/moltis-org/moltis/issues/235)）

| 指标 | 数据 |
|:---|:---|
| 创建时间 | 2026-02-25（**已持续92天**） |
| 最新更新 | 2026-05-27 |
| 评论数 | **4条**（今日新增活动） |
| 点赞 | 1 |

**核心诉求分析**：
该Issue揭示了**自主多智能体编排领域的关键技术瓶颈**——当Moltis等Agent框架通过`stdio: pipe`子进程调用Claude Code时，后者因`isatty() == false`自动降级为非交互模式，导致：
- 无法接收任务中途的实时反馈/确认请求
- 丧失交互式调试与渐进式任务执行能力

**背后信号**：社区正在将Moltis从"单助手工具"推向"多Agent编排平台"，对子进程终端仿真（PTY, Pseudo-Terminal）的硬需求浮现。该Issue的持续推进（最新评论活动）表明此场景并非边缘用例，而是**下一代Agent基础设施的核心能力缺口**。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 现象 | 影响范围 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#1077](https://github.com/moltis-org/moltis/issues/1077) | `Error: invalid params, user name must be consistent (2013)` | 聊天会话身份验证/多用户场景 | **无** |

**详细分析**：
- **报告者**: `realalexandergeorgiev`（新用户，今日创建账号即报Bug，表明生产环境遇阻）
- **上下文**: 报告者明确标注"latest version"、包含完整会话上下文，遵循规范提交流程
- **根因推测**: 错误码2013暗示服务端用户标识与请求中的`user_name`参数不一致，可能涉及：
  - JWT/session 中的用户名与请求体不匹配
  - 多设备/多会话切换时的状态同步缺陷
  - 配置迁移或数据库schema变更后的遗留数据问题

**建议行动**：需维护者尽快确认是否为近期PR #1074（配置系统变更）或历史版本升级引入的回归。

---

## 6. 功能请求与路线图信号

| 来源 | 需求 | 与现有PR关联 | 纳入下一版本可能性 |
|:---|:---|:---|:---|
| [Issue #235](https://github.com/moltis-org/moltis/issues/235) | PTY-based 交互式CLI子进程控制 | **无直接PR**，但与PR #1074同属基础设施层 | ⭐⭐⭐⭐☆ **高** — 多Agent编排是明确趋势，社区有动力推动 |
| [Issue #1076](https://github.com/moltis-org/moltis/issues/1076) | 商业合作（MyClaw.ai托管服务） | 无 | N/A — 非技术功能请求，属治理/商务决策 |

**路线图判断**：
- **PTY支持**可能成为Moltis区别于其他Rust Agent框架的差异化能力，建议关注是否有相关PR在筹备中
- **嵌入维度配置（PR #1074）**的合并为向量数据库的多模型适配扫清障碍，与Issue #235共同指向"更灵活的底层抽象"这一技术主题

---

## 7. 用户反馈摘要

| 维度 | 内容 |
|:---|:---|
| **痛点** | 多Agent场景下Claude Code等工具的交互能力丧失（Issue #235） |
| **使用场景** | 自主编排：Moltis作为持久化Agent服务器，需驱动其他AI工具完成复杂工作流 |
| **满意度** | 项目技术架构获认可（Issue #1076中MyClaw.ai评价："serious technical project", "2.7K stars and climbing"） |
| **不满意** | 身份一致性Bug导致会话中断（Issue #1077），影响多用户/长会话可靠性 |
| **隐性需求** | 从"个人助手"向"可托管的企业/多用户服务"演进的基础设施成熟度（Issue #1076的合作问询侧面反映） |

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 当前状态 | 风险提醒 |
|:---|:---|:---|:---|
| [Issue #235](https://github.com/moltis-org/moltis/issues/235) | 2026-02-25 | **OPEN，92天未关闭**，但5月27日有新评论活动 | ⚠️ **长期未决但持续活跃** — 技术复杂度高（PTY跨平台实现），需评估是否纳入官方路线图或寻求社区贡献者 |
| [PR #451](https://github.com/moltis-org/moltis/pull/451) | 2026-03-19 | **已关闭**（5月27日） | 原为2个月+的待处理PR，现已解决，模型提供商扩展策略需文档化 |

**维护者关注建议**：
1. **Issue #235**：建议维护者明确回复是否接受PTY功能进入核心代码库，或提供插件/外部进程的指导方案，避免社区重复投入
2. **Issue #1077**：高优先级Bug，建议48小时内初步响应，确认复现条件与影响版本范围

---

> **数据截止**: 2026-05-28 00:00 UTC | **来源**: GitHub API 公开数据 | **生成**: AI 分析师

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-05-28

> **项目**: [agentscope-ai/CoPaw](https://github.com/agentscope-ai/QwenPaw)（注：代码仓库实际路径为 QwenPaw）  
> **报告日期**: 2026-05-28（覆盖 2026-05-27 24h 数据）

---

## 1. 今日速览

CoPaw 项目今日保持**高活跃度**，24小时内产生 **40 条 Issues 动态**（25 新开/活跃，15 关闭）与 **26 条 PR 动态**（11 待合并，15 已合并/关闭），并正式发布 **v1.1.9 稳定版**及一个 beta 版本。社区贡献显著加速，首次贡献者（first-time-contributor）PR 占比提升，覆盖飞书线程回复、GitLab 技能源、小米 MiMo 模型接入等新场景。核心团队集中修复桌面端稳定性问题（Tauri 外链、Windows 子进程标志、病毒误报回滚），同时 v1.1.9-beta 系列暴露的 CLI 子进程网络隔离、会话状态丢失等问题成为用户反馈焦点，需关注回归风险。

---

## 2. 版本发布

### v1.1.9（稳定版）[[Release](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.9)]
| 属性 | 详情 |
|:---|:---|
| **发布日期** | 2026-05-27 |
| **核心亮点** | **Tauri 2.x 桌面端**正式上线（macOS/Windows），新增 **Coding Mode 网页 IDE**（三栏布局：文件树、标签页编辑器、内联 diff） |
| **破坏性变更** | 无明确标注；Tauri 桌面端替代旧方案，需验证原有桌面用户配置迁移 |
| **迁移注意** | 桌面版用户需确认系统 WebView2（Windows）或 WKWebView（macOS）版本兼容性；Coding Mode 依赖 Monaco Editor，构建时需确保 `monaco-editor` 类型声明完整（见 Issue #4700） |

### v1.1.9-beta.2 [[Release](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.9-beta.2)]
| 属性 | 详情 |
|:---|:---|
| **变更内容** | ① 激活 Coding Mode 时自动重定向路由 ([#4677](https://github.com/agentscope-ai/QwenPaw/pull/4677))；② MCP OAuth 流程改用 `openExternalLink` 以支持 pywebview 桌面环境 ([#4679](https://github.com/agentscope-ai/QwenPaw/pull/4679)) |
| **风险提示** | Beta 通道用户报告 CLI 子进程网络隔离（[#4712](https://github.com/agentscope-ai/QwenPaw/issues/4712)）、任务队列阻塞（[#4714](https://github.com/agentscope-ai/QwenPaw/issues/4714)）、会话状态丢失（[#4713](https://github.com/agentscope-ai/QwenPaw/issues/4713)）等回归问题，建议生产环境暂缓升级 |

---

## 3. 项目进展

### 今日已合并/关闭的关键 PR（15 条）

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#4726](https://github.com/agentscope-ai/QwenPaw/pull/4726) | rayrayraykk | 重构多语言 README News 区块，版本号升至 v1.1.9 | 发布工程完成，品牌信息架构优化 |
| [#4725](https://github.com/agentscope-ai/QwenPaw/pull/4725) | zhaozhuang521 | 工作区下载按钮增加加载态与防重复点击 | 关闭 [#4670](https://github.com/agentscope-ai/QwenPaw/issues/4670) 下载无响应问题 |
| [#4720](https://github.com/agentscope-ai/QwenPaw/pull/4720) | zhijianma | 实现消息时间戳格式化 | 关闭 [#3774](https://github.com/agentscope-ai/QwenPaw/issues/3774)、[#4662](https://github.com/agentscope-ai/QwenPaw/issues/4662) 长期需求 |
| [#4718](https://github.com/agentscope-ai/QwenPaw/pull/4718) | jeeaay | Windows SVG MIME 类型修复 | 首次贡献者，解决控制台 logo 渲染问题 |
| [#4716](https://github.com/agentscope-ai/QwenPaw/pull/4716) | rayrayraykk | Coding Mode diff 编辑器：逐 hunk Keep/Undo + 智能复制到聊天 | 核心 IDE 体验迭代 |
| [#4690](https://github.com/agentscope-ai/QwenPaw/pull/4690) | qbc2016 | 位置感知的布尔 schema 清理器 | 修复 [#4646](https://github.com/agentscope-ai/QwenPaw/issues/4646)，解决 OpenAI 兼容 provider 的 schema 校验失败 |
| [#4724](https://github.com/agentscope-ai/QwenPaw/pull/4724) | jinglinpeng | 移除 Windows 子进程 `CREATE_NO_WINDOW` 标志 | 修复 Windows Defender 误触发，关联 [#3718](https://github.com/agentscope-ai/QwenPaw/issues/3718) |
| [#4723](https://github.com/agentscope-ai/QwenPaw/pull/4723) | rayrayraykk | 回滚病毒误报相关代码 | 紧急稳定性修复 |
| [#4685](https://github.com/agentscope-ai/QwenPaw/pull/4685) | xieyxclack | v1.1.9 发布说明更新 | 文档同步 |
| [#4615](https://github.com/agentscope-ai/QwenPaw/pull/4615) | weidankong | 修复 ACP 关闭后孤儿进程 | 首次贡献者，基础设施稳定性 |
| [#4339](https://github.com/agentscope-ai/QwenPaw/pull/4339) | hanson-hex | 测试修复 + 安全 + agents/tools 单测覆盖 Phase 0-2 | 质量工程债务偿还 |

**整体评估**：今日合并 PR 聚焦 **三大主线**——① v1.1.9 发布工程与品牌文档；② 桌面端/Coding Mode 稳定性（Tauri、Windows 子进程、IDE 交互）；③ 测试基础设施与代码质量。项目从"功能冲刺"转向"稳定交付"阶段信号明显。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 热度分析 |
|:---|:---|:---|:---|
| 🥇 | [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) Help Wanted: Open Tasks — Come Contribute! | **63 评论** | 社区任务看板，持续吸引新贡献者认领任务，反映项目生态扩张意愿 |
| 🥈 | [#4680](https://github.com/agentscope-ai/QwenPaw/issues/4680) 修改技能名后智能体消失 | 7 评论 | **已关闭**，用户情绪激烈（"啊啊啊啊啊"），暴露技能重命名的数据一致性风险，已快速修复 |
| 🥉 | [#4712](https://github.com/agentscope-ai/QwenPaw/issues/4712) v1.1.9-beta.1 无法运行本地 CLI 命令（飞书 CLI 等） | 6 评论 | **开放中**，核心痛点：WebSocket 连接问题，CLI 工具在子进程中无法访问宿主网络，企业用户集成受阻 |
| 4 | [#4662](https://github.com/agentscope-ai/QwenPaw/issues/4662) 增加界面每句话发送时间 | 6 评论 | **已关闭**，PR [#4720](https://github.com/agentscope-ai/QwenPaw/pull/4720) 今日合并，用户需求快速响应典范 |
| 5 | [#4408](https://github.com/agentscope-ai/QwenPaw/issues/4408) 建议工作目录默认文件统一放到 .qwenpaw 文件夹 | 5 评论 | **开放中**，对标 OpenCode 的 dotfile 设计，关乎用户工作区整洁度与版本控制友好性 |

**诉求洞察**：社区核心矛盾从"功能有无"转向"体验精细度"与"企业级稳定性"——时间戳、目录结构、RBAC、缓存命中率等需求表明用户正在深度生产化部署。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **P0-严重** | [#4712](https://github.com/agentscope-ai/QwenPaw/issues/4712) | **开放** | v1.1.9-beta.1 子进程网络隔离导致本地 CLI 工具（飞书 CLI）无法执行 | 无 |
| 🔴 **P0-严重** | [#4704](https://github.com/agentscope-ai/QwenPaw/issues/4704) | **开放** | macOS Tahoe 26.5 升级后桌面端崩溃（SIGSEGV），Feishu 通道触发 | 无 |
| 🟡 **P1-高** | [#4700](https://github.com/agentscope-ai/QwenPaw/issues/4700) | **开放** | Console 构建失败：缺少 `monaco-editor` 类型声明 | 无 |
| 🟡 **P1-高** | [#4666](https://github.com/agentscope-ai/QwenPaw/issues/4666) | **开放** | 新建会话后 Models 配置页面丢失，需重启恢复 | 无 |
| 🟡 **P1-高** | [#4705](https://github.com/agentscope-ai/QwenPaw/issues/4705) | **开放** | Mission Phase 2 用户输入阻塞后仍继续迭代 | 无 |
| 🟡 **P1-高** | [#4714](https://github.com/agentscope-ai/QwenPaw/issues/4714) | **开放** | 推理未结束时新任务无法入队，需手动停止 | 无 |
| 🟡 **P1-高** | [#4713](https://github.com/agentscope-ai/QwenPaw/issues/4713) | **开放** | 切换页面后历史对话记录丢失，重启后无法恢复会话状态 | 无 |
| 🟡 **P1-高** | [#4733](https://github.com/agentscope-ai/QwenPaw/issues/4733) | **开放** | Windows 桌面版重启后未恢复上次智能体及 session | 无 |
| 🟢 **P2-中** | [#4625](https://github.com/agentscope-ai/QwenPaw/issues/4625) | **开放** | MiniMax-M2.5 思考过程返回 XML 格式不兼容 | 无 |
| 🟢 **P2-中** | [#4731](https://github.com/agentscope-ai/QwenPaw/issues/4731) | **开放** | Edge 浏览器启动失败（退出码 21，Windows 11） | 无 |

**回归风险警示**：v1.1.9-beta 系列引入的 **子进程模型变更**（WebSocket 隔离、任务队列机制）导致企业集成场景集中爆发问题，建议维护者评估是否需在正式版中增加兼容性回退开关。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| **RBAC 多用户管理员** | [#4702](https://github.com/agentscope-ai/QwenPaw/issues/4702) | ⭐⭐⭐ 高 | 企业选型明确需求，与现有"企业级"定位契合，但涉及架构改动 |
| **小米 MiMo Token Plan 内置 Provider** | [#4715](https://github.com/agentscope-ai/QwenPaw/issues/4715) / [#4722](https://github.com/agentscope-ai/QwenPaw/pull/4722) | ⭐⭐⭐⭐⭐ 极高 | PR 已提交，OpenAI 兼容端点，集成成本低 |
| **GitLab 技能源支持** | [#4719](https://github.com/agentscope-ai/QwenPaw/pull/4719) | ⭐⭐⭐⭐⭐ 极高 | 首次贡献者 PR，技能生态扩展，代码已就绪 |
| **飞书话题/线程回复** | [#4708](https://github.com/agentscope-ai/QwenPaw/pull/4708) | ⭐⭐⭐⭐⭐ 极高 | 首次贡献者 PR，企业协作场景刚需 |
| **Token 消耗统计增加缓存命中率** | [#4721](https://github.com/agentscope-ai/QwenPaw/issues/4721) / 已关闭 | ⭐⭐⭐⭐ 高 | 成本敏感型企业需求，实现复杂度中等 |
| **记忆系统「总结-关联-提醒」机制** | [#4652](https://github.com/agentscope-ai/QwenPaw/issues/4652) | ⭐⭐⭐ 中 | 架构级改进，需长期设计，当前"只记录不学习"痛点真实 |
| **历史对话按最近时间排序 + 左侧栏平铺** | [#4732](https://github.com/agentscope-ai/QwenPaw/issues/4732) | ⭐⭐⭐⭐ 高 | UX 改进，实现成本低，用户反馈直接 |
| **Channels 支持 keyboard/markdown 消息** | [#4730](https://github.com/agentscope-ai/QwenPaw/issues/4730) | ⭐⭐⭐ 中 | 需评估 QQ 卡片协议兼容性 |
| **DataPaw 数据分析插件（12 BI skills）** | [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) | ⭐⭐⭐⭐ 高 | 插件化架构，场景垂直，但 review 周期长 |

---

## 7. 用户反馈摘要

### 😤 痛点与不满
- **"修改技能名后智能体消失了"** ([#4680](https://github.com/agentscope-ai/QwenPaw/issues/4680))：数据持久层的命名引用脆弱性，用户数据安全感受损
- **Beta 版稳定性焦虑**：多位用户（rescodexa 等）集中报告 v1.1.9-beta.1 的 CLI 隔离、任务队列、会话丢失问题，形成"不敢升级"情绪
- **Windows 桌面版细节粗糙**：SVG logo 不显示、Edge 浏览器启动失败、病毒误报，Windows 用户体验明显落后于 macOS

### 😊 满意与认可
- **时间戳功能快速落地**：[#3774](https://github.com/agentscope-ai/QwenPaw/issues/3774) 从 4 月提出到 5 月关闭，用户感知响应速度
- **Coding Mode 期待值高**：三栏 IDE 布局、逐 hunk diff 操作被视为差异化竞争力
- **企业级选型认可**："QwenPaw 很符合企业各个用户使用"（[#4702](https://github.com/agentscope-ai/QwenPaw/issues/4702)）

### 🏢 典型使用场景
- **自动化运维**：定时任务（cron）育儿提醒、飞书 CLI 集成
- **多 Agent 协作**：Mission Mode 分阶段任务流
- **成本管控**：Token 缓存命中率监控需求

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 最后更新 | 积压原因 | 行动建议 |
|:---|:---|:---|:---|:---|
| [#4408](https://github.com/agentscope-ai/QwenPaw/issues/4408) 工作目录 dotfile 化 | 2026-05-15 | 今日 | 设计决策待定（对标 OpenCode） | 维护者确认目录结构规范 |
| [#4652](https://github.com/agentscope-ai/QwenPaw/issues/4652) 记忆系统重构 | 2026-05-24 | 今日 | 架构级改动，需 RFC 设计 | 标记为 `roadmap`，分配核心维护者 |
| [#4464](https://github.com/agentscope-ai/QwenPaw/pull/4464) E2E 测试迁移 | 2026-05-17 | 今日 | 测试基础设施，review 资源不足 | 优先 review，阻塞质量债务偿还 |
| [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) DataPaw 插件 | 2026-05-22 | 今日 | 插件生态扩展，代码量大 | 分模块 review，或邀请领域专家 |
| [#4702](https://github.com/agentscope-ai/QwenPaw/issues/4702) RBAC 多用户 | 2026-05-26 | 今日 | 企业级需求，架构影响大 | 评估是否纳入 v1.2 路线图，公开 RFC |

---

> **健康度评分**: ⭐⭐⭐⭐☆ (4/5)  
> **优势**: 发布节奏稳定、社区贡献活跃、企业场景契合度高  
> **风险**: Beta 通道回归问题集中、Windows 桌面体验债务、核心架构 Issue 响应滞后

*本日报基于 GitHub 公开数据自动生成，如需调整覆盖范围或深度分析维度请联系。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-05-28

## 1. 今日速览

ZeroClaw 今日维持**高强度开发节奏**，24小时内30条Issues更新（20活跃/10关闭）、50条PR更新（39待合并/11已合并关闭），无新版本发布。核心信号：**安全加固与架构治理成为主线**——单日涌现3个安全相关PR（#6981工具权限、#6960策略过滤、#6978密钥脱敏），同时v0.8.1集成队列追踪器（#6970）启动，显示项目正从beta stabilization向补丁版本过渡。DeepSeek-V4兼容性问题（#6059）持续14天未解，构成最高优先级技术债务。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 今日关闭的重要 Issues/PRs（11项中的核心项）

| 编号 | 类型 | 内容 | 项目推进意义 |
|:---|:---|:---|:---|
| [#6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969) | RFC关闭 | 统一输出路由模型（per-peer模态偏好 + agent send_via工具） | **架构决策**：明确拒绝Letta式输出路由，巩固ZeroClaw"单通道原子交互"设计哲学，避免架构腐化 |
| [#6661](https://github.com/zeroclaw-labs/zeroclaw/issues/6661) | Feature关闭 | WebSocket steering期间保留已流式输出 | **可靠性提升**：解决中途干预导致的对话状态损坏，为v0.8实时协作功能扫清障碍 |
| [#6888](https://github.com/zeroclaw-labs/zeroclaw/issues/6888) | Bug关闭 | Daemon channels组件容器内异常退出（v0.8-beta-1） | **容器化修复**：rootless Podman场景S1阻塞问题解除，云原生部署可用性恢复 |
| [#6923](https://github.com/zeroclaw-labs/zeroclaw/issues/6923) | Bug关闭 | OpenAI Codex OAuth生效但运行时回退到API KEY | **认证链路闭环**：Codex订阅用户无需API key即可完整使用，降低商业化门槛 |
| [#6632](https://github.com/zeroclaw-labs/zeroclaw/issues/6632) | Bug关闭 | 手动cron_run错误地将投递失败标记为ok | **可观测性修复**：与#6026形成完整修复对，cron状态机一致性达成 |
| [#6921](https://github.com/zeroclaw-labs/zeroclaw/issues/6921) | Feature关闭 | 文档化最低浏览器要求+不支持浏览器横幅 | **UX防御性设计**：减少Web UI"白屏/静默失败"类支持工单 |

**整体进展评估**：今日关闭项集中在**运行时稳定性**（容器、认证、cron）与**UX完整性**（浏览器兼容、流式输出），但无重大架构交付。39个待合并PR形成显著队列压力，需关注CI吞吐瓶颈。

---

## 4. 社区热点

### 讨论最活跃的议题

| 排名 | 议题 | 评论数 | 核心诉求分析 |
|:---|:---|:---|:---|
| 🔥1 | [#6059 DeepSeek-V4 API格式不兼容](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) | **14评论** | **国产模型适配焦虑**：用户SSDGADsss持续反馈thinking mode错误，👍4显示社区共鸣。DeepSeek作为高性价比OpenAI替代，其API格式漂移（reasoning_content字段）暴露ZeroClaw"兼容层"抽象泄漏。今日PR [#6980](https://github.com/zeroclaw-labs/zeroclaw/pull/6980) 针对性修复，但尚未合并 |
| 2 | [#6808 RFC: 工作泳道、看板自动化与标签清理](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | 7评论 | **贡献者体验治理**：维护者Audacity88提出的流程RFC，反映项目规模扩张后"人工路由"成本过高。零👍显示内部工具属性，但7评论表明核心维护者深度参与流程设计 |
| 3 | [#6074 审计：追踪批量回滚c3ff635丢失的153个提交](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | 2评论 | **技术债务可视化**：3月28日大规模回滚的长期追踪，今日仍有更新，显示代码考古工作持续进行 |

**诉求洞察**：社区最强烈的外部声音是**多模型生态适配**（DeepSeek代表的非OpenAI路线），而内部焦点是**工程可扩展性**（流程自动化、代码恢复）。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重度 | 数量 | 议题 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| **S0 - 数据丢失/安全风险** | 1 | [#6978](https://github.com/zeroclaw-labs/zeroclaw/issues/6978) 嵌套密钥在ObjectArray中未脱敏 | 🆕新建，0评论 | ❌ 无 |
| **S1 - 工作流阻塞** | 4 | [#6975](https://github.com/zeroclaw-labs/zeroclaw/issues/6975) `zeroclaw onboard`未实际写入agents配置 | 🆕新建 | ❌ 无 |
| | | [#6965](https://github.com/zeroclaw-labs/zeroclaw/issues/6965) canvas页面永收不到Web UI推送帧 | 🆕新建 | ❌ 无 |
| | | [#6964](https://github.com/zeroclaw-labs/zeroclaw/issues/6964) Windows桌面构建失败（重复MANIFEST） | 🆕新建 | ❌ 无 |
| | | [#6879](https://github.com/zeroclaw-labs/zeroclaw/issues/6879) Discord gateway 429预检不可重试 | ✅已关闭 | — |
| **S2 - 行为降级** | 5+ | [#6976](https://github.com/zeroclaw-labs/zeroclaw/issues/6976) WebSocket chat 1006错误（缺agent参数） | 🆕新建 | ❌ 无 |
| | | [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) DeepSeek-V4不兼容 | 进行中14天 | [#6980](https://github.com/zeroclaw-labs/zeroclaw/pull/6980) 待合并 |
| | | [#6958](https://github.com/zeroclaw-labs/zeroclaw/issues/6958) Matrix会话以event_id为键导致失忆 | 🆕新建 | [#6967](https://github.com/zeroclaw-labs/zeroclaw/pull/6967) 待合并 |
| | | [#6944](https://github.com/zeroclaw-labs/zeroclaw/issues/6944) 交互模式system日志淹没对话输出 | ✅已关闭 | — |

**稳定性健康度**：⚠️ **中等风险**。单日新增4个S1+1个S0，且3个无Fix PR，显示v0.8-beta-1存在**配置持久化**（#6975）、**WebSocket实时通道**（#6965, #6976）、**桌面构建**（#6964）三类系统性问题。安全类S0（#6978）虽新但影响面可控（需特定ObjectArray配置）。

---

## 6. 功能请求与路线图信号

### 今日新建/活跃的功能性议题

| 议题 | 类型 | 纳入v0.8.1概率 | 判断依据 |
|:---|:---|:---|:---|
| [#6971 RFC: 安全UX、运行时凭证边界与隔离默认](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) | 安全架构RFC | 🔶 高 | Audacity88发起，与今日3个安全PR形成主题聚类，符合#6970追踪器范围 |
| [#6977 http_request私有主机白名单对齐web_fetch](https://github.com/zeroclaw-labs/zeroclaw/issues/6977) | 安全加固 | ✅ **已纳入** | [#6981](https://github.com/zeroclaw-labs/zeroclaw/pull/6981) 已开PR，status:accepted |
| [#6954 RFC: 定时任务经编排器消息管道路由](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) | 架构重构 | 🔶 中 | 引用5个相关bug，根因分析清晰，但size:L风险高，可能v0.9 |
| [#6915 技能域工具临时激活](https://github.com/zeroclaw-labs/zeroclaw/issues/6915) | 技能系统 | 🔶 中 | 被#6920阻塞，需等工具策略过滤落地 |
| [#6489 "一切皆插件"统一目录](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) | 长期架构 | 🔴 低 | 长期方向，与#6943 Extism→wasmtime争议相关，非v0.8.1优先级 |

**路线图信号**：v0.8.1明确聚焦**安全加固**（凭证边界、工具权限、网络隔离）与**集成通道修复**（Matrix、Discord、WebSocket）。技能系统（#6253追踪器）和插件架构（#6489）属v0.9+主题。

---

## 7. 用户反馈摘要

### 真实痛点提炼

| 场景 | 来源 | 痛点 | 情绪 |
|:---|:---|:---|:---|
| **从Letta迁移** | [#6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969) 评论 | "失去输出路由控制能力——早晨简报无法自动发到Slack，必须手动复制" | 😤 功能回归挫败 |
| **容器化部署** | [#6888](https://github.com/zeroclaw-labs/zeroclaw/issues/6888) | "0.8-beta-1在rootless Podman中channels配置被忽略，daemon直接退出" | 😰 生产阻塞焦虑 |
| **新手引导** | [#6975](https://github.com/zeroclaw-labs/zeroclaw/issues/6975) | "onboard交互完成但配置未写入，再次运行仍显示未完成" | 😵 信任崩溃（进度欺骗） |
| **DeepSeek生产使用** | [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) | "V4-Pro和V4-Flash均报错，thinking mode相关" | 😤 替代方案不可用 |
| **紧凑键盘TUI** | [#6950](https://github.com/zeroclaw-labs/zeroclaw/issues/6950) | "MX Keys Mini无F1-F5，TUI模式切换完全不可用" | 😤 硬件歧视感 |

### 满意点
- Codex OAuth免API key流程（#6923关闭）："ChatGPT Plus用户终于不用管理key了"

---

## 8. 待处理积压

### 需维护者紧急关注的长期项

| 天数 | 议题 | 风险 | 行动建议 |
|:---|:---|:---|:---|
| **34天** | [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) DeepSeek-V4兼容 | 国产模型生态位流失 | 合并[#6980](https://github.com/zeroclaw-labs/zeroclaw/pull/6980)并发布hotfix |
| **34天** | [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) 153提交恢复审计 | 功能/修复永久丢失 | 建立季度代码考古sprint |
| **62天** | [#5450](https://github.com/zeroclaw-labs/zeroclaw/pull/5450) IPv6支持+reqwest.url | 网络现代化债务 | 作者jokemanfire需响应review，或维护者接管 |
| **30天** | [#6190](https://github.com/zeroclaw-labs/zeroclaw/pull/6190) OTel GenAI内存观测 | 可观测性竞争力 | 依赖#6009合并，需栈底PR优先级提升 |

**队列压力警示**：39个待合并PR中，[#6667](https://github.com/zeroclaw-labs/zeroclaw/pull/6667)（size:XL技能背景评审）和[#6956](https://github.com/zeroclaw-labs/zeroclaw/pull/6956)（size:XL市场目录清理）两个XL项可能阻塞CI资源，建议拆分或优先处理XS/S级快速合并以维持流速。

---

*日报生成时间：2026-05-28 | 数据来源：ZeroClaw GitHub 公开仓库*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*