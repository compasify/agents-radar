# AI CLI 工具社区动态日报 2026-08-23

> 生成时间: 2026-08-22 23:10 UTC | 覆盖工具: 9 个

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

# AI CLI 工具横向对比分析报告（2026-08-23）

## 1. 生态全景

AI CLI 工具已整体从"能力验证"进入"生产打磨"阶段。各工具的基础对话、工具调用与文件操作能力已趋同，社区关注焦点全面转向可靠性（子代理误报成功、会话恢复失败、后台任务崩溃）、安全性（沙箱逃逸、Hook 失效、变量展开绕过）、成本效率（缓存控制、上下文压缩、token 可见性）与平台补齐（Windows/WSL 成为最大短板）。迭代节奏呈现明显的"双轨制"：Codex、Gemini CLI、Qwen Code 保持高频发布（alpha/nightly），而 Claude Code、Copilot CLI 等成熟工具已进入稳定性维护周期。与此同时，多模型/BYOK、MCP 互通、远程会话与长期记忆等"跨工具可迁移"诉求成为各社区共性议题，生态正在从"单模型绑定"走向"可组合的 agent 基础设施"。

## 2. 各工具活跃度对比

> 数据窗口：2026-08-22 至 2026-08-23（基于各仓库公开 Issue / PR / Discussion / Release 动态）

| 工具 | Issues（24h 更新/精选） | PRs（24h 更新） | Discussions（24h） | Release |
|---|---|---|---|---|
| Claude Code | 10 | 0 | N/A | v2.1.240（维护版） |
| OpenAI Codex | 10 | 4（已关闭） | 10 条 | rust-v0.150.0-alpha.7 / rust-v0.149.0-alpha.7.2 |
| Gemini CLI | 10 | 10 | N/A | v0.56.0-nightly |
| GitHub Copilot CLI | 10（共 11 条活跃） | 0 | N/A | 无 |
| OpenCode | 10 | 10 | N/A | 无 |
| Pi | 10 | 10 | 3 条 | 无 |
| Qwen Code | 10 | 10 | N/A | v0.22.0 正式版 + v0.21.14-nightly |
| CodeWhale | 2 | 7 | N/A | 无（v0.9.11 RC 准备中） |
| DeepSeek Harness | 0 | 0 | 0 | 无（24h 无活动） |

*注：N/A 表示该仓库未提供对应社区渠道数据（如未开放 Discussions）；Codex 的 Discussions 含 Ideas 2、Q&A 4、Show and tell 4。*

## 3. 共同关注的功能方向

### ① 安全沙箱与最小权限执行
- **Gemini CLI**：Seatbelt 沙箱隔离容器运行时 socket（#28935）、变量展开绕过修复（#28902）、扩展环境变量消毒（#28863）。
- **Qwen Code**：可信 agent runtime 提议（#8102）、评审命令执行容器化（#9723）、是否保留调用者身份决策（#9556）。
- **OpenCode**：Agent 沙箱隔离（#2242，71 👍）、per-MCP-server 信任配置（#40125）、权限自动批准分类器（#37564）。
- **Claude Code**：Windows 上 PreToolUse Hook 完全失效（#88896），被视为策略绕过风险；安全过滤器误报持续为高频痛点。

**共性诉求**：从"关键词拦截/审批弹窗"升级为 OS 级沙箱 + 容器化执行 + 确定性授权，且策略需可配置、可豁免、可审计。

### ② 子代理可靠性与行为透明
- **Gemini CLI**：子代理达 MAX_TURNS 仍误报 success（#22323）、通用代理无限挂起（#21409）、不主动使用 skills（#21968）。
- **OpenCode**：子代理最终响应 503 后静默返回空结果，已完成工作被丢弃（#40527）。
- **Claude Code**：模型静默扩展被委派任务（#85254）、将推测性结论当事实写入文档（#77745）。
- **Copilot CLI**：Agent 反复确认但不实际执行工具（#4566）。
- **Qwen Code**：循环检测误杀合法验证周期，无人值守回合无法恢复（#9733）。

**共性诉求**：Agent 需正确报告终止状态、失败可重试、不静默改写用户请求；UI 需保留子代理执行轨迹。

### ③ 长会话 / 后台任务 / 远程会话稳定性
- **Claude Code**：`--bg` 后台会话崩溃循环、完成记录丢失（#75037）。
- **Codex**：turn 挂起/恢复机制（PR #40038）、CLI 远程控制诉求（#27565）。
- **Copilot CLI**：远程会话无法本地恢复（#4514）、`--cloud` 卡死 + 重连崩溃 + 429（#4568）。
- **OpenCode**：会话跨重启永久卡死（#43277）。
- **Qwen Code**：resume 后工具结果丢失（#9573）、长跑一周后 OOM（#9198）。
- **CodeWhale**：子代理审批未走 durable receipt 路径（#5543）、lifecycle outbox + per-session control socket（#5535）。

**共性诉求**：会话状态可持久化、可恢复、可被外部系统监督，无值守场景的可靠性成为硬指标。

### ④ 上下文管理与成本治理
- **Pi**：auto-compaction 在超限后不触发直到 API 报错（#6879，18 👍）、输出上限续跑与回合中压缩（#8464）。
- **Codex**：Bedrock 上 GPT-5.6 Sol 缓存成本失控（#37674）、Fast Speed 切换破坏 prompt cache（#31522）、调用前预算边界（#40148）。
- **OpenCode**：MCP 工具定义全量注入导致 token 虚高，呼吁懒加载（#35376）、分层上下文定价估算错误（#42910）。
- **Qwen Code**：压缩 token 数在横幅中标注为本地估算值（#9568）。
- **Gemini CLI**：Auto Memory 对低信号会话无限重试，浪费 token（#26522）。

**共性诉求**：压缩触发可靠、缓存友好、token 开销可见可预算——成本控制正在成为 agent 工程的核心能力。

### ⑤ MCP 生态从"能用"走向"好用"
- **Copilot CLI**：MCP 初始化遇 `server/discover` 未实现即失败（#4370），握手协议不够宽容。
- **Codex**：MCP 运行时连接状态上报（#40068）、缺少工具结果导致整个应用崩溃（#32653）、`mcp install` 不支持 `--header`（#30870）。
- **OpenCode**：per-MCP-server 证书指纹固定（#40125）、工具定义懒加载（#35376）。
- **Gemini CLI**：MCP 扩展安装环境变量需征得同意并消毒（#28863）。
- **Claude Code**：多 Connector 账户支持（#27302，357 👍）——账户身份切换成为 MCP/Connector 生态的顶层诉求。

### ⑥ Windows / WSL 平台补齐
- **Claude Code**：PreToolUse Hook 失效（#88896）、CoworkVMService 崩溃不自愈（#88600）。
- **Codex**：WSL 路径规范化问题（#20730）、Windows 打开线程导致登出（#39189）。
- **Copilot CLI**：自动更新后残留 `copilot.exe.old` 孤儿进程占满 CPU（#4111）。
- **Pi**：ConPTY 光标漂移（#8484，已修复）、Kitty 键盘协议双端 bug（#7130/#8442）、维护者发起 Windows 使用调研（#7547）。
- **Qwen Code**：Windows/macOS CI 通道修复（#9728）。

**共性诉求**：Hook 执行、进程管理、终端渲染、路径处理在 Windows 上需与 macOS 对齐。

### ⑦ 多模型 / BYOK / 身份灵活性
- **Copilot CLI**：单会话内 `/model` 切换 BYOK/本地 provider（#3709，27 👍）、多 BYOK 模型（#3282，26 👍）。
- **Codex**：Plan 与 Execute 使用不同模型（#10628）。
- **Pi**：MindsHub 聚合网关（#8489+PR #8488）、Parasail provider（#8450）、DeepSeek V4 Flash Vision（#8469）。
- **Claude Code**：同一 Connector 绑定多账户（#27302）。
- **OpenCode**：Copilot 学生计划 provider 无法识别（#34644，17 👍）。

### ⑧ 长期记忆与跨会话上下文
- **Codex**：官方成员发起 Memories in Codex 讨论，记忆来源可见性是核心议题（#12567，14 👍）。
- **Gemini CLI**：Auto Memory 缺陷集中爆发——低信号重试（#26522）、无效补丁静默跳过、日志泄漏风险（#26525）。
- **Claude Code**：多 Connector/多账户身份上下文隔离。

## 4. 差异化定位分析

| 工具 | 定位 | 目标用户 | 差异化特征 |
|---|---|---|---|
| **Claude Code** | 企业级 autonomous agent | 需深度定制与政策管控的团队 | Hook/权限体系最完善；CLI+Web 双端 + Connector 生态；迭代稳健（纯维护版），稳定性优先 |
| **OpenAI Codex** | ChatGPT 生态内的全能开发助手 | 深度绑定 OpenAI 平台的开发者 | Rust 内核重写中；桌面 App + Computer Use；turn 挂起/恢复等会话原语创新；迭代最快 |
| **Gemini CLI** | 安全敏感场景的 agentic shell | GCP/Google 生态、安全要求高的用户 | Seatbelt 沙箱持续加固；bash 亲和力；Auto Memory；nightly 高频更新，安全 PR 密度最高 |
| **GitHub Copilot CLI** | GitHub 企业工作流的延伸 | GitHub Enterprise/Pro 用户 | 企业策略鉴权 + Cloud 会话 + BYOK；迭代最慢但企业可用性高；社区话语权受限 |
| **OpenCode** | 开源多 provider 通用 agent 终端 | 规避厂商锁定的开发者 | provider 无关（含 Copilot OAuth）；提示词/插件可定制性强；社区驱动，广度优于深度 |
| **Pi** | 终端极客向的轻量 agent 网关 | 重视 TUI 体验与可扩展性的效率爱好者 | 多 provider 聚合 + 扩展包生态；终端协议打磨细致（Kitty/ConPTY）；Windows 支持是明确短板 |
| **Qwen Code** | 代码评审与安全执行导向 | Qwen 模型用户、重视 review 自动化的团队 | Review 收敛治理差异化明显；评审执行容器化；工程纪律最强（CI 修复、依赖审计、模块边界治理） |
| **CodeWhale** | 可监督的长时运行 agent 基础设施 | 将 agent 嵌入自动化运维体系的早期采用者 | lifecycle outbox、per-session control socket、durable 审批等机器可读监督原语；规模小但架构意图清晰 |

## 5. 社区热度与成熟度

**第一梯队（高热度 + 高成熟度）**
- **Claude Code**：头部 Issue 达 357 👍，多账户诉求持续 6 个月未关闭；10 个精选 Issue 覆盖回归、Hook、后台任务等"规模化使用后的痛点"，社区成熟度最高。
- **OpenAI Codex**：394 👍 的 macOS 桌面性能问题成为全行业最高热度单点；10 条 Discussions + 双 alpha 发布，处于"高速扩张 vs 稳定性欠账"阶段。

**第二梯队（快速迭代，社区活跃）**
- **Gemini CLI**：安全 PR 密集合入，但子代理误报/挂起与 Auto Memory 缺陷并存，呈现"安全设计强、agent 行为弱"的不平衡。
- **OpenCode**：127 👍 自定义提示词、71 👍 沙箱诉求；Issue/PR 双双活跃，社区诉求面广，但会话稳定性和流式中断问题多发。
- **Qwen Code**：正式版发布 + 10 个 PR 密集推进；Review 自动化与容器化执行构成差异化，工程治理意识在同类工具中最强。
- **Pi**：10 Issue + 10 PR，扩展生态与 Windows 支持双线推进；上下文管理（auto-compaction）是当前最集中的 bug 领域。

**第三梯队（企业约束型 / 稳定型）**
- **Copilot CLI**：仅 11 条活跃 Issue、无 PR、无 Release；头部诉求 27 👍 显著低于其他工具。功能克制、发布谨慎，企业可用性高但社区演进速度慢。

**第四梯队（微型 / 专项）**
- **CodeWhale**：2 Issue / 7 PR，EPIC 驱动的结构化开发但社区规模小，处于早期采用者阶段。
- **DeepSeek Harness**：24h 无活动，暂无可观测的社区输出。

## 6. 值得关注的趋势信号

**① 安全执行边界成为 Agent 基础设施的默认要求**
从 Gemini 的 Seatbelt 容器隔离、Qwen 的评审命令容器化，到 OpenCode 的 OS 级沙箱呼吁与 Claude Code 的 Hook 失效恐慌——安全已从"权限确认框"演进为 OS 级隔离 + 确定性授权。开发者在自建 agent 时应默认沙箱与可审计执行，而非事后补丁。

**② Agent 可信度是下一轮竞争高地**
"子代理误报成功""静默扩展任务""推断当事实写入文档""只确认不执行"——多个工具出现同一类行为可信度问题。用户对 Agent 言行一致性的信任，正在取代"模型能否写代码"成为采用决策的关键变量；可观测性（执行轨迹保留、lifecycle 事件、失败语义）将成为标配。

**③ Windows 从"可运行"到"一等公民"的补课潮**
Claude Code 的 Hook 失效、Pi 的 ConPTY 漂移、Copilot 的孤儿进程、Codex 的 WSL 路径问题——几乎所有工具的 Windows 栈都存在系统性欠账。随着企业桌面端渗透率上升，Windows 支持质量将直接左右企业采购决策，这一维度或成为下一阶段的差异化战场。

**④ 上下文与成本治理走向精细化、可编程**
从 Pi 的 auto-compaction 修复、Codex 的缓存成本控制、OpenCode 的 MCP 懒加载，到"调用前 token 预算边界"（Codex #40148）这类实践——token 正被当作可观测、可预算、可编程的工程资源管理。成本可见性将逐渐成为 agent 平台的必备能力，而非可选项。

**⑤ 会话从"一次性交互"演进为"可迁移的持久化工作单元"**
Codex 的 turn 挂起/恢复、Claude Code 的后台会话、Copilot 的远程会话恢复、CodeWhale 的 per-session control socket——会话正在获得跨进程迁移、跨设备恢复、外部系统监督等基础设施能力。Agent 正从"工具"变为"常驻服务"，这将深刻影响任务编排与自动化架构的设计方式。

**⑥ 模型中立与 BYOK 是社区共识，但落地受生态绑定拖累**
Copilot CLI 无法在 TUI 内切换 BYOK 模型、Codex 缺少 Plan/Execute 分模型、Claude Code 的多账户诉求久未落地——用户的"模型自由"诉求与厂商生态锁定之间的张力将持续存在。聚合网关（MindsHub 等）与标准化协议（MCP/ACP）将是缓解这一矛盾的关键基础设施，值得开发者提前布局。

**⑦ MCP 进入"标准化后的运维期"**
握手协议兼容（`server/discover` 可选方法）、运行时状态上报、按 server 信任配置、工具定义懒加载——MCP 已从"能不能连"演进到"好不好运维"。这一阶段的基础设施完善度（错误语义、安全信任模型、性能开销）将决定 MCP 能否真正成为 agent 工具调用的通用标准。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（截至 2026-08-23）

> 说明：本次样本内所有热门 PR 均为 **Open** 状态，暂无 merged/draft。排序依据为仓库按评论数给出的热度序列。

---

## 1. 热门 Skills 排行

**① skill-creator 评估链路修复（[PR #1298](https://github.com/anthropics/skills/pull/1298)）· Open**
功能：修复 `run_eval.py` 恒定报 `recall=0%` 的严重缺陷（#556 已被 10+ 用户独立复现），并修复 Windows 流读取、触发检测与并行 worker。
热点：skill-creator 是社区创建/优化 Skill 的核心工具，其评测信号失真意味着整个优化循环在"噪声"上运行，属于工具链基础性修复，与 [Issue #556](https://github.com/anthropics/skills/issues/556)（12 评论、👍7）直接呼应。

**② document-typography 排版质检 Skill（[PR #514](https://github.com/anthropics/skills/pull/514)）· Open**
功能：对 AI 生成文档做排版质量控制——孤字换行（1-6 词溢到下一行）、孤立标题（页底悬空）、编号错位等。
热点：社区普遍认可"每个 Claude 生成的文档都会踩这些坑"，解决的是通用性高频痛点。

**③ ODT 文档 Skill（[PR #486](https://github.com/anthropics/skills/pull/486)）· Open**
功能：支持 OpenDocument 格式（.odt/.ods）的创建、模板填充、读取及 ODT→HTML 转换。
热点：补上了文档类 Skill 在开源/ISO 标准格式上的空白，与现有 docx/pdf 形成生态互补。

**④ frontend-design Skill 重构（[PR #210](https://github.com/anthropics/skills/pull/210)）· Open**
功能：重写前端设计 Skill，保证每条指令在单次对话中可执行、可落地。
热点：讨论聚焦"Skill 指令的可操作性"——社区希望 Skill 更像操作手册而非概念文档（与 [Issue #202](https://github.com/anthropics/skills/issues/202) 对 skill-creator 的批评同源）。

**⑤ skill-quality-analyzer + skill-security-analyzer 元 Skill（[PR #83](https://github.com/anthropics/skills/pull/83)）· Open**
功能：质量分析器从结构/文档/示例等五维评估 Skill；安全分析器面向 Skill 的信任边界审查。
热点：与 [Issue #492](https://github.com/anthropics/skills/issues/492)（43 评论，样本最高）的安全关切高度同频，是社区对"Skill 可信度"诉求的直接产物。

**⑥ testing-patterns 测试模式 Skill（[PR #723](https://github.com/anthropics/skills/pull/723)）· Open**
功能：覆盖 Testing Trophy 模型、单元测试 AAA 模式、React Testing Library、驱动测试哲学等全栈测试方法论。
热点：测试生成/测试指导是社区长期高频需求方向。

**⑦ ServiceNow 平台 Skill（[PR #568](https://github.com/anthropics/skills/pull/568)）· Open**
功能：面向 ServiceNow 全平台的助手，覆盖 ITSM/ITOM/ITAM/SecOps/FSM/CSDM/IntegrationHub 等企业场景。
热点：样本中更新最活跃的企业级 Skill（更新至 08-12），讨论集中在企业平台广度与维护成本间的平衡。

**⑧ self-audit 自我审计 Skill（[PR #1367](https://github.com/anthropics/skills/pull/1367)）· Open**
功能：交付前先做"机械式文件校验"，再按损害严重度做四维推理审计（v1.3.0），定位跨项目/跨模型通用。
热点：代表"交付质量门禁"方向，与 [Issue #1385](https://github.com/anthropics/skills/issues/1385) 的 Reasoning Quality Gate 提案形成管线构想。

> 补充关注：[PR #525](https://github.com/anthropics/skills/pull/525) pyxel 复古游戏开发 Skill，是"Skill + MCP Server"组合模式的典型案例。

---

## 2. 社区需求趋势（来自 Issues）

- **安全与信任治理（最强烈）**：[Issue #492](https://github.com/anthropics/skills/issues/492)（43 评论）指出社区 Skill 打着 `anthropic/` 命名空间分发，形成信任边界漏洞——用户可能误将社区 Skill 当作官方 Skill 授予高权限。
- **组织级共享与分发**：[Issue #228](https://github.com/anthropics/skills/issues/228)（16 评论、👍8）呼吁 Claude.ai 支持组织内 Skill 库与直接分享链接，终结"下载 .skill → Slack 传 → 手动上传"的原始流程。
- **Skill 可靠性工程**：[Issue #556](https://github.com/anthropics/skills/issues/556)（12 评论、👍7）评测工具 0% 触发率；[Issue #62](https://github.com/anthropics/skills/issues/62) Skill 文件无故消失；[Issue #189](https://github.com/anthropics/skills/issues/189)（👍9）document-skills 与 example-skills 插件内容重复、浪费上下文。
- **上下文与记忆效率**：[Issue #1329](https://github.com/anthropics/skills/issues/1329) 提议 compact-memory 符号化记忆 Skill；[Issue #1487](https://github.com/anthropics/skills/issues/1487) 报告 claude-api Skill 单次注入约 156k tokens 撑爆上下文。
- **集成与互操作**：[Issue #16](https://github.com/anthropics/skills/issues/16) 建议将 Skills 暴露为 MCP 协议；[Issue #29](https://github.com/anthropics/skills/issues/29) 询问 AWS Bedrock 支持路径。

---

## 3. 高潜力待合并 Skills

以下 PR 问题清晰、讨论活跃、目标明确，近期落地概率较高：

- **[PR #1298](https://github.com/anthropics/skills/pull/1298)** — skill-creator 0% recall 修复：直击 #556 核心 bug，多个独立复现，是工具链最急需的修复。
- **[PR #514](https://github.com/anthropics/skills/pull/514)** — document-typography：无新依赖、普适性强，解决所有 AI 文档的通病。
- **[PR #723](https://github.com/anthropics/skills/pull/723)** — testing-patterns：主流测试栈全覆盖，属于社区长期高频需求。
- **[PR #1367](https://github.com/anthropics/skills/pull/1367)** — self-audit：交付质量门禁，作者持续迭代且有后续提案支撑。
- **[PR #1050](https://github.com/anthropics/skills/pull/1050) / [PR #1099](https://github.com/anthropics/skills/pull/1099)** — skill-creator Windows 兼容修复：1 行级修复，解除 Windows 用户使用阻塞。
- **[PR #83](https://github.com/anthropics/skills/pull/83)** — skill-quality-analyzer：直接回应 #492 的安全治理诉求。

---

## 4. Skills 生态洞察

**当前社区对 Skills 最集中的诉求是"可信与可用"：既要修复 skill-creator 评测工具链的可靠性（0% recall、Windows 崩溃等问题反复出现），也要治理 `anthropic/` 命名空间下的信任边界风险，并补齐组织级共享分发能力——推动 Skill 从个人实验走向企业级生产。**

---

# Claude Code 社区动态日报 · 2026-08-23

## 📌 今日速览

- anthropics/claude-code 发布维护版 **v2.1.240**，仅包含 Bug 修复与可靠性改进，未引入新功能。
- 社区最热 Issue 依然是 **多 Connector 账户支持请求（#27302）**，已累计 357 👍 与 234 条评论，讨论持续升温。
- 新增平台稳定性问题：Windows 上 `PreToolUse` Hook 失效（v2.1.240）、CoworkVMService 崩溃不自愈，以及 2.1.238 引入的 thinking 块回归 Bug。

---

## 🚀 版本发布

### v2.1.240
- 内容：Bug fixes and reliability improvements
- 说明：仅面向稳定性的一次小版本维护，未包含新特性或功能改动。
- 链接：https://github.com/anthropics/claude-code/releases

---

## 🔥 社区热点 Issues

### 1. [Feature] 支持同一 Connector 绑定多个账户（Claude Code Web）
- **状态**：Open | **作者**：nathanmargaglio | **创建**：2026-02-21 | **更新**：2026-08-22
- **热度**：💬 234 评论 | 👍 357
- **重要性**：当前社区呼声最高的功能请求，用户需要在 claude.ai/code 上使用同一个 Connector 的不同账户身份，持续近 6 个月仍高度活跃。
- 链接：https://github.com/anthropics/claude-code/issues/27302

### 2. [Bug] macOS 后台 agent 会话：快速终止、Worker 崩溃循环、任务记录丢失
- **状态**：Open | **作者**：eric-distyl-ai | **更新**：2026-08-22
- **热度**：💬 9 评论
- **重要性**：涉及 `claude --bg` / `/bg` 调度的长时后台任务，在 reattach 时出现崩溃循环，且完成记录丢失，严重冲击批处理/自动化工作流。
- 链接：https://github.com/anthropics/claude-code/issues/75037

### 3. [Bug] 2.1.238 回归：交互式 CLI 会话的 thinking 块只存签名空壳
- **状态**：Open | **作者**：jaidhyani | **更新**：2026-08-22
- **热度**：💬 3 评论 | 👍 1
- **重要性**：继 #87947 之后，`entrypoint: "cli"` 的交互会话也出现 `thinking: ""` 的签名壳问题，需要排查是否影响回放/恢复功能。
- 链接：https://github.com/anthropics/claude-code/issues/88383

### 4. [Bug] Windows：CoworkVMService 配置 SCM 恢复操作失败（Access denied）
- **状态**：Open | **作者**：rdbhaxor007 | **更新**：2026-08-22
- **热度**：💬 2 评论
- **重要性**：服务崩溃后无法自动恢复，需要用户手动从任务管理器杀进程并修复，且应用不自愈，影响 Windows 桌面端稳定性。
- 链接：https://github.com/anthropics/claude-code/issues/88600

### 5. [Bug] Windows：PreToolUse Hooks 完全不触发（v2.1.240）
- **状态**：Open | **作者**：hnoerenberg | **更新**：2026-08-22
- **热度**：💬 1 评论
- **重要性**：最新版本上 `PreToolUse` 钩子静默失效，所有工具调用都不受 Hook 控制，而 `SessionStart`、`Stop` 等钩子正常，安全与自动化策略形同虚设。
- 链接：https://github.com/anthropics/claude-code/issues/88896

### 6. [Enhancement] 自动更新提示横幅与整体 UI 风格不协调
- **状态**：Open | **作者**：rtack | **更新**：2026-08-22
- **热度**：💬 1 评论
- **重要性**：CLI 界面刻意保持低彩色调，但“Update installed”横幅使用高亮颜色打断沉浸感，属于社区对 UI 细节的精细打磨诉求。
- 链接：https://github.com/anthropics/claude-code/issues/88858

### 7. [Bug] 英文回复中混入中文字符
- **状态**：Open | **作者**：Lueken | **更新**：2026-08-22
- **热度**：💬 2 评论
- **重要性**：非代码上下文出现“The debugging路 found…”这类输出污染，疑似 tokenizer 或渲染层缺陷，虽零散但影响观感与可用性。
- 链接：https://github.com/anthropics/claude-code/issues/80053

### 8. [Bug] 模型将未经验证的因果解释断言为事实并写入项目记录
- **状态**：Open | **作者**：jmylot | **更新**：2026-08-22
- **热度**：💬 1 评论 | 👍 1
- **重要性**：模型在单次会话内 5 次以上将推测性结论写入永久性项目文档，对长期维护构成信息污染风险，值得关注。
- 链接：https://github.com/anthropics/claude-code/issues/77745

### 9. [Bug] 模型静默扩展被委派任务，挤占请求的交付物
- **状态**：Open | **作者**：claell | **更新**：2026-08-22
- **热度**：💬 1 评论
- **重要性**：模型把“做 X”擅自扩展成“做 X + Y + Z”，且未告知用户，导致交付范围偏移。系 claell 提交的系列模型行为问题之一。
- 链接：https://github.com/anthropics/claude-code/issues/85254

### 10. [Bug] Commit 信息硬编码“Claude Opus 4.7 (1M context)”模型署名
- **状态**：Closed（stale）| **作者**：patrickadamsprofessional | **更新**：2026-08-22
- **热度**：💬 2 评论 | 👍 1
- **重要性**：切换 `/model` 后提交署名仍旧写 Opus 4.7，暴露出系统提示硬编码问题。虽然已 stale 关闭，但 git 协作场景下的元数据准确性仍值得关注。
- 链接：https://github.com/anthropics/claude-code/issues/66506

---

## 🛠️ 重要 PR 进展

过去 24 小时内没有 Pull Request 更新（共 0 条）。

---

## 📈 功能需求趋势

### 1. 多账户 / 多身份认证支持
- 代表：#27302（同一 Connector 绑定多个账户）。
- 社区对账户身份切换能力的需求非常强烈，且在 Web 端与 CLI 端均有诉求。

### 2. 安全过滤精细化与豁免机制
- 多起误报相关 Issue（#61646、#67622、#72909、#73409、#73432、#73439、#73470）：BJJ 教学博客、排序算法学术研究、生物类比术语的机器人项目等均被安全策略误伤。
- 用户普遍希望获得“上下文感知”的安全判定，而不是简单地按关键词拦截。

### 3. 后台任务 / 长时运行稳定性
- 代表：#75037（后台 agent 崩溃循环、完成记录丢失）。
- 社区正在把 Claude Code 嵌入自动化流水线，对无值守场景的可靠性和会话恢复提出了更高要求。

### 4. Windows 平台补齐
- 代表：#88896（PreToolUse 失效）、#88600（服务自愈）、#72899（会话索引失败）。
- Windows 上的 Hook 执行、服务管理与索引能力是当前最突出的短板。

### 5. 模型输出可信度与行为约束
- claell 提交系列问题（#85253~#85256）：模型把推断当事实、静默省略请求内容、私密思考泄漏到公开文本。
- 社区对 Agent 行为透明度和事实性输出越来越敏感。

### 6. UI/UX 细节打磨
- 代表：#88858（更新横幅样式）。
- 说明核心功能稳定后，社区注意力开始转向视觉与交互的一致性。

---

## 💬 开发者关注点

### 1. 安全过滤器误报仍是最大高频痛点
大量非恶意工程场景（教学、学术、渗透测试、生物术语）被安全策略拦截，开发者普遍反馈“难以理解判定逻辑”，且部分用户被迫切换到其他模型。

### 2. Windows 平台 Hook 与进程管理可靠性
`PreToolUse` 整体失效是严重的策略绕过风险；CoworkVMService 崩溃后无法自愈也影响桌面端恢复体验。Windows 用户希望尽快获得修复。

### 3. 模型行为的一致性与事实性
多起报告指向同一问题：模型在自主执行中混淆“推断”与“事实”，并将未经验证的结论写入持久化记录，且不主动告知用户任务被改写或省略。

### 4. 版本回归风险
2.1.238 导致的 thinking 块存储问题（#88383）未被 2.1.240 修复说明中明确提及，用户担忧小版本维护是否完全覆盖了已知回归。

### 5. 后台自动化的可观测性
`claude --bg` 场景下任务完成记录丢失、崩溃循环未恢复，说明 Agent 后台模式还缺少完善的健康检查与持久化保障，是自动化重度用户的核心顾虑。

---

*数据来源：github.com/anthropics/claude-code（截至 2026-08-22）*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-08-23

## 今日速览

过去 24 小时内 Codex 发布了两个 Rust 预发布版本，但社区焦点集中在 macOS Desktop 反复触发 `syspolicyd` / `trustd` 进程资源失控（#25719，394 👍）、以及 Computer Use 后台 worker 导致 V8 OOM 崩溃（#38455）等稳定性问题上。PR 侧则主要围绕 MCP 运行时状态上报、未完成 turn 挂起机制和 Guardian 分类器元数据展开。

---

## 版本发布

| 版本 | 说明 |
|---|---|
| **rust-v0.150.0-alpha.7** | Release 0.150.0-alpha.7，无详细变更说明 |
| **rust-v0.149.0-alpha.7.2** | Release 0.149.0-alpha.7.2，无详细变更说明 |

两个版本均为 Rust 内核的 alpha 增量发布，未附带公开的变更日志。建议关注 0.150.0-alpha 系列的后续稳定版发布说明。

---

## 社区热点 Issues

以下按关注度与影响面选取 10 个最具代表性的 Issue：

### 1. macOS Desktop 反复触发 `syspolicyd` / `trustd` CPU 与内存失控
**#25719** · 85 评论 · 394 👍 · [链接](https://github.com/openai/codex/issues/25719)  
当前社区最热的 Issue。Codex Desktop for macOS（26.527.60818 / build 3437）会持续触发系统安全进程 `syspolicyd` 与 `trustd`，导致 CPU 和内存被占满。Plus 订阅用户报告复现稳定，影响范围广，已持续近三个月仍未修复，社区耐心正在消耗。

### 2. ChatGPT Desktop 反复派生 Computer Use workers，V8 OOM 崩溃
**#38455** · 36 评论 · 15 👍 · [链接](https://github.com/openai/codex/issues/38455)  
macOS 15.7.7、32GB 内存的机器上，应用启动 98 秒后即崩溃，SIGABRT 来自 `node::OOMErrorHandler`。崩溃时 316 个线程中有 187 个名为 `computer-use`，说明后台 worker 失控。用户称 26.730.61639 之前的版本正常。

### 3. WSL 环境下自定义 Pets 无法加载
**#20730** · 23 评论 · 28 👍 · [链接](https://github.com/openai/codex/issues/20730)  
Windows + WSL 下路径规范化导致自定义宠物目录无法被正确解析。虽非核心功能，但作为社区热梗，Pets 相关问题的曝光度长期较高。

### 4. Windows 上打开已有线程会登出个人 Pro 账号
**#39189** · 17 评论 · 4 👍 · [链接](https://github.com/openai/codex/issues/39189)  
Windows 版 26.814.5167.0：打开既有线程时触发 workspace-only 设置 401，随后个人 Pro 账号被登出。认证与会话状态的相互干扰问题在近期频繁出现。

### 5. WebSearch 收到 Cloudflare managed-challenge 403
**#29197** · 15 评论 · [链接](https://github.com/openai/codex/issues/29197)  
Windows 端请求 `/backend-api/codex/alpha/search` 返回 403 + Cloudflare 质询页，WebSearch 功能不可用。类似问题已在多个 Windows 版本上反复出现。

### 6. Windows Pet 覆盖层点击区域与可见宠物漂移
**#34227** · 14 评论 · [链接](https://github.com/openai/codex/issues/34227)  
桌面宠物可见位置与 hit region 随时间推移逐渐失同步。属于渲染层与交互层坐标系不同步的 bug，Windows 桌面端用户反馈较多。

### 7. Bedrock 上 GPT-5.6 Sol 缺少显式缓存控制，产生高 cache-write 成本
**#37674** · 13 评论 · 12 👍 · 已关闭 · [链接](https://github.com/openai/codex/issues/37674)  
CLI 对 Amazon Bedrock 的请求无法启用 GPT-5.6 Sol 显式 prompt caching，agentic 编码负载下产生大量 cache-write token，成本显著升高。已关闭，但与 #35300 同源，说明官方已知晓。

### 8. 希望获得 Claude Code 式远程控制能力
**#27565** · 12 评论 · 15 👍 · [链接](https://github.com/openai/codex/issues/27565)  
用户希望 CLI 支持 `/remote-control` 式的手机远程会话同步，避免 SSH 隧道，跨设备同步消息。这是当前功能需求方向中呼声较高的一个。

### 9. 订阅 Plus 后周用量重置日期意外改变
**#30816** · 11 评论 · [链接](https://github.com/openai/codex/issues/30816)  
用户升级到 ChatGPT Plus 后，Codex App 中的每周用量重置日期发生非预期变化。用量透明性问题持续引发不满。

### 10. MCP 工具调用结果缺失导致整个应用崩溃
**#32653** · 11 评论 · [链接](https://github.com/openai/codex/issues/32653)  
Windows 11 上 Codex Desktop 因缺少 tool call result 而崩溃，错误信息截断在“which stops…”处。MCP 相关崩溃在 Windows 端出现频率较高。

---

## 重要 PR 进展

过去 24 小时内共有 4 条 PR 更新，全部来自 `copyberry[bot]`，均处于已关闭状态：

### 1. 为 Guardian 分类器请求使用线程来源元数据
**#40150** · [链接](https://github.com/openai/codex/pull/40150)  
在 turn 元数据中标记 `thread_source: guardian_classifier`，移除 classifier 专用的 `request_kind` 和 `is_guardian_mode` 字段，并更新了 sampler 与扩展测试。属于内部架构清理。

### 2. 上报运行时 MCP 连接状态
**#40068** · [链接](https://github.com/openai/codex/pull/40068)  
MCP inventory 可能与线程实际连接状态不同步，仅凭 tool availability 无法反映真实运行时状态。本 PR 为 `mcpServerStatus/list` 新增可空的 `runtimeStatus` 字段，用于 thread-scoped MCP 服务器状态上报。

### 3. 添加未完成根 turn 的挂起机制
**#40038** · [链接](https://github.com/openai/codex/pull/40038)  
新增 `CodexThread::suspend_turn_and_shutdown` 与 `SuspendTurnOutcome`。允许在不标记 turn 为完成或中止的情况下停止活动根 turn，供另一个运行时恢复同一 turn ID——这为跨进程会话恢复与迁移铺路。

### 4. 保留严格 MCP 自动审查结果
**#40031** · [链接](https://github.com/openai/codex/pull/40031)  
将严格 MCP auto-review 中的拒因、超时和中止响应以规范形式传播，而不是换成通用“decline”。保留审查者的决策与元数据，同时仍然 fail closed。

---

## 热门 Discussions

### 💡 Ideas

#### Memories in Codex —— 社区最热功能讨论
**#12567** · 34 评论 · 14 👍 · [链接](https://github.com/openai/codex/discussions/12567)  
官方成员 `jif-oai` 正在为 Codex 添加长期记忆能力，询问社区：模型引用历史线程时，应在多大程度上明示来源？用户对“记忆可见性”的诉求非常强烈。

#### Plan 与 Execute 使用不同模型
**#10628** · 4 评论 · 11 👍 · [链接](https://github.com/openai/codex/discussions/10628)  
用户希望 Plan 模式使用 gpt-5.2（高推理）做架构决策，Execute 阶段使用更快模型执行。当前 Codex 缺少 Plan/Execute 分离的模型配置。

### ❓ Q&A

#### MCP install 不支持 `--header` 参数
**#30870** · [链接](https://github.com/openai/codex/discussions/30870)  
用户质疑为何 `mcp install` 不能像 Claude CLI 一样直接传入自定义 Header，而必须手工编辑 TOML。企业内网认证场景下 onboarding 成本偏高。

#### Arch Linux 包更新滞后
**#38007** · [链接](https://github.com/openai/codex/discussions/38007)  
extra 仓库中的 codex 包在新版发布数天后仍未更新，用户希望了解更新机制是否为自动化。

#### 切换 Fast Speed 是否会失效 prompt cache
**#31522** · [链接](https://github.com/openai/codex/discussions/31522)  
用户在使用 mattpocock/skills 时，频繁切换 Fast Speed 开关，怀疑会反复破坏 prompt cache，导致成本上升和响应变慢。

#### Chat 与 Work 在同一 Project 内如何共享上下文
**#33943** · [链接](https://github.com/openai/codex/discussions/33943)  
统一桌面 App 将 Chat 与 Work 放进同一 Project，但两者之间不共享任务可见性与工作上下文。用户期望从 Work 任务“Continue in Chat”时能继承工程上下文。

### 🛠 Show and tell

#### TokenGauge Workbench：九个提供商的 LLM API 成本比较
**#38815** · [链接](https://github.com/openai/codex/discussions/38815)  
使用 Codex 作为实施与运维 agent 构建的成本比较工具，强调“最低单价不等于最低总成本”，需做质量调整后的成本评估。

#### 为每个 agent 会话分配一个 ASCII 生物
**#40034** · [链接](https://github.com/openai/codex/discussions/40034)  
Go 小工具，让多个并行终端会话各有一个独立的 ASCII 生物，便于区分不同 git worktree 中的 Codex 会话。

#### Campfire：长时 Codex 会话的 SMS 桥梁
**#40003** · [链接](https://github.com/openai/codex/discussions/40003)  
通过 Twilio + 签名验证 webhook + MCP bridge，让手机短信与本地 Codex 会话双向通信。agent 保留本地工具、文件、上下文与审批流。

#### 在超预算模型调用之前停止自主 agent
**#40148** · [链接](https://github.com/openai/codex/discussions/40148)  
作者用 Codex 实现了一个“调用前 token 预算边界”，避免 agent 循环中单个大请求突破成本上限，并发布了实践指南。成本控制是 agent 工程的核心痛点。

---

## 功能需求趋势

从 Issue 与 Discussion 中可提炼出以下社区关注方向：

| 方向 | 代表条目 | 热度 |
|---|---|---|
| **会话迁移与远程控制** | #27565（CLI 远程控制）、#40055（CLI↔Desktop 会话转移）、#40038（turn 挂起机制） | 高 |
| **长期记忆与上下文复用** | #12567（Memories in Codex）、#33943（Chat/Work 共享上下文） | 高 |
| **缓存与成本控制** | #35300（prompt_cache_breakpoint）、#37674（Bedrock 缓存）、#31522（Fast Speed 与缓存）、#40148（预算边界） | 高 |
| **MCP 可配置与可观测性** | #30870（--header）、#40068（运行时连接状态）、#40031（自动审查结果） | 中 |
| **模型路由灵活性** | #10628（Plan vs Execute 模型分离） | 中 |
| **用量与配额透明度** | #30816（重置日期变化）、#32707（5 小时桶消失）、#40053（reset 事件追踪） | 中 |
| **Windows/WSL 兼容性** | #20730、#40100、#34928、#39933 等十余条 Windows 相关 Issue | 高（长期） |

---

## 开发者关注点

- **macOS 桌面端性能问题最突出**：#25719 的 `syspolicyd`/`trustd` 资源失控持续两个月未修复，394 个 👍 表明大量用户受影响；#38455 的 Computer Use worker 泄漏则揭示了后台任务管理的系统性问题。
- **认证与会话状态互相污染**：#39189（打开线程导致登出）、#39803（重复登录屏）、#40151（恢复时缺失 transcript 区间）——Desktop/CLI 的会话状态机仍有不少边界 bug。
- **Windows 沙箱与路径问题依然高频**：WSL 路径规范化、sandbox-setup 0xc0000142、IDE 扩展 helper_unknown_error 等，Windows + WSL2 组合是问题重灾区。
- **成本可见性是 agent 工程的硬需求**：从 GPT-5.6 Sol 的缓存成本到预算边界控制，开发者正在积极寻找防止“失控调用”的方案。
- **MCP 生态快速扩张但稳定性不足**：MCP 相关崩溃（#32653）、配置入口缺失（#30870）、运行时状态不透明（#40068）等，说明 MCP 集成正在从“能用”走向“好用”。

---

*数据来源：[github.com/openai/codex](https://github.com/openai/codex)  Issues / PRs / Discussions 过去 24 小时更新数据。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-08-23

## 1. 今日速览

今日社区的核心焦点集中在三方面：**安全加固**（macOS Seatbelt 沙箱绕过修复已进入最新 nightly，另有变量展开绕过、扩展环境变量注入等多项安全 PR 在推进）、**子代理可靠性**（误报成功、挂起、不主动使用 skills 等老问题持续发酵）、**Auto Memory 记忆系统的缺陷**（低信号会话无限重试、无效补丁静默跳过、日志泄漏风险）。新发布的 v0.56.0-nightly 为 macOS 用户修复了 Docker/容器运行时 socket 未隔离的安全隐患。

---

## 2. 版本发布

### v0.56.0-nightly.20260822.g5411f113c
- **核心修复**：macOS Seatbelt 沙箱现已隔离 Docker 与容器运行时的 UNIX domain socket、CLI 二进制文件、Mach/XPC 服务查找及 POSIX 共享内存，防止通过容器虚拟机文件系统挂载（如 Docker Desktop VirtioFS）实现沙箱逃逸。
- **贡献者**：感谢 @josebalius 的首次贡献（PR #28935）。
- 链接：https://github.com/google-gemini/gemini-cli/releases

---

## 3. 社区热点 Issues（Top 10）

### 🐛 子代理可靠性：误报成功与挂起

1. **Subagent 达到 MAX_TURNS 后被误报为 GOAL 成功**（#22323）
   - P1 / Bug / 13 条评论 / 2 👍
   - `codebase_investigator` 子代理在分析前就已触达最大轮次限制，却向主代理报告 `status: success` 和 `Termination Reason: GOAL`，掩盖了中断事实。
   - 影响：用户会得到一份"成功"但实际未完成的调查报告，造成隐蔽的错误结果。
   - https://github.com/google-gemini/gemini-cli/issues/22323

2. **通用代理（Generalist agent）无限挂起**（#21409）
   - P1 / Bug / 8 条评论 / 8 👍
   - 一旦 Gemini CLI 委派给通用代理执行简单任务（如创建文件夹），代理会永久挂起，用户最长等待 1 小时无响应；显式禁止使用子代理可规避。
   - 8 个 👍 表明大量用户遭遇同类问题。
   - https://github.com/google-gemini/gemini-cli/issues/21409

3. **Gemini 不主动使用 skills 和子代理**（#21968）
   - P2 / Bug / 6 条评论
   - 用户反馈即使配置了 gradle、git 等自定义 skills，Gemini 也很少在相关场景主动调用，只有在显式指令下才使用。
   - 这直接削弱了自定义 skills/子代理机制的实用价值。
   - https://github.com/google-gemini/gemini-cli/issues/21968

### 🖥️ 浏览器代理与 Shell 执行问题

4. **Shell 命令执行后卡在 "Waiting input"**（#25166）
   - P1 / Bug / 4 条评论 / 3 👍
   - 简单 CLI 命令完成后，Gemini 仍显示命令活跃并"等待用户输入"，导致流程挂起。涉及核心执行层，影响面大。
   - https://github.com/google-gemini/gemini-cli/issues/25166

5. **浏览器子代理在 Wayland 下失败**（#21983）
   - P1 / Bug / 4 条评论 / 1 👍
   - 浏览器子代理在 Wayland 会话中异常终止，终止原因显示为 GOAL，但实际任务未完成。
   - https://github.com/google-gemini/gemini-cli/issues/21983

### 🧠 Auto Memory 记忆系统缺陷

6. **Auto Memory 对低信号会话无限重试**（#26522）
   - P2 / Bug / 5 条评论
   - 若提取代理跳过低信号会话，该会话永远不会被标记为已处理，会反复出现在后续扫描中，浪费 token 和时间。
   - https://github.com/google-gemini/gemini-cli/issues/26522

7. **Auto Memory 需确定性脱敏与减少日志**（#26525）
   - P2 / Security / 4 条评论
   - 脱敏发生在内容进入模型上下文之后；后台服务还会记录已有 skill 名称等敏感信息，存在隐私泄漏风险。
   - https://github.com/google-gemini/gemini-cli/issues/26525

### 🔒 安全与沙箱方向

8. **零依赖 OS 沙箱与执行后意图路由**（#19873）
   - P2 / Enhancement / 8 条评论 / 1 👍
   - 提案建议充分利用 Gemini 模型天生的 bash 亲和力，通过零依赖 OS 级沙箱（而非语言级限制）放行模型自由组合 POSIX 工具，并在执行后做意图路由以兼顾安全与能力。
   - https://github.com/google-gemini/gemini-cli/issues/19873

### 📐 代码理解与工具链

9. **评估 AST 感知的文件读取、搜索与代码库映射**（#22745）
   - P2 / Feature / EPIC / 7 条评论 / 1 👍
   - 验证 AST 感知工具能否减少上下文噪声、精确读取方法边界、降低 token 消耗并提升代码导航效率，是未来工具链演进的重要方向。
   - https://github.com/google-gemini/gemini-cli/issues/22745

### ⚙️ 配置与兼容性

10. **`~/.gemini/agents/` 下 symlink 文件不被识别为 agent**（#20079）
    - P2 / Bug / 4 条评论
    - 用户通过符号链接管理 agent 文件时，Gemini 无法识别该 agent，影响配置管理灵活性。
    - https://github.com/google-gemini/gemini-cli/issues/20079

---

## 4. 重要 PR 进展（Top 10）

### 🔐 安全修复

1. **macOS Seatbelt 隔离容器运行时**（#28935，已合入 nightly）
   - 全面拒绝访问容器运行时守护进程的 UNIX socket、CLI 二进制、Mach/XPC 服务及 POSIX 共享内存，防止通过 VirtioFS 等挂载逃逸沙箱。
   - https://github.com/google-gemini/gemini-cli/pull/28935

2. **阻止 `$VAR` / `${VAR}` 变量展开绕过安全门禁**（#28902，P1 / Security）
   - 修复 `detectBashSubstitution()` 与 `detectPowerShellSubstitution()` 的检查缺失，封堵 GHSA-wpqr-6v78-jr5g 的绕过路径；同时对自动化 issue 去重工作流做了纵深防御加固。
   - https://github.com/google-gemini/gemini-cli/pull/28902

3. **扩展安装时对环境变更征得同意并消毒运行时变量**（#28863，Security）
   - MCP 服务器环境配置被纳入生成的同意字符串；对自定义环境中可能改变运行时行为的变量进行消毒，防止扩展更新时悄悄注入恶意环境变量。
   - https://github.com/google-gemini/gemini-cli/pull/28863

### 🐛 核心缺陷修复

4. **A2A 服务器清除陈旧取消错误**（#28940）
   - 修复"请求被中止/取消后，后续用户提问立即崩溃 `Execution aborted`"的状态损坏问题。
   - https://github.com/google-gemini/gemini-cli/pull/28940

5. **A2A 服务器 501 响应缺少 return**（#27754，P1 / Help Wanted）
   - 补上 `GET /tasks/metadata` 返回 501 后缺失的 `return` 语句，避免落到后续处理逻辑导致 `ERR_HTTP_HEADERS_SENT` 崩溃。
   - https://github.com/google-gemini/gemini-cli/pull/27754

### 🖥️ CLI / 终端体验

6. **阻止静态刷新时清空终端滚动回退**（#28967）
   - 在非备用缓冲区模式下，`refreshStatic()` 不再调用 `clearTerminal`，避免 GNOME Terminal、xterm、Alacritty 等模拟器在刷新时滚动历史被整体清掉。
   - https://github.com/google-gemini/gemini-cli/pull/28967

7. **保留执行中的子代理工具调用 UI 展示**（#27862，Help Wanted）
   - 修复子代理工具调用在执行期间从 UI 消失的问题，用户现在可以持续看到子代理的活动状态。
   - https://github.com/google-gemini/gemini-cli/pull/27862

8. **优先使用结构化显示标题**（#27863，P1 / Help Wanted）
   - 调整 `getDisplayTitle()` 优先级：`_toolDisplayName` → `_toolName` → 兜底，确保工具调用展示正确的结构化标题而非泛化文本。
   - https://github.com/google-gemini/gemini-cli/pull/27863

### 📦 扩展与配置

9. **去重 symlink/junction 后的 skills 目录**（#28968）
   - 当用户通过 Windows `mklink /J` 或 symlink 将 `.gemini` 链接到 `.agents` 以遵循开放 Agent Skills 标准时，CLI 会重复扫描两个入口；此 PR 在发现阶段做去重。
   - https://github.com/google-gemini/gemini-cli/pull/28968

10. **修正 excludeTools 文档示例：从未生效的写法**（#28966，P1）
    - 文档中 `"excludeTools": ["run_shell_command(rm -rf *)"]` 实际上永远不会匹配（工具名精确匹配），误导扩展作者；现已改为裸工具名并指向策略引擎做命令级拦截。
    - https://github.com/google-gemini/gemini-cli/pull/28966

---

## 5. 热门 Discussions

> 本次数据源未提供 Discussions 数据，本部分暂缺。

---

## 6. 功能需求趋势

综合今日 Issue 与 PR 数据，社区最关注的功能方向可归纳为五条主线：

| 方向 | 代表 Issue / PR | 社区诉求 |
|------|----------------|----------|
| **子代理可靠性与可观测性** | #22323、#21409、#21968、#27862、#22598 | 子代理需正确报告终止状态、避免挂起、在 UI 中保留执行轨迹、并主动按需调用 skills/sub-agents |
| **安全沙箱与权限收敛** | #19873、#28902、#28863、#28935、#22672 | 在保留模型 bash 能力的同时，通过 OS 级沙箱、环境变量消毒、确定性脱敏等措施收紧攻击面 |
| **记忆系统（Auto Memory）工程质量** | #26522、#26523、#26525 | 期望记忆系统具备低信号会话跳过机制、无效补丁隔离/告警、以及先脱敏后进上下文的管道 |
| **AST 感知代码工具** | #22745、#22746 | 探索 AST 感知的读取、搜索与代码库映射，以降低 token 开销、减少轮次 |
| **终端跨平台兼容与交互体验** | #21983、#28967、#21924、#25166 | Wayland 支持、终端 resize 流畅性、滚动回退不被意外清除、shell 执行不卡死 |

---

## 7. 开发者关注点

- **子代理行为"言行不一"**：多个高赞 Issue 指控子代理在未完成任务时仍报告 `success` / `GOAL`，或干脆挂起不返回，严重影响用户对 agent 模式的信任。
- **安全加固呼声集中但求稳**：社区既希望模型具备更强的 bash/工具原生能力（#19873），又要求对变量展开绕过、环境变量注入、扩展更新劫持等攻击路径做系统性封堵；安全 PR 普遍被标记高优先级。
- **Auto Memory 成为新的痛点中心**：重试、无效补丁、日志泄漏三连 Issue 指向同一个结论——后台记忆服务在可靠性设计与隐私卫生上仍未达标。
- **配置与文档的"隐形坑"**：excludeTools 从不生效的文档示例、symlink agent 文件不被识别、settings.json 忽略等，表明配置层的兼容性测试有待补齐。
- **A2A 服务稳定性**：两个独立 PR（#28940、#27754）修复 A2A 服务器的状态损坏与崩溃问题，说明跨代理通信原语的健壮性仍有提升空间。

---

*本日报基于 github.com/google-gemini/gemini-cli 公开数据生成，仅供技术社区参考。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-08-23）

## 今日速览

今日无新 Release、无 PR 更新；社区焦点集中在 **BYOK 多模型切换**、**MCP 兼容性**、**远程/Cloud 会话稳定性** 以及 **Windows 自动更新后的进程异常**。此外，新出现多条 triage Issue，涉及 Agent 只确认不执行工具、`--cloud` 卡死、OTLP 明文端点信任等问题。

## 版本发布

过去 24 小时无新版本发布。

## 社区热点 Issues

从 11 条活跃 Issue 中挑选 10 条最值得关注的问题如下（均来自 `github/copilot-cli`）。

### 1. [#3709 允许 /model 在单会话内切换多个模型，包括 BYOK/本地 provider](https://github.com/github/copilot-cli/issues/3709)
`[area:models]` · 27 👍 · 5 评论  
**为什么重要：** BYOK 模式目前通过 `COPILOT_MODEL` 将会话固定到单个模型，`/model` 选择器只显示 GitHub 托管模型，不显示本地 BYOK provider 提供的模型。这是社区对 **模型灵活切换** 最强烈的诉求之一，与 #3282 形成互补。

### 2. [#3282 增加多 BYOK 模型能力](https://github.com/github/copilot-cli/issues/3282)
`[area:models, area:configuration]` · 26 👍 · 9 评论  
**为什么重要：** 当前只能通过环境变量配置单个 BYOK 模型，用户无法在 Copilot TUI 内切换到另一个 BYOK 模型，必须终止会话并重新设置环境变量。社区对此工作流割裂感反馈明显。

### 3. [#2306 企业策略鉴权间歇性报错：requires an enterprise or organization policy to be enabled](https://github.com/github/copilot-cli/issues/2306)
`[area:authentication, area:enterprise]` · 3 👍 · 7 评论  
**为什么重要：** 用户每周会遇到 2-3 次“You are not authorized to use this Copilot feature”错误，且会自行消失。企业环境下的鉴权稳定性直接影响日常可用性，是典型的 **间歇性阻断问题**。

### 4. [#4370 Copilot CLI 1.0.79-1 在 server/discover 返回 -32602 时 MCP 初始化失败](https://github.com/github/copilot-cli/issues/4370)
`[area:mcp]` · 1 👍 · 2 评论  
**为什么重要：** CLI 初始化 MCP 时会发送 `server/discover` 请求，但 FastMCP 等常见 MCP server 未实现该方法，返回 `-32602 Invalid request parameters`，CLI 将该响应视为致命错误。这暴露出 MCP 握手对“可选方法缺失”的兼容性问题。

### 5. [#4514 无法在本地恢复远程会话](https://github.com/github/copilot-cli/issues/4514)
`[area:sessions]` · 1 👍 · 1 评论  
**为什么重要：** 用户执行 `/resume` 并选择远程会话后无法在本地恢复，导致跨设备工作流中断。远程会话恢复是 Copilot CLI 云端能力落地的关键路径。

### 6. [#4111 Windows：原地自动更新后，旧 copilot.exe.old 进程继续运行并占用 100% CPU](https://github.com/github/copilot-cli/issues/4111)
`[area:sessions, area:platform-windows, area:installation]` · 0 👍 · 1 评论  
**为什么重要：** 长时间运行的会话在 Windows 上跨越自动更新后，仍从被重命名的 `copilot.exe.old` 继续执行，且大量此类孤儿进程会无限占用单线程 100% CPU。这是影响 Windows 用户升级体验的高优先级 bug。

### 7. [#4566 Agent 反复确认工作但实际不执行工具动作](https://github.com/github/copilot-cli/issues/4566)
`[triage]` · 0 👍 · 1 评论 · 版本 1.0.80 · gpt-5.3-codex  
**为什么重要：** 新反馈的 Agent 行为可靠性问题：模型“口头答应”任务，却始终不调用工具。这直接影响用户对 CLI Agent 自动化能力的信任，需要尽快定位是模型策略还是工具调用循环问题。

### 8. [#4568 --cloud 的 owner picker 卡死、重连崩溃、任务轮询 429](https://github.com/github/copilot-cli/issues/4568)
`[triage]` · 0 👍 · 0 评论  
**为什么重要：** 无仓库上下文时，`copilot --cloud` 在 `Loading available owners...` 处无限挂起；有仓库上下文时，任务停留在 `session.requested` 直到 provisioning 超时；重连还会崩溃，且轮询触发 429。多条症状叠加，说明 Cloud 会话链路存在系统性稳定性问题。

### 9. [#4567 支持显式信任不安全的 http:// OTLP exporter 端点](https://github.com/github/copilot-cli/issues/4567)
`[triage]` · 0 👍 · 0 评论  
**为什么重要：** 目前配置 `http://localhost:4318` 这类 OTLP/HTTP 端点时，telemetry export 会被静默禁用。社区希望增加 opt-in，允许信任不安全的 loopback 端点，与 VS Code 等工具行为对齐，便于本地可观测性调试。

### 10. [#4564 已触发的 pending 提示仍残留在屏幕上](https://github.com/github/copilot-cli/issues/4564)
`[triage]` · 0 👍 · 0 评论  
**为什么重要：** Agent 运行期间入队的 prompt 在触发后，其 `(pending · ctrl+c to cancel)` 状态不会正确清除，导致界面状态混乱。虽然严重度不高，但影响 TUI 交互体验，属于高频 UI 反馈问题。

## 重要 PR 进展

过去 24 小时无公开 PR 更新，暂无可报告的合并或审查进展。

## 热门 Discussions

未提供 Discussions 数据，本节省略。

## 功能需求趋势

从今日 Issues 中可以看到以下社区最关注的功能方向：

- **多模型 / BYOK 模型切换**：支持在一个会话内通过 `/model` 切换 GitHub 托管模型、BYOK 模型和本地 provider 模型，是当前呼声最高的功能需求。
- **MCP 生态兼容性**：需要更宽容的 MCP 握手协议，避免因 server 未实现可选方法导致初始化失败。
- **Cloud / 远程会话稳定性**：包括远程会话恢复、`--cloud` 的 owner 选择、任务 provisioning 与轮询限流。
- **可观测性与 telemetry 配置**：允许用户显式信任 OTLP/HTTP 明文端点，并避免静默关闭导出。
- **Windows 升级与进程生命周期管理**：自动更新后旧进程应退出或切换到新二进制，不能遗留孤儿进程占用 CPU。
- **Agent 执行可靠性**：确保 Agent 在确认任务后真正调用工具，而不是只输出“完成意图”的文本。

## 开发者关注点

- **BYOK 使用体验受限**：单一 `COPILOT_MODEL` 环境变量导致用户无法在 TUI 内自由切换模型，切换成本高，打断开发流。
- **企业鉴权错误不稳定**：`requires an enterprise or organization policy to be enabled` 间歇性出现，影响可信度。
- **MCP 接入门槛偏高**：FastMCP 等主流框架下直接初始化失败，不利于 Copilot CLI 与本地工具生态集成。
- **Windows 更新隐患**：自动更新后残留 `copilot.exe.old` 进程并占满 CPU，需要用户手动清理。
- **Cloud 模式不可靠**：owner 选择卡死、任务超时、重连崩溃、429 限流等问题叠加，使 cloud 模式尚不适合生产环境。
- **Agent 行为可预测性不足**：出现了“只确认不执行”和 TUI 残留 pending 提示的问题，说明 Agent 循环和界面状态同步仍需打磨。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-08-23

## 今日速览

过去 24 小时无新版本发布，但社区讨论热度集中在 Agent 安全沙箱、自定义系统提示词与 MCP 工具定义带来的 token 开销三大方向。与此同时，桌面端启动失败回归（v1.18.5–v1.18.13）和会话永久卡死等问题持续发酵，另有多个 7 月的 PR 被自动化清理机器人批量关闭。流式响应静默中断成为今日最集中的 bug 反馈主题。

---

## 社区热点 Issues

### 1. 如何为 Agent 提供沙箱隔离？ — [#2242](https://github.com/anomalyco/opencode/issues/2242)
**83 评论 / 71 👍 | OPEN** | 创建 2025-08-25，更新 2026-08-22
用户希望像 gemini-cli / codex-cli 在 macOS 上使用 seatbelt 那样，限制 Agent 的终端命令访问当前目录之外的文件。这是当前社区最关注的安全需求，长期热度不减。

### 2. 支持在全局/项目/自定义目录中配置自定义系统提示词 — [#7101](https://github.com/anomalyco/opencode/issues/7101)
**35 评论 / 127 👍 | CLOSED** | 更新 2026-08-22
全量数据中 👍 数最高的 Issue，源于 Reddit 上关于精简系统提示词的讨论。已关闭，推测已完成或进入实现流程，社区对提示词可定制性的需求非常强烈。

### 3. 懒加载 MCP 工具定义以减少 token 开销 — [#35376](https://github.com/anomalyco/opencode/issues/35376)
**8 评论 | CLOSED** | 更新 2026-08-22
当连接 9 个 MCP 服务器（supabase、playwright、chrome-devtools 等）时，所有工具定义被注入每轮对话的系统提示词，token 消耗巨大。社区希望改为按需懒加载。

### 4. "Auto mode"：用 LLM 分类器实现权限自动批准 — [#37564](https://github.com/anomalyco/opencode/issues/37564)
**7 评论 / 22 👍 | OPEN** | 更新 2026-08-22
参考其他 agentic 工具的做法，希望引入模型分类器来判断哪些权限请求可自动放行，减少人工确认打断，同时保留安全边界。

### 5. 桌面端启动时 provider/model/MCP 加载失败（回归） — [#40516](https://github.com/anomalyco/opencode/issues/40516)
**6 评论 | OPEN** | 更新 2026-08-22
多名用户反馈桌面应用约 80% 的启动无法加载 provider/model/MCP 信息，v1.18.4 正常，v1.18.5–v1.18.13 均受影响。属于明确的版本回归问题，影响面较大。

### 6. 会话在正常使用中永久卡死，重启也无法恢复 — [#43277](https://github.com/anomalyco/opencode/issues/43277)
**4 评论 | OPEN** | 更新 2026-08-22
多个会话在正常使用中进入"卡死"状态，拒绝新消息，且**跨系统重启持续存在**，重启 opencode 服务也无法清除。对日常使用影响严重。

### 7. 分层上下文定价模型的会话成本估算错误 — [#42910](https://github.com/anomalyco/opencode/issues/42910)
**4 评论 | OPEN** | 更新 2026-08-22
当模型采用分层上下文定价且会话进入更高层级时，本地估算仍按小上下文价格计算整个会话，导致成本预估偏低，影响用户的费用判断。

### 8. GitHub Copilot 学生计划 provider 未被识别 — [#34644](https://github.com/anomalyco/opencode/issues/34644)
**3 评论 / 17 👍 | OPEN** | 更新 2026-08-22
通过 OAuth 完成 Copilot 订阅认证后，`github-copilot` provider 不出现在模型选择器中。学生计划用户受影响，社区关注度较高。

### 9. 子 Agent 最终响应流失败时静默返回空结果 — [#40527](https://github.com/anomalyco/opencode/issues/40527)
**3 评论 | OPEN** | 更新 2026-08-22
子 Agent（Task）完成所有工具工作后，若最终响应流遇到 503，父任务收到空结果——无错误、无重试，已完成的工作被静默丢弃。

### 10. 通过 CLI 禁用插件 — [#7687](https://github.com/anomalyco/opencode/issues/7687)
**5 评论 / 20 👍 | CLOSED** | 更新 2026-08-22
用户希望能用 CLI 命令直接禁用某个插件，而不是手动编辑配置文件。需求获得 20 👍，已关闭。

---

## 重要 PR 进展

### 1. feat(session): 新增 suffix 压缩模式 — [#44264](https://github.com/anomalyco/opencode/pull/44264)
为两个会话运行时添加实验性 `compaction.mode: "suffix"` 支持，默认仍为 prepend。为长会话管理提供新选项。

### 2. fix(console): 允许免费 Go 模型越过配额继续使用 — [#44265](https://github.com/anomalyco/opencode/pull/44265)
当 Go 模型所有基础费率和 200K token 费率均为零时归类为免费模型，不计入配额耗尽或余额回退检查。

### 3. fix(tui): 压平自动补全描述 — [#44261](https://github.com/anomalyco/opencode/pull/44261)
折叠自动补全描述中的空白字符，避免多行技能描述破坏选择器行高亮对齐。

### 4. fix(provider): 为 openai-compatible 空 assistant 消息注入占位文本 — [#38270](https://github.com/anomalyco/opencode/pull/38270)
修复 assistant 消息最终无任何非空文本（如仅 reasoning 被中断）时的问题，确保消息不会为空。

### 5. feat(opencode): 支持 per-MCP-server 信任配置 — [#40125](https://github.com/anomalyco/opencode/pull/40125)
通过指纹固定（fingerprint pinning）信任特定自签名证书，避免全局关闭验证；`caFile` 支持私有 CA。关闭 #40111，部分解决 #23506。

### 6. fix(opencode): 快照跳过嵌套 Git 仓库 — [#44259](https://github.com/anomalyco/opencode/pull/44259)
将目录形态的未跟踪嵌套仓库从快照暂存中排除，避免将 `tui/` 这类嵌套仓库目录当作普通文件处理。

### 7. fix(a11y): 向屏幕阅读器暴露流式 assistant 内容 — [#38393](https://github.com/anomalyco/opencode/pull/38393)
修复流式生成期间 assistant 内容对屏幕阅读器不可见的无障碍问题，关闭 #33137。

### 8. fix(session): 按回复父节点而非消息 ID 顺序结束回合循环 — [#38387](https://github.com/anomalyco/opencode/pull/38387)
修复客户端自定义 `messageID` 被当作时间戳导致会话回合死循环的问题，关闭 #35741。

### 9. feat(core): 支持 CLAUDE_CONFIG_DIR 定位用户级 Claude 状态 — [#38370](https://github.com/anomalyco/opencode/pull/38370)
不再硬编码 `~/.claude`，全局 `CLAUDE.md`、全局技能和编辑器 ID 均遵循 `CLAUDE_CONFIG_DIR`，关闭 #6551。

### 10. fix(app): 新会话应用所选 agent 的模型 — [#38372](https://github.com/anomalyco/opencode/pull/38372)
此前新建会话选择 agent 只更新本地草稿模型，提示词组合器中的模型未同步更新，现予以修复，关闭 #38333。

---

## 功能需求趋势

从今日更新的 Issue 与 PR 中可以提炼出以下社区重点关注方向：

- **安全与沙箱**：Agent 文件系统访问隔离（#2242）、per-MCP-server 信任配置（#40125）、权限自动批准分类器（#37564）。
- **提示词与配置可定制性**：自定义系统提示词（#7101）、CLI 禁用插件（#7687）、agent markdown 提示词中的 `{file:path}` 插值（#38379）、`CLAUDE_CONFIG_DIR` 支持（#38370）。
- **成本与性能优化**：MCP 工具定义懒加载以降低 token 开销（#35376）、分层上下文定价的准确成本估算（#42910）、suffix 压缩模式（#44264）。
- **桌面端体验完善**：聊天中文件路径可点击打开（#37891）、Ctrl+Tab 按最近使用顺序切换会话（#44258）、主题实时预览（#38355）、打开项目对话框的键盘导航（#38345）。
- **会话与稳定性治理**：会话卡死的恢复机制（#43277）、子 Agent 失败重试与错误上报（#40527）、项目目录重命名后保留会话历史（#44256）。

---

## 开发者关注点

- **流式中断与静默失败是最大痛点**：多起独立报告指向同一类问题——中途断流被当作完整响应（#44210）、子 Agent 响应 503 返回空结果（#40527）、孤儿工具调用导致循环静默退出（#44254）、托管网关 mid-stream 中断且无客户端超时（#44044）。开发者普遍反映错误不可见、无重试、工作丢失。
- **会话稳定性问题亟待解决**：#43277 的"跨重启永久卡死"和 #40516 的桌面端启动回归（v1.18.5–v1.18.13）直接阻断日常工作，且缺乏有效的恢复手段。
- **成本可见性不足**：MCP 全量注入导致 token 虚高、分层计价模型估算偏差，开发者对"实际花了多少钱"缺乏信任。
- **模型/provider 兼容性琐碎但高频**：Bedrock 代理的 `cache_control` 透传错误（#25984）、Copilot 学生计划不可用（#34644）、EU 企业 OAuth 失败（#43615）、NVIDIA NIM 免费 API 报 404/410（#44204）——第三方 provider 的兼容问题持续消耗社区精力。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 — 2026-08-23

## 今日速览

过去 24 小时内 Pi 仓库无新版本发布，但社区活跃度较高：Windows/ConPTY 相关修复 PR（#8485、#8486）已合入，针对 auto-compaction 触发机制与输出限制续跑的讨论持续升温（#6879、#8464），同时 MindsHub、Parasail 等新 provider 请求接连提交（#8488、#8489、#8450），显示社区对多模型网关集成的需求突出。Windows 平台支持是当前最集中的痛点方向，维护者已在 Issue #7547 中征集用户反馈。

---

## 社区热点 Issues

### 1. [Windows] [sink-thread] 你在 Windows 上如何使用 Pi？遇到了哪些问题？
- **作者**: petrroll | 创建: 2026-08-03 | 更新: 2026-08-22 | 评论: 39 | 👍: 2
- **链接**: https://github.com/earendil-works/pi/issues/7547
- **要点**: 维护者主动发起的 Windows 使用情况调研，旨在梳理 Pi 在 Windows 上的各种运行方式（WSL、原生、终端模拟器等），以便聚焦 Bug 修复和文档优化。当前评论数高居榜首，社区反馈活跃。
- **值得关注**: Windows 是 Pi 当前最大的平台短板，此 Issue 的结果将直接影响后续 Windows 支持路线图。

### 2. [bug] auto-compaction 在上下文超过 100% 后从不触发，直到 provider 溢出
- **作者**: alexanderkreidich | 创建: 2026-07-20 | 更新: 2026-08-22 | 评论: 20 | 👍: 18
- **链接**: https://github.com/earendil-works/pi/issues/6879
- **要点**: 在一次 GPT-5.6-sol 的 agentic 回合中，上下文超出压缩阈值后持续增长至 373k tokens，直到 API 拒绝请求才触发压缩。用户建议在每个 agent 步骤后检查上下文占用。
- **值得关注**: 高赞高评论的核心 bug，直接影响长任务稳定性，与 #8464（输出限制续跑）共同指向上下文管理机制的不足。

### 3. [bug] Kitty 终端中 Backspace 删除 2 个字符（Kitty 协议释放事件未过滤）
- **作者**: mister-booth | 创建: 2026-07-26 | 更新: 2026-08-22 | 评论: 11 | 👍: 1
- **链接**: https://github.com/earendil-works/pi/issues/7130
- **要点**: 在 Kitty 终端下按 Backspace 会一次删除两个字符，疑似 Kitty 键盘协议（KKP）释放事件未被正确过滤。
- **值得关注**: 终端协议兼容性问题，同类问题还出现在 #8442（herdr pane 中 Backspace 无效），说明 KKP 处理逻辑存在共性缺陷。

### 4. [bug] 无法选择内置 llama.cpp 支持的模型
- **作者**: SteelPh0enix | 创建: 2026-08-15 | 更新: 2026-08-22 | 评论: 9 | 👍: 0
- **链接**: https://github.com/earendil-works/pi/issues/8167
- **要点**: 路由器模式下 llama-server 的模型未出现在模型列表中，尽管可通过 `/llama` 命令加载/卸载。用户提供了完整的配置文件供复现。
- **值得关注**: 本地模型用户的核心痛点，已有关联 PR #8479 尝试修复 presets 暴露问题。

### 5. [bug] GitHub Copilot 登录超时
- **作者**: prumand | 创建: 2026-08-22 | 更新: 2026-08-22 | 评论: 5 | 👍: 0
- **链接**: https://github.com/earendil-works/pi/issues/8468
- **要点**: Copilot 集成报 `Failed to login to GitHub Copilot: The operation was aborted due to timeout`。用户已尝试 checkout 最新代码（含 PR #8254 修复），问题仍存在。
- **值得关注**: 新提交的集成类 bug，影响使用 Copilot 作为 provider 的用户。

### 6. [untriaged] 将交互式模型选择持久化配置为按作用域生效
- **作者**: cmpadden | 创建: 2026-08-19 | 更新: 2026-08-22 | 评论: 5 | 👍: 0
- **链接**: https://github.com/earendil-works/pi/issues/8376
- **要点**: 建议增加 `modelSelectionScope` 设置，控制 `/model` 和模型切换的持久化范围：`session`（仅当前会话）、`directory`（记住目录）等。
- **值得关注**: 反映用户在多项目切换时对模型选择隔离性的需求。

### 7. [bug] npm search 不索引新发布的 pi-packages（8 月 4 日后无新包名）
- **作者**: hellokidder | 创建: 2026-08-10 | 更新: 2026-08-22 | 评论: 5 | 👍: 0
- **链接**: https://github.com/earendil-works/pi/issues/7885
- **要点**: 发布的 `pi-affix-prompt` 包无法通过 `npm search` 找到，pi.dev/packages 画廊也因此不显示（画廊以 npm search 为数据源）。
- **值得关注**: 影响扩展生态的可发现性，间接导致 #8461（扩展上架延迟的讨论）。

### 8. [bug] Kitty 键盘协议激活时，若主机发送传统 `0x7f`，Backspace 被忽略（herdr pane）
- **作者**: fanyangto | 创建: 2026-08-21 | 更新: 2026-08-22 | 评论: 4 | 👍: 0
- **链接**: https://github.com/earendil-works/pi/issues/8442
- **要点**: 在 herdr pane 中，Pi 启用 KKP 后，主机发送的 legacy `0x7f` 被忽略，普通 Backspace 无效，Ctrl+Backspace 正常。字节捕获显示 Backspace 对应传统 `7f`。
- **值得关注**: 与 #7130 相反的表现（删除 0 字符 vs 删除 2 字符），进一步说明 KKP 事件解析的兼容性问题。

### 9. [untriaged] 处理输出上限续跑与回合中压缩
- **作者**: spinkler | 创建: 2026-08-22 | 更新: 2026-08-22 | 评论: 4 | 👍: 0
- **链接**: https://github.com/earendil-works/pi/issues/8464
- **要点**: 希望模型真正达到输出 token 上限时自动继续（无需手动输入 "continue"），并在工具回合之间检查自动压缩，避免长工具循环超过配置的上下文限制。
- **值得关注**: 与 #6879 互补的上下文管理改进，是长任务自动化的关键需求。

### 10. [untriaged] 添加 MindsHub 作为内置 pi-ai provider
- **作者**: torrmal | 创建: 2026-08-22 | 更新: 2026-08-22 | 评论: 3 | 👍: 0
- **链接**: https://github.com/earendil-works/pi/issues/8489
- **要点**: MindsHub 是一个 OpenAI/Anthropic 兼容的推理网关，一个 API key 即可访问 Claude、GPT、Gemini、Kimi、DeepSeek 等模型目录。请求将其加入内置 provider 列表。
- **值得关注**: 同主题 PR #8488 已提交，新 provider 集成正在快速推进中。

---

## 重要 PR 进展

### 1. [CLOSED] feat(coding-agent): 打包 Node 运行时
- **作者**: mitsuhiko | 创建/更新: 2026-08-22
- **链接**: https://github.com/earendil-works/pi/pull/8474
- **要点**: 修改 `pi-coding-agent` 的打包方式，大幅减少加载文件数量，解决慢 IO 设备（特别是 Windows Defender 场景）的启动问题。
- **意义**: 针对 Windows 启动性能的直接优化，与 #7547 的 Windows 反馈征集相呼应。

### 2. [CLOSED] feat(ai): 添加 MindsHub provider
- **作者**: torrmal | 创建/更新: 2026-08-22
- **链接**: https://github.com/earendil-works/pi/pull/8488
- **要点**: 按 Issue #8489 请求添加 MindsHub 为内置 provider，单一 Chat Completions endpoint 即可访问多模型目录。
- **意义**: 扩大 Pi 对聚合网关的支持，降低用户接入多模型的成本。

### 3. [OPEN] fix(coding-agent): 暴露 finish reason 兼容性覆盖
- **作者**: petrroll | 创建/更新: 2026-08-22
- **链接**: https://github.com/earendil-works/pi/pull/8487
- **要点**: API 已包含 finish reason 覆盖能力但未暴露在类型中，本 PR 补齐类型导出。关闭 #8460。
- **意义**: 为下游开发者提供更完整的编程接口。

### 4. [CLOSED] feat(tui): 添加编辑器滚动捕获与验证工具
- **作者**: bonsai | 创建/更新: 2026-08-22
- **链接**: https://github.com/earendil-works/pi/pull/8486
- **要点**: 为 #8484（Windows 下编辑器滚动到顶部）添加可脚本化的最小 TUI 应用，支持 F5/F6 模拟 `setText` 与历史循环，用于复现和验证滚动问题。
- **意义**: 配套 #8485 的测试基础设施，确保滚动修复可验证。

### 5. [CLOSED] fix(tui): 主屏幕渲染时禁用自动换行，防止 ConPTY 漂移
- **作者**: bonsai | 创建/更新: 2026-08-22
- **链接**: https://github.com/earendil-works/pi/pull/8485
- **要点**: 修复 #8484。Windows/ConPTY 下，`TuiMainScreen` 渲染全宽行时自动换行导致 `\r\n` 导航多走一行，禁用 autowrap 后光标定位恢复正常。
- **意义**: Windows 终端体验的重要修复，与 #8486 一起合入。

### 6. [OPEN] docs(coding-agent): 将自定义 footer 文档指向 ctx.getContextUsage()
- **作者**: petrroll | 创建/更新: 2026-08-22
- **链接**: https://github.com/earendil-works/pi/pull/8482
- **要点**: 修正文档中关于自定义 footer 获取上下文用量的 API 指引，修复 #8392。
- **意义**: 小但实用的文档修正，避免开发者使用错误 API。

### 7. [CLOSED] fix: 暴露未加载的 llama.cpp presets
- **作者**: KaelWD | 创建/更新: 2026-08-22
- **链接**: https://github.com/earendil-works/pi/pull/8479
- **要点**: 使用 `llama-server --models-preset` 而非 `--models-dir` 时，presets 未出现在模型列表中。本 PR 将未加载的 presets 也暴露为可选模型。相关 #8167。
- **意义**: 解决 llama.cpp 本地模型的一个实际使用障碍。

### 8. [OPEN] feat(coding-agent): 实验性 loadout 管理
- **作者**: mitsuhiko | 创建: 2026-07-26 | 更新: 2026-08-22
- **链接**: https://github.com/earendil-works/pi/pull/7148
- **要点**: 允许通过 `/loadout` 在会话中启用/禁用扩展，并将会话级 loadout 持久化到 session 以便恢复时还原。
- **意义**: 扩展生态灵活性的重要一步，与 #4861（TUI viewport 扩展原语）共同扩展扩展系统能力。

### 9. [CLOSED] feat(coding-agent,tui): 通过 /settings 切换语言
- **作者**: Dazzle-sys | 创建: 2026-08-18 | 更新: 2026-08-22
- **链接**: https://github.com/earendil-works/pi/pull/8295
- **要点**: 在 `/settings` 中添加语言选择子菜单，支持英文和简体中文；新增 `setLocale()` 持久化与 `isValidLocale()` 校验。
- **意义**: 国际化基础能力的引入，降低中文用户的使用门槛。

### 10. [CLOSED] fix(tui): 全屏双击选词时保留 `/` 和 `-`
- **作者**: iggykimi | 创建/更新: 2026-08-21 至 2026-08-22
- **链接**: https://github.com/earendil-works/pi/pull/8459
- **要点**: 全屏模式下，双击路径时 `Intl.Segmenter` 将 `/` 和 `-` 视为边界，导致只选中路径的一部分。本 PR 修正分词逻辑，使双击路径可整体选中。
- **意义**: TUI 文本编辑体验的细节修复。

---

## 热门 Discussions

### 1. [General] 你最喜欢与 Pi agent 搭配使用的插件、扩展或增强工具？
- **作者**: eterps | 创建: 2026-04-18 | 更新: 2026-08-22 | 评论: 13 | 👍: 8
- **链接**: https://github.com/earendil-works/pi/discussions/3373
- **要点**: 用户因不常用 Discord，在 GitHub Discussions 提问收集社区偏好的扩展。该话题持续活跃，反映了社区对扩展生态的热衷。

### 2. [General] 特性提议：多会话进程的会话感知扩展生命周期
- **作者**: heresyrj | 创建: 2026-02-18 | 更新: 2026-08-22 | 评论: 1 | 👍: 5
- **链接**: https://github.com/earendil-works/pi/discussions/1546
- **要点**: 当前扩展生命周期假设“一进程一会话”，`registerTools(pi)` 没有会话上下文，扩展只能将状态存到 `globalThis`。单进程多会话场景（如服务端）需要会话感知的生命周期管理。
- **值得关注**: 高赞特性提案，与远程会话（#8481）等方向关联，反映扩展模型需向多会话演进。

### 3. [General] 扩展在 pi.dev/packages 搜索/列表中上架需要多长时间？
- **作者**: dantetekanem | 创建/更新: 2026-08-21 | 评论: 0 | 👍: 1
- **链接**: https://github.com/earendil-works/pi/discussions/8461
- **要点**: 扩展发布约 2 天仍未出现在搜索列表中，但通过直链可访问。用户询问索引刷新周期或是否遗漏了上架要求。
- **值得关注**: 与 Issue #7885（npm search 未索引）同属扩展可发现性问题，影响开发者发布扩展的体验。

---

## 功能需求趋势

从过去 24 小时的 Issue 与 Discussion 中可提炼出以下几个社区最关注的功能方向：

1. **新模型 / Provider 支持**
   - MindsHub 聚合网关（#8489、PR #8488）
   - Parasail.io provider（#8450）
   - DeepSeek V4 Flash Vision（#8469、#8438，两次重复提交，需求明确）
   - OpenRouter 推理强制模型的适配（#8454）

2. **上下文管理与自动压缩**
   - auto-compaction 触发时机修复（#6879）
   - mid-turn 压缩与输出上限续跑（#8464）
   - 压缩提示词保真度改进（#8452）
   - 压缩尾保留 token 超限修复（#8498）
   - 该方向连续出现 4 个相关 Issue，是当前最集中的功能/缺陷诉求。

3. **Windows 平台体验**
   - 使用反馈征集（#7547）
   - 终端按键绑定冲突（#8372）
   - ConPTY 滚动漂移（#8484，已修复）
   - 路径分隔符问题（#8441）
   - TUI 输入回显故障（#8434）
   - 启动性能优化（PR #8474）
   - Windows 支持的多点开花，是当前最大的平台短板。

4. **终端协议兼容性（Kitty 键盘协议）**
   - Backspace 删除 2 字符（#7130）
   - herdr pane 中 Backspace 被忽略（#8442）
   - KKP 事件处理的 bug 较为集中，需要统一修复。

5. **扩展生态与可发现性**
   - npm search 索引问题（#7885）
   - `--exclude-extensions` 排除加载（#8431）
   - Loadout 管理中开关扩展（PR #7148）
   - 共享请求 ID hooks（#8380）
   - SQLite 记忆扩展（#8385）
   - 扩展上架时间疑问（#8461）
   - 扩展系统的灵活性和生态基础设施是持续关注焦点。

6. **TUI / 编辑器体验细节**
   - 双击选词包含 `/` 和 `-`（PR #8459）
   - 块级默认展开/折叠配置（#8448）
   - 模型选择器显示模型显示名（#8429）
   - 模型选择持久化作用域（#8376）
   - 滚动行为修复（#8484、PR #8485/#8486）

---

## 开发者关注点

从 Issue、PR 和 Discussion 的讨论中可以总结出开发者的高频痛点：

1. **Windows 平台问题最为突出**：路径分隔符导致“Path outside repository”误报（#8441）、ConPTY 光标漂移（#8484）、TUI 无响应乱码（#8434）、终端按键冲突（#8372）、Defender IO 拖慢启动（PR #8474）。多位维护者/贡献者正集中处理，但距离 Windows 一等公民仍有距离。

2. **上下文超限是长任务杀手**：auto-compaction 触发不及时，导致 API 层报错中断（#6879）；输出 token 上限后需要手动 continue（#8464）；压缩保留尾可能超限（#8498）。开发者期待“无人值守”的长跑任务能力。

3. **Kitty 键盘协议实现存在多处回归**：#7130（多删字符）与 #8442（不删字符）表现为两个极端，根源都是 KKP 事件解析与降级逻辑不完善，终端兼容性问题易引发信任危机。

4. **扩展发布流程不够顺畅**：npm search 不索引新包（#7885）+ 上架延迟（#8461），让开发者的发布体验打折，影响生态发展积极性。

5. **新模型接入诉求旺盛但存在重复**：DeepSeek Vision 两次提交（#8469、#8438）、MindsHub 同时有 Issue 和 PR（#8489、PR #8488），建议维护者考虑建立更高效的 provider 请求模板，减少重复劳动。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-08-23）

## 今日速览

今日 Qwen Code 发布 v0.22.0 正式版，并继续围绕 Review 安全与可观测性密集迭代：评审命令执行向容器化迁移（[#9723](https://github.com/QwenLM/qwen-code/pull/9723)）、Windows/macOS CI 通道修复（[#9728](https://github.com/QwenLM/qwen-code/pull/9728)），可信 agent runtime 的讨论也在升温。Web Shell 通过限制 transcript 保留与裁剪超大回放避免 OOM 崩溃（[#9303](https://github.com/QwenLM/qwen-code/pull/9303)）。

## 版本发布

- **v0.22.0**：正式版发布，仓库暂未附带详细 release notes。[Releases 页面](https://github.com/QwenLM/qwen-code/releases)
- **v0.21.14-nightly.20260822.7a4566cb3b**：主要包含两项变更：
  - `feat(review)`：评审循环无法收敛时，向作者说明具体原因（[#9461](https://github.com/QwenLM/qwen-code/pull/9461)）
  - `fix(ci)`：修复 CI fallback 逻辑（描述截断）

## 社区热点 Issues

1. **#8102 确定性工具执行边界：可信 agent runtime 提议**  
   提议将语言模型排除在信任边界之外，让运行时能够确定性约束、授权、观察和评估模型动作。目前已收到 17 条评论，是当前安全方向最核心的讨论。[链接](https://github.com/QwenLM/qwen-code/issues/8102)

2. **#9278 /review 发布时收敛建议的设计与实测记录**  
   完整记录评审循环“push → finding → fix → diff 变大”的失控回路，并提出 telemetry、诊断与发布面设计。9 条评论，反映社区对 review 循环收敛性的高度关注。[链接](https://github.com/QwenLM/qwen-code/issues/9278)

3. **#9556 是否继续以调用者身份执行代码**  
   针对 review 管线在 worktree 中已拥有调用者执行权限的现实，要求明确决策是否保留。8 条评论，是 review 容器化（[#9723](https://github.com/QwenLM/qwen-code/pull/9723)）背后的关键安全讨论。[链接](https://github.com/QwenLM/qwen-code/issues/9556)

4. **#9002 Python SDK 拒绝 `permission_mode="auto"`**  
   CLI 支持该值，但 SDK 客户端校验提前拒绝，导致 SDK 与 CLI 行为不一致。6 条评论，属于集成兼容性问题。[链接](https://github.com/QwenLM/qwen-code/issues/9002)

5. **#9198 长时间运行后 OOM，且 tmux 终端乱码**  
   服务器 1T 内存仍出现 OOM；之后 tmux 按键错乱、复制粘贴异常，且仅在 Qwen Code 出现。5 条评论，暴露长时会话内存与终端交互问题。[链接](https://github.com/QwenLM/qwen-code/issues/9198)

6. **#9573 恢复会话后工具结果丢失**  
   正常完成的工具调用在 `resume` 后显示 “Tool result missing from saved history”。P1 回归类 bug，4 条评论。[链接](https://github.com/QwenLM/qwen-code/issues/9573)

7. **#9699 依赖 CVE 审计在 2026-08-21 起每个 PR 都失败**  
   `npm audit` 报告 8 个漏洞（1 low、6 moderate、1 high），导致 security-checks 全红，阻塞所有 PR。4 条评论。[链接](https://github.com/QwenLM/qwen-code/issues/9699)

8. **#9733 循环检测误杀合法验证周期**  
   在 write-script → run → edit → re-run 这类状态推进序列上触发误报，终止无人值守回合且无法自动恢复。4 条评论，直接影响自动化稳定性。[链接](https://github.com/QwenLM/qwen-code/issues/9733)

9. **#9706 自动会话标题直接回显 prompt 示例**  
   多个无关会话都生成“Fix login button on mobile”，与标题 prompt 中的示例完全一致。4 条评论，暴露标题生成的 prompt 缺陷。[链接](https://github.com/QwenLM/qwen-code/issues/9706)

10. **#9752 ACP promptFile 不可读导致启动崩溃**  
    当 `promptFile` 指向目录时，存在性检查通过后同步读抛 `EISDIR`，绕过错误处理。3 条评论，属于新发现的启动崩溃问题。[链接](https://github.com/QwenLM/qwen-code/issues/9752)

## 重要 PR 进展

1. **#9728 修复 Windows 和 macOS 测试通道故障**  
   恢复两个平台 CI 通道，包含产品修复、测试夹具修复与 CI 脚手架修复，避免 `main` 持续红。[链接](https://github.com/QwenLM/qwen-code/pull/9728)

2. **#9723 评审执行命令放入容器边界**  
   将被评审仓库自身命令的执行放入容器，并将这一行为变为 operator 可配置策略，而非依赖本机环境。[链接](https://github.com/QwenLM/qwen-code/pull/9723)

3. **#9742 在 residue probe 中固定已验证的 git 身份**  
   修复 `worktreeResidue` 多次重复发现仓库导致身份漂移的问题，提升 review agent 链的可靠性。[链接](https://github.com/QwenLM/qwen-code/pull/9742)

4. **#9744 将 fix 引起的重新报告计为首次工作**  
   修正 review 首次数统计：携带旧 id 的修复后重新报告应算新工作，避免 carried id 掩盖真实收敛情况。[链接](https://github.com/QwenLM/qwen-code/pull/9744)

5. **#9735 Plan Mode 可声明额外只读 shell 命令**  
   新增 `permissions.planMode.extraReadOnlyCommands`，使项目特定 CLI 在 Plan Mode 下不再每次读取都触发审批。[链接](https://github.com/QwenLM/qwen-code/pull/9735)

6. **#9719 VS Code companion 默认采用 WebShell transcript 时间线**  
   通过 ACP 通知桥接共享 SDK transcript reducer，让 companion 复用 WebShell transcript 渲染器作为默认对话时间线。[链接](https://github.com/QwenLM/qwen-code/pull/9719)

7. **#9737 强制执行 CLI utils 叶子层依赖方向**  
   使 `packages/cli/src/utils/` 成为真正叶子层，机械阻止其反向依赖 `config`、`ui`、`i18n` 等模块，属于架构治理。[链接](https://github.com/QwenLM/qwen-code/pull/9737)

8. **#9492 循环检测对 task_list 轮询启用 result-aware**  
   对 `task_list` 这类有状态只读工具，相同参数不意味着相同结果，检测器不再仅凭参数判断循环。[链接](https://github.com/QwenLM/qwen-code/pull/9492)

9. **#9607 平衡的内联思考块降级而非失败**  
   在 OpenAI 兼容端点上，混合思考模型在 `reasoning_content` 后再输出平衡 `<think>` 块时，转换器不再报错，而是降级处理。[链接](https://github.com/QwenLM/qwen-code/pull/9607)

10. **#9568 CLI 横幅标记估算压缩 token 数**  
    在 `/compress`、`/compress-fast`、自动压缩等所有报告位置用 `~` 前缀标注本地估算值，提高信息透明度。[链接](https://github.com/QwenLM/qwen-code/pull/9568)

## 热门 Discussions

本期未提供 Discussions 数据，暂不展示。

## 功能需求趋势

- **Review 自动化与收敛治理**：从 [#9278](https://github.com/QwenLM/qwen-code/issues/9278)、[#9744](https://github.com/QwenLM/qwen-code/pull/9744) 看，社区正集中解决 review 循环失控、首次计数失真、发布时收敛建议等可观测性问题。
- **安全与最小权限执行**：[#8102](https://github.com/QwenLM/qwen-code/issues/8102)、[#9556](https://github.com/QwenLM/qwen-code/issues/9556)、[#9723](https://github.com/QwenLM/qwen-code/pull/9723) 共同指向“让运行时确定性约束/授权/观察模型动作”，评审执行已开始容器化。
- **长时会话与内存可靠性**：[#9198](https://github.com/QwenLM/qwen-code/issues/9198)、[#9573](https://github.com/QwenLM/qwen-code/issues/9573)、[#9733](https://github.com/QwenLM/qwen-code/issues/9733) 以及 Web Shell 的 OOM 修复，说明开发者对长时间运行稳定性诉求强烈。
- **IDE 与 WebShell 体验**：[#9719](https://github.com/QwenLM/qwen-code/pull/9719)、[#9743](https://github.com/QwenLM/qwen-code/issues/9743)、[#9465](https://github.com/QwenLM/qwen-code/issues/9465) 显示 VS Code 集成、拖放文件、WebShell 交互优化成为活跃需求。
- **Provider/API 兼容性**：[#9002](https://github.com/QwenLM/qwen-code/issues/9002)、[#9607](https://github.com/QwenLM/qwen-code/pull/9607)、[#9746](https://github.com/QwenLM/qwen-code/issues/9746) 涉及 SDK 权限模式、混合思考模型解析、新网关示例，社区希望更顺畅接入多种模型服务。
- **工程基础设施**：[#9728](https://github.com/QwenLM/qwen-code/pull/9728)、[#9699](https://github.com/QwenLM/qwen-code/issues/9699)、[#9737](https://github.com/QwenLM/qwen-code/pull/9737) 反映对平台 CI、依赖安全审计和模块边界治理的重视。

## 开发者关注点

- **OOM 与终端异常**：长跑一周后 OOM，且 tmux 输出乱码、无法正常复制粘贴（[#9198](https://github.com/QwenLM/qwen-code/issues/9198)）。
- **会话恢复可靠性**：恢复后工具结果丢失（[#9573](https://github.com/QwenLM/qwen-code/issues/9573)）；无人值守回合被循环检测误杀后无法自动恢复（[#9733](https://github.com/QwenLM/qwen-code/issues/9733)）。
- **CI 被安全审计阻塞**：所有 PR 的依赖 CVE 审计失败（[#9699](https://github.com/QwenLM/qwen-code/issues/9699)）。
- **SDK/CLI 行为不一致**：`permission_mode="auto"` 在 CLI 可用但被 SDK 拒绝（[#9002](https://github.com/QwenLM/qwen-code/issues/9002)）。
- **自动生成标题低质**：标题 prompt 中的示例被直接当会话标题使用（[#9706](https://github.com/QwenLM/qwen-code/issues/9706)）。
- **VS Code 插件交互问题**：选择框遮挡内容、无法查看完整输出（[#8617](https://github.com/QwenLM/qwen-code/issues/8617)）。
- **Web Shell 交互性能**：固定/取消固定会话响应慢且排序不稳定（[#9465](https://github.com/QwenLM/qwen-code/issues/9465)）。

</details>

<details>
<summary><strong>CodeWhale</strong> — <a href="https://github.com/Hmbown/CodeWhale">Hmbown/CodeWhale</a></summary>

# CodeWhale 社区动态日报（2026-08-23）

## 今日速览

今日 CodeWhale 无正式 Release，但 v0.9.11 RC 已进入准备阶段（PR #5542）。社区核心热度集中在 TUI crate 拆分（EPIC-005 / #5316）以及长会话监督与持久化审批链路（#5535、#5543）。另有多项重要 PR 推进，涉及 DeepSeek V4 北京周末计费修复、多文件 `read_lints` 支持和文档国际化改造。

## 版本发布

今日无正式新版本发布。  
当前值得关注的是 [PR #5542](https://github.com/Hmbown/CodeWhale/pull/5542)《release: prepare Codewhale v0.9.11》：正在基于 `main` 准备 v0.9.11 发布候选，并明确排除 `benchmarks/pi-agent-parity/**`，以保持 release lane 干净。

## 社区热点 Issues

过去 24 小时内更新 Issue 共 2 条，已全部列出。

### 1. [#5316 EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)](https://github.com/Hmbown/CodeWhale/issues/5316)
- 作者：aboimpinto
- 创建：2026-08-10 / 更新：2026-08-22
- 评论：12

**为什么重要**：这是 CodeWhale TUI crate 拆分的顶层 Umbrella Issue，后续所有子 EPIC、FEAT 和 PR 都会汇总到这里，是当前 TUI 架构演进的主跟踪项。  
**社区反应**：12 条评论说明跨子任务协调活跃，是本期社区协作密度最高的 Issue。

### 2. [#5543 Persist child tool approvals through the durable receipt path](https://github.com/Hmbown/CodeWhale/issues/5543)
- 作者：cyq1017
- 创建：2026-08-22 / 更新：2026-08-22
- 评论：0

**为什么重要**：子代理在等待父决策时，没有走 durable approval receipt 路径。`request_tool_approval` 在发出 `ApprovalRequired` 前会先提交 `Asked` receipt，但子代理等待路径未复用该机制，可能导致审批状态在长会话或异常恢复场景下不可靠。  
**社区反应**：刚提交，暂无评论，但这是监督与可靠性方向的关键补位。

## 重要 PR 进展

过去 24 小时内更新 PR 共 7 条，全部列出。

### 1. [#5545 fix(pricing): bill whole Beijing weekends off-peak for DeepSeek V4](https://github.com/Hmbown/CodeWhale/pull/5545)
- 作者：xyzs996

修复 DeepSeek V4 计费逻辑：当前 `deepseek_is_peak` 仅按 UTC 小时判断峰谷，但 DeepSeek 从 2026-08-23（北京时间周日）开始调整规则，北京时区周末全天按 off-peak 计费。该 PR 修正了跨时区周末计费问题。

### 2. [#5524 feat(tui): add multi-file read_lints operation](https://github.com/Hmbown/CodeWhale/pull/5524)
- 作者：wuisabel-gif

扩展现有模型可见的 `lsp` 工具，新增 `read_lints` 操作，支持一次读取多个 workspace 内文件的 lint 结果，并复用 `LspManager` 传输池，避免额外启动 language-server 生命周期。属于 #4070 已批准范围。

### 3. [#5544 feat(web): move docs/subagents and docs/mcp onto the dictionary spine (#5337)](https://github.com/Hmbown/CodeWhale/pull/5544)
- 作者：Lstarsky0

文档国际化改造的下一组：将 `docs/subagents` 和 `docs/mcp` 迁移到 dictionary spine。两个页面分别消除 16 个和 18 个 `isZh` 分支，并接入 `check-locales.mjs` 的 `OPTIONAL_FILES`，降低中文文档维护成本。

### 4. [#5525 refactor(tui): adopt command shapes in utility group (FEAT-018)](https://github.com/Hmbown/CodeWhale/pull/5525)
- 作者：aboimpinto

这是 EPIC-005 下 FEAT-018 的进展：将 TUI utility 命令组整体迁移到 FEAT-014/015 引入的外部 command shapes。7 个命令文件仍位于 `codewhale-tui` 内，但执行边界被统一，是 TUI 拆分与命令体系收敛的重要一步。

### 5. [#5542 release: prepare Codewhale v0.9.11](https://github.com/Hmbown/CodeWhale/pull/5542)
- 作者：Hmbown

v0.9.11 发布候选准备 PR。基于当前 `main`，并明确排除 `benchmarks/pi-agent-parity/**`，确保 benchmark 相关代码与 release lane 解耦。

### 6. [#1701 chore(deps): bump portable-pty to 0.9.0](https://github.com/Hmbown/CodeWhale/pull/1701)
- 作者：mvanhorn
- 状态：CLOSED

将 `portable-pty` 从 0.8.1 升级到 0.9.0，为 loongarch64 提供上游支持，并移除多余的 `nix 0.25.1` 传递依赖。该 PR 已关闭，但为架构兼容性扫清了依赖障碍。

### 7. [#5535 Supervised operation stack: lifecycle outbox, /relaunch, per-session control socket, and the goal-continuation quiet-period fix](https://github.com/Hmbown/CodeWhale/pull/5535)
- 作者：M-Maciej

一个 PR 包含五项相关变更，全部服务于长生命周期 CodeWhale 会话的机器可读监督：
- lifecycle event outbox：`turn_start` / `turn_end` / `turn_stalled` / `subagent_spawn` / `subagent_complete` / `session_*` 等事件，支持 JSONL + webhook
- `/relaunch` 命令
- per-session control socket
- goal-continuation quiet-period 修复

这是本期“监督与自动化运维”方向最集中的 PR。

## 热门 Discussions

本期未提供 Discussions 数据，故省略。

## 功能需求趋势

从本期 Issues 与 PR 中可以提炼出以下社区关注方向：

- **TUI 架构拆分与命令体系统一**：EPIC-005 持续作为主线，FEAT-018/014/015 推动命令执行形态收敛。
- **长会话可观测性与机器可读监督**：lifecycle outbox、webhook、per-session control socket 等能力说明社区正在向“可被外部系统监督的长时间运行会话”演进。
- **审批持久化与可靠性**：#5543 表明子代理审批链路需要复用 durable receipt 机制，避免状态丢失。
- **文档国际化与多语言架构**：#5544 继续推动 docs 从 `isZh` 分支转向 dictionary spine，降低中英文档同步成本。
- **语言服务器工具能力扩展**：#5524 的多文件 `read_lints` 说明模型可用的 LSP 工具正在从单文件向批量操作演进。
- **计费与区域策略适配**：#5545 显示 DeepSeek 等第三方模型的新计费规则需要更细粒度的时区/周末判断。
- **平台支持与依赖清理**：#1701 的 `portable-pty` 升级揭示了 loongarch64 等新架构支持需求。

## 开发者关注点

- **审批状态持久化路径不完整**：子代理等待父决策时未走 durable receipt 路径，是当前监督链路中的可靠性隐患。
- **TUI 命令组改造仍在进行**：utility group 尚未完全迁移到外部 command shapes，EPIC-005 仍有大量收尾工作。
- **文档多语言维护成本高**：多个 docs 页面仍存在 `isZh` 分支，开发者正通过 dictionary spine 逐步消除重复结构。
- **第三方计费规则变化快**：DeepSeek V4 北京周末 off-peak 规则表明，简单 UTC hour 判断已不够，需要时区与日期维度。
- **发布流程需要与 benchmark 解耦**：#5542 特意排除 `benchmarks/pi-agent-parity`，说明 release lane 需要避免被 benchmark 目录和依赖污染。
- **架构平台支持依赖上游库升级**：loongarch64 支持需要 `portable-pty` 0.9.0 这类基础依赖先行跟进。

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*