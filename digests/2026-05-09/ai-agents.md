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
|:---|:---|:---|:---:|:---|:---|
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
|:---|:---:|:---|:---|:---|
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
| **"平台二等公民"** | #8295, #78016, #13751 | Telegram 缺 `allowBots`、Matrix 语音消息无效、Feishu 需过度权限 |
| **"状态幻觉"** | #76990, #77374 | 助手回复"可见但不存在"于转录本，或"存在但消失"于 UI |

### 满意度信号

- **快速响应认可**：#77668（Discord 挂起）6 个重复 Issue 被高效合并处理，用户确认 raw-ws 测试隔离问题根因
- **架构升级期待**：#78595（SQLite 重构）虽无评论数据，但标签覆盖 20+ 通道/扩展，显示社区对底层治理的广泛支持

---

## 8. 待处理积压

### 需维护者关注的高价值长期 Issue

| Issue | 创建 | 最后更新 | 评论 | 状态 | 关注理由 |
|:---|:---|:---|:---:|:---|:---|
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
| **NanoBot** | 安全工具调用 + 精致 WebUI | 个人开发者、中小企业飞书/钉钉用户 | Python 为主，Dream 模块自进化，图像生成+Artifacts 闭环 |
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
| 来源 | OpenClaw SQLite 重构、IronClaw Reborn

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

Hermes Agent 今日呈现**极高活跃度**，24小时内产生 **50 条 Issues 更新**（47 条新开/活跃，仅 3 条关闭）和 **50 条 PR 更新**（38 条待合并，12 条已合并/关闭），无新版本发布。社区贡献势头强劲，但**关闭率偏低**（Issues 关闭率 6%，PR 合并率 24%），表明大量新内容涌入的同时，维护者审阅吞吐存在瓶颈。安全与稳定性问题受到重视，两项安全相关 PR 已快速提交响应。

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
|:---|:---:|:---|:---|:---|
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
| **基线** | v0.2.8 → main 分支最新进展 |
| **风险提醒** | ⚠️ 此为自动化 nightly，生产环境建议等待稳定版 |

**潜在包含的未发布变更**（基于同日合并 PR 推断）：
- 语音消息队列转录修复（[#2828](https://github.com/sipeed/picoclaw/pull/2828)）
- exec 工具路径安全守卫修正（[#2826](https://github.com/sipeed/picoclaw/pull/2826)）
- Matrix `allow_from` 过滤器修复（[#2827](https://github.com/sipeed/picoclaw/pull/2827)）

**迁移注意事项**：nightly 版本未经过完整回归测试，升级前建议备份配置。

---

## 3. 项目进展

### 今日已合并/关闭的关键 PR（17 条中的核心项）

| PR | 作者 | 进展说明 | 影响面 |
|:---|:---|:---|:---|
| [#2655](https://github.com/sipeed/picoclaw/pull/2655) | ZanzyTHEbar | **恢复统一内核基线**：修复 securebus 执行语义、redaction-safe 持久化、单步行记录等核心运行时不变量 | 🔴 核心架构稳定性 |
| [#2522](https://github.com/sipeed/picoclaw/pull/2522) | badgerbees | OpenAI 兼容流式用量统计修复 | 🟡  provider 生态 |
| [#2128](https://github.com/sipeed/picoclaw/pull/2128) | loafoe | MCP 工具 JSON Schema `properties` 字段补全，解决 LM Studio 等严格兼容端崩溃 | 🟡 工具生态兼容性 |
| [#2681](https://github.com/sipeed/picoclaw/pull/2681) | afjcjsbx | Gemini 函数调用 schema 消毒器，修复 MCP+Gemini HTTP 400 崩溃 | 🟡 多模态稳定性 |
| [#2705](https://github.com/sipeed/picoclaw/pull/2705) | hehaijunandhenry | **新增 MQTT 通道支持**，扩展 IoT 场景接入能力 | 🟢 新通道能力 |
| [#2824](https://github.com/sipeed/picoclaw/pull/2824) | anthrodjear | 主分支清理（代码健康度维护） | 🟢 技术债 |

**整体推进评估**：今日合并集中在**运行时内核修复**（#2655）和**边缘生态扩展**（MQTT、Gemini 适配），项目在安全基线与 IoT 场景各迈进一步。语音处理、Web 流式 UI 等用户高感知功能仍待合入。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 👍 | 核心诉求分析 |
|:---|:---|:---:|:---:|:---|
| 1 | [#28 Feat Request: LM Studio Easy Connect](https://github.com/sipeed/picoclaw/issues/28) | 18 | 2 | **长尾需求，持续 3 个月未解决**：用户希望在 Android/嵌入式设备上零配置接入 LM Studio 本地模型。痛点在于网络发现与 OAuth 流程对移动端不友好。今日无新进展，但持续获得关注说明本地模型部署场景刚需强烈。 |
| 2 | [#1042 exec工具guardCommand方法问题](https://github.com/sipeed/picoclaw/issues/1042) | 10 | 2 | **工具安全沙箱误杀**：`restrict_to_workspace=true` 时，正则解析将 `curl wttr.in/Beijing?T` 误判为路径遍历 `../../../../Beijing?T`。用户诉求：安全规则需理解 URL 与文件路径的语义差异。**已有修复 PR #2826 同日提交**。 |
| 3 | [#2376 Option to disable 'Enter' key from sending messages](https://github.com/sipeed/picoclaw/issues/2376) | 5 | 1 | **移动端输入体验**：Android 软键盘 Enter 直接发送导致无法换行，已关闭但解决方案未明确是否合入主线。 |

### 高反应 Issues（👍 聚合）

- [#2674 Codex OAuth: empty assistant response](https://github.com/sipeed/picoclaw/issues/2674)（👍 3）：OpenAI Codex 后端流式协议 `response.output_item.done` 解析失败，导致空回复。**高优先级，影响 ChatGPT 后端用户**。
- [#28](https://github.com/sipeed/picoclaw/issues/28)、[#1042](https://github.com/sipeed/picoclaw/issues/1042) 各 👍 2，[#2580 飞书优化](https://github.com/sipeed/picoclaw/issues/2580) 👍 2 反映中国用户生态诉求。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#2738 Image recognition issue in v0.2.8](https://github.com/sipeed/picoclaw/issues/2738) | v0.2.8 升级后图片识别完全失效 | ✅ **已关闭**（同日修复，可能含于 nightly） |
| 🔴 **高** | [#2674 Codex OAuth empty response](https://github.com/sipeed/picoclaw/issues/2674) | ChatGPT 后端流式项解析失败，模型返回空 | 🟡 **待修复**，无关联 PR |
| 🟡 **中** | [#1042 exec guardCommand 误拦截](https://github.com/sipeed/picoclaw/issues/1042) | 安全守卫将 URL 参数误判为路径遍历 | 🟢 **PR #2826 已提交**，待合并 |
| 🟡 **中** | [#2744 Android v0.2.8 cannot access any data from tabs](https://github.com/sipeed/picoclaw/issues/2744) | Android 版标签页数据无法加载 | 🟡 **开放**，仅 1 评论，需更多信息 |
| 🟡 **中** | [#2785 ToolFeedbackAnimator 飞书通知仅首条](https://github.com/sipeed/picoclaw/issues/2785) | `separate_messages=false` 时飞书通知中心只显示首个工具调用 | 🟡 **开放**，无 PR |
| 🟢 **低** | [#2784 README Baidu Search 免费额度文档错误](https://github.com/sipeed/picoclaw/issues/2784) | 1000/天 应为 50/天 | ✅ **已关闭** |

**回归风险警示**：v0.2.8 存在图片识别回归（#2738），虽快速关闭但建议用户验证 nightly 修复效果。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 纳入可能性评估 | 关键信号 |
|:---|:---|:---|:---|
| **LM Studio 一键连接** | [#28](https://github.com/sipeed/picoclaw/issues/28) | ⭐⭐⭐ 高 | 18 评论、跨平台需求、本地模型趋势；需设计发现协议 |
| **飞书官方级插件体验** | [#2580](https://github.com/sipeed/picoclaw/issues/2580) | ⭐⭐⭐ 高 | 中国用户占比大、👍 2、流式输出/状态显示/模型信息为明确诉求；已有 PR #2587 Web 流式可复用 |
| **串口/UART 工具支持** | [#2649](https://github.com/sipeed/picoclaw/issues/2649) | ⭐⭐⭐ 高 | 嵌入式基因项目（Sipeed 出品），I2C/SPI 已有，UART 为自然补齐；硬件开发者刚需 |
| **多 Agent 发现提示** | [PR #2158](https://github.com/sipeed/picoclaw/pull/2158) | ⭐⭐⭐ 高 | 已开 40 天，Layer 1 多 Agent 架构核心，引用 #2148 #1934 |
| **Gemini Web Search Provider** | [PR #2763](https://github.com/sipeed/picoclaw/pull/2763) | ⭐⭐⭐ 高 | 5 月 4 日提交，今日更新，Google Search grounding 集成 |
| **Bedrock 流式支持** | [PR #2645](https://github.com/sipeed/picoclaw/pull/2645) | ⭐⭐☆ 中 | AWS 企业用户需求，ConverseStream API 实现完整 |
| **原生音频输入（多模态）** | [PR #2626](https://github.com/sipeed/picoclaw/pull/2626) | ⭐⭐☆ 中 | Gemini 1.5 音频模态，IoT 语音场景；技术实现清晰 |
| **GitHub Copilot 支持** | [#2652](https://github.com/sipeed/picoclaw/issues/2652) | ⭐☆☆ 低 | 空模板提交，无实质内容，已关闭 |
| **外部记忆系统集成**（mem0/Supermemory） | [#2515](https://github.com/sipeed/picoclaw/issues/2515) | ⭐⭐☆ 中 | 长期记忆为 Agent 核心能力，但需 Go SDK 生态建设 |

---

## 7. 用户反馈摘要

### 😫 核心痛点

| 场景 | 来源 | 原声摘录 |
|:---|:---|:---|
| **工具安全规则过度敏感** | [#1042](https://github.com/sipeed/picoclaw/issues/1042) | *"这个命令压根不涉及到任何路径"* — 用户无法理解为何 `curl` 天气查询被拦截 |
| **Android 体验断层** | [#2376](https://github.com/sipeed/picoclaw/issues/2376), [#2744](https://github.com/sipeed/picoclaw/issues/2744) | Enter 发送无法换行、标签页数据空白 — 移动端完成度明显落后于桌面/服务端 |
| **飞书通知信息丢失** | [#2785](https://github.com/sipeed/picoclaw/issues/2785) | 多工具调用时通知中心只显示第一条，用户无法感知完整推理链 |
| **WhatsApp 企业部署陷阱** | [#2540](https://github.com/sipeed/picoclaw/issues/2540) | LID 迁移账户静默丢消息、日志无痕迹 — *"Took a while to track down because nothing appears in the logs at INFO level"* |

### 😊 满意/期待方向

- **轻量嵌入式定位获认可**：[#2580](https://github.com/sipeed/picoclaw/issues/2580) 用户主动提及 *"picoclaw的初衷就是轻量化"*
- **硬件工具链期待补齐**：[#2649](https://github.com/sipeed/picoclaw/issues/2649) 用户认可 I2C/SPI 已有，希望 UART 补齐成为完整嵌入式方案
- **中国用户生态投入**：飞书优化、百度额度文档修正显示本地化运营在响应

---

## 8. 待处理积压

### ⚠️ 需维护者重点关注（>30 天未合并/无响应）

| 类型 | 条目 | 天数 | 风险说明 |
|:---|:---|:---:|:---|
| PR | [#2158 Multi-agent discovery prompt](https://github.com/sipeed/picoclaw/pull/2158) | ~40 | 架构级功能，多 Issue 引用，长期 pending 可能阻塞生态扩展 |
| PR | [#2587 Pico web chat streaming](https://github.com/sipeed/picoclaw/pull/2587) | ~20 | 用户体验高感知功能，与 #2580 飞书流式诉求联动 |
| PR | [#2645 Bedrock StreamingProvider](https://github.com/sipeed/picoclaw/pull/2645) | ~15 | AWS 企业用户 blocker，实现完整仅待 review |
| PR | [#2626 Native audio input](https://github.com/sipeed/picoclaw/pull/2626) | ~17 | 多模态竞争力，Gemini 音频场景 |
| Issue | [#28 LM Studio Easy Connect](https://github.com/sipeed/picoclaw/issues/28) | ~87 | 3 个月无实质进展，本地模型部署趋势加速，可能流失用户到竞品 |
| Issue | [#2625 Compiled builds with WhatsApp](https://github.com/sipeed/picoclaw/issues/2625) | ~16 | Raspberry Pi Zero 2 用户编译负担，与 #2540/#2541 WhatsApp 稳定性修复形成闭环需求 |

### 📊 积压健康度指标

- **PR 平均待合并时长**：估算 10-15 天（基于创建日期分布）
- **Issue 关闭率**：70%（14/20）优秀
- **高 👍 需求响应率**：#28（👍2，87天）、#2674（👍3，13天）存在响应延迟风险

---

*日报生成时间：2026-05-09 | 数据来源：GitHub API 快照 | 项目地址：[github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-05-09

> **项目**: [qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw) | **日期**: 2026-05-09 | **分析周期**: 过去24小时

---

## 1. 今日速览

NanoClaw 今日呈现**高活跃度开发状态**：20 个 PR 更新（4 个已合并/关闭，16 个待审），2 个新增 Issue，无新版本发布。核心趋势集中在**容器运行时稳定性**（超时、权限、K8s 支持）、**CLI 基础设施完善**（`ncl` 工具链）以及**消息路由可靠性**（ graceful shutdown、线程上下文保留）。社区贡献者活跃，但 PR 积压率较高（80% 待合并），需关注审阅带宽。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 项目推进 |
|:---|:---|:---|:---|
| [#2358](https://github.com/qwibitai/nanoclaw/pull/2358) | Joi | **修复 SIGTERM 优雅关闭缺陷**：在退出前排空 `routeInbound` 中的在途请求，防止部署/重启时回复丢失 | 解决生产环境高频痛点（每次 launchd 重启或容器升级丢消息），完善 2 月引入的 graceful shutdown 机制 |
| [#2357](https://github.com/qwibitai/nanoclaw/pull/2357) | Joi | **重构 URL intake 配置**：将环境变量 `INTAKE_ENABLED_PLATFORM_IDS` 迁移至 `messaging_groups.auto_url_intake` 数据库列 + `/intake` 斜杠命令 | 消除技术债（文档标注为"过渡方案"），实现 per-channel 精细化控制 |
| [#2350](https://github.com/qwibitai/nanoclaw/pull/2350) | gavrielc | **新增 `ncl` 管理 CLI**：通过 Unix socket 提供对核心数据库的查询与修改能力（agent groups、messaging groups、wirings 等全实体） | 奠定运维自动化基础，与 #2355/#2356 的 PATH 问题形成配套基础设施 |
| [#2300](https://github.com/qwibitai/nanoclaw/pull/2300) | alipgoldberg | **修正 Slack 设置文档**：成员 ID 复制指引的 UI 位置与图标符号错误 | 降低新用户 onboarding 摩擦 |

**整体评估**：今日合并聚焦**生产可靠性**（shutdown 不丢消息）和**运维可管理性**（CLI + 配置持久化），属于 v2.0.45+ 版本成熟期的关键加固。

---

## 4. 社区热点

| 热度指标 | 条目 | 分析 |
|:---|:---|:---|
| **与现有 Bug 直接关联** | [#2356](https://github.com/qwibitai/nanoclaw/pull/2356) 修复 #2355 `ncl` 未加入 PATH | glifocat 在报告 Bug 当日即提交修复，体现**自服务社区**特征；问题影响所有从 v1 迁移或跨 2.0.45 升级的用户，波及面广 |
| **架构级功能请求** | [#2354](https://github.com/qwibitai/nanoclaw/issues/2354) Kubernetes 容器运行时 | netadmincmh-hash 提出将硬编码的 `docker` 运行时扩展至 K8s pods，反映**企业级部署需求**——现有 Docker-only 设计阻碍在已有 K8s 集群上的弹性伸缩 |
| **基础设施争议** | [#2351](https://github.com/qwibitai/nanoclaw/pull/2351) 容器配置迁出文件系统 | gavrielc 推动配置中心化，但引入数据库单点依赖，需评估与边缘/离线场景的兼容性 |

**核心诉求**：社区正从"能跑"转向"好运维"，要求**多运行时支持**、**配置可管理**、**升级平滑无感**。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | Fix PR |
|:---|:---|:---|:---|
| 🔴 **高** | **升级后 `ncl` 不在 PATH** (#2355)：用户通过 `/update-nanoclaw` 或 `/migrate-from-v1` 升级至 2.0.45+ 后，`~/.local/bin/ncl` 符号链接缺失，需手动发现 `bin/ncl` 或 `pnpm ncl` | 已报告 | ✅ [#2356](https://github.com/qwibitai/nanoclaw/pull/2356) 待合并 |
| 🔴 **高** | **SIGTERM 丢消息** (#2358)：优雅关闭机制未排空在途 `routeInbound`，导致每次部署/重启丢失 agent 回复 | **已修复** | ✅ [#2358](https://github.com/qwibitai/nanoclaw/pull/2358) 已合并 |
| 🟡 **中** | **root 运行 + 网络文件系统 = 容器启动死循环** (#2353)：agent 镜像强制 `USER node` (uid 1000)，与 host root 权限冲突，网络文件系统上 `chown` 失败 | 已报告 | ⏳ [#2353](https://github.com/qwibitai/nanoclaw/pull/2353) 待审 |
| 🟡 **中** | **axios MCP 服务器代理失效** (#2330)：OneCLI 网关仅支持 CONNECT，axios v1.x 的 `HTTPS_PROXY` 发送绝对 URI 导致 HTTP 400 | 已报告 | ⏳ [#2330](https://github.com/qwibitai/nanoclaw/pull/2330) 待审 |
| 🟡 **中** | **未知斜杠命令被静默丢弃** (#2346)：误分类为 `passthrough`，SDK 输出无 `<message>` 块 | 已报告 | ⏳ [#2346](https://github.com/qwibitai/nanoclaw/pull/2346) 待审 |
| 🟢 **低** | **构建超时 5 分钟不足** (#2352)：`install_packages` 在慢网络上触发 `ETIMEDOUT`，agent 镜像构建失败 | 已报告 | ⏳ [#2352](https://github.com/qwibitai/nanoclaw/pull/2352) 待审 |
| 🟢 **低** | **空容器 stdout 错误模糊** (#1912)：fallback parser 未按注释实现"最后非空行"，无输出时错误信息不清 | 长期未决 | ⏳ [#1912](https://github.com/qwibitai/nanoclaw/pull/1912) 待审（创建于 2026-04-22） |

---

## 6. 功能请求与路线图信号

| 需求来源 | 内容 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#2354](https://github.com/qwibitai/nanoclaw/issues/2354) | **Kubernetes 容器运行时**：以 Pod 替代本地 Docker/Apple Container，支持用户提供的集群 | ⭐⭐⭐⭐ 高 | 与现有容器抽象层 (`container-runtime.ts`, `container-runner.ts`) 耦合清晰，只需新增 `CONTAINER_RUNTIME_BIN = 'kubectl'` 分支；企业部署刚需 |
| [#2357](https://github.com/qwibitai/nanoclaw/pull/2357)（已合并） | **数据库化 intake 配置 + `/intake` 命令** | ✅ 已实现 | 官方技术债清理，路线图内 |
| [#2351](https://github.com/qwibitai/nanoclaw/pull/2351) | **容器配置迁出文件系统**：`container.json` → `container_configs` 表 | ⭐⭐⭐⭐ 高 | gavrielc 连续推进（#2350 CLI + #2351 配置），属基础设施统一战略 |
| [#2345](https://github.com/qwibitai/nanoclaw/pull/2345) | **per-group `CLAUDE.role.md` 自动导入**：在合成 `CLAUDE.md` 时注入角色专属文件 | ⭐⭐⭐ 中 | 功能边界清晰，但标记为"Borderline"可能需转为纯 skill |
| [#2350](https://github.com/qwibitai/nanoclaw/pull/2350)（已合并） | **`ncl` 管理 CLI** | ✅ 已实现 | 为后续所有运维功能提供入口 |

**路线图信号**：项目正从"功能扩展期"进入**平台化/企业化阶段**——配置中心化、多运行时支持、运维工具链是三大主轴。

---

## 7. 用户反馈摘要

| 维度 | 具体反馈 | 来源 |
|:---|:---|:---|
| **痛点：升级体验断裂** | "Fresh install 有 `ncl`，upgrade 却没有" —— 升级路径与全新安装不一致，破坏用户心智模型 | [#2355](https://github.com/qwibitai/nanoclaw/issues/2355) |
| **痛点：Docker 锁定** | "host that's already running Kubernetes has to run a separate Docker daemon" —— 基础设施冗余，违背云原生最佳实践 | [#2354](https://github.com/qwibitai/nanoclaw/issues/2354) |
| **痛点：root 部署陷阱** | Linux root + NFS 组合导致"unrecoverable container spawn loop"，权限设计未覆盖企业存储场景 | [#2353](https://github.com/qwibitai/nanoclaw/pull/2353) |
| **痛点：网络脆弱性** | 慢网络下 5 分钟构建超时"leaving the agent image in a corrupted half-built state" —— 无重试/增量机制 | [#2352](https://github.com/qwibitai/nanoclaw/pull/2352) |
| **满意：快速响应** | glifocat 当日报告当日提 PR，Joi 连续关闭两个核心问题 | 社区自治健康 |

---

## 8. 待处理积压

| 条目 | 创建时间 | 最后更新 | 风险 | 行动建议 |
|:---|:---|:---|:---|:---|
| [#1917](https://github.com/qwibitai/nanoclaw/pull/1917) 重命名 `@Andy` trigger 引用 | 2026-04-22 | 2026-05-08 | 中 | 与 #1913 重复/相近，需维护者裁定合并或关闭其一 |
| [#1913](https://github.com/qwibitai/nanoclaw/pull/1913) 同上，不同实现 | 2026-04-22 | 2026-05-08 | 中 | 同上，建议标记 `duplicate?` 或要求作者协调 |
| [#1916](https://github.com/qwibitai/nanoclaw/pull/1916) 数值型环境变量防 NaN | 2026-04-22 | 2026-05-08 | 低 | 模式简单（`Math.max(1, parseInt(...) || DEFAULT)`），可快速审阅 |
| [#1912](https://github.com/qwibitai/nanoclaw/pull/1912) 空 stdout 错误处理 | 2026-04-22 | 2026-05-08 | 低 | 测试覆盖 + 错误信息改进，低风险合并 |

**⚠️ 维护者关注**：boskodev790 的 4 个 PR 均创建于 4 月 22 日，距今 17 天，虽今日有更新但无评论互动，存在**贡献者流失风险**。建议优先批量审阅这些防御性编程改进。

---

> **健康度评分**: 🟢🟢🟢🟡⚪ (3.5/5)
> - 优势：核心 Bug 修复快、基础设施投入坚决、社区自服务能力强
> - 风险：PR 积压率 80%、4 个 17 天+老 PR 零评论、多运行时支持尚未排期

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-05-09

> **项目**: [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)  
> **分析日期**: 2026-05-09（数据覆盖过去24小时）

---

## 1. 今日速览

今日 NullClaw 项目呈现**中等活跃度**，以基础设施完善和文档补全为主。核心进展包括：原生 ACP（Agent Client Protocol）stdio 适配器正式合入主线，标志着项目在 AI 智能体互操作性上迈出关键一步；CI/CD 流水线完成夜间构建自动化升级；开发者体验方面补充了 Debian 平台的 Zig 安装指南。社区层面，WB × OpenSource Hackathon 参赛团队持续推送数据治理层草案，显示外部贡献者对项目架构扩展的兴趣。无新版本发布，无高优先级 Bug 报告，整体健康度良好。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 🔧 核心功能：原生 ACP 协议支持（已合并）

| PR | 作者 | 说明 |
|:---|:---|:---|
| [#896 Add native ACP stdio adapter](https://github.com/nullclaw/nullclaw/pull/896) | [DonPrus](https://github.com/DonPrus) | 在主二进制中内置 `nullclaw acp` 命令，实现 Agent Client Protocol 的 stdio JSON-RPC 适配器 |

**技术细节**：涵盖 ACP 初始化、会话创建、Prompt 处理、取消确认、会话更新通知，以及 text/resource 类型 Prompt 内容的翻译。此 PR 使 NullClaw 能够作为兼容 ACP 的客户端直接接入支持该协议的 AI 智能体生态，**降低了与外部工具链的集成门槛**。

---

### 🚀 CI/CD 基础设施升级（2 项已合并）

| PR | 作者 | 说明 |
|:---|:---|:---|
| [#899 ci: publish nightly prerelease](https://github.com/nullclaw/nullclaw/pull/899) | [DonPrus](https://github.com/DonPrus) | 为 `nullbuilder` 可复用工作流启用 `publish_release` 能力，自动生成标题为 `NullClaw Nightly` 的预发布版本 |
| [#898 ci: force scheduled nightly builds](https://github.com/nullclaw/nullclaw/pull/898) | [DonPrus](https://github.com/DonPrus) | 修复定时夜间构建因 `head_sha` 去重机制被跳过的问题，强制每日调度执行 |

**整体影响**：构建-发布流水线完成闭环，用户可获取每日最新构建进行早期验证，**加速反馈循环**。

---

### 📚 开发者体验改进（已合并）

| PR | 作者 | 关联 Issue |
|:---|:---|:---|
| [#897 chore(docs): Add docs for quick zig setup](https://github.com/nullclaw/nullclaw/pull/897) | [kunalk16](https://github.com/kunalk16) | [#820](https://github.com/nullclaw/nullclaw/issues/820) |

补充 Debian 平台 Zig 安装指南，降低新贡献者环境配置门槛。文档结构预留扩展至其他发行版/操作系统。

---

### 🏗️ 架构扩展：数据治理层（进行中）

| PR | 作者 | 状态 |
|:---|:---|:---|
| [#885 [hackathon] feat(memory): Add NullClaw Data Governance Layer](https://github.com/nullclaw/nullclaw/pull/885) | [sleep3r](https://github.com/sleep3r) | **OPEN**（Draft）|

WB × OpenSource Hackathon 参赛作品，由"Безопасность бэкофиса (DS)"团队提交，聚焦 AI 智能体记忆系统的数据治理。当前为草案阶段，待评审。

---

## 4. 社区热点

| 排名 | 条目 | 互动指标 | 热度分析 |
|:---|:---|:---|:---|
| 1 | [#820 [documentation] How to install Zig on Debian?](https://github.com/nullclaw/nullclaw/issues/820) | 5 评论，已关闭 | **真实痛点**：Zig 作为构建依赖在 Debian 生态非主流，用户困惑于是否需要强制 Docker。问题本身虽基础，但反映项目对非容器化开发路径的文档覆盖不足 |
| 2 | [#885 Data Governance Layer](https://github.com/nullclaw/nullclaw/pull/885) | 外部团队主动贡献 | **生态信号**：企业安全团队（DS 背景）将 NullClaw 作为 hackathon 技术底座，关注**数据合规与记忆治理**——这是 AI 智能体生产化的关键瓶颈 |

**诉求洞察**：社区从"能用"转向"可控"，数据治理、审计追踪、合规框架将成为下一阶段竞争焦点。

---

## 5. Bug 与稳定性

**今日无新增 Bug 报告、崩溃或回归问题。**

| 严重程度 | 数量 | 说明 |
|:---|:---|:---|
| 🔴 Critical | 0 | — |
| 🟠 High | 0 | — |
| 🟡 Medium | 0 | — |
| 🟢 Low | 0 | — |

**健康度评估**：✅ 稳定。CI 升级（#898/#899）本身属于预防性修复，避免构建静默失败。

---

## 6. 功能请求与路线图信号

| 来源 | 信号 | 纳入可能性评估 |
|:---|:---|:---|
| [#885 Data Governance Layer](https://github.com/nullclaw/nullclaw/pull/885) | 企业级数据治理、记忆审计、合规控制 | ⭐⭐⭐⭐☆ **高**。契合 AI 智能体从实验到生产的演进，且为外部团队主动实现的原型 |
| [#896 ACP 适配器](https://github.com/nullclaw/nullclaw/pull/896) | 协议级互操作性 | ⭐⭐⭐⭐⭐ **已合入**。成为核心架构组件 |
| 社区隐性需求（#820 衍生） | 多平台构建工具链文档 | ⭐⭐⭐☆☆ **中**。需系统性补充而非单点修复 |

**下一版本预测**：若 #885 通过评审，NullClaw 可能形成 **"核心运行时 + 数据治理插件"** 的双层架构，向企业级 AI 基础设施定位演进。

---

## 7. 用户反馈摘要

> 基于 [#820](https://github.com/nullclaw/nullclaw/issues/820) 评论提炼

| 维度 | 内容 |
|:---|:---|
| **痛点** | Debian 用户不清楚 Zig 安装路径，对 Docker 强制性的疑虑（"Is Docker really required?"） |
| **使用场景** | 裸机/VM 原生开发环境，非容器化工作流 |
| **满意点** | 文档补充响应迅速（Issue 4/14 创建 → PR 5/7 提交 → 5/8 合并） |
| **不满意/待改进** | 构建依赖文档前置不足；Zig 作为相对小众语言，缺少"快速开始"的发行版特定指引 |

**行动建议**：建立 `docs/setup/` 目录结构，按 OS/发行版/容器化程度分级组织，避免类似 Issue 重复出现。

---

## 8. 待处理积压

| 条目 | 创建时间 | 当前状态 | 风险提示 |
|:---|:---|:---|:---|
| [#885 [hackathon] feat(memory): Add NullClaw Data Governance Layer](https://github.com/nullclaw/nullclaw/pull/885) | 2026-05-04 | **OPEN Draft**，最后更新 2026-05-08 | Hackathon 作品通常有评审截止日期，需关注是否需维护者介入指导以符合合并标准（测试覆盖、架构对齐、文档完整性） |

**维护者关注建议**：  
- 指定评审人给 #885，明确 Draft → Ready for Review 的转化条件  
- 评估数据治理层与现有 memory 模块的接口兼容性，避免架构债务

---

## 附录：今日变更一览

| 类型 | 编号 | 标题 | 状态 | 链接 |
|:---|:---|:---|:---|:---|
| PR | #885 | [hackathon] feat(memory): Add NullClaw Data Governance Layer | 🟡 Open | [查看](https://github.com/nullclaw/nullclaw/pull/885) |
| PR | #899 | ci: publish nightly prerelease | ✅ Closed | [查看](https://github.com/nullclaw/nullclaw/pull/899) |
| PR | #898 | ci: force scheduled nightly builds | ✅ Closed | [查看](https://github.com/nullclaw/nullclaw/pull/898) |
| PR | #897 | chore(docs): Add docs for quick zig setup | ✅ Closed | [查看](https://github.com/nullclaw/nullclaw/pull/897) |
| PR | #896 | Add native ACP stdio adapter | ✅ Closed | [查看](https://github.com/nullclaw/nullclaw/pull/896) |
| Issue | #820 | [documentation] How to install Zig on Debian? | ✅ Closed | [查看](https://github.com/nullclaw/nullclaw/issues/820) |

---

*日报生成基于公开 GitHub 数据，未包含私有讨论或安全披露信息。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-05-09

> **项目地址**: [nearai/ironclaw](https://github.com/nearai/ironclaw)  
> **报告周期**: 2026-05-08 UTC  
> **分析师**: AI 智能体与个人 AI 助手领域开源项目分析师

---

## 1. 今日速览

IronClaw 今日呈现**极高强度开发态势**，49 个 PR 更新（23 个已合并/关闭）且零版本发布，表明团队处于**密集功能冲刺阶段**。核心焦点集中在 **Reborn 架构栈的系统性落地**——serrrfirat 单日推进 10+ 个关联 PR/Issue，覆盖 loop driver 注册、凭证加密存储、prompt bundle 端口等关键模块。与此同时，ilblackdragon 修复了一个**高危多租户隔离漏洞**（SSE/WS 状态泄露），hanakannzashi 持续完善图像工具链与 MCP 稳定性。社区侧仅 1 个用户反馈类 Issue（对话标题自动生成缺失），显示产品表面层问题相对收敛，但 Nightly E2E 持续失败需警惕回归风险。

---

## 2. 版本发布

**无新版本发布**

> 注：PR [#3388](https://github.com/nearai/ironclaw/pull/3388) 为 CI 自动发起的 `ironclaw_common` 0.4.1→0.4.2 及 `ironclaw` 0.24.0→0.28.0 版本 bump，但截至日报生成时仍处于 **OPEN** 状态，未正式合并发布。

---

## 3. 项目进展

### 🔥 Reborn 架构核心栈：系统性落地（serrrfirat）

| PR | 状态 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#3414](https://github.com/nearai/ironclaw/pull/3414) | **OPEN** | 新增 libSQL/Postgres `SecretsStore` 实现，支持加密持久化 + 原子 `consume_if_matches` OAuth 语义 | #3410 |
| [#3413](https://github.com/nearai/ironclaw/pull/3413) | **CLOSED** | `CheckpointStateStore` 契约与内存实现：loop checkpoint 负载的分阶段/边界化/脱敏处理 | [#3406](https://github.com/nearai/ironclaw/issues/3406) |
| [#3412](https://github.com/nearai/ironclaw/pull/3412) | **OPEN** | 加固持久凭证存储：参数化作用域查询、原子 `UPDATE ... WHERE` 消费、libSQL 独占写事务、Postgres 串行化隔离 | #3401 评审反馈 |
| [#3411](https://github.com/nearai/ironclaw/pull/3411) | **OPEN** | `LoopPromptPort` 与 prompt bundle DTO：host 托管的 prompt 物化，支持 checkpoint-state 作用域校验 | [#3409](https://github.com/nearai/ironclaw/issues/3409) |
| [#3408](https://github.com/nearai/ironclaw/pull/3408) | **CLOSED** | 持久凭证负载加密：`SecretsCrypto` 加密 + 显式 crypto 材料要求，索引字段保持可查询，无 crypto 时 fail-closed | — |
| [#3405](https://github.com/nearai/ironclaw/pull/3405) | **CLOSED** | Loop driver 注册表 + 启动时 readiness 校验：按 driver/profile/checkpoint schema 精确注册，缓存校验描述符快照 | [#3402](https://github.com/nearai/ironclaw/issues/3402) |
| [#3403](https://github.com/nearai/ironclaw/pull/3403) | **CLOSED** | `ThreadBackedLoopModelGateway`： durable session-thread 上下文上的 `LoopModelGateway` 适配器 | — |
| [#3401](https://github.com/nearai/ironclaw/pull/3401) | **CLOSED** | 持久凭证存储 MVP：`CredentialAccountStore`/`CredentialSessionStore` 契约 + libSQL/Postgres 实现 | — |
| [#3400](https://github.com/nearai/ironclaw/pull/3400) | **OPEN** | `TextOnlyModelReplyDriver`：首个 Reborn 自有 text-only loop 运行驱动 | [#3407](https://github.com/nearai/ironclaw/issues/3407) |
| [#3398](https://github.com/nearai/ironclaw/pull/3398) | **OPEN** | `TextOnlyLoopHostPorts` 组合：thread-backed context/model/transcript + 空 capability port + milestone sink | [#3407](https://github.com/nearai/ironclaw/issues/3407) |
| [#3397](https://github.com/nearai/ironclaw/pull/3397) | **CLOSED** | Loop support milestone 发射：`model_started`/`model_completed`/`assistant_reply_finalized` | — |
| [#3391](https://github.com/nearai/ironclaw/pull/3391) | **CLOSED** | `ironclaw_loop_support` MVP：thread-backed `LoopContextPort`/`LoopTranscriptPort`/`LoopModelPort` + 空 capability 表面 | — |
| [#3335](https://github.com/nearai/ironclaw/pull/3335) | **CLOSED** | 加密 secrets store 迁移 + `CredentialAccount`/`CredentialSession` 模型 | — |

**里程碑意义**：Reborn 从"架构设计"阶段正式进入"可运行代码"阶段——text-only loop driver 的端到端链条（registry → host factory → model gateway → prompt bundle → checkpoint staging → encrypted secrets）已初步贯通。

---

### 🛡️ 安全与稳定性修复（ilblackdragon）

| PR | 状态 | 核心贡献 |
|:---|:---|:---|
| [#3390](https://github.com/nearai/ironclaw/pull/3390) | **OPEN** | **高危修复**：`GatewayChannel::send_status` 多租户隔离漏洞——丢失 `metadata.user_id` 的生产者（heartbeat/routines/sandbox jobs/WASM/Slack OAuth）将 tool calls、tool output、onboarding state、job lifecycle **广播至所有 SSE/WS 订阅者**。PR 实施按 tenant 扇出隔离。 |

> **风险标签**: `risk: medium`（实际影响为高危信息泄露，标签可能保守）

| PR | 状态 | 核心贡献 |
|:---|:---|:---|
| [#3366](https://github.com/nearai/ironclaw/pull/3366) | **CLOSED** | Mission 自动恢复：用户完成 OAuth/审批门控后，暂停 mission 自动恢复，无需手动 `mission_resume`；含 DB migration |

---

### 🖼️ 图像工具链与 MCP（hanakannzashi）

| PR | 状态 | 核心贡献 |
|:---|:---|:---|
| [#3004](https://github.com/nearai/ironclaw/pull/3004) | **OPEN** | 独立 image tool 配置：OpenAI 兼容图像生成/编辑/分析端点，与 chat LLM 路由解耦，独立密钥管理 |
| [#3006](https://github.com/nearai/ironclaw/pull/3006) | **OPEN** | MCP 启动重试：容器启动时 `/mcp` 预配置 `Authorization` header 竞争导致的 auth 失败，非阻塞重试 |
| [#3065](https://github.com/nearai/ironclaw/pull/3065) | **OPEN** | 内联图像工件持久化：`image_edit` 复用历史图像路径，turn-scoped event ID 避免重复 tool-call ID 隐藏编辑图像 |

---

### 🔒 安全契约测试（nlok5923）

| PR | 状态 | 核心贡献 |
|:---|:---|:---|
| [#3399](https://github.com/nearai/ironclaw/pull/3399) | **OPEN** | 拒绝消息 vs 执行意图分类器契约测试：提取 `format_deny_message` 模板，锁定"拒绝消息不会触发 `user_signals_execution_intent`"的不变量 |

---

## 4. 社区热点

### 最活跃讨论：Reborn 集成测试设计
- **Issue [#3067](https://github.com/nearai/ironclaw/issues/3067)** | 32 评论 | `risk: high`, `e2e-coverage`, `reborn`
  - **核心诉求**：社区（及内部）需要**caller-level 垂直切片集成测试**，证明 Reborn 通过公共入口点工作，而非仅 crate-local 单元测试
  - **张力点**：serrrfirat 的"当前 pickup plan"显示测试策略仍在演进，高评论数反映架构验证的谨慎态度

### 架构协调枢纽
- **Issue [#3016](https://github.com/nearai/ironclaw/issues/3016)** | 11 评论 | `AgentLoopHost facade` 切挡块
  - 作为 #2987 Reborn epic 的关键子任务，承载与 #3013 (TurnCoordinator)、#3107 (AgentLoopDriver)、#3195-#3202 等多 Issue 的交叉引用，是**架构一致性的守门节点**

### 会话契约定义
- **Issue [#3193](https://github.com/nearai/ironclaw/issues/3193)** | 5 评论 | conversation binding & session thread contracts
  - **2026-05-08 状态更新**：语义切片已在 `origin/reborn-integration` (`20e5aa58`) 实现，Issue 保持聚焦直至 #3013 (TurnCoordinator) 解阻塞

---

## 5. Bug 与稳定性

| 优先级 | 问题 | 状态 | 修复进展 |
|:---|:---|:---|:---|
| 🔴 **P0** | **Nightly E2E 持续失败** ([#3323](https://github.com/nearai/ironclaw/issues/3323)) | OPEN | **无 fix PR**。失败作业：`Full E2E / E2E (v2-engine)`。Commit `3fab297c` 引入，需紧急 bisect |
| 🟡 **P1** | 多租户 SSE/WS 状态泄露 ([#3390](https://github.com/nearai/ironclaw/pull/3390)) | **PR OPEN** | ilblackdragon 已提交修复，待合并 |
| 🟡 **P1** | 对话标题未自动生成，默认取首条用户消息 ([#3385](https://github.com/nearai/ironclaw/issues/3385)) | OPEN | 无 PR，产品体验缺陷 |

> **健康度警示**：E2E 连续失败 + 高活跃 PR 合并量 = **回归风险积聚**。建议维护者优先调查 #3323 是否与 Reborn 代码涌入相关。

---

## 6. 功能请求与路线图信号

| 需求来源 | 内容 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| Issue [#3067](https://github.com/nearai/ironclaw/issues/3067) | Reborn 垂直切片集成测试 | **高** | 已标记 `reborn-integration` 分支，serrrfirat 主动推进 |
| Issue [#3107](https://github.com/nearai/ironclaw/issues/3107) | `AgentLoopDriver` 与 run-class profile 契约 | **已纳入** | #3400/#3405/#3411 等 PR 直接实现 |
| Issue [#3410](https://github.com/nearai/ironclaw/issues/3410) | v2 engine driver model adapter | **已启动** | #3414 (secrets store) 为前置依赖 |
| PR [#3004](https://github.com/nearai/ironclaw/pull/3004) | 独立 image tool 配置 | **中-高** | hanakannzashi 长期维护，XL 规模 PR 持续更新 |
| PR [#3006](https://github.com/nearai/ironclaw/pull/3006) | MCP 启动重试 | **中** | 解决具体部署痛点，但评论/互动较少 |

**路线图信号**：Reborn 的 **text-only MVP → v2 engine adapter → full capability surface** 三阶段路径清晰，当前处于阶段一收尾、阶段二启动的临界点。

---

## 7. 用户反馈摘要

### 真实痛点
| Issue | 用户 | 场景 | 情绪 |
|:---|:---|:---|:---|
| [#3385](https://github.com/nearai/ironclaw/issues/3385) | sunglow666 | Web chat 侧边栏对话标题冗长/不友好，降低多会话管理效率 | 😐 困扰 |
| [#3323](https://github.com/nearai/ironclaw/issues/3323) | github-actions[bot] | v2-engine E2E  nightly 失败，影响发布信心 | 🔴 阻塞 |

### 隐含需求（从 PR 反推）
- **部署灵活性**：hanakannzashi 的 image tool 解耦 + MCP 重试，反映生产环境对**凭证隔离**和**启动弹性**的硬性要求
- **安全合规**：serrrfirat 密集加密设计（encrypted payload + per-row salt + fail-closed），暗示**企业级部署**的审计/合规压力

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 最后更新 | 风险 | 提醒 |
|:---|:---|:---|:---|:---|
| [#3323](https://github.com/nearai/ironclaw/issues/3323) Nightly E2E failed | 2026-05-07 | 2026-05-08 | 🔴 **发布阻塞** | **需今日内响应**，排查是否与 #3391-#3414 Reborn PR 潮相关 |
| [#3004](https://github.com/nearai/ironclaw/pull/3004) Image tool config | 2026-04-28 | 2026-05-08 | 🟡 功能就绪 | XL 规模，已活跃 11 天，建议推进至合并或拆分 |
| [#3006](https://github.com/nearai/ironclaw/pull/3006) MCP retry | 2026-04-28 | 2026-05-08 | 🟡 可靠性 | 同上，L 规模，部署痛点明确 |
| [#3065](https://github.com/nearai/ironclaw/pull/3065) Image artifacts | 2026-04-29 | 2026-05-08 | 🟡 功能就绪 | XL 规模，依赖 #3004 可能 |

---

## 附录：今日核心贡献者工作量

| 贡献者 | PR 数 | 主导领域 |
|:---|:---|:---|
| serrrfirat | 13 | Reborn 架构全栈（secrets, loop driver, checkpoint, prompt, model gateway）|
| ilblackdragon | 2 | 安全修复（多租户隔离）、mission 恢复 |
| hanakannzashi | 3 | 图像工具链、MCP 稳定性 |
| nlok5923 | 1 | 安全契约测试 |
| ironclaw-ci[bot] | 1 | 版本 bump |

---

> **日报生成时间**: 2026-05-09  
> **数据截止时间**: 2026-05-08 23:59 UTC

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-05-09

> **项目**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
> **日期**: 2026-05-09 | **数据周期**: 过去24小时（2026-05-08）

---

## 1. 今日速览

LobsterAI 今日展现**高强度交付状态**：29个PR完成流转（27条已合并/关闭），2条新Issue聚焦UI体验精细化打磨，无新版本发布。核心特征是**release/2026.05.08 分支的集中收尾**——大量历史功能PR被cherry-pick入release线，包括CodeMirror 6代码块重写、Cron定时调度、收藏功能等关键特性。项目处于**发布冲刺期**，代码冻结前的功能归并节奏明显，但2条待合并PR和2条新提Issue显示UI一致性仍有最后缺口需填补。

---

## 2. 版本发布

**无新版本发布**

> 注：今日无GitHub Release，但 `release/2026.05.08` 分支正进行密集集成，预计近期将形成正式版本。

---

## 3. 项目进展

### 🔧 核心引擎与稳定性修复

| PR | 作者 | 说明 | 链接 |
|:---|:---|:---|:---|
| **#1923** | btc69m979y-dotcom | **修复停止会话后爬虫任务仍继续执行的关键Bug**——将`stop-cooldown`和`manuallyStoppedSessions`检查前移至auto-approve逻辑之前，阻断10秒窗口期内的违规审批 | [→](https://github.com/netease-youdao/LobsterAI/pull/1923) |
| #1756 | swuzjb | 上述修复的原始实现（已关闭，#1923为cherry-pick） | [→](https://github.com/netease-youdao/LobsterAI/pull/1756) |
| #1927 | liuzhq1986 | 修复Cowork中缓存读取值为0时仍显示的问题 | [→](https://github.com/netease-youdao/LobsterAI/pull/1927) |
| #1918 | liugang519 | 修复会话中出现`NO_REPLY`及其前缀的显示问题 | [→](https://github.com/netease-youdao/LobsterAI/pull/1918) |

### ✨ 编辑器与代码体验升级

| PR | 作者 | 说明 | 链接 |
|:---|:---|:---|:---|
| **#1922** | btc69m979y-dotcom | **CodeMirror 6全面替换react-syntax-highlighter**（cherry-pick #1306）——支持50+语言语法高亮、代码内搜索、行号、折叠、自动换行、全屏模态框、diff高亮等 | [→](https://github.com/netease-youdao/LobsterAI/pull/1922) |
| #1306 | swuzjb | 原始CodeMirror 6重写实现（已关闭） | [→](https://github.com/netease-youdao/LobsterAI/pull/1306) |

### 🎯 定时任务与表单体验

| PR | 作者 | 说明 | 链接 |
|:---|:---|:---|:---|
| #1917 | btc69m979y-dotcom | Cron定时调度cherry-pick入release——可视化构建器+原始表达式双模式，含自然语言预览、验证、下次执行时间计算 | [→](https://github.com/netease-youdao/LobsterAI/pull/1917) |
| #1519 | swuzjb | 原始Cron调度实现（已关闭） | [→](https://github.com/netease-youdao/LobsterAI/pull/1519) |
| #1919 | btc69m979y-dotcom | 必填字段红色`*`标记适配入release（8个文件：Settings、McpServerFormModal、TaskForm等） | [→](https://github.com/netease-youdao/LobsterAI/pull/1919) |
| #1511 | swuzjb | 原始必填字段标记实现（已关闭，覆盖21处字段） | [→](https://github.com/netease-youdao/LobsterAI/pull/1511) |

### 📑 收藏与消息管理

| PR | 作者 | 说明 | 链接 |
|:---|:---|:---|:---|
| #1664 | swuzjb | **消息收藏（Bookmark）功能**——星标按钮、侧边栏收藏入口、独立收藏列表页、Markdown渲染预览、一键跳转定位高亮 | [→](https://github.com/netease-youdao/LobsterAI/pull/1664) |

### 🎨 UI/UX 优化

| PR | 作者 | 说明 | 链接 |
|:---|:---|:---|:---|
| #1928 | fisherdaddy | 侧边栏UI优化（renderer/main/openclaw/cowork多区域） | [→](https://github.com/netease-youdao/LobsterAI/pull/1928) |
| #1924 | fisherdaddy | Agents布局优化 | [→](https://github.com/netease-youdao/LobsterAI/pull/1924) |
| #1929 | fisherdaddy | 本地Agent头像覆盖 | [→](https://github.com/netease-youdao/LobsterAI/pull/1929) |
| #1926 | liugang519 | 预览文件列表显示样式调整 | [→](https://github.com/netease-youdao/LobsterAI/pull/1926) |
| #1925 | liugang519 | 修复预览文件重复和有效性问题 | [→](https://github.com/netease-youdao/LobsterAI/pull/1925) |
| #1147 | swuzjb | 对话消息时间戳与响应耗时展示 | [→](https://github.com/netease-youdao/LobsterAI/pull/1147) |

---

## 4. 社区热点

### 待合并PR：UI体验最后缺口（2条）

| PR | 状态 | 关联Issue | 核心诉求 | 链接 |
|:---|:---|:---|:---|:---|
| **#1769** | **OPEN** | Closes #1920 | **Cowork初始化骨架屏**——替换静态`Loading...`文本为shimmer动画，消除空白加载的割裂感，与项目现有骨架设计系统保持一致 | [→](https://github.com/netease-youdao/LobsterAI/pull/1769) |
| **#1770** | **OPEN** | Closes #1921 | **空状态丰富化**——SkillsManager（已安装/市场标签页）和TaskRunHistory补充图标+描述副标题，对标CoworkSessionList的精致空状态 | [→](https://github.com/netease-youdao/LobsterAI/pull/1770) |

**诉求分析**：作者 `xiaoye5200` 同日提交Issue #1920/#1921 并关联已有PR #1769/#1770，形成**"问题发现→方案就绪"的闭环**。这反映出：
- 项目UI设计系统已建立内部一致性标准（骨架屏、空状态模式）
- release分支在合并历史PR时可能遗漏了这两条UI优化
- 维护者需在代码冻结前决策：合并入release或推迟至下一迭代

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | **停止会话后爬虫/多步工具仍继续执行**——用户点击停止后，auto-approve逻辑绕过stop cooldown检查，导致任务实际未终止 | **已修复**（cherry-pick入release） | #1923 / #1756 | [→](https://github.com/netease-youdao/LobsterAI/pull/1923) |
| 🟡 中 | 邮箱IMAP/SMTP连接失败时错误信息显示为`}`——错误信息构建优先级链逻辑缺陷 | 已修复 | #1161 | [→](https://github.com/netease-youdao/LobsterAI/pull/1161) |
| 🟡 中 | 会话中出现`NO_REPLY`及其前缀的异常显示 | 已修复 | #1918 | [→](https://github.com/netease-youdao/LobsterAI/pull/1918) |
| 🟢 低 | Cowork缓存读取值为0时仍显示该字段 | 已修复 | #1927 | [→](https://github.com/netease-youdao/LobsterAI/pull/1927) |
| 🟢 低 | 预览文件重复和有效性问题 | 已修复 | #1925 | [→](https://github.com/netease-youdao/LobsterAI/pull/1925) |

> **稳定性评估**：关键Bug（停止会话失效）已及时修复并入release线，该问题涉及用户主动控制权的丧失，修复优先级正确。今日无新增崩溃或回归报告。

---

## 6. 功能请求与路线图信号

### 已就绪待合并（高概率纳入当前/下一版本）

| 功能 | 来源 | 状态 | 信号强度 |
|:---|:---|:---|:---|
| Cowork初始化骨架屏 | PR #1769（作者xiaoye5200）| Open，代码已完成 | ⭐⭐⭐⭐⭐ |
| Skills/TaskRunHistory空状态丰富化 | PR #1770（作者xiaoye5200）| Open，代码已完成 | ⭐⭐⭐⭐⭐ |

### 今日release线已集成的功能（确认纳入）

| 功能 | 原始PR | 说明 |
|:---|:---|:---|
| CodeMirror 6代码块 | #1306 → #1922 | 企业级代码编辑体验 |
| Cron定时调度 | #1519 → #1917 | 高级自动化调度能力 |
| 消息收藏 | #1664 | 知识管理闭环 |
| 必填字段标记 | #1511 → #1919 | 表单可用性基础优化 |
| 消息时间戳/响应耗时 | #1147 | 透明度与性能感知 |

### 潜在路线图方向

- **编辑器生态扩展**：CodeMirror 6的引入为后续插件系统、自定义主题、LSP集成奠定基础
- **定时任务智能化**：Cron支持后，自然语言转Cron（如"每周一上午9点"）可能是下一步
- **跨会话知识管理**：收藏功能可扩展为全局知识库、标签系统、导出分享

---

## 7. 用户反馈摘要

### 从Issues提炼的真实痛点

| 痛点 | 来源 | 场景 | 情绪 |
|:---|:---|:---|:---|
| **"Loading..."的空白恐惧** | #1920 | 用户启动Cowork时面对无反馈的静态文本，不确定应用是否卡死 | 焦虑、不信任 |
| **空状态的"未完成感"** | #1921 | SkillsManager和TaskRunHistory的空白页让用户怀疑功能是否生效 | 困惑、功能怀疑 |
| **停止按钮的失控感** | #1923/#1756（已修复）| 点击停止后爬虫仍继续，用户感到控制权被剥夺 | **强烈不满**、安全感缺失 |

### 正向反馈信号（从PR设计推断）

- **时间戳/响应耗时**（#1147）：用户关注透明度，希望了解"AI思考了多久"
- **收藏功能**（#1664）：用户有跨会话沉淀知识的需求，且需要快速定位
- **CodeMirror 6**：开发者/技术用户对代码块的交互深度有明确期待

---

## 8. 待处理积压

### ⚠️ 需维护者关注

| 项目 | 类型 | 状态 | 风险 | 建议行动 |
|:---|:---|:---|:---|:---|
| **PR #1769** | 功能 | Open since 2026-04-20 | release线UI一致性缺口 | 评估是否合并入release/2026.05.08，或明确推迟 |
| **PR #1770** | 功能 | Open since 2026-04-20 | 同上 | 同上 |
| #1920 | Issue | Open | 与#1769重复，已有关闭方案 | 确认#1769合并后关闭 |
| #1921 | Issue | Open | 与#1770重复，已有关闭方案 | 确认#1770合并后关闭 |

> **决策建议**：两条Open PR均为"代码已完成、关联Issue已新建"的状态，维护者仅需做合并/推迟的二元决策。若release/2026.05.08已冻结，建议明确标记为`next-release`并关闭对应Issue，避免社区困惑。

---

## 附录：数据总览

| 指标 | 数值 | 环比评估 |
|:---|:---|:---|
| Issues更新 | 2（新开/活跃）| 低活跃度，聚焦UI精细化 |
| PR更新 | 29（27已关闭/合并，2待合并）| **高活跃度**，release冲刺特征 |
| 版本发布 | 0 | 预期近期发布 |
| 评论数>0的Issue/PR | 1（#1920有1评论）| 社区讨论度低，多为执行层交付 |

---

*本日报基于GitHub公开数据生成，未包含私有讨论或内部决策信息。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-05-09

> **项目**: [moltis-org/moltis](https://github.com/moltis-org/moltis)  
> **日期**: 2026-05-09  
> **分析周期**: 过去24小时（2026-05-08 至 2026-05-09）

---

## 1. 今日速览

Moltis 今日保持**中等活跃度**，核心贡献者 `penso` 主导了 4/5 的 PR 活动。项目推进呈现**"基础设施升级 + 用户体验优化"**双轨并行：文档系统从 mdBook 迁移至 Astro、Web 聊天界面全面重构，同时外部智能体持久化会话能力进入待合并阶段。版本发布节奏稳定（日构建 `20260508.01`），但社区外部贡献仅 1 条 PR（繁体中文本地化），显示项目仍高度依赖核心维护者。Issues 零活动表明当前无紧急缺陷暴露，整体健康度**良好但社区参与度有待提升**。

---

## 2. 版本发布

### [20260508.01](https://github.com/moltis-org/moltis/releases/tag/20260508.01)

| 属性 | 详情 |
|:---|:---|
| **发布日期** | 2026-05-08 |
| **版本类型** | 日构建版本（Daily Build） |
| **语义化版本** | 非标准 SemVer，采用日期编号 |

**更新内容分析**：
- 该版本为自动化日构建，未提供详细 Release Notes
- 基于当日合并的 PR #984 推断，包含 **OpenAI Realtime 语音模型引导优化** 及 `whisper` 系列 STT 模型设置支持
- 可能包含 PR #986 的**繁体中文界面改进**

**⚠️ 迁移注意事项**：
- 语音设置模块中，OpenAI Realtime 模型 ID 现标记为 **Realtime-only 专用**，若此前误配置用于片段转录（clip transcription），升级后需重新检查语音模型选择
- 文档 URL 结构暂无变更（PR #987 尚未合并），但建议关注后续 Astro 迁移带来的路径兼容性

---

## 3. 项目进展

### ✅ 已合并/关闭 PR（2 条）

| PR | 作者 | 核心进展 | 项目推进价值 |
|:---|:---|:---|:---|
| [#986](https://github.com/moltis-org/moltis/pull/986) | [PeterDaveHello](https://github.com/PeterDaveHello) | **繁体中文（zh-TW）本地化全面优化** | 提升台湾及繁体中文用户群的可及性；统一 "AI 助理"/"Moltis" 等品牌术语，减少认知摩擦 |
| [#984](https://github.com/moltis-org/moltis/pull/984) | [penso](https://github.com/penso) | **OpenAI Realtime 语音模型引导层 + STT 模型扩展** | 消除用户配置误用（将 Realtime 模型用于非实时场景）；新增 `gpt-4o-transcribe`/`gpt-4o-mini-transcribe` 支持；测试覆盖率提升（Playwright） |

**今日里程碑意义**：
- **国际化（i18n）基础设施**：首次由社区外部贡献者完成大规模 locale 更新，验证本地化协作流程通畅
- **语音模块稳健性**：通过 UI 引导而非限制的方式解决模型误配问题，体现"防御性设计"产品思维

---

## 4. 社区热点

> 今日无评论数据（`undefined`），且 👍 均为 0，社区互动处于**静默期**。以下按技术影响力排序分析：

### 🔥 技术关注度最高：[PR #566 - 外部智能体持久化会话](https://github.com/moltis-org/moltis/pull/566)

| 指标 | 数据 |
|:---|:---|
| 创建时间 | 2026-04-06（**已开放 32 天**） |
| 最后更新 | 2026-05-08（今日有活动） |
| 状态 | **OPEN - 待合并** |

**背后诉求分析**：
- **核心痛点**：Moltis 与外部 AI 智能体（ACP、Codex CLI、Claude Code）的会话在多次交互后丢失上下文，无法形成"长会话记忆"
- **产品战略信号**：Moltis 正从"单一聊天界面"向"多智能体编排中枢"演进，持久化会话是**跨工具工作流**的基础设施
- **阻塞风险**：32 天未合并可能涉及架构评审或网关 API 的稳定性顾虑，建议关注是否有 review 评论未在摘要中体现

### 🎨 用户体验焦点：[PR #985 - Web 聊天编辑器重构](https://github.com/moltis-org/moltis/pull/985)

- **设计范式迁移**：从传统底部输入栏 → **居中圆角编辑器（Composer）**，对标 ChatGPT/Claude 主流交互
- **信息架构优化**：token/上下文状态从截断显示改为 footer 换行展示，解决长上下文场景的信息可见性问题
- **多模态入口显性化**：附件、语音、推理模式切换统一收束于编辑器底部，降低功能发现成本

---

## 5. Bug 与稳定性

| 严重程度 | 数量 | 详情 | 状态 |
|:---|:---:|:---|:---|
| 🔴 Critical | 0 | — | — |
| 🟠 High | 0 | — | — |
| 🟡 Medium | 0 | — | — |
| 🟢 Low | 0 | — | — |

**评估结论**：今日 **零 Bug 报告**，Issues 零活动。结合 PR #984 的 Playwright 测试补充，项目当前处于**稳定性维护期**，无已知回归风险。

**预防性提示**：PR #987（Astro 文档迁移）涉及构建链变更，合并后需关注：
- 现有 `.html` URL 的 301 重定向有效性
- 服务端渲染（SSR）与静态生成的性能差异
- 搜索索引（title search）的初始构建完整性

---

## 6. 功能请求与路线图信号

### 从活跃 PR 推断的下一版本方向

| 功能领域 | 对应 PR | 纳入可能性 | 路线图判断 |
|:---|:---|:---:|:---|
| **多智能体会话编排** | [#566](https://github.com/moltis-org/moltis/pull/566) | ⭐⭐⭐⭐⭐ | **高优先级** — 已开发完成，32 天评审周期暗示架构重要性，预计近期合并 |
| **现代化 Web UI** | [#985](https://github.com/moltis-org/moltis/pull/985) | ⭐⭐⭐⭐⭐ | **高优先级** — 当日创建当日活跃，与版本发布节奏同步，可能进入快速迭代 |
| **文档系统现代化** | [#987](https://github.com/moltis-org/moltis/pull/987) | ⭐⭐⭐⭐☆ | **中高优先级** — 基础设施债务清偿，mdBook 迁移 Astro 符合前端技术演进趋势 |
| **语音模型生态扩展** | [#984](https://github.com/moltis-org/moltis/pull/984) | ✅ 已合并 | 持续跟进 OpenAI 模型发布节奏 |

**缺失信号**：今日无用户发起的功能请求 Issue，社区需求输入渠道**未充分激活**。建议维护者通过 Discussion 或社区调研补充定性反馈。

---

## 7. 用户反馈摘要

> ⚠️ **数据局限**：今日零 Issues 活动，无直接用户评论可提取。以下基于已合并 PR 的变更动机进行**逆向推断**：

| 推断痛点 | 来源依据 | 用户场景 |
|:---|:---|:---|
| **语音模型配置困惑** | PR #984 的 "Realtime-only guidance" 设计 | 用户在语音设置中误选 Realtime 模型用于非实时转录，导致功能异常或费用失控 |
| **繁体中文术语不一致** | PR #986 的大规模标准化 | 台湾用户在多模块间遭遇 "AI Assistant" 翻译混用（如 "AI 助手"/"AI 助理"/"智慧助理"），影响专业场景信任感 |
| **长上下文状态不可见** | PR #985 的 token footer 换行优化 | 开发者用户在高 token 消耗场景下无法准确预估剩余上下文窗口，导致对话中断 |
| **跨工具会话断裂** | PR #566 的持久化会话动机 | 使用 Claude Code/Codex CLI 与 Moltis 协同的开发者，需反复重建上下文，workflow 效率受损 |

**满意度信号**：PR #986 由社区贡献者自发提交且快速合并，显示**国际化用户群体有参与意愿**。

---

## 8. 待处理积压

### 🚨 长期开放 PR 预警

| PR | 开放天数 | 风险等级 | 建议行动 |
|:---|:---:|:---:|:---|
| [#566](https://github.com/moltis-org/moltis/pull/566) feat(external-agents): add persistent agent sessions | **32 天** | 🔶 **中高风险** | 该 PR 今日有更新活动，但超期过长。建议：① 公开阻塞原因（如需架构评审文档）；② 拆分网关 API 绑定/解绑与 UI 会话恢复为独立 PR，降低合并粒度 |

### 其他待合并项

| PR | 开放状态 | 关注要点 |
|:---|:---|:---|
| [#985](https://github.com/moltis-org/moltis/pull/985) Refresh web chat composer | 1 天 | 新创建，正常周期，关注视觉回归测试覆盖 |
| [#987](https://github.com/moltis-org/moltis/pull/987) Replace docs deployment with Astro site | 1 天 | 新创建，需验证现有 CI/CD 流水线与 Astro 构建的兼容性 |

---

## 附录：今日数据全景

```
Issues:  0 活跃 / 0 关闭 / 0 新开
PRs:     3 待合并 / 2 已关闭 / 5 总计
Releases: 1 (20260508.01)
核心贡献者: penso (4 PRs), PeterDaveHello (1 PR)
```

---

*本日报基于公开 GitHub 数据生成，未包含私有仓库或安全公告信息。PR 评论数为 `undefined` 可能源于 API 数据缺失或权限限制。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-05-09

## 1. 今日速览

CoPaw 项目今日保持**高活跃度**：24小时内 Issues 与 PR 各更新 36 条，社区讨论热烈。项目发布 **v1.1.6-beta.1** 预发布版本，聚焦版本迭代与集成测试加固。Bug 修复与稳定性改进是今日主线，特别是 Windows 打包、渠道消息分发、会话状态管理等关键路径获得多项修复。同时，WebUI 性能问题与上下文管理机制引发用户集中反馈，成为社区关注焦点。

---

## 2. 版本发布

### v1.1.6-beta.1（预发布）
| 属性 | 内容 |
|:---|:---|
| 发布者 | @zhijianma |
| 核心变更 | 版本号升级至 1.1.6b1；新增应用启动与环境变量的集成冒烟测试；修复 Console SSE 崩溃问题 |
| 破坏性变更 | 暂无明确破坏性变更 |
| 迁移注意 | 作为 beta 版本，建议测试环境验证后再生产部署；SSE 崩溃修复涉及前端事件流处理，升级后需关注长连接稳定性 |

**相关链接**：
- Release: https://github.com/agentscope-ai/QwenPaw/pull/4082
- 集成测试 PR: https://github.com/agentscope-ai/QwenPaw/pull/4081

---

## 3. 项目进展

### 已合并/关闭的关键 PR（21 条中精选）

| PR | 作者 | 核心贡献 | 项目推进度 |
|:---|:---|:---|:---|
| [#4093](https://github.com/agentscope-ai/QwenPaw/pull/4093) | @jinglinpeng | **修复 Windows 打包致命错误**：`conda-pack` 与 `pip install qwenpaw[full]` 的 setuptools 冲突 | ⭐⭐⭐ 解决长期阻塞的 Windows 分发问题 |
| [#4064](https://github.com/agentscope-ai/QwenPaw/pull/4064) | @hongxicheng | **Agent 热重载优雅化**：`AgentConfigWatcher` 改经 `reload_agent` 路由，实现任务排空后再切换渠道 | ⭐⭐⭐ 根治 DingTalk 等流式渠道中断问题 |
| [#4110](https://github.com/agentscope-ai/QwenPaw/pull/4110) | @zhaozhuang521 | **Console 聊天性能优化**：Approval 状态引用稳定化，避免 2.5 秒轮询导致的无效重渲染 | ⭐⭐⭐ 直接回应用户"WebUI 卡顿"反馈 |
| [#4076](https://github.com/agentscope-ai/QwenPaw/pull/4076) | @wjt0321 | **跨平台日志轮转**：`RotatingFileHandler` 覆盖 Windows/Linux，解决日志无限增长 | ⭐⭐ 基础设施健壮性 |
| [#3559](https://github.com/agentscope-ai/QwenPaw/pull/3559) | @hanson-hex | **前端测试体系奠基**：Vitest 框架 + 21 个测试文件 + CI 工作流，Chat 页面作为试点 | ⭐⭐⭐ 长期工程健康度投资 |
| [#4122](https://github.com/agentscope-ai/QwenPaw/pull/4122) | @yuanxs21 | **新增阿里云 Token Plan 内置提供商** | ⭐⭐ 扩展云厂商生态 |
| [#308](https://github.com/agentscope-ai/QwenPaw/pull/308) | @key88cb | 渠道渲染器 dict 参数安全处理 | ⭐ 边缘情况防护 |
| [#4121](https://github.com/agentscope-ai/QwenPaw/pull/4121) | @zhaozhuang521 | 测试修复 | ⭐ 质量保障 |

### 待合并重点 PR（15 条中精选）

| PR | 状态 | 说明 |
|:---|:---|:---|
| [#4130](https://github.com/agentscope-ai/QwenPaw/pull/4130) | 新提交 | Console 输入优化：非方向键跳过聊天历史查询，减少无效计算 |
| [#4126](https://github.com/agentscope-ai/QwenPaw/pull/4126) | 新提交 | 工具函数 Schema 清洗，安全加固 |
| [#4119](https://github.com/agentscope-ai/QwenPaw/pull/4119) | 新提交 | 微信渠道 Markdown 表格分割保护，避免表格被截断不可读 |
| [#3255](https://github.com/agentscope-ai/QwenPaw/pull/3255) | 审核中 | 定时任务支持"全新执行会话"，解决上下文累积问题 |
| [#4041](https://github.com/agentscope-ai/QwenPaw/pull/4041) | 审核中 | Windows 系统托盘启动入口，后台常驻运行 |

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---|:---|:---|
| 🔥1 | venv 重置导致 skill 依赖失效 | 10 | **开发环境持久化**：用户期望更新后不破坏虚拟环境与已安装技能 | [#2382](https://github.com/agentscope-ai/QwenPaw/issues/2382) |
| 🔥2 | Agent 切换后 session 丢失 | 9 | **会话状态连续性**：`lastChatIdByAgent` 功能缺失被确认为设计缺陷 | [#3919](https://github.com/agentscope-ai/QwenPaw/issues/3919) |
| 🔥3 | OpenClaw 灵感功能集（Meta） | 7 | **生态对标**：用户希望 CoPaw 实现 OpenClaw 的"复利式价值"架构 | [#578](https://github.com/agentscope-ai/QwenPaw/issues/578) |
| 4 | 新版本 WebUI 严重卡顿 | 4 | **性能回归**：1.5.1.post2 生成回复时系统级卡顿，多线程工作受阻 | [#4108](https://github.com/agentscope-ai/QwenPaw/issues/4108) |
| 5 | 本地模型无法调用 GPU | 4 | **本地推理优化**：Llama.cpp 引擎 fallback 到 CPU，RTX 3060 闲置 | [#2725](https://github.com/agentscope-ai/QwenPaw/issues/2725) |

**诉求分析**：今日热点呈现"**体验损伤焦虑**"——用户在高频使用场景中（Agent 切换、WebUI 交互、定时任务）遭遇状态丢失与性能退化，对 CoPaw 作为"个人 AI 助手"的可靠性产生质疑。OpenClaw 对标 Issue 的长期活跃（3 月创建，持续更新）反映用户对"越用越好"的产品愿景有强烈期待。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 级别 | Issue | 现象 | Fix 状态 | 链接 |
|:---|:---|:---|:---|:---|
| 🔴 **P0-严重** | WebUI 性能退化 | 回复生成时系统级卡顿，鼠标掉帧、窗口切换缓慢，完全无法多线程工作 | **已修复** [#4110](https://github.com/agentscope-ai/QwenPaw/pull/4110) | [#4108](https://github.com/agentscope-ai/QwenPaw/issues/4108) |
| 🔴 **P0-严重** | MCP streamable_http 断连不可恢复 | 超时后重连状态不一致，工具调用持续失败 | **待修复** | [#4100](https://github.com/agentscope-ai/QwenPaw/issues/4100) |
| 🟡 **P1-高** | Agent 切换 session 丢失 | `lastChatIdByAgent` 未实现，功能缺失 | **已确认设计缺陷**，待排期 | [#3919](https://github.com/agentscope-ai/QwenPaw/issues/3919) |
| 🟡 **P1-高** | 截图持续占用上下文 | 视觉输入不断压缩堆积，Token 浪费严重 | **待修复** | [#4102](https://github.com/agentscope-ai/QwenPaw/issues/4102) |
| 🟡 **P1-高** | MiMo-V2.5/DeepSeek-V4-Pro 重复响应 | 长上下文下循环回答、重复调用工具 | **待修复** | [#4128](https://github.com/agentscope-ai/QwenPaw/issues/4128) |
| 🟡 **P1-高** | v1.1.5.post2 opencode 提供商失效 | 升级后模型执行失败，回退版本正常 | **待修复** | [#4133](https://github.com/agentscope-ai/QwenPaw/issues/4133) |
| 🟢 **P2-中** | 文件名中英文数字空格异常 | "2026年报告.word" → "2026 年报告.word" | **待修复** | [#4104](https://github.com/agentscope-ai/QwenPaw/issues/4104) |
| 🟢 **P2-中** | Windows shell 命令闪窗 | 每次调用弹出控制台窗口 | **待修复** | [#4123](https://github.com/agentscope-ai/QwenPaw/issues/4123) |
| 🟢 **P2-中** | 硬编码 Agent name "Friday" | session 初始化不从配置读取 | **待修复** | [#4099](https://github.com/agentscope-ai/QwenPaw/issues/4099) |

**回归风险**：[#4101](https://github.com/agentscope-ai/QwenPaw/issues/4101) 报告 1.1.5.post2 再次出现"记不住最后会话+配置丢失"，与历史问题高度相似，提示 Docker 部署路径的状态持久化存在系统性隐患。

---

## 6. 功能请求与路线图信号

### 用户提出的关键需求

| 需求 | Issue | 成熟度信号 | 纳入可能性 |
|:---|:---|:---|:---|
| **项目级群组与多角色协作** | [#4131](https://github.com/agentscope-ai/QwenPaw/issues/4131) | 场景完整（项目群、@角色、共享 memory、跨项目参与） | ⭐⭐⭐ 高，契合"个人 AI 团队"定位 |
| **Rewind / 上下文回滚** | [#4129](https://github.com/agentscope-ai/QwenPaw/issues/4129) | 对标 Claude Code，明确 4 种使用场景 | ⭐⭐⭐ 高，工程实现成本可控 |
| **定时任务清空/归档会话** | [#3111](https://github.com/agentscope-ai/QwenPaw/issues/3111) | **PR [#3255](https://github.com/agentscope-ai/QwenPaw/pull/3255) 审核中** | ⭐⭐⭐ 已接近落地 |
| **OpenAI/Codex OAuth 登录** | [#4124](https://github.com/agentscope-ai/QwenPaw/issues/4124) | 具体命令格式参考 Hermes | ⭐⭐ 中，认证基础设施需扩展 |
| **企业微信单会话配置** | [#4116](https://github.com/agentscope-ai/QwenPaw/issues/4116) | 并发控制需求明确 | ⭐⭐ 中，渠道层改造 |
| **微信-浏览器操作同步** | [#4000](https://github.com/agentscope-ai/QwenPaw/issues/4000) | 多端状态一致性 | ⭐⭐ 中，架构复杂度较高 |
| **网页版语音输入** | [#4000](https://github.com/agentscope-ai/QwenPaw/issues/4000) | 界面误导已确认，功能缺失 | ⭐⭐ 中，前端能力扩展 |

**路线图推断**：v1.1.6 正式版可能聚焦稳定性收官；v1.2.x 或引入**项目级协作架构**（#4131）与**会话生命周期精细化管理**（#3255 + #4129），向"可长期陪伴的个人 AI 团队"演进。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 原声摘录 | 根因归类 |
|:---|:---|:---|
| **WebUI 性能危机** | "用了这么久，体验上越来越差了""完全不能多线程工作了" | 前端渲染架构缺陷（已修复） |
| **状态丢失创伤** | "真的是。。。"（配置再次丢失的无奈） | Docker 持久化路径不稳定 |
| **上下文管理焦虑** | "不断截图不断压缩不断消耗token这是何意啊" | 视觉输入机制缺乏智能过滤 |
| **定时任务沉默失败** | "任务状态 success，但 channel 错误""能执行但找不到微信通道" | 渠道分发逻辑与任务执行解耦 |
| **更新破坏环境** | "每次更新后venv会重置？所有skill相关的依赖都会失效" | 更新机制未隔离用户自定义环境 |

### 满意点
- 多渠道覆盖（微信、钉钉、飞书、Discord）能力获认可
- 定时任务机制被频繁使用，说明核心工作流价值成立

### 不满意点
- **"越升级越不稳定"**：1.1.5 → 1.1.5.post2 的连续回归损害信任
- **本地推理体验落差**：GPU 调用失败、模型加载黑盒
- **多端割裂**：微信与浏览器各说各话，缺乏统一视图

---

## 8. 待处理积压

### 需维护者重点关注

| Issue/PR | 创建时间 | 最后更新 | 风险说明 | 链接 |
|:---|:---|:---|:---|:---|
| OpenClaw 灵感功能集（Meta） | 2026-03-04 | 今日 | **3 个月无实质响应**，但持续获得用户补充，竞品压力累积 | [#578](https://github.com/agentscope-ai/QwenPaw/issues/578) |
| 本地模型 GPU 调用失败 | 2026-04-01 | 今日 | 硬件适配问题，影响本地隐私优先用户群体 | [#2725](https://github.com/agentscope-ai/QwenPaw/issues/2725) |
| Agent 切换 session 丢失 | 2026-04-28 | 今日 | **已确认为功能缺失而非 bug**，需产品决策是否优先 | [#3919](https://github.com/agentscope-ai/QwenPaw/issues/3919) |
| Discord 定时任务线程隔离 | 2026-04-17 | 今日 | PR [#3525](https://github.com/agentscope-ai/QwenPaw/pull/3525) 审核中，社区贡献者等待反馈 | [#3525](https://github.com/agentscope-ai/QwenPaw/pull/3525) |
| Apple Silicon mlx-lm 限制 | 2026-04-01 | 今日 | PR [#2771](https://github.com/agentscope-ai/QwenPaw/pull/2771) 审核中，跨平台依赖管理 | [#2771](https://github.com/agentscope-ai/QwenPaw/pull/2771) |

---

**日报生成时间**：2026-05-09  
**数据覆盖**：过去 24 小时 GitHub 活动  
**项目健康度评分**：🟢 活跃（高吞吐量）/ 🟡 稳定（需关注回归模式）/ 🔴 需干预（长期积压响应）

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 | 2026-05-09

> **项目**: [qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)  
> **日期**: 2026-05-09（统计周期：过去24小时）  
> **项目定位**: AI 智能体与个人 AI 助手开源框架

---

## 1. 今日速览

ZeptoClaw 今日处于**低活跃维护状态**。过去24小时内无新增 Issues、无 Issue 关闭，社区讨论近乎静默；仅有1条待合并 PR 于昨日（2026-05-08）获得更新，显示核心维护者仍在持续推进工具链优化，但外部贡献者和用户参与度较低。整体健康度评估：**开发侧缓慢推进，社区侧需要激活**。

---

## 2. 版本发布

**无新版本发布。**

最近一次 Release 需回溯至更早周期，建议关注 PR #571 合并后是否触发 patch 版本发布。

---

## 3. 项目进展

| PR | 状态 | 进展说明 |
|:---|:---|:---|
| [#571 feat(tools): trigger-phrase nudges in longterm_memory description](https://github.com/qhkm/zeptoclaw/pull/571) | **OPEN**（待合并） | 核心工具链优化：重构 `longterm_memory` 工具的描述机制，引入显式触发条件（"Use when" / "Do NOT use when"），对齐 Hermes Agent 的 `memory_tool.py` 设计模式；新增 doc-test 保障描述文本的触发短语完整性 |

**推进评估**：该 PR 属于**AI 智能体行为质量的基础设施改进**——通过结构化触发提示（trigger-phrase nudging）降低 LLM 工具调用的幻觉率，提升长期记忆功能的调用准确率。虽未合并，但 2026-05-08 的更新表明作者 [qhkm](https://github.com/qhkm) 仍在迭代，预计近期进入可合并状态。

---

## 4. 社区热点

**今日无活跃社区讨论。**

唯一具有分析价值的条目为 PR #571，其技术诉求可解读为：

| 维度 | 分析 |
|:---|:---|
| **背后诉求** | 解决 LLM-based Agent 中工具调用"该用时不用、不该用时乱用"的普遍痛点 |
| **对标信号** | 主动对齐 Hermes Agent 的成熟模式，暗示项目正从"功能可用"向"行为可靠"阶段演进 |
| **社区参与** | 👍 0，评论 undefined，**零外部互动**——反映项目尚处早期或用户群体以静默使用为主 |

---

## 5. Bug 与稳定性

| 严重程度 | 数量 | 详情 |
|:---|:---|:---|
| 🔴 Critical | 0 | — |
| 🟠 High | 0 | — |
| 🟡 Medium | 0 | — |
| 🟢 Low | 0 | — |

**今日零 Bug 报告。** 需注意：PR #571 的 doc-test 机制本身是对稳定性的一种**预防性投资**，通过测试守卫避免未来描述文本退化导致的工具误调用。

---

## 6. 功能请求与路线图信号

| 来源 | 信号 | 纳入可能性评估 |
|:---|:---|:---|
| PR #571 | 工具描述标准化 + 触发短语机制 | **高** — 作者自提且已开发完成，合并即入主线 |
| 隐含方向 | 与 Hermes Agent 生态对齐 | **中** — 可能预示后续更多工具链对标 Hermes 设计模式 |

**下一版本预测**：若 PR #571 合并，预计触发 **v0.x.patch** 级别发布，核心变更限于 `longterm_memory` 工具行为优化，无破坏性变更。

---

## 7. 用户反馈摘要

**今日无用户反馈数据。**

> ⚠️ 数据缺口提示：连续24小时零 Issues 更新，既可能是项目稳定性良好的表现，也可能是**用户基数小、反馈渠道未打通**或**文档/社区建设不足**的信号。建议维护者审视：
> - GitHub Discussions 是否启用？
> - 是否有外部社区（Discord/Slack/Reddit）分流了反馈？
> - 项目是否处于预发布阶段，用户尚未规模化接入？

---

## 8. 待处理积压

| 类型 | 详情 | 悬停时间 | 提醒 |
|:---|:---|:---|:---|
| PR 待合并 | [#571](https://github.com/qhkm/zeptoclaw/pull/571) 工具描述重构 | 创建于 2026-05-03，已 **6 天** | 作者最新更新为 2026-05-08，建议完成 review 流程或标记 `needs-review` 标签吸引协作者 |
| 社区沉默 | 无 Issues/无评论/无 👍 | — | 长期风险：缺乏外部反馈循环可能导致功能设计与真实需求脱节 |

---

## 附录：今日数据总览

| 指标 | 数值 |
|:---|:---|
| Issues 更新 | 0 |
| PR 更新 | 1（待合并 1） |
| Releases | 0 |
| 社区互动（👍/评论） | 0 / undefined |

---

*日报生成基于 GitHub 公开数据，社区分析部分因数据稀疏存在推断成分。建议维护者关注用户增长与反馈渠道建设。*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-05-09

---

## 1. 今日速览

ZeroClaw 今日保持**高活跃度**：24小时内 Issues 更新 20 条（14 活跃/新开，6 关闭），PR 更新 46 条（33 待合并，13 已合并/关闭），并发布 **v0.7.5** 版本。社区聚焦三大主线：**Web 端 onboarding 体验完善**、**Matrix 通道稳定性修复**、**Provider 架构统一**。值得注意的是，高风险的 Provider 架构重构（#5937）和安全相关的 WebSocket 审批绕过（#6207）仍在推进中，而 v0.8.0 的破坏性配置变更（#6523）已启动集成分支开发，预示项目正加速向 1.0 里程碑演进。

---

## 2. 版本发布

### v0.7.5 已发布
**发布日期**：2026-05-08  
**完整 Changelog**：[v0.7.4 → v0.7.5](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.7.5)

| 维度 | 详情 |
|:---|:---|
| **核心亮点** | **浏览器内 Onboarding 与配置**：schema 驱动的 `/onboard` 流程、基于 OpenAPI 3.1 规范的 per-property gateway CRUD 界面、支持 typed CLI 操作 |
| **三端人格编辑器** | CLI / Tauri Desktop / Web 三界面统一的人格（personality）编辑能力 |
| **发布状态** | 曾因 `gen-api` 生成顺序问题导致 CI 失败（[PR #6502](https://github.com/zeroclaw-labs/zeroclaw/pull/6502)），热修复后已顺利发货 |

**迁移注意事项**：
- 本次为功能增强版本，**无破坏性变更**
- 新用户可直接通过 `https://<daemon>:port/onboard` 完成零 CLI 初始化
- 现有用户建议验证 `config.toml` 中的 gateway 配置是否与新 CRUD 界面兼容

---

## 3. 项目进展

### 今日已合并/关闭的关键 PR（6 项）

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#6502](https://github.com/zeroclaw-labs/zeroclaw/pull/6502) | singlerider | **解除 v0.7.5 发布阻塞**：修复 CI 中 `gen-api` 先于 `tsc` 执行导致的构建失败；新增 `scripts/dev/act-local.sh` 本地验证脚本 | — |
| [#6306](https://github.com/zeroclaw-labs/zeroclaw/pull/6306) | patrickzzz | **Matrix 重复消息根因修复**：`run_sync_loop` 每次重启时累积事件处理器，导致消息被投递 N 次；现同步循环返回时正确清理 handler | [#6376](https://github.com/zeroclaw-labs/zeroclaw/issues/6376) |
| [#5121](https://github.com/zeroclaw-labs/zeroclaw/pull/5121) | Alix-007 | **Mistral 工具调用兼容性**：强制 9 字符 ASCII-alphanumeric `tool_call.id` 格式，解决 Mistral 拒绝执行工具的问题 | [#5117](https://github.com/zeroclaw-labs/zeroclaw/issues/5117) |
| [#6417](https://github.com/zeroclaw-labs/zeroclaw/pull/6417) | tidux | **Llama.cpp 独立 Provider**：从通用 OpenAI-compatible provider 分离，专属路由至 `/v1/responses` API，解决 tool usage 500 错误 | [#6377](https://github.com/zeroclaw-labs/zeroclaw/issues/6377) |
| [#6357](https://github.com/zeroclaw-labs/zeroclaw/pull/6357) | singlerider | **按 Provider 计费**：`ModelProviderConfig` 新增可选 `pricing` 字段，支持同一模型在不同 provider 间差异化定价 | — |
| [#5077](https://github.com/zeroclaw-labs/zeroclaw/pull/5077) | Alix-007 | 文档：澄清 OpenAI Codex 订阅认证配置与服务日志排查 | — |

**整体推进评估**：今日合并 PR 覆盖 **CI 可靠性**、**通道稳定性**、**Provider 生态兼容性**、**成本精细化** 四大维度，项目成熟度显著提升。Matrix 重复消息这一长期顽疾（S2 级）终于根治，Mistral/Llama.cpp 两大本地/边缘推理方案的兼容性缺口补齐。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 | 背后信号 |
|:---|:---|:---:|:---|:---|
| 1 | [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) 统一 Provider 架构与 reqwest 客户端管理 | **8** | 消除 Provider 模块中 reqwest 使用不一致、模型构造参数重复、配置碎片化 | **架构债务集中爆发**：社区贡献者（NiuBlibing）主动推动底层重构，但标记 `status:blocked`，可能依赖 v0.8.0 的 breaking changes |
| 2 | [#6153](https://github.com/zeroclaw-labs/zeroclaw/issues/6153) Matrix 语音转录失败：不支持的音频格式 | **7** | Element 客户端发送的音频格式未被正确识别（扩展名显示为 `.`） | **客户端兼容性长尾**：Matrix 生态碎片化（Element Web/Android/iOS 差异），通道适配成本持续 |
| 3 | [#6399](https://github.com/zeroclaw-labs/zeroclaw/issues/6399) 自定义远程 Provider 发送本地图片路径而非 data URL | **4** | Raspberry Pi 边缘部署场景下，多模态请求因文件路径暴露而失败 | **边缘计算场景崛起**：ARM64 + 本地 vLLM 的异构部署成为真实用户痛点 |
| 4 | [#6418](https://github.com/zeroclaw-labs/zeroclaw/issues/6418) Fallback Provider 未继承 config.toml 凭证（已关闭） | **4** | 故障转移时（Gemini → OpenRouter）API key 丢失，导致 S0 级安全/数据风险 | **生产级高可用刚需**：用户明确将 ZeroClaw 用于生产流量，fallback 机制的可靠性被严格审视 |

### 今日新开高关注 Issue/PR

| 条目 | 类型 | 核心看点 |
|:---|:---|:---|
| [#6523](https://github.com/zeroclaw-labs/zeroclaw/pull/6523) | PR | **v0.8.0 破坏性变更**：环境变量配置语法全面重构，消除所有 legacy override，社区需提前评估迁移成本 |
| [#6499](https://github.com/zeroclaw-labs/zeroclaw/issues/6499) | Issue | **macOS 原生 UI 控制**：截图、点击、按键、Accessibility、AppleScript 能力请求，Tauri Desktop 向真正的"AI 操作系统"演进 |

---

## 5. Bug 与稳定性

### 按严重程度排列

| 级别 | 数量 | 详情 | Fix PR 状态 |
|:---|:---:|:---|:---|
| **S0 - 数据丢失/安全风险** | 1 | [#6418](https://github.com/zeroclaw-labs/zeroclaw/issues/6418) Fallback Provider 凭证继承失败（**已关闭**） | ✅ [#6417](https://github.com/zeroclaw-labs/zeroclaw/pull/6417) 相关修复已合并 |
| **S1 - 工作流阻塞** | 4 | ① [#6399](https://github.com/zeroclaw-labs/zeroclaw/issues/6399) 自定义 Provider 多模态图片路径问题<br>② [#6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207) WebSocket gateway 绕过 ApprovalManager，监督模式工具审批不显示<br>③ [#6474](https://github.com/zeroclaw-labs/zeroclaw/issues/6474) 单用户请求触发 LLM 重复调用两次<br>④ [#6516](https://github.com/zeroclaw-labs/zeroclaw/issues/6516) ACP `cwd` 变更导致 agent 无法读取自身 skill 文件 | 🔄 [#6532](https://github.com/zeroclaw-labs/zeroclaw/pull/6532) 含 ACP 路径修复（待合并）<br>🔄 [#6522](https://github.com/zeroclaw-labs/zeroclaw/issues/6522) Web 审批 UI 需求已提出，待实现 |
| **S2 - 降级行为** | 6 | ① [#6530](https://github.com/zeroclaw-labs/zeroclaw/issues/6530) matrix-sdk v0.16.0 递归限制溢出导致构建失败（**今日新报**）<br>② [#6431](https://github.com/zeroclaw-labs/zeroclaw/issues/6431) SQLite 内存模式并发启动 schema 初始化失败<br>③ [#6517](https://github.com/zeroclaw-labs/zeroclaw/issues/6517) 上下文溢出导致幻觉/主题漂移<br>④ [#6528](https://github.com/zeroclaw-labs/zeroclaw/issues/6528) 系统 CA 证书不被 Provider 请求信任<br>⑤ [#6526](https://github.com/zeroclaw-labs/zeroclaw/issues/6526) SSE `/api/events` 丢弃 tool-call 事件<br>⑥ [#6524](https://github.com/zeroclaw-labs/zeroclaw/issues/6524) Matrix root timeline 消息错误创建独立线程会话 | 🔄 [#6432](https://github.com/zeroclaw-labs/zeroclaw/pull/6432) SQLite 并发修复（待合并）<br>🔄 [#6527](https://github.com/zeroclaw-labs/zeroclaw/pull/6527) SSE 事件广播修复（待合并）<br>❌ 其余待认领 |

### 构建/CI 风险

- **#6530** 为 v0.7.5 发布后新暴露的编译问题：`matrix-sdk v0.16.0` 在 `channel-matrix` feature 下触发 rustc 递归限制。影响 Docker/Podman 构建，需紧急评估是否发布 v0.7.6 热修复。

---

## 6. 功能请求与路线图信号

### 已明确纳入开发管线

| 功能 | 来源 | 目标版本信号 | 实现状态 |
|:---|:---|:---|:---|
| Web 端工具审批 UI | [#6522](https://github.com/zeroclaw-labs/zeroclaw/issues/6522) | v0.7.6/v0.7.7 | 需求刚提出，待设计 |
| macOS 原生 UI 控制能力 | [#6499](https://github.com/zeroclaw-labs/zeroclaw/issues/6499) | Desktop 长期 | 技术方案已细化（权限→执行→结构化返回），待 PR |
| Agent 文件系统布局 V3 | [#6272](https://github.com/zeroclaw-labs/zeroclaw/issues/6272) | v0.8.0 | 需求明确，待排期 |
| 环境变量配置语法重构 | [#6523](https://github.com/zeroclaw-labs/zeroclaw/pull/6523) | **v0.8.0** | 🔥 已开 `integration/v0.8.0` 分支，开发中 |

### 社区呼声强烈但尚未排期

| 功能 | 来源 | 用户场景 |
|:---|:---|:---|
| Ollama provider 参数调优（`num_ctx`/`num_predict`/`temperature`） | [#6178](https://github.com/zeroclaw-labs/zeroclaw/pull/6178) | 本地模型上下文长度与生成控制，think 模式切换 |
| Webhook 通道指数退避重试 | [#5838](https://github.com/zeroclaw-labs/zeroclaw/pull/5838) | 企业集成可靠性 |
| 可配置回复意图预检模型 + 超时 | [#6068](https://github.com/zeroclaw-labs/zeroclaw/pull/6068) | 降低主模型调用成本，加速响应 |

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 | 核心不满 |
|:---|:---|:---|
| **边缘异构部署** | [#6399](https://github.com/zeroclaw-labs/zeroclaw/issues/6399) | "Raspberry Pi 4B + 远程 vLLM"：多模态图片路径处理假设所有文件本地可访问，远程场景断裂 |
| **监督模式失效** | [#6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207) | "Web dashboard 完全看不到审批提示"——安全机制存在但 UI 未暴露，用户误以为功能缺失 |
| **上下文管理焦虑** | [#6517](https://github.com/zeroclaw-labs/zeroclaw/issues/6517) | 长对话后"开始幻觉、偏离主题或重复旧回复"，缺乏窗口管理透明度 |
| **配置迁移困惑** | [#6377](https://github.com/zeroclaw-labs/zeroclaw/issues/6377) | Llama.cpp 默认 endpoint 选择不当导致 tool 500，用户需手动试错 |

### 满意/认可

- v0.7.5 的 **in-browser onboarding** 被多次提及为"新用户零门槛"关键改进
- Desktop menu-bar chat 的 first-run 无 CLI 体验（[#6320](https://github.com/zeroclaw-labs/zeroclaw/issues/6320)，已关闭）获得积极反馈

---

## 8. 待处理积压

### 需维护者紧急关注

| Issue/PR | 创建时间 | 阻塞原因 | 风险 |
|:---|:---|:---|:---|
| [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) Provider 架构统一 | 2026-04-20 | `status:blocked`，8 评论后无维护者明确解阻塞路径 | 高：社区贡献者 NiuBlibing 主动投入，长期阻塞可能流失核心贡献 |
| [#6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207) WebSocket 审批绕过 | 2026-04-29 | 安全类 S1，3 评论，关联 PR 未出现 | **高**：监督模式安全机制形同虚设，合规场景不可用 |
| [#6530](https://github.com/zeroclaw-labs/zeroclaw/issues/6530) matrix-sdk 构建失败 | 2026-05-08 | **今日新报**，0 评论 | **紧急**：v0.7.5 已知编译回归，影响 Matrix 用户获取 |

### 长期未响应的 PR

| PR | 创建时间 | 状态 | 建议动作 |
|:---|:---|:---|:---|
| [#5838](https://github.com/zeroclaw-labs/zeroclaw/pull/5838) Webhook 重试逻辑 | 2026-04-17 | `needs-author-action` 标签，近 1 个月 | 维护者需确认是否需要 rebase 或设计调整 |
| [#6178](https://github.com/zeroclaw-labs/zeroclaw/pull/6178) Ollama 参数调优 | 2026-04-28 | 待 review，11 天 | 本地 LLM 用户高频需求，建议优先 review |

---

*日报生成时间：2026-05-09 | 数据来源：ZeroClaw GitHub 仓库公开活动*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*