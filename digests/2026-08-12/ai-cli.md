# AI CLI 工具社区动态日报 2026-08-12

> 生成时间: 2026-08-12 00:58 UTC | 覆盖工具: 10 个

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

# AI CLI 工具横向对比分析报告（2026-08-12）

## 1. 生态全景

当前 AI CLI 工具已进入高密度迭代期，头部项目几乎每日发布新版本，社区反馈集中于稳定性、成本与跨平台体验。各工具正从“可用”向“可信、可控、可观测”演进，普遍面临长会话资源膨胀、多代理协调、MCP 生态兼容三大挑战。Windows 与 Linux 桌面支持成为公认短板，而记忆系统、非打断式交互、智能工具调度则是下一阶段竞争焦点。整体来看，市场格局尚未固化，开源工具与商业工具在功能、生态、社区治理上呈现明显分化。

## 2. 各工具活跃度对比

| 工具 | 活跃 Issues（条） | 活跃 PR（条） | Release 情况 |
|---|---|---|---|
| Claude Code | 10（Top 热点） | 7 | v2.1.228 正式版 |
| OpenAI Codex | 10（Top 热点） | 10 | rust-v0.148.0-alpha.7 / alpha.8 |
| Gemini CLI | 10（Top 热点） | 10 | v0.55.1、v0.56.0-preview.1、nightly 等共 4 个 |
| GitHub Copilot CLI | 10（Top 热点） | 2 | 无新 Release |
| Kimi Code CLI | 5（全部） | 8（全部） | 无新 Release |
| OpenCode | 10（Top 热点） | 10 | 无新 Release（v2 分支密集修复中） |
| Pi | 10（Top 热点） | 10 | 无新 Release |
| Qwen Code | 10（Top 热点） | 10 | v0.21.10、v0.21.11-preview.0、live-host-v0.1.1 |
| DeepSeek TUI | 3（全部） | 7（全部） | 无新 Release |
| Grok Build | 0 | 0 | 无活动 |

> 注：活跃 Issues/PR 指过去 24 小时有更新的条目；部分仓库仅统计 Top N，但能代表当日动态主力。

## 3. 共同关注的功能方向

### 3.1 非打断式交互与消息队列
- **Claude Code**：#50246「消息队列模式」，191 👍，希望任务执行中排队追加消息。
- **OpenAI Codex**：PR #38092「简化排队用户消息准入」，主动优化消息排队逻辑。
- **Claude Code** #85603：回合结束时输入被静默丢弃，暴露交互层缺陷。

### 3.2 Windows 平台体验与兼容性
- **Claude Code**：控制台窗口闪烁（#14828，60 评论）；v2.1.228 修复 git 路径问题。
- **OpenAI Codex**：Windows 桌面内存涨至 8.8 GB（#38059）、沙盒权限错误、`apply_patch` 卡顿。
- **GitHub Copilot CLI**：插件安装/更新因文件锁失败（#4151、#4095）。
- **Kimi Code**：PowerShell 7 非 C 盘启动路径丢失（#2600）。
- **Qwen Code**：Windows 文件链接 URL 编码导致无法打开（#8644）。
- **OpenCode**：`apply_patch` 破坏 CRLF 行尾（#37090）。

### 3.3 成本控制与资源治理
- **Claude Code**：计费事故（#81703、#83062）引发对消费上限、警报机制的强烈呼声。
- **OpenAI Codex**：Windows 内存失控、图片文件复制 400 GiB 等极端资源消耗。
- **Gemini CLI**：Auto Memory 无限重试低信号会话（#26522），浪费 token。
- **GitHub Copilot CLI**：大会话恢复 OOM、`tgrep` 索引器无内存上限。
- **Qwen Code**：守护进程为每个 ACP 子进程分配 50% 主机内存（#8182）。

### 3.4 MCP 生态与互操作性
- **Claude Code**：Gmail MCP 多账户支持（#36024）。
- **OpenAI Codex**：MCP OAuth 注册（#38089）、MCP 工具审批（#38081）。
- **Gemini CLI**：工具数量超过 128 个时 400 错误（#24246）。
- **GitHub Copilot CLI**：MCP 响应 BigInt 崩溃（#4211）、OAuth 元数据校验过严（#4439）。
- **Pi**：多 provider 支持（Qwen Token Plan、Cloudflare AI Gateway、OrcaRouter 等）。

### 3.5 子代理可靠性与可观测性
- **Claude Code**：并行 agent 过度消耗 token 后崩溃（#67636）。
- **Gemini CLI**：子代理达到 MAX_TURNS 后谎报成功（#22323）；/bug 报告缺少子代理上下文（#21763）。
- **DeepSeek TUI**：嵌套子代理可绕过递归深度预算（#5253），已修复。
- **OpenCode**：多 TUI 连接同一 server 导致状态串扰（#39181）。

## 4. 差异化定位分析

| 工具 | 核心定位 | 技术路线 | 目标用户 |
|---|---|---|---|
| **Claude Code** | 功能最全的通用编码 Agent，生态成熟 | 快速迭代的 Node.js 实现，插件机制丰富 | 专业开发者、团队协作，重视模型能力与生态 |
| **OpenAI Codex** | OpenAI 官方 CLI，桌面端 + CLI 双形态 | Rust 重写，高频 alpha 迭代 | 深度使用 OpenAI 模型的开发者，跨端工作流 |
| **Gemini CLI** | Google 生态驱动，强调代理自动化 | TypeScript，子代理 + Auto Memory | 依赖 Google 云、AI Studio 的开发者 |
| **GitHub Copilot CLI** | 与 GitHub 深度集成，企业级治理 | 基于 Rust / Node，插件市场 | GitHub 重度用户、企业内部采用 |
| **Kimi Code** | 中文友好，面向国内开发者 | Python 实现，ACP 协议支持 | 中文开发社区、Moonshot 模型用户 |
| **OpenCode** | 开源可扩展的终端编码工具 | TypeScript，v2 重构中，多 TUI 共享 server | 追求高度可定制、自托管的技术团队 |
| **Pi** | 多提供商聚合，轻量跨平台 | TypeScript（bun），协议适配广泛 | 使用 GitHub Copilot/OpenRouter 等混合模型的用户 |
| **Qwen Code** | 阿里云/通义生态，Web Shell 特色 | TypeScript，守护进程 + ACP | 国内企业用户、使用 Qwen 模型的开发者 |
| **DeepSeek TUI** | Rust 实现的极简 TUI，侧重终端体验 | Rust + Ratatui | 追求轻量、低资源占用的终端爱好者 |
| **Grok Build** | xAI 官方工具 | 未知 | 当前社区几乎无动态，定位不明 |

## 5. 社区热度与成熟度

- **最活跃 / 高成熟度**：Claude Code、OpenAI Codex、Gemini CLI。Issue 评论多、点赞高，Release 频率快，已形成规模社区；同时稳定性问题（计费、内存、回归）也有所暴露，说明用户基数大、场景真实。
- **快速迭代中**：GitHub Copilot CLI、Qwen Code、OpenCode、Pi。均有明确的版本演进攻略，但每日 PR 数量不均，部分工具仍面临平台兼容、协议一致性等基础问题。
- **社区规模较小但活跃**：Kimi Code、DeepSeek TUI。条目数量少但讨论聚焦（如记忆系统、子代理安全），外部贡献者参与度高。
- **冷启动 / 停滞**：Grok Build。过去 24 小时零活动，生态尚处早期，不建议作为主要选择。

## 6. 值得关注的趋势信号

1. **“非打断交互”成为刚需**：Claude Code 的消息队列请求、OpenAI Codex 的排队逻辑优化，说明用户希望 Agent 在执行长任务时能接收“后台指令”，而不是依赖中断。未来 CLI 交互模型将更接近聊天软件的多线程机制。

2. **多智能体规模失控引发信任危机**：Claude Code、Gemini CLI 均出现子代理状态谎报或过度并行导致的资源耗尽。Agent 的自我报告不可全信，需要可观测性基础设施（trajectory、审计日志）和更保守的资源配额。

3. **成本透明化与上限机制是商业化必答题**：Claude Code 的计费事故和 Pi/OpenCode 的用量 API 需求表明，用户不再接受“黑盒计费”，要求工具具备消费预警、硬上限和日志对账能力。

4. **Windows 仍是最大平台短板**：几乎所有工具在 Windows 上都有文件锁、路径、权限、终端渲染等基础问题。Windows 开发者市场的支持力度将直接影响工具采用率。

5. **MCP 从“能接”走向“能管”**：工具数量超限、OAuth 互操作、BigInt 序列化等问题的涌现，意味着 MCP 生态已进入深水区。下一个竞争点将是工具发现、审批、权限继承的标准化。

6. **记忆系统成为差异化新战场**：Kimi Code 的“跨会话记忆”呼声、Gemini CLI 的 Auto Memory 安全缺陷，以及 Qwen Code 的会话恢复机制，共同指向“长期上下文”是提高 Agent 生产力的关键。但记忆的隐私、安全与成本控制将决定其是否可信。

7. **模型网关与多提供商接入正在普及**：Pi、DeepSeek TUI 和 OpenCode 都在快速添加新的模型提供商支持，开发者倾向用统一 CLI 访问多种模型，而非绑定单一厂商。工具的“模型中立性”将成为开源社区的重要卖点。

---

*本报告基于 2026-08-12 各仓库公开社区数据自动聚合分析，供技术决策参考。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
*数据截至 2026-08-12 · 来源：github.com/anthropics/skills*

---

## 1. 热门 Skills 排行

> 说明：以下按 PR 评论数排序选取前 8；**Top 20 PR 全部仍为 OPEN 状态**，尚未有合并/关闭项。

### #1 · skill-creator：run_eval 评估工具修复（评论数第 1）
- **功能**：修复 `run_eval.py` 恒定报告 `recall=0%` 的缺陷，使描述优化循环真正生效；一并修复 Windows 流读取、触发检测与并行 worker 问题。
- **热点**：针对 Issue #556 的 10+ 次社区复现，指出"描述优化循环正在对噪声做优化"，是当前 skill 创作工具链最严重的可靠性问题。
- **状态**：OPEN | [PR #1298](https://github.com/anthropics/skills/pull/1298)

### #2 · document-typography：生成文档排版质量控制（评论数第 2）
- **功能**：预防 AI 生成文档的常见排版问题——孤词换行（1~6 词溢出到下一行）、孤行标题（段落标题滞留页底）、编号错位。
- **热点**：这些问题影响 Claude 生成的每一份文档，而用户极少主动要求排版质量，属于"AI 需要自觉兜底"的高频刚需场景。
- **状态**：OPEN | [PR #514](https://github.com/anthropics/skills/pull/514)

### #3 · pdf：修复 SKILL.md 大小写敏感引用（评论数第 3）
- **功能**：修正 `skills/pdf/SKILL.md` 中 8 处大小写不匹配（`REFERENCE.md → reference.md`、`FORMS.md → forms.md`，各 4 处）。
- **热点**：实际文件为小写，SKILL.md 却引用大写，在大小写敏感文件系统上会导致引用失效——暴露了官方 skill 在跨平台兼容性上的疏漏。
- **状态**：OPEN | [PR #538](https://github.com/anthropics/skills/pull/538)

### #4 · ODT skill：OpenDocument 格式支持（评论数第 4）
- **功能**：覆盖 OpenDocument 全流程——创建、模板填充、读取、ODT 转 HTML，触发词涵盖 .odt/.ods/ODF/LibreOffice/ISO 标准文档等。
- **热点**：社区对开源/ISO 标准办公格式的明确需求，补全了当前生态在 docx/pdf 之外的格式版图。
- **状态**：OPEN | [PR #486](https://github.com/anthropics/skills/pull/486)

### #5 · frontend-design：skill 清晰度与可操作性改进（评论数第 5）
- **功能**：修订 frontend-design skill，确保每条指令都能在单次对话内被执行，提升内部一致性与行为引导精度。
- **热点**：围绕"skill 指令必须可执行、可验证"展开——这是社区评判 skill 质量的核心标准，也是 Issue #202 批评 skill-creator"像文档不像操作指令"的同一议题。
- **状态**：OPEN | [PR #210](https://github.com/anthropics/skills/pull/210)

### #6 · 元技能：skill-quality-analyzer + skill-security-analyzer（评论数第 6）
- **功能**：向 example-skills 市场新增两个元技能——质量分析器（结构/文档/示例等五维评估，含 20% 权重分配）与安全分析器。
- **热点**：社区对 skill 质量与安全缺乏客观检测工具，元技能被视为生态治理的关键基础设施。
- **状态**：OPEN | [PR #83](https://github.com/anthropics/skills/pull/83)

### #7 · docx：修复 tracked change 的 w:id 冲突（评论数第 7）
- **功能**：修复 DOCX skill 添加修订时与已有书签的 ID 冲突导致的文档损坏；根因是 OOXML 中 `w:id` 为书签/修订/批注共享的 ID 空间，而示例代码硬编码了低 ID（1、2、3）。
- **热点**：文档损坏是 docx skill 最严重的故障类型，社区在讨论"示例本身即缺陷来源"的问题。
- **状态**：OPEN | [PR #541](https://github.com/anthropics/skills/pull/541)

### #8 · skill-creator：description 未加引号时的 YAML 告警（评论数第 8）
- **功能**：在 `quick_validate.py` 增加前置校验，检测未加引号的 `description` 字段中的冒号，避免 YAML 静默解析失败（description 被截断或拆成多个键）。
- **热点**：description 解析异常是技能"无法触发"的上游原因之一，与 0% recall 问题直接相关。
- **状态**：OPEN | [PR #539](https://github.com/anthropics/skills/pull/539)

---

## 2. 社区需求趋势（来自 Issues）

1. **安全与信任边界** — [#492](https://github.com/anthropics/skills/issues/492)（43 评论，全场最高）：社区技能借 `anthropic/` 命名空间分发，伪装官方 skill，形成信任边界漏洞，用户可能向非官方技能授予高权限。这是当前生态最尖锐的治理问题。
2. **组织级技能共享** — [#228](https://github.com/anthropics/skills/issues/228)（16 评论，8 👍）：企业用户要求 Claude.ai 支持组织内技能库/共享链接；当前"下载 → Slack 传输 → 手动上传"的流程严重阻碍团队协作采用。
3. **skill 创作工具链可靠性** — [#556](https://github.com/anthropics/skills/issues/556)（12 评论，7 👍）、[#1169](https://github.com/anthropics/skills/issues/1169)：`run_eval.py` 在所有查询上 0% 触发率，描述优化循环完全失效；[#202](https://github.com/anthropics/skills/issues/202)（已关闭）进一步批评 skill-creator 自身"说教式、低 token 效率"，违反最佳实践。
4. **Agent 记忆与上下文管理** — [#1329](https://github.com/anthropics/skills/issues/1329)（9 评论）提出 compact-memory 符号化记忆技能；[#1487](https://github.com/anthropics/skills/issues/1487) 报告 `claude-api` skill 单次调用注入 ~156k tokens 挤爆上下文——长时运行 agent 的记忆与上下文效率成为显性痛点。
5. **治理与质量保障（元技能方向）** — [#412](https://github.com/anthropics/skills/issues/412)（已关闭）提出 agent-governance 安全模式；[#1385](https://github.com/anthropics/skills/issues/1385) 提出"预任务校准 → 对抗审查 → 交付验证"三段质量门流水线。
6. **平台互操作与格式可靠性** — [#29](https://github.com/anthropics/skills/issues/29) 询问 Bedrock 支持；[#16](https://github.com/anthropics/skills/issues/16) 建议将 Skills 暴露为 MCP API；[#12](https://github.com/anthropics/skills/issues/12) 反映 docx 被添加多余空白导致文档损坏。
7. **生态卫生** — [#189](https://github.com/anthropics/skills/issues/189)（9 👍）：`document-skills` 与 `example-skills` 插件内容重复，安装后产生重复技能，浪费上下文窗口。

**社区最期待的新 Skill 方向**：安全/治理类元技能、质量审计与自我检查、Agent 记忆与上下文管理、组织协作共享基础设施、文档格式扩展（ODT/排版/修复）、平台集成（Bedrock/MCP）。

---

## 3. 高潜力待合并 Skills

> 以下 PR 评论活跃、内容成熟度高，且作者仍在持续迭代，可能近期落地（Top 20 全部 OPEN，合并积压明显）。

1. **self-audit（v1.3.0）** — 先机械验证输出文件，再按损害严重度执行四维推理审计；声称通用、与模型无关。作者持续更新至 7 月初，配套提案 #1385 也保持活跃。 | [PR #1367](https://github.com/anthropics/skills/pull/1367)
2. **testing-patterns** — 覆盖 Testing Trophy 模型、单元测试 AAA 模式、React Testing Library、"测什么 vs 不测什么"哲学，是社区测试生成方向最完整的提案。 | [PR #723](https://github.com/anthropics/skills/pull/723)
3. **pyxel** — Pyxel 复古游戏引擎的 MCP 工作流（write → run_and_capture → inspect → iterate），作者维护至 7 月中旬。 | [PR #525](https://github.com/anthropics/skills/pull/525)
4. **color-expert** — 色彩领域自包含技能，覆盖 ISCC-NBS/Munsell/XKCD/RAL/Ridgway/CSS 命名体系与 OKLCH/OKLAB/CAM16 色彩空间选型。 | [PR #1302](https://github.com/anthropics/skills/pull/1302)
5. **plan-file-hygiene** — 解决规划产物（planning artifacts）无生命周期管理的问题，明确定位为"生命周期缺口"，对社区贡献者致谢，协作氛围好。 | [PR #1479](https://github.com/anthropics/skills/pull/1479)
6. **SAP-RPT-1-OSS predictor** — 将 SAP 开源表格基础模型封装为预测技能，代表企业级领域模型与 Skills 结合的方向。 | [PR #181](https://github.com/anthropics/skills/pull/181)

---

## 4. Skills 生态洞察

**一句话总结**：当前社区在 Skills 层面最集中的诉求是生态的"元能力"——修复 skill-creator 评估工具链的系统性缺陷（0% recall、Windows 崩溃）并建立安全审计、质量分析、self-audit 等治理类元技能，为技能分发设立信任与质量门槛，同时推动组织级共享与上下文效率的基础设施建设。

---

## Claude Code 社区动态日报 — 2026-08-12

### 📌 今日速览

- **v2.1.228 发布**，修复了交互式会话停止重绘、Windows 下 git/Git Bash 路径找不到等关键问题。
- **消息队列模式（#50246）** 以 191 个 👍 成为社区最热功能请求，用户强烈希望在任务执行中不必打断 Claude 即可排队追加消息。
- 计费事故与成本失控类 Issue（#81703、#85912、#83062）持续发酵，用户对突发高额充值、无花费上限机制表达强烈不满。

---

### 🚀 版本发布 — v2.1.228

| 变更 | 说明 |
|---|---|
| 修复 | 修复了罕见的内部布局错误导致交互式会话完全停止重绘、但进程仍在运行的问题 |
| 修复 | 修复了从 git 安装目录的父文件夹启动 Claude Code 时，Windows 上无法找到 `git` / Git Bash 的问题 |
| 修复 | 修复了 `/tui` 回退（revert）问题 |

链接：[anthropics/claude-code Releases](https://github.com/anthropics/claude-code/releases)

---

### 🔥 社区热点 Issues（Top 10）

#### 1. #50246 · 功能需求：消息队列模式
- 作者：mozltovcoktail ｜ 👍 191 ｜ 💬 53 ｜ 2026-08-11 更新
- 用户希望新增**消息队列模式**：当 Claude 正在执行任务时，后续消息进入队列而非打断当前工作。目前唯一的做法是中断任务，可能导致当前工作脱轨。
- 链接：[Issue #50246](https://github.com/anthropics/claude-code/issues/50246)

#### 2. #14828 · Bug：Windows 控制台窗口闪烁（执行工具时）
- 作者：guanknow ｜ 👍 36 ｜ 💬 60 ｜ 2026-08-11 更新
- 提交于 2025-12-20 的长期高活跃 Issue，Windows 平台上每次执行工具都会闪烁控制台窗口，严重影响体验。60 条评论说明该问题在 Windows 用户中影响面广、反复出现。
- 链接：[Issue #14828](https://github.com/anthropics/claude-code/issues/14828)

#### 3. #54394 · Bug：WSL2 下 ugrep 包装器导致 V8 堆 OOM，主机冻结
- 作者：dowdys ｜ 👍 4 ｜ 💬 27 ｜ 2026-08-12 更新
- v2.1.117 引入的嵌入式 ugrep 包装器将每次 `grep` 调用路由到 `claude.exe`，在 WSL2 上正则回溯引发从 grep 进程 OOM 升级为 V8 堆 OOM（8 GB 上限），最终导致主机冻结。性能回归严重。
- 链接：[Issue #54394](https://github.com/anthropics/claude-code/issues/54394)

#### 4. #36024 · 功能需求：MCP 集成支持多个 Gmail 账户
- 作者：ale-ayestaran-ai ｜ 👍 77 ｜ 💬 25 ｜ 2026-08-12 更新
- Gmail MCP 目前仅支持连接一个账户，用户需要同时连接个人与工作等多个 Google/Workspace 账户。
- 链接：[Issue #36024](https://github.com/anthropics/claude-code/issues/36024)

#### 5. #85603 · Bug：回合结束时，中途排队的输入被静默丢弃
- 作者：Teinie ｜ 👍 0 ｜ 💬 20 ｜ 2026-08-11 更新
- 在长会话中，turn 运行期间输入的文字在回合结束（end_turn）时被静默丢弃，无需按 Escape。影响 macOS + tmux 场景，两个版本（2.1.220 / 2.1.226）均可复现。
- 链接：[Issue #85603](https://github.com/anthropics/claude-code/issues/85603)

#### 6. #81703 · Bug：7 月 17 日大规模计费事故
- 作者：COOLak ｜ 👍 0 ｜ 💬 12 ｜ 2026-08-12 更新
- 订阅套餐内的用量被路由到付费额度，Anthropic 已承认该事故但未对全天费用进行对账，其中 604.71 美元的自动充值被争议。
- 链接：[Issue #81703](https://github.com/anthropics/claude-code/issues/81703)

#### 7. #76727 · 功能需求：独立 Claude Code 会话的跨会话协调
- 作者：wshallwshall ｜ 👍 0 ｜ 💬 14 ｜ 2026-08-12 更新
- 重度用户会在同一仓库、同一工作树中并行运行多个独立会话，目前缺乏一方的协调方案——除了自建 PreToolUse deny 钩子，且该方案存在静默盲区。
- 链接：[Issue #76727](https://github.com/anthropics/claude-code/issues/76727)

#### 8. #71539 · Bug：Linux 下鼠标点击重新聚焦终端会意外触发权限提示
- 作者：quenti77 ｜ 👍 22 ｜ 💬 10 ｜ 2026-08-11 更新
- 在 Linux 上，仅点击终端窗口重新聚焦就可能误触发权限提示，打断了工作流。
- 链接：[Issue #71539](https://github.com/anthropics/claude-code/issues/71539)

#### 9. #78775 · Bug（回归）：桌面应用会话时间范围筛选器仅在按状态分组时显示
- 作者：bakulaibuji ｜ 👍 28 ｜ 💬 8 ｜ 2026-08-12 更新
- 桌面应用回归：会话时间范围筛选器（time-range filter）只在 Group by = State 时出现，其他分组方式下消失。
- 链接：[Issue #78775](https://github.com/anthropics/claude-code/issues/78775)

#### 10. #67636 · Bug：并行 agent 过度消耗 token 后崩溃
- 作者：DrAlexHarrison ｜ 👍 0 ｜ 💬 6 ｜ 2026-08-12 更新
- Claude 一次性生成 10 个 agent 做大量读取然后崩溃，消耗数百万 token；此前另一次 15 个 agent 并行完成本可由 1-2 个 agent 完成的任务。**parallel agent 的生成策略亟待优化**。
- 链接：[Issue #67636](https://github.com/anthropics/claude-code/issues/67636)

---

### 🔧 重要 PR 进展（全部 7 个）

#### 1. #70173 · 修复 `/clean_gone` 永远不删除任何分支的问题
- 作者：AndrewDongminYoo ｜ 2026-08-11 更新（已关闭）
- 根因：`git branch -v` 不显示 `[gone]` 标记，应改用 `git branch -vv`。修复后可正确检测并清理已删除远程分支的本地引用。
- 链接：[PR #70173](https://github.com/anthropics/claude-code/pull/70173)

#### 2. #85716 · 修复 hookify 从祖先目录加载规则以防止静默绕过
- 作者：alifakbxr ｜ 2026-08-11 更新
- 修复 `plugins/hookify/core/config_loader.py` 的安全缺陷：规则现在会从祖先 `.claude` 目录加载，防止通过目录结构绕过安全规则（修复 #85613）。
- 链接：[PR #85716](https://github.com/anthropics/claude-code/pull/85716)

#### 3. #85243 · 修复 plugin-dev 和 hookify 技能使用不符合规范的名称
- 作者：bechor25 ｜ 2026-08-11 更新
- 8 个内置技能的 `name` 字段用了含空格的首字母大写标题（如 "Writing Hookify Rules"），不符合技能规范；统一改为符合规范的名称。
- 链接：[PR #85243](https://github.com/anthropics/claude-code/pull/85243)

#### 4. #85806 · 修复 security-guidance 在文档中误报 XSS 警告
- 作者：yxlphobe-pixel ｜ 2026-08-11 更新
- 复用现有 `_DOC_EXTS` 路径过滤器，在文档/说明文字中出现 XSS 模式时不再产生警告，同时保留对可执行源码的警告，并新增回归测试。
- 链接：[PR #85806](https://github.com/anthropics/claude-code/pull/85806)

#### 5. #85822 · 文档：清理插件与示例中过期的链接和 README 漂移
- 作者：AliAltivate ｜ 2026-08-11 更新
- 纯文档清理：修复 hooks 文档链接（docs.anthropic.com → code.claude.com/docs/en/hooks）、plugins README 链接漂移等。
- 链接：[PR #85822](https://github.com/anthropics/claude-code/pull/85822)

#### 6. #85925 · 文档：将其余过期文档链接指向 code.claude.com
- 作者：AliAltivate ｜ 2026-08-11 更新
- 承接 #85822 的清理工作，将 plugins、skills/agents/commands、issue 模板中的旧域名 `docs.claude.com`（仅重定向）切换为规范的 `code.claude.com` 目标。
- 链接：[PR #85925](https://github.com/anthropics/claude-code/pull/85925)

#### 7. #85834 · 修复 HackerOne 漏洞奖励计划访问问题
- 作者：JoTalbot ｜ 2026-08-11 更新
- 修改 devcontainer.json 以正确安装 hookify 插件，使插件可正常访问 HackerOne Bug Bounty 计划。
- 链接：[PR #85834](https://github.com/anthropics/claude-code/pull/85834)

---

### 📊 功能需求趋势

| 方向 | 代表 Issue | 热度 |
|---|---|---|
| **非打断式交互 / 消息队列** | #50246 | 🔥🔥🔥🔥🔥 191 👍 |
| **MCP 能力增强**（多账户、多实例） | #36024 | 🔥🔥🔥🔥 77 👍 |
| **多会话协同与治理**（同一仓库并行会话） | #76727 | 🔥🔥🔥 14 💬 |
| **成本控制与使用限额**（自动充值上限、消费警报） | #81703、#85912、#83062 | 🔥🔥🔥 连续计费事故 |
| **智能 agent 调度**（避免过度并行消耗 token） | #67636 | 🔥🔥 6 💬 |

---

### 🧑‍💻 开发者关注点

1. **Windows 体验修复仍是当务之急**——控制台窗口闪烁（#14828，60 条评论）是长期痛点；本轮 v2.1.228 修复了 git 路径问题，但闪烁问题依然悬而未决。
2. **性能回归引发担忧**——v2.1.117 的 ugrep/bfs 替换带来 WSL2 上 OOM 与主机冻结（#54394）；macOS 上出现 node fork 风暴致 48GB 内存耗尽和 3 次内核崩溃（#80362）。
3. **计费不透明与突发扣款引发信任危机**——7 月 17 日计费事故（#81703）与 8 月 1 日自动充值事故（#83062）合计近 1,600 美元被扣，用户呼吁加入**消费上限与警报机制**。
4. **模型自主行为问题集中反馈**——多位用户（尤其 andreapeterfly-prog）报告 Claude Code 无视明确的用户指令、未经批准执行操作、反复提出已被拒绝的方案。这些 Issue 虽多为单一用户报告，但涉及工具安全边界，值得团队关注。
5. **输入丢失/排队问题**——TUI 中输入在回合结束时被静默丢弃（#85603）以及消息队列模式（#50246）的需求，说明交互层仍是体验瓶颈，用户在长会话/多任务场景下有强烈的非打断通信需求。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-08-12

> 数据来源：github.com/openai/codex | 覆盖窗口：2026-08-11 ~ 2026-08-12

## 今日速览

- 📦 连续发布两个 Rust 版本（`0.148.0-alpha.7` / `0.148.0-alpha.8`），官方正通过高频 alpha 迭代推进稳定性修复。
- 🐧 Linux 桌面版需求持续霸榜（Issue #11023，👍 950），但该 Issue 已标记关闭，社区已累计 207 条讨论。
- 🪟 Windows 平台问题集中爆发：内存飙升至 8.8 GB、沙盒权限错误、`apply_patch` 卡顿等成为今日开发者反馈重灾区。

---

## 版本发布

| 版本 | 说明 |
|------|------|
| [`rust-v0.148.0-alpha.8`](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.8) | 基于 Rust 的 Codex CLI 0.148.0 第 8 个 alpha 版本，紧随前序构建发布 |
| [`rust-v0.148.0-alpha.7`](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.7) | 0.148.0 第 7 个 alpha 版本，与 alpha.8 同日交付 |

两个版本相隔时间极短，且官方未提供详细变更说明，推测为快速迭代的补丁级发布。建议关注 CLI 会话管理、沙盒权限相关回归修复。

---

## 社区热点 Issues（Top 10）

### 🐧 #11023 — Codex Linux 桌面应用（已关闭）
- **链接**：[Issue #11023](https://github.com/openai/codex/issues/11023)
- **热度**：👍 950 · 💬 207
- **为什么重要**：社区对桌面端 Linux 支持呼声极高，用户因 macOS 上的已知问题（#10432）转向 Linux 桌面。Issue 已关闭，但高热度表明该需求仍是社区最强烈的功能期望之一。

### 📁 #20880 — App 每次启动静默创建 `~/Documents/Codex` 空文件夹
- **链接**：[Issue #20880](https://github.com/openai/codex/issues/20880)
- **热度**：👍 42 · 💬 22
- **为什么重要**：纯 UX 层面的小问题，但影响面广——每次启动都会污染用户文档目录，且无法通过设置关闭。社区用"烦人"来形容。

### 🧩 #23930 — App 子代理卡片关闭后仍卡在 UI 上
- **链接**：[Issue #23930](https://github.com/openai/codex/issues/23930)
- **热度**：👍 4 · 💬 16
- **为什么重要**：UI 状态与后端不一致，子代理已关闭但卡片长期残留，影响多代理工作流下的界面可读性。macOS 桌面端复现。

### 🖼️ #19143 — 支持直接粘贴图片到 Codex CLI
- **链接**：[Issue #19143](https://github.com/openai/codex/issues/19143)
- **热度**：👍 7 · 💬 11
- **为什么重要**：前端调试、DevTools 等场景需要把截图直接粘进会话。当前 CLI 不支持剪贴板图片输入，用户需要额外保存文件再引用，效率折损明显。

### 🔧 #6150 — 在 Ubuntu 24.04 RISC-V 上支持 Codex
- **链接**：[Issue #6150](https://github.com/openai/codex/issues/6150)
- **热度**：👍 9 · 💬 9
- **为什么重要**：Codex 在启动时直接抛出 `Unsupported platform: linux (riscv64)` 致命错误。RISC-V 生态逐步成熟，开发者希望将 Codex 带到这一架构。

### 🔁 #37403 — [macOS 回归] 桌面无法恢复远程控制/CLI 线程
- **链接**：[Issue #37403](https://github.com/openai/codex/issues/37403)
- **热度**：👍 9 · 💬 9
- **为什么重要**：8 月 7 日更新后，桌面端与 ChatGPT 移动端远程控制、CLI 线程的衔接断裂，报错 `already has an active writer`。跨端工作流回退，属典型的高影响回归 bug。

### ⏳ #31376 — `codex exec` 在 SSE 流开始前无限挂起
- **链接**：[Issue #31376](https://github.com/openai/codex/issues/31376)
- **热度**：👍 2 · 💬 8
- **为什么重要**：长任务运行约 23 分钟后，死连接池导致响应头等待没有超时和重试，`codex exec` 无限期卡住。Windows 与 Linux 均可复现，自动化流水线可用性受影响。

### ⌨️ #37421 — CLI 0.147.0：Esc-Esc 回溯无法找到持久线程中的选中提示（已关闭）
- **链接**：[Issue #37421](https://github.com/openai/codex/issues/37421)
- **热度**：👍 25 · 💬 4
- **为什么重要**：短时间获得 25 个 👍 说明大量 CLI 用户依赖 Esc-Esc 回溯功能。0.147.0 在持久化线程中无法找回选中提示，已修复关闭，但回归原因值得关注。

### 🔓 #29235 — 完全访问 + 禁用审批后，Codex 仍请求权限
- **链接**：[Issue #29235](https://github.com/openai/codex/issues/29235)
- **热度**：👍 16 · 💬 3
- **为什么重要**：配置了完整文件系统访问并关闭所有审批，Codex 仍频繁请求许可。开发者反馈"破坏流程连续性"，与配置语义明显不一致。

### 🐌 #38059 — [Windows 桌面] 内存涨至 8.8 GB 且 UI 冻结
- **链接**：[Issue #38059](https://github.com/openai/codex/issues/38059)
- **热度**：👍 0 · 💬 3
- **为什么重要**：8 月 11 日新提交。Windows 桌面版在空闲时内存持续增长到 8.8 GB，仅 1-2 轮对话后 UI 即冻结。上一版本同样复现，属严重性能回归。

---

## 重要 PR 进展（Top 10）

### 🔄 #38092 — 简化排队用户消息准入
- **链接**：[PR #38092](https://github.com/openai/codex/pull/38092)
- **要点**：从 Core 接受新 turn 或转向（steer）时即解析用户消息准入，不再等待 rollout 持久化；同时清理消息准入错误和任务簿记，删除已排队的消息。核心会话状态机精简。

### 🔐 #38089 — 为 MCP OAuth 注册添加 CIMD 支持
- **链接**：[PR #38089](https://github.com/openai/codex/pull/38089)
- **要点**：当授权服务器宣告支持公共客户端时，自动 MCP OAuth 注册优先使用 Client ID Metadata Documents（CIMD）；否则回退到 Dynamic Client Registration。提升 MCP 服务器接入的互操作性。

### 🌐 #38087 — 通过共享 HTTP 客户端路由 gRPC code-mode 会话
- **链接**：[PR #38087](https://github.com/openai/codex/pull/38087)
- **要点**：gRPC code-mode 连接改用 `HttpClientFactory`，从而支持出站代理和自定义 CA 配置；同时拒绝不支持的端点协议。解决代理环境下的连接稳定性。

### 🏠 #38086 — 解析云配置时支持执行宿主上下文
- **链接**：[PR #38086](https://github.com/openai/codex/pull/38086)
- **要点**：新增 `AbsolutePathBufGuard::with_home_directory` 覆盖，使 `~` 路径可基于显式指定的家目录进行解析，同时保留现有基础目录行为。对多云/多宿主部署更友好。

### ✳️ #38084 — 允许空输入开始一个 turn
- **链接**：[PR #38084](https://github.com/openai/codex/pull/38084)
- **要点**：当 `Op::UserInput` 无内容项时，允许立即准入用户消息以启动 turn，turn 可携带生成的环境上下文继续执行。但持久化消息准入仍拒绝空输入。

### ✅ #38081 — 使用 `ReviewDecision` 处理 MCP 工具审批
- **链接**：[PR #38081](https://github.com/openai/codex/pull/38081)
- **要点**：新增 `ApprovedMcpPolicyAmendment` 表示跨会话持久化的 MCP 审批；审批响应直接走共享的 `ReviewDecision` 类型，保留仅会话审批、拒绝原因和超时语义。统一审批路径。

### 🪟 #38080 — 在 Windows 沙盒中允许嵌套 Git 仓库
- **链接**：[PR #38080](https://github.com/openai/codex/pull/38080)
- **要点**：修复 Git 因沙盒用户与主用户不一致而拒绝嵌套仓库的问题，将 worktree 根及其 `/*` 通配符加入 Git 信任配置。Windows 下 monorepo 开发体验的实质改进。

### 🖥️ #38075 — 添加 TUI 历史时尊重渲染宽度
- **链接**：[PR #38075](https://github.com/openai/codex/pull/38075)
- **要点**：新聊天组件初始化时使用当前终端宽度；历史单元格是否可见由历史渲染模式和宠物（ambient-pet）预留空间后的剩余宽度决定；diff 摘要宽度饱和度修正。TUI 布局稳定性提升。

### 🔌 #38072 — 将 gRPC code-mode 回调转发给会话委托
- **链接**：[PR #38072](https://github.com/openai/codex/pull/38072)
- **要点**：每个 gRPC code-mode 会话订阅嵌套工具调用，并将工具和通知回调转发给其委托；通过宿主完成工具调用并对超大结果和错误设限。gRPC 与现有代理架构的深度集成。

### ☁️ #38060 — 禁用 Azure Responses 请求的存储
- **链接**：[PR #38060](https://github.com/openai/codex/pull/38060)
- **要点**：所有 Responses 请求（包括 Azure）设置 `store: false`；移除提供商专属存储检查、简化请求构造。对数据合规和隐私敏感型部署影响明确。

---

## 功能需求趋势

从近 24 小时的全部 Issues 中可提炼出以下社区高关注方向：

### 1. Linux 桌面端支持（🔥 最热）
Issue #11023 以 950 👍 / 207 💬 遥遥领先。尽管已关闭，仍有用户引用它为续作（如 #10432）。桌面端跨平台是社区第一诉求。

### 2. 图片 / 媒体粘贴能力
CLI 不支持从剪贴板直接粘贴图片（#19143），影响前端调试、DevTools 工作流。用户期待终端内像 ChatGPT 网页端一样的图片输入体验。

### 3. Windows 沙盒与权限体系完善
多条 Windows 相关 Issues 集中出现在最近 24 小时：`apply_patch` 卡顿（#34549）、嵌套 Git 不可用（#38080 对应修复）、沙盒 debug 会话代理冲突（#38061）。Windows 是当前平台短板。

### 4. MCP 动态工具发现
MCP 服务器在会话运行中更新工具列表后，Codex 无法感知新工具（#37417）。此外 MCP OAuth 注册（#38089）和审批（#38081）正在积极迭代，说明官方在补齐 MCP 生态位。

### 5. 自定义模型 / API 提供商兼容性
多条线索指向自定义 Responses API 提供商下 MCP 工具调用被拒（#31354）、`modelProviders` 过滤语义不清晰（#24648）、Windows 桌面隐藏自定义模型（#37379）。自定义模型生态是增长点，但集成质量还不稳定。

### 6. 远程控制 / 多宿主协作稳定性
macOS 远程控制回归（#37403）、桌面 Remote Control 在 `list_threads` 挂起（#35030）、实时语音丢任务句柄（#36404）。跨设备、跨主机工作流正在成为日常场景，但工程成熟度不足。

---

## 开发者关注点

### 🔴 高频痛点
- **Windows 性能与稳定性**：#38059 内存暴涨至 8.8 GB 并冻结 UI；#35470 图片文件被复制 15 万次、消耗 400 GiB 磁盘空间——这些极端问题会直接摧毁用户信任。
- **挂起与死锁**：`codex exec` SSE 流前无限等待（#31376）、桌面定时任务挂起（#35030）、Windows `apply_patch` 卡 49-86 秒（#34549）。"卡住"是被抱怨最多的行为模式。
- **权限与审批逻辑混乱**："Allow once" 按钮无响应（#36115）、完全访问仍被问权限（#29235）——审批系统行为与配置语义不一致，严重打断工作流。
- **用户数据 / 文件系统副作用**：静默创建 `~/Documents/Codex`（#20880）、超长输入消息导致 Windows 通知静默失败（#18309）——都是"做了不该做的事"或"该做的事没做成"。

### 📌 关键诉求归纳
1. 官方需优先修复 Windows 平台的内存与沙盒问题，这是当前用户流失的高风险点。
2. 审批系统需要一套"配置即信任"的自洽逻辑，且必须修复弹窗按钮响应。
3. 所有网络/执行路径应具备合理的超时与重试，杜绝无限挂起。
4. 自定义模型提供商与 MCP 工具的兼容性需要系统性的测试矩阵。
5. 持续倾听 Linux 桌面高热度需求，即便当前关闭，也应在路线图中给出明确信号。

---

*本日报由 AI 自动聚合 GitHub 公开数据生成，链接与数据均引用自指定时间窗口内的仓库状态，供技术决策参考。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-08-12

## 1. 今日速览

昨日 Gemini CLI 发布了 v0.55.1 稳定版和 v0.56.0-preview.1 预览版，其中 v0.55.1 主要修复了发布验证流程中的依赖与二进制遮蔽问题，并引入了工具注册表（Tool Registry）功能。社区讨论集中在子代理（Subagent）的可靠性上，包括“达到 MAX_TURNS 却被谎报为成功”和“通用代理挂起”等高频问题。此外，两个针对 `shell-quote` 与 `simple-git` 的 CRITICAL 级 CVE 安全修复 PR 已提交，建议用户关注后续版本更新。

## 2. 版本发布

昨日共发布 4 个版本：

### v0.55.1（稳定版）
- **修复**：发布验证流程中 npm ci 的 ignore scripts 配置 [PR #28116](https://github.com/google-gemini/gemini-cli/pull/28116)
- **修复**：防止工作区二进制文件遮蔽发布验证过程 [PR #28132](https://github.com/google-gemini/gemini-cli/pull/28132)
- **新功能**：引入 Tool Registry，为工具管理提供统一注册机制

### v0.56.0-preview.1（预览版）
- 基于 v0.55.0-preview.1 的变更日志与版本号更新
- 当前处于预览阶段，主要包含此前 preview 版本的累积修复

### v0.56.0-nightly.20260811（夜间版）
- **修复**：使用存储的 client ID 刷新 MCP OAuth tokens [PR #28481](https://github.com/google-gemini/gemini-cli/pull/28481)（来自新贡献者 @ParthivNaresh 的首次贡献）

### v0.55.0-preview.3（预览版）
- 通过 cherry-pick 方式对 v0.55.0-preview.2 进行补丁修复 [PR #28771](https://github.com/google-gemini/gemini-cli/pull/28771)

## 3. 社区热点 Issues（10 个）

### 🐛 [P1] 子代理在 MAX_TURNS 后谎报 GOAL 成功
[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — `codebase_investigator` 子代理在达到最大轮次限制后，虽然其自身结果明确显示"未做任何分析"，但仍以 `status: "success"` 和 `Termination Reason: "GOAL"` 上报。**误导性报告会掩盖真实的执行中断**，影响用户对代理状态的判断。12 条评论，社区关注度高。

### 🐛 [P1] 通用代理（Generalist agent）无限期挂起
[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — 用户反馈当 Gemini CLI 委托给通用代理时（包括创建文件夹等简单操作），会永久挂起，最长等待一小时后手动取消。用户发现有 8 个 👍 支持，属于高影响问题。

### 🐛 [P1] Shell 命令执行后卡在 "Waiting input"
[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — 无用户交互需求的简单 CLI 命令执行完毕后，界面仍显示命令激活并等待输入。该状态恢复问题对自动化工作流影响明显，3 个 👍 支持。

### 🐛 [P1] Bugreport 缺少子代理上下文
[#21763](https://github.com/google-gemini/gemini-cli/issues/21763) — `/bug` 报告仅包含主会话信息，无法看到子代理内部发生的问题，导致调试困难。与 #22323 同属子代理可观测性不足的问题。

### 🐛 [P1] Browser 子代理在 Wayland 下失败
[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — 在 Wayland 环境下 browser agent 无法正常工作，终止原因误报为 GOAL。特定系统环境下的功能缺陷，影响 Linux 桌面用户。

### 🐛 [P1] 创建 Vite 应用时卡在交互式提示
[#22465](https://github.com/google-gemini/gemini-cli/issues/22465) — 代理在 `npm create vite` 的交互式提示处卡住。维护者建议创建 behavioral eval 并调整 prompt，属于 CLI 交互场景的常见故障。

### 🔒 [P2] Auto Memory 无限重试低信号会话
[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — Auto Memory 仅当提取代理成功读取转录后才标记会话已处理。若代理判断会话低信号而跳过，则该会话会被反复重新暴露，造成无限重试循环。**造成资源浪费和重复成本**。

### 🔒 [P2] Auto Memory 需要确定性脱敏并减少日志
[#26525](https://github.com/google-gemini/gemini-cli/issues/26525) — 当前 Auto Memory 将转录内容发送给模型后才通过 prompt 指示脱敏，敏感信息在此之前已进入模型上下文。且服务会记录已存在的 skill 内容，存在泄露风险。**这是安全敏感问题**。

### 🔒 [P2] 模型频繁在随机位置创建临时脚本
[#23571](https://github.com/google-gemini/gemini-cli/issues/23571) — 模型在受限 shell 执行时，倾向于在多个目录生成临时编辑脚本，造成工作区清理负担。反映模型行为与工具选择策略之间的匹配问题。

### 🆕 [P2] 超过 128 个工具时遭遇 400 错误
[#24246](https://github.com/google-gemini/gemini-cli/issues/24246) — 当可用工具超过 400 个时，Gemini CLI 返回 400 错误。用户期望代理能更智能地限制工具范围，这是 MCP 生态扩展带来的新挑战。

## 4. 重要 PR 进展（10 个）

### 🔒 安全修复：升级 shell-quote 至 1.8.4（CRITICAL CVE-2026-9277）
[#28780](https://github.com/google-gemini/gemini-cli/pull/28780) — 由社区提交，修复 `shell-quote` 的 CRITICAL 级别漏洞（Trivy 扫描发现），影响 `package-lock.json`。建议尽快合入。

### 🔒 安全修复：升级 simple-git 至 3.32.3（CRITICAL CVE-2026-28292）
[#28778](https://github.com/google-gemini/gemini-cli/pull/28778) — 同样由社区提交，修复 `simple-git` 的 CRITICAL 漏洞，从 3.28.0 升级至 3.32.3。

### 🛠 核心修复：解决 IDE 连接的目录失配问题
[#28729](https://github.com/google-gemini/gemini-cli/pull/28729) — 修复在 Cider 或 VS Code fork/远程工作区（FUSE/虚拟路径不同）下无法连接 IDE 扩展的问题。对使用自定义 VS Code 发行版的用户很重要。

### 🛠 核心修复：动态解析 Cloud Workstations 代理重定向 URI
[#28688](https://github.com/google-gemini/gemini-cli/pull/28688) — 修复 Google Cloud Workstations VM 中 OAuth 2.0 认证失败的问题，因静态配置了 `localhost` 重定向地址，而浏览器运行在本地而非 VM 中。

### 🛠 核心修复：解决模型容量耗尽误报与配额映射
[#28730](https://github.com/google-gemini/gemini-cli/pull/28730) — 修复 CLI 在容量突增时显示错误的容量耗尽消息、core 包中配额查找映射错误，并保证 UI 中保留 "Keep trying" 选项。

### 🛠 核心修复：容量耗尽错误分类为终态
[#28599](https://github.com/google-gemini/gemini-cli/pull/28599) — 将 `MODEL_CAPACITY_EXHAUSTED` (HTTP 429) 明确分类为终态错误，避免客户端无限重试，立即触发模型回退链。与 #28716 相关联。

### ✅ 新增：本地 eval 报告命令与开发文档
[#28369](https://github.com/google-gemini/gemini-cli/pull/28369) — 新增 `npm run eval:report` 汇总 Vitest `report.json` 中各模型的通过率，并正确支持重复测试映射回 inventory policies。**提升评估效率**。

### ✅ 新增：工具调用格式化器与失败摘要集成
[#28305](https://github.com/google-gemini/gemini-cli/pull/28305) — 评估失败时自动在控制台打印紧凑的编号工具调用时间线（含参数、状态与错误详情），大幅简化失败原因分析。

### 🛠 核心修复：Diff hunk 标记误判为 @file 引用
[#28581](https://github.com/google-gemini/gemini-cli/pull/28581) — 防止 `@@` diff hunk 标记被解析为 `@file` 引用，避免在大型 diff 中触发递归全工作区 glob 搜索导致的 `minimatch`/`path-scurry` 堆增长。

### 🛠 安全/体验：改进 Vertex AI 401 错误提示
[#28679](https://github.com/google-gemini/gemini-cli/pull/28679) — 当用户配置 vertex-ai 认证但仅提供标准 Gemini API key 时，给出更明确的错误引导，改善认证配置的开发者体验。

## 5. 功能需求趋势

从近期 Issue 中可以提炼出以下社区最关注的功能方向：

1. **子代理（Subagent）可靠性与可观测性**：多个 P1 Issue 集中在子代理状态误报、挂起、缺少上下文信息等问题。社区期待更可靠的执行状态追踪，以及 `/chat share` 能包含子代理轨迹（[#22598](https://github.com/google-gemini/gemini-cli/issues/22598)）。这一方向已是当前最高优先级。

2. **Auto Memory 系统成熟化**：围绕 Auto Memory 涌现出一批问题，包括无限重试、敏感信息脱敏不足、无效补丁静默跳过等（[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)、[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)、[#26523](https://github.com/google-gemini/gemini-cli/issues/26523)）。记忆功能正从"可用"向"可信、安全、高效"演进。

3. **安全意识提升**：安全类 Issue 的讨论热度在上升，包括自动记忆中密钥脱敏的确定性方案、destructive 行为（`git reset`/`--force`）的劝阻机制（[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)）。同时依赖安全（CVE 修复）已成为 PR 的重要组成部分。

4. **AST 感知的代码理解**：多个 Issue 在探讨利用 AST 进行更精确的文件读取、代码搜索与代码库映射（[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)、[#22746](https://github.com/google-gemini/gemini-cli/issues/22746)）。这被认为是减少 token 噪声、提升编辑精度的潜在方向。

5. **工具范围弹性**：随着 MCP 生态扩展，"工具数量超限"问题开始出现（[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)）。社区期望代理能够智能地**只暴露当前任务相关的工具子集**，而非全部加载。

## 6. 开发者关注点

**高频痛点：**

1. **状态谎报不可接受**：子代理达到轮次限制后仍报告成功（#22323），会直接误导用户决策。开发者希望"未完成就是未完成"，建议在下游工具中不要轻信代理的自报状态，必要时可自行校验产物或日志。

2. **无限挂起与重试仍是头号体验问题**：通用代理挂起（#21409）、shell 命令假死（#25166）、容量耗尽导致客户端卡死（#28599）——这些问题的共同特点是**缺乏超时/终止机制**。开发者在日常使用中建议留意 CLI 版本更新，并关注相关修复的发布说明。

3. **安全边界与脱敏的时机**：Auto Memory 在把内容发送给模型后才提示脱敏（#26525），这在设计上存在**潜在信息泄露窗口**。若你正在使用 Auto Memory 功能处理敏感代码库，建议在模型中谨慎配置数据保留策略。

4. **配置被忽略**：Browser Agent 忽略 `settings.json` 中的 `maxTurns` 等配置（#22267），以及 v0.33.0 后子代理绕过禁用配置自动启用（#22093）——这些都暴露了配置系统的一致性问题。建议升级后重新检查你的 `settings.json` 是否如预期生效。

**开发建议：**
- 关注 #28730 和 #28599 两个 PR 的合入情况，它们直接关系到容量耗尽时的体验改进
- 若在 Linux（特别是 Wayland）环境下使用浏览器代理，跟踪 #21983 的修复进展
- 子代理可观测性（trajectory）问题暂无快速解决方案，在关键任务中建议**避免依赖子代理的自我报告**，必要时通过文件系统状态做二次确认

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-08-12）

## 今日速览

过去 24 小时无新版本 Release。社区侧共更新 40 条 Issue 和 2 条 PR，重点集中在：Windows 插件安装/更新失败、`/config model` 清空配置、MCP 响应 BigInt 崩溃、大会话恢复 OOM 等回归问题；同时新增多个 triage Issue，围绕技能/模型配置兼容性和 MCP 认证展开。

## 社区热点 Issues

以下为过去 24 小时内最值得关注的 10 个 Issue：

1. **#4431 `/config model` 会清空所有设置**  
   作者发现 v1.0.79 中使用 `/config model` 会把 `settings.json` 整体覆盖，属于高危配置数据丢失问题。  
   3 条评论，社区高度关注。  
   🔗 https://github.com/github/copilot-cli/issues/4431

2. **#4251 大会话恢复 OOM / 单核满载 70 分钟（1.0.74 回归）**  
   同一会话在 1.0.73 可正常恢复，升级到 1.0.74 后内存暴涨 3–4 倍，影响长期使用者的日常流程。  
   3 条评论。  
   🔗 https://github.com/github/copilot-cli/issues/4251

3. **#4151 Windows 插件安装始终失败：Access is denied (os error 5)**  
   无论是 marketplace、GitHub 仓库还是本地目录源，`copilot plugin install` 在 Windows 11 上 100% 失败。  
   3 条评论。  
   🔗 https://github.com/github/copilot-cli/issues/4151

4. **#4095 Windows 插件更新因 VS Code 占用句柄失败**  
   当 VS Code 正在运行，Copilot 扩展会持有 `installed-plugins` 的 watcher 句柄，导致 `copilot plugin update` 报 Access denied。  
   该问题获得 **14 👍**，是当前社区呼声最高的 Windows 问题之一。  
   🔗 https://github.com/github/copilot-cli/issues/4095

5. **#4211 MCP 响应包含 BigInt 导致任务中止**  
   MCP server 返回大数字时，CLI 无法序列化 BigInt，正在执行的任务全部失败，影响 MCP 生态集成稳定性。  
   3 条评论。  
   🔗 https://github.com/github/copilot-cli/issues/4211

6. **#3976 原生 `tgrep` 索引器在大 monorepo 上 OOM 杀死宿主机**  
   启用 `copilot_cli_tgrep` 后，Rust 原生索引器没有内存上限，大仓库场景下会拖垮整个机器。  
   2 条评论。  
   🔗 https://github.com/github/copilot-cli/issues/3976

7. **#4439 GitLab MCP OAuth 元数据因 RFC 8414 issuer 不匹配被拒**  
   Copilot CLI 1.0.79 对 GitLab Self-Managed MCP Server 的 OAuth 元数据校验过于严格，导致无法完成认证。  
   1 条评论，属于 MCP 兼容性新问题。  
   🔗 https://github.com/github/copilot-cli/issues/4439

8. **#4438 `disable-model-invocation: true` 技能无法被显式调用**  
   项目技能设置该字段后，`skill()` 工具返回 `Skill not found`，用户手动请求也无效，违背“仅限手动”的预期。  
   1 条评论。  
   🔗 https://github.com/github/copilot-cli/issues/4438

9. **#4434 用户级默认模型在新建会话中不生效**  
   通过 `/config model` 设置用户默认模型后，`/clear` 或 sessions 界面新建的会话不会使用该模型，必须重启 CLI 才生效。  
   1 条评论。  
   🔗 https://github.com/github/copilot-cli/issues/4434

10. **#4451 显式斜杠技能被重复加载并报 “Skill not found”**  
    交互式斜杠技能已经成功展开，但助手随后又通过模型侧 `skill()` 重复加载，导致出现冗余失败。  
    获 2 👍，属于技能解析链路的新 bug。  
    🔗 https://github.com/github/copilot-cli/issues/4451

## 重要 PR 进展

过去 24 小时仅 2 个 PR 有更新：

1. **#4449 将 PR 自动化从 `pull_request_target` 迁移出来**  
   该 draft PR 旨在降低 PR 驱动工作流的安全风险：将不受信任的 PR 输入限制在低权限 `pull_request` 工作流中，仓库写操作改为单独的高权限流程。  
   🔗 https://github.com/github/copilot-cli/pull/4449

2. **#4428 添加初始 devcontainer 配置**  
   为仓库增加 devcontainer 配置，便于贡献者在容器化开发环境中快速上手。  
   🔗 https://github.com/github/copilot-cli/pull/4428

## 功能需求趋势

从近期 Issues 中可提炼出以下社区关注方向：

- **MCP 集成深度化**：越来越多用户接入自有 MCP Server，BigInt 序列化、OAuth 元数据校验、默认 GitHub MCP toolset 未启用等问题，说明 MCP 仍是当前最活跃的集成方向。
- **Claude Code 生态兼容**：多个 Issue 涉及 `.claude/rules`、`.claude/agents/*/AGENT.md`、项目技能与插件技能冲突，社区希望 Copilot CLI 能更好兼容 Claude Code 的规则和 Agent 定义。
- **性能与资源控制**：大会话恢复 OOM、`tgrep` 索引器无内存上限、搜索工具长时间卡死，表明用户对长会话和大型仓库场景的资源占用非常敏感。
- **配置持久化与模型选择可靠性**：`/config model` 清空配置、用户默认模型不生效、auto 模式选中不可用模型等，都指向配置/模型选择链路需要更稳健。
- **权限精细化与企业治理**：社区提出读操作与写操作应区分权限提示、支持企业级 sandbox 策略配置，说明除个人开发者外，企业采用率在上升。

## 开发者关注点

- **Windows 平台体验仍是短板**：插件安装/更新受文件锁和 VS Code watcher 影响，反馈集中且呼声高。
- **配置安全与一致性**：配置被清空、默认模型不生效、重复技能加载等问题直接影响日常使用，容易造成信任流失。
- **MCP 互操作性**：第三方 MCP server 的复杂响应类型和 OAuth 流程兼容性不足，是当前集成类用户的核心痛点。
- **长会话内存问题**：大 session 恢复 OOM 和搜索工具卡死，在 monorepo 用户群中尤为严重。
- **模型/子代理选择逻辑不透明**：Rubber Duck 未使用互补模型、AGENT.md 中 `model:` 覆盖会话模型、auto 模式选中不可用模型，都让用户难以预期实际花费和运行行为。
- **供应链安全**：有用户反馈 CLI 内置 `adm-zip` 存在高危 CVE，企业安全扫描受阻，希望官方尽快升级依赖。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-08-12**  
**数据来源：github.com/MoonshotAI/kimi-cli**

---

## 1. 今日速览

过去 24 小时无新版本发布，但社区活跃度保持高位。最受关注的议题是**记忆系统（Memory System）的强烈诉求**：两条相关 Issue 持续被顶起（#1283 已积累 34 条评论），用户对“跨会话持久上下文”的渴望非常明显。PR 方面，除 thinking effort 功能 PR（#2509）持续推进外，外部贡献者 hobostay 提交的 6 个代码质量修复 PR 在近期集中关闭，代码健壮性工作获得显著进展。

---

## 2. 版本发布

过去 24 小时无新版本发布。

---

## 3. 社区热点 Issues

本期数据窗口内共有 **5 条** 活跃 Issue（全部列出）。其中 **2 条与记忆系统直接相关**，且 #1283 评论数高达 34 条，是当前社区最热门的话题。

### 3.1 记忆系统（Memory System）— 社区最高呼声

**[#1283] [增强] Feature Request: Memory System - Persistent context across sessions**  
作者：CatKang | 更新：2026-08-11 | 评论：34 | 状态：OPEN  
[查看 Issue](https://github.com/MoonshotAI/kimi-cli/issues/1283)

- **内容**：请求实现全面的记忆系统，让 Kimi Code CLI 能跨会话记住上下文、项目模式和用户偏好。同时支持 AI 自动记忆（AI-managed notes）和手动记忆（用户自定义指令）。
- **重要性**：这是目前评论数最高的 Issue，说明“跨会话记忆”是大量用户的核心痛点。34 条评论表明社区讨论非常热烈，但尚未得到明确响应。
- **链接**：[MoonshotAI/kimi-cli Issue #1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)

---

**[#1478] [增强] 能否优化记忆层？参考文档中也找不到相关说明**  
作者：hahy36 | 更新：2026-08-11 | 评论：1 | 状态：OPEN  
[查看 Issue](https://github.com/MoonshotAI/kimi-cli/issues/1478)

- **内容**：中文用户反馈：记忆层功能不完善，且参考文档中完全没有相关内容（只看到一个 agent.md），做大项目时非常痛苦。用户还贴出了参考信息：`~/.openclaw/workspace/` 下的 `SOUL.md`、`USER.md`、`MEMORY.md`、`memory/` 等目录结构，希望 Kimi Code CLI 借鉴。
- **重要性**：与 #1283 形成呼应，且补充了“文档缺失”这一信息维度。1 条评论说明该 Issue 目前关注度有限，但与 #1283 形成合力，值得开发者跟进。
- **链接**：[MoonshotAI/kimi-cli Issue #1478](https://github.com/MoonshotAI/kimi-cli/issues/1478)

---

### 3.2 新功能请求

**[#2601] [增强] Quote & Reply: comment on any selected part of an AI response**   
作者：topit | 创建：2026-08-11 | 更新：2026-08-11 | 评论：0 | 状态：OPEN  
[查看 Issue](https://github.com/MoonshotAI/kimi-cli/issues/2601)

- **内容**：请求 Kimi Web 支持对 AI 回复中的任意文本片段（段落、代码块、计划步骤、diff 行）进行“引用并回复”——选中并附带评论或追问，让 agent 基于该片段继续工作。
- **重要性**：8 月 11 日新创建，代表一种交互层的新需求——更精细的对话控制。虽然目前 0 评论，但“选中即追问”是开发者工具工作流中的常见诉求，值得关注。
- **链接**：[MoonshotAI/kimi-cli Issue #2601](https://github.com/MoonshotAI/kimi-cli/issues/2601)

---

### 3.3 Bug 反馈

**[#2600] [Bug] Windows PowerShell 7 默认 D 盘启动时，打开 kimi code 找不到路径**  
作者：RooKichenn | 创建：2026-08-11 | 更新：2026-08-11 | 评论：0 | 状态：OPEN  
[查看 Issue](https://github.com/MoonshotAI/kimi-cli/issues/2600)

- **内容**：Kimi Code CLI 0.33 版本。用户设置了 PowerShell 7 默认启动目录为 D 盘（不从 C 盘系统盘打开），从 `D:` 打开 kimi code 时无法找到路径。
- **重要性**：Windows 平台用户绕开系统盘启动是常见操作，该 bug 会影响这部分用户的使用。目前 0 评论，但属于明确的跨平台兼容性问题。
- **链接**：[MoonshotAI/kimi-cli Issue #2600](https://github.com/MoonshotAI/kimi-cli/issues/2600)

---

**[#2599] [Bug] CLI 规划任务时 todo 出现“验尸”字样**  
作者：KING0177 | 创建：2026-08-11 | 更新：2026-08-11 | 评论：0 | 状态：OPEN  
[查看 Issue](https://github.com/MoonshotAI/kimi-cli/issues/2599)

- **内容**：Kimi Code CLI 0.34.0（allegro 平台，kimi k3 模型，2018 款 Intel Mac）。在规划任务时，todo 中出现“验尸”（Autopsy）字样，用户表示“好吓人”。
- **重要性**：虽然看起来是一个翻译/术语问题，但“验尸”这类词语出现在任务列表中会严重破坏信任感，可能是翻译模型选择不当或术语表缺失导致。用户反馈直观，值得快速修复。
- **链接**：[MoonshotAI/kimi-cli Issue #2599](https://github.com/MoonshotAI/kimi-cli/issues/2599)

---

## 4. 重要 PR 进展

本期数据窗口内共有 **8 条** PR 更新（全部列出）。其中 6 条由外部贡献者 **hobostay** 提交，现已 CLOSED，主要内容为替换 `assert` 语句、修复竞态条件等代码质量改进；1 条功能 PR（thinking effort）正在推进中。

### 4.1 功能推进

**[#2509] [OPEN] feat(kimi): configurable thinking effort and /effort command**  
作者：n-WN | 创建：2026-07-18 | 更新：2026-08-11 | 状态：OPEN  
[查看 PR](https://github.com/MoonshotAI/kimi-cli/pull/2509)

- **内容**：为 Kimi Code CLI 增加可配置的 thinking effort（推理力度），并新增 `/effort` 命令。解决 #2501，并关联 #318（reasoning_effort 支持）、#2499（保留旧式 reasoning_effort 透传）。
- **重要性**：这是当前唯一一条处于 OPEN 状态的功能 PR。thinking effort 的可调节性直接关系到用户对输出质量与响应速度的平衡控制，值得期待。
- **链接**：[MoonshotAI/kimi-cli PR #2509](https://github.com/MoonshotAI/kimi-cli/pull/2509)

---

### 4.2 代码质量与健壮性修复（hobostay 系列）

**[#2057] [CLOSED] fix(acp): replace assert statements with proper RuntimeError exceptions**  
作者：hobostay | 更新：2026-08-11 | 状态：CLOSED  
[查看 PR](https://github.com/MoonshotAI/kimi-cli/pull/2057)

- **内容**：将 `acp/session.py` 中的 5 处 `assert` 替换为 `RuntimeError`。原因是 Python 的 `-O` 优化选项会剥离所有断言，导致生产环境安全检查被静默禁用。该文件中的断言保护了关键状态（`_ToolCallSta...`）。
- **重要性**：修复了 `-O` 模式下严重的安全隐患。CLOSED 状态意味着修复已被合入。
- **链接**：[MoonshotAI/kimi-cli PR #2057](https://github.com/MoonshotAI/kimi-cli/pull/2057)

---

**[#2056] [CLOSED] fix(wire): eliminate TOCTOU race in WireFile.append_record**  
作者：hobostay | 更新：2026-08-11 | 状态：CLOSED  
[查看 PR](https://github.com/MoonshotAI/kimi-cli/pull/2056)

- **内容**：修复 `WireFile.append_record` 中的 TOCTOU 竞态条件——原代码先检查 `self.path.exists()` 再调用 `self.path.stat().st_size`，存在文件在两次调用之间被删除的窗口期，会导致未处理的异常。
- **重要性**：同类竞态问题是文件操作中典型且隐蔽的 bug，修复后提升了文件追加记录的可靠性。
- **链接**：[MoonshotAI/kimi-cli PR #2056](https://github.com/MoonshotAI/kimi-cli/pull/2056)

---

**[#2055] [CLOSED] fix(agentspec): replace assert with proper AgentSpecError exception**  
作者：hobostay | 更新：2026-08-11 | 状态：CLOSED  
[查看 PR](https://github.com/MoonshotAI/kimi-cli/pull/2055)

- **内容**：将 `agentspec.py` 中的 `assert agent_spec.extend is None` 替换为真正的 `AgentSpecError` 异常。理由同 #2057——`assert` 在 `-O` 模式下会被剥离，导致该安全校验被静默跳过。
- **重要性**：与 #2057 同属一个模式，整体提升了代码在优化模式下的安全性。
- **链接**：[MoonshotAI/kimi-cli PR #2055](https://github.com/MoonshotAI/kimi-cli/pull/2055)

---

**[#1328] [CLOSED] Fix minor bugs in file tools and UI feedback**  
作者：hobostay | 更新：2026-08-11 | 状态：CLOSED  
[查看 PR](https://github.com/MoonshotAI/kimi-cli/pull/1328)

- **内容**：修复三个影响用户体验和正确性的小 bug：
  1. 修复 `StrReplaceFile` 中替换次数计算错误（多次编辑时基于 `original_content` 计算，未考虑累积变更）。
  2. UI 反馈相关问题（其他两项）。
- **重要性**：文件替换在代码生成工具中是高频操作，替换计数错误可能导致用户对变更内容误判。
- **链接**：[MoonshotAI/kimi-cli PR #1328](https://github.com/MoonshotAI/kimi-cli/pull/1328)

---

**[#1082] [CLOSED] fix(pyinstaller): filter non-existent dateparser cache files**  
作者：hobostay | 更新：2026-08-11 | 状态：CLOSED  
[查看 PR](https://github.com/MoonshotAI/kimi-cli/pull/1082)

- **内容**：修复 PyInstaller 收集 `dateparser` 数据文件时的报错。`dateparser_tz_cache.pkl` 缓存文件是在首次使用时惰性生成的，在全新安装或 CI 环境中可能不存在，导致 PyInstaller 收集失败。
- **重要性**：解决了打包分发场景下的构建稳定问题，对 CI/CD 和发布流程友好。
- **链接**：[MoonshotAI/kimi-cli PR #1082](https://github.com/MoonshotAI/kimi-cli/pull/1082)

---

**[#1077] [CLOSED] fix: remove redundant mode validation in WriteFile tool**  
作者：hobostay | 更新：2026-08-11 | 状态：CLOSED  
[查看 PR](https://github.com/MoonshotAI/kimi-cli/pull/1077)

- **内容**：删除 `src/kimi_cli/tools/file/write.py` 中第 84-91 行对 `mode` 参数的冗余运行时校验（原本检查是否为 `overwrite` 或 `append`）。
- **重要性**：代码清理类 PR，降低了不必要的运行时开销和维护成本。
- **链接**：[MoonshotAI/kimi-cli PR #1077](https://github.com/MoonshotAI/kimi-cli/pull/1077)

---

**[#1393] [CLOSED] fix(acp): route shell commands through terminal args**  
作者：hanhan3344 | 更新：2026-08-11 | 状态：CLOSED  
[查看 PR](https://github.com/MoonshotAI/kimi-cli/pull/1393)

- **内容**：修复 ACP Shell 终端执行——将 shell 可执行文件传入 `command`，shell 调用参数传入 `args`；适配当前 ACP SDK 响应结构（使用 `terminal_id`）；新增 bash 和 PowerShell 的 command/args 路由回归测试。
- **重要性**：ACP 协议是未来多智能体协作基础设施的重要一环。此修复确保了 ACP Shell 终端的正确调用方式，并明显补强了测试覆盖。
- **链接**：[MoonshotAI/kimi-cli PR #1393](https://github.com/MoonshotAI/kimi-cli/pull/1393)

---

## 5. 功能需求趋势

从当前活跃 Issue 中可提炼出以下社区关注方向：

### 5.1 跨会话记忆与持久化上下文（最高优先级）
- 代表 Issue：#1283、#1478
- 用户诉求：自动记忆 + 手动记忆、项目上下文保留、用户偏好持久化
- 补充痛点：参考文档中完全找不到记忆系统说明，仅有 `agent.md`；大型项目体验因此很差

### 5.2 对话交互深度增强
- 代表 Issue：#2601（Quote & Reply）
- 用户诉求：对 AI 回答的任意片段做“选中即评论/追问”，将多步任务分解到精确位置

### 5.3 跨平台 / 终端兼容性
- 代表 Issue：#2600（PowerShell 7 默认 D 盘路径问题）
- 用户诉求：终端默认工作目录非系统盘时，CLI 应能正常解析路径

### 5.4 任务规划文案与术语本地化
- 代表 Issue：#2599（todo 中出现“验尸”）
- 用户诉求：任务规划阶段的措辞应准确、无歧义，避免引发负面联想

---

## 6. 开发者关注点

### 6.1 记忆系统文档缺失，大型项目心智负担重
开发者在做大项目时，Kimi Code CLI 无法跨会话记住关键上下文，且文档中找不到记忆机制的说明。用户不得不自行参考相似工具的目录结构（如 `~/.openclaw/workspace/`）来猜测实现方式。**建议：明确记忆系统的存在与使用方式，或提供实现时间表。**

### 6.2 Windows 平台路径解析问题
PowerShell 7 用户将默认启动目录设为非系统盘后，CLI 无法找到路径。**建议：在 0.34.x 中尽快复现并修复 Windows 路径解析逻辑。**

### 6.3 规划任务中的文案审校
任务列表中出现的“验尸”一词影响用户信任。**建议：审查 todo 措辞的翻译和生成逻辑，避免类似术语出现在面向用户的输出中。**

### 6.4 外部贡献者活跃，代码质量议题获高关注
hobostay 一次性提交了 6 个 PR，集中解决 `assert` 滥用、TOCTOU 竞态、冗余校验等问题，且全部被合入。这说明社区对代码健壮性和生产环境安全性有较高要求。**建议：维护团队可考虑建立代码质量清单，鼓励此类贡献。**

---

> **说明**：本期数据窗口内活跃条目合计为 5 条 Issue + 8 条 PR，以上已全部列出。如需回顾更早的条目，可访问 [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) 仓库页面查看完整列表。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-08-12

## 今日速览

过去 24 小时，社区围绕 `apply_patch` 工具的安全性集中提交了多个 issue（覆盖已有文件、多文件变更缺乏事务回滚），同时 v2 分支迎来密集的核心与 TUI 修复（MCP 工具快照竞态、bundler 解析恢复、write 输出展示等）。此外，多个 TUI 连接同一 `opencode serve` 导致的状态串扰成为高频反馈，多个相关 issue 被连续提交。

## 社区热点 Issues

挑选 10 个最值得关注的 Issue，按讨论热度与影响面排序：

1. **[#8501 [FEATURE] 允许展开粘贴的文本](https://github.com/anomalyco/opencode/issues/8501)** — 230 👍 / 35 评论
  用户希望将自动摘要的粘贴文本还原为可编辑原文，避免因提示词压缩而丢失可编辑性。虽创建已久，仍在持续获得关注，是最受社区认同的功能请求之一。

2. **[#16017 [FEATURE] Go 计划用量/余额 API 端点](https://github.com/anomalyco/opencode/issues/16017)** — 137 👍 / 33 评论
  开发者希望将 Go 订阅配额数据通过公开 API 暴露，供客户端读取 Dashboard 已有信息。尽管标记为 CLOSED，讨论热度依然不减。

3. **[#39831 Zen: gpt-5.6-luna / gpt-5.6-terra 上游请求失败](https://github.com/anomalyco/opencode/issues/39831)** — 开放中
  通过 Zen 使用这两个模型时稳定返回 HTTP 403，而 gpt-5.4-nano 等模型正常。模型兼容性问题会影响付费用户的实际使用。

4. **[#41751 v1.18.16 server/web 模式恰好丢失 2 个项目技能](https://github.com/anomalyco/opencode/issues/41751)** — 开放中
  仅在项目是 git 仓库时触发，TUI/CLI 模式无此问题，暗示 server/web 模式与 git 层面的初始化有关联，且与技能名称、内容、mtime 无关。

5. **[#39181 同一 server 下多个 TUI 互相串事件](https://github.com/anomalyco/opencode/issues/39181)** — 开放中
  多个 TUI 连接到同一 `opencode serve` 时，branch 显示、事件分发出现跨目录错乱。影响多项目并行开发者，且已有后续 issue（#41839）进一步确认。

6. **[#41828 v2 API 缺口阻碍第三方客户端](https://github.com/anomalyco/opencode/issues/41828)** — 开放中
  第三方 Rust TUI 客户端作者列出 5 项 v2 server 缺失的能力，希望官方补齐 API 以便生态发展。

7. **[#37090 apply_patch 在 Windows 下破坏 CRLF 行尾](https://github.com/anomalyco/opencode/issues/37090)** — 开放中
  `apply_patch` / `write` 会把 CRLF 改为 LF，对默认 Windows 项目产生静默的 diff 噪声，影响 Windows 用户的使用体验。

8. **[#41875 apply_patch 的 `add` 可覆盖已有文件](https://github.com/anomalyco/opencode/issues/41875)** — 开放中
  当前实现不要求 `add` 目标不存在即可写入，存在意外覆盖已有文件的风险，属于工具安全边界问题。

9. **[#41869 v2 启动时 V1→V2 迁移失败（SQLite 语法错误）](https://github.com/anomalyco/opencode/issues/41869)** — 开放中
  旧版消息包含单引号时，迁移 SQL 拼接出错，服务无法启动，直接阻塞用户升级，影响面较大。

10. **[#41777 v2 webfetch 回归：Code Mode 返回 null](https://github.com/anomalyco/opencode/issues/41777)** — 已关闭
  webfetch 在 v2 的 Code Mode 中“成功执行”却返回 null，且从顶层工具列表中消失。回归窗口锁定为 6 月中旬到 7 月某个 next 版本，属于典型 v2 回归问题。

## 重要 PR 进展

挑选 10 个重要的 PR，按内容影响力排序：

1. **[#41888 feat(api): 中断后继续未完成任务](https://github.com/anomalyco/opencode/pull/41888)** — 已合并
  给会话中断端点添加 `continue` 参数，仅当存在持久未完成任务时才恢复执行，同时重新生成 Promise 与 Effect 客户端类型。

2. **[#41838 core: 嵌入 models.dev 快照](https://github.com/anomalyco/opencode/pull/41838)** — 已合并
  将模型目录快照以静态导入方式嵌入 core（`snapshot.txt`），替代编译期 define，简化模型目录的更新与维护流程。

3. **[#41870 feat(tui): cd 目录自动补全](https://github.com/anomalyco/opencode/pull/41870)** — 已合并
  `/cd` 命令切换为目录补全模式，支持 shell 风格的当前目录、home、父目录、嵌套路径与绝对路径，并持久化项目级最近目录。

4. **[#41887 feat(tui): 会话标签栏新增加号按钮](https://github.com/anomalyco/opencode/pull/41887)** — 开放中
  鼠标用户可直接点击 `+` 打开新标签，贴近浏览器标签栏交互体验。

5. **[#41879 test(client): 加速 service 生命周期测试](https://github.com/anomalyco/opencode/pull/41879)** — 已合并
  通过可配置的私有计时策略，生命周期测试从中位数 72.5s 降至 4.5s，节省 93.8% 的测试时间。

6. **[#41885 fix(core): 恢复源码依赖的 bundler 解析](https://github.com/anomalyco/opencode/pull/41885)** — 开放中
  保留约 300 个文件的显式 `.js` 扩展，同时回退 3 个 NodeNext 编译选项，恢复 v2 分支的绿色 typecheck。

7. **[#41884 fix(core): 工具快照与初始 MCP 注册时机竞争](https://github.com/anomalyco/opencode/pull/41884)** — 开放中
  修复恢复会话时在 MCP 工具注册前拍快照，导致模型收到空工具目录且后续注册被忽略的问题。

8. **[#41883 fix(tui): 展示 write 工具完成后的输出](https://github.com/anomalyco/opencode/pull/41883)** — 开放中
  将 #41352 的修复从旧分支 cherry-pick 到 v2，让 write 完成后能高亮显示写入的文件内容。

9. **[#41858 fix(core): 保护 Deferred waiter 清理逻辑](https://github.com/anomalyco/opencode/pull/41858)** — 已合并
  修复生产崩溃 `TypeError: undefined is not an object (evaluating 'X.resumes.indexOf')`，在 vendored effect 补丁中增加防御性守卫。

10. **[#41863 feat(ui): Web 端渲染 Markdown 图片](https://github.com/anomalyco/opencode/pull/41863)** — 已合并
  为 Web 版本增加 Markdown 图片渲染能力，改善 Web 模式下内容展示完整性。

## 功能需求趋势

从所有 Issues 中可提炼出以下社区关注方向：

- **V2 稳定性与功能对齐**：多个 issue/PR 聚焦 v2 的模式切换不可见、plan 模式失效、API 缺口，社区期待 v2 尽快达到与 v1 的 feature parity。
- **TUI 可用性增强**：标签页系统、目录补全、权限弹窗高度可配置、鼠标操作、write 结果可视化，TUI 正加速向现代 IDE 级交互演进。
- **工具安全性**：`apply_patch` 的原子性、覆盖防护和跨平台行尾处理成为集中反馈点，映射出 agent 写文件操作的高风险关切。
- **模型与供应商覆盖**：用户持续要求支持最新模型（gpt-5.6、Grok 4.5），并对 Zen/Go/OpenRouter 等供应商的错误透出与用量 API 提出更高要求。
- **生态与集成**：MCP 服务器文档示例（#41822）、PR 追踪器插件（#41857）、VS Code 通知（#39936），显示社区正在构建更完整的插件和客户端生态。

## 开发者关注点

- **数据安全**:apply_patch 可覆盖已有文件且不支持回滚，开发者担心 agent 工具链造成静默数据损坏。
- **Windows 体验**：CRLF 行尾破坏、关闭按钮行为、系统级静默安装问题，说明 Windows 仍是需要专门治理的平台。
- **共享 server 模式状态串扰**：branch 与事件跨工作区错乱在多个 issue 中被报告，已成为多 TUI 用户的核心痛点。
- **升级迁移阻塞**：V1 数据含单引号即导致迁移失败，暴露迁移路径健壮性不足，影响用户升级 v2。
- **2.0 回归**：webfetch、plan 模式、模式切换等在 v2 中的行为回退，让早期采用者交付成本升高。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-08-12

## 今日速览

过去 24 小时无新版本发布，社区焦点集中在稳定性与登录体验上：GitHub Copilot 设备授权在 WSL 下挂起、组织多模型导致的 429 限流仍在发酵；bun 运行时启动崩溃和 Mac 长时间会话高 CPU 成为性能热点。PR 方面，恢复流式事件 `usage` 字段的 #7982、统一 models.dev 成本映射的 #7981 是重要修复，同时新增了 Qwen 中国区 Token Plan provider 与 Cloudflare AI Gateway 传输支持。

## 社区热点 Issues

1. **#6187 [CLOSED] [bug] Pi login hangs in WSL after browser-based GitHub Copilot device authorization**（25 评论）  
   WSL 下浏览器完成 Copilot 设备授权后，客户端无法感知授权完成，一直卡在登录等待。这是评论数最多的问题，直接影响 WSL 用户的核心登录流程。  
   [GitHub](https://github.com/earendil-works/pi/issues/6187)

2. **#7730 [OPEN] [bug] High CPU usage on Mac OS with long session**（10 评论，👍 8）  
   长时间运行后 CPU 在 50–110% 之间摆动、内存 600–800MB，疑似与会话长度/上下文大小相关。性能类问题通常社区反馈强烈。  
   [GitHub](https://github.com/earendil-works/pi/issues/7730)

3. **#7846 [CLOSED] [bug] Unable to start 0.84.0, 0.84.1, with bun runtime**（10 评论）  
   使用 bun 运行时报 `zlib.createZstdDecompress is not a function`，导致新版无法启动。属于运行时兼容性回归，影响 bun 用户升级。  
   [GitHub](https://github.com/earendil-works/pi/issues/7846)

4. **#7850 [CLOSED] [bug] GitHub Copilot login fails with 429 (Rate Limiting) for organizations with a lot of activated / available models**（7 评论，👍 7）  
   组织账号启用 20+ 模型时，Copilot 登录稳定触发 429。与 #7428 同源，说明多模型组织的限流问题不是个例。  
   [GitHub](https://github.com/earendil-works/pi/issues/7850)

5. **#7444 [CLOSED] WebSocket retry only handles two error codes; other transient response.failed errors hard-stop the turn**（8 评论）  
   WebSocket 重试逻辑只覆盖两个错误码，其他瞬时错误会直接中断整轮对话，影响 API 连接的鲁棒性。  
   [GitHub](https://github.com/earendil-works/pi/issues/7444)

6. **#7836 [OPEN] Edit fuzzy match misses lines with differences in whitespace length**（6 评论）  
   `normalizeForFuzzyMatch` 不折叠空白符，导致 edit 的 `oldText` 因缩进/空格差异匹配失败。小模型在代码编辑时尤其容易踩中此问题。  
   [GitHub](https://github.com/earendil-works/pi/issues/7836)

7. **#7553 [OPEN] Configurable thinking level/model for compaction**（8 评论）  
   Compaction 只能复用当前会话的 thinking level，无法单独指定总结用的模型或思考预算。这是面向 reasoning 模型用户的功能需求。  
   [GitHub](https://github.com/earendil-works/pi/issues/7553)

8. **#7829 [OPEN] Invalid settings.json silently ignored; misleading 'bash not found' error on Windows**（3 评论）  
   Windows 下用户写入未转义反斜杠的 JSON 路径后，配置被静默忽略，最后报出与根因无关的 “bash not found”。属于配置校验与错误提示问题。  
   [GitHub](https://github.com/earendil-works/pi/issues/7829)

9. **#7911 [OPEN] [bug] 0.84.0's delta-only `message_update` removed `usage`, hence no mid-run `usage` on the wire protocol**（2 评论）  
   修复 #7290 时移除了累计 `message` 字段，但 `usage` 也一并消失，导致 JSON/RPC 协议在 `message_end` 前拿不到用量数据。影响集成方实时监控。  
   [GitHub](https://github.com/earendil-works/pi/issues/7911)

10. **#7954 [CLOSED] [bug] OpenAI-compatible SSE turn can hang forever when the response body never ends — no inactivity timeout on the completions path**（2 评论）  
    OpenAI 兼容 SSE 网关若响应体不结束，对话会永久挂起且无超时兜底。作者指出这是结构性问题，具备间歇性复现特征。  
    [GitHub](https://github.com/earendil-works/pi/issues/7954)

## 重要 PR 进展

1. **#7982 [OPEN] fix(coding-agent): preserve usage in streaming events**  
   恢复 JSON/RPC `message_update` 事件中的累计 provider usage，同时保持流式消息线性增长，并补充回归测试。直接修复 #7911。  
   [GitHub](https://github.com/earendil-works/pi/pull/7982)

2. **#7981 [OPEN] fix(ai): map models.dev cost tiers for every provider**  
   将 models.dev 的 `cost.tiers[].tier{type,size}` 映射应用于所有 provider，而不是仅限 GitHub Copilot。修复成本计算不一致问题。  
   [GitHub](https://github.com/earendil-works/pi/pull/7981)

3. **#7904 [CLOSED] fix(edit): normalize single-object edits argument to array**  
   修复 edit 工具拒绝单对象 `edits` 或 JSON 字符串的问题，提高对模型参数封装差异的兼容性。  
   [GitHub](https://github.com/earendil-works/pi/pull/7904)

4. **#7866 [CLOSED] feat(tui): add copyOnSelect option to TuiAltScreen**  
   为全屏 TUI 增加 `copyOnSelect` 选项，允许用户关闭鼠标选中文本时自动复制到剪贴板的行为。  
   [GitHub](https://github.com/earendil-works/pi/pull/7866)

5. **#7865 [CLOSED] fix(tui): handle tui.select.pageUp/pageDown in base SelectList and model-selector**  
   为 SelectList 基础组件和 model-selector 补充 pageUp/pageDown 键绑定处理，统一各选择器交互。  
   [GitHub](https://github.com/earendil-works/pi/pull/7865)

6. **#7905 [CLOSED] fix(config): refine pnpm detection and validate managed install before suggesting update command**  
   修正 `detectInstallMethod()` 对 pnpm 路径的误判，并在建议更新命令前验证是否为 pnpm 托管安装，避免错误指引。  
   [GitHub](https://github.com/earendil-works/pi/pull/7905)

7. **#7897 [CLOSED] fix(coding-agent): inherit subagent session config**  
   子代理默认继承当前会话的 model/thinking 配置，而不是跟随最近打开的任意会话，提升多会话场景下的可预期性。  
   [GitHub](https://github.com/earendil-works/pi/pull/7897)

8. **#7901 [CLOSED] feat(ai): AI Gateway transport over the Cloudflare AI binding**  
   新增 Cloudflare Workers AI Gateway 传输方式，支持通过 env.AI 绑定调用 AI Gateway，扩展部署场景。  
   [GitHub](https://github.com/earendil-works/pi/pull/7901)

9. **#7989 [OPEN] feat(ai): add Qwen Token Plan Individual CN provider**  
   新增中国区 Qwen Token Plan 个人订阅 provider（cn-beijing），复用 `QWEN_TOKEN_PLAN_CN_API_KEY`，补齐中国区模型入口。  
   [GitHub](https://github.com/earendil-works/pi/pull/7989)

10. **#7956 [OPEN] feat(coding-agent): render Mermaid diagrams in HTML exports**  
    让 HTML 导出像 TUI 一样渲染 Mermaid 图，默认折叠并支持从头部切换，提升导出文档的可读性。  
    [GitHub](https://github.com/earendil-works/pi/pull/7956)

## 功能需求趋势

- **多模型/区域化 Provider 支持**：社区持续要求新增模型供应商，如 Qwen 中国区 Token Plan（#7989）、Cloudflare AI Gateway（#7901）、OpenRouter 下 Anthropic 模型兼容（#7938），显示对多样化接入方式的强烈需求。
- **配置灵活性与可定制性**：compaction 独立 thinking 配置（#7553）、主题覆盖（#7722）、硬编码键位绕过 keybinding（#7939）、`--thinking` 参数失效（#7966）、复制行为开关（#7866）——用户希望所有行为都可配置，而不是写死。
- **TUI/终端体验打磨**：Latex 分数渲染（#7760）、VSCode 集成终端 CJK 空白（#7923）、tmux 内 Kitty 图像直通（#7936）、OSC 8 超链接不可点击（#7930）、滚动位置指示（#7970）等，说明终端适配细节仍是高频关注点。
- **协议与数据一致性**：`message_update` 缺失 usage（#7911）、session JSONL v3/v4 版本分歧（#7937）、`/resume` 进度计数不一致（#7960/#7931），集成方和重度用户对线上数据格式的稳定性很敏感。

## 开发者关注点

- **GitHub Copilot 登录流程脆弱**：WSL 下授权后挂起（#6187）、组织多模型触发 429（#7850/#7428），登录环节成为最集中、影响最大的痛点。
- **运行时兼容性**：bun 下 `zlib.createZstdDecompress` 缺失导致启动崩溃（#7846），暴露出对 Node 特有 API 的隐式依赖。
- **长时间运行资源占用**：Mac 上高 CPU/内存（#7730）以及启动延迟对标 jcode 的需求（#7739），说明性能仍是用户关注的核心指标。
- ** edit 工具容错不足**：单对象 edits 被拒（#7904/#7944）、空白符差异导致模糊匹配失败（#7836），开发者希望工具对模型输出更宽容。
- **配置错误缺少校验**：无效 settings.json 被静默忽略并产生误导性报错（#7829），需要更明确的配置验证与错误提示。
- **流式协议数据缺失**：`usage` 在 `message_update` 中消失（#7911），影响需要实时用量统计的客户端与代理层。
- **Windows 终端体验**：CMD 下出现重复输出/内存泄漏（#7947），VSCode 集成终端 CJK 显示空白（#7923），Windows 作为 Pi 使用环境需要更多适配投入。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-08-12）

## 1. 今日速览

今日 Qwen Code 发布 v0.21.10 正式版，重点引入 ACP 推理力度配置与 Web Shell 图片预览能力；同时 v0.21.11-preview.0 修复了 Web Shell 会话导航的安全隐患。社区讨论聚焦于会话恢复/持久化机制、守护进程内存分配缺陷，以及 CLI 错误处理（API 故障被误报为成功）等问题。

## 2. 版本发布

### v0.21.10（正式版）
- **ACP 推理力度配置**：支持通过会话配置将推理力度从 Default 调整至 Max（[#8526](https://github.com/QwenLM/qwen-code/pull/8526)）。
- **Web Shell 图片预览**：点击上传或粘贴的图片时，现在会在 artifact 中打开预览。

### v0.21.11-preview.0 / nightly
- **修复**：Web Shell 中强制执行 prompt-safe 的会话导航。
- **改进**：为会话续接许可增加服务端日志。

### live-host-v0.1.1
- **修复**：CLI 在选择沙箱运行时前先进行探测。
- **修复**：autofix 流程的 scan-and-pick 序列化问题。

## 3. 社区热点 Issues

### 高优先级 / 高风险

1. **[P1] 大会话恢复超时后，当前会话被破坏**（[#8678](https://github.com/QwenLM/qwen-code/issues/8678)）
   会话恢复超时时，守护进程未保留当前会话。相关 PR [#8691](https://github.com/QwenLM/qwen-code/pull/8691) 已合并，实现超时契约与可观测性。社区 7 条评论，讨论热烈。

2. **[P2] OpenAI API 错误在 stream-json 模式下被报告为成功**（[#8920](https://github.com/QwenLM/qwen-code/issues/8920)）
   使用 `--output-format stream-json` 时，API 错误会被包装成 `success:true` 的结果，且进程退出码为 0。对自动化流水线可能造成严重误导。

3. **[P2] 守护进程为每个 ACP 子进程分配 50% 主机内存**（[#8182](https://github.com/QwenLM/qwen-code/issues/8182)）
   `qwen serve` 为每个 `--acp` 子进程计算 V8 堆上限时，基于主机内存而非除以子进程数量，存在 OOM 风险。已有 4 条评论，社区对资源管理设计提出质疑。

4. **[P2] 主分支 CI 失败（E2E Tests）**（[#8959](https://github.com/QwenLM/qwen-code/issues/8959)）
   E2E 测试在 main 分支失败，由机器人自动跟踪。涉及 `a64d1291d2f6` 提交，社区关注 CI 稳定性。

### 平台 / 兼容性

5. **[P2] macOS + iTerm 闪屏问题**（[#8901](https://github.com/QwenLM/qwen-code/issues/8901)）
   每次执行命令前选择选项并回车时出现闪屏，v0.21.8 复现。影响核心交互流畅度，评论区已有复现步骤。

6. **[P2] Windows 下聊天中的文件链接无法打开**（[#8644](https://github.com/QwenLM/qwen-code/issues/8644)）
   驱动器盘符冒号被 URL 编码为 `%3A`，VS Code 无法解析。Windows 用户阻塞性问题，已标记 need-information。

7. **[P2] 图片加载崩溃回归（自 0.21.2）**（[#8957](https://github.com/QwenLM/qwen-code/issues/8957)）
   v0.21.1 之后版本读取图片时崩溃，影响所有图像相关 workflow，社区已标记为 regression。

### 安全 / 配置

8. **[P2] `npm update` 报告 2 个高危漏洞**（[#8944](https://github.com/QwenLM/qwen-code/issues/8944)）
   自 v0.21.0 起，依赖审计出现 2 个 high severity 漏洞，社区关注供应链安全。

9. **[P2] 多工作区模式下冷加载使用错误的运行时存储**（[#8909](https://github.com/QwenLM/qwen-code/issues/8909)）
   `POST /session/:id/load` 和 `resume` 路由未在正确的 ambient storage 上下文执行恢复流程，可能导致会话串场。

10. **[P2] CLI 帮助信息缺失已注册参数**（[#8897](https://github.com/QwenLM/qwen-code/issues/8897)）
    `--approval-mode` 和 `--auth-type` 已在代码中注册，但 `qwen --help` 未展示。CLI 可用性问题，社区期待修复。

## 4. 重要 PR 进展

1. **[设计文档] 推理片段不变量清单**（[#8534](https://github.com/QwenLM/qwen-code/pull/8534)）
   系统梳理所有 `Content[]`/`Part[]` 变更点，明确 reasoning episode 签名保持规则，为后续推理链完整性打基础。

2. **[安全] 守护进程守卫跨工作树 Git 变更**（[#8687](https://github.com/QwenLM/qwen-code/pull/8687)）
   阻止模型通过 `-C`/`--work-tree`/`--git-dir` 逃逸会话工作区执行 Git 变更，属于模型安全边界加固。

3. **[CI] 修复 autofix 验证门对 runner git 配置的依赖**（[#8961](https://github.com/QwenLM/qwen-code/pull/8961)）
   解决测试因 runner 本地 git 配置差异而失败的问题，提高 CI 可复现性。

4. **[Web Shell] 后台代理工作时延迟显示助手页脚**（[#8787](https://github.com/QwenLM/qwen-code/pull/8787)）
   防止 Copy、Branch 等操作在最终响应产出前被误用，提升多代理场景下的 UI 语义正确性。

5. **[守护进程] 自适应增长 live-journal 上限**（[#8905](https://github.com/QwenLM/qwen-code/pull/8905)）
   某轮次超出 journal 上限时，先尝试双倍扩容再丢弃旧数据，避免频繁截断导致会话不连续。

6. **[核心] 支持虚拟子代理 ID 中的保留字符**（[#8717](https://github.com/QwenLM/qwen-code/pull/8717)）
   允许 agent 任务 ID 包含 `:` 和 `/` 等字符，通过 Base64URL 无损往返，增强复杂 workflow 兼容性。

7. **[Web Shell] 新增 Git diff 源与分支切换**（[#8467](https://github.com/QwenLM/qwen-code/pull/8467)）
   覆盖 Uncommitted/Unstaged/Staged/Committed/Branch 对比，支持搜索式提交与分支选择器，补齐 Web Shell Git 工作流。

8. **[审查系统] 反向审计增加缺陷层视角**（[#8956](https://github.com/QwenLM/qwen-code/pull/8956)）
   针对 shell/git 守卫、沙箱、权限解释器等“系统执行建模”类改动，新增缺陷层透镜，提升代码审查深度。

9. **[集成] 新增钉钉工作空间（DWS）频道**（[#8937](https://github.com/QwenLM/qwen-code/pull/8937)）
   保留现有钉钉机器人频道，新增独立 DWS Channel，支持 @ 消息与群聊/单聊，丰富协作入口。

10. **[核心] OpenAI Responses API 内容生成器**（[#8169](https://github.com/QwenLM/qwen-code/pull/8169)）
    为 OpenAI Responses API 添加新的内容生成器支持，扩展模型后端兼容面。

## 5. 功能需求趋势

- **会话生命周期管理**：多工作区恢复、超时保护、独立会话（不绑定工作区）、自动调度提示的转录恢复等，是当前最集中的改进方向。
- **守护进程资源治理**：ACP 子进程内存配额、live-journal 容量自适应、跨工作区隔离等，反映社区对 `qwen serve` 稳定性与资源控制的迫切需求。
- **Web Shell 交互增强**：Git 操作（分支切换、diff 源）、图片预览、动态工作流可视化与控制，Web Shell 正逐步成为与 CLI 并行的重量级前端。
- **推理透明度**：从“推理力度可配置”到“推理片段签名保留”，社区希望推理过程更可控、可审计。
- **自动化审查与 CI 的工程化**：增量 review、Maven 多模块支持、验证门 hermetic 化，Qwen Code 自身开发流程也在持续吸收用户反馈。

## 6. 开发者关注点

- **错误处理可靠性**：stream-json 输出将 API 错误包装为成功，严重影响自动化集成，开发者对此反应强烈。
- **跨平台体验一致性**：Windows 文件链接 URL 编码、macOS + iTerm 闪屏、Windows 桌面版启动失败，多端体验问题频繁上报。
- **CLI 可发现性**：已注册但未展示的 CLI 参数，说明文档与实现之间存在偏差，影响功能触达。
- **内存与性能稳定性**：守护进程内存分配、图片加载崩溃、内联图片重复解码等，说明大规模会话场景下的资源管理仍需加固。
- **安全与合规**：高危 npm 依赖漏洞触发社区对供应链安全的担忧，期待快速响应与透明披露。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**日期：2026-08-12**
**数据来源：Hmbown/CodeWhale (DeepSeek-TUI 相关项目)**

---

## 1. 今日速览

今日未发布新版本，但社区 PR 活跃度较高，共 7 条 PR 于过去 24 小时内更新。最值得关注的是：一个影响宽屏终端体验的 UI 回归问题（#5322）正在被社区反馈；同时，会话快照读取与崩溃恢复的分离修复（#5320）和子代理嵌套深度限制修复（#5317）均取得了实质性进展。此外，`OrcaRouter` 提供商注册 PR（#5321）引发了对更多模型网关支持的兴趣。

---

## 2. 版本发布

无新版本 Release。上一次已知版本为 v0.9.5（参照问题 #5322 中的复现描述）。

---

## 3. 社区热点 Issues

*数据集中共收录 3 条 issue（过去 24 小时更新）。以下是全部值得关注的条目。*

### #5316 [OPEN] EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)
- **作者**: aboimpinto
- **创建/更新**: 2026-08-10 / 2026-08-11
- **评论数**: 2 | 👍: 0
- **链接**: https://github.com/Hmbown/CodeWhale/issues/5316

**详情**: 这是一个大型重构的伞形追踪 issue（EPIC-005），目标是对 CodeWhale TUI 进行 crate 拆分。该 issue 作为整个工作的总入口，所有子 EPIC 和 FEAT 都会归拢至此，相关 PR 也会在此记录。

**关注价值**: 这是理解项目近期架构演进方向的最高层级入口。对于关注 TUI 可维护性、模块化边界的开发者来说，这是一个值得长期跟踪的“锚点”。目前评论数仅 2，社区尚处于早期讨论阶段。

---

### #5322 [OPEN] [bug] Regression: output area doesn't fill wide terminals (worked in v0.8.65)
- **作者**: M-Maciej
- **创建/更新**: 2026-08-11 / 2026-08-11
- **评论数**: 1 | 👍: 0
- **链接**: https://github.com/Hmbown/CodeWhale/issues/5322

**详情**: 这是一个典型的回归报告。在 v0.8 中，transcript/output 区域会扩展以填满终端宽度；但在 v0.9 中被限制为最大宽度。在宽屏显示器上，文本区域显得拥挤，并且两侧出现大量未使用的空白。缩小窗口可以正常工作，但扩大窗口时布局不会自适应。

**关注价值**: 终端 UI 的响应式布局是 TUI 工具的核心体验之一，该回归直接影响宽屏/大分辨率用户的日常使用。虽然评论数只有 1，但问题描述清晰，很可能在后续版本中获得修复优先级的提升。

---

### #5253 [CLOSED] [bug] bug(subagents): nested max_depth can widen the root session depth budget
- **作者**: cacdcaecawae
- **创建/更新**: 2026-08-06 / 2026-08-11
- **评论数**: 1 | 👍: 0
- **链接**: https://github.com/Hmbown/CodeWhale/issues/5253

**详情**: 该问题描述了一个递归预算逃逸漏洞：一个后代 subagent 可以在嵌套 spawn 时显式提供一个 `max_depth`，从而扩大从根会话继承的绝对递归预算。PR #3931 已添加了全局 `MAX_SPAWN_DEPTH_CEILING`（值为 8），但如果宿主或操作员配置了更小的根/会话 `max_spawn_depth`，则嵌套 spawn 中的显式 `max_depth` 仍然可能打破限制。

**关注价值**: 该 issue 被标记为 CLOSED，并已被 PR #5317 修复。它揭示了系统中深度控制逻辑的一个隐蔽边界问题——即使有全局上限，继承规则若不严谨，依然可能被显式参数绕过。对于涉及 subagent 调度、递归调用的开发者，这是一个很有价值的安全案例。

---

## 4. 重要 PR 进展

*数据集中共收录 7 条 PR（过去 24 小时更新）。以下按关注度排序。*

### #5317 [CLOSED] fix(subagents): cap nested max_depth by inherited budget
- **作者**: ousamabenyounes
- **创建/更新**: 2026-08-10 / 2026-08-11
- **链接**: https://github.com/Hmbown/CodeWhale/pull/5317

**功能**: 修复 #5253。`child_max_spawn_depth_for_spawn` 在显式 `max_depth` 分支中丢失了继承的绝对预算，导致嵌套 spawn 可能超越根/会话选择的递归深度。此 PR 在该分支中添加了 `inherited.min(..)` 约束，与已有的 profile-hint 分支行为保持一致。

**重要性**: 这是一个精细但关键的修复，堵住了递归深度预算被扩大的漏洞。已经 CLOSED（大概率被合并），对 subagent 调度系统的正确性是重要保障。

---

### #5318 [OPEN] feat(tui): pin host terminal window as an always-on-top mini window
- **作者**: SparkofSpike
- **创建/更新**: 2026-08-11 / 2026-08-11
- **链接**: https://github.com/Hmbown/CodeWhale/pull/5318

**功能**: 为 Windows 上的 HOST 终端窗口添加“缩小并置顶”（PiP）能力。通过右键上下文菜单或 `/pin` 命令，可将终端窗口缩小为 640x400 并保持始终置顶；再次触发时恢复原始窗口大小和最大化状态。

**重要性**: 这是一个偏体验类的功能，模拟画中画效果，适合多任务场景（如边编码边查阅 TUI）。虽然有限于 Windows 平台，但对提升桌面端使用体验有明显帮助。

---

### #5320 [OPEN] fix(session): separate snapshot reads from crash recovery
- **作者**: h3c-hexin
- **创建/更新**: 2026-08-11 / 2026-08-11
- **链接**: https://github.com/Hmbown/CodeWhale/pull/5320

**功能**: 将“读取会话快照”与“崩溃恢复”解耦。新增 `load_session_snapshot` 用于无副作用的读取（在工具调用可能仍在运行时安全使用）；新增 `recover_session_for_resume`，返回修复统计信息，使嵌入宿主能够在已知进程或引擎重启后执行恢复，并在自己的 transcript 锁下持久化。同时保留原有行为。

**重要性**: 这是一个架构层面的正确性修复。此前快照读取和崩溃恢复混在一起，可能导致在工具调用进行中读取快照时出现不一致状态。对构建 CodeWhale 嵌入能力的团队而言，这解决了并发安全的重要隐患。

---

### #5319 [OPEN] fix(tui): copy messages without visual rails
- **作者**: XhesicaFrost
- **创建/更新**: 2026-08-11 / 2026-08-11
- **链接**: https://github.com/Hmbown/CodeWhale/pull/5319

**功能**: 修复“复制消息”功能。对于用户和助手的消息单元格，现在复制的是规范化的源内容，而非 Ratatui 渲染后的可视行（通常包含边框等视觉元素）。工具、思考、系统等其他复杂单元格仍保留原有的全量转录路径，以防丢失完整输出和细节语义。同时为相关行为补充了回归测试。

**重要性**: 这是一个典型的“体验小修复、影响面广”的 PR。直接解决了用户复制代码/文本时带出视觉边框的烦恼。简洁且有针对性的改动思路值得肯定。

---

### #5321 [OPEN] feat: register OrcaRouter as a named provider
- **作者**: XiaoHuo888-hue
- **创建/更新**: 2026-08-11 / 2026-08-11
- **链接**: https://github.com/Hmbown/CodeWhale/pull/5321

**功能**: 按照现有 OpenRouter provider 的接入方式，将 [OrcaRouter](https://www.orcarouter.ai) 注册为命名 provider。OrcaRouter 是一个 OpenAI 兼容网关：一个 `ORCAROUTER_API_KEY`（以 `sk-orca-` 开头）即可访问 150+ 模型。PR 同步更新了模型选择器、配置引用和文档。

**重要性**: 此 PR 直接回应了社区对更多模型提供商支持的需求。它降低多模型切换成本，也进一步验证了 CodeWhale 的 provider 抽象易于扩展。对使用 OrcaRouter 的开发者来说，这是一个开箱即用的增强。

---

### #5225 [CLOSED] feat(acp): expose file/search/git/patch/shell tools over session/prompt
- **作者**: rafaelcavalheri
- **创建/更新**: 2026-08-03 / 2026-08-11
- **链接**: https://github.com/Hmbown/CodeWhale/pull/5225

**功能**: 此前 ACP 服务器中的 `session/prompt` 只流式返回模型文本，不执行模型请求的工具调用。这导致通过 ACP 驱动 CodeWhale 的编辑器或桥接层（如 Zed、社区 `acp-deepseek-adapter`）只能获得聊天能力，而无法实际编辑代码。本 PR 为 ACP 协议暴露了文件读写、搜索、git、patch、shell 等工具执行能力。

**重要性**: 已 CLOSED，但这是 ACP 集成路线的关键一步。它把 CodeWhale 从一个“对话式 TUI”提升为可被外部编辑器/代理驱动的完整编码 Agent，对生态扩展意义深远。

---

### #5277 [OPEN] [dependencies, github_actions] build(deps): bump docker/login-action from 4.5.2 to 4.6.0
- **作者**: dependabot[bot]
- **创建/更新**: 2026-08-07 / 2026-08-11
- **链接**: https://github.com/Hmbown/CodeWhale/pull/5277

**功能**: 常规依赖升级，将 `docker/login-action` 从 v4.5.2 升级至 v4.6.0。

**重要性**: 自动化依赖维护 PR，不需要社区关注，但确保持续集成链路的安全性。

---

## 5. 功能需求趋势

由于今日数据量较少（3 个 issue），以下趋势基于现有内容提炼，并结合近期 PR 方向：

- **模型提供商扩展**：OrcaRouter 注册 PR 显示社区对“一个 key 访问多模型”的网关需求在增长。代码库中 provider 抽象已被证明是可持续的扩展点。
- **终端 UI 体验精细化**：宽屏布局回归（#5322）、复制无视觉冗余（#5319）、窗口置顶（#5318）等琐碎但高频的体验问题，表明项目正在从“功能完备”走向“体验精修”阶段。
- **会话生命周期安全性**：快照读取与崩溃恢复分离（#5320）、子代理递归深度限制（#5317）说明开发者对 AI Agent 在复杂调用链中的状态一致性和资源边界问题越来越关注。
- **ACP 协议增强**：虽然 #5225 已关闭，但它揭示了“将 CodeWhale 作为 AI 编码后端暴露给编辑器”这一方向的重要性，未来可能继续沉淀。

---

## 6. 开发者关注点

- **宽屏终端布局回归**：v0.8 到 v0.9 的功能回退，输出区域在宽终端上被限宽、留白过多，直接降低大屏用户的阅读效率——这是当前 TUI 体验中最集中的痛点。
- **复制内容纯净性**：从 TUI 单元格复制消息时，若带入视觉装饰（边框/rail），会打断代码或文本的正常使用；社区期望“所见即所得”，且复制所得内容可以直接粘贴使用。
- **子代理递归深度安全性**：即使配置了全局上限，嵌套参数仍可能意外“突破”用户设定的递归预算，开发者对 AI Agent 的递归边界控制有较高的安全预期。
- **会话快照并发安全**：工具调用仍在运行时若读取快照，可能读到中间状态；开发者希望有明确的无副作用读取接口，以便安全地构建外部集成。
- **多模型网关接入的配置一致性**：社区期待新增 provider 时，不仅支持 API key，还要在模型选择器、配置参考和文档中保持一致的体验，降低上手成本。

---
*本日报基于 GitHub 公开数据自动整理，仅供参考。*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*