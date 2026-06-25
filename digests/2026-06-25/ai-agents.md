# OpenClaw 生态日报 2026-06-25

> Issues: 346 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-25 00:28 UTC

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

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我为您呈上基于 OpenClaw 项目 2026年6月25日数据的项目动态日报。

---

## OpenClaw 项目动态日报 | 2026-06-25

### 1. 今日速览
今日 OpenClaw 项目社区活跃度**极高**，24小时内产生了超过840次 Issue 和 PR 更新，表明项目正处于密集开发与用户反馈高峰期。核心维护者与社区贡献者围绕 **UTF-16 边界截断**、**多平台兼容性**（特别是 Feishu、Telegram、QQBot）以及**会话状态与数据可靠性**（会话锁、内存泄漏、路由）等关键领域进行了大量修补。虽然新版本仅发布了两个小版本更新，但社区驱动的修复浪潮预示着即将到来的稳定版将解决大量基层问题。

### 2. 版本发布
**发布日期：2026-06-24**
项目发布了两个小版本（beta & patch）：
*   **v2026.6.11-beta.1**: 主要改进了频道控制能力，包括 Slack 转发模式、原生 Mattermost `/oc_queue` 支持以及针对每个 DM 的模型覆盖设置，简化了频道操作的自动化与调优。
*   **v2026.6.10**: 引入了“快速对话模式”，允许 OpenClaw 在短轮对话中启用快速模式，并在长对话中自动回落。同时优化了模型路由的可靠性。

### 3. 项目进展
尽管正处于活跃开发期，但今日仍有超过 **52 个 PR 被合并或关闭**，显示项目正稳步前进。以下是几个标志性的进展：

*   **会话锁可靠性提升**：PR [#90419](https://github.com/openclaw/openclaw/pull/90419) 修复了子代理在 `dispose()` 时无法释放锁文件的问题，为防止会话“假死”提供了关键修复。
*   **关键诊断能力增强**：PR [#96152](https://github.com/openclaw/openclaw/pull/96152) 与 [#96227](https://github.com/openclaw/openclaw/pull/96227) 被合并，修复了 HTTP 入口流量（如 `/v1/chat/completions`）不发出 `model.usage` 诊断事件的问题。这意味着所有 AI 调用的 Token 和成本数据都将被正确追踪，对运营监控至关重要。
*   **渠道错误透传**：PR [#96599](https://github.com/openclaw/openclaw/pull/96599) 修复了当模型提供商返回 401 认证失败时，客户端侧（如 Telegram）不显示任何错误信息的问题，改善了用户反馈体验。
*   **大量边界 Bug 修复**：一群贡献者（`@llagy009` 等）提交了一系列小而精的修复，系统性地解决了 QQBot、IRC、Slack、MSTeams、Synology Chat 等渠道在处理 emoji 或多字节字符时导致的字符串截断崩溃问题（如 PR [#96575](https://github.com/openclaw/openclaw/pull/96575)、[#96572](https://github.com/openclaw/openclaw/pull/96572)等）。

### 4. 社区热点
今日讨论热度最高的 Issue 和 PR 反映了社区的核心诉求：

*   **🥇 Issue #75 - [Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)**
    *   **状态**: 开放中，评论109条，👍80票
    *   **分析**: 这是项目的“元老级”功能请求（创建于1月），要求为 Linux 和 Windows 提供类似 macOS、iOS、Android 的原生桌面应用。尽管长时间未解决，但持续的评论和高票数显示出社区对**多端覆盖**和**更统一用户体验**的强烈渴望。

*   **🥈 Issue #32473 - [Control UI 需要设备身份](https://github.com/openclaw/openclaw/issues/32473)**
    *   **状态**: 开放中，评论17条
    *   **分析**: 用户在 VPS 上通过 Docker 部署后遇到 HTTPS/安全上下文问题，导致控制 UI 不可用。这反映了**非本地部署场景**（如服务器、云端）下的使用痛点，以及与之相关的 HTTPS 配置复杂性。

*   **🥉 Issue #22676 - [Signal 守护进程 stop() 竞态条件](https://github.com/openclaw/openclaw/issues/22676)**
    *   **状态**: 开放中，评论17条
    *   **分析**: 重启 Signal 网关时，旧进程释放资源与新进程抢占端口之间存在竞态条件，导致孤儿进程和发送失败。这是一个**稳定性和运维**层面的典型 Bug，影响使用 Signal 渠道的用户。

### 5. Bug 与稳定性
今日报告了大量 Bug，按严重程度排列如下：

*   **严重 (P1)**
    *   **[Bug]：子代理中止后无法释放 `.jsonl.lock`，永久破坏会话** [#95833](https://github.com/openclaw/openclaw/issues/95833)。（已有 fix PR [#90419](https://github.com/openclaw/openclaw/pull/90419) 合并，但可能需双保险修复）
    *   **内存泄漏：Gateway 在空闲时堆内存增长至 1GB+，导致 cron 任务静默失败** [#87109](https://github.com/openclaw/openclaw/issues/87109)。（暂无直接 fix PR）
    *   **`image` 工具在 Bedrock SDK 模式下因 `requireApiKey` 检查失败** [#72031](https://github.com/openclaw/openclaw/issues/72031)。（暂无直接 fix PR）
    *   **原生 Anthropic 路径重放历史 `thinking` 块导致 400 错误，会话永久中断** [#94228](https://github.com/openclaw/openclaw/issues/94228)。（暂无直接 fix PR）

*   **中等 (P2)**
    *   **Feishu 频道在配置 HTTP 代理后无法发送消息** [#48949](https://github.com/openclaw/openclaw/issues/48949)。
    *   **V2026.6.5 内部推理泄露到用户响应中** [#91804](https://github.com/openclaw/openclaw/issues/91804)。（回归问题，严重隐私 Bug）
    *   **Google Chat 的空间/群组消息被静默忽略** [#58514](https://github.com/openclaw/openclaw/issues/58514)。
    *   **`write` 工具缺少追加模式，孤立 cron 会话覆盖共享文件** [#40001](https://github.com/openclaw/openclaw/issues/40001)。

**总结**：核心关注点集中在 **会话状态损坏/丢失**、**内存泄漏** 以及 **特定提供商/Linux 平台的兼容性问题** 上。

### 6. 功能请求与路线图信号
用户社区对项目的未来方向提出了多项建设性意见：

*   **高优先级需求**：**文件系统沙箱** (Issue #7722)、**备份/恢复实用程序** (Issue #13616)、**内置自动更新机制** (Issue #12855)、**Slack Block Kit 支持** (Issue #12602)。这些请求覆盖了**安全性、运维和渠道体验**，是项目走向成熟的关键。
*   **可能纳入下一版本的信号**：
    *   **Gateway 免 AI 轻量模式** (Issue #86881): 旨在提供一个不带 AI 模型的纯网关部署形态，用于处理 Webhook、Cron 等确定性任务。相关讨论反映了社区对**解耦调度与AI推理**的需求。
    *   **Slack 工具级进度显示** (Issue [#33413](https://github.com/openclaw/openclaw/pull/33413)): PR已开放，希望将 Slack 的静态“typing…”状态更新为显示当前正在运行的 tool。这表明社区正在持续打磨**交互体验**。
    *   **Provider 断路器** (PR [#64127](https://github.com/openclaw/openclaw/pull/64127)): 一个等待作者回复的P1 PR，旨在处理配额耗尽错误。这关乎到服务的**弹性和可用性**，预期会被优先处理。

### 7. 用户反馈摘要
从今日的 Issue 评论中，可以折射出用户的真实体验：

*   **满意点**：
    *   用户对 `llagoy009` 贡献者快速修补 UTF-16 边界 Bug 的行为表示赞赏。
    *   用户认为 `v2026.6.10` 引入的“快速对话模式”是提升短轮体验的积极改进。
    *   尽管遇到 Bug，用户普遍对 OpenClaw 的多渠道集成的**丰富性**和**灵活性**抱有期待。
*   **不满意点**：
    *   **升级阵痛**：用户 `fenglanhua` 报告 `v2026.6.9` 升级导致内存存储位置变更且无迁移，触发了1499个文件的重新嵌入（Issue #95495）。这凸显了**升级无感迁移**的重要性。
    *   **静默失败**：多个问题（如内存泄漏、群组消息被忽略）都指向同一个痛点：**发生错误时缺乏对用户的明确反馈**。用户只看到无响应，却不知原因。
    *   **配置复杂性**：控制 UI 依赖 HTTPS 的问题（Issue #32473）和 MCP 工具注入到子会话的复杂性（Issue #85030）都让用户感到困惑和沮丧。

### 8. 待处理积压
以下为长期未响应或已挂起但影响重大的 Issue/PR，需提请维护者关注：

*   **重要功能请求积压**：
    *   Issue [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows 应用（近6个月，109条评论）
    *   Issue [#7722](https://github.com/openclaw/openclaw/issues/7722) 文件系统沙箱（近5个月）
    *   Issue [#12678](https://github.com/openclaw/openclaw/issues/12678) 基于能力的权限模型（近5个月）
    *   Issue [#13616](https://github.com/openclaw/openclaw/issues/13616) 备份/恢复实用程序（近5个月）
*   **长期挂起的 PR**：
    *   PR [#52664](https://github.com/openclaw/openclaw/pull/52664) 插件钩子事件暴露 `rawBody`（已创建3个月，对插件开发者至关重要，但仍有合并风险标记）。
    *   PR [#67818](https://github.com/openclaw/openclaw/pull/67818) 修复 WhatsApp QR 登录（等待作者回复，已超2个月，影响用户基础入门体验）。
*   **关键 Bug 积压**：
    *   Issue [#22676](https://github.com/openclaw/openclaw/issues/22676) Signal 守护进程竞态条件（已4个月，直接影响用户为 Signal 渠道用户）。
    *   Issue [#29387](https://github.com/openclaw/openclaw/issues/29387) 代理目录下的引导文件被静默忽略（已4个月，影响自定义 agent 的配置）。

---

## 横向生态对比

好的，基于您提供的各项目动态日报，我为您呈上这份针对 AI 智能体与个人 AI 助手开源生态的横向对比分析报告。

---

### AI 智能体与个人 AI 助手开源生态横向对比分析报告 (2026-06-25)

#### 1. 生态全景

当前，AI 智能体与个人 AI 助手开源生态正处于 **“密集迭代与安全加固并行”** 的关键阶段。社区热情高涨，尤其在 **OpenClaw、NanoBot、Hermes Agent** 等头部项目中，大量 PR 和 Issue 的涌现表明项目正向生产级可用性快速迈进。核心关注点从“功能的有无”转向了 **“功能的稳定性、安全性、成本可负担性以及多平台兼容性”**。同时，以 **ZeroClaw** 为代表的项目正在探索自主任务执行和模型无关的通用协议，预示着生态从个人助手向通用智能体平台的演进路径。整体而言，生态已度过概念验证期，进入了精细化打磨和体系化构建的深水区。

#### 2. 各项目活跃度对比

| 项目名称 | 24h Issues 数 | 24h PRs 数 | 版本发布 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 极高 (>40) | 极高 (>800) | 2个小版本 | **高度活跃，问题与修复密集涌现，处于快速迭代期** |
| **NanoBot** | 高 (>20) | 高 (>20) | 无 | **稳定活跃，安全修复与平台适配是主线** |
| **Hermes Agent** | 高 (>30) | 高 (>30) | 无 | **持续活跃，聚焦性能优化与多智能体编排** |
| **PicoClaw** | 极高 (11个安全问题关闭) | 4 (待合并) | 无 | **高度活跃，正处于集中安全审计与修复期** |
| **NanoClaw** | 1 | 18 (16待合并) | 无 | **中等偏高，功能与安全修复并行，PR积压需关注** |
| **IronClaw** | 高 (>10) | 高 (>10) | 无 | **高度活跃，重整架构与修复稳定性是关键** |
| **CoPaw** | 高 (>20) | 高 (>40, 其中44待合并) | 无 | **活跃，功能增强与2.0迁移后修复占主导** |
| **LobsterAI** | 0 | 43 (41已合并) | 无 | **恢复活跃，正在进行集中的Bug修复与优化** |
| **TinyClaw** | 0 | 1 (已合并) | 无 | **平稳，少量但关键的跨平台兼容性修复** |
| **ZeptoClaw** | 0 | 0 | - | **无活动** |
| **NullClaw** | 0 | 0 | - | **无活动** |
| **Moltis** | 0 | 0 | - | **无活动** |
| **ZeroClaw** | 高 (>50) | 高 (>50) | 无 | **高度活跃，聚焦安全、多租户和自主任务模式** |

#### 3. OpenClaw 在生态中的定位

- **优势：** 作为生态中**最核心的参照项目**，OpenClaw 的社区活跃度和迭代速度冠绝群雄。其最大的优势在于 **“渠道的广度”**（Slack, Telegram, QQBot等）和 **“功能的深度”**（频道控制、快速对话模式等）。它更像一个“智能体操作系统”内核，提供了极其丰富的集成选项和灵活的控制力。
- **技术路线差异：** OpenClaw 的技术路线强调 **“多模型路由”、“会话状态管理”和“诊断能力”**，其架构复杂度最高，旨在解决企业级和多渠道部署中的通用性问题。
- **社区规模对比：** OpenClaw 的社区规模是**最大且最活跃**的。其“元老级”功能请求（如 Linux/Windows 原生应用）获得的 80+ 高票数，足见其在用户群体中的影响力。相比之下，**NanoBot** 和 **Hermes Agent** 的社区规模稍小，但各自在特定领域（如轻量级、编码协作）拥有极高忠诚度的用户群。
- **总结：** OpenClaw 是生态的“风向标”，其 Bug 修复方向和功能演进路径，往往预示着整个行业将要面临的共性问题。

#### 4. 共同关注的技术方向

多个项目不约而同地涌现出以下共同需求，指向了当前生态的集体痛点：

1.  **安全性加固（所有项目）**：**OpenClaw**、**NanoBot**、**PicoClaw**、**NanoClaw**、**ZeroClaw** 等几乎所有活跃项目，都在集中处理安全漏洞。核心诉求包括：
    - **MCP 权限模型强化 (NanoBot, ZeroClaw)**: 确保配置的 `enabledTools` 和 `mcp_bundles` 在运行时得到强制执行。
    - **SSRF 防护与路径遍历防御 (PicoClaw, NanoClaw)**: 防止恶意模块读取内部文件或进行服务端请求。
    - **上下文/提示词注入防御 (PicoClaw)**: 防止本地技能或技能元数据被用于注入攻击。
    - **认证与会话安全 (CoPaw, ZeroClaw)**: 强化身份验证（OIDC, RBAC）和会话锁的可靠性。

2.  **Token 开销与性能优化（OpenClaw, Hermes Agent, ZeroClaw）**：这是用户最直接的痛点。
    - **Lazy Tool Schema Loading（Hermes Agent, OpenClaw）**: 社区强烈呼吁实现“按需注入”工具Schema，以降低模型调用成本和延迟。
    - **上下文管理与渐进式工具披露（IronClaw）**: 选择性披露工具以解决 Token 过多导致超时的问题。
    - **会话状态优化（OpenClaw, NanoClaw）**: 修复会话锁、内存泄漏、WAL日志残留等问题，提升稳定性和资源利用率。

3.  **多平台适配与一致性（OpenClaw, NanoBot, Hermes Agent, CoPaw）**：
    - **Telegram / Feishu / Signal 等渠道修复**: 多项目都报告了特定客户端（如Telegram Web版、X版）的富文本兼容性问题。
    - **第三方/内网环境支持 (CoPaw, PicoClaw)**: 用户需求强烈的 “自定义 OpenAI 兼容提供商” 和 “内网部署” 支持，但实现上困难重重，如 Function Calling 兼容性问题。
    - **跨平台桌面/CLI 体验 (OpenClaw, TinyClaw)**: 用户对原生桌面应用（Linux/Windows）和纯 Windows CLI 有持续诉求。

#### 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 | 代表功能/信号 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | **通用智能体操作系统** | 技术发烧友、开发者、企业 | 多渠道网关、模型路由、会话元数据管理 | 快速对话模式、诊断事件、模型路由 |
| **NanoBot** | **极轻量、个人级助手** | 个人开发者、追求简洁的用户 | 极简依赖 (Python + 少量Node)、快速部署 | “ultra-lightweight” 定位、PWA支持 |
| **Hermes Agent** | **AI 编码智能体中心** | **开发者**、AI编码工作流 | 编码特定优化、工具Schema、多智能体编排 (ACP) | Lazy Tool Schema、Token成本分析、`scale-to-zero` |
| **PicoClaw** | **安全与隐私优先** | 安全研究员、企业用户 | 核心功能，但将安全性作为根本设计原则 | 批量安全审计、Delta Chat去中心化渠道 |
| **NanoClaw** | **高可扩展、轻量级平台** | 开发者、社区驱动 | 轻量级、依赖容器化部署、强调通用扩展点 | 通用扩展点、MCP远程服务器 |
| **IronClaw** | **企业级、架构先行** | 企业、大型团队 | “Reborn” 架构、模块化 (crate)、生产环境监控 | 渐进式工具披露、内存层作为用户态扩展 |
| **CoPaw** | **中国开发者生态（飞书/钉钉）** | 中文开发者、企业 | 深度集成飞书/钉钉、Web UI设计、兼容AgentScope 2.0 | AgentScope 2.0 兼容、pip 插件安装 |
| **ZeroClaw** | **平台级、多租户、自主智能体** | 企业、MSSP | 多租户 RBAC、自主会话模式、“目标模式”RFC | OIDC认证、MCP作用域强制、SlSA供应链签名 |

#### 6. 社区热度与成熟度

- **快速迭代阶段（活跃度极高，Bug与功能并行）**：**OpenClaw**、**PicoClaw**、**ZeroClaw**。这些项目目前是生态中最活跃的部分，代码变更量大，新功能和修复频繁交叉。它们正快速完善功能集，但同时也伴随着一定的不稳定性和回归风险。
- **质量巩固阶段（活跃度高，侧重修复与打磨）**：**NanoBot**、**Hermes Agent**、**IronClaw**、**CoPaw**。这些项目整体结构趋于稳定，当前重心转向解决用户反馈的痛点（如安全、性能、渠道适配）以及架构优化（如去耦合）。它们是生态的“压舱石”，代表着成熟、可靠的开发方向。
- **间歇活跃/寻求突破阶段**：**LobsterAI** 刚经历了一次密集的PR清理，可能处于规划下一阶段功能的间歇期。**TinyClaw** 则通过关键修复，稳固了其小而美的定位。
- **沉寂/停滞阶段**：**NullClaw**, **ZeptoClaw**, **Moltis** 等项目在过去24小时无活跃状态，可能代表项目维护者资源有限或项目已暂停，需社区谨慎评估。

#### 7. 值得关注的趋势信号

1.  **成本意识觉醒**：`Token 消耗` 已成为用户和开发者共同的核心关切。**Hermes Agent** 中用户定量分析的73%固定开销，以及 **IronClaw** 为减少Token而设计的“渐进式工具披露”，都指向一个明确趋势：**下一个阶段的竞争核心将从“功能多少”转向“成本效率”**。AI 智能体开发者必须将 Token 优化作为架构设计的第一要素。

2.  **“安全左移”全面降临**：大规模、系统性的安全审计（尤以 **PicoClaw** 为代表）和针对 MCP/插件模型的权限控制（**NanoBot, ZeroClaw**），预示着 **“安全”不再是后期修补，而是贯穿智能体生命周期的基础能力**。对于任何开发者，构建智能体时需从设计伊始就考虑身份验证、资源访问控制和供应链安全。

3.  **从“个人助手”走向“智能体平台”**：**ZeroClaw** 的“多租户RBAC”，**OpenClaw** 的“频道控制”和 **NanoBot** 的“通用扩展点”，都指向了 **将单个智能体升级为多用户、多任务、可编程的智能体平台** 的趋势。这要求开发者在架构上考虑模块化、可拓展性和租户隔离。

4.  **“协议化”与“去中心化”交汇**：**Hermes Agent** 尝试成为遵循 Agent Client Protocol 的“智能体中心枢纽”，而 **PicoClaw** 则加入了去中心化通讯应用 **Delta Chat** 的支持。这暗示了 **智能体生态正在从依赖单一平台（如某个LLM提供商）向开放、互操作的协议网络演进**，社区希望智能体能够跨越平台和协议边界进行协作。

**对 AI 智能体开发者的建议**：
- **监控 OpenClaw 和 ZeroClaw**：它们是生态的风向标，能提前感知主流技术挑战和解决方案。
- **学习 NanoBot 和 Hermes Agent 的成本优化实践**：它们是 Token 效率领域的先行者，其设计思路值得借鉴。
- **关注 PicoClaw 的安全实践**：其安全审计案例是学习如何构建安全智能体的绝佳教材。
- **拥抱协议与去中心化**：在设计 API 和集成时，考虑对 ACP 等开放协议的兼容性，并评估集成去中心化渠道的潜力，以扩大覆盖面与韧性。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，以下是基于您提供的NanoBot GitHub数据生成的2026-06-25项目动态日报。

---

# NanoBot 项目动态日报 | 2026-06-25

## 1. 今日速览

本日NanoBot项目活跃度较高，主要围绕**安全加固、多平台适配与bug修复**展开。社区在PR和Issues上的讨论与贡献非常密集，尤其集中在**MCP安全策略绕过**（#4434, #4435）、**Telegram富文本兼容性**（#4499, #4488）以及**WebUI移动端体验**优化上。尽管无新版本发布，但项目在**安全漏洞修复**和**渠道支持扩展**上取得了显著进展，整体健康度良好，开发者社区响应迅速。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日有19个PR被合并或关闭，项目在多方面稳步推进：

- **安全修复（MCP）**：
    - PR #4436（`[fix] fix(tools): gate MCP resource and prompt registration behind enabledTools`）与PR #4452（`[enhancement] [codex] enforce MCP enabledTools for resources and prompts`）解决了核心安全问题，现已合并/关闭，严格限制了MCP `enabledTools`配置仅允许的工具、资源和提示词被模型调用，堵住了关键安全漏洞。
    - PR #4441（`[fix] fix(mcp): force-close streamable_http generator on reconnect failure`）修复了MCP服务器重连时的崩溃问题，提升了稳定性。

- **功能增强**：
    - PR #4464（`feat(provider): add kimi_coding provider for Kimi Coding Plan`）已合并，正式支持Kimi编程计划的API，为付费订阅用户提供了新选择。
    - PR #4475（`feat: add OpenCode Zen and OpenCode Go as providers`）已合并，增加了新的LLM提供商，扩展了模型生态。

- **Bug修复**：
    - PR #4487（`fix(webui): keep multi-file apply_patch edits`）修复了WebUI中编辑多文件时补丁显示丢失的问题。
    - PR #4465（`Bug: WebUI renders <thinking/> tags as visible text...`）已关闭，解决了WebUI错误显示模型思考标签的问题。

- **渠道支持**：
    - PR #4459（`feat: add Mattermost channel support`）仍在开放中，但已累计了不少讨论，预示着新渠道的到来。

**项目向前迈进了**：修复了高优先级的安全漏洞，完善了MCP权限模型，增加了新的Kimi和OpenCode提供商，并持续修复了多个WebUI和渠道的体验问题。

## 4. 社区热点

本日社区讨论的焦点集中在两个议题上：

1.  **MCP安全漏洞（Issues #4434, #4435）**：社区成员YLChen-007提交了两个严重的安全问题，指出`enabledTools`配置存在绕过机制，导致模型可以访问未授权的MCP资源和提示词。此议题获得了迅速回应，并直接催生了PR #4436和#4452的修复，显示了社区对安全的高度重视和项目的快速响应能力。

2.  **Telegram渠道兼容性问题（Issues #4499, #4488）**：多个用户报告了在Telegram不同客户端（Web版、Telegram X）上由“富文本消息”功能引发的问题，包括显示空白消息和不受支持的格式。这些问题引发了广泛讨论，并涌现了多个修复方案PR（#4505, #4495），体现了社区对主流渠道稳定性的迫切需求。

- 🔗 [Issue #4434: Nanobot MCP `enabledTools` deny-all policy bypass](https://github.com/HKUDS/nanobot/issues/4434)
- 🔗 [Issue #4435: Nanobot MCP `enabledTools` allowlist bypass](https://github.com/HKUDS/nanobot/issues/4435)
- 🔗 [Issue #4499: Telegram channel: agent replies sent as empty messages](https://github.com/HKUDS/nanobot/issues/4499)
- 🔗 [Issue #4488: telegram web: "This message is not supported on the web version of Telegram"](https://github.com/HKUDS/nanobot/issues/4488)

## 5. Bug 与稳定性

今日报告的Bug较多，按严重程度排列如下：

- **严重 (Security)**：
    - **MCP `enabledTools` 绕过漏洞**（#4434, #4435）：可能导致模型越权访问服务器资源和提示词。**已有Fix PR (#4436, #4452) 已关闭/合并**。

- **高 (Functionality/Regression)**：
    - **Telegram 渠道：富文本消息在不同客户端不兼容**（#4499, #4488），导致Web版显示空白或不支持。**已有多个Fix PR (#4505, #4495) 处于开放状态**。
    - **Telegram 渠道：消息换行被忽略，并出现闪烁/持续编辑**（#4470），影响阅读体验。
    - **流式响应中 `tool_use` ID 重复**（#4442），导致会话被API拒绝。
    - **DingTalk 渠道：超时和不支持富文本**（#4497）。**已有Fix PR (#4501)**。

- **中 (UI/UX)**：
    - **WebUI：发送消息后主页不跳转对话**（#4500）。
    - **WebUI：iOS Safari 输入框放大**（#4388）。**已关闭，推测已修复**。
    - **WebUI：停止按钮失效**（#4500）。

## 6. 功能请求与路线图信号

- **功能请求**：
    - **WebUI PWA支持与移动侧滑手势**（#4479）：用户希望将WebUI增强为PWA，并改善移动端交互，已有详细实现PR。
    - **OSC 开放服务连接器(OOSC) / gateway webhook 触发**（#4502）：用户请求增加Webhook触发器，以支持更复杂的自动化工作流，已有PR。
    - **Add an optional HVTracker trust badge**（#4503）：希望增加一个独立的开源AI代理信任度徽章。
    - **Skills 子目录支持**（#4504）：用户请求允许在 skill 目录下创建子目录，以便更好地组织技能文件，已有PR。

- **路线图信号**：
    - **安全与权限管理**是当前最受关注的主题，MCP模块的权限模型得到强化。
    - **多平台适配**（特别是Telegram和DingTalk）和**移动端体验**（PWA、手势）是社区贡献的重心，很可能被纳入下一版本的开发重点。
    - **Kimi Coding Plan** 和 **OpenCode** 等新提供商的加入，表明项目正在积极扩展模型生态。

## 7. 用户反馈摘要

- **积极反馈**：社区对项目修复安全漏洞的速度表示认可（Issue #4434， #4435 被迅速响应）。
- **痛点反馈**：
    - **“极轻量”名不副实**：Issue #660 的讨论（获得5个赞）持续发酵，用户指出项目同时依赖Python和Node.js，与其自称的“ultra-lightweight”矛盾，认为这有误导性。这反映了部分用户对项目定位的质疑。
    - **体验倒退（Regression）**：多位Telegram用户（#4470, #4488, #4499）抱怨新版本引入的“富文本消息”功能破坏了原有体验，导致消息无法显示或不兼容。这表明新功能在发布前的跨客户端兼容性测试有待加强。
    - **WebUI 基础交互问题**：用户报告了主页发送消息无效、停止按钮失败等基础交互问题（#4500），影响了新用户的首次使用体验。

## 8. 待处理积压

- **长期Issue**：
    - **Issue #660** ([OPEN] [Project claims to be 'ultra-lightweight' but includes bloated Node.js dependency](https://github.com/HKUDS/nanobot/issues/660))：这个关于项目“轻量”定位的讨论持续了4个多月，评论数已达11条。尽管关注度不算最高，但它触及了项目核心定位和用户预期管理。建议项目维护者正视此问题，可以澄清其“轻量”的具体含义（如运行时资源占用），或探索使用单一技术栈（如纯Python实现Node.js功能）的可能性，以回应社区的长期反馈。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，我将根据您提供的数据，生成一份结构清晰、数据驱动的项目动态日报。

---

# Hermes Agent 项目动态日报 | 2026-06-25

## 今日速览

Hermes Agent 项目今日保持高度活跃。过去24小时内共产生100条Issue和PR更新，其中新开/活跃Issue 38条，待合并PR 37条，显示社区贡献热情不减。**令牌开销优化**和**多智能体编排**仍是社区最关注的核心议题，同时，一批涉及**异步I/O阻塞**和**线程安全**的关键Bug得到快速修复，反映了项目在稳定性上的持续投入。虽然无新版本发布，但多个针对桌面端和网关的PR已合并，项目正在稳步推进。

## 版本发布

*无*

## 项目进展

今日合并/关闭了多个重要PR，主要集中在网关稳定性、桌面端体验和Kanban功能修复上。

- **[#52151] fix(gateway): validate runtime status pid command line [已合并]**
    - 修复了网关存活性检查中，由于PID被系统回收利用而产生的误报问题。现在会校验进程命令行，而非仅依赖stale的state.json。
    - 链接: [PR #52151](https://github.com/NousResearch/hermes-agent/pull/52151)

- **[#52199] fix(gateway): scope dashboard liveness fallback to the profile [已合并]**
    - 在上一个PR基础上，进一步限定了仪表盘存活性检查的作用域，确保检查只针对特定配置文件，避免跨配置文件的误判。
    - 链接: [PR #52199](https://github.com/NousResearch/hermes-agent/pull/52199)

- **[#51705] fix(kanban): require explicit approval after clarify timeout [已合并]**
    - 修复了Kanban中`clarify`超时后的安全问题。此前超时等同于隐式批准，现在修改为超时后必须明确要求用户批准，增强了工作流的安全性。
    - 链接: [PR #51705](https://github.com/NousResearch/hermes-agent/pull/51705)

**项目进展评估**：项目在解决社区反馈的痛点（如网关误判、工作流安全漏洞）上动作迅速，展现出良好的响应能力。这些修复为项目的生产化部署奠定了更稳定的基础。

## 社区热点

今日讨论最热烈的话题高度集中于**控制令牌成本**和**多智能体交互**。

1.  **[讨论焦点]** `#6839` **Feature: Lazy Tool Schema Loading** （27条评论，14个👍）
    - **诉求分析**: 用户强烈希望改变“一刀切”式的工具Schema注入方式。每次API调用都注入全部工具Schema（约3500-5000 tokens）对本地模型和成本敏感用户是巨大负担。社区呼声很高，希望实现“懒加载”或“按需注入”，以显著降低延迟和开销。
    - 链接: [Issue #6839](https://github.com/NousResearch/hermes-agent/issues/6839)

2.  **[讨论焦点]** `#4379` **Token overhead analysis: 73% fixed overhead** （15条评论）
    - **诉求分析**: 用户通过实际监控Dashboard分析发现，高达73%的API调用token被用于固定开销。这个数据为#6839的“懒加载”方案提供了强有力的数据支持，说明优化Tool Schema加载是当前最迫切的性能改进点之一。
    - 链接: [Issue #4379](https://github.com/NousResearch/hermes-agent/issues/4379)

3.  **[讨论焦点]** `#5257` **Generalized ACP client for multi-agent CLI orchestration** （11条评论，16个👍）
    - **诉求分析**: 社区希望Hermes从单一的“ACI服务器”角色扩展到“ACP客户端”角色，使其能够编排所有遵守Agent Client Protocol的编码智能体（如Claude Code, Codex CLI等）。这是对Hermes作为**智能体中心枢纽**角色的深化，用户渴望它成为统一的多智能体管理工作台。
    - 链接: [Issue #5257](https://github.com/NousResearch/hermes-agent/issues/5257)

## Bug 与稳定性

今日报告的Bug覆盖了从P1到P3的多个严重级别，部分已有修复PR。

- **[P1] [#52197] gateway cross-process cache invalidation stalls the event loop [新开]**
    - **问题**: 网关在跨进程清理智能体缓存时，持有了锁，导致asyncio事件循环阻塞，进而使得Discord心跳超时。
    - **状态**: **已有修复PR** `#52200`，将耗时清理操作移出锁范围。
    - 链接: [Issue #52197](https://github.com/NousResearch/hermes-agent/issues/52197) | [PR #52200](https://github.com/NousResearch/hermes-agent/pull/52200)

- **[P2] [#33801] Secret redaction corrupts code syntax in tool output**
    - **问题**: API密钥覆盖系统在替换文本时，会破坏Python/Shell代码语法，导致工具调用失败。
    - **状态**: **无直接修复PR**，该问题需要一个更智能的上下文敏感替换方案。
    - 链接: [Issue #33801](https://github.com/NousResearch/hermes-agent/issues/33801)

- **[P2] [#52126] Telegram channel file attachments silently dropped [新开]**
    - **问题**: Telegram频道中的文件附件（文档、PDF等）被静默丢弃，仅文本消息能正常工作。
    - **状态**: **无修复PR**，已定位问题在`_handle_media_message`函数中。
    - 链接: [Issue #52126](https://github.com/NousResearch/hermes-agent/issues/52126)

- **[P2] [#31600] Hardcoded MINIMUM_CONTEXT_LENGTH deadlocks auto-compression**
    - **问题**: 硬编码的最小上下文长度（64K）导致在高上下文模型中，后台审查智能体无法触发自动压缩。
    - **状态**: **无修复PR**，需要将常量配置化。
    - 链接: [Issue #31600](https://github.com/NousResearch/hermes-agent/issues/31600)

## 功能请求与路线图信号

今日用户提出的功能请求映射了项目未来可能的发展方向。

- **[潜在下一版本]** `#52137` **Russian localization** 和 #50075 **TUI text selection on mobile**
    - **分析**: 本地化请求（俄语）和移动端交互优化是用户体验改善的明确信号。结合已有中文、法语等本地化请求，多语言支持框架的建立可能被提上日程。移动端交互问题则指向TUI/桌面端优化。
    - 链接: [Issue #52137](https://github.com/NousResearch/hermes-agent/issues/52137) | [Issue #50075](https://github.com/NousResearch/hermes-agent/issues/50075)

- **[潜在下一版本]** `#52079` **Project-level MCP server config support**
    - **分析**: 用户希望Hermes能直接使用项目根目录下的`.mcp.json`文件，而不是仅依赖Hermes自己的配置。这能极大简化与已有MCP生态的集成，符合“开箱即用”的体验。
    - 链接: [Issue #51069](https://github.com/NousResearch/hermes-agent/issues/51069)

- **[路线图信号]** `#52207` **scale-to-zero idle detection + dormant-quiesce [新开PR]**
    - **分析**: 名为“Phase 0”的“缩容至零”的PR非常引人注目。它允许托管式Hermes实例在闲置时挂起，并在需要时唤醒，这是迈向云原生、Serverless部署的关键一步。虽然尚未合并，但其存在本身是一个强烈的路线图信号。
    - 链接: [PR #52207](https://github.com/NousResearch/hermes-agent/pull/52207)

## 用户反馈摘要

从今日的Issue评论中，可以提炼出以下真实用户声音：

- **“73%的调用是固定开销，太浪费了。”** —— 来自 `#4379`，用户通过自定义Dashboard追踪，定量地反馈了高昂的Token成本问题。
- **“同样的机器和网络，官方Codex CLI能用，Hermes就不行。”** —— 来自 `#13834`，用户在使用`openai-codex` provider时遇到了兼容性问题，期望与官方工具拥有同样的可靠性。
- **“Secret redaction系统把我的代码搞坏了。”** —— 来自 `#33801`，安全功能意外地破坏了功能，这是典型的“好心办坏事”案例，用户期待更智能的实现。
- **“在手机上没法选中和复制聊天框里的文字，真的很烦。”** —— 来自 `#50075`，移动端用户的交互体验不佳，这是一个被忽视的UI/UX痛点。
- **“我希望Hermes能成为所有AI编码智体的总协调官。”** —— 来自 `#5257`，用户对Hermes的定位不仅是助手，更是强大的工作流引擎和多智能体中心。

## 待处理积压

以下长期未解决的重要Issue或PR，值得维护团队重点关注。

- **[未响应] `#13834` Hermes openai-codex fails where official Codex CLI works [P2]**
    - **问题**: 已开放2个月，涉及与OpenAI官方工具的兼容性问题，属于关键的用户体验Bug，可能阻碍部分用户迁移。
    - 链接: [Issue #13834](https://github.com/NousResearch/hermes-agent/issues/13834)

- **[长期PR] `#22648` feat(web): add Ollama Cloud as plugin-based web search/extract provider [P3]**
    - **问题**: 该PR自5月9日提出，旨在增加Ollama Cloud作为搜索/提取提供者，长期处于Open状态，可能因架构变更或合并冲突而停滞。此功能涉及本地模型与云服务的整合，有相当价值。
    - 链接: [PR #22648](https://github.com/NousResearch/hermes-agent/pull/22648)

- **[长期PR] `#8427` feat(vertex): add Vertex AI provider for Gemini models [P3]**
    - **问题**: 自4月12日提出的谷歌Vertex AI Provider功能，为企业级用户所需。长期未合并，可能因测试或集成复杂性较高。
    - 链接: [PR #8427](https://github.com/NousResearch/hermes-agent/pull/8427)

---

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，这是为您生成的 PicoClaw 项目动态日报，日期为 2026-06-25。

---

# PicoClaw 项目动态日报 - 2026-06-25

## 1. 今日速览

过去24小时内，项目处于**高度活跃但不稳定**的状态。核心社区成员批量关闭了11个安全问题相关Issues，表明项目正集中精力进行安全审计和修复。与此同时，有8个Pull Requests（PR）正在等待合并，其中包含新功能、关键生命周期修复及多项改进，显示开发工作仍在积极推进。未发布新版本，说明修复和功能还在整合测试阶段。当日活跃度评分：**8/10**。

## 2. 版本发布

- **无新版本发布。**
- 鉴于已有大量安全修复和新功能PR待合并，预计近期可能会有一次重要的安全/功能版本发布。

## 3. 项目进展

今日没有PR被合并，但新提交的4个PR展示了项目的最新进展：

- **修复与优化**:
    - **[PR #3165](https://github.com/sipeed/picoclaw/pull/3165)**: 修复了 `openai_compat` 模块中，无法从 `Seed` 模型（火山引擎豆包）的响应中提取结构化工具调用的问题。
    - **[PR #3166](https://github.com/sipeed/picoclaw/pull/3166)**: 修复了 `openai_compat` 模块中的一个构建失败问题（`undefined: log`），使用结构化日志替换了 `log.Printf`。
    - **[PR #3168](https://github.com/sipeed/picoclaw/pull/3168)**: 改进了模型列表获取时，对HTTP错误响应读取失败的处理，避免返回空或误导性错误信息。
    - **[PR #3169](https://github.com/sipeed/picoclaw/pull/3169)**: 优化了Evolution模块，跳过了对心跳轮次的冷路径调度，防止在心跳检查上消耗Token。

## 4. 社区热点

- **热点议题**：今日社区讨论，**安全**是绝对的核心话题。
  - 所有被关闭的Issue中，有**11个是安全问题**（Issues #3071-3082），均在同一时间（2026-06-24）由用户 `YLChen-007` 关闭。这些Issue详细描述了从飞书回复上下文绕过 `allow_from`、`exec` 命令的cwd符号链接竞争，到各种SSRF防御绕过、Webhook重放攻击、服务端请求伪造等多种高危漏洞。
  - **分析**：这表明项目最近可能经历了一次外部或内部的专业安全审计。用户 `YLChen-007` 很可能是一名安全研究员或PicoClaw的维护者，正系统性地提交和验证漏洞修复。社区目前最关切的不是新功能，而是项目的安全可靠性。

## 5. Bug 与稳定性

- **严重/高危问题（已修复/关闭）:**
    - **#3082**: 飞书回复上下文绕过 `allow_from` 限制。
    - **#3081**: `exec` 工具的cwd符号链接竞争漏洞。
    - **#3079**: `exec` 命令白名单绕过，允许通过 `jq` 泄露环境信息。
    - **#3078**: `web_fetch` 的SSRF防护可被HTTP代理绕过。
    - **#3076**: 企业微信组触发器策略绕过。
    - **#3075**: 项目本地 `skills/` 元数据可被自动加载到系统提示词中，存在注入风险。
    - **#3074**: `web_fetch` 的SSRF防护可被ISATAP IPv6地址绕过。
    - **#3073**: LINE Webhook签名重放攻击。
    - **#3072**: Launcher首次运行密码设置处的跨站请求伪造(CSRF)漏洞。
    - **#3071**: 已认证客户端可通过WebSocket触发未授权的配置重载。
    - **#3068**: MQTT的 `allow_from` 授权可通过伪造 `client_id` 绕过。

- **其他问题（待修复/有PR）:**
    - 今日无新Bug报告。上述安全问题均已关闭，修复细节需查看具体Commit。

## 6. 功能请求与路线图信号

- **已关闭的功能请求**:
    - **[#2404](https://github.com/sipeed/picoclaw/pull/2404) (已关闭)**：请求在配置文件中添加 `"streaming": true` 支持，以向LLM后端发送流式HTTP请求。虽然此Issue今日被关闭，但其最终状态（Close意味着被实现还是放弃？）需要进一步确认。从Issue标签 `[CLOSED]` 看，可能已在其他版本中实现，或被认为无必要。

- **待评审的新功能PR**:
    - **[PR #3063](https://github.com/sipeed/picoclaw/pull/3063) (待合并)**：添加了**Delta Chat**网关支持。这是一个去中心化的加密通讯应用，将显著扩展PicoClaw的触达能力。
    - **[PR #3118](https://github.com/sipeed/picoclaw/pull/3118) (待合并)**：为 `picoclaw agent` 命令行工具添加**远程Pico WebSocket模式**。允许agent连接到远程的PicoClaw实例，提升了部署灵活性。

- **路线图信号**：`Delta Chat`网关和远程Agent模式是两个重要的功能扩展，预计将在下一个或下下个版本中与安全修复一同发布。

## 7. 用户反馈摘要

- **用户询问与使用场景**：
    - **[Issue #3167](https://github.com/sipeed/picoclaw/pull/3167)**：用户 `Wavekip` 咨询PageAgent是否能适配Vue等MVVM架构。他们正在一个Vue 2 + Element UI的企业后台系统中测试PageAgent，但发现页面大量依赖 `v-model`、组件内部状态和watcher，导致自动化操作遇到困难。
    - **痛点**：深层技术框架的适配是影响GUID Agent在企业级应用落地的关键障碍。用户希望有官方的适配方案或规划，而不仅仅是通用的DOM操作。

## 8. 待处理积压

- **长期未处理的重要PR**:
    - **[PR #3063](https://github.com/sipeed/picoclaw/pull/3063)** `feat: add deltachat gateway` - 搁置超过2周，是重要的新功能增强。
    - **[PR #3115](https://github.com/sipeed/picoclaw/pull/3115)** `Fix inline data URL media extraction for generic tool output` - 搁置近2周，修复了一个可能导致会话历史损坏的Bug。
    - **[PR #3118](https://github.com/sipeed/picoclaw/pull/3118)** `Add remote Pico WebSocket mode to picoclaw agent` - 同样搁置近2周，是一项重要的架构改进。
    - **[PR #3116](https://github.com/sipeed/picoclaw/pull/3116)** `fix(pico): complete turn.done lifecycle signaling` - 搁置近2周，修复了一个关键的生命周期问题。

- **提醒**：维护者需关注这些PR，尤其是**PR #3115** 和 **PR #3118**，它们分别影响核心稳定性与部署模式，应与安全修复一并评估合并。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-06-25

---

## 1. 今日速览

过去24小时内，NanoClaw 项目保持中等偏上的活跃度。共处理了 **1 条新 Issue** 和 **18 条 Pull Request**（其中 2 条已合并/关闭，16 条待合并）。社区焦点集中在 **Telegram 多机器人支持** 的功能回归与实现方案争议上，同时安全与稳定性修复占据了 PR 总量的半数以上。项目整体处于 **功能强化 + 安全加固** 并行推进的阶段，但 PR 积压数量（16条待合并）值得关注。

---

## 2. 版本发布

**无新版本发布。** 最近一次发布（若有）未在数据范围内，项目当前未产生新的 Release 标签。

---

## 3. 项目进展

### 已合并/关闭的 PR（2条）

| PR | 标题 | 说明 | 状态 |
|---|---|---|---|
| [#2849](nanocoai/nanoclaw PR #2849) | feat(telegram): support multiple bot instances via TELEGRAM_BOT_TOKEN_<SUFFIX> | 支持单实例运行多个 Telegram 机器人，通过 `.env` 中的 `TELEGRAM_BOT_TOKEN_<SUFFIX>` 变量发现 | ✅ 已关闭 |
| [#2799](nanocoai/nanoclaw PR #2799) | fix(security): confine send_file reads to /workspace (CVE-2026-29611) | 安全修复：限制 `send_file` 只能读取 `/workspace` 内的文件，修复 CVE-2026-29611（路径遍历导致任意文件读取） | ✅ 已合并 |

### 关键推进解读

- **安全修复落地**：CVE-2026-29611 的修复已合并，这是对 prompt 注入攻击场景的关键防御，防止恶意 agent 读取容器外敏感文件。
- **Telegram 多 bot 功能**：功能已实现并关闭了原始 PR #2849，但社区同日提交了内容高度相似的 PR #2853，表明可能对实现细节存在分歧或需要改进。

---

## 4. 社区热点

### 最活跃 Issue：[#2852 - telegram multi-bot](nanocoai/nanoclaw Issue #2852)
- **标签**: OPEN / 无评论 / 0 👍
- **核心诉求**：用户抱怨 Telegram 多 bot 功能“曾经有，后来被移除”，尝试使用“instance”支持但 Claude 无法使其工作，直接询问该功能是否会重新实现。
- **分析**：此 Issue 与同时出现的 PR #2849 和 #2853 形成直接关联。用户明确表达了 **功能倒退带来困惑** 和 **文档/实现不匹配** 的痛点，可能反映了项目管理中特性生命周期管理的缺失。

### 最具争议 PR：[#2853 - feat(telegram): support multiple bot instances via TELEGRAM_BOT_TOKEN_<SUFFIX>](nanocoai/nanoclaw PR #2853)
- **与 #2849 高度重复**：同一作者在同一时间段提交了两个内容几乎相同的 PR，推测 #2849 虽被关闭但可能未被上游合并，或者 #2853 是修正后的版本。社区可能对实现方式存在内部争议。

---

## 5. Bug 与稳定性

### 严重程度：高

| Issue/PR | 问题描述 | 状态 | 是否已有修复 PR |
|---|---|---|---|
| [#2854](nanocoai/nanoclaw PR #2854) | macOS + Rancher Desktop 环境下，agent API 调用因自签名证书全部失败。root cause：OneCLI SDK 的 gateway CA 未在容器内正确挂载 | 待合并 | ✅ PR #2854（修复） |
| [#2802](nanocoai/nanoclaw PR #2802) | `ncl` socket 传输层无请求超时、无响应缓冲区上限，可能导致永久挂起或内存无限制增长 | 待合并 | ✅ PR #2802（修复） |
| [#2750](nanocoai/nanoclaw PR #2750) | 容器 SIGKILL 后 `outbound.db` WAL 日志残留，加上轮询竞态可能导致消息丢失。修复 #2516、#2640 | 待合并 | ✅ PR #2750（修复） |

### 严重程度：中

| Issue/PR | 问题描述 | 状态 | 是否已有修复 PR |
|---|---|---|---|
| [#2851](nanocoai/nanoclaw PR #2851) | 测试框架中轮询循环未在超时后停止，导致后续测试消息被“偷走” | 待合并 | ✅ PR #2851（修复） |
| [#2850](nanocoai/nanoclaw PR #2850) | Signal 群组消息缺失 `isMention`/`isGroup` 字段，路由器无法区分 bot 定向消息与群聊环境消息 | 待合并 | ✅ PR #2850（修复） |
| [#2846](nanocoai/nanoclaw PR #2846) | Docker-in-Docker 场景下，容器内 `docker.sock` 权限不足 | 待合并 | ✅ PR #2846（修复） |

### 严重程度：低

| Issue/PR | 问题描述 | 状态 | 是否已有修复 PR |
|---|---|---|---|
| [#2845](nanocoai/nanoclaw PR #2845) | `q.ts` CLI 工具未转发位置参数，导致参数化查询失效 | 待合并 | ✅ PR #2845（修复） |

---

## 6. 功能请求与路线图信号

### 高可能性纳入下一版本

| 功能 | PR/Issue | 成熟度 | 路线图信号 |
|---|---|---|---|
| **URL 远程 MCP 服务器** | [#2847](nanocoai/nanoclaw PR #2847) | 已有完整 PR | 扩展 MCP 协议支持，允许 agent 连接 HTTP/SSE 远程服务器，属于基础设施级增强 |
| **Matrix 原生 E2EE 适配器** | [#2844](nanocoai/nanoclaw PR #2844) | 已有完整 PR | 用 `matrix-bot-sdk` + Rust 加密绑定替换 WASM 桥接，提升加密性能和稳定性 |
| **`/learn` 技能——从任意来源提炼可复用技能** | [#2843](nanocoai/nanoclaw PR #2843) | 已有 PR | 用户生成技能的能力，增强项目可扩展性 |
| **通用扩展点接口** | [#2842](nanocoai/nanoclaw PR #2842) | 已有 PR | 为 host 和容器运行时添加可注册的扩展点，为未来插件化奠定基础 |

### 低概率 / 需进一步讨论

| 功能 | 来源 | 分析 |
|---|---|---|
| Telegram 多 bot 实例（改进版） | [#2852](nanocoai/nanoclaw Issue #2852)、[#2853](nanocoai/nanoclaw PR #2853) | 虽然已有实现（#2849），但社区不满当前方案，可能需重新设计或增加文档 |

---

## 7. 用户反馈摘要

- **痛点明确**：Issue #2852 用户直接指出“we had it, and then it got removed”——功能倒退让用户感到困惑和不满，且声称“Claude cannot get it to work”，暗示文档与实际实现存在差距。
- **使用场景真实**：Signal 群组消息（#2850）、Docker-in-Docker agent 组（#2846）都是真实生产环境需求，用户对这些边界情况有稳定预期。
- **社区协作质量**：多个安全修复 PR（#2799、#2800、#2801、#2802、#2815）由同一贡献者 `sturdy4days` 批量提交，且附带详尽原因分析和测试，表明项目有稳定的社区安全贡献者。

---

## 8. 待处理积压

### 长期未合并的安全/稳定性 PR（超过7天未处理）

| PR | 标题 | 创建日期 | 搁置天数 | 风险 |
|---|---|---|---|---|
| [#2750](nanocoai/nanoclaw PR #2750) | fix: recover stale outbound.db journals after container kills | 2026-06-12 | **13天** | ⚠️ 高：消息丢失风险 |
| [#2800](nanocoai/nanoclaw PR #2800) | fix(security): validate folder + restrict --image-tag | 2026-06-17 | **8天** | ⚠️ 高：路径遍历+镜像固定 |
| [#2801](nanocoai/nanoclaw PR #2801) | fix(router): harden untrusted router input (safeParseContent) | 2026-06-17 | **8天** | ⚠️ 中：原始 JSON 解析导致路由异常 |
| [#2802](nanocoai/nanoclaw PR #2802) | fix(security): ncl socket hardening | 2026-06-17 | **8天** | ⚠️ 高：socket DoS 风险 |

### 行动建议
- 优先合并/处理 **#2750**（outbound.db）和 **#2802**（socket 超时），这两个问题直接威胁核心通信可靠性。
- 对 **Telegram 多 bot**（#2852/#2853）尽快给出明确路线图答复，避免用户流失。

---

*报告生成时间：2026-06-25 10:30 UTC | 数据来源：github.com/qwibitai/nanoclaw*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，以下是基于您提供的IronClaw项目数据生成的日报。

---

## IronClaw 项目动态日报 | 2026-06-25

### 1. 今日速览

**项目状态：高活跃度，Bug修复与功能并行推进**

过去24小时内，IronClaw项目展现出极高的开发活跃度。核心团队围绕其“Reborn”架构，密集展开了多项关键修复与功能开发。一方面，针对狗粮测试和生产环境中暴露的多个稳定性问题（如工具授权、SSE流中断、提供者超时）发布了修复PR；另一方面，大型功能特性如“上下文管理与渐进式工具披露”（#5149）和“内存层重构”（#5163）也在稳步推进中。社区贡献者也在积极优化WebUI体验。尽管暂无新版本发布，但项目正处在架构优化和稳定性加固的关键期。

### 2. 版本发布

无新版本发布。

### 3. 项目进展

过去24小时内，有2个PR被合并/关闭，主要聚焦于修复CI和稳定性问题，为`main`分支恢复绿色状态。

- **CI修复（#5193）**：修复了CI配置文件中的重复key问题，确保工作流能正常运行。同时标记了一个已知的`spawn_subagent`测试失败，为其他PR合并扫清障碍。
- **SSE流恢复（#5194，已合并）**：修复了用户从Slack创建线程后在WebUI操作导致WebUI会话断开、消息无法发送的严重问题。该修复解决了SSE事件流在重新连接后的恢复机制。

此外，还有多个大型PR获得了新的Review或更新，标志着项目在以下方面取得进展：
- **性能优化（#5149）**：引入“上下文管理”功能，通过选择性披露工具来减少每次LLM调用时的token消耗，解决生产环境中因令牌数过多导致的超时问题。
- **内存层重构（#5163）**：将内存层从内核分离为独立的`ironclaw_memory`合约crate，使其成为一个更通用的用户态扩展，对后续架构演进至关重要。
- **WebUI功能增强（#5068、#5084）**：工具权限设置页面和自动化功能页面的重新设计工作仍在进行中。

### 4. 社区热点

**#5149 - `feat(reborn): Context management — progressive tool disclosure`**
- **链接**：[nearai/ironclaw PR #5149](https://github.com/nearai/ironclaw/pull/5149)
- **热度分析**：这是一项旨在解决当前架构下性能瓶颈的大胆尝试。通过对生产日志的分析，发现每次模型调用都会传输全部约91个工具的模式定义，导致Token量巨大（约25.8k），并频繁触发120秒的超时限制，最终导致模型无响应。提案通过默认关闭此功能的方式引入，体现了对系统稳定性的谨慎态度。

**#5068 - `feat(reborn-webui): tool permissions + global auto-approve settings surface`**
- **链接**：[nearai/ironclaw PR #5068](https://github.com/nearai/ironclaw/pull/5068)
- **热度分析**：此PR旨在将工具权限管理（如“总是允许”、“每次询问”、“禁用”）端到端地集成到WebUI中，这是解决用户体验割裂问题的关键一步。特别是当有若干Issue（#5192, #5196, #5197）专门报告工具授权相关的Bug时，此PR的推进备受期待。

**#5193 - `fix(ci): restore green main — duplicate workflow key + missed spawn_subagent test ignore`**
- **链接**：[nearai/ironclaw PR #5193](https://github.com/nearai/ironclaw/pull/5193)
- **热度分析**：一个“不起眼但至关重要”的修复。CI是项目健康的基石，任何导致CI失败的问题都会阻塞所有开发者的工作流。此PR快速识别并修复了YAML配置错误，确保了开发管线畅通，因此虽小但意义重大。

### 5. Bug 与稳定性

今日报告的Bug集中在Reborn WebUI和运行时行为上，按严重程度排列如下：

- **严重（Regression/系统级）**：
    - **Issue #5169**：捆绑的技能因指令中包含普通API词汇（如“Authorization”）而触发安全拒绝列表，导致良性请求失败。这是一个指导性错误的假阳性问题，会严重影响用户体验。
    - **Issue #5184**：当NEAR AI MCP的产品认证查找服务不可用时，Reborn实例启动失败，属于环境依赖硬编码导致的系统级故障。
    - **Issue #5190**：使用无效或过期的Bearer令牌仍可进入WebUI，但后续所有操作均无响应，表现为“假死”状态，用户无法获得清晰的身份验证错误提示。

- **中高（功能行为异常）**：
    - **Issue #5196**：“每次询问”工具权限在批准后仍可能触发授权错误，导致出现重复的授权流程，影响工具的正常执行。
    - **Issue #5192**：拒绝某个工具的授权请求后，AI仍可能尝试发起其他工具的授权请求，这与用户预期相悖。
    - **Issue #5197**：当工具被禁用时，AI没有直接报告工具不可用，反而尝试调用其他无关工具来替代，导致用户困惑。
    - **Issue #5191**：内部技能激活或上下文预算等调试信息泄露到聊天UI中，破坏了用户界面的整洁度。

- **低（体验/信息）**：
    - **Issue #5189**：成功的工具调用在运行时不会显示活动详情面板，而失败的调用会显示，导致UI行为不一致。
    - **Issue #5179**：多租户用户无法在WebUI访问日志，影响运维排障。

**已有修复PR的Bug**：
- **Issues #5179** 与 **#5190** 已有对应的修复PR（#5199 和 #5180）正在Open状态。

### 6. 功能请求与路线图信号

- **增强可观测性（来自#5182）**：用户`serrrfirat`提出，在托管部署场景下，从二进制文件中提取有意义的诊断信息非常困难。此Issue要求增加Reborn CLI和`serve`模式的日志和故障诊断能力，这通常意味着项目正在向更成熟的生产环境迈进，并开始关注SRE层面的需求。
- **自动化流程改进（来自#4986）**：自动化功能如果卡在工具授权环节会永久阻塞，这是一个严重的流程缺陷。其修复（#5202）正在审查中，旨在将后续交付钩子与轮询器异步化，防止阻塞。
- **记忆层作为用户态扩展（来自#5163, #5201）**：将内存层重构为通用的`MemoryService`接口（#5163）并非结束。跟进Issue #5201列出了在M2重构之后剩余的#3537里程碑任务，这表明记忆功能将迎来更强大的改进，例如支持不同的后端存储和个性化配置，这是构建“个人AI助手”核心记忆功能的必经之路。

### 7. 用户反馈摘要

- **痛点**：
    - **工具授权体验割裂**：多个Issue（#5192, #5196, #5197, #4986）反映了当前工具授权机制的混乱。用户期望的“一次允许/拒绝”逻辑未能生效，导致重复请求或不恰当的工具调用，严重干扰了自动化流程和单次交互。
    - **错误信息不明确**：当系统因安全策略拒绝请求时（#5169），用户得到一个误导性的“临时系统问题”提示，而不是清晰的错误原因，这会浪费大量排障时间。
    - **UI/UX一致性差**：用户在不同场景下（成功的vs失败的工具调用，有/无有效的令牌）体验到不一致的UI行为，降低了在复杂流程中对系统的掌控感。

- **欣慰点**（间接反映）：
    - **开发团队响应积极**：从昨天多个Bug被快速响应并创建出对应修复PR（如#5194, #5199）来看，团队对用户反馈的响应速度很快，能有效缓解用户痛点。
    - **架构改革初见成效**：尽管有阵痛，但是像“内存层抽象”（#5163）和“渐进式工具披露”（#5149）这样的大动作，表明项目正在向更健壮、可扩展的方向演进，这给予了社区对项目长期潜力的信心。

### 8. 待处理积压

- **Issue #4108 “Nightly E2E failed”**：该Issue由`github-actions[bot]`于2026-05-27自动创建，至今已近一个月仍未关闭。虽然可能是个别的测试不稳定（Flaky Test），但长期未解决的E2E失败会损害项目的信心指数，建议尽快调查根因，若为Flaky，则应明确标记并定期处理。
- **PR #4002 `build(deps): bump the actions group ...`**：由`dependabot`创建的依赖更新PR，已经挂了一个月，且有16个包更新。虽然风险低，但长期堆积的依赖更新PR可能会在未来合并时引发兼容性问题，建议定期合并此类低风险PR以保持项目健康度。
- **PR #5137 `refactor(reborn): extract ironclaw_reborn_http_kit`**：这是一个旨在解耦`ironclaw_reborn_composition`巨型crate的庞大重构计划的一部分。该PR目前是草稿状态，已经挂了3天。鉴于其巨大的影响力（计划是该系列的第一个），维护者应尽快给予方向性反馈，避免分支长期与`main`脱节。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，根据您提供的LobsterAI GitHub数据，我为您生成以下项目动态日报。

---

## LobsterAI 项目动态日报 — 2026-06-25

### 1. 今日速览

过去24小时内，LobsterAI 项目合并/关闭了大量Pull Requests，主要集中在Bug修复和稳定性改进上，显示项目进入了密集的修补与打磨阶段。尽管Issue活跃度较低（仅1条长期未解决的stale问题更新），但高达43条的PR更新量（其中41条已合并）表明核心开发团队正在进行一次集中的“清理与优化”冲刺。项目整体活跃度较高，但开源社区的参与度（以新Issue和评论数计）相对平静。

### 2. 版本发布

**无。**

### 3. 项目进展

今日项目有41个Pull Requests被合并/关闭，标志着多个重要修复和新功能尘埃落定。核心开发者 **fisherdaddy** 和 **liuzhq1986** 贡献了绝大多数PR，显示出项目的主要进展集中在以下几个方面：

- **OpenClaw 架构优化与平台兼容性**：多个PR围绕 OpenClaw 网关的启动方式、shell快照处理等进行了统一和修复。例如，修复了Electron在Node环境中误判应用路径的问题，避免了在macOS/Linux上生成重复的dock应用。
- **核心协作功能修复**：修复了由GitHub Copilot Token刷新导致的网关重启问题，解决了会话冻结、工具循环中连续消耗token（token burn）以及WebSocket session超时导致的消息发送阻塞等关键问题。
- **LLM交互与UI优化**：修复了LLM流式输出中的空数据处理问题，优化了模型选择UI和Kits UI样式。同时，新增了对新AI模型（如MiniMax M3, Mimo v2.5）的支持，并修复了用户配置的上下文窗口（context windows）被覆盖的问题。
- **IM与指令修复**：修复了IM模块中回复组装范围错误以及无法正确去除思考块的问题。同时，修复了微信群聊在更新/重装时出现的Bug。

**综上所述**：项目在核心架构稳定性、跨平台兼容性、以及与大语言模型交互的健壮性方面取得了显著进步，有效地清理了上个月遗留的大量技术债务。

### 4. 社区热点

今日社区讨论热度不高，唯一活跃的是长期存在的Issue。该问题是社区的稳定痛点，反映了用户对任务持久化管理的明确诉求。

- **#1394 [stale] 定时任务被自动永久删除**：[链接](https://github.com/netease-youdao/LobsterAI/issues/1394)
  - **分析**：该问题自4月提出以来一直是用户的痛点。核心诉求是“不重复执行的定时任务在执行后不应被自动删除”，用户期望保留任务记录以便后续编辑和复用。尽管项目组在之前的版本中可能已经对定时任务逻辑进行了调整，但该Issue至今未被标记为已解决，说明这一问题对用户影响深刻，期待维护团队的最终确认。

### 5. Bug 与稳定性

今日没有新增的Bug报告，但通过已合并的PR，可以看到项目刚刚修复了一系列影响稳定性的重要Bug。按严重程度排列如下：

1.  **严重 - 无限Token消耗**：`fix(openclaw): prevent aborted tool loops from burning tokens` (#2049) 修复了在某些空闲状态下，工具循环被中断后仍会无限重放`Aborted`结果，持续消耗API Token的问题。这是直接影响用户使用成本和生产环境的严重Bug。
2.  **中 - 会话与功能异常**：`fix: solve the problem of session freezing` (#2047) 和 `fix(openclaw): handle gateway sessions.patch timeouts without blocking chat.send` (#2050) 修复了会话冻结、消息发送阻塞等问题，这些会严重影响核心聊天功能的可用性。
3.  **低 - 更新与兼容性**：`fix(app-update): replace deprecated VBScript launcher with hidden PowerShell` (#2057) 替换了过时的脚本启动器，解决了可能出现的更新失败问题。

这些修复都已通过合并的PR落地，预计将在下一个版本更新中极大提升稳定性。

### 6. 功能请求与路线图信号

今日没有新增Feature Request。

- **路线图信号**：从合并的PR `chore: add minimax m3 and update byok models default context windows` (#2089) 和 `fix(config): preserve user-configured context windows and add mimo v2.5 models` (#2102) 可以看出，项目正在积极跟进最新的AI模型版本，并持续改善对用户自备密钥（BYOK）模型的支持。这表明项目团队重视模型的多样性和用户的自定义能力，这些趋势很可能会在后续版本中延续。

### 7. 用户反馈摘要

从Issue #1394的评论中，可以提炼出用户的真实痛点：

- **用户痛点**：对任务（尤其是定时任务）的生命周期管理存在困惑。用户认为“不重复执行”与“执行后自动删除”是两种不同的概念，自动删除行为违背了用户的预期。用户的使用场景是需要一个可编辑、可复用的任务历史，而不是一个一次性的、用完即丢的工具。

### 8. 待处理积压

- **Issue #1394**: 开放已有83天，由用户 @zqgittest 报告。尽管问题本身看似是个简单的功能行为问题，但其长期存在且未被关闭，可能会影响用户对项目UI/UX一致性的信心。建议维护者关注并确认该问题是否已在某个版本中被修复，或给出明确的解决方案和版本安排。
  - [链接](https://github.com/netease-youdao/LobsterAI/issues/1394)

---
*报告生成时间：2026-06-25*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw 项目动态日报 (2026-06-25)

## 1. 今日速览
- **整体状态**：项目今日处于相对稳定状态，无新 Issue 或新版本发布，但有一个重要 PR (#281) 得到关闭（合并）。
- **活跃度评估**：社区讨论和 Issue 提交活跃度较低（0 条新 Issue），但 PR 处理效率良好，表明维护者正在清理历史积压工作。
- **关键推进**：之前提交的 Windows 跨平台支持 PR (#281) 已于今日正式合并，解决了 CLI 在原生 Windows 环境下的运行障碍。
- **代码库健康度**：从当前数据看，项目无新的 Bug 报告或崩溃反馈，稳定性较好。

## 2. 版本发布
- 无新版本发布。

## 3. 项目进展
- **#281 [CLOSED] fix: Windows cross-platform support in CLI**  
  🔗 [TinyAGI/tinyagi PR #281](https://github.com/TinyAGI/tinyagi/pull/281)  
  - **背景**：该 PR 由外部贡献者 mperkins0155 于 6 月 16 日提交，旨在修复 CLI 在 Windows 上的三个关键兼容性问题。  
  - **具体修复内容**：  
    1. **修复盘符重复导致模块加载失败**：`new URL('.', import.meta.url).pathname` 在 Windows 上返回 `/C:/Users/…` 格式，传递给 `path.resolve` 后导致 Node 将路径误判为双盘符（如 `C:/C:/Users`），引发 `MODULE_NOT_FOUND`。  
    2. **路径兼容性处理**：通过调整路径解析逻辑，确保 Windows 与 Unix 文件系统路径正常工作。  
    3. **其他 Windows 特定 BUG**（PR 描述中未详细展开）。  
  - **意义**：该修复填补了项目在原生 Windows（非 WSL）环境下运行的关键空白，是提升开发者友好度的重要一步。  
  - **状态**：已合并/关闭，未产生破坏性变更。

## 4. 社区热点
- **无**：过去 24 小时内无任何 Issue 或 PR 收到新评论或高互动。项目社区讨论热点较少，可能处于开发间歇期。

## 5. Bug 与稳定性
- **无新增 Bug**：今日无任何新的 Bug、崩溃或回归问题被报告。  
- **已修复遗留问题**：PR #281 关闭意味着之前报告的 Windows 兼容性问题（导致 CLI 无法启动）已被正式修复。

## 6. 功能请求与路线图信号
- **无新增功能请求**：今日无用户提出新功能需求。  
- **路线图信号**：PR #281 的合并表明项目在关注跨平台兼容性方面有明确投入。未来版本可能继续完善多平台测试支持或提供 Windows 与 Mac 的预编译包。

## 7. 用户反馈摘要
- **暂无有效用户反馈**：过去 24 小时内打开的 Issue 或 PR 评论中未包含明确的用户痛点、使用场景或满意度评价。  
- **间接指示**：PR #281 的作者 mperkins0155 作为贡献者，其提交行为本身反映了 Windows 用户群里对原生支持的迫切需求。修复内容聚焦于 Windows 路径处理，暗示该环境是用户实际开发中的经常遇到的障碍。

## 8. 待处理积压
- **无新增积压**：当前 Issue 列表为空，PR 已全部处理完毕。  
- **建议**：维护者可关注长期未关闭的历史 Issue（如功能请求或文档缺失），以保持项目贡献者参与度。若存在未合并的老旧 PR，建议发布状态更新。

---

**项目健康度小结**：今日 TinyClaw 项目状态平稳。虽无新版本和热点讨论，但通过 PR #281 的合并，项目在跨平台兼容性上取得实质进展，核心 Bug 得到清除。建议维护者在下一次版本发布时重点宣传 Windows 原生支持，并考虑添加 CI 测试矩阵覆盖 Windows、macOS、Linux 三种环境，防止类似问题复发。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

好的，这是根据您提供的 CoPaw 项目 GitHub 数据生成的 2026-06-25 项目动态日报。

---

## CoPaw 项目动态日报 | 2026-06-25

### 1. 今日速览

过去24小时内，CoPaw 社区活跃度极高，主要集中在**Bug修复**和**功能增强**两大方面。共处理了73条 Issues 和 PR，其中23条 Issue 和50条 PR 处于活跃状态。值得关注的是，有大量 PR（44条）仍在待合并状态，表明项目团队正在进行密集的开发与代码审查工作。尽管没有新版本发布，但多项针对前端性能、模型兼容性和系统稳定性的修复正在积极推进中，项目整体健康度良好。

### 2. 版本发布

*本周无新版本发布。*

### 3. 项目进展

过去24小时内，项目共有6个重要 Pull Request 被合并或关闭，主要集中在修复 2.0 迁移后的兼容性问题及提升系统稳定性。

- **[已合并] 修复对话时间戳更新** (#5498) - 将当前时间从固定的系统环境上下文移动到每条用户消息的动态前缀中，解决了长会话中时间信息过时的问题，并优化了 Prompt 缓存。这是对用户反馈 (#5455) 的快速响应。
- **[已合并] 修复会话切换时的前端报错** (#5358) - 修复了在嵌入式 Console 模式下切换会话时偶发的 `TypeError: Cannot read properties of null (reading 'object')` 错误。
- **[已关闭] 修复钉钉 Channel 会话不可见问题** (#5177) - 解决了通过钉钉 Channel 发送消息后，会话在 Console 前端列表中不可见的问题。
- **[已关闭] 修复 Shell 命令执行时特殊字符解析失败** (#5373) - 修复了 `execute_shell_command` 工具无法正确处理如重定向(`>`)、管道(`|`)等 Shell 特殊字符的Bug。
- **[已关闭] 修复移动端无法切换智能体** (#5476) - 修复了移动端 Web UI 上无法切换智能体的功能缺失。

**总结：** 项目在修复 AgentScope 2.0 迁移后的遗留问题、提升多平台 Channel 用户体感和修复关键工具功能方面取得了实质进展。

### 4. 社区热点

今日最受关注的议题集中在第三方模型兼容性与自定义提供商的支持。

- **[讨论热点] 自定义 OpenAI 兼容提供商无法使用 Function Calling** (#5345)
  - **链接:** [Issue #5345](https://github.com/agentscope-ai/QwenPaw/issues/5345)
  - **核心诉求:** 用户发现当手动添加非标准的 OpenAI 兼容 API（如 OMLX）作为托管提供商时，模型虽然能收到消息，但完全无法调用工具 (Function Calling)，而原生支持的 Ollama 则工作正常。这表明项目目前的提供商兼容性逻辑可能对某些实现非标准或更严格的 OpenAI API 的服务存在兼容问题。
- **[功能讨论] 时间戳应置于用户消息之前而非系统环境** (#5455)
  - **链接:** [Issue #5455](https://github.com/agentscope-ai/QwenPaw/issues/5455)
  - **核心诉求:** 开发者用户 `howyoungchen` 提出，当前将日期放于系统上下文的做法在长会话中会导致信息过时，影响模型对时间的感知。建议将时间戳作为每条用户消息的前缀，以提高 Prompt 缓存的效率和稳定性。此建议已被采纳并快速发布了修复 PR (#5498 & #5499)，体现了社区对项目优化的深度参与和高效反馈。

### 5. Bug 与稳定性

本日报告的 Bug 主要集中在**前端渲染性能**和**模型兼容性**方面，部分问题已有关联的修复 PR。

| 严重程度 | Issue 标题 | 链接 | 是否有修复 PR |
| :--- | :--- | :--- | :--- |
| **严重** | 包含大量工具调用的会话导致前端崩溃 (#5401) | [Issue #5401](https://github.com/agentscope-ai/QwenPaw/issues/5401) | 是 (PR #5495) |
| **严重** | 大会话文件(>500KB)打开报错 (#5479) | [Issue #5479](https://github.com/agentscope-ai/QwenPaw/issues/5479) | 否 |
| **高** | 长消息排版错乱，需切换选项卡恢复 (#5480) | [Issue #5480](https://github.com/agentscope-ai/QwenPaw/issues/5480) | 否 |
| **高** | 通过OpenCode Go使用GLM系列模型报错 `json_schema_converter.cc` 失败 (#5472) | [Issue #5472](https://github.com/agentscope-ai/QwenPaw/issues/5472) | 是 (PR #5496) |
| **高** | 内网环境安装后客户端页面空白 (#5497) | [Issue #5497](https://github.com/agentscope-ai/QwenPaw/issues/5497) | 否 |
| **中** | 启动后 `Internal Server Error` (#5379) | [Issue #5379](https://github.com/agentscope-ai/QwenPaw/issues/5379) | 否 |
| **中** | 非默认智能体身份显示错误 (#5456) | [Issue #5456](https://github.com/agentscope-ai/QwenPaw/issues/5456) | 否 |
| **中** | Skill ZIP包YAML元数据错误导致命名空间被占用 (#5474) | [Issue #5474](https://github.com/agentscope-ai/QwenPaw/issues/5474) | 否 |

**关键发现**：前端性能问题（#5401, #5479, #5480）是当前用户的核心痛点，影响了大量数据场景下的使用体验。模型兼容性问题（#5472）表明对特定厂商模型的适配仍需加强。

### 6. 功能请求与路线图信号

- **支持通过 pip 从 PyPI 安装插件** (#5484)
  - **链接:** [Issue #5484](https://github.com/agentscope-ai/QwenPaw/issues/5484)
  - **信号:** 已有对应 PR (#5492)。这表明项目正在向更标准的 Python 生态靠拢，降低插件分发和安装门槛，这是向更成熟平台迈出的重要一步，很可能纳入下个版本。
- **支持 Chat 响应格式 (response-format)** (#5489)
  - **链接:** [Issue #5489](https://github.com/agentscope-ai/QwenPaw/issues/5489)
  - **信号:** 这表明社区对 OpenAI 最新 API 特性的跟进有需求，可能作为后续版本的小功能点进行支持。
- **Kimi Coding Plan 模型配置** (#5427)
  - **链接:** [Issue #5427](https://github.com/agentscope-ai/QwenPaw/issues/5427)
  - **信号:** 用户对非 OpenAI 兼容的 API（如 Anthropic 格式）有直接调用需求，可能推动项目在未来考虑更灵活的 Provider 适配架构。

### 7. 用户反馈摘要

- **痛点与不满意:**
  - **前端性能差：** 持续有用户反馈前端加载慢、会话切换卡顿（#5015）、大会话崩溃（#5479），部分用户甚至直接抱怨刚启动内存占用就达到1.4G（#5441），体验不佳。
  - **第三方/内网环境支持不完善：** 自定义 OpenAI 提供商无法使用 Function Calling（#5345）以及内网环境客户端白屏（#5497）等问题，让部分用户的使用场景受限。
- **使用场景与满意:**
  - **深度的开发/定制体验：** 开发者用户积极贡献代码，如 `howyoungchen` 对时间戳机制的讨论和改进 PR，以及 `qwtsc` 提出 pip 插件安装方案，显示出社区中有一批熟练的开发者正在将 CoPaw 用于更深度的开发场景。
  - **多 Channel 集成：** 尽管有 Bug，但飞书、钉钉 Channel 被频繁使用，说明 CoPaw 在办公场景的 Chatbot 集成是核心功能，且用户对此有刚需。

### 8. 待处理积压

- **[长期未响应] 桌面端 Tauri 自动更新** (#4669)
  - **链接:** [PR #4669](https://github.com/agentscope-ai/QwenPaw/pull/4669)
  - **状态:** 该 PR 已开启超过一个月，是提升桌面端用户体验的关键功能。建议维护者加快评审进度。
- **[重要特性] 滚动上下文管理器** (#5321)
  - **链接:** [PR #5321](https://github.com/agentscope-ai/QwenPaw/pull/5321)
  - **状态:** 这是一项重大的上下文管理策略创新，引入了基于检索的持久化历史记录，可能从根本上解决长对话的性能问题。该 PR 标记为“初代贡献者”和“正在审查”，建议社区重点关注和讨论。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，这是为 ZeroClaw 开源项目生成的 2026-06-25 项目动态日报。

---

# ZeroClaw 项目动态日报 | 2026-06-25

## 1. 今日速览

ZeroClaw 项目今日保持着极高的活跃度，24小时内共有50条Issue和50条PR更新，社区参与度强烈。当前开发重心清晰集中于 **安全性增强**、**供应链安全 (Supply-chain Security)** 与 **多租户架构**。多个高优先级（P1）的安全相关Issue（如 #8044、#6250）处于活跃讨论中，并有对应的修复或功能PR在推进（如 #7747 已合入）。此外，一个全新的“目标模式”RFC (#8303)的提出，预示着项目正在向更复杂的自主任务执行场景拓展。整体来看，项目正朝着一个更安全、更健壮、功能更丰富的 v0.9.0 版本稳步迈进。

## 2. 版本发布

- **无新版本发布。** 项目目前似乎处于两个版本之间的开发冲刺期，所有工作都集中在已接受的 RFC 和 P1/P2 级别的 Issue 上。

## 3. 项目进展

项目在安全性与核心功能上取得了实质性的进展，核心 PR 的合入标志着功能从设计走向实施。

- **【安全：高】MCP 服务器作用域强制实施已合入** (#7747): 该 PR 修复了 Issue #7733 中描述的严重安全漏洞。此前，`mcp_bundles` 配置仅停留在配置层面，运行时所有 Agent 都能访问所有 MCP 服务器。PR #7747 现已合入，将按 Agent 的作用域配置 (`mcp_bundles`) 进行了运行时强制隔离，解决了多租户部署下的一个关键隐患。
- **【架构：高】OIDC 认证支持 RFC 已接受** (#7141): 由 @singlerider 提出的 OIDC 认证功能已被正式接受为 RFC。这是 ZeroClaw 实现可插拔认证体系的关键一步，其子 Issue #8076（本地用户名密码认证）也已有详细设计，表明项目正在构建一套完整的身份验证解决方案。
- **【稳定性：高】运行时与工具稳定性追踪进行中** (#8071): 社区核心成员 @Audacity88 发起的 v0.8.3 里程碑追踪，涵盖了Agent循环、工具执行、内存管理等一系列稳定性修复。这表明项目在推进新功能的同时，也在努力夯实底层运行稳定性。

## 4. 社区热点

今日社区讨论焦点集中在安全性和多租户管理上，尤其围绕几个高风险的增强请求展开。

1.  **#5982: 为多租户 Agent 部署提供基于发送者的 RBAC** ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5982))
    - **热度：** 评论数最多 (9), 状态 `accepted`。
    - **分析：** 此 Issue 是社区对多租户需求的直接体现。用户希望在单个 ZeroClaw 实例内，根据不同角色（客户、操作员、开发者）隔离工作空间、工具集和速率限制。这背后的诉求是 **企业级的多用户管理能力**，是项目从单用户工具向平台级产品演进的关键信号。

2.  **#8177: RFC - 供应链签名 (SLSA 溯源)** ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8177))
    - **热度：** 评论 5, 状态 `rfc`。
    - **分析：** 此 RFC 提出了对发布二进制文件和容器镜像进行硬件 PGP 签名和 SLSA 溯源的主张。这反映了项目对 **软件供应链安全** 的高度重视，旨在防止恶意篡改和提升用户对下载物体的信任度。结合 PR #8129（在PR门禁中加入 `cargo-audit`），可见项目正在构筑从开发到发布的全链路安全防线。

## 5. Bug 与稳定性

今日有多项 Bug 报告和修复，其中 **高严重性 (S1/S2)** 的问题较多，但大部分已有明确的修复路径或相关 PR。

| 严重程度 | 状态 | Issue/PR | 问题描述 | 文件链接 |
| :--- | :--- | :--- | :--- | :--- |
| **S1 - 工作流阻塞** | **已关闭** | #8151 | 推迟的图像附件在缓存历史中丢失引用 (Matrix频道) | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8151) |
| **S2 - 降级行为** | **PR 合入** | #7733 | `mcp_bundles` 作用域无效，所有Agent共享所有MCP服务器 **(已通过 #7747 修复)** | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/7733) |
| **S2 - 降级行为** | 开启 | #7623 | 委托给需OAuth的子Agent时，错误传递了协调者的API密钥 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/7623) |
| **S2 - 降级行为** | 开启 | #7800 | ZeroCode 的快捷键/帮助信息在 macOS上 混乱或无法使用 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/7800) |
| **S1 - 安全风险** | 开启 | #8044 | `/model --agent` 命令缺少权限检查，任何发送者都可更改所有用户的模型 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8044) |
| **S1 - 安全风险** | 开启 | #5903 | 启用心跳后，MCP stdio 子进程泄漏（每次心跳产生一个孤儿进程） | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5903) |
| **S0 - 数据丢失/安全风险** | **已关闭 (wontfix)** | #551 | 请求允许忽略OpenAI兼容端点的SSL证书检查 (已标记为`wontfix`) | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/551) |

## 6. 功能请求与路线图信号

今日功能请求主要集中在 **安全多租户** 和 **执行灵活性** 上，其中一些已有相关 PR，可能进入下个版本。

- **安全多租户 (强烈信号):**
    - **#8226: 支持每个Agent自定义环境变量** ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8226)): 提出了为每个Agent配置 `runtime_context` 和 `runtime_secrets` 的概念，这与 #5982 (RBAC) 和 #7733 (MCP作用域) 形成了互补，共同构建一个完整的多租户安全模型。
    - **#7141 / #8076: OIDC 及本地用户名密码认证** ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7141), [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8076)): 这些 RFC 和子 Issue 已进入实施阶段，将成为未来身份认证的基石。

- **执行灵活性 (潜在特征):**
    - **#8303: RFC - 有界自主会话工作的“目标模式”** ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)): 该 RFC 提出了一个全新的执行模式，让 Agent 可以为一个目标持续工作直到完成或预算耗尽。这是对现有“对话式”和“定时任务”模式的重要补充，一旦被接受，将是重大的功能扩展。
    - **#6289: 提示触发的缺失技能安装建议** ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6289)): 该功能请求旨在改善用户发现和使用技能/插件的体验，相关 PR #8264（注册表搜索与按名称安装）已在积极开发中。

## 7. 用户反馈摘要

- **安全为核心痛点：** 用户反馈集中在安全权限上，例如 `mcp_bundles` 未生效 (`#7733`)，和 `/model` 命令缺乏权限检查 (`#8044`)。这说明在实际多用户部署中，安全问题已成为用户体验的瓶颈。
- **配置与应用体验：** 用户在使用快速启动时，因默认的限制性风险配置导致体验不佳 (`#8125`)，促使社区提出了自动启用 `yolo` 风险配置的方案。这表明新用户的引导和默认配置的优化是提升初次体验的关键。
- **功能发现困难：** Issue #6289 反映了 ZeroClaw 功能丰富，但用户难以发现并安装未预装的能力。这直接催生了技能搜索和推荐系统的需求。
- **跨平台兼容性：** Issue #7800 和 #8075 反映了 ZeroCode 在 macOS 上的快捷键冲突和界面问题，这是跨平台应用常见的痛点，需要持续的关注和优化。

## 8. 待处理积压

以下是一些可能长期未获应有关注，但对项目健康度至关重要的待处理项：

1.  **#5903: MCP stdio 子进程泄漏** ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5903))
    - **标签:** bug, P1
    - **分析:** 这个严重问题已存在超过两个月（创建于4月19日），描述清晰且影响明确，会导致Daemon的内存和进程资源被长期耗尽。尽管已被接受且在追踪器中，但缺乏一个具体的 `status:in-progress` 或关联的修复 PR，建议社区维护者加快处理进度。

2.  **#5607: 为定时任务添加前置钩子/跳过门** ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5607))
    - **标签:** enhancement, status:blocked
    - **分析:** 该功能请求旨在为定时任务和SOP触发器增加轻量级的前置条件判断。自4月提出以来一直处于 `blocked` 状态，对于一个生产级的自动化工具来说是重要的补充，讨论了执行失败率和资源浪费的问题，建议给出明确的状态更新。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*