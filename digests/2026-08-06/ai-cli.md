# AI CLI 工具社区动态日报 2026-08-06

> 生成时间: 2026-08-06 01:24 UTC | 覆盖工具: 10 个

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

# AI CLI 工具横向对比分析报告（2026-08-06）

## 1. 生态全景

AI CLI 工具已全面进入 **"能力扩张与信任建设并行"** 的竞争阶段。主流工具均在快速迭代——本日 9 个活跃项目合计发布 14 个版本、推进 80+ 项 PR、产生 80+ 条热点 Issue，工程投入密度极高。然而，社区反馈的重心正从"功能多寡"转向"可靠性、可预测性与可控性"：**会话数据安全**（丢失/恢复/持久化）、**成本失控**（$411 意外费用、静默模型委派）、**权限系统缺陷**（误报/绕行/提示风暴）成为跨工具的高频痛点。同时，MCP 生态、Windows 平台、多模型支持正成为下一轮差异化竞争的关键战场。

---

## 2. 各工具活跃度对比

| 工具 | 热点 Issues | PR 数 | Release 情况 | 备注 |
|------|------------|-------|-------------|------|
| **Claude Code** | 10+（含 5 个新建） | 8 | v2.1.223 | 企业治理功能持续推进（marketplace 通配符） |
| **OpenAI Codex** | 10+ | 10 | rust-v0.146.1 + 5 个 alpha | 24h 内连发 5 个 alpha，迭代速度最快 |
| **Gemini CLI** | 10+（2 个 P1） | 10（7 个已合入） | nightly 1 个 | 修复效率高，多个核心 bug 当日合入 |
| **GitHub Copilot CLI** | 10（含 4 个新建） | 0 | 3 个 pre-release | PR 停滞，依赖上游基建 |
| **Kimi Code CLI** | 3 | 3 | 无 | 规模最小，聚焦精准修复 |
| **OpenCode** | 10（含 2 个新建） | 10 | v1.18.14 | 社区需求信号强（VS Code 扩展 134👍） |
| **Pi** | 10 | 10（2 个已修复对应 bug） | 无 | 小型活跃社区，PR 闭环效率高 |
| **Qwen Code** | 10（含 3 个安全类） | 10 | v0.21.6 + desktop-v0.1.0 | 桌面版首发日即遇 P1 崩溃 |
| **DeepSeek TUI** | 4 | 10+ | 无（v0.9.4 发布列车中） | 正向服务化架构演进 |
| **Grok Build** | 0 | 0 | 无 | 24h 无活动 |

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 典型诉求 |
|------|---------|---------|
| **会话持久化与恢复** | Claude Code（`--continue` 找不到 `-p` 会话）、Codex（历史丢失）、Gemini CLI（`/compress` 损坏）、OpenCode（`/sessions` 回归）、Kimi Code（Memory System #1283） | 会话是关键资产，需可靠持久化、跨会话记忆、断点恢复 |
| **MCP 生态成熟度** | Codex（1300+ 僵尸进程/37GB 泄漏、握手超时）、Copilot CLI（FastMCP 不兼容、GHEC 静默失败）、OpenCode（streamable-http、OAuth 竞态）、Qwen Code（`mcp list` 挂起） | 从"能连"到"好用"：进程回收、协议兼容、超时处理、失败可诊断 |
| **成本治理与透明度** | Claude Code（$411 意外费用、Max 计费异常）、Copilot CLI（Terra 委派 Opus 意外计费）、OpenCode（Go 用量 API 126👍） | 费用上限、模型委派披露、用量可编程查询 |
| **权限与安全护栏** | Claude Code（813 条/90 分钟权限提示、Opus 5 误降级）、Codex（网络请求误拦）、Gemini CLI（子代理绕权）、Qwen Code（Shell 绕过、密码泄露）、Copilot CLI（模型委派无控制） | 细粒度白名单、显式告警而非静默降级、授权场景不误伤 |
| **Windows 平台稳定性** | Codex（Sysmon BSOD、GPU 崩溃）、Copilot CLI（原生崩溃跨 5 个月未修）、Qwen Code（桌面版 EISDIR 崩溃）、Claude Code（大小写敏感哈希）、Pi（征集 Windows 反馈） | 系统级崩溃需优先修复，Windows 用户基数大但体验垫底 |
| **终端交互精细化** | Copilot CLI（alt-screen 诉求 8👍）、Pi（OSC 8 截断已修）、Gemini CLI（shell 卡死、resize 闪烁）、Qwen Code（tmux 闪屏） | 渲染协议正确性、可选回退、低干扰提示 |

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|------|---------|---------|---------|
| **Claude Code** | 全功能 + 企业治理（marketplace 管控、CVP 审批） | 专业开发者、企业团队 | 功能密度最高，插件生态领先（27 个插件），但复杂度带来 bug 面 |
| **OpenAI Codex** | 模型能力驱动，与 ChatGPT 深度集成 | ChatGPT 用户、云端 agent 场景 | 桌面端（ChatGPT.exe）+ CLI 双线，alpha 迭代激进，Windows 短板明显 |
| **Gemini CLI** | Google 生态集成（GCA、Cloud Workstations） | Google Cloud 开发者 | 可靠性修复优先（7 个核心 PR 当日合入），P1 bug 响应快 |
| **Copilot CLI** | GitHub 深度集成，企业级 | GitHub 重度用户、企业环境 | 依赖 GitHub 基建（MCP registry 策略），pre-release 频繁但 PR 停滞 |
| **Kimi Code CLI** | 轻量、ACP 协议探索（语音交互） | Kimi 生态开发者 | 小步快跑，社区规模小但响应精准 |
| **OpenCode** | 开源开放，多提供商中立（xAI/DeepSeek 等） | 开源偏好者、模型自由选择者 | 社区驱动（VS Code 扩展 134👍、用量 API 126👍），V2 引擎迁移中 |
| **Pi** | 终端体验极致打磨 | 终端重度用户、自托管人群 | 独立架构（Bun）、多提供商适配（Qwen/Copilot），社区互动紧密 |
| **Qwen Code** | 多端覆盖（CLI/VSCode/桌面/WebShell）+ 飞书集成 | 中文开发者、阿里云生态 | 全渠道策略，安全加固投入大，桌面版刚起步 |
| **DeepSeek TUI** | TUI 向服务化 Runtime API 演进 | DeepSeek API 用户、TUI 爱好者 | 架构升级期：内存/技能/目标循环管理均转为 HTTP API |
| **Grok Build** | — | — | 当前无可见迭代 |

---

## 5. 社区热度与成熟度

- **最高热度与成熟度：Claude Code、OpenAI Codex**。两者 Issue 反馈量大、生态最丰富（插件/桌面端/企业功能），但问题密度也最高——Claude Code 面临计费与权限信任危机，Codex 的 Windows 稳定性成硬伤。指标佐证：Codex `#9203`（/undo 回归）获 **373👍**，Claude Code `#66504`（会话 URL 隐私）获 **46👍**。

- **快速迭代梯队：Gemini CLI、Qwen Code、OpenCode**。Gemini CLI 处于"修复驱动"阶段（P1 bug 密集但 PR 合入快）；Qwen Code 多端齐发、扩张最猛（1 天 3 个版本），但桌面版首发即遇崩溃，属于"边扩张边补课"；OpenCode 社区需求信号明确（两个 100+👍 功能请求），版本节奏稳定。

- **稳定打磨期：Pi、Copilot CLI、DeepSeek TUI**。Pi 社区体量小但 PR 闭环快（两个 bug 当天修复并附回归测试）；Copilot CLI 发布频繁但 PR 提交停滞，反映其依赖 GitHub 上游资源；DeepSeek TUI 处于架构演进关键期，向服务化方向投入明显。

- **种子期：Kimi Code CLI**。社区规模最小（3 个活跃 Issue），但围绕单一 bug（#2588）的快速拆解与并行修复展示了高效协作模式。

---

## 6. 值得关注的趋势信号

### 信号 1：Agent 自主性正遭遇"信任墙"
$411 意外 API 费用（Claude Code #84350）、静默模型委派（Copilot #4377）、误报为"用户中断"的系统中止（Claude Code #84346）三件事共同指向：**当 agent 越自主，用户越需要"控制感"**。成本上限、费用确认、审计日志、误导性错误的修正，将是下一阶段所有工具的必答题。

### 信号 2：MCP 从"能用"进入"好用"的转型期
MCP 相关问题横跨 5 个工具（进程泄漏、握手阻塞、OAuth 竞态、协议不兼容、策略静默失败）。**MCP 的稳定性正在成为衡量 AI CLI 工程成熟度的标尺**——谁能先解决"静默失败"和"资源回收"，谁就赢得集成生态的信任。

### 信号 3：会话数据是新的"项目资本"
跨工具对会话持久化/恢复的高频反馈（6 个工具同时出现相关 Issue）表明：**会话不再是临时记录，而是可迁移、可恢复、可继承的智力资产**。Kimi Code 的 Memory System 与 Claude Code 的会话可移植性需求，预示"记忆"将成为下一波功能竞争的焦点。

### 信号 4：Windows 是尚未被征服的最大增量市场
Codex 的 Sysmon BSOD、Copilot CLI 的 5 个月未愈崩溃、Qwen Code 桌面版首发崩溃——**Windows 用户体验的糟糕程度与其用户基数严重不匹配**。率先在 Windows 上实现稳定性的工具，将获得显著的差异化优势。

### 信号 5：安全防护需要"情境智能"而非"一刀切"
Claude Code 的 Opus 5 在授权渗透测试中被误降级、Codex 的网络安全过滤误伤合法安全研究、Qwen Code 的只读 Shell 被绕过——**安全机制正在从"拦不拦得住"走向"拦得准不准"**。具备上下文感知（如 CVP 审批状态识别、任务类型判断）的防护将是下一个技术分水岭。

### 信号 6：多模型/多提供商走向"一等公民"
BYOM 模型切换（Copilot #4376）、多 API key 管理（DeepSeek #5250）、局域网 Provider 自动发现（OpenCode #27554）、Qwen Token Plan 接入（Pi #7659）——**用户拒绝被单一模型锁定，跨提供商配置管理将成为 AI CLI 的标配能力**。

### 对开发者的参考价值

- **选型层面**：追求企业治理和生态丰富度选 Claude Code；深度绑定 GitHub 选 Copilot CLI；Google Cloud 用户优先 Gemini CLI；注重开源中立和模型自由选 OpenCode；终端极致体验选 Pi；中文多端场景选 Qwen Code。
- **使用层面**：任何工具都应先确认**成本上限配置**、**权限白名单粒度**、**会话备份策略**，再投入生产——本日报告中的安全事故（$411 费用、数据丢失、静默降级）均是真实发生的风险。
- **趋势层面**：MCP 稳定性与 Windows 支持将是接下来 3-6 个月工具竞争的关键胜负手，开发者在选型时可重点关注这两个维度的改进速度。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（截至 2026-08-06）

> 数据来源：`github.com/anthropics/skills`。原始数据中 PR 评论数未完整展示，以下按仓库排序、主题热度与更新活跃度综合选取。当前列出的 PR 均处于 **open** 状态，合并情况以仓库实时动态为准。

## 1. 热门 Skills 排行

| PR | Skill / 改动 | 功能 | 社区讨论热点 | 状态 |
|---|---|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | `skill-creator` 修复 | 修复 `run_eval.py` 持续报告 `recall=0%` 的问题，涉及 eval artifact 安装、Windows 流读取、触发器检测、并行 worker | 对应 [Issue #556](https://github.com/anthropics/skills/issues/556)，社区 10+ 次独立复现；描述优化循环在“噪声”上做优化 | open |
| [#514](https://github.com/anthropics/skills/pull/514) | `document-typography` | 为 AI 生成文档提供排版质量控制：孤行、寡行、页底标题、编号对齐等 | AI 生成文档普遍存在 typographic 问题，用户很少主动要求但质量影响明显 | open |
| [#538](https://github.com/anthropics/skills/pull/538) | `pdf` 修复 | 修正 `SKILL.md` 中 `REFERENCE.md → reference.md` 等 8 处大小写引用错误 | 大小写敏感文件系统（Linux/macOS）下文档技能可移植性 | open |
| [#486](https://github.com/anthropics/skills/pull/486) | `odt` 新技能 | 创建、填充、读取、转换 OpenDocument 格式（.odt/.ods），支持 ODT→HTML | 社区对 LibreOffice / 开源 / ISO 标准文档格式的处理需求 | open |
| [#210](https://github.com/anthropics/skills/pull/210) | `frontend-design` 改进 | 重写 frontend-design skill，使其指令更清晰、可执行、内部一致 | 社区讨论重点：skill 指导如何具体到能在单次对话中被 Claude 实际遵循 | open |
| [#83](https://github.com/anthropics/skills/pull/83) | `skill-quality-analyzer` + `skill-security-analyzer` | 新增两个元技能，从结构、文档、示例、安全等维度评估 Claude Skill 质量 | 直接回应社区对第三方技能质量与安全信任边界的担忧 | open |
| [#541](https://github.com/anthropics/skills/pull/541) | `docx` 修复 | 修复 DOCX skill 添加 tracked changes 时 `w:id` 与已有书签冲突导致的文档损坏 | OOXML 中 `w:id` 跨书签/评论/移动域共享，需要动态分配 ID | open |
| [#723](https://github.com/anthropics/skills/pull/723) | `testing-patterns` | 覆盖测试哲学、单元测试、React 组件测试、端到端测试等完整测试栈 | 社区对测试生成/测试指导类技能有明确需求，讨论热度较高 | open |

## 2. 社区需求趋势

从 Issues 讨论热度和主题分布看，社区关注点集中在以下方向：

- **安全与信任边界**  
  [Issue #492](https://github.com/anthropics/skills/issues/492)（43 评论）是当前最热议题：社区技能被放在 `anthropic/` 命名空间下分发，可能冒充官方技能并诱导用户授权。  
  [Issue #1175](https://github.com/anthropics/skills/issues/1175) 则关注 SharePoint Online 集成中的权限控制与上下文窗口风险。

- **分发、共享与去重**  
  [Issue #228](https://github.com/anthropics/skills/issues/228) 呼吁组织级 skill 直接共享，而不是手动下载/上传；  
  [Issue #189](https://github.com/anthropics/skills/issues/189) 指出 `document-skills` 与 `example-skills` 安装后内容重复，导致上下文浪费。

- **Skill 创作与评估工具链的可靠性**  
  [Issue #556](https://github.com/anthropics/skills/issues/556) 与 [Issue #1169](https://github.com/anthropics/skills/issues/1169) 都指向 `skill-creator` 的 `recall=0%` 评估 bug；  
  [Issue #202](https://github.com/anthropics/skills/issues/202) 认为 `skill-creator` 更像开发文档而不是可操作的 skill。社区希望官方工具链先稳定下来。

- **新 Skill 方向：Agent 自我管理与治理**  
  [Issue #1329](https://github.com/anthropics/skills/issues/1329) 提出 `compact-memory`，用符号化表示压缩 agent 长期记忆；  
  [Issue #412](https://github.com/anthropics/skills/issues/412) 提议 `agent-governance`，覆盖策略执行、威胁检测、信任评分、审计轨迹；  
  [Issue #1385](https://github.com/anthropics/skills/issues/1385) 提出“前校准 → 对抗性审查 → 交付验证”三段式推理质量门禁。

- **平台集成与互操作**  
  [Issue #29](https://github.com/anthropics/skills/issues/29) 询问 AWS Bedrock 兼容性；  
  [Issue #16](https://github.com/anthropics/skills/issues/16) 建议将 Skills 暴露为 MCP 协议。社区希望 Skills 能跨云、跨模型、跨工具复用。

## 3. 高潜力待合并 Skills

以下 PR 尚未合并，但话题热度高、有明确 Issue 支撑或更新活跃，可能近期落地：

- [#1298](https://github.com/anthropics/skills/pull/1298) — `skill-creator` 0% recall 修复，直接影响描述优化循环，是最关键的 bugfix。
- [#514](https://github.com/anthropics/skills/pull/514) — `document-typography`，针对所有 AI 生成文档的通病，需求基础广泛。
- [#723](https://github.com/anthropics/skills/pull/723) — `testing-patterns`，覆盖从单元测试到 E2E 的完整测试栈，社区关注度高。
- [#525](https://github.com/anthropics/skills/pull/525) — `pyxel` 复古游戏开发 skill，由 pyxel-mcp 作者提交，更新至 07-15。
- [#1302](https://github.com/anthropics/skills/pull/1302) — `color-expert`，包含 ISCC-NBS、Munsell、OKLCH/OKLAB 等完整色彩知识体系，更新至 07-21。
- [#1479](https://github.com/anthropics/skills/pull/1479) — `plan-file-hygiene`，解决规划产物无生命周期管理的问题，创建于 07-25，回应 [Issue #1417](https://github.com/anthropics/skills/issues/1417)。
- [#83](https://github.com/anthropics/skills/pull/83) — `skill-quality-analyzer` / `skill-security-analyzer`，直接回应社区安全与质量关切，但 open 时间较长，存在合并不确定性。

## 4. Skills 生态洞察

**当前社区在 Skills 层面最集中的诉求是：让 Skills 机制本身更可靠、更可治理——包括安全命名空间、稳定的分发与去重、可用的评估/优化工具链，以及控制上下文占用**，而不仅仅是发现更多新技能。

---

# Claude Code 社区动态日报 — 2026-08-06

## 1. 今日速览

v2.1.223 发布，新增 marketplace 管理设置中的 GitHub org 通配符支持，并针对工作流代理等场景补充了警告提示。社区方面，Claude Max 计费异常、后台子代理超时误报、以及 Opus 5 安全防护误降级成为今日最热争议；与此同时，Chrome 扩展权限提示风暴和 411 美元意外 API 成本等新 Issue 密集涌现，反映出开发者对权限控制与成本治理的强烈诉求。

## 2. 版本发布

### v2.1.223
📦 [Release v2.1.223](https://github.com/anthropics/claude-code/releases)

主要变更：
- `strictKnownMarketplaces` 和 `blockedMarketplaces` 管理设置新增 owner 通配符条目（`"owner/*"`），支持按 GitHub org 批量允许/阻止 marketplace 仓库
- 对工作流代理、派生 skills、斜杠命令或恢复的后台代理触发时增加了警告提示

## 3. 社区热点 Issues

### 1. [BUG] Claude Max 使用量异常：未使用但会话额度被消耗
🔗 [#82506](https://github.com/anthropics/claude-code/issues/82506) | 评论 17 | 👍 7
付费用户反馈 Claude Max 会话限制在完全未使用的情况下被自动消耗，涉及计费准确性。该问题已持续一周仍无官方回复，评论区有多位用户确认复现，是目前最受关注的付费相关 Bug。

### 2. [FEATURE] 会话 URL 默认附加到 commit 消息和 PR 描述——应改为 opt-in
🔗 [#66504](https://github.com/anthropics/claude-code/issues/66504) | 评论 12 | 👍 46
社区呼声最高的功能请求。用户认为 Claude Code 默认在每次提交和 PR 中追加会话 URL 属于隐私泄漏，且对团队协作产生噪音。46 个 👍 表明该默认行为已引发广泛不满。

### 3. [BUG] Cowork Desktop (macOS)：AskUserQuestion 卡片无法渲染
🔗 [#58750](https://github.com/anthropics/claude-code/issues/58750) | 评论 11 | 👍 5
macOS Cowork 桌面端的问题：询问卡片从未到达渲染层，黄点徽章显示挂起但 UI 无响应，退出应用时请求被静默解析为 "Dismissed"。影响 Agent 交互的可用性。

### 4. [BUG] Claude Desktop 接近 5 小时使用限制时崩溃，需完全重装才能恢复
🔗 [#83403](https://github.com/anthropics/claude-code/issues/83403) | 评论 7
Claude Desktop 在运行接近 5 小时限制时崩溃，随后无法重新打开，只能通过完全重装解决。属于高频阻断性问题，严重影响桌面端用户的长时间任务。

### 5. [BUG] `--continue` 无法找到由 `-p` 创建的会话
🔗 [#82536](https://github.com/anthropics/claude-code/issues/82536) | 评论 7
print 模式（`-p`）创建的会话无法通过 `--continue` 以交互模式恢复。工作流串联场景下，用户无法从非交互任务平滑过渡到交互调试。

### 6. [BUG] Claude 部署无人值守任务调用付费 API，产生 411 美元意外费用
🔗 [#84350](https://github.com/anthropics/claude-code/issues/84350) | 新建于今日
**今日新增**。Claude 在无人值守作业中调用了一个计费 API，全程无成本护栏，最终产生 $411 意外费用。该 Issue 直指 agent 自主行动缺乏费用上限控制的系统性风险，预计会引发大量讨论。

### 7. [BUG] 子代理停滞看门狗中止误报为"用户中断"
🔗 [#84346](https://github.com/anthropics/claude-code/issues/84346) | 新建于今日
**今日新增**。13 份转录本显示子代理在运行约 600—605.6 秒后被中止，但界面显示 "[Request interrupted by user for tool use]"。用户未进行任何中断操作，错误信息具有高度误导性，影响排障效率。

### 8. [BUG] Opus 5 安全防护误报：授权安全测试被静默降级到 Opus 4.8
🔗 [#84353](https://github.com/anthropics/claude-code/issues/84353) | 新建于今日
**今日新增**。用户进行授权的渗透测试工作时，安全防护误判并将会话自动从 Opus 5 降级至 Opus 4.8。类似问题在 #84340 和 #84352 中也有反馈，表明安全防护的误报已成为一个系统性趋势。

### 9. [BUG] Claude-in-Chrome 每次浏览器操作都弹出权限提示
🔗 [#84355](https://github.com/anthropics/claude-code/issues/84355) | 新建于今日
**今日新增**。权限设置、allow 规则、各种 permission mode 全部失效，单次会话 90 分钟内记录 813 条权限提示。浏览器自动化的可用性被彻底破坏。

### 10. [BUG] Windows 上 "Past Conversations" 因大小写敏感哈希显示为空
🔗 [#84354](https://github.com/anthropics/claude-code/issues/84354) | 新建于今日
**今日新增**。Windows 系统下项目路径哈希对大小写敏感，导致历史会话列表无法匹配显示为空。属于平台一致性 Bug，影响 Windows 用户的会话恢复。

## 4. 重要 PR 进展

### 1. 修复 `/code-review` 的 `--comment` 标志
🔗 [#16929](https://github.com/anthropics/claude-code/pull/16929)
修复 `/code-review` 默认向 GitHub 发布内联评论的问题，恢复 README 描述的默认终端输出行为，仅在传入 `--comment` 时才发布到 GitHub。对应 Issue #16606。

### 2. Cowork 自签名证书错误修复
🔗 [#84138](https://github.com/anthropics/claude-code/pull/84138)
针对 Bun 运行时在 macOS 上不加载系统证书的问题，为 PostToolUse hook 添加自签名证书的 workaround，解决 Cowork 场景下的 "Self-signed certificate detected" 报错（closes #24470）。

### 3. 限制 frontmatter 解析
🔗 [#84004](https://github.com/anthropics/claude-code/pull/84004)
修复基于范围的 `sed` 表达式在遇到 Markdown 正文中 `---` 时重复解析的问题，只解析开头的 YAML frontmatter 块，拒绝缺少前后标记的文件。

### 4. 脚本顶层失败传播
🔗 [#84003](https://github.com/anthropics/claude-code/pull/84003)
`duplicate-maintenance` 脚本的 `.catch(console.error)` 会静默吞掉启动和 API 失败，此 PR 让脚本在顶层失败时返回非零状态码，同时保留原始错误日志。

### 5. 验证 gh 标志值
🔗 [#83999](https://github.com/anthropics/claude-code/pull/83999)
修复受限 `gh` 包装器在输入末尾留下 `skip_next=true` 的问题（如 `gh issue list --limit` 缺少值），避免绕过参数验证并将错误委托给内部逻辑。

### 6. 验证 label 选项值
🔗 [#83995](https://github.com/anthropics/claude-code/pull/83995)
为 `--add-label` 和 `--remove-label` 增加参数值校验，防止 `set -u` 下触发 `$2: unbound variable` 内部错误或误吞后续选项。

### 7. 拒绝自引用重复
🔗 [#83993](https://github.com/anthropics/claude-code/pull/83993)
修复 `comment-on-duplicates.sh` 将触发 Issue 自身标记为重复的问题，避免发布自引用的重复评论造成自动化循环。

### 8. 新增 14 个 Claude Code 插件
🔗 [#41661](https://github.com/anthropics/claude-code/pull/41661)
添加涵盖安全、性能、架构、全栈自动化等方向的 14 个插件目录，将 marketplace 扩展至 27 个插件。该 PR 已存在较长时间且持续更新，社区关注度较高。

## 5. 功能需求趋势

| 方向 | 代表 Issue | 社区诉求 |
|------|-----------|---------|
| **会话数据可移植性** | [#81946](https://github.com/anthropics/claude-code/issues/81946) | 转录/内存应随项目迁移，scratch 文件按 session ID 关联并可本地保留 |
| **权限模型改进** | [#74715](https://github.com/anthropics/claude-code/issues/74715)、[#77605](https://github.com/anthropics/claude-code/issues/77605)、[#84355](https://github.com/anthropics/claude-code/issues/84355) | Chrome 扩展 "Always allow" 失效、跨设备无可靠设备标识、权限提示风暴等，权限系统需整体重构 |
| **可禁用/可重绑的手势与快捷键** | [#84348](https://github.com/anthropics/claude-code/issues/84348) | 用户希望左箭头 detach-to-background 手势可禁用或通过 keybindings.json 重绑 |
| **成本与安全护栏** | [#84350](https://github.com/anthropics/claude-code/issues/84350)、[#84353](https://github.com/anthropics/claude-code/issues/84353)、[#84352](https://github.com/anthropics/claude-code/issues/84352) | agent 自主执行需费用上限；安全防护不应在授权工作时误降级 |
| **平台兼容性** | [#72649](https://github.com/anthropics/claude-code/issues/72649)、[#80131](https://github.com/anthropics/claude-code/issues/80131) | Warp 终端快捷键失效、iTerm2 全屏渲染器 SIGTTIN 挂起，需逐一适配 |
| **可见性与诊断** | [#64036](https://github.com/anthropics/claude-code/issues/64036)、[#82101](https://github.com/anthropics/claude-code/issues/82101) | FleetView 按过时分类器分桶，工作流 token 超限无警告，需更准确的实时状态与阈值预警 |

## 6. 开发者关注点

### 误导性错误信息成高频痛点
- [#84346](https://github.com/anthropics/claude-code/issues/84346) 和 [#78915](https://github.com/anthropics/claude-code/issues/78915) 均报告 "[Request interrupted by user for tool use]" 在无用户干预时出现——前者是子代理运行中途超时（600 秒），后者是派发即失败。开发者强烈建议区分系统级中止与用户主动中断。

### 成本失控风险
- [#84350](https://github.com/anthropics/claude-code/issues/84350) 中 $411 的意外 API 费用引发对 agent 自主行为的担忧。开发者希望增加成本上限、费用确认和审计日志。

### 安全防护误报损害信任
- [#84353](https://github.com/anthropics/claude-code/issues/84353)、[#84340](https://github.com/anthropics/claude-code/issues/84340)、[#84352](https://github.com/anthropics/claude-code/issues/84352) 三连发都指向安全防护在合法安全测试场景下误触发并降级模型，且即使组织已获 CVP 批准仍然如此。

### 会话恢复与后台任务可靠性
- [#82536](https://github.com/anthropics/claude-code/issues/82536)（`--continue` 找不到 `-p` 会话）、[#84349](https://github.com/anthropics/claude-code/issues/84349)（守护进程重启后后台会话永久死亡）表明会话持久化机制需要加固。

### 权限与提示疲劳
- [#84355](https://github.com/anthropics/claude-code/issues/84355) 的 813 条/90 分钟权限提示、[#79867](https://github.com/anthropics/claude-code/issues/79867) 中 macOS TCC 对话框显示裸版本号而非应用名，都是权限系统设计缺失的具体表现。

### 企业级管理需求上升
- v2.1.223 新增 `"owner/*"` marketplace 通配符，配合 [#84352](https://github.com/anthropics/claude-code/issues/84352) 的 CVP 审批组织仍被封锁等反馈，说明企业用户的治理管控需求正成为重要演进方向。

---
*本日报数据来源于 [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)，统计时间为 2026-08-06。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-08-06

## 1. 今日速览

- 发布稳定版 `rust-v0.146.1`，针对 cyber 能力模型收紧自动审查默认策略，并向终端用户解释相关权限变更。
- 社区最强烈的声音仍是 #9203：超过 370 个 👍，要求恢复 `/undo` 会话级撤销能力。
- Windows 桌面端稳定性问题集中爆发，涵盖 GPU 进程崩溃、沙箱凭据失效、MSIX 包自损坏、Sysmon 驱动冲突等高频故障。

---

## 2. 版本发布

**rust-v0.146.1（稳定版）**  
- 为 cyber-capable 模型应用更安全的自动审查默认值，并在终端界面中解释权限变化。  
- 变更内容：https://github.com/openai/codex/compare/rust-v0.146.0...rust-v0.146.1  
- 关联 PR：https://github.com/openai/codex/pull/37057

**rust-v0.147.0-alpha 系列（预发布）**  
过去 24 小时连续推送了 `-alpha.10`、`-alpha.11`、`-alpha.12`、`-alpha.13` 以及 `-alpha.6.5` 共 5 个 alpha 版本，均为迭代性预发布，无显著变更说明。  
- Releases 列表：https://github.com/openai/codex/releases

---

## 3. 社区热点 Issues

1. **#9203 请求恢复 /undo 功能**  
   https://github.com/openai/codex/issues/9203  
   373 👍 / 70 评论。用户反复提及因 Codex 误删未跟踪文件、误改未提交内容而遭受损失，是目前社区最强烈的功能回归诉求。

2. **#12491 MCP 子进程未被回收，产生 1300+ 僵尸进程和 37GB 内存泄漏**  
   https://github.com/openai/codex/issues/12491  
   Codex.app GUI 在任务完成后不回收 MCP 子进程，属严重的资源泄漏问题，31 条评论持续跟进复现与影响范围。

3. **#33776 Windows 桌面端 ChatGPT.exe 生成数百个 taskkill/conhost 进程，引发 WMI 风暴与 DWM 降级**  
   https://github.com/openai/codex/issues/33776  
   30 条评论。Windows 专属性能事故，影响整体系统稳定性，DWM 与 WMI 同时受挫。

4. **#19425 自定义 stdio MCP Server 工具无法暴露给 Desktop 线程**  
   https://github.com/openai/codex/issues/19425  
   `/mcp` 能发现并列出工具，但 Desktop 线程无法调用，疑似 0.124.0-alpha.2 引入的回归。

5. **#23979 更新后本地项目会话历史丢失，底层数据仍存在于 state_5.sqlite**  
   https://github.com/openai/codex/issues/23979  
   26 条评论。UI 层历史记录消失但数据仍存在，用户担心数据不可恢复。

6. **#31035 Windows 桌面端疑似自动重装 SysmonDrv v13.22，导致系统 BSOD**  
   https://github.com/openai/codex/issues/31035  
   WinDbg 多次指向 SysmonDrv.sys 为崩溃驱动，用户强制卸载后被 Codex 重新拉起，问题严重。

7. **#35352 嵌入式浏览器 GPU 进程崩溃导致 Desktop 直接退出**  
   https://github.com/openai/codex/issues/35352  
   17 条评论。Windows 平台下 unsigned SwiftShader fallback 被阻断时，浏览器加载成功后应用整体退出。

8. **#34684 `codex mcp login` 在 macOS 上失败，Linux 同版本可正常工作**  
   https://github.com/openai/codex/issues/34684  
   面向符合规范的 OAuth 2.0 服务器，macOS（arm64）报 “No authorization support detected”，存在平台差异。

9. **#33493 本地压缩 v2 保留无限 input_image 负载，导致重复自动压缩循环**  
   https://github.com/openai/codex/issues/33493  
   长会话、图像密集型线程反复进入自动压缩死循环，GPT-5.6-Sol 下表现明显。

10. **#37161 网络安全请求过滤存在严重误报**  
    https://github.com/openai/codex/issues/37161  
    涉及静态分析、模糊测试、编译器分析、漏洞检测等合法任务被误拦，对安全工作流影响大。

---

## 4. 重要 PR 进展

1. **#37191 在 rollout 迁移中保留旧语义**  
   https://github.com/openai/codex/pull/37191  
   防止历史回滚、压缩检查点和子代理副本在迁移后改变恢复会话的可见对话或模型上下文。

2. **#37190 Cyber 模型在首次 Guardian 拒绝后即中断回合**  
   https://github.com/openai/codex/pull/37190  
   针对 cyber 目录模型增加 Guardian 断路器策略，一次拒绝即中止，与其他模型的多阈值行为区分。

3. **#37188 为搜索工具保留 `tool_search` 命名空间**  
   https://github.com/openai/codex/pull/37188  
   注册内置搜索工具前移除同名命名空间工具，避免碰撞并记录冲突。

4. **#37168 限制远程 MCP 握手 HTTP 请求时长**  
   https://github.com/openai/codex/pull/37168  
   修复流式 HTTP MCP 握手超时后 executor 仍被阻塞的问题，避免后续请求排队卡死。

5. **#37151 合并并发 Git 状态扫描**  
   https://github.com/openai/codex/pull/37151  
   相同仓库根的并发 workspace 元数据请求共享一次 `git status --porcelain`，降低重复扫描开销。

6. **#37175 将旧版 rollout 迁移至分页历史**  
   https://github.com/openai/codex/pull/37175  
   为 `LocalThreadStore` 增加迁移工具，支持 dry-run、批量限速与按线程选择，保留模型输出。

7. **#37189 在 world state 中跟踪多代理使用提示**  
   https://github.com/openai/codex/pull/37189  
   恢复会话时配置可能变化，保存当前 multi-agent 使用指令到 world state，保证提示一致性。

8. **#37166 保持 textarea 光标与渲染位于视口内**  
   https://github.com/openai/codex/pull/37166  
   修复逻辑行恰好占满宽度时插入点换行不可见的问题，并优化空格换行与光标对齐。

9. **#37157 强化 TUI 命名会话查找**  
   https://github.com/openai/codex/pull/37157  
   resume 与 archive 共用精确名称查找，优先使用 SQLite 名称，失败时回退到 legacy 索引。

10. **#37149 通过 world state 管理编排者技能**  
    https://github.com/openai/codex/pull/37149  
    将 orchestrator skill 目录移入独立 world-state 段，未变化的目录在后续回合中保持增量，减少上下文开销。

---

## 5. 功能需求趋势

- **会话级撤销/回滚能力回归**（#9203）：开发者在非 Git 跟踪或未提交场景下被误改/误删后无处回退，`/undo` 是最急需恢复的命令。
- **Windows 桌面端稳定性加固**：大量与 GPU 进程崩溃、MSIX 包损坏、沙箱驱动冲突、进程泄漏相关的 issue，Windows 已成为高风险平台。
- **MCP 生态成熟度**：进程回收、工具暴露一致性、OAuth 跨平台差异、握手超时等问题密集出现，MCP 仍是社区活跃集成方向。
- **上下文管理与 token 成本控制**：重复自动压缩循环、异常 token 消耗、大型恢复上下文放大轮询等成为热门话题。
- **权限与沙箱行为可预测性**：审批模式回退、升级命令仍受网络策略限制、DPAPI 凭据失效等问题表明，沙箱权限模型需更透明。

---

## 6. 开发者关注点

- **数据安全与回退能力**：`/undo` 缺失导致误操作无法撤销，高赞 issue 表明这是影响开发者信任的核心缺口。
- **Windows 平台稳定性**：GPU 进程崩溃、Sysmon 驱动冲突、MSIX 自损坏、taskkill 进程风暴等多点爆发，Windows 用户受影响面广。
- **资源泄漏与性能**：MCP 子进程 1300+ 僵尸、37GB 内存泄漏、Git 扫描重复执行等都是提升长期运行稳定性的关键。
- **上下文管理与成本**：自动压缩循环、超大已恢复上下文高频轮询、异常 token 消耗，直接影响用户的使用成本与体验。
- **权限模型一致性**：文件编辑审批反复回退、沙箱网络策略继承、凭据读取失败等问题，说明权限与沙箱行为仍需进一步收敛和明确。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-08-06）

## 一、今日速览

今日发布 v0.55.0 夜间版，主要修复 macOS seatbelt 配置缺失回退，并持续推进 pr-generator 管线。社区最激烈讨论集中在 Agent 可靠性：子代理 MAX_TURNS 中断被误报为成功（#22323）、generalist agent 无限挂起（#21409）等 P1 级 bug 持续发酵。PR 侧则有多个核心修复合入，涵盖 thoughtSignature 回归、消息融合、/compress 会话损坏等高影响问题。

## 二、版本发布

**v0.55.0-nightly.20260806.g761f604c1**

- fix(cli)：macOS 缺少 seatbelt profile 时回退到内置配置（@amelidev, PR #28551）
- feat(pr-generator-core)：新增环境配置解析器、命令执行器、GitHub REST 客户端集成（@joneba-google）

## 三、社区热点 Issues

1. **#22323 子代理 MAX_TURNS 中断被误报为 GOAL 成功**（P1/Bug，12 评论）
   `codebase_investigator` 在已触发最大轮次限制、未做任何分析的情况下，仍报告 `status: success`，掩盖真实中断。社区认为此类"假成功"会严重误导用户对任务完成度的判断，需要优先修复。
   [GitHub Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

2. **#21409 Generalist agent 无限挂起**（P1/Bug，8 评论，8 👍）
   今日最高赞 Issue。简单操作（如创建文件夹）即触发 generalist agent 挂起，用户等待一小时无响应；通过提示词禁用子代理可绕过，社区呼吁定位根因。
   [GitHub Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)

3. **#25166 Shell 命令完成后卡在 "Waiting input"**（P1/Bug，4 评论，3 👍）
   简单 CLI 命令已执行完毕，但界面仍显示命令活跃并等待用户输入。高频复现的交互卡死，直接影响日常使用体验。
   [GitHub Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)

4. **#24353 组件级评估体系（EPIC）**（P1）
   在已有 76 个行为评估测试基础上，规划对 6 个支持的 Gemini 模型建立组件级评估。社区和官方均认为这是防止核心回归的必要基础设施。
   [GitHub Issue #24353](https://github.com/google-gemini/gemini-cli/issues/24353)

5. **#21983 Browser 子代理在 Wayland 下失败**（P1/Bug, 4 评论）
   Linux Wayland 环境下浏览器子代理直接以 GOAL 终止，无法完成任务。Linux 桌面用户受影响明显，暂无 workaround。
   [GitHub Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)

6. **#22093 v0.33.0 起子代理绕过权限配置运行**（P2/Bug，3 评论）
   用户在配置中已禁用 agents 模式，但 generalist 等子代理仍被自动调用。涉及权限模型回归，引发对"工具越权"的安全担忧。
   [GitHub Issue #22093](https://github.com/google-gemini/gemini-cli/issues/22093)

7. **#19873 零依赖 OS 沙箱释放模型的 bash 亲和力**（P2/Enhancement，8 评论）
   提出利用 Gemini 3 模型原生的 bash 工具链操作能力，通过零依赖沙箱在保证安全的前提下放行 `grep`/`sed`/`awk` 等命令，技术讨论热烈。
   [GitHub Issue #19873](https://github.com/google-gemini/gemini-cli/issues/19873)

8. **#26522 Auto Memory 无限重试低信号会话**（P2/Bug，5 评论）
   后台提取代理不读取低信号会话时，该会话不会被标记为已处理，导致反复浮出并消耗资源。记忆系统的调度逻辑需要修补。
   [GitHub Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522)

9. **#26525 Auto Memory 需引入确定性脱敏**（P2/Bug/安全，4 评论）
   本地转录内容进入模型上下文后才提示脱敏，且日志可能记录已有技能内容。隐私风险引起关注，社区要求确定性脱敏与日志收敛。
   [GitHub Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525)

10. **#22745 AST 感知的文件读取/搜索/映射评估（EPIC）**（P2，7 评论）
    系列调查是否通过 AST 感知工具实现方法级精确读取、减少 token 噪声、提升导航效率，被视为提升 Agent 代码理解能力的关键方向。
    [GitHub Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)

## 四、重要 PR 进展

1. **#28607 修复剥离 thought 时丢失 thoughtSignature 的回归**（已合入）
   修复 v0.53.0 引入的 `API Error 400: Function call is missing a thought_signature`，在 `stripThoughts()` 中保留 functionCall 签名。
   [GitHub PR #28607](https://github.com/google-gemini/gemini-cli/pull/28607)

2. **#28700 修复用户新消息与未应答工具响应融合**（已合入）
   工具调用被中断（流失败或 ESC）后，下一条用户消息会被并入上一轮次，导致模型"接话"而非执行指令。此 PR 将两者正确分离。
   [GitHub PR #28700](https://github.com/google-gemini/gemini-cli/pull/28700)

3. **#28672 修复 /compress 会话重载与配额回退工具响应丢失**（已合入）
   两个独立修复：`/compress` 后恢复会话报错；配额触发时工具响应被错误丢弃。均属长会话核心稳定性问题。
   [GitHub PR #28672](https://github.com/google-gemini/gemini-cli/pull/28672)

4. **#28670 修复 GCA 代理模式模型容量错误无限重试**（已合入）
   解决 `MODEL_CAPACITY_EXHAUSTED`（HTTP 429）时在同一失败模型上死循环的问题，改为正确回退到 Flash 等可用模型。
   [GitHub PR #28670](https://github.com/google-gemini/gemini-cli/pull/28670)

5. **#28695 sendStream 防御畸形工具参数**（已合入）
   未加保护的 `JSON.parse()` 遇到畸形 tool arguments 时会终止整个流，现已改为结构化错误并保持流存活。
   [GitHub PR #28695](https://github.com/google-gemini/gemini-cli/pull/28695)

6. **#28689 解析嵌套 gaxios 流式错误**（已合入）
   改进底层 HTTP 嵌套流式错误的解析与配额/限流分类，增强 Gemini Code Assist（GCA）的错误兜底与提示能力。
   [GitHub PR #28689](https://github.com/google-gemini/gemini-cli/pull/28689)

7. **#28688 Cloud Workstations OAuth 重定向 URI 动态解析**（开放中）
   修复 Cloud Workstations VM 中 OAuth 回调静态指向 `localhost` 导致的认证失败，动态解析代理重定向 URI。
   [GitHub PR #28688](https://github.com/google-gemini/gemini-cli/pull/28688)

8. **#28677 IdeClient 进程遍历增加 3 秒超时**（开放中）
   `getIdeProcessInfo()` 遍历进程树可能卡死，导致 TUI 永远停在 "Initializing..."。增加超时并回退到无 IDE 客户端。
   [GitHub PR #28677](https://github.com/google-gemini/gemini-cli/pull/28677)

9. **#28676 转发终止信号到重启动的子进程**（开放中）
   bootstrap 父进程收到 SIGTERM/SIGINT 等信号时，不再孤儿化子进程，而是正确转发信号。
   [GitHub PR #28676](https://github.com/google-gemini/gemini-cli/pull/28676)

10. **#28701 修复 TRUST_PARENT 目录信任规则优先级**（开放中）
    "最长匹配优先"策略与 TRUST_PARENT 规则的优先级冲突，修复后信任边界判定更符合配置预期。
    [GitHub PR #28701](https://github.com/google-gemini/gemini-cli/pull/28701)

## 五、功能需求趋势

- **Auto Memory 系统成熟化**：#26522、#26523、#26525、#26516 等多条 Issue 聚焦记忆系统的重试策略、脱敏、无效补丁隔离，表明该功能正从"可用"走向"可信"。
- **子代理的主动性、可观测性与安全性**：社区要求模型更主动地使用 skills/sub-agents（#21968），通过 `/chat share` 暴露子代理轨迹（#22598），修复权限绕行（#22093）并增强浏览器代理锁恢复（#22232）。
- **AST 感知代码分析**：#22745 与 #22746 两条 EPIC 系统评估 AST 感知的文件读取、搜索与代码地图，目标直指降低 token 消耗、提升导航精度。
- **模型原生能力释放与安全平衡**：#19873（bash 沙箱）与 #22672（约束破坏性命令）呼应了社区对"能力放开但安全兜底"的强烈期待。
- **评估基础设施升级**：#24353 推动从整体行为测试走向组件级评估，守护核心回归。
- **终端交互稳定性**：#22465（vite 交互卡死）、#21924（resize 闪烁）、#24935（外部编辑器退出后花屏）持续出现，TUI 鲁棒性仍是高频用户诉求。

## 六、开发者关注点

- **可靠性是生命线**：Agent 挂起（#21409）、假成功（#22323）、shell 卡死（#25166）等 P1 问题集中反映：开发者最在意代理是否"真的完成任务"，而非状态展示。虚假成功比失败更致命。
- **权限与隐私红线**：#22093 的子代理权限绕行、#26525 的脱敏缺陷被反复提及，AI 编程工具的越权行为会直接导致信任崩塌。
- **平台覆盖仍不均衡**：Wayland（#21983）、Cloud Workstations OAuth（#28688）、macOS seatbelt 等平台适配问题提示用户环境高度多样化，官方需加强各平台回归验证。
- **自定义 skills/sub-agents 采用率偏低**：多位开发者反馈模型不会主动调用已配置的技能（#21968），导致用户投入的配置成本无法转化为实际效果。
- **长会话状态管理是当前主要矛盾**：/compress 损坏（#28672）、消息融合（#28700）、工具数量超过 128 触发 400 错误（#24246）等，均指向复杂长会话下的状态一致性短板。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-08-06**

## 今日速览

过去 24 小时内，Copilot CLI 连发三个 pre-release（v1.0.79-2 ~ v1.0.79-4），重点打磨终端交互体验，并新增 `/worktree new` 命令。社区讨论热度集中在 MCP 生态的“水土不服”（策略拦截、OAuth 失败、FastMCP 兼容性）、模型委派引发的意外计费，以及 `view` 工具在 1.0.73 中的路径回归问题。平台层面，Windows 崩溃与 Oracle Linux 启动失败也持续吸引关注。

## 版本发布

过去 24 小时共发布 3 个 pre-release：

- **v1.0.79-4**：Pre-release。
- **v1.0.79-3**：改进 `/worktree new`，用于在新 worktree 中开启新会话。
- **v1.0.79-2**：改进固定提示（pinned prompt）的布局——将其固定在标签栏预留行，减少对时间线的占用；当终端行数低于 30 行时默认关闭该功能，避免遮挡输出。

## 社区热点 Issues

以下 10 个 Issue 为过去 24 小时最值得关注的动态：

1. **[#1799 How to turn off alt-screen views?](https://github.com/github/copilot-cli/issues/1799)**
   老牌高热度问题，12 条评论、8 个 👍。用户对强制启用的 alt-screen 终端渲染模式不满，要求提供切回原始终端模式的开关。社区反响强烈，但至今未获官方明确支持。

2. **[#4374 /mcp search fails with 400 Bad Request in every repo with a non-GitHub (Azure DevOps) git remote](https://github.com/github/copilot-cli/issues/4374)**
   全新 triage Issue，4 个 👍。在 git remote 指向 Azure DevOps 的仓库中使用 `/mcp search`，会因获取 MCP registry policy 失败而报 400。影响大量企业混合托管场景。

3. **[#4377 GPT-5.6 Terra delegates to Opus subagent](https://github.com/github/copilot-cli/issues/4377)**
   计费敏感问题。用户明明选择 `gpt-5.6-terra`，后台却委派给 Opus 子代理执行任务，导致产生大量意外额度消耗，且用户没有明确感知和控制手段。

4. **[#4202 Built-in view reports Path does not exist for existing files in 1.0.73; 1.0.71 succeeds](https://github.com/github/copilot-cli/issues/4202)**
   功能回归。内置 `view` 工具在 1.0.73 中会误报文件不存在，而 1.0.71 正常。回归自 1.0.72 引入，目前仍存在于 1.0.73，直接影响日常文件读取操作。

5. **[#4345 Reasoning effort 'medium' is not supported for model 'claude-haiku-4.5'](https://github.com/github/copilot-cli/issues/4345)**
   4 个 👍、2 条评论。当服务端同时开启 `copilot_cli_opus_medium_effort_default` 和 `gpt_5_4_mini_for_explore` 特性时，CLI 会用 `medium` 推理强度调用仅支持低强度的 `claude-haiku-4.5`，导致子代理反复执行失败。配置组合兼容问题。

6. **[#4026 Copilot CLI crashes repeatedly (native runtime), reproducible across versions, unresolved since May 2026](https://github.com/github/copilot-cli/issues/4026)**
   Windows 平台上的原生运行时崩溃问题，自 2026-05-24 起持续存在，已影响 v1.0.15、v1.0.52、v1.0.53 等多个版本，至今未解决。严重损害 Windows 用户体验。

7. **[#4370 Copilot CLI 1.0.79-1 fails MCP initialization when server/discover returns -32602](https://github.com/github/copilot-cli/issues/4370)**
   新 triage Issue。CLI 在 MCP 初始化前发送 `server/discover` 请求，但 FastMCP 服务端不实现该方法并返回 `-32602`，CLI 则将其当作致命错误处理，导致无法连接。影响 FastMCP 生态互通。

8. **[#4378 Cloud agent: MCP registry policy fetch fails with 401/403 on GHEC data residency, silently blocking all user-configured MCP servers](https://github.com/github/copilot-cli/issues/4378)**
   针对 GHEC 数据驻留实例（`<tenant>.ghe.com`）的策略拉取 401/403 问题，导致所有用户自定义 MCP 服务器被“静默丢弃”，仅剩平台默认服务。企业用户排查成本极高。

9. **[#3172 Strange "Somebody else is owning the clipboard" message](https://github.com/github/copilot-cli/issues/3172)**
   7 个 👍 的体验问题。剪贴板被其他应用占用时，CLI 状态行会出现一条“Somebody else owns the clipboard now”的提示并破坏布局。对多应用切换场景很不友好。

10. **[#4376 Support model discovery and in-session switching for BYOM providers](https://github.com/github/copilot-cli/issues/4376)**
    新功能请求。当前 BYOM 配置只允许一个 `COPILOT_MODEL` 值，通过 Vertex AI OpenAI 兼容端点接入时，切换模型必须重启 CLI。社区呼吁支持模型发现与运行中切换。

## 重要 PR 进展

过去 24 小时内无新的或更新的 Pull Requests。

## 功能需求趋势

从近 24 小时的 Issue 中可以提炼出四个社区最关心的方向：

- **MCP 生态的成熟度**：多个新 Issue 集中在 MCP 的兼容性和策略处理上——包括 OAuth 3LO 授权（#4371）、FastMCP 方法协商（#4370）、Azure DevOps 场景下的 registry 拉取失败（#4374），以及企业数据驻留时的策略静默拦截（#4378）。MCP 已从“能用”走向“要好用”的阶段。
- **模型选择与成本透明度**：#4377（Terra 委派 Opus）和 #4345（不支持 medium effort）暴露了模型路由与推理强度配置的不透明。BYOM 用户的模型切换诉求（#4376）也指向“模型应可发现、可控制”的趋势。
- **终端渲染与交互体验**：alt-screen 开关诉求（#1799）、固定提示布局调整（v1.0.79-2）、剪贴板提示干扰（#3172）表明终端 UI 的快速演进正在“逼迫”部分用户，社区需要更多可配置性。
- **跨平台可靠性**：Windows 崩溃（#4026）持续数月未修复，Oracle Linux 10 上出现 ENOEXEC 启动失败（#4382），Linux 发行版兼容性关注度上升。

## 开发者关注点

- **MCP “静默失败”最令人头疼**：无论是 GHEC 策略 401/403（#4378）还是 `/mcp search` 的 400（#4374），失败发生时用户几乎没有有效反馈，排查成本非常高。
- **功能回归损伤信任**：`view` 工具在 1.0.73 误报路径不存在（#4202），且从 1.0.72 引入至今未修，开发者对 pre-release 质量有所顾虑。
- **模型委派需要充分披露与控制**：GPT-5.6 Terra 悄悄调用 Opus 子代理（#4377）消耗额度，用户要求至少提供“禁用委派”或“费用预估”能力。
- **UI 强制变更应提供回退选项**：alt-screen（#1799）等问题已持续数月，官方虽然优化布局（v1.0.79-2），但用户仍希望能自行选择是否启用。
- **Windows 稳定性成为最大短板**：原生运行时崩溃延续数月且跨版本复现（#4026），在 Windows 上重度使用 Copilot CLI 的开发者体验较差。

---

*数据来源：[github/copilot-cli](https://github.com/github/copilot-cli) 社区动态（2026-08-05 ~ 2026-08-06）*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-08-06** | 数据来源：github.com/MoonshotAI/kimi-cli

---

## 今日速览

今日无新版本发布，但社区修复与反馈热度不减：一个关于 MCP 工具返回图片导致任务中途中止的 bug（#2588）引发了两项针对性 PR（#2590、#2592），分别从错误提示和运行时行为两个角度进行修复；同时，文件编辑时损坏非 UTF-8 字节的严重问题（#2591）也被提交反馈。此外，长期悬而未决的 Memory System 功能需求（#1283）仍在持续吸纳社区建议。

---

## 社区热点 Issues（共 3 条活跃）

### 1. #1283 [功能需求] Memory System：跨会话持久化上下文
- **作者**: CatKang | 创建: 2026-02-27 | 更新: 2026-08-06 | 评论: 19
- **链接**: [Issue #1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)
- **重要性**: 这是社区持续关注度最高的功能需求，已沉淀 19 条讨论。核心诉求是让 Kimi Code CLI 能够跨会话记住项目模式、用户偏好和有用上下文，涵盖 AI 自动管理的记忆与用户手动定义的指令。该功能一旦落地，将显著提升 CLI 的"智能体"体验，减少重复指令输入。
- **社区反应**: 讨论活跃，已有较多人参与需求细化，但尚无官方排期回应。

### 2. #2591 [Bug] StrReplaceFile 损坏编辑区域外的不可解码字节
- **作者**: shoemoney | 创建: 2026-08-05 | 更新: 2026-08-05 | 评论: 0
- **链接**: [Issue #2591](https://github.com/MoonshotAI/kimi-cli/issues/2591)
- **重要性**: 高危数据完整性 bug。`StrReplaceFile` 在内部使用 `errors="replace"` 解码整个文件后编辑字符串再回写，导致文件中任何非 UTF-8 字节（即使远离编辑区域）都会被替换为 U+FFFD（对应字节 `EF BF BD`），造成文件长度和内容被破坏。对于涉及二进制内容或非 UTF-8 编码的项目文件，这属于静默数据破坏。
- **社区反应**: 刚提交，尚无评论，但问题严重性很高，预计会引发快速关注。

### 3. #2588 [Bug] 未声明 capabilities 的模型遇到图像返回时，副作用执行后任务中止且无修复提示
- **作者**: tic-top | 创建: 2026-08-05 | 更新: 2026-08-05 | 评论: 0
- **链接**: [Issue #2588](https://github.com/MoonshotAI/kimi-cli/issues/2588)
- **重要性**: 涉及工具调用的安全与反馈质量。当 `config.toml` 中模型未声明 `capabilities`，且 MCP 工具返回图像时，任务在工具已执行并产生副作用后才被中止，且错误信息不说明如何修复。这会导致用户困惑：工具已生效但对话中断，且无从下手修改配置。
- **社区反应**: 新提交即被拆分为两个 PR 针对性修复，说明维护者已关注并采取行动。

---

## 重要 PR 进展（共 3 条活跃）

### 1. #2592 [修复] 将不支持的工具媒体降级处理，而非中止任务
- **作者**: rainbowgore | 创建: 2026-08-06 | 更新: 2026-08-06 | 评论: 0
- **链接**: [PR #2592](https://github.com/MoonshotAI/kimi-cli/pull/2592)
- **功能/修复内容**: 解决 #2588 的核心问题。当模型未配置 `capabilities` 且工具（含 MCP）返回图像时，原逻辑会在工具已执行后触发 `LLMNotSupported` 异常并被中止。本 PR 改为在 `_grow_context` 中将不支持的媒体内容降级处理，而不是中断整个回合，避免已产生的副作用被白白浪费。

### 2. #2590 [修复] 在不支持能力的错误信息中指明配置修复方法
- **作者**: ayaangazali | 创建: 2026-08-05 | 更新: 2026-08-05 | 评论: 0
- **链接**: [PR #2590](https://github.com/MoonshotAI/kimi-cli/pull/2590)
- **功能/修复内容**: 部分解决 #2588，聚焦"无修复提示"问题。改进前错误仅提示缺少哪个能力（如 `LLM model 'Qwen3...'`），本 PR 在错误信息中明确告知用户应在 `config.toml` 中补充哪些配置项。

### 3. #2589 [文档] 添加 qwen-audio-agent 作为语音 ACP 客户端示例
- **作者**: x-lixu | 创建: 2026-08-05 | 更新: 2026-08-05 | 评论: 0
- **链接**: [PR #2589](https://github.com/MoonshotAI/kimi-cli/pull/2589)
- **功能/修复内容**: ACP（Agent Client Protocol）文档目前仅列出 Zed、JetBrains 等编辑器/IDE 客户端。本 PR 在 ACP 演示图后追加一句话，介绍 `qwen-audio-agent` 作为开源全双工语音运行时，可启动 `kimi acp` 作为 agent，让用户免提与 Kimi CLI 语音交互。作者已在描述中声明自身关联关系。

---

## 功能需求趋势

从当前活跃 Issues 与 PR 中可提炼出以下需求方向：

| 方向 | 代表 Issue/PR | 热度说明 |
|------|--------------|---------|
| **持久化记忆系统** | #1283 | 跨会话上下文记忆为最长期、讨论最多的需求，期望同时支持自动与手动记忆 |
| **MCP/工具调用链的容错与降级** | #2588、#2592 | 工具返回复杂媒体（如图片）时，模型能力声明不足应 graceful degrade，而非硬中止 |
| **错误信息可操作性** | #2588、#2590 | 错误提示应直接指出配置修复项，降低排查成本 |
| **文件编码安全性** | #2591 | 编辑文件时对非 UTF-8 字节的完整保留（编辑非目标区域不受污染） |
| **ACP 生态扩展** | #2589 | 除 IDE 外，语音交互等新型客户端正被引入，社区对多模态交互入口有兴趣 |

---

## 开发者关注点

1. **数据完整性是底线**：`StrReplaceFile` 对文件全局解码的暴力处理方式引发了编辑区域外的静默数据破坏，这提醒开发者在实现工具函数时需关注二进制安全，避免"编辑一个字节、损坏整个文件"。
2. **工具副作用与错误处理应该解耦**：开发者普遍不希望工具已执行后才发现模型不支持其输出类型，更合理的模式是"执行前能力预检"或"执行后带上下文降级"，且错误提示不能只报"不行"，还要给出"怎么改"。
3. **围绕 #2588 的快速拆解与并行修复**（#2590 修提示、#2592 修行为）展示了社区与维护者协作的高效模式：复杂问题先拆分出独立可并行的子任务，避免大 PR 久拖不决。
4. **语音交互成为新的 ACP 客户端方向**：qwen-audio-agent 的引入表明语音作为 CLI 交互入口开始被探索，未来可能出现更多非传统 UI 的接入方式。

---

*本日报由 AI 工具自动生成，数据来源于 GitHub 公开仓库 MoonshotAI/kimi-cli。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-08-06

## 今日速览

OpenCode v1.18.14 于今日发布，重点优化了 xAI 的 headless/远程登录体验，并增强了对瞬时 provider 错误的自动重试。社区热度集中在 VS Code 官方扩展（#11176，134👍）与 Go 订阅用量 API（#16017，126👍）两大功能请求；与此同时，新版本疑似引入 `/sessions` 历史记录丢失的回归问题（#40759），需密切关注。

## 版本发布：v1.18.14

**核心改进**
- 简化 xAI 登录为单一设备码流程（device-code flow），更好地支持 headless 和远程环境。

**Bug 修复**
- 保留结构化的流式 provider 错误信息，使兼容的 provider 可以重试失败的响应。
- 对更多瞬时性 provider 与网络错误增加自动重试机制。

## 社区热点 Issues

1. **[#11176] 官方 OpenCode VS Code 扩展**（👍134 · 💬27）
   - [github.com/anomalyco/opencode/issues/11176](https://github.com/anomalyco/opencode/issues/11176)
   - 目前获赞最多的功能请求，社区希望以原生 VS Code 扩展形式运行 OpenCode，而非仅通过 TUI/Web。

2. **[#16017] Go 订阅用量/余额 API 端点**（👍126 · 💬32）
   - [github.com/anomalyco/opencode/issues/16017](https://github.com/anomalyco/opencode/issues/16017)
   - 请求公开 Go Plan 的用量数据 API（支持滚动/周/月窗口）。Dashboard 已展示该信息，但缺少对外的程序化访问接口，自动化场景受阻。

3. **[#39845] DeepSeek V4 Flash 突然强制要求启用中国区模型托管**（👍22 · 💬17）
   - [github.com/anomalyco/opencode/issues/39845](https://github.com/anomalyco/opencode/issues/39845)
   - 会话中途模型调用突然停止，提示必须显式 opt-in 中国区托管。影响正在使用 DeepSeek V4 Flash 的订阅用户，且未提前预警。

4. **[#34498] SKILL.md frontmatter 支持 `disable-model-invocation: true`**（👍49 · 💬13）
   - [github.com/anomalyco/opencode/issues/34498](https://github.com/anomalyco/opencode/issues/34498)
   - Claude Code 等工具已支持该字段，社区希望 OpenCode 的 Skills 系统在模型调用层面同样遵循此开关。

5. **[#23153] 支持加密货币支付 Go 订阅**（👍36 · 💬16）
   - [github.com/anomalyco/opencode/issues/23153](https://github.com/anomalyco/opencode/issues/23153)
   - 用户希望增加 Crypto 支付渠道，反映出订阅支付方式多元化的诉求。

6. **[#31932] 跨项目会话列表/选择器（TUI）**（👍6 · 💬14）
   - [github.com/anomalyco/opencode/issues/31932](https://github.com/anomalyco/opencode/issues/31932)
   - 内置 `/sessions` 命令仅作用于当前项目，多仓库开发者需要全局会话视图与快速切换能力。

7. **[#37564] "Auto mode" LLM 分类器自动审批权限**（👍12 · 💬6）
   - [github.com/anomalyco/opencode/issues/37564](https://github.com/anomalyco/opencode/issues/37564)
   - 参考其他 agentic 工具的做法，希望引入基于 LLM 的权限自动分类/审批机制，减少手动确认打断。

8. **[#40759] `/sessions` 命令失效（v1.18.14 回归）**（💬2 · 新发）
   - [github.com/anomalyco/opencode/issues/40759](https://github.com/anomalyco/opencode/issues/40759)
   - 自升级 v1.18.14 后，通过 `/sessions` 切换历史会话会在输入新消息时完全清空聊天历史与上下文，属于严重回归，建议优先处理。

9. **[#8058] 远程 MCP 服务器支持 HTTP Streamable 传输**（💬10 · 已关闭）
   - [github.com/anomalyco/opencode/issues/8058](https://github.com/anomalyco/opencode/issues/8058)
   - 当前 `type: "remote"` 的 MCP 配置仅支持 SSE，但 MCP 协议已包含 `streamable-http`，多个主流 MCP server（含 Sanity）已迁移，兼容需求迫切。

10. **[#40779] macOS 高内存占用（Apple M2 / 16GB）**（💬1 · 新发）
    - [github.com/anomalyco/opencode/issues/40779](https://github.com/anomalyco/opencode/issues/40779)
    - 与旧版单个大内存消费者不同，新版表现为大量进程分散占用内存，疑似内存管理策略变化导致。

## 重要 PR 进展

1. **[#39758] 修复 Web 项目选择器不显示文件夹**
   - [github.com/anomalyco/opencode/pull/39758](https://github.com/anomalyco/opencode/pull/39758)
   - 解决全新浏览器配置下 "Open project" 始终显示 "No folders found"、无法添加首个项目的问题，一次性关闭 3 个关联 issue。

2. **[#27554] 局域网 Provider 自动发现 + 模型自动发现**
   - [github.com/anomalyco/opencode/pull/27554](https://github.com/anomalyco/opencode/pull/27554)
   - 在 `/connect` 中新增 Local (LAN) 发现能力，通过 mDNS 等方式自动发现本地 OpenAI 兼容服务器及其模型列表。

3. **[#40723] V1 数据迁移至 V2**
   - [github.com/anomalyco/opencode/pull/40723](https://github.com/anomalyco/opencode/pull/40723)
   - 为 V2 引擎增加 REST 触发的 V1 会话历史迁移（支持断点续传），同时兼容导入旧版 JSON 凭据，并更新 TUI 迁移流程。

4. **[#40772] 缺失认证方法时报告错误而非崩溃**
   - [github.com/anomalyco/opencode/pull/40772](https://github.com/anomalyco/opencode/pull/40772)
   - 修复 `ProviderAuth.authorize` 未对 hook 表加保护、直接索引导致的崩溃，改为输出明确的错误信息。

5. **[#40768] 修复 MCP 跨进程 OAuth 刷新竞态**
   - [github.com/anomalyco/opencode/pull/40768](https://github.com/anomalyco/opencode/pull/40768)
   - 多个 opencode 进程共享同一个 MCP server 凭据行，首个进程刷新并轮换 token 后第二个进程仍持有旧 token 而失败。该 PR 让连接过程在竞争中存活。

6. **[#40769] 重新登录时复用已注册的 MCP 动态客户端**
   - [github.com/anomalyco/opencode/pull/40769](https://github.com/anomalyco/opencode/pull/40769)
   - `MCPOAuth.authorize` 从空内存存储出发导致每次登录都重新执行动态客户端注册，此修复改为复用已有客户端信息。

7. **[#40763] TUI 侧边栏项目名提前加载**
   - [github.com/anomalyco/opencode/pull/40763](https://github.com/anomalyco/opencode/pull/40763)
   - 持久化会话标签的项目名不再等待 300ms 后台预取延迟，TUI 连接后立即加载，改善多项目场景下的侧边栏体验。

8. **[#40764] Desktop 版本号嵌入 server sidecar**
   - [github.com/anomalyco/opencode/pull/40764](https://github.com/anomalyco/opencode/pull/40764)
   - 将构建版本显式嵌入 Node server sidecar，防止打包后的 beta sidecar 回退到本地并错误请求 `@opencode-ai/plugin@local`。

9. **[#31834] ACP：从 todowrite 工具调用发出计划会话更新**
   - [github.com/anomalyco/opencode/pull/31834](https://github.com/anomalyco/opencode/pull/31834)
   - 修复 hydra-acp 集成中 OpenCode 无法像 Claude 一样渲染计划（plan）的问题，通过捕获 todowrite 工具调用来推送计划状态更新。

10. **[#38790] 新版布局的 Workspace 流程**
    - [github.com/anomalyco/opencode/pull/38790](https://github.com/anomalyco/opencode/pull/38790)
    - 为新会话增加 Local/New/Existing workspace 选择流程，支持长列表搜索、分支上下文、最近使用/本地/新建默认项，以及 workspace 的创建与迁移操作。

## 功能需求趋势

- **IDE 集成**：VS Code 官方扩展（#11176）是当前最高赞需求，开发者希望从编辑器内直接使用 OpenCode。
- **订阅与计费灵活化**：Go 用量 API（#16017）与 Crypto 支付（#23153）显示用户对订阅透明度和支付方式多元化有明显诉求。
- **MCP 生态深化**：streamable-http 传输支持（#8058）、OAuth 刷新竞态修复（#40768/#40769）、TaskMarket 任务市场集成（#40722）表明 MCP 仍是社区关注的核心扩展点。
- **TUI/UX 交互改进**：跨项目会话选择（#31932/#35581）、命令中途触发自动补全（#40689/#40719）、技能命令出现在根 autocomplete（#40720）等，说明终端交互细节打磨是高频需求方向。
- **模型与提供商支持**：DeepSeek 中国区托管限制（#39845）、LiteLLM 模型自动同步（#29308）、局域网 Provider 自动发现（#27554），反映出多模型/自托管场景的配置痛点。
- **Skills 系统增强**：`disable-model-invocation` 支持（#34498）与技能命令补全优化，正在向 Claude Code 的能力看齐。
- **多智能体可视化**：#40564 请求在工作流 UI 中可视化多智能体并行任务，呼应 agent 编排场景的兴起。

## 开发者关注点

- **v1.18.14 回归问题**：`/sessions` 切换导致历史清空（#40759）是新版本引入的严重 bug，恐影响日常多会话工作流，需尽快 Hotfix。
- **全局规则记忆不佳**：#40348 反馈 `~/.config/opencode/AGENTS.md` 中的全局规则（如 "no auto-commit"）会跨会话甚至同会话内被反复遗忘，导致约束失效。
- **模型可用性波动**：DeepSeek V4 Flash 中国区限制（#39845）与多模型 Forbidden 错误（#40633）让开发者在切换模型时频繁踩坑，说明模型路由与区域策略的错误提示需要更友好。
- **桌面端可用性问题**：设置页无法滚动导致无法检查更新（#40775）、鼠标点击偶发失灵（#40780）、macOS 内存异常（#40779），桌面端基础体验需重点排查。
- **V2 行为一致性**：#40778 指出 V2 中 Plan Mode 被忽略，agent 跳过规划直接进入实现阶段，与 V1 行为不一致，影响对 plan-then-code 流程有严格要求的用户。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-08-06

## 今日速览

过去 24 小时无新版本发布，但社区议题与 PR 活动密集。Linux 下配置目录未遵循 XDG 规范（#534）以 23 个 👍 成为近期最受共鸣的议题；扩展事件总线泄漏（#7193）与 OSC 8 超链接截断（#7399）两个 bug 均已被对应 PR 修复。上游模型与认证 API 变更也正快速跟进（Qwen 3.8 Max GA、Copilot 账号策略回退）。

## 社区热点 Issues

### 1. #7547 你在 Windows 上怎么用 Pi？遇到了哪些问题？
- **状态**: OPEN | 评论: 17
- 维护者 petrroll 主动发起 Windows 使用方式征集帖，意图明确支持优先级。Windows 开发者基数庞大，该议题将直接决定文档与 bug 修复的资源分配方向。
- https://github.com/earendil-works/pi/issues/7547

### 2. #534 Linux 下 config 文件夹不符合 XDG 规范
- **状态**: CLOSED | 评论: 14 | 👍: 23
- 用户指出配置目录直接位于 `$HOME` 下，违反 XDG Base Directory 规范。23 个 👍 表明这是 Linux 用户群体中的高共识议题，目前已关闭（已确定处理方案）。
- https://github.com/earendil-works/pi/issues/534

### 3. #7399 truncateToWidth() 截断 OSC 8 超链接留下悬挂转义序列
- **状态**: CLOSED | 评论: 12
- 截断发生在超链接 label 内部时，终端会残留未闭合的 OSC 8 序列，污染后续渲染。已由 PR #7657 修复并补充回归测试。
- https://github.com/earendil-works/pi/issues/7399

### 4. #5263 会话内模型与思考级别更改应默认为临时性
- **状态**: OPEN | 评论: 11 | 👍: 12
- 建议 `/settings` 中更改模型/思考级别时仅作用于当前会话，另设 "Default model" 入口用于全局默认。12 个 👍 显示用户对当前"改一次全局生效"的行为不满。
- https://github.com/earendil-works/pi/issues/5263

### 5. #5291 Anthropic 订阅下会话随机卡在 "Working..."
- **状态**: CLOSED | 评论: 8 | 👍: 3
- Anthropic Enterprise 订阅用户报告多个会话同时卡死，中断/恢复操作时好时坏，属于直接影响日常使用的可靠性问题。
- https://github.com/earendil-works/pi/issues/5291

### 6. #6675 `pi update --self` 遇到一次瞬态网络错误就放弃更新
- **状态**: CLOSED | 评论: 8 | 👍: 2
- 自更新路径仅请求一次 latest-version 接口，连接失败即终止，无重试机制，错误提示也缺乏指引性。
- https://github.com/earendil-works/pi/issues/6675

### 7. #5064 设置中添加上下文窗口大小选项
- **状态**: CLOSED | 评论: 7
- 用户希望 Pi 像 Copilot CLI 一样支持选择上下文窗口大小，以适配不同任务成本与长度需求。
- https://github.com/earendil-works/pi/issues/5064

### 8. #3200 prompt 命令支持视频/音频内容
- **状态**: OPEN | 评论: 7 | 👍: 4
- 扩展 RPC 的 `prompt` 命令，除现有 images 外，增加 video/audio 转发以支持多模态模型（Gemma 4、GPT-4o）。
- https://github.com/earendil-works/pi/issues/3200

### 9. #7553 压缩（compaction）应支持独立配置 thinking level / model
- **状态**: OPEN | 评论: 7
- 自动/手动压缩目前无条件复用会话的 thinking level，导致推理模型用户无法将摘要思考预算与正常对话分离。
- https://github.com/earendil-works/pi/issues/7553

### 10. #7465 iTerm2 内联图片缺少 payload size 参数
- **状态**: CLOSED | 评论: 7
- OSC 1337 序列未包含 `size=<decoded byte count>`，导致 `@xterm/addon-image@0.9.0` 静默拒绝渲染图片，影响 xterm.js 终端兼容性。
- https://github.com/earendil-works/pi/issues/7465

## 重要 PR 进展

### 1. #7656 修复扩展事件总线泄漏
- 关闭 #7193。将 `pi.events.on()` 的订阅生命周期绑定到扩展运行时，reload/disposal 后自动清理过期监听器，不影响宿主持有的监听器，并附带回归测试。
- https://github.com/earendil-works/pi/pull/7656

### 2. #7657 截断时正确闭合 OSC 8 超链接
- 关闭 #7399。`truncateToWidth()` 在截断处主动闭合未完成的超链接，保留 BEL/ST 终止符，新增针对 BEL 终止场景的回归测试。
- https://github.com/earendil-works/pi/pull/7657

### 3. #7638 OpenAI 兼容端点支持 thinking_token_budget
- 修复推理模型在共享 `max_tokens` 下"思考耗尽额度、无回答无工具调用"的问题，为 reasoning 与 answer 分配独立预算。
- https://github.com/earendil-works/pi/pull/7638

### 4. #7672 恢复 Copilot 模型列表（账号策略回退）
- 修复 #7634。`model_picker_enabled` 仍为主信号，但当 Individual 端点无可用 picker 模型时，回退到策略显式启用的模型，修复登录后模型列表为空的问题。
- https://github.com/earendil-works/pi/pull/7672

### 5. #7679 `@file` 引用支持行号范围
- 支持 `@file#L122-L145` 语法（1-based 闭区间），EOF 行为与 `read` 工具对齐，文件 prompt 标签中附带有效行信息。
- https://github.com/earendil-works/pi/pull/7679

### 6. #7685 编译产物禁用 bunfig 自动加载
- Bun 编译的独立二进制会加载 cwd 下的 `bunfig.toml` preload，项目配置损坏时连 `pi --version` 也会崩溃。改用 `--no-compile-autoload` 编译发布版与本地版。
- https://github.com/earendil-works/pi/pull/7685

### 7. #7659 新增 Qwen Token Plan Individual 提供商
- 接入国际版 Token Plan 端点，使用 `QWEN_TOKEN_PLAN_API_KEY`，暴露 8 个订阅模型，与现有国际版/中国版提供商并存。
- https://github.com/earendil-works/pi/pull/7659

### 8. #7670 Qwen 3.8 Max 正式版替换 preview
- 将 Token Plan 提供商中的 `qwen3.8-max-preview` 替换为 GA 版 `qwen3.8-max`，并应用 3.8 推理 effort 映射（low / medium / xhigh），同时从生成目录中排除 preview 模型。
- https://github.com/earendil-works/pi/pull/7670

### 9. #7681 支持 AGENTS.override.md 目录级上下文覆盖
- 关闭 #7642。同一目录下存在 `AGENTS.override.md` 时优先于 `AGENTS.md`/`CLAUDE.md` 加载，其他目录的上下文分层不受影响。
- https://github.com/earendil-works/pi/pull/7681

### 10. #7680 TUI 选择组件支持翻页键
- 处理 `tui.select.pageUp/pageDown` 键绑定，活动选择优先于全屏转录滚动，覆盖内置选择组件、autocomplete、coding-agent 选择器及 bundle 示例。
- https://github.com/earendil-works/pi/pull/7680

## 功能需求趋势

- **多模态输入扩展**：#3200 要求 prompt 命令支持视频/音频，多模态模型已成为明确的社区期待方向。
- **模型与上下文配置精细化**：#5064 上下文窗口大小、#5263 会话内模型变更临时化、#7553 压缩独立 thinking level，用户希望按会话/场景细粒度控制模型行为。
- **上下文文件体系增强**：#7642/#7681 引入 AGENTS.override.md，支持目录级覆盖，契合 monorepo 与多团队协作场景。
- **多提供商与模型快速跟进**：Qwen Token Plan（#7659）、Copilot 账号策略（#7672）、Vertex/GCP 元数据服务（#5323），社区对多后端支持需求旺盛。
- **模型选择器可用性**：#7693/#7692 要求自然排序（`@1m` 应排在 `@200k` 之前），并统一 `/model` 与 `/scoped-models` 的展示顺序。
- **终端/渲染兼容性**：#7465 iTerm2 内联图片、#7399 OSC 8 超链接，转义序列与终端协议的正确处理是持续关注点。

## 开发者关注点

- **Windows 体验不明朗**：#7547 表明维护者不确定 Windows 上有多少种运行方式，需社区反馈来聚焦文档与 bug 修复资源。
- **配置规范遵循**：#534 的 23 个 👍 证明 Linux 用户对 XDG 等系统规范有强烈诉求，配置目录位置直接影响工具好感度。
- **网络容错不足**：#6675 自更新无重试、#7444 WebSocket 仅处理两种错误码，瞬态故障即可让会话硬停，开发者对这类"小故障大影响"问题敏感。
- **扩展生命周期管理**：#7193 事件监听器在 reload/disposal 后残留，内嵌 Agent 场景受影响明显，需更强的运行时隔离。
- **稳定性痛点**：#5291 会话卡 "Working..."、#7601 Node 20 下 CacheStorage 崩溃、#7688 OpenRouter auto-beta 显示负成本，均直接干扰日常任务。
- **Copilot 集成回归**：#7634 登录后模型列表为空，根因是上游 API 字段语义变化，提示三方认证解析需更健壮的兜底逻辑。
- **CLI 与编辑细节**：#7687 文档遗漏双 Ctrl+C 退出、#7666 Bash 工具多行命令换行被折叠成空格、#7609 失败 turn 在 `/tree` 中不可恢复，细节体验仍有打磨空间。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-08-06

## 1. 今日速览

今日最受关注的是 **Qwen Code Desktop v0.1.0 正式发布**，但 Windows 用户随即报告了启动崩溃问题（#8615）。与此同时，**v0.21.6 稳定版**为 WebShell 带来了实验性原生 Live Voice 功能（macOS）。安全方面，两个高危问题成为社区焦点：Provider 警告消毒器泄露密码（#8136）和只读 Shell 分类器可被命令替换绕过（#8582）。

## 2. 版本发布

### v0.21.6 稳定版
- WebShell 新增实验性原生 Live Voice 支持（macOS），可通过全局快捷键进行实时音频交互（[#7859](https://github.com/QwenLM/qwen-code/pull/7859)）
- Web Shell 在后台活动期间保持会话轮次展开

### v0.21.6-nightly.20260806.cb3dc107f
- 包含一个测试稳定性修复：`glob external-path` 测试改用专用空目录而非 `/tmp`，避免 CI 负载高时超时（[#8604](https://github.com/QwenLM/qwen-code/pull/8604)）

### desktop-v0.1.0（纯桌面版首发）
- 修复 CI 容器任务默认 shell 配置问题（[#7838](https://github.com/QwenLM/qwen-code/pull/7838)）
- 修复 Web Shell 相关若干问题
- ⚠️ 注意：该版本目前存在 Windows 启动崩溃问题，详见下方 Issue #8615

## 3. 社区热点 Issues

### 🔴 安全类（高优先级）

**[#8136] Provider 警告消毒器截断含端口消息、泄露含 `@` 密码**（评论 8）  
[GitHub Issue #8136](https://github.com/QwenLM/qwen-code/issues/8136)  
`sanitizeProviderWarning` 在清洗 Provider URL 凭据时存在两个由同一根因导致的安全漏洞：截断含端口消息、泄露含 `@` 的密码。安全敏感度极高，社区讨论活跃，是今日最受关注的 Issue。

**[#8582] 只读 Shell 分类器可被 `\` 行延续或 `${var@P}` 绕过**（P1，评论 4）  
[GitHub Issue #8582](https://github.com/QwenLM/qwen-code/issues/8582)  
AST 分类器与运行时替换检测均可被特殊写法绕过，导致"只读" Shell 命令实际执行任意代码，属于高危安全漏洞。目前状态为 OPEN。

### 🖥️ 桌面端问题

**[#8615] Desktop 0.1.0 / Windows 启动时崩溃：`EISDIR lstat 'C:'`**（P1，评论 2）  
[GitHub Issue #8615](https://github.com/QwenLM/qwen-code/issues/8615)  
刚发布的桌面版在 Windows 上打开工作区即刻崩溃，bundled runtime（Node v22.20.0）报 `EISDIR` 错误。新版本首发日即报 P1 崩溃，影响面较大。

**[#8538] 桌面端复制响应按钮无效**（P2，评论 4）  
[GitHub Issue #8538](https://github.com/QwenLM/qwen-code/issues/8538)  
Windows 10 上点击"复制响应"按钮剪贴板无变化。经多轮重启、重启系统验证仍复现，属稳定复现的功能失效。

### 🔌 MCP 与集成

**[#8550] `qwen mcp list` 在 SSE 服务器不发送 `endpoint` 时无限挂起**（P2，评论 4）  
[GitHub Issue #8550](https://github.com/QwenLM/qwen-code/issues/8550)  
当 MCP 服务器使用 SSE transport 但迟迟不发送 `endpoint` 事件时，命令永久挂起而非超时。影响 MCP 配置调试体验。

**[#8606] VSCode 插件：Edit/Write 文件链接总解析到 `<workspace-root>/<basename>`**（P2，评论 2）  
[GitHub Issue #8606](https://github.com/QwenLM/qwen-code/issues/8606)  
模型使用 `edit_file` 或 `write_file` 后，生成的文件链接对嵌套路径一律解析失败，提示"file not found"。CI/CD 与 VSCode 深度用户受影响明显。

### 📱 新方向

**[#8595] "Local Control" 模式：QR 码配对手机访问本地会话**（P2，评论 2）  
[GitHub Issue #8595](https://github.com/QwenLM/qwen-code/issues/8595)  
提议桌面应用/CLI 通过展示 QR 码、扫码配对的方式，实现零配置手机访问并接管本地 Qwen Code 会话，是远程使用场景的高频诉求。

**[#8092] 围绕 Web Shell 构建低维护桌面应用**（评论 5）  
[GitHub Issue #8092](https://github.com/QwenLM/qwen-code/issues/8092)  
社区建议复用 Web Shell 作为桌面应用的主 UI 与功能面，而非维护独立桌面 UI，以降低维护成本。该方向已获得较多讨论。

### ⚠️ 长期痛点

**[#2460] CLI 和 VSC 插件频繁 "edit failed"，几乎无法正常使用**（评论 4，Closed）  
[GitHub Issue #2460](https://github.com/QwenLM/qwen-code/issues/2460)  
老牌高热度 Issue，今日仍有新评论。用户反馈编辑功能频繁失败、甚至尝试用 node/ps 修改导致代码损坏，属长期存在的核心痛点。

**[#8560] Web Shell 刷新会话深链返回 401**（P2，评论 3）  
[GitHub Issue #8560](https://github.com/QwenLM/qwen-code/issues/8560)  
`qwen serve` 配置 bearer token 后，会话深链刷新即返回 `401 Unauthorized`，影响 Web Shell 会话的可用性与持久访问。

## 4. 重要 PR 进展

**[#8396] fix(hooks): 关闭 Hook 执行的四个信任边界漏洞**  
[GitHub PR #8396](https://github.com/QwenLM/qwen-code/pull/8396)  
HTTP hooks 不再跟随重定向，并修复了另外三个仓库配置与代码执行/网络出口间的信任边界漏洞。安全加固的关键 PR。

**[#8613] feat(web-shell): tmux 驱动的交互式终端子代理**  
[GitHub PR #8613](https://github.com/QwenLM/qwen-code/pull/8613)  
支持 Agent 在 daemon 主机的 tmux 会话中运行交互式 CLI（REPL、TUI 等），Web Shell 提供实时交互终端视图。Web Shell 能力的重要扩展。

**[#8388] feat(review): capture-tui 渲染声明获得像素级证据（Phase 2）**  
[GitHub PR #8388](https://github.com/QwenLM/qwen-code/pull/8388)  
`qwen review capture-tui` 作为证据生产者，可在私有 tmux server 中驱动被测代码并截图，让渲染类问题验证不再停留在"描述"层面。

**[#8578] feat(channels): 飞书 ask-user 交互卡片**  
[GitHub PR #8578](https://github.com/QwenLM/qwen-code/pull/8578)  
为飞书渠道新增原生 Card V2 形式的 `ask_user_question` 交互支持，单选/多选问题在同一表单中渲染，回调与请求/卡片/会话精确关联。

**[#8332] feat(cli): 附件音频桥接**  
[GitHub PR #8332](https://github.com/QwenLM/qwen-code/pull/8332)  
当主模型不支持音频时，交互式/headless 的 `@` 附件和 ACP 音频 prompt 通过批处理语音模型转写，并替换为显式标记的"非可信"机器转写文本。

**[#8350] feat(voice): 支持受信任的私有 ASR Base URL**  
[GitHub PR #8350](https://github.com/QwenLM/qwen-code/pull/8350)  
新增 `security.allowedInsecureVoiceBaseUrls` 精确允许名单（默认空），支持受管部署通过 HTTP/私有网络 ASR 网关走语音转写，同时保持默认拒绝的安全姿态。

**[#8553] fix(core): 限制长单轮会话中向后翻页的边界扩展**  
[GitHub PR #8553](https://github.com/QwenLM/qwen-code/pull/8553)  
向后翻页时按轮次边界对齐，但将对齐扩展限制在最多一个额外页窗口，避免超长会话翻页开销过大。

**[#8559] feat(web-shell): 改进并行 Agent 活动反馈**  
[GitHub PR #8559](https://github.com/QwenLM/qwen-code/pull/8559)  
并行子代理运行时状态保持在会话尾部、详情自动展开，主 Agent 恢复前分组自动收起。优化多 Agent 协作场景的可视化体验。

**[#8576] fix(cli): `@` 补全分类标签支持方向键切换**  
[GitHub PR #8576](https://github.com/QwenLM/qwen-code/pull/8576)  
用左右方向键在 `@` 补全的类别标签间切换，替换此前的 Ctrl+方向键/Ctrl+Tab 绑定，降低交互成本。

**[#8612] fix(autofix): 在 review CLI bundle 中发布 core dist**  
[GitHub PR #8612](https://github.com/QwenLM/qwen-code/pull/8612)  
修复 review 流程中 bundle 产物缺少核心构建输出导致下游阶段失败的问题，并新增契约测试锁定归档内容。

## 5. 功能需求趋势

从今日 Issues/PR 来看，社区最关注以下方向：

- **桌面端体验重构**：围绕 Web Shell 构建低维护桌面应用（#8092）、弃用 Electron 并将 `desktop-shell` 更名为 `desktop`（#8596）、桌面端手机扫码远程访问的 "Local Control" 模式（#8595）——桌面端架构演进意愿强烈。
- **安全加固持续加码**：Provider 凭据消毒（#8136）、只读 Shell 绕过（#8582）、Hook 信任边界（#8396）、私有 ASR 允许名单（#8350）——安全类需求贯穿 CLI、Shell、Hook、语音多个子系统的提交。
- **MCP 生态稳定性**：`qwen mcp list` 对慢/无响应 SSE 服务器的挂起问题（#8550），反映 MCP 在真实网络环境下的容错需求。
- **异步/批处理模式**：`/slow` 或 `/batch` 低成本的异步 Agent 运行模式（#8605）。
- **后台 Agent 可观测性**：跟踪 `activeWork` 事实与后台 Agent 恢复路径（#8586）。
- **SDK 能力扩展**：TypeScript SDK `query()` 支持内联注册 hooks（#8591）。
- **多语言文档支持**：请求增加韩语文档与 README 语言栏入口（#8551）。

## 6. 开发者关注点

- **桌面端 Windows 体验问题集中爆发**：启动崩溃 `EISDIR`（#8615）、复制按钮失效（#8538）、UI 语言切换无效（#8592）、Markdown 链接点击无反应（#8593）——Windows 是桌面版首发后问题最集中的平台。
- **TUI 终端兼容性痛点**：tmux 3.4 下 TUI 持续闪屏（#8580）、通过 SSH+tmux 使用时的闪屏问题（#8562）、Warp 中缩小窗口导致 transcript 重复输出（#8557）——终端渲染适配仍需加宽兼容矩阵。
- **文件编辑可靠性是长期心结**：#2460 "edit failed" 老 Issue 仍被评论，叠加 VSCode 文件链接解析错误（#8606），文件操作链路稳定性是开发者最敏感的核心能力。
- **CI/CD 基础设施噪音**：`/review` 超时率高企（#8597）、mock 错误日志干扰 ENOSPC 判断（#8532）、自动修复任务迁移至 ECS 池（#8603）——项目团队自身在持续优化 CI 可靠性与成本。
- **认证与会话持久化**：Web Shell 深链刷新 401（#8560）与会话恢复提示不可见（#8455），反映服务化部署场景下的会话体验有待完善。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-08-06

> 数据来源：[Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)（注：近期链接均指向 Hmbown/CodeWhale，项目正在更名/迁移中）

## 今日速览

过去 24 小时，社区围绕 v0.9.4 Runtime API 系列扩展持续活跃，多项 PR 为外部客户端补全技能生命周期、MCP 配置、内存与目标状态等管理端点。Issue 侧则聚焦沙箱路径白名单、多 API key 支持，以及未知模型 ID 静默回退 128K 上下文的透明度问题。

## 版本发布

过去 24 小时无新版本发布。v0.9.4 正处于发布列车（release train）阶段，详见 PR #5135。

## 社区热点 Issues

> 当前共 4 条 Issue 在过去 24 小时内有更新，以下全部收录。

### 1. [#4029] 计划创建类似 Reasonix 的界面吗？
- 作者：longASKme ｜ 更新：2026-08-05 ｜ 评论：4
- 链接：[Hmbown/CodeWhale Issue #4029](https://github.com/Hmbown/CodeWhale/issues/4029)
- **关注点**：用户询问是否计划构建类似 Reasonix 的交互界面。当前为开放讨论，社区暂无明确路线图回应。

### 2. [#5005] 沙箱支持文件系统路径白名单（已关闭）
- 作者：WillHouMoe ｜ 创建：2026-07-31 ｜ 更新：2026-08-05 ｜ 评论：2
- 链接：[Hmbown/CodeWhale Issue #5005](https://github.com/Hmbown/CodeWhale/issues/5005)
- **关注点**：`sandbox_mode = "workspace-write"` 限制了对外部日志和构建产物的访问，导致无法使用 Xcode 构建调试（`~/Library/Developer/Xcode/DerivedData/` 路径被禁止）。该 Issue 已关闭，但代表 IDE/移动开发场景下的关键沙箱边界需求。

### 3. [#5250] 仅支持保存一个 API key，多服务商切换困难
- 作者：ffyuhf ｜ 创建：2026-08-05 ｜ 更新：2026-08-05 ｜ 评论：1
- 链接：[Hmbown/CodeWhale Issue #5250](https://github.com/Hmbown/CodeWhale/issues/5250)
- **关注点**：用户同时使用 DeepSeek 和 GLM，每次切换模型都必须重新获取 API key。期望支持分别保存不同提供商的 key，而不是互相覆盖。

### 4. [#5244] 未知模型 ID 静默降级到 128K 上下文，需明确提示
- 作者：Hmbown ｜ 创建：2026-08-04 ｜ 更新：2026-08-05 ｜ 评论：1
- 链接：[Hmbown/CodeWhale Issue #5244](https://github.com/Hmbown/CodeWhale/issues/5244)
- **关注点**：当 `context_window_for_model` 不认识模型 ID 时，会无声回退到 128K `LEGACY_DEEPSEEK_CONTEXT_WINDOW_TOKENS`，导致 1M 窗口模型被静默截断。v0.9.4 已部分缓解，但仍需在 UI/日志中显式告警。

## 重要 PR 进展

> 挑选 10 条重要 PR。

### 1. [#5135] Codewhale v0.9.4 发布列车（release train）
- 作者：Hmbown ｜ 更新：2026-08-05
- 链接：[Hmbown/CodeWhale PR #5135](https://github.com/Hmbown/CodeWhale/pull/5135)
- **内容**：v0.9.4 整合分支，当前领先 main 77 个提交，包含 18 个列车提交及 2026-08-01 全部源码候选。是当前版本发布的主干线。

### 2. [#5225] feat(acp)：通过 session/prompt 暴露 file/search/git/patch/shell 工具
- 作者：rafaelcavalheri ｜ 更新：2026-08-05
- 链接：[Hmbown/CodeWhale PR #5225](https://github.com/Hmbown/CodeWhale/pull/5225)
- **内容**：修复 ACP server 中 `session/prompt` 仅流式输出模型文本、不执行工具调用的问题。此前通过 ACP（如 Zed、社区 `acp-deepseek-adapter`）接入的客户端只能获得纯聊天能力，本 PR 让 ACP 真正具备代码编辑操作能力。

### 3. [#5129] feat(runtime-api)：技能生命周期端点
- 作者：Copilot ｜ 更新：2026-08-05
- 链接：[Hmbown/CodeWhale PR #5129](https://github.com/Hmbown/CodeWhale/pull/5129)
- **内容**：TUI 侧提供完整技能生命周期（安装、更新、卸载、信任、审计），但 v0.9.4 Runtime API 仅有发现和启停能力。本 PR 补齐全部管理端 HTTP 路径，统一走 `require_runtime_token` 鉴权。

### 4. [#5131] feat(runtime-api)：内存资源端点
- 作者：Copilot ｜ 更新：2026-08-05
- 链接：[Hmbown/CodeWhale PR #5131](https://github.com/Hmbown/CodeWhale/pull/5131)
- **内容**：新增 `/v1/memory` 端点，支持受限的内存检查与生命周期控制，让托管客户端能够查看活动内存的作用域和数据来源，不再依赖额外的内存存储。

### 5. [#5130] feat(runtime-api)：MCP 服务器配置管理
- 作者：Copilot ｜ 更新：2026-08-05
- 链接：[Hmbown/CodeWhale PR #5130](https://github.com/Hmbown/CodeWhale/pull/5130)
- **内容**：v0.9.4 对 MCP server 仅支持只读清单。本 PR 新增 `POST /v1/apps/mcp/servers` 等路由，实现创建、更新、删除的完整 CRUD，并通过 TOML/JSON 持久化。

### 6. [#5133] feat(runtime-api)：暴露持久目标循环状态与控制
- 作者：Copilot ｜ 更新：2026-08-05
- 链接：[Hmbown/CodeWhale PR #5133](https://github.com/Hmbown/CodeWhale/pull/5133)
- **内容**：新增 `/v1/threads/{id}/goal` 端点，支持读取目标状态及驱动状态流转，让外部客户端能通过 Runtime HTTP API 管理目标循环生命周期。

### 7. [#5240] feat(tui/shell)：在工具内容中展示真实等待耗时
- 作者：SparkofSpike ｜ 更新：2026-08-05
- 链接：[Hmbown/CodeWhale PR #5240](https://github.com/Hmbown/CodeWhale/pull/5240)
- **内容**：`wait`/delta 工具的结果此前仅在元数据中保存 `duration_ms`，模型完全不可见，导致长时间等待与短等待无法区分。本 PR 将真实耗时写入工具内容，有助于模型避免 busy-poll 和误判长任务卡死。

### 8. [#5242] feat(tui/subagent)：通过 followup 从检查点恢复中断的子代理
- 作者：SparkofSpike ｜ 更新：2026-08-05
- 链接：[Hmbown/CodeWhale PR #5242](https://github.com/Hmbown/CodeWhale/pull/5242)
- **内容**：`agents/followup` 此前对 `interrupted_continuable` 子代理只能入死信队列，检查点保留但不可恢复运行。本 PR 让长任务（文档审查、多步搜索）中断后可通过 `continuation_handle` 真正从检查点恢复。

### 9. [#5234] fix(tui)：鼠标捕获激活期间保持 alternate scroll 关闭
- 作者：SparkofSpike ｜ 更新：2026-08-05
- 链接：[Hmbown/CodeWhale PR #5234](https://github.com/Hmbown/CodeWhale/pull/5234)
- **内容**：修复对话内容超出屏幕时，滚轮/触控板操作误触发布者的输入历史而非滚动对话的 bug。根因是 `recover_terminal_modes()` 同时启用了鼠标捕获和 xterm alternate-scroll 模式。

### 10. [#5192] fix(tui)：锁定 ratatui 至 0.30.0
- 作者：bistack ｜ 更新：2026-08-05 ｜ 已关闭
- 链接：[Hmbown/CodeWhale PR #5192](https://github.com/Hmbown/CodeWhale/pull/5192)
- **内容**：ratatui-core 0.1.1+ 中 `Terminal::clear()` 会发起阻塞式光标位置查询，与 TUI 事件循环抢占 crossterm 内部锁。将 `ratatui` 固定为 `=0.30.0`、`ratatui-core` 为 `=0.1.0` 以避免启动时的竞争问题。

### 其他值得关注的 PR
- [#5229] 新增中文版 Windows 新手指南（含安装、配置、模型切换、模式与权限、常见问题），已在 Windows 10 实测。[查看 PR](https://github.com/Hmbown/CodeWhale/pull/5229)
- [#5095] 修复 Windows 下 OpenHarmony SDK 含空格路径时链接参数被拆分的 bug。[查看 PR](https://github.com/Hmbown/CodeWhale/pull/5095)
- [#5132] Runtime API 暴露 verifier 收据与证据，而不仅是聚合失败计数。[查看 PR](https://github.com/Hmbown/CodeWhale/pull/5132)

## 功能需求趋势

从过去 24 小时更新的 Issues 与 PR 中，可以提炼出以下社区关注方向：

1. **Runtime API 服务化与可观测性增强**：多条 Copilot 提交的 PR（#5129、#5130、#5131、#5133、#5132）正在系统性补全 Runtime HTTP API 的管理能力，包括技能、MCP、内存、目标循环和 verifier 证据。这标志着 TUI 正从单体工具向可托管、可编程的服务化架构演进，便于桌面/Web 客户端或 IDE 深度集成。
2. **外部客户端/IDE 集成**：ACP 工具的完整支持（#5225）直接服务于 Zed 等基于 ACP 的编辑器，把对话式助手升维为可执行文件操作、搜索、Git 操作的代码智能体。
3. **多模型与多提供商支持**：Issue #5250 要求支持分别保存多个 API key；#5244 则要求对未知模型 ID 给出显式上下文窗口提示。两者共同指向更透明的多模型服务治理。
4. **平台体验细化**：Windows 中文指南（#5229）、Windows 链接器路径修复（#5095）体现了 Windows 用户基数的增长；TUI 滚动修复（#5234）、等待时间可见性（#5240）则是对终端交互细节的打磨。
5. **沙箱边界与安全**：#5005 提出为沙箱增加路径白名单，属于安全与灵活性的权衡探索，未来可能影响构建类工具链的可用性。

## 开发者关注点

1. **回退与降级不透明**：#5244 揭示了核心痛点——未知模型 ID 下静默使用 128K 上下文，开发者可能无感知地丢失长上下文能力。用户期望系统在 UI 和日志中明确告警，而不是安静地降级。
2. **多服务商 API key 管理笨拙**：#5250 中每次切换提供商都需要手动更换 key，且互相覆盖，影响实际开发流效率。建议参考其他 CLI 工具的 profile/多 key 方案。
3. **沙箱限制外部工具链路**：#5005 表明 `workspace-write` 过于严格，构建产物和日志路径被完全隔离，导致 Xcode 等外部工具链无法正常使用。此类场景需要更细粒度的路径级控制。
4. **TUI 交互细节影响重度使用**：#5234（滚动失效）和 #5240（等待耗时不可见）虽是小问题，但在长时间会话中显著影响效率，说明社区对终端交互一致性要求较高。
5. **依赖锁定策略**：#5192 暴露了 ratatui 上游行为变化（CPR 阻塞）与 TUI 事件循环的锁竞争，开发者对依赖版本变更敏感，希望项目在新版本适配前主动锁定并验证。

---
*本日报基于 GitHub 公开数据自动生成，时间范围以 2026-08-06 为准，覆盖过去 24 小时的 Issue/PR 动态。*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*