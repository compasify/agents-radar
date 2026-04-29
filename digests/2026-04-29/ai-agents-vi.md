# OpenClaw 生态日报 2026-04-29

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-04-29 00:20 UTC

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

# OpenClaw 项目动态日报 | 2026-04-29

## 1. 今日速览

OpenClaw 今日呈现**极高社区活跃度**，24小时内 487 个活跃 Issue 与 466 个待合并 PR 表明项目处于快速迭代期。v2026.4.26 版本发布聚焦实时语音与浏览器传输能力，但社区反馈显示 **v4.22→v4.26 性能回归**成为新的 blocker 级问题。Docker 环境兼容性、多通道（Feishu/Telegram/WhatsApp）边缘 case 处理，以及 Gateway 稳定性（CPU 飙高、启动慢）构成当前技术债务的三大主峰。PR 队列庞大（466 待合并），代码审查吞吐面临显著压力。

---

## 2. 版本发布

### [v2026.4.26](https://github.com/openclaw/openclaw/releases/tag/v2026.4.26) — OpenClaw 2026.4.26

| 维度 | 详情 |
|:---|:---|
| **核心变更** | ① **Control UI/Talk**: 新增通用浏览器实时传输协议（generic browser realtime transport contract）；② **Google Live browser Talk 会话**：支持受约束的临时令牌（constrained ephemeral tokens）；③ **Gateway 中继**：为纯后端实时语音插件提供 Gateway relay |
| **贡献者** | @VACInc |
| **CLI/models** | 优化 provider-filtered 模型列表路由（变更截断，完整内容见 release note） |
| **迁移注意** | 实时语音功能涉及新的 token 机制，依赖 Gateway 中继的插件需确认网关版本 ≥ 2026.4.26 |

> ⚠️ **社区反馈**：升级后出现显著性能退化（见 Issue #73501），生产环境建议暂缓或做好回滚准备。

---

## 3. 项目进展

### 今日关键 PR 推进（基于最新活跃 PR 分析）

| PR | 作者 | 状态 | 核心贡献 | 链接 |
|:---|:---|:---|:---|:---|
| #73883 | CadanHu | **OPEN** | 会话历史支持 `includeArchived` 参数，允许只读访问 `.reset.<ts>` 归档上下文而不复活为活跃会话 | [PR #73883](https://github.com/openclaw/openclaw/pull/73883) |
| #73822 | nickytonline | **OPEN** | 通道配置中电话号码字段支持 `SecretRef`，PII 不再以明文存储于 `allowFrom`/`defaultTo`/`groupAllowFrom` | [PR #73822](https://github.com/openclaw/openclaw/pull/73822) |
| #73871 | pash-openai | **OPEN** | Codex Computer Use onboarding 流程显式化，新增 `/codex computer-use setup` 命令 | [PR #73871](https://github.com/openclaw/openclaw/pull/73871) |
| #73877 | arcanis2k3 | **OPEN** [beta-blocker] | **修复 Workspace 插件 HTTP 路由 404 问题** — 插件无法接收 Stripe/Gmail 等 webhooks | [PR #73877](https://github.com/openclaw/openclaw/pull/73877) |
| #73884 | chareice | **OPEN** | Telegram 轮询假死重启阈值提升至 60s，避免低于 grammY 30s long-poll 窗口导致的误判 | [PR #73884](https://github.com/openclaw/openclaw/pull/73884) |
| #49841 | GatewayJ | **OPEN** | Nacos 配置中心支持，K8s 环境可实现无文件系统的集中配置与热重载 | [PR #49841](https://github.com/openclaw/openclaw/pull/49841) |

**整体评估**：今日 PR 聚焦**安全加固**（SecretRef）、**稳定性修复**（Telegram 轮询、Workspace 路由）、**企业级部署**（Nacos、归档会话读取），但合并速率（34/500）显示审查瓶颈明显。

---

## 4. 社区热点

### 🔥 讨论最激烈的 Issues

| 排名 | Issue | 评论 | 👍 | 核心诉求 | 链接 |
|:---|:---|:---:|:---:|:---|:---|
| 1 | **Docker 中 Skill 安装失败：`brew not installed`** | 27 | 17 | Docker 官方镜像未内置 Homebrew，Linux 容器运行 `brew`-based skill（如 openai-whisper）直接崩溃。用户要求官方镜像支持多平台 skill 安装或明确文档指引 | [#14593](https://github.com/openclaw/openclaw/issues/14593) |
| 2 | **集中式文件名编码工具** | 17 | 0 | Feishu 中文文件名乱码的架构级修复，要求统一处理 Shift-JIS/EUC-KR/GB18030 等多编码，而非仅修 UTF-8→Latin-1 个案 | [#48788](https://github.com/openclaw/openclaw/issues/48788) |
| 3 | **agentDir 中 bootstrap 文件被静默忽略** | 13 | 4 | 按文档放置的 SOUL.md/AGENTS.md 等文件在 `agentDir` 下不生效，仅 `workspace` 目录生效，配置模型与行为预期严重不符 | [#29387](https://github.com/openclaw/openclaw/issues/29387) |
| 4 | **Agent 拒绝调用 write/action 工具，幻觉成功** | 11 | 0 | 升级后 agentmail 等工具调用失败但 Agent 伪造成功响应，属于**信任与安全（T&S）红线问题** | [#41304](https://github.com/openclaw/openclaw/issues/41304) |
| 5 | **Gateway 启动过慢：hook 初始化阻塞** | 11 | 0 | 生产环境 Gateway 启动需 ~4 分钟，model-pricing 等 hook 阻塞主流程，要求异步/非阻塞加载 | [#61278](https://github.com/openclaw/openclaw/issues/61278) |
| 6 | **Gateway CPU 飙高导致 Telegram 回复停滞** | 11 | 2 | Gateway 进入高 CPU 状态时 Telegram 轮询仍工作但回复管道卡死，`channels status --deep` 超时 | [#72338](https://github.com/openclaw/openclaw/issues/72338) |
| 7 | **代码中硬编码 `/Users/wangtao` 路径被合并发布** | 11 | 0 | **工程纪律问题**：开发者个人路径 hardcode 进入发布版本，损害项目专业形象 | [#51429](https://github.com/openclaw/openclaw/issues/51429) |

**诉求分析**：社区核心焦虑集中在**"部署即能用"的可靠性**（Docker、路径硬编码）、**生产级稳定性**（Gateway 性能、启动速度）、以及**多语言/多区域适配深度**（Feishu 编码、中文场景）。

---

## 5. Bug 与稳定性

### 🚨 按严重程度排列

| 级别 | Issue | 现象 | 修复状态 | 链接 |
|:---|:---|:---|:---|:---|
| **BLOCKER** | **v4.22→v4.26 显著性能退化** | 发送反应、信息回复明显变慢，标记为 regression | 🔴 **无 fix PR**，今日新报 | [#73501](https://github.com/openclaw/openclaw/issues/73501) |
| **CRITICAL** | **Gateway CPU 100% 后 Telegram 回复卡死** | 高 CPU 状态下回复管道停滞，status probe 超时，需重启恢复 | 🟡 PR #73884（Telegram 轮询）可能相关，但非根因修复 | [#72338](https://github.com/openclaw/openclaw/issues/72338) |
| **CRITICAL** | **Session write lock 泄漏导致 >30min 死锁** | 未处理的 promise rejection/stream 导致锁孤儿化 | 🔴 无 fix PR | [#49157](https://github.com/openclaw/openclaw/issues/49157) |
| **HIGH** | **Agent 幻觉工具调用成功（实际未执行）** | send email、create GitHub 等操作伪造成功响应 | 🔴 无 fix PR | [#41304](https://github.com/openclaw/openclaw/issues/41304) |
| **HIGH** | **Async task completion 报告丢失** | `system event --text` 非可靠会话定向，事件可能丢失或错误送达 | 🔴 无 fix PR | [#52305](https://github.com/openclaw/openclaw/issues/52305) |
| **HIGH** | **Cron job 在 Dashboard 不显示（2026.3.13 regression）** | Control UI 中 Cron 页面空白，`jobs.json` 存在但 UI 不渲染 | 🔴 无 fix PR | [#51871](https://github.com/openclaw/openclaw/issues/51871) |
| **HIGH** | **Webchat avatar 404 regression** | `/avatar/{agentId}` 返回 404，IDENTITY.md 配置无效 | 🔴 无 fix PR | [#38439](https://github.com/openclaw/openclaw/issues/38439) |
| **MEDIUM** | **Gemini reasoning 泄漏到聊天** | 内部思维链作为常规文本输出给用户（Telegram 可见） | 🔴 无 fix PR，此前 #1305/#26551 修复后复发 | [#41494](https://github.com/openclaw/openclaw/issues/41494) |
| **MEDIUM** | **Plugin `before_agent_start` hook 永久挂起** | 网络调用永不 resolve 时无超时、无日志、无恢复，需重启 Gateway | 🔴 无 fix PR | [#48534](https://github.com/openclaw/openclaw/issues/48534) |
| **MEDIUM** | **Control UI 在 Chromium/Vivaldi 中挂起** | `<openclaw-app>` 未注册/渲染，Firefox 正常 | 🔴 无 fix PR | [#39889](https://github.com/openclaw/openclaw/issues/39889) |

**已关闭修复**：
- ✅ [#61701](https://github.com/openclaw/openclaw/issues/61701) Gateway 100% CPU（v2026.4.5）— 今日关闭，可能为历史问题
- ✅ [#40256](https://github.com/openclaw/openclaw/issues/40256) System prompt 排序破坏 LLM prefix caching — 已关闭

---

## 6. 功能请求与路线图信号

| 功能请求 | 热度 | 技术可行性 | 纳入下一版本信号 | 链接 |
|:---|:---:|:---|:---|:---|
| **Masked Secrets：Agent 使用但不可见 API Key** | 👍 4 | 高 | 🔶 **强信号** — 安全基线需求，社区长期呼吁 | [#10659](https://github.com/openclaw/openclaw/issues/10659) |
| **私有网络访问开关 `tools.web.fetch.allowPrivateNetwork`** | 👍 4 | 高 | 🟢 **已有明确需求**，企业内网场景必需 | [#39604](https://github.com/openclaw/openclaw/issues/39604) |
| **路径级 RWX 权限替代二进制 allowlist** | 0 | 中 | 🔶 架构级改进，与安全模型相关 | [#39979](https://github.com/openclaw/openclaw/issues/39979) |
| **Fallback 审批模式 + 模型归因** | 0 | 中 | 🔶 透明度与可控性需求 | [#33975](https://github.com/openclaw/openclaw/issues/33975) |
| **可配置 Control UI 上传大小限制**（当前 5MB） | 0 | 高 | 🟢 简单配置扩展，易实现 | [#71142](https://github.com/openclaw/openclaw/issues/71142) |
| **多会话架构：共享 LLM + 隔离会话 + 公共知识库** | 0 | 低（架构级） | 🔴 长期 RFC，需设计评审 | [#48874](https://github.com/openclaw/openclaw/issues/48874) |
| **Reusable Gateway WebSocket Client SDK** | 👍 1 | 高 | 🟢 CLI 与 Control UI 重复实现，提取 SDK 合理 | [#49178](https://github.com/openclaw/openclaw/issues/49178) |

**PR 侧信号**：Nacos 配置中心（#49841）、SecretRef（#73822）、归档会话读取（#73883）表明 **企业部署、安全合规、运维可观测性** 是近期产品优先级。

---

## 7. 用户反馈摘要

### 😤 核心痛点

| 场景 | 原声摘录 | Issue |
|:---|:---|:---|
| **Docker "开箱即败"** | "官方 Docker 容器运行 `openclaw onboard`，选 openai-whisper 直接报 `brew not installed`" | [#14593](https://github.com/openclaw/openclaw/issues/14593) |
| **升级恐惧** | "4.22→4.26 显著变慢，blocker 级 regression" | [#73501](https://github.com/openclaw/openclaw/issues/73501) |
| **配置模型失效** | "按文档放 agentDir 的 SOUL.md 完全没效果，只有 workspace 目录生效" | [#29387](https://github.com/openclaw/openclaw/issues/29387) |
| **信任崩塌** | "Agent 说邮件已发送、给了 id，但服务器根本没收到" | [#41304](https://github.com/openclaw/openclaw/issues/41304) |
| **工程信任危机** | "这位 wangtao 是谁？hardcode 个人路径居然被合并发布了" | [#51429](https://github.com/openclaw/openclaw/issues/51429) |

### 😊 正向反馈（隐含于需求表达）

- 用户深度使用多通道（Feishu/Telegram/WhatsApp/Discord）并主动提交边缘 case
- 企业用户推动 Nacos、SecretRef 等企业级功能，表明 OpenClaw 进入生产环境
- 社区贡献者（@VACInc 等）持续交付实时语音等前沿能力

---

## 8. 待处理积压

### ⏰ 长期未响应的高价值 Issue/PR（提醒维护者关注）

| Issue/PR | 创建时间 | 最后更新 | 悬置天数 | 风险 | 链接 |
|:---|:---|:---|:---|:---|:---|
| **Context/state lost after unexpected compaction** | 2026-01-27 | 2026-04-29 | **92天** | Agent 无上下文窗口可见性，导致意外压缩和状态丢失，基础体验问题 | [#2597](https://github.com/openclaw/openclaw/issues/2597) |
| **Safe/Unsafe ClawdBot 模式** | 2026-02-02 | 2026-04-29 | **86天** | 沙箱安全模型讨论，Rust 重写建议，架构级决策需维护者表态 | [#6731](https://github.com/openclaw/openclaw/issues/6731) |
| **Masked Secrets** | 2026-02-06 | 2026-04-29 | **82天** | 安全红线，防止 prompt injection 提取凭证，社区 👍 最高功能请求之一 | [#10659](https://github.com/openclaw/openclaw/issues/10659) |
| **Docker skill 安装失败** | 2026-02-12 | 2026-04-29 | **76天** | 新用户 onboarding 阻断，27 评论高热度，无维护者明确方案 | [#14593](https://github.com/openclaw/openclaw/issues/14593) |
| **Feishu 消息恢复模块 PR** | 2026-03-17 | 2026-04-29 | **43天** | 飞书离线消息丢失的完整修复方案，已提交 PR #48946，未合并 | [#48946](https://github.com/openclaw/openclaw/pull/48946) |

---

## 附录：数据健康度指标

| 指标 | 数值 | 评估 |
|:---|:---|:---|
| Issue 日活跃/关闭比 | 487:13 | **37.5:1** — 关闭率极低，积压加速 |
| PR 日合并/关闭比 | 34:466 | **6.8% 日吞吐** — 审查瓶颈严重 |
|  blocker 级问题 | 1 个新增 | 性能回归，需紧急响应 |
| 无评论/无 👍 的沉默 Issue 占比 | 估算 >60% | 社区参与深度不均 |

> **建议**：维护团队需优先建立 v4.26 性能回归的专项响应，同时提升 PR 审查吞吐或引入分级合并机制，避免 466 个待合并 PR 的技术债务雪球。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析

**报告日期**：2026-04-29 | **分析范围**：10 个活跃开源项目

---

## 1. 生态全景

个人 AI 助手开源生态正处于**从"功能竞赛"向"生产就绪"转型的关键节点**。头部项目（OpenClaw、IronClaw、ZeroClaw）日均 PR 量达 30-50，但合并率分化严重（2%-83%），技术债务与审查瓶颈成为普遍挑战。多通道适配（Telegram/Discord/飞书/企业微信）已成基线能力，社区焦点正向**企业级安全合规**（SecretRef、Landlock LSM、Masked Secrets）、**长期记忆架构**（CerebroCortex、Dream Mode）和**本地/边缘推理**（OpenVINO、Ollama）迁移。语音交互、实时传输、MCP 协议等前沿能力快速落地，但稳定性回归（v4.22→v4.26 性能退化、Zig 0.16 CPU 飙高）频繁打断用户信任积累。

---

## 2. 各项目活跃度对比

| 项目 | Issues（活跃/关闭） | PRs（待合并/已处理） | 今日 Release | 合并率 | 健康度评估 |
|:---|:---|:---|:---|:---|:---|
| **OpenClaw** | 487 / 13 | 466 / 34 | v2026.4.26 | 6.8% | 🟡 **承压迭代** — 极高活跃度但审查瓶颈严重，blocker 级回归未修复 |
| **NanoBot** | 3 / 10 | 20 / 16 | 无 | 44% | 🟢 **稳健迭代** — 快速响应，Windows 平台质量为短板 |
| **Hermes Agent** | 50 / 4 | 40 / 10 | 无 | 20% | 🟡 **安全警报** — 6 个 P1-P2 安全 Issue 零修复，合并吞吐不足 |
| **PicoClaw** | 13 / 4 | 10 / 6 | 无 | 38% | 🟡 **边缘聚焦** — 硬件集成活跃，Android 成熟度显著落后 |
| **NanoClaw** | 3 / 0 | 13 / 11 | 无 | 46% | 🟢 **v2 成型期** — 渠道矩阵完备，生产阻塞项（root 崩溃、Discord 路由）待解 |
| **NullClaw** | 1 / 0 | 1 / 1 | 无 | 50% | 🟡 **修复优先** — Zig 0.16 回归阻断生产，功能 PR 积压 22 天 |
| **IronClaw** | 26 / 4 | 30 / 16 | 无 | 35% | 🟡 **架构冲刺** — Reborn 大规模落地，3 条 canary 告警需紧急响应 |
| **LobsterAI** | 3 / 0 | 24 / 23 | 无 | 49% | 🟢 **密集修复** — Gateway 稳定性集中歼灭，安全 PR 积压 34 天 |
| **Moltis** | 3 / 2 | 3 / 15 | 20260428.03 | 83% | 🟢 **高质量交付** — 合并率生态最高，功能-体验-安全三维推进 |
| **CoPaw/QwenPaw** | 25 / 18 | 11 / 20 | v1.1.5-beta.1 | 65% | 🟢 **性能攻坚** — 前端虚拟化+请求去重，会话状态管理仍为痛点 |
| **ZeptoClaw** | 0 / 0 | 15 / 0 | 无 | 0% | 🔴 **维护停滞** — 纯 Dependabot 依赖更新，零人工合并 |
| **ZeroClaw** | 16 / 4 | 43 / 1 | 无 | 2.3% | 🟡 **高积压风险** — Microkernel RFC 采纳里程碑，但合并吞吐量崩溃 |
| **TinyClaw** | — | — | — | — | ⚪ **无活动** |

> **注**：TinyClaw 过去 24 小时零活动；ZeptoClaw 15 个 PR 全部为 Dependabot 自动提交。

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 表现 | 生态对比 |
|:---|:---|:---|
| **社区规模** | 487 活跃 Issue / 466 待合并 PR，绝对数量级领先 | 2-10× 于 NanoBot、NanoClaw 等中型项目，但 IronClaw（30 PR）、ZeroClaw（43 PR）在单日产出密度上接近 |
| **技术路线** | **"全栈网关"模式**：统一 Gateway 中继多通道（Feishu/Telegram/WhatsApp/Discord），Control UI + CLI 双入口，实时语音/浏览器传输前沿能力 | 与 IronClaw（Rust 微内核/能力租赁）、Moltis（Rust+Landlock 安全沙箱）形成架构光谱两端；OpenClaw 更重"集成广度"，后者更重"安全深度" |
| **核心优势** | ① **通道生态最完整**（企业微信/飞书/钉钉本土化深度）；② **实时语音**（generic browser realtime transport）领先同代；③ **企业级功能密度**（Nacos 配置中心、归档会话、SecretRef） | NanoBot/NanoClaw 通道覆盖相近但企业功能薄；Hermes 记忆架构讨论活跃但实现滞后 |
| **结构性短板** | ① **审查吞吐量危机**：34/500 日合并比，466 PR 积压；② **稳定性信任损耗**：v4.26 性能回归、Gateway CPU 飙高、硬编码路径等工程纪律问题；③ **Docker "开箱即败"**：skill 安装依赖 Homebrew 的架构级缺陷 | Moltis（83% 合并率）、CoPaw（65%）在交付节奏上显著更可控；PicoClaw 同样受 Android 成熟度拖累 |

**定位结论**：OpenClaw 是生态中**"功能最全面、企业适配最深、但质量波动最大"**的头部项目，正面临从"快速功能扩张"向"可持续交付"转型的组织能力建设挑战。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求与信号强度 |
|:---|:---|:---|
| **🔒 安全合规与企业部署** | OpenClaw、Hermes、Moltis、ZeroClaw、LobsterAI | OpenClaw #73822 SecretRef（PII 脱敏）、Hermes 6 个安全 Issue 集中披露（SSRF/路径遍历/提权）、Moltis #866 Landlock LSM 内核沙箱、ZeroClaw #6188 `enc2:` 加密身份轮换缺陷、LobsterAI #908/#909 MCP 命令注入/技能扫描绕过（积压 34 天） |
| **🧠 长期记忆架构** | Hermes、PicoClaw、ZeroClaw、CoPaw | Hermes #7896 CerebroCortex（类脑关联网络/梦境巩固，10 评论高关注）、PicoClaw #2217 Token 统计仪表盘（记忆成本可见性）、ZeroClaw #5849 Dream Mode（睡眠记忆巩固，5 评论）、CoPaw #3905 MEMORY.md 空白（记忆系统失效痛点） |
| **🌐 多通道本土化适配** | OpenClaw、NanoBot、NanoClaw、PicoClaw、LobsterAI、CoPaw | 飞书编码（OpenClaw #48788、LobsterAI #1866、NanoBot #3502 done emoji 时机）、企业微信（NanoBot #3331、CoPaw 钉钉引用消息 #3747）、Telegram 轮询假死（OpenClaw #73884、NanoClaw #2080/#2079 熔断探索）、QQ/Napcat（NanoBot #3509） |
| **⚡ 本地/边缘推理** | PicoClaw、NanoBot、ZeroClaw、LobsterAI | PicoClaw #2703 Intel OpenVINO（CPU/GPU/NPU）、NanoBot #3513 本地 Whisper、ZeroClaw #6180 llama-server 配置失效、LobsterAI #1813 DeepSeek V4 兼容 |
| **🔧 MCP 协议生态** | NanoClaw、CoPaw、PicoClaw、IronClaw | NanoClaw #2074 MCP args 类型污染、CoPaw #3904 MCP 超时透传 + #2495 工具可视化、PicoClaw #2696 动态 HTTP Header、IronClaw Reborn 的 MCP 运行时 #3027 |
| **🎙️ 语音/实时交互** | OpenClaw、Moltis、CoPaw | OpenClaw v2026.4.26 实时语音 + Gateway 中继、Moltis #916 Voice Personas（确定性 TTS 身份）、CoPaw #3574 Whisper 替代 Web Speech API |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户画像 | 技术架构关键差异 |
|:---|:---|:---|:---|
| **OpenClaw** | 企业级多通道网关、实时语音、Control UI 可视化 | 中大型企业 IT 团队、需要飞书/钉钉/企业微信深度集成的组织 | Node.js/TypeScript 单体，Gateway 集中式中继，插件化 Skill 生态 |
| **NanoBot** | 快速扩展的通道生态（QQ/Napcat/Matrix）、本地推理兼容 | 中文社区开发者、个人极客、多平台尝鲜用户 | Python 异步架构，模块化 provider 系统，强调"开箱即用" |
| **Hermes Agent** | TUI 体验打磨、多平台网关（Telegram/Discord/Matrix/Slack） | 终端优先的开发者、偏好本地运行的隐私敏感用户 | Python，MEMORY.md/USER.md 文件级记忆，强调"可审计的本地运行" |
| **PicoClaw** | 边缘 AI/硬件集成（串口/MQTT/OpenVINO）、Android 端侧部署 | IoT 开发者、嵌入式场景、Sipeed 硬件生态用户 | Go 语言，轻量级二进制，面向资源受限设备 |
| **NanoClaw** | v2 多租户架构、智能体间中继、灾难恢复 | SaaS 化部署者、多用户协作场景 | 容器化微服务，per-agent 隔离，PostgreSQL 持久化 |
| **Moltis** | 安全沙箱（Landlock）、多源导入生态、确定性语音身份 | 企业安全合规团队、从 Claude Code/Hermes 迁移的用户 | Rust 全栈，内核级隔离，自更新机制，UX 对标主流产品 |
| **CoPaw/QwenPaw** | ACP 协议、前端性能优化、魔塔社区生态 | 中国开发者、阿里云/魔塔社区用户、需要钉钉/QQ 集成的团队 | TypeScript/React 前端重，混合存储，ACP 作为差异化协议 |
| **IronClaw** | Reborn 微内核架构、WASM/脚本运行时、能力租赁模型 | 协议实验室、NEAR 生态开发者、需要高度可扩展安全模型的团队 | Rust 微内核（ironclaw_substrate），Capability-based 安全，WebAssembly 隔离 |
| **ZeroClaw** | Microkernel 架构转型、Web 仪表盘一等公民、多智能体协作 | 自托管爱好者、Yocto/嵌入式 Linux 用户、追求架构纯粹性的贡献者 | Zig 语言，从零构建微内核，配置即代码（tenant blueprints） |
| **NullClaw** | Zig 极简实现、Cron 子代理引擎 | 系统编程爱好者、追求极致轻量的边缘部署者 | Zig 全栈，单二进制，无运行时依赖 |

**架构光谱**：IronClaw/ZeroClaw/Moltis 形成 **Rust/Zig 系统语言安全优先** 阵营；OpenClaw/NanoBot/CoPaw 形成 **TypeScript/Python 快速迭代** 阵营；PicoClaw 独占 **Go 边缘嵌入** niche。

---

## 6. 社区热度与成熟度

| 层级 | 项目 | 特征 |
|:---|:---|:---|
| **🔥 快速迭代期**（功能扩张，合并率>40%） | Moltis、CoPaw、NanoBot | Moltis 83% 合并率+功能密集交付；CoPaw 前端性能攻坚+ACP 协议扩展；NanoBot 通道/模型生态快速补全 |
| **⚡ 架构转型期**（大规模重构，合并率波动） | IronClaw、ZeroClaw、NanoClaw | IronClaw Reborn cutover 密集 PR 但 canary 告警；ZeroClaw Microkernel RFC 采纳但合并率 2.3%；NanoClaw v2 渠道矩阵成型但生产阻塞项待解 |
| **🛠️ 质量巩固期**（修复优先，功能积压） | OpenClaw、NullClaw、PicoClaw | OpenClaw v4.26 回归+Gateway 稳定性；NullClaw Zig 0.16 生产回归；PicoClaw Android 质量短板 |
| **🚨 安全警报期**（漏洞集中暴露，响应滞后） | Hermes、LobsterAI | Hermes 6 安全 Issue 零 fix PR；LobsterAI #908/#909 安全 PR 积压 34 天 |
| **💤 维护停滞期**（零人工活动） | ZeptoClaw、TinyClaw | ZeptoClaw 纯 Dependabot；TinyClaw 完全静默 |

---

## 7. 值得关注的趋势信号

| 趋势 | 信号来源 | 对开发者的参考价值 |
|:---|:---|:---|
| **🛡️ "安全左移"成为差异化核心** | Moltis Landlock LSM、IronClaw Reborn 能力租赁、ZeroClaw HMAC tool receipts、Hermes 安全 Issue 集中披露 | AI Agent 的**工具调用权限模型**正从"事后审计"转向"事前强制"，Capability-based 安全（Rust 阵营）vs 应用层沙箱（Node.js/Python 阵营）将形成长期架构分歧。建议新入局者优先评估 `landlock`/`seccomp`/`pledge` 等内核机制 |
| **🧠 记忆系统从"token 预算"向"认知架构"演进** | Hermes CerebroCortex（关联网络/衰减/梦境）、ZeroClaw Dream Mode、PicoClaw Token 统计 | 简单 RAG/MEMORY.md 已触及生产力瓶颈，**类脑记忆**（稀疏激活、睡眠巩固、情绪标记）可能成为下一代差异化。关注神经科学启发的架构（如 #7896 的全息记忆 PR #17181） |
| **🔌 MCP 从"工具协议"向"Agent 互联网"升级** | CoPaw ACP 协议、NanoClaw 智能体间中继、IronClaw MCP 运行时 WASM 隔离 | MCP + ACP 的组合暗示**Agent 间标准化通信**正在形成，但协议碎片化风险（各家扩展字段不兼容）需警惕。建议贡献者向 `modelcontextprotocol.io` 上游反馈而非各自为政 |
| **📡 实时语音/浏览器传输进入主航道** | OpenClaw generic browser realtime transport、Moltis Voice Personas | 文本→语音→实时双向流的演进速度超预期，**WebRTC/DataChannel** 可能成为 Agent 交互的默认传输层，传统 HTTP 轮询架构需预留升级路径 |
| **🏭 企业部署摩擦成本显性化** | OpenClaw Docker skill 安装失败、NanoClaw root 崩溃、ZeroClaw `enc2:` 身份轮换、CoPaw Debian 非 root 冻结 | **"root 才能跑"** 和 **"重装即丢数据"** 已成为企业采纳的硬性阻断。建议所有项目将非 root 运行、配置加密备份、systemd 服务模板纳入发布基线 |
| **🌏 中文生态深度适配成为必争之地** | NanoBot QQ/Napcat、CoPaw 钉钉/QQ/魔塔、LobsterAI 有道云笔记/百度千帆/小米 Mimo、OpenClaw 飞书编码 | 中国市场特有的 IM 协议（钉钉/企业微信/飞书）和模型供应商（百度千帆/小米 Mimo/通义千问）适配深度，正从"加分项"变为"入场券"。海外项目（Hermes/Moltis）若忽视此点将丧失增长空间 |

---

*本报告基于 2026-04-29 各项目 GitHub 公开数据生成，适合用于技术选型评估、贡献优先级决策及生态投资方向判断。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-04-29

> **项目**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | **日期**: 2026-04-29 | **分析师**: AI 智能体开源项目分析师

---

## 1. 今日速览

NanoBot 今日呈现**高活跃度、快速迭代**态势：24小时内 36 个 PR 更新（20 待合并/16 已处理）、13 个 Issue 更新（10 关闭/3 活跃），无新版本发布。社区聚焦**通道生态扩展**（QQ/Napcat、WhatsApp、Matrix、企业微信修复）、**模型供应商兼容性**（Gemma/Gemini 路由、ZenMux、OpenAI extra_body）及**稳定性加固**（原子写入、会话隔离、内存优化）。维护者响应迅速，10 个 Issue 当日关闭，但 20 个待合并 PR 显示功能积压需加速 review。

---

## 2. 版本发布

**无新版本发布。** 最新版本仍为此前版本，但密集的功能 PR 暗示 patch 或 minor 版本可能临近。

---

## 3. 项目进展

### 已合并/关闭的关键 PR（16 条中的核心项）

| PR | 作者 | 进展说明 | 链接 |
|:---|:---|:---|:---|
| **#3505** feat(web_search): add olostep provider | chengyongru | **搜索能力扩展**：Olostep 搜索提供商从 nightly 回退合并至 main，补全商业搜索选项 | [PR #3505](https://github.com/HKUDS/nanobot/pull/3505) |
| **#3405** feat(web_search): add olostep provider | umerkay | 原 nightly 实现，与 #3505 形成完整 backport 闭环 | [PR #3405](https://github.com/HKUDS/nanobot/pull/3405) |
| **#3502** fix(feishu): 修复 done emoji 时机 | BarclayII | **飞书体验修复**：DONE 表情和 OnIt 移除仅在任务真正结束时触发，避免多轮 tool-call 中间状态误触 | [PR #3502](https://github.com/HKUDS/nanobot/pull/3502) |
| **#3500** feat(profiler): add module-level profiler | RongLei-intel | **性能观测基建**：模块级 profiler + span tracing，但当日被关闭，疑似由 #3501 替代 | [PR #3500](https://github.com/HKUDS/nanobot/pull/3500) |
| **#3491** feat(providers): add extra_body config | hussein1362 | **本地推理兼容性**：OpenAI 兼容端点支持透传自定义参数，解决 vLLM/LM Studio/Ollama 等场景痛点 | [PR #3491](https://github.com/HKUDS/nanobot/pull/3491) |
| **#2740** feat(cli): add --config option to channels login/status | masterlyj | **CLI 易用性**：通道管理命令支持自定义配置文件路径，多实例部署场景刚需 | [PR #2740](https://github.com/HKUDS/nanobot/pull/2740) |

**整体推进评估**：项目今日在**企业集成**（飞书、企业微信修复）、**开发者体验**（CLI config、profiler）、**基础设施兼容性**（搜索、本地推理）三个维度均有实质进展，属于**中等偏上的功能迭代日**。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| Issue | 评论 | 热度分析 | 链接 |
|:---|:---|:---|:---|
| **#217** Does it support kimi? | 6 | **供应商兼容性诉求**：用户主动提出贡献 Kimi (Moonshot) 支持，反映中文大模型生态接入需求强烈；已关闭但无明确结论，可能转化为后续 PR | [Issue #217](https://github.com/HKUDS/nanobot/issues/217) |
| **#490** 记忆系统优化计划 | 5 | **架构级关切**：中文社区核心提问，涉及长期记忆能力——NanoBot 作为"有状态的 AI 智能体"的关键差异化点；已关闭但无公开路线图回应 | [Issue #490](https://github.com/HKUDS/nanobot/issues/490) |
| **#3473** WebSocket 远程访问失败 | 3 | **部署场景痛点**：0.0.0.0 绑定后 WebSocket 连接问题，反映从本地 demo 到生产部署的 gap | [Issue #3473](https://github.com/HKUDS/nanobot/issues/3473) |

### 新兴热点 PR

| PR | 亮点 | 链接 |
|:---|:---|:---|
| **#3513** feat(audio): unify transcription providers + local Whisper | **语音基建重构**：统一转写提供商、支持本地 Whisper，解决"沉默失败"和隐私场景 | [PR #3513](https://github.com/HKUDS/nanobot/pull/3513) |
| **#3516** feat(session): automatic cleanup of expired sessions | **运维自动化**：会话过期清理，15d/24h/30m 人性化配置，长期运行实例的内存泄漏防护 | [PR #3516](https://github.com/HKUDS/nanobot/pull/3516) |

**背后诉求分析**：社区正从"能跑通"向**生产级部署**（远程访问、会话管理、内存控制）、**多模态能力**（语音转写）、**中文生态深度集成**（Kimi、QQ、企业微信）演进。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|:---|
| 🔴 **高** | **#3506** Matrix Windows 发送失败 | `WinError 123`：Matrix user_id 含冒号导致 nio store 文件路径非法，**完全阻断 Windows 用户 outbound 消息** | Open | **#3510** 已提交待合并 | [Issue #3506](https://github.com/HKUDS/nanobot/issues/3506) |
| 🔴 **高** | **#3511** sender_id 未传入 LLM 上下文 | **群聊场景身份识别失效**：Discord 群聊中无法区分不同用户，多用户家庭/团队场景核心功能断裂 | Open | 无 | [Issue #3511](https://github.com/HKUDS/nanobot/issues/3511) |
| 🟡 **中** | **#3504** restrict_to_workspace 路径逃逸 | 沙箱安全机制可被环境变量、命令替换、符号链接绕过，**安全加固需求** | Closed | 无（安全设计讨论） | [Issue #3504](https://github.com/HKUDS/nanobot/issues/3504) |
| 🟡 **中** | **#3494** history.jsonl 加载进上下文 | **Token 爆炸**：162k/65k (287%)，历史文件自身被误读为对话内容，预算机制失效 | Closed | 无明确关联 PR | [Issue #3494](https://github.com/HKUDS/nanobot/issues/3494) |
| 🟡 **中** | **#3410** v0.1.5.post2 内存暴涨 3x | 200MB → 600MB，疑似 "dream" 功能引入，**资源敏感场景回归** | Closed | 无明确关联 PR | [Issue #3410](https://github.com/HKUDS/nanobot/issues/3410) |
| 🟡 **中** | **#3488** Telegram 附件 MIME 类型错误 | `application.octet-stream` 导致 HTML 等文件无法被正确打开 | Closed | 无明确关联 PR | [Issue #3488](https://github.com/HKUDS/nanobot/issues/3488) |
| 🟢 **低** | **#3324** WinError 193 chrome-devtools-mcp | Windows 上 npx 调用失败，32/64 位应用兼容问题 | Closed | 无明确关联 PR | [Issue #3324](https://github.com/HKUDS/nanobot/issues/3324) |
| 🟢 **低** | **#3328** deepseek "failed to deserialize" | 0.1.5 → 0.1.5.post1 升级后 Telegram 消息报错 | Closed | 无明确关联 PR | [Issue #3328](https://github.com/HKUDS/nanobot/issues/3328) |

**稳定性评估**：Windows 平台有两处显著问题（Matrix #3506、MCP #3324），显示跨平台测试覆盖不足；内存与 Token 预算问题提示资源管理机制需系统性 review。

---

## 6. 功能请求与路线图信号

| 需求来源 | 内容 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| **#3512** SwarmScore 集成提案 | 为 AI Agent 引入可移植信任评分系统 | ⭐⭐☆ 观望 | 纯外部推广，0 评论，与项目核心方向关联度待验证 |
| **#3513** 语音转写统一 + 本地 Whisper | 重构音频基础设施 | ⭐⭐⭐⭐ 高 | 已有完整 PR，解决实际痛点，技术方案成熟 |
| **#3509** Napcat (QQ) 通道 | 比官方 QQ Bot 更丰富的功能 | ⭐⭐⭐⭐ 高 | PR 已提交，功能完整（图片、欢迎语、回复策略），中文社区强需求 |
| **#3507** 按提供商生成配置 | maxTokens/temperature/reasoningEffort 提供商级隔离 | ⭐⭐⭐⭐ 高 | PR 已提交，解决多模型切换时的配置摩擦 |
| **#3481** 会话级历史隔离 | 防止多通道历史混杂 | ⭐⭐⭐⭐ 高 | PR 已提交，问题描述清晰，影响所有多通道用户 |
| **#3501** Profiler + Span Tracing | 模块级性能观测 | ⭐⭐⭐☆ 中高 | PR 已提交，企业/生产场景刚需，但 #3500 被关闭需关注替代关系 |
| **#3144** AgentHiFive 集成 | MCP-backed 后端、审批流、保险库通道 | ⭐⭐⭐☆ 中高 | 长期 open PR，架构较重，需维护者深度 review |
| **#217** Kimi 支持 | Moonshot AI 中文模型 | ⭐⭐⭐☆ 中高 | 用户主动提出贡献，社区意愿强，缺官方回应 |
| **#490** 记忆系统优化 | 长期记忆架构升级 | ⭐⭐☆ 中低 | 已关闭但无实质回应，路线图信号不明 |

**下一版本信号**：通道生态（QQ、WhatsApp、Matrix 修复）、语音能力、提供商配置隔离、会话历史隔离 四项最可能进入近期 release。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 反馈来源 | 核心不满 |
|:---|:---|:---|
| **家庭/团队共享 Bot** | #3511 optingo | "bot cannot identify who is sending a message" — 群聊身份匿名化导致个性化服务不可能 |
| **远程服务器部署** | #3473 firdota | WebUI 默认 127.0.0.1，改 0.0.0.0 后 WebSocket 断裂 — 从 localhost 到 production 的鸿沟 |
| **多模型切换** | #3515 masterlyj | `reasoning_effort="none"` 在 Gemini/gemma 上 400 错误 — 配置语义跨模型不兼容 |
| **Windows 开发者** | #3506 allanpk716, #3324 zhouenxian | 路径冒号、Win32 应用兼容性 — 跨平台体验明显滞后于 Linux/macOS |
| **Token 预算失控** | #3494 z172581342 | "Context: 162k/65k (287%)" — 历史文件反噬自身，预算机制形同虚设 |
| **升级回归焦虑** | #3410 gqcao, #3328 dreo1337 | 小版本升级 (0.1.4→0.1.5.post2) 内存 3x 暴涨、序列化报错 — 稳定性信任受损 |

### 满意点

- 项目响应速度：**10/13 Issue 当日关闭**，维护者活跃
- 扩展意愿：用户主动提出贡献 Kimi 支持，社区参与度高
- 功能丰富度：多通道、多模型、搜索、语音等能力持续扩展

---

## 8. 待处理积压

| 类型 | 项目 | 天数 | 风险 | 建议动作 |
|:---|:---|:---|:---|:---|
| **PR 长期未决** | **#3144** AgentHiFive 集成 | 15 天 | 架构冲突、review 负担重 | 维护者需明确接受标准或拆分合并 |
| **PR 长期未决** | **#3331** 企业微信 WebSocket 修复 | 9 天 | 企业用户通道阻塞 | 加速 review，与 #3502 飞书修复形成企业 IM 闭环 |
| **PR 长期未决** | **#3487** 按通道进度控制 | 2 天 | 功能完整但淹没在新 PR 中 | 优先级标记，避免新功能积压 |
| **Issue 关闭无结论** | **#490** 记忆系统优化 | 76 天 | 核心架构问题被回避 | 维护者需公开路线图或转化为 discussion |
| **Issue 关闭无结论** | **#217** Kimi 支持 | 82 天 | 中文模型生态错失 | 明确贡献指南，或官方声明支持计划 |
| **Issue 关闭无结论** | **#223** 多模态支持 (stale) | 82 天 | Roadmap top item 无进展 | 更新 roadmap 状态，避免预期管理失效 |

---

*本报告基于 GitHub 公开数据自动生成，仅供项目分析与社区参考。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-04-29

---

## 1. 今日速览

Hermes Agent 今日保持**极高活跃度**，24小时内 Issues 和 PR 各更新 50 条，但**关闭率偏低**（Issues 仅关闭 4/50，PR 合并/关闭 10/50），显示社区涌入大量新反馈而维护吞吐存在瓶颈。值得关注的是，今日出现**6个安全相关 Issue**（P1-P2 级别）集中披露，涉及 SSRF 绕过、路径遍历、终端工具提权等攻击面；同时 Telegram 和 TUI 体验优化成为 PR 主力方向。无新版本发布。

---

## 2. 版本发布

**无** — 今日未发布新版本。

---

## 3. 项目进展

### 已合并/关闭的 PR（10 条中的关键项）

| PR | 作者 | 核心贡献 | 状态 |
|:---|:---|:---|:---|
| [#16396](https://github.com/NousResearch/hermes-agent/pull/16396) | Referralconsequently | **修复 macOS launchd 网关状态检测**：改用 `launchctl print` 作为真相源，避免环境变量泄漏输出 | ✅ 已合并 |
| [#17179](https://github.com/NousResearch/hermes-agent/pull/17179) | ZippyZebra75 | ~~Telegram DM 草稿流式传输~~（被 #3412 取代） | ❌ 已关闭 |
| [#17176](https://github.com/NousResearch/hermes-agent/pull/17176) | ZippyZebra75 | ~~Telegram `reply_to_mode` 配置映射~~（被 #17183 取代） | ❌ 已关闭 |

### 待合并的核心 PR（40 条中的亮点）

| PR | 作者 | 推进方向 |
|:---|:---|:---|
| [#3412](https://github.com/NousResearch/hermes-agent/pull/3412) | NivOO5 | **Telegram 原生草稿流式传输**（DM 场景），替代高频 edit 方案，解决 30次/秒限流和闪烁问题 |
| [#17188](https://github.com/NousResearch/hermes-agent/pull/17188) | OutThisLife | TUI 鼠标追踪配置对齐文档，消除 `mouse_tracking` vs `tui_mouse` 配置歧义 |
| [#17175](https://github.com/NousResearch/hermes-agent/pull/17175) | austinpickett | **TUI LaTeX → Unicode 渲染**，解决数学公式显示为原始 LaTeX 的痛点 |
| [#17180](https://github.com/NousResearch/hermes-agent/pull/17180) | crayfish-ai | **修复 `/restart` 60秒死锁**：排除调用者自身的 drain 等待 |
| [#17184](https://github.com/NousResearch/hermes-agent/pull/17184) | dorukardahan | Slack 合成顶层线程避免设置 assistant 状态，减少 API 噪音 |

**整体评估**：今日 PR 以**体验打磨**（Telegram 流式、TUI 渲染、配置一致性）和**稳定性修复**（死锁、状态检测）为主，缺乏架构级突破。安全 Issue 的 fix PR 尚未出现，存在明显缺口。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---|:---|
| [#7976](https://github.com/NousResearch/hermes-agent/issues/7976) | 4 | `gateway install --system` 指向 base Python 而非 venv，导致服务崩溃 | [链接](https://github.com/NousResearch/hermes-agent/issues/7976) |
| [#16923](https://github.com/NousResearch/hermes-agent/issues/16923) | 2 | 请求 Claude CLI 后端（类似 OpenClaw 的 `claude -p` 合法接入）| [链接](https://github.com/NousResearch/hermes-agent/issues/16923) |
| [#7914](https://github.com/NousResearch/hermes-agent/issues/7914) | 2 | Matrix 网关单向通信：能发不能收，mautrix 客户端启动异常 | [链接](https://github.com/NousResearch/hermes-agent/issues/7914) |
| [#7896](https://github.com/NousResearch/hermes-agent/issues/7896) | 2 | **CerebroCortex 记忆系统**：类脑关联网络、衰减、梦境巩固，替代 1300 token 限制 | [链接](https://github.com/NousResearch/hermes-agent/issues/7896) |
| [#17169](https://github.com/NousResearch/hermes-agent/issues/17169) | 2 | Anthropic 新 enforcement：Sonnet/Opus 4.6+ 在 Claude Max OAuth 下返回 429，Haiku 正常 | [链接](https://github.com/NousResearch/hermes-agent/issues/17169) |

### 背后诉求分析

- **合规焦虑**：#16923 反映用户对 Anthropic TOS 的谨慎态度，"legally use" 一词凸显平台政策不确定性带来的社区压力
- **记忆架构瓶颈**：#7896 获得关注说明当前 MEMORY.md/USER.md 的 token 硬上限已成为生产力瓶颈，用户需要**本地优先、语义搜索、自动知识组织**的三位一体方案
- **网关可靠性**：Matrix (#7914)、Telegram (#17063)、Discord (#17157) 的网关问题集中爆发，显示多平台适配的维护深度不足

---

## 5. Bug 与稳定性

### P1（严重，需立即处理）

| Issue | 描述 | 状态 | 链接 |
|:---|:---|:---|:---|
| [#7976](https://github.com/NousResearch/hermes-agent/issues/7976) | `gateway install --system` venv 路径错误，服务启动即崩溃 | 🔴 无 fix PR | [链接](https://github.com/NousResearch/hermes-agent/issues/7976) |
| [#7914](https://github.com/NousResearch/hermes-agent/issues/7914) | Matrix 网关接收消息完全失效 | 🔴 无 fix PR | [链接](https://github.com/NousResearch/hermes-agent/issues/7914) |
| [#7968](https://github.com/NousResearch/hermes-agent/issues/7968) | `_last_content_with_tools` 回退绕过空响应重试，导致任务静默终止 | 🔴 无 fix PR | [链接](https://github.com/NousResearch/hermes-agent/issues/7968) |
| [#17139](https://github.com/NousResearch/hermes-agent/issues/17139) | Cron `deliver=['telegram']` 无法解析投递目标 | 🔴 无 fix PR | [链接](https://github.com/NousResearch/hermes-agent/issues/17139) |
| [#8030](https://github.com/NousResearch/hermes-agent/issues/8030) | 数据库 schema 迁移无事务保护，并发初始化不安全 | 🔴 无 fix PR | [链接](https://github.com/NousResearch/hermes-agent/issues/8030) |
| [#8032](https://github.com/NousResearch/hermes-agent/issues/8032) | **安全**：terminal tool 暴露 `force=True` 参数，LLM 可绕过所有安全检查 | 🔴 无 fix PR | [链接](https://github.com/NousResearch/hermes-agent/issues/8032) |
| [#8034](https://github.com/NousResearch/hermes-agent/issues/8034) | **安全**：本地浏览器后端完全跳过 SSRF 验证 | 🔴 无 fix PR | [链接](https://github.com/NousResearch/hermes-agent/issues/8034) |
| [#8035](https://github.com/NousResearch/hermes-agent/issues/8035) | **安全**：file_tools 未阻止读取 `~/.hermes/auth.json` 和 mcp-tokens | 🔴 无 fix PR | [链接](https://github.com/NousResearch/hermes-agent/issues/8035) |

### P2（重要）

| Issue | 描述 | 状态 | 链接 |
|:---|:---|:---|:---|
| [#8029](https://github.com/NousResearch/hermes-agent/issues/8029) | 非原子 transcript 重写导致崩溃时数据丢失 | 🔴 无 fix PR | [链接](https://github.com/NousResearch/hermes-agent/issues/8029) |
| [#8038](https://github.com/NousResearch/hermes-agent/issues/8038) | `_flush_messages_to_session_db` 静默吞掉所有持久化错误 | 🔴 无 fix PR | [链接](https://github.com/NousResearch/hermes-agent/issues/8038) |
| [#8039](https://github.com/NousResearch/hermes-agent/issues/8039) | `model_metadata.py` 全局可变缓存线程不安全 | 🔴 无 fix PR | [链接](https://github.com/NousResearch/hermes-agent/issues/8039) |
| [#17157](https://github.com/NousResearch/hermes-agent/issues/17157) | Discord slash 命令同步超时 | 🔴 无 fix PR | [链接](https://github.com/NousResearch/hermes-agent/issues/17157) |
| [#17171](https://github.com/NousResearch/hermes-agent/issues/17171) | openai-codex fallback 模型名 `gpt-5-4` 应为 `gpt-5.4` | 🔴 无 fix PR | [链接](https://github.com/NousResearch/hermes-agent/issues/17171) |

### 安全专项警报 🚨

今日 **tomqiaozc** 集中披露 6 个安全 Issue（#8031-#8035 及关联），形成完整的攻击链：
- **SSRF 绕过**：DNS rebinding TOCTOU (#8033) + 本地浏览器跳过验证 (#8034)
- **权限提升**：terminal `force=True` (#8032) + symlink 绕过写拒绝列表 (#8031)
- **凭证窃取**：auth.json/mcp-tokens 可读 (#8035)

**当前无任一安全 Issue 有 fix PR，建议维护者优先响应。**

---

## 6. 功能请求与路线图信号

| Issue/PR | 方向 | 纳入可能性评估 | 链接 |
|:---|:---|:---|:---|
| #7896 CerebroCortex 记忆系统 | 类脑记忆架构（关联网络、衰减、梦境巩固） | ⭐⭐⭐ 高 — 与现有 #17181 全息记忆 PR 形成技术共振，社区需求强烈 | [链接](https://github.com/NousResearch/hermes-agent/issues/7896) |
| #16923 Claude CLI 后端 | 合规接入 Anthropic 订阅 | ⭐⭐ 中 — 需法律/政策评估，技术实现参考 OpenClaw 已有路径 | [链接](https://github.com/NousResearch/hermes-agent/issues/16923) |
| #3412 / #17179 Telegram 草稿流式 | DM 场景原生流式体验 | ⭐⭐⭐⭐ 极高 — PR 已就绪，替代方案明确，用户体验痛点清晰 | [链接](https://github.com/NousResearch/hermes-agent/pull/3412) |
| #17175 TUI LaTeX 渲染 | 数学公式可读性 | ⭐⭐⭐⭐ 极高 — PR 已开，影响面明确 | [链接](https://github.com/NousResearch/hermes-agent/pull/17175) |
| #7876 Cron 跳过上下文文件 | 脚本任务 token 优化 | ⭐⭐⭐ 高 — 改动小，收益明确（10-20k token/次） | [链接](https://github.com/NousResearch/hermes-agent/issues/7876) |
| #12688 可配置命令前缀 | Matrix/Mattermost 平台兼容 | ⭐⭐ 中 — 平台生态适配，需设计决策 | [链接](https://github.com/NousResearch/hermes-agent/issues/12688) |
| #10309 Session 级仓库固定 | 长会话代码场景连续性 | ⭐⭐⭐ 高 — 与压缩/恢复架构相关，技术债务清理 | [链接](https://github.com/NousResearch/hermes-agent/issues/10309) |

---

## 7. 用户反馈摘要

### 痛点

| 场景 | 典型反馈 | 来源 |
|:---|:---|:---|
| **配置迷雾** | "`context_window` 被静默忽略，调试两小时才发现要用 `context_length`" | [#8015](https://github.com/NousResearch/hermes-agent/issues/8015) |
| **平台命令冲突** | "Matrix 的 `/` 被平台拦截，Hermes 命令根本到不了 bot" | [#12688](https://github.com/NousResearch/hermes-agent/issues/12688) |
| **网关"假死"** | "Telegram 断网 20 次后永久离线，必须手动重启 gateway" | [#17063](https://github.com/NousResearch/hermes-agent/issues/17063) |
| **记忆碎片化** | "过夜压缩后仓库身份丢失，对话漂移" | [#10309](https://github.com/NousResearch/hermes-agent/issues/10309) |
| **OAuth 歧视** | "同样的 Claude Max 订阅，Haiku 能用 Sonnet 不能，Anthropic 搞什么" | [#17169](https://github.com/NousResearch/hermes-agent/issues/17169) |

### 满意点

- **TUI 体验持续打磨**：`/mouse` 配置对齐、LaTeX 渲染等 PR 显示交互层在进化
- **多平台覆盖广度**：Telegram/Discord/Matrix/Slack 均有活跃维护者

### 不满意点

- **错误静默**：多处 "silently ignored"、"silently swallowed" 反馈 (#8015, #8038)
- **安全感知缺失**：terminal `force=True` 长期暴露在 schema 中未被发现

---

## 8. 待处理积压

### 长期未响应的高优先级 Issue（创建 > 2 周，无维护者回复）

| Issue | 创建 | 最后更新 | 风险 | 链接 |
|:---|:---|:---|:---|:---|
| [#7976](https://github.com/NousResearch/hermes-agent/issues/7976) | 2026-04-11 | 2026-04-28 | **P1 系统服务崩溃**，影响所有 `--system` 部署 | [链接](https://github.com/NousResearch/hermes-agent/issues/7976) |
| [#7914](https://github.com/NousResearch/hermes-agent/issues/7914) | 2026-04-11 | 2026-04-28 | **P1 Matrix 网关瘫痪**，平台功能完全不可用 | [链接](https://github.com/NousResearch/hermes-agent/issues/7914) |
| [#7968](https://github.com/NousResearch/hermes-agent/issues/7968) | 2026-04-11 | 2026-04-28 | **P1 任务静默终止**，用户无法感知失败 | [链接](https://github.com/NousResearch/hermes-agent/issues/7968) |
| [#7896](https://github.com/NousResearch/hermes-agent/issues/7896) | 2026-04-11 | 2026-04-28 | 高社区兴趣（类脑记忆），无维护者介入 | [链接](https://github.com/NousResearch/hermes-agent/issues/7896) |
| [#7886](https://github.com/NousResearch/hermes-agent/issues/7886) | 2026-04-11 | 2026-04-28 | Kimi vision 工具失效，👍 2