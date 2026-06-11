# OpenClaw 生态日报 2026-06-11

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-11 00:36 UTC

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

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我将根据您提供的 OpenClaw 项目 GitHub 数据，生成一份结构清晰的 2026-06-11 项目动态日报。

---

# OpenClaw 项目动态日报 | 2026-06-11

## 1. 今日速览

- **活跃度极高**：项目在过去24小时内迎来了开发高峰，共计有 **500 条 Issue 和 500 条 PR 更新**，显示了社区和核心团队的巨大投入。
- **修复与功能并重**：新发布的 **v2026.6.6-beta.1** 版本大幅收紧安全边界，覆盖了从沙箱隔离到消息通道的多个方面。同时，有多项关键 Bug 修复和用户体验改进的 PR 正在推进。
- **安全与稳定性成焦点**：高频出现的 `security`、`session-state`、`message-loss` 标签表明，社区和开发者正集中精力解决会话状态混乱、数据泄露和消息丢失等严重影响用户体验的核心稳定性问题。
- **长期积压问题仍需关注**：尽管日活极高，大量 Issue 仍挂着 `clawsweeper:needs-product-decision` 标签，说明许多改进请求已复现，但尚需产品团队决策其排期。

## 2. 版本发布

- **v2026.6.6-beta.1**：该版本进行了前所未有的安全加固，关键变更包括：
    - **更严格的安全边界**：对 `transcripts`（对话记录）、`sandbox binds`（沙箱挂载）、`host environment inheritance`（主机环境继承）、`MCP stdio`（MCP 标准输入输出）、`Codex HTTP access`（Codex HTTP 访问）、`native search policy`（原生搜索策略）等多个模块实施了更严格的权限检查和隔离。
    - **增强的权限检查**：增加了 `elevated sender checks`（提升的消息发送者检查）和针对 `loopback tools`（回环工具）的安全控制。
    - **平台安全**：修复了 `Discord moderation`（Discord 管理）、`Teams group ac`（Teams 群组）等平台相关的潜在安全问题。
    - **阻止已删除智能体的绕过**：修复了 `deleted-agent ACP bypasses`（已删除智能体访问控制协议绕过）漏洞。

    > **迁移注意事项**：此版本包含多项安全破坏性变更。如果您的配置依赖于旧有的宽松安全模式（例如，允许在非 HTTPS 环境下使用控制 UI、允许 `exec` 工具无限制访问主机环境、或允许 `web_fetch` 工具访问内网地址），升级后可能需要进行配置调整。请**务必查看**完整的 `OPENCLAW_CHANGELOG.md` 以了解所有配置项变更。

## 3. 项目进展

今日合并/关闭了 **99 个 PR**，涵盖了多项重要修复与功能增强，核心进展如下：

- **安全与边界加固**：
    - [#74002](https://github.com/openclaw/openclaw/issues/74002) & [#92056](https://github.com/openclaw/openclaw/issues/92056): 修复了 `exec` 工具不尊重 `OPENCLAW_STATE_DIR` 环境变量的问题，确保执行权限文件存储位置正确。
    - [#91305](https://github.com/openclaw/openclaw/issues/91305): 修复了控制 UI 在非根路径部署时，因路径错误导致无法启动（404）的问题。
    - [#91720](https://github.com/openclaw/openclaw/issues/91720): 修复了 `gpt-5.3-codex` 模型强制使用 ChatGPT 后端传输的问题，让拥有标准 OpenAI API Key 的用户也能正常使用。
    - [#91711](https://github.com/openclaw/openclaw/issues/91711): 修复了智能体“harness”因模型提供商不匹配而报错时，错误分类不明确，导致无法触发自动故障切换的问题。

- **功能与可靠性修复**：
    - [#91471](https://github.com/openclaw/openclaw/issues/91471): 为 `cron runs` 命令的 JSON 输出增加了人类可读的 ISO 时间字段（`tsIso`、`runAtIso`、`nextRunAtIso`），大大改善了运维体验。
    - [#91351](https://github.com/openclaw/openclaw/issues/91351): 为 `opencode-go` 扩展中的 `qwen3.7-plus` 模型补充了精确的分级定价数据，避免了超额计费。
    - [#91292](https://github.com/openclaw/openclaw/issues/91292): 修复了在配置参数为空时，嵌入式运行环境无法发现 Google Gemini 模型的问题。
    - [#92027](https://github.com/openclaw/openclaw/issues/92027): 修复了配置文件监听器（chokidar）出错后，热更新永久失效的问题，增加了重试和熔断机制。

## 4. 社区热点

以下 Issue 和 PR 获得了社区高度关注，反映了用户的真实痛点：

- **#25592 [🔥: 31 评论]**: [Text between tool calls leaks to messaging channels](https://github.com/openclaw/openclaw/issues/25592)
    - **诉求**：社区最关心的问题之一。智能体在处理过程中的内部日志、错误信息等不应发送到聊天频道，这会严重干扰用户。
    - **分析**：该 Issue 被标记为 `diamond lobster`（最高优先级）及 `impact:message-loss` 和 `impact:security`，表明它不仅影响体验，还可能造成信息泄露。这是 AI 助手平台的一个核心用户体验设计问题。

- **#32473 [👍: 4]**: [[Bug]: control ui requires device identity](https://github.com/openclaw/openclaw/issues/32473)
    - **诉求**：使用 HTTPS 反向代理或 Docker 部署时，控制 UI 报错“需设备身份验证”。
    - **分析**：这是一个典型的部署场景兼容性问题，影响了许多用 Docker 或 VPS 搭建服务的用户。大家希望 OpenClaw 能更好地支持标准 HTTPS 部署。

- **#18160 [👍: 10]**: [[Feature]: Direct Exec Mode for Cron Jobs](https://github.com/openclaw/openclaw/issues/18160)
    - **诉求**：用户为简单的定时任务（如清理日志）发起一次 `agentTurn` 调用 LLM，既浪费又不稳定。
    - **分析**：高赞数表明，用户非常渴望一个“直接执行模式”，让 Cron 任务能跳过 LLM 推理，直接执行 shell 命令，提高可靠性和效率。

## 5. Bug 与稳定性

今日报告的 Bug 和回归问题高度集中于**会话状态、消息丢失和安全**三大领域，按严重程度排列如下：

- **P0/P1 级 - 数据丢失与核心功能异常**：
    - [#88838](https://github.com/openclaw/openclaw/issues/88838) (P0): 核心会话/转录迁移到 SQLite 的任务，虽非新 Bug，但其“高风险”评级和 19 条评论凸显了社区对其稳定性的担忧。
    - [#22676](https://github.com/openclaw/openclaw/issues/22676) (P1): Signal 守护进程重启时的竞态条件，导致孤儿进程和发送失败。 **无关联 PR**，问题依旧。
    - [#32296](https://github.com/openclaw/openclaw/issues/32296) (P1): 智能体回复历史消息而非当前消息，导致对话上下文混乱。 **无关联 PR**。
    - [#58450](https://github.com/openclaw/openclaw/issues/58450) (P2但高活跃): 智能体承诺“稍后跟进”后却未发起任何实际动作，这是一种“伪承诺”Bug，严重影响用户信任。

- **P2 级 - 配置与功能异常**：
    - [#29387](https://github.com/openclaw/openclaw/issues/29387) (P1): 放在 `agentDir` 下的自定义提示文件被静默忽略。**无关联 PR**。
    - [#38327](https://github.com/openclaw/openclaw/issues/38327) (P1): `2026.3.2` 版本中，`google-vertex/gemini-3.1-pro-preview` 模型导致“对象转换错误”的回归问题。**无关联 PR**。
    - [#86508](https://github.com/openclaw/openclaw/issues/86508) (P1): Discord 运行时出现 `EmbeddedAttemptSessionTakeoverError`，提示文件冲突。**无关联 PR**。

## 6. 功能请求与路线图信号

从今日的议题中可以提炼出几个清晰的功能发展信号：

- **安全与权限精细化**（强烈信号）：
    - [#39604](https://github.com/openclaw/openclaw/issues/39604): 请求为 `web_fetch` 添加 `allowPrivateNetwork` 配置项，允许在明确授权后访问内网。已有 [关联 PR](#)。
    - [#10659](https://github.com/openclaw/openclaw/issues/10659): 请求“掩码密钥”系统，让智能体能使用 API Key 但无法看到原文。
    - [#13583](https://github.com/openclaw/openclaw/issues/13583): 请求**前置强制执行钩子**，从机制上保证智能体在回复前必须执行特定工具。这将是高合规性场景的必备功能。
    - [#39979](https://github.com/openclaw/openclaw/issues/39979): 建议将许可模型从基于“可执行文件”改为基于“路径”，提供更细粒度的文件权限控制。

- **代理控制与任务执行优化**（强烈信号）：
    - [#22438](https://github.com/openclaw/openclaw/issues/22438): 请求“分层引导文件加载”，允许用户按智能体或任务类型控制输入文件的加载范围，节省 Token。
    - [#18160](https://github.com/openclaw/openclaw/issues/18160): 如前所述，请求 Cron 任务的**直接执行模式**。
    - [#40001](https://github.com/openclaw/openclaw/issues/40001): 请求为 `write` 工具增加追加模式，防止隔离会话覆盖共享文件。

- **平台集成扩展**：
    - [#79077](https://github.com/openclaw/openclaw/issues/79077): Telegram 平台发布了新 API，新增了访客机器人和机器人间通信功能，社区已有跟进请求。

## 7. 用户反馈摘要

- **部署痛点**：多用户报告了在 Docker 和反向代理环境下遇到的安全上下文问题（#32473, #31331），说明官方文档需要加强对这些常见部署模式的建议。
- **可靠性抱怨**：用户对**会话状态混乱**（#32296, #58450）和**消息丢失/重复**（#25592, #39476）的问题反馈最为强烈，这直接导致了“智能体不可靠”的负面感知。
- **积极反馈**：用户对 #18160（Cron 直接执行）和 #39604（可控内网访问）等功能请求点赞极高，表明社区非常渴望获得更强、更灵活的控制权。
- **对新功能的渴望**：用户在 #42840 中呼吁支持 **MathJax/LaTeX**，这表明 OpenClaw 有相当一部分用户群体来自学术/科研背景，对数学公式的渲染有刚需。

## 8. 待处理积压

以下为长期未响应或停滞的重要 Issue/PR，需要维护者重点关注：

- **高优先级 Bug，无修复 PR**：
    - [#22676](https://github.com/openclaw/openclaw/issues/22676) (P1, Signal 守护进程重启竞态): 影响消息可靠性，需优先处理。
    - [#32296](https://github.com/openclaw/openclaw/issues/32296) (P1, 上下文混乱): 核心体验问题，根因分析可能较复杂。
    - [#86508](https://github.com/openclaw/openclaw/issues/86508) (P1, Discord 会话接管错误): 影响 Discord 核心用户，需排查锁机制。

- **长期未决功能请求，等待产品决策**：
    - 大量请求如 #10659（掩码密钥）、#13583（强制执行钩子）、#11665（Webhook 多轮会话）被标记为 `needs-maintainer-review` 和 `needs-product-decision`，社区已等待数月。建议维护者尽快对齐优先级并给出明确计划，以避免社区热情消退。
    - [#41545](https://github.com/openclaw/openclaw/issues/41545) (编辑 WebSocket URL 清空 Token): 一个低级 UI 交互 Bug，虽然不致命，但持续存在会损害专业形象。

---

## 横向生态对比

好的，作为资深技术分析师，我已将上述各项目的日报数据整合，为您呈现一份关于AI智能体与个人AI助手开源生态的横向对比分析报告。

---

### 1. 生态全景

2026年6月11日，个人AI助手与自主智能体开源生态呈现出**高度活跃但分化加剧**的态势。以**OpenClaw**、**Hermes Agent**、**ZeroClaw**为代表的项目处于疯狂的密集迭代期，每日合并/关闭上百个PR，重点解决会话状态管理、安全边界和模型兼容性等核心基础设施问题。与此同时，**CoPaw**、**NanoBot**等后起之秀通过快速发布新特性和优化用户体验（如零配置模型、子代理模型预设）来争夺市场份额。社区对**模型灵活性**（多后端、视觉模型独立配置）、**自动化可靠性**（Cron任务、子代理编排）以及**生产级安全性**（凭证管理、SSRF防护）的诉求成为所有项目的共同关注焦点，标志着该领域正从“尝鲜可用”加速迈向“生产就绪”。

### 2. 各项目活跃度对比

| 项目名称 | Issues 活跃数 | PR 数 | 今日 Release | 健康度评估 | 核心焦点 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (极高) | 500 (极高) | v2026.6.6-beta.1 | ★★★★☆ (高) | 安全加固、会话可靠性、大规模社区治理 |
| **ZeroClaw** | 90+ (高) | 90+ (高) | 无 | ★★★★☆ (高) | v0.8.x 稳定性、子代理协作、MCP生态 |
| **CoPaw** | 87 (高) | 50 (高) | v1.1.11 (正式版) | ★★★★☆ (高) | 新版本发布、视觉模型支持、前端性能优化 |
| **Hermes Agent** | 50 | 50 | 无 | ★★★☆☆ (中高) | 凭证池可靠性、WhatsApp/第三方集成兼容性 |
| **NanoBot** | 15 | 33 | 无 | ★★★★☆ (高) | 上下文隔离、子代理模型预设、文件管理 |
| **PicoClaw** | 10+ | 6 | Nightly | ★★★☆☆ (中) | SSRF漏洞修复、Windows兼容性、Agent协作总线 |
| **NanoClaw** | 5 | 10 | 无 | ★★★★☆ (高) | 容器日志、文档体系、安全加固 (IPC) |
| **NullClaw** | 0 | 4 | 无 | ★★☆☆☆ (低) | 配置灵活性、Cron任务归属、假阳性修复 |
| **LobsterAI** | 0 | 20 (合并) | 2026.6.10 | ★★★★☆ (高) | 版本发布会后整合、Windows平台修复、积压清理 |
| **Moltis** | 1 | 0 | 无 | ★★☆☆☆ (低) | 低活跃度，配置类Bug待跟进 |

### 3. OpenClaw 在生态中的定位

OpenClaw 在生态中扮演着 **“技术基石”与“标准引领者”** 的角色。与同类项目相比，其核心优势在于：

- **规模与治理成熟度**：其每日500条 Issue/PR 的涌入量是其他项目的数倍甚至数十倍，证明了其拥有最庞大的开发者社区和最复杂的治理模式。项目已演化出 `clawsweeper:needs-product-decision` 等成熟的社区分类标签，显示了其应对大规模协作挑战的流程化能力。
- **安全优先的技术路线**：`v2026.6.6-beta.1` 版本对 `transcripts`、`sandbox binds` 等7个模块进行安全加固，相比其他项目，OpenClaw 在安全投入上最为系统化，体现了其为金融、合规等高风险场景奠基的目标。
- **社区规模与影响力**：其热点 Issue（如 `#25592`）评论数远超其他项目，功能请求（如 Cron 直接执行）的高赞数也侧面印证了其用户基数庞大，其决策常常影响整个生态的技术风向。

### 4. 共同关注的技术方向

- **灵活的模型后端与供应商选择**：*Hermes Agent (#37876), NanoBot (#4291), CoPaw (#4992)* 均强烈要求支持多后端（本地/远程）、子代理使用不同模型、独立配置视觉模型。这表明用户不再满足于绑定单一LLM，而是追求成本、性能与功能的最佳组合。
- **子代理/多Agent协作可靠性**：*OpenClaw (#22438), NanoBot (#4290, #4291), ZeroClaw (#7263), PicoClaw (#3094)* 共同暴露了子代理在进程保活、上下文继承（cwd）、消息聚合与排序等方面的脆弱性。让Agent能可靠地调用子Agent是当前最大的技术挑战之一。
- **Cron/自动化任务的健壮性**：*OpenClaw (#18160), NanoBot (#4290), ZeroClaw (#7352)* 都聚焦于Cron任务。用户不仅希望任务能稳定触发，还希望有“直接执行模式”（跳过LLM）或任务执行后的归属追踪。
- **凭证与安全管理的精细化**：*OpenClaw (#39604, #10659), Hermes Agent (#42846), PicoClaw (#3085)* 都在探索更细粒度的内网访问控制、凭证脱敏、枚举退避（避免限流错误标记）等机制，安全已从“可用”的加分项变为“必选”的基础能力。

### 5. 差异化定位分析

- **OpenClaw (开源标准平台)**：面向所有层级的开发者，定位为“全能型操作系统”。功能全面但庞大，强调安全合规和社区共建，学习曲线较陡。
- **NanoBot (极简高效引擎)**：侧重实时性和效率，通过快速决策和轻量化配置解决问题。其“模型回退”和“子代理模型预设”创新，对资源敏感或追求极致性价比的开发者有吸引力。
- **Hermes Agent (生态兼容接口)**：核心优势在于与第三方平台（WhatsApp, MiniMax, Telegram）的深度集成。其挑战在于依赖外部库，存在“兼容性负债”，更适合已有特定平台绑定需求的用户。
- **ZeroClaw (下一代运行时探索者)**：通过“ZeroCode” TUI和激进的WASM插件、原生动态库RFC，试图颠覆传统的Java/Python运行时。其定位在“先锋开发者”和“基础设施研究者”，风险与创新并存。
- **CoPaw (企业级应用平台)**：通过高密度版本发布引入“零配置试用”、“DataPaw”等商业化特征明显的功能，瞄准企业市场。对前端性能和可视化配置（如视觉模型fallback）的投入，显示了其对普通用户端体验的极致追求。

### 6. 社区热度与成熟度

- **快速迭代阶段**：**OpenClaw, ZeroClaw, CoPaw, Hermes Agent**。这四个项目每日新增数十上百条Issue/PR，功能开发和Bug修复并行，处于高速冲刺期。社区贡献者活跃，但产品稳定性抖动明显。
- **质量巩固阶段**：**NanoBot, NanoClaw, LobsterAI**。这些项目在核心功能开发告一段落后，正进入代码清理、文档完善和细节打磨期。PR合并率高（NanoClaw 60%），版本发布节奏清晰，用户体验持续优化。
- **低活跃/观望阶段**：**NullClaw, PicoClaw, Moltis**。这些项目可能处于重大决策前（如架构RFC评审）或维护者精力有限，社区贡献较少，活跃度低迷。

### 7. 值得关注的趋势信号

- **“轻量化”与“去LLM中心化”**：*OpenClaw (#18160)* 的“Cron直接执行模式”和 *NanoBot (#4291)* 的子代理模型预设，预示着开发者正在探索“不每次都调用大模型”的混合架构，以降低成本和提高鲁棒性。
- **“AgentOS” vs “Agent Bus” 架构之争**：PicoClaw提出的“智能体协作总线”(PR#2937) 与 CoPaw主导的“统一Agent OS Driver”(PR#5067) 形成了新的路线选择——是将AI智能体功能深度集成进一个操作系统，还是通过一个轻量级的通信总线来连接不同的Agent服务？这将是影响未来AI基础设施设计的关键分歧。
- **“可审计性”与“透明度”成为刚需**：*NanoClaw (#2727)* 的容器日志持久化、*OpenClaw (#74002)* 的 `exec` 工具路径尊重环境变量、*LobsterAI (#2125)* 的数据备份恢复，这些信号共同指出，在AI决策过程仍然“黑盒”的当下，**可审计的日志和透明的状态** 是赢得用户（特别是企业用户）信任的基石。
- **WebUI/TUI的“编辑器化”**：ZeroClaw对TUI编辑体验的改进请求、LobsterAI对Markdown编辑器的优化，以及OpenClaw对LaTeX公式渲染的需求，显示用户不再满足于简单的聊天界面，而是希望个人AI助手能成为**真正的生产工具**，具备类似IDE的高效编辑和预览能力。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，以下是根据您提供的NanoBot项目数据生成的2026年6月11日项目动态日报。

---

# NanoBot 项目动态日报 | 2026-06-11

## 1. 今日速览

NanoBot 项目今日保持高活跃度，社区贡献持续涌入。过去24小时内，共有33个PR被提交或更新，其中19个已被合并或关闭，显示出项目维护者响应迅速、合并效率较高。Issues方面，活跃讨论与Bug报告并存，共处理了10条，专注于稳定性与功能增强。值得注意的是，多项针对核心功能（如上下文管理、子代理、回退机制）的PR被合并，标志着项目正朝着更健壮、多功能的方向迈进。

## 2. 版本发布

**无新版本发布。**

## 3. 项目进展（今日合并/关闭的重要PR）

今日项目取得了显著进展，16个PR已成功合并/关闭，主要集中在以下关键领域：

- **上下文隔离与持久化增强**：`#4274` (chengyongru) 成功合并，修复了 `history.jsonl` 跨会话注入导致上下文污染的关键Bug。该PR通过为每个会话添加唯一标识符（`session_key`），确保了历史记录的会话隔离性，大幅提升了多会话场景下的模型输出准确性和用户体验。这是对社区反馈（`#4259`）的快速响应和解决。
- **功能优化与配置灵活性**：
    - `#4273` (chengyongru) 新增 `exec` 工具的 `pathPrepend` 配置，允许用户优先使用自定义路径下的工具，解决了用户提出的Python虚拟环境优先问题（`#3934`）。
    - `#4278` (Re-bin) 实现了WebUI日志的**分段存储**，优化了大型会话的加载速度和历史完整性，提升了WebUI的可用性。
    - `#4275` (chengyongru) 新增配置文件的快速失败机制，当配置文件损坏或无法解析时，系统会立即报错，避免用户因配置错误而遭遇不可预期的运行时错误。
    - `#4277` (chengyongru) 优化了飞书渠道，采用**懒加载**方式加载重量级SDK，显著加快了飞书网关的启动速度。
- **稳定性修复**：
    - `#4272` (aiguozhi123456) 修复了流式响应超时导致的截断问题。现在当模型输出流卡住时，系统会进行**重试**和**回退**，而不是直接返回不完整的回复，大大提升了鲁棒性。
    - `#4255` (JiajunBernoulli) 将WebUI的版本检查改为**按需触发**，取代了后台轮询，减少了不必要的网络请求和资源消耗。
    - `#4247` (HengWeiBin) 修复了WebUI日志文件超过8MB限制后，**历史记录完全消失**的Bug，现在会自动压缩超出部分，确保聊天历史安全。

**小结**：今日的合并工作清晰地反映了项目在“**稳定性**”和“**上下文管理**”两大核心问题上的投入。社区驱动的Bug修复和功能增强占了主导地位，项目整体健康度良好。

## 4. 社区热点

今日社区讨论最活跃的议题集中在 **子代理** 和 **模型回退** 机制上：

- **[PR #4291] feat(spawn): allow subagents to use configurable model presets**：这是一个新的、仍在讨论中的PR，允许子代理使用与父代理不同的模型配置。这引发了关于如何灵活分配AI任务、平衡成本与性能的广泛讨论，反映了社区对更精细任务编排的需求。
- **[Issue #4287] Empty model responses not triggering fallback**：该Bug报告指出，当主模型（如DeepSeek）因高峰返回空响应时，NanoBot未能自动回退到备选模型。该问题获得了**快速响应**，同一天即有 `#4288` PR提出修复方案，展示了社区与维护者之间的高效互动。
- **[Issue #4290] cronjob ends early when there's a subagent spawned**：用户报告了子代理导致定时任务提前结束的严重问题。虽然评论不多，但该问题直接触及了自动化工作流的可靠性，可能成为下一个重要修复项。

## 5. Bug 与稳定性

以下为今日报告的Bug，按严重程度排列，并标注修复进展：

- **[严重] #4290: cronjob ends early when there's a subagent spawned**：定时任务在子代理完成后提前结束，导致后续工作流失败。**暂无fix PR**，需重点关注。
- **[高] #4286: Nanobot reporting unexpected missing "sustained goal" context**：AI在执行长篇任务时，抱怨“持续目标”上下文丢失，可能导致任务中断或偏离。**暂无fix PR**。
- **[高] #4287: Empty model responses not triggering fallback**：模型返回空内容时未触发故障回退，影响服务可用性。**已有fix PR #4288**。
- **[中] #4257: fix(utils): make split_message fenced-code-block-aware**：长消息在代码块中间被截断，导致渲染错误。**已有fix PR #4257**。

**稳定性评估**：今日修复了多个关键稳定性问题（流中断、上下文污染、日志丢失），但仍有新的严重Bug出现，尤其在子代理与自动化任务联动方面，表明该领域尚需打磨。

## 6. 功能请求与路线图信号

社区对以下新功能表现出浓厚兴趣，部分已有相关PR提出，预示着下一版本的潜在方向：

- **模型无关的“电脑使用”能力**：`PR #4276` (LarFii) 提议增加基于像素/无障碍的桌面和浏览器自动化工具。这是一个**重大功能**，将使NanoBot突破纯文本对话，具备操作图形界面的能力，可能是未来的亮点特性。
- **子代理模型预设**：`PR #4291` (aiguozhi123456) 的提议获得了关注，有望让用户为不同子任务指定更便宜或更专业的模型，实现成本与性能的最优解。
- **聚合子代理通知**：`Issue #4279` (player-ysd) 建议在主代理回复前，聚合所有子代理的结果而非逐个通知，以减轻LLM的幻觉风险。这是一个有价值的优化，可能会与PR #4291结合考虑。
- **WebUI文件管理**：`PR #4282` (Liyulingyue) 希望在设置中添加浏览和管理AI生成文件的功能，这是一个典型的用户便利性需求，有望提升WebUI的用户体验。

## 7. 用户反馈摘要

从今日的Issues与PR评论中，可以提炼出以下用户真实反馈：

- **痛点**：
    - “模型在高峰期返回空，整个流程就卡住了，非常影响使用。”（针对Issue #4287，模型回退机制的缺失）
    - “子代理一跑完，主任务就停了，后续步骤根本没法执行。”（针对Issue #4290，cronjob与子代理的兼容性问题）
    - “我需要登录到服务器去手动复制粘贴AI生成的文件，太不方便了。”（针对PR #4282，文件管理的需求）
- **使用场景**：
    - 用户`tjc0726`（#4290）在运行复杂的定时自动化工作流时，子代理用于执行子任务，但工作流流程不够健壮。
    - 用户`fablau`（#4286）使用NanoBot撰写长文章，遇到了上下文丢失问题，表明在长上下文中维持“目标”的重要性。
    - 用户分享升级到0.2.0后遇到“流卡住”问题（`#4013`），该问题已在今日的PR #4272中得到修复，体现了版本迭代中的问题解决过程。

## 8. 待处理积压

以下为需维护者关注的重要已关闭或长期未响应议题：

- **[已关闭/问题已解决但具代表性] #4237: bug: bwrap sandbox does not reset HOME environment variable**：沙箱环境变量未重置的问题（已于6月10日关闭），但涉及工具安全性，值得关注后续是否有更全面的安全审计。
- **[已关闭/建议跟进] #4261: OpenAICompatProvider: max_tokens/max_completion_tokens**：针对GPT-5.x等新模型，`max_tokens` 参数兼容性问题。虽然已关闭，但维护者需确认该修复是否已成为主线代码，避免未来与新模型集成时反复出现。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我为您呈上 2026 年 6 月 11 日的 Hermes Agent 项目动态日报。

---

# 2026-06-11 Hermes Agent 项目动态日报

## 1. 今日速览
今日 Hermes Agent 项目活跃度极高，社区贡献和问题反馈均非常密集。过去24小时收到50条新/活跃Issues和50条PR更新，但合并/关闭率较低（Issues: 12%, PRs: 10%），表明维护团队审核速度暂时落后于社区提报速度。核心bug修复和关键功能开发（如凭证池指数退避、安全加固）正在推进。项目整体处于高速迭代期，但稳定性抖动明显，主要挑战集中在**凭证管理可靠性**、**第三方平台集成兼容性**（特别是WhatsApp、MiniMax、Honcho）以及**桌面端/Web UI用户交互体验**上。

## 2. 版本发布
（无新版本发布）

## 3. 项目进展
今日合并/关闭了5个PR，关闭了6个Issue，主要进展如下：

- **上下文压缩修复 (#42813 - CLOSED)**: 修正了上下文压缩摘要中的节标题时态，从“进行中”改为“历史记录”，防止LLM产生幻觉，提升了会话摘要的准确性。
- **辅助任务修复 (#36245 - CLOSED)**: PR修复了辅助任务（如描述器、任务看板）未能正确传递自定义`extra_body`的问题，增强了对特定提供商API的兼容性。
- **Docker日志抑制 (#41824 - CLOSED)**: 合并了在TUI聊天界面中压制Docker环境冗长启动日志的修复，改善用户界面整洁性。
- **Bug修复**: 关闭了关于“看板技能编号重复” (#12372) 和“猜谜游戏互动” (#9059) 的Issue，相关工作已合并到主分支。

这些更新主要聚焦于**修复核心Agent交互逻辑**和**提升UI/UX（用户体验）**，显示项目在打磨核心体验上持续投入。

## 4. 社区热点
今日讨论最热烈的Issues主要围绕用户体验和系统兼容性问题：

1.  **用户痛点最高的Bug: 话题路由与文本渲染**
    - **Issue #40416 (4条评论)**：社区成员 **raymondclowe** 抱怨Telegram上上下文压缩导致消息“视觉上被删除”，体验极差。此Issue获得了较多的👎（反感）反应，代表了核心用户对即时通讯平台交互透明度的强烈诉求。
    - **Issue #43441 (已关闭, 3条评论)**： Telegram话题中Markdown渲染失效。用户 **GodsBoy** 报告，Agent回复中的`**粗体**`等标记未被渲染为格式化文本，直接暴露原始语法。社区对该问题的修复速度给予了肯定（当天关闭）。

2.  **需求最强烈的功能: 多后端支持**
    - **Issue #37876 (3条评论, 1 👍)**：社区成员 **arcabotai** 提出了一个高频需求：**桌面端同时连接本地和远程Hermes后端**。当前应用的本地/远程模式互斥，对于一个需要从多个“家”环境访问同一Agent的用户场景来说是个巨大限制。该Issue有PR #38846（多语言支持）的开发者参与讨论，显示其影响力。

## 5. Bug 与稳定性
今日Bug报告数量多且集中在关键组件，按严重程度排列：

- **P1 (高风险 - 安全/数据完整)**
    - **暂无新增**。但PR #42846 (凭证脱敏) 和 Issue #17861 (多轮对话历史丢失Thinking块) 是潜在的P1级问题源头，值得持续关注。

- **P2 (中高风险 - 功能失效/性能倒退)**
    - **WhatsApp桥接严重故障 ( #43830, 已提交PR )**: 向LID地址组的消息发送被静默丢弃。依赖包Baileys版本过旧，需要紧急升级。 (Fix PR: 暂无) -> **风险：核心功能失效**
    - **MiniMax推理标签泄露 ( #43827 )**: 中文推理标签 (`思考`、`反思`等) 泄露到用户可见输出，影响对话质量。 (Fix PR: 暂无) -> **风险：用户体验受损**
    - **凭证池错误标记限流 ( #43747, 已提交PR )**: OpenAI-Codex凭证池将一个健康的账号错误标记为`usage_limit_reached`，需要手动重置才能恢复。这是继#19566后又一凭证池问题，显示可靠性堪忧。 (Fix PR: #43856 指数退避)
    - **Kimi提供商API端点错误 ( #43617 )**: 使用`sk-kimi-*`密钥时，因使用了错误的端点导致所有API调用401失败，包括关键的视觉功能。 (Fix PR: 暂无) -> **风险：核心功能完全失效**
    - **桌面端忽略`--profile`参数 ( #43571 )**: 桌面App无法通过CLI指定Profile，总是以`default`启动，覆盖了CLI会话。 (Fix PR: 暂无) -> **风险：多Profile用户工作流断裂**
    - **aiohttp会话泄漏 ( #43657 )**: 在辅助任务完成后，aiohttp的ClientSession未被正确关闭，可能导致内存泄漏或连接耗尽。 (Fix PR: 暂无) -> **风险：长期运行稳定性**
    - **Nix构建失败 ( #43810 )**: NixOS模块在`extraPythonPackages`包含依赖时硬性构建失败，阻碍了Nix环境的部署。 (Fix PR: 暂无) -> **风险：Linux生态集成**
    - **Profile配置继承问题 ( #43713 )**: 子Profile的`providers`块会**替换**而非**继承**默认配置，导致配置意外丢失。 (Fix PR: 暂无) -> **风险：用户配置丢失**

- **P3 (低风险/功能增强)**
    - Honcho插件多个错误 (#43731, #43733, #43775)，主要是数据重复注入和与升级版服务不兼容。其中#43775有开发中的修复PR (#43803)。
    - TUI Shell Hook未注册 (#43823)，桌面端设置窗口清空提示 (#43825)，看板Hub安装失败 (#43829) 等。

## 6. 功能请求与路线图信号

- **高优先级信号：凭证管理优化**：Issues #15296 (指数退避) 和 #19566 (凭证据丢失) 揭示了凭证池的核心问题。社区积极贡献相关PR（#43856），极有可能是下一版本的重点改进方向。
- **强烈信号：国际化与多后端**：Issues #40347 (俄语本地化) 和 #37876 (多后端支持) 获得了社区贡献者的直接参与（PR #38846）。这表明国际化（特别是俄语和15语言支持）和桌面端多后端能力是用户公认的缺失拼图，下一版本有较高概率被纳入。
- **安全加固**：PR #42846 (凭证脱敏). 这是一个关键的、预防性的安全修复，反映了项目在数据管控上吸取了教训，成为高优先级PR。
- **功能增强**：PR #43862 (为技能建立索引 `trigger_keywords`) 显示项目正在改善Agent内置功能的发现与匹配机制，这通常是提升Agent自主性的基础工作。

## 7. 用户反馈摘要
- **强烈不满**：Telegram上的上下文压缩视觉删除消息 (#40416) 和凭证池频繁、不可预测的失败 (#19566, #43747) 是用户最强烈的**痛点**，直接破坏了基本的使用流程和信任。
- **适配困难**：对第三方服务集成（WhatsApp LID组、MiniMax K2.6模型、Honcho v3.x服务器、Purelymail的IMAP服务）的兼容性问题，暴露了项目在依赖管理和平台适配测试上的**不足**。
- **易用性期望**：用户期望桌面App能**无感地**在本地和远程后端间切换 (#37876)，并能通过CLI正确选择Profile (#43571)。对配置**继承**而非**替换**的期望 (#43713) 也反映出高层次用户的配置管理需求。
- **积极贡献**：尽管存在诸多挑战，社区贡献非常积极。许多用户不仅报告了bug，还主动提供了调试细节、修复思路甚至直接提交了PR（如 #43803, #43856）。这表明项目拥有一个**高技术水平且忠诚度高的核心贡献者社区**。

## 8. 待处理积压
- **长期未响应/待合并PR**:
    - **PR #38846 (15语言i18n支持)**: 发起已超过一周，状态仍是`OPEN`，有“分支过时需要同步”的注释。鉴于其影响范围大，维护者应尽快评审并提供合并指导，或决定关闭。
    - **PR #40377 (Termux/PRoot环境支持)**: 提出3个修复，但仍处于打开状态。对于希望在移动设备或受限Linux环境下使用Hermes的用户意义重大。
- **长期未解决的重要Issue**:
    - **Issue #10143 (Telegram话题路由)**: 发起近两个月，是高频需求，复杂性高，但近期无实质进展。维护者应明确其优先级或给出状态更新。
    - **Issue #15296 (凭证池指数退避)**: 尽管已有新PR覆盖，但原始Issue报告于4月，至今未被官方标记或解决。维护者可考虑引用PR进行关联。
- **提醒**：多个关于MiniMax、WhatsApp的P2 Bug (#43617, #43827, #43830) 正处于被高频投诉的状态。建议维护团队指定专人跟进，与相关Issue提交者、库维护者沟通，加速修复进程，避免社区不满情绪积累。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，我已根据您提供的PicoClaw项目数据，生成了以下项目动态日报。

---

# PicoClaw 项目动态日报 | 2026-06-11

## 1. 今日速览

过去24小时内，PicoClaw 项目呈现出非常活跃的开发状态。社区贡献者提交了大量高质量的 Pull Request，累计合并/关闭了6个关键修复。同时，一个高风险的安全漏洞（SSRF 绕过）和数个困扰用户已久的 Bug（如 Windows 路径问题）已得到解决。尽管新发布的 `nightly` 版本被标记为不稳定，但项目整体的代码质量和问题响应速度值得肯定。当日 Issue 讨论热点集中在消息去重和功能请求上，社区生态活跃。

## 2. 版本发布

-   **Nightly Build: v0.2.9-nightly.20260610.b9a8fad6**
    -   **发布说明**: 这是一个自动化的每日构建版本，可能包含尚未充分测试的代码。建议谨慎使用，主要用于开发测试而非生产环境。
    -   **更新日志**: [v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)
    -   **分析**: 此版本主要面向测试人员和开发者，用于验证 `main` 分支上的最新改动。

## 3. 项目进展

今日项目在主分支上有显著推进，共合并/关闭了 **6 个** Pull Request，标志着以下核心问题的解决和功能的集成：

-   **关键 Bug 修复：Windows 兼容性**：PR [#3089](https://github.com/sipeed/picoclaw/pull/3089) 已合并，修复了 `list_dir` 在 Windows 上因路径分隔符不匹配导致报错的问题（关联 Issue #2472）。这是一个长期存在的平台兼容性问题，此次修复对 Windows 用户至关重要。
-   **关键安全修复：SSRF 绕过防护**：PR [#3085](https://github.com/sipeed/picoclaw/pull/3085) 已合并，修复了 `web_fetch` 工具中一个严重的 SSRF 防护绕过漏洞（关联 Issue #3077）。该漏洞可被利用来访问内部网络资源，此次合并提升了项目的安全基线。
-   **API 兼容性修复**：PR [#2951](https://github.com/sipeed/picoclaw/pull/2951) 和 [#2948](https://github.com/sipeed/picoclaw/pull/2948) 已合并，分别修复了与 OpenAI API 及 Claude Opus 4 模型在特定参数上的兼容性问题，提升了底层模型调用的健壮性。
-   **代码健壮性增强**：PR [#3043](https://github.com/sipeed/picoclaw/pull/3043) 和 [#2945](https://github.com/sipeed/picoclaw/pull/2945) 的合并，修复了多处潜在的未捕获错误，并添加了独立的调试追踪视图工具，为开发者提供了更强的调试能力。

这些合并表明项目维护者正在积极处理社区贡献，并优先解决影响用户稳定性和安全性的问题。

## 4. 社区热点

-   **Issue #3094: 异步子代理重复消息** ([链接](https://github.com/sipeed/sipeed/picoclaw/issues/3094))
    -   **热度**: 新开 Issues 中讨论度最高（0条评论，但问题描述清晰）。
    -   **分析**: 该问题描述了使用 `spawn` 工具时，主代理和子代理的输出同时推送给用户，导致信息重复和体验混乱。这说明`spwan`特性在用户实际使用中已暴露交互设计缺陷。此问题关乎核心工作流体验，预期将引发讨论。

-   **Issue #2472: Windows 路径分隔符 Bug** ([链接](https://github.com/sipeed/sipeed/picoclaw/issues/2472))
    -   **热度**: 高（2个月持续活跃，5条评论，1个👍）。
    -   **分析**: 作为历史最悠久的开放 Bug 之一，其在修复 PR 合并后自然吸引了社区关注。背后的诉求是社区对跨平台稳定性的看重，尤其是对 Windows 用户群体的影响。

## 5. Bug 与稳定性

-   **[高危：已修复] SSRF 绕过漏洞**：`web_fetch` 工具未能阻止攻击者使用 `198.18.0.0/15` 这一特殊用途IPv4地址段绕过访问限制。此漏洞已通过 PR [#3085](https://github.com/sipeed/sipeed/picoclaw/pull/3085) 修复。
-   **[中危：已修复] Windows 兼容性问题**：`list_dir` 工具因路径分隔符问题在Windows上不可用，严重影响文件系统交互。此问题已通过 PR [#3089](https://github.com/sipeed/sipeed/picoclaw/pull/3089) 修复。
-   **[低危：待合并] 类型断言检查缺失**：多个 PR（如 #3091, #3092, #3053, #3045）正在等待合并，它们修复了代码中多处对类型断言结果不检查的惯用法，这些错误在特定情况下可能导致功能静默失效或程序 panic。
-   **[低危：待修复] iOS 兼容性**：Issue [#3090](https://github.com/sipeed/sipeed/picoclaw/issues/3090) 报告了管理面板在 iOS 16.4 以下版本的 Safari 上无法工作。该问题影响部分移动端用户。

## 6. 功能请求与路线图信号

-   **高潜力：智能体协作**：PR [#2937](https://github.com/sipeed/sipeed/picoclaw/pull/2937) 提议为 PicoClaw 引入一个内建的“智能体协作总线”，实现 Agent 间的持久化通信。这是一个重大的架构级功能，如果合并，将显著提升 PicoClaw 在多 Agent 场景下的能力。
-   **特定功能请求**：
    -   **新网关支持**：Issue [#3093](https://github.com/sipeed/sipeed/picoclaw/issues/3093) 由用户 `Damian-o2` 提出，希望增加对 SimpleX、Tox 等去中心化通讯协议的支持。这反映了部分用户对隐私和去中心化的需求。
    -   **管理面板访问控制**：PR [#3083](https://github.com/sipeed/sipeed/picoclaw/pull/3083) 尝试强化启动器 (Launcher) 的网络访问控制，增加了可配置的本地回环绕过行为和可信代理 CIDR。这是一个面向运维场景的实用功能。
    -   **对话范围设置持久化**：PR [#3067](https://github.com/sipeed/sipeed/picoclaw/pull/3067) 修复了“运行时会话隔离范围”设置无法保存的问题。这虽是一个 Bug 修复，但侧面反映出用户对运行时代理隔离功能的高度关注，该功能可能是多租户或复杂工作流场景的核心。

## 7. 用户反馈摘要

-   **痛点：消息重复**：Issue #3094 明确描述了异步子代理功能带来的消息重复问题。用户表示，这导致“几乎无排版、内容粗糙”的直接推送与主代理的“排版、整理后排版的最终输出”同时出现，严重影响了阅读体验和语义理解。
-   **使用场景**：Issue #2472 的作者 `ut2or1` 在尝试使用文件列表功能时遇到了 Windows 兼容性问题，这揭示了 PicoClaw 被用于跨平台开发和文件管理场景。
-   **满意度**：尽管存在 Bug，但 Issue 和 PR 的提出者和贡献者（如 `cs8425`、`YLChen-007`、`chengzhichao-xydt`）积极提交高质量修复，反映出核心用户对项目有高参与度和技术能力，对问题的解决抱有期待。

## 8. 待处理积压

-   **PR #2937: Feat/agent collaboration** ([链接](https://github.com/sipeed/sipeed/picoclaw/pull/2937))
    -   **状态**: OPEN, 已标记 `stale`
    -   **分析**: 该 PR 提交于5月24日，至今已超过两周未获任何评论或合并意向，被自动标记为 `stale`。作为一项可能改变项目格局的核心功能，它被认为是“成熟”的，但维护者尚未投入审查，可能面临决策瓶颈或优先级问题。建议维护者尽快给出反馈，以避免贡献者因热情消退而放弃。

-   **PR #3087: fix(tools): allow workspace relative exec paths** ([链接](https://github.com/sipeed/sipeed/picoclaw/pull/3087))
    -   **状态**: OPEN
    -   **分析**: 该 PR 自6月9日提交后至今（2天）没有被处理。它修复了一个在启用工作区限制时，执行相对路径脚本（如 `skills/xxx/script.py`）被错误拦截的假阳性问题。这是一个直接影响工作流可用性的 Bug，建议优先评估合并。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-06-11)

## 1. 今日速览

过去24小时内，NanoClaw 项目保持较高活跃度，共收到10个 PR 更新（其中6个已合并/关闭），同时新增1个长期开放的 Issue。合并的 PR 集中在基础设施稳定性（容器日志持久化）、文档体系建设以及安全修复（飞书僵尸卡片清理）上。项目社区在技能扩展（Guardrails 守卫、Web Search Plus）和多运行时抽象等方向有持续贡献，整体项目健康度良好，维护者响应及时。

## 2. 版本发布

**无**（过去24小时内无新版本发布）

## 3. 项目进展

今日合并/关闭的 PR 推进了以下关键方向：

- **容器日志可观测性** (#2727, [OPEN])：`manojp99` 提交的 PR 实现了 agent 容器 stdout/stderr 持久化到磁盘的功能。该功能将为调试和审计提供关键数据支撑，目前仍处于开放评审状态。
- **文档体系里程碑** (#2721, [CLOSED])：`gavrielc` 提交的 `customizing.md`、`skills model` 和 `skill guidelines` 三份文档已合并，正式确立了“所有变更都是一个 skill”的定制化契约，解决了用户升级时手工合并冲突的痛点。
- **生产级 Bug 修复** (#2718, [CLOSED])：`brookgao` 修复了飞书（Feishu）集成中当 `agent-runner` 进程被超时杀死后，交互卡片仍显示“运行中”的僵尸卡片问题，提升了企业级集成稳定性。
- **安全 IPC 加固** (#3, [CLOSED])：`gavrielc` 的古老 PR（来自2月）终于合并，实现了每个容器独立 IPC 目录和基于来源目录的身份验证，防止跨组权限提升。
- **卸载脚本功能** (#2719, [CLOSED])：`amit-shafnir` 新增了带确认、dry-run 模式和 OneCLI agent 清理功能的卸载脚本。

## 4. 社区热点

- **#1690 [OPEN] Multi-runtime agent SDK abstraction**  
  [链接](nanocoai/nanoclaw Issue #1690)  
  **热度**: 6条评论，3个 👍，长期开放（创建于4月7日，最后更新于6月10日）  
  **诉求分析**: 用户 `chiptoe-svg` 建议将多个 Agent SDK（Claude + Codex + 本地模型）以模块化 skill 的形式安装，类似于现有的 `/add-telegram` 通道模式。这反映了社区对“运行时中立”的强烈需求——开发者在不同 LLM 后端之间的切换成本过高，希望通过大一统抽象层降低工程复杂度。该 Issue 成为今日讨论焦点，评论量虽不多但持续跨月更新，表明维护者可能正在评估其可行性，但尚未决定路线图优先级。

- **#2726 [OPEN] feat: add /add-guardrails skill**  
  [链接](nanocoai/nanoclaw PR #2726)  
  **热度**: 新提交，0评论，但 PR 内容极长且专业  
  **诉求分析**: `amit-shafnir` 提交的守卫技能，实现了基于正则表达式和关键词规则的输入/输出守卫，可阻止 prompt 注入、凭证泄漏等，并提供 block/flag 两种动作模式。此 PR 表明社区对于 Agent 安全性的重视程度显著提升，尤其是在企业部署场景下，对输入输出过滤的需求正在从“可选”变为“必备”。

- **#2211 [OPEN] feat: add tool-visibility skill for live tool-call previews**  
  [链接](nanocoai/nanoclaw PR #2211)  
  **热度**: 0评论，但已开放超过一个月（5月3日创建）  
  **背景**: 该 PR 实现了实时代理工具调用预览（PreToolUse/PostToolUse 钩子），对调试体验有极大提升。虽无新评论，但其持续开放说明维护者可能在等待更多测试反馈或二次评审。

## 5. Bug 与稳定性

| 严重程度 | Bug 描述 | 状态 | 参考链接 |
|----------|----------|------|----------|
| **严重** | 飞书集成：进程超时杀死后交互卡片无法自动消失，显示“运行中”状态卡住50+分钟 | 已修复（#2718 已合并） | [PR #2718](nanocoai/nanoclaw PR #2718) |
| **中等** | 容器 stdout/stderr 日志全部丢弃，无法追踪运行中的故障 | 待合并（#2727 开放中） | [PR #2727](nanocoai/nanoclaw PR #2727) |
| **轻微** | 共享 IPC 目录导致跨组容器可能通过自报身份进行权限提升 | 已修复（#3 已合并） | [PR #3](nanocoai/nanoclaw PR #3) |

今日无新增崩溃或回归问题报告。

## 6. 功能请求与路线图信号

- **多运行时抽象 (#1690)**：社区强烈希望支持 Claude + Codex + 本地模型的“即插即用”能力，若采纳可能成为 v0.5 里程碑的核心特性。目前仍在讨论阶段，但已有外部实现原型。
- **Agent 守卫/防火墙 (#2726)**：`/add-guardrails` 技能已提交 PR，若通过评审，将随下一个 skill 包发布。该功能对企业用户至关重要，预计会优先于多运行时抽象进入路线图。
- **Web 搜索增强 (#2725)**：`robbyczgw-cla` 提交了多提供商 Web 搜索 + URL 提取 skill（无 MCP），轻量级实现，适合社区快速集成。由于无框架依赖，有很高的即用性。

## 7. 用户反馈摘要

- **正面反馈**（来自 #1690 评论）：用户赞赏现有的 skill 模型（如 `/add-telegram`）的设计，认为“通道模式可被完美复用”是好评点，表明抽象层设计成功降低了二次开发门槛。
- **痛点和建议**：
  - 容器日志缺失导致调试困难（#2727 作者 `manojp99` 在 PR 描述中吐槽“stdout/stderr are currently discarded”）
  - 升级时自定义修改与官方代码的合并冲突是一个真实痛点，#2721 文档 PR 正是为了解决此问题而提交的（评论中用户表示“merge fights on update is the real problem”）
- **使用场景**：从 PR 作者背景看，项目在企业集成（飞书）和安全（IPC 加固）方面的应用正在扩大，用户基础从个人开发者扩展到企业级场景。

## 8. 待处理积压

| 项目 | 创建时间 | 最后更新 | 状态 | 建议动作 |
|------|----------|----------|------|----------|
| **#2211** tool-visibility skill (实时代理调用预览) | 2026-05-03 | 2026-06-10 | OPEN，0条评论 | 维护者需主动拉取作者确认是否仍需评审或已过期，5周未回应可能挫伤贡献者积极性 |
| **#1690** 多运行时抽象 (Multi-runtime SDK) | 2026-04-07 | 2026-06-10 | OPEN，6条评论 | 虽非 bug 但社区关注度高，建议维护者在下一期路线图开发者会议中讨论，给出明确的 accept / defer 态度 |

---

**项目健康度评分**: 8/10  
**亮点**: 合并文档体系 PR 明确了定制化契约，安全加固和飞书 bug 修复体现运维意识。  
**风险**: 功能型 PR（#2211, #1690）评审周期偏长，维护者响应时间需缩短以避免社区贡献者流失。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

好的，这是基于您提供的 GitHub 数据生成的 NullClaw 项目动态日报。

---

# NullClaw 项目动态日报 | 2026-06-11

## 1. 今日速览

今日项目整体活跃度**中等**，主要动力来自 Pull Request (PR) 提交与合并，但 Issue 区无新动态。核心开发团队持续聚焦于**系统稳定性和配置灵活性**，修复了代理输出处理、用户端端口分配测试泄漏等问题，并引入了 cron 任务归属等关键新特性。有两个较早提出的 PR 于今日被合并，标志着红action模块和代理工具过滤功能的正式落地。不过，社区用户参与度较低，暂无新 Issue 或新版本发布。

## 2. 版本发布
- **无**。自上次发布以来，无新版本发布。

## 3. 项目进展

今日有 **2 个 Pull Request 被合并/关闭**，标志着重要功能的完善。

- **📌 [CLOSED] fix(redaction): reject ISO date/time patterns as false-positive phone matches** (PR #945)
  - **作者**: vernonstinebaker
  - **摘要**: 修复了敏感信息编辑引擎的一个误报问题。当日期时间字符串（例如 “2026-06-02 20:17”）被误识别为电话号码时，该 PR 通过添加 `isDateLike()` 逻辑来排除此类情况，有效提升了数据脱敏的准确性。
  - **影响**: 增强了数据安全模块的健壮性，避免了在AI对话中错误地屏蔽日期信息。
  - **链接**: [PR #945](https://github.com/nullclaw/nullclaw/pull/945)

- **📌 [CLOSED] fix(agent): filter tools in system prompt text by tool_filter_groups** (PR #946)
  - **作者**: vernonstinebaker
  - **摘要**: 改进了代理系统提示词（system prompt）的生成策略。现在，动态组的 MCP 工具将不再被包含在纯文本的系统提示词中，而是仅在匹配到特定关键词时才通过原生 API 工具调用发送。这优化了令牌消耗并提升了模型响应效率。
  - **影响**: 提升了 AI Agent 处理复杂工具列表时的效率和上下文清晰度。
  - **链接**: [PR #946](https://github.com/nullclaw/nullclaw/pull/946)

## 4. 社区热点

今日所有 PR 均无评论，社区讨论热度极低。**四个待合并的 PR** 是目前社区与开发互动的核心载体，反映了用户对于以下问题的强烈诉求：

- **代理稳定性与可信度** (PR #951): 请求让 AI Agent 在出错时不输出内部初始化日志，避免用户侧收到无关、干扰性的技术噪音。
- **配置易用性** (PR #949): 希望通过 `config.json` 直接配置任务的默认队列模式，提升运维效率和用户体验。
- **功能完整性** (PR #948): 修复定时任务 (cron) 的归属问题，确保后台任务能被正确追溯来源，是日志审计和功能闭环的重要一步。
- **测试链稳定性** (PR #950): 修复测试环境下的资源泄漏问题，直接影响开发者体验和持续集成 (CI) 的可靠性。

**分析**: 社区虽未直接发言，但通过上述 PR 的提交，清晰地表达了**从“能用”到“好用”** 的升级需求，包括稳定性、可维护性和功能完善度。

## 5. Bug 与稳定性

今日暂无新 Bug 报告。今日合并的 PR #945 解决了“日期格式误识别为电话”的误报问题，属于数据脱敏模块的稳定性优化。待合并的 PR #950 则是一个重要的测试环境 Bug 修复。

| Bug 标题 | 严重程度 | 状态 | 链接 |
| :--- | :--- | :--- | :--- |
| 系统提示词中包含日期导致电话模式匹配误报 | 中等 | **已修复** (PR #945) | [PR #945](https://github.com/nullclaw/nullclaw/pull/945) |
| Gateway 端口冲突时测试资源泄漏 | 中等 | **待合并** (PR #950) | [PR #950](https://github.com/nullclaw/nullclaw/pull/950) |
| 代理故障时向频道错误输出初始化日志 | 中等 | **待合并** (PR #951) | [PR #951](https://github.com/nullclaw/nullclaw/pull/951) |

## 6. 功能请求与路线图信号

今日无新功能请求。但从待合并的 PR 中，我们可以看出项目当前的演进方向：

- **配置管理与可观测性增强**
  - **PR #949** 提出将 `queue_mode` 变为可通过 `config.json` 配置化的持续状态，而非仅限代码。这是一个明显的信号，表明项目正在向更复杂的生产环境配置管理迈进。
  - **PR #948** 和 **PR #951** 则专注于任务执行的可观测性（归属追踪）和故障诊断（避免输出干扰日志），这些都是构建健壮 AI Agent 平台的基础。

**路线图信号**: 项目重心正从核心功能开发转向**生产级可用性**，包括配置灵活性、任务可追溯性和错误处理的优雅性。

## 7. 用户反馈摘要

由于今日无 Issues 或 PR 评论，暂无直接用户反馈。但从 PR 提交者的身份（多位来自 `vernonstinebaker`，疑似核心贡献者）和代码变更来看，修复主要源于开发团队内部的代码审查与测试发现，而非用户社区的直接抱怨。

## 8. 待处理积压

今日有 **4 个 PR** 处于待合并状态，均创建于昨日（2026-06-10），需维护者重点关注和审查：

1.  **fix(agent_runner): suppress stderr initialization logs on agent failure**
    - **状态**: OPEN，0 评论
    - **链接**: [PR #951](https://github.com/nullclaw/nullclaw/pull/951)
    - **提醒**: 影响用户侧体验，建议优先处理。

2.  **fix(gateway): move port probe before allocations to prevent test leak**
    - **状态**: OPEN，0 评论
    - **链接**: [PR #950](https://github.com/nullclaw/nullclaw/pull/950)
    - **提醒**: 测试基础设施问题，可能影响开发效率。

3.  **fix: make queue_mode configurable from config.json, default to latest**
    - **状态**: OPEN，0 评论
    - **链接**: [PR #949](https://github.com/nullclaw/nullclaw/pull/949)
    - **提醒**: 重要的配置能力增强，对用户友好。

4.  **fix cron agent delivery attribution**
    - **状态**: OPEN，0 评论
    - **链接**: [PR #948](https://github.com/nullclaw/nullclaw/pull/948)
    - **提醒**: 功能性修复，完善 cron 调度能力。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，以下是根据您提供的IronClaw项目数据生成的2026年06月11日项目动态日报。

---

# IronClaw 项目动态日报 | 2026年6月11日

**项目名称:** IronClaw
**数据时间范围:** 2026-06-10 ~ 2026-06-11 (基于数据更新时间)

---

### 1. 今日速览

铁爪（IronClaw）项目今日迎来一轮密集的开发冲刺，活跃度处于 **极高** 水平。项目核心聚焦于 **Reborn WebUI v2** 的迭代与质量提升，特别是在用户界面体验、认证流程、以及模型提供商配置方面修复了大量关键Bug。同时，项目在自动化触达（Slack）、工具链（附件支持）、以及代理可观测性等方向上也迈出了坚实步伐。社区反馈主要集中在 Reborn 新版本的易用性问题上，并得到了开发团队的快速响应，24小时内合并/关闭了16个 Issue 和22个 PR，显示出高效的维护能力。

### 2. 版本发布

无新版本发布。

### 3. 项目进展

今日合并或关闭的 PR 揭示了项目在多个关键领域的显著进展：

- **Reborn WebUI v2 体验优化**
    - **[PR #4731]**: 修复了运营商 LLM 提供商配置的端到端流程，包括保存、模型发现、设置UI等，直接解决了 Issue #4673，并涉及 #4705 和 #4697。这是提升新用户首次配置体验的核心修复。
    - **[PR #4717]**: 恢复了 WebUI v2 中“始终允许（Always Allow）”审批功能，该功能在之前的重构中被移除。此变更优化了用户对频繁工具调用的审批流程。

- **自动化与触达能力**
    - **[PR #4730]**: 完成了个人范围的事件触发自动化交付骨架，实现了通过 Slack DM 向用户发送最终回复、审批提示和认证通知的端到端流程，大幅提升了IronClaw作为个人助手的实用性。
    - **[PR #4739]**: 在 Reborn 的 Railway QA 部署中启用了 Slack 集成，为QA环境的自动化测试和更广泛的社区测试铺平了道路。

- **开发者体验与代码质量**
    - **[PR #4743]**: 修复了 NEAR 上下文的溢出分类问题，将“prompt is too long”错误正确归类，并解析了Token用量，有利于模型调试。
    - **[PR #4742]**: 修复了手动Token运行时凭证的选择问题，允许手动Token凭证满足运行时请求，对自托管用户至关重要。

**项目向前迈进**：这些更新表明，IronClaw 正在从核心功能的可行性验证阶段，转向对 **Reborn** 新架构进行全面打磨，重点关注用户体验的流畅性、自动化的实用性以及系统的健壮性。

### 4. 社区热点

- **热议焦点: [Issue #3259] Publish 0.25.0–0.27.0 to crates.io**
    - **热度:** @ 14条评论
    - **链接:** [nearai/ironclaw Issue #3259](https://github.com/nearai/ironclaw/issues/3259)
    - **分析:** 这是当前社区最关心的问题。尽管GitHub上有大量更新版本，但crates.io上发布的版本仍停留在`0.24.0`。下游用户（如使用wasmtime的用户）因CVE无法通过crates.io获取最新修复和功能。这反映了 **发布流程滞后于开发进度** 的问题，可能会阻碍项目在Rust生态系统中的普及。该Issue长期未关闭，是社区对项目交付周期的主要痛点。

- **新功能讨论: [Issue #3036] [EPIC] Configuration-as-Code for IronClaw Reborn**
    - **热度:** @ 6条评论
    - **链接:** [nearai/ironclaw Issue #3036](https://github.com/nearai/ironclaw/issues/3036)
    - **分析:** 这是一个长期存在的史诗级需求（EPIC）。用户希望通过声明式配置（蓝本）来管理IronClaw，而不是手动编辑`.env`、JSON等文件。虽然今日没有直接针对此Issue的PR合并，但其作为高级配置管理的愿景持续吸引着社区Ops用户的关注，是项目走向成熟不可或缺的一环。

### 5. Bug 与稳定性

今日报告的Bug主要集中在 **Reborn WebUI v2** 的用户体验和配置环节，问题集中且严重程度较高。

| 严重程度 | Issue | 描述 | 已有Fix PR? |
| :--- | :--- | :--- | :--- |
| **高** | [#4703](https://github.com/nearai/ironclaw/issues/4703) | **配置后无法使用NEAR AI提供商**：测试连接成功，保存后依然要求重新配置。 | 相关 (PR #4731) 已修复 |
| **高** | [#4729](https://github.com/nearai/ironclaw/issues/4729) | **本地/桌面版登录彻底失效**：`private.near.ai` 拒绝非`private.near.ai`的回调地址。 | 无 |
| **中** | [#4642](https://github.com/nearai/ironclaw/issues/4642) | **严格模式提供商的空值被能力端口拒绝**：影响大多数第一方工具。 | 无 |
| **中** | [#4741](https://github.com/nearai/ironclaw/issues/4741) | **本地密钥文件损坏时错误信息不明确**：“Invalid master key”让用户不知所措。 | 无 |
| **低** | [#4733](https://github.com/nearai/ironclaw/issues/4733) | **点击对话中的链接会导航离开当前会话**，打破聊天工作流。 | 无 |
| **低** | [#4740](https://github.com/nearai/ironclaw/issues/4740) | **Slack工具的参数schema不完整**，导致模型猜测参数类型错误。 | 无 |

**Bug修复亮点**：PR #4743 和 #4742 分别解决了“上下文溢出分类”和“手动凭证选择”等底层bug，增强了系统稳定性。

### 6. 功能请求与路线图信号

- **高确定性功能**
    - **Attachment (附件) 支持**: Issue [#4692](https://github.com/nearai/ironclaw/issues/4692) 下的子任务，并且已有 PR [#4670](https://github.com/nearai/ironclaw/pull/4670) (后端) 和 [#4738](https://github.com/nearai/ironclaw/pull/4738) (前端) 正在推进，**几乎是板上钉钉的下一版特性**。
    - **自动化触发传递至Slack DM**: PR [#4730](https://github.com/nearai/ironclaw/pull/4730) 已合并，这项功能已被明确纳入项目。

- **可能纳入下一版本的需求**
    - **自动启用NEAR AI MCP**: Issue [#4700](https://github.com/nearai/ironclaw/issues/4700) 提出当配置了NEAR AI凭证后，应自动启用MCP，减少手动步骤。鉴于大量用户将NEAR AI作为首选提供商，此需求合理且易实现。
    - **MCP服务器程序化配置**: PR [#4735](https://github.com/nearai/ironclaw/pull/4735) 提出了通过API一次性配置MCP服务器的新功能，表明项目正在向更加开放和可扩展的插件系统演进。
    - **全栈E2E测试**: Issue [#4632](https://github.com/nearai/ironclaw/issues/4632) 是一个关于构建浏览器驱动的全栈E2E测试的Epic，确立了项目对软件质量的更高追求。

### 7. 用户反馈摘要

从今日的Issues和评论中可以提炼出以下几类用户核心反馈：

- **对Reborn新UI的困惑与挫败**：多位用户（`think-in-universe`, `sunglow666`）反馈了新WebUI的各种问题。
    - “配置NEAR AI成功后，测试连接成功，但一保存就没了。”（来自 Issue #4703, #4673）
    - “启动时模型配置错误，给出的错误信息是`execution driver was temporarily unavailable`，根本没用。”（来自 Issue #4683）
    - “登录完全被卡住了，`frontend_callback`总是不对。”（来自 Issue #4729）
- **对提升易用性的强烈需求**：用户希望IronClaw更加智能和易用。
    - “能否在我配置好NEAR AI密钥后，自动启用MCP？”（来自 Issue #4700）
    - “生成的代码块没有高亮，字体也太小了，阅读体验很差。”（来自 Issue #4708, #4707）
- **核心工具的可靠性问题**：社区资深成员 `think-in-universe` 和 `pranavraja99` 指出了如 `builtin.http` 工具的审批循环和 `Slack` 工具的schema问题，这些都是日常使用中的“拦路虎”。

### 8. 待处理积压

- **最需要关注的积压 Issue**:
    - **[#3259] Publish 0.25.0–0.27.0 to crates.io**: 已持续一个多月，直接阻塞下游Rust用户。**强烈建议维护者将更新发布到crates.io作为最高优先级任务**。
    - **[#3036] [EPIC] Configuration-as-Code**: 长期未决的架构级功能需求，虽然今日不紧急，但缺乏进展可能影响社区对项目长期规划的信任。

- **长期未合并的重要 PR**:
    - **[#3708] chore: release**: 此PR已开放近一个月，旨在发布包含重要变更的新版本（如`ironclaw`版本从 `0.24.0` 到 `0.29.1`）。其状态直接关联到 Issue #3259 的解决。如果此PR能合并并发布，将极大缓解社区的压力。
    - **[#4559] feat(traces): agent-driven Trace Commons onboarding**: 一个重大新功能（追踪集成），已开放三天，需要维护者优先审阅，以免错过版本窗口。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

好的，作为 LobsterAI 开源项目的分析师，根据您提供的 2026-06-11 数据，我为您生成以下项目动态日报。

---

## LobsterAI 项目动态日报 — 2026-06-11

### 1. 今日速览

今日项目活跃度较高，主要得益于一次重要的版本发布和大量积压 PR 的集中合并。尽管过去 24 小时内无新的 Issues 提出，但核心开发者通过合并 20 个 PR（包含 1 个里程碑式的版本发布 PR），成功推动了多项特性开发、Bug 修复和代码清理工作。项目正从前期的功能开发冲刺期，进入一个合并与稳定化的关键阶段。目前仍有 2 个待合并的 PR 需要关注。

### 2. 版本发布

**新版本: LobsterAI 2026.6.10**

- **发布时间:** 2026-06-10
- **核心内容:**
  - **数据迁移:** 新增用户数据备份与恢复功能 (`#2125`)。
  - **认证机制:** 引入了本地回调登录流程 (`#2122`)。
  - **任务通知:** 实现了任务完成通知功能 (PR #2134)。
- **破坏性变更与迁移注意事项:**
  -  本次发布未明确标注有破坏性变更。建议用户在升级前，利用新增的`数据备份`功能对当前数据进行一次完整备份，以确保迁移过程万无一失。
- **链接:** [LobsterAI 2026.6.10 Release](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.6.10)

### 3. 项目进展

今日项目推进显著，核心团队解决了大量待处理的 PR，重点关注了以下方面：

- **核心特性合并:** 版本发布 PR (`#2140`) 将 `数据备份与迁移`、`本地回调登录`、`任务通知` 三大新特性正式合并入主线。
- **Bug 修复与体验优化:**
  - **Windows 平台:** 修复了 NSIS 安装程序破坏性问题，并重新设计了引擎加载页面 (`#2142`); 修复了 Windows 环境下的应用内更新问题 (`#2141`)。
  - **UI/UX:** 优化了 Markdown、代码块和模型选择器的样式 (`#2139`)。
  - **数据恢复:** 修复了恢复数据时可能错误覆盖目标备份、Cowork 会话及 MCP 依赖包的问题 (`#2138`)。
- **积压清理 (Stale PR):** 合并并关闭了多个由 `dependabot` 或早期贡献者提交的、标记为“stale”的 PR，包括 CI 依赖更新 (`#1491`, `#1492`, `#1493`)、定时任务功能优化 (`#1486`, `#1489`, `#1490`, `#1497`)、技能管理 (`#1485`, `#1501`, `#1505`)、以及会话裁剪等 (`#1499`, `#1503`, `#1507`)。

总的来说，项目今日在功能完整性和稳定性上迈出了坚实的一步，特别是通过版本发布和大量积压 PR 的清理，显著降低了项目中的“技术债务”。

### 4. 社区热点

今日社区讨论与评论热度不高（数据中评论数为 `undefined`，可能为数据采集问题），但以下 PR 比较值得关注：

- **#2142 - 修复 NSIS 破坏性初始化并重新设计引擎加载页面**: 这是一个尚未合并 (OPEN) 的 PR，与 Windows 平台的核心安装和启动体验直接相关。虽然评论数未显示，但其“修复+重设计”的性质表明这是社区或开发者高度重视的一个改动。
  - **链接:** [#2142](https://github.com/netease-youdao/LobsterAI/pull/2142)
- **#1277 - 依赖版本更新 (dependabot)**: 这个长期未合并的依赖更新 PR (`electron` 从 40.2.1 更新至 42.3.3) 在今日有更新，这是一个积极的信号。依赖更新是保障项目安全性和性能的重要环节，社区对此类 PR 的关注度通常较高。
  - **链接:** [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277)

### 5. Bug 与稳定性

今日未报告新的 Bug，但通过合并的 PR 解决了一系列此前存在的稳定性问题：

- **严重等级：中**
  - **问题描述:** Windows 平台应用内更新失败。
  - **当前状态:** **已修复** (PR #2141)。
- **严重等级：中**
  - **问题描述:** 数据恢复功能可能覆盖掉用户的目标备份及关键运行时数据（如 Cowork 会话、MCP 包）。
  - **当前状态:** **已修复** (PR #2138)。
- **严重等级：低**
  - **问题描述:** 禁用技能后仍可在对话中被调用。
  - **当前状态:** **已修复** (PR #1485, #1501)。
- **严重等级：低**
  - **问题描述:** 定时任务通知渠道编辑后未正确更新。
  - **当前状态:** **已修复** (PR #1490)。

### 6. 功能请求与路线图信号

今日没有新的功能请求 Issue，但通过已合并的 PR，可以清晰地看到以下几个方向的路线图信号，很可能被纳入下一个常规迭代版本：

- **定时任务增强:**
  - **信号:** 新增“测试任务”按钮 (`#1486`)、本地 macOS 通知渠道 (`#1489`)、以及“关闭主面板”行为配置 (`#1497`)。这表明产品在持续强化定时任务和桌面集成体验。
- **Agent 配置体验优化:**
  - **信号:** 为 Agent 引导文件编辑器引入富文本 Markdown 编辑器 (`#1503`)。这在改善高级用户配置 Agent 时的易用性。
- **会话管理:**
  - **信号:** 新增 Cowork 会话裁剪功能 (`#1499`)，用于防止长对话超出模型上下文窗口。这是一个提升 AI 对话稳定性的重要特性。

### 7. 用户反馈摘要

由于今日无新的 Issues，我们总结了近期合并 PR 中体现的用户反馈：

- **痛点反馈：**
  - 用户需要在创建定时任务后能立即验证效果，不想走“保存-返回-运行”的繁琐流程。（来自 PR #1486 的描述）
  - 用户在禁用技能后，仍然能在对话中看到该技能生效，这造成了困惑和不符合预期的体验。（来自 PR #1485, #1501 的描述）
- **使用场景：**
  - **数据安全:** 用户对于能够备份和恢复完整的用户数据（包括设置、对话历史）有明确需求，以防止数据丢失。（来自 PR #2125）
  - **跨平台体验:** Windows 用户对安装和更新流程的稳定性和流畅度非常敏感。（来自 PR #2141, #2142）

### 8. 待处理积压

以下为项目中最值得关注的积压工作项：

- **#2142 [OPEN] - 修复 NSIS 破坏性初始化并重新设计引擎加载页面**: 这是一个针对 Windows 平台优化的重要 PR，目前已待合并，建议维护者尽早跟进和合并。
  - **链接:** [#2142](https://github.com/netease-youdao/LobsterAI/pull/2142)
- **#1277 [OPEN] - 依赖版本更新 (dependabot)**: 该 PR 从 4 月 2 日提出至今已积压超过两个月。更新 `electron` 等核心依赖对于修复安全漏洞和获取性能提升至关重要。开发团队应优先处理这类依赖更新，以避免版本落后带来的风险。
  - **链接:** [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277)

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 | 2026-06-11

## 1. 今日速览
- 项目在过去24小时内处于**低活跃度**状态：仅新增1条Issue，无PR提交或合并，无新版本发布。
- 新增的Issue #1114报告了`coqui`文本转语音（TTS）提供程序未配置的错误，属于轻度配置类Bug，尚无社区讨论或开发者跟进。
- 无PR活动表明维护者或贡献者当前未进行代码变更，项目整体节奏趋缓，可能需要关注社区反馈响应速度。
- 代码库无明显变动，项目当前健康度**稳定但缺乏推进迹象**。

## 2. 版本发布
- 无新版本发布。

## 3. 项目进展
- 今日无任何合并或关闭的PR，代码库无新增功能或修复提交。项目整体处于静默状态，无可见进展。

## 4. 社区热点
- 无（今日Issue #1114尚未产生评论或讨论，PR无活动）。社区热度近乎为零，需审视是否因项目成熟度高或维护者缺乏互动导致。

## 5. Bug 与稳定性
| Bug 名称 | 严重程度 | 关键信息 | 修复状态 |
|----------|----------|----------|----------|
| [Bug] provider 'coqui' not configured (#1114) | **minor** | 用户报错：使用Coqui TTS时提示提供程序未配置。用户已确认使用最新版本，未提供会话上下文截图。 | 无关联PR，待诊断 |

- 无崩溃或回归类严重Bug。该问题可能是配置文件中未设定`coqui`模块路径或缺少依赖所致。

## 6. 功能请求与路线图信号
- 今日未收到明确的新功能请求。Issue #1114的核心诉求是**修复现有提供程序的配置校验**，不指向新增功能。
- 无PR或Roadmap相关讨论，下一版本方向不明。

## 7. 用户反馈摘要
- **用户痛点**：Issue #1114用户反映在最新版本下无法正常使用Coqui TTS，提示“未配置”，但用户未提供详细运行环境或配置文件内容，问题重现难度较高。
- **使用场景**：Moltis作为AI助手框架，TTS模块是语音交互场景的常见依赖，该Bug会直接影响使用Coqui作为语音引擎的用户体验。
- **满意程度**：该用户填写了完整Preflight Checklist并确认搜索过已有Issue，态度积极但未获得回复；无满意/不满意的明确情绪表达。

## 8. 待处理积压
- 无长期未响应的关键Issue或PR需要特别提醒（当前所有未关闭Issue无超过1天未回复）。但需关注**Issue #1114**，若长时间无人响应可能演变为沉积问题。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，我已根据您提供的CoPaw项目数据，为您生成了2026-06-11的项目动态日报。

---

# CoPaw 项目动态日报 | 2026-06-11

## 1. 今日速览

CoPaw 项目今日处于 **高活跃度** 状态，社区贡献和官方开发节奏均十分强劲。过去24小时内，项目处理了高达 **87条** 的Issues与PR，其中PR合并/关闭率达60%（30/50），显示出高效的代码合并与问题解决能力。官方发布了 **v1.1.11** 正式版及 **v1.1.11-beta.3** 两个版本，重点引入了零配置免费模型、小米MiMo Token计划等新特性。同时，社区围绕AgentScope 2.0迁移、模型兼容性与前端性能等核心问题展开了热烈讨论。项目整体呈现出功能迭代加速、社区参与踊跃的健康态势。

## 2. 版本发布

### v1.1.11 (正式版)
- **主要更新内容:**
    - **新增Provider（模型供应商）**:
        - **Free Model OAuth**: 引入零配置免费模型，通过一键OAuth认证即可使用，大幅降低新用户入门门槛。(相关PR: [#5049](https://github.com/agentscope-ai/QwenPaw/pull/5049))
        - **小米MiMo Token计划**: 新增小米MiMo作为内置模型供应商，拓宽了模型生态。
    - **破坏性变更**: 未提及。
    - **迁移注意事项**: 建议所有用户升级以体验新模型支持。

### v1.1.11-beta.3
- **主要更新内容:**
    - **技能进化**: 增强了技能创建流程（make-skill flow），支持**自我进化技能**的创建。这意味着Agent可以根据交互经验，自动优化和完善自身技能。
    - **CI优化**: 移除了冗余的channel-tests工作流。
    - **破坏性变更**: 未提及。
    - **迁移注意事项**: Beta版本，供开发者尝鲜和测试。建议在非生产环境试用。

## 3. 项目进展

- **代码架构与安全**:
    - **Agent OS Driver**: 合并了一个旨在统一抽象外部能力（MCP/A2A/ACP）的核心PR([#5067](https://github.com/agentscope-ai/QwenPaw/pull/5067))，为未来连接更多协议和工具奠定了基础。
    - **文件安全守卫增强**: PR [#5081](https://github.com/agentscope-ai/QwenPaw/pull/5081) 允许在文件安全守卫（File Guard）下预览工作区外的文件，在安全性与灵活性之间取得平衡。
- **构建与发布流程**:
    - 解决了Windows构建中由`aiohttp`新版本和证书问题导致的SSL错误（PR [#5082](https://github.com/agentscope-ai/QwenPaw/pull/5082)、[#5083](https://github.com/agentscope-ai/QwenPaw/pull/5083)、[#5084](https://github.com/agentscope-ai/QwenPaw/pull/5084)），确保了发布管线的稳定性。
- **平台与客户端**:
    - **桌面端自动更新**: PR [#4669](https://github.com/agentscope-ai/QwenPaw/pull/4669) 正在推进为Tauri桌面客户端添加自动更新功能，用户体验将持续优化。
    - **Web登录权限**: PR [#4858](https://github.com/agentscope-ai/QwenPaw/pull/4858) 引入了“作用域登录”功能，允许管理员为不同用户分配特定Agent的访问权限，提升了企业级部署的安全性。
- **生态系统**:
    - **数据插件**: 全新的数据分析插件 **DataPaw** ([#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622)) 正在审核中，内置12个BI技能，标志着 CoPaw 插件生态的初步繁荣。

## 4. 社区热点

- **热点一：[Breaking Change] 向 AgentScope 2.0 迁移 ([#4727](https://github.com/agentscope-ai/QwenPaw/issue/4727))**
    - **热度**: 8条评论，2个👍
    - **诉求**: 社区高度关注并从架构层面讨论了将CoPaw的后端依赖从AgentScope 1.x升级到2.0的计划。这是项目的重大架构决策，直接影响未来的API兼容性和开发方向。
    - **分析**: 此项迁移是项目演进的关键一步，社区成员积极参与讨论，表明大家对此有共识但也对可能带来的破坏性变更保持谨慎。

- **热点二：视觉模型配置与模型兼容性 ([#4992](https://github.com/agentscope-ai/QwenPaw/issue/4992))** & **([#5001](https://github.com/agentscope-ai/QwenPaw/issue/5001))** & **([#5052](https://github.com/agentscope-ai/QwenPaw/issue/5052))**
    - **热度**: 累计超10条评论。
    - **诉求**: 用户强烈要求支持独立配置视觉模型（Visual Model Fallback），以便在主模型不支持多模态时能自动调用视觉模型处理图片。同时，也暴露了与特定模型（如9router, deepseek-v4-flash）的兼容性问题。
    - **分析**: 这表明用户场景日益复杂，对模型组合和灵活配置的需求在快速增长。纯文本模型加视觉“中转”方案成为热门需求。

- **热点三：前端性能与聊天体验 ([#4917](https://github.com/agentscope-ai/QwenPaw/issue/4917))** & **([#5053](https://github.com/agentscope-ai/QwenPaw/issue/5053))** & **([#4865](https://github.com/agentscope-ai/QwenPaw/issue/4865))**
    - **热度**: 累计超8条评论。
    - **诉求**: 用户普遍反映在聊天记录量大、多会话切换时，前端出现严重卡顿和加载延迟。特别是Agent生成大文件或代码时，界面无流式响应，体验差。
    - **分析**: 这是对用户体验影响最直观的痛点，表明当前的Web前端渲染架构在处理大量数据和并发会话时存在瓶颈，急需优化。

## 5. Bug 与稳定性

- **严重 (Critical):**
    - **Agent创建的定时任务无法触发和编辑** ([#5064](https://github.com/agentscope-ai/QwenPaw/issue/5064)): Agent生成的定时任务会自动执行，但无法按计划触发，也无法手动修改。这是一个严重的功能缺陷。**暂无关联Fix PR**。
    - **工具调用在某些模型下全面报错** ([#5052](https://github.com/agentscope-ai/QwenPaw/issue/5052)): 使用特定模型（如deepseek-v4-flash）时，工具调用在前几次成功后全面失败，报`got an unexpected keyword argument 'arguments'`错误，严重影响Agent的正常工作。**暂无关联Fix PR**。

- **中等 (Medium):**
    - **本地模型无响应** ([#4989](https://github.com/agentscope-ai/QwenPaw/issue/4989)): 在v1.1.9/1.1.10版本中，本地部署的千问3.6-27B模型对话无响应，是回归问题。社区报告在旧版可用。
    - **Windows桌面客户端产生多个MCP进程** ([#4834](https://github.com/agentscope-ai/QwenPaw/issue/4834)): 每次重启服务，MCP进程都会积累，导致控制台加载变慢。
    - **RunTime 2.0架构问题**: PR [#5078](https://github.com/agentscope-ai/QwenPaw/pull/5078) 和 [#5036](https://github.com/agentscope-ai/QwenPaw/pull/5036) 正在着手解决会话文件名重复和桌面端Agent间调用失败等问题。

- **低等 (Low):**
    - **图片预览抖动** ([#4993](https://github.com/agentscope-ai/QwenPaw/issue/4993)): 放大图片后拖动出现异常抖动。
    - **技能斜杠命令显示异常** ([#5031](https://github.com/agentscope-ai/QwenPaw/issue/5031)): 调用技能时，控制台错误地显示了完整的SKILL.md内容。

## 6. 功能请求与路线图信号

- **高概率纳入下个版本:**
    - **独立视觉模型配置 (Visual Model Fallback)** ([#4992](https://github.com/agentscope-ai/QwenPaw/issue/4992)): 该功能需求呼声很高且设计合理，能有效解决纯文本模型无法处理图片的痛点。已有1个👍，很可能被纳入后续版本。
    - **运行时模块化架构 (Runtime 2.0)** ([#5078](https://github.com/agentscope-ai/QwenPaw/pull/5078)): 此PR旨在重构核心执行引擎，是项目架构升级的重要信号，将直接影响后续所有功能的开发。若被合并，将是里程碑式的进展。

- **未来路线图信号:**
    - **上下文压缩集成** ([#5063](https://github.com/agentscope-ai/QwenPaw/issue/5063)): 用户提议集成Headroom技术进行上下文压缩，可减少60-95%的Token消耗。这反映了社区对高级成本优化策略的关注。
    - **钉钉私有化部署支持** ([#4887](https://github.com/agentscope-ai/QwenPaw/issue/4887)): 企业用户提出为钉钉通道添加自定义端点支持，以适应私有化部署环境。这是项目向企业级应用延伸的重要信号。
    - **文件与工具守卫的细粒度控制** ([#4356](https://github.com/agentscope-ai/QwenPaw/issue/4356)): 用户希望File Guard不再是简单的黑/白名单，而是支持更精细的权限（如某些路径只读），表明社区对安全控制的要求在提高。

## 7. 用户反馈摘要

- **部署与连接:** 有用户反映在局域网内无法通过手机访问桌面版控制台（[#4960](https://github.com/agentscope-ai/QwenPaw/issue/4960)），尽管已进行多项网络配置。这表明桌面版的网络配置和文档需要进一步优化。
- **技能与智能体:** 用户希望技能池能被分类管理（[#2961](https://github.com/agentscope-ai/QwenPaw/issue/2961)），以便在创建特定任务的Agent时，能批量、按需加载技能，体现了对Agent个性化配置的深度需求。
- **整体满意度:** 用户对CoPaw的新版本功能（如v1.1.11的新模型）持积极态度，但前端性能和特定模型兼容性的问题给用户带来了较大困扰，影响了“开箱即用”的良好体验。

## 8. 待处理积压

- **长期未响应的重要Issue:**
    - **AgentScope追踪初始化支持** ([#4057](https://github.com/agentscope-ai/QwenPaw/issue/4057)): 于2026-05-06提出，关于接入AgentScope链路追踪功能。该功能对企业级监控和调试至关重要，至今仍有评论和关注，但尚未被官方明确回复或纳入规划。建议维护者给出明确的时间表或状态。
- **长期未响应的功能请求:**
    - **Windows系统托盘** ([#3751](https://github.com/agentscope-ai/QwenPaw/issue/3751)): 于2026-04-23提出，希望为Windows桌面端添加系统托盘图标功能。虽然已有相关PR ([#4669](https://github.com/agentscope-ai/QwenPaw/pull/4669))，但该Issue本身处于OPEN状态已近两个月，建议更新状态或关闭以保持社区沟通渠道的清洁。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，这是根据您提供的ZeroClaw (github.com/zeroclaw-labs/zeroclaw) 数据生成的2026-06-11项目动态日报。

---

## ZeroClaw 项目动态日报 | 2026-06-11

**数据时间范围**: 2026-06-10 ～ 2026-06-11 (基于Issue/PR最后更新时间)

---

### 1. 今日速览

ZeroClaw项目今日保持高度活跃。过去24小时内，社区提交并处理了超过90条Issue和PR，显示出强劲的协作动能。核心开发团队正围绕即将到来的 **v0.8.x** 系列版本（特别是v0.8.0、v0.8.1、v0.8.2）进行密集的功能开发、架构重构与稳定性修复。焦点集中在三大领域：**代理运行时(Agent Runtime)的鲁棒性**（如子代理和委托调用修复）、**MCP工具生态的健壮性**（如自动重连策略）、以及 **“ZeroCode” TUI的易用性**改进。整体项目健康度良好，但高风险Bug（如代理对话丢失、MCP策略问题）正在被紧急处理。

### 2. 版本发布

- **今日无新版本发布**。

### 3. 项目进展 (今日合并/关闭的里程碑PR)

今日合并的关键PR体现了项目在多个维度的推进：
- **修复与稳定性**:
    - **`PR #7444` - Dashboard状态优化**: 修复了ZeroCode Dashboard对加载、错误和持久化状态的区分问题，提升了TUI的调试和用户透明度。*（已合并）*
    - **`PR #7466` - CI编译修复**: 快速修复了批量合并后导致的master分支编译错误，保障了持续集成通道的畅通。*（已合并）*
    - **`PR #7352` - Web端日志增强**: 为Web Dashboard添加了cron设置加载失败时的控制台警告，有助于远程排查问题。*（已合并）*
    - **`PR #7353` - 性能优化(KPI)**: 通过避免不必要的内存克隆，优化了CLI模式的最终输出性能，直接回应对 `#2973` 项的性能诉求。*（已合并）*
- **文档与架构**:
    - **`PR #7365` - 文档重构**: 重构了项目mdBook文档，并实现从源代码自动生成provider和config配置表面的功能，极大地提升文档维护效率和准确性。*（已合并）*

**项目小结**: 通过上述合并，项目在**用户体验（Dashboard可用性）、开发体验（文档准确性）、运维体验（Web日志）和运行性能（内存优化）** 四个方面均获得提升，为后续版本迭代打下了更坚实的基础。

### 4. 社区热点

今日社区讨论热度集中在架构演进和核心功能Bug上。

1.  **子代理“cwd”继承缺失 (`#7263`)**:
    - **链接**: [Issue #7263](https://github.com/zeroclaw-labs/zeroclaw/issues/7263)
    - **热度**: 新开即获关注，标记为P1。
    - **分析**: 用户尝试使用“子代理”驱动开发模式时，发现子代理无法继承父代理的工作目录(`cwd`)，导致工作流阻塞。这暴露了ACP通道在复杂工作流编排中的关键缺失，是阻碍高级用户采用该模式的核心痛点。

2.  **RFC: 统一三种Agent轮次引擎 (`#7415`) 与 原生动态库插件系统 (`#7420`)**:
    - **链接**: [Issue #7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415) | [Issue #7420](https://github.com/zeroclaw-labs/zeroclaw/issues/7420)
    - **热度**: 均为新提出的RFC，引发架构师和核心贡献者关注。
    - **分析**: `#7415` 指出了代码库中代理循环逻辑存在三个不同实现的问题，建议统一以消除漏洞和提升一致性，这反映了社区对核心运行时严谨性的追求。`#7420` 则提出了更激进的原生插件系统RFC，意图解决单体架构的痛点，这可能是未来v0.9.0或更高版本的重大方向，标志着项目向更高模块化迈进的尝试。

### 5. Bug 与稳定性

今日报告的Bug按严重程度排列如下：

- **高风险 (S1/Severity: High)**:
    - **[Bug]子代理不继承“cwd”** (`#7263`): 在ACP会话中，子代理无法继承父代理的工作目录，导致工作流阻塞。 **(暂无fix PR)**
    - **[Bug]用户消息丢失** (`#6034`): 单轮/多轮对话中用户消息可能丢失，由 `custom` provider 返回400错误触发。 **(暂无fix PR)**
    - **[Bug]MCP策略未应用于注册** (`#7456`): 存在PR `#7456` 修复此问题，通过将MCP访问策略应用于所有注册场景（包括eager和deferred模式）。 **(已有PR: #7456)**
- **中风险 (S2/Severity: Medium)**:
    - **[Bug]子代理/委托调用失败** (`#7442`): 并行SubAgents和Delegates调用无法稳定返回，存在PR `#7442` 通过豁免重复调用守卫来修复。 **(已有PR: #7442)**
    - **[Bug] `image_info`工具输出丢失** (`#7436`): 当非绝对路径调用时，工具输出无法传递给多模态模型。 **（暂无fix PR)**
    - **[Bug]配置编辑器默认使用 `vi`** (`#7469`): 容器镜像未包含 `vi` 编辑器导致编辑配置时出错。 **(暂无fix PR)**
- **低风险 (S3/Severity: Low)**:
    - `#7469` 已属此类。

**稳定性总结**: 核心团队正在积极解决由子代理、MCP和多模态工具调用引发的一系列高风险问题。特别是 `#7456` 和 `#7442` 对应的PR，表明这些最关键的稳定性问题已进入修复阶段。

### 6. 功能请求与路线图信号

- **“Pre-turn路由意图提取” (`#7431`)**: 这是一个前瞻性的功能请求，建议增加轻量级的轮次前意图识别，以自动处理自然语言中的路由请求（如“让Agent B来做”）。这将是提升代理间协作流畅度的关键功能，可能纳入v0.8.x后续规划。
- **TUI/ZeroCode体验改进** (`#7467`, `#7468`): 两项新请求要求增加TUI中编辑字符串的灵活性（如方向键导航）和重命名别名的功能。这表明随着ZeroCode的发展，用户对其编辑器体验提出了更高要求。考虑到相关PR活跃，这些功能很可能在v0.8.2或后续版本中被快速采纳。
- **WASM Office文档插件** (`#7454`): 新提交的 `plugins/office-tools` WASM插件，将Office文档提取功能引入ZeroClaw。这紧跟 `v0.8.2 WASM插件项目` (`#7314`) 的路线图，是插件生态扩容的积极信号。

### 7. 用户反馈摘要

- **核心痛点: 代理协作的复杂性**：用户 `tidux` 在 `#7263` 中抱怨“子代理驱动开发模式”因cwd继承问题无法使用，这是对系统已有功能的高期待与现实障碍之间的矛盾。这一反馈指向了ACP等高级特性的成熟度需要提升。
- **开发者体验(DevEx)的敏感度**：`#7469` 指出容器镜像中缺少 `vi`，暴露了默认配置与容器化环境的不一致，对开发者而言是微小的但频繁的摩擦。`#6222` 关于破损文档链接的修复也印证了社区对文档准确性的高要求。
- **正向反馈与参与**：`#7467` 和 `#7468` 的提出者是同一用户，且都在积极讨论如何提升ZeroCode的编辑体验，这表明核心TUI工具正吸引着真实用户并激发其改进意愿，社区参与度良好。

### 8. 待处理积压

- **长期阻塞的架构RFC**:
    - **`[Feature]: Provide a "full" docker image` (`#3642`)**: 从3月搁置至今，核心问题在于编译全部feature标志后的镜像体积。随着v0.8.x功能增多，这一需求变得更加迫切。维护者应考虑在v0.8.0后重新评估。
    - **`RFC: Prefer a lighter ZeroClaw core through external integrations` (`#6165`)**: 同样搁置，建议将部分核心工具移至外部集成。这与`#7420`提到的“单体之痛”和新的原生插件系统RFC形成呼应，验证了当初的设计方向。此项议题需要与新的RFC协同推进。

- **长期高风险、需关注的Bug**:
    - **`[Bug]: 单轮对话以及多轮对话会出现丢失 user message的现象` (`#6034`)**: P1高优Bug，至今未有明确的修复方案。这个问题的根源可能较深，涉及provider接口适配或运行时调度，社区需持续关注开发团队的进展。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*