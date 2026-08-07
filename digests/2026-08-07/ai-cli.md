# AI CLI 工具社区动态日报 2026-08-07

> 生成时间: 2026-08-07 02:02 UTC | 覆盖工具: 10 个

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

# AI CLI 工具横向对比分析报告（2026-08-07）

## 1. 生态全景

当前 AI CLI 工具已全面进入 **Agent 化与工程化深水区**。各工具的核心竞争已从"模型对话能力"转向**权限安全模型、会话生命周期管理、MCP 生态集成、跨平台稳定性**四大基础设施的完备程度。社区反馈中，**数据损坏类 Bug（Claude Code 会话转录 400、Kimi 文件编码破坏、Pi 上下文压缩失效）**和**安全信任边界漏洞（Qwen Code 三案并发）**的优先级高于功能新增，标志着行业正从功能扩张期进入信任建设期。Windows 平台成为共识短板，付费订阅服务的稳定性（OpenCode 401 全线故障）开始直接影响用户信任。

## 2. 各工具活跃度对比

| 工具 | 热点 Issues | 活跃 PRs | Release 情况 | 社区热度信号 |
|---|---|---|---|---|
| Claude Code | 10 | 4 | 无新版本 | #6527 权限安全 Bug、#57371 高赞 Windows 投诉（👍42） |
| OpenAI Codex | 10 | 9 | **rust-v0.147.0**（Agent 插件/会话分区） | #33776 Windows 287 个残留进程（👍27） |
| Gemini CLI | 10 | 10 | 无正式 Release，v0.54.1/v0.54.2/v0.55.0-preview 版本活动频繁 | 4 个 P1 级 Agent 稳定性 Bug 并行 |
| Copilot CLI | 10 | 0 | **v1.0.79-6**（修复两个回归） | #4251 会话恢复 OOM 回归未修复 |
| Kimi Code CLI | 8 | 3 | 无新版本 | #2591 核心数据损坏 Bug 引两条技术路线 PR |
| OpenCode | 10 | 10 | 无版本发布 | **付费订阅 401 大范围故障**（8+ 关联 Issue） |
| Pi | 10 | 10 | **v0.84.0**（全屏 TUI 模式） | #7547 Windows 支持讨论 22 条评论 |
| Qwen Code | 10 | 10 | **v0.21.7**（移除 Goals 50 轮限制/内联图片） | **3 个安全漏洞并发**（#8582/#8627/#8643） |
| DeepSeek TUI | 10 | 10 | v0.9.4 发布列车已合并（77 commits），正式版未发 | 命令边界重构 EPIC 收尾 |
| Grok Build | — | — | 无活动 | 需关注后续活跃度 |

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **Windows 平台全面完善** | Claude Code、Codex、Copilot CLI、Qwen Code、Pi、Gemini | 桌面崩溃（窗口枚举失败/Cowork 后台服务）、网络层 ECONNRESET、中文输入拼音模糊、进程泄漏、默认 shell 可配置等。各工具 Windows 侧反馈占总量 1/3 以上 |
| **权限系统精细化** | Claude Code（ask/allow 冲突，复合命令 700+ 次误报）、Qwen Code（只读命令被替换绕过、信任规则被祖先目录覆盖）、Gemini（子代理绕过权限设置）、Copilot（权限提示需显式规则与切换可靠性） | 安全边界与流畅性的平衡是普遍需求，命令级语义识别是技术难点 |
| **会话生命周期与上下文管理** | Claude Code（转录损坏、用量误报）、Codex（压缩状态误确认、配额不透明）、Copilot（大会话 OOM）、OpenCode（上下文可视化）、Pi（压缩触发过迟）、Kimi（跨会话记忆）、Gemini（子代理状态误报） | 会话成为重要资产后被要求"可靠、可恢复、可观察"，压缩策略需更主动 |
| **MCP 集成深度与生命周期** | Codex（进程池/OAuth 恢复）、Copilot CLI（BigInt/孤儿进程/CI 权限）、Kimi（schema 懒加载）、DeepSeek（Registry 发现）、Gemini、Claude Code | 从"能否接入"转向"进程回收、协议兼容、按需加载、认证恢复"等生产级问题 |
| **TUI/终端渲染质量** | Gemini（窄终端幽灵文本）、Copilot CLI（tmux 不可见/空白行）、Kimi（界面抖动）、Qwen（闪屏/重复打印）、Pi（超宽行崩溃/全屏模式）、OpenCode（链接可点击） | 多平台终端兼容性成为基础体验红线 |
| **系统级通知机制** | Claude Code（#26581 👍32）、OpenCode、Codex | 多任务场景下用户不希望盯屏等待，异步工作流协作缺位 |

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|---|---|---|---|
| **Claude Code** | 企业级安全模型、桌面 + CLI 双形态、Cowork 云协作 | 企业团队、重度 Agent 用户 | 权限分层细粒度，重心在安全边界与远程协作策略；Windows 体验与资源管理是当前短板 |
| **OpenAI Codex** | Agent 插件生态、会话分区、沙箱安全、深度 IDE/桌面集成 | GPT 生态开发者的多会话并行工作流 | Rust 核心、Bubblewrap 沙箱、MCP 生命周期治理投入大；Windows 进程管理是明显短板（287 个残留进程） |
| **Gemini CLI** | Subagent 架构、Auto Memory 记忆系统、AST 感知代码能力探索 | 依赖多代理并行与长期记忆的开发者 | Agent 玩法最激进（通用代理/浏览器代理/代码库调查代理），但 P1 稳定性问题密度最高，承诺的"成功状态"可信度受损 |
| **Copilot CLI** | 会话恢复/历史浏览可靠性、MCP 注册表策略、模型消费透明 | GitHub 生态、企业 CI 场景 | 版本迭代保守但基础相对扎实；模型黑盒归因（配置 Terra 实扣 Opus 额度）与 Rubber Duck 审查独立性是社区新质疑点 |
| **Kimi Code CLI** | 类文心"长期记忆"概念探索、MCP schema 按需加载、VSCode 深度集成 | 中文开发者、IDE 重度用户 | 功能候选集中于上下文持久化与 IDE 内操作效率；StrReplaceFile 双 PR 路线之争显示社区贡献活跃但官方响应速度待观察 |
| **OpenCode** | 开源可编程 TUI 框架、插件系统、多模型路由 | 开源社区、自建工作流的高阶开发者 | 以 TUI 插件化和 prompt 队列/转向为差异化；当前最大风险是**付费订阅服务稳定性**（401 故障）损害商业化信任 |
| **Pi (badlogic)** | 新 TUI 范式（全屏/滚动/可拖动滚动条）、多 Provider 开放接入 | 追求终端体验创新、跨厂商模型用户 | 技术栈偏实验性（X11 长驻泄漏、宽行崩溃暴露健壮性）；Windows 支持以社区调研式收集需求，尚未有正式排期 |
| **Qwen Code** | 安全加固、Hook 事件系统、内联图片、多提供商兼容 | 阿里云生态、模型快速迭代的跟随者 | 版本迭代极快（v0.21.7 + 每天 nightly），但对快速迭代的内部控制不足——**两日内曝出 3 个安全漏洞**、Hook 回归在 .6 引入 |
| **DeepSeek TUI** | 命令边界架构重构、MCP Registry、子代理恢复 | 寻求高性价比模型 + 可定制 TUI 的开发者 | 架构级重构（EPIC #2870 收敛）体现长期主义；社区规模较小但贡献者活跃（多 PR 来自非核心成员） |

## 5. 社区热度与成熟度

- **社区声量最大、痛点最尖锐：OpenCode & Gemini CLI。** OpenCode 因订阅 401 故障出现 8+ 关联 Issue，直接冲击付费基本盘；Gemini CLI 同日出现 4 个 P1 Agent bug（误报成功/永久挂起/图片附件崩溃/Wayland 失败），用户对"成功状态"产生系统性信任质疑。
- **最稳健但也最受升级恐惧牵制：Copilot CLI。** 12 天前的会话恢复 OOM 回归尚未修复，用户明确表达"不敢升级"。谨慎迭代策略保住基本盘，但历史包袱拖慢演进。
- **快速迭代双雄：Qwen Code & Pi。** Qwen 以日级 release 狂奔功能（图片渲染/目标移除），但安全漏洞与 hook 回归证明**速度与质量的平衡仍需加强**；Pi 以 v0.84.0 全屏 TUI 创新带动关注，但超宽行崩溃等边界问题显示测试覆盖仍有缺口。
- **核心功能与社区热度高、文档/治理稍显滞后：Claude Code。** 高赞 issue（👍42）与安全红线 bug 并存，但 20+ 文档类 Issue 批量关闭说明官方正补课；Kimi 用户存量讨论活跃度有限（热点 Issue 评论数 1-4 为主），但 #1283 记忆系统获得 20+ 评论，属"少而深"型社区。
- **架构成熟度最高的两个：Codex 与 Claude Code。** PR 侧密集推进沙箱、MCP 生命周期、会话血缘等基础设施，这些工程投入将转化为长期竞争优势。

## 6. 值得关注的趋势信号

1. **"Agent 可信状态"成为核心矛盾。** Gemini 子代理 MAX_TURNS 误报 GOAL 成功、Codex 压缩将中断输出提升为"已确认"、Pi 并行 fan-out 掩盖失败——模型自我报告的状态正被工程师质疑。**可追溯、可验证的状态报告机制**将是下一代 Agent 框架的必备能力。

2. **安全回归的爆发式出现是行业级警示。** Qwen Code 在单一工作日曝出 3 个漏洞（信任规则覆盖、.env 越权加载、命令替换绕过）；Claude Code 出现 ask/allow 覆盖；Kimi 发生文件字节级损坏。AI CLI 正在从"开发者工具"演变为"持有仓库通行证的 Agent"，**信任边界的健壮性必须通过专门的安全测试套件来保证**，而非靠社区报 Bug 事后修补。

3. **上下文压缩策略需要从"被动救援"走向"主动管理"。** Pi 的压缩直到 API 400 才触发、Codex 将中断输出误当已确认、OpenCode 用户 129 👍 求上下文可视化——**可预测、可配置、可观察的上下文预算**比模型能力更能决定长任务的成败。

4. **Windows 支持是当前差异化竞争的最大空白。** 几乎所有工具在 Windows 上都有进程泄漏、路径规范化、中文输入、网络栈等"基础但难啃"的问题。在 macOS/Linux 体验趋同龄化后，**谁能优先做到 Windows 一等公民，谁就能抢占企业桌面份额**。

5. **付费订阅稳定性比功能增长更生死攸关。** OpenCode Go/Zen 的 401 事件（8+ 关联 Issue）、Codex 的配额误判与模型消费黑盒、Claude Code 的用量误报——用户对"花钱买不可预测性"的容忍度极低。**计费透明度与服务可用性将成为工具选型的决定性因素**。

6. **TUI 交互范式正在被重新发明。** Pi 的全屏模式 + 可拖动滚动条、OpenCode 的 prompt 队列/转向区分、DeepSeek 的命令调色板（Layer 5.3）、各家的多行输入与链接可点击——**终端不再是聊天窗口，而是完整 IDE 的替代界面**。这一趋势将倒逼传统 IDE 厂商重新审视差距。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截至 2026-08-07）

> 说明：以下 PR 按仓库评论数排序，Top 条目均为 **Open** 状态（当前无 merged 条目进入前列）。

## 一、热门 Skills 排行

**1. skill-creator 评估链路修复（#1298）**
- 功能：修复 `run_eval.py` 恒报 recall=0% 的严重 bug——将 eval artifact 安装为真实 skill，并修复 Windows 流读取、触发检测与并行 worker 问题。
- 社区热点：skill-creator 是官方元技能，其评估循环失效意味着描述优化"在噪声上优化"；PR 关联 #556（已被 10+ 用户独立复现）。
- 状态：Open
- 链接：https://github.com/anthropics/skills/pull/1298

**2. document-typography 文档排版技能（#514）**
- 功能：面向 AI 生成文档的排版质检——孤儿词换行（1-6 词溢出到下一行）、页尾孤立标题（widow）、编号错位。
- 社区热点：这些是每份生成文档都会出现的通病，用户极少主动提出排版要求，社区认为应由 Skill 默认兜底。
- 状态：Open
- 链接：https://github.com/anthropics/skills/pull/514

**3. pdf 技能大小写引用修复（#538）**
- 功能：修正 `skills/pdf/SKILL.md` 中 8 处大小写不一致的文件引用（`REFERENCE.md` → `reference.md`）。
- 社区热点：在大小写敏感的文件系统上会导致 Skill 文档引用断裂，属文档型"最后一公里"问题。
- 状态：Open
- 链接：https://github.com/anthropics/skills/pull/538

**4. ODT 文档技能（#486）**
- 功能：新增 OpenDocument 格式（.odt/.ods）的创建、模板填充与 ODT→HTML 转换能力。
- 社区热点：补齐了文档技能矩阵中缺失的开源/ISO 标准格式，触发词明确（ODT/ODS/ODF/LibreOffice）。
- 状态：Open
- 链接：https://github.com/anthropics/skills/pull/486

**5. frontend-design 技能重构（#210）**
- 功能：重写 frontend-design 技能，提升清晰度、可执行性与内部一致性，确保每条指令都能在单次对话内被执行。
- 社区热点：聚焦"技能到底是给人看的文档还是给模型的指令"——教育式冗长内容被认为是 token 效率杀手。
- 状态：Open
- 链接：https://github.com/anthropics/skills/pull/210

**6. skill-quality-analyzer + skill-security-analyzer 元技能（#83）**
- 功能：新增两个元技能——从结构/文档/示例/安全等五维度评估 Skill 质量，以及对 Skill 做安全分析。
- 社区热点：与 #492 安全信任边界议题直接呼应，社区希望用"元技能自治"来治理 Skill 质量参差问题。
- 状态：Open
- 链接：https://github.com/anthropics/skills/pull/83

**7. docx 技能 w:id 冲突修复（#541）**
- 功能：修复 DOCX Skill 添加 tracked changes 时与已有书签发生 `w:id` 共享 ID 空间冲突、导致文档损坏的问题。
- 社区热点：OOXML 的 `w:id` 在书签/评论/移动区间间共享，硬编码低 ID 是常见损坏根因。
- 状态：Open
- 链接：https://github.com/anthropics/skills/pull/541

**8. self-audit 自审计技能（#1367）**
- 功能：交付前先做机械式输出文件验证，再按损害严重度优先级做四维推理审计；宣称适用于任何项目/技术栈/模型。
- 社区热点：属于"质量门禁"类技能，与 #1385 的 Reasoning Quality Gate Pipeline 提案构成同一趋势。
- 状态：Open
- 链接：https://github.com/anthropics/skills/pull/1367

## 二、社区需求趋势

**1. 安全与信任边界（最高关注）**
- #492「社区技能在 anthropic/ 命名空间下分发，构成信任边界滥用」— 43 条评论，社区最高热度；用户可能误将社区技能当作官方技能授予高权限。
- 链接：https://github.com/anthropics/skills/issues/492

**2. 组织级 Skill 共享与协作**
- #228「在 Claude.ai 中启用组织级 skill 共享」— 16 条评论、👍8；企业用户希望内网直接共享，而非手动下载/上传 .skill 文件。
- 链接：https://github.com/anthropics/skills/issues/228

**3. 评估/优化工具链可靠性**
- #556（👍7）与 #1169：`run_eval.py` 在所有查询下 0% 触发率，skill 描述优化循环完全失效；催生了 #1298、#1323、#1261、#1099、#1050 等一批修复 PR。
- 链接：https://github.com/anthropics/skills/issues/556

**4. 新 Skill 方向提案**
- **紧凑状态记忆**：#1329 compact-memory——用符号化记号压缩 agent 的持久化上下文。
- **智能体治理**：#412 agent-governance——策略执行、威胁检测、信任评分与审计追踪。
- **质量门禁流水线**：#1385——任务前校准 → 对抗性审查 → 交付验证。
- **MCP 暴露**：#16——将 Skills 以 MCP 形式对外暴露 API。
- **云平台兼容**：#29——AWS Bedrock 使用支持。
- 链接：https://github.com/anthropics/skills/issues/1329

## 三、高潜力待合并 Skills

以下 PR 评论活跃、功能完整，且尚未合并，近期落地概率较高：

**testing-patterns 技能（#723）** — 覆盖 Testing Trophy 模型、单元测试 AAA 模式、React Testing Library 等完整测试栈，直击社区对"测试生成"的长期需求。
链接：https://github.com/anthropics/skills/pull/723

**pyxel 复古游戏开发技能（#525）** — 基于 pyxel-mcp，工作流闭环（写 → 运行截图 → 检查 → 迭代），触发词明确。
链接：https://github.com/anthropics/skills/pull/525

**color-expert 技能（#1302）** — 色彩命名体系（ISCC-NBS、Munsell、RAL 等）与色彩空间选型表，自包含、通用性强。
链接：https://github.com/anthropics/skills/pull/1302

**plan-file-hygiene 技能（#1479）** — 为规划产物建立生命周期管理，解决 #1417 提出的"规划文件无限堆积"痛点。
链接：https://github.com/anthropics/skills/pull/1479

**SAP-RPT-1-OSS 预测技能（#181）** — 将 SAP 开源表格基础模型封装为预测分析技能，面向企业数据场景。
链接：https://github.com/anthropics/skills/pull/181

**skill-creator 修复 PR 集群（#1099 / #1050 / #1323 / #1261 / #539）** — 覆盖 Windows 子进程/编码、触发检测、eval 文件隔离、YAML 非法字符警告等；由于 #556 已被大量复现，这类修复合并优先级最高。
链接：https://github.com/anthropics/skills/pull/1099

## 四、Skills 生态洞察

**一句话总结**：当前社区最集中的诉求是"可信与可靠"——既要解决 Skill 分发链路上的信任与安全问题（#492 命名空间冒充、#83 安全分析元技能），也要修复官方 skill-creator 评估工具链的失效（0% recall bug 集群），社区正试图通过质量/安全元技能与自审计技能实现生态"自愈"。

---

# Claude Code 社区动态日报

**日期：2026-08-07**  
**数据来源：** [anthropics/claude-code](https://github.com/anthropics/claude-code) GitHub 仓库

---

## 今日速览

过去 24 小时无新版本发布，但社区讨论热度不减。最值得关注的是两个方向：**权限系统 Bug**（#6527，ask 列表被 allow 列表覆盖）和 **Windows 桌面端体验问题**（#57371，Cowork 后台服务无法禁用，获 👍42 高赞）。此外，一批文档类 Issue 集中关闭，表明官方正在系统性地完善文档体系。

---

## 社区热点 Issues（10 个）

### 1. 权限系统严重缺陷：ask 列表被 allow 列表忽略
**Issue #6527** | [链接](https://github.com/anthropics/claude-code/issues/6527)  
**标签：** bug / Linux / 安全 | 评论 23 · 👍 19  
**状态：** 开放，更新于 2026-08-07

**摘要：** 用户在 Linux 上配置权限时发现，当 `Bash` 命令同时出现在 allow 列表中时，`ask` 列表的匹配规则被完全忽略。这会导致本应触发用户确认的高危命令（如删除类操作）被静默放行，属于**安全红线问题**。

**重要性：** 权限系统是 Claude Code 安全模型的核心，此 Bug 直接削弱了用户对命令执行的管控能力。高评论数表明受影响的用户较多，且讨论中可能涉及修复方案的辩论。

---

### 2. Windows 用户要求提供禁用 Cowork 后台服务的开关
**Issue #57371** | [链接](https://github.com/anthropics/claude-code/issues/57371)  
**标签：** enhancement / Windows / Cowork / Desktop | 评论 18 · 👍 42  
**状态：** 开放，更新于 2026-08-07

**摘要：** 不适用 Cowork 功能的 Windows 用户，后台仍会运行 `CoworkVMService` 服务，占用系统资源且没有关闭入口。用户希望官方提供一个显式开关来禁用该服务。

**重要性：** 当前所有 Issue 中 **👍 数最高**（42），说明大量 Windows 用户对“后台捆绑服务”持反感态度，也反映出桌面版在资源管理上的设计仍不够克制。

---

### 3. 会话限制误报：显示 100% 但本地使用率极低
**Issue #54750** | [链接](https://github.com/anthropics/claude-code/issues/54750)  
**标签：** bug / macOS / 成本 | 评论 16 · 👍 9  
**状态：** 开放，更新于 2026-08-07

**摘要：** macOS 上 Claude Code 将当前会话限制显示为“已用 100%”并阻止继续使用，但本地可见的会话数据和用量追踪显示远未达到上限。

**重要性：** 该问题直接影响付费用户的可用性，涉及**用量计费**和**会话状态同步**两个敏感领域。高评论数说明类似误报并非个例。

---

### 4. Cowork/云会话 Git 代理封锁所有 Push 操作
**Issue #76248** | [链接](https://github.com/anthropics/claude-code/issues/76248)  
**标签：** bug / has repro / Cowork | 评论 14 · 👍 5  
**状态：** 开放，更新于 2026-08-07

**摘要：** 2026 年 7 月 10 日起，Cowork 远程云会话无法向“授权仓库集合”之外的 GitHub 仓库执行 `git push`，即使提供了用户自己的 fine-grained PAT 也无法绕过。该变化在会话中途生效，导致开发流程突然中断。

**重要性：** 这是 Cowork 协作场景下的**集成回归问题**，涉及远程会话的安全策略与用户自主权之间的平衡。有可复现案例，属高风险阻断问题。

---

### 5. Windows TUI：工具调用前的助手文本间歇性丢失
**Issue #79584** | [链接](https://github.com/anthropics/claude-code/issues/79584)  
**标签：** bug / Windows / TUI | 评论 9 · 👍 7  
**状态：** 开放，更新于 2026-08-07

**摘要：** 在 Windows 11 上（CLI 2.1.215），当助手在同一回合内先输出文本再调用工具（特别是 `AskUserQuestion`）时，前置文本间歇性地不被渲染。插件驱动的工作流受影响最严重。

**重要性：** 文本丢失导致用户看不到 AI 的解释性内容，直接破坏**人机交互的可理解性**。在 Windows + 插件组合下该问题已成为工作流中断的隐患。

---

### 6. 会话重命名可导致转录永久损坏（400 错误）
**Issue #73638** | [链接](https://github.com/anthropics/claude-code/issues/73638)  
**标签：** bug / has repro / 核心 | 评论 9  
**状态：** 开放，更新于 2026-08-07

**摘要：** 当用户在 `server_tool_use` 调用（如内置 `advisor` 工具）执行期间重命名会话，一个 `system-reminder` 会被作为合成“用户”回合插入到转录中，落在工具调用块和其结果块之间。此后该会话的每次提问都会返回 400 错误。

**重要性：** 这是**数据完整性毁坏**级别的严重 Bug——会话转录一旦损坏便不可恢复。有完整复现步骤，属于高频操作（重命名）与后台工具调用并发时的竞态条件。

---

### 7. 功能需求：Claude 任务完成或需要关注时的系统级通知
**Issue #26581** | [链接](https://github.com/anthropics/claude-code/issues/26581)  
**标签：** 功能请求 | 评论 8 · 👍 32  
**状态：** 开放，更新于 2026-08-07

**摘要：** 用户希望获得类似 GitHub Copilot 的系统通知机制——当 Claude 完成长时间任务或需要用户介入时，通过终端/VS Code 通知提醒，避免用户一直盯屏。

**重要性：** 👍 32 的高赞表明这是**多任务开发者群体的刚需**。该 Issue 自 2026-02 起持续获得关注，但尚未看到官方排期迹象，建议社区继续关注。

---

### 8. 回归：桌面应用会话时间范围过滤只在“按状态分组”时出现
**Issue #78775** | [链接](https://github.com/anthropics/claude-code/issues/78775)  
**标签：** bug / Windows / macOS / regression / UI | 评论 7 · 👍 23  
**状态：** 开放，更新于 2026-08-07

**摘要：** Claude Desktop 应用中，会话列表的时间范围过滤器（如“近 7 天”“近 30 天”）仅当“分组方式”设置为“状态”时才显示。其他分组模式下过滤器消失，属于明显的 **UI 回归**。

**重要性：** 桌面应用是 Claude Code 的重要前端形态，过滤器的可见性回归将直接影响用户检索历史会话的效率。👍 23 的较高认可度说明影响面较广。

---

### 9. Claude Desktop（Windows）在 Browser 面板截图验证时反复崩溃
**Issue #81664** | [链接](https://github.com/anthropics/claude-code/issues/81664)  
**标签：** bug / Windows / Desktop | 评论 7 · 👍 2  
**状态：** 开放，更新于 2026-08-07

**摘要：** Desktop 版本 `1.24012.9.0` 在 Windows 11 上，反复使用 Browser 面板的 `computer {action: "screenshot"}` 进行截图验证会导致应用崩溃，且应用无法自动重启。

**重要性：** Windows 桌面端的**稳定性问题**已经多次出现在榜单中，本次是 Browser 自动化功能触发的崩溃，对重度使用 Agent 视觉验证的开发者影响明显。

---

### 10. Windows 网络问题：流式 API 调用持续 ECONNRESET
**Issue #84194** | [链接](https://github.com/anthropics/claude-code/issues/84194)  
**标签：** bug / Windows / 网络 | 评论 5  
**状态：** 开放，创建于 2026-08-05，更新于 2026-08-07

**摘要：** 在 Windows 上，Claude Code 内置的 Bun HTTP 客户端在流式 API 调用时持续触发 `ECONNRESET` 错误，而同一网络环境下 Node.js 和 curl 均能正常完成请求。问题与 VPN 无关，重装也无法解决。

**重要性：** 这是较新的网络层 Bug，指向**内置 HTTP 客户端的实现缺陷**而非用户环境问题。由于影响所有流式请求，可能导致 Windows 用户整体不可用，值得密切关注。

---

## 重要 PR 进展（全部 4 条）

过去 24 小时共 4 条 PR，均为社区贡献，集中在**插件开发工具链的修复**。

### 1. 为仓库启用 frontend-design 插件（项目级配置）
**PR #84600** | [链接](https://github.com/anthropics/claude-code/pull/84600)  
**作者：** DanWebOps | 创建：2026-08-06

**内容：** 注册 `anthropics/claude-code` 官方市场，并通过 `.claude/settings.json` 启用 `frontend-design` 技能，使该仓库使用者自动加载前端设计能力。  
**分析：** 这是一个**仓库级配置示例 PR**，对社区实践有参考价值——展示了如何在项目中标准地预置官方插件。

---

### 2. 修复 validate-agent.sh 在首个警告后立即退出的问题
**PR #84427** | [链接](https://github.com/anthropics/claude-code/pull/84427)  
**作者：** erichanwang | 创建：2026-08-06

**内容：** 这是 #76985 的 follow-up。`validate-agent.sh` 脚本在 `set -e` 下运行 Bash 计数器 `((error_count++))` 时，会因非零退出码在第一个警告处提前终止。修复方式是改变计数器累加写法。  
**分析：** 典型的 **Bash 脚本陷阱修复**，虽小却直接影响插件验证流程的完整输出，对插件开发者友好。

---

### 3. 修复 validate-hook-schema.sh 对包装后的钩子模式与可选匹配器的校验
**PR #84381** | [链接](https://github.com/anthropics/claude-code/pull/84381)  
**作者：** erichanwang | 创建：2026-08-06

**内容：** 改进 `plugins/plugin-dev` 中的 `validate-hook-schema.sh`，使其能正确校验 Claude Code 的 `hooks.json` 配置。主要变更：支持顶层 `hooks` 对象包装；正确识别可选 matcher 字段，避免误报（如 `{"description": ...}` 的嵌套写法）。  
**分析：** 该 PR 解决了插件开发者在**钩子配置校验**中的实际痛点，让无效配置能在 CI 阶段就被拦截，而非到运行时才暴露。

---

### 4. 允许任何用户通过“踩”阻止 Issue 自动关闭
**PR #84365** | [链接](https://github.com/anthropics/claude-code/pull/84365)  
**作者：** alifakbxr | 创建：2026-08-06

**内容：** 修复 #79146，使 dedupe bot 在收到任意用户（而非仅 issue 创建者）的 thumbs down 时，都不会自动关闭该 issue，与 bot 的承诺保持一致。  
**分析：** 这是对仓库**机器人管理策略的修正**，避免因单一用户的误操作或恶意操作关闭有效 Issue，维护了社区议题的公平性。虽非核心代码变更，但对社区治理有正面意义。

---

## 功能需求趋势

从全部 Issue 中可提炼出以下社区核心诉求：

1. **权限系统的精细化与智能化**
   - 要求 `ask`/`allow` 列表具备更清晰的优先级规则（#6527）
   - 对复合命令的权限判断应更智能，减少逐条提示的噪音（#76718）
   - 背后诉求是：**在安全性和流畅性之间找到更好的平衡点**

2. **Windows 桌面端体验的系统性提升**
   - 禁用不需要的后台服务（#57371）
   - 修复 Browser 面板崩溃（#81664）
   - 修复 TUI 文本渲染丢失（#79584）
   - 网络层稳定性（#84194）
   - Windows 用户的抱怨量在近期出现明显上升趋势

3. **系统级通知与异步工作流支持**
   - 多任务并行场景下，用户希望 Claude 在“需要关注”或“任务完成”时主动通知（#26581）

4. **会话生命周期管理的可靠性**
   - 会话用量统计准确（#54750）
   - 会话转录的防损坏机制（#73638）
   - 允许 Claude 主动发起上下文压缩（#33026，已关闭但 👍15）
   - 这反映用户越来越依赖长期运行的 Agent 会话，对会话稳定性要求更高

5. **远程协作/云会话的可运维性**
   - Git 代理策略透明化（#76248）
   - 远程控制 UI 的渲染纯净度（#80454）
   - 用户需要**可预期的安全边界**，而非会话中途突变的控制策略

6. **文档同步更新**
   - 本次批量关闭了 20+ 个文档类 Issue（`stale` 标签），覆盖 `/loop`、`/model`、沙箱、MCP、插件市场等主题。说明社区对文档准确性的关注度很高，也侧面反映此前文档滞后较严重。

---

## 开发者关注点

1. **权限提示过多导致工作流中断**
   - #76718 中开发者反馈：运行并行会话时，两天内被迫手动批准了 **700+ 次**权限提示，即使每个命令片段都已在 allow 列表中。
   - **核心痛点：** 权限系统对“复合命令”的识别粒度太粗，无法理解命令链的整体语义。

2. **会话数据不可逆损坏的警惕**
   - #73638 展示了一个竞态条件即可永久破坏会话转录的案例。开发者最希望的保障是：**会话操作（重命名、恢复）不应干扰进行中的工具调用**。

3. **桌面端捆绑服务的资源侵占**
   - #57371 的高赞表明：用户对“用不到却必须后台运行”的服务（CoworkVMService）持反感态度，期望官方提供**卸载/禁用开关**。

4. **API 网络层的隐性故障排查成本高**
   - #84194 中，Bun HTTP 客户端与 Node.js/curl 的行为不一致，且问题无法通过重装解决。此类问题因为**环境定位困难**，通常是开发者最头疼的 Bug 类型。

5. **通知机制缺失导致的时间成本**
   - 在 #26581 的讨论中，用户普遍提到“经常切走看其他任务，回来发现 Claude 早就在等确认了”。这不仅是体验问题，更意味着**实际的时间与算力浪费**。

---

*本日报由社区公开数据自动生成，供技术开发者参考。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-08-07

## 1. 今日速览

今日 Codex 发布 `rust-v0.147.0`，带来 Agent 插件安装与跨目录搜索、会话分区管理等重要更新。社区热点集中于 Windows 平台的进程风暴与内存泄漏问题（#33776、#33531），以及模型选择器、MCP 进程池等长期痛点；PR 侧则密集推进 MCP 生命周期管理、沙箱安全增强与上下文窗口跟踪等内部架构改进。

## 2. 版本发布

### rust-v0.147.0
- **Agent 插件**：支持安装便携式 Agent 插件，并可在本地、个人、工作区及远程插件目录中搜索（#36544、#36409、#36919、#36796）。
- **会话组织**：支持将对话整理为持久的手动排序分区，并可增量浏览长对话记录（#35722、#36007、#36380、#36948）。

## 3. 社区热点 Issues

### #33776 [Windows] ChatGPT.exe 产生数百个 taskkill/conhost 进程，引发 WMI 风暴与 DWM 退化
**评论 32 · 👍 27** | [链接](https://github.com/openai/codex/issues/33776)
> Windows 桌面版在某次受影响会话中发现 287 个残留的 `taskkill.exe` 和 `conhost.exe`。这是当前社区反馈最激烈的问题，直接影响桌面端稳定性，且长期未解决。

### #28080 [Windows] 桌面线程工具间歇性丢失 handler（`No handler registered`）
**评论 21 · 👍 2** | [链接](https://github.com/openai/codex/issues/28080)
> 活动会话中线程工具会随机丢失处理器，导致工具调用失败。已确认在 Codex Desktop `26.608.1337.0` 与 `codex-cli 0.128.0` 上可复现，Windows 用户受影响范围较大。

### #20883 [增强] 桌面端应使用项目级 MCP 进程池，而非按会话启动
**评论 17 · 👍 4** | [链接](https://github.com/openai/codex/issues/20883)
> 当前每个会话会独立启动 stdio MCP server 进程，同一项目中打开多个会话会导致 MCP 进程重复，资源浪费明显。社区普遍认为项目/工作区级进程池是更合理的设计。

### #19694 [已关闭] 模型选择器过滤掉 `model_catalog_json` 返回的模型
**评论 14 · 👍 35** | [链接](https://github.com/openai/codex/issues/19694)
> 用户在配置了自定义模型目录后，桌面端模型选择器仍无法显示所有返回值。该 Issue 已关闭，但 35 个 👍 反映出自定义模型支持仍是深度用户的核心诉求。

### #21653 [增强] 支持多行状态栏
**评论 12 · 👍 58** | [链接](https://github.com/openai/codex/issues/21653)
> 当状态栏配置项较多时会被截断且无法换行。这是本次列表中 👍 数最高的 Issue，TUI 可定制性是社区高关注方向。

### #33967 [Windows] ChatGPT for Windows 无法完成设置或进入有限访问模式
**评论 9 · 👍 0** | [链接](https://github.com/openai/codex/issues/33967)
> 新安装的 Windows 桌面版卡在“Complete Windows setup”界面，无法进入正常工作流。属新用户阻塞性 bug，影响面较大。

### #33531 [Windows] MCP 套件在子代理完成后常驻，内存占用达 10.9 GB
**评论 5 · 👍 1** | [链接](https://github.com/openai/codex/issues/33531)
> Windows App `26.707.9981.0` 上，子代理执行完毕后 MCP 进程未释放，私有内存最高累计至 10.9 GB。与 #33776 同属进程生命周期管理漏洞。

### #35355 [模型行为] 压缩会把中断命令的部分输出提升为“已确认状态”
**评论 5 · 👍 0** | [链接](https://github.com/openai/codex/issues/35355)
> 上下文压缩机制存在一类失败：被中断命令的临时观测结果被当作已验证状态，在后续轮次中被继承，但未与持久化产物核对。需要更严格的验证边界。

### #37255 [Windows] Computer Use 无法枚举任何应用窗口
**评论 5 · 👍 0** | [链接](https://github.com/openai/codex/issues/37255)
> 在 Windows 上，Computer Use 无法枚举记事本、微信、钉钉等任何应用窗口，稳定报错 `EnumWindows failed: 0x80070003`。该功能在 Windows 上尚不可用。

### #16579 [增强] Windows 支持通过配置自定义默认会话 shell
**评论 4 · 👍 32** | [链接](https://github.com/openai/codex/issues/16579)
> 当前 Windows 会话默认 shell 固定为 PowerShell，使用 Git Bash 等 shell 的用户无法将其设为默认。已有社区提交的补丁，👍 数高，但等待合并。

## 4. 重要 PR 进展

### #37349 在完整文件系统 Bubblewrap 沙箱中挂载最小 `/dev`
[链接](https://github.com/openai/codex/pull/37349)
> 将宿主设备树与网络隔离的沙箱叠加，改为使用 Bubblewrap 最小设备文件系统覆盖 `/dev`，减少设备暴露面。

### #37347 按代理跟踪上下文窗口
[链接](https://github.com/openai/codex/pull/37347)
> Forked 子代理继承父代理的压缩历史时，上下文窗口元数据现在会标识子代理并建立独立的窗口血缘，避免混淆。

### #37345 向后端发送模型路由提示
[链接](https://github.com/openai/codex/pull/37345)
> 新增 `x-codex-routing-hint` 请求头，包含模型与可选服务等级，应用于 Responses HTTP、远程压缩与 WebSocket 握手，为后端路由优化提供数据。

### #37344 修复子代理 MCP 启动状态驻留问题
[链接](https://github.com/openai/codex/pull/37344)
> 子代理中已缓存的 MCP server 未启动完成时会被无限期挂起，导致 TUI 一直显示“MCP 启动中”。此修复会清除活动子代理的 MCP 启动预期。

### #37350 允许 `ThreadManager` 自定义线程 ID 生成
[链接](https://github.com/openai/codex/pull/37350)
> 新增 `ThreadManager::with_thread_id_generator` 接口，支持自定义根线程、子线程与 fork 线程的 ID 分配；默认仍为 UUIDv7 并保留恢复时的旧 ID。

### #37352 配置默认 code-mode 执行超时
[链接](https://github.com/openai/codex/pull/37352)
> 新增默认 `exec` 超时配置项（默认 30 秒），并移除旧的 `code_mode_buf...` 临时参数，提升 code-mode 的默认运行稳定性。

### #37337 OAuth 重新认证后恢复 MCP 服务器
[链接](https://github.com/openai/codex/pull/37337)
> OAuth-backed Streamable HTTP MCP server 在凭据失效启动失败后，完成重新认证即可自动恢复，无需重启 app。

### #37341 支持内联可视化的内容引用
[链接](https://github.com/openai/codex/pull/37341)
> TUI 渲染层现在识别结构化的 `visualize` 内容引用，可在缓存、流式与最终渲染中解析可视化路径，但只访问当前工作区内的路径。

### #37339 账户变更后重新加载 app-server 遥测
[链接](https://github.com/openai/codex/pull/37339)
> 账户切换可能影响 OpenTelemetry collector 配置，此 PR 在账户变化后重建并安装日志、追踪与指标导出器，防止旧账户配置继续使用。

### #37273 跨采样步骤复用 MCP 处理器
[链接](https://github.com/openai/codex/pull/37273)
> MCP 工具处理器与 Code Mode 定义在稳定绑定期间不可变，此优化按会话缓存这些处理器，避免每次采样重建 schema，提升性能。

## 5. 功能需求趋势

- **插件系统扩展**：Agent 插件（可安装、跨目录搜索）是 v0.147.0 的核心；同时 PR 侧在推进插件根识别、命名空间与发现模式，插件体系正走向成熟。
- **MCP 生命周期管理**：社区持续讨论“项目级 MCP 进程池”，今日 PR 密集修复 MCP 启动状态、OAuth 恢复、处理器复用，反映生命周期管理是当前工程重点。
- **会话与上下文窗口改进**：新增会话分区、手动排序；PR 中开始“按代理跟踪上下文窗口”，子代理继承与追溯更精确。
- **沙箱安全增强**：Bubblewrap 最小 `/dev` 挂载、Windows WSL bwrap 缺失问题、权限提升与“严格委托”RFC，安全边界越来越受重视。
- **自定义模型与路由**：模型选择器过滤、prompt 缓存断点、以及新增的路由提示 header，说明自定义模型与高级路由能力是深度用户的核心诉求。
- **Windows 平台完善**：今日 30 条热帖中超 1/3 为 Windows 专属，进程泄漏、Computer Use、shell 配置、WSL 集成等，Windows 体验仍是短板。

## 6. 开发者关注点

- **进程与内存泄漏最为集中**：#33776（Windows taskkill 风暴）、#33531（MCP 10.9GB 内存）、#37236/#37247/#37249（macOS 僵尸进程）同时指向“子进程生命周期未正确回收”，多平台均受影响。
- **工具调用可靠性**：线程工具“No handler registered”，权限弹窗“Allow once”无响应，以及 MCP 工具顺序（HashMap 迭代）不确定，干扰自动化流程。
- **认证与网络切换**：#37192 中 OAuth 刷新失败后静默回退硬编码 API key，导致 401；网络切换后的认证处理需更可预测。
- **配额透明度**：子代理耗尽一周配额（#35463）、周配额重置后误判超限（#37250），用户需要更清晰的用量控制与核算机制。
- **会话状态一致性**：压缩把中断输出提升为“已确认”（#35355）、checkpoint 文本被当作权威状态（#37325）——模型“自我确认”倾向需被更严格约束，尤其在长时间任务中。
- **沙箱与权限平衡**：Windows 防火墙重设导致频繁 UAC（#31556）、WSL bwrap 缺失（#24873），沙箱安全与易用性之间仍缺乏平滑平衡。

---
*本日报基于 github.com/openai/codex 公开数据生成，全部链接为 GitHub Issue/PR 原始地址。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-08-07** | **数据来源：** [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 今日速览

今日社区焦点集中在 **Agent/Subagent 稳定性** 上：多个 P1 级 bug 仍在发酵（如子代理 MAX_TURNS 误报成功、通用代理挂起、浏览器代理 Wayland 崩溃），同时**图片附件触发 UNKNOWN_UPSTREAM_ERROR** 成为新晋高优问题。PR 方面，**容量耗尽被重新分类为终结错误**、**新用户消息融合 bug 修复**均已合入，另有 **Gemini 3.6 Flash 模型支持** PR 正在推进。

---

## 版本发布

过去 24 小时无正式 Release，但版本管理活动频繁：

- **v0.54.1 / v0.54.2**：已完成版本号 bump（PR [#28712](https://github.com/google-gemini/gemini-cli/pull/28712)、[#28710](https://github.com/google-gemini/gemini-cli/pull/28710)），其中 v0.54.1 包含消息融合 bug 修复（#28700）
- **v0.55.0-preview.2**：通过 cherry-pick 自动发布（PR [#28719](https://github.com/google-gemini/gemini-cli/pull/28719)），包含容量耗尽终结错误修复（#28716）

---

## 社区热点 Issues（10 个）

### 1. Subagent 达到 MAX_TURNS 被误报为 GOAL 成功 ⚠️ P1
[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | 💬 12 评论 | 👍 2

`codebase_investigator` 子代理在**尚未执行任何分析**就触及最大轮数限制时，仍报告 `status: "success"` 和 `Termination Reason: "GOAL"`，导致中断被隐藏。该问题已挂起 **5 个月**仍在复测中，社区关注度高。

### 2. 通用代理（Generalist agent）永久挂起 ⚠️ P1
[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | 💬 8 评论 | 👍 8

用户反馈 `gemini-cli` 委派给通用代理后**无限期挂起**，连创建文件夹这类简单操作都无法完成，有人等待长达 1 小时。临时 workaround 是明确指示模型不要使用子代理——此 issue 获得最多的 👍 数，说明受影响面较广。

### 3. 💥 新增：附加任何图片触发 UNKNOWN_UPSTREAM_ERROR（P1）
[#28714](https://github.com/google-gemini/gemini-cli/issues/28714) | 💬 1 评论

**昨日新建的 P1 紧急 bug**：在 v0.53.1 / gemini-3.6-flash-high / Windows 11 环境下，附加图片导致 `UNKNOWN_UPSTREAM_ERROR`，聊天冻结直到新建会话。已在终端和 AionUi wrapper 两种方式下复现，确认与 wrapper 无关。

### 4. Shell 命令执行后卡在 "Waiting input" ⚠️ P1
[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | 💬 4 评论 | 👍 3

命令**已经执行完毕**，但界面仍显示 shell 命令为活动状态并等待输入。对极简单的 CLI 命令也会触发，严重影响自动化流程。

### 5. Auto Memory 无限重试低信号会话（P2）
[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | 💬 5 评论

Auto Memory 仅在提取代理成功调用 `read_file` 读取 transcript 后才将会话标记为"已处理"。若代理判断会话为低信号而跳过，该会话会**反复出现在待处理队列**，造成无效重试，浪费 token。

### 6. Auto Memory 缺少确定性脱敏（P2 · 安全）
[#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | 💬 4 评论

Auto Memory 会将本地 transcript 发送给后台提取代理，但脱敏发生在**内容已进入模型上下文之后**，且服务可能记录现有技能内容。社区呼吁在发送前做**确定性脱敏**并减少日志输出。

### 7. AST 感知文件读取的可行性评估（P2 · EPIC）
[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | 💬 7 评论

追踪 AST 感知工具（文件读取、搜索、代码库映射）的价值：可精确读取方法边界、减少 token 噪声、提升导航效率。配套 issue [#22746](https://github.com/google-gemini/gemini-cli/issues/22746) 建议以 `tilth`/`glyph` 为起点改进 `codebase_investigator`。

### 8. Gemini 不够主动使用技能和子代理（P2）
[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | 💬 6 评论

用户反馈即使配置了 `gradle`/`git` 等自定义技能（Skill）和子代理，Gemini **基本不会主动调用**，仅在明确指令下才使用。这与构建技能生态的初衷相悖。

### 9. 浏览器子代理在 Wayland 下失败 ⚠️ P1
[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | 💬 4 评论 | 👍 1

`browser_agent` 在 Wayland 显示服务器下直接失败（`Termination Reason: GOAL`）。已标记 `agent/browser`，等待重测。

### 10. 子代理在 v0.33.0 后绕过权限运行（P2）
[#22093](https://github.com/google-gemini/gemini-cli/issues/22093) | 💬 3 评论

用户升级到 v0.33.0 后，即使所有配置中 Agents 模式均为 disabled，子代理（如 generalist）**仍被自动调用**。此前从未激活过，用户只期望使用 MCP 功能——疑似权限校验回归。

---

## 重要 PR 进展（10 个）

### 1. ✅ 合入：容量耗尽重新分类为终结错误
[#28716](https://github.com/google-gemini/gemini-cli/pull/28716) | CLOSED | size/m

将**模型容量耗尽**和**余额不足**从可重试错误改为**终结错误**，触发即时模型回退或优雅降级，避免无效重试。已通过 cherry-pick 进入 v0.55.0-preview.2（#28719）。

### 2. ✅ 合入：修复新用户消息与未应答工具响应融合
[#28700](https://github.com/google-gemini/gemini-cli/pull/28700) | CLOSED | size/m

修复"**模型替你补全句子而不是回答问题**"的 bug：工具调用被中断（流失败或按 ESC）后，下一条用户消息不应合并到被中断的回合中。已进入 v0.54.1 稳定版。

### 3. ✨ 新功能：Gemini 3.6 Flash 与 3.5 Flash-Lite 支持
[#28673](https://github.com/google-gemini/gemini-cli/pull/28673) | OPEN | size/l

为 `packages/core` 添加 Gemini 3.6 Flash 和 3.5 Flash-Lite 的模型定义、能力标记（thinking、multimodalToolUse）、别名和 Code 执行配置。社区期待的大模型模型适配正在推进。

### 4. ✨ 新 PR：流中止时记录已收到的 usage
[#28718](https://github.com/google-gemini/gemini-cli/pull/28718) | OPEN | size/m

修复 `generateContentStream` 在流中止时**丢失已累积的 usageMetadata** 的问题。此前 catch 分支会跳过 usage 记录，导致中断请求的 token 消耗未上报。

### 5. 🔧 Vertex AI 401 错误信息改进
[#28679](https://github.com/google-gemini/gemini-cli/pull/28679) | OPEN | size/s

当用户配置 `vertex-ai` 认证但仅提供标准 Gemini API key 时，请求失败且报错信息不明确。此 PR 改进错误提示，引导用户正确配置 Google Cloud 凭证。

### 6. 🔧 修复幽灵文本无限循环
[#28641](https://github.com/google-gemini/gemini-cli/pull/28641) | OPEN | size/s | help wanted

在窄终端宽度下，`getGhostTextLines` 遇到**单个宽字符（CJK/emoji）**可能陷入无限循环。fix 强制推进 `splitIndex`，并附带回归测试。

### 7. 🔧 修复 thoughtSignature 丢失导致的 400 错误
[#28586](https://github.com/google-gemini/gemini-cli/pull/28586) | OPEN | size/m

修复 v0.53.0 引入的回归：**并行工具调用**时 `thoughtSignature` 被意外剥离，触发 400 Bad Request 错误。

### 8. 🔧 修复滚动位置跳变
[#28405](https://github.com/google-gemini/gemini-cli/pull/28405) | OPEN | size/xs | 🔒 maintainer only

用户向上滚动审查代码后，新内容到来时**滚动位置跳回底部**的经典问题。根因在 `VirtualizedList.tsx` 的自动滚动条件过于激进，修复 `isStickingToBottom` 重新启用逻辑。

### 9. 🔧 formatTruncatedToolOutput 负值防护
[#28639](https://github.com/google-gemini/gemini-cli/pull/28639) | OPEN | size/s

当 `maxChars <= 0` 时，`String.prototype.slice` 的负索引行为会导致工具输出**膨胀约 2 倍**。添加守卫逻辑和回归测试，修复 #28620。

### 10. 🔧 修复认证文档链接 404
[#28640](https://github.com/google-gemini/gemini-cli/pull/28640) | OPEN | size/xs

`ProjectIdRequiredError` 指向的 `goo.gle/gemini-cli-auth-docs` 短链接已失效，更新为 `geminicli.com/docs/get-started/authentication/#set-gcp`，同时补充文档重定向，避免旧链接 404。

---

## 功能需求趋势

从今日 Issues/PRs 中提炼出社区最关注的五大方向：

1. **Agent/Subagent 可靠性 🔥**
   - 子代理状态误报（#22323）、挂起（#21409）、权限绕过（#22093）、工具使用不足（#21968）等问题高密度出现，说明 Agent 架构进入"精细化打磨期"。大量 issue 挂着 `workstream-rollup`，团队正在批量处理。

2. **Auto Memory 记忆系统深度优化 🧠**
   至少 4 个关联 issue（#26516 跟踪全部）：低信号会话重试、**确定性脱敏**、无效补丁隔离、日志精简。社区对隐私安全（读取本地 transcript 后发送模型）和 token 效率均有明确诉求。

3. **AST 感知代码理解能力**
   [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) + [#22746](https://github.com/google-gemini/gemini-cli/issues/22746) 组成 EPIC，探索 AST 感知的文件读取/搜索/映射能否替代当前朴素的文本操作，从而减少 token 消耗、提升多轮编辑准确率。

4. **新模型适配节奏加快 🚀**
   Gemini 3.6 Flash、3.5 Flash-Lite 的配置 PR（#28673）已提交，呼应 issue 中 `gemini-3.6-flash-high` 的实际使用反馈（如 #28714）。模型迭代速度明显加快。

5. **IDE 集成与终端体验持续修复**
   VSCode IDE Companion 资源泄漏（#28526、#28580）、终端渲染性能（#21924）、外部编辑器退出后的界面损坏（#24935）、窄终端幽灵文本循环（#28641）等，反映 CLI 工具在**嵌入 IDE 和复杂终端环境**下的适配投入。

---

## 开发者关注点

### 🔴 高频痛点

- **子代理不可信**：MAX_TURNS 误报成功让用户对 Agent 的 "success" 状态产生信任危机；通用代理无响应则直接阻塞工作流。
- **命令执行挂起成系统性顽疾**："Waiting input" 问题（#25166）与交互式 prompt 卡死（#22465）并存，shell 执行管道稳定性堪忧。
- **版本更新引入行为回归**：v0.33.0 子代理权限绕过、v0.53.0 thoughtSignature 丢失——每次大版本升级都伴随 Agent 行为回归风险。
- **上下文窗口管理粗糙**:搜索返回海量结果导致溢出（#19638）、工具数量超限报 400（#24246），Agent 缺乏对上下文的自我约束。

### 🟡 安全意识

- Auto Memory 的**"先发送后脱敏"**模式引起隐私担忧（#26525），社区要求确定性脱敏前置。
- Agent 在复杂 git/数据库操作中倾向使用 `--force` 等破坏性命令（#22672），需要更主动的安全护栏。

### 🟢 值得注意的声音

- 多个 issue 挂起超 4 个月且处于 `need-retesting` 状态（如 #22323、#21409），社区在等待团队验证反馈。
- `help wanted` 标签出现在多个 PR 上（#19638、#28641、#20536），说明团队欢迎社区贡献，对于急用功能的开发者，**认领 PR 可能比等官方修复更快**。

---

> **数据范围说明**：本日报基于 2026-08-07 GitHub 公开数据，覆盖过去 24 小时内更新的 50 个 Issues 和 31 个 PRs（含 comment 最多的前 30/20 条）。
>
> **免责声明**：部分内部 issue 标记为 🔒 maintainer only，本日报仅基于已公开的信息进行汇总分析。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-08-07

## 今日速览

- **修复版本 v1.0.79-6 发布**：解决了交互界面下内部延迟误报诊断警告、会话历史加载失败后时间线空白两个问题。
- **社区焦点集中在三类问题**：会话恢复/历史浏览的可靠性与性能、终端渲染异常（空白行、tmux 不可见、复制清屏）、MCP 集成稳定性（BigInt 处理、孤儿进程、CI 权限）。
- **模型选择机制成为新热点**：Rubber Duck 审查被质疑使用与主会话相同的模型族，削弱对抗性审查价值。

## 版本发布

### v1.0.79-6
- **Fixed**
  - 修复罕见的内部延迟不再在交互式 UI 顶部打印诊断警告。
  - 修复会话历史加载失败导致整个时间线永久空白的问题：此前失败被静默丢弃，转录在剩余会话中持续为空。

> 链接：[v1.0.79-6 Release](https://github.com/github/copilot-cli/releases)

## 社区热点 Issues（Top 10）

挑选标准：评论数、👍 数、影响范围、问题严重性。

1. **[#3392] Bash 工具在 NixOS 上损坏（≥1.0.49）**  
   **👍 7 | 评论 3 | 创建 2026-05-19**  
   运行任意命令时报 `Failed to start bash process`，`strace` 显示 bash 进程启动失败。NixOS 用户持续受影响，是当前最受关注的 bug 之一。  
   [GitHub Issue #3392](https://github.com/github/copilot-cli/issues/3392)

2. **[#4374] `/mcp search` 在 Azure DevOps git remote 下报 400**  
   **👍 4 | 评论 0 | 创建 2026-08-05**  
   启动目录的 git remote 指向 `dev.azure.com` 时，MCP 注册表浏览器连请求策略的策略都拿不到，直接 `400 Bad Request`。企业用户反馈集中。  
   [GitHub Issue #4374](https://github.com/github/copilot-cli/issues/4374)

3. **[#4251] 恢复大会话 OOM / 单核占用 ~70 分钟（v1.0.74 回归）**  
   **👍 1 | 评论 2 | 创建 2026-07-24**  
   同机同会话 A/B 测试确认是 1.0.74 引入的回归，峰值 RSS 为 1.0.73 的 3–4 倍。长期重会话用户无法升级。  
   [GitHub Issue #4251](https://github.com/github/copilot-cli/issues/4251)

4. **[#4313] 支持滚动浏览当前会话历史**  
   **评论 4 | 创建 2026-07-31**  
   请求用鼠标滚轮 / PageUp/PageDown 在交互式会话中上下翻页。目前只能靠翻页键或重发消息触发重绘。  
   [GitHub Issue #4313](https://github.com/github/copilot-cli/issues/4313)

5. **[#4311] Transcript 渲染为空白行，需 `children` 或宽度变化才重绘**  
   **评论 2 | 创建 2026-07-31**  
   交互模式下底部区域空白，内容仍在（向上滚动可见），但需提交新消息才能重绘。`/resume` 恢复后依旧会再次空白。  
   [GitHub Issue #4311](https://github.com/github/copilot-cli/issues/4311)

6. **[#4212] tmux 内提示框 / 高亮菜单项暗色文字配暗背景**  
   **评论 2 | 创建 2026-07-21**  
   在 tmux 中提示输入框和选中菜单项不可读；普通 iTerm2 标签页正常。已排除转发、别名、TERM/主题变量等常见因素。  
   [GitHub Issue #4212](https://github.com/github/copilot-cli/issues/4212)

7. **[#4211] MCP 结构化响应中的 BigInt 导致任务全部中止**  
   **评论 2 | 创建 2026-07-21**  
   MCP 服务器返回大数字时，CLI 报 `TypeError: Do not know how to serialize a BigInt`，所有进行中的任务被中止。  
   [GitHub Issue #4211](https://github.com/github/copilot-cli/issues/4211)

8. **[#4380] Rubber Duck 审查使用了与主会话相同的模型族**  
   **评论 2 | 创建 2026-08-05**  
   橡胶鸭审查本应提供独立的对抗性审查，但实际有时沿用主会话模型（如 5.6 Terra - Max），降低审查价值。  
   [GitHub Issue #4380](https://github.com/github/copilot-cli/issues/4380)

9. **[#4392] 认证后重建 MCP 客户端，遗留孤儿 stdio 进程**  
   **评论 1 | 创建 2026-08-06**  
   启动时先拉起 MCP 服务器，认证完成后再整体重建 MCP 客户端并重新拉起，第一代 stdio 子进程既未 kill 也未 reap，导致进程泄漏。  
   [GitHub Issue #4392](https://github.com/github/copilot-cli/issues/4392)

10. **[#4346] Actions 内置 GITHUB_TOKEN 拉取 MCP 注册表策略返回 403**  
    **👍 1 | 评论 1 | 创建 2026-08-03**  
    CI 中使用文档推荐的 PAT-less 方式（`copilot-requests: write`）时，MCP 策略获取被 403 拒绝，阻断所有非默认 MCP 服务器。  
    [GitHub Issue #4346](https://github.com/github/copilot-cli/issues/4346)

## 重要 PR 进展

过去 24 小时内无 PR 更新。当前无新增合并或待审 PR。

## 功能需求趋势

从全部 Issue 中提炼出的社区核心诉求：

- **会话体验增强**：支持历史滚动浏览（#4313）、修复恢复大会话的资源爆炸（#4251）、解决队列消息卡死（#4373）和排队消息顺序错乱（#4372）。
- **MCP 全链路完善**：覆盖序列化兼容性（BigInt，#4211）、进程生命周期管理（#4392）、CI 场景的权限策略（#4346）、非 GitHub 远程仓库的注册表兼容（#4374）。
- **模型选择与独立性**：支持 BYOM 在会话内动态切换模型（#4376）、确保 Rubber Duck 使用独立审查模型（#4380）。
- **平台兼容性**：NixOS Bash 启动（#3392）、Windows 复制清屏（#4391）、tmux 主题可读性（#4212）、.agents 约定对任意目录生效（#4204）。
- **权限透明化**：权限提示需显示触发审批的具体规则或命令特征（#4386），并修复 auto→interactive 模式切换后权限失效的问题（#4388/#4389）。

## 开发者关注点

- **权限模式切换不可靠**：auto 切回 interactive 后，agent 仍继续自动改代码，影响多模型复现（#4388、#4389）。
- **队列消息永久卡住**：排队消息不显示、不取消、不执行，`Ctrl+C` 无效，迫使重启（#4373）。
- **渲染类故障反复出现**：Transcript 空白、复制文本清屏、tmux 内不可见，已开始影响一部分用户的工作信心（#4311、#4391、#4212）。
- **模型选择黑盒问题**：用户配置 `gpt-5.6-terra`，后台却实际消费 Opus 额度，预算归因不透明（#4377）。
- **性能回归仍是升级最大顾虑**：1.0.74 的会话恢复问题至今未修复，用户对升级持谨慎态度（#4251）。

---

*本日报由 GitHub Copilot CLI 仓库公开数据自动生成，数据截至 2026-08-07。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期：2026-08-07**

## 今日速览
今日无新版本发布，但社区动态聚焦于 **StrReplaceFile 严重编码损坏缺陷**（#2591）：该 Bug 在 8 月 7 日刚被更新，随即出现两个修复 PR（#2594、#2595），方向不同、互为补充。此外，长期高热的功能请求 **"跨会话记忆系统"**（#1283）讨论继续升温，VSCode 扩展体验类 Issue 持续涌现，表明开发者对 IDE 深度集成与上下文管理能力的诉求日趋强烈。

## 社区热点 Issues（共 8 条活跃）

### 1. [#2591 StrReplaceFile corrupts undecodable bytes outside the edited region](https://github.com/MoonshotAI/kimi-cli/issues/2591)
- **作者/时间**：shoemoney / 创建 2026-08-05，更新 2026-08-07
- **焦点**：核心 bug。`StrReplaceFile` 以 `errors="replace"` 解码、编辑、写回整份文件，导致文件内任何非 UTF-8 字节（即使远离编辑区域）都会被替换为 `U+FFFD`，造成不可逆数据损坏。
- **为什么重要**：这是当前**最紧迫的数据安全问题**，可能导致任意二进制/混合编码文件被破坏。今日更新的活跃状态表明维护者已关注，并已获得两个修复 PR 响应。

### 2. [#1283 Memory System - Persistent context across sessions](https://github.com/MoonshotAI/kimi-cli/issues/1283)
- **作者/时间**：CatKang / 创建 2026-02-27，更新 2026-08-06，20 条评论
- **焦点**：请求实现跨会话**记忆系统**，涵盖自动记忆（AI 管理笔记）与手动记忆（用户指令），以便持久记录项目上下文、模式与偏好。
- **为什么重要**：20 条评论是本周期互动最高，代表高级用户对"长期协作式 AI 编程助手"的核心期待，有望成为后续路线图的重要参考。

### 3. [#2474 kimi code cli 界面抖动 / re-rendering the entire conversation from scratch](https://github.com/MoonshotAI/kimi-cli/issues/2474)
- **作者/时间**：yudichimiantiao / 创建 2026-06-25，更新 2026-08-06，2 条评论，2 👍
- **焦点**：终端界面频繁抖动、异常重新渲染整个对话（K2.7 Code thinking 模型 / Linux）。
- **为什么重要**：该问题影响核心交互稳定性，获得 2 个 👍，说明有一定用户共鸣，可能关联终端渲染层或流式刷新机制的缺陷。

### 4. [#2317 [VSCode Extension] Plan mode file path not clickable in chat webview](https://github.com/MoonshotAI/kimi-cli/issues/2317)
- **作者/时间**：vlad-at-work / 创建 2026-05-17，更新 2026-08-06，4 条评论，1 👍
- **焦点**：VSCode 扩展中 Plan 模式输出的文件路径无法点击跳转（moonshot-ai.kimi-code@0.5.10）。
- **为什么重要**：Plan 模式是代码评审/规划的关键场景，路径不可点击直接破坏"规划→编辑"工作流，是 IDE 集成层面的直接体验缺陷。

### 5. [#2147 Lazy-load MCP tool schemas into context](https://github.com/MoonshotAI/kimi-cli/issues/2147)
- **作者/时间**：Evan-Kim2028 / 创建 2026-05-02，更新 2026-08-06，1 条评论，1 👍
- **焦点**：提出 MCP 工具 schema 应按需注入上下文，而非在会话开始时全量加载（可能消耗几千 tokens）。
- **为什么重要**：这是一个典型的**上下文窗口优化**方案，对配置多 MCP Server 的用户影响巨大，能显著提升 token 经济性与首次响应速度。

### 6. [#2593 VSCode 插件面板快捷切换 auto/yolo/manual 模式](https://github.com/MoonshotAI/kimi-cli/issues/2593)
- **作者/时间**：xuchengpu / 创建 2026-08-06，0 条评论
- **焦点**：希望在 VSCode 面板中提供模式快捷切换，并能在状态栏查看 "5 小时剩余量"。
- **为什么重要**：反映重度用户在 IDE 工作流中追求**更高操作效率**，同时渴望配额可视化。新建即可见，但暂缺维护者回应。

### 7. [#621 第一个 WriteFile 总是 Invalid path](https://github.com/MoonshotAI/kimi-cli/issues/621)
- **作者/时间**：footerzch / 创建 2026-01-15，更新 2026-08-06，状态 CLOSED
- **焦点**：首次 WriteFile 必报 Invalid path，改用绝对路径后可正常。
- **为什么重要**：虽已关闭，但属于"首次运行即遇挫"的体验问题，曾在 0.76 版本影响用户。本次更新可能是关闭/标注，但值得留意是否在回归测试中覆盖。

### 8. [#821 [Security] Missing authorization checks + dependency CVEs](https://github.com/MoonshotAI/kimi-cli/issues/821)
- **作者/时间**：devatsecure / 创建 2026-01-31，更新 2026-08-06，状态 CLOSED
- **焦点**：安全审查发现 2 个 Web API 鉴权缺失（IDOR）及 5 个依赖 CVE，CVSS 估 7.0–8.0。
- **为什么重要**：虽然关闭，但安全性影响深远。建议开发者确认漏洞是否已在当前版本修复、相关依赖是否完成升级。

## 重要 PR 进展（共 3 条活跃）

### 1. [#2595 fix(StrReplaceFile): refuse to edit files that are not valid UTF-8](https://github.com/MoonshotAI/kimi-cli/pull/2595)
- **作者/时间**：shoemoney / 创建 2026-08-06
- **内容**：对应并解决 #2591。方案为**拒绝编辑**非 UTF-8 文件，从源头避免损坏。
- **意义**：此方案保守稳健，能保护二进制/混合编码文件，但会牺牲对这类文件的编辑支持。适合作为兜底安全策略。

### 2. [#2594 fix(tools): preserve non-UTF-8 bytes in StrReplaceFile edits](https://github.com/MoonshotAI/kimi-cli/pull/2594)
- **作者/时间**：686f6c61 / 创建 2026-08-06
- **内容**：同样针对 #2591。方案为**在 raw buffer 上以字节子串执行替换**，精确保留非 UTF-8 字节。
- **意义**：与 #2595 相比更"无损"，从机制上修复问题，兼容性更好。两个 PR 形成技术路线之争（拒绝 vs. 保留），建议维护者优先评估此方案与现有调用链的兼容性。

### 3. [#2255 feat(shell): support Shift+Enter for inserting newlines](https://github.com/MoonshotAI/kimi-cli/pull/2255)
- **作者/时间**：donbeave / 创建 2026-05-13，状态 CLOSED
- **内容**：为交互式提示符增加 **Shift+Enter** 换行快捷键（补充现有 Ctrl-J / Alt-Enter），关联 #2254 及多个换行相关 Issue。
- **意义**：已关闭，大概率已合入或挂起。若已合并，将显著提升多行输入体验，降低终端用户的记忆成本。

## 功能需求趋势
- **上下文持久化与记忆系统**（#1283）：跨越单次会话的"长期记忆"成为高级用户最渴求的能力，属于 AI 助手从"工具"迈向"协作者"的关键门槛。
- **IDE 集成深度优化**（#2317、#2593）：文件路径可点击、模式快捷切换、配额状态栏等需求表明，开发者希望将 Kimi Code CLI 无缝嵌入 VSCode 工作流，而不只是复制粘贴命令。
- **上下文窗口管理**（#2147）：MCP Schema 懒加载提出“精细化 token 预算”的思路，这是多 MCP 环境下保障大项目可用性的有效方向。
- **数据安全与会话稳定性**（#2591、#2474）：文件编码完整性、终端渲染稳定性是最基础的信任底线，这类问题优先级应高于一般功能迭代。

## 开发者关注点
- **文件编码安全**：StrReplaceFile 的破坏性编码回写（#2591）引发高度敏感，开发者的底线诉求是"**编辑一个函数，绝不能破坏同一文件里另一个无关字节**"。
- **终端渲染稳定性**：界面抖动/全量重渲染（#2474）不属于功能缺失，而是基础体验严重受损，用户会因频繁刷新而丢读上下文，需要快速定位。
- **首操作"失败"心理落差**：#621 虽然关闭，但"第一次就报错"会被视为产品质量信号。类似路径解析问题应在自动化测试中加以守护。
- **操作效率**：VSCode 模式下希望在 1 次点击内切换 auto/yolo/manual，并实时查看额度（#2593）；终端中则需要顺手的换行快捷键（#2255）。这些都是在"少打字、快操作"方向上的一致诉求。

---
*数据统计时间范围：2026-08-06 至 2026-08-07 · 数据源：[MoonshotAI/kimi-cli GitHub](https://github.com/MoonshotAI/kimi-cli)*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-08-07）

## 今日速览

OpenCode Go/Zen 订阅用户大面积遭遇 "Request blocked by upstream provider"（HTTP 401）错误，目前已有 8+ 个相关 Issue 且活跃评论持续增加，社区反应强烈，已确认是服务端问题而非客户端故障。功能层面，会话上下文可视化、跨项目会话管理、可点击链接等功能请求热度持续走高；PR 方面，TUI 交互增强、工作区环境基础模块、会话模型作用域修复等多项核心改进在今日密集推进。

## 社区热点 Issues

本周社区讨论集中在以下高关注度 Issue 上，反映了当前用户的核心痛点与功能诉求：

1. **[Bug] OpenCode Go 订阅全线模型返回 401 "Request blocked by upstream provider"**
   多用户报告在 OpenCode Go 订阅下所有模型调用 chat/completions 失败，仅 /v1/models 正常，涉及多个独立账号和不同平台（Windows/macOS/Linux）。已有多条关联 Issue（如 #38218、#38216、#38323、#38473、#39215、#40055、#39827），确认是服务端问题，免费模型不受影响。
   [#38257](https://github.com/anomalyco/opencode/issues/38257) | [#38218](https://github.com/anomalyco/opencode/issues/38218) | [#38195](https://github.com/anomalyco/opencode/issues/38195)

2. **[Bug] 订阅后套餐未生效（OpenCode Go）**
   用户订阅后收到成功邮件但页面仍提示订阅，报错 "No payment method"，疑似计费状态同步延迟问题。
   [#40234](https://github.com/anomalyco/opencode/issues/40234)

3. **[Feature] 会话上下文用量展示（类似 Claude 的 /context）**
   获得 129 👍，呼吁实现 TUI 对话框展示当前会话上下文窗口占用明细（token 分项、工具调用、文件内容占比等），帮助开发者优化长会话管理。已持续讨论近 8 个月，社区呼声极高。
   [#6152](https://github.com/anomalyco/opencode/issues/6152)

4. **[Feature] 跨项目会话列表 / 选择器**
   当前 /sessions 命令仅限当前项目，多仓库协作时切换成本高。社区期望 TUI 可以跨项目浏览/搜索/切换历史会话。获得 6 👍。
   [#31932](https://github.com/anomalyco/opencode/issues/31932)

5. **[Feature] 链接可点击（Ctrl+左键打开）**
   获得 119 👍，希望 TUI 中 URL 支持 Ctrl+点击直接在默认浏览器打开，改善工作流。该需求已存在约一年，属于长期高频呼声。
   [#1168](https://github.com/anomalyco/opencode/issues/1168)

6. **[Feature] 恢复 Go 隐私措辞并提供遥测/保留政策的透明度**
   获得 44 👍，用户关注近两周内 OpenCode 对 Go 订阅隐私条款的静默修改及 provider 归属说明移除，要求更新隐私政策并增加透明度。
   [#39875](https://github.com/anomalyco/opencode/issues/39875)

7. **[Bug] Web 界面会话消息不实时刷新**
   新消息需手动刷新页面才可见，影响 Web 端多端协作体验。
   [#40502](https://github.com/anomalyco/opencode/issues/40502)

8. **[Bug] DeepSeek V4 Flash Free 上下文窗口元数据错误（200K vs 原生 1M）**
   因 models.dev 元数据配置问题，DeepSeek V4 Flash Free 的长上下文能力被错误限制，降低其长代码任务效用，社区期望修正元数据。
   [#40958](https://github.com/anomalyco/opencode/issues/40958)

9. **[Feature] Todo Sidebar 与 Linear 集成**
   建议将当前 per-session 扁平 todo 列表升级为项目级集成 Linear 的任务管理面板，便于跨会话跟踪开发任务。
   [#38081](https://github.com/anomalyco/opencode/issues/38081)

10. **[Feature] 可配置的 mid-run 提示符投递模式（队列 vs 转向，支持压缩感知语义）**
    获得 67 👍，用户在长任务运行时希望明确区分输入是"排队"还是"转向"当前回复，并优化上下文压缩场景下的行为。
    [#32157](https://github.com/anomalyco/opencode/issues/32157)

## 重要 PR 进展

1. **feat(tui): expose prompt action commands**
   为 TUI 插件暴露稳定的 prompt 操作命令（form.option.previous 等），增强插件生态扩展开启能力。
   [#40971](https://github.com/anomalyco/opencode/pull/40971)

2. **feat(core): bound tool output**
   为本地工具输出设置行数和字节数限制，完整截断文本保留至受管文件（7 天保留期），通过 metadata.truncated 标识生产方截断，避免工具输出无限膨胀。
   [#40929](https://github.com/anomalyco/opencode/pull/40929)

3. **refactor(core): simplify file tools to lexical paths**
   文件工具路径解析简化为词法路径（不解析符号链接），与 V1 工具行为对齐，改进符号链接列出、坏 UTF-8 容错处理。
   [#40962](https://github.com/anomalyco/opencode/pull/40962)

4. **feat(tui): queue prompts with option enter**
   Enter 显式引导当前响应，Option+Enter/Alt+Enter 排队提示，队列任务在编辑区紧凑停靠，改善运行中任务的多输入管理。
   [#40922](https://github.com/anomalyco/opencode/pull/40922)

5. **fix(llm): treat empty tool call identity in stream deltas as absent**
   修复 OpenAI 兼容端点（如阿里云 DashScope）在流式增量中发送空字符串 id 时的 "missing id or name" 错误。
   [#40969](https://github.com/anomalyco/opencode/pull/40969)

6. **fix(core): default custom agents to primary**
   新定义的自定义 agent 在未指定 mode 时默认设为 primary，保持 subagent/all 模式显式设置不变，更新 V2 agent 文档。
   [#40880](https://github.com/anomalyco/opencode/pull/40880)

7. **fix(core): migrate legacy small model**
   将 v1 配置中的 small_model 迁移到内建的 title agent model，保留旧版 title-agent 覆盖，拒绝畸形引用并记录迁移过程。
   [#40966](https://github.com/anomalyco/opencode/pull/40966)

8. **feat(core): add workspace environment foundation**
   纯添加的工作区环境基础模块，以 spawn 作为驱动契约，Files 由 Effect ChildProcessSpawner 派生，为后续环境能力奠定基础。
   [#40967](https://github.com/anomalyco/opencode/pull/40967)

9. **fix(tui): dismiss stale permission prompts**
   修复 TUI 权限提示在服务端请求已不存在时仍驻留的问题，手动/自动权限回复统一路由至数据层，及时清理过期状态。
   [#40960](https://github.com/anomalyco/opencode/pull/40960)

10. **fix(tui): keep model selection session scoped**
    将 TUI 活跃模型从共享的 agent 级状态改为绑定到会话，切换标签保留各会话模型与变体，未发送的选择保留为私有草稿。
    [#40913](https://github.com/anomalyco/opencode/pull/40913)

## 功能需求趋势

- **订阅服务可靠性**：OpenCode Go/Zen 的 401 问题成为头号热点，直接影响用户付费核心功能，是当前最高优先级修复项。
- **会话多样化管理**：上下文用量可视化、跨项目会话列表/搜索、会话统计、会话内容全文检索等需求高频出现，用户对长会话状态管理的诉求非常强烈。
- **TUI 可用性增强**：可点击链接、可配置队列 vs 转向输入、会话统计命令（stats）等，反映开发者希望 TUI 更接近 IDE 的日常可用性。
- **权限与合规透明度**：隐私措辞恢复、遥测与数据保留政策公开，社区对商业订阅的合规信任建设有明显诉求。
- **第三方集成与可扩展性**：Todo Sidebar + Linear、插件化 prompt action 命令暴露，说明社区在向更重度的开发工作流管理工具演进。

## 开发者关注点

- **高频痛点：OpenCode Go/Zen 订阅认证故障**（多账号多平台一致报错，免费模型正常），严重影响付费用户体验与信任度。
- **平台兼容性**：Windows 10 + Node.js 26.7 启动失败、Linux 桌面版卡死、PowerShell 下关闭 CLI 后终端乱码等跨平台稳定性问题依旧存在。
- **长期未解决的功能请求**（如可点击链接、会话上下文可视化）已持续数月至一年仍未落地，社区期待核心功能迭代进一步提速。
- **权限规则匹配语义模糊**：permission.edit 按 worktree 相对路径匹配，绝对路径或 ~ 模式静默失效，且 deny 规则 fail-open 存在安全隐患，开发者希望完善匹配机制与文档说明。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

## Pi 社区动态日报（2026-08-07）

### 今日速览

- **v0.84.0 发布**，引入全屏 TUI 模式，支持运行时切换、独立滚动转录区与可拖动滚动条。
- **Windows 支持讨论热度最高**（Issue #7547，22 条评论），社区正集中收集 Windows 用户使用痛点。
- **多款新模型提供商 PR 集中涌现**（Ollama Cloud、Qwen Token Plan、Amazon Bedrock Mantle、LLM Gateway），同时上下文压缩 bug（#6879，👍15）引发广泛关注。

---

### 版本发布

**v0.84.0**
- 新增 **Fullscreen TUI mode**：可在运行时于普通/全屏模式间切换；全屏模式下提供粘性编辑器与页脚、可独立滚动的转录区，以及可拖动的滚动条。
- 详细变更见 [UI & Display 文档](https://github.com/earendil-works/pi/blob/v0.84.0/packages/coding-agent/docs/settin)。

---

### 社区热点 Issues

过去 24 小时共更新 50 条 Issue，以下按评论数与关注度选取 10 条：

1. **[Windows] 你如何在 Windows 上使用 Pi？遇到了哪些问题？**
   - **#7547** · OPEN · 22 条评论 / 👍1
   - 作者发起讨论以收集 Windows 用户的真实使用场景，决定核心修复/文档优先级，并识别可外包至扩展的路径。评论非常活跃，是当前 Windows 支持最重要的信息源。
   - [GitHub Issue #7547](https://github.com/earendil-works/pi/issues/7547)

2. **[bug] 上下文压缩在超过 100% 前从不触发，直到提供商溢出**
   - **#6879** · OPEN · 12 条评论 / 👍15
   - 用户在一次 2 小时的 agentic 会话中，上下文占用超过阈值并突破 100%，直到 API 在 373k tokens 拒绝请求时压缩才真正执行。开发者建议每个 agent 操作后都检查压缩条件，而非依赖 API 报错兜底。
   - [GitHub Issue #6879](https://github.com/earendil-works/pi/issues/6879)

3. **[bug] 默认系统提示词中 PI_\* 指南过度鼓励不必要的 bash 调用**
   - **#7128** · OPEN · 10 条评论 / 👍5
   - 系统提示新增“检查 PI_* 环境变量以了解当前模型和会话信息”后，模型倾向于在非必要时也执行 env 检查命令。社区在讨论如何调整提示词措辞以减少无意义工具调用。
   - [GitHub Issue #7128](https://github.com/earendil-works/pi/issues/7128)

4. **[bug] 编辑失败（edit 工具参数校验错误）**
   - **#4990** · CLOSED · 8 条评论
   - 用户在某次升级后首次遇到 `edit` 工具持续校验失败：`edits: must have required properties edits`，且未更换模型或修改设置。该问题已被关闭。
   - [GitHub Issue #4990](https://github.com/earendil-works/pi/issues/4990)

5. **[bug] GitHub Copilot GHE.com 企业账号压缩失败——"unknown stamp" 错误**
   - **#7413** · CLOSED · 7 条评论 / 👍1
   - `/compact` 在 GHE.com 企业账户上每次失败，普通对话正常；报错 `invalid token: unknown stamp "prod-cus-01"`。企业认证场景的兼容性问题已关闭。
   - [GitHub Issue #7413](https://github.com/earendil-works/pi/issues/7413)

6. **[功能请求] 改进 Vertex + GCP 元数据服务器支持**
   - **#5323** · OPEN · 7 条评论 / 👍1
   - 当前 “is Vertex authed?” 检查为同步 `existsSync`（仅看本地凭据文件），在依赖 GCP 元数据服务器的环境中无法正常工作。影响 GCE/Cloud Run 等云环境用户。
   - [GitHub Issue #5323](https://github.com/earendil-works/pi/issues/5323)

7. **[bug] DeepSeek 模型经 opencode zen 网关报 400：需回传 reasoning_content**
   - **#7702** · OPEN · 4 条评论
   - 多轮/工具调用对话中，DeepSeek 经 `opencode.ai/zen/v1` 网关时报 `The reasoning_content in the thinking mode must be passed back`；根因指向 `detectCompat()` 未处理 DeepSeek 思考签名。
   - [GitHub Issue #7702](https://github.com/earendil-works/pi/issues/7702)

8. **[bug] 活跃运行期间调用 Agent.reset() 留下仅含助手消息的会话记录**
   - **#7703** · CLOSED · 4 条评论
   - `reset()` 在 `prompt()` 活跃时清空会话并将 `isStreaming` 置为 false，但未中止运行；该运行完成后会将其助手消息追加到已清空状态。已由 PR #7717 修复。
   - [GitHub Issue #7703](https://github.com/earendil-works/pi/issues/7703)

9. **[bug] 渲染行超过终端宽度时 TUI 抛出未捕获异常**
   - **#7736** · CLOSED · 3 条评论 / 👍1
   - v0.84.0 中 `Rendered line 409 exceeds terminal width (76 > 74)` 直接触发 `uncaughtException` 退出，属于 TUI 组件未正确截断输出导致的边界崩溃。
   - [GitHub Issue #7736](https://github.com/earendil-works/pi/issues/7736)

10. **[bug] pi-coding-agent 泄漏 X11 连接，直至耗尽 X server 客户端表**
    - **#7600** · OPEN · 3 条评论
    - 一次约 8 天的长驻运行泄漏了 182 个 X11 连接，最终触发 Xorg 的 256 客户端上限，导致新 X 客户端无法启动。桌面场景的长时稳定性警讯。
    - [GitHub Issue #7600](https://github.com/earendil-works/pi/issues/7600)

**其他值得留意**：#7720（希望可在全屏 TUI 中禁用选择复制）、#7321（Termux 等无 bracketed paste 的终端多行粘贴异常）、#7689（处理 Codex 的 `end_turn: false`）、#7744（工具结果含媒体标记但无图像数据时 tokenizer 崩溃）。

---

### 重要 PR 进展

过去 24 小时共更新 31 条 PR，以下选取 10 条：

1. **[OPEN] feat(ai): Ollama Cloud 支持**
   - **#7742** · 新增 Ollama Cloud 提供商，使用 `OLLAMA_API_KEY`；本地+云端混合连接可继续通过 `ollama launch pi` 实现。已按现有 provider 模式验证。
   - [GitHub PR #7742](https://github.com/earendil-works/pi/pull/7742)

2. **[CLOSED] feat(ai): 新增 Qwen Token Plan Individual 提供商**
   - **#7659** · 为国际版 Token Plan 端点新增 `qwen-token-plan-individual`，暴露 8 个文档化模型；保留现有国际/中国区提供商，并执行了限额约束。
   - [GitHub PR #7659](https://github.com/earendil-works/pi/pull/7659)

3. **[OPEN] feat: 添加 Amazon Bedrock Mantle OpenAI Responses 提供商**
   - **#6216** · 基于 OpenAI 官方 Bedrock Provider 接入 Bedrock Mantle 的 OpenAI Responses API，替代此前被自动关闭的 PR。
   - [GitHub PR #6216](https://github.com/earendil-works/pi/pull/6216)

4. **[OPEN] feat(ai): 添加 LLM Gateway 与 LLM Gateway DevPass 提供商**
   - **#7610** · 由 LLM Gateway 团队贡献的两个 openai-completions 提供商，定位 OpenRouter 风格路由（替代 #7480）。
   - [GitHub PR #7610](https://github.com/earendil-works/pi/pull/7610)

5. **[CLOSED] fix(agent): 活跃运行期间拒绝 reset**
   - **#7717** · 修复 #7703：运行中调用 `reset()` 会被拒绝，保留会话和运行时状态直至响应结束；新增回归测试覆盖流中重置场景。
   - [GitHub PR #7717](https://github.com/earendil-works/pi/pull/7717)

6. **[CLOSED] feat(agent): 允许被阻止的工具调用终止回合**
   - **#7715** · 为 `beforeToolCall`/`tool_call` 被阻止的工具调用新增可选 `terminate` 提示；保留“同批全部结果必须终止”的既有规则。
   - [GitHub PR #7715](https://github.com/earendil-works/pi/pull/7715)

7. **[CLOSED] 支持 AGENTS.override.md 作为目录级上下文覆盖**
   - **#7681** · 同一目录存在 `AGENTS.override.md` 与 `AGENTS.md`/`CLAUDE.md` 时，只加载 override。关闭 #7642。
   - [GitHub PR #7681](https://github.com/earendil-works/pi/pull/7681)

8. **[CLOSED] fix(tui): 在内容驱动的完整重绘时保留回滚**
   - **#7718** · 普通屏幕模式下，流式 Markdown 重排引发的完整重绘会破坏视口以上 scrollback；此 PR 修复该问题。
   - [GitHub PR #7718](https://github.com/earendil-works/pi/pull/7718)

9. **[CLOSED] fix(tui): 全屏模式复制时避免多余换行**
   - **#7721** · 修复全屏 TUI 中长行换行后按视觉行复制导致粘贴插入非原始换行的问题；现按行-视觉行映射输出。
   - [GitHub PR #7721](https://github.com/earendil-works/pi/pull/7721)

10. **[CLOSED] fix(coding-agent): 编译产物中禁用 bunfig 自动加载**
    - **#7685** · Bun 编译的独立二进制会先加载 cwd 的 `bunfig.toml` 并执行 preload；若项目 preload 损坏则连 `pi --version` 都无法运行。编译选项中已加入 `--no-compile-autoload`。
    - [GitHub PR #7685](https://github.com/earendil-works/pi/pull/7685)

**其他值得关注**：#7733（TUI 多选行为修复）、#7722（新增 `--use-theme` 主题覆盖）、#7727（SQLite 会话存储查询优化）、#7686（可配置 Harness 工厂）、#7671（工具 prompt 贡献与定义对齐）。

---

### 功能需求趋势

- **新模型/提供商接入**
  24 小时内出现 Ollama Cloud、Qwen Token Plan Individual、Amazon Bedrock Mantle、LLM Gateway 等多个 provider PR，说明社区对多厂商模型和网关路由的需求正在集中释放。

- **TUI / 终端体验**
  v0.84.0 全屏模式带动周边功能讨论：双击选词、选择复制策略、半页滚动、主题覆盖、复制行为修正等。终端兼容性问题（如 bracketed paste、宽度溢出崩溃）也持续被报告。

- **上下文管理与压缩策略**
  #6879 触发社区反思：压缩机制不应等 API 拒绝请求时才生效，需要更主动的检查时机、更清晰的阈值提示，以及针对长时 agent 会话的保障。

- **环境集成与认证**
  GCP 元数据服务器支持、GHE.com 企业账号压缩失败、SSH 场景下 Anthropic 登录体验，均指向认证/云环境支持的不足。

- **扩展 / API 稳定性**
  `Agent.reset()` 语义明确化、blocked tool call 增加 `terminate` 提示、只读认证预检命令（#7152）、SessionManager.reload()（#7699）等，反映 SDK 层面向更精细控制演进。

---

### 开发者关注点

- **Windows 支持是当前最大痛点**：#7547 的 22 条评论提供了大量反馈样本；终端兼容性（如 Termux 多行粘贴失败）是相关的次生问题。
- **上下文压缩必须尽早触发**：等待 API 400 才压缩会直接中断长任务，开发者需要更智能的检查频率和显式阈值提示。
- **默认系统提示词存在过度引导**：#7128 表明“检查 PI_\* 环境变量”的指示会被模型机械执行，提示工程需要更克制。
- **TUI 稳定性回归**：0.84.0 全屏 TUI 在超宽行、空 content 等边界输入下存在崩溃（#7736、#7695、#7737），需要更严格的防御式截断和空值处理。
- **长时间运行可靠性**：#7600 的 X11 连接泄漏表明桌面长驻场景下仍有资源管理隐患，值得全面排查。

---

*本日报基于 GitHub 上 earendil-works/pi 仓库 2026-08-07 的数据自动生成。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-08-07

## 今日速览

今日 Qwen Code 发布正式版 v0.21.7，移除了 Goals 的 50 轮对话限制并支持在终端内联渲染模型输出的图片，同时发布 Qwen Live Host v0.1.0 安装器。社区侧安全议题热度上升，三起涉及文件夹信任与凭据泄露的漏洞报告集中出现，另有 0.21.6 hook 系统回归与 Windows 桌面端启动崩溃两大高优先级问题待处理。

## 版本发布

### v0.21.7（正式版）
- 移除了 Goals 模式的 50 轮对话限制，长任务可恢复并继续执行（PR [#8421](https://github.com/QwenLM/qwen-code/pull/8421)）
- 支持在交互式 CLI 中内联渲染模型输出的终端图片（kitty/iTerm2/WezTerm/Ghostty/Warp，对应已关闭的 issue [#8090](https://github.com/QwenLM/qwen-code/issues/8090)）

### v0.21.7-nightly.20260807.fca8f3c1f
- CI 修复：显式透出 autofix 接管被阻塞的状态（PR [#8410](https://github.com/QwenLM/qwen-code/pull/8410)）

### live-host-v0.1.0 / live-host-latest
- 首个 Qwen Live Host 安装器版本发布
- 新增 Windows 合并队列测试迁移到 ECS 的 CI 调整（PR [#8386](https://github.com/QwenLM/qwen-code/pull/8386)）

## 社区热点 Issues

1. **只读 Shell 分类器可被命令替换绕过（安全漏洞）**
   [#8582](https://github.com/QwenLM/qwen-code/issues/8582)
   AST 分类器与运行时替换检测均无法识别通过行延续符或 `${var@P}` 隐藏的命令替换，导致只读命令被自动批准执行任意代码。P1 安全漏洞，已有对应 PR 修复中。

2. **显式 DO_NOT_TRUST 信任规则被祖先目录覆盖（安全漏洞）**
   [#8627](https://github.com/QwenLM/qwen-code/issues/8627)
   当文件夹信任开启时，工作区的显式 "不信任" 会被祖先目录的 "信任" 规则静默覆盖，不可信工作区可能借机注入 `qwen serve` 的 bearer token。与 #8643 同源。

3. **0.21.6 Hook 系统回归：PreToolUse/PostToolUse 等钩子不再触发**
   [#8622](https://github.com/QwenLM/qwen-code/issues/8622)
   升级至 0.21.6 后，仅 `UserPromptSubmit` 和 `Stop` 事件正常触发，`PreToolUse`、`PostToolUse`、`PreCompact`、`SessionStart` 等钩子全部失效，破坏 hook 对工具执行的管控能力，属 0.21.5 的回归。

4. **Windows 桌面版 v0.1.0 打开工作区崩溃**
   [#8615](https://github.com/QwenLM/qwen-code/issues/8615)
   打包运行时在 Windows 11 上打开工作区（如 `C:\dev\MathDesk`）时报 `EISDIR lstat 'C:'` 崩溃，阻断基本使用流程，P1。

5. **取消 Prompt 后输入框内容丢失**
   [#8316](https://github.com/QwenLM/qwen-code/issues/8316)
   用户发送 prompt 后取消（Ctrl+C），已输入内容不会恢复到输入框，用户需要重新输入整个 prompt，影响编辑 prompt 的工作流效率。

6. **Serve 快速路径从不受信任祖先目录加载 .env（安全漏洞）**
   [#8643](https://github.com/QwenLM/qwen-code/issues/8643)
   `findEnvFilesFastPath` 只评估一次起始目录的信任状态，然后对向上遍历的所有 `.env` 候选文件复用该布尔值，导致受信任工作区会从不受信任的祖先目录加载凭据。

7. **终端窗口缩小导致已播报内容重复打印**
   [#8557](https://github.com/QwenLM/qwen-code/issues/8557)
   macOS + Warp 下缩小终端窗口时，历史 transcript 块被重复写回 scrollback，同一内容堆叠出现。

8. **Windows 终端输入中文时拼音不清晰**
   [#8625](https://github.com/QwenLM/qwen-code/issues/8625)
   0.21.5 版本在 Windows 终端输入中文时，拼音显示模糊难以辨认，影响中文用户的输入体验。

9. **Anthropic 模型 ID 解析拒绝点分别名并缺少 Opus 5 Token 限制**
   [#8584](https://github.com/QwenLM/qwen-code/issues/8584)
   无法处理 `claude-opus-4.8` 形式的点分小版本别名，同时缺少 Opus 5 模型的 token 上限配置，影响代理部署场景。

10. **tmux 中对话时闪屏**
    [#8562](https://github.com/QwenLM/qwen-code/issues/8562)
    通过 iTerm2 SSH 至 Ubuntu 进入 tmux 后，发消息时 tmux 分屏持续闪烁。用户使用 Qwen 3.8 Max 排查后定位为 Qwen Code 版本问题。

## 重要 PR 进展

1. **[fix(core): confirm read-only git commands when repo config executes programs (#8575)](https://github.com/QwenLM/qwen-code/pull/8645)**
   修复只读 git 命令（status/diff/log 等）在仓库本地配置执行程序时被自动放行的问题，与 Issue #8582 同属安全加固方向。

2. **[fix(desktop): strip Windows verbatim prefix from workspace paths](https://github.com/QwenLM/qwen-code/pull/8619)**
   将桌面端两处工作区路径规范化从 `std::fs::canonicalize` 替换为 `dunce::canonicalize`，修复 Windows 上 `\\?\C:\...` 前缀导致崩溃的问题。

3. **[fix(core): load extension hooks from Claude and Gemini manifests](https://github.com/QwenLM/qwen-code/pull/8646)**
   支持从 Claude 和 Gemini 的扩展清单中加载 hook 配置，扩展跨提供商的 hook 覆盖能力。

4. **[feat(core): share compression caches with OpenAI providers](https://github.com/QwenLM/qwen-code/pull/8418)**
   [配套 PR](https://github.com/QwenLM/qwen-code/pull/8425) 将压缩缓存共享扩展至 Gemini 和 Vertex AI，将前缀保留缓存路径从 DashScope 推广到所有 OpenAI 兼容提供商。

5. **[fix(cli): Run ACP agent fan-outs concurrently and past the tool-call cap](https://github.com/QwenLM/qwen-code/pull/8631)**
   修复 ACP 会话工具批处理与核心调度语义不一致的问题，解除 /review 等长 agent 扇出的串行限制和工具调用上限。

6. **[fix(core): resolve Qwen 3.8 reasoning budget conflicts](https://github.com/QwenLM/qwen-code/pull/8525)**
   防止 DashScope Qwen 3.8 请求同时携带 `reasoning_effort` 和 `thinking_budget` 参数，完善多配置层的优先级逻辑。

7. **[feat(workflows): add cooperative pause and resume](https://github.com/QwenLM/qwen-code/pull/8320)**
   为 Dynamic Workflows 增加全运行协作暂停/恢复能力，暂停后排空进行中的任务并在 gate 处留存结果。

8. **[fix(core): recognize OpenAI SDK APIUserAbortError as an abort](https://github.com/QwenLM/qwen-code/pull/8399)**
   修复 OpenAI SDK 用户中止错误未被识别为 abort 导致 `error_type=APIUserAbortError` 噪音的问题。

9. **[feat(web-shell): improve parallel agent activity feedback](https://github.com/QwenLM/qwen-code/pull/8559)**
   改善 Web Shell 中多并行子代理运行时的动态反馈：活动状态保持在对话尾部、细节自动展开、完成后折叠过渡。

10. **[feat(review): add qwen-code repository context manifest](https://github.com/QwenLM/qwen-code/pull/8654)**
    新增仓库上下文清单，声明 /review 常见评审区域的领域边界、相关路径作用域、推荐测试与必要配置。

另有 [feat(review): say so when the bundle is older than the review it runs](https://github.com/QwenLM/qwen-code/pull/8390)、[fix(triage): finalize the status comment on cancellation too](https://github.com/QwenLM/qwen-code/pull/8436)、[feat(serve): observe daemon and child memory against real denominators](https://github.com/QwenLM/qwen-code/pull/8423) 等工作流与监控改进。

## 功能需求趋势

- **安全加固成为当前最集中的方向**：昨日同时出现三条与文件夹信任、凭据注入相关的漏洞报告（#8582、#8627、#8643），社区对 read-only 命令沙箱和 .env 加载路径的安全边界高度关注，建议用户及时跟进修复版本。
- **终端渲染体验是高频反馈领域**：围绕内联图片、闪烁、重复输出、中文输入拼音显示等问题的 Issue 持续出现，涉及 Windows、macOS（Warp/iTerm2）、Linux（tmux）等多个平台组合。
- **多语言与本地化需求增长**：社区提交韩语文档站点支持请求（[#8551](https://github.com/QwenLM/qwen-code/issues/8551)），语音前端接入 README 生态的提案（[#8629](https://github.com/QwenLM/qwen-code/issues/8629)）也获得关注。
- **新模型适配是持续议题**：Anthropic Opus 5 token 限制（#8584）与 Qwen 3.8 推理预算冲突（PR #8525）显示模型快速迭代与代码工具参数兼容之间的追赶仍有缺口。
- **Hook 系统稳定性受关注**：#8622 暴露的 hook 回归牵动依赖事件驱动工作流的用户，此类能力被视为 agent 自动化落地的基础。

## 开发者关注点

- **安全信任边界是当前最大痛点**：DO_NOT_TRUST 被 TRUST_FOLDER 覆盖、serve 快速路径越权加载 .env、只读命令白名单可被命令替换绕过——三案并发说明信任机制在复杂目录结构下仍不够健壮。
- **终端稳定性问题影响日常使用**：tmux 闪屏、终端缩窗重复输出、Windows 中文输入拼音模糊等视觉/交互类问题反馈量多、平台覆盖面广，直接影响开发者的日常操作效率。
- **Hook 与事件系统回归需要快速修复**：hook 不触发不是偶发而是 0.21.6 的版本回归，依赖 hook 做工具管控的用户受影响严重，需尽快修复并补测试。
- **Windows 平台支持仍有短板**：桌面端启动崩溃、VS Code 文件链接因盘符冒号被 URL 编码无法打开（[#8644](https://github.com/QwenLM/qwen-code/issues/8644)）、选择框遮挡内容（[#8617](https://github.com/QwenLM/qwen-code/issues/8617)）等多条 Windows/VS Code 相关反馈并存。
- **取消与恢复的操作体验待改进**：Ctrl+C 取消后 prompt 不恢复、自动 recap 丢弃（PR [#8573](https://github.com/QwenLM/qwen-code/pull/8573)）等交互细节说明打断/恢复流程的打磨仍有提升空间。

---
*本日报基于 GitHub 公开数据自动生成，数据截至 2026-08-07。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-08-07）

## 1. 今日速览

v0.9.4 发布列车完成合并（#5135），命令边界重构 EPIC #2870 正式收尾关闭。多个修复 PR 集中落地：鼠标滚轮路由修复（#5234）、子代理中断恢复（#5242）、MCP Registry 集成（#5238）。新开放的 Layer 5.3 PR（#5255）开始验证命令调色板集成，平台兼容性与构建性能是今日开发重点。

## 2. 版本发布

无新 Release。v0.9.4 发布列车 PR #5135 已合并，包含 77 个提交，预计正式版即将发布。

## 3. 社区热点 Issues

**#2870 [已关闭] EPIC: 命令边界重构追踪** — 作者：aboimpinto | 20 条评论  
将 #2791 讨论的大型重构拆解为多个可合并层，是近期最大的架构级改动，已随 #2851 等 PR 完成。
https://github.com/Hmbown/CodeWhale/issues/2870

**#5244 [开放] 未知模型 ID 静默降级到 128K 上下文** — 作者：Hmbown  
未注册模型 ID 会无提示回退到旧版 128K 窗口，1M 窗口模型被意外截断。0.9.4 已部分缓解，但社区要求更明确的警告。
https://github.com/Hmbown/CodeWhale/issues/5244

**#5250 [开放] 只能保存一个 API Key，跨 Provider 使用困难** — 作者：ffyuhf  
切换 DeepSeek/GLM 等模型时需要手动更换 Key，用户呼吁支持多 Key 独立保存。
https://github.com/Hmbown/CodeWhale/issues/5250

**#5253 [开放] 嵌套子代理 max_depth 可扩大根会话深度预算** — 作者：cacdcaecawae  
子代理通过显式 max_depth 绕过全局 `MAX_SPAWN_DEPTH_CEILING`，存在递归失控风险。
https://github.com/Hmbown/CodeWhale/issues/5253

**#4978 [已关闭] Anthropic API 报错 'type' must be in ["enabled","disabled","auto"]** — 作者：w1w218  
使用 OpenModel 兼容层时频繁出现 HTTP 400，重试偶尔成功，无固定规律。
https://github.com/Hmbown/CodeWhale/issues/4978

**#4828 [已关闭] macOS: "underwater" shell 破坏 open/osascript/launchctl** — 作者：zhiyuchen1101  
v0.9.0 的默认 shell 导致系统命令全部返回 exit code -54，降级到 v0.8.67 可解决。
https://github.com/Hmbown/CodeWhale/issues/4828

**#5223 [已关闭] TUI 内容溢出时鼠标滚轮只作用于输入历史区** — 作者：wangdsen  
滚轮事件被路由到输入框历史缓冲区而非内容区，已由 PR #5234 修复。
https://github.com/Hmbown/CodeWhale/issues/5223

**#4681 [已关闭] 重新打开会话时显示 turn_meta 块** — 作者：e792a8  
新会话中隐藏的 turn_meta 在重开后可见，影响阅读体验。
https://github.com/Hmbown/CodeWhale/issues/4681

**#5178 [已关闭] Web 管理后台 digest "post" 返回成功但未发布** — 作者：Hmbown  
接口返回 `ok:true` 但内容从未发布，草稿永远停在 Pending，是假成功问题。
https://github.com/Hmbown/CodeWhale/issues/5178

**#5035 [已关闭] Workflow 编排失败被并行 fan-out 隐藏** — 作者：Hmbown  
v0.9.4 发布阻塞器：`task()` 拒绝参数导致失败，并行槽位失败被当作 `null`，整体显示成功，掩盖真实错误。
https://github.com/Hmbown/CodeWhale/issues/5035

## 4. 重要 PR 进展

**#5135 [已合并] release: Codewhale v0.9.4 发布列车** — 作者：Hmbown  
v0.9.4 集成列车，77 个提交，包含 2026-08-01 全部候选改动。
https://github.com/Hmbown/CodeWhale/pull/5135

**#5255 [开放] Layer 5.3: 命令调色板、补全与发现过滤** — 作者：aboimpinto  
命令边界重构验证层，确认用户命令在调色板和斜杠补全中的集成表现。
https://github.com/Hmbown/CodeWhale/pull/5255

**#5238 [已合并] feat(mcp): MCP Registry 发现与 Registry-first 工具选择** — 作者：bistack  
模型调用工具前先查询公共 MCP Registry，自动匹配零环境 stdio 服务器。
https://github.com/Hmbown/CodeWhale/pull/5238

**#5242 [已合并] feat(tui/subagent): 从检查点恢复中断的子代理** — 作者：SparkofSpike  
通过 `agents/followup` 恢复 `interrupted_continuable` 子代理，长任务中断后无需重新派发。
https://github.com/Hmbown/CodeWhale/pull/5242

**#5225 [已合并] feat(acp): 暴露 file/search/git/patch/shell 工具** — 作者：rafaelcavalheri  
`session/prompt` 此前只流式传输文本，模型工具调用被忽略。此 PR 补齐完整工具执行能力。
https://github.com/Hmbown/CodeWhale/pull/5225

**#5234 [已合并] fix(tui): 保持 alternate scroll off（修复 #5223）** — 作者：SparkofSpike  
根因是 `recover_terminal_modes()` 同时启用了鼠标捕获与 DECSET 交替滚动模式。
https://github.com/Hmbown/CodeWhale/pull/5234

**#5077 [已合并] perf(prompt): 渐进式披露新上下文** — 作者：Hmbown  
保留 AGENTS.md 优先加载，ambient skills 块限制在 2400 字符，技能正文保持惰性加载。
https://github.com/Hmbown/CodeWhale/pull/5077

**#5240 [已合并] feat(tui/shell): 展示真实等待时长** — 作者：SparkofSpike  
将 Bash wait/delta 的 `duration_ms` 从元数据暴露给模型，避免误判任务状态。
https://github.com/Hmbown/CodeWhale/pull/5240

**#5254 [开放] Build fix for FreeBSD** — 作者：mky  
rquickjs 无 FreeBSD 绑定，需启用 `bindgen` feature 才能编译。
https://github.com/Hmbown/CodeWhale/pull/5254

**#5252 [开放] feat(subagents): 支持嵌入方隔离运行时状态根** — 作者：cacdcaecawae  
新增 `EngineConfig::subagent_state_root`，便于宿主隔离会话持有的代理状态。
https://github.com/Hmbown/CodeWhale/pull/5252

## 5. 功能需求趋势

- **多 Provider / 多 API Key 管理**：按提供商独立保存 Key，避免每次切换都手动更换（#5250）。
- **子代理深度控制与恢复**：关注递归预算边界（#5253）与从检查点恢复中断任务（#5242）。
- **TUI 交互细节打磨**：滚轮路由（#5223）、Workflow 状态移至顶部状态栏（#5040）、turn_meta 显示（#4681）。
- **平台兼容性扩展**：Windows 中文文档（#5229）、FreeBSD 构建（#5254）、macOS 权限修复（#4828）。
- **MCP 生态集成**：Registry 发现与零环境工具选择（#5238）成为新方向。
- **构建性能优化**：分离发行版与本地 release 配置（#5246）、解除 git commit 与全量重建的耦合（#5245）。

## 6. 开发者关注点

- **错误信息透明度**：模型 ID 静默回退（#5244）与 admin 接口假成功（#5178）引发了对错误可见性的质疑。
- **API 兼容性**：Anthropic 400 错误（#4978）仍是使用兼容层用户的痛点。
- **平台特定故障**：macOS 上系统命令被 "underwater" shell 阻断（#4828），影响严重。
- **构建体验**：每次 git commit 都触发 codewhale-tui（68 万行）全量重建（#5245），开发者成本过高。
- **运行时健壮性**：'task' 工具缺失（#5002）与并行 fan-out 掩盖失败（#5035）显示错误处理需要更完善。

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*