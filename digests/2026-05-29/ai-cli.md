# AI CLI 工具社区动态日报 2026-05-29

> 生成时间: 2026-05-29 00:28 UTC | 覆盖工具: 9 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

好的，作为一名专注于 AI 开发工具生态的资深技术分析师，我将基于您提供的 2026-05-29 各工具社区动态，为您呈现一份横向对比分析报告。

---

### **AI CLI 工具生态横向分析报告 (2026-05-29)**

#### **1. 生态全景**

当前 AI CLI 工具生态呈现出 **“百花齐放、分化加速”** 的态势。以 **Claude Code** 为首的工具通过引入“动态工作流”和“多代理编排”进入 **Agent 2.0 时代**，引领了从单线程助手到复杂任务调度中心的演进。同时，市场竞争加剧导致明显的品牌与架构分化，例如 **Kimi CLI** 重构为 **Kimi Code** 引发了社区信任危机。**稳定性** 与 **长上下文管理** 成为所有工具的普遍痛点，而 **DeepSeek TUI** 等新兴工具通过聚焦特定领域（如中文优化）发起冲击，预示着未来竞争将更加细分。

#### **2. 各工具活跃度对比**

| 工具名称 | 今日/近期 Issues 数 | 今日/近期 PRs 数 | 近期 Releases |
| :--- | :--- | :--- | :--- |
| **Claude Code** | 10 (精选) | 4 (精选) | v2.1.154, v2.1.153 |
| **OpenAI Codex** | 10 (精选) | 10 (精选) | rust-v0.135.0 |
| **Gemini CLI** | 10 (精选) | 10 (精选) | v0.45.0-preview.1, v0.44.1 |
| **GitHub Copilot CLI** | 10 (精选) | 0 | v1.0.56-0, v1.0.55 |
| **Kimi Code CLI** | 8 (精选) | 10 (精选) | 预发布 v1.46.0 |
| **OpenCode** | 10 (精选) | 10 (精选) | v1.15.12 |
| **Pi** | 10 (精选) | 10 (精选) | v0.77.0 |
| **Qwen Code** | 10 (精选) | 10 (精选) | 未提及 |
| **DeepSeek TUI** | 10 (精选) | 10 (精选) | 未提及 |

*注：数据基于报告中提及的精选内容，不代表全量数据。*

#### **3. 共同关注的功能方向**

多个工具社区在以下方向上达成共识，反映了开发者的核心诉求：

1.  **多模型与混合工作流支持**:
    - **诉求**: 用户希望在一个 CLI 中无缝切换、组合或并行使用不同提供商（如 Anthropic, OpenAI, Google）的模型。
    - **相关工具**: **Pi** (#5148, #5087), **OpenCode** (#6651, #28846, #29618), **GitHub Copilot CLI** (#3355, #3527), **Claude Code** (Opus 4.8集成), **DeepSeek TUI** (#2247, #2300)。

2.  **长上下文管理与会话可靠性**:
    - **诉求**: 解决因模型或工具层面的上下文窗口限制、自动压缩、会话恢复失败（如“Thinking blocks cannot be modified”错误）等问题，确保深度、长耗时的复杂任务不会因会话中断而丢失进度。
    - **相关工具**: **Claude Code** (#10199, #63147), **GitHub Copilot CLI** (#3539, #3527, #3355), **OpenAI Codex** (#10561), **Pi** (#5087), **Qwen Code** (#4592, #4599)。

3.  **Agent 行为可控性与安全性**:
    - **诉求**: 需要更强的机制来中断、重定向、审核或限制 Agent 的行为，例如“计划模式”的严格执行、高风险操作的识别与劝阻、以及精细化的权限控制。
    - **相关工具**: **Claude Code** (#30492), **GitHub Copilot CLI** (#1654), **DeepSeek TUI** (#2303), **Gemini CLI** (#22672)。

4.  **工具生态（MCP/ACP）集成与治理**:
    - **诉求**: 易于集成第三方工具，同时需要企业级的治理能力，如私有 Registry、配置同步、Token 消耗透明度等。
    - **相关工具**: **OpenAI Codex** (#21598, #24233), **GitHub Copilot CLI** (#39, #3207), **Kimi CLI** (#2127), **Qwen Code** (#4591)。

#### **4. 差异化定位分析**

| 工具名称 | 核心优势 & 功能侧重 | 目标用户 | 技术路线/特色 |
| :--- | :--- | :--- | :--- |
| **Claude Code** | **Agent 编排与复杂性处理** (动态工作流, 多代理) | 处理极复杂、大型任务的资深开发者 | 深度绑定 Anthropic 模型，引领 Agent 2.0 架构 |
| **OpenAI Codex** | **企业级部署与 Chrome 插件** (云配置, 沙箱, 远程控制) | 企业团队、需要严格安全管控的用户 | 强调 Sandbox 安全、企业级云配置及 Chrome 生态集成 |
| **Gemini CLI** | **模型智能与评估体系** (AST感知, 组件评估, OIDC) | 关注模型性能、深度研究及企业安全的开发者 | 强调 Agent 智能决策与组件级评估，面向未来的前瞻性探索 |
| **Copilot CLI** | **GitHub 生态深度集成** (PR 管理, 代码审查, 模型选择) | 重度使用 GitHub 工作流的开发者 | 紧密集成 VS Code 与 GitHub 服务，偏重开发流程自动化 |
| **Kimi Code CLI** | **品牌与架构重构** (从 kimi-cli 升级) | 原有 kimi-cli 用户，观望新架构的开发者 | 处于从 CLI 向更完整平台转型的关键阶段，社区信任是挑战 |
| **OpenCode** | **成本优化与灵活性** (模型选择, 配额调整, 供应商管理) | 对模型成本和使用效率高度敏感的用户 | 强调“Go”订阅计划与 DeepSeek 等经济型模型的成本联动 |
| **Pi** | **终端体验与扩展性** (终端兼容性, 扩展 API, 远程控制) | 追求极致终端体验、喜欢 DIY 的高级用户 | 强大的扩展 API 和可定制性，社区创新活跃 |
| **Qwen Code** | **服务端化与生产就绪** (Daemon 模式, 可观测性, ACP) | 希望将 CLI 作为后台服务运行的团队 | 聚焦 `qwen serve` Daemon 模式，强调服务端稳定性与 API 设计 |
| **DeepSeek TUI** | **中文领域与本地化** (中文输入, i18n, 硅流提供商) | 中文开发者、追求低成本和本地部署的用户 | 聚焦中文用户痛点，积极拥抱本土化 API 生态 |

#### **5. 社区热度与成熟度**

- **高度活跃，处于生态领导地位**: **Claude Code** 和 **OpenAI Codex**。两者都拥有极高的话题量和社区关注，分别引领 Agent 架构和企业级安全两个方向。Claude Code 的 Bug 和特性讨论（如动态工作流、扩展思维问题）密集且深入，代表行业前沿。
- **快速迭代，稳定增长**: **Gemini CLI**, **GitHub Copilot CLI**, **Pi**, **OpenCode**, **Qwen Code**。这些工具社区活跃度高，功能迭代快（如 Gemini CLI 同日发布三个版本），且社区贡献者有较高参与度（PR 密集）。其中，**Pi** 和 **OpenCode** 的扩展/插件生态讨论热烈，显示出强大的开发者社区自驱力。
- **面临重大变革，进入调整期**: **Kimi Code CLI** 和 **DeepSeek TUI**。Kimi CLI 面临品牌重塑带来的信任挑战，而 DeepSeek TUI 则正处于解决中文社区核心痛点的“攻坚”阶段。两者社区热度不低，但焦点更多集中在基础功能修复和方向明确上，而非前沿探索。

#### **6. 值得关注的趋势信号**

- **Agent 的“自我意识”与安全护栏**: “计划模式被忽略” (GitHub Copilot CLI #1654) 和“Agent 不劝阻破坏性行为” (Gemini CLI #22672) 等诉求，揭示出行业正从 **“如何让 Agent 完成更多任务”** 转向 **“如何确保 Agent 按照我们的意图和边界正确完成任务”**。**对 Agent 行为的高度可控将成为下一个核心竞争点**。
- **“长上下文”是最大瓶颈，也是创新温床**: 几乎所有顶级工具都未能完美解决长上下午的稳定性和成本问题。Claude Code 的“扩展思维”会话崩溃、Copilot 的 200K 上限、Pi 的模型元数据错误等，都指向同一个方向：**谁能首先提供稳定、可靠且高效的长上下文体验，谁就能在开发者心智中占据制高点**。Qwen Code 提议的“全量摘要+附件”模型是值得关注的技术解决方案之一。
- **模型多元化催生“元模型管理”需求**: 随着越来越多模型（Claude Opus, GPT, Gemini, DeepSeek, Qwen 等）的涌现，开发者不再满足于绑定单一模型。**对多模型进行统一管理、灵活调度和成本控制** 的需求（如 Pi 和 OpenCode 的社区讨论）将催生新的“模型中间件”或“模型路由器”角色。
- **开发工具的“服务化”与“平台化”**: Qwen Code 的 `qwen serve` 和 Pi 的 `remote-control` API 显示，AI CLI 正从个人交互终端，**演变为可被其他应用、服务或 CI/CD 流水线调用的服务化组件**。这种趋势将深刻改变 AI 开发工具在产品生态中的定位。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

好的，作为一名专注于 Claude Code 生态的技术分析师，以下是根据您提供的数据（github.com/anthropics/skills，数据截止 2026-05-29）生成的社区热点报告。

---

### Claude Code Skills 社区热点报告 (数据截止 2026-05-29)

本报告基于对 anthropics/skills 官方仓库中热门 Pull Requests (PRs) 和 Issues 的分析，旨在揭示社区当前最关注的 Skills 动态、发展趋势与核心诉求。

#### 1. 热门 Skills 排行

以下列出社区关注度（以评论/讨论热度为主要指标）最高的 Skills：

1.  **文档排版质量控制 (`document-typography`)**
    *   **链接**: [PR #514](https://github.com/anthropics/skills/pull/514)
    *   **功能**: 专注于修复AI生成文档中的常见排版问题，如单词孤行、段落孤寡、编号错位等，提升文档专业度。
    *   **动态**: **OPEN (已开放)**。社区对这一实用工具反应积极，讨论集中在如何定义“好排版”的通用规则及与框架的兼容性。它触及了AI生成内容的一个核心痛点：视觉质量。

2.  **OpenDocument 格式支持 (`odt`)**
    *   **链接**: [PR #486](https://github.com/anthropics/skills/pull/486)
    *   **功能**: 允许 Claude 创建、填充、读取和转换 OpenDocument 格式（.odt, .ods）文件，即 LibreOffice 等开源办公套件的标准格式。
    *   **动态**: **OPEN (已开放)**。此 Skill 反映了对“开源办公生态”和“ISO标准格式”的支持呼声。社区讨论了与微软 Office 格式的互通性和文档模板填充的具体场景。

3.  **前端设计技能清晰化 (`frontend-design`)**
    *   **链接**: [PR #210](https://github.com/anthropics/skills/pull/210)
    *   **功能**: 对现有前端设计技能进行重大修订，目标是使指令更清晰、更具可操作性，确保 Claude 能在一个会话中有效执行，并给出具体的行为指引。
    *   **动态**: **OPEN (已开放)**。这并非新功能，而是对已有技能质量的一次重要提升。讨论聚焦于如何编写更精炼、更高效的 Skill 指令，是社区“内功修炼”的典型案例。

4.  **平台生态：ServiceNow 与 SAP**
    *   **ServiceNow 平台技能**: [PR #568](https://github.com/anthropics/skills/pull/568) - 旨在成为全能的 ServiceNow 平台助手，覆盖脚本、架构、SecOps 等多个模块。
    *   **SAP 预测分析技能**: [PR #181](https://github.com/anthropics/skills/pull/181) - 集成 SAP 开源的表格基础模型，用于商业数据预测。
    *   **动态**: 两者均 **OPEN (已开放)**。这清晰地表明，社区正积极推动 Claude Code 进入企业级特定领域平台，从通用编程助手向行业专家转型。

5.  **测试模式规范 (`testing-patterns`)**
    *   **链接**: [PR #723](https://github.com/anthropics/skills/pull/723)
    *   **功能**: 提供覆盖全栈的测试指南，包括测试哲学、单元测试、React 组件测试、集成测试和 E2E 测试的最佳实践。
    *   **动态**: **OPEN (已开放)**。社区对“如何建立一套标准、高效的测试流程”表现出强烈兴趣。此 Skill 旨在将测试知识内化给 AI，使其生成更可靠、更符合规范的测试代码。

6.  **持久化记忆系统 (`shodh-memory`)**
    *   **链接**: [PR #154](https://github.com/anthropics/skills/pull/154)
    *   **功能**: 为 AI Agent 增加跨会话的持久化上下文记忆，使其能主动回忆用户偏好和历史交互信息，实现更连贯的协作体验。
    *   **动态**: **OPEN (已开放)**。这是一个典型的长上下文解决方案，讨论集中在记忆的检索效率、存储结构和隐私边界上。

#### 2. 社区需求趋势

从 Issues 中可以提炼出社区最期待的三大新 Skill 方向：

1.  **安全与治理 (Security & Governance)**: 社区不仅仅是关注功能，更关心安全。Issue `#492` 直接指出了社区技能在官方命名空间下分发的信任风险。同时，`#1175` 提出在处理 SharePoint 等业务文档时，如何通过 Skills 正确地实现访问控制和权限管理。这表明，随着 Skills 应用深入，**信任、安全和合规**成为社区的第二大考量。
2.  **平台互操作性 & 生态融合 (Platform Interoperability)**: 除了新功能，社区希望 Skills 能更好地融入现有工具链。`#228` 强烈呼吁在 Claude.ai 内部实现组织级的技能共享，而不是依赖外部文件传输。`#16` 则提出将 Skills 暴露为 MCP (Model Context Protocol) 服务，以便与其他软件生态进行标准化集成。
3.  **工具链与体验优化 (Tooling & Experience)**: 开发者对创造和使用 Skills 的体验本身有高度要求。`#202` 建议更新 `skill-creator` 技能，使其从“开发者文档”转变为真正可执行的、高效的 AI 指令。`#556` 报道了评估工具的 Bug，影响了技能优化，说明**社区需要一个稳定、高效的技能开发与调试工具链**。

#### 3. 高潜力待合并 Skills

以下 PR 评论活跃、关注度高，且具有前瞻性或实用性，预计近期合并落地可能性高：

1.  **`skill-quality-analyzer` & `skill-security-analyzer` ([PR #83](https://github.com/anthropics/skills/pull/83))**: 作为“元技能”，它能自动评估其他技能的质量和安全风险。在当前技能数量激增的背景下，这类工具对于维护生态健康和提供质量保证至关重要，是社区期待的“守门人”角色。
2.  **AURELION 技能套件 ([PR #444](https://github.com/anthropics/skills/pull/444))**: 这是一套结构化的认知与记忆框架，对于提升 AI Agent 在处理复杂知识管理任务时的推理深度和效率有显著价值。其系统化和思想性代表了高级技能的发展方向。
3.  **`codebase-inventory-audit` ([PR #147](https://github.com/anthropics/skills/pull/147))**: 针对老旧或大型代码库的清理和审计需求。它能系统地识别僵尸代码、文档缺失和基础设施臃肿问题，是“代码健康”领域的刚需技能。

#### 4. Skills 生态洞察

**当前社区最集中的诉求是：跨越“功能实现”阶段，进入生态成熟期，核心关注点从“能做什么”转向“如何做好、如何协同、如何信任”**。

具体表现为：
*   **质量优先**：并非盲目追求更多技能，而是通过规范化（如 `frontend-design` 修订）和质检工具（如 `skill-quality-analyzer`）来提升已有技能的可靠性和效率。
*   **企业级落地**：大量 PR/Issues 针对 ServiceNow、SAP、SPO 等企业平台，表明社区正积极将 Claude Code 嵌入严肃的商业和生产流程。
*   **生态治理需求凸显**：安全问题 (`#492`)、共享问题 (`#228`)、评估问题 (`#556`) 都在揭示，一个繁荣的 Skill 生态需要强大的工具链和治理框架作为基础。

---

好的，作为专注于 AI 开发工具的技术分析师，我已根据您提供的 GitHub 数据，为您生成了 2026-05-29 的 Claude Code 社区动态日报。

---

# Claude Code 社区动态日报 | 2026-05-29

## 今日速览

Claude Code 迎来重磅更新 v2.1.154，正式集成 **Opus 4.8** 并引入革命性的 **动态工作流 (Dynamic Workflows)** 功能，可将大型任务拆解给数十甚至数百个子代理并行处理。然而，社区反馈显示，新版本中围绕“扩展思维 (Extended Thinking)” 功能出现了大量会话阻断 (Session Bricking) 的严重 Bug，成为开发者今日最关注的痛点。

## 版本发布

### v2.1.154
- **Opus 4.8 集成**：现已默认使用高努力模式 (`/effort xhigh`) 来处理最困难的任务。
- **动态工作流 (Dynamic Workflows)**：全新功能，允许 Claude 自主创建工作流并将其编排给数十到数百个后台代理，以处理更大、更复杂的任务。

### v2.1.153
- **Git LFS 优化**：为 `github` / `git` 插件市场源添加 `skipLfs` 选项，可在克隆和更新时跳过 Git LFS 下载。
- **全局安装通知**：当 npm 全局安装无法自动更新时，Claude Code 现在会显示一次性通知；使用 `/doctor` 可以看到修复方法。
- **状态行改进**：状态行命令现在可以接收 `COLUMNS` 环境变量。

## 社区热点 Issues

1.  **#10199: [BUG] API 错误 400 - Thinking Block 修改错误**
    - **重要性**: 🔥🔥🔥🔥🔥 (评论: 90 | 👍: 55)
    - **摘要**: 一个长期存在的核心Bug，在恢复使用“扩展思维”的会话时，会因“thinking blocks cannot be modified”的API错误导致会话永久损坏。这是当前社区最受关注的问题。
    - **链接**: https://github.com/anthropics/claude-code/issues/10199

2.  **#63147: [BUG] 恢复扩展思维会话永久失败 (400错误)**
    - **重要性**: 🔥🔥🔥🔥🔥 (评论: 23 | 👍: 30)
    - **摘要**: 明确指出了 Bug 根因：在涉及 tool calls 的扩展思维会话中，transcript 存储了空的 thinking text 但保留了签名，恢复时 API 校验失败，导致会话永久损坏。社区普遍认为这是 #10199 的核心复现和根因。
    - **链接**: https://github.com/anthropics/claude-code/issues/63147

3.  **#63322: [BUG] 版本更新/模型切换后恢复扩展思维会话导致400错误**
    - **重要性**: 🔥🔥🔥🔥🔥 (评论: 6 | 👍: 1)
    - **摘要**: 确认了在版本更新（从 v2.1.146 升至 v2.1.150）或模型切换后，恢复扩展思维会话会出现不可恢复的 400 错误。这表明版本更新可能“损坏”了旧会话的兼容性。
    - **链接**: https://github.com/anthropics/claude-code/issues/63322

4.  **#63394: [BUG] v2.1.154 回归：远程控制会话回放重发空 thinking 块导致400错误**
    - **重要性**: 🔥🔥🔥🔥 (评论: 6 | 👍: 1)
    - **摘要**: 新版本 v2.1.154 的回归Bug。在通过“cloud bridge / remote control”驱动的会话中，重放时重新发送了已持久化的空文本和已签名的 thinking 块，触发了 400 错误。
    - **链接**: https://github.com/anthropics/claude-code/issues/63394

5.  **#63393: [BUG] 后台任务完成时，与Opus 1M上下文交互导致400错误**
    - **重要性**: 🔥🔥🔥🔥 (评论: 2 | 👍: 0)
    - **摘要**: 在 Opus 4.8 (1M 上下文) 上启用扩展思维后，当 `run_in_background` 的 Bash 任务完成并将结果注入回对话时，会话立即因 400 错误而死机。
    - **链接**: https://github.com/anthropics/claude-code/issues/63393

6.  **#30492: [功能请求] 实时引导：在中途重定向 Claude 的优先消息通道**
    - **重要性**: 🔥🔥🔥🔥 (评论: 16 | 👍: 21)
    - **摘要**: 当 Claude Code 在执行复杂、多步骤工作流时，用户希望能发送一个高优先级消息中途进行干预和重定向，而无需等待当前步骤结束或中断整个流程。
    - **链接**: https://github.com/anthropics/claude-code/issues/30492

7.  **#27897: [BUG] Windows 11 预览版上 Cowork VM 完全损坏**
    - **重要性**: 🔥🔥🔥🔥 (评论: 35 | 👍: 14)
    - **摘要**: 在 Windows 11 Insider 版本上，Claude Code Desktop App的Cowork功能完全无法使用，根因是 v1.1.4010 版本中的 EXDEV 重命名 Bug。
    - **链接**: https://github.com/anthropics/claude-code/issues/27897

8.  **#53442: [BUG] Cowork Google Drive MCP 无法访问工作组共享盘内容**
    - **重要性**: 🔥🔥🔥 (评论: 17 | 👍: 19)
    - **摘要**: 通过 Cowork 使用 Google Drive MCP 时，无法看到企业版Workspace中共享盘里的任何内容，影响团队协作。
    - **链接**: https://github.com/anthropics/claude-code/issues/53442

9.  **#16288: [BUG] 插件 hooks 未从外部 hooks.json 文件加载**
    - **重要性**: 🔥🔥🔥 (评论: 20 | 👍: 15)
    - **摘要**: 对于插件开发者而言，一个关键Bug。在插件的 `plugin.json` 中引用的外部 `hooks.json` 文件中的钩子（Hooks）无法被加载和执行，导致插件机制无效。
    - **链接**: https://github.com/anthropics/claude-code/issues/16288

10. **#61056: [BUG] API 错误：请求违反使用政策 (触发网络相关防护)**
    - **重要性**: 🔥🔥🔥 (评论: 4 | 👍: 5)
    - **摘要**: 用户在执行某些开发任务时，被 Claude Code 的错误地判定为违反网络安全政策，导致请求被拒绝。这可能是安全过滤器的误报。
    - **链接**: https://github.com/anthropics/claude-code/issues/61056

## 重要 PR 进展

1.  **#63382: 修复 Hookify 测试示例语义**
    - **状态**: OPEN
    - **内容**: 修正了关于钩子测试的文档示例，使其更准确地反映引擎实际的子字符串匹配行为。
    - **链接**: https://github.com/anthropics/claude-code/pull/63382

2.  **#63262: 功能: 添加侧边线程插件 (/thread 和 /back)**
    - **状态**: CLOSED (Merged?)
    - **内容**: 引入一个通用插件，允许用户在 Claude Code 对话中创建和关闭类似 Slack 的“侧边线程”，以便在不干扰主对话的情况下进行额外讨论。
    - **链接**: https://github.com/anthropics/claude-code/pull/63262

3.  **#63189: 在 `/commit-push-pr` 命令中使用 PR 模板**
    - **状态**: OPEN
    - **内容**: 改进自动化工作流，在生成 Pull Request 时，自动读取仓库的 `.github/PULL_REQUEST_TEMPLATE.md` 模板，使生成的 PR 描述更符合项目规范。
    - **链接**: https://github.com/anthropics/claude-code/pull/63189

4.  **#62941: 修复(ralph-wiggum): 从 transcript 中正确读取最后一条助手消息**
    - **状态**: OPEN
    - **内容**: 修复了“Ralph Wiggum”停止钩子的一个Bug，该钩子之前只读取 transcript 的最后一行的最后一段文本，导致在多内容块（如 thinking, text, tool_use）的场景下无法正确判断，从而导致会话被错误地终止。
    - **链接**: https://github.com/anthropics/claude-code/pull/62941

## 功能需求趋势

- **实时干预与引导**: 社区强烈渴望在执行复杂任务时，拥有**高优先级的“中途打断和重定向”能力** (#30492)，这体现了开发者对自主Agent可控性的核心需求。
- **动态工作流与编排**: 尽管 v2.1.154 已发布“动态工作流”功能，但该功能是目前最大的亮点，预示着未来AI开发工具从单线程助手向**多Agent并行的复杂任务编排中心**的演进方向。
- **更强的 IDE 集成**: 针对 VS Code 扩展的多项Bug报告（#62564）表明，**IDE级别的深度集成**（如内存设置、权限控制）是开发者日常工作流程的关键，需要更高的稳定性和功能性。
- **Cowork 功能的成熟**: 大量围绕Cowork的Bug报告（Windows兼容性#27897、Google Drive #53442、VHDX #61872）表明，这个**协作式虚拟机功能**正在被广泛使用，但稳定性、平台兼容性和集成工具的深度仍需加强。
- **更精细的权限与安全控制**: 关于权限默认模式被静默覆盖（#62205）和安全过滤器误报（#61056）的Bug，反映了社区需要一个**更透明、可控且智能的安全和权限系统**，以避免意外中断开发。

## 开发者关注点

- **“扩展思维”稳定性是头等大事**: **超过5个关于“thinking blocks cannot be modified”的400错误的活跃Issue**，以及大量点赞和评论，清晰地表明了“扩展思维”功能的会话持久化和恢复机制存在严重且普遍的问题，是当前社区最大的痛点和开发者的首要关注点。这不仅影响体验，更会导致大量工作成果丢失。
- **版本回退风险**: 多个Bug报告指出，自动或手动版本更新会“破坏”旧会话（#63322），且有新功能带来新回归（#63394）。这让开发者对版本升级持谨慎态度，担心更新会影响正在进行的复杂任务。
- **进程失控与资源耗尽**: 报告“Claude Code 在17秒内产出了3000个bash进程” (#62193) 是一个令人震惊的信号，反映出 AI Agent 在未受约束的情况下可能对本地系统造成灾难性影响。这是关于**安全沙箱和资源限制**的警钟。
- **Windows 平台体验亟待改善**: 针对 Windows (特别是 Cowork 和 WSL) 的多个严重 Bug（#27897, #53442, #61872）表明，Windows 平台的稳定性和功能完整性显著落后于 macOS，是许多开发者放弃或暂停使用的重要原因。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

好的，这是为您生成的 2026-05-29 OpenAI Codex 社区动态日报。

---

# OpenAI Codex 社区动态日报 | 2026-05-29

## 今日速览

昨日社区最显著的动态是 Chrome 插件的区域可用性问题在多个 Issue 中被集中反馈，尤其在 Windows 平台与欧盟/挪威地区。与此同时，开发团队围绕 **zsh fork 统一执行**和**云配置管理**提交了多个 PR，显示出对安全性与企业级部署能力的持续投入。此外，社区对 **“计划模式”** 和**配置污染**的优化呼声仍保持高位，表明用户在追求更可控的自动化和更清晰的配置管理。

## 版本发布

**rust-v0.135.0** (0.135.0)

- **`codex doctor` 诊断增强**: 现在支持报告更丰富的环境、Git、终端、应用服务器及线程清单诊断信息，用于支持案例分析。
- **远程连接信息**: 当 TUI 通过远程传输连接时，`/status` 命令会显示远程连接详情和服务器版本。
- **Vim 模式**: 引入 Vim 模式支持（具体细节未提及，详情可查阅 PR）。

## 社区热点 Issues

以下整理了10个最值得关注的 Issue，涵盖新出现的 Bug 与长期存在的功能需求。

1.  **[#21598] Windows Desktop: Chrome plugin unavailable in Norway/EU**
    - **重要性**: ⭐⭐⭐⭐⭐ 影响 EU/挪威用户的 **@Chrome** 插件可用性，即使扩展显示已连接也无法使用。可能是区域级控策略问题，社区在25条评论中高度关注。
    - **链接**: [Issue #21598](https://github.com/openai/codex/issues/21598)

2.  **[#24969] Windows Store Codex Browser Use only exposes IAB**
    - **重要性**: ⭐⭐⭐⭐ **新 Bug**。Windows Store 版本的 Codex 浏览器使用功能被企业策略限制，只能使用默认的 IE 模式浏览器，无法访问网络，且 Chrome 扩展后端也不可用。
    - **链接**: [Issue #24969](https://github.com/openai/codex/issues/24969)

3.  **[#10561] [Feature Request] Plan Mode: Add "Copy Plan" button**
    - **重要性**: ⭐⭐⭐⭐⭐ **长期高赞需求**。社区强烈希望在“计划模式”中加入“复制计划”按钮和“清除上下文并开始编码”的工作流，以弥合计划与执行之间的鸿沟。👍: 35。
    - **链接**: [Issue #10561](https://github.com/openai/codex/issues/10561)

4.  **[#14601] Prevent Configuration Pollution: Separate `projects.xxxx.trusted_level`**
    - **重要性**: ⭐⭐⭐⭐⭐ **高赞待解决**。用户认为项目级别的 `trusted_level` 等配置不应写入全局 `config.toml`，造成配置污染。👍: 37，显示了社区对清晰配置管理的强烈诉求。
    - **链接**: [Issue #14601](https://github.com/openai/codex/issues/14601)

5.  **[#24391] Windows sandbox: spawn setup refresh fails**
    - **重要性**: ⭐⭐⭐⭐ 升级至 CLI 0.133.0 后，Windows 用户在沙箱中执行 shell 命令时遇到 `spawn setup refresh` 失败问题，严重影响 Windows 用户的核心开发体验。👍: 15。
    - **链接**: [Issue #24391](https://github.com/openai/codex/issues/24391)

6.  **[#24233] Google Drive plugin fails to create files: “No permission”**
    - **重要性**: ⭐⭐⭐⭐ 连接成功但创建文件失败，报“无权限”。问题已持续数日，表明 Google Drive 插件的文件写入功能存在无法自动处理的权限问题。
    - **链接**: [Issue #24233](https://github.com/openai/codex/issues/24233)

7.  **[#21791] Chrome plugin mention is selectable but not exposed in active tools**
    - **重要性**: ⭐⭐⭐ 一个令人困惑的 UI/运行时不同步问题。用户可以输入 `[@chrome]` 但是模型无法实际调用该工具，指示了底层工具发现机制的缺陷。
    - **链接**: [Issue #21791](https://github.com/openai/codex/issues/21791)

8.  **[#13165] I want to be able to specify the shell Codex uses**
    - **重要性**: ⭐⭐⭐ **高频需求**。Windows 用户希望能在 Codex CLI 中指定使用 MinGW Bash 而非默认的 PowerShell，以解决兼容性问题。👍: 21。
    - **链接**: [Issue #13165](https://github.com/openai/codex/issues/13165)

9.  **[#18299] Display dot files and folders (.agents/.codex etc)**
    - **重要性**: ⭐⭐⭐ **高频功能缺失**。右侧文件浏览器无法显示点文件或文件夹，对于需要查看 `.codex` 等项目配置文件的开发者极为不便。👍: 19。
    - **链接**: [Issue #18299](https://github.com/openai/codex/issues/18299)

10. **[#24951] multi_agent wait_agent can block for ~7.5h**
    - **重要性**: ⭐⭐⭐ **新发现的子代理 Bug**。`wait_agent` 超时参数 `timeout_ms` 在运行时卡顿时无法生效，导致子代理可能阻塞长达数小时。影响自动化工作流。
    - **链接**: [Issue #24951](https://github.com/openai/codex/issues/24951)

## 重要 PR 进展

以下是昨日社区最关注的10个 Pull Request，涉及安全、架构和核心功能。

1.  [#24982] fix: honor parent approvals for intercepted execs
    - **功能/修复**: 修复 zsh fork 统一执行流程中，子进程需要用户重复审批父进程已授权的操作的问题。提升用户体验。
    - **链接**: [PR #24982](https://github.com/openai/codex/pull/24982)

2.  [#24981] fix: sandbox zsh fork unified exec trampoline
    - **功能/修复**: 修复沙箱 zsh fork 统一执行模式下的“跳板”进程问题，确保在要求权限升级时，外层跳板保持正确沙箱。
    - **链接**: [PR #24981](https://github.com/openai/codex/pull/24981)

3.  [#22668] Wire managed MITM CA trust into child env
    - **功能/修复**: 将托管 MITM 代理的 CA 证书信任注入到启动的子进程环境中，使子进程（如 `curl`）能信任 MITM 代理的证书。
    - **链接**: [PR #22668](https://github.com/openai/codex/pull/22668)

4.  [#24622] Switch runtime to cloud config bundle
    - **功能/修复**: **大规模重构**的一部分（PR 5/5）。将运行时配置加载切换到统一的云配置包，并移除旧版 `codex-cloud-requirements` 路径。
    - **链接**: [PR #24622](https://github.com/openai/codex/pull/24622)

5.  [#23976] feat(tui): render next prompt suggestions [3 of 3]
    - **功能/修复**: TUI 终端用户界面支持在合适时机请求并显示“下一个提示建议”的幽灵文本，无需用户主动提交。提升交互流畅性。
    - **链接**: [PR #23976](https://github.com/openai/codex/pull/23976)

6.  [#24127] feat(app-server): add next prompt suggestion RPC [2 of 3]
    - **功能/修复**: 为应用服务器增加 `thread/suggestNextPrompt` RPC 接口，作为请求下一个建议提示的 v2 API。
    - **链接**: [PR #24127](https://github.com/openai/codex/pull/24127)

7.  [#24126] feat(next-prompt): add suggestion engine [1 of 3]
    - **功能/修复**: 为“下一个提示建议”功能建立核心引擎，负责提示构建、抑制规则和上下文提取。
    - **链接**: [PR #24126](https://github.com/openai/codex/pull/24126)

8.  [#24989] feat(app-server): add remote control pairing start
    - **功能/修复**: 增加实验性的远程控制配对启动接口 (`remoteControl/pairing/start`)，允许桌面端生成主机侧配对信息。
    - **链接**: [PR #24989](https://github.com/openai/codex/pull/24989)

9.  [#24987] feat(tui): hide background MCP startup status
    - **功能/修复**: TUI 隐藏 MCP 服务器的后台初始化状态，避免在启动时长时间阻塞用户界面。
    - **链接**: [PR #24987](https://github.com/openai/codex/pull/24987)

10. [#24124] feat(tui): add usage report command [4 of 4]
    - **功能/修复**: 增加 `/usage` 系列命令，允许用户在 TUI 中本地查看每日/每周的 token 消耗情况。
    - **链接**: [PR #24124](https://github.com/openai/codex/pull/24124)

## 功能需求趋势

通过分析昨日活跃的 Issues，社区最关注的功能方向如下：

- **配置管理与污染**：用户希望 Codex 的配置（尤其是 `config.toml`）能更清晰，避免项目级设置污染全局配置。
- **会话与上下文管理**：对“计划模式”的改进、编辑历史消息（不仅是最后一条）以及防止会话上下文丢失的需求持续增长。
- **工具集成与可用性**：Chrome 插件、Google Drive 插件等第三方工具的区域可用性、自动发现和稳定性是当前用户的痛点与核心关注点。
- **沙箱与安全性**：Windows 沙箱的稳定性、用户对 shell 执行环境的控制（如选择特定 shell）需求，以及对安全策略（如 `deny-read`）的精细化控制。
- **子代理/多智能体**：随着 `multi_agent` 功能的成熟，等待机制和超时处理的可靠性成为新的关注点。

## 开发者关注点

1.  **Windows 平台兼容性**：开发者对 Windows 沙箱的稳定性、PowerShell 兼容性问题以及 Windows Store 版本的功能限制有诸多不满，这是开发团队需要优先解决的痛点。
2.  **环境一致性问题**：用户强烈期望能统一开发环境（例如使用 MinGW Bash），减少在不同操作系统或配置下产生不一致行为的困扰。
3.  **UI/UX 反馈**：用户希望有一个清晰的“计划 -> 执行”工作流，并且能快速编辑历史对话，而非仅仅只能“分叉”（fork）对话，这显示出用户对轻量级编辑功能的渴望。
4.  **工具透明度**：诸如 Chrome 插件“显示已连接但无法使用”或“UI 可选但运行时不可用”的问题让开发者感到困惑，他们希望在工具的功能性和可用性方面获得更一致、更透明的反馈。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

好的，作为专注于 AI 开发工具的技术分析师，以下是根据您提供的 GitHub 数据生成的 2026-05-29 的 Gemini CLI 社区动态日报。

---

# Gemini CLI 社区动态日报 | 2026-05-29

## 今日速览

今天最核心的动态是项目接连发布了两个补丁版本，旨在修复 PTY 终端在缩放操作时导致原生崩溃的严重问题，该补丁被同时反向移植到稳定版（v0.44.1）和预览版（v0.45.0-preview.1）。与此同时，社区关于 Agent 挂起、子代理行为异常以及内存系统优化的讨论持续升温，显示出开发者对 CLI 稳定性和 Agent 智能度的极高期望。

## 版本发布

在过去 24 小时内，Gemini CLI 发布了三个版本：

- **[v0.45.0-preview.1](https://github.com/google-gemini/gemini-cli/releases/tag/v0.45.0-preview.1)**: 这是一个针对预览版的最新补丁。
    - **修复**: 反向移植了一个关键修复 (`bd53951`)，该修复能防止 PTY 终端在大小调整（resize）时因原生崩溃而导致 CLI 挂掉。这是对终端环境稳定性的重要改进。

- **[v0.45.0-nightly.20260528.g5cac7c10f](https://github.com/google-gemini/gemini-cli/releases/tag/v0.45.0-nightly.20260528.g5cac7c10f)**: 最新的日构建版本。
    - **修复**: 修复了 Vim 模式下，按某些无映射键（unmapped keys）时 CLI 会报错的问题，提升了 Vim 用户的兼容性体验。

- **[v0.44.1](https://github.com/google-gemini/gemini-cli/releases/tag/v0.44.1)**: 稳定版的重要补丁。
    - **修复**: 同样反向移植了修复 PTY resize 崩溃的核心补丁 (`bd53951`)，为稳定版用户带来了相同的稳定性提升。

**分析**: 团队对 `bd53951` 修复的积极反向移植，表明 PTY resize 崩溃是影响许多用户的高优问题。稳定版用户会从这次更新中受益。

## 社区热点 Issues

以下是当前社区讨论和关注度最高的 10 个 Issues：

1.  **[#21409 Generalist agent hangs (通用 Agent 挂起)](https://github.com/google-gemini/gemini-cli/issues/21409)**
    - **重要性**: P1 级别 Bug，用户反馈 `gemini-cli` 在执行简单任务时，调用通用Agent（Generalist agent）就会无限期挂起（等待超过一小时），严重阻塞工作流。社区对此反馈强烈，获赞 8 个。
    - **社区反应**: 用户找到了临时解决方案：手动指示模型不要委派任务给子代理（sub-agents）。这表明 Agent 之间的调度逻辑存在严重缺陷。

2.  **[#22323 Subagent recovery after MAX_TURNS is reported as GOAL success (子代理超时后被谎报为成功)](https://github.com/google-gemini/gemini-cli/issues/22323)**
    - **重要性**: P1 级别 Bug。子代理（如 `codebase_investigator`）在达到最大轮数限制后，未能正确报告超时失败，反而谎报为达成目标（GOAL）。这会误导用户和主代理，导致错误决策。
    - **社区反应**: 用户 `matei-anghel` 提供了详细的问题复现案例，显示子代理的“成功”报告与实际情况严重不符。

3.  **[#25166 Shell command execution gets stuck with "Waiting input" after command completes (Shell 命令执行完毕后卡在等待输入)](https://github.com/google-gemini/gemini-cli/issues/25166)**
    - **重要性**: P1 级别 Bug。一个非常常见的痛点：极简单的 Shell 命令执行完成后，CLI 界面仍显示“等待用户输入”，导致流程假死。
    - **社区反应**: 用户 `rnett` 反馈该问题反复出现，严重影响脚本化工作流的可靠性。

4.  **[#24353 Robust component level evaluations (鲁棒的组件级评估)](https://github.com/google-gemini/gemini-cli/issues/24353)**
    - **重要性**: 这是一个 Epic Issue，旨在建立更完善的组件级自动化评估体系，以衡量模型和 Agent 的质量。这是保证项目长期稳定和迭代质量的核心基础设施问题。
    - **社区反应**: 目前主要为内部维护者参与，但这类基础设施对社区贡献者理解项目质量目标至关重要。

5.  **[#22745 Assess the impact of AST-aware file reads, search, and mapping (评估 AST 感知文件操作的影响)](https://github.com/google-gemini/gemini-cli/issues/22745)**
    - **重要性**: 一个探索性 Epic。研究是否可以通过引入“抽象语法树（AST）”感知能力来提升文件搜索、读取和代码映射的精度。
    - **社区反应**: 获赞 1 个。社区和开发者都期望通过更智能的文件理解来减少 Agent 不必要的 Token 消耗和提高导航成功率。这是一个极具潜力的功能方向。

6.  **[#21968 Gemini does not use skills and sub-agents enough (Gemini 不主动使用技能和子代理)](https://github.com/google-gemini/gemini-cli/issues/21968)**
    - **重要性**: Agent 的自主决策能力问题。用户反馈即便配置了自定义技能（如 Git、Gradle），Gemini 也很少主动调用，需要用户明确指令才会使用。
    - **社区反应**: 这是一个反馈较多的行为问题，意味着 Agent 的“主动性”和“规划能力”还有很大提升空间。

7.  **[#26525 Add deterministic redaction and reduce Auto Memory logging (添加确定性脱敏并减少自动记忆日志)](https://github.com/google-gemini/gemini-cli/issues/26525)**
    - **重要性**: 安全和隐私方面的 Bug。`Auto Memory` 功能在读取本地会话记录时，会将内容发送给模型处理以提取记忆，但脱敏操作发生在模型读取之后，存在潜在的信息泄露风险。
    - **社区反应**: 这是一个重要的安全发现，社区对此类数据处理的透明度要求很高。

8.  **[#21983 Browser subagent fails in Wayland (浏览器子代理在 Wayland 下失败)](https://github.com/google-gemini/gemini-cli/issues/21983)**
    - **重要性**: P1 级别 Bug。`Browser Agent` 在 Wayland 显示服务器环境下完全失效，直接影响了 Linux 发行版用户的体验。
    - **社区反应**: 这是 Linux 用户的常见痛点，Wayland 的支持不足会严重限制 CLI 的跨平台可用性。

9.  **[#22672 Agent should stop/discourage destructive behavior (Agent 应制止/劝阻破坏性行为)](https://github.com/google-gemini/gemini-cli/issues/22672)**
    - **重要性**: 一个重要的安全设计问题。Agent 在执行任务时，可能会使用如 `git reset --force` 等危险命令或进行数据库操作，而用户希望 Agent 本身能识别并劝阻此类高风险操作。
    - **社区反应**: 这是一个关于 Agent 安全护栏的典型需求。用户 `abhipatel12` 清晰地描述了 Agent 缺乏“自我保护”意识的问题。

10. **[#22267 Browser Agent ignores settings.json overrides (浏览器代理忽略 settings.json 配置覆盖)](https://github.com/google-gemini/gemini-cli/issues/22267)**
    - **重要性**: 配置系统的 Bug。用户在 `settings.json` 中的配置（如 `maxTurns`）无法对 `Browser Agent` 生效，导致用户定制化的能力受限。
    - **社区反应**: 这是一个直接的配置失效问题，表明 `Browser Agent` 的初始化过程存在缺陷。

## 重要 PR 进展

以下是过去 24 小时内重要的 Pull Requests 进展：

1.  **[#27535 fix(patch): cherry-pick ... to create version 0.45.0-preview.1](https://github.com/google-gemini/gemini-cli/pull/27535)**
    - **内容**: **已关闭**。 将核心 PTY crash 修复 (`bd53951`) 反向移植到预览版分支，生成了 v0.45.0-preview.1 版本。

2.  **[#27534 fix(patch): cherry-pick ... to release/v0.44.0-pr-27496](https://github.com/google-gemini/gemini-cli/pull/27534)**
    - **内容**: **已关闭**。 将相同的修复反向移植到稳定版分支以创建 v0.44.1。**注意**: 此 PR 存在合并冲突，需要手动解决。这表明在反向移植不同分支时，代码有所差异。

3.  **[#27496 fix(core): harden PTY resize against native crashes](https://github.com/google-gemini/gemini-cli/pull/27496)**
    - **内容**: **已关闭**。 这是本次所有修复的根 PR。核心思路是通过实现“纵深防御”策略，解决 `node-pty` 在进程退出期间进行 UI 缩放导致的 `libc++abi: terminating` 原生崩溃问题。

4.  **[#27531 fix(core): handle EBADF error when resizing a closed PTY](https://github.com/google-gemini/gemini-cli/pull/27531)**
    - **内容**: **已关闭**。 修复了在平铺窗口管理器或类似 Zellij 的终端复用器中，尝试缩放一个已关闭的 PTY 时，由 `EBADF` (Bad File Descriptor) 错误导致的崩溃问题。这是对 PTY 稳定性的一系列增强修复之一。

5.  **[#27529 Handle errors safely in shellExecutionService](https://github.com/google-gemini/gemini-cli/pull/27529)**
    - **内容**: **Open**。 与 #27531 问题类似，在 `ShellExecutionService.resizePty` 中捕获了 `EBADF` 异常，并优雅地返回，避免了应用整体崩溃。

6.  **[#26559 feat(core): implement OpenID Connect (OIDC) auth provider for remote agents](https://github.com/google-gemini/gemini-cli/pull/26559)**
    - **内容**: **已关闭**。 实现了 OpenID Connect (OIDC) 认证提供商，使 Gemini CLI 能够通过 A2A (Agent-to-Agent) 协议安全地连接到企业级的远程 Agent。这是向企业级应用迈出的重要一步。

7.  **[#26536 feat(core): add system-wide fallback for ripgrep detection](https://github.com/google-gemini/gemini-cli/pull/26536)**
    - **内容**: **已关闭**。 为 ripgrep 的检测增加了系统级别的回退机制。如果 CLI 捆绑的 ripgrep 二进制文件缺失（常见于特定安装环境），CLI 会自动尝试使用系统全局安装的 ripgrep。

8.  **[#22590 fix(cli): include all Executing subagent tool calls in useToolScheduler state](https://github.com/google-gemini/gemini-cli/pull/22590)**
    - **内容**: **Open**。 修复了子代理工具调用状态显示不全的问题。原本 UI 可能无法正确显示所有“执行中”的子代理调用，现在会全部展示，提高了状态透明度。

9.  **[#26088 fix(cli): add F10 fallback for approval mode cycling](https://github.com/google-gemini/gemini-cli/pull/26088)**
    - **内容**: **Open**。 为循环切换“审批模式”增加了 `F10` 键作为备选快捷键。这解决了 Windows 或 WezTerm 终端用户因 `Shift+Tab` 组合键无法被正确解析而无法切换模式的问题。

10. **[#27455 feat(core): Add Amazon URL parsing and metadata extraction](https://github.com/google-gemini/gemini-cli/pull/27455)**
    - **内容**: **Open**。 为 `web-fetch` 工具增加了 Amazon 短链接（如 `amzn.in`）的解析和商品元数据提取功能。这进一步增强了 Agent 的电商场景处理能力。

## 功能需求趋势

从社区动态中，我们可以提炼出以下几个核心功能需求趋势：

1.  **Agent 智能与自主性 (Agent Intelligence & Autonomy)**:
    - **更主动的技能调用**: 社区期望 Agent 能根据上下文主动判断并调用已配置的自定义技能，而非需要用户提示。
    - **更可靠的子代理调度**: 改善通用Agent挂起和子代理超时后误报的问题，让多Agent协作更流畅、透明。
    - **更强的自我认知**: 能像“专家助手”一样，清楚自己的能力和限制，并主动规避高风险操作。

2.  **稳定性与可靠性 (Stability & Reliability)**:
    - **PTY 处理**: 修复终端缩放、命令执行完成后的假死等问题，是当前最迫切的稳定性需求。
    - **配置系统健壮性**: 确保所有 Agent 和功能能严格遵守 `settings.json` 中的配置。

3.  **安全与隐私 (Security & Privacy)**:
    - **确定性脱敏**: 对 `Auto Memory` 等涉及本地数据处理的特性，要求在数据传输到模型前就进行脱敏，而非事后处理。
    - **行为安全护栏**: Agent 需要具备识别和劝阻高风险的命令（如 `--force` 操作）的能力。

4.  **智能代码理解 (Intelligent Code Understanding)**:
    - **AST 感知**: 社区和开发者都在探索通过 AST 来实现更精准的文件读取、搜索和代码映射，以减少 Token 浪费并提高 Agent 处理代码的精确性。

## 开发者关注点

开发者们最关注，且反应最强烈的痛点主要包括：

1.  **Agent 挂起与虚假成功反馈**: 这是最严重的功能阻断问题。Agent 要么永久卡住（#21409），要么在出错后谎报成功（#22323），这完全破坏了用户对 AI 助手的基本信任。
2.  **Shell 执行后的假死**: 命令执行完毕，UI 却显示“等待输入”，导致工作流中断。这是一个高频、影响面广的体验问题。
3.  **浏览器和子代理的跨平台兼容性**: Wayland 环境下的浏览器Agent失效、某些终端下快捷键冲突等，严重影响了 Linux 和部分 Windows 用户的体验。
4.  **Agent 使用技能和工具的“意愿”不足**: 用户花时间配置了技能，但 Agent 却弃之不用，这极大削弱了自定义扩展的实用价值，是开发者和高级用户的核心痛点。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

好的，作为一名专注于 AI 开发工具的技术分析师，我已根据您提供的 GitHub 数据，为您生成了 2026-05-29 的 GitHub Copilot CLI 社区动态日报。

---

# GitHub Copilot CLI 社区动态日报 | 2026-05-29

## 今日速览

今日，Copilot CLI 发布了两个小版本更新（v1.0.56-0 和 v1.0.55），主要修复了会话上下文窗口层级选择持久化的问题，并新增了对 Claude Opus 4.8 的支持。社区方面，一个关于会话状态回放导致 API 请求失败的严重 Bug 成为关注焦点，同时关于 MCP 服务器集成、上下文窗口管理以及“计划模式”行为不符预期的问题也在持续发酵。

## 版本发布

### v1.0.56-0
- **发布时间**: 2026-05-29
- **更新内容**:
    - **改进**: 受信任文件夹确认消息现在会明确提示权限可能在整个会话期间被记住。
    - **修复**: 修复了上下文窗口层级选择持久化问题，现在它会在会话事件中持久存在，并能在仅 SDK 恢复路径下生存，确保层级派生的限制在请求、压缩和截断时被重新应用。
    - **重要**: 该版本专门修复了一个导致上下文窗口设置丢失的 Bug，对于依赖大上下文窗口（如 1M tokens）进行深度工作的用户至关重要。

### v1.0.55
- **发布时间**: 2026-05-28
- **更新内容**:
    - **限制**: 使用基于 Token 计费的免费和学生计划用户现在被限制为“自动模型选择”，并在模型选择器中显示说明。
    - **新功能**: 在会话使用摘要中报告 Claude 模型的思考 (reasoning) Token 使用情况。
    - **新功能**: 新增对 Claude Opus 4.8 模型的支持。
    - **修复**: 修复了加载旋转动画在某些情况下一直卡住的问题。

## 社区热点 Issues

1.  **`#3560` & `#3559` & `#3558`: 会话状态回放导致的“重复项”错误**
    - **重要性**: 极高。这是一个集群性 Bug，多名用户报告在工具/函数调用后，CLI 突然开始不断地返回 `websocket_error: Duplicate item found` 错误，导致工作流中断。核心问题是会话状态（`fc_call_*`）在回放时被重复提交。
    - **社区反应**: 社区反应迅速，多个用户几乎同时创建了 Issue (#3558, #3559, #3560)，并提供了详细的复现步骤和日志，表明这是当前影响最大的问题。开发团队需要紧急定位并修复。
    - **链接**: [#3560](https://github.com/github/copilot-cli/issues/3560), [#3559](https://github.com/github/copilot-cli/issues/3559), [#3558](https://github.com/github/copilot-cli/issues/3558)

2.  **`#223`: 组织级Token缺少“Copilot Requests”权限**
    - **重要性**: 高。这是企业级用户的硬性需求。企业希望使用组织的 Fine-Grained Token 来管理自动化操作，但“Copilot Requests”权限选项在创建组织级Token时不可见，迫使企业使用个人 PAT，违背了安全和管理规范。
    - **社区反应**: 该 Issue 自 2025年10月提出以来，获得了73个 👍 和27条评论，持续受到企业用户的关注和支持。
    - **链接**: [#223](https://github.com/github/copilot-cli/issues/223)

3.  **`#1274`: CLI 频繁收到 400 错误（无效请求体）**
    - **重要性**: 高。表明客户端或服务端可能存在校验逻辑缺陷。用户报告在约95%的对 diff 文件进行代码审查的尝试中都失败了，严重影响了核心功能的使用。
    - **社区反应**: 24条评论，用户积极提供 debug 日志，但问题似乎尚未定位，可能是一个比较隐蔽的边界情况。
    - **链接**: [#1274](https://github.com/github/copilot-cli/issues/1274)

4.  **`#3539`: 系统/工具占用 73% 上下文窗口，导致首次对话即自动压缩**
    - **重要性**: 高。这个问题暴露了当前多 MCP 服务器和插件配置下的严重性能瓶颈。用户在首次输入时就触发自动压缩，会丢失对话的连贯性，并可能错过关键上下文。这对于重度使用 MCP 和插件的用户来说是一个巨大痛点。
    - **社区反应**: 虽然评论不多，但问题描述清晰，影响重大。
    - **链接**: [#3539](https://github.com/github/copilot-cli/issues/3539)

5.  **`#1044`: 非交互模式 (`copilot --acp`) 不支持斜杠命令**
    - **重要性**: 中/高。对于在编辑器（如 Zed）中集成 Copilot CLI 作为 Agent 的用户来说，这是一个关键缺失。无法使用 `/explain`、`/fix` 等斜杠命令限制了其作为代码助手的灵活性和功能。
    - **社区反应**: 有 15 条评论，表明有相当一部分用户受此影响。
    - **链接**: [#1044](https://github.com/github/copilot-cli/issues/1044)

6.  **`#1654`: “计划模式”被持续忽略**
    - **重要性**: 高。这是一个用户体验问题。用户设定 `COPILOT-INSTRUCTIONS.md` 并选择“计划模式”，希望 AI 先给出方案，但 AI 仍会直接生成大量代码，消耗 Token 并打乱工作流程，违背了用户对“计划模式”的核心功能预期。
    - **社区反应**: 用户反复报告，表明这是一个长期未解决的痛点。
    - **链接**: [#1654](https://github.com/github/copilot-cli/issues/1654)

7.  **`#3527`: `contextTier` 设置不生效，会话默认使用 200K 上下文**
    - **重要性**: 中/高。该 Bug 导致用户即使通过 `/model` 选择了大上下文模型（如 1M tokens），新建立的会话仍会回退到 200K，使得新模型的优势无法发挥。这直接影响了依赖大上下文进行复杂任务处理的用户。
    - **社区反应**: 该 Issue 于2天前创建，评论指出该设置在 `settings.json` 中被持久化但不应用，是一个明确的配置加载 Bug。
    - **链接**: [#3527](https://github.com/github/copilot-cli/issues/3527)

8.  **`#3355`: 请求为 Claude Opus 4.6 开放更大的上下文窗口配置（200K -> 1M）**
    - **重要性**: 高。这是一个模型能力与 CLI 限制的冲突。Claude Opus 4.6 模型原生支持 1M 上下文，但 CLI 将其上限控制在 200K，导致深度技术会话中频繁触发自动压缩。用户希望能有配置项来解锁模型的全部能力。
    - **社区反应**: 用户通过此 Issue 表达了强烈的功能需求。
    - **链接**: [#3355](https://github.com/github/copilot-cli/issues/3355)

9.  **`#3207`: 扩展可绕过私有 MCP Registry 安装 MCP 服务器**
    - **重要性**: 高。这是一个企业级安全风险。VS Code 扩展能绕过组织的私有 MCP Registry 审批流程，安装未授权的 MCP 服务器，可能导致数据泄露或引入恶意代码。该 Issue 虽已关闭，但其背后的治理问题值得高度关注。
    - **社区反应**: 2条评论，但问题本身非常关键。
    - **链接**: [#3207](https://github.com/github/copilot-cli/issues/3207)

10. **`#39`: 与 VS Code 的 MCP 设置集成**
    - **重要性**: 中。这是一个提升一致性和易用性的功能请求。用户期望在 VS Code 中运行 Copilot CLI 时，能够自动加载 VS Code 中已经配置好的 MCP 信息，避免重复配置。
    - **社区反应**: 获得 17 个 👍，表明用户对跨工具集成 MCP 配置有较高期待。
    - **链接**: [#39](https://github.com/github/copilot-cli/issues/39)

## 重要 PR 进展

**无。** 根据今日数据，过去24小时内没有新的 Pull Request 更新。

## 功能需求趋势

从近期 Issue 中可以提炼出以下社区关注的功能方向：

1.  **模型与上下文管理**:
    -   **呼声最高**: 配置更大的上下文窗口，尤其是对 Claude Opus 等支持 1M 上下文的模型。
    -   **直接相关**: 持久化上下文窗口层级选择 (`#3527`) 和允许配置上下文窗口大小 (`#3355`)。
2.  **MCP 生态与集成**:
    -   **深度整合**: 请求将 VS Code 的 MCP 设置与 CLI 同步 (`#39`)。
    -   **精细化管理**: 需求包括在 `/mcp show` 菜单中启用/禁用 MCP 服务器 (`#3564`)，以及让特定 MCP 服务器（如 `github-mcp-server`）在启动时自动启用 (`#3548`)。
    -   **安全治理**: 企业用户强烈要求能够限制扩展绕过私有 MCP Registry 安装 MCP 服务器 (`#3207`)。
3.  **工具与命令增强**:
    -   **非交互模式**: 强烈希望 `--acp` 模式支持斜杠命令 (`#1044`)。
    -   **计划模式**: 要求 AI 严格遵循“计划模式”的指令，不主动生成代码 (`#1654`)。
    -   **安全检查**: 社区提议增加 `security-review` 命令用于自动化漏洞检测 (`#1133`)。
4.  **企业级特性**:
    -   **权限管理**: 组织级Token需要“Copilot Requests”权限支持 (`#223`)。
    -   **MCP Registry**: 确保私有 Registry 的规则被严格执行，防止被绕过 (`#3207`)。

## 开发者关注点

-   **稳定性与可靠性**: 开发者在日常工作中对 CLI 的稳定性要求极高。“会话状态回放导致重复错误” (`#3558`, `#3559`, `#3560`) 和“频繁 400 错误” (`#1274`) 这类直接导致工作流中断的 Bug 是当前最大的痛点，需要优先解决。
-   **上下文窗口利用**: 随着模型能力的提升，开发者希望 CLI 能释放模型的全部潜力。当前 200K 的上限对深度上下文任务构成了瓶颈，重新计算、自动压缩等问题破坏了对话的连续性，这是高频反馈。
-   **MCP 的实用性与可控性**: 虽然 MCP 生态被广泛接受，但开发者希望对其进行更精细的管理：如何控制 Startup 时加载的 MCP 工具消耗的 Token (`#3539`)，如何方便地在不同场景下启用/禁用服务器 (`#3564`)，以及如何满足企业的安全合规要求 (`#3207`)。
-   **行为一致性**: 开发者对“计划模式被忽略” (`#1654`) 和“`contextTier` 设置不应用” (`#3527`) 这类行为不一致的问题感到沮丧。他们期望配置和模式选择能准确、可预测地影响 AI 的行为。
-   **平台兼容性**:
    -   **Linux**: 1.0.49 版本中复制功能失效 (`#3395`)，尽管已关闭，但仍需关注其根本原因。
    -   **Windows**: `npx vitest` 在 CLI Terminal 中运行时挂起 (`#3308`)。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

好的，作为专注于 AI 开发工具的技术分析师，以下是根据您提供的 GitHub 数据生成的 `Kimi Code CLI` 社区动态日报。

---

# Kimi Code CLI 社区动态日报 | 2026-05-29

## 今日速览

今日社区动态核心围绕**Kimi Code CLI 的重大重构与品牌升级**。一方面，官方通过 PR 宣告“Kimi Code CLI 已升级为 Kimi Code”，引发社区对项目分裂和长期支持性的担忧。另一方面，多个关键性功能修复 PR 密集合并，特别是解决了终端退出卡死、ACP 协议会话/历史加载不完整的长期问题。

## 社区热点 Issues

1.  **[#2381] 为什么抛弃kimi-cli重做kimi code?老的没做好还要分裂社区？**
    -   **重要性：** 该项目下最具争议性的议题，直接反映了社区对产品方向变更的强烈不满和信任危机。
    -   **社区反应：** 用户直言“分裂社区”，并威胁要取消订阅。**已获3条评论**，热度极高。
    -   **链接：** [Issue #2381](https://github.com/MoonshotAI/kimi-cli/issues/2381)

2.  **[#1894] Kimi CLI 无法递归加载嵌套 skill 目录**
    -   **重要性：** 对使用 `skill` 复杂工作流的开发者影响巨大，导致迁移成本极高。
    -   **社区反应：** 该 Issue 已被验证，`Codex` 支持而 `Kimi` 不支持，用户 `retamia` 提供了详细的目录结构复现。**共5条评论**。
    -   **链接：** [Issue #1894](https://github.com/MoonshotAI/kimi-cli/issues/1894)

3.  **[#2384] 大 context 请求频繁 ConnectTimeout，httpx connect_timeout 不可配**
    -   **重要性：** 严重影响了长会话场景下的稳定性，属于基础性能问题。
    -   **社区反应：** 用户 `1690834643` 提供了详细的 `1.44.0` 版本在 Linux WSL2 环境下的复现步骤，明确指出了 `httpx` 连接超时不可配置的痛点。
    -   **链接：** [Issue #2384](https://github.com/MoonshotAI/kimi-cli/issues/2384)

4.  **[#2127] [bug] 未实现 ACP 协议的 `session/list`、`session/get` 等方法，Zed 无法查询到历史**
    -   **重要性：** 阻碍了在流行的编辑器 `Zed` 中的集成体验，影响了 IDE 生态的打通。
    -   **社区反应：** Issue 已被合并的 PR 修复，但问题本身显示了用户对 `ACP` 协议完整性的高要求。
    -   **链接：** [Issue #2127](https://github.com/MoonshotAI/kimi-cli/issues/2127)

5.  **[#2394] feat(acp): expose per-turn token usage to ACP clients**
    -   **重要性：** 对于构建在 `Kimi ACP` 上的上层应用至关重要，缺少 token 用量监控会严重影响应用的可观测性和成本控制。
    -   **社区反应：** 该需求由外部开发者 `javierbarroso22-dev` 发起，社区尚未有评论，但价值很高。
    -   **链接：** [Issue #2394](https://github.com/MoonshotAI/kimi-cli/issues/2394)

6.  **[#2385] 在Zed里查找文件时会陷入死循环**
    -   **重要性：** 直接影响 `Zed` 编辑器的核心文件查找功能，属于严重的集成 bug。
    -   **社区反应：** 用户 `wangshuai67` 刚提交，尚未有社区反馈，但问题描述明确。
    -   **链接：** [Issue #2385](https://github.com/MoonshotAI/kimi-cli/issues/2385)

7.  **[#1984] [CLOSED] fix: terminal hang on exit and MCP connection leak**
    -   **重要性：** 一个长期存在的、严重影响开发体验的 BUG（终端退出卡死）。
    -   **社区反应：** `thecannabisapp` 描述得非常细致，该 Issue 已被合并的 PR 关闭，是今日最重要的修复之一。
    -   **链接：** [Issue #1984](https://github.com/MoonshotAI/kimi-cli/issues/1984)

8.  **[#2381] 关于社区分裂的讨论（热点）**
    -   *（同第1条，已提及）*

9.  **[#1894] 嵌套 Skill 加载（热点）**
    -   *（同第2条，已提及）*

10. **[#2384] 大 context 超时（热点）**
    -   *（同第3条，已提及）*

## 重要 PR 进展

1.  **[#2391] chore(release): bump kimi-cli to 1.46.0**
    -   **主要内容：** 官方准备发布新版本 **1.46.0**，此 PR 正在更新版本号和发布说明。
    -   **链接：** [PR #2391](https://github.com/MoonshotAI/kimi-cli/pull/2391)

2.  **[#2393] docs: update evolution banner to announce rebuilt CLI release**
    -   **主要内容：** **里程碑式 PR**，官方在文档和启动 Banner 中正式宣告 `Kimi Code CLI` 已升级/重构为 `Kimi Code`。
    -   **链接：** [PR #2393](https://github.com/MoonshotAI/kimi-cli/pull/2393)

3.  **[#1985] fix(term, app): prevent TTY hang on exit and close MCP connections during shutdown**
    -   **主要内容：** **关键修复**。解决了 Issue #1984，修复了退出时终端卡死和 MCP 连接泄露的问题。通过设置非阻塞文件描述符和改进关闭流程来处理。
    -   **链接：** [PR #1985](https://github.com/MoonshotAI/kimi-cli/pull/1985)

4.  **[#2132] fix(acp): replay session history on load**
    -   **主要内容：** **关键修复**。修复了 ACP 模式下加载历史会话时，事件回放不完整的问题，确保了 `session/load` 功能可用。
    -   **链接：** [PR #2132](https://github.com/MoonshotAI/kimi-cli/pull/2132)

5.  **[#2047] fix(acp): load ~/.kimi/mcp.json in ACP server sessions**
    -   **主要内容：** 修复了 ACP 模式下无法加载用户自定义 MCP 服务器（`~/.kimi/mcp.json`）的痛点，使 `Zed` 等编辑器能用上外部工具。
    -   **链接：** [PR #2047](https://github.com/MoonshotAI/kimi-cli/pull/2047)

6.  **[#2383] fix(soul): repair orphan tool_calls when replaying history**
    -   **主要内容：** 修复了会话在中间被杀死时，回放历史时出现的“孤儿 tool_calls”问题，保证了数据一致性。
    -   **链接：** [PR #2383](https://github.com/MoonshotAI/kimi-cli/pull/2383)

7.  **[#2382] fix(file): convert unsupported image formats to PNG in ReadMediaFile**
    -   **主要内容：** 增强了 `ReadMediaFile` 工具的鲁棒性，自动将 `.ico` 等不支持的图片格式转换为 `PNG`，提升了 Agent 处理图片的兼容性。
    -   **链接：** [PR #2382](https://github.com/MoonshotAI/kimi-cli/pull/2382)

8.  **[#2369] feat(subagent): add API key pool for parallel subagent execution**
    -   **主要内容：** 引入 API Key 轮询池，支持并行子代理执行，这是一个性能优化方向的功能。
    -   **链接：** [PR #2369](https://github.com/MoonshotAI/kimi-cli/pull/2369)

9.  **[#2386] fix(session): map undo wire turns to context turns**
    -   **主要内容：** 修复了 `/undo` 命令在某些场景下（如本地斜杠命令轮次）无法正确回退上下文的问题。
    -   **链接：** [PR #2386](https://github.com/MoonshotAI/kimi-cli/pull/2386)

10. **[#2388] fix(shell): persist pasted text placeholders**
    -   **主要内容：** 修复了粘贴的长文本在会话历史回滚后，仅显示成 `[Pasted text #1]` 占位符而丢失原文的问题。
    -   **链接：** [PR #2388](https://github.com/MoonshotAI/kimi-cli/pull/2388)

## 功能需求趋势

从今日的 Issues 中可以提炼出社区对以下功能方向的强烈需求：

-   **迁移与兼容性：** 用户高度关注从 `Codex` 或其他工具的迁移成本，亟待提升与 `Codex` 在 `skill` 嵌套目录等文件结构上的兼容性（Issue #1894）。
-   **IDE 集成深度：** 围绕 ZED 等编辑器的集成是焦点，要求完整实现 ACP 协议（会话管理、历史记录等）、提供 Token 用量等 API 信息（Issue #2127, #2394, #2385）。
-   **稳定性与性能：** 对于长会话和大 Context 场景下的网络超时、连接稳定性和系统资源占用有更高的要求（Issue #2384）。
-   **自定义与可配置性：** 社区希望获得对网络超时（如 `httpx connect_timeout`）等底层参数的控制权。

## 开发者关注点

-   **信任危机与产品方向：** **最高频痛点**。社区对项目从 `kimi-cli` 迁移/重构到 `kimi-code` 感到困惑和不满，认为此举“分裂了社区”，并质疑产品的长期稳定性。这需要官方给出清晰且令人信服的沟通与长期支持承诺。
-   **修复进度滞后：** 一些功能性问题（如嵌套 Skill 加载 #1894）提出了一个月仍未解决，而 ACP 相关的多个 Bug 直到近期才通过 PR 修复，开发者期待更快的迭代周期。
-   **基础性能问题：** 长会话后退出卡死（#1984）和大 Context 请求超时（#2384）等基础问题直接影响开发者将其作为生产工具的意愿。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

好的，作为专注于AI开发工具的技术分析师，我将根据您提供的GitHub数据，生成2026年5月29日的OpenCode社区动态日报。

---

## OpenCode 社区动态日报 | 2026-05-29

### 1. 今日速览

今日社区焦点集中在**性能与模型兼容性**上。GPT模型响应缓慢的Issue (#29079) 因大量用户共鸣而成为最热话题，同时，新发布的v1.15.12版本引入了对`acp-next`的支持和实验性的WebSocket传输，旨在提升集成能力和响应速度。此外，围绕DeepSeek V4 Pro降价驱动的配额调整 (#28846) 和模型选择动态控制 (#6651) 的讨论也显示出社区对成本效益和灵活性的高度关注。

### 2. 版本发布

**v1.15.12** 版本于今日发布，主要更新如下：

*   **核心改进：** ACP集成现在可以通过 `acp-next` 发送提示、斜杠命令及使用情况更新，扩展了集成能力。为提升响应速度，新增了基于OpenAI响应的WebSocket传输支持（需设置环境变量 `OPENCODE_EXPERIMENTAL_WEBSOCKETS=true`）。
*   **Bug修复：** 为Anthropic模型启用了自适应推理控制。

### 3. 社区热点 Issues

1.  **[#29079] GPT Models takes too long to respond**
    *   **链接:** [anomalyco/opencode Issue #29079](https://github.com/anomalyco/opencode/issues/29079)
    *   **重要性:** 评论数高达 **102** 条，是目前社区最关注的问题。用户反馈GPT模型（特别是GPT 5.4）响应时间极度不稳定，简单命令也可能耗时数分钟，严重影响日常工作效率。这反映了高性能模型在实际应用中“速度-准确性”权衡的核心痛点。

2.  **[#6651] [FEATURE]: Dynamic model selection for subagents via Task tool**
    *   **链接:** [anomalyco/opencode Issue #6651](https://github.com/anomalyco/opencode/issues/6651)
    *   **重要性:** 获得 **46** 👍，是社区强烈期望的功能。该请求旨在让主代理在调用子代理时，能够动态指定子代理使用的模型（例如，为简单任务指定低成本模型，为复杂任务指定高性能模型）。这表明用户对构建灵活、成本可控的智能代理工作流有明确需求。

3.  **[#28846] [FEATURE]: Adjust Go usage limits after DeepSeek V4 Pro permanent 75% price reduction**
    *   **链接:** [anomalyco/opencode Issue #28846](https://github.com/anomalyco/opencode/issues/28846)
    *   **重要性:** 获得 **46** 👍，评论 **28** 条。DeepSeek V4 Pro价格大幅下调后，社区迅速呼吁OpenCode调整其“Go”订阅计划的使用限制，以让用户直接享受降价红利。这体现了用户对定价模型的敏感度和对即时成本优化的期望。

4.  **[#27530] Error: 4 of 5 requests failed: config.providers: Unexpected server error.**
    *   **链接:** [anomalyco/opencode Issue #27530](https://github.com/anomalyco/opencode/issues/27530)
    *   **重要性:** 导致应用启动失败的严重Bug，评论 **19** 条。用户启动时会遇到“意外服务器错误”，社区正在积极排查日志以定位根本原因，可能指向服务端配置或网络连接问题。

5.  **[#29618] reasoning_content is missing when using DeepSeek V4 Flash in thinking**
    *   **链接:** [anomalyco/opencode Issue #29618](https://github.com/anomalyco/opencode/issues/29618)
    *   **重要性:** 针对DeepSeek V4 Flash与OpenRouter的兼容性问题。在“思考模式”下，由于缺少 `reasoning_content` 字段，导致Agent调用失败。这凸显了多供应商模型集成中的协议兼容性挑战。

6.  **[#11232] Feature Request: Native Scheduling for Opencode**
    *   **链接:** [anomalyco/opencode Issue #11232](https://github.com/anomalyco/opencode/issues/11232)
    *   **重要性:** 获得 **11** 👍，评论 **10** 条。提出的原生调度功能（如`opencode schedule --cron`）旨在摆脱对操作系统级定时任务的依赖，实现自动化定期任务。这将是提升OpenCode作为自动化平台能力的关键功能。

7.  **[#20066] [FEATURE]: Make Allow always permission option persist across sessions**
    *   **链接:** [anomalyco/opencode Issue #20066](https://github.com/anomalyco/opencode/issues/20066)
    *   **重要性:** 一个提升用户体验的关键改进。“始终允许”权限应被持久化到配置文件，而不是仅在单次会话中生效。当前行为导致每次重启都需要重新授权，打断了工作流。

8.  **[#26772] [FEATURE]: Integrated browser for desktop**
    *   **链接:** [anomalyco/opencode Issue #26772](https://github.com/anomalyco/opencode/issues/26772)
    *   **重要性:** 建议在桌面版中集成浏览器，用于检查和交互网页内容。这将是扩展OpenCode在Web自动化、交互式测试场景中应用的重要功能。

9.  **[#28686] Desktop V2 UI hides prompt controls and status popover**
    *   **链接:** [anomalyco/opencode Issue #28686](https://github.com/anomalyco/opencode/issues/28686)
    *   **重要性:** V2 UI的回归问题。新版界面隐藏了代理选择器和模型推理级别选择器等关键控件，对依赖这些高级设置的用户造成困扰，影响了新UI的采用率。

10. **[#28696] [FEATURE]: Plugin/Agent/Skills/etc marketplace**
    *   **链接:** [anomalyco/opencode Issue #28696](https://github.com/anomalyco/opencode/issues/28696)
    *   **重要性:** 获得 **8** 👍。作为“主问题”，它系统地提出了构建统一插件、代理及技能市场的愿景。这被视为OpenCode走向成熟生态系统的关键一步，能极大促进社区贡献和功能扩展。

### 4. 重要 PR 进展

1.  **[#15110] fix(opencode): pass OAuth scopes to GoogleAuth for Vertex AI**
    *   **链接:** [anomalyco/opencode PR #15110](https://github.com/anomalyco/opencode/pull/15110)
    *   **状态:** 已合并
    *   **内容:** 修复了使用服务账号认证Google Vertex AI时因缺少`OAuth scopes`导致的`invalid_scope`错误。

2.  **[#29803] fix(desktop): bump @lydell/node-pty to 1.2.0-beta.12**
    *   **链接:** [anomalyco/opencode PR #29803](https://github.com/anomalyco/opencode/pull/29803)
    *   **状态:** 开放中
    *   **内容:** 通过升级 `node-pty` 库修复Windows桌面端侧车进程反复崩溃的问题，对Windows用户稳定性至关重要。

3.  **[#29738] fix(opencode): update skill handling in context and permissions**
    *   **链接:** [anomalyco/opencode PR #29738](https://github.com/anomalyco/opencode/pull/29738)
    *   **状态:** 开放中
    *   **内容:** 修复了技能（Skills）的权限过滤问题，确保只有被授权的技能才会在列表中显示。这解决了用户配置文件中权限无法生效的Bug。

4.  **[#29666] fix(opencode): enforce storage path invariants**
    *   **链接:** [anomalyco/opencode PR #29666](https://github.com/anomalyco/opencode/pull/29666)
    *   **状态:** 开放中
    *   **内容:** 对数据库存储的路径增加了不变性约束，将路径标准化为前向斜杠形式，以防止因跨平台路径格式不一致（如Windows的反斜杠）导致的潜在问题。

5.  **[#24829] fix(web): stop credential prompt loop with text/plain 401 + manifest credentials**
    *   **链接:** [anomalyco/opencode PR #24829](https://github.com/anomalyco/opencode/pull/24829)
    *   **状态:** 已合并（自动化清理）
    *   **内容:** 修复了Web端在特定情况下的基础认证对话框循环闪烁问题，提升了Web界面的使用体验。

6.  **[#24816] fix(acp): accept https:// URIs in image content blocks**
    *   **链接:** [anomalyco/opencode PR #24816](https://github.com/anomalyco/opencode/pull/24816)
    *   **状态:** 已合并（自动化清理）
    *   **内容:** 修复了ACP协议在处理图片内容块时，仅接受`http://`协议而无法处理`https://` URIs的Bug，确保安全性。

7.  **[#24852] feat: add skills.format config option for skill serialization format**
    *   **链接:** [anomalyco/opencode PR #24852](https://github.com/anomalyco/opencode/pull/24852)
    *   **状态:** 已合并（自动化清理）
    *   **内容:** 允许用户通过`skills.format`配置项选择技能序列化格式（XML/JSON/Markdown），为开发者提供了更大的灵活性。

8.  **[#24740] fix(opencode): batch vcs git show calls**
    *   **链接:** [anomalyco/opencode PR #24740](https://github.com/anomalyco/opencode/pull/24740)
    *   **状态:** 已合并（自动化清理）
    *   **内容:** 性能优化。将`git show`调用批量处理，以避免在大型项目中逐一为每个变更文件调用`git show`导致的延迟，显著提升了查看`/vcs/diff`时的速度。

9.  **[#24720] fix(desktop): prevent 100% CPU usage caused by infinite reconnects and recursive directory traversals**
    *   **链接:** [anomalyco/opencode PR #24720](https://github.com/anomalyco/opencode/pull/24720)
    *   **状态:** 已合并（自动化清理）
    *   **内容:** 修复了桌面端后台进程无限重连和递归遍历目录导致CPU占用100%的严重Bug，这对长时间使用桌面应用的用户至关重要。

10. **[#24707] Add Effect Drizzle SQLite adapter**
    *   **链接:** [anomalyco/opencode PR #24707](https://github.com/anomalyco/opencode/pull/24707)
    *   **状态:** 已合并（自动化清理）
    *   **内容:** 为一个实验性的新工作区添加了基于Effect v4的SQLite数据库适配器，这可能是OpenCode未来重构数据访问层、提升应用稳定性和可维护性的技术储备。

### 5. 功能需求趋势

从过去24小时的Issues中可以提炼出以下几个核心的功能需求方向：

*   **成本与模型管理：** 社区强烈要求更精细的模型成本控制和配额管理（如 #28846），以及更灵活的模型选择策略（如 #6651的动态模型分配）。这表明用户不再满足于简单的模型调用，而是寻求构建更具成本效益的智能体系统。
*   **平台自动化与任务编排：** 对原生调度功能（#11232）和技能持久化权限（#20066）的需求，表明用户希望OpenCode从一个交互式工具升级为一个可以独立自主执行任务的自动化平台。
*   **生态与集成：** 呼声渐高的插件/技能市场（#28696）、集成浏览器（#26772）以及持续增长的MCP/ACP集成诉求，都指向了建立一个繁荣、可扩展的OpenCode生态系统是社区的长期愿景。
*   **UI/UX体验优化：** 新版UI（V2）的布局和控件可见性问题（#28686, #29051）成为新的焦点，表明随着功能增多，如何提供直观、高效的UI以承载这些功能是当前开发的重心。

### 6. 开发者关注点

*   **模型响应性能是首要痛点：** GPT模型响应慢（#29079）成为绝对热点，开发者期待根本性的性能优化而非临时的解决办法。这与实验性的WebSocket传输（v1.15.12）的出现相呼应，说明社区正积极寻求各种技术路径来提升速度。
*   **多供应商兼容性挑战：** DeepSeek V4 Flash的`reasoning_content`字段问题（#29618）和Azure AI Foundry对第三方模型的输出Token限制（#29776），暴露出在对接不同供应商API时协议不兼容的持续挑战。开发者需要工具层面更强的兼容性和错误处理机制。
*   **基础稳定性和Bug修复是前提：** 应用启动失败（#27530）、文件写入/编辑静默失败（#29779）以及CPU占用100%（#24720）等严重Bug仍然存在。虽然社区积极贡献解决方案，但这些“地雷”般的故障严重影响了开发者的信任感和可用性。
*   **对明确的定价和配额更新的渴望：** 开发者对DeepSeek降价后OpenCode未能及时更新配额感到不满（#28846），这反映出用户对价格变动的敏感度和希望供应商提供即时、透明成本反馈的期望。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

好的，这是为您生成的 2026-05-29 Pi 社区动态日报。

---

# Pi 社区动态日报 | 2026-05-29

## 今日速览

Pi 社区发布 v0.77.0 版本，核心更新包括对 **Claude Opus 4.8** 的支持以及备受期待的 **`--exclude-tools`** 选择性禁用工具功能。社区焦点集中在 OpenAI GPT-5.5 的 **上下文窗口限制** 和 **重复消息 ID 错误** 两个关键 bug 上，同时关于 NVIDIA NIM 提供商和远程控制 API 的新功能提案也引发了广泛讨论。

## 版本发布

### v0.77.0
- **Claude Opus 4.8 支持**: 新增对 Anthropic Claude Opus 4.8 模型的原生支持，并更新了 Opus 自适应思考功能的覆盖范围。
- **选择性工具禁用**: 引入 `--exclude-tools` / `-xt` 命令行参数。允许用户在使用时排除特定的内置、扩展或自定义工具，为工作流提供更精细的控制。相关文档已更新。
- **GitHub 链接**: [v0.77.0 Release](https://github.com/earendil-works/pi/releases/tag/v0.77.0)

## 社区热点 Issues

1.  **[#4945] openai-codex 在 “Working...” 状态下卡死** (OPEN)
    - **重要性**: **极高**。这是一个导致 TUI 界面卡死，且无错误提示的严重交互问题。用户只能通过中断操作来恢复，影响核心用户体验。该问题已累积 45 条评论和 22 个 👍，是当前社区最关注的问题。
    - **链接**: [Issue #4945](https://github.com/earendil-works/pi/issues/4945)

2.  **[#5148] 在 Claude Opus 4.7 扩展思考后恢复 ChatGPT 5.5 会话失败** (CLOSED)
    - **重要性**: **高**。该问题揭示了在多模型切换时，消息 ID 管理存在缺陷，导致无法无缝接续会话。这是一个典型的模型互操作性错误，影响了高级用户的混合模型工作流。
    - **链接**: [Issue #5148](https://github.com/earendil-works/pi/issues/5148)

3.  **[#5087] OpenAI GPT-5.5 上下文窗口被错误限制在 272K** (CLOSED)
    - **重要性**: **高**。用户发现 Pi 中 GPT-5.5 的上下文窗口（272K tokens）远低于 OpenAI 官方文档声明的 1,050,000 tokens。这直接限制了模型处理长文本的能力，是模型元数据配置的重大错误。
    - **链接**: [Issue #5087](https://github.com/earendil-works/pi/issues/5087)

4.  **[#5149] GPT-5.5 交互几轮后报“重复消息 ID”错误** (CLOSED)
    - **重要性**: **高**。与 #5148 问题类似，此 bug 会导致 GPT-5.5 在使用几轮后因消息 ID 冲突而无法继续，严重破坏会话连续性。
    - **链接**: [Issue #5149](https://github.com/earendil-works/pi/issues/5149)

5.  **[#5101] 提议：添加 NVIDIA NIM 提供商支持** (CLOSED)
    - **重要性**: **中**。这是一个社区贡献提案，旨在增加对 NVIDIA NIM 推理微服务的支持，非常符合 AI 开发者利用本地或私有化 GPU 资源的需求。提案已附带实现代码，显示了较高的完成度。
    - **链接**: [Issue #5101](https://github.com/earendil-works/pi/issues/5101)

6.  **[#5089] 不尊重设定的 timeoutMs 值** (CLOSED)
    - **重要性**: **中**。这是一个性能相关 bug，用户反馈即使设置了超时时间，在某些耗时操作（如读取大文件）上依然会超时。这说明超时机制可能未在所有场景下生效。
    - **链接**: [Issue #5089](https://github.com/earendil-works/pi/issues/5089)

7.  **[#5103] Windows 下 Git Bash 路径检测失败** (OPEN)
    - **重要性**: **中**。影响非标准安装路径下 Windows 用户的 Bash 工具使用体验，暴露出工具路径发现机制不够健壮的本质问题。
    - **链接**: [Issue #5103](https://github.com/earendil-works/pi/issues/5103)

8.  **[#5098] 在 tmux 内运行时，内联图片和方向键失效** (OPEN)
    - **重要性**: **中**。这是一个影响终端复用器（tmux）用户的功能兼容性问题。官方已将其标记为“inprogress”，表明团队正在处理终端能力检测的复杂性。
    - **链接**: [Issue #5098](https://github.com/earendil-works/pi/issues/5098)

9.  **[#5117] 通过 OpenRouter 使用 Qwen 3.7 Max 时出错** (OPEN)
    - **重要性**: **中**。反映了新模型与 OpenRouter 等第三方代理之间的兼容性问题，具体表现为请求格式（`developer` 角色）不被接受。
    - **链接**: [Issue #5117](https://github.com/earendil-works/pi/issues/5117)

10. **[#5040] PI_CODING_AGENT_SESSION_DIR 导致会话扁平化存储** (OPEN)
    - **重要性**: **中**。一个配置变量的行为异常，导致会话管理逻辑混乱。它破坏了“当前文件夹”下的会话隔离，使得通过目录切换会话的功能出现问题。
    - **链接**: [Issue #5040](https://github.com/earendil-works/pi/issues/5040)

## 重要 PR 进展

1.  **[#5091] 修复：加固键盘协议协商** (CLOSED)
    - **内容**: 由核心贡献者 `mitsuhiko` 提交，旨在修复终端键盘协议协商的相关问题。这是一个尝试解决遗留问题的关键 PR。
    - **链接**: [PR #5091](https://github.com/earendil-works/pi/pull/5091)

2.  **[#5029] 修复：在 AgentSession.dispose() 时中止正在进行的 LLM 调用** (CLOSED)
    - **内容**: 解决了会话切换或销毁时，前一个 LLM 请求仍在后台运行的问题。这能显著提升会话切换的流畅性并减少资源浪费。
    - **链接**: [PR #5029](https://github.com/earendil-works/pi/pull/5029)

3.  **[#5139] 修复：代码审查 diff 为空的根本原因** (CLOSED)
    - **内容**: 这是一个关键修复，定位并解决了 Git 子进程垃圾回收（GC）错误删除 Blob 对象，导致文件审查 diff 返回空的严重 bug。
    - **链接**: [PR #5139](https://github.com/earendil-works/pi/pull/5139)

4.  **[#5085] 暴露：从 getAllTools 获取完整工具定义** (CLOSED)
    - **内容**: 为扩展提供了获取所有工具完整定义的能力，使扩展能更深入地理解和操作工具生态系统。这是一种比 #4954 更优的实现方案。
    - **链接**: [PR #5085](https://github.com/earendil-works/pi/pull/5085)

5.  **[#5140] 功能：为远程控制扩展添加 API (RFC)** (CLOSED)
    - **内容**: 提出了一系列 API 扩展，旨在支持非 TUI 远程客户端（如手机 App、Web 桥）驱动 Pi 的交互体验，标志着 Pi 向平台化方向发展的重要一步。
    - **链接**: [PR #5140](https://github.com/earendil-works/pi/pull/5140)

6.  **[#5110] 添加：Ant-ling 提供商 (Ling/Ring 2.6 系列)** (OPEN)
    - **内容**: 社区贡献的新模型提供商，支持 Ling 和 Ring 2.6 系列模型，丰富了 Pi 的模型生态。
    - **链接**: [PR #5110](https://github.com/earendil-works/pi/pull/5110)

7.  **[#5115] 修复：在 agent_end 期间排队的后续消息被卡住** (CLOSED)
    - **内容**: 修复了在 `agent_end` 事件中，扩展发送的后续跟进消息（follow-up）无法被正确传递，直到用户输入下一条消息才会被处理的 bug。
    - **链接**: [PR #5115](https://github.com/earendil-works/pi/pull/5115)

8.  **[#5107] 功能：在 InputEvent 上暴露 streamingBehavior** (CLOSED)
    - **内容**: 使得扩展能够在输入事件中区分用户的空闲提示、流式过程中的干预，或队列里的后续问题，为构建更智能的扩展交互提供了基础。
    - **链接**: [PR #5107](https://github.com/earendil-works/pi/pull/5107)

9.  **[#5144] 修复：在 getTextOutput 中防范未定义的 result.content** (CLOSED)
    - **内容**: 一个防御性编程修复，防止某些工具返回不含 `content` 的结果时导致整个 TUI 崩溃。提高了系统健壮性。
    - **链接**: [PR #5144](https://github.com/earendil-works/pi/pull/5144)

10. **[#5088] 功能：折叠分组工具调用** (OPEN)
    - **内容**: 实验性功能，尝试在 TUI 中分组显示连续的工具调用，以减少视觉噪音。由 `mitsuhiko` 提出，尚未准备好用于生产环境。
    - **链接**: [PR #5088](https://github.com/earendil-works/pi/pull/5088)

## 功能需求趋势

- **提供商扩展**: 社区对增加更多模型提供商表现出强烈兴趣，如提议 NVIDIA NIM (#5101)、Ant-ling (#5110) 和 Anthropic Vertex AI (#5082) 提供商。这表明用户希望 Pi 能成为一个更通用的模型前端。
- **远程控制与平台化**: 名为 `pi-remote-control` 的扩展和相关的 API 提案 (#5140, #5142) 表明，社区正积极将 Pi 从一个单纯的 TUI 工具扩展为一个可以构建其他客户端（如 App、Web）的底层平台。
- **精细化的工具与模型控制**:
    - **工具控制**: `--exclude-tools` 功能 (#5109) 的发布和广受好评，以及对工具定义访问 (#5085) 的需求，显示用户希望对工具的使用有更精细的控制权。
    - **模型控制**: 用户希望 Pi 能正确配置和利用模型的高级特性，如 GPT-5.5 的真实上下文窗口 (#5087) 和 DeepSeek 的推理努力程度 (#4801)。
- **更好的终端兼容性**: 针对 tmux (#5098)、Windows Bash (#5103) 和 ANSI 颜色的修复 (#5124)，说明社区关注在更广泛的终端环境下获得一致和可靠的体验。

## 开发者关注点

- **多模型互操作性**: 在不同模型（特别是 Anthropic 和 OpenAI）之间切换会话时，消息格式和 ID 的兼容性问题十分突出（#5148, #5149），是当前开发者和高级用户的主要痛点。
- **会话稳定性**: `openai-codex` 的卡死问题 (#4945) 是体验上的首要痛点。此外，会话切换时未正确清理 LLM 请求 (#5029) 和会话因超时、GC 异常中断等问题 (#5089, #5139) 也备受关注。
- **Windows 体验**: Windows 用户仍面临环境检测和兼容性问题，如 Git Bash 路径 (#5103) 和便携式 Git 下载 (#4651)，这是扩展用户基础需要持续关注的方向。
- **扩展开发 API**: 开发者正在推动扩展 API 的边界，包括获取工具定义 (#5085)、访问`streamingBehavior` (#4977, #5107)、远程控制 (#5140) 和修复 UI 自定义组件冲突 (#5129) 等，反映出社区开发生态正在蓬勃发展，并对底层 API 提出了更高要求。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

好的，这是为您生成的 2026-05-29 Qwen Code 社区动态日报。

---

# Qwen Code 社区动态日报 | 2026-05-29

## 今日速览

Qwen Code 社区在过去24小时内异常活跃，共有 23 个 Issue 和 50 个 PR 被更新。开发者们高度关注 v0.16 版本的稳定性和生产就绪性，其中 **API Body Timeout 问题** 和 **TUI 显示优化** 成为两大焦点。同时，随着 `qwen serve` 功能的推进，**Daemon 模式的可观测性、非阻塞设计以及跨会话统计** 等高级特性需求也在快速增长。

## 社区热点 Issues（Top 10）

1.  **[#4175] proposal(serve): Mode B feature-priority roadmap toward v0.16 production-ready**
    - **重要性**: ⭐⭐⭐⭐⭐
    - **摘要**: 这是关于 Qwen Code 服务端 (`qwen serve`) 迈向生产就绪的关键路线图讨论。作者详细梳理了在 Stage 1 合并后的剩余工作，是理解项目短期演进的必读文档。
    - **社区反应**: 获得了 41 条评论，表明社区对服务端能力的极高期待。
    - **链接**: [#4175](https://github.com/QwenLM/qwen-code/issues/4175)

2.  **[#4604] API Error: terminated (cause: Body Timeout Error)**
    - **重要性**: ⭐⭐⭐⭐⭐
    - **摘要**: 用户报告在处理网页任务时遇到 300 秒固定的 Body Timeout 错误。此问题直接影响了模型处理长任务的能力，是生产环境中的硬伤。
    - **社区反应**: 作为新开的 Bug，响应迅速，已有 3 条评论。
    - **链接**: [#4604](https://github.com/QwenLM/qwen-code/issues/4604)

3.  **[#4597] feat(stats): 增强stats能力，支持跨session的全局用量统计**
    - **重要性**: ⭐⭐⭐⭐
    - **摘要**: 开发者希望参考 Claude Code，增强 `/stats` 命令，使其能够跨会话持久化追踪 Token 用量、工具调用等数据，并提供全局仪表盘。
    - **社区反应**: 社区对此类运营级功能需求明确，已有 2 条评论和 1 个 👍。
    - **链接**: [#4597](https://github.com/QwenLM/qwen-code/issues/4597)

4.  **[#4588] Epic: Optimize qwen-code TUI display, spacing, tools, and branding**
    - **重要性**: ⭐⭐⭐⭐
    - **摘要**: 这是一个 TUI 显示优化的史诗级 Issue，目标是让 CLI 界面更紧凑、更易读，并增强 Qwen 品牌辨识度。该 Issue 收集了五项典型问题，是 TUI 改进的中心。
    - **社区反应**: 作为新开的 Epic Issue，定义了 TUI 优化的整体方向。
    - **链接**: [#4588](https://github.com/QwenLM/qwen-code/issues/4588)

5.  **[#4582] [Daemon] RFC: POST /prompt should be non-blocking — decouple trigger from completion**
    - **重要性**: ⭐⭐⭐⭐
    - **摘要**: 用户提出 Daemon 端的 `POST /session/:id/prompt` 端点目前是同步阻塞的，这会与常见的基础设施超时限制冲突，建议改为非阻塞设计。
    - **社区反应**: 这是一个面向生产部署的高质量 RFC，引发了对 Daemon API 设计的深入思考。
    - **链接**: [#4582](https://github.com/QwenLM/qwen-code/issues/4582)

6.  **[#4592] refactor(core): replace tail-preservation compaction with claude-code-style "summary + restoration attachments" model**
    - **重要性**: ⭐⭐⭐⭐
    - **摘要**: 提议替换掉当前的分割历史、保留尾部（tail-preservation）的压缩模型，转向类似 Claude Code 的“全量摘要 + 恢复附件”模型，以更好地管理长对话上下文。
    - **社区反应**: 这是对核心对话管理机制的一次重大重构提议，显示了社区对长上下文体验的追求。
    - **链接**: [#4592](https://github.com/QwenLM/qwen-code/issues/4592)

7.  **[#4591] Built-in Computer Use support with zero-config installation flow**
    - **重要性**: ⭐⭐⭐
    - **摘要**: 建议将 Computer Use 能力作为内置一等公民，提供零配置安装流程，使模型可以直接控制桌面应用。
    - **社区反应**: 社区对 Agent 能力的边界探索持续升温，此 Issue 收到了初步关注。
    - **链接**: [#4591](https://github.com/QwenLM/qwen-code/issues/4591)

8.  **[#4586] qwen cli 升级后，在pycharm 终端中使用qwen cli 容易因为按ctrl +c导致意外退出agent**
    - **重要性**: ⭐⭐⭐
    - **摘要**: 用户在 PyCharm 终端中使用 CLI 时，`Ctrl+C` 行为变更，从过去按两次退出变为一次直接退出，极易导致意外中断 Agent 任务。
    - **社区反应**: 这是一个影响日常开发体验的典型 Bug，尤其对 PyCharm 用户影响较大。
    - **链接**: [#4586](https://github.com/QwenLM/qwen-code/issues/4586)

9.  **[#4593] `/clear` should not switch to a new session ID**
    - **重要性**: ⭐⭐⭐
    - **摘要**: 用户反馈 `/clear` 命令的当前实现会创建一个新会话并切换过去，而不是清空当前会话。这破坏了基于会话的调试和日志查找。
    - **社区反应**: 反映了社区对更精细化的会话管理行为的期待。
    - **链接**: [#4593](https://github.com/QwenLM/qwen-code/issues/4593)

10. **[#4579] fix(rewind): false "compressed turn" error when mid-turn messages exist**
    - **重要性**: ⭐⭐⭐
    - **摘要**: 在工具执行期间输入中间消息后，尝试 `rewind` 会错误地提示“Cannot rewind to a turn that was compressed”，但实际上并未发生压缩。
    - **社区反应**: 这是一个语义明确的 Bug，影响交互流畅性。
    - **链接**: [#4579](https://github.com/QwenLM/qwen-code/issues/4579)

## 重要 PR 进展（Top 10）

1.  **[#4610] feat(daemon): add POST /session/:id/btw endpoint for side questions**
    - **重要性**: ⭐⭐⭐⭐⭐
    - **内容**: 为 Daemon 模式添加了支持“旁路提问”（`/btw`）的 REST API 端点，并提取了公用工具函数。
    - **链接**: [#4610](https://github.com/QwenLM/qwen-code/pull/4610)

2.  **[#4608] feat(telemetry): add tool spans and session.id to daemon/ACP path**
    - **重要性**: ⭐⭐⭐⭐⭐
    - **内容**: 在 Daemon 和 ACP 路径中增加了 `session.id` 属性和 `tool`、`tool.execution` 等 Span，极大地增强了服务端模式的可观测性。
    - **链接**: [#4608](https://github.com/QwenLM/qwen-code/pull/4608)

3.  **[#4605] fix(core): disable undici 300s bodyTimeout for no-proxy Node.js path**
    - **重要性**: ⭐⭐⭐⭐⭐
    - **内容**: **解决了关键 Bug**：禁用了 `undici` 库在无代理 Node.js 路径下的 300 秒 Body Timeout，直接修复了与本地模型（如 Ollama、LM Studio）连接时的超时问题。
    - **链接**: [#4605](https://github.com/QwenLM/qwen-code/pull/4605)

4.  **[#4590] feat(computer-use): zero-config built-in via open-computer-use MCP**
    - **重要性**: ⭐⭐⭐⭐
    - **内容**: 通过集成 `open-computer-use MCP`，为零配置的 Computer Use 功能提供了初始实现，包括九个操作工具。
    - **链接**: [#4590](https://github.com/QwenLM/qwen-code/pull/4590)

5.  **[#4599] refactor(core)!: replace tail-preservation compaction with summary + restoration attachments**
    - **重要性**: ⭐⭐⭐⭐
    - **内容**: 对应 Issue #4592，这是一个破坏性的核心重构，将对话压缩模型替换为 Claude Code 风格的全量摘要+附件恢复模型。
    - **链接**: [#4599](https://github.com/QwenLM/qwen-code/pull/4599)

6.  **[#4595] fix(tui): Tighten message and tool spacing**
    - **重要性**: ⭐⭐⭐⭐
    - **内容**: 针对 TUI Epics (#4588) 的首个优化 PR，通过收紧消息和工具之间的间距，使界面更紧凑。
    - **链接**: [#4595](https://github.com/QwenLM/qwen-code/pull/4595)

7.  **[#4598] fix(tui): Make thinking output transient**
    - **重要性**: ⭐⭐⭐⭐
    - **内容**: 使 TUI 中的“思考过程”输出变为瞬时显示（可配置为 preview 或 loading 模式），避免界面被长篇幅的思考内容占据。
    - **链接**: [#4598](https://github.com/QwenLM/qwen-code/pull/4598)

8.  **[#4596] fix(core): recurse into submodule files when crawling git repos**
    - **重要性**: ⭐⭐⭐
    - **内容**: 修复了 Git 仓库文件爬虫无法递归到子模块内部的问题，确保 Agent 能完整理解项目结构。
    - **链接**: [#4596](https://github.com/QwenLM/qwen-code/pull/4596)

9.  **[#4600] fix(ui): distinguish auto approval mode indicators**
    - **重要性**: ⭐⭐⭐
    - **内容**: 在 UI 上清晰地区分了“自动接受编辑”和“自动模式”两种不同的自动审批状态，避免用户混淆。
    - **链接**: [#4600](https://github.com/QwenLM/qwen-code/pull/4600)

10. **[#4570] feat(skill): add /triage skill for AI-native PR intake and issue triage**
    - **重要性**: ⭐⭐⭐
    - **内容**: 引入了一个有趣的 `/triage` 技能，可以利用 AI 对 PR 和 Issue 进行初步的分类和处理，展示了 Agent 在项目管理中的潜力。
    - **链接**: [#4570](https://github.com/QwenLM/qwen-code/pull/4570)

## 功能需求趋势

-   **服务端（`qwen serve`）生产就绪**: 这是目前最明确的核心方向。需求集中在 Daemon 的可靠性（非阻塞 API、指数退避重试）、可观测性（跨会话追踪、全局统计）和 API 设计完善。
-   **TUI 体验优化**: 社区对 CLI 界面的要求越来越高，不再满足于功能可用，而是追求“安静、紧凑、专业”的视觉体验。热点集中在间距优化、信息密度提升和品牌感知。
-   **长上下文与记忆管理**: 从对话压缩模型的重构、记忆无限制增长等 Issue 可以看出，如何高效、智能地管理无限增长的上下文，是 Agent 类工具面临的核心挑战。
-   **Agent 能力边界扩展**: 用户不仅满足于代码操作，开始期待“Computer Use”这类直接控制桌面的更强大能力，以及对 MCP 生态更深入的集成。

## 开发者关注点

-   **网络与 API 稳定性**: `Body Timeout` 问题是开发者使用本地模型和复杂任务时的首要痛点。需要更灵活的超时控制和对各种后端（特别是本地）的兼容性。
-   **交互行为的确定性**: 用户对 `Ctrl+C` 的意外退出、`/clear` 改变会话 ID、`rewind` 误报错误等行为非常敏感。这些看似微小的交互细节直接影响了开发者的使用信心和效率。
-   **IDE 集成体验**: 来自 Rider、PyCharm 等不同 IDE 的反馈表明，Qwen Code 与特定 IDE 终端的兼容性还需打磨。此外，**IDE 上下文注入**（#3712）的改进也备受关注，期望能更优雅地处理。
-   **零配置入门**: 无论是安装方式（期待类似 `curl | bash` 的单行安装）还是功能激活（如 Computer Use 的零配置），开发者都希望减少上手障碍，降低心智负担。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

好的，这是为您生成的 2026-05-29 DeepSeek TUI 社区动态日报。

---

## 2026-05-29 DeepSeek TUI 社区动态日报

**数据来源**: github.com/Hmbown/DeepSeek-TUI

### 今日速览

项目近期品牌升级为 **CodeWhale** (仓库名未变)，但社区反馈仍集中在 `exec_shell` 权限绕过、中文字符输入/渲染等关键BUG上。同时，社区对于**支持自定义API提供商**及**多模型管理**的呼声很高。今日有多个旨在修复中文输入和UI国际化问题的PR提交，显示出维护团队正积极解决国际化相关痛点。

### 社区热点 Issues

1.  **#1615 [已关闭] Docker 拉取直接乱码**
    *   **摘要**: 用户严格按照文档操作，仅替换API Key后，程序运行即出现乱码，强制重启服务器才能恢复。用户情绪激动，认为项目存在严重问题。
    *   **链接**: [Issue #1615](Hmbown/CodeWhale Issue #1615)
    *   **重要性**: 极高的用户挫败感，直接影响到新用户的第一体验，属于“开箱不可用”的严重问题。

2.  **#2247 [开启] 功能请求：支持自定义 DeepSeek 兼容 API 提供商**
    *   **摘要**: 目前仅支持官方API，用户希望接入第三方提供商（如SiliconFlow）或本地部署的DeepSeek服务。该问题同时使用中英文，体现其全球性需求。
    *   **链接**: [Issue #2247](Hmbown/CodeWhale Issue #2247)
    *   **重要性**: 这是一个核心的功能扩展需求，关乎项目的生态建设，可显著降低用户使用门槛和成本。

3.  **#2323 [开启] [BUG/增强] 未适配中文输入法**
    *   **摘要**: 使用中文输入法时，输入拼音时会错误显示提示文字；在有弹窗时，输入的字母会误入模型输入框。严重影响中文用户日常使用。
    *   **链接**: [Issue #2323](Hmbown/CodeWhale Issue #2323)
    *   **重要性**: 直接点名中文输入法，是中文用户群体的高频痛点，与今日的多个PR直接相关。

4.  **#2303 [开启] [BUG/文档] `allow_shell` 默认关闭无法阻止 `task_shell_start`**
    *   **摘要**: 安全配置 `allow_shell` 能阻止 `exec_shell`，但 `task_shell_start` 却绕过了同一安全门。这使得安全机制存在严重漏洞和困惑。
    *   **链接**: [Issue #2303](Hmbown/CodeWhale Issue #2303)
    *   **重要性**: 这是一个重大的**安全隐患**，可能导致用户在不经意间执行危险命令。社区反应直接，明确指出设计缺陷。

5.  **#1675 [开启] [文档/问题] Agent实时输出中出现中文乱码**
    *   **摘要**: Agent执行任务时，输出包含中文文本（例如Obsidian、Word文件内容）时会出现乱码。与#1615问题类似，但发生在Agent模式下。
    *   **链接**: [Issue #1675](Hmbown/CodeWhale Issue #1675)
    *   **重要性**: 与乱码相关的另一个关键场景，影响Agent功能的实用性和可靠性，特别对于处理中文文档的用户。

6.  **#2328 [开启] [BUG/增强] `exec_shell` 模式可用性不一致**
    *   **摘要**: `exec_shell`工具在YOLO模式下可用，但在Agent模式下报错“不可用”，与文档描述不符。
    *   **链接**: [Issue #2328](Hmbown/CodeWhale Issue #2328)
    *   **重要性**: 功能行为在不同模式下不一致，会给用户带来困惑，并限制Agent模式的使用场景。是功能逻辑上的明显BUG。

7.  **#2317 [开启] [BUG] 回复过长，导致无法继续提问**
    *   **摘要**: 当模型执行任务（如耗时18分钟）产生大量输出后，用户无法输入新的内容继续对话。
    *   **链接**: [Issue #2317](Hmbown/CodeWhale Issue #2317)
    *   **重要性**: 阻塞了长对话流程，对于需要多次交互的复杂任务来说是致命缺陷。

8.  **#2310 [开启] [BUG] 无法以 `/` 开头发送消息**
    *   **摘要**: 任何以 `/` 开头的输入都会被解释为斜杠命令，没有转义机制来发送以 `/` 开头的普通文本消息。
    *   **链接**: [Issue #2310](Hmbown/CodeWhale Issue #2310)
    *   **重要性**: 限制了用户消息的自由度，是一个设计上的疏忽，影响了聊天的自然性。

9.  **#2307 [开启] [BUG] 非英语语言环境下，右键菜单仍显示英文**
    *   **摘要**: TUI界面已本地化为中文，但右键菜单的“粘贴”、“命令面板”等字符串仍是硬编码的英文。
    *   **链接**: [Issue #2307](Hmbown/CodeWhale Issue #2307)
    *   **重要性**: 界面本地化不彻底，影响多语言用户的完整体验，是一个典型的UI i18n缺陷。

10. **#2300 [开启] [增强] 兼容多模型支持**
    *   **摘要**: 用户希望支持：1) 完善provider配置文档（如vllm vs openai的区别）；2) 同时配置多个模型，并能根据任务自动选择（如视觉、OCR、向量化模型）。
    *   **链接**: [Issue #2300](Hmbown/CodeWhale Issue #2300)
    *   **重要性**: 代表了社区对更高阶、更智能模型管理能力的需求，是未来发展方向的重要信号。

### 重要 PR 进展

1.  **#2329 [开启] fix(tui): 在工作区发现中跳过隐藏工作树，防止TUI饱和**
    *   **摘要**: 子Agent在发布工作时会遍历大量隐藏的git工作树文件，导致磁盘I/O和CPU消耗过高。此PR通过跳过这些隐藏目录来解决性能问题。
    *   **链接**: [PR #2329](Hmbown/CodeWhale PR #2329)

2.  **#2330 [开启] fix(tui): 将IME提交的中文字符直接路由到composer，而非粘贴缓冲区**
    *   **摘要**: 修复在不支持括号粘贴的终端上，中文输入法提交的文字被错误地放入粘贴缓冲区，导致用户看不到输入内容的问题。这是对#2323问题的直接修复。
    *   **链接**: [PR #2330](Hmbown/CodeWhale PR #2330)

3.  **#2331 [开启] fix(tools): 热加载所有 exec_shell 配套工具**
    *   **摘要**: 修复#2328问题，将`exec_shell`相关的所有配套工具（如`exec_interact`, `task_shell_start`）加入默认启动列表，确保在Agent模式下也能使用。
    *   **链接**: [PR #2331](Hmbown/CodeWhale PR #2331)

4.  **#2306 [开启] 功能/将 /goal 重命名为 /hunt**
    *   **摘要**: 进行一次重大的命令重构：将`/goal`命令重命名为`/hunt`，并引入四种新的裁决状态和奖杯卡牌系统。
    *   **链接**: [PR #2306](Hmbown/CodeWhale PR #2306)

5.  **#2320 [开启] fix(i18n): 本地化右键上下文菜单标签和描述**
    *   **摘要**: 直接修复#2307问题，将硬编码的英文右键菜单字符串替换为支持多语言的本地化版本。
    *   **链接**: [PR #2320](Hmbown/CodeWhale PR #2320)

6.  **#2316 [开启] fix(composer): 允许斜杠空格消息**
    *   **摘要**: 修复#2310问题，允许用户发送如`/ hello`这种以斜杠开头后接空格的消息，作为普通文本处理。
    *   **链接**: [PR #2316](Hmbown/CodeWhale PR #2316)

7.  **#2319 [开启] fix: 将终端标签页标题从 'DeepSeek TUI' 更新为 'CodeWhale'**
    *   **摘要**: 完成项目品牌统一，更改终端标签页标题，体现从DeepSeek TUI到CodeWhale的转变。
    *   **链接**: [PR #2319](Hmbown/CodeWhale PR #2319)

8.  **#1868 [开启] [codex] 添加 SiliconFlow 提供商支持**
    *   **摘要**: 作为对#2247需求的回应，此PR将SiliconFlow添加为一等公民的API提供商，支持在CLI、配置、TUI等全流程中使用。
    *   **链接**: [PR #1868](Hmbown/CodeWhale PR #1868)

9.  **#2326 [开启] 功能: 为自定义斜杠命令强制执行允许的工具**
    *   **摘要**: 引入了自定义斜杠命令的钩子系统架构第一阶段，允许在命令元数据中指定`allowed-tools`，以限制命令权限。
    *   **链接**: [PR #2326](Hmbown/CodeWhale PR #2326)

10. **#2325 [开启] fix: 当模型响应包含文本块时，批准对话框显示空参数**
    *   **摘要**: 修复审批对话框有时显示空参数的问题，通过调整数据读取逻辑，确保在`MessageComplete`事件后仍能正确获取工具参数。
    *   **链接**: [PR #2325](Hmbown/CodeWhale PR #2325)

### 功能需求趋势

*   **多模型/自定义提供商支持**: 社区强烈希望摆脱官方API的限制。需求并不局限于DeepSeek兼容API，而是希望支持`vllm`、`openai`等多种协议，并能**动态管理和选择**多个模型（包括视觉、OCR等专用模型）。这是当前最核心的功能扩展方向。
*   **深入的Agent模式与安全性**: 用户正在深入使用Agent模式，并发现了`exec_shell`在不同模式下行为不一致、安全机制被绕过等关键问题。这表明Agent模式的**功能统一性**和**安全性**是下一步优化的重点。
*   **品牌重塑与UI/UX优化**: 大量PR专注于将“DeepSeek TUI”更新为“CodeWhale”，同时修复右键菜单、命令行等未完成本地化的部分。项目正在进行全面的品牌升级和国际化体验优化。
*   **本地/离线模型支持**: 对自定义API的支持，本质上是为了连接本地或私有化部署的模型，这是企业及对数据隐私有要求的用户的潜在需求。

### 开发者关注点

*   **中文支持是绝对痛点**: 无论是刚上手时的Docker乱码（#1615）还是日常使用中的输入法冲突（#2323）和Agent输出乱码（#1675），中文支持问题是当前开发者反馈最集中、情绪最强烈的痛点。这直接影响产品的可用性。
*   **安全与权限机制的困惑**: `allow_shell` 配置的“半生效”状态让开发者感到困惑且不安。他们希望安全策略是**内聚、一致且文档清晰**的，目前的设计显然未达到这个标准。
*   **对话稳定性与长流程体验**: 回复过长导致对话中断（#2317）是影响深度使用体验的根本性BUG。开发者期待在长时间、多轮次的复杂任务中，应用能保持稳定和可交互。
*   **对项目进展的期待**: 开发者正在密切关注诸如**自定义API提供商**（#2247）和 **命令重命名**（#2306）等重大功能更新。同时，观察他们提交的**本地化**、**安全**相关的修复PR何时被合并，是他们评估项目活跃度和响应速度的关键指标。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*