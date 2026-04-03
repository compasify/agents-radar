# OpenClaw 生态日报 2026-03-30

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-03-30 00:57 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
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

# OpenClaw 项目动态日报 | 2026-03-30

## 1. 今日速览

OpenClaw 项目今日呈现**极高活跃度**，24小时内产生 500 条 Issues 更新（388 活跃/112 关闭）与 500 条 PR 更新（331 待合并/169 已处理），表明社区处于密集迭代期。v2026.3.28 版本刚发布即伴随多项破坏性变更，用户迁移压力显著。核心痛点集中在 **QMD 内存系统兼容性断裂**、**多平台认证故障** 及 **Windows 生态支持缺口** 三大领域。维护团队响应迅速，今日已合并 6 个关键修复 PR，但 331 个待合并 PR 显示代码审查队列存在积压风险。

---

## 2. 版本发布

### v2026.3.28 — 关键破坏性变更

| 变更项 | 详情 | 迁移路径 |
|:---|:---|:---|
| **Qwen 认证移除** | 废弃 `qwen-portal-auth` OAuth 集成（`portal.qwen.ai`） | 执行 `openclaw onboard --auth-choice modelstudio-api-key` 迁移至 Model Studio |
| **配置迁移清理** | 自动配置迁移仅保留两个月历史 | 旧版本用户需手动备份或重新配置 |

🔗 [Release 页面](https://github.com/openclaw/openclaw/releases/tag/v2026.3.28)

---

## 3. 项目进展

### 今日合并/关闭的关键 PR（6 项）

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#57351](https://github.com/openclaw/openclaw/pull/57351) | @vincentkoc | **QMD 兼容性修复**：`--glob`/`--mask` 标志自适应，解决 QMD 2.0.1 集合创建失败 | #55123 |
| [#57354](https://github.com/openclaw/openclaw/pull/57354) | @vincentkoc | **QMD 同步机制补全**：实现 `watch` + `onSessionStart` 触发重索引 | #47482 |
| [#57342](https://github.com/openclaw/openclaw/pull/57342) | @huntharo | **代码清理**：移除 xAI 专属认证追踪日志，降低维护面 | — |
| [#45443](https://github.com/openclaw/openclaw/pull/45443) | @vincentkoc | **Telegram 命令路由**：修复 `/fast` 菜单回调穿透至模型执行的问题 | — |
| [#57166](https://github.com/openclaw/openclaw/pull/57166) | @malaiwah | **API 合规**：`/v1/responses` 工具 schema 改用扁平格式匹配 Responses API 规范 | — |
| [#57338](https://github.com/openclaw/openclaw/pull/57338) | @gumadeiras | **Web UI 稳定性**：清除停止客户端时的排队连接超时，防止内存泄漏 | — |

**整体推进评估**：今日修复聚焦 **内存系统可靠性** 与 **API 规范一致性**，为 2026.4.x 版本奠定稳定性基础。Windows 支持大型 PR（#57332）与实时语音功能（#43501）仍在队列中，预计下周释放。

---

## 4. 社区热点

### 高讨论度 Issues（按评论数排序）

| # | 标题 | 评论 | 👍 | 核心诉求分析 |
|:---|:---|:---:|:---:|:---|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows Clawdbot Apps | 60 | 66 | **跨平台公平性**：macOS/iOS/Android 已有原生应用，桌面端用户要求功能对等，企业部署场景受阻 |
| [#44851](https://github.com/openclaw/openclaw/issues/44851) | Kimi web_search 401 认证错误 | 32 | 3 | **工具链认证隔离**：Chat API 与搜索工具认证状态不同步，影响国产模型集成体验 |
| [#14593](https://github.com/openclaw/openclaw/issues/14593) | Docker 中 brew 依赖失败 | 18 | 14 | **容器化环境假设错误**：技能安装脚本假设 macOS 环境，Linux 容器用户无法使用 brew 技能 |
| [#26322](https://github.com/openclaw/openclaw/issues/26322) | OAuth Token 刷新竞态条件 | 15 | 12 | **多代理共享认证**：企业场景下多代理共用凭证导致 `refresh_token_reused` 错误，需分布式锁机制 |
| [#53353](https://github.com/openclaw/openclaw/issues/53353) | Matrix E2EE WASM 文件缺失 | 14 | 3 | **发布流程缺陷**：npm 包遗漏加密依赖文件，回归测试覆盖不足 |

**诉求模式识别**：认证/授权类问题占热点 40%，容器/跨平台部署占 30%，表明项目正从早期采用者向企业级用户渗透。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重度 | Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---:|:---|:---:|
| 🔴 **阻断** | [#53353](https://github.com/openclaw/openclaw/issues/53353) | OPEN | Matrix E2EE 完全失效（WASM 缺失） | 待确认 |
| 🔴 **阻断** | [#53955](https://github.com/openclaw/openclaw/issues/53955) | CLOSED | QMD 0/10 文件索引（已修复于 #57351） | ✅ #57351 |
| 🟠 **高** | [#53959](https://github.com/openclaw/openclaw/issues/53959) | OPEN | openai-codex/gpt-5.3-codex 工具执行完全失效（2026.3.23-2 回归） | 待确认 |
| 🟠 **高** | [#49191](https://github.com/openclaw/openclaw/issues/49191) | OPEN | Google Vertex ADC 认证断裂，`<authenticated>` 字面量传递 | 待确认 |
| 🟠 **高** | [#51012](https://github.com/openclaw/openclaw/issues/51012) | OPEN | WhatsApp 重连后监听器丢失（401 注销） | 待确认 |
| 🟡 **中** | [#55039](https://github.com/openclaw/openclaw/issues/55039) | CLOSED | Kimi read 工具漏传 path 参数（已修复） | ✅ 已修复 |
| 🟡 **中** | [#52875](https://github.com/openclaw/openclaw/issues/52875) | OPEN | Session_send 返回 "no session found"（2026.3.22 回归） | 待确认 |
| 🟡 **中** | [#57132](https://github.com/openclaw/openclaw/issues/57132) | CLOSED | sglang 扩展栈溢出（2026.3.29 当日修复） | ✅ 已修复 |

**稳定性健康度**：⚠️ **警示** — 3 项阻断级问题中 1 项已修复，2 项待响应；回归缺陷密度较高，建议加强预发布集成测试。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue/PR | 热度 | 纳入可能性 | 关键障碍 |
|:---|:---|:---:|:---:|:---|
| **visionOS 空间外设节点** | PR [#56130](https://github.com/openclaw/openclaw/pull/56130) | 新 | ⭐⭐⭐⭐⭐ | Apple Vision Pro 生态布局，平台政策已就绪 |
| **实时语音模式**（OpenAI Realtime API） | PR [#43501](https://github.com/openclaw/openclaw/pull/43501) | 高 | ⭐⭐⭐⭐☆ | 架构评审中，延迟目标 200-400ms |
| **Windows 原生支持套件** | PR [#57332](https://github.com/openclaw/openclaw/pull/57332) | 高 | ⭐⭐⭐⭐☆ | 文档+诊断+托盘伴侣 MVP，XL 规模需审查 |
| **分层引导文件加载** | Issue [#22438](https://github.com/openclaw/openclaw/issues/22438) | 中 | ⭐⭐⭐☆☆ | 上下文窗口优化，设计待细化 |
| **FTS-only 内存索引**（跳过嵌入） | Issue [#43957](https://github.com/openclaw/openclaw/issues/43957) | 低 | ⭐⭐⭐☆☆ | 已有关闭方案，需重新评估 |
| **Anthropic speed: "fast" 参数透传** | Issue [#12176](https://github.com/openclaw/openclaw/issues/12176) | 低 | ⭐⭐☆☆☆ | 定价模型敏感（$30/$150 per MTok） |

**路线图信号**：空间计算（visionOS）与实时交互（语音）是明确的产品差异化方向，Windows 支持为规模化必需项。

---

## 7. 用户反馈摘要

### 痛点提炼（来自 Issue 评论）

| 场景 | 原声引用 | 影响面 |
|:---|:---|:---|
| **企业多代理部署** | "multiple agents share a single OAuth auth profile...concurrent token refresh attempts cause a race condition" | 团队协作场景 |
| **国产模型集成摩擦** | "Kimi web_search 工具调用返回 401 认证错误，但 Kimi Chat API 正常工作" | 中国用户/多云策略 |
| **容器化技能生态** | "The Docker image does not ship brew...install immediately fails" | DevOps/CI-CD 用户 |
| **配置漂移焦虑** | "drop automatic config migrations older than two months" 引发备份担忧 | 长期运营用户 |
| **端到端加密可靠性** | "Messages not processing through Matrix channel...Gateway shows 'ON \| OK' but no messages flow" | 隐私敏感用户 |

### 满意度信号
- ✅ QMD 修复响应迅速（#53955 24小时内闭环）
- ✅ Telegram 功能对齐 Discord（插件审批支持 PR 已提交）
- ❌ 版本发布节奏与破坏性变更沟通待优化

---

## 8. 待处理积压

### 需维护者关注的高价值积压项

| Issue/PR | 创建时间 | 最后更新 | 风险 | 建议动作 |
|:---|:---:|:---:|:---|:---|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows 应用 | 2026-01-01 | 2026-03-29 | 平台公平性质疑，66 👍 最高 | 关联 PR #57332，制定公开路线图 |
| [#43501](https://github.com/openclaw/openclaw/pull/43501) 实时语音 | 2026-03-11 | 2026-03-30 | 竞品功能差距 | 加速架构评审，指定专属审阅者 |
| [#26322](https://github.com/openclaw/openclaw/issues/26322) OAuth 竞态 | 2026-02-25 | 2026-03-29 | 企业采用 blocker | 设计分布式令牌管理方案 |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) 分层引导加载 | 2026-02-21 | 2026-03-29 | 上下文成本优化 | 评估与现有 PR 的协同可能 |
| [#52951](https://github.com/openclaw/openclaw/pull/52951) 文件系统根隔离 | 2026-03-23 | 2026-03-30 | 多租户安全基础 | XL 规模 PR，建议拆分审查 |

---

**报告生成时间**：2026-03-30  
**数据来源**：OpenClaw GitHub 公开 API 与事件流  
**下次更新**：2026-03-31

---

## 横向生态对比

# 个人 AI 助手开源生态横向对比分析报告 | 2026-03-30

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态呈现**"一超多强、垂直分化"**格局：OpenClaw 以日均 500+ Issues/PR 的体量稳居核心参照地位，NanoBot、PicoClaw、CoPaw 等形成第二梯队快速追赶，IronClaw、NanoClaw 聚焦企业级安全与合规，LobsterAI、EasyClaw 等探索差异化场景。整体技术演进从**功能扩展期**进入**架构治理期**——上下文压缩、记忆系统、多智能体协作、安全沙箱成为共性攻坚方向，Token 成本控制与生产级稳定性取代早期"能跑通"成为核心诉求。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | Release | 健康度评估 | 阶段定位 |
|:---|:---:|:---:|:---|:---|:---|
| **OpenClaw** | 500 (388活跃/112关闭) | 500 (331待合/169处理) | v2026.3.28 (破坏性变更) | ⚠️ 高活跃/高积压 | 密集迭代期 |
| **NanoBot** | 19 (15活跃) | 97 (92待审) | 无 (nightly刷新) | ⚠️ 审查队列积压 | 功能冲刺期 |
| **PicoClaw** | 22 (18活跃) | 51 (34待合/17已合) | v0.2.4-nightly | ✅ 修复响应快 | 稳定化过渡期 |
| **NanoClaw** | 17 (16活跃) | 50 (49待合) | 无 | ⚠️ 合并不活跃 | 蓄力期 |
| **NullClaw** | 2 | 2 (0合并) | 无 | 🟡 低活跃 | 维护期 |
| **IronClaw** | 8 | 50 (43待合) | 无 | ✅ 流水线健康 | 快速迭代期 |
| **LobsterAI** | 4 (全活跃) | 7 (全待合) | 无 | 🟡 合并停滞 | 功能积压期 |
| **TinyClaw** | — | — | — | ⚪ 无活动 | 休眠状态 |
| **Moltis** | 3 (全关闭) | 2 (待合) | 无 | ✅ 闭环效率高 | 质量巩固期 |
| **CoPaw** | 37 (26活跃/11关闭) | 34 (18待合/16已合) | 无 | ✅ 贡献者活跃 | 生态扩张期 |
| **ZeptoClaw** | 2 | 6 (5待合/1已合) | 无 | ✅ 问题-修复闭环快 | 架构治理期 |
| **EasyClaw** | 1 | 0 | v1.7.8 (文档版) | 🟡 低活跃 | 维护期 |

---

## 3. OpenClaw 在生态中的定位

### 核心优势
| 维度 | 表现 | 数据支撑 |
|:---|:---|:---|
| **规模效应** | 绝对体量领先 | 24h Issues/PR 均为次席 NanoBot 的 **5-10 倍** |
| **企业渗透** | 多租户、OAuth、审计需求密集 | Issues 中 40% 涉及认证/授权，30% 容器/跨平台部署 |
| **生态完整性** | 全平台覆盖 (macOS/iOS/Android/visionOS) | #75 Linux/Windows 公平性质疑反证其平台广度 |
| **响应速度** | 关键 Bug 24h 内闭环 | #53955 QMD 0/10 索引问题当日修复 |

### 技术路线差异
| 对比项 | OpenClaw | 竞品典型特征 |
|:---|:---|:---|
| **架构哲学** | 全功能一体化（内置 QMD 内存、多通道、工具市场） | NanoBot 倾向模块化组装，IronClaw 强调 WASM 沙箱 |
| **记忆系统** | QMD (Queryable Memory Database) 专有方案 | PicoClaw 探索 Seahorse 生物启发架构，NanoClaw 评估 Graphiti 知识图谱 |
| **安全模型** | 企业级 OAuth + 审计日志 | IronClaw 金融级异步审批，NanoClaw 容器隔离 |
| **扩展机制** | Skills + Hooks + MCP 渐进开放 | CoPaw ACP 协议互操作，ZeptoClaw 工具注册表治理 |

### 社区规模对比
- **贡献者密度**：OpenClaw 单 PR 平均评论深度低于 IronClaw/CoPaw，但绝对数量碾压
- **企业用户占比**：从 #26322 OAuth 竞态条件、#44851 Kimi 企业集成等 Issue 推断显著高于均值
- **维护者负载**：331 待合并 PR 显示 **review 瓶颈** 已成为扩张制约

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 紧迫度 |
|:---|:---|:---|:---:|
| **上下文压缩与 Token 成本控制** | NanoBot (#2375), ZeptoClaw (#460), CoPaw (#2482), NanoClaw (#1493-1495) | NanoBot 心跳任务 560k tokens/次"财务灾难"；CoPaw 用户要求"去除调试信息保留自然语言"的智能压缩 | 🔴 极高 |
| **记忆系统重构** | PicoClaw (#2618-2620 三连击), NanoClaw (#1458 Graphiti), OpenClaw (QMD 兼容性断裂修复) | 从简单上下文管理向主动长期记忆演进，解决文件记忆膨胀 | 🔴 极高 |
| **多智能体协作架构** | PicoClaw (Phase 2 #1934), NanoClaw (#1433 Swarm IPC), IronClaw (v2 引擎 #1557) | 单实例内多 Agent 发现、委托、状态隔离 | 🟡 高 |
| **安全沙箱与隔离** | IronClaw (WASM), NanoClaw (#1485 容器化悖论), ZeptoClaw (#463 Landlock 修复), OpenClaw (文件系统根隔离 #52951) | 生产环境不可信代码执行、多租户数据隔离 | 🟡 高 |
| **实时语音/多模态** | OpenClaw (#43501 Realtime API), PicoClaw (小智语音 #2584), CoPaw (#2439 语音转录失效) | 延迟目标 200-400ms，流式交互体验 | 🟡 高 |
| **Windows/跨平台公平性** | OpenClaw (#75 66👍), NanoBot (#87 长期挂起), PicoClaw (配置修复 #2024), LobsterAI (#595 自启动失败) | 企业桌面部署刚需，长期被 macOS 优先策略压制 | 🟡 高 |
| **MCP/工具生态标准化** | IronClaw (#1571 MCP 注解修复), ZeptoClaw (#465 运行时注册表), NanoClaw (MCP 配置 #2495), OpenClaw (MCP 工具注入 #2160) | 打破 CLI 硬编码与运行时脱钩的架构债务 | 🟢 中 |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户画像 | 技术架构特征 |
|:---|:---|:---|:---|
| **OpenClaw** | 全栈个人助手 + 企业多租户 | 技术早期采用者 → 企业 IT 部署者 | TypeScript/Node 一体化，QMD 专有内存，平台绑定深 |
| **NanoBot** | 轻量化 + 多模型灵活切换 | 成本敏感开发者、国产模型用户 | Python 模块化，BM25+向量混合搜索，SelfTool 自修改 |
| **PicoClaw** | 边缘设备 + 多智能体 Phase 2 | RPi/嵌入式开发者、自动化运维 | 多智能体发现提示，Cron 重构，配置系统紧急修复中 |
| **IronClaw** | 金融级安全 + WASM 沙箱 | DeFi/加密资产管理者、高合规场景 | Rust 核心，NEAR 区块链集成，异步交易审批架构 |
| **NanoClaw** | 容器原生 + 成本可观测 | DevOps/云原生部署者 | Docker 优先，Token 追踪 (#1528)，远程 Agent 审批 |
| **CoPaw** | 钉钉/飞书企业集成 + ACP 互操作 | 中国企业用户、多 Agent 编排 | Python，11 频道契约测试，流式卡片交互 |
| **ZeptoClaw** | 浏览器自动化 + 架构治理 | 需要 Web 感知能力的开发者 | 工具注册表治理，Landlock 沙箱，Lightpanda/Chrome 双引擎 |
| **LobsterAI** | 国产化替代 (Qwen) + 产品体验 | 国内 C 端用户、Claude 替代寻求者 | 引擎迁移疑虑 (#418)，Artifacts 预览，Prompt 模板库 |
| **Moltis** | Z.AI 生态深度优化 + 保险箱 UX | 国内开发者、成本优化导向 | 双端点架构 (Coding Plan/通用)，会话加密 |
| **EasyClaw** | 极简安装 + 国内网络适配 | 国内非技术用户 | 文档优化为主，生态兼容性待建 |

---

## 6. 社区热度与成熟度

### 快速迭代阶段（功能扩张）
| 项目 | 特征 | 风险信号 |
|:---|:---|:---|
| **OpenClaw** | 500+ 日活，v2026.3.28 破坏性变更密集 | 331 PR 积压，review 疲劳 |
| **NanoBot** | 记忆系统三连击 PR，SelfTool 动态适应 | 92 PR 待审，安全事件 #2439 待官方响应 |
| **IronClaw** | v2 引擎 7K+ 行重构，金融安全架构设计 | 43 待合 staging PR，需区分机械/人工审查 |
| **CoPaw** | 钉钉 AI 表格/文档，ACP 外部 Agent | CPU 100% #2218、长任务中断 #2377 稳定性债务 |

### 质量巩固阶段（架构治理）
| 项目 | 特征 | 关键动作 |
|:---|:---|:---|
| **PicoClaw** | v0.2.4 配置回归紧急修复，Phase 2 多智能体编码中 | 配置系统测试策略重建 |
| **ZeptoClaw** | 工具注册表治理 RFC，CLI-运行时统一 | #460 上下文压缩、#459 浏览器工具优先合并 |
| **Moltis** | 3 Issues 全闭环，Z.AI 双端点补全 | 维持高闭环效率，Matrix 支持待响应 |

### 蓄力/维护期
| 项目 | 状态 | 关键瓶颈 |
|:---|:---|:---|
| **NanoClaw** | 49 PR 待合仅 1 合并，Web Dashboard/Token 追踪待释放 | 维护者 review 带宽 |
| **LobsterAI** | 7 PR 同日提交零合并，引擎方向疑虑 #418 未回应 | 技术路线沟通，集成冲突风险 |
| **NullClaw/EasyClaw** | 低活跃，文档/兼容性维护 | 微信集成 #714、QClaw 冲突 #30 待响应 |
| **TinyClaw** | 24h 无活动 | 项目存续状态存疑 |

---

## 7. 值得关注的趋势信号

### 信号一：Token 成本从"优化项"变为"阻断项"
> **证据**：NanoBot #2375 "560k tokens in ONE go" 被标记为财务灾难；CoPaw #2482 重度开发者因上下文管理粗放"崩溃"；ZeptoClaw #460 将多层压缩防溢出作为"致命痛点"修复

**对开发者的价值**：长任务 Agent 必须内置**自适应上下文压缩策略**（摘要/截断/分层丢弃），而非依赖用户手动清理。Token 成本可视化（NanoClaw #1528）将成为运维基础设施标配。

### 信号二：记忆系统从"存储"演进为"主动检索架构"
> **证据**：PicoClaw Seahorse 生物启发式提案（短期无损+长期语义）；NanoBot BM25+向量混合+侧载重排序三连击；NanoClaw Graphiti 知识图谱评估；OpenClaw QMD 兼容性断裂后的紧急修复

**对开发者的价值**：文件记忆膨胀已触及架构瓶颈，需引入**分层记忆架构**（工作记忆-情景记忆-语义记忆）和**预检索注入机制**，而非简单 RAG。

### 信号三：安全模型从"配置选项"变为"架构基石"
> **证据**：IronClaw 异步交易审批 #1739 要求"Agent 不可见私钥"；NanoClaw #1490 主机级安全强制 RFC；ZeptoClaw Landlock 沙箱从"配置可用"到"实际可用"的修复 #463

**对开发者的价值**：管理真实资产的 Agent 必须实现**人机分离的审批通道**和**最小权限沙箱**，安全不能事后补丁。

### 信号四：多智能体从"演示特性"进入"生产架构"
> **证据**：PicoClaw Phase 2 多智能体发现与委托编码中；NanoClaw Swarm IPC 聚合 PR #1433；IronClaw v2 引擎统一 Thread-Capability-CodeAct

**对开发者的价值**：单 Agent 能力天花板显现，需设计**轻量级 Agent 注册表**、**跨 Agent 状态隔离**和**委托-回调协议**，避免硬编码编排。

### 信号五：国产模型/渠道集成从"加分项"变为"必选项"
> **证据**：OpenClaw Kimi 认证故障 #44851、Qwen 认证移除迁移；LobsterAI Qwen OAuth #644；CoPaw 钉钉生态深度整合；Moltis Z.AI Coding Plan 专用端点

**对开发者的价值**：全球化 Agent 框架必须实现**提供商抽象层**，支持多区域模型 fallback 和本地化渠道（微信/钉钉/飞书）的一键配置。

---

*报告生成时间：2026-03-30*  
*分析基于各项目 GitHub 公开数据，适合技术决策者评估选型与贡献投入*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-03-30

## 1. 今日速览

NanoBot 今日呈现**高活跃度开发态势**：24小时内 Issues 更新19条（15条活跃/新开）、PR 更新97条（92条待审），显示社区贡献热情高涨但代码审查压力显著。核心关注点集中在**安全性事件响应**（恶意代码报告 #2439）、**Token 消耗优化**（心跳机制 #2375）及**架构层改进**（记忆系统重构 #2618-#2620 系列 PR）。Telegram 渠道功能迭代密集（论坛主题、消息格式、速率限制等），反映即时通讯场景的用户需求旺盛。无新版本发布，nightly 分支按计划完成刷新。

---

## 2. 版本发布

**无新版本发布**

> 注：nightly 分支已于 2026-03-29 20:00 CST 完成定期刷新（[#2563](https://github.com/HKUDS/nanobot/issues/2563)），主要作为 staging 环境供测试使用。

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 作者 | 状态 | 核心贡献 |
|:---|:---|:---|:---|
| [#2626](https://github.com/HKUDS/nanobot/pull/2626) [#2624](https://github.com/HKUDS/nanobot/pull/2624) | rcolomina | **CLOSED** | Telegram 论坛主题支持（被 [#2628](https://github.com/HKUDS/nanobot/pull/2628) 取代） |

### 推进中的重大功能（待审 PR）

| PR | 领域 | 进展意义 |
|:---|:---|:---|
| [#2618](https://github.com/HKUDS/nanobot/pull/2618) → [#2619](https://github.com/HKUDS/nanobot/pull/2619) → [#2620](https://github.com/HKUDS/nanobot/pull/2620) | **记忆系统重构** | 三连击 PR 构建完整语义记忆架构：BM25+向量混合搜索 → 生命周期管理/文件监听/预检索注入 → QMD 侧载重排序。标志 NanoBot 从简单上下文管理向**主动式长期记忆**演进 |
| [#2609](https://github.com/HKUDS/nanobot/pull/2609) | 性能优化 | 消除关键路径上的阻塞式 LLM 调用（内存整理），改为后台异步处理，显著降低响应延迟 |
| [#2521](https://github.com/HKUDS/nanobot/pull/2521) | 元能力 | **SelfTool** 实现 Agent 运行时自检查与自修改，开启动态行为适应新范式 |
| [#2584](https://github.com/HKUDS/nanobot/pull/2584) | 硬件生态 | 小智(Xiaozhi)语音网关支持，拓展 ESP32 设备生态 |

**整体评估**：记忆系统三连击 PR 若合并，将构成 v0.2.x 级别的架构升级；Telegram 渠道功能趋于成熟（论坛主题、格式渲染、速率控制全覆盖）。

---

## 4. 社区热点

### 🔥 最高关注度 Issues

| 排名 | Issue | 评论 | 反应 | 核心诉求 |
|:---|:---|:---:|:---:|:---|
| 1 | [#2375](https://github.com/HKUDS/nanobot/issues/2375) 心跳机制 Token 爆炸 | 10 | 👍1 | **成本危机**：30分钟心跳任务累积 600 行日志，单次消耗 **560k tokens**，生产环境不可承受 |
| 2 | [#2463](https://github.com/HKUDS/nanobot/issues/2463) 提示词前缀不一致 | 8 | 0 | **架构正确性**：持久化历史与真实发送前缀不匹配，违反 OpenAI 最佳实践，影响可复现性 |
| 3 | [#2439](https://github.com/HKUDS/nanobot/issues/2439) **供应链安全事件** | 6 | 👍4 | **信任危机**：PyPI 包 `nanobot-ai v0.1.4.post5` 捆绑恶意 `litellm_init.pth`，存在数据外泄风险 |

### 诉求分析

- **#2375**：用户需要**可配置的会话截断/摘要策略**，而非无限制累积
- **#2463**：架构层面需**审计对话序列化逻辑**，确保"所见即所发"
- **#2439**：社区对**发布制品安全审计流程**提出质疑，需官方紧急响应

---

## 5. Bug 与稳定性

| 严重度 | Issue | 描述 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **Critical** | [#2439](https://github.com/HKUDS/nanobot/issues/2439) | 恶意代码注入供应链 | 无 | **待官方安全响应** |
| 🟠 **High** | [#2375](https://github.com/HKUDS/nanobot/issues/2375) | 心跳 Token 消耗失控 | [#2609](https://github.com/HKUDS/nanobot/pull/2609)（相关优化） | 部分缓解 |
| 🟠 **High** | [#2613](https://github.com/HKUDS/nanobot/issues/2613) | Agent 执行中断（NoneType 错误） | 无 | 待诊断 |
| 🟡 **Medium** | [#2601](https://github.com/HKUDS/nanobot/issues/2601) | Cron 提醒在 Agent 模式不送达 | 无 | 待修复 |
| 🟡 **Medium** | [#2630](https://github.com/HKUDS/nanobot/issues/2630) | Lemonade 模型无法识别（v0.1.4.post6 回归） | 无 | 疑似版本回归 |
| 🟡 **Medium** | [#2591](https://github.com/HKUDS/nanobot/issues/2591) | CLI 终端 ANSI 序列重复输出 | 无 | 渲染层问题 |
| 🟢 **Low** | [#87](https://github.com/HKUDS/nanobot/issues/87) | Windows Docker 构建挂起 | 无 | 长期存在 |

### 稳定性趋势

- **新增风险**：v0.1.4.post6 引入 [#2630](https://github.com/HKUDS/nanobot/issues/2630) 模型识别回归，与 post5 的安全问题形成"补丁接力"困境
- **积极信号**：[#2609](https://github.com/HKUDS/nanobot/pull/2609) 针对 #2375 的内存整理阻塞问题进行根因修复

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 可行性评估 | 版本预测 |
|:---|:---|:---|:---|
| **HTTP Streaming 多租户通道** | [#2602](https://github.com/HKUDS/nanobot/issues/2602) | 高（架构扩展需求明确） | v0.2.x |
| **Home Assistant 知识集成** | [#2588](https://github.com/HKUDS/nanobot/issues/2588) | 中（需工具调用稳定性提升） | v0.1.5+ |
| **DashScope Coding Plan 提供商** | [#2629](https://github.com/HKUDS/nanobot/pull/2629) | 高（PR 已提交） | v0.1.5 |
| **Ollama 本地提供商** | [#2617](https://github.com/HKUDS/nanobot/pull/2617) | 高（社区呼声高，PR 已提交） | v0.1.5 |
| **AgentHook 可扩展性** | [#2603](https://github.com/HKUDS/nanobot/issues/2603) | 中（需架构评审） | v0.2.x |
| **内存整理完全异步** | [#2604](https://github.com/HKUDS/nanobot/issues/2604) | 高（[#2609](https://github.com/HKUDS/nanobot/pull/2609) 已实现核心逻辑） | v0.1.5 |

**路线图信号**：记忆系统重构（#2618-#2620）+ SelfTool（#2521）表明项目正向**长期自主运行 Agent** 演进，短期聚焦渠道稳定性与提供商生态扩展。

---

## 7. 用户反馈摘要

### 💔 核心痛点

| 痛点 | 来源 | 典型表述 |
|:---|:---|:---|
| **Token 成本不可控** | [#2375](https://github.com/HKUDS/nanobot/issues/2375) | "560k tokens in ONE go" — 生产环境财务灾难 |
| **工具调用不稳定** | [#2588](https://github.com/HKUDS/nanobot/issues/2588) | "not able to make it use a tool" — 对比 OpenClaw 体验落差 |
| **安全信任崩塌** | [#2439](https://github.com/HKUDS/nanobot/issues/2439) | 恶意代码事件引发对 PyPI 发布流程的质疑 |
| **配置限制僵化** | [#2612](https://github.com/HKUDS/nanobot/issues/2612) | `sendMaxRetries le=10` 硬编码阻碍高可靠性场景 |

### ✅ 满意场景

- Telegram 集成深度使用（论坛主题、回复上下文、格式渲染等精细需求）
- 多模型支持（Qwen 系列）的灵活性

### 📊 满意度指标

- 今日 Issues 中明确表达挫败感的：**4/15**（27%）
- 表达积极期待的（如 nightly 刷新）：**1/15**

---

## 8. 待处理积压

### ⏰ 长期未响应（>30天）

| Issue | 创建时间 | 最后更新 | 风险 |
|:---|:---|:---|:---|
| [#87](https://github.com/HKUDS/nanobot/issues/87) Windows Docker 构建挂起 | 2026-02-04 | 2026-03-30 | **Windows 开发者体验受损**，社区贡献门槛 |

### 🚨 需维护者紧急关注

| 事项 | 优先级 | 行动建议 |
|:---|:---|:---|
| [#2439](https://github.com/HKUDS/nanobot/issues/2439) 安全事件官方回应 | P0 | 发布安全公告，审计 PyPI 发布流程，考虑 yank 问题版本 |
| [#2375](https://github.com/HKUDS/nanobot/issues/2375) Token 消耗根因修复 | P1 | 评估 #2609 是否充分，或需会话硬限制机制 |
| 92 个待审 PR | P1 | 审查队列积压严重，建议优先级分层（安全>功能>优化） |

---

*日报生成时间：2026-03-30 | 数据来源：HKUDS/nanobot GitHub*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-03-30

## 1. 今日速览

PicoClaw 今日展现**极高活跃度**，24小时内产生 **22 条 Issues 更新**（18 活跃/新开，4 关闭）与 **51 条 PR 更新**（34 待合并，17 已合并/关闭），并发布 **v0.2.4-nightly 构建**。社区聚焦于**多智能体协作架构（Phase 2）**的落地推进，同时密集修复 v0.2.4 版本引入的**频道配置持久化回归问题**（Telegram/Discord/QQ 的 token 丢失）。Hook 系统增强、MCP 协议支持、新频道集成（Chatmail、Mattermost）等前沿功能进入活跃开发期，项目技术迭代速度显著加快。

---

## 2. 版本发布

### 🔧 Nightly Build: v0.2.4-nightly.20260330.93f4c4a8

| 属性 | 详情 |
|:---|:---|
| **版本类型** | 自动化夜间构建（可能不稳定） |
| **完整变更日志** | [v0.2.4...main](https://github.com/sipeed/picoclaw/compare/v0.2.4...main) |
| **关键合入** | 频道配置修复、多智能体发现提示、Cron 系统重构、Slack Markdown 转换器等 |

> ⚠️ **使用建议**：生产环境建议等待稳定版，开发环境可试用以验证近期修复。

---

## 3. 项目进展

### ✅ 今日已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 影响评估 |
|:---|:---|:---|:---|
| [#2123](https://github.com/sipeed/picoclaw/pull/2123) | lbriers | **修复频道密钥丢失根因**：确保编辑后的 secret 字段（`_token`）正确包含在保存 payload 中 | 🔴 **关键修复**：解决 v0.2.4 大规模配置回归问题 |
| [#2024](https://github.com/sipeed/picoclaw/pull/2024) | Alix-007 | **Discord/Telegram/QQ 配置持久化**：修复 PATCH `/api/config` 验证错误导致 token 更新失败 | 🔴 **关键修复**：覆盖 #2027, #2072, #2033, #2005 |
| [#2147](https://github.com/sipeed/picoclaw/pull/2147) | yinwm | **Cron 系统架构重构**：移除 `deliver`/`type` 参数，统一路由至 Agent 执行路径 | 🟡 技术债务清理，为后续调度增强奠基 |
| [#1834](https://github.com/sipeed/picoclaw/pull/1834) | davidwarshawsky | **Gemini OpenAI 兼容端点修复**：修正 `api_base` 后缀与协议识别 | 🟢 扩展模型接入能力 |
| [#2166](https://github.com/sipeed/picoclaw/pull/2166) | ShenQingchuan | **Web Launcher 暗黑模式修复**：Skills 页面对比度问题 | 🟢 UI/UX 打磨 |
| [#2154](https://github.com/sipeed/picoclaw/pull/2154), [#2162](https://github.com/sipeed/picoclaw/pull/2162) | cytown | **日志系统增强**：高亮组件名、默认使用包名 | 🟢 可观测性提升 |

**整体推进**：项目今日完成**配置系统稳定性紧急修复**，解除 v0.2.4 发布后的用户阻塞问题；同时**多智能体架构（Phase 2）**从设计讨论进入代码实现阶段。

---

## 4. 社区热点

### 🔥 讨论最活跃的议题

| 排名 | Issue/PR | 评论数 | 核心诉求 | 分析 |
|:---|:---|:---:|:---|:---|
| 1 | [#1919](https://github.com/sipeed/picoclaw/issues/1919) Seahorse 生物启发式记忆系统 | **8** | 为 AI Agent 构建类海马体记忆架构（短期无损压缩 + 长期语义存储） | 前沿 AI 架构探索，与 Phase 2 多智能体规划形成技术协同，可能重塑 Agent 上下文管理范式 |
| 2 | [#1934](https://github.com/sipeed/picoclaw/issues/1934) Phase 2 多智能体协作 Meta 议题 | **6** | 单 Pico 实例内多 Agent 协作的核心设计 | 路线图级议题，今日衍生出具体实现计划 #2148 和代码 PR #2158 |
| 3 | [#2027](https://github.com/sipeed/picoclaw/issues/2027) Telegram 配置无法保存 | **5** | v0.2.4 升级后 Bot Token 字段验证失败 | **已修复**（#2024），反映版本发布后的配置系统回归测试缺口 |
| 4 | [#571](https://github.com/sipeed/picoclaw/issues/571) 工具执行进度反馈 | **4** | 长时工具操作（搜索/文件/命令）的实时状态可见性 | 用户体验痛点，与 #2137 "实时任务列表" 形成互补需求，暗示需要统一的状态流设计 |
| 5 | [#1228](https://github.com/sipeed/picoclaw/issues/1228) Docker 镜像预装开发工具 | **4** | 镜像内缺失 python/curl/npx/git 等基础工具 | 开发者体验摩擦，涉及镜像体积与功能完备性的权衡 |

**社区信号**：用户群体从**早期尝鲜者**向**生产环境部署者**演进，对稳定性、可观测性、运维工具链的需求显著上升。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | 修复 PR | 影响范围 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | 频道配置（Telegram/Discord/QQ）token/app_secret 保存丢失 | **已修复** | [#2024](https://github.com/sipeed/picoclaw/pull/2024), [#2123](https://github.com/sipeed/picoclaw/pull/2123) | v0.2.4 全量用户 |
| 🔴 **高** | `/reload` 后媒体存储引用丢失（`media store: unknown ref`） | **待合并** | [#2168](https://github.com/sipeed/picoclaw/pull/2168)（替代 #2040） | 使用文件上传+热重载的用户 |
| 🟡 **中** | `model_fallbacks` 跨提供商配置继承错误 | **待合并** | [#2143](https://github.com/sipeed/picoclaw/pull/2143) | 多模型降级策略用户 |
| 🟡 **中** | Telegram HTML 链接被斜体正则破坏（下划线 URL） | **待合并** | [#2164](https://github.com/sipeed/picoclaw/pull/2164) | Markdown 链接含下划线场景 |
| 🟡 **中** | Google Antigravity OAuth scope 刷新丢失 | **待合并** | [#2163](https://github.com/sipeed/picoclaw/pull/2163) | Cloud Code Assist 用户 |
| 🟡 **中** | Web UI 仅显示 pico 频道会话历史 | **开放** | 无 | 多频道用户的历史追溯 |
| 🟢 **低** | `whatsapp_native` 构建失败 | **开放** | 无 | WhatsappNative 频道用户 |
| 🟢 **低** | `picoclaw cron add` 指令异常 | **开放** | 无 | Cron 功能用户 |

---

## 6. 功能请求与路线图信号

### 🎯 高概率纳入下一版本（已有 PR 或活跃开发）

| 功能 | Issue/PR | 状态 | 技术信号 |
|:---|:---|:---|:---|
| **多智能体发现与委托** | [#2148](https://github.com/sipeed/picoclaw/issues/2148) → [#2158](https://github.com/sipeed/picoclaw/pull/2158) | 编码中 | Phase 2 核心，系统提示注入轻量级 Agent 注册表 |
| **Chatmail/Delta Chat 频道** | [#2167](https://github.com/sipeed/picoclaw/pull/2167) | 待合并 | 去中心化通信协议支持，含 Reaction 能力 |
| **Mattermost 企业频道** | [#1587](https://github.com/sipeed/picoclaw/issues/1587) → [#1586](https://github.com/sipeed/picoclaw/pull/1586) | 待合并 | 企业协作场景扩展 |
| **Slack Markdown→mrkdwn 转换** | [#2165](https://github.com/sipeed/picoclaw/pull/2165) | 待合并 | 频道适配层完善 |
| **本地图像加载工具** | [#2116](https://github.com/sipeed/picoclaw/pull/2116) | 待合并 | Vision 能力扩展至本地文件 |
| **Hook 系统增强：MCP 工具注入** | [#2160](https://github.com/sipeed/picoclaw/issues/2160) | 新开 | 外部工具生态（Model Context Protocol）对接 |

### 📡 中长期路线图信号（设计/讨论阶段）

| 功能 | Issue | 关键洞察 |
|:---|:---|:---|
| **Seahorse 生物记忆系统** | [#1919](https://github.com/sipeed/picoclaw/issues/1919) | 可能引发 Agent 架构范式变革，需关注与现有 Context/Hooks 系统的集成设计 |
| **实时任务列表/消息编辑** | [#2137](https://github.com/sipeed/picoclaw/issues/2137) | 多步骤任务的可观测性需求，依赖频道能力（消息编辑/Reaction）抽象 |
| **任务取消 `/stop` 命令** | [#2009](https://github.com/sipeed/picoclaw/issues/2009) | 长时任务控制，状态机与信号处理复杂度较高 |
| **Authula 认证集成** | [#1067](https://github.com/sipeed/picoclaw/issues/1067) | 生产安全刚需，社区招募贡献者 |

---

## 7. 用户反馈摘要

### 😫 核心痛点

> *"升级 v0.2.4 后 Telegram 配置无法保存，总是提示 Bot Token 必填"* — [#2027](https://github.com/sipeed/picoclaw/issues/2027) ygcool

> *"Agent 执行工具时零反馈，用户只能盯着空白屏幕"* — [#571](https://github.com/sipeed/picoclaw/issues/571) rahul-hudle

> *"Docker 镜像缺少 python/curl，真实任务难以执行"* — [#1228](https://github.com/sipeed/picoclaw/issues/1228) jermeyhu

> *"无法切换模型，看不到列表，还要手动打字记忆模型名"* — [#2145](https://github.com/sipeed/picoclaw/issues/2145) 3mp3ri0r

### 😊 满意场景

- 多智能体协作架构的清晰路线图（Phase 1→2）获得技术用户认可
- 频道生态快速扩展（Chatmail、Mattermost、Slack 增强）满足企业部署需求

### 🔍 使用场景演进

| 场景 | 证据 | 产品启示 |
|:---|:---|:---|
| **边缘设备部署** | RPi Zero W + Ollama 本地模型 ([#1757](https://github.com/sipeed/picoclaw/issues/1757)) | 需优化资源占用与 ARM 构建 |
| **自动化运维** | Cron 定时任务 + 文件监控 ([#1757](https://github.com/sipeed/picoclaw/issues/1757)) | 任务可靠性、失败重试、状态通知需加强 |
| **团队知识库** | Mattermost/Slack/Discord 企业集成 | 权限管理、审计日志、数据隔离成刚需 |

---

## 8. 待处理积压

### ⏰ 需维护者关注的高价值长期议题

| Issue | 创建时间 | 状态 | 风险/机会 |
|:---|:---|:---|:---|
| [#1532](https://github.com/sipeed/picoclaw/issues/1532) `picoclaw cron add` 严重 Bug | 2026-03-14 | 🔴 高优先级开放 | Cron 核心功能不可用，影响自动化场景 |
| [#1582](https://github.com/sipeed/picoclaw/issues/1582) 多 Agent 配置 model 未找到 | 2026-03-15 | 开放，2 评论 | 配置解析逻辑缺陷，阻碍多 Agent 生产部署 |
| [#1567](https://github.com/sipeed/picoclaw/issues/1567) WhatsappNative 构建失败 | 2026-03-14 | 开放，1 评论 | 频道生态完整性缺口 |
| [#1067](https://github.com/sipeed/picoclaw/issues/1067) Authula 认证集成 | 2026-03-04 | 开放，招募中 | **安全合规 blocker**，企业采用关键路径 |
| [#1919](https://github.com/sipeed/picoclaw/issues/1919) Seahorse 记忆系统 | 2026-03-23 | 8 评论活跃 | 技术领导力机会，需架构师介入评估可行性 |

---

**日报生成时间**：2026-03-30  
**数据来源**：GitHub API / sipeed/picoclaw  
**下次关注**：v0.2.5 稳定版发布节奏、Phase 2 多智能体 PR 合并进展、配置系统回归测试策略

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-03-30

## 1. 今日速览

NanoClaw 社区今日保持**极高活跃度**：24小时内 Issues 更新17条（16条活跃/新开，仅1条关闭），PR 更新50条（49条待合并，1条已合并/关闭）。**无新版本发布**。社区焦点集中在**容器安全加固**（Docker 部署模式、OAuth 令牌隔离）、**多模型后端支持**（AWS Bedrock、GitHub Copilot）以及**上下文压缩与记忆系统优化**三大方向。值得注意的是，今日出现3个并行的"Research"类 Issue，显示社区正在积极探索外部生态集成。整体项目健康度良好，但 PR 积压量较大（49条待合并），可能影响迭代速度。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

今日仅 **1 条 PR 已合并/关闭**，核心进展有限：

| PR | 状态 | 说明 |
|:---|:---|:---|
| #127 | 已关闭 | Opencode 配置支持（Issue 形式，实际为社区问答关闭） |

**关键观察**：49条待合并 PR 中，以下几条代表重要功能方向，建议优先关注：

- **[#1514] feat: add NanoClaw web dashboard** —— 首个官方 Web 管理界面，提供实时服务状态、消息量统计、活跃容器监控，填补运维可视化缺口
- **[#1528] feat: add token cost tracking** —— 运行级 Token 成本追踪，支持按 run 统计输入/输出/缓存消耗，为成本优化提供数据基础
- **[#1408] feat(nanoclaw): rename CLI to `nanoclaw`** —— CLI 品牌统一与命令体系重构，涉及破坏性变更

**整体评估**：今日代码合并不活跃，但待审 PR 质量较高，建议维护者加速 review 以释放社区贡献动能。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| Issue | 评论 | 核心诉求 |
|:---|:---|:---|
| [#127] Opencode setup? | 6 评论, 👍9 | **多模型生态兼容性** —— 用户明确拒绝 Claude 绑定，寻求 OpenCode 替代方案，反映社区对供应商锁定的担忧 |
| [#1503] nanoclaw.dev SSL 证书失效 | 5 评论, 👍0 | **基础设施可靠性** —— 官网证书问题直接影响新用户信任，需紧急响应 |
| [#1482] Host idle state detection | 2 评论 | **容器生命周期精确控制** —— 流式结果与 IPC 等待状态混淆，影响资源调度准确性 |

### 🔥 高价值 Research 提案（同日三连发）

作者 `butterandcode` 一次性提交三项外部工具研究，形成**上下文压缩与记忆增强**专题：

| Issue | 工具 | 价值 |
|:---|:---|:---|
| [#1493] Headroom | API 级上下文压缩代理 | 透明代理架构，无需 Agent 改造，直接降低 Token 成本 |
| [#1494] RTK | CLI 输出压缩（Rust） | 60-90% 压缩率，<10ms 开销，针对 shell 命令输出优化 |
| [#1495] MemStack | 持久化记忆与会话上下文 | 三层架构（Hooks/Rules/Memory），解决文件记忆膨胀问题 |

**背后信号**：社区正在从"功能扩展"转向"效率优化"，Token 成本与上下文管理成为规模化部署的瓶颈。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 描述 | Fix PR |
|:---|:---|:---|:---|
| 🔴 **P0-紧急** | [#1531] Session ID 导致无限重试 | 失败容器残留 session ID 被写回数据库，触发无限循环 | 无 |
| 🔴 **P0-紧急** | [#1487] 容器内运行崩溃 | NanoClaw 在 Docker 容器内自毁，连带杀死 Claude Code 和 shell | 无 |
| 🟡 **P1-高** | [#1454] Sidecar 空配置立即退出 | `WATCH_CONTAINER`/`WATCH_CONFIGS` 未设置时，任务取消逻辑错误导致 sidecar 关闭 | 无 |
| 🟡 **P1-高** | [#1503] 官网 SSL 证书失效 | 基础设施问题，影响首次访问信任 | 无 |
| 🟢 **P2-中** | [#1522] WhatsApp 媒体消息不可访问 | 照片/语音消息仅返回 `media_id`，无解析工具 | 无 |

**关键缺陷分析**：
- **#1531** 与 **#1461**（fix: clear stale session IDs）高度相关，建议合并审查
- **#1487** 与 **#1485**（Support running nanoclaw in container）形成悖论：社区既希望容器化部署，又遭遇容器内崩溃，需架构层面决策

---

## 6. 功能请求与路线图信号

### 已提交 PR、高合并概率

| PR | 功能 | 路线图契合度 |
|:---|:---|:---|
| #1351 | GitHub Copilot SDK 后端支持 | ⭐⭐⭐⭐⭐ 多模型战略核心 |
| #1492 | AWS Bedrock 认证后端 | ⭐⭐⭐⭐⭐ 企业合规刚需 |
| #1343 | `/add-cli-backend` skill（`claude -p` 替代 SDK） | ⭐⭐⭐⭐⭐ 规避 Anthropic TOS 风险 |
| #1458 | Graphiti 知识图谱记忆 | ⭐⭐⭐⭐☆ 替代文件记忆的长线方案 |
| #1514 | Web Dashboard | ⭐⭐⭐⭐☆ 运维可视化基础设施 |

### 架构级提案（需 RFC）

| Issue | 提案 | 评估 |
|:---|:---|:---|
| #1490 | 主机级安全强制（核心变更 vs Skill） | 多租户隔离的合规基石，建议纳入 v2.0 架构设计 |
| #1500 | Gmail/Calendar OAuth 代理隔离 | 安全加固，与 #1485 容器化部署协同 |
| #1537 | 远程 Agent 对话式审批流 | Telegram/WhatsApp 场景的关键体验缺口 |

---

## 7. 用户反馈摘要

### 😤 痛点

> *"The base setup runs curl install scripts directly on the host os, this is.. quite nasty, and very vulnerable from supply chain attacks"* — [#1485](https://github.com/qwibitai/nanoclaw/issues/1485)

**核心焦虑**：安装脚本的安全信任链，容器化部署需求迫切

> *"Using subscription OAuth tokens with the Agent SDK violates Anthropic's TOS"* — [#1343](https://github.com/qwibitai/nanoclaw/pull/1343)

**合规压力**：企业用户面临 Anthropic 政策风险，急需 CLI 路径替代

> *"The fork is public and can not be made private... health care system"* — [#1424](https://github.com/qwibitai/nanoclaw/issues/1424)

**隐私困境**：强制公开 fork 与敏感场景部署冲突

### 😊 满意

- 社区技能生态活跃（AstrBot、Instacart、LinkedIn 等集成）
- 多通道支持（WhatsApp、Telegram）覆盖主流场景

### 🤔 困惑

- Opencode 等非 Claude 模型配置缺乏文档 [#127](https://github.com/qwibitai/nanoclaw/issues/127)
- 容器状态机语义不清晰（idle vs waiting）[#1482](https://github.com/qwibitai/nanoclaw/issues/1482)

---

## 8. 待处理积压

| 类型 | 条目 | 天数 | 风险 |
|:---|:---|:---|:---|
| PR | [#1355] AstrBot 通道集成 | 7 天 | 社区贡献流失，竞品可能抢先 |
| PR | [#1380] AgentSH 安全策略引擎 | 7 天 | 安全加固需求迫切 |
| PR | [#1433] Swarm IPC 聚合 | 5 天 | 多 Agent 协调核心能力 |
| Issue | [#1424] Fork 安全加固 | 5 天 | 企业用户采纳障碍 |
| Issue | [#1458] Graphiti 知识图谱 | 4 天 | 记忆系统长期方案 |

**维护者行动建议**：
1. **立即**：修复 #1503 SSL 证书、审查 #1531 无限重试 fix
2. **本周**：合并 #1514 Web Dashboard、#1528 Token 追踪，释放可视化与成本管理能力
3. **本月**：就 #1485/#1487 容器化部署悖论发起架构 RFC，统一技术路线

---

*本日报基于 GitHub 公开数据生成，所有链接指向 `github.com/qwibitai/nanoclaw`*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-03-30

---

## 1. 今日速览

NullClaw 今日保持**中等活跃度**，核心开发者在工具层持续投入。过去24小时内新增 2 个 Issues 与 2 个 PR，无版本发布。值得关注的是，社区对**微信生态集成**的需求持续升温（Issue #714 评论达 8 条），而核心开发者 `manelsen` 正聚焦于**工具层重构与 Ollama 适配修复**，显示项目正处于"稳定性优化 + 多平台扩展"的并行阶段。暂无阻塞性 Bug 报告，整体健康度良好。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

今日 **0 个 PR 合并/关闭**，2 个 PR 处于待评审状态：

| PR | 作者 | 核心贡献 | 项目推进度 |
|:---|:---|:---|:---|
| [#745](https://github.com/nullclaw/nullclaw/pull/745) | manelsen | 提取文件工具公共逻辑至 `file_common.zig`，统一 6 个文件操作工具的路径预检与引导流程 | **代码质量 + 可维护性**：减少重复代码，为后续工具扩展奠定基础 |
| [#744](https://github.com/nullclaw/nullclaw/pull/744) | manelsen | 修复 Ollama 适配器中 `scheduler_tool`/`schedule_tool` 别名未规范化的问题，统一映射至标准 `schedule` 工具名 | **兼容性修复**：解决特定模型调用调度工具时的识别失败问题 |

**整体评估**：今日进展以"技术债务清理"为主，功能性突破有限，但工具层的标准化将为后续插件生态（如 Issue #714 的微信集成）提供更稳固的基础设施。

---

## 4. 社区热点

### 🔥 最活跃讨论：微信插件集成支持（Issue #714）

| 指标 | 数据 |
|:---|:---|
| 链接 | [nullclaw/nullclaw#714](https://github.com/nullclaw/nullclaw/issues/714) |
| 评论数 | **8 条**（全站最高）|
| 创建时间 | 2026-03-25（已持续 5 天）|
| 最新更新 | 2026-03-29 |

**核心诉求分析**：
- **市场驱动**：微信在中国大陆及东南亚的超大规模用户基础
- **竞争压力**：其他 OpenClaw 分支已实现该功能，NullClaw 存在生态位流失风险
- **技术路径**：依赖官方 WeChat Plugin 与 OpenClaw 的集成接口

**维护者响应状态**：暂无官方成员回复，社区处于"需求聚合"阶段。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR 状态 |
|:---|:---|:---|:---|
| 🟡 **中等** | [#743](https://github.com/nullclaw/nullclaw/issues/743) | `scheduler_tool` 配置正确但无法访问，附截图与状态输出 | **疑似相关**：[#744](https://github.com/nullclaw/nullclaw/pull/744) 修复 Ollama 适配器中的 scheduler 别名问题，可能为同一根因 |

**关联分析**：Issue #743 报告的问题与 PR #744 的修复范围高度重合——均涉及 scheduler 工具的名称解析。建议维护者在合并 #744 后主动 @ 用户 `ats-bcon` 验证修复效果。

---

## 6. 功能请求与路线图信号

| 功能请求 | 来源 | 纳入可能性评估 |
|:---|:---|:---|
| **微信插件集成** | [Issue #714](https://github.com/nullclaw/nullclaw/issues/714) | ⭐⭐⭐☆☆ **中等偏高** — 用户基数大、竞品已实现，但需评估与核心架构的耦合度；PR #745 的工具层重构可能为此类插件化扩展预留接口 |
| **多模型适配器稳健性** | [PR #744](https://github.com/nullclaw/nullclaw/pull/744) | ⭐⭐⭐⭐⭐ **高** — 已在进行中，属于核心维护优先级 |

**路线图信号**：`manelsen` 连续两日提交工具层 PR，显示项目正从"功能堆砌"转向"架构治理"，这对第三方集成（如微信插件）是积极信号。

---

## 7. 用户反馈摘要

### 痛点
- **工具名称不一致性**：Ollama 用户对 `scheduler_tool` vs `schedule_tool` vs `schedule` 的混淆（Issue #743）
- **配置即用的期望落差**：用户预期"配置正确 = 功能可用"，实际受适配器层隐式转换影响

### 使用场景
- **企业/个人自动化**：微信集成诉求暗示用户希望将 NullClaw 作为**中国市场的 AI 自动化中枢**
- **多模型后端切换**：Ollama 作为本地部署选项的使用率在上升

### 满意度缺口
- 竞品功能 parity 压力：用户明确提及"其他 OpenClaw forks 已支持"

---

## 8. 待处理积压

| 类型 | 条目 | 风险提醒 |
|:---|:---|:---|
| **高互动未响应 Issue** | [#714](https://github.com/nullclaw/nullclaw/issues/714) 微信集成 | 5 天 8 评论，0 官方回复；社区热情可能随时间衰减，竞品窗口期有限 |
| **待评审 PR** | [#744](https://github.com/nullclaw/nullclaw/pull/744), [#745](https://github.com/nullclaw/nullclaw/pull/745) | 均为同一位开发者提交，建议优先评审以维持贡献者积极性 |

---

*日报生成时间：2026-03-30 | 数据来源：GitHub API 快照*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 · 2026-03-30

> **项目定位**：NEAR AI 开源的智能体与个人 AI 助手框架，支持多通道交互、WASM 沙箱工具、MCP 扩展协议

---

## 1. 今日速览

IronClaw 今日保持**高强度开发节奏**，24小时内产生 **50 个 PR 更新**（43 个待合并）和 **8 个 Issue 更新**，活跃度评级为 🔥 **极高**。核心特征是**大规模 staging 代码合并流水线**——CI 自动推进了 11 个批次的主线晋升，显示项目处于快速迭代期。社区同步关注**金融安全执行层**与**异步交易审批**两大高风险架构设计，以及 MiniMax API 集成问题。无新版本发布。

---

## 2. 版本发布

**无** — 今日无新版本发布。

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 关键变更 | 项目推进 |
|:---|:---|:---|:---|
| [#1571](https://github.com/nearai/ironclaw/pull/1571) | jr42 | **fix(mcp)**: 工具注解反序列化改用 camelCase 以符合 MCP 规范 | 修复与 Model Context Protocol 生态的兼容性，确保工具注解（destructive_hint, read_only_hint 等）能被正确解析 |

### 已关闭的重要 Issue

| Issue | 作者 | 解决内容 |
|:---|:---|:---|
| [#1605](https://github.com/nearai/ironclaw/issues/1605) | ilblackdragon | **DB-backed 用户管理系统** — 从静态 env var 配置迁移至完整的注册、邀请、API Token CRUD 体系 |
| [#1611](https://github.com/nearai/ironclaw/issues/1611) | JZKK720 | **Docker Sandbox Worker 迭代限制循环** — 502 修复后本地模型（Ollama）仍偶发空工具补全导致 50 次迭代耗尽 |
| [#1629](https://github.com/nearai/ironclaw/issues/1629) | rajulbhatnagar | **Bedrock 工具块验证错误** — 无 toolConfig 时自动剥离 toolUse/toolResult 内容块 |
| [#1664](https://github.com/nearai/ironclaw/issues/1664) | rajulbhatnagar | **技能递归发现** — 支持嵌套分组目录结构，不再仅扫描单层 |

**整体进展评估**：用户管理基础设施、AWS Bedrock 兼容性、技能系统可扩展性三大板块完成闭环，为后续功能扩展奠定数据层与工具层基础。

---

## 4. 社区热点

### 高讨论度议题

| 排名 | Issue/PR | 评论数 | 核心诉求 |
|:---|:---|:---:|:---|
| 🥇 | [#1739](https://github.com/nearai/ironclaw/issues/1739) Async transaction approval system with WalletConnect | **4** | **高价值交易的人机分离审批架构** — 要求 Agent 声明意图后，人类在独立安全通道（Agent 不可见）完成审批，解决"Agent 能看见私钥/能绕过审批"的根本安全悖论 |
| 🥈 | [#1712](https://github.com/nearai/ironclaw/issues/1712) Architect secure financial execution layer | **1** | 系统性设计托管、签名、审批、策略执行、跨应用加密操作的完整安全框架，与 #1739 形成"架构-实现"呼应 |

### 热点分析

- **#1739** 的 4 条评论集中讨论**两阶段异步模式**：Agent 侧 `declare intent` → 工具侧 `simulate & queue` → 人类侧 `WalletConnect 签名`。这是 IronClaw 向"可受托管理真实资产"演进的关键门槛。
- **#1712** 被标记为 `[risk: high]`，涉及 5 个 scope（agent/db/safety/secrets），显示社区对金融场景安全性的系统性焦虑。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#1742](https://github.com/nearai/ironclaw/issues/1742) MiniMax API is not used correctly | MiniMax-M2.7 返回 401 Unauthorized，`authorized_error` 提示 API 调用方式错误 | **待修复** — 今日新报，无 PR |
| 🟡 中 | [#1611](https://github.com/nearai/ironclaw/issues/1611) *(已关闭)* | Ollama 本地模型空工具补全导致迭代耗尽 | ✅ **已修复**（502 修复后续问题） |
| 🟡 中 | [#1629](https://github.com/nearai/ironclaw/issues/1629) *(已关闭)* | Bedrock 工具块与 toolConfig 不匹配 | ✅ **已修复** |

**稳定性评估**：核心运行时（迭代控制、Bedrock 适配）趋于稳定，但**第三方 LLM 提供商集成**（MiniMax）出现新的认证层问题，需关注其 API 规范变更。

---

## 6. 功能请求与路线图信号

### 今日新增功能议题

| Issue | 标签 | 纳入可能性 | 判断依据 |
|:---|:---|:---:|:---|
| [#1741](https://github.com/nearai/ironclaw/issues/1741) Kernel/extension OS-like extensibility | `enhancement`, `scope: kernel`, `scope: extensions` | ⭐⭐⭐⭐⭐ **极高** | 作者 ilblackdragon（核心维护者），直接关联现有 WASM/MCP/技能系统，是对"编译时硬编码过多"的技术债主动清理 |
| [#1739](https://github.com/nearai/ironclaw/issues/1739) Async transaction approval | `enhancement` | ⭐⭐⭐⭐⭐ **极高** | 与 #1712 形成完整金融安全叙事，PR #1622（NEAR intents）已铺垫读能力，写能力审批是天然下一步 |
| [#1742](https://github.com/nearai/ironclaw/issues/1742) MiniMax API fix | `bug` | ⭐⭐⭐⭐☆ 高 | 提供商兼容性属于基线要求，修复成本低 |

### 路线图信号

- **v2 架构引擎**（PR [#1557](https://github.com/nearai/ironclaw/pull/1557)）：7,275 行 Rust 的 `ironclaw_engine` 统一执行模型，处于并行开发状态，可通过桥接适配器切换
- **反漂移监控**（PR [#1662](https://github.com/nearai/ironclaw/pull/1662)）：零额外 LLM 成本的规则化 DriftMonitor，已进入 agentic loop 全路径集成

---

## 7. 用户反馈摘要

### 真实痛点

| 来源 | 痛点 | 场景 |
|:---|:---|:---|
| [#1611](https://github.com/nearai/ironclaw/issues/1611) 评论 | Ollama 本地模型"沉默-重试"循环耗尽迭代配额 | 开发者使用本地 LLM 进行低成本开发/测试时，工具调用失败无反馈，导致任务无故中断 |
| [#1605](https://github.com/nearai/ironclaw/issues/1605) 动机描述 | 静态 env var 用户管理无法支撑多租户 SaaS 化 | "添加用户需重启进程"阻断任何生产级部署 |

### 满意点

- **技能递归发现**（#1664）：用户认可目录结构灵活性提升，支持复杂技能包组织
- **Bedrock 兼容性修复**（#1629）：AWS 生态用户可无缝使用 Converse API

---

## 8. 待处理积压

### 长期未响应的高价值 PR

| PR | 创建时间 | 规模/风险 | 阻塞原因 | 建议行动 |
|:---|:---|:---|:---|:---|
| [#1557](https://github.com/nearai/ironclaw/pull/1557) Unified Thread-Capability-CodeAct engine | 2026-03-22 (8天) | XL / high | 43 文件、7K+ 行，需完整验收测试通过桥接适配器 | 维护者需明确验收测试清单与合并时间表 |
| [#1446](https://github.com/nearai/ironclaw/pull/1446) Aliyun Coding Plan support | 2026-03-20 (10天) | XL / low | 新贡献者，涉及 HTTP/1.1 兼容性等细节 | 代码审查反馈待给出 |
| [#1529](https://github.com/nearai/ironclaw/pull/1529) Gmail Content-Length fix | 2026-03-21 (9天) | M / medium | 单文件修复，可能因 scope 较窄被淹没 | 快速通道合并 |

### 需维护者关注

- **43 个待合并 staging PR**：CI 流水线产生大量自动晋升分支，需区分"机械合并"与"需人工审查"的边界，避免 review 疲劳
- **#1742 MiniMax 问题**：新报 provider 兼容性 bug，建议 24h 内确认是否为配置文档问题或代码缺陷

---

*日报生成时间：2026-03-30*  
*数据来源：nearai/ironclaw GitHub 公开 API*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-03-30

> **项目地址**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
> **报告周期**: 2026-03-29 至 2026-03-30（24小时）

---

## 1. 今日速览

LobsterAI 今日呈现**高活跃度开发态势**：7条PR全部处于待合并状态，均为3月29日当日提交，显示团队正在进行密集的功能冲刺。社区侧4条Issues全部为新开或活跃状态，涵盖引擎架构疑虑、稳定性问题及第三方生态对接需求。值得注意的是，今日无PR合并记录，代码仓库处于"蓄力期"——大量功能改进（Prompt模板、Artifacts预览、OAuth登录等）等待集成验证。整体健康度良好，但需关注长期Issue #418关于引擎迁移的战略方向争议。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

**今日无已合并/关闭的 PR**

所有7条PR均处于待合并状态，形成显著的功能积压。按技术方向归类：

| 方向 | PR | 核心贡献 | 状态 |
|:---|:---|:---|:---|
| **认证与接入** | [#644](https://github.com/netease-youdao/LobsterAI/pull/644) | Qwen OAuth一键登录，10秒内发起对话 | 🔶 待合并 |
| **Cowork交互增强** | [#1013](https://github.com/netease-youdao/LobsterAI/pull/1013) | 斜杠触发技能选择器（Slash Command） | 🔶 待合并 |
| | [#1012](https://github.com/netease-youdao/LobsterAI/pull/1012) | 对话式技能创建入口 | 🔶 待合并 |
| | [#1010](https://github.com/netease-youdao/LobsterAI/pull/1010) | 输出文件"在文件夹中显示"操作 | 🔶 待合并 |
| **内容呈现** | [#1011](https://github.com/netease-youdao/LobsterAI/pull/1011) | 可扩展Artifacts预览管道（HTML/React/Mermaid） | 🔶 待合并 |
| **生产力工具** | [#1009](https://github.com/netease-youdao/LobsterAI/pull/1009) | Prompt模板库（变量填充+复制） | 🔶 待合并 |
| **预设生态** | [#1008](https://github.com/netease-youdao/LobsterAI/pull/1008) | 6个新预设Agent模板 | 🔶 待合并 |

**进展评估**: 项目在产品体验层（交互效率、内容可视化、模板复用）形成完整改进矩阵，但缺乏合并动作意味着这些价值尚未触达用户。

---

## 4. 社区热点

### 🔥 最高关注度：引擎架构方向争议
**[#418](https://github.com/netease-youdao/LobsterAI/issues/418)** - *看分支代码，似乎有把引擎切换为openclaw的意思？官方能否澄清一下lobsterAI后续的发展方向*

| 指标 | 数据 |
|:---|:---|
| 创建时间 | 2026-03-15 |
| 最后更新 | 2026-03-29（今日活跃） |
| 评论数 | 1 |

**核心诉求分析**:
- 用户通过代码分支观察到 **OpenClaw 引擎替换** 的技术信号
- 担忧基于 Claude Agent SDK 的 Cowork 功能维护状态
- 质疑 Claude Agent SDK 的"不可控性"是否为迁移主因

**战略信号**: 此Issue触及项目技术栈演进的核心决策，14天未获官方回应已引发社区猜测，建议优先澄清。

---

### 其他活跃议题

| Issue | 类型 | 核心诉求 |
|:---|:---|:---|
| [#1014](https://github.com/netease-youdao/LobsterAI/issues/1014) | 生态对接 | 第三方Claude Code runtime（Dispatch）发现LobsterAI技能，请求添加描述提升可发现性 |
| [#1007](https://github.com/netease-youdao/LobsterAI/issues/1007) | 稳定性求助 | Agent Engine无限重启的配置缓解方案 |
| [#595](https://github.com/netease-youdao/LobsterAI/issues/595) | 平台Bug | Windows开机自启动失败（3秒退出无日志） |

---

## 5. Bug 与稳定性

| 优先级 | Issue | 问题描述 | 影响范围 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|:---|
| 🔴 **P0** | [#1007](https://github.com/netease-youdao/LobsterAI/issues/1007) | Agent Engine无限重启 | 核心功能瘫痪 | 无 | ❌ 待响应 |
| 🟡 **P1** | [#595](https://github.com/netease-youdao/LobsterAI/issues/595) | Windows开机自启动失败（无日志） | Windows用户体验 | 无 | ❌ 待响应（9天） |

**关键观察**:
- **#1007** 的无限重启问题与 #418 的引擎迁移疑虑形成关联——用户实际遭遇的稳定性问题可能强化了对Claude Agent SDK可靠性的担忧
- **#595** 的"无日志"特征表明崩溃发生在日志系统初始化之前，需检查启动顺序或Windows特定权限问题

---

## 6. 功能请求与路线图信号

### 已编码待合并的功能（高纳入概率）

| 功能 | 来源PR | 用户痛点对应 | 路线图信号 |
|:---|:---|:---|:---|
| Prompt模板库 | [#1009](https://github.com/netease-youdao/LobsterAI/pull/1009) | 高频Prompt重复输入、变量易错 | ⭐ 核心生产力场景 |
| Artifacts实时预览 | [#1011](https://github.com/netease-youdao/LobsterAI/pull/1011) | HTML/React/Mermaid需"脑内编译" | ⭐ 差异化体验 |
| 斜杠技能选择器 | [#1013](https://github.com/netease-youdao/LobsterAI/pull/1013) | 技能页面跳转路径长 | ⭐ 交互效率优化 |
| 对话式技能创建 | [#1012](https://github.com/netease-youdao/LobsterAI/pull/1012) | 非技术用户创建门槛 | ⭐ 低代码生态 |
| Qwen OAuth登录 | [#644](https://github.com/netease-youdao/LobsterAI/pull/644) | "10秒内发起对话" | ⭐ 国产化/多模型战略 |
| 预设Agent扩展 | [#1008](https://github.com/netease-youdao/LobsterAI/pull/1008) | 场景覆盖不足（当前仅6个） | ⭐ 垂直场景渗透 |

### 社区提出的新需求

| 需求 | 来源 | 与现有PR关联 |
|:---|:---|:---|
| 技能描述标准化（Dispatch发现） | [#1014](https://github.com/netease-youdao/LobsterAI/issues/1014) | 可与 #1013 技能选择器联动，形成技能市场基础设施 |

---

## 7. 用户反馈摘要

### 核心痛点

| 痛点 | 来源 | 具体表现 |
|:---|:---|:---|
| **引擎稳定性焦虑** | [#1007](https://github.com/netease-youdao/LobsterAI/issues/1007), [#418](https://github.com/netease-youdao/LobsterAI/issues/418) | 无限重启无自愈机制；技术路线不透明 |
| **Windows平台可靠性** | [#595](https://github.com/netease-youdao/LobsterAI/issues/595) | 开机自启动完全失效，且缺乏诊断手段 |
| **技能发现与调用效率** | [#1013](https://github.com/netease-youdao/LobsterAI/pull/1013) PR描述 | 必须跳转技能页面，无法行内快速引用 |

### 使用场景洞察

- **企业/团队场景**: Prompt模板库的变量填充功能暗示B端协作需求（"团队复用"被明确提及）
- **多模型策略**: Qwen OAuth支持显示国内模型接入优先级提升
- **第三方生态**: Dispatch发现技能表明LobsterAI正被纳入外部工具链，需重视可发现性

### 满意度信号

- 今日Issues无表达满意度的评论，PR描述中"10秒内发起对话"等表述显示团队对流畅体验的追求

---

## 8. 待处理积压

### 高优先级待响应

| Issue/PR | 积压天数 | 风险 | 建议动作 |
|:---|:---|:---|:---|
| [#418](https://github.com/netease-youdao/LobsterAI/issues/418) 引擎方向澄清 | **14天** | 社区信任损耗、技术猜测扩散 | 官方维护者直接回应，明确OpenClaw与Claude Agent SDK的共存/迁移策略 |
| [#595](https://github.com/netease-youdao/LobsterAI/issues/595) Windows自启动 | **9天** | 平台基础功能失效 | 分配Windows专项标签，请求用户提供Event Viewer日志 |

### 待合并PR队列风险

- **7条PR同日提交**，存在集成冲突风险，建议：
  1. 优先合并基础设施类（[#1011](https://github.com/netease-youdao/LobsterAI/pull/1011) Artifacts管道）
  2. 用户-facing功能分批验证（[#1009](https://github.com/netease-youdao/LobsterAI/pull/1009) → [#1013](https://github.com/netease-youdao/LobsterAI/pull/1013) → [#1012](https://github.com/netease-youdao/LobsterAI/pull/1012)）
  3. [#644](https://github.com/netease-youdao/LobsterAI/pull/644) Qwen OAuth需安全审计

---

**日报生成时间**: 2026-03-30  
**数据截止时间**: 2026-03-29 24:00 UTC+8

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-03-30

## 1. 今日速览

Moltis 今日保持**中高活跃度**，24小时内完成3个Issues闭环（2个功能增强+1个Bug修复），PR管线中有2个待合并的重要功能分支。核心进展集中在**Z.AI服务商生态完善**（新增Coding Plan专用端点）和**会话管理体验升级**（加密保险箱UX优化）。社区对Matrix协议支持、本地推理能力的需求持续发酵，但暂无新版本发布计划。

---

## 2. 版本发布

**无** — 今日未发布新版本。

---

## 3. 项目进展

### 已合并/关闭的 PR

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#517](https://github.com/moltis-org/moltis/pull/517) feat(providers): add zai-code provider for Z.AI Coding plan | penso | 为Z.AI Coding Plan订阅者提供专用API端点 (`api.z.ai/api/coding/paas/v4`)，解决"余额不足"误报问题 | **关键生态补全**：消除Z.AI用户的付费阻断，支撑Issue #185的Coding Plan路线图 |
| [#176](https://github.com/moltis-org/moltis/issues/176) [CLOSED] | gazambuja | 系统提示词注入UTC时间戳 | 提升AI时间感知能力，支撑日程/提醒类Agent场景 |
| [#414](https://github.com/moltis-org/moltis/issues/414) [CLOSED] | najef1979-code | z.ai网络连接问题排查闭环 | 用户引导文档优化，减少新手配置摩擦 |
| [#485](https://github.com/moltis-org/moltis/issues/485) [CLOSED] | cedhuf | 内置工具JSON Schema严格模式兼容性修复 | 消除OpenAI/Anthropic等严格校验提供商的调用失败 |

**整体评估**：今日闭环聚焦**服务商可靠性**（Z.AI双端点架构）和**标准合规性**（JSON Schema/时间上下文），为生产环境稳定性奠定基础。

---

## 4. 社区热点

| 排名 | 议题 | 热度指标 | 核心诉求分析 |
|:---|:---|:---|:---|
| 🔥1 | [#176](https://github.com/moltis-org/moltis/issues/176) 系统提示词添加时间戳 | 15评论, 1👍, 41天周期 | **Agent时空感知刚需**：用户需要AI理解"现在几点"以执行定时任务、日程提醒，反映Moltis向长期运行Agent演进的需求 |
| 🔥2 | [#414](https://github.com/moltis-org/moltis/issues/414) z.ai开箱即用问题 | 8评论, 0👍, 18天周期 | **新手体验痛点**：服务商配置复杂度超出预期，社区需要更智能的端点探测或一键配置 |
| 🔥3 | [#185](https://github.com/moltis-org/moltis/issues/185) Z.AI Coding Plan支持 | 5评论, 5👍 | **成本优化诉求**：Coding Plan订阅者被错误路由到通用端点导致计费异常，PR #517直接响应此需求 |

**趋势洞察**：Z.AI生态相关议题占据3/6的活跃Issue，显示该服务商在Moltis用户中的渗透率显著提升，需持续投入适配资源。

---

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 | Fix PR | 影响范围 |
|:---|:---|:---|:---|:---|
| 🟡 中 | [#485](https://github.com/moltis-org/moltis/issues/485) 内置工具生成无效JSON Schema | **已关闭** | 内置修复 | 使用严格模式提供商（OpenAI/Anthropic）的工具调用场景 |
| 🟡 中 | [#414](https://github.com/moltis-org/moltis/issues/414) z.ai网络配置错误 | **已关闭** | 文档/配置优化 | Z.AI新用户首次配置 |

**风险评估**：今日无高严重度Bug报告，稳定性态势良好。JSON Schema问题快速闭环（1天）显示代码审查流程有效。

---

## 6. 功能请求与路线图信号

| Issue | 需求 | 社区支持 | 纳入可能性 | 关键障碍 |
|:---|:---|:---|:---|:---|
| [#185](https://github.com/moltis-org/moltis/issues/185) Z.AI Coding Plan | 专用计费端点 | 5👍 | **✅ 已实现** | PR #517已合并 |
| [#233](https://github.com/moltis-org/moltis/issues/233) Matrix协议支持 | 去中心化消息通道 | 2👍, 3评论 | 🟡 中等 | 需评估与现有Discord/Telegram架构的复用性 |
| [#490](https://github.com/moltis-org/moltis/issues/490) Local thinking | 本地推理/思维链 | 0👍, 2评论 | 🟡 中等 | 需明确与现有Ollama/llama.cpp集成的边界 |

**路线图信号**：PR [#503](https://github.com/moltis-org/moltis/pull/503) 中提及的"Hermes comparison roadmap"暗示团队正在进行**多Agent框架对标研究**，可能预示架构层面的重大升级。

---

## 7. 用户反馈摘要

### 痛点
- **服务商配置摩擦**（#414）："manual gives network errors" — 文档与实际情况存在gap
- **计费端点混淆**（#185）：Coding Plan订阅者被错误计费，服务商API设计缺乏区分度

### 满意点
- **快速响应**：#485 JSON Schema问题24小时内获得修复
- **安全UX改进**（#518预览）：保险箱密封状态下仍可访问会话历史，平衡安全与可用性

### 使用场景
- **时间感知Agent**（#176）：用户构建需要理解"当前时间"的日程管理、提醒类Agent
- **多服务商fallback**：Z.AI作为成本优化选项与主服务商并行使用

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 最后更新 | 风险 | 建议动作 |
|:---|:---|:---|:---|:---|
| [#233](https://github.com/moltis-org/moltis/issues/233) Matrix Support | 2026-02-25 | 2026-03-29 | 33天无维护者响应，社区需求明确（去中心化场景） | 标记`help wanted`或提供架构设计草案征求社区贡献 |
| [#518](https://github.com/moltis-org/moltis/pull/518) 保险箱UX优化 | 2026-03-29 | 2026-03-29 | 新PR待审 | 优先审查：修复安全与易用性的关键权衡 |
| [#503](https://github.com/moltis-org/moltis/pull/503) 会话召回与SSH运行时 | 2026-03-28 | 2026-03-29 | 功能集较大，需分阶段合并 | 建议拆分：会话召回、SSH UX、技能包导出可独立发布 |

---

*日报生成时间：2026-03-30 | 数据来源：github.com/moltis-org/moltis*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-03-30

## 1. 今日速览

CoPaw 今日保持**高活跃度**，24小时内产生 **37 条 Issues 更新**（26 新开/活跃，11 关闭）和 **34 条 PR 更新**（18 待合并，16 已合并/关闭）。社区贡献显著，多位首次贡献者（first-time-contributor）提交 PR。核心进展集中在**国际化修复**（语言设置持久化）、**Windows 安装体验优化**、**频道基础设施测试框架**建立，以及**钉钉生态扩展**（AI 表格/文档操作）。项目整体健康度良好，Bug 修复响应迅速，但 CPU 空转、长任务中断等稳定性问题仍需关注。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 项目推进 |
|:---|:---|:---|:---|
| [#1544](https://github.com/agentscope-ai/CoPaw/pull/1544) | YingchaoX | **ACP (Agent Client Protocol) 外部 Agent 支持** | 里程碑功能：CoPaw 可通过 ACP 协议调用 OpenCode、Qwen-code、Gemini CLI 等外部 Agent，扩展生态互操作性 |
| [#2489](https://github.com/agentscope-ai/CoPaw/pull/2489) | xieyxclack | 修复 Windows 安装脚本 PATH 更新失败 | 解决 [#2488](https://github.com/agentscope-ai/CoPaw/issues/2488) 的 `SetItemProperty` 拼写错误，改善 Windows 新手体验 |
| [#2496](https://github.com/agentscope-ai/CoPaw/pull/2496) | xieyxclack | 更新 README 和入门文档 | 文档质量提升 |
| [#2486](https://github.com/agentscope-ai/CoPaw/pull/2486) | xieyxclack | 更新 Magic Command 文档 | 文档完善 |

### 待合并的关键 PR（18 个）

| PR | 状态 | 意义 |
|:---|:---|:---|
| [#1837](https://github.com/agentscope-ai/CoPaw/pull/1837) / [#2506](https://github.com/agentscope-ai/CoPaw/pull/2506) | 测试框架 | **11 个频道全量契约测试**，建立"强契约门+软单元测试门"分层策略，为频道稳定性奠基 |
| [#2426](https://github.com/agentscope-ai/CoPaw/pull/2426) | 性能优化 | 频道管理模块**按需懒加载**，优化启动性能 |
| [#2498](https://github.com/agentscope-ai/CoPaw/pull/2498) | 体验修复 | Agent 创建时使用控制台语言，修复国际化问题 |
| [#2501](https://github.com/agentscope-ai/CoPaw/pull/2501) | 交互升级 | 飞书频道**流式打字机卡片**，实时逐字显示 AI 回复 |
| [#2465](https://github.com/agentscope-ai/CoPaw/pull/2465) | 生态扩展 | **钉钉 AI 表格/文档操作工具**，对应路线图 Task 19 |

---

## 4. 社区热点

### 🔥 最高讨论热度

| Issue | 评论 | 核心诉求 |
|:---|:---|:---|
| [#2291 Help Wanted: Open Tasks](https://github.com/agentscope-ai/CoPaw/issues/2291) | **36** | 官方任务认领板，P0-P2 优先级任务开放，社区贡献入口 |
| [#2218 CPU 100% 空转问题](https://github.com/agentscope-ai/CoPaw/issues/2218) | **17** | **严重性能问题**：epoll 忙等待循环导致空闲时 CPU 满载，影响部署成本 |
| [#2482 重度用户痛点反馈](https://github.com/agentscope-ai/CoPaw/issues/2482) | **9** | 真实开发场景的三大痛点：①单条对话物理删除 ②AI 智能上下文压缩 ③长代码文件一次性读取 |

### 背后诉求分析

- **#2482 尤为关键**：来自"每天重度折腾"的开发者，反映 CoPaw 作为**开发助理**的核心体验缺陷——上下文管理粗放、代码场景优化不足。该用户提出的"去除调试信息保留自然语言"的压缩指令需求，指向 RAG/记忆系统的精细化方向。
- **#2218 CPU 问题**：基础设施稳定性瓶颈，可能阻碍企业级部署。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR |
|:---|:---|:---|:---|
| 🔴 **P0-严重** | [#2218](https://github.com/agentscope-ai/CoPaw/issues/2218) | CPU 100% 空转（epoll busy-polling）| **待修复** |
| 🔴 **P0-严重** | [#2445](https://github.com/agentscope-ai/CoPaw/issues/2445) | 网关重启导致 Agent **永久卡死**（100% 复现）| 已关闭，需验证修复效果 |
| 🟡 **P1-高** | [#2377](https://github.com/agentscope-ai/CoPaw/issues/2377) | 长任务（1500 文件批处理）**自动中断**，断点续传失效 | **待修复** |
| 🟡 **P1-高** | [#2439](https://github.com/agentscope-ai/CoPaw/issues/2439) | 语音消息转录功能失效 | **待修复** |
| 🟡 **P1-高** | [#2494](https://github.com/agentscope-ai/CoPaw/issues/2494) | 模型选择菜单 CSS 过渡延迟，**无法选择模型** | **待修复** |
| 🟡 **P1-高** | [#2490](https://github.com/agentscope-ai/CoPaw/issues/2490) | 钉钉通道自动化 UI 弹窗遮挡，点击失败 | **待修复** |
| 🟢 **P2-中** | [#2303](https://github.com/agentscope-ai/CoPaw/issues/2303) | MiniMax `check_connection()` 404（调用不支持端点）| **待修复** |
| 🟢 **P2-中** | [#2503](https://github.com/agentscope-ai/CoPaw/issues/2503) | MiniMax-M2.7 模型无法使用，自定义模型 ID 格式报错 | **待修复** |
| 🟢 **P2-中** | [#2269](https://github.com/agentscope-ai/CoPaw/issues/2269) / [#2431](https://github.com/agentscope-ai/CoPaw/issues/2431) | 语言设置不持久化（重启恢复英文）| ✅ [#2498](https://github.com/agentscope-ai/CoPaw/pull/2498) 待合并 |
| 🟢 **P2-中** | [#2442](https://github.com/agentscope-ai/CoPaw/issues/2442) | 切换俄语后语言选择按钮消失 | 已关闭 |
| 🟢 **P2-中** | [#2488](https://github.com/agentscope-ai/CoPaw/issues/2488) | `install.ps1` PATH 更新拼写错误 | ✅ [#2489](https://github.com/agentscope-ai/CoPaw/pull/2489) 已合并 |
| 🟢 **P2-中** | [#2462](https://github.com/agentscope-ai/CoPaw/issues/2462) | MCP ConfigWatcher 空值检查缺失导致 CLI 失败 | 已关闭 |

---

## 6. 功能请求与路线图信号

| Issue | 需求 | 与路线图关联 | 纳入可能性 |
|:---|:---|:---|:---|
| [#2482](https://github.com/agentscope-ai/CoPaw/issues/2482) | 对话物理删除、AI 智能压缩、长代码一次性读取 | 记忆系统优化 | ⭐⭐⭐ 高（有重度用户背书） |
| [#2418](https://github.com/agentscope-ai/CoPaw/issues/2418) | Skills-Hub 管理页面，快速下载主流 Skills | 生态建设 | ⭐⭐⭐ 高（体验关键） |
| [#2443](https://github.com/agentscope-ai/CoPaw/issues/2443) | 用户资产备份与迁移（Memories/Skills/Tools 导出）| 企业/多设备场景 | ⭐⭐⭐ 高 |
| [#2452](https://github.com/agentscope-ai/CoPaw/issues/2452) | Cron 任务支持静默执行（抑制 Agent 回复）| 自动化场景 | ⭐⭐⭐ 高 |
| [#2495](https://github.com/agentscope-ai/CoPaw/issues/2495) | MCP 配置后显示可用工具列表 | MCP 生态 | ⭐⭐⭐ 高 |
| [#2451](https://github.com/agentscope-ai/CoPaw/issues/2451) / [#2465](https://github.com/agentscope-ai/CoPaw/pull/2465) | 钉钉 AI 表格/文档操作 | **路线图 Task 19** | ⭐⭐⭐⭐⭐ **已有 PR** |
| [#2493](https://github.com/agentscope-ai/CoPaw/issues/2493) | 多平台协同（云端+Windows 互通）| 对标 OpenClaw Gateway | ⭐⭐ 中（架构级） |
| [#406](https://github.com/agentscope-ai/CoPaw/issues/406) | 支持 GitHub Copilot 模型 | 模型生态 | ⭐⭐ 中（需授权协商） |

---

## 7. 用户反馈摘要

### 真实痛点

> *"一天下来因为几个对话或者一个乱码，直接废了，很崩溃"* —— [#2482](https://github.com/agentscope-ai/CoPaw/issues/2482)

**上下文管理焦虑**：开发者用户无法精准控制对话历史，乱码/模型异常输出污染上下文后无逃生通道。

> *"压缩之后记忆混乱很明显...近期的很多对话，可能存在很多调试信息"* —— [#2482](https://github.com/agentscope-ai/CoPaw/issues/2482)

**压缩策略粗糙**：固定比例保留无法区分信息价值，技术调试信息与核心需求混为一谈。

> *"读取一个几千字的代码文件，AI 总是不肯一次性读取，然后分批读取，总是理解错误"* —— [#2482](https://github.com/agentscope-ai/CoPaw/issues/2482)

**代码场景优化不足**：长文本处理能力在开发场景下失效，反复分批导致上下文膨胀。

> *"只能处理几个文件后就罢工了"* —— [#2377](https://github.com/agentscope-ai/CoPaw/issues/2377)

**长任务可靠性差**：批处理场景下断点续传机制失效，生产环境不可用。

### 满意点

- **钉钉生态深度整合**：用户主动提出 AI 表格/文档操作需求，说明基础通道能力已满足业务场景
- **任务认领机制活跃**：#2291 成为有效社区贡献入口

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 状态 | 提醒 |
|:---|:---|:---|:---|
| [#1456](https://github.com/agentscope-ai/CoPaw/issues/1456) Tool Calls 空名称导致静默失败 | 2026-03-13 (17天) | Open, 2 评论 | **长期未响应**，影响工具调用可靠性 |
| [#406](https://github.com/agentscope-ai/CoPaw/issues/406) GitHub Copilot 模型支持 | 2026-03-03 (27天) | Open, 2 评论 | 竞品 OpenClaw 已实现，需评估跟进优先级 |
| [#1512](https://github.com/agentscope-ai/CoPaw/pull/1512) 本地模型 OpenAI 风格工具调用 | 2026-03-15 (15天) | Open | 本地模型生态关键 PR，需代码审查 |
| [#2051](https://github.com/agentscope-ai/CoPaw/pull/2051) Docker 镜像优化（-30% 体积）| 2026-03-22 (8天) | Open | 基础设施优化，影响部署体验 |

---

*日报基于 GitHub 公开数据生成 | 项目地址: https://github.com/agentscope-ai/CoPaw*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 | 2026-03-30

---

## 1. 今日速览

ZeptoClaw 今日保持**高活跃开发状态**，核心贡献者 `stuartbowness` 单日提交 6 个 PR 并创建 2 个 Issue，聚焦**工具系统重构**与**运行时稳定性**两大主线。项目正处于功能密集迭代期：浏览器自动化（#459）、上下文压缩防溢出（#460）、Landlock 沙箱修复（#463）等关键能力同步推进。值得关注的是，CLI 工具列表长期与运行时脱钩的架构债务（#465）已被识别并启动修复，显示项目正从"功能堆叠"向"架构治理"演进。无新版本发布，建议关注者跟踪 #460、#459 两大功能 PR 的合并进展。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭 PR

| PR | 说明 | 项目推进价值 |
|:---|:---|:---|
| [#464](https://github.com/qhkm/zeptoclaw/pull/464) `feat(cli): register missing tools in tool registry` | 修复 `zeptoclaw tools list` 仅显示 22/33 个工具的问题，补全 `git`、`pdf_read`、`stripe` 等 11 个缺失工具的注册 | **可发现性里程碑**：用户首次能完整浏览 agent 能力边界，为后续工具生态扩展奠定基础 |

### 关键推进中 PR（5 个待合并）

| PR | 状态 | 核心能力 | 预估影响 |
|:---|:---|:---|:---|
| [#459](https://github.com/qhkm/zeptoclaw/pull/459) | 待评审 | BrowserTool 浏览器自动化（agent-browser + Lightpanda/Chrome 双引擎） | 解锁网页抓取、表单填写、视觉感知等 Web 交互能力 |
| [#460](https://github.com/qhkm/zeptoclaw/pull/460) | 待评审 | 多层上下文压缩防 token 溢出 | 解决长对话崩溃的致命痛点，支撑超长任务执行 |
| [#467](https://github.com/qhkm/zeptoclaw/pull/467) | 待评审 | `raw_string` 参数类型，修复 CLI 包装器参数传递 | 打通与外部 CLI 工具（如 `gws`）的集成路径 |
| [#468](https://github.com/qhkm/zeptoclaw/pull/468) | 待评审 | OpenRouter 供应商前缀模型路由修复 | 提升多提供商配置的可靠性 |
| [#463](https://github.com/qhkm/zeptoclaw/pull/463) | 待评审 | Landlock 沙箱工作区访问权限修复 | 安全沙箱功能从"配置可用"到"实际可用" |

**整体进展评估**：今日合并的 #464 是工具系统治理的第一步；#460 和 #459 代表项目向"生产级长任务处理"和"Web 感知 Agent"两大战略方向的关键跃迁，建议优先评审。

---

## 4. 社区热点

### 架构设计讨论：CLI 与运行时的解耦问题
- **Issue [#465](https://github.com/qhkm/zeptoclaw/issues/465)**：`rfc(cli): tools list should use runtime registry instead of hardcoded array`
- **核心诉求**：贡献者识别出工具系统的架构缺陷——CLI 硬编码 33 个 `ToolInfo` 与运行时 `ToolRegistry` 完全脱节，导致自定义工具、MCP 工具、插件工具对用户不可见
- **信号解读**：此 RFC 表明项目维护者开始关注**可扩展性架构**，为第三方工具生态（MCP 协议集成等）铺路

### 工具集成痛点：Shell 转义破坏 CLI 包装器
- **Issue [#466](https://github.com/qhkm/zeptoclaw/issues/466)**：`fix: custom tool shell escaping breaks CLI wrappers`
- **核心诉求**：`{{args}}` 参数的 shell 转义导致 `gws {{args}}` 这类 CLI 包装器模式失效
- **关联响应**：PR [#467](https://github.com/qhkm/zeptoclaw/pull/467) 已同日提交修复，显示**问题-修复闭环效率极高**（<24小时）

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | Issue/PR | 状态 | 修复进展 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | 长对话 token 溢出崩溃 | [#460](https://github.com/qhkm/zeptoclaw/pull/460) | 待合并 | **有完整修复方案**：多层压缩策略（消息摘要 → 工具结果截断 → 历史丢弃） |
| 🟡 **中** | Landlock 沙箱工作区访问失效 | [#463](https://github.com/qhkm/zeptoclaw/pull/463) | 待合并 | **有修复 PR**：权限规则未正确应用到工作区路径 |
| 🟡 **中** | OpenRouter 供应商前缀模型路由错误 | [#468](https://github.com/qhkm/zeptoclaw/pull/468) | 待合并 | **有修复 PR**：运行时与预检逻辑不一致 |
| 🟢 **低** | 自定义工具 shell 转义破坏 CLI 包装器 | [#466](https://github.com/qhkm/zeptoclaw/issues/466) → [#467](https://github.com/qhkm/zeptoclaw/pull/467) | 待合并 | **有修复 PR**：新增 `raw_string` 参数类型 |

**稳定性评估**：所有今日识别的稳定性问题均有对应修复 PR 在审，项目健康度良好。建议优先合并 #460（防崩溃）和 #463（安全功能可用性）。

---

## 6. 功能请求与路线图信号

| 需求来源 | 功能方向 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| #465 RFC | 运行时工具注册表统一 | **高** | 架构债务清理，#464 已迈出第一步 |
| #459 PR | 浏览器自动化（agent-browser） | **高** | 完整实现已提交，双引擎设计（Lightpanda/Chrome）显示生产级考量 |
| #460 PR | 智能上下文压缩 | **高** | 解决核心痛点，防御深度策略设计成熟 |
| #467 PR | 原始字符串参数类型 | **高** | 阻塞 CLI 集成场景，修复紧迫 |

**路线图信号**：项目正从"基础 Agent 能力"向**企业级可靠性**（长任务稳定性、安全沙箱）和**多模态感知**（浏览器视觉）演进。MCP 工具生态支持（#465 提及）可能是下一阶段的开放扩展重点。

---

## 7. 用户反馈摘要

> 注：今日 Issues/PR 均为核心贡献者提交，无外部用户直接评论。以下从 Issue 描述中**逆向推导用户场景**：

| 用户场景 | 痛点 | 满意度信号 |
|:---|:---|:---|
| **长任务执行者** | 对话过长时遭遇不可恢复的 token 溢出错误 | #460 的"完全重构"表述暗示此前体验极差 |
| **安全敏感用户** | 启用 Landlock 后 agent 无法访问工作区，沙箱"看似启用实则失效" | #463 的 user story 显示配置与行为预期严重不符 |
| **CLI 工具集成者** | 尝试用 ZeptoClaw 包装 `gws` 等 CLI 工具时参数传递断裂 | #466 的具体示例显示集成路径存在摩擦 |
| **工具探索者** | `tools list` 显示不完整，无法发现 `stripe`、`transcribe` 等能力 | #464 的修复直接回应"用户运行 list 想了解 agent 能做什么" |

**关键洞察**：用户（包括贡献者自身作为用户）对 ZeptoClaw 的期待已从"能运行"升级到**可预测、可调试、可扩展**的生产级体验。

---

## 8. 待处理积压

> 基于 24 小时数据，无长期未响应项。但以下 PR 已运行 2-3 天，建议关注评审进度：

| PR | 创建时间 | 风险 | 建议行动 |
|:---|:---|:---|:---|
| [#460](https://github.com/qhkm/zeptoclaw/pull/460) 上下文压缩 | 2026-03-27（3天） | 功能重大，评审复杂度高 | 拆分独立模块评审，或安排设计文档预评审 |
| [#459](https://github.com/qhkm/zeptoclaw/pull/459) 浏览器工具 | 2026-03-27（3天） | 依赖外部 CLI（agent-browser） | 明确文档化引擎回退策略和 SSRF 防护边界 |

---

*日报生成时间：2026-03-30 | 数据来源：GitHub API 快照*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 | 2026-03-30

> **项目地址**: [gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)  
> **分析周期**: 2026-03-29 至 2026-03-30

---

## 1. 今日速览

EasyClaw 今日活跃度**较低**，社区互动有限。过去24小时内仅产生 **1 条 Issue 更新**，无 PR 活动，但发布了 **v1.7.8 版本（RivonClaw）**。核心关注点集中于**网络代理冲突问题**——用户反馈 RivonClaw 与腾讯 QClaw 存在互斥性，无法同时运行。项目当前处于维护期状态，版本迭代以稳定性修复为主，暂无重大功能更新信号。

---

## 2. 版本发布

### [RivonClaw v1.7.8](https://github.com/gaoyangz77/rivonclaw/releases/tag/v1.7.8)

| 属性 | 详情 |
|:---|:---|
| **发布时间** | 2026-03-29 |
| **版本类型** | 维护版本 |
| **主要变更** | 文档更新：新增 macOS Gatekeeper 绕过指南 |

**更新内容详解**：
- **安装文档增强**：针对 macOS 用户常见的 `"RivonClaw" is damaged and can't be opened` 错误，补充 Terminal 命令行解决方案（xattr 移除隔离属性）
- **双语支持**：中英文对照说明，降低国内用户上手门槛

**破坏性变更**: 无  
**迁移注意事项**: 无需迁移，新用户直接参考更新后的安装文档即可

> ⚠️ 该版本未涉及核心功能代码变更，属于**文档/体验优化型发布**。

---

## 3. 项目进展

**今日无合并或关闭的 PR**。

项目代码层面今日无实质性推进。结合 v1.7.8 版本发布来看，维护重心当前偏向**用户支持体验优化**（安装问题文档化），而非功能迭代或架构改进。

---

## 4. 社区热点

### 今日唯一活跃 Issue

| 排名 | Issue | 作者 | 热度指标 | 核心诉求 |
|:---|:---|:---|:---|:---|
| #1 | [rivonclaw和QClaw能不能同时使用](https://github.com/gaoyangz77/rivonclaw/issues/30) | [@zgcgreat](https://github.com/zgcgreat) | 新建，0评论，0👍 | 解决代理软件互斥冲突 |

**深度分析**：

该 Issue 揭示了一个**典型场景冲突**：用户需要同时使用多款 AI 助手/代理工具（RivonClaw + 腾讯 QClaw），但两者在系统网络层产生冲突，表现为：
- RivonClaw 启动后 → QClaw 网络中断
- 两者无法共存，必须二选一

**背后诉求**：用户期望 EasyClaw/RivonClaw 能作为**可组合的基础设施组件**，而非独占式代理。这可能涉及：
- 端口占用冲突（常见 7890/7891 等代理端口）
- 系统代理设置覆盖（PAC/全局模式互抢）
- 虚拟网卡/TUN 驱动冲突

该问题若普遍存在，将影响产品在**多工具协作场景**下的 adoption。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | Issue | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔶 **中** | RivonClaw 与 QClaw 网络冲突 | [#30](https://github.com/gaoyangz77/rivonclaw/issues/30) | 待诊断 | 无 |

**技术评估**：
- **根因推测**：双方均尝试修改系统代理设置或创建 TUN 设备，后启动者覆盖前者配置
- **影响范围**：所有需要多代理工具并行的用户（企业环境、开发者工具链场景）
- **临时 workaround**：手动切换，无法同时使用
- **修复优先级建议**：中 — 属于生态兼容性议题，非核心功能崩溃

---

## 6. 功能请求与路线图信号

**今日无新增功能请求**。

从现有 Issue 反向推导潜在需求：
| 信号来源 | 隐含需求 | 纳入下一版本可能性 |
|:---|:---|:---|
| #30 代理冲突 | **代理模式可配置化**（允许仅本地 SOCKS5 而不抢占系统代理） | ⭐⭐⭐ 中高 — 架构调整成本中等，但显著提升兼容性 |
| v1.7.8 文档更新 | **安装体验持续优化**（Windows/Linux 类似 Gatekeeper 问题？） | ⭐⭐⭐⭐ 高 — 低投入高回报 |

---

## 7. 用户反馈摘要

**今日反馈样本**：1 条（Issue #30）

| 维度 | 内容 |
|:---|:---|
| **使用场景** | 同时运行 RivonClaw（EasyClaw 生态）与腾讯 QClaw（国内生态），构建混合 AI 助手工作流 |
| **核心痛点** | 工具间互斥，被迫手动切换，打断工作流 |
| **满意度暗示** | 未表达不满，但"能不能同时使用"的提问方式暗示**期望功能存在** |
| **未言明需求** | 可能希望 RivonClaw 提供"轻量模式"或"端口隔离模式"，避免与现有代理基础设施冲突 |

**趋势观察**：用户正在将 EasyClaw/RivonClaw 纳入**更复杂的工具组合**，而非孤立使用。项目需考虑**企业/开发者场景下的可组合性设计**。

---

## 8. 待处理积压

**长期未响应检查**

| Issue/PR | 创建时间 | 最后更新 | 状态 | 提醒 |
|:---|:---|:---|:---|:---|
| 暂无长期积压 | — | — | — | 当前 Issue 池较健康（#30 为昨日新建） |

**维护建议**：
- #30 虽新，但涉及**生态兼容性**这一战略议题，建议维护者在 **3-5 天内**初步响应，确认技术可行性
- 若确认可修复，可纳入 v1.8.0 规划；若设计层面冲突，需在文档中明确说明限制

---

## 健康度评分

| 指标 | 评分 | 说明 |
|:---|:---:|:---|
| 代码活跃度 | ⭐⭐☆☆☆ | 无 PR 活动 |
| 社区响应度 | ⭐⭐⭐☆☆ | 单 Issue 待响应 |
| 版本迭代 | ⭐⭐⭐⭐☆ | 文档优化持续进行 |
| 稳定性风险 | ⭐⭐⭐⭐☆ | 无崩溃报告，兼容性问题可控 |
| **综合健康度** | **🟡 中等** | 维护期状态，需关注生态兼容性议题 |

---

*日报生成时间: 2026-03-30*  
*数据来源: GitHub API / 项目公开信息*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*