# OpenClaw 生态日报 2026-04-14

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-04-14 00:16 UTC

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

# OpenClaw 项目动态日报 | 2026-04-14

---

## 1. 今日速览

OpenClaw 社区今日保持极高活跃度：24 小时内 **500 条 Issues** 与 **500 条 PRs** 更新，其中 Issues 新开/活跃 410 条、关闭 90 条；PRs 待合并 342 条、已合并/关闭 158 条。项目刚发布 **v2026.4.12** 质量更新，聚焦插件加载、内存与 dreaming 可靠性、本地模型选项及飞书配置优化。社区讨论热点集中在 **OAuth token 竞态条件**、**Telegram 语音转录失效**、**浏览器 CDP 连接问题** 以及多个 **模型解析回归故障**。整体项目健康度良好，但待合并 PR 积压较高（342 条），需关注合流效率。

---

## 2. 版本发布

### v2026.4.12 — openclaw 2026.4.12
- **发布日期**：2026-04-12（今日日报覆盖期内）
- **性质**：Broad quality release（质量改进版，无重大破坏性变更）
- **核心更新**：
  - **插件加载可靠性**：改进插件加载机制，减少启动失败
  - **内存与 dreaming 稳定性**：修复 memory embedding 及 dreaming 流程中的崩溃与挂起
  - **本地模型选项扩展**：新增更多本地模型配置路径
  - **飞书（Feishu）配置体验**：大幅简化 Feishu 机器人接入流程
- **QA/实验室功能**：新增 Convex 支撑的 Telegram 凭证池化租赁机制，以及 `openclaw qa credentials` 管理命令
- **迁移注意**：从 2026.4.10/2026.4.11 升级的用户建议重点验证 **browser CDP 启动** 与 **memory embedding provider** 配置，近期有多个相关回归报告

🔗 [Release v2026.4.12](https://github.com/openclaw/openclaw/releases/tag/v2026.4.12)

---

## 3. 项目进展

### 今日已合并/关闭的重要 PRs

| PR | 作者 | 说明 | 影响 |
|:---|:---|:---|:---|
| **#66223** | amittell | `feat(auth): add models auth clean command` — 新增 `openclaw models auth clean` 命令，可清理失效的 auth profile，支持 `--dry-run` 与文件锁防竞态 | 降低 OAuth 配置腐烂，提升多环境可维护性 |
| **#56964** | suboss87 | `fix(security): warn about insecure session.dmScope` — 多用户场景下 `session.dmScope="main"` 时发出安全警告 | 防止 DM 消息跨用户泄漏 |
| **#66167** | jalehman | `fix: recover reasoning-only OpenAI turns` — 修复仅含 reasoning 无可见回复的 OpenAI turn 被误判为空 turn 的问题 | 解决 GPT 风格运行"假死" |
| **#66220** | omarshahine | `docs(changelog): backfill #65447 and #65461` | 发布流程文档补全 |
| **#63511** | jetd1 | `fix(tts): allow OpenClaw temp directory paths in reply media normalizer` — TTS 音频附件因 `/tmp/openclaw/` 路径被过滤而丢失的问题 | 恢复 Telegram/WhatsApp 等渠道的 TTS 语音输出 |
| **#66216** | jinalex | `test(voice-call): add replay quality harness baseline` | 语音通话质量回归测试基线 |
| **#65461** | omarshahine | `fix: sendPolicy deny should suppress delivery, not inbound processing` — `sendPolicy: deny` 从阻断入站处理改为仅抑制投递 | 修复 #53328，代理可正常读取被 deny 的消息 |

**整体推进评估**：今日合并 PR 以 **稳定性修复、安全加固、发布流程完善** 为主，功能侧有 Bluesky skill (#65972) 和 You.com 插件 (#64989) 待审，预计将在未来 1-2 个版本周期落地。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论 | 核心诉求 |
|:---|:---|:---|
| **#26322** — OAuth token refresh race condition causes spurious failovers (`refresh_token_reused`) | 21 | 多 agent 共享同一 OAuth profile 时并发刷新 token 导致竞态，诉求是**引入分布式锁或 token 刷新队列** |
| **#64799** — Volcengine Coding Plan model resolves to "Unknown model: volcengine-plan/ark-code-latest" on macOS 26.4.1 | 19 | 火山引擎模型别名解析回归，用户急需**模型映射表热修复** |
| **#17101** — Telegram Voice Messages Not Transcribed | 14 | 语音消息未被自动转录为文本，影响 Telegram 语音交互体验 |
| **#31486** — image tool does not support custom providers configured in openclaw.json | 13 | 自定义 vision provider 无法被 `image` 工具识别，反映**工具层与配置层模型解析逻辑不一致** |
| **#62496** — Telegram DM voice-note transcription silently fails in 4.5 | 13 | 与 #17101 同源，进一步定位到 `normalizeAttachments` 过滤掉音频附件的代码路径 |
| **#32473** — control ui requires device identity (use HTTPS or localhost secure context) | 12 | VPS/Docker 部署 Control UI 时 HTTPS/安全上下文要求造成使用门槛，诉求**放宽或提供绕过方案** |
| **#34644** — make embedded agent LLM-request timeout configurable (currently hardcoded 15s) | 10 | 上游高延迟时 15s 硬编码超时导致整条 fallback 链失败，诉求**配置化超时** |

**背后诉求分析**：社区当前最焦虑的三类问题是 **(1) 模型解析/别名映射的频繁回归**、**(2) Telegram 语音/媒体处理链路的质量**、**(3) OAuth 与认证在多 agent 场景下的可靠性**。这些问题直接影响生产环境的稳定性。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 优先级 | Issue | 描述 | 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | **#26322** | OAuth token refresh 竞态条件导致误故障转移 | 开放，无 fix PR |
| 🔴 **高** | **#65701** | Telegram provider **重复发送消息**（回归） | 开放，今日新报 |
| 🔴 **高** | **#65706** | `openclaw nodes status` 与 `openclaw nodes list` 不同步（2026.4.9 回归，标记为 **Beta blocker**） | 开放，无 fix PR |
| 🔴 **高** | **#62762** | Gateway 1006 closed-before-connect 在 2026.4.12 仍可复现 | 开放，无 fix PR |
| 🟡 **中** | **#64799** | Volcengine Coding Plan "Unknown model" | 开放，无 fix PR |
| 🟡 **中** | **#62496** / **#17101** | Telegram 语音转录静默失败 | 开放，无 fix PR |
| 🟡 **中** | **#65990** / **#64978** / **#65093** / **#65528** | **Chrome CDP WebSocket 连接问题集群**（managed browser 启动失败、attachOnly 被忽略、进程静默退出） | 开放，#66224 发布同步可能含部分修复 |
| 🟡 **中** | **#64238** | Qwen `qwen/qwen3.6-plus` 在 2026.4.9 报 Unknown model（2026.4.5 正常） | 开放，无 fix PR |
| 🟡 **中** | **#48479** / **#49885** | Google Vertex auth 回退到 API key 而非 ADC/Bearer；ADC 有效时仍报无凭证 | 开放，无 fix PR |
| 🟡 **中** | **#57099** | 显式 `api ollama` provider 配置在 2026.3.28+ 报 `No API provider registered` | 开放，无 fix PR |
| 🟡 **中** | **#58115** | `voice_call` 工具在非 gateway 进程调用时 `EADDRINUSE` | 开放，无 fix PR |
| 🟢 **低** | **#58986** | Discord slash commands 返回 "✅ Done." 而非实际输出 | 开放，PR #66226 已提出修复方案 |

**修复进展**：PR **#66226**（Telegram status 命令路由修复）和 **#66225**（`<final/>` 自闭合标签解析）今日新开，分别针对交互阻塞和标签解析边缘情况。

---

## 6. 功能请求与路线图信号

| Issue/PR | 内容 | 纳入可能性评估 |
|:---|:---|:---|
| **#55342** — Behavioral reputation for OpenClaw skills | 在身份验证之外增加技能行为信誉层，应对恶意技能 | 长期架构议题，短期难落地 |
| **#65972** — Add Bluesky skill (CLI + MCP server) | 新增 Bluesky 社交媒体技能 | **高**，PR 已开且功能完整 |
| **#64989** — You.com plugin for web search, research, content extraction | 集成 You.com 搜索与研究 API | **高**，PR 已开，且 You.com 提供免费 tier |
| **#66168** — MCP Apps protocol extension (tools, resources, UI meta) | 为 Gateway 客户端提供 MCP 工具/资源的 WebSocket RPC 表面 | **高**，与 Bluesky/You.com 等插件战略一致 |
| **#30215** — Support Amazon Bedrock API Key (Bearer Token) Authentication | Bedrock 除 AWS SDK 外支持 API Key | **中**，PR #64512 已增加 `service_tier` 参数，但 API Key 认证尚无 PR |
| **#34644** — Configurable embedded agent LLM timeout | 将 15s 硬编码超时改为可配置 | **中**，社区呼声高，改动面小 |
| **#22358** — Post-subagent completion extension hook | 子 agent 完成后扩展钩子 | **低**，已 stale，需求较垂直 |

---

## 7. 用户反馈摘要

### 真实痛点

- **"Unknown model" 疲劳**：多个用户报告不同 provider（Volcengine、Qwen、Ollama、image tool）在版本升级后突然报 Unknown model，"配置未变，升级即坏" 是高频抱怨
- **Telegram 体验断裂**：语音消息不转录、重复发送、status 命令被阻塞，使 Telegram 成为当前最"脆弱"的渠道
- **Browser/CDP 心累**：macOS 上 managed Chrome 启动问题反复出现，用户不得不退回 manual CDP 方案
- **认证配置腐烂**：OAuth refresh token 丢弃、多 agent 共享 profile 竞态、auth profile failover 级联失败，反映认证生命周期管理尚未成熟

### 满意之处

- **v2026.4.12 的 Feishu 优化** 获得正面反馈，配置流程明显简化
- **本地模型选项扩展** 受到私有化部署用户欢迎

### 不满意之处

- 部分用户认为 **"质量更新"版本仍携带回归**（如 2026.4.9 的 nodes status、2026.4.12 的 1006 连接问题），对版本稳定性信心有所动摇
- **342 条待合并 PR** 让社区贡献者感到合流周期过长

---

## 8. 待处理积压

### 长期未响应的重要 Issue/PR（stale 标记或高价值）

| 条目 | 创建时间 | 说明 | 提醒 |
|:---|:---|:---|:---|
| **#33557** — Telegram long-polling health check watchdog | 2026-03-03 | 为 Telegram 长轮询添加健康检查看门狗，解决连接静默卡死 | 高价值稳定性改进，已开放 42 天 |
| **#33556** — Sandbox 60s timeout to prevent hung Docker | 2026-03-03 | 防止 Docker 守护进程挂起阻塞整个消息管道 | 基础设施韧性关键修复 |
| **#33551** — Telegram `groupPolicy: "members"` | 2026-03-03 | 自动验证群组成员身份，减少私域群配置负担 | 渠道安全体验双提升 |
| **#10356** — Typecast TTS provider | 2026-02-06 | 亚洲语言情感语音合成，差异化功能 | 已开放 67 天，建议评估合并窗口 |
| **#32495** — Support switching agents in Control UI | 2026-03-03 | 多 agent 用户在 Web UI 切换需求，今日关闭（stale） | 如产品路线支持多 agent，建议 reopen 评估 |

---

**日报编制说明**：本报告基于 2026-04-14 00:00–23:59（UTC）GitHub 公开数据生成。所有链接指向 `https://github.com/openclaw/openclaw`。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析
**分析日期：2026-04-14**

---

## 1. 生态全景

当前个人 AI 助手开源生态呈现"一超多强、垂直分化"格局：**OpenClaw 以绝对体量领跑**（单日 500 Issues/500 PRs），形成事实上的技术参照基准；**Hermes Agent、CoPaw(QwenPaw)、ZeroClaw、IronClaw 构成第二梯队**，在特定场景（移动端、中文市场、安全优先、企业级）展开差异化竞争；**Moltis、NanoBot、PicoClaw、NanoClaw、LobsterAI 等处于高速成长期**，通过渠道扩张或架构重构抢占细分市场。整体生态共同面临**多平台适配碎片化、模型解析回归频发、长运行可靠性不足**三大挑战，同时**Web UI、本地模型支持、MCP/插件扩展**正成为下一代产品的标配能力。

---

## 2. 各项目活跃度对比

| 项目 | 今日 Issues | 今日 PRs | 版本发布 | 健康度评估 |
|:---|:---:|:---:|:---|:---|
| **OpenClaw** | 500（新开/活跃 410，关闭 90） | 500（待合并 342，已合并/关闭 158） | v2026.4.12（质量更新） | 🔶 活跃但 PR 积压严重（342 待合并），合流效率是瓶颈 |
| **Hermes Agent** | 50 | 50（待合并约 25） | v0.9.0 "The everywhere release" | 🔶 功能跃迁强劲，新平台 bug 密集，Issue 积压超 1000 需治理 |
| **CoPaw (QwenPaw)** | 40（28 新开/活跃，12 关闭） | 50（30 待合并，20 已合并/关闭） | v1.1.1-beta.1 | 🔶 品牌迁移期阵痛，但 Channel 修复和模型发现能力推进扎实 |
| **ZeroClaw** | 21（18 新开/活跃，3 关闭） | 50（28 待合并，22 已合并/关闭） | 无 | 🔶 架构突破（编排系统、WASM 插件）与安全漏洞并存，S0/S1 修复滞后 |
| **IronClaw** | 45（38 新开/活跃，7 关闭） | 50（41 待合并，9 已合并/关闭） | 无 | 🔶 v0.25.0 staging 冲刺期，Web UI 资源泄漏等 P0 响应极快 |
| **Moltis** | 7（全部关闭） | 18（全部闭环） | 20260413.01 + 20260413.03 | 🟢 **当日零积压**，发布日响应速度优秀，但回归测试需加强 |
| **NanoBot** | 44（18 新开/活跃，26 关闭） | 58（28 待合并，30 已合并/关闭） | 无 | 🟢 修复密集，Heartbeat Token 膨胀等架构债务尚存 |
| **PicoClaw** | 5 | 41（29 待审，12 已合并/关闭） | v0.2.6-nightly | 🟢 工程化提速，Channel 多实例+AgentLoop 并行标志架构升级 |
| **NanoClaw** | 5（4 开 1 关） | 13（8 待合并，5 已合并/关闭） | 无 | 🟢 企业工作流（邮件、语音、支付）扩展积极，容器稳定性待巩固 |
| **LobsterAI** | 1 | 22（7 待合并，15 已合并/关闭） | 2026.4.13 | 🟢 发布日集中交付，OpenClaw 同步问题修复密集，用户侧声音弱 |
| **NullClaw** | 3（全部新开） | 2（全部待合并） | 无 | 🔴 中等活跃度，3 个核心功能 bug 全部 open，修复响应慢 |
| **TinyClaw** | 0 | 0 | 无 | ⚪ 24 小时无活动 |
| **ZeptoClaw** | 0 | 0 | 无 | ⚪ 24 小时无活动 |

---

## 3. OpenClaw 在生态中的定位

### 核心优势
- **规模统治力**：单日 1000 条 Issues+PRs 更新，社区体量是第二梯队的 **10-20 倍**，插件生态、渠道覆盖、模型支持最为完备
- **基础设施深度**：拥有独立的 `gateway` 架构、MCP Bridge、CDP 浏览器托管、多租户 OAuth 体系，是少数具备**企业级部署底座**的开源项目
- **版本发布节奏稳定**：月度质量更新（v2026.4.12）+ 实验室功能并行，平衡稳定性与创新

### 技术路线差异
| 维度 | OpenClaw | 生态对比 |
|:---|:---|:---|
| **架构哲学** | 中心化 Gateway + 插件化 Skills | Hermes/ZeroClaw 偏向去中心化多代理编排；NanoClaw 强调容器隔离 |
| **扩展机制** | 原生 TypeScript/JavaScript 插件 + MCP | ZeroClaw 押注 WASM 沙箱；Moltis 采用 Rust-native + WASM 混合 |
| **渠道策略** | 全渠道覆盖（Telegram、Discord、Slack、飞书、WhatsApp 等） | CoPaw 深耕中文 IM（钉钉、QQ、微信）；NanoClaw 聚焦 B2B（邮件、语音） |
| **本地/隐私优先** | 支持本地模型选项扩展，但非核心叙事 | Moltis、NanoBot、PicoClaw 将本地 Whisper/TTS 作为差异化卖点 |

### 社区规模对比
OpenClaw 的社区吞吐量相当于 **Hermes + CoPaw + ZeroClaw + IronClaw + Moltis + NanoBot 的总和**。但这种体量也带来了 **342 条待合并 PR 的积压问题**——合流周期过长已开始挫伤贡献者积极性，这是中小项目尚未遇到的"幸福的烦恼"。

---

## 4. 共同关注的技术方向

### 方向一：Web UI / 浏览器交互入口
- **涉及项目**：Hermes (#501)、NanoBot (#3030/#2972)、IronClaw (#1852 用户体验相关)、Moltis（会话归档 #701）、CoPaw（控制台优化）
- **具体诉求**：从纯 CLI/IM 渠道向"本地浏览器界面"扩展，要求 Streaming、Artifacts、移动端适配

### 方向二：模型解析与 Provider 兼容性
- **涉及项目**：OpenClaw（Volcengine #64799、Qwen #64238、Ollama #57099）、NanoBot（Gemini #2185、自定义 provider 路由）、NullClaw（OpenRouter #809）、CoPaw（vLLM #2897）
- **具体诉求**："配置未变，升级即坏"的 Unknown model 疲劳；OpenAI 兼容端点的稳定性；模型自动发现/热修复映射

### 方向三：语音与本地模型支持
- **涉及项目**：OpenClaw（本地模型选项扩展）、Moltis（本地 Whisper/OpenAI TTS #700、Voicebox #199）、NanoBot（Whisper 语言参数 #2756/#3116）、PicoClaw（OGG Opus 解码 #2504）
- **具体诉求**：隐私优先部署、本地 STT/TTS 端到端、多语言语音转写

### 方向四：多代理编排与子代理系统
- **涉及项目**：ZeroClaw（智能团队/子代理编排 #2420）、Hermes（委托任务分层 #9255）、NanoClaw（容器化多 bot #1765）、IronClaw（Agent 高级能力 #84）
- **具体诉求**：从单 agent 对话向多 agent 协作演进，需要运行时路由、任务分层、权限隔离

### 方向五：安全策略与沙箱机制
- **涉及项目**：ZeroClaw（S0 安全漏洞 #5698、WASM 插件 #5231）、PicoClaw（Agent Shield #2313、exec guard 误报 #1042）、NanoClaw（PII 脱敏 #1563）、OpenClaw（session.dmScope 安全警告 #56964）
- **具体诉求**：工具执行的安全 guard 精确化、插件沙箱化、多租户数据隔离

### 方向六：认证与 OAuth 生命周期管理
- **涉及项目**：OpenClaw（OAuth token refresh 竞态 #26322）、IronClaw（Google OAuth #2229/#2391）、Hermes（Moonshot 国内线路 #8856）、ZeroClaw（原生 OAuth 扩展 #5601）
- **具体诉求**：多 agent 共享 profile 的并发安全、token 刷新队列、第三方 OAuth 的拼写/配置正确性

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|:---|:---|:---|:---|
| **OpenClaw** | 全功能、全渠道、企业级部署 | 进阶开发者、企业 IT、插件开发者 | Node.js/TS 生态，中心化 Gateway，MCP 原生 |
| **Hermes Agent** | 移动端 + 跨平台消息（iMessage、WeChat、Termux） | 个人极客、移动优先用户 | Python 生态，Fast 模式，TUI 为主 |
| **CoPaw (QwenPaw)** | 中文 IM 深度集成、低门槛 Agent 构建 | 中国开发者、中小企业 | Python，AgentScope 底座，品牌背靠阿里 |
| **ZeroClaw** | 安全优先、Rust 性能、WASM 扩展 | 安全敏感型企业、Rust 开发者 | Rust 全栈，ClawGuard 安全扫描，WASM 插件 |
| **IronClaw** | 企业 SaaS、多租户、技能市场 | 企业团队、技能分发平台 | Rust + TS，Near AI 生态，RBAC/SSO 优先 |
| **Moltis** | 本地优先、语音端到端、Rust 工程化 | 隐私优先用户、自托管爱好者 | Rust 全栈，模块原子化重构，cargo feature 控制 |
| **NanoBot** | 轻量、可嵌入、自定义扩展 | 个人开发者、开源爱好者 | Python，Heartbeat/Dream 记忆机制 |
| **NanoClaw** | 容器隔离、B2B 通信（邮件/语音/支付） | 企业工作流集成商 | Node.js + Docker，x402 微支付实验 |
| **PicoClaw** | 多实例/多租户、Channel 并发 | 中小型 SaaS、多机器人运营者 | Go，Channel 多实例重构，AgentLoop 并行 |
| **LobsterAI** | 桌面端封装（Electron）、OpenClaw 同步 | 中文桌面用户、企业办公 | Electron + OpenClaw 内核，有道背书 |

---

## 6. 社区热度与成熟度分层

### 🔥 快速迭代阶段（功能扩张为主）
| 项目 | 特征 |
|:---|:---|
| **Hermes Agent** | v0.9.0 "everywhere" 大版本后，新平台 bug 井喷，处于扩张后的消化期 |
| **CoPaw** | 品牌迁移+Provider 自动发现+Channel 修复三线并行，beta 版本密集 |
| **IronClaw** | v0.25.0 staging 冲刺，v2 引擎+企业功能（RBAC/SSO）同步推进 |
| **NanoClaw** | 企业通信渠道（邮件、Matrix、Twilio）和记忆系统快速补全 |

### 🛠 质量巩固阶段（修复与架构还债为主）
| 项目 | 特征 |
|:---|:---|
| **OpenClaw** | 质量更新月，聚焦插件加载、内存、 dreaming 可靠性，但 PR 积压需治理 |
| **Moltis** | 当日零积压的高效修复模式，但连续版本回归提示测试覆盖需加强 |
| **NanoBot** | Heartbeat Token 膨胀、Dream 数据安全等长期架构问题进入还债期 |
| **PicoClaw** | Channel 多实例+AgentLoop 并行标志从功能补全转向工程化深化 |

### ⚠️ 风险关注阶段（活跃度不足或核心 bug 未修）
| 项目 | 特征 |
|:---|:---|
| **ZeroClaw** | 功能突破（WASM、编排）与 S0/S1 安全漏洞并存，修复速度落后报告速度 |
| **NullClaw** | 搜索、子代理、OpenRouter 三个核心功能同日报 bug 且全部 open，有流失风险 |
| **TinyClaw / ZeptoClaw** | 24 小时零活动，可能已进入维护停滞或项目早期休眠 |

### 🟢 稳健发布阶段
| 项目 | 特征 |
|:---|:---|
| **LobsterAI** | 发布日集中交付模式，OpenClaw 同步修复密集，但用户侧社区运营较弱 |

---

## 7. 值得关注的趋势信号

### 信号 1："本地优先"从边缘需求走向主流配置
Moltis 的本地 Whisper 向导、OpenClaw 的本地模型选项扩展、NanoBot 的 Ollama 适配焦虑，共同说明**用户对数据不出境、模型可离线的诉求已从极客圈层扩散到常规配置**。AI 智能体开发者应将本地模型路径视为与云端 API 同等重要的 first-class citizen。

### 信号 2：MCP 正在成为插件生态的事实标准
OpenClaw 的 MCP Bridge、IronClaw 的 MCP/WASM 工具名规范化、Moltis 的 MCP Schema 清理、CoPaw 的 ACP 外部 Agent 委托，显示**Model Context Protocol 正快速取代各项目私有的插件接口**。尚未接入 MCP 的项目将面临生态隔离风险。

### 信号 3："语音+IM"的渠道体验差距决定用户留存
Telegram 语音转录失效（OpenClaw #17101/#62496、NanoBot #100）、QQ/微信阻塞（CoPaw #3136）、Matrix E2EE 崩溃（ZeroClaw #4657）、飞书按钮超时（Hermes #8764）——**渠道适配的粗糙感已成为用户流失的首要原因**。智能体产品的竞争焦点正从"能对话"转向"全渠道体验一致"。

### 信号 4：长运行可靠性是生产部署的生死线
NanoBot Heartbeat 56 万 Token 单次消耗、CoPaw 批量任务自动中断、OpenClaw OAuth token 竞态、NanoClaw 容器静默失败，揭示**Agent 从"演示可用"到"7×24 可靠运行"存在巨大鸿沟**。状态管理、错误恢复、成本熔断、会话持久化将是下一代架构的核心战场。

### 信号 5：品牌/合规治理意外成为技术项目风险点
CoPaw → QwenPaw 的迁移混乱、PicoClaw 的 CLA 协议主体错误（#2506）、Hermes 的 `claw cleanup` 数据丢失风险，说明**开源项目的法律合规与用户体验治理已成为与技术同等重要的信任基础设施**。企业用户在评估采用时，对此类信号的敏感度正在上升。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-04-14

---

## 1. 今日速览

NanoBot 社区今日保持**高活跃度**：24小时内 Issues 更新 44 条（18 新开/活跃，26 关闭），PR 更新 58 条（28 待合并，30 已合并/关闭），**无新版本发布**。项目维护节奏稳健，Bug 修复与功能迭代并行推进，但仍有部分核心问题（如心跳机制 Token 膨胀、模型路由缺失）待深度解决。Web UI 与 Dream 钩子等前沿功能正在社区 PR 中积极探索。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日已合并/关闭的 30 个 PR/Issues 中，以下进展值得关注：

| 进展 | 说明 | 链接 |
|:---|:---|:---|
| **Agent 注入队列安全修复** | PR #3110 / #3111 修复了 Agent 在 LLM 错误、工具错误或空响应退出时未清空注入队列的问题，避免残留消息被重复发布为独立消息，消除重复/混乱回复。 | [PR #3110](https://github.com/HKUDS/nanobot/pull/3110) · [PR #3111](https://github.com/HKUDS/nanobot/pull/3111) |
| **OpenAI 兼容层协议对齐** | Issue #2757 关闭，`openai` 注册表项现已正确设置 `supports_max_completion_tokens`，避免向新模型发送废弃的 `max_tokens`。 | [Issue #2757](https://github.com/HKUDS/nanobot/issues/2757) |
| **Telegram 稳定性多项修复** | 合并了长消息拆分（#2650）、话题/回复上下文保留（#2546）、"Message text is empty" 崩溃修复（#100），显著提升 Telegram 通道可靠性。 | [PR #2650](https://github.com/HKUDS/nanobot/pull/2650) · [PR #2546](https://github.com/HKUDS/nanobot/pull/2546) · [Issue #100](https://github.com/HKUDS/nanobot/issues/100) |
| **Windows exec 工具回归修复** | Issue #2868 关闭，撤销了强制使用 `bash` 的提交，恢复 Windows 原生兼容性。 | [Issue #2868](https://github.com/HKUDS/nanobot/issues/2868) |
| **内存/Dream 安全修复** | Issue #2957 关闭，修复了 Dream 过程可能完全覆盖 `MEMORY.md` 为空白文件的严重 Bug。 | [Issue #2957](https://github.com/HKUDS/nanobot/issues/2957) |
| **语音转写语言参数扩展** | PR #2756 合并，为 Groq Whisper 增加 `transcriptionLanguage` 配置；OpenAI Whisper 同类功能待审（PR #3116）。 | [PR #2756](https://github.com/HKUDS/nanobot/pull/2756) |

**整体判断**：项目在通道稳定性、Agent 核心循环健壮性、多平台兼容性方面取得实质性进展。

---

## 4. 社区热点

| 排名 | 议题 | 评论 | 热度分析 |
|:---|:---|:---|:---|
| 🔥 #1 | **Issue #2375** — Heartbeat 会话历史导致单次 560k Token 巨额消耗 | 11 | 核心架构问题。心跳任务每 30 分钟执行一次，但 `heartbeat.jsonl` 无限制累积历史（用户案例达 600+ 行），导致每次心跳一次性烧掉 **56 万 Token**。诉求明确：需要心跳历史的截断、摘要或分片机制。已关闭，但需观察是否有后续根治性 PR。 |
| 🔥 #2 | **Issue #2185** — 0.1.4 → 0.1.4post5 升级后 gemini-3-flash-preview 不可用 | 8 | 回归问题，涉及 provider 注册/路由变更对自定义 OpenAI 兼容端点的兼容性破坏。用户通过 Ollama 桥接 Gemini，升级后模型解析失败。反映出自定义 provider 的稳定性仍是痛点。 |
| 🔥 #3 | **Issue #2868** — `exec` 工具在 Windows 上强制使用 bash | 5 | 典型的跨平台回归，一个 commit 打破了 Windows 用户体验，WSL 用户甚至遭遇 RPC 错误。已快速关闭，说明社区对平台兼容性敏感。 |
| 🔥 #4 | **PR #3030 / PR #2972** — Web UI 双方案竞争 | 活跃 | 两个独立的 Web UI PR 同时推进：#3030 强调"无 NPM、安全默认、为移动 App 奠基"；#2972 提供完整的 `nanobot web` 命令与现代化管理界面。社区对浏览器/移动端交互入口需求强烈。 |

**链接汇总**：
- [Issue #2375](https://github.com/HKUDS/nanobot/issues/2375)
- [Issue #2185](https://github.com/HKUDS/nanobot/issues/2185)
- [Issue #2868](https://github.com/HKUDS/nanobot/issues/2868)
- [PR #3030](https://github.com/HKUDS/nanobot/pull/3030)
- [PR #2972](https://github.com/HKUDS/nanobot/pull/2972)

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 | Fix PR |
|:---|:---|:---|:---|
| 🔴 **Critical** | **Issue #2957** — Dream 覆盖 `MEMORY.md` 为空白文件，无 Git 备份可恢复 | 已关闭 | 待确认具体修复 PR |
| 🔴 **Critical** | **Issue #2375** — Heartbeat 历史无限累积导致单次 560k Token，成本爆炸 | 已关闭 | 无明确根治 PR |
| 🟡 **High** | **Issue #2826** — `restrictToWorkspace=true` 仍允许删除任意路径文件 | 已关闭 | 安全边界需持续审计 |
| 🟡 **High** | **Issue #2713** — v0.1.4.post6 响应速度从 1s 退化到 3min | 已关闭 | 疑似与某次提交引入的额外开销有关 |
| 🟡 **High** | **Issue #3028** — 心跳触发时重复创建定时任务，导致消息重复发送 | **Open** | 无 |
| 🟡 **High** | **Issue #2185** — 小版本升级破坏 gemini-3-flash-preview | **Open** | 无 |
| 🟢 **Medium** | **Issue #2868** — Windows `exec` 强制 bash | 已关闭 | 已回滚 |
| 🟢 **Medium** | **Issue #100** — Telegram "Message text is empty" 崩溃 | 已关闭 | 已修复 |
| 🟢 **Medium** | **Issue #3074** — message 工具跨 channel 发送成功但无实际接收 | **Open** | 无 |

**稳定性信号**：核心 Agent 循环和通道适配器的修复密集落地，但 **Heartbeat 架构缺陷** 和 **Dream 数据安全** 两类问题显示长期运行场景下的可靠性仍需加强。

---

## 6. 功能请求与路线图信号

| 功能请求 | 状态 | 纳入可能性分析 |
|:---|:---|:---|
| **Issue #3070** — 模型路由（类似 OpenRouter），按任务复杂度自动切换性价比模型 | Open | **高可能性**。与成本控制强相关，社区呼声高，实现路径清晰（自建模型库 + 任务分级）。 |
| **PR #3030 / PR #2972** — Web UI / 浏览器与移动端界面 | Open | **高可能性**。两个 PR 同时推进，显示这是官方或社区重点方向，预计下一版本会合并其一。 |
| **PR #3104** — Dream 完成后 Hook，支持外存记忆（ Lark Docs、腾讯文档等） | Open | **中高可能性**。Issue #3103 有明确场景，PR 已提交，改动面较小，易合并。 |
| **PR #3021** — 防止 Dream `edit_file` 损坏导致 SOUL.md / USER.md 膨胀 | Open | **高优先级**。直接修复数据腐败问题，与 Dream 稳定性挂钩。 |
| **Issue #3096** — 工具调度应信任 LLM 的并行工具调用，减少串行瓶颈 | Open | **中长期**。涉及 Tool 基类静态属性（`read_only`/`exclusive`/`concurrency_safe`）的架构调整，需要审慎设计。 |
| **PR #3116** — Whisper STT `language` 参数扩展至 OpenAI | Open | **高可能性**。Groq 侧已合并（#2756），OpenAI 侧对称实现，合并阻力小。 |
| **PR #3114** — 新增 LongCat Provider | Open | **中可能性**。标准的 OpenAI 兼容注册，测试覆盖完整，通常易通过。 |

---

## 7. 用户反馈摘要

从今日 Issues 评论中提炼的真实声音：

**😫 痛点**
- **成本控制焦虑**：Heartbeat 机制在长期使用下 Token 消耗失控，用户直言 "ENORMOUS token usage"（Issue #2375）。
- **升级恐惧**：小版本升级（0.1.4 → 0.1.4post5/6）多次引入回归，破坏原有工作流（Issue #2185、#2713、#2562）。
- **数据安全感缺失**：`MEMORY.md` 被 Dream 覆写为空白且无任何备份机制，用户对核心记忆持久化失去信心（Issue #2957）。
- **本地/离线场景支持薄弱**：网络隔离环境下 LiteLLM、tiktoken 首次启动超时，配置开关无效（Issue #2145）；Ollama 本地运行成功但 NanoBot 请求 502（Issue #3069）。

**😊 满意/期待**
- **自定义扩展需求旺盛**：用户积极配置自定义端点、自定义 provider、自定义 Dream Hook，显示 NanoBot 的开放架构吸引了大量进阶用户。
- **中文社区活跃**：钉钉、QQ、飞书等通道的 Bug 反馈和功能请求密集，说明在国内 IM 集成场景有显著 adoption。

---

## 8. 待处理积压

以下 Issue/PR 已长期活跃或涉及核心架构，建议维护者优先关注：

| 项目 | 创建时间 | 当前状态 | 提醒 |
|:---|:---|:---|:---|
| **Issue #2318** | 2026-03-21 | Open，1 评论 | Tool-loop 成本与可靠性路线图，聚合了多个边缘 case，是 Agent 核心循环的系统性问题。 |
| **Issue #141** | 2026-02-05 | Open，1 评论 | Provider 逻辑冗余与 Ruff Lint 遗留问题，属于代码质量债务，长期未决。 |
| **PR #2217** | 2026-03-18 | Open | Cron 工具增加 `edit` 动作，用户高频需求，PR 已挂起近一个月。 |
| **PR #2597** | 2026-03-28 | Open | `find_legal_message_start` 的 off-by-one 修复，涉及会话消息合法性校验，影响稳定性。 |
| **Issue #2925** | 2026-04-08 | Open，2 评论 | PIP 安装 `nanobot-ai[api]` 失败，直接阻塞新用户入门，需快速响应。 |

---

*日报基于 HKUDS/nanobot GitHub 公开数据生成。项目健康度评估：活跃（高社区参与），稳定（修复密集但架构债务尚存），前进（功能探索积极）。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-04-14

---

## 1. 今日速览

Hermes Agent 在 4 月 13-14 日保持**极高活跃度**：24 小时内 Issues 与 PR 各更新 50 条，社区讨论热烈。项目刚刚发布 **v0.9.0 "The everywhere release"**，新增 Termux/Android、iMessage、WeChat 支持，并引入 Fast 模式，是近几个月最大的一次功能跃迁。与此同时，新平台适配的 bug 报告密集涌现（BlueBubbles、WhatsApp、Signal、Feishu），显示多平台扩张带来的稳定性压力；CLI/TUI 体验、上下文压缩、模型路由等核心模块也有多项待修复问题。整体健康度：**功能迭代强劲，但需加强新平台 QA 与 Issue triage**（当前 open issues 已超 1000）。

---

## 2. 版本发布

### [v0.9.0 — "The everywhere release"](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.4.13)
**发布日期：** 2026-04-13

| 统计 | 数值 |
|:---|:---|
|  commits | 487 |
|  merged PRs | 269 |
|  resolved issues | 167 |
|  files changed | 493 |
|  insertions | 63,281 |
|  contributors | 24 |

**核心更新：**
- **移动端：** 原生支持 Termux / Android 部署
- **新消息平台：** iMessage、WeChat 接入
- **性能：** 新增 Fast 模式，优化响应延迟
- **规模：** 近 500 文件改动，是社区协作最密集的一个周期

**迁移与破坏性变更提示：**
- `hermes claw cleanup` 与 `openclaw doctor` 存在**数据丢失风险**：迁移后会重命名 `~/.openclaw/` 目录，若 OpenClaw gateway 仍在运行，将重建空白配置，导致运行时状态、插件、agent 配置被销毁。建议迁移前完全停止相关服务（详见 [#8596](https://github.com/NousResearch/hermes-agent/issues/8596)）。
- 新增 Camofox 依赖后，`package.json` 与 `package-lock.json` 曾出现不同步，v0.9.0 已修复（[#4408](https://github.com/NousResearch/hermes-agent/issues/4408) 已关闭）。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 作者 | 说明 |
|:---|:---|:---|
| [#9228](https://github.com/NousResearch/hermes-agent/pull/9228) | DeployFaith | **Web UI 移动端适配**：使用 Tailwind `sm:` 断点修复小屏布局崩溃，无新依赖。 |
| [#6170](https://github.com/NousResearch/hermes-agent/pull/6170) + [#6167](https://github.com/NousResearch/hermes-agent/pull/6167) | nepenth | **Matrix 平台深度增强**：新增可折叠 thinking 字段、审批按钮、模型选择器，以及 6 个 LLM 可调用的 Matrix 工具（发反应、撤回消息、踢人、置顶等）。 |
| [#9255](https://github.com/NousResearch/hermes-agent/pull/9255) | MestreY0d4-Uninter | **委托任务分层系统**：引入 5 级任务配置（light/fast/balanced/heavy/custom），每级可独立设置模型、路由、reasoning_effort 与迭代次数，解决 #3719、#6306。 |
| [#8011](https://github.com/NousResearch/hermes-agent/pull/8011) + [#9233](https://github.com/NousResearch/hermes-agent/pull/9233) + [#9275](https://github.com/NousResearch/hermes-agent/pull/9275) | akhater / teknium1 | **模型选择器去重与分组**：修复同一 provider 多模型配置时 `/model` 选择器显示异常的问题。 |
| [#8856](https://github.com/NousResearch/hermes-agent/pull/8856) | bugmaker2 | **Moonshot 国内线路**：新增 `moonshot-cn` provider，服务 `platform.moonshot.cn` 注册用户。 |
| [#9071](https://github.com/NousResearch/hermes-agent/issues/9071) / [#9211](https://github.com/NousResearch/hermes-agent/issues/9211) | — | **LCM 上下文引擎状态栏修复**：两个关联 issue 均已关闭，解决插件 context engine 导致 CLI 状态栏显示 `ctx --` 的问题。 |

**整体推进评估：** v0.9.0 发布后，社区迅速跟进修复了 Web UI 移动端、模型选择器、Matrix 平台能力、任务委托系统等关键路径，显示核心贡献者对用户体验的高度响应。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论 | 核心诉求 |
|:---|:---|:---|
| [#501](https://github.com/NousResearch/hermes-agent/issues/501) Web UI Gateway — Local Browser-Based Interface | **12 条** | 用户强烈希望 Hermes 拥有本地 Web UI，对标 Claude Artifacts、Open WebUI。该需求与 v0.9.0 的" everywhere" 愿景高度契合，但官方尚未落地。 |
| [#7335](https://github.com/NousResearch/hermes-agent/issues/7335) More than 1000 open issues | **9 条** | 社区对 Issue 积压失控表达担忧，呼吁建立更有效的 triage 机制。 |
| [#7798](https://github.com/NousResearch/hermes-agent/issues/7798) smart_model_routing 预压缩阈值错误绑定到 cheap model | **3 条** | 智能路由的核心 bug：上下文压缩按廉价模型阈值执行，可能导致长上下文被过度压缩。 |
| [#9179](https://github.com/NousResearch/hermes-agent/issues/9179) SECURITY.md / 私有漏洞报告 | **3 条** | 安全研究员请求启用 GitHub Private Vulnerability Reporting，显示外部安全关注上升。 |
| [#4408](https://github.com/NousResearch/hermes-agent/issues/4408) package.json 与 lock 不同步 | **3 条** | 已关闭。反映依赖管理在快速迭代中的脆弱性。 |

**热点分析：** 社区最大声量集中在 **"本地 Web UI"** 和 **"Issue 治理"** 两个主题。前者是产品竞争力缺口，后者是项目可持续性风险。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | Issue | 描述 | 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#8596](https://github.com/NousResearch/hermes-agent/issues/8596) | `hermes claw cleanup` / `openclaw doctor` 静默销毁 OpenClaw 运行时状态、插件与配置 | Open，无 fix PR |
| 🔴 **高** | [#7798](https://github.com/NousResearch/hermes-agent/issues/7798) | `smart_model_routing` 将预压缩阈值错误绑定到 cheap model，导致上下文质量下降 | Open，无 fix PR |
| 🔴 **高** | [#9263](https://github.com/NousResearch/hermes-agent/issues/9263) + [#9265](https://github.com/NousResearch/hermes-agent/issues/9265) | BlueBubbles 适配器 webhook 注册完全失败：无效 event 名 + URL 缺少密码，导致 iMessage 消息无法 inbound | Open，无 fix PR |
| 🟡 **中** | [#7966](https://github.com/NousResearch/hermes-agent/issues/7966) | Gateway 启动时 session suspension 因 `datetime` 与 `float` 比较报错 | **已关闭** |
| 🟡 **中** | [#8478](https://github.com/NousResearch/hermes-agent/issues/8478) | Ctrl+D 行为不符合 Unix 惯例（未空行时直接 EOF 退出） | Open，无 fix PR |
| 🟡 **中** | [#8764](https://github.com/NousResearch/hermes-agent/issues/8764) | Feishu 卡片交互按钮报错 code:200340，回调超时 | Open，无 fix PR |
| 🟡 **中** | [#5434](https://github.com/NousResearch/hermes-agent/issues/5434) | 自托管 Honcho memory 因 SDK 2.x / Server 3.x 不兼容而静默失败 | Open，无 fix PR |
| 🟡 **中** | [#9080](https://github.com/NousResearch/hermes-agent/issues/9080) | Signal 网关回复开头出现多余 `▉` 字符 | Open，无 fix PR |
| 🟡 **中** | [#9268](https://github.com/NousResearch/hermes-agent/issues/9268) | Slack `reply_in_thread: false` 仍强制线程回复 | Open，无 fix PR |
| 🟢 **低** | [#9270](https://github.com/NousResearch/hermes-agent/issues/9270) | 空 LLM 响应被替换为字面量 `"(No response generated)"` 并送达用户 | Open，无 fix PR |
| 🟢 **低** | [#9239](https://github.com/NousResearch/hermes-agent/issues/9239) | NixOS managed 模式下 `/save` 权限为 0600 导致普通用户无法写入 | **有 fix PR** [#9279](https://github.com/NousResearch/hermes-agent/pull/9279) |
| 🟢 **低** | [#9236](https://github.com/NousResearch/hermes-agent/issues/9236) | WhatsApp 适配器缺少 `send_voice()`，语音消息以文本路径发送 | Open，无 fix PR |
| 🟢 **低** | [#9240](https://github.com/NousResearch/hermes-agent/issues/9240) | Discord `free_response_channels` 重启后可能失效 | Open，无 fix PR |

**稳定性评估：** v0.9.0 的新平台扩张（iMessage/BlueBubbles、WhatsApp、Signal、Feishu）带来了**密集的适配层 bug**。BlueBubbles 适配器目前处于**完全不可用**状态，建议优先修复。

---

## 6. 功能请求与路线图信号

| Issue/PR | 内容 | 纳入下一版本可能性 |
|:---|:---|:---|
| [#501](https://github.com/NousResearch/hermes-agent/issues/501) | 本地 Web UI Gateway（浏览器界面、Streaming、Artifacts） | **高** — 评论数第一，与"everywhere"发布主题一致，已有社区强烈呼声 |
| [#9269](https://github.com/NousResearch/hermes-agent/issues/9269) | Tailscale serve 集成，零配置安全远程访问 | 中 — 基础设施类需求，实现成本不高 |
| [#9154](https://github.com/NousResearch/hermes-agent/issues/9154) | Feishu 自动线程与话题级会话隔离（对标 Discord） | 中 — 已有 Telegram/Discord 先例，平台 parity 需求 |
| [#9245](https://github.com/NousResearch/hermes-agent/issues/9245) | TUI 流式响应自动换行（word wrap） | 中 — 纯体验优化，影响 CLI 用户日常 |
| [#4692](https://github.com/NousResearch/hermes-agent/pull/4692) | Ink (React) TUI 重构，替换 prompt_toolkit | 中-高 — 大型重构 PR，若合并将根本性改变 CLI 架构 |
| [#9281](https://github.com/NousResearch/hermes-agent/pull/9281) | vLLM/本地服务器错误模式 + MCP 初始连接重试 | 高 — 来自 Kilo-Org 的 upstream 改进，提升本地部署可靠性 |
| [#9278](https://github.com/NousResearch/hermes-agent/pull/9278) | Action Auditor + Heuristic Sanitizer（自主改进） | 中 — 创新性功能，需评估对核心循环的性能影响 |

---

## 7. 用户反馈摘要

**真实痛点：**

- **平台适配质量参差：** "BlueBubbles webhook 完全注册不上"、"Signal 每个回复开头多个方块"、"Feishu 按钮点一下就报错"——用户感受到新平台接入的粗糙感。
- **数据安全感缺失：** `claw cleanup` 会无提示覆盖用户配置，被描述为 "silently destroy"，用户对迁移工具的信任度低。
- **上下文管理黑盒：** `smart_model_routing` 的压缩行为不可预测，长回复被截断（[#7237](https://github.com/NousResearch/hermes-agent/issues/7237)），用户难以理解背后的模型切换逻辑。
- **权限/部署边缘场景：** NixOS 用户、Termux 用户、国内 Moonshot 用户均在官方路径外遇到阻塞，显示用户基数正在向多元化场景扩散。

**满意/期待：**
- v0.9.0 的"everywhere"愿景获得认可，尤其是移动端和 iMessage 支持被频繁提及。
- Matrix 平台的新交互能力（thinking 折叠、审批按钮）受到技术用户好评。

---

## 8. 待处理积压

以下 Issue/PR 已长期活跃或存在高影响但尚未获得维护者明确响应，建议优先 triage：

| 条目 | 创建时间 | 说明 |
|:---|:---|:---|
| [#501](https://github.com/NousResearch/hermes-agent/issues/501) Web UI Gateway | 2026-03-06 | 评论数最高的功能请求，已逾 1 个月，需路线图确认 |
| [#7335](https://github.com/NousResearch/hermes-agent/issues/7335) 1000+ open issues | 2026-04-10 | 项目治理信号，需官方回应 triage 策略 |
| [#4692](https://github.com/NousResearch/hermes-agent/pull/4692) Ink TUI 重构 | 2026-04-03 | 大型架构 PR，10 天无合并/关闭动作，需核心维护者评审 |
| [#5434](https://github.com/NousResearch/hermes-agent/issues/5434) Honcho 自托管内存失效 | 2026-04-06 | 自托管用户核心功能静默损坏，已 1 周无 fix |
| [#7798](https://github.com/NousResearch/hermes-agent/issues/7798) smart_model_routing 压缩阈值 bug | 2026-04-11 | 影响核心智能路由正确性，3 天无 PR |

---

*日报生成时间：2026-04-14*  
*数据来源：NousResearch/hermes-agent GitHub 公开活动*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-04-14

---

## 1. 今日速览

PicoClaw 社区在过去 24 小时展现出**极高活跃度**：PR 吞吐量达 **41 条**（29 条待审、12 条已合并/关闭），Issues 更新 5 条。开发重心明显向**安全加固**（exec 工具路径校验、策略评估系统）、**多实例/多租户架构**（Channel 多实例、Feishu 多应用）和**稳定性修复**（OGG 音频解码、404 fallback、Docker 部署）倾斜。同时，一个 nightly 版本自动发布，但无正式版。值得注意的是，社区首次出现对 **CLA 协议主体错误**的法律合规性质疑，需维护者尽快回应。

---

## 2. 版本发布

### 🔸 Nightly Build: `v0.2.6-nightly.20260413.6d037919`
- **发布时间**：2026-04-13
- **性质**：自动化构建，**可能不稳定，谨慎使用**
- **变更范围**：自 `v0.2.6` 标签以来 `main` 分支的全部累积提交
- **完整日志**：[compare/v0.2.6...main](https://github.com/sipeed/picoclaw/compare/v0.2.6...main)
- **迁移建议**：生产环境建议继续锁定 `v0.2.6` 稳定版；如需测试近期 Channel 多实例重构或安全加固特性，可在隔离环境试用该 nightly。

> ⚠️ **无正式版本发布**，v0.2.6 仍是当前最新稳定版。

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 链接 |
|:---|:---|:---|:---|
| **#2481** | cytown | **Channel 配置架构重构**：将 `config.channels` 改为 `channel_list`，新增 `type` 字段，配置版本升级至 v3，为**多实例 Channel** 奠定底层基础。 | [PR #2481](https://github.com/sipeed/picoclaw/pull/2481) |
| **#2503** | cytown | **AgentLoop 并行化**：基于 #2481，重构 `pkg/agent/loop.go` 支持用户消息并行处理与正确路由。这是性能与并发能力的重要跃进。 | [PR #2503](https://github.com/sipeed/picoclaw/pull/2503) |
| **#2495** | liuy | **`/clear` 指令完整性修复**：此前仅清 JSONL 会话文件，现同步清理 seahorse SQLite 数据库，避免旧消息在上下文组装时“幽灵复活”。 | [PR #2495](https://github.com/sipeed/picoclaw/pull/2495) |
| **#2507** | cytown | `allowFrom` 空字符串 bugfix，防御性修复配置解析。 | [PR #2507](https://github.com/sipeed/picoclaw/pull/2507) |
| **#2508** | cytown | 批量修复 manager_channel 类型断言 panic、微信配置解码错误处理等稳定性问题。 | [PR #2508](https://github.com/sipeed/picoclaw/pull/2508) |
| **#2394** | darrenzeng2025 | **Provider 404 容错 fallback**：模型 API 返回 404 时自动切换 fallback，提升服务可用性。 | [PR #2394](https://github.com/sipeed/picoclaw/pull/2394) |
| **#2504** | jacrify | **OGG Opus 解码内存安全**：修复 `DecodeOggOpus` 中 buffer reuse 导致音频帧损坏的问题，直接影响 Discord 等语音通道质量。 | [PR #2504](https://github.com/sipeed/picoclaw/pull/2504) |

**整体判断**：今日合并的 PR 覆盖了**架构升级**（Channel 多实例）、**运行时性能**（AgentLoop 并行）、**数据一致性**（seahorse /clear）、**基础设施健壮性**（404 fallback、Docker 路径、音频解码）。项目正从“功能补全期”迈向“工程化与规模化期”。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 标签 | 评论 | 核心诉求 | 链接 |
|:---|:---|:---:|:---|:---|
| **#1042** | `bug`, `tool` | 3 | **exec 工具安全 guard 误杀**：`restrict_to_workspace=true` 时，正则粗暴匹配把 `curl wttr.in/Beijing?T` 中的 URL 参数误判为相对路径 `../../../../Beijing?T`，导致合法命令被拦截。社区对安全策略的**精确性**提出强烈需求。 | [Issue #1042](https://github.com/sipeed/picoclaw/issues/1042) |
| **#2479** | `bug`, `provider`, `channel` | 3 | **NVIDIA API + DeepSeek-V3.1 / GLM-4.7 404 错误**：Telegram 窗口报 `LLM call failed after retries: 404 page not found`。该 Issue 已被关闭，对应修复为 PR #2394（404 fallback），但根本原因是 NVIDIA API 端点兼容性问题。 | [Issue #2479](https://github.com/sipeed/picoclaw/issues/2479) |
| **#2499** | `enhancement`, `channel`, `config` | 1 | **第三方 WebSocket 客户端的安全接入**：提出为浏览器扩展、外部桌面工具提供可持续、安全的 Pico WS 集成路径，要求明确认证边界、安全策略和版本兼容策略。 | [Issue #2499](https://github.com/sipeed/picoclaw/issues/2499) |

### 热点分析

- **#1042** 反映出一个典型矛盾：**安全加固 vs 用户体验**。PR #2378（终端输出转义、路径校验硬化）与 #2313（Agent Shield 安全套件）正在推进，但 guard 的误报率需要更精细的正则或 AST 级解析来根治。
- **#2499** 代表了 PicoClaw 生态扩展的**下一个增长极**：从“内置 WebUI 单一体”走向“开放第三方客户端平台”。这与 Channel 多实例重构（#2481）形成战略呼应，但缺少官方的 WS 认证协议设计。

---

## 5. Bug 与稳定性

| 优先级 | 问题 | 状态 | 修复 PR / 进展 | 链接 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | exec 工具 `guardCommand` 误拦截无路径命令（如 curl URL） | 开放 | **PR #2378** 部分相关（硬化路径检查），但未完全解决正则误匹配 | [Issue #1042](https://github.com/sipeed/picoclaw/issues/1042) |
| 🟡 **中** | NVIDIA API 404 导致 LLM 调用失败 | **已关闭** | **PR #2394** 已提供 fallback 机制 | [Issue #2479](https://github.com/sipeed/picoclaw/issues/2479) |
| 🟡 **中** | OGG Opus 解码 buffer reuse 致音频帧损坏 | 待合并 | **PR #2504** 待审 | [PR #2504](https://github.com/sipeed/picoclaw/pull/2504) |
| 🟡 **中** | `allowFrom` 含空字符串的解析 bug | **已修复** | **PR #2507** 已合并 | [PR #2507](https://github.com/sipeed/picoclaw/pull/2507) |
| 🟢 **低** | manager_channel 类型断言 panic、微信配置解码缺错误处理 | **已修复** | **PR #2508** 已合并 | [PR #2508](https://github.com/sipeed/picoclaw/pull/2508) |

> **建议**：#1042 作为长期存在的安全误报问题，已有 3 条评论和 0 👍，说明影响面明确但尚未引发大规模情绪。建议在 PR #2378 基础上追加专门修复，或拆分独立 PR。

---

## 6. 功能请求与路线图信号

| 功能需求 | 提出者 | 与现有 PR 的关联 | 纳入下一版本概率 | 链接 |
|:---|:---|:---|:---:|:---|
| **多 Feishu 应用支持**（按配置目录隔离） | zuozhehao | 与 **Channel 多实例重构 #2481** 直接相关，配置架构已就绪 | **高** | [Issue #2493](https://github.com/sipeed/picoclaw/issues/2493) |
| **第三方 Pico WS 安全接入**（浏览器扩展、外部客户端） | SiYue-ZO | 与 **#2481 / #2503** 的并发/路由