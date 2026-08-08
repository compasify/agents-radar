# AI CLI 工具社区动态日报 2026-08-08

> 生成时间: 2026-08-08 00:46 UTC | 覆盖工具: 10 个

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

# AI CLI 工具横向对比分析报告（2026-08-08）

## 1. 生态全景

AI CLI 工具赛道已进入密集发布期：今日仅 9 个活跃项目就发布了 14 个版本（含 alpha/nightly），其中 Codex 迭代最激进（4 个版本），Gemini CLI 与 Copilot CLI 各 3 个。社区讨论重心正从"功能有无"转向"稳定性、安全性与可治理性"——Windows 平台适配、MCP 进程生命周期、子代理状态误报、会话上下文持久化成为跨项目共性痛点。同时，插件生态（Claude Code archive 源、Codex portable plugins、Copilot Agent Plugins spec）和混合模型接入（Pi 的 LM Studio/Cursor 桥接、CodeWhale 混合舰队）代表新的差异化方向。整体而言，工具正在从"能跑通"迈向"能可靠地在团队生产环境中运行"。

## 2. 各工具活跃度对比

| 工具 | 精选 Issues 数 | 重要 PR 数 | Release 数 | 说明 |
|------|------------|-----------|-----------|------|
| Claude Code | 10 | 3 | 1（v2.1.224） | 企业功能（self-hosted runner）与插件源拓展，Issue 热度高（#13354 达 191 👍） |
| OpenAI Codex | 10 | 10 | 4（v0.147.0 + 3 alpha） | 版本节奏最快，底层基础设施 PR 密集（gRPC、MCP 事件订阅、重连） |
| Gemini CLI | 10 | 10 | 3（稳定/预览/夜间） | 发布均为补丁，PR 含 SSRF 高危修复与 Node 20 EOL 升级，安全主线 |
| GitHub Copilot CLI | 10 | 0 | 3（v1.0.79-7/8/9） | 企业策略新增多，但 PR 停滞，认证回归问题影响基础路径 |
| Kimi Code CLI | 3 | 2 | 0 | 体量小但反应快：StrReplaceFile 编码损坏 bug 3 天内产生完整修复链路 |
| OpenCode | 10 | 10 | 1（v1.18.15） | 付费服务（Go）稳定性问题集中，TUI 与 Web/Desktop 端并行迭代 |
| Pi | 10 | 10 | 1（v0.84.1） | 长会话自动压缩失效是最大痛点（15 👍），本地/第三方模型接入活跃 |
| Qwen Code | 10 | 10 | 1（v0.21.7-nightly） | Windows 体验问题集中，ACP 协议增强与 Web Shell 创新是亮点 |
| CodeWhale（原 DeepSeek-TUI） | 10 | 10+ | 0（v0.9.4 发布前夜） | 4 个 CI 阻塞器未清，子代理系统与架构重构为当前主线 |
| Grok Build | 0 | 0 | 0 | 无活动 |

> 注：Issues/PR 为各项目日报中精选的当日高价值条目，并非全部增量；实际总量更高。

## 3. 共同关注的功能方向

| 功能方向 | 涉及工具与具体诉求 |
|---------|-------------------|
| **会话/上下文持久化** | Claude Code #13354 会话上限后续接、#51791 会话重命名；Codex #34663 resume 全量渲染优化；Kimi Code #1283 跨会话记忆系统（21 评论）；CodeWhale #2492 跨会话记忆缺失；Pi #6879 自动压缩触发机制失效（15 👍）；Copilot CLI #4397 resume 后模型选择丢失 |
| **Windows 平台支持** | Claude Code #84072 流式 ECONNRESET；Codex #10090 沙箱全部命令失败、#37043 Computer Use 不可用、#35481 Diff 报错；Copilot CLI #3622 剪贴板静默失败、#1409 OneDrive 路径权限循环；Qwen Code #8615 桌面版启动崩溃、#8625 中文输入模糊；OpenCode #6560 PowerShell 无法粘贴——Windows 已是全行业最大短板 |
| **MCP 稳定性与生命周期** | Codex #12491 1300+ 僵尸进程/37GB 泄漏、#26234 非 OpenAI Provider 无法调用 MCP 工具；Copilot CLI #4392 认证后重建 client 遗留孤儿进程；Qwen Code #8550 SSE 端点挂起；Gemini CLI 社区正关注 MCP 事件订阅的标准化 |
| **安全与权限治理** | Gemini CLI #28725 web-fetch SSRF（CVSS 8.6）；Kimi Code #2596 yolo 模式误删工作区外目录；Claude Code #84711 插件 YAML 注入与凭据覆盖；CodeWhale #5161 单 `&` 绕过 deny 规则；Copilot CLI 新增企业 `allow-auto-only` 策略 |
| **子代理/多 Agent 行为正确性** | Gemini CLI #22323 MAX_TURNS 中断误报成功、#21409 无限挂起；CodeWhale #1425 10 个子代理集体卡死、#5123 builder 角色实际只读；Pi #7053 并行工具批处理结果丢失 |
| **多模型/自定义模型接入** | Codex #37425 LiteLLM 流式回归、#26234 Bedrock/Ollama 兼容；OpenCode #24334 DeepSeek reasoning_content 报错、#40409 模型标识错误；Pi #7762 LM Studio 提供商、#7702 DeepSeek 兼容性；CodeWhale #5257 `model = "auto"` 自动分级选模型 |
| **插件生态精细化** | Claude Code #14920 禁用单个 skill、archive 插件源；Copilot CLI #1632 skills 子文件夹（23 👍）、#4401 skill 工具找不到 `~/.agents/skills`；OpenCode #38853 skills 分级组织 |

## 4. 差异化定位分析

**Claude Code** —— 功能最全面的企业级选手。self-hosted runner 和 archive 插件源指向大型团队治理需求，Issue 热度集中在会话和插件管理，适合已有标准化工作流的企业开发者。

**OpenAI Codex** —— 底层基础设施投入最重的官方工具。PR 密集在 gRPC 协议、MCP 事件订阅、连接恢复等技术深度方向，但 Windows 和桌面端体验拖后腿。适合拥抱 OpenAI 生态、需要原始能力的开发者。

**Gemini CLI** —— 以 Agent 行为质量和评估见长的 Google 系工具。子代理误报、挂起等正确性问题和 Auto Memory 安全是核心矛盾，正在构建组件级评估体系（#24353）。适合重视 agent 可靠性和长期自治运行的场景。

**GitHub Copilot CLI** —— 生态绑定极深（GitHub + VS Code），企业策略响应快（allow-auto-only、托管沙箱），但 PR 停滞且认证回归。适合已深度使用 GitHub 的企业用户。

**Kimi Code CLI** —— 体量小但社区反应快，数据完整性 bug 优先处理，同时缺记忆系统、yolo 模式安全边界模糊。适合中文开发者、轻量个人使用。

**OpenCode** —— 商业化探索最明显（Go 订阅 + 配额），新模型接入（DeepSeek）、Web/Desktop 端对齐是特色，付费服务稳定性问题突出。适合追求新模型和图形界面的用户。

**Pi** —— 多 provider 支持最广（LM Studio、Bedrock、Cursor 桥接），TUI 性能打磨深，架构由社区驱动。适合技术极客、多模型切换的重度本地用户。

**Qwen Code** —— 背靠通义生态，ACP 协议增强和 Web Shell（tmux 交互终端）有创新性，但 Windows 和终端兼容性大面积暴露。适合 Qwen 模型生态与中文用户。

**CodeWhale** —— Rust 实现的子代理编排实验场，主打"混合舰队"多模型角色编排，正经历架构收敛（死代码清理、运行时归并）和技术债偿还。适合关注多 Agent 架构的早期技术用户。

## 5. 社区热度与成熟度

**成熟稳定层（企业级功能完整、版本节奏稳定）**：Claude Code（#13354 达 191 👍，社区基数最大）、Copilot CLI、Codex。三者均已具备企业策略、远程环境、团队级治理能力，但 Codex 的 Windows 体验和 Copilot 的 PR 停滞是隐忧。

**快速迭代层（日更/多版本节奏，高频打磨）**：Gemini CLI（3 版本/日）、Qwen Code、OpenCode、Pi。Gemini 和 Qwen 在安全与国际化上动作频繁；OpenCode 和 Pi 在商业模式与 provider 广度上探索。

**蓄势突破层（重构或发布前夜）**：CodeWhale 正清 4 个 CI 阻塞器，v0.9.4 即将落地；Kimi Code 虽然只有 3 个精选 Issue，但 #2591 编码损坏 bug 的 2 个 PR 竞争性修复显示了极强的社区响应速度。

**待观察**：Grok Build 过去 24 小时无活动，尚未进入活跃期。

## 6. 值得关注的趋势信号

1. **"BYOM + MCP"组合是刚需，但兼容性在拖后腿**。Codex #26234 的 non-OpenAI Provider 无法调 MCP、Pi/OpenCode 的 DeepSeek 兼容性、Qwen 的 reasoning budget 冲突，都说明"自定义模型 + MCP 工具"是大量用户的实际工作流。工具方应建立公开的兼容性矩阵，而不是等用户踩坑。

2. **Windows 支持从"可选"变成"默认"**。近半数工具的热点 Issue 涉及 Windows（沙箱失败、剪贴板、中文输入、desktop 崩溃）。随着 AI CLI 进入企业桌⾯，Windows 的稳定性已经是产品能否规模化落地的硬指标。企业采购评估时，建议把 Windows 作为一等公民进行验证（即使团队多数人用 macOS）。

3. **静态安全正成为社区情绪的引爆点**。Kimi yolo 误删目录（工作区外 `rm -rf`）、Gemini SSRF、Claude 插件 YAML 注入、CodeWhale deny 规则绕过，单个安全事件就能严重损害用户信任。可预见的后续方向：破坏性命令二次确认、工作区外操作强制防护、以及更具可审计性的权限沙箱。

4. **长会话/记忆是所有工具的共同"最后一公里"**。不管是 Claude 的会话上限续接、Codex 的 resume 性能、Pi 的压缩失效触发，还是 Kimi/CodeWhale 记忆缺失，用户对"AI 助手能记住并延续工作上下文"的期待，已经超过了对单个功能的新鲜感。理想方案应是"本地状态持久化 + 跨会话上下文摘要/记忆 + 主动压缩"三者的系统化设计，而非头痛医头。

5. **插件生态正在经历从"数量"到"治理"的升级**。可移植 Agent 插件（Codex）、archive 分发（Claude）、技能子文件夹（Copilot/OpenCode）、单技能禁用（Claude）——都在向"如何安全分发、灵活组织、按需启停"演进。这意味着插件不仅是技术组件，未来会像 VSCode 扩展市场一样成为平台竞争力的一部分。

6. **Agent 可观测性与评估体系将成为下一阶段分水岭**。Gemini CLI 的组件级评估（#24353）、Codex 的 sandbox 元数据透出、Qwen 的 telemetry 渠道归类、CodeWhale 的 dogfood 发布阻断——头部项目都在构建"Agent 如何被度量"的基础设施。对开发者的启示是：在引入 AI CLI 时，优先选择那些能产出可审计日志、有明确模型行为评估机制的工具，否则难以在团队中做故障归因与安全追溯。

7. **多 Agent 编排正在从概念走向生产，但正确性仍是命门**。Gemini 子代理误报"GOAL 成功"、CodeWhale 子代理超时集体卡死、Pi 并行工具结果丢失——这类"假成功"比"明确失败"更危险。任何依赖多 Agent 分工的团队，都应验证工具在中断、超时、部分失败时的状态报告准确性。

---

*报告基于 2026-08-08 各项目 GitHub 社区日报数据整理，Issues/PR 数量为精选而非全量统计。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止 2026-08-08 | 来源: github.com/anthropics/skills**

---

## 一、热门 Skills 排行

**1. skill-creator 评估链路修复（#1298）** — 作者: MartinCajiao
修复 `run_eval.py` 恒定 0% recall 的核心缺陷：将评估产物安装为真实 skill，并修复 Windows 流读取、触发检测与并行 worker 问题。该 PR 直接回应 #556（12 条评论、7👍）等多起独立复现，是目前修复 skill 开发工具链最完整的方案。
**状态**: Open | **链接**: https://github.com/anthropics/skills/pull/1298

**2. document-typography 排版质检 Skill（#514）** — 作者: PGTBoos
针对 AI 生成文档的孤儿词换行、段落标题滞留页尾、编号错位等排版问题提供质检控制，覆盖所有 Claude 生成的文档，影响面广。
**状态**: Open | **链接**: https://github.com/anthropics/skills/pull/514

**3. PDF SKILL.md 大小写引用修复（#538）** — 作者: Lubrsy706
修复 8 处大小写不匹配（`REFERENCE.md`→`reference.md`、`FORMS.md`→`forms.md`），在大小写敏感文件系统上会导致 skill 加载失败。
**状态**: Open | **链接**: https://github.com/anthropics/skills/pull/538

**4. ODT 文档 Skill（#486）** — 作者: GitHubNewbie0
支持 OpenDocument（.odt/.ods）的创建、模板填充、读取与 ODT→HTML 转换，补齐文档格式生态中微软 Office 之外的替代方案。
**状态**: Open | **链接**: https://github.com/anthropics/skills/pull/486

**5. frontend-design 技能可执行性改进（#210）** — 作者: justinwetch
重构 frontend-design skill，确保每条指令都能在单次对话内被 Claude 实际执行，提升指引的具体性与内部一致性。
**状态**: Open | **链接**: https://github.com/anthropics/skills/pull/210

**6. 质量与安全分析元技能（#83）** — 作者: eovidiu
新增 `skill-quality-analyzer`（结构/文档/示例等五维评估）与 `skill-security-analyzer`（安全分析）两个元技能，是社区对"skill 工程化"需求的直接体现。
**状态**: Open | **链接**: https://github.com/anthropics/skills/pull/83

**7. DOCX 修订模式 w:id 冲突修复（#541）** — 作者: Lubrsy706
修复带书签文档添加修订时因 OOXML `w:id` 共享 ID 空间冲突导致的文档损坏问题，是 docx 技能的重要正确性补丁。
**状态**: Open | **链接**: https://github.com/anthropics/skills/pull/541

**8. self-audit 推理质量门禁 Skill（#1367）** — 作者: YuhaoLin2005
先做机械化的输出文件存在性验证，再按损害严重度优先级进行四维推理审计，与提案 #1385 同一脉络。
**状态**: Open | **链接**: https://github.com/anthropics/skills/pull/1367

---

## 二、社区需求趋势

1. **安全与信任边界（最热 · 43 条评论）** — #492：社区技能在 `anthropic/` 命名空间下分发，造成信任边界滥用，用户可能向伪装官方的技能授予高级权限。
   https://github.com/anthropics/skills/issues/492

2. **组织级共享与协作（16 条评论 · 8👍）** — #228：用户期望在 Claude.ai 内直接共享技能库，而非手动下载 `.skill` 文件再经 Slack/Teams 分发。
   https://github.com/anthropics/skills/issues/228

3. **skill-creator 工具链可靠性（12 条评论 · 7👍）** — #556 / #1169：`claude -p` 评估中 0% 触发率导致描述优化循环失效，社区大量复现并推动多 PR 修复。
   https://github.com/anthropics/skills/issues/556

4. **上下文窗口效率** — #1487：`claude-api` skill 单次调用注入约 156k tokens，直接耗尽上下文，反映社区对技能体积的敏感性。
   https://github.com/anthropics/skills/issues/1487

5. **新技能方向（agent 自我管理上升期）** — compact-memory 紧凑符号化 agent 状态（#1329）、agent-governance 安全治理模式（#412）、Reasoning Quality Gate 流水线（#1385）。

6. **平台与标准集成** — Bedrock 支持（#29）、Skills-as-MCP（#16）显示用户希望技能融入更广泛工具生态。

---

## 三、高潜力待合并 Skills

以下 PR 评论活跃、均为 Open 状态，近期落地概率较高：

| Skill | 定位 | PR 链接 |
|---|---|---|
| document-typography | 文档排版质检 | https://github.com/anthropics/skills/pull/514 |
| ODT 文档能力 | OpenDocument 读写/模板/转换 | https://github.com/anthropics/skills/pull/486 |
| testing-patterns | 全栈测试模式（Trophy 模型、单元/组件/E2E） | https://github.com/anthropics/skills/pull/723 |
| pyxel 游戏开发 | 基于 pyxel-mcp 的像素风游戏迭代工作流 | https://github.com/anthropics/skills/pull/525 |
| color-expert | 色彩命名系统与色彩空间选型 | https://github.com/anthropics/skills/pull/1302 |
| self-audit | 交付前机械化验证 + 推理质量门禁 | https://github.com/anthropics/skills/pull/1367 |
| plan-file-hygiene | 规划产物生命周期管理 | https://github.com/anthropics/skills/pull/1479 |
| quality/security analyzer | 元技能：skill 质量与安全评估 | https://github.com/anthropics/skills/pull/83 |

---

## 四、Skills 生态洞察

> 社区当前最集中的诉求并非某个具体业务技能，而是 **"造技能的工具"（skill-creator 评估链路 0% recall、Windows 兼容、触发检测失真）与"传技能的渠道"（命名空间信任、组织级共享）** ——即 skill 工程化基础设施的可靠性与分发安全；专业向新技能（测试、排版、色彩、文档格式）作为第二梯队持续涌入。

---

# Claude Code 社区动态日报（2026-08-08）

## 今日速览

- **v2.1.224 发布**：引入 `claude self-hosted-runner`，让团队可将自有机器/容器接入 Claude Code Web、移动端、桌面端会话；同时新增 `archive` 插件源，支持通过 HTTPS 从 zip 包直接安装插件。
- **会话与插件管理需求持续高热**：#13354「会话上限后继续」累计 191 👍 / 73 评论，#14920「禁用单个插件技能」获 83 👍，成为社区最关注的两个功能方向。
- **多平台稳定性问题集中暴露**：Fable 5 文本渲染异常、Windows 流式响应 ECONNRESET、iOS Remote Control 会话崩溃等均在过去 24 小时内被开发者反馈。

## 版本发布

### v2.1.224
- **新增 self-hosted environments**：`claude self-hosted-runner` 可将自有机器或容器变成 Claude Code Web、移动端、桌面端会话的运行场所，面向 Team 和 Enterprise 套餐。
- **新增 `archive` 插件源**：无需 git 即可从 HTTPS zip 包安装插件，丰富了插件分发方式。

## 社区热点 Issues（10 个）

### #13354 会话上限后继续工作（OPEN）
- 作者：massyn | 评论 73 | 👍 191
- 核心诉求：达到会话限制后，希望能在当前上下文基础上继续，而不是被迫开新会话。
- 链接：[Issue #13354](https://github.com/anthropics/claude-code/issues/13354)

### #14920 禁用单个插件技能（OPEN）
- 作者：petergeneric | 评论 14 | 👍 83
- 核心诉求：希望按需关闭插件中的某个 skill（如只保留 `:commit`），而非整包启用/禁用。
- 链接：[Issue #14920](https://github.com/anthropics/claude-code/issues/14920)

### #70165 iOS 远程控制会话硬崩溃（CLOSED）
- 作者：atrusniak-ruz | 评论 10
- 内容：iOS 1.260618.0 打开 Remote Control 会话时，主线程 Swift KeyPath 元数据栈溢出，应用直接崩溃；已被标记为回归并关闭。
- 链接：[Issue #70165](https://github.com/anthropics/claude-code/issues/70165)

### #50884 清理过时远程环境（OPEN）
- 作者：wolfomania | 评论 7 | 👍 26
- 核心诉求：claude.ai/code 环境列表中的失效/僵死 Remote Control 环境无法删除，希望提供手动清除入口。
- 链接：[Issue #50884](https://github.com/anthropics/claude-code/issues/50884)

### #51791 会话创建后可重命名（CLOSED）
- 作者：miyagawatomoya-dev | 评论 7
- 内容：当前会话标题创建后无法修改，请求支持重命名。
- 链接：[Issue #51791](https://github.com/anthropics/claude-code/issues/51791)

### #81853 Fable 5 文本+工具调用时文本不显示（OPEN）
- 作者：rhv-resideo | 评论 5
- 内容：使用 `claude-fable-5` 时，同时包含文本和工具调用的响应在终端只渲染工具调用，文本部分完全不可见（转录中仍在）；Opus 4.8 无此问题。
- 链接：[Issue #81853](https://github.com/anthropics/claude-code/issues/81853)

### #72495 提示建议被静默抑制（OPEN）
- 作者：inth3shadows | 评论 4
- 内容：客户端派生速率限制状态为 `allowed_warning` 时，Prompt suggestions 被一处严格相等门禁静默压制，作者已在二进制中定位到相关逻辑并录制了复现过程。
- 链接：[Issue #72495](https://github.com/anthropics/claude-code/issues/72495)

### #84689 CVP 组织仍被 cyber safeguards 阻断（OPEN）
- 作者：RenzyXSec | 评论 4
- 内容：已通过 CVP 批准的 org 仍被安全策略拦截，org ID 匹配无误，但申诉表单无字段可填写。
- 链接：[Issue #84689](https://github.com/anthropics/claude-code/issues/84689)

### #84945 本地对等消息 socket 绑定失败（OPEN）
- 作者：sfainbraun-KC3YDL | 评论 3
- 内容：macOS 上两个完全相同条件的会话中，仅一个能绑定 `/tmp/cc-socks` 对等 socket，导致单向跨会话消息不可达。
- 链接：[Issue #84945](https://github.com/anthropics/claude-code/issues/84945)

### #84072 Windows 流式 ECONNRESET（OPEN）
- 作者：malikjakexgroup | 评论 3
- 内容：Windows 上 Claude Code 流式响应在收到首个 chunk 后即发生 ECONNRESET，VS Code 扩展与终端均可复现。
- 链接：[Issue #84072](https://github.com/anthropics/claude-code/issues/84072)

## 重要 PR 进展（共 3 条）

### #84854 修复过时 hooks 文档链接（OPEN）
- 作者：cassiacarollinee-ship-it
- 内容：修正 `bash_command_validator_example.py` 中指向旧 docs 域名的钩子文档链接，与仓库中其余 46 处（含 CHANGELOG.md）统一到 `code.claude.com/docs`。
- 链接：[PR #84854](https://github.com/anthropics/claude-code/pull/84854)

### #84747 hookify 规则评估范围与安全文件读取修复（OPEN）
- 作者：alifakbxr
- 内容：修复 `load_rules()` 在 `event` 为 `None` 时绕过事件过滤器的问题，确保 `Read`/`Browser` 等未映射工具只触发 `all` 作用域规则，同时加固文件读取逻辑。
- 链接：[PR #84747](https://github.com/anthropics/claude-code/pull/84747)

### #84711 插件脚本 YAML 注入与符号链接凭据覆盖修复（OPEN）
- 作者：alifakbxr
- 内容：修复 #76580，增加防御性检查，防止插件脚本中的 YAML 注入以及通过符号链接覆盖凭据文件的风险。
- 链接：[PR #84711](https://github.com/anthropics/claude-code/pull/84711)

## 功能需求趋势

- **会话生命周期管理**：#13354（会话上限继续）、#51791（会话重命名）表明用户希望更灵活地控制会话的续接与组织；会话标题管理、上下文延续是高频诉求。
- **远程/自托管环境**：#50884（清理陈旧远程环境）配合 v2.1.224 的 `self-hosted-runner`，说明远程/混合工作流正从个人试用走向团队级治理，环境列表的「卫生管理」需求开始出现。
- **插件系统演进**：#14920（禁用单个 skill）与 `archive` 插件源指向插件治理精细化：按需启用、灵活分发已成为插件生态的下一步方向。
- **多平台稳定性与兼容性**：iOS 崩溃（#70165）、Windows ECONNRESET（#84072）、Linux KVM 100% CPU（#77208）等跨平台问题密集出现，反映 Claude Code 的客户端覆盖面在快速扩大，但稳定性和硬件兼容性仍需补强。
- **新模型适配**：Fable 5 的文本渲染异常（#81853）及 Fable 管线报告（#79247）表明，新模型的工具调用行为正在成为社区验证与反馈的集中区域。

## 开发者关注点

- **网络与流式传输可靠性**：Windows API 流在首个 chunk 后即 reset（#84072）直接阻断日常开发，是当前最影响体验的网络类问题。
- **后台代理权限与卡死**：Workflow/后台代理在权限提示无人响应时无限阻塞，无超时或看门狗机制（#78487），在无人值守场景下破坏性极大。
- **权限规则与安全边界**：WebSearch 允许规则被忽略（#84956）、插件 YAML 注入/凭据覆盖（#84711）、worktree 隔离守卫误伤非 git 命令（#84720）显示权限系统仍在「收紧与误伤」之间磨合。
- **文档准确性与可发现性**：ScheduleWakeup TTL 描述错误（#74149）、插件自动安装未文档化（#84939）、过时文档链接（#84854）等小问题频繁出现，正在消耗用户对官方文档的信任。
- **本地多会话一致性**：相同条件下对等 socket 单向不可达（#84945）、Remote Control 陈旧环境 404（#77372）显示多会话/多进程间的运行时一致性还需要更多打磨。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-08-08）

## 1. 今日速览

过去 24 小时，Codex 正式发布 `rust-v0.147.0`，带来可移植 Agent 插件安装、跨目录插件搜索以及会话持久化分组/增量浏览能力；同时 `0.148.0-alpha.1/2/4` 也在密集迭代中。社区侧，MCP 子进程泄漏（#12491）与非 OpenAI Provider 无法调用 MCP 工具（#26234）仍是高热度问题，Windows 沙箱/Computer Use 相关 Bug 持续发酵。PR 侧则集中在 code-mode gRPC 协议、MCP 事件订阅、沙箱元数据透出和响应流稳定性等基础设施改进上。

## 2. 版本发布

### rust-v0.147.0
- **可移植 Agent 插件**：支持安装 portable Agent Plugins，并可在 local、personal、workspace、remote 多个插件目录中统一搜索插件。
- **会话管理增强**：支持将对话组织为持久化、手动排序的分区；长对话 transcript 可以增量加载浏览，改善超长会话体验。
- 主要关联 PR：#36544、#36409、#36919、#36796、#35722、#36007、#36380、#36948。

### rust-v0.148.0-alpha.1 / alpha.2 / alpha.4
- 三个 alpha 版本均为发布占位，未附详细变更说明。可以判断 0.148 系列已进入高频迭代阶段，建议关注后续 alpha 说明。

## 3. 社区热点 Issues

以下挑选过去 24 小时更新中讨论热度/影响面最高的 10 个 Issue：

### 1. [CLOSED] MCP 子进程在任务完成后未回收，产生 1300+ 僵尸进程、37GB 内存泄漏
- 链接：[openai/codex #12491](https://github.com/openai/codex/issues/12491)
- 标签：`bug`、`mcp`、`app`、`plugins`
- 为什么重要：GUI 包装器下 MCP 子进程未被正确 reap，导致极端资源泄漏。虽然 Issue 已关闭，但 38 条评论说明问题影响范围很大，值得后续验证修复效果。

### 2. [OPEN] 非 OpenAI Responses API Provider 下 MCP 工具不可调用
- 链接：[openai/codex #26234](https://github.com/openai/codex/issues/26234)
- 标签：`bug`、`mcp`、`CLI`、`custom-model`、`aws-bedrock`
- 为什么重要：Ollama、LM Studio、OpenRouter、AWS Bedrock 等用户无法让 MCP 工具被模型调用，根源是工具被封装进私有 `{"type":"namespace"}` 结构。32 条评论、41 👍，是当前 MCP 生态最大兼容性瓶颈之一。

### 3. [CLOSED] VS Code 中 Codex Diff 显示 “Oops, an error has occurred”
- 链接：[openai/codex #35481](https://github.com/openai/codex/issues/35481)
- 标签：`bug`、`code-review`、`windows-os`、`extension`
- 为什么重要：Windows + VS Code 用户无法正常查看 Codex Diff，直接影响代码评审流程。26 条评论、54 👍，是近期 IDE 扩展方向关注度最高的问题。

### 4. [OPEN] 允许任意项目直接设置 `trust_level = "trusted"`
- 链接：[openai/codex #14599](https://github.com/openai/codex/issues/14599)
- 标签：`enhancement`、`TUI`
- 为什么重要：用户希望避免每次打开项目都手动审批。16 条评论、57 👍，说明信任/权限流程的摩擦已经成为一个高优先级体验需求。

### 5. [OPEN] `elevated_windows_sandbox` 导致所有 agent 命令失败并输出 `(no output)`
- 链接：[openai/codex #10090](https://github.com/openai/codex/issues/10090)
- 标签：`bug`、`windows-os`、`sandbox`
- 为什么重要：Windows 沙箱一旦启用 elevated 模式，所有命令直接失效，日志显示 `CreateProcessAsUserW failed: 5`。24 条评论，Windows 企业/团队用户受影响严重。

### 6. [OPEN] Windows Computer Use 在 `EnumWindows` 报错 `0x80070003`
- 链接：[openai/codex #37043](https://github.com/openai/codex/issues/37043)
- 标签：`bug`、`windows-os`、`app`、`computer-use`
- 为什么重要：Computer Use helper 能启动，但无法枚举窗口，重启后依旧失败。17 条评论，说明 Windows Computer Use 基础路径仍不可靠。

### 7. [OPEN] Ubuntu 24.04 下 apply_patch/managed sandbox 因 Bubblewrap 配置失败
- 链接：[openai/codex #29908](https://github.com/openai/codex/issues/29908)
- 标签：`bug`、`sandbox`、`CLI`、`tool-calls`
- 为什么重要：Linux 用户也遇到沙箱不可用问题，涉及 `loopback`/`userns`。14 条评论，跨平台沙箱稳定性需要统一关注。

### 8. [OPEN] Resume 时渲染完整线程历史，而不是只引导最新回合
- 链接：[openai/codex #34663](https://github.com/openai/codex/issues/34663)
- 标签：`enhancement`、`windows-os`、`TUI`、`CLI`、`performance`
- 为什么重要：恢复长会话时会全量渲染历史，导致启动延迟和资源占用。用户期望只 bootstrapping 最新 turn。7 条评论，5 👍，是会话性能优化的重要方向。

### 9. [OPEN] v0.147.0 在 LiteLLM Provider 下流式请求持续失败
- 链接：[openai/codex #37425](https://github.com/openai/codex/issues/37425)
- 标签：`bug`、`CLI`、`custom-model`、`app`、`connectivity`
- 为什么重要：这是刚刚发布的 v0.147.0 的回归问题，影响通过 LiteLLM 接入自定义模型的用户。4 条评论、3 👍，需要快速修复。

### 10. [OPEN] 打开 ChatGPT 桌面应用即静默消耗 Codex 周限额
- 链接：[openai/codex #37445](https://github.com/openai/codex/issues/37445)
- 标签：`bug`、`rate-limits`、`app`
- 为什么重要：用户不做任何输入，仅打开桌面 App，后台建议活动就固定消耗 6% 的周限额。4 条评论，直接关系配额透明度和用户信任，值得重点关注。

## 4. 重要 PR 进展

以下 10 个 PR 在过去 24 小时更新/关闭，代表 Codex 近期在底层基础设施上的主要变化：

### 1. [CLOSED] Guardian 评审会话复用父级 compaction
- 链接：[openai/codex #37513](https://github.com/openai/codex/pull/37513)
- 核心内容：新增 `guardian_reuse_parent_compaction` 特性，在父历史重写后重启 Guardian 评审会话，并使用最新加密 compaction 作为种子，减少重复评审开销。

### 2. [CLOSED] 托管模型强制自动评审
- 链接：[openai/codex #37511](https://github.com/openai/codex/pull/37511)
- 核心内容：增加 `auto_review.required_on_models` 托管配置，将指定模型强制设为 `on-request` 审批模式并自动评审，面向团队治理场景。

### 3. [CLOSED] 定义 code-mode host gRPC 协议
- 链接：[openai/codex #37510](https://github.com/openai/codex/pull/37510)
- 核心内容：新增 `codex.code_mode.v1` protobuf API，覆盖 code-mode 会话、执行、等待、工具回调和内容结果管理，并生成 Rust tonic 绑定。

### 4. [CLOSED] 在响应元数据中包含 sandbox 模式
- 链接：[openai/codex #37507](https://github.com/openai/codex/pull/37507)
- 核心内容：在 turn metadata 中新增 `sandbox_mode`，暴露实际生效的权限 profile，同时保留字段防止客户端覆盖。

### 5. [CLOSED] code-mode WebSocket 禁用 Nagle 算法
- 链接：[openai/codex #37504](https://github.com/openai/codex/pull/37504)
- 核心内容：为远程会话 WebSocket 启用 `TCP_NODELAY`，降低小包延迟，改善 code-mode 实时交互体验。

### 6. [CLOSED] 进程终止时保留 child waiter
- 链接：[openai/codex #37498](https://github.com/openai/codex/pull/37498)
- 核心内容：终止/drop PTY 子进程时不再 abort child waiter，而是 detach，避免子进程未被回收以及退出状态丢失。

### 7. [CLOSED] 限制诊断日志中的 payload trace
- 链接：[openai/codex #37497](https://github.com/openai/codex/pull/37497)
- 核心内容：将 HTTP、SSE、WebSocket 的高频 payload 诊断降到 `DEBUG` 级别，防止 SQLite 日志库和诊断环形缓冲被请求/响应数据打爆。

### 8. [CLOSED] 增加 MCP 事件发现与订阅
- 链接：[openai/codex #37494](https://github.com/openai/codex/pull/37494)
- 核心内容：通过 `McpResourceClient::list_events` 暴露 Plugin Runtime 事件定义，并新增可取消的 `events/stream` 订阅，强化 MCP 生命周期管理。

### 9. [CLOSED] turn metadata 中包含工具命名空间清单
- 链接：[openai/codex #37492](https://github.com/openai/codex/pull/37492)
- 核心内容：增加 opt-in 的 `tool_namespaces_info` 元数据，描述每个模型可见函数的 namespace、直连/延迟暴露状态及 Code Mode 相关信息。

### 10. [CLOSED] 连接失败时保持响应流存活
- 链接：[openai/codex #37485](https://github.com/openai/codex/pull/37485)
- 核心内容：区分 HTTP 连接失败和其他网络错误，对采样请求按 5～60 秒指数退避自动重连，并显示 `Reconnecting...` 状态。

## 5. 功能需求趋势

从全部 Issue 中可以提炼出以下几个社区最关注的功能方向：

- **自定义模型与 MCP 互操作**：大量用户在 Ollama、LM Studio、OpenRouter、AWS Bedrock 等非 OpenAI 端点下使用 Codex，但 MCP 工具不可调用（#26234）、LiteLLM 流式回归（#37425）、MCP OAuth scope 错误（#35253）都说明“Bring Your Own Model + MCP”是刚需。
- **Windows 平台支持质量**：Windows 专属问题占比极高，包括沙箱失败（#10090）、Computer Use 不可用（#37043、#37415、#37484）、apply_patch 失败（#13965、#14211）、App 内 Project/Work 会话限制（#34499）。Windows 用户体验仍是最明显的短板。
- **长期运行资源管控**：MCP 子进程泄漏（#12491）、历史 subagent 线程重复派生 MCP/node_repl 进程栈（#37453）、macOS 启动 OOM（#36523）表明桌面端内存和进程生命周期管理已成为用户痛点。
- **权限/信任流简化**：#14599 获 57 👍，要求任意项目直接 trusted；#21839 反馈已授权会话仍反复要求审批。社区希望 Codex 在安全与效率之间提供更细粒度的信任配置。
- **配额与后台行为透明**：#37445、#36082 显示用户对模型支持、usage limit、后台建议消耗额度非常敏感，希望应用提供明确的配额消耗说明和关闭后台活动的选项。

## 6. 开发者关注点

- **MCP 进程生命周期**：多个 Issue 指向 MCP 子进程不被回收、重复启动、连接异常关闭等问题，开发者希望 Codex 对 MCP server 有更严格的资源管理和可观测性。
- **沙箱跨平台可靠性**：Windows 的 `CreateProcessAsUserW failed: 5`、Ubuntu 的 Bubblewrap/userns 失败，都让 agent 核心工具链不可用。沙箱应当是稳定的基础能力，而非按平台“开盲盒”。
- **自定义 Provider 兼容性**：非 OpenAI 端点在流式请求、MCP 工具命名空间、OAuth scope 上频繁踩坑，开发者需要清晰的兼容性矩阵和错误提示。
- **长会话/大上下文的性能**：Resume 全量渲染、图片密集 subagent 拖垮桌面端、历史线程重复派生进程栈等问题，集中在会话恢复与增量加载上。
- **后台活动与配额消耗**：用户明确反对在无操作时被静默扣除额度，尤其是桌面 App 的 ambient suggestions 和 prefetch 行为，需要强制可见的开关与审计。
- **IDE/桌面端稳定性**：Codex Diff 在 VS Code 上报错、macOS 启动 OOM、Windows 桌面崩溃等问题直接影响日常使用，修复优先级应高于新功能开发。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-08-08

## 今日速览

今日发布 3 个版本（稳定版 v0.54.4、预览版 v0.55.0-preview.2、夜间版 v0.56.0-nightly），均为补丁与 Changelog 更新，无重大功能变更。社区讨论焦点集中在子代理行为异常（误报成功、挂起、不主动使用 skills）与 Auto Memory 系统的安全可靠性上；PR 方面安全修复成为主线，包括 web-fetch SSRF 高危漏洞修复与 Node 20 EOL 升级。

## 版本发布

- **v0.54.4**：[Release Notes](https://github.com/google-gemini/gemini-cli/releases/tag/v0.54.4) — 稳定版补丁，cherry-pick 修复至 v0.54.0 分支，版本号提升至 0.54.4。
- **v0.55.0-preview.2**：[Release Notes](https://github.com/google-gemini/gemini-cli/releases/tag/v0.55.0-preview.2) — 预览版补丁，cherry-pick `2139b12` 至 v0.55.0-preview.1 分支生成。
- **v0.56.0-nightly.20260807.gd5c9a97dc**：[Release Notes](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260807.gd5c9a97dc) — 夜间构建，同步 v0.55.0-preview.1 与 v0.54 的 Changelog。

## 社区热点 Issues

1. **子代理 MAX_TURNS 中断被误报为 GOAL 成功** — [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)（P1，12 评论）  
   `codebase_investigator` 在未完成任何分析便达到最大轮数时，仍返回 `status: "success"` / `Termination Reason: "GOAL"`，掩盖了实际中断。这是当前社区最关注的 agent 正确性问题，直接影响用户对任务结果的信任。

2. **通用代理（Generalist agent）无限挂起** — [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)（P1，8 评论，8👍）  
   创建文件夹等简单操作即可导致 agent 永久挂起，用户最长等待 1 小时后只能手动取消；明确禁止使用子代理后可规避，问题疑似出在代理调度层。

3. **零依赖 OS 沙箱与执行后意图路由** — [#19873](https://github.com/google-gemini/gemini-cli/issues/19873)（P2，8 评论）  
   提议发挥 Gemini 3 模型的原生 bash 能力（`grep`/`sed`/`awk`），通过零依赖沙箱安全地让模型直接操作 POSIX 工具链，减少封装工具带来的开销。

4. **组件级评估体系（Component Level Evaluations）** — [#24353](https://github.com/google-gemini/gemini-cli/issues/24353)（P1，7 评论）  
   在已有 76 个行为评估测试的基础上，针对 6 个受支持的 Gemini 模型构建更细粒度的组件级评估框架，是 agent 质量保障的关键基础设施。

5. **AST 感知文件读写/搜索/代码地图价值评估** — [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)（P2，7 评论）  
   Epic 议题，探索 AST 感知工具能否更精确地读取方法边界、减少因错位读取产生的 token 噪声并优化代码库导航，社区对大型代码库处理能力提升呼声较高。

6. **Gemini 不会主动使用 skills 和子代理** — [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)（P2，6 评论）  
   用户反馈模型基本不主动调用自定义 skills 与子代理，即使已有 "gradle"/"git" 等明确描述，必须显式指示才执行，影响自定义工作流的实际落地。

7. **Auto Memory 对低信号会话无限重试** — [#26522](https://github.com/google-gemini/gemini-cli/issues/26522)（P2，5 评论）  
   后台提取 agent 跳过低信号会话后，该会话仍被标记为未处理，会反复出现在索引中并被无限重试，造成资源浪费。

8. **Auto Memory 缺少确定性脱敏、日志过多** — [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)（P2，安全，4 评论）  
   当前提取 prompt 在内容已进入模型上下文后才指示脱敏，存在密钥泄露风险；服务还可能记录已有 skill 内容，需增加确定性脱敏并减少日志输出。

9. **Shell 命令执行后卡在 "Waiting input"** — [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)（P1，4 评论，3👍）  
   简单 CLI 命令执行完毕后界面仍显示命令激活并等待用户输入，属高频复现的交互卡死问题，严重干扰日常使用。

10. **浏览器子代理在 Wayland 下失败** — [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)（P1，4 评论）  
    Wayland 环境下 browser subagent 直接失败，报 `Termination Reason: GOAL` 却未实际完成任务，与 #22323 同属"误报成功"类问题。

## 重要 PR 进展

1. **新增 Gemini 3.6 Flash 与 3.5 Flash-Lite 模型配置** — [#28673](https://github.com/google-gemini/gemini-cli/pull/28673)（size/l，OPEN）  
   在 core 包中加入新模型的基础定义、能力标记（`thinking`/`multimodalToolUse`）、别名与 Code Execution 相关配置，是社区最期待的新模型适配。

2. **修复模型容量耗尽误报与配额查询映射** — [#28730](https://github.com/google-gemini/gemini-cli/pull/28730)（size/m，OPEN）  
   消除 CLI 中错误的 capacity exhaustion 提示，修正 core 包模型配额查询映射，并保证瞬时容量高峰时保留 "Keep trying" 选项。

3. **修复设置占位符加载顺序** — [#28597](https://github.com/google-gemini/gemini-cli/pull/28597)（P2，size/l，OPEN）  
   解决系统/用户/工作区设置文件解析、`process.env` 展开与本地 `.env` 加载之间的竞态条件，此前可能导致占位符展开为错误值。

4. **修复 web-fetch 的 SSRF 漏洞（CVSS 8.6）** — [#28725](https://github.com/google-gemini/gemini-cli/pull/28725)（P2，size/m，OPEN）  
   修复攻击者通过自定义域名指向私网/回环 IP（如 `169.254.169.254`）绕过 DNS 防护的 SSRF 问题，属于高危安全修复，关联 issue #28555。

5. **沙箱 Dockerfile 升级至 node:22-slim** — [#28726](https://github.com/google-gemini/gemini-cli/pull/28726)（P1，安全，OPEN）  
   将 Sandbox 及 caretaker-agent 全部 Cloud Run 镜像从 `node:20-slim` 升级至 `node:22-slim`，Node 20 已 EOL 不再接收安全修复，关联 issue #28584。

6. **修复 IDE 连接中吞掉的目录不匹配错误** — [#28729](https://github.com/google-gemini/gemini-cli/pull/28729)（size/m，OPEN）  
   在 Cider 或 VS Code fork/远程工作区使用虚拟/FUSE 路径时，候选端口文件存在但工作区路径不匹配的错误被静默吞掉，导致 IDE 扩展连接失败，本次修复不再吞掉该错误。

7. **@ 处理时跳过 diff hunk 标记** — [#28581](https://github.com/google-gemini/gemini-cli/pull/28581)（P2，size/m，OPEN）  
   防止 unified/combined diff 的 hunk 标记（`@@ ... @@`）被误识别为 `@file` 引用，消除每次 hunk 两次递归全局 glob 搜索，避免大 diff 提示下 `minimatch`/`path-scurry` 堆内存增长。

8. **js-yaml 安全升级 4.1.1 → 4.3.1** — [#28728](https://github.com/google-gemini/gemini-cli/pull/28728)（dependencies，CLOSED）  
   Dependabot 自动 PR，包含安全修复，已合并关闭。

9. **Caretaker Agent 支持 issue 评论触发重新分诊** — [#28690](https://github.com/google-gemini/gemini-cli/pull/28690)（size/l，CLOSED）  
   新增 `issue_comment.created` 事件处理，维护者/报告人可通过 `@caretaker-agent` 或 `/caretaker triage` 对 `NEEDS_INFO` 状态 issue 触发重新分诊，并自动确认评论。

10. **Caretaker 分诊评估框架与 LLM-as-a-Judge** — [#28530](https://github.com/google-gemini/gemini-cli/pull/28530)（size/l，CLOSED）  
    添加分诊评估核心框架、LLM 评审规则与并行 Git Worktree 基准运行器，为 caretaker 分诊质量提供量化评测手段。

## 功能需求趋势

- **子代理行为正确性**：多个 P1 issue 指向子代理误报成功（#22323）、无限挂起（#21409）、不主动使用 skills（#21968）、绕过权限运行（#22093），agent 调度与状态上报的可靠性是当前最大痛点。
- **安全与隐私加固**：Auto Memory 确定性脱敏（#26525）、web-fetch SSRF 修复（#28725）、Node 20 EOL 升级（#28726）等显示官方与社区正在系统收紧安全防线。
- **AST 感知与代码理解**：#22745/#22746 系列 Epic 探索 AST 感知的文件读取、搜索与代码地图，目标是减少 token 消耗、提升大型代码库的导航效率。
- **评估基础设施建设**：#24353 组件级评估、#28530 分诊评估框架、#28369/#28344 本地报告与校验命令，项目正系统化构建质量评估与 CI 门禁能力。
- **新模型持续接入**：#28673 为 Gemini 3.6 Flash / 3.5 Flash-Lite 做准备，模型快速迭代仍是项目主线。
- **记忆系统可靠性**：#26522/#26523/#26516 一批 Auto Memory 相关 issue，聚焦重试风暴、无效 patch 处理与日志噪声，记忆功能正处于密集打磨期。

## 开发者关注点

- **误报与假成功**：子代理在中断/失败时仍报 `GOAL` 成功（#22323、#21983），严重破坏用户对任务状态的信任，是最高频吐槽点。
- **挂起与卡死**：通用代理挂起（#21409）、shell 命令执行后卡在 "Waiting input"（#25166）为高频交互问题，直接影响日常生产力。
- **配置项不生效**：`settings.json` 对 Browser Agent 的覆盖被忽略（#22267）、agents 目录 symlink 不被识别（#20079）、环境变量加载顺序竞态（#28597），配置链路稳定性亟待加强。
- **安全性担忧**：Auto Memory 在内容脱敏前即送入模型上下文（#26525）、web-fetch SSRF 风险（#28725）均获得社区高度关注。
- **资源消耗与规模瓶颈**：大 diff 下 glob 搜索导致堆内存增长（#28581）、工具数量超限触发 400 错误（#24246），开发者在大型工作区中期望更轻量、更智能的工具裁剪。
- **破坏性操作防护**：#22672 要求 agent 对 `git reset`/`--force` 等危险命令采取更保守策略，避免不可逆操作，并理解数据库等资源被修改的风险。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-08-08）

## 今日速览

过去 24 小时内，Copilot CLI 连续发布 v1.0.79-7、v1.0.79-8、v1.0.79-9 三个补丁版本，重点增强企业策略支持、沙箱配置体验和插件扩展能力。社区 Issue 更新活跃（共 35 条），热点集中在技能（skills）组织与发现、Windows 平台稳定性、MCP 进程生命周期和会话恢复行为上。过去 24 小时没有新的 PR 更新。

## 版本发布

- [v1.0.79-9](https://github.com/github/copilot-cli/releases/tag/v1.0.79-9)
  - 改进 `/sandbox` 配置对话框，现在会显示沙箱设置在 `settings.json` 中的存储位置。

- [v1.0.79-8](https://github.com/github/copilot-cli/releases/tag/v1.0.79-8)
  - 新增：支持企业 `allow-auto-only` 策略，使 `/allow-all auto` 可用，同时完整 allow-all 仍被阻止。
  - 新增：企业托管沙箱策略可强制代理 URL，但凭据继续由用户控制。
  - 改进：`/sandbox` 配置对话框分组展示 git、gh 等配置项。

- [v1.0.79-7](https://github.com/github/copilot-cli/releases/tag/v1.0.79-7)
  - 新增：Agent Plugins spec 插件现可在 `com.github.copilot/extensions/` 目录下发布扩展。
  - 新增：支持 `kimi-k3` 模型。
  - 新增：`--plan` 可与 `--mode autopilot` 组合，先规划后自动实施，无需等待审批。
  - 改进：优化用户多选提示交互。

## 社区热点 Issues

以下挑选了 10 个最值得关注的 Issue，涵盖高热度讨论与最新回归：

1. [auth 回归：copilot login 自动确认 keychain 的 y/N 提示](https://github.com/github/copilot-cli/issues/2494)  
   **11 条评论**。1.0.16 起，`copilot login` 在系统 Keychain 不可用时不再等待用户输入，而是自动"回车"，导致认证流程中断。身份验证是基础路径，影响面较大，社区要求优先修复。

2. [支持 skills 子文件夹，便于组织大量技能](https://github.com/github/copilot-cli/issues/1632)  
   **10 条评论，23 👍**。当前 skills 目录只能扁平存放，用户有 10+ 自定义技能后难以维护。该需求反映社区对自定义技能组织能力的强需求。

3. [Windows 上复制内容到剪贴板静默失败](https://github.com/github/copilot-cli/issues/3622)  
   **5 条评论，4 👍**。复制操作看似成功，但粘贴后仍是旧剪贴板内容。用户反馈 1.0.48 正常，疑似新版本回归，影响 Windows 日常使用。

4. [`/app` 命令默认不选中当前工作目录](https://github.com/github/copilot-cli/issues/4118)  
   **35 👍，评论少但赞同最高**。用户期望 `/app` 打开 GitHub Copilot 应用时直接使用当前目录，目前需要手动选择，不符合直觉。

5. [交互式 transcript 渲染为空白行，滚动/宽度变化后才能恢复](https://github.com/github/copilot-cli/issues/4311)  
   **3 条评论**。终端渲染层测行缓存失效后不触发重绘，导致底部内容空白，只能发送新消息或调整宽度恢复。影响交互式会话的可读性。

6. [add-dir 将连字符转成下划线，导致 OneDrive 目录权限循环](https://github.com/github/copilot-cli/issues/1409)  
   **2 条评论，4 👍**。Windows OneDrive 路径含连字符时，内部路径规范化与磁盘实际路径不匹配，导致权限提示反复出现。暴露了 Windows 路径兼容性问题。

7. [reasoning effort `medium` 不支持 `claude-haiku-4.5`](https://github.com/github/copilot-cli/issues/4345)  
   **2 条评论，4 👍**。当两个服务端 feature flag 同时开启时，子代理执行反复报错。说明模型能力参数与 CLI 配置之间存在兼容性断层。

8. [认证后重建 MCP client，遗留孤儿的 stdio MCP 子进程](https://github.com/github/copilot-cli/issues/4392)  
   **新 Issue**。启动时先拉起 MCP 服务，等待 GitHub 认证完成后重建整个 client，但第一代 stdio 子进程未被杀掉或回收，造成进程泄漏。对 MCP 工具链稳定性有隐患。

9. [skill 工具无法找到 `~/.agents/skills` 下的合法技能](https://github.com/github/copilot-cli/issues/4401)  
   **1.0.78 回归**。技能目录和 `SKILL.md` 均存在，但 `skill` 工具无法发现或调用，疑似 #2230 修复不完整。直接打击自定义技能生态。

10. [resume 会话后模型自动切回默认模型](https://github.com/github/copilot-cli/issues/4397)  
    **新 Issue**。用户通过 `--model=gpt-5.6-terr...` 等参数启动会话后，`/resume` 恢复会丢失模型选择，切回默认模型。影响依赖特定模型的重度工作流。

## 重要 PR 进展

过去 24 小时内没有 Pull Request 更新（共 0 条），暂无重点 PR 可展示。

## 功能需求趋势

从近期 Issue 中可以提炼出社区最关注的几个功能方向：

- **技能生态完善**：支持 skills 子文件夹、为自定义 agent 提供 `skill` 工具别名、修复 skill 工具无法发现技能目录的回归。说明自定义技能正在成为社区深度依赖的功能。
- **会话与模型状态管理**：resume 时保留模型选择、可持久化默认 workspace type、恢复会话列表快速删除、允许禁用/重映射 `Ctrl+C` 两次退出。
- **Windows 平台适配**：剪贴板失败、终端渲染空白、通知崩溃、PowerShell 下 `.claude/settings.local.json` hook 兼容性、代码页导致清屏等，Windows 已成为高频问题场景。
- **MCP 稳定性**：认证后 MCP client 重建导致孤儿进程、MCP 加载失败却显示成功、registry 策略拒绝带运行时 header 的配置。
- **企业策略与认证体验**：`allow-auto-only` 企业策略、代理 URL 强制、登录 keychain 自动输入、浏览器登录 URL 包装与回退。

## 开发者关注点

从社区反馈看，当前开发者的核心痛点集中在：

- **Windows 平台问题集中爆发**：剪贴板、终端渲染、原生通知崩溃、PowerShell hook 兼容等，说明 Copilot CLI 在 Windows 上的稳定性仍需加强。
- **身份验证流程回归**：keychain 自动确认、浏览器登录 URL 展示异常等问题直接阻断基础使用，优先级最高。
- **MCP 进程生命周期管理**：认证后重建 client 遗留子进程，长期运行会积累大量僵尸进程，影响工具链可靠性。
- **技能发现与组织不足**：技能目录扁平、`skill` 工具对 `~/.agents/skills` 失效、自定义 agent 缺少 skill 别名，都在限制高级用户自定义工作流。
- **路径与权限处理不统一**：`add-dir` 连字符转下划线导致 OneDrive 权限循环、`allowed_directories` 不加载，说明路径配置在 Windows 和特殊目录下容易出错。
- **模型兼容性与状态保留**：reasoning effort 不匹配、resume 后模型丢失，暴露出多模型配置下的状态管理短板。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 — 2026-08-08

## 今日速览

今日无新版本发布，社区聚焦于三个核心议题：**文件编辑工具 StrReplaceFile 在非 UTF-8 编码场景下的数据损坏 bug**（#2591）引发广泛关注，两个修复方案正在并行推进（#2594、#2595）；持久化记忆系统功能请求（#1283）讨论热度持续上升，已积累 21 条评论；此外，一条关于 agent 在 yolo 模式下误删用户目录的安全事故报告（#2596）值得警惕。

## 版本发布

过去 24 小时无新版本发布。

## 社区热点 Issues

> 说明：过去 24 小时内更新并处于开放状态的 Issue 共 3 条，全部列出如下。

### 1. #1283 [Feature Request] Memory System - Persistent context across sessions
- **作者**：CatKang | **创建**：2026-02-27 | **更新**：2026-08-08 | **评论**：21
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/1283
- **核心内容**：请求实现一套完整的记忆系统，让 Kimi Code CLI 在会话之间保留项目上下文、代码模式与用户偏好。提议同时支持自动记忆（AI 管理的笔记）与手动记忆（用户定义指令）。
- **为何重要**：跨会话记忆直接关系到 AI 编程助手的长期可用性。这一请求自今年 2 月提出以来持续活跃至今日，说明社区对"无状态会话"的不满已成为普遍诉求。
- **社区反应**：21 条评论展现出对该功能设计细节的深度讨论，社区成员对记忆的存储结构、手动/自动记忆的优先级、隐私边界等问题均有较高参与热情。

### 2. #2591 [Bug] StrReplaceFile corrupts undecodable bytes outside the edited region
- **作者**：shoemoney | **创建**：2026-08-05 | **更新**：2026-08-07 | **评论**：3
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2591
- **核心内容**：StrReplaceFile 工具在处理文件时使用 `errors="replace"` 解码整个文件，进行字符串编辑后回写。这意味着文件任何位置的非法 UTF-8 字节（即使远离编辑区）都会被替换为 U+FFFD（写入磁盘为 `EF BF BD`），导致文件被永久损坏。
- **为何重要**：这是涉及数据完整性的**严重 bug**。文件编码并非总是合法的 UTF-8，该问题会导致用户文件在不经意间被破坏。该 issue 创建仅两天即引发 3 条评论和 2 个修复 PR，可见社区反应迅速。
- **社区反应**：社区对该 bug 的修复方向存在分歧，主要有"保留原始字节并批量编辑"与"拒绝编辑非法 UTF-8 文件"两种思路，正在并行验证。

### 3. #2596 [Bug] Agent ran rm -rf on a pre-existing directory outside the workspace
- **作者**：iMaxTomas | **创建**：2026-08-07 | **更新**：2026-08-07 | **评论**：0
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2596
- **核心内容**：在 yolo（全自动）权限模式下，agent 被要求清理其创建的符号链接 `~/.pi/agent/sessions`，但该链接创建时已失败（目标位置存在真实目录）。agent 未察觉异常，实际执行了 `rm -rf` 并删除了 **workspace 之外** 的既有用户会话数据。
- **为何重要**：这属于**高危安全事件**。尽管 yolo 模式意味着用户知悉风险，但 agent 对操作失败的错误恢复能力不足，导致在非工作目录执行了破坏性命令，可能造成不可逆的本地数据丢失。
- **社区反应**：该 issue 刚刚提交，尚无评论。但此问题指向全自动模式下 agent 的工具调用安全边界与任务执行步骤回溯能力，预计将引发关于安全权限模型的重要讨论。

## 重要 PR 进展

> 说明：过去 24 小时内更新并处于开放状态的 PR 共 2 条，全部列出如下。

### 1. #2594 [Pull Request] fix(tools): preserve non-UTF-8 bytes in StrReplaceFile edits
- **作者**：686f6c61 | **创建**：2026-08-06 | **更新**：2026-08-07
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/2594
- **核心内容**：此 PR 针对 #2591，提出将编辑操作从字符串层面降为**原始缓冲区上的字节级子串替换**，避免对整个文件进行有损的 UTF-8 解码与重编码。修复后，编辑区域之外的非法 UTF-8 字节可被原样保留。
- **技术亮点**：直接定位到问题根源——将字符串编辑映射为字节序列操作，是当前两个方案中技术上更彻底的修复。若合入，将彻底消除 U+FFFD 损坏问题。

### 2. #2595 [Pull Request] fix(StrReplaceFile): refuse to edit files that are not valid UTF-8
- **作者**：shoemoney | **创建**：2026-08-06 | **更新**：2026-08-07
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/2595
- **核心内容**：同名作者给出的另一种修复思路：在编辑前校验文件是否为合法 UTF-8，不合法则**拒绝执行编辑并返回明确错误**，从源头避免数据损坏。
- **取舍分析**：该方案实现更简单、行为更可预测，但代价是牺牲了对非 UTF-8 文件的编辑能力，适合对编码安全性要求高于编辑便利性的场景。

## 功能需求趋势

基于当前活跃 Issues，社区最关注的三大功能方向如下：

| 排名 | 方向 | 代表 Issue | 关注度 |
|------|------|------------|--------|
| 1 | **跨会话持久上下文 / 记忆系统** | #1283 | 高（长期讨论，21 条评论） |
| 2 | **文件编辑的数据安全与编码鲁棒性** | #2591 + #2594 + #2595 | 高（突发严重 bug，3 天内产生完整修复链路） |
| 3 | **Agent 工具调用的安全边界与权限控制** | #2596 | 中（新晋事件，热度上升中） |

## 开发者关注点

- **高频需求：持久化上下文管理。** 开发者希望在多会话工作流中保留项目模式与个人偏好，避免每次启动 CLI 后"从零开始"。
- **数据安全是底线。** StrReplaceFile 的编码损坏问题暴露出工具链在真实文件系统上的脆弱性，开发者对"AI 修改不应破坏我原有数据"有着不可妥协的期望。建议核心工具操作在涉及非文本文件或非标准编码时引入更稳健的二进制级处理。
- **对全自动操作的高度不信任。** #2596 事件再次引发对 yolo 模式下异常恢复与操作范围的担忧。开发者建议在破坏性命令执行前增加二次确认或防护栏，尤其是在工作区之外操作时必须具备额外的安全保障。
- **开源社区响应速度快。** 从 #2591 报告到 #2594/#2595 修复 PR 出现仅约 1-2 天，表明开发者对关键 bug 的修复是"接力式"的高效协作。

---

*数据来源：https://github.com/MoonshotAI/kimi-cli· 数据采集时间：2026-08-08*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-08-08

## 今日速览
昨日发布补丁版本 v1.18.15，修复了消息排序与截断清理等问题。社区讨论热度集中在 **OpenCode Go 服务的 401 阻断、DeepSeek 模型标识错误、配额计费异常**等付费服务体验问题上；同时，TUI 渲染 Mermaid 图表的 PR 与原生后台子代理功能带来了值得关注的新能力。

## 版本发布
### [v1.18.15](https://github.com/anomalyco/opencode/releases/tag/v1.18.15)（2026-08-08）
**Core Bugfixes**
- 导入或遗留消息 ID 乱序时，时间顺序排列保持正确。
- Revert / Fork 操作改用真实消息时间线，而非按消息 ID 排序。
- 截断清理按文件时间戳更可靠地移除过期文件。

## 社区热点 Issues（10 个）

1. **[#38257] OpenCode Go 返回 401：chat/completions 被上游阻断，/v1/models 正常** — 45 条评论 / 11 👍
   Go 订阅用户在 7 月 22 日起所有模型调 `chat/completions` 均返回 `401 Request blocked by upstream provider`，疑似服务端问题，影响面广，是目前社区最关注的问题。
   https://github.com/anomalyco/opencode/issues/38257

2. **[#23153] [功能] 支持用加密货币支付 Go 订阅** — 37 👍 / 17 条评论
   呼声较高的付费方式扩展请求，社区对支付渠道多元化有明确需求。
   https://github.com/anomalyco/opencode/issues/23153

3. **[#5359] 部分模型无法读取图片（自 1.0.137 起回归）** — 18 条评论
   粘贴图片后提示无法读取，1.0.134 正常，涉及 LiteLLM + Vertex AI 后端，是持续较久的兼容性 bug。
   https://github.com/anomalyco/opencode/issues/5359

4. **[#40409] OpenCode Go 的 `deepseek-v4-flash` 实际返回 V3.2（知识截止 2025-05）** — 14 条评论
   用户质疑模型标识与计费不匹配，属于高优先级（计费/质量一致性问题）。
   https://github.com/anomalyco/opencode/issues/40409

5. **[#14332] Amazon Bedrock Opus 4.6 压缩（compaction）失败** — 16 条评论 / 8 👍
   涉及 `thinking` 块在压缩时被修改导致 API 报错，影响 Bedrock 长会话体验。
   https://github.com/anomalyco/opencode/issues/14332

6. **[#6560] Windows PowerShell 中无法粘贴剪贴板内容** — 13 条评论
   在 OpenCode TUI 会话中 Ctrl+V 与右键粘贴均无效，Windows 平台的高频输入痛点。
   https://github.com/anomalyco/opencode/issues/6560

7. **[#24334] DeepSeek 思考模式报错：`reasoning_content` 必须传回 API** — 10 条评论
   使用 DeepSeek 思考模式时，上下文传递缺少 `reasoning_content` 字段导致 HTTP 400。
   https://github.com/anomalyco/opencode/issues/24334

8. **[#41146] Go 计划被超额收费：周额度约 $7.50 即耗尽，尽管宣传 $30 上限** — 2 条评论 / 新增
   用户反馈配额计算与实际消费不符，本周高频出现的计费类问题之一。
   https://github.com/anomalyco/opencode/issues/41146

9. **[#41165] [2.0] relay 转发 DeepSeek 时缺少 content 键导致 HTTP 400** — 新增（08-08）
   `next-16998` 之后长会话经 opencode relay 调用 DeepSeek 失败，中继序列化器疑似丢失 `content` 字段。
   https://github.com/anomalyco/opencode/issues/41165

10. **[#41166] 支付成功后账户余额仍显示 $0** — 新增（08-08）
    用户通过支付宝完成充值，但余额未更新且无法使用服务，涉及支付回调链路问题。
    https://github.com/anomalyco/opencode/issues/41166

## 重要 PR 进展（10 个）

1. **[#41113] feat(tui): 在会话中渲染 Mermaid 图表**（Open）
   将 Mermaid 流程图、时序图、状态图直接渲染到 OpenCode 会话界面中，内置 TUI 插件。
   https://github.com/anomalyco/opencode/pull/41113

2. **[#40923] 原生后台子代理（background subagents）+ 瞬时错误自动重试**（Open）
   为 core 增加原生后台子代理编排，并让瞬时 provider 错误具备自恢复能力，是 Agent 能力的重要增强。
   https://github.com/anomalyco/opencode/pull/40923

3. **[#41154] fix(app): 在用户创建书签前显示服务器端项目**（Open）
   修复 `opencode web` 新会话首页永远显示 “Nothing here yet” 的问题，回退读取服务端 `/project` 列表。
   https://github.com/anomalyco/opencode/pull/41154

4. **[#41153] fix(app): 空搜索时列出基础目录**（Open）
   修复 “Add project” 对话框空查询永远显示 “No folders found” 的问题，空搜索将展示基础目录子项。
   https://github.com/anomalyco/opencode/pull/41153

5. **[#41158] fix(app): 项目选择器默认定位到 home**（Open）
   从 `/location` 端点读取服务器主目录并作为未选择路径时的默认项，改善首次使用体验。
   https://github.com/anomalyco/opencode/pull/41158

6. **[#41160] feat(tool): websearch 工具新增 Synthetic 后端**（Open）
   在 `exa` 和 `parallel` 之外新增第三个 Web 搜索后端，供需要自定义搜索实现的场景。
   https://github.com/anomalyco/opencode/pull/41160

7. **[#41161] fix(session): 为不支持附件的模型提取工具结果中的媒体**（Open）
   修复 `supportsMediaInToolResult` 对 `@ai-sdk/anthropic` 与 `@ai-sdk/openai` 无条件返回 `true` 导致的兼容性问题。
   https://github.com/anomalyco/opencode/pull/41161

8. **[#41159] fix(provider): 配置级 npm 覆盖传播到继承模型**（Open）
   修复 provider 配置中的 `npm` 覆盖被继承模型静默忽略的问题。
   https://github.com/anomalyco/opencode/pull/41159

9. **[#40845] feat(app): 非模态设置页面重新设计（Beta）**（Open）
   重做设置导航，将外观与通知拆分为独立页面，并新增 Projects / Extensions 视图，对齐 Figma 设计稿。
   https://github.com/anomalyco/opencode/pull/40845

10. **[#41152] feat(app): 添加服务器连接链接**（Open）
    支持 `#connect?server=...&directory=...`（Web）与 `opencode://connect?...`（桌面）深度链接，简化多服务器接入。
    https://github.com/anomalyco/opencode/pull/41152

## 功能需求趋势
- **付费与订阅体验**：加密支付（#23153）、配额计算透明化（#41146/#41102）是近期高频诉求，反映用户对付费服务的信任度敏感。
- **新模型 / 新 Provider 支持**：Snowflake Cortex OAuth（#34780）、DeepSeek V4 Flash 正确标识（#40409/#40607）说明社区对最新模型接入速度有较高期待。
- **Skills 组织管理**：#38853 提议支持子文件夹分级组织自定义 skills，避免目录过于扁平。
- **Agent 工作流增强**：运行时子代理模型覆盖（#17595）、后台子代理（PR #40923）显示用户对更灵活的多智能体编排的需求上升。
- **Web / Desktop 体验补全**：服务器连接深链（#41152）、Web 端项目列表修复（#41154/#41153）表明 Web 端正在快速补齐与桌面端对齐的体验。

## 开发者关注点
- **OpenCode Go 服务稳定性**：401 上游阻断、模型标识错误、周配额计算冲突等付费服务问题密集出现，直接影响用户信任。
- **DeepSeek 系列兼容性**：`reasoning_content` 传递、V4 Flash 标识、relay 缺少 content 键——多个 issue/PR 同时指向 DeepSeek 集成细节。
- **跨平台输入体验**：Windows PowerShell 粘贴失效仍是被长期高频吐槽的痛点（#6560）。
- **认证持久化**：Copilot 每次会话要求重新登录（#40183）、OAuth 连接后模型不出现（#41088），认证链路仍需打磨。
- **使用量统计可靠性**：#41102 使用量超过 100% 无法压缩、#41072 免费额度异常耗尽等计费相关 bug 引关注。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

## Pi 社区动态日报 — 2026-08-08

### 1. 今日速览

Pi v0.84.1 于今日发布，带来 Qwen Token Plan Individual 内置模型支持和认证就绪检查；社区围绕自动压缩失效、系统提示对 bash 调用的过度引导等回归问题展开激烈讨论；PR 侧则出现了延迟加载语法高亮、TUI 性能改进和 Cursor CLI 桥接等多个有价值的提交。

---

### 2. 版本发布

**v0.84.1** ([查看 Release](https://github.com/badlogic/pi-mono/releases/tag/v0.84.1))

- **Qwen Token Plan Individual** — 为 Individual 订阅的文档化模型提供内置 provider 支持，详见 [providers.md](https://github.com/earendil-works/pi/blob/v0.84.1/packages/coding-agent/docs/providers.md#api-keys)。
- **认证就绪检查** — 新增 `pi auth` 命令，用于在运行前检查认证状态是否就绪。

⚠️ 注意：该版本存在启动崩溃问题，详见下方 Issue #7771。

---

### 3. 社区热点 Issues

| # | 标题 | 状态 | 热度 | 重要性 |
|---|------|------|------|--------|
| [#6879](https://github.com/earendil-works/pi/issues/6879) | [bug] 上下文超过 100% 后自动压缩从未触发 | OPEN | 💬 13 · 👍 15 | **高** — 长会话用户的核心痛点。在 gpt-5.6-sol 会话中 context 超阈值后持续增长，直到 API 在 373k tokens 拒绝请求才触发压缩。社区呼吁在每次 agentic turn 后检查压缩条件 |
| [#7128](https://github.com/earendil-works/pi/issues/7128) | [bug] 系统提示中新的 PI_* 指南过度鼓励不必要的 bash 调用 | OPEN | 💬 11 · 👍 7 | **高** — 最近的系统提示更新引入 "Inspect PI_* environment variables" 的默认指南，导致 agent 频繁执行环境检查 bash 命令，即使任务并不需要。这是明显的提示工程回归 |
| [#7771](https://github.com/earendil-works/pi/issues/7771) | [bug] 无法启动 0.84.1 | CLOSED | 💬 5 | **高** — 新版本在 Node 23 上崩溃：`zlib.createZstdDecompress is not a function`。虽然已关闭，但影响了升级用户的体验 |
| [#7020](https://github.com/earendil-works/pi/issues/7020) | [bug] 压缩后 Pi 有时不继续 | CLOSED | 💬 10 | **中高** — 长周期 coordinator 会话中压缩后偶发不继续，可能与 assistant-tail 生命周期有关，关联 #5886 |
| [#7730](https://github.com/earendil-works/pi/issues/7730) | [bug] Mac OS 长会话高 CPU 占用 (50-110%) | OPEN | 💬 4 · 👍 5 | **中高** — 长会话中 CPU 飙升至 100%+，内存 600-800MB，疑似与会话长度正相关，尚无明确结论 |
| [#7702](https://github.com/earendil-works/pi/issues/7702) | [bug] DeepSeek 通过 opencode zen 网关 400 错误 | CLOSED | 💬 6 | **中** — 多轮/工具调用会话中 `reasoning_content` 必须回传，`detectCompat()` 未能识别。DeepSeek 兼容性问题，影响面较大 |
| [#5886](https://github.com/earendil-works/pi/issues/5886) | [bug] AgentSession 结算/继续与 assistant-tail 生命周期 bug | OPEN | 💬 6 | **中高** — meta issue，归纳了运行后逻辑试图从已失效 transcript 继续 agent 的反复出现的 bug 类，属于架构级修复 |
| [#7053](https://github.com/earendil-works/pi/issues/7053) | [bug] 并行工具批处理中兄弟工具停滞导致已完成结果丢失 | OPEN (in progress) | 💬 4 | **中高** — #3503 仅解耦了 UI 事件，但持久化的 toolResult 仍在整个批次 `Promise.all` 后才写入。异常场景下已完成的工具结果会丢失 |
| [#7703](https://github.com/earendil-works/pi/issues/7703) | [bug] Agent.reset() 在活动 run 期间导致仅 assistant 的 transcript | CLOSED | 💬 5 | **中** — `reset()` 未中止活动 run，完成后残留 assistant-only 消息，破坏 transcript 状态一致性 |
| [#7709](https://github.com/earendil-works/pi/issues/7709) | [bug] openai-responses 延迟 function_call 往返丢失 namespace | CLOSED | 💬 3 | **中** — 使用 `tool_search` 工具的模型在第二轮调用时报 `Missing namespace`，需要正确 round-trip namespace 字段 |

---

### 4. 重要 PR 进展

| # | 标题 | 状态 | 说明 |
|---|------|------|------|
| [#7801](https://github.com/earendil-works/pi/pull/7801) | [feat] 延迟加载不常见的语法语法 | OPEN | mitsuhiko 的语法高亮性能实验性重构，将不常用 grammar 改为按需加载，显著降低启动开销。需注意 UI 在加载后失效的小影响 |
| [#7780](https://github.com/earendil-works/pi/pull/7780) | [perf] TUI 性能改进 | CLOSED | 通过增量 Markdown 解析和懒渲染失效大幅提升 TUI 流畅度，是 #7730 CPU 问题的一个对症方案 |
| [#7749](https://github.com/earendil-works/pi/pull/7749) | [fix] /reload 后保留自定义工具渲染器 | CLOSED | 修复 `/reload` 时在 `session_start` 注册的工具渲染器丢失问题（对应 Issue #7740），调整了历史消息重建的时序 |
| [#7792](https://github.com/earendil-works/pi/pull/7792) | [feat] 通过本地 agent 会话桥接 Cursor CLI 认证 | CLOSED | 内置隐藏的 `cursor-agent` 扩展，复用已认证的本地 Cursor CLI 会话，无需 API key，同时提供 `pi cursor status` 健康检查 |
| [#7762](https://github.com/earendil-works/pi/pull/7762) | [feat] 引入 LM Studio 提供商 | OPEN | 解决 #7668，使 Pi 能接入本地 LM Studio 模型。测试由 `LM_STUDIO_BASE_URL` 环境变量守卫 |
| [#6216](https://github.com/earendil-works/pi/pull/6216) | [feat] Amazon Bedrock Mantle OpenAI Responses 提供商 | OPEN | 基于 OpenAI 官方 Bedrock 提供商实现的 Mantle Responses API 接入，长线 PR 但接近合并状态 |
| [#7722](https://github.com/earendil-works/pi/pull/7722) | [feat] 主题覆盖选项 | OPEN | 新增 `--use-theme` 参数，允许单次运行覆盖已存储的主题设置，支持单主题和双主题（如 `--use-theme dayowl/nightowl`）两种写法 |
| [#7710](https://github.com/earendil-works/pi/pull/7710) | [feat] 恢复挂起的 harness 操作 | CLOSED | 实现 harness v2 计划的 R3：填充 `AgentHarness.create` 从已有 session 加载新 harness，是恢复机制的重要基建 |
| [#7758](https://github.com/earendil-works/pi/pull/7758) | [feat] 退出前台任务与 ctx.version | CLOSED | 为扩展提供在 Pi 退出后接管前台进程的能力（如 `/web` 命令启动 Web UI），并暴露 `ctx.version` |
| [#7757](https://github.com/earendil-works/pi/pull/7757) | [feat] 全屏复制选择可选项 | OPEN | 为全屏模式添加 copy-on-select 开关，禁用后 `app.message.copy` 键优先复制选中内容，否则回退到复制最后一条消息（#7720） |

---

### 5. 功能需求趋势

从今日 Issues 和 PR 中可提炼出以下社区关注方向：

- **本地/第三方模型接入持续升温** — LM Studio 提供商（#7762）、Amazon Bedrock Mantle（#6216）、Cursor CLI 桥接（#7792），以及 DeepSeek 兼容性修复（#7702、#7726），表明用户对多渠道模型接入有强烈需求。
- **TUI 体验与性能优化** — 半页滚动（#7735）、全屏菜单位置（#7786）、粘贴预览（#7754）、主题自动检测修复（#7770、#7595）、语法延迟加载（#7801）和增量渲染（#7780），说明社区对终端 UI 的日常使用体验和性能非常敏感。
- **扩展 API 与生态开放** — Agent Plugins 规范支持（#7776）、无副作用消息发送 API（#7783）、工具装饰能力（#7800）、会话替换 API（#5952），开发者希望更灵活地扩展 Pi 能力。
- **会话生命周期与恢复韧性** — 自动压缩触发、压缩后继续、harness 恢复（#7710）、恢复状态查询重构（#7784），长会话可靠性是重度用户的第一诉求。
- **插件与工具渲染的可定制性** — 自定义工具渲染器在 `/reload` 后的保留（#7749）与工具错误渲染标准化（#7788），体现生态对渲染层深定制的需求。

---

### 6. 开发者关注点

- **自动压缩失效是最痛的问题** — #6879 获得 15 个 👍 为今日最高，用户经历 2 小时 agentic turn、373k tokens 溢出后才触发压缩。社区认为应在每个 agentic turn 后主动检查，而非依赖 provider 报错。相关 #7020、#5886 表明压缩与继续机制存在系统性架构问题。
- **系统提示改动引发的行为回归** — #7128 指出新增的 "Inspect PI_* environment variables" 默认指南使 agent 过度调用 bash 环境检查。这提醒核心提示词的每次改动都可能影响 agent 行为，需要更严格的默认值策略。
- **版本更新的启动故障** — 0.84.1 在 Node 23 下因 `zlib.createZstdDecompress` 缺失崩溃（#7771），虽然已关闭但暴露了多 Node 版本兼容性测试的不足。
- **并行工具调用的数据一致性** — #7053 中的 `Promise.all` 全体等待策略在单工具停滞时导致已完成结果丢失，这说明需要更细粒度的持久化时机，而非等整个批次 settle。
- **主题自动检测的边界情况** — #7770 中 macOS 外观偏好与终端背景不一致时加载了错误主题，加上 #7595 中主题切换后工具框不重绘，说明自动主题的探测与热更新链路尚不健壮。
- **环境/平台兼容细节** — `which` 外部命令在沙箱环境中不存在（#7796），Undici 全局 dispatcher 继承 16KiB 的 `maxHeaderSize` 导致 `UND_ERR_HEADERS_OVERFLOW`（#7791），开发者对最小化运行环境的适配提出更高要求。

---

*数据来源：[github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono) ｜ 统计周期：2026-08-07 至 2026-08-08*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-08-08）

## 今日速览
- 发布 `v0.21.7-nightly.20260807.fca8f3c1f`，包含一项 CI 自动化修复。
- 社区反馈集中在 **Windows 平台体验**（安装失败、中文输入、桌面崩溃）和 **终端渲染兼容性**（tmux / Web 终端闪屏）。
- Pull Request 方面，**ACP 协议增强**、**Web Shell 交互升级**和 **安全防护（Git 跨工作区保护）** 成为主线。

## 版本发布
- **v0.21.7-nightly.20260807.fca8f3c1f**  
  仅包含一项修复：`fix(ci): surface blocked autofix takeover admission`，用于改进 CI 自动接管流程的错误上报。  
  [Release 页面](https://github.com/QwenLM/qwen-code/releases)

## 社区热点 Issues
1. **[P1] Windows 桌面版 0.1.0 启动崩溃：打开工作区时报 EISDIR lstat 'C:'**  
   新发布的桌面版在 Windows 上打开任意文件夹即崩溃，涉及内置 Node.js 运行时路径处理错误，已被关闭但影响面大。  
   [Issue #8615](https://github.com/QwenLM/qwen-code/issues/8615)

2. **[UI] Windows 终端中输入中文时显示拼音看不清**  
   中文输入候选词渲染模糊，影响日常使用，评论 6 条，社区期待快速修复。  
   [Issue #8625](https://github.com/QwenLM/qwen-code/issues/8625)

3. **[Feature] 基于 Web Shell 构建低维护成本的桌面应用**  
   用户提出复用现有 Web Shell 作为桌面 UI，避免维护两套前端，获得较多讨论，代表桌面端演进方向。  
   [Issue #8092](https://github.com/QwenLM/qwen-code/issues/8092)

4. **[UI] tmux 中对话时屏幕持续闪烁（Mac + iTerm2 + SSH）**  
   多版本更新后出现，用户借助 Qwen 3.8 Max 定位为版本回归，影响远程开发场景。  
   [Issue #8562](https://github.com/QwenLM/qwen-code/issues/8562)

5. **[CLI] `qwen mcp list` 在 SSE 服务器不发送 endpoint 时永久挂起**  
   MCP 配置中一个不可用的 SSE 端点即可让命令卡死，暴露 MCP 客户端缺少超时与错误处理。  
   [Issue #8550](https://github.com/QwenLM/qwen-code/issues/8550)

6. **[Windows] 独立安装包因 PowerShell 无法解析 Get-FileHash 而失败**  
   SHA-256 校验阶段报错，已有 3 个 👍，属于 Windows 安装路径的高频痛点。  
   [Issue #7118](https://github.com/QwenLM/qwen-code/issues/7118)

7. **[Omni] S3 投递可靠性：缓存与恢复**  
   实现 47 小时缓存、凭证复用、崩溃恢复等细节，是 Omni 多模态实验的关键基础设施 Issue。  
   [Issue #8185](https://github.com/QwenLM/qwen-code/issues/8185)

8. **[Telemetry] 在 usage telemetry 中呈现运行时和客户端归属**  
   社区要求区分 `--acp`、VS Code 扩展、桌面端等渠道，以更精确地分析数据，该 Issue 已关闭（实现中）。  
   [Issue #8660](https://github.com/QwenLM/qwen-code/issues/8660)

9. **[UI] 队列消息指示器在长任务期间消失**  
   使用 Ctrl+Q 排队后，屏幕上看不到任何提示，导致用户误以为未生效，属于交互反馈缺失。  
   [Issue #8666](https://github.com/QwenLM/qwen-code/issues/8666)

10. **[CLI] PuTTY 下中键选择/复制功能回归（0.21.1 起）**  
   远程 Linux 用户依赖 xterm 风格的中键操作，升级后失效，影响 SSH 终端工作流。  
   [Issue #8672](https://github.com/QwenLM/qwen-code/issues/8672)

## 重要 PR 进展
1. **fix(cli): keep stream-json sessions alive after interrupt**  
   解决 `stream-json` 模式下中断导致整个会话不可用的问题，为每个 turn 独立 abort controller，已关闭（合并）。  
   [PR #8509](https://github.com/QwenLM/qwen-code/pull/8509)

2. **feat(cli): expose reasoning effort through ACP**  
   通过 ACP 标准 selector 暴露 `thought_level`（Low/Medium/High/Max），允许客户端配置推理投入。  
   [PR #8526](https://github.com/QwenLM/qwen-code/pull/8526)

3. **fix(acp): emit standard context usage updates**  
   每次模型轮询后发送标准 `usage_update` 通知，使客户端能实时显示上下文占用。  
   [PR #8528](https://github.com/QwenLM/qwen-code/pull/8528)

4. **fix(core): resolve Qwen 3.8 reasoning budget conflicts**  
   修复 DashScope 请求同时携带 `reasoning_effort` 和 `thinking_budget` 导致冲突的问题。  
   [PR #8525](https://github.com/QwenLM/qwen-code/pull/8525)

5. **feat(daemon): guard cross-worktree Git mutations**  
   在 `qwen serve` 中内置防护，识别 `-C`/`--work-tree` 等参数并阻止模型执行超出会话工作区的 Git 变更命令。  
   [PR #8687](https://github.com/QwenLM/qwen-code/pull/8687)

6. **feat(web-shell): add fullscreen view for the right artifact panel**  
   为 Web Shell 右侧面板（artifacts、subagents、review 等）增加全屏切换按钮，提升可视区域。  
   [PR #8614](https://github.com/QwenLM/qwen-code/pull/8614)

7. **feat(web-shell): tmux-backed interactive terminal sub-agent**  
   允许 Agent 在 tmux 中运行交互式 CLI（REPL、TUI 等），并在 Web Shell 中实时显示交互终端。  
   [PR #8613](https://github.com/QwenLM/qwen-code/pull/8613)

8. **perf(review): bake a soft tool-call budget into finder and auditor briefs**  
   为 review 流程添加 soft tool-call 预算（clamp(30+effective/20, 30, 60)，防止调用膨胀。  
   [PR #8708](https://github.com/QwenLM/qwen-code/pull/8708)

9. **feat(workflows): add an orchestration policy layer to the Workflow tool description**  
   重写 Workflow 工具描述，补充何时使用、规模选择、编排形态等策略性指引，帮助模型更合理调用。  
   [PR #8694](https://github.com/QwenLM/qwen-code/pull/8694)

10. **fix(review): stop the agent transcript from executing workflow commands**  
   将 review agent 的 stdout 包在 `::stop-commands::` 中，避免转录文本中的命令被误执行，属于安全修复。  
   [PR #8683](https://github.com/QwenLM/qwen-code/pull/8683)

## 功能需求趋势
- **桌面端 / Web Shell 体验统一**：多个 Issue/PR 要求复用 Web Shell 构建桌面 App、增加全屏面板、tmux 交互终端，说明官方正在整合多端界面。
- **ACP 协议与可观测性增强**：持续完善 ACP 标准能力（reasoning effort、context usage、session lifecycle），并推动遥测数据与 OpenTelemetry 对齐。
- **多模态 Omni 实验**：S3 缓存恢复、设计文档等持续演进，为文件识别和元数据功能铺路。
- **工作流编排策略**：社区希望 Workflow 工具不仅能执行，还能告诉模型“何时用、怎么拆、如何验证”。
- **国际化文档**：除英文外，韩文等语种被要求加入 README 语言栏，覆盖更多开发者。

## 开发者关注点
- **Windows 平台是重灾区**：安装脚本失败、桌面版启动崩溃、中文输入渲染、PowerShell 兼容性等问题高频出现。
- **终端兼容性焦虑**：tmux、PuTTY、Web 终端（阿里云 Workbench）中闪烁、中键失灵、颜色异常等反馈集中，TUI 渲染需兼容更多终端环境。
- **MCP 可靠性**：慢/坏 SSE 服务器会导致命令永久挂起，社区希望增加超时、错误提示和更健壮的连接管理。
- **会话状态一致性**：中断、信号终止、队列消息不可见等问题说明会话生命周期管理仍有细节缺失。
- **遥测环境兼容**：`OTEL_METRICS_EXPORTER=otlp` 会静默禁用指标导出，影响与其他 OTel CLI（Claude Code、Codex）共存的场景。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI / CodeWhale 社区动态日报 — 2026-08-08

> 项目已由 DeepSeek-TUI 更名为 **CodeWhale**，以下链接均指向 Hmbown/CodeWhale。

## 今日速览

v0.9.4 已进入发布前夜：代码与版本号已同步至 main，但仍有 4 个 CI 阻塞器待清除（见 #5282）。子代理再次成为社区焦点——今日提交的 #5284 修复了"已完成子代理被误判为共享检出竞争者"的问题。品牌与叙事层面，README 已转向"混合舰队"（任何模型可担任任何角色）这一核心卖点。

## 社区热点 Issues

1. **#2934 [CLOSED] feat: sidebar sessions panel with auto-resume and session history browsing** — 13 条评论  
   会话管理痛点的系统性方案：侧边栏持久化会话面板 + 自动恢复 + 历史浏览。虽已关闭，但与 #2492（跨会话记忆缺失）形成对照，官方正以"会话历史"缓解"无记忆"问题。  
   https://github.com/Hmbown/CodeWhale/issues/2934

2. **#1425 [OPEN] 执行大文本处理工程后会话中断卡死** — 6 条评论  
   中文用户报告：分析 300 万字小说时，10 个子 Agent 全部进入 Running 后因 `agent_wait` 超时而集体卡死。暴露子 Agent 并行执行的超时/恢复缺陷，是 v0.9.4 可靠性最需回应的场景。  
   https://github.com/Hmbown/CodeWhale/issues/1425

3. **#4785 [OPEN] Dead-code sweep: 464 #[allow(dead_code)] attributes are hiding drift** — 5 条评论  
   143 个文件中存在 464 处 `#[allow(dead_code)]`，编译器无法发现死代码漂移。这是 #3306 大规模重构前的技术债清理前置步骤。  
   https://github.com/Hmbown/CodeWhale/issues/4785

4. **#2492 [OPEN] 不具备跨会话记忆** — 5 条评论  
   重启后遗忘上一轮会话记忆，强制写入也不主动读取。属于基础体验缺口，社区多次提及。  
   https://github.com/Hmbown/CodeWhale/issues/2492

5. **#5123 [OPEN] v0.9.4 release-blocker: agent spawn surface has too many knobs — labeled builder runs read-only and self-BLOCKED** — 3 条评论  
   Dogfood 发现的发布阻断问题：被标记为 `builder` 的子代理实际以只读运行，导致"自我阻塞"。标签、权限与实际能力三者脱节。  
   https://github.com/Hmbown/CodeWhale/issues/5123

6. **#3306 [OPEN] v0.9.3 Refactor: converge runtime ownership, delete duplication, and ship one executable** — 4 条评论  
   架构级重构纲领：18 个 Rust 包中 87% 代码挤在 `codewhale-tui` 内，运行时/工具/配置/会话各有平行路径。后续 #4167 等均属其子任务。  
   https://github.com/Hmbown/CodeWhale/issues/3306

7. **#4416 [OPEN] Isolate stale failed-agent state between CodeWhale sessions in the same workspace** — 3 条评论  
   同一工作区开启第二个 CodeWhale 实例时，界面渲染出上个会话的红色失败代理行。状态残留导致界面误导。  
   https://github.com/Hmbown/CodeWhale/issues/4416

8. **#5034 [OPEN] v0.9.4: switching providers can retain an unrelated default model** — 2 条评论  
   切换到 OpenAI 后默认模型仍是 `gpt-5.5`（继承自无关路由）。提供商与模型解析未作为整体更新，影响路由可信度。  
   https://github.com/Hmbown/CodeWhale/issues/5034

9. **#5161 [CLOSED] v0.9.4: execpolicy deny rules evadable via single-& chains and subshell wrapping** — 1 条评论  
   安全缺陷：`command_segments` 未分割单个 `&`，导致 `ls & rm -rf /` 绕过 deny 规则。需关注修复方式，避免 shell 元字符再绕道。  
   https://github.com/Hmbown/CodeWhale/issues/5161

10. **#4390 [OPEN] v0.9.4 Plan: persist a reviewable plan artifact with line comments** — 3 条评论  
    计划模式缺少"可审查计划工件"契约：已接受策略仅存在于进程状态与 transcript，无法跨会话共享。与持久化需求同频。  
    https://github.com/Hmbown/CodeWhale/issues/4390

## 重要 PR 进展

1. **#5282 [CLOSED] fix(release): clear the four CI blockers holding v0.9.4**  
   main 已同步 v0.9.4，npm 与 crate pins 一致，但 CI 三个方向失败。清除 4 个红槽即可发布。  
   https://github.com/Hmbown/CodeWhale/pull/5282

2. **#5284 [OPEN] fix(subagent): stop counting finished children as shared-checkout contenders**  
   修复"已完成子代理仍被计为共享检出竞争者"导致的 bug：builder 子代理执行 `echo x > file` 都被误拒。共享工作区写入安全判断的精准校正。  
   https://github.com/Hmbown/CodeWhale/pull/5284

3. **#5283 [CLOSED] docs(readme): lead with mixed fleets — any model in any role**  
   README 从"切换提供商"转向"混合舰队"：一个 fleet 内不同角色可运行不同厂商模型。v0.9.4 核心能力的文档化。  
   https://github.com/Hmbown/CodeWhale/pull/5283

4. **#5256 [OPEN] feat(mcp): background incremental registry sync**  
   MCP registry 同步改为"缓存优先返回 + 后台增量同步"，进程级 mutex 防止并发下载。提升 MCP 工具池迭代体验。  
   https://github.com/Hmbown/CodeWhale/pull/5256

5. **#5258 [OPEN] fix(tui): stop stale cached session title from pinning New Session**  
   会话标题永久卡在 "New Session"：内存元数据缓存中的旧标题覆盖了新计算标题，且缓存仅在快照结束刷新。  
   https://github.com/Hmbown/CodeWhale/pull/5258

6. **#5255 [OPEN] Layer 5.3: Palette, completion, and discovery filtering**  
   命令边界重构第 5.3 层：整合命令面板与斜杠补全中的用户命令，并验证各验收标准。  
   https://github.com/Hmbown/CodeWhale/pull/5255

7. **#5257 [OPEN] feat(config): add model = auto for prompt-based tier selection**  
   新增 `model = "auto"`，按提示复杂度自动选择 `deepseek-v4-pro` 或 `deepseek-v4-flash`，回应 flash/pro 手动切换的痛点。  
   https://github.com/Hmbown/CodeWhale/pull/5257

8. **#5252 [CLOSED] feat(subagents): allow embedders to isolate runtime state roots**  
   为嵌入宿主增加可选 `EngineConfig::subagent_state_root`，隔离会话持有的委托代理状态，默认行为不变。  
   https://github.com/Hmbown/CodeWhale/pull/5252

9. **#5254 [CLOSED] Build fix for FreeBSD**  
   rquickjs 未提供 FreeBSD bindings，通过启用 `bindgen` feature 修复编译。平台支持扩大。  
   https://github.com/Hmbown/CodeWhale/pull/5254

10. **#5229 [CLOSED] docs: add Docs/windows beginner guide in zh-CN**  
    新增中文 Windows 新手指南，覆盖安装、配置、模型切换、模式与权限，附 4 张实操截图。  
    https://github.com/Hmbown/CodeWhale/pull/5229

另有 8 个 Dependabot 依赖更新 PR（#5274-#5281），涉及 jsonschema、thiserror、clap、async-trait、serde_json 等常规维护。

## 功能需求趋势

- **子代理系统化**：权限精细化（#5123）、续跑链（#425）、实时顾问观察（#3982）、状态隔离（#5252）——最活跃的开发方向。
- **会话记忆与持久化**：跨会话记忆（#2492）、侧边栏面板（#2934）、计划工件持久化（#4390），收敛为"工作上下文不丢失"。
- **架构收敛与技术债清理**：dead_code 清理（#4785）、运行时归并（#3306）、JobManager/TaskManager 合并（#4167），项目进入瘦身期。
- **多模型路由与自动选择**：`model = "auto"`（#5257）、提供商切换模型残留（#5034）、混合舰队（#5283）——多厂商协作是核心叙事。
- **MCP 与扩展生态**：MCP 热重载（#4068）、后台注册表同步（#5256）、插件系统完善（#5182）。
- **本地化**：i18n 覆盖（#790）、中文 Windows 指南（#5229），非英语用户群体增长。

## 开发者关注点

- **大任务稳定性**：300 万字文本切片 + 10 个子 Agent 全部超时卡死（#1425），大任务下的超时与恢复机制急需加固。
- **标签与权限不一致**：名为 `builder` 的代理实际只读并自我阻塞（#5123），角色标签、工具权限、用户预期三者脱节。
- **状态残留与污染**：同工作区多实例间陈旧失败状态可见（#4416）、测试读取真实用户配置（#5151），状态隔离是高频抱怨。
- **长上下文记忆断裂**：重启即遗忘（#2492），即使响应快也无法弥补工作记忆断裂的挫败感。
- **安全边界**：`&` 单符号绕过 deny 规则（#5161）引发对 shell 元数据解析覆盖度的警惕；凭据读取优先级争议（#5197）表明安全策略需公开文档化。

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*