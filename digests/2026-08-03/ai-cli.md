# AI CLI 工具社区动态日报 2026-08-03

> 生成时间: 2026-08-03 01:46 UTC | 覆盖工具: 10 个

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

# AI CLI 工具横向对比分析报告（2026-08-03）

## 1. 生态全景

AI CLI 工具已从单一“对话式编码助手”演变为**多 Agent 协作、跨设备远程控制、服务化部署**的复杂开发基础设施。当前生态整体处于“**功能先行、稳定性滞后**”阶段：各工具都在快速叠加多 Agent 编排、MCP/插件生态、远程控制等新能力，但普遍暴露**静默失败、配置不可靠、资源消耗失控**三类系统性问题。新模型（Opus 4.8/5、GPT-5.6、Gemini 3）密集发布带来配置兼容性新的不确定性。社区对工具的要求正从“能跑通”转向“**可观测、可控制、可预测**”。

## 2. 各工具活跃度对比

| 工具 | 活跃 Issues | 活跃 PR | Release | 社区热度信号 |
|---|---|---|---|---|
| Claude Code | 10 | 3 | 无 | 高赞 Issue 多（最高👍44）；评论总量大；长期 bug 积压严重 |
| OpenAI Codex | 10 | 6 | 无 | Linux 桌面请求👍906 霸榜；Diff 崩溃双平台爆发 |
| Gemini CLI | 10 | 10 | v0.55.0-nightly | Nightly 日更；P1 bug 数量多；Dependabot 大版本升级频繁 |
| GitHub Copilot CLI | 10 | 0 | 无 | 多个 1.0.7x 版本回归问题并存；PR 停滞 |
| Kimi Code CLI | 4 | 1 | 无 | 远程控制👍24；议题量少但需求方向明确 |
| OpenCode | 10 | 10 | 无 | 内存 megathread 121 评论；语音输入👍170（closed） |
| Pi | 10 | 10 | 无 | 24h 约 20 issues + 19 PR；compaction 与终端兼容性为主 |
| Qwen Code | 10 | 10 | v0.21.3-nightly | 安全修复与 daemon 治理双线推进；桌面端会话丢失新增 P1 |
| DeepSeek TUI | 10 | 10 | 无（release-blocker） | 大量 WIP PR 但无合并；配置遮蔽/子代理阻塞是核心痛点 |
| Grok Build | 0 | 0 | 无 | 无社区活动 |

## 3. 共同关注的功能方向

### 3.1 多 Agent 工作流的可靠性与可观测性
- **Claude Code**：Agent 层级实时仪表盘（#24537，👍17）
- **Gemini CLI**：子代理“假成功”误报（#22323）、通用代理无限挂起（#21409）
- **Kimi Code**：Swarm 批次 403/超时导致半成品丢失（#2578）
- **OpenCode**：单独中止/引导子代理（#38966）
- **DeepSeek TUI**：子代理 spawn 拒绝（#5099）、目标循环 10 次续跑上限（#5126）

核心诉求：**子代理结果必须真实反映成功/失败，且具备可观测、可干预、可恢复能力**。

### 3.2 远程控制与跨设备会话连续性
- **Claude Code**：已有 `/remote-control`，但移动端草稿丢失（#71603）、远程输入不可达（#66265）
- **OpenAI Codex**：请求类 Claude Code 式远程控制（#27565）
- **Kimi Code**：任意设备接续本地会话（#1282，👍24）
- **Qwen Code**：桌面端与 CLI 体验一致性（#8123）

核心诉求：**本地会话可被移动端/浏览器远程接管，且上下文不丢失**。

### 3.3 会话持久化与数据安全
- **Claude Code**：全局指令静默回退（#40175）、会话 URL 自动附加到 commit（#66504，👍44）
- **Qwen Code**：桌面端会话重启后静默删除（#8400，P1）、并发写入导致转录分叉（#7164）
- **OpenCode**：SQLite 损坏崩溃（#37821）、WAL 无限增长（#37495）
- **DeepSeek TUI**：Fleet 配置静默遮蔽（#5098）
- **Pi**：auth.json 带 BOM 时凭据静默禁用（#7499）

核心诉求：**配置变更要生效，会话数据要可恢复，删除操作要显式确认**。

### 3.4 Token 消耗透明化与成本控制
- **OpenAI Codex**：后台轮询每次触发全量 API 往返（#13733，实测等待轮询占用 19.8% token）
- **OpenCode**：OpenAI 缓存写入显示为 0（#37745）
- **Pi**：工具 schema 每次请求序列化两次（#7485）
- **Claude Code**：commit 消息自动附加会话 URL 造成噪音（#66504）

核心诉求：**成本的可见性、可量化、可控制**。

### 3.5 跨平台支持缺口（Linux/Windows/移动端）
- **Linux 桌面**：OpenAI Codex 请求以 906👍 居首；Claude Code CRLF 问题拖了一年
- **Windows**：Claude Code 蓝屏近 5 个月未修复；Copilot WSL2 键位误判、git symlink 缺口；Qwen 进程名不可识别
- **移动端/Termux**：Pi 多行粘贴失效（#7321）；DeepSeek TUI Termux 原生支持

### 3.6 新模型引入的配置兼容性问题
- **Claude Code**：Opus 4.8 `xhigh effort` 与 thinking 互斥报 400（#76689）、韩文字节错误（#82588）
- **OpenAI Codex**：GPT-5.6 Sol 上下文被目录限制在 372K vs 模型规格 1.05M（#31860）
- **Copilot CLI**：gpt-5.6-luna 在 /models 可见但 /chat/completions 不可用（#4337）

核心诉求：**模型能力发布时，工具链与配置项需同步对齐验证**。

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 | 核心短板 |
|---|---|---|---|---|
| **Claude Code** | 企业级多 Agent 工作流（Cowork、子代理、权限体系） | 企业开发者、重度 CLI 用户 | 功能大而全，配置体系复杂；TUI+Desktop+移动端全平台覆盖 | 平台稳定性差（Windows 蓝屏、CRLF）；安全边界设计落后（session URL 泄露、捏造 system-reminder） |
| **OpenAI Codex** | 桌面应用 + VS Code 集成 + 多智能体（Ultra） | OpenAI 生态用户、IDE 开发者 | 深度绑定 Responses API 与官方模型；桌面端是核心入口 | Linux 缺失；Diff 功能崩溃；token 轮询浪费 |
| **Gemini CLI** | 多 Agent 协同 + Auto Memory + 浏览器子代理 | Google 生态开发者、探索型用户 | Nightly 高频迭代；Agent 架构激进；记忆系统差异化 | 子代理可靠性低（挂起/假成功）；依赖升级风险；工具超 400 个报错 |
| **GitHub Copilot CLI** | GitHub 生态内的编码辅助 + ACP 协议 | GitHub 重度用户 | 与 GitHub 平台深度耦合；ACP 是其特色协议 | 迭代慢（0 PR）；基础功能回归（view 工具）；会话状态机缺陷 |
| **Kimi Code CLI** | 轻量、明确的记忆与远程控制诉求 | 中国开发者、移动办公场景 | 体量小但需求聚焦；社区驱动方向明显 | 社区活跃度低；官方响应慢；功能覆盖面窄 |
| **OpenCode** | 开源插件生态 + 可扩展性（MCP 信任、插件钩子） | 开源社区、自托管用户 | 插件系统灵活；SQLite/内存双后端；强社区治理 | 资源管理失控（内存/磁盘泄漏）；SQLite 可靠性差；桌面端体验粗糙 |
| **Pi** | 终端体验打磨 + 会话架构升级 | 硬核终端用户、多 Provider 用户 | 高度关注 TUI 细节（IME/图片/粘贴）；session 后端重构中 | compaction 机制脆弱；网络层缺少超时兜底；小团队维护压力 |
| **Qwen Code** | 服务化（daemon）+ 安全加固 + 多模型接入 | 企业服务化部署、中国开发者 | 双线推进：服务架构（WorkspaceRuntime）与安全治理（hook 信任边界） | 桌面端刚起步问题多；Windows 兼容性不足；并发会话正确性 |
| **DeepSeek TUI** | 模型路由/配置管理 + Fleet 多 Agent | DeepSeek 生态用户、无头部署场景 | 大量 WIP PR 显示快速重构；Fleet/Provider 抽象在演进 | 处于“能跑但不可靠”阶段；配置静默失效；release 流程质量待加强 |
| **Grok Build** | - | - | 无社区活动 | - |

## 5. 社区热度与成熟度

**最活跃梯队：**
- **Gemini CLI**：日更 nightly + 10 PR + 10 Issues，机器人主导的自动化和人工提交并存，处于快速迭代期。但一些 P1 bug（子代理挂起）长期未闭环，反映“重迭代、重修复”的节奏。
- **Pi**：24h 内约 20 issues + 19 PR，社区参与度高，但修复集中在终端边缘 case，架构级问题（compaction、网络超时）仍在解决中。
- **OpenCode**：大型社区（memory megathread 121 评论），开源治理活跃，但痛点集中在资源泄漏，说明软件成熟度还未到“稳定使用”阶段。

**高关注、响应慢梯队：**
- **Claude Code**：社区呼声大（👍 数据高），但关键 bug（Windows 蓝屏 5 个月、CRLF 一年）长期不修复，官方 PR 少，社区信心在消耗。
- **OpenAI Codex**：Linux 支持 906👍 显示需求极强，但无明确 roadmap 信号；Diff 崩溃双平台出现说明质量回归正在发生。

**低活跃/不成熟梯队：**
- **Copilot CLI**：0 PR 且多版本问题并存，社区活跃度低，迭代节奏慢。
- **Kimi Code**：4 个 issue，需求明确但官方响应不足，尚在早期。
- **DeepSeek TUI**：10 个 WIP PR 但无合并，release-blocker 挂着，说明高速开发中但流程质量未跟上。
- **Grok Build**：无社区活动，基本处于空转状态。

**成熟度判断**：没有一家达到“稳定生产可用”标准。**Claude Code** 功能最全但平台稳定性拖后腿；**Gemini CLI** 迭代最快但可靠性负债在累积；**Pi** 和 **OpenCode** 社区基础扎实但核心架构仍在改造期；**OpenAI Codex** 商业驱动明确但平台覆盖（Linux）和功能稳定性（Diff）是明显短板。

## 6. 值得关注的趋势信号

### 6.1 “静默失败”是跨工具最普遍的信任杀手
Claude Code 全局指令回退（#40175）、Qwen 桌面端会话静默删除（#8400）、DeepSeek 配置静默遮蔽（#5098）、Gemini 子代理“假成功”（#22323）、Pi auth.json BOM 静默禁用凭据（#7499）——**不同工具出现高度同构的问题模式**。核心教训：AI CLI 工具的正确性如果只依赖“模型做对”，而不在系统层面加入验证、确认和失败暴露机制，整个类别都难以建立开发者信任。

### 6.2 多 Agent 编排已进入“工程化治理”阶段
“能跑通多 Agent”已经不是卖点，**可观测性、权限继承、结果真实性、断点续跑**才是社区真正的诉求。Claude Code 的 Agent 仪表盘、Gemini 的子代理权限传播修复、Kimi 的 Swarm 容错、DeepSeek 的 verifier evidence API 都在回应同一问题。未来 6 个月，多 Agent 工作流的生产级质量（非 demo 级）将是各工具竞争的关键阵地。

### 6.3 新模型发布正在对工具链造成系统性冲击
Opus 4.8/5 的配置冲突、GPT-5.6 的上下文目录限制、gpt-5.6-luna 的 API 不兼容、Gemini 3 的 tool call ID 处理——**新模型发布的速度已经快于工具链适配的速度**。对于开发者，这意味着：在新模型发布初期应避免立即升级生产环境；对工具选型而言，**模型与工具的版本兼容性**应纳入考量。

### 6.4 资源消耗透明度成为硬需求
Codex 后台轮询浪费 token（19.8%）、Pi 工具 schema 双倍序列化、OpenCode 缓存计费统计错误、Claude Code 会话 URL 泄漏到 commit——开发者已经对“黑盒扣费”高度敏感。工具需要提供**成本与 token 的可见性、可配置的轮询策略、按需裁剪工具集**的能力，否则将在企业采购决策中失分。

### 6.5 跨平台与终端兼容性属于“基础欠债”
Windows 蓝屏、Linux CRLF、WSL2 键位、Termux 粘贴、WezTerm 光标、ConEmu 闪烁——**大量高赞 issue 集中在终端/OS 兼容层而非 AI 能力层**。这个“不性感”的领域正在消耗社区大量耐心。对于开发者，Windows/Linux/macOS 三平台团队的场景下，目前没有任何工具提供一致体验，需要在选择时做好妥协准备。

### 6.6 网络与依赖的健壮性被严重低估
Pi 的 IPv6 黑洞卡死 5 分钟、auth 登录后模型目录不可达冻结、Qwen hook 重定向绕过白名单、Codex 远程 exec-server 字节级缓冲上限——**AI CLI 工具的网络栈和依赖管理已成为安全与可用性的关键薄弱点**。预期后续会有更多工具跟进超时控制、地址族回退和依赖供应链加固。

### 6.7 对开发者的参考建议
- **多 Agent 工作流**：优先选择**结果可校验、可干预**的工具（如 Gemini 修复后的重试逻辑、Claude Code 的层级可视化），并做好“假成功”的心理预案。
- **成本敏感场景**：关注工具对轮询、工具 schema 序列化、上下文窗口利用是否提供**量化可见性**；优先选择支持按需裁剪工具集的实现。
- **跨平台团队**：目前无完美选择。Windows 用户短期内建议避开 Claude Code（BSOD 风险），Linux 桌面用户等待 Codex 官方支持或考虑 Web 端。
- **新模型采用**：等待模型发布后 2-4 周的工具链适配“观察期”，关注各工具对新模型的配置兼容性反馈，再决定升级。
- **数据安全与隐私**：检查工具是否默认将会话 URL、模型输出记录到 commit 历史或内存系统；优先选择**显式确认、默认不写入**的方案。
- **自主可控**：对 Linux 与开源依赖较重的团队，Pi 与 OpenCode 的社区驱动模式值得关注，但需评估其架构转型期的稳定性风险。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

*数据截止：2026-08-03 | 来源：github.com/anthropics/skills*

---

## 1. 热门 Skills 排行

按社区评论热度排序，以下 PR 代表了当前社区最关注的方向。

**① #1298 — skill-creator 评估链路全面修复**  
🔗 [PR #1298](https://github.com/anthropics/skills/pull/1298)｜Open  
热度第一的 PR，直指 `run_eval.py` 在所有 skill 上持续报告 `recall=0%` 的核心问题，涉及 Windows 流读取、触发检测、并行 worker 等多个 Bug。社区讨论焦点：skill 描述优化循环正在"对着噪音做优化"，评估工具可信度已严重影响 skill 开发效率。

**② #514 — document-typography：AI 生成文档的排版质检**  
🔗 [PR #514](https://github.com/anthropics/skills/pull/514)｜Open  
新增技能，专门解决 AI 生成文档的孤词换行（orphan）、页尾孤立标题（widow）和编号错位等通病。社区讨论热点：这是所有 Claude 生成文档都会遇到的问题，用户不会主动提出排版需求，但质量差距感知明显。

**③ #486 — ODT：OpenDocument 格式处理**  
🔗 [PR #486](https://github.com/anthropics/skills/pull/486)｜Open  
支持创建、模板填充、读取及转换 `.odt`/`.ods` 等 ISO 标准文档格式。社区关注点：企业用户对开源/标准格式（LibreOffice）需求真实存在，且该 skill 补齐了现有文档技能矩阵的缺口。

**④ #83 — skill-quality-analyzer + skill-security-analyzer**  
🔗 [PR #83](https://github.com/anthropics/skills/pull/83)｜Open  
新增两个元技能：质量分析器覆盖结构/文档、示例、资源等五个维度；安全分析器聚焦技能安全审计。结合 #492 安全信任问题，社区对该类"治理型"技能的需求在快速上升。

**⑤ #210 — frontend-design 技能清晰度与可执行性优化**  
🔗 [PR #210](https://github.com/anthropics/skills/pull/210)｜Open  
对既有 frontend-design 技能的修订，目标是让每条指令都能在单次对话中真实执行，提升内部一致性和可操作性。这是社区对"已有技能质量打磨"的代表性需求。

**⑥ #1367 — self-audit：交付前自审计技能（v1.3.0）**  
🔗 [PR #1367](https://github.com/anthropics/skills/pull/1367)｜Open  
先做机械层文件存在性验证，再按损害严重度优先级执行四维推理审计。与 #1385 "推理质量门控管线"提案形成呼应，社区对 AI 输出质量保障类技能持续升温。

**⑦ #723 — testing-patterns：完整测试技能**  
🔗 [PR #723](https://github.com/anthropics/skills/pull/723)｜Open  
覆盖 Testing Trophy 模型、单元测试 AAA 模式、React Testing Library 等全栈测试实践。讨论热点：这是社区长期呼吁的"测试生成/测试模式"类技能的落地方案。

**⑧ #525 — pyxel：复古游戏开发技能**  
🔗 [PR #525](https://github.com/anthropics/skills/pull/525)｜Open  
配合 pyxel-mcp，覆盖"编写 → 运行截图 → 检查 → 迭代"的工作流，触发词包括 retro/pixel-art/8-bit。受众垂直但创作者社区活跃，PR 更新至 2026-07-15，关注度稳定。

> **同样高热度的修复类 PR**：#538（[PDF 大小写引用修复](https://github.com/anthropics/skills/pull/538)）、#541（[DOCX 修订冲突修复](https://github.com/anthropics/skills/pull/541)）、#539（[skill-creator YAML 预校验](https://github.com/anthropics/skills/pull/539)），表明社区对既有文档技能的可靠性修复同样高度关注。

---

## 2. 社区需求趋势

从 Issues 热度提炼出以下四大趋势：

**🔐 安全与信任边界（最强呼声）**  
[#492 Security: Community skills under anthropic/ namespace](https://github.com/anthropics/skills/issues/492) 以 43 条评论位居 Issues 第一，直指社区技能在 `anthropic/` 命名空间下分发可能造成信任边界滥用。社区强烈要求明确官方/社区技能标识，并建立安全审计机制。

**🏢 组织级共享与协作**  
[#228 Enable org-wide skill sharing](https://github.com/anthropics/skills/issues/228)（16 评论，8 👍）要求技能直接在组织内共享，免除手动下载/传输/上传流程。企业级 Skill 分发基础设施的呼声上升。

**🧰 Skill 工具链可靠性**  
[#556 run_eval.py 0% trigger rate](https://github.com/anthropics/skills/issues/556)、[#1169 recall=0% 问题复现](https://github.com/anthropics/skills/issues/1169)、[#1061 Windows 兼容性](https://github.com/anthropics/skills/issues/1061) 组成一组关联问题：skill-creator 评估工具在 Windows 下不可用、触发检测失效，社区正在消耗大量精力"修复工具而非创建技能"。

**🧠 高质量/高效率的技能形态**  
- [#1487 claude-api 技能注入 ~156k tokens](https://github.com/anthropics/skills/issues/1487)：上下文窗口被单次调用耗尽，社区对技能的资源消耗敏感度上升。
- [#1329 compact-memory 紧凑符号记忆](https://github.com/anthropics/skills/issues/1329)：长时运行代理的上下文碎片化问题。
- [#412 agent-governance 代理治理模式](https://github.com/anthropics/skills/issues/412) 与 #1385 推理质量门控管线：治理与质量保障方向持续有提案出现。
- 另外，[#189 duplicate skills 安装](https://github.com/anthropics/skills/issues/189)（9 👍）反映插件重复安装导致上下文膨胀，生态治理需求不可忽视。

---

## 3. 高潜力待合并 Skills

以下 PR 当前均为 Open 状态，但社区关注度高、讨论充分，近期落地概率较大：

| PR | 内容 | 潜力信号 |
|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 评估链路修复 | 关联 #556/#1169/#1061 三个高赞 issue，是影响所有 skill 开发的阻塞性问题 |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography 排版质检 | 评论数第 2，解决普遍性问题，新 skill 无兼容性风险 |
| [#486](https://github.com/anthropics/skills/pull/486) | ODT 文档处理 | 评论数第 4，补齐文档矩阵，企业需求明确 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit 自审计 | 与 #1385 提案互相支撑，契合质量保障趋势 |
| [#83](https://github.com/anthropics/skills/pull/83) | 质量/安全分析器（元技能） | 直接回应 #492 安全信任诉求，治理型技能前景好 |
| [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns 测试技能 | 长期需求，影响力覆盖全栈开发者 |

---

## 4. Skills 生态洞察

**当前社区最集中的诉求是：构建"可信、可治理、可衡量"的 Skill 基础设施——既要有安全分发边界的保障，也要修复 skill-creator 评估工具的可信度，更期待高质量的通用技能（文档排版、测试模式、输出审计）以正规化形态进入官方仓库。** 社区关注点正从"技能的数量"转向"技能的信任与质量"。

---

*报告基于 anthropics/skills 仓库公开数据生成，所有链接可直接访问。*

---

# Claude Code 社区动态日报 — 2026-08-03

## 今日速览

过去 24 小时无新版本发布，社区讨论集中在两起长期未决的严重 bug 上：Windows 平台 `claude.exe` 触发蓝屏（#32870，38 条评论）和 Linux 下 CRLF 行尾问题（#2805，44 条评论，已持续一年以上）。与此同时，围绕新模型（Opus 4.8/5）的配置冲突和模型幻觉类报告显著增多，权限模式传播、会话数据丢失等稳定性问题仍高频出现。

## 社区热点 Issues

### 1. [BUG] Claude Code 在 Linux 系统上持续创建 Windows 行尾（CRLF）文件
**#2805** | 评论 44 | 👍 33 | 创建于 2025-07-01，至今未关闭
> 在 Ubuntu Linux 上，即使用户在 CLAUDE.md 中明确要求 Unix 行尾，Claude Code 仍会以 CRLF 创建 shell 脚本和文本文件，导致执行脚本时报 "No such file or directory"。

这是目前 issue 追踪器中最老的活跃 bug 之一，持续一年仍未解决，社区呼声极高。

🔗 https://github.com/anthropics/claude-code/issues/2805

### 2. [BUG] claude.exe 在目录枚举时触发 Windows 蓝屏（Wof.sys / NtQueryDirectoryFileEx）
**#32870** | 评论 38 | 👍 1 | 创建于 2026-03-10
> Windows 用户报告 `claude.exe` 在调用目录列表相关系统 API 时导致 Wof.sys（Windows Overlay Filter）崩溃，直接触发 BSOD。附有完整复现步骤。

影响面极大且严重程度最高的 bug，已持续近 5 个月仍为打开状态。

🔗 https://github.com/anthropics/claude-code/issues/32870

### 3. [BUG] Cowork：全局指令保存后静默回退到旧版本
**#40175** | 评论 32 | 👍 20
> macOS 和 Windows 用户均报告，Cowork 功能中保存的全局指令会在后续会话中静默回退到旧版本，导致用户配置丢失且无任何提示。

涉及配置可靠性问题，20 个 👍 表明受影响用户较多。

🔗 https://github.com/anthropics/claude-code/issues/40175

### 4. [FEATURE] 会话 URL 默认附加到 commit 消息和 PR 描述 — 应改为 opt-in
**#66504** | 评论 11 | 👍 44 | 创建于 2026-06-09
> 每次 commit 消息和 PR 描述都会自动附加 Claude Code 会话 URL，用户认为这是隐私泄露且属于不必要的噪音，要求改为默认关闭的 opt-in 行为。

44 个 👍 是本期数据中最高，隐私相关诉求强烈。

🔗 https://github.com/anthropics/claude-code/issues/66504

### 5. [FEATURE] Agent 层级仪表盘 — 多 Agent 工作流统一实时可视化（TUI + Desktop）
**#24537** | 评论 14 | 👍 17
> 当 Claude Code 同时运行多个 Agent 时，缺少统一的层级视图来观察各 Agent 的状态、成本和工具调用。用户要求新增一个实时仪表盘（TUI 和桌面端）。

反映社区对多 Agent 工作流可观测性的核心诉求。

🔗 https://github.com/anthropics/claude-code/issues/24537

### 6. [BUG] Opus 4.8：`alwaysThinkingEnabled: true` 下仍报 400 "xhigh effort not supported when thinking is disabled"
**#76689** | 评论 10 | 👍 11
> VS Code 中配置 `effortLevel: "xhigh"` 且开启 alwaysThinking 后，请求仍间歇性报 400 错误。模型行为与用户显式配置不一致。

新模型配置项之间相互冲突的典型例子，影响 VS Code 用户。

🔗 https://github.com/anthropics/claude-code/issues/76689

### 7. [BUG] claude-opus-5 生成的韩文文本中替换为错误的韩文字节
**#82588** | 评论 3 | 创建于 2026-07-30
> 韩文输出中会出现个别"合法但错误"的韩文字节（如 `한` → `항` 类替换）。非乱码、非渲染问题，是模型输出本身的错误。用户统计在同一数据集中其他模型 31,542 条消息中零出现。

针对新模型的语言学缺陷，非常独特的 bug，且可能涉及更深层的 tokenizer 问题。

🔗 https://github.com/anthropics/claude-code/issues/82588

### 8. [BUG] 模型捏造假 system-reminder，包含虚构的 MCP 指令和安全警告
**#83442** | 创建于 2026-08-03（今日新提交）
> 在正常编码任务开始时，claude-fable-5 在响应开头吐出一个完全捏造的 `<system-reminder>` — 包含一个虚构的"针对 Anthropic 红队的 prompt injection 测试"内容，以及不存在的 MCP 指令和虚假安全警告。

极其值得关注的安全/可靠性问题。模型自行编造系统级内容，可能误导开发者或掩盖真实攻击。

🔗 https://github.com/anthropics/claude-code/issues/83442

### 9. [BUG] Claude Desktop 在接近 5 小时使用限制时崩溃，且无法重新打开 — 每次都需要完全重装
**#83403** | 评论 3 | 创建于 2026-08-02
> 桌面客户端在运行接近 5 小时后崩溃，之后应用无法正常重新启动，必须完全卸载重装才能恢复。

非常影响使用的稳定性问题。虽然评论不多，但"每次都要重装"的代价极高。

🔗 https://github.com/anthropics/claude-code/issues/83403

### 10. [BUG] 模型生成退化重复循环 — 单个 token 重复约 32,000 次直至打满 max_tokens
**#82803** | 评论 4 | 创建于 2026-07-31
> 助手响应偶尔进入退化循环：单个 token（如 "court"）连续输出约 32,000 次直到达到输出上限，且无任何报错，表面看似正常结束。用户实测横跨两代模型均可复现。

静默失败的典型案例，配合其他静默问题（指令回退、草稿丢失）形成系统性隐患。

🔗 https://github.com/anthropics/claude-code/issues/82803

## 重要 PR 进展

过去 24 小时共有 3 个 PR 处于活跃状态，均为文档或插件层面的修复：

### 1. docs(plugin-dev): 补充 MessageDisplay hook 使用指南
**#83374** | 由 iCodeCraft 提交，2026-08-02 更新
> 捆绑的 Hook Development skill 中缺少 `MessageDisplay` 事件的触发描述、事件指南和速查表。该 PR 补充了相关文档，并解释了其流式字段的含义。对插件开发者是一个实际的文档补全。

🔗 https://github.com/anthropics/claude-code/pull/83374

### 2. 修复 code-review 插件在未传 `--comment` 时仍发布到 GitHub 的问题
**#26056** | 由 apoorvdarshan 提交，2026-08-02 更新
> 为 code-review 插件增加防护，确保模型在未提供 `--comment` 参数时可靠地止步于终端输出。新增顶层行为规则、为步骤 8-9 添加显式条件门控、强化步骤 7 的停止指令，并在 Notes 中增加 NEVER-post 说明。

针对插件行为越界的直接修复，防止未经授权的 GitHub 发布。

🔗 https://github.com/anthropics/claude-code/pull/26056

### 3. fix(plugin-dev): 修复 skill-reviewer frontmatter 的 YAML 格式
**#48343** | 由 Rohan5commit 提交，2026-08-02 更新
> 将 `skill-reviewer` 的 frontmatter 描述改为 YAML block scalar 写法，使文件能被正确解析，同时保留现有触发示例。属于 #40370 的一部分，单文件语法修复，无行为变更。

🔗 https://github.com/anthropics/claude-code/pull/48343

## 功能需求趋势

从本期全部 Issues 中提炼出社区最关注的五个功能方向：

1. **多 Agent 工作流的可观测性与通信** — 包括 Agent 层级仪表盘（#24537，👍17）、跨会话实例通信（#69912，已按重复关闭但持续有人提）。社区需要能"看见"多层 Agent 在做什么，以及让不同会话间可以直接通信。

2. **隐私与元数据控制** — #66504（会话 URL 自动附加到 commit/PR，👍44）是当前 👍 数最高的需求类 Issue。用户希望敏感会话链接默认不写入 commit 历史。

3. **移动端与远程控制体验** — 多个报告指向移动端输入草稿丢失（#71603）、远程会话中 `/context` 失效及 `/usage` 卡死（#82854）、远程控制输入单向不可达（#66265）等。移动端远程控制功能正在被广泛使用但稳定性不足。

4. **新模型（Opus 4.8/5）的配置一致性** — `output_config.effort 'xhigh'` 与 thinking 互斥问题在多个场景（API、WebSearch、Cowork）反复出现（#76689、#83364），且存在系统提示行中的默认关闭话语无法被用户配置覆盖的问题（#83439）。

5. **UI 自定义能力** — 包括斜杠命令菜单排序/固定（#83441）、ExitPlanMode 审批按钮文字自定义（#83438）、Windows ARM64 上支持 `/desktop` 会话迁移（#83437）。社区希望更深度地定制 CLI 交互细节。

## 开发者关注点

高频出现的痛点和共性诉求：

- **静默失败是最普遍的信任杀手** — 指令回退（#40175）、草稿丢弃（#71603、#77010）、子代理权限模式不传播（#83421）、模型重复循环不报错（#82803）——这些问题的共同特征是"不报错，只是悄悄做错事"。

- **权限模式传播不彻底** — `bypassPermissions` 模式下主会话正常，但 Task/Agent 子代理仍按 default 模式反复弹权限确认（#83421）。多层级权限继承是刚需。

- **模型对显式指令的遵从性令人担忧** — 从 CLAUDE.md 指令被忽略（#69908、#2805），到捏造系统提醒（#83442），再到韩文字节替换（#82588），开发者普遍反映"已经写进配置了却不生效"。

- **新模型引入的回归问题** — Opus 4.8/5 的 effort 配置冲突（#76689、#83364）、模型输出质量缺陷（#82588）等，有一定数量的报告指向新模型在特定配置下反而不如旧模型稳定。

- **平台支持短板** — Windows 蓝屏问题（#32870）持续近 5 个月未修复、Windows ARM64 缺少 `/desktop` 支持（#83437）、Linux 下 CRLF 问题（#2805）拖了一年——跨平台一致性仍是社区抱怨最集中的区域。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-08-03**


## 今日速览

今日无新版本发布。社区热度最高的动态是 **Linux 桌面应用支持请求（#11023）** 以 906 👍 / 197 评论继续霸榜，成为当前最强烈的功能诉求；同时 **VS Code 中 Codex Diff 崩溃问题**（#35058、#35481）在 macOS 和 Windows 双平台集中爆发，严重影响代码审查流程。此外，多个关于**后台轮询与状态检查导致 token 浪费**的 Issue（#13733、#35259）成为社区讨论新焦点，数据量化揭示了额度消耗的严重性。


## 社区热点 Issues

### 1. Codex Linux 桌面应用支持（🔥 社区第一诉求）
- **#11023** [enhancement, app] Codex desktop app for Linux
- 作者：Suhaibinator | 评论：197 | 👍：906
- **摘要**：用户喜爱新版 Codex 应用，但由于 macOS 上的已知问题（#10432）几乎无法使用，希望在 Linux 桌面上使用该应用，以降低功耗。
- **重要性**：900+ 点赞和近 200 条评论，是当前社区最强功能需求信号。
- 链接：https://github.com/openai/codex/issues/11023

### 2. VS Code 中 Codex Diff 崩溃（macOS）
- **#35058** [bug, extension] Codex Diff crashes with "Oops, an error has occurred" in VS Code on macOS
- 作者：Furgon | 评论：45 | 👍：115
- **摘要**：Codex 编辑文件后，打开 "Codex Diff" 标签页即报错，所有仓库均可复现。环境：macOS Apple Silicon、VS Code 1.128.0、扩展 26.721.30844。
- **重要性**：115 👍 + 45 评论，IDE 集成的核心功能不可用，严重阻塞日常开发。
- 链接：https://github.com/openai/codex/issues/35058

### 3. 后台进程轮询浪费 token
- **#13733** [bug, rate-limits, tool-calls, session] Background process polling wastes tokens: each write_stdin poll triggers full API turn with complete history
- 作者：jitlabs-sg | 评论：35 | 👍：30
- **摘要**：后台进程（如 `cargo build`）运行时，Codex 进入轮询循环，**每次状态检查都触发携带完整历史的 API 往返**，token 消耗 = 历史大小 × 轮询次数。
- **重要性**：直击 token 成本痛点，35 条评论包含多种复现场景。
- 链接：https://github.com/openai/codex/issues/13733

### 4. Codex Diff 崩溃（Windows 平台呼应）
- **#35481** [CLOSED] [bug, code-review, windows-os, extension] Codex Diff shows "Oops, an error has occurred" in VS Code
- 作者：hajaraph | 评论：14 | 👍：46
- **摘要**：Windows 平台 VS Code 扩展 26.721.41059 中，打开 Codex Diff 视图同样报错（Plus 订阅）。
- **重要性**：与 #35058 形成跨平台问题闭环，46 👍 说明影响面广，虽然已关闭但值得跟进修复验证。
- 链接：https://github.com/openai/codex/issues/35481

### 5. Windows 桌面应用性能极慢
- **#23198** [bug, windows-os, app, performance] Codex Desktop on Windows is extremely slow even when the computer is fine
- 作者：Yemvis | 评论：21 | 👍：47
- **摘要**：Windows 桌面应用日常使用极慢，问题隔离在 Codex 应用本身而非机器性能。
- **重要性**：47 👍，Windows 用户核心体验问题，已持续近 3 个月未关闭。
- 链接：https://github.com/openai/codex/issues/23198

### 6. GPT-5.6 Sol 上下文窗口被目录限制
- **#31860** [bug, context, app] [Critical][Codex App] GPT-5.6 Sol is catalog-capped at 372K (353.4K effective) vs the 1.05M model spec
- 作者：violet-go | 评论：12 | 👍：25
- **摘要**：Codex App 26.707.30751 中，GPT-5.6 Sol 的上下文被限制在 372K（有效 353.4K），而模型规格为 1.05M。
- **重要性**：Critical 标签，模型能力未完全释放，影响长上下文任务。
- 链接：https://github.com/openai/codex/issues/31860

### 7. Desktop 等待/状态轮询消耗大量额度
- **#35259** [bug, rate-limits, tool-calls, app, subagent] Codex Desktop repeatedly re-enters the model during wait/status polling, consuming substantial credits
- 作者：dimasyankauskas | 评论：11 | 👍：2
- **摘要**：在 Ultra 和多智能体工作中，Desktop 仅为等待代理或轮询终端状态就反复进入模型。实测**等待/状态轮询的 turn 占原始本地 token 量的 19.8%**。
- **重要性**：量化数据有力佐证了 #13733 的轮询浪费问题，属于系统性问题。
- 链接：https://github.com/openai/codex/issues/35259

### 8. Windows Computer Use 截图功能失败
- **#25178** [bug, windows-os, app, computer-use] Windows Computer Use screenshot fails on Windows 10 22H2 when SetIsBorderRequired is called
- 作者：Define1165250535 | 评论：21 | 👍：12
- **摘要**：Computer Use 可列出应用、激活窗口、读取辅助功能文本和发送键盘输入，但任何截图请求都失败，报错 `SetIsBorderRequired failed: 不支持此接口 (0x80004002)`。
- **重要性**：Computer Use 核心功能在 Windows 10 上不可用，兼容性问题典型。
- 链接：https://github.com/openai/codex/issues/25178

### 9. Claude Code 式远程控制功能请求
- **#27565** [enhancement, CLI, app-server, remote] Claude Code-like remote control
- 作者：matssk | 评论：9 | 👍：12
- **摘要**：希望像 Claude Code 一样，输入 `/remote-control` 即可在移动应用打开，无需 SSH 隧道，并在 CLI 和移动端同步消息。
- **重要性**：反映社区对跨设备远程控制工作流的需求增长。
- 链接：https://github.com/openai/codex/issues/27565

### 10. 自定义会话保留期
- **#6015** [enhancement, session] Customizable retention period for sessions
- 作者：BobbyWang0120 | 评论：6 | 👍：15
- **摘要**：希望 Codex CLI 按用户定义的保留窗口定期清理旧会话历史文件，避免历史文件夹无限膨胀。
- **重要性**：2025-10 提出的长期需求，存储管理问题持续存在。
- 链接：https://github.com/openai/codex/issues/6015


## 重要 PR 进展

### 1. 捕获 rollout 预算单位（已合并）
- **#36641** [CLOSED] Capture rollout budget units from response usage
- 作者：copyberry[bot] | 更新：2026-08-03
- **内容**：从 Responses API 使用数据中解析 `codex_rollout_budget_units` 到 `TokenUsage`，并确保该 provider 私有值不进入序列化协议、JSON schema 或 TypeScript 表示。
- **意义**：提升 token 使用追踪精度，为额度管理提供更细粒度数据。
- 链接：https://github.com/openai/codex/pull/36641

### 2. 限制 executor 控制的 HTTP 响应缓冲（安全加固）
- **#31781** [OPEN] [code-reviewed] Bound executor-controlled HTTP response buffering
- 作者：jif-oai | 更新：2026-08-02
- **内容**：远程 exec-server 是不可信进程。此前流式 HTTP 响应仅按帧数限制，每帧可携带接近完整 JSON-RPC 消息限制的数据。此 PR 在 256 帧背压之外增加字节级缓冲上限。
- **意义**：安全加固，防止恶意/异常 exec-server 导致 app-server 内存膨胀。
- 链接：https://github.com/openai/codex/pull/31781

### 3. 支持便携式 Agent 插件安装（已合并）
- **#36544** [CLOSED] Support portable Agent Plugins throughout installation
- 作者：copyberry[bot] | 更新：2026-08-02
- **内容**：Agent 插件使用 schema 声明的根 `plugin.json`，可含点号名称或不符合 Codex 目录安全版本格式的版本号。此 PR 修复打包和安装路径中遗留清单布局的假设，支持便携式插件。
- **意义**：完善插件生态，支持更灵活的插件分发格式。
- 链接：https://github.com/openai/codex/pull/36544

### 4. 保留 SQLite 线程元数据（已合并）
- **#36632** [CLOSED] Preserve SQLite thread metadata during goal mutations
- 作者：copyberry[bot] | 更新：2026-08-02
- **内容**：设置/清除线程目标时可能重新协调已索引 rollout 并覆盖 SQLite-only 线程元数据（含线程预览）。修复方式：SQLite 已引用同一事件时跳过 rollout 协调。
- **意义**：修复数据一致性 bug，避免线程预览等元数据意外丢失。
- 链接：https://github.com/openai/codex/pull/36632

### 5. 登录完成通知中暴露入门提示（已合并）
- **#36635** [CLOSED] Expose onboarding hints in login completion notifications
- 作者：copyberry[bot] | 更新：2026-08-02
- **内容**：接受 OAuth 状态上的白名单 `.onboarding_entrypoint=life_sciences` 后缀，同时继续拒绝未知或格式错误的后缀；登录服务器返回解析后的回调元数据，不包含敏感信息。
- **意义**：支持特定场景（life_sciences）的登录引导流程。
- 链接：https://github.com/openai/codex/pull/36635

### 6. 自动更新 models.json
- **#31817** [OPEN] Update models.json
- 作者：github-actions[bot] | 更新：2026-08-03
- **内容**：自动化更新模型目录文件。
- **意义**：持续同步新模型配置，是模型支持的基础保障。
- 链接：https://github.com/openai/codex/pull/31817


## 功能需求趋势

从近期 Issues 中提炼出以下社区最关注的功能方向：

1. **Linux 平台支持**：Linux 桌面应用请求（#11023）以 906 👍 高居榜首，是当前最强烈的功能诉求。
2. **远程控制与会话同步**：Claude Code 式远程控制（#27565）和远程会话同步问题（#36244）表明跨设备工作流需求上升。
3. **资源消耗优化**：token 浪费（#13733、#35259）、内存膨胀（#34863）、性能退化（#22411、#23198）等资源问题集中爆发，优化资源使用是社区核心关切。
4. **上下文窗口能力释放**：GPT-5.6 Sol 的 372K 目录上限（#31860）与 Max 推理努力在扩展中缺失（#35763）说明用户希望完整使用模型能力。
5. **会话生命周期管理**：自定义会话保留期（#6015）解决历史文件无限增长问题，是长期未被满足的需求。
6. **MCP 服务器深度集成**：stdio MCP 服务器工具未暴露到 Desktop 线程（#19425），说明 MCP 生态的集成质量需要提升。


## 开发者关注点

1. **Codex Diff 稳定性**：macOS（#35058）和 Windows（#35481）均报告 "Oops, an error has occurred"，已严重影响 VS Code 用户的代码审查工作流。
2. **Windows 平台体验欠佳**：性能极慢（#23198）、WSL 仓库被误判为非 Git（#35119）、沙箱权限问题（#10090）、Computer Use 截图失败（#25178）、远程压缩断开（#32545）——Windows 是问题重灾区。
3. **token 消耗透明度**：后台轮询导致的全量 API 往返（#13733、#35259）和订阅额度异常（#29968、#29895）引发用户对成本控制的强烈担忧。
4. **撤销功能历史遗留问题**：#12978 以中文发帖抱怨 undo 功能多版本未修复，反映基础功能长期缺失引发的不满。
5. **数据一致性与同步**：远程会话不同步（#36244）、分页历史记录丢失（#35746）、SQLite 元数据被覆盖（#36632 修复）等问题显示数据可靠性是关注焦点。
6. **内存与存储管理**：app-server 27 GB 内存占用、10.2 GB JSONL 文件（#34863）、所有会话文件全量加载（#22411）提示长时间使用后资源消耗问题严重。

---

**日报小结**：今日社区情绪集中在两大主题——**功能扩展**（Linux 支持、远程控制、上下文释放）与 **体验修复**（Codex Diff 崩溃、Windows 性能、token 浪费）。建议关注 #36641 和 #31781 两个 PR 的后续影响，它们分别回应了额度追踪精度和安全加固问题。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-08-03** | 数据来源：github.com/google-gemini/gemini-cli


## 1. 今日速览

今日发布 `v0.55.0-nightly.20260803`；社区讨论重心仍集中在 **Agent/子代理的稳定性与可靠性**，包括子代理“假成功”误报（#22323）、通用代理无限挂起（#21409）以及 Shell 命令执行后残留“等待输入”状态（#25166）等 P1 级问题。PR 方面以 Dependabot 自动依赖升级为主，其中 `@google/genai` 跨大版本升级（1.x → 2.x）值得关注。此外，Auto Memory 子系统的多项 bug 正在集中修复，是近期动向中的重要线索。


## 2. 版本发布

### Release v0.55.0-nightly.20260803.gf47d6c6f7
- **类型**：Nightly 自动构建
- **内容**：版本号自动提升，无新增手写 changelog。
- 完整变更对比：[v0.55.0-nightly.20260802...v0.55.0-nightly.20260803](https://github.com/google-gemini/gemini-cli/compare/v0.55.0-nightly.20260802.gf47d6c6f7...v0.55.0-nightly.20260803.gf47d6c6f7)


## 3. 社区热点 Issues（Top 10）

### 3.1. 子代理“假成功”误报：MAX_TURNS 被掩藏为 GOAL 成功
- **Issue**：[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **优先级**：P1 ｜ **标签**：kind/bug, area/agent
- **现象**：`codebase_investigator` 子代理在分析前就已撞上最大轮次限制，但最终上报的状态仍为 `success`，终止原因为 “GOAL”。这类“假成功”会直接污染外层 Agent 的决策过程。
- **社区反应**：12 条评论，2 👍。状态为 `need-retesting`，说明已有修复待回归验证，但问题逻辑较深，涉及子代理结果上报链路。

### 3.2. 通用代理无限挂起（Generalist agent hangs）
- **Issue**：[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **优先级**：P1 ｜ **标签**：kind/bug, area/agent
- **现象**：一旦 Gemini CLI 将任务委派给 generalist agent，就可能永久挂起——简单的“创建文件夹”操作都能卡住，用户最长等待 1 小时后手动取消。在提示中禁止使用子代理即可绕过。
- **社区反应**：8 条评论，8 👍（当前 Issue 列表中点赞最高）。这是一个严重的可靠性问题，直接削弱多 Agent 协作的核心能力。

### 3.3. Shell 命令执行完成后卡在“Waiting input”
- **Issue**：[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **优先级**：P1 ｜ **标签**：kind/bug, area/core
- **现象**：简单 CLI 命令执行完毕后，终端仍显示命令处于活动状态，且提示 “Awaiting user input”。该问题可稳定复现，严重影响无人值守场景。
- **社区反应**：4 条评论，3 👍。多个用户确认遇到相同现象。

### 3.4. 模型不主动使用 Skills 和子代理
- **Issue**：[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **优先级**：P2 ｜ **标签**：kind/bug, area/agent
- **现象**：社区用户反馈，即使配置了 `gradle`、`git` 等自定义技能，Gemini 在相关场景下也基本不会主动调用，只有明确要求时才生效。
- **社区反应**：6 条评论。这说明多 Agent 框架的“自动路由”能力距离实用仍有差距。

### 5.5. 符号链接形式的 Agent 定义无法识别
- **Issue**：[#20079](https://github.com/google-gemini/gemini-cli/issues/20079) | **优先级**：P2 ｜ **标签**：kind/bug, area/agent
- **现象**：`~/.gemini/agents/` 目录下的 Agent 定义文件如果是以符号链接（symlink）形式存在，则无法被识别为合法 Agent。
- **社区反应**：4 条评论。用户希望 CLI 工具遵循 Unix 常规，透明地支持 symlink。

### 3.6. 超过 400 个工具时触发 400 错误
- **Issue**：[#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **优先级**：P2 ｜ **标签**：kind/bug, area/agent
- **现象**：当启用工具数量超过约 400 个时，Gemini CLI 会直接产生 400 错误。Issue 也建议模型应更智能地按需裁剪工具范围。
- **社区反应**：3 条评论。属于规模型用户的典型痛点，随 MCP 生态扩展会越发常见。

### 3.7. 子代理在 v0.33.0 后未经许可被自动启用
- **Issue**：[#22093](https://github.com/google-gemini/gemini-cli/issues/22093) | **优先级**：P2 ｜ **标签**：kind/bug, area/agent
- **现象**：用户将版本升级至 v0.33.0 后，在配置中明确禁用 Agents 的情况下，`generalist` 等子代理仍被自动调用。用户预期子代理不应在禁用状态下运行。
- **社区反应**：3 条评论。这是一条涉及权限边界的回归问题，值得重视。

### 3.8. Auto Memory 无限重试低信号会话
- **Issue**：[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **优先级**：P2 ｜ **标签**：kind/bug, area/agent
- **现象**：Auto Memory 仅在提取代理成功读取 transcript 时才将会话标记为“已处理”。若代理因内容低信号而决定不读取，该会话将反复被重新提出，导致无限重试，造成资源浪费。
- **社区反应**：5 条评论。与 #26523/#26525/#26516 同属内存系统专项修复组。

### 3.9. 模型频繁在随机目录创建临时脚本
- **Issue**：[#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | **优先级**：P2 ｜ **标签**：kind/bug, area/agent
- **现象**：模型在受限 Shell 执行模式下，倾向于在各种目录中生成多个临时编辑脚本，给用户整理工作区（如准备干净提交）带来明显负担。
- **社区反应**：3 条评论。反映出模型“写临时文件”的策略缺乏统一管理。

### 3.10. 代理应主动阻止破坏性行为
- **Issue**：[#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | **优先级**：P2 ｜ **标签**：kind/bug, area/agent
- **现象**：在复杂 Git 操作、数据库维护等场景下，模型偶尔会使用 `git reset`、`--force` 等较激进命令，尽管存在更安全的替代方案。
- **社区反应**：3 条评论，1 👍。社区希望引入安全护栏机制，让代理在危险操作前主动暂停并向用户确认。

> 其他值得关注：#22745（AST 感知读文件、搜索的可行性调研）、#26525（Auto Memory 确定性脱敏，安全性相关）、#21983（Wayland 下浏览器子代理崩溃）。


## 4. 重要 PR 进展（Top 10）

### 4.1. 修复 VSCode IDE Companion 的 Disposable 泄漏
- **PR**：[#28526](https://github.com/google-gemini/gemini-cli/pull/28526)（Open，size/s）
- **修复内容**：修复 `activate()` 中因括号误用导致 `gemini.diff.accept` 命令注册与 `onDidChangeWorkspaceFolders` 监听的 Disposable 未被正确 push 的缺陷（对应 Issue #27790）。该 bug 可能造成重复注册或资源泄漏。
- **分析**：虽然改动小，但属于典型的“括号吃掉了 `push` 参数”类隐蔽 bug，官方已回复 nudge 跟进，说明能稳定合入。

### 4.2. 阻止布尔型 Thought 泄漏为 `[Thought: true]` 文本
- **PR**：[#28624](https://github.com/google-gemini/gemini-cli/pull/28624)（Open，size/m）
- **修复内容**：修复 `packages/core/src/code_assist/converter.ts` 中 `part.thought` 为布尔值 `true` 时，内部思维内容被错误地以 `[Thought: true]` 形式泄漏到用户可见文本的问题（对应 Issue #23525）。
- **分析**：内部思维泄漏可能是模型响应解析环节的格式兼容问题，此修复对输出清洗有意义。

### 4.3. `@google/genai` 跨大版本升级：1.30.0 → 2.13.0
- **PR**：[#28631](https://github.com/google-gemini/gemini-cli/pull/28631)（Closed）
- **内容**：Dependabot 将核心官方的 GenAI JS SDK 从 1.x 到 2.x 大版本升级。
- **分析**：即使 2.x 可能保持 API 兼容，大版本跳变仍可能隐含行为变更，建议后续 nightly 运行中关注回归信号。

### 4.4. npm 依赖大版本批量升级（75 项）
- **PR**：[#28626](https://github.com/google-gemini/gemini-cli/pull/28626)（Closed，size/xl）
- **内容**：Dependabot 对 npm-dependencies 组的 75 个包一次性升级，涉及 `simple-git`、`@modelcontextprotocol/sdk` 等。
- **分析**：这类聚合 PR 通常依赖 CI 全量验证，风险集中在主版本跨度较大的包中，建议关注后续 Nightly Release 是否有相关回退。

### 4.5. CI 修复：npm publish 后重试移除 staging-tmp dist-tag
- **PR**：[#28534](https://github.com/google-gemini/gemini-cli/pull/28534)（Open，priority/p1，size/l）
- **修复内容**：Nightly 发布流程 #28533 失败——Wombat/npm 在大包 `@google/gemini-cli-core` 的 dist-tag 可查询前就提前确认了发布，导致随后的 `npm dist-tag rm staging-tmp` 报 “not a dist-tag”。此 PR 新增 `scripts/remove-npm-dist-tag.sh` 并重试机制。
- **分析**：属于发布基础设施的可靠性问题，方向正确。

### 4.6. 性能测试全局设置改用 `resolveRipgrepPath()`
- **PR**：[#28535](https://github.com/google-gemini/gemini-cli/pull/28535)（Open，priority/p1，size/s）
- **内容**：适配 ripgrep API 的变化，用 `resolveRipgrepPath()` 替换已移除的 `canUseRipgrep()`，防止 perf 测试在 setup 阶段崩溃。

### 4.7. 工具名称查找前先裁剪空白字符
- **PR**：[#28438](https://github.com/google-gemini/gemini-cli/pull/28438)（Closed，size/xs）
- **内容**：在 script tool registry 解析前对工具名做 trim，并补充了空白补位工具名的回归测试。
- **分析**：从根因上消除了因模型输出带多余空格导致工具解析失败的场景。

### 4.8. VirtualizedList 虚拟列表优化（大型 PR）
- **PR**：[#27070](https://github.com/google-gemini/gemini-cli/pull/27070)（Open，priority/p1，size/xl）
- **内容**：面向终端渲染，包含 VirtualizedList 优化、滚动 checkpoint 优化、rebased 后修复测试、修复 plan-mode 测试与更新的工具权限期望、接入 `onStaticRender` 等。
- **分析**：由核心贡献者 jacob314 主导，方向是提升大历史会话的渲染性能与流畅度，但体量大，合入周期较长。

### 4.9. GitHub Actions 依赖组升级（3 项）
- **PR**：[#28450](https://github.com/google-gemini/gemini-cli/pull/28450)（Open，size/s）
- **内容**：升级 `lycheeverse/lychee-action`、`preactjs/compressed-size-action` 与 `google-github-actions/run-gemini-cli` 三个 Action。

### 4.10. Nightly 版本号自动提升
- **PR**：[#28638](https://github.com/google-gemini/gemini-cli/pull/28638)（Open，size/s）
- **内容**：标准的 nightly 版本号 bump 提交，标志新一天的自动化构建流程已启动。


## 5. 功能需求趋势

从今日 50 条活跃 Issue 中可以提炼出以下社区最关注的功能方向：

**① Agent/子代理可靠性与可控性（占比最高）**
- 子代理“假成功”误报（#22323）、子代理挂起（#21409）、未授权自动启用（#22093）等问题高频出现。
- 社区核心诉求：结果上报要真实反映中断/失败，Agent 行为要严格遵守权限配置，不能“自行其是”。

**② 内存系统（Auto Memory）质量与安全**
- #26522（无限重试）、#26523（无效补丁静默跳过）、#26525（确定性脱敏）、#26516（综合 bug 追踪）构成一个专门的内存质量专项组。
- 方向：让记忆提取过程具备可观测性（看到哪些被处理/丢弃）、确定性脱敏（避免未经脱敏的 transcript 进入模型上下文），以及提高补丁处理的鲁棒性。

**③ 浏览器子代理的韧性与兼容性**
- Wayland 下崩溃（#21983）、锁定的 Browser profile 无法自动接管（#22232）、`settings.json` 覆盖项不生效（#22267）。
- 方向：跨平台兼容（Wayland）、自动恢复机制、配置热加载一致性。

**④ 代码理解深度：AST 感知的工具链**
- #22745（AST 感知读文件/搜索/代码映射的可行性）、#22746（AST 感知 CLI 工具，推荐 tilth 或 glyph）。
- 方向：让模型更精准地定位方法边界、减少 token 浪费、提升大规模代码库的导航效率。

**⑤ 安全护栏与防误操作**
- #22672（阻止破坏性 Git/DB 操作）、#20079（symlink 支持，属于更广泛的 Unix 文件语义一致性）。
- 方向：在模型自主操作中加入危险命令拦截/确认机制，保护用户工作区安全。

**⑥ 依赖与运行环境的现代化**
- 大量 Dependabot PR 将 `chalk`、`eslint`、`yargs`、`undici`、`js-yaml`、`globals`、`marked` 等核心依赖推至最新大版本。
- 其中 `chalk` 5 → 6 与 `eslint` 9 → 10、`@google/genai` 1 → 2 均为 breaking 级升级，社区正在经历一轮依赖底座更新。


## 6. 开发者关注点

从 Issue 与评论中提炼出当前开发者反馈最集中的痛点：

| 痛点 | 出现频率 | 典型 Issue |
|---|---|---|
| **Agent 无限挂起 / 无响应** | 高 | #21409、#25166、#22465（vite 交互卡住） |
| **子代理结果不可信（假成功、越权、不自动调用）** | 高 | #22323、#22093、#21968 |
| **内存系统不可解释 / 重复处理 / 安全隐忧** | 中高 | #26522、#26523、#26525 |
| **工具扩张导致 API 报错或 token 浪费** | 中 | #24246（400 错误）、#23571（乱建临时脚本） |
| **终端渲染与交互体验问题** | 中 | #24935（外部编辑器退出后损坏）、#21924（resize 性能/闪烁） |
| **浏览场景支持不成熟** | 中 | #21983（Wayland）、#22267（settings.json 忽略） |

**技术分析师点评**：当前 Gemini CLI 的功能重心已明显转向 **多 Agent 协同的工程化治理**——从“能跑通”走向“可观测、可控制、可预测”。社区对 Auto Memory 透明度和安全性的投诉正在形成合力，预计官方近期会以专项小组形式集中推进内存系统与子代理可靠性的修复。另一方面，自动化依赖机器人带来的大版本升级风暴值得持续观察，尤其是 `@google/genai` 2.x 是否引入行为变化，建议关注未来 1–2 个 nightly 的回归表现。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-08-03）

## 今日速览

今日社区讨论集中在三方面：一是 1.0.73 版本引入的 `view` 工具回归 bug，已影响基础文件读取能力；二是新模型 `gpt-5.6-luna` 在 `/models` 中可见但无法通过 OpenAI 兼容的 `/chat/completions` 端点调用，破坏了聚合器类工具链；三是多个与会话管理相关的交互问题集中出现（autopilot 恢复失败、暂存输入丢失、取消输入仍被处理），表明会话状态机仍有待完善。

## 版本发布

过去 24 小时内无新版本发布。

## 社区热点 Issues

1. **回归：内置 view 工具对已存在文件误报 “Path does not exist”**（#4202）
   Copilot CLI 1.0.73 中，内置 `view` 工具对已存在的文本文件错误报告路径不存在，而 1.0.71 可正常执行。问题自 1.0.72 引入，1.0.73 仍存在，已收到 3 条评论，社区关注度较高。
   [github/copilot-cli Issue #4202](https://github.com/github/copilot-cli/issues/4202)

2. **gpt-5.6-luna 在 /models 可见但无法通过 /chat/completions 调用**（#4337）
   新模型 `gpt-5.6-luna` 在 Models API 中可见，但标准 OpenAI 兼容的 `/chat/completions` 端点不可用，仅 `/responses` 有效，破坏了依赖 chat completions 的 MoA/聚合器工具。0 条评论，今日新提交。
   [github/copilot-cli Issue #4337](https://github.com/github/copilot-cli/issues/4337)

3. **取消的用户输入仍被代理当作有效轮次处理（autopilot 模式）**（#4336）
   用户取消排队输入后，文本未被丢弃，而是携带原始时间戳混入后续消息块，代理将其当作正常用户轮次执行，无法识别该输入曾被取消。
   [github/copilot-cli Issue #4336](https://github.com/github/copilot-cli/issues/4336)

4. **[ACP] toolCall.title 隐藏实际 shell 命令，审批模态框存在安全盲区**（#4335）
   在 Agent Context Protocol（ACP）模式下（如连接 Zed），`toolCall.title` 仅展示高层自然语言摘要，客户端审批界面无法看到真实的 shell 命令字符串，给用户审批带来安全隐患。
   [github/copilot-cli Issue #4335](https://github.com/github/copilot-cli/issues/4335)

5. **暂存（ctrl+S）的输入在会话切换后丢失**（#4334）
   未提交的输入通过 `ctrl+s` 暂存后，切换会话再返回，`ctrl+s` 无法恢复任何内容，暂存文本丢失且输入框为空。
   [github/copilot-cli Issue #4334](https://github.com/github/copilot-cli/issues/4334)

6. **恢复会话时 autopilot 未真正启用（1.0.77 回归）**（#4329）
   状态栏显示 autopilot 已启用，但实际执行任何需审批的操作都会失败。影响版本 1.0.77，复现步骤已提供。
   [github/copilot-cli Issue #4329](https://github.com/github/copilot-cli/issues/4329)

7. **WSL2 下 Ctrl+H 被误判为 Ctrl+Backspace（1.0.78-2）**（#4328)
   由于 Windows Terminal 的 `WT_SESSION` 环境变量在 WSL2 中泄漏，`ctrl+h` 本应删除前一个字符，却表现出删除整个单词（等价于 `ctrl+w`）的行为。
   [github/copilot-cli Issue #4328](https://github.com/github/copilot-cli/issues/4328)

8. **tmux 中浅色主题颜色渲染完全错乱**（#4292）
   在 tmux 环境下运行 Copilot CLI，浅色主题颜色应用完全错误；直接在普通 shell 中运行则正常。属于终端渲染兼容性问题。
   [github/copilot-cli Issue #4292](https://github.com/github/copilot-cli/issues/4292)

9. **功能请求：Windows 下插件安装支持 git symlink 存根**（#2286）
   Windows 上 Git for Windows 默认 `core.symlinks=false`，插件安装克隆 marketplace 仓库时无法解析 git symlink 文本存根。2 条评论，这是长期存在的平台缺口。
   [github/copilot-cli Issue #2286](https://github.com/github/copilot-cli/issues/2286)

10. **功能请求：提供静默 “Memory is disabled” 提示的方式**（#4332）
    在 `settings.json` 中配置 `"memory": false` 后，每个新会话都会输出一行 `Memory is disabled. Use /memory on to re-enable.`，但现有设置无法关闭该提示，希望增加受支持的静默选项。
    [github/copilot-cli Issue #4332](https://github.com/github/copilot-cli/issues/4332)

## 重要 PR 进展

过去 24 小时内无 PR 更新。

## 功能需求趋势

- **模型 API 兼容性**：#4337 表明社区对 OpenAI 兼容端点的强依赖，新模型发布时必须确保 `/chat/completions` 等标准接口的一致可用性，否则会破坏下游工具链。
- **会话状态管理**：#4334（暂存丢失）、#4336（取消语义失效）、#4329（autopilot 恢复失败）集中指向同一方向：会话状态机需要更可靠的状态持久化与恢复机制。
- **终端环境兼容性**：#4328（WSL2/键盘映射）、#4292（tmux/颜色）反映出用户在不同终端环境（WSL2、tmux、Windows Terminal）中的体验一致性仍是短板。
- **Windows 平台深化支持**：#2286 显示 Windows 下插件安装的 symlink 处理仍是长期未解决的功能缺口。
- **安全可见性**：#4335 提出 ACP 模式下审批链路需要展示真实命令，而非高层摘要，这关系到 AI 工具在企业环境中的安全合规基础。

## 开发者关注点

- **回归修复优先级高**：`view` 工具在 1.0.72 引入的回归（#4202）直接影响基础文件操作，社区期待尽快修复。
- **多版本问题分散**：问题横跨 1.0.73、1.0.77、1.0.78-2 等多个版本，一些在旧版本报告的问题未在后续版本闭环。
- **跨平台行为一致性**：WSL2、Windows、tmux 等环境下的键位映射与渲染差异是高频反馈主题，开发者希望同等体验。
- **会话交互的可靠性**：输入暂存、取消、autopilot 恢复等细节影响日常使用效率，社区对状态管理的可预期性有较高要求。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 — 2026-08-03

## 1. 今日速览

过去 24 小时无新版本发布，社区讨论集中在“跨会话能力”与“并行可靠性”两个方向。已有热点【记忆系统 #1283】和【远程控制 #1282】持续累积讨论热度，同时新增了【外部唤醒通道 #2579】和【Swarm 批次容错 #2578】两项新需求。PR 方面，Monitor 流式 stdout 工具提案（#2471）今日关闭。

## 2. 社区热点 Issues

> 筛选说明：过去 24 小时更新/活跃的 Issue 共 4 个，不足常规 Top 10 数量，以下全量列出。

- **#1283 [enhancement] Memory System — 跨会话持久上下文**  
  `作者: CatKang · 创建: 2026-02-27 · 更新: 2026-08-02 · 评论: 14 · 👍: 0`  
  [GitHub Issue #1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)  
  希望实现全面的记忆系统：CLI 自动记录项目上下文、代码模式与用户偏好，并同时支持“自动记忆（AI 管理笔记）”与“手动记忆（用户自定义指令）”两种形态。14 条评论说明大量用户正在补充具体场景，是当前社区讨论最充分的议题之一，核心价值在于终结“每个新会话都要重新解释一遍项目背景”的低效循环。

- **#1282 [enhancement] Remote Control — 任意设备接续本地会话**  
  `作者: CatKang · 创建: 2026-02-27 · 更新: 2026-08-02 · 评论: 11 · 👍: 24`  
  [GitHub Issue #1282](https://github.com/MoonshotAI/kimi-cli/issues/1282)  
  获得 24 个 👍，是近期社区认可度最高的增强方向之一。用户希望从手机、平板或任何浏览器远程接管本地运行的 Kimi Code CLI 会话，在离开工位后依然保持完整的本地环境与上下文连续。这是“移动办公 + AI 编码代理”场景下很自然的延伸需求。

- **#2579 [Feature] 为运行中的交互式会话增加外部唤醒通道**  
  `作者: munich35 · 创建: 2026-08-02 · 更新: 2026-08-02 · 评论: 0 · 👍: 0`  
  [GitHub Issue #2579](https://github.com/MoonshotAI/kimi-cli/issues/2579)  
  提出了一种“Agent 邮箱”集成模式：用户将 Kimi CLI 作为交互式 TUI 常驻运行，其他 agent（同机或 SSH 远程）通过向收件箱目录写入 Markdown 消息，由 inotifywait 监听后推送给 CLI。该需求反映了真实的多 Agent 协作场景——CLI 不再只是被人类驱动，也要能被其他自动化 agent 唤醒。

- **#2578 [swarm] 批次中途 403/超时导致半成品丢失与后续阻塞**  
  `作者: myagizmaktav · 创建: 2026-08-02 · 更新: 2026-08-02 · 评论: 0 · 👍: 0`  
  [GitHub Issue #2578](https://github.com/MoonshotAI/kimi-cli/issues/2578)  
  严重性较高的稳定性反馈：swarm/并行子 agent 在遇到配额错误（HTTP 403）或固定超时时，受影响子任务的工作区会留下残缺状态（route 文件、样式、服务端函数等处于中间态）。恢复重试不仅重新消耗 token，还可能因状态冲突阻塞后续任务。开发者需要的是断点续跑、隔离失败或状态回滚机制。

## 3. 重要 PR 进展

> 筛选说明：过去 24 小时更新/活跃的 PR 共 1 个，全量列出。

- **#2471 [closed] feat(tools): 新增 Monitor 工具，支持逐行 stdout 流式输出**  
  `作者: Nitjsefnie · 创建: 2026-06-22 · 更新: 2026-08-02`  
  [GitHub PR #2471](https://github.com/MoonshotAI/kimi-cli/pull/2471)  
  为现有后台任务能力补充流式对应的 `Monitor` 工具，要求以逐行（line-by-line）方式读取子进程/后台命令的 stdout 输出，适合日志聚合、长时间运行任务的实时监控。该 PR 以功能提案形式提交，当前状态为已关闭（是否合并请以官方仓库最终状态为准）。

## 4. 功能需求趋势

从当前活跃议题中可以提炼出四个明确的社区诉求方向：

1. **持久记忆（Memory）**：会话间记住项目上下文、模式与偏好，让 CLI 从“一次性对话助手”进化为“长期协作开发代理”（#1283）。
2. **多端/远程会话连续性（Remote）**：本地启动的会话应能被手机/平板/浏览器远程接管，适配移动办公与跨设备工作流（#1282）。
3. **Agent 互操作与外部触发（Inter-agent）**：除人工输入外，其他 agent 或外部脚本应能通过标准机制（如文件、消息）唤醒或驱动交互式会话（#2579）。
4. **Swarm 批处理韧性（Reliability）**：在 403 配额错误、超时等中断场景下，需要更安全的失败处理与恢复策略，避免半成品状态和 token 浪费（#2578）。

## 5. 开发者关注点

- **上下文连续是最大痛点**：#1283 的 14 条评论集中在“每次新 session 丢失上下文”的重复劳动上，用户期望 AI 能自动维护项目知识库，而不是每次重新喂背景资料。
- **跨设备延续会话有真实需求**：#1282 的 24 个 👍 表明，大量用户会在移动端查看或遥控桌面端任务，跨设备无缝衔接是高频使用场景。
- **成本与状态一致性高度敏感**：#2578 明确指出“部分工作丢失 + 重试重复消耗 token + 半成品阻塞后续任务”，说明并行批处理的错误处理设计直接影响开发者的真实预算和开发效率。
- **本地自动化生态正在成型**：#2579 证明用户已经在自建基于目录/消息的 Agent 协作协议。如果官方提供标准化的外部唤醒接口，Kimi Code CLI 将更容易融入用户已有的自动化工作流中。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-08-03）

## 1. 今日速览

- 过去 24 小时无新版本 Release，社区焦点集中在内存与磁盘占用相关问题的持续发酵（#20695、#28089、#39876）。
- 今日提交的 PR 以稳定性修复为主，覆盖持久化写放大、OpenAI OAuth 竞态、Unicode 补丁匹配等关键问题。
- 功能需求方面，语音输入、DeepSeek 中国区模型访问限制、隐私政策调整成为开发者讨论热点。

## 2. 版本发布

过去 24 小时无新版本 Release。

## 3. 社区热点 Issues

### 1. #20695 Memory Megathread（内存问题集中讨论帖）
- 状态：OPEN | 评论 121 | 👍 94
- 摘要：内存问题报告分散，社区集中收集堆快照以定位泄漏，运维人员要求不要用 LLM 猜测解决方案。
- 链接：https://github.com/anomalyco/opencode/issues/20695

### 2. #4695 Speech-to-Text Voice Input（语音输入功能请求）
- 状态：CLOSED | 评论 36 | 👍 170
- 摘要：用户提议为“懒人”增加语音输入功能，获得极高点赞，虽已关闭但反映了强烈的免提交互需求。
- 链接：https://github.com/anomalyco/opencode/issues/4695

### 3. #39845 DeepSeek V4 Flash 突然要求启用“中国区托管模型”
- 状态：OPEN | 评论 11 | 👍 18
- 摘要：OpenCode Go 订阅用户会话中途报错，要求显式开启中国区托管选项，影响现有工作流。
- 链接：https://github.com/anomalyco/opencode/issues/39845

### 4. #39861 零数据保留政策被移除
- 状态：OPEN | 评论 8 | 👍 15
- 摘要：OpenCode Go 文档中“zero-retention policy”描述被删除，用户对数据隐私变化表示担忧。
- 链接：https://github.com/anomalyco/opencode/issues/39861

### 5. #23595 system-reminder 位置频繁变动导致 llama.cpp 缓存失效
- 状态：OPEN | 评论 7 | 👍 11
- 摘要：系统提醒在多轮对话中位置漂移，造成 prompt 历史变化，严重拖慢 llama.cpp 缓存命中。
- 链接：https://github.com/anomalyco/opencode/issues/23595

### 6. #28089 临时 .so 文件泄漏占用数百 GB
- 状态：OPEN | 评论 7 | 👍 7
- 摘要：OpenCode 在 /tmp 下生成临时 ELF 共享对象且不清理，长期运行可耗尽磁盘。
- 链接：https://github.com/anomalyco/opencode/issues/28089

### 7. #37239 2.0 service 重启陷入静默重试循环
- 状态：OPEN | 评论 5 | 👍 0
- 摘要：`opencode2 service restart` 间歇性触发旧进程被终结后 `serve --service` 连续静默重启约 16 次，只能手动杀进程。
- 链接：https://github.com/anomalyco/opencode/issues/37239

### 8. #37745 OpenAI 缓存写入始终报告为 0
- 状态：OPEN | 评论 4 | 👍 0
- 摘要：自 OpenAI 5.6 对缓存写入计费后，OpenCode 仍将 cache writes 显示为 0，影响费用追踪。
- 链接：https://github.com/anomalyco/opencode/issues/37745

### 9. #37821 SQLite 数据库损坏导致启动崩溃
- 状态：OPEN | 评论 2 | 👍 0
- 摘要：本地 SQLite 文件因断电或 WAL 写入不完整而损坏后，OpenCode 启动直接崩溃，缺少自动恢复机制。
- 链接：https://github.com/anomalyco/opencode/issues/37821

### 10. #37495 SQLite WAL 无限增长至 10–15 GB
- 状态：OPEN | 评论 2 | 👍 0
- 摘要：Desktop 端多个 SQLite 连接持有长事务，WAL 无法 checkpoint，最终写满磁盘。
- 链接：https://github.com/anomalyco/opencode/issues/37495

## 4. 重要 PR 进展

### 1. #40202 fix(app): 在项目打开对话框中搜索所有已知项目
- 摘要：修复项目选择只能搜索最近五个项目的限制，空对话框仍只显示最近项目。
- 链接：https://github.com/anomalyco/opencode/pull/40202

### 2. #40188 feat(plugin): 新增请求级 chat.model 插件钩子
- 摘要：允许插件在 provider/model/auth 解析前替换单次请求的模型，解决 #18793 与 #24006。
- 链接：https://github.com/anomalyco/opencode/pull/40188

### 3. #40199 fix(opencode): 处理 OpenAI OAuth 认证被移除的竞态
- 摘要：修复 OpenAI Codex fetch 包装器在 OAuth 认证被移除后仍应用请求变更的问题，并补充回归测试。
- 链接：https://github.com/anomalyco/opencode/pull/40199

### 4. #40197 fix(app): 消除持久化写放大
- 摘要：用共享仓库与 500ms checkpoint 替代 setter 触发的持久化写入，改为 SQLite WAL + IndexedDB 双后端。
- 链接：https://github.com/anomalyco/opencode/pull/40197

### 5. #40198 fix(opencode): 补丁匹配支持规范等价 Unicode
- 摘要：为 `seekSequence()` 增加最终标准化匹配，修复因文件编码等价字符导致的补丁验证失败。
- 链接：https://github.com/anomalyco/opencode/pull/40198

### 6. #40163 fix(tui): 允许提示符的 Down 箭头到达文本末尾
- 摘要：修正 textarea 的 `cursorOffset` 在显示列空间下对换行与 Tab 的计量错误。
- 链接：https://github.com/anomalyco/opencode/pull/40163

### 7. #40125 feat(opencode): 支持每个 MCP 服务器的信任配置
- 摘要：允许按 MCP server 设置信任级别，关闭多个相关历史 issue。
- 链接：https://github.com/anomalyco/opencode/pull/40125

### 8. #40184 feat(teach): 新增教学模式（WIP）
- 摘要：面向教育场景的 Teach mode，目前以测试文件形式提交，讨论实现方案。
- 链接：https://github.com/anomalyco/opencode/pull/40184

### 9. #38200 feat: 添加 Solidity 文件类型与语法高亮
- 摘要：为智能合约开发者提供 Solidity 语言支持。
- 链接：https://github.com/anomalyco/opencode/pull/38200

### 10. #34977 fix(queue): 防止被遗弃迭代导致 pending resolver 泄漏
- 摘要：当消费者提前 break/return 时，未消费项的 resolver 永不释放；增加 `close()` 方法处理。
- 链接：https://github.com/anomalyco/opencode/pull/34977

## 5. 功能需求趋势

- **语音与免手交互**：#4695 语音输入虽关闭但获 170 赞，说明用户对便捷输入方式有强烈需求。
- **模型地域与可访问性**：#39845、#40162 反映 DeepSeek 中国区限制与 GPT-5.6 部分地域不可用引发不满，社区期望透明且无区域限制的模型接入。
- **隐私与数据保留**：#39861 零数据保留政策移除后，用户开始关注 OpenCode Go 的数据存储与删除策略。
- **子代理控制**：#38966 要求能单独中止、引导或取消正在运行的子代理，提升多任务协作能力。
- **主题与 UI 定制**：#40177 提议提供类似 VS Code workbench.css 的 CSS 覆盖钩子，以支持深度主题化。
- **MCP 安全与信任**：PR #40125 与多个 issue（#40111 等）指向按 MCP 服务器独立配置信任级别，成为安全配置方面的热门方向。
- **教育场景支持**：PR #40184 的教学模式请求，表明社区在探索 Agent 用于教学的可能性。

## 6. 开发者关注点

- **磁盘与内存泄漏**：临时 .so 文件、libopentui 临时副本、SQLite WAL 无限增长、TUI 崩溃等报告密集，是当前最影响体验的问题。
- **数据库可靠性**：SQLite 损坏启动崩溃（#37821）与多连接 WAL 无法 checkpoint（#37495）共同指向需要一个更健壮的本地存储层。
- **认证与凭证管理**：切换 provider 反复询问 API key（#33775）、Copilot 每次会话重复认证（#40183）、OpenAI OAuth 竞态（#40199）说明认证流程仍需打磨。
- **桌面端体验**：Windows/macOS 桌面版存在启动卡在 onboarding、快捷键冲突、splash 无法消除等问题，影响新用户上手。
- **性能与缓存**：system-reminder 移动导致 llama.cpp 缓存失效（#23595）、OpenAI 缓存写入计费未统计（#37745）是性能与成本计算的双重痛点。
- **并发场景稳定性**：多个 VS Code 实例同时使用同一项目导致 SQLite 崩溃（#38849），高并发下的数据访问安全亟需修复。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-08-03

## 今日速览
Pi 社区昨日进入高活跃期：约 20 个 Issue 与 19 个 PR 在 24 小时内获得更新，终端兼容性（WezTerm/Termux）与 compaction 机制成为两大焦点，各占近三分之一的数量。此外，登录流程的网络健壮性问题引发多起重复报告，已形成明确的修复分支。

## 社区热点 Issues (10 条)

1. **[#6879] auto-compaction 在 context 超过 100% 后仍不触发，直到 provider 报错**
   - 作者: alexanderkreidich | 评论: 10 | 👍: 10
   - 会话运行超 2 小时后 footer 显示 context 已超 100%，但 compaction 直到 API 在 373k tokens 拒绝请求时才被触发。社区最关注的问题之一，直接关系到长会话的稳定性。
   - https://github.com/earendil-works/pi/issues/6879

2. **[#7020] Compaction 后 Pi 有时不继续执行**
   - 作者: dpetrou-continua | 评论: 7 | 👍: 2
   - 长时间运行的"协调型"会话在 compaction 之后偶发无响应，与 #6879 同属 compaction 链路的质量问题，开发者反馈频率较高。
   - https://github.com/earendil-works/pi/issues/7020

3. **[#7113] TUI 在 /login 后若 pi.dev 模型目录不可达则完全冻结**
   - 作者: Simonjks-dev | 评论: 4 | 👍: 0
   - `ModelRuntime.login()` 在 post-login 模型刷新时没有 AbortSignal 和超时控制，导致网络异常时 TUI 卡死。与 #7505、#7504 同源，均指向网络请求缺乏超时兜底。
   - https://github.com/earendil-works/pi/issues/7113

4. **[#7062] OpenAI-completions 适配层需处理数组内容和缺失的 finish_reason**
   - 作者: TomeHirata | 评论: 6 | 👍: 0
   - Databricks 的 Qwen3、gpt-oss 等模型在 tools 存在时，`delta.content` 返回的是类型化数组而非字符串，导致内容被渲染为 `[object Object]`；同时 `finish_reason` 缺失未被兼容。对使用 Databricks 的用户是直接阻断问题。
   - https://github.com/earendil-works/pi/issues/7062

5. **[#7321] 不支持 bracketed paste 的终端（如 Termux）多行粘贴失效**
   - 作者: 6mad | 评论: 2 | 👍: 1
   - 在 Termux 上粘贴含换行的文本时，第一个 `\r` 直接触发提交，而非整体插入。移动端开发用户受此影响明显，需要回退方案。
   - https://github.com/earendil-works/pi/issues/7321

6. **[#7486] WezTerm 启用 showHardwareCursor 后光标在输入框跳动**
   - 作者: fyeeme | 评论: 3 | 👍: 0
   - 此前为解决 #5200（IME 候选窗口位置）而启用的硬件光标，在 "Working..." 状态下会来回跳动，影响阅读。WezTerm 体系下的 UI 问题仍在持续修补中。
   - https://github.com/earendil-works/pi/issues/7486

7. **[#7497] 全局会话目录中的 symlink 目录被静默忽略**
   - 作者: mlosun | 评论: 2 | 👍: 0
   - `~/.pi/agent/sessions/` 下的符号链接目录不会出现在 `listSessions` 中，导致 pi-web 等外部工具看不到这些会话。对多机同步、网盘链接场景影响大。
   - https://github.com/earendil-works/pi/issues/7497

8. **[#7499] auth.json 带 UTF-8 BOM 时所有凭据被静默禁用**
   - 作者: ChianW | 评论: 1 | 👍: 0
   - Windows 下用记事本编辑 auth.json 易产生 BOM，导致所有 provider 报 "No API key found"，且无法保存新 key。配置文件的错误容忍度问题，值得工具链重视。
   - https://github.com/earendil-works/pi/issues/7499

9. **[#7504] IPv6 黑洞导致 Pi 阻塞约 5 分钟**
   - 作者: ogwhic | 评论: 1 | 👍: 0
   - 当 `pi.dev` 的 AAAA 记录是黑洞、A 记录正常时，undici 未启用 `autoSelectFamily`，所有网络操作（/model、/llama、启动探测）都卡满 5 分钟超时。网络健壮性的典型问题。
   - https://github.com/earendil-works/pi/issues/7504

10. **[#7485] 工具 schema 每次请求被序列化两次，且无关闭选项**
    - 作者: Saolence | 评论: 1 | 👍: 0
    - 同一份工具定义同时出现在 system prompt 的文本片段和 JSON tools 参数中，token 开销翻倍，对原生支持工具调用的模型没有关闭选项。涉及成本优化，预计会有后续讨论。
    - https://github.com/earendil-works/pi/issues/7485

## 重要 PR 进展 (10 条)

1. **[#7498] defer idle compaction until next prompt**
   - 作者: ogulcancelik | 状态: OPEN
   - 针对 #6879 等近期模型 context 增长更快的问题，将空闲时的自动压缩推迟到用户下一次输入时执行，避免在会话中途做无谓的压缩造成 token 浪费。
   - https://github.com/earendil-works/pi/pull/7498

2. **[#7494] fix(ai): preserve Gemini 3 tool call IDs**
   - 作者: muyiyr | 状态: OPEN
   - Gemini 3 要求功能响应中回传与请求一致的 tool call ID，而当前 `requiresToolCallId()` 只覆盖 Claude 和 GPT-OSS。此 PR 将 Gemini 3+ 纳入该机制，修复多轮工具调用的中断问题。
   - https://github.com/earendil-works/pi/pull/7494

3. **[#7493] Set AI_AGENT for child process attribution**
   - 作者: renaudhartert-db | 状态: OPEN
   - 在 CLI 与 RPC 入口处设置 `AI_AGENT=pi` 环境变量，使子进程能识别启动方是 Pi。已获得 badlogic 的 lgtm 认可，是跨 agent 协作规范的关键一步。
   - https://github.com/earendil-works/pi/pull/7493

4. **[#7503] feat(agent): add experimental in-memory sessions**
   - 作者: christianklotz | 状态: OPEN
   - 新增实验性的内存会话 API，包括 Session、SessionStorage、SessionRepository 契约与完整后端实现。会话领域的核心抽象正在推进，配合 #7396、#7478 看是一条主线。
   - https://github.com/earendil-works/pi/pull/7503

5. **[#7482] fix(tui): prefer iTerm2 inline images over kitty on WezTerm**
   - 作者: nothankyouzzz | 状态: CLOSED
   - 修复 #7481：WezTerm 对 kitty 内联图片的滚动重绘支持不佳导致图片缩成一条细线。detectCapabilities 改为在 WezTerm 上优先使用 iTerm2 协议。
   - https://github.com/earendil-works/pi/pull/7482

6. **[#7330] fix(coding-agent): resize images returned by tools**
   - 作者: tizmagik | 状态: OPEN
   - 扩展工具、MCP 桥接、浏览器工具返回的图片未经 `processImage` 处理就进入会话历史，全分辨率存储浪费 token 和对齐限制。此 PR 将 resize 逻辑覆盖到所有工具产出。
   - https://github.com/earendil-works/pi/pull/7330

7. **[#7488] fix(coding-agent): respect shellPath in minimal mode example**
   - 作者: W0w1F | 状态: CLOSED
   - 修复 minimal-mode 扩展示例忽略 settings.json 中 shellPath 的问题，在 Windows 上不再错误回退到 WSL。对扩展开发者的参考价值高。
   - https://github.com/earendil-works/pi/pull/7488

8. **[#7471] fix(ai): retry transient provider errors in Google adapters**
   - 作者: vish-pr | 状态: CLOSED
   - google-vertex 和 google-generative-ai 适配器此前对首 token 前的 429/5xx 不做重试，直接置为终态 error。此次修复与 Anthropic/OpenAI 适配器的重试行为对齐，AgentHarness 用户不再被单次抖动杀死整个线程。
   - https://github.com/earendil-works/pi/pull/7471

9. **[#7396] feat(coding-agent): add server session backend**
   - 作者: christianklotz | 状态: OPEN
   - 为 PiServer 增加持久化 session 后端，以 JSONL 存储，带跨进程锁、崩溃恢复和实时 transcript 进度广播。这是会话系统走向健壮的关键一环。
   - https://github.com/earendil-works/pi/pull/7396

10. **[#7501] Add DeepInfra provider**
    - 作者: embeddedt | 状态: CLOSED
    - 为 Pi 增加 DeepInfra 内置 provider（标准 OpenAI 兼容端点）。它本身是一个常见的标准接入案例，值得注意的是 PR 说明中特别提到"非 AI 生成"——社区对 AI 生成的 issue 质量已有警惕。
    - https://github.com/earendil-works/pi/pull/7501

## 功能需求趋势

- **Compaction 机制的精细化**：围绕"何时触发"（#6879, #7498）、"触发后是否继续"（#7020）、"失败原因可诊断"（#7492）、"企业账号兼容"（#7413）的多角度问题集中涌现，说明这是长会话用户最痛的方向。
- **终端兼容性补全**：WezTerm（#7486, #7481, #7490）、Termux（#7321）、iTerm2/xterm.js（#7465）等终端的渲染与输入细节问题持续被报告和修复，当前重点是 IME 和图片渲染。
- **新模型与新 provider 支持**：DeepInfra（#7502, #7501）、DeepSeek v4 on OpenRouter（#7476）、LLM Gateway（#7480）等接连出现，社区对接入新模型保持高热情，且多为标准 OpenAI 兼容格式。
- **Session 管理的架构升级**：in-memory sessions（#7503）、server session backend（#7396）、session storage 组合重构（#7478, #7455）等多 PR 并进，会话层正在向更通用、可嵌入的方向演进。
- **网络超时兜底缺失**：#7113、#7504、#7505 三条几乎同源的网络问题（无超时、IPv6 黑洞、刷新超时）在同一天内密集出现，社区对"卡死 5 分钟"的用户体验强烈不满。

## 开发者关注点

- **Compaction 是长会话的命门**：多条高赞 issue（#6879、#7020）聚焦 compaction 触发时机和不稳定性，用户普遍反馈"不敢长时间挂着"，希望 Pi 能在 context 超限前主动、可靠地完成压缩。
- **网络层需要有超时默认值**：认证 /login、模型目录刷新、地址族选择（IPv6/IPv4 fallback）等环节都被指出"没有超时"或"超时过长"，任何网络抖动都可能把会话卡死数分钟。
- **终端体验细节决定使用意愿**：特别是在 WezTerm 与 Termux 这类终端上，IME 候选框闪烁、硬件光标跳动、多行粘贴触发提交等问题直接影响中文用户的日常使用，解决优先级高。
- **配置文件的错误容忍度不足**：auth.json 的 UTF-8 BOM（#7499）、symlink 会话目录被忽略（#7497）等"小配置问题"会造成静默失败，浪费开发者大量排查时间。
- **工具 schema 与 token 效率**：工具定义在每次请求中重复发送（#7485），社区开始关注 prompt 成本优化，尤其是在长上下文和大工具集场景下。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-08-03）

## 今日速览

今日发布 v0.21.3 夜间版，补全 TUI 键盘快捷键文档并修复历史分页阻塞问题。安全与可靠性是本日主线：hook 系统四项信任边界修复（[#8396](https://github.com/QwenLM/qwen-code/pull/8396)）、OpenAI 中止错误识别（[#8399](https://github.com/QwenLM/qwen-code/pull/8399)）和 ConEmu 闪烁修复（[#8406](https://github.com/QwenLM/qwen-code/pull/8406)）持续推进；新增 P1 级 Windows 桌面端会话静默丢失问题（[#8400](https://github.com/QwenLM/qwen-code/issues/8400)）引人关注。Issue 讨论热度集中于外部上下文提供者（[#7585](https://github.com/QwenLM/qwen-code/issues/7585)）与 daemon 资源上限治理（[#8051](https://github.com/QwenLM/qwen-code/issues/8051)）。

## 版本发布

**v0.21.3-nightly.20260803.e1e5b42ce**（2026-08-03）

- docs: 补全 TUI 键盘快捷键参考（[PR #8327](https://github.com/QwenLM/qwen-code/pull/8327)，作者 @DragonnZhang）
- fix(core): 解除历史分页阻塞（release notes 标题截断，完整内容见 Release Notes）

## 社区热点 Issues

1. **[#7585 外部上下文提供者配置](https://github.com/QwenLM/qwen-code/issues/7585)**｜11 条评论
   提议为 Qwen Code 增加「直接外部上下文提供者配置」：面向私有 monorepo，通过两个互斥的受管配置，让单个交互式 CLI 进程能从管理员绑定的外部内存中检索仓库共享上下文。目前处于 need-discussion，是评论数最高的活跃 issue，反映大型团队对共享上下文的真实需求。

2. **[#8051 daemon 多工作区资源使用跟踪](https://github.com/QwenLM/qwen-code/issues/8051)**｜9 条评论
   生产环境 `qwen serve` daemon 现有数量和会话限制无法约束请求体、WebSocket 组装等实际字节占用，需要将资源治理从 count-only 升级为内存受限。涉及 core/performance/session-management，P2 待 triage。

3. **[#4156 qwen --serve TUI + 进程内 HTTP daemon](https://github.com/QwenLM/qwen-code/issues/4156)**｜7 条评论
   该 issue 已关闭，但作为 roadmap 仍有参考价值：目前只有 headless Mode B，用户无法在 TUI 进程运行的同时启动 daemon。3 阶段规划（Stage 1.5b）是 daemon 架构演进的重要历史上下文。

4. **[#8123 桌面客户端无法引用到正确的文件](https://github.com/QwenLM/qwen-code/issues/8123)**｜5 条评论
   桌面客户端 v0.5.5 中，项目目录存在 `KuaiShouOrderService.java`，但 `@` 引用搜索不到。属于 UI/文件操作类 P3 bug，影响桌面端日常开发效率。

5. **[#7306 工具输出预算与 artifact 生命周期硬化](https://github.com/QwenLM/qwen-code/issues/7306)**｜5 条评论
   Phase 1 正确性加固已完成（#7323 合并、#7470 补充 Shell 回归覆盖），当前进入后续契约硬化阶段。这是涉及工具输出可控性与可观测性的长期治理项。

6. **[#8376 进程名改为 qwen.exe / qwen-code.exe](https://github.com/QwenLM/qwen-code/issues/8376)**｜4 条评论
   Qwen Code 在 Windows 上以 `node.exe` 运行，外部工具难以可靠识别。提议将进程名改为 `qwen-code.exe`，属于平台/打包层面的可管理性需求。

7. **[#8281 增加 Email 渠道（IMAP + SMTP）](https://github.com/QwenLM/qwen-code/issues/8281)**｜4 条评论
   提议新增官方 Email 渠道，让用户通过专用邮箱与 Qwen Code agent 通信，第一版聚焦 provider-neutral 的 IMAP/SMTP 基础能力。

8. **[#8382 重复的 provider tool call id](https://github.com/QwenLM/qwen-code/issues/8382)**｜3 条评论
   工具调用偶发失败，报 `Duplicate provider tool call id` 与 `not recorded` 错误，且重试后环境可能继续异常。P2 会话管理类 bug，影响 agent 稳定性。

9. **[#7164 并发会话写入者可分叉转录历史](https://github.com/QwenLM/qwen-code/issues/7164)**｜P1，欢迎 PR
   两个 Qwen Code 进程恢复同一会话并 append 到同一 JSONL 转录本时，父链发散导致历史分叉，重启后只恢复一条链。属于 P1 级会话管理缺陷，官方标注欢迎 PR。

10. **[#8400 桌面端会话重启后静默自动删除](https://github.com/QwenLM/qwen-code/issues/8400)**｜P1，Windows
    桌面版 v0.0.5（Windows x64）重启后所有会话从 UI 消失。根因是 ACP 会话/加载失败时 workspace cwd 不匹配，provider message loader 返回 0 条消息，应用未经确认即删除本地会话镜像。

## 重要 PR 进展

1. **[#8396 hook 系统四项信任边界修复](https://github.com/QwenLM/qwen-code/pull/8396)**
   HTTP hooks 不再跟随重定向，关闭 URL 白名单与 DNS 级 SSRF 检查中的绕过；同时修复其他三个仓库控制配置触达代码执行/网络出口的信任边界漏洞。安全敏感度极高。

2. **[#8399 识别 OpenAI SDK APIUserAbortError](https://github.com/QwenLM/qwen-code/pull/8399)**
   让 `isAbortError` 正确识别 `APIUserAbortError`。此前 OpenAI-compatible（`auth_type=openai`）路径下，用户取消请求会被误分类，直接影响取消语义与后续 transcript 写入（关联 [#8398](https://github.com/QwenLM/qwen-code/issues/8398)、[#8356](https://github.com/QwenLM/qwen-code/issues/8356)）。

3. **[#8406 ConEmu/Cmder 启用同步输出](https://github.com/QwenLM/qwen-code/pull/8406)**
   为 ConEmu/Cmder 启用 DEC mode 2026 同步输出，消除流式输出全屏闪烁（对应 [#8385](https://github.com/QwenLM/qwen-code/issues/8385)）；同时加入 WT_SESSION 检测以支持 Windows Terminal（[#7634](https://github.com/QwenLM/qwen-code/issues/7634)）。

4. **[#8274 支持从任意会话位置 fork](https://github.com/QwenLM/qwen-code/pull/8274)**
   此前分支只基于最新会话状态，无法可靠定位更早的 Assistant 回复。该 PR 将可见消息作为分支点时考虑工具调用、取消、元数据记录、分页、rewind 与并发写入，提升分支安全性。

5. **[#8332 CLI 附件音频桥接](https://github.com/QwenLM/qwen-code/pull/8332)**
   当主模型不支持音频时，交互式与 headless 的 `@` 附件及 ACP 音频提示通过配置的批量语音模型转录，并替换为显式「不可信机器转录」内容。

6. **[#8350 支持可信私有 ASR base URL](https://github.com/QwenLM/qwen-code/pull/8350)**
   新增 `security.allowedInsecureVoiceBaseUrls` 空默认精确白名单，允许受管部署将语音转录路由到 HTTP/私有网络 ASR 网关，同时维持默认全部拒绝策略。

7. **[#8276 延迟工具发现时保持 prompt cache](https://github.com/QwenLM/qwen-code/pull/8276)**
   在延迟工具发现过程中保持主会话 provider 工具声明与缓存的系统指令稳定；`tool_search` 在模型可见结果中呈现匹配 schema，并用稳定的 `deferred_tool_call` 桥接后续调用。

8. **[#8305 CLI 终端内联渲染图片](https://github.com/QwenLM/qwen-code/pull/8305)**
   将 #8217 合并的终端图片基础设施从 workspace 文件预览扩展到模型与工具的 `inlineData`，在交互式 CLI 中保留有序文本/图片部件，同时维持既有 value 契约。

9. **[#8368 新增 Kimi 与小米 MiMo 提供商预设](https://github.com/QwenLM/qwen-code/pull/8368)**
   `/auth` 第三方提供商新增 Kimi（Coding Plan / API Key 中国 / 国际三种接入方式）与小米 MiMo（按量付费 + 中国/新加坡/国际区域选择）的一等公民预设。

10. **[#8213 serve 建立 workspace runtime 所有权](https://github.com/QwenLM/qwen-code/pull/8213)**
    以 WorkspaceRuntime 作为每个 workspace ACP 子生命周期的所有权边界，新增权威五态运行快照、workspace 单调 epoch、物理工作租约及有界启停行为，强化 daemon 多工作区治理。

## 功能需求趋势

综合 32 条活跃 Issue，社区最关注的功能方向如下：

1. **daemon 与服务化架构持续深化**
   [资源上限治理](https://github.com/QwenLM/qwen-code/issues/8051)、[TUI 与 daemon 共存](https://github.com/QwenLM/qwen-code/issues/4156)、[daemon 会话 Plan & Review 工作流](https://github.com/QwenLM/qwen-code/issues/8389) 及 [WorkspaceRuntime 所有权 PR](https://github.com/QwenLM/qwen-code/pull/8213) 表明：服务化治理正从「能用」走向「资源可量化、生命周期可管」。

2. **外部集成与渠道扩展**
   社区明确表达对接外部上下文提供者（[#7585](https://github.com/QwenLM/qwen-code/issues/7585)）、Email 渠道（[#8281](https://github.com/QwenLM/qwen-code/issues/8281)）、安全云部署（[#8291](https://github.com/QwenLM/qwen-code/issues/8291)）及更多模型提供商（[#8368](https://github.com/QwenLM/qwen-code/pull/8368)）的诉求，集成生态正在向企业协作场景延伸。

3. **终端体验与跨平台兼容**
   Windows 终端兼容仍是热点：ConEmu 闪烁（[#8385](https://github.com/QwenLM/qwen-code/issues/8385)）、[进程名可识别性](https://github.com/QwenLM/qwen-code/issues/8376)、[整体 UI 视觉升级](https://github.com/QwenLM/qwen-code/issues/7278) 以及 [Web Shell 图片拖放](https://github.com/QwenLM/qwen-code/issues/8321) 指向更精细的渲染与交互控制。

4. **会话可靠性与数据安全**
   并发写入导致转录分叉（[#7164](https://github.com/QwenLM/qwen-code/issues/7164)）、桌面端会话静默删除（[#8400](https://github.com/QwenLM/qwen-code/issues/8400)）、abort 后 transcript 丢失（[#8356](https://github.com/QwenLM/qwen-code/issues/8356)）与重复 tool call id（[#8382](https://github.com/QwenLM/qwen-code/issues/8382)）共同指向：会话持久化的正确性已成为 P1/P2 级核心诉求。

5. **安全加固常态化**
   语音外发地址白名单（[#8350](https://github.com/QwenLM/qwen-code/pull/8350)）、语音安全测试同步与 CI 门禁（[#8361](https://github.com/QwenLM/qwen-code/issues/8361)、[#8360](https://github.com/QwenLM/qwen-code/issues/8360)）以及 hook 信任边界修复（[#8396](https://github.com/QwenLM/qwen-code/pull/8396)）显示安全已从单一功能点扩展为系统性治理。

## 开发者关注点

- **错误处理缺口**：`APIUserAbortError` 未被识别导致用户取消被误分类（[#8398](https://github.com/QwenLM/qwen-code/issues/8398)）；abort 后后续轮次不再写入本地 transcript（[#8356](https://github.com/QwenLM/qwen-code/issues/8356)）；工具调用偶发重复 tool call id（[#8382](https://github.com/QwenLM/qwen-code/issues/8382)）。
- **Windows 环境兼容性**：进程名 `node.exe` 影响外部工具识别（[#8376](https://github.com/QwenLM/qwen-code/issues/8376)）；ConEmu/Cmder 全屏闪烁且仅 `CI=true` 可规避（[#8385](https://github.com/QwenLM/qwen-code/issues/8385)）；Windows 桌面端重启后会话静默丢失（[#8400](https://github.com/QwenLM/qwen-code/issues/8400)）。
- **桌面客户端与 CLI 一致性**：桌面端 `@` 引用搜索不到已有文件（[#8123](https://github.com/QwenLM/qwen-code/issues/8123)）；语音服务地址守卫在 CLI 与 Desktop 双处手写维护，存在漂移风险（[#8361](https://github.com/QwenLM/qwen-code/issues/8361)）。
- **会话持久化可靠性**：并发写入者导致转录历史分叉（[#7164](https://github.com/QwenLM/qwen-code/issues/7164)）、桌面端会话自动删除（[#8400](https://github.com/QwenLM/qwen-code/issues/8400)）均属数据丢失类问题，开发者对「无确认删除」反馈强烈。
- **安全边界诉求**：hook 重定向绕过白名单（[#8396](https://github.com/QwenLM/qwen-code/pull/8396)）、语音转录地址默认全拒策略（[#8350](https://github.com/QwenLM/qwen-code/pull/8350)）之外，开发者还希望进程身份可被外部安全工具可靠识别（[#8376](https://github.com/QwenLM/qwen-code/issues/8376)）。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-08-03

## 今日速览

今日社区活动密集，核心围绕 **v0.9.4 发布阻塞问题**（#5123，标签 `release-blocker`）展开，该 issue 指出子代理 spawn 表面存在过多配置项，导致 labeled builder 只读运行并自我 BLOCKED。与此同时，贡献者通过 **10+ 个 WIP 拉取请求**集中处理 Fleet 配置静默覆盖、模型解析、Responses API 兼容性等工作，但多数 PR 仍停留在“检查清单”阶段，尚未有标注可合并的进展。社区侧，用户持续关注 **Termux/Android 原生支持、上下文窗口长度可配置（128K→1M）、NIM 集成**及 **大文本处理卡死**等实际问题。

## 版本发布

过去 24 小时内无新 release。

## 社区热点 Issues

过去 24 小时最受关注的 10 个 Issue：

1. **#2934 [feat] 侧边栏会话面板：自动恢复与会话历史浏览**
   作者: cy2311 · 评论: 12 · 2026-08-03 更新
   用户痛点明确：当前只能通过 `Ctrl+R` 弹窗或启动时 `--continue` 切换会话，缺少持久化的侧边会话面板。属于高频 UX 增强请求，社区反响强烈。
   https://github.com/Hmbown/CodeWhale/issues/2934

2. **#998 [bug/enhancement] 文案展示不全**
   作者: DingYong4223 · 评论: 11 · 👍: 1 · 2026-08-03 更新
   中文文案在 TUI 中被截断，请求鼠标悬浮显示完整内容。中文用户的基础体验问题，长期未解决。
   https://github.com/Hmbown/CodeWhale/issues/998

3. **#689 [bug] `deepseek doctor` 诊断通过但 `deepseek run` 无法运行**
   作者: grey219114-cyber · 评论: 10 · 2026-08-03 更新
   诊断工具全绿但运行时无输出/不启动对话，表明 doctor 与实际运行路径之间存在未覆盖的检查项，是 reliability 的典型缺口。
   https://github.com/Hmbown/CodeWhale/issues/689

4. **#1004 [feat] /dryrun — 预览下一次聊天补全请求，不实际发送**
   作者: peixl · 评论: 8 · 2026-08-03 更新
   长上下文场景下开发者无法在发送前看到实际请求内容（系统提示、缓存文件、工具定义等）。对 DeepSeek V4 Pro 高成本用户有实际价值。
   https://github.com/Hmbown/CodeWhale/issues/1004

5. **#1425 [bug] 大文本处理工程后会话中断卡死**
   作者: AiurArtanis · 评论: 6 · 2026-08-03 更新
   处理 300 万字小说时，10 个子 agent 全部 Running，但 `agent_wait` 超时导致会话卡死。大规模并行 agent 场景的稳定性问题。
   https://github.com/Hmbown/CodeWhale/issues/1425

6. **#1482 [bug] nVidia NIM 无法工作**
   作者: wupflove · 评论: 6 · 2026-08-03 更新
   调用 NIM API 返回 `404 page not found`。NIM 后端集成不兼容性问题，影响使用本地推理的用户。
   https://github.com/Hmbown/CodeWhale/issues/1482

7. **#1732 [bug] 合并分析报告保存本地文档巨慢**
   作者: yuhg92 · 评论: 6 · 2026-08-03 更新
   报告保存时缓存命中率极低且过程缓慢。涉及缓存定价与文档导出性能的双重问题。
   https://github.com/Hmbown/CodeWhale/issues/1732

8. **#1829 [bug] SSH 连接失败 exit code 255（疑似 shell 沙箱 TCP 22 出站阻断）**
   作者: fodudu1226 · 评论: 5 · 2026-08-03 更新
   内置 shell 沙箱阻断 TCP 22 出站，导致 `ssh`/`scp` 失败。影响依赖 SSH 的自动化工作流。
   https://github.com/Hmbown/CodeWhale/issues/1829

9. **#5134 [question] 如何调整上下文长度（128K → 1M）**
   作者: hardy922 · 评论: 2 · 创建: 2026-08-03
   当对话长度达到 128K 时自动压缩，但当前模型已支持 1M。用户对上下文管理策略不透明且不可配置提出疑问，是当日新建的高热度咨询。
   https://github.com/Hmbown/CodeWhale/issues/5134

10. **#5098 [bug] Fleet 配置多了一层，且在其余层之间静默遮蔽**
    作者: Hmbown · 评论: 1 · 2026-08-03 更新
    修改 `~/.codewhale/agents/builder.toml` 后配置未生效——Fleet roster 仍显示旧的 `deepseek-v4-pro`。配置层级间的静默遮蔽问题，属于平台可靠性缺陷。
    https://github.com/Hmbown/CodeWhale/issues/5098

---

## 重要 PR 进展

过去 24 小时最值得关注的 10 个 PR（注释均为 WIP 状态，大部分仅完成代码路径审查）：

1. **#5127 Add offline deterministic test corpus for web search/fetch retrieval path**
   作者: Copilot · 创建: 2026-08-03
   为 web search/fetch 检索路径添加离线确定性测试语料，覆盖排序、去重、域过滤、截断、引用元数据与 fallback 结构。是补齐检索路径测试覆盖的重要一步。
   https://github.com/Hmbown/CodeWhale/pull/5127

2. **#5124 [WIP] Fix sub-agent fleet spawn rejects for unpinned model**
   作者: Copilot · 2026-08-03
   修复 #5099：当子代解析为无 provider 的模型 ID 且对应 provider 与会话路由 provider 不一致时，spawn 失败。计划将回退逻辑改为继承会话路由。
   https://github.com/Hmbown/CodeWhale/pull/5124

3. **#5133 [WIP] Expose persistent goal-loop state and completion controls**
   作者: Copilot · 2026-08-03
   向 runtime API 暴露持久化目标循环状态与完成控制，新增 `thread_goals` 能力及 `GET/POST /v1/goals` 系列路由。
   https://github.com/Hmbown/CodeWhale/pull/5133

4. **#5125 [WIP] Fix fleet config silent shadowing issue**
   作者: Copilot · 2026-08-03
   修复 #5098：跟踪 FleetRoster 中被遮蔽的配置层、添加 `shadowed_layers_for()` 方法，并对 `[fleet.profiles]` 发出弃用警告。
   https://github.com/Hmbown/CodeWhale/pull/5125

5. **#5126 [WIP] Fix goal loop to allow completion beyond 10 continuations**
   作者: Copilot · 2026-08-03
   为目标循环添加 `max_continuations: Option<u32>` 配置，默认 `u32::MAX`，解决硬编码 10 次继续上限的问题。
   https://github.com/Hmbown/CodeWhale/pull/5126

6. **#5129 [WIP] Add skill install, update, uninstall, trust, and audit operations**
   作者: Copilot · 2026-08-03
   新增技能生命周期管理：`POST /v1/skills/install`、`POST /v1/skills/{name}/update`、`DELETE /v1/skills/{name}` 等路由，并添加能力标志。
   https://github.com/Hmbown/CodeWhale/pull/5129

7. **#5130 [WIP] Add bounded MCP server configuration and lifecycle management**
   作者: Copilot · 2026-08-03
   新增 MCP server CRUD 路由与凭据脱敏帮助函数，管理外部 MCP 服务器的生命周期。
   https://github.com/Hmbown/CodeWhale/pull/5130

8. **#5132 [WIP] Expose verifier evidence beyond the verifier_failed counter**
   作者: Copilot · 2026-08-03
   新增 `/v1/fleet/runs/{run_id}/receipts` 端点，序列化验证者凭证（含失败类型、分数、产物、可重试标志等）。
   https://github.com/Hmbown/CodeWhale/pull/5132

9. **#5107 [WIP] Fix provider switching to update default model selection**
   作者: Copilot · 2026-08-03
   试图修复切换 provider 后默认模型仍引用旧 provider 的过时问题，已勾选“inspect”步骤，尚未实现。
   https://github.com/Hmbown/CodeWhale/pull/5107

10. **#5108 [WIP] Make Responses API behavior provider-profiled**
    作者: Copilot · 2026-08-03
    将 Responses API 的请求构造/端点处理从 provider 布尔判断改为 typed profile 驱动，已勾选 inspect 步骤，实现未完成。
    https://github.com/Hmbown/CodeWhale/pull/5108

---

## 功能需求趋势

综合全部 Issues 与 PR，社区关注方向集中在以下 6 个维度：

1. **会话管理增强** — 持久化侧边会话面板、自动恢复、会话历史浏览（#2934）是最高呼声的 UX 改进。
2. **Termux / Android 原生支持** — #4236/#4242 两个相关 issue 已关闭，但说明 Termux 是官方支持的重要方向。
3. **模型路由与配置可靠性** — Fleet 配置静默遮蔽（#5098）、provider 切换时默认模型过时、子代理 spawn 拒绝（#5099）等模型解析/路由问题高发，社区对配置正确性极为敏感。
4. **上下文窗口可配置化** — 用户明确要求将自动压缩阈值从 128K 提升到 1M（#5134），需要可配置的上下文管理策略。
5. **MCP / ACP 生态扩展** — PR #5130 增加 MCP server 生命周期管理；Issue #4996/#4997 显示对协议无关 ACP 客户端与 GitHub Copilot 作为外部 ACP worker 的兴趣。
6. **可观测性** — 目标循环状态暴露（#5133）、验证者证据 API（#5132）、成本分解（#4939）等说明 runtime-API 可观测性正在成为基础设施重点。

## 开发者关注点

- **配置静默失效** — #5098 与 #5125 显示 Fleet 配置文件修改不生效且无警告，开发者对“改了什么没反应”的挫败感很强。
- **子代理阻塞与死锁** — #5123（release-blocker）、#1425（大文本处理卡死）、#5126（10 次续跑上限）共同指向子代理/目标循环的稳定性不足。
- **模型兼容性** — NIM 404（#1482）、上下文长度不可调（#5134）、模型解析链路分裂（#4851）等问题说明多 provider 支持仍在打磨期。
- **基础体验缺失** — 中文文案截断（#998）、SSH 沙箱阻断（#1829）、VS Code 崩溃（#1651）、报告保存慢（#1732）等问题长期未关闭，影响开发者信任度和日常使用信心。
- **大量 WIP PR 进展缓慢** — 当日 10+ 个 Copilot 发起的 PR 仍停留在 check-list 阶段，社区需要注意这些阻塞修复何时能合并入主线，尤其是 #5124（spawn 拒绝）和 #5125（配置遮蔽）两个直接影响日常使用的修复。

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*