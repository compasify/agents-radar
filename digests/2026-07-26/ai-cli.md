# AI CLI 工具社区动态日报 2026-07-26

> 生成时间: 2026-07-26 01:44 UTC | 覆盖工具: 10 个

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

好的，作为一名专注于 AI 开发工具生态的资深技术分析师，我已详细审阅了 2026 年 7 月 26 日各主流 AI CLI 工具的社区动态。以下是为您准备的横向对比分析报告。

---

### **AI CLI 工具生态横向对比分析报告 (2026-07-26)**

#### **1. 生态全景**

当前 AI CLI 工具生态正处于 **“稳定优先，智能为核，标准初现”** 的关键转型期。一方面，各工具在经过前期的功能快速扩张后，普遍将 **稳定性、性能与资源管理** 视为最优先的事项，围绕会话恢复、内存泄漏、进程管理等问题展开了密集的修复。另一方面，社区对 **Agent 的智能性、自主性和可解释性** 提出了更高要求，尤其关注代理在复杂任务中的行为正确性与状态可靠性。一个积极的信号是，以 **`AGENTS.md` 标准化配置文件** 为代表的跨平台协作需求正在凝聚共识，标志着整个行业开始从“各自为战”走向“生态互通”，这将是未来半年内最值得关注的范式转变。

#### **2. 各工具活跃度对比**

| 工具 | Issues 活跃度 (当日) | PR 活跃度 (当日) | 版本发布 | 核心社区情绪 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | **极高** (10个高优) | 中等 (7个重要) | 无 | **喜忧参半**: 对标准化充满期待，但被计费、安全、核心功能Bug严重影响信任。 |
| **OpenAI Codex** | 高 (10个热点) | 高 (10个重要) | 2个 (alpha) | **稳定性焦虑**: 资源泄漏、进程管理、核心功能崩溃是极大痛点。 |
| **Gemini CLI** | **极高** (10个热点) | **极高** (10个重要) | 1个 (nightly) | **期望与挑战并存**: 对子代理行为、权限控制和自动化能力有强烈诉求，同时面临较多可靠性Bug。 |
| **GitHub Copilot CLI** | 中等 (10条精选) | 低 (2个) | 无 | **版本回退隐患**: 新版本引入OOM等性能回归，插件生态稳定性差，引发信任危机。 |
| **Kimi Code CLI** | 低 (2个) | 高 (4个合并) | 无 | **稳固前行**: 集中于修复会话恢复、上下文管理核心Bug，社区以正面反馈为主。 |
| **OpenCode (TUI)** | 高 (10个) | 高 (10个) | 无 | **升级阵痛**: v1.18.5更新后UI冻结、渲染异常问题集中爆发，旧版布局呼声高。 |
| **Pi (TUI)** | 高 (10个) | 高 (10个) | 1个 (v0.82.1) | **功能追赶与架构优化**: 快速支持Opus 5，同时积极修复TUI渲染和扩展性瓶颈。 |
| **Qwen Code** | 中高 (10个) | 高 (10个) | 1个 (nightly) | **积极迭代**: 快速修复P1/P2 Bug，社区对Sandbox、模型等级选择等新功能讨论热烈。 |
| **DeepSeek TUI** | 高 (10个) | 高 (10个) | 无 | **细节打磨**: 配置与模型解析Bug外显，macOS兼容性问题，社区贡献者生态活跃。 |
| **Grok Build** | 无 | 无 | 无 | **静默期**: 过去24小时无活动。 |

#### **3. 共同关注的功能方向**

多个工具社区不约而同地将目光聚焦于以下三个方面：

- **1) 标准化与互操作性（跨平台协作）**:
  - **代表工具**: **Claude Code**, **GitHub Copilot CLI**, **Kimi Code CLI**, **DeepSeek TUI**。
  - **具体诉求**: 最强烈的呼声是支持 `AGENTS.md` 配置文件标准 (Claude Code #6235, Kimi Code #2519)。社区希望打破工具壁垒，共享配置、技能（Skills），让不同AI助手在同一项目内协同工作，并降低用户迁移成本。

- **2) 代理系统的可靠性与可解释性**:
  - **代表工具**: **Claude Code**, **Gemini CLI**, **OpenAI Codex**, **Pi**。
  - **具体诉求**: 核心痛点在于**子代理行为不可控** (Gemini CLI #22323, #21409)、**任务状态丢失** (Claude Code #76844)、**上下文压缩破坏连续性** (Codex #29356) 以及**子代理死锁/挂起** (Claude Code #78313, Gemini CLI #21409)。社区要求代理不仅是“能干活”，更要“可靠地干活”，并能够清晰解释其决策轨迹。

- **3) 性能、资源与成本控制**:
  - **代表工具**: **OpenAI Codex**, **Claude Code**, **GitHub Copilot CLI**, **Pi**。
  - **具体诉求**: **资源泄漏**是普遍顽疾 (Codex #33776, #30408)，**配额/计费不透明**引发信任问题 (Claude Code #81234, #68429)，**CAPI请求体大小限制** (Copilot CLI #4183) 和**Token消耗显示** (Qwen Code #7719) 等细节也被频繁提及。开发者希望对资源消耗和成本有更强的感知与控制权。

#### **4. 差异化定位分析**

- **Claude Code (Anthropic)**: **高端开发者、复杂流程构建者**。其核心优势在于 **Agent 调用 Agent** 的高级工作流（Task System, Subagent），技术路线旨在构建一个强大的、可编程的AI开发代理。社区讨论多围绕系统稳定性和新模型集成，但也因复杂架构引入更多Bug。
- **OpenAI Codex**: **桌面端重度用户、企业级项目**。定位偏向于 **集成开发环境中的全能助手**，尤其注重 VS Code 集成和桌面 Agent 体验。当前最大的挑战是解决桌面端进程与资源泄漏问题，以巩固专业用户的信任。
- **Gemini CLI (Google)**: **自动化DevOps、企业级合规**。其技术演进路线清晰地向 **生成式 DevOps 基础设施** 延伸，`pr-generator` 系列PR即是最好的证明。社区关注点在于 **子代理的智能调度、权限控制和跨平台安全**，目标用户是希望将AI深度嵌入CI/CD管线的团队。
- **GitHub Copilot CLI**: **GitHub生态用户、日常编码效率**。深度绑定GitHub生态的天然优势，让其在 `/pr`、代码审查等场景有独特价值。目前处于 **稳定性追赶期**，需快速解决版本回归和插件生态问题，以重拾用户信心。
- **Kimi Code CLI**: **追求稳定与效率的务实开发者**。定位是“**小而美**”，不追求功能的极度复杂，而是专注于打磨核心的会话、上下文和文件管理。近期一系列修复，体现了对基础稳定性的高度尊重。
- **OpenCode, Pi, DeepSeek TUI**: **开源社区、极客与硬件玩家**。这些TUI工具在**可定制性、跨平台兼容、性能** 上展开竞争。它们积极拥抱社区贡献，支持更多小众模型（如本地模型），是推动工具多样性和技术探索的前沿阵地。
- **Qwen Code**: **中国开发者市场、生态融合**。定位为**通用开发助手**，积极适配中国本地化需求（如DashScope、国内模型）。核心特色在于敏捷的Bug修复和积极的社区互动，同时也在探索**内存管理、Sandbox隔离**等深层技术。

#### **5. 社区热度与成熟度**

- **社区热度最高**: **Claude Code** 和 **Gemini CLI**。两者均产生了大量高赞、高评论的议题，社区参与度和讨论深度都非常高，用户对产品既有深切期望，也有尖锐批评。这反映出它们在核心开发者群体中拥有极高的渗透率。
- **快速迭代期**: **Qwen Code**, **DeepSeek TUI**, **Pi**。这些工具每日都有重要PR被合并或提交，版本更新频繁，对社区反馈的响应速度很快。它们正处于功能快速打磨和生态建设的关键阶段。
- **稳定性成熟期**: **Kimi Code CLI**。其Issue讨论更多围绕“修复已知Bug”而非“请求新功能”，社区情绪相对平稳。这表明工具核心功能已相对成熟，进入了精细化维护阶段。
- **Grok Build** 今日沉寂，可能与项目本身节奏有关，需观察后续动态。

#### **6. 值得关注的趋势信号**

1.  **“AI 协同标准”初现曙光**: `AGENTS.md` 的巨大呼声（4451个赞）已经不只是单一功能请求，它代表了整个开发者社区对**AI 工具间互操作性**的强烈期盼。这可能是未来行业标准化的起点，开发者应关注并拥抱此类开放标准。
2.  **“自动化 DevOps”从概念走向现实**: Gemini CLI 的 `pr-generator` 流水线代表了AI工具的最高级应用形态——**从 Issue 到 PR 的全自动闭环**。这预示着一个新的“AI 软件工程”时代，能为组织带来巨大的效率提升，但也对安全、幂等性和监控提出了更高要求。
3.  **“代理行为可靠性”是下一竞争高地**: 当基础代码补全功能趋于同质化，能否稳定地、可解释地执行多步骤、多代理的复杂任务，将成为区分顶级AI CLI工具的关键。解决子代理挂起、状态丢失、状态汇报错误等问题，是建立用户长期信任的基石。
4.  **“资源敏感性”成为刚需**: 随着AI成为开发日常，**CPU/内存泄漏**和 **Token 计费不透明** 已经从小众抱怨升级为核心痛点。未来，具备**资源可视化、成本控制、智能压缩**的工具将获得开发者青睐。
5.  **“从个人到企业”的跨越门槛**: 大量关于计费、账户删除、数据安全（Claude Code #68429, DeepSeek TUI #4831）的议题表明，AI CLI 工具正在从个人开发者的小众“玩具”向企业级生产力工具转变。**账户安全、审计日志、合规性**将是进入企业市场的必备条件。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

## Claude Code Skills 社区热点报告（截至 2026-07-26）

### 1. 热门 Skills 排行

以下 5~8 个 Skills（PR）因社区参与度高、实用性强或讨论激烈而备受关注，全部处于 **Open** 状态。

---

**📍 #514 — document-typography**  
**功能**：对 AI 生成的文档进行排版质量控制，解决孤词、寡段、编号错位等常见问题。  
**讨论热点**：社区普遍认可该 Skill 的实用性，但希望能覆盖更多输出格式（如 LaTeX、PDF），并讨论触发条件的精确性。  
**链接**：https://github.com/anthropics/skills/pull/514

---

**📍 #486 — ODT（OpenDocument 文本处理）**  
**功能**：支持 .odt/.ods 文件的创建、填充、读取及转换为 HTML，适配 LibreOffice/OpenOffice 工作流。  
**讨论热点**：跨平台兼容性（Windows 路径、字体嵌入）和大型文档性能是主要关切点；社区强调 ODT 在企业文档标准化中的价值。  
**链接**：https://github.com/anthropics/skills/pull/486

---

**📍 #723 — testing-patterns**  
**功能**：覆盖完整测试堆栈的指导性 Skill，包括测试哲学（Trophy 模型）、单元测试模式、React 组件测试、集成测试和端到端测试实践。  
**讨论热点**：社区对“测试 Trophy 模型 vs 传统金字塔”的推荐理由进行了深入辩论；要求增加更多语言/框架的示例。  
**链接**：https://github.com/anthropics/skills/pull/723

---

**📍 #525 — pyxel（复古游戏开发）**  
**功能**：集成 Pyxel 复古游戏引擎的 MCP 服务器，支持像素艺术/8-bit 游戏的创建、运行、截图反馈和迭代。  
**讨论热点**：社区对该 Skill 的新奇性反应积极，但质疑其适用范围（仅限 Pyxel 生态）；讨论将 MCP 模式推广到其他游戏引擎的可行性。  
**链接**：https://github.com/anthropics/skills/pull/525

---

**📍 #1302 — color-expert**  
**功能**：颜色专业知识 Skill，涵盖颜色命名系统（ISCC-NBS、Munsell、RAL 等）、色彩空间选择表（OKLCH/OKLAB/CAM16）和可访问性对比度计算。  
**讨论热点**：社区称赞其深度和结构化的对比度建议，但希望加入品牌色库管理功能；后续可能扩展为更通用的“设计规范助手”。  
**链接**：https://github.com/anthropics/skills/pull/1302

---

**📍 #1367 — self-audit（推理质量门控 v1.3.0）**  
**功能**：在交付前对 AI 输出进行机械验证（文件存在性、格式）和四维度推理审计（严重性优先级）。  
**讨论热点**：社区对其“通用无损审计”定位兴趣浓厚，但争议集中在审计维度权重是否主观，以及是否影响产出速度。  
**链接**：https://github.com/anthropics/skills/pull/1367

---

**📍 #83 — skill-quality-analyzer / skill-security-analyzer**  
**功能**：两个元技能，分别从五个维度（结构文档、示例、资源、测试、贡献）评估技能质量，以及静态分析安全性隐患。  
**讨论热点**：社区认可这套工具是“技能质检标准”，但希望官方采纳为 CI 流程的一部分；安全分析器被多次提及可防范 #492 类信任滥用。  
**链接**：https://github.com/anthropics/skills/pull/83

---

### 2. 社区需求趋势

从 Issues 高频讨论中提炼出以下最受期待的 Skill 方向：

| 需求方向 | 对应 Issue | 关键需求描述 |
|---|---|---|
| **组织级 Skill 共享** | #228（16 评论） | 用户要求直接在 Claude.ai 内共享 .skill 文件或建立共享库，避免手动下载/上传。 |
| **安全与信任治理** | #492（43 评论） | 社区品牌冒充风险，期待推出官方签名、权限边界检查或安全审计 Skill。 |
| **智能体治理（Agent Governance）** | #412（6 评论） | 要求一个覆盖策略执行、威胁检测、信任评分和审计跟踪的治理 Skill。 |
| **精简内存（compact-memory）** | #1329（9 评论） | 长会话中 Agent 的内存占用过高，提议符号化表示来节省上下文窗口。 |
| **技能评估工具修复与改进** | #556（12 评论） | run_eval.py 长期报告 0% 召回率，社区急需一个可用的评估修复。 |
| **重复技能去重** | #189（6 评论） | 安装 document-skills 和 example-skills 后出现重复内容，要求明确职责划分。 |

**总结趋势**：社区不再满足于单一功能 Skill，而是迫切需要 **组织治理、安全审计、上下文优化和自动化评估** 等基础设施类 Skill，以构建可靠的企业级 Claude Code 工作流。

---

### 3. 高潜力待合并 Skills

以下 PR 评论活跃、功能成熟且尚未合并，预计近期有望进入主仓库：

| PR | 名称 | 亮点 | 合并信号 |
|---|---|---|---|
| #514 | document-typography | 唯一针对排版质量的 Skill，填补空白 | 已持续数月无修改，可能等待 reviewer 批准 |
| #723 | testing-patterns | 覆盖全测试堆栈，争议较小 | 作者活跃回复讨论，需补充框架示例后即可合并 |
| #1302 | color-expert | 高度专业化，代码结构清晰 | 提问已基本回答，无修改请求 |
| #83 | skill-quality-analyzer | 官方质检工具，社区呼声高 | 多次被引用为 #492 的解决方案，合并优先级上升 |
| #1367 | self-audit | 推理质量门控，构思新颖 | 作者已提交 v1.3.0 且 Issue #1385 提供补充讨论 |

**特别关注**：多个修复 run_eval 的 PR（#1298、#1099、#1050、#1323）互相重叠，社区正在等待一个统一的修复方案提交。一旦合并，整个 Skill Creator 工具链的可用性将大幅提升。

---

### 4. Skills 生态洞察

**一句话总结**：社区当前最集中的诉求是 **构建一套可信任、可共享、可自动评估的 Skill 基础设施**，而非单纯堆砌功能 Skill——安全治理（#492）、组织共享（#228）和评估工具修复（#556）成为三大核心痛点。

---

好的，作为专注于 AI 开发工具的技术分析师，以下是 2026 年 7 月 26 日的 Claude Code 社区动态日报。

---

# Claude Code 社区动态日报 | 2026-07-26

## 今日速览

今日社区无新版本发布，但 Issue 讨论异常活跃，特别是关于 **AGENTS.md 标准化支持**的诉求引发了 340+ 条评论和 4400+ 点赞，反映了社区对跨平台兼容性的强烈渴望。同时，Fable 5 模型的集成问题和配额计量异常成为了新的关注焦点，Bug 提交数量显著增加。

## 社区热点 Issues

1. **[#6235] 支持 AGENTS.md 标准化配置文件**
   - **链接**: [Issue #6235](https://github.com/anthropics/claude-code/issues/6235)
   - **重要性**: **极高**。这是社区最受关注的功能请求，获得了 4451 个赞和 344 条评论。它提议支持 `AGENTS.md` 标准，以便 Claude Code 能与 Codex、Cursor 等工具在同一代码库中协作，而不再局限于专有的 `CLAUDE.md`。这代表了社区对**统一开发 agent 协作标准**的强烈期待。

2. **[#18027] 原生上下文可见性，支持自调节多上下文工作流**
   - **链接**: [Issue #18027](https://github.com/anthropics/claude-code/issues/18027)
   - **重要性**: **高**。该请求旨在让 Claude Code 能感知、报告并管理其自身的上下文窗口使用情况，从而实现大型、复杂任务的自我调节和多上下文协同。此功能若实现，将显著提升处理超大规模代码库或复杂多文件重构任务的能力。

3. **[#80988] v2.1.219 版本中 `heron_brook` 提示段强制注入，覆盖用户委托策略**
   - **链接**: [Issue #80988](https://github.com/anthropics/claude-code/issues/80988)
   - **重要性**: **高**。这是一个潜在的高优 Bug。新的系统提示段针对 Opus 5 模型，强制加入了“除非用户请求，否则不要调用 AgentTool”的指令，导致用户配置的委托策略被静默覆盖，且无法选择退出。这可能严重干扰高级用户的工作流。

4. **[#68429] 计费/账户删除 Bug：未授权的 Pro→Max 升级导致账户和数据永久删除**
   - **链接**: [Issue #68429](https://github.com/anthropics/claude-code/issues/68429)
   - **重要性**: **严重**。这是一个极其严重的用户财务和数据安全问题。一次错误的升级操作触发了账户和所有数据的永久删除，且在退款流程中陷入死循环，没有人工客服介入的通道。此事件影响恶劣，亟需 Anthropic 回应。

5. **[#81234] Max 20x 周配额在两天内消耗 53%，疑似缓存读取计量错误**
   - **链接**: [Issue #81234](https://github.com/anthropics/claude-code/issues/81234)
   - **重要性**: **高**。用户报告订阅了最高档位的 Max 计划，但配额消耗速度异常，甚至在空闲期间也在消耗。社区讨论怀疑是 `cache_read` 的 API 调用计费出现了问题，如果属实，这将是一个影响用户信任的严重计费缺陷。

6. **[#76844] 任务列表 (TaskCreate/TaskList) 在会话恢复 (`--resume`) 后丢失**
   - **链接**: [Issue #76844](https://github.com/anthropics/claude-code/issues/76844)
   - **重要性**: **高**。Task 系统是 Claude Code 进行复杂工作流管理的关键。该 Bug 报告称，通过 `TaskCreate` 创建的任务 ID 在 `--resume` 后无法找回，导致所有任务状态丢失。对于依赖 Task 系统进行项目管理的中高级用户来说，这是严重的稳定性问题。

7. **[#81283] Fable 5 模型在 VSCode 插件和 CLI 中不可用**
   - **链接**: [Issue #81283](https://github.com/anthropics/claude-code/issues/81283)
   - **重要性**: **高**。同一问题在短时间内被多人报告（类似问题 #81288），表明 Fable 5 在 Claude Code 的集成方面存在广泛的准入或配置问题。这直接影响了希望使用最新最强模型的开发者的生产力。

8. **[#81273] 自动模式下 `rm -rf` 保护被绕过**
   - **链接**: [Issue #81273](https://github.com/anthropics/claude-code/issues/81273)
   - **重要性**: **高**。这是一个安全关键问题。报告指出通过 backtick 命令替换的方式执行 `rm -rf` 可以绕过自动模式的灾难性操作确认提示。这可能导致用户在非警觉状态下遭受数据丢失风险。

9. **[#67085] 桌面应用活跃度仪表盘热力图/连续天数计算错误**
   - **链接**: [Issue #67085](https://github.com/anthropics/claude-code/issues/67085)
   - **重要性**: **中**。一个 UI/UX 问题。桌面端仪表盘的“活跃连续天数”统计逻辑有误，将创建会话的日期而非实际活跃的每一天计入，导致跨天的多日会话被错误中断。这影响用户对自身使用情况的准确认知和激励。

10. **[#78313] 子代理 (Subagent) 在其首次工具调用时间歇性挂起**
    - **链接**: [Issue #78313](https://github.com/anthropics/claude-code/issues/78313)
    - **重要性**: **高**。该问题描述了使用 Agent 工具创建的子代理在调用工具时无错误地“死锁”，导致父进程无限等待。这对于依赖“agent 调用 agent”模式进行复杂任务分解的用户来说是致命问题。

## 重要 PR 进展

1. **[#81262] 将关闭的 Issue 记录为关闭事件**
   - **链接**: [PR #81262](https://github.com/anthropics/claude-code/pull/81262)
   - **重要性**: **中等**。这是一个内部指标与数据管道的修复，确保 Issue 关闭时能被正确记录，而不是被错误地标记为新的创建事件。这有助于改善项目管理的统计准确性。

2. **[#81261] 处理 `/clean_gone` 中包含空格的工作树路径**
   - **链接**: [PR #81261](https://github.com/anthropics/claude-code/pull/81261)
   - **重要性**: **中-高**。一个 Bug 修复。当 Git 工作树路径包含空格时，原有脚本会解析错误。该 PR 通过使用 `--porcelain -z` 和 `for-each-ref` 来正确处理此类路径，避免了错误删除分支或拒绝操作。

3. **[#39043] 从前端设计技能中移除“复古未来主义”推荐**
   - **链接**: [PR #39043](https://github.com/anthropics/claude-code/pull/39043)
   - **重要性**: **低**。一个针对 Claude Code “技能”功能的细微改进，移除了一个不适宜的术语推荐。虽然改动小，但显示了 Anthropic 对模型行为细节的持续打磨。

4. **[#15727] 修复 hookify 插件的 Python 导入路径**
   - **链接**: [PR #15727](https://github.com/anthropics/claude-code/pull/15727)
   - **重要性**: **中等**。这是一个已合并的 PR，修复了一个导致 hookify 插件无法正常工作的 Python 模块导入问题。展示了社区贡献者帮助完善 Claude Code 生态系统的努力。

5. **[#49596] 重构：提取共享的 GitHub API 客户端并进行测试**
   - **链接**: [PR #49596](https://github.com/anthropics/claude-code/pull/49596)
   - **重要性**: **中等**。这是一个代码质量改进的 PR，将 GitHub API 调用逻辑抽象为独立模块并编写了测试。此类重构有助于提升代码可维护性和稳定性。

6. **[#57589] [已关闭] Cowork Windows: GitHub 连接器“已连接”但不暴露工具**
   - **链接**: [Issue #57589](https://github.com/anthropics/claude-code/issues/57589)
   - **重要性**: **高 (已修复)**。一个关于 Windows 平台 Cowork 功能的严重 Bug 已被关闭。此修复确保了在 Windows 上正确使用 GitHub 集成，是平台一致性的重要一步。

7. **[#68174] [已关闭] 不应拒绝编辑 `.a` 文件**
   - **链接**: [Issue #68174](https://github.com/anthropics/claude-code/issues/68174)
   - **重要性**: **中等 (已修复)**。修复了 Claude Code 无法编辑 `.a` (静态库存档文件) 的错误。这虽然非核心场景，但修复反映了 Claude Code 对文件类型处理更完善的追求。

## 功能需求趋势

1. **标准化与互操作性**: 以 #6235 `AGENTS.md` 为代表，社区强烈希望 Claude Code 能融入更广泛的 Agent 生态系统，采用通用规范，而非孤立地使用私有配置。
2. **任务与工作流持久化**: #76844 和 #80871 问题突显了任务系统的稳定性是用户的核心痛点。用户要求任务状态能在会话间可靠持久化，这是通往复杂自动化工作流的关键。
3. **新模型支持与配置**: 关于 Fable 5 (#81283) 和 Opus 4.8 (#79798) 的一系列问题表明，社区对最新模型的快速、无缝接入有高度需求，包括正确的 Thinking 模式配置。
4. **UI/UX 细节优化**: 从活动热力图 (#67085) 到状态栏子代理指示 (#76863)，再到“上传中”、“思考中”的状态提示 (#81287, #81286)，用户对产品的体验细节提出了更高的要求。
5. **安全与边界情况**: #81273 (rm -rf 绕过) 和 #81282 (Git 凭据问题) 表明，用户对自动模式的边界安全性高度警觉，希望有更坚固的保护机制。

## 开发者关注点

1. **配置与状态的可靠性**: 用户报告了环境变量 `CLAUDE_CONFIG_DIR` 未被遵守 (#81278)、凭据文件冲突 (#81281)、以及 Daemon 模式下 `--effort` 等配置项缓存失效 (#73742)。开发者期望配置是确定性和可靠的。
2. **会话恢复的一致性**: 多个 Issue（#76844, #80871）指出会话恢复机制存在严重缺陷，导致任务、子代理等运行时状态丢失。这极大地破坏了开发流程的连续性。
3. **计费和配额系统的透明度和准确性**: #81234 和 #68429 引发了用户对计费系统公平性和数据安全性的深度担忧。不清晰的配额消耗和灾难性的数据删除事件，严重动摇了用户的付费信任。
4. **新模型集成的完整性**: 用户发现 Claude App 和 Claude Code 中 Fable 5 的可访问性不一致 (#81283)，以及新模型导致系统提示强制覆盖用户策略 (#80988)。用户希望模型升级过程是无缝且非侵入式的。
5. **平台一致性和兼容性**: 尽管有进展（如 Windows Cowork 修复），但 Linux 和 Windows 平台上的各种边界 Bug（如子代理挂起 #78313，OAuth 循环 #77966）表明，跨平台体验的一致性仍是需要持续投入的领域。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

好的，作为专注于 AI 开发工具的技术分析师，我已根据您提供的 GitHub 数据，为您生成 2026 年 7 月 26 日的 OpenAI Codex 社区动态日报。

---

# OpenAI Codex 社区动态日报 | 2026-07-26

## 今日速览

Codex 今日发布了两个 Rust 版本（v0.146.0-alpha.10.1 和 v0.146.0-alpha.10）的 alpha 更新；社区重点回归到了久拖未决的功能请求与严重的性能/稳定性 bug 上。一个受到近 700 人关注的“远程开发”功能请求被关闭，同时多个关于 Windows 平台资源泄漏和内存问题的报告成为焦点，凸显了桌面应用的稳定性依然是开发者的核心痛点。

## 版本发布

- **`rust-v0.146.0-alpha.10.1`**: 针对 Rust 组件的增量更新。
  - [发布链接](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.10.1)

- **`rust-v0.146.0-alpha.10`**: 在前一个 alpha 版本基础上的又一迭代发布。
  - [发布链接](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.10)

## 社区热点 Issues

1.  **[#10450] 远程开发功能请求 [已关闭]**
    - **重要性**: 这个拥有 690 个 👍 和 178 条评论的超级热门 issue 被关闭，标志着社区对 Codex 桌面版支持远程开发（SSH等）的强烈诉求可能已经进入开发的最后阶段，或者被官方以其他方式回应。这是社区长期以来的最高呼声之一。
    - **社区反应**: 非常积极，大量用户表达了支持和补充用例。
    - [Issue 链接](https://github.com/openai/codex/issues/10450)

2.  **[#33776] Windows 版 GPU 进程泄漏 [开放]**
    - **重要性**: 报告了 `ChatGPT.exe` 在 Windows 上产生数百个 `taskkill.exe` 进程，导致 WMI 风暴和系统UI帧率下降(DWM degradation)。这是一个严重的**性能与资源泄漏**问题，严重影响 Windows 用户的日常体验。
    - **社区反应**: 受到 24 条评论关注，表明不少用户受此影响。
    - [Issue 链接](https://github.com/openai/codex/issues/33776)

3.  **[#30408] MCP 服务器进程泄漏 [开放]**
    - **重要性**: 报告了 Codex 桌面版为每个新对话创建 MCP（模型上下文协议）服务器进程，但关闭对话后**从不清理**这些进程，导致内存占用(RSS)飙升（可达9GB以上）。这是另一个严重的**资源泄漏**问题，直接影响机器性能。
    - **社区反应**: 受关注并加上 `performance` 标签，开发者们非常关注。
    - [Issue 链接](https://github.com/openai/codex/issues/30408)

4.  **[#35058] VS Code 中 Codex Diff 功能崩溃 [开放]**
    - **重要性**: 报告了在 VS Code 扩展中使用“Codex Diff”查看编辑差异时，出现“Oops, an error has occurred”错误，导致该功能完全不可用。这对依赖该功能的开发者工作流造成**直接阻断**。
    - **社区反应**: 开发者受影响明显，虽然评论不多，但点赞数反映了问题的严重性。
    - [Issue 链接](https://github.com/openai/codex/issues/35058)

5.  **[#30132] Azure OpenAI“oneOf”JSON Schema 解析错误 [已关闭]**
    - **重要性**: 针对 Azure OpenAI 端点的特殊 `oneOf` JSON Schema 解析失败。这影响了使用 Azure 服务的企业级用户，可能是一个特定的**兼容性问题**。已关闭说明已修复或已确认不会修复。
    - **社区反应**: Azure 用户积极参与讨论。
    - [Issue 链接](https://github.com/openai/codex/issues/30132)

6.  **[#29356] 上下文压缩丢失操作连续性 [开放]**
    - **重要性**: 用户投诉桌面版 Codex 的自动上下文压缩功能会丢失长时间任务的上下文，导致任务不连贯。用户强烈建议**保留最后5步操作**以提高一致性。这是关于**核心体验**（会话连续性）的重要反馈。
    - **社区反应**: 目前评论数一般，但获得的关注表明这是一个普遍痛点。
    - [Issue 链接](https://github.com/openai/codex/issues/29356)

7.  **[#26478] Windows 拼写检查无建议 [开放]**
    - **重要性**: Windows 桌面版的拼写检查功能虽然能高亮错误，但**无法提供任何修改建议**。这是一个影响体验的小但高频的 bug，使用户体验大打折扣。
    - **社区反应**: 获得了 23 个 👍，表示这是一个普遍存在的烦恼。
    - [Issue 链接](https://github.com/openai/codex/issues/26478)

8.  **[#31864] GPT-5.6 Sol 模型调用失败 [开放]**
    - **重要性**: 报告了使用 GPT-5.6 Sol 模型时，请求因内部工具 `collaboration.spawn_agent` 被标记为“保留”而失败。**直接导致该模型无法使用**，对高端用户(Pro订阅)影响巨大。
    - **社区反应**: 获得 14 个 👍，说明有不少高级用户受困于此。
    - [Issue 链接](https://github.com/openai/codex/issues/31864)

9.  **[#23257] 桌面端上下文压缩频繁嵌入完整图片 Base64 [开放]**
    - **重要性**: 报告了上下文压缩功能会重复将完整的图片 Base64 数据嵌入到检查点中，导致上下文膨胀和性能下降。这直接加剧了上下文管理的问题。
    - **社区反应**: 开发者讨论了其严重性，与上一个上下文问题 (#29356) 共同反映了上下文管理的核心矛盾。
    - [Issue 链接](https://github.com/openai/codex/issues/23257)

10. **[#32195] 在桌面版显示使用量限制 [开放]**
    - **重要性**: 社区请求在桌面版应用的状态栏里，类似于 CLI 一样，**持久显示**5小时和每周的使用量限制。这让用户能更好地管理自己的配额。
    - **社区反应**: 用户普遍支持，认为这是一个良好的透明性改进。
    - [Issue 链接](https://github.com/openai/codex/issues/32195)

## 重要 PR 进展

1.  **[#35414] 提高 MCP 服务器递归限制 [已合并]**
    - **功能说明**: 将 MCP 服务端的 Rust 递归限制提升至 256。这可能是为了解决某些复杂任务导致的栈溢出问题，**提升系统稳定性**。
    - [PR 链接](https://github.com/openai/codex/pull/35414)

2.  **[#35375] 使快捷键菜单响应式 [已合并]**
    - **功能说明**: UI 改进。当终端宽度较窄时，快捷键菜单的操作描述会换行显示在标签下方。**提升用户体验**，特别是在小屏或窄窗口中。
    - [PR 链接](https://github.com/openai/codex/pull/35375)

3.  **[#35365] 保持统一提示（Unified Mention）结果新鲜 [已合并]**
    - **功能说明**: 修复了`@`唤起菜单时，搜索结果可能缓存过时的问题。现在每次打开弹窗都会重新搜索，确保结果是最新的。**增强交互实时性**。
    - [PR 链接](https://github.com/openai/codex/pull/35365)

4.  **[#35364] 限制 Code Mode 元数据兼容性头部 [已合并]**
    - **功能说明**: 性能优化。限制了 `x-codex-turn-metadata` 头部中 `code_mode_tool_names` 字段的大小，**防止 HTTP/WebSocket 头部无限增长**，提升网络性能。
    - [PR 链接](https://github.com/openai/codex/pull/35364)

5.  **[#35363] 在完成事件中包含项目开始时间 [已合并]**
    - **功能说明**: 在 `ItemCompletedEvent` 中添加了可选的 `started_at_ms` 字段。这有助于**更精确地追踪和调试**任务执行时间线。
    - [PR 链接](https://github.com/openai/codex/pull/35363)

6.  **[#31582] 暴露线程选择的技能 [已合并]**
    - **功能说明**: API改进。`skills/list` 接口现在能返回由线程（任务）选择的技能，而不仅仅是工作目录下的技能。**增强了 API 的能力**，让客户端能获取更完整的技能列表。
    - [PR 链接](https://github.com/openai/codex/pull/31582)

7.  **[#30228] 当线程选择的技能更改时通知客户端 [已合并]**
    - **功能说明**: 通知功能。当线程可用的技能发生变化时（例如，所选环境准备就绪或失败），Codex 会主动通知客户端。**改善了状态同步**和客户端响应能力。
    - [PR 链接](https://github.com/openai/codex/pull/30228)

8.  **[#29845] 将显式应用路径接入 Windows 启动器 [已合并]**
    - **功能说明**: 底层架构更新。为 Windows 统一执行解析铺路，现在在进程启动信息中携带了可选的已解析可执行文件路径。**为未来的 Windows 兼容性改进做架构准备**。
    - [PR 链接](https://github.com/openai/codex/pull/29845)

9.  **[#31810] perf(core): 流水线化祖先目录发现 [已合并]**
    - **功能说明**: 性能优化。对远程项目启动时的目录查找逻辑（如 `.agents/skills` 等）进行流水线化，减少了不必要的串行等待，**显著提升启动速度**。
    - [PR 链接](https://github.com/openai/codex/pull/31810)

10. **[#35280] 跳过无配置的插件 MCP 过滤 [已合并]**
    - **功能说明**: 性能优化。当插件没有 `mcp_servers` 配置时，直接跳过过滤步骤，避免无意义的检查。**减少不必要的处理开销**。
    - [PR 链接](https://github.com/openai/codex/pull/35280)

## 功能需求趋势

从今日社区动态来看，开发者最关注的功能方向为：
- **远程开发支持**: 尽管一个相关的热 Issue 已关闭，但需求热度极高，是 Codex 从本地工具迈向云端协作的关键一步。
- **性能与稳定性优化**: 这是目前的**压倒性主题**。大量报告集中在：1) 进程泄漏（MCP, shell, GPU）；2) 内存和上下文溢出（Base64图片、上下文压缩失败）；3) 系统资源消耗（WMI风暴、DWM降级）。
- **Windows 平台兼容性**: 许多严重 Bug 都发生在 Windows 平台，包括进程管理、拼写检查、GPU驱动等，表明 Windows 版本的稳定性和体验仍需重点打磨。
- **上下文与会话管理**: 用户强烈要求改进自动上下文压缩策略，保留关键步骤，防止任务“失忆”。这关系到长会话的开发体验。
- **AI模型行为**: 对 GPT-5.6 Sol 特定模型的调用失败报告突出，表明新模型的稳定性和功能正确性直接影响了 Pro 用户的使用意愿。

## 开发者关注点

近期开发者反馈中的主要痛点和高频需求聚焦于：
- **资源泄漏问题频发**: 最核心的抱怨集中在“Codex 在后台偷偷吃资源”。无论是 MCP 进程、shell 进程还是 GPU 进程，泄漏导致电脑卡顿、内存暴涨，严重影响了作为开发工具的可靠性和专业性。
- **关键功能不可用**: 如 VS Code 的 `Codex Diff` 崩溃、Azure 用户的 JSON 解析错误、特定模型请求失败等问题，直接导致业务流程中断，是开发者最难以接受的“致命伤”。
- **上下文丢失与混乱**: 长期任务中，Codex 的上下文压缩机制虽然为了节省成本，但经常丢失关键操作步骤，导致模型“忘记”刚才做了什么，需要用户重新描述，大大降低了效率。
- **Windows 体验差距**: 与 macOS 相比，Windows 用户面临了更多的问题，如进程泄漏、GPU崩溃、基础功能（如拼写检查）不完善等。这暗示了 Windows 版本在 QA 和底层适配方面可能投入不足。
- **缺乏透明度**: 用户希望看到实时的配额使用情况，以及更清晰的网络/系统权限反馈（如[PR #35359]中提到的网络策略请求处理），这表明开发者期待更强的控制感和可预测性。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

好的，作为专注于 AI 开发工具的技术分析师，以下是基于 2026-07-26 数据的 Gemini CLI 社区动态日报。

---

# Gemini CLI 社区动态日报 (2026-07-26)

## 今日速览

社区议题热度集中在**子代理（Subagent）的行为与可靠性**，特别是关于其在交互限制（如 `MAX_TURNS`）下错误报告成功、以及通用代理（Generalist agent）永久挂起的 P1 级 Bug 引起了广泛关注和讨论。除此之外，一个关于 **PR 自动生成流水线** 的大型功能 PR 系列正在积极开发，预示着 Gemini CLI 正在向自动化 DevOps 工作流方向扩展。

## 版本发布

- **v0.54.0-nightly.20260726.g3818efbbf**: 常规的每日构建版本更新，主要更新了内部版本号和对应的更新日志（Changelog），无实质性功能或修复变更。

## 社区热点 Issues

本日挑选了 10 个最值得关注的 Issue，主要聚焦于代理（Agent）系统的核心 Bug 和社区热议的增强方向。

1.  **[P1/Bug] Subagent 在达到 MAX_TURNS 后错误报告为“GOAL 成功”**
    - **摘要**: 子代理（如 `codebase_investigator`）在达到最大交互轮次限制后，未向用户报告“中断”或“失败”，反而返回 `status: "success"` 和 `Termination Reason: "GOAL"`，掩盖了实际发生的执行截断问题。
    - **重要性**: 这是明显的**逻辑错误**。它误导用户认为任务已经完成，但实际代码分析可能并未执行，严重破坏了 CLI 的可信度和用户的预期。
    - **社区反应**: 该 Issue 有 12 条评论，热度很高。开发者对子代理状态汇报机制的可靠性提出了严厉质疑，认为是影响用户体验的严重缺陷。
    - [GitHub Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

2.  **[P1/Bug] 通用代理（Generalist agent）永久挂起，无法完成任务**
    - **摘要**: 当 Gemini CLI 将任务交由通用代理处理时（例如简单的文件夹创建），该代理会永久挂起（hang），等待长达一小时后仍需用户手动取消。用户发现，通过提示词禁止其调用子代理可以临时解决此问题。
    - **重要性**: 这是**核心功能的阻塞性 Bug**。通用代理是 CLI 执行复杂指令的关键组件，其挂起行为导致几乎所有需要其介入的任务都无法完成。
    - **社区反应**: 该 Issue 有 8 个 👍 和 8 条评论，说明大量用户遭遇了此问题，社区反应强烈，并将其视为亟待解决的 P1 优先级问题。
    - [GitHub Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)

3.  **[P2/Bug] 开发者批评 Gemini 不主动使用自定义技能和子代理**
    - **摘要**: 用户反馈，Gemini CLI 在完成任务时，即使任务明确与用户自定义的技能（如 `gradle`, `git`) 高度相关，也不会主动调用这些技能或子代理，除非被明确指示。
    - **重要性**: 这反映了**代理系统的智能性和自主性不足**。如果代理不能自主利用已有的、功能明确的工具，那么用户创建技能的价值就会大打折扣，无法实现真正高效的自动化。
    - **社区反应**: 社区贡献者 `rnett` 分享了自己的经验，引起了其他开发者的共鸣，认为这是一个亟待改善的增强功能点。
    - [GitHub Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)

4.  **[P2/Enhancement] 提议利用模型原生 Bash 能力，实现零依赖 OS 沙箱和意图路由**
    - **摘要**: 社区成员 `abhipatel12` 提出，Gemini 3 模型本身就是优秀的 Bash 用户，应该通过**零依赖沙箱**技术，充分利用模型的 Shell 执行能力，并设计后执行意图路由机制来保证安全。这将极大提升模型在代码探索和文件编辑上的效率。
    - **重要性**: 这是一个**具有前瞻性的技术设计方案**。它旨在从根本上解决模型能力与执行安全之间的平衡问题，而非头疼医头的修修补补。
    - **社区反应**: 该 Issue 有 8 条评论，技术讨论氛围浓厚，被认为是一个“Large”规模的工作量，反映了社区对底层架构优化的期待。
    - [GitHub Issue #19873](https://github.com/google-gemini/gemini-cli/issues/19873)

5.  **[P2/Bug] Shell 命令执行完毕后，CLI 卡在“等待输入”状态**
    - **摘要**: 报告指出，Gemini CLI 在“执行模式”下执行一个简单的 CLI 命令后，该命令已经完成，但 CLI 界面仍然显示该命令为活跃状态并显示“等待用户输入”，导致进程挂起。
    - **重要性**: 这是一个**严重的交互体验问题**。它发生在高频操作场景（Shell 命令执行），直接导致用户的工作流中断，需要手动干预才能继续。
    - **社区反应**: 该 P1 优先级问题获得了 3 个 👍，表明此问题对开发流程的干扰极大。
    - [GitHub Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)

6.  **[P2/Bug] “自动记忆”系统会无限重试低信号会话**
    - **摘要**: “自动记忆”功能在处理会话索引时，如果某个会话被判断为“低信号”（低价值），它不会被标记为已处理。这导致在后续的处理周期中，该会话会被反复识别并重试，形成无限循环。
    - **重要性**: 这是一个**资源浪费和潜在的死循环 Bug**。背景进程会无休止地处理无价值数据，不仅消耗 Token，还可能影响 CLI 的整体性能。
    - **社区反应**: 开发者 `SandyTao520` 精准定位了问题，并发起了一个系列的 Bug 修复。
    - [GitHub Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522)

7.  **[P2/Bug] “自动记忆”功能缺乏确定性数据脱敏策略**
    - **摘要**: 目前，自动记忆在读取本地会话记录时，会将内容发送给模型进行脱敏，但数据进入模型上下文（Model Context）是发生在提示词（prompt）指示模型脱敏之前的，存在**机密信息泄露风险**。此外，服务端也可能记录敏感信息。
    - **重要性**: 这是一个**明确的安全隐患**。对于开发者而言，代码中的 API Key、密码等敏感信息安全是第一位的，当前的设计存在逻辑漏洞。
    - **社区反应**: 社区对此建议持积极态度，认为“确定性脱敏”是解决此问题的正确方向。
    - [GitHub Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525)

8.  **[P2/Bug] v0.33.0 更新后，子代理在未授权情况下被激活**
    - **摘要**: 用户更新到 v0.33.0 版本后，尽管配置文件中所有代理模式均已设为“禁用”，但子代理（如通用代理）仍然被激活并使用。用户原本只期望使用 MCP 功能。
    - **重要性**: 这暴露了**配置管理的边界问题**，即代理系统的激活机制未能完全遵守用户配置。这可能导致用户遭遇计划外的 Token 消耗和不可预期的行为。
    - **社区反应**: 该 Bug 被标记为“need-retesting”，开发者们讨论了权限控制的重要性，认为这是新版本引入的严重回归问题。
    - [GitHub Issue #22093](https://github.com/google-gemini/gemini-cli/issues/22093)

9.  **[P2/Bug] 代理应能阻止/警告破坏性行为**
    - **摘要**: 用户报告，在某些情况下，模型会使用如 `git reset` 或 `--force` 等具有破坏性的命令。建议代理系统应主动识别此类命令，或优先推荐更安全的替代方案，并在执行危险操作前进行警告。
    - **重要性**: 这是一个**关于安全性和用户可控性的重要议题**。提高代理的“自律性”对于保护用户的工作成果和避免意外数据丢失至关重要。
    - **社区反应**: 开发者对此表示赞同，并在讨论 Git 操作、数据库维护等高危场景下的模型行为限制。
    - [GitHub Issue #22672](https://github.com/google-gemini/gemini-cli/issues/22672)

10. **[P3/Enhancement] 子代理的完整轨迹应能通过 `/chat share` 分享**
    - **摘要**: 目前子代理的执行轨迹虽被保存，但不易获取。用户提议，应当将子代理的完整决策和执行路径集成到 `/chat share` 功能中，使得排查子代理行为、进行效果评估和知识共享变得更加容易。
    - **重要性**: 这代表了**对 AI Agent 可解释性和透明度的需求**。子代理如同一个“黑盒”，其行为轨迹的可视化分享将极大提升调试和协作效率。
    - **社区反应**: 社区对此表示支持，认为这是提升开发者对代理系统信任感的重要一步。
    - [GitHub Issue #22598](https://github.com/google-gemini/gemini-cli/issues/22598)

## 重要 PR 进展

1.  **[修复/核心] 修复性能测试中 `resolveRipgrepPath()` 的兼容性问题**
    - **重要性**: 此 PR 修复了因 API 变更导致的性能测试失败问题。虽然改动小，但保证了 CI/CD 测试管线的稳定性，是日常维护的关键一环。
    - [GitHub PR #28535](https://github.com/google-gemini/gemini-cli/pull/28535)

2.  **[修复/CI] 修复 npm 发布后删除 `staging-tmp` dist-tag 的竞态条件**
    - **重要性**: 这是一个典型的**基础设施稳定性修复**。它修复了在大型包发布时因异步操作导致的失败问题，保证了 nightly 版本发布流程的可靠性。对频繁使用夜版/预览版的开发者意义重大。
    - [GitHub PR #28534](https://github.com/google-gemini/gemini-cli/pull/28534)

3.  **[修复/安全] 修复 MCP OAuth 令牌刷新时客户端 ID 丢失的问题**
    - **重要性**: 修复了通过 OAuth 动态客户端注册方式接入 MCP 服务器时的一个严重 Bug。此 Bug 会导致令牌刷新失败并删除已存储的凭证，迫使开发者频繁重新认证。这直接影响 MCP 生态的易用性。
    - [GitHub PR #28481](https://github.com/google-gemini/gemini-cli/pull/28481)

4.  **[修复/代理] 限制 Shell 命令输出发送给模型的大小**
    - **重要性**: 这是一个**关键的 Token 节约和性能优化**。之前大型命令的输出会不加限制地喂给模型，不仅消耗大量 Token 拖慢响应，还可能扰乱模型推理。此 PR 通过设限避免了这个问题，对日常使用体验提升显著。
    - [GitHub PR #28401](https://github.com/google-gemini/gemini-cli/pull/28401)

5.  **[新功能/Infra] `pr-generator` 系列 - 基础设施层 (Infrastructure)**
    - **重要性**: `pr-generator` 模块集的首个 PR，它为自动化的代码生成流水线搭建了云运行环境（Cloud Run Job）、工作流定义（Workflows）和容器化配置（Dockerfile）。标志着 Gemini CLI 开始涉足**自动化 DevOps 基础设施**。
    - [GitHub PR #28431](https://github.com/google-gemini/gemini-cli/pull/28431)

6.  **[新功能/Infra] `pr-generator` 系列 - 数据库层 (Database)**
    - **重要性**: 实现了 Firestore 数据库的双层并发锁机制和测试数据摄取工具。这是保证“Issue 到 PR”自动化流水线中**数据一致性**和**并发安全**的核心模块。
    - [GitHub PR #28432](https://github.com/google-gemini/gemini-cli/pull/28432)

7.  **[新功能/Infra] `pr-generator` 系列 - 核心工具层 (Core)**
    - **重要性**: 提供了环境配置解析器、子进程执行器（含结构化日志）、GitHub REST API 客户端等基础功能组件。它是整个流水线的**积木模块**，为上层复杂逻辑提供了标准化基础。
    - [GitHub PR #28435](https://github.com/google-gemini/gemini-cli/pull/28435)

8.  **[新功能/Infra] `pr-generator` 系列 - 代理层 (Agent)**
    - **重要性**: 引入了为“Antigravity”AI 代理设计的系统提示词模板。这些提示词决定了自动化代码生成、质量检查、反馈循环等**核心 AI 行为逻辑**，是流水线智能程度的灵魂。
    - [GitHub PR #28434](https://github.com/google-gemini/gemini-cli/pull/28434)

9.  **[新功能/Infra] `pr-generator` 系列 - 编排层 (Orchestrator)**
    - **重要性**: 实现了迭代式 Bug 修复的状态机和工作容器入口点。它是协调所有组件工作的**大脑**，负责管理 Firestore 锁、AI 代理循环、代码检查等复杂流程。
    - [GitHub PR #28433](https://github.com/google-gemini/gemini-cli/pull/28433)

10. **[已合入/修复] 修复 A2A 服务中的路径遍历漏洞**
    - **重要性**: 这是一个防御性质的**深度安全修复**。它通过路径规范化检查，阻止了恶意用户通过 `restore` 命令访问 `checkpointDir` 之外的文件系统，属于重要的安全加固。
    - [GitHub PR #28353](https://github.com/google-gemini/gemini-cli/pull/28353)

## 功能需求趋势

从今日的 Issue 和 PR 中，可以提炼出三大核心功能趋势：

-   **增强代理系统（Agent System）的智能性与可靠性**：这是社区最核心的诉求。具体表现为：
    -   **更精准的任务状态汇报**：解决“MAX_TURNS 错误报告为成功”这类逻辑缺陷。
    -   **更主动的工具/技能调用**：让代理能自主判断并利用其“工具箱”（如子代理、MCP 工具）。
    -   **更强的自我认知**：代理能理解自身局限（如命令耗时长），并能主动规避破坏性行为。
-   **强化安全与权限控制体系**：随着代理能力的增强，安全需求日益凸显：
    -   **数据脱敏**：在“自动记忆”等数据流动场景中，实现在数据进入模型前就进行确定性脱敏。
    -   **细粒度权限控制**：用户希望能精确控制“哪个子代理能做什么事”，避免配置被绕过（如 Issue #22093）。
    -   **沙箱执行**：探索“零依赖 OS 沙箱”等更安全的 Shell 执行模式。
-   **优化代理交互与调试体验**：将代理从“黑盒”转变为“灰盒”甚至“白盒”：
    -   **轨迹可视化共享**：通过 `/chat share` 分享子代理的完整决策轨迹。
    -   **输出限制**：防止过大的 Shell 输出干扰模型推理，提升交互流畅度。
    -   **AST 感知**：探索利用抽象语法树（AST）进行更精确的代码读取和搜索，减少 Token 浪费并提升效率。

此外，`pr-generator` 这一系列 PR 揭示了另一个重要趋势：**生成式 DevOps 基础设施化**。Gemini CLI 不再仅仅是个人终端助手，正被用于构建自动化的“Issue 到 PR”闭环流水线，这代表了一种更高级的、面向企业级自动化的工作方向。

## 开发者关注点

开发者反馈中普遍存在的痛点和高频需求如下：

-   **子代理行为不可控**：这是当前最普遍的痛点。开发者普遍反映，子代理要么不干活（不主动调用），要么乱干活（自行激活、挂起、或错误报告状态）。这在 Issue #22323, #21409, #21968, #22093 中均有体现。
-   **权限与执行边界模糊**：开发者对自己定义的工具和技能被如何调用缺乏掌控感。他们希望代理能“戴上镣铐跳舞”，即在明确的授权范围内行动，并主动规避风险（如 Issue #22672）。
-   **核心 CLI 稳定性问题**：命令执行后挂起（#25166）、因大输出导致卡顿（PR #28401）、外部编辑器退出后界面显示异常（#24935）等问题，严重干扰了开发者的日常工作流。稳定性是工具被广泛接受的前提。
-   **自动化功能的“副作用”**：“自动记忆”功能（如 #26522, #26523）虽然省力，但其潜在的死循环、Token 浪费和数据安全风险，让开发者感到不安。他们希望自动化功能是“聪明”且“安全”的。
-   **对安全和数据泄漏的持续关切**：无论是“自动记忆”的数据处理逻辑（#26525），还是 OAuth 令牌管理问题（#28481），都直接触及开发者的安全红线。任何这方面的疏忽都会严重削弱社区对工具的信任。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-07-26

## 📋 今日速览

过去 24 小时内社区活跃度较高，共产生 18 条更新 Issue 和 2 条 PR。**核心关注点集中在会话恢复性能回归（1.0.74 版本 OOM）、上下文压缩机制对 CAPI 5MB 限制失效、以及终端滚动行为改动带来的体验倒退。** 此外，插件市场注册不持久化、SSH 别名不兼容等细节问题也获得了反馈。

---

## 🚀 版本发布

无新版本发布。

---

## 🔥 社区热点 Issues（10 条精选）

### 1️⃣ [#17 IDE终端面板自动启用 diff 建议](https://github.com/github/copilot-cli/issues/17)  
**状态：已关闭** | 👍 15 | 💬 6  
**摘要**：用户建议 CLI 在 IDE 终端面板中自动启用 diff 功能，提升内联体验。虽已关闭但代表了社区对**深度 IDE 集成**的长期诉求。

### 2️⃣ [#2205 终端渲染：鼠标滚动失效](https://github.com/github/copilot-cli/issues/2205)  
**状态：开放中** | 👍 14 | 💬 13  
**摘要**：最新版本中鼠标滚轮无法滚动查看 Agent 输出历史，转而滚动输入历史，破坏核心交互。用户反馈强烈，需要紧急修复。

### 3️⃣ [#4183 自动压缩未防范 CAPI 5MB 体积极限](https://github.com/github/copilot-cli/issues/4183)  
**状态：开放中** | 👍 10 | 💬 3  
**摘要**：长时间工具密集型会话虽未超模型 token 限制，但序列化后 CAPI 请求体达到 5MB 上限导致永久失败。自动压缩不覆盖此场景，需架构优化。

### 4️⃣ [#1464 技能安装超过 32 个后无法被模型选中](https://github.com/github/copilot-cli/issues/1464)  
**状态：开放中** | 👍 5 | 💬 5  
**摘要**：当安装约 63 个技能时，系统提示显示“仅显示前 32 个技能”，按字母序排在 36 位左右的技能从未被模型调用。核心是 token 限制下的技能选择策略问题。

### 5️⃣ [#1996 无法安装 anthropics/claude-plugins-official 市场](https://github.com/github/copilot-cli/issues/1996)  
**状态：开放中** | 👍 1 | 💬 5  
**摘要**：`copilot plugin marketplace add` 因 `marketplace.json` 架构验证失败而无法安装官方插件市场，影响生态扩展。

### 6️⃣ [#4251 恢复大会话 OOM / 单核 100% 长达 70 分钟（1.0.74 回归）](https://github.com/github/copilot-cli/issues/4251)  
**状态：开放中** | 👍 0 | 💬 0  
**摘要**：从 1.0.73 升级到 1.0.74 后，恢复一个长期存在的大会话导致内存溢出（峰值 RSS 增加 3~4 倍）或 CPU 满载。用户明确隔离为版本回归，**严重阻碍日常工作流**。

### 7️⃣ [#4252 会话退出时覆写 settings.json 中的 model 配置](https://github.com/github/copilot-cli/issues/4252)  
**状态：开放中** | 👍 0 | 💬 0  
**摘要**：会话退出时会将启动时内存中的 `model` 值写回 `~/.copilot/settings.json`，静默覆盖手动编辑或其他会话的配置，导致设置进入“自我永续的陈旧默认值”循环。

### 8️⃣ [#4246 archive_session 超时后遗留大型工作树](https://github.com/github/copilot-cli/issues/4246)  
**状态：开放中** | 👍 0 | 💬 0  
**摘要**：`archive_session` 在拆除大型仓库工作树时超时（60秒），导致会话和工作树残留，占用磁盘空间且阻止分支重用。影响持续集成和长期项目使用。

### 9️⃣ [#4247 插件市场添加成功但未持久化](https://github.com/github/copilot-cli/issues/4247)  
**状态：开放中** | 👍 0 | 💬 0  
**摘要**：`copilot plugin marketplace add` 报告成功，但注册信息从未写入磁盘，后续 `list` 和 `browse` 均报“未找到”。关键的功能完整性缺陷。

### 🔟 [#4248 `/pr` 命令无法识别 SSH 主机别名](https://github.com/github/copilot-cli/issues/4248)  
**状态：开放中** | 👍 0 | 💬 0  
**摘要**：仓库的 origin 远程使用 `~/.ssh/config` 中定义的主机别名时，`/pr` 命令报错“要求连接 github.com 或 *.ghe.com 的远程”。限制常见 SSH 配置用户。

---

## 📦 重要 PR 进展（2 条）

- **[#23 Create monad.yml](https://github.com/github/copilot-cli/pull/23)**（已关闭）  
  创建于 2025-09-25，内容为设计、神秘标准、技术相关，无实质代码变更。

- **[#4228 Withdrawn: incorrect scope for #3534](https://github.com/github/copilot-cli/pull/4228)**（已关闭）  
  提交者因修改了文档而非私有剪贴板运行时实现而撤回，源分支已删除。

> 过去 24 小时无活跃合并或功能型 PR。

---

## 📊 功能需求趋势

从近期 Issue 可提炼出社区最关注的五个方向：

| 趋势 | 代表性 Issue | 说明 |
|------|--------------|------|
| **IDE 深度集成** | #17, #4244 | 在 VS Code 终端面板 / Agent 窗口中支持 `/rename`、自动 diff 等原生 IDE 特性 |
| **会话稳定性与性能** | #4183, #4246, #4251 | 解决大会话恢复 OOM/超时、CAPI 请求体限制、归档遗留问题 |
| **插件/技能生态** | #1464, #1996, #4247 | 优化技能选择策略、修复市场注册不持久、提升插件安装可靠性 |
| **终端交互改进** | #2205, #4241 | 修正滚动行为、密码掩码功能避免干扰 Agent 推理 |
| **配置与兼容性** | #4252, #4248, #4249 | 防止设置静默覆盖、支持 SSH 别名、修复头尾会话上下文泄漏 |

---

## 🎯 开发者关注点

综合近期反馈，开发者普遍遭遇以下痛点和高频需求：

1. **版本回退隐患**：1.0.74 引入的 OOM 回归（#4251）导致用户不敢轻易升级，迫切需要热修复。  
2. **上下文限制成瓶颈**：技能选择受 token 限制（#1464）、CAPI 请求体 5MB 上限（#4183）成为复杂会话的硬伤，自动压缩未覆盖。  
3. **插件市场稳定性极差**：添加成功但未持久化（#4247）、安装第三方市场失败（#1996），严重动摇扩展信心。  
4. **配置随意覆写**：会话退出时覆盖 settings.json（#4252）可能造成协作项目中的配置冲突，需引入保护机制。  
5. **常用命令兼容性不足**：`/pr` 不支持 SSH 别名（#4248）、`/ask` 频繁无返回（#4253）影响日常效率。  

建议团队优先跟进 #2205、#4183、#4251、#4252 等影响面广的 issue，并加强回归测试。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-07-26

**数据来源**: [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)  
**统计周期**: 2026-07-25 ～ 2026-07-26（UTC）

---

## 1. 今日速览

过去 24 小时内未发布新版本，但社区在 **Bug 修复** 和 **跨平台兼容** 方面取得重要进展：三项涉及会话恢复、上下文截断和文件重复上传的关键 PR 已合并；同时一个持续受关注的功能请求（远程控制）仍保持高热度。新提交的 Windows 跨平台测试改进 PR 也显示出社区对多元开发环境的重视。

---

## 2. 版本发布

无新版本发布。

---

## 3. 社区热点 Issues

| ID | 标题 | 状态 | 热度 | 摘要 |
|----|------|------|------|------|
| [#1282](https://github.com/MoonshotAI/kimi-cli/issues/1282) | [enhancement] Feature Request: Remote Control - Continue local sessions from any device | OPEN | 👍 16, 💬 8 | 用户期望能够从手机、平板或浏览器远程继续本地 CLI 会话，实现工作流跨设备无缝切换。该需求自 2 月提出后持续获得社区关注，更新于昨日，表明用户对异地/移动办公场景有强烈诉求。 |
| [#2557](https://github.com/MoonshotAI/kimi-cli/issues/2557) | [bug] Dead Loop | OPEN | 👍 0, 💬 0 | 用户使用 kimi-cli 1.44.0（Kimi Code 订阅版）时遇到死循环问题，导致程序卡死。昨日报出，尚无回应，可能为近期回归 bug 或特定场景触发，需快速排查。 |

**重要性说明**: #1282 反映了用户对 **工作流连续性** 的核心诉求，是 CLI 工具向全场景覆盖的关键功能；#2557 直指稳定性与用户体验，死循环 bug 严重阻碍正常使用，优先级高。

---

## 4. 重要 PR 进展

| ID | 标题 | 状态 | 摘要 |
|----|------|------|------|
| [#2520](https://github.com/MoonshotAI/kimi-cli/pull/2520) | fix(session): align fork/undo context truncation to wire turns | ✅ **已合并** | 修复 fork/undo 操作时上下文截断与 wire turn 不对齐的问题，同时解决了 #1974（slash turns 导致 undo 偏移）及 #2049（fork/undo 后历史记录不匹配）等关联 bug。 |
| [#2519](https://github.com/MoonshotAI/kimi-cli/pull/2519) | fix(app): refresh stale frozen system prompt on session resume | ✅ **已合并** | 修复恢复会话时 `_system_prompt` 被冻结的问题。此前恢复后的会话无法感知新添加的技能（`~/.kimi/skills/`）或对 `AGENTS.md` 的修改，此 PR 确保每次恢复都重新读取系统提示。 |
| [#2518](https://github.com/MoonshotAI/kimi-cli/pull/2518) | fix(web): persist uploads .sent marker so restarts do not re-send files | ✅ **已合并** | 修复 `kimi web` 模式下服务重启后重复发送已上传文件（包括图片）的问题。通过持久化 `.sent` 标记，避免对话被历史上传污染。 |
| [#2558](https://github.com/MoonshotAI/kimi-cli/pull/2558) | fix(tests): improve Windows cross-platform test compatibility | 🔄 **开放中** | 解决测试套件在 Windows 上的两个兼容性问题：`test_background_tools.py` 中 `Path.write_text()` 自动转换换行符导致断言失败；以及另一处路径/编码问题。PR 规模 < 100 行，对 Linux/macOS/Windows 全平台 CI 具有重要意义。 |

**要点分析**: 昨日合并的三个 PR 均来自核心贡献者 Nas01010101，覆盖了会话管理、系统提示刷新、Web 端文件重传等关键稳定性问题；新提交的 #2558 则体现了社区对跨平台体验的重视，有助于降低 Windows 开发者使用门槛。

---

## 5. 功能需求趋势

从近期 Issue 和 PR 讨论中可以提炼出以下社区关注的功能方向：

- **远程控制/跨设备会话延续** (#1282) – 热度最高，用户期望 CLI 像云 IDE 一样支持从任意设备接管本地会话。
- **会话持久性与状态一致性** – 多项 PR 针对会话恢复时的上下文冻结、文件重复上传等痛点，说明用户对长时间/跨启动会话的可靠性要求日益提高。
- **技能与配置文件的热更新** – #2519 修复了恢复后技能不生效的问题，侧面反映出社区对动态调整开发环境（如 `AGENTS.md`）的普遍需求。
- **跨平台兼容性** – #2558 及之前 PR 持续改进 Windows 测试与运行，表明非 Linux/macOS 用户群体正在扩大。

---

## 6. 开发者关注点

根据社区反馈中的高频痛点，目前开发者最关心的几项：

| 痛点 | 对应 Issue/PR | 影响 |
|------|---------------|------|
| **死循环导致 CLI 卡死** | #2557 | 严重影响日常使用，需要快速定位复现路径并修复。 |
| **Web 模式重启后重复上传文件** | #2518 (已修复) | 之前导致对话历史混乱，用户需手动清理，体验差。 |
| **恢复会话后不应用新技能/AGENTS.md 修改** | #2519 (已修复) | 阻碍用户在工作流中动态调整助手行为。 |
| **Windows 环境下测试失败/行为差异** | #2558 | 导致 Windows 开发者难以参与贡献或稳定使用，需持续改善 CI。 |

---

> **总结**: 过去 24 小时社区以 **稳定性修复** 为主，三项核心 PR 合入有效提升了会话可靠性和跨平台体验；远程控制功能仍是最受期待的新能力。建议关注 #2557 的后续进展，并持续投入对 Windows 兼容性的测试覆盖。

---

*本日报由 AI 辅助生成，数据截止 2026-07-26 23:59 UTC。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-07-26

## 今日速览

昨日 OpenCode 社区活跃度较高，多起高影响 Bug 持续发酵：桌面端 v1.18.5 更新后出现项目关闭界面冻结、重加载报错，TUI 区域渲染异常等问题集中爆发。与此同时，社区对旧版布局回归的呼声高涨（#37012 获 33 条讨论），核心团队开始接纳“roll-call”连通性测试、TUI 启动进度条等实用新功能。

## 社区热点 Issues（10 条）

1. **#30086 [OPEN] 新版 OpenCode 出现高 CPU 占用**  
   👤 DenisSilent | 评论 36 | 👍 19  
   📌 用户反馈过去 7 天内 CPU 飙升，从能同时运行 10 个会话降为 3 个即卡顿。影响广泛，已持续近两月未修复。  
   🔗 https://github.com/anomalyco/opencode/issues/30086

2. **#37012 [OPEN] 请求保留旧版布局选项**  
   👤 darkine24th | 评论 33 | 👍 31  
   📌 社区对新布局学习曲线不满，希望正式提供“经典布局”切换。获得极高点赞，代表用户对 UI 改动的核心诉求。  
   🔗 https://github.com/anomalyco/opencode/issues/37012

3. **#15760 [CLOSED] TUI 终端内鼠标选词不可靠**  
   👤 jdanbrown | 评论 9  
   📌 拖拽选择时经常失败，需重复操作。虽已关闭，但对终端交互体验有参考价值，且关闭前仍无法自动复现。  
   🔗 https://github.com/anomalyco/opencode/issues/15760

4. **#38789 [OPEN] Desktop v1.18.5 重载项目报 UnsupportedContentType 错误**  
   👤 Start-Gao | 评论 7  
   📌 更新后启动即弹错误，根源为客户端 SDK 类型不兼容。影响升级用户正常使用。  
   🔗 https://github.com/anomalyco/opencode/issues/38789

5. **#38801 [OPEN] TUI 反复打印 "exiting loop" 无法正常使用**  
   👤 josephtingiris | 评论 6  
   📌 用户屡次尝试 TUI 均被该消息打断，配合某些 API 时需手动设置 `step=80` 才能暂时绕过，体验极差。  
   🔗 https://github.com/anomalyco/opencode/issues/38801

6. **#31217 [OPEN] TUI 输入框按回车后内容消失但不提交**  
   👤 Code-MonkeyZhang | 评论 6  
   📌 中英文均受影响，仅斜杠命令正常。输入被“吞掉”且无错误提示，严重影响日常使用。  
   🔗 https://github.com/anomalyco/opencode/issues/31217

7. **#32613 [OPEN] 小米 MiMo 模型拒绝 list-type 工具消息**  
   👤 Cdddo | 评论 3  
   📌 使用浏览器截图等工具返回图片内容时，小米模型返回 400 错误。表明跨厂商兼容性仍需加强。  
   🔗 https://github.com/anomalyco/opencode/issues/32613

8. **#38844 [OPEN] 项目列表关闭按钮导致界面冻结**  
   👤 tryonce-1 | 评论 3  
   📌 点击已存在项目的关闭按钮后 UI 完全卡死，无法操作。配合 #38885 共同反映桌面端项目管理存在严重缺陷。  
   🔗 https://github.com/anomalyco/opencode/issues/38844

9. **#38791 [OPEN] 导入会话因消息 ID 排序问题导致循环永不退出**  
   👤 dkindlund | 评论 3  
   📌 `runLoop` 依赖字符串比较确定轮次结束，当导入第三方会话时 ID 非时间序，造成死循环直至超时。影响数据迁移用户。  
   🔗 https://github.com/anomalyco/opencode/issues/38791

10. **#36677 [OPEN] V2 服务器长时间运行后内存泄漏**  
    👤 opencode-agent[bot] | 评论 3  
    📌 长期闲置的 `opencode2 serve` 进程持续分配内存，占用超过 1GB RSS。影响 2.0 分支稳定性。  
    🔗 https://github.com/anomalyco/opencode/issues/36677

## 重要 PR 进展（10 条）

1. **#38906 [OPEN] 为 TUI 启动屏幕增加进度条**  
   👤 mrraghur | 新 PR  
   📌 分阶段展示终端、设置、工作区、主题、插件的加载进度，解决启动时界面“假死”问题（关闭 #36195）。  
   🔗 https://github.com/anomalyco/opencode/pull/38906

2. **#38433 [OPEN] 添加 roll-call 命令**  
   👤 cbrunnkvist | 新功能  
   📌 测试文本模型连通性与延迟，便于快速诊断网络/模型问题。关闭 #13711。  
   🔗 https://github.com/anomalyco/opencode/pull/38433

3. **#38903 [OPEN] 插件：通过 codexApiEndpoint 选项路由 ChatGPT OAuth 推理**  
   👤 patrickpassosb | 新功能  
   📌 允许用户自定义推理端点，为自建代理/合规场景提供灵活配置。  
   🔗 https://github.com/anomalyco/opencode/pull/38903

4. **#36550 [OPEN] 修复 TUI 提问模式下的键盘死锁**  
   👤 maharshi365 | Bug 修复  
   📌 `QuestionPrompt` 组件因双重 `useBindings` 互斥条件导致键盘输入锁定，修复后支持正常编辑/确认。关闭 #36382、#30517。  
   🔗 https://github.com/anomalyco/opencode/pull/36550

5. **#29789 [OPEN] 添加动态工作流（Claude Code 功能移植）**  
   👤 VasyaYovbak | 新功能  
   📌 支持项目本地工作流，TUI 中通过 `/workflow` 运行，并添加 `/workflows` 查看。关闭 #29059。  
   🔗 https://github.com/anomalyco/opencode/pull/29789

6. **#38901 [CLOSED] 推迟自动上下文压缩到下一次模型输入**  
   👤 wishiweresaitama | Bug 修复  
   📌 原实现在助手步骤后立即压缩，可能导致不必要负担。改为延后至下次模型输入时执行，提升响应流畅度。  
   🔗 https://github.com/anomalyco/opencode/pull/38901

7. **#33927 [CLOSED] 修复仓库包含数千个未跟踪文件时 VCS 崩溃**  
   👤 youtsuhodev | Bug 修复  
   📌 当 Untracked 文件超过 1200 个时应用崩溃，该 PR 通过优化 Git 命令避免 OOM 与死锁。  
   🔗 https://github.com/anomalyco/opencode/pull/33927

8. **#33912 [CLOSED] 使用 GITHUB_TOKEN 认证 GitHub 版本检查**  
   👤 tangtaizong666 | Bug 修复  
   📌 修复离线/限速环境下 `opencode upgrade` 无法检测新版本的问题，避免 GitHub API 限流。  
   🔗 https://github.com/anomalyco/opencode/pull/33912

9. **#38200 [OPEN] 添加 Solidity 文件类型与语法高亮**  
   👤 ConceptCodes | 新功能  
   📌 为智能合约开发者提供原生高亮支持，扩大 OpenCode 在 Web3 领域的适用性。  
   🔗 https://github.com/anomalyco/opencode/pull/38200

10. **#33943 [CLOSED] 恢复时间线滚动位置**  
    👤 Brendonovich | Bug 修复  
    📌 在标签页切换、重载后自动恢复会话时间线滚动位置，提升长对话的浏览体验。  
    🔗 https://github.com/anomalyco/opencode/pull/33943

## 功能需求趋势

- **UI 与交互**：旧版布局保留（#37012）、字体大小调节（#38884）、桌面版 UI 直观性改进（#38875）、TUI 状态栏显示会话名（#38881）、聊天界面“回到顶部”按钮（#38876）。
- **付费与合规**：年费套餐与发票支持（#20252），反映企业用户需求。
- **跨平台与兼容性**：Windows 离线安装缺少 ripgrep（#34442）、LAN 内 Ollama 连接问题（#38854）、WSL 项目自动注册失败（#37096）。
- **模型与工具**：小米 MiMo 模型拒绝图片工具消息（#32613）、动态工作流（#29789）、Solidity 高亮（#38200）。
- **性能与健壮性**：V2 服务器内存泄漏修复（#36677）、长时间运行后的滚动与刷新稳定性（#37534）。

## 开发者关注点

- **稳定性滑坡**：v1.18.5 更新后大量用户遭遇项目关闭冻结、重载报错、界面不刷新，升级体验欠佳。
- **TUI 可用性差**：输入框吞回车（#31217）、鼠标选词失败（#15760）、“exiting loop”反复出现（#38801）等 Bug 长期存在，令新用户望而却步。
- **启动与退出异常**：启动后界面假死（#38906 背景）、关闭按钮导致无响应（#38844）、空路径项目无法删除（#38895）。
- **第三方工具链依赖**：Windows 离线安装缺失核心工具（#34442）使部分用户无法使用核心 skill。
- **模型提供商兼容**：非标准 API（如小米、自定义 OAuth 端点）的适配仍存在门槛，需社区持续贡献驱动。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# 🥧 Pi 社区动态日报 | 2026-07-26

## 今日速览

1. **Pi v0.82.1 发布**，正式支持 Claude Opus 5（含自适应思考、推理配置等），同时修复多项 TUI 性能和兼容性问题。
2. **社区最热议题**：Copilot Enterprise 用户无法使用上下文压缩（#6768，👍11），以及 TUI 在流式输出时锁死单核（#6665）获开发者重点关注。
3. **PR 侧**：扩展 API 新增上下文清除回调、OpenRouter 登录支持手动粘贴重定向 URL、及多平台路径修复等修补已合并或进入审查。

---

## 版本发布

### v0.82.1 (2026-07-26)

**主要特性**  
- **Claude Opus 5**：现已可通过 Anthropic 和 Amazon Bedrock 使用，支持自适应思考（包括 `xhigh` 级别）、推理配置（inference profiles）及提示缓存（prompt caching）。详细配置见 [Providers 文档](https://github.com/earendil-works/pi/blob/v0.82.1/packages/coding-agent/docs/providers.md#api-keys)。
- **Anthropic 相关改进**：底层 API 集成增强，适配 Opus 5 的强制自适应思考要求（需在 Bedrock 上正确设置）。

> 完整 Release 说明见 [GitHub Releases](https://github.com/earendil-works/pi/releases/tag/v0.82.1)。

---

## 社区热点 Issues（10 则）

### 1. 🔥 [bug] Copilot Enterprise 无法压缩上下文  
**#6768** | 作者: MojangPlsFix | **OPEN** | 👍 11 | 💬 13  
**链接**: [Issue #6768](https://github.com/earendil-works/pi/issues/6768)  
**摘要**: 使用 Copilot Enterprise 许可证调用 `compact` 时，OpenAI 兼容端点返回 `421 Misdirected Request`，Anthropic 模型同样报错。社区高度关注，已确认是认证头/路由机制缺失，亟需修复。  

### 2. ⚡ [bug] TUI 流式输出时单核 100%  
**#6665** | 作者: axelbaumlisto | **OPEN (inprogress)** | 💬 7  
**链接**: [Issue #6665](https://github.com/earendil-works/pi/issues/6665)  
**摘要**: 长会话中，模型流式输出时 TUI 渲染线程耗尽一个 CPU 核心。根本原因：`Markdown.render` 对每块输出重复重建 `Intl.Segmenter`（未缓存），且分段操作未做增量优化。已标记为进行中。  

### 3. 🖥️ [bug] TUI 确认对话框高度超屏幕时闪烁  
**#5990** | 作者: dipankardas011 | **OPEN (inprogress)** | 👍 3 | 💬 5  
**链接**: [Issue #5990](https://github.com/earendil-works/pi/issues/5990)  
**摘要**: 当 `ctx.ui.confirm()` 对话框内容超过终端高度时，屏幕持续重绘闪烁。缩小终端窗口可复现。影响日常交互流畅度。  

### 4. 🔄 [bug] 压缩后 Pi 不继续执行  
**#7020** | 作者: dpetrou-continua | **OPEN (inprogress)** | 👍 1 | 💬 4  
**链接**: [Issue #7020](https://github.com/earendil-works/pi/issues/7020)  
**摘要**: 部分长会话（"协调器"模式）在压缩后卡住，无法恢复对话。怀疑与压缩算法的状态清理或消息序列完整性有关。  

### 5. 🐧 [bug] WSL 下 Windows 绝对路径处理错误  
**#7064** | 作者: lionkor | **OPEN** | 💬 3  
**链接**: [Issue #7064](https://github.com/earendil-works/pi/issues/7064)  
**摘要**: 在 WSL2 中，`read`/`write`/`edit` 工具因路径转换问题频繁失败，被迫回退到命令行全量写入。影响跨平台日常使用。  

### 6. ⚙️ [bug] llama.cpp 默认 Provider/Model 启动时不生效  
**#6948** | 作者: xwkgch | **CLOSED** | 💬 4  
**链接**: [Issue #6948](https://github.com/earendil-works/pi/issues/6948)  
**摘要**: 即使 `settings.json` 正确配置了 `defaultProvider` 和 `defaultModel`，启动后会话仍使用空模型，需手动切换。根本原因：异步模型刷新与初始化存在竞态条件。已通过 PR #7072 修复。  

### 7. ✂️ [bug] 压缩摘要生成可能被中途截断  
**#7048** | 作者: donwellsav | **OPEN (last-read)** | 💬 3  
**链接**: [Issue #7048](https://github.com/earendil-works/pi/issues/7048)  
**摘要**: `generateSummary` 未检查 `stopReason === 'length'`，当输出达到 token 上限时，摘要被截断并写入（mid-word）。可能导致后续恢复时信息不完整。  

### 8. 🔙 [bug] 升级 v0.82.0 后 `bash` 工具验证持续失败  
**#7069** | 作者: kexul | **CLOSED (no-action)** | 💬 3  
**链接**: [Issue #7069](https://github.com/earendil-works/pi/issues/7069)  
**摘要**: 升级后每个 bash 调用均报 "Validation failed for tool 'bash'"，回滚旧版本后正常。虽最终标记为 no-action（可能是临时兼容性问题），但暴露了版本间 API 变更的兼容风险。  

### 9. ⏳ [bug] 任务完成后仍显示 "Working..."  
**#7077** | 作者: rajinder-yadav | **CLOSED (no-action)** | 💬 3  
**链接**: [Issue #7077](https://github.com/earendil-works/pi/issues/7077)  
**摘要**: 状态显示 "⠙ Working..." 在任务完成后不刷新，用户无法判断是否卡住。虽最终关闭，但反映了状态机与渲染不同步的常见痛点。  

### 10. 💰 [bug] OpenRouter Inkling 输出上限显示 4K（实际应更高）  
**#7115** | 作者: possibilities | **CLOSED (untriaged)** | 💬 2  
**链接**: [Issue #7115](https://github.com/earendil-works/pi/issues/7115)  
**摘要**: 模型菜单显示 `thinkingmachines/inkling` 输出上限仅 4.1K，但连续 8 次因 `stopReason: "length"` 终止均卡在 4096 条。推测聚合输出元数据为 null 时 fallback 到最小值，误导用户。  

---

## 重要 PR 进展（10 则）

### 1. 🆕 feat: 扩展上下文清除回调  
**#7118** | 作者: wolfgangmeyers | **CLOSED**  
**链接**: [PR #7118](https://github.com/earendil-works/pi/pull/7118)  
**摘要**: 扩展此前只能请求压缩，现新增 `clear` 回调，允许扩展直接清除会话上下文而不生成摘要（Mecha 等工具可用）。  

### 2. 🐛 fix(tui): 超宽行截断而非崩溃  
**#7116** | 作者: ydeng11 | **CLOSED**  
**链接**: [PR #7116](https://github.com/earendil-works/pi/pull/7116)  
**摘要**: 当某一行超出终端宽度时，`doRender()` 直接抛出未处理异常导致整个会话终止。改为截断显示，避免崩溃。  

### 3. 🌐 feat: OpenRouter OAuth 登录支持手动粘贴回调 URL  
**#7114** | 作者: rgarcia | **OPEN**  
**链接**: [PR #7114](https://github.com/earendil-works/pi/pull/7114)  
**摘要**: 远程/SSH 环境下浏览器无法访问主机 `127.0.0.1`，现在在启动 loopback 回调服务器的同时，允许用户手动粘贴回调链接完成登录（类似 Claude/Codex 流程）。  

### 4. 🪟 fix: Windows 路径分隔符在 footer 中显示不正确  
**#7112** | 作者: IKEASven69 | **CLOSED**  
**链接**: [PR #7112](https://github.com/earendil-works/pi/pull/7112)  
**摘要**: `formatCwdForFooter` 使用操作系统原生分隔符，导致 Windows 下 footer 显示 `~\project` 而非 `~\\project`（注意转义）。改为始终使用 `/` 确保一致性。  

### 5. 🧩 feat: 支持持久化外部工具结果  
**#7111** | 作者: MishaBear94 | **CLOSED**  
**链接**: [PR #7111](https://github.com/earendil-works/pi/pull/7111)  
**摘要**: 工具现可返回 `defer: true`，Pi 将挂起工具调用并持久化一个 JSONL 待定标记，等外部进程返回结果后再继续会话。适用于长时间异步任务。  

### 6. 🧼 fix: 防止启动后会话切换导致消息重复  
**#7110** | 作者: yzhg1983 | **OPEN**  
**链接**: [PR #7110](https://github.com/earendil-works/pi/pull/7110)  
**摘要**: 在启动时切换会话可能导致重复消息被写入。修复了会话加载顺序和消息去重逻辑。  

### 7. 🚫 fix: 拒接重叠的用户 bash 命令  
**#7091** | 作者: yzhg1983 | **CLOSED**  
**链接**: [PR #7091](https://github.com/earendil-works/pi/pull/7091)  
**摘要**: RPC 层现检测并拒绝同时来自用户的两个 bash 命令，避免竞争条件导致状态混乱。  

### 8. 🛑 feat: 支持并发用户 bash 取消  
**#7103** | 作者: yzhg1983 | **OPEN**  
**链接**: [PR #7103](https://github.com/earendil-works/pi/pull/7103)  
**摘要**: 补充 PR #7091 的逆向场景：允许用户在正在执行的 bash 命令上发送取消信号（Ctrl+C），但仍保持单命令串行语义。  

### 9. 🆕 feat(ai): 支持 Amazon Bedrock 上的 Claude Opus 5  
**#7081** | 作者: unexge | **CLOSED**  
**链接**: [PR #7081](https://github.com/earendil-works/pi/pull/7081)  
**摘要**: 配置 Claude Opus 5 强制启用自适应思考（required），同时修复 Bedrock Provider 的错误消息显示（隐藏详情，只展示简洁提示）。  

### 10. 🏎️ fix: 缓存 llama.cpp 模型目录  
**#7072** | 作者: davidbrai | **CLOSED**  
**链接**: [PR #7072](https://github.com/earendil-works/pi/pull/7072)  
**摘要**: 修复 #6948：llama.cpp 默认 Provider/Model 不生效的根因——模型目录获取未缓存且异步加载与启动顺序冲突。现加入缓存并修正刷新时机。  

---

## 功能需求趋势

从近期 Issues 和 PR 中，社区关注方向集中在以下五个领域：

- 🔌 **扩展性与自定义**  
  - 开放压缩清除回调（#7118）  
  - 允许扩展自定义清空上下文而不生成摘要（#7119）  
  - 可配置上下文截断限制（#7066）  
  - 转发 session-affinity 头给自定义提供商（#7107/#7108）  

- 🧠 **新模型支持与集成**  
  - Claude Opus 5（已支持，v0.82.1）、OpenRouter Inkling（费用显示修复）、xAI Grok-4.5 长上下文费用（#7102）  
  - OpenRouter OAuth 手动粘贴流程（#7078, #7114）  

- ⚡ **性能与稳定性**  
  - TUI 渲染性能（#6665, #5990）  
  - 上下文压缩可靠性（#7020, #7048）  
  - 模型切换时的上下文窗口验证（#7065, #7067）  

- 🖥️ **跨平台与兼容性**  
  - WSL 路径修复（#7064）  
  - Windows 路径分隔符统一（#7112）  
  - 非标准 OpenAI 兼容端点（#7105）  

- 🛡️ **安全与可靠性**  
  - CVE-2026-14257 依赖升级（#7090）  
  - 工具调用验证失败不再触发重复重试（#7056）  
  - 重叠用户命令拒绝（#7091）  

---

## 开发者关注点

- **Copilot Enterprise 用户被锁定**：压缩功能完全不可用（#6768），是目前最高赞未解决问题。  
- **TUI 渲染性能仍是核心瓶颈**：流式输出时 CPU 100%（#6665）和对话框闪烁（#5990）直接影响日常使用体验。  
- **模型切换缺乏安全网**：切换后既不检查上下文窗口大小，也不转换思考块，常导致无声失败（#7065, #7067）。  
- **远程/SSH 登录体验差**：OpenRouter OAuth 依赖本地回调服务器，无法在 headless 环境完成（#7078, #7114）。  
- **状态显示误导**：任务完成后仍显示 "Working..."（#7077）和压缩后卡死（#7020）削弱用户对工具的信任。  
- **默认配置不生效**：llama.cpp 的 defaultProvider 因竞态条件导致启动时无效（#6948），虽已修复，但暴露了异步初始化架构的脆弱性。  

---  
*数据截止 2026-07-26 UTC，来源：GitHub earendil-works/pi 仓库。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-07-26)

## 今日速览

- 夜间版 `v0.21.0-nightly` 发布，修复了 CLI 时间显示时区偏移问题，并重构了自动修复扩展逻辑。
- 社区围绕 **Sandbox 运行时探测**、**Math 渲染一致性**、**MCP 集成** 以及 **子代理模型等级选择** 展开热烈讨论，多个相关 PR 已提交。
- 一个 **P1 级 Bug**（QQBot 会话恢复）已被快速修复，另有 **两个 P2 级 Bug**（DashScope thinking 模式下 tool_choice 被拒、Plan 模式退出通知缺失）也通过 PR 关闭。

## 版本发布

### [v0.21.0-nightly.20260726.9d19eafa9](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.0-nightly.20260726.9d19eafa9)

- **fix(cli)**: 在测量洞察（insight）天数/小时数时全线使用本地时间（之前部分地方误用 UTC），确保用户看到的“x 小时前”等信息准确。
- **refactor(autofix)**: 扩展自动修复模块的内部重构（细节稍后补充）。

## 社区热点 Issues

### 1. [#7732](https://github.com/QwenLM/qwen-code/issues/7732) Sandbox 运行时仅凭 PATH 选择，导致无法使用的 Docker 掩盖了可用的 Podman
- **优先级**: P2 | **状态**: OPEN
- **摘要**: 如果安装了 Docker Desktop 但未启动，或用户不在 docker 组，`getSandboxCommand()` 仍会选中 Docker 而忽略可用的 Podman。社区要求先进行运行时探活（如执行 `version`）再决定选用哪个。
- **社区反应**: 已有 PR [#7734](https://github.com/QwenLM/qwen-code/pull/7734) 正在解决此问题。

### 2. [#7684](https://github.com/QwenLM/qwen-code/issues/7684) Command 模式下 statusline 多行时输入法候选框位置错乱
- **优先级**: P2 | **状态**: OPEN (欢迎 PR)
- **摘要**: macOS 上使用中文输入法时，如果底部 statusline 显示多行，输入法候选框会远离光标所在位置，严重影响编码体验。
- **社区反应**: 该问题与终端渲染行数感知有关，已有相关修复 PR [#7711](https://github.com/QwenLM/qwen-code/pull/7711) 提交。

### 3. [#7697](https://github.com/QwenLM/qwen-code/issues/7697) VS Code 扩展无法连接 Unity MCP，但 Claude Code 可以
- **优先级**: P2 | **状态**: OPEN (欢迎 PR)
- **摘要**: Qwen Code 的 VS Code 扩展在调用 Unity MCP 工具时失败，而 Claude Code 能正常工作。用户怀疑是 MCP 客户端实现差异。
- **社区反应**: 目前缺乏复现细节，标签为 `need-information`。若修复将改善游戏开发场景的集成能力。

### 4. [#7719](https://github.com/QwenLM/qwen-code/issues/7719) CLI 不显示 Token 用量或百分比
- **优先级**: P3 | **状态**: OPEN
- **摘要**: 用户期望在 CLI 界面中能够实时看到当前会话已消耗的 Token 数量及占配额的比例，但当前完全不可见。
- **社区反应**: 该功能需求投票数较高，属于用户体验增强。无 PR 认领。

### 5. [#7712](https://github.com/QwenLM/qwen-code/issues/7712) 主分支 CI 失败：E2E 测试
- **优先级**: P2 | **状态**: OPEN (标签 `status/ready-for-agent`)
- **摘要**: main 分支上的一次 CI 运行失败，E2E 测试未通过。机器人自动创建了 issue，并标记为可自动修复。
- **社区反应**: 自动修复流程已触发，但尚未关闭。可能影响夜间版发布。

### 6. [#7717](https://github.com/QwenLM/qwen-code/issues/7717) 连续提及多个 Skill 时自动补全失效
- **优先级**: P2 | **状态**: OPEN (欢迎 PR)
- **摘要**: 当在同一行或连续行中输入 `/skill1 /skill2` 时，只有第一个 Skill 触发自动补全，后续均无效。
- **社区反应**: 已有报告指出该行为在最近更新后出现，开发者正在排查解析逻辑。

### 7. [#7713](https://github.com/QwenLM/qwen-code/issues/7713) Qwen Code v0.21.0 界面输入时终端自动上滚
- **优先级**: P2 | **状态**: OPEN (需分类)
- **摘要**: 每输入一个字符，终端自动向上滚动一行。根本原因是提示行高度计算偏差（off-by-one）。
- **社区反应**: 该问题与 [#7684](https://github.com/QwenLM/qwen-code/issues/7684) 的 IME 问题可能有共同根因，影响 CLI 日常使用。

### 8. [#7659](https://github.com/QwenLM/qwen-code/issues/7659) thinking 模式下 `tool_choice: "required"` 被 DashScope 拒绝
- **优先级**: P2 | **状态**: 已关闭 (通过 PR #7661 修复)
- **摘要**: 当模型启用 thinking 模式时，DashScope 不允许 `tool_choice: "required"`，导致记忆 recall 等强制工具调用失败。PR #7661 现已合并，在 thinking 模式下跳过强制工具选择。
- **社区反应**: 修复快速，获得社区正面反馈。

### 9. [#7585](https://github.com/QwenLM/qwen-code/issues/7585) 提议：添加直接外部上下文提供者（Direct External Context Provider Profile）
- **优先级**: P3 | **状态**: OPEN (需讨论)
- **摘要**: 建议作为 Qwen Code 扩展，允许一个 CLI 进程从管理员绑定的外部内存/知识服务中检索仓库共享上下文，而不修改 Qwen Core。
- **社区反应**: 讨论中，涉及 MCP 集成和扩展架构。若实现可大幅提升多仓库协作场景。

### 10. [#7685](https://github.com/QwenLM/qwen-code/issues/7685) 子代理生成时支持模型等级选择
- **优先级**: P3 | **状态**: OPEN
- **摘要**: 为 `agent` 工具增加 `model` 参数，允许 AI 选择 small/medium/high/super 等模型等级，子代理可使用不同规格模型。
- **社区反应**: 已出现对应 PR [#7702](https://github.com/QwenLM/qwen-code/pull/7702)，社区对灵活成本控制方案兴趣浓厚。

## 重要 PR 进展

### 1. [#7734](https://github.com/QwenLM/qwen-code/pull/7734) fix(cli): sandbox 运行时选择前先探活
- **作者**: harjothkhara
- **摘要**: 在 `getSandboxCommand()` 中，对每个候选运行时（Docker/Podman）执行 `version` 命令确认守护进程可达，避免不可用的 Docker 掩盖可用的 Podman。
- **状态**: OPEN | **关联 Issue**: [#7732](https://github.com/QwenLM/qwen-code/issues/7732)

### 2. [#7710](https://github.com/QwenLM/qwen-code/pull/7710) feat(triage): 增加沙箱化的 `/verify` 深度验证通道
- **作者**: wenshao
- **摘要**: 在 Triage 流程中新增 on-demand 深度验证：通过 `/verify` 标记，自动对 PR 进行构建测试、空值校验、无 mock 线缆 oracle 对比等，提升审查质量。
- **状态**: OPEN | **作用**: 提高 CI 自动化水平。

### 3. [#7702](https://github.com/QwenLM/qwen-code/pull/7702) feat(core): 子代理生成时支持模型等级选择
- **作者**: yiliang114
- **摘要**: 实现 Issue #7685，为 `agent` 工具添加 `model` 参数，支持 small/medium/high/super 等级，用户可在 `settings.json` 中定义映射。
- **状态**: OPEN | **社区期待**: 成本与性能灵活调配。

### 4. [#7731](https://github.com/QwenLM/qwen-code/pull/7731) feat(web-shell): 添加 Git 分支选择器、提交对话框和创建 PR 流程
- **作者**: wenshao
- **摘要**: 在 Web Shell 的 Git 工作区中实现类似 IntelliJ 的分支切换器、提交对话框和 PR 创建流程，提升 Web UI 的 Git 操作体验。
- **状态**: OPEN | **影响**: Web Shell 用户。

### 5. [#7724](https://github.com/QwenLM/qwen-code/pull/7724) fix(web-shell): 允许在无会话的新任务中执行 shell 命令
- **作者**: wenshao
- **摘要**: 当用户在新任务中直接输入 `!` shell 命令时，不再显示“No active session”，而是懒创建会话后执行。
- **状态**: OPEN | **修复**: 提升新任务上手流畅度。

### 6. [#7714](https://github.com/QwenLM/qwen-code/pull/7714) feat(memory): 在 Forked Dream 中保护 pinned 文件
- **作者**: destire-mio
- **摘要**: 实现 `pinned/` 目录（只读内存文件），禁止 Dream 合并时修改/删除 pinned 文件，同时保持递归索引。
- **状态**: OPEN | **关联 Issue**: [#6801](https://github.com/QwenLM/qwen-code/issues/6801)

### 7. [#7711](https://github.com/QwenLM/qwen-code/pull/7711) fix(cli): 保持 IME 光标在 footer 更新后对齐
- **作者**: water-in-stone
- **摘要**: 当多行 statusline 触发新帧时，确保终端硬件光标与渲染输入光标对齐，修复输入法候选框偏移问题。
- **状态**: OPEN | **关联 Issue**: [#7684](https://github.com/QwenLM/qwen-code/issues/7684)

### 8. [#7661](https://github.com/QwenLM/qwen-code/pull/7661) fix(core): 避免在 DashScope thinking 模式下要求强制工具
- **作者**: hogeheer499-commits
- **摘要**: 当 DashScope 启用 thinking 时，不再发送 `tool_choice: "required"`，改为返回错误或不传该参数，由模型自行决定。
- **状态**: **已关闭 (merged)** | **关联 Issue**: [#7659](https://github.com/QwenLM/qwen-code/issues/7659)

### 9. [#7652](https://github.com/QwenLM/qwen-code/pull/7652) test(cli): 覆盖虚拟列表底部卡住行为
- **作者**: jay666mnj
- **摘要**: 为终端中虚拟列表滚动到末尾时的稳定性添加单元测试，防止滚动行为退化。
- **状态**: OPEN | **质量提升**

### 10. [#7620](https://github.com/QwenLM/qwen-code/pull/7620) fix(web-shell): 在 parseAnsi 中解析 256 色和真彩色 SGR 序列
- **作者**: chinesepowered
- **摘要**: 修复 web shell 中 ANSI 转义序列解析器未能正确处理 `38;5;...`、`38;2;...` 扩展颜色参数的问题。
- **状态**: OPEN | **影响**: 终端输出渲染准确性。

## 功能需求趋势

从过去24小时的 Issues 和 PR 中可以提炼出以下几个社区高度关注的功能方向：

1. **MCP 集成增强** – 用户要求更好的 MCP 提供者支持（Unity MCP、外部上下文提供者），特别是远程 OAuth 认证和回调转发问题。
2. **终端与 UI 体验** – 输入法对齐、多行 statusline、Token 用量显示、命令补全改进、虚拟列表滚动稳定性等成为高频话题。
3. **模型选择与成本控制** – 子代理模型等级选择、不同任务使用不同规格模型的功能正在被积极开发，体现了社区对灵活性与费用的重视。
4. **内存与知识管理** – `pinned/` 只读内存文件、Dream 合并保护、外部知识服务连接等需求，显示了用户对长期上下文安全性的诉求。
5. **Git 与代码审查工具** – Web Shell 中的 Git 分支管理器、CI 深度验证通道、Review 变异测试等新功能不断涌现，社区希望将更多开发流程集成到 Qwen Code 中。

## 开发者关注点

- **高频 Bug 类型**：
  - 终端渲染相关（输入法错位、界面滚动）是近期最困扰用户的痛点，涉及多行 statusline 和 IME 交互。
  - Sandbox 运行时探测逻辑过于简单，导致 Docker 误选问题引起多人共鸣。
  - Skill 自动补全在连续输入时失效，影响日常效率。
- **集成兼容性**：
  - VS Code 扩展中 Unity MCP 连接失败，表明 MCP 客户端实现与特定服务端存在不一致。
  - DashScope thinking 模式与强制工具调用的冲突已被修复，但类似 provider 适配问题可能继续出现。
- **可观测性**：
  - 用户强烈要求 CLI 中显示 Token 消耗详情，以便监控成本，目前该功能缺失。
- **CI 稳定性**：
  - E2E 测试偶发失败，正尝试通过切换到 fake OpenAI server 去抖动，并增加自动检测机制。

> 数据来源：GitHub [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) 仓库，采集时间 2026-07-26 UTC。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-07-26

## 今日速览

过去24小时内，CodeWhale（DeepSeek TUI 项目）虽无新版本发布，但社区活跃度极高：3个关键 Bug（模型解析忽略配置、非 DeepSeek 模型验证失败、macOS 水下 Shell 兼容）被紧急修复或暴露；同时工作流运行时、插件注册表、多语言本地化等 v0.9.2 功能模块持续推进，12 个性能优化 Issue 仍处于待处理状态。贡献者生态迎来 5 位新成员被正式记录。

## 社区热点 Issues

1. **[#4520] 配置化 Token 分解显示**  
   `v0.9.2` 用户希望在头部显示输入/缓存命中/输出 Token 的详细分解，而非仅累计总数。社区评论认为默认简化的同时应保留可选详细模式，UI 团队已标记 `agent-in-progress`。  
   [链接](https://github.com/Hmbown/CodeWhale/issues/4520)

2. **[#4831] 测试套件间歇写入真实配置文件**  
   全量测试在两次运行中因 `allow_shell_save` 波动产生不同结果，Developer 的 `~/.codewhale/config.toml` 被意外修改。该问题已被关闭，但揭示了测试隔离的潜在风险。  
   [链接](https://github.com/Hmbown/CodeWhale/issues/4831)

3. **[#2743] 适配 Claude Code 技能生态**  
   用户希望 CodeWhale 能原生导入 Claude Code 的技能（skill），而非依赖二次转写。社区讨论强调需要建立兼容层，但尚无明确实现路径。  
   [链接](https://github.com/Hmbown/CodeWhale/issues/2743)

4. **[#3927] 添加提供者无关的离线路径**  
   首次启动引导中，即使用户选择键无关的 Ollama/SGLang，仍然被迫进入在线激活流程。建议增加纯离线浏览模式，降低上手门槛。  
   [链接](https://github.com/Hmbown/CodeWhale/issues/3927)

5. **[#2974] 工作流工具与运行驱动**  
   工作流运行时虽已编译通过，但 TUI 仍缺少向模型暴露 `workflow` 工具的用户路径。该 Issue 是 v0.9.2 Workflow 集成的核心依赖。  
   [链接](https://github.com/Hmbown/CodeWhale/issues/2974)

6. **[#4832] `codew model resolve` 忽略已配置的提供者**  
   即使 `default_text_model` 设置为 zai/GLM-5.2，模型解析命令仍回退到 DeepSeek。被标记为紧急 Bug，已关闭。  
   [链接](https://github.com/Hmbown/CodeWhale/issues/4832)

7. **[#4838] `codew model set` 对非 DeepSeek 提供者沉默无操作**  
   用户尝试设置模型时命令静默失败，根源是 `default_text_model` 仅在 DeepSeek 作用域下生效。高优先级修复中。  
   [链接](https://github.com/Hmbown/CodeWhale/issues/4838)

8. **[#4828] macOS 水下 Shell 破坏 open/osascript/launchctl**  
   v0.9.0 引入的“水下交互系统”作为默认终端 Shell 后，`open`、`osascript` 等命令返回退出码 -54（操作不允许），降级至 v0.8.67 可恢复。  
   [链接](https://github.com/Hmbown/CodeWhale/issues/4828)

9. **[#4833] 浅色背景 TUI 文本对比度不足**  
   升级到 v0.9.1 后，浅色终端背景上的默认文本呈现极浅灰色，几乎不可读。UI 团队已复现并标记为 `v0.9.2`。  
   [链接](https://github.com/Hmbown/CodeWhale/issues/4833)

10. **[#3906] 每帧重复计算历史上下文 Token**  
    性能 Issue：每次渲染帧都重跑整个对话的 Token 估算，包括对每个 ToolUse 块的 `serde_json::to_string` 分配，随会话时间增长拖慢帧率。  
   [链接](https://github.com/Hmbown/CodeWhale/issues/3906)

## 重要 PR 进展

1. **[#4455] 移除遗留内存推送/注入代码**  
   清理 `build_headless_context_report` 和 `refresh_system_prompt` 中的旧内存块逻辑，统一由 Moraine 系统管理。已合并。  
   [链接](https://github.com/Hmbown/CodeWhale/pull/4455)

2. **[#4840] 新增 5 位贡献者映射**  
   将 5 位贡献者的 PR 工作自动记录到 `AUTHOR_MAP`，确保其 `Co-authored-by` 标记被正确应用，提升代码归因完整性。  
   [链接](https://github.com/Hmbown/CodeWhale/pull/4840)

3. **[#4839] 本地化文档：描述 TUI 语言包及 CI 漂移检测**  
   扩充 `LOCALIZATION.md`，补充 `crates/tui/locales/` 的翻译表面（8 个包），并实现 CI 中对本地化文件漂移的自动门控。  
   [链接](https://github.com/Hmbown/CodeWhale/pull/4839)

4. **[#4686] 新增 Minimax 中国区提供者路由**  
   添加 `minimax-cn`（OpenAI 兼容）和 `minimax-anthropic-cn`（Anthropic 消息格式）两个提供者标识，支持国内 Token 计划用户。  
   [链接](https://github.com/Hmbown/CodeWhale/pull/4686)

5. **[#4566] 适配 HarmonyOS 构建**  
   将 `portable-pty` 依赖从 `target_env = "ohos"` 移至 `cfg(unix)`，解决华为 PC 上 TUI 的编译失败问题。  
   [链接](https://github.com/Hmbown/CodeWhale/pull/4566)

6. **[#4743] 停止对非流式请求应用 45 秒 SSE 超时**  
   `codewhale exec` 在执行非流式后端时若生成时间超过 45 秒会错误中断，该 PR 将超时限定条件改为仅 SSE 流式请求。  
   [链接](https://github.com/Hmbown/CodeWhale/pull/4743)

7. **[#4722] 在编辑审批详情中展示完整差异预览**  
   保持卡片预览紧凑，通过 Alt+V 详情分页器懒加载完整 `-/+` 搜索/替换预览，并添加回归测试。  
   [链接](https://github.com/Hmbown/CodeWhale/pull/4722)

8. **[#4724] 归档后台 Shell 完成的输出**  
   当后台 Shell 作业进入终止状态时，将其最后可见的 stdout/stderr 尾部存储回发起时的 ExecCell，并冻结持续时间显示。  
   [链接](https://github.com/Hmbown/CodeWhale/pull/4724)

9. **[#4742] 工作流：保留 Fleet 字符串中的哈希符**  
   修复行导向解析器误将 `#` 当作注释的问题，正确处理引号内的 `#`，覆盖 Issue 引用、角色值、转义引号等场景。  
   [链接](https://github.com/Hmbown/CodeWhale/pull/4742)

10. **[#4756] 不重试失败的 MCP 工具调用**  
    若某 MCP 服务器已确认存在但工具调用失败，直接返回客户端错误，避免不必要的重试；添加回归测试验证恰好调用一次。  
   [链接](https://github.com/Hmbown/CodeWhale/pull/4756)

## 功能需求趋势

- **多语言与本地化**：除已支持的 7 种 README 外，社区要求将网站和 TUI 语言包扩展至韩语、西班牙语、葡萄牙语、俄语，并建立 CI 漂移门控。
- **工作流引擎集成**：Workflow（Whaleflow）运行时需完成从 TUI 到模型的工具暴露、计划执行、有界迭代的完整通路，是 v0.9.2 的核心功能。
- **插件生态**：用户强烈要求原生支持 Claude Code 技能及通用 Plugin Market，并支持 Hook（会话开始/结束等）。
- **性能优化**：渲染帧内禁止同步文件系统调用（`stat`、`read_dir`）、消除每帧全量历史 Token 估算、Ctrl+P 文件选择器异步化等 12 个性能 Issue 持续积压。
- **模型提供商扩展**：新增 ZAI、Kimi Code、Minimax 中国区等，同时暴露的问题（模型解析忽略配置、验证失败）表明提供商适配需更完善的配置模型。

## 开发者关注点

- **配置与模型解析 Bug 密集爆发**：`codew model resolve` 和 `codew model set` 对非 DeepSeek 提供者的行为完全错误，导致用户无法切换默认模型；`Config::validate()` 仅接受 DeepSeek 模型名，直接锁死 CLI 启动。
- **macOS 兼容性退化**：v0.9.0 的水下 Shell 破坏系统命令（`open`, `osascript`, `launchctl`），急需回滚或修复方案。
- **UI 细节缺失**：macOS 通知图标使用脚本编辑器图标、浅色背景文本不可读、Token 分解信息丢失，这些非功能性缺陷显著影响专业用户感知。
- **测试隔离隐患**：全量测试可能写入真实配置文件，开发者需手动清理 `~/.codewhale/config.toml`，暴露沙箱环境漏洞。
- **技能/工作流迁移成本高**：用户从 Cursor、Claude Code 等工具迁移现有的 Plugin 或 Skill 时，缺乏无缝导入机制，社区需求强烈但实现方案仍不明确。

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*