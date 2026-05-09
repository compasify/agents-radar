# OpenClaw 生态日报 2026-05-09

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-09 00:21 UTC

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

# OpenClaw 项目动态日报 | 2026-05-09

## 1. 今日速览

OpenClaw 今日维持极高活跃度，24小时内 **500 条 Issues 更新**（288 活跃/新开，212 关闭）与 **500 条 PR 更新**（352 待合并，148 已合并/关闭），无新版本发布。社区聚焦三大主题：**ACP 运行时稳定性修复**（spawn-child 调度器、生命周期管理）、**多平台通道可靠性**（Discord 队列背压、Matrix/Telegram 交付问题），以及 **v2026.5.4-v2026.5.6 回归问题集中治理**。项目整体处于"高负荷修复期"——大量近期版本引入的回归正在被快速扑灭，但待合并 PR 积压较高（352:148 的合闭比），提示审查带宽可能成为瓶颈。

---

## 2. 版本发布

**无新版本发布**

- 最新稳定版本仍为 **v2026.5.6**（基于 Issue 时间戳推断）
- 值得注意的是，今日多个 PR 针对 **v2026.5.4-v2026.5.6 引入的回归**进行紧急修复，表明该版本序列存在较多稳定性问题，建议用户暂缓升级或关注相关补丁

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 说明 | 关联 Issue |
|:---|:---|:---|:---|
| [#78902](https://github.com/openclaw/openclaw/pull/78902) | vincentkoc | **修复 Windows 插件管理路径问题**：避免在 Windows 上使用冗余 `--prefix .` 导致 npm 管理异常 | #78514 |
| [#62910](https://github.com/openclaw/openclaw/pull/62910) | nandanadileep | **修复 Node.js v24 Windows 兼容性**：解决 `DEP0190` 弃用警告，修正 `.cmd` 文件 spawn 参数拼接问题 | #62881 |

### 关键推进中的 PR（高影响力，待合并）

| PR | 作者 | 规模 | 核心贡献 |
|:---|:---|:---|:---|
| [#78595](https://github.com/openclaw/openclaw/pull/78595) | steipete | **XL** | **运行时状态 SQLite 重构**：将分散的 JSON/JSONL/lock-file 存储迁移至类型化 SQLite，从根本上解决状态截断、修复竞争、pruning 混乱等长期架构债务 |
| [#79562](https://github.com/openclaw/openclaw/pull/79562) | neuroradgist | **XL** | **Discord 队列背压修复**：针对队列积压、媒体下载、预览写入、会话存储读取等全链路瓶颈 |
| [#79548](https://github.com/openclaw/openclaw/pull/79548) | efpiva | **L** | **ACP spawn-child 持久调度器**：解决父运行结束后子 ACP 回合零交付的关键架构缺陷 |
| [#79160](https://github.com/openclaw/openclaw/pull/79160) | kevinslin | **XL** | **Codex 插件迁移 UX 修复**：优化原生 Codex 插件选择交互，减少误迁移 |
| [#79569](https://github.com/openclaw/openclaw/pull/79569) | joshavant | **L** | **Doctor 工具 Codex 别名保护**：阻止 `openclaw doctor --fix` 错误重写 `openai-codex/*` 为 `openai/*` |

**整体评估**：今日项目核心进展在于 **ACP 运行时可靠性** 和 **数据层架构升级**（SQLite 重构），前者解决高频使用场景（子代理 spawn）的致命缺陷，后者为长期可维护性奠基。但 XL 级 PR 的审查与合并进度值得关注。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 👍 | 状态 | 核心诉求 |
|:---|:---|:---:|:---:|:---|:---|
| 1 | [#34810](https://github.com/openclaw/openclaw/issues/34810) 文件系统工具突然丢失 | 29 | 9 | ✅ CLOSED | **Agent 核心能力可靠性**：用户 PC/NAS 上的文件创建、命令执行能力在凌晨 4 点无故消失，严重影响自动化工作流信任 |
| 2 | [#77668](https://github.com/openclaw/openclaw/issues/77668) Discord Gateway 挂起 | 21 | 2 | ✅ CLOSED | **macOS 平台稳定性**：Carbon Client 生命周期管理缺陷导致 Gateway 永远等不到 READY |
| 3 | [#78407](https://github.com/openclaw/openclaw/issues/78407) Doctor 工具错误重写模型引用 | 19 | 3 | ✅ CLOSED | **迁移工具安全性**：自动修复工具破坏用户配置，锁定 ChatGPT-OAuth 用户 |
| 4 | [#12590](https://github.com/openclaw/openclaw/issues/12590) memoryFlush 不可靠 | 19 | 0 | ✅ CLOSED | **内存管理正确性**：去重逻辑缺陷导致每隔一次压缩周期才触发刷新 |
| 5 | [#73655](https://github.com/openclaw/openclaw/issues/73655) Gateway 泄漏三联症 | 17 | 1 | ✅ CLOSED | **高可用架构**：EADDRINUSE 重试循环、信号处理器累积、同步 I/O 三重泄漏叠加导致 WS 握手饥饿 |

### 热点分析

**#34810（29 评论，9 👍）** 是今日最具代表性的用户痛点：Agent 的"突然失能"比完全崩溃更危险——用户无法预测何时失去文件系统访问能力，且问题发生在凌晨自动化时段。高 👍 数表明大量用户遭遇类似"幽灵故障"。该 Issue 的快速关闭（创建于 3 月，昨日更新关闭）显示维护团队对核心能力回归的高度重视。

**#78407** 揭示了"自动修复工具成为破坏源"的悖论：`doctor --fix` 本应是安全网，却因模型别名重写成为配置破坏者。相关修复 PR [#79569](https://github.com/openclaw/openclaw/pull/79569) 已提交待审。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 优先级 | Issue | 类型 | 状态 | Fix PR | 影响范围 |
|:---|:---|:---|:---|:---|
| 🔴 **P0-回归** | [#78407](https://github.com/openclaw/openclaw/issues/78407) Doctor 重写 `openai-codex/*` → `openai/*` | 配置破坏 | ✅ 已关 | [#79569](https://github.com/openclaw/openclaw/pull/79569) | 所有 ChatGPT-OAuth + Codex 用户 |
| 🔴 **P0-回归** | [#78508](https://github.com/openclaw/openclaw/issues/78508) 缺失 `operator.read` 作用域 | 权限回归 | 🟡 OPEN | 待查 | trusted-proxy + Authelia 部署 |
| 🔴 **P0-回归** | [#78601](https://github.com/openclaw/openclaw/issues/78601) Gateway 存活看门狗循环重启 | 事件循环冻结 | ✅ 已关 | 已修复 | v2026.5.6 全平台 |
| 🟡 **P1-活跃** | [#22676](https://github.com/openclaw/openclaw/issues/22676) SIGUSR1 重启竞态导致孤儿进程 | 信号处理 | 🟡 OPEN | 待查 | 使用 `config.patch/apply` 热重载用户 |
| 🟡 **P1-活跃** | [#76315](https://github.com/openclaw/openclaw/issues/76315) Linux 子代理负载下 Gateway 不稳定 | 事件循环 stall | 🟡 OPEN | 待查 | Linux + 重子代理用户 |
| 🟡 **P1-回归** | [#77896](https://github.com/openclaw/openclaw/issues/77896) Matrix 通道缺失 `matrix-js-sdk` | 依赖缺失 | 🟡 OPEN | 待查 | v2026.5.4 npm 更新后 |
| 🟡 **P1-回归** | [#78572](https://github.com/openclaw/openclaw/issues/78572) Discord `message` 工具 "Unknown Channel" | 通道 API | ✅ 已关 | 已修复 | v2026.5.4 Docker 部署 |
| 🟡 **P1-活跃** | [#79455](https://github.com/openclaw/openclaw/issues/79455) Telegram DM topics 需 `direct_messages_topic_id` | API 变更适配 | 🟡 OPEN | 紧急需修 | Telegram DM 用户（昨日晚间突发） |
| 🟢 **P2-活跃** | [#76990](https://github.com/openclaw/openclaw/issues/76990) 助手回复丢失于活动转录本 | 状态一致性 | 🟡 OPEN | 待查 | 多轮对话可靠性 |
| 🟢 **P2-活跃** | [#79492](https://github.com/openclaw/openclaw/issues/79492) `claude-opus-4-7` 返回空响应 | 模型适配 | 🟡 OPEN | 待查 | macOS 26.2 + Node 26 |

### 关键警报

- **[#79455](https://github.com/openclaw/openclaw/issues/79455)**（5 评论，昨日创建）：Telegram 于 2026-05-08 晚间变更 DM topic 的 `message_thread_id` 行为，导致 OpenClaw 回复无法送达。这是**外部平台 API 变更引发的突发故障**，需紧急适配。
- **v2026.5.4-v2026.5.6 回归集群**：Doctor 工具、模型 allowlist、Gateway 看门狗、Discord message 工具等问题集中爆发，建议维护团队评估该版本序列的发布前测试覆盖缺口。

---

## 6. 功能请求与路线图信号

| Issue | 👍 | 类型 | 纳入可能性 | 信号来源 |
|:---|:---|:---|:---|:---|
| [#18160](https://github.com/openclaw/openclaw/issues/18160) Cron 直接执行模式（跳过 agentTurn）| 9 | 增强 | **高** | 相关 PR [#78441](https://github.com/openclaw/openclaw/pull/78441) 已添加 `toolsAllow`，子代理控制粒度提升中 |
| [#17925](https://github.com/openclaw/openclaw/issues/17925) ZAI/Google 原生 `web_search` 透传 | 5 | 增强 | **中** | 已有 Grok 实现先例（`runGrokSearch`），技术路径清晰 |
| [#8295](https://github.com/openclaw/openclaw/issues/8295) Telegram `allowBots` 支持 | 4 | 平台 parity | **高** | Discord/Slack 已有实现，需求明确 |
| [#20786](https://github.com/openclaw/openclaw/issues/20786) Telegram Business Bot 支持 | 3 | 平台扩展 | **中** | Telegram 生态演进方向 |
| [#6890](https://github.com/openclaw/openclaw/issues/6890) Ralph Loop 迭代控制 | 3 | 代理控制 | **中** | Kimi 已有实现，需配置层统一 |
| [#13583](https://github.com/openclaw/openclaw/issues/13583) 预响应强制钩子（硬门控）| 2 | 安全/合规 | **高** | 金融/量化场景刚需，与现有软提示架构冲突需重构 |
| [#14785](https://github.com/openclaw/openclaw/issues/14785) 工具 schema 令牌开销优化 (~3,500 tok) | 0 | 性能 | **高** | 相关 PR [#78664](https://github.com/openclaw/openclaw/pull/78664) 已提交 schema 缓存优化 |

**路线图判断**：**子代理权限控制**（`toolsAllow`）和 **工具层性能优化**（schema 缓存）已进入实现阶段，预计纳入近期版本。**硬门控策略引擎**（#13583）是高端企业市场的差异化功能，建议优先投入设计。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 Issue | 用户原声提炼 |
|:---|:---|:---|
| **"幽灵自动化"** | #34810 | "凌晨 4 点突然停止执行任何文件系统操作"——无预警、无错误、无恢复，比崩溃更难调试 |
| **"修复工具即破坏工具"** | #78407 | `doctor --fix` 自动重写配置，升级后反而被锁定在外 |
| **"子代理失控"** | #18160, #15032 | Cron 任务强制 LLM 解释简单命令，子代理继承全部工具无法限制 |
| **"平台二等公民"** | #8295, #78016, #13751 | Telegram 缺 `allowBots`、Matrix 语音消息无效、飞书需过度权限 |
| **"状态幻觉"** | #76990, #77374 | 助手回复"可见但不存在"于转录本，或"存在但消失"于 UI |

### 满意度信号

- **快速响应认可**：#77668（Discord 挂起）6 个重复 Issue 被高效合并处理，用户确认 raw-ws 测试隔离问题根因
- **架构升级期待**：#78595（SQLite 重构）虽无评论数据，但标签覆盖 20+ 通道/扩展，显示社区对底层治理的广泛支持

---

## 8. 待处理积压

### 需维护者关注的高价值长期 Issue

| Issue | 创建 | 最后更新 | 评论 | 状态 | 关注理由 |
|:---|:---|:---|:---|:---|:---|
| [#77700](https://github.com/openclaw/openclaw/issues/77700) Prepared Runtime Resolution Migration | 2026-05-05 | 2026-05-08 | 7 | 🟡 OPEN | **维护者追踪 Issue**：系统性消除热路径运行时重复发现，性能架构升级，影响 reply/tool/outbound/media/tts 全链路 |
| [#74334](https://github.com/openclaw/openclaw/issues/74334) Snippet 规范化不匹配导致静默重水合失败 | 2026-04-29 | 2026-05-08 | 5 | 🟡 OPEN | ** dreaming 核心管道缺陷**：4 月 23 日后所有提升候选者受影响，数据完整性风险 |
| [#72879](https://github.com/openclaw/openclaw/issues/72879) `thought_signature` 400 回归 | 2026-04-27 | 2026-05-08 | 6 | 🟡 OPEN | **Google Generative AI 适配反复**：声称在 2026.4.24 修复却在 2026.4.25 回归，提示测试覆盖不足 |
| [#11665](https://github.com/openclaw/openclaw/issues/11665) Webhook hook 会话复用 | 2026-02-08 | 2026-05-08 | 6 | 🟡 OPEN | **文档与实现不符**：`sessionKey` 声称支持多轮对话，实际始终生成新 `sessionId` |
| [#12678](https://github.com/openclaw/openclaw/issues/12678) 基于能力的工具权限（默认拒绝高风险）| 2026-02-09 | 2026-05-08 | 5 | 🟡 OPEN | **安全架构基础**：当前技能无权限模型，恶意/被攻破技能可任意执行 |

### PR 审查瓶颈预警

- **352 待合并 vs 148 已合并/关闭** 的比例（2.4:1）显著高于健康项目通常的 1:1 或更低
- **XL 级 PR 积压**：#78595（SQLite 重构）、#79562（Discord 背压）、#79160（Codex UX）同时处于待审状态，建议维护团队协调审查资源或拆分交付

---

*日报生成时间：2026-05-09 | 数据来源：OpenClaw GitHub 开放数据 | 分析师：AI 智能体领域开源项目分析师*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析
**分析日期：2026-05-09 | 数据周期：过去24小时**

---

## 1. 生态全景

个人 AI 助手开源生态正处于**"功能扩张向质量巩固"的转折期**：头部项目（OpenClaw、ZeroClaw、IronClaw）日均 PR/Issue 处理量达 50+，但回归缺陷集中爆发（v2026.5.4-v2026.5.6 序列成为 OpenClaw 稳定性黑洞）；**协议互操作性**（ACP、MCP）成为基础设施共识，NullClaw 原生 ACP 适配器、NanoBot API Server 流式 Tool 事件注入均指向生态联通诉求；**企业级部署需求**（K8s、多租户隔离、审计合规）从边缘进入主线，NanoClaw K8s 运行时、IronClaw Reborn 加密凭证存储、NullClaw 数据治理层构成明确信号。与此同时，社区对"越升级越不稳定"的容忍度急剧下降，状态持久化、优雅关闭、上下文管理等基础可靠性成为信任分水岭。

---

## 2. 各项目活跃度对比

| 项目 | Issues (活跃/关闭) | PR (待合并/已处理) | Release | 健康度评估 |
|:---|:---|:---|:---|:---|
| **OpenClaw** | 500 (288/212) | 500 (352/148) | 无 | 🔴 **高负荷修复期** — 合闭比 2.4:1 严重失衡，审查瓶颈明显；v2026.5.4-5.6 回归集群未收敛 |
| **Hermes Agent** | 50 (47/3) | 50 (38/12) | 无 | 🟡 **高动能高积压** — 关闭率仅 6%，P1 修复率 16.7%，创新请求淹没核心修复 |
| **ZeroClaw** | 20 (14/6) | 46 (33/13) | **v0.7.5** | 🟢 **功能冲刺期** — 日构建稳定，Matrix 顽疾根治，但 v0.8.0 breaking changes 需关注迁移成本 |
| **IronClaw** | — | 49 (26/23) | 无 | 🟡 **架构重构期** — Reborn 栈 13 PR 密集落地，但 E2E 持续失败 + 多租户泄露漏洞未合并 |
| **CoPaw** | 36 (—/—) | 36 (15/21) | **v1.1.6-beta.1** | 🟡 **稳定性收官期** — WebUI 性能危机已修复，但 MCP 断连、session 丢失等 P0 待收敛 |
| **NanoBot** | 10 (—/—) | 22 (8/14) | 无 | 🟢 **体验精细化期** — 安全修复当日闭环，WebUI 迭代活跃，渠道层修复堆积需关注 |
| **PicoClaw** | 20 (6/14) | 43 (26/17) | **v0.2.8-nightly** | 🟢 **密集迭代期** — 关闭率 70% 优秀，嵌入式/IOT 定位清晰，PR 平均待审 10-15 天 |
| **NanoClaw** | 2 (—/—) | 20 (16/4) | 无 | 🟡 **平台化转型期** — 核心 Bug 修复快，但 PR 积压率 80%，17 天+ 老 PR 零评论风险 |
| **LobsterAI** | 2 (—/—) | 29 (2/27) | 无 | 🟢 **发布冲刺期** — release 分支集中收尾，代码冻结前 UI 最后缺口待决策 |
| **Moltis** | 0 | 5 (3/2) | **20260508.01** | 🟢 **稳健推进期** — 零 Bug 报告，核心维护者主导，社区外部贡献仅 1 PR，需激活 |
| **NullClaw** | 1 (0/1) | 5 (1/4) | 无 | 🟢 **基础设施完善期** — ACP 适配器合入主线，CI/CD 闭环，数据治理层待评审 |
| **ZeptoClaw** | 0 | 1 (1/0) | 无 | ⚪ **低活跃维护** — 6 天单 PR 待合并，零社区互动，早期项目特征 |
| **TinyClaw** | — | — | — | ⚪ **无活动** |

---

## 3. OpenClaw 在生态中的定位

### 规模与影响力
OpenClaw 以 **500 Issues/500 PR 的日处理量** 稳居生态绝对头部，是第二名 Hermes Agent 的 10 倍、ZeroClaw 的 10 倍。其社区规模相当于 **"Linux Kernel 之于操作系统生态"** 的参照系地位——其他项目（NanoBot、CoPaw、Hermes Agent）的功能请求中均出现"对标 OpenClaw"的明确信号。

### 技术优势
| 维度 | OpenClaw | 同类对比 |
|:---|:---|:---|
| **通道覆盖** | 20+ 通道（Discord/Matrix/Telegram/Slack/飞书/WhatsApp 全矩阵） | ZeroClaw 覆盖相近但企业微信/钉钉深度不足；NanoBot 飞书优化领先但 Discord 背压问题突出 |
| **子代理架构** | ACP spawn-child 持久调度器（#79548）解决父运行结束后子回合零交付 | Hermes Agent `delegate_task` 硬编码偏向 Claude（#22013）；NanoClaw 容器运行时隔离更彻底 |
| **状态管理层** | SQLite 重构（#78595）根治 JSON/JSONL 竞争、截断、pruning 混乱 | PicoClaw 统一内核基线（#2655）方向相似但规模小；IronClaw Reborn 的 checkpoint-state 设计更前沿 |
| **工具生态** | Codex 插件迁移、Doctor 诊断工具、原生 web_search 透传 | LobsterAI CodeMirror 6 代码编辑体验更优；NanoBot 图像生成+迭代编辑已落地 |

### 技术路线差异
- **OpenClaw**：**"Unix 哲学"** — 模块化工具、多通道网关、配置即代码，强调可组合性与自托管
- **IronClaw**：**"云原生安全优先"** — Reborn 架构的 per-row salt 加密、tenant 隔离、fail-closed 设计，瞄准企业级多租户
- **ZeroClaw**：**"边缘计算友好"** — Llama.cpp 独立 Provider、Raspberry Pi 场景优化、按 Provider 计费
- **NanoClaw**：**"容器即服务"** — Docker 锁定→K8s 扩展、ncl CLI 运维工具链、graceful shutdown 生产加固

### 社区规模对比
| 指标 | OpenClaw | Hermes Agent | ZeroClaw | CoPaw |
|:---|:---|:---|:---|:---|
| 日活跃 Issue 评论数 | #34810 29 评论 | #7237 17 评论 | #5937 8 评论 | #2382 10 评论 |
| 最高 👍 Issue | #34810 (9 👍) | #5346 (15 👍) | #5937 (无数据) | #578 (7 评论) |
| 外部贡献活跃度 | 极高（vincentkoc、steipete 等跨项目知名贡献者） | 极高（LionGateOS 单日 5 项架构请求） | 高（NiuBlibing 推动 Provider 重构） | 中（企业场景驱动） |

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 紧迫程度 |
|:---|:---|:---|:---:|
| **协议互操作性（ACP/MCP）** | NullClaw (#896)、NanoBot (#3698)、ZeroClaw (#6532)、IronClaw (#3006) | ACP stdio 适配器、流式 Tool 事件注入、MCP 启动重试、agent 文件系统布局 V3 | 🔴 高 |
| **状态持久化与优雅关闭** | OpenClaw (#78595 SQLite 重构)、NanoClaw (#2358 SIGTERM 排空)、Hermes Agent (#22129 网关重启失忆)、CoPaw (#3919 session 丢失) | 避免"重启即失忆"、部署时不丢消息、跨会话上下文保持 | 🔴 高 |
| **子代理/多智能体控制** | OpenClaw (#18160 Cron 跳过 agentTurn、#12678 基于能力的权限)、NanoBot (#3701/#3702 重复调用防护)、Hermes Agent (#22135 Boardroom 共识协议) | 限制子代理工具继承、防止无限推理循环、多 Agent 发现与协作 | 🟡 中高 |
| **企业级部署与运维** | NanoClaw (#2354 K8s、#2350 ncl CLI)、IronClaw (#3414 secrets 加密存储)、ZeroClaw (#6523 环境变量重构)、Moltis (#566 外部智能体会话持久化) | 多运行时支持、配置中心化、加密凭证、审计追踪 | 🟡 中高 |
| **上下文与记忆管理** | OpenClaw (#12590 memoryFlush)、CoPaw (#4102 截图占用上下文、#4129 Rewind)、PicoClaw (#2515 外部记忆系统)、ZeptoClaw (#571 长期记忆触发优化) | 智能压缩、视觉输入过滤、上下文回滚、跨工具记忆共享 | 🟡 中 |
| **平台 API 变更应急** | OpenClaw (#79455 Telegram DM topics 突发变更)、Hermes Agent (#22022 Telegram Bot API 10 破坏)、ZeroClaw (#6153 Matrix 语音格式) | 外部平台 breaking change 的分钟级响应能力 | 🔴 高（突发）|
| **本地/边缘推理优化** | PicoClaw (#28 LM Studio 零配置)、ZeroClaw (#6417 Llama.cpp 独立 Provider、#6178 Ollama 参数调优)、CoPaw (#2725 GPU 调用失败) | 裸机/ARM64/vLLM 场景的一键接入与性能调优 | 🟡 中 |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户画像 | 技术架构关键差异 |
|:---|:---|:---|:---|
| **OpenClaw** | 多通道网关 + 插件化工具生态 | 技术极客、自托管爱好者、多平台自动化需求者 | Node.js 运行时，JSON/JSONL→SQLite 迁移中，强调"配置即代码" |
| **IronClaw** | 安全多租户 + 云原生智能体编排 | 企业 SaaS 提供商、合规敏感型组织 | Rust 全栈，Reborn 架构的 port-adapter 模式，加密 by design |
| **ZeroClaw** | 边缘计算 + 本地 LLM 优先 | 隐私优先用户、Raspberry Pi/ARM64 部署者、成本敏感者 | Rust + Tauri Desktop，Provider 插件化，按调用计费精细化 |
| **NanoBot** | 安全工具调用 + 精致 WebUI | 个人开发者、中小企业飞书/钉𝕥用户 | Python 为主，Dream 模块自进化，图像生成+Artifacts 闭环 |
| **CoPaw** | 中国本土渠道深度 + 定时任务 | 中国 C 端用户（微信/钉钉重度）、个人效率追求者 | Python，Qwen 模型生态绑定，Console/Web/渠道三端 |
| **PicoClaw** | 嵌入式/IoT + 轻量运行时 | 硬件开发者、Sipeed 生态用户、边缘 AI 场景 | Go 语言，MQTT 通道，I2C/SPI/UART 工具链，<10MB 内存目标 |
| **NanoClaw** | 容器化 Agent 即服务 | DevOps 工程师、平台团队、多租户 SaaS 构建者 | TypeScript，Docker/K8s 运行时，ncl CLI 运维入口 |
| **Hermes Agent** | 终端原生体验 + 本地优先 | 开发者、CLI 重度用户、终端控 | Python，TUI 交互，systemd 集成，WASM 沙箱 |
| **LobsterAI** | 企业协作 + 代码/任务管理 | 企业研发团队、有道生态用户 | 未明确运行时，release 驱动，CodeMirror 6/Cron/收藏功能集 |
| **Moltis** | 语音优先 + 多智能体会话 | 语音交互爱好者、跨工具工作流用户 | 未明确运行时，OpenAI Realtime 深度集成，Astro 文档现代化 |
| **NullClaw** | 协议兼容 + 数据治理 | 企业合规团队、多智能体生态整合者 | Zig 构建，ACP 原生支持，hackathon 驱动的数据治理层 |
| **ZeptoClaw** | 长期记忆行为优化 | 早期技术采纳者、实验性项目 | 未明确，Hermes Agent 设计模式追随者 |

---

## 6. 社区热度与成熟度

### 快速迭代阶段（日均 PR 20+，功能扩张为主）
| 项目 | 特征 | 风险 |
|:---|:---|:---|
| **OpenClaw** | 500 PR/日，v2026.5.4-5.6 回归集群紧急扑灭 | 审查带宽瓶颈，XL PR 积压，稳定性债务累积 |
| **Hermes Agent** | 50 PR/日，4 项架构级特性单日涌入 | 关闭率 6%，P1 修复率 16.7%，创新淹没修复 |
| **IronClaw** | 49 PR/日，Reborn 13 PR 密集落地 | E2E 持续失败，多租户泄露未合并，架构验证不足 |
| **ZeroClaw** | 46 PR/日，v0.7.5 发布 + v0.8.0 启动 | matrix-sdk 编译回归，WebSocket 审批绕过安全缺口 |

### 质量巩固阶段（日均 PR 10-30，修复+体验优化为主）
| 项目 | 特征 | 信号 |
|:---|:---|:---|
| **NanoBot** | 22 PR/日，安全修复当日闭环 | 工具调用循环防护、WebUI 设置重构，向"行为可控"演进 |
| **PicoClaw** | 43 PR/日，关闭率 70% | 运行时内核修复 + IoT 扩展，嵌入式定位清晰 |
| **CoPaw** | 36 PR/日，v1.1.6-beta.1 预发布 | WebUI 性能危机已修复，session 管理、MCP 稳定性收官 |
| **LobsterAI** | 29 PR/日，27 条已合并 | release/2026.05.08 冲刺，UI 最后缺口待决策 |

### 基础设施完善阶段（日均 PR <10，稳健推进）
| 项目 | 特征 | 挑战 |
|:---|:---|:---|
| **NanoClaw** | 20 PR/日，80% 待合并 | 平台化转型坚决，但老 PR 零评论，贡献者流失风险 |
| **Moltis** | 5 PR/日，零 Bug 报告 | 核心维护者主导，社区激活不足，32 天 PR #566 待解 |
| **NullClaw** | 5 PR/日，ACP 适配器合入 | 数据治理层待评审，Zig 构建依赖小众，文档覆盖待扩展 |

### 低活跃/早期阶段
| 项目 | 状态 |
|:---|:---|
| **ZeptoClaw** | 6 天单 PR，零社区互动，功能可用→行为可靠阶段 |
| **TinyClaw** | 过去 24 小时无活动 |

---

## 7. 值得关注的趋势信号

### 信号一："修复工具即破坏工具"悖论 —— 自动化信任危机
| 来源 | OpenClaw #78407 `doctor --fix` 重写模型别名、CoPaw 更新破坏 venv、Hermes Agent `debug share` 自动上传隐私日志 |
|:---|:---|
| **趋势** | 用户不再无条件信任"官方修复工具"，**可逆性、预览确认、配置版本控制**成为刚需 |
| **开发者行动** | 任何自动化修改前强制 `--dry-run`；配置变更纳入 git 追踪；提供一键回滚 |

### 信号二：外部平台 API 变更的"分钟级响应"压力
| 来源 | OpenClaw #79455（Telegram 晚间突发变更）、Hermes Agent #22022（Telegram Bot API 10）、ZeroClaw #6530（matrix-sdk v0.16.0 编译失败） |
|:---|:---|
| **趋势** | 平台依赖型项目面临 **"黑天鹅"式突发故障**，传统月度发布节奏失效 |
| **开发者行动** | 建立平台 API 变更监控（webhook diff）；核心通道抽象层隔离平台细节；nightly 构建 + 金丝雀部署 |

### 信号三：从"功能有无"到"行为可控"的产品范式转移
| 来源 | NanoBot Dream 模块梯度控制（#3591）、ZeroClaw 按 Provider 计费（#6357）、OpenClaw `toolsAllow` 子代理权限（#18160）、CoPaw Rewind 上下文回滚（#4129） |
|:---|:---|
| **趋势** | 用户拒绝"黑盒智能体"，要求**每一步行为的可预测、可限制、可回溯** |
| **开发者行动** | 配置粒度从二元开关转向梯度滑块；内置"撤销/重做"机制；工具调用链可视化审计 |

### 信号四：边缘计算与本地推理的"去云端化"加速
| 来源 | PicoClaw #28 LM Studio 零配置、ZeroClaw #6417 Llama.cpp 独立 Provider、CoPaw #2725 GPU 调用失败、NanoClaw #2354 K8s 运行时 |
|:---|:---|
| **趋势** | 隐私合规 + 成本敏感 + 离线场景 三重驱动，**本地/混合部署从"玩具"变为"生产选项"** |
| **开发者行动** | Provider 架构必须支持本地 endpoint 优先；模型量化/上下文长度可配置；边缘设备资源感知调度 |

### 信号五：AI 智能体的"状态管理"成为核心竞争力
| 来源 | OpenClaw SQLite 重构、IronClaw Reborn |
|:---|:---|
| **趋势** | **数据持久化、状态一致性、上下文保持**成为项目能否获得长期信任的关键 |
| **开发者行动** | 数据库选型（SQLite/Postgres）、ACID 事务保障、Schema 演进策略、优雅关闭机制 |

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-05-09

---

## 1. 今日速览

NanoBot 今日呈现**高活跃度开发态势**：24小时内22个PR更新（14条已合并/关闭）、10个Issue更新，代码流动显著。核心进展集中在**工具调用安全加固**（重复调用防护与循环中断策略）、**飞书渠道稳定性修复**（topic消息路由修正），以及**WebUI体验升级**（设置重构、图像生成、BYOK配置）。社区对Dream模块可控性、会话上下文持久化、以及多平台渠道可靠性表现出强烈关注，反映出项目从功能扩展期向**稳定性与体验精细化**过渡的信号。

---

## 2. 版本发布

**无新版本发布**

> 今日无Release，但PR #3703（WebUI设置重构）、PR #3695（图像生成工具）等具备版本级功能量，预计将进入下一版本。

---

## 3. 项目进展

### 🔒 工具调用安全：双重防护机制落地

| PR | 状态 | 核心贡献 | 链接 |
|:---|:---|:---|:---|
| **#3701** | ✅ 已合并 | 单轮重复本地工具调用防护（`read_file`/`list_dir`/`glob`/`grep`），防止无限推理循环 | [HKUDS/nanobot#3701](https://github.com/HKUDS/nanobot/pull/3701) |
| **#3702** | ✅ 已合并 | 可配置的重复工具调用循环升级策略，确定性中断+日志+测试覆盖 | [HKUDS/nanobot#3702](https://github.com/HKUDS/nanobot/pull/3702) |

> 配套关闭 Issue #3699、#3700。这是Agent安全的关键里程碑，由社区成员 `andrew-ellis-engineering` 主导完成。

### 📱 飞书渠道：Topic消息路由修复

| PR | 状态 | 核心贡献 | 链接 |
|:---|:---|:---|:---|
| **#3704** | ✅ 已合并 | 修复飞书群组Topic中多文件消息"一半发Topic、一半发群"的分裂问题 | [HKUDS/nanobot#3704](https://github.com/HKUDS/nanobot/pull/3704) |

> 直接关闭 Issue #3694，根因在于消息发送循环中 `thread_id` 未持续传递。

### 🎨 WebUI重大升级

| PR | 状态 | 核心贡献 | 链接 |
|:---|:---|:---|:---|
| **#3703** | ✅ 已合并 | 设置页重构：独立侧边栏、BYOK提供商管理、API密钥掩码、按提供商测试连接 | [HKUDS/nanobot#3703](https://github.com/HKUDS/nanobot/pull/3703) |
| **#3695** | ✅ 已合并 | 图像生成工具+WebUI模式：`generate_image`工具、Provider抽象、持久化Artifacts、迭代编辑技能 | [HKUDS/nanobot#3695](https://github.com/HKUDS/nanobot/pull/3695) |

### 🛠️ 其他关键修复

| PR | 状态 | 说明 | 链接 |
|:---|:---|:---|:---|
| #3697 | ✅ 已合并 | Windows emoji输入代理码点崩溃修复（`prompt_toolkit` → `json.dumps` 传播链） | [HKUDS/nanobot#3697](https://github.com/HKUDS/nanobot/pull/3697) |
| #3687 | ✅ 已合并 | 记忆巩固修复：解决replay窗口隐藏历史导致的合并丢失问题 | [HKUDS/nanobot#3687](https://github.com/HKUDS/nanobot/pull/3687) |
| #3664 | ✅ 已合并 | Matrix/微信渠道静默异常处理补日志，消除诊断黑洞 | [HKUDS/nanobot#3664](https://github.com/HKUDS/nanobot/pull/3664) |
| #3691/#3690 | ✅ 已合并 | 引导向导允许空字符串/假值输入，修复字段清空失败问题 | [HKUDS/nanobot#3691](https://github.com/HKUDS/nanobot/pull/3691) |
| #3587 | ✅ 已合并 | `reasoningEffort: null` 显式禁用修复，区分"省略"与"显式关闭"语义 | [HKUDS/nanobot#3587](https://github.com/HKUDS/nanobot/pull/3587) |

---

## 4. 社区热点

### 最活跃讨论：Bot品牌自定义（#3650）

| 指标 | 数据 |
|:---|:---|
| 标签 | `enhancement`, `good first issue`, `feature request` |
| 评论 | 3条 |
| 状态 | 🔵 Open，2026-05-06创建，昨日更新 |

**核心诉求**：用户希望在Agent模式下自定义Bot显示名称和图标（替换默认"nanobot is thinking..."和猫图标），通过`config.json`配置`botName`等字段。

**社区信号**：标记为`good first issue`，门槛低、需求明确，适合新贡献者切入。反映NanoBot从"工具属性"向"产品品牌化"演进的需求。

🔗 [HKUDS/nanobot#3650](https://github.com/HKUDS/nanobot/issues/3650)

### 次热点：Dream模块可控性（#3652 → PR #3591）

| Issue | 状态 | 诉求 |
|:---|:---|:---|
| #3652 | ✅ 已关闭 | 完全禁用Dream功能 |
| PR #3591 | 🟡 Open | 添加更新范围控制：禁用Dream或限制为仅记忆/上下文更新，避免技能漂移 |

**关联分析**：用户`skyline75489`提出禁用需求后，`Jefsky`的PR提供了更精细的梯度控制（非简单开关），产品决策倾向于**可配置粒度**而非二元开关。

🔗 [HKUDS/nanobot#3652](https://github.com/HKUDS/nanobot/issues/3652) | [HKUDS/nanobot#3591](https://github.com/HKUDS/nanobot/pull/3591)

---

## 5. Bug 与稳定性

| 优先级 | 问题 | 状态 | Fix PR | 影响面 | 链接 |
|:---|:---|:---|:---|:---|:---|
| 🔴 **高** | 重复本地工具调用导致无限推理循环 | ✅ 已修复 | #3701, #3702 | Agent核心稳定性，可导致CPU/Token耗尽 | [Issue #3699](https://github.com/HKUDS/nanobot/issues/3699) |
| 🔴 **高** | 飞书Topic多文件消息路由分裂（发错位置） | ✅ 已修复 | #3704 | 企业用户协作场景，文件丢失感知 | [Issue #3694](https://github.com/HKUDS/nanobot/issues/3694) |
| 🟡 **中** | Windows emoji输入崩溃（代理码点） | ✅ 已修复 | #3697 | Windows CLI用户，输入即崩溃 | [PR #3697](https://github.com/HKUDS/nanobot/pull/3697) |
| 🟡 **中** | 记忆巩固忽略replay窗口外历史 | ✅ 已修复 | #3687 | 长会话上下文丢失 | [PR #3687](https://github.com/HKUDS/nanobot/pull/3687) |
| 🟡 **中** | 微信渠道静默消息丢失（3种原因） | 🟡 **待合并** | #3684 | 微信生态核心渠道可靠性 | [PR #3684](https://github.com/HKUDS/nanobot/pull/3684) |
| 🟡 **中** | WebSocket媒体字段丢失 | 🟡 **待合并** | #3673 | WebSocket渠道图片消息 | [PR #3673](https://github.com/HKUDS/nanobot/pull/3673) |
| 🟢 **低** | 转录提供商配置不透明（Groq） | 🔵 Open | 无 | 配置体验，非崩溃 | [Issue #3637](https://github.com/HKUDS/nanobot/issues/3637) |

> **风险预警**：PR #3684（微信渠道修复）涉及3个独立根因的静默消息丢失，是当前**最大未合并稳定性修复**，建议优先审阅。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 成熟度评估 | 纳入可能性 |
|:---|:---|:---|:---|
| **Bot品牌自定义** | #3650 | 需求清晰，标记good first issue | ⭐⭐⭐⭐⭐ 高，社区友好 |
| **Dream更新范围控制** | PR #3591 | 代码就绪，Open状态 | ⭐⭐⭐⭐⭐ 高，回应明确痛点 |
| **模型预设快速切换** | PR #3696（#3358重提） | 第二次提交，架构更成熟 | ⭐⭐⭐⭐☆ 中高，前次关闭原因待确认 |
| **API Server流式Tool事件注入** | #3698 | 有具体实现方案（15行改动），参考Hermes模式 | ⭐⭐⭐⭐☆ 中高，生态互操作需求 |
| **飞书Topic隔离开关** | #3692 | 与#3704修复方向互补，用户要可控性 | ⭐⭐⭐⭐☆ 中高，配置灵活性趋势 |
| **会话中断上下文保持** | #3689 | 产品行为问题，涉及架构决策 | ⭐⭐⭐☆☆ 中，需设计讨论 |
| **心跳手动触发** | PR #3590 | 代码就绪，与#3591同作者 | ⭐⭐⭐⭐☆ 中高，运维调试需求 |
| **图像生成** | ✅ #3695已合并 | — | **已落地** |

**路线图信号**：配置精细化（模型预设、Dream控制、Topic开关）与**可观测性增强**（Tool事件流式输出、心跳手动触发）形成明显主题，项目正从"功能有无"转向"行为可控"。

---

## 7. 用户反馈摘要

### 😤 核心痛点

| 反馈源 | 痛点 | 场景 |
|:---|:---|:---|
| #3689 `lyh161` | **中断即失忆**：打断循环后Bot"假装知道测试是什么" | 长任务执行中需人工干预，上下文断裂 |
| #3692 `sonicrang` | **自动化过度**：多文件被强制拆分为多个Topic | 批量文件处理工作流被破坏 |
| #3637 `sandr1x` | **配置黑盒**：Groq转录配置错误无明确反馈 | 语音功能调试成本高 |
| #1412 `jsapede` | **跨Bot互操作受阻**：HomeAssistant通知Bot无法触发NanoBot | 智能家居自动化链路断裂 |

### 😊 积极信号

- 工具调用循环防护被快速响应（Issue #3699 → PR #3701 同日创建合并），体现**安全类问题优先级高**
- WebUI设置重构（#3703）回应了BYOK（Bring Your Own Key）企业部署场景

### 🔍 使用模式洞察

> 企业用户（飞书）与个人开发者（HomeAssistant集成、API Server）需求分化明显，渠道层稳定性与开放接口同等重要。

---

## 8. 待处理积压

| 项目 | 创建时间 | 最后更新 | 风险 | 行动建议 |
|:---|:---|:---|:---|:---|
| **#1412** 跨Bot处理支持 | 2026-03-02 | 昨日 | 🔴 **2个月无实质进展**，👍1显示真实需求 | 维护者确认设计立场：是否支持Bot-to-Bot交互 |
| **#3514** WhatsApp @mentions修复 | 2026-04-28 | 昨日 | 🟡 设备后缀处理逻辑复杂，影响群聊@功能 | 需要JID规范化领域审阅 |
| **#3673** WebSocket媒体传递 | 2026-05-07 | 昨日 | 🟡 功能完整但待合并，阻塞WebSocket图片消息 | 快速审阅，影响面明确 |
| **#3684** 微信渠道静默丢失修复 | 2026-05-07 | 昨日 | 🟡 **3个独立Bug打包**，审阅负担重但价值高 | 建议拆分或优先合并，微信渠道稳定性关键 |
| **#3693** LLM并发门控集中化 | 2026-05-08 | 昨日 | 🟡 标记`invalid`但问题真实（Ollama/vLLM并发崩溃） | 维护者澄清标记原因，或指导重构方向 |

---

> **健康度评分**：⭐⭐⭐⭐☆（4/5）
> - ✅ 安全修复响应极快（同日Issue-PR-合并）
> - ✅ WebUI功能迭代活跃
> - ⚠️ 渠道层（微信/WebSocket）关键修复堆积待合并
> - ⚠️ 长期Issue #1412 需维护者明确立场

---

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-05-09

---

## 1. 今日速览

Hermes Agent 今日呈现**高活跃度**，24小时内产生 **50 条 Issues 更新**（47 条新开/活跃，仅 3 条关闭）和 **50 条 PR 更新**（38 条待合并，12 条已合并/关闭），无新版本发布。社区贡献势头强劲，但**关闭率偏低**（Issues 关闭率 6%，PR 合并率 24%），表明大量新内容涌入的同时，维护者审阅吞吐存在瓶颈。安全与稳定性问题受到重视，两项安全相关 PR 已快速提交响应。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 今日已关闭 PR（12 条中的代表性条目）

| PR | 作者 | 说明 | 链接 |
|:---|:---|:---|:---|
| #22140 | teknium1 | **测试加固**： salvaged 自 #22026，为 TUI `/quit` 命令添加单元测试，确保通过 `session.die()` 本地退出而不命中 slash worker | [PR #22140](https://github.com/NousResearch/hermes-agent/pull/22140) |
| #22026 | adybag14-cyber | ~~TUI `/quit` 行为修复~~（被 #22140 取代关闭） | [PR #22026](https://github.com/NousResearch/hermes-agent/pull/22026) |
| #22028 | adybag14-cyber | **Termux 环境加固**：使用 uv bootstrap 和环境守卫强化移动端更新路径，解决 MarkupSafe 等依赖安装不稳定问题 | [PR #22028](https://github.com/NousResearch/hermes-agent/pull/22028) |

**整体推进评估**：今日合并内容以测试覆盖和边缘环境（Termux）兼容性为主，**核心功能迭代尚未大规模落地**。38 条待合并 PR 中有多项高价值特性（Nostr 网关、Discord 富交互、Gemini 视觉回退链）等待审阅。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 👍 | 核心诉求 | 链接 |
|:---|:---|:---:|:---:|:---|:---|
| 1 | **#7237** Response truncated due to output length limit | **17** | 4 | **长文本生成可靠性**：CLI/网关场景下输出被截断严重影响用户体验，需更智能的分块或流式续传机制 | [Issue #7237](https://github.com/NousResearch/hermes-agent/issues/7237) |
| 2 | **#5346** Shift+Enter newline support in CLI | **5** | **15** | **UX 符合直觉**：Alt+Enter/Ctrl+J 不符合主流终端习惯，社区强烈呼吁对齐行业标准 | [Issue #5346](https://github.com/NousResearch/hermes-agent/issues/5346) |
| 3 | **#5151** Streaming retry status messages accumulate | **4** | 8 | **状态消息污染**：重试机制的成功恢复未清理临时状态提示，影响对话整洁度 | [Issue #5151](https://github.com/NousResearch/hermes-agent/issues/5151) |

### 背后诉求分析

- **#7237 的 17 条评论** 反映该截断问题具有**高频复现性**，且跨越 CLI、Telegram、Discord、Slack 多平台，属于基础设施级缺陷
- **#5346 的 15 个 👍** 是今日 Issues 中最高，表明**小的交互细节对开发者体验影响巨大**，且该功能已实现关闭，说明社区反馈能被快速响应
- **#5151** 揭示流式架构的边缘情况处理不足，重试机制"能工作"但"不优雅"

---

## 5. Bug 与稳定性

### 按严重程度排列

| 优先级 | Issue | 描述 | 状态 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|:---|
| **P1** | **#21937** | `_priority_key` 解包错误导致并发工具调用间歇性崩溃 (`ValueError: not enough values to unpack`) | 🔴 开放 | ❌ 无 | [Issue #21937](https://github.com/NousResearch/hermes-agent/issues/21937) |
| **P1** | **#12146** | 配置 `model.provider=custom` 时仍回退到 OpenRouter，本地 Ollama/vLLM 部署失效 | 🔴 开放 | ❌ 无 | [Issue #12146](https://github.com/NousResearch/hermes-agent/issues/12146) |
| **P1** | **#22022** | Telegram Bot API 10 破坏私聊话题回复，降级为"全部消息"广播 | 🔴 开放 | ❌ 无 | [Issue #22022](https://github.com/NousResearch/hermes-agent/issues/22022) |
| **P1** | **#21912** | systemd `KillMode=mixed` SIGKILL 杀死重启 bash 子进程，导致无限重启循环 | 🔴 开放 | ❌ 无 | [Issue #21912](https://github.com/NousResearch/hermes-agent/issues/21912) |
| **P1** | **#22032** | NFS 上 SQLite WAL 模式 `locking protocol` 错误，静默破坏 `/resume`、`/history` 等核心功能 | 🔴 开放 | ❌ 无 | [Issue #22032](https://github.com/NousResearch/hermes-agent/issues/22032) |
| **P1** | **#22016** | `hermes debug share` **安全漏洞**：自动上传含隐私数据的日志到公共粘贴服务 | 🔴 开放 | ✅ **#22139** | [Issue #22016](https://github.com/NousResearch/hermes-agent/issues/22016) |
| P2 | #15524 | `patch` 工具条件必填参数被系统省略（Kimi 等严格调用器） | ✅ 已关闭 | ✅ **#22149** | [Issue #15524](https://github.com/NousResearch/hermes-agent/issues/15524) |
| P2 | #22013 | `delegate_task` 硬编码偏向 Claude 平台，无 Claude 环境用户报错 | 🔴 开放 | ❌ 无 | [Issue #22013](https://github.com/NousResearch/hermes-agent/issues/22013) |
| P2 | #21867 | `cronjob` 工具 `action='run'` 不触发即时执行，调度时间前进但 `last_run_at` 为空 | 🔴 开放 | ❌ 无 | [Issue #21867](https://github.com/NousResearch/hermes-agent/issues/21867) |

### 稳定性评估

- **6 项 P1 问题中仅 1 项有对应 PR**，基础设施风险累积
- **#22149** 同时修复 #15524 的 patch 工具参数问题，并引入**每轮文件变更验证器**，防止模型虚报编辑成功，属于"一层补丁解决两类问题"的优质工程
- **#22139** 快速响应安全漏洞，添加用户确认流程，体现安全事件响应能力

---

## 6. 功能请求与路线图信号

### 今日新提交的高潜力特性

| Issue/PR | 类型 | 纳入可能性评估 | 链接 |
|:---|:---|:---|:---|
| **#22135** "Boardroom" 多智能体共识协议 | 架构级特性 | ⭐⭐⭐ 中长期 | [Issue #22135](https://github.com/NousResearch/hermes-agent/issues/22135) |
| **#22134** MCTS 可视化分支思维树（"Time-Travel"） | 交互创新 | ⭐⭐⭐ 中长期 | [Issue #22134](https://github.com/NousResearch/hermes-agent/issues/22134) |
| **#22133** VRAM 感知动态任务路由 | 本地部署优化 | ⭐⭐⭐⭐ 高（契合本地 GPU 用户痛点） | [Issue #22133](https://github.com/NousResearch/hermes-agent/issues/22133) |
| **#22136** 空闲状态后台处理（"Daydreaming"） | 资源利用 | ⭐⭐ 实验性 | [Issue #22136](https://github.com/NousResearch/hermes-agent/issues/22136) |
| **#22137** 一次性安全上下文（"Burner Contexts"） | 隐私安全 | ⭐⭐⭐ 合规驱动 | [Issue #22137](https://github.com/NousResearch/hermes-agent/issues/22137) |
| **#16769** Nostr NIP-17 私密消息网关 | 平台扩展 | ⭐⭐⭐⭐ PR 已就绪，待合并 | [PR #16769](https://github.com/NousResearch/hermes-agent/pull/16769) |
| **#21579** Gemini CLI OAuth 视觉回退链 | 提供商生态 | ⭐⭐⭐⭐ PR 已就绪，填补免费多模态缺口 | [PR #21579](https://github.com/NousResearch/hermes-agent/pull/21579) |
| **#2041** Discord 原生富交互原型 | UX 升级 | ⭐⭐⭐ RFC 阶段，需维护者反馈 | [PR #2041](https://github.com/NousResearch/hermes-agent/pull/2041) |

### 路线图信号

- **LionGateOS** 单日提交 4 项架构级特性请求（#22133-#22137），显示**高级用户对智能体执行范式的深层不满**（线性、单智能体、无资源感知）
- **多智能体/共识机制** (#22135) 与 **MCTS 可视化** (#22134) 形成组合信号：社区渴望从"聊天机器人"向"可审计、可回溯的智能体系统"演进
- **VRAM 感知路由** (#22133) 与现有本地部署痛点（#12146 OpenRouter 回退问题）形成呼应，可能成为本地优先策略的差异化特性

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 Issue | 核心不满 |
|:---|:---|:---|
| **"我配置了本地模型，它却偷偷用 OpenRouter"** | #12146 | 配置系统不可信，`custom` provider 被忽略导致成本/隐私泄露 |
| **"重启后对话上下文全丢"** | #22129 (PR 背景) | 网关重启 = 失忆，无状态设计对长期任务不友好 |
| **"关闭浏览器标签，任务就死了"** | #22027 | WebSocket 断开即任务终止，无后台会话持久化 |
| **"NFS 上整个历史系统静默失效"** | #22032 | 错误被吞，用户无从诊断 |
| **"上传 debug 日志前不问我"** | #22016 | 隐私设计缺位，"先上传后通知"模式 |

### 满意点

- **Shift+Enter 快速响应** (#5346 关闭)：小交互改进获得 15 👍，社区认可维护者对 DX 细节的关注
- **重试机制存在但需打磨** (#5151)：基础设施有容错意识，但 UX 收尾不足

---

## 8. 待处理积压

### 需维护者优先关注

| Issue/PR | 积压天数 | 风险 | 行动建议 | 链接 |
|:---|:---|:---|:---|:---|
| **#7237** 输出截断 | **29 天** | 跨平台核心体验受损，17 评论未收敛 | 指定 owner，评估流式续传或分块策略 | [Issue #7237](https://github.com/NousResearch/hermes-agent/issues/7237) |
| **#5151** 重试状态累积 | **34 天** | 技术债，影响所有流式失败场景 | 与 #7237 统筹，统一流式状态机重构 | [Issue #5151](https://github.com/NousResearch/hermes-agent/issues/5151) |
| **#12146** OpenRouter 回退 | **21 天** | P1，本地部署用户流失风险 | 配置解析优先级审计，加急修复 | [Issue #12146](https://github.com/NousResearch/hermes-agent/issues/12146) |
| **#16769** Nostr 网关 | **11 天** | 去中心化平台差异化，PR 已就绪 | 安排代码审阅，纳入下个迭代 | [PR #16769](https://github.com/NousResearch/hermes-agent/pull/16769) |
| **#2041** Discord 富交互 RFC | **51 天** | 长期 draft 状态，贡献者可能失去动力 | 维护者明确反馈方向，或拆分可合并子集 | [PR #2041](https://github.com/NousResearch/hermes-agent/pull/2041) |

---

## 健康度指标

| 指标 | 数值 | 评估 |
|:---|:---:|:---|
| 日 Issues 净增 | +44（47 新开 - 3 关闭） | ⚠️ 累积压力 |
| 日 PR 净增 | +26（38 待合并 - 12 已处理） | ⚠️ 审阅瓶颈 |
| P1 问题修复率 | 1/6（16.7%） | 🔴 紧急 |
| 社区 👍 最高 Issue | #5346（15 👍）已关闭 | ✅ 响应及时 |
| 安全事件响应 | #22016 → #22139（24 小时内） | ✅ 快速 |

**综合判断**：Hermes Agent 处于**高动能、高积压**状态。社区创新活跃（单日 5 项架构级特性请求），但基础设施稳定性债务（6 项 P1 待修复）可能拖累长期信任。建议维护者优先收敛 P1 问题，同时建立 RFC 分级机制，避免创新请求淹没核心修复。

---

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-05-09

## 1. 今日速览

PicoClaw 今日保持**高活跃度**，24小时内 Issues 更新 20 条（6 新开/活跃，14 关闭），PR 更新 43 条（26 待合并，17 已合并/关闭），并发布 1 个 nightly 版本。项目处于**密集迭代期**，核心修复集中在工具安全沙箱、语音消息处理流、多通道（Matrix/Telegram/WhatsApp）稳定性；社区对 LM Studio 集成、飞书生态优化、嵌入式串口工具等需求持续高涨。整体健康度良好，关闭率 70% 显示维护响应积极，但 26 个待合并 PR 提示 review 带宽存在压力。

---

## 2. 版本发布

### [v0.2.8-nightly.20260508.2834db13](https://github.com/sipeed/picoclaw/compare/v0.2.8...main) 🔧 Nightly Build

| 属性 | 说明 |
|:---|:---|
| **类型** | 自动化构建（可能不稳定） |
| **基线** | v0