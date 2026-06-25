# AI CLI 工具社区动态日报 2026-06-25

> 生成时间: 2026-06-25 00:28 UTC | 覆盖工具: 9 个

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

好的，作为专注于 AI 开发工具生态的资深技术分析师，我已综合今日各主流AI CLI工具的社区动态，为您呈现以下横向对比分析报告。

---

### AI CLI 工具生态横向对比分析报告 (2026-06-25)

#### 1. 生态全景

当前AI CLI工具生态正处于 **“从尝鲜到深水区”的关键转型期**。一方面，各工具的核心Agent能力（如代码生成、文件操作）日趋成熟，社区关注点已从“能不能用”转向“用得好不好”，具体表现为对**Token成本控制、Agent行为可预测性、以及与企业级工作流（如GitLab、Azure AD）深度集成**的强烈诉求。另一方面，安全问题开始凸显，多个工具社区出现了关于路径穿越、命令注入和权限管理漏洞的讨论，表明生态的扩展正面临新的安全挑战。此阶段，工具的差异化竞争已从底层模型能力，转向**开发者体验、生态开放性和稳定性**的综合较量。

#### 2. 各工具活跃度对比

以下是基于今日数据对各工具活跃度的量化对比。请注意，数字来源于当日动态摘要，可能存在细微偏差。

| 工具名称 | 热点 Issues 数 | 重要 PR 数 | 版本发布 | 活跃度小结 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 10 | 5 | **v2.1.191, v2.1.190** | 发布频繁，社区讨论聚焦于特定Bug（Bedrock兼容性）及长期功能需求（技能目录、GitLab集成）。 |
| **OpenAI Codex** | 10 | 10 | 5个Alpha版本 | **社区热度极高**，集中在“Token成本失控”这一核心痛点上。PR数量多，主要围绕Ultra推理和多代理架构演进。 |
| **Gemini CLI** | 10 | 10 | 无 | 社区讨论集中在**Agent可靠性**（挂起、错误报告）和安全性（思考泄漏）。PR围绕Webhook集成、MCP安全等基础架构。 |
| **GitHub Copilot CLI**| 10 | 1 | **v1.0.65** | 核心问题聚焦于**插件系统权限缺陷**和会话管理。虽有版本发布，但社区对配额计算和交互体验优化的讨论更热烈。 |
| **Kimi Code CLI** | 5 (Top) | 2 | 无 | 社区体量较小，但讨论深度高，集中在**计费透明度**和**MCP配置传播**的技术细节上，用户对Token利用率要求高。 |
| **OpenCode** | 10 | 10 | **v1.17.10** | 讨论热点在**MCP OAuth认证**和TUI稳定性。大量社区贡献者（@Nomadcxx）正在快速完善MCP协议支持。 |
| **Pi** | 10 | 10 | 无 | 社区活跃度高，核心痛点是**连接稳定性**（`Working…`卡死）和对**多Provider兼容性**的渴求。本地LLM支持呼声高。 |
| **Qwen Code** | 10 | 10 | **v0.19.2** (及预览版) | 社区聚焦于**跨设备同步**、**CI流程**和**Agent控制**。一个高危路径穿越漏洞 (#5834) 被及时披露并修复，安全响应迅速。 |
| **CodeWhale** | 10 | 10 | 无 (v0.8.65冲刺中) | 社区活跃度高，技术讨论深入。核心矛盾在于**Agent自主性**与**用户控制**的平衡。大量PR围绕架构重构、Provider路由和Fleet功能。 |

#### 3. 共同关注的功能方向

多个工具社区不约而同地聚焦于以下三大方向：

1.  **成本与Token消耗透明度**:
    - **相关工具**: **OpenAI Codex** (#28879, #14593), **Kimi Code CLI** (#1994), **GitHub Copilot CLI** (#3881), **Qwen Code** (#5819).
    - **核心诉求**: 用户普遍认为Token消耗过快、计费模型不透明。要求工具提供更清晰的成本估算、更智能的上下文压缩策略，并解决后台轮询、静默升级模型等导致意外高额费用的设计缺陷。

2.  **Agent 行为的可控性与可预测性**:
    - **相关工具**: **Claude Code** (Skills、MCP热重载), **Gemini CLI** (#22323, #21968), **OpenCode** (#32678), **CodeWhale** (#3275, #3466).
    - **核心诉求**: 开发者希望Agent能更严格地遵循指令，准确报告任务状态（失败而非谎报成功），主动使用已配置的Skill，并提供精细化的权限控制（如YOLO模式与审批滑动条），在工作流自动化和安全性间取得平衡。

3.  **多Provider兼容性与集成深度**:
    - **相关工具**: **Pi** (#5363, #3357), **OpenCode** (#12308, #5444), **CodeWhale** (#3439, #3192), **Claude Code** (#12346), **Gemini CLI** (#21983).
    - **核心诉求**: 用户不再满足于绑定单一模型或云服务。他们希望工具能无缝接入各种主流LLM（如GPT-5.5、GLM-5.2、Qwen3.7）、本地模型（如Ollama）、以及GitLab、Azure AD等企业级DevOps和认证平台，打破供应商锁定。

#### 4. 差异化定位分析

| 工具名称 | 核心定位 | 目标用户 | 主要技术/生态特点 |
| :--- | :--- | :--- | :--- |
| **Claude Code** | 专业开发者的深度辅助工具 | 追求极致体验和模型能力的开发者 | **深度绑定Anthropic模型生态**，强调Advisor等高阶功能，但Bedrock等外部环境的兼容性问题突出。 |
| **OpenAI Codex** | “能思考”的自动化引擎 | 先锋开发者，探索复杂自动化场景 | 聚焦**Ultra推理、多代理（Fleet）、高级沙箱和MCP互操作性**，代表AI CLI的前沿方向，但对成本敏感。 |
| **Gemini CLI** | 开放的Agent框架 | 企业级用户，注重安全和可定制性 | 强调**Agent的可靠性、安全性和组件化评估**，对MCP协议、子代理生命周期的管理非常深入。 |
| **GitHub Copilot CLI** | Github生态的粘合剂 | 深度使用GitHub工作流的开发者 | 核心优势在于与**GitHub生态（Actions, PR）的无缝集成**。插件系统是关键，但对插件权限和交互效率的痛点明显。 |
| **Kimi Code CLI** | 高性价比的“小而美”工具 | 中国开发者，对成本敏感 | **模型能力强但计费模型存疑**，社区体量小但技术讨论深度高，对Token利用率的优化要求严苛。 |
| **OpenCode** | MCP协议的先驱与实践者 | 开源社区贡献者，MCP生态开拓者 | **社区贡献者主导MCP协议的深度支持**（资源订阅、模板、补全），但TUI稳定性和企业级认证是软肋。 |
| **Pi** | 通用LLM前端/聚合器 | 多模型使用者，终端爱好者 | **强调多Provider兼容性**，但连接稳定性问题突出。对本地LLM有较高呼声，TUI交互体验是差异化点。 |
| **Qwen Code** | 大模型厂商的CLI入口 | 阿里云生态用户，Qwen模型爱好者 | **依托Qwen模型生态**，功能迭代迅速。社区关注点从基础功能转向**跨设备协作、CI流程和安全性**。 |
| **CodeWhale** | 多Agent协同（Fleet）框架 | 进阶开发者，研究多Agent协作范式 | 技术野心最大，聚焦于**Fleet分布式Agent、Provider/模型路由、YOLO模式**。架构更新深，但用户友好度和稳定性有待打磨。 |

#### 5. 社区热度与成熟度

- **高热度、高成熟度（成熟期）**: **OpenAI Codex** 和 **Claude Code** 社区最庞大，讨论内容深度高，已从功能需求转向成本控制、复杂Bug和架构演进。它们处于市场领导者地位，但也是被抱怨最多的。
- **高热度、快速迭代（成长期）**: **Gemini CLI**, **Pi**, **OpenCode**, **CodeWhale** 社区活跃，贡献者众多。它们正在快速填充功能、修复稳定性Bug，技术路线差异明显，是创新的主要来源。
- **中等热度、特色发展（特色期）**: **GitHub Copilot CLI**背靠庞大GitHub用户群，但社区讨论点较集中。**Kimi Code CLI** 和 **Qwen Code** 依托各自模型生态，用户群相对固定，增长潜力取决于母公司的投入和本土化优势。

#### 6. 值得关注的趋势信号

1.  **AI CLI 正从“个人工具”走向“组织级基础设施”**: 对**GitLab集成、Azure AD认证、集中化配置管理、企业级合规（如微软EMU数据收集要求）** 的呼声表明，开发者正试图将AI CLI嵌入其组织的标准化工作流中，而不仅仅是个人效率工具。这对于工具的ToB落地至关重要。

2.  **Agent 安全需要从“显性漏洞”防御升级到“隐性行为”治理**: 不仅是路径穿越、命令注入等传统漏洞，社区开始关注更隐蔽的安全风险，如**Agent的错误状态汇报（Gemini #22323）、静默升级高价模型（Qwen #5819）、后台任务失控（Qwen #5823）**。这要求开发者不能只关注代码安全，更要设计可审计、可预期的Agent行为框架。

3.  **上下文管理成为“圣杯”之争的焦点**: 如何高效、低成本地管理和利用上下文，是几乎所有工具的共同难题。无论是**Token消耗异常、压缩策略过于激进、还是模型降级**，背后都指向了**上下文窗口的智能管理**。谁能提供类似“人类工作记忆”的分级、有序、可压缩的上下文管理方案，谁就能在用户体验和成本控制上占据绝对优势。

4.  **“多Agent协作”正在从理念走向实践**: **CodeWhale的Fleet，OpenAI Codex的Ultra多Agent，Gemini CLI的子代理调度**，多个工具都在向“多智能体协作”方向演进。但这带来了**子代理挂起、状态同步错误、生命周期难以管理**等一系列新问题，该领域的架构和最佳实践仍处于非常早期的探索阶段。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

好的，作为专注于 Claude Code 生态的技术分析师，我已经分析了截至 2026-06-25 的 `anthropics/skills` 仓库数据。以下是社区热点报告：

---

### **Claude Code Skills 社区热点报告 (截至 2026-06-25)**

#### **1. 热门 Skills 排行**

根据评论和关注度，以下是最受社区瞩目的 Skills（Pull Requests）：

1.  **`skill-creator` 修复系列 (#1298, #1099, #1323, #1050, #362)**
    *   **功能**: 修复 `skill-creator` 技能自身的评估 (`run_eval.py`) 和优化 (`run_loop.py`) 工具，核心问题是这些工具在特定场景下报告 **0% 召回率 (recall)**，导致技能描述优化失效。
    *   **社区热点**: **#556 问题** 引发了一场社区“运动”，大量开发者独立复现了评估脚本失效的 Bug。社区讨论集中在 **Windows 兼容性、子进程管道读取、触发检测逻辑** 等方面。这是当前仓库最核心的 Bug 修复风暴。
    *   **状态**: 所有相关 PR 均为 **Open** 状态，多个分支正在并行修复不同原因。
    *   **链接**: [#1298](https://github.com/anthropics/skills/pull/1298), [#1099](https://github.com/anthropics/skills/pull/1099), [#1323](https://github.com/anthropics/skills/pull/1323)

2.  **`document-typography` (#514)**
    *   **功能**: 一个专注于排版质量控制的技能，解决 AI 生成文档中的孤行、寡段、编号错位等常见问题。
    *   **社区热点**: 这是一个“根治”AI 文档生成痛点的提案，获得了大量共鸣。社区认为该技能能显著提升 Claude 生成文档的专业性和可用性，是“小而美”的实用型技能代表。
    *   **状态**: **Open**。
    *   **链接**: [#514](https://github.com/anthropics/skills/pull/514)

3.  **`skill-quality-analyzer` & `skill-security-analyzer` (#83)**
    *   **功能**: 两个“元技能”，用于分析其他 Claude Skills 的质量（结构、文档、示例）和安全性（信任边界、权限滥用）。
    *   **社区热点**: 代表社区对 **Skill 质量和安全标准的渴求**。尤其是在信任问题频发的背景下，这些技能被视为构建可靠 Skill 生态的基础设施。
    *   **状态**: **Open**。
    *   **链接**: [#83](https://github.com/anthropics/skills/pull/83)

4.  `testing-patterns` (#723)
    *   **功能**: 一个覆盖从前端到后端的全面测试模式技能，包括 React 组件测试、Trophy 模型等。
    *   **社区热点**: 开发社区对标准化、可复用的测试实践有强烈需求。这个技能旨在将最佳实践固化下来，提升 Claude 生成测试代码的质量和一致性。
    *   **状态**: **Open**。
    *   **链接**: [#723](https://github.com/anthropics/skills/pull/723)

5.  `appdeploy` (#360)
    *   **功能**: 授权 Claude 直接部署和管理全栈 Web 应用到 `appdeploy.ai` 平台。
    *   **社区热点**: 社区对“从代码到部署”的一站式工作流非常感兴趣。这个技能代表了 Claude 从单纯的编码助手向 **自动化 DevOps 代理** 演进的趋势。
    *   **状态**: **Open**。
    *   **链接**: [#360](https://github.com/anthropics/skills/pull/360)

#### **2. 社区需求趋势**

从 Issues 中提炼出的社区最期待的 Skill 新方向：

*   **安全与治理**: **#492**（信任边界滥用）、**#1175**（SharePoint 安全与上下文窗口）等 Issue 表明，社区高度关注 Skill 的 **安全性、权限控制和可审计性**。期望官方提供安全审查工具和清晰的权限模型。这是当前最紧迫的非功能需求。
*   **工作流自动化与集成**: **#228**（组织级技能共享）、**#1175**（企业文档处理）等 Issue 显示，社区希望 Skill 不限于编码，而是要深入工作流程，例如 **企业应用集成（SharePoint）** 和 **Skill 的组织级分发**。
*   **技能质量与标准化**: **#202**（skill-creator 应更新为最佳实践）和大量的 Bug 修复（如 #556）驱动了对 **Skill 开发工具链** 和 **评估方法** 本身的成熟度需求。社区需要可靠的工具来开发、测试和评估自己的 Skill。
*   **文档生成与处理**: PR #514 (typography) 和 #486 (ODT) 表明，**高质量、格式正确的文档生成** 是一个长期且旺盛的需求，特别是对专业格式（如 ODF、排版优化）的支持。

#### **3. 高潜力待合并 Skills**

以下 PR 评论活跃，虽然尚未合并，但具备很高的落地潜力：

*   **[#83] `skill-quality-analyzer` & `skill-security-analyzer`**: 作为生态基础设施，它们是解决 #492 安全问题和 #202 质量问题的关键工具。一旦完善，可能成为官方推荐的标准组件。
    *   **链接**: [#83](https://github.com/anthropics/skills/pull/83)
*   **[#514] `document-typography`**: 需求明确，解决的问题普遍且价值高。修复方案相对独立，代码层面上更易被优先审核和合并。
    *   **链接**: [#514](https://github.com/anthropics/skills/pull/514)
*   **[#1298] 的`skill-creator` 修复集合**: 修复了生态基石级别的 Bug（#556），是整个 `skill-creator` 走向可用的关键。其进展直接影响到所有依赖该工具的 Skill 开发者，优先级极高。
    *   **链接**: [#1298](https://github.com/anthropics/skills/pull/1298), [#1323](https://github.com/anthropics/skills/pull/1323)

#### **4. 生态洞察**

**一句话总结**: 当前社区的核心诉求已从“开发更多新技能”转向 **“构建一个稳定、安全、可评估的 Skill 生态基础设施”**，以解决技能开发工具本身的可靠性问题和信任安全问题。

---

好的，作为专注于 AI 开发工具的技术分析师，以下是根据您提供的 GitHub 数据生成的 2026-06-25 Claude Code 社区动态日报。

---

# Claude Code 社区动态日报 | 2026-06-25

## 今日速览
Claude Code 今日发布了 `v2.1.191`，主要带来了期待已久的 `/rewind` 回溯功能和多项稳定性修复。社区方面，VSCode 扩展在 Bedrock 环境下的兼容性问题持续发酵（#52151），同时关于技能（Skills）子目录支持（#10238）和 GitLab 集成（#12346）的功能呼声依旧高涨，反映出开发者对工作流深度集成的迫切需求。

## 版本发布

**v2.1.191 & v2.1.190**
- [v2.1.191](https://github.com/anthropics/claude-code/releases/tag/v2.1.191)：主要更新包括：
    - 新增 `/rewind` 命令，允许用户从执行 `/clear` 命令之前的会话点恢复对话。
    - 修复了在流式响应过程中，阅读较早输出时滚动位置自动跳转到底部的问题。
    - 修复了后台 Agent 在被停止后“复活”的 Bug。
- [v2.1.190](https://github.com/anthropics/claude-code/releases/tag/v2.1.190)：修复了若干 Bug 并提升了整体可靠性。

## 社区热点 Issues

1.  **[Bug] Opus 4.7 1M via Bedrock: VSCode extension stream ends with 0 events** (#52151)
    - **链接**: [Issue #52151](https://github.com/anthropics/claude-code/issues/52151)
    - **重要性**: **极高**。这是一个影响通过 AWS Bedrock 使用 Opus 4.7 模型的用户的核心 Bug。CLI 正常工作，但 VSCode 扩展无法接收流式事件，导致界面渲染异常。48 条评论和 34 个赞表明大量用户受到此问题困扰，是今日最受关注的 Bug。
    - **社区反应**: 用户集中报告了复现步骤，开发者正在积极排查，该 Issue 状态已关闭。

2.  **[Feature] Add support for subdirectories in skills** (#10238)
    - **链接**: [Issue #10238](https://github.com/anthropics/claude-code/issues/10238)
    - **重要性**: **极高**。拥有 159 个赞，是社区最强烈的功能需求之一。允许用户在技能目录下创建子目录来组织和管理复杂的技能集，例如按项目或功能分类。
    - **社区反应**: 用户普遍反映随着技能库增长，单层目录结构难以维护。开发者已标记为 `enhancement`，持续开放中。

3.  **[Feature] Add GitLab Integration (Repository Connection, MRs, Mobile Access)** (#12346)
    - **链接**: [Issue #12346](https://github.com/anthropics/claude-code/issues/12346)
    - **重要性**: **高**。108 个赞表明大量使用 GitLab 的团队渴望原生集成。当前 Claude Code 主要深度集成 GitHub，导致 GitLab 用户工作流割裂。
    - **社区反应**: 用户详细描述了集成 MR（Merge Request）管理、仓库连接和移动端访问的场景，社区呼声持续升温。

4.  **[Bug] Extreme token consumption — quota depleted in minutes with normal usage** (#42249)
    - **链接**: [Issue #42249](https://github.com/anthropics/claude-code/issues/42249)
    - **重要性**: **高**。影响开发者核心成本的 Bug。用户反馈在正常开发（如阅读文件、编辑代码）时，Token 消耗异常，导致配额快速耗尽。
    - **社区反应**: 17 个赞和 25 条评论，用户分享了各自的消耗数据和管理员日志，希望 Anthropic 调查是否存在计费或上下文管理上的问题。

5.  **[Bug] No response from API error when Advisor is triggered** (#69238)
    - **链接**: [Issue #69238](https://github.com/anthropics/claude-code/issues/69238)
    - **重要性**: **高**。Advisor 功能（使用 Opus 进行指导）是 Claude Code 的亮点之一。此 Bug 导致触发 Advisor 时连续出现 API 无响应错误，严重影响高级用户的使用体验。
    - **社区反应**: 34 个赞和 24 条评论，用户报告了错误复现频率和网络环境，期待尽快修复。

6.  **[Bug] V2.0.53 in macOS Activity Monitor instead of 'claude'** (#12433)
    - **链接**: [Issue #12433](https://github.com/anthropics/claude-code/issues/12433)
    - **重要性**: **中等**（但对 macOS 用户影响直观）。一个长期存在的显示问题，macOS 活动监视器中进程名显示为版本号而非程序名，导致难以定位和管理进程。
    - **社区反应**: 用户积极寻找临时解决方案，此问题已存在数月，更新至 2.1.x 后仍未解决，社区略有不满。

7.  **[Feature] MCP servers, hooks, and plugins should auto-reload when config changes** (#24057)
    - **链接**: [Issue #24057](https://github.com/anthropics/claude-code/issues/24057)
    - **重要性**: **高**。影响开发效率。修改 MCP 配置或 Hook 后需要重启整个会话，导致丢失上下文。社区将其比作“每次配置都要重启 Windows 95”。
    - **社区反应**: 13 个赞和 28 条讨论，开发者们分享了因频繁重启而中断工作流的沮丧经历，希望实现类似热重载的机制。

8.  **[Bug] /bg: PR created in a foreground session isn't linked on its agents-view entry** (#70693)
    - **链接**: [Issue #70693](https://github.com/anthropics/claude-code/issues/70693)
    - **重要性**: **中等**。后台任务管理体验的 Bug。当前台任务通过 `/bg` 转为后台后，其之前创建的 PR 链接在 Agent 视图中丢失，使得追踪后台任务成果变得困难。
    - **社区反应**: 用户明确报告了复现步骤，是新提出的 Bug，得到了开发者的初步回应。

9.  **[Bug] Desktop app: cannot change primary working directory or open new chat** (#54461)
    - **链接**: [Issue #54461](https://github.com/anthropics/claude-code/issues/54461)
    - **重要性**: **中等**。影响 Windows 桌面版用户的基础功能。用户无法修改工作目录或开启新对话，导致桌面版几乎无法使用。
    - **社区反应**: 11 条评论，用户提供了详细的系统日志，开发者已定位问题并打上相应标签。

10. **[Bug] opusplan downgrades plan mode to Sonnet past 200k** (#65512)
    - **链接**: [Issue #65512](https://github.com/anthropics/claude-code/issues/65512)
    - **重要性**: **高**。一个回归问题，`opusplan` 模式在上下文超过 200k 后，规划阶段会降级到 Sonnet 模型，违背了用户使用 Opus 进行高质量规划的预期。
    - **社区反应**: 用户对比之前版本，确认这是近期更新引入的回退，目前该 Issue 已关闭。

## 重要 PR 进展

1.  [**PR #70634**](https://github.com/anthropics/claude-code/pull/70634): **fix: handle server rate limiting during normal usage**
    - **内容**: 修复在正常使用中遇到的服务器限速问题。这可能是对社区关于“无响应”和“性能慢”反馈的直接响应。
2.  [**PR #70633**](https://github.com/anthropics/claude-code/pull/70633): **fix: Handle rate limiting headers for Anthropic API**
    - **内容**: 专门针对 Anthropic API 的限速头信息进行处理。与 #70634 配合，旨在更优雅地处理 API 限速，避免粗暴的错误提示。
3.  [**PR #70582**](https://github.com/anthropics/claude-code/pull/70582): **fix: sanitize subprocess call in llm.py (Security)**
    - **内容**: 修复 `plugins/security-guidance/hooks/llm.py` 中的一个“严重”级别安全漏洞。与 #70538 同属安全扫描项目，显示社区也在关注并贡献安全修复。
4.  [**PR #70538**](https://github.com/anthropics/claude-code/pull/70538): **fix: sanitize subprocess call in gitutil.py (Security)**
    - **内容**: 修复 `gitutil.py` 中的“严重”级别安全漏洞。关注点在于对子进程调用的输入进行消毒，防止命令注入。
5.  [**PR #66854**](https://github.com/anthropics/claude-code/pull/66854): **toekn**
    - **内容**: 标题为 `toekn`（疑似 typo），状态为 Open，但描述为空。需要关注其后续进展。

## 功能需求趋势

从今日的 Issue 中，可以提炼出社区最关注的三大功能方向：

1.  **深度工作流集成**: **GitLab 集成 (#12346)** 和 **JetBrains 插件 (#47166)** 的需求持续火热。社区明确表达了在主流 DevOps 平台（如 GitLab）和主要 IDE（如 IntelliJ）中获得与 GitHub 和 VSCode 相同级别原生体验的强烈愿望。这不再是“锦上添花”，而是许多团队采纳 Claude Code 的关键阻碍。
2.  **模型与成本控制优化**: **Token 消耗异常 (#42249)** 和 **`opusplan` 模型降级 (#65512)** 等问题揭示了用户对模型行为透明度和成本可控性的高度关注。同时，关于 **`opusplan[1m]` 预设 (#53987)** 的请求显示，用户希望获得更精细的模型选择权，特别是针对不同任务（规划 vs 执行）和不同上下文长度进行组合。
3.  **配置与工作流自动化**: 对 **Skills 子目录支持 (#10238)** 和 **MCP 配置热重载 (#24057)** 的呼吁表明，社区正在将 Claude Code 用于更复杂、更大规模的项目。他们需要更好的组织和管理能力，以减少手动操作和开发中断，向真正的“自动化助手”迈进。

## 开发者关注点

- **痛点**: **VSCode + Bedrock 用户的“二等公民”体验** (#52151) 是当前最突出的痛点。CLI 和 GUI 体验不一致，严重影响了付费用户（尤其是企业用户）的信任。此外，**Windows 平台的桌面应用和插件安装问题**（#54461, #67595）也表明跨平台体验仍需打磨。
- **高频需求**: **更智能的上下文管理** 是贯穿多个 Issue 的主线。无论是 `/rewind` 功能的发布，还是对Token消耗、模型降级、会话回溯的讨论，都指向用户希望在更复杂的交互中，能清晰地控制、恢复和审计自己的对话上下文，而不是被动地被系统“黑盒”处理。
- **对安全性的关注**: 社区提出的两个关于子进程调用的安全修复 PR（#70582、#70538）值得注意，这表明社区中不仅有功能需求，还有对代码质量和安全性的积极贡献。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-06-25

---

## 今日速览

今日 Codex 社区主要围绕 **“超高速率消耗 Tokens”** 问题展开激烈讨论，多个高热度 Issue 反映出用户对成本失控的强烈担忧。同时，团队在 **Ultra 推理努力度**、**多代理模式**、**时钟/睡眠工具** 等核心功能上持续推进，并新增 `clock.sleep` 等实验性特性。此外，关于 Windows 平台的各种兼容性 Bug 依然是社区高频反馈点。

---

## 版本发布

今天无新版本发布。过去24小时内发布了 5 个 Rust 版本的 Alpha 版本（`v0.143.0-alpha.11` 至 `v0.143.0-alpha.15`），但均无详细更新说明。

---

## 社区热点 Issues

### 1. [#28879 Burning tokens very fast (速率限制 / 成本)](https://github.com/openai/codex/issues/28879)
- **热度**：133 评论 / 269 👍  
- **重要性**：🔥 当前最受关注的问题。用户反馈自 6 月 16 日起，Codex (gpt-5.5, Plus 计划) 的 **每 Token 消耗成本暴涨 10~20 倍**，原本 20+ 次 Prompt 的预算现在只能支撑 2~3 次。  
- **社区反应**：大量用户确认复现，要求官方紧急排查计费逻辑或模型变动。

### 2. [#14593 Burning tokens very fast (类似问题)](https://github.com/openai/codex/issues/14593)
- **热度**：620 评论 / 271 👍  
- **重要性**：🔥 同类型问题的历史遗留 Issue，但依然活跃。用户持续反馈 Business 订阅下 Token 消耗异常快。  
- **社区反应**：与 #28879 形成共鸣，社区呼吁将两个 Issue 合并追踪。

### 3. [#13733 Background process polling wastes tokens (后台轮询浪费 Token)](https://github.com/openai/codex/issues/13733)
- **热度**：29 评论 / 23 👍  
- **重要性**：🟢 技术细节非常精准。当后台进程（如 `cargo build`）运行时，Codex 进入 **轮询循环**，每次状态检查都会触发完整 API 往返，导致 Token 随历史大小 × 轮询次数线性消耗。  
- **社区反应**：用户建议增加“静默轮询”模式或合并同类型请求。

### 4. [#29072 Windows Codex App: apply_patch fails (Windows 沙箱问题)](https://github.com/openai/codex/issues/29072)
- **热度**：17 评论 / 16 👍  
- **重要性**：🟢 Windows 用户的核心痛点。`apply_patch` 在 Windows 上因 `codex-windows-sandbox-setup.exe` 无法从包路径启动而失败，导致所有文件修改操作失效。  
- **社区反应**：Windows 开发者强烈要求修复，部分用户已回退版本。

### 5. [#29356 Context compaction loses operational continuity (上下文压缩丢失操作连续性)](https://github.com/openai/codex/issues/29356)
- **热度**：13 评论  
- **重要性**：🟢 长时间任务的核心问题。自动上下文压缩导致 Codex 丢失最近的关键操作步骤，推荐保留最后 5 步“原样”不压缩。  
- **社区反应**：PRO 订阅用户反馈该问题严重阻碍大型项目开发。

### 6. [#29197 Codex WebSearch receives Cloudflare 403 (Web 搜索被拦截)](https://github.com/openai/codex/issues/29197)
- **热度**：13 评论  
- **重要性**：🟢 Windows 上 WebSearch 功能完全不可用，请求被 Cloudflare 拦截（HTTP 403）。  
- **社区反应**：用户猜测是 Cloudflare 对 API 请求的 JS 挑战导致，期望后端增加反爬兼容。

### 7. [#25667 macOS app leaves code_sign_clone directories (macOS 磁盘占用问题)](https://github.com/openai/codex/issues/25667)
- **热度**：12 评论 / 18 👍  
- **重要性**：🟢 macOS 版退出后残留约 965MB 的 `code_sign_clone` 目录，给用户造成磁盘浪费和隐私担忧。  
- **社区反应**：已持续 24 天，官方未回应，引发部分用户不满。

### 8. [#24389 multi_agent_v1.close_agent can hang for hours (子代理挂起)](https://github.com/openai/codex/issues/24389)
- **热度**：11 评论  
- **重要性**：🟢 大规模自动化场景的致命问题。关闭无响应的子代理时，父线程可能挂起超过 8 小时。  
- **社区反应**：用户建议增加超时机制和优雅关闭回退。

### 9. [#9226 Codex cannot discover scripts in skill's scripts directory (Skill 脚本发现失败)](https://github.com/openai/codex/issues/9226)
- **热度**：7 评论 / 8 👍  
- **重要性**：🟢 影响技能开发者的核心体验。Codex 无法找到 Skill 目录下的脚本文件，导致第三方技能全面失效。  
- **社区反应**：该 Issue 已存在近半年，至今未修复，社区期待尽快合并相关 PR。

### 10. [#29915 Permission/approval mode does not persist (权限模式不持久)](https://github.com/openai/codex/issues/29915)
- **热度**：4 评论  
- **重要性**：🟢 新报告的高频 UX 问题。现有线程的权限/审批模式变更后无法保存，每次重开都需要重新设置。  
- **社区反应**：刚发布 1 天，已有多人复现。

---

## 重要 PR 进展

### 1. [#29923 support external clock sleeps](https://github.com/openai/codex/pull/29923)
- **功能**：新增 `clock.sleep` 工具，支持外部时钟驱动睡眠，最大时长提升至 12 小时。  
- **亮点**：引入了 `currentTime/sleep` 通知和 `currentTime/wake` 请求，为开发者提供非阻塞式时间管理能力。

### 2. [#29910 nest sleep config under current time reminder](https://github.com/openai/codex/pull/29910)
- **功能**：将 `sleep_tool` 配置从顶级 `[features]` 迁移至 `[features.current_time_reminder]` 下。  
- **亮点**：清理配置架构，消除独立 Feature 标志，增强与当前时间提醒的关联。

### 3. [#29710 Derive multi-agent mode from Ultra effort (已合入)](https://github.com/openai/codex/pull/29710)
- **功能**：将多代理模式从用户手动选择改为由 **Ultra 推理努力度** 自动派生。  
- **亮点**：消除配置冲突，使线程启动、覆盖、恢复、派生等场景下的行为可预测。

### 4. [#29683 Add managed new-thread model settings](https://github.com/openai/codex/pull/29683)
- **功能**：管理员可设置 App 新线程的默认模型、推理努力度与服务层级。  
- **亮点**：虽为默认值，但用户显式选择仍可覆盖，灵活性与可控性并存。

### 5. [#29709 Add gated Ultra reasoning effort](https://github.com/openai/codex/pull/29709)
- **功能**：增加受控的 **Ultra 推理努力度**，仅在模型目录与多代理特性同时启用时暴露。  
- **亮点**：为高级用户提供“最大推理+多代理”的终极组合，但对普通用户保持隐藏。

### 6. [#29907 namespace sleep under clock (已合入)](https://github.com/openai/codex/pull/29907)
- **功能**：将 `sleep` 工具重命名为 `clock.sleep`，与 `clock.curr_time` 形成统一命名空间。  
- **亮点**：简化模型识别与开发者接口。

### 7. [#29754 Preserve live turn history across reconnects](https://github.com/openai/codex/pull/29754)
- **功能**：App Server 端支持断线重连后重建 **权威累积的 Turn 历史**。  
- **亮点**：解决了长时间任务中因网络波动导致的会话历史丢失问题。

### 8. [#29931 Share executor-bound capability roots across consumers](https://github.com/openai/codex/pull/29931)
- **功能**：共享绑定到执行器的能力根，避免 MCP 与 Connector 的重复解析与不一致。  
- **亮点**：减少启动阶段文件系统负载，提升多消费者场景下的稳定性。

### 9. [#29920 Retry failed Codex Apps MCP startup](https://github.com/openai/codex/pull/29920)
- **功能**：为 Codex Apps MCP 连接增加重试机制。  
- **亮点**：修复因初始化失败导致工具列表为空的问题，提升 MCP 连接健壮性。

### 10. [#29833 make world state snapshots serializable](https://github.com/openai/codex/pull/29833)
- **功能**：世界状态快照序列化，使差量基线可在滚动升级与会话恢复后正确重建。  
- **亮点**：为 Codex 的持久化能力奠定基础，解决“恢复后状态不准确”的长期问题。

---

## 功能需求趋势

从今日 Issues 中可提炼出以下 **社区关注的方向**：

| 方向 | 典型 Issue | 说明 |
|---|---|---|
| **速率限制 / Token 成本** | #28879, #14593, #13733 | 社区对 Token 消耗失控的抱怨极为集中，涉及模型、后台轮询、上下文压缩多个维度 |
| **沙箱与权限管理** | #29072 (Windows), #23393, #29915 | Windows 沙箱启动失败、权限模式不持久等问题影响日常工作流 |
| **上下文压缩优化** | #29356 | 长时间任务中压缩策略过于激进，需保留关键操作上下文 |
| **跨平台兼容性** | #25667 (macOS 磁盘占用), #21863 (VS Code 空白面板) | 不同平台上的 UI 与功能断裂问题持续出现 |
| **MCP / 外部集成** | #15299, #15355, #19871 | 社区对 MCP 通知推送、本地控制指令注入、第三方模型调用异常有较强需求 |
| **多代理与子代理管理** | #24389, #19197 | 子代理挂起、孤儿进程、生命周期缺乏控制是高级用户的主要痛点 |

---

## 开发者关注点

- **成本失控是第一痛点**：多个高热度 Issue 集中在 Token 消耗异常，特别是近期模型的付费模式可能发生变化，大量 Plus/Business 用户反馈预算“秒光”。开发者强烈期待官方给出透明的计费说明与优化方案。
- **Windows 生态仍是短板**：沙箱启动失败、权限提示反复、WebSearch 被拦截等问题使得 Windows 上 Codex 的可用性大打折扣，多款工具（`apply_patch`、`WebSearch`）无法正常工作。
- **上下文管理需更智能**：开发者希望 Codex 在长时间任务中能更智能地压缩上下文，而不是简单丢弃关键步骤。同时，后台轮询导致的浪费也需要更高效的轮询机制（如合并检查、静默模式）。
- **MCP 集成进入深水区**：社区已不满足于基本的 MCP 工具调用，进一步要求 **互操作性**（如通知推送、本地控制、跨会话同步）。这预示着 Codex 正在从简单的代码辅助工具向 **可编程的自动化引擎** 演进。
- **Ultra 模式值得期待**：多个 PR 围绕 Ultra 推理努力度与多代理模式的自动派生展开，暗示 OpenAI 正在为最顶级的推理能力铺路。开发者可关注此方向，为未来的超级自动化任务做准备。

---

*数据截止至 2026-06-25 15:00 UTC。完整动态请关注 [github.com/openai/codex](https://github.com/openai/codex)。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

好的，作为专注于 AI 开发工具的技术分析师，我已根据您提供的 GitHub 数据，为您生成了 2026-06-25 的 Gemini CLI 社区动态日报。

---

## Gemini CLI 社区动态日报 | 2026-06-25

### 今日速览

今日社区动态主要集中在 **Agent 的可靠性、安全性以及系统性能** 三大方向。多个 P1 级别的 Bug（如子代理汇报错误成功、Shell 命令执行卡死等）正在修复中，同时社区对 AST 感知、记忆系统优化和开发者体验（如终端显示）的功能需求呼声很高。此外，一个旨在实现 AST 感知的 PR 被关闭，但其底层逻辑值得关注。

---

### 社区热点 Issues

1.  **#22323：子代理在达到最大轮次限制后错误地报告任务成功**
    - **重要性**：这是一个 P1 级别的 Bug，直接影响了 Agent 的可靠性。当子代理（如 `codebase_investigator`）由于 `MAX_TURNS` 限制而中断任务时，它会错误地报告 `status: "success"` 和 `Termination Reason: "GOAL"`，从而隐藏了真正的执行中断问题。这对依赖子代理进行复杂任务处理的用户来说是严重的误导。
    - **社区反应**：8 条评论，2 个 👍，开发者正在积极讨论并需要重新测试。
    - **链接**：[Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

2.  **#21409：通用代理（Generalist agent）在任务执行时挂起**
    - **重要性**：P1 级别的严重 Bug。当 Gemini CLI 将任务交给通用代理处理时，会无限期挂起，使用户无法完成任何操作。用户反馈简单的文件夹创建操作都会导致挂起，直至手动取消。
    - **社区反应**：7 条评论，8 个 👍（评论数排行第三，点赞数排行第一），这是社区反馈最强烈的痛点之一。
    - **链接**：[Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)

3.  **#24353：健壮的组件级评估（Component Level Evaluations）**
    - **重要性**：这是一个大型特性（EPIC），旨在为代码库中的不同组件建立更可靠的评估体系。这直接关系到 CLI 功能的稳定性、回归测试的覆盖率以及整体质量的提升，是长期健康发展的基石。
    - **社区反应**：7 条评论，表明社区关注 CLI 质量的系统性改进。
    - **链接**：[Issue #24353](https://github.com/google-gemini/gemini-cli/issues/24353)

4.  **#25166：Shell 命令执行完成后卡死，显示“等待输入”**
    - **重要性**：另一个 P1 级别的交互 Bug。代理执行的 Shell 命令明明已经完成，但 CLI 界面却依然显示命令正在运行并等待用户输入，导致用户无法进行下一步操作，严重影响了使用流程。
    - **社区反应**：4 条评论，3 个 👍，是一个高频出现的稳定性问题。
    - **链接**：[Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)

5.  **#22745：评估 AST 感知文件读取、搜索和映射的影响**
    - **重要性**：这是一个功能探索性 EPIC。通过引入 AST（抽象语法树）感知能力，可以使文件读取更精确（如只读取函数体）、代码搜索更智能，从而减少无效 Token 消耗和错误读取带来的轮次浪费。这代表了 Agent 工具集从“文本层面”向“语义层面”演进的重要方向。
    - **社区反应**：7 条评论，是社区期望的功能方向。
    - **链接**：[Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)

6.  **#21968：Gemini 不会主动使用自定义技能和子代理**
    - **重要性**：这反映了 Agent 的“工具调用策略”问题。即使用户配置了自定义技能（如操作 Gradle、Git），代理在处理相关任务时也倾向于从头开始写命令，而不是主动调用现有的、更优的技能。这使得用户配置的技能形同虚设。
    - **社区反应**：6 条评论，开发者正在调查原因并寻求优化策略。
    - **链接**：[Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)

7.  **#26525：增加确定性编辑日志和减少自动内存（Auto Memory）日志记录**
    - **重要性**：P2 级别的安全问题。自动内存系统在记录对话时，会先将内容发送给模型处理，日志记录也可能包含敏感信息。该 Issue 要求实现更安全的确定性编辑（在发送前进行），并减少不必要的日志记录，以提升安全性。
    - **社区反应**：5 条评论，开发者正在讨论安全实现细节。
    - **链接**：[Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525)

8.  **#22672：Agent 应停止/劝阻破坏性行为**
    - **重要性**：这是一个关于 Agent“安全性”和“责任感”的提案。用户反馈 Agent 在某些场景下（如 Git 操作）会使用 `git reset` 或 `--force` 等破坏性命令，而存在更安全的替代方案。社区希望 Agent 在操作前评估风险并优先选择安全的路径。
    - **社区反应**：3 条评论，1 个 👍，代表了社区对 Agent 安全治理的期望。
    - **链接**：[Issue #22672](https://github.com/google-gemini/gemini-cli/issues/22672)

9.  **#22267：浏览器代理（Browser Agent）忽略 `settings.json` 配置（例如 `maxTurns`）**
    - **重要性**：这是一个配置完整性的 Bug。用户可以通过 `settings.json` 配置代理的行为，但浏览器代理完全忽略了这些配置，导致用户无法自定义其行为（如限制最大执行轮次）。
    - **社区反应**：3 条评论，明确指出配置系统存在实现缺陷。
    - **链接**：[Issue #22267](https://github.com/google-gemini/gemini-cli/issues/22267)

10. **#21983：浏览器代理在 Wayland 环境下运行失败**
    - **重要性**：这暴露了 CLI 在特定系统环境（Wayland）下的兼容性问题。对于 Linux 桌面用户来说，这是一个关键的障碍。
    - **社区反应**：4 条评论，1 个 👍。
    - **链接**：[Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)

---

### 重要 PR 进展

1.  **#28015：实现 Cloud Run Webhook 接入服务**
    - **内容**：为 Caretaker Agent 实现了 GitHub Webhook 的接收与处理服务，包括签名验证、Firesotre 存储和消息发布。这是 Agent 自动化工单处理能力的重要后端基础。
    - **链接**：[PR #28015](https://github.com/google-gemini/gemini-cli/pull/28015)

2.  **#28053：修复以“@”开头的文件引用路径解析问题**
    - **内容**：修复了一个生产 Bug。当模型在处理文件时引用以 `@` 符号开头的路径（如 `@policies/new-policies.txt`）时，会导致 `File not found` 错误。此 PR 实现了更健壮的路径解析逻辑。
    - **链接**：[PR #28053](https://github.com/google-gemini/gemini-cli/pull/28053)

3.  **#27971：修正“思考泄漏”问题（Thought Leakage）**
    - **内容**：修复了一个关键问题：模型的内部思想过程（思考）会错误地混入普通对话历史中，导致后续模型行为混乱（陷入思考循环或模仿内部独白）。此 PR 通过修整历史的逻辑来解决这个问题。
    - **链接**：[PR #27971](https://github.com/google-gemini/gemini-cli/pull/27971)

4.  **#27966：强制实施路径不敏感的黑名单和 VS Code 安全模式**
    - **内容**：一个安全增强补丁。强制对敏感目录（如 `.git`, `.env`）的路径检查进行不区分大小写的匹配，以防绕过，并增强了 VS Code 交互模式的安全性。
    - **链接**：[PR #27966](https://github.com/google-gemini/gemini-cli/pull/27966)

5.  **#27636：优化 VirtualizedList 性能并修复点击处理**
    - **内容**：对 UI 组件 VirtualizedList 做了重大性能优化，包括渲染和滚动性能，并改进了静态项目的点击事件处理。旨在提升终端界面在处理大量数据时的流畅度。
    - **链接**：[PR #27636](https://github.com/google-gemini/gemini-cli/pull/27636)

6.  **#28054：修复签名错误信息中的 URL 文本可点击性**
    - **内容**：修复了一个 UI 细节。当登录失败时，错误信息中的 HTTP(S) URL 会由于句号而变得不可点击。此 PR 仅在显示错误时移除 URL 后面的标点，方便用户快速访问链接。
    - **链接**：[PR #28054](https://github.com/google-gemini/gemini-cli/pull/28054)

7.  **#28113：新增工具注册表发现功能 [已合并]**
    - **内容**：为评估报告增加了工具注册表功能，并可以从评估断言中提取工具名称。这将有助于更好地追踪和分析代理的工具使用情况。
    - **链接**：[PR #28113](https://github.com/google-gemini/gemini-cli/pull/28113)

8.  **#27964：修复 MCP 资源解析的跨服务器混淆问题 [已合并]**
    - **内容**：修复了 MCP 协议中的一个安全问题。当连接多个 MCP 服务器时，如果 URI 冲突，可能会错误地解析到另一个服务器的资源上。此 PR 使冲突时解析失败，而不是返回错误结果。
    - **链接**：[PR #27964](https://github.com/google-gemini/gemini-cli/pull/27964)

9.  **#28132：修复发布验证中工作空间二进制文件干扰问题 [已合并]**
    - **内容**：修复了一个 CI/CD 问题。之前的变更导致集成测试使用了本地源码而非发布的 NPM 包，此 PR 确保了验证的准确性。
    - **链接**：[PR #28132](https://github.com/google-gemini/gemini-cli/pull/28132)

10. **#27101：修复列表非内存任务元数据后停止响应 [已合并]**
    - **内容**：修复了在 `/tasks/metadata` 端点对非内存任务存储返回 `501 Not Implemented` 后应立即停止而不是继续执行的问题。
    - **链接**：[PR #27101](https://github.com/google-gemini/gemini-cli/pull/27101)

---

### 功能需求趋势

- **Agent 的可靠性与准确性**：社区最关注的是 Agent 能否可靠地完成任务。具体表现为：要求 Agent 正确报告自己的状态（Issue #22323）、不无故挂起（#21409、#25166）、主动使用现有技能（#21968）以及避免执行破坏性操作（#22672）。
- **Agent 的“智能”与“感知”能力**：期望 Agent 能更智能地理解和处理代码。趋势从“文本操作”转向“语义操作”，如 AST 感知的文件读取和搜索（#22745）。这能提升 Agent 的效率和对代码逻辑的理解深度。
- **安全与隐私**：安全性是社区的核心关切。包括防止敏感信息（如密码、Token）泄漏到日志或模型上下文中（#26525），以及 Agent 自动采取安全而非冒险的操作路径（#22672）。
- **可配置性与兼容性**：用户希望所有的配置都能被正确执行（#22267），并且软件能在不同的系统平台和环境（如 Wayland）下稳定工作（#21983）。
- **记忆系统优化**：社区对 Auto Memory 功能提出了更高的要求，希望它能智能识别无效信息（低信号会话），避免无效重试和错误处理（#26522, #26523）。

---

### 开发者关注点

- **稳定性问题**：**“挂起”** 是最频繁被提及的、对工作流破坏性最大的 Bug。无论是通用代理（#21409）还是 Shell 命令执行（#25166），任何形式的挂起都会让开发者失去对工具的耐心和信任。
- **“知其然，不知其所以然”的困惑**：Agent 有时会给出错误或误导性的状态汇报（#22323），例如将“失败”汇报为“成功”。这比简单的失败更糟糕，因为它会误导开发者，浪费大量排查时间。
- **工具调用逻辑的“呆板”**：Agent 无法灵活运用开发者为其配置好的工具链（#21968），而是选择更笨拙、更易出错的原生方法，这降低了用户自定义配置的价值，也让用户感到挫败。
- **终端交互体验**：除了挂起，Shell 命令执行后界面状态的混乱（#25166）、外部编辑器退出后的屏幕刷新问题（#24935）以及终端 resize 时的闪烁问题（#21924），都是影响开发者流畅体验的细节痛点。
- **配置系统的信任危机**：当用户明确配置了参数却未被生效时（#22267），会严重动摇对产品和配置系统的信任。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

好的，作为专注于 AI 开发工具的技术分析师，我已根据您提供的 GitHub 数据，为您生成 2026-06-25 的 GitHub Copilot CLI 社区动态日报。

---

# GitHub Copilot CLI 社区动态日报 | 2026-06-25

## 今日速览

今日社区焦点集中于 Copilot CLI 的**插件（Plugin）系统**和 **会话（Session）恢复功能**。虽然 `v1.0.65` 修复了 `/cd` 会话持久化的一些问题，但插件中的权限控制漏洞和库存问题成为热议焦点。此外，社区与 AI 的交互方式（如键盘快捷键、命令行历史、撤销操作）持续成为高频需求。

## 版本发布

-   **v1.0.65 (2026-06-24 发布)**
    - **亮点**: `/cd` 命令现能持久化当前工作目录，恢复会话时会自动切换到该目录，并能在新目录中发现自定义智能体。
    - **Bug 修复**: 修复了以斜杠开头的字符串参数（如 `--body "/azp run"`）意外触发文件系统权限提示的问题。
    - **修复**: 全屏时间线显示保持稳定。

## 社区热点 Issues (Top 10)

1.  **[[area:plugins] preToolUse: silent command rewrite via updatedInput — confirmation dialog appears even with permissionDecision: allow](https://github.com/github/copilot-cli/issues/2643)**
    - **重要性**: **极高**。这是一个核心的插件系统权限缺陷。当插件通过 `preToolUse` 钩子静默重写命令并明确授权后，CLI 依然会弹出确认对话框，破坏了插件自动化流程。
    - **社区反应**: 11 条评论，2 个 👍。该问题创建于两个月前，今日仍有更新，说明是顽疾且影响了插件生态的自动化能力。

2.  **[[area:plugins] Support subfolders for skills to better organize them](https://github.com/github/copilot-cli/issues/1632)**
    - **重要性**: **高**。社区对技能（Skills）管理的需求从“能用”升级到了“好用”。随着用户创建大量技能，扁平化管理方式变得低效。
    - **社区反应**: 9 条评论，21 个 👍。高赞需求，反映出社区对技能文件组织结构的强烈期待。

3.  **[[Bug] All models show as 'Blocked/Disabled' after June 16 outage](https://github.com/github/copilot-cli/issues/3832)**
    - **重要性**: **高**。尽管已关闭，但该问题揭示了服务中断的后遗症。大规模故障后，客户端状态未能正确恢复，导致用户无法选择模型并开始新会话。
    - **社区反应**: 6 条评论，13 个 👍。用户关注度很高，显示了对服务弹性和状态同步的担忧。

4.  **[[area:models] GH Copilot CLI subtracted 5% for one request with 6x multiplier instead of 2%](https://github.com/github/copilot-cli/issues/3881)**
    - **重要性**: **中**。涉及计费/配额计算的准确性，是一个严重的潜在问题。用户声称被多扣了 3% 的配额，直接关系到用户钱袋子。
    - **社区反应**: 3 条评论。虽然评论不多，但性质敏感，需要官方给出明确解释或修正。

5.  **[[area:input-keyboard] Configurable Key Bindings (Enabling Fast Model Switching)](https://github.com/github/copilot-cli/issues/2419)**
    - **重要性**: **高**。这是提升用户交互效率的经典需求。用户希望像 IDE 一样自定义快捷键，特别是为切换模型等高频操作配置快捷键，以减少摩擦。
    - **社区反应**: 2 条评论，5 个 👍。标志着社区对 CLI 交互复杂度的不满，并寻求更高效的交互模式。

6.  **[[area:sessions, area:models] model selection empty when resuming a session](https://github.com/github/copilot-cli/issues/3913)**
    - **重要性**: **中**。与 #3832 类似，但可能是特例。恢复会话时模型列表为空，迫使用户不得不重新开始，破坏了会话的连续性。
    - **社区反应**: 3 条评论。从 `v1.0.64` 开始出现，与今日发布的 `v1.0.65` 关联度高。

7.  **[[triage] CLI needs to be capturing restricted data for internal MSFT EMU users](https://github.com/github/copilot-cli/issues/3895)**
    - **重要性**: **极高**。这是一条来自微软内部用户的合规需求。指出 CLI 需要能够收集受限制的数据，这对于企业级部署（特别是大型组织）至关重要。
    - **社区反应**: 1 条评论。虽然评论少，但揭示了一个重要的企业级特性缺失。

8.  **[[area:input-keyboard] Escape should cancel the current task and focus the pending queued prompt (not discard it)](https://github.com/github/copilot-cli/issues/3692)**
    - **重要性**: **高**。这是一个关键的交互流程问题。用户期望的“撤销/取消”逻辑与现有实现不一致，导致工作流中断。
    - **社区反应**: 2 条评论。清晰描述了当前行为的痛点，代表了用户对任务管理和消息队列控制的高期望。

9.  **[[area:input-keyboard] /cd autocomplete: Enter behavior depends on highlighted-index position...](https://github.com/github/copilot-cli/issues/3918)**
    - **重要性**: **低**。但描绘了一个典型的 UI/UX 细节问题。自动补全菜单在不同选中位置下，`Enter` 键行为不一致，影响用户体验的精细度。
    - **社区反应**: 0 条评论。新提交的 Issues，显示了近期 QA 的细致度，值得改进。

10. **[[area:input-keyboard, area:platform-windows] CLI shows "ctrl+enter enqueue" but "ctrl+enter" adds a line break ... "ctrl+q" is the enqueue command](https://github.com/github/copilot-cli/issues/3760)**
    - **重要性**: **中**。这是一个明显的文档与实际行为不符的 Bug，尤其是在 Windows 平台上。误导用户操作，增加学习成本。
    - **社区反应**: 1 条评论。提供一个清晰的视频证据，简单直接。

## 重要 PR 进展 (Top 10)

由于数据中仅提供了一条 PR，无法筛选出 10 条。以下是对该 PR 的分析：

-   **[[PR #2587] Add automated issue classification with GitHub Agentic Workflows](https://github.com/github/copilot-cli/pull/2587)**
    - **功能**: 引入 **GitHub Agentic Workflows (`gh-aw`)** 来自动化 Issue 分类。当 Issue 创建或重新打开时，自动为其添加 `area:` 和 `triage` 标签。
    - **分析**: 这是一个**元流程**的优化，旨在提升 Copilot CLI 项目自身的维护效率。通过 AI 自动打标签，可以加速 Issue 的归类、分派和响应，对社区提交者来说是一种潜在的积极信号，意味着他们的 Issue 能更快地被正确团队关注。
    - **状态**: 已合并。

## 功能需求趋势

从本期 Issues 中，可以提炼出社区最关注的三个功能方向：

1.  **插件与可扩展性 (Plugins & Extensibility)**: 这是当前最核心的讨论领域。用户不仅需要插件能工作，更要求它们能**自动化**（解决 #2643 的权限问题）、**可组织**（#1632 的子文件夹支持）且**易于管理**（#3917 的交互式插件市场选择）。这说明社区正在从“尝鲜”阶段进入“深度集成”阶段。

2.  **高级用户交互与效率优化 (Advanced UX & Efficiency)**: 用户对 CLI 的交互提出了比肩 IDE 的高要求。具体体现在：
    - **可配置键绑定** (`#2419`, `#1729`)
    - **智能的命令历史** (`#2680`)
    - **友好的撤销/取消逻辑** (`#3692`)
    - **无缝的模型切换** (`#2419`)
    这反映了核心用户群体（开发者）对工具效率的极致追求。

3.  **企业级能力 (Enterprise Readiness)**: 随着 Copilot CLI 的普及，企业级需求开始显现。
    - **集中化配置管理** (`#3909`): 企业管理员希望从中心控制开发者的本地 CLI 设置。
    - **复杂网络环境支持** (`#523` Kerberos, `#2978` 代理)
    - **合规与数据收集** (`#3895`)
    这些需求表明 Copilot CLI 正在从个人工具向企业级基础设施演进。

## 开发者关注点

- **痛点焦点**: **计费/配额透明度** (`#3881`) 是当前最尖锐的痛点。开发者发现配额计算与其理解不符，这会严重损害信任。

- **高频痛点**: **会话**和**交互**相关的 Bug 被频繁报告。无论是模型选择为空 (`#3913`)、恢复后目录错乱、还是 `Enter` 键行为不一致 (`#3918`)，都表明会话管理的稳定性仍是 CLI 体验的薄弱环节。

- **未被满足的需求**: **智能体控制的上下文管理**。Issue `#3916` 和 `#3915` 提出了一个前沿想法：让智能体自身也能调用 `/compact` 命令以及改善压缩时的交互流。这表明高级用户希望智能体更“聪明”，能主动管理自己的上下文窗口，而不是被动地推给用户去处理。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

好的，这是为您生成的2026-06-25 Kimi Code CLI 社区动态日报。

---

## Kimi Code CLI 社区动态日报 | 2026-06-25

### 今日速览

今天社区动态集中在 **体验优化** 与 **资源管理** 两大方向。一方面，`kimi web` 指令因MCP配置问题扫描错误目录的 bug 已修复，提升了工作流可靠性；另一方面，社区对 **Kimi Code会员的计费逻辑** 以及 **上下文压缩的Token浪费** 问题提出了激烈讨论和技术性改进建议，表明用户对成本敏感度和效率优化有很高期待。

### 社区热点 Issues

以下为今日最值得关注的 Issue，涵盖了 bug 报告与用户诉求。

1.  **[#1994] kimiCode用量计算有问题** 🔥
    *   **重要性**: 🔥🔥🔥🔥🔥 (极高)
    *   **概述**: 用户反馈会员订阅的“2小时额度”仅能完成2次任务，疑似Token消耗计算方式与宣传的“按API请求次数”不符，深层原因是K2.6模型的思维链过长导致Token消耗过大。
    *   **社区反应**: 已有7个👍和7条评论，用户情绪较为强烈，认为计费模型存在误导，是当前社区最关心的核心痛点之一。
    *   **链接**: [查看 Issue](https://github.com/MoonshotAI/kimi-cli/issues/1994)

2.  **[#2472] 上下文压缩时重新加载系统提示，浪费~20k Tokens** 🔥
    *   **重要性**: 🔥🔥🔥🔥🔥 (极高)
    *   **概述**: 开发者发现`Kimi CLI`在触发上下文压缩（Context Compaction）后，会重新读取所有项目级指令（如`AGENTS.md`），导致每次压缩浪费约2万Token，且这些信息并未丢失，属于无效开销。
    *   **社区反应**: 这是一个高价值的技术优化建议，创建仅1天即获关注，反映了用户对Token利用率的极致追求。
    *   **链接**: [查看 Issue](https://github.com/MoonshotAI/kimi-cli/issues/2472)

3.  **[#640] Kimi CLI 反复读取同一个文件陷入死循环**
    *   **重要性**: 🔥🔥🔥🔥 (高)
    *   **概述**: 用户在使用自定义 Anthropic 接口和模型时，`Kimi CLI`卡在反复读取一个文件的死循环中。
    *   **社区反应**: 这是历史遗留的严重Bug，影响了用户的正常编码体验。评论数已达14条，是今日讨论最激烈的帖子之一。
    *   **链接**: [查看 Issue](https://github.com/MoonshotAI/kimi-cli/issues/640)

4.  **[#2469] `kimi web` 从安装目录启动MCP服务器，破坏工作区相关工具**
    *   **重要性**: 🔥🔥🔥🔥 (高)
    *   **概述**: 通过`kimi web`启动时，MCP服务器错误地从CLI安装目录运行，导致其无法找到工作区内的`mcp.json`等配置，从而使依赖工作区路径的MCP工具失效。
    *   **社区反应**: 该Bug已修复（见PR #1942），但作为刚关闭的Issue，是社区近期关注的工作流痛点。
    *   **链接**: [查看 Issue](https://github.com/MoonshotAI/kimi-cli/issues/2469)

5.  **[#2473] web指令报错**
    *   **重要性**: 🔥🔥 (中)
    *   **概述**: 用户反馈`/web`指令在执行时出现报错，但未提供详细错误信息。
    *   **社区反应**: 已关闭，但可能反映了`web`功能在不同版本下的稳定性问题。
    *   **链接**: [查看 Issue](https://github.com/MoonshotAI/kimi-cli/issues/2473)

6.  **(其他相关Issue，由于数量限制，仅列举热度最高的)**

### 重要 PR 进展

今日有两个PR被合并或更新，解决了社区反馈的核心问题。

1.  **[#1942] 修复：将MCP配置传播到子代理并在恢复后立即重启**
    *   **功能**: 此PR修复了两个关键问题：1) 子代理（如explorer、coder）因代码硬编码`mcp_configs=[]`而无法使用MCP工具；2) 会话恢复后MCP工具无法正常运行。
    *   **重要性**: 🔥🔥🔥🔥🔥 (极高)。这直接解决了Issue #2469中的根因，并提升了多代理协作工作流的可靠性。
    *   **状态**: **已合并** 🎉
    *   **链接**: [查看PR](https://github.com/MoonshotAI/kimi-cli/pull/1942)

2.  **[#1377] 功能：为审批和问答对话框增加 vim 风格 j/k 键盘导航**
    *   **功能**: 为CLI中的审批和问答交互界面增加了类似Vim的`j`/`k`快捷键，用于上下选择选项，提升键盘流操作效率。
    *   **重要性**: 🔥🔥🔥 (中)。提升了高级用户的交互体验。
    *   **状态**: **已合并** 🎉
    *   **链接**: [查看PR](https://github.com/MoonshotAI/kimi-cli/pull/1377)

### 功能需求趋势

从近期的Issue和PR中可以提炼出社区最关注的三大功能方向：

1.  **资源与计费透明度**: 社区强烈要求**清晰、可预测的Token计费模型**。用户希望了解不同模型（如K2.6的长链思维）的真实消耗，并希望计费与API调用次数或Token消耗量完全对齐，而非模糊的“时长”。
2.  **MCP (模型上下文协议) 生态成熟**: 多个Issue和PR聚焦于MCP的**配置传播**和**工作区路径**问题。这表明社区正在积极尝试构建基于MCP的复杂工具链，核心诉求是MCP服务器的稳定、可预测和配置灵活。
3.  **会话与上下文管理**: 用户对**Token效率**的敏感度极高。Issue #2472提出的“上下文压缩不浪费Token”就是一个典型。用户希望CLI能智能化地管理上下文，避免在压缩、回顾等操作中产生不必要的Token开销。

### 开发者关注点

开发者反馈中的核心痛点和高频需求总结如下：

*   **计费模式焦虑**: 这是当前最强烈的负面反馈。用户认为Kimi Code的“时长计费”与实际Token消耗脱钩，导致成本不可控，影响了对产品的信任度。
*   **配置与路径困扰**: `MCP配置`无法被`子代理`继承以及`web`指令从错误路径启动MCP，暴露出配置系统的复杂性和不稳定性。开发者希望在配置上获得更清晰的指导和确定性。
*   **核心Bug影响体验**: 如Issue #640提到的“文件读取死循环”，这类严重Bug虽出现频率不高，但一旦触发会完全阻塞工作流，是开发者最忌惮的问题。
*   **高级交互的迫切需求**: 开发者对非编辑器CLI环境下的交互效率有很高要求，例如PR #1377关于Vim快捷键的合并，反映了这部分用户希望获得更“黑客”且高效的操作方式。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

好的，这是为您生成的 2026-06-25 OpenCode 社区动态日报。

---

# OpenCode 社区动态日报 | 2026-06-25

## 今日速览

昨日，OpenCode 发布了 v1.17.10 版本，引入了 `--mini` 模式并增强了 MCP 资源管理能力。社区讨论热度集中在 **MCP OAuth 认证的兼容性与配置问题**、**TUI 稳定性（特别是 Linux 下的 Ctrl+Z 问题）** 以及**模型服务（如 Qwen3.7）的可靠性**。此外，提交者 @Nomadcxx 的一系列 PR 正在为 MCP 功能带来重大更新。

## 版本发布

### v1.17.10

**核心改进：**
- 将 MCP 服务器指令添加到会话上下文中，提升 Agent 的感知能力。 (@Arcadi4)
- 新增对 OpenCode 托管提供者集成的支持。
- 新增 MCP 资源模板列表和读取工具，增强了 MCP 协议的支持。
- 新增 `--mini` CLI 模式，提供了更轻量级的交互体验。

**Bug 修复：**
- 修复了某些情况下 MCP 资源模板工具被错误隐藏的问题。

## 社区热点 Issues

1. **#10416 [CLOSED] OpenCode 默认不是私有的吗？**
   用户发现会话标题的计算发生在外部网络，指出了一个潜在的隐私风险。该 Issue 获得了社区极高的关注度（59条评论，39个赞），表明用户对本地运行时的数据隐私非常敏感。
   [查看详情](https://github.com/anomalyco/opencode/issue/10416)

2. **#21090 [OPEN] 始终报错“模型试图调用不可用的工具”**
   用户抱怨 OpenCode 无法分析代码库，而只能像普通聊天机器人一样工作。这是新用户常见的痛点，反映了工具与代码库交互的期望与实际体验之间的差距。
   [查看详情](https://github.com/anomalyco/opencode/issue/21090)

3. **#12308 [CLOSED] MCP 的 Entra 认证不工作**
   用户在将 MCP 与 Microsoft Entra ID 集成时遇到了问题，表明企业级认证场景仍存在兼容性bug。
   [查看详情](https://github.com/anomalyco/opencode/issue/12308)

4. **#31119 [OPEN] [BUG]: 错误：没有名为‘name’的列**
   用户更新版本后遇到数据库错误，完全无法使用应用。这是一个严重的回退问题，影响了从旧版本升级的用户。
   [查看详情](https://github.com/anomalyco/opencode/issue/31119)

5. **#5444 [CLOSED] 带 OAuth 的 MCP 不工作**
   另一个与 MCP OAuth 配置相关的问题，表明该功能是社区中的高频问题点，涉及配置复杂度和兼容性。
   [查看详情](https://github.com/anomalyco/opencode/issue/5444)

6. **#24817 [OPEN] Linux 下 Ctrl+Z 关闭/挂起 OpenCode 而不是撤销文本输入**
   这是 Linux 用户的常见痛点，Ctrl+Z 作为终端标准快捷键的冲突影响了核心编辑体验。用户期望其行为符合常规文本输入的“撤销”逻辑。
   [查看详情](https://github.com/anomalyco/opencode/issue/24817)

7. **#33721 [CLOSED] [反馈] OpenCode Go (Zen API) 的 qwen3.7 系列服务不稳定**
   付费用户投诉模型服务频繁超时、中断，成功率仅约60-70%。这直接影响了核心体验，尤其是在“思考模式”下问题更严重。
   [查看详情](https://github.com/anomalyco/opencode/issue/33721)

8. **#17232 [OPEN] [功能请求]：支持 `opencode.local.json` 项目本地配置覆盖**
   社区希望支持项目级别的本地配置覆盖文件，这在多人协作或需要忽略的本地配置场景中非常重要。该请求获得了8个赞，代表了开发者对配置灵活性的需求。
   [查看详情](https://github.com/anomalyco/opencode/issue/17232)

9. **#31607 [OPEN] 启动 opencode 1.17.00 TUI 可能导致崩溃**
   用户在 Windows 上启动新版 TUI 时遇到段错误。这是新版本的稳定性问题，需要紧急修复。
   [查看详情](https://github.com/anomalyco/opencode/issue/31607)

10. **#32678 [CLOSED] 为什么 opencode 不遵循路径？**
    用户配置了 `AGENTS.md` 但模型未按指令执行。这指向了 Agent 对工作区上下文理解的不一致性，是一个核心的 AI 交互问题。
    [查看详情](https://github.com/anomalyco/opencode/issue/32678)

## 重要 PR 进展

1. **#33281 [OPEN] feat(cli): 添加独立 v2 会话流程**
   @thdxr 添加了 `--standalone` 模式，运行一个经过认证的私有服务器子进程，并通过 v2 API 创建和管理会话，为未来的架构演进奠定基础。
   [查看详情](https://github.com/anomalyco/opencode/pull/33281)

2. **#33226 [CLOSED] feat(core): 添加会话快照和回滚系统**
   @thdxr 实现了后端无关的 Git 服务和会话快照功能，允许用户预览和回滚会话状态，极大增强了操作的可靠性。
   [查看详情](https://github.com/anomalyco/opencode/pull/33226)

3. **#32480 [OPEN] [contributor] feat(mcp): 展示工具进度**
   @Nomadcxx 的贡献，将 MCP 进度通知集成到 TUI 的进度展示中，提升了 MCP 工具执行的可视性。
   [查看详情](https://github.com/anomalyco/opencode/pull/32480)

4. **#32936 [OPEN] [contributor] feat(mcp): 支持资源订阅**
   @Nomadcxx 的系列 PR 之一，为 MCP 添加资源订阅功能，使 OpenCode 能实时响应服务器资源变化。
   [查看详情](https://github.com/anomalyco/opencode/pull/32936)

5. **#32943 [OPEN] [contributor] feat(mcp): 支持模板和补全**
   @Nomadcxx 的另一个 PR，为 MCP 添加资源模板和 URI 补全支持，完善了 MCP 协议的功能实现。
   [查看详情](https://github.com/anomalyco/opencode/pull/32943)

6. **#32478 [OPEN] [contributor] feat(mcp): 发布资源列表变更事件**
   @Nomadcxx 的系列 PR 基础，为 MCP 添加资源变更通知能力。
   [查看详情](https://github.com/anomalyco/opencode/pull/32478)

7. **#33733 [OPEN] fix(opencode): 在响应头缺少重试时间时限制重试退避**
   @1volt12 修复了会话重试逻辑中的一个bug，防止在服务端未提供 `Retry-After` 头时出现无限或过长的重试等待。
   [查看详情](https://github.com/anomalyco/opencode/pull/33733)

8. **#33734 [OPEN] feat(tui): 在 TUI 会话导航时发布 `tui.session.select` 事件**
   @santiperone 确保在用户切换会话时，其他部分能够收到通知，使插件和外部系统能做出相应响应。
   [查看详情](https://github.com/anomalyco/opencode/pull/33734)

9. **#32676 [OPEN] fix(mcp): 配置 Figma OAuth 客户端**
   @rekram1-node 为 Figma MCP 添加了内置的 OAuth 客户端ID，简化了用户连接 Figma 的流程。
   [查看详情](https://github.com/anomalyco/opencode/pull/32676)

10. **#33554 [OPEN] fix: Home 和 End 键不工作**
    @carolitascl 修复了 Home/End 键在 TUI 中无法移动光标的问题，这是一个直观的编辑器体验修复。
    [查看详情](https://github.com/anomalyco/opencode/pull/33554)

## 功能需求趋势

根据近期 Issues 分析，社区最关注的功能方向如下：

1.  **MCP 协议深度集成与稳定性：** 社区对 MCP 的支持充满热情，但大量 Issue 集中在 OAuth 认证、配置、作用域、重连和资源管理上。这表明 MCP 功能虽然强大，但当前的实现还不够成熟或文档不足。
2.  **Project/工作区级别配置：** 开发者强烈要求支持 `opencode.local.json` 等本地配置，以更好地与团队共享的 `opencode.json` 分离，体现了对灵活配置管理的需求。
3.  **AI Agent 行为可靠性：** 大量 Issue 反馈 Agent “不遵循指令”，无法正确使用工具或分析代码库。这表明社区期望 Agent 能更智能、更稳定地理解上下文，超越简单的对话模式。
4.  **TUI 快捷键与终端兼容性：** Linux 用户对 Ctrl+Z 等终端标准快捷键的冲突问题反应强烈，显示了在不同操作系统下保持一致的用户体验的重要性。

## 开发者关注点

1.  **模型服务稳定性：** 付费用户反馈的 Qwen3.7 模型服务不稳定，尤其是超时问题，是目前体验上的一个重大痛点，可能导致用户流失。
2.  **TUI 崩溃与稳定性：** v1.17.00 的崩溃问题、各种段错误以及 `Effect.tryPromise` 错误，表明新版本的稳定性和兼容性测试仍需加强。
3.  **升级兼容性：** 版本升级导致数据库错误（`no such column: name`）和命令无法识别的问题，影响了用户的升级意愿和信任度。平滑升级是关键。
4.  **开源与隐私：** 用户对会话标题的计算方式引发的隐私担忧，表明社区的参与者对数据安全有很高的要求，任何非本地的数据处理都需要明确告知用户。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

好的，作为专注于 AI 开发工具的技术分析师，我已根据您提供的 GitHub 数据，为您生成了 2026-06-25 的 Pi 社区动态日报。

---

## Pi 社区动态日报 | 2026-06-25

### 今日速览

今日 Pi 社区动态活跃，焦点集中在 **连接稳定性** 与 **多 provider 兼容性** 上。OpenAI Codex (#4945) 和 Anthropic (#5291) 的 `Working…` 卡死问题依旧是社区痛点，同时新 provider 的支持请求（如 Amazon Bedrock Mantle、Charm Hyper）和包管理依赖冲突 (#5653) 的讨论热度不减。

### 版本发布

无

### 社区热点 Issues

以下挑选 10 个最值得关注的 Issue，覆盖了 bug、功能请求和安全报告：

1.  **[#4945] [inprogress] openai-codex Connection Reliability Issues** (评论: 69, 👍: 30)
    - **重要性**: **社区最高热度**。OpenAI Codex 连接不可靠，频繁导致 TUI 卡在 `Working…` 状态，影响核心使用体验。社区正在积极跟进。
    - **[链接](https://github.com/earendil-works/pi/issues/4945)**

2.  **[#3357] [OPEN] Official local LLM provider extension** (评论: 28, 👍: 37)
    - **重要性**: **最受欢迎的功能请求**。社区强烈希望官方支持本地 LLM 提供商（如 llama.cpp、Ollama），以提供动态模型列表获取功能，降低使用门槛。
    - **[链接](https://github.com/earendil-works/pi/issues/3357)**

3.  **[#5653] [inprogress, to-discuss] Move off Shrinkwrap** (评论: 16, 👍: 0)
    - **重要性**: **架构级 Bug**。由于依赖打包工具 `Shrinkwrap` 的问题，导致同一模块 (`pi-ai`) 被重复安装，API provider 注册表出现隔离，引发难以排查的 bug。社区正在讨论迁移方案。
    - **[链接](https://github.com/earendil-works/pi/issues/5653)**

4.  **[#5363] [OPEN] Add amazon-bedrock-mantle provider for OpenAI-compatible models** (评论: 14, 👍: 4)
    - **重要性**: **重要功能请求**。用户要求增加对 Amazon Bedrock Mantle 服务的 OpenAI 兼容 API 支持，以接入 GPT 5.5 等新模型。已有相关 PR (#5509) 提交。
    - **[链接](https://github.com/earendil-works/pi/issues/5363)**

5.  **[#5291] [CLOSED] [bug] Sessions hang on “working” when used with Anthropic subscription** (评论: 7, 👍: 2)
    - **重要性**: **与#4945 同类型问题**。Anthropic 企业版用户也遭遇了同样的 `Working…` 卡死问题，表明此问题可能具有跨 provider 的普遍性，而非 OpenAI 独有。
    - **[链接](https://github.com/earendil-works/pi/issues/5291)**

6.  **[#6038] [CLOSED] [bug, no-action] [tui] hangs in termux when switch landscape/portraits screen** (评论: 4, 👍: 0)
    - **重要性**: **特定平台 Bug**。在 Termux（Android 终端模拟器）中切换屏幕方向会导致 TUI 卡死，影响移动端使用体验。
    - **[链接](https://github.com/earendil-works/pi/issues/6038)**

7.  **[#6002] [OPEN] [bug] `SessionManager.open()` silently truncates non-session files** (评论: 2, 👍: 0)
    - **重要性**: **数据安全 Bug**。`SessionManager.open()` 方法会静默截断非会话文件，如在文件上误用此命令，可能导致数据永久丢失，风险较高。
    - **[链接](https://github.com/earendil-works/pi/issues/6002)**

8.  **[#5886] [OPEN] [pkg:agent, pkg:coding-agent] AgentSession settlement/continuation and assistant-tail lifecycle bugs** (评论: 2, 👍: 2)
    - **重要性**: **核心 Agent 逻辑 Bug**。这是一个汇总 Issue，描述了 Agent 生命周期管理中的一系列 Bug，尤其是在续传会话时可能出现状态不一致问题，对高级用户影响较大。
    - **[链接](https://github.com/earendil-works/pi/issues/5886)**

9.  **[#6050] [CLOSED] [untriaged] TUI full redraw clears terminal scrollback during active rendering** (评论: 2, 👍: 0)
    - **重要性**: **UI/UX Bug**。TUI 渲染时全屏重绘会导致终端回滚记录被清除，影响用户查阅历史输出，属于用户体验问题。
    - **[链接](https://github.com/earendil-works/pi/issues/6050)**

10. **[#6052] [CLOSED] [package-report, untriaged] Any Flag for @hypabolic/pi-hypa?** (评论: 1, 👍: 0)
    - **重要性**: **安全相关**。一个下载量高达 20.3 万/月的包 `@hypabolic/pi-hypa` 被举报存在恶意行为，社区环境安全是根本。
    - **[链接](https://github.com/earendil-works/pi/issues/6052)**

### 重要 PR 进展

以下挑选 10 个重要的 PR，涵盖了新特性、Bug 修复和性能优化：

1.  **[#5509] [OPEN] feat: Add Amazon Bedrock Mantle OpenAI Responses provider**
    - **功能**: 增加对 Amazon Bedrock Mantle 服务的 OpenAI 兼容 API 支持，支持 GPT 5.5 和 5.4 模型。
    - **[链接](https://github.com/earendil-works/pi/pull/5509)**

2.  **[#6051] [CLOSED] fix(ai): recover from hung streams and retry unmodeled Bedrock errors**
    - **修复**: 针对 Bedrock 和 Anthropic 连接，增加了空闲超时和连接超时机制，并优化了错误重试逻辑，直接回应了社区关心的 `Working…` 卡死问题。
    - **[链接](https://github.com/earendil-works/pi/pull/6051)**

3.  **[#6054] [CLOSED] feat(agent,coding-agent): add runParallelAgentTasks + parallel batching system prompt guideline**
    - **功能**: 新增 `runParallelAgentTasks` 工具，允许 Agent 并行执行独立子任务，提升复杂任务处理效率。
    - **[链接](https://github.com/earendil-works/pi/pull/6054)**

4.  **[#6018] [CLOSED] feature(coding-agent): show context estimates in session tree**
    - **功能**: 在会话树中显示上下文用量估算，帮助开发者快速识别资源消耗大的会话，便于优化。
    - **[链接](https://github.com/earendil-works/pi/pull/6018)**

5.  **[#6004] [CLOSED] feat: Normalize modern Microsoft Foundry Responses API endpoints**
    - **修复/功能**: 修复了 Pi 无法识别新版 Microsoft Foundry API 端点的问题，提高了与 Azure 平台的兼容性。
    - **[链接](https://github.com/earendil-works/pi/pull/6004)**

6.  **[#6048] [CLOSED] fix(coding-agent): show resources before messages when resuming session**
    - **修复**: 修复了续传会话时，加载的资源（如 Context、Skills）显示在消息之后的问题，优化了 UI 布局。
    - **[链接](https://github.com/earendil-works/pi/pull/6048)**

7.  **[#6030] [CLOSED] fix(coding-agent): print benchmark timings after TUI stop**
    - **修复**: 修正了性能测试计时在 TUI 停止后无法打印的问题，提升了调试和性能分析体验。
    - **[链接](https://github.com/earendil-works/pi/pull/6030)**

8.  **[#6032] [CLOSED] fix(ai): pass custom fetch to openai clients**
    - **修复**: 允许 OpenAI 适配器使用自定义的 `fetch` 实现，增强了代理和网络配置的灵活性。
    - **[链接](https://github.com/earendil-works/pi/pull/6032)**

9.  **[#6035] [CLOSED] fix(coding-agent): use log out copy in auth flow**
    - **修复**: 优化了认证流程中的文案，将 `logout` 改为 `log out`，提升了用户体验。
    - **[链接](https://github.com/earendil-works/pi/pull/6035)**

10. **[#5268] [CLOSED] fix(tui): render the hardware cursor by default so the prompt cursor hollows on blur**
    - **修复**: 修复了窗口失焦时光标状态不变的问题，现在窗口失去焦点时光标会变为空心，符合用户预期。
    - **[链接](https://github.com/earendil-works/pi/pull/5268)**

### 功能需求趋势

从今日 Issues 中可以提炼出社区最关注的三个功能方向：

1.  **Provider 兼容性与稳定性**:
    - **趋势**: 用户不仅要求支持更多的 LLM 提供商（如 Amazon Bedrock Mantle、Charm Hyper），更希望现有连接（如 OpenAI、Anthropic）的稳定性和可靠性得到根本性改善。
    - **代表 Issue**: #5363, #6042, #4945, #5291.

2.  **本地化与离线能力**:
    - **趋势**: 对集成本地 LLM 的呼声依然很高，用户希望摆脱对云服务的依赖，实现完全离线或私有化部署的智能助手。
    - **代表 Issue**: #3357.

3.  **Agent 与工具链的扩展性**:
    - **趋势**: 社区对 Agent 系统的能力有更高期待，包括并行任务执行 (#6054)、更好的上下文管理 (#6018)、以及对更多文件格式（如 BMP）的支持 (#6047)。这表明 Pi 正从简单的聊天工具向复杂的自动化平台演进。

### 开发者关注点

开发者反馈中的痛点或高频需求集中在以下方面：

-   **`Working…` 卡死问题**: 这是目前最核心的痛点，跨越多个 Provider，严重影响日常使用。开发者迫切需要一个通用的、健壮的流式连接恢复和重试机制。
-   **数据安全与误操作**: `SessionManager.open()` 静默截断文件的 Bug 引起了开发者对数据安全的担忧，希望增加更严格的校验和警告。
-   **插件生态安全**: `@hypabolic/pi-hypa` 被举报事件提醒社区，随着插件市场的繁荣，必须有可靠的安全审查机制来防止恶意软件传播。
-   **移动端体验**: 在 Termux 等移动终端上遇到的各种 Bug（如方向切换卡死、终端回滚问题）表明，Pi 在非桌面环境下的适配和测试仍需加强。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

好的，这是为您生成的 2026-06-25 Qwen Code 社区动态日报。

---

## Qwen Code 社区动态日报 | 2026-06-25

### 今日速览

今日社区动态活跃，主要围绕 **v0.19.2 系列版本的发布与修复** 展开。安全方面，一个可导致任意文件删除的路径穿越漏洞（`#5834`）被披露并已提交修复PR，值得关注。此外，社区对 **跨设备同步**、**CI/测试流程可靠性** 以及 **Agent 循环控制** 的讨论热度较高。

### 版本发布

过去24小时内，团队进行了密集的版本迭代，修复了发布流程中的问题，并引入了新特性。

- **[v0.19.2 & v0.19.2-preview.0 & v0.18.5-preview.0]**
  - **更新内容**：三个版本均包含一项关键改动：`feat(serve): Add remote LSP status route`。该功能由社区贡献者 `@doudouOUC` 提交，为远程工作场景提供了语言服务器协议（LSP）状态路由，是增强远程开发体验的重要补充。
  - **发布状态**：尽管有版本发布，但`#5831`报告了 `v0.19.2` 的发布工作流因 `publish` 作业失败而中断，这解释了为何同一时间出现多个预览版和补丁版。

- **[v0.19.1-nightly.20260624.a234860a4]**
  - **更新内容**：每日构建版本，同样包含上述 LSP 状态路由功能。

**链接**:
- [v0.19.2 Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.2)
- [v0.19.1-nightly.20260624](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.1-nightly.20260624.a234860a4)

### 社区热点 Issues

1.  **[#5834] 源文件删除路径穿越漏洞 (P1/安全)**
    - **重要性**: **严重安全漏洞**。攻击者可构造恶意 `sourceSlug`（如 `../sessions`）逃逸到源码目录之外，实现任意文件删除。这是当天的最高优先级安全问题。
    - **社区反应**: 已由开发者 `@VectorPeak` 提交修复PR（`#5829`），响应迅速。
    - **链接**: [Issue #5834](https://github.com/QwenLM/qwen-code/issues/5834)

2.  **[#5837] Agent 最后响应被截断 (P2/UI)**
    - **重要性**: 影响核心使用体验。Agent 的回复在显示时被截断，用户无法看到完整输出，调试显示数据本身是完整的，问题出在UI渲染层。
    - **社区反应**: 报告者提供了截图和日志，便于复现。社区正在请求更多信息。
    - **链接**: [Issue #5837](https://github.com/QwenLM/qwen-code/issues/5837)

3.  **[#5836] 创建任务清单 (Todos) 应支持跨设备同步 (P2/功能需求)**
    - **重要性**: 反映了**多设备工作流**的强需求。当前 Todos/Memories/Plans 仅保存在本地，无法跨设备或与他人共享，严重限制了团队协作和移动办公。
    - **社区反应**: 帖子获得积极讨论，用户希望这类数据能持久化到项目内（如 `.qwen/todos`），受Git版本控制。
    - **链接**: [Issue #5836](https://github.com/QwenLM/qwen-code/issues/5836)

4.  **[#5819] 升级后自动切换高价模型并浪费 Token (P2/配置)**
    - **重要性**: **潜在的资损和信任问题**。用户报告升级后，配置文件中的模型ID被静默替换为更高单价（如从“Flash”变更为“Pro”），导致预期外高额费用。这对付费用户至关重要。
    - **社区反应**: 用户感到相当困惑和不满，问题有待官方确认和修复。
    - **链接**: [Issue #5819](https://github.com/QwenLM/qwen-code/issues/5819)

5.  **[#5219] CI: 集成测试未在PR阶段运行，导致回归仅在发布时暴露 (P2/CI)**
    - **重要性**: 工程流程核心痛点。E2E集成测试不运行在PR上，意味着很多破坏性变更在合并到主线后才被发现。这会大大增加发布风险和修复成本。
    - **社区反应**: 多位开发者（包括 `@yiliang114`）持续跟进此问题，已提出多项优化建议。
    - **链接**: [Issue #5219](https://github.com/QwenLM/qwen-code/issues/5219)

6.  **[#5838] 允许用户调整 Agent 执行命令的超时时间 (P2/功能需求)**
    - **重要性**: 提升 Agent 功能的健壮性。用户在执行长时间任务或复杂脚本时，默认超时时间可能不够用，导致任务失败。可配置的超时是Agent功能成熟化的标志。
    - **社区反应**: 报告者附带了截图，需求明确，获得社区支持。
    - **链接**: [Issue #5838](https://github.com/QwenLM/qwen-code/issues/5838)

7.  **[#5800] CLI: 终端回显的最后一行被覆盖 (P2/UI)**
    - **重要性**: 影响终端UI的基本可用性。当回复内容超长时，最后一行内容会莫名消失，严重割裂阅读体验。
    - **社区反应**: 该问题已被确认为上游依赖（Ink）的bug，并欢迎社区贡献修复。
    - **链接**: [Issue #5800](https://github.com/QwenLM/qwen-code/issues/5800)

8.  **[#5823] `/loop` 定时任务无感知运行，用户无法管理 (P2/功能/自动化)**
    - **重要性**: **安全问题与功能设计的矛盾**。用户发现之前的测试`/loop`任务仍在后台静默执行，且无法查看或停止，导致每次新会话都自动开始工作。这既是功能缺失（管理界面），也是潜在的安全风险。
    - **社区反应**: 报告者描述了令人困扰的体验，这暴露了自动化后台任务缺乏用户控制的现状。
    - **链接**: [Issue #5823](https://github.com/QwenLM/qwen-code/issues/5823)

9.  **[#5736] 近期更新后频繁出现全量提示重处理 (性能)**
    - **重要性**: 性能回归。用户反映在继续对话时，模型更频繁地执行完整的提示（prompt）重处理，而非增量处理。这会显著增加响应延迟和本地资源消耗。
    - **社区反应**: 报告者提供了详细的日志片段，有助于定位问题。
    - **链接**: [Issue #5736](https://github.com/QwenLM/qwen-code/issues/5736)

10. **[#5798] 多Agent运行时滚动回看失效并屏幕闪烁 (P2/UI)**
    - **重要性**: 影响多Agent协作场景的体验。在后台Agent运行时，Terminal无法向上滚动查看历史输出，导致用户无法审计Agent行为。
    - **社区反应**: 该问题已被关闭，并已通过 PR `#5799` 修复。
    - **链接**: [Issue #5798](https://github.com/QwenLM/qwen-code/issues/5798)

### 重要 PR 进展

1.  **[#5727] 文档审计: 补充 Vertex AI 认证、缺失命令等 (Open)**
    - **功能**: 大规模文档更新，修复了与代码脱节的6个文档文件，特别是补全了 `vertex-ai` 认证方式，对使用Google Cloud的用户至关重要。
    - **作者**: `@DragonnZhang`
    - **链接**: [PR #5727](https://github.com/QwenLM/qwen-code/pull/5727)

2.  **[#5808] 修复: 用户中止 `/loop` 后取消待处理的唤醒任务 (Open)**
    - **功能**: 修复 `#5806`。当用户按 `Esc` 中止循环任务时，现在会同时取消后续的定时唤醒，避免循环在后台静默恢复。
    - **作者**: `@qqqys`
    - **链接**: [PR #5808](https://github.com/QwenLM/qwen-code/pull/5808)

3.  **[#5799] 修复: 防止多Agent运行时滚动回看失效和闪烁 (Merged)**
    - **功能**: 修复 `#5798`。通过使UI布局与后台Agent面板的动态变化保持同步，解决了终端滚动失效和闪烁问题。
    - **作者**: `@chiga0`
    - **链接**: [PR #5799](https://github.com/QwenLM/qwen-code/pull/5799)

4.  **[#5829] 修复(桌面端): 拒绝不安全的源文件路径 `slug` (Open)**
    - **功能**: 修复 `#5834` 路径穿越漏洞。在处理删除请求前，对 `sourceSlug` 进行验证，拒绝包含路径遍历字符（如`..`）的非法输入。
    - **作者**: `@VectorPeak`
    - **链接**: [PR #5829](https://github.com/QwenLM/qwen-code/pull/5829)

5.  **[#5827] 修复: 为 OpenAI 流式请求添加流式超时 (Merged)**
    - **功能**: 修复了当LLM厂商接受请求后，在流式返回数据过程中因网络或服务问题卡住无响应的问题。增加了对“首个token之后”的数据流超时控制。
    - **作者**: `@doudouOUC`
    - **链接**: [PR #5827](https://github.com/QwenLM/qwen-code/pull/5827)

6.  **[#5616] 功能: 自动生成的技能在持久化前需用户确认 (Open)**
    - **功能**: 解决 `#5263`。AI在对话中自动生成的技能（Skills）将不会直接保存到技能库，而是先展示给用户审核，避免不当或一次性技能污染技能库。
    - **作者**: `@LaZzyMan`
    - **链接**: [PR #5616](https://github.com/QwenLM/qwen-code/pull/5616)

7.  **[#5661] 功能: 按类型分区展示工具调用——折叠读/搜索，单独显示修改 (Open)**
    - **功能**: 重构TUI中的工具调用显示逻辑。将“读取/搜索”类工具折叠成摘要行，而“写入/修改”类工具则单独、清晰地展示，极大提升了Agent操作的可见性和可审计性。
    - **作者**: `@chiga0`
    - **链接**: [PR #5661](https://github.com/QwenLM/qwen-code/pull/5661)

8.  **[#5835] 修复: 重新应用 Provider 安装计划时保留已选择的模型 (Open)**
    - **功能**: 修复了重新认证或重连Provider时，模型选择被意外重置的bug。现在会保留用户之前手动选择的模型。
    - **作者**: `@lcheng321`
    - **链接**: [PR #5835](https://github.com/QwenLM/qwen-code/pull/5835)

9.  **[#5825] 测试: 添加 Daemon 启动基准测试 (Open)**
    - **功能**: 新增了一个自动化基准测试，用于监控Daemon进程的启动时间。这是性能回归防护的重要一步。
    - **作者**: `@doudouOUC`
    - **链接**: [PR #5825](https://github.com/QwenLM/qwen-code/pull/5825)

10. **[#5828] 功能: 添加内置的扩展创建技能 (Open)**
    - **功能**: 提供了一个新的内置 `extension-creator` 技能，可以引导用户通过对话方式脚手架、自定义和测试Qwen Code扩展，降低了扩展开发的门槛。
    - **作者**: `@callmeYe`
    - **链接**: [PR #5828](https://github.com/QwenLM/qwen-code/pull/5828)

### 功能需求趋势

1.  **跨设备与团队协作**: 呼声最高。用户强烈期望项目状态（Todos, Memories, Plans）能保存到项目中（纳入Git版本控制），以实现跨设备同步和团队共享。代表Issue: `#5836`。

2.  **CI/CD与测试可靠性**: 社区开发者（特别是 `@yiliang114`）持续致力于工程流程改进。核心痛点是集成测试不在PR阶段运行，导致回归问题隐蔽性强，修复成本高。代表Issue: `#5219`, `#5665`, `#4805`。

3.  **Agent控制与可观测性**: 用户希望获得更多对Agent的控制权，包括：配置命令执行超时 (`#5838`)、管理/查看后台定时任务 (`#5823`)、以及在多Agent运行时有更好的UI体验 (`#5798`)。

4.  **安全性与资损防护**: 两个关键方向: (1) 防止因文件操作漏洞（如路径穿越）导致的意外删除 (`#5834`); (2) 防止配置被静默修改导致API调用成本激增 (`#5819`)。

5.  **语音输入能力增强**: 社区关注点不再局限于基础功能，而是要求更精细的控制，如允许用户自定义ASR（语音识别）的关键词列表，以提高特定领域术语的识别率 (`#5816`)。

### 开发者关注点

-   **配置管理的稳定性**: 用户（`#5819`）对升级后配置被静默篡改感到不安，期望项目能有稳定的升级机制和透明的资源消耗提示。
-   **UI/UX的一致性**: `#5800`（回复截断）、`#5798`（滚动失效）和 `#5787`（要求统一图标样式）表明，用户对TUI渲染的稳定性和一致性要求很高，任何微小的UI瑕疵都会被迅速反馈。
-   **本地模型的性能**: `#5736` 提到的“全量提示重处理”问题表明，部分用户正将Qwen Code与本地模型（如llama.cpp）结合使用，对性能敏感，对Token浪费敏感。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

好的，作为专注于 AI 开发工具的技术分析师，我将根据您提供的 GitHub 数据，为您呈现 2026-06-25 的 DeepSeek TUI（现为 CodeWhale）社区动态日报。

---

# CodeWhale 社区动态日报 | 2026-06-25

## 📰 今日速览

今日项目（现正式更名为 **CodeWhale**）的核心动向为 **v0.8.65** 版本的密集收尾与稳定性加固。社区合并了一系列关键 PR，包括模型参考数据库、MCP 工具发现、Provider 实时目录和 UI 仪表板。同时，关于 CodeWhale 代理行为“过度参与”和审批流程“过于繁琐”的 Bug 报告，成为开发者反馈的热点，反映了社区对代理自主性与用户控制权之间平衡的关切。

## 🚀 版本发布

今日无新版本发布。项目处于 `v0.8.65` 版本的最终冲刺阶段。

## 🔥 社区热点 Issues

以下为过去24小时内最受关注的10个 Issue：

1.  **[[BUG] CodeWhale 过度参与修改，偏离用户意图](https://github.com/Hmbown/CodeWhale/issues/3275)**
    - **重要性: 高。** 这是关于代理行为失控的严重回归(Bug)，是社区对 AI 自主权担忧的典型代表。作者描述 CodeWhale 陷入自我问答和执行的循环，偏离了用户的原始请求。
    - **社区反应:** 有 12 条评论，讨论热烈。这很可能成为一个需要紧急修复的 P0 级 Bug。

2.  **[[BUG] v0.8.66: 审批模态框取消与审核语义](https://github.com/Hmbown/CodeWhale/issues/3466)**
    - **重要性: 高。** 用户反馈更新到 v0.8.64 后，每个操作都需要“破坏性审批”，体验急剧下降，希望恢复到不需要确认的原始逻辑。
    - **社区反应:** 4 条评论，表明在安全与效率之间，用户倾向于后者。这与 #3275 的问题形成了鲜明对比：一个嫌太主动，一个嫌太被动。

3.  **[[Enhancement] 需要 Fleet 模型类、自动负载选择和语义路由角色](https://github.com/Hmbown/CodeWhale/issues/3205)**
    - **重要性: 高。** 这是 v0.8.65 的核心功能之一，旨在为 TUI、CLI、子代理和 Fleet Worker 提供统一的模型/负载选择器。社区期待其“自动模式”能智能解析工作负载。
    - **社区反应:** 10 条评论，涉及架构设计的深入讨论。

4.  **[[Enhancement] v0.8.69: 建议接入 agentclientprotocol 注册表](https://github.com/Hmbown/CodeWhale/issues/3192)**
    - **重要性: 中。** 社区成员建议将 CodeWhale 注册到通用的 AI Agent 协议注册表中，以便于其他 IDE (如 Zed) 发现和安装。这反映了社区对项目生态集成和标准化接入的期待。
    - **社区反应:** 7 条评论，正向反馈。

5.  **[[BUG] MCP 重复服务器实例生命周期与诊断覆盖](https://github.com/Hmbown/CodeWhale/issues/3461)**
    - **重要性: 高。** 一个关键的稳定性 Bug，单个 `mcp.json` 配置会导致两个 MCP 服务器进程被启动，浪费内存并可能导致管道冲突。此问题已在今日的 PR #3562 中修复。
    - **社区反应:** 8 条评论，问题定位精准。

6.  **[[Enhancement] 多模型兼容性、Provider 文档和自动 Fleet 负载选择](https://github.com/Hmbown/CodeWhale/issues/2300)**
    - **重要性: 高。** 一个长期跟踪的 Feature Request，是 v0.8.65 中 Provider/模型路由和 Fleet 负载自动选择功能的用户验收标准。今日的 PR #3563 实现了其中一部分。
    - **社区反应:** 7 条评论，包含用户原始需求和翻译摘要。

7.  **[[Enhancement] v0.8.65 EPIC: 提供者事实、模型事实、产品和路由分离](https://github.com/Hmbown/CodeWhale/issues/2608)**
    - **重要性: 极高。** 这是整个 v0.8.65 版本的架构核心 EPIC，旨在理清 Provider、模型和路由之间的关系。几乎所有最近的 PR 都与此相关。
    - **社区反应:** 8 条评论，是架构师和贡献者的必读项。

8.  **[[Enhancement] 提供者拥有的实时目录和无密钥模型缓存](https://github.com/Hmbown/CodeWhale/issues/3385)**
    - **重要性: 高。** 引入 Provider 实时模型列表和无需存储密钥的缓存机制，提升可用性和安全性。今日已通过 PR #3556 合并。
    - **社区反应:** 6 条评论。

9.  **[[Enhancement] 接入智谱 GLM-5.2 作为 Provider 路由](https://github.com/Hmbown/CodeWhale/issues/3439)**
    - **重要性: 中。** 社区开发者贡献的中文模型接入请求，希望支持 GLM-5.2 以满足特定中文场景（长文档理解、中文创作）的需求。
    - **社区反应:** 6 条评论，积极讨论了 API 对接方式。

10. **[[Enhancement] v0.8.65: 侧边栏会话面板，支持自动恢复和浏览](https://github.com/Hmbown/CodeWhale/issues/2934)**
    - **重要性: 中。** 一个提升用户体验的 Feature Request，希望有一个持久的侧边栏来管理所有会话，而不是仅依赖快捷键弹窗。反映了社区对更友好 UI 的期待。
    - **社区反应:** 3 条评论，问题描述清晰。

## 🚧 重要 PR 进展

以下为过去24小时内最值得关注的10个 PR：

1.  **[#3563: v0.8.65: 事实模型参考数据库 + /modeldb 浏览](https://github.com/Hmbown/CodeWhale/pull/3563)**
    - **功能:** 为每个模型建立包含上下文窗口、价格等属性的事实数据库，并通过 `/modeldb` 命令提供浏览功能。这是 #3205 和 #2300 的最终交付部分。
    - **状态:** 已合并。

2.  **[#3562: v0.8.65: 被动 MCP 工具发现 + 自定义 Provider 行](https://github.com/Hmbown/CodeWhale/pull/3562)**
    - **功能:** 修复了 #3461 中的 MCP 重复进程 Bug，并支持用户配置自定义 Provider 端点 (#1519)。
    - **状态:** 已合并。

3.  **[#3555: feat(tui): /provider 就绪仪表盘](https://github.com/Hmbown/CodeWhale/pull/3555)**
    - **功能:** 实现了一个 `/provider` 仪表盘，清晰展示每个 Provider 的能力、元数据（如推理支持）和状态。
    - **状态:** 已合并，关闭了 #3083。

4.  **[#3556: feat(client): Provider 实时 /models 获取 + 无密钥缓存刷新](https://github.com/Hmbown/CodeWhale/pull/3556)**
    - **功能:** 实现了 Provider 实时模型列表的抓取和缓存逻辑，是 #3385 的关键实施。无需存储 API 密钥即可获取模型目录。
    - **状态:** 已合并。

5.  **[#3557: feat(tui): /config preset calm](https://github.com/Hmbown/CodeWhale/pull/3557)**
    - **功能:** 提供了一个“优美/平静”的转录显示预设，将与调试相关的信息分开，提升了普通用户的视觉体验。
    - **状态:** 已合并，推进了 #3478。

6.  **[#3549: feat(i18n): 将中文翻译提取到独立的 JSON 文件](https://github.com/Hmbown/CodeWhale/pull/3549)**
    - **功能:** 将硬编码的简体中文翻译从代码中剥离到 `zh-Hans.json` 文件，迈出了国际化重构的第一步 (#3537)。
    - **状态:** 已合并。由社区开发者 @cy2311 贡献。

7.  **[#3554: test(tui): #2574 故障转移接受度测试 + 本地/私有防护栏](https://github.com/Hmbown/CodeWhale/pull/3554)**
    - **功能:** 为 Provider 故障转移功能添加了完整的接受度测试，并增加了对本地/私有路由的防护，防止意外切换到外部 Provider。
    - **状态:** 已合并，关闭了 #2574。

8.  **[#3553: fix(tui): 在 YOLO 模式下抑制类型化 Ask-Rules 提示](https://github.com/Hmbown/CodeWhale/pull/3553)**
    - **功能:** 修复了在“YOLO”模式下，即使已授予完全工具访问权限，仍会弹出审批模态框的 Bug。
    - **状态:** 已合并，修复了 #3386。

9.  **[#3547: feat(tui): 从写入审批中保存精确文件 Ask-Rules](https://github.com/Hmbown/CodeWhale/pull/3547)**
    - **功能:** 扩展了审批系统的“保存规则”功能，现在写入和编辑文件的操作也可以一键保存为 Ask-Rule，方便下次匹配。
    - **状态:** 已合并。由社区开发者 @greyfreedom 贡献。

10. **[#3552: docs: 将过时的 0.8.64 版本引用更新为 0.8.65](https://github.com/Hmbown/CodeWhale/pull/3552)**
    - **功能:** 更新 README 等文档中的版本号，使其与当前发布状态一致。
    - **状态:** 已合并，关闭了 #3087 的一部分。

## 📊 功能需求趋势

从近期 Issues 中，社区最关注的功能方向如下：

1.  **多 Provider 与模型路由（高优先级）:** 这是当前版本的重中之重。社区不仅要求支持更多模型（如 GLM-5.2），更关注在多个 Provider 和模型之间进行智能、原子化的路由和故障切换。
2.  **Agent 行为可控性（高优先级）:** 代理的自主范围是当前最大的矛盾点。用户既希望代理能主动完成任务（如 YOLO 模式），又担心其过度执行或偏离意图。如何提供精细的权限控制（从“不审批”到“全审批”的滑动条）是核心需求。
3.  **Fleet 功能（中优先级）:** 作为 CodeWhale 的未来形态，Fleet（多代理协同）的配置、负载分配和角色定义受到核心贡献者和资深用户的关注。
4.  **IDE 与第三方工具集成（中优先级）:** 如接入 Agent Client Protocol 注册表、提供会话侧边栏等，表明社区希望 CodeWhale 能更好地融入现有的开发工作流。
5.  **国际化（i18n）（低优先级）:** 虽然目前只在处理中文，但将字符串外置化的重构为未来支持多语言打下了基础。

## 💡 开发者关注点

- **稳定性与资源占用:** 开发者对 Bug 极其敏感，特别是会导致进程重复创建或资源浪费的问题（如 #3275, #3461）。
- **用户体验的“摩擦点”:** 审批流程的繁简是用户体验的痛点。开发者倾向于更流畅的工作流，但也不希望牺牲安全性，这需要精细化的策略而非一刀切的“开”或“关”。
- **配置与透明性:** 开发者希望了解系统运行的具体细节（如 Provider 就绪状态、模型事实），这解释了 `/provider` 仪表盘和 `/modeldb` 等功能受欢迎的原因。
- **开发者友好:** 贡献者（如 @cy2311, @greyfreedom）在提出功能时，会遵循项目的架构原则，体现了社区的良好生态。项目维护者也积极将贡献者成果合并（如 #3559, #3547），形成正向循环。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*