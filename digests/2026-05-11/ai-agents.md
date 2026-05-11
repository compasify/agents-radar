# OpenClaw 生态日报 2026-05-11

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-11 00:21 UTC

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

# OpenClaw 项目动态日报 | 2026-05-11

---

## 1. 今日速览

OpenClaw 今日保持**极高活跃度**，24小时内 Issues 与 PR 各更新 500 条，社区参与度处于历史高位。项目正经历**关键架构转型期**：Codex 运行时迁移成为核心主线，伴随大规模 QA 验证；同时 Telegram 渠道质量保障体系显著强化，连续发布两个 beta 版本。稳定性方面，**2026.5.2 回归问题**（Agent 中途无响应）已定位根因并进入修复阶段，但内存管理混乱、多 Agent 编排并发竞争等深层问题仍在持续发酵。整体健康度：**功能迭代积极，技术债务累积需警惕**。

---

## 2. 版本发布

### v2026.5.10-beta.2 / v2026.5.10-beta.1
**发布时间**：2026-05-10（连续两个 beta，内容高度重叠，beta.2 为 beta.1 的修正或补充发布）

| 变更项 | 说明 |
|--------|------|
| **QA/Mantis: Telegram live PR evidence automation** | 新增 Telegram 实时 PR 证据自动化流程，集成 Convex 租赁凭证、Crabbox 会话捕获、动态 GIF 预览及行内 PR 评论 |
| **QA/Mantis: Telegram desktop scenario builder** | 新增 Telegram 桌面端场景构建器，支持租赁 Crabbox、安装原生 Telegram Desktop 并配置 OpenClaw 测试环境 |

**评估**：两个版本均为**质量保障基础设施**更新，面向内部测试自动化，无用户可见破坏性变更。连续快速迭代暗示 Mantis（质量保障系统）正在 Telegram 渠道上构建**端到端可视化验证能力**，为 Codex 运行时迁移提供安全网。

- [v2026.5.10-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.5.10-beta.2)
- [v2026.5.10-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.5.10-beta.1)

---

## 3. 项目进展

### 已合并/关闭的关键 PR（今日活跃度高，但待合并 PR 占 89.2%）

| PR | 状态 | 核心贡献 | 推进价值 |
|:---|:---|:---|:---|
| #80449 [fix(agents): escalate LLM idle timeout to model fallback after profile rotation](https://github.com/openclaw/openclaw/pull/80449) | **待合并** | 修复 #76877 根因：`idleTimedOut` 未触发模型降级链，导致 Agent 冻结 | **阻断性回归修复**，直接影响 2026.5.2 用户生产稳定性 |
| #80444 [[codex] redact persisted tool result details](https://github.com/openclaw/openclaw/pull/80444) | 待合并 | 持久化 toolResult 中敏感信息脱敏，覆盖摘要超大负载场景 | Codex 运行时安全合规关键补丁 |
| #80456 [Show Codex subscription reset times in channel errors](https://github.com/openclaw/openclaw/pull/80456) | 待合并 | Codex 订阅限额耗尽时向渠道暴露精确重置时间 | 用户体验与运营透明度提升 |
| #80267 [[plugin sdk] consolidate host workflow seams](https://github.com/openclaw/openclaw/pull/80267) | 待合并 | 插件 SDK 宿主工作流接缝整合，替代 #80229 | 插件生态基础设施，XL 级大型重构 |
| #78595 [Refactor runtime state into SQLite](https://github.com/openclaw/openclaw/pull/78595) | 待合并 | 运行时状态从分散 JSON/JSONL/lock-file 迁移至类型化 SQLite | **架构级变革**，解决状态损坏、修剪、截断修复等历史顽疾 |

**整体评估**：今日无明确"已合并"标注的 PR，446/500 处于待合并状态，**合并吞吐量成为瓶颈**。Codex 迁移、SQLite 状态重构、插件 SDK 三大主线并行，代码审查压力极大。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 | 热度驱动因素 |
|:---|:---|:---|:---|:---|
| 1 | [#45740 gh-issues skill: untrusted issue body injected directly into sub-agent prompt](https://github.com/openclaw/openclaw/issues/45740) | 12 | **安全漏洞**：GitHub issue 正文未经净化直接注入子 Agent 提示词，存在提示词注入风险 | 安全红线问题，影响所有使用 gh-issues skill 的自动化工作流 |
| 2 | [#43735 Skills not loading in agent context from ~/.openclaw/workspace/skills/](https://github.com/openclaw/openclaw/issues/43735) | 12 | **已关闭** | Skill 发现机制不可靠，影响自定义技能生态 |
| 3 | [#39604 [Feature]: Add tools.web.fetch.allowPrivateNetwork](https://github.com/openclaw/openclaw/issues/39604) | 12 / 👍6 | 企业内网场景需求：允许 `web_fetch` 访问私有网络（默认关闭） | 企业私有化部署刚需，社区投票支持度高 |
| 4 | [#45759 Telegram typing keepalive loop lacks circuit breaker](https://github.com/openclaw/openclaw/issues/45759) | 11 | Telegram 网络故障时打字指示器无限重试导致网关崩溃 | 生产稳定性，与今日 beta 版本 Telegram QA 投入形成呼应 |
| 5 | [#41744 Feishu: read image tool result loses media](https://github.com/openclaw/openclaw/issues/41744) | 11 | 飞书渠道图片工具结果在最终投递前丢失媒体附件 | 中国企业用户高频场景 |

**诉求分析**：社区焦点呈现**"安全-稳定-企业适配"**三重奏。提示词注入漏洞（#45740）与 Telegram 网关崩溃（#45759）代表基础设施安全与韧性；私有网络访问（#39604）和飞书媒体丢失（#41744）反映企业集成深度需求。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重级别 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **P0-崩溃/阻断** | [#45759](https://github.com/openclaw/openclaw/issues/45759) | Telegram typing keepalive 无熔断器，网络故障时网关崩溃 | OPEN | 无直接 PR，beta 版本强化 QA 间接覆盖 |
| 🔴 **P0-数据丢失** | [#44925](https://github.com/openclaw/openclaw/issues/44925) | 子 Agent 完成静默丢失：无重试、无通知、超时无自动重启 | OPEN | [#45200](https://github.com/openclaw/openclaw/pull/45200)（通知用户而非静默丢弃） |
| 🔴 **P0-回归** | [#76877](https://github.com/openclaw/openclaw/issues/76877) | **2026.5.2 Agent 中途停止响应**（已关闭，根因修复中） | CLOSED | [#80449](https://github.com/openclaw/openclaw/pull/80449)（待合并，定位 `idleTimedOut` 未触发降级） |
| 🟡 **P1-安全** | [#45740](https://github.com/openclaw/openclaw/issues/45740) | gh-issues skill 提示词注入漏洞 | OPEN | 无 |
| 🟡 **P1-回归** | [#43747](https://github.com/openclaw/openclaw/issues/43747) | 内存管理混乱：3 人团队出现 3 种不同存储行为 | OPEN | 无 |
| 🟡 **P1-性能** | [#76562](https://github.com/openclaw/openclaw/issues/76562) | 2026.4.24→2026.5.2 升级后 CPU 100%、控制平面 RPC 延迟极高 | OPEN | 无 |
| 🟡 **P1-行为异常** | [#45326](https://github.com/openclaw/openclaw/issues/45326) | TUI：模型生成期间输入被吞并错误排队到下一轮 | OPEN | 无 |
| 🟡 **P1-数据错误** | [#44993](https://github.com/openclaw/openclaw/issues/44993) | Heartbeat/Cron "当前时间" 时间戳陈旧不刷新 | OPEN | 无 |
| 🟢 **P2-体验** | [#45765](https://github.com/openclaw/openclaw/issues/45765) | `OPENCLAW_HOME=~/.openclaw` 时产生嵌套目录 `~/.openclaw/.openclaw` | OPEN | 无 |

**关键信号**：**#76877 的关闭具有误导性**——Issue 标记 CLOSED 但实际根因修复 PR #80449 仍在待合并状态，属于"问题确认-方案就绪-代码未合"的典型流程断裂。建议维护者审视关闭标准。

---

## 6. 功能请求与路线图信号

| 功能请求 | 状态 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#39604 tools.web.fetch.allowPrivateNetwork](https://github.com/openclaw/openclaw/issues/39604) | OPEN | **高** | 👍6 社区支持，企业刚需，实现简单（布尔配置开关） |
| [#42475 Per-agent cost budget enforcement at gateway level](https://github.com/openclaw/openclaw/issues/42475) | OPEN | 中高 | 云原生/多租户场景刚需，与现有 `session-cost-usage.ts` 基础设施可衔接 |
| [#45608 Pre-reset agentic memory flush](https://github.com/openclaw/openclaw/issues/45608) | OPEN | **高** | 👍3，与现有 compaction 前 flush 机制对称，PR #45643 已包含相关实现 |
| [#43260 Support `model` field in SKILL.md frontmatter](https://github.com/openclaw/openclaw/issues/43260) | OPEN | 中 | 技术合理但涉及 Agent 调度架构，需与 Codex 迁移协调 |
| [#45758 Support YAML as config file format](https://github.com/openclaw/openclaw/issues/45758) | OPEN | 中低 | 体验优化，非阻断，社区有替代方案（JSON5 已支持注释） |
| [#39979 Path-scoped RWX permissions for exec and file tools](https://github.com/openclaw/openclaw/issues/39979) | OPEN | 中 | 安全架构升级，与现有二进制 allowlist 机制冲突需权衡 |
| [#45031 Built-in security scanning for skill installation](https://github.com/openclaw/openclaw/issues/45031) | OPEN | 中 | 引用外部研究（36% skill 含安全缺陷），但依赖第三方 AgentShield 集成 |

**路线图信号**：Codex 作为默认运行时的迁移（#80171 及关联 QA harness）是当前最高优先级，正在消耗大量工程资源。SQLite 状态重构（#78595）是底层支撑，预计 2026.6 版本发布前完成。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 Issue | 用户原声提炼 |
|:---|:---|:---|
| **升级恐惧** | [#76877](https://github.com/openclaw/openclaw/issues/76877) | *"Due to a lot of bugs, I could not run anything newer than version 2026.04-23"* — 用户被困在旧版本，新功能无法使用 |
| **配置地狱** | [#43747](https://github.com/openclaw/openclaw/issues/43747) | 3 人团队内存行为不一致，无文档说明预期行为，"chaos" 是用户原词 |
| **企业集成脆弱** | [#41744](https://github.com/openclaw/openclaw/issues/41744) | 飞书图片"能读但丢"，最后一公里可靠性差 |
| **调试黑箱** | [#44925](https://github.com/openclaw/openclaw/issues/44925) | 子 Agent 失败"静默"，用户完全无感知，只能人工检查发现 |
| **性能断崖** | [#76562](https://github.com/openclaw/openclaw/issues/76562) | 小版本升级（4.24→4.29→5.2）导致 CPU 100%，控制平面不可用的"死亡螺旋" |

### 满意度信号
- **Mantis/Telegram QA 自动化** 获得内部工程效率认可（连续 beta 版本）
- **Codex 迁移** 有明确维护者线程推进（@pash, @Eva-⚡🐑, @ai-hpc）

---

## 8. 待处理积压

### 需维护者重点关注

| Issue/PR | 创建时间 | 最后更新 | 风险 | 行动建议 |
|:---|:---|:---|:---|:---|
| [#43367 Multi-agent orchestration is unstable](https://github.com/openclaw/openclaw/issues/43367) | 2026-03-11 | 2026-05-10 | 🔴 **高** | 并发 Agent add/config 覆盖、session-lock 失败、子任务游离——多 Agent 核心能力根基不稳，需架构级修复 |
| [#39476 A2A sessions_send: target agent can call back causing duplicate messages](https://github.com/openclaw/openclaw/issues/39476) | 2026-03-08 | 2026-05-10 | 🔴 高 | Agent 间通信协议设计缺陷，循环调用无防护 |
| [#44382 TUI color theme system (5 built-in themes)](https://github.com/openclaw/openclaw/pull/44382) | 2026-03-12 | 2026-05-11 | 🟡 中 | XL 级 PR，评论 undefined（可能无审查资源），体验改进持续积压 |
| [#44288 Backup exclude patterns & protected path guards](https://github.com/openclaw/openclaw/pull/44288) | 2026-03-12 | 2026-05-11 | 🟡 中 | 解决 4GB+ 状态目录备份卡死，用户数据安全相关 |
| [#19482 only seed HEARTBEAT.md on brand-new workspaces](https://github.com/openclaw/openclaw/pull/19482) | 2026-02-17 | 2026-05-11 | 🟡 中 | **Stale 标签**，简单修复（XS）但搁置近 3 个月，用户自定义工作流被覆盖 |

**积压健康度警示**：待合并 PR 占比 89.2%（446/500），且大量 PR 评论数为 `undefined`（可能表示审查队列溢出或数据缺失）。XL 级大型 PR（#78595 SQLite 重构、#80267 插件 SDK、#43145 Agent trace timelines）集中排队，**存在"大 PR 阻塞小修复"的系统性风险**。建议维护者优先拆分合并 XS/S 级修复，释放社区贡献动能。

---

*日报生成时间：2026-05-11 | 数据来源：OpenClaw GitHub 开放数据*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析
**分析日期：2026-05-11 | 样本：12 个活跃项目**

---

## 1. 生态全景

个人 AI 助手开源生态正处于**"架构重构阵痛期"**：头部项目（OpenClaw、ZeroClaw、IronClaw）全力投入下一代运行时迁移（Codex/Reborn/V3），中等规模项目（NanoBot、Hermes、CoPaw）在功能扩展与稳定性间艰难平衡，尾部项目（LobsterAI、PicoClaw、Moltis）则受困于维护带宽瓶颈。整体呈现**"高活跃、高债务、高分化"**特征——社区贡献热情高涨，但代码审查与合并吞吐量成为普遍瓶颈，技术债务在快速迭代中持续累积。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 今日 Release | 合并率 | 核心动态 | 健康度评估 |
|:---|:---:|:---:|:---:|:---|:---|:---|
| **OpenClaw** | 500 | 500 | 2 beta (QA infra) | ~10.8% | Codex 运行时迁移、SQLite 状态重构、Telegram QA 自动化 | 🔶 极高活跃，合并瓶颈严重，技术债务累积 |
| **ZeroClaw** | 20 (15/5) | 29 (19/10) | 无 | 34.5% | v0.8.0 多智能体运行时冲刺、V3 配置迁移 | 🟢 高活跃，主线清晰，S0/S1 Bug 需关注 |
| **IronClaw** | 8 (6/2) | 28 (16/12) | 无 | 42.9% | Reborn 架构 80% 完成、TurnRunner 落地、crates.io 滞后 | 🔶 核心团队主导，Rust 生态供应链风险 |
| **Hermes Agent** | 50 (38/12) | 50 (32/18) | 无 | 36.0% | v0.13.0 回归修复、Kanban 工作流可靠性、CLI 稳定性 | 🔶 高修复压力，P1 级故障密集，Token 效率债务 |
| **CoPaw** | 11 (9/2) | 10 (9/1) | 无 | 10.0% | 首次贡献者爆发（70%）、安全加固、异步 I/O、记忆蒸馏 | 🔶 高流入低吞吐，评审资源不匹配 |
| **NanoBot** | 5 (3/2) | 6 (4/2) | 无 | 33.3% | 插件化工具重构、Agent 自我纠错、本地 Whisper、上下文压缩崩溃 | 🟢 中等活跃，PR 效率较高，P0 崩溃需紧急响应 |
| **NanoClaw** | 19 (17/2) | 18 (8/10) | 无 | 55.6% | 容器镜像生命周期债务、安全加固、CLI 工具链完善 | 🔶 合并率尚可，系统性基础设施风险未解 |
| **NullClaw** | 1 (0/1) | 4 (2/2) | 无 | 50.0% | Shell 沙箱懒加载、Discord Android 修复、黑客松作品待审 | 🟢 低活跃但健康，无显著积压 |
| **PicoClaw** | 6 (6/0) | 7 (7/0) | nightly | 0% | Telegram Business、Steering 体验优化、Codex 兼容 | 🔴 **零合并**，审查流程阻塞，stale 风险临界 |
| **LobsterAI** | 1 (0/1) | 16 (15/1) | 无 | 6.3% | 15 个 stale PR 全部 32 天未合并，核心稳定性修复积压 | 🔴 **严重阻塞**，高潜力低流动，维护带宽危机 |
| **Moltis** | 1 (0/1) | 0 | 1 (无说明) | — | 附件功能可能已发布但零文档 | 🔶 极低活跃，透明度缺失，社区参与度下滑 |
| **TinyClaw** | 0 | 0 | 无 | — | 无活动 | ⚪ 休眠 |
| **ZeptoClaw** | 0 | 0 | 无 | — | 无活动 | ⚪ 休眠 |

> **关键指标说明**：Issues/PRs 格式为（活跃或新开/关闭或已合并）；合并率 = 已合并 PR / 总 PR 更新

---

## 3. OpenClaw 在生态中的定位

### 规模与影响力
| 维度 | OpenClaw | 对比基准 |
|:---|:---|:---|
| **日 Issues/PR 量** | 各 500 条 | ZeroClaw 的 17-25 倍，Hermes 的 10 倍，生态绝对头部 |
| **待合并 PR 占比** | 89.2% | PicoClaw 100%、LobsterAI 93.8% 同样严重，但 OpenClaw 绝对数量最大 |
| **版本发布节奏** | 连续 beta（2026.5.10-beta.1/2） | 质量保障基础设施先行，发布成熟度领先 |

### 技术路线差异

| 特征 | OpenClaw | 同类对比 |
|:---|:---|:---|
| **运行时战略** | **Codex 作为默认运行时**（#80171），主动拥抱 OpenAI 协议生态 | ZeroClaw 自研多智能体运行时（AliasedAgentConfig），IronClaw 推进 Reborn（Rust 原生），NanoBot 保持极简基座 |
| **状态管理** | **SQLite 类型化迁移**（#78595）——从分散 JSON/lock-file 转向关系型存储 | Hermes 依赖 `memory.md` + 上下文窗口，ZeroClaw 历史修剪器（#6515）解决抢占式裁剪，LobsterAI SQLite 迁移 PR 32 天未合并 |
| **质量保障体系** | **Mantis 端到端可视化验证**（Convex 租赁、Crabbox 会话捕获、GIF 预览） | 其他项目以单元测试为主，OpenClaw 的 QA 基础设施投资独一档 |
| **渠道覆盖深度** | Telegram 渠道 QA 自动化、飞书媒体丢失专项（#41744） | CoPaw 覆盖 iMessage/WeCom/DingTalk/Matrix，ZeroClaw Discord 重写中，Hermes 网关碎片化严重 |

### 核心优势
- **工程规模化能力**：500 Issues/500 PR 的日处理量级，证明 CI/CD、自动化测试、分支管理的基础设施成熟度
- **企业集成深度**：飞书、Telegram Business、私有网络访问（#39604）等企业场景响应速度领先
- **安全合规意识**：toolResult 脱敏（#80444）、路径权限 RWX（#39979）、skill 安全扫描（#45031）形成体系

### 相对劣势
- **合并吞吐量瓶颈**：89.2% 待合并率意味着社区贡献者体验差，"大 PR 阻塞小修复"的系统性风险（#78595 XL 级重构排队中）
- **内存管理混乱**（#43747）：3 人团队 3 种存储行为的"chaos"状态，与工程成熟度形成反差
- **升级恐惧**（#76877）：用户被困 2026.04-23 版本，新版本稳定性信任赤字

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 信号强度 |
|:---|:---|:---|:---:|
| **多智能体/多 Agent 运行时** | OpenClaw (#43367)、ZeroClaw (#6272/#6545)、IronClaw (Reborn)、NanoBot (#3724 动态工具) | 从单 Agent 会话 → 并发编排、隔离 workspace、权限模型、Agent 间通信协议 | ⭐⭐⭐⭐⭐ |
| **上下文/记忆管理优化** | Hermes (#6323 mempalace, #6839 懒加载)、NanoBot (#3711 KV Cache, #3726 压缩崩溃)、OpenClaw (#78595 SQLite)、CoPaw (#4171 记忆蒸馏) | 突破上下文窗口限制、降低 Token 开销、长期记忆持久化、防止"复读机"退化 | ⭐⭐⭐⭐⭐ |
| **本地/隐私化部署** | NanoBot (#3723 本地 Whisper)、Hermes (本地模型适配)、PicoClaw (Ollama 本地→云扩展 #2225)、ZeroClaw (NixOS #6562) | 零 API 密钥、离线运行、边缘设备支持、企业数据不出域 | ⭐⭐⭐⭐⭐ |
| **Provider 兼容性与抽象** | OpenClaw (Codex 迁移)、ZeroClaw (OpenAI 兼容 #6551/#6552, Qwen #6558)、Hermes (OpenAI/Anthropic/Ollama/Fireworks 碎片化)、PicoClaw (Codex OAuth #2674)、IronClaw (LLM facade #3416) | 统一协议适配层、消息格式归一化、认证流程标准化、调试可观测性 | ⭐⭐⭐⭐⭐ |
| **安全加固** | OpenClaw (#45740 提示词注入, #80444 脱敏)、NanoClaw (#2392 fail-closed, #2384 OAuth 伪造)、NullClaw (#907 webhook 加固)、CoPaw (#4180 SHA-256, #4120 Matrix E2EE)、ZeroClaw (#6207 ApprovalManager) | 输入净化、凭证隔离、权限最小化、审计日志、沙箱逃逸防护 | ⭐⭐⭐⭐⭐ |
| **国际化/本地化** | ZeroClaw (#6548 硬编码英文, #6550 修复)、CoPaw (i18n 基础)、Hermes (#4807 浅色终端可访问性) | 非英语用户平等体验、RTL 支持、区域合规（中国企业飞书/钉钉场景） | ⭐⭐⭐⭐☆ |
| **容器/运维基础设施** | NanoClaw (#2378/#2379 镜像漂移, #2380 挂载缺失)、IronClaw (crates.io 滞后 #3259)、OpenClaw (Mantis 租赁凭证) | 可复现构建、镜像生命周期管理、版本锁定、供应链安全 | ⭐⭐⭐⭐☆ |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户画像 | 技术架构特征 | 关键差异化 |
|:---|:---|:---|:---|:---|
| **OpenClaw** | 企业级多渠道集成、质量保障体系、Codex 运行时迁移 | 中大型团队、需要 Telegram/飞书/企业微信深度集成的运维者 | TypeScript/Node，SQLite 状态重构，Mantis QA 自动化 | **"最工程化的企业集成平台"**——QA 基础设施和渠道覆盖深度无竞品 |
| **ZeroClaw** | 多智能体运行时、V3 配置体系、Rust 原生性能 | 技术极客、NixOS 运维、需要多 Agent 隔离的高级用户 | Rust，Schema v3，AliasedAgentConfig，SOP 引擎 | **"Rust 生态的多智能体操作系统"**——类型安全和性能优先 |
| **IronClaw** | WASM 沙箱、NEAR 区块链集成、Reborn 架构 | Web3/区块链开发者、需要可验证计算的合规场景 | Rust，WASMtime，Loop 状态机，TurnRunner | **"去中心化可信计算"**——区块链原生身份和审计 |
| **Hermes Agent** | 本地模型优先、Kanban 工作流、工具生态 | 隐私敏感用户、本地 LLM 爱好者、个人生产力 | Python/Node，工具懒加载（待实现），mempalace 外部记忆（社区期待） | **"本地模型的深度工作流"**——Kanban 任务编排独特，但 Token 效率债务沉重 |
| **NanoBot** | 极简基座、插件化扩展、本地隐私部署 | 开发者/研究者、需要二次定制的项目基座 | 轻量级，50→25 行工具注册重构，faster-whisper | **"最简洁的可扩展 Agent 内核"**——基座噪音最低，涌现性讨论最具哲学深度 |
| **CoPaw** | 多模态工具插件、企业 IM 集成、记忆蒸馏 | 中国企业用户、需要钉钉/企微/飞书打通的办公场景 | 多语言混合，Console/Web/IM 多通道，Octopus 模型组 | **"中国企业办公场景首选"**——本土 IM 覆盖最全，但稳定性待巩固 |
| **NanoClaw** | 容器化部署、OneCLI 生态、安全权限模型 | 自托管运维、需要 rootless 和审计的企业 | 容器优先，pnpm 生态，MCP 协议，fail-closed 安全 | **"容器原生的企业安全部署"**——OneCLI 生态联动，但镜像生命周期管理失控 |
| **PicoClaw** | 边缘设备/嵌入式、Telegram 生态、Steering 交互 | 硬件爱好者、Android TV/Termux 等边缘场景 | 轻量，nightly 构建，Steering 多轮追问优化 | **"边缘设备的 AI 伴侣"**——Sipeed 硬件生态绑定，但审查流程瘫痪 |
| **LobsterAI** | 网易有道背书、Cowork 协作、定时任务 | 中国中小企业、需要低代码 Agent 搭建的业务用户 | Electron，SQLite，SSE 解析，双引擎架构 | **"最易用的业务 Agent 搭建平台"**——但 32 天零合并，维护危机 |
| **Moltis** | 附件交互、日历版本控制 | 轻度个人用户 | 极简，透明度极低 | **"最神秘的项目"**——功能存在但文档缺失 |

---

## 6. 社区热度与成熟度分层

```
快速迭代期（高活跃 + 主线清晰）
├── ZeroClaw: v0.8.0 冲刺，多智能体 + V3 双支柱，Rust 工程纪律强
├── IronClaw: Reborn 80% 完成，核心团队主导，验收测试驱动
└── NanoBot: 插件化 + 自我纠错 + 本地 Whisper 三线并进，PR 效率健康

功能扩展期（高活跃 + 评审瓶颈）
├── OpenClaw: 绝对规模最大，但 89.2% 待合并率制约社区动能释放
├── Hermes: v0.13.0 回归修复消耗大量带宽，Kanban 可靠性近期改善
└── CoPaw: 首次贡献者 70% 涌入，安全/性能/测试基建并行，需批量评审策略

质量巩固期（中等活跃 + 债务清理）
├── NanoClaw: 合并率 55.6% 尚可，但容器镜像系统性风险未根治
└── NullClaw: 低活跃但健康，启动路径防御性编程，无显著积压

维护危机期（低活跃或阻塞）
├── PicoClaw: 0% 合并率，7 PR 全部 pending，#2462 32 天 stale 临界
├── LobsterAI: 15 PR 全部 32 天 stale，核心稳定性修复无法释放，"高潜力低流动"
└── Moltis: 近乎休眠，版本发布零说明，社区参与度持续下滑

休眠期
├── TinyClaw: 24h 无活动
└── ZeptoClaw: 24h 无活动
```

---

## 7. 值得关注的趋势信号

### 信号一：**"动态自适应"正在取代"静态配置"成为 Agent 架构新范式**
- **证据**：NanoBot #3724 "固定系统提示词/工具集/认知库是 Agent 失去涌现的牢笼"引发深层反思；NanoBot #3729 插件化工具重构（50→25 行自描述）；Hermes #6839 懒加载工具 Schema；OpenClaw #43260 SKILL.md 动态 model 字段
- **对开发者的价值**：下一代 Agent 框架需内置**运行时行为变异能力**——提示词模板、工具集、记忆结构都应支持任务驱动的动态重组，而非启动时一次性配置

### 信号二：**"Token 效率"从优化项变为架构级约束**
- **证据**：Hermes 50+ 工具消耗 3500-5000 tokens/次；NanoBot #3711 将归档摘要移出 KV Cache 提升 30-50% 性能；OpenClaw #39979 路径权限精细化控制工具调用范围
- **对开发者的价值**：本地模型（Ollama、Gemma、Qwen）场景下，**工具 Schema 的按需注入 + 智能筛选**将成为标配，而非全量广播。两阶段注入（#6839）、语义预选择（#13332）、记忆蒸馏（CoPaw #4171）构成完整优化链条

### 信号三：**"容器镜像生命周期"成为自托管项目的隐形杀手**
- **证据**：NanoClaw #2378/#2379 "recurring pattern" 镜像漂移、#2380 挂载缺失崩溃、#2381 升级破坏依赖；LobsterAI #820 MCP 打包后失效
- **对开发者的价值**：Agent 项目的**发布流程必须与开发环境行为等价**，建议引入镜像版本指纹校验、容器重建钩子、或转向 Nix/Guix 等可复现构建系统（ZeroClaw #6562 的 NixOS 模块是前瞻布局）

### 信号四：**"Provider 碎片化"催生适配层中间件机会**
- **证据**：OpenAI `include` 参数导致 GPT-4o 失败（Hermes #23450）；Codex 协议与标准 OpenAI API 差异（PicoClaw #2674）；Qwen 405 Method Not Allowed（ZeroClaw #6558）；Ollama 工具格式损坏（NanoBot #2829）
- **对开发者的价值**：**统一的 Provider 适配中间件**（类似 LangChain 的通用 LLM 接口，但针对 Agent 场景优化）存在显著生态位，需覆盖：消息格式归一化、流式协议差异、认证流程抽象、错误码映射、调试日志增强

### 信号五：**"质量保障基础设施"成为项目分化的分水岭**
- **证据**：OpenClaw Mantis 系统（Convex 租赁、Crabbox 会话捕获、GIF 预览）；IronClaw Reborn E2E 门控测试（#3444 JWT 泄漏防护）；NanoBot 上下文压缩崩溃（#3726）暴露测试盲区
- **对开发者的价值**：Agent 产品的**端到端可观测性**（

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-05-11

> **项目**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | **日期**: 2026-05-11 | **分析师**: AI 智能体与开源项目分析助手

---

## 1. 今日速览

NanoBot 今日保持**中等活跃度**，24小时内产生 **5 条 Issue 更新**（3 活跃/新开、2 关闭）与 **6 条 PR 更新**（4 待合并、2 已合并/关闭），无新版本发布。社区核心关注点集中在**架构可扩展性**（插件化工具系统）、**Agent 自我纠错能力**与**本地隐私化部署**（本地 Whisper）三大方向。值得注意的是，一个高质量社区反馈 Issue #3724 提出了"固定系统提示词/工具集/认知库是 Agent 失去涌现的牢笼"的深层架构反思，引发对 NanoBot 长期演进路径的讨论。整体项目健康度良好，PR 处理效率较高，但存在 1 个**高优先级崩溃 Bug**（上下文压缩导致系统无法运行）待紧急响应。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭 PR（2 条）

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#3707](https://github.com/HKUDS/nanobot/pull/3707) [CLOSED] | barreler126 | 新增 NVIDIA NIM Provider 支持 | 扩展企业级 GPU 推理生态，对接 NVIDIA 官方 API 端点 `https://integrate.api.nvidia.com/v1` |
| [#3711](https://github.com/HKUDS/nanobot/pull/3711) [CLOSED] | chengyongru | **关键性能优化**：将归档摘要从运行时上下文移至系统提示 | 解决 **KV Cache 稳定性**问题，减少多轮对话中的重复计算，提升长会话性能约 30-50%（估算） |

**今日里程碑**：Agent 内存架构完成关键优化，为长上下文、多轮深度推理场景奠定基础。

---

## 4. 社区热点

### 🔥 最热讨论：Issue #3724 — "Agent 涌现性牢笼" 深度反思
- **链接**: [HKUDS/nanobot#3724](https://github.com/HKUDS/nanobot/issues/3724)
- **状态**: 已关闭（感谢类 Issue，但内容极具价值）
- **评论数**: 4 | 👍: 0
- **核心诉求**: 用户 wenge6090-cell 基于其衍生项目 [Taiji](https://github.com/wenge6090-cell/Taiji.git) 的实践，指出 NanoBot 三大架构瓶颈：
  1. **静态系统提示词** → 无法根据任务类型动态调整行为准则
  2. **固定工具集** → 无法按需加载/卸载工具，导致"工具过载"与决策噪音
  3. **静态认知库** → 知识无法自主演化，缺乏动态记忆整合

> *"我在一直用 nanobot 的时候，不只一次的看见它变为了复读机。"*

**信号解读**: 该反馈与今日待合并 PR #3729（插件化工具架构）高度共振，表明社区已意识到**静态架构限制 Agent 智能上限**的问题，正从"功能堆叠"向"动态自适应"演进。

---

### 次热 PR：#3729 插件化工具重构
- **链接**: [HKUDS/nanobot#3729](https://github.com/HKUDS/nanobot/pull/3729)
- **作者**: chengyongru
- **亮点**: 将 50 行硬编码工具注册压缩至 25 行自描述插件模式，支持工具自声明配置类、启用条件与工厂方法

---

## 5. Bug 与稳定性

| 优先级 | Issue/PR | 描述 | 状态 | 是否有 Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **P0-崩溃** | [#3726](https://github.com/HKUDS/nanobot/issues/3726) | **上下文压缩 Bug 导致系统完全无法运行** — `maybe_consolidate_by_tokens` 中 `no safe boundary found` 异常，阻断所有消息处理 | 🆕 新报，OPEN | ❌ **无** |
| 🟡 **P1-功能损坏** | [#2829](https://github.com/HKUDS/nanobot/issues/2829) | Ollama 工具调用格式损坏 — `gemma4:e4b` 等模型无法调用工具，返回编造答案 | OPEN（36天） | ❌ 无 |
| 🟡 **P1-功能损坏** | [#3469](https://github.com/HKUDS/nanobot/issues/3469) | DeepSeek-V4 `reasoning_content` 回传错误 — 多轮思考时 API 报错 | ✅ CLOSED | ✅ 已修复（今日关闭） |
| 🟢 **P2-配置体验** | [#3637](https://github.com/HKUDS/nanobot/issues/3637) | Groq 语音转录配置不透明 — `apiBase` 与 `transcriptionProvider` 组合易致无效配置 | OPEN（5天） | 🔄 **PR #3663 待审** |

### 紧急行动项
- **#3726 需立即响应**：上下文压缩是核心内存机制，该崩溃影响所有长会话场景，且日志显示发生在生产环境（QQ 通道）。

---

## 6. 功能请求与路线图信号

| 方向 | 来源 | 内容 | 纳入下一版本概率 | 判断依据 |
|:---|:---|:---|:---|:---|
| **插件化工具架构** | PR #3729 | 自描述工具插件系统，支持动态加载 | ⭐⭐⭐⭐⭐ **极高** | 架构级重构，作者 chengyongru 今日刚合并 #3711，社区信任度高 |
| **Agent 自我纠错** | PR #3728 | `LoopDetectHook` + `ReflectRetryHook` — 检测工具调用循环与盲目重试 | ⭐⭐⭐⭐☆ **高** | 直接回应 #3724 提出的"复读机"问题，与项目演进方向一致 |
| **本地语音转录** | PR #3723 | 基于 faster-whisper 的本地 Whisper 支持，零 API 密钥 | ⭐⭐⭐⭐☆ **高** | 隐私合规强需求，技术方案成熟（C++/ONNX） |
| **动态认知姿态** | Issue #3724 | 系统提示词/工具集/认知库的动态演化 | ⭐⭐⭐☆☆ **中** | 长期架构愿景，需 #3729 等基础设施先行 |
| **转录 API 兼容** | PR #3663 | 容忍 chat-style `apiBase` 用于 Groq/OpenAI Whisper | ⭐⭐⭐⭐☆ **高** | 修复明确 Bug #3637，改动面小，合并阻力低 |

---

## 7. 用户反馈摘要

### 😊 满意点
- **极简基座价值**：wenge6090-cell 明确感谢 NanoBot 作为项目基座的简洁性，认可其"极简"设计理念
- **社区响应速度**：#3469 DeepSeek-V4 Bug 在 14 天内完成修复关闭

### 😣 痛点与场景
| 痛点 | 用户原声/场景 | 关联 Issue/PR |
|:---|:---|:---|
| **Agent 退化复读** | "不只一次的看见它变为了复读机" — 长会话后输出模式固化 | #3724, #3728 |
| **配置陷阱** | Groq 语音配置 `apiBase` + `transcriptionProvider` 组合易错，无明确错误提示 | #3637, #3663 |
| **本地部署刚需** | 不愿依赖外部 API，需要完全离线的语音能力 | #3723 |
| **Ollama 生态断裂** | 本地模型工具调用失效，被迫使用云端模型 | #2829 |
| **长会话崩溃** | 上下文压缩触发致命异常，生产环境不可用 | #3726 |

### 隐含需求
- **可观测性**：#3726 日志仅显示 `no safe boundary found`，缺乏调试上下文
- **配置验证**：转录配置应在启动时校验，而非运行时静默失败

---

## 8. 待处理积压

### ⚠️ 长期未响应（需维护者关注）

| Issue | 天数 | 风险 | 建议行动 |
|:---|:---|:---|:---|
| [#2829](https://github.com/HKUDS/nanobot/issues/2829) Ollama 工具调用损坏 | **36天** | 🔴 Ollama 是本地部署核心路径，工具调用失效迫使用户转向云端，与隐私定位冲突 | 指派 Ollama 协议专家，优先复现 `gemma4:e4b` 工具格式序列化问题 |
| [#3637](https://github.com/HKUDS/nanobot/issues/3637) 转录配置不透明 | 5天 | 🟡 有 PR #3663 待审，但 Issue 本身缺乏 `help wanted` 或 `good first issue` 标签 | 加速审阅 #3663，合并后关闭 |

### 🔄 待合并 PR 积压（4 条，均今日更新）

| PR | 风险 | 建议 |
|:---|:---|:---|
| #3729 插件化工具 | 架构级改动，需核心维护者深度 Review | 安排架构 Review，建议 1-2 轮迭代后合并 |
| #3728 自我纠错 Hook | 与 #3729 存在潜在冲突（Hook 系统 vs 插件系统） | 评估与 #3729 的集成方案，避免重复设计 |
| #3723 本地 Whisper | 引入 C++ 依赖（ONNX Runtime），需验证跨平台构建 | CI 增加 Windows/macOS/Linux 构建矩阵 |
| #3663 转录 API 兼容 | 改动面小，可快速合并 | **建议今日合并**，释放 #3637 |

---

## 附录：今日数据看板

```
Issue 流量:  ████████░░ 5 条/24h  (3 活跃, 2 关闭)
PR 流量:   ██████████ 6 条/24h  (4 待合并, 2 已处理)
关闭率:    ████████░░ 40%  Issue | 33% PR
响应速度:  ████████░░ 高 (P1 Bug #3469 14天内关闭)
社区情绪:  ███████░░░ 积极偏焦虑 (涌现性讨论 + 崩溃报告并存)
```

---

> **明日关注**: #3726 崩溃 Bug 是否有维护者响应；#3729 与 #3728 的架构协同审阅进度；#3663 能否快速合理解锁 #3637。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-05-11

---

## 1. 今日速览

Hermes Agent 今日呈现**高活跃度、高修复压力**态势。过去24小时内 **50 条 Issues 更新**（38 活跃/新开，12 关闭）与 **50 条 PR 更新**（32 待合并，18 已合并/关闭）显示社区参与密集。核心战场集中在 **CLI 稳定性**（`run_in_terminal` 协程未等待问题引发连锁 Bug）、**OpenAI API 兼容性**（`include` 参数导致 GPT-4o 请求失败）以及 **Kanban 工作流可靠性**（任务阻塞、依赖自动解封）。v0.13.0 版本发布后暴露多个回归问题，维护团队正紧急修补，但仍有大量修复 PR 积压待审。

---

## 2. 版本发布

**无新版本发布**

> 注：v0.13.0 似乎为近期发布版本，今日多个 Bug 报告（#23450、#22958、#23297）均指向该版本引入的回归问题。

---

## 3. 项目进展

### 已合并/关闭的重要 PR（18 条中的关键项）

| PR | 作者 | 核心贡献 | 项目推进 |
|:---|:---|:---|:---|
| [#23301](https://github.com/NousResearch/hermes-agent/pull/23301) | liuhao1024 | 修复 `_prompt_text_input` 后台线程调用导致的 `RuntimeWarning` | **CLI 交互稳定性**：解决 `/clear`、`/new` 确认提示的协程未等待问题 |
| [#12709](https://github.com/NousResearch/hermes-agent/pull/12709) | ivanmorey80-debug | 为 `_signal_handler` 添加 SIGINT 重入保护 | **进程优雅退出**：防止关闭期间重复信号导致崩溃 |
| [#23456](https://github.com/NousResearch/hermes-agent/pull/23456) | teknium1 | `/goal` 双阶段判定 + `/subgoal` 用户控制 | **目标系统升级**：从简单分解到严格逐项验收，提升长任务可靠性 |
| [#23282](https://github.com/NousResearch/hermes-agent/pull/23282) | KhanCold | 移除 Feishu `root_id` 误用为 `thread_id` 的回退逻辑 | **网关消息路由准确性**：修复话题分裂问题（关联 #6969） |
| [#23335](https://github.com/NousResearch/hermes-agent/pull/23335) | xero-aiescape | 流式停滞回退标记为 `crashed` 而非 `protocol_violation` | **Kanban 容错性**：消除单点瞬态故障导致任务永久阻塞 |
| [#23316](https://github.com/NousResearch/hermes-agent/pull/23316) | xero-aiescape | 在 KANBAN_GUIDANCE 中教授进度心跳机制 | **工作器协作规范**：减少静默超时误判 |
| [#23459](https://github.com/NousResearch/hermes-agent/pull/23459) | xero-aiescape | 父任务完成后自动解封依赖子任务 | **Kanban 依赖图完整性**：修复最常见的工作流死锁模式 |
| [#23460](https://github.com/NousResearch/hermes-agent/pull/23460) | liuhao1024 | 移除标准 OpenAI Chat Completions 的不支持 `include` 参数 | **API 兼容性紧急修复**：解决 GPT-4o "Encrypted content" 错误（关联 #23450） |
| [#11170](https://github.com/NousResearch/hermes-agent/pull/11170) | freemanconsulting | Telegram 流式消费使用 UTF-16 长度分割消息 | **国际化消息可靠性**：修复 emoji/CJK 字符截断 |

**整体评估**：今日合并 PR 以 **紧急修复** 为主，v0.13.0 回归问题的补丁密集落地。Kanban 子系统获得三项关键修复，工作流可靠性显著提升。但 32 个待合并 PR 中仍有大量防御性编程补丁（KhanCold 系列）等待 review，存在积压风险。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 👍 | 核心诉求 |
|:---|:---|:---:|:---:|:---|
| 1 | [#6323](https://github.com/NousResearch/hermes-agent/issues/6323) **mempalace 外部记忆模块** | 18 | 26 | **长期记忆架构升级**：社区强烈期待超越上下文窗口的持久化、可查询记忆，支持长周期任务和跨会话连续性。外部实现已存在（milla-jovovich/mempalace），要求官方集成。 |
| 2 | [#14420](https://github.com/NousResearch/hermes-agent/issues/14420) **上下文记忆丢失（已关闭）** | 14 | 0 | **基础可靠性**：用户报告 agent 无法根据上下文和记忆回答，中文用户场景。已关闭但未说明修复方式，可能为重复问题。 |
| 3 | [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) **懒加载工具 Schema（两阶段注入）** | 7 | 8 | **Token 效率**：50+ 工具每次全量注入消耗 3500-5000 tokens，本地模型负担重。要求按需加载，避免无关工具 schema 占用上下文。 |
| 4 | [#4807](https://github.com/NousResearch/hermes-agent/issues/4807) **CLI 浅色终端不可读** | 7 | 9 | **可访问性**：所有内置皮肤均为暗色设计，浅色/奶油色终端用户完全无法使用。长期未解决（创建于 4 月初）。 |
| 5 | [#13332](https://github.com/NousResearch/hermes-agent/issues/13332) **混合工具预选择（语义+关键词）** | 4 | 1 | **RAG 式 schema 注入**：在 #6839 懒加载基础上，进一步要求无需额外 LLM 轮次的智能工具筛选，14K tokens 默认负载亟待优化。 |

**诉求分析**：社区核心矛盾在于 **"功能广度 vs. 效率深度"**。工具生态膨胀导致 token 开销失控（#6839、#13332），而记忆系统的上下文限制（#6323、#14420）制约了 agent 的实用深度。这两个方向的技术债务若不及时处理，将侵蚀 Hermes 在本地模型场景的核心竞争力。

---

## 5. Bug 与稳定性

### 按严重程度排列（P1 > P2 > P3）

| 优先级 | Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|:---|
| **P1** | [#22958](https://github.com/NousResearch/hermes-agent/issues/22958) | 🔴 开放 | **破坏性操作确认提示无法响应**：`/clear`, `/new`, `/reset`, `/undo` 的确认输入被泄露到聊天编辑器，v0.13.0 回归 | [#23301](https://github.com/NousResearch/hermes-agent/pull/23301) 已合并，[#23210](https://github.com/NousResearch/hermes-agent/pull/23210) 待审 |
| **P1** | [#22714](https://github.com/NousResearch/hermes-agent/issues/22714) | 🔴 开放 | **Matrix 网关缺乏消息级编排通道**：下游调度器无法按消息驱动 LLM 路由，架构级限制 | 无 |
| **P1** | [#17013](https://github.com/NousResearch/hermes-agent/issues/17013) | 🔴 开放 | **模型切换丢失对话上下文和记忆**：`/model` 命令导致 `memory.md` 和 history 全部丢失 | 无 |
| **P1** | [#23450](https://github.com/NousResearch/hermes-agent/issues/23450) | 🟡 有 PR | **OpenAI GPT-4o 请求失败**：v0.13.0 发送不支持 `include` 参数 | [#23460](https://github.com/NousResearch/hermes-agent/pull/23460) 已合并 |
| **P1** | [#23370](https://github.com/NousResearch/hermes-agent/issues/23370) | 🔴 开放 | **Anthropic 提供者 OAuth 认证错误**：向 `/chat/completions` 发送 `Bearer None` 而非 `/v1/messages` | 无 |
| **P1** | [#23389](https://github.com/NousResearch/hermes-agent/issues/23389) | 🔴 开放 | **macOS 26.4.1 网关启动失败**：`launchctl kickstart` 返回 error 125，系统兼容性断裂 | 无（标记 duplicate） |
| **P2** | [#23318](https://github.com/NousResearch/hermes-agent/issues/23318) | 🔴 开放 | **百度 Coding Plan 自定义提供者不稳定**：多模型选择器损坏 + 上下文长度错误导致截断 | 无 |
| **P2** | [#23422](https://github.com/NousResearch/hermes-agent/issues/23422) | 🔴 开放 | **vision_analyze ollama-cloud 超时**：代理缺乏 OpenAI Vision 格式支持 | 无 |
| **P2** | [#23432](https://github.com/NousResearch/hermes-agent/issues/23432) | 🔴 开放 | **辅助压缩超时污染缓存客户端**：后续辅助调用失败 | 无 |
| **P2** | [#17986](https://github.com/NousResearch/hermes-agent/issues/17986) | 🔴 开放 | **Fireworks 自定义端点首回合 HTTP 400**：回退后成功，首请求格式错误 | 无 |

**稳定性评估**：v0.13.0 引入 **CLI 交互层重大回归**（确认提示系统），多个 P1 级故障集中爆发。网关层（Matrix、Telegram、Feishu）存在架构级路由缺陷。提供者生态（OpenAI、Anthropic、Ollama、Fireworks、百度）碎片化严重，适配质量参差不齐。

---

## 6. 功能请求与路线图信号

| Issue | 信号强度 | 纳入可能性分析 |
|:---|:---|:---|
| [#6323](https://github.com/NousResearch/hermes-agent/issues/6323) mempalace 外部记忆 | ⭐⭐⭐⭐⭐ | **高**。已有外部实现，社区呼声最高（26 👍），与 #17013 模型切换丢记忆形成互补需求。可能作为 v0.14 核心特性。 |
| [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) 懒加载工具 Schema | ⭐⭐⭐⭐⭐ | **高**。Token 效率为本地模型核心痛点，作者 jarviszomine 已提出完整两阶段方案，技术路径清晰。 |
| [#13332](https://github.com/NousResearch/hermes-agent/issues/13332) 混合工具预选择 | ⭐⭐⭐⭐☆ | **中高**。作为 #6839 的增强方案，无需额外 LLM 轮次更具吸引力，但实现复杂度更高。 |
| [#21587](https://github.com/NousResearch/hermes-agent/issues/21587) Telegram 访客机器人/机器人互操作 | ⭐⭐⭐★☆ | **中**。依赖 Telegram 平台更新（2026-05-07），Hermes 需跟进但非紧迫。 |
| [#11014](https://github.com/NousResearch/hermes-agent/issues/11014) SSH 代理本地执行后端 | ⭐⭐⭐☆☆ | **中**。开发工作流刚需，但涉及架构变更（TUI over SSH）。 |
| [#21910](https://github.com/NousResearch/hermes-agent/issues/21910) 回滚/编辑重提交 | ⭐⭐⭐☆☆ | **中**。Claude Code 对标功能，交互设计挑战大于技术难度。 |
| [#4807](https://github.com/NousResearch/hermes-agent/issues/4807) CLI 浅色模式 | ⭐⭐☆☆☆ | **低**。长期存在但非阻塞，皮肤系统扩展成本较低，可能被社区 PR 解决。 |

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 Issue | 用户原声提炼 |
|:---|:---|:---|
| **记忆不可靠** | [#14420](https://github.com/NousResearch/hermes-agent/issues/14420) | "hermes agent 無法根據上下文與記憶去回答我" — 中文用户直接放弃使用 |
| **模型切换即失忆** | [#17013](https://github.com/NousResearch/hermes-agent/issues/17013) | 切换模型后 "conversation history AND persistent memory (memory.md)" 全部丢失，工作流程断裂 |
| **Token 开销不可承受** | [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) | "50+ tools... consumes ~3,500-5,000 tokens per call — regardless of whether the conversation needs those tools" |
| **本地模型适配困难** | [#23318](https://github.com/NousResearch/hermes-agent/issues/23318) | 百度 Coding Plan "explicitly designed for Claude Code, Cursor" 但 Hermes 无原生支持，custom_providers 多处损坏 |
| **跨设备开发阻塞** | [#11014](https://github.com/NousResearch/hermes-agent/issues/11014) | "Hermes currently runs on a remote server, which means it can't interact with my local environment" |

### 满意度信号
- **Kanban 工作流**：xero-aiescape 系列修复显示团队对复杂任务编排有深度投入，用户可能因近期可靠性提升而获益
- **网关覆盖广度**：Telegram、Feishu、Matrix、微信企业号等多平台支持是差异化优势，但维护质量参差不齐

---

## 8. 待处理积压

### 长期未响应的高价值 Issue

| Issue | 创建时间 | 天数 | 风险说明 |
|:---|:---|:---:|:---|
| [#6323](https://github.com/NousResearch/hermes-agent/issues/6323) mempalace 外部记忆 | 2026-04-08 | **33天** | 最高 👍 功能请求，外部实现已成熟，官方集成滞后可能流失用户到竞品 |
| [#4807](https://github.com/NousResearch/hermes-agent/issues/4807) CLI 浅色模式 | 2026-04-03 | **38天** | 可访问性基础问题，暗色主题偏见排斥部分用户群体 |
| [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) 懒加载工具 Schema | 2026-04-09 | **32天** | 技术方案已完整，仅需决策纳入版本，拖延加剧本地模型用户流失 |
| [#11014](https://github.com/NousResearch/hermes-agent/issues/11014) SSH 本地执行后端 | 2026-04-16 | **25天** | 远程-本地混合开发为现代工作流标配，架构缺失限制场景扩展 |

### 待审 PR 提醒

**KhanCold 防御性编程系列**（#23044、#23042、#23041、#23018、#23017）共 5 个 PR 均针对空字符串/格式错误导致的 `ValueError`/`IndexError`，属于 **代码健壮性基线修复**，建议优先批量 review 合并以减少重复故障报告。

---

*日报生成时间：2026-05-11 | 数据来源：NousResearch/hermes-agent GitHub 公开活动*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-05-11

> **项目**: [sipeed/picoclaw](https://github.com/sipeed/picoclaw)  
> **日期**: 2026-05-11  
> **分析师**: AI 智能体与开源项目分析助手

---

## 1. 今日速览

PicoClaw 今日呈现**高活跃度开发态势**：6 条 Issues 与 7 条 PR 在 24 小时内获得更新，但**零合并/关闭记录**表明代码审查流程可能存在瓶颈。社区聚焦三大主题：Telegram 生态扩展（Business 模式）、Steering 交互体验优化（同一作者连提 2 Issue + 1 PR）、以及 Codex/Ollama 等 AI Provider 的兼容性问题。nightly 构建持续发布，v0.2.8 迭代节奏稳定。

---

## 2. 版本发布

### 🔖 Nightly Build: [v0.2.8-nightly.20260510.6e6293e5](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)

| 属性 | 详情 |
|:---|:---|
| **构建类型** | 自动化夜间构建（可能不稳定） |
| **基线版本** | v0.2.8 → main 分支最新进展 |
| **完整变更日志** | [Compare v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main) |

> ⚠️ **迁移注意事项**：作为 nightly 版本，不建议生产环境直接使用。关注 [main 分支对比](https://github.com/sipeed/picoclaw/compare/v0.2.8...main) 可追踪 v0.2.9 潜在发布内容，当前累积变更涉及 gateway 媒体存储对齐、session 时间戳、Telegram Business 等重大特性。

---

## 3. 项目进展

**今日合并/关闭 PR: 0 条** — 此为关键健康度警示信号。

尽管 7 条 PR 活跃更新，但**无一条完成合并**，表明：

| PR | 作者 | 状态 | 功能价值 | 阻塞风险 |
|:---|:---|:---|:---|:---|
| [#2845 Telegram Business 模式](https://github.com/sipeed/picoclaw/pull/2845) | stolyarchuk | 今日新建 | ⭐⭐⭐ 商业场景扩展 | 需配置审查 |
| [#2844 Steering 最终渲染](https://github.com/sipeed/picoclaw/pull/2844) | bogdanovich | 今日新建 | ⭐⭐⭐ 核心交互体验 | 依赖 #2843 闭环 |
| [#2830 异步子代理结果投递](https://github.com/sipeed/picoclaw/pull/2830) | bogdanovich | 昨日新建，今日更新 | ⭐⭐⭐ 架构稳定性 | 关联 #2829 |
| [#2788 Session 消息时间戳](https://github.com/sipeed/picoclaw/pull/2788) | LiusCraft | 5天前，今日更新 | ⭐⭐ 前端体验 | 需 API 评审 |
| [#2783 Gateway 媒体存储对齐](https://github.com/sipeed/picoclaw/pull/2783) | zhangxinping666 | 5天前，今日更新 | ⭐⭐⭐ 可靠性修复 | 需测试覆盖 |
| [#2750 相对路径解析修复](https://github.com/sipeed/picoclaw/pull/2750) | Chris-dash-T4 | 9天前，今日更新 | ⭐⭐⭐ 安全修复 | 关联 #2749 |
| [#2462 Codex 流式输出+Telegram 重试](https://github.com/sipeed/picoclaw/pull/2462) | Glucksberg | 32天前，stale | ⭐⭐⭐ 关键 Provider 修复 | **严重阻塞，stale 风险** |

**整体推进评估**: 功能开发活跃但集成停滞，建议维护者优先处理 #2462（stale 临界）和 #2750（安全相关）。

---

## 4. 社区热点

### 🔥 最高讨论热度: [#2225 Ollama Cloud 凭证支持](https://github.com/sipeed/picoclaw/issues/2225)
- **11 条评论** | 创建于 2026-03-31 | 最后更新 2026-05-10
- **核心诉求**: 企业用户需要将 PicoClaw 接入托管 Ollama 服务（如 Ollama Cloud），但缺少身份验证配置入口
- **背后信号**: 自托管→云托管的部署模式迁移趋势，社区对 Provider 认证体系的完整性要求提升

### 🔥 最高反应数: [#2674 Codex OAuth 空响应](https://github.com/sipeed/picoclaw/issues/2674)
- **👍 3** | 3 条评论 | 关联 PR #2462
- **核心诉求**: OpenAI Codex 流式协议 (`response.output_item.done`) 解析异常导致助手响应为空
- **背后信号**: ChatGPT 后端协议与标准 OpenAI API 存在差异，社区需要更健壮的 Provider 适配层

### 🔥 最新密集讨论: bogdanovich 的 Steering 体验系列
- [#2839](https://github.com/sipeed/picoclaw/issues/2839) + [#2843](https://github.com/sipeed/picoclaw/issues/2843) + [#2844](https://github.com/sipeed/picoclaw/pull/2844)
- **核心诉求**: 多轮 steering/follow-up 场景下，最终回复的渲染逻辑需优化，避免"过度聚焦最新追问而遗忘上下文"
- **背后信号**: 复杂对话管理是 AI Agent 产品化的关键瓶颈，社区正在探索"same-agent final render"等创新模式

---

## 5. Bug 与稳定性

| 优先级 | Issue | 严重程度 | 状态 | Fix PR | 影响范围 |
|:---|:---|:---|:---|:---|:---|
| 🔴 **High** | [#2720 PID 复用导致崩溃循环](https://github.com/sipeed/picoclaw/issues/2720) | **生产级故障** | Open, stale | ❌ 无 | Gateway 启动可靠性 |
| 🟡 Medium | [#2674 Codex OAuth 空响应](https://github.com/sipeed/picoclaw/issues/2674) | 功能不可用 | Open | 🔄 [#2462](https://github.com/sipeed/picoclaw/pull/2462) (stale) | Codex/ChatGPT 用户 |
| 🟡 Medium | [#2749 Bash 相对路径解析为绝对路径](https://github.com/sipeed/picoclaw/issues/2749) | 安全/功能双重风险 | Open | 🔄 [#2750](https://github.com/sipeed/picoclaw/pull/2750) | 工具执行/workspace 隔离 |
| 🟡 Medium | [#2839 Steering 链最终回复渲染错误](https://github.com/sipeed/picoclaw/issues/2839) | 体验降级 | Open | 🔄 [#2844](https://github.com/sipeed/picoclaw/pull/2844) | 多轮对话场景 |

### 关键风险分析

**[#2720](https://github.com/sipeed/picoclaw/issues/2720)** — 最危险的遗留问题：
- `systemd-resolved` 等系统服务可能复用旧 PID，导致 PicoClaw 误判"已有实例运行"
- **根因**: 单例检查仅验证 PID 存在性，未验证进程身份（如 `/proc/{pid}/cmdline` 匹配）
- **影响**: Docker/K8s 环境中尤为危险，可能引发无限崩溃循环

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 成熟度 | 纳入可能性 | 关键依赖 |
|:---|:---|:---|:---|:---|
| **Ollama Cloud 凭证体系** | [#2225](https://github.com/sipeed/picoclaw/issues/2225) | ⭐⭐⭐ 需求明确，11 评论验证 | **高** — v0.2.9 或 v0.3.0 | Provider 配置架构扩展 |
| **Telegram Business 模式** | [#2845](https://github.com/sipeed/picoclaw/pull/2845) | ⭐⭐⭐ PR 已提交 | **极高** — 即将合并 | 配置审查 + 文档 |
| **Session 消息级时间戳** | [#2788](https://github.com/sipeed/picoclaw/pull/2788) | ⭐⭐⭐ PR 已提交 | **高** | API 兼容性评审 |
| **Steering-heavy 最终渲染优化** | [#2843](https://github.com/sipeed/picoclaw/issues/2843) + [#2844](https://github.com/sipeed/picoclaw/pull/2844) | ⭐⭐ 实验性，需验证 | **中** — 需配置开关保护 | 用户反馈收集 |
| **异步子代理结果投递策略** | [#2830](https://github.com/sipeed/picoclaw/pull/2830) | ⭐⭐⭐ 架构级改进 | **高** | 关联 #2829 闭环 |

**路线图推测**: v0.2.9 大概率包含 Telegram Business + Session 时间戳 + 路径安全修复；v0.3.0 可能聚焦 Provider 认证体系重构与 Steering 体验正式版。

---

## 7. 用户反馈摘要

### 😫 真实痛点

> **"I ran into this while trying to keep a small Android TV box alive as a real PicoClaw node"**
> — [Glucksberg, #2462](https://github.com/sipeed/picoclaw/pull/2462)

- **边缘设备部署困难**: Android TV/Termux 等非标准环境的稳定性挑战
- **Provider 碎片化**: ChatGPT 后端 vs OpenAI API 行为不一致，调试成本高
- **Steering 体验断裂**: 多轮追问后"机器人似乎忘记了最初的问题"（[#2843](https://github.com/sipeed/picoclaw/issues/2843)）

### ✅ 满意场景

- 基础 Ollama 本地部署体验流畅（推动用户尝试云扩展 → [#2225](https://github.com/sipeed/picoclaw/issues/2225)）
- Telegram 集成成熟到足以支持 Business 场景扩展

### ⚠️ 安全担忧

- 相对路径解析漏洞（[#2749](https://github.com/sipeed/picoclaw/issues/2749)）暴露 workspace 隔离机制的边界情况

---

## 8. 待处理积压

### 🚨 需维护者紧急关注

| 项 | 年龄 | 风险 | 行动建议 |
|:---|:---|:---|:---|
| [#2462 Codex 流式修复](https://github.com/sipeed/picoclaw/pull/2462) | **32 天** | stale 临界，👍 0 但功能关键 | 安排代码审查，或拆分 Telegram/Codex 两部分独立推进 |
| [#2225 Ollama 凭证](https://github.com/sipeed/picoclaw/issues/2225) | **41 天** | 11 评论无官方响应，用户流失风险 | 标记 roadmap 或提供临时 workaround |
| [#2720 PID 崩溃循环](https://github.com/sipeed/picoclaw/issues/2720) | **11 天** | 高优先级标签 + stale，生产安全隐患 | 分配修复责任人，可参考 [PR #2750](https://github.com/sipeed/picoclaw/pull/2750) 模式快速跟进 |

### 📊 积压健康度指标

```
Issues 平均响应时间: 偏长（>30天需求未官方确认）
PR 平均合并时间: 严重偏长（#2462 超30天）
Stale 标签增长率: 需警惕（2/6 Issues 已标记 stale）
```

---

## 附录：今日全部活跃链接速查

| 类型 | 编号 | 链接 |
|:---|:---|:---|
| Issue | #2225 | https://github.com/sipeed/picoclaw/issues/2225 |
| Issue | #2674 | https://github.com/sipeed/picoclaw/issues/2674 |
| Issue | #2720 | https://github.com/sipeed/picoclaw/issues/2720 |
| Issue | #2749 | https://github.com/sipeed/picoclaw/issues/2749 |
| Issue | #2839 | https://github.com/sipeed/picoclaw/issues/2839 |
| Issue | #2843 | https://github.com/sipeed/picoclaw/issues/2843 |
| PR | #2462 | https://github.com/sipeed/picoclaw/pull/2462 |
| PR | #2750 | https://github.com/sipeed/picoclaw/pull/2750 |
| PR | #2783 | https://github.com/sipeed/picoclaw/pull/2783 |
| PR | #2788 | https://github.com/sipeed/picoclaw/pull/2788 |
| PR | #2830 | https://github.com/sipeed/picoclaw/pull/2830 |
| PR | #2844 | https://github.com/sipeed/picoclaw/pull/2844 |
| PR | #2845 | https://github.com/sipeed/picoclaw/pull/2845 |

---

> **明日关注**: #2462 是否获得审查反馈 / #2845 Telegram Business 合并进度 / #2720 是否有修复 PR 跟进

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-05-11

## 1. 今日速览

NanoClaw 今日呈现**高活跃度但质量承压**的态势：24小时内19条Issues更新（17条活跃/新开，仅2条关闭）、18条PR更新（8条待合并，10条已合并/关闭），**无新版本发布**。社区贡献集中在CLI工具链完善（alexli-77单日提交6条Issue）、容器基础设施稳定性（镜像过期、挂载缺失等问题反复出现）以及安全加固三个方向。值得关注的是，容器镜像与实时源码的同步机制已成为**反复出现的系统性风险**，已有2条Issue追踪同一根因（#2378/#2379）。项目当前合并率55%（10/18），待审积压略高，需关注评审带宽。

---

## 2. 版本发布

**无新版本发布**

最新版本仍为 v2.0.54（2026-05-10发布，见 [PR #2373](https://github.com/nanocoai/nanoclaw/pull/2373)）。

---

## 3. 项目进展

### 已合并/关闭的重要 PR（10条）

| PR | 作者 | 类型 | 核心贡献 |
|:---|:---|:---|:---|
| [#2400](https://github.com/nanocoai/nanoclaw/pull/2400) | dvirarad | 文档 | 迁移后文档修复：CONTRIBUTING.md 仓库引用从 `qwibitai/nanoclaw` 更新至 `nanocoai/nanoclaw`，消除新贡献者的复制粘贴陷阱 |
| [#2402](https://github.com/nanocoai/nanoclaw/pull/2402) | glifocat | CI修复 | 仓库重命名后工作流空转问题：更新仓库守卫条件，恢复CI正常触发 |
| [#2399](https://github.com/nanocoai/nanoclaw/pull/2399) | chaim0m | 容器修复 | Claude Code 二进制文件路径解析：从 agent-runner 容器内正确解析 `/pnpm/claude`，解决首次消息失败 |
| [#2356](https://github.com/nanocoai/nanoclaw/pull/2356) | glifocat | 运维技能 | `/update-nanoclaw` 升级时自动创建 `~/.local/bin/ncl` 符号链接，修复升级后CLI不可用问题 |
| [#2392](https://github.com/nanocoai/nanoclaw/pull/2392) | glifocat | 安全加固 | CLI 范围权限 fail-closed 机制：`scopeField` 显式声明 + `sessions-get` 失败关闭，防止静默权限回归 |
| [#2330](https://github.com/nanocoai/nanoclaw/pull/2330) | Tij8i | 容器修复 | axios MCP 服务器代理兼容：适配 OneCLI CONNECT-only 网关，修复绝对形式HTTP请求被拒绝问题 |
| [#2384](https://github.com/nanocoai/nanoclaw/pull/2384) | johnnyfish | 安全修复 | 禁止 agent 伪造 OAuth 凭证流程，强制使用 `"onecli-managed"` 占位符，消除凭证泄露风险 |
| [#2090](https://github.com/nanocoai/nanoclaw/pull/2090) | charlesrsimmons | 技能修复 | `/add-dashboard` 安装修复：适配 `src/` 重构后的路径变更 |
| [#2374](https://github.com/nanocoai/nanoclaw/pull/2374) | Joi | 稳定性修复 | amplifier-remote 僵死会话轮转：硬超时 + 心跳日志，防止7分钟级服务中断（生产事故修复） |
| [#2373](https://github.com/nanocoai/nanoclaw/pull/2373) | glifocat | 文档 | v2.0.54 变更日志补录 |

**整体推进评估**：今日合并以**安全加固**（2条）、**基础设施修复**（4条）和**文档/运维**（4条）为主，功能迭代较少。核心架构问题（容器镜像生命周期管理）尚未解决，处于"打补丁"阶段。

---

## 4. 社区热点

### 讨论最活跃的 Issue

| 排名 | Issue | 评论数 | 核心诉求 |
|:---|:---|:---|:---|
| 1 | [#2379](https://github.com/nanocoai/nanoclaw/issues/2379) 容器镜像过期导致基础设施不稳定 | **2条评论** | 要求建立自动重建机制，而非手动修复 |
| 2 | 其余17条Issue | 0条评论 | 新提交尚未获得维护者响应 |

**热点分析**：#2379 是唯一获得评论互动的Issue，作者 prasta1 明确指出这是**"反复出现的模式（recurring pattern）"**而非一次性bug，并列举了受影响的文件类型（`Dockerfile`, `bun.lock`, `package.json`, `container/agent-runner/src/`）。评论互动显示维护者已确认问题但关闭为重复（指向 #2378），社区对"治标 vs 治本"存在张力——用户期望系统性解决方案，当前处理偏向个案跟踪。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重级别 | Issue | 状态 | 根因 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **P0-系统崩溃** | [#2380](https://github.com/nanocoai/nanoclaw/issues/2380) Sandbox容器启动即崩溃：`/app/src` 未挂载 | **OPEN** | 新安装环境挂载配置缺失 | 无 |
| 🔴 **P0-服务中断** | [#2374](https://github.com/nanocoai/nanoclaw/issues/2374) amplifier-remote 僵死会话轮转挂起（已修复） | **CLOSED** | 无超时机制导致7分钟中断 | [#2374](https://github.com/nanocoai/nanoclaw/pull/2374) ✅ |
| 🟡 **P1-数据丢失/静默失败** | [#2393](https://github.com/nanocoai/nanoclaw/issues/2393) poll-loop 丢弃未闭合 `</message>` 的agent响应 | **OPEN** | XML解析器对不完整标签的容错缺失 | 无 |
| 🟡 **P1-重复投递** | [#2404](https://github.com/nanocoai/nanoclaw/issues/2404) `send_message` MCP工具与`<message>`块双重投递 | **OPEN** | MCP子进程与主poll循环输出路径竞合 | 无 |
| 🟡 **P1-基础设施漂移** | [#2378](https://github.com/nanocoai/nanoclaw/issues/2378) / [#2379](https://github.com/nanocoai/nanoclaw/issues/2379) 容器镜像与源码变更不同步 | **OPEN/CLOSED** | 缺乏镜像失效检测与自动重建 | 无 |
| 🟡 **P1-升级破坏** | [#2381](https://github.com/nanocoai/nanoclaw/issues/2381) `/update-nanoclaw` 破坏agent-runner依赖 | **OPEN** | 实时挂载与镜像baked deps分叉 | 无 |
| 🟢 **P2-连接超时** | [#2401](https://github.com/nanocoai/nanoclaw/issues/2401) `pnpm run chat` MITM连接超时 | **OPEN** | Windows+WSL2环境证书/代理配置 | 无 |
| 🟢 **P2-网络兼容** | [#2377](https://github.com/nanocoai/nanoclaw/issues/2377) IPv6故障主机Telegram连接失败 | **OPEN** | 未实现IPv4回退或连通性预检 | 无 |

**稳定性风险评估**：容器生命周期管理已成**系统性技术债**，3条P1问题共享同一根因（镜像/挂载/依赖的静态-动态不一致）。建议维护者优先建立**镜像版本指纹校验**或**容器重建钩子机制**。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue/PR | 成熟度 | 纳入下一版本概率 |
|:---|:---|:---|:---|
| **Groq Whisper 云后端**（opt-in） | [#2396](https://github.com/nanocoai/nanoclaw/issues/2396) | 有前置PR [#2003](https://github.com/nanocoai/nanoclaw/pull/2003) 容器端主权模型 | **高** — 架构已就绪，仅需扩展provider |
| **语音转录V2容器化** | [#2003](https://github.com/nanocoai/nanoclaw/pull/2003) | 大型PR，4月25日创建，5月10日仍有更新 | **高** — 核心功能，审查中 |
| **顶级 `ncl` 任务调度CLI** | [#2397](https://github.com/nanocoai/nanoclaw/issues/2397) | 纯需求，无PR | **中** — 基础设施完善类，社区呼声明确 |
| **可配置的任务追赶策略** | [#2398](https://github.com/nanocoai/nanoclaw/issues/2398) | 纯需求，涉及`recurrence.ts`重构 | **中** — 需设计决策 |
| ** mounts 初始化模板命令** | [#2388](https://github.com/nanocoai/nanoclaw/issues/2388) | 函数已存在，仅需CLI暴露 | **高** — 低实现成本，新手体验关键 |
| **rootless安装支持** | [#2385](https://github.com/nanocoai/nanoclaw/issues/2385) | 架构级请求，无PR | **低** — 安全模型可能冲突 |

---

## 7. 用户反馈摘要

### 真实痛点（来自Issue描述）

| 用户场景 | 痛点 | 情绪信号 |
|:---|:---|:---|
| **b1ek** — 个人用户首次安装 | "需要为随机程序开VM，无法给机器无限制访问" | 😤 **安全焦虑**：项目要求root权限与当代安全实践冲突 |
| **participo / prasta1** — 运维/自托管用户 | `/update-nanoclaw` 后容器反复崩溃，需手动重建镜像 | 😫 **疲劳感**：同一问题反复出现，"recurring pattern"强调多次 |
| **alexli-77** — 重度CLI用户 | `ncl` 子命令缺失、参数静默忽略、UUID格式与OneCLI冲突 | 😤 **挫败感**：工具链"几乎能用但总有缺口" |
| **9766550c-netizen** — Windows开发者 | WSL2下基础`pnpm run chat`超时，120秒无响应 | 😕 **入门门槛**：环境兼容性未覆盖主流开发场景 |
| **BrettVerney** — Linux服务器用户 | IPv6配置不完整导致Telegram全链路失败 | 😫 **边缘情况**：网络环境假设过于乐观 |

### 满意点

- **安全响应速度**：glifocat 连续提交安全加固PR（#2392, #2403），社区对安全审查的响应认可
- **技能系统扩展性**：语音转录V2的"主权默认"设计获得原则性支持（#2003引用反馈）

---

## 8. 待处理积压

### 需维护者重点关注

| 类型 | 条目 | 天数 | 风险 |
|:---|:---|:---|:---|
| **大型功能PR** | [#2003](https://github.com/nanocoai/nanoclaw/pull/2003) Voice V2 容器端主权模型 | **16天** | 核心功能，长期审查可能阻塞版本节奏 |
| **基础设施PR** | [#2307](https://github.com/nanocoai/nanoclaw/pull/2307) 切换到trixie，升级依赖，缩小镜像 | **5天** | 依赖升级类PR时效性强，延迟可能引入合并冲突 |
| **安全PR待审** | [#2383](https://github.com/nanocoai/nanoclaw/pull/2383) agent-to-agent `create_agent` 授权检查 | **1天** | 安全边界修复，建议优先评审 |
| **CLI体验债务** | alexli-77 提交的6条Issue（#2390, #2385-#2389） | **1天** | 集中爆发反映CLI工具链成熟度缺口，建议批量评估 |

### 建议行动

1. **建立镜像生命周期SOP**：将 #2378/#2379/#2381 合并为epic，指派owner设计自动重建或版本锁定机制
2. **CLI专项评审**：alexli-77 的6条Issue共享"配置/创建/更新操作不完整"主题，可合并为CLI v2.1里程碑
3. **安全PR加速**：[#2383](https://github.com/nanocoai/nanoclaw/pull/2383) 与 [#2392](https://github.com/nanocoai/nanoclaw/pull/2392) 形成agent权限控制闭环，建议配对合并

---

*日报生成时间：2026-05-11 | 数据来源：NanoClaw GitHub (nanocoai/nanoclaw)*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-05-11

> **项目**: [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)  
> **日期**: 2026-05-11  
> **分析窗口**: 过去 24 小时

---

## 1. 今日速览

NullClaw 今日维持**中等活跃度**，核心工程团队聚焦**稳定性修复与启动性能优化**。过去 24 小时关闭 2 个 PR，无新 Issue 产生，社区讨论相对平静。值得关注的是，[#902](https://github.com/nullclaw/nullclaw/issues/902) 的 DNS 解析回归问题已快速闭环，显示维护者对生产故障的响应效率较高。同时，2 个待合并 PR 分别涉及**安全加固**与**黑客松功能集**，预示项目正并行推进"稳健性"与"能力扩展"两条主线。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### ✅ 已合并/关闭的 PR

| PR | 作者 | 核心贡献 | 项目推进度 |
|:---|:---|:---|:---|
| [#906](https://github.com/nullclaw/nullclaw/pull/906) | [vernonstinebaker](https://github.com/vernonstinebaker) | **延迟 Shell 沙箱自动检测**：将沙箱探测子进程推迟到 Shell 工具实际使用时，避免网关/频道启动阶段的无效开销；新增懒加载回归测试 | ⭐⭐⭐ 启动性能优化，减少冷启动时延 |
| [#905](https://github.com/nullclaw/nullclaw/pull/905) | [vernonstinebaker](https://github.com/vernonstinebaker) | **修复 Discord Android 网关启动阻塞**：Websocket 连接重试所有解析到的网关地址（而非仅首个 DNS 结果）；A2A 运行时保持懒加载，避免 Discord 启动被 Provider/MCP 初始化阻塞 | ⭐⭐⭐⭐ 跨平台稳定性关键修复，Android 场景可用性提升 |

**整体评估**：今日合并代码聚焦**启动路径的防御性编程**——两项修复均针对"启动时外部依赖阻塞/失败导致整体不可用"的架构脆弱点，显示团队对**边缘网络环境**（DNS 多记录、沙箱探测失败）的容错意识增强。

---

## 4. 社区热点

| 条目 | 热度指标 | 分析 |
|:---|:---|:---|
| [#908 Project hktn](https://github.com/nullclaw/nullclaw/pull/908) | 黑客松参赛 PR，功能覆盖广 | **WB × OpenSource Hackathon 参赛作品**，俄语提交。包含四大模块：基础设施（wasm3/websocket 依赖 vendoring 解决 macOS 网络构建问题）、推理流、成本追踪、增强 DDG 搜索。诉求信号：社区对**可复现构建**和**成本可观测性**有明确需求 |
| [#907 Security harden webhooks, HTTP secrets, and cron shell jobs](https://github.com/nullclaw/nullclaw/pull/907) | 安全加固，涉及凭证处理重构 | 系统性移除 curl 子进程的凭证传递，强制 Telegram/Discord/LINE 的显式入站信任配置。反映**安全审计压力**或生产环境合规需求上升 |

> 🔗 两项待合并 PR 均无评论互动，建议维护者主动评审以维持社区参与感。

---

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 | Fix PR |
|:---|:---|:---|:---|
| 🔴 **高** | **DNS 解析回归**：`siliconflow` Provider 在 `2026.5.x` 报 `HostResolutionFailed`，`2026.4.9` 正常 | ✅ **已关闭** | 根因系 `2026.5.x` HTTP/DNS 客户端重构引入，[Issue #902](https://github.com/nullclaw/nullclaw/issues/902) 已闭环，具体修复 PR 未在数据中显式关联 |
| 🟡 **中** | Shell 沙箱探测在启动阶段 spawn 子进程，造成不必要的延迟与失败面 | ✅ **已修复** | [#906](https://github.com/nullclaw/nullclaw/pull/906) |
| 🟡 **中** | Discord Android 网关仅重试首个 DNS 结果，单点故障导致启动 stall | ✅ **已修复** | [#905](https://github.com/nullclaw/nullclaw/pull/905) |

**稳定性健康度**：今日 3 项已知问题全部闭环，**修复率 100%**。但需关注 #902 的修复是否已 cherry-pick 到 `2026.5.x` 维护分支——Issue 关闭时间与 PR 合并时间接近，建议验证关联性。

---

## 6. 功能请求与路线图信号

| 来源 | 功能方向 | 纳入可能性评估 |
|:---|:---|:---|
| [#908](https://github.com/nullclaw/nullclaw/pull/908) | **成本追踪（Cost Tracking）** | ⭐⭐⭐⭐⭐ 高。与 LLM 推理成本敏感场景强相关，且黑客松作品通常经过场景验证 |
| [#908](https://github.com/nullclaw/nullclaw/pull/908) | **推理流（Reasoning Stream）** | ⭐⭐⭐⭐☆ 中高。对标 OpenAI o1/o3 类模型的思维链输出，竞争力功能 |
| [#908](https://github.com/nullclaw/nullclaw/pull/908) | **增强 DDG 搜索** | ⭐⭐⭐☆☆ 中。搜索能力为 Agent 核心，但需评估与现有工具链的重复度 |
| [#908](https://github.com/nullclaw/nullclaw/pull/908) | **Vendored 依赖（wasm3/websocket）** | ⭐⭐⭐⭐☆ 中高。解决 macOS 构建脆弱性，基础设施债 |
| [#907](https://github.com/nullclaw/nullclaw/pull/907) | **Webhook/Secret 安全加固** | ⭐⭐⭐⭐⭐ 高。安全 PR 通常优先级高，且涉及 breaking change（空 allow_from 拒绝） |

**路线图信号**：下一版本 (`2026.6.x`) 可能呈现 **"安全基线提升 + 推理能力增强 + 构建可复现性"** 的三元组合。

---

## 7. 用户反馈摘要

> 基于 [#902](https://github.com/nullclaw/nullclaw/issues/902) 的原始报告提炼

| 维度 | 内容 |
|:---|:---|
| **痛点** | 小版本升级（`2026.4.9` → `2026.5.x`）引入**无文档记录的 DNS 解析故障**，生产配置完全失效 |
| **使用场景** | 通过 `siliconflow`（硅基流动）Provider 调用国产/开源大模型，**中国开发者/企业用户**的典型路径 |
| **满意之处** | `2026.4.9` 的稳定性获得信任，"Exact same config, token, network works perfectly" 表明基础功能扎实 |
| **不满之处** | **升级风险不可预测**：HTTP/DNS 客户端重构未标注为 breaking change，缺乏迁移指南 |
| **隐含诉求** | 需要**更细粒度的 Provider 兼容性测试**、**版本发布说明中的基础设施变更警示** |

---

## 8. 待处理积压

| 条目 | 创建时间 | 风险 | 建议行动 |
|:---|:---|:---|:---|
| [#908](https://github.com/nullclaw/nullclaw/pull/908) | 2026-05-10 | 黑客松作品通常有评审截止日期，延迟响应可能挫伤首次贡献者 | 分配 reviewer，明确评审时间线；若功能模块过大，建议拆分为独立 PR |
| [#907](https://github.com/nullclaw/nullclaw/pull/907) | 2026-05-10 | 安全加固涉及 breaking change（空 allow_from 拒绝），需协调版本发布节奏 | 优先评审，评估是否需 `2026.6.0` 版本号而非 patch 版本 |

> **长期积压提示**：数据中未显示 >7 天未响应的 Issue/PR，项目**当前无显著维护债务**，健康度良好。

---

## 附录：关键链接速查

| 类型 | 链接 |
|:---|:---|
| 项目主页 | https://github.com/nullclaw/nullclaw |
| Issue #902 (DNS 回归) | https://github.com/nullclaw/nullclaw/issues/902 |
| PR #905 (Discord Android 修复) | https://github.com/nullclaw/nullclaw/pull/905 |
| PR #906 (Shell 沙箱懒加载) | https://github.com/nullclaw/nullclaw/pull/906 |
| PR #907 (安全加固) | https://github.com/nullclaw/nullclaw/pull/907 |
| PR #908 (黑客松作品) | https://github.com/nullclaw/nullclaw/pull/908 |

---

*本日报基于公开 GitHub 数据生成，未包含私有讨论或安全披露信息。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-05-11

> **项目定位**：NEAR AI 开源的 AI 智能体与个人 AI 助手运行时框架  
> **分析周期**：2026-05-10 至 2026-05-11（UTC）

---

## 1. 今日速览

IronClaw 今日呈现**高强度开发态势**，28 个 PR 更新（12 个已合并/关闭）和 8 个 Issue 更新表明核心团队正在加速推进 **Reborn 架构重构**这一重大工程。Reborn 相关 PR 占据当日合并量的 **75%**（9/12），涵盖配置边界提取、TurnRunner 工作器组合、类型安全强化及 CLI 独立二进制等关键基础设施。与此同时，**Nightly E2E 测试失败**（#3447）和 crates.io 发布滞后（#3259）暴露出供应链与 CI 稳定性风险，需引起关注。整体项目健康度：**开发活跃，但质量门禁与发布管道存在压力**。

---

## 2. 版本发布

**无新版本发布**

> 值得注意的是，仓库已标记至 `v0.27.0`（2026-04-29），但 [crates.io](https://crates.io/crates/ironclaw) 仍停滞在 `0.24.0`（2026-03-31），下游用户因 wasmtime 28.x 的 CVE 无法升级。详见社区热点 #3259。

---

## 3. 项目进展

### 已合并/关闭的关键 PR（12 个）

| PR | 作者 | 核心贡献 | 链接 |
|:---|:---|:---|:---|
| **#3458** | serrrfirat | **Reborn 配置边界提取**：新增独立 `ironclaw_reborn_config` crate，将 home/profile/doctor 配置从 CLI 解耦，实现无副作用的启动配置层 | [PR #3458](https://github.com/nearai/ironclaw/pull/3458) |
| **#3457** | serrrfirat | **TurnRunner 工作器组合（正式版）**：基于 `origin/reborn-integration` 的干净分支，实现单运行 claim、心跳机制、注册表驱动与恢复映射 | [PR #3457](https://github.com/nearai/ironclaw/pull/3457) |
| **#3455** | serrrfirat | **Reborn 独立 CLI 二进制**：新增 `ironclaw_reborn_cli` workspace 成员与 `ironclaw-reborn` 二进制目标，首个 `doctor` 命令落地 | [PR #3455](https://github.com/nearai/ironclaw/pull/3455) |
| **#3453** | serrrfirat | **循环支持身份字段类型化**：将 `run_id`/`turn_id` 从裸字符串替换为 `TurnRunId`/`TurnId`，新增 `CapabilityDeniedReasonKind` 枚举，关闭 #3452 | [PR #3453](https://github.com/nearai/ironclaw/pull/3453) |
| **#3444** | serrrfirat | **主机运行时发布门控强化**：为 #3067 新增两项 Reborn E2E 门控测试，验证 `RedactOutput` 与 `EnforceOutputLimit`，防止 JWT/bearer 令牌泄漏 | [PR #3444](https://github.com/nearai/ironclaw/pull/3444) |
| **#3442** | serrrfirat | **LoopExit 契约验收**：验证 #3232 全部 22 项验收标准通过，补充 7 项缺口测试 | [PR #3442](https://github.com/nearai/ironclaw/pull/3442) |
| **#2169** | WynnD | **WASM 工具模式保真**：保留顶层类型属性提示，规范化 nullish 字符串参数（`"null"`/`"none"` 不再作为字面量转发） | [PR #2169](https://github.com/nearai/ironclaw/pull/2169) |
| **#2593** | dependabot[bot] | **GitHub Actions 依赖更新**（14 项）：`actions/checkout` 4.3.1→6.0.2 等 | [PR #2593](https://github.com/nearai/ironclaw/pull/2593) |

### Reborn 架构里程碑评估

```
[Reborn 集成进度] ████████████████████░░░░ ~80%
  ├─ 配置层解耦        ✅ #3458 完成
  ├─ TurnRunner 核心   ✅ #3457 完成（替代 #3446）
  ├─ LoopExit 验证     ✅ #3442/#3460 完成
  ├─ 主机运行时安全     ✅ #3444 完成
  ├─ 存储底基           🔄 #3421 待合并
  ├─ 模型路由/提供者池  🔄 #3459 刚立项
  └─ 循环能力主机适配器  🔄 #3454 审查中
```

---

## 4. 社区热点

### 🔥 最高关注度：crates.io 发布滞后（#3259）

| 指标 | 数据 |
|:---|:---|
| Issue | [nearai/ironclaw #3259](https://github.com/nearai/ironclaw/issues/3259) |
| 创建 | 2026-05-05 | 更新 | 2026-05-10 |
| 评论 | 2 | 👍 | 0 |

**核心诉求**：下游消费者被锁定在 `0.24.0`，无法获取 `0.25.0`–`0.27.0` 的安全修复（wasmtime 28.x CVE）。这是**供应链安全阻塞问题**，影响 Rust 生态采用者的信任度。

**建议行动**：维护者需优先处理 crates.io 发布权限或自动化管道（如 `cargo publish` CI job）。

---

### 🔥 Reborn 模型路由用户可控性（#3459）

| Issue | [nearai/ironclaw #3459](https://github.com/nearai/ironclaw/issues/3459) |
|:---|:---|
| 目的 | 让本地/开发用户直接选择配置好的 provider+model 路由，隐藏内部 model-profile 术语 |

**信号解读**：这是 Reborn **首次面向终端用户的配置简化**，表明架构团队开始从"内部重构"转向"开发者体验"。与 #3458（配置边界）形成上下游依赖关系。

---

### 🔥 LLM 提供者配置泄漏修复（#3416）

| PR | [nearai/ironclaw PR #3416](https://github.com/nearai/ironclaw/pull/3416) |
|:---|:---|
| 规模 | XL | 风险 | 高 | 标签 | `scope: channel/cli, channel/web, workspace, config, setup, docs, dependencies` |

**技术债务规模**：触及 7 个 scope 标签，说明此前 provider-specific 的认证、模型获取、嵌入配置存在**广泛的架构泄漏**。ilblackdragon 的 facade 模式重构是长期可维护性的关键投资，但 XL 规模 + 高风险意味着审查周期可能较长。

---

## 5. Bug 与稳定性

| 优先级 | Issue/PR | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| **P0** | [#3447](https://github.com/nearai/ironclaw/issues/3447) | **Nightly E2E 失败**：`Full E2E / E2E (v2-engine)` 在 commit `6e6eca7` 失败 | 🔴 **无 Fix PR** | — |
| **P1** | [#2752](https://github.com/nearai/ironclaw/issues/2752) | `onboard` 命令在 provider 步骤抛出 DB 错误（`DATABASE_URL=postgres://%2Frun%2Fpg/ironclaw` 场景） | 🟡 待诊断 | 无 |
| **P1** | [#3381](https://github.com/nearai/ironclaw/pull/3381) | Telegram 配对 UX 与 OAuth 失败恢复（关闭 #3317, #3319, #3320） | 🟢 **PR 待合并** | #3381 |

### 稳定性风险评估

- **CI 可靠性**：Nightly E2E 失败无自动恢复或根因分析，可能掩盖 Reborn 集成回归
- **数据库设置**：#2752 的 Unix socket 路径编码问题（`%2F` = `/`）表明连接字符串解析存在边缘情况
- **安全修复管道**：#3259 的 crates.io 滞后直接阻断 CVE 修复分发

---

## 6. 功能请求与路线图信号

| 来源 | 内容 | 纳入可能性 | 依据 |
|:---|:---|:---|:---|
| **#3459** | 用户可选模型路由 + 提供者池 | **高** | 已有 #3410, #3429 相关 Issue，#3459 刚创建即关联 epic #3107 |
| **#3451** | LoopCheckpoint 直接 DB 操作（避免全量快照水合） | **高** | #3439 审查跟进，性能优化类技术债，通常优先处理 |
| **#3452/#3453** | 循环支持身份字段类型化 | **✅ 已完成** | #3453 已合并 |
| **#3421** | Reborn 共享存储底基 | **中-高** | PR 已开，待合并；阻塞后续 adapter 开发 |
| **#3352** | WASM Product Adapter 主机认证/出口原语 | **中** | 7 层 stack 的第 2 层，依赖 #3316 拆分 |

**路线图推断**：Reborn 的下一个可见里程碑可能是 **v0.28.0**，包含：
- 独立 CLI 可用（`ironclaw-reborn doctor`）
- TurnRunner 端到端运行
- 用户级模型选择

---

## 7. 用户反馈摘要

### 从 Issue 评论提炼的真实痛点

| 用户场景 | 痛点 | 来源 |
|:---|:---|:---|
| **Rust 下游集成者** | "Cannot upgrade past 0.24.0 due to wasmtime CVEs" — 安全合规阻塞 | #3259 |
| **本地/自托管用户** | `onboard` 在 Unix socket + SSL disable 组合下崩溃 | #2752 |
| **Telegram → Gmail OAuth 跨渠道用户** | 认证流程中断后无法恢复，陷入"卡住会话" | #3381 |
| **Reborn 早期采用者** | 需要直接控制模型路由，而非抽象的 model-profile 术语 | #3459 |

### 满意度信号
- **#3442 验收通过**：22/22 LoopExit 契约标准全部通过，表明 Reborn 核心状态机可靠性达标
- **#3444 安全门控**：主动添加输出脱敏与大小限制测试，显示安全设计意识

---

## 8. 待处理积压

### ⚠️ 需维护者关注的高龄/高风险项

| Issue/PR | 年龄 | 风险 | 提醒 |
|:---|:---|:---|:---|
| [#3259](https://github.com/nearai/ironclaw/issues/3259) crates.io 发布 | 6 天 | **供应链安全** | 影响所有 Rust 用户，需 @core 团队分配发布权限 |
| [#2752](https://github.com/nearai/ironclaw/issues/2752) onboard DB 错误 | 20 天 | **新用户流失** | Bug Bash P1 标签，但仅 1 条评论，可能已被遗忘 |
| [#3416](https://github.com/nearai/ironclaw/pull/3416) LLM facade 重构 | 2 天 | **架构债务** | XL + high risk，需资深维护者深度审查，避免成为"永远打开的 PR" |
| [#3447](https://github.com/nearai/ironclaw/issues/3447) Nightly E2E 失败 | 1 天 | **回归检测失效** | 无根因分析，建议强制要求失败 Issue 自动关联诊断评论 |

### 依赖机器人 PR 堆积

| PR | 状态 | 说明 |
|:---|:---|:---|
| #3361 | OPEN | 43 个依赖更新（everything-else 组）— 规模过大，建议拆分 |
| #3360 | OPEN | tokio 生态 6 项更新 — 核心运行时，需性能基准验证 |
| #3247 | OPEN | wasmtime 组 4 项更新 — **与 #3259 CVE 直接相关** |

---

## 附录：数据速查

| 指标 | 数值 | 环比评估 |
|:---|:---|:---|
| PR 更新 | 28（待合并 16 / 已处理 12） | 🔺 活跃 |
| Issue 更新 | 8（新开/活跃 6 / 关闭 2） | 正常 |
| Reborn 相关 PR 占比 | 75%（9/12 已处理） | 🔺 聚焦 |
| 无评论/👍 的 Issue/PR | 多数 | 🔻 社区参与度低 |
| 外部贡献者 PR | 2（WynnD, dependabot） | 🔻 核心团队主导 |

---

*日报生成时间：2026-05-11*  
*数据来源：GitHub API / 项目公开活动流*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-05-11

> **项目**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
> **日期**: 2026-05-11  
> **分析窗口**: 过去 24 小时（2026-05-10 至 2026-05-11）

---

## 1. 今日速览

LobsterAI 今日呈现**高积压、低吞吐**的特征：15 个 PR 处于待合并状态且全部标记为 `stale`（创建日期均为 2026-04-09，距今已 32 天），仅 1 个 PR 关闭；Issues 侧仅关闭 1 个历史 MCP 相关 Bug，无新 Issue 开启。社区活跃度指标偏低，但 PR 队列中积累了大量涉及核心稳定性（网关崩溃、数据竞争、状态管理）的修复，**合并瓶颈明显**，项目健康度受维护响应速度拖累。

---

## 2. 版本发布

**无新版本发布。**

最新 Release 仍为历史版本，今日无更新。

---

## 3. 项目进展

### 今日关闭的 PR

| PR | 作者 | 说明 |
|:---|:---|:---|
| [#857](https://github.com/netease-youdao/LobsterAI/pull/857) `feat: 新增MCP对http streaming的支持` | noobdawn | **MCP HTTP Streaming 支持已关闭**。该 PR 为实验性实现（作者标注 "vibe coding 产物"），使用 BrainMaker MCP 测试通过，SSE 未测试。关闭原因未明确说明，但结合关联 Issue #820 的关闭，推测该功能可能以其他方式合入或搁置。 |

**整体评估**：今日无代码合入主分支，项目代码层面**未实质前进**。15 个待合并 PR 覆盖 Agent ID 生成、设置页交互、定时任务、消息队列、网关配置、搜索功能、SQLite 迁移、权限路由、SSE 解析等关键模块，**合并潜力巨大但尚未释放**。

---

## 4. 社区热点

### 最活跃讨论：MCP 打包可用性问题（Issue #820）

| 指标 | 数据 |
|:---|:---|
| **Issue** | [#820 dev阶段MCP可用；打包后，MCP不可用](https://github.com/netease-youdao/LobsterAI/issues/820) |
| **状态** | ✅ 已关闭（2026-05-10） |
| **作者** | noobdawn |
| **评论数** | 1 |
| **创建** | 2026-03-25 |
| **生命周期** | 46 天 |

**诉求分析**：
- **核心痛点**：MCP 工具在开发环境（`2026.3.16-beta.1`、`2026.3.25`）显示 `0 tools`，但源码克隆后自行构建可正常工作
- **用户画像**：深度使用者，具备源码调试能力，尝试通过官方配置复现问题
- **背后信号**：**打包/发布流程与开发环境存在环境差异**，可能涉及：
  - MCP 服务端发现路径在打包后被篡改
  - 依赖项（如 `brainmaker` MCP SDK）在 Electron/打包后加载失败
  - 权限或沙箱限制导致子进程无法启动 MCP 服务器

> 📌 该 Issue 的关闭未附带明确修复说明，可能为重复问题或迁移至内部跟踪，建议维护者补充关闭原因以闭环社区反馈。

---

## 5. Bug 与稳定性

### 按严重程度排列的待修复 Bug（全部有 PR，均未合并）

| 严重度 | PR | 问题描述 | 影响范围 | 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **P0 - 服务不可用** | [#1593](https://github.com/netease-youdao/LobsterAI/pull/1593) | OpenClaw 网关因 `skipMissedJobs` 未知字段持续崩溃重启，**所有环境（本地+生产）受影响** | 全部用户 | `stale` 待合并 |
| 🔴 **P0 - 数据竞争** | [#1602](https://github.com/netease-youdao/LobsterAI/pull/1602) | `addMessage` 序列号并发竞争导致重复，高并发场景消息顺序错乱 | 高频使用用户 | `stale` 待合并 |
| 🟡 **P1 - 状态不一致** | [#1601](https://github.com/netease-youdao/LobsterAI/pull/1601) | 网关重连后 session 停止冷却丢失，**已停止会话被 IM 消息意外复活** | IM 集成用户 | `stale` 待合并 |
| 🟡 **P1 - 状态不一致** | [#1598](https://github.com/netease-youdao/LobsterAI/pull/1598) | `executionMode` 硬编码为 `local`，用户配置被忽略，UI 与实际行为不一致 | 所有用户 | `stale` 待合并 |
| 🟡 **P1 - 数据残留** | [#1584](https://github.com/netease-youdao/LobsterAI/pull/1584) | Agent ID 基于名称生成，删除后重新创建同名 Agent 导致**旧数据意外复活** | 多 Agent 用户 | `stale` 待合并 |
| 🟡 **P1 - 错误广播** | [#1599](https://github.com/netease-youdao/LobsterAI/pull/1599) | 权限响应被广播到双引擎，非预期引擎收到响应导致混乱 | 双引擎用户 | `stale` 待合并 |
| 🟡 **P1 - 异常吞没** | [#1603](https://github.com/netease-youdao/LobsterAI/pull/1603) | `startSession`/`continueSession` 异常仅 `console.error`，**用户无感知失败** | 所有用户 | `stale` 待合并 |
| 🟡 **P1 - 迁移缺陷** | [#1595](https://github.com/netease-youdou/LobsterAI/pull/1595) | SQLite 迁移失败后仍标记完成，**失败迁移永久无法重试** | 升级用户 | `stale` 待合并 |
| 🟢 **P2 - 体验问题** | [#1585](https://github.com/netease-youdao/LobsterAI/pull/1585) | 设置页 Enter 键（含 IME 确认）意外保存关闭 | 所有用户 | `stale` 待合并 |
| 🟢 **P2 - 体验问题** | [#1600](https://github.com/netease-youdao/LobsterAI/pull/1600) | 定时任务保存成功后仍提示"未保存"确认对话框 | 定时任务用户 | `stale` 待合并 |
| 🟢 **P2 - 错误提示** | [#1588](https://github.com/netease-youdao/LobsterAI/pull/1588) | 已配置 IM 通道仍错误提示"未配置"，存在 12 天 | 定时任务用户 | `stale` 待合并 |
| 🟢 **P2 - 搜索缺陷** | [#1594](https://github.com/netease-youdao/LobsterAI/pull/1594) | 搜索仅匹配标题、仅限当前 Agent，无法跨 Agent/内容搜索 | 多 Agent 用户 | `stale` 待合并 |
| 🟢 **P2 - 内容丢失** | [#1607](https://github.com/netease-youdao/LobsterAI/pull/1607) | Anthropic/Gemini SSE 行未缓冲，JSON 分块解析失败导致**内容静默丢失** | Claude/Gemini 用户 | `stale` 待合并 |

### 安全修复

| PR | 问题 | 状态 |
|:---|:---|:---|
| [#1606](https://github.com/netease-youdao/LobsterAI/pull/1606) | NetEase Bee 密钥明文写入配置文件，与其他 8 个 IM 通道的安全实践不一致 | `stale` 待合并 |

---

## 6. 功能请求与路线图信号

### 已提交的功能 PR（待合并）

| PR | 功能 | 纳入可能性评估 |
|:---|:---|:---|
| [#1590](https://github.com/netease-youdao/LobsterAI/pull/1590) | **AI 回复期间连续发送消息（客户端消息队列）** | ⭐⭐⭐⭐⭐ 高优先级用户体验改进，实现完整（含编辑/删除排队消息），与主流 ChatGPT/Claude 交互对齐 |
| [#857](https://github.com/netease-youdao/LobsterAI/pull/857)（已关闭） | MCP HTTP Streaming 支持 | ⚠️ 实验性实现被关闭，但 Issue #820 显示社区需求强烈，预计将以更完整方案回归 |

### 路线图推断

基于 PR 集中领域，下一版本（若维护者恢复合并）可能聚焦：
1. **Cowork 核心稳定性**（消息队列、并发控制、状态管理）— 5 个 PR
2. **网关/部署可靠性**（OpenClaw 配置、密钥管理、重连逻辑）— 3 个 PR
3. **交互体验打磨**（设置页、搜索、定时任务）— 4 个 PR

---

## 7. 用户反馈摘要

### 从 Issue #820 提炼

| 维度 | 内容 |
|:---|:---|
| **痛点** | 官方发布版本与自行构建行为不一致，"同样的配置，打包后就坏" |
| **场景** | 依赖 MCP 工具扩展 AI 能力的进阶用户，使用 BrainMaker 等第三方 MCP 服务 |
| **满意度** | ❌ 低 — 46 天等待，最终关闭未说明修复方式 |
| **用户能力** | 高 — 能 clone 源码调试、对比环境差异、提供截图 |
| **核心诉求** | 需要**可信赖的发布流程**，开发环境与生产环境行为一致 |

### 从 PR #857 评论提炼

| 维度 | 内容 |
|:---|:---|
| **痛点** | MCP Streaming 为项目急需功能，社区等不及官方排期 |
| **用户行为** | 自行实现并提交 PR（"vibe coding 产物"），坦诚质量存疑但希望快速合入 |
| **信号** | **功能缺口导致用户被迫维护 fork**，长期将分流社区贡献力 |

---

## 8. 待处理积压

### ⚠️ 紧急关注：32 天未合并的 PR 队列

全部 15 个待合并 PR 创建于 **2026-04-09**，最后更新 **2026-05-10**（批量同步，非实质审查），已积压 **32 天**。按模块分布：

| 模块 | PR 数量 | 核心风险 |
|:---|:---|:---|
| `cowork` | 6 | 消息顺序错乱、会话意外复活、配置失效、异常吞没 — **核心功能不可用** |
| `main` | 5 | 网关崩溃、数据迁移失败、Agent 数据复活 — **基础设施风险** |
| `renderer` | 3 | 交互缺陷、SSE 内容丢失 — **体验降级** |
| `openclaw` | 2 | 配置不兼容、密钥泄露 — **运维与安全** |
| `scheduled-task` | 2 | 错误提示、脏状态误判 — **功能误导** |

### 建议维护者优先处理顺序

```
1. #1593（P0 - 网关崩溃）→ 2. #1602（P0 - 数据竞争）→ 3. #1601/#1599（P1 - 状态混乱）
→ 4. #1606（安全 - 密钥泄露）→ 5. #1590（功能 - 消息队列，提升用户感知）
```

### 长期未响应 Issue

| Issue | 天数 | 状态 | 说明 |
|:---|:---|:---|:---|
| #820 | 46 天 | 刚关闭 | 关闭原因未公开，建议补充 resolution 标签 |

---

## 健康度评分

| 指标 | 评分 | 说明 |
|:---|:---|:---|
| 代码活跃度 | ⭐⭐☆☆☆ | 无合并，仅 1 PR 关闭 |
| 社区响应度 | ⭐⭐☆☆☆ | 32 天 PR 积压，批量同步无实质审查 |
| 稳定性修复储备 | ⭐⭐⭐⭐⭐ | 15 个高质量修复 PR 待释放 |
| 功能演进 | ⭐⭐⭐☆☆ | 消息队列功能就绪但未合入 |
| 安全实践 | ⭐⭐⭐⭐☆ | 密钥管理 PR 就绪，待合并后提升 |

**综合评估**：项目处于**"高潜力、低流动"**状态，技术债务控制良好（PR 质量高、描述清晰），但**维护带宽瓶颈严重**，建议优先恢复合并节奏以释放累积价值。

---

*本日报基于 GitHub 公开数据生成，未包含私有仓库或内部沟通信息。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-05-11

> **项目**: [moltis-org/moltis](https://github.com/moltis-org/moltis)  
> **日期**: 2026-05-11  
> **分析师**: AI 智能体与个人 AI 助手领域开源项目分析师

---

## 1. 今日速览

Moltis 今日活跃度**偏低**，过去24小时仅产生1条 Issue 关闭记录，无新增 PR 活动。项目以**版本发布**为主要动态，发布了 `20260510.01` 版本，显示维护节奏趋于稳定但社区贡献参与度有限。Issues 关闭率100%（1/1），无新增待处理问题，整体健康度尚可，但需关注社区活跃度的持续下滑趋势。

| 指标 | 数值 | 状态 |
|:---|:---|:---|
| 24h Issues 更新 | 1 | ⚠️ 偏低 |
| 24h PR 更新 | 0 | 🔴 停滞 |
| 版本发布 | 1 | 🟢 正常 |
| 社区互动量 | 低 | 🔴 需关注 |

---

## 2. 版本发布

### [20260510.01](https://github.com/moltis-org/moltis/releases/tag/20260510.01)

| 属性 | 详情 |
|:---|:---|
| **发布日期** | 2026-05-10 |
| **版本号** | 20260510.01（日历版本控制） |
| **标签/说明** | 未提供详细 Release Notes |

**⚠️ 重要提示**：该版本未附详细更新日志，建议维护者补充以下内容：
- 变更清单（Features / Fixes / Breaking Changes）
- 破坏性变更声明
- 迁移指南（如有数据库/配置变更）
- 兼容性矩阵

**用户行动建议**：生产环境升级前，建议审查 [commit 历史](https://github.com/moltis-org/moltis/commits/20260510.01) 或等待社区验证反馈。

---

## 3. 项目进展

**今日无合并 PR**，无功能迭代或代码修复进入主干。

| 维度 | 状态 |
|:---|:---|
| 功能推进 | ⏸️ 停滞 |
| 技术债务清理 | ⏸️ 无进展 |
| 社区贡献接纳 | ⏸️ 无外部 PR 合并 |

**评估**：项目代码层面今日无实质性前进。版本发布可能包含未公开披露的变更，但缺乏透明度不利于社区信任建设。

---

## 4. 社区热点

### 唯一活跃议题：[#533 [Feature]: "+" button for adding message attachments](https://github.com/moltis-org/moltis/issues/533)

| 属性 | 详情 |
|:---|:---|
| **状态** | ✅ CLOSED（2026-05-10 关闭）|
| **作者** | [@gabevf](https://github.com/gabevf) |
| **创建时间** | 2026-03-31（历时 40 天）|
| **评论数** | 4 |
| **点赞数** | 0 |
| **标签** | `enhancement` |

**诉求分析**：

该 Issue 请求为消息附件添加 **"+" 按钮**交互入口，属于**核心 UX 改进**——直接关联 Moltis 作为 AI 助手平台的文件/多媒体输入能力。

**关闭信号解读**：
- ✅ **积极**：功能可能已在 `20260510.01` 版本中实现（时间吻合），但未在 Release Notes 中明确标注
- ⚠️ **风险**：若为"无计划关闭"或"重复关闭"，可能引发用户困惑

**建议**：维护者应在 Issue 关闭时添加 `completed`/`not_planned` 状态说明及关联 commit/PR，提升可追溯性。

---

## 5. Bug 与稳定性

| 严重程度 | 数量 | 详情 |
|:---|:---|:---|
| 🔴 Critical | 0 | — |
| 🟠 High | 0 | — |
| 🟡 Medium | 0 | — |
| 🟢 Low | 0 | — |

**今日无新增 Bug 报告**，亦无待修复问题积压。结合版本发布时点，建议社区关注：
- `20260510.01` 是否存在回归问题（待观察 48-72 小时）
- 附件功能实现是否引入边缘场景崩溃（大文件、格式兼容性等）

---

## 6. 功能请求与路线图信号

| 功能请求 | 状态 | 纳入可能性评估 |
|:---|:---|:---|
| 消息附件 "+" 按钮（#533）| ✅ 已关闭 | **高** — 极可能已随 20260510.01 发布 |

**下一版本信号**：
- 无活跃功能请求待处理，路线图透明度不足
- 建议维护者公开 [GitHub Projects](https://github.com/moltis-org/moltis/projects) 或 [Discussions](https://github.com/moltis-org/moltis/discussions) 收集社区优先级反馈

---

## 7. 用户反馈摘要

基于 [#533](https://github.com/moltis-org/moltis/issues/533) 的有限信息：

| 维度 | 内容 |
|:---|:---|
| **痛点** | 当前附件添加入口不够直观，用户需寻找非标准交互方式 |
| **使用场景** | AI 对话中上传文档、图片等多模态输入 |
| **满意度** | 待验证 — 功能若已上线需收集 UX 反馈 |
| **不满意** | 40 天响应周期偏长；Preflight Checklist 中"包含会话上下文"项未勾选，或反映模板繁琐 |

**深层需求**：用户期望 Moltis 对标主流 ChatGPT/Claude 客户端的**零摩擦附件体验**，这是 AI 助手产品的**基础竞争力**。

---

## 8. 待处理积压

**今日无新增积压**，但需系统性关注以下长期模式：

| 风险指标 | 观察 | 建议行动 |
|:---|:---|:---|
| PR 活跃度 | 连续 0 PR 状态 | 审视贡献者 onboarding 流程 |
| Issue 关闭透明度 | #533 关闭无说明 | 强制关闭模板要求关联 commit |
| Release 文档规范 | 20260510.01 无说明 | 引入自动化 changelog 生成（如 [git-cliff](https://git-cliff.org/)）|
| 社区互动 | 0 点赞低参与度 | 激活 [GitHub Discussions](https://github.com/moltis-org/moltis/discussions) |

---

## 附录：今日相关链接汇总

| 资源 | 链接 |
|:---|:---|
| 项目主页 | https://github.com/moltis-org/moltis |
| 最新版本 | https://github.com/moltis-org/moltis/releases/tag/20260510.01 |
| 关闭 Issue #533 | https://github.com/moltis-org/moltis/issues/533 |
| Issues 列表 | https://github.com/moltis-org/moltis/issues |
| PR 列表 | https://github.com/moltis-org/moltis/pulls |

---

> **明日关注**：验证 `20260510.01` 社区反馈；监测是否有 #533 相关回归报告；追踪 PR 活动是否恢复。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-05-11

> 项目: [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw) (原 QwenPaw)  
> 分析周期: 过去 24 小时（截至 2026-05-11）

---

## 1. 今日速览

CoPaw 今日保持**高活跃度**，24 小时内产生 **11 条 Issues 更新**（9 活跃/新开，2 关闭）与 **10 条 PR 更新**（9 待合并，1 关闭），无新版本发布。社区贡献呈现显著多元化：首次贡献者 `soliman10` 单日提交 5 个 PR，覆盖安全加固、异步 I/O 优化、测试覆盖、多媒体通道及代码同步；同时有 2 个工具插件 PR（绘图、记忆蒸馏）和 1 个厂商适配修复进入评审队列。Issues 侧聚焦**用户体验痛点**（会话丢失、UI 渲染延迟、Windows 弹窗）与**企业级需求**（TLS 自定义证书、模型故障转移），显示项目正从早期功能建设向**稳定性与生产就绪**过渡。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的 PR

| PR | 作者 | 状态 | 进展说明 |
|:---|:---|:---|:---|
| [#4172](https://github.com/agentscope-ai/QwenPaw/pull/4172) | wjt0321 | **已关闭** | OpenWond 绘图工具插件（GPT Image 2 + Nano Banana 回退），支持 3 模型梯队计费策略 |

> **整体推进评估**: 该 PR 虽关闭，但展示了社区在**多模态工具插件生态**上的探索方向。今日无实际合并 PR，9 个待审 PR 堆积，评审瓶颈显现。

### 值得关注的待合并 PR（按技术价值排序）

| PR | 作者 | 技术价值 | 风险点 |
|:---|:---|:---|:---|
| [#4180](https://github.com/agentscope-ai/QwenPaw/pull/4180) | soliman10 | 🔒 **安全加固**: MD5 → SHA-256（iMessage/WeCom/DingTalk + 文件工具） | 字符串截断保留兼容性，需验证 key 长度约束 |
| [#4173](https://github.com/agentscope-ai/QwenPaw/pull/4173) | Lin928rain | 🐛 **核心修复**: Unix `execute_shell_command` 后台进程挂起问题 | 涉及 subprocess 重定向机制变更，需跨平台测试 |
| [#4171](https://github.com/agentscope-ai/QwenPaw/pull/4171) | wjt0321 | 🧠 **创新功能**: 记忆蒸馏插件（~92% 噪声削减的标题 diff 引擎） | 算法效果需独立验证，标题 diff 对非结构化文本的泛化性 |
| [#4169](https://github.com/agentscope-ai/QwenPaw/pull/4169) | Nioolek | 🔧 **厂商适配**: 火山引擎 VOLCENGINE 模型连通修复 + 多模态标记 | 关闭自动发现（`support_model_discovery=False`），维护成本权衡 |
| [#4179](https://github.com/agentscope-ai/QwenPaw/pull/4179) | soliman10 | ⚡ **性能优化**: 阻塞文件操作 → 异步 I/O | 描述为"自我优化"的 AI 生成文案，实际代码需人工审查 |
| [#4178](https://github.com/agentscope-ai/QwenPaw/pull/4178) | soliman10 | 🎵 **体验增强**: Console 通道本地音频文件支持 | 边界情况：路径解析失败回退 |
| [#4177](https://github.com/agentscope-ai/QwenPaw/pull/4177) | soliman10 | 🧪 **质量基建**: `tag_parser.py` 单元测试（JSONDecodeError + thinking 标签） | 首次贡献者测试代码，需确认断言完整性 |
| [#4120](https://github.com/agentscope-ai/QwenPaw/pull/4120) | Morxi | 🔐 **安全通道**: Matrix E2EE 验证流程增强（设备所有者验证图标修复） | 标记"Under Review"，加密流程变更需安全审计 |
| [#4176](https://github.com/agentscope-ai/QwenPaw/pull/4176) | soliman10 | ⚠️ **疑似误操作**: "new updates" 空描述 PR | 可能为分支同步噪音，建议关闭 |

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 | 深层分析 |
|:---|:---|:---|:---|:---|
| 🥇 | [#578](https://github.com/agentscope-ai/QwenPaw/issues/578) OpenClaw-Inspired Features for Compounding Agent Value | **8** | 借鉴 OpenClaw 架构实现"复利式价值增长" | **战略性 meta-issue**，3 月创建持续活跃，反映社区对**长期用户粘性机制**的渴望，非短期功能可解决 |
| 🥈 | [#3843](https://github.com/agentscope-ai/QwenPaw/issues/3843) 会话历史突然消失，新消息路由至不同会话 | **7** | 数据持久性与会话状态一致性 | **P0 级体验灾难**：用户描述"历史空白但标题仍在"，暗示前端状态与后端存储分离，可能涉及 IndexedDB/本地存储竞态条件 |
| 🥉 | [#2429](https://github.com/agentscope-ai/QwenPaw/issues/2429) Cron 任务触发"你打断了我"提示 | **6** | 定时任务与对话中断机制的冲突 | 架构设计问题：Agent 缺乏**非交互式执行上下文**，将 cron 触发的后台任务误判为用户打断 |

### 反应度分析

- 👍 全为 0，表明 Issues 缺乏社区投票机制的有效使用，或用户尚未形成"点赞优先"的互动习惯
- 所有活跃 Issue 均更新于 2026-05-10，显示**集中式的问题爆发**，可能与近期版本发布或用户增长相关

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 现象 | 影响范围 | Fix PR 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **P0 - 数据丢失** | [#3843](https://github.com/agentscope-ai/QwenPaw/issues/3843) | 会话历史消失，消息路由错误 | 所有使用会话功能的用户 | ❌ 无 |
| 🔴 **P0 - 失控风险** | [#4170](https://github.com/agentscope-ai/QwenPaw/issues/4170) | Agent 动作信息**全部完成后才显示**，5-10 分钟黑箱执行无法中断 | 长任务场景（代码生成、数据分析） | ❌ 无 |
| 🟡 **P1 - 体验破坏** | [#4123](https://github.com/agentscope-ai/QwenPaw/issues/4123) | Windows 每次 shell 调用闪控制台窗口 | Windows 桌面版用户 | ❌ 无（但 #4173 修复 Unix 侧，Windows 侧 `CREATE_NO_WINDOW` 已在 #3718 讨论） |
| 🟡 **P1 - UI 回归** | [#4174](https://github.com/agentscope-ai/QwenPaw/issues/4174) | OpenAI 格式 API 下 Agent thinking 未折叠，占用大量屏幕 | 使用 OpenAI 兼容 API 的用户 | ❌ 无 |
| 🟢 **P2 - 安全误报** | [#3718](https://github.com/agentscope-ai/QwenPaw/issues/3718) | Windows Defender 误报 v1.1.3 为木马 | v1.1.3 桌面版 Windows 用户 | ✅ **已关闭**（根因：`CREATE_NO_WINDOW` 标志，后续版本修复） |

> **关键洞察**: [#4170](https://github.com/agentscope-ai/QwenPaw/issues/4170) 与 [#4174](https://github.com/agentscope-ai/QwenPaw/issues/4174) 由同一用户 `JobJobovich` 同日报告，且均涉及**前端渲染时机与状态展示**，疑似同一批 UI 架构变更的回归。建议维护者关联排查。

---

## 6. 功能请求与路线图信号

| Issue/PR | 需求类型 | 与现有 PR 的关联 | 纳入下一版本概率 |
|:---|:---|:---|:---|
| [#4181](https://github.com/agentscope-ai/QwenPaw/issues/4181) API 失败时自动模型故障转移（Octopus 组内切换） | **可靠性/高可用** | 无直接 PR，但 #4169 火山引擎修复显示厂商适配活跃 | ⭐⭐⭐⭐ 高（生产就绪必需） |
| [#4175](https://github.com/agentscope-ai/QwenPaw/issues/4175) MCP client 支持 `tls_verify` + `ca_file` | **企业安全/私有化部署** | 无 PR | ⭐⭐⭐⭐ 高（企业采用阻塞点） |
| [#4166](https://github.com/agentscope-ai/QwenPaw/issues/4166) `pre_reply` 自动注入时间戳 | **上下文准确性** | 已关闭，可能已实现或合并至其他 PR | ⭐⭐⭐ 中（体验优化） |
| [#4171](https://github.com/agentscope-ai/QwenPaw/pull/4171) 记忆蒸馏插件 | **Agent 长期记忆** | 已有完整 PR | ⭐⭐⭐⭐ 高（差异化竞争力） |
| [#578](https://github.com/agentscope-ai/QwenPaw/issues/578) OpenClaw 式复利价值 | **产品战略** | 无 PR，meta-issue | ⭐⭐ 低（长期愿景，需拆解） |

**路线图信号解读**:
- **短期（1-2 版本）**: 模型故障转移 + TLS 自定义证书 = **企业级部署就绪**
- **中期（3-5 版本）**: 记忆蒸馏插件 + 异步 I/O 全量改造 = **性能与智能双提升**
- **长期**: OpenClaw 式架构借鉴需产品层面决策，技术社区难以独立推进

---

## 7. 用户反馈摘要

### 真实痛点（按出现频率）

| 痛点 | 来源 Issue | 用户原声/场景 | 情感色彩 |
|:---|:---|:---|:---|
| **"黑箱执行"焦虑** | [#4170](https://github.com/agentscope-ai/QwenPaw/issues/4170) | "If an action takes 5 or 10 minutes, I don't know what's happening and can't stop the agent in time" | 😰 失控恐惧 |
| **会话数据不可信** | [#3843](https://github.com/agentscope-ai/QwenPaw/issues/3843) | 历史消失但标题残留，"薛定谔的会话" | 😤 信任崩塌 |
| **定时任务伪交互** | [#2429](https://github.com/agentscope-ai/QwenPaw/issues/2429) | Cron 任务被当作"打断"，后台/前台边界模糊 | 😕 架构困惑 |
| **Windows 二等公民** | [#4123](https://github.com/agentscope-ai/QwenPaw/issues/4123), [#3718](https://github.com/agentscope-ai/QwenPaw/issues/3718) | 弹窗、误报、安全软件冲突 | 😒 平台歧视感 |
| **配置即代码门槛** | [#4182](https://github.com/agentscope-ai/QwenPaw/issues/4182) | 手动改 `config.json` 无效，桌面版无 UI 设置入口 | 🙄 易用性落差 |

### 满意点

- 用户主动提出 OpenClaw 架构借鉴（[#578](https://github.com/agentscope-ai/QwenPaw/issues/578)），表明对项目**长期愿景的认同**
- 记忆蒸馏插件 PR 的 ~92% 噪声削减数据获得关注，显示**技术深度受认可**

---

## 8. 待处理积压

> 以下 Issue/PR 存在**长期未响应**或**高价值低进展**风险，建议维护者优先关注：

| 项目 | 创建时间 | 最后更新 | 积压天数 | 风险说明 |
|:---|:---|:---|:---|:---|
| [#578](https://github.com/agentscope-ai/QwenPaw/issues/578) OpenClaw-Inspired Meta-Issue | 2026-03-04 | 2026-05-10 | **67 天** | 战略级需求无拆解路线图，评论 8 条但无维护者正式回应，社区热情可能消退 |
| [#3843](https://github.com/agentscope-ai/QwenPaw/issues/3843) 会话历史消失 | 2026-04-26 | 2026-05-10 | 15 天 | **P0 数据丢失**，7 条评论无 assignee，用户未获诊断指引 |
| [#2429](https://github.com/agentscope-ai/QwenPaw/issues/2429) Cron 任务打断提示 | 2026-03-27 | 2026-05-10 | **45 天** | 架构设计问题需 RFC 级别讨论，当前仅停留在问答层面 |
| [#4120](https://github.com/agentscope-ai/QwenPaw/pull/4120) Matrix E2EE 增强 | 2026-05-08 | 2026-05-10 | 3 天 | 标记"Under Review"但无具体反馈，加密代码需安全审计资源 |
| **9 个待合并 PR 整体** | — | 2026-05-10 | — | 单日 9 PR 堆积，首次贡献者 `soliman10` 占 5 个，存在**批量审查疲劳**风险；建议拆分优先级，安全类（#4180）与核心修复（#4173）优先于功能增强 |

---

## 附录：数据健康度仪表盘

| 指标 | 数值 | 健康度 |
|:---|:---|:---|
| Issues 日更新量 | 11 | 🟢 活跃 |
| PR 日更新量 | 10 | 🟢 活跃 |
| 首次贡献者 PR 占比 | 70% (7/10) | 🟡 高流入，需评审资源匹配 |
| 无评论/undefined PR 占比 | 60% (6/10) | 🔴 沟通质量待提升 |
| 关闭/合并率 | Issues 18%, PR 10% | 🔴 吞吐效率偏低 |
| 平均 Issue 响应时间 | 未量化 | ⚪ 建议引入 SLA 指标 |

---

*本日报基于 GitHub 公开数据生成，未包含私有仓库或线下讨论信息。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-05-11

---

## 1. 今日速览

ZeroClaw 今日保持**高活跃度**，24小时内 Issues 更新 20 条（15 活跃/5 关闭）、PR 更新 29 条（19 待合并/10 已合并关闭），无新版本发布。项目正处于 **v0.8.0 集成冲刺期**——多智能体运行时架构（#6272/#6545）和 V3 配置迁移是核心主线，同时社区密集报告 Provider 兼容性与通道本地化问题。整体健康度良好，但高优先级 Bug 积压需关注，特别是 OpenAI 兼容 Provider 的消息顺序问题（#6551/#6552）和 Discord 通道媒体管道崩溃（#6556）已有活跃 PR 待审。

---

## 2. 版本发布

**无新版本发布**

> 注：v0.7.5 Homebrew 合并失败（[#6547](https://github.com/zeroclaw-labs/zeroclaw/issues/6547)），社区用户无法通过 Homebrew 获取最新版本。项目重心明显转向 v0.8.0 大版本集成（PR [#6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398)），预计短期内不会发布 v0.7.x 补丁。

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 影响 |
|:---|:---|:---|:---|
| [#6534](https://github.com/zeroclaw-labs/zeroclaw/pull/6534) | Yyukan | **修复 SOP 引擎零加载 bug**：`SopEngine::new()` 后补充 `reload()` 调用 | 高严重度修复——此前无论 `sops_dir` 如何配置，SOP 完全不会执行 |
| [#6533](https://github.com/zeroclaw-labs/zeroclaw/pull/6533) | flyin1600 | **配置路径解析修复**：`ZEROCLAW_CONFIG_DIR` 优先于硬编码 `~/.zeroclaw` | 解决多实例部署的配置隔离问题，关闭关联 Issue [#5605](https://github.com/zeroclaw-labs/zeroclaw/issues/5605) |
| [#6545](https://github.com/zeroclaw-labs/zeroclaw/pull/6545) | singlerider | **多智能体运行时落地**：`AliasedAgentConfig`、隔离 workspace、权限模型 | v0.8.0 旗舰功能，对应 Issue [#6272](https://github.com/zeroclaw-labs/zeroclaw/issues/6272) |
| [#6523](https://github.com/zeroclaw-labs/zeroclaw/pull/6523) | singlerider | **V3 环境变量语法重构**：彻底移除所有旧版覆盖机制 | 破坏性变更，operator 面配置契约更新 |
| [#6515](https://github.com/zeroclaw-labs/zeroclaw/pull/6515) | DjaPy | **历史修剪器修复**：防止抢占式裁剪后连续 `assistant` 消息 | 解决 GLM-5 和 Z.AI 端点的上下文损坏问题 |

**里程碑意义**：v0.8.0 的两大支柱——**多智能体运行时**和**V3 配置体系**——已通过集成分支进入最终合并阶段。PR [#6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398) 作为 XL 级集成分支，承载 Schema v3 迁移、Discord 通道重写、Provider 重构等 10+ 子系统变更。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 |
|:---|:---|:---|:---|
| 🔥1 | [#6530](https://github.com/zeroclaw-labs/zeroclaw/issues/6530) Matrix SDK v0.16.0 编译递归溢出 | 4 | **Rust 生态兼容性**：Matrix 通道依赖升级受阻，社区需要清晰的 MSRV/依赖策略 |
| 🔥2 | [#6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207) WebSocket 网关绕过 ApprovalManager（**已关闭**） | 4 | **安全治理**：监督模式下的工具审批在 Web UI 完全失效，S1 级工作流阻断 |
| 🔥3 | [#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) 单轮/多轮对话丢失 user message | 3 | **Provider 可靠性**：Qwen3.5-35B 自定义 API 400 错误，消息序列化存在系统性缺陷 |

**深层分析**：Matrix SDK 编译问题（[#6530](https://github.com/zeroclaw-labs/zeroclaw/issues/6530)）折射出 Rust 项目在大版本依赖升级中的典型痛点——`matrix-sdk` 从 v0.15 到 v0.16 的 breaking changes 与 ZeroClaw 的泛型递归深度产生冲突。社区期待维护者提供 `Cargo.lock` 锁定策略或 feature-gate 降级方案。

---

## 5. Bug 与稳定性

### 按严重度排列的活跃 Bug

| 严重度 | Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|:---|
| **S0** | [#6558](https://github.com/zeroclaw-labs/zeroclaw/issues/6558) | 🆕 新开 | Qwen Provider 405 Method Not Allowed——**数据丢失/安全风险** | ❌ 无 |
| **S1** | [#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) | 活跃 | 多 Provider 丢失 user message，工作流阻断 | ❌ 无 |
| **S1** | [#6551](https://github.com/zeroclaw-labs/zeroclaw/issues/6551) | 🆕 新开 | 非首条 system message 发送给 OpenAI 兼容 Provider | ✅ [#6552](https://github.com/zeroclaw-labs/zeroclaw/pull/6552) 待合并 |
| **S2** | [#6556](https://github.com/zeroclaw-labs/zeroclaw/issues/6556) | 🆕 新开 | Discord 通道媒体收发全管道崩溃（4 重故障） | ❌ 无 |
| **S2** | [#6520](https://github.com/zeroclaw-labs/zeroclaw/issues/6520) | 活跃 | Gemini CLI Provider `--print` vs `--prompt` 参数过时崩溃 | ❌ 无 |
| **S2** | [#6419](https://github.com/zeroclaw-labs/zeroclaw/issues/6419) | 活跃 | WorkspaceManager 启动时未加载 profiles | ❌ 无 |
| **S3** | [#6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548) | 🆕 新开 | 通道运行时命令回复硬编码英文，绕过 Fluent 本地化 | ✅ [#6550](https://github.com/zeroclaw-labs/zeroclaw/pull/6550) 待合并 |

**关键进展**：drbparadise 同日提交双修复——[#6552](https://github.com/zeroclaw-labs/zeroclaw/pull/6552)（system 消息归一化）和 [#6550](https://github.com/zeroclaw-labs/zeroclaw/pull/6550)（本地化修复），显示对 Provider 兼容性和国际化问题的集中攻坚。但 **Discord 媒体管道（[#6556](https://github.com/zeroclaw-labs/zeroclaw/issues/6556)）** 作为 v0.8.0 集成分支的重写组件，尚未有独立修复 PR，可能依赖 [#6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398) 整体落地。

---

## 6. 功能请求与路线图信号

| 功能请求 | 来源 | 与现有 PR 的关联 | 纳入 v0.8.0 概率 |
|:---|:---|:---|:---|
| **ACP 会话恢复** ([#6543](https://github.com/zeroclaw-labs/zeroclaw/issues/6543)) | tidux | 协议层缺失，需 runtime 支持 | 中——依赖 v0.8.0 通道架构 |
| **ComfyUI/Comfy Cloud 媒体生成** ([#6563](https://github.com/zeroclaw-labs/zeroclaw/issues/6563)) | metalmon | 与 [#6555](https://github.com/zeroclaw-labs/zeroclaw/pull/6555) RunPod ComfyUI 形成互补 | 高——媒体 Provider 抽象正在成型 |
| **V3 SwarmConfig 模式** ([#6271](https://github.com/zeroclaw-labs/zeroclaw/issues/6271)) | singlerider | 作者即核心维护者，[#6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398) 已包含 schema 变更 | **已纳入** |
| **Claude Code Provider 视觉输入** ([#6549](https://github.com/zeroclaw-labs/zeroclaw/pull/6549)) | guitaripod | PR 已开，修改 `capabilities()` 和 stdin 写入逻辑 | 高——独立 PR，风险可控 |
| **NixOS 多实例模块** ([#6562](https://github.com/zeroclaw-labs/zeroclaw/pull/6562)) | fresh-fx59 | 与 [#5987](https://github.com/zeroclaw-labs/zeroclaw/issues/5987) 包定义配对 | 中——运维面增强，非阻塞 |

**路线图信号**：v0.8.0 的 Provider 架构正在从"文本优先"转向"多模态原生"——[#6183](https://github.com/zeroclaw-labs/zeroclaw/pull/6183)（图像标记归一化）、[#6549](https://github.com/zeroclaw-labs/zeroclaw/pull/6549)（Claude Code 视觉）、[#6555](https://github.com/zeroclaw-labs/zeroclaw/pull/6555)/[#6563](https://github.com/zeroclaw-labs/zeroclaw/issues/6563)（ComfyUI 生成管道）形成清晰的媒体能力扩展脉络。

---

## 7. 用户反馈摘要

### 真实痛点

> **"All providers/models failed"** —— 来自 [#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) lazy-hs 和 [#6558](https://github.com/zeroclaw-labs/zeroclaw/issues/6558) jonhoosh

自定义 Provider（Qwen3.5-35B、DashScope）的 400/405 错误暴露**消息序列化层的不透明性**：用户只能看到 `non_retryable` 和原始 HTTP 错误，无法诊断是消息格式、认证还是模型参数问题。急需 Provider 调试模式的增强日志。

> **"There is no version 0.7.5"** —— 来自 [#6547](https://github.com/zeroclaw-labs/zeroclaw/issues/6547) luckbyte

Homebrew 合并失败导致 macOS 用户被困在旧版本，分发渠道的健康度直接影响用户留存。

> **"images and all media never reach the agent"** —— 来自 [#6556](https://github.com/zeroclaw-labs/zeroclaw/issues/6556) singlerider

Discord 通道的 `ChannelMessage.attachments` 始终为空，多模态 Agent 在社交平台场景下**实质性失明**。

### 积极信号

- NixOS 社区主动贡献系统级集成（[#6562](https://github.com/zeroclaw-labs/zeroclaw/pull/6562)），显示运维场景的认可
- 技能文档需求（[#5863](https://github.com/zeroclaw-labs/zeroclaw/issues/5863)）已关闭，开发者体验持续改进

---

## 8. 待处理积压

| 风险项 | Issue/PR | 沉默天数 | 提醒 |
|:---|:---|:---|:---|
| **153 提交批量回滚恢复** | [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | 17 天 | `c3ff635` 回滚的 153 个提交中，大量 bugfix 和功能仍丢失。Audacity88 的审计追踪 Issue 评论停滞，需在 v0.8.0 分支冻结前完成 cherry-pick 评估 |
| **历史修剪器 GLM-5 修复** | [#6515](https://github.com/zeroclaw-labs/zeroclaw/pull/6515) | 3 天 | 高严重度修复，作者 DjaPy 需响应 review 意见，否则可能错过 v0.8.0 窗口 |
| **SOP 引擎修复的测试覆盖** | [#6534](https://github.com/zeroclaw-labs/zeroclaw/pull/6534) | 2 天 | 虽已合并，但 `reload()` 调用缺乏回归测试，存在再次遗漏风险 |
| **Gateway paircode 安全审查** | [#6192](https://github.com/zeroclaw-labs/zeroclaw/pull/6192) | 13 天 | 高严重度+手动风险标签，安全配对机制需维护者最终 sign-off |

---

*日报基于 ZeroClaw GitHub 公开数据生成 | 项目地址: https://github.com/zeroclaw-labs/zeroclaw*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*