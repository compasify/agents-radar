# AI CLI 工具社区动态日报 2026-08-11

> 生成时间: 2026-08-11 00:52 UTC | 覆盖工具: 10 个

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

# AI CLI 工具横向对比分析报告（2026-08-11）

## 1. 生态全景

AI CLI 工具已进入**规模化落地与精细化打磨并存**的阶段：头部工具保持高频发版（Claude Code v2.1.227、Codex 双 alpha、Qwen v0.21.9），但版本回归、Windows 兼容性、会话数据持久化等问题成为普遍痛点。社区需求正从"能用"转向"好用"——跨端会话同步、Agent 可靠性、MCP 生态稳定性、长会话恢复能力被反复提及。同时，多个项目（OpenCode、Qwen、DeepSeek TUI）开始将重心从功能扩张转向架构治理，预示行业正在为更复杂的多智能体工作流与生产环境部署做技术储备。

## 2. 各工具活跃度对比

| 工具 | 热点 Issues | 重要 PRs | Releases | 最高热 Issue（👍 / 评论） | 社区声量特征 |
|---|---|---|---|---|---|
| **Claude Code** | 10 | 3 | v2.1.227 | #28791（120👍 / 31评） | 高赞需求集中，跨端同步呼声最强 |
| **OpenAI Codex** | 10 | 10（共46条PR更新） | 2 个 Rust alpha | #20214（81👍 / 93评） | 评论量最高，Windows 稳定性讨论激烈 |
| **Gemini CLI** | 10 | 10 | v0.56.0-nightly | #21409（8👍 / 8评） | 体量中等，Agent 可靠性议题密集 |
| **GitHub Copilot CLI** | 10 | 0 | v1.0.79 | #2904（19👍 / 4评） | 企业策略问题集中爆发，PR 静默 |
| **Kimi Code CLI** | 1 | 0 | 无 | #1283（0👍 / 31评） | 项目收敛期，单个需求讨论深 |
| **OpenCode** | 10 | 10 | v1.18.16 | #30086（22👍 / 46评） | 性能回退引共鸣，架构重构活跃 |
| **Pi** | 10 | 10 | 无 | #6187（21评） | TUI 细节控场，Cloudflare 方向明确 |
| **Qwen Code** | 10 | 10 | v0.21.9 + nightly | #8718（8评） | Fleet 战略清晰，daemon/serve 发力 |
| **DeepSeek TUI** | 2 | 3 | v0.9.6（经 PR） | #2870（20评） | 架构治理期，数据样本有限 |
| **Grok Build** | 0 | 0 | 无 | — | 无活动 |

## 3. 共同关注的功能方向

**① Windows 平台体验（波及面最广）**
- **Claude Code**：所有安装方式失败（#85663）、桌面 GPU 崩溃（#83744）
- **OpenAI Codex**：App 冻结 93 条评论（#20214）、Computer Use 路径错误（#37383）
- **Copilot CLI**：插件更新被 VS Code watcher 阻塞（#4095）
- **Pi**：WSL 下 Copilot 登录挂起（#6187）
- **Qwen**、**Kimi** 社区亦有原生 Windows 支持呼声

**② 跨端会话同步与远程控制**
- **Claude Code**：#28791（120👍）、#15881（60👍）
- **OpenAI Codex**：远程通知失效（#20930）、macOS 远程恢复回归（#37403）
- **Gemini CLI**：IDE 连接目录不匹配修复（#28729）
- **OpenCode**：桌面版 v2 Beta、`opencode serve` Web UI

**③ MCP 生态稳定性与安全**
- **Codex**：issuer 尾斜杠导致 OAuth 拒绝（#37373）
- **Copilot CLI**：60 秒硬超时无重试（#4421）、临时 deny-all 误杀（#4419）
- **Claude Code**：file_upload 始终失败（#84627）
- **Gemini**：MCP OAuth client ID 丢失修复（#28481）

**④ 上下文管理与长会话恢复**
- **Claude Code**：压缩后 skill 重放副作用（#85138）
- **Codex**：恢复 372k 上下文窗口（#34619，18👍）
- **Copilot CLI**：5MB 上限后 `/compact` 失效（#4424）
- **OpenCode**：edit 快照膨胀拖慢长会话（#40816）
- **Kimi**：记忆系统诉求（#1283）

**⑤ Agent 可靠性与子代理治理**
- **Gemini**：MAX_TURNS 误报 GOAL 成功（#22323）、通用代理挂起（#21409）
- **Copilot CLI**：explore 硬编码模型（#3954）、并行子代理 429（#4416）
- **DeepSeek TUI**：子代理递归深度超限（#5317）
- **Qwen**：Fleet 多智能体协调机制（#8718）

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|---|---|---|---|
| **Claude Code** | 企业安全合规（CVP）、多端会话生态、transcript 审计 | 企业专业开发者 | 与 Claude 生态深度绑定，桌面/CLI 一体化，功能密度高 |
| **OpenAI Codex** | Computer/Browser Use 自动化、Windows 修复、沙箱分级 | 自动化重度用户、Windows 开发人群 | Rust 重写（alpha 通道），平台工程基建投入大 |
| **Gemini CLI** | Agent 评估体系、子代理行为治理、Auto Memory、安全加固 | Google 生态开发者、依赖 Agent 工作流者 | 组件级评估 + 快速安全修复，学术气质较重 |
| **Copilot CLI** | 企业策略管控、sandbox 分级、自定义 Agent 模型控制 | GitHub 企业客户、受管环境 | 紧贴 GitHub 平台，策略治理领先，MCP 容错滞后 |
| **OpenCode** | 多提供商接入、Web UI 嵌入、core 服务化 | 开源社区、多模型用户、嵌入式场景 | Bun/Node 全栈，core 与文件系统解耦，向无服务器演进 |
| **Pi** | TUI/AltScreen 全屏体验、Cloudflare AI Gateway、Bedrock | 终端极客、多模型用户 | 关注终端兼容性细节与 AI Gateway 透传 |
| **Qwen Code** | Fleet 多智能体、WebShell 管理、daemon/serve 生产化 | Qwen 模型用户、需要 daemon 服务的团队 | ACP 协议 + 服务端基础架构，从 CLI 走向平台 |
| **Kimi Code CLI** | 记忆系统（需求阶段） | 轻量用户、希望上下文持久化 | 活跃度低，方向尚未明朗 |
| **DeepSeek TUI** | 架构模块化、命令边界重构 | Rust TUI 开发者、DeepSeek 用户 | Rust crate 拆分，从聚合走向分层 |

## 5. 社区热度与成熟度

- **第一梯队（高热度、快速迭代）**：**OpenAI Codex**（评论量 193，46 条 PR 更新）、**Claude Code**（120👍 需求，发版即引发回归讨论）、**OpenCode**（46 评论的性能 Issue + 10 个架构 PR）。

- **第二梯队（稳步推进）**：**Gemini CLI**（P1 修复密度高，SSRF/OAuth/沙箱）、**Qwen Code**（Fleet 战略集中落地）、**Copilot CLI**（企业用户多但 PR 静默，服务端变更引发模型策略动荡）、**Pi**（TUI 细节打磨，Cloudflare 生态卡位）。

- **第三梯队（收敛/早期）**：**Kimi Code CLI**（单 Issue 深讨论但迭代停滞）、**DeepSeek TUI**（架构治理期，公开动态少）、**Grok Build**（无活动）。

**成熟度判断**：Claude Code 与 Copilot CLI 偏"企业级成熟"（治理功能全但用户对回归容忍度低）；Codex/OpenCode 处于"从工具到平台"的转型期；Gemini CLI 的评估体系领先；Qwen Code 的 daemon/Fleet 方向最具差异化潜力；Pi 在终端体验上具备极客口碑。

## 6. 值得关注的趋势信号

1. **"误报成功"比失败更危险**：Gemini 子代理 MAX_TURNS 后上报 GOAL 成功、Codex 嵌套 exec 假完成、Claude Code 的 Fable gate 误判——社区已开始要求**终止语义标准化**（区分"目标达成"与"硬性中断"）。决策者应将 Agent 可信度指标纳入选型评估。

2. **Windows 是 AI CLI 的"第二等公民"困局**：四款主流工具同日出现 Windows 专属问题（安装失败、GPU 崩溃、路径错误、WSL 挂起），且 Codex #20214 已拖 3 个月。Windows 用户的流失风险是真实存在的差异化机会——谁能优先解决，谁就能获得这一大批用户。

3. **长会话韧性成为硬性需求**：多个工具出现会话体积超限后无法自救（Copilot `/compact` 失效、Codex WebSocket 卡死、OpenCode 快照膨胀）。会话压缩、分段持久化、可配置超时将是下一代 CLI 的分水岭功能。

4. **架构服务化/模块化是共同答案**：OpenCode（core 与 FS 解耦）、Qwen（daemon/serve）、DeepSeek TUI（crate 拆分）、Codex（Rust 重写）不约而同走向**服务端能力与客户端解耦**。这暗示 AI CLI 正在从"终端玩具"演变为"可嵌入、可远程、可编排"的智能体运行时。

5. **MCP 标准化尚在阵痛期**：OAuth 尾斜杠、60 秒硬超时、临时 deny-all 策略等细节问题高频出现。MCP 的"最后一公里"（认证、重试、策略过渡）决定它能否从协议规范走向生产可用。

6. **企业策略与用户控制权矛盾加剧**：Copilot 的三连 Issue（模型被误禁、策略误拦、回滚无效）显示，**服务端变更会直接破坏 CLI 可用性**。CLI 厂商需要提供更透明的策略日志与降级机制，而非让用户面对不可解释的"昨天能用今天不能"。

---

*本报告基于 2026-08-11 各工具 GitHub 社区公开数据生成，选取各日报中最具代表性的 Issue/PR 进行分析。数据完整度受限于报告方当天抓取的样本量，部分趋势推断基于有限窗口内的信号。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据截止 2026-08-11 ｜ 排名依据：跨引用 Issue 活跃度、复现数量、PR 迭代频率及社区讨论广度综合评估（PR 评论数未公开，故以关联 Issue #556 等作为热度锚点）

## 1. 热门 Skills 排行

**① skill-creator 评测链路修复（[PR #1298](https://github.com/anthropics/skills/pull/1298)）—— 热度断层第一**
- 功能：修复 `run_eval.py` 对所有 skill description 恒报 recall=0% 的致命 bug，连带修复 Windows 管道读取、触发检测和并行 worker 问题。
- 热点：关联 [Issue #556](https://github.com/anthropics/skills/issues/556)（12 评论、7 👍、10+ 独立复现），直指描述优化循环"在对着噪声调优"；另有 #1099、#1050、#1323、#1261 四个同源修复 PR 在途，属社区公认核心痛点。
- 状态：Open（2026-06-10 创建，持续讨论中）

**② document-typography 排版质检（[PR #514](https://github.com/anthropics/skills/pull/514)）**
- 功能：检测 AI 文档中的孤行（1–6 词溢出）、寡段（标题滞留页尾）、编号错位三类通病。
- 热点：被认为是所有生成类文档 skill 的通用补充，"每个 Claude 生成的文档都会遇到"是讨论核心论据。
- 状态：Open

**③ ODT 文档技能（[PR #486](https://github.com/anthropics/skills/pull/486)）**
- 功能：创建 / 填充 / 读取 / 转换 OpenDocument（.odt/.ods），并提供 ODT→HTML 解析能力。
- 热点：社区对开源、ISO 标准格式的诉求明确，与现有 docx/pdf 形成互补；用户关注 LibreOffice 生态兼容性。
- 状态：Open

**④ skill-quality-analyzer 与 skill-security-analyzer 元技能（[PR #83](https://github.com/anthropics/skills/pull/83)）**
- 功能：五维质量评估器（结构、文档、示例、资源……）+ 针对 skill 本身的安全分析器。
- 热点：与安全 Issue #492 形成呼应——社区开始为"skill 的质量与安全"建立度量标准，属生态自我治理的先行尝试。
- 状态：Open（2025-11 创建，跨度最长 PR 之一）

**⑤ self-audit 交付前自审（[PR #1367](https://github.com/anthropics/skills/pull/1367)）**
- 功能：先做机械式输出文件验证，再按损害严重度执行四维推理审查（v1.3.0）。
- 热点：依托 [Issue #1385](https://github.com/anthropics/skills/issues/1385) 的三闸门管线提案，讨论焦点是"自审逻辑是否会造成额外 token/延迟开销"。
- 状态：Open（2026-06-28 创建，7 月初仍活跃）

**⑥ color-expert 色彩专家（[PR #1302](https://github.com/anthropics/skills/pull/1302)）**
- 功能：覆盖 ISCC-NBS、Munsell、RAL、Ridgway 1912 等色彩命名体系，以及 OKLCH/OKLAB/CAM16 色彩空间选择速查。
- 热点：自包含、跨领域通用，质量成熟度高，讨论延续至 7 月下旬。
- 状态：Open

**⑦ pyxel 复古游戏开发（[PR #525](https://github.com/anthropics/skills/pull/525)）**
- 功能：基于 pyxel-mcp，实现写代码 → 运行截图 → 检查 → 迭代的像素风 8-bit 游戏开发闭环。
- 热点：游戏开发方向的稀缺 skill，作者持续维护（7/15 仍在更新），社区关注其 MCP 结合模式。
- 状态：Open

**⑧ plan-file-hygiene 规划文件卫生（[PR #1479](https://github.com/anthropics/skills/pull/1479)）**
- 功能：为 agent 规划产物（plan 文档）定义生命周期，防止长期项目中规划文件无限堆积。
- 热点：直接回应 [Issue #1417](https://github.com/anthropics/skills/issues/1417)，是"长时运行 agent 状态治理"需求落地的具体化。
- 状态：Open（2026-07-25 新建，最新批次高潜力 PR）

## 2. 社区需求趋势（来自 Issues）

- **安全与信任（最迫切）**：[#492](https://github.com/anthropics/skills/issues/492)（43 评论）揭露社区 skill 借 `anthropic/` 命名空间分发、伪造官方身份，用户可能误授过高权限。隐含需求：官方签名机制 / 命名空间隔离 / 安全审计工具。
- **组织级共享**：[#228](https://github.com/anthropics/skills/issues/228)（8 👍）要求跳过"下载文件→聊天工具传输→手动上传"的笨重流程，实现 org 内直接共享与统一技能库。
- **Skill 工具链可靠性**：[#556](https://github.com/anthropics/skills/issues/556)（12 评论）、[#202](https://github.com/anthropics/skills/issues/202)、[#189](https://github.com/anthropics/skills/issues/189) 暴露出 skill-creator 测试工具失效、官方插件内容重复等工程质量问题。
- **上下文经济性**：[#1487](https://github.com/anthropics/skills/issues/1487) 指出 `claude-api` skill 单次注入约 156k tokens 直接挤爆上下文窗口；[#1329](https://github.com/anthropics/skills/issues/1329) 则提出符号化记忆（compact-memory）以压缩长时 agent 状态。
- **新领域探索**：[#412](https://github.com/anthropics/skills/issues/412) agent 治理模式（策略执行、威胁检测、审计追踪）；[#29](https://github.com/anthropics/skills/issues/29) AWS Bedrock 兼容性；[#12](https://github.com/anthropics/skills/issues/12) docx 空白符不应被静默改写的安全提醒。

## 3. 高潜力待合并 Skills（PR 均为 Open）

| PR | Skill | 潜力判断 |
|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 修复 | ★★★ 修复官方工具核心 bug，多个同源 PR 形成合力，最可能优先合并 |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | ★★★ 普适性强、零副作用，适合直接并入官方文档类 skill 家族 |
| [#486](https://github.com/anthropics/skills/pull/486) | ODT | ★★☆ 填补 OpenDocument 格式空白，与 LibreOffice 生态绑定 |
| [#1302](https://github.com/anthropics/skills/pull/1302) | color-expert | ★★☆ 质量成熟、领域边界清晰，合入成本低 |
| [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns | ★★☆ 覆盖 Testing Trophy 模型与 React 组件测试，体系完整 |
| [#83](https://github.com/anthropics/skills/pull/83) | quality/security analyzer | ★★☆ 契合 #492 安全治理方向，但需官方评估命名空间与审计口径 |
| [#1479](https://github.com/anthropics/skills/pull/1479) | plan-file-hygiene | ★★☆ 新近活跃、回应明确 Issue，若官方认可"规划生命周期"概念则落地快 |

## 4. Skills 生态洞察

> 当前社区最集中的诉求已从"新增更多 Skill"转向**Skill 生态的质量治理与信任基础设施**——无论是 skill-creator 的 0% recall 硬 bug、`anthropic/` 命名空间信任危机，还是 156k tokens 上下文爆炸，本质都在指向同一件事：让 Skill 本身更可靠、更安全、更省 token。

*报告生成于 2026-08-11 ｜ 数据源：[anthropics/skills](https://github.com/anthropics/skills)*

---

# Claude Code 社区动态日报

**2026-08-11** | 数据来源：[anthropics/claude-code](https://github.com/anthropics/claude-code)


## 今日速览

昨日发布 v2.1.227 修复了 Fable 功能标志误判与 `claude-code-action` 下 Bash 命令失败两个问题，但新版本随即被爆出交互式会话不写 transcript JSONL 的回归（#85665）。社区侧，跨平台会话同步（#28791，👍120）仍是最高呼声的功能需求，同时 Windows 安装失败（#85663）与 CVP 组织误拦截（#84352）成为开发者关注的两大痛点。


## 版本发布

### v2.1.227

**修复内容：**
- 修复会话以过期登录令牌启动时，功能标志未按用户订阅层级评估的问题——此前可能错误地提示 Max 计划用户为 Fable 启用 usage credits
- 修复 `claude-code-action` 下所有 Bash 命令因 `allowed_no` 相关原因失败的问题

> ⚠️ 该版本被 #85665 报告存在交互式会话不写入 transcript JSONL 的回归，官方尚未回应。


## 社区热点 Issues（10 个）

### 1. #84352 — CVP 认证组织仍收到 cyber safeguard 拦截
[GitHub Issue](https://github.com/anthropics/claude-code/issues/84352)

- **作者**: federicolopeza | 评论: 32 | 👍: 1
- **状态**: OPEN，更新于 08-10

已获 Cyber Verification Program 批准的组织在 Claude Code 中仍被 cyber-safeguard 拦截，且验证门户显示申请为“Under review”，与先前的批准邮件矛盾。32 条评论是今日最高讨论量，说明影响面较广，且涉及安全审核流程可信度问题。

### 2. #28791 — 同步 CLI 与桌面端的对话历史
[GitHub Issue](https://github.com/anthropics/claude-code/issues/28791)

- **作者**: moazam1 | 评论: 31 | 👍: 120
- **状态**: OPEN，更新于 08-10
- **标签**: enhancement, area:cli, area:desktop

虽已提出近半年，仍是赞数最高的功能请求。用户希望 CLI 与 Claude Code 桌面应用共享会话历史，避免上下文割裂。社区讨论活跃，是当前跨端体验最集中的诉求。

### 3. #15881 — Claude Code 与 Claude Desktop 无缝会话共享
[GitHub Issue](https://github.com/anthropics/claude-code/issues/15881)

- **作者**: heonseoblee | 评论: 9 | 👍: 60
- **状态**: OPEN，更新于 08-10
- **标签**: enhancement, platform:macos, area:core

与 #28791 同属跨端会话共享方向，但聚焦 CLI 与 Claude Desktop 之间的上下文传递，当前只能手动导出/复制粘贴。60 👍 表明该需求有广泛的用户基础。

### 4. #80749 — Max 计划下 Fable 5 被错误要求开启 usage credits
[GitHub Issue](https://github.com/anthropics/claude-code/issues/80749)

- **作者**: ksmithbaylor | 评论: 8 | 👍: 1
- **状态**: CLOSED，更新于 08-10

该问题与 v2.1.227 修复内容直接相关。原始报告称 2.1.216 开始出现回归，后续评论区纠正了部分判断：2.1.218 在约 30 分钟内既成功又失败，2.1.215 也会 gate。已关闭但修复已随新版本发布。

### 5. #67585 — Cowork 陈旧缓存损坏导致沙箱读视图截断（含完整诊断）
[GitHub Issue](https://github.com/anthropics/claude-code/issues/67585)

- **作者**: airt-scot | 评论: 7 | 👍: 1
- **状态**: OPEN，更新于 08-10
- **标签**: bug, duplicate, has repro, platform:windows, area:cowork, data-loss, area:sandbox

宿主磁盘上的写入是干净的，但沙箱读视图被截断。涉及数据一致性，且已在 Fable 5 下复现，评论中包含完整诊断与修复建议，对团队排查有较高参考价值。

### 6. #84627 — claude-in-chrome file_upload 工具始终失败
[GitHub Issue](https://github.com/anthropics/claude-code/issues/84627)

- **作者**: thequickboard | 评论: 7 | 👍: 1
- **状态**: OPEN，更新于 08-10

`mcp__claude-in-chrome__file_upload` 对有效文件输入元素每次调用都返回 `paths: expected array, received undefined`，跨会话、跨元素复现。MCP 集成的稳定性问题，影响浏览器自动化场景。

### 7. #83744 — Claude Desktop (Windows) GPU 进程崩溃拖垮整个应用
[GitHub Issue](https://github.com/anthropics/claude-code/issues/83744)

- **作者**: estebanfeldman | 评论: 6 | 👍: 0
- **状态**: OPEN，更新于 08-11

Windows 上 Claude Desktop 1.24012.11.0 的 GPU 进程以 exitCode 101457950 崩溃并导致整个应用退出。Windows 桌面端稳定性问题连续多日被报告，值得关注。

### 8. #85665 — [新] 2.1.227 交互式会话不写 transcript JSONL
[GitHub Issue](https://github.com/anthropics/claude-code/issues/85665)

- **作者**: Chamoz | 评论: 0 | 👍: 0
- **状态**: OPEN，更新于 08-11（今日创建）
- **标签**: bug, has repro, platform:windows, area:core, regression, data-loss

昨日发布版本的新回归：交互式会话永不写入 transcript JSONL（headless `-p` 不受影响），回归边界定为 2.1.226→2.1.227。涉及数据丢失，且紧跟版本发布，需优先关注。

### 9. #85663 — [新] Windows 所有安装方式失败：defines.json 语法错误
[GitHub Issue](https://github.com/anthropics/claude-code/issues/85663)

- **作者**: dsinfoemp-glitch | 评论: 0 | 👍: 0
- **状态**: OPEN，更新于 08-11（今日创建）
- **标签**: bug, platform:windows, area:installation

npm/ps1/cmd/winget 四种安装方式全部报“defines.json”语法错误，报错路径指向 `C:\Program Files\nodejs`。若属实属于高频阻塞性问题，会影响所有新用户安装。

### 10. #85138 — Skills 缺少压缩后重放的屏蔽机制
[GitHub Issue](https://github.com/anthropics/claude-code/issues/85138)

- **作者**: NubeBuster | 评论: 1 | 👍: 1
- **状态**: OPEN，更新于 08-11

压缩后 Claude Code 会重新附加所有调用过的 skill，但以**渲染后的正文**携带已过期的 `$ARGUMENTS` 重新执行。作者报告因此发生了真实世界的意外 git push。涉及安全/副作用风险，建议尽快提供 frontmatter 的 opt-out 机制。


## 重要 PR 进展（3 个）

### 1. #34951 — /code-review 增加自动 GitHub/GitLab 检测与 GitLab 支持
[GitHub PR](https://github.com/anthropics/claude-code/pull/34951)

- **作者**: jangel97 | 状态: OPEN | 更新于 08-10

为 `/code-review` 命令增加多平台支持，自动检测 GitHub 或 GitLab（含自托管实例），避免逻辑重复。对应 Issue #26932，是代码评审工作流的实用增强。

### 2. #85464 — 社区插件 entroly-context：预算感知的上下文管理
[GitHub PR](https://github.com/anthropics/claude-code/pull/85464)

- **作者**: juyterman1000 | 状态: CLOSED | 更新于 08-10

新社区插件，当代码库超出上下文窗口时，基于 [Entroly](https://github.com/juyterman1000/entroly) 进行预算感知的上下文选择。不过该 PR 已关闭，合并状态不明。

### 3. #9262 — 文档：强制 task 工具与模型元数据
[GitHub PR](https://github.com/anthropics/claude-code/pull/9262)

- **作者**: FradSer | 状态: CLOSED | 更新于 08-10

在 commit 命令文档中补充 `claude-3-5-haiku-latest` 模型的 `model` 参数说明，并要求 commit 工作流使用 Task 工具以保证上下文隔离。纯文档更新。


## 功能需求趋势

从本期 Issue 数据可提炼出以下几个社区关注方向：

1. **跨端会话同步/共享**（#28791、#15881）：CLI、Claude Code 桌面端、Claude Desktop 之间无缝传递上下文，是当前赞数最高、呼声最集中的需求——约 180 个 👍，且长期未关闭。

2. **Windows 平台体验**（#83744、#85651、#85663）：桌面端 GPU 崩溃、TUI 屏幕缓冲泄漏、一键安装失败——Windows 相关的稳定性问题连日占据 Issue 列表，且今日出现安装类全挂的新报告。

3. **上下文管理与压缩策略**（#85138、#41984）：压缩后的 skill 重放、1M 上下文下频繁压缩与死循环——开发者对压缩机制副作用越来越敏感，需要更精细的控制能力。

4. **新模型支持与订阅计费一致性**（#80749、#85664）：Fable 5 被误 gate、sonnet..opus 模型行为异常——用户期望功能可用性与订阅层级严格一致，任何误判都会引发较大反响。

5. **TUI/编辑器交互细节**（#74655、#85654、#85290）：Enter/Mod+Enter 提交分离、斜杠命令在折叠粘贴块中的调度、终端交接后鼠标跟踪残留——CLI 交互体验的精细度打磨也是持续反馈方向。


## 开发者关注点

- **版本回归风险高**：#85665 显示 v2.1.227 引入 transcript JSONL 不落盘的回归，且 #80749 的 Fable gate 问题此前也经历多次“修了又坏”。开发者呼吁官方加强发布前的回归测试。

- **数据丢失类问题出现集中**：transcript 不落盘（#85665）、插件记录跨项目覆盖（#83767）、Cowork 沙箱读视图截断（#67585）——数据一致性和持久化是目前最揪心的痛点。

- **Windows 安装与运行是重灾区**：四种安装方式全挂（#85663）、桌面 GPU 崩溃（#83744）、子进程泄漏写坏 TUI（#85651）。Windows 用户群在社区中已形成明显的“第二等公民”感受。

- **伪造/误导性系统提示的安全隐患**：#74636 报告 Claude 自己的 Write/Edit 调用后出现伪造的“don't tell the user”系统提醒——这类提示注入面如果被恶意利用，后果会很严重，社区关注度高。

- **usage limit 消耗不透明**：#85446 报告正常使用 20 分钟内 usage 从 20% 异常跳升，且无明确解释——用户对配额消耗的可见性和可解释性要求越来越高。


</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-08-11

## 今日速览

- 发布两个 Rust 版 alpha 版本：`0.148.0-alpha.6` 与 `0.147.0-alpha.6.6`，官方暂未提供详细变更说明。
- Windows 平台稳定性仍是社区最强烈诉求：App 冻结/崩溃类 Issue 持续霸榜，其中 #20214 已积累 93 条评论。
- 过去 24 小时合入大量基础设施与内部架构 PR（20+ 条），集中在 Windows SDK 工具链、MCP 表单支持、图片处理流程重构等方向。

---

## 版本发布

过去 24 小时发布两个版本，均为 Rust 版 alpha 通道，官方 Release 页面未附变更摘要，建议关注后续补发说明：

| 版本 | 说明 | 链接 |
|---|---|---|
| `rust-v0.148.0-alpha.6` | 0.148.0-alpha.6 | [查看 Release](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.6) |
| `rust-v0.147.0-alpha.6.6` | 0.147.0-alpha.6.6 | [查看 Release](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.6.6) |

---

## 社区热点 Issues

以下 10 个 Issue 为过去 24 小时更新中最值得关注的问题，涵盖 Windows 稳定性、Computer Use、远程控制、上下文窗口等社区焦点。

### 1. Codex App 在 Windows 11 Pro 上频繁冻结/卡顿（#20214）
- **作者**: squarepots | **评论**: 93 | **👍**: 81 | **状态**: OPEN
- **摘要**: 用户报告系统资源充足（Ryzen 5 5600 / 32GB RAM）但 Codex App 仍频繁卡顿，距今创建已 3 个多月仍无修复，评论区持续有用户补充复现信息，是当前社区声量最大的 Windows 稳定性问题。
- [查看 Issue](https://github.com/openai/codex/issues/20214)

### 2. Codex 扩展无法启动："The extension couldn't load its resources"（#37458）
- **作者**: YeNai-ShaoXianChao | **评论**: 31 | **👍**: 1 | **状态**: OPEN
- **摘要**: VSCode 1.132.0 中 Codex 面板启动失败，疑似扩展资源加载路径 bug，31 条评论中有大量相同环境（Windows x64）用户的确认。
- [查看 Issue](https://github.com/openai/codex/issues/37458)

### 3. Windows Computer Use 跨 JS 调用复用 stale 执行上下文（#37013）
- **作者**: metyatech | **评论**: 18 | **👍**: 4 | **状态**: OPEN
- **摘要**: Computer Use 客户端在 `node_repl/js` 首次执行后，后续调用会复用旧的 transport 上下文导致失败。影响依赖多步 JS 交互的自动化任务，被标记为 `tool-calls` + `windows-os`，社区关注度高。
- [查看 Issue](https://github.com/openai/codex/issues/37013)

### 4. Windows Computer Use 应用/窗口发现失败（0x80070003）（#37383）
- **作者**: dystopia78 | **评论**: 13 | **👍**: 4 | **状态**: OPEN
- **摘要**: Windows 11 Pro 25H2 上 Computer Use 在发现应用/窗口时抛出 `0x80070003`（路径不存在），该错误与系统 UI 自动化路径解析有关，影响所有 Windows 平台的 Computer Use 用户。
- [查看 Issue](https://github.com/openai/codex/issues/37383)

### 5. 远程连接时 Codex App 通知不工作（#20930）
- **作者**: yiteng-guo | **评论**: 10 | **👍**: 16 | **状态**: OPEN
- **摘要**: macOS 桌面端远程连接 Linux 主机时，任务完成不触发系统通知。16 个 👍 表明该问题在远程开发用户中影响广泛，标记为 `app` + `remote`。
- [查看 Issue](https://github.com/openai/codex/issues/20930)

### 6. Windows 上 Browser Use 会话拆除时 App 直接退出（#36645）
- **作者**: brokenbread42205 | **评论**: 8 | **👍**: 2 | **状态**: OPEN
- **摘要**: 任务完成通知出现后，Browser Use 会话 teardown 阶段导致整个 Codex App 崩溃退出，属于 Windows 专属崩溃路径，且与最新版 26.727.6591.0 相关。
- [查看 Issue](https://github.com/openai/codex/issues/36645)

### 7. macOS 桌面端无法恢复远程控制/CLI 线程：`already has an active writer`（#37403）
- **作者**: xkun1 | **评论**: 5 | **👍**: 4 | **状态**: OPEN
- **摘要**: 8 月 7 日更新后出现的回归问题：移动端 Remote Control 与桌面端切换打开同一线程时触发 `already has an active writer` 错误。影响跨设备远程工作流，社区标记为 [regression]。
- [查看 Issue](https://github.com/openai/codex/issues/37403)

### 8. 恢复 GPT-5.6 Sol 的 372k Codex 上下文窗口（#34619）
- **作者**: Kl-11 | **评论**: 5 | **👍**: 18 | **状态**: OPEN
- **摘要**: 社区请求恢复 GPT-5.6 Sol 的 372k 上下文窗口，或提供 opt-in 设置。18 个 👍 位居近期需求类 Issue 前列，反映高阶用户对长上下文场景的强需求。
- [查看 Issue](https://github.com/openai/codex/issues/34619)

### 9. MCP app-server 0.147 剥离授权服务器 issuer 尾斜杠（#37373）
- **作者**: Charpup | **评论**: 4 | **👍**: 3 | **状态**: OPEN
- **摘要**: `codex-cli 0.147.0-alpha.6.5` 在初始化 Streamable HTTP MCP server 时，会剥离 authorization-server issuer 的 trailing slash，导致已认证的 MCP server 被拒绝。涉及 MCP + OAuth 配置兼容性，影响面较大。
- [查看 Issue](https://github.com/openai/codex/issues/37373)

### 10. Code mode 在嵌套 exec 会话仍存活时报 "已完成"（#35613）
- **作者**: teamleaderleo | **评论**: 6 | **👍**: 1 | **状态**: CLOSED
- **摘要**: Code mode 在存在活动嵌套 exec session 但没有模型可见的句柄时报告完成，导致会话生命周期管理混乱。该 Issue 已被关闭，但评论中有官方确认和复现信息，值得关注后续改进。
- [查看 Issue](https://github.com/openai/codex/issues/35613)

> 另注：#36170（Plus 账户未收到 7 月 29 日 rate-limit 重置）与 #37894 / #32555（WebSocket Broken pipe 导致任务卡死）也获得较高关注，因篇幅所限未展开，可自行查阅。

---

## 重要 PR 进展

过去 24 小时共有 46 条 PR 更新，以下 10 条为功能影响较大的合并/更新（注：多数由 copyberry[bot] 自动提交，无人工讨论，但代码变更意义明确）。

### 1. 延迟 `view_image` 处理至历史插入阶段（#37902）
- **状态**: CLOSED
- **内容**: 将图片字节原样传递到共享历史插入路径，统一解码与缩放逻辑；无效图片数据以既有占位符表示。
- [查看 PR](https://github.com/openai/codex/pull/37902)

### 2. 添加 hermetic Windows SDK 与 MSVC 运行时仓库（#37896）
- **状态**: CLOSED
- **内容**: 为 x64/arm64 引入固定的 Windows SDK/MSVC 运行时 Bazel 仓库，要求显式接受 `BAZEL_MSVC_RUNTIME_VISUAL_STUDIO_EULA=1` 方可使用。这是改善 Windows 构建可重复性的重要基础设施变更。
- [查看 PR](https://github.com/openai/codex/pull/37896)

### 3. 添加可配置的 Responses API 请求元数据（#37895）
- **状态**: CLOSED
- **内容**: 新增 `responses_api_metadata` 配置项，允许在每次 Responses API turn 中注入自有 key/value 元数据，限制 16 条、ASCII 键名不超过 64 字符。
- [查看 PR](https://github.com/openai/codex/pull/37895)

### 4. `view_image` 输出前校验图片有效性（#37892）
- **状态**: CLOSED
- **内容**: 在 `view_image` handler 中解码图片数据，非法/不支持输入返回明确错误；code-mode 图片重新编码为 PNG 像素数据，direct 调用保留原始字节。
- [查看 PR](https://github.com/openai/codex/pull/37892)

### 5. `app/read` 支持线程级配置（#37891）
- **状态**: CLOSED
- **内容**: 为 `app/read` 添加可选 `threadId` 参数，加载线程有效配置后再应用 feature gating、工作区策略与插件归因。
- [查看 PR](https://github.com/openai/codex/pull/37891)

### 6. Windows 忽略 Unix socket 代理设置（#37889）
- **状态**: CLOSED
- **内容**: 修复 Windows 上因配置 Unix socket 权限导致的代理监听被 clamp 到 loopback 及警告问题，属 Windows 代理行为修正。
- [查看 PR](https://github.com/openai/codex/pull/37889)

### 7. 可配置的 goal token 预算上限（#37878）
- **状态**: CLOSED
- **内容**: 新增 `goals.max_goal_token_budget` 正整数配置，作为新 goal 默认预算及 `tokenBudget` 重置值，并拒绝超出上限的创建/更新。
- [查看 PR](https://github.com/openai/codex/pull/37878)

### 8. Windows 托管网络遵循沙箱级别配置（#37875）
- **状态**: CLOSED
- **内容**: 修复托管网络隐式选择 elevated Windows 沙箱后端的问题，改为完全依据 `WindowsSandboxLevel` 选择后端。提升 Windows 沙箱安全性。
- [查看 PR](https://github.com/openai/codex/pull/37875)

### 9. `apply_patch` 拒绝重复解析路径（#37867）
- **状态**: CLOSED
- **内容**: 若 patch 中包含多个解析到同一文件的操作（如 `duplicate.txt` 与 `./duplicate.txt`），直接拒绝，避免部分应用导致不一致状态。
- [查看 PR](https://github.com/openai/codex/pull/37867)

### 10. 完全访问用户线程支持 MCP 表单输入（#37864）
- **状态**: CLOSED
- **内容**: 识别 `openai/standard-form-input` 客户端扩展，在 full-access 线程中允许标准 MCP 表单弹出用户输入，解决了自动批准模式下表单仍须用户填写的问题。
- [查看 PR](https://github.com/openai/codex/pull/37864)

> 另有 #37898（线程 sections 增加外观元数据）、#37871（持久化历史类型拆分为独立 crate）、#37862（环境配置重命名）等架构性 PR，因篇幅未列入。

---

## 功能需求趋势

从近 24 小时 Issues 中提炼出以下社区最关注的功能方向：

1. **Windows 平台体验优化**：热度最高，集中在 App 冻结/崩溃（#20214、#35606）、扩展加载失败（#37458）、下载链接缺失（#36933）等。用户对 Windows 作为一等公民的期待明显加强。
2. **Computer Use / Browser Use 可靠性**：多个 Issue 指向 Windows 上 Computer Use 的执行上下文 bug（#37013、#37383）以及 Browser Use 的退出路径崩溃（#36645）。
3. **远程控制/断线恢复**：涉及 Remote Control 配对失败（#37897）、macOS 远程恢复回归（#37403）、WebSocket Broken pipe 卡死（#37894、#32555）。远程开发场景的稳定性是高频词。
4. **上下文窗口容量**：#34619（恢复 GPT-5.6 Sol 372k 窗口）获得 18 个 👍，说明长上下文仍是专业用户的核心诉求。
5. **MCP 生态完善**：多个认证与配置相关 Issue（#37373、#37219、#37549），涵盖 OAuth 循环、trailing slash 解析、授权状态同步等，MCP server 集成质量是开发者的关注点。

---

## 开发者关注点

- **Windows App 卡死/崩溃问题拖太久**：#20214 已有 93 条评论、81 个 👍，且持续 3 个多月未解决，社区不满情绪明显；#35606 更报告崩溃导致 Pro 配额在 24 小时内被耗尽。
- **连接层故障导致任务中断**：WebSocket `Broken pipe` 后任务永久卡在 "Thinking" 状态（#37894、#32555），以及远程线程无法恢复（#37403），直接破坏工作流，开发者期望更强的断线重连与状态恢复机制。
- **认证与授权配置不透明**：MCP OAuth 循环请求（#37549）、Linear connector 重认证循环（#37219）以及 rate-limit 未按承诺重置（#36170），说明账号/授权状态的可观测性有待提升。
- **功能回归问题**：多个 Issue 标记为 "after latest update"（#37403、#37894），说明新版本引入回归的情况开始引起警觉，社区希望加强发布前的 CI/回归测试。

---

*以上日报基于 2026-08-11 GitHub 公开数据自动生成，仅供技术社区参考。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-08-11

## 今日速览
昨日发布 v0.56.0 夜间版（v0.56.0-nightly.20260810），社区讨论焦点集中在 **Agent 可靠性**（错误成功上报、挂起、Wayland 兼容）与 **Auto Memory 安全与质量问题**上。同时，多个针对 IDE 集成、OAuth 流程及 SSRF 漏洞的 PR 正在推进，显示安全和开发体验正在成为当前迭代重点。

---

## 版本发布
**v0.56.0-nightly.20260810.gcf22ac7e8** 已发布，主要为每夜自动构建版本，未附带显著的用户可见功能变更。完整变更日志：
🔗 [Compare v0.56.0-nightly.20260809...v0.56.0-nightly.20260810](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260809.gcf22ac7e8...v0.56.0-nightly.20260810.gcf22ac7e8)

---

## 社区热点 Issues（Top 10）

### 1. 子代理达到 MAX_TURNS 被误报为“GOAL 成功” 🐞
**#22323** | P1 | 12 评论 | 2 👍
`codebase_investigator` 子代理在触发最大轮次限制后，却以 `status: "success"` 和 `Termination Reason: "GOAL"` 做成功上报，掩盖了中断。这会导致用户与自动化流程误判任务完成。
🔗 [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

### 2. 通用代理（Generalist agent）无限挂起 🐞
**#21409** | P1 | 8 评论 | 8 👍
当 Gemini CLI 将任务委托给通用代理时会发生永久性挂起，即使是简单的创建文件夹操作也能卡住长达一小时。用户发现指示模型不要 defer 到子代理即可绕过。这是社区点赞数最高的问题之一，严重影响日常使用。
🔗 [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)

### 3. 利用模型 bash 亲和力：零依赖 OS 沙箱与意图路由 ✨
**#19873** | P2 | 8 评论 | 1 👍
提议利用 Gemini 3 模型天然擅长 bash 工具链的特点，构建零依赖沙箱，在保证安全的前提下让模型自由使用 `grep`/`sed`/`awk` 等命令，并在执行后路由意图。这是一项较大的增强设计。
🔗 [Issue #19873](https://github.com/google-gemini/gemini-cli/issues/19873)

### 4. 需要稳健的组件级评估体系 🧪
**#24353** | P1 | 7 评论 | EPIC
在已有 76 个行为评估测试的基础上，为 6 个支持的 Gemini 模型建立更细粒度的组件级评估流水线，以持续追踪各模型在具体工具调用上的表现。
🔗 [Issue #24353](https://github.com/google-gemini/gemini-cli/issues/24353)

### 5. AST 感知的文件读取与代码库映射评估 🧭
**#22745** | P2 | 7 评论 | 1 👍
EPIC：调研 AST 感知工具的价值，包括精确读取方法边界、减少 token 噪声、优化导航和代码库映射，以提升大代码库下的代理效率。
🔗 [Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)

### 6. Gemini 不主动使用自定义 Skills 和子代理 🤖
**#21968** | P2 | 6 评论
用户反馈 Gemini 几乎不会自发调用自定义的 skills（如 gradle、git 技能）和子代理，除非在提示中显式指定。这削弱了可扩展工具链的实际价值。
🔗 [Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)

### 7. Shell 命令执行完成后卡在“Waiting input” 🐞
**#25166** | P1 | 4 评论 | 3 👍
简单 CLI 命令执行完毕后，终端仍显示命令活跃并悬挂在等待输入的假死状态。属于 P1 级别、影响自动化流畅度的高频问题。
🔗 [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)

### 8. 浏览器子代理在 Wayland 环境失败 🐞
**#21983** | P1 | 4 评论 | 1 👍
在 Wayland 下运行浏览器子代理时出现异常终止，终止原因为 GOAL 但实际并未完成既定任务。结合 #22323，说明 GOAL 终止原因的可信度需进一步核查。
🔗 [Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)

### 9. Auto Memory 对低信号会话无限重试 🔁
**#26522** | P2 | 5 评论
当提取代理判断某个会话“低信号”而跳过时不标记为已处理，导致该会话被后续流程反复重新抓取，浪费调用与上下文预算。
🔗 [Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522)

### 10. Auto Memory 需确定性脱敏并减少日志 📉
**#26525** | P2 | 4 评论
当前 Auto Memory 在脱敏提示生效前，本地会话内容就已进入模型上下文；同时服务日志可能记录已有技能信息。存在隐私合规隐患。
🔗 [Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525)

---

## 重要 PR 进展（Top 10）

### 1. 修复 SSRF 漏洞：web-fetch 改用异步 DNS 解析 🔒
**#28557** | P1 | security
`isBlockedHost` 原仅同步检查字面 IP，域名可绕过校验直达内网（如 `169.254.169.254`）。改用 `isPrivateIpAsync` 异步解析后再判定，消除 SSRF 风险。
🔗 [PR #28557](https://github.com/google-gemini/gemini-cli/pull/28557)

### 2. 修复 macOS 沙箱下 EACCES 导致的启动崩溃 🔒
**#28734** | P1 | core
当 macOS Seatbelt 沙箱启用且 CWD 位于 Git 仓库内时，`resolveToRealPath` 对 `EACCES` 以外的错误未做兜底，导致 CLI 启动崩溃。现补充该错误码处理。
🔗 [PR #28734](https://github.com/google-gemini/gemini-cli/pull/28734)

### 3. 消除 IDE 连接中的目录不匹配问题 🔧
**#28729** | size/m
针对 Cider 或使用 FUSE/虚拟路径的 VS Code 远程工作区，原端口文件工作区路径比对逻辑可能错误吞掉不匹配项，导致 CLI 无法连接 IDE companion。修复后按真实路径解析。
🔗 [PR #28729](https://github.com/google-gemini/gemini-cli/pull/28729)

### 4. 动态解析 Cloud Workstations 代理的 OAuth 重定向 URI 🔧
**#28688** | P3 | security
修复 Cloud Workstations VM 内 OAuth 流程失败的问题——不再静态绑定 `localhost` 回调，而是动态解析代理转发地址，使远程开发场景可正常认证。
🔗 [PR #28688](https://github.com/google-gemini/gemini-cli/pull/28688)

### 5. 修复错误模型容量耗尽提示与配额映射 🔧
**#28730** | size/m,l
纠正客户端侧模型配额查询映射错误，避免误报容量耗尽；同时在瞬时容量高峰期间保留 UI 中的“Keep trying”选项。
🔗 [PR #28730](https://github.com/google-gemini/gemini-cli/pull/28730)

### 6. 修复 VS Code IDE companion 的 Disposable 泄漏 🔧
**#28764** | P2 | size/s
`activate()` 中两处 `context.subscriptions.push(...)` 因多余括号变成了逗号表达式，只追踪了最后一个 Disposable，导致 `gemini.diff.accept` 命令等资源未被正确释放。
🔗 [PR #28764](https://github.com/google-gemini/gemini-cli/pull/28764)

### 7. MCP OAuth token 刷新使用存储的 client ID 🔒
**#28481** | P1 | security（已关闭）
修复通过 OAuth discovery + 动态客户端注册配置的 MCP 服务器，token 刷新时因未携带存储的 client ID 而在本地即失败，且失败会删除已存凭据、强制用户反复重新认证。
🔗 [PR #28481](https://github.com/google-gemini/gemini-cli/pull/28481)

### 8. 新增 `eval:validate` 静态分析命令 🧪
**#28344** | P3 | size/xl
新增独立的评估源文件校验命令，覆盖 9 条规则，违例时以 exit code 1 退出，适合接入 CI 门禁。支持 `--root`、`--json` 与逐文件输出。
🔗 [PR #28344](https://github.com/google-gemini/gemini-cli/pull/28344)

### 9. 评估器集成工具调用时间线诊断 🧪
**#28305** | P3 | size/l
在行为评估失败时，控制台自动输出紧凑编号的工具调用时间线（含参数、状态、错误详情），帮助快速定位失败节点。
🔗 [PR #28305](https://github.com/google-gemini/gemini-cli/pull/28305)

### 10. 防止布尔 thought 字段泄漏为 “[Thought: true]” 文本 🔧
**#28624** | P2 | size/m
修复 `thought: true` 这类内部布尔字段被序列化进模型思考文本、以 `[Thought: true]` 形式出现在对话中的问题。
🔗 [PR #28624](https://github.com/google-gemini/gemini-cli/pull/28624)

---

## 功能需求趋势

从近期 Issues 与 PR 看，社区关注方向可归纳为五类：

1. **Agent 自主性与可靠性**
   - 模型“不主动使用 Skills/子代理”（#21968）
   - 子代理错误上报成功状态（#22323）
   - 代理对自身 CLI 参数、热键的自知力（#21432）
   - 代理应主动规避破坏性命令（#22672）

2. **浏览器代理（Browser Agent）韧性**
   - 配置覆盖不生效（#22267）
   - Wayland 兼容性（#21983）
   - 会话接管与锁恢复（#22232）

3. **自动记忆（Auto Memory）安全与质量**
   - 低信号会话无限重试（#26522）
   - 确定性脱敏与日志最小化（#26525）
   - 无效内存补丁的隔离与呈现（#26523）

4. **AST 感知的代码理解**
   - AST 感知文件读取与代码库映射（#22745、#22746）
   - 相关 CLI 工具（tilth / glyph）评估

5. **终端体验与稳定性**
   - 高刷新率与无闪烁 resize（#21924）
   - 外部编辑器退出后画面损坏（#24935）
   - Shell 假死问题（#25166、#22465）

---

## 开发者关注点

- **误报成功是可信度的大敌**。多条 P1/P2 Issue（#22323、#21983）显示子代理在中断/失败后仍以“GOAL”上报成功，开发者认为这会破坏对 Agent 自动化流程的信任，建议在终止语义上区分“用户目标达成”与“轮次用尽/硬性中断”。
- **挂起问题频繁出现**。通用代理挂起（#21409）、Shell 命令假死（#25166）和 Vite 交互提示卡死（#22465）构成一组“卡住”类高频痛点，社区希望引入全局超时与更健壮的交互检测机制。
- **调试与可观测性不足**。`/bug` 报告不包含子代理上下文（#21763）、子代理轨迹无法通过 `/chat share` 分享（#22598），使得问题复现和分析困难。
- **配置生效与一致性**。settings.json 对浏览器代理无效（#22267）、符号链接 Agent 不被识别（#20079）、超过 128 个工具触发 400 错误（#24246）——这些问题虽然分散，但共同指向配置管线需要统一和加固。
- **安全红线持续收紧**。SSRF 修复（#28557）、Auto Memory 脱敏前置（#26525）与 OAuth 凭据保存（#28481）的 PR 获得 P1 优先级，说明维护团队正加速处理社区反馈的安全隐患。

---

*本日报数据抓取自 github.com/google-gemini/gemini-cli，覆盖 2026-08-10 至 2026-08-11 的社区动态。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-08-11**  
**数据来源：github.com/github/copilot-cli**

---

## 1. 今日速览

昨日发布的 **v1.0.79** 重点强化了企业 sandbox 策略管控，新增 `/allow-all auto` 的企业策略支持。社区方面，**企业模型不可用/策略误拦问题集中爆发**（#1595、#4390、#4422），成为当前最大痛点；MCP 连接的稳定性问题（#4419、#4421）也持续受到关注。功能需求上，自定义 Agent 的 reasoning effort 配置以 19 👍 成为社区最期待的能力之一。

---

## 2. 版本发布

### v1.0.79（2026-08-10）

- **/sandbox 配置对话框增强**：现在会显示 sandbox 设置在 `settings.json` 中的具体存储位置，方便用户定位和手动修改。
- **企业 allow-auto-only 策略支持**：`/allow-all auto` 在该策略下可用，而完整的 allow-all 仍被阻止，满足企业的分档管控需求。
- **企业 sandbox 代理 URL 强制**：允许企业托管策略在凭据注入期间强制使用指定的代理 URL，处于抢先体验阶段（描述未完整给出）。

---

## 3. 社区热点 Issues

以下从过去 24 小时更新的 23 条 Issues 中挑选的 10 个最值得关注的问题：

### 🔥 #1595 企业策略误拦截 /models 模型列表（持续高热）
- **标签**：`area:enterprise` `area:models`
- **社区反应**：29 条评论 · 👍 11 · **持续近 6 个月仍活跃**
- **链接**：https://github.com/github/copilot-cli/issues/1595
- **为什么重要**：用户持有有效企业 Copilot 订阅且显示剩余约 40% 的 premium 请求，却无法通过 `/models` 列出模型，报 `access denied by Copilot policy`。评论数高企说明企业用户普遍遭遇策略误判，问题长期未根治。

### ⭐ #2904 自定义 Agent 应支持配置 Reasoning Effort
- **标签**：`area:agents` `area:models`
- **社区反应**：4 条评论 · 👍 19（本期功能需求中最高赞）
- **链接**：https://github.com/github/copilot-cli/issues/2904
- **为什么重要**：`.agent.md` 自定义智能体已支持 `model` 字段固定模型，却**无法按 agent 设置推理力度**，只能通过全局 `--effort=LEVEL` 控制。19 个 👍 表明这是高级用户普遍渴求的精细化控制能力。

### 🪟 #4095 Windows 插件更新失败：VS Code 运行时 `Access is denied`
- **标签**：`area:platform-windows` `area:plugins`
- **社区反应**：1 条评论 · 👍 13
- **链接**：https://github.com/github/copilot-cli/issues/4095
- **为什么重要**：`copilot plugin update` 在 VS Code 运行期间失败（`os error 5`），根因是 Copilot 扩展持有已安装插件的 watcher 句柄。13 个 👍 说明 Windows 用户受此问题困扰较广，且涉及桌面应用与 CLI 联动场景。

### 🏢 #4390 企业启用模型缺失：Claude Sonnet 5 / Opus 5 与 Kimi K3
- **标签**：`area:enterprise` `area:models`
- **社区反应**：2 条评论 · 👍 3
- **链接**：https://github.com/github/copilot-cli/issues/4390
- **为什么重要**：Copilot Business 组织显式启用的模型（包括 Claude Sonnet 5、Opus 5 及 Kimi K3）未出现在 CLI 的有效目录中，且 Anthropic 系模型全部不可用。与 #4422 高度关联，指向企业模型目录同步机制存在问题。

### 🔄 #4422 个人企业账号下所有 Claude 模型被禁用（新发）
- **标签**：`area:enterprise` `area:models`
- **社区反应**：1 条评论 · 👍 1 · **创建于 2026-08-09，24 小时内仍在更新**
- **链接**：https://github.com/github/copilot-cli/issues/4422
- **为什么重要**：用户报告昨天还能正常使用 Claude 模型，今天突然全部被禁用；**回滚 CLI 版本无效**，说明问题很可能出在服务端策略变更。新发即获得关注，且与 #4390 一起揭示企业模型策略的脆弱性。

### 🔧 #3954 explore 工具硬编码 `gpt-5.4-mini`，无视自定义/DeepSeek 配置
- **标签**：`area:agents` `area:models`
- **社区反应**：2 条评论 · 👍 3
- **链接**：https://github.com/github/copilot-cli/issues/3954
- **为什么重要**：自 v1.0.65 起，`explore` 工具忽略用户配置的自定义模型端点（如 DeepSeek），强行传 `gpt-5.4-mini`，导致调用失败。这直接破坏了支持自定义模型配置的用户的信任，CLI 不应在子代理中硬编码默认模型。

### 💾 #4424 `/compact` 在会话达到 5MB CAPI 限制后无法恢复
- **标签**：`area:sessions` `area:context-memory`
- **社区反应**：0 条评论 · 新建于 2026-08-10
- **链接**：https://github.com/github/copilot-cli/issues/4424
- **为什么重要**：当会话到达 CAPI Responses 请求的 5MB 上限后，普通 prompt 失败可以理解，但 **`/compact` 也一并失效**，使得用户没有任何自救手段来压缩上下文字符串，只能被迫丢弃整个会话。这对长会话重度用户是致命问题。

### 🛡️ #4419 托管设置过渡期的"空 allow-list"误杀用户 MCP 服务器
- **标签**：`area:enterprise` `area:mcp`
- **社区反应**：0 条评论 · 新建于 2026-08-09
- **链接**：https://github.com/github/copilot-cli/issues/4419
- **为什么重要**：CLI 在解析 managed settings 期间会安装一个**临时的"deny everything" MCP 策略**（`managedAllowedMcpServerLists: [[]]`），任何在此窗口内注册的用户 MCP 服务器都会被永久拒绝，甚至在没有托管策略的账号上也能复现。属于企业安全机制与用户配置之间的严重冲突。

### ⏱️ #4421 MCP initialize 握手硬编码 60 秒超时，且无重试机制
- **标签**：`area:mcp`
- **社区反应**：0 条评论 · 新建于 2026-08-09
- **链接**：https://github.com/github/copilot-cli/issues/4421
- **为什么重要**：MCP 的 `initialize` 握手被绑定在 **60,000ms 的硬编码预算**内，一旦超时即记录失败且**整个会话内不再拉起该服务器**。报告人指出 npx 启动的 stdio 服务器约有 **29% 的会话失败率**，且无法配置超时、没有退避重试，严重影响 MCP 生态的可用性。

### ⚡ #4416 并行 explore 子代理集中打爆单一模型配额（429）
- **标签**：`area:agents` `area:models`
- **社区反应**：0 条评论 · 新建于 2026-08-09
- **链接**：https://github.com/github/copilot-cli/issues/4416
- **为什么重要**：并行启动的 `explore` 子代理全部默认使用同一轻量模型（当前为 `claude-haiku-4.5`），将所有请求集中到一个模型配额桶上，导致 429 限流。且**没有退避机制、不会自动切换到其他可用模型**（尽管 `eligibleForAutoSwitch` 标记存在），最终整体任务失败。

---

## 4. 重要 PR 进展

**过去 24 小时内无 PR 活动**（0 条更新）。

也就是说：没有新的合并、创建或变更请求。公开仓库的 PR 动态在本次统计窗口内为空。值得关注的是，v1.0.79 Release 已落地，相关修复的源代码变更可能在后续以 PR 形式可见。

---

## 5. 功能需求趋势

从本期 Issues 中可以提炼出以下社区最关注的功能方向：

| 方向 | 代表 Issue | 说明 |
|------|-----------|------|
| **细粒度推理力度控制** | #2904 | 为每个自定义 Agent 单独指定 reasoning effort，而非全局统一设置 |
| **自定义模型全链路支持** | #3954 | `explore` 等内部工具应尊重自定义 API 端点，不应硬编码默认模型 |
| **企业模型目录准确性** | #4390、#4422 | 组织端启用的模型需实时、一致地同步到 CLI 的模型选择列表中 |
| **大会话韧性与恢复** | #4325、#4424 | 长会话达到体积上限后，`/compact` 等机制必须可用，提供兜底的恢复路径 |
| **MCP 连接可靠性与可配置性** | #4419、#4421 | 握手超时需要可配置、可重试；安全策略过渡期不能误删用户配置 |

---

## 6. 开发者关注点

### 企业策略类问题集中爆发
- #1595、#4390、#4422 三条彼此关联：**企业账号下的模型访问频繁被策略误拦、误禁**，且#4422 显示回滚 CLI 版本无效，疑似服务端变更引发。企业用户对"昨天能用、今天全禁用"的体验尤为不满。

### MCP 生态稳定性不足
- 握手超时硬编码（#4421）、空闲连接被 NAT 静默丢弃（#3257）、临时 deny-all 窗口（#4419）——MCP 服务器在真实网络中仍缺乏基本的容错与重试机制，这是 npx 类动态 MCP 服务器落地的主要障碍。

### 大会话恢复能力欠缺
- `events.jsonl` 超过 V8 字符串上限导致会话永久不可加载（#4325）、5MB CAPI 限制后 `/compact` 失效（#4424）——**会话体积增长到一定规模后，用户没有任何自救手段**，只能放弃整个会话，这是长场景开发工作流中的严重缺陷。

### Windows 平台的持续痛点
- 插件更新被 VS Code 的 watcher 句柄阻塞（#4095）、终端渲染回归导致主面板冻结（#4222）——Windows 用户在插件管理和 TUI 渲染两个方向上都期望得到修复优先级的提升。

### 模型选择的"不可控感"
- "explore 工具硬编码模型"（#3954）、"并行子代理集中 429 限流且不自动切换"（#4416）、"无法按 Agent 配置推理力度"（#2904）——高级用户希望拥有对模型行为和负载分布的**最终控制权**，以便在自定义端点、企业配额等约束下稳定工作。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报（2026-08-11）

## 今日速览
- 过去24小时仓库无新版本发布，也无新PR合并，项目处于收敛期。
- 唯一活跃的 Issue #1283“记忆系统”持续升温，开发者对跨会话上下文持久化的需求呼声明显，评论数已增至31条。
- 该 Issue 虽获 👍 数不高，但讨论质量较高，已形成若干实现方向，值得项目方优先评估。

## 版本发布
无。过去24小时无新版本 Release。

## 社区热点 Issues

> 说明：过去24小时更新的 Issue 仅有 1 条，本期完整盘点如下。若需更丰富的精选列表，建议将观察窗口扩展至近一周。

### #1283 [OPEN] 功能请求：记忆系统——跨会话持久化上下文
- **作者**: CatKang
- **创建**: 2026-02-27
- **更新**: 2026-08-10
- **评论数**: 31 | 👍: 0
- **链接**: https://github.com/MoonshotAI/kimi-cli/issues/1283

**核心诉求**  
实现一套“记忆系统”，包含：
- **自动记忆**：AI 自主整理和存储项目中的关键模式、用户偏好、常见错误修复等；
- **手动记忆**：用户通过命令（如 `/remember`）或配置文件显式指定需长期保留的指令与上下文。

**为什么重要**  
- 该 Issue 直击 AI CLI 类工具在真实工作中的最大痛点——每次新会话都要重新“教育”模型，浪费 token 且易遗漏上下文。
- 评论区内开发者一致认为，记忆系统的引入将把 Kimi Code CLI 从“无状态工具”提升为“项目级智能助手”，对 Agent 工作流意义重大。

**社区反应与讨论焦点**  
虽然 👍 数不高（可能因该仓库点赞习惯较弱），但31条评论显示讨论热度在持续积累。讨论焦点集中在：
1. **记忆粒度控制**：项目级（`.kimi/memory.md`）与全局级（`~/.kimi/memory`）如何分层；
2. **遗忘机制**：是否需要显式 `/forget` 命令，以及自动记忆的淘汰策略；
3. **隐私与安全**：防止在自动记忆时捕获 API Key、密码等敏感信息，建议增加“敏感信息辨识”或“记忆审计日志”；
4. **与其他工具对比**：多名开发者提到 Claude Code 的 CLAUDE.md 和 Cursor 的 rules 机制，希望 Kimi 能兼容或超越这些模式。

## 重要 PR 进展
无。过去24小时无新 PR 提交或合并。结合仓库近期动态，推测项目团队可能正在集中处理内部重构或下一版本规划，社区贡献者可留意后续动态。

## 功能需求趋势
基于当前活跃 Issue 及仓库历史讨论，社区最关注的功能方向可归纳为：

1. **持久化记忆/上下文管理**  
   Issue #1283 是当前最大公约数——开发者希望“一次配置，长期生效”，减少重复描述项目背景的成本。

2. **IDE 集成**  
   尽管 CLI 本身足够灵活，但已有开发者提议与 VS Code 等编辑器深度整合（如内嵌终端、代码高亮、右键菜单唤起），以提高日常易用性。

3. **多模型切换与自主路由**  
   不少用户希望在 CLI 内自由切换 Kimi 系列不同版本（如 K2、K2 Thinking），甚至接入 OpenAI/Anthropic 等第三方模型，以对比输出质量或按任务类型自动选择。

4. **性能优化**  
   针对大型代码库的索引速度、上下文压缩策略（如自动精简旧对话）是长期存在的性能痛点。

5. **Windows 原生体验**  
   虽有 WSL 可绕行，但部分 Windows 用户仍希望获得原生 PowerShell/cmd 支持，包括终端渲染、长路径兼容等。

## 开发者关注点

- **跨会话记忆缺失**：开发者普遍反馈，每次新会话都要重复“请先阅读项目结构”“统一使用 xxx 风格编码”等指令，严重影响效率。
- **记忆可控性与安全边界**：一方面希望 AI 自动记忆，另一方面又担心意外记录敏感信息。社区建议增加“记忆查看器”和“敏感词过滤”。
- **配置迁移成本**：其他工具（如 Claude Code、Aider）用户希望无痛迁移现有配置文件，或提供兼容格式。
- **Agent 模式的自主权限管理**：随着 CLI 支持 Agent 能力，开发者要求更细粒度的“命令执行前确认”机制，防止 AI 误操作。

---
*本日报基于 GitHub MoonshotAI/kimi-cli 仓库公开数据生成。由于过去24小时数据量有限，Issue/PR 部分的详尽程度受限于实际动态，建议明日回溯更长窗口以获取更全面的社区全景。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-08-11

## 1. 今日速览

OpenCode 发布 v1.18.16 补丁版本，修复配置解析与 Home 项目注册问题。社区方面，**#30086「新版 CPU 占用飙升」以 46 条评论成为最热 Issue**，性能回退问题引发广泛共鸣。此外，v2 桌面版 Beta 发布流程已通过 PR 提上日程，同时多个核心架构重构 PR 陆续合并，社区在向「core 服务与文件系统解耦」的方向稳步推进。

---

## 2. 版本发布

### v1.18.16

**Core 修复**
- 忽略未知的顶层配置字段，不再因多余配置导致解析失败
- 注册从 Home 打开的项目，确保其在应用其余部分可见

**Desktop 改进**
- 在 Home 中支持右键打开项目菜单

**Desktop 修复**
- 回退到文件列表展示（Fall back to listing）

🔗 https://github.com/anomalyco/opencode/releases

---

## 3. 社区热点 Issues（10 条）

### 性能与稳定性

**#30086 — 新版本 CPU 使用率飙升**（46 评论 · 22 👍）
用户反馈 7 天前开始 CPU 占用剧增：之前可同时运行 10+ 个 OpenCode 会话，现在 3 个就拖慢整个系统，鼠标都开始卡顿。社区热度最高的 Issue，强烈建议优先排查。  
🔗 https://github.com/anomalyco/opencode/issues/30086

**#26220 — 工具调用完成后进入死循环**（8 评论 · 4 👍）
OpenCode 在完成工具调用后陷入无限循环、不再响应输入，进程存活但毫无进展。影响会话连续性和自动化场景。  
🔗 https://github.com/anomalyco/opencode/issues/26220

**#40816 — edit 工具每次调用保留全文件快照导致长会话变慢**（2 评论）
`edit` 工具在每次 tool part 中存储完整文件 before/after 内容，会话 prompt 管线在每次请求时 hydrate 全部 parts，长会话下每次 prompt 都越来越慢。是长会话性能退化的核心诱因之一。  
🔗 https://github.com/anomalyco/opencode/issues/40816

### IDE 集成与文档

**#10517 — VS Code 插件安装说明不明确**（8 评论 · 24 👍）
用户尝试了文档中所有排查步骤，`code` 命令已安装、切换 shell 均无效，插件始终装不上。社区点赞数最高的 Issue，说明 VS Code 扩展安装体验是当前最集中的痛点之一。  
🔗 https://github.com/anomalyco/opencode/issues/10517

**#31500 — VS Code 扩展无法安装 / 缺少手动安装链接**（5 评论 · 2 👍）
文档提到 VS Code 扩展，但用户不知道装哪个；终端输入 `opencode` 也没有触发安装。与 #10517 同属一类问题。  
🔗 https://github.com/anomalyco/opencode/issues/31500

### 模型与提供商

**#40958 — DeepSeek V4 Flash Free 元数据显示 200K 上下文，实际原生支持 1M**（4 评论 · 1 👍）
models.dev 元数据将 DeepSeek V4 Flash Free 的上下文限制为 200K，而模型原生支持 1M。元数据配置问题削弱了长上下文编码任务中的实用性。  
🔗 https://github.com/anomalyco/opencode/issues/40958

**#37389 — opencode2 v2：Copilot 多轮对话在发送 item_reference 时 404**（7 评论 · 4 👍）
`github-copilot/gpt-5.5` 在 opencode2 v2 中间歇性失败，报空 `provider.unknown` 错误。v2 用户已受影响，此前的 #37261 被错误关闭后重新提交。  
🔗 https://github.com/anomalyco/opencode/issues/37389

### 配置与功能缺陷

**#35432 — `tool_call: false` 配置不生效**（3 评论）
模型配置中设置 `tool_call: false` 被 prompt loop 忽略，代码仍然无条件解析 SessionTools 并发送到请求中。对使用不支持工具调用的模型（如未开启功能的 morphllm）造成直接影响。  
🔗 https://github.com/anomalyco/opencode/issues/35432

**#14041 / #41609 — 复制消息为原始 Markdown**（10 / 2 评论）
用户需要复制 LLM 回复的原始 Markdown，目前只能手动选中文本。一个曾被关闭的旧请求，今天被重新提出，说明该功能需求始终未被满足。  
🔗 https://github.com/anomalyco/opencode/issues/14041 · https://github.com/anomalyco/opencode/issues/41609

**#41598 — /undo 与「Revert Message」只回退聊天记录，不回退代码编辑**（2 评论）
桌面端用户反馈「撤销」按钮只恢复对话历史，工作区中的代码修改没有回滚。建议增加一键回退代码的能力。  
🔗 https://github.com/anomalyco/opencode/issues/41598

---

## 4. 重要 PR 进展（10 条）

### 版本与发布流程

**#41626 — feat(desktop): 发布 v2 Beta 桌面版构建**（全新）
从 v2 分支构建并发布桌面 Beta 版本，捆绑同名 V2 CLI；V2 npm 发布保持在 next 通道，跳过 npm beta 发布。v2 用户可望更快获得桌面端预览。  
🔗 https://github.com/anomalyco/opencode/pull/41626

**#41627 — chore: 从 v2 运行 beta 同步**（全新）
默认分支的定时任务改为先 checkout v2 再同步 beta，串行化执行避免并发冲突。需先合并 #41626。  
🔗 https://github.com/anomalyco/opencode/pull/41627

### 模型与提供商

**#14743 — 改善 Anthropic prompt 缓存命中率**（跨会话缓存修复）
修复跨仓库、跨会话场景下 Anthropic prompt 缓存 miss 的问题，通过系统提示拆分和工具稳定性提升缓存命中。关联 #5416、#5224、#14065、#5422、#14203。  
🔗 https://github.com/anomalyco/opencode/pull/14743

**#41620 — 为 DeepSeek V4 Flash 设定采样默认值**（scope 到具体版本）
将显式版本号 DeepSeek V4 Flash 0731 的 `top_p` 默认设为 0.95，同时应用到滚动别名、OpenCode Zen 与 Go aliases；保留第三方和自托管旧版 V4 Flash 的提供方默认值。呼应 #40249 与已合并的 #40247。  
🔗 https://github.com/anomalyco/opencode/pull/41620

### CLI 与 TUI

**#41525 — feat(cli): 嵌入 Web UI**（全新功能）
在 Bun 和 Node CLI 发行版中嵌入 Web 应用，`opencode serve` 同时提供 Web UI 与 API；新增 `opencode web` 命令和 TUI `/web` 命令，支持认证后自动打开浏览器。  
🔗 https://github.com/anomalyco/opencode/pull/41525

**#41624 — fix(tui): 折叠 execute 子详情**（贡献者）
Code Mode 中每个 `execute` 子项默认限制为一行，点击可展开完整输入和错误信息，再次点击折叠。解决长命令 wrap 导致的界面混乱。  
🔗 https://github.com/anomalyco/opencode/pull/41624

**#41623 — fix(merman): 移除时序图生命线渐隐**（贡献者）
移除 #41617 引入的时序图底部五行渐隐效果，生命线在最后一行后直接结束。视觉更干净。  
🔗 https://github.com/anomalyco/opencode/pull/41623

### 核心架构

**#41622 — refactor(core): skill 服务只存值，文件系统由配置插件负责**（贡献者）
将 skill 服务变为纯注册表，所有文件扫描、解析、URL 加载和监听移入 `ConfigSkillPlugin`，延续 #40954 的核心服务方向。  
🔗 https://github.com/anomalyco/opencode/pull/41622

**#41619 — fix(util): 全局模块加载不再产生文件系统副作用**（贡献者）
移除 `@opencode-ai/util/global` 导入时的三个顶层 await 写盘操作，保证模块加载纯净。是 Cloudflare workerd 启动的前置条件。  
🔗 https://github.com/anomalyco/opencode/pull/41619

**#41618 — refactor(core): 插件发现与监听移至配置侧**（贡献者）
`PluginSupervisor` 只负责模块导入、选择、生命周期与激活；目录发现、目标解析、插件源分类等全部交给配置侧。核心服务与文件系统解耦系列的一部分。  
🔗 https://github.com/anomalyco/opencode/pull/41618

### 桌面端

**#41625 — fix(app): 桌面菜单加速键接入 renderer 命令**（全新）
Windows/Linux 桌面端应用内渲染 Window/View 菜单，而非使用原生 Electron 菜单，导致加速键（accelerators）失效。此 PR 将菜单快捷键正确接入 renderer 命令处理。  
🔗 https://github.com/anomalyco/opencode/pull/41625

**#37834 — fix(desktop): 处理 process.stderr 异步 EPIPE**（合并）
父终端关闭后桌面应用因未捕获的 EPIPE 崩溃。此 PR 为 stderr 添加异步错误处理，避免退出崩溃。关闭 #37749。  
🔗 https://github.com/anomalyco/opencode/pull/37834

### i18n

**#40977 — fix(i18n): zh locale 中用「词元」替代「令牌」**（合并）
中文界面中「token」译为「令牌」在 LLM 语境下易混淆（令牌通常指 API 访问凭证），PR 将 7 处「令牌」替换为「词元」。  
🔗 https://github.com/anomalyco/opencode/pull/40977

---

## 5. 功能需求趋势

从今日 Issues 与 PR 中可提炼出四个最突出的社区方向：

1. **IDE 集成与 VS Code 扩展体验**（#10517、#31500、#16217）
   插件自动安装失败、文档指引不明确、扩展市场同名产品混淆——VS Code 集成是当前用户最渴望改善的环节，且问题重复出现率极高。

2. **性能与长会话稳定性**（#30086、#40816、#26220）
   从 CPU 飙升到工具快照膨胀导致的逐 prompt 延迟，社区对性能回退与长会话效率的抱怨日益集中，已成为最紧急的修复方向。

3. **模型支持与元数据准确**（#40958、#37389、#41620、#14743）
   DeepSeek V4 Flash 上下文限制、Copilot 404、采样参数默认值、Anthropic 缓存命中——社区对模型接入的正确性和参数调优非常敏感。

4. **核心服务与文件系统解耦**（#41622、#41618、#41619）
   kitlangton 连续提交多个「core 服务只存值、配置侧管文件」的架构重构 PR，并被陆续合并，预示 OpenCode 正为嵌入式场景和 Cloudflare 等无服务器运行时做准备。

---

## 6. 开发者关注点

- **VS Code 扩展安装链路不透明**：自动安装失败后，文档没有给出清晰的手动安装指引，用户需要自己猜应该装哪个扩展。
- **长会话越用越慢**：`edit` 工具的快照机制导致 session 数据无限膨胀，每次 prompt 都要重新 hydrate 全部历史，这是可感知的性能瓶颈。
- **无法关闭工具调用**：`tool_call: false` 配置被忽略，限制了不支持工具调用的模型的可用性。
- **回退能力不完整**：/undo 和「Revert Message」只恢复聊天记录，不还原代码变更，用户期望一键同时回退。
- **桌面端细节影响日常使用**：输入框焦点丢失（#40866）、切换标签后文件状态丢失（#41560）、draft 跨会话串扰（#41614）等问题高频出现。
- **社区参与活跃**：kitlangton 和 rekram1-node 等多位贡献者提交高质量 PR，核心架构与 i18n 均有外部推动，显示社区协作正在加深。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-08-11

## 今日速览

今日动态集中在 TUI 全屏体验补全（搜索、固定顶栏、逐行滚动）和多项可靠性修复（Bedrock 工具参数清洗、Alt+Enter 误中断）。Cloudflare AI Gateway 新 transport 与跨后端搜索重构也在推进中；WSL 下 Copilot 登录挂起问题已持续 6 周仍为社区最热 Issue。

## 社区热点 Issues

1. **[#6187] Pi login hangs in WSL after browser-based GitHub Copilot device authorization**（OPEN，21 评论）
   最热 Issue。WSL 内设备授权成功后客户端无法感知，登录永久挂起，自 6 月 30 日以来仍未解决。
   https://github.com/earendil-works/pi/issues/6187

2. **[#7850] GitHub Copilot login fails with 429 (Rate Limiting) for organizations with many models**（CLOSED，2 👍）
   企业组织启用 20+ 可用模型时，Copilot 登录触发限流。影响大型团队采用。
   https://github.com/earendil-works/pi/issues/7850

3. **[#7782] Invalid tool call from Bedrock poisoned pi session**（CLOSED）
   Bedrock 生成的工具调用含空 key（`""`），Pi 持久化后每次重放导致会话永久卡死，需在上游校验参数。已由 PR #7882 修复。
   https://github.com/earendil-works/pi/issues/7782

4. **[#7876] Alt+Enter intermittently aborts the running task**（CLOSED）
   Legacy 终端下 Alt+Enter 被拆为 `ESC`+`CR`，10ms 超时导致误判为中断。修复方案将转义序列超时放宽至 100ms。
   https://github.com/earendil-works/pi/issues/7876

5. **[#7836] Edit fuzzy match misses lines with differences in whitespace length**（OPEN，1 👍）
   `normalizeForFuzzyMatch` 未折叠连续空白和行首缩进，小模型在 edit 调用时容易因空白差异匹配失败。
   https://github.com/earendil-works/pi/issues/7836

6. **[#7783] agent_end handler sendMessage({triggerTurn:false}) still starts a turn**（OPEN）
   `isStreaming` 在 agent_settled 前保持 true，导致显示用自定义消息意外触发新的 assistant turn。
   https://github.com/earendil-works/pi/issues/7783

7. **[#7846] Unable to start 0.84.0/0.84.1 with bun runtime**（OPEN，1 👍）
   Bun 下 `zlib.createZstdDecompress is not a function` 导致启动崩溃，影响 Bun 用户升级。
   https://github.com/earendil-works/pi/issues/7846

8. **[#7791] Global Undici dispatcher inherits 16 KiB maxHeaderSize**（OPEN）
   全局代理未设置 `maxHeaderSize`，大响应头触发 `UND_ERR_HEADERS_OVERFLOW`，限制自定义网关/代理场景。
   https://github.com/earendil-works/pi/issues/7791

9. **[#7896] cloudflare-ai-gateway provider omits strict:false**（OPEN）
   经 Cloudflare AI Gateway 时可选工具字段被强转为必填，直接 OpenAI 则正常，协议透传不一致。
   https://github.com/earendil-works/pi/issues/7896

10. **[#7917] TUI fullscreen mode: rendering corruption, host app freeze, GPU spike**（CLOSED）
    嵌入终端（Orca）中全屏模式导致转录渲染损坏、主机应用冻结，触发 GPU 峰值。终端兼容性风险。
    https://github.com/earendil-works/pi/issues/7917

## 重要 PR 进展

1. **[PR #7913] feat(tui): add fullscreen transcript search**（OPEN）
    为全屏模式新增 `Ctrl+Shift+f` 转录搜索，补全全屏浏览能力。
    https://github.com/earendil-works/pi/pull/7913

2. **[PR #7906] feat(coding-agent): add fullscreen fixed top bar**（CLOSED）
    全屏模式新增固定顶栏，显示缩写 cwd、git 分支、上下文用量与自动压缩状态。
    https://github.com/earendil-works/pi/pull/7906

3. **[PR #7882] fix(ai): sanitize empty Bedrock tool argument keys**（CLOSED）
    仅在重放时移除空属性名，不修改持久化参数，修复 #7782 的会话毒化问题。
    https://github.com/earendil-works/pi/pull/7882

4. **[PR #7901] feat(ai): AI Gateway transport over the Cloudflare AI binding**（OPEN）
    实现 Cloudflare Workers AI Gateway 传输层，对应需求 #7838。
    https://github.com/earendil-works/pi/pull/7901

5. **[PR #7899] fix(tui): prevent split Alt+Enter from interrupting**（OPEN）
    非 Kitty 协议下将转义序列超时从 10ms 提升到 100ms，避免 Alt+Enter 误中断任务。
    https://github.com/earendil-works/pi/pull/7899

6. **[PR #7905] fix(config): refine pnpm detection and validate managed install**（CLOSED）
    修复路径包含 `/pnpm/` 即判定为 pnpm 安装的误报，并验证受管安装后再提示更新命令。
    https://github.com/earendil-works/pi/pull/7905

7. **[PR #7904] fix(edit): normalize single-object edits argument to array**（CLOSED）
    允许模型以单个 `{oldText, newText}` 对象代替数组调用 edit 工具，提升与弱模型的兼容性。
    https://github.com/earendil-works/pi/pull/7904

8. **[PR #7910] feat(coding-agent): add canonical message identity to markdown transformer**（OPEN）
    为 `MarkdownTransformContext` 增加规范消息 ID，使扩展可在流式/重绘/恢复渲染间关联状态。
    https://github.com/earendil-works/pi/pull/7910

9. **[PR #7897] fix(coding-agent): inherit subagent session config**（OPEN）
    子代理继承当前会话的 model/thinking 配置，而非跟随任意最后设置的会话。
    https://github.com/earendil-works/pi/pull/7897

10. **[PR #7881] fix(ai): reject item_\* content IDs in message-level input[].id fields**（CLOSED）
    修复 Responses API 中 `item_*` 与 `msg_*` 命名空间混用导致的消息割裂问题。
    https://github.com/earendil-works/pi/pull/7881

## 功能需求趋势

- **TUI/AltScreen 全屏体验补全**：搜索（#7913）、固定顶栏（#7906）、逐行滚动（#7903）、sticky header（#7802）、窄窗 footer 响应式（#7884/#7879）。
- **Cloudflare 生态接入**：AI Gateway over AI binding（#7838/#7901）受到关注，并与 Cloudflare OS 仓库联动。
- **终端兼容性与稳定性**：WSL、tmux、SSH、嵌入终端（Orca/iTerm2）的渲染与输入问题频发（#6187、#7876、#7917、#7892）。
- **模型提供方适配**：DeepSeek baseUrl 大小写（#7886）、AI21 API 退役迁移（#7869）、Codex 请求缓冲耗尽识别（#7867）、Bedrock Mantle provider（#6216）。
- **包生态与分发**：npm search 索引不稳定（#7885）、包页 500（#7916）、建议新增 man page（#7888）、pnpm 安装误判（#7905）。

## 开发者关注点

- **登录/授权流程脆弱**：WSL 设备授权回环无法感知（#6187）、Copilot 企业多模型触发 429（#7850），影响新用户上手与团队部署。
- **工具调用可靠性**：非法参数未校验导致会话毒化（#7782）、edit 模糊匹配对空白不敏感（#7836）、单对象 edits 参数被拒（#7904）。
- **TUI 交互反馈异常**：Alt+Enter 误中断运行任务（#7876）、长输出滚动跳动（#7861）、失焦触发无意义重绘造成假活动指示（#7892）。
- **运行时兼容性**：Bun 下 zstd 缺失启动崩溃（#7846）、全局 fetch headers 16 KiB 上限（#7791）。
- **流式与压缩状态**：回答随机截断（#7855）、compaction 摘要重复渲染（#7891）干扰会话连续性。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-08-11

## 1. 今日速览

昨日正式版 v0.21.9 发布，新增 Qoder 插件多来源安装与 QR 码 Local Control 配对；多智能体 Fleet 架构进入集中落地期（4 个关联 Issue + 配套 PR），同时 WebShell 与终端渲染稳定性成为社区反馈最密集的两个方向，另有多个 P1 级会话管理 Bug 正在修复中。

## 2. 版本发布

### v0.21.9（正式版）
- **插件生态扩展**：原生支持从目录、归档、Git 仓库、URL 及 npm 包安装 Qoder 插件，并自动加载系统提示词（[#8661](https://github.com/QwenLM/qwen-code/pull/8661)）
- **Local Control**：支持通过二维码完成配对，降低桌面端连接门槛

### v0.21.9-nightly.20260811.8c90697ace
- 内存模块测试覆盖：验证上下文刷新标记在连续对话轮次的传递行为（[#8809](https://github.com/QwenLM/qwen-code/pull/8809)）

## 3. 社区热点 Issues（10 个）

### 🔥 多智能体与 Fleet 架构
1. **RFC: 多 Qwen 会话原生协调机制**（[#8718](https://github.com/QwenLM/qwen-code/issues/8718)）
   评论 8 | `need-discussion` | 提出 leader 异步调度多个独立 worker、观察共享状态并收集结构化结果的显式协调路径。Fleet 的 umbrella issue，带动了 4 个 stage 子任务，是当前社区最受关注的方向。

### 🐛 终端渲染
2. **启动 Banner 首帧缺失顶部行**（[#8124](https://github.com/QwenLM/qwen-code/issues/8124)）
   评论 10 | `welcome-pr` | 首帧渲染时 ASCII logo 顶部 ~3 行偶发缺失，与 provider 状态更新相关。已存在较长时间，社区讨论活跃，期待新贡献者接手。
3. **终端窗口缩小时 scrollback 出现重复内容**（[#8557](https://github.com/QwenLM/qwen-code/issues/8557)）
   评论 8 | macOS/Warp 复现 | 窗口变窄时已打印的 transcript 被重复输出堆叠。已牵扯出 #8831 渲染修复 PR，属于终端渲染问题群的核心案例。

### 🚨 P1 级问题
4. **Provider 更新静默改写 model.name 与 baseUrl**（[#8863](https://github.com/QwenLM/qwen-code/issues/8863)）
   P1 | 0.21.x 回归 | 用户选择 “Update all” 后，若当前模型不属于该 provider，配置文件会被静默替换为内置列表第一个模型、baseUrl 被清空。实测 0.21.6/0.21.7/0.21.8/0.21.9 均受影响，配置安全信任度受较大冲击。
5. **rewind 索引与自动 user-role 历史条目错位**（[#8885](https://github.com/QwenLM/qwen-code/issues/8885)）
   P1 | daemon | 模型侧 Content 历史包含 cron 提示、后台通知等自动 user 条目，而 ChatRecordingService 的 turn 边界未对齐，导致 rewind 索引错位。由 #8838 暴露，修复将影响会话回滚稳定性。
6. **大会话恢复超时时丢失当前会话**（[#8678](https://github.com/QwenLM/qwen-code/issues/8678)）
   P1 | daemon | 恢复超时后当前会话被丢弃。PR1（#8691）已合入实现超时契约与可观测性，但后续阶段仍在进行中，serve 模式可靠性关键问题。

### 🔧 功能缺陷
7. **OpenAI 日志无界增长至 ~95 GB**（[#8860](https://github.com/QwenLM/qwen-code/issues/8860)）
   启用 `enableOpenAILogging` 后，每个 API 调用写一个 JSON 文件，两个月积累 34 万文件、95GB 且无轮转或清理策略，影响长时间运行的开发机磁盘。
8. **ACP 子进程报 “Unknown argument: acp”**（[#8871](https://github.com/QwenLM/qwen-code/issues/8871)）
   `qwen serve --http-bridge=true` 时主进程向子进程传递 `--acp` 参数，子进程无法解析，导致 token 认证 401、功能不可用。
9. **Provider 更新提示重复出现**（[#8504](https://github.com/QwenLM/qwen-code/issues/8504)）
   更新完成后如有自定义模型保留，`Built-in Provider Update` 弹窗反复出现。与 #8863 同属 provider 更新链路问题，用户操作被阻断。
10. **Autofix 与 review-pr 工作流互相取消形成死循环**（[#8888](https://github.com/QwenLM/qwen-code/issues/8888)）
    机器人 PR 上 autofix 推 commit → 触发 review-pr 的 synchronize → 新 push 取消进行中的 review → 循环往复。CI 自动化基础设施的自我干扰问题，影响维护效率。

## 4. 重要 PR 进展（10 个）

1. **模型专属推理控制全链路落地**（[#8675](https://github.com/QwenLM/qwen-code/pull/8675)）
   `autofix/takeover` | 新增内置模型 reasoning-controls 注册表，在 Core、ACP、daemon、SDK、WebShell 全链路支持 Thinking 和 Effort 控制，首个接入模型为 qwen3 系列。打通端到端推理参数控制。

2. **ACP 技能管理模块化重构**（[#8865](https://github.com/QwenLM/qwen-code/pull/8865)）
   将 ACP Skill 的获取、安装、删除、启停收敛到独立内部模块，并复用扩展方法路由，降低技能管理代码的维护复杂度。

3. **CI：Autofix 进度流式输出**（[#8895](https://github.com/QwenLM/qwen-code/pull/8895)）
   Autofix 进程现在边执行边产出流式部分进度，空闲看门狗可区分“正在干活”和“已卡死”，减少 CI 任务误杀。

4. **守护进程 Git 跨工作树变异防护**（[#8687](https://github.com/QwenLM/qwen-code/pull/8687)）
   针对 `run_shell_command` 中 `-C`、`--work-tree`、`--git-dir` 参数识别仓库迁移行为，当目标逃逸会话工作区时阻止变更类命令，加固 serve 模式的 Git 操作边界。

5. **Mock 工作区路径包含逻辑对齐**（[#8759](https://github.com/QwenLM/qwen-code/pull/8759)）
   统一测试桩与生产环境的 `isPathWithinWorkspace` 语义：对工作区根与候选路径做 canonicalize，同时保留 `getDirectories()` 的词法路径，消除测试与生产行为差异。

6. **修复 Banner 重复与拖动闪烁**（[#8831](https://github.com/QwenLM/qwen-code/pull/8831)）
   定位 #8557 根因：宽度缩小时渲染器按旧宽度计算行数导致清屏不彻底，之后每次重绘叠一层副本。修复宽度变化时的重排与唤醒渲染路径。

7. **WebShell Channel 与工作区管理重新设计**（[#8848](https://github.com/QwenLM/qwen-code/pull/8848)）
   `review/self-reported` | Channel 管理界面暴露直连消息、群组访问、会话路由、工作区所有权控制，支持为每个适配器配置策略，并把用户/群组 allowlist 纳入管理。

8. **WebShell 会话目录共享调度器**（[#8891](https://github.com/QwenLM/qwen-code/pull/8891)）
   按 daemon client 隔离的页级会话目录缓存，相同查询共享已缓存页与 in-flight 请求；全局限制列表并发 2、后台并发 1，避免会话列表操作打爆服务端。

9. **桌面端 0.1.1 回归缺口修补**（[#8896](https://github.com/QwenLM/qwen-code/pull/8896)）
   修复按住录音手势在 React 未提交中间状态时提前停止、SSE 正常结束时误触重连、macOS 发布构建重新生成签名的三个回归问题。

10. **定时 cron 提示持久化**（[#8838](https://github.com/QwenLM/qwen-code/pull/8838)）
    自动触发的定时提示在模型轮次前通过既有 cron 消息契约写入会话记录，内容与 ACP 实时回显一致，解决会话恢复后定时提示丢失问题（关联 #8837、#8885）。

## 5. 功能需求趋势

- **多智能体/Fleet 协作**：以 #8718 为中心，连续提出 4 个 stage Issue（#8840/#8841/#8842/#8843），从 in-process 预览推进到持久化恢复和终端附加的完整 MVP。这是当前最明确的战略方向。
- **WebShell 管理能力升级**：Channel 策略重设计（#8845）、会话目录调度（#8891）、SSE 重连提示优化（#8887），WebShell 从“能用”走向“可管、可控、可运营”。
- **serve/daemon 模式生产化**：会话恢复超时安全（#8678）、工作区外文本写权限（#8851）、工作区级项目记忆默认化（#8854）、日志轮转（#8860）——守护进程模式面向生产环境补齐治理能力。
- **会话数据完整性**：rewind 索引对齐（#8885）、cron 提示持久化（#8837）、后台任务阻塞 `/clear` 时可解释（#8741）。用户开始要求历史记录链路完全可信。
- **终端 UI 稳定性**：banner 闪烁、输入框抖动、scrollback 重复等渲染问题被集中提出，且相互关联（#8557/#8831/#8849/#8124），是影响日常体验的高频痛点。

## 6. 开发者关注点

- **终端渲染问题长期未愈**：Banner 缺失、缩放重复、输入框抖动等 TUI 渲染缺陷横跨多个版本，用户开始为同一批问题反复追加反馈。
- **Provider 更新逻辑引发信任危机**：#8863 的静默覆盖模型配置问题和 #8504 的重复提示问题叠加，使用自定义模型的用户对 “Update all” 操作已产生明显的抵触情绪。
- **会话恢复与数据一致性焦虑**：会话恢复超时丢失当前状态、rewind 索引错位、定时提示恢复后消失——这些问题让重度用户对长期会话的可靠性存疑。
- **日志与磁盘资源失控**：OpenAI 日志 95GB 无上限增长的案例被广泛引用，资源敏感型用户呼吁默认轮转策略。
- **CI 自动化自我干扰**：autofix 与 review-pr 互相取消的循环、CI 失败自动上报机器人（#8847/#8870）的噪音，社区维护者对自动化工作流的稳定性提出了更高要求，希望“机器人别打架”。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

**DeepSeek TUI 社区动态日报 — 2026-08-11**

> 数据快照：`Hmbown/DeepSeek-TUI` / `Hmbown/CodeWhale`。  
> 提示：当前抓取到的 Issue/PR 均指向 **Hmbown/CodeWhale** 仓库，推测原 DeepSeek-TUI 已完成迁移或更名。

## 1. 今日速览

过去 24 小时没有独立的 GitHub Release 记录，但 `v0.9.6` 发布 PR（#5315）已合入，这是一次“减法式”版本更新。社区动态集中在架构重构上：命令边界重构 EPIC（#2870）仍在更新，新的 TUI crate 拆分 umbrella EPIC（#5316）正式启动。三个 PR 分别覆盖子代理递归深度修复、核心请求构造下沉、以及版本发布准备。

## 2. 版本发布

- 无独立 Release 发布。
- 但 `#5315` 已完成 **v0.9.6** 的发布流程，主要变化：
  - 减少运行时 guard，降低非必要干预；
  - 统一为单一稳定 base prompt；
  - 修正 provider “结束/终止” 状态，使结果表达更真实；
  - 压缩路径更精简，同时保留 provider 相关行为。  
  [查看 PR #5315](https://github.com/Hmbown/CodeWhale/pull/5315)

## 3. 社区热点 Issues（过去 24h 共 2 条，以下为全部）

1. **[CLOSED] #2870 — EPIC: staged command-boundary refactor for #2791**  
   - 创建：2026-06-07 / 更新：2026-08-10 / 评论：20  
   - 这是命令边界重构的跟踪 EPIC，主要目标是把 #2791 中的大型改动拆解为可独立评审、可独立合入的小层，降低合并与回归风险；参考 PR 为 `#2851`。  
   - 意义：命令边界直接影响 TUI 的输入解析、错误处理和扩展机制，属于高影响模块；20 条评论表明多方参与度较高，方案仍被持续验证。  
   [查看 Issue #2870](https://github.com/Hmbown/CodeWhale/issues/2870)

2. **[OPEN] #5316 — EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)**  
   - 创建：2026-08-10 / 更新：2026-08-10 / 评论：0  
   - 这是 TUI crate 拆分工作的总 umbrella issue：未来所有子 EPIC、FEAT、PR 都会汇总到此，用于追踪整个模块化过程。  
   - 意义：这是当前最高层级的架构跟踪项，直接决定模块边界与协作方式；题主刚创建即进入动态列表，说明模块化拆分正在进行立项推进。  
   [查看 Issue #5316](https://github.com/Hmbown/CodeWhale/issues/5316)

## 4. 重要 PR 进展（过去 24h 共 3 条，以下为全部）

1. **[OPEN] #5317 — fix(subagents): cap nested max_depth by inherited budget**  
   - 修复点：在显式 `max_depth` 分支中改用 `inherited.min(..)`，避免嵌套子代理超出根/session 设定的递归深度预算（对应 #5253）。  
   - 价值：关闭递归放大风险，防止深层 agent 调用链造成资源失控。  
   [查看 PR #5317](https://github.com/Hmbown/CodeWhale/pull/5317)

2. **[CLOSED] #5300 — refactor(core): own primary request preparation**  
   - 内容：删除 `codewhale-core` 中未使用的 `ChatRequest` scaffold，改为生产环境使用的 `MessageRequest` DTO 家族；新增纯函数 `prepare_primary_turn_request`，统一主轮请求构造逻辑。  
   - 价值：将主请求准备收归 core，减少 TUI crate 对核心数据流的渗透，为后续模块拆分打基础。  
   [查看 PR #5300](https://github.com/Hmbown/CodeWhale/pull/5300)

3. **[CLOSED] #5315 — chore(release): ship v0.9.6**  
   - 说明：release 准备 PR，无公开 issue 关联；发布状态记录在私有 ops ledger 中。  
   - 内容：见上文「版本发布」。  
   [查看 PR #5315](https://github.com/Hmbown/CodeWhale/pull/5315)

## 5. 功能需求趋势

基于当前快照（共 2 个 Issue）能观察到的信息有限，但可提炼出以下三点：

- **模块化 / 解耦**：命令边界重构、crate 拆分成为当前主旋律，说明项目从“功能扩张”转向“架构治理”。
- **子代理递归与资源控制**：`#5317` 专门修复嵌套深度预算，说明嵌套 agent 的深度控制已成为实际使用中的真实痛点。
- **运行行为可预测性**：v0.9.6 刻意削减 runtime guard、统一 base prompt，体现社区对 prompt 漂移和运行时不确定性的敏感度上升。

## 6. 开发者关注点

- **架构可维护性**：从 #2870 到 #5316，开发者对分层、命令边界、crate 组合的关注明显高于新功能需求。
- **可预期行为**：v0.9.6 中“truthful provider endings”和“stable base prompt”侧面反映，开发者希望 provider 结束状态更透明、prompt 不频繁变动。
- **贡献入口与跟踪效率**：EPIC-005 umbrella issue 的出现，说明开发者需要更清晰的模块所有权和贡献追踪路径，以降低参与门槛。

> 数据说明：本日报仅覆盖给定时间窗口内的公开 GitHub 数据；由于 Issue/PR 数量有限，趋势部分是基于有限样本的观察推断。

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*