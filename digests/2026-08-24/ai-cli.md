# AI CLI 工具社区动态日报 2026-08-24

> 生成时间: 2026-08-23 23:10 UTC | 覆盖工具: 9 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/earendil-works/pi)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [CodeWhale](https://github.com/Hmbown/CodeWhale)
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

# AI CLI 工具横向对比分析报告

**日期：2026-08-24**  
**覆盖范围：Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、OpenCode、Pi、Qwen Code、CodeWhale、DeepSeek Harness**

---

## 1. 生态全景

当前 AI CLI 工具已从"功能叠加期"进入"可靠性攻坚期"，各主流工具同时面临模型输出质量、会话稳定性与安全边界的三重压力。社区反馈显示，**工具链的工程成熟度与模型能力迭代之间存在明显落差**——模型越强，CLI 在追踪、回滚、压缩、沙箱等"机械护栏"上的缺陷就越致命。跨会话记忆、多代理协调、远程/移动端联动正在从实验性功能变成生产级需求，但多数实现仍处于"可演示、不可全信"的阶段。整体来看，行业正在从"让模型做更多"转向"让模型做得可预期、可审计、可回退"。

---

## 2. 各工具活跃度对比

> 注：Issues/PR 数量以各日报"热点/重要"精选为准，非总量；Gemini CLI 原文明确 50 Issues / 29 PRs 活跃。Discussions 无数据的标注 "N/A"。

| 工具 | Issues（活跃/精选） | PR（活跃/精选） | Discussions | Release | 备注 |
|---|---|---|---|---|---|
| Claude Code | 10 热点 | 1 | N/A | v2.1.241 | 头部 Issue 获 351 👍，社区音量最大 |
| OpenAI Codex | 10 热点 | 10 | 8 | 无 | PR 批量合并，工程推进快 |
| Gemini CLI | 50 活跃 | 29 | N/A | v0.56.0-nightly | 日活跃量最高，安全类修复密集 |
| GitHub Copilot CLI | 10 热点 | 1 | N/A | v1.0.81-8 | PR 池低位，迭代节奏偏慢 |
| OpenCode | 10 热点 | 10 | N/A | 无 | V2 重构期，PR 响应迅速 |
| Pi | 10 热点 | 10 | 1 | 无 | 小而精，兼容性修复为主 |
| Qwen Code | 10 热点 | 10 | N/A | v0.22.0-nightly | /review 体系持续强化 |
| CodeWhale | 10 热点 | 10 | 1 | v0.9.11 | 资金/安全 P0 为最高优先级 |
| DeepSeek Harness | 0 | 0 | 0 | 无 | 24 小时无活动 |

---

## 3. 共同关注的功能方向

### 3.1 会话恢复与上下文压缩可靠性（最普遍痛点）

- **Claude Code**：Auto 模式用 Bash 编辑文件导致 `/rewind` 静默失效（#87575/#88041）
- **Copilot CLI**：后台压缩丢弃已完成的工具输出，报 `400 No tool output found`（#4572）
- **OpenCode**：`network_error` 反复中断会话（#44528/#44473）；流错误后 UI 卡死 "thinking"（#32366）
- **Qwen Code**：升级后 120 秒无流活动即报错（#5975）
- **Gemini CLI**：Generalist agent 调用即永久挂起（#21409）；shell 命令结束仍显示 "Waiting input"（#25166）
- **Pi**：冷恢复会重放已被移除的溢出消息（#7724）

### 3.2 跨会话记忆与长期上下文

- **OpenAI Codex**：官方发起 Memories 设计调研（#12567），第三方提议经验记忆层（#38021）
- **Gemini CLI**：Auto Memory 无限重试低信号 session（#26522）、脱敏时点过晚（#26525）
- **OpenCode**：PR #44539 新增基于文件的项目记忆层
- **Copilot CLI**：`store_memory` 报 "Instance id is required"（#4535），记忆写入器不可用

### 3.3 安全与沙箱边界

- **Gemini CLI**：symlink 路径穿越（#2677，P0 安全修复）；macOS 沙箱隔离 Docker socket（#28935）；Node 20 EOL 镜像升级（#28973）
- **Qwen Code**：`permissions.allow` 白名单未在 API 请求层生效（#9827）；PAT 任务需 runner 级隔离（#9089）
- **OpenAI Codex**：Windows 沙箱 `apply_patch` 路径错误（#33806）
- **CodeWhale**：v0.9.12 以"资金+安全 P0 修复"为主线（#5573/#5566）

### 3.4 Windows 平台体验欠账

- **Claude Code**：文件编码静默损坏（#7134）；桌面端反复崩溃（#85199）
- **OpenAI Codex**：桌面 App 卡顿（#20214）；DWM 句柄泄漏（#33192）
- **Copilot CLI**：VS Code 占用导致插件安装失败（#4570）
- **Pi**：Windows Terminal 键位冲突（#8183）；缺 PowerShell 原生工具（#8512）
- **Qwen Code**：终端中文输入拼音模糊（#8625）

### 3.5 自主模式的可控性与可观测性

- **Claude Code**：`bashFirst` 提示词绕过 Edit/Write 工具链，破坏变更追踪（#87575/#88041）
- **Copilot CLI**：`auto` 模型强制禁用 reasoning effort（#4560）；agent 口头确认却不执行工具（#4566）
- **Gemini CLI**：子代理超轮次仍报 `GOAL` 成功，假成功掩盖中断（#22323）
- **CodeWhale**：工作流 `Degraded` 状态被映射为 `Completed`（#5582）

---

## 4. 差异化定位分析

| 工具 | 定位 | 技术路线与目标用户 |
|---|---|---|
| **Claude Code** | 综合专业型 | 功能最全、社区最大，但近期在模型输出质量与 Auto 模式设计上承压。目标用户为重度专业开发者，依赖 `/rewind`、多代理编排等高阶工作流 |
| **OpenAI Codex** | 生态整合型 | 与 ChatGPT、IDE、移动端深度联动，正在构建记忆体系与内容元数据分类。面向深度绑定 OpenAI 生态（Plus/Pro 订阅）的用户 |
| **Gemini CLI** | 安全工程型 | 把沙箱隔离、路径解析、容器逃逸防护作为技术特色，Nightly 迭代快。适合对安全合规敏感的团队和本地模型用户 |
| **Copilot CLI** | 企业接入型 | 绑定 GitHub 生态，深耕企业认证与远程云模式（`--cloud`）。面向企业/组织内部 Copilot 订阅用户，但 PR 活力不足 |
| **OpenCode** | 开源重构型 | V2 大版本重构中，全力治理会话可靠性、流式 watchdog、TUI 交互。适合愿意尝鲜、自建工具链的开发者 |
| **Pi** | 兼容性聚焦型 | 以"多提供商适配"为核心，修复了 Kimi 等严格 OpenAI 兼容服务的工具历史回放问题；TUI 鼠标交互也在完善。适合本地模型与混合提供商用户 |
| **Qwen Code** | 审查自动化型 | 在 `/review` 上构筑护城河（容器级隔离、deferred suggestions 可恢复、workflow 编排），同时强化 Web Shell。适合团队级代码审查场景 |
| **CodeWhale** | 独立防御型 | 突出资金保护（有限 max_steps、累计挂钟）、安全加固和架构收敛，节奏稳健。适合无人值守自动化任务 |
| **DeepSeek Harness** | 静默观察期 | 今日无动态，需观察后续 release 节奏 |

---

## 5. 社区热度与成熟度

**高活跃/高热度梯队**

- **Gemini CLI**：以 50 Issues / 29 PRs 的日活跃量领先，安全类 P0 修复多，社区反馈敏捷，处于快速迭代期。
- **Claude Code**：头部 Issue（#77136）351 👍 为全场最高，但集中在模型质量投诉上，说明用户基数大、期望值高，也隐含信任危机。
- **OpenAI Codex**：单 Issue 最高 108 评论（#20214 Windows 卡顿），PR 批量合并说明官方工程执行力强，但 Windows 侧体验拖后腿。

**中活跃/稳健迭代**

- **Qwen Code**、**CodeWhale**：均有明确 roadmap（Qwen 的 /review 体系、CodeWhale 的 v0.9.12 里程碑），Issue 结构化程度高，维护者主导性强。
- **Copilot CLI**：10 条热点 Issue 但仅 1 个 PR，且那个 PR 还是垃圾 PR（README 改名），社区诉求多、官方响应慢，活跃度偏低。
- **Pi**：不追求 Issue 数量，但单个 Issue 的讨论质量高（如 #7683 鼠标事件 11 条评论），社区小而深。

**快速迭代/重构期**

- **OpenCode**：V2 重构是当前最明显的"从 1 到 2"阶段，10 个 PR 中有多个直接对抗今日热门 Issue（watchdog、重试、网络错误），响应速度最快。
- **Gemini CLI**：Nightly 版本连发，安全修复与功能修复并行，迭代节奏快但稳定性仍需观察。

---

## 6. 值得关注的趋势信号

1. **"假成功"比失败更危险**  
   Gemini 子代理在 MAX_TURNS 后仍报 `GOAL` 成功（#22323）、Copilot 压缩后工具结果丢失仍显示正常（#4572）、CodeWhale 将 `Degraded` 折叠为 `Completed`（#5582）——**静默状态错误正成为自动化流程的最大隐患**。开发者应优先选择能提供"真实可验证状态"的工具，而非"看起来成功"的工具。

2. **CLI 正在从"模型外壳"演变为"可靠性护栏"**  
   模型输出质量下滑（Claude #77136）、跳过工具调用（Copilot #4566）、口语化确认不执行，这些模型层问题迫使 CLI 在工具追踪、重试、回滚、压缩等环节建立强制性的机械护栏。未来 CLI 的核心价值将不再是"接入模型"，而是"驯服模型"。

3. **跨会话记忆进入产品化前夜，但工程基础未成熟**  
   OpenAI 官方发起 Memories 调研、Gemini 的 Auto Memory、OpenCode 的新 PR、Copilot 的 memory 写入器——四个方向同时推进，但其中三个出现可靠性问题（#26522/#4535/#26525）。说明长期记忆是明确的下一步方向，但"记忆的提取、脱敏、重放"仍是未解决的工程难题。

4. **Windows 支持成为普遍的"二等公民"**  
   从编码损坏、桌面崩溃、DWM 句柄泄漏到插件文件锁、中文输入显示——每个工具在 Windows 上都有未闭环的问题。对团队决策者而言，**若团队主力使用 Windows，需要提前核验目标工具在 Windows 上的已知问题清单**。

5. **安全边界从"文件系统"扩展到"钱包与算力"**  
   Gemini 在修 symlink 路径穿越、macOS 容器 socket 逃逸；CodeWhale 将"限制失控花费"列为 v0.9.12 的 P0（原默认 `u32::MAX` 轮次）；Claude Code 用户报告 3 小时烧掉 1000 万 token 的极端故障（#73601）。**资源失控防护正成为生产级 AI CLI 的必备能力**。

6. **第三方工具生态正在弥补官方缺口**  
   Codex 社区出现了 Enkidu、CodexPulse 等用量追踪工具，Pi 有 DSH 集成案例，Gemini CLI 出现手机配对扩展——官方在用量透明、远程监督、状态可视化方面供给不足，为周边工具与集成商留出了生态位。

---

**给开发者的行动建议：**

- 大规模采用前，先验证**压缩/恢复/回滚**三件事在目标工具上是否可预期；
- 若运行无人值守自动化，优先选择有**资金/资源上限控制**的工具（如 CodeWhale、Sandbox 完善的 Gemini）；
- 关注各工具的 **Windows 已知问题清单**，必要时用 WSL2 或容器规避；
- 对"Agent 自主执行"保持审慎，优先启用需要审批的模式或保留完整的工具追踪链路；
- 跨会话记忆仍是早期技术，**勿将关键上下文唯一依赖于记忆功能**，应保留显式的任务状态文件。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止：2026-08-24 · 来源：github.com/anthropics/skills**

---

## 一、热门 Skills 排行（按 PR 评论数排序，Top 8）

**1. skill-creator 评估修复（#1298）** · [PR 链接](https://github.com/anthropics/skills/pull/1298)
- **功能**：修复 `run_eval.py` 恒报 recall=0% 的严重缺陷（关联 Issue #556，12 评论、7 👍），将评估产物安装为真实 skill，并修复 Windows 流读取、触发检测与并行 worker 问题。
- **社区热点**：skill 描述优化循环当前正在"对噪音做优化"，已有 10+ 独立复现，是 skill-creator 工具链最紧迫的 bug。
- **状态**：OPEN

**2. document-typography 文档排版质检（#514）** · [PR 链接](https://github.com/anthropics/skills/pull/514)
- **功能**：新增排版质检 skill，拦截 AI 生成文档的孤行（orphan）、寡行标题（widow）、编号错位等典型排版缺陷。
- **社区热点**：覆盖所有 AI 生成文档的"隐形质量问题"，用户极少主动要求排版质量，属于需求面极广的默认能力。
- **状态**：OPEN

**3. PDF 大小写引用修复（#538）** · [PR 链接](https://github.com/anthropics/skills/pull/538)
- **功能**：修复 SKILL.md 中 8 处大小写不一致的文件引用（`REFERENCE.md`→`reference.md`、`FORMS.md`→`forms.md`），解决大小写敏感文件系统上的引用断裂。
- **社区热点**：PDF 是最高频文档类型之一，此类兼容性修复直接影响开箱即用体验。
- **状态**：OPEN

**4. ODT 文档 skill（#486）** · [PR 链接](https://github.com/anthropics/skills/pull/486)
- **功能**：新增 ODT/ODS/ODF 创建、模板填充、解析与转 HTML 能力，补齐 LibreOffice/ISO 开放格式文档链条缺口。
- **社区热点**：文档 skill 矩阵（docx/pdf）长期缺 ODT，开源办公生态需求明确。
- **状态**：OPEN

**5. frontend-design 可执行性重构（#210）** · [PR 链接](https://github.com/anthropics/skills/pull/210)
- **功能**：修订前端设计 skill，确保每条指令可被 Claude 在单次对话中实际遵循，提升可执行性与内部一致性。
- **社区热点**：讨论聚焦"skill 可操作性优先于信息量"——这已成为社区对 skill 质量的共识标准。
- **状态**：OPEN

**6. skill 质量/安全分析器（#83）** · [PR 链接](https://github.com/anthropics/skills/pull/83)
- **功能**：新增两个元技能——skill-quality-analyzer（结构/文档/示例/资源等五维质量评估）与 skill-security-analyzer（安全审计）。
- **社区热点**：与 #492 信任边界滥用问题形成呼应，社区开始重视 skill 的自我审计能力。
- **状态**：OPEN

**7. scnet-hpc 科学计算 skill（#1615）** · [PR 链接](https://github.com/anthropics/skills/pull/1615)
- **功能**：通过 profile 化 SSH + Slurm 工作流操作 SCNet HPC 集群，涵盖作业生成、集群发现、计算节点管理、模块与加速器配置等。
- **社区热点**：8 月新提交且持续迭代，是少见的专业科研计算场景技能。
- **状态**：OPEN

**8. DOCX 修订 w:id 冲突修复（#541）** · [PR 链接](https://github.com/anthropics/skills/pull/541)
- **功能**：修复 DOCX 带书签文档添加修订时的 w:id 冲突（OOXML 共享 ID 空间），防止文档损坏。
- **社区热点**：直击文档损坏类严重 bug，是 docx skill 可靠性的关键补丁。
- **状态**：OPEN

---

## 二、社区需求趋势（来自 Issues）

1. **安全与信任边界（声量最高）**：Issue #492（43 评论）——社区 skill 在 `anthropic/` 命名空间下分发，构成信任边界滥用，用户可能向"看似官方"的社区技能授予过高权限；#1175 关注 SKILL.md 内嵌权限逻辑的泄露风险。
2. **组织级 skill 共享**：Issue #228（16 评论、8 👍，最高赞）——要求 org 内直接共享 skill，替代"下载文件→Slack/Teams 传输→手动上传"的原始流程。
3. **元工具链可靠性缺陷集中爆发**：#556（eval 0% 触发率）、#62（技能文件消失）、#1487（claude-api skill 单次注入 ~156k tokens 撑爆上下文）、#1362（web-artifacts-builder 在 pnpm≥10.1 下构建失败）。
4. **治理与元认知型新 skill 涌现**：#412 agent-governance（AI 代理安全治理模式）、#1385 推理质量门禁管线（预校准→对抗审查→交付验证）、#1329 compact-memory（符号化压缩代理状态）。
5. **互操作与平台兼容持续存在**：#16（Skills 暴露为 MCP）、#29（AWS Bedrock 支持）、#12（docx 空白符重排导致文档不可读）。

---

## 三、高潜力待合并 Skills

以下 PR 讨论活跃、近期持续更新或与维护者优先级高度一致，落地概率较大：

- **Hivemind 多智能体编排（#1628）** · [PR 链接](https://github.com/anthropics/skills/pull/1628) — 将机械任务委派给免费模型的 headless opencode worker，Claude Code 仅保留规划/审查/合并角色；08-23 仍在更新，创新度与讨论热度双高。
- **批量稳定性修复（#1602）** · [PR 链接](https://github.com/anthropics/skills/pull/1602) — 修复评估序列化、benchmark 指标计算、编码与脚本稳定性问题，与 #1298 同属"工具链加固"主线；08-23 更新。
- **self-audit 交付质检（#1367）** · [PR 链接](https://github.com/anthropics/skills/pull/1367) — 先做机械文件验证、再按损害优先级做四维推理审计，与 #1385 提案联动，治理方向的完整实现。
- **testing-patterns 测试方法论（#723）** · [PR 链接](https://github.com/anthropics/skills/pull/723) — 覆盖 Testing Trophy、React 组件测试、单元测试命名与边界用例等完整测试栈，是 Agent 编码工作流的刚需。
- **ServiceNow 平台 skill（#568）** · [PR 链接](https://github.com/anthropics/skills/pull/568) — 覆盖 ITSM/ITOM/ITAM/SecOps/SPM/IntegrationHub 全平台能力，企业级场景明确；08-12 仍在更新。
- **UIZZE 合作方收录（#1595）** · [PR 链接](https://github.com/anthropics/skills/pull/1595) — 纯文档改动（README Partner Skills 章节），合并风险最低，大概率近期合入。

---

## 四、Skills 生态洞察

**一句话总结**：社区最集中的诉求是 skill 生态从"数量扩张"转向"基础设施质量与信任建设"——安全命名空间（#492）、评估工具链可靠性（#556）和组织级共享机制（#228）是当前三大共振点，而新技能提案正同步朝治理、审计与多智能体编排等元能力层延伸。

---

# Claude Code 社区动态日报 — 2026-08-24

## 今日速览

- 发布 v2.1.241 补丁版本，仅包含 Bug 修复与可靠性改进，无新功能亮点。
- 社区对模型输出质量（重复性修辞、散文连贯性下降）的抱怨持续发酵，Issue #77136 已获 351 👍 / 90 评论，成为当前最热议题。
- Auto 模式的 `bashFirst` 提示词策略引发两个高赞缺陷报告（#87575、#88041），用户发现 `/rewind` 因此静默失效，文件编辑绕过了 Edit/Write 工具链。

## 版本发布

### v2.1.241

- **更新内容**：Bug fixes and reliability improvements（Bug 修复与可靠性改进）
- **说明**：无功能变更或破坏性更新，属于常规补丁迭代。

---

## 社区热点 Issues

以下按社区关注度（评论数、👍、时效性）综合排序，共 10 条：

1. **#77136 — Claude 4.7/4.8/5.0 与 Fable 模型输出日益依赖重复性修辞口头禅，散文连贯性下降**
   - 评论 90 · 👍 351 · 状态：开放
   - **为什么重要**：当前社区规模最大的模型质量投诉。即使用户给出明确风格指令，模型仍默认产出空泛套话与模板化过渡句，直接冲击日常写作与代码注释场景。
   - [GitHub Issue #77136](https://github.com/anthropics/claude-code/issues/77136)

2. **#85199 — Claude Desktop 在 Windows 上反复崩溃，需通过 "Advanced Options → Repair" 修复**
   - 评论 34 · 👍 4 · 状态：开放
   - **为什么重要**：桌面端稳定性问题，Windows 用户高频触发崩溃且需要手动修复，属于影响面较大的平台缺陷。
   - [GitHub Issue #85199](https://github.com/anthropics/claude-code/issues/85199)

3. **#7134 — Claude Code 不尊重文件编码，损坏 Windows-1252 文件**
   - 评论 27 · 👍 23 · 状态：开放（2025-09 创建）
   - **为什么重要**：近一年未修复的"老账"。对非 UTF-8 项目存在静默数据损坏风险，Windows 开发者受影响最深。
   - [GitHub Issue #7134](https://github.com/anthropics/claude-code/issues/7134)

4. **#87575 — Auto 模式系统提示词导致 `/rewind` 对 Bash 编辑过的文件静默失败**
   - 评论 11 · 👍 18 · 状态：开放（WSL2 / Opus 5）
   - **为什么重要**：Auto 模式（`skipAutoPermissionPrompt: true`）下模型被指示用 Bash 编辑文件，绕过了工具追踪，使 `/rewind` 无法回退——直接破坏核心撤销工作流，属于高影响回归。
   - [GitHub Issue #87575](https://github.com/anthropics/claude-code/issues/87575)

5. **#88041 — Auto 模式 "bashFirst" 提示词引导模型用 sed/heredoc 编辑，而非 Edit/Write 工具**
   - 评论 9 · 👍 9 · 状态：开放（Linux）
   - **为什么重要**：与 #87575 同源。用户定位到该错误指令被硬编码在 CLI 二进制中，并非配置问题，影响所有 Linux/WSL 用户。
   - [GitHub Issue #88041](https://github.com/anthropics/claude-code/issues/88041)

6. **#74558 — Fable 5 轮次中途的助手文本块被间歇性交付为"思考摘要"，对话看似静默**
   - 评论 9 · 👍 8 · 状态：开放（Linux/WSL2）
   - **为什么重要**：有完整的 JSONL transcript 与 stream-json 消费端双重复现证据，模型行为异常直接导致用户感知"模型没在干活"。
   - [GitHub Issue #74558](https://github.com/anthropics/claude-code/issues/74558)

7. **#85924 — 移动端排队（Queue）输入文本被静默丢弃**
   - 评论 6 · 👍 4 · 状态：开放（Android）
   - **为什么重要**：Claude Code 移动端的基础交互缺陷。用户在工具执行期间输入的文本在轮次切换时悄悄消失，且无任何提示。
   - [GitHub Issue #85924](https://github.com/anthropics/claude-code/issues/85924)

8. **#70438 — VS Code 扩展中 AskUserQuestion 控件只渲染头部后挂起（macOS / Skill 调用）**
   - 评论 5 · 👍 3 · 状态：开放
   - **为什么重要**：IDE 集成中交互式组件间歇性失效，消息流卡死、会话永久挂起，直接影响 Skill 交互式工作流的可用性。
   - [GitHub Issue #70438](https://github.com/anthropics/claude-code/issues/70438)

9. **#87472 — 桌面版浏览器面板阻止内网 LAN（RFC1918）子资源加载，页面永远空白**
   - 评论 3 · 状态：开放（macOS）
   - **为什么重要**：沙箱策略拦截了私有网段上的所有子资源（CSS/JS/fetch），页面 HTTP 200 但永远渲染不出来，本地 Web 应用调试受阻。
   - [GitHub Issue #87472](https://github.com/anthropics/claude-code/issues/87472)

10. **#88747 — Worktree 创建写入绝对 core.hooksPath 到 config.worktree，导致 worktree 执行主仓库的 hooks**
    - 评论 2 · 状态：开放（macOS，2026-08-22 新建）
    - **为什么重要**：最新报告的 Git 集成缺陷。hooks 隔离被意外破坏，主仓库 hooks 会在所有 worktree 中执行，可能影响测试/CI 自动化链条。
    - [GitHub Issue #88747](https://github.com/anthropics/claude-code/issues/88747)

---

## 重要 PR 进展

过去 24 小时内仅 1 个 PR 有更新，其余 PR 池动态处于低位：

- **#83374 — docs(plugin-dev): document MessageDisplay streaming semantics**
  - 作者：iCodeCraft · 状态：开放（2026-08-02 创建，08-23 更新）
  - **内容**：为内置 Hook 开发技能补充 `MessageDisplay` 事件的文档。此前该事件在触发描述、事件指南和快速参考表中均被遗漏；本次将其加入插件开发文档，明确流式渲染语义。
  - **价值**：对插件/技能开发者有实际帮助，补全了 Hook 事件的文档空白。
  - [GitHub PR #83374](https://github.com/anthropics/claude-code/pull/83374)

---

## 功能需求趋势

从近期开放的 Issues 与 PR 中提炼出以下社区最关注的功能方向：

1. **多代理/多会话协调原语（#48965）** — 跨会话消息传递、会话注册表、压缩抵抗状态（compaction-resistant state）、共享任务板。社区已在实践中用"Opus PM + N 个 worker 会话"的模式，但受限于原语缺失而难以规模化。
2. **Auto 模式文件编辑策略修正** — #87575 / #88041 表明社区强烈希望 Auto 模式仍走 Edit/Write 工具链，而不是 Bash/sed/heredoc，以保留 `/rewind` 回退能力与变更追踪。
3. **远程控制与移动端交互补全（#73617、#85924）** — 远程控制时希望在权限弹窗中也能输入文本；移动端排队中的输入不应被静默丢弃。
4. **Routines/定时任务管理增强（#73618）** — 需要删除工具、列表分组、更清晰的暂停状态，以满足多任务自动化的真实运维需求。
5. **仓库选择器支持嵌套目录（#72482）** — `@repo` picker 应能访问嵌套文件夹下的仓库，而不是只能看到顶层目录。
6. **子代理并行稳定性（#80881）** — Plan Mode + 并行后台子代理触发 API 400 错误，需修复系统提示词组装逻辑。

---

## 开发者关注点

- **模型输出质量是当前最大痛点**：#77136 聚集 351 👍，用户明确反馈"修辞口头禅"（模板化过渡、空洞总结）在 4.7/4.8/5.0/Fable 上越发严重，且明确风格指令被无视。
- **Auto 模式信任危机**：系统提示词诱导模型用 Bash 编辑文件后，`/rewind` 静默失败（#87575），用户失去"后悔药"，可控性与安全感下降。
- **跨会话消息不可靠**：#87501 中 `SendMessage` 返回 `success:true` 但目标会话实际未收到消息，多代理编排存在隐形丢消息风险。
- **Fable 5 安全分类器误报频发**：多起报告（#73604 / #73599 / #73609）——Amiga 模拟器开发、Firecrawl 技能、前端 UI 工作被误判为安全风险并强制回退 Opus。
- **成本/计费透明度不足**：#73615 显示动态工作流会话内显示 $60，但实际计费 $300，差距达 5 倍。
- **Windows 平台历史欠账**：编码损坏（#7134）与桌面崩溃（#85199）长期未闭环，Windows 用户体感明显落后于 macOS/Linux。
- **极端故障案例值得警惕**：#73601 中恢复的子代理陷入自寻址重试循环，3 小时烧掉约 1000 万 token 且零输出，资源失控风险需引起重视。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-08-24

## 今日速览

过去 24 小时无新版本发布，社区讨论聚焦于 **Windows 平台稳定性**（#20214 卡顿问题已积累 108 条评论）与 **GPT-5.6-sol 上下文窗口/兼容性争议**。PR 侧最显著的是 copyberry 批量合并的 **上下文内容元数据（content kinds）注解重构**，涉及近 10 个 PR，为消息元数据一致性打基础。此外，官方在 Discussions 中发起了 **Codex Memories（记忆功能）** 的用户调研，值得关注。

## 社区热点 Issues

挑选 10 个最值得关注的 Issue，按讨论热度与影响面排序：

1. **Codex App 在 Windows 11 Pro 上频繁卡顿/掉帧** — [#20214](https://github.com/openai/codex/issues/20214)  
   累计 108 条评论，87 👍。尽管系统资源充足（Ryzen 5 5600 + 32GB RAM），用户在 Microsoft Store 版 Codex App 上仍遇到严重性能问题。社区中多人反馈类似情况，是目前 Windows 平台热度最高的问题。

2. **Codex App + gpt-5.6-sol 报错 `unsupported prompt_cache_retention`** — [#39392](https://github.com/openai/codex/issues/39392)  
   39 条评论，37 👍。使用 gpt-5.6-sol 模型时，桌面 App（内置 codex-cli 0.148.0-alpha.15）因后端下发 `prompt_cache_retention` 参数而中止运行，影响 Plus/Pro 用户。

3. **定时任务自动禁用且未经用户授权** — [#38350](https://github.com/openai/codex/issues/38350)  
   34 条评论。ChatGPT Web 端"Work"功能中，周期性定时任务在成功执行后会自动从 enabled 切换为 paused，且与用户操作无关。一次事故波及 4 个互不相关的任务，自动化可靠性受质疑。

4. **VS Code/Cursor 扩展提交的 Prompt 在进入队列前随机消失** — [#25928](https://github.com/openai/codex/issues/25928)  
   28 条评论，18 👍。Windows + Cursor 环境下，扩展的队列系统会丢 prompt（IDE 扩展版本 3.6.31，ChatGPT Pro 订阅用户受影响）。

5. **增加选项：禁用"Ran N commands"折叠，始终显示已执行命令** — [#39903](https://github.com/openai/codex/issues/39903)  
   12 条评论，27 👍。TUI 用户希望保留命令执行的完整可见性，避免信息被折叠隐藏。指向 Codex CLI 0.149.0、gpt-5.6-sol max。

6. **Windows 10 DWM Composition 句柄泄漏** — [#33192](https://github.com/openai/codex/issues/33192)  
   12 条评论，10 👍。Codex 任务调用终端工具后，DWM 的 `Composition` 句柄数持续增长，影响桌面合成器稳定性。作者在受控 5 次调用中观察到 22 个句柄增长且不释放。

7. **ChatGPT 与 Codex 之间的共享项目上下文与双向任务交接** — [#32519](https://github.com/openai/codex/issues/32519)  
   8 条评论。用户在移动端 ChatGPT 讨论需求，无法平滑切换到桌面 Codex 继续执行，希望打通会话上下文、任务状态与成果回传。

8. **恢复 GPT-5.6 Sol 的 372k Codex 上下文窗口（或提供 opt-in 设置）** — [#34619](https://github.com/openai/codex/issues/34619)  
   6 条评论，23 👍。Pro 用户发现当前 Codex 桌面端/CLI 的上下文窗口被限制，与模型标称不一致，要求恢复完整窗口或提供用户可控配置。

9. **Windows 桌面版 `slash_tmp` 根目录映射到 C:\tmp 并阻塞 apply_patch** — [#33806](https://github.com/openai/codex/issues/33806)  
   6 条评论，4 👍。沙箱注入的临时目录在 Windows 上路径错误，导致 `apply_patch` 在原本可写的 workspace 中失败。

10. **macOS 桌面版 SQLite 并发访问导致启动失败** — [#30105](https://github.com/openai/codex/issues/30105)  
    5 条评论。当 IDE 扩展或其他进程持有 `logs_2.sqlite` 时，Codex Desktop 启动报 `failed to initialize sqlite state runtime`，锁定触发而非文件损坏/大小问题。

## 重要 PR 进展

挑选 10 个重要 PR，重点关注批量合并的元数据重构与功能型改动：

1. **Preserve content kinds during image preparation** — [#40281](https://github.com/openai/codex/pull/40281)  
   确保图片预处理改写消息内容时，位置性 content-kind 元数据与重写结果保持对齐。

2. **Budget retained images during remote compaction** — [#40280](https://github.com/openai/codex/pull/40280)  
   远程压缩的保留消息预算原先只计算文本，图片消息会超出预算。新增 opt-in 的 `compaction_image_budget` 特性，将图片计入上下文缩容成本。

3. **Preserve annotations when filtering forked agent history** — [#40266](https://github.com/openai/codex/pull/40266)  
   修复分叉给子代理时，开发者消息内容与 `content_item_kinds` 元数据失步的问题。

4. **Annotate user input and contextual fragments with content kinds** — [#40196](https://github.com/openai/codex/pull/40196)  
   将用户文本/图片/音频按原始顺序分类为 `user.text`、`user.image`、`user.audio`，并保留每个上下文片段的 ContentItemKind。

5. **Preserve content annotations when rolling back model switches** — [#40271](https://github.com/openai/codex/pull/40271)  
   模型切换回滚时，过滤器保留幸存开发者片段的 content-kind 元数据，含回归测试。

6. **Add MongoDB thread store and session migration** — [#31175](https://github.com/openai/codex/pull/31175)  
   实验性 MongoDB 后端线程存储，支持 `codex sessions migrate-to-mongo` 流式迁移，含进度、警告、验证与命名空间清理。这是目前少数未关闭的大功能 PR。

7. **Classify contextual fragments with content kinds** — [#40180](https://github.com/openai/codex/pull/40180)  
   要求每个 `ContextualUserFragment` 提供稳定的 `<feature>.<name>` 分类，新增 `AnnotatedContent` 和 `RenderedFragment` 将文本、角色、分类统一传给 API 边界。

8. **Shut down resumed descendants when archiving thread trees** — [#40179](https://github.com/openai/codex/pull/40179)  
   修复协作恢复已归档子线程后，再次归档父线程时该子线程未被正确关闭的问题。

9. **Preserve content item kinds in message metadata** — [#40174](https://github.com/openai/codex/pull/40174)  
   新增开放的 `ContentItemKind` 字符串分类，随 `InternalChatMessageMetadataPassthrough` 携带，未知分类在往返中保持原样。

10. **Support `cua_repl` as a Node REPL-backed MCP server** — [#40257](https://github.com/openai/codex/pull/40257)  
    将 `cua_repl` 纳入 Guardian 审查证据收集、计算机使用策略与转录截图捕获范围，渲染结果复用紧凑 REPL 视图。

## 热门 Discussions

按分区归类，共 8 条值得关注：

### Ideas

1. **[Memories in Codex]** — [#12567](https://github.com/openai/codex/discussions/12567)  
   官方成员 jif-oai 发起，调研用户对记忆功能的核心需求：模型引用过往线程时，需要多大程度地展示"记忆来源"？社区现有 35 条评论，14 👍，是当前最热门的设计讨论。

2. **[Persistent, Transferable Experience Memory for Codex]** — [#38021](https://github.com/openai/codex/discussions/38021)  
   提议为 Codex 增加可迁移的经验记忆层，跨会话、跨项目复用任务经验。

3. **[Missing feature: chatgpt to codex and codex to chatgpt]** — [#40227](https://github.com/openai/codex/discussions/40227)  
   用户反馈 Codex App 与 ChatGPT 之间缺少双向切换/上下文共享。作者提到一个已自主运行 9 天以上的复杂任务，涉及数百个子代理。

4. **[Reconsider Open-Sourcing the Codex VS Code Extension]** — [#40191](https://github.com/openai/codex/discussions/40191)  
   社区再次呼吁将 VS Code 扩展开源，引用此前 Issue #5822。虽然官方短期无计划，但讨论仍在持续。

### Show and tell

5. **[Enkidu for macOS — verified Codex usage tracking and work planning]** — [#40272](https://github.com/openai/codex/discussions/40272)  
   原生 macOS 应用，解决"百分比之外无法判断剩余容量"的问题，提供用量追踪与工作计划能力；另有韩文版 [#40276](https://github.com/openai/codex/discussions/40276)。

6. **[CodexPulse — local usage history, resets, and hourly usage for Codex]** — [#40165](https://github.com/openai/codex/discussions/40165)  
   Windows 本地工具，记录 Codex 使用历史、重置周期与小时级用量。

7. **[A conservative script to clean stale Codex Desktop global state]** — [#39579](https://github.com/openai/codex/discussions/39579)  
   保守的 zsh 脚本，清理 Codex Desktop 侧边栏缓存中的过期全局状态映射，不删除会话数据。

8. **[Does anyone else use Codex as a toolbox without actually calling the Codex model?]** — [#40244](https://github.com/openai/codex/discussions/40244)  
   用户分享把 Codex 作为本地工具执行器（文件编辑、命令运行等），不消耗模型额度的用法，引发讨论。

## 功能需求趋势

从 Issues 与 Discussions 中提炼出以下社区最关注的方向：

- **跨产品上下文打通**：ChatGPT 移动端 ↔ Codex 桌面端 ↔ IDE 扩展之间的会话上下文、任务状态共享（#32519、#40227），以及 VS Code 扩展开源诉求（#40191）。
- **Windows 平台稳定性与权限修复**：桌面 App 卡顿（#20214）、DWM 句柄泄漏（#33192）、`apply_patch` 访问拒绝（#34294）、`slash_tmp` 路径错误（#33806）等，Windows 已成为 bug 高发平台。
- **会话恢复与持久化可靠性**：多条 Issue 指向 resume 失败（#37719、#38552、#39823），以及恢复时事件丢失导致的会话损坏（#38234）。MongoDB 线程存储 PR 是官方应对方向之一。
- **记忆与长期上下文**：官方 Memories 调研（#12567）、第三方经验记忆提议（#38021）、上下文窗口恢复请求（#34619、#40258），说明社区对跨会话记忆和更大上下文的强烈需求。
- **自动化任务的可控性**：定时任务自动禁用（#38350）、自愈监控工作流建议（#32993），期望自动化任务更稳定、可观测。
- **用量透明化与本地工具生态**：多个社区自建用量追踪工具（Enkidu、CodexPulse），反映官方用量信息不足的问题。
- **内容元数据一致性（PR 侧）**：批量 content kinds 重构说明官方在内部统一上下文分类体系，为多模态、子代理、Guardian 等复杂场景打基础。

## 开发者关注点

- **Windows 是痛点重灾区**。从 IDE 扩展丢 prompt、沙箱写权限失败、Chrome 原生消息宿主过期（#40228），到桌面 App 卡顿与历史损坏（#23126），开发者普遍反馈 Windows 上的体验明显落后于 macOS/Linux。
- **会话恢复不应是玄学**。多条 Issue 指向同一个核心问题：resume 在某些场景下会永久失败或产生脏会话。开发者希望恢复操作具备鲁棒性，不能因事件丢失、writer 竞争或网络断线导致任务作废。
- **上下文窗口数字混乱**。GPT-5.6-sol 在不同入口（App/CLI/API）呈现不同上下文上限（#40258），而且带 `prompt_cache_retention` 时报错（#39392），开发者难以预期模型行为。
- **沙箱与 hooks 的跨平台一致性**。Windows 上 sandbox 路径映射、子代理 hooks 不触发（#33097）、文件系统访问冲突频发，开发者期待与 Unix 一致的行为。
- **社区开始用周边工具弥补官方缺口**。用量跟踪、状态清理、工作规划等需求催生了多个第三方小工具，说明官方在这些方面提供的信息和功能仍不充分。
- **认证稳定性**。桌面 App 频繁登出（#39218）、keychain 锁定后无法解锁（#40226），影响日常使用连续性。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-08-24）

## 今日速览

过去 24 小时内 Gemini CLI 仓库有 50 个 Issue、29 个 PR 处于活跃状态。社区讨论集中在**子代理稳定性**（假成功/挂起/浏览器兼容性）、**Auto Memory 可靠性**、**沙箱与路径安全**以及**终端体验问题**上。安全向修复明显增多，包括 symlink 路径穿越、Node 20 EOL 沙箱镜像、macOS Docker socket 隔离等。

## 版本发布

- **v0.56.0-nightly.20260823.g5411f113c**  
  Nightly 版本，具体变更见 Full Changelog。  
  https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260822.g5411f113c...v0.56.0-nightly.20260823.g5411f113c

## 社区热点 Issues（10 个）

1. **Subagent 在 MAX_TURNS 后误报 GOAL 成功，掩盖中断**  
   [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) · P1 · 13 评论  
   核心问题：`codebase_investigator` 子代理已触发最大轮次限制，仍返回 `success` 与 `Termination Reason: GOAL`。社区关注度高，影响 agent 结果可信度。

2. **Generalist agent 一被调用就永久挂起**  
   [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) · P1 · 8 评论 · 👍 8  
   用户反馈创建文件夹等简单操作也会卡死，等 1 小时无响应；只能通过提示词禁止代理 defer 到子代理来规避。

3. **Shell 命令执行完成后卡在 “Waiting input”**  
   [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) · P1 · 4 评论 · 👍 3  
   简单 CLI 命令已结束，但界面仍显示命令活跃并等待输入。反复出现，严重影响交互式工作流。

4. **Auto Memory 会无限重试低信号 session**  
   [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) · P2 · 5 评论  
   当提取 agent 决定不读取某个低信号 session 时，该 session 永远不算处理完成，会被反复列入待处理队列，造成无效重试。

5. **Auto Memory 需要确定性脱敏，并减少日志输出**  
   [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) · P2 · 4 评论  
   隐私隐患：本地 transcript 内容在发送给模型后才提示脱敏，且服务可能记录已有 skill 内容。需要先脱敏再入上下文。

6. **Gemini 不会主动使用自定义 skills 和 sub-agents**  
   [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) · P2 · 6 评论  
   用户反馈即使配置了与任务高度相关的 gradle/git skills，Gemini 也很少主动调用，只有显式指示才使用。

7. **`~/.gemini/agents/` 下的 symlink 文件不被识别为 agent**  
   [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) · P2 · 4 评论  
   社区希望支持 symlink，便于用 dotfiles 或版本化管理子代理定义。

8. **Browser subagent 在 Wayland 下失败**  
   [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) · P1 · 4 评论  
   浏览器子代理在 Wayland 环境直接结束并报 `Termination Reason: GOAL`，Linux 桌面用户受影响明显。

9. **Browser Agent 忽略 settings.json 覆盖项（如 maxTurns）**  
   [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) · P2 · 3 评论  
   AgentRegistry 读取了全局/项目设置，但 Browser Agent 实际运行时未应用，配置覆盖形同虚设。

10. **Agent 应停止或劝阻破坏性行为**  
    [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) · P2 · 3 评论 · 👍 1  
    复杂 git 操作中模型偶尔使用 `git reset`、`--force` 等高风险命令，社区希望默认采用更安全的替代方案。

## 重要 PR 进展（10 个）

1. **修复 session 清理因 shortId 碰撞误删无关会话**  
   [#28981](https://github.com/google-gemini/gemini-cli/pull/28981) · CLOSED · size/m  
   会话保留清理按 8 位 shortId 分组，一旦选中过期会话，所有同后缀文件都会被删除，属于用户数据丢失风险。

2. **OAuth 回调服务器关闭时清除超时定时器**  
   [#28980](https://github.com/google-gemini/gemini-cli/pull/28980) · CLOSED · size/m  
   每次 OAuth 流程都会创建 5 分钟超时，但成功或失败后未清除，造成定时器与回调句柄泄漏。

3. **修复基于 symlink 的路径穿越漏洞**  
   [#2677](https://github.com/google-gemini/gemini-cli/pull/2677) · CLOSED · priority/p0 · security  
   攻击者可绕过工作区限制访问目录外文件。该 PR 在路径验证前先解析真实路径，属于关键安全修复。

4. **沙箱镜像从已 EOL 的 node:20-slim 升级到 node:22-slim**  
   [#28973](https://github.com/google-gemini/gemini-cli/pull/28973) · OPEN · priority/p1 · security  
   Node 20 已于 2026-04-30 停止安全更新，继续使用存在未修复漏洞风险。

5. **macOS Seatbelt 沙箱隔离 Docker/容器运行时 socket 与二进制**  
   [#28935](https://github.com/google-gemini/gemini-cli/pull/28935) · CLOSED · size/l  
   禁止访问容器运行时守护进程 socket、CLI 二进制、Mach/XPC 服务等，防止通过 VirtioFS 等挂载点逃逸沙箱。

6. **修复 symlink 工作区根目录下 glob 结果为空**  
   [#28975](https://github.com/google-gemini/gemini-cli/pull/28975) · OPEN · area/core  
   macOS 默认 `/tmp` 是 `/private/tmp` 的 symlink，导致 glob 明明能匹配文件却返回 “No files found”。

7. **将 on-retry nudge 注入 conversation contents 以保留前缀缓存**  
   [#28914](https://github.com/google-gemini/gemini-cli/pull/28914) · OPEN · area/agent · size/l  
   把重试提示从 `systemInstruction` 移到 `contents` 末尾，既保留静态前缀缓存，又让模型在生成前立刻看到恢复指令。

8. **修复 extension downloadFile 未处理响应/写入流错误**  
   [#28979](https://github.com/google-gemini/gemini-cli/pull/28979) · CLOSED · size/m  
   原先只监听 `finish`，网络中途失败或磁盘 `ENOSPC` 等错误不会被捕获，可能导致扩展下载静默失败。

9. **修复混合换行符被误判为 CRLF**  
   [#28983](https://github.com/google-gemini/gemini-cli/pull/28983) · OPEN · area/core  
   只要文件里有一个 `\r\n` 就会被判定为 CRLF，忽略周围大量 LF。新逻辑改为检测是否真正混合换行。

10. **添加 Build Remote Agent 手机配对示例扩展（gbr/1）**  
    [#28982](https://github.com/google-gemini/gemini-cli/pull/28982) · OPEN · size/m  
    提供示例 Gemini CLI 扩展，让手机上的 Build Remote Agent 可以旁观桌面端 Gemini CLI 会话，属于生态扩展探索。

## 功能需求趋势

- **Agent 稳定性与可观测性**  
  大量 Issue 集中在子代理误报、挂起、浏览器失败、subagent trajectory 不可见、bugreport 缺少子代理上下文等方向。社区需要更可靠的 agent 自检、恢复和可追踪机制。

- **上下文效率与记忆系统**  
  多个 Issue/PR 指向 token 浪费：AST-aware 文件读取、Tactful Extraction、持久化文件式任务跟踪、Auto Memory 低信 session 处理、maxDepth 控制等。目标是减少上下文膨胀并提高记忆质量。

- **安全与沙箱边界**  
  从 symlink 路径穿越、Node EOL 升级、macOS 容器 socket 隔离到防止破坏性 git 命令，社区对 sandbox 的默认安全性和“不可逃逸”边界要求明显上升。

- **配置与可扩展性**  
  社区希望自定义 agent 支持 symlink、Browser Agent 遵守 settings.json、Gemini 更主动使用用户 skills，以及通过扩展机制打通手机/外部设备。

## 开发者关注点

- **“假成功”比失败更危险**：subagent 在 max turns 等异常中断时仍报告 GOAL 成功，会掩盖真实故障，影响自动化流程判断。
- **终端交互卡死频发**：Shell 命令结束后仍显示 “Waiting input”、vite 等交互式命令卡住、终端 resize 闪烁，都是高频痛点。
- **配置不生效/不被识别**：Browser Agent 忽略 `maxTurns` 等覆盖项；symlink 形式的 agent 文件无法加载。
- **隐私与数据安全**：Auto Memory 在脱敏前就把内容送入模型上下文，且低信号 session 反复重试；session 清理 shortId 碰撞会误删用户数据。
- **模型工具使用习惯不佳**：不主动使用 skills/sub-agents、在随机目录创建临时脚本、使用 `git reset`/`--force` 等危险命令，开发者希望模型默认更保守、更可预测。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-08-24**  
**数据来源：** [github/github/copilot-cli](https://github.com/github/copilot-cli)

---

## 1. 今日速览

昨日发布 **v1.0.81-8** 补丁，新增 Grok 4.6 极致推理支持并优化本地插件热加载；社区主要聚焦两类问题：**企业认证错误反复出现**（Issue #2306）与**上下文压缩引发的工具调用丢失**（#4572）。此外，Windows 下 VS Code 占用导致插件安装失败（#4570）和 `auto` 模型强制关闭 reasoning effort（#4560）成为新热点。

---

## 2. 版本发布

### 🆕 v1.0.81-8
**发布日期：** 2026-08-23 前后

**新增：**
- 为 **Grok 4.6** 增加 `xhigh` 推理强度（reasoning effort）支持。

**改进：**
- 目录型本地 marketplace 中的插件现改为从其真实目录实时加载，编辑后 `/restart` 或新会话即可生效，无需再执行 `/plugin update`。
- 技能（Skills）与自定义 Agent 的可发现性得到增强。

🔗 [查看 Release 详情](https://github.com/github/copilot-cli/releases)

---

## 3. 社区热点 Issues（10 条精选）

### 🔴 #2306 企业认证错误每周复发（高热度）
`[area:authentication] [area:enterprise]`  
用户报告每周出现 2-3 次 "You are not authorized to use this Copilot feature, it requires an enterprise or organization policy to be enabled"，且 `/context` 返回异常。该问题从 3 月持续至今，9 条评论、3 个 👍，牵涉企业策略与本地认证状态同步，是当前最受关注的历史遗留问题。  
🔗 [Issue #2306](https://github.com/github/copilot-cli/issues/2306)

### 🔴 #4572 后台压缩导致并行 GPT 工具结果丢失、HTTP 400
`[triage]`  
1.0.80 版本中，`gpt-5.6-sol` 长上下文会话在自动压缩后立即报 `400 No tool output found for function call`。工具实际执行成功，但压缩事件流未保留其输出。直接影响长时间运行的 Autopilot 任务。  
🔗 [Issue #4572](https://github.com/github/copilot-cli/issues/4572)

### 🔴 #4571 GPT-5.6 Luna Max 在 50% 上下文即触发压缩
`[triage]`  
使用 GPT-5.6 Luna Max 时（其他推理档可能也受影响），上下文使用量刚到 50% 就触发压缩，小任务也不可避免。用户期待更合理的压缩触发时机或可配置化。  
🔗 [Issue #4571](https://github.com/github/copilot-cli/issues/4571)

### 🟠 #4535 `store_memory` 在 1.0.81 prerelease 中报 "Instance id is required"
`[area:context-memory]`  
原生 memory 写入器缺少实例 ID 导致上下文记忆存储一直失败，已确认影响所有 1.0.81 预发布版本。  
🔗 [Issue #4535](https://github.com/github/copilot-cli/issues/4535)

### 🟠 #4560 `auto` 模型强制关闭 reasoning effort 且拒绝修改
`[area:models] [area:configuration]`  
选择 `auto` 模型时，会话将 `reasoningEffort` 置为 `null`，用户手动配置会被拒绝。这削弱了自动路由的灵活性，开发者期待至少允许覆盖默认值。  
🔗 [Issue #4560](https://github.com/github/copilot-cli/issues/4560)

### 🟠 #4566 Agent 反复"口头确认"却不执行工具操作
`[area:agents] [area:tools]`  
1.0.80 + `gpt-5.3-codex` 环境下，Agent 持续输出确认文本但始终不触发工具调用，使用者无法推进任务。该问题可复现，反馈者给了 👍。  
🔗 [Issue #4566](https://github.com/github/copilot-cli/issues/4566)

### 🟠 #4570 Windows：VS Code 运行时插件安装/更新报 "Access is denied"
`[triage]`  
Windows 下只要 VS Code 处于打开状态，`copilot plugin install/update` 即失败（os error 5），关闭 VS Code 后恢复正常，影响全部插件。  
🔗 [Issue #4570](https://github.com/github/copilot-cli/issues/4570)

### 🟠 #4561 ACP 模式下 session/cancel 返回错误 stopReason
`[area:sessions] [area:non-interactive]`  
ACP 协议要求取消时返回 `stopReason: "cancelled"`，实际却返回 `end_turn`，导致客户端无法区分正常结束与用户取消。  
🔗 [Issue #4561](https://github.com/github/copilot-cli/issues/4561)

### 🟡 #4562 MCP 重载沿用启动时的旧配置快照
`[area:configuration] [area:mcp]`  
若 `.github/mcp.json` 在会话中被修正，重启 MCP 服务仍会重试旧命令，而非读取新配置。影响开发者在迭代 MCP 配置时的调试效率。  
🔗 [Issue #4562](https://github.com/github/copilot-cli/issues/4562)

### 🟡 #4568 `--cloud` 模式多重故障：所有者列表挂起、任务卡死、429 限流
`[area:sessions] [area:networking]`  
缺少仓库上下文时卡在 "Loading available owners..."；有上下文时任务停留在 `session.requested` 直到超时；轮询还会触发 429。  
🔗 [Issue #4568](https://github.com/github/copilot-cli/issues/4568)

### 📈 其他值得关注
- **#4569** GitHub Mobile 显示 "Queued for Copilot" 不刷新，但本地 CLI 已响应。  
  [Issue #4569](https://github.com/github/copilot-cli/issues/4569)
- **#4414** BYOK 自定义提供商在本地被误判 403（2 个 👍）。  
  [Issue #4414](https://github.com/github/copilot-cli/issues/4414)

---

## 4. 重要 PR 进展

过去 24 小时仅收到 **1 个 PR**：

### ⚠️ #4573 Rename README.md to README.mdmain
`[OPEN]` 创建于 2026-08-23  
将 README.md 重命名为 "README.mdmain" 的提交，不涉及任何代码或文档内容修改。初步判断为**无效/垃圾 PR**，建议维护者直接关闭。社区 PR 活跃度较低，近期核心提交集中在 release 分支。  
🔗 [PR #4573](https://github.com/github/copilot-cli/pull/4573)

---

## 5. 热门 Discussions

> ⚠️ 数据源未包含 Discussions 数据，本期不做展示。

---

## 6. 功能需求趋势

根据近期 Issues 与 PR 中的社区呼声，最集中的功能诉求方向如下：

| 方向 | 典型 Issue / PR | 社区诉求 |
|------|----------------|----------|
| **推理强度可配置化** | #4560、#4571 | `auto` 模型应允许用户自定义 reasoningEffort；压缩阈值目前不可控 |
| **企业级认证可靠性** | #2306 | Copilot Feature 策略授权需更稳定，不应周期性失灵 |
| **插件与本地开发体验** | #4570、#4562 | Windows 插件安装不受 VS Code 文件占用影响；MCP 配置修改后实时生效 |
| **Agent 执行可靠性** | #4566、#4572 | 工具调用必须可追踪、可恢复；压缩不能丢弃已完成工具的结果 |
| **云/远程协作模式** | #4568、#4569 | `--cloud` 模式应更稳定；移动端状态同步需要刷新机制 |
| **协议合规性** | #4561 | ACP 取消语义需严格符合协议，便于自动化工具链集成 |

---

## 7. 开发者关注点

- **认证/授权是最大痛点**：Issue #2306 持续数月未根治，且与企业策略绑定，影响面广，用户信任成本高。
- **上下文压缩与记忆功能不稳定**：压缩导致工具结果丢失（#4572）、随机提前压缩（#4571）、memory 写入失败（#4535）——核心会话能力仍不够可靠。
- **模型行为不可预期**：`auto` 逻辑单一强制禁用推理强度（#4560），Agent 偶尔"口惠而实不至"（#4566），用户对模型路由的掌控需求增强。
- **Windows 平台体验落后**：插件安装受 VS Code 锁文件影响（#4570），本地开发场景受阻。
- **远程与移动端协同仍是短板**：`--cloud` 挂起与移动端状态不刷新（#4568/#4569）表明远程会话链路需要专门优化。
- **配置热更新需求普遍**：MCP 配置（#4562）与本地 marketplace 插件（v1.0.81-8 已改善）需要更敏捷的生效机制。

---

*日报由 AI 自动整理，基于公开 GitHub 数据，不完全代表项目维护者意见。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-08-24

## 今日速览

今日社区核心关注点集中在**会话可靠性**与**模型/API 连接稳定性**上：多个新报告指向网络错误导致的会话中断（#44528、#44447），以及 Zen 网关持续限流问题（#44300、#44207）。与此同时，大量 PR 正在推进 **V2 的会话可靠性修复与 TUI 交互优化**，包括流式 watchdog 默认开启、空响应自动重试、Mermaid Gantt 渲染等。此外，#32157 以 76 个 👍 成为社区呼声最高的功能需求，提议为运行中的模型提供可配置的提示投递模式。

---

## 社区热点 Issues

### 1. [模型问题] 本地 Ollama 工具调用失败或不触发
**#1034** · 评论 31 · 👍 16 · 已关闭  
作者报告 `qwen3:32b` 在本地 Ollama 上能识别需要调用工具，但“只思考不执行”，偶发成功。31 条评论说明该问题影响了大量 Ollama 本地模型用户，社区对此有广泛讨论，但尚未确认通用解法。
🔗 https://github.com/anomalyco/opencode/issues/1034

### 2. [Bug] AGENTS.md 被完全忽略
**#847** · 评论 11 · 👍 0 · 已关闭  
用户将指令写入 `AGENTS.md` 后，Build 模式完全无视其内容（版本 0.2.23）。这类“上下文文件未生效”类问题在社区中反复出现，影响项目级自定义规则的实际落地。
🔗 https://github.com/anomalyco/opencode/issues/847

### 3. [Bug] 网络错误：会话无法继续
**#44528** · 评论 7 · 新报告 · 打开  
用户使用 Big Pickle 模型（ollama cloud）在 Windows 10 上数天未用后，今日启动即持续报网络错误。与 #44522、#44473 等形成一组同类报告，均指向“Provider finish_reason: network_error”。
🔗 https://github.com/anomalyco/opencode/issues/44528

### 4. [Bug] UI 流错误后卡死在 "thinking" 状态
**#32366** · 评论 7 · 👍 1 · 打开  
流式响应出错（如 `AI_APICallError`、socket 意外关闭）后，桌面端 UI 无限期显示“thinking...”且无任何错误提示，会话完全不可用，只能重启应用。属于典型的“失败后无恢复路径”的健壮性问题。
🔗 https://github.com/anomalyco/opencode/issues/32366

### 5. [功能] 可配置的 mid-run 提示投递：queue vs steer
**#32157** · 评论 7 · 👍 76 · 打开  
提议在模型生成过程中，对用户新提交的提示提供 `queue`、`steer`、`break` 三种语义的区分，并以压缩感知（compaction-aware）的方式处理。76 个 👍 表明这是当前社区最想要的功能之一。
🔗 https://github.com/anomalyco/opencode/issues/32157

### 6. [文档] 法语翻译错误：bash 被译为 "frapper"
**#38498** · 评论 6 · 打开  
`/docs/fr/tools/` 页面中，"bash" 被翻译成 "frapper"（意为“殴打”），"glob" 被译为 "globe"（意为“球体”）。技术术语不应翻译，该问题在社区看来虽小但影响专业形象。
🔗 https://github.com/anomalyco/opencode/issues/38498

### 7. [Bug] 流式输出期间阅读历史消息导致视口跳回底部
**#29094** · 评论 6 · 👍 2 · 打开  
#4196 的重新开启版本：模型输出过程中用户向上滚动阅读历史消息，每个新 token 都会把视口拽回底部，导致中途阅读几乎不可能。多用户确认复现，属于影响深度的 TUI 体验问题。
🔗 https://github.com/anomalyco/opencode/issues/29094

### 8. [Bug] V2 中 TODO 工具缺失，模型无法更新待办列表
**#42421** · 评论 5 · 已关闭  
V1 中模型可通过 `todowrite`/`todoread` 维护 TUI 中显示的 TODO 列表；V2（0.0.0-next-17403）的运行时工具目录不再暴露这两个工具，模型端失去该能力。V2 功能对齐问题仍是社区重点关注方向。
🔗 https://github.com/anomalyco/opencode/issues/42421

### 9. [Bug] Zen base URL 持续触发限流
**#43627** · 评论 5 · 已关闭  
用户报告通过 OpenCode Zen base URL 的请求已连续 5 天被限流，即使更换账号和电脑也无法解决。同类问题在 #44207、#43404 中反复出现，社区质疑限流策略是否误判了正常使用。
🔗 https://github.com/anomalyco/opencode/issues/43627

### 10. [Bug] MCP 工具结果中 structuredContent 被丢弃
**#38923** · 评论 4 · 👍 1 · 打开  
当 MCP 服务器返回同时包含 `content`（文本）和 `structuredContent`（结构化 JSON）的结果时，opencode 只透传文本，丢弃结构化数据。对依赖结构化输出的 MCP 工具影响较大，社区建议融合两部分内容后再送模型。
🔗 https://github.com/anomalyco/opencode/issues/38923

---

## 重要 PR 进展

### 1. [功能] ACP v2 草案支持（WIP）
**#44524** · 打开 · 更新 2026-08-23  
实现 [Agent Client Protocol v2 草案](https://agentclientprotocol.com/announcements/acp-v2-draft)，按照官方迁移指南推进。当前为草稿 PR，用于跟踪进度和征集反馈。
🔗 https://github.com/anomalyco/opencode/pull/44524

### 2. [架构] 将工作区身份与提供方配置解耦
**#44526** · 打开 | contributor  
`Workspace.create` 只负责校验 provider 并提交逻辑工作区 ID，真正的 provider 配置工作移至 `Workspace.provision`。这使远程工作区启动可与模型执行并行，甚至完全懒加载。
🔗 https://github.com/anomalyco/opencode/pull/44526

### 3. [功能] 流式 watchdog 默认开启 + 队列控制 + 后台中止保留
**#44529** · 已关闭 · 更新 2026-08-23  
将 `headerTimeout` 和 `chunkTimeout` 从 opt-in 改为默认开启，解决 SSE 流在无显式配置时永久挂起的问题；同时加入队列控制和后台 abort 行为。直接针对今日多个“会话卡死”类报告（如 #32366）。
🔗 https://github.com/anomalyco/opencode/pull/44529

### 4. [功能] 项目记忆层：基于文件的跨会话知识持久化
**#44539** · 打开 | needs:compliance  
新增 `memory` 工具（list/read/write/delete），支持命名空间（如 `architecture/decisions`），存储于 `<xdg-data>/opencode/memory/`。让 agent 的认知可以跨 session 累积，类似 Claude 的 memory 方案。
🔗 https://github.com/anomalyco/opencode/pull/44539

### 5. [TUI] 渲染 Mermaid Gantt 图
**#44534** · 打开 | contributor  
在 V2 TUI 中将 Mermaid Gantt fence 渲染为终端原生图表，替代直接展示源码。支持 section/task 标签对齐、活动/关键/里程碑任务区分。
🔗 https://github.com/anomalyco/opencode/pull/44534

### 6. [修复] 自动重试无详情的 Responses API 错误
**#44537** · 已关闭 · bot  
将无 detail 的 Responses API 错误事件归类为瞬时 provider 故障并触发重试，同时保留原始 payload 用于诊断。附回归测试。
🔗 https://github.com/anomalyco/opencode/pull/44537

### 7. [TUI] 启动加载画面
**#44523** · 已关闭 · 更新 2026-08-23  
在启动过程中展示加载界面，替代长达 10 秒的黑屏等待，改善冷启动体验。
🔗 https://github.com/anomalyco/opencode/pull/44523

### 8. [桌面端] 重新连接由选举产生的核心服务
**#44369** · 已关闭 · 更新 2026-08-23  
桌面端的事件流断开后，允许重新解析当前选举出的 managed daemon；重连后同步轮换 HTTP、SSE、PTY 和 URL 客户端。版本检查只在首次启动时强制，后续重连以当前服务为准。
🔗 https://github.com/anomalyco/opencode/pull/44369

### 9. [修复] 停止在重发增量中产生幽灵 "unknown" 工具片段
**#44535** · 打开  
修复 #33618：`unknown` 工具调用由 opencode 自身在 re-emitted deltas 中产生，而非模型发出。该修复直接消除多余的幽灵工具记录。
🔗 https://github.com/anomalyco/opencode/pull/44535

### 10. [修复] 自动重试空的 stop 响应
**#44536** · 打开 | needs:compliance  
继 #44532 的 finish-reason 日志后，确认“需要反复输入 continue”的剩余原因是 provider 返回空内容 + `finish_reason: stop`（0 个输出 token）。此 PR 实现了自动重试机制。
🔗 https://github.com/anomalyco/opencode/pull/44536

---

## 功能需求趋势

综合今日 Issues 与 PR 指向，社区最关注的功能方向为：

1. **会话可靠性治理**（最集中）：流式 watchdog 默认开启（#44529）、空响应自动重试（#44536）、无详情错误重试（#44537）、可配置重试退避策略（#43596）。多个 PR 同步推进，说明这是当前最重要且最受关注的工程方向。
2. **V2 功能补全**：TODO 工具回归（#42421）、mid-run 提示投递控制（#32157）、项目/会话管理（#37280）、主题系统升级（#38536）。
3. **协议与生态集成**：ACP v2 草案支持（#44524）、MCP 结构化内容透传修复（#38923）、Neon AI Gateway 文档（#38573）。
4. **知识持久化**：跨会话项目记忆层（#44539） 为新增亮点，表明社区对 agent 长期记忆的期待。
5. **TUI/UX 细节打磨**：Mermaid Gantt 渲染（#44534）、启动加载画面（#44523）、工具错误卡片对齐 Figma（#44543）、文件写入预览（#38539）、滚动条可见性（#44428）、思考状态 UI 卡死（#32366）。

---

## 开发者关注点

1. **网络错误中断会话是今日最大痛点**：`Provider finish_reason: network_error` 在 #44528、#44522、#44473、#44505、#44447 等过多条 issue 中反复出现，涉及 Big Pickle、Ollama Cloud、Kiro 等多个模型，跨 Windows/macOS 多平台。影响面广且直接阻断开发流程。
2. **Zen 平台限流问题引发集中吐槽**：连续 5-7 天被限流（#43627、#44207、#43404），用户更换账号/机器仍无法解决；此外还有免费模型在包含 `tools` 请求时报 “Endpoint is unavailable”（#44300）。社区对限流策略的透明度和误判率表示不满。
3. **OpenAI 兼容模型工具调用可靠性**：无效 schema 参数导致工具调用失败（#29142、PR #30224），本地模型（尤其 Ollama）工具调用不稳定（#1034）——这类兼容性问题是工具链实际可用性的瓶颈。
4. **配置合并逻辑令人困惑**：`opencode debug config` 多个来源（opencode.json）合并行为不清晰（#44290），用户表达强烈不满。配置系统需要更明确的优先级说明和诊断输出。
5. **上下文长度不一致**：同型号在其他 CLI 中可用 960K 上下文，而 opencode 只有 260K（#43480），用户在大型代码库场景下感知明显差异。
6. **同 repo 多 checkout 项目识别错乱**：项目 ID 从 git remote 派生，导致同一仓库的多个本地克隆被合并为单一项目，显示错误的名称/路径（#44101）。
7. **遗留高频问题持续热帖**：AGENTS.md 被忽略（#847）距今一年仍被反复提及，视口跳动问题（#29094）与卡 thinking（#32366）修复进度受关注。

---

*本日报由技术分析师基于 GitHub 公开数据整理，时间为 2026-08-24。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 — 2026-08-24

> 数据来源：earendil-works/pi（GitHub）

---

## 1. 今日速览

- 今日无新版本发布，社区焦点集中在 **多提供商兼容性修复** 与 **TUI 交互增强** 上。
- **llama.cpp 内置模型不可选**（#8167）迎来实质性进展：#8479 与 #8535 两个 PR 先后落地，支持在 `/model` 列表中直接展示并选用未加载的 llama.cpp 模型。
- 针对严格 OpenAI 兼容提供商（如 Kimi）回放历史 400 报错的问题，#8536 通过规范化工具消息顺序予以修复；同时多条 TUI 与扩展能力相关 PR 持续推进。

---

## 2. 版本发布

无。

---

## 3. 社区热点 Issues

### 1. [#8167] [bug] Cannot pick a model with built-in llama.cpp support
💬 10 条评论 | 状态：已关闭
**为什么重要：** llama.cpp 路由模式下模型不会出现在 `/model` 列表中，用户只能通过 `/llama` 命令手动加载。该问题直接影响了使用本地模型的日常体验。
**社区反应：** 已由 #8479 与 #8535 两个 PR 修复（#8535 专为 `/model` 展示未加载模型而设计），热度较高。
🔗 https://github.com/earendil-works/pi/issues/8167

### 2. [#7683] pi-tui: let components receive mouse events on their own rows
💬 11 条评论 | 状态：已关闭
**为什么重要：** 为 TUI 组件增加可选的 `onMouse` 钩子，按 `LayoutBox` 命中测试分发鼠标事件，能让组件在滚动条/选区处理前自定义响应。这是 TUI 可交互性提升的基础能力。
**社区反应：** 已由 PR #8032 实现（仍在 open 状态），讨论集中在事件冒泡顺序与命中测试实现。
🔗 https://github.com/earendil-works/pi/issues/7683

### 3. [#7885] npm search not indexing newly published pi-packages
💬 7 条评论 | 状态：已关闭
**为什么重要：** 新发布的 pi-package 无法通过 `npm search` 被发现，导致 pi.dev 的 packages 画廊缺失最新扩展，直接伤害第三方扩展分发生态。
**社区反应：** 用户反馈搜索不到自己刚发布的 `pi-affix-prompt`，社区对索引机制与画廊同步逻辑表示关注。
🔗 https://github.com/earendil-works/pi/issues/7885

### 4. [#5932] [to-discuss, new-harness] exposing ctx.navigateTree() to agents
💬 7 条评论 | 👍 2 | 状态：开放
**为什么重要：** `navigateTree()` 目前只存在于 `ExtensionCommandContext`，普通 event/tool 的 `ExtensionContext` 无法调用。自定义 `/goal` 实现依赖此能力，是扩展 API 一致性的代表性需求。
**社区反应：** 参与者讨论了两个上下文生命周期的差异，以及如何在 new-harness 架构下安全暴露。
🔗 https://github.com/earendil-works/pi/issues/5932

### 5. [#7724] Cold restore replays an overflow assistant removed by live recovery
💬 4 条评论 | 状态：开放
**为什么重要：** 上下文溢出后 Pi 会压缩并重试，但重新打开会话时会把被移除的失败/截断响应再次加入历史，导致模型看到重复的"失败→成功"序列，污染上下文。
**社区反应：** 属于隐蔽的状态一致性 bug，讨论聚焦于恢复时如何正确标记已丢弃的 assistant 消息。
🔗 https://github.com/earendil-works/pi/issues/7724

### 6. [#8183] Document Windows Terminal's Ctrl+Shift+F conflict with fullscreen transcript search
💬 6 条评论 | 状态：已关闭
**为什么重要：** Windows Terminal 的 "查找" 快捷键与 Pi 全屏搜索冲突，用户会被系统级弹窗打断。这是 Windows 平台体验的典型摩擦点。
**社区反应：** 社区建议在文档中提供重绑定方案，并顺带引出更广泛的 Windows 键位冲突讨论（#8372）。
🔗 https://github.com/earendil-works/pi/issues/8183

### 7. [#8537] Kimi (moonshotai-cn) 400s on replayed tool history
💬 2 条评论 | 状态：已关闭
**为什么重要：** Kimi 严格校验消息顺序，回放历史时出现 `tool` 消息无对应 `tool_calls`、重复 `tool_call_id` 等 400 错误。宽松提供商（DeepSeek/OpenAI）不会暴露此类问题，属于"换提供商就翻车"的兼容性痛点。
**社区反应：** 报告者直接提交了修复 PR #8536，反应迅速。
🔗 https://github.com/earendil-works/pi/issues/8537

### 8. [#8522] Agent operates outside session cwd — modifies and deletes files in unrelated project directories
💬 1 条评论 | 状态：已关闭
**为什么重要：** Agent 不把启动目录当作主工作区，反而从 `~/` 开始扫描并读写无关项目。这是数据安全与沙箱隔离层面的高风险 bug。
**社区反应：** 虽然只有 1 条评论，但问题严重性高，社区随后有多个关于工作目录边界确认的讨论。
🔗 https://github.com/earendil-works/pi/issues/8522

### 9. [#8531] Auto-retry stalls silently after consecutive 'Request timed out' errors — session hangs indefinitely
💬 1 条评论 | 状态：已关闭
**为什么重要：** 连续超时后自动重试静默停滞，会话永久挂起，无错误提示。这直接影响长时间 RPC 模式下的可靠性。
**社区反应：** 与 PR #8505（重试退避封顶）直接呼应，被视为同一类问题的修复方向。
🔗 https://github.com/earendil-works/pi/issues/8531

### 10. [#8452] Improve default compaction prompt for continuation-state fidelity
💬 5 条评论 | 状态：已关闭
**为什么重要：** 当前压缩提示偏向生成"可读的散文摘要"，忽略了操作状态（如已观察结果 vs 推断结果），编码会话的 checkpoint 容易丢失关键上下文。
**社区反应：** 讨论提出去重、合并、区分"直接观测结果"与"推断"，代表了高级用户对长会话可控性的诉求。
🔗 https://github.com/earendil-works/pi/issues/8452

---

## 4. 重要 PR 进展

### 1. [#8535] feat(coding-agent): For llama.cpp, also show unloaded models in `/model`
**功能：** 让 llama.cpp router 暴露的未加载模型也出现在 `/model` 列表中，发送提示时自动加载目标模型，无需手动 `/llama`。
**意义：** 直接解决 #8167，大幅改善本地模型使用体验。
🔗 https://github.com/earendil-works/pi/pull/8535

### 2. [#8536] fix(ai): normalize tool-result history for strict OpenAI-compatible providers
**修复：** 针对 Kimi/Moonshot 等严格校验消息顺序的提供商，规范化回放历史中的 tool 消息、删除孤立 tool 结果、去重 `tool_call_id`。
**意义：** 解决 #8537，消除"换个提供商就 400"的隐性地雷。
🔗 https://github.com/earendil-works/pi/pull/8536

### 3. [#8032] feat(tui): let components receive mouse events on their own rows
**功能：** 实现 `Component.onMouse(event)` 钩子，`TuiAltScreen` 按 `LayoutBox` 命中测试分发鼠标事件，`row/col` 相对组件自身坐标。
**意义：** 关闭 #7683，为 TUI 组件（如下拉菜单、悬停提示）提供原生鼠标交互基础。
🔗 https://github.com/earendil-works/pi/pull/8032

### 4. [#8512] feat(coding-agent): add optional PowerShell tool
**功能：** 新增可选 PowerShell 工具，降低 Windows 上 git-bash 路径处理带来的兼容性痛苦。
**意义：** 属于社区驱动的 Windows 原生体验改进，目前仍为 open 状态，作者明确表示需要更多实测反馈。
🔗 https://github.com/earendil-works/pi/pull/8512

### 5. [#8532] fix(coding-agent): cap grep and find child output so one line cannot kill the parent
**修复：** 为 grep/find 子进程的 stdout 增加行级长度上限，避免单行输出超过 V8 字符串最大值时触发 `RangeError` 并拖垮父进程。
**意义：** 长会话中工具输出过大导致的崩溃类问题，属于隐蔽但高破坏力的稳定性修复。
🔗 https://github.com/earendil-works/pi/pull/8532

### 6. [#8524] fix(coding-agent): retain working status until settled
**修复：** 保留交互式 `Working...` 指示器直到 `agent_settled` 回调全部完成，外部观察者不会过早报告"turn 已完成"。
**意义：** 改善 RPC/远程观察场景下的状态一致性。
🔗 https://github.com/earendil-works/pi/pull/8524

### 7. [#8513] fix(coding-agent): repair raw control characters in stringified edit args
**修复：** 针对模型发送含真实换行/Tab 的字符串化 edits 参数，修复 `JSON.parse` 抛错且被静默吞掉的逻辑。
**意义：** 延续 #3370 的容错方向，减少模型输出格式漂移引发的工具调用失败。
🔗 https://github.com/earendil-works/pi/pull/8513

### 8. [#8505] fix(coding-agent): cap agent retry backoff
**修复：** 新增 `retry.maxAgentDelayMs` 配置项，指数退避上限默认 30 秒，避免无限退避导致会话挂起。
**意义：** 与 #8531 直接对应，提升长时间故障下的可恢复性。
🔗 https://github.com/earendil-works/pi/pull/8505

### 9. [#8509] fix(ai): surface stream errors and support toolless models
**修复：** 当 `native_finish_reason` 为 `network_error` 但外层 `finish_reason` 为 `stop` 时，不再静默按正常结束处理；同时支持无工具模型。
**意义：** 解决 Nous Ox Alpha 等场景下"静默失败"问题，让真实错误可被用户感知。
🔗 https://github.com/earendil-works/pi/pull/8509

### 10. [#8500] fix(plan-mode): eliminate false positives in plan mode bash guard and plan extraction
**修复：** 修复 plan-mode bash 安全守卫误伤含 `code` 路径的只读命令，并防止计划提取器被 demo 文本欺骗。
**意义：** 减少 plan 模式下的误拦截与误提取，提高安全机制可用性。
🔗 https://github.com/earendil-works/pi/pull/8500

---

## 5. 热门 Discussions

### Show and tell

- **[#8508] dsh-pi-agent — run the Pi loop inside DeepSeek Harness (DSH), with DSH's web UI**
  👍 1 | 0 条评论
  **内容：** 作者构建了一个插件，将 DeepSeek Harness 的 agent 循环替换为 Pi，同时保留 DSH 的 Web 前端、会话持久化与 hooks，子代理引擎完整可用。
  **评价：** 属于第三方生态集成案例，展示了 Pi 作为可嵌入 agent 引擎的灵活性。
  🔗 https://github.com/earendil-works/pi/discussions/8508

---

## 6. 功能需求趋势

综合今日 Issue 与 PR，社区最关注的功能方向如下：

- **新模型支持**：向内置目录添加新模型（#8469：deepseek-v4-flash-vision-exp），并修复新模型在既有提供商体系下的错误处理（#8541、#8509）。
- **llama.cpp 集成深化**：不仅模型可加载，还应在 `/model` 中直接看到并选用未加载模型（#8535/#8479）。
- **TUI 可交互性增强**：组件级鼠标事件（#7683/#8032）、按工具输出块展开/折叠（#8344）、highlight.js 符号着色（#8534）。
- **扩展 API 能力补全**：`navigateTree` 暴露到普通 ExtensionContext（#5932）、技能可见性控制（#8533）、句中调用技能（#8457）、`user_bash` 完成事件（#8530）、markdown 渲染上下文提供 `messageId`/`timestamp`（#7952）。
- **Windows 原生体验**：解决终端键位冲突（#8183/#8372）、添加 PowerShell 工具（#8512）、修复 `@` 文件补全对盘符路径支持（#8523）。
- **上下文管理与可靠性**：改进压缩提示以保留操作状态（#8452）、修复冷恢复时重放被移除的溢出消息（#7724）、为自动重试增加退避上限（#8505/#8531）。

---

## 7. 开发者关注点

从今日反馈中提炼的高频痛点：

- **提供商兼容性碎片化**：同样一段会话历史，在 DeepSeek/OpenAI 能跑，切到 Kimi 就 400；上游错误（429/network_error）被降级成笼统 `ERROR`，丢失可诊断信息。开发者希望 Pi 能屏蔽各提供商在消息顺序、错误体格式上的差异。
- **上下文压缩与恢复的语义保真**：压缩后再次恢复时，模型看到"被移除了又出现"的历史消息；压缩摘要不区分"已观测事实"与"推断结论"。这导致长会话后期行为漂移，开发者呼吁把压缩视为一种有损但明确的"检查点"，而不是散文重写。
- **Windows 支持仍是二等公民**：终端键位冲突、路径处理差异、盘符补全失效、缺少原生 PowerShell 工具。社区并非要求 Pi 为每个平台特判，而是希望提供足够的文档与配置手段来规避冲突。
- **长会话稳定性**：工具单行输出可杀死父进程、`todo` 工具非幂等导致重复调用误翻转状态、重试静默挂死。开发者希望默认配置更保守，同时提供可调开关。
- **工作目录与安全边界**：Agent 会在会话 cwd 之外自由读写文件，`/share` 会隐式继承 `GITHUB_TOKEN` 环境变量。多用户反馈希望 Pi 对"主工作区"有更严格的界定和默认防护。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-08-24）

## 1. 今日速览

- 发布 v0.22.0-nightly 版本，主要修复 Web Shell 从概览面板打开会话时工作目录传递错误的问题。
- 安全 Issue #9089（PAT 令牌与不可信代码共享主机）在经历多轮加固后关闭，但暴露出需要 runner 级隔离的深层架构问题。
- 社区关注热点集中在 API 流中断（#5975）、Windows 终端中文输入显示不清（#8625）以及权限配置未真正生效（#9827）三大痛点上。

## 2. 版本发布

**v0.22.0-nightly.20260823.1007bcacfc**

- fix(web-shell): pass session workspace cwd when opening from overview panel（@wenshao，PR #9730）
- 另一项 web-shell 相关修复（release notes 展示不完整）

## 3. 社区热点 Issues

挑选了 10 个最值得关注的 Issue，按优先级与社区讨论热度排序。

**#5975 — [P2/open] API 流中断：120 秒无活动报错** ⭐ 11 评论
- 链接: https://github.com/QwenLM/qwen-code/issues/5975
- 现象：升级到 v0.19.3 后频繁出现 `No stream activity for 120000ms after 19 chunks`，此前版本正常。模型思考完成后长时间无输出，最终报错，严重影响日常使用。
- 社区反应：多条回复复现该问题，目前状态为 needs-triage，欢迎 PR。

**#8625 — [P2/open] Windows 终端中文输入拼音看不清** ⭐ 8 评论
- 链接: https://github.com/QwenLM/qwen-code/issues/8625
- 现象：Windows 终端中输入中文时，拼音候选显示模糊不清，影响中文用户输入体验。
- 社区反应：UI 渲染问题，已有用户附截图，标记 welcome-pr。

**#9089 — [P1/closed] 安全：PAT 令牌任务与不可信分支代码共享主机**
- 链接: https://github.com/QwenLM/qwen-code/issues/9089
- 内容：autofix 流程中携带 PAT 的 job 与不可信分支代码运行在同一主机，需要 runner 级隔离。PR #8961 已加固四轮，但该问题无法在 GitHub Actions step 内部闭合。
- 社区反应：由维护者 wenshao 提出并关闭，安全架构层面的重要提醒。

**#7585 — [P3/closed] 提案：添加 Direct External Context Provider Profile** ⭐ 13 评论
- 链接: https://github.com/QwenLM/qwen-code/issues/7585
- 内容：建议为 Qwen Code 增加私有 monorepo 集成方案，提供互斥的按需与自动召回两种 profile，使单个 CLI 进程获取管理员绑定的仓库共享上下文。
- 社区反应：评论数最高（13 条）的 Issue，讨论热烈，虽为 P3 但关注度高。

**#9827 — [P2/open] permissions.allow 未真正限制发送给模型的工具集**
- 链接: https://github.com/QwenLM/qwen-code/issues/9827
- 现象：设置 `permissions.allow` 白名单后，`/tools` 显示正常，但实际 API 请求仍携带完整内置工具集，白名单未在请求层生效。
- 社区反应：新提交的 Issue，涉及权限与隐私预期，值得关注。

**#9821 — [P2/open] 原生 slash commands 间歇性在 Skill 工具面缺失**
- 链接: https://github.com/QwenLM/qwen-code/issues/9821
- 现象：用户级 `commands/*.md` 约 50% 概率无法通过 Skill 工具调用，报 "not found"；内置和真实用户级 skills 不受影响。存在于 0.21.8 及以上版本。
- 社区反应：新 Issue，指向异步 `modelInvocableCommands` 竞态条件。

**#9016 — [P2/closed] Vertex AI 无法使用 ADC 认证**
- 链接: https://github.com/QwenLM/qwen-code/issues/9016
- 现象：Vertex AI 认证强制要求 API key，但配置任何 key 都会导致 401；正确配置 ADC 也无法绕过。
- 社区反应：Google Auth 集成缺陷，已关闭，修复方案未知。

**#8586 — [P2/open] 功能请求：追踪 activeWork 与后台 Agent 恢复**
- 链接: https://github.com/QwenLM/qwen-code/issues/8586
- 内容：建议在 daemon 深度健康检查中增加 `activeWork` 事实，并为超出前台 prompt 生命周期或停止进展的后台 Agent 构建恢复路径，覆盖 5 个层面。
- 社区反应：涉及 daemon/ACP 会话报告，属于 roadmap/background-automation 方向。

**#8769 — [P2/open] 提案：将 /review 步骤 3–5 编排迁移到 workflow 引擎**
- 链接: https://github.com/QwenLM/qwen-code/issues/8769
- 内容：将 `/review` 的 agent 扇出、验证、反向审计从模型驱动改为 workflow 引擎（`QWEN_CODE_ENABLE_WORKFLOWS`）上的确定性代码。
- 社区反应：维护者 wenshao 提出，属于 roadmap/multi-agent 方向。

**#8662 — [P3/open] 将 TUI 渲染层从 ink 迁移到 OpenTUI**
- 链接: https://github.com/QwenLM/qwen-code/issues/8662
- 内容：当前 ink 7 + React 19 渲染方案存在闪烁、滚动条等问题（补丁约 1037 行），建议迁移到 OpenTUI 获得无闪烁渲染和一流鼠标支持。
- 社区反应：属于 roadmap/terminal-ux，讨论中。

## 4. 重要 PR 进展

挑选 10 个重要 PR，覆盖核心逻辑修复与功能增强。

**#9492 — fix(core): loop detection result-aware for task_list polls**
- 链接: https://github.com/QwenLM/qwen-code/pull/9492
- 内容：针对 `task_list` 这类状态型只读工具，相同参数可能因队友修改共享任务板而产生不同结果，循环检测不再仅凭参数相同判定循环。

**#9802 — feat(web-shell): add async submit preparation**
- 链接: https://github.com/QwenLM/qwen-code/pull/9802
- 内容：为嵌入式 Web Shell 宿主新增可选异步 `prepareSubmit` 回调，可在本地命令处理后、提交门槛与队列准入前替换 outgoing prompt 与输入注解。

**#9392 — fix(serve): let channel workers reach TLS-enabled daemons**
- 链接: https://github.com/QwenLM/qwen-code/pull/9392
- 内容：配置 `--tls-cert/--tls-key` 时，daemon 向 channel workers 传递 `https://` 回环地址，worker 启动校验接受 https，修复 `qwen serve` 无法连接 TLS daemon 的问题。

**#9657 — feat(web-shell): compact agent activity summaries**
- 链接: https://github.com/QwenLM/qwen-code/pull/9657
- 内容：紧凑模式将相邻的思考、工具活动与并行 agents 折叠为单一活动摘要，展开后以嵌套进度行查看并行 agent 详情。

**#9723 — feat(review): run the reviewed repository's own commands behind a container**
- 链接: https://github.com/QwenLM/qwen-code/pull/9723
- 内容：/review 在执行被审查仓库自身的命令时放入容器边界，由 operator 以策略方式设定运行环境，而非依赖仓库实际安装内容。安全加固。

**#9761 — feat(review): keep deferred suggestions recoverable off the PR page**
- 链接: https://github.com/QwenLM/qwen-code/pull/9761
- 内容：/review 收敛姿态启动后（默认 auto floor 第 6 轮起），suggestions 移入 review body 的 deferral 列表，本 PR 让后续自动化工具可以从 PR 页面之外恢复该列表。

**#9793 — fix(core): surface nested sub-agent approvals under background parents**
- 链接: https://github.com/QwenLM/qwen-code/pull/9793
- 内容：修复嵌套 sub-agent 中需要用户确认的工具调用无人监听 `TOOL_WAITING_APPROVAL` 事件而永久挂起的问题，Fixes #9782。

**#9565 — feat(core): add the output-style layer to the system prompt**
- 链接: https://github.com/QwenLM/qwen-code/pull/9565
- 内容：新增输出风格层，会话级别应用。内置四种风格：Concise（跳过前言直奔答案）、Proactive（主动开始工作）等。

**#9590 — feat: support provider-aware reasoning controls**
- 链接: https://github.com/QwenLM/qwen-code/pull/9590
- 内容：WebShell 推理控制支持 DeepSeek V4、GLM 5.2、Kimi 模型，匹配各文档路由：仅切换混合型、标准 effort 层级、以及不可关闭思考的模型。

**#9546 — feat(serve): expose Workflow tasks and controls**
- 链接: https://github.com/QwenLM/qwen-code/pull/9546
- 内容：通过 daemon 以显式 opt-in 方式暴露 Workflow 执行：客户端可检查实时与持久化运行（phase、dispatch、token、log、审批、lineage、终态）、控制活动运行，扩展会话任务契约。

## 5. 热门 Discussions

本期未提供 Discussions 数据，此节省略。

## 6. 功能需求趋势

从全部 Issues 与 PR 中提炼出社区最关注的五个功能方向：

1. **/review 体系持续强化（最活跃）**：涉及容器执行隔离（#9723）、deferred suggestions 可恢复性（#9761）、prose-execution 审计与 counter-frame 审计（#9717）、跨 rebase 文件级 verdict 迁移（#9661）、workflow 引擎编排（#8769）。Qwen Code 正在把代码审查自动化做深做厚。
2. **Web Shell 体验优化**：async submit 准备（#9802）、紧凑 agent 活动摘要（#9657）、拖拽文件支持（#9743）、reasoning effort 显示修复（#9595）、会话目录刷新修复（#9562）。
3. **多模型与提供商支持**：provider-aware 推理控制（#9590）、setup wizard 动态推荐模型列表（#9389）、DeepSeek V4 Flash Vision 图片能力缺失（#9832）。
4. **安全与权限加固**：PAT 任务 runner 隔离（#9089）、`permissions.allow` 真正过滤 API 请求工具集（#9827）、review 命令容器化（#9723）、仓库外 artifact 落盘（#9776）。
5. **会话与后台任务生命周期管理**：sessionRotation 会话轮换（#8927）、持久化会话生命周期修复（#9626）、activeWork/后台 Agent 恢复追踪（#8586）。

## 7. 开发者关注点

高频痛点与反馈集中在以下几方面：

- **API 流中断问题复发**（#5975）：升级后从"Thought for 2s"到无输出→120 秒超时，体验开倒车，社区呼声高。
- **Windows 中文输入体验差**（#8625）：拼音显示不清是中文用户高频场景，直接影响日常使用。
- **权限配置"看起来生效"但实际未生效**（#9827）：UI 白名单与 API 请求不一致，涉及安全预期，容易造成数据过度暴露。
- **认证流程障碍**（#9016）：Vertex AI 的 ADC 支持缺失、API key 强制要求导致 401，企业用户受影响。
- **会话恢复与生命周期可靠性**（#8094、#9626）:transport 恢复后 transcript 从句子中间开始；删除/归档/取消归档时持久化会话文件存在边界情况。
- **新模型能力支持滞后**（#9832）：用户提出 deepseekv4flash-vision-exp 的图片能力缺失被定位到后端 flattenContentPar 逻辑，且社区发现存在 hostname 判断盲区。

</details>

<details>
<summary><strong>CodeWhale</strong> — <a href="https://github.com/Hmbown/CodeWhale">Hmbown/CodeWhale</a></summary>

# CodeWhale 社区动态日报

**日期：2026-08-24 | 数据源：github.com/Hmbown/CodeWhale**

---

## 1. 今日速览

v0.9.11 已完成发布收尾（#5559、#5565），社区重心已转向 v0.9.12 里程碑：新 tracker #5573 明确了本轮“资金/安全 P0 修复 + 大文件拆分清理”的双主线。与此同时，安全加固（#3368）、内存性能（#4326）和架构收敛（#3306）仍是长期热点，多项高评论数 Issue 在 8 月 23 日集中更新。

> **一句话：** 安全与资金保护是当前最高优先级，同时社区要求解决巨型源文件（lib.rs 达 18.7k 行）带来的维护阵痛。

---

## 2. 版本发布

### v0.9.11
- **说明：** `codewhale` 是 Shannon Labs 的公共产品，命令名、npm 包名和发布资产名称均保持小写技术标识
- **兼容性提示：** 旧 npm 包 `deepseek-tui` 已弃用，不再发布任何更新
- **迁移提示：** 从 v0.8.x 旧版 `deepseek`/`deepseek-tui` 升级的用户需要注意命令和包名的变更
- 关联发布 PR：[#5542](https://github.com/Hmbown/CodeWhale/pull/5542)；发布前补丁：[#5559](https://github.com/Hmbown/CodeWhale/pull/5559)（真实性与工具输出脱敏修复）

---

## 3. 社区热点 Issues（10 个）

### 🔥 最高热度

#### 1. #5573 — v0.9.12 里程碑 tracker：从这里开始（选择顺序）
- **作者：** Hmbown | **更新：** 2026-08-23 | **评论：** 2
- **重要性：** 社区当前工作的核心规划页。明确了 v0.9.12 的 P0 必修复清单（资金与安全类，如 #5566），以及完整发布链要求（docs/tag/assets/npm/website 全绿）
- **链接：** https://github.com/Hmbown/CodeWhale/issues/5573

#### 2. #3368 — v0.9.3：落地并验证安全加固/代码扫描修复
- **作者：** Hmbown | **创建：** 2026-06-21 | **更新：** 2026-08-23 | **评论：** 29 🔥
- **为何重要：** 评论数最高。当前安全加固工作分散在 CodeQL 发现、advisory 类报告和本地集成提交中，社区需要一个公开 tracker 来明确发布门禁
- **链接：** https://github.com/Hmbown/CodeWhale/issues/3368

### 💰 资金与安全

#### 3. #5566 — v0.9.12 R1：限制失控花费——有限 max_steps + 累计挂钟默认值（已关闭）
- **作者：** Hmbown | **更新：** 2026-08-23 | **评论：** 1
- **为何重要：** 已关闭表示修复已合入。两个宿主默认 u32::MAX 轮次、工具调用预算无效、流上限每步重置——无人值守运行可能无限花费。这是本轮最重要的资金保护修复
- **链接：** https://github.com/Hmbown/CodeWhale/issues/5566

### 🐛 可靠性 Bug（用户报告）

#### 4. #5583 — 工作流 responseSchema 失败需要有限修复和原始输出凭证
- **作者：** jbovard2016 | **创建：** 2026-08-23 | **评论：** 1
- **为何重要：** 当子任务返回 prose 或畸形 JSON 时，整个工作流失败。Codewhale 能正确报错，但丢掉了“有界修复”的机会，且不提供原始输出回执供调试。**老用户直接反馈痛点**
- **链接：** https://github.com/Hmbown/CodeWhale/issues/5583

#### 5. #5582 — 工作流 owner 快照把 Degraded 折叠为 Completed
- **作者：** jbovard2016 | **创建：** 2026-08-23 | **评论：** 1
- **为何重要：** `Degraded` 状态被映射为 `Completed`，上游将降级运行展示为成功，误导 owner 决策。状态可见性直接影响可靠性信任
- **链接：** https://github.com/Hmbown/CodeWhale/issues/5582

### 🏗 架构与性能

#### 6. #4326 — 性能：解释并限制 32-worker 风暴取消后的 RSS
- **作者：** Hmbown | **创建：** 2026-07-09 | **更新：** 2026-08-23 | **评论：** 6
- **为何重要：** 高扇出基准证明 32 worker 足够响应，但取消后 RSS 采样反而上升。社区需要区分分配器高水位保留与真实泄漏
- **链接：** https://github.com/Hmbown/CodeWhale/issues/4326

#### 7. #3306 — v0.9.3 重构：收敛运行时所有权、删除重复、交付单一可执行文件
- **作者：** Hmbown | **创建：** 2026-06-18 | **更新：** 2026-08-23 | **评论：** 4
- **为何重要：** 当前 18 个 Rust 包约 771k 行，但约 87% 留在 `codewhale-tui` 中。TUI 持有并行运行时、工具、配置、会话、hook 和控制路径——架构健康的核心问题
- **链接：** https://github.com/Hmbown/CodeWhale/issues/3306

#### 8. #5586 — 拆分巨型文件：lib.rs（18.7k）、config.rs（12.3k）、client.rs（11.1k）、runtime_threads.rs（9.3k）
- **作者：** Hmbown | **创建：** 2026-08-23 | **评论：** 0
- **为何重要：** 来自用户对 0.9.12 清理车道的直接诉求：10k+ 行文件持续造成维护痛苦。测试文件（20k 行）也需同步拆分
- **链接：** https://github.com/Hmbown/CodeWhale/issues/5586

### 🌐 本地化与工具能力

#### 9. #5290 — 修复 Web 端非英语路由上的可点击控件
- **作者：** Hmbown | **创建：** 2026-08-08 | **更新：** 2026-08-23 | **评论：** 3
- **为何重要：** 本地化非英文路由上的可点击控件不可靠，且尚未建立当前浏览器兼容矩阵。属于本地化交互 bug，而非单纯文案问题
- **链接：** https://github.com/Hmbown/CodeWhale/issues/5290

#### 10. #3358 — v0.9.3：交付 Playwright 驱动的浏览器自动化工具
- **作者：** Hmbown | **创建：** 2026-06-21 | **更新：** 2026-08-23 | **评论：** 1
- **为何重要：** 当前 web 工具无法执行页面 JS、点击渲染控件、检查实时 DOM。浏览器自动化是 AI 代理做 UI 任务的关键缺口（关联 #3145 视觉检查工件）
- **链接：** https://github.com/Hmbown/CodeWhale/issues/3358

---

## 4. 重要 PR 进展（10 个）

### 🚀 主线集成与发布

#### 1. #5576 — 0.9.12 集成：必修复 + UX 修复（WIP）
- **状态：** OPEN（WIP） | **创建：** 2026-08-23
- **内容：** v0.9.12 集成分支（24 commits），尚未准备合并。已包含 R2 审批范围族授权修复、R3 Chat-Completions SSE 错误帧、R4 等安全/资金修复
- **链接：** https://github.com/Hmbown/CodeWhale/pull/5576

#### 2. #5559 — 修复发布前 v0.9.11 的真实性和工具输出差距
- **状态：** CLOSED | **创建：** 2026-08-23
- **内容：** 模型绑定工具输出脱敏（凭证形状策略 `redact_*`）+ 发布前真实性问题修复。在 v0.9.11 tag 之前合入 main
- **链接：** https://github.com/Hmbown/CodeWhale/pull/5559

#### 3. #5565 — 文档：未发布 tag 重切恢复流程 + 外部发布门禁
- **状态：** OPEN | **创建：** 2026-08-23
- **内容：** 记录 v0.9.11 当晚使用的恢复流程：拉取未发布 tag/Release，在固定 HEAD 上重切；并记录 crates.io 403 和 npm Trusted Publisher E404 外部门禁经验
- **链接：** https://github.com/Hmbown/CodeWhale/pull/5565

### 🔒 修复与可靠性

#### 4. #5584 — 修复（子代理）：持久化子代理审批收据
- **作者：** cyq1017 | **状态：** OPEN | **创建：** 2026-08-23
- **内容：** 关闭 #5543。子代理审批之前只做内存决策，持久化的 Asked/终态证据缺失。现在子运行时继承会话审批收据存储，并在暴露提示前提交 Asked
- **链接：** https://github.com/Hmbown/CodeWhale/pull/5584

#### 5. #5561 — 修复（引擎）：自动重试仅推理的干净停止，而不是失败
- **状态：** CLOSED | **创建：** 2026-08-23
- **内容：** 推理模型只返回隐藏推理 + 干净停止时，之前会以“provider 响应不完整”终止回合，需手动重提。现在自动重试；该问题来自真实用户报错
- **链接：** https://github.com/Hmbown/CodeWhale/pull/5561

#### 6. #5545 — 修复（定价）：DeepSeek V4 北京周末全天按非高峰计费
- **作者：** xyzs996 | **状态：** CLOSED | **创建：** 2026-08-22
- **内容：** DeepSeek 官网调整：自 2026-08-23（周日）北京时间 00:00 起，周末（周六和周日）全天适用非高峰费率。原逻辑只看 UTC 小时，无法正确判断北京周末
- **链接：** https://github.com/Hmbown/CodeWhale/pull/5545

### 🆕 新功能

#### 7. #5574 — 添加 Build Remote Agent 手机配对（gbr/1）
- **作者：** LinespottingPrivate | **状态：** OPEN | **创建：** 2026-08-23
- **内容：** 可选手机配对设备：通过 `gbr-agent pair` 显示浏览器二维码 + 8 字符码，手机扫码后可旁观桌面 agent。协议保持 `gbr/1`
- **链接：** https://github.com/Hmbown/CodeWhale/pull/5574

#### 8. #5535 — 监督操作栈：生命周期 outbox、/relaunch、每会话控制 socket、目标延续安静期修复
- **作者：** M-Maciej | **状态：** OPEN | **创建：** 2026-08-21
- **内容：** 一次 PR 覆盖五个关联改动：生命周期事件 outbox（opt-in JSONL + webhook，含 `turn_start`/`turn_end`/`subagent_spawn` 等）、`/relaunch` 命令、每会话控制 socket、goal-continuation 安静期修复——为长期运行会话提供机器可读的监督能力
- **链接：** https://github.com/Hmbown/CodeWhale/pull/5535

### 🎨 体验与重构

#### 9. #5563 — 修复（onboarding）：首次运行显示所有 provider，而非仅本地
- **状态：** CLOSED | **创建：** 2026-08-23
- **内容：** 首次运行设置时，provider 选择器停留在本地/自托管视图并预选了 Ollama，导致 DeepSeek 等托管 API 被隐藏——新用户以为“Codewhale 只支持本地模型”。由 @n3onr1ft 报告
- **链接：** https://github.com/Hmbown/CodeWhale/pull/5563

#### 10. #5523 — 重构（TUI）：从 turn loop 中提取工具调用阶段
- **作者：** bistack | **状态：** CLOSED | **创建：** 2026-08-20
- **内容：** 提取 `plan_tool_calls`、`execute_planned_tools`、`process_tool_results` 三个阶段，保持原有控制顺序、可变状态流、取消行为和索引结果收集不变
- **链接：** https://github.com/Hmbown/CodeWhale/pull/5523

---

## 5. 热门 Discussions（1 条）

### Q&A

#### #5558 — 注册时从 capabilities() 派生工具审批是否被考虑过/否决？
- **作者：** neerazz | **更新：** 2026-08-23 | **评论：** 3 | **👍：** 2
- **内容：** 用户注意到 `rlm_eval` 咨询记录：`spec.rs:632-633` 的 trait 默认值会对任何带 `ExecutesCode` 的工具返回 `Required`，而该工具覆盖为 `Auto`。提问：注册时从 `capabilities()` 派生审批是否被考虑过？是否因某些原因被否决？
- **链接：** https://github.com/Hmbown/CodeWhale/discussions/5558

---

## 6. 功能需求趋势

从全部 Issues 与 Discussions 中提炼的社区关注方向：

| 方向 | 代表 Issue/PR | 热度信号 |
|---|---|---|
| **安全与资金保护** | #3368、#5566、#5576、#5559 | 当前最高优先级，v0.9.12 的 P0 核心 |
| **架构可维护性** | #3306、#3957、#5586、#5587、#4167 | 大文件拆分、运行时收敛、dead-code 清理持续活跃 |
| **浏览器自动化与 UI 代理能力** | #3145、#3358、#3981 | 已有关注者，等待 Playwright 方案落地 |
| **代码智能（LSP/AST/调试器）** | #3975、#3980、#3981 | 结构性代码搜索、断点调试是明确缺口 |
| **多 provider 支持与协议规范化** | #5563、#5092、#5094、#5103 | Responses API 行为需从硬编码改为 provider 画像 |
| **远程/移动端接入** | #1990、#5574 | 美国区基础设施 + 手机配对监督是社区自发贡献方向 |
| **工作流可靠性与可观测性** | #5582、#5583、#5535 | 新用户报告的 Degraded 折叠、schema 失败修复需求 |
| **本地化与国际化** | #5290、#5544 | 非英文路由交互 bug + 词典脊柱迁移 |
| **隐私与数据控制** | #4069（.codewhaleignore） | 排除敏感路径、vendor 树不被 agent 发现 |

---

## 7. 开发者关注点

### 高频痛点

1. **巨型源文件维护痛苦**（#5586）
   - `lib.rs` 18,747 行、`config.rs` 12,346 行、`client.rs` 11,122 行，用户明确要求拆分

2. **内存高水位不回落**（#4326）
   - 32-worker 风暴取消后 RSS 不降，社区需要明确的泄漏 vs 分配器保留判定

3. **工作流数据正确性隐患**（#5582、#5583）
   - Degraded 被展示为 Completed；responseSchema 失败直接终止且无原始输出回执——用户希望有界修复机制

4. **首次使用体验误导**（#5563）
   - 新用户误以为 Codewhale 只支持本地模型，托管 API 被隐藏在一键之后

5. **本地化路由交互 bug**（#5290）
   - 非英文路由可点击控件不可靠，缺少当前浏览器兼容矩阵

6. **发布流程外部门禁依赖**（#5565）
   - crates.io 403、npm Trusted Publisher E404 等外部失败，需文档化恢复流程

7. **非官方扩展品牌混淆**（#2327）
   - VS Code Marketplace 出现使用 CodeWhale 名称的非官方扩展，存在版权与安全疑虑

8. **技术债务清理持续化**（#5587）
   - 379 个 `allow(dead_code)` 站点，仍有 18 个 Tier B/C 真正死代码待删

---

*本日报由 AI 技术分析师根据 GitHub 公开数据自动整理，所有链接均指向 Hmbown/CodeWhale 仓库。*

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*