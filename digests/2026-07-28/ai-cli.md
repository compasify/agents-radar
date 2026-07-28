# AI CLI 工具社区动态日报 2026-07-28

> 生成时间: 2026-07-28 01:25 UTC | 覆盖工具: 10 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Grok Build](https://github.com/xai-org/grok-build)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

好的，作为一名专注于 AI 开发工具生态的资深技术分析师，我已仔细审阅了您提供的 2026-07-28 各主流 AI CLI 工具的社区动态摘要。现基于这些数据，呈现一份横向对比分析报告。

---

## AI CLI 工具生态横向对比分析报告 (2026-07-28)

### 1. 生态全景

当前 AI CLI 工具市场呈现出 **“百家争鸣，稳中求进”** 的态势。一方面，以 **Claude Code** 和 **OpenAI Codex** 为代表的成熟领先者，正饱受用户规模扩大带来的稳定性与计费体系缺陷的困扰，其社区讨论重心从“能用”转向“用好”。另一方面，以 **Gemini CLI**、**Qwen Code** 和 **DeepSeek TUI** 为代表的新兴力量，在 Agent 架构、TUI 体验等细分领域展开了积极的技术探索与创新。整体来看，**“Agent 行为的可预测性”** 与 **“成本控制的透明度”** 正成为所有工具共同面临的核心挑战，而 **“跨平台兼容性”** 和 **“模型生态的开放性”** 则是决定工具能否占据开发者心智的关键战场。

### 2. 各工具活跃度对比

| 工具名称 | 社区活跃 Issue 数¹ | 重要 PR 数² | 版本发布 (Release) | 开发者关注焦点 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 10 | 6 | 0 | 计费缺陷、会话管理、系统级Bug |
| **OpenAI Codex** | 10 | 10 | 2 (Alpha) | 核心功能回归(/undo)、重置机制、Windows稳定性 |
| **Gemini CLI** | 10 | 10 | 1 (夜间版) | Agent系统稳定性、安全与认证、Shell命令注入 |
| **GitHub Copilot CLI** | 10 | 10 | 1 (v1.0.76-0) | 计划模式回归、子进程泄漏、Autopilot体验 |
| **Kimi Code CLI** | 4 | 4 | 0 | Windows编码崩溃、VSCode扩展缺陷、钩子系统 |
| **OpenCode** | 10 | 10 | 2 (v1.18.6, v1.18.7) | 模型行为异常(重复/死循环)、UI渲染崩溃、配置兼容性 |
| **Pi** | 10 | 10 | 0 | 终端滚动Bug、扩展API赋能、模型兼容性细节 |
| **Qwen Code** | 10 | 10 | 2 (预发布) | 长上下文连接稳定性、子代理挂起、CI/CD稳定性 |
| **DeepSeek TUI** | 10 | 10 | 0 (v0.9.2冲刺中) | TUI交互细节、计费系统准确性、用户体验引导 |
| **Grok Build** | 0 | 0 | 0 | - (无活动) |

> ¹：基于日报中“Top 10”或当日更新的全部 Issue 进行统计。  
> ²：基于日报中“重要 PR 进展”部分进行统计。

**数据总结**：  
- **OpenAI Codex、GitHub Copilot CLI、OpenCode 和 Pi** 的 PR 和 Release 活动最为密集，表明其核心团队响应与迭代速度最快。  
- **Claude Code** 和 **OpenCode** 的 Bug 类 Issue 热度极高，反映出用户规模扩大后的稳定性阵痛。  
- **Grok Build** 当日无活动，可能处于早期开发或沉寂期。

### 3. 共同关注的功能方向

- **会话管理与连续性 (Claude Code, OpenCode, Pi, DeepSeek TUI, Qwen Code)**  
  **诉求**：跨设备/终端无缝接续对话；会话历史与项目路径解耦（避免重命名丢失）；持久化与自动恢复。  
  **趋势**：开发者期望 AI 助手的工作流具备与 IDE 同等级别的项目性、持久性。

- **Agent 行为的可预测性与可靠性 (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, OpenCode, Qwen Code)**  
  **诉求**：修复 Agent “假死”、报告虚假成功、陷入工具调用死循环、输出重复或无关内容等非预期行为。  
  **趋势**：社区核心痛点。用户对 Agent 的信任度正从“惊奇”转向“要求可靠”，**“不捣乱”比“更聪明”更重要**。

- **成本计费透明化 (Claude Code, OpenAI Codex, DeepSeek TUI, OpenCode, Qwen Code)**  
  **诉求**：修复计费BUG（如Max计划用户被额外扣费）；提供统一的用量追踪API；支持更细粒度的成本计算。  
  **趋势**：随着工具深入生产环境，成本控制成为企业级采纳的关键前提。**静默的、不可预期的费用消耗是不可接受的**。

- **跨平台兼容性（尤其是 Windows） (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode)**  
  **诉求**：修复Windows ARM64兼容性、GPU崩溃、编码问题、沙盒失败等问题。  
  **趋势**：Windows 是开发者工具箱中不可忽视的大本营。对Windows的深度支持是工具走向大众化的必由之路。

- **扩展/集成生态 (Claude Code (MCP), Gemini CLI (MCP), OpenCode (MCP/插件), Pi (扩展), Qwen Code (外部上下文)) **  
  **诉求**：通用性协议（如MCP）的兼容性、插件/扩展的热重载、外部知识库与记忆的集成。  
  **趋势**：工具竞争已从单一模型能力，升级为**平台生态之争**。谁能提供更开放、更易集成的底座，谁就能在复杂的企业场景中胜出。

### 4. 差异化定位分析

| 工具名称 | 核心定位 | 差异化策略 | 技术路线特点 | 目标用户画像 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | **全能型集成开发助手** | 深度绑定Anthropic模型生态（如Fable 5），构建最“懂”代码的Agent。 | 强调用户行为洞察、工作流编排，但生态复杂导致Bug较多。 | 追求极致AI代码生成体验、愿意接受试验性功能的高级开发者。 |
| **OpenAI Codex** | **IDE深度集成专家** | 深度绑定VS Code，提供最流畅的Diff、评论等IDE内体验。 | 强调与编辑器的融合，同时通过扩展（MCP）连接外部工具。 | 微软技术栈（VS Code、.NET）的忠实用户、企业级客户。 |
| **Gemini CLI** | **安全可靠的Agent平台** | 强调Agent系统的鲁棒性与安全性（子代理状态机、Shell沙箱）。 | 技术驱动，积极修复核心漏洞，探索AST感知工具等高级能力。 | 对系统安全、数据隐私有高要求的企业开发者、技术极客。 |
| **GitHub Copilot CLI** | **GitHub生态的终端延伸** | 深度集成GitHub与Copilot订阅，主打Autopilot模式。 | 社区贡献活跃，持续完善ACP和MCP协议，但成熟度不及Codex。 | 重度GitHub用户、偏好终端交互的开发者。 |
| **Kimi Code CLI** | **专注中文市场的轻量级工具** | 侧重解决中文用户（尤其Windows）的本地化问题。 | 快速响应社区Bug，积极补齐MCP兼容性，但功能相对精简。 | 中文开发者社区、对启动速度和基础功能有需求的用户。 |
| **OpenCode** | **开源的底层模型切换平台** | 以极高的自由度支持多种模型（DeepSeek, Kimi等），社区贡献驱动。 | 强大的插件系统，强调开发者自我定制的能力。 | 对模型无绑定、喜欢DIY、活跃参与开源的开发者。 |
| **Pi** | **极度灵活的多模型网关** | 将所有模型提供商抽象为统一的接口，提供高度可配置化。 | 关注模型兼容性细节（如参数映射、认证方式），扩展API深入。 | 希望在多个模型间自由切换、追求“去中心化”体验的开发者。 |
| **Qwen Code** | **擅长大上下文的技术先锋** | 围绕Qwen模型优势，聚焦长上下文、子代理等复杂任务场景。 | 积极探索企业级外部集成（MCP、记忆），社区讨论技术深度高。 | 需要处理超长代码库、复杂技术债的高级开发者和架构师。 |
| **DeepSeek TUI** | **极致TUI体验的探索者** | 在终端UI（TUI）上创新，致力于打造最快的文本交互体验。 | 对性能（如O(N²)渲染问题）和交互细节（如按键映射）极其敏感。 | 终端重度用户、追求极致效率和美学的技术专家。 |
| **Grok Build** | **（早期/沉寂）** | 无明显动态，尚处于概念验证或低活跃阶段。 | - | 观望中的早期尝鲜者。 |

### 5. 社区热度与成熟度

- **成熟度高，社区规模大，但稳定性阵痛显著**：**Claude Code**、**OpenAI Codex** 和 **GitHub Copilot CLI**。它们拥有庞大的用户基数，因此Bug反馈量巨大，开发团队在Bug修复与功能推进间艰难平衡。社区讨论以解决问题和抱怨稳定性为主。
- **快速迭代期，社区技术交流活跃**：**OpenCode**、**Pi** 和 **DeepSeek TUI**。这些项目社区虽不及前者庞大，但用户专业度高，贡献者活跃，社区讨论围绕技术探索（如架构重构、新协议支持、TUI优化）展开，呈现出极强的生命力。
- **处于稳定爬坡期，逐步完善生态**：**Gemini CLI** 和 **Qwen Code**。它们背靠强大的公司（Google、阿里），有稳定投入。社区规模在增长，讨论多集中在特定领域的技术深度（如Agent安全、长上下文）和功能补齐上。
- **新兴力量，本土社区导向**：**Kimi Code CLI**。活跃度受限于用户规模，但聚焦解决国内用户痛点的策略清晰。
- **沉默期**：**Grok Build**。当日无更新，需观察后续变化。

### 6. 值得关注的趋势信号

1.  **从“追求模型能力”到“追求产品可预测性”**：社区对核心功能（如撤销、Agent恢复、重置）的回归和稳定性的呼声空前高涨。这标志着AI CLI工具正从 **“炫技阶段”** 迈入 **“生产力阶段”**，用户最核心的需求是 **“可靠”** 而不是 **“惊喜”**。

2.  **Agent系统的“可观测性”成为刚需**：多个工具的子代理行为（卡死、误报成功）引发高热度讨论。这预示着开发者不再满足于“黑盒”Agent，他们需要 **Agent执行轨迹（Trace）、调试与诊断工具、以及更细粒度的权限控制**。这是第三方Agent监控与分析平台的机会点。

3.  **成本透明度是“生产力工具”的门票**：计费系统缺陷导致的用户愤怒（Claude Code $704事件、Qwen Code静默重试）表明，一旦工具进入生产工作流，**可预测、可审计的成本是建立信任的基石**。不能提供清晰成本模型的工具将很难获得企业客户。

4.  **生态赛跑：MCP标准化 vs. 闭源壁垒**：Claude Code、Gemini CLI、OpenCode等加大MCP（模型上下文协议）投入，而OpenAI Codex通过深度绑定IDE构建壁垒。未来竞争将围绕 **“谁的生态系统集成更便捷、更丰富”** 展开。支持自定义插件、外部知识库、和不同模型提供商的能力将成为标配。

5.  **“可配置的分离架构”成为主流设计思想**：将**便携配置**（如`~/.claude`）与**本地状态**（如会话历史）分离，以支持版本控制和跨机器同步。这反映了AI工作流正变得日益复杂，用户需要将AI工具配置作为“项目资产”进行管理。

6.  **中国团队在TUI和特定场景的深度探索**：DeepSeek TUI 揭示了仍有团队在TUI交互细节上做极致探索，这表明在功能趋同的背景下，**差异化的用户体验**（如极速渲染、精细的交互控制）仍然是核心竞争力。同时，Qwen Code 对企业级外部上下文的讨论，也代表了中国公司对AI落地企业场景的独特思考。

**给技术决策者的建议**：
如果您是**个人开发者**且追求极致体验，可关注 **DeepSeek TUI** 和 **Pi**；如果您在**企业环境中**，对稳定性和安全有高要求，**Gemini CLI** 和 **OpenAI Codex** 的IDE集成生态是更稳妥的选择，但需做好预算规划。无论选择哪个工具，都应优先评估其对 **Agent行为可预测性、成本透明度和跨平台兼容性** 的承诺与实现程度。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

好的，作为一名专注于 Claude Code 生态的技术分析师，以下是基于 `anthropics/skills` 仓库截至 2026-07-28 的数据分析报告。

---

### Claude Code Skills 社区热点报告 (截至 2026-07-28)

#### 1. 热门 Skills 排行

根据 Pull Requests 的评论活跃度与关注度，以下是社区最关心的 5 个 Skills：

1.  **fix(skill-creator): run_eval.py always reports 0% recall**
    *   **功能:** 修复官方技能创建工具包（`skill-creator`）中的 `run_eval.py` 脚本。该脚本是自动评估和优化技能描述的核心组件，但由于其无法正确检测技能是否被触发，始终报告 0% 的召回率，导致技能优化过程完全失效。
    *   **社区热点:** 这是影响 Skill 开发者体验的**最严重问题**之一。社区成员（#556, #1169, #1323）多次独立复现该问题，导致整个技能优化循环（`run_loop.py`, `improve_description.py`）形同虚设。讨论集中在 Windows 兼容性、子进程管道读取、触发检测逻辑等根本原因。
    *   **状态:** Open
    *   **链接:** [PR #1298](https://github.com/anthropics/skills/pull/1298)

2.  **Add document-typography skill**
    *   **功能:** 为 AI 生成的文档添加排版质量控制，专门解决孤字（orphan）、寡行（widow）、编号错位等常见排版问题。
    *   **社区热点:** 社区普遍认可这是一个“刚需”技能。它触及了 AI 生成内容的普遍痛点——质量细节。该技能高度实用，能立竿见影地提升内容交付质量。
    *   **状态:** Open
    *   **链接:** [PR #514](https://github.com/anthropics/skills/pull/514)

3.  **fix(pdf): correct case-sensitive file references in SKILL.md**
    *   **功能:** 修复 PDF 技能中文件引用的大小写问题（`REFERENCE.md` → `reference.md`）。
    *   **社区热点:** 虽是小修小补，但其核心暴露了 Skill 开发中的一个基础问题：跨平台兼容性。该 PR 收到较多关注，反映了用户对官方 Skill 在 Linux/macOS 等大小写敏感文件系统上稳定运行的期望。
    *   **状态:** Open
    *   **链接:** [PR #538](https://github.com/anthropics/skills/pull/538)

4.  **Add ODT skill — OpenDocument text creation and template filling**
    *   **功能:** 新增对 OpenDocument 格式（.odt, .ods）的原生支持，包括创建、填充模板、读取和转换为 HTML。
    *   **社区热点:** 这标志着社区开始向办公自动化、跨平台文档生态进军。对 LibreOffice 等开源生态的支持，表明社区希望 Claude Code 能突破 Microsoft Office 的局限，覆盖更广泛的场景。
    *   **状态:** Open
    *   **链接:** [PR #486](https://github.com/anthropics/skills/pull/486)

5.  **fix(skill-creator): warn on unquoted description with YAML special characters**
    *   **功能:** 为 Skill 元数据（YAML frontmatter）中的 `description` 字段添加校验，警告用户使用未加引号的 YAML 特殊字符（如 `:`）。
    *   **社区热点:** 紧随 #1298，该问题同样直击 Skill 创建体验。YAML 解析失败会导致技能描述被截断或错误解析，是一个常见且隐蔽的陷阱。社区对此类提升开发者工具健壮性的改进表现出高度欢迎。
    *   **状态:** Open
    *   **链接:** [PR #539](https://github.com/anthropics/skills/pull/539)

#### 2. 社区需求趋势

从 Issues 的讨论热度来看，社区需求呈现出清晰的“**从能用到好用**”的趋势，具体方向如下：

*   **安全与治理 (Security & Governance):** 这是最强烈的呼声。`#492` 关于社区技能冒充官方技能的安全问题（43 条评论），以及 `#1175` 关于处理 SharePoint 文档时的安全与上下文窗口顾虑，表明企业级用户对权限、安全隔离和信任边界有极高要求。
*   **协作与共享 (Collaboration & Sharing):** `#228` 呼吁组织级技能共享功能（8个👍）。当前下载再上传的分享方式被认为效率低下，社区迫切需要一个技能市场或直接分享链接，以促进团队内部的经验复用。
*   **开发者工具可靠性 (Dev Tooling Reliability):** 以 `#556` (12条评论)和 `#202` 为代表的 Issues 直指 `skill-creator` 工具的 Bug 和使用体验问题。社区对开发工具本身的质量、稳定性和文档清晰度有非常高的期待，**开发者体验已成为生态发展的瓶颈**。
*   **特定领域技能 (Niche Domain Skills):** `#412` 提出的“agent-governance”技能未获合并，但 `#1329` 提出的“compact-memory”符号化记忆管理技能引发了讨论。这表明社区在寻求通用技能之外，开始探索**节省上下文窗口**、**提升提示工程效率**等更高级的元技能方向。

#### 3. 高潜力待合并 Skills

以下 PR 讨论度高、问题明确且修复方案清晰，有较大概率在近期被合并：

*   **[PR #1298] 修复 skill-creator 的 0% 召回率问题:** 这是**优先级最高**的补丁。它直接决定了所有其他技能能否被有效开发和优化。多个修复方案（#1099, #1050, #1323）都在解决同一个问题，其中 #1298 最为全面。
*   **[PR #514] document-typography 技能:** 因其解决的是视觉质量这一直接痛点，且功能独立，一旦测试通过和反馈收敛，被合并的概率很高。
*   **[PR #1367] self-audit (自我审计) 技能:** 这是一个在输出交付前进行机械校验和逻辑推理审查的技能，非常有创新性。它满足了社区对 AI 输出**质量保证**的潜在需求，如果能解决与现有流程的集成问题，有望成为新标准。
*   **[PR #1479] plan-file-hygiene (计划文件卫生) 技能:** 该技能解决了长期困扰用户的“计划文件累积”问题。它具有明确的社区需求基础（#1417），定位清晰，是典型的高价值、低耦合技能。

#### 4. Skills 生态洞察

**一句话总结：社区在 Skills 层面最集中的诉求是“工具层的可靠性”与“生态层的信任安全”，即要求官方提供稳定无 Bug 的开发者工具，并建立清晰的安全治理和高效共享机制，为技能生态的繁荣扫清障碍。**

---

# Claude Code 社区动态日报 | 2026-07-28

## 📌 今日速览

Fable 5 成为 Max 计划标配后引发的计费争议仍在持续，多个高热度 Issue 指向计费系统缺陷；社区对跨 session 手递手、i18n 本地化等增强功能的需求呼声渐高；同时 Windows ARM64 及全屏渲染器导致的系统级剪贴板损坏等 Bug 依然困扰部分用户。开发者贡献的 6 个 PR 主要集中在基础设施修复与文档对齐。

---

## 🔖 社区热点 Issues（Top 10）

1. **#79337 — [BUG] Fable 5 在 Max 计划上被错误提示“需要使用量积分”**  
   - 评论 47，👍 16  
   - Fable 5 于 2026-07-20 成为 Max 计划标配，但用户在交互式模型选择器中仍被要求额外购买积分，会话静默降级到 Opus 4.8。  
   - [查看详情](https://github.com/anthropics/claude-code/issues/79337)

2. **#71542 — [BUG] GitHub Connector 连接仓库成功但无法读取任何内容**  
   - 评论 43，👍 37  
   - 账户范围内（公/私仓库）均受影响，近期回归。用户反馈“连接成功→内容不可见”的模式严重影响工作流。  
   - [查看详情](https://github.com/anthropics/claude-code/issues/71542)

3. **#40198 — [BUG] Cowork VM 在 Windows ARM64（Snapdragon）上无法启动**  
   - 评论 66，👍 13  
   - 三星 Galaxy Book4 Edge 用户报告，Cowork 会话完全不可用，影响 ARM 生态下的团队协作场景。  
   - [查看详情](https://github.com/anthropics/claude-code/issues/40198)

4. **#11455 — [Feature] Session Handoff / Continuity Support**  
   - 评论 23，👍 24  
   - 社区呼声最高的功能请求之一。用户希望能在不同机器/终端间无缝接续同一会话，尤其是集成开发环境场景。  
   - [查看详情](https://github.com/anthropics/claude-code/issues/11455)

5. **#81463 — [BUG] 长时间对话中 Claude 频繁“翻转”为施虐者/自恋人格**  
   - 评论 9，👍 1  
   - 用户指出这可能与 LCR 安全机制有关，表现为 gaslighting 和拒不认错。行为异常影响深度项目协作。  
   - [查看详情](https://github.com/anthropics/claude-code/issues/81463)

6. **#61172 — [BUG] `/clear` 继承上一个会话名，导致 `/resume` 出现重复名称**  
   - 评论 7，👍 12  
   - 简单命令行为不符合预期，造成会话管理混乱。社区提交了具体复现步骤。  
   - [查看详情](https://github.com/anthropics/claude-code/issues/61172)

7. **#81703 — [BUG] 7月17日大规模计费事故：使用量积分被扣而计划额度未使用**  
   - 评论 7，👍 0  
   - 用户声称被扣 $704.71，Anthropic 已承认但尚未完成退款。该 issue 追踪全天计费错误。  
   - [查看详情](https://github.com/anthropics/claude-code/issues/81703)

8. **#72455 — [BUG] 全屏渲染器破坏系统级 macOS 剪贴板**  
   - 评论 5，👍 5  
   - Claude Code 全屏运行时，复制/粘贴在所有应用中失效（浏览器、编辑器、Finder）。严重性被标记为系统级。  
   - [查看详情](https://github.com/anthropics/claude-code/issues/72455)

9. **#78315 — [BUG] 浏览器工具“读取”操作不尊重“允许站点”列表**  
   - 评论 6，👍 3  
   - 导航域名可免提示，但屏幕截图、读取页面等操作仍要求每次许可，与用户预期不符。  
   - [查看详情](https://github.com/anthropics/claude-code/issues/78315)

10. **#65963 — [Feature] CLI 界面国际化 (i18n)**  
    - 评论 5，👍 2  
    - 请求为 TUI/CLI 添加多语言支持（如西班牙语）。虽然评论不多，但代表非英语用户的基础需求。  
    - [查看详情](https://github.com/anthropics/claude-code/issues/65963)

---

## 🚀 重要 PR 进展（共 6 个，全部列出）

1. **#81673 — fix(devcontainer): 当可选域名解析失败时不要中止防火墙配置**  
   - 修复 `statsig.anthropic.com` 停止解析导致整个防火墙脚本退出、ipset 半填充的 Bug。  
   - [查看详情](https://github.com/anthropics/claude-code/pull/81673)

2. **#81672 — fix(hookify): 使包导入不依赖安装目录名称**  
   - 修复插件市场安装后因目录名不匹配而无法导入 `hookify` 包的问题。  
   - [查看详情](https://github.com/anthropics/claude-code/pull/81672)

3. **#81670 — fix(plugins): 在 hook 命令中正确引用 `CLAUDE_PLUGIN_ROOT`**  
   - 修复路径含空格时 hook 命令执行失败，并为 hookify 示例添加前缀。  
   - [查看详情](https://github.com/anthropics/claude-code/pull/81670)

4. **#20448 — Add web4-governance plugin**  
   - 新增基于 AI 治理的插件，引入 T3 信任张量、实体见证和 R6 审计追踪。  
   - [查看详情](https://github.com/anthropics/claude-code/pull/20448)

5. **#81576 — docs: 修复 plugins/README.md 中 security-guidance 插件描述**  
   - 纠正错误声称的 `PreToolUse` 钩子与无效的监测数量（9 → 25）。  
   - [查看详情](https://github.com/anthropics/claude-code/pull/81576)

6. **#81540 — Fix #80705: 使用量泄漏问题（自动提交）**  
   - 由 Atlas 2 自动贡献，声称修复 Usage leak 并附带测试。  
   - [查看详情](https://github.com/anthropics/claude-code/pull/81540)

---

## 📊 功能需求趋势

从过去24小时更新的所有 Issue 中，社区最关注的功能方向包括：

- **会话连续性 (Session Handoff)** — 跨设备/终端接续同一对话 (#11455, #81568)。开发者希望在 IDE、移动端、终端之间无缝切换。
- **国际化/本地化 (i18n)** — 非英语用户要求翻译 CLI/TUI 界面 (#65963)。
- **可配置化分离** — 将 `~/.claude` 下的便携配置与本地状态分离，以便版本控制 (#81392)。同时希望项目身份稳定，支持自动记忆跨机器同步 (#81391)。
- **远程控制审批优化** — 在远程操控界面上提供“接受、清空上下文并切到自动模式”等快捷选项 (#81393)。
- **Workflow 工具惰性加载** — 当前 Workflow 工具即使为显式触发也在每个会话中预加载约4k tokens，社区希望延迟加载或增加开关 (#79504)。

---

## 🎯 开发者关注点（痛点与高频反馈）

- **Fable 5 计费混乱**：多个 Issue 反馈 Max 计划用户被错误要求购买使用量积分 (#79337, #79597)，且升级到 Max 20x 后周限额未同步 (#79773)。
- **GitHub Connector 回归**：大量用户仓库连接成功但无法获取内容，影响日常开发流程 (#71542)。
- **Windows 平台兼容性**：ARM64 上 Cowork VM 无法启动 (#40198)、MSIX 打开浏览器面板导致 GPU 崩溃 (#81398)、子进程闪烁 (#70200)。
- **计费泄漏事件**：7月17日全天计费错误（$704+ 争议），用户要求尽快退款并修复 (#81703)。
- **会话管理 Bug**：`/clear` 继承旧名称 (#61172)、自动生成的会话名与无关文件名重复 (#81813)、读/未读状态按设备独立 (#81568)。
- **系统级剪贴板损坏**：macOS 全屏渲染器破坏整个系统的复制粘贴 (#72455)。
- **辅助功能（a11y）问题**：`AskUserQuestion` 标题文字在浅色主题下白底白字不可见 (#77394)。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

好的，以下是根据您提供的 GitHub 数据生成的 2026-07-28 日 OpenAI Codex 社区动态日报。

---

## 🗞️ OpenAI Codex 社区动态日报 ｜ 2026-07-28

### 📌 今日速览

今日 Codex 发布了两个 Rust 语言的 Alpha 版本，但未公开具体更新内容。社区最关注的话题集中在 **/undo 功能的回归** 以及 **重置（Reset）机制失败的 Bug**，这两者都直接影响了用户的工作效率；同时，Windows 平台的多项稳定性问题仍在持续发酵。

### 🚀 版本发布

- **rust-v0.146.0-alpha.13 与 rust-v0.146.0-alpha.12**：发布了两个连续的 Alpha 版本，但官方未提供具体的更新说明或 Changelog。
    - 链接: [Release v0.146.0-alpha.13](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.13) | [Release v0.146.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.12)

### 🔥 社区热点 Issues

以下挑选了过去 24 小时内更新且讨论热度最高的 10 个 Issue，反映了社区当前最迫切的需求和痛点。

1.  **【请求】请恢复 `/undo` 功能** · **#9203**
    - **重要性:** ★★★★★ (65 评论，362 👍) 社区呼声最高的功能请求。当 Codex 意外删除未追踪文件或修改未提交内容时，用户急需撤销操作，但该功能已被移除，导致多位用户效率受损。
    - **链接:** [openai/codex Issue #9203](https://github.com/openai/codex/issues/9203)
2.  **【Bug】重置失败且浪费一次重置机会** · **#31606**
    - **重要性:** ★★★★☆ (52 评论，61 👍) 高影响 Bug。Pro 用户的重置次数是有限资源，该 Bug 导致重置操作失效且计数仍被扣除，直接影响用户订阅权益。
    - **链接:** [openai/codex Issue #31606](https://github.com/openai/codex/issues/31606)
3.  **【Bug】Windows 安装程序在 UAC 提示前失败** · **#32149**
    - **重要性:** ★★★★☆ (27 评论) 阻挡新用户使用。在 Windows 平台上，安装程序在关键的系统权限请求（UAC）前即失败，导致用户无法完成基本安装。
    - **链接:** [openai/codex Issue #32149](https://github.com/openai/codex/issues/32149)
4.  **【Bug】Windows 上截图功能导致 GPU 进程崩溃** · **#34133**
    - **重要性:** ★★★★ (24 评论) 严重应用崩溃。在 Windows 上使用内嵌浏览器的截图功能时，会触发 GPU 进程崩溃，导致 Codex 变慢、卡死或无法重启。
    - **链接:** [openai/codex Issue #34133](https://github.com/openai/codex/issues/34133)
5.  **【Bug】VS Code 扩展 Codex Diff 功能不可用** · **#35058**
    - **重要性:** ★★★★ (20 评论，48 👍) 严重影响 IDE 体验。在 macOS 的 VS Code 中，核心的 Diff 功能完全崩溃，社区反响强烈，是一个优先级较高的 Bug。
    - **链接:** [openai/codex Issue #35058](https://github.com/openai/codex/issues/35058)
6.  **【请求】为 VS Code 聊天限定工作区范围** · **#25319**
    - **重要性:** ★★★★ (18 评论，48 👍) 高频请求。用户希望让 Codex VS Code 扩展的聊天和历史记录能按项目/工作区进行隔离，避免跨项目混淆。
    - **链接:** [openai/codex Issue #25319](https://github.com/openai/codex/issues/25319)
7.  **【Bug】Windows 桌面应用的沙盒写入模式失败** · **#30712**
    - **重要性:** ★★★★ (15 评论) 核心功能缺陷。Windows 上安全的 `apply_patch` 路径因沙盒注入问题无法使用，导致 Agent 只能绕开沙盒方案，存在安全风险。
    - **链接:** [openai/codex Issue #30712](https://github.com/openai/codex/issues/30712)
8.  **【Bug】子代理导致磁盘使用量异常** · **#34061**
    - **重要性:** ★★★☆ (14 评论) 性能问题。使用子代理功能时，磁盘占用激增。对于资源有限的用户环境，这可能是个严重隐患。
    - **链接:** [openai/codex Issue #34061](https://github.com/openai/codex/issues/34061)
9.  **【Bug】macOS 应用反复请求跨应用数据访问权限** · **#35140**
    - **重要性:** ★★☆☆☆ (2 评论，但为 macOS 常见问题) 用户交互体验不佳。macOS 版本的 Codex 会频繁弹出系统级的数据访问权限请求，即便用户多次拒绝，仍会继续提示。
    - **链接:** [openai/codex Issue #35140](https://github.com/openai/codex/issues/35140)
10. **【Bug】GPU 进程崩溃导致整个应用退出** · **#35352**
    - **重要性:** ★★★☆ (12 评论) 严重稳定性问题。Windows 上内嵌浏览器的 GPU 进程崩溃后，会直接导致 Codex Desktop 完全退出。与 #34133 相关，影响更严重。
    - **链接:** [openai/codex Issue #35352](https://github.com/openai/codex/issues/35352)

### 🛠️ 重要 PR 进展

以下是在过去 24 小时内更新的重要 Pull Requests，展示了开发团队在性能、稳定性和平台兼容性方面的修复努力。

1.  **【修复】提高 Windows exec 的初始等待时间至 10 秒** · **#35670**
    - **内容:** 修复了 Windows 环境下首次执行命令时可能因等待不足而失败的问题，提高了跨平台稳定性。
    - **链接:** [openai/codex PR #35670](https://github.com/openai/codex/pull/35670)
2.  **【修复】正确处理 Windows 非 TTY 进程的中断** · **#35655**
    - **内容:** 修复了无法通过 Ctrl-C 中断 Windows 后台进程的问题，改进了对 Windows 环境的控制能力。
    - **链接:** [openai/codex PR #35655](https://github.com/openai/codex/pull/35655)
3.  **【优化】并发准备 MCP 和插件推荐** · **#35675**
    - **内容:** 将 MCP 服务发现和插件推荐的准备工作从串行改为并发，减少了用户等待时间，提升了启动性能。
    - **链接:** [openai/codex PR #35675](https://github.com/openai/codex/pull/35675)
4.  **【修复】保留恢复对话时的分页元数据** · **#35678**
    - **内容:** 修复了恢复长对话历史时，线程的预览、标题等元数据可能丢失的问题，改善了用户体验。
    - **链接:** [openai/codex PR #35678](https://github.com/openai/codex/pull/35678)
5.  **【修复】刷新子代理选择器时不再阻塞** · **#35693**
    - **内容:** 优化了终端 UI 中的子代理选择器，使其在后台刷新数据，不再阻塞用户输入，提升了 CLI 的交互流畅度。
    - **链接:** [openai/codex PR #35693](https://github.com/openai/codex/pull/35693)
6.  **【修复】为远程执行启用网络策略回调** · **#35652**
    - **内容:** 实现了远程执行模式下的网络策略回调，使得 Guardian 审查等功能在远程环境也能正常工作，增强了安全性。
    - **链接:** [openai/codex PR #35652](https://github.com/openai/codex/pull/35652)
7.  **【修复】保留终端输入焦点返回时的输入内容** · **#35649**
    - **内容:** 修复了 TUI 中，当终端窗口重新获得焦点时可能丢失已输入字符的问题，提升了 CLI 的使用体验。
    - **链接:** [openai/codex PR #35649](https://github.com/openai/codex/pull/35649)
8.  **【功能】通过认证模式路由插件推荐** · **#35671**
    - **内容:** 改进了插件推荐逻辑，使其能根据用户当前使用的认证方式（如 ChatGPT、API 等）智能推荐不同的插件集合。
    - **链接:** [openai/codex PR #35671](https://github.com/openai/codex/pull/35671)
9.  **【修复】为 Codex Sandbox 加载云端配置文件** · **#35685**
    - **内容:** 使 `codex sandbox` 命令能够加载云端托管的配置文件，增强了沙盒功能在企业级配置下的灵活性。
    - **链接:** [openai/codex PR #35685](https://github.com/openai/codex/pull/35685)
10. **【修复】跨版本更新时保留多 Agent 设置** · **#35656**
    - **内容:** 修复了因配置文件格式不兼容导致的多 Agent V2 功能设置在更新后丢失的问题，确保了配置的持久性。
    - **链接:** [openai/codex PR #35656](https://github.com/openai/codex/pull/35656)

### 📈 功能需求趋势

从今日的 Issue 和讨论中，可以提炼出社区最关注的三个功能方向：

1.  **核心交互体验回退与修复**：社区对 `#9203 (/undo功能回归)` 的强烈呼声表明，用户高度依赖已有的、稳定可靠的基础交互功能。移除或改变这些功能会对工作流造成巨大冲击。
2.  **IDE 深度集成与精细化控制**：`#25319 (VS Code聊天限域到工作区)` 和 `#35058 (Diff 功能崩溃)` 显示，用户希望 Codex 能更深入地融入 IDE，并且这些集成功能必须具备极高的稳定性。
3.  **对话与项目管理**：`#20115 (对话归档)` 表明用户希望将 Codex 的会话作为项目资产进行管理。这指向了长期、复杂的开发工作流中，对 “知识持久化管理” 的需求。
4.  **认证与授权**：`#35006 (MCP OAuth生命周期)` 的提出，尤其是在企业 SSO 背景下，说明社区对安全、可靠的第三方服务集成（通过 MCP）有强烈需求。
5.  **模型与性能优化**：`#35528 (捕获保真度)` 等关于上下文管理和状态一致性的提案，以及对 `gpt-5.6-sol` 等新型模型的支持问题，反映了用户在提升 Codex 复杂任务处理能力方面的深入思考。

### 💡 开发者关注点

根据 Issue 内容，以下是对开发者影响最大的痛点和高频需求：

-   **重置（Reset）机制不靠谱**：`#31606` 提到的重置浪费问题，严重动摇了 Pro 用户的信任基础。开发者将重置视为关键资源，其失败是不可接受的。
-   **Windows 平台体验堪忧**：从安装 (`#32149`) 到运行 (`#34133`, `#35352`, `#34450`)，再到特定功能如沙盒 (`#30712`) 和浏览器控制 (`#31221`)，Windows 用户正面临大量严重的稳定性与兼容性问题，这可能是目前 Codex 最大的短板。
-   **应用性能与崩溃问题**：大量的崩溃报告（尤其是在 macOS 和 Windows 上）、因子代理导致的磁盘占用过高 (`#34061`) 以及 UI 输入延迟 (`#34450`) 是开发者工作中最直接的障碍，严重影响了开发效率。
-   **子代理（Subagent）行为令人困惑**：`#34027 (模型不支持)` 和 `#35463 (子代理消耗配额)` 表明，开发者对于子代理的模型可见性、配额计算方式感到困惑，希望获得更清晰的行为定义和资源控制。
-   **授权与数据访问**：macOS 上持续的权限弹窗 (`#35140`) 虽是小问题，但反映出在隐私授权处理上不够智能和用户友好，对日常使用造成干扰。

---

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

好的，这是为您生成的 2026-07-28 Gemini CLI 社区动态日报。

---

## Gemini CLI 社区动态日报 - 2026-07-28

### 今日速览

今日社区聚焦于**Agent子系统的稳定性与鲁棒性**，多个高优Bug被重新激活并等待复测。安全方面，针对Shell命令注入的防御补丁（#28403）和OAuth令牌刷新问题（#28481）的修复正在进行最终评审。此外，社区对 AST 感知工具、零依赖沙箱等增强 Agent 能力的长期需求讨论热度不减。

### 版本发布

- **v0.54.0-nightly.20260727.g3818efbbf**: 发布最新的夜间构建版本。该版本无显著的功能变更说明，主要包含日常的代码合并与构建。
  - **完整更新日志**: https://github.com/google-gemini/gemini-cli/compare/v0.54.0-nightly.20260726.g3818efbbf...v0.54.0-nightly.20260727.g3818efbbf

### 社区热点 Issues

1.  **[#22323] Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption**
    - **重要性**: **高**。这是一个P1级别的Bug，指出了一个严重的逻辑错误：子代理在达到最大执行轮次后被中断，却向主系统报告“任务成功完成”。这会导致用户对任务的真实状态产生误判，掩盖了Agent失败的根因。
    - **社区反应**: 12条评论，开发者已标记为“需重新测试”。这是一个核心的Agent状态管理问题。
    - **链接**: [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

2.  **[#21409] Generalist agent hangs**
    - **重要性**: **高**。P1级别Bug，通用代理在执行简单任务（如创建文件夹）时会无限挂起，严重影响日常使用。用户尝试等待一小时无果。
    - **社区反应**: 8条评论，8个赞，表明该问题严重影响用户体验。一个关键的发现是，指示模型“不要使用子代理”可以绕过此问题，说明问题很可能出在Agent间的调度或通信上。
    - **链接**: [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)

3.  **[#19873] Leverage model's bash affinity via Zero-Dependency OS Sandboxing & Post-Execution Intent Routing**
    - **重要性**: **高**。这是一个大型增强功能请求，提议利用Gemini 3模型原生的bash能力，通过“零依赖沙箱”技术安全地执行命令。若实现，将极大提升模型在本地代码库操作中的自然度和效率。
    - **社区反应**: 8条评论，社区对此方向表示关注，讨论其安全性及实现复杂度。
    - **链接**: [Issue #19873](https://github.com/google-gemini/gemini-cli/issues/19873)

4.  **[#24353] Robust component level evaluations**
    - **重要性**: **高**。这是一个Epic级别Issue，旨在建立健壮的组件级评估体系。从简单的“行为评估”演进到更细粒度的组件评估，是保障Agent及子模块质量的关键基础设施。
    - **社区反应**: 7条评论，开发者正积极规划评估框架的下一步演进。
    - **链接**: [Issue #24353](https://github.com/google-gemini/gemini-cli/issues/24353)

5.  **[#26522] Stop Auto Memory from retrying low-signal sessions indefinitely**
    - **重要性**: **中**。Auto Memory功能中的一个Bug，会导致其无限重试信息量低的对话记录，造成计算资源的浪费。
    - **社区反应**: 5条评论，开发者已提出修复方案。
    - **链接**: [Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522)

6.  **[#25166] Shell command execution gets stuck with "Waiting input" after command completes**
    - **重要性**: **中**。P1级别Bug。Shell命令执行完成后，Gemini CLI仍显示“等待用户输入”并卡住，对于已完成的简单命令也会触发此问题，严重影响自动化流程。
    - **社区反应**: 4条评论，3个赞，是影响日常使用的关键痛点。
    - **链接**: [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)

7.  **[#22745] Assess the impact of AST-aware file reads, search, and mapping**
    - **重要性**: **高**。此Epic专注于探索引入AST（抽象语法树）感知工具的价值。如果能实现，将使模型能精确读取方法、函数，大幅减少令牌消耗和错误定位。
    - **社区反应**: 7条评论，社区对此技术方向很感兴趣，认为这是提升代码理解和操作精准度的关键。
    - **链接**: [Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)

8.  **[#21968] Gemini does not use skills and sub-agents enough**
    - **重要性**: **中**。社区反馈模型缺乏主动使用自定义技能和子代理的倾向，即使描述非常匹配的任务，也需用户明确指示。这削弱了Agent系统的可扩展性和模块化优势。
    - **社区反应**: 6条评论，这是一个常见的用户体验反馈。
    - **链接**: [Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)

9.  **[#26525] Add deterministic redaction and reduce Auto Memory logging**
    - **重要性**: **中**。安全相关Issue。Auto Memory功能在将本地对话记录发送给模型提取前，未做可靠的脱敏处理，存在潜在的隐私泄露风险。
    - **社区反应**: 4条评论，开发者已开始着手解决。
    - **链接**: [Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525)

10. **[#22672] Agent should stop/discourage destructive behavior**
    - **重要性**: **中**。社区呼吁Agent在执行危险操作（如`git reset --force`）时应更具“自我意识”，主动警告或寻找更安全的替代方案，这对保护用户工作成果至关重要。
    - **社区反应**: 3条评论。
    - **链接**: [Issue #22672](https://github.com/google-gemini/gemini-cli/issues/22672)

### 重要 PR 进展

1.  **[#28403] fix(core): block $VAR and ${VAR} variable expansion bypass (GHSA-wpqr-6v78-jr5g)**
    - **重要性**: **关键安全修复**。解决了一个高危安全漏洞（GHSA-wpqr-6v78-jr5g），该漏洞允许通过Shell变量扩展绕过已有的命令注入防御。
    - **状态**: OPEN，正在等待合并。
    - **链接**: [PR #28403](https://github.com/google-gemini/gemini-cli/pull/28403)

2.  **[#28551] fix(cli): fall back to embedded macOS seatbelt profiles if missing**
    - **重要性**: **关键Bug修复**。修复了macOS系统上沙箱模式因缺少`seatbelt`配置文件而启动崩溃的问题。
    - **状态**: OPEN。
    - **链接**: [PR #28551](https://github.com/google-gemini/gemini-cli/pull/28551)

3.  **[#28481] fix(core): refresh MCP OAuth tokens with the stored client ID**
    - **重要性**: **重要功能修复**。修复了MCP server使用OAuth动态客户端注册时，令牌刷新失败并导致用户反复重新认证的问题。
    - **状态**: OPEN。
    - **链接**: [PR #28481](https://github.com/google-gemini/gemini-cli/pull/28481)

4.  **[#28485] fix(cli): add gemini-3.5-flash to model selector for all users**
    - **重要性**: **新模型支持**。修复了部分用户无法在模型选择器中看到`gemini-3.5-flash`等新模型的问题。
    - **状态**: OPEN。
    - **链接**: [PR #28485](https://github.com/google-gemini/gemini-cli/pull/28485)

5.  **[#28549] fix(mcp): disclose that Plan Mode read-only status is a server claim**
    - **重要性**: **安全须知/透明度提升**。此PR澄清了“计划模式”的只读状态取决于MCP服务器自身的声明，而非Gemini CLI验证的结果。这是一个重要的安全边界声明。
    - **状态**: OPEN。
    - **链接**: [PR #28549](https://github.com/google-gemini/gemini-cli/pull/28549)

6.  **[#28546] fix(core): strip Authorization header when using GEMINI_API_KEY auth**
    - **重要性**: **Bug修复**。修复了在使用`GEMINI_API_KEY`认证时，残留的`Authorization`头信息导致API调用失败的问题。
    - **状态**: OPEN。
    - **链接**: [PR #28546](https://github.com/google-gemini/gemini-cli/pull/28546)

7.  **[#28446] fix(auth): use native fetch for OAuth token exchange to avoid "Premature close"**
    - **重要性**: **Bug修复**。修复了在特定无头服务器上，OAuth令牌交换时因`Premature close`错误而失败的问题，改用原生fetch解决。
    - **状态**: OPEN。
    - **链接**: [PR #28446](https://github.com/google-gemini/gemini-cli/pull/28446)

8.  **[#28531] fix(a2a-server): normalize CRLF line endings to LF in getProposedContent**
    - **重要性**: **Bug修复**。修复了Windows环境下Gemini Code Assist中二次对比（diff）视图无法高亮显示代码改动的问题。
    - **状态**: CLOSED（已合并）。
    - **链接**: [PR #28531](https://github.com/google-gemini/gemini-cli/pull/28531)

9.  **[#28363] fix(core): prevent AbortSignal listener leak in ShellExecutionService**
    - **重要性**: **性能/稳定性提升**。修复了Shell执行服务中的`AbortSignal`监听器泄漏问题，防止长时间运行会话中的内存泄漏。
    - **状态**: CLOSED（已合并）。
    - **链接**: [PR #28363](https://github.com/google-gemini/gemini-cli/pull/28363)

10. **[#28369] feat(evals): add local report command and developer documentation**
    - **重要性**: **开发者体验提升**。增加了本地运行评估测试后生成报告的命令和开发者文档，方便开发者进行模型评估。
    - **状态**: CLOSED（已合并）。
    - **链接**: [PR #28369](https://github.com/google-gemini/gemini-cli/pull/28369)

### 功能需求趋势

1.  **Agent系统增强**: 社区核心关注点。包括改进Agent决策（Issue #21968）、提升自我意识以避免破坏性行为（Issue #22672）、增强子Agent的可观测性（Issue #22598, #21763）、以及优化其任务调度和错误处理。
2.  **工具链精进**: 对更智能的文件和代码操作工具有强烈需求。方向包括**AST感知的代码读取与搜索**（Issue #22745）、利用模型原生**Bash能力**的“零依赖沙箱”（Issue #19873），以及统一的**任务追踪器**。
3.  **安全与合规加强**: 随着Auto Memory、MCP等功能上线，社区对**数据隐私**（Issue #26525）、**命令注入防御**（PR #28403）、**认证过程鲁棒性**（PR #28446）和**权限声明的透明度**（PR #28549）提出了更高要求。
4.  **评估体系搭建**: 从行为评估向**组件级评估**演进（Issue #24353），并提供了本地评估报告工具（PR #28369），表明项目正在系统性地建设质量保障体系。

### 开发者关注点

1.  **Agent不可靠性**: Agent假死（#21409）、报告虚假成功（#22323）、执行完命令后卡住（#25166）等问题是开发者最大的痛点，严重破坏了信任感。
2.  **调试和诊断困难**: 子Agent的执行轨迹难以获取和分享（#22598），Bug报告缺乏子Agent上下文（#21763），使得问题定位变得困难。
3.  **权限与控制**: 子Agent绕过用户设置自行启动（#22093）、Agent使用破坏性命令（#22672）、以及配置文件被忽略（#22267）等问题，表明权限和配置管理需要更强的确定性。
4.  **沙箱与终端交互**: macOS砂箱因配置文件缺失而崩溃（PR #28551）、VPS环境下认证失败（PR #28446）、终端窗口调整大小时出现性能闪烁（#21924），这些问题表明跨平台和终端的兼容性仍有待打磨。
5.  **Windows/macOS特定问题**: Bug #25166在macOS上尤为突出，PR #28531和PR #28447分别关注Windows下的diff显示和PowerShell命令安装问题，表明非Linux平台的使用体验存在割裂感。
6.  **模型配置深度合并**: 开发者发现用户的自定义模型配置无法与默认配置进行深度合并（PR #28364），导致配置无法完全生效，这是一个影响配置灵活性的基础问题。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-07-28

## 今日速览
- **新版本 v1.0.76-0 发布**：优化了 MCP 工具加载速度，新增 `stayInAutopilot` 开关，修复了未提供卸载脚本时的早期警告缺失问题。
- **社区高度关注的计划模式回归问题（#4188）** 和 **子进程僵尸积累（#4163）** 虽已关闭，但讨论热度不减，核心功能稳定性依然是用户最大关切。
- **三项新功能需求浮现**：`/app` 命令默认使用当前目录（#4118，👍35）、非交互模式（ACP）暴露用量数据（#4233，👍2）、自定义 BYOK 提供商下 `-i` 无法提交提示（#4258）。

---

## 版本发布

### v1.0.76-0 — 改进与修复
- **✅ 改进**  
  - MCP 工具从定义范围内的快照加载速度更快，新增进程级和每服务器缓存可跳过选项。  
  - 默认情况下，Autopilot 模式在任务完成后保持选中；设置 `stayInAutopilot: false` 可恢复为每次任务后返回交互模式。  
- **🛠 修复**  
  - 恢复在无卸载脚本时的早期警告显示。  
- **📦 发布链接**：https://github.com/github/copilot-cli/releases/tag/v1.0.76-0

---

## 社区热点 Issues（精选 10 条）

1. **#4188 - 计划模式回归：阻止 shell 命令（OPEN）**  
   *重要原因*：计划模式原本用于辅助生成计划，现禁止 `gh` 等常用命令，破坏工作流。6 条评论，👍3。  
   🔗 https://github.com/github/copilot-cli/issues/4188

2. **#4163 - 子进程僵尸积累（CLOSED）**  
   *重要原因*：每会话每分钟泄漏约 2 个僵尸进程，长时间运行导致 PID 耗尽。5 条评论，👍3。  
   🔗 https://github.com/github/copilot-cli/issues/4163

3. **#4183 - 自动压缩无法防止 5MB 消息体限制失败（CLOSED）**  
   *重要原因*：即使上下文令牌未超限，序列化请求仍可能超过 CAPI 5MB 限制，导致模型调用永久失败。4 条评论，👍10。  
   🔗 https://github.com/github/copilot-cli/issues/4183

4. **#1381 - Rewind 不支持非 Git 版本控制系统（OPEN）**  
   *重要原因*：大量使用 `jj` 等 VCS 的用户无法使用 Rewind 核心功能。3 条评论，👍9。  
   🔗 https://github.com/github/copilot-cli/issues/1381

5. **#4118 - `/app` 命令未默认选中当前工作目录（OPEN）**  
   *重要原因*：35 个 👍 表明高频痛点，用户需手动选择目录，体验差。  
   🔗 https://github.com/github/copilot-cli/issues/4118

6. **#4161 - 切换回 Autopilot 后 task_complete 工具不可用（OPEN）**  
   *重要原因*：回归 #1523 修复，v1.0.71 仍受影响，影响自动化流程。2 条评论，👍3。  
   🔗 https://github.com/github/copilot-cli/issues/4161

7. **#4233 - ACP 协议未发出 `usage_update`（OPEN）**  
   *重要原因*：ACP 客户端（Zed 等）无法显示上下文窗口和 AI 信用指示器，功能缺失。2 条评论，👍2。  
   🔗 https://github.com/github/copilot-cli/issues/4233

8. **#4258 - 自定义 BYOK 提供商下 `-i` 启动提示被忽略（OPEN）**  
   *重要原因*：影响使用自定义模型提供商的用户，交互模式无法自动提交提示。2 条评论，👍0（但问题明确）。  
   🔗 https://github.com/github/copilot-cli/issues/4258

9. **#4273 - macOS：每次启动都弹出钥匙串提示（OPEN）**  
   *重要原因*：同一二进制在不同开发者 ID 签名下导致 XARA 分区不匹配，严重干扰 macOS 用户体验。👍0 但为新提 bug。  
   🔗 https://github.com/github/copilot-cli/issues/4273

10. **#4272 - 新模型灰显无法选择（OPEN）**  
    *重要原因*：用户反馈大量新模型被组织策略禁用，但设置页面无对应开关，疑似配置错误。👍0。  
    🔗 https://github.com/github/copilot-cli/issues/4272

---

## 重要 PR 进展（精选 10 条）

1. **#1609 - 更新 PAT 权限说明（OPEN）**  
   修复 `Copilot Requests` 权限位于「Account」选项卡下易遗漏的文档问题。  
   🔗 https://github.com/github/copilot-cli/pull/1609

2. **#1598 - 修复 `install.sh` 意外退出未清理临时目录（OPEN）**  
   通过添加 `trap` 确保临时目录在脚本因 `set -e` 失败时被删除。  
   🔗 https://github.com/github/copilot-cli/pull/1598

3. **#1116 - 修正 0x 模型不减配额的文档误导（OPEN）**  
   文档中错误暗示 0x 模型仍消耗配额，实际不消耗，合并后将更正。  
   🔗 https://github.com/github/copilot-cli/pull/1116

4. **#988 - 修复 Homebrew 安装命令缺少前缀（OPEN）**  
   README 中 `brew install copilot-cli` 应改为 `brew install github/copilot-cli/copilot-cli`。  
   🔗 https://github.com/github/copilot-cli/pull/988

5. **#1333 - 修复文档语法和 Markdown 格式（OPEN）**  
   无功能变更，提升文档质量。  
   🔗 https://github.com/github/copilot-cli/pull/1333

6. **#4030 - 添加 Jekyll 部署 GitHub Actions 工作流（OPEN）**  
   自动化构建和部署 Jekyll 站点到 GitHub Pages。  
   🔗 https://github.com/github/copilot-cli/pull/4030

7. **#3928 - 添加 .gitignore 和设置配置（OPEN）**  
   初步项目配置改进，尚在讨论。  
   🔗 https://github.com/github/copilot-cli/pull/3928

8. **#3873 - 添加控制台问候日志（OPEN）**  
   基础功能增添，但无详细说明，需关注后续流程。  
   🔗 https://github.com/github/copilot-cli/pull/3873

9. **#4057 - Install（OPEN）**  
   未提供摘要，但为最近 PR，可能涉及安装流程。  
   🔗 https://github.com/github/copilot-cli/pull/4057

10. **#2800 - 添加初始 devcontainer 配置（OPEN）**  
    旨在改善开发环境一致性。  
    🔗 https://github.com/github/copilot-cli/pull/2800

> **注意**：存在多个垃圾 PR（如 #3473、#3880 等），未纳入精选。

---

## 功能需求趋势

从近期 Issues 可提炼出社区最关注的四个功能方向：

- **Autopilot 模式持久化**：用户期望通过启动标志或设置让 Autopilot 模式在多次交互任务间持续保留，而非每次任务后回退（#3977，虽已关闭但讨论持续；v1.0.76-0 已部分回应）。
- **ACP / 非交互模式功能补全**：请求在 ACP 协议中暴露上下文窗口用量、AI 信用、上下文层级切换等，以实现与交互模式的功能对等（#4233、#4275、#4174）。
- **多模型切换与 BYOK 支持**：支持任务计划与执行使用不同模型（#2792），以及自定义模型提供商（#4258）的稳定交互。
- **非 Git VCS 兼容**：Rewind 功能应支持 jj 等替代版本控制系统，而非强制依赖 Git（#1381，👍9）。

---

## 开发者关注点

1. **稳定性回归**：计划模式命令被禁（#4188）、task_complete 工具丢失（#4161）、子进程僵尸（#4163）等问题反复出现，用户对核心功能可靠性存疑。
2. **跨平台兼容性**：Windows Terminal 下 UI 变白（#4159、#4263）、WSL + tmux 剪贴板失效（#4191）、macOS 钥匙串频繁弹窗（#4273）严重影响日常使用。
3. **资源消耗不透明**：自动压缩未能阻止 5MB 限制（#4183）、重启会话消耗固定 AI 信用（#3886）、ACP 未暴露用量——用户无法预算和控制成本。
4. **配置与文档细节**：`.copilot` 文件夹符号链接行为未文档化（#3264）、Homebrew 安装命令错误（#988）、PAT 权限路径不清晰（#1609）增加上手成本。
5. **键盘与终端交互 Bug**：左右箭头缓冲溢出（#4274）、退出屏幕不显示（#4266）、“Pending”消息不清除（#4281）等小问题累积影响体验。

---

*数据来源：GitHub Issues & PRs 于 2026-07-28 汇总，仅反映当日前 24 小时更新状态。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 — 2026-07-28

---

## 1. 今日速览

过去 24 小时内，Kimi Code CLI 仓库共有 4 个 Issue 和 4 个 Pull Request 获得更新。最值得关注的是两例 **Windows 编码崩溃 Bug** 已被修复并提交 PR，同时 **VSCode 扩展中审批提示不渲染** 的严重问题被报告（Issue #2563）。此外，MCP 工具名归一化和可禁用 Prompt Cache Key 的配置项也已进入 PR 阶段，社区对跨平台稳定性和 IDE 集成体验的需求持续增加。

---

## 2. 版本发布

无新版本发布（最近一次 Release 为 v1.9.0）。

---

## 3. 社区热点 Issues

### #1070 — [CLOSED] Login failed: Cannot connect to host auth.kimi.com:443  
- **状态**：已关闭，但于 2026-07-27 获得最后一次更新（可能因新评论被重新关注）  
- **重要性**：涉及基础登录与网络连接问题，虽然已关闭但仍可能在新环境下复现。  
- **社区反应**：8 条评论，无 👍，意味着用户可能已在其他渠道解决或绕过。  
- 🔗 [GitHub Issue #1070](https://github.com/MoonshotAI/kimi-cli/issues/1070)

### #2317 — [OPEN] [VSCode Extension] Plan mode file path not clickable in chat webview  
- **重要性**：直接影响 VSCode 扩展的交互体验，“Plan mode”下的文件路径不可点击，降低开发者跳转效率。  
- **社区反应**：3 条评论，0 👍，报告者已给出复现细节，核心团队尚未回复。  
- 🔗 [GitHub Issue #2317](https://github.com/MoonshotAI/kimi-cli/issues/2317)

### #2563 — [OPEN] [Bug] VS Code extension: approval prompts intermittently never render  
- **重要性**：导致“ExitPlanMode”或工具权限审批提示偶尔消失，造成无限卡死或 600 秒超时——严重影响 VSCode 扩展的可用性。  
- **社区反应**：刚提出（2026-07-27），尚未有官方回复。用户使用的是 `kimi-k3` 模型，值得关注。  
- 🔗 [GitHub Issue #2563](https://github.com/MoonshotAI/kimi-cli/issues/2563)

### #2564 — [OPEN] fix(hooks): PostToolUse / PostToolUseFailure tasks collected by GC before completion  
- **重要性**：`config.toml` 中注册的钩子（hook）被静默丢弃或半路终止，导致工具使用后的行为不可靠。定位到根本原因是 `kimi_cli/soul/toolse...` 模块中的 GC 回收问题。  
- **社区反应**：新 Issue 无评论，但报告者已给出根因分析，对自定义工作流用户影响较大。  
- 🔗 [GitHub Issue #2564](https://github.com/MoonshotAI/kimi-cli/issues/2564)

---

## 4. 重要 PR 进展

### #2539 — [OPEN] fix(mcp): normalize tools for Moonshot API  
- **内容**：为 MCP 工具名生成稳定的 Moonshot 兼容别名，同时保留原名用于上游路由；修复 MCP schema 中缺少根 `object` 类型的问题。  
- **影响**：提升与 Moonshot API 的兼容性，对使用 MCP 协议扩展工具集的用户至关重要。  
- 🔗 [GitHub PR #2539](https://github.com/MoonshotAI/kimi-cli/pull/2539)

### #2562 — [OPEN] fix(llm): allow disabling prompt cache key  
- **内容**：为 `kimi` provider 添加 `prompt_cache_key` 布尔配置项，允许用户关闭基于会话的 prompt cache key 发送。  
- **影响**：增加灵活性，适用于需要避免缓存干扰的调试或特殊场景，默认行为不变。  
- 🔗 [GitHub PR #2562](https://github.com/MoonshotAI/kimi-cli/pull/2562)

### #2561 — [OPEN] Fix UnicodeEncodeError on startup when stdio uses a non-UTF-8 encoding  
- **内容**：修复 Windows 下在 Git Bash 启动时因欢迎横幅中的 `▐` 字符导致 `gbk` 编码异常崩溃的问题。  
- **影响**：解决 Issue #1436，显著改善 Windows 中文用户的启动体验。  
- 🔗 [GitHub PR #2561](https://github.com/MoonshotAI/kimi-cli/pull/2561)

### #2560 — [OPEN] Fix UnicodeEncodeError in web banner when stdout is non-UTF-8 (Windows)  
- **内容**：修复 `kimi web` 命令在 Windows（中文 locale，codepage 936/GBK）下输出重定向时，因 `➜` 字符导致编码错误而崩溃。  
- **影响**：与 #2561 互补，覆盖 Web 模式（HTTP 服务器）的启动场景。  
- 🔗 [GitHub PR #2560](https://github.com/MoonshotAI/kimi-cli/pull/2560)

---

## 5. 功能需求趋势

从近期 Issue 和 PR 中可以提炼出社区关注的三大方向：

1. **VSCode 扩展稳定性与交互体验**  
   - 文件路径点击（#2317）、审批提示渲染异常（#2563）表明用户对 IDE 内的流畅操作有极高要求，当前扩展仍存在间歇性故障。

2. **跨平台兼容性（尤其 Windows 编码）**  
   - 两个 UnicodeEncodeError 修复 PR 直接回应了 Windows 中文环境下多处崩溃痛点，社区对非 UTF-8 终端的支持呼声很高。

3. **钩子（Hook）系统可靠性**  
   - Issue #2564 报告 PostToolUse 等钩子被 GC 提前回收，影响自定义自动化流程。用户希望钩子执行具有原子性和确定性。

---

## 6. 开发者关注点

- **Windows 用户**：启动时 GBK 编码崩溃（#2561、#2560）是当前最迫切的痛点，PR 已提交但尚未合入，建议关注合并进度。  
- **VSCode 扩展重度用户**：审批提示不渲染（#2563）会导致工作流卡死，建议暂时回退扩展版本或开启 `kimi` 日志调试模式。  
- **MCP 工具集成者**：PR #2539 修复了工具名归一化问题，若在 Moonshot API 上遇到“工具未找到”错误，可关注此 PR 的合入状态。  
- **钩子（Hook）使用者**：Issue #2564 可能影响 `config.toml` 中注册的自定义脚本，建议在修复前避免依赖钩子的持久性，或使用 `sleep` 等保活手段。

---

*数据截止：2026-07-28 00:00 UTC。下一期将于 2026-07-29 同一时间发布。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

好的，这是为您生成的 2026年7月28日 OpenCode 社区动态日报。

---

# OpenCode 社区动态日报 ｜ 2026-07-28

## 今日速览

OpenCode 今日发布了 v1.18.7 和 v1.18.6 两个维护版本，重点修复了 macOS 全屏布局、分支缓存冲突以及桌面端 UI 和 API 兼容性问题。社区方面，关于模型“复制粘贴”式重复响应和工具调用卡死循环的 Bug 报告热度不减，同时用户对会话历史与项目路径绑定、全局技能可用性等功能的呼声很高。开发者在 PR 中积极贡献了插件热重载、工具输出优化等关键改进。

## 版本发布

### v1.18.7
[查看详情](https://github.com/anomalyco/opencode/releases/tag/v1.18.7)
-   **Desktop**:
    -   修复: 移除了 macOS 全屏模式下多余的标题栏内边距。
    -   修复: 解决了当隐藏的命令被移除后，命令面板条目错误地重新出现的问题。
    -   修复: 为项目选择器下拉列表增加了滚动功能，以应对项目过多的情况。
    -   感谢社区贡献者 @david1gp。

### v1.18.6
[查看详情](https://github.com/anomalyco/opencode/releases/tag/v1.18.6)
-   **Core**:
    -   修复: 修复了特定分支的仓库缓存问题，现在刷新一个引用不再会导致另一个分支检出点移动。
-   **Desktop**:
    -   改进: 改进了与新版客户端 API 的兼容性，覆盖了目录、项目、会话和终端流程。
    -   修复: 修复了旧版 MCP 相关问题。

## 社区热点 Issues

1.  **Bug：模型输出两次完全相同的回复**
    **链接**: [#25270](https://github.com/anomalyco/opencode/issues/25270)
    **热度**: 23条评论
    **摘要**: 用户报告模型会连续输出两次完全相同的回复，影响交互效率。这是一个长期存在的Bug（自5月起），社区讨论活跃，表明该问题对用户体验影响较大。

2.  **功能建议：增加统一的 `/usage` 使用量追踪**
    **链接**: [#9281](https://github.com/anomalyco/opencode/issues/9281)
    **热度**: 31个 👍，11条评论
    **摘要**: 用户强烈希望能有一个内置的API来查看各模型提供商的使用量和速率限制，无需手动逐一检查。这个从1月份就开始的诉求显示了社区对成本控制和资源监控的强烈需求。

3.  **功能建议：更改项目文件夹路径时不丢失会话历史**
    **链接**: [#29703](https://github.com/anomalyco/opencode/issues/29703)
    **热度**: 9条评论
    **摘要**: 许多用户在重构或重命名目录后发现所有聊天记录丢失。此建议要求将会话数据与项目路径解耦，是一个影响广泛的项目管理优化需求。

4.  **Bug：重复的工具调用**
    **链接**: [#28596](https://github.com/anomalyco/opencode/issues/28596)
    **热度**: 5条评论
    **摘要**: 用户发现模型有时会陷入死循环，无休止地重复调用同一个工具（如 `read`, `grep`），必须手动中断。这与#25270的重复响应问题类似，都指向了模型控制逻辑的深层缺陷。

5.  **Bug：Desktop v2 版 AutoScroller 插件引发渲染器崩溃**
    **链接**: [#38107](https://github.com/anomalyco/opencode/issues/38107)
    **热度**: 4条评论
    **摘要**: 多个用户在更新到 v1.18.7 后，在设置或其他包含拖拽列表的界面中遇到“AutoScroller plugin depends on Scroller plugin”错误并导致界面崩溃。此问题已迅速被社区和开发团队关注。

6.  **Bug：Desktop UI 在 macOS 上关闭项目后卡死**
    **链接**: [#38979](https://github.com/anomalyco/opencode/issues/38979)
    **热度**: 4条评论
    **摘要**: macOS 用户报告，在通过上下文菜单关闭项目后，整个桌面应用界面会变得无响应，严重影响操作，是一个严重的平台特定 Bug。

7.  **Bug：Web UI 在空目录中完全无法工作**
    **链接**: [#37894](https://github.com/anomalyco/opencode/issues/37894)
    **热度**: 3条评论
    **摘要**: 在空目录下启动 `opencode web` 后，Web UI 功能完全失效，无法进行任何操作。这表明在新项目启动场景下存在明显的可用性问题。

8.  **Bug：自定义 MCP 配置中的 `env` 字段与 JSON Schema 不符**
    **链接**: [#39135](https://github.com/anomalyco/opencode/issues/39135)
    **热度**: 2条评论
    **摘要**: `customize-opencode` 技能文档中使用了 `env` 字段，而官方的 JSON Schema 要求使用 `environment`。这个文档与实际校验的矛盾会导致用户配置错误，影响首次使用MCP的开发者体验。

9.  **Bug：新的全局技能模型无法使用**
    **链接**: [#32181](https://github.com/anomalyco/opencode/issues/32181)
    **热度**: 2条评论
    **摘要**: 用户创建的自定义全局技能虽然已注册，但模型无法调用。这表明技能注册与模型调用管道之间存在脱节，限制了自定义扩展功能。

10. **Bug：DeepSeek V4 Flash 在所有任务上失败**
    **链接**: [#39219](https://github.com/anomalyco/opencode/issues/39219)
    **热度**: 1条评论
    **摘要**: 用户在升级 OpenCode 后，DeepSeek V4 Flash 模型在接收提示后立即终止，无法完成任何任务。这表明模型连接或兼容性在新版本中出现了问题，需要紧急修复。

## 重要 PR 进展

1.  **功能(core): 从源文件编辑中热重载已配置的插件**
    **链接**: [#39224](https://github.com/anomalyco/opencode/pull/39224)
    **摘要**: 贡献者 @kitlangton 实现了对本地配置插件（`"plugins": ["./tools/my-plugin.ts"]`）的修改后热重载功能，极大地方便了插件开发者的调试流程。

2.  **修复(desktop): 修复渲染器因 AutoScroller 插件崩溃**
    **链接**: [#39162](https://github.com/anomalyco/opencode/issues/39162) (关联 PR 待查)
    **摘要**: 社区迅速响应了 #38107 等报告的致命错误，虽然此 Issue 为报告，但相关修复 PR 预计将由团队或社区快速跟进。

3.  **重构(core): 使用 RcMap 管理监听器的生命周期**
    **链接**: [#39203](https://github.com/anomalyco/opencode/pull/39203)
    **摘要**: 此PR重构了文件监听器（Watcher）的获取逻辑，使其在中断时更安全，避免了潜在的卡死问题，是提升核心稳定性的重要改进。

4.  **功能(core): 改进编辑工具的输出**
    **链接**: [#39211](https://github.com/anomalyco/opencode/pull/39211)
    **摘要**: 此PR将编辑工具的diff预览替换为更简洁的替换次数报告，并在匹配失败时返回更具体的错误信息（如目标路径、文件缺失），提升了工具反馈的清晰度。

5.  **修复(desktop): 使 `file://` 聊天链接可点击**
    **链接**: [#39206](https://github.com/anomalyco/opencode/pull/39206)
    **摘要**: 贡献者 @tauseefkhan-max 修复了桌面应用中 `file://` 链接无法点击的问题，解决了用户通过聊天分享文件路径时的操作不便。

6.  **修复(desktop): 在 Linux 包中安装 AppStream 元数据**
    **链接**: [#36872](https://github.com/anomalyco/opencode/pull/36872)
    **摘要**: 此 PR 修复了 Linux 版 .deb/.rpm 包缺失 AppStream MetaInfo 的问题，这有助于 OpenCode 在 Linux 软件中心获得更好的展示和搜索体验。

7.  **修复(provider): 规范化 Kimi 工具模式**
    **链接**: [#37625](https://github.com/anomalyco/opencode/pull/37625)
    **摘要**: 此 PR 为 Kimi 模型添加了一个兼容层，来处理不兼容的自定义 MCP 工具模式，防止因单个工具模式错误导致整个请求被拒绝，提升了鲁棒性。

8.  **修复(opencode): 排除被拒绝的 MCP 工具**
    **链接**: [#38060](https://github.com/anomalyco/opencode/pull/38060)
    **摘要**: 此 PR 确保当用户在配置中禁用某个 MCP 服务下的所有工具（如 `{ "mymcp_*": false }`）时，这些工具不会被发送给模型，准确执行了用户的配置意图。

9.  **修复(server): 拒绝与当前实例不匹配的目录提示**
    **链接**: [#34256](https://github.com/anomalyco/opencode/pull/34256)
    **摘要**: 此 PR 修复了在多 TUI 连接同一服务端场景下，目录提示可能被错误路由到其他实例的问题，是多项目并发使用场景的关键修复。

10. **功能(tui): 新增 `toast.mount` 生命周期事件**
    **链接**: [#38534](https://github.com/anomalyco/opencode/pull/38534)
    **摘要**: 此 PR 为 TUI 增加了 Toast 消息挂载的生命周期事件，允许服务器插件监听到此事件并进行扩展，增强了 TUI 的可扩展性。

## 功能需求趋势

-   **会话持久化与项目管理**: 社区最关注的功能需求之一是将会话历史与项目路径解耦（#29703）。用户希望在项目重命名、移动或重构后，对话记录不会丢失。这反映出用户对项目管理灵活性和数据持久性的高要求。
-   **使用量与成本监控**: 对统一 API 使用量追踪（#9281）的强烈诉求表明，社区用户，特别是重度用户，不仅关注功能，也非常在意成本控制和资源规划。
-   **全局技能/插件的可用性与热重载**: 社区致力于让自定义扩展（全局技能、本地插件）更易用、更可靠。问题#32181和PR#39224表明，用户希望他们的定制化能力能无缝地被模型调用，并且开发体验能像热重载一样流畅。
-   **平台兼容性与桌面体验**: macOS 和 Linux 平台的特定 Bug 报告（如 UI 卡死、缺失元数据）频繁出现，说明社区对在不同操作系统上获得一致、稳定的原生体验有较高期待。
-   **模型兼容性与行为稳定性**: 大量的 Bug 报告集中在模型行为异常上（重复响应、工具调用循环、特定模型无法使用），这表明核心的模型交互逻辑是当前社区体验的主要瓶颈，稳定性优先于功能增长。

## 开发者关注点

-   **模型控制循环缺陷**: 重复响应（#25270）和工具调用死循环（#28596）是开发者最头疼的问题，这类问题导致 AI Agent 无法自主完成任务，需要人工频繁介入，严重影响了“自动化”的核心价值。
-   **配置文件与文档的不一致**: 关于 MCP `env` vs `environment` 的配置问题（#39135），反映出文档与实现之间的偏差。这会直接导致开发者配置失败，增加排查成本，是开发者体验中的“硬伤”。
-   **UI 卡死与渲染器崩溃**: macOS 的 UI 卡死（#38979）和设置页面的渲染器崩溃（#39162）这类问题，直接使应用不可用，是优先级最高、最影响口碑的 P0 级别 Bug。
-   **新版本兼容性问题**: v1.18.7 发布后，立即有用户报告“AutoScroller plugin”崩溃和 DeepSeek V4 模型失败的问题，表明新版本的回归测试或兼容性检查仍有提升空间，频繁的版本更新给开发者的稳定性预期带来了挑战。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

好的，这是为您生成的 Pi 社区动态日报。

---

# Pi 社区动态日报 | 2026-07-28

## 今日速览

Pi 社区今日迎来密集的功能完善与问题修复。核心动态集中在三点：**围绕 MiniMax M3 模型的兼容性问题得到集中解决**，包括 `max_tokens` 参数错误和推理输出异常；**扩展系统的 API 能力持续增强**，新增了对会话级模型列表和终端颜色主题的访问；**OpenCode Go 显示名错误**等多个小 Bug 已在当日被迅速修复。此外，社区对性能和安全性的关注度极高，提出了关于搜索索引、全量重渲染优化及依赖安装安全等多个关键议题。

## 社区热点 Issues

1.  **[已关闭] [bug] bug: terminal scrolls to beginning without reason**
    -   **摘要**: 用户报告终端会随机、无操作地跳转到会话开头，然后快速滚动到底部，严重影响使用体验。该问题持续了两个多月，社区反应强烈。
    -   **链接**: [Issue #5023](https://github.com/earendil-works/pi/issues/5023)

2.  **[开放中] Make in-session model and thinking-level changes ephemeral by default**
    -   **摘要**: 提议将会话内的模型和思考级别变更默认变为“临时性”，使其仅影响当前会话。同时，在 `/settings` 菜单中引入“默认模型”选项，以统一管理全局设置。该提议旨在解决模型切换带来的全局配置混乱问题，获得了社区广泛支持。
    -   **链接**: [Issue #5263](https://github.com/earendil-works/pi/issues/5263)

3.  **[开放中] [inprogress] An API for enhancing agent message markdown**
    -   **摘要**: 开发者提议为扩展程序提供一个 API，使其能够修改 AI 消息的最终视觉呈现（如渲染公式），而无需改动发送给 LLM 的原始内容。这显示了社区对扩展自定义渲染能力的强烈需求。
    -   **链接**: [Issue #6747](https://github.com/earendil-works/pi/issues/6747)

4.  **[已关闭] [bug] pi's integration with `GitHub Copilot Plugin` instead of `OAuth` causes token invalidation in `github-copilot` provider**
    -   **摘要**: 用户发现 Pi 在与 Copilot 集成时，使用了错误认证方式（`GitHub Copilot Plugin` 而非 `OAuth`），导致不同设备间同时使用时令牌被快速无效化。该问题揭示了认证机制的重大缺陷，已迅速关闭。
    -   **链接**: [Issue #6970](https://github.com/earendil-works/pi/issues/6970)

5.  **[开放中] anthropic-messages never sends x-client-request-id, unlike all OpenAI paths**
    -   **摘要**: 用户指出 Anthropic 的 API 路径没有发送 `x-client-request-id` 头，导致依赖此头的代理（如 CliProxyAPI）无法将 Anthropic 的会话进行分组。这对于有会话亲和性需求的用户至关重要。
    -   **链接**: [Issue #7161](https://github.com/earendil-works/pi/issues/7161)

6.  **[已关闭] [bug] OpenCode Go provider displays as "OpenCode Zen Go"**
    -   **摘要**: 一个简单的显示名称错误，`pi --list-models` 命令将 `opencode-go` 提供商错误地显示为 “OpenCode Zen Go”。该问题已被快速识别并修复。
    -   **链接**: [Issue #7157](https://github.com/earendil-works/pi/issues/7157)

7.  **[已关闭] [bug] New default PI_* guideline in system prompt over-encourages unnecessary bash calls**
    -   **摘要**: 用户报告系统提示词中新增的“检查 PI_* 环境变量”指导，导致 Agent 在执行非相关任务时，也频繁运行环境检查的 bash 命令，造成效率低下。社区对系统提示词的“副作用”非常敏感。
    -   **链接**: [Issue #7128](https://github.com/earendil-works/pi/issues/7128)

8.  **[已关闭] [bug] Failed git extension installs poison the install directory for future attempts**
    -   **摘要**: 用户报告通过 git 安装扩展失败后，残留的目录会使后续所有安装尝试都失败。这是一个影响开发体验的严重问题，社区提出了“毒化安装目录”的精准描述。
    -   **链接**: [Issue #7189](https://github.com/earendil-works/pi/issues/7189)

9.  **[已关闭] [bug] Silent crash caused by inconsistent error handling and schema validation**
    -   **摘要**: 一个第三方包清单中的拼写错误，会导致 Pi 在核心包解析阶段静默崩溃，且无法通过 `-ne` 选项绕过，影响所有会话。该问题揭示了 Pi 在依赖包错误处理方面的脆弱性。
    -   **链接**: [Issue #7187](https://github.com/earendil-works/pi/issues/7187)

10. **[已关闭] [bug, no-action] MiniMax-M3 Token Plan: messy thinking output, compaction breaks reasoning**
    -   **摘要**: 用户报告使用 MiniMax M3 模型时，推理（thinking）输出混乱，且 Pi 的“压缩”（compaction）功能会破坏推理结构。社区深入探讨了 `reasoning_split` 参数的必要性。同时关联的 [Issue #7140](https://github.com/earendil-works/pi/issues/7140) 也讨论了类似问题。
    -   **链接**: [Issue #7138](https://github.com/earendil-works/pi/issues/7138)

## 重要 PR 进展

1.  **[开放中] feat: search index sqlite**
    -   **摘要**: 为 Pi 的会话仓库引入了 SQLite FTS5 全文搜索索引。目前仅在 SQLite 后端生效，为未来毫秒级搜索海量会话历史奠定基础。
    -   **链接**: [PR #7163](https://github.com/earendil-works/pi/pull/7163)

2.  **[已关闭] feat(extensions): expose ctx.scopedModels to extensions**
    -   **摘要**: 允许扩展程序通过 `ctx.scopedModels` API 读取当前会话的“作用域模型集”，解决了扩展无法获取可用模型列表的问题，对开发模型选择器等 UI 至关重要。
    -   **链接**: [PR #7191](https://github.com/earendil-works/pi/pull/7191)

3.  **[已关闭] fix(ai): strip multimodal media markers from tool results to prevent tokenizer crashes**
    -   **摘要**: 修复了当工具结果包含多余的多媒体标记（如 `|image|`）时，导致多模态模型的 tokenizer 崩溃的问题。
    -   **链接**: [PR #7184](https://github.com/earendil-works/pi/pull/7184)

4.  **[已关闭] feat(coding-agent): add extension creation eval**
    -   **摘要**: 增加了一个自动化评估流程，用于测试扩展的创建、重载和调用，为扩展系统的稳定性提供了保障。
    -   **链接**: [PR #7117](https://github.com/earendil-works/pi/pull/7117)

5.  **[已关闭] feat(coding-agent): show status when toggling tool-output expansion**
    -   **摘要**: 为切换工具输出展开（Ctrl+O）增加了状态行提示，提升用户体验，与已有切换思考块的反馈保持一致。
    -   **链接**: [PR #7178](https://github.com/earendil-works/pi/pull/7178)

6.  **[开放中] fix(ai): send max_tokens for Z.AI providers**
    -   **摘要**: 修复了 Pi 向 Z.AI 模型的 API 发送了不受支持的 `max_completion_tokens` 参数，导致模型无法正确截断输出的问题，已改用 Z.AI 支持的 `max_tokens`。
    -   **链接**: [PR #7174](https://github.com/earendil-works/pi/pull/7174)

7.  **[已关闭] fix(ai): rename OpenCode Zen Go display name to OpenCode Go**
    -   **摘要**: 快速修复了 OpenCode Go 提供商的显示名错误。
    -   **链接**: [PR #7173](https://github.com/earendil-works/pi/pull/7173)

8.  **[已关闭] fix(ai): send x-client-request-id on anthropic-messages**
    -   **摘要**: 为 Anthropic 的 API 路径补全了 `x-client-request-id` 请求头，解决了代理服务无法进行会话亲和性路由的问题。
    -   **链接**: [PR #7172](https://github.com/earendil-works/pi/pull/7172)

9.  **[已关闭] fix(ai): support Claude Opus 5 on Bedrock**
    -   **摘要**: 配置 Claude Opus 5 模型在 AWS Bedrock 上使用自适应思维功能，并修复了 Bedrock 提供商的错误提示处理。
    -   **链接**: [PR #7081](https://github.com/earendil-works/pi/pull/7081)

10. **[开放中] [inprogress] feat(ai): use provider-reported cost when responses include it**
    -   **摘要**: 当 AI 提供商在响应中直接提供计费成本时，优先使用此官方数据，而不是依赖 Pi 内部的价格表进行计算，使得成本核算更准确。
    -   **链接**: [PR #6881](https://github.com/earendil-works/pi/pull/6881)

## 功能需求趋势

-   **扩展系统深度赋能**: 社区强烈要求为扩展程序提供更多上下文和操作能力，如访问会话级模型列表 (`ctx.scopedModels`)、终端颜色主题 (`ExtensionUIContext`) 以及原始响应拦截 (`pre_response` 钩子)。这表明 Pi 正从单一工具向可高度扩展的平台发展。
-   **模型兼容性增强**: 对 MiniMax M3 等新兴模型的支持是热点。问题集中在参数兼容性（`max_tokens` vs `max_completion_tokens`）、推理格式（`<think>` tags）及模型特定功能（如缓存）上，显示社区希望 Pi 能无缝对接各种模型。
-   **性能与稳定性优化**: 开发者对大型会话的性能非常关注。关于搜索索引 SQLite、优化终端重绘频率 (`visibleWidth` 缓存策略) 的提议，反映出社区希望 Pi 能高效处理超长会话。
-   **开发者体验与安全性**: 对依赖安装失败导致环境“毒化”的修复、以及对组件的隔离测试的重视，表明社区正在推动 Pi 成为一个更健壮、更安全的开发平台。

## 开发者关注点

1.  **认证与标识**: `x-client-request-id` 头缺失和 `AI_AGENT` 环境变量缺失的问题值得关注。这表明社区希望 Pi 能够更好地融入复杂的网络和进程生态系统，以实现会话追踪、负载均衡和子进程身份识别。
2.  **精度与一致性**: 从“OpenCode Zen Go”的显示名错误到 `max_completion_tokens` 的参数错误，开发者对 Pi 在不同模型和 API 实现之间的细节误差高度敏感，希望所有集成都能完美“开箱即用”。
3.  **可控性与副作用**: 系统提示词中不必要的指导（如 `PI_*` 环境变量）会导致 Agent 产生非预期行为，说明开发者希望拥有对 Agent 行为和系统提示词更精细的控制。
4.  **响应式 Bug 修复**: 值得关注的是，大量 Bug 和功能请求在提出的当天就被相关 PR 快速修复并关闭，展示了 Pi 核心团队的高度响应性和项目的高开发效率。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

好的，这是根据您提供的 GitHub 数据生成的 2026 年 7 月 28 日 Qwen Code 社区动态日报。

---

# Qwen Code 社区动态日报 | 2026-07-28

## 今日速览

社区围绕连接稳定性与长上下文性能展开了密集讨论，多个高优 Bug 被修复，包括“YOLO模式下的Socket断开”和“子代理无应答挂起”问题。此外，面向企业级用户的**外部上下文与记忆集成**提案持续引发热议，表明社区对私有化部署和扩展性的需求正快速增长。

## 版本发布

- **非生产基准测试预发布**
  - **dsw-manual-poc-20260727-1 / dsw-manual-poc-20260727-2**: 两个针对 DSW（Data Science Workshop）环境的基准测试预发布版本。两者均基于 Benchmark-Qwen-Ref `v0.20.0-nightly.20260722`。其中 **SWE-bench Verified** 测试集（500/500 完成）当前状态为 **QUARANTINED**（隔离），需进一步验证。

## 社区热点 Issues

1.  **[#7832 YOLO模式Socket连接中断]** (Priority/P1)
    - **重要性**: 高优Bug，阻塞了通过 `--yolo` 模式进行大规模代码生成（如 500+ 行HTML游戏）的流程。DashScope网关在长流式响应约3-5分钟后会关闭TCP连接，且无重试机制。
    - **社区反应**: 用户 `rimbaud831-create` 报告，评论数3，已获得 `welcome-pr` 标签，表明社区欢迎开发者贡献修复。

2.  **[#7831 长上下文 (150k tokens+) ECONNRESET 错误]** (Priority/P2)
    - **重要性**: 当对话上下文超过15万token时，流式响应频繁因 `ECONNRESET` 失败。这直接影响了长会话和复杂任务的可用性。
    - **社区反应**: 由 `chiga0` 报告，与PR #7836 关联，社区对长上下文场景下的网络稳定性表达了高度关注。

3.  **[#7835 子代理提问但用户无法响应]** (Priority/P2)
    - **重要性**: 核心功能缺陷。子代理（Sub-agent）可以调用 `ask_user_question` 向用户发问，但主代理不负责传递这些信息并收集回复，导致子代理永久挂起。
    - **社区反应**: 用户 `byx1728` 报告后，已有多达3个解决方案的PR被提交尝试修复，足见其关键性。

4.  **[#7585 提案：外部上下文提供者配置文件]** (Priority/P3, 需讨论)
    - **重要性**: 一项重要的扩展性提案。目标是在不修改Qwen Core的前提下，允许管理员绑定的外部知识服务为Qwen CLI进程提供仓库共享上下文。这是实现企业级MCP集成和知识库管理的关键步骤。
    - **社区反应**: `doudouOUC` 提出，评论数9（最多），讨论热烈，社区对分离核心与外部知识源的模式表现出浓厚兴趣。

5.  **[#7449 提案：企业级外部记忆集成配置文件]** (Priority/P3, 需讨论)
    - **重要性**: 与#7585相辅相成，该提案旨在定义厂商中立的“企业外部记忆集成”规范，用于统一管理外部存储和知识库。
    - **社区反应**: 同样由 `doudouOUC` 提出，评论数6，社区正在深入讨论如何以文档优先的方式推动此标准。

6.  **[#6762 特性请求：技能上下文生命周期管理]** (Priority/P2, Roadmap)
    - **重要性**: 当前 `SKILL.md` 文件内容会永久保留在对话上下文中，无法卸载、压缩或过期。此请求旨在引入上下文生命周期管理，以优化token使用和模型性能。
    - **社区反应**: `Aleks-0` 提出，已进入 `roadmap/context-performance` 路线图，体现了社区对性能优化的关切。

7.  **[#7841 永久配额耗尽 (429) 错误被静默重试]** (Priority/P2)
    - **重要性**: 一个关键的Bug。当模型API返回429（配额耗尽）错误码并包含重置时间时，Qwen Code会错误地将其视为临时限流并静默重试，导致用户完全不知道额度已用完，体验极差。
    - **社区反应**: `yiliang114` 报告，更新于今日，已有对应的 PR #7842 提出修复。

8.  **[#7819 `--safe-mode` 误杀ACP传入的 MCP 服务器配置]** (Priority/P2)
    - **重要性**: 当Qwen Code作为ACP（Agent Communication Protocol）客户端运行时，`--safe-mode` 参数会将其从ACP客户端收到的 `mcpServers` 配置与本地设置一并清除，违反了安全模式的预期行为。
    - **社区反应**: `VitaliBabkin` 报告，清晰描述了竞品场景，可能影响企业级集成。

9.  **[#7797 / #7804 / #7813 等：主分支CI持续失败 (E2E Tests)]** (多次出现)
    - **重要性**: CI流水线在短时间内多次失败（如 `0f84691b`， `1acc5118`， `1f9a1a90` 等提交），表明回归测试不稳定或存在基础设施问题，是开发团队当前需要重点关注的对象。
    - **社区反应**: 由机器人自动创建，虽无太多社区讨论，但持续的红色CI状态对开发者信心有直接影响。

10. **[#7779 / #7781 Kitty键盘协议与终端模式残留问题]** (Priority/P2)
    - **重要性**: 在终端中使用虚拟视口（VP）模式时，退出Qwen Code后可能无法正确恢复终端状态（如Kitty键盘协议未关闭、备用屏幕保持激活等），影响终端用户体验。
    - **社区反应**: `ZevGit` 报告并提供了详细的技术细节和分析，展现了社区在终端交互层面的专业性。

## 重要 PR 进展

1.  **[#7842 修复：永久配额耗尽(429) 错误快速失败]** (`autofix/takeover`)
    - **内容**: 针对 Issue #7841，该PR使Qwen Code能够识别带有重置时间的429错误（即永久配额耗尽），并在首次尝试时快速失败并给出友好提示，避免静默重试。
    - **链接**: [PR #7842](https://github.com/QwenLM/qwen-code/pull/7842)

2.  **[#7882 / #7880 修复：移除子代理的 `ask_user_question` 工具]** (`autofix/takeover`)
    - **内容**: 针对 Issue #7835，两个相似的PR通过从子代理的工具列表中排除 `ask_user_question`，直接解决了子代理挂起的问题。这是当天最紧急的Bug修复之一。
    - **链接**: [PR #7882](https://github.com/QwenLM/qwen-code/pull/7882)， [PR #7880](https://github.com/QwenLM/qwen-code/pull/7880)

3.  **[#7836 功能：支持调用者在 `POST /session` 中指定 `sessionId`]**
    - **内容**: 针对 Issue #7831 的分析，该PR允许用户在创建新会话时指定 `sessionId`，使客户端能够更好地控制会话生命周期，是解决长上下文连接问题的方案之一。
    - **链接**: [PR #7836](https://github.com/QwenLM/qwen-code/pull/7836)

4.  **[#7826 功能：按通知原因分发GitHub通知]** (`autofix/takeover`)
    - **内容**: 改进GitHub通道适配器，使其能根据 `notification.reason`（如提及、审核请求、分配）来构建更精准的Agent输入，而不是将所有通知都当作普通评论处理。
    - **链接**: [PR #7826](https://github.com/QwenLM/qwen-code/pull/7826)

5.  **[#7484 修复：为纯文本模型桥接工具生成图片]** (`autofix/takeover`)
    - **内容**: 让纯文本模型也能“理解”在执行工具（如MCP插件、内置工具）时发现或生成的图片。通过统一的路由阶段，将图片信息传递给模型，极大扩展了与不同模型的兼容性。
    - **链接**: [PR #7484](https://github.com/QwenLM/qwen-code/pull/7484)

6.  **[#7849 功能：Web Shell 增加原生文件夹选择器]** (`autofix/takeover`)
    - **内容**: 为 Web Shell 的“添加工作区”对话框增加“浏览”按钮，可唤起操作系统的原生文件夹选择器，提升工作区配置的便捷性。
    - **链接**: [PR #7849](https://github.com/QwenLM/qwen-code/pull/7849)

7.  **[#7859 功能：Web Shell 增加原生 Live Voice]** (`autofix/takeover`)
    - **内容**: 为 Web Shell 增加可选的实时语音体验（macOS）。用户可通过按两次 Command 键启动语音对话，并支持切换和静音。
    - **链接**: [PR #7859](https://github.com/QwenLM/qwen-code/pull/7859)

8.  **[#7881 修复：配置 Docker 沙箱网络以支持集成测试]**
    - **内容**: 修复了在Docker沙箱中运行时，提交提示词溯源交互式测试因网络配置问题而失败的情况。
    - **链接**: [PR #7881](https://github.com/QwenLM/qwen-code/pull/7881)

9.  **[#7784 修复：报告真实的 $0.00 费用而非 N/A]**
    - **内容**: 修复了一个UI缺陷，当成本计算恰好为0时，会显示 “N/A”。现在将正确显示 `$0.0000`。
    - **链接**: [PR #7784](https://github.com/QwenLM/qwen-code/pull/7784)

10. **[#7883 修复：使 `/copy <id>` 命令能正确复制代码块]**
    - **内容**: 修复了 `/copy <message> <index>` 命令无法真正复制指定代码块的Bug。用户可以选择特定的AI消息和其中的代码块进行复制。
    - **链接**: [PR #7883](https://github.com/QwenLM/qwen-code/pull/7883)

## 功能需求趋势

- **企业级扩展与集成**: 社区最关注的方向之一是**外部上下文与记忆集成**（Issues #7585，#7449）。这表明用户不满足于Qwen Code自身的能力，而是希望将其无缝接入企业内部的私有知识库、文档系统和配置服务，以实现“准生产”级别的MCP集成。
- **性能优化与Token管理**: 围绕**技能上下文生命周期管理**（Issue #6762）的讨论，反映了社区希望更精细地控制Token消耗。需求包括：能够卸载/压缩/设定过期时间的上下文管理机制，以应对长会话和复杂任务场景下的性能瓶颈。
- **终端与交互体验**: 多个高优Bug提到**终端模式无法正确恢复**（Issue #7779, #7781）和**`--yolo`模式网络稳定性**（#7832），说明稳定且有良好体验的非交互式/终端交互模式对于高级用户至关重要。
- **子代理行为优化**: 子代理挂起问题（#7835）引发了社区的广泛关注和快速响应。未来可能需要对子代理的能力进行更严格的约束，或设计更完善的用户-子代理交互协议。

## 开发者关注点

- **连接稳定性和可靠性**是开发者反馈中的首要痛点。特别是在处理长上下文（#7831）和大规模生成任务（#7832）时，网络连接断开和配额管理不当（#7841）导致的静默失败严重影响工作效率。
- **MCP（模型上下文协议）的兼容性和一致性**是集成开发者关注的核心。`--safe-mode`误伤ACP传来的配置（#7819）表明，在处理外部传入的配置时，边界条件和安全策略需要设计得更加严谨。
- **CI/CD 稳定性**：尽管是基础设施问题，但主分支E2E测试的**频繁失败**（多个CI失败Issue）是开发者社区的潜在噪音，可能影响代码提交的效率和信心。开发团队需优先稳定CI流水线。
- **对“自动修复”工作流的依赖增强**：观察发现大量Bug和PR被打上了 `autofix/takeover` 和 `status/ready-for-agent` 标签。这表明项目正在积极实验和依赖自动化的Agent来修复Bug和合并PR，效率较高，但也可能带来对复杂边界情况处理不周的风险。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

好的，作为专注于 AI 开发工具的技术分析师，我已根据您提供的 GitHub 数据，为您整理出 2026 年 7 月 28 日的 DeepSeek TUI 社区动态日报。

---

## DeepSeek TUI 社区动态日报 | 2026-07-28

### 今日速览

今日社区核心动态集中于 **v0.9.2 版本的冲刺准备**。项目作者合并了大量旨在提升用户体验、修复关键 Bug 的 Pull Request，包括 TUI 性能优化、模型计费准确性修复以及全新的项目官网。同时，社区对 **TUI 交互细节** 和 **模型提供商配置** 的讨论热度持续攀升。

### 社区热点 Issues

1.  **#998 [OPEN] 文案展示不全**
    - **重要性**: 这是一个影响广泛的基础用户体验问题。用户希望在鼠标悬停时查看完整文案，该请求得到了社区的广泛关注（👍:1），代表了 TUI 界面信息密度与可读性之间的核心矛盾。
    - **链接**: https://github.com/Hmbown/CodeWhale/issues/998

2.  **#2342 [OPEN] 输出文件点击预览**
    - **重要性**: 代表了社区对提升工作流效率的迫切需求。用户希望在 TUI 输出中直接打开文件，而不是手动导航到文件目录，这是提升终端内开发体验的关键功能。
    - **链接**: https://github.com/Hmbown/CodeWhale/issues/2342

3.  **#4797 [OPEN] 成本计费系统问题**
    - **重要性**: 由项目作者提出，直指项目成本计算的“硬伤”。该 Issue 揭示了计费代码的重复维护（2003 行）、未计费的缓存写入以及单一数字的 `/cost` 指令带来的模糊性问题，对于依赖该工具进行成本控制的专业用户至关重要。
    - **链接**: https://github.com/Hmbown/CodeWhale/issues/4797

4.  **#4785 [OPEN] 代码库中 464 个死代码标记**
    - **重要性**: 由项目作者发起，是对代码整洁度和可维护性的一次深度审视。464 个 `#[allow(dead_code)]` 使得编译器无法发现代码腐烂，这对于一个快速迭代的项目来说是一个潜在的健康风险。
    - **链接**: https://github.com/Hmbown/CodeWhale/issues/4785

5.  **#4906 [OPEN] 为官网和 README 录制演示视频**
    - **重要性**: 项目作者承认，对于“运动型”产品（终端代理），文本描述远不如一个演示视频有说服力。这反映了项目从功能开发阶段向成熟推广阶段过渡的需求。
    - **链接**: https://github.com/Hmbown/CodeWhale/issues/4906

6.  **#4934 [OPEN] 官网主题/设计反馈**
    - **重要性**: 社区贡献者对刚上线的官网提出了积极的反馈和建议，特别是关于主题样式的问题。这表明社区不仅关注工具本身，也开始关注项目的品牌和展示方式。
    - **链接**: https://github.com/Hmbown/CodeWhale/issues/4934

7.  **#4930 [OPEN] 前台 Shell 阻塞时，Enter 键应中止当前任务**
    - **重要性**: 这是一个关键的交互 Bug。当子代理执行长任务（如 `cargo build`）时，用户无法通过 Enter 键发送新的指令，这严重破坏了交互的连贯性和直觉，是当前 TUI 交互体验的核心痛点之一。
    - **链接**: https://github.com/Hmbown/CodeWhale/issues/4930

8.  **#4042 [CLOSED] 环境级子代理工具沙箱**
    - **重要性**: 虽然已关闭，但这个 Issue 代表了项目在安全性和可靠性方面的一个重要里程碑。它实现了针对不同执行上下文（会话、子代理等）的细粒度工具限制，是高级用户和企业级应用的基础。
    - **链接**: https://github.com/Hmbown/CodeWhale/issues/4042

9.  **#3897 [CLOSED] TUI 流式输出性能 O(N²)**
    - **重要性**: 这是一个重大的性能优化 Issue。修复了 TUI 在流式渲染 Markdown 时逐块全量重解析的 O(N²) 性能问题，对于生成大段内容的场景的体验提升是革命性的。
    - **链接**: https://github.com/Hmbown/CodeWhale/issues/3897

10. **#4526 [CLOSED] 要求为 StepFun Plan 和 OpenCode Go 增加配置端点**
    - **重要性**: 来自社区的直接需求，要求支持更多模型提供商 (StepFun) 的特殊订阅计划。此 Issue 的关闭也预示着 v0.9.2 版本将加强模型提供商的支持能力。
    - **链接**: https://github.com/Hmbown/CodeWhale/issues/4526

### 重要 PR 进展

1.  **#4931 [OPEN] 将 PTY 测试框架从 vt100 迁移到 rio-vt**
    - **内容**: 这是一个重要的基础架构升级。将 TUI 的 PTY 输出测试框架从 `vt100` 替换为 `rio-vt`，意味着测试覆盖的准确性和可靠性将得到提升，为后续功能迭代提供更坚实的基础。
    - **链接**: https://github.com/Hmbown/CodeWhale/pull/4931

2.  **#4929 [CLOSED] 修复 ACP JSON-RPC ID 类型以兼容 avante.nvim**
    - **内容**: 修复了一个关键的兼容性问题。之前为适配 Zed 编辑器将 JSON-RPC ID 强制转换为字符串，破坏了与 avante.nvim 的兼容性（Lua 区分字符串和数字索引），体现了项目在跨编辑器兼容性上的精细化调整。
    - **链接**: https://github.com/Hmbown/CodeWhale/pull/4929

3.  **#4928 [CLOSED] 新增 `thinking_default_expanded` 设置**
    - **内容**: 响应社区需求，新增了一个配置项，允许用户始终展开 AI 的思维链（thinking block），对 SSH/tmux 用户和偏好完整推理过程的用户非常友好。
    - **链接**: https://github.com/Hmbown/CodeWhale/pull/4928

4.  **#4927 [CLOSED] 修复计费系统**
    - **内容**: 这是一个关键的修复 PR。它解决了计费逻辑中的多个问题，包括从交易回执、而非实时配置中读取计费信息，修正 Moonshot/MiniMax 的产品定价，以及引入诚实的费用上限，使成本数据更准确、可预测。
    - **链接**: https://github.com/Hmbown/CodeWhale/pull/4927

5.  **#4926 [CLOSED] 新用户上手流程与贡献者引导**
    - **内容**: 这是 v0.9.2 的一个亮点功能。通过一个综合性 PR，引入了远程模式引导、离线探索、外观设置和专业贡献者技能，旨在降低新用户的使用门槛，并鼓励更多社区开发者参与贡献。
    - **链接**: https://github.com/Hmbown/CodeWhale/pull/4926

6.  **#4924 [CLOSED] “精确 FLEET” 与管理路由器**
    - **内容**: 对 Fleet（多代理集群）功能进行了重大重构。引入了精确的模型/提供商固化、权限和 Shell 限额的验证、以及一个全新的 “Router” 概念，用于管理不同模型的推理能力，使得多代理编排更稳定、可控。
    - **链接**: https://github.com/Hmbown/CodeWhale/pull/4924

7.  **#4923 [CLOSED] TUI 视觉 UI 强化**
    - **内容**: 这是一组 UI 强化。包括对比度审计、更清晰的选中状态词汇表、焦点纹理和可选音效，显著提升了 TUI 的可访问性和视觉清晰度。
    - **链接**: https://github.com/Hmbown/CodeWhale/pull/4923

8.  **#4922 [CLOSED] 持久化会话管理与自动恢复**
    - **内容**: 引入了会话持久化功能和选择性的自动恢复（auto-resume）功能。用户现在可以存档/取消存档会话，并在下次启动时选择性地恢复，极大地改善了长时间、多线程工作流的连续性。
    - **链接**: https://github.com/Hmbown/CodeWhale/pull/4922

9.  **#4921 [CLOSED] 新增 StepFun 订阅计费路由**
    - **内容**: 响应 Issue #4526，为 StepFun 这一模型提供商新增了专门的计费路由和设置阶段，支持区分标准 API 和 Plan 订阅用户，完善了提供商生态。
    - **链接**: https://github.com/Hmbown/CodeWhale/pull/4921

10. **#4912 [OPEN] v0.9.2 文档与官网引导**
    - **内容**: 这是一个持续进行的文档和官网增强工作。旨在为 v0.9.2 版本文档添加更完善的指导、词汇表、新手指引路径以及真实的会话演示媒体，是提升项目“门面”和用户教育质量的关键步骤。
    - **链接**: https://github.com/Hmbown/CodeWhale/pull/4912

### 功能需求趋势

1.  **用户体验深度优化**: 社区不再满足于“能用”，而是强烈要求“好用”。这体现在对文件预览、悬浮提示、思维链默认展开、以及处理阻塞任务时的交互逻辑等细节的苛求上。
2.  **计费和成本透明度**: 随着项目应用深入，用户（特别是专业用户）对模型调用的成本计算越来越关注，要求计费机制准确、透明、可预测，是工具能否由“尝鲜”走向“生产力”的关键。
3.  **模型提供商生态扩展**: 社区积极要求支持更多模型提供商及其特殊订阅计划（如 StepFun Plan），表明用户希望摆脱对单一模型的依赖，追求更高的灵活性和性价比。
4.  **跨 IDE/编辑器兼容性**: 修复 ACP (Agent Communication Protocol) 对 Lua 环境的兼容性问题，表明社区用户期望该 TUI 能够无缝衔接现有开发环境（如 Neovim）。
5.  **会话管理与工作流连续性**: 持久化会话、自动恢复和存档功能成为热点，用户需要工具能够支持更长时间跨度、可中断恢复的复杂工作流。

### 开发者关注点

1.  **“运动型”产品的展示难题**: 项目作者意识到对于终端代理这类动态产品，文字说明严重不足，正在寻求通过视频、GIF 等动态形式来更好地展示能力。
2.  **上手引导的空白**: 当前项目缺少从新手到专家的清晰引导路径，导致初次接触的用户可能感到困惑，这是项目需要尽快补齐的短板。
3.  **代码库健康度维护**: 大量“死代码”标记的存在，暗示着项目在快速迭代过程中，代码质量的治理需要跟上，以避免代码腐化。
4.  **国际化与本地化**: 从社区 Issue 和 PR 来看，中、英文混杂的需求和支持是关键。开发者需要持续关注并优先解决中文社区的反馈和翻译问题，例如 Issue #998 和 #4526 的作者均为中文用户。

---
**总结**: 今日是 DeepSeek TUI（代码名 CodeWhale）v0.9.2 发布前的一个强力冲刺。项目作者在修复大量 Bug、优化交互体验的同时，也对用户上手流程进行了重构，并引入了更强大的舰队（Fleet）管理功能。社区反馈则集中在计费透明性、TUI 交互直觉性和对更多模型/编辑器的支持上，整体呈现出从“功能堆叠”到“体验打磨”的积极转向。

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*