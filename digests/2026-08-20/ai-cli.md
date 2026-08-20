# AI CLI 工具社区动态日报 2026-08-20

> 生成时间: 2026-08-19 23:12 UTC | 覆盖工具: 9 个

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

# AI CLI 工具横向对比分析报告（2026-08-20）

## 1. 生态全景

当前 AI CLI 工具赛道整体处于"高频迭代 + 集中补课"阶段：头部工具（Claude Code、OpenAI Codex、Gemini CLI、Copilot CLI）保持每日发版节奏，中长尾工具（OpenCode、Pi、Qwen Code、CodeWhale）则通过密集 PR 合并追赶稳定性差距。社区反馈最强烈的三类共性问题——长上下文记忆丢失、多代理（subagent）结果可信度、Windows/桌面端稳定性——几乎横跨所有工具，说明行业尚未形成成熟的可靠性基线。与此同时，安全边界正在集体收紧（Git 命令去信任、沙箱强制化、插件隔离），而 MCP 正成为事实上的集成标准，但协议兼容性成为新的摩擦面。值得注意的是，社区开始自建工具填补官方空白（如 Lians、CtxWise 等记忆与上下文治理方案），官方能力缺口正在催生周边生态。

## 2. 各工具活跃度对比

> 注：Issues/PRs 均为各日报"热点/重点"条数，非全量；"未提供"表示日报未披露该数据，不代表实际为 0。DeepSeek Harness 过去 24 小时确无任何活动。

| 工具 | Issues（更新/热点） | PRs | Discussions | Release |
|---|---|---|---|---|
| Claude Code | 12 条热点 | 1 | 未提供 | v2.1.236 |
| OpenAI Codex | 10 条热点 | 10（全部合并） | 9 | rust-v0.149.0-alpha.1 / .2 |
| Gemini CLI | 10 条热点 | 10 | 未提供 | v0.56.0 / v0.57.0-preview.0 / nightly |
| GitHub Copilot CLI | 25 条更新 / 10 条热点 | 0 | 未提供 | v1.0.81-2 / -3 / -4 |
| OpenCode | 10 条热点 | 10 | 未提供 | 无 |
| Pi | 10 条热点 | 10 | 2 | 无 |
| Qwen Code | 10 条热点 | 10 | 未提供 | v0.21.14 / preview.0 / nightly |
| CodeWhale | 10 条热点 | 10 | 未提供 | 无（v0.9.10 RC 已开出） |
| DeepSeek Harness | 无活动 | 无 | 无 | 无 |

## 3. 共同关注的功能方向

- **长上下文与记忆治理**（几乎全行业）：Claude Code #34556（压缩后记忆丢失，94 评论）、Copilot CLI #4441（跨压缩保留 durable context）、OpenCode #37047（压缩摘要完全虚构）、Qwen Code #9309（压缩后 token 计数错误）、CodeWhale #5518（紧急压缩过早触发）、Pi #8322/#8328（压缩阈值逻辑缺陷）、Gemini CLI（AST 感知读取 + 前缀缓存优化）。核心诉求：压缩不丢关键信息、token 统计可信、跨会话持久化。

- **多代理/子代理可靠性**：Codex #34301（Luna 子代理无法生成）、Gemini CLI #22323（max turns 截断却误报成功）/#21409（generalist agent 挂起）、Qwen Code #9450（task_list 重复调用误判）、OpenCode #37852（provider 流中断被记为正常完成）、CodeWhale #1425（10 个子代理全部超时）。

- **MCP 与扩展生态兼容性**：Claude Code #88075/#88049（elicitation 能力为空、非法 schema 丢弃整个 server）、Copilot CLI #4480/#4525（MCP OAuth 回归、新旧协议并存）、Gemini CLI #28863（扩展环境变量注入需用户同意）、OpenCode #43535（插件工具 schema 校验）、CodeWhale #5515（MCP 图片类型化）。

- **Windows/桌面端稳定性**：Claude Code #85174（自动更新自我卸载并清空数据）、Codex 浏览器插件初始化失败 / 认证丢失 / 更新失败集群、Pi #7547（维护者公开征集 Windows 痛点）、OpenCode #43511（Windows cross-spawn hang 修复）、Copilot CLI 沙箱在 Windows 上强制启用。

- **安全与权限边界**：Claude Code Auto 模式绕过 `/rewind` 且硬编码 Bash 编辑指令、Copilot CLI 沙箱无法关闭且 `-p --yolo` 绕过企业管控、Codex 停止将 Git 命令视为固有安全、CodeWhale #5491（审批结果执行前落盘）。

- **模型行为可控性**：Claude Code #77136（Opus 输出风格，187 👍）、Pi #5263（会话级模型/思考级别切换，已落地）、Qwen Code #9459（`/effort max` 阻塞会话）、OpenCode #3028（一键切换所有 agent 模型）。

## 4. 差异化定位分析

- **Claude Code**：功能最全的"重器"，插件市场 + 桌面端 + 跨会话 SendMessage 编排，面向深度专业用户与团队协作；当前最大风险是模型输出质量与记忆丢失动摇信任基础。
- **OpenAI Codex**：Rust 高性能路线，突出 Computer Use/浏览器自动化与多代理（Luna/Sol/Terra），安全加固密集（Git 去信任、插件隔离）；工程化程度高但 Windows 短板明显。
- **Gemini CLI**：深度绑定 Gemini/Vertex 模型生态，强调 Auto Memory、SSR Agent、AST 效率与零依赖沙箱等"模型原生能力"；子代理调度可靠性尚未跟上。
- **GitHub Copilot CLI**：企业治理优先，sandbox 与 managed policy 是核心卖点，但当前因过度强制引发反弹；与 GitHub 生态（Connector、Code Review）集成最深，功能推进偏保守。
- **OpenCode**：开源黑客友好型，V2 模块化架构 + Web UI + 配置热重载，迭代速度最快；但 OpenCode Go 计费不透明（本地记录 $14.80 vs 配额 6 天耗尽）正在透支付费用户信任。
- **Pi**：轻量可扩展，会话级模型配置 + 扩展事件系统 + 长尾 provider 适配（Bedrock Mantle、本地模型超时修复），维护者响应及时，社区协作氛围浓。
- **Qwen Code**：围绕 Qwen 模型 + Agent Team/Agent Board + 钉钉渠道 + daemon live session，企业/中国生态导向明显；桌面端正从 Electron 向 Tauri 迁移。
- **CodeWhale**：DeepSeek 模型导向 + 中文本地化（Tier 1 已完成）+ TUI 稳定性打磨，社区规模小但方向聚焦；跨平台 CI 连续全红是发布阻塞风险。
- **DeepSeek Harness**：观察窗口内无活动，暂无法评估。

## 5. 社区热度与成熟度

- **声量最大**：Claude Code（#34556 达 94 评论、#77136 达 187 👍）与 OpenAI Codex（#39136 达 77 评论）社区反馈最密集，但也侧面反映其用户基数大、问题积累深。
- **迭代最快**：OpenAI Codex（单日 2 个 alpha + 10 个 PR 全部合并）、Gemini CLI（正式版 + 预览版 + nightly 三线并发）、OpenCode（V2 稳定性修复密集合并）、Qwen Code（10 个 PR 含多项 P1 修复）。
- **成熟度较高**：Copilot CLI 以补丁形式频繁修复回归，但 PR 数为 0，说明处于"稳存量"阶段而非"拓增量"；Claude Code 社区 PR 活跃度同样偏低（仅 1 条），重心在官方发版。
- **快速成长期**：Pi 维护者主动发起 Windows 征集帖，扩展生态事件系统逐步补齐；CodeWhale 以 i18n 和 TUI 修复为主线，社区参与度上升。
- **社区自建生态活跃**：OpenCode/Codex 讨论区出现 CtxWise、Lians、DeskCue、Nightshift 等第三方工具，覆盖上下文审计、跨 agent 记忆、夜间任务编排，说明官方空白正在被社区快速填补。

## 6. 值得关注的趋势信号

1. **"记忆即护城河"**：跨会话/跨压缩记忆已成为头号需求，且社区已出现自建方案。开发者在选型时应重点考察工具的压缩策略、记忆持久化与 token 透明度，而非只看模型能力。
2. **多代理从 Demo 走向生产，但"假成功"是高风险**：Gemini CLI 的误报 GOAL、OpenCode 的静默中断均指向同一问题——agent 结果可信度。生产使用必须依赖可观测性（trajectory、telemetry、bugreport 内嵌子代理上下文），而非 agent 自报状态。
3. **Windows/桌面是行业级短板，甚至出现数据清空事故**：Claude Code MSIX 自动更新自我卸载、Codex 认证 15–40 秒丢失等事件表明桌面分发链路尚未成熟。企业环境建议冻结版本、关闭自动更新，并做好配置备份。
4. **安全边界收紧与自动化诉求冲突**：Git 命令去信任、沙箱强制化、插件隔离是正确方向，但 Copilot 沙箱无法关闭、Claude Code Auto 模式绕过 `/rewind` 等案例说明：安全的"默认值"必须可配置、可解释，否则会逼迫用户在安全与生产力之间二选一。
5. **MCP 成为标准但兼容性风险高**：OAuth 回归、新旧协议并存、schema 静默丢弃等问题在多个工具中同时出现。接入 MCP 服务前应做协议版本与错误处理验证，并关注官方对失败模式的透明化改进。
6. **模型行为控制正在产品化**：会话级 vs 全局级的模型/思考级别配置（Pi 已落地）、多 agent 模型一键切换等需求，说明用户不再满足于"单一模型走到底"，多模型工作流管理将成为标配能力。
7. **商业模式的信任分水岭**：OpenCode Go 的计费偏差（数倍差距、cache-read 不透明）提醒所有转向订阅制的工具：用量计量必须与本地信号一致，否则付费用户流失会很快。
8. **社区工具链补位**：跨工具记忆层（Lians）、上下文审计（CtxWise）等第三方方案的出现，意味着官方能力缺口已形成可投资的生态缝隙；对开发者而言，这些工具可作为选型期的低成本验证方案。

---

*本报告基于各工具官方 GitHub 社区动态日报（2026-08-19 至 2026-08-20）自动生成，数据以各日报披露为准。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据来源**: github.com/anthropics/skills | **截止**: 2026-08-20

---

## 一、热门 Skills 排行（按评论数 Top 8）

> 注：数据中 50 条 PR 全部处于 Open 状态，以下按评论热度排序。

**1. skill-creator 评估链路修复** `#1298` — [PR 链接](https://github.com/anthropics/skills/pull/1298)
- **功能**：修复 `run_eval.py` 恒定报告 `recall=0%` 的严重 bug（关联 #556，10+ 独立复现），使描述优化循环基于真实信号而非噪声；同步修复 Windows 流读取、触发器检测及并行 worker。
- **讨论热点**：skill 描述评估一直"对着噪声优化"，Windows 下完全不可用，是 meta 工具链最集中的痛点。

**2. document-typography 排版技能** `#514` — [PR 链接](https://github.com/anthropics/skills/pull/514)
- **功能**：新增文档排版质量控制技能，解决 AI 生成文档的孤词换行（1-6 词溢出到下一行）、寡行段落（标题孤立在页首）、编号错位三大顽疾。
- **讨论热点**：这些问题影响 Claude 生成的每一份文档，社区认为必须由技能兜底而非依赖用户主动要求。

**3. pdf 技能大小写引用修复** `#538` — [PR 链接](https://github.com/anthropics/skills/pull/538)
- **功能**：修复 `skills/pdf/SKILL.md` 中 8 处大小写不匹配（`REFERENCE.md`→`reference.md`、`FORMS.md`→`forms.md`），在大小写敏感文件系统上链接失效。
- **讨论热点**：文档类技能的文件引用规范性，直接影响跨平台可用性。

**4. ODT 开放文档技能** `#486` — [PR 链接](https://github.com/anthropics/skills/pull/486)
- **功能**：新增 ODT 技能，覆盖 OpenDocument（.odt/.ods）的创建、模板填充、读取与 HTML 转换，触发词含 LibreOffice、ISO 标准文档等。
- **讨论热点**：补齐 docx/pdf 之外的开源文档格式缺口，企业文档生态关注度高。

**5. frontend-design 技能可操作性改进** `#210` — [PR 链接](https://github.com/anthropics/skills/pull/210)
- **功能**：修订 frontend-design 技能，确保每条指令可在单次对话中执行，提高可操作性、行动指向与内部一致性。
- **讨论热点**：skill 指令"看似合理但 Claude 无法执行"的结构性问题的代表性解决尝试。

**6. skill-quality-analyzer / skill-security-analyzer 元技能** `#83` — [PR 链接](https://github.com/anthropics/skills/pull/83)
- **功能**：新增两个 meta skill：五维质量评分（结构/文档/示例等）与安全分析器。
- **讨论热点**：社区对技能质量与安全自治理的需求，与 Issue #492 的信任危机形成呼应。

**7. docx 跟踪修订 w:id 冲突修复** `#541` — [PR 链接](https://github.com/anthropics/skills/pull/541)
- **功能**：修复 DOCX 技能添加跟踪修订时硬编码低 ID 与现有书签共享 `w:id` 空间冲突，导致文档损坏。
- **讨论热点**：OOXML 复杂文档场景下的鲁棒性，社区对"文档写坏"零容忍。

**8. skill-creator YAML 描述前置校验** `#539` — [PR 链接](https://github.com/anthropics/skills/pull/539)
- **功能**：在 `quick_validate.py` 中增加原始 frontmatter 预检，提前捕获 description 未加引号且含冒号导致的 YAML 静默解析失败。
- **讨论热点**：静默截断类 bug 难以排查，社区重视"早失败、错误信息明确"的校验设计。

---

## 二、社区需求趋势（来自 Issues）

| 趋势方向 | 代表 Issue | 热度信号 |
|---|---|---|
| **安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492) 社区技能借 `anthropic/` 命名空间分发，构成信任边界滥用，用户可能向非官方技能授予提权 | **43 评论**，全场最高 |
| **企业级组织共享** | [#228](https://github.com/anthropics/skills/issues/228) 组织内技能需手动下载/上传，期待共享库或直链 | 16 评论，**8 👍 全场最高赞** |
| **技能生命周期可靠性** | [#556](https://github.com/anthropics/skills/issues/556) 评估脚本 0% 触发率；[#62](https://github.com/anthropics/skills/issues/62) 技能无故消失；[#202](https://github.com/anthropics/skills/issues/202) skill-creator 应按操作规范重写 | 12 / 10 / 8 评论 |
| **上下文窗口效率治理** | [#1487](https://github.com/anthropics/skills/issues/1487) claude-api 一次注入 ~156k tokens 耗尽上下文；[#189](https://github.com/anthropics/skills/issues/189) 双插件重复安装相同技能；[#1329](https://github.com/anthropics/skills/issues/1329) 提议 compact-memory 符号化记忆 | 4-6 评论，9 👍 |
| **平台与协议扩展** | [#29](https://github.com/anthropics/skills/issues/29) AWS Bedrock 支持；[#16](https://github.com/anthropics/skills/issues/16) 将 Skills 暴露为 MCP 协议接口 | 各 4 评论 |

---

## 三、高潜力待合并 Skills（活跃但未合并）

数据集中 **50 条 PR 全部为 Open**，以下为评论活跃、落地概率较高的：

- **self-audit 交付审计 v1.3.0** `#1367` — 机械文件验证 + 四维推理质量门（作者另提 #1385 三闸门管线提案，持续迭代中）→ [PR 链接](https://github.com/anthropics/skills/pull/1367)
- **testing-patterns 测试技能** `#723` — Testing Trophy 模型全覆盖（单测/React/边界用例/命名规范）→ [PR 链接](https://github.com/anthropics/skills/pull/723)
- **ServiceNow 企业平台技能** `#568` — ITSM/ITOM/ITAM/SecOps/CSDM 等全模块，更新至 8 月仍活跃 → [PR 链接](https://github.com/anthropics/skills/pull/568)
- **pyxel 复古游戏开发** `#525` — 作者为 Pyxel 引擎原作者 kitao，write→run_and_capture→iterate 工作流 → [PR 链接](https://github.com/anthropics/skills/pull/525)
- **Windows 兼容修复双连** `#1099` + `#1050` — 修复 `run_eval.py`/`run_loop.py` 在 Windows 的 Popen 与管道崩溃，与 #1298 构成同一修复战线 → [PR 1099](https://github.com/anthropics/skills/pull/1099) | [PR 1050](https://github.com/anthropics/skills/pull/1050)
- **CONTRIBUTING.md 贡献指南** `#509` — 直击仓库社区健康度 25% 缺口，合入门槛低、价值明确 → [PR 链接](https://github.com/anthropics/skills/pull/509)

---

## 四、Skills 生态洞察

> **社区最集中的诉求是让技能基础设施本身"可信、好用、不越权"**——一面修复 skill-creator 评估链路与 Windows 可靠性缺陷，一面治理 `anthropic/` 命名空间下的信任滥用与超大技能注入；同时文档生成（docx/pdf/ODT/排版）与企业级平台技能（ServiceNow/SAP/testing）是内容层面最明确的增量方向。

---

# Claude Code 社区动态日报 — 2026-08-20

> 数据来源：github.com/anthropics/claude-code

## 1. 今日速览

今日发布 v2.1.236，新增 `ANTHROPIC_DEFAULT_MODEL` 环境变量与跨会话 `SendMessage` 通知能力，为多会话协作铺路。社区侧最受关注的是两个方向：一是用户对模型输出质量（Opus 4.8/5.0 语言风格）的强烈不满（187 👍），二是持久化记忆的呼声依然高涨（94 评论）。此外，Auto 模式系统提示词绕过 `/rewind`、MCP 兼容性缺陷等新问题集中浮现。

## 2. 版本发布

### v2.1.236
- **新增 `ANTHROPIC_DEFAULT_MODEL` 环境变量**：可设置新会话启动时使用的模型，`/model` 选择仍可覆盖该设置并跨重启持久化（区别于 `ANTHROPIC_MODEL`）
- **新增跨会话 `SendMessage` 的 `notify_when_idle` 选项**：可在目标 Claude Code 会话空闲时发送通知，便于会话间编排

## 3. 社区热点 Issues

### 🔥 #34556 — 持久化内存功能请求（94 评论，59 次压缩后自建系统）
[Issue #34556](https://github.com/anthropics/claude-code/issues/34556)
用户记录了 26 天 59 次上下文压缩的完整使用历程，指出 Claude Code 在每次压缩后丢失未外部保存的记忆，最终自己构建了完整的记忆持久化系统。这是社区对“跨会话/跨压缩记忆”需求的最强呼声，也侧面反映了该问题对深度用户 workflow 的破坏性。

### 🔥 #77136 — Opus 4.8/5.0 模型语言风格问题（187 👍，29 评论）
[Issue #77136](https://github.com/anthropics/claude-code/issues/77136)
用户反馈 Opus 4.8 输出语言“令人不适/有敌意”，而 Opus 5.0 则“把不连贯性推向新高度”。187 个 👍 表明该问题具有广泛的用户共鸣，已不局限于个例，可能影响团队对模型版本的采用决策。

### #88041 — Auto mode 系统提示词指示模型用 Bash 编辑文件（新增）
[Issue #88041](https://github.com/anthropics/claude-code/issues/88041)
Auto 模式下系统提示词指示模型使用 `sed`/heredoc 而非 Edit/Write 工具编辑文件，与 #87575 高度相关。用户指出该指令硬编码在 CLI 二进制中，无法通过配置修复，说明当前 Auto 模式的提示词设计存在结构性缺陷。

### #87575 — Auto mode 导致 `/rewind` 静默失败（7 评论）
[Issue #87575](https://github.com/anthropics/claude-code/issues/87575)
Auto 模式（`skipAutoPermissionPrompt: true`）下，系统提示词引导模型用 Bash 编辑文件，导致 `/rewind` 无法跟踪文件变更而静默失效。WSL2 平台复现。这是一个“权限自动化”与“可靠性机制”相互冲突的典型案例。

### #84199 — MSIX 安装 .mcpb 扩展失败（9 评论）
[Issue #84199](https://github.com/anthropics/claude-code/issues/84199)
Windows MSIX 构建下安装本地 `.mcpb` 扩展时报“Private dir leaf redirects”错误，但实际并无 reparse point 存在。涉及桌面端 MCP 扩展分发的核心路径，Windows 用户受影响面较大。

### #84258 — Worktree 隔离硬阻断所有 git 调用（8 👍，5 评论）
[Issue #84258](https://github.com/anthropics/claude-code/issues/84258)
工作树隔离机制会硬阻断对主仓库的 **所有** `git -C` 调用——包括只读操作——即使 PreToolUse hook 已显式批准。隔离策略过于激进，迫使开发者在安全与正常工作流之间二选一。

### #84960 — 内存泄漏导致重复 OOM 被杀（7 评论）
[Issue #84960](https://github.com/anthropics/claude-code/issues/84960)
v2.1.224 在一天内两次因匿名 RSS 达 14.5GB / 21.3GB 被 OOM killer 终止。对于长时间运行的 agent 任务来说，内存泄漏会直接导致任务中断，且该问题出现在 CLI 核心，影响面可能很广。

### #84951 — Windows 桌面端内置浏览器 pane 崩溃（7 评论）
[Issue #84951](https://github.com/anthropics/claude-code/issues/84951)
使用内置 Claude Browser pane 时桌面应用崩溃/挂起，一次崩溃甚至重置了应用配置文件。崩溃导致配置丢失的严重性值得关注。

### #84194 — ECONNRESET 流式 API 调用失败（6 评论）
[Issue #84194](https://github.com/anthropics/claude-code/issues/84194)
Bundled Bun HTTP 客户端在 Windows 上流式 API 调用时出现 ECONNRESET，而 Node.js/curl 在相同环境下可正常请求，且与 VPN 无关、重装无法解决。如属 CLI 内置 HTTP 栈缺陷，将影响所有 Windows 用户的流式交互。

### #88075 — MCP elicitation 能力为空（新增）
[Issue #88075](https://github.com/anthropics/claude-code/issues/88075)
v2.1.235 在 MCP 2026-07-28 握手时通告空的 `elicitation: {}` 能力，导致 URL 模式的 elicitation（InputRequiredResult）无法完成。属于 MCP 协议兼容性缺口，对依赖新版 MCP 协议的服务器端工具链有直接阻塞。

### #88049 — 一个非法 inputSchema 丢弃整个 MCP server 的工具（新增）
[Issue #88049](https://github.com/anthropics/claude-code/issues/88049)
若 HTTP MCP server 的任一工具 `inputSchema` 顶层非 object（如缺 `"type": "object"`），CLI 会丢弃该 server 的 **所有** 工具，且双方均无错误提示。属于静默降级的隐蔽 bug，排查成本高。

### #85174 — Windows MSIX 应用自动更新时自我卸载并清空数据（新增上浮）
[Issue #85174](https://github.com/anthropics/claude-code/issues/85174)
后台会话运行期间，Windows 桌面版在静默自动更新时发生自我卸载并清空所有本地数据。数据丢失类 bug 的严重级别最高，虽评论数为 0 但影响极大。

## 4. 重要 PR 进展

### #77977 — 文档：补充插件市场的 skipLfs 选项说明
[PR #77977](https://github.com/anthropics/claude-code/pull/77977)
补充了 `github` 和 `git` marketplace source 的 `skipLfs` 选项文档，并新增跳过 Git LFS 下载的 GitHub shorthand 与 Generic Git URL 示例，关联 Issue #63035。纯文档变更，但反映了插件市场在应对大仓库/大文件场景下的实际需求。

> 注：过去 24 小时内仅此 1 条 PR 更新，社区 PR 活跃度较低。

## 5. 热门 Discussions

（本期数据源未提供 Discussions 数据，省略）

## 6. 功能需求趋势

- **持久化记忆 / 跨会话状态保持**：#34556 以 94 评论成为最强需求信号。用户希望在上下文压缩、会话重启后保留关键记忆，且已出现自建方案，官方若不出手，社区会持续自造轮子。
- **模型行为可控性**：#77136 的高 👍 数表明用户对模型输出质量（语言风格、连贯性）有明确预期，期望官方在模型选型、参数调节上有更多控制权。
- **Auto 模式的安全性与可回退性**：#87575、#88041、#81667、#85459 集中指向 Auto 模式的系统提示词设计问题——它绕过标准工具链路，破坏撤销/权限/可靠性机制。社区希望 Auto 模式与 `/rewind`、权限系统、工具调用规范保持一致。
- **MCP 协议兼容性**：#88049、#88075、#84200 显示 MCP 生态正在快速演进，但 Claude Code 在 schema 校验、elicitation 等新版协议能力上存在缺口，且失败模式不透明。
- **桌面端稳定性**：#84199、#84951、#84962、#85174、#84226、#85070 等大量 Windows/MSIX 相关问题，说明桌面端（特别是 Windows 更新链路）稳定性是当前最集中的质量短板。
- **网络/HTTP 栈健壮性**：#84194、#84211 均指向 Windows 环境下 CLI 内置 HTTP 客户端与系统网络组件（Winsock LSP）的冲突，涉及流式调用的基础路径。

## 7. 开发者关注点

- **记忆丢失是最大痛点**：上下文压缩后记忆全部丢失，用户被迫自建持久化系统，强烈希望官方提供原生方案。
- **模型输出质量直接影响工作体验**：Opus 4.8/5.0 的语言风格问题引发了高赞共鸣，部分用户可能因此降级或切换模型。
- **Auto 模式“不守规矩”**：绕过标准工具编辑文件、导致 `/rewind` 失效、误导模型认为所有 bash 被阻止——自动化程度越高，对底层机制一致性的要求也越高，当前实现明显未能满足。
- **Windows 桌面端发布链路可靠性不足**：从 MSIX 安装失败、更新时文件占用，到最严重的“自动更新自我卸载并清空数据”，开发者对更新机制缺乏信任感。
- **隔离机制过严**：Worktree 隔离连只读 git 操作都阻断，且 hook 批准无效，权限策略缺乏细粒度控制。
- **错误诊断困难**：ECONNRESET、MCP 工具静默丢失等问题均无有效诊断提示，排查成本高，社区期望更明确的错误信息。

---
*本日报基于 2026-08-19 至 2026-08-20 的 GitHub 公开数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-08-20

## 今日速览

今日发布两个 Rust 预发布版本（0.149.0-alpha.1/.2），同时合并了多项安全加固（Git 命令安全、插件操作隔离）与稳定性修复。社区层面，Windows 平台问题持续占据热点（浏览器插件初始化失败、认证丢失、更新失败），而 `#34301`（Luna 子代理无法生成）以 34 👍 成为今日最高赞 Issue，反映多代理功能在 Windows 上存在明显短板。

---

## 版本发布

### rust-v0.149.0-alpha.2
> 预发布版，无详细变更说明

https://github.com/openai/codex/releases/tag/rust-v0.149.0-alpha.2

### rust-v0.149.0-alpha.1
> 预发布版，无详细变更说明

https://github.com/openai/codex/releases/tag/rust-v0.149.0-alpha.1

---

## 社区热点 Issues（10 条）

### 1. #39136 — 内置浏览器插件初始化失败：Trusted RPC 依赖不在可信代码路径
- **作者**: Double-hhd | 更新: 2026-08-19 | 💬 77 | 👍 41
- **为什么重要**: 过去 24 小时评论最多的问题，Windows 桌面端浏览器插件直接无法初始化，严重影响 Computer Use 与浏览器控制能力。
- **社区反应**: 大量用户反馈同类现象，与近期 Windows 端多起浏览器/计算机控制故障可能同源。

https://github.com/openai/codex/issues/39136

### 2. #34301 — GPT Sol/Terra 线程无法生成 Luna 子代理（版本不匹配）
- **作者**: QuinnISHE | 更新: 2026-08-19 | 💬 10 | 👍 34
- **为什么重要**: 今日点赞数最高，多代理（Subagent）核心流程在 Windows 上不可用，直接影响任务分解与并行执行效率。
- **社区反应**: 高赞表明大量 Prolite/Windows 用户遭遇此问题，Luna 多代理版本校验逻辑过严。

https://github.com/openai/codex/issues/34301

### 3. #11298 — "不再询问"权限规则失效
- **作者**: BlueBlazin | 更新: 2026-08-19 | 💬 10 | 👍 18
- **为什么重要**: 命令审批中的 `Yes, and don't ask again` 功能长期失效，极大影响自动化工作流体验。
- **社区反应**: 老 Issue（2026-02）但持续获赞，说明该 bug 对日常使用影响显著且修复优先级偏低。

https://github.com/openai/codex/issues/11298

### 4. #27117 — Windows 更新时 PSModulePath 继承导致 Get-FileHash 失败
- **作者**: BlueOcean223 | 更新: 2026-08-19 | 💬 17 | 👍 13
- **为什么重要**: 揭示更新机制中 pwsh → powershell.exe 的进程环境继承缺陷，导致哈希校验失败、更新不可用。
- **社区反应**: 与 #30015、#34030 等 Windows 更新类问题形成系列，开发者对更新管道稳定性关注度高。

https://github.com/openai/codex/issues/27117

### 5. #38455 — macOS 桌面版反复生成 Computer Use workers 后 V8 OOM 崩溃
- **作者**: flannick | 更新: 2026-08-19 | 💬 30 | 👍 12
- **为什么重要**: 崩溃时 316 个线程中 187 个名为 `computer-use`，资源泄漏严重，且发生在空闲状态 98 秒后，说明后台调度异常。
- **社区反应**: 与 #25744（进程泄漏）共同指向 Computer Use 生命周期管理缺陷。

https://github.com/openai/codex/issues/38455

### 6. #25178 — Windows 10 上 Computer Use 截图失败：SetIsBorderRequired 不支持该接口
- **作者**: Define1165250535 | 更新: 2026-08-19 | 💬 28 | 👍 15
- **为什么重要**: Get-window_state 的截图路径在 Win10 22H2 上彻底不可用，平台兼容性缺口明显。
- **社区反应**: 28 条评论讨论变通方案，但官方尚未确认修复时间线。

https://github.com/openai/codex/issues/25178

### 7. #30015 — Windows 原生安装执行 `codex update` 失败
- **作者**: hi-fox | 更新: 2026-08-19 | 💬 8 | 👍 14
- **为什么重要**: 与 #27117/#34030 共同构成 Windows 更新失败集群，影响用户升级到新版本的能力。
- **社区反应**: 多种环境复现，社区期待更新机制统一重构。

https://github.com/openai/codex/issues/30015

### 8. #25744 — macOS 累积 Computer Use/MCP 辅助进程与僵尸进程
- **作者**: quasa0 | 更新: 2026-08-19 | 💬 20 | 👍 3
- **为什么重要**: 长时间会话后 HID 延迟与 WindowServer/TCC 停滞，进程回收机制存在系统级副作用。
- **社区反应**: 与 #38455 互为佐证，说明 Computer Use 进程调度与清理需系统性修复。

https://github.com/openai/codex/issues/25744

### 9. #33493 — 本地压缩 v2 保留无界 input_image 负载，导致重复自动压缩
- **作者**: snrui | 更新: 2026-08-19 | 💬 17 | 👍 4
- **为什么重要**: 图片密集型任务进入"压缩—膨胀—再压缩"死循环，上下文管理策略有缺陷。
- **社区反应**: 影响长任务稳定性，用户报告 token 消耗异常。

https://github.com/openai/codex/issues/33493

### 10. #39189 — 打开已有线程导致个人 Pro 账户被登出（仅限工作区设置 401）
- **作者**: ll10020163 | 更新: 2026-08-19 | 💬 9 | 👍 2
- **为什么重要**: 账户状态异常丢失，且只在 Windows 26.814 版本出现，疑似与 workspace 设置请求处理相关。
- **社区反应**: 与 #39170（认证 15-40 秒内丢失）构成 Windows 认证问题集群。

https://github.com/openai/codex/issues/39189

---

## 重要 PR 进展（10 条）

### 1. #39524 — 停止将 Git 命令视为固有安全（合并）
- **原因**: 仓库配置可能使 Git 命令执行辅助程序（helpers），参数本身不足以建立信任。
- **影响**: 移除 Unix/Windows 上 Git 命令的已知安全分类，降低供应链攻击面。
- **状态**: 已合并

https://github.com/openai/codex/pull/39524

### 2. #39520 — 隔离自动插件 Git 操作（合并）
- **原因**: 后台插件刷新可能继承仓库本地或命令级 Git 配置，导致远程地址被重定向或在自动操作中调用恶意 helpers。
- **影响**: 插件/市场自动刷新与宿主项目 Git 配置隔离，增强安全性。
- **状态**: 已合并

https://github.com/openai/codex/pull/39520

### 3. #39452 — 移除异步用户消息的功能门控（合并）
- **功能**: `send_user_message_async` 现在只要模型能力支持即对根代理开放；`send_async_message` 保留为兼容性 flag。
- **影响**: 多代理/异步交互模式更加灵活。
- **状态**: 已合并

https://github.com/openai/codex/pull/39452

### 4. #39410 — 刷新过期 AWS 凭证（Bedrock）（合并）
- **功能**: 新增 `aws.auth_refresh` 提供方配置，支持自定义 aws 命令、参数与超时。
- **影响**: Bedrock 长会话中凭证过期后可自动恢复，避免任务中断。
- **状态**: 已合并

https://github.com/openai/codex/pull/39410

### 5. #39404 — 支持旧版系统 Bubblewrap 的 FD 挂载（合并）
- **修复**: 检测系统 Bubblewrap 是否支持 `--ro-bind-fd`，旧版本回退到兼容方案。
- **影响**: Linux 沙箱在较老发行版上的可用性提升。
- **状态**: 已合并

https://github.com/openai/codex/pull/39404

### 6. #39523 — 在首次 turn 前持久化线程节移动（合并）
- **修复**: 新的非临时线程在首次 turn 前无持久化 rollout，移动后可能从节过滤列表中消失。
- **影响**: 线程管理一致性修复。
- **状态**: 已合并

https://github.com/openai/codex/pull/39523

### 7. #39515 — 使用 `mem::take` 排空统一 exec 输出缓冲区（合并）
- **重构**: 替换自定义 `HeadTailBuffer::drain`，用 `mem::take` 原子性地移出缓冲并重置。
- **影响**: 降低内存别名风险，输出缓冲处理更稳健。
- **状态**: 已合并

https://github.com/openai/codex/pull/39515

### 8. #39514 — 物化 turn 摘要时使用存储的 item 类型（合并）
- **修复**: 基于 `item_type` 列选择用户/代理摘要项，旧行缺失时回退到 `item_json` 内类型。
- **影响**: 新老版本数据兼容性提升。
- **状态**: 已合并

https://github.com/openai/codex/pull/39514

### 9. #39510 — 在分析中跟踪内置控制工具调用（合并）
- **功能**: 为 `request_user_input`、`update_plan`、`view_image` 等内置控制工具发布 `codex_control_tool_call_event`。
- **影响**: 可观测性增强，便于诊断控制工具的完成/失败/中断。
- **状态**: 已合并

https://github.com/openai/codex/pull/39510

### 10. #39474 — 将 Guardian 扩展整合到 `codex-guardian-v2`（合并）
- **重构**: 线程生命周期贡献者与子代理生成上下文迁移到 `codex-guardian-v2`，统一扩展入口。
- **影响**: Guardian 架构简化，消除冗余扩展点。
- **状态**: 已合并

https://github.com/openai/codex/pull/39474

---

## 热门 Discussions（9 条）

### Ideas（创意提案）

#### #39488 — [Proposal] 决策连续性：将工程决策视为受治理、可重新验证的状态
- **作者**: CoreForgeLab | 💬 0 | 👍 1
- **摘要**: 提出将"工程决策"作为一等状态管理，涵盖决策的持久化、治理、重新验证，与现有 memory 管线区分。
- **看点**: 面向长期项目的上下文治理方向，值得关注。

https://github.com/openai/codex/discussions/39488

### Q&A（提问解答）

#### #34373 — [已解决] 如何卸载 Codex CLI？
- **作者**: codayon | 💬 1 | 👍 2
- **摘要**: Arch Linux 上通过官方 `install.sh` 安装后如何完整卸载。
- **状态**: 已解决

https://github.com/openai/codex/discussions/34373

### Show and tell（作品展示）

#### #39541 — Codebase 结构可视化
- **作者**: jaads | 💬 0 | 👍 1
- **摘要**: 通过 Tangleguard 可视化 openai/codex 包与模块关系，指出结构"半结构化、难维护"，可能是高 Issue 量的原因之一。

https://github.com/openai/codex/discussions/39541

#### #39536 — Nightshift：为 Codex 提供可问责、有时限的夜间任务班次
- **作者**: orwa-mahmoud | 💬 0 | 👍 1
- **摘要**: 提供两种夜班模式：checklist 模式（逐项完成）与目标+小时预算模式（持续探索直到时间耗尽）。

https://github.com/openai/codex/discussions/39536

#### #39516 — CtxWise：本地 Codex 上下文审计、漂移锁与两轮复现
- **作者**: FramY2 | 💬 0 | 👍 1
- **摘要**: 本地优先 CLI 工具，审计 Codex 累积的指令/技能/插件/MCP 声明，提供上下文漂移检测。

https://github.com/openai/codex/discussions/39516

#### #39424 — DeskCue：在不将工作区移到云端的情况下，从另一台设备查看 Codex 任务
- **作者**: AleksandrKornev | 💬 0 | 👍 1
- **摘要**: 关注"离开电脑后快速查看当前 diff、打开文件、了解任务进展"的诉求，不需云迁移。

https://github.com/openai/codex/discussions/39424

#### #39357 — NULNUL：以"添加为空也是有效结果"为目标的仓库本地 Codex 编写工具集
- **作者**: SeoNaRu | 💬 0 | 👍 1
- **摘要**: 仓库本地、纯 skills 的 Codex 编写工具集，目的是减少 AI 开发环境自身的维护成本。

https://github.com/openai/codex/discussions/39357

#### #39282 — Lians：免费本地项目连续性层，打通 Codex、Claude Code 与 Cursor
- **作者**: Lians-ai | 💬 1 | 👍 1
- **摘要**: Apache-2.0 本地 MCP 内存层，避免每次新会话都要人工同步项目上下文，已在多个 agent 间共享连续性状态。

https://github.com/openai/codex/discussions/39282

#### #8503 — [General] “使用限制已达到”但 Code Review 用量显示 100% 剩余
- **作者**: mattyj-stack | 💬 19 | 👍 9
- **摘要**: Codex GitHub Connector 每次 PR 都错误报告代码审查限额已用尽，即使仪表盘显示剩余 100%。
- **看点**: 已持续近 8 个月（2025-12-24 创建），19 条评论仍无解决方案，Connector 限额判定逻辑可能仍存在严重 bug。

https://github.com/openai/codex/discussions/8503

---

## 功能需求趋势

1. **Windows 平台稳定性成为最高优先级**：浏览器插件、认证、更新、路径处理（`\\?\` 前缀）等多项问题集中在 Windows 生态，社区诉求明显超出其他平台。
2. **Computer Use / 浏览器自动化的生命周期管理**：多个 Issue 指向子进程泄漏、沙箱隔离不彻底、截图 API 兼容性差，缺少统一的运行时治理。
3. **上下文与记忆治理**：讨论区出现"决策连续性"提案与多个上下文审计工具（CtxWise、Lians），说明开发者需要更强的上下文可控性和跨会话一致性。
4. **多代理（Subagent）编排成熟度**：Luna 子代理启动失败、`/agent` 切换性能问题持续被提及，async message 门控虽已移除，但稳定性仍是瓶颈。
5. **外部服务集成可靠性**：包括 Bedrock 凭证自动刷新（已实现）、MCP OAuth issuer 覆盖（#38944）、MCP 服务器配置兼容性（#39537）等，企业级接入需求升温。
6. **安全加固持续演进**：Git 命令不再默认可信、插件 Git 操作隔离等 PR 显示项目正在缩小隐式信任边界，符合供应链安全趋势。

---

## 开发者关注点

- **Windows 更新通道脆弱**：`codex update` 失败、PSModulePath 继承、更新后不重启等多重问题叠加，用户升级成本高。
- **认证与会话状态易丢失**：Windows 桌面应用出现 15–40 秒内登出、打开旧线程即掉登录，对 Pro 用户信任度伤害大。
- **权限记忆（"Don't ask again"）失效**：基础交互承诺未被兑现，自动化体验大打折扣。
- **Computer Use 资源占用失控**：macOS 崩溃与 Windows 鼠标滞后表明该功能仍处于"可用但不可靠"阶段。
- **社区自建工具生态活跃但分散**：DeskCue、Nightshift、NULNUL、CtxWise、Lians 等多方向探索，反映出官方在跨工作区监控、上下文治理、任务编排等场景仍有较大空白。

---

*日报数据来源：github.com/openai/codex（数据窗口：2026-08-19 至 2026-08-20）*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-08-20）

## 今日速览

今日发布 v0.56.0 正式版与 v0.57.0-preview.0 预览版，后者重点修复 Cloud Workstations OAuth 代理重定向与 IDE 连接目录不匹配问题；同时社区出现 Gemini 3.7 Flash / 3.6 Flash 模型支持 PR。开发者讨论集中在子代理误报成功、通用 agent 挂起、Auto Memory 隐私与重试问题，以及 AST 感知代码库读取优化。

## 版本发布

### v0.57.0-preview.0
- 修复 Cloud Workstations 代理下 OAuth 流程的 redirect URI 动态解析问题，由 @amelidev 贡献。
- 修复 IDE 连接中目录不匹配被静默吞掉的问题。
- 关联 PR: [#28688](https://github.com/google-gemini/gemini-cli/pull/28688)

### v0.56.0
- 正式版本发布。
- 完整变更：https://github.com/google-gemini/gemini-cli/compare/v0.55.1...v0.56.0

### v0.56.0-nightly.20260819.g571851b10
- SSR Agent：补充 Vertex AI locations 文档链接，见 [#28865](https://github.com/google-gemini/gemini-cli/pull/28865)。
- SSR Agent：在 agents mode 禁用时阻止子代理运行。

## 社区热点 Issues

### 1. [#22323] Subagent 达到 MAX_TURNS 后误报为 GOAL 成功，隐藏真实中断
- 标签: `priority/p1` `kind/bug` | 评论: 12 | 👍: 2
- 摘要：`codebase_investigator` 子代理实际因 max turn 限制中断，却返回 `status: "success"` 和 `Termination Reason: "GOAL"`，导致用户被误导。
- 值得关注：这是典型的“假成功”问题，直接影响 agent 结果可信度。
- 链接: https://github.com/google-gemini/gemini-cli/issues/22323

### 2. [#21409] Generalist agent 无限挂起
- 标签: `priority/p1` `kind/bug` | 评论: 8 | 👍: 8
- 摘要：Gemini CLI 一旦 defer 到 generalist agent，连创建文件夹这类简单操作也可能挂起长达一小时；禁止使用子代理后恢复正常。
- 值得关注：高赞问题，说明子代理调度可靠性已严重影响日常使用。
- 链接: https://github.com/google-gemini/gemini-cli/issues/21409

### 3. [#25166] Shell 命令执行完成后仍卡在 “Waiting input”
- 标签: `priority/p1` `kind/bug` | 评论: 4 | 👍: 3
- 摘要：简单的 CLI 命令执行完后，终端仍显示命令 active 并等待输入，即使命令本身不会请求用户输入。
- 值得关注：属于核心终端交互回归，影响自动化工作流。
- 链接: https://github.com/google-gemini/gemini-cli/issues/25166

### 4. [#19873] 利用模型原生 bash 能力：零依赖 OS 沙箱与执行后意图路由
- 标签: `priority/p2` `kind/enhancement` | 评论: 8 | 👍: 1
- 摘要：Gemini 3 模型天然擅长 POSIX 工具链操作，社区希望以零依赖沙箱方式放开 bash 能力，同时保证安全与 UX。
- 值得关注：这是“能力释放”与“安全边界”之间的关键设计讨论。
- 链接: https://github.com/google-gemini/gemini-cli/issues/19873

### 5. [#21983] Browser subagent 在 Wayland 下失败
- 标签: `priority/p1` `kind/bug` | 评论: 4 | 👍: 1
- 摘要：浏览器子代理在 Wayland 会话中异常终止。
- 值得关注：Linux 桌面用户受影响较大，且与浏览器自动化的稳定性直接相关。
- 链接: https://github.com/google-gemini/gemini-cli/issues/21983

### 6. [#26522] Auto Memory 会无限重试低信号 session
- 标签: `priority/p2` `kind/bug` | 评论: 5
- 摘要：后台记忆提取 agent 只有成功 `read_file` 才会标记 session 已处理；低信号 session 如果被跳过，就会反复出现。
- 值得关注：后台记忆任务可能持续消耗 token，且用户难以感知。
- 链接: https://github.com/google-gemini/gemini-cli/issues/26522

### 7. [#26525] Auto Memory 需要确定性脱敏并减少日志
- 标签: `priority/p2` `kind/bug` | 评论: 4
- 摘要：Auto Memory 把本地 transcript 发送给模型后才要求脱敏，且可能记录已有 skill 内容，存在隐私泄露风险。
- 值得关注：安全敏感型 issue，涉及用户本地代码与密钥暴露风险。
- 链接: https://github.com/google-gemini/gemini-cli/issues/26525

### 8. [#21968] Gemini 不会主动使用 skills 和 sub-agents
- 标签: `priority/p2` `kind/bug` | 评论: 6
- 摘要：用户配置了 gradle、git 等 skills，但 Gemini 几乎不会自动调用，只有显式要求才使用。
- 值得关注：自定义 agent/skill 生态的核心痛点，影响扩展能力价值。
- 链接: https://github.com/google-gemini/gemini-cli/issues/21968

### 9. [#22745] 评估 AST 感知的文件读取、搜索与代码库映射价值
- 标签: `priority/p2` `kind/feature` | 评论: 7 | 👍: 1
- 摘要：EPIC 跟进 AST 工具，希望通过精确读取方法边界、减少误读、降低 token 噪声来改进代码导航。
- 值得关注：直接关系到长会话中的上下文压缩与 token 效率。
- 链接: https://github.com/google-gemini/gemini-cli/issues/22745

### 10. [#22186] get-shit-done 输出 hook 导致崩溃
- 标签: `priority/p1` `kind/bug` | 评论: 3
- 摘要：某些 get-shit-done 输出流程即将结束、打印 user summary 时，Gemini CLI 反复崩溃。
- 值得关注：高频工作流触发的崩溃，优先级别高且影响面大。
- 链接: https://github.com/google-gemini/gemini-cli/issues/22186

## 重要 PR 进展

### 1. [#28910] 添加 Gemini 3.7 Flash、3.6 Flash、3.5 Flash-Lite 模型配置
- 状态: 已合并/关闭
- 在 core 与 cli 中完整加入新模型定义与选择逻辑，是对新模型支持的重要一步。
- 链接: https://github.com/google-gemini/gemini-cli/pull/28910

### 2. [#28898] 加固 PR 生成器子进程执行安全与配置读取
- 状态: 开放
- 防止敏感认证 token 泄漏到不可信工具执行环境，并强化 GitHub API 交互可靠性。
- 链接: https://github.com/google-gemini/gemini-cli/pull/28898

### 3. [#28863] 扩展更新需用户同意：过滤运行时环境变量
- 状态: 开放
- 修复扩展更新可能绕过用户确认、向 MCP server 进程注入非法环境变量的问题。
- 链接: https://github.com/google-gemini/gemini-cli/pull/28863

### 4. [#28914] 将 on-retry nudge 注入 conversation contents 以保留前缀缓存
- 状态: 开放
- 把重试提示从 `systemInstruction` 移到 `contents` 末尾，在保证模型感知恢复指令的同时不破坏 prompt prefix caching。
- 链接: https://github.com/google-gemini/gemini-cli/pull/28914

### 5. [#28915] 修复 ignore 路径处理中的 symlink 一致性
- 状态: 开放
- 确保 `.geminiignore` 和 `.gitignore` 对字面路径与 canonical 路径都能一致生效，避免工具因 symlink 误判而越界或漏读。
- 链接: https://github.com/google-gemini/gemini-cli/pull/28915

### 6. [#28916] Whisper 转录 stdout 分块缓冲
- 状态: 开放
- 修复本地语音模式下 timestamp 转录行被任意 stdout `data` 事件拆开后丢失的问题。
- 链接: https://github.com/google-gemini/gemini-cli/pull/28916

### 7. [#28917] Whisper 模型下载原子化与失败清理
- 状态: 开放
- 临时文件下载、校验长度、错误处理、原子 rename，避免中断下载导致模型文件损坏。
- 链接: https://github.com/google-gemini/gemini-cli/pull/28917

### 8. [#28889] 修复能力检测后 stdin 未恢复暂停状态
- 状态: 开放
- `detectCapabilities()` 临时监听 `data` 事件后，会破坏原本暂停的 stdin 流；此 PR 修复流状态恢复。
- 链接: https://github.com/google-gemini/gemini-cli/pull/28889

### 9. [#28906] 文档澄清 Gemini CLI 支持状态
- 状态: 已合并/关闭
- 在文档首页增加支持状态说明，明确 Gemini CLI 仍受支持，并将订阅制终端工作流用户引导至 Antigravity CLI。
- 链接: https://github.com/google-gemini/gemini-cli/pull/28906

### 10. [#28922] PR 生成器实现 GCS trajectory 日志与产物保留
- 状态: 开放
- 为 coding / evaluation / repair loop 增加 GCS 轨迹日志和 debug artifact 存储，便于生产问题定位与评估分析。
- 链接: https://github.com/google-gemini/gemini-cli/pull/28922

## 功能需求趋势

- **Agent 可观测性与评估**
  - 子代理轨迹需要更容易共享与审查，如 `/chat share` 暴露 subagent trajectory（[#22598](https://github.com/google-gemini/gemini-cli/issues/22598)）。
  - bugreport 需要包含 subagent 内部上下文（[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)）。
  - 组件级 eval 体系正在补强（[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)）。
  - 生产轨迹日志与 artifact 保留（[#28922](https://github.com/google-gemini/gemini-cli/pull/28922)）。

- **安全与沙箱能力**
  - 零依赖 OS 沙箱 + bash 能力释放（[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)）。
  - 子进程执行安全、凭据保护（[#28898](https://github.com/google-gemini/gemini-cli/pull/28898)）。
  - Extension/MCP 环境变量注入需要用户同意与过滤（[#28863](https://github.com/google-gemini/gemini-cli/pull/28863)）。
  - Auto Memory 需要确定性脱敏（[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)）。

- **上下文与 token 效率**
  - AST-aware 文件读取、搜索、代码库映射（[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)）。
  - “Tactful Extraction” 精细读取逻辑（[#19561](https://github.com/google-gemini/gemini-cli/issues/19561)）。
  - 通过保留前缀缓存优化重试 token 成本（[#28914](https://github.com/google-gemini/gemini-cli/pull/28914)）。

- **模型与运行环境支持**
  - Gemini 3.7 Flash / 3.6 Flash 模型配置支持（[#28910](https://github.com/google-gemini/gemini-cli/pull/28910)）。
  - 本地语音模式 Whisper 可靠性修复（[#28916](https://github.com/google-gemini/gemini-cli/pull/28916)、[#28917](https://github.com/google-gemini/gemini-cli/pull/28917)）。

- **终端与核心交互体验**
  - Shell 命令执行完成后的输入状态错误（[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)）。
  - 终端 resize 闪烁与性能（[#21924](https://github.com/google-gemini/gemini-cli/issues/21924)）。
  - 聊天会话重命名（[#28907](https://github.com/google-gemini/gemini-cli/pull/28907)）。

## 开发者关注点

- **“假成功”结果不可接受**：子代理在 max turns 被截断后仍报 GOAL 成功（[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)），且 bugreport 缺少 subagent 内部上下文，排障困难（[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)）。

- **挂起问题频发**：generalist agent 无限等待（[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)）、shell 命令完成后卡在输入态（[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)）、Vite 等交互式命令卡住（[#22465](https://github.com/google-gemini/gemini-cli/issues/22465)）。

- **后台记忆系统可信度不足**：低信号 session 无限重试（[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)）、无效 patch 被静默跳过（[#26523](https://github.com/google-gemini/gemini-cli/issues/26523)）、transcript 先发送后脱敏（[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)）。

- **安全默认值需要更保守**：模型可能执行 `git reset --force` 等破坏性操作（[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)），扩展环境变量注入需 consent（[#28863](https://github.com/google-gemini/gemini-cli/pull/28863)），沙箱 DEBUG 变量语义需要统一（[#28904](https://github.com/google-gemini/gemini-cli/pull/28904)）。

- **自定义技能与子代理利用率不足**：社区反馈 Gemini 不会主动使用已配置的 skills 和 sub-agents（[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)），这影响了 agent 个性化扩展的实际价值。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

## GitHub Copilot CLI 社区动态日报 — 2026-08-20

### 今日速览

过去 24 小时，GitHub Copilot CLI 连续发布三个补丁版本（v1.0.81-2 / -3 / -4），均为“Fixes and changes”。社区讨论主要集中在 Sandbox 强制启用/无法关闭、Atlassian MCP OAuth 的 RFC 8414 回归，以及 1.0.81-1 的 MCP 协议兼容问题。另有多个 enterprise 与 VS Code 集成相关的新 issue 进入 triage，值得关注。

### 版本发布

- **v1.0.81-4**：Fixes and changes
- **v1.0.81-3**：Fixes and changes
- **v1.0.81-2**：Fixes and changes

三个补丁版本均未提供详细变更说明，推测为针对近期回归的快速修复。

### 社区热点 Issues

当前共有 25 条问题在过去 24 小时内更新，以下为最值得关注的 10 条：

1. **[#2082] ctrl+shift+c no longer copies to clipboard on Linux**  
   长期未修复的 Linux 终端快捷键回归，自 v1.0.4 起受影响，社区讨论热烈（24 评论，12 👍）。  
   [查看 Issue](https://github.com/github/copilot-cli/issues/2082)

2. **[#4522] Copilot CLI 1.0.81 forces sandbox while managed policy is undetermined**  
   即使用户明确配置 `sandbox.enabled: false`，沙箱仍被强制启用，尤其影响 Windows/企业环境，7 👍。  
   [查看 Issue](https://github.com/github/copilot-cli/issues/4522)

3. **[#4390] Enabled organization models missing from catalogue**  
   企业在 Copilot Business 中启用的 Claude Sonnet 5 / Opus 5、Kimi K3 等模型无法在 CLI 中使用，15 评论，7 👍。已关闭，但关注度高。  
   [查看 Issue](https://github.com/github/copilot-cli/issues/4390)

4. **[#4480] Atlassian MCP OAuth fails with “Incompatible authorization server (RFC 8414 §3.3)”**  
   1.0.79 上连接 Atlassian MCP 失败，1.0.71 仍正常，明确回归。同类问题在 1.0.80 上又被报告（#4490）。  
   [查看 Issue](https://github.com/github/copilot-cli/issues/4480)

5. **[#4525] 1.0.81-1 sends legacy `initialize` after successful modern `server/discover`**  
   MCP 初始化流程同时使用新旧协议，导致 Python MCP SDK 2.0.0 返回 -32022，影响标准库兼容。  
   [查看 Issue](https://github.com/github/copilot-cli/issues/4525)

6. **[#4521] Sandbox cannot be disabled**  
   配置显示已禁用，但运行时仍强制进入 Sandbox，4 👍，社区对沙箱控制能力不满意。  
   [查看 Issue](https://github.com/github/copilot-cli/issues/4521)

7. **[#4524] Sandbox won’t let copilot use git anymore**  
   最新 enforced-sandbox 版本过度限制，即使启用整个工作目录和 `~/.copilot`，git 仍无法使用。  
   [查看 Issue](https://github.com/github/copilot-cli/issues/4524)

8. **[#4528] Non-interactive sessions bypass `disableBypassPermissionsMode` managed setting**  
   `-p --yolo` 模式绕过企业权限管控，存在安全风险，需引起管理员重视。  
   [查看 Issue](https://github.com/github/copilot-cli/issues/4528)

9. **[#3698] MCP server connect leak: unbounded child processes**  
   慢速 stdio MCP server 导致子进程反复派生且不被回收，CPU 与系统负载持续升高。  
   [查看 Issue](https://github.com/github/copilot-cli/issues/3698)

10. **[#4519] 400 “Missing namespace for function_call” for deferred/tool-search tools**  
   通过 deferred tool search 发现的工具（如 extensions_manage）在调用时触发 CAPI 400 错误，影响工具链稳定性。  
    [查看 Issue](https://github.com/github/copilot-cli/issues/4519)

### 重要 PR 进展

过去 24 小时内无 PR 更新或合并。

### 功能需求趋势

整理本期 Issues 和用户反馈，社区最关注的功能方向包括：

- **Sandbox 与权限控制可配置性**：多个 issue 反映 Sandbox 无法关闭、配置被覆盖、路径授权失效，用户期望更透明、更可预测的沙箱策略。
- **MCP 客户端健壮性**：OAuth 握手反复回归、新旧协议并存、子进程泄漏等问题突出，要求提供更稳定的 MCP 连接与重试机制。
- **企业级模型与鉴权支持**：模型目录缺失组织已启用模型、GHEC data residency 下非交互模式登录失败、managed settings 被绕过等，关系到企业落地。
- **终端交互体验修复**：Linux 复制快捷键失效、Backspace 误删单词、终端 pane 失焦后按键丢失等，属于高频基础交互问题。
- **上下文长期记忆**：#4441 提出跨多次 compaction 保留 durable context，避免早期决策丢失，是 agent 实用性的重要改进方向。
- **插件市场可发现性**：#4523 建议为 plugin marketplace browse 增加搜索/筛选，体现日渐增长的插件生态需求。

### 开发者关注点

- **Sandbox 默认行为过于激进**，且出现配置不生效、无法禁用、覆盖 `sandbox.enabled=false` 等严重问题，阻碍 Git、JVM/Maven 等开发工具正常运行。
- **MCP OAuth 与协议兼容性连续多个版本出现回归**，尤其 Atlassian MCP 集成受影响，开发者对版本升级产生顾虑。
- **非交互模式权限绕过**（#4528）引发安全担忧，企业管理员需要明确 `disableBypassPermissionsMode` 是否能被完全信任。
- **GHEC data residency 环境下的 prompt mode 鉴权失败**，说明 CLI 对非默认 endpoint 的支持仍有缺口。
- **键盘输入与终端渲染类 bug 存在较长时间**（如 #2082 从 3 月至今），开发者希望官方优先修复基础交互问题。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-08-20

## 今日速览

今日社区最突出的议题是 **OpenCode Go 订阅计费/配额体系受到大量质疑**：多项 issue 报告本地记录用量与云端计费严重不符、配额在数小时内被耗尽（#41976、#43416、#43424、#43387 等），社区要求计费透明化的呼声强烈。与此同时，**围绕 V2 的稳定性修复进入密集合并期**，多个关键 PR（cross-spawn hang、乐观提示提交、session-ui 模块化等）于今日更新。此外，#37852 披露了 provider 流被异常中断时“静默成功”的严重 bug，获得 56 个 👍，是今日讨论热度最高的问题。

## 社区热点 Issues

### 1. Aborted provider stream recorded as clean stop
**#37852** | 评论: 19 | 👍: 56
当 provider 流在生成中途终止（无 finish reason、无 usage chunk）时，opencode 会将其记录为 `finish=unknown`、零 tokens、无文本内容，并**像正常完成一样退出 agent 循环**，不记录任何错误。这导致 subagent 返回空结果但无任何报错，问题定位困难。社区反应强烈，是今日最受关注的 bug。
🔗 [查看 Issue](https://github.com/anomalyco/opencode/issues/37852)

### 2. 用户期望"一键切换所有 agent 的模型"
**#3028** | 评论: 15 | 👍: 2
用户指出在 PLAN+BUILD agent 组合中切换模型时经常只切到一个模式，容易造成混淆，希望 opencode 在切换模型时主动提示是否同时切换所有 agent 的模型。虽然 👍 不多但讨论持续活跃，属于体验类高频诉求。
🔗 [查看 Issue](https://github.com/anomalyco/opencode/issues/3028)

### 3. OpenCode Go 配额在 6 天内被耗尽，本地仅记录 $14.80
**#41976** | 评论: 4
付费用户报告 $60/月的配额在 6 天内被消耗殆尽，但本地客户端记录的实际用量仅 $14.80。issue 指出 **cache-read 计费是对用户不可见的**，本地成本计量器存在严重误导。
🔗 [查看 Issue](https://github.com/anomalyco/opencode/issues/41976)

### 4. Go 订阅账单与用量不匹配
**#43416** | 评论: 4
用户反馈订阅 3 天仅花费约 $9，但 GO 订阅却显示被扣除了 $20 的额度。账单与实际用量不一致，社区要求计费系统给出明细。
🔗 [查看 Issue](https://github.com/anomalyco/opencode/issues/43416)

### 5. Go 订阅每周配额被错误耗尽
**#43424** | 评论: 2
新订阅用户在 2 天内仅消费约 $11，但每周配额已被判定为耗尽，导致服务不可用。与前述计费问题同源，进一步印证了配额计算存在系统性 bug。
🔗 [查看 Issue](https://github.com/anomalyco/opencode/issues/43424)

### 6. Go 5 小时限额显示消耗约 50%，实际用量仅 $1.80
**#43387** | 评论: 2
DeepSeek V4 Pro 用户报告 5 小时限额窗口显示已消耗约 $6（50%），而实际用量不到 $2，请求在达到美元限额之前就被限流。社区推测与 cache-read 计费被重复计算有关。
🔗 [查看 Issue](https://github.com/anomalyco/opencode/issues/43387)

### 7. gpt-5.6-sol-fast 子代理在注入 prompt_cache_retention 时失败
**#43367** | 评论: 2 | 👍: 10
子代理在使用 `openai/gpt-5.6-sol-fast` + variant `max` 时，因 opencode 发送了不支持的 `prompt_cache_retention` 选项而停止响应。3 分钟内 3 个 review 子代理接连失败，对自动化工作流影响较大。
🔗 [查看 Issue](https://github.com/anomalyco/opencode/issues/43367)

### 8. 压缩后会话摘要完全虚构
**#37047** | 评论: 4
升级到 1.18.0 后，compaction 产出的 session summary 与原始会话内容**完全无关**，疑似模型幻觉。本地会话场景下问题依然出现，用户对数据可靠性表示担忧。
🔗 [查看 Issue](https://github.com/anomalyco/opencode/issues/37047)

### 9. Plan 模式模型未正确传递给 Build agent
**#9296** | 评论: 8 | 👍: 11
实验性 plan 模式切换到 build 模式时，build 意外使用了 plan 的模型（如 GPT-5.2）而非配置的 opus-4.5。该 issue 已被关闭，但讨论记录了配置解析上的缺陷。
🔗 [查看 Issue](https://github.com/anomalyco/opencode/issues/9296)

### 10. Web UI V2 提示框控件在窄屏下重叠发送按钮
**#43295** | 评论: 4
窄视口下，V2 提示框内 agent/model/variant 控件挤在一行，宽度超出后覆盖提交按钮，导致误触。属于 UI 适配问题，影响移动端或分屏用户。
🔗 [查看 Issue](https://github.com/anomalyco/opencode/issues/43295)

---

## 重要 PR 进展

### 1. fix: cross-spawn close 事件挂起（Windows）
**#43511** | 已合并
修复 Windows 下当子进程的孙进程继承 stdio 时，`bash` 工具一直等待 `close` 事件直到超时的问题（dev server、守护进程场景）。修复后不再依赖 EOF，改为监听更可靠的退出信号。
🔗 [查看 PR](https://github.com/anomalyco/opencode/pull/43511)

### 2. feat: 配置文件热重载（实验性）
**#43538** | 新增
添加 `OPENCODE_EXPERIMENTAL_HOT_RELOAD=true` 环境变量支持。文件系统 watcher 现在会订阅全局配置目录及各 `.opencode` 目录，**skills、commands、agents 和 config 可在不重启服务的情况下热加载**，对长期运行的用户是重大体验提升。
🔗 [查看 PR](https://github.com/anomalyco/opencode/pull/43538)

### 3. feat: slash 自动补全中显示 skills
**#43537** | 新增
在 `/skills` 对话框的基础上补齐两个空缺：slash 自动补全现在会显示注册的 skill；`/skills` 对话框按来源分组展示。解决了 #7846 中剩下的交互空白。
🔗 [查看 PR](https://github.com/anomalyco/opencode/pull/43537)

### 4. refactor(session-ui): 模块化会话渲染
**#43345** | 更新中
将当前 `SessionDocument`、消息、action、时间线投影等概念全部下沉到 `@opencode-ai/session-ui` 包中，App 层不再自行构造 legacy `Message`/`Part` 类型。为未来多客户端统一渲染架构打下基础。
🔗 [查看 PR](https://github.com/anomalyco/opencode/pull/43345)

### 5. fix(ai): 保留 Vertex Anthropic 工具延续
**#43498** | 待审
修复 Vertex 在 Claude 工具延续以本地 tool result 后的 native system message 结束时返回 HTTP 404 的问题。对使用 Vertex 后端的用户是必要修复。
🔗 [查看 PR](https://github.com/anomalyco/opencode/pull/43498)

### 6. feat(session): 增加 viewed 状态（跨客户端同步）
**#42811** | 更新中
将"未读状态"从 TUI 本地 tab 文件迁移至 Session 实体本身，解决多客户端下未读状态不一致的问题（例如 clientA 标记已读后 clientB 仍显示未读）。通过 ID 回执实现跨实例同步。
🔗 [查看 PR](https://github.com/anomalyco/opencode/pull/42811)

### 7. fix(core): 跨实例插件工具 schema、null 输入与 TUI 默认模型显示
**#43535** | 待审
一次修复三个 bug：插件工具在 Effect schema 下错误校验；带 branded ID 输入的工具调用崩溃；TUI 默认模型显示异常。对从另一个 agent 会话驱动 opencode 的场景很重要。
🔗 [查看 PR](https://github.com/anomalyco/opencode/pull/43535)

### 8. feat(client): 乐观提示提交 + 客户端生成 ID
**#43520** | 待审
prompt 发送变为**幂等**操作：客户端自行生成 inbox ID，POST 后立即渲染，再由服务端持久化回执按同一 ID 对账。按下回车即可见反馈，不再等待网络往返。
🔗 [查看 PR](https://github.com/anomalyco/opencode/pull/43520)

### 9. fix(ai): 隔离 Gemini function-response 回合
**#43479** | 待审
修复 Gemini 将 system updates 合并进包含 function response 的 user turn 导致协议错误的问题。Gemini 要求 function-response 之后的 user turn 不得混入 system 消息。
🔗 [查看 PR](https://github.com/anomalyco/opencode/pull/43479)

### 10. fix(tui): 将命令渲染为附件
**#43528** | 待审
提交 `/mycmd hello` 时不再将命令展开后的模板文本持久化为用户 prose，而是渲染为一等附件对象。模型仍能收到正确的执行结果，但 UI 展示与持久化数据更清晰。
🔗 [查看 PR](https://github.com/anomalyco/opencode/pull/43528)

---

## 功能需求趋势

综合今日 issues 与 PR，社区关注的功能方向主要集中在以下几项：

1. **配置热重载** — #43538 引入了实验性的文件变更自动加载，说明用户越来越期望"改配置即生效"的工作流，而非反复重启服务。

2. **会话系统增强** — 包括会话重命名（#25848）、跨客户端已读状态同步（#42811）、乐观 UI 反馈（#43520）。社区希望会话管理更加精细化和实时化。

3. **模型切换体验改进** — #3028 提出"一键切换所有 agent 的模型"；#9296 报告 plan 与 build 之间模型传递错误。这反映出多 agent 工作流中，模型配置一致性是刚需。

4. **计费透明化** — 多条 Go 订阅计费 issue（#41976、#43416、#43424、#43387）均指向同一诉求：**用户需要看到真实、实时的用量明细**，cache-read 等隐性成本不应在本地计量器中缺席。

5. **AI 输出可靠性** — #37852（静默中断）与 #37047（compaction 幻觉）都触及了同一个深层痛点：**当 LLM 输出不符合预期时，openode 应当明确报错而不是静默成功**。这是当前最需要优先解决的质量问题。

6. **TUI/键盘交互完善** — 如 diff viewer 半页滚动（#43267）、命令附件展示（#43528）、表单粘贴支持（#43526）。V2 的交互细节仍在快速打磨中。

---

## 开发者关注点

- **静默失败比报错更致命**：多个高赞 issue 指出，当 provider 流中断、工具调用异常或数据写入失败时，opencode 有时不会抛出任何错误，而是以“正常完成”的状态继续。这种隐蔽性让开发者难以排查问题，希望团队将"宁可显式报错，不可隐式吞掉"作为核心质量原则。

- **计费信号不可信**：OpenCode Go 的配额显示与实际用量出现数量级偏差（例如 #41976 的 4 倍差距、#43387 的 5 倍差距），且 cache-read 完全不透明。这直接影响用户对产品的信任度，已有多位付费用户表示配额被不合理消耗。

- **V2 稳定性修复节奏加快**：今日新增的多个 PR（#43535、#43520、#43528 等）均针对 V2 的实际使用问题，尤其是跨实例操作和插件 schema 校验。但与此同时，V2 也仍在引入新功能（权限模型、MCP 改进），开发者在期待功能完备的同时，更希望**优先保证已有功能的稳定性**。

- **Windows 平台问题渐受关注**：从 #43511（grandchild 进程 hang）到 #40253（DeepSeek 模型兼容），Windows 用户的比例虽小但痛点明确。建议团队在 QA 阶段增加对 Windows + 常见 shell（cmd/powershell/bash）的矩阵测试。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 2026-08-20

## 今日速览

过去 24 小时无新版本发布，但社区讨论活跃度保持高位。Windows 支持成为最热议题（#7547 已累计 31 条评论），维护者主动发起征集帖以确定改进重心。模型生命周期管理迎来关键修复，PR #8356 落地了高赞 Issue #5263 的会话级模型/思考级别配置方案。扩展生态持续增强，内置斜杠命令事件、UI prompt 事件以及 pi2dsh 跨运行时兼容（#8090）为开发者带来新的构建能力。

## 社区热点 Issues

1. **[#7547] [Windows] 让维护者了解你在 Windows 上的使用方式与痛点**（OPEN，作者 @petrroll）
   维护者发帖征集 Windows 用户的使用方式、遇到的问题与障碍，以便集中精力修复 bug、完善文档，并决定哪些运行方式可交由外部扩展承担。当前最活跃的 Issue，已获 31 条评论。
   https://github.com/earendil-works/pi/issues/7547

2. **[#5263] 会话内模型/思考级别变更默认应临时生效**（CLOSED，👍13）
   用户希望 `/model` 与思考级别切换只作用于当前会话，全局默认通过 `/settings` 显式修改。该提案获 13 个赞，已由 PR #8356 落地。
   https://github.com/earendil-works/pi/issues/5263

3. **[#7829] 无效 settings.json 被静默忽略，Windows 上误报 "bash not found"**（CLOSED）
   未转义的反斜杠导致 JSON 解析失败，但 Pi 未给出明确错误信息，反而报误导性的 "bash not found"。暴露了 Windows 配置错误处理短板。
   https://github.com/earendil-works/pi/issues/7829

4. **[#8323] OpenAI 客户端未设置超时，本地模型长推理被硬切断**（CLOSED）
   `createClient` 未传递 `timeout`，回退到 OpenAI SDK 的 600 秒默认值。本地模型思考超过 10 分钟会被切断，影响自托管模型的生产可用性。
   https://github.com/earendil-works/pi/issues/8323

5. **[#8322] `isRecoverableLength` 漏判"恰好命中上限"的截断**（CLOSED）
   当 `usage.output == desiredMaxOutput` 时函数返回 false，导致本应可恢复的长度截断被直接放弃。属于边界条件逻辑错误。
   https://github.com/earendil-works/pi/issues/8322

6. **[#8328] 零用量提供商的阈值压缩永不触发**（CLOSED）
   某些 OpenAI 兼容提供商不返回 `usage` 块，导致阈值自动压缩在 `_checkCompaction` 中永远无法触发。该 bug 被标记为 untriaged，反映出 Pi 对真实 Provider 行为的容错仍需加强。
   https://github.com/earendil-works/pi/issues/8328

7. **[#8336] glm-5.3 zai 目录条目使思考级别变摆设**（CLOSED）
   zai provider 目录将 `supportsReasoningEffort` 设为 false 且无 `thinkingLevelMap`，导致思考选择器对 glm-5.3 完全无效。已关闭，可能与目录更新流程有关。
   https://github.com/earendil-works/pi/issues/8336

8. **[#8362] Muse Spark 1.2 Contributor 缓存未命中**（CLOSED，👍1）
   用户报告在 Pi 上使用该模型不命中缓存，换到 opencode 则正常，影响推理成本。揭示了不同工具间权重考虑与缓存策略的差距。
   https://github.com/earendil-works/pi/issues/8362

9. **[#8133] 按模型配置压缩参数**（OPEN，👍1）
   提议在 settings.json 中新增 `compaction.profiles`，按模型 ID 设置不同的 `reserveTokens` 等参数，当前全局值作为 fallback。适合多模型混合工作流。
   https://github.com/earendil-works/pi/issues/8133

10. **[#8364] 内置斜杠命令执行前需发出事件**（CLOSED）
    `/share`、`/export` 等内置命令会上传/导出完整会话数据，但扩展没有任何事件可拦截或观察，形成安全盲区。已由 PR #8365/#8366 实现。
    https://github.com/earendil-works/pi/issues/8364

## 重要 PR 进展

1. **[#8356] fix(coding-agent): 模型/思考级别变更改为会话作用域**
   落地高赞 Issue #5263。`/model` 与思考级别切换不再隐式写回全局默认值，只有 `/settings` 中的显式修改才会持久化。
   https://github.com/earendil-works/pi/pull/8356

2. **[#8246] feat(ai): OpenAI Completions 推理细节（reasoning_details）往返修复**
   解决 #7994。保留 assistant 消息级别的 `reasoning.text` / `reasoning.summary`，涵盖带签名条目，修复合成流下推理信息丢失的问题。
   https://github.com/earendil-works/pi/pull/8246

3. **[#8374] fix(coding-agent): 从用户消息 fork 前先中止活跃运行**
   修复用户按 Esc 停止生成后立即打开 fork 选择器时的竞态条件，避免 fork 与 in-flight 运行的冲突。
   https://github.com/earendil-works/pi/pull/8374

4. **[#8365 / #8366] feat: 为内置斜杠命令发出 input 事件**
   让扩展能够观测 `/share`、`/export`、`/settings` 等内置命令的执行，补齐扩展系统在 TUI 输入处理上的可见性盲区。同一功能提交的两个 PR 均已 closed。
   https://github.com/earendil-works/pi/pull/8365

5. **[#8361] Add pi user-agent to most API adapters**
   为 openai-responses、anthropic-messages、google-generative-ai 等 7 个 API 适配器添加默认 User-Agent，便于服务端识别 Pi 流量。关闭 #8305。
   https://github.com/earendil-works/pi/pull/8361

6. **[#8302] feat(ai): Amazon Bedrock Mantle 提供商支持（WIP）**
   新增对 Bedrock Mantle 新 API 表面的支持，解决 GPT 等模型经 Converse 必失败的问题。作者在等待 API key 权限做端到端测试。
   https://github.com/earendil-works/pi/pull/8302

7. **[#8066] fix(tui): 增加视觉行缓存，避免重复计算**
   解决 #8029。缓存按宽度/文本变化的视觉行结果，避免每次渲染重复计算，同时抽取 VisualLine 类型使代码更整洁。
   https://github.com/earendil-works/pi/pull/8066

8. **[#8377] fix(coding-agent): 更新检查尊重 min-release-age**
   修复 `npm view` 直读 latest dist-tag、与 npm 实际安装解析不一致的问题，避免更新提示推荐了会被 npm 拒绝的版本。
   https://github.com/earendil-works/pi/pull/8377

9. **[#8363] fix(tui): 防止被换行的表格链接颜色泄漏**
   修复 #8335。在表格 padding 和边框前重置链接颜色，并保留周围样式；附带了回归测试。
   https://github.com/earendil-works/pi/pull/8363

10. **[#8355] feat(extensions): UI prompt 事件**
    解决 #5329。新增 `ui_prompt_start` 和 `ui_prompt_end` 事件，让客户端在 `ui.select()` / `ui.confirm()` / `ui.input()` 期间显示"等待用户输入"而非"Agent 工作中"。
    https://github.com/earendil-works/pi/pull/8355

## 热门 Discussions

### Q&A / General
- **[#3373] 你最喜欢搭配 Pi agent 使用哪些插件、扩展？**
  12 条评论，👍8。用户 eterps 不常用 Discord，因此在 GitHub 讨论区发起提问，征集社区在日常工作流中使用插件/扩展的最佳实践。是观察社区扩展生态口味的重要窗口。
  https://github.com/earendil-works/pi/discussions/3373

### Show and tell
- **[#8090] Pi 扩展现在有了第二个宿主：可无修改运行于 DeepSeek Harness**
  作者 weijiafu14 发布了 pi2dsh 兼容引擎，使 Pi 生态包能够以 npm 原样在 DeepSeek Harness 上运行，无需 fork 或源码修改。扩展作者的受众面由此扩大至第二个平台。
  https://github.com/earendil-works/pi/discussions/8090

## 功能需求趋势

从过去 24 小时的 Issue 与 Discussion 中可提炼出五个主要方向：

- **模型配置的会话级与全局级分层**：用户要求 `/model` 切换、思考级别变更只作用于当前会话，全局默认通过 `/settings` 统一维护（#5263, #8376, #8133）。
- **Windows 平台支持深化**：从终端键位冲突（#8183, #8372）、settings.json 路径解析（#7829）到维护者主动征集使用反馈（#7547），Windows 已明确成为核心关注平台。
- **扩展系统可见性增强**：内置斜杠命令事件（#8364）、UI prompt 事件（#8355）、工具延迟激活（#8379）、provider 请求 ID（#8380）等，说明扩展体系正在快速补全生命周期观测能力。
- **缓存与成本优化**：fork 会话缓存丢失（#8348）、新模型缓存未命中（#8362）、压缩阈值逻辑缺陷（#8322, #8328）等，凸显多模型/多会话场景下成本控制是用户的直接诉求。
- **提供商兼容性适配**：Bedrock Mantle（#8302）、llama.cpp `/v1/models` 端点（#8341）、qwen-token-plan 目录滞后（#8358）、glm-5.3 思考级别失效（#8336）等，说明社区对长尾提供商的适配需求旺盛。

## 开发者关注点

- **Windows 用户的第一印象不佳**：路径解析、shell 检测、终端键位三重痛点叠加，可能导致 Windows 用户入门即放弃。
- **本地模型超时与截断处理不透明**：600 秒默认超时（#8323）、流式超时参数丢失（#8321）、精确长度命中误判（#8322）等，直接影响自托管模型的生产可用性。
- **缓存与压缩行为可预测性不足**：零 usage 提供商、fork 会话、prompt cache key 按 session id 生成等场景，用户难以预判何时触发压缩、缓存是否命中。
- **扩展生命周期事件不完整**：从内置命令、`agent_end` 自定义 continuation 到 provider 请求的 request ID，扩展作者需要更完整的钩子来构建可靠的工具链。
- **目录与版本数据一致性**：npm latest tag 与 min-release-age 的偏差（#8377）、内置模型目录滞后于 models.dev（#8358），都会影响用户对"最新版本"与"受支持模型"的判断。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-08-20）

## 1. 今日速览

Qwen Code 正式版 `v0.21.14` 发布，核心亮点是新增 `qwen sessions ps` 命令与 live-session registry，可通过 JSON 输出管理运行中的交互会话。社区活跃议题集中在上下文压缩 / token 统计准确性、多智能体协作的误报问题，以及自动化 review 流程的可靠性。多项 P1 缺陷修复 PR 已提交，包括模型切换后 token 计数串用、`/effort max` 阻塞会话等。

## 2. 版本发布

- **v0.21.14（正式版）**  
  新增 `qwen sessions ps` 命令和 live-session registry，用于列出和管理正在运行的交互会话，并支持 JSON 输出。相关实现来自 PR [#8969](https://github.com/QwenLM/qwen-code/pull/8969)、[#9261](https://github.com/QwenLM/qwen-code/pull/9261)、[#9366](https://github.com/QwenLM/qwen-code/pull/9366)。

- **v0.21.14-preview.0 / v0.21.11-nightly.20260819**  
  包含上述 core 功能，并在 daemon 端增加 skill-toggle mutation metadata。

- **基准验证标签**  
  `dsw-eas-full-20260820-r1` 与 `dsw-eas-full-20260819-r1` 均指向 `Benchmark-Qwen-Ref: v0.21.14`，完成 SWE-bench Verified 500 与 Terminal-Bench 2.0 89 的全链路验证；`dsw-eas-net-smoke-20260819-r1` 则完成隔离环境下的 1/1 SWE-bench Verified 冒烟。

## 3. 社区热点 Issues

以下为过去 24 小时内更新、值得关注的 10 个 Issue：

1. **[#9459] `/effort max` 在 OpenAI-compatible 提供商上阻塞整个会话（P1）**  
   https://github.com/QwenLM/qwen-code/issues/9459  
   `/effort max` 被 UI 提供，但 OpenAI-compatible 提供商全部拒绝该值，`clampReasoningEffort()` 未对 `max` 做钳制，导致后续每个请求都返回 400。社区 4 条评论，已标记 `status/ready-for-agent`，属高优缺陷。

2. **[#9454] 模型切换后 token 计数沿用上一路由（P1）**  
   https://github.com/QwenLM/qwen-code/issues/9454  
   `GeminiChat` 在 `/model` 切换后仍保留上一请求的 prompt / output token 计数，且计数未按路由标识隔离，会造成用量统计失真。评论 3 条，P1 严重度。

3. **[#9480] CI 加固后的 wipe guard 在 workspace 被符号链接替换时卡死 runner（P1）**  
   https://github.com/QwenLM/qwen-code/issues/9480  
   `qwen-triage.yml` 与 `serve-ab.yml` 引入 fail-closed 的 wipe guard 后，遇到 workspace 被 symlink 替换的场景会“卡死”runner。评论 3 条，P1，影响 CI 稳定性。

4. **[#8051] 多工作区 daemon 资源占用需要可量化限制（P2）**  
   https://github.com/QwenLM/qwen-code/issues/8051  
   现有 daemon 只限制 workspace / session 数量，未限制 request body、WebSocket 组装等字节占用。社区 10 条评论，讨论热度高，反映生产环境对资源可观测性的诉求。

5. **[#9450] `task_list` 在团队协作中误触发重复工具调用检测（P2）**  
   https://github.com/QwenLM/qwen-code/issues/9450  
   Agent Team 场景中，不同成员并发修改共享任务板时，相同 `task_list` 参数并不代表相同结果，但循环检测仍按参数判重，导致 teammate 被误停。评论 4 条，已标 `welcome-pr`。

6. **[#9309] 上下文压缩仍存在计数/内容错误（P3）**  
   https://github.com/QwenLM/qwen-code/issues/9309  
   用户反馈连续执行 `/compress-fast` 后再 `/compress`，压缩后的 token 数与实际不符。评论 5 条，与 #9320、#4098 等形成压缩问题簇，社区关注度较高。

7. **[#9278] `/review` 发布时收敛建议设计（P2）**  
   https://github.com/QwenLM/qwen-code/issues/9278  
   系统梳理 `/review` 在“修复 → 新 diff → 新 finding”循环中增益大于 1 的问题，提出 telemetry、诊断与 operator 发布面的收敛方案。评论 7 条，是自动化 review 质量方向的关键设计讨论。

8. **[#8596] 弃用 Electron 桌面应用，Tauri shell 接管 `desktop` 命名（P2）**  
   https://github.com/QwenLM/qwen-code/issues/8596  
   计划冻结 `packages/desktop`（Electron），将 `packages/desktop-shell`（Tauri）更名为 `packages/desktop`。反映桌面端技术栈向 Tauri 迁移的明确方向。评论 4 条。

9. **[#9494] 流式响应期间斜杠命令菜单选中项重置（P3）**  
   https://github.com/QwenLM/qwen-code/issues/9494  
   输入 `/` 触发补全后移动高亮，选中项偶尔跳回第一个命令，影响交互效率。评论 3 条，UI 细节缺陷。

10. **[#9493] Homebrew 安装每次启动都提示更新（P2）**  
    https://github.com/QwenLM/qwen-code/issues/9493  
   当 npm `latest` 比本地 Homebrew 版本新时，CLI 每次启动都显示“有可用更新”，但用户无法通过 `brew upgrade` 更新到该版本，通知存在误导。评论 3 条。

## 4. 重要 PR 进展

以下为过去 24 小时内更新、值得关注的 10 个 PR：

1. **[#9506] fix(core): invalidate token counts recorded for a switched model route**  
   https://github.com/QwenLM/qwen-code/pull/9506  
   将 GeminiChat 的 API token 计数绑定到当前模型路由（model + auth type + endpoint），切换时自动失效旧计数，修复 #9454。

2. **[#9492] fix(core): make loop detection result-aware for task_list polls**  
   https://github.com/QwenLM/qwen-code/pull/9492  
   对 `task_list` 这类有状态只读工具，循环检测改为“结果感知”，避免同参数但状态已变化时误报重复调用，修复 #9450。

3. **[#9508] fix(cli): keep slash menu selection stable while a response streams**  
   https://github.com/QwenLM/qwen-code/pull/9508  
   流式响应期间不再因 `commandContext` 重建而重跑补全搜索，斜杠菜单选中项保持稳定，修复 #9494。

4. **[#9502] fix(cli): suppress Homebrew update notification when brew has nothing newer**  
   https://github.com/QwenLM/qwen-code/pull/9502  
   Homebrew 安装场景下，先通过 `brew info --json=v2`（5 秒超时）确认本地元数据，避免误报更新，修复 #9493。

5. **[#9402] feat: agent board — share work across independently started agents**  
   https://github.com/QwenLM/qwen-code/pull/9402  
   新增基于文件系统的 Agent Board，让独立启动的 Agent 之间可以共享工作产物与状态，是多智能体协作基础设施的重要补充。

6. **[#9394] feat(channels): add DingTalk Workspace channel**  
   https://github.com/QwenLM/qwen-code/pull/9394  
   新增钉钉 Workspace 频道，复用已认证的 DWS CLI profile，支持私聊、@提及、文档提醒、待办同步与 source-scoped sessions，扩展集成生态。

7. **[#9361] feat(scheduled-tasks): allow creating a task with an existing session**  
   https://github.com/QwenLM/qwen-code/pull/9361  
   调度任务创建接口现在可传入 `sessionId`，复用 workspace 中空闲的 live session，并校验输入、owner、task-source 与重复绑定。

8. **[#9389] feat(providers): recommend the live model list in the setup wizard**  
   https://github.com/QwenLM/qwen-code/pull/9389  
   提供商配置向导的“推荐模型”不再冻结在发布时，可即时请求 `GET {baseUrl}/models` 获取当前可用模型，提升配置准确性。

9. **[#9499] feat(core): add persistent Node REPL runtime**  
   https://github.com/QwenLM/qwen-code/pull/9499  
   新增会话级持久 Node REPL 工具族：支持 top-level await、跨 cell 变量绑定、失败后部分提交、确定性 ESM 导入、结构化输出与 heap 限制，强化 agent 的代码执行能力。

10. **[#9303] fix(web-shell): bound daemon transcript retention to stop renderer OOM crashes**  
    https://github.com/QwenLM/qwen-code/pull/9303  
    加载 session 后立即释放原始 replay 快照，并将 replay 重建与 live growth 置于同一 block cap 下，避免浏览器端因 transcript 无限增长而 OOM。

## 6. 功能需求趋势

- **上下文与 Token 管理精细化**  
  压缩命令（`/compress`、`/compress-fast`）的准确性与可观测性成为高频诉求；同时用户希望 CLI 能显示 token 用量与占比，避免“黑盒”消耗。

- **多智能体协作深化**  
  从 Advisor 反馈循环到 Agent Board、`task_list` 状态感知，社区明显在推动 Agent 之间更安全、可共享的工作模型。

- **外部渠道与协议集成**  
  除 GitHub 外，新增钉钉 Workspace 频道；仍有 OpenAI Response API 支持等老需求，体现对“接入更多模型/协作平台”的持续期待。

- **桌面端技术栈迁移**  
  多个 Issue/PR 指向将 Electron 替换为 Tauri，并重新梳理 `desktop` 包命名，桌面端是当前重点演进方向之一。

- **自动化 review 与 CI 可靠性**  
  `/review` 的收敛策略、presubmit 匹配盲区、测试 pin 缺口、CI wipe guard 等问题集中出现，反映项目对工程流水线自我治理的重视。

## 7. 开发者关注点

- **压缩与 token 统计不可靠**  
  多个 Issue 反馈压缩后计数异常、上下文丢失、模型切换后计数串线，开发者对 token 使用的透明度和准确性有很强需求。

- **多智能体场景下的误报与歧义**  
  `task_list` 重复调用误报、`list_agents` 空结果歧义等问题影响 Agent Team 协作体验，需要工具语义与检测逻辑同步升级。

- **安装与更新通知体验**  
  Homebrew 安装后每次启动误报更新、CLI 缺少 token 用量展示等细节问题，虽不致命但频繁打断工作流。

- **守护进程资源边界**  
  多工作区 daemon 的字节级资源占用缺乏限制，社区希望在数量限制之外增加可量化的内存/请求体约束。

- **自动化 review 的质量瓶颈**  
  开发者反馈 `/review` 存在“修复引入新缺陷”的失控回路，以及 overlap 匹配仅限精确行等盲区，说明自动审查仍需更智能的上下文与契约校验。

</details>

<details>
<summary><strong>CodeWhale</strong> — <a href="https://github.com/Hmbown/CodeWhale">Hmbown/CodeWhale</a></summary>

# CodeWhale 社区动态日报 — 2026-08-20

## 今日速览
v0.9.10 发布候选 PR 已开出（76 个提交），聚焦内存保留、会话身份与审批持久化；跨平台 CI 已连续多轮全红，release 阻塞风险上升。社区侧，Web 端 i18n 字典迁移持续推进，但 `isZh` 分支数量不降反增；TUI 稳定性问题（大文本会话中断、状态指示器消失、max_tokens 越限）仍是开发者反馈最集中的方向。

## 版本发布
过去 24 小时无新 Release。关注 [PR #5513](https://github.com/Hmbown/CodeWhale/pull/5513)（v0.9.10 发布候选）。

---

## 社区热点 Issues

**1. [#5518 - 紧急压缩在 ~85K–105K token 过早触发](https://github.com/Hmbown/CodeWhale/issues/5518)**
`OPEN` · DeepSeek V4 Flash + vLLM 路由，配置 327,680 token 上下文窗口且 `auto_compact = false`，但紧急压缩仍在 85K–105K 附近触发。社区怀疑 output headroom 预算与 handoff 状态污染是主因，直接影响长会话任务。

**2. [#5516 - v0.9.9 升级后 max_tokens=384000 超出模型限制](https://github.com/Hmbown/CodeWhale/issues/5516)**
`OPEN` · 升级后无任何手动配置，SSE 请求即报 `HTTP 400 max_tokens=384000 > max_model_len=262144`。涉及默认配置与模型能力协商逻辑，属升级回归，当前阻塞所有请求。

**3. [#5512 - Header 状态指示器自 v0.9.7 起不再渲染](https://github.com/Hmbown/CodeWhale/issues/5512)**
`OPEN` · Windows 11 + Windows Terminal + PowerShell 环境下，`cw / whale / dots / off` 状态指示器在 0.9.7+ 完全消失，0.8.64 时代正常。UI 回归问题，社区用户反馈明确。

**4. [#5337 - Web 端字典脊柱迁移：清理全部 isZh 分支](https://github.com/Hmbown/CodeWhale/issues/5337)**
`OPEN` · 跟踪 #4934 建立的统一字典路径在页面 body 层的剩余迁移工作。当前仍有大量页面使用 `{ en, zh }` 二元三元表达式，是 Web i18n 治理的主线。

**5. [#5519 - isZh 迁移不收敛，30 天内分支数 27 → 31](https://github.com/Hmbown/CodeWhale/issues/5519)**
`OPEN` · 迁移速度跟不上新增分支速度。30 天内 10 个文件新增 `locale === "zh"` 分支、仅 6 个完成迁移，需要单向上限机制强制收敛。

**6. [#5482 - EPIC：文档审查、重构与全量中文本地化](https://github.com/Hmbown/CodeWhale/issues/5482)**
`OPEN` · 大量 `docs/` 文档仅英文，机器翻译质量差且部分源文档已过时。社区对中国用户文档可访问性的诉求持续升温。

**7. [#1425 - 大文本处理工程中会话中断卡死](https://github.com/Hmbown/CodeWhale/issues/1425)**
`CLOSED` · 300 万字小说分析场景，10 个子 Agent 全部 Running，最终 `agent_wait` 超时导致会话中断。多评论确认非偶现，与子 Agent 超时机制强相关。

**8. [#1829 - SSH 连接失败：exit code 255](https://github.com/Hmbown/CodeWhale/issues/1829)**
`CLOSED` · 内置 shell 沙箱疑似阻断 TCP 22 出站，导致 `ssh` / `scp` 全部失败。本地终端正常，指向沙箱网络策略问题。

**9. [#5472 - TUI 内存保留：Bash 调用完整 stdout/stderr 保留 1 小时](https://github.com/Hmbown/CodeWhale/issues/5472)**
`CLOSED` · 主机在 v0.9.9 会话期间进入 11 GB swap。审计发现 Bash 工具的全量输出在进程内保留 1 小时，叠加多组保留器加剧内存压力，是 v0.9.10 重点修复项。

**10. [#5478 - /rename 导致 in-flight shell 工具行卡在 "running"](https://github.com/Hmbown/CodeWhale/issues/5478)**
`CLOSED` · 工具执行中执行 `/rename`，作业实际完成但 UI 行状态不更新。会话状态同步缺陷，影响 dogfooding 体验。

---

## 重要 PR 进展

**1. [#5513 - release: Codewhale v0.9.10](https://github.com/Hmbown/CodeWhale/pull/5513)**
`OPEN` · 完整 76-commit 发布车道，涵盖 retention、identity、first-run 与 release-hardening。已 rebase 至公共 main 基线，是当前最重要的发布跟踪 PR。

**2. [#5507 - docs(i18n): 中文本地化 Tier 1 完成](https://github.com/Hmbown/CodeWhale/pull/5507)**
`CLOSED` · 对应 EPIC #5482。重构文档树为按语言分目录结构（`docs/zh_hans/`），迁移既有翻译；为后续多语言铺路。

**3. [#5517 - feat(web): docs/constitution 与 docs/runtime-api 迁移至字典脊柱](https://github.com/Hmbown/CodeWhale/pull/5517)**
`OPEN` · #5337 系列 Phase 2。两文件各 14 个 `isZh` 分支清零，接入 `check-locales.mjs` 强制 key 与 token 对齐。

**4. [#5515 - fix(tui): MCP 图片结果转为类型化内容](https://github.com/Hmbown/CodeWhale/pull/5515)**
`OPEN` · 将标准 MCP `image` content 转为 CodeWhale 中立的 rich tool-result block，移除 text receipt 中的内联 base64，复用现有图片校验与 5 MiB 限制。

**5. [#5514 - refactor(tui): 从 turn loop 提取流处理](https://github.com/Hmbown/CodeWhale/pull/5514)**
`OPEN` · 将 `handle_deepseek_turn` 中的响应流状态机提取为 `process_stream`，通过 `StreamOutcome` 返回流产物。纯重构，为后续 turn 循环简化铺路。

**6. [#5509 - fix(tui): 恢复 /title 独立终端窗口标题](https://github.com/Hmbown/CodeWhale/pull/5509)**
`OPEN` · 撤销 /title 与 /rename 的合并，恢复 /title 作为独立终端窗口标题命令（原合并改变了 composer、picker 与终端 tab 行为）。

**7. [#5504 - feat(web): docs/hooks 与 docs/troubleshooting 接入字典脊柱](https://github.com/Hmbown/CodeWhale/pull/5504)**
`CLOSED` · #5337 系列推进。两页面 16 个部分本地化字符串全部迁移至字典，`isZh` 分支清零。

**8. [#5491 - fix(tui): 执行前持久化审批结果](https://github.com/Hmbown/CodeWhale/pull/5491)**
`CLOSED` · 审批请求与终态结果在执行前写入 session 日志；无法持久化时拒绝执行并丢弃过期决策；断点恢复时重建审批状态。Closes #5360。

**9. [#5506 - feat(tui): 命令上下文适配器与迁移门禁](https://github.com/Hmbown/CodeWhale/pull/5506)**
`CLOSED` · FEAT-015 基础设施：TUI 自有的 DI 与迁移机制，支持斜杠命令实现安全渐进式提取。零生产命令组迁移，纯基础设施。

**10. [#5511 - feat(tui): git chrome 显示仓库上下文](https://github.com/Hmbown/CodeWhale/pull/5511)**
`CLOSED` · TUI header 新增 `repo · branch*`、`repo/worktree · branch*` 及 ahead/behind 计数，长仓库名优雅截断，解决 agent 操作位置不明确的问题。

---

## 功能需求趋势
- **中文本地化与 i18n 治理**：文档本地化（#5482）、Web 字典脊柱迁移（#5337/#5517/#5504）、isZh 分支收敛（#5519）构成当前最活跃的功能主线。
- **长会话与大上下文稳定性**：紧急压缩过早触发（#5518）、max_tokens 越限（#5516）、大文本处理卡死（#1425）指向同一核心诉求——让长会话可预期、可恢复。
- **TUI 可靠性与状态一致性**：内存保留（#5472）、/rename 状态卡住（#5478）、header 指示器消失（#5512）反映社区对 TUI 基础体验的敏感度上升。
- **审批与安全持久化**：#5491 将审批记录落盘，体现对可审计、fail-closed 工作流的需求。
- **MCP 生态深化**：#5515 补齐 MCP 图片类型化支持，MCP 集成正在从文本向富内容扩展。

---

## 开发者关注点
- **升级回归影响面大**：v0.9.9 升级即出现 max_tokens 越限（#5516）、状态指示器消失（#5512），开发者对版本质量与回归测试的容忍度正在下降。
- **跨平台 CI 持续红灯**：#5403 指出四个 completed runs 在 macOS/Windows 全红，release 阻塞风险需尽快收敛。
- **长会话内存与超时是核心痛点**：TUI 内存保留策略（#5472）与大文本任务超时（#1425）被多次提及，是影响实际生产力的关键问题。
- **中文化需求从用户侧向文档侧延伸**：中国开发者不仅在 issue 中使用中文反馈，还主动提交中文本地化 PR（#5507），社区对官方中文支持的期待明显提升。
- **测试可靠性影响信任度**：#5056 中 flaky verifier 测试与 12 个未分诊 `#[ignore]` 测试，反映出测试基建仍有欠账。

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*