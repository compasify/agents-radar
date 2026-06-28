# AI CLI 工具社区动态日报 2026-06-28

> 生成时间: 2026-06-28 00:25 UTC | 覆盖工具: 9 个

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

好的，作为专注于 AI 开发工具生态的资深技术分析师，以下是为您准备的 2026-06-28 主流 AI CLI 工具横向对比分析报告。

---

### 1. 生态全景

2026年6月28日，AI CLI 工具生态呈现出 **“高频迭代、痛点集中、分化为王”** 的态势。一方面，各工具均处于快速迭代期，频繁修复 Bug 并推出新功能；另一方面，**安全误报、配额计费透明度、跨平台体验鸿沟** 成为社区普遍关注的三大核心痛点。更深层看，工具间的差异化定位愈发明显：部分聚焦于极致的 IDE 集成与原生体验，部分则在 **多 Agent 协作框架** 和 **安全合规** 上深耕，预示着市场正从“通用聊天助手”向“专业开发控制台”演进。

### 2. 各工具活跃度对比

| 工具名称 | 今日 Issues 数 (热点) | 今日 PR 数 (重要) | 近期版本 Release | 社区情绪关键词 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 10+ (安全误报、Windows 认证) | 1 (脚本优化) | - | 信任危机、功能鸿沟、回归 |
| **OpenAI Codex** | 10+ (配额暴涨、Linux 桌面端) | 10+ (MCP OAuth、企业策略) | 2个Alpha小版本 | 成本震惊、安全合规、稳定 |
| **Gemini CLI** | 10+ (子Agent行为、安全强化) | 10+ (安全补丁、行为修复) | - | 行为不可控、安全自动化 |
| **GitHub Copilot CLI** | 10+ (Windows回归、复制Bug) | 3 (配置、文档) | v1.0.66 (含回归) | 质量焦虑、配置不足 |
| **Kimi Code CLI** | 0 | 0 | - | 无活动 |
| **OpenCode** | 10+ (TUI 管理、WSL路径) | 10+ (TUI 增强、管道修复) | - | 活跃迭代、路径噩梦 |
| **Pi** | 10+ (扩展安全、滚动Bug) | 9 (扩展API、HTTP报错) | - | 生态治理、模型兼容 |
| **Qwen Code** | 10+ (跨设备同步、令牌限) | 10+ (多人协作、Chrome扩展) | v0.19.2-nightly | 协作渴望、多Agent |
| **DeepSeek TUI** | 10+ (缓存命中率、成本) | 10+ (ACP协议、插件系统) | v0.8.66 预发布 | 成本焦虑、生态转型 |

**数据解读：**
*   **问题风暴中心**：**Claude Code** 和 **OpenAI Codex** 成为社区负面情绪最集中的地方，前者因大规模安全误报引发信任危机，后者因计费机制突变导致用户不满。
*   **最活跃的PR集群**：**Codex、Gemini CLI、Qwen Code、DeepSeek TUI** 的PR活动最为密集，都在进行架构级或平台级的重大更新。
*   **差异化节奏**：**OpenCode** 和 **Pi** 保持着稳健而持续的迭代，专注于打磨核心体验和扩展生态。**Kimi Code** 当日完全静默，可能处于内部开发阶段。

### 3. 共同关注的功能方向

| 功能方向 | 相关工具 | 具体诉求 |
| :--- | :--- | :--- |
| **成本与配额透明化** | **Claude Code、OpenAI Codex、Pi、DeepSeek TUI** | 强烈要求修复配额消耗逻辑错误、清晰展示计费细节、提供更精确的token消耗预测和限制配置。特别是 **OpenAI Codex** 的配额暴涨问题已严重到影响使用。 |
| **跨平台体验一致性** | **Claude Code、OpenAI Codex、GitHub Copilot CLI、Pi** | Windows 用户普遍感到被忽视，核心痛点包括：认证故障、环境变量缺失、原生通知缺失、路径处理错误（与WSL集成）、终端渲染Bug。 |
| **安全模型的精细化** | **Claude Code、GitHub Copilot CLI、Gemini CLI** | 用户无法容忍“一刀切”的阻断。需求包括：合法开发（如无人机、安全研究）的误报申诉机制、敏感文件排除列表（`.codexignore`）、高风险操作（如`git reset --force`）的主动确认。 |
| **代理行为的可预测性** | **Gemini CLI、Claude Code、Qwen Code** | 子Agent 不遵从指令（如模式切换失败）、静默扩权（Scope Expansion）、任务状态虚假报告、后台任务不可见等问题，是影响用户信任度的最直接因素。 |
| **MCP/ACP 协议集成与生态** | **OpenAI Codex、Qwen Code、DeepSeek TUI、Pi** | 扩展 Agent 能力边界成为共识。社区欢迎对 MCP（Model Context Protocol）和 ACP（Agent Client Protocol）等开放标准的支持，并热烈讨论插件系统，以构建可复用的工具和技能生态。 |

### 4. 差异化定位分析

| 工具名称 | 定位 / 核心优势 | 技术路线 / 架构特点 |
| :--- | :--- | :--- |
| **Claude Code** | **“最严格的安全卫士”** | 拥有业内最激进的安全策略，但也因此面临误报率高企的挑战。当前阶段更像是“安全主导”而非“体验主导”。 |
| **OpenAI Codex** | **“最强大的企业级开发者平台”** | 依托 GPT-5 模型，提供最强的代码生成能力，核心在于 MCP 集成、企业级安全策略（如插件市场管控）和平台稳定性。 |
| **Gemini CLI** | **“最前沿的 Agent 架构探索者”** | 深度整合子Agent、技能、记忆系统，并在尝试浏览器控制等超能力。存在兼容性与稳定性问题，但代表了 Agent 框架的未来方向。 |
| **GitHub Copilot CLI** | **“最流畅的日常开发伴侣”** | 极简的 TUI 交互，深度集成 GitHub 生态（如 Issues, PRs）。用户对其稳定性的要求极高，回归问题最令其用户反感。 |
| **OpenCode** | **“最全能的跨平台编码助手”** | 特别重视 WSL、Windows ARM64、Wayland 等非主流平台的兼容性。在 TUI 的细节体验（如会话管理、撤销/重做）上打磨最为深入。 |
| **Qwen Code** | **“最开放的团队协作 Agent”** | 积极拥抱开放协议（ACP、MCP），并前瞻性地探索多人在线协作场景（如在聊天群组中@Agent）。生态扩展意愿最强。 |
| **Pi** | **“最灵活的扩展与模型兼容平台”** | Go 语言开发，性能优异。核心差异化在于强大的插件系统和广泛的新模型（GLM、DiffusionGemma）兼容性，定位为“AI 模型试验田”。 |
| **DeepSeek TUI** | **“极致成本控制专家”** | 社区诉求高度聚焦于降低token消耗、提升缓存命中率。其技术演进（如 `缓存最大化上下文模式`）完全围绕“省钱”展开，是成本敏感型用户的福音。 |

### 5. 社区热度与成熟度

*   **高热度、高关注（舆情主导期）**：**Claude Code** 和 **OpenAI Codex** 社区最热，但负面情绪和严重Bug居多，正处于“用户信任修复”和“稳定性交付”的关键期。
*   **高活跃、高产出（快速迭代期）**：**Gemini CLI、Qwen Code、DeepSeek TUI** 处于功能快速迭代期，PR量大，新功能多（如 ACP/插件/协作），社区进步感强，但存在一定的不稳定性。
*   **稳健演进（生态构建期）**：**OpenCode** 和 **Pi** 社区活跃度健康，Bug 修复和功能增强均衡，已进入“打磨用户体验和构建扩展生态”的成熟阶段，开发者反馈的解决效率较高。
*   **静默期**：**Kimi Code CLI** 当日无活动，可能处于重大版本重构或内部测试阶段，需持续关注。

### 6. 值得关注的趋势信号

1.  **下一代 AI 编码范式：从“问答”到“编排”**。Gemini 的浏览器控制、Qwen Code 的 `qwen tag` 团队协作、DeepSeek TUI 的 ACP 协议，都指向一个方向：AI CLI 正在从单一问答窗口，进化为能够**编排多步任务、调用外部工具、并与团队协作**的操作系统级控制台。
2.  **“成本”成为与“能力”同等重要的核心指标**。OpenAI Codex 和 DeepSeek TUI 的社区动态昭示，用户已对“不限量”的 API 调用模式产生警惕。**精细化的 Token 控制、高效的缓存策略、透明的计费机制**，将成为决定开发者是否长期使用的关键。
3.  **安全与效率的博弈进入深水区**。Claude Code 的安全误报滥觞表明，粗暴的安全策略已无法被市场接受。未来的趋势必然是 **“零信任”+“精细化权限”**：即默认最小权限，但对合法场景提供明确的授权路径和可审计的日志，而非简单的“一刀切”拦截。
4.  **Windows 开发者体验迎来关键窗口**。多个工具在 Windows 平台（包括 WSL2 和 ARM64）的糟糕表现，为市场留下了巨大的创新空间。哪家工具能率先提供与 macOS 无差别的原生体验，将有望赢得大量 Windows 开发者市场。
5.  **“开放性”成为第二增长曲线**。支持 ACP/MCP 等开放协议（如 Qwen Code, DeepSeek TUI），并构建插件市场（如 Pi, OpenCode），正成为差异化竞争的关键。这暗示着 AI CLI 的未来不取决于单一模型，而取决于**其连接外部世界的平台整合能力**。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

好的，作为专注于 Claude Code 生态的技术分析师，以下是根据截至 2026-06-28 的 `anthropics/skills` 仓库数据生成的社区热点报告。

---

### Claude Code Skills 社区热点报告 (截至 2026-06-28)

#### 1. 热门 Skills 排行 (Top 5 by PR 热度)

1.  **fix(skill-creator): run_eval.py 全面修复 (PR #1298)**
    *   **功能**: 对 Skill 创建核心工具 `run_eval.py` 进行重大修复，解决其在新版 Claude 下始终报告 0% 召回率、Windows 兼容性、触发检测等问题。
    *   **热点**: **当前社区最关注的 PR**。其关联的 Issue #556 (0% 触发率) 有 12 条评论和 7 个👍，是工具链最严重的 Bug。社区讨论焦点是 `skill-creator` 工具链在核心评估环节的不可靠性。
    *   **状态**: OPEN
    *   **链接**: [PR #1298](https://github.com/anthropics/skills/pull/1298)

2.  **Add document-typography skill (PR #514)**
    *   **功能**: 新增技能，用于自动纠正 AI 生成文档中的孤儿行、寡行和编号错位等排版问题。
    *   **热点**: 社区普遍认可该 Skill **“高实用性”**和 **“痛点精准”**。多数评论认为这是 AI 文档处理的刚需，但亦有讨论其触发条件和性能开销。
    *   **状态**: OPEN
    *   **链接**: [PR #514](https://github.com/anthropics/skills/pull/514)

3.  **Add ODT skill (PR #486)**
    *   **功能**: 新增对 OpenDocument 格式 (`.odt`, `.ods`) 的创建、填充、读取和转换支持。
    *   **热点**: **LibreOffice/OpenOffice 用户的强需求**。社区讨论多集中于与 LibreOffice 生态的集成深度、兼容性测试范围以及对复杂文档结构（如表格、样式）的处理能力。
    *   **状态**: OPEN
    *   **链接**: [PR #486](https://github.com/anthropics/skills/pull/486)

4.  **fix(pdf): 修复文件名大小写敏感引用 (PR #538)**
    *   **功能**: 修复 `skills/pdf/SKILL.md` 中对其他文件的引用大小写不匹配问题，防止在 Linux 等系统上出错。
    *   **热点**: 其关联讨论反映了社区对 **Skills 跨平台兼容性** 的高度关注，一个看似微小的文件名问题可能导致整个 Skill 无法使用。此 PR 与多个 Windows 兼容性修复 PR (如 #539, #541) 共同构成了生态完善的关键声音。
    *   **状态**: OPEN
    *   **链接**: [PR #538](https://github.com/anthropics/skills/pull/538)

5.  **Improve frontend-design skill clarity and actionability (PR #210)**
    *   **功能**: 对现有的 `frontend-design` 技能进行重构，使其指令更清晰、可操作，确保 Claude 能在一个对话内准确执行。
    *   **热点**: 社区以此为例，探讨了 **Skill 指令编写的最佳实践**。核心争论点在于：一个高质量的 Skill 应该是“百科全书式的文档”还是“精准可执行的行动指南”？此 PR 倾向于后者。
    *   **状态**: OPEN
    *   **链接**: [PR #210](https://github.com/anthropics/skills/pull/210)

#### 2. 社区需求趋势 (From Issues)

1.  **信任与安全 (Trust & Safety)**: Issue #492 (Security: 社区技能命名空间滥用) 以 23 条评论成为最热门 Issue。社区对**官方与社区技能的信任边界**、**权限滥用的潜在风险**表达了强烈担忧。这不再是功能需求，而是生态安全的基础诉求。
2.  **协作与分享 (Collaboration & Sharing)**: Issue #228 (Enable org-wide skill sharing) 获得 14 条评论和 7 个👍。社区强烈期望 **Claude Code 能提供组织级别的技能库**，取代目前手动复制/上传的繁琐流程，以提升团队协作效率。
3.  **技能持久化与稳定性 (Persistence & Stability)**: Issue #62 (技能消失) 等 Issue 反映出，用户对于**已创建/安装技能的持久化存储**和**免受文件系统操作影响**的稳定性存在不安全感。
4.  **新 Skill 方向**: 社区积极提出新 Skill 提案，主要包括：
    *   **长链 Agent 状态管理 (Agent State)**: Issue #1329 (compact-memory) 提出用**符号化表示法**管理 Agent 的长期记忆和状态，以节省 Token 并提高效率。
    *   **Agent 治理与安全 (Agent Governance)**: Issue #412 (agent-governance) 提议了**策略执行、威胁检测和审计追踪**等模式，体现了构建更鲁棒、可控 Agent 系统的需求。
    *   **特定领域集成**: 如 SharePoint Online 集成 (Issue #1175) 和 AWS Bedrock 集成 (Issue #29)，表明社区希望 Skills 能更深度地嵌入到现有的企业 IT 和云服务基础设施中。

#### 3. 高潜力待合并 Skills

这些 PR 评论活跃且解决核心痛点，近期合并可能性高：

1.  **document-typography (PR #514)**：解决的是 AI 文档的“门面”问题，需求普遍且修复价值高。
    *   **链接**: [PR #514](https://github.com/anthropics/skills/pull/514)
2.  **fix(skill-creator): run_eval.py (PR #1298)**：虽然技术性很强，但它是**整个 Skill 创建流程的堵塞点**。不修复它，其他技能的优化工作都可能建立在无效的评估之上，是当前最急迫的修复。
    *   **链接**: [PR #1298](https://github.com/anthropics/skills/pull/1298)
3.  **fix(skill-creator) 系列的多个 PR (如 #1099, #1050, #1323, #362, #539)**：这些 PR 共同指向**提升 `skill-creator` 工具链的鲁棒性和跨平台兼容性**（特别是Windows），是生态走向成熟的关键。
    *   **链接**: [PR #1099](https://github.com/anthropics/skills/pull/1099), [PR #1050](https://github.com/anthropics/skills/pull/1050), [PR #362](https://github.com/anthropics/skills/pull/362)

#### 4. Skills 生态洞察

**一句话总结**: 当前社区最集中的诉求已从“创造更多技能”转向“**构建可信、可靠、工程化的技能生态**”，具体表现为对 **skill-creator 工具链的 Bug 修复和跨平台兼容性**的迫切需求，以及对**技能安全、持久化与组织级协作**等平台级能力的强烈期待。

---

好的，各位开发者，以下是 2026 年 6 月 28 日的 Claude Code 社区动态日报。

---

## Claude Code 社区动态日报 | 2026-06-28

### 今日速览

今日社区动态高度集中，核心关键词为“**安全误报（False Positive）**”。用户 `sworrl` 在短短一天内提交了大量关于“Drone”（无人机）相关合法开发工作被安全策略拦截的报告，引发了对当前安全模型过于敏感、阻断合法开发流程的强烈讨论。此外，Windows 平台的认证故障（401 错误）和 `CLAUDE_PROJECT_DIR` 环境变量缺失问题也在持续发酵。

### 社区热点 Issues

以下为近期最值得关注的 10 个 Issue，反映了当前用户的核心痛点和需求。

1.  **[BUG] API Error: 401 Invalid authentication credentials (#69706)**
    *   **概览**: 用户在 Windows 平台上持续遭遇认证失败（401 错误），评论数高达 21 条，是最热门的问题。
    *   **重要性**: 严重阻碍用户正常使用，且影响范围集中在 Windows 平台，说明该平台下的认证流程存在系统性问题。
    *   **社区反应**: 已有大量用户确认复现，成为社区的关注焦点。
    *   [查看详情](https://github.com/anthropics/claude-code/issues/69706)

2.  **[Bug][cyber] 系列安全误报 (如 #71910, #71901, #71920 等)**
    *   **概览**: 用户 `sworrl` 提交了超过 10 个 Issue，全部关于在开发无人机（Drone）相关的固件分析、地面站开发等合法工作时，被安全策略（cyber / AUP）错误拦截，导致会话终止。
    *   **重要性**: 系统性揭示了当前安全过滤机制存在严重误报，对安全研究与合法开发造成巨大干扰，是开发者信任度的重大挑战。
    *   **社区反应**: 这些 Issue 虽近期暂无大量评论，但由于问题高度集中、性质严重，已成为社区和 Anthropic 必须正视的重大缺陷。
    *   [查看详情 (例: #71910)](https://github.com/anthropics/claude-code/issues/71910)

3.  **[FEATURE] Native Windows toast notifications (#67220)**
    *   **概览**: 用户请求为 Windows 平台添加原生 Toast 通知功能，使任务完成或等待用户输入时能像 macOS/Linux 一样获得系统级通知。
    *   **重要性**: 持续暴露了 Claude Code 在不同平台上的“功能鸿沟”，Windows 用户在核心体验上落后，影响开发效率。
    *   [查看详情](https://github.com/anthropics/claude-code/issues/67220)

4.  **[BUG] `CLAUDE_PROJECT_DIR` not set in any subprocess environment on Windows (#71924)**
    *   **概览**: 报告了在 Windows 平台的 Claude Desktop 中，`CLAUDE_PROJECT_DIR` 环境变量未被正确传递给任何子进程（包括 Bash、PowerShell 和 MCP 服务器）。
    *   **重要性**: 这是一个严重的环境变量机制缺陷，会直接破坏依赖此变量的工作流和 MCP 服务器配置，对高级用户和工具链集成影响巨大。
    *   [查看详情](https://github.com/anthropics/claude-code/issues/71924)

5.  **[BUG] SSL certificate has expired not working since 2.1.190+ on mac (#71663)**
    *   **概览**: 报告了自版本 2.1.190 起，macOS 上的 SSL 证书过期处理机制失效。
    *   **重要性**: 影响网络安全和用户对模型可信度的依赖，是一个关键的回归性问题。
    *   [查看详情](https://github.com/anthropics/claude-code/issues/71663)

6.  **[FEATURE] Collapsible Sticky Prompt Block in the VS Code Extension Panel (#71928)**
    *   **概览**: 请求为 VS Code 扩展面板中的确认提示块（Sticky Prompt）增加折叠功能。
    *   **重要性**: 反映出用户对 IDE 界面空间管理的需求，希望在保留核心安全/配置功能的同时，能获得更清爽的对话界面。
    *   [查看详情](https://github.com/anthropics/claude-code/issues/71928)

7.  **[Bug] Fullscreen TUI mouse capture prevents standard clipboard selection without Shift-drag (#71926)**
    *   **概览**: 报告了在全屏 TUI 模式下，鼠标被捕获，导致无法进行标准的选中复制操作，只能使用 `Shift + 拖拽`，且当前文档描述不准确。
    *   **重要性**: TUI 体验的细节缺陷，违反了用户的终端操作习惯，影响日常使用效率。
    *   [查看详情](https://github.com/anthropics/claude-code/issues/71926)

8.  **[BUG] Usage-limit banner floors reset time (#71925)**
    *   **概览**: 使用量限制横幅在显示重置时间时，采用了“向下取整”的显示方式，例如剩余 1 小时 20 分时显示“1 小时”，误导用户。
    *   **重要性**: 虽非功能故障，但涉及计费和用户预期管理，这种不精确的显示方式会引发用户不满和误解。
    *   [查看详情](https://github.com/anthropics/claude-code/issues/71925)

9.  **`AskUserQuestion` UI disappears when moving VS Code chat tab (#61665)**
    *   **概览**: 当用户将 VS Code 中的 Claude Code 聊天标签页拖拽到新窗口时，`AskUserQuestion` 界面会消失且无法重新唤起。
    *   **重要性**: 这是一个较为严重的 UI Bug，会直接阻塞工作流程，尤其对于喜欢使用多窗口的用户来说体验极差。
    *   [查看详情](https://github.com/anthropics/claude-code/issues/61665)

10. **[BUG] Claude ignores instructions and violates rules consistently (#57200)**
    *   **概览**: 用户报告 Claude（在 Linux 上）持续忽略系统指令并违反规则。问题自五月提出，仍在开放中。
    *   **重要性**: 指向了模型的核心遵从性问题，影响 Claude Code 作为编码工具的可靠性。持续未关闭说明问题的复杂性。
    *   [查看详情](https://github.com/anthropics/claude-code/issues/57200)

### 重要 PR 进展

过去 24 小时内 PR 活动较少，但以下进展值得关注。

1.  **fix(scripts): add error message to edit-issue-labels.sh (#68787)**
    *   **功能/修复**: 为 `edit-issue-labels.sh` 脚本在没有提供标签参数时添加了错误信息输出，避免了静默失败。
    *   **重要性**: 提升了内部脚本的健壮性和可调试性，对 CI 流程和自动化工具有益。
    *   [查看详情](https://github.com/anthropics/claude-code/pull/68787)

*(注：另一个 PR #71798 标题仅为“.”，可能为测试或误提，故未重点分析。)*

### 功能需求趋势

从过去 24 小时的 Issues 和高热度需求中，可以提炼出以下社区最关注的功能方向：

1.  **IDE 集成体验优化**: 用户不再满足于基础插件功能，开始对 VS Code 插件的 UI 细节（如折叠提示块、标签页拖拽）提出更高要求。
2.  **跨平台功能对等**: Windows 用户持续高呼“不公平”，要求补齐与 macOS/Linux 在通知、环境变量注入等方面的功能差距。
3.  **安全模型的精细化**: 大规模的安全误报事件表明，用户需要更智能、更可控的安全策略，而不是“一刀切”式的阻断，尤其是在处理网络安全、漏洞分析等合法场景时。
4.  **TUI/终端体验打磨**: 用户对全屏 TUI 下的鼠标交互、数据复制等基础体验仍有改进需求，表明终端用户群体对细节要求高。
5.  **非 Git 文件管理**: `#71913` 提出的在 `.worktreeinclude` 中处理非 `.gitignore` 文件的请求，反映了用户在使用非标准 Git 工作流时的管理痛点。

### 开发者关注点

社区的讨论和问题反馈揭示了以下几个核心痛点和高频需求：

*   **安全误报是当前最大痛点**: 大量涉及“网络安全”、“攻击防御”、“无人机”等领域的合法开发工作被错误阻断，这不仅是功能缺陷，更是信任危机。开发者强烈要求 Anthropic 提供更清晰的误报申诉渠道和更智能的内容安全策略。
*   **Windows 平台用户体验堪忧**: 从认证 401 错误到环境变量缺失，再到缺少原生通知，Windows 用户群体感觉自己像是“二等公民”，开发体验远逊于其他平台。
*   **计费系统透明度不足**: 关于使用量限额重置时间“向下取整”的投诉，以及“快速模式”收费不透明的长期问题（如 #56782），表明用户对账务信息的精确性和透明度有着极高的期望。
*   **回归性问题频发**: 如 `SSL` 证书错误在新版本中出现，以及“模型忽略用户指令”等长期未解问题，让开发者对版本质量和模型本身的可靠性感到担忧。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

好的，作为专注于AI开发工具的技术分析师，我根据您提供的GitHub数据，为您呈现2026年6月28日的OpenAI Codex社区动态日报。

---

## OpenAI Codex 社区动态日报 | 2026-06-28

### 今日速览

今日社区焦点集中在 **Codex配额消耗异常激增** 的严重bug上，该问题导致Plus/Pro用户预算迅速耗尽，引发大量讨论和关注。同时，**Linux桌面端应用** 和 **敏感文件排除机制** 等长期功能需求呼声持续高涨。开发方面，团队正着力优化MCP OAuth认证的并发与恢复机制，并修复了多项Windows平台的稳定性问题。

### 版本发布

昨日发布了两个Rust版本的Alpha小更新，无显著功能变更日志。

*   **rust-v0.143.0-alpha.28**: [Release 0.143.0-alpha.28](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.28)
*   **rust-v0.143.0-alpha.27**: [Release 0.143.0-alpha.27](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.27)

### 社区热点 Issues

1.  **配额消耗异常激增 (Issue #28879)**
    *   **链接**: [Issue #28879](https://github.com/openai/codex/issues/28879)
    *   **重要性**: **🔥 极高优先级**。社区报告自6月16日起，`gpt-5.5`模型下每个token消耗的配额成本暴涨10-20倍，导致5小时预算在2-3次Prompt内耗尽。该问题影响面极广，已获得333个👍和186条评论，是今日最受关注的bug。
    *   **社区反应**: 用户普遍感到愤怒和困惑，要求官方立即修复或解释计费逻辑变更。

2.  **Linux桌面端应用 (Issue #11023)**
    *   **链接**: [Issue #11023](https://github.com/openai/codex/issues/11023)
    *   **重要性**: **🔥 高需求长期Feature**。拥有648个👍，是社区呼声最高的功能请求之一。用户因macOS端存在性能问题，迫切希望在Linux桌面获得原生体验。
    *   **社区反应**: 大量Linux用户表达支持，并分享了在WSL等环境下的替代方案，但均不如原生应用便利。

3.  **SQLite日志写入量过大 (Issue #28224)**
    *   **链接**: [Issue #28224](https://github.com/openai/codex/issues/28224)
    *   **重要性**: **🧐 重大性能/硬件隐患**。反馈日志系统每年可能写入高达640TB数据，严重消耗SSD寿命。虽然用户报告已有部分PR修复（减少85%写入），但问题本身揭示了Codex在日志策略上的设计缺陷。
    *   **社区反应**: 技术用户深度讨论，指出该问题对使用小容量或高耐久性SSD的设备影响巨大。

4.  **敏感文件排除机制 (Issue #2847)**
    *   **链接**: [Issue #2847](https://github.com/openai/codex/issues/2847)
    *   **重要性**: **🔒 关键安全需求**。414个👍表明用户对数据安全高度关注。需要一个类似 `.gitignore` 的机制来防止敏感文件（如密钥、配置文件）被意外读取或发送到模型。
    *   **社区反应**: 用户讨论热烈，并提出了 `.codexignore` 或全局忽略文件的多种实现方案。

5.  **`/undo` 命令回归 (Issue #9203)**
    *   **链接**: [Issue #9203](https://github.com/openai/codex/issues/9203)
    *   **重要性**: **🛠️ 核心体验优化**。300个👍，用户怀念曾被移除的`/undo`命令，它在Agent误操作（如意外删除未跟踪文件）时至关重要。
    *   **社区反应**: 用户分享因缺少撤销功能导致工作丢失的经历，强烈要求恢复此功能。

6.  **配额瞬间耗尽 (Issue #29955)**
    *   **链接**: [Issue #29955](https://github.com/openai/codex/issues/29955)
    *   **重要性**: **🧐 潜在Bug复现**。与#28879类似，但报告人称100个积分在一条消息后用完，5小时上限归零。可能为同一bug的另一种表现。
    *   **社区反应**: 用户反馈了具体的操作步骤和环境，帮助开发者定位问题。

7.  **Windows Sandbox `apply_patch` 失败 (Issue #29072)**
    *   **链接**: [Issue #29072](https://github.com/openai/codex/issues/29072)
    *   **重要性**: **🪟 Windows平台稳定性**。Windows用户在对代码应用补丁时，因沙箱安装程序无法从正确路径启动而频繁失败，严重影响Windows端体验。
    *   **社区反应**: 用户提供了详细的系统信息和日志，期望尽快修复。

8.  **子Agent关闭挂起 (Issue #24389)**
    *   **链接**: [Issue #24389](https://github.com/openai/codex/issues/24389)
    *   **重要性**: **🧩 架构稳定性问题**。`multi_agent_v1.close_agent` 在关闭无响应的子Agent时可能挂起超过8小时，导致主线程阻塞，影响复杂任务的可靠性。
    *   **社区反应**: 用户描述了多Agent协作场景下的具体卡死现象，DevOps和高级用户尤为关注。

9.  **Windows ARM64 Sandbox间歇性失败 (Issue #24259)**
    *   **链接**: [Issue #24259](https://github.com/openai/codex/issues/24259)
    *   **重要性**: **🪟 ARM平台兼容性**。在Windows 11 ARM64设备上，沙箱初始化 (`spawn setup refresh`) 间歇性失败，尽管`doctor`诊断报告健康。这阻碍了Surface Pro X等设备用户的正常使用。
    *   **社区反应**: 用户怀疑是沙箱与ARM64的兼容性问题，需要官方深入排查。

10. **Business版认证频繁失效 (Issue #28672)**
    *   **链接**: [Issue #28672](https://github.com/openai/codex/issues/28672)
    *   **重要性**: **🏢 企业级用户体验**。ChatGPT Business用户在Ubuntu开发容器中频繁遇到401认证错误，需要反复进行手机验证，导致工作流中断，对团队采用造成负面影响。
    *   **社区反应**: 用户表示此问题严重影响了生产力，希望提高企业认证的稳定性。

### 重要 PR 进展

1.  **MCP OAuth 认证重连与序列化 (PR #30292 - #30296, #30089, #29017 - #29021)**
    *   **开发者**: stevenlee-oai
    *   **链接**: [PR #30292](https://github.com/openai/codex/pull/30292) (核心)
    *   **内容**: 这是一系列针对 **MCP OAuth** 认证的重大重构PR的迭代。核心目标是 **序列化共享OAuth凭证存储**，以解决高并发场景下的竞态条件和认证丢失问题。这是提升Codex与外部MCP服务器集成稳定性的关键一步。

2.  **强制插件市场源策略 (PR #29691)**
    *   **开发者**: xl-openai
    *   **链接**: [PR #29691](https://github.com/openai/codex/pull/29691)
    *   **内容**: 此PR在运行时 **强制执行企业级插件市场来源策略**。允许企业管理员限制只能安装来自内部市场的插件，被阻止的插件将变为不活跃状态。对企业客户的安全合规至关重要。

3.  **禁用WebSocket的Nagle算法 (PR #30269)**
    *   **开发者**: richardopenai
    *   **链接**: [PR #30269](https://github.com/openai/codex/pull/30269)
    *   **内容**: 为Rendezvous WebSocket连接 **禁用Nagle算法**。这可以减少小数据包的延迟，提升Agent与执行服务器间通信的响应速度。

4.  **暴露环境信息RPC (PR #30291)**
    *   **开发者**: maxj-oai
    *   **链接**: [PR #30291](https://github.com/openai/codex/pull/30291)
    *   **内容**: 新增一个RPC接口，允许应用服务端客户端 **发现命名执行环境的Shell和工作目录**。这对于需要精确控制执行环境的复杂工作流非常有用。

5.  **稳定合成调用输出ID (PR #30327)**
    *   **开发者**: bolinfest
    *   **链接**: [PR #30327](https://github.com/openai/codex/pull/30327)
    *   **内容**: **修复对话上下文稳定性**。当模型生成“中止”调用时，代码会合成一个输出，但之前没有分配稳定的ID，这可能导致重试和调试时上下文错乱。此PR为此类输出分配了稳定的ID。

6.  **保留自定义工具调用的命名空间 (PR #30302)**
    *   **开发者**: nhamidi-oai
    *   **链接**: [PR #30302](https://github.com/openai/codex/pull/30302)
    *   **内容**: **修复自定义工具的兼容性**。确保在响应反序列化和重播时，保留自定义工具调用的可选命名空间。支持第三方工具的正确识别和分发。

7.  **增加 `currentTime/read` 超时时间 (PR #30384)**
    *   **开发者**: rka-oai
    *   **链接**: [PR #30384](https://github.com/openai/codex/pull/30384)
    *   **内容**: 将 `currentTime/read` 请求的超时时间从5秒 **延长到10秒**。可能是为了缓解某些网络环境下、高负载时出现的超时错误。

8.  **根据MCP可用性调整应用指南 (PR #30226)**
    *   **开发者**: sayan-oai
    *   **链接**: [PR #30226](https://github.com/openai/codex/pull/30226)
    *   **内容**: 优化模型的提示词。如果Apps MCP初始不可用但随后恢复，模型也能接收到使用其工具的指南，确保模型能动态利用工具。

### 功能需求趋势

*   **平台兼容性与原生体验**: **Linux桌面端 (#11023)** 和 **Windows on ARM (#24259)** 的支持是社区最强烈的呼声。用户期望在所有主流平台上获得一致且稳定的原生体验。
*   **安全与数据控制**: **敏感文件排除 (#2847)** 和 **企业级安全策略 (#29691)** 的需求凸显了用户对数据隐私和企业合规的高度重视。
*   **模型计费与配额透明**: 以 **#28879** 和 **#29955** 为代表，用户对配额消耗机制的变化极其敏感。社区要求官方在计费变更时提供明确通知和逻辑说明。
*   **核心交互控制**: 用户渴望更强大的控制能力，如 **`/undo` 命令回归 (#9203)** 和 **编辑前询问机制 (#24325)**，希望Agent的行为更具“可逆性”和“可预测性”。

### 开发者关注点

1.  **配额逻辑Bug是当前第一痛点**: 多个高热度Issue（#28879, #29955）直指配额消耗逻辑出现严重错误，导致付费服务无法正常使用。这是需要开发团队最优先排查和修复的问题。
2.  **Windows平台稳定性亟待提升**: 大量Bug报告针对Windows（#29072, #24259, #21863, #20570, #19190），从沙箱、补丁应用到Git操作，影响了Windows用户的核心工作流。
3.  **日志系统存在设计缺陷**: Issue #28224暴露的SQLite日志写入量过大问题，不仅是对SSD寿命的考验，更反映了程序在I/O和资源管理上的粗放，是值得关注的架构级问题。
4.  **多Agent稳定性与状态管理**: Issue #24389关于子Agent挂起的问题提示，复杂工作流（如多Agent协作）下的进程管理和状态同步机制仍不够健壮。
5.  **MCP集成安全性增强**: PR #30292等系列PR积极解决MCP OAuth的并发和持久化问题，表明开发者正努力强化Codex作为MCP客户端时的可靠性和安全性。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

好的，这是为您生成的 2026-06-28 Gemini CLI 社区动态日报。

---

# Gemini CLI 社区动态日报 — 2026-06-28

## 今日速览

今日社区热度集中在**子代理行为不可控**与**安全性强化**两大主题。多个关于子代理“静默扩权”、任务状态误报、以及绕过用户授权的 Bug 被修复或正在讨论中。此外，**安全补丁的自动化流程**和**AST 感知工具**的探索也是开发者关注的焦点。

## 版本发布

*   过去24小时内无新版本发布。

## 社区热点 Issues（Top 10）

1.  **Feature Proposal: Browser Control for Gemini CLI** (`#15956`)
    *   **重要性：** 一项重量级功能提案，提议通过混合架构（基于语义与视觉的代理）实现 CLI 控制浏览器的能力。这代表了 Gemini CLI 从代码执行向自动化操作跨出的一大步。
    *   **社区反应：** 讨论热烈，共有 14 条评论，体现了社区对扩展 CLI 自动化边界的强烈兴趣。
    *   **链接：** [Issue #15956](https://github.com/google-gemini/gemini-cli/issues/15956)

2.  **Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption** (`#22323`)
    *   **重要性：** **关键 Bug**。子代理在达到最大轮次（`MAX_TURNS`）被强制中断后，却将状态报告为“成功”（GOAL success），这严重误导了对任务执行结果的判断，破坏了用户对代理可靠性的信任。
    *   **社区反应：** 该问题获得了 2 个 👍，尽管只有维护者可见，但“状态/待重测”的标签表明其正在被优先处理。
    *   **链接：** [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

3.  **Robust component level evaluations** (`#24353`)
    *   **重要性：** 这是一项跟踪系统稳定性提升的 EPIC，旨在建立更健壮的组件级评估体系。对于长期维护和提升代理群的整体质量至关重要。
    *   **社区反应：** 该问题被视为一个客户问题（customer-issue），表明社区用户反馈推动了内部质量标准的提升。
    *   **链接：** [Issue #24353](https://github.com/google-gemini/gemini-cli/issues/24353)

4.  **Generalist agent hangs** (`#21409`)
    *   **重要性：** **高优先级 Bug (P1)**。通用代理在执行简单任务（如创建文件夹）时挂起，严重影响用户体验。开发者只能通过显式指示代理不使用子代理来规避。
    *   **社区反应：** 获得 8 个 👍 支持，表明大量用户遇到了同样的问题，社区对此深表困扰。
    *   **链接：** [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)

5.  **Gemini does not use skills and sub-agents enough** (`#21968`)
    *   **重要性：** 社区反馈的核心用户痛点。用户自定义的技能（skills）和子代理（sub-agents）几乎不会被 Gemini 主动调用，导致用户的配置和努力白费，无法实现高度定制化的自动化流程。
    *   **社区反应：** 这是一个用户普遍反映的问题，直接影响高级用户的使用体验。
    *   **链接：** [Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)

6.  **Shell command execution gets stuck with "Waiting input" after command completes** (`#25166`)
    *   **重要性：** **高优先级 Bug (P1)**。执行简单 Shell 命令后，CLI 会持续显示“等待用户输入”并卡死，即使命令已经完成。这是一个直接影响日常使用流畅性的顽固问题。
    *   **社区反应：** 收到 3 个 👍，多位用户遇到此问题，反馈强烈。
    *   **链接：** [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)

7.  **browser subagent fails in wayland** (`#21983`)
    *   **重要性：** **高优先级 Bug (P1)**。浏览器子代理在 Wayland 显示服务器上无法工作。Linux 用户群体的使用体验因此受到直接影响，这是平台兼容性的关键问题。
    *   **社区反应：** 该 Bug 被标记为“状态/待重测”，表明修复可能正在进行中。
    *   **链接：** [Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)

8.  **Memory system bugs and quality improvements** (`#26516`)
    *   **重要性：** 这是一项汇总多项内存系统 Bug 和改进的跟踪 Issue，涵盖了低信号会话无限重试、补丁隔离、日志安全性等多个方面。内存系统的质量直接关系到代理的长期记忆和上下文理解能力。
    *   **社区反应：** 该系列 Issue 由同一个开发者提出，表明内部正在系统性地重构和优化记忆模块。
    *   **链接：** [Issue #26516](https://github.com/google-gemini/gemini-cli/issues/26516)

9.  **Agent should stop/discourage destructive behavior** (`#22672`)
    *   **重要性：** 这是一个社区呼声很高的功能需求，与 UI 安全相关。用户希望代理在执行如 `git reset --force` 等高风险操作时能主动停止或警告，防止数据丢失。
    *   **社区反应：** 被标记为客户问题，反映了用户对“安全代理”的迫切需求。
    *   **链接：** [Issue #22672](https://github.com/google-gemini/gemini-cli/issues/22672)

10. **Fix instances of incorrect \n escape behavior** (`#22466`)
    *   **重要性：** 尽管标记为小工作量（size/small），但“\n”转义处理不当会导致文本格式错误，影响所有与文本处理相关的任务，是一个微小但烦人的常见 Bug。
    *   **社区反应：** 问题中提到“从用户群中看到报告”，说明它是一个真实的社区痛点。
    *   **链接：** [Issue #22466](https://github.com/google-gemini/gemini-cli/issues/22466)

## 重要 PR 进展（Top 10）

1.  **fix(security): require approved bot patch artifacts** (`#28178`)
    *   **重要性：** 这是一项**关键安全补丁**，修复了自动化发布流程中的一个严重漏洞。它要求补丁工件（`bot-changes.patch`）必须经过显式批准才能被发布，将审核与发布边界严格锁定，防止恶意或未经验证的代码被自动发布。
    *   **链接：** [PR #28178](https://github.com/google-gemini/gemini-cli/pull/28178)

2.  **fix(policy): require confirmation for shell parameter expansion** (`#28175`)
    *   **重要性：** **安全增强**。对于包含参数扩展（如 `${VAR}`）的 Shell 命令，现在在交互模式下会要求用户确认，在 YOLO 模式下则直接拒绝。这有效防止了因恶意或意外的命令注入而导致的潜在破坏。
    *   **链接：** [PR #28175](https://github.com/google-gemini/gemini-cli/pull/28175)

3.  **feat(caretaker): egress cloud run service** (`#28167`)
    *   **重要性：** **自动化基础设施**。为“看门人”代理（caretaker-agent）新增了出口 Cloud Run 服务，使其能接收验证后的动作事件并自动执行 GitHub 操作。这是构建更可靠、可审计的自动化 CM 流程的关键步骤。
    *   **链接：** [PR #28167](https://github.com/google-gemini/gemini-cli/pull/28167)

4.  **fix(agent): prevent silent scope expansion on task failure** (`#28171`)
    *   **重要性：** **Bug 修复**。当代理最初的方法失败后，会静默地扩大操作范围（如读取整个文件、运行脚本）。此 PR 通过添加明确指令，强制代理在策略变更时告知用户，提升了 LLM 行为的可预测性和透明度。
    *   **链接：** [PR #28171](https://github.com/google-gemini/gemini-cli/pull/28171)

5.  **feat(evals): add eval coverage report command** (`#28169`)
    *   **重要性：** **开发者工具**。添加了一个 `eval:coverage` 命令，用于报告内置工具的评估覆盖率。这帮助开发者了解哪些功能得到了充分测试，从而更有针对性地编写评估用例。
    *   **链接：** [PR #28169](https://github.com/google-gemini/gemini-cli/pull/28169)

6.  **fix(core): guard message inspectors against empty parts arrays** (`#28068`)
    *   **重要性：** **Bug 修复**。修复了 JavaScript 中 `[].every()` 的真空真值问题，该问题导致带有空 `parts` 数组的消息被错误分类。这可能导致后续处理逻辑混乱甚至崩溃。
    *   **链接：** [PR #28068](https://github.com/google-gemini/gemini-cli/pull/28068)

7.  **fix(a2a-server): deep-merge user and workspace settings** (`#28094`)
    *   **重要性：** **配置管理修复**。修复了用户设置和工作区设置的浅合并问题。先前，工作区设置会完全覆盖用户设置中嵌套的对象（如 `tools`、`telemetry`配置），现在改为深度合并，使配置分层更符合预期。
    *   **链接：** [PR #28094](https://github.com/google-gemini/gemini-cli/pull/28094)

8.  **fix(core-tools): resolve defensive path resolution for at-reference files** (`#28053`)
    *   **重要性：** **Bug 修复**。修复了当模型传递以 `@` 前缀的路径时，文件系统工具（如 `read_file`）找不到文件的致命错误。该修复增强了路径解析的鲁棒性。
    *   **链接：** [PR #28053](https://github.com/google-gemini/gemini-cli/pull/28053)

9.  **fix(core): buffer chat compression telemetry until SDK is initialized** (`#28093`)
    *   **重要性：** **Telemetry 修复**。修复了在 SDK 初始化完成前发出遥测日志，导致潜在状态错误的问题。通过延迟直至 SDK 就绪，确保了遥测数据的准确性和可靠性。
    *   **链接：** [PR #28093](https://github.com/google-gemini/gemini-cli/pull/28093)

10. **fix(core): preserve dollar sequences in prompt template substitutions** (`#28055`)
    *   **重要性：** **Bug 修复**。修复了技能、子代理和工具描述中包含 `$` 序列（如 `$$`）时被损坏的问题。该修复确保了模板替换的正确性，避免提示词被意外更改。
    *   **链接：** [PR #28055](https://github.com/google-gemini/gemini-cli/pull/28055)

## 功能需求趋势

从近日的社区动态来看，有三大功能需求趋势尤为突出：

1.  **代理行为的控制与可预测性：** 社区最强烈的呼声是让代理的行为更加“听话”和可预测。这包括：
    *   **更精准的执行范围：** 当要求检查特定代码行时，代理不应静默地读取整个文件或运行脚本。
    *   **更主动的风险规避：** 在执行破坏性操作（如 `git reset --force`）前应主动警告或请求批准。
    *   **更准确的自我评估：** 子代理在达到 `MAX_TURNS` 时不应谎报为“成功”。

2.  **安全性与权限管理的精细化：** 随着代理能力增强，安全问题日益凸显。
    *   **自动化流程的安全边界：** 要求对自动发布的补丁进行强制审核，防止未经验证的代码被发布。
    *   **Shell 执行的安全性：** 严格限制 Shell 参数扩展等高危操作，引入用户确认机制。
    *   **子代理权限控制：** 用户明确禁用子代理后，应能获得严格遵循。

3.  **代理的智能关联与使用：** 社区在“自动化”的基础上，提出了更高的“智能化”要求。
    *   **主动调用用户配置：** Gemini 应能根据上下文自主决定使用用户配置的技能和子代理，而不是需要用户每次手动指定。
    *   **上下文敏感的代码理解：** 通过 AST（抽象语法树）感知文件读取和搜索，以更精确地理解代码结构和方法边界，减少无效的 token 消耗。

## 开发者关注点

开发者在反馈中集中反映了以下几个痛点和高频需求：

*   **代理工作稳定性不足：** “通用代理挂起”、“Shell 命令卡死”等是开发者使用过程中最影响效率的问题。
*   **用户自定义配置利用率低：** 用户投入精力配置了技能和子代理，但 Gemini 基本不会主动使用，这种“配置了但没用”的体验让人感到沮丧。
*   **平台兼容性问题：** 特别是在 Linux（Wayland）环境下，浏览器子代理的失效问题依然存在。
*   **内部状态透明度低：** 当子代理出错或挂起时，用户很难获知其内部状态，缺乏有效的调试手段（如 `/bug` 报告缺乏子代理上下文）。
*   **工作区清理负担：** 模型在执行任务时会在随机位置创建临时脚本文件，增大了后续的工作区清理工作量。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 | 2026-06-28

---

## 今日速览

过去24小时，GitHub Copilot CLI 社区活跃度极高，新提交了多个 Bug 报告和功能请求。最值得关注的是 **Windows 平台出现 v1.0.66 严重回归**，导致 `.bat`/`.cmd` 格式的 MCP 服务器无法启动；同时有用户反映 **Windows 11 上复制功能失效**、**macOS 上文件拖拽附件功能损坏**。此外，社区对**会话保留/过期策略透明化**、**Alt-Screen 模式退出支持**等体验类功能需求呼声较高。

---

## 版本发布

过去24小时内无新版本发布。当前最新版本为 **v1.0.66**（Windows 版本存在回归问题），上一个版本为 **v1.0.65**。

---

## 社区热点 Issues（精选 10 条）

### 1. [#2165 - Ubuntu keychain support is broken](https://github.com/github/copilot-cli/issues/2165)
- **标签**: `area:platform-linux`, `area:authentication`
- **重要性**: ⭐⭐⭐⭐⭐（👍 20）
- **摘要**: Ubuntu 下 `secret-tool` 未安装时，官方文档给出的 `sudo apt install` 命令有误，导致密钥环无法正常工作。
- **社区反应**: 2条评论，关注度极高，持续近3个月未修复。

### 2. [#3949 - Copy, Windows 11, does not work; nothing is on clipboard](https://github.com/github/copilot-cli/issues/3949)
- **标签**: `area:input-keyboard`, `area:platform-windows`
- **重要性**: ⭐⭐⭐⭐⭐
- **摘要**: Windows 11 上执行复制操作后，系统剪贴板为空，但 Copilot 仍告知用户“已复制”。用户建议至少增加剪贴板内容校验。
- **社区反应**: 2条评论，反馈尖锐，复现路径清晰。

### 3. [#3958 - Windows: v1.0.66 fails to start stdio MCP servers with .bat/.cmd args (regression)](https://github.com/github/copilot-cli/issues/3958)
- **标签**: `triage`
- **重要性**: ⭐⭐⭐⭐⭐
- **摘要**: v1.0.66 在 Windows 上无法启动任何以 `.bat`/`.cmd` 为命令并带参数的 stdio MCP 服务器，子进程立即崩溃，报错 `The syntax of the command is incorrect.`
- **社区反应**: 1条评论，属于严重回归问题，影响所有自定义 MCP 用户。

### 4. [#1799 - How to turn off alt-screen views?](https://github.com/github/copilot-cli/issues/1799)
- **标签**: `area:configuration`, `area:terminal-rendering`
- **重要性**: ⭐⭐⭐⭐（👍 7）
- **摘要**: 用户反馈“alt-screen”模式引入后带来不少问题，希望退回到原始显示模式。
- **社区反应**: 10条评论，讨论活跃，社区期待官方提供切换开关。

### 5. [#3959 - Visual artifacts / "ghost" characters remain rendered in TUI after deleting text](https://github.com/github/copilot-cli/issues/3959)
- **标签**: `triage`
- **重要性**: ⭐⭐⭐⭐
- **摘要**: 在 Copilot CLI 提示符中删除文本后，终端未能完全清除/重绘，出现“幽灵字符”残留。影响终端使用的视觉体验。
- **社区反应**: 0条评论，新提交，问题清晰。

### 6. [#3957 - Unable to scroll through history using trackpad on MBP](https://github.com/github/copilot-cli/issues/3957)
- **标签**: `triage`
- **重要性**: ⭐⭐⭐⭐
- **摘要**: MacBook Pro 用户无法使用触控板滚动查看过往消息，触控板滚动反而选中了之前的提示词，而非滚动窗口内容。
- **社区反应**: 0条评论，影响 macOS 用户交互体验。

### 7. [#3960 - Custom model provider still consuming AI quota](https://github.com/github/copilot-cli/issues/3960)
- **标签**: 无，已关闭
- **重要性**: ⭐⭐⭐⭐
- **摘要**: 使用自定义模型提供商（替代提供商）时，GitHub AI 配额仍然被消耗，而不是使用自定义提供商的 Token 配额。
- **社区反应**: 0条评论，已关闭，但问题尚未解决。

### 8. [#3963 - [Feature Request] Show session retention/expiration date](https://github.com/github/copilot-cli/issues/3963)
- **标签**: `triage`
- **重要性**: ⭐⭐⭐
- **摘要**: 用户请求在状态栏显示会话保留/过期日期。开发者反映会话有时会不明消失，希望了解 Copilot 的会话生命周期策略。
- **社区反应**: 0条评论，新功能请求。

### 9. [#3955 - Drag and drop of files to attach no longer works (regression, macOS)](https://github.com/github/copilot-cli/issues/3955)
- **标签**: `triage`
- **重要性**: ⭐⭐⭐⭐
- **摘要**: macOS 上从 Finder 拖拽文件到 Copilot 应用以附加到提示词的功能已损坏。拖拽后无任何反应，属于回归问题。
- **社区反应**: 0条评论，影响 macOS 用户文件交互流程。

### 10. [#3672 - Ability to customize keyboard shortcut for `/voice` dictation toggle](https://github.com/github/copilot-cli/issues/3672)
- **标签**: `area:input-keyboard`, `area:configuration`
- **重要性**: ⭐⭐⭐
- **摘要**: 用户高度赞扬新增的 `/voice` 语音输入功能，但希望可以自定义快捷键来切换语音听写，以适配不同设备（如触控栏 MacBook）。
- **社区反应**: 0条评论，功能请求明确。

---

## 重要 PR 进展（精选 3 条）

### 1. [#3928 - Add .gitignore and settings configuration](https://github.com/github/copilot-cli/pull/3928)
- **作者**: `tpsaint`
- **状态**: OPEN
- **点评**: 为项目添加 `.gitignore` 和设置配置文件。虽规模不大，但有助于规范仓库管理、提升协作效率。无评论，待 code review。

### 2. [#570 - [WIP] Add macOS installation instructions to README.md](https://github.com/github/copilot-cli/pull/570)
- **作者**: `Copilot`
- **状态**: CLOSED（2026-06-27 更新，但已关闭）
- **点评**: 由 Copilot 自身发起，添加 macOS 特定的安装说明。包含“原始提示”等自动化生成内容。已关闭但被合并的可能性存在，值得关注是否最终落地。

### 3. [#3737 - Jigg empire ai](https://github.com/github/copilot-cli/pull/3737)
- **作者**: `j2030aiNotez`
- **状态**: OPEN
- **点评**: 描述极简，“Let’s try this new method”。内容不明，可能为实验性提交或无效 PR。无评论，暂不具参考价值。

---

## 功能需求趋势

从过去24小时的所有 Issue/PR 中，可归纳出社区最关注的三大功能方向：

1. **跨平台稳定性与兼容性修复**
    - Windows: MCP 服务器启动回归（`.bat`/`.cmd`）、复制功能失效
    - macOS: 文件拖拽附件回归、触控板滚动失效
    - Linux/Ubuntu: 密钥环认证持续故障
2. **终端渲染与交互体验优化**
    - Alt-Screen 模式退出开关（#1799）
    - TUI 渲染重绘问题（#3959）
    - 键盘快捷键自定义（#3672）
3. **模型与配额透明化**
    - 自定义模型提供商消耗自有 Token 配额（#3960）
    - 会话保留/过期日期展示（#3963）
    - `/btw` 式上下文即时询问功能（#2778）

---

## 开发者关注点

- **回归问题频发**：v1.0.66 引入的 Windows MCP 中断、以及多个平台的拖拽/复制能力回退，表明近期版本在质量管控上存在漏洞，开发者对回归感到困扰。
- **配置与文档不足**：Alt-Screen 无法关闭（#1799）、密钥环文档有误（#2165）、键盘快捷键不可自定义（#3672），反映出用户在配置灵活性和文档准确性方面需求强烈。
- **透明的数据生命期管理**：多位开发者提到会话无故消失、配额消耗不透明，要求官方提供更清晰的保留策略和校验机制。
- **对“已验证”反馈的高预期**：用户对“Copilot 告知已复制但剪贴板为空”的行为极为不满，建议增加**操作后校验**，体现开发者对工具可靠性的严格要求。

---

*数据来源：GitHub `github/copilot-cli` 仓库 | 更新时间：2026-06-28 UTC*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

好的，这是为您生成的 2026-06-28 OpenCode 社区动态日报。

---

# OpenCode 社区动态日报 | 2026-06-28

## 今日速览

今日社区动态活跃，重点在于 TUI (用户界面) 的体验升级以及对新模型、支付方式的呼声。核心进展包括：**TUI 会话重命名功能**已通过 PR 实现并合并；多起涉及 **WSL 路径问题** 和 **桌面端深度集成 Bug** 的讨论热度不减；社区对 **加密货币支付** 和 **新模型支持** 的诉求依然强烈。

## 版本发布

今日无新版本发布。

## 社区热点 Issues

1.  **[#23153] [功能请求]：支持使用加密货币支付**
    - **重要性**：评论数最多（13条），获赞最多（24个）。这表明社区中有一部分用户对支付方式多元化有强烈需求，可能涉及隐私或地域限制问题。
    - **社区反应**：用户积极表达了对其功能的渴望，但暂时没有看到维护者的官方回复。
    - 链接: https://github.com/anomalyco/opencode/issues/23153

2.  **[#13877] TUI /sessions 选择器仅显示近期会话**
    - **重要性**：影响用户查找和管理历史会话的功能性 Bug。对于一个重视会话管理的工具而言，这是比较关键的体验问题。
    - **社区反应**：讨论了9条，有用户详细描述了问题场景，社区关注度较高。
    - 链接: https://github.com/anomalyco/opencode/issues/13877

3.  **[#25848] [功能请求]：添加会话重命名功能**
    - **重要性**：这是一个呼声很高且已被修复的功能。表明社区对会话管理的精细控制有明确期望。今天已有合并的 PR 解决此问题。
    - **社区反应**：8条评论，讨论集中在如何实现该功能上。
    - 链接: https://github.com/anomalyco/opencode/issues/25848

4.  **[#19473] 桌面版向 WSL 服务器发送 UNC 路径，导致所有 Bash 工具调用失败**
    - **重要性**：影响 Windows + WSL 开发者体验的关键 Bug。路径问题会直接导致所有工具调用都无法工作。虽然已有权宜之计，但仍是痛点。
    - **社区反应**：用户积极讨论并提供反馈，相关 PR 已合入修复。
    - 链接: https://github.com/anomalyco/opencode/issues/19473

5.  **[#12219] 请求需要更多积分，或更少的 max_tokens**
    - **重要性**：涉及 API 调用成本和额度管理，是用户使用过程中的常见障碍。用户希望使用免费模型时，能清晰地理解额度限制。
    - **社区反应**：评论7条，用户反映了具体的报错信息，显示了日常使用中的痛点。
    - 链接: https://github.com/anomalyco/opencode/issues/12219

6.  **[#19130] Windows ARM64 原生版：OpenTUI 因 bun:ffi dlopen TinyCC 错误无法初始化**
    - **重要性**：特定平台（Windows ARM64）的严重兼容性问题，阻碍了该平台上 TUI 的正常使用。随着 ARM PC 的普及，此问题的重要性会提升。
    - **社区反应**：获取了6条评论，用户提供了详细的错误诊断步骤。
    - 链接: https://github.com/anomalyco/opencode/issues/19130

7.  **[#33890] Bun 1.3.14 在 Linux x86_64 上段错误 (SIGILL)**
    - **重要性**：严重崩溃问题，直接导致 TUI 无法使用。虽然可能是个例，但用户提供了详细的硬件和软件环境，便于排查。
    - **社区反应**：6条评论，用户报告了CPU特定指令集（AVX-512）与Bun运行时的兼容性问题。
    - 链接: https://github.com/anomalyco/opencode/issues/33890

8.  **[#34228] Bug报告：opencode 暴露给模型的项目技能不稳定且不完整**
    - **重要性**：影响 Agent 智能的核心功能问题。如果提供的技能不一致，会导致 Agent 的行为不可预测，严重影响可靠性和用户体验。
    - **社区反应**：刚创建的 Issue，获得5条评论，问题描述清晰，社区关注度正在上升。
    - 链接: https://github.com/anomalyco/opencode/issues/34228

9.  **[#33213] Server模式：长时间运行导致匿名 JS 堆/交换内存持续增长**
    - **重要性**：影响服务器稳定性的性能问题。内存泄漏若不解决，将导致服务端进程被 OOM Killer 杀死，影响所有连接用户。
    - **社区反应**：用户提供了详细的内存分析数据（cgroup 峰值），有助于开发者定位问题。
    - 链接: https://github.com/anomalyco/opencode/issues/33213

10. **[#34207] 回答问题后模型选择会被静默重置**
    - **重要性**：一个令人困惑的交互 Bug。用户主动切换模型，但 Agent 在问答交互后却悄悄改回，这会破坏用户意图和期望。
    - **社区反应**：创建24小时内，已有4条评论，反映了用户遇到的令人沮丧的体验。
    - 链接: https://github.com/anomalyco/opencode/issues/34207

## 重要 PR 进展

1.  **[#34264] feat(tui): 添加会话重命名功能**
    - **功能/修复**：实现了完整的端到端会话重命名功能。
    - **重要性**：社区长期期待的功能，今天已合并。标志着该功能将很快可用。
    - 链接: https://github.com/anomalyco/opencode/pull/34264

2.  **[#34263] feat(tui): 为 V2 会话连接撤销/重做和回滚功能**
    - **功能/修复**：将 V2 的 staged-revert API 与 TUI 打通，替换了之前的占位符。
    - **重要性**：极大提升了操作的可逆性和容错能力，是编辑器体验的重要升级。
    - 链接: https://github.com/anomalyco/opencode/pull/34263

3.  **[#34267] fix(llm): 当插件追加单条系统消息时折叠系统消息**
    - **功能/修复**：修复了LLM请求中系统消息折叠逻辑的Bug。
    - **重要性**：确保 API 调用更高效、符合规范，避免因多余的系统消息导致预期外的行为。
    - 链接: https://github.com/anomalyco/opencode/pull/34267

4.  **[#29881] fix(tui): 为 Wayland 系统添加 wl-paste 文本读取支持**
    - **功能/修复**：修复在 Wayland 下粘贴功能无效的问题。
    - **重要性**：解决了 Wayland 用户无法使用 `Ctrl+V` 粘贴的痛点，提升了跨平台兼容性。
    - 链接: https://github.com/anomalyco/opencode/pull/29881

5.  **[#34261] fix(core): 防止非减少性压缩**
    - **功能/修复**：修复了内存溢出恢复机制中的一个 Bug，防止压缩失败时无限循环。
    - **重要性**：增强稳定性，防止因内存问题导致进程卡死或崩溃。
    - 链接: https://github.com/anomalyco/opencode/pull/34261

6.  **[#34256] fix(server): 在实例查找前拒绝外部目录提示**
    - **功能/修复**：修复了核心的路径校验问题，防止 WSL/跨平台场景下的目录混淆。
    - **重要性**：直接关联到多个WSL路径相关的 Issue，是解决跨平台文件访问问题的关键一步。
    - 链接: https://github.com/anomalyco/opencode/pull/34256

7.  **[#34234] fix: 保留附件文件路径**
    - **功能/修复**：修复了拖拽/粘贴附件后路径丢失的问题。
    - **重要性**：确保 Agent 能够通过原始文件路径访问附件，而不是仅仅处理内嵌的数据，提升了 Agent 处理文件的能力。
    - 链接: https://github.com/anomalyco/opencode/pull/34234

8.  **[#34242] fix(tui): 防止管道输入破坏 UI 和键盘输入**
    - **功能/修复**：修复了通过管道（`|`）将内容输入到 TUI 时导致界面或键盘失灵的问题。
    - **重要性**：解决了一个长期存在的低级 Bug，提升了 TUI 的健壮性和可用性。
    - 链接: https://github.com/anomalyco/opencode/pull/34242

9.  **[#34246] feat(tui): 添加 `tool_output_expanded_default` 选项**
    - **功能/修复**：新增 TUI 配置项，允许用户默认展开工具输出。
    - **重要性**：这是一个贴心的用户体验改进，满足了用户希望默认看到工具完整输出的需求。
    - 链接: https://github.com/anomalyco/opencode/pull/34246

10. **[#34227] fix(console): 处理部分 Zen 退款**
    - **功能/修复**：修复了 Stripe 支付退款逻辑，确保部分退款能够被正确处理。
    - **重要性**：维护了财务系统的准确性，对于使用付费服务的用户至关重要。
    - 链接: https://github.com/anomalyco/opencode/pull/34227

## 功能需求趋势

从今日的 Issues 中可以提炼出社区最关注的以下几个功能方向：

1.  **支付与计费**：对**加密货币支付**（#23153）的呼声很高，表明一些用户对传统支付方式有替代需求。同时，API 额度显示和成本控制（#12219）也是用户关注的日常痛点。
2.  **跨平台与兼容性**：**WSL 和 Windows** 的兼容性问题依然是最突出的痛点（#19473, #30895）。此外，对 **Windows ARM64** 原生支持（#19130）、**Wayland** 的支持（#29881）都是强烈的社区需求。
3.  **模型与供应商支持**：社区持续关注对新模型的支持，如 **GLM 系列**（#31348, #34113）、**Nemotron**（#34026）和 **minimax-m3**（#34177）。还有用户希望能够支持**企业 GitHub Copilot 的第三方模型**（#34030）。
4.  **会话管理与 UI/UX**：**会话管理**（如重命名 #25848）和 **TUI 交互**（如撤销/重做 #34263, 默认展开工具输出 #34246）是社区在功能丰富度和易用性方面的核心关注点。

## 开发者关注点

汇总今日的反馈，开发者在日常使用中遇到的痛点和高频需求包括：

- **路径问题**：在 WSL/Windows 混合环境中，路径转换和识别问题仍然是最大的痛点（#19473, #30895, #34256）。
- **稳定性与性能**：**进程崩溃**（#33890, #34054）、**高内存/CPU占用**（#33213, #34226）、**卡死/无响应**（#34214）是影响日常效率的严重问题。
- **交互可靠性**：**模型选择静默重置**（#34207）、**快捷键无效**（#29148）、**管道输入破坏UI**（#34242）等问题让人困惑且降低效率。
- **模型行为一致性**：**项目技能不稳定**（#34228）是影响 Agent 智能和可靠性的核心问题，开发者希望 Agent 能可靠地使用所有已配置的技能。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

好的，这是为您生成的 Pi 社区动态日报。

---

# Pi 社区动态日报 | 2026-06-28

## 今日速览

今日社区动态十分活跃，共计处理了超过20个Issue和9个PR。核心焦点集中在**扩展生态系统的稳定性与安全性**（包括恶意包举报、安装失败与副作用管理）以及**用户体验优化**（如Markdown滚动行为异常、编辑器配置问题）。同时，对**新模型（如GLM、DiffusionGemma）的兼容性修复**也成为社区关注的热点。

## 社区热点 Issues

1.  **#6129 [高危] 举报恶意扩展包 `@hypabolic/pi-hypa`**
    - **摘要：** 社区成员举报该包通过“刷安装量”方式进行自我推广，虽未直接发现恶意代码，但行为本身已破坏社区信任，存在后续安全风险。
    - **为什么重要：** 这是对Pi扩展生态安全的一道警钟，引发了社区对包审查机制的讨论。Issue已被关闭，但讨论仍在继续。
    - **链接：** [#6129](https://github.com/earendil-works/pi/issues/6129)

2.  **#5825 [BUG] 流式输出Markdown时强制滚动到底部**
    - **摘要：** 当用户在阅读AI正在生成的Markdown响应时，若向上滚动查看历史内容，几秒钟后Pi会将视图强制拉回底部，严重影响阅读体验。
    - **为什么重要：** 此问题在启用“clear on shrink”设置时出现，直接打断用户阅读流，是一个影响深远的交互Bug。已获得34条评论，说明用户对此感受强烈。
    - **链接：** [#5825](https://github.com/earendil-works/pi/issues/5825)

3.  **#5763 [BUG] Provider 吞没 HTTP 错误体，导致代理/网关报错难以排查**
    - **摘要：** 当通过代理或网关请求时，后端返回的HTTP错误信息（如403）中的具体原因被Provider（如Bedrock, OpenAI）吞没，仅显示毫无意义的“UnknownError”，给调试带来巨大困难。
    - **为什么重要：** 此问题直击开发者核心痛点，影响所有使用企业级或自定义网关的用户。已被标记为“inprogress”，表明正在被积极修复。
    - **链接：** [#5763](https://github.com/earendil-works/pi/issues/5763)

4.  **#6124 [BUG] 输入天城文（如印地语）导致界面UI崩溃**
    - **摘要：** 用户报告在输入某些Unicode字符（如天城文）时，Pi的终端UI会完全错乱、无法使用。
    - **为什么重要：** 这暴露了Pi在非拉丁字符集和多语言支持上的严重缺陷，限制了Pi在全球非英语开发者社区中的普及。
    - **链接：** [#6124](https://github.com/earendil-works/pi/issues/6124)

5.  **#6127 [BUG] `--append-system-prompt` 无法覆盖默认的 coding-agent 身份**
    - **摘要：** 即便使用`--append-system-prompt`设置了自定义的agent身份（如姓名、人格），Pi仍然会先加载其内置的“编码助手”身份，导致用户自定义无法完全生效。
    - **为什么重要：** 对于希望深度定制Pi行为的高级用户和集成开发者（如RPC模式），这是一个直接障碍。
    - **链接：** [#6127](https://github.com/earendil-works/pi/issues/6127)

6.  **#6128 [BUG] Pi 无法正确解析 DiffusionGemma 的“思考”块**
    - **摘要：** 在测试DiffusionGemma模型时，其独特的“思考/推理”过程被Pi当作普通文本输出，破坏了预期的显示逻辑。
    - **为什么重要：** 这表明Pi对新模型（特别是具有非标准输出格式的模型）的兼容性适配仍需加强，是保持前沿性的关键。
    - **链接：** [#6128](https://github.com/earendil-works/pi/issues/6128)

7.  **#4106 [Bug] Pi 内置模型定义错误导致 Qwen3.5/3.6 Plus 等模型无法使用**
    - **摘要：** 用户反馈Pi内置的模型配置文件错误，导致多个流行模型（如Qwen3.5 Plus, MiniMax M2.7）调用失败。虽然Issue已关闭，但暴露了模型列表维护的短板。
    - **为什么重要：** 此问题说明即使是最核心的模型支持列表，也可能存在配置错误，依赖社区自检和报告。
    - **链接：** [#4106](https://github.com/earendil-works/pi/issues/4106)

8.  **#6113 [BUG] 在使用 GLM 编程套餐时，会话使用量异常偏高**
    - **摘要：** 有用户报告，在使用GLM的付费编程计划时，会话消耗速度远超预期，疑似存在Bug。
    - **为什么重要：** 直接触及用户经济利益，涉及付费API使用量的计费准确性，信任度极高。
    - **链接：** [#6113](https://github.com/earendil-works/pi/issues/6113)

9.  **#6112 [BUG] 对 `settings.json` 无写权限时，`pi install` 仍报告成功**
    - **摘要：** 当用户对配置文件`settings.json`没有写权限时，执行`pi install`命令依然显示“安装成功”，但实际并未生效，导致命令不可用。
    - **为什么重要：** 这是一个典型的“静默失败”Bug，容易误导用户，导致困惑和浪费时间排查。
    - **链接：** [#6112](https://github.com/earendil-works/pi/issues/6112)

10. **#6122 [功能请求] 为 `Ctrl+G` 增加外部编辑器配置项**
    - **摘要：** 目前`Ctrl+G`快捷键调用外部编辑器仅依赖`$EDITOR`环境变量，但在某些系统（如Windows+Git Bash）上此变量难以修改。用户希望在`settings.json`中添加配置项以覆盖该行为。
    - **为什么重要：** 这是一个高价值的小优化，能显著改善特定用户的跨平台体验。该功能对应的PR #6123也已合并。
    - **链接：** [#6122](https://github.com/earendil-works/pi/issues/6122)

## 重要 PR 进展

1.  **#5735 [OPEN] 安全地延迟扩展重载请求**
    - **摘要：** 此PR将`ctx.reload()`方法添加到所有扩展上下文中，并利用延迟机制确保重载操作只在安全边界执行。
    - **为什么重要：** 解决了扩展在非安全点调用`reload()`时可能引发的崩溃或状态不一致问题，是提升扩展生态稳定性的关键基础设施。
    - **链接：** [#5735](https://github.com/earendil-works/pi/pull/5735)

2.  **#5832 [OPEN] 修复 Provider 吞没 HTTP 错误体的问题**
    - **摘要：** 直接对应Issue #5763。PR修改了Provider层，将代理/网关返回的真实HTTP错误体（如403的详细原因）透传给用户，而非显示“UnknownError”。
    - **为什么重要：** 这将极大改善使用非标准网络环境或企业级网关的开发者体验。
    - **链接：** [#5832](https://github.com/earendil-works/pi/pull/5832)

3.  **#6123 [CLOSED] 新增 `externalEditor` 设置项**
    - **摘要：** 对应Issue #6122。PR实现了在`settings.json`中配置`externalEditor`的功能，以此覆盖系统的`$EDITOR`环境变量。
    - **为什么重要：** 一个小而美的改进，解决了特定环境下的配置痛点，体现了对开发者跨平台体验的关怀。
    - **链接：** [#6123](https://github.com/earendil-works/pi/pull/6123)

4.  **#6119 [CLOSED] 新增 `reportUsage` API，允许扩展贡献会话消耗**
    - **摘要：** 此PR为扩展API新加了`pi.reportUsage()`方法，使子Agent扩展能够将其API调用成本（Token消耗、费用）反馈给主会话。
    - **为什么重要：** 实现了费用中心化核算，让用户能在主会话中统揽所有成本，对于使用复杂多Agent工作流的开发者至关重要。
    - **链接：** [#6119](https://github.com/earendil-works/pi/pull/6119)

5.  **#6115 [OPEN] 新增可配置的聊天区域边距**
    - **摘要：** 针对社区反复提出的“去除TUI边距”的请求，此PR尝试在TUI中添加一个设置项来控制边距大小。
    - **为什么重要：** 虽然改动可能很大，但正面回应了用户对UI定制化和屏幕空间利用率的长期诉求。
    - **链接：** [#6115](https://github.com/earendil-works/pi/pull/6115)

6.  **#6099 [CLOSED] 修正Azure OpenAI模型名称 `5.2-chat-latest`**
    - **摘要：** 根据Azure官方文档，PR将模型key从`gpt-5.2-chat-latest`更正为`gpt-5.2-chat`，修复了模型不可用的问题。
    - **为什么重要：** 一个及时且必要的Bug修复，避免了用户因模型配置错误而无法使用最新模型。
    - **链接：** [#6099](https://github.com/earendil-works/pi/pull/6099)

7.  **#6111 [CLOSED] 修复 `pi install` 在无写权限时的静默失败问题**
    - **摘要：** 对应Issue #6112。此PR确保`pi install`和`pi remove`命令在无法写入配置时，会明确报错并退出非零状态码。
    - **为什么重要：** 消除了一个“静默失败”的Bug，提高了CLI工具的可靠性和用户反馈清晰度。
    - **链接：** [#6111](https://github.com/earendil-works/pi/pull/6111)

8.  **#6109 [CLOSED] 修复扩展重载时依赖副作用重复执行的问题**
    - **摘要：** 对应Issue #6108。PR修复了在发布版二进制中执行`/reload`时，由于重复执行扩展依赖模块的副作用（如注册主题）而引发的各种问题。
    - **为什么重要：** 保证了`/reload`功能的稳定性和可预测性，是提升开发效率的关键修复。
    - **链接：** [#6109](https://github.com/earendil-works/pi/pull/6109)

9.  **#5678 [OPEN] 新增 `excludeFromContext` 标记**
    - **摘要：** PR允许用户在自定义消息上添加`excludeFromContext`标记，使该消息虽然显示在界面上，但不会传递给大模型。
    - **为什么重要：** 提供了更精细的上下文控制能力，用户可以借此添加备注或调试信息，同时不干扰模型对话状态。
    - **链接：** [#5678](https://github.com/earendil-works/pi/pull/5678)

10. **#6110 [CLOSED] 修复 `session_start` 事件与 `initTheme` 的顺序问题**
    - **摘要：** 此PR修复了一个时序Bug：`session_start`事件有时会在主题初始化完成前触发，导致扩展在该事件中访问`theme`对象时程序崩溃。
    - **为什么重要：** 修复了一个隐蔽的、在新会话启动时可能随机触发的扩展崩溃问题，提升了扩展的健壮性。
    - **链接：** [#6110](https://github.com/earendil-works/pi/pull/6110)

## 功能需求趋势

- **扩展生态安全与治理：** 近期出现了关于恶意包和静默失败的讨论，表明社区迫切需要在包的审核、安装权限管理、以及安装过程错误报告方面建立更可靠的机制。
- **配置灵活性与跨平台兼容性：** 用户对配置项（如外部编辑器、TUI边距）的定制需求越来越具体，尤其关注在非标准或受限开发环境（如Windows Git Bash）中的体验。
- **高级Agent与子代理管理：** 多个Issue和PR（如`reportUsage`扩展API、`excludeFromContext`）显示，用户正在构建更复杂的多Agent系统，并且需要更好的工具来管理、监控和调度这些子任务的成本和上下文。

## 开发者关注点

- **环境变量与配置冲突：** `$EDITOR`与设置项配置的冲突，以及`soul.md`与`append-system-prompt`的覆盖逻辑问题，仍是开发者在使用非标准配置时的常见痛点。
- **语言与环境兼容性：** 对天城文等Unicode字符的支持缺失以及特定平台（如Linux Release Binary）上的副作用问题，成为了阻碍部分开发者顺利使用Pi的瓶颈。
- **模型支持维护：** Pi内置的模型定义库需要更及时的维护。模型名称的过时（如Azure GPT-5.2）或配置错误（如Qwen），直接影响用户对新模型的使用，是社区高度关注的领域。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

好的，这是为您生成的 2026-06-28 Qwen Code 社区动态日报。

---

# Qwen Code 社区动态日报 — 2026-06-28

## 1. 今日速览

今日社区动态活跃，共产生 27 条 Issue 更新和 50 条 PR 进展。核心亮点包括：**v0.19.2-nightly** 修复了 Web Fetch 的 JSON 解析回退机制；社区对**跨设备同步**、**多代理/循环任务（/loop）的可观测性**以及 **Telegram 机器人** 等特性的需求持续高涨；此外，**Chrome 扩展重生**、**记忆共享** 和 **输出令牌限制优化** 等大型功能 PR 正在稳步推进中。

## 2. 版本发布

### [v0.19.2-nightly.20260627.d93bec905](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.2-nightly.20260627.d93bec905)
- **主要内容**: 修复了 `core` 模块中 `web_fetch` 在 JSON 解析失败时的回退处理逻辑，提升了工具调用的健壮性。

## 3. 社区热点 Issues

1.  **[[OPEN] #5838: 允许用户调整 Agent 启动命令超时时间](https://github.com/QwenLM/qwen-code/issues/5838)**
    - **重要性**: 开发者反馈 Agent 执行长时间任务时，默认超时设置可能不够灵活，特别是 CI/CD 场景。社区讨论了提供可配置超时选项的必要性。

2.  **[[OPEN] #5836: 任务清单/计划/记忆跨设备同步](https://github.com/QwenLM/qwen-code/issues/5836)**
    - **重要性**: 这是一个高频需求。用户希望在切换工作环境时，之前创建的 `todos`、`plans`、`memories` 能存放到项目目录下，以便被 Git 跟踪，实现跨设备同步和团队共享。

3.  **[[OPEN] #5823: /loop 任务静默运行，模型无法查看或停止自己创建的计划任务](https://github.com/QwenLM/qwen-code/issues/5823)**
    - **重要性**: 用户发现 `/loop` 创建的定时任务缺乏可视性，模型在后续对话中完全不知晓这些后台任务，导致“灵异事件”。这直接指向了后台自动化任务的可管理性问题。

4.  **[[CLOSED] #5756: 默认 8K 输出令牌上限反复截断大文件，导致重试循环](https://github.com/QwenLM/qwen-code/issues/5756)**
    - **重要性**: 一个严重的Bug。默认的 8K 令牌帽导致模型在生成大文件（如Wiki）时被截断，系统误以为失败并反复重试，形成死循环。社区对此修复表示高度关注。

5.  **[[CLOSED] #5867: 增加共享给 Git 仓库的“团队”级自动记忆](https://github.com/QwenLM/qwen-code/issues/5867)**
    - **重要性**: 提出了一个极有价值的协作特性。在现有的“用户级”和“项目级”记忆之上，增加“团队级”记忆，并将其存储在 Git 仓库中，实现团队知识和项目定制的共享。

6.  **[[CLOSED] #5909: 强化路径转义及非法 slug 诊断](https://github.com/QwenLM/qwen-code/issues/5909)**
    - **重要性**: 安全相关。作为 #5829 的后续，进一步检查了代码中可能存在的路径遍历漏洞，并改进错误诊断信息，体现了项目对安全性的重视。

7.  **[[OPEN] #5897: “unknown format uint64 ignored in schema” 错误信息刷屏](https://github.com/QwenLM/qwen-code/issues/5897)**
    - **重要性**: 一个影响用户体验的界面问题。启动时重复打印无法识别的 schema 格式警告，既造成困扰也暗示了 MCP 工具 schema 解析存在问题。

8.  **[[CLOSED] #5922: cua-driver.exe 在空闲时段仍占用高 CPU](https://github.com/QwenLM/qwen-code/issues/5922)**
    - **重要性**: 性能与系统资源问题。用户报告负责桌面自动化的 `cua-driver.exe` 在 Agent 任务完成后仍在后台消耗大量 CPU，需要优化其生命周期管理。

9.  **[[CLOSED] #5920: /rewind 记录 parentUuid 为 null，导致恢复会话时历史记录丢失](https://github.com/QwenLM/qwen-code/issues/5920)**
    - **重要性**: 一个功能性Bug。使用 `/rewind` 后，会话的上下文链被破坏，导致重新加载会话时，大部分历史记录消失，严重影响了会话管理的可靠性。

10. **[[OPEN] #5941: 大模型输出时滚动条异常跳转](https://github.com/QwenLM/qwen-code/issues/5941)**
    - **重要性**: UI/UX 问题。用户在流式输出期间向上滚动，页面会直接跳到最顶端，而非像浏览器一样逐步滚动，影响了阅读体验。

## 4. 重要 PR 进展

1.  **[[OPEN] #5888: feat(channels): 引入 “qwen tag”——频道驻留的多人协作 Agent](https://github.com/QwenLM/qwen-code/pull/5888)**
    - **说明**: 一个前景宏大的 RFC。提出构建一个驻留在聊天群组（如钉钉）中的 “qwen tag” 机器人，允许多人通过 @它来协作完成任务，标志着 Qwen Code 从单人助手向团队协作工具迈进。

2.  **[[OPEN] #5777: feat(browser-ext): 通过 Daemon 直连架构重生 Chrome 扩展](https://github.com/QwenLM/qwen-code/pull/5777)**
    - **说明**: 一个备受关注的大型 PR。遵循 #5626 提案，将 Chrome 扩展从复杂的原生消息主机架构，简化为 `qwen serve` 守护进程的轻量级客户端，大幅降低了维护成本和复杂性。

3.  **[[OPEN] #5030: feat(core,cli,sdk): 中断回复后无需“继续”消息即可恢复](https://github.com/QwenLM/qwen-code/pull/5030)**
    - **说明**: 一个提升体验的关键 PR。允许应用在崩溃或中断后，无需向模型发送“继续”提示，即可无缝恢复上次未完成的回答，使得体验更流畅。

4.  **[[OPEN] #5944: fix(core): 阻止重复的 shell 检查变体](https://github.com/QwenLM/qwen-code/pull/5944)**
    - **说明**: 针对 Agent 行为智能优化。当模型反复调用 `git status` 等只读命令时，新增加的循环守卫会主动停止运行，防止 Agent 陷入“空转”状态，节省时间和成本。

5.  **[[OPEN] #5856: feat(desktop): 桌面端语音输入功能](https://github.com/QwenLM/qwen-code/pull/5856)**
    - **说明**: 将 CLI 和 Web Shell 中已有的 `/voice` 语音输入功能带到桌面客户端，在输入框添加麦克风按钮，支持录音、波形显示和停止录音，提升交互便捷性。

6.  **[[OPEN] #5911: fix(desktop): 规范化 source slug 验证错误](https://github.com/QwenLM/qwen-code/pull/5911)**
    - **说明**: 安全增强 PR。在保持严格路径遍历防护的同时，改进了对非法 slug 的错误处理，确保调用者能收到清晰、可预测的验证结果，而非通用崩溃。

7.  **[[CLOSED] #5919: feat(channels): 注册 Telegram 机器人命令菜单](https://github.com/QwenLM/qwen-code/pull/5919)**
    - **说明**: 完善 Telegram 集成的关键一步。为 Telegram Bot 注册了标准化的命令菜单（如 `/start`, `/cancel`），并添加了共享的取消命令，使交互更规范。

8.  **[[CLOSED] #5903: feat(acp): 支持 ACP 会话中的 /cd 命令](https://github.com/QwenLM/qwen-code/pull/5903)**
    - **说明**: ACP（Agent通信协议）的一个重要补充。为 ACP 客户端提供了切换工作目录（`/cd`）的能力，并集成了信任和沙箱策略检查，多会话架构更加完善。

9.  **[[CLOSED] #5938: perf(cli): 为 serve 启用编译缓存并延迟 getCliVersion](https://github.com/QwenLM/qwen-code/pull/5938)**
    - **说明**: 性能优化。通过为 `qwen serve` 守护进程启用 V8 编译缓存，使服务启动速度更快，并从关键路径中延迟了 CLI 版本的获取，提升整体启动性能。

10. **[[CLOSED] #4949: feat(extensions): 支持从本地归档文件安装扩展](https://github.com/QwenLM/qwen-code/pull/4909)**
    - **说明**: 扩展生态的重要补充。现在用户可以安装 `.zip` 和 `.tar.gz` 格式的扩展，无论是本地的还是远程的 URL，使得分发和安装第三方扩展更加便捷。

## 5. 功能需求趋势

从今日的 Issues 中可以提炼出社区最关注的几个功能方向：
- **跨设备与团队协作**: 用户强烈希望 `todos`、`memories` 和 `plans` 能存入项目目录并支持 Git 版本控制，以实现跨设备同步和团队知识共享。
- **后台自动化可管理性**: `/loop` 和 `cron` 等后台任务缺乏可视化和管理能力，社区希望模型能主动感知、列出、修改甚至停止自己创建的计划任务，提升任务编排的自主性。
- **多渠道与平台集成**: 社区正积极推动将 Qwen Code 的能力扩展到更多平台，如**重生 Chrome 扩展**、**完善 Telegram Bot**、**团队协作的钉钉 Tag**，展现了强烈的“无处不在的 AI 助手”需求。
- **性能与资源优化**: 涉及多个方面，包括修复导致**重试循环**的默认令牌帽问题、优化**空闲时段 CPU 占用**、改进**初始启动速度**，以及通过**编译缓存**减少服务启动时间。

## 6. 开发者关注点

- **高频痛点（Bug/体验问题）**:
    - **令牌限制截断 (#5756)**: 默认 8K 输出限制是最大的痛点之一，极易导致任务失败和无尽的错误重试。
    - **会话历史丢失 (#5920)**: `/rewind` 功能导致的 `parentUuid` 为 null 问题，使得恢复会话后历史记录“凭空消失”，严重影响工作流。
    - **后台任务不可见 (#5823)**: 模型对自己创建的 `/loop` 任务一无所知，这点让开发者感到困惑和不安，强烈要求增加可视性和控制权。
    - **资源滥用 (#5922)**: 特定驱动（`cua-driver.exe`）在空闲时的高 CPU 占用，对系统资源和电池续航造成不必要压力。
- **高频需求（Feature Request）**:
    - **自定义 Agent 超时 (#5838)**: 用户希望拥有对 AI Agent 执行命令的超时时间的完全控制。
    - **数据持久化到项目目录 (#5836)**: 将项目相关的元数据（Todos, Memories）存储在项目内，以利版本控制和团队分享。
    - **自动补全改进 (#5875)**: 改进命令的模糊匹配，让 `/skill_name` 的自动完成能匹配名称中的任意部分，而非必须从头开始。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

好的，这是为您生成的 2026-06-27 DeepSeek TUI 社区动态日报。

---

# DeepSeek TUI 社区动态日报 | 2026-06-27

## 今日速览

今日社区动态高度活跃，核心聚焦于 **Token消耗与缓存命中率优化**。开发者们集中讨论了与竞品相比的巨大差距，并提出了多项改进方案。与此同时，项目迎来了 v0.8.66 版本的**发布公告**及一系列 **ACP（Agent Client Protocol）集成** 和 **插件系统** 的关键 PR，标志着项目在生态兼容性和架构扩展性上迈出了重要一步。

## 版本发布

**v0.8.66 版本发布在即**

虽然今日没有直接发布新版本，但合并了大量的预发布 PR，标志着 v0.8.66 版本已进入最终冲刺阶段。主要特性包括：
- 引入 **Token/缓存/成本记分卡**，用于检测回归问题。
- 完成 **ACP 协议支持**，可实现与 Zed 等编辑器的流式交互和任务取消。
- 新增 **轻量级插件系统**，支持从文件系统发现并加载外部技能和 MCP 服务器。
- 实现了**缓存最大化上下文模式**，可保持活跃文件的完整内容，减少重复读取。
- 优化了**工具调用失败**时的降级策略，提供更智能的备用提示。

## 社区热点 Issues

1. **[#1177] [Bug] 输入缓存命中率太低**
   - **链接**: [Issue #1177](https://github.com/Hmbown/CodeWhale/issues/1177)
   - **重要性**: **极高**。这是社区最核心的痛点，直接关系到使用成本。用户对比了同为 DeepSeek 官方收录的 `DeepSeek-Reasonix`（命中率 95%+），指出本项目的缓存命中率存在巨大差距，急需改善。评论数高达 24 条，是目前最热门的话题。

2. **[#1120] [Bug] 缓存命中方面似乎还是有些问题**
   - **链接**: [Issue #1120](https://github.com/Hmbown/CodeWhale/issues/1120)
   - **重要性**: **极高**。与 #1177 紧密相关，用户详细描述了在相同项目上修改时，即使版本更新后缓存未命中率依然很高的问题。社区和开发者正在共同排查深层原因。

3. **[#743] [Bug] token消耗增大了很多**
   - **链接**: [Issue #743](https://github.com/Hmbown/CodeWhale/issues/743)
   - **重要性**: **高**。用户反馈半天消耗了 4 亿 token，请求过于密集，每次交互的对话信息过多。这直接指向了提示词（Prompt）设计和上下文管理的问题，是成本失控的直观体现。

4. **[#3192] [Enhancement] 申请加入 agentclientprotocol/registry**
   - **链接**: [Issue #3192](https://github.com/Hmbown/CodeWhale/issues/3192)
   - **重要性**: **高**。这表明社区对 **IDE 集成（特别是 Zed 编辑器）** 有强烈需求。被 ACP（Agent Client Protocol）官方注册表收录，将极大降低第三方工具集成的门槛。

5. **[#3275] [Bug] CodeWhale 过度参与修改，自问自答，偏离用户意图**
   - **链接**: [Issue #3275](https://github.com/Hmbown/CodeWhale/issues/3275)
   - **重要性**: **高**。这是一个严重的 **行为逻辑缺陷**。Agent 在执行任务时，会进入自我驱动的循环，不断提出、回答和执行，而忽略等待用户确认，导致最终结果与用户需求不符。这影响了用户对 Agent 的信任度。

6. **[#3568] [Bug] plan 和 agent 模式混合的问题似乎仍然存在**
   - **链接**: [Issue #3568](https://github.com/Hmbown/CodeWhale/issues/3568)
   - **重要性**: **高**。这是一个**反复出现**的回归 Bug。用户提供了详细日志，证明在 `plan` 模式下，AI 仍然会像 `agent` 模式一样尝试修改文件。这表明模式切换的核心逻辑仍有缺陷，破坏了用户对工作流的预期。

7. **[#528] [Enhancement] 缓存最大化上下文模式：重新读取活动文件而非总结**
   - **链接**: [Issue #528](https://github.com/Hmbown/CodeWhale/issues/528)
   - **重要性**: **高**。针对缓存命中率问题提出的创新解决方案。核心思想是：既然缓存后的输入变得廉价，就不应该对文件内容进行总结压缩，而应该**直接传递完整内容**。这能最大程度利用缓存，同时保留最精确的信息。

8. **[#3495] [Enhancement] 采用 Moraine 作为长期记忆后端**
   - **链接**: [Issue #3495](https://github.com/Hmbown/CodeWhale/issues/3495)
   - **重要性**: **中高**。该项目计划引入 **外部记忆系统**。Moraine 可以将历史会话无损保存，并通过 MCP（Model Context Protocol）工具进行搜索和召回。这为解决长期任务中的上下文丢失和智能体记忆问题提供了新的架构方向。

9. **[#3354] [Enhancement] 中文环境下，提供并加载中文 skill，更省 token**
   - **链接**: [Issue #3354](https://github.com/Hmbown/CodeWhale/issues/3354)
   - **重要性**: **中高**。这是一个 **本地化与优化** 的典型需求。当对话语言为中文时，使用英文的 Skill 描述会占用不必要的 token。提供中文 Skill 描述，可以显著节省开销，体现了社区对精细化成本控制的需求。

10. **[#3541] [Enhancement] 基于 Rust 的原生运行时/桌面客户端，降低延迟，改善非编码 UX**
    - **链接**: [Issue #3541](https://github.com/Hmbown/CodeWhale/issues/3541)
    - **重要性**: **中高**。这表明部分用户开始关注 **运行时性能和体验**。当前基于 Node.js 的实现存在冷启动慢、内存占用高、单线程阻塞等问题。提出用 Rust 重写核心运行时，意在打造更低延迟、更流畅的桌面级体验。

## 重要 PR 进展

1. **[#3707] docs: add v0.8.66 release ledger**
   - **链接**: [PR #3707](https://github.com/Hmbown/CodeWhale/pull/3707)
   - **重要性**: **极高**。这是 **v0.8.66 版本的发布记录**，汇总了当前候选版本的状态、ACP 注册表提交情况、问题分类和未执行的发布门控操作。标志着新版本发布流程的正式启动。

2. **[#3702] feat(acp): stream session/prompt deltas as session/update chunks (#3192)**
   - **链接**: [PR #3702](https://github.com/Hmbown/CodeWhale/pull/3702)
   - **重要性**: **极高**。这是 **ACP 协议集成** 的关键一步。它将代理的响应从“全量缓冲”改为“增量流式输出”，让编辑器可以像打字一样实时看到 AI 的思考过程。这对集成到 Zed 等现代编辑器至关重要。

3. **[#3698] feat(acp): cancel in-flight session/prompt on session/cancel (#3192)**
   - **链接**: [PR #3698](https://github.com/Hmbown/CodeWhale/pull/3698)
   - **重要性**: **极高**。同样是 **ACP 集成** 的核心功能。它实现了“取消正在执行的请求”这一关键能力。没有这个能力，用户一旦发出指令就无法撤回，对交互体验是致命的。

4. **[#3699] feat(plugins): add lightweight plugin system with discovery, registry, and injection**
   - **链接**: [PR #3699](https://github.com/Hmbown/CodeWhale/pull/3699)
   - **重要性**: **极高**。引入了一个全新的**插件系统**。这标志着 CodeWhale 从一个单一工具向**可扩展平台**的转型。外部开发者和社区可以通过编写插件来扩展 AI 的能力，生态意义重大。

5. **[#3697] feat(working-set): cache-maximal context mode — materialize active file contents (#528)**
   - **链接**: [PR #3697](https://github.com/Hmbown/CodeWhale/pull/3697)
   - **重要性**: **高**。实现了热门 Issue #528 的核心功能，即“缓存最大化上下文模式”。通过在上下文中直接嵌入活跃文件的完整内容，而非仅提供文件路径，可以**显著提高缓存命中率并减少 AI 的盲目文件读取操作**。

6. **[#3693] feat(scorecard): token/cache/cost release-gate scorecard with regression detection (#3388)**
   - **链接**: [PR #3693](https://github.com/Hmbown/CodeWhale/pull/3693)
   - **重要性**: **高**。针对 Token 和缓存问题的**工程化解决方案**。它创建了一个“记分卡”，能够在每次发布前自动检测 Token 使用、缓存成本和性能是否出现回归。这将有效防止性能退化，保证每次更新质量。

7. **[#3696] feat(prompts): allow overriding the base prompt from the config dir (#3638)**
   - **链接**: [PR #3696](https://github.com/Hmbown/CodeWhale/pull/3696)
   - **重要性**: **中高**。实现了 Issue #3638 的核心需求，允许用户通过配置文件**替换系统的初始提示词（Base Prompt）**。这使得 CodeWhale 可以应用于非编程场景（如文学创作、文档审查），大大扩展了其使用范围。

8. **[#3690] feat(skills): locale-aware skill descriptions to save tokens (#3354)**
   - **链接**: [PR #3690](https://github.com/Hmbown/CodeWhale/pull/3690)
   - **重要性**: **中高**。针对中文社区的优化需求。当对话语言为中文时，该 PR 会使用中文的 Skill 描述，避免注入英文描述带来的 Token 浪费。这对所有非英语用户都是一个积极的信号。

9. **[#3705] fix(engine): suggest direct urls after repeated search errors**
   - **链接**: [PR #3705](https://github.com/Hmbown/CodeWhale/pull/3705)
   - **重要性**: **中高**。改进 Agent 在**搜索失败时的容错能力**。当网页搜索连续失败时，Agent 现在会尝试从失败的搜索请求中提取域名，并直接建议使用 `fetch_url` 工具进行访问，而不是盲目重试。

10. **[#3700] fix(verifier): emit hunt verdict mapping**
    - **链接**: [PR #3700](https://github.com/Hmbown/CodeWhale/pull/3700)
    - **重要性**: **中高**。完善了**验证器（Verifier）**功能。它将验证结果（通过/部分/失败）映射为更直观的“猎杀裁决”（击毙/击伤/逃脱），为 Agent 的任务评估和后续决策提供了更清晰的状态报告。

## 功能需求趋势

1. **成本优化（压倒性需求）**：减少 Token 消耗是社区最强烈的呼声。具体表现为：
   - 提升输入缓存命中率（对标 `DeepSeek-Reasonix`）。
   - 减少冗余的上下文（如重复的代码块、过长的提示词）。
   - 优化 Agent 交互逻辑，避免无意义的自问自答和过度请求。
2. **生态集成与互操作性**：社区渴望与现有开发工具链深度集成。
   - **ACP 协议**（Agent Client Protocol）集成，以获得 Zed 等现代编辑器的原生支持。
   - **外部记忆**（如 Moraine）和 **MCP**（Model Context Protocol）工具的接入，以实现更强大的智能体能力。
3. **行为可预测性与控制**：核心功能（如 Plan/Agent 模式切换）必须稳定可靠。
   - 用户需要 Agent 严格遵守指令，不偏离用户意图。
   - 需要更精细的控制能力，如取消正在执行的任务。
4. **平台化与可扩展性**：通过**插件系统**和**可替换的初始提示词**，社区正在推动 CodeWhale 从一个编程助手演变为一个通用 AI 代理平台。

## 开发者关注点

- **性能瓶颈**：Node.js 运行时带来的延迟和资源消耗是部分资深用户的痛点，他们期望看到基于 Rust 的原生客户端。
- **成本失控**：在半天的任务中消耗 4 亿 Token 是极其不合理的，开发者呼吁项目方立即审查和优化请求频率与对话上下文大小，防止“API 账单爆炸”。
- **行为缺陷回归**：Plan/Agent 模式切换问题的反复出现，让开发者感到沮丧。他们认为这损害了工具的专业性和可靠性，希望项目方建立更严格的自动化测试来防止此类回归。

---

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*