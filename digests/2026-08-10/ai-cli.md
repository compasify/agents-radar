# AI CLI 工具社区动态日报 2026-08-10

> 生成时间: 2026-08-10 00:52 UTC | 覆盖工具: 10 个

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

# AI CLI 工具横向对比分析报告（2026-08-10）

## 1. 生态全景

当前 AI CLI 工具已从单点对话终端演变为 **多端协作平台**：远程控制、移动端接管、IDE 集成（Xcode/VSCode）成为各家的共同发力点。**安全审查、MCP 生态、多智能体编排**是三个竞争最激烈的方向，但均处于"能力先行、可靠性滞后"阶段——Claude Code 的安全误报、Gemini 的子代理挂起、Copilot 的 MCP 握手失败都指向同一结论：**信任机制的建设速度落后于功能扩张速度**。同时，MCP 兼容性问题在至少 6 个工具中集中爆发，说明协议标准化仍处早期；而 Windows/跨平台支持、性能回归则是多数工具共同的明显短板。整体呈现"**头部成熟、中部快速迭代、尾部尚未起量**"的格局。

## 2. 各工具活跃度对比

| 工具 | 热点 Issues | PR 数 | Release | 活跃特征 |
|---|---|---|---|---|
| **Claude Code** | 10 条精选 + 约 20 条 ClAudit 系列 | 4 | 无 | Issue 密度最高，生态成熟但安全机制引发集中反弹 |
| **OpenAI Codex** | 10 条精选 | 8（7 合 1 开） | 无 | PR 偏基础设施（gRPC、hook 泛化），社区高赞功能诉求突出 |
| **Gemini CLI** | 10 条精选（含 5 个 P1） | 10（5 开 5 合） | v0.56.0-nightly | 双轨推进，子代理可靠性是核心痛点 |
| **GitHub Copilot CLI** | 25 条更新 / 10 条精选 | 0 | 无 | 社区反馈活跃但官方 PR 为零，响应速度存疑 |
| **Kimi Code CLI** | 2 | 1（旧 PR 更新） | 无 | 活跃度低，处于早期阶段 |
| **OpenCode** | 10 条精选 | 10 | 无（dev→v2 合并） | 社区热度最高（122 评论 / 110👍），但 Go 网关信任危机 |
| **Pi** | 10 条精选 | 10（多已合入） | 无 | 高频修复 + 结构性改进（wire protocol） |
| **Qwen Code** | 10 条精选 | 10（多开） | v0.21.8-nightly | 多智能体进入产品化，厂商扩展积极 |
| **DeepSeek TUI** | 30 条热帖 / 10 条精选 | 5（4 合 1 开） | v0.9.6 筹备中 | 中速迭代，上下文压缩与 TUI 细节是焦点 |
| **Grok Build** | 0 | 0 | 无 | 无活动 |

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **MCP 兼容性与生态稳定性** | Copilot CLI、Qwen、Kimi、Gemini、OpenCode、Claude | 非标准 `server/discover` 请求导致初始化失败（Copilot #4370）；可选 GET/SSE 端点 404 中断整个连接（Qwen #8784）；工具超 128 个即报 400（Gemini #24246）；Google GenAI 与 MCP 参数元数据冲突（Kimi #739）；插件版本解析逃逸根目录（Claude #82712） |
| **安全/权限可配置性** | Claude、Gemini、Copilot、DeepSeek、OpenCode | 安全分类器误报且 `/model` 无法覆盖（Claude #67246）；被拒绝的工具调用仍执行（Claude #83760）；子代理绕过禁用配置运行（Gemini #22093）；managed settings 空白名单误杀用户 MCP server（Copilot #4419）；默认"拒绝"高亮不可配置（DeepSeek #5293） |
| **子代理/多智能体可靠性** | Gemini、Copilot、OpenCode、Qwen、DeepSeek | MAX_TURNS 被误报为 GOAL 成功（Gemini #22323）；嵌套子代理权限请求导致会话永久挂起（OpenCode #13715）；explore 子代理无退避触发 429（Copilot #4416）；agents 调用 agents 的层级委托（Gemini PR #28738、Qwen RFC #8718） |
| **模型可配置与容灾** | OpenCode、Codex、Copilot | 跨模型自动回退/故障转移（OpenCode #7602，107👍）；状态栏自定义显示 token/模型/限流（Codex #17827，150👍）；企业模型目录与后台设置不一致（Copilot #4390） |
| **远程/跨设备协作** | Claude、Codex、Copilot、Qwen、OpenCode | Remote Control 浏览器端不流式渲染（Claude #85240）；移动端看不到 Mac 上的 SSH 项目（Codex #23527）；`/remote` 在组织仓库失败（Copilot #2751）；Local Control 绑定活动会话（Qwen PR #8806）；Xcode ACP 忽略所选模型（OpenCode #34743） |
| **上下文压缩/记忆可观测性** | DeepSeek、Kimi、Gemini、Qwen | `/compact` 提示成功但 token 计数无变化（DeepSeek #5096）；跨会话 Memory System 长期缺失（Kimi #1283，27 评论）；Auto Memory 脱敏滞后有隐私隐患（Gemini #26525）；大快照恢复超时可能丢失当前会话（Qwen #8678，P1） |

## 4. 差异化定位分析

| 工具 | 功能侧重 | 技术路线 | 目标用户 / 典型场景 |
|---|---|---|---|
| **Claude Code** | 安全审查模型、Hook/技能插件生态、Remote Control 协作 | TypeScript、官方插件体系、服务器端安全分类器 | 企业级专业开发者；追求最强代码能力与可编程扩展，但对安全机制"误伤"容忍度低 |
| **OpenAI Codex** | TUI 现代化（可配置状态栏）、gRPC code-mode、移动端远程 | Rust（exec-server、TOML、gRPC） | OpenAI/ChatGPT 生态用户；高频 TUI 重度使用者；Windows 是当前最大短板 |
| **Gemini CLI** | 子代理矩阵（generalist/codebase/browser）、ACP、Auto Memory | TypeScript/Node、ACP 协议、nightly 双轨 | Google 生态与多 Agent 编排实验者；痛点是子代理反馈回路不可靠 |
| **Copilot CLI** | GitHub 深度集成（`/remote`、hooks、managed settings）、企业模型目录 | TypeScript、MCP 客户端、GitHub 托管策略 | GitHub 企业用户；组织级安全与合规场景；但 MCP 兼容性影响体验 |
| **Kimi Code** | ACP/print 模式、多 provider（Google GenAI 兼容修复） | TypeScript | Moonshot/Kimi 生态用户；功能与社区均处早期 |
| **OpenCode** | 高度可定制开源、模型回退、V2 分支（App/Desktop/TUI/SDK） | TypeScript/Bun + Go 网关（OpenCode Go） | 开源社区与个性化用户；追求自由配置，但对 Go 网关稳定性信任动摇 |
| **Pi** | 本地模型优先（llama.cpp）、扩展系统、远程 wire protocol | TypeScript、`@earendil-works/pi-protocol`（CBOR） | 本地优先/隐私敏感开发者；TUI 与扩展机制创新活跃 |
| **Qwen Code** | 多智能体协调（`/coordinate`）、工作流引擎、厂商扩展（Kimi/小米 MiMo） | TypeScript、Goal v3 状态机、统一 SessionRuntime | 亚洲市场多模型用户；多 Agent 产品化走在前列，会话恢复安全待加强 |
| **DeepSeek TUI** | 上下文压缩透明化、Fleet 多模型、TUI 交互细节 | Rust、发布管线自动化（crate 顺序校验） | DeepSeek/GLM 用户与 TUI 爱好者；v0.9.x 多智能体底座建设中 |
| **Grok Build** | — | — | 无公开社区动态 |

## 5. 社区热度与成熟度

**第一梯队（高活跃、社区规模大）**：**Claude Code** 与 **OpenCode**。前者以约 30 条/日的 Issue 密度居首，且用户已形成"统一模板 + Request ID + Triaging 信息"的专业化报告习惯，社区成熟度最高；后者靠 122 评论的剪贴板 Bug 和 107👍 的模型回退需求证明了极强的社区参与度，但 Go 网关"修复无效"事件正在消耗信任。

**快速迭代梯队**：**Gemini CLI**（nightly + 10 PR）与 **Qwen Code**（nightly + 10 PR）保持每日交付节奏；**Pi** 的 10 个 PR 多已合入，78xx 系列 bug 快速关闭，是修复效率最高的项目之一。**OpenAI Codex** 的 PR 偏基础设施（gRPC 传输、hook 泛化、I/O 错误分类），属于稳健积累期。

**中速 / 响应滞后**：**Copilot CLI** 每日 25 条 Update 但 0 PR，官方响应与社区反馈之间存在明显空窗；**DeepSeek TUI** 处于 v0.9.6 发布筹备与多智能体架构重构的过渡期。

**早期 / 低活跃**：**Kimi Code CLI**（仅 2 条 Issue）与 **Grok Build**（无活动）尚未形成有效社区循环。

## 6. 值得关注的趋势信号

1. **安全策略正从"宁可错杀"转向"可配置信任边界"**。Claude Code 的约 20 条 ClAudit 误报（将 NPM audit、AD 运维判定为网络攻击并中断会话）、Copilot 的空白名单误杀、Gemini 的子代理权限绕过——用户不再无条件接受安全黑盒，而是要求**可解释、可覆盖、可关闭**。启示：安全机制必须提供逃生舱，否则误报积累的信任损耗会超过其防护价值。

2. **"拒绝但工具仍执行"类事件是信任红线**。Claude #83760 中 PowerShell 工具在被拒绝后仍运行，这类权限缺陷比功能 Bug 危害大一个量级。任何自动化工具若不能保证用户授权"言出必行"，就无法进入生产环境。

3. **MCP 生态进入"兼容性阵痛期"**。6 个工具同时暴露 MCP 问题：非标准方法、硬编码超时、可选端点失败即断连、工具数量上限。MCP 客户端需要更宽容的协议降级策略，服务端需要严格规范合规，这将是下一阶段生态建设的关键瓶颈。

4. **子代理的"错误成功"比"错误失败"更危险**。Gemini 将 MAX_TURNS 中断误报为 GOAL 成功、DeepSeek 的 File edit 假成功、Qwen 的未知事件篡改 transcript——这些都会污染用户的决策依据。多智能体要进入生产，**可靠性（真实状态上报）应先于能力扩展**。

5. **远程/移动端协作成为第二增长曲线**。Claude Remote Control、Codex 移动端、Qwen Local Control QR 配对、Copilot `/remote` 均在发力，但流式渲染缺失（#85240）、SSH 项目不显示（#23527）、kickoff prompt 静默丢弃（#4423）等问题说明**跨设备连续性仍是未兑现的体验**。

6. **模型层抽象与容灾成为企业刚需**。OpenCode 的模型回退（107👍）、Copilot 的企业模型目录一致性、Codex 的网关模型名映射——在多模型、多网关、限流常态化的环境下，"故障时自动切换"和"配置所见即所得"比追求单一模型上限更具实际价值。

7. **本地模型与隐私路线持续存在**。Pi 的 llama.cpp 优先体验、DeepSeek 的本地化、Gemini Auto Memory 脱敏争议（内容先入上下文后脱敏）表明：一批开发者需要不依赖云端的路径，并对"看不见的地方"（内存提取、日志记录）有强烈控制诉求。

8. **TUI 体验精细化成为差异化战场**。Codex 状态栏（150👍）、OpenCode 剪贴板（110👍）、Pi 的 `copyOnSelect`、DeepSeek 的 IME 候选框——终端交互细节已从"能用"进入"好用"竞争期，这些看似微小的体验问题正直接拉低用户留存。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据截止**: 2026-08-10 | **数据源**: github.com/anthropics/skills（PR 50 条 / Issues 50 条）

---

## 1. 热门 Skills 排行（按社区讨论热度）

### ① PR #1298 — skill-creator 评估链路修复（讨论度最高）
- **链接**: https://github.com/anthropics/skills/pull/1298
- **功能**: 修复 `run_eval.py` 对所有 skill 描述恒报 `recall=0%` 的致命缺陷（连带影响 `run_loop.py` 与 `improve_description.py` 的优化信号），并修复 Windows 流读取、触发检测与并行 worker 问题。
- **热点**: 直指 #556（12 评论）报告的 "claude -p 永远不触发 skill" 系统性 Bug，是 skill 描述优化循环失效的根因级修复。
- **状态**: 🟡 OPEN

### ② PR #514 — document-typography 文档排版技能
- **链接**: https://github.com/anthropics/skills/pull/514
- **功能**: 对 AI 生成文档做排版质量控制，覆盖孤词折行（orphan）、页底孤立标题（widow）、编号错位三类高频缺陷。
- **热点**: 直击 AI 生成文档的通用痛点，社区普遍认为"用户很少主动要求但每个文档都有"、适用范围极广。
- **状态**: 🟡 OPEN

### ③ PR #486 — ODT 办公文档技能
- **链接**: https://github.com/anthropics/skills/pull/486
- **功能**: 支持 OpenDocument（.odt/.ods/.odf）的创建、模板填充、读取及 ODT→HTML 转换，补全 LibreOffice/开源文档生态。
- **热点**: 与现有 pdf/docx 技能互补，社区期待官方文档技能矩阵完整化。
- **状态**: 🟡 OPEN

### ④ PR #210 — frontend-design 技能重构
- **链接**: https://github.com/anthropics/skills/pull/210
- **功能**: 全面修订 frontend-design 技能，提升指令清晰度、可执行性与内部一致性，确保每条指令能在单次对话内被执行。
- **热点**: 呼应 #202 中"skill 应写给 AI 执行、而非写给人类阅读"的社区共识，是技能写作范式转型的代表。
- **状态**: 🟡 OPEN

### ⑤ PR #83 — 元技能：skill-quality-analyzer + skill-security-analyzer
- **链接**: https://github.com/anthropics/skills/pull/83
- **功能**: 新增两个审查类元技能——质量分析器（结构/文档/示例/资源五维评估）与安全分析器，用于审计其他 Skill。
- **热点**: 社区技能数量快速膨胀后，质量与安全审查成为刚需，与 #492 安全议题形成呼应。
- **状态**: 🟡 OPEN

### ⑥ PR #1367 — self-audit 交付审计技能（v1.3.0）
- **链接**: https://github.com/anthropics/skills/pull/1367
- **功能**: 交付前先做机械性文件存在性验证，再按损害严重度优先级执行四维推理审计，宣称跨项目/技术栈/模型通用。
- **热点**: 与 #1385 "Reasoning Quality Gate Pipeline" 提案联动，代表社区对输出质量门禁的系统化思考。
- **状态**: 🟡 OPEN

### ⑦ PR #723 — testing-patterns 测试模式技能
- **链接**: https://github.com/anthropics/skills/pull/723
- **功能**: 覆盖完整测试栈的综合技能：Testing Trophy 理念、测试命名与边界、单元测试 AAA 模式、React Testing Library、端到端测试策略。
- **热点**: 社区对"测试生成"类能力的工程化需求强烈，是讨论最活跃的新增技能之一。
- **状态**: 🟡 OPEN

### ⑧ PR #525 — pyxel 复古游戏开发技能
- **链接**: https://github.com/anthropics/skills/pull/525
- **功能**: 基于 pyxel-mcp 的像素风/8-bit 游戏工作流（写码 → 运行截图 → 检查 → 迭代）。
- **热点**: 垂直细分领域的代表性探索，展示官方技能之外的生态外延。
- **状态**: 🟡 OPEN

> 注：高评论数 PR 中另有多个基础设施修复（#538 PDF 大小写引用、#541 docx 修订 ID 冲突、#539 YAML 引号警告、#1099/#1050 Windows 兼容），详见第 3 节。

---

## 2. 社区需求趋势（来自 Issues）

| 趋势 | 代表 Issue | 核心诉求 |
|---|---|---|
| 🔐 **安全信任与命名空间治理**（最热议题） | [#492](https://github.com/anthropics/skills/issues/492)（43 评论，全场最高） | 社区技能借 `anthropic/` 命名空间分发，冒充官方 Skill，形成信任边界滥用漏洞 |
| 🏢 **企业级共享协作** | [#228](https://github.com/anthropics/skills/issues/228)（16 评论） | 要求支持组织内 skill 直接共享/分发，替代手动传文件上传 |
| 🛠️ **skill-creator 工具链可靠性** | [#556](https://github.com/anthropics/skills/issues/556)（12 评论）、[#202](https://github.com/anthropics/skills/issues/202)（8 评论，已关闭）、[#1169](https://github.com/anthropics/skills/issues/1169) | run_eval 0% recall、描述优化循环失效；skill-creator 应改为操作性指令而非人类文档 |
| 🧠 **质量保障类元技能** | [#1385](https://github.com/anthropics/skills/issues/1385)、[#412](https://github.com/anthropics/skills/issues/412)（已关闭）、[#1329](https://github.com/anthropics/skills/issues/1329) | 推理质量门禁流水线、agent 安全治理模式（governance）、紧凑符号化状态管理 |
| 📉 **上下文与性能优化** | [#1487](https://github.com/anthropics/skills/issues/1487)、[#189](https://github.com/anthropics/skills/issues/189) | `claude-api` 技能单次注入约 156k tokens 撑爆上下文；两个插件安装相同技能导致重复加载 |
| ⚠️ **稳定性与兼容性** | [#62](https://github.com/anthropics/skills/issues/62)（10 评论）、[#29](https://github.com/anthropics/skills/issues/29) | Skills 文件消失异常；AWS Bedrock 平台支持 |

---

## 3. 高潜力待合并 Skills（评论活跃、可能近期落地）

### 新增技能类

| Skill | PR | 说明 | 潜力 |
|---|---|---|---|
| document-typography | [PR #514](https://github.com/anthropics/skills/pull/514) | AI 文档排版质检，需求普适、讨论度高 | ⭐⭐⭐ 高 |
| ODT 文档技能 | [PR #486](https://github.com/anthropics/skills/pull/486) | 补全办公文档格式矩阵，与 pdf/docx 形成体系 | ⭐⭐⭐ 高 |
| testing-patterns | [PR #723](https://github.com/anthropics/skills/pull/723) | 测试模式全覆盖，工程刚需 | ⭐⭐⭐ 高 |
| self-audit | [PR #1367](https://github.com/anthropics/skills/pull/1367) | 交付前机械+推理双阶段审计，与 #1385 提案联动 | ⭐⭐ 中高 |
| skill-quality/security-analyzer | [PR #83](https://github.com/anthropics/skills/pull/83) | 元技能方向，契合安全治理趋势 | ⭐⭐ 中高 |
| color-expert | [PR #1302](https://github.com/anthropics/skills/pull/1302) | 色彩命名体系与色彩空间完整知识库 | ⭐⭐ 中 |
| plan-file-hygiene | [PR #1479](https://github.com/anthropics/skills/pull/1479) | 规划文件生命周期管理，回应 #1417 | ⭐⭐ 中 |

### 基础设施修复类（预计最先合并）

- **skill-creator 评估链路**: [PR #1298](https://github.com/anthropics/skills/pull/1298)（0% recall 根因修复）、[PR #1323](https://github.com/anthropics/skills/pull/1323)（触发检测遗漏真实 skill 名）、[PR #1261](https://github.com/anthropics/skills/pull/1261)（评估命令文件隔离出实时项目）
- **Windows 兼容**: [PR #1050](https://github.com/anthropics/skills/pull/1050)、[PR #1099](https://github.com/anthropics/skills/pull/1099)
- **文档技能 Bug 修复**: [PR #538](https://github.com/anthropics/skills/pull/538)（pdf 大小写引用）、[PR #541](https://github.com/anthropics/skills/pull/541)（docx 修订 ID 冲突）、[PR #539](https://github.com/anthropics/skills/pull/539)（YAML 未加引号警告）

---

## 4. Skills 生态洞察

**一句话总结**: 当前社区最集中的诉求是——先修复 skill-creator 评估链路的系统性故障（`run_eval` 恒报 0% recall、Windows 兼容性、触发检测失效，相关 PR/Issue 合计超过 10 个），并在生态从"能用"走向"可信"的拐点上，同步爆发对官方命名空间安全治理、企业级共享协作与质量门禁类元技能的需求。

---

# Claude Code 社区动态日报 — 2026-08-10

## 今日速览

今日社区最突出的动态是 **ClAudit 安全审查模型误报潮**：同一用户在 8 月 9 日连续提交了近 20 条关于 Opus 4.8/5 安全分类器误报的 Issue，多起正常运维/开发会话被中途拦截，引发对安全审查模型可配置性的强烈诉求。与此同时，**Remote Control 浏览器端响应不渲染**、**被拒绝的工具调用仍被执行** 等影响日常使用体验的 Bug 也获得了较多关注。PR 方面，社区正在推动默认模型引用更新（Opus 5 / Sonnet 5）和技能包规范命名修复。

---

## 社区热点 Issues（10 条精选）

### 1. 安全分类器模型切换引发误报且无法覆盖 ⚠️
[#67246 — Safety-classifier model switch (Fable 5 → Opus 4.8) fires on benign content and can't be overridden with /model](https://github.com/anthropics/claude-code/issues/67246)

- **作者**: AndrewTKent | **评论**: 12 | **👍**: 3
- **要点**: 会话中途 Fable 5 安全分类器将正常工程讨论标记为"网络安全或生物学"内容，并静默切换模型至 Opus 4.8。系统提示本身承认"可能会误报正常内容"，但用户无法通过 `/model` 覆盖——安全模型选择被完全锁定。这是当前社区对安全机制可配置性最集中的不满。

### 2. Remote Control 浏览器端响应不渲染 🔴
[#85240 — Remote Control: responses never render in browser until manual page refresh (iPad Safari/Chrome, macOS Safari)](https://github.com/anthropics/claude-code/issues/85240)

- **作者**: rsicak | **评论**: 5
- **要点**: 每次助手响应都不会在浏览器中实时渲染，必须手动刷新页面后才能看到完整回复。在 iPad Safari/Chrome 和 macOS Safari 上稳定复现，严重影响 Remote Control 的可用性——用户期待的是类似 ChatGPT 的流式响应体验。

### 3. 固定会话仍可被归档/删除（已关闭但值得关注）
[#62104 — Prevent archiving (and deleting) of pinned sessions in CCD](https://github.com/anthropics/claude-code/issues/62104)

- **作者**: wwalter409 | **评论**: 5 | **状态**: CLOSED
- **要点**: 用户请求在 CCD 会话列表中，对已固定的会话禁用归档和删除操作（包括 `A`/`D` 快捷键和 `mcp__ccd_ses...` 相关接口）。该 Issue 已关闭，但反映了桌面端会话管理中对误操作保护的需求。

### 4. 交互式会话中工具索引不刷新
[#66084 — tools/list_changed doesn't refresh the deferred-tool / ToolSearch index in interactive sessions](https://github.com/anthropics/claude-code/issues/66084)

- **作者**: LudaThomas | **评论**: 4 | **👍**: 2
- **要点**: `tools/list_changed` 在交互式会话中不会刷新延迟工具/ToolSearch 索引，2.1.165 版本仍可复现。该 Issue 是 #4118/#60626 的延续（carve-out），说明工具发现机制的问题长期未得到彻底解决。

### 5. 跨平台同步故障导致对话消失 ❗
[#81658 — Cross-platform sync failure (Desktop/Web/Android) causing Cowork conversations and chats to disappear — suspected server-side incident](https://github.com/anthropics/claude-code/issues/81658)

- **作者**: HSBE31 | **评论**: 4 | **👍**: 3
- **要点**: Desktop/Web/Android 三端同步失败，导致 Cowork 对话和聊天记录直接消失。用户怀疑是服务端事故——此前已搜索过现有 Issue 确认非重复报告，说明这可能是一个影响面较广的同步可靠性问题。

### 6. VSCode 中 Fork 会话不挂载新标签页
[#85008 — VSCode: forking copies the conversation but never attaches the new tab to it - blank chat, and the fork is invisible in the session list (2.1.226)](https://github.com/anthropics/claude-code/issues/85008)

- **作者**: daniyalasyed | **评论**: 2
- **要点**: 在完全空闲状态下 Fork 会话后，新标签页是空白聊天，且 Fork 出的会话在会话列表中不可见。用户指出这不同于已关闭的 #31831（竞态条件），2.1.226 版本仍存在，可能是独立的回归缺陷。

### 7. 被拒绝的工具调用仍被执行 🚨
[#83760 — A denied tool call was executed anyway (PowerShell tool ran despite "deny")](https://github.com/anthropics/claude-code/issues/83760)

- **作者**: P6oX6GAz | **评论**: 2
- **要点**: 用户对 PowerShell 工具调用点了"拒绝"，但工具仍然执行了。这是安全/权限控制层面的严重缺陷——无论原因如何，用户授权被绕过都会显著降低信任度。

### 8. 插件版本解析逃逸 marketplace 根目录
[#82712 — Plugin version resolution escapes the marketplace root and adopts ~/.claude HEAD, causing per-commit re-cloning](https://github.com/anthropics/claude-code/issues/82712)

- **作者**: kerfern | **评论**: 1
- **要点**: 当 marketplace 没有 `.git` 目录且插件声明 `"version": null` 时，版本解析会沿文件系统向上查找，最终解析到用户 `~/.claude` 目录的 HEAD，导致每次提交都重新克隆。这是插件的依赖解析逻辑缺陷，可能导致大量不必要的网络和磁盘操作。

### 9. MessageDisplay Hook 返回值被忽略
[#83957 — MessageDisplay hook returns valid displayContent but Claude Code renders the original text (terminal CLI, 2.1.221)](https://github.com/anthropics/claude-code/issues/83957)

- **作者**: frasalvi | **评论**: 1
- **要点**: `MessageDisplay` Hook 被正确调用、返回了合法 `hookSpecificOutput`，但终端 CLI 仍渲染原始文本。Hook 机制是社区扩展生态的基础，此问题影响所有依赖该 Hook 做消息定制渲染的插件。

### 10. ClAudit 误报导致会话中断（系列代表）
[#85372 — ClAudit false-positive while: "NPM audit everything please" (req_011CdmiXZz5z7yHJC8KMyheP)](https://github.com/anthropics/claude-code/issues/85372)

- **作者**: sworrl | **评论**: 1
- **要点**: 同一用户在过去一天提交了约 20 条 ClAudit 误报 Issue（#85372–#85392），覆盖场景包括 NPM audit、AD 运维、DNS 日志排查等日常任务。共同特征是：Opus 4.8/5 将正常运维操作判定为网络安全/恶意行为，并**直接中断会话（session-halted）**。这是当前社区对安全审查模型最集中的批量反馈。

---

## 重要 PR 进展（全部 4 条）

### 1. 更新 security-guidance 默认模型引用 🆕
[#85409 — security-guidance: update default model refs from Opus 4.7/Sonnet 4.6 to Opus 5/Sonnet 5](https://github.com/anthropics/claude-code/pull/85409)

- **作者**: petergoldstein | **创建**: 2026-08-10
- **内容**: `security-guidance` 插件的 README 和 Hook 代码中硬编码了已过时的模型名——将 Opus 4.7（默认审查模型）和 Sonnet 4.6（备用模型）更新为 Opus 5 / Sonnet 5；同时更新 `llm.py` 中的 `SECURITY_REVIEW_MODEL` 默认值。

### 2. 修复插件开发技能中块标量（block scalar）agent 描述解析
[#85323 — fix(plugin-dev): parse block scalar agent descriptions](https://github.com/anthropics/claude-code/pull/85323)

- **作者**: erichanwang | **创建**: 2026-08-09
- **内容**: 修复 #83803 中剩余的 YAML 块标量解析缺陷。`validate-agent.sh` 现在能正确读取多行 `description: |` / `description: >` 的缩进内容，而非将标量标记本身当作完整描述。

### 3. 新增 agent-session-commit 插件（已关闭）
[#17395 — [Plugin] Add `agent-session-commit` plugin to incrementally iterate on `AGENTS.md`](https://github.com/anthropics/claude-code/pull/17395)

- **作者**: Olshansk | **创建**: 2026-01-10 | **状态**: CLOSED
- **内容**: 建议以 `AGENTS.md` 作为权威项目指令文件、`CLAUDE.md` 做最小指针，新增 `agent-session-commit` 插件支持手动（`/session-commit`）或自动（Stop hook 提示）在会话结束时增量更新 `AGENTS.md`。该 PR 已关闭，但体现了社区对项目知识持续沉淀的需求。

### 4. 修复技能包命名不符合规范的问题
[#85243 — fix(skills): use spec-conformant names in the plugin-dev and hookify skills](https://github.com/anthropics/claude-code/pull/85243)

- **作者**: bechor25 | **创建**: 2026-08-09
- **内容**: 8 个内置技能的 `name` 字段使用了大写标题格式且包含空格（如 `Writing Hookify Rules`、`Agent Development`），不符合技能规范。该 PR 将其改为规范要求的格式，涉及 `plugins/hookify` 和 `plugins/plugin-dev` 下的多个 SKILL.md 文件。

---

## 功能需求趋势

基于近 24 小时的所有更新 Issue，社区关注度最高的功能方向为：

1. **安全审查机制可配置性**（🔥 最突出）：ClAudit 误报系列（约 20 条 Issue）和安全分类器不可覆盖（#67246）表明，用户对安全模型的行为有强烈控制需求，包括：关闭误报、自定义审查白名单、绕过/降级机制、审查模型可选性等。

2. **Remote Control / 浏览器体验**：#85240 反映用户期望 Remote Control 具备实时流式渲染能力，而不是依赖手动刷新。这是远程协作场景的核心体验问题。

3. **跨平台同步可靠性**：#81658 提示用户在 Desktop / Web / Android 多端间对会话数据一致性的要求极高，任何同步异常都会被视为严重事故。

4. **会话管理精细化**：#62104（固定会话保护）、#85008（fork 行为正确性）显示桌面端和 VSCode 中会话操作的安全边际和可预期性需要加强。

5. **插件生态稳定性**：#82712（版本解析逃逸）、#83957（Hook 返回值被忽略）触及插件系统的基础信任——插件无法被可靠加载/生效，则生态建设无从谈起。

---

## 开发者关注点

- **安全审查的"宁可错杀"策略正在反噬**：ClAudit 误报导致正常运维会话被中断，且用户无法覆盖。这不是单点问题，而是系统性的安全机制设计失衡——尤其当 Opus 4.8/5 将"修复 ADFS 磁盘占满"这类日常问题识别为网络安全威胁时，用户对审查模型的信任会被逐步消耗。
- **权限控制必须"言出必行"**：#83760 中"拒绝但工具仍执行"是最严重的一类权限缺陷，影响用户对 Claude Code 自动化操作的安全信心。
- **问题复现报告的"专业化"趋势**: 从 #85372–#85392 系列可见，用户已开始按统一模板提交包含 Triaging 信息、Request ID 的精细化报告，这降低了维护者的复现成本，也反映了社区成熟度的提升。
- **远程办公场景成为新的核心使用场景**：Remote Control 的渲染缺陷和跨平台同步问题的受关注程度，说明 Claude Code 已从本地终端工具扩展为多端协作平台，相关的体验短板会直接影响用户留存。

---

*本日报由 AI 技术分析师自动生成，数据来源：[anthropics/claude-code](https://github.com/anthropics/claude-code)*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-08-10

## 今日速览

过去 24 小时内 Codex 仓库无新版本发布，但社区讨论活跃：Windows 平台问题集中爆发（WSL 终端、Computer Use、远程控制等），成为开发者主要痛点；性能类回归（线程切换慢、聊天加载延迟）持续引发关注；此外，高赞功能请求“可自定义状态栏”展现了社区对 TUI 个性化配置的强烈需求。PR 侧则聚焦基础设施改进，包括 gRPC TCP 传输、hook 执行泛化、环境配置读取支持等。

## 社区热点 Issues（Top 10）

### 1. #17827 可自定义状态栏（Customizable status line）
- **标签**: enhancement, TUI, config
- **作者**: pkondaurov | **评论**: 39 | **👍**: 150
- **重要性**: 社区呼声最高的功能请求——期望在 TUI 底部状态栏显示 token 用量、模型名、速率限制、git 分支等实时信息，并支持 shell 脚本配置。此前 Claude Code 已有类似能力，开发者对 Codex 的同类需求十分强烈。
- [查看 Issue](https://github.com/openai/codex/issues/17827)

### 2. #11011 线程切换非常慢
- **标签**: bug, app
- **作者**: ImanYZ | **评论**: 21 | **👍**: 19
- **重要性**: 桌面 App 更新后线程切换严重卡顿，影响日常多线程工作流。评论数高表明受影响用户多，是典型的性能回归类问题，值得官方优先排查。
- [查看 Issue](https://github.com/openai/codex/issues/11011)

### 3. #15299 支持入站 MCP 通知路由到活动 CLI 会话
- **标签**: enhancement, mcp
- **作者**: jasny | **评论**: 15 | **👍**: 14
- **重要性**: 当前 Codex 可调用 MCP 工具，但缺少外部渠道（如 channel 事件）推送到运行中 CLI 会话的官方路径。这关系到 MCP 生态的双向通信能力，对构建实时 Agent 工作流的开发者很有价值。
- [查看 Issue](https://github.com/openai/codex/issues/15299)

### 4. #23527 Codex 移动端不显示 Mac 主机上的 SSH 远程项目
- **标签**: bug, iOS, app, app-server, remote
- **作者**: jameBoy | **评论**: 13 | **👍**: 19
- **重要性**: 移动端远程控制是 Codex 的核心差异化场景之一。Mac 主机能正常使用的 SSH 远程项目在手机端项目选择器中缺失，属于远程工作流的重大功能缺陷。
- [查看 Issue](https://github.com/openai/codex/issues/23527)

### 5. #37104 Windows/WSL 集成终端静默失败，面板无法打开
- **标签**: bug, windows-os, app, session, Papercuts 2026
- **作者**: cxzhong | **评论**: 6
- **重要性**: Windows 桌面版在 WSL 环境下集成终端在 PTY 启动前静默失败，底部/侧边面板均无法打开。该问题被标记为 Papercuts 2026，直接影响 Windows 用户的核心使用体验。
- [查看 Issue](https://github.com/openai/codex/issues/37104)

### 6. #37398 打开未加载聊天时需等待约 5 秒
- **标签**: bug, app, session, performance
- **作者**: galaxychi | **评论**: 6 | **👍**: 6
- **重要性**: 线程读取本身耗时 <200ms，但固定的 owner-discovery 超时导致用户多等约 5 秒。这是不必要的等待延迟，优化空间明确，对日常使用感知明显。
- [查看 Issue](https://github.com/openai/codex/issues/37398)

### 7. #37595 Windows Computer Use: list_windows/list_apps 报 EnumWindows 0x80070003
- **标签**: bug, windows-os, app, computer-use
- **作者**: cuaub24-afk | **评论**: 5
- **重要性**: Windows 上 Computer Use 的窗口枚举功能在缺少 interrupt marker 路径时直接失败，导致整个功能不可用。Computer Use 是 Codex 的重要新能力，Windows 实现仍不完善。
- [查看 Issue](https://github.com/openai/codex/issues/37595)

### 8. #37403 macOS: 远程控制/CLI 线程恢复失败——出现 “already has an active writer”
- **标签**: bug, app, app-server, remote
- **作者**: xkun1 | **评论**: 4 | **👍**: 4
- **重要性**: 8 月 7 日更新后，原有的移动端远程控制 Mac 上 Codex CLI 线程的工作流发生回归。该问题直接影响“白天 Mac 上工作、晚上手机继续”的跨设备使用场景。
- [查看 Issue](https://github.com/openai/codex/issues/37403)

### 9. #34248 Goal 自动续跑可能进入无界循环并产生数千条重复 turn
- **标签**: bug, windows-os, rate-limits, app, automations
- **作者**: Owen-XRD | **评论**: 3
- **重要性**: 当任务等待外部进程时，`task_complete` 后 5–8ms 即触发新的 `task_started`，形成自我维持的循环，产生数千条重复消息。这不仅是性能问题，更可能造成大量 token 消耗。
- [查看 Issue](https://github.com/openai/codex/issues/34248)

### 10. #33885 MultiAgentV2: 允许子代理线程接受修正和引导
- **标签**: enhancement, subagent
- **作者**: ignatremizov | **评论**: 2 | **👍**: 6
- **重要性**: 目前父代拥有的子代理线程在 TUI 中只读，用户无法对子代理的执行方向进行干预。对于需要精细控制多智能体协作的开发者而言，这是一个重要的能力缺口。
- [查看 Issue](https://github.com/openai/codex/issues/33885)

## 重要 PR 进展

### #37747 限制 Cursor 项目路径解析范围
- **状态**: 已关闭
- **内容**: 解析 Cursor 项目名中的工作目录时，不再递归扫描整棵目录树，而是通过常见文件名分隔符探测有限候选路径，并设置停止条件，修复潜在的递归扫描性能风险。
- [查看 PR](https://github.com/openai/codex/pull/37747)

### #37745 为 code-mode host 添加 gRPC TCP 传输
- **状态**: 已关闭
- **内容**: 新增通过 `grpc://IP:PORT` 端点提供 code-mode gRPC 服务的支持；绑定端口 0 时向 stdout 打印实际 HTTP 端口，便于调用者发现服务地址。
- [查看 PR](https://github.com/openai/codex/pull/37745)

### #37723 为会话配置导入失败报告 I/O 子类型
- **状态**: 已关闭
- **内容**: 在 `failed_to_load_session_config` 错误子类型中追加稳定的 `std::io::ErrorKind` 分类（如 `invalid_data`、`not_found`、`permission_denied`），使失败原因更可诊断。
- [查看 PR](https://github.com/openai/codex/pull/37723)

### #37709 保留换行后的空格与后续文本
- **状态**: 已关闭
- **内容**: 修复 TUI composer 中溢出空白独占一空行的问题。新增 composer 专用的、按字素安全（grapheme-safe）的换行逻辑，使可断行的 Unicode 空白保持与后续文本相连。
- [查看 PR](https://github.com/openai/codex/pull/37709)

### #37654 宣告环境配置读取支持
- **状态**: 已关闭
- **内容**: 向 exec-server 环境能力中新增 `environmentConfigRead`，并在本地 executor 上宣告支持；从旧 executor 反序列化响应时默认置为 false，保证向后兼容。
- [查看 PR](https://github.com/openai/codex/pull/37654)

### #37645 改进插件安装失败分析
- **状态**: 已关闭
- **内容**: 为远程 catalog、mutation、bundle 下载等失败场景添加 HTTP 状态子类型，用稳定的低基数数据区分可操作的失败原因，不再依赖易变的错误消息文本。
- [查看 PR](https://github.com/openai/codex/pull/37645)

### #37644 泛化 hook 处理器执行
- **状态**: 已关闭
- **内容**: 将配置的 handler 按 kind 表示，统一通过 hooks 引擎路由执行，同时保持命令 hook 行为不变；并拒绝 MCP 工具输入中无法在 TOML 中表示的值（如 `null`），以保证信任哈希的稳定性。
- [查看 PR](https://github.com/openai/codex/pull/37644)

### #31817 自动更新 models.json
- **状态**: 开启
- **内容**: 由 GitHub Actions 自动发起的模型元数据文件更新，是模型列表持续同步的常规维护 PR。
- [查看 PR](https://github.com/openai/codex/pull/31817)

## 功能需求趋势

从各 Issue 中可提炼出社区当前最关注的功能方向：

| 方向 | 代表 Issue | 社区诉求 |
|---|---|---|
| **TUI 可配置性** | #17827 | 状态栏自定义、显示 token/模型/速率等实时信息 |
| **MCP 双向通信** | #15299 | 支持外部系统通过 MCP 通知向运行中会话推送消息 |
| **多智能体协作控制** | #33885 | 子代理线程可接收修正与引导，而非只读 |
| **模型别名与元数据映射** | #21594 | 企业网关模型名到 Codex 标准模型元数据的一等映射支持 |
| **自动化任务韧性** | #24327 | 离线时错过的定时任务应在启动/唤醒后具备补跑策略 |
| **自定义模型/企业适配** | #21594 | 面向企业环境的 gateway 模型名兼容 |

整体来看，社区对 **TUI 个性化、MCP 生态打通、多智能体可控性、企业级配置能力** 的诉求最为突出，功能类需求的点赞量普遍高于普通的 bug 反馈。

## 开发者关注点

### Windows 平台是当前最大痛点
- **WSL 终端完全不可用**（#37104）：集成终端静默失败，侧栏无法打开
- **Computer Use 多环节失败**（#37595、#37734、#37281）：窗口枚举、状态获取均报错，功能实际不可用
- **远程控制不可用**（#30372）：CLI 报告 daemon 仅支持 Unix
- **非 ASCII 用户名导致配置损坏**（#37740）：韩文 `%USERPROFILE%` 被破坏为 mojibake，生成的 `config.toml` 整个不可解析

### 性能与稳定性问题高频出现
- **线程切换慢**（#11011、#20802）：多版本均出现回归
- **打开聊天卡顿**（#37398）：5 秒 owner-discovery 超时等待
- **SQLite 文件无界膨胀**（#35823）：`auto_vacuum=INCREMENTAL` 被设置但从未触发
- **崩溃与死锁**（#30928 macOS SIGTRAP、#37735 TUI 死锁）
- **自动续跑死循环**（#34248）：导致数千条重复 turn 和计划外 token 消耗

### 远程与跨设备工作流存在回归
- 移动端无法看到 SSH 远程项目（#23527）
- macOS 上“手机远程控制 → 桌面恢复”流程被 “active writer” 错误阻断（#37403）

### 配置与扩展生态的兼容性问题
- 捆绑 Python 缺少 PyYAML 导致 skill validator 失败（#24195）
- 系统 skills 目录被意外删除（#19265）
- CLI 在空闲断网后复用已死的 WebSocket，导致下一次对话中断（#33163）

总体而言，开发者高度认可 Codex 的能力方向，但 **Windows 支持成熟度、会话/远程性能回归、以及自动化任务的可控性** 是当前社区反馈最集中的三个短板。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-08-10

## 今日速览

今日社区焦点集中在 Sub-agent 可靠性与权限控制上：多个 P1 级 Issue 持续发酵，包括 Sub-agent 在达到 MAX_TURNS 后被误报为成功、Generalist agent 无限挂起、Shell 命令执行完毕后卡死等问题。PR 方面，依赖批量更新是主力，但一个允许 Agents 调用 Agents 的功能性 PR 值得关注。

## 版本发布

**v0.56.0-nightly.20260809.gcf22ac7e8** 于今日发布，为常规 nightly 版本，未附带显著功能更新说明。完整变更可查看 [Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260808.gcf22ac7e8...v0.56.0-nightly.20260809.gcf22ac7e8)。

## 社区热点 Issues

### 1. Subagent 到达 MAX_TURNS 被误报为 GOAL 成功（#22323）
**P1 | 12 评论 | 2 👍** — [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

`codebase_investigator` 子代理在达到最大轮次限制后，主会话仍显示 `Termination Reason: "GOAL"`，掩盖了真实的中断原因。这是**今日最热 Issue**，社区认为该问题严重影响对 Agent 执行结果的信任度——一个没有完成分析任务的子代理被标记为成功，可能导致用户基于错误信息做出决策。

### 2. Generalist agent 无限挂起（#21409）
**P1 | 8 评论 | 8 👍 | 社区最高赞** — [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)

用户报告 Gemini CLI 一旦委派任务给 generalist agent 就会无限期挂起，简单如创建文件夹的操作也未能幸免，用户曾等待一小时无果。社区给出的 workaround 是显式指示模型不要使用子代理。该 Issue 自 3 月创建至今仍在更新，说明修复难度较高。

### 3. Shell 命令执行完后卡在 "Waiting input"（#25166）
**P1 | 4 评论 | 3 👍** — [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)

Gemini 执行简单 Shell 命令（不会等待用户输入的命令）后，终端仍显示命令处于活动状态并提示"Awaiting user input"。该问题复现率高，直接影响日常自动化工作流。

### 4. Browser subagent 在 Wayland 下失败（#21983）
**P1 | 4 评论 | 1 👍** — [Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)

Browser subagent 在 Wayland 显示服务器环境下运行失败，尽管以 `Termination Reason: GOAL` 结束，但实际未完成预期工作。Linux 用户的 GUI 自动化场景受阻。

### 5. 子代理从 v0.33.0 起未经许可运行（#22093）
**P2 | 3 评论** — [Issue #22093](https://github.com/google-gemini/gemini-cli/issues/22093)

用户升级至 v0.33.0 后发现 subagent 在 agents 模式被禁用的情况下仍被调用（如 generalist）。此前子代理从未在配置禁用时激活过，用户仅期望 MCP 功能。权限边界被突破，属于**行为回归**，引发对 Agent 自主性边界的担忧。

### 6. Auto Memory 对低信号会话无限重试（#26522）
**P2 | 5 评论** — [Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522)

Auto Memory 后台提取器只有在成功读取会话转录后才将会话标记为"已处理"。若 agent 因判定为低信号而跳过某些会话，这些会话会被反复重新捞起，造成不必要的重复处理和资源浪费。

### 7. Auto Memory 缺少确定性脱敏、日志过多（#26525）
**P2 | 4 评论 | 安全相关** — [Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525)

Auto Memory 会将本地转录内容发送给模型处理，但脱敏指令在内容**已经进入模型上下文之后**才生效，且服务可能记录现有技能内容。社区认为这是隐私隐患，要求加入确定性脱敏机制并降低日志噪音。

### 8. 超过 128 个工具时出现 400 错误（#24246）
**P2 | 3 评论** — [Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246)

工具数量超过阈值后 Gemini CLI 报 400 错误。用户期望 agent 能按需裁剪作用域内的工具，而非直接失败。随着 MCP 生态扩张，工具数量膨胀是一个必然趋势，该问题的优先级可能会继续上升。

### 9. symlink 形式的自定义 Agent 不被识别（#20079）
**P2 | 4 评论** — [Issue #20079](https://github.com/google-gemini/gemini-cli/issues/20079)

`~/.gemini/agents/` 下的 symlink 文件无法被识别为合法 agent，用户希望通过 symlink 管理 agent 配置（如 dotfiles 同步）。功能缺失虽小，但影响配置管理体验。

### 10. Browser Agent 忽略 settings.json 覆盖（#22267）
**P2 | 3 评论** — [Issue #22267](https://github.com/google-gemini/gemini-cli/issues/22267)

Browser Agent 完全忽略全局/项目级 `settings.json` 中的配置覆盖（如 `maxTurns`）。`AgentRegistry` 在初始化时已正确读取并合并设置，但 BrowserManager 实际运行时未使用这些值。配置不生效类问题在社区中重复出现。

## 重要 PR 进展

### 1. fix(acp): 恢复会话前不再启动新 chat（#28744）
**P1 | size/m | OPEN** — [PR #28744](https://github.com/google-gemini/gemini-cli/pull/28744)

修复 ACP 模式下 `loadSession` 调用 `geminiClient.initialize()` 导致的新会话污染 session 文件问题（Closes #28693）。`initialize()` 会启动一个无恢复数据的新 chat，紧接着的 `resumeChat()` 被污染。

### 2. Allow agents to call agents（#28738）
**P2 | size/l | help wanted | OPEN** — [PR #28738](https://github.com/google-gemini/gemini-cli/pull/28738)

**今日最值得关注的功能性 PR**。通过 `tools:` frontmatter 允许 subagent 委托其他 subagent 或递归调用自身（Fixes #22092）。这补齐了 Gemini CLI 的 agent 层级能力，使子代理不再是"叶子节点"，为复杂任务拆分提供更灵活的执行图。当前标注 `help wanted`，可能需要社区协助审查。

### 3. fix(core): 保留 resolved model config 的 systemInstruction 和 tools（#28743）
**area/agent | size/m | OPEN** — [PR #28743](https://github.com/google-gemini/gemini-cli/pull/28743)

修复 `GeminiChat.sendMessageStream()` 中，模型特定配置里的 `systemInstruction` 和 `tools` 被 chat 级配置覆盖的问题。影响多模型配置场景下指令与工具集的正确传递。

### 4. fix(caretaker-agent): 修复两个 triage-worker skill 的名称规范（#28742）
**size/s | OPEN** — [PR #28742](https://github.com/google-gemini/gemini-cli/pull/28742)

`code_explorer` 和 `spec_generator` 两个 skill 名称含下划线，违反 Agent Skills 规范（name 字段的格式要求）。修复 caretaker-agent 自身的配置合规性。

### 5. fix(core): 修复策略引擎 bug，影响工具审批（#26540）
**P1/P2 | size/s | OPEN** — [PR #26540](https://github.com/google-gemini/gemini-cli/pull/26540)

修复策略引擎中多个关键问题：正则空字节 bug 导致 `buildParamArgsPattern` 失败、工具审批无法正确持久化、在 `YOLO`/`AUTO_EDIT` 等宽松模式下出现不必要审批提示。直接影响安全与效率的平衡。

### 6. chore(deps): npm-dependencies 组一次性 74 项更新（#28746）
**size/xl | CLOSED** — [PR #28746](https://github.com/google-gemini/gemini-cli/pull/28746)

大规模依赖批量更新，涵盖 `simple-git` 3.28→3.36、`@modelcontextprotocol/sdk` 1.23→1.30 等 74 个包。依赖已关闭合入，建议关注 MCP SDK 升级是否带来兼容性变化。

### 7. chore(deps): puppeteer-core 24.0→25.4 主版本升级（#28752）
**size/l | CLOSED** — [PR #28752](https://github.com/google-gemini/gemini-cli/pull/28752)

Puppeteer 跨主版本升级，涉及 Browser Agent 底层浏览器自动化引擎的变化。建议关注 Browser Agent 是否有回归。

### 8. chore(deps): @google/genai 1.30→2.15 跨越式升级（#28749)
**size/s | CLOSED** — [PR #28749](https://github.com/google-gemini/gemini-cli/pull/28749)

Gemini 官方 JS SDK 从 1.x 升至 2.15，涉及 API surface 的兼容变化，值得留意。

### 9. chore(deps): dotenv-expand 12.0.3→1000.0.0 极端版本跳跃（#28750）
**size/s | CLOSED** — [PR #28750](https://github.com/google-gemini/gemini-cli/pull/28750)

dotenv-expand 从 12.x 直接跳至 1000.x，较罕见的主版本策略。建议验证环境变量展开行为是否发生变化。

### 10. chore(deps): Actions 依赖组 3 项更新（#28450）
**github_actions | size/s | OPEN** — [PR #28450](https://github.com/google-gemini/gemini-cli/pull/28450)

CI 依赖更新，含 `lycheeverse/lychee-action`、`preactjs/compressed-size-action` 以及 `google-github-actions/run-gemini-cli`。后者表明 Google 官方 CI 已在使用 Gemini CLI 自身，dogfooding 信号积极。

## 功能需求趋势

从今日 Issue 与 PR 中可以提炼出以下方向：

- **Sub-agent 能力深化**：社区对 Sub-agent 的期待已不满足于"单层执行"，`Allow agents to call agents` 的 PR 指向更灵活的 agent 层级与委托能力。同时，围绕 sub-agent 的可靠性（误报成功、挂起、权限绕过）是当前最大的痛点。
- **Browser Agent 韧性建设**：多个 Issue 指向 Browser Agent 的配置被忽略、Wayland 兼容性差、锁定恢复缺失。浏览器自动化是复杂场景的刚需，社区希望更强的容错机制。
- **Auto Memory 的质量与隐私**：内存系统从"能用"进入"用好"阶段，社区关注点转向低信号会话的处理策略、无效 patch 的隔离，以及脱敏机制的设计。
- **AST 感知的代码理解**：EPIC #22745 与 #22746 持续跟踪 AST 感知的文件读取/搜索/代码库映射，目标是减少 token 噪声、提升大仓库下的精确导航。
- **Agent 自我认知与安全**：社区希望 agent"知道自己的边界"——准确理解 CLI flags、热键（#21432），并在 git 操作、数据库维护等场景中主动选择更安全的命令（#22672）。

## 开发者关注点

- **误报与挂起是信任杀手**：MAX_TURNS 被标记为 GOAL 成功、Generalist agent 无限挂起、Shell 命令卡死在 "Waiting input"——这几类问题意味着 agent 的反馈回路不可靠，会直接动摇用户对自动化流程的信任。
- **配置与权限的边界**：settings.json 覆盖不生效、子代理绕过禁用配置运行、symlink 不被支持——开发者期望配置是"确定性"的，开即开、关即关。
- **工具数量膨胀的应对**：随着 MCP 生态发展，超过 128 个工具即报 400 错误已成为必然遇到的瓶颈，社区期待更聪明的工具裁剪策略。
- **隐私与清理**：Auto Memory 的脱敏滞后、模型乱丢临时脚本、外部编辑器退出后终端损坏——开发者关心 agent 在"看不见的地方"是否有破坏性副作用。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-08-10）

## 今日速览

今日无新版本发布，过去 24 小时也无 Pull Request 更新。社区讨论集中在 MCP 服务器稳定性、企业账号模型可用性以及远程会话可靠性等问题上。最热门 Issue 为 #1857（排队消息无法取消，👍 26），同时新出现了一批 triage 级 Issue，暴露了 MCP 初始化超时、并行工具调用乱序、会话启动消息丢失等潜在缺陷。

## 社区热点 Issues

过去 24 小时更新了 25 条 Issue，以下 10 条最值得关注：

1. **排队消息无法在执行前取消或移除**  
   [issue #1857](https://github.com/github/copilot-cli/issues/1857)  
   用户通过 `Ctrl+Q` / `Ctrl+Enter` 入队的消息在 agent 忙碌或 `/compact` 期间无法取消，只能按顺序自动执行。9 条评论、26 👍，是该时段社区反应最热烈的问题。

2. **`/remote` 在组织仓库上报错 “could not resolve repository”**  
   [issue #2751](https://github.com/github/copilot-cli/issues/2751)  
   在 v1.0.28 中，针对 GitHub Organization 仓库使用 `/remote` 会直接失败。8 条评论、13 👍，影响企业用户的远程会话功能。

3. **`.github/hooks/` 中的 `sessionStart` 钩子不触发**  
   [issue #1730](https://github.com/github/copilot-cli/issues/1730)  
   在 v0.0.420、Windows 11 + PowerShell 7 环境下，`sessionStart` 钩子配置未生效。7 条评论，影响自定义工作流用户。

4. **Anthropic 请求缺少 `cache_control` 断点，导致上下文重复计费**  
   [issue #4256](https://github.com/github/copilot-cli/issues/4256)（已关闭）  
   请求未设置 `cache_control`，系统提示、工具定义、长文件上下文每轮都被重新处理，成本较高。虽已关闭，但对模型成本优化有重要参考价值。

5. **MCP 初始化因 `server/discover` 返回 `-32602` 而失败**  
   [issue #4370](https://github.com/github/copilot-cli/issues/4370)  
   Copilot CLI 1.0.79-1 在连接 FastMCP 构建的 MCP server 时，会先发送 FastMCP 未实现的 `server/discover` 请求，导致初始化被标记为失败。反映出 CLI 对可选 MCP 方法的兼容性问题。

6. **组织已启用的模型（Claude Sonnet 5/Opus 5、Kimi K3）在 CLI 目录中缺失**  
   [issue #4390](https://github.com/github/copilot-cli/issues/4390)  
   企业组织在后台启用的模型无法在 Copilot CLI 中看到，选择时提示“disabled by your organization”。直接影响企业模型使用。

7. **Managed settings 过渡期使用空 allowlist，误杀用户 MCP 服务器**  
   [issue #4419](https://github.com/github/copilot-cli/issues/4419)  
   CLI 解析托管设置期间会临时安装 `managedAllowedMcpServerLists: [[]]`（空白名单），此时注册的用户 MCP server 会被拒绝且永久丢弃。0 评论但影响严重，属于配置安全类缺陷。

8. **MCP `initialize` 握手硬编码 60 秒超时，且无重试机制**  
   [issue #4421](https://github.com/github/copilot-cli/issues/4421)  
   通过 `npx` 启动的 stdio MCP server 在慢启动时约 29% 会话初始化失败，且失败后该 server 在整个会话内不会再被拉起。开发者呼吁支持配置超时和重试。

9. **并行 explore subagent 触发 per-model 429 限流，无退避与自动切换**  
   [issue #4416](https://github.com/github/copilot-cli/issues/4416)  
   并行启动多个 explore 子代理时，所有请求集中到默认的 `claude-haiku-4.5` 模型，很快触发限流；尽管模型有 `eligibleForAutoSwitch` 标记，CLI 不会自动切换。影响 Agent 扩展场景。

10. **新会话 kickoff 提示被静默丢弃，worktree 建好了但 agent 从未收到消息**  
    [issue #4423](https://github.com/github/copilot-cli/issues/4423)  
    从 App 创建带初始 prompt 的新会话时，worktree、分支和 CLI 会话均成功创建，但 kickoff prompt 未被传给 agent，会话永久空闲。属于严重的会话可靠性问题。

## 重要 PR 进展

过去 24 小时无 Pull Request 更新，因此暂无 PR 需要追踪。建议继续关注 Issue 中已出现的 MCP 与企业账号类问题，后续 PR 可能集中于此。

## 功能需求趋势

从今日 Issue 中可提炼出以下社区关注方向：

- **会话控制与远程能力增强**  
  用户希望支持取消排队中的消息（[#1857](https://github.com/github/copilot-cli/issues/1857)）；`/remote` 可支持 GitLab/Bitbucket 等非 GitHub 仓库（[#2922](https://github.com/github/copilot-cli/issues/2922)）；当 `cli_remote_control_enabled` 为 false 时应有明确提示（[#4409](https://github.com/github/copilot-cli/issues/4409)）。

- **MCP 生态成熟度与可配置性**  
  多个 Issue 指向 MCP 握手超时不可配置（[#4421](https://github.com/github/copilot-cli/issues/4421)）、OAuth 3LO 认证流支持（[#4371](https://github.com/github/copilot-cli/issues/4371)）、enterprise MCP host 跨域标识问题（[#4408](https://github.com/github/copilot-cli/issues/4408)），以及 managed settings 不应静默丢弃用户 MCP 配置（[#4419](https://github.com/github/copilot-cli/issues/4419)）。

- **模型灵活性与成本优化**  
  社区希望 Anthropic 请求利用 `cache_control` 降低重复上下文成本（[#4256](https://github.com/github/copilot-cli/issues/4256)）；Auto-mode 可配置最小/最大模型强度与偏好偏向（[#4411](https://github.com/github/copilot-cli/issues/4411)、[#4412](https://github.com/github/copilot-cli/issues/4412)）；企业模型目录必须与后台设置一致（[#4390](https://github.com/github/copilot-cli/issues/4390)）。

- **UI / 本地化 / 易用性**  
  添加中文（zh-CN）界面（[#4407](https://github.com/github/copilot-cli/issues/4407)）；内置 GUI 提示输入器缓解终端输入问题（[#4417](https://github.com/github/copilot-cli/issues/4417)）；希望 CLI HUD 可配置化（[#4418](https://github.com/github/copilot-cli/issues/4418)）。

- **性能与稳定性**  
  包括高 CPU 占用（[#4415](https://github.com/github/copilot-cli/issues/4415)）、并行工具调用响应顺序不确定（[#4420](https://github.com/github/copilot-cli/issues/4420)）、explore 子代理限流缺乏退避（[#4416](https://github.com/github/copilot-cli/issues/4416)）等。

## 开发者关注点

- **MCP 兼容性成为高频痛点**：`server/discover` 不属于标准 MCP 方法却导致初始化失败（[#4370](https://github.com/github/copilot-cli/issues/4370)）；初始化超时硬编码且失败后永不恢复（[#4421](https://github.com/github/copilot-cli/issues/4421)）；OAuth 3LO 流程无法完成 URL elicitation（[#4371](https://github.com/github/copilot-cli/issues/4371)）。

- **企业账号体验不稳定**：组织仓库 `/remote` 失败（[#2751](https://github.com/github/copilot-cli/issues/2751)）；企业已启用模型缺失（[#4390](https://github.com/github/copilot-cli/issues/4390)）；enterprise MCP OAuth 认证失败（[#4408](https://github.com/github/copilot-cli/issues/4408)）；远程控制开关无任何 UI 指示（[#4409](https://github.com/github/copilot-cli/issues/4409)）。

- **会话可靠性问题令人担忧**：kickoff prompt 被静默丢弃（[#4423](https://github.com/github/copilot-cli/issues/4423)）；warm `session.resume` 会跨 wire format 重放错误的推理元数据（[#4413](https://github.com/github/copilot-cli/issues/4413)）；并行工具调用请求/响应关联丢失（[#4420](https://github.com/github/copilot-cli/issues/4420)）。

- **限流与性能问题影响 Agent 大规模使用**：explore 子代理集中触发单模型 429，缺少自动切换与退避（[#4416](https://github.com/github/copilot-cli/issues/4416)）；CLI 空闲等待时仍占用 100% CPU（[#4415](https://github.com/github/copilot-cli/issues/4415)）。

- **配置可见性与本地化需求上升**：用户希望更直观的 Auto-mode 配置、可自定义 HUD 和 GUI 提示控件，同时也需要中文界面支持（[#4407](https://github.com/github/copilot-cli/issues/4407)、[#4412](https://github.com/github/copilot-cli/issues/4412)、[#4417](https://github.com/github/copilot-cli/issues/4417)、[#4418](https://github.com/github/copilot-cli/issues/4418)）。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 — 2026-08-10

> **说明**：本日报基于 GitHub `MoonshotAI/kimi-cli` 仓库过去 24 小时（2026-08-09 至 2026-08-10）的公开数据。由于当日活跃条目较少，社区热点与 PR 部分仅列出全部有效条目。

## 今日速览

过去一天，Kimi Code CLI 社区动态集中在三个方向：长期悬而未决的 **Memory System（跨会话持久记忆）** 功能需求再次被顶起（Issue #1283，27 条评论）；ACP/print 流式响应出现 **「静默挂死 + 数据不落盘」** 的严重稳定性问题（Issue #2598）；同时一个修复 **Google GenAI 与 MCP 工具参数兼容性** 的 PR（#739）时隔数月再度更新，有望被合并。整体来看，稳定性与记忆能力是社区最迫切的需求。

## 社区热点 Issues

### 1. #1283 [enhancement] Memory System - Persistent context across sessions
- **作者**: CatKang | **创建**: 2026-02-27 | **更新**: 2026-08-09 | **评论**: 27 | 👍: 0
- **链接**: https://github.com/MoonshotAI/kimi-cli/issues/1283
- **详情**: 请求实现一套完整的跨会话记忆系统，包括 AI 自动管理的笔记（自动记忆）和用户手动指定的指令（手动记忆），以保持项目上下文、用户偏好和历史模式。这是长期存在的功能请求，创建至今近半年，评论数较多，说明社区对持久化能力有持续且强烈的需求。此 Issue 虽无 👍 计数，但活跃讨论本身就代表了其重要性。

### 2. #2598 [BUG] ACP/print 流式响应静默挂死：无空闲超时、被顶替轮 partial 不落 wire
- **作者**: ai-agent-workbench | **创建**: 2026-08-09 | **更新**: 2026-08-09 | **评论**: 0 | 👍: 0
- **链接**: https://github.com/MoonshotAI/kimi-cli/issues/2598
- **详情**: 报告了 `kimi acp`（ACP 模式，版本 0.34.0）与 api.kimi.com 在流式对话中的严重缺陷：内容 delta 已全部到达，但终端帧 `[DONE]`/finish 永远不来，CLI 无空闲超时导致无限等待；此时发送下一条消息会顶替挂死轮，且已流式输出的答复从未写入 `wire.jsonl`（无 `content.part`、无 `usage.record`）。这是一个刚提交的新 Issue，虽然暂无评论，但涉及数据完整性和进程挂死，属于高风险稳定性问题，需要开发团队立即关注。

## 重要 PR 进展

### 1. #739 [fix] strip JSON Schema metadata from Google GenAI tool parameters
- **作者**: xiaoju111a | **创建**: 2026-01-28 | **更新**: 2026-08-09 | 评论: 无数据 | 👍: 0
- **链接**: https://github.com/MoonshotAI/kimi-cli/pull/739
- **详情**: 修复 Google GenAI provider 与 MCP 工具之间的兼容性问题。当 MCP 工具（如 Exa MCP）的参数中包含标准 JSON Schema 元数据字段时，Google GenAI 会报参数校验错误。该 PR 通过在传输前剥离这些元数据来解决此问题，追溯解决 Issue #734。此 PR 自 1 月提交之久，今日再度更新，可能意味着维护者开始重新评估或接近合并。

## 功能需求趋势

从当前可见的 Issue/PR 及历史活跃条目中，能提炼出以下社区关注方向：

- **跨会话记忆（Memory System）**：Issue #1283 持续被关注，表明用户需要 CLI 主动记住项目模式与偏好，而非每次会话从零开始。
- **流式稳定性与数据落盘**：Issue #2598 暴露了 ACP/print 模式下的挂死与日志丢失，用户对「流式输出完整、可靠记录」有极高要求。
- **多模型提供商兼容性**：PR #739 涉及 Google GenAI 与 MCP 工具的适配，说明社区在使用过程中不断遇到不同服务商/工具链之间的摩擦。

## 开发者关注点

- **稳定性压倒一切**：流式响应挂死、无超时、数据不落盘这类问题直接破坏自动化工作流，开发者在 ACP 场景下对 CLI 的可靠性要求不亚于对功能丰富度的要求。
- **记忆缺失阻碍生产力**：长期存在的 Memory System 请求反映了用户希望在大型项目中保持上下文一致性的痛点，手动重述上下文非常低效。
- **第三方工具链路兼容性**：MCP 工具生态日益丰富，但各 provider 对参数格式的差异导致集成成本上升，开发者希望 CLI 能透明化处理这些差异。

---
*本日报由 AI 生成，数据基于 GitHub 公开信息，发布时间为 2026-08-10。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-08-10

## 今日速览

今日无新版本发布。社区讨论热度最高的是**剪贴板复制失效**（#4283，122条评论）与**模型回退/故障转移**功能需求（#7602，107个 👍）。与此同时，OpenCode Go 上 DeepSeek V4 Flash 的一系列故障持续发酵，多条相关 Issue 被用户验证“修复无效”，引发了对 Go 网关稳定性的广泛讨论。

---

## 社区热点 Issues

### 1. #4283 Copy To Clipboard is not working ⭐ 最热
剪贴板复制功能失效，用户从响应中选中文本后无法复制，直接影响日常操作。该 Issue 以 **122 条评论、110 个 👍** 成为社区当前最活跃的问题。

https://github.com/anomalyco/opencode/issues/4283

### 2. #7602 [FEATURE] Native Model Fallback / Failover Support ⭐ 最高赞功能请求
当前点赞数最高（**107 个 👍**）的功能请求。用户希望在模型 A 报错或限流时自动重试模型 B，长时运行 agent 任务目前无法定义跨模型回退策略。

https://github.com/anomalyco/opencode/issues/7602

### 3. #785 Is there a way to disable streaming mode?
由于部分代理（如 Credal OpenAI Proxy）不支持流式响应，用户希望增加关闭流式模式的选项。29 条评论、38 个 👍，反映了第三方代理兼容性的真实需求。

https://github.com/anomalyco/opencode/issues/785

### 4. #12472 Native Claude Code hooks compatibility (PreToolUse, PostToolUse, Stop)
社区希望原生支持 Claude Code 的 hooks 系统（PreToolUse/PostToolUse/Stop），以复用已有工作流。获得 **38 个 👍**，表明有不少用户正从 Claude Code 迁移。

https://github.com/anomalyco/opencode/issues/12472

### 5. #24649 OpenCode Go: clarify which models are self-hosted vs. proxied
用户要求文档明确 OpenCode Go 订阅中哪些模型由官方自托管、哪些经第三方代理转发。17 条评论、32 个 👍，涉及服务透明度与信任。

https://github.com/anomalyco/opencode/issues/24649

### 6. #13715 Permission asks from nested subagent sessions silently hang
当子代理再次派生子代理并触发权限请求时，TUI 无法渲染权限询问，导致会话**永久挂起**。11 条评论、24 个 👍，是自动化场景下的严重阻塞问题。

https://github.com/anomalyco/opencode/issues/13715

### 7. #39838 DeepSeek V4 Flash has suddenly stopped working
OpenCode Go 上 DeepSeek V4 Flash 突发不可用，9 条评论、11 个 👍。该问题与 #41300、#41306、#41314、#41322 等形成完整故障链（详见 #41306）。

https://github.com/anomalyco/opencode/issues/39838

### 8. #30221 [BUG] "terminated" error
OpenCode Go 订阅下所有激活会话均报 `UnknownError: terminated`，与用户所用模型无关。直连 Deepseek / Z.AI API 不受影响，问题指向 Go 网关。9 条评论。

https://github.com/anomalyco/opencode/issues/30221

### 9. #34743 opencode ACP from Xcode 27 beta 2 uses default model big-pickle
Xcode 27 beta 2 通过 ACP 调用 opencode 时，始终使用默认模型 big-pickle，完全忽略 `opencode.json` 或 TUI 中选定的模型（LMStudio/Ollama 均复现）。15 条评论，IDE 集成配置失效的典型案例。

https://github.com/anomalyco/opencode/issues/34743

### 10. #41306 [Bug] deepseek-v4-flash still broken on Console Go after #41211
用户验证 #41211 关闭后，`deepseek-v4-flash` 在 Console Go 端点**仍返回 HTTP 400**，根因（模型名被注入前导空格）未真正修复。4 条评论但意义重大——社区对修复流程的信任开始动摇。

https://github.com/anomalyco/opencode/issues/41306

---

## 重要 PR 进展

### 1. #41460 [contributor] chore: merge dev into v2
将 dev 分支的适用变更同步至 V2 分支，保留 App/Desktop/Core/TUI/SDK 的 V2 专属架构与本地化、消息排序等行为。

https://github.com/anomalyco/opencode/pull/41460

### 2. #40427 [beta] some experimental perf improvements
实验性渲染性能优化，基于固定 24 小时数据窗口测量：**初始渲染器入口 7.45 MB → 1.82 MB（-75.5%）**，渲染性能大幅改善。

https://github.com/anomalyco/opencode/pull/40427

### 3. #39358 [contributor] feat(session): add durable session archival
为 V2 添加持久化会话归档：记录 `session.archived` 事实，将时间戳写入 `Session.Info.time.archived`，支持幂等重复归档，与删除操作解耦。

https://github.com/anomalyco/opencode/pull/39358

### 4. #41452 fix(core): align Copilot response continuation
对齐无状态 Copilot 响应与官方 VS Code Copilot 客户端的续写逻辑；持久化最终推理项 ID 与加密状态，并修复推理边界的处理。

https://github.com/anomalyco/opencode/pull/41452

### 5. #40997 refactor(core): replace integration prompts with forms
用共享的 `Form.Fields` 定义替换各集成专属的 prompt schema，提交 `Form.Answer` 作为 `answers` 传输；Core 层统一校验 OAuth/密钥，迁移 Copilot、Azure、Cloudflare 集成。

https://github.com/anomalyco/opencode/pull/40997

### 6. #41450 fix(core): derive fallback message for empty AI SDK provider errors
当 AI SDK 错误（如 `AI_APICallError`）`message` 为空时，从 `statusCode`、`data.error.code`、`responseBody`、限流头等结构化字段推导错误详情，改善 TUI 错误展示。

https://github.com/anomalyco/opencode/pull/41450

### 7. #41455 fix(tui): include attachment path in model context
在模型上下文中保留本地附件 `source.path`，以文本形式置于二进制图片之前。修复依赖路径的 MCP 工具（如图片阅读器）无法取得剪贴板图片路径的问题（关联 #41454）。

https://github.com/anomalyco/opencode/pull/41455

### 8. #36046 fix(tui): show permission prompts from nested subagent chains
**直接修复热门 Issue #13715**：让嵌套子代理（子代理再派生子代理）的权限请求能够在 TUI 中正确渲染，终结会话无声挂起的问题。

https://github.com/anomalyco/opencode/pull/36046

### 9. #36068 fix: accept Ollama reasoning field in OpenAI Chat deltas
Ollama 的 `/v1/chat/completions` 使用 `reasoning` 字段而非 DeepSeek/LM Studio 的 `reasoning_content` 约定。此前 Effect Schema 剥离未知字段导致推理内容被静默丢弃，现已兼容两者。

https://github.com/anomalyco/opencode/pull/36068

### 10. #36023 fix(runtime): upgrade Bun to canary to fix NAPI crash on exit
将 Bun 升级至 canary 版本，修复 Windows、macOS、Linux x64 **全平台**的退出时 NAPI 崩溃（关联 #28046、#31563、#36027）。

https://github.com/anomalyco/opencode/pull/36023

---

## 功能需求趋势

综合过去 24 小时更新的 Issues，社区最关注的功能方向如下：

1. **模型服务可靠性与故障转移** · #7602（跨模型回退）、#30221（网关 "terminated"）、#39838（V4 Flash 停服）→ 多模型容灾与网关稳定性成为首要诉求。

2. **既有生态兼容性** · #12472（Claude Code hooks）、#785（禁用流式）、#24649（Go 模型透明度）→ 用户希望复用 Claude 工作流，并兼容各类第三方代理。

3. **IDE 与桌面端集成** · #34743（Xcode ACP 配置失效）、#14657（桌面多窗口/标签页）、#39588（VS Code 扩展复制粘贴失效）→ 桌面端与 IDE 体验正在成为新的关注焦点。

4. **会话生命周期管理** · #41453（持久会话守护进程 + 零工具调用记忆）、#39358（会话归档）→ 更强的会话持久化、可恢复性与归档能力。

5. **输入交互细粒度优化** · #31791（question 工具图片拖放/粘贴）、#16226（仅点击按钮发送）、#38392（新增 `/clear`）、#35093（默认代码隐藏状态）→ 用户对交互细节的要求越来越高。

---

## 开发者关注点

1. **复制/粘贴在多个入口故障**：#4283（TUI 选择文本无法复制）+ #39588（VS Code 扩展完全无法复制粘贴）→ 剪贴板功能在跨平台、跨终端场景下存在系统性问题。

2. **OpenCode Go 服务质量与信任危机**：#30221、"terminated"错误、#39838 模型突然不可用、#41306 修复无效、#41430 支付后订阅未激活等相互印证，社区开始质疑 Go 网关的稳定性与修复流程的可靠性。

3. **模型配置参数被静默丢弃**：#27361 + #41294 均报告 `reasoningEffort` 或 `options` 在自定义 provider（@ai-sdk/openai-compatible）下不会随请求发送，headless 场景下的模型能力调优受阻。

4. **嵌套子代理权限请求导致会话挂起**：#13715 是自动化任务的关键阻塞——权限请求在 TUI 中不可见，会话只能强制结束。关联 PR #36046 已修复但尚未合并。

5. **跨平台启动与运行不稳定**：#41284（macOS TUI 空白屏冻结）、#41436（Windows 非管理员模式无限挂起，需提权运行）→ 桌面客户端在多平台兼容性上仍需持续加固。

---

> 数据来源：[github.com/anomalyco/opencode](https://github.com/anomalyco/opencode) · 统计区间：2026-08-09 至 2026-08-10

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-08-10

## 今日速览

过去 24 小时 Pi 社区保持高频迭代：一方面集中提交并快速关闭了一批 78xx 系列 bug 报告（渲染崩溃、EPIPE、并发竞态等），另一方面 TUI、llama.cpp 稳定性和 Copilot 登录限流成为最受关注的话题。值得留意的是，远程会话 wire protocol（PR #7344）和扩展命令路由修复（PR #7858、#7857）等结构性改进也在持续推进。

---

## 社区热点 Issues

### 1. Default model cannot be a llama.cpp model（👍 14 / 💬 10）
**#6922** — 当 `defaultProvider` 设为 `"llama.cpp"` 时，启动后 Pi 提示 “No models available” 并退出/显示警告横幅。这是社区呼声最高的问题之一，虽已关闭但说明本地模型用户对默认模型加载体验的强烈诉求。  
🔗 https://github.com/earendil-works/pi/issues/6922

### 2. High CPU usage on Mac OS with long session（👍 6 / 💬 6）
**#7730** — 长会话下 CPU 占用在 50%–110% 之间波动，内存 600–800MB，疑似与上下文大小相关，尚待修复。性能问题直接影响日常使用的可持续性。  
🔗 https://github.com/earendil-works/pi/issues/7730

### 3. ai21 api broken（💬 2）
**#7869** — AI21 旧 API 被官方退休（错误 410），Pi 需要尽快切换到新的 AI21 Gateway。外部服务变更对工具可用性的冲击值得关注。  
🔗 https://github.com/earendil-works/pi/issues/7869

### 4. GitHub Copilot login fails with 429（💬 1）
**#7850** — 大型 Copilot 组织（20+ 模型）在登录时因并发策略请求触发 GitHub 限流，直接导致登录失败。已有两个 PR 从不同角度修复，详见下文。  
🔗 https://github.com/earendil-works/pi/issues/7850

### 5. Renderer hard-crashes when any rendered line exceeds terminal width（💬 1）
**#7868** — TUI 渲染器遇到超过终端宽度的行会直接中止整个 agent 会话而不是截断，已在真实会话中造成中断。这是 TUI 稳定性上的严重缺陷。  
🔗 https://github.com/earendil-works/pi/issues/7868

### 6. Allow disabling select to copy in fullscreen TUI mode（💬 4）
**#7720** — 新 TUI 模式下选中文本默认复制到剪贴板，常被频繁高亮的用户误触。功能请求已获 PR #7866 响应，社区参与度良好。  
🔗 https://github.com/earendil-works/pi/issues/7720

### 7. TUI after /reload does not follow custom tool's renderCall/renderResult（💬 3）
**#7740** — `/reload` 之后，注册在 `session_start` 事件上的工具（如 MCP 扩展）渲染失效，影响自定义工具的可视化输出。  
🔗 https://github.com/earendil-works/pi/issues/7740

### 8. Auto-compaction stops an active task instead of resuming it（💬 1）
**#7848** — 长任务触发自动压缩后，Pi 有时会停止而未继续未完成的工作，尤其是配置了较低上下文模型时。这是工作流连续性的关键问题。  
🔗 https://github.com/earendil-works/pi/issues/7848

### 9. Extension commands cannot be triggered via sendUserMessage（💬 1）
**#7859** — 文档宣称的命令触发模式失效：`pi.sendUserMessage()` 因 `expandPromptTemplates: false` 绕过了扩展命令处理。两个关联 PR（#7858、#7857）已在修复。  
🔗 https://github.com/earendil-works/pi/issues/7859

### 10. ExtensionContext.exec timeout never force-kills a SIGTERM-ignoring child（💬 2）
**#7864** — 超时后 `SIGTERM` 只会标记“信号已发送”而非“进程已退出”，导致忽略 SIGTERM 的子进程永不退出，`pi.exec()` 的 Promise 悬空。进程管理需更严格的 `SIGKILL` 升级策略。  
🔗 https://github.com/earendil-works/pi/issues/7864

---

## 重要 PR 进展

### 1. feat(coding-agent): expose context files at session start — #7872
在 `session_start` 事件中暴露已加载的 AGENTS/CLAUDE 上下文文件，并补充测试与文档。由 brooksmcmillin 提交，刚于 8/10 合并。  
🔗 https://github.com/earendil-works/pi/pull/7872

### 2. fix(coding-agent): cache llama.cpp model catalog — #7072
修复 #6948：缓存 llama.cpp 模型目录，解决启动时异步刷新导致 defaultModel 未生效的竞态问题。  
🔗 https://github.com/earendil-works/pi/pull/7072

### 3. feat(tui): add copyOnSelect option to TuiAltScreen — #7866
新增 `copyOnSelect` 配置项，允许禁用全屏 TUI 模式下选中即复制的行为，回应 #7720。默认保持现有行为。  
🔗 https://github.com/earendil-works/pi/pull/7866

### 4. fix(tui): handle pageUp/pageDown in base SelectList and model-selector — #7865
为基类 SelectList 和模型选择器补上 `tui.select.pageUp/pageDown` 键绑定支持，统一各选择器翻页行为。  
🔗 https://github.com/earendil-works/pi/pull/7865

### 5. feat(protocol): add remote session wire protocol — #7344
新增传输无关的 `@earendil-works/pi-protocol` 包，定义远程会话的命令、事件、快照和错误模型，并采用有界 CBOR 编码和增量长度前缀帧。这是远程会话能力的基础架构。  
🔗 https://github.com/earendil-works/pi/pull/7344

### 6. fix(coding-agent): route extension commands regardless of expandPromptTemplates — #7858
修复 #7859：让 `sendUserMessage()` 在 `expandPromptTemplates: false` 时也能触发扩展命令，使文档中的“命令作为重载入口”模式真正可用。  
🔗 https://github.com/earendil-works/pi/pull/7858

### 7. feat(agent): expose expandPromptTemplates in sendUserMessage — #7857
公开 `expandPromptTemplates` 参数，方便扩展作者（如 toilet-pi）自行控制命令展开行为。目前仍处于 Open 状态。  
🔗 https://github.com/earendil-works/pi/pull/7857

### 8. fix(ai): repair JSON-serialized structured tool arguments during validation — #7856
修复部分 Provider/模型将嵌套工具参数以字符串形式二次序列化的问题。原校验逻辑会将对象参数直接判为 `must be object`，现在会在校验阶段自动修复。  
🔗 https://github.com/earendil-works/pi/pull/7856

### 9. fix(provider): enable GitHub Copilot model policies sequentially — #7851
将 Copilot 模型策略启用从并发改为顺序执行，避免大型组织登录时触发 GitHub 429 限流，直接修复 #7850。  
🔗 https://github.com/earendil-works/pi/pull/7851

### 10. Prevent bulk policy updates during login — #7844
从登录流程中彻底移除批量启用模型策略的逻辑（模型仍可在 Copilot Chat 中显式启用），与 #7851 方案互补，从根源规避限流。  
🔗 https://github.com/earendil-works/pi/pull/7844

---

## 功能需求趋势

从近期 Issues 和 PR 中可以提炼出五个社区关注方向：

- **TUI 交互精细化**：复制行为可配置（#7720）、鼠标点击定位光标（#7852）、滚动稳定性（#7616、#7861）、分页键支持（#7865）——终端 UI 正从“可用”走向“好用”。
- **本地模型（llama.cpp）体验优化**：默认模型加载（#6922）、目录缓存（#7072）、启动竞态（#6948）——自托管模型用户是 Pi 的重要群体。
- **多 Provider 兼容性与认证鲁棒性**：AI21 API 迁移（#7869）、Copilot 限流（#7850）、Qwen Token Plan 新端点（#7847）、OpenAI Codex 错误分类（#7867）——海外与中国区服务都在快速演进。
- **会话生命周期健壮性**：自动压缩后未恢复任务（#7848）、并发 RPC 会话替换竞态（#7862）、exec 超时无法杀进程（#7864）——长时间运行的工作流需要更强的保护机制。
- **扩展系统能力增强**：暴露 context files（#7872）、修复命令路由（#7858/#7857）、自定义工具渲染生命周期（#7740）——社区在持续探索 Pi 作为 agent 扩展平台的可能性。

---

## 开发者关注点

- **TUI 渲染事故频发**：宽度超限导致整个会话中止（#7868）、流式输出时滚动跳动（#7861）、工具块超高触发全屏重绘（#7616）——渲染器被多起报告“打死”真实会话，修复优先级应提高。
- **本地模型启动路径脆弱**：默认模型不可用 + 刷新竞态组合起来，使 llama.cpp 用户在开箱时就直接遇到”No models available“，感知极差。
- **Copilot 登录限流是组织用户的硬伤**：大型组织一经并发策略请求就会被 GitHub 429，已有两个 PR 提出不同修复，但需统一合并方向。
- **扩展机制文档与实践脱节**：`sendUserMessage` 触发命令的功能与文档描述不符，暴露出扩展 API 的测试覆盖不足。
- **外部环境变化追踪需提速**：AI21 旧 API 退役导致的生产中断，提示工具链需要更主动的 Provider 兼容性监控。
- **大量 78xx 系列 issue 被快速关闭但未标明解决方案**：其中存在 untriaged 状态直接关闭的现象，社区可能更希望看到明确的“已在 PR #xxxx 修复”或“非目标行为”的说明。

---

*本日报由 GitHub 数据自动整理，仅供参考。数据源：github.com/badlogic/pi-mono（项目镜像：earendil-works/pi）*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-08-10

## 今日速览

今日发布 `v0.21.8-nightly.20260810.55e20db328`，核心变更为支持 Qoder 插件扩展并改进 CI 自动分诊。社区讨论焦点集中在**多智能体/多会话协调**方向：RFC #8718 与实现 PR #8804 同日推进，标志着该功能已进入产品化阶段。此外，MCP Streamable HTTP 的兼容性缺陷（#8784）和 SDK 诊断状态管理问题（#8823）成为新的稳定性热点。

---

## 版本发布

### v0.21.8-nightly.20260810.55e20db328
- **feat(core)**：支持 Qoder 插件扩展（PR [#8661](https://github.com/QwenLM/qwen-code/pull/8661)）——为第三方插件生态打开入口，是本次 release 最重要的功能变更。
- **feat(ci)**：自动将 issue 分配给对应模块负责人——提升社区 issues 的响应效率。

---

## 社区热点 Issues

### 1. RFC: Native coordination for independent Qwen sessions（#8718）
**优先级 P2 | 类型 feature-request | 讨论 8 条 | 更新 2026-08-10**
社区对多会话协调需求强烈。该 RFC 提出由 leader 会话派发 2-3 个 worker 会话并保持交互能力，与今日 PR #8804 直接对应。作为多智能体方向的核心设计文档，值得深入阅读。
[查看 Issue](https://github.com/QwenLM/qwen-code/issues/8718)

### 2. fix(serve): Preserve current session when large restore times out（#8678）
**优先级 P1 | 类型 bug | 更新 2026-08-09**
会话恢复在大体积快照时超时可能导致当前会话丢失，属于高影响数据安全问题。PR #8691 已合入超时契约与可观测性部分，后续行为修复仍在推进。
[查看 Issue](https://github.com/QwenLM/qwen-code/issues/8678)

### 3. Streamable HTTP: optional GET/SSE stream rejected with 404 kills the whole MCP connection（#8784）
**优先级 P2 | 类型 bug | 讨论 5 条 | 更新 2026-08-09**
MCP 客户端在 POST 握手后还会探测可选的 GET/SSE 流，若服务端返回 404，整个连接被终止。这违反了 MCP 规范中"可选端点失败不应影响主连接"的预期，对 MCP 集成稳定性影响较大。
[查看 Issue](https://github.com/QwenLM/qwen-code/issues/8784)

### 4. bug(sdk): hidden unrecognized diagnostics mutate and evict transcript state（#8823）
**优先级 P2 | 类型 bug | 讨论 3 条 | 更新 2026-08-09**
未识别的 daemon 事件被归一化为 debug 事件后，仍会经 `appendStatusBlock()` 进入共享 transcript reducer，导致用户可见的 transcript 状态被篡改或丢弃。PR #8812 已给出修复方向。
[查看 Issue](https://github.com/QwenLM/qwen-code/issues/8823)

### 5. Proposal: rebuild /review Step 3–5 orchestration on the workflow engine（#8769）
**优先级 P2 | 类型 enhancement | 讨论 4 条 | 更新 2026-08-09**
提议将 `/review` 技能第 3-5 步（agent fan-out、验证、反向审计）从模型驱动迁移到工作流引擎，使编排结构成为确定性代码。这是工作流引擎向核心技能渗透的重要信号。
[查看 Issue](https://github.com/QwenLM/qwen-code/issues/8769)

### 6. Proposal: unify the session reasoning loops on a Turn-based SessionRuntime（#8775）
**优先级 P2 | 类型 enhancement | 更新 2026-08-09**
指出会话推理循环当前被 TUI、headless、ACP、serve 等 5 个 surface 重复实现，建议统一为 Turn-based SessionRuntime。典型的架构收敛议题，有助于降低后续多智能体功能的实现成本。
[查看 Issue](https://github.com/QwenLM/qwen-code/issues/8775)

### 7. npm test doesn't run due to unknown flag（#8721）
**优先级 P2 | 类型 bug | 讨论 5 条 | 更新 2026-08-09**
仓库本地执行 `make test` 即失败（`npm error code EUNKNOWN`）。直接阻断开发者贡献代码前的测试验证，属于高频痛点。
[查看 Issue](https://github.com/QwenLM/qwen-code/issues/8721)

### 8. Windows standalone installer fails when powershell.exe cannot resolve Get-FileHash（#7118）
**优先级 P2 | 类型 bug | 3 👍 | 讨论 6 条 | 更新 2026-08-09**
Windows 独立安装器在 PowerShell 无法解析 `Get-FileHash` 时 SHA-256 校验失败，导致安装中断。虽标记 `welcome-pr`，但已持续近一个月，Windows 用户受影响面较大。
[查看 Issue](https://github.com/QwenLM/qwen-code/issues/7118)

### 9. TUI flickering / screen tearing in web-based terminals（#8659）
**优先级 P3 | 类型 bug | 讨论 4 条 | 更新 2026-08-10**
`useTerminalBuffer: true`（虚拟化历史模式）做全屏 ANSI 重绘时，在 Web 终端（Alibaba Cloud Workbench、xterm 等）出现持续闪烁/撕裂。影响 Web 终端场景的使用体验，社区已贴出复现环境。
[查看 Issue](https://github.com/QwenLM/qwen-code/issues/8659)

### 10. proposal: Add a direct external context provider profile（#7585）
**优先级 P3 | 类型 feature-request | 讨论 12 条 | 更新 2026-08-09**
提议为 Qwen Code 增加"直接外部上下文提供者"配置，支持私有 monorepo 按需与自动召回两种模式。虽然优先级不高，但 12 条评论表明企业级上下文隔离需求受到一定关注。
[查看 Issue](https://github.com/QwenLM/qwen-code/issues/7585)

---

## 重要 PR 进展

### 1. feat(cli): add native multi-agent coordination（#8804）
**状态 OPEN | 更新 2026-08-10**
以 `/coordinate <goal>` 命令提供多智能体协作入口，基于现有 Agent Team 运行时实现，不新增 supervisor 栈。与 RFC #8718 形成设计-实现闭环，是多智能体方向的关键一步。
[查看 PR](https://github.com/QwenLM/qwen-code/pull/8804)

### 2. fix(core): catch content-only thinking-tag leaks on all OpenAI-compatible providers（#8818）
**状态 OPEN | 更新 2026-08-10**
将 thinking-tag 泄漏防御推广到所有 OpenAI 兼容端点，修复两个绕过路径（#6666 相关）。对依赖第三方兼容网关的生产用户是重要修复。
[查看 PR](https://github.com/QwenLM/qwen-code/pull/8818)

### 3. feat(auth): add Kimi and Xiaomi MiMo providers（#8368）
**状态 OPEN | 更新 2026-08-10**
为 `/auth` 增加 Kimi（含 Coding Plan 与中/国际 API Key）和小米 MiMo（按量付费+多区域）预设。模型供应商的持续扩展是项目活跃度的重要指标。
[查看 PR](https://github.com/QwenLM/qwen-code/pull/8368)

### 4. fix(web-shell): stop rendering unrecognized daemon events in transcripts（#8812）
**状态 CLOSED | 更新 2026-08-10**
修复 Issue #8823：daemon UI 归一化器对未知帧的调试投影不再作为对话内容渲染，改为基于结构化 `debugReason` 判断。曾标记 `autofix/takeover`，已合并。
[查看 PR](https://github.com/QwenLM/qwen-code/pull/8812)

### 5. feat(cli): adopt Goal v3 in ACP sessions（#8732）
**状态 OPEN | 更新 2026-08-10**
将 ACP/Web Shell 会话的 `/goal` 从旧 Stop-hook 实现迁移到 CLI 已用的 Goal v3 状态机，支持 create/status/edit/pause/resume/replace/clear 全操作。是跨 surface 统一运行时（呼应 #8775）的具体实践。
[查看 PR](https://github.com/QwenLM/qwen-code/pull/8732)

### 6. fix(cli): extend the #8663 loader denylist and harden its scrub lifecycle（#8763）
**状态 OPEN | 更新 2026-08-10**
在 #8663 合并后补充了 14 个未解决问题的实质修复，继续收紧继承环境变量的 denylist（如 `NODE_OPTIONS`/`NODE_PATH` 类），并强化装载器的清理生命周期。安全加固相关。
[查看 PR](https://github.com/QwenLM/qwen-code/pull/8763)

### 7. feat(audit): add legacy code audit workflow（#8403）
**状态 OPEN | 更新 2026-08-10**
实现 `/audit <directory> [--effort low|medium|high]` 命令，用于在不依赖 diff/PR 的情况下审计存量代码模块。补齐了代码审查工作流的最后一块拼图。
[查看 PR](https://github.com/QwenLM/qwen-code/pull/8403)

### 8. feat(serve): share one Chrome bridge across sessions via multi-client /cdp tunnel（#8740）
**状态 OPEN | 更新 2026-08-10**
将 daemon 的 `/cdp` 隧道改为多客户端，使非 daemon 进程也能复用同一 Chrome 桥接，避免每个会话重复建立 Chrome 连接。对浏览器调试类场景有显著性能收益。
[查看 PR](https://github.com/QwenLM/qwen-code/pull/8740)

### 9. fix(desktop): open Local Control on the active session（#8806）
**状态 OPEN | 更新 2026-08-10**
Local Control 启用时捕获当前活动 Desktop 会话，扫 QR 码后直接在手机打开对应会话，而非空 Web Shell。移动端远程接管体验的重要完善。
[查看 PR](https://github.com/QwenLM/qwen-code/pull/8806)

### 10. fix(web-shell): reconcile mid-turn messages with daemon state（#8798）
**状态 OPEN | 更新 2026-08-10**
Web Shell 改为以 daemon 为中止消息的唯一权威：按稳定消息 ID 调和队列，刷新/切换会话后恢复排队消息，空闲时不再重复提交 daemon 已拥有的消息。会话一致性修复。
[查看 PR](https://github.com/QwenLM/qwen-code/pull/8798)

---

## 功能需求趋势

从近 24 小时活跃的 Issues/PRs 来看，社区注意力集中在以下几个方向：

1. **多智能体/多会话协调**——最热门方向。RFC #8718 + PR #8804 标志进入实施阶段；#8769 和 #8775 则从架构层面（workflow 引擎、统一 SessionRuntime）为多智能体铺路。
2. **MCP 集成深化**——包括内部上下文/记忆接入（#7585、#7449）以及传输层稳定性修复（#8784）。MCP 被视为 Qwen Code 生态扩展的核心载体。
3. **工作流引擎（Workflows）扩展**——从 /review 编排向 /audit 命令延伸（PR #8403），并持续优化调度策略（#8690）。工作流正在成为复杂任务的标准执行底座。
4. **厂商/模型支持扩张**——PR #8368 增加 Kimi、小米 MiMo 预设；Issue #6666 暴露的 thinking-tag 兼容问题也推动了对 OpenAI 兼容层的统一加固（PR #8818）。
5. **移动/远程访问**——QR 码配对 Local Control（#8595）、Local Control 绑定活动会话（PR #8806）等，说明"随时随地接管会话"被持续关注。

---

## 开发者关注点

1. **Windows 平台稳定性欠佳**：独立安装器 SHA-256 校验失败（#7118）、Desktop 0.1.0 启动即崩溃 EISDIR（#8615 已关闭，但影响仍在），Windows 用户需要更可靠的安装与运行路径。
2. **MCP 连接韧性不足**：可选 GET/SSE 流被 404 即导致整个连接断开（#8784），暴露出 MCP 客户端对规范可选能力的处理较为脆弱。
3. **CI/发布流水线波动**：多起 E2E 测试失败（#8756、#8822、#8766、#8799）以及 release 集成任务失败（#8771），与 Qoder 插件支持合入时间点接近，可能相关；`npm test` 本地运行失败（#8721）也直接阻碍贡献者验证。
4. **会话恢复安全性**：大体积会话恢复超时可能丢失当前会话（#8678，P1），虽然 PR #8691 已加超时保护，但完整修复仍需跟进。
5. **Web 终端渲染体验**：TUI 在 xterm 类终端的闪烁问题（#8659）尚未有修复方案，对云工作台用户影响持续存在。

---

*本日报由数据自动汇总生成，关注 [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) 获取最新动态。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-08-10）

## 今日速览

- v0.9.6 发布筹备 PR 已合并，重点修复压缩流程、归并发布流程与更新器，社区对 `128K vs 1M` 上下文窗口的讨论仍高热不下。
- 首次贡献者 @xavierpestel-ai 提交的 Mistral AI 一级 Provider 路由 PR 被合并，第三方模型接入路径进一步打开。
- 中文社区围绕 “Constitution” 翻译展开激烈讨论（#4949），是近期少有的社区文化议题。

## 社区热点 Issues

本期 30 条热帖中，高评论集中于架构重构、上下文压缩、Provider 切换与 TUI 交互缺陷。以下按关注度挑选 10 条：

- **[#3205] v0.9.3: Fleet model classes, loadout auto, and semantic route roles** — 评论 13 条。Fleet 共享模型/负载选择器核心设计，涉及 TUI、CLI、subagents 多端一致性，是 v0.9.x 多智能体底座的关键规划。  
  https://github.com/Hmbown/CodeWhale/issues/3205

- **[#4022] v0.9.3: define CLI/TUI parity for subagent and runtime control surfaces** — 评论 9 条。讨论子代理状态、展开/折叠、取消等控制面不应被锁死在 TUI 内，为未来云端/远程工作台预留接口，是治理前端一体化的代表性议题。  
  https://github.com/Hmbown/CodeWhale/issues/4022

- **[#4949] Discussion: The Chinese Translation of "Constitution"** — 评论 8 条。PR #4908 引发的翻译之争：“宪法 vs 协作准则”。社区母语者参与度高，本质是文档基础性与中文政治敏感性的取舍，最终方案影响后续文档风格。  
  https://github.com/Hmbown/CodeWhale/issues/4949

- **[#576] Feature Request: Improve Fork UX** — 评论 6 条。用户明确吐槽当前 Fork 没有 TUI 入口，需退出后复制 session ID 再敲命令；建议 `/fork` 交互式选择。社区呼声强，直接影响日常操作效率。  
  https://github.com/Hmbown/CodeWhale/issues/576

- **[#3313] v0.9.2: Split RuntimeThreadManager into store, executor, events, and types** — 评论 6 条。`runtime_threads.rs` 已达 7133 行，单文件混杂持久化、编排、执行监控与工具桥接，社区认可拆分方向，属技术债清理重点。  
  https://github.com/Hmbown/CodeWhale/issues/3313

- **[#5034] Switching providers can retain an unrelated default model** — 评论 4 条。切换到 OpenAI 后仍残留 `gpt-5.5` 默认模型，说明 provider/model 解析未协同更新，易造成令人困惑的行为，用户关注度高。  
  https://github.com/Hmbown/CodeWhale/issues/5034

- **[#5096] Compaction gain not visible** — 评论 4 条。`/compact` 明明提示已完成，但 token 计数器仍显示 37K/128K，压缩收益对用户不可见。这类“说了做了但没证据”的问题尤其损伤信任感。  
  https://github.com/Hmbown/CodeWhale/issues/5096

- **[#5293] TUI: make deny-by-default approval selection configurable** — 评论 4 条。v0.9.4 起权限审批对话框默认高亮改为“拒绝”，用户担忧惯性确认导致误拒，希望可配置化并附说明。体现了默认安全策略与操作效率的冲突。  
  https://github.com/Hmbown/CodeWhale/issues/5293

- **[#5270] v0.9.5: unified tasks surface** — 评论 3 条。目标是把后台 shell、subagents、Fleet workers、workflow runs 收拢到一个“任务面板”，提供统一可观测性，是 v0.9.5 路线中的核心 UX 改进。  
  https://github.com/Hmbown/CodeWhale/issues/5270

- **[#5209] File (action=edit) silently accepts wrong parameter names and reports fake success** — 评论 3 条。参数写错（如 `new_str`）时不报错而是返回成功，导致单点需 3–5 次重复编辑，属于“假成功真失败”的隐蔽缺陷，严重影响日常 agent 编辑可靠性。  
  https://github.com/Hmbown/CodeWhale/issues/5209

## 重要 PR 进展

本期数据源仅包含 5 条 PR，全部列表如下：

- **[#5313] chore(release): prepare v0.9.6**（已合并）— 减法式发布：移除 harness 造成的阻塞，同时保留显式预算、截止时间、取消能力与真实 provider 状态；重建压缩流程为单一 provider summary + successor handoff，避免 mailbox 冻结。  
  https://github.com/Hmbown/CodeWhale/pull/5313

- **[#5295] feat: add Mistral AI as a first-class provider route**（已合并）— 首次贡献者 @xavierpestel-ai 的独立提交，新增 Mistral (la Plateforme) 一级 provider，支持 `provider = "mistral"`、`CODEWHALE_PROVIDER=mistral` 与 `--provider mistral`，默认模型 `mistral-code-latest`。  
  https://github.com/Hmbown/CodeWhale/pull/5295

- **[#5306] fix(release): validate crate publication order**（已合并）— 在 registry 操作前用锁定 Cargo 元数据校验 20 个 crate 的发布顺序（core 先于 tui），对重复/缺失/混合版本/依赖倒置等 fail-closed，防止半发布状态。  
  https://github.com/Hmbown/CodeWhale/pull/5306

- **[#5308] fix(release): use CNB asset download URLs**（已合并）— 修正 `codewhale.net/codewhale` 的 release 资产路径，使 mirror 模式能拿到真正的二进制文件而非 HTML 页。  
  https://github.com/Hmbown/CodeWhale/pull/5308

- **[#5281] build(deps): bump jsonschema from 0.46.10 to 0.49.6**（打开）— dependabot 自动依赖升级，属常规维护。  
  https://github.com/Hmbown/CodeWhale/pull/5281

## 功能需求趋势

从本期 30 条 Issues 与 5 条 PR 中可提炼出社区最关注的 5 个方向：

1. **上下文压缩可解释化** — #4394、#5043、#5096、#5239、#5134 等反复围绕同一主题：压缩时机、压缩收益可见性、1M 窗口为何在 128K 处触发、压缩后信息留存等。用户要的不只是“能压缩”，还有“按契约压缩、能看到压缩”。
2. **多 Provider 支持与密钥管理** — #5295（Mistral）、#5250（多 API key 保存）、#5034（provider 切换残留模型）表明，社区正在跨 DeepSeek/GLM/OpenAI/Mistral 等多个服务商工作，密钥与模型选择必须支持多套并存、切换干净。
3. **TUI 交互细节打磨** — #576（Fork 入口）、#5023（IME 候选框跳动）、#5314（复制消息带装饰）、#5293（默认高亮改动）说明用户对 TUI 的日常使用体验敏感，微小 UI 回归会被快速捕捉。
4. **统一任务可观测性** — #5270、#5287、#5098 等要求把后台 shell、子代理、Fleet workers 纳入统一身份展示与操作入口，减少黑盒。
5. **agent 工具可靠性** — #5209、#3364（read-before-edit 护栏）指向“宁可报错也不要假成功”的诉求，这是 coding agent 信任感的根基。

## 开发者关注点

- **上下文压缩不透明**：`/compact` 提示成功但 token 计数无变化（#5096）；模型支持 1M 却总在 128K 压缩（#5239、#5134）。开发者希望看到压缩前后 token 对照，并支持用户显式设置窗口上限。
- **File 编辑假成功**：#5209 中错误的参数名（`new_str` vs `replace`）被静默接受并返回成功，导致每次编辑需 3–5 次重试。希望工具对未知参数 fail loudly。
- **API Key 只能存一份**：#5250 中 DeepSeek 与 GLM 切换时被迫重复取 key，期望 provider 维度分开持久化，而不是互相覆盖。
- **Provider 切换状态残留**：#5034 切换 OpenAI 后仍带着旧路由的 `gpt-5.5` 默认模型，需手动修正，破坏“切换即整体切换”的直觉。
- **配置静默覆盖**：#5098 中 `~/.codewhale/agents/builder.toml` 的修改被其他层配置 shadow，Fleet roster 仍是旧模型，且没有任何提示。希望配置合并逻辑对覆盖来源显式化。
- **复制功能混入 UI 装饰**：#5314 中 `Copy message` 把角色图标和换行 rail 符一起复制，而选择复制则是干净的。希望两种复制行为统一为纯文本。
- **子代理显示身份混乱**：#5287 中同一子代理在不同界面分别显示 `agent_<hex>`、自动昵称、dispatch 名，开发者按名字派发任务却无法按名字找回状态。
- **测试可靠性**：#5056 指出 verifier 后台测试在并行下仍然 flaky，且存在 12 个未 triage 的 `#[ignore]` 测试。社区与维护者都在关注 CI 稳定性。

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*