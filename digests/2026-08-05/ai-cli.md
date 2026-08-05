# AI CLI 工具社区动态日报 2026-08-05

> 生成时间: 2026-08-05 01:26 UTC | 覆盖工具: 10 个

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

# AI CLI 工具横向对比分析报告（2026-08-05）

## 1. 生态全景

AI CLI 工具已进入**高频迭代与生态治理并重**的阶段：头部工具（Claude Code、Codex、Gemini CLI）聚焦稳定性与安全性，快速修复高危漏洞（如 worktree 逃逸、变量展开绕过）；同时跨平台支持（Windows/Linux）和上下文管理成为普遍短板，几乎所有工具都有相关高热度 Issue。MCP 协议正从"能连接"走向"可治理"，多工具出现进程泄漏、工具不可见等生命周期问题。此外，Agent 结果可信度（误报成功、静默降级）已成为下一代 Agent 工具的核心竞争焦点。

## 2. 各工具活跃度对比

| 工具 | 热点 Issues | PR 数 | Release | 今日发布内容摘要 |
|---|---|---|---|---|
| Claude Code | 10 | 6 | v2.1.222 | worktree 逃逸/hook 绕过修复 |
| OpenAI Codex | 10 | 10 | 4 个 alpha | Rust 分支高频迭代（0.147.0-alpha.x） |
| Gemini CLI | 10 | 10 | 无 | — |
| Copilot CLI | 10 | 2 | v1.0.79-1 | 沙箱设置重命名（破坏性变更） |
| Kimi Code CLI | 6 | 3 | 无 | — |
| OpenCode | 10 | 10 | v1.18.13 | RTL 修复、PR 评论上下文增强 |
| Pi | 10 | 10 | 无 | — |
| Qwen Code | 10 | 10 | v0.21.5 + 2 个预览版 | Electron→Tauri 迁移桥梁、工具结果追踪 |
| DeepSeek TUI | 10 | 10 | v0.9.4 train | release 整合中（77 commits ahead） |
| Grok Build | 无 | 无 | 无 | 24h 无活动 |

## 3. 共同关注的功能方向

### ① 跨平台支持（Windows 最大短板）
- **Claude Code**：Windows 桌面进程锁无法重启（#42776，51👍）
- **Codex**：Linux 桌面版（#11023，917👍）、Windows 进程风暴/WMI 高 CPU（#33776/#29499）
- **Copilot CLI**：WSL2 键位误判（#4328）
- **Kimi**：Windows IME 字符重复（#2584）
- **Pi**：主动发起 Windows 使用现状调查（#7547）
- **Qwen**：tmux 闪屏（#8519，11 评论）

### ② 上下文压缩与长上下文可靠性
- **Claude Code**：Autocompact 抖动（#82131）
- **Gemini**：/compress 会话重载失败（#28672 修复）
- **Pi**：Copilot Enterprise 压缩失败（#6768，18👍；#7413）
- **OpenCode**：陈旧会话自动压缩（PR #40403）
- **Kimi**：500K tokens 后指令漂移（#2586）
- **DeepSeek TUI**：1M 上下文模型被静默压缩至 128K（#5239）

### ③ Agent 结果可信度
- **Gemini**：MAX_TURNS 误报成功（#22323）、通用代理无限挂起（#21409）
- **DeepSeek TUI**：File 工具 edit 误报成功（#5209）
- **Qwen**：取消后仍写文件（#8493）
- **Claude Code**：子代理 effort 配置被忽略（#64706）

### ④ 安全边界与权限模型
- **Claude Code**：worktree 逃逸、PreToolUse 绕过（v2.1.222 修复）
- **Gemini**：变量展开绕过安全门（PR #28691）
- **Qwen**：hooks 四个信任边界漏洞（PR #8396）
- **Pi**：OAuth 错误信息泄露 token（PR #7605）
- **Copilot CLI**：沙箱设置重命名破坏性变更

### ⑤ MCP 生态治理
- **Codex**：工具不暴露（#19425）、进程泄漏 9GB+（#30408）
- **Copilot CLI**：MCP 初始化失败（#4370）、策略阻塞 MCP（#4349）
- **Qwen**：`mcp list` 无限挂起（#8550）
- **Gemini**：MCP 配置完整展示（PR #28664）
- **DeepSeek TUI**：MCP Registry 自动发现（PR #5238）

### ⑥ 本地模型与自托管
- **Gemini**：SGLang/OpenAI 兼容端点（PR #28681）
- **Copilot CLI**：BYOK 支持（#4139）
- **Pi**：Cortecs（PR #7571）、LLM Gateway（PR #7610）
- **Qwen**：新增 Kimi/MiMo 提供商（PR #8368）

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|---|---|---|---|
| **Claude Code** | 企业级 hooks/plugin 生态、安全修复 | 深度开发者、企业团队 | 稳定迭代（v2.x），补丁节奏快 |
| **OpenAI Codex** | 桌面体验、Rust 重写 | 全栈开发者、Pro 订阅用户 | Rust 分支高频 alpha，跨平台统一 |
| **Gemini CLI** | Agent 稳定性、评估体系、本地模型 | Google 生态开发者、研究场景 | Agent 行为评估基础设施（EPIC #24353） |
| **Copilot CLI** | GitHub 深度集成、企业配置 | GitHub 企业用户 | 保守迭代（v1.x），功能优先级偏低 |
| **Kimi Code CLI** | ACP 生态、跨设备协同、记忆 | 移动/多端开发者 | 轻量快速，功能规划中 |
| **OpenCode** | 开源中立、性能激进优化 | 独立开发者、社区驱动 | v1.18.x 高频迭代，Go 订阅服务 |
| **Pi** | 极简个人 Agent、新 provider 接入 | 技术极客、个人效率 | 社区驱动，Windows 支持补强中 |
| **Qwen Code** | 安全架构、企业级 review/autofix | 企业团队、阿里云生态 | 国际化 provider 接入，IDE 集成对齐头部 |
| **DeepSeek TUI** | Rust 单体优化、Runtime API | 开发者/研究者 | v0.9.x 构建性能治理，API 完备化 |

## 5. 社区热度与成熟度

**成熟稳定型**：**Claude Code** 与 **Copilot CLI** 处于功能完备后的补丁维护期，验证性 PR 较多，社区关注点从"能不能用"转向"好不好用"（如缩进、主题、插件更新）。

**快速迭代型**：**OpenAI Codex**（Rust 重写冲刺期，24h 4 个 alpha）、**Qwen Code**（正式版+预览版+nightly 多线发布）、**OpenCode**（v1.18.13 + 10 个 PR）均处于高频演进阶段，社区反馈能快速进入开发管线。

**活跃成长型**：**Gemini CLI**、**Pi**、**DeepSeek TUI** PR 活跃度高，但发布节奏不稳定；其中 DeepSeek TUI 维护者亲自提出 7 个构建性能专项 issue，暗示正在为 v0.9.5 做结构性调整。

**冷启动型**：**Kimi Code CLI** 社区规模较小（24h 仅 6 条 Issue），但记忆系统（#1283，17 评论）与远程控制（#1282，24👍）展现了明确的产品野心；**Grok Build** 昨日无活动。

## 6. 值得关注的趋势信号

1. **Rust 重写成为 CLI 工具的"第二曲线"**：Codex 的 Rust 分支已进入日更 alpha 阶段，DeepSeek TUI 在 Rust monorepo 中治理构建性能。Rust 带来的单二进制分发、内存安全和启动性能，正在成为下一代 CLI 的默认技术选型。

2. **"假成功"比报错更危险**：Gemini MAX_TURNS 误报、DeepSeek TUI File 工具假成功、Codex 图片处理失败仍扣费——多个工具出现"表面成功、实际失败"的行为模式。开发者对 Agent 的自报状态信任正在丧失，**可验证性是下一步刚需**。

3. **上下文压缩从"能做"走向"可配置、可解释"**：Pi 的压缩模型可配置 PR（#7602）、Gemini 的压缩失败修复、OpenCode 的自动压缩策略，加上 Claude Code 的 Autocompact 抖动，都在指向同一个方向：压缩不再是黑盒，需要支持模型选择、触发策略与失败可见性。

4. **MCP 进入"生命周期治理"阶段**：进程泄漏（Codex #30408，9GB+）、工具不可见（Codex #19425）、无限挂起（Qwen #8550）说明 MCP 的"最后一公里"——进程回收、作用域隔离、错误可诊断——尚未解决。这将是短期内拉开工具差距的关键。

5. **安全修复正在从"打补丁"转向"架构信任边界"**：Qwen 的 hooks 四漏洞修复、Claude Code 的 worktree 隔离、Pi 的 OAuth 响应体脱敏，体现出从"防御具体攻击"到"重新划分信任边界"的转变。开发者选型时应关注工具的安全架构设计而非单点修复记录。

6. **Windows 桌面端是最大未攻克的堡垒**：几乎所有工具在 Windows 上都有进程、IME、WSL 或沙箱问题（Codex 的 WMI 风暴、Claude 的文件锁、Kimi 的 IME 重复、Copilot 的键位误判）。对于面向企业用户的工具，Windows 体验已从"锦上添花"变成"生存问题"。

---

*报告基于 2026-08-05 各工具 GitHub 公共仓库动态数据整理，仅供参考。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截至 2026-08-05）

> 排序说明：PR 评论数未公开，以下按关联 Issue 数、讨论持续性（更新时间跨度）及社区痛点共鸣度综合排序。

---

## 1. 热门 Skills 排行

| 排名 | Skill / PR | 核心功能 | 社区讨论热点 | 状态 |
|------|-----------|---------|-------------|------|
| 1 | **skill-creator 召回率修复** (#1298) | 修复 `run_eval.py` 对所有 skill 描述均报告 `recall=0%` 的严重 bug，涉及 Windows 流读取、触发检测、并行 worker 等多个根因 | 直接关联 Issue #556（12 条评论，👍7）和 #1169，社区有 10+ 独立复现。讨论聚焦：**"描述优化循环在对抗噪声"**，即优化器信号完全失真，是当前生态最严重的工具链问题 | 🟡 open |
| 2 | **skill-creator 触发检测补丁** (#1323) | 修复 `run_eval.py` 漏检真实 skill 名、遇到首个非 Skill 工具即中断的问题 | 与 #1298 同源，但切入角度不同（触发检测逻辑 vs. 环境修复），显示社区对 skill-creator 缺陷的多路修复尝试 | 🟡 open |
| 3 | **document-typography** (#514) | AI 生成文档的排版质量控制：孤儿词换行、标题孤立在页脚（widow paragraphs）、编号对齐 | 讨论点：**"每个 Claude 生成的文档都有这些问题"** —— 定位为通用痛点，而非特定领域，受众面广 | 🟡 open |
| 4 | **ODT skill** (#486) | 创建、填充、读取、转换 OpenDocument 格式（.odt/.ods），以及 ODT→HTML 解析 | 企业文档生态的 ISO 开源格式诉求，与 LibreOffice 集成场景强相关 | 🟡 open |
| 5 | **pyxel 复古游戏开发** (#525) | 基于 pyxel-mcp 的 Python 复古像素风游戏开发工作流（write → run_and_capture → inspect → iterate） | 讨论持续至 7/15（跨度 4 个月），是少数非生产力导向的创意类 Skill，受到游戏开发社区关注 | 🟡 open |
| 6 | **testing-patterns** (#723) | 全栈测试模式：Testing Trophy 模型、单元测试 AAA 模式、React Testing Library、边界用例 | 补齐了官方集合中"测试生成"方向的空白，讨论热度稳定 | 🟡 open |
| 7 | **color-expert** (#1302) | 颜色专业知识：ISCC-NBS/Munsell/RAL 命名系统、色彩空间选型表（OKLCH/OKLAB/CAM16） | 差异化定位强 —— 首个专注设计系统底层知识的 Skill，更新时间持续至 7/21 | 🟡 open |
| 8 | **self-audit 推理质量门** (#1367) | 交付前审计：先做机械性文件验证，再按损害严重度排序做四维推理审计 | 与 Issue #1385（推理质量门流水线提案）形成呼应，代表社区对**输出质量保障**的系统化思考 | 🟡 open |

---

## 2. 社区需求趋势

从 Issues 提炼的五大方向：

### 🛡️ 安全与信任（最强烈诉求）
- **Issue #492（43 条评论，2👍）**：社区技能在 `anthropic/` 命名空间下分发，构成信任边界滥用风险。用户可能将社区技能误认为官方技能并授予提权权限 —— 这是当前生态**最紧迫的治理问题**。

### 🏢 企业级分发与协作
- **Issue #228（16 条评论，8👍）**：要求支持组织内技能共享，而非手动下载 `.skill` 文件 + Slack/Teams 传输 + 手动导入。这是采用率的关键瓶颈。

### 🔧 skill-creator 工具链可靠性
- **Issue #556（12 条评论，7👍）** 和 **#1169**：`run_eval.py` 的 0% 触发率 bug 让整个描述优化循环失效。
- **Issue #1061（3 条评论，2👍）**：Windows 原生环境下 subprocess PATHEXT、cp1252 编码、pipe select 三大兼容性问题。
- **Issue #202（8 条评论）**：skill-creator 本身写得像开发文档而非操作指令，违反自身命名规范。

### 🆕 新技能方向提案
- **agent-governance（#412）**：AI agent 系统的安全治理模式——策略执行、威胁检测、信任评分、审计追踪。
- **compact-memory（#1329）**：用符号化表示压缩 agent 的持久记忆，降低长时运行时的上下文消耗。
- **推理质量门流水线（#1385）**：任务前校准 → 对抗性审查 → 交付验证的三门闸流水线。

### 📌 平台与生态集成
- **Bedrock 支持（#29）**：如何在 AWS Bedrock 环境使用 Skills。
- **Skills 作为 MCP 暴露（#16）**：用 MCP 统一 Skills 的接口协议。
- **SharePoint 安全与上下文（#1175）**：访问控制与权限逻辑直接写入 SKILL.md 的安全隐患。

---

## 3. 高潜力待合并 Skills

以下 PR 均处于 open 状态但讨论活跃、价值明确，短期内落地概率较高：

| PR | Skill | 入选理由 |
|----|-------|---------|
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | 直击所有 AI 生成文档的通用痛点，实现机制清晰（3 类检查规则） |
| [#525](https://github.com/anthropics/skills/pull/525) | **pyxel** | 作者为 Pyxel 引擎原作者，生态整合自然，讨论持续验证需求 |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | 覆盖完整测试栈，与官方现有 skills 互补性强 |
| [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert** | 知识型 Skill 的差异化示范，7/21 仍在更新，作者活跃 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** | 回应社区对输出质量保障的系统性诉求，有完整方法论 |
| [#1479](https://github.com/anthropics/skills/pull/1479) | **plan-file-hygiene** | 直指规划产物无生命周期的痛点，7/25 创建后快速迭代 |

---

## 4. 生态洞察

> **一句话总结：** 社区当前最集中的诉求不是"更多技能"，而是**技能创作与分发基础设施的可靠性与信任治理** —— skill-creator 工具的 0% 召回率 bug（关联 5+ 个修复 PR）、anthropic 命名空间的安全滥用风险（Issue #492 高居榜首）、以及组织级共享机制的缺失，共同构成了生态从"能用"走向"可信、可扩展"的关键瓶颈。

---

*数据范围：github.com/anthropics/skills，截止 2026-08-05。*

---

# Claude Code 社区动态日报 — 2026-08-05

## 今日速览

昨日发布 v2.1.222 补丁，修复了 worktree 隔离会话的破坏性 git 命令逃逸问题及后台代理任务中 PreToolUse 钩子绕过问题。社区方面，Windows 桌面端因进程文件锁无法重启的 Issue 热度持续攀升（117 条评论），成为当前最受关注的稳定性痛点；同时 RTL 支持、PDF 依赖文档化等长期功能请求依旧保持高赞。

## 版本发布

### v2.1.222
- **修复**：worktree 隔离会话及其子代理不再能对主检出运行破坏性 git 命令；隔离现在适用于所有会话类型中的文件编辑与 Bash 操作。
- **修复**：后台代理任务中 PreToolUse 自动允许钩子不再绕过工具限制。

👉 https://github.com/anthropics/claude-code/releases

## 社区热点 Issues（10 个）

过去 24 小时共更新 50 条 Issue，以下为最值得关注的 10 条：

1. **#42776 — Claude Code Desktop 在 Windows 上因孤儿进程文件锁无法重启**
  117 条评论、51 👍。最热门问题：桌面应用 relaunch 被残留进程锁阻塞，持续 4 个月未修复，社区已有大量用户在追踪。
  🔗 https://github.com/anthropics/claude-code/issues/42776

2. **#38005 — RTL（从右到左）支持希伯来语与阿拉伯语**
  41 条评论、90 👍。高赞功能请求，涉及 Claude Desktop / Cowork 的 a11y 体验，长期未获官方回复。
  🔗 https://github.com/anthropics/claude-code/issues/38005

3. **#62466 — 重复"Image couldn't be processed" API 错误消耗使用额度**
  30 条评论、20 👍。用户因图片处理失败被持续扣费，影响 API 配额，亟需官方确认。
  🔗 https://github.com/anthropics/claude-code/issues/62466

4. **#74260 — 同一回合中 text 块后紧跟 thinking 时，助手文本块被静默丢弃**
  24 条评论、15 👍。偶发数据丢失：文本既未渲染也未写入 transcript JSONL，涉及 v2.1.201 下的自适应思考模式。
  🔗 https://github.com/anthropics/claude-code/issues/74260

5. **#13378 — 2 空格缩进与 80 列硬换行破坏复制粘贴**
  15 条评论、72 👍。历史悠久的可用性痛点，用户希望提供配置项关闭此行为。
  🔗 https://github.com/anthropics/claude-code/issues/13378

6. **#23704 — Read 工具的 PDF 支持依赖 poppler-utils 但未文档化**
  15 条评论、19 👍。工具声称"可读 PDF"，但容器等环境缺少 pdftoppm 时直接失败，且安装后不自动检测。
  🔗 https://github.com/anthropics/claude-code/issues/23704

7. **#82536 — `--continue` 无法找到 `-p` 创建的会话**
  7 条评论、0 👍。CLI 工作流阻断：print 模式与会话恢复机制脱节，交互式恢复失败。
  🔗 https://github.com/anthropics/claude-code/issues/82536

8. **#64706 — Agent 工具忽略子代理 .md 文件中的 `effort:` frontmatter**
  4 条评论、5 👍。子代理配置被全局 effortLevel 覆盖，声明无效，影响精细调参。
  🔗 https://github.com/anthropics/claude-code/issues/64706

9. **#82131 — Autocompact 抖动：压缩后 3 回合内上下文再次填满，连续三轮**
  3 条评论、0 👍。压缩策略疑似过度激进或计算有误，造成上下文反复膨胀。
  🔗 https://github.com/anthropics/claude-code/issues/82131

10. **#83243 — Windows 上 Bash 工具对简单命令报 "unexpected EOF at line 86"**
  2 条评论、0 👍。v2.1.220 下所有 Bash 调用失败，影响面广（Windows 11 + PowerShell 环境）。
  🔗 https://github.com/anthropics/claude-code/issues/83243

## 重要 PR 进展（6 个）

过去 24 小时共有 6 个 PR 更新：

1. **#83993 — fix(scripts): reject self-referential duplicates**
  修复 `comment-on-duplicates.sh` 可能将触发 Issue 自身标记为重复并自动评论的缺陷，改善自动化流程可靠性。
  🔗 https://github.com/anthropics/claude-code/pull/83993

2. **#83992 — fix(plugin-dev): assert expected hook decision**
  为 `test-hook.sh` 新增 `--expect allow|deny|ask` 参数，可确认钩子确实按预期放行/拒绝，而非仅验证其执行。修复 #83800。
  🔗 https://github.com/anthropics/claude-code/pull/83992

3. **#83990 — fix(plugin-dev): report missing jq dependency**
  此前 jq 缺失时 hook 测试将错误报告为 "invalid JSON"；现在明确定位并提示未安装的依赖。修复 #83802。
  🔗 https://github.com/anthropics/claude-code/pull/83990

4. **#83374 — docs(plugin-dev): document MessageDisplay streaming semantics**
  在 Hook Development 技能中补充 `MessageDisplay` 事件的触发描述、事件指引与速查表。
  🔗 https://github.com/anthropics/claude-code/pull/83374

5. **#83738 — Fix/83484 symlink path expansion**
  修复 Linux 下 `claude install` 将 `%h` 字面量写入 symlink 导致损坏的问题，改用展开后的 home 路径。
  🔗 https://github.com/anthropics/claude-code/pull/83738

6. **#83890 — Create pylint.yml**
  新增 CI 工作流（空摘要，待补充详情）。
  🔗 https://github.com/anthropics/claude-code/pull/83890

## 功能需求趋势

- **桌面端体验（Desktop app）**：RTL 支持（#38005）、远程会话插件钩子同步（#83643）、SSH 密码认证死路（#83815）、账号切换时项目选择不重置（#83973）等桌面端问题集中涌现。
- **Windows 平台稳定性**：进程锁（#42776）、MSIX WebGPU 崩溃（#83130）、Bash 工具 EOF 错误（#83243）、PDF 误报密码保护（#66563），Windows 成为最大问题平台。
- **PDF/文件工具增强**：poppler-utils 依赖未文档化（#23704）、未加密 PDF 被误报（#66563），Read 工具的文件处理可靠性待提升。
- **子代理与 Workflow 控制**：subagent `effort` 被忽略（#64706）、Workflow 内部 agent 调用不受钩子约束（#79953），用户需要更细粒度的治理能力。
- **上下文压缩策略**：压缩后立即回填（#82131）、技能重注入成本高（#82144），上下文管理效率成关注焦点。
- **CLI 会话语义**：`--continue` 与 `-p` 模式断裂（#82536）、后台化会话只携带最后一条消息（#83971），提示会话生命周期设计存在割裂。

## 开发者关注点

- **数据安全与完整性**：文本块静默丢失（#74260）与 Bash 注入系统样式指令（#74651）引发对输出可信度的担忧。
- **配额与成本**：图片 API 错误消耗使用额度（#62466）引发不满，用户认为异常应免计费。
- **文档缺口**：PDF 依赖（#23704）、技能 frontmatter 差异（#83981）等文档缺失增加上手成本，社区多次提出补全需求。
- **配置灵活性**：缩进/换行策略（#13378）与项目标签来源（#81628）等"小但烦人"的定制化需求，聚集了大量 👍 支持。
- **插件调试工具**：多个 PR 集中修复 plugin-dev 脚本（#83990、#83992），说明社区正在积极改善插件开发体验。

---
*本日报数据来源于 [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)，统计周期为 2026-08-04 至 2026-08-05。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-08-05

## 一、今日速览

- 过去 24 小时内连续发布 4 个 Rust 分支 alpha 版本（0.147.0-alpha.7 / 6.4 / 6.3 / 6.1），Rust 重写进入高频迭代冲刺阶段。
- 社区热度依旧集中：Linux 桌面版支持请求（#11023，917 👍 / 198 评论）与 /undo 功能回归诉求（#9203，372 👍 / 68 评论）分别是功能与体验方向最强烈的声音。
- Windows 平台系统资源问题继续发酵，#33776（ChatGPT.exe 进程风暴）、#29499（WMI Provider Host 高 CPU）等多个 issue 在过去一天内持续有新讨论，已成为当前严重度最高的 bug 集群。

## 二、版本发布

过去 24 小时发布 4 个 Rust 分支 alpha 版本，均为 0.147.0 系列迭代：

| 版本 | 类型 | 说明 |
|---|---|---|
| rust-v0.147.0-alpha.7 | alpha | 0.147.0-alpha.7 |
| rust-v0.147.0-alpha.6.4 | alpha | 0.147.0-alpha.6.4 |
| rust-v0.147.0-alpha.6.3 | alpha | 0.147.0-alpha.6.3 |
| rust-v0.147.0-alpha.6.1 | alpha | 0.147.0-alpha.6.1 |

仓库尚未提供这 4 个版本的详细变更日志，推测多为 CI 驱动的小步快跑式发布。持续跟进 0.147.0 正式版发布说明，期待 Rust 重写版在性能和稳定性上带来实质提升。

官方发布页：https://github.com/openai/codex/releases

## 三、社区热点 Issues（10 个）

### 1. Codex Desktop for Linux — 社区第一大功能需求
**Issue #11023** | 作者: Suhaibinator | 状态: OPEN | 👍 917 | 评论 198 | 更新于 08-05

> “I love the new codex app. However due to this issue it is almost unusable on my mac laptop. I would like to use the app on my linux desktop where power consumption……”

Linux 用户因 macOS 端功耗/发热问题（#10432）被迫迁移到 Linux 桌面，但官方尚未提供原生 Linux 版本。917 个 👍 使其成为整个 Codex 仓库中最受关注的功能请求之一。

📎 https://github.com/openai/codex/issues/11023

---

### 2. macOS 上 syspolicyd / trustd CPU 与内存失控
**Issue #25719** | 作者: energissimo-mg | 状态: OPEN | 👍 387 | 评论 80 | 更新于 08-05

Codex Desktop 在 macOS（Darwin arm64）上反复触发 `syspolicyd` / `trustd` 持续高 CPU 与内存占用，影响系统级组件，用户只能在 Plus 订阅下默默承受。87.5 分位 👍 率显示大量 macOS 用户同样遭遇此问题。

📎 https://github.com/openai/codex/issues/25719

---

### 3. 请恢复 /undo 功能
**Issue #9203** | 作者: SunRunAway | 状态: OPEN | 👍 372 | 评论 68 | 更新于 08-05

> “It bites me several times in recent days and I miss the /undo feature each time.”

当 Codex 误删除未被 Git 跟踪的文件、或修改了未提交的改动时，/undo 是最后的回滚手段。该功能被移除后，大量用户工作流被打断。这是典型的“高位可视化功能回归”需求。

📎 https://github.com/openai/codex/issues/9203

---

### 4. Windows：ChatGPT.exe 生成数百个 taskkill.exe / conhost.exe 进程
**Issue #33776** | 作者: AnitaHailey0306 | 状态: OPEN | 👍 26 | 评论 29 | 更新于 08-05

单次受影响会话中出现 **287 个** 残留 `taskkill.exe` 和 `conhost.exe` 进程，导致 WMI 故障风暴和 DWM（桌面窗口管理器）降级。Windows 桌面版系统集成问题的又一个重度案例。

📎 https://github.com/openai/codex/issues/33776

---

### 5. 思考时微小动画导致高 GPU 占用
**Issue #16857** | 作者: homm | 状态: OPEN | 👍 46 | 评论 38 | 更新于 08-05

App 在“思考”状态下仅因一个微小动画持续占用 GPU，用户质疑“tiny useless animation”是否值得。开发者已确认此问题并持续追踪中，是省电与体验平衡的典型冲突。

📎 https://github.com/openai/codex/issues/16857

---

### 6. Windows 沙箱下 apply_patch 失败
**Issue #30009** | 作者: TheCrake | 状态: OPEN | 👍 10 | 评论 30 | 更新于 08-05

Windows 上通过 apply_patch 编辑文件时，受沙箱/权限模型影响反复失败，Pro 用户日常开发流程受阻。Windows 沙箱路径兼容性仍是高频问题区。

📎 https://github.com/openai/codex/issues/30009

---

### 7. 自定义 stdio MCP 服务器工具未暴露给 Desktop 线程
**Issue #19425** | 作者: arbenl | 状态: OPEN | 👍 5 | 评论 28 | 更新于 08-05

`/mcp` 可发现自定义 MCP 服务器（tools/list 成功），但工具并未同步到 Desktop 线程或 tool_search。疑似 0.124.0-alpha.2 引入的回归——MCP 生态接入层的问题直接影响扩展工具使用率。

📎 https://github.com/openai/codex/issues/19425

---

### 8. MCP 服务器进程泄漏：每线程进程从不清理，内存涨至 9GB+
**Issue #30408** | 作者: kkkayye | 状态: OPEN | 👍 6 | 评论 22 | 更新于 08-04

app-server 为每个新线程/会话生成一套全局 MCP 服务器进程，但线程归档或关闭时不回收。孤儿进程无限累积，实测 RSS 超过 9GB。这是服务端资源生命周期管理的重大缺陷。

📎 https://github.com/openai/codex/issues/30408

---

### 9. Windows：启动后 WMI Provider Host 持续高 CPU
**Issue #29499** | 作者: Artasov | 状态: OPEN | 👍 23 | 评论 17 | 更新于 08-05

Codex 启动后触发 `WmiPrvSE.exe` 持续高负载，对 13 代 Intel 桌面 CPU 也造成明显压力。多篇 Windows 资源问题 issue 的共同根因都指向 Electron 层进程快照轮询机制。

📎 https://github.com/openai/codex/issues/29499

---

### 10. 将 CLI 会话引入 Desktop 历史
**Issue #21079** | 作者: lancewillett | 状态: OPEN | 👍 13 | 评论 15 | 更新于 08-05

用户希望本地 CLI 会话能作为一等公民出现在 Desktop 历史中，或提供显式“导入 CLI 历史”操作。目前 Desktop 已支持导入 Claude Code 历史，但对自家 CLI 却没有同等体验，社区普遍感到困惑。

📎 https://github.com/openai/codex/issues/21079

---

## 四、重要 PR 进展（10 个）

过去 24 小时内合并/更新的 PR 主要由自动化机器人 `copyberry[bot]` 提交，说明 OpenAI 内部已构建起一套代码生成与自动化合并流水线，覆盖从缓存、工具系统到 MCP 基础设施的多个模块。以下为 10 个值得关注的条目：

### 1. 跨插件加载保持共享技能缓存新鲜
**PR #37000** | 状态: CLOSED | 更新于 08-05

按文件系统和插件快照身份缓存技能快照，避免兼容配置复用陈旧数据；同时合并相同缓存键的并发加载。插件系统的缓存一致性增强。

📎 https://github.com/openai/codex/pull/37000

---

### 2. 在工具搜索中支持延迟自定义工具
**PR #36998** | 状态: CLOSED | 更新于 08-05

将顶层自由表单工具纳入 tool-search 索引并标记为延迟加载；搜索到结果后序列化为 Responses API `custom` 工具，再做还原执行。扩展工具的可发现性显著提升。

📎 https://github.com/openai/codex/pull/36998

---

### 3. 分页线程的 includeTurns 读取支持
**PR #36993** | 状态: CLOSED | 更新于 08-04

即使线程已以分页形式存储，客户端 `thread/read` 开启 `includeTurns: true` 时也能获得完整的历史视图。通过重构投影完整 turns 补上兼容性缺口。

📎 https://github.com/openai/codex/pull/36993

---

### 4. 允许注入模型目录缓存
**PR #36992** | 状态: CLOSED | 更新于 08-04

公开 `ModelsCache` 契约，允许模型提供商与 `OpenAiModelsManager` 接收调用方传入的缓存实现，默认仍使用既有文件缓存。为模型目录扩展铺平架构道路。

📎 https://github.com/openai/codex/pull/36992

---

### 5. 移除遗留协作模式
**PR #36990** | 状态: CLOSED | 更新于 08-04

删除隐藏的 `PairProgramming` 与 `Execute` 两种 `ModeKind`，模式只保留 `Default` 与 `Plan`。降低未来多模式演进的理解与维护成本。

📎 https://github.com/openai/codex/pull/36990

---

### 6. 保留共享 bundled 技能缓存
**PR #36989** | 状态: CLOSED | 更新于 08-04

修复 services 在“禁用 bundled skills”时误删系统技能缓存文件的问题——该文件可能仍被同一 `CODEX_HOME` 下的其他服务使用。防止多进程环境下的缓存污染。

📎 https://github.com/openai/codex/pull/36989

---

### 7. exec-server 可选并发请求调度
**PR #36987** | 状态: CLOSED | 更新于 08-04

新增 `--concurrent-requests <COUNT>` 参数，允许本地与远程 exec-server 并发处理请求，避免长任务阻塞健康检查与清理。对提升长时任务并发性直接友好。

📎 https://github.com/openai/codex/pull/36987

---

### 8. 为 Amazon Bedrock 启用远程压缩
**PR #36981** | 状态: CLOSED | 更新于 08-04

为 Bedrock 提供商添加远程 compaction 能力，限定 v1 协议，手动/自动压缩均走 `/v1/responses/compact`。第三方模型提供商的上下文管理得到完善。

📎 https://github.com/openai/codex/pull/36981

---

### 9. 允许禁用内置图片查看器
**PR #36966** | 状态: CLOSED | 更新于 08-04

新增默认开启的 `features.view_image` 开关，关闭后不暴露内置 `view_image` 工具（包括 fresh-context subagent 与 guardian reviewer turns）。提供更强的边界可控性。

📎 https://github.com/openai/codex/pull/36966

---

### 10. 导入外部会话时保留工作目录
**PR #36964** | 状态: CLOSED | 更新于 08-04

Cursor 的“empty-window”项目会话缺少工作目录元数据；此 PR 将这些会话解析到 Cursor 目录的父级（工作区根），提升外部会话导入的准确性。

📎 https://github.com/openai/codex/pull/36964

---

## 五、功能需求趋势

综合最近 24 小时更新的 50 条 Issues（展示 Top 30），社区关注方向可归纳为 5 大趋势：

1. **跨平台支持仍是第一引擎**  
   Linux 桌面版（#11023，917 👍）是绝对顶流需求；同时 macOS（#25719）和 Windows（#33776、#29499）上各自平台特定的系统集成问题，反过来推动社区对“平台一致性”的迫切期待。

2. **性能与资源占用成为最大痛点集群**  
   Windows 平台 WMI/PowerShell 轮询、macOS syspolicyd/trustd/GPU 占用，MCP 进程泄漏（#30408，9GB+ RSS）——性能类 bug 在全部热门 issue 中占比超过一半，是影响用户留存的核心因素。

3. **功能回归与工作流还原**  
   /undo 被移除（#9203，372 👍）和 CLI 会话无法导入 Desktop 历史（#21079）说明：当工具快节奏迭代时，用户对已被依赖的功能有极强粘性，期望“移除需谨慎，迁移需平滑”。

4. **MCP 生态向深度集成演进**  
   从工具不暴露（#19425）到进程泄漏（#30408），再到 PR 中“延迟加载自定义工具”（#36998），开发者明显期望一个更稳健、更透明的 MCP 工具接入体验。

5. **配置灵活性与可扩展性**  
   PR 侧可见端倪：模型缓存可注入（#36992）、图片查看器可开关（#36966）、token 预算上下文身份可配置（#36970）。社区需求趋势正从“开箱即用”转向“可按组织/项目精细调校”。

## 六、开发者关注点

综合 Issue 评论区与高频反馈，开发者当前最核心的痛点集中在以下四个方面：

- **Windows 平台基础进程模型亟待重构**  
  包括 WMI Provider Host 高 CPU（#29499、#32562）、每秒 PowerShell 进程轮询（#25453、#36025、#36176）、taskkill/conhost 进程风暴（#33776）、鼠标输入卡顿（#34158、#36025）。多条 issue 直指 Electron 层进程快照实现有根本性缺陷，社区建议实现一个统一的、批量的 Windows 进程信息获取通道，替代逐进程 PowerShell 快照。

- **macOS 电源与系统组件影响**  
  syspolicyd/trustd 失控（#25719）和思考动画高 GPU（#16857）表明桌面应用在 macOS 的通知、安全校验及渲染路径上仍有不必要的高频操作。用户明确要求提供“极致省电模式”或至少移除动画类空闲负载。

- **MCP 服务器生命周期管理**  
  进程泄漏、工具作用域不透明（#19425、#30408）正在侵蚀 对 MCP 生态的信任。开发者希望：线程归档时强制清理 MCP 子进程；工具列表按线程可见且可审计；MCP 配置错误易诊断、可观测。

- **功能回归正在伤害高级用户**  
  /undo 的缺失被 372 个 👍 反复强调。开发者倾向于将 Codex 视为一种具备可逆操作的专业开发工具，而不是一个黑盒对话助手。移除关键操作前，社区期望至少提供等价的可配置替代方案。

---

*本日报数据来源：github.com/openai/codex 公开仓库（更新截至 2026-08-05）。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-08-05

## 📌 今日速览

昨日无新版本发布，社区讨论重心集中在 **Agent 稳定性和可信度问题**（如子代理在 MAX_TURNS 后误报成功、通用代理无限挂起、Shell 命令卡死）以及 **本地模型支持** 上（SGLang 与 OpenAI 兼容端点的新 PR）。安全修复方面，#28691 弥补了 GHSA-wpqr-6v78-jr5g 中变量展开绕过的检测缺口，建议尽快跟进。

---

## 🔥 社区热点 Issues（Top 10）

### 1. Subagent MAX_TURNS 被误报为 GOAL 成功 — [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)
- **标签**: `p1` / `bug` / `area:agent` | **💬 12 条评论 | 👍 2**
- **问题**: `codebase_investigator` 子代理在达到 MAX_TURNS 后，系统仍将其 `status` 报告为 `success`、`Termination Reason: GOAL`，而实际分析并未开始。这会直接掩盖中断事实，误导开发者信任不完整的执行结果。
- **社区反应**: 今日讨论度最高的问题，凸显 Agent 结果可信度已成为核心痛点。

### 2. 通用代理（Generalist Agent）无限挂起 — [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)
- **标签**: `p1` / `bug` / `area:agent` | **💬 8 条评论 | 👍 8**
- **问题**: 一旦委托给 generalist agent 就永久挂起，连"创建文件夹"这类简单操作也会卡住，用户最长等待 1 小时后取消。显式指示模型不要使用子代理可规避。
- **社区反应**: 8 个 👍 说明受影响的用户不在少数。

### 3. Shell 命令完成后卡在 "Waiting input" — [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)
- **标签**: `p1` / `bug` / `area:core` | **💬 4 条评论 | 👍 3**
- **问题**: 极简单的 CLI 命令执行完毕后，终端仍显示命令活跃并"等待输入"。虽不影响结果，但严重干扰交互流程。

### 4. Wayland 环境下浏览器子代理失败 — [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)
- **标签**: `p1` / `bug` / `agent:browser` | **💬 4 条评论 | 👍 1**
- **问题**: 在 Wayland 会话中，browser 子代理直接以 `Termination Reason: GOAL` 结束，但实际上并未完成浏览器操作，Wayland 用户完全无法使用该功能。

### 5. 组件级评估体系（EPIC）— [#24353](https://github.com/google-gemini/gemini-cli/issues/24353)
- **标签**: `p1` / `EPIC` / `area:agent` | **💬 7 条评论**
- **内容**: 在已有 76 个行为评估测试基础上，为 6 个受支持的 Gemini 模型构建更健壮的组件级评估框架，定位能力退化根因，属于长期质量基建。

### 6. AST 感知的文件读取 / 搜索 / 代码库映射 — [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)
- **标签**: `p2` / `EPIC` / `area:agent` | **💬 7 条评论 | 👍 1**
- **内容**: 探索利用 AST 感知工具精确读取方法边界、减少单次工具调用的 token 噪声，以及改进代码库导航。跟进 issue #22746 建议以 tilth/glyph 为起点。
- **意义**: 直接关乎 Agent 处理大型代码库时的上下文效率。

### 7. Gemini CLI 不主动使用技能（Skills）和子代理 — [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)
- **标签**: `p2` / `bug` / `area:agent` | **💬 6 条评论**
- **问题**: 用户配置了 gradle、git 等技能，但模型只会在显式指示下调用，不会根据任务自主匹配。削弱了自定义技能和子代理生态的价值。

### 8. v0.33.0 起子代理未经许可运行 — [#22093](https://github.com/google-gemini/gemini-cli/issues/22093)
- **标签**: `p2` / `bug` / `area:agent` | **💬 3 条评论**
- **问题**: 用户已在配置中禁用 agents mode，但升级到 v0.33.0 后 generalist 等子代理仍被调用。权限模型出现回归，引发安全担忧。

### 9. ~/.gemini/agents/ 中的符号链接不被识别 — [#20079](https://github.com/google-gemini/gemini-cli/issues/20079)
- **标签**: `p2` / `bug` / `area:agent` | **💬 4 条评论**
- **问题**: agent 文件若为 symlink 则无法被加载，限制了用符号链接管理自定义 Agent 配置的灵活性。

### 10. 自动记忆（Auto Memory）反复重试低信号会话 — [#26522](https://github.com/google-gemini/gemini-cli/issues/26522)
- **标签**: `p2` / `bug` / `area:agent` | **💬 5 条评论**
- **问题**: 只有成功读取会话的 patch 才会被标记为已处理；低信号会话被跳过会反复出现在待处理队列中，造成无限重试。同系列的 #26516（记忆系统整体 bug 追踪）、#26525（敏感信息脱敏）和 #26523（无效 patch 静默丢弃）也值得一并关注。

---

## 🚀 重要 PR 进展（Top 10）

### 1. 修复变量展开绕过安全门（GHSA-wpqr-6v78-jr5g）— [#28691](https://github.com/google-gemini/gemini-cli/pull/28691)
- **领域**: 安全 / core
- **内容**: 修复 `detectBashSubstitution()` 与 `detectPowerShellSubstitution()` 的不完整检查——`$VAR` 和 `${VAR}` 模式此前可绕过已加入的安全门。同时加固了 `gemini-automated-issue-dedup.yml` 工作流。**此前的安全修补存在缺口，建议优先审查。**

### 2. 支持 SGLang 与本地 OpenAI 兼容端点 — [#28681](https://github.com/google-gemini/gemini-cli/pull/28681)
- **领域**: 新功能 / core+cli / `p1`
- **内容**: 为 Gemini CLI 添加 SGLang 及本地 OpenAI 兼容服务端点支持，意味着可对接本地/自托管模型，满足数据主权与离线开发场景需求。

### 3. 修复上下文损坏与配额回退时的"自动补全"行为 — [#28671](https://github.com/google-gemini/gemini-cli/pull/28671)
- **领域**: core / cli
- **内容**: 工具执行被中断（配额错误回退、用户 ESC 打断）时，对历史记录做防御性加固，防止上下文被破坏导致模型出现"自动补全"式的错误前缀延续。

### 4. 修复 /compress 会话重载失败与配额回退工具响应丢失 — [#28672](https://github.com/google-gemini/gemini-cli/pull/28672)
- **领域**: core / cli / agent
- **内容**: 两个独立 bug：一是 `/compress` 或自动压缩后报 `Failed to load resumed session data from file` 且持续不可用；二是配额超限后已执行的工具响应丢失，污染后续对话上下文。

### 5. 窄终端下 Ghost Text 无限循环修复 — [#28641](https://github.com/google-gemini/gemini-cli/pull/28641)
- **领域**: core / `p2` / `help wanted`
- **内容**: 当终端宽度小于单个宽字符（CJK/emoji）时，`getGhostTextLines` 会陷入无限循环。通过强制推进 `splitIndex` 保证包装终止，并附带回归测试。

### 6. Cloud Workstations 中 OAuth 回调重定向 URI 动态解析 — [#28688](https://github.com/google-gemini/gemini-cli/pull/28688)
- **领域**: 安全 / auth / `p3`
- **内容**: 修复在 Cloud Workstations VM 中 OAuth 流程静态重定向到 localhost 而失败的问题，改为动态解析代理重定向 URI，使云端开发环境的登录认证恢复正常。

### 7. MCP 服务器配置完整展示与 stdio 环境加固 — [#28664](https://github.com/google-gemini/gemini-cli/pull/28664)
- **领域**: MCP / 安全
- **内容**: 扩展更新时的同意提示此前只展示 command/args/httpUrl，现补全 `env`、`cwd`、`headers` 等影响执行的字段，并在更新后重新提示；同时对 stdio 环境变量进行加固，减少配置漂移风险。

### 8. Caretaker Agent 分诊评估框架与裁判运行器 — [#28530](https://github.com/google-gemini/gemini-cli/pull/28530)
- **领域**: 基础设施 / 工具链
- **内容**: 为 Caretaker Agent 的 issue 分诊管道新增 LLM-as-a-Judge 评审标准与并行 Git Worktree 基准运行器（`tools/caretaker-agent/evals/triage/`），可大规模评估分诊行为质量。

### 9. 拒绝 A2A 远程 Agent 的 OpenID Connect 认证 — [#28680](https://github.com/google-gemini/gemini-cli/pull/28680)
- **领域**: 安全 / `p2`
- **内容**: 修复了解析 #28651：A2A openIdConnect 配置在校验时显示"有效"，但运行时立即失败的误导性问题。现改为在校验阶段直接拒绝，避免配置了不能用的认证方案。

### 10. 修复环境变量加载顺序导致的设置占位符竞态 — [#28597](https://github.com/google-gemini/gemini-cli/pull/28597)
- **领域**: cli / 配置
- **内容**: settings 文件（system/user/workspace）在 `.env` 加载前就被展开和验证，导致 `process.env` 占位符解析错误。此 PR 调整生命周期，先加载环境变量再解析设置。

---

## 📊 功能需求趋势

从近期 Issue 与 PR 中可提炼出以下社区关注方向：

| 方向 | 代表 Issue/PR | 热度 |
|---|---|---|
| **Agent 结果可信度与稳定性** | #22323（MAX_TURNS 误报）、#21409（挂起）、#22093（权限绕过） | 🔥 最高 |
| **本地模型与开源生态支持** | #28681（SGLang/OpenAI 兼容端点） | 🔥 高 |
| **AST 感知代码理解** | #22745、#22746 | 中 |
| **自动记忆系统完善** | #26522、#26523、#26525、#26516 | 中 |
| **安全加固与最小权限** | #28691、#28680、#28664、#26525 | 持续上升 |
| **终端体验优化** | #25166、#21924（resize）、#24935（外部编辑器退出）、#28641 | 中 |

## 💡 开发者关注点

1. **Agent 可靠性的信任危机**：最高热度的 Issue 集中在 Agent"表面成功、实际失败"的行为（#22323、#21409），开发者已经开始不信任 Agent 的自报状态，这是当前最大的体验瓶颈。
2. **安全问题日趋敏感**：多个开发者主动提交安全相关 PR（变量展开绕过、OAuth 回调泄漏、A2A 认证误报），表明社区对权限模型和敏感信息处理的要求在提升；同时 #22093 的"禁用仍被调用"问题需要尽快定位。
3. **本地部署需求明确**：SGLang/OpenAI 兼容端点 PR 的出现说明有相当比例的用户期望将 Gemini CLI 接入本地模型，降低对云端 API 的依赖。
4. **配置管理细节影响效率**：symlink 支持、settings.json override 不生效、环境变量加载顺序、压缩后会话损坏等"小问题"高频出现，直接影响日常使用流畅度。
5. **子代理自主性不足**：模型不主动调用技能/子代理（#21968），导致自定义 Agent 生态的价值无法发挥，官方需要改善工具调度的主动性或提供更明确的触发机制。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-08-05）

## 今日速览
- 发布补丁版本 **v1.0.79-1**，其中包含一个破坏性变更：沙箱设置 `allowDevToolCaches` 重命名为 `allowDevToolAccess`，旧配置会被静默忽略，可能影响自定义沙箱策略的用户。
- 社区最热门议题集中在**主题定制（#1504）**、**会话分叉（#1697）**和**插件自动更新（#1709）**等长期未解决的功能需求上，显示用户对个性化、工作流效率的强烈诉求。
- 新增多个 triage 状态的 bug 报告，包括 MCP 初始化失败（#4370）、插件 slash command 回归（#4361）等，值得关注。

## 版本发布
- **v1.0.79-1**（2026-08-05 发布）
  - 改进：常规改进。
  - **破坏性变更**：沙箱设置 `allowDevToolCaches` 重命名为 `allowDevToolAccess`。新名称授予对开发者工具配置和注册表的访问权限，而不仅仅是缓存。旧键不再被读取，且会被静默忽略；因此，原先显式设置 `false` 的用户将回退为默认值（开启）。请务必在配置中重命名该设置。

## 社区热点 Issues（10 个精选）
1. **[#1504] 添加自定义主题支持**  
   作者：logar16 | 评论 8 | 👍 23  
   用户希望在现有基础主题之外，允许创建自定义主题并以 JSON 等方式分享。该 issue 已开放近半年，评论与点赞数持续增长，反映社区对个性化的高度需求。  
   https://github.com/github/copilot-cli/issues/1504

2. **[#1697] 会话分叉——将对话分支为共享上下文的并行会话**  
   作者：Bujo0 | 评论 3 | 👍 25  
   在多步骤任务中遇到自然分支时，用户希望保留当前上下文的同时开启新会话。该功能是今日点赞数最高的 open issue 之一，说明高级用户对工作流灵活性的迫切需求。  
   https://github.com/github/copilot-cli/issues/1697

3. **[#1285] 组织级别 Agent 不显示**  
   作者：SAhmeti | 评论 7 | 👍 9  
   用户在 `.github-private` 仓库下创建的 Agent 无法在 CLI 或 VS Code 中显示。企业用户配置生效问题，评论中有其他用户可能遇到类似情况。  
   https://github.com/github/copilot-cli/issues/1285

4. **[#4328] WSL2 下 Ctrl+H 被误判为 Ctrl+Backspace**  
   作者：dimbleby | 评论 5 | 👍 0  
   由于 Windows Terminal 泄漏 `WT_SESSION` 环境变量，导致 `/help` 文档中 Ctrl+H（删除前一个字符）行为变为删除整个单词。影响 WSL2 用户的基本编辑体验。  
   https://github.com/github/copilot-cli/issues/4328

5. **[#4005] Copilot 计费实体未选择**  
   作者：CoolGoose | 评论 4 | 👍 3  
   企业版用户无法保存 memories，提示 "Copilot billing entity isn't selected"，但其他功能正常。影响企业上下文记忆功能，可能与账户/租户配置有关。  
   https://github.com/github/copilot-cli/issues/4005

6. **[#4202] 内置 view 工具报告“路径不存在”但文件实际存在**  
   作者：matanSchaumberg | 评论 4 | 👍 1  
   v1.0.72 开始出现回归，v1.0.73 仍然存在。使用 `view` 工具时对已存在文件报错，v1.0.71 正常。此问题影响非交互模式下的文件读取，值得尽快修复。  
   https://github.com/github/copilot-cli/issues/4202

7. **[#1947] 功能请求：云同步会话，实现跨设备连续性**  
   作者：robgrame | 评论 4 | 👍 6  
   会话存储在本地 `~/.copilot/`，无法跨设备同步。用户希望像 IDE 一样云同步会话历史，该需求已关闭但仍具参考价值。  
   https://github.com/github/copilot-cli/issues/1947

8. **[#4370] Copilot CLI 1.0.79-1 在 MCP 初始化时失败**（新增）  
   作者：cobey | 评论 1 | 👍 0  
   当 MCP 服务器响应 `server/discover` 方法为 `-32602` 时，CLI 将其视为致命错误，导致无法连接基于 FastMCP 的服务器。可能是协议兼容性问题。  
   https://github.com/github/copilot-cli/issues/4370

9. **[#4361] 回归：调用插件技能斜杠命令不再工作**（新增）  
   作者：malcolms | 评论 1 | 👍 0  
   桌面应用客户端原本会将 `/plugin-skill-name` 重写为自然语言指令，现在改为发送 `session.commands.invoke` RPC，导致命令失败。涉及命令行与客户端协作的回归。  
   https://github.com/github/copilot-cli/issues/4361

10. **[#4349] 托管设置策略出错阻止所有本地/自定义 MCP 服务器**（新增）  
    作者：ModelkinIY | 评论 1 | 👍 0  
    当 GHE 返回 `permissions.disableBypassPermissionsMode` 值为 `"enable"` 时，CLI 的 schema 验证只接受 `"disable"`，导致策略获取失败并关闭所有 MCP 服务器。企业配置兼容性问题。  
    https://github.com/github/copilot-cli/issues/4349

## 重要 PR 进展
过去 24 小时内仅更新 2 个 PR，均处于打开状态：

1. **#4366 [ACTION REQUIRED] 修复 copilot-cli 的安全发现**  
   作者：vault-chatops[bot]  
   由 Vault 机器人创建的 PR，要求解决 `ci, production` 环境中的安全发现。需要手动替换 `<UPDATE_ME>` 占位符后合并。  
   https://github.com/github/copilot-cli/pull/4366

2. **#4355 [OPEN] Merge**  
   作者：XavierMP14  
   无描述，可能是误操作或未完成 PR。  
   https://github.com/github/copilot-cli/pull/4355

> 注意：数据源仅提供 2 个 PR，因此无法列出 10 个。当前 PR 活动较少，社区活跃度主要体现在 Issues 与 Releases 上。

## 功能需求趋势
从近期 Issues 中提炼的社区最关注功能方向：
- **主题与 UI 定制**：#1504 自定义主题、#3898 深色背景下的黑色文本问题，用户希望更好的终端可视化适配。
- **会话管理增强**：#1697 会话分叉、#1947 云同步会话、#2019 删除会话命令，显示用户对会话工作流复杂管理的需求。
- **插件系统完善**：#1709 插件自动更新（👍 29）、#4048 仓库级插件技能无法作为斜杠命令触发，插件生态的易用性和自动化成为关注点。
- **模型与 BYOK 支持**：#4139 自带 LLM 模型端点、#4196 BYOK 流式响应中的 `reasoning_content` 问题，用户期望更高的模型可配置性。
- **MCP 兼容性**：#2692 Web Search 工具错误、#4370 MCP 初始化失败、#4349 策略阻塞 MCP，显示 MCP 服务器集成仍有不少边界问题。
- **非交互/自动化能力**：#4202 view 工具回归、#4174 ACP 不暴露 token 用量，说明自动化集成场景需要更稳定的工具和可观测性。

## 开发者关注点
- **配置变更的破坏性**：v1.0.79-1 重命名沙箱设置后，旧配置被静默忽略，用户可能面临无感知的安全策略变化。建议升级前检查配置。
- **回归问题频发**：多个版本回归（如 #4202、#4361、#4328）表明在功能迭代中基础编辑、工具调用稳定性需要加强。
- **企业/组织级配置兼容性**：#1285 Agent 不显示、#4005 计费实体、#4349 策略值校验等都是企业环境特有痛点，需要更充分的验证。
- **Windows/WSL2 体验**：#4328 键位误判、#4026 反复崩溃、#4267 终端转义序列预填，Windows 下的稳定性和输入处理问题集中。
- **高赞需求长期未实现**：如 #1709（插件自动更新）和 #1697（会话分叉）拥有大量积极反馈但仍在 open 状态，社区期待官方优先考虑这些工作流增强功能。

---
本日报基于 GitHub 公开数据自动生成，仅供参考。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 — 2026-08-05

## 今日速览
今日社区焦点集中在 Agent 稳定性与跨设备工作流上：用户报告了高上下文（约 500K tokens）下指令漂移和重复动作循环的问题（#2586），同时 Windows 平台 IME 输入异常（#2584）和会话中途崩溃（#2587）也在影响使用体验。功能需求方面，记忆系统（#1283）与远程控制（#1282）话题热度不减，显示用户正将 Kimi Code CLI 定位为长期运行、多端协同的 Agent 工具。

## 版本发布
过去 24 小时无新 Release。

## 社区热点 Issues
以下为过去 24 小时更新的 6 条 Issue，全部值得关注：

1. **高上下文填充时 Agent 可靠性下降**（#2586，已关闭）  
   - 链接: https://github.com/MoonshotAI/kimi-cli/issues/2586  
   - 用户在多步代码变更的长会话中观察到：当上下文填充超过约 500K tokens（用户自行测量，非官方限制）后，Agent 出现重复动作循环、无法自动升级、指令漂移等现象，可靠性急剧下降。这是目前 Agent 类工具普遍面临的上下文窗口管理难题，虽被关闭，但讨论价值很高。

2. **Feature Request: 远程控制（#1282，24 👍）**  
   - 链接: https://github.com/MoonshotAI/kimi-cli/issues/1282  
   - 希望从手机、平板或任意浏览器继续本地 Kimi Code CLI 会话，实现“离开工位不断线”的工作流连续性。获得 24 个 👍，是当前社区高需求功能之一。

3. **Feature Request: 记忆系统（#1283，17 条评论）**  
   - 链接: https://github.com/MoonshotAI/kimi-cli/issues/1283  
   - 提出实现自动记忆（AI 管理笔记）与手动记忆（用户定义指令）相结合的跨会话持久上下文，既能记录项目模式与用户偏好，又需要可控性。评论数达到 17 条，讨论热烈。

4. **Bug: 正常推进会话时 Kimi CLI 异常退出（#2587）**  
   - 链接: https://github.com/MoonshotAI/kimi-cli/issues/2587  
   - 用户反馈在 v0.29.2 / K3 high 模型、Windows x64 平台下，会话正常推进过程中 CLI 会崩溃。影响核心编码流程，属于稳定性高优先级问题。

5. **Bug: Windows 下泰语及其他 IME 字符重复（#2584）**  
   - 链接: https://github.com/MoonshotAI/kimi-cli/issues/2584  
   - 在 Windows 11 上使用 v0.31.1 时，提示输入框中输入泰语等 IME 字符会出现重复。对非英文用户影响明显，需要优先修复输入处理逻辑。

6. **feat(acp): 发布可用模型并支持会话中模型切换（#2583）**  
   - 链接: https://github.com/MoonshotAI/kimi-cli/issues/2583  
   - 当通过 ACP 协议驱动 `kimi acp`（如 Zed、Happy Coder 移动端）时，客户端无法发现可用模型列表，也无法在会话中切换模型。这限制了 ACP 生态下的集成灵活度，是提升第三方客户端体验的关键改进。

## 重要 PR 进展
过去 24 小时共 3 个 PR 有更新：

1. **fix(shell): 为长命令自动调整超时（#2200）**  
   - 链接: https://github.com/MoonshotAI/kimi-cli/pull/2200  
   - 针对 git submodule 清理、clone/fetch、包安装和构建等常见慢命令，自动扩展 shell 超时时间；普通命令保持 60 秒默认值，调用方已指定超时时则尊重原有设定。能有效减少长任务被误杀的情况。

2. **feat(cli): 为子进程设置 `AI_AGENT` 环境变量（#2585）**  
   - 链接: https://github.com/MoonshotAI/kimi-cli/pull/2585  
   - 在 pip/uv 与独立二进制两种入口启动的子进程中暴露 `AI_AGENT=kimi`，同时保留包装器或编排者显式传入的非空值，便于上层工具识别当前 Agent 身份，改善生态集成。

3. **feat(acp): 支持权限模式切换（#2364）**  
   - 链接: https://github.com/MoonshotAI/kimi-cli/pull/2364  
   - 为 Kimi 会话新增协议级 ACP 权限模式切换，可广播默认权限模式并支持动态切换。解决 Issue #1414，为 ACP 客户端提供更细粒度的授权控制。注意：该 PR 依赖 #2363，需按顺序合并。

## 功能需求趋势
从近期 Issue 反馈中可以看到几个明确的功能方向：
- **持久化记忆**：跨会话保留项目模式、用户偏好和上下文（#1283）。
- **跨设备远程控制**：手机/浏览器接管本地会话，强调流程连续性（#1282）。
- **模型发现与会话内切换**：尤其在 ACP 客户端中，需要动态获取模型列表并随时切换（#2583）。
- **高上下文场景下的可靠性**：不是增加 token 上限，而是在长对话中保持 Agent 行为一致性（#2586）。

总体趋势是：Kimi Code CLI 正在从“单次代码生成工具”向“可长期驻留、跨平台协同的 Agent 工作台”演进。

## 开发者关注点
- **高上下文稳定性**：超出 500K tokens 后出现重复动作、指令漂移，是 Agent 化工具的核心痛点，需要更智能的上下文压缩或行为监控机制。
- **Windows 平台体验**：IME 字符重复、普通会话崩溃等平台相关问题反馈集中，Windows 用户基数不容忽视。
- **ACP 生态成熟度**：模型列表缺失与无法切换权限/模型，限制了移动端等第三方客户端的使用场景。
- **长命令执行**：慢速命令超时问题长期存在，社区已有成熟补丁（PR #2200）等待合入。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-08-05

## 今日速览

v1.18.13 补丁发布，重点修复桌面端 RTL 布局问题及 TUI 中 GitHub PR 评论缺失上下文的问题。社区层面，**DeepSeek V4 Flash 的可用性危机**成为绝对焦点——大量用户报告空响应、403 错误、模型版本不匹配等问题，且多与 OpenCode Go 订阅服务相关。此外，AI 层工具调用语义修复、实验性渲染性能改进等一批 PR 密集推进，社区对 Go 订阅用量 API 与 SKILL.md 细粒度控制等能力的需求持续升温。

## 版本发布

### [v1.18.13](https://github.com/anomalyco/opencode/releases/tag/v1.18.13)

**TUI 修复**
- GitHub Pull Request 评论现在会包含 PR 编号与 URL 上下文。

**Desktop 修复**
- 修复多个标签页、抽屉、窗口调整及标题栏交互中的 RTL（从右到左）布局问题。
- 修复共享的 RTL UI 行为，如方向性图标显示。

## 社区热点 Issues

精选 10 个当前最受关注或讨论最激烈的 Issue：

1. **[#16017 [FEATURE] 添加 Go plan 用量/余额 API 端点](https://github.com/anomalyco/opencode/issues/16017)** · 29 评论 · 👍 126
   用户要求通过公开 API 端点暴露 Go 订阅的用量与余额数据（支持滚动/周/月窗口）。目前数据仅展示在仪表盘中，无法编程访问。以 126 个 👍 高居需求榜首，说明头部用户对可观测性和自动化审计有强烈诉求。

2. **[#39845 DeepSeek V4 Flash 突然要求“启用中国托管模型”](https://github.com/anomalyco/opencode/issues/39845)** · 15 评论 · 👍 22
   用户在会话中途被中断，提示“该模型最新版本仅在中国托管，需要显式开启 opt-in”。此类突发的区域性模型托管策略变更缺少预告与替代方案，造成工作流中断。

3. **[#22235 IDE (VSCode): Context Awareness 功能不生效](https://github.com/anomalyco/opencode/issues/22235)** · 12 评论 · 👍 7
   用户反馈类似 Claude Code 的自动关联选中文本/文件功能在 VSCode 扩展中始终无效，不确定是配置问题还是功能未实现。IDE 集成体验是持续的社区热点。

4. **[#34498 [FEATURE] 支持 SKILL.md 中 disable-model-invocation: true](https://github.com/anomalyco/opencode/issues/34498)** · 9 评论 · 👍 48
   建议跟随 Claude Code 与 Cursor 的做法，在 SKILL.md frontmatter 中支持禁用模型主动调用的字段。该需求获得 48 个 👍，反映高级用户对 Skill 行为可控性的期待。

5. **[#40483 DeepSeek v4 Flash Free 在 Windows 11 桌面端返回空白响应](https://github.com/anomalyco/opencode/issues/40483)** · 7 评论
   桌面应用显示“思考中”动画并播放完成提示音，但响应区始终空白，UI 疑似挂起。DeepSeek V4 Flash 在桌面端的空响应问题在今天形成了爆发式报告。

6. **[#40485 deepseek-v4-flash 经 opencode-go 返回 403/挂起](https://github.com/anomalyco/opencode/issues/40485)** · 6 评论 · 👍 6
   同一 API 密钥下 `deepseek-v4-pro` 与 `minimax-m3` 正常，唯独 `deepseek-v4-flash` 出现 403 或挂起，指向 OpenCode Go 网关中的模型路由或配额判定错误。

7. **[#40409 OpenCode Go 的 deepseek-v4-flash 实际返回 V3.2](https://github.com/anomalyco/opencode/issues/40409)** · 5 评论
   Go 订阅通道中声称的 V4 Flash 模型实际返回 V3.2（知识截止 2025-05），与标称版本严重不符。用户提出这是“计费/质量不匹配”的高严重性问题。

8. **[#36646 复制粘贴在 Tmux + Kitty 下失效](https://github.com/anomalyco/opencode/issues/36646)** · 4 评论
   全屏 TUI 自带的复制粘贴例程与终端/Tmux 的交互不兼容，导致在 Kitty 终端运行 tmux 时复制粘贴不可用。该问题已长期存在且关联多个历史 Issue。

9. **[#38723 `opencode run` 间歇性挂起，失败率约 56%](https://github.com/anomalyco/opencode/issues/38723)** · 4 评论 · 👍 1
   进程存活但无任何输出、无错误，日志停留在 `message=init`，只能靠外部超时终止。间歇性而非确定性故障使排查极为困难，严重影响 CI 自动化场景。

10. **[#40171 Go 服务 /v1/responses 的 SSE 事件流不完整](https://github.com/anomalyco/opencode/issues/40171)** · 3 评论 · 👍 2
    流式响应缺少 `response.output_item.added` 与 `response.content_part.added` 事件，导致 Codex 风格客户端无法正确处理。API 兼容性问题影响第三方生态工具接入。

## 重要 PR 进展

精选 10 个值得关注的 PR：

1. **[#40545 fix(opencode): 为 run --format json 步骤事件添加模型归属](https://github.com/anomalyco/opencode/pull/40545)**
   `step_start`/`step_finish` 事件原先不携带模型信息，导致无头消费者无法归因 token 和成本。此修复完整闭合 #40544，对成本追踪场景很重要。

2. **[#40549 fix(ai): 分类格式错误的 Responses 工具调用](https://github.com/anomalyco/opencode/pull/40549)**
   区分正常解码的 Responses 函数调用与畸形输入，将仅含畸形客户端工具输入的完成响应规范化为 `error` 而非 `tool-calls`，并保留输出限制与内容过滤的优先级。

3. **[#40547 fix(ai): 推导 Anthropic 工具完成原因](https://github.com/anomalyco/opencode/pull/40547)**
   跟踪解析器中已成功解码的客户端执行工具调用，将 `end_turn` 或缺少原生 reason 的情况在存在本地工具工作时规范化为 `tool-calls`，同时保留 `raw` 中的原始 Anthropic 值。

4. **[#40546 fix(ai): 保留 Gemini 工具完成语义](https://github.com/anomalyco/opencode/pull/40546)**
   修复 Gemini 响应中尽管解析到客户端工具调用但终止事件缺失 `finishReason` 时被误判的问题，同时不臆造 provider 原生 reason。

5. **[#40542 fix(core): 澄清平台工具故障](https://github.com/anomalyco/opencode/pull/40542)**
   缺失 shell 工作目录时给出直接可操作的错误消息；结构化 Effect 平台故障信息为 reason/target/OS 细节，不再暴露内部操作名，改善排错体验。

6. **[#40427 [beta] 实验性渲染性能改进](https://github.com/anomalyco/opencode/pull/40427)**
   基于固定 24 小时语料库快照的基准测试显示，初始渲染器入口内存从 7.45 MB 降至 1.82 MB（**-75.5%**）。对低配机器和大会话场景有明显感知提升。

7. **[#40537 fix(opencode): 将 xAI OAuth 改为仅设备流](https://github.com/anomalyco/opencode/pull/40537)**
   以 RFC 8628 设备认证替换 loopback OAuth，删除本地回调服务器、PKCE 与 CORS 逻辑。使得 SuperGrok 订阅在本地和远程环境都能可靠工作。

8. **[#40487 fix(core): 退役遗留 Provider 别名](https://github.com/anomalyco/opencode/pull/40487)**
   移除 Azure Cognitive Services 与 Google Vertex Anthropic 作为独立 provider 注册，自动迁移 V1 配置中的遗留 provider ID，并阻止 V2 配置创建同义别名。

9. **[#40403 feat(session): 空闲后恢复的陈旧会话自动压缩](https://github.com/anomalyco/opencode/pull/40403)**
   针对长时间未操作的旧会话，在恢复后自动执行压缩，避免每轮交互都重复发送完整对话前缀，直接解决长会话成本膨胀问题。

10. **[#40509 fix(core): 门控持久事件持久化](https://github.com/anomalyco/opencode/pull/40509)**
    新增 `persistDurableEvents` 选项，V1 App 与 HTTP 运行时默认关闭持久化事件，同时保持原子 projector、sequence 水位与实时通知不变，降低 I/O 开销。

## 功能需求趋势

从今日更新的 Issue 与 PR 中，可以提炼出以下社区关注方向：

- **可编程用量/计费数据**：#16017 要求开放 Go 订阅用量与余额的 API 端点，帮助用户做自动化成本管理与审计。
- **SKILL.md 细粒度控制**：#34498 申请支持 `disable-model-invocation`，对齐 Claude Code/Cursor 的 Skill 行为控制模型。
- **IDE 选择上下文感知**：#22235 与 #40540 共同指向 VSCode 扩展未能正确感知用户选中文本与活动标签页，直接影响日常使用。
- **打包与分发体系完善**：#39670 提出 Flatpak 集成方案，包括用 `FLATPAK_ID` 门控自动更新并接入 Flathub UpdateMonitor 门户。
- **性能优化持续升温**：#40427 PR 展示了 75% 的初始渲染内存削减，实验性性能优化正成为近期主旋律。
- **会话成本管理**：#40403 自动压缩陈旧会话的 PR，与 #16017 的需求同频——用户对 token 成本与上下文效率越来越敏感。
- **认证流现代化**：#40537 将 xAI OAuth 迁移到设备流，简化远程环境下的订阅认证。

## 开发者关注点

总结今日反馈中最集中的痛点：

- **DeepSeek V4 Flash 全链路问题**：今天至少有 6 个独立 Issue 报告该模型在 OpenCode Go 通道上的异常——空白响应（#40483）、403/挂起（#40485）、版本回退（#40409）、普遍不可用（#40460、#40478、#40492）。无论 TUI、Desktop 还是 Go API 均受影响，社区情绪明显焦虑。
- **Go 订阅服务的可信度受损**：模型变更策略突然（#39845）、返回模型与标称不符（#40409）、同密钥不同模型行为不一致（#40485），这些都在动摇用户对 OpenCode Go 服务的信任。
- **桌面应用版本回归**：#40516 指出 v1.18.5 至 v1.18.13 的所有版本在约 80% 启动时无法加载 provider/model/MCP 信息，回退到 v1.18.4 才能恢复——严重阻碍组织级部署。
- **CLI 稳定性**：`opencode run` 在 init 阶段间歇性挂起且无日志输出（#38723），对无人值守的 CI 场景是致命的。
- **历史遗留问题长期未解**：Tmux + Kitty 下的复制粘贴问题（#36646）已关联多个旧 Issue，至今仍无修复合入。
- **API 兼容性是生态扩展的短板**：SSE 事件流不完整（#40171）阻碍 Codex 风格客户端接入，可能限制 OpenCode 作为基础设施的吸引力和第三方生态发展。

> 报告生成时间：2026-08-05 · 数据来源：github.com/anomalyco/opencode

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报（2026-08-05）

数据来源：github.com/badlogic/pi-mono

## 今日速览

今日社区热度集中在 **Copilot Enterprise 环境下 `/compact` 压缩功能持续失败**（421 Misdirected Request / unknown stamp），多条相关 Issue 讨论度高，企业用户受影响明显。PR 侧亮点为 **Mermaid 渲染、可配置压缩模型、失败轮次恢复** 等功能进入开发流程；OAuth 安全修复与企业级 provider（Cortecs、LLM Gateway）接入也获重要进展。此外，**Windows 支持现状调查**今日更新，社区正系统收集痛点。

过去 24 小时无新版本发布。

## 社区热点 Issues

### 1. [已关闭] Compaction using Copilot Enterprise not possible（评论 19 · 👍 18）
**作者**: MojangPlsFix | 更新: 2026-08-04
链接: https://github.com/earendil-works/pi/issues/6768
Copilot Enterprise 授权下压缩 context 失败：OpenAI 路径返回 `421 Misdirected Request`，Anthropic 路径同样压缩失败。当前评论与 👍 数最高的 Issue，反映企业用户对压缩功能稳定性的迫切诉求。

### 2. [开启中] How do you use Pi on Windows?（评论 12）
**作者**: petrroll | 更新: 2026-08-05
链接: https://github.com/earendil-works/pi/issues/7547
发起 Windows 使用方式与问题收集，目标是为核心维护确定精力投向（修 Bug、文档、开箱即用）与外部扩展的边界。今日有更新，Windows 兼容性持续升温。

### 3. [已关闭] terminal scrolls to beginning without reason（评论 11 · 👍 1）
**作者**: markokocic | 更新: 2026-08-04
链接: https://github.com/earendil-works/pi/issues/5023
模型输出过程中终端随机跳到会话开头再快速滚回末尾，且与用户操作无关。属于高频但难稳定复现的 TUI 异常，引发大量用户共鸣。

### 4. [已关闭] anthropic-messages never sends x-client-request-id（评论 10）
**作者**: mteam88 | 更新: 2026-08-04
链接: https://github.com/earendil-works/pi/issues/7161
`anthropic-messages` 路径缺少 `x-client-request-id` header，导致依赖该字段做会话亲和的网关（如多 Claude 账号轮询代理）无法聚合同一会话。对网关类用户影响直接。

### 5. [开启中] Add payload size to iTerm2 inline images（评论 7）
**作者**: Trolann | 更新: 2026-08-04
链接: https://github.com/earendil-works/pi/issues/7465
请求在 OSC 1337 序列中加入 `size` 参数，否则 `@xterm/addon-image@0.9.0` 会静默拒绝渲染，导致 xterm.js 终端中 Pi 图片无法显示。

### 6. [开启中] Compaction fails on GHE.com enterprise accounts — "unknown stamp" error（评论 6）
**作者**: timnee | 更新: 2026-08-04
链接: https://github.com/earendil-works/pi/issues/7413
GHE.com 企业账户执行 `/compact` 每次失败：`400 IDE authentication failed: invalid token: unknown stamp "prod-cus-01"`，普通对话正常。与 #6768 同属 Copilot 企业压缩问题群。

### 7. [开启中] Configurable thinking level/model for compaction（评论 6）
**作者**: Saolence | 更新: 2026-08-04
链接: https://github.com/earendil-works/pi/issues/7553
压缩（自动/手动）无条件复用当前会话的 thinking level，推理模型用户无法为压缩单独设置思考预算。PR #7602 已关联此需求，是当前压缩功能演进的重要方向。

### 8. [已关闭] TUI chat scroll jumps when tool blocks grow above viewport（评论 2）
**作者**: x0retnop | 更新: 2026-08-05
链接: https://github.com/earendil-works/pi/issues/7616
工具执行块超出视口高度时，差分渲染器触发全屏清空重绘（`\x1b[2J`），聊天滚动位置丢失，且缺少 PageUp/PageDown 历史滚动。今日更新，属较新的 TUI 体验回归。

### 9. [已关闭] 0.83.0 shrinkwrap pins vulnerable undici and brace-expansion（评论 1）
**作者**: Colin-Torta | 更新: 2026-08-04
链接: https://github.com/earendil-works/pi/issues/7628
0.83.0 发布包 shrinkwrap 锁定 `undici@8.5.0` 与 `brace-expansion@5.0.7` 两个已知漏洞版本，`npm audit` 明确报告。安全供应链问题值得开发者关注。

### 10. [已关闭] node:sqlite missing in release binary causing plugin breakage（评论 4）
**作者**: icedream | 更新: 2026-08-04
链接: https://github.com/earendil-works/pi/issues/7594
发布二进制缺少 `node:sqlite` 内建模块，导致依赖它的扩展（如 pi-total-recall）加载失败：`No such built-in module: node:sqlite`。直接影响插件生态可用性。

## 重要 PR 进展

### 1. [开启中] fix: make extension selector with looong diffs scrollable in fullscreen mode
**作者**: Snail-Turbo | 更新: 2026-08-05
链接: https://github.com/earendil-works/pi/pull/7597
全屏模式下扩展选择器遇到超长 diff 时可滚动查看，并固定 yes/no 操作按钮；新增 `tui.select.scrollUp/scrollDown` 键位（`[` / `]`），兼顾无鼠标/触控场景。

### 2. [开启中] fix: retry transient management HTTP requests
**作者**: petrroll | 更新: 2026-08-04
链接: https://github.com/earendil-works/pi/pull/7632
对所有幂等管理请求（pi.dev、gh releases、tools 等）增加重试机制，修复 #6675。刻意不限制单次超时，避免慢网络下引入新问题。

### 3. [开启中] feat(coding-agent): render Mermaid diagrams
**作者**: xl0 | 更新: 2026-08-04
链接: https://github.com/earendil-works/pi/pull/7624
使用 grok-mermaid 库在 markdown 中渲染 Mermaid 图，关闭 #7623。满足"一图胜千言"的图表可视化需求。

### 4. [已关闭] feat(ai): add built-in Cortecs provider support
**作者**: Henrik-3 | 更新: 2026-08-04
链接: https://github.com/earendil-works/pi/pull/7571
新增欧洲 AI provider/router Cortecs（类似 OpenRouter），基于 models.dev 自动接入模型列表。欧洲本土模型服务进入 Pi 生态。

### 5. [开启中] feat(ai): add LLM Gateway and LLM Gateway DevPass providers
**作者**: RATCHAW | 更新: 2026-08-04
链接: https://github.com/earendil-works/pi/pull/7610
新增 OpenRouter 风格 LLM Gateway 及其 DevPass 订阅两个内置 provider，共享端点与请求格式、仅账户区分。取代被自动关闭的 #7480。

### 6. [开启中] fix(tui): add size param to iterm2 image encoder to support xterm.js image addon
**作者**: rwachtler | 更新: 2026-08-04
链接: https://github.com/earendil-works/pi/pull/7612
在 iTerm2 OSC 1337 序列中加入解码字节数 `size` 参数，满足 `@xterm/addon-image@0.9.0` 的校验，对应 Issue #7465。

### 7. [已关闭] feat(rpc): expose argument completions via get_argument_completions
**作者**: fan92rus | 更新: 2026-08-04
链接: https://github.com/earendil-works/pi/pull/7621
新增 RPC 命令 `get_argument_completions`，让嵌入式客户端（如 web UI pi-livecraft）获得斜杠命令的子命令/参数补全数据，此前仅为 TUI 内部能力。

### 8. [开启中] feat(coding-agent): resume failed turn by selecting it in /tree
**作者**: arajkumar | 更新: 2026-08-04
链接: https://github.com/earendil-works/pi/pull/7619
在 `/tree` 中选择因断连等错误结束的 assistant 条目可直接重试该轮次；错误记录保留，重试结果续写其下，关闭 #7609。

### 9. [开启中] feat(coding-agent): configurable summarization models
**作者**: haoqixu | 更新: 2026-08-04
链接: https://github.com/earendil-works/pi/pull/7602
为压缩与分支摘要添加可配置的模型与 thinking level，并处理 provider 错误时的上下文窗口限制，关闭 #7553。

### 10. [已关闭] fix(ai): keep response bodies out of OAuth error messages
**作者**: addoxyz | 更新: 2026-08-04
链接: https://github.com/earendil-works/pi/pull/7605
OAuth token 端点响应体包含 access/refresh token，失败响应可能回显请求参数；该 PR 防止敏感内容进入日志、遥测与用户对话框，属安全加固。

## 功能需求趋势

- **Compaction 可配置化与稳定性**：多起 Copilot Enterprise/GHE.com 压缩失败报告（#6768、#7413、#7579）叠加"独立 thinking level/模型配置"需求（#7553），压缩功能是企业用户当前最关心的模块。
- **新模型服务商加速接入**：Cortecs（#7571）、LLM Gateway（#7610）、Qwen Token Plan Individual（#7631）、Grok 4.5 模型列表缺失（#7560）等 PR/Issue 密集出现，社区对模型选择广度要求高。
- **终端可视化增强**：Mermaid 渲染（#7623/#7624）、iTerm2 图像 `size` 参数（#7465/#7612），终端内图形与图表信息展示需求上升。
- **嵌入式/RPC 生态扩展**：RPC 暴露参数补全（#7621）、provider 认证流程（#7590），web UI 等嵌入式客户端生态开始活跃。
- **Windows 一等公民化**：#7547 主动发起 Windows 现状调查，find 路径模式（#6817）、skills 加载（#7427）等 Windows 专属 Bug 陆续修复中。

## 开发者关注点

- **Copilot 企业压缩不可用**：普通对话正常、唯独 `/compact` 报 421 或 `unknown stamp`（#6768、#7413、#7579），已有多条独立报告，企业用户受阻明显。
- **TUI 体验类回归**：终端随机滚动跳变（#5023）、工具块超高触发全屏重绘导致滚动位置丢失（#7616）、失败请求重试成功后残留红色错误行（#7613）、全屏模式 Home/End/PageUp/PageDown 被视口吞掉（#7574）。
- **依赖安全与供应链**：0.83.0 shrinkwrap 固定存在漏洞的 `undici` 与 `brace-expansion` 版本（#7628）；OAuth 错误信息可能泄露 token（#7605），安全敏感度明显提升。
- **文件读取数据保真**：`read` 工具读取 `.json` 时解析对象并按 JS 键序重排，破坏原始文件内容（#7633，今日新增）。
- **环境信息可诊断性不足**：`version` 指令不展示运行时（bun/node/deno），大量环境相关问题难以快速定位（#7244）。
- **发布物完整性**：发布二进制缺少 `node:sqlite`，直接导致依赖它的插件（pi-total-recall）无法加载（#7594）。
- **配置合并语义陷阱**：项目级 `retry.provider` 整体覆盖全局配置而非递归合并（#7572），静默丢失未覆盖的全局重试设置。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-08-05）

## 今日速览

v0.21.5 正式版发布，为 macOS 用户带来 Electron→Tauri 迁移桥梁，并引入工具调用结果追踪能力。社区层面，安全与可靠性成为讨论焦点——`trustworthy agent runtime` 提案获得 17 条评论，多个关于取消/超时后状态一致性的 bug 被集中报告。PR 侧则围绕 review/autofix 基础设施优化和 CLI 交互体验改进持续发力。


## 版本发布

| 版本 | 类型 | 主要变化 |
|---|---|---|
| [v0.21.5](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.5) | 正式版 | 新增 macOS 用户从 Electron 桌面应用迁移到 Tauri 壳的 opt-in 一次性更新桥梁（[#8392](https://github.com/QwenLM/qwen-code/pull/8392)）；引入工具调用执行级详细结果追踪 |
| [v0.21.6-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.6-preview.0) | 预览版 | browser-ext 新增 alpha 就绪性诊断；补充 headless Goal 工作流文档 |
| [v0.21.5-nightly.20260805.32e274157](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.5-nightly.20260805.32e274157) |  nightly | 同 v0.21.6-preview.0（browser-ext 诊断 + 文档） |
| [v0.21.4-nightly.20260804.d6f55a1c9](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.4-nightly.20260804.d6f55a1c9) | nightly | desktop：Electron 用户迁移到 Tauri 更新通道；web-shell：修复 table dialog 相关问题 |


## 社区热点 Issues（10 个）

### 1. 确定性工具执行边界的可信 Agent 运行时提案
[#8102](https://github.com/QwenLM/qwen-code/issues/8102) · [OPEN] · 评论 17 · P3/feature-request

提议将 LLM 置于信任边界之外，让运行时能够确定性地约束、授权、观察和评估模型产生的动作。这是社区对 Agent 安全架构最深入的讨论，17 条评论表明开发者对“可信运行时”方向的强烈关注。

### 2. tmux 中严重闪屏
[#8519](https://github.com/QwenLM/qwen-code/issues/8519) · [OPEN] · 评论 11 · P2/bug

在 tmux 中使用 Qwen Code 几乎每秒闪屏一两次，严重影响 Linux 终端用户体验。这是当前评论最多的 bug 类 issue，反映终端兼容性仍是 CLI 工具的痛点。

### 3. 多工作区 daemon 资源使用需有界化
[#8051](https://github.com/QwenLM/qwen-code/issues/8051) · [OPEN] · 评论 9 · P2/feature-request

当前 daemon 只限制工作区和会话数量，但未限制请求体、WebSocket 组装等占用的字节数。社区希望有真正的内存/资源上限控制。

### 4. Provider 警告清理器泄露含 `@` 的密码
[#8136](https://github.com/QwenLM/qwen-code/issues/8136) · [OPEN] · 评论 6 · P2/security

`sanitizeProviderWarning` 在截断含端口消息的同时，会泄露包含 `@` 字符的密码凭据。涉及 `/status` 接口的安全敏感 bug。

### 5. APIUserAbortError 后后续轮次不再写入会话记录
[#8356](https://github.com/QwenLM/qwen-code/issues/8356) · [OPEN] · 评论 5 · P2/bug

用户中断（abort）后，后续对话轮次无法写入本地会话记录。对依赖会话恢复的重度用户影响较大。

### 6. 已取消的文件工具仍可修改文件
[#8493](https://github.com/QwenLM/qwen-code/issues/8493) · [OPEN] · 评论 5 · P2/bug

`write_file` 和 `edit` 在调用被取消后仍可能执行文件系统写入。异步准备阶段未响应 abort 信号，属于核心可靠性缺陷。

### 7. `qwen mcp list` 在无响应的 SSE 服务器上无限挂起
[#8550](https://github.com/QwenLM/qwen-code/issues/8550) · [OPEN] · 评论 3 · P2/bug

当 MCP 服务器使用 SSE 传输但迟迟不发送 `endpoint` 时，`qwen mcp list` 会永久阻塞而非超时返回。今日新提交的 issue，直指 MCP 生态工具链的健壮性。

### 8. Content[]/Part[] 无法安全编码推理回放契约
[#8533](https://github.com/QwenLM/qwen-code/issues/8533) · [OPEN] · 评论 4 · P2/架构

指出核心数据结构设计层面的根本性问题：不同提供方的 reasoning-replay 语义无法用现有 Content/Part 模型安全表达。属于影响深远的架构讨论。

### 9. `--resume` 可重建已修复的悬空未签名思维风险
[#8535](https://github.com/QwenLM/qwen-code/issues/8535) · [OPEN] · 评论 3 · P2/bug

PR #8260 修复的“未签名 trailing thought 紧跟 tool_use”的隐患，通过 `--resume` 可被重新构造。说明会话持久化路径的修复覆盖不完整。

### 10. [ACP] JetBrains 中任务列表不渲染
[#8544](https://github.com/QwenLM/qwen-code/issues/8544) · [OPEN] · 评论 3 · P2/bug

通过 ACP 在 JetBrains AI Assistant 中使用 Qwen Code 时，任务列表（plan updates）不显示，而 Claude Code 和 Codex 均正常。IDE 集成完整度是当前社区关注的重点方向。


## 重要 PR 进展（10 个）

### 1. 修复 hooks 系统的四个信任边界漏洞
[#8396](https://github.com/QwenLM/qwen-code/pull/8396) · [OPEN] · autofix/takeover

HTTP hooks 不再跟随重定向（防止 URL 白名单绕过和 DNS SSRF）；同时修复仓库控制的配置与代码执行/网络出口之间的其他三个边界。安全加固关键 PR。

### 2. 建立工作区运行时所有权边界
[#8213](https://github.com/QwenLM/qwen-code/pull/8213) · [OPEN]

为每个工作区的 ACP 子进程生命周期建立 Work​​spaceRuntime 所有权，引入五态运行时快照、单调 epoch、物理工作租约和有界启停行为。架构级改进。

### 3. 新增 Kimi 和小米 MiMo 提供商
[#8368](https://github.com/QwenLM/qwen-code/pull/8368) · [OPEN]

在 `/auth` 第三方提供商中新增 Kimi（含 Coding Plan、API Key 中国/国际三种接入方式）和小米 MiMo（按量付费 + 中国/新加坡等区域选项）。模型生态持续扩展。

### 4. 修复 MCP 调用重放判定逻辑
[#8482](https://github.com/QwenLM/qwen-code/pull/8482) · [OPEN]

从未送达的 MCP 调用应视为首次投递而非重放。该 PR 修复了自 replay-safety gate 合并以来一直失败的确定性测试，保障断线重连场景的正确性。

### 5. autofix review 阶段构建性能优化
[#8548](https://github.com/QwenLM/qwen-code/pull/8548) · [OPEN]

将 review CLI bundle 构建从每个 PR leg 重复执行改为只构建一次然后分发，显著减少多 PR 扫描时的 CI 耗时。

### 6. review 成本账本：从磁盘已有记录生成
[#8471](https://github.com/QwenLM/qwen-code/pull/8471) · [OPEN]

解决“0.21.3 正常、0.21.4 变慢”这类性能回归难以定位的问题——通过已有记录生成成本账本，避免手工聚合遥测数据的数小时取证过程。实现模型调用/输入 token 消耗的可观测性。

### 7. review 支持 Maven 多模块仓库
[#8416](https://github.com/QwenLM/qwen-code/pull/8416) · [OPEN]

将 build/test 作用域扩展到 Maven 多模块 monorepo，支持按变更文件映射到具体模块，同时加载 CLAUDE.md 规则。覆盖非 npm 工作区团队。

### 8. CLI 流式输出时支持点击展开/折叠思维块
[#8443](https://github.com/QwenLM/qwen-code/pull/8443) · [OPEN]

此前思维（thinking）块只能在模型完成输出后点击展开，流式期间点击被禁用。该 PR 移除了此限制。

### 9. VP 模式恢复 Ctrl+点击超链接和右键菜单
[#8439](https://github.com/QwenLM/qwen-code/pull/8439) · [OPEN]

Virtual Viewport 模式开启 SGR 鼠标追踪后，终端原生能力（点击超链接、右键菜单）失效。该 PR 在保持鼠标追踪的同时恢复了这两项功能。

### 10. ESC 优先取消正在进行的响应
[#8353](https://github.com/QwenLM/qwen-code/pull/8353) · [OPEN]

当 agent 正在响应时，ESC 现在会走全局取消逻辑，而不是被 InputPrompt 的队列弹出逻辑消费。修复用户需要多次 ESC 才能取消的问题。


## 功能需求趋势

从近期 Issue 和 PR 可以提炼出以下社区关注方向：

1. **安全与信任边界**（多 issue 高频出现）：确定性工具执行边界（#8102）、hooks 信任边界（#8396）、凭据清理漏洞（#8136）等表明，Agent 安全已成为社区最核心的关注点，不只是功能层面的安全，而是运行时架构层面的可信设计。

2. **ACP/IDE 集成完善**：任务列表渲染（#8544）、暴露 reasoning effort 档位配置（#8514）、context 使用量展示（#8513）等需求集中在 JetBrains 生态的深度集成上，用户期望 Qwen Code 在 ACP 协议支持下达到与 Claude Code / Codex 同级的体验。

3. **资源管理与性能可观测性**：daemon 资源有界化（#8051）、ACP 子进程内存分配（#8182）、成本账本（#8471）等体现出从“能用”到“可控可观测”的诉求。

4. **MCP 生态健壮性**：SSE 挂起（#8550）、metadata 热重载残留（#8492）等 bug 说明 MCP 相关的可靠性正在被更多用户触及。

5. **会话生命周期增强**：任意对话分叉点（PR #8274）、resume 安全性（#8535）、abort 后状态一致性（#8356）共同指向会话管理是高频需求领域。


## 开发者关注点

**痛点与高频反馈：**

- **取消/中断处理缺陷突出**：多个 bug 指向同一类问题——abort 后状态不一致（#8356 不写会话、#8493 仍改文件、#8491 信号终止报成功）。这说明取消路径的测试覆盖不足，需要系统性审查。

- **超时与重试策略**：#8527 指出包装后的超时错误丢失原始错误码，导致传输层重试机制永远无法触发。用户希望超时错误可自动重试，而非直接暴露给用户。

- **终端兼容性**：tmux 闪屏（#8519）是 Linux 用户最直接的体验痛点，类似问题可能还存在于其他终端复用器中。

- **安全敏感信息处理**：凭证清理器 bug（#8136）让用户对 `/status` 等诊断接口的信任度打折扣，安全问题需要优先修复。

- **review/autofix 基础设施持续加码**：大量 PR 围绕 review 流程的性能、成本、仓库适配性优化，说明该功能已被较多团队采用，正向生产级能力演进。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-08-05

> 数据来源：Hmbown/CodeWhale（即 DeepSeek-TUI） | 统计窗口：2026-08-04 更新

## 今日速览

v0.9.4 release train（#5135）持续整合中，但更值得关注的是维护者 Hmbown 密集提交的 7 个构建性能专项 issue——v0.9.5 的 "build-time lane" 计划已具雏形。与此同时，社区反馈集中在两个实际痛点：`File` 工具编辑误报成功导致返工（#5209），以及 1M 上下文模型被静默压缩至 128K（#5239）。Runtime API 有多达 5 个由 Copilot 提交的功能扩展 PR 等待评审。

## 社区热点 Issues

### 1. Epic: v0.9.5 build-time lane — 停止单体 crate 对每个编辑/提交/测试/发布流程的税收
- **#5249** | 作者: Hmbown | 创建: 2026-08-04 | 评论: 0 | [链接](https://github.com/Hmbown/CodeWhale/issues/5249)
- **为什么重要**：维护者亲自建立的 epic issue，将零散的编译耗时问题统一收敛。`codewhale-tui` 已达 682,959 行、620 文件，占 workspace 86%，每次改动触发全量重编。这是 v0.9.5 最明确的 roadmap 信号。

### 2. 模型支持 1M 上下文，为何工具在 128K 就触发压缩？
- **#5239** | 作者: hardy922 | 创建: 2026-08-04 | 评论: 1 | [链接](https://github.com/Hmbown/CodeWhale/issues/5239)
- **为什么重要**：直击实际使用体验——用户明确配置了 1M 窗口模型，但工具仍在 128K 就做上下文压缩。评论中确认这是 fallback 逻辑的残留问题，0.9.4 已部分缓解但未彻底解决。

### 3. File 工具 action=edit 静默接受错误参数并报假成功
- **#5209** | 作者: yekern | 创建: 2026-08-03 | 更新: 2026-08-04 | 评论: 3 | [链接](https://github.com/Hmbown/CodeWhale/issues/5209)
- **为什么重要**：使用 `new_str` 而非标准 `replace` 参数时，工具不报错反而返回"替换成功"，导致每个位置需要 3-5 次重复编辑。这是典型的 "silent failure" 高杀伤 bug，社区反馈强烈（3 条评论佐证返工成本）。

### 4. 本地 git commit 强制 codewhale-tui 和 codewhale-cli 全量重建
- **#5245** | 作者: Hmbown | 创建: 2026-08-04 | 评论: 0 | [链接](https://github.com/Hmbown/CodeWhale/issues/5245)
- **为什么重要**：build script 监听 git branch ref 以嵌入短 SHA，导致每次 commit 即使无源码变更也触发全量重建。这直接影响所有开发者的本地循环效率。

### 5. 708 包构建图 — 去重版本、裁剪特性、移除冗余栈
- **#5248** | 作者: Hmbown | 创建: 2026-08-04 | 评论: 0 | [链接](https://github.com/Hmbown/CodeWhale/issues/5248)
- **为什么重要**：95 个 build script + 52 个 proc-macro crate 串行编译，至少 10 个依赖同时存在 2-3 个版本。这是构建性能的系统性根源，量化数据极具说服力。

### 6. crates/tui 打包 25 个集成测试二进制，拖慢测试链接时间
- **#5247** | 作者: Hmbown | 创建: 2026-08-04 | 评论: 0 | [链接](https://github.com/Hmbown/CodeWhale/issues/5247)
- **为什么重要**：每个 `tests/` 根级 `.rs` 文件独立编译为完整的集成测试二进制，意味着 25 次大链接作业。测试体验优化是 v0.9.5 build-time lane 的重要组成。

### 7. OAuth 登录已铸造 token 却不采用——需要二次回到 provider picker
- **#5243** | 作者: Hmbown | 创建: 2026-08-04 | 评论: 0 | [链接](https://github.com/Hmbown/CodeWhale/issues/5243)
- **为什么重要**：维护者自己的 live dogfood 记录，xAI 交互式登录完成后 session 仍未获得可用凭据，必须回到选择器按 `e` 手动加载外部 token。流程断裂直接伤害新用户上手。

### 8. Pricing endpoint 返回 503，所有 session 显示 unverified_live_pricing
- **#5241** | 作者: alitvak69 | 创建: 2026-08-04 | 评论: 1 | [链接](https://github.com/Hmbown/CodeWhale/issues/5241)
- **为什么重要**：从 0.8.67 升级到 0.9.3 后成本显示完全失效，三个不同 provider 全部受影响。计费可见性对重度用户是核心信任指标。

### 9. Unknown model ids 静默降级到 128K legacy 默认值——请大声说出来
- **#5244** | 作者: Hmbown | 创建: 2026-08-04 | 评论: 0 | [链接](https://github.com/Hmbown/CodeWhale/issues/5244)
- **为什么重要**：#5239 的根源 issue。`context_window_for_model` 不认识模型 id 时静默使用 128K fallback，用户完全无感知。维护者提出应在界面上明确提示这是 fallback 值。

### 10. Anthropic API 兼容层报错 HTTP 400: 'type' must be in ["enabled", "disabled", "auto"]
- **#4978** | 作者: w1w218 | 创建: 2026-07-30 | 更新: 2026-08-04 | 评论: 6 | [链接](https://github.com/Hmbown/CodeWhale/issues/4978)
- **为什么重要**：使用 OpenModel 作为 Anthropic 兼容 provider 时高频报错，重试偶能通过但无固定规律。6 条评论是近期最热的 bug 讨论之一，涉及第三方 provider 兼容性。

## 重要 PR 进展

### 1. release: Codewhale v0.9.4 release train
- **#5135** | 作者: Hmbown | 状态: OPEN | 更新: 2026-08-04 | [链接](https://github.com/Hmbown/CodeWhale/pull/5135)
- v0.9.4 集成主线，当前 77 commits ahead of main。包含 18 个 train commits 及此前 #5044 的全部内容，是当前版本发布的唯一入口。

### 2. feat(tui/subagent): 从 checkpoint 恢复被中断的子代理
- **#5242** | 作者: SparkofSpike | 状态: OPEN | 更新: 2026-08-04 | [链接](https://github.com/Hmbown/CodeWhale/pull/5242)
- 修复 `agents/followup` 对 `interrupted_continuable` 子代理只能投递死信的问题。此前 checkpoint 保留但无法真正恢复，长任务中断后只能重新派发。

### 3. feat(acp): 在 session/prompt 中暴露 file/search/git/patch/shell 工具
- **#5225** | 作者: rafaelcavalheri | 状态: OPEN | 更新: 2026-08-04 | [链接](https://github.com/Hmbown/CodeWhale/pull/5225)
- ACP server 原只流式传输模型文本，从不执行工具调用。此 PR 让 Zed 等编辑器通过 ACP 获得完整代码编辑能力，消除 "chat-only agent" 短板。

### 4. feat(runtime-api): 暴露持久 goal-loop 状态与完成控制
- **#5133** | 作者: Copilot | 状态: OPEN | 更新: 2026-08-04 | [链接](https://github.com/Hmbown/CodeWhale/pull/5133)
- 新增 `GET /v1/threads/{id}/goal` 等端点，使托管客户端能读取 active-goal 状态并驱动生命周期转换。

### 5. Runtime API: 暴露 verifier receipts 与证据
- **#5132** | 作者: Copilot | 状态: OPEN | 更新: 2026-08-04 | [链接](https://github.com/Hmbown/CodeWhale/pull/5132)
- 在 `/v1/fleet/runs/{run_id}/` 下新增 `receipts` 端点，列出 durable task receipts，帮助确定失败任务的身份、原因与重试策略。

### 6. feat: Runtime API memory endpoints
- **#5131** | 作者: Copilot | 状态: OPEN | 更新: 2026-08-04 | [链接](https://github.com/Hmbown/CodeWhale/pull/5131)
- 为 `/v1/memory` 增加内存资源路由，支持受限检查与生命周期控制，托管客户端无需直接接触第二存储。

### 7. feat(runtime-api): 有界 MCP server 配置与生命周期管理
- **#5130** | 作者: Copilot | 状态: OPEN | 更新: 2026-08-04 | [链接](https://github.com/Hmbown/CodeWhale/pull/5130)
- 此前 MCP 仅支持只读清单，此 PR 新增 `POST /v1/apps/mcp/servers` 等变更路由，支持通过 HTTP 增改删 server 配置。

### 8. feat(runtime-api): skill 生命周期端点
- **#5129** | 作者: Copilot | 状态: OPEN | 更新: 2026-08-04 | [链接](https://github.com/Hmbown/CodeWhale/pull/5129)
- 为 skill 新增 install/update/uninstall/trust/audit 路由，统一受 `require_runtime_token` 保护，补全 TUI 之外的完整 skill 管理面。

### 9. feat(mcp): MCP Registry discovery 与 Registry-first 工具选择
- **#5238** | 作者: bistack | 状态: OPEN | 更新: 2026-08-04 | [链接](https://github.com/Hmbown/CodeWhale/pull/5238)
- 新增 `registry_sync` 拉取公开 MCP Registry 中的零环境 stdio server；模型在选择工具时优先咨询 Registry 再回退到 exec_shell 或自定义代码。

### 10. fix(tui): 鼠标捕获期间保持 alternate scroll 关闭
- **#5234** | 作者: SparkofSpike | 状态: OPEN | 更新: 2026-08-04 | [链接](https://github.com/Hmbown/CodeWhale/pull/5234)
- 修复内容超出屏幕时鼠标滚轮不滚动 transcript 而是切换输入历史的 bug。根因 `recover_terminal_modes()` 同时启用了鼠标捕获与 xterm alternate-scroll。

## 功能需求趋势

从全部 Issues 与 PR 中提炼出四个核心方向：

1. **构建/编译性能优化（当前最高热度）**：v0.9.5 build-time lane 系列（#5245–#5249）覆盖 git commit 触发重建、708 包依赖图、25 个测试二进制、fat LTO 等问题；社区 #4991 也在讨论 TUI 单体 crate 的编译时间，说明这是维护者与贡献者共同的最大痛点。

2. **Runtime HTTP API 完备化**：Copilot 批量提交 5 个 PR（#5129–#5133）补全 skill、MCP、memory、goal、verifier 五大资源的管理端点，目标是让 Web/桌面托管客户端拥有与 TUI 对等的控制能力。

3. **MCP 生态增强**：#5238 的 Registry-first 工具选择策略 + #5130 的 MCP server 生命周期管理，表明项目正从"手动配置 MCP"迈向"自动发现与托管"阶段。

4. **模型适配与上下文窗口透明化**：#5239、#5244、#4978 共同指向模型能力与工具行为不一致的问题——1M 上下文被 128K 压缩、未知模型静默降级、Anthropic 兼容层报错，社区对"工具应当准确反映模型真实能力"有明确诉求。

## 开发者关注点

- **编译等待是最大时间杀手**：单体 `codewhale-tui` crate 让每次编辑-编译循环、测试链接、git commit 都付出全量重建成本。v0.9.5 的针对性治理是社区期待值最高的改进。
- **File 工具误报成功（#5209）极度伤害信任**：静默接受错误参数并返回假成功，迫使开发者每次编辑后都要人工验证，属于"比报错更糟"的行为，社区呼吁尽快修复。
- **OAuth/API key 流程断裂**：#5243 的 token 不自动采用、#5241 的 pricing endpoint 503，都让新用户/新版本升级后的首体验受损。
- **沙盒机制与本地开发冲突**：#4955 请求 `--no-sandbox` 模式，Seatbelt 内核级沙箱频繁破坏日常 shell 命令，说明安全隔离与本地开发效率之间需要更灵活的平衡。
- **上下文窗口 fallback 不透明**：1M 模型被 128K 压缩、未知模型静默降级，用户需要工具明确告知"当前使用的是 fallback 配置"而非默默降低质量。

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*