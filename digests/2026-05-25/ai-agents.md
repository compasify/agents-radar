# OpenClaw 生态日报 2026-05-25

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-25 00:25 UTC

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

# OpenClaw 项目动态日报 | 2026-05-25

---

## 1. 今日速览

OpenClaw 项目今日呈现**极高活跃度**，24 小时内 500 条 Issues 更新（469 条新开/活跃，仅 31 条关闭）与 500 条 PR 更新（420 条待合并，80 条已合并/关闭）表明社区参与度和代码吞吐量均处于峰值。项目连续发布 3 个版本，其中 2 个为 beta 版本，显示团队正加速迭代 iMessage 审批交互与 Gateway 性能优化。值得关注的是，**安全类 PR 占比显著**（约 15+ 条），覆盖 TOCTOU 竞态、时序攻击、SSRF 防护等，反映项目进入安全加固关键期。Channel Broker 多阶段重构（Phase 1-4）成为最大工程主题，旨在统一 Telegram/Discord/Slack/WhatsApp/Signal/iMessage 等渠道的共享语义。整体健康度：**功能迭代积极，但 Issue 关闭率仅 6.2%，积压风险上升**。

---

## 2. 版本发布

### [v2026.5.24-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.5.24-beta.2) | 最新 Beta
**发布日期**: 2026-05-24

**核心变更**:
- **iMessage 拇指审批反应**: `👍`（Like tapback）解析为 `allow-once` 一次性批准；`👎` 解析为 `deny` 拒绝
- 显式审批者白名单从 `channels.imessage.allowFrom` 读取
- `allow-always` 永久授权仍需手动执行 `/approve <id> allow-always`

**迁移注意**: iMessage 用户需确认 `allowFrom` 配置已正确设置，否则 tapback 反应将无响应。

---

### [v2026.5.24-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.5.24-beta.1)
**发布日期**: 2026-05-24

**核心变更**:
- **Gateway 性能优化**: 复用进程稳定的频道目录读取，避免重复的 bundled-channel 边界检查
- **CPU Profile 轮转**: Gateway watch CPU profiles 自动轮转，防止基准测试运行产生无界累积产物
- **缓存稳定安装记录**: 缓存 install-record、channel-catalog、bundled-channel 等不可变数据

---

### [v2026.5.22](https://github.com/openclaw/openclaw/releases/tag/v2026.5.22)
**发布日期**: 2026-05-22

**核心变更**:
- Gateway 性能优化（与 beta.1 相同基础）
- **复用不可变插件元数据快照**跨启动周期

**已知问题**: [Issue #86184](https://github.com/openclaw/openclaw/issues/86184) 报告此版本 Telegram direct 在成功工具调用后返回通用 `/new` 回退消息，而非助手最终回复。

---

## 3. 项目进展

### 已合并/关闭的关键 PR（80 条中的代表性进展）

| PR | 状态 | 核心贡献 |
|:---|:---|:---|
| [#86185](https://github.com/openclaw/openclaw/pull/86185) | **已关闭** | 将 OpenClaw 特定的 ClawSweeper 审查策略移入 `AGENTS.md`，实现仓库特定规则与通用审查机制的解耦 |
| [#81249](https://github.com/openclaw/openclaw/issues/81249) | **已关闭** | 修复本地 Ollama embeddings 在代理启用时失败的问题（SSRF 防御忽略 `NO_PROXY`）|

### 待合并的关键 PR 进展（420 条中的核心工程）

| PR | 状态 | 工程意义 |
|:---|:---|:---|
| [#86096](https://github.com/openclaw/openclaw/pull/86096) | 🛠️ 积极打磨中 | **Channel Broker Phase 1**: 协议基础，统一多渠道共享语义 |
| [#86156](https://github.com/openclaw/openclaw/pull/86156) | 👀 等待维护者审查 | **Channel Broker Phase 2C**: Discord 迁移概念验证 |
| [#86164](https://github.com/openclaw/openclaw/pull/86164) | ⏳ 等待作者 | **Channel Broker Phase 3**: 官方渠道能力矩阵 |
| [#86165](https://github.com/openclaw/openclaw/pull/86165) | ⏳ 等待作者 | **Channel Broker Phase 4**: 受限提供商能力，含安全边界影响 |
| [#85572](https://github.com/openclaw/openclaw/pull/85572) | 👀 等待维护者审查 | **沙箱姿态合规检查**: 配置级策略强制，含 Docker 网络限制、只读绑定模式 |
| [#85958](https://github.com/openclaw/openclaw/pull/85958) | ⏳ 等待作者 | **Codex 压缩边界隔离**: 防止 OpenClaw 预压缩 Codex 运行时回合，解决会话状态风险 |

**整体推进评估**: Channel Broker 四阶段重构是近期最大架构投资，旨在根治各原生渠道插件反复出现的会话、白名单、路由、verbose 模式等回归问题。安全加固形成系统性工程（6+ 条 PR 覆盖 TOCTOU、时序攻击、SSRF、注入防护）。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| # | Issue | 评论 | 👍 | 核心诉求 | 链接 |
|:---|:---|:---|:---|:---|:---|
| **#75** | Linux/Windows Clawdbot Apps | 106 | 77 | **跨平台桌面客户端缺失** — 用户强烈要求 Linux/Windows 版达到 macOS 功能对等 | [链接](https://github.com/openclaw/openclaw/issues/75) |
| **#9443** | 预构建 Android APK 发布 | 25 | 2 | **降低 Android 入门门槛** — 现有源码但无预编译包，由 AI 助手代提交凸显自动化协作趋势 | [链接](https://github.com/openclaw/openclaw/issues/9443) |
| **#12602** | Slack Block Kit 支持 | 13 | 0 | **富交互消息** — 从纯文本升级到 CRM 摘要、数据库查询结果的结构化卡片 | [链接](https://github.com/openclaw/openclaw/issues/12602) |
| **#10659** | 掩码密钥系统 | 13 | 4 | **安全核心诉求** — 防止提示注入攻击提取凭证，agent 可用不可见 | [链接](https://github.com/openclaw/openclaw/issues/10659) |
| **#58450** | Agent 虚假承诺后续跟进 | 13 | 2 | **可靠性危机** — agent 声称将执行后续操作但实际未启动任何后台动作 | [链接](https://github.com/openclaw/openclaw/issues/58450) |

### 背后诉求分析

- **平台覆盖焦虑**: #75（106 评论）持续 5 个月未解决，标注 `clawsweeper:needs-product-decision` + `clawsweeper:needs-security-review`，反映跨平台 Electron/Tauri 方案的安全审查瓶颈
- **企业级安全刚需**: #10659、#13583（预响应强制钩子）、#7722（文件系统沙箱）形成"安全三重奏"，金融/量化/运维场景用户推动从"软提示"到"硬强制"的架构升级
- **渠道可靠性痛点**: #58450、#54531（强制回复 originating channel）、#50093（WhatsApp 断线补录）暴露消息投递管道的"最后一公里"问题

---

## 5. Bug 与稳定性

### P1 严重级别（生产影响）

| # | 问题 | 状态 | 影响 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|:---|
| **#86184** | Telegram direct 工具调用后回退到 `/new` | 新开 | 消息丢失、用户体验断裂 | 无 | [链接](https://github.com/openclaw/openclaw/issues/86184) |
| **#86214** | Codex app-server 客户端在图像/工具请求中中途关闭 | 新开 | 任务中止、生成请求未达持久层 | 无 | [链接](https://github.com/openclaw/openclaw/issues/86214) |
| **#83959** | Codex app-server 启动重试耗尽 | 活跃 | 崩溃循环、后台 agent 完全失败 | 无 | [链接](https://github.com/openclaw/openclaw/issues/83959) |
| **#85192** | DeepSeek V4 推理块签名检测失败 | 活跃 | 推理专用重试失效、触发空闲超时 | 无 | [链接](https://github.com/openclaw/openclaw/issues/85192) |
| **#57326** | CLI 辅助路径绕过 CLI 调度 | 活跃 | 安全边界突破、嵌入式/API 路径非预期执行 | 无 | [链接](https://github.com/openclaw/openclaw/issues/57326) |
| **#58514** | Google Chat Space/Group 消息静默忽略 | 活跃 | 仅 DM 工作，群组场景完全失效 | 无 | [链接](https://github.com/openclaw/openclaw/issues/58514) |

### P2 重要级别（功能退化）

| # | 问题 | 状态 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|
| **#59330** | Control UI Raw 模式自 2026.3.31 永久禁用 | 活跃 | 无 | [链接](https://github.com/openclaw/openclaw/issues/59330) |
| **#57901** | Safeguard 压缩忽略 `compaction.model` 配置 | 活跃 | 无 | [链接](https://github.com/openclaw/openclaw/issues/57901) |
| **#53628** | `${XDG_CONFIG_HOME}` 安装 skill 时未处理 | 活跃 | 无 | [链接](https://github.com/openclaw/openclaw/issues/53628) |
| **#54463** | QMD 内存索引符号链接循环导致 `ENAMETOOLONG` | 活跃 | 无 | [链接](https://github.com/openclaw/openclaw/issues/54463) |

### 回归分析
- **v2026.5.22 引入**: #86184（Telegram 回退）、#86185（已关闭，文档策略）显示版本发布后的快速修复节奏
- **长期回归**: #59330（Raw 模式禁用超 2 个月）反映配置序列化层的深层技术债务

---

## 6. 功能请求与路线图信号

### 高概率纳入下一版本（已有活跃 PR 或强信号）

| 功能 | Issue/PR | 状态 | 纳入依据 |
|:---|:---|:---|:---|
| **Channel Broker 统一渠道架构** | #86096, #86156, #86164, #86165 | Phase 1-4 并行推进 | 维护者 TL;DR 明确为"根治反复回归"的核心投资 |
| **沙箱策略合规检查** | #85572 | 👀 等待审查 | 配置级强制，含 Docker 网络/绑定模式限制 |
| **Codex 压缩边界隔离** | #85958 | ⏳ 等待作者 | P1 优先级，解决会话状态与可用性风险 |
| **Google Vertex 生产 ADC 模式** | #83971 | ⏳ 等待作者 | 企业 GCP 部署刚需 |

### 用户需求强烈但技术/审查瓶颈

| 功能 | Issue | 阻碍 | 用户场景 |
|:---|:---|:---|:---|
| **Linux/Windows 桌面客户端** | #75 | `needs-security-review` + `needs-product-decision` | 跨平台开发团队统一工具链 |
| **预构建 Android APK** | #9443 | `needs-security-review` + `source-repro` | 非技术用户快速部署 |
| **掩码密钥系统** | #10659 | 架构设计复杂（use-without-see） | 金融/量化合规 |
| **预响应强制钩子** | #13583 | `needs-security-review` | 高风险工作流硬规则 |

### 新兴信号
- **Xiaomi MiMo Token Plan 支持**: [#86169](https://github.com/openclaw/openclaw/issues/86169)（5 评论，新开）反映中国模型提供商生态扩展
- **Vapi 语音通话提供商**: [#13337](https://github.com/openclaw/openclaw/issues/13337) 语音渠道多元化

---

## 7. 用户反馈摘要

### 真实痛点（直接引用 Issue 场景）

> *"When the primary model's context limit is exceeded, OpenClaw currently freezes/errors instead of falling back"* — [#9986](https://github.com/openclaw/openclaw/issues/9986)

**痛点**: 上下文超限时的优雅降级缺失，现有 `fallbacks` 仅覆盖 API 错误而非容量错误。

> *"The agent saw 'command not found' and reported healthy"* — [#68755](https://github.com/openclaw/openclaw/pull/68755)（PR 摘要引用用户场景）

**痛点**: 健康检查技能因 PATH 差异产生误报，安全相关探测失效。

> *"From the user's perspective this looks like the agent went silent"* — [#58450](https://github.com/openclaw/openclaw/issues/58450)

**痛点**: Agent 承诺后续跟进但未执行，信任侵蚀。

### 满意点
- **iMessage tapback 审批**: v2026.5.24-beta.2 的 `👍`/`👎` 快速审批获得移动端用户认可
- **Gateway 性能优化**: 缓存与 profile 轮转减少运维负担

### 不满点
- **平台覆盖不均**: macOS/iOS/Android 优先，Linux/Windows "二等公民"
- **安全配置分散**: 密钥、沙箱、审批规则多处配置，无统一安全中心
- **渠道可靠性**: Telegram/WhatsApp 消息丢失、Google Chat 群组静默忽略

---

## 8. 待处理积压

### 超期未决策（>3 个月，高互动）

| # | 创建 | 最后更新 | 天数 | 核心阻塞 | 行动建议 |
|:---|:---|:---|:---|:---|:---|
| **#75** | 2026-01-01 | 2026-05-24 | 144 | `needs-product-decision` + `needs-security-review` | 产品+安全联合评审，明确 Electron/Tauri/Flutter 技术选型 |
| **#6731** | 2026-02-02 | 2026-05-24 | 112 | `needs-product-decision` + "用 Rust 重写"争议 | 关闭或拆分为具体沙箱改进项 |
| **#10687** | 2026-02-06 | 2026-05-24 | 108 | `needs-product-decision` | OpenRouter 动态模型发现，需 Catalog 架构决策 |
| **#7722** | 2026-02-03 | 2026-05-24 | 111 | `needs-security-review` | 文件系统沙箱配置，安全团队优先审查 |

### 高价值低响应（钻石龙虾/白金隐士评级，低评论但高影响）

| # | 评级 | 影响 | 状态 |
|:---|:---|:---|:---|
| **#59330** | 🦞 diamond lobster | Control UI Raw 模式完全禁用 | `needs-maintainer-review` 超 2 个月 |
| **#57901** | 🦞 diamond lobster | 压缩配置被忽略，使用会话模型 | `linked-pr-open` 但未合并 |
| **#83959** | 🐚 platinum hermit | Codex 崩溃循环 | `needs-live-repro` 等待用户验证 |

### 维护者关注提醒
- **#75** 的 77 👍 与 106 评论形成社区最大声量，长期阻塞可能损害项目"开源跨平台"定位
- **Channel Broker 四阶段 PR** 同时推进存在合并冲突风险，建议维护者协调 #86096 → #86156 → #86164 → #86165 的串行依赖
- **安全类 PR 积压**（15+ 条 `needs-real-behavior-proof`）需测试基础设施支持，否则形成"安全债务"滚雪球

---

*日报基于 GitHub 公开数据生成，所有链接指向 github.com/openclaw/openclaw*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告
**分析日期**: 2026-05-25 | 数据来源: GitHub 公开活动

---

## 1. 生态全景

个人 AI 助手开源生态正处于**"从功能爆发向工程成熟度跃迁"**的关键转折期。头部项目（OpenClaw、ZeroClaw、Hermes Agent）日均 Issues/PR 吞吐量达 50-100 条，但关闭/合并率分化显著——Moltis 实现 100% 当日闭环，而 ZeroClaw 仅 6%，维护带宽成为规模扩张的首要瓶颈。**安全加固**（SSRF、TOCTOU、凭证泄露防护）和**多智能体协作**（跨实例消息总线、Agent 编排）成为全生态共同跃迁方向，标志着行业从"单 Agent 能力展示"进入"生产级可靠运行"阶段。与此同时，**边缘设备适配**（PicoClaw 的 RPi/Termux）与**企业合规**（IronClaw 的金融级安全、NanoClaw 的权限继承）构成差异化增长极。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 已关闭/合并 | 版本发布 | 健康度评估 | 核心特征 |
|:---|:---:|:---:|:---:|:---|:---|:---|
| **OpenClaw** | 500 (469 活跃/31 关闭) | 500 (420 待合/80 已合) | 6.2% | v2026.5.24-beta.2 等 3 个 | 🟡 **高动能高积压** — 功能迭代峰值，Issue 关闭率警示 | 渠道统一架构重构中，安全加固密集 |
| **NanoBot** | 4 (2 开/2 关) | 17 (11 待合/6 已合) | 35% | 无 | 🟢 **稳健演进** — 全栈进展，测试补强 | 工具循环护栏、多 Agent 协作基础设施 |
| **Hermes Agent** | 50 (32 活跃/18 关闭) | 50 (34 待合/16 已合) | 32% | 无 | 🟡 **稳定性攻坚** — Kanban 存储层系统性风险 | Claude Code 生态整合，长期记忆需求强烈 |
| **PicoClaw** | — | 10 (8 待合/2 已合) | 20% | v0.2.9-nightly | 🟡 **边缘场景缺口** — 代码稳健，社区响应滞后 | 边缘设备/华语生态，Agent 协作总线新兴 |
| **NanoClaw** | — | 3 (2 待合/1 已合) | 33% | 无 | 🟡 **底盘收敛期** — 静默失败缺陷需紧急处理 | 运维可观测性优先，多租户部署过渡 |
| **NullClaw** | 1 | 1 (0 待合/1 关闭) | 100% | 无 | 🟢 **技术债清偿后平稳** — 低活跃但零积压 | Zig 原生 HTTP，内存召回可控性议题 |
| **IronClaw** | 25 (22 活跃/3 关闭) | 50 (48 待合/2 已合) | 4% | 无 (crates.io 滞后 3 版本) | 🔴 **高安全聚焦，发布管道危机** — 供应链信任损耗 | Reborn 架构迁移，金融级安全，WASM 沙箱 |
| **LobsterAI** | 0 | 14 (0 待合/14 已合) | 100% | 无 | 🟡 **维护模式清理** — 零社区互动，内部驱动 | 批量陈旧 PR 收尾，稳定性修复密集 |
| **Moltis** | 8 (0 待处理/8 关闭) | 10 (0 待合/10 已合) | 100% | 无 | 🟢 **优秀** — 当日 100% 闭环，架构重构果断 | Agent 即策略单元，多场景隔离 |
| **CoPaw** | 14 (11 活跃/3 关闭) | 1 (1 待合/0 已合) | 21% | 无 (v1.1.8.post1 暴露批量 Bug) | 🟡 **版本质量风险** — 定时任务核心缺陷 | 记忆系统 2.0 架构提案，Console UI 前端 |
| **ZeroClaw** | 50 (47 活跃/3 关闭) | 50 (47 待合/3 已合) | **6%** | 无 | 🔴 **高动能高积压极值** — 维护带宽严重瓶颈 | 24-PR 架构迁移链，配置-运行时一致性痛点 |
| **TinyClaw** | — | — | — | — | ⚪ 无活动 | — |
| **ZeptoClaw** | — | — | — | — | ⚪ 无活动 | — |

---

## 3. OpenClaw 在生态中的定位

### 规模与社区领导力
OpenClaw 以 **500 Issues + 500 PRs/日** 的吞吐量独占生态首位，是第二名 ZeroClaw/Hermes 的 10 倍量级，构成事实上的**社区引力中心**。其 Issue #75（Linux/Windows 客户端，106 评论/77 👍）是全网声量最高的单一诉求，跨平台覆盖焦虑直接定义了行业共性痛点。

### 技术路线差异
| 维度 | OpenClaw | 生态对比 |
|:---|:---|:---|
| **渠道策略** | **Channel Broker 四阶段重构**（#86096-#86165）— 统一 Telegram/Discord/Slack/WhatsApp/Signal/iMessage 共享语义 | ZeroClaw 的 AllowlistAspect 24-PR 迁移链（通道逐个适配）；Hermes 的 Gateway 连接泄漏修复 |
| **安全模型** | **配置级软约束** → 硬强制过渡中（沙箱姿态合规检查 #85572 待审） | IronClaw 的 **WASM 沙箱 + 工具执行漏斗**（#4017-#4022 级联修复，约定→强制）；Moltis 的 **Agent 级策略边界** |
| **审批交互** | **iMessage tapback 原生审批**（👍/👎）— 移动端场景深度 | Hermes 的 Telegram 论坛主题级权限；ZeroClaw 的 Lark/Feishu 企业 IM 审批 |
| **架构哲学** | **插件化扩展**（bundled-channel、skill 体系） | NanoBot 的 **子 Agent 温度精细控制**；IronClaw 的 **Reborn "Configuration-as-Code"** |

### 相对优势与风险
- **优势**: 渠道覆盖最全（6+ 主流 IM）、iMessage 原生集成深度、安全 PR 密度最高（15+ 条/日）
- **风险**: Issue 关闭率 6.2% 与 ZeroClaw 同级，积压雪球效应；#75 跨平台阻塞 144 天损害"开源跨平台"品牌承诺

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求与进展 | 行业意义 |
|:---|:---|:---|:---|
| **多智能体协作基础设施** | NanoBot (#3992 消息总线)、PicoClaw (#2937 Agent 协作总线)、Hermes (#31392 子代理分叉)、OpenClaw (Channel Broker 为 Agent 间通信奠基) | 从"单 Agent 强能力"转向"群体智能"：跨实例状态同步、权限感知路由、并发控制 | 标志着 Agent 从"个人助手"进化为"组织工作流节点" |
| **工具执行安全漏斗** | IronClaw (#4017-#4022 绕过审计修复)、OpenClaw (#85572 沙箱姿态合规)、ZeroClaw (#6699 MCP 前缀检查失效)、NanoBot (#3986 循环护栏) | 统一执行边界：审计日志不可跳过、工具调用可观测、循环/滥用硬阻断 | 金融/运维场景的合规准入门槛 |
| **长期记忆架构** | Hermes (#6323 mempalace，26 👍)、CoPaw (#4652 总结-关联-提醒机制)、NullClaw (#919 FTS5 召回可控性) | 突破上下文窗口：外部记忆存储、跨会话连续性、召回策略可编排 | Agent "自我进化"可信度的技术底座 |
| **配置-运行时一致性** | ZeroClaw (#6722/#6723 配置项无效)、OpenClaw (iMessage `allowFrom` 迁移注意)、NanoClaw (#2606 engage_mode 静默丢弃) | 消除"配置成功但运行失败"的调试黑洞：schema 校验、运行时前置拒绝、错误透传 | 运维可观测性的基础用户体验 |
| **边缘/本地模型适配** | PicoClaw (#28 LM Studio 零配置，103 天未回应)、ZeroClaw (#5962 Ollama 崩溃)、NanoBot (#3984 GLM-4.7/Kimi 兼容) | 降低本地推理门槛：自动发现、参数兼容、工具链稳定 | 隐私敏感场景与低算力设备的刚需 |
| **企业级权限与合规** | NanoClaw (#2605 权限继承)、Moltis (#1063 MCP 密钥防泄露)、IronClaw (#1739 异步审批)、OpenClaw (#10659 掩码密钥) | 层级权限模型、密钥 use-without-see、审计不可伪造 | B2B 规模化部署的决策障碍点 |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户画像 | 技术架构关键差异 |
|:---|:---|:---|:---|
| **OpenClaw** | 全渠道 IM 集成 + 审批工作流 | 多平台重度用户、需要移动端原生审批的运维/管理者 | TypeScript/Node 插件体系；Channel Broker 统一语义层 |
| **NanoBot** | 可靠多 Agent 协作 + 自我进化 | 开发者、研究者、需要 Agent 群体智能的复杂任务场景 | 子 Agent 温度控制、Dream 系统、循环检测护栏 |
| **Hermes Agent** | 企业 IM 深度整合 + 长期记忆 | 团队部署、需要跨会话连续性的知识工作者 | Kanban SQLite 任务流、mempalace 外部记忆提案 |
| **PicoClaw** | 边缘设备/华语生态/资源感知 | RPi/Termux 用户、中文社区、低成本硬件爱好者 | Go 语言；Seahorse 检索作用域收紧；技能按 PATH 过滤 |
| **IronClaw** | 金融级安全 + WASM 沙箱 + 区块链钱包 | 加密资产管理者、需要不可伪造签名的安全敏感场景 | Rust + WASMtime；Reborn 架构；Provider 桥接标准化 |
| **Moltis** | 场景化 Agent 隔离 + 家庭/多租户 | 家长/儿童场景、需要权限隔离的消费级用户 | Agent 即策略单元（MCP+沙箱+技能统一边界） |
| **CoPaw** | 记忆系统 2.0 + 定时任务自动化 | 生活场景用户（育儿提醒等）、需要 Agent 主动学习 | 总结-关联-提醒机制；Console UI 前端 |
| **ZeroClaw** | 极致通道覆盖 + 配置即代码 | 企业集成、需要 Twilio/Mastodon 等长尾通道的 DevOps | Elixir/OTP；AllowlistAspect 迁移；功能支持矩阵文档化 |
| **NullClaw** | 极简依赖 + 内存可控 | 受限环境部署、Zig 语言偏好者、可审计安全需求 | Zig 原生实现；curl 去依赖；FTS5 硬编码参数议题 |
| **LobsterAI** | OpenClaw 网关封装 + 企业协作 | 网易有道生态用户、需要异步消息队列的协作者 | 基于 OpenClaw 的二次封装；Cowork 引擎 |

---

## 6. 社区热度与成熟度分层

### 🔥 快速迭代阶段（日均 25+ 活跃项，功能/架构扩张）

| 项目 | 迭代特征 | 关键风险 |
|:---|:---|:---|
| **OpenClaw** | Channel Broker 四阶段并行 + 安全加固密集 | 合并冲突风险；Issue 积压雪球 |
| **ZeroClaw** | 24-PR 架构迁移链 + 通道扩展 | 6% 关闭率，维护者 burnout 风险 |
| **Hermes Agent** | Claude Code 桥接 + Kanban 稳定性攻坚 | 大型 PR (#29527, 2400+ 行) review 瓶颈 |
| **IronClaw** | Reborn M4/M5 模块 + 安全漏斗体系化 | crates.io 发布滞后 3 版本，供应链信任危机 |

### 🛠️ 质量巩固阶段（工程成熟度提升，测试/文档/稳定性）

| 项目 | 巩固特征 | 关键动作 |
|:---|:---|:---|
| **NanoBot** | 循环护栏 v2.0 + 跨代理总线 + ESLint 补强 | 从"功能爆发"向"可靠运行"过渡 |
| **Moltis** | 100% 当日闭环 + Agent 架构重构 | 建立工程纪律标杆；Playwright 回归测试覆盖 |
| **CoPaw** | v1.1.8.post1 批量 Bug 暴露后的修复窗口 | 需紧急评估 post2 补丁；APScheduler 会话隔离 |
| **PicoClaw** | cron 静默失败修复 + Agent 重载稳定性 | 边缘场景体验缺口（LM Studio/Termux） |

### 🌙 维护/平稳阶段（低活跃或技术债清偿）

| 项目 | 状态 | 关键观察 |
|:---|:---|:---|
| **NullClaw** | HTTP 层去 curl 化完成，FTS5 可控性议题待响应 | 7 天内需维护者回应 #919，避免贡献者流失 |
| **LobsterAI** | 45 天陈旧 PR 批量关闭，零社区互动 | 内部驱动特征明显；需验证修复的外部测试覆盖 |
| **NanoClaw** | 运维 API 批量查询落地，路由组件静默缺陷 | #2606 需 24h 内指派，P1 数据面缺陷 |

### ⚪ 休眠/无活动

**TinyClaw**、**ZeptoClaw** — 过去 24 小时零活动，需关注项目可持续性。

---

## 7. 值得关注的趋势信号

### 信号一："Agent 即策略单元"成为架构共识
> **Moltis #1049** 将 Agent 定义为 MCP 服务器+沙箱策略+技能的统一边界，**OpenClaw Channel Broker** 统一多渠道语义，**NanoBot #3992** 跨实例消息总线——三者共同指向：**Agent 不再是"大模型+提示词"的薄封装，而是具备独立策略边界、资源配额、通信能力的计算实体**。对开发者的价值：设计 Agent 时需优先定义其能力边界与交互契约，而非仅关注模型调用。

### 信号二："配置-运行时一致性"成为用户体验分水岭
> **ZeroClaw #6722/#6723**（配置项无效）、**NanoClaw #2606**（静默丢弃）、**OpenClaw** 的 `allowFrom` 迁移注意——"配置成功但运行失败"是生产环境信任侵蚀的首要来源。**趋势**: 生态将从"文档说明"转向"schema 前置校验 + 运行时拒绝 + 错误透传"的三层防护。开发者应优先投资配置系统的静态分析与启动时验证。

### 信号三：安全从"软提示"升级为"硬强制"
> **IronClaw #4019** 明确指出安全不变量当前是"约定而非强制"，**OpenClaw #85572** 沙箱姿态合规检查待审，**Moltis #1063** MCP 密钥改 `Secret<String>`——金融/运维场景的合规需求正推动安全模型从"建议性"向"策略强制性"演进。**对开发者的启示**: Agent 工具链的审计日志、沙箱边界、凭证隔离需作为一等架构要素设计，而非事后补丁。

### 信号四：边缘设备与本地模型构成新增量市场
> **PicoClaw #28**（LM Studio，103 天 20 评论）、**ZeroClaw #5962**（Ollama 崩溃）、**NanoBot #3984**（GLM-4.7/Kimi 兼容）——隐私敏感场景与低算力硬件（RPi/$10 设备）催生"去云端化"需求。**趋势**: 本地模型发现协议、边缘资源感知（PicoClaw #2936 按 PATH 过滤技能）、国产模型兼容层将成为差异化竞争力。

### 信号五：多智能体协作从"演示"走向"基础设施"
> **NanoBot #3992**（消息总线）、**PicoClaw #2937**（协作总线）、**Hermes #31392**（子代理分叉）——2026 年 Q2 密集涌现的跨 Agent 通信 PR 表明，行业正从"单 Agent 能力竞赛"转向"Agent 群体智能"的工程化。**关键挑战**: 权限感知路由、状态一致性、并发控制尚无统一标准，存在协议碎片化风险。开发者可关注 NanoBot 的消息总线设计与 IronClaw 的 Subagent spawn 设计文档作为参考实现。

---

*报告基于 2026-05-25 各项目 GitHub 公开数据生成。如需特定项目的深度模块分析或历史趋势对比，可进一步扩展。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-05-25

---

## 1. 今日速览

NanoBot 今日保持**高活跃度**，24小时内产生 **17 个 PR 更新**（6 个已合并/关闭，11 个待审阅）和 **4 个 Issue 更新**（2 开 2 关）。核心进展集中在三大方向：**代理协作基础设施**（跨实例消息总线）、**工具调用可靠性**（循环检测护栏 + OpenAI 兼容 ID 修复）、以及 **WebUI 交互优化**（模型快速切换、MCP 预设、斜杠命令增强）。测试基础设施和代码质量工具（ESLint）也在同步补强，显示项目正从功能爆发期向工程成熟度演进。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#3984](https://github.com/HKUDS/nanobot/pull/3984) | Yuxin-Lou | **修复 OpenAI 兼容 API 的 tool call ID 不一致** | 解决 GLM-4.7、Kimi 2.6 等国产模型 via antchat 代理时的关键兼容性问题，关闭关联 Issue #3980 |
| [#3975](https://github.com/HKUDS/nanobot/pull/3975) | 04cb | **spawn 工具支持 per-subagent temperature** | 子代理可按任务类型（精确/创意/分析）配置采样温度，关闭 Issue #3969 |
| [#3974](https://github.com/HKUDS/nanobot/pull/3974) | outlook84 | **OpenAI API 类型与 extra body 配置** | 支持 `chat_completions`/`responses` 模式切换，为 OpenAI 新 API 形态做准备 |
| [#3987](https://github.com/HKUDS/nanobot/pull/3987) | Re-bin | **WebUI 斜杠命令交互重构** | 命令面板改为直接动作 + 状态详情 + 实时停止，全 10 语言本地化 |
| [#3979](https://github.com/HKUDS/nanobot/pull/3979) | Re-bin | **MCP 预设与能力提及** | MCP 从"能连"升级为"一键配置、热重载、@提及感知"的一等公民体验 |
| [#1678](https://github.com/HKUDS/nanobot/pull/1678) | cgluWxh | **Windows shell 管道挂起修复** | 用临时文件替代 PIPE 解决 Windows 下浏览器等长生命子进程导致的 `communicate()` 死锁 |

**整体迈进评估**：今日合并内容覆盖**跨平台稳定性**（Windows）、**模型生态兼容性**（OpenAI/国产模型）、**代理精细控制**（temperature）、**用户界面成熟度**（MCP/WebUI），属于全栈式进展。

---

## 4. 社区热点

### 最高关注度议题

| 议题 | 类型 | 热度信号 | 核心诉求分析 |
|:---|:---|:---|:---|
| [#3986](https://github.com/HKUDS/nanobot/issues/3986) | Feature Request | 同日即有配套 PR #3985 | **工具循环失控是生产环境致命痛点**——用户需要"硬阻断"而非仅日志告警，涉及 `grep`/`list_dir`/`read_file` 等高频工具的重复调用检测与速率限制 |
| [#3992](https://github.com/HKUDS/nanobot/pull/3992) | PR | 架构级变更 | **多代理协作是 NanoBot 差异化方向**——从"单代理强能力"转向"代理群体智能"，消息总线设计将决定未来扩展性 |
| [#3973](https://github.com/HKUDS/nanobot/issues/3973) | Feature Request | 涉及核心"自改进"机制 | **Dream 系统的生存危机**——"饥饿问题"（仅依赖 `history.jsonl` 导致输入枯竭）和缺乏实时学习，直指 NanoBot 长期宣称的"自我进化"愿景的可信度 |

**背后诉求洞察**：社区正从"能用"向"可靠运行"和"智能进化"两个纵深推进——前者要求**运行时护栏**（循环检测），后者要求**认知架构升级**（Dream 系统重构）。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | Fix PR | 影响范围 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | OpenAI 兼容 API tool_call_id 与 tool_result 不匹配 | **已修复** | [#3984](https://github.com/HKUDS/nanobot/pull/3984) | GLM-4.7、Kimi 2.6 等国产模型用户；导致工具链断裂 |
| 🟡 **中** | Windows 下 shell 命令管道死锁（浏览器等长生命子进程） | **已修复** | [#1678](https://github.com/HKUDS/nanobot/pull/1678) | Windows 开发者，agent-browser 场景 |
| 🟡 **中** | `maxConcurrentSubagents` 配置未生效（硬编码为 1） | **待修复** | [#3978](https://github.com/HKUDS/nanobot/pull/3978)（Open） | 多子代理并行场景，配置失效导致性能瓶颈 |
| 🟢 **低** | runner 对 `refusal`/`content_filter`/`error` finish reason 的工具调用处理缺乏测试覆盖 | **测试中** | [#3983](https://github.com/HKUDS/nanobot/pull/3983)（Open） | 边缘情况，安全/合规场景 |

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| **通用工具级循环检测与速率限制** | [#3986](https://github.com/HKUDS/nanobot/issues/3986) → [#3985](https://github.com/HKUDS/nanobot/pull/3985) | ⭐⭐⭐⭐⭐ **极高** | 同日提 Issue + PR，作者 codeLong1024 有合并记录；生产刚需 |
| **Dream 系统：饥饿问题 & 实时学习** | [#3973](https://github.com/HKUDS/nanobot/issues/3973) | ⭐⭐⭐⭐ **高** | 关联 PR [#3990](https://github.com/HKUDS/nanobot/pull/3990) 已开（合并两阶段为单阶段），显示维护者已在响应 |
| **跨代理消息总线** | [#3992](https://github.com/HKUDS/nanobot/pull/3992) | ⭐⭐⭐⭐ **高** | PR 已标"Implemented and tested"，架构级投入 |
| **HyperFrames CLI 插件** | [#3991](https://github.com/HKUDS/nanobot/pull/3991) | ⭐⭐⭐ **中** | 生态扩展，但需评估与核心架构耦合度 |
| **Step Plan 订阅支持** | [#3988](https://github.com/HKUDS/nanobot/pull/3988) | ⭐⭐⭐ **中** | 跟随 volcengine/byteplus 模式，成本可控 |
| **`/skill` 斜杠命令** | [#3968](https://github.com/HKUDS/nanobot/pull/3968) | ⭐⭐⭐⭐ **高** | 解决 #3959 的明确用户痛点，低复杂度 |

**路线图信号**：下一版本（或近期合并窗口）极可能聚焦 **"可靠的多代理协作"**（循环护栏 + 跨实例通信 + 并发控制）和 **"Dream 系统瘦身"**（单阶段合并为实时学习铺路）。

---

## 7. 用户反馈摘要

### 真实痛点

> *"大模型频繁陷入循环——相同参数重复调用、短时间疯狂调用、读不存在文件反复重试"*  
> —— [#3986](https://github.com/HKUDS/nanobot/issues/3986) codeLong1024，反映**生产环境信任危机**：用户不敢让 NanoBot 长时间无人值守运行

> *"Dream relies on history.jsonl as its only input source"*  
> —— [#3973](https://github.com/HKUDS/nanobot/issues/3973) chxuan，揭示**自改进机制的输入枯竭**：系统无法从外部世界持续获取"营养"

> *"users had no way to discover which skills are available"*  
> —— [#3959](https://github.com/HKUDS/nanobot/issues/3959) 间接反馈，**技能发现性缺失**

### 使用场景与满意度

| 场景 | 满意度 | 证据 |
|:---|:---|:---|
| 子代理温度精细控制 | ✅ 满意 | Issue #3969 快速关闭，PR #3975 简洁实现"pipeline already existed" |
| WebUI 模型切换效率 | ⚠️ 待提升 | PR #3977 将只读 badge 改为 preset picker，说明原有流程繁琐 |
| MCP 配置体验 | 🔄 改善中 | PR #3979 从"手动编辑"到"Settings-managed presets"，但仍需观察稳定性 |

---

## 8. 待处理积压

| 项目 | 时长 | 风险 | 建议动作 |
|:---|:---|:---|:---|
| [#3973](https://github.com/HKUDS/nanobot/issues/3973) Dream 系统 Hunger Problem | 2 天（新） | 架构级议题，若搁置将损害"自改进"品牌 | 关联 PR #3990 已开，建议维护者确认与实时学习的衔接设计 |
| [#3992](https://github.com/HKUDS/nanobot/pull/3992) 跨代理消息总线 | 1 天（新） | 大 PR 审查周期长，可能阻塞其他协作相关 PR | 优先安排架构 review，明确消息格式版本策略 |
| [#3985](https://github.com/HKUDS/nanobot/pull/3985) 循环护栏 v2.0 | 1 天（新） | 与现有 `repeated_external_lookup_error` 机制并存，需避免逻辑冲突 | 要求作者补充与现有 web_search 护栏的集成测试 |

---

*日报基于 HKUDS/nanobot GitHub 公开数据生成 | 数据截止时间：2026-05-25 00:00 UTC*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-05-25

---

## 1. 今日速览

Hermes Agent 今日维持**高活跃度**：24小时内 50 条 Issues 更新（32 活跃/新开，18 关闭）、50 条 PR 更新（34 待合并，16 已合并/关闭），无新版本发布。社区聚焦**稳定性攻坚**——Kanban SQLite 腐败、Gateway 连接泄漏、Provider 兼容性构成三大主战场；同时** Claude Code 生态整合**与**Telegram 智能化路由**成为功能演进亮点。PR 积压率偏高（68% 待合并），维护者 review 带宽面临压力。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#31742](https://github.com/NousResearch/hermes-agent/pull/31742) | counterposition | 新增 Claude Code for Web 云环境一键 setup 脚本 + devcontainer 支持 | **降低新贡献者门槛**，标准化云端开发环境，与 Anthropic 生态深度绑定 |
| [#31728](https://github.com/NousResearch/hermes-agent/pull/31728) | MrFadiAi | Telegram 论坛主题级 `free_response` 与 mention 覆盖配置（已关闭，可能重构后重提） | 精细化群组权限控制的原型探索 |
| [历史合并 #31709](https://github.com/NousResearch/hermes-agent/issues/31709) | — | `/resume` 支持位置编号跳转（文档补全见 [#31737](https://github.com/NousResearch/hermes-agent/pull/31737)） | CLI 交互效率提升 |

**整体评估**：今日合并以**开发者体验**和**文档补齐**为主，核心架构 PR 仍在 review 队列。Kanban 稳定性修复（[#31740](https://github.com/NousResearch/hermes-agent/pull/31740)）和 Claude Code provider 桥接（[#29527](https://github.com/NousResearch/hermes-agent/pull/29527)）是即将落地的关键进展。

---

## 4. 社区热点

### 🔥 最高讨论热度

| 排名 | Issue/PR | 评论 | 👍 | 核心诉求分析 |
|:---|:---|:---:|:---:|:---|
| 1 | [#29125](https://github.com/NousResearch/hermes-agent/issues/29125) Claude CLI 集成故障 | 23 | 7 | **Claude Code 生态接入的阵痛**：用户期望通过 Claude CLI 原生使用 Hermes，但 token 传递机制存在断层。已关闭但反映 provider 桥接的迫切需求 → 直接推动 [#29527](https://github.com/NousResearch/hermes-agent/pull/29527) 的优先级 |
| 2 | [#6323](https://github.com/NousResearch/hermes-agent/issues/6323) mempalace 外部记忆模块 | 21 | 26 | **长期记忆架构的社区共识**：26 个 👍 显示强烈需求，用户不愿受限于上下文窗口，希望跨会话连续性。与今日 [#31622](https://github.com/NousResearch/hermes-agent/pull/31622)（边界触发记忆 review）形成互补路线 |
| 3 | [#31086](https://github.com/NousResearch/hermes-agent/issues/31086) Telegram DM topic 劫持 | 5 | 1 | **Gateway 状态管理的边界 case**：新 topic 被错误绑定到历史 thread_id，影响多会话隔离——已快速修复关闭，显示 P1 响应效率 |
| 4 | [#31392](https://github.com/NousResearch/hermes-agent/issues/31392) Agent-native 任务中继 + 子代理分叉 | 5 | 0 | **多智能体编排的架构提案**：用户提出 auto-forking subagents + 异步人工审批门，与现有 delegate 功能形成演进关系，可能定义 vNext 路线图 |

**诉求洞察**：社区正从"能用"向**企业级可靠**和**多智能体协作**跃迁。Claude Code 整合是短期焦点，长期记忆和任务编排是结构性需求。

---

## 5. Bug 与稳定性

### P1（严重/生产阻断）

| Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|
| [#31086](https://github.com/NousResearch/hermes-agent/issues/31086) | ✅ 已关闭 | Telegram DM topic 被历史 thread_id 劫持，新会话混入旧对话 | 已修复 |
| [#31110](https://github.com/NousResearch/hermes-agent/issues/31110) | ✅ 已关闭 | Telegram TimedOut 未捕获导致整个 Gateway 崩溃（全 profile 受影响） | 已修复 |
| [#30768](https://github.com/NousResearch/hermes-agent/issues/30768) | ✅ 已关闭 | Windows `/reset` `/new` 冻结，路由至交互菜单后键盘输入失效 | 已修复 |
| [#30959](https://github.com/NousResearch/hermes-agent/issues/30959) | ✅ 已关闭 | 内部记账字段（`_empty_recovery_synthetic` 等）泄漏至 provider，触发 HTTP 400 重试死循环 | 已修复 |
| [#31165](https://github.com/NousResearch/hermes-agent/issues/31165) | ✅ 已关闭 | Cron Telegram 适配器重连风暴后静默丢消息，jobs.json 仍标记成功 | 已修复 |
| [#31179](https://github.com/NousResearch/hermes-agent/issues/31179) | ✅ 已关闭 | `vision_analyze`/`browser_vision` 无视 `auxiliary.vision` 配置，向主模型路由图像 | 已修复 |
| [#23088](https://github.com/NousResearch/hermes-agent/issues/23088) | ✅ 已关闭 | xAI `grok-4-1-fast` 因 `reasoningEffort` 参数不兼容返回 HTTP 400 | 已修复 |

### P2（显著影响）

| Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|
| [#31702](https://github.com/NousResearch/hermes-agent/issues/31702) | ✅ 已关闭 | Copilot `gpt-5.5` 的 `xhigh` reasoning 被错误钳制为 `high` | **[#10391](https://github.com/NousResearch/hermes-agent/pull/10391)** 待合并（历史 PR，今日更新） |
| [#30736](https://github.com/NousResearch/hermes-agent/issues/30736) | 🔴 开放 | Discord 已禁用仍持续连接尝试，`_apply_env_overrides()` 强制启用 | **[#31109](https://github.com/NousResearch/hermes-agent/issues/31109)** 关联，待修复 |
| [#31109](https://github.com/NousResearch/hermes-agent/issues/31109) | 🔴 开放 | `hermes plugins disable` 被插件自启用循环覆盖，配置失效 | 待 PR |
| [#31666](https://github.com/NousResearch/hermes-agent/issues/31666) | 🔴 开放 | Codex Responses adapter 重放历史时发送非法 `function_call.name` | 待 PR |
| [#31618](https://github.com/NousResearch/hermes-agent/issues/31618) | 🔴 开放 | kanban.db 在并发 reclaim-SIGKILL 下腐败，即使 `synchronous=FULL` | **[#31740](https://github.com/NousResearch/hermes-agent/pull/31740)** 待合并 |

### P3（一般/边缘）

| Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|
| [#24186](https://github.com/NousResearch/hermes-agent/issues/24186) | 🔴 开放 | Kanban 401 Unauthorized，更新后 board 完全不可访问 | 待诊断 |
| [#31502](https://github.com/NousResearch/hermes-agent/issues/31502) | 🔴 开放 | 快速创建 9-10 个任务时 kanban.db 腐败（`database disk image is malformed`） | **[#31740](https://github.com/NousResearch/hermes-agent/pull/31740)** 待合并 |
| [#31736](https://github.com/NousResearch/hermes-agent/issues/31736) | 🔴 开放 | Gateway 内嵌 Kanban dispatcher 每 tick 开关 SQLite WAL 连接，FD 压力 | **[#31740](https://github.com/NousResearch/hermes-agent/pull/31740)** 部分覆盖 |

**稳定性健康度**：⚠️ **Kanban 存储层存在系统性风险**。3 个独立 issue 指向 SQLite 并发/FD 管理缺陷，[#31740](https://github.com/NousResearch/hermes-agent/pull/31740) 是关键修复，建议优先 review。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 成熟度 | 纳入下一版本概率 |
|:---|:---|:---|:---|
| **Claude Code Provider 桥接（原生集成）** | [#29527](https://github.com/NousResearch/hermes-agent/pull/29527) | PR 开放，大型变更（+2,400/-890 行） | **高** — 社区呼声强（#29125 23 评论），且 [#31742](https://github.com/NousResearch/hermes-agent/pull/31742) 已铺垫 dev 环境 |
| **Kanban 生命周期通知 + Orchestrator 自动恢复** | [#31729](https://github.com/NousResearch/hermes-agent/pull/31729) | PR 开放，多 agent 工作流核心 | **高** — 企业场景刚需，与现有 kanban 深度整合 |
| **Telegram 智能 Mention 路由（AI 分类未提及消息）** | [#31713](https://github.com/NousResearch/hermes-agent/pull/31713) | PR 开放，opt-in 配置 | **中高** — 群组场景体验升级，风险可控 |
| **Bitget 交易工具集** | [#31735](https://github.com/NousResearch/hermes-agent/pull/31735) | PR 开放，新工具模块 | **中** — 加密交易社区需求，需安全 audit |
| **压缩上下文命令** | [#31684](https://github.com/NousResearch/hermes-agent/pull/31684) | Issue + 完整 patch 附件 | **中** — 长会话管理痛点，实现已提供 |
| **预设路由器/无服务器推理提供商支持** | [#31739](https://github.com/NousResearch/hermes-agent/issues/31739) | 新 Issue，0 评论 | **低-中** — 架构级需求，需 RFC 讨论 |
| **mempalace 外部记忆** | [#6323](https://github.com/NousResearch/hermes-agent/issues/6323) | 历史 Issue，26 👍 | **中** — 与 [#31622](https://github.com/NousResearch/hermes-agent/pull/31622) 边界触发记忆形成渐进路线，可能分阶段实现 |
| **Agent-native 任务中继 + 子代理分叉** | [#31392](https://github.com/NousResearch/hermes-agent/issues/31392) | RFC 阶段，5 评论 | **低** — 架构宏大，需与现有 delegate 功能对齐设计 |

---

## 7. 用户反馈摘要

### 💔 核心痛点

| 场景 | 来源 | 情绪强度 |
|:---|:---|:---:|
| **"Kanban 完全不可用"** — 更新后 401，board 加载失败，工作流断裂 | [#24186](https://github.com/NousResearch/hermes-agent/issues/24186) | 🔴 高 |
| **"Discord 关了还在连"** — 配置失效感，日志噪音，资源浪费 | [#30736](https://github.com/NousResearch/hermes-agent/issues/30736) | 🟡 中高 |
| **"Anthropic 额度恐慌"** — 错误提示"extra usage"引发计费焦虑，实际可能是配置误解 | [#31668](https://github.com/NousResearch/hermes-agent/issues/31668) | 🟡 中 |
| **"Signal  setup 文档陷阱"** — Java 25 pinning、ACI UUID auth 等 4 个未记录坑，各耗 30 分钟 | [#31674](https://github.com/NousResearch/hermes-agent/issues/31674) | 🟡 中 |
| **Windows 体验断裂** — `/reset` `/new` 冻结、`hermes update` 误报并发实例 | [#30768](https://github.com/NousResearch/hermes-agent/issues/30768), [#31712](https://github.com/NousResearch/hermes-agent/pull/31712) | 🟡 中 |

### 😊 满意与认可

- **xAI/Grok 用户**："thank you all for this wonderful software! pleasure using this on both CLI and Slack"（[#23088](https://github.com/NousResearch/hermes-agent/issues/23088)）— 跨平台体验获认可
- **Claude Code 探索者**：积极尝试新集成模式，即使遇到障碍仍保持参与（[#29125](https://github.com/NousResearch/hermes-agent/issues/29125) 23 评论持续协作）

### 🔍 使用模式洞察

- **多平台并行**：用户同时在 CLI、Slack、Telegram、Discord 部署，Gateway 稳定性是**乘数效应**（单点故障影响全平台）
- **工具密集型会话**：`/resume` 回顾时 tool-call  clutter 严重（[#4337](https://github.com/NousResearch/hermes-agent/issues/4337)），调试场景体验差
- **企业/团队部署**：DingTalk、WeCom、Signal 等适配器需求上升，企业 IM 集成成为差异化战场

---

## 8. 待处理积压

### ⚠️ 需维护者关注的长期/重要事项

| 类型 | 条目 | 年龄 | 风险 |
|:---|:---|:---:|:---|
| **高赞功能请求** | [#6323](https://github.com/NousResearch/hermes-agent/issues/6323) mempalace 外部记忆 | ~47 天 | 26 👍 未获官方回应，社区可能自行 fork 实现，导致生态分裂 |
| **核心架构 PR 积压** | [#29527](https://github.com/NousResearch/hermes-agent/pull/29527) Claude Code provider 桥接 | ~5 天 | 大型 PR（2,400+ 行），review 成本高，但阻塞 Claude 生态完整体验 |
| **安全相关** | [#31416](https://github.com/NousResearch/hermes-agent/pull/31416) 避免持久化借用凭证密钥 | ~1 天 | P1 安全修复，环境变量密钥被误写入 `auth.json` 有泄露风险 |
| **历史性能 PR** | [#28039](https://github.com/NousResearch/hermes-agent/pull/28039) Codex final_answer 状态覆盖 | ~7 天 | P1 修复，影响 OpenAI Codex 适配器正确性 |
| **历史性能 PR** | [#28074](https://github.com/NousResearch/hermes-agent/pull/28074) 压缩器 token 估算遗漏 tool_call 信封 | ~7 天 | 上下文压缩精度，影响长会话成本与质量 |

**建议优先级**：
1. **立即**：[#31416](https://github.com/NousResearch/hermes-agent/pull/31416) 安全修复、[#31740](https://github.com/NousResearch/hermes-agent/pull/31740) Kanban 稳定性
2. **本周**：[#29527](https://github.com/NousResearch/hermes-agent/pull/29527) Claude Code 桥接（分模块 review）
3. **排期回应**：[#6323](https://github.com/NousResearch/hermes-agent/issues/6323) 记忆架构 RFC，避免社区流失

---

*日报生成时间：2026-05-25 | 数据来源：NousResearch/hermes-agent GitHub 公开数据*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-05-25

> **项目**: [sipeed/picoclaw](https://github.com/sipeed/picoclaw) | **日期**: 2026-05-25 | **分析周期**: 过去24小时

---

## 1. 今日速览

PicoClaw 今日保持**中高活跃度**，代码层面推进显著：10 个 PR 中有 8 个处于待合并状态，显示社区贡献活跃但 review 资源可能承压。核心基础设施获重点修复——cron 任务静默失败的关键回归被快速关闭，消息总线背压、Agent 循环重载稳定性等底层问题均有专项 PR 攻坚。社区侧，LM Studio 易连接和 exec 工具安全守卫的误报仍是用户高频痛点，两个 Issue 均积累 20 和 13 条评论，需求迫切但尚未有对应 PR。整体健康度：**代码迭代稳健，社区响应存在滞后**。

---

## 2. 版本发布

### 🌙 Nightly Build: [v0.2.9-nightly.20260524.d499cbec](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

| 属性 | 详情 |
|:---|:---|
| **类型** | 自动化夜间构建 |
| **稳定性** | ⚠️ 不稳定，谨慎使用 |
| **变更范围** | `main` 分支自 `v0.2.9` 以来的全部累积变更 |

**迁移注意事项**：作为 nightly 版本，不建议用于生产环境。当前 `main` 分支包含大量待合并 PR（如 Agent 协作总线、微信多账号、WhatsApp native 模式等），实际功能状态与稳定版差异较大。

---

## 3. 项目进展

### ✅ 已合并/关闭 PR（2 条）

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#2938](https://github.com/sipeed/picoclaw/pull/2938) | [hschne](https://github.com/hschne) | **修复 cron 命令任务静默失败**：`CronTool.ExecuteJob()` 调用 `ExecTool.Execute()` 时缺失 `"action": "run"` 参数，导致所有 cron 命令作业返回 `ErrorResult("action is required")` | 🔴 **高** — 修复关键功能回归，恢复定时任务可靠性 |
| [#2759](https://github.com/sipeed/picoclaw/pull/2759) | [bogdanovich](https://github.com/bogdanovich) | **Seahorse 检索工具作用域收紧**：`short_grep` 默认限定当前 tool session，`short_expand` 防止跨会话消息 ID 猜测 | 🟡 **中** — 增强多会话场景下的隐私与安全性边界 |

**今日合并率**: 20%（2/10），其余 8 个 PR 待 review，存在**合并瓶颈信号**。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| 排名 | Issue | 评论数 | 👍 | 核心诉求分析 |
|:---|:---|:---:|:---:|:---|
| 1 | [#28 Feat Request: LM Studio Easy Connect](https://github.com/sipeed/picoclaw/issues/28) | **20** | 2 | **本地化 LLM 接入门槛**：用户希望零配置连接 LM Studio，反映边缘设备/低算力场景对本地模型托管的强烈需求。Issue 创建于 2 月，标记 `stale`，社区技能门槛成为瓶颈 |
| 2 | [#1042 [BUG] exec工具的guardCommand方法问题](https://github.com/sipeed/picoclaw/issues/1042) | **13** | 2 | **安全策略过度拦截**：`restrict_to_workspace=true` 时，正则误判 `curl` 等无路径命令为目录遍历，**可用性与安全的冲突**。创建于 3 月，同样 `stale` |

**诉求本质**：边缘 AI 设备用户（如 Android/Termux 场景）需要更宽松的本地模型集成 + 更精准的安全守卫，当前两者均存在摩擦。

### 🔥 今日新增高潜力 PR

| PR | 亮点 | 路线图意义 |
|:---|:---|:---|
| [#2937 Feat/agent collaboration](https://github.com/sipeed/picoclaw/pull/2937) | 首类 Agent 协作总线：持久化邮箱、协作线程、权限感知路由 | 🟢 **战略级** — 多 Agent 架构的基础设施，回应 #2837 的前置需求 |
| [#2936 feat(skills): skip skills whose required binaries are missing](https://github.com/sipeed/picoclaw/pull/2936) | 按 PATH 存在性过滤技能，避免 $10 RPi 上广告不可用的 `agent-browser` | 🟢 **体验级** — 边缘设备资源感知的关键优化 |

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | Fix PR | 影响范围 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | Cron 命令任务**静默失败**（`action` 参数缺失） | ✅ **已修复** | [#2938](https://github.com/sipeed/picoclaw/pull/2938) | 所有依赖 cron 的定时自动化场景 |
| 🟡 **中** | 消息总线**无界阻塞**导致背压不可见、潜在 OOM | 🔄 **待合并** | [#2906](https://github.com/sipeed/picoclaw/pull/2906) | 高并发消息场景 |
| 🟡 **中** | Agent 重载时**goroutine 泄漏** + panic 清理不稳定 | 🔄 **待合并** | [#2904](https://github.com/sipeed/picoclaw/pull/2904) | 动态配置热更新场景 |
| 🟡 **中** | Exec 工具**安全守卫误报**（curl 被判定为路径遍历） | ⏳ **未修复** | 无 | `restrict_to_workspace=true` 用户 |
| 🟢 **低** | WhatsApp native 模式配置检测失效 | 🔄 **待合并** | [#2934](https://github.com/sipeed/picoclaw/pull/2934) | `use_native: true` 用户 |

**回归风险**: #2938 明确指出该 bug 来自提交 `3f1ac2...` 的回归，建议维护者审视 cron/exec 接口变更的测试覆盖。

---

## 6. 功能请求与路线图信号

| 需求来源 | 功能方向 | 已有 PR/关联 | 纳入下一版本概率 |
|:---|:---|:---|:---:|
| [#28](https://github.com/sipeed/picoclaw/issues/28) LM Studio 易连接 | 本地 LLM 零配置发现 | 无 | 🟡 **中** — 需求明确但实现者缺位 |
| [#2837](https://github.com/sipeed/picoclaw/issues/2837) AGENT.md 工具策略 | 细粒度 Agent 能力过滤 | [#2937](https://github.com/sipeed/picoclaw/pull/2937) Agent 协作总线（基础设施层） | 🟢 **高** — 架构正在对齐 |
| [#2883](https://github.com/sipeed/picoclaw/pull/2883) 微信多账号 | 中国社交生态适配 | 已有 PR，待 review | 🟢 **高** — 代码就绪 |
| [#2935](https://github.com/sipeed/picoclaw/pull/2935) 繁体中文 i18n | 华语区扩展 | 已有 PR，待 review | 🟢 **高** — 纯文档/前端，风险低 |
| [#2902](https://github.com/sipeed/picoclaw/pull/2902) Android Termux 指南 | 移动端/边缘部署 | 已有 PR，待 review | 🟢 **高** — 与 #28 用户场景高度重合 |

**路线图推断**: v0.3.0 或下一稳定版可能聚焦 **Agent 多协作 + 边缘设备优化 + 华语生态扩展** 三大主题。

---

## 7. 用户反馈摘要

> 从 Issues 评论中提炼的真实声音

| 痛点/场景 | 来源 | 情绪 |
|:---|:---|:---:|
| **"LM Studio 连接超出我的能力范围"** — 非技术用户渴望开箱即用的本地模型接入 | [#28](https://github.com/sipeed/picoclaw/issues/28) | 😫 挫败 |
| **"curl 查天气被安全拦截"** — 安全策略过度敏感，误伤正常工具调用 | [#1042](https://github.com/sipeed/picoclaw/issues/1042) | 😤 不满 |
| **"想在 $10 RPi 上运行，但 LLM 总推荐不存在的浏览器技能"** — 资源感知缺失导致幻觉循环 | [#2936](https://github.com/sipeed/picoclaw/pull/2936) 关联 #2351 | 😩 无奈 |
| **"Android Termux 部署缺乏文档"** — 移动端用户 onboarding 困难 | [#2902](https://github.com/sipeed/picoclaw/pull/2902) | 🙏 期待 |

**满意度分水岭**: 核心代码质量受认可（bug 修复快），但**边缘场景体验（本地模型、移动端、资源受限设备）**存在系统性缺口。

---

## 8. 待处理积压

> ⚠️ 以下 Issue/PR 长期未响应，可能损害社区信任与贡献者积极性

| 类型 | 条目 | 创建时间 | 最后更新 | 积压天数 | 风险 |
|:---|:---|:---:|:---:|:---:|:---|
| Issue | [#28 LM Studio Easy Connect](https://github.com/sipeed/picoclaw/issues/28) | 2026-02-11 | 2026-05-24 | **103 天** | 🔴 最高频用户诉求，零官方回应，社区自生自灭 |
| Issue | [#1042 exec guardCommand 误报](https://github.com/sipeed/picoclaw/issues/1042) | 2026-03-04 | 2026-05-24 | **82 天** | 🟡 有明确复现，无 assignee |
| PR | [#2883 微信多账号](https://github.com/sipeed/picoclaw/pull/2883) | 2026-05-16 | 2026-05-24 | **9 天待 review** | 🟡 生态关键 PR，review 延迟 |
| PR | [#2906 消息总线背压](https://github.com/sipeed/picoclaw/pull/2906) | 2026-05-20 | 2026-05-24 | **5 天待 review** | 🟡 稳定性相关，建议优先 |
| PR | [#2904 Agent 重载稳定性](https://github.com/sipeed/picoclaw/pull/2904) | 2026-05-20 | 2026-05-24 | **5 天待 review** | 🟡 同上，成对 review 效率更高 |

**维护者行动建议**:
1. **立即**: 为 #28 和 #1042 分配 owner，或明确标记 `help wanted` / `good first issue`
2. **本周**: 优先 review #2904 + #2906（稳定性双 PR，可能有关联）
3. **下周**: 合并 #2883（微信生态）和 #2935（i18n）以释放社区动能

---

*本日报基于 GitHub 公开数据生成，未包含私有讨论或线下决策信息。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-05-25

> **项目**: [NanoClaw](https://github.com/qwibitai/nanoclaw) — AI 智能体与个人 AI 助手开源框架  
> **数据周期**: 2026-05-24 至 2026-05-25 | **报告生成**: 2026-05-25

---

## 1. 今日速览

NanoClaw 今日维持**低活跃度**运行，社区贡献节奏平稳但未见爆发。核心路由器组件暴露一处配置解析漏洞——`engage_mode='always'` 被静默丢弃导致消息丢失，属数据面缺陷需优先修复。基础设施层面有两项 PR 待审：平台 ID 标准化改造（#2607）与权限继承机制（#2605），分别对应多平台适配与 CLI 工具链的成熟度提升。管理后台批量查询端点（#2604）已快速合入，表明运维可观测性仍是近期重点。无版本发布，整体处于"修固底盘、收敛技术债"的阶段。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

| PR | 状态 | 贡献者 | 核心变更 | 项目推进价值 |
|:---|:---|:---|:---|:---|
| [#2604](https://github.com/nanocoai/nanoclaw/pull/2604) | **已合并** | [sumsumai](https://github.com/sumsumai) | 新增 `GET /admin/agent-activity` 批量端点，支持按 `agentGroupIds` 聚合查询多智能体最后活跃时间戳 | ⬆️ **运维效率**：消除 N+1 查询问题，为管理后台"Last active"列提供原子能力；标志着 admin API 从单资源操作向批量场景演进 |

**今日合并率**: 33%（1/3），待审积压 2 项。

---

## 4. 社区热点

| 排名 | 条目 | 热度指标 | 核心诉求分析 |
|:---|:---|:---|:---|
| 🔥1 | [#2607 Use platform IDs for inbound message actions](https://github.com/nanocoai/nanoclaw/pull/2607) | 待审，技术债型 PR | **平台适配深度不足**：贡献者发现 NanoClaw 内部复合消息 ID 与外部平台原生 ID 的映射断裂，导致消息反应（reactions）等交互动作在部分平台失效。诉求是**抽象层不应破坏平台原生能力**，反映多平台框架的通用标识符设计存在架构张力 |
| 2 | [#2605 Inherit parent agent permissions via OneCLI](https://github.com/nanocoai/nanoclaw/pull/2605) | 待审，工具链增强 | **CLI 开发者体验**：OneCLI 场景下子智能体权限需手动复制父级配置，运维繁琐。诉求是**权限模型的层级继承语义**，与 NanoClaw 多智能体编排的核心价值主张直接相关 |

> 注：今日无高评论/高反应条目，社区讨论深度偏浅，PR 描述详尽但缺乏审阅者互动。

---

## 5. Bug 与稳定性

| 严重等级 | Issue | 状态 | 影响面 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **High** | [#2606](https://github.com/nanocoai/nanoclaw/issues/2606) `engage_mode='always'` silently drops all messages | **OPEN**，无 assignee | **数据丢失**：配置该模式的 wiring 全部消息被静默丢弃（`no_agent_engaged`），用户无感知、无报错，属"fail-silent"缺陷；影响依赖 always-on 智能体的自动化工作流 | ❌ **暂无** |
| 🟡 Low | — | — | — | — |

**根因定位**（来自 Issue 报告）：`src/router.ts` 中 `evaluateEngage()` 的 `switch` 语句未处理 `'always'` case，落入默认分支触发丢弃逻辑。修复路径明确：补充分支或前置校验拒绝非法配置入库。

> ⚠️ **风险预警**：该配置值可被合法写入数据库，表明 schema/业务层校验与运行时处理存在**双向不一致**，需同步检视其他 `engage_mode` 枚举值的覆盖完整性。

---

## 6. 功能请求与路线图信号

| 来源 | 内容 | 纳入可能性评估 |
|:---|:---|:---|
| PR [#2605](https://github.com/nanocoai/nanoclaw/pull/2605) | OneCLI 权限继承 | **高** — 已提交完整实现，遵循贡献指南（`follows-guidelines` 标签），贴合多智能体权限管理痛点，合入后可直接改善企业级部署体验 |
| PR [#2607](https://github.com/nanocoai/nanoclaw/pull/2607) | 平台原生 ID 透传 | **中高** — 属于平台适配层的基础能力补全，技术方案清晰（替换复合 ID 为 `raw message ID`），但需评估对既有内部路由的影响面 |
| PR [#2604](https://github.com/nanocoai/nanoclaw/pull/2604)（已合并） | Admin 批量查询 | **已落地** — 为后续 dashboard 功能扩展奠定 API 基础 |

**路线图信号**：今日三项变更均围绕"**规模化运维**"（批量查询、权限继承）与"**平台深度集成**"（原生 ID），暗示项目正从单智能体 PoC 阶段向**生产环境多租户部署**过渡。

---

## 7. 用户反馈摘要

> 基于今日 Issue/PR 描述及评论提炼

| 维度 | 反馈内容 |
|:---|:---|
| **痛点** | `engage_mode` 配置与运行时行为不一致，导致"配置成功但运行失败"的调试困难；平台 API 交互因 ID 映射问题失效 |
| **场景** | 企业 admin 需监控大量智能体活跃状态；CLI 自动化部署需减少重复权限配置 |
| **满意度** | #2604 的快速合并（同日创建-合并）反映运维类需求响应及时 |
| **不满** | 静默失败模式（silent drop）缺乏可观测性，错误原因 `no_agent_engaged` 与配置语义矛盾，误导排查方向 |

---

## 8. 待处理积压

| 条目 | 滞留时间 | 风险说明 | 建议动作 |
|:---|:---|:---|:---|
| [#2606](https://github.com/nanocoai/nanoclaw/issues/2606) | ~1 天（新报，但属生产缺陷） | 配置-运行时断裂可能存在于其他枚举字段；用户可能已受影响但不知情 | **P1 优先级**，建议 24h 内指派维护者，同步审计 `engage_mode` 全量 case 覆盖 |
| [#2607](https://github.com/nanocoai/nanoclaw/pull/2607) | ~1 天 | 平台适配层缺陷，阻塞部分平台的消息交互功能 | 安排平台集成模块维护者审阅，评估兼容性测试覆盖 |
| [#2605](https://github.com/nanocoai/nanoclaw/pull/2605) | ~1 天 | 权限继承涉及安全模型，需审慎评审 | 建议安全/CLI 模块双重审阅，验证边界情况（循环继承、权限降级等） |

---

**项目健康度评分**: 🟡 **B**  
- 优势：运维需求响应快（#2604 当日合并），贡献者活跃度稳定  
- 风险：核心路由组件存在静默失败缺陷，待审 PR 缺乏审阅者互动，可能反映维护带宽紧张

---

*日报基于 GitHub 公开数据自动生成，如需深度分析特定模块，请联系项目维护者。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-05-25

> **项目**: [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)  
> **日期**: 2026-05-25（数据周期：过去24小时）

---

## 1. 今日速览

NullClaw 今日活跃度**偏低**，仅产生 1 条 Issue 更新与 1 条 PR 关闭记录，无新版本发布。社区讨论集中在**内存召回机制的可控性**这一核心架构议题上，同时项目完成了 HTTP 层从 curl 子进程到原生 Zig 实现的迁移收尾工作。整体呈现"维护性推进"特征，无紧急安全事件或重大功能突破。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### ✅ PR #881 已关闭：HTTP 层彻底去 curl 化

| 属性 | 内容 |
|:---|:---|
| **链接** | [nullclaw/nullclaw#881](https://github.com/nullclaw/nullclaw/pull/881) |
| **作者** | ncode |
| **生命周期** | 2026-05-01 创建 → 2026-05-24 关闭（历时 23 天） |
| **影响范围** | providers, channels, gateway, tools, memory API, update, voice, SSE 全路径 |

**技术变更摘要**：
- **核心替换**：将基于 `curl` 子进程的 Zig HTTP 辅助函数迁移至 `std.http` 原生封装
- **命名空间重构**：所有 `Curl*` 前缀的运行时 HTTP 辅助函数与错误类型统一更名为 `Http*`
- **边界保留**：curl 仍作为 Docker 构建、编译脚本等**运维工具链**的辅助依赖，非运行时必需

**项目意义**：
| 维度 | 评估 |
|:---|:---|
| **稳定性** | ⬆️ 消除子进程 fork/exec 开销与信号处理风险，降低运行时内存碎片 |
| **可移植性** | ⬆️ 减少对外部二进制依赖，利好静态链接与受限环境部署 |
| **维护成本** | ⬇️ 统一错误处理路径，调试栈更扁平 |
| **破坏性** | 低（内部 API 更名，外部协议无变化） |

> **推进评估**：此为基础设施层的重要技术债清偿，为后续异步 I/O 优化与 WASI 目标平台支持扫清障碍。

---

## 4. 社区热点

### 🔥 Issue #919：按消息禁用自动内存召回（FTS5）

| 属性 | 内容 |
|:---|:---|
| **链接** | [nullclaw/nullclaw#919](https://github.com/nullclaw/nullclaw/issues/919) |
| **作者** | weissfl |
| **状态** | OPEN（创建于 2026-05-18，最后更新 2026-05-24） |
| **互动** | 1 条评论，0 👍 |

**核心诉求分析**：

```
当前行为: enrichMessageWithRuntime() 对每条入站消息强制执行 FTS5 + BM25 召回
硬编码参数:
  ├─ DEFAULT_RECALL_LIMIT = 5
  ├─ MAX_CONTEXT_BYTES = 4000
  ├─ SCOPED_RECALL_CANDIDATE_LIMIT = 64
  └─ GLOBAL_RECALL_CANDIDATE_LIMIT = 64
用户痛点: 无开关控制 → 无法针对特定消息类型/场景跳过召回
```

**背后诉求层级**：
1. **即时需求**：为单条消息提供禁用召回的逃逸口（如系统指令、敏感上下文隔离）
2. **深层需求**：召回策略的参数化与可编排性（与 #919 评论中暗示的"per-message"粒度一致）
3. **架构信号**：FTS5 作为默认全量激活模块，可能在高频/低延迟场景成为瓶颈

> **关联判断**：此 Issue 与 PR #881 的 HTTP 重构存在间接协同——HTTP 层精简后，消息处理管道的可插入性增强，为召回策略的条件化执行创造了更清洁的实现面。

---

## 5. Bug 与稳定性

| 严重级别 | 数量 | 详情 |
|:---|:---|:---|
| 🔴 Critical | 0 | — |
| 🟠 High | 0 | — |
| 🟡 Medium | 0 | — |
| 🟢 Low / 技术债 | 1 | Issue #919 揭示的硬编码参数问题（设计缺陷，非运行时崩溃）|

**稳定性态势**：今日无新增崩溃、回归或安全漏洞报告。项目处于**技术债清偿后的平稳期**。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 纳入可能性评估 | 关键依赖 |
|:---|:---|:---|:---|
| 按消息粒度禁用 FTS5 召回 | Issue #919 | **中高** | 需设计 `MessageOptions` 或 `RecallPolicy` 配置层 |
| 召回参数外部化（非硬编码） | Issue #919 隐含 | **高** | 配置系统已有基础，改动面可控 |

**路线图推断**：
- **短期（1-2 周）**：#919 可能衍生出配置参数暴露的补丁 PR，作为快速 wins
- **中期（1-2 月）**：若社区持续反馈，可能引入 `RecallStrategy` 接口，支持 noop/full/custom 三种模式
- **与现有 PR 的协同**：#881 关闭后，HTTP 层原生化为消息中间件的改造腾出了空间

---

## 7. 用户反馈摘要

> 基于 Issue #919 及评论提炼

| 维度 | 反馈内容 |
|:---|:---|
| **痛点** | "每条消息都被强制召回"——用户对**不可控的默认行为**感到约束，尤其在需要隔离上下文或优化延迟的场景 |
| **使用场景** | 推测：系统消息注入、工具调用结果回传、高频轮询类交互，这些场景可能不需要历史记忆参与 |
| **满意度** | 对框架整体功能完备性认可（未质疑召回机制本身），但对**灵活性**有明确期待 |
| **不满意** | 硬编码参数缺乏文档化逃逸路径；无临时禁用机制导致 workaround 困难 |

---

## 8. 待处理积压

| 项目 | 链接 | 账龄 | 风险提醒 |
|:---|:---|:---|:---|
| Issue #919 | [nullclaw/nullclaw#919](https://github.com/nullclaw/nullclaw/issues/919) | 7 天 | ⚠️ **中等关注** — 处于早期讨论阶段，但触及核心架构决策（召回策略可配置化）。若 14 天内无维护者回应或标签分配，可能流失贡献者 weissfl 的后续投入。建议优先标记 `enhancement` + `good first issue` 或维护者给出设计方向裁定。|

---

**日报生成依据**：GitHub API 事件流（Issues/PRs 24h 窗口）  
**置信度**：高（原始数据完整，无缺失字段）

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-05-25

> **项目**: nearai/ironclaw | **日期**: 2026-05-25 | **分析周期**: 过去24小时

---

## 1. 今日速览

IronClaw 今日呈现**高活跃度、高安全聚焦**的特征。Issues 更新 25 条（22 活跃/3 关闭），PR 更新 50 条（48 待审/2 已合并），无版本发布。核心主题围绕 **Reborn 架构迁移收尾**（M3-M5 模块）、**工具执行安全漏斗加固**（#4017/#4019/#4021/#4022 形成完整修复链），以及 **crates.io 发布滞后**引发的下游依赖风险。社区对安全审计、dispatch 边界、凭证注入等话题讨论密集，显示项目正处于生产就绪前的关键硬化阶段。

---

## 2. 版本发布

**无新版本发布**

> crates.io 最新版本仍为 **0.24.0**（2026-03-31），而 GitHub 已打标至 **v0.27.0**（2026-04-29）。下游用户因 wasmtime 28.x 的 CVE 被锁定在旧版本，发布管道存在明显滞后。详见 Issue #3259。

---

## 3. 项目进展

### 已合并/关闭的 PR

| PR | 状态 | 贡献者 | 进展说明 |
|:---|:---|:---|:---|
| [#4016](https://github.com/nearai/ironclaw/pull/4016) | **已关闭** | serrrfirat | `[codex] Wire HTTP into Reborn local dev` — 被 #4018 取代，完成 Reborn 本地开发环境的 HTTP builtin 能力接入 |

### 已关闭的 Issues

| Issue | 状态 | 贡献者 | 进展说明 |
|:---|:---|:---|:---|
| [#3269](https://github.com/nearai/ironclaw/issues/3269) | **已关闭** | serrrfirat | ProductAdapter 替代陈旧 transport PR 的定义完成，Reborn 产品表面迁移的关键阻塞解除 |
| [#3614](https://github.com/nearai/ironclaw/issues/3614) | **已关闭** | serrrfirat | WebChat v2 时间线/事件 schema 定义完成，M5 事件流模块的 P1 需求落地 |
| [#3579](https://github.com/nearai/ironclaw/issues/3579) | **已关闭** | serrrfirat | Slack 通道迁移至 Reborn ProductAdapter 完成，#3577 追踪列表中的首个端口关闭 |

### 整体推进评估

- **Reborn 通道迁移**: Slack 完成，Telegram v2 入站追踪器（[#3590](https://github.com/nearai/ironclaw/pull/3590)）待审，WebChat v2 schema 就绪
- **安全漏斗体系化**: 从 #4017 发现问题 → #4019 系统性提案 → #4021 CI 边界测试 + #4022 回归修复，形成完整闭环
- **GSuite 重组**: 旧 phase PR 栈关闭（[#3969](https://github.com/nearai/ironclaw/issues/3969)），新 first-party 扩展接入（[#3967](https://github.com/nearai/ironclaw/issues/3967)）、shim/实时 harness（[#3968](https://github.com/nearai/ironclaw/issues/3968)）并行推进

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---|:---|:---|
| 1 | **#3259 Publish 0.25.0–0.27.0 to crates.io** | 8 | 下游因 wasmtime CVE 被锁定旧版本，要求恢复 crates.io 发布管道的及时性 | [Issue #3259](https://github.com/nearai/ironclaw/issues/3259) |
| 2 | **#1739 Async transaction approval system with WalletConnect** | 7 | 高价值操作的两阶段异步审批，人机隔离的安全通道设计 | [Issue #1739](https://github.com/nearai/ironclaw/issues/1739) |
| 3 | **#4017 Interactive chat tool calls bypass ToolDispatcher::dispatch** | 3 | 交互式聊天路径跳过审计漏斗，要求统一执行边界 | [Issue #4017](https://github.com/nearai/ironclaw/issues/4017) |
| 4 | #3269 / #3614 / #3579 | 各3/1/1 | Reborn 架构迁移的系列收尾 | 见上文 |

### 热点分析

- **#3259** 的 8 条评论反映**供应链安全焦虑**：wasmtime 28.x 的 CVE 使下游被迫 pin 0.24.0，而 GitHub 已发布 0.27.0，crates.io 滞后成为单点故障。作者 dacoldest 持续跟进但无维护者回应，存在社区信任损耗风险。
- **#1739** 的 7 条评论显示**金融级安全需求**的持续性关注，与 #1712（安全金融执行层）、#3564（钱包签名需不可伪造通道）形成主题聚类，暗示 IronClaw 正向"代理自主管理资产"的敏感场景演进。
- **#4017** 的 3 条评论虽少，但触发了 #4019/#4021/#4022 的完整响应链，体现**安全问题的级联修复效率**。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | 修复 PR | 说明 |
|:---|:---|:---|:---|:---|
| 🔴 **P0 - 回归** | #4014 引入的 HTTP 响应错误导致整个 agent run 终止 | **已修复** | [#4022](https://github.com/nearai/ironclaw/pull/4022) | 原为可恢复工具错误，现恢复为 model-visible 的 `OperationFailed` |
| 🔴 **P0 - 架构缺陷** | 交互式聊天绕过 `ToolDispatcher::dispatch`，无审计无过滤 | **修复中** | [#4021](https://github.com/nearai/ironclaw/pull/4021) (step 1), [#4019](https://github.com/nearai/ironclaw/issues/4019) (完整提案) | 系统性漏洞，需 CI 边界测试长期防护 |
| 🟡 **P1 - 安全疑虑** | `RuntimeCredentialTarget::PathPlaceholder` 凭证注入面过宽 | **待决策** | 无 | zmanian 质疑是否应删除或加固，#3917 |
| 🟡 **P1 - 持续失败** | Nightly E2E 失败（2026-05-10 起） | **未解决** | 无 | [#3447](https://github.com/nearai/ironclaw/issues/3447) 已挂起 14 天，无评论互动 |
| 🟢 **P2 - 组合缺陷** | Standalone composition root 在 `HOOKS_ENABLED` 下未 wire gate-ref factory | **待修复** | 无 | [#3962](https://github.com/nearai/ironclaw/issues/3962)，影响 hook 框架生产激活 |

### 关键观察

- **#4014 回归**显示"安全加固"本身成为风险源：分类可恢复失败时误将 HTTP 响应错误提升为致命错误，修复 #4022 明确将此类错误映射为 `OperationFailed` 保持 model 可见性。
- **工具执行漏斗**成为今日核心战场：#4017 → #4019 → #4021 → #4022 形成"发现-提案-测试-修复"的 24 小时响应链，体现安全优先的文化，但也暴露"约定驱动"防护的脆弱性（#4019 明确指出安全不变量是"约定而非强制"）。

---

## 6. 功能请求与路线图信号

| 功能需求 | 来源 | 与现有 PR 的关联 | 纳入可能性 |
|:---|:---|:---|:---|
| **Subagent spawn 设计** | [#3798](https://github.com/nearai/ironclaw/issues/3798) / [#3814](https://github.com/nearai/ironclaw/pull/3814) | PR #3814 已提交设计文档，#3798 为追踪 issue | **高** — 设计文档已完整，待实现 |
| **Trigger loop（定时触发工作流）** | [#3873](https://github.com/nearai/ironclaw/issues/3873) / [#3874](https://github.com/nearai/ironclaw/pull/3874) | PR #3874 已合并设计 spec（412 行） | **高** — 纯设计阶段，无代码变更 |
| **Trezor/MetaMask 硬件钱包支持** | [#3025](https://github.com/nearai/ironclaw/issues/3025) | 无关联 PR | **中低** — 长期需求，但受 #3564 安全架构阻塞 |
| **OpenAPI/AsyncAPI 规范优先** | [#3953](https://github.com/nearai/ironclaw/issues/3953) | 无关联 PR | **中** — 社区 RFC，需维护者评估 |
| **GSuite 完整集成** | [#3967](https://github.com/nearai/ironclaw/issues/3967)-[#3969](https://github.com/nearai/ironclaw/issues/3969) | 3 个并行 issue + 基础 PR 待审 | **高** — 重组后优先推进 |

### 路线图信号

- **Reborn "Configuration-as-Code"**（#3036）通过 [#3703](https://github.com/nearai/ironclaw/pull/3703) 进行未来防护性重构，为租户蓝图和用例 harness 预留接口。
- **M4 Host Kernel**（安全/组合）和 **M5 Event Streaming**（时间线/回放）是近期交付重点，多个 P0/P1 issue 聚集。

---

## 7. 用户反馈摘要

### 真实痛点

| 来源 | 痛点 | 场景 |
|:---|:---|:---|
| #3259 (dacoldest) | "Downstream consumers pulling from crates.io are pinned to 0.24.0" | 企业/严肃项目无法跟踪 GitHub tag，依赖 crates.io 作为可信源 |
| #3025 (benjaminpreiss) | "Most of them (wallets) are not open source or dont have a github repo linked" | 热钱包连接器列表不透明，开源审计需求未被满足 |
| #4017 (zmanian) | "skips the audit trail and the channel tool-permit filtering" | 安全审计时发现交互路径与生产路径不一致，合规风险 |

### 满意/不满意

- **满意**: Reborn 架构迁移的文档化和追踪体系（#3269, #3577, #3607 等 parent tracker）获得结构化推进；安全问题响应速度（#4017 → 24h 内完整修复链）。
- **不满意**: crates.io 发布滞后无维护者回应；Nightly E2E 失败 14 天无处理；部分 wallet 选项缺乏开源透明度。

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 最后更新 | 阻塞时长 | 风险 | 提醒 |
|:---|:---|:---|:---|:---|:---|
| **#3259 crates.io 发布滞后** | 2026-05-05 | 2026-05-24 | **19 天** | 🔴 供应链安全信任危机 | 需维护者明确发布计划，回应 dacoldest |
| **#3447 Nightly E2E 失败** | 2026-05-10 | 2026-05-24 | **14 天** | 🟡 质量信号衰减 | 14 天 0 评论，需分配 owner |
| **#3025 Trezor/MetaMask 支持** | 2026-04-28 | 2026-05-24 | **27 天** | 🟡 用户采纳障碍 | 需与 #3564 安全架构联动回应 |
| **#1712 安全金融执行层** | 2026-03-27 | 2026-05-24 | **59 天** | 🟡 长期设计 issue | 与 #1739 审批系统、#3564 签名通道需整合更新 |

---

> **日报生成说明**: 基于 GitHub API 数据自动分析，聚焦 Reborn 架构迁移、工具执行安全、供应链发布三大主题。建议明日关注 #4022 合并状态、#3259 维护者回应、以及 M4/M5 模块的 PR 评审进度。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-05-25

> **项目**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
> **分析日期**: 2026-05-25（数据截止 2026-05-24）

---

## 1. 今日速览

LobsterAI 今日呈现**高吞吐量代码清理态势**：24小时内 **14个 PR 全部关闭/合并**，零待合并积压，但 Issues 活动完全静默。所有 PR 均标记为 `stale`（陈旧），创建于4月9日、于5月24日集中关闭，表明维护团队正在进行**批量历史 PR 收尾与分支整理**，而非活跃迭代开发。无新版本发布，社区互动指标（👍、评论）均为零，项目处于**维护模式下的技术债务清理阶段**。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 今日合并/关闭的 14 个 PR 按领域分类

| 领域 | PR 数量 | 核心进展 |
|:---|:---|:---|
| **Cowork 协作引擎** | 6 PR | 消息队列、搜索增强、并发安全、网关稳定性、错误处理全链路修复 |
| **OpenClaw 网关** | 2 PR | 配置兼容性、密钥安全 |
| **定时任务** | 2 PR | 提示词逻辑、表单交互体验 |
| **数据层/SQLite** | 2 PR | 迁移可靠性、序列号原子性 |
| **API/渲染层** | 2 PR | SSE 流式稳定性、设置页交互 |

### 关键功能推进

**🔹 客户端消息队列（[#1590](https://github.com/netease-youdao/LobsterAI/pull/1590)）**
- AI 回复期间允许连续发送消息，本地排队串行消费
- 支持排队消息编辑/删除，提升协作流畅度

**🔹 跨 Agent 全内容搜索（[#1594](https://github.com/netease-youdao/LobsterAI/pull/1594)）**
- 突破 `currentAgentId` 过滤限制，实现跨 Agent 会话检索
- SQL 层同时匹配会话标题与消息内容，搜索能力质变

**🔹 网关启动阻断修复（[#1593](https://github.com/netease-youdao/LobsterAI/pull/1593)）**
- 移除已废弃的 `skipMissedJobs` 字段，解决 OpenClaw 严格校验导致的启动崩溃
- 影响范围：所有用户本地及生产环境网关

---

## 4. 社区热点

**今日无活跃社区讨论。**

所有 14 个 PR 的 👍 数均为 0，评论数为 `undefined`（未公开或零评论），无 Issues 活动。`stale` 标签表明这些 PR 已滞留 **45天** 未获及时 review，于今日集中批量关闭。

> **诉求分析**: 社区参与度低迷可能反映：
> 1. 项目处于内部维护周期，外部贡献者等待信号
> 2. 批量关闭陈旧 PR 是维护者释放"欢迎新贡献"信号的常规操作
> 3. 缺乏公开评论数据，无法判断社区对具体功能的需求强度

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | PR Fix | 状态 |
|:---|:---|:---|:---|
| **🔴 P0 - 服务崩溃** | OpenClaw 网关因未知配置字段持续重启失败 | [#1593](https://github.com/netease-youdao/LobsterAI/pull/1593) | ✅ 已修复 |
| **🔴 P0 - 数据竞争** | `addMessage` 序列号并发重复，消息顺序错乱 | [#1602](https://github.com/netease-youdao/LobsterAI/pull/1602) | ✅ 已修复 |
| **🟡 P1 - 状态丢失** | 网关重连后 session 停止冷却清除，IM 消息意外复活已停止会话 | [#1601](https://github.com/netease-youdao/LobsterAI/pull/1601) | ✅ 已修复 |
| **🟡 P1 - 错误广播** | 权限响应被广播至双引擎，导致非预期行为 | [#1599](https://github.com/netease-youdao/LobsterAI/pull/1599) | ✅ 已修复 |
| **🟡 P1 - 异常静默** | `startSession`/`continueSession` 异常被吞，错误未上报 | [#1603](https://github.com/netease-youdao/LobsterAI/pull/1603) | ✅ 已修复 |
| **🟡 P1 - 迁移失败不可重试** | legacy memory 迁移失败后错误标记完成，数据永久丢失风险 | [#1595](https://github.com/netease-youdao/LobsterAI/pull/1595) | ✅ 已修复 |
| **🟡 P1 - 配置漂移** | `executionMode` 硬编码为 `local`，UI 与实际运行不一致 | [#1598](https://github.com/netease-youdao/LobsterAI/pull/1598) | ✅ 已修复 |
| **🟢 P2 - 交互缺陷** | 设置页 Enter 键意外提交关闭 | [#1585](https://github.com/netease-youdao/LobsterAI/pull/1585) | ✅ 已修复 |
| **🟢 P2 - 交互缺陷** | 定时任务保存后脏检查误触发确认弹窗 | [#1600](https://github.com/netease-youdao/LobsterAI/pull/1600) | ✅ 已修复 |
| **🟢 P2 - 提示词错误** | 定时任务错误显示"未配置 IM 通道"（实际已配置） | [#1588](https://github.com/netease-youdao/LobsterAI/pull/1588) | ✅ 已修复 |
| **🟢 P2 - 流式内容缺失** | Anthropic/Gemini SSE 行拆分导致 `JSON.parse` 失败 | [#1607](https://github.com/netease-youdao/LobsterAI/pull/1607) | ✅ 已修复 |

---

## 6. 功能请求与路线图信号

**从今日 PR 推断的潜在路线图方向：**

| 信号来源 | 功能方向 | 纳入可能性 |
|:---|:---|:---|
| [#1590](https://github.com/netease-youdao/LobsterAI/pull/1590) 消息队列 | **异步协作模式**：AI 处理期间用户可排队后续指令，向"真正的人机协作工作流"演进 | ⭐⭐⭐⭐⭐ 高（已合并） |
| [#1594](https://github.com/netease-youdao/LobsterAI/pull/1594) 全内容搜索 | **企业级知识检索**：跨 Agent、跨会话的全文搜索，暗示多 Agent 知识库整合需求 | ⭐⭐⭐⭐⭐ 高（已合并） |
| [#1606](https://github.com/netease-youdao/LobsterAI/pull/1606) 密钥环境变量化 | **安全合规强化**：统一所有 IM 通道的密钥管理，符合企业安全审计要求 | ⭐⭐⭐⭐☆ 中高（已合并） |
| [#1593](https://github.com/netease-youdao/LobsterAI/pull/1593) 配置兼容性 | **OpenClaw 版本适配**：网关与核心引擎的解耦与版本兼容策略 | ⭐⭐⭐⭐☆ 持续需求 |

**未出现的新功能请求**：无 Issues 活动，暂无用户提出的显性需求。

---

## 7. 用户反馈摘要

**今日无可用的用户反馈数据**（零 Issues、零 PR 评论）。

从 PR 描述中**间接推断**的用户痛点场景：

| 痛点场景 | 来源 PR | 影响用户 |
|:---|:---|:---|
| AI 回复时"卡死"无法继续输入，中断工作流 | [#1590](https://github.com/netease-youdao/LobsterAI/pull/1590) | 高频协作用户 |
| 搜索找不到历史消息，切换 Agent 后"记忆消失" | [#1594](https://github.com/netease-youdao/LobsterAI/pull/1594) | 多 Agent 管理用户 |
| 网关频繁崩溃/重启，服务不可用 | [#1593](https://github.com/netease-youdao/LobsterAI/pull/1593) | 所有自托管用户 |
| 停止的会话被 IM 消息意外唤醒，干扰工作 | [#1601](https://github.com/netease-youdao/LobsterAI/pull/1601) | IM 集成重度用户 |
| 流式输出内容突然截断、缺失 | [#1607](https://github.com/netease-youdao/LobsterAI/pull/1607) | Claude/Gemini 模型用户 |

---

## 8. 待处理积压

| 风险项 | 状态 | 建议行动 |
|:---|:---|:---|
| **45天陈旧 PR 集中关闭，无替代 review 流程** | ⚠️ 流程缺口 | 建议建立 `stale` PR 的自动提醒与分级 review 机制，避免批量积压 |
| **零 Issues 活动可能掩盖真实问题** | ⚠️ 信号盲区 | 建议检查 Issues 是否被正确引导至内部系统，或社区反馈渠道是否畅通 |
| **无版本发布计划可见性** | ⚠️ 透明度低 | 建议补充 Roadmap 或 Milestone，让贡献者了解发布节奏 |
| **PR #1585-#1607 均无社区互动验证** | ⚠️ 质量风险 | 批量合并的修复缺乏外部测试验证，建议补充 Beta 渠道或 Canary 发布 |

---

## 健康度评估

| 指标 | 评分 | 说明 |
|:---|:---|:---|
| 代码活跃度 | 🟡 中等 | 高吞吐量清理，但非正向迭代 |
| 社区健康度 | 🔴 偏低 | 零互动，内部驱动特征明显 |
| 稳定性修复 | 🟢 良好 | 覆盖崩溃、数据竞争、状态管理等核心问题 |
| 发布节奏 | 🔴 停滞 | 无近期版本，功能积压在主干 |
| 技术债务 | 🟡 缓解中 | 批量清理陈旧 PR 是积极信号 |

> **综合判断**: LobsterAI 处于**维护模式下的技术债务清理期**，核心系统稳定性得到加固，但社区参与度和产品迭代透明度有待提升。建议关注后续是否有新版本发布以验证这些修复的交付节奏。

---

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-05-25

## 1. 今日速览

Moltis 今日展现出**极高的维护效率与代码质量管控能力**：过去24小时内，8个 Issues 和 10个 PR 全部闭环处理，零待合并项积压。核心开发者 `penso` 主导了全部10个 PR 的合并，覆盖 Agent 架构重构、安全加固、UI/UX 修复三大主线。项目当前处于**密集迭代期**，无版本发布但主线代码快速演进，健康度评分：优秀。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 🔧 核心架构：Agent 成为能力边界（重大重构）

| PR | 说明 | 链接 |
|:---|:---|:---|
| #1049 | **Agent 架构重构**：将 Agent 定义为 MCP 服务器、沙箱策略、技能的统一能力边界，支持按用户/场景分配不同 Agent（如儿童 vs 家长场景） | [PR #1049](https://github.com/moltis-org/moltis/pull/1049) |
| #1066 | **Agent 运行时限制**：为每个 Agent 预设配置独立的 `timeout_secs` 和 `max_iterations`，覆盖直接对话和子 Agent 调用 | [PR #1066](https://github.com/moltis-org/moltis/pull/1066) |

**里程碑意义**：Moltis 从"工具集"模型转向"Agent 即策略单元"模型，为多租户、多场景部署奠定基础。

### 🛡️ 安全与稳定性加固

| PR | 修复内容 | 对应 Issue |
|:---|:---|:---|
| #1063 | MCP `stdio` 环境变量值改为 `Secret<String>` 存储，`mcp_list` 仅返回变量名，**阻断 LLM 侧信道泄露** | [#1054](https://github.com/moltis-org/moltis/issues/1054) |
| #1061 | 校验 OpenAI-compatible `baseUrl`，拦截含 `/chat/completions` 等路径的错误配置，失败时输出构造 URL 辅助排查 | [#1051](https://github.com/moltis-org/moltis/issues/1051) |
| #1065 | 沙箱镜像预构建日志降级为 `debug` 级别，失败时仅输出精简摘要，**消除启动日志风暴** | [#1056](https://github.com/moltis-org/moltis/issues/1056) |

### 🎨 UI/UX 修复

| PR | 修复内容 | 对应 Issue |
|:---|:---|:---|
| #1060 | 响应式加宽模型选择器，支持带版本号的长模型 ID 显示，添加完整名称 tooltip | [#1052](https://github.com/moltis-org/moltis/issues/1052) |
| #1062 | 约束聊天工具栏宽度，修复侧边栏可见时的水平滚动溢出（**回归问题二次修复**） | [#1055](https://github.com/moltis-org/moltis/issues/1055) |
| #1064 | 自动会话标题生成失败时透传错误（原返回 `null`），持久化会话模型元数据保障回退可用 | [#1053](https://github.com/moltis-org/moltis/issues/1053) |
| #1059 | `external_agents.enabled = false` 时隐藏外部 Agent 选择器，忽略陈旧绑定回退主路径 | [#1057](https://github.com/moltis-org/moltis/issues/1057) |
| #1058 | 引导流程推荐列表纳入用户已配置的 LLM，避免淹没在"全部提供商"折叠区 | — |

---

## 4. 社区热点

> 今日所有 Issues/PR 评论数均为 0-1，**无显性讨论热点**，但存在以下隐性信号：

| 项目 | 分析 | 链接 |
|:---|:---|:---|
| **#1049 Agent 架构重构** | 评论数为 `undefined`（可能为数据异常），但 PR 体量最大，涉及配置模板、运行时、文档全栈变更，**是社区最应关注的设计决策** | [PR #1049](https://github.com/moltis-org/moltis/pull/1049) |
| **#553 历史增强请求关闭** | 4月提出的" per-agent sleepback 和 timeout"今日随 #1066 实现后关闭，体现**长周期需求兑现** | [#553](https://github.com/moltis-org/moltis/issues/553) |

**社区诉求洞察**：用户需要**精细化 Agent 管控**（超时、迭代限制、隔离策略），与项目当前重构方向高度契合。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | 修复 PR | 链接 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | MCP 环境变量通过 `mcp_list` 泄露给 LLM | **已修复** | #1063 | [#1054](https://github.com/moltis-org/moltis/issues/1054) |
| 🟡 **中** | OpenAI-compatible URL 配置错误时无有效日志 | **已修复** | #1061 | [#1051](https://github.com/moltis-org/moltis/issues/1051) |
| 🟡 **中** | 自动会话标题生成静默失败 | **已修复** | #1064 | [#1053](https://github.com/moltis-org/moltis/issues/1053) |
| 🟢 **低** | 模型选择器显示不全长版本号 | **已修复** | #1060 | [#1052](https://github.com/moltis-org/moltis/issues/1052) |
| 🟢 **低** | 聊天工具栏导致水平滚动（**回归**） | **已修复** | #1062 | [#1055](https://github.com/moltis-org/moltis/issues/1055) |
| 🟢 **低** | 禁用外部 Agent 后选择器仍显示 | **已修复** | #1059 | [#1057](https://github.com/moltis-org/moltis/issues/1057) |
| 🟢 **低** | 沙箱预构建日志淹没控制台 | **已修复** | #1065 | [#1056](https://github.com/moltis-org/moltis/issues/1056) |

**回归风险**：#1055 为"再次出现"的水平滚动问题，需关注 #1062 的 Playwright 回归测试是否足够覆盖边缘布局场景。

---

## 6. 功能请求与路线图信号

| 来源 | 信号 | 纳入可能性 |
|:---|:---|:---|
| #553（已关闭） | per-agent timeout/sleepback 配置 | ✅ **已实现**（#1066） |
| #1049 架构设计 | Agent 作为 MCP/沙箱/技能的统一边界 | ✅ **已合并**，将成为核心范式 |
| #1066 扩展点 | 运行时限制覆盖子 Agent | 🔮 **下一迭代**：可能扩展至全局资源配额 |

**预测**：下一版本（若发布）核心叙事将是 **"Agent 2.0：场景化、可隔离、可限制"**。

---

## 7. 用户反馈摘要

### 痛点提炼（来自 Issue 描述）

| 场景 | 痛点 | 涉及 Issue |
|:---|:---|:---|
| **多模型部署** | 网关模型 ID 含版本号时选择器截断，无法辨识 | [#1052](https://github.com/moltis-org/moltis/issues/1052) |
| **配置即代码** | OpenAI-compatible 服务商 URL 拼接规则不透明，调试困难 | [#1051](https://github.com/moltis-org/moltis/issues/1051) |
| **安全合规** | 担心 MCP 环境变量（API keys、数据库连接串）被 LLM 获取 | [#1054](https://github.com/moltis-org/moltis/issues/1054) |
| **运维体验** | 容器构建日志刷屏，掩盖真正启动错误 | [#1056](https://github.com/moltis-org/moltis/issues/1056) |
| **功能开关** | `enabled = false` 未真正禁用功能，UI 与行为不一致 | [#1057](https://github.com/moltis-org/moltis/issues/1057) |

### 满意度信号
- 4月提出的 #553 在两个月后兑现，**需求响应周期约 50 天**
- 当日创建当日修复的 Issues（#1056, #1057, #1055）显示**维护响应极快**

---

## 8. 待处理积压

> 今日数据呈现**零积压状态**，所有活跃项均已闭环。但需关注以下**长期健康指标**：

| 观察项 | 说明 | 建议 |
|:---|:---|:---|
| **#1055 二次回归** | 水平滚动问题重复出现 | 审查 #1062 的 Playwright 测试是否覆盖响应式断点变化 |
| **#1049 架构债务** | 大规模重构后，Agent 配置兼容性需持续验证 | 建议发布前提供迁移指南（`agents.presets` 新格式） |
| **评论数异常** | 多个 PR 显示 `评论: undefined` | 核实数据采集完整性，避免遗漏社区评审讨论 |

---

*日报基于 GitHub 公开数据生成，PR 评论数为 `undefined` 的条目建议人工复核。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-05-25

> **项目地址**: [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)  
> **数据周期**: 2026-05-24 00:00 - 2026-05-24 23:59 UTC  
> **报告日期**: 2026-05-25

---

## 1. 今日速览

CoPaw 社区今日保持**高活跃度**，24小时内产生 **14 条 Issue 动态**（11 条新开/活跃，3 条关闭）和 **1 条待合并 PR**。值得关注的是，今日 Issue 中 **Bug 报告占比 43%（6/14）**，且全部集中在 v1.1.8.post1 版本，显示该版本存在一批待修复的稳定性问题。社区贡献者 `feng183043996` 单日提交 4 条高质量 Issue，成为今日最活跃反馈者，其提出的记忆系统架构改进建议可能指向项目长期演进方向。Console UI 前端与 MCP 协议集成是当前质量问题的两大集中区域。

---

## 2. 版本发布

**无新版本发布**

最新版本仍为 **v1.1.8.post1**（发布于 2026-05-22 前后），该版本今日暴露出 4 条直接关联的 Bug 报告，建议维护者评估是否需要紧急发布 v1.1.8.post2 修复补丁。

---

## 3. 项目进展

| PR | 状态 | 进展说明 |
|:---|:---|:---|
| [#4637 feat(chat): add customizable slash command shortcut menu](https://github.com/agentscope-ai/QwenPaw/pull/4637) | **OPEN** 待合并 | 由 `DICKQI` 贡献，解决 20+ 内置命令发现性差的痛点。允许用户通过齿轮图标自定义 `/` 快捷菜单中显示的命令，降低新用户学习成本。该 PR 直接回应了 Console 前端体验改进需求，合并后将提升交互效率。 |

**整体推进评估**: 今日无已合并 PR，功能迭代节奏偏保守。唯一活跃 PR 聚焦前端体验优化，属于"易用性打磨"范畴，未涉及核心架构变动。

---

## 4. 社区热点

### 🔥 讨论最活跃 Issue（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 |
|:---|:---|:---|:---|
| 1 | [#4051 [CLOSED] deepseek模型的think内容解析问题](https://github.com/agentscope-ai/QwenPaw/issues/4051) | 10 | **模型输出格式兼容性**：DeepSeek V4 Flash 的 `<thinking>` 标签内容未被正确解析为回复，导致"空回复"现象。已关闭但反映模型适配层存在边缘 case。 |
| 2 | [#4644 Console UI: tool calls often not displayed until page refresh](https://github.com/agentscope-ai/QwenPaw/issues/4644) | 6 | **前端实时性缺陷**：工具调用状态同步机制不可靠，`read_file` 外的大部分工具存在显示延迟，无错误日志增加排查难度。 |
| 3 | [#4650 Console UI: reasoning chain not displayed for GLM-5.1](https://github.com/agentscope-ai/QwenPaw/issues/4650) | 4 | **模型特定兼容性问题**：GLM-5.1 通过 OpenAI 兼容 API 返回的 `reasoning_content` 未被 Console 渲染，同渠道其他模型正常，指向 GLM-5.1 的流式响应格式差异。 |
| 4 | [#4616 Dream awakening task error](https://github.com/agentscope-ai/QwenPaw/issues/4616) | 4 | **未配置模块的错误泄漏**：用户未配置微信渠道，但"梦境唤醒"任务触发微信相关错误，模块耦合度过高。 |

**诉求分析**: 社区核心痛点集中在 **"模型适配碎片化"** 和 **"前端状态同步不可靠"** 两大主题。前者随新模型接入持续放大，后者影响实时交互信任感。

---

## 5. Bug 与稳定性

> **今日新增 Bug 6 条 | 严重等级：🔴 高 2 条 / 🟡 中 3 条 / 🟢 低 1 条**

| 等级 | Issue | 描述 | 影响范围 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#4649 Orphaned cron jobs not cleaned up](https://github.com/agentscope-ai/QwenPaw/issues/4649) | `jobs.json` 更新后旧定时任务残留，幽灵任务无限执行 | 所有使用定时任务的用户，可能导致资源泄漏和意外行为 | ❌ 无 |
| 🔴 **高** | [#4653 定时任务与用户消息共享session导致任务被中断](https://github.com/agentscope-ai/QwenPaw/issues/4653) | 并发场景下用户消息抢占 session，定时任务执行不完整 | 依赖定时任务自动化流程的用户 | ❌ 无 |
| 🟡 **中** | [#4644 Tool calls not displayed until refresh](https://github.com/agentscope-ai/QwenPaw/issues/4644) | 前端 WebSocket/SSE 状态推送不可靠，工具调用延迟显示 | Console UI 用户，影响操作反馈信任感 | ❌ 无 |
| 🟡 **中** | [#4650 GLM-5.1 reasoning chain 不显示](https://github.com/agentscope-ai/QwenPaw/issues/4650) | 特定模型流式响应解析逻辑遗漏 `reasoning_content` | GLM-5.1 用户，思维链透明度受损 | ❌ 无 |
| 🟡 **中** | [#4643 MCP OAuth 不支持 client_secret](https://github.com/agentscope-ai/QwenPaw/issues/4643) | 无法连接需要 confidential client 的 MCP 服务器 | 企业/安全敏感场景的 MCP 集成 | ❌ 无 |
| 🟢 **低** | [#4646 MCP schema sanitizer 损坏 boolean 关键字](https://github.com/agentscope-ai/QwenPaw/issues/4646) | JSON Schema 清理器过度转换，破坏有效 MCP 工具定义 | 特定结构 MCP 工具的可用性 | ❌ 无 |

**稳定性评估**: 🔴 **风险上升**。两条 🔴 高等级 Bug 均涉及 **APScheduler 定时任务生命周期管理**，属于核心调度机制缺陷，且均无修复 PR。建议优先处理 #4649 和 #4653，可能涉及 session 隔离架构调整。

---

## 6. 功能请求与路线图信号

| Issue | 类型 | 需求摘要 | 纳入下一版本可能性 |
|:---|:---|:---|:---|
| [#4652 增强记忆系统「总结-关联-提醒」机制](https://github.com/agentscope-ai/QwenPaw/issues/4652) | 架构改进 | 从"信息堆砌"升级为"知识管理"：定期总结压缩、状态标记、跨时间关联、场景智能提醒 | ⭐⭐⭐⭐⭐ **高**。与 #4639（已关闭的自动总结 RFC）形成需求闭环，`feng183043996` 持续推动该方向，可能是 v1.2 核心特性 |
| [#4651 操作前规范自动加载机制](https://github.com/agentscope-ai/QwenPaw/issues/4651) | 工作流优化 | 类似 Code Review Checklist，执行前自动加载 SKILL.md 规范，减少同类问题复发 | ⭐⭐⭐⭐☆ **中高**。与 #4652 协同，构成"记忆-规范"双轮驱动，实现成本可控 |
| [#4645 QwenPaw Pet 连接远程 daemon](https://github.com/agentscope-ai/QwenPaw/issues/4645) | 部署架构 | 桌面伴侣应用支持远程 daemon，实现服务端常驻+客户端轻量交互 | ⭐⭐⭐☆☆ **中**。架构变动较大，需评估安全模型（TLS/mTLS） |
| [#4647 显示 token speed/usage 信息](https://github.com/agentscope-ai/QwenPaw/issues/4647) | 可观测性 | 每条回复底部展示 token 消耗和生成速度，辅助成本监控 | ⭐⭐⭐⭐☆ **中高**。OpenAI/Claude 生态标配，实现简单，用户呼声明确 |
| [#3290 Add skill update functionality](https://github.com/agentscope-ai/QwenPaw/issues/3290) **[CLOSED]** | 技能管理 | 为过时内置/自定义技能提供更新入口 | ✅ **已实现关闭**，v1.1.8 已包含 |

**路线图信号**: 社区正从"功能堆叠"转向 **"系统智能度"** 建设——记忆系统的主动学习、规范的上下文感知加载、成本的透明化，均指向 Agent 的"自我进化"能力。建议维护者在 v1.2 路线图中明确 **Memory 2.0** 主题。

---

## 7. 用户反馈摘要

### 😤 核心痛点

| 痛点 | 来源 Issue | 典型引述/场景 |
|:---|:---|:---|
| **记忆系统"记了等于没记"** | #4652, #4639 | "踩了坑还会再踩"、"需要用户手动提醒'记了没'" |
| **前端"黑盒感"** | #4644, #4650 | 工具调用不显示、思维链不渲染，"没有任何错误日志" |
| **定时任务不可靠** | #4649, #4653 | 育儿提醒等自动化任务被用户消息打断、旧任务幽灵执行 |
| **模型适配成本高** | #4051, #4650 | 每接入新模型（DeepSeek/GLM）都需单独适配 thinking/reasoning 格式 |

### 😊 满意点

- **工具生态丰富**：#4637 提及 20+ 内置命令，功能覆盖面获认可
- **记忆基础设施完备**：`memory_search` 等工具已就绪（#4639），"输入环节薄弱"是主要短板

### 💡 使用场景洞察

- **家庭自动化**：#4653 的"育儿经验提醒"揭示用户将 CoPaw 用于生活场景定时任务
- **企业 MCP 集成**：#4643 的 OAuth confidential client 需求指向 B2B 安全合规场景
- **远程开发/运维**：#4645 的远程 daemon 需求反映开发者希望服务端常驻

---

## 8. 待处理积压

> 以下 Issue/PR 需维护者关注，避免社区贡献者流失

| 项目 | 创建时间 | 当前状态 | 风险说明 |
|:---|:---|:---|:---|
| [#4637 PR 待合并](https://github.com/agentscope-ai/QwenPaw/pull/4637) | 2026-05-22 | 已更新，无审查评论 | 前端体验改进 PR，合并门槛低，久拖影响贡献者积极性 |
| [#4616 Dream awakening task error](https://github.com/agentscope-ai/QwenPaw/issues/4616) | 2026-05-22 | 4 评论，无维护者响应 | 模块耦合设计问题，需架构决策 |
| [#4645 Pet 远程 daemon](https://github.com/agentscope-ai/QwenPaw/issues/4645) | 2026-05-23 | 1 评论，无维护者响应 | 架构级需求，需明确接受/拒绝/延期 |

---

## 附录：今日数据总览

| 指标 | 数值 |
|:---|:---|
| Issues 更新总数 | 14 |
| ├─ 新开/活跃 | 11 |
| └─ 已关闭 | 3 |
| PR 更新总数 | 1 |
| ├─ 待合并 | 1 |
| └─ 已合并/关闭 | 0 |
| 新版本发布 | 0 |
| 最活跃贡献者 | `feng183043996`（4 条 Issue）|
| 涉及版本 | v1.1.6, v1.1.8.post1 |

---

*本报告基于 GitHub 公开数据自动生成，如需调整分析维度请联系项目维护团队。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-05-25

## 1. 今日速览

ZeroClaw 项目在过去 24 小时展现出**极高社区活跃度**：Issues 与 PR 各更新 50 条，但**关闭/合并率极低**（仅 3/50，约 6%），表明社区贡献踊跃但维护带宽成为明显瓶颈。无新版本发布，开发重心集中在**通道架构统一化**（AllowlistAspect 迁移）、**运行时稳定性修复**及**文档补齐**三大方向。值得关注的是，高优先级 Bug（P1/S1）占比显著，涉及 MCP 工具链、Provider 兼容性及安全沙箱等核心路径，项目处于"高动能、高积压"状态。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的 PR（3 条）

| PR | 作者 | 状态 | 关键价值 |
|:---|:---|:---|:---|
| [#6712](https://github.com/zeroclaw-labs/zeroclaw/pull/6712) | abhinavmathur-atlan | **已合并** | OpenAI Provider 流清理：将 `expect_err` panic 转为可恢复错误，消除生产环境崩溃风险 |
| [#6852](https://github.com/zeroclaw-labs/zeroclaw/pull/6852) | kanmars | **已关闭** | Lark/Feishu 通道实现 `request_approval()`，补齐企业 IM 审批交互能力（功能完整但链路未合入） |

**整体推进评估**：今日合入量远低于提交量，24-PR 的 AllowlistAspect 迁移链（#6638 → #6799）仍在进行中，核心架构债务清理尚未完成。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---|:---|:---|
| 1 | **RFC: Work Lanes, Board Automation, and Label Cleanup** | 6 | 治理层面：维护者呼吁轻量化 PR 分流机制，减少人工路由负担；反映项目规模扩张后的协作摩擦 | [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) |
| 2 | **tool_filter_groups MCP 前缀检查失效 + deferred_loading 未集成** | 6 | 工具链可靠性：`tool_filter_groups` 对真实 MCP 工具无实际过滤效果，配置与运行时行为割裂 | [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) |
| 3 | **show_tool_calls 在 [channel] 配置中缺失** | 5 | 通道可观测性：v3 schema 降级，用户无法查看工具调用详情，调试困难 | [#6856](https://github.com/zeroclaw-labs/zeroclaw/issues/6856) |
| 4 | **Cron 任务输出未路由到配置通道** | 4 | 工作流完整性：定时任务结果仅出现在 Web Dashboard，Telegram 等通道收不到通知 | [#6647](https://github.com/zeroclaw-labs/zeroclaw/issues/6647) |
| 5 | **Ollama Provider 工具调用时崩溃** | 4 | 本地模型生态：Ollama 作为重要本地推理选项，工具调用路径存在阻塞性缺陷 | [#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) |

**诉求分析**：社区焦点从"功能有无"转向**"配置-运行时一致性"**和**"多通道体验一致性"**，表明项目进入成熟化阵痛期。

---

## 5. Bug 与稳定性

### 按严重程度排列

#### 🔴 S1 - 工作流阻塞 / P1 优先级

| Issue | 组件 | 描述 | Fix PR 状态 | 链接 |
|:---|:---|:---|:---|:---|
| **Cron 输出未路由到通道** | runtime/daemon, Telegram | 定时任务结果仅 Dashboard 可见，通道配置失效 | **无** | [#6647](https://github.com/zeroclaw-labs/zeroclaw/issues/6647) |
| **Gemini 400 错误 - 历史序列化违规** | provider/gemini, agent loop | assistant tool_call 作为首个非 system turn，违反 Gemini API 约束 | **进行中**（关联运行时修复） | [#6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302) |
| **tool_search 未默认自动批准 → 静默挂起 120s** | agent, MCP, webhook | deferred_loading 模式下工具搜索被审批门拦截，非交互场景无客户端响应 | **无** | [#6721](https://github.com/zeroclaw-labs/zeroclaw/issues/6721) |
| **MCP stdio 子进程泄漏** | runtime, tool/MCP | heartbeat 每 tick 泄漏一个孤儿进程，默认 30 分钟间隔 → 日产 ~48 僵尸进程 | **无** | [#5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903) |
| **Slack bot_token 强制配置化** | channel/Slack | 无法通过环境变量注入，安全实践与配置灵活性冲突 | **无**（#6237 修复未生效） | [#6844](https://github.com/zeroclaw-labs/zeroclaw/issues/6844) |
| **vision_provider 被静默忽略** | provider, multimodal | 入站图片被路由到 fallback 而非配置的 vision 专用 provider | **无** | [#6841](https://github.com/zeroclaw-labs/zeroclaw/issues/6841) |
| **zai-cn provider 1214 错误** | provider/zai-cn | 预emptive context trim 后 glm-5-turbo 消息序列无效 | **进行中** | [#5636](https://github.com/zeroclaw-labs/zeroclaw/issues/5636) |

#### 🟡 S2 - 行为降级 / P2 优先级

| Issue | 组件 | 描述 | Fix PR 状态 | 链接 |
|:---|:---|:---|:---|:---|
| **web_fetch allowed_private_hosts 对域名无效** | security, tool/http | 域名解析到私有 IP 后仍被拦截，安全策略与内部服务发现冲突 | **无** | [#5122](https://github.com/zeroclaw-labs/zeroclaw/issues/5122) |
| **MemoryConfig rerank 参数无消费者** | config, memory | 配置表面存在但实际代码未读取，文档与实现脱节 | **无** | [#6722](https://github.com/zeroclaw-labs/zeroclaw/issues/6722) |
| **OpenAI provider 硬编码 120s 超时** | provider/OpenAI | `timeout_secs` 配置被静默忽略，仅 OpenAiCompatibleProvider 生效 | **无** | [#6723](https://github.com/zeroclaw-labs/zeroclaw/issues/6723) |
| **bubblewrap /lib64 未绑定** | security/sandbox | Fedora/RHEL 动态链接二进制沙箱内崩溃 | **[#6902](https://github.com/zeroclaw-labs/zeroclaw/pull/6902)** 已提交 | [#5127](https://github.com/zeroclaw-labs/zeroclaw/issues/5127) |

---

## 6. 功能请求与路线图信号

### 高概率纳入下一版本（已有 PR 或明确接受）

| 功能 | 状态信号 | 链接 |
|:---|:---|:---|
| **通道 AllowlistAspect 统一化** | 24-PR 迁移链进行中，#6799 为链头，涉及 15+ 通道 | [#6793](https://github.com/zeroclaw-labs/zeroclaw/pull/6793) 等 |
| **Signal & WhatsApp 文档** | PR 已提交，补齐主流加密通讯接入指南 | [#6898](https://github.com/zeroclaw-labs/zeroclaw/pull/6898) |
| **功能支持矩阵文档** | PR 已提交，降低新用户选型成本 | [#6870](https://github.com/zeroclaw-labs/zeroclaw/pull/6870) |
| **Python Skills 指南更新** | PR 已提交，替换 #6057 过期片段 | [#6860](https://github.com/zeroclaw-labs/zeroclaw/pull/6860) |
| **精简默认通道 Bundle** | PR 已提交，将默认通道从全量收窄至核心集（ACP/webhook/email/Telegram），新增 `channels-full` 兼容包 | [#6904](https://github.com/zeroclaw-labs/zeroclaw/pull/6904) |

### 规划阶段/待资源投入

| 功能 | 社区需求强度 | 技术复杂度 | 链接 |
|:---|:---|:---|:---|
| **Mastodon/ActivityPub 通道** | ⭐⭐⭐ 联邦宇宙用户强烈需求 | 中（长轮询 + 线程模型） | [#6423](https://github.com/zeroclaw-labs/zeroclaw/issues/6423) |
| **Twilio SMS 通道** | ⭐⭐⭐ 覆盖非智能机用户 | 中高（webhook 入口 + REST 发送 + 网关路由） | [#6427](https://github.com/zeroclaw-labs/zeroclaw/issues/6427) |
| **Rocket.Chat / Zulip 通道** | ⭐⭐ 自托管团队需求 | 中（REST 轮询 MVP） | [#6435](https://github.com/zeroclaw-labs/zeroclaw/issues/6435), [#6437](https://github.com/zeroclaw-labs/zeroclaw/issues/6437) |
| **Anthropic Extended Thinking 原生支持** | ⭐⭐ 推理质量敏感场景 | 高（API 适配 + 成本模型） | [#5630](https://github.com/zeroclaw-labs/zeroclaw/issues/5630) |
| **Provider 级模型回退链** | ⭐⭐ 可靠性工程需求 | 高（配置 schema 重构） | [#4647](https://github.com/zeroclaw-labs/zeroclaw/issues/4647) |
| **Shell 命令 Pre/Post Hooks** | ⭐⭐ 企业集成/审计需求 | 中（配置扩展 + 生命周期管理） | [#3696](https://github.com/zeroclaw-labs/zeroclaw/issues/3696) |

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 反馈来源 | 核心不满 |
|:---|:---|:---|
| **"配置即代码"幻觉 | #6722, #6723, #6699 | 配置项存在但运行时忽略，文档声称支持实际未实现，调试成本极高 |
| **非交互部署的静默失败** | #6721, #6647 | Webhook/Cron 场景无客户端时，审批门或通道路由失败无反馈，只能超时后发现 |
| **安全策略与内部网络冲突** | #5122, #5127 | `allowed_private_hosts`、bubblewrap 等安全机制对标准企业 Linux 发行版不友好 |
| **多模态配置黑洞** | #6841 | `vision_provider` 配置后行为无变化，用户无法确认是否生效 |
| **Windows 开发体验落差** | #6867 | `setup.bat --minimal` 行为与文档"core-only"承诺不符 |

### 正向信号

- **Agent Skills 生态认可**：社区主动提交 PR 要求将 ZeroClaw 加入官方客户端列表（[#5262](https://github.com/zeroclaw-labs/zeroclaw/issues/5262)）
- **企业 IM 深度集成**：Lark/Feishu 审批交互补齐（[#6852](https://github.com/zeroclaw-labs/zeroclaw/pull/6852)），表明 B 端场景渗透

---

## 8. 待处理积压

### 需要维护者紧急关注的长期项

| Issue/PR | 创建时间 | 滞留原因 | 风险 | 链接 |
|:---|:---|:---|:---|:---|
| **153 commits 批量回滚恢复审计** | 2026-03-28 | 大规模 revert c3ff635 后，bugfix 和功能改进被搁置近 2 个月，社区担心代码流失 | 技术债务累积，重复修复 | [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) |
| **Ollama Provider 工具调用崩溃** | 2026-04-21 | 本地模型生态关键路径，S1 标记但无 assignee | 本地部署用户流失 | [#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) |
| **IPv6 + reqwest URL 重构** | 2026-04-07 | `needs-author-action` 标签，作者未响应 | 网络层现代化受阻 | [#5450](https://github.com/zeroclaw-labs/zeroclaw/pull/5450) |
| **回复意图分类器可禁用** | 2026-04-21 | `needs-author-action`，单机器人部署场景的性能浪费 | 资源优化诉求 | [#5979](https://github.com/zeroclaw-labs/zeroclaw/pull/5979) |
| **日志输出至 stdout 而非 stderr** | 2026-03-26 | CLI 管道化场景的基础可用性问题，社区有共识但无推进 | 脚本集成体验差 | [#4721](https://github.com/zeroclaw-labs/zeroclaw/issues/4721) |

---

## 健康度评估

| 维度 | 评分 | 说明 |
|:---|:---|:---|
| 社区活跃度 | ⭐⭐⭐⭐⭐ | 日 50 Issues + 50 PRs，贡献动能充沛 |
| 维护响应率 | ⭐⭐☆☆☆ | 关闭/合并率 6%，RFC #6808 直接反映路由瓶颈 |
| 核心稳定性 | ⭐⭐⭐☆☆ | S1 Bug 数量多且覆盖 MCP/Provider/通道关键路径 |
| 文档/体验 | ⭐⭐⭐⭐☆ | 文档 PR 密集，但"配置-运行时一致性"类问题突出 |
| 架构演进 | ⭐⭐⭐⭐☆ | AllowlistAspect 迁移等长期工程在推进中 |

**建议优先级**：1) 扩充维护者评审带宽（响应 #6808 RFC）；2) 建立 S1 Bug 快速通道，优先合入已有 Fix PR；3) 发布配置校验工具，消除"配置存在但无效"类用户体验黑洞。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*