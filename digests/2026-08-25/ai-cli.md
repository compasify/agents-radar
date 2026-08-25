# AI CLI 工具社区动态日报 2026-08-25

> 生成时间: 2026-08-24 23:13 UTC | 覆盖工具: 9 个

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

# AI CLI 工具横向对比分析报告（2026-08-25）

## 1. 生态全景

AI CLI 工具社区呈现 **“多智能体协作深化”与“稳定性治理”并行** 的发展态势。一方面，Claude Code、OpenAI Codex、Gemini CLI 等头部工具对跨机器 Agent 协议、子代理可靠性及 Multi-Agent 架构的讨论热度居高不下；另一方面，Windows 平台崩溃、流式输出中断、上下文超限失控等基础稳定性问题成为跨工具普适痛点。各工具在安全与资源治理（环境变量剥离、内存上限、权限白名单）、成本可观测性（OTEL 指标、schema 成本估算）上开始系统性补课，**“让 Agent 可信、可控、可计量”** 成为取代单纯功能堆叠的新竞争焦点。同时，本地模型支持与多 Provider 兼容性（OpenCode、Pi、Qwen Code）在社区诉求中快速升温，显示出用户对“模型自由”的渴望。

---

## 2. 各工具活跃度对比

> 注：表格中 Issue/PR 数为当日摘要中“精选”列出的数量，非仓库全量；Discussions 未提供的工具标注 "未提供"。上游关闭 Issue/PR 的仓库标注 "N/A"。

| 工具 | Issues（精选） | PRs（精选） | Discussions | Releases | 活跃度判定 |
|---|---|---|---|---|---|
| **Claude Code** | 10（最高评论 50，最高👍 110） | 3 | 未提供 | 无 | 高（评论集中、需求长期未关闭） |
| **OpenAI Codex** | 10（最高评论 51，最高👍 51） | 10 | 4（Ideas/Q&A/Show&tell） | 3（含 1 稳定版） | 高（发布频繁、PR 合并快） |
| **Gemini CLI** | 10（最高评论 13，最高👍 8） | 10 | 未提供 | 1 nightly | 中高（P1 Bug 多、维护者响应快） |
| **GitHub Copilot CLI** | 10（最高评论 27，最高👍 27） | 1（垃圾 PR） | 未提供 | 1 补丁版 | 中（Issue 多但官方响应弱） |
| **OpenCode** | 10（最高评论 19，最高👍 15） | 10 | 未提供 | 1 稳定版 | 高（社区贡献活跃） |
| **Pi** | 10（最高评论 44，最高👍 19） | 10 | 2 | 1 稳定版 | 高（讨论深入、功能迭代快） |
| **Qwen Code** | 10（最高评论 12，最高👍 无） | 10 | 未提供 | 1 nightly | 中高（PR 密集但问题解决周期长） |
| **CodeWhale** | 10（最高评论 4） | 10 | 未提供 | 无（重构中） | 中（核心维护者主导，社区贡献者集中） |
| **DeepSeek Harness** | N/A | N/A | N/A | N/A | 低（24 小时无活动） |

**活跃度关键观察**
- **OpenAI Codex** 是唯一的“发布 + PR 双高”工具，单日 3 个版本、10+ 合并 PR，迭代速度领先。
- **Claude Code** 虽无新版本，但 Issue #80444（50 评论）与 #2254（110 👍）凸显社区存在感极强，属于“高讨论、低发布”的成熟期特征。
- **GitHub Copilot CLI** 与 **CodeWhale** 活跃度中等，前者受限于官方响应滞后，后者处于架构重构期，社区集中于维护者周边。

---

## 3. 共同关注的功能方向

### 3.1 多智能体协作与子代理可靠性
| 工具 | 具体诉求 |
|---|---|
| Claude Code | #28300 跨机器 Agent-to-Agent 协议（44 评论，半年未关） |
| OpenAI Codex | Multi-Agent V2 子级重载、父级所有权（#40464/#40477 已合并） |
| Gemini CLI | Subagent "假成功"（#22323）、通用 agent 挂起（#21409）、不主动使用 skills（#21968） |
| GitHub Copilot CLI | Agent "只确认不行动"（#4566） |
| Qwen Code | 队友消息在工具轮次边界送达（#9638） |
| CodeWhale | 子代理静默销毁（#5596）、git 命令被错误拦截（#5595） |

**核心信号**：子代理的**终止原因真实性**、**生命周期归属**、**跨进程通信**成为全行业共同工程难点。

### 3.2 上下文管理与记忆透明化
| 工具 | 具体诉求 |
|---|---|
| Claude Code | auto-memory 加载状态可见性（#82056）、规则语义触发（#87804） |
| OpenAI Codex | 自动压缩可感知（#21777）、分页历史丢失（#35746） |
| Gemini CLI | Auto Memory 无限重试（#26522）、敏感信息确定编辑（#26525） |
| OpenCode | 持久会话记忆（#16077）、上下文超限续传（#44798） |
| Pi | 压缩超限不触发（#6879，19👍）、摘要截断持久化（#7048） |
| Qwen Code | MCP 重连"假成功"（#9944） |

**核心信号**：用户不再接受“黑盒上下文”，要求 **Agent 能解释自己看到了什么**，同时**压缩/加载时机必须可预测、可控制**。

### 3.3 安全与权限精细化
| 工具 | 具体诉求 |
|---|---|
| GitHub Copilot CLI | 工具白名单（#1973，27👍） |
| Gemini CLI | Git 环境变量剥离（#29008）、脱敏一致性（#28938） |
| OpenAI Codex | 凭据代理配置加固（#40490）、配置迁移破坏 strict-config（#40339） |
| Qwen Code | permissions.allow 真正限制工具注册（#9829） |
| OpenCode | MCP OAuth 正确性（#44808） |
| Pi | 本地模型 API key 困惑（#8563） |

**核心信号**：安全机制从“事后修复”转向“**事前默认防御**”，尤其关注 git 环境变量注入、配置迁移破坏性、新用户配置引导。

### 3.4 Windows 平台体验补强
| 工具 | 具体诉求 |
|---|---|
| Claude Code | NVIDIA GPU 崩溃（#80444，50 评论）、Intel 核显崩溃（#83028） |
| OpenAI Codex | WSL 终端静默失败（#37104）、Windows 沙箱 ACL（#40475） |
| GitHub Copilot CLI | VS Code 插件安装失败（#4570） |
| Pi | Windows 生态摸底（#7547，44 评论）、PowerShell 工具引入（v0.84.3） |
| Qwen Code | WebShell 切换回归（#9911） |

**核心信号**：Windows 从“能用”向“好用”迈进，但 GPU 崩溃、静默失败、文件占用冲突等基础问题仍是信任杀手。

### 3.5 成本可观测性与资源限制
| 工具 | 具体诉求 |
|---|---|
| OpenAI Codex | OTEL 单轮成本指标（#40488）、根 turn ID 关联（#40486） |
| GitHub Copilot CLI | subagent OTel span 缺计费属性（#4224）、token 显示（#4589） |
| CodeWhale | 工具/MCP schema 成本展示（#5553→#5603） |
| Claude Code | ugrep 无内存限制耗尽 13.6GB（#86238） |
| Gemini CLI | 128+ 工具 400 错误（#24246） |

**核心信号**：企业级用户要求“**每一分钱都能追溯**”，资源上限缺失被视为稳定性/安全隐患。

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线 |
|---|---|---|---|
| **Claude Code** | 企业级 Agent 系统集成者 | 深度使用 Claude 模型的 Pro/Enterprise 开发者 | 规则/记忆/技能三件套 + 网关部署（AWS/GCP），IDE 深度绑定 |
| **OpenAI Codex** | OpenAI 原生多智能体旗舰 | ChatGPT 付费用户、API 重度开发者 | Multi-Agent V2 架构，与 ChatGPT 认证、Bedrock/Mantle 云服务强绑定 |
| **Gemini CLI** | 安全优先的通用 agent 框架 | Google Cloud 生态开发者、对隐私敏感的用户 | 依托 Gemini 模型，强调整体 agent 安全（git 注入）、A2A 协议、本地模型支持 |
| **GitHub Copilot CLI** | GitHub 工作流内嵌副驾驶 | GitHub Copilot 用户、Code Review 场景 | 与 Copilot 云服务、OTel 可观测性、MCP 集成，侧重稳定性与治理 |
| **OpenCode** | 开源、多 Provider 自由的社区驱动 CLI | 技术爱好者、希望掌控模型选择的开发者 | 兼容 OpenAI/Anthropic/本地/小众 Provider，社区 Feature 驱动，关注本地模型与 MCP OAuth |
| **Pi** | 本地优先、高度可定制的 agent 运行环境 | 隐私敏感用户、自托管/本地模型（llama.cpp）爱好者 | 原生支持本地模型，插件机制 + PowerShell 工具，Windows 支持激进，强调“数据不出机器” |
| **Qwen Code** | 阿里生态多模型代码助手 | 使用 Qwen 模型、VS Code 用户、亚太市场 | WebShell 内嵌 VS Code、/review 审查体系、Agent Team 协作，多提供商适配（DeepSeek/Kimi/GLM） |
| **CodeWhale** | 底层架构治理驱动的企业级 Agent | 对内部代码质量/可维护性有高要求的技术团队 | Rust 代码库重构（0.9.12），Provider 中立性审计、子代理生命周期管理、监督操作套接字 |

**一句话总结**：Claude Code 卖“深度集成”，OpenAI Codex 卖“原生多智能体”，Gemini CLI 卖“安全与隐私”，Copilot CLI 卖“GitHub 生态”，OpenCode 卖“自由”，Pi 卖“本地控制”，Qwen Code 卖“多模型 + 审查”，CodeWhale 卖“可治理的底层架构”。

---

## 5. 社区热度与成熟度

### 5.1 社区热度梯队

| 梯队 | 工具 | 特征 |
|---|---|---|
| **高活跃 · 成熟期** | Claude Code、OpenAI Codex | 大量长期 Issue（44~51 评论）、高👍功能请求（110）、频繁版本发布、PR 合并快速 |
| **高活跃 · 快速迭代期** | Gemini CLI、OpenCode、Pi、Qwen Code | 每日 1+ nightly/稳定版、10+ PR、P1 Bug 密集（Gemini 尤其多），问题发现快、修复节奏快但稳定性波动 |
| **中活跃 · 响应分化期** | GitHub Copilot CLI、CodeWhale | 社区反馈多（Copilot 400 错误 27 评论），但官方响应滞后或集中于维护者自身（CodeWhale 核心成员提交占 >50%） |
| **低活跃** | DeepSeek Harness | 24 小时无活动，处于暂停维护状态 |

### 5.2 成熟度评判

- **Claude Code**：社区诉求已从“加功能”转向“完善现有功能”（禁用横幅、记忆透明度、VFS 支持），且长时间未关闭的 Issue 多，属于饱和期的“精装修”阶段。
- **OpenAI Codex**：虽活跃，但 **“静默发布”**（无变更说明）与认证类高频 Bug（#39162）暴露了发布流程的年轻化。
- **Gemini CLI**：维护者响应积极（带 🔒 标签 + need-retesting），但子代理“假成功”等 P1 问题说明 agent 调度核心尚不稳定。
- **Pi / OpenCode**：社区形态健康（讨论、Show&tell、benchmark 需求），处于“功能正确性打磨”向“生态建设”过渡期。
- **Qwen Code**：PR 数量多但流式稳定性（#5975，120 秒超时）两月未解，反映工程资源可能分散在多个新功能上。

---

## 6. 值得关注的趋势信号

### 6.1 “假成功”是 AI 工具的信任底线
Gemini CLI 的“MAX_TURNS 隐藏为 GOAL 成功”、Qwen Code 的“MCP 重连报告成功但工具不可用”、Pi 的“中止回合误报 error”、CodeWhale 的“子代理静默销毁”——**多个工具同时出现“状态报告与实际不符”**的 Bug。这标志着行业共识：**Agent 的可信度 > 功能丰富度**。开发者选型时，应优先考察工具对中断、失败、降级状态的诚实性。

### 6.2 多智能体协作进入“工程可靠性”下半场
跨机器 A2A 协议（Claude Code）、子代理所有权强制（OpenAI Codex）、父子重载权威配置（OpenAI Codex）、队友消息送达时机（Qwen Code）等 PR/Issue 显示，**多 Agent 已从“demo 概念”进入“基础设施级调试”**。其中 **“父级权威配置”** 与 **“子代理生命周期归属”** 是当前最大的技术债务点，也是企业落地多 Agent 工作流的必解之题。

### 6.3 上下文管理：从“定长”到“语义感知”
- **压缩触发**：Pi 的 “context 超 100% 仍不压缩” 与 OpenCode 的 “上下文触顶无续传” 指向同一需求——**压缩时机应由 Agent 感知**（如 OpenAI Codex #21777）。
- **规则加载**：Claude Code 提议的“主题触发规则”（#87804）与 Gemini 的“自动记忆低信号循环”共同推动规则/记忆系统从“文件路径匹配”进化为“**语义级触发**”。
- **用户价值**：长会话可用性 + token 成本控制将直接决定工具的日常使用体验。

### 6.4 成本可观测性成为企业采纳的硬门槛
OpenAI Codex 合并 OTEL 成本指标、CodeWhale UI 展示 schema 成本、Copilot CLI 用户要求补计费属性——**企业用户需要回答老板“每一轮对话花了多少钱”**。未来，**成本仪表盘、单 turn 费用追溯、按 project/team 的预算拆分** 可能成为 AI CLI 的标配。

### 6.5 安全左移：默认不信任
Gemini CLI 剥离全部 GIT_* 环境变量、Qwen Code 让 permissions.allow 真正限制工具注册、OpenAI Codex 加固凭据代理配置、Copilot CLI 用户请求工具白名单——**“默认最小权限”成为安全共识**。尤其是 **git 环境变量注入**（恶意仓库可通过 .env 劫持 GIT_SSH_COMMAND/GIT_DIR）被多个工具视为高危，开发者应主动检查所用工具是否已内置此类防护。

### 6.6 本地模型支持从“尝试”走向“必须”
Pi 对 llama.cpp 的深入支持、OpenCode 为 Qwen 4B 引入能力分级、Qwen Code 适配开源 Mem0、以及多工具对 DeepSeek/Kimi 等国产模型的兼容——**用户不再接受“绑死单一模型”**。采用本地/小模型的核心诉求是：隐私、成本、离线可用。工具若想扩大用户基数，**Provider 中立性**与**小模型适配**必须前置设计。

### 6.7 Windows 支持是打开企业市场的钥匙
尽管 macOS 仍是开发者主流，但 **Windows 相关 Issue 在 Claude Code、OpenAI Codex、Copilot CLI、Pi 中同时激增**，且多为“静默失败”“崩溃后无法恢复”等致命问题。企业内 Windows 开发者占比高，**谁能率先解决 Windows 稳定性，谁就能在未充分竞争的市场中建立壁垒**。

---

## 附：对技术决策者的行动建议

1. **选型时先查“失败报告”**：重点查看各工具的子代理终止原因处理、MCP 重连状态同步、压缩触发机制，而不是只比较功能列表。
2. **关注配置迁移逻辑**：OpenAI Codex #40339 教训——自动迁移可能生成破坏 strict 校验的配置。升级前务必在 staging 环境验证。
3. **成本治理优先**：优先选择已提供 OTEL 指标或成本展示的工具（如 OpenAI Codex、CodeWhale），为后续容量规划留出数据基础。
4. **Windows 团队慎用早期版本**：Claude Code 桌面端 GPU 崩溃、Copilot CLI 插件安装冲突均为高频问题，建议等待 hotfix 或寻找 workaround 后再推广。
5. **多智能体场景从单一工具起步**：跨工具 A2A 协议尚未标准化（Claude Code 仍处请求阶段），现阶段应在同一工具内实现 agent 协作，避免过早引入多个 CLI 产品。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据截止：2026-08-25 · 来源：github.com/anthropics/skills**

---

## 1. 热门 Skills 排行

以下按社区讨论热度排序（榜单前 20 均为 OPEN 状态）。

**🥇 #1298 — skill-creator 评估管线修复** `[OPEN]`
修复 `run_eval.py` 对所有 skill 描述恒定报告 `recall=0%` 的严重缺陷——描述优化循环实际上在"对噪声做优化"。社区围绕同一问题有 10+ 独立复现（关联 Issue #556），当前讨论度最高的 PR；同时解决 Windows 流读取、触发检测与并行 worker 问题。
🔗 https://github.com/anthropics/skills/pull/1298

**🥈 #514 — document-typography 排版质检 Skill** `[OPEN]`
新增面向 AI 生成文档的排版质检能力：孤字换行（1-6 词溢出到下一行）、标题孤行、编号错位三大高频问题。讨论焦点：这些问题影响 Claude 生成的每一份文档，用户极少主动要求，需要 Skill 主动兜底。
🔗 https://github.com/anthropics/skills/pull/514

**🥉 #1615 — scnet-hpc 高性能计算 Skill** `[OPEN]`
通过 profile-based SSH 与 Slurm 工作流操作 SCNet HPC 集群，覆盖集群发现、作业生成、分区/内存/模块/加速器配置。8 月下旬创建后迅速升至讨论榜前三，反映 HPC 垂直场景的真实需求。
🔗 https://github.com/anthropics/skills/pull/1615

**#486 — ODT 文档 Skill** `[OPEN]`
补全 OpenDocument 格式拼图：`.odt/.ods` 的创建、模板填充、读取与 ODT→HTML 转换，填补官方文档 skills 中 docx/pdf 之外的格式空白。
🔗 https://github.com/anthropics/skills/pull/486

**#210 — frontend-design Skill 可执行性改造** `[OPEN]`
重写 frontend-design 指令，确保每条指引 Claude 都能在单次对话中实际执行，提升具体性与内部一致性。讨论聚焦"Skill 写作质量"这一元问题（与 Issue #202 同源）。
🔗 https://github.com/anthropics/skills/pull/210

**#1628 — Hivemind 零成本多智能体编排** `[OPEN]`
将机械性工作委托给运行免费模型的 headless opencode worker，Claude Code 仅保留规划/审查/合并角色。核心论点是"稀缺资源是昂贵模型的上下文，而非智能"。踩中多智能体 + 成本优化风口，热度上升最快。
🔗 https://github.com/anthropics/skills/pull/1628

**#1367 — self-audit 交付质量门禁 Skill** `[OPEN]`
先做机械性输出文件验证，再按损害严重度执行四维推理审计（已迭代至 v1.3.0），与 Issue #1385 的质量门禁管线提案呼应，体现社区对交付质量系统化的追求。
🔗 https://github.com/anthropics/skills/pull/1367

**#723 — testing-patterns 测试模式 Skill** `[OPEN]`
系统化覆盖测试全栈：Testing Trophy 模型、单元测试 AAA 模式、React 组件测试（Testing Library/Queries）等，是测试生成方向呼声最高的提案。
🔗 https://github.com/anthropics/skills/pull/723

> **观察**：Top 20 全部为 OPEN，未见 merged PR。官方评审/合入节奏偏慢，是社区隐含的持续摩擦点。

---

## 2. 社区需求趋势

从 Issues 提炼的五大方向：

**① 安全与信任治理**（#492，43 评论，全仓最高）
社区技能在 `anthropic/` 命名空间下分发，构成信任边界滥用漏洞——用户可能将社区技能误认为官方技能并授予高权限。这是当前最尖锐的生态治理议题。
🔗 https://github.com/anthropics/skills/issues/492

**② 组织级共享与企业落地**（#228，16 评论 / 8👍 全仓最高赞）
企业希望在 Claude.ai 内直接组织级共享 Skills，取代"下载 .skill 文件 → Slack/Teams 传输 → 手动上传"的低效链路。这是企业采用的核心阻塞点。
🔗 https://github.com/anthropics/skills/issues/228

**③ 工具链可靠性**（#556，12 评论 / 7👍；#202，8 评论）
skill-creator 评估脚本触发率为 0%，描述优化闭环失效；skill-creator 本身被批"像开发文档而非可操作 Skill"。开发者工具质量成为社区显著诉求。
🔗 https://github.com/anthropics/skills/issues/556

**④ 上下文与记忆压缩**（#1329，9 评论）
compact-memory 提案：以符号化记法替代长篇幅散文式 agent 记忆，为长时运行 agent 节省上下文，与 #1628 Hivemind 的成本优化诉求一脉相承。
🔗 https://github.com/anthropics/skills/issues/1329

**⑤ 平台互操作与去重**
#16 将 Skills 暴露为 MCP 以统一工具协议；#29 询问 AWS Bedrock 支持；#189 指出 document-skills 与 example-skills 插件内容重复导致上下文浪费（9👍）。
🔗 https://github.com/anthropics/skills/issues/16

---

## 3. 高潜力待合并 Skills

| PR | Skill | 落地潜力分析 |
|---|---|---|
| #514 | document-typography | 解决全量文档生成痛点、逻辑独立、讨论充分，合并概率最高 |
| #486 | odt | 与既有 docx/pdf 天然互补，格式拼图完整性强 |
| #723 | testing-patterns | 测试方向需求量大，实用型集合，评审成本可控 |
| #1367 | self-audit | 已迭代至 v1.3.0，与官方质量治理方向契合 |
| #1628 | Hivemind | 话题热度高但涉及外部工作进程，需更长安全评审；若落地将成为标志性 Skill |
| #83 | skill-quality / skill-security analyzer | 元技能，直接回应 #492 安全议题，可能被纳入官方治理体系 |

此外，一批低风险小型修复 PR（#538/#541/#539 大小写敏感与 ID 冲突修复、#1099/#1050 Windows 兼容修复）已获关注，合入门槛低，预计近期陆续落地。
🔗 https://github.com/anthropics/skills/pull/538 · https://github.com/anthropics/skills/pull/1099

---

## 4. Skills 生态洞察

**社区最集中的诉求是"可信、可靠、可扩展"三位一体：既要修复评估管线失灵（#556/#1298）与命名空间信任滥用（#492）两大根基问题，又期待文档处理、测试生成、质量审计、企业共享等方向持续扩充 Skill 版图——同时要求官方加快评审合入节奏。**

---

# Claude Code 社区动态日报 — 2026-08-25

## 今日速览

昨日无新版本发布，社区焦点集中在两类问题上：一是 **Windows 桌面应用 GPU 崩溃**持续占据 Issue 热度榜首（#80444 已达 50 条评论）；二是 **v2.1.242 在 Linux 上启动即崩溃**的严重回归问题（#89334）刚被报告，已获 3 个 👍 和 `regression` 标签。功能需求方面，**跨机器多智能体协作**（#28300，44 条评论）仍是社区最希望落地的方向。

---

## 社区热点 Issues

### 1. [Windows] 桌面应用 GPU 进程致命崩溃，MSIX 包无法启动 (#80444)
- **链接**: https://github.com/anthropics/claude-code/issues/80444
- **标签**: `area:desktop` | **状态**: OPEN | **评论**: 50 | **👍**: 6
- **要点**: 桌面应用 1.24012.1 在内置浏览器标签页中触发 GPU 进程崩溃（0x060C201E），崩溃后 MSIX 包处于 `appxState=2`，只能通过 Repair 恢复。RTX 2080 上两个驱动版本均复现。
- **为什么重要**: 评论数全场最高，涉及应用完全不可用且恢复成本高，Windows 用户受影响面大。

### 2. [FEATURE] 跨机器多智能体协作（Agent-to-Agent 协议）(#28300)
- **链接**: https://github.com/anthropics/claude-code/issues/28300
- **标签**: `enhancement`, `area:agents` | **状态**: OPEN | **评论**: 44 | **👍**: 0
- **要点**: 请求为多智能体协作引入跨机器的 Agent-to-Agent 协议，让不同主机上的 agent 可以互相通信与协调。
- **为什么重要**: 评论数第二，持续半年热度不减，反映企业对分布式自动化编排的强烈需求。

### 3. 建议：禁用欢迎横幅（welcome banner）(#2254)
- **链接**: https://github.com/anthropics/claude-code/issues/2254
- **标签**: `enhancement`, `area:tui` | **状态**: OPEN | **评论**: 43 | **👍**: 110
- **要点**: 用户希望 TUI 启动时不再显示欢迎页和技巧提示，避免每次占用终端空间。
- **为什么重要**: 👍 数全场最高（110），长时间未关闭，是 CLI 体验中最集中的"小痛点"。

### 4. 会话无法确认 auto-memory 索引的加载状态（完整/截断/未加载）(#82056)
- **链接**: https://github.com/anthropics/claude-code/issues/82056
- **状态**: OPEN | **评论**: 23 | **👍**: 1
- **要点**: 用户希望在会话内了解 `MEMORY.md` 和分主题记忆文件实际加载了多少——是完全加载、截断还是根本没加载。
- **为什么重要**: 记忆系统的黑盒状态直接影响 agent 行为可靠性，是重度用户的信任问题。

### 5. [Claude Desktop] 按项目分组后，"按最近使用排序"无效 (#56060)
- **链接**: https://github.com/anthropics/claude-code/issues/56060
- **标签**: `area:desktop` | **状态**: OPEN | **评论**: 15 | **👍**: 13
- **要点**: 当 Group by 设为 Project 时，Sort by Recency 不生效，会话列表顺序混乱。
- **为什么重要**: 👍 数在 Issue 中较高（13），桌面端信息架构的基础交互缺陷，影响日常使用效率。

### 6. [Windows] Intel 核显下浏览器面板崩溃，无任何 workaround (#83028)
- **链接**: https://github.com/anthropics/claude-code/issues/83028
- **标签**: `bug`, `area:desktop` | **状态**: OPEN | **评论**: 13 | **👍**: 0
- **要点**: 与 #80444 同属 GPU 崩溃系列，但发生在 Intel 集成显卡上，说明问题不是 NVIDIA 特例，而是 Electron/GPU 层的通病。
- **为什么重要**: 与 #80444 叠加，显示桌面端 GPU 崩溃是一个系统性多硬件覆盖问题，需要官方优先修复。

### 7. `/feedback` 连续 3 天返回 403，内置反馈通道失效 (#55348)
- **链接**: https://github.com/anthropics/claude-code/issues/55348
- **标签**: `bug`, `platform:macos`, `area:cli` | **状态**: OPEN | **评论**: 7 | **👍**: 3
- **要点**: CLI 内 `/feedback` 提交时报 403，用户无法通过内置流程反馈 bug，只能绕道 GitHub。
- **为什么重要**: 反馈通道的可靠性对产品质量闭环至关重要，长时间失效会损失大量用户诊断信息。

### 8. [FEATURE] 为 `.claude/rules/` 增加"主题触发"条件 (#87804)
- **链接**: https://github.com/anthropics/claude-code/issues/87804
- **标签**: `enhancement`, `area:core` | **状态**: OPEN | **评论**: 6 | **👍**: 0
- **要点**: 目前 `paths:` 只能按文件路径加载规则，缺少按对话主题/提示词语义触发规则的能力。
- **为什么重要**: 这是规则引擎从"文件级"进化到"语义级"的关键缺口，涉及规则、记忆、技能三者的触发机制统一。

### 9. 内置 ugrep 无内存/超时限制，一次正则消耗 13.6 GB (#86238)
- **链接**: https://github.com/anthropics/claude-code/issues/86238
- **标签**: 无标签 | **状态**: OPEN | **评论**: 4 | **👍**: 2
- **要点**: Grep 工具以 `argv[0]="ugrep"` 重新执行自身，但未设置 `RLIMIT_AS`、`RLIMIT_CPU` 或墙钟超时。模型生成的病态正则吃掉了 13.6 GB 内存导致主机 thrash。
- **为什么重要**: 资源限制缺失不只是性能问题，而是能让整机卡死的稳定性/安全隐患。

### 10. [Linux 回归] v2.1.242 每次启动即段错误，`--version` 也不例外 (#89334)
- **链接**: https://github.com/anthropics/claude-code/issues/89334
- **标签**: `bug`, `has repro`, `platform:linux`, `area:packaging`, `regression` | **状态**: OPEN | **评论**: 1 | **👍**: 3
- **要点**: 2.1.242 是首个将 mimalloc 导出为版本化 glibc 分配器符号的构建，导致 `newlocale` 在 main 之前调用 `free(NULL)` 时崩溃。v2.1.241 不受影响。
- **为什么重要**: 昨天（8/24）刚报告的新回归，严重度极高——所有 Linux x64 原生安装完全不可用，社区正在等待 hotfix。

---

## 重要 PR 进展

> 注：过去 24 小时仅 3 个 PR 有更新，全部列出。

### 1. AWS 上的 Claude apps gateway 部署示例资产 (#79898)
- **链接**: https://github.com/anthropics/claude-code/pull/79898
- **状态**: CLOSED | **👍**: 0
- **内容**: 新增 `examples/gateway/aws/` 部署资产，配合 Amazon Bedrock 部署 Claude apps gateway，与现有 GCP 示例并列。该 PR 被关闭，但文档链接 `code.claude.com/docs/en/claude-apps-gateway-on-aws` 即将上线。
- **分析**: 官方持续补齐网关的云厂商部署参考，AWS 用户部署路径将更标准化。

### 2. 新增 pylint 工作流 (#83890)
- **链接**: https://github.com/anthropics/claude-code/pull/83890
- **状态**: OPEN | **👍**: 0
- **内容**: 添加 `pylint.yml` GitHub Actions 工作流，用于 Python 代码静态检查。
- **分析**: 社区贡献的 CI 质量改进，目前仍未合入，官方尚未表态。

### 3. 文档：澄清插件 MCP 配置作用域 (#75252)
- **链接**: https://github.com/anthropics/claude-code/pull/75252
- **状态**: CLOSED | **👍**: 0
- **内容**: 从已删除 fork 重建的文档 PR，明确插件内 `mcpServers` 配置仅作用于插件自带 MCP server，与用户级 `~/.claude.json` 中的 MCP 允许/拒绝列表是两套独立体系。
- **分析**: "被删除 fork 重建"暗示该澄清有真实需求，文档合入有助于减少插件 MCP 配置混淆。

---

## 功能需求趋势

从全部 Issues 中提炼的社区最关注方向：

| 方向 | 代表 Issue | 热度信号 |
|------|-----------|---------|
| **多智能体 / Agent 协议** | #28300 跨机器协作 | 44 评论，6 个月未关闭 |
| **规则/记忆的语义触发** | #87804 prompt-topic 触发规则；#82056 记忆加载透明化 | 与规则引擎、auto-memory 强相关 |
| **TUI/UX 精简** | #2254 禁用欢迎横幅 | 110 👍，全场最高 |
| **虚拟文件系统支持** | #83696 GitHub VFS（vscode-vfs://） | 社区尝试在 VFS 工作区使用但崩溃/失败 |
| **跨会话消息稳定寻址** | #89338 peer sockets 在 resume 后失效 | 新鲜 Issue（8/24 创建） |
| **资源使用可治理** | #86238 ugrep 无内存限制；#73681 插件/技能启动时自更新 | 稳定性 + 省 token 诉求 |

**观察**：最热门的讨论集中在"**让 agent 系统更加自主与可扩展**"——跨机器协作、语义级规则触发、跨会话寻址都是这一主题的子方向。与此同时，"**现有功能的基本体验完善**"（欢迎横幅、记忆透明度、VFS 支持）也积累了大量 👍。

---

## 开发者关注点

1. **Windows 桌面稳定性是当前最大信任危机**
   - #80444（NVIDIA GPU 崩溃，50 评论）与 #83028（Intel GPU 崩溃，13 评论）叠加，覆盖了主流 GPU 厂商；且崩溃后 MSIX 包无法启动，只能 Repair。开发者反馈中"无 workaround"是高频词。

2. **回归质量被放大检视**
   - v2.1.242 的 mimalloc 符号导出导致 Linux 全量段错误（#89334），上传当天就有人报，说明原生安装用户反馈链路很灵敏；#82419 还提到 88MB 的 orchestrator transcript 会让 Dispatch 永久不可恢复。社区对"发布即崩"的容忍度在下降。

3. **资源上限缺失被反复提起**
   - #86238 显示模型生成的单条正则即可耗尽主机内存，这与沙箱/资源治理整体缺失相关。开发者期望至少具备 `RLIMIT_AS`、`RLIMIT_CPU` 和墙钟超时 的默认保护。

4. **反馈闭环不畅引发次生抱怨**
   - #55348 中 `/feedback` 403 连续 3 天，且 #68939 提到此前 /bug 标题生成曾用模型拒绝文本，双问题叠加削弱了用户对反馈渠道的信任。

5. **记忆与上下文透明度成为可信 AI 编码助手的基础要求**
   - #82056（auto-memory 加载状态不可见）是这一类中最受关注的 Issue——用户需要知道"agent 看到的世界"到底是什么样，才能判断它的行为是否可靠。

---

*数据窗口：2026-08-24 全天更新；下一次日报将于 2026-08-26 发布。*
*数据来源：github.com/anthropics/claude-code issues 与 pull requests*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-08-25

## 今日速览

昨日 Codex 发布了 3 个新版本（含 `rust-v0.149.1` 稳定版与 `rust-v0.150.0-alpha.8` 预览版），但均无详细变更说明。社区讨论焦点集中在 macOS 桌面端打开旧会话导致 ChatGPT 认证失效（#39162，51 条评论）与 `gpt-5.6-luna` 模型被误标记为 MultiAgent V1 导致 V2 拒绝调用（#35097，29 条评论）两个高热度 Bug。PR 侧则有大量由 `copyberry[bot]` 提交的安全加固与 Multi-Agent V2 架构改进合并。

---

## 版本发布

| 版本 | 类型 | 说明 |
|---|---|---|
| [rust-v0.149.1](https://github.com/openai/codex/releases/tag/rust-v0.149.1) | 稳定版 | 发布说明为空；完整变更见 [Changelog](https://github.com/openai/codex/compare/rust-v0.149.0...rust-v0.149.1) |
| [rust-v0.150.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.8) | 预发布 | 无说明 |
| [rust-v0.149.0-alpha.4.3](https://github.com/openai/codex/releases/tag/rust-v0.149.0-alpha.4.3) | 预发布 | 无说明 |

**点评**：三个版本中只有 `rust-v0.149.1` 给出了 Changelog 对比链接，但具体内容未披露，社区对「静默发布」的模式反馈一般。

---

## 社区热点 Issues（精选 10 个）

1. **[#39162 — macOS 打开已有会话使 ChatGPT 认证失效并跳转登录页](https://github.com/openai/codex/issues/39162)** · 51 评论 / 31 👍
   影响面极大：在 macOS arm64 上从 26.810 升级到 26.814 后，点击任意历史会话会触发认证失效。评论中多位用户确认复现，可能是桌面端 auth token 轮换逻辑在会话恢复时被错误触发。

2. **[#35097 — gpt-5.6-luna 被标记为 MultiAgent V1，V2 spawn_agent 拒绝调用](https://github.com/openai/codex/issues/35097)** · 29 评论 / 51 👍
   模型元数据标记错误导致新架构无法正常使用该模型，开发者被迫在 V1/V2 之间切换。点赞数高说明影响大量 Pro/API 用户。

3. **[#35746 — 分页历史丢弃有效 rollout 记录并复用序号](https://github.com/openai/codex/issues/35746)** · 25 评论 / 1 👍
   会话分页加载时 `RolloutLine` 解码不一致，导致部分历史记录显示错误或丢失。虽然赞数不高，但评论多说明讨论深入、社区验证充分。

4. **[#37104 — Windows/WSL 集成终端静默失败，侧栏无法打开](https://github.com/openai/codex/issues/37104)** · 19 评论 / 9 👍
   微软商店版在 WSL 环境下 PTY 启动前就静默退出，且无任何错误提示。Papercuts 2026 标签说明官方已关注 Windows 体验改进。

5. **[#17354 — 桌面端线程历史被清空，CLI 中仍存在](https://github.com/openai/codex/issues/17354)** · 14 评论 / 7 👍
   已持续 4 个月未修复：应用升级后侧边栏历史消失，但本地 `~/.codex` 数据仍在。与 #26157、#33771 类似，说明桌面端历史持久化存在系统性问题。

6. **[#37996 — 响应完成前流意外断开](https://github.com/openai/codex/issues/37996)** · 10 评论 / 2 👍
   Linux 桌面版在处理长请求时流中断，无重试机制，用户需手动重发，影响长任务使用。

7. **[#21777 — 自动压缩：将压缩行为暴露给 Agent](https://github.com/openai/codex/issues/21777)** · 9 评论 / 9 👍
   功能请求：当前 Agent 在上下文快满时会盲目触发压缩，希望 agent 能感知压缩行为，合理安排文件读取顺序，减少无效压缩。

8. **[#33266 — MCP tools/list_changed 通知未使延迟工具缓存失效](https://github.com/openai/codex/issues/33266)** · 5 评论 / 4 👍
   MCP 服务器动态增删工具时，CLI 因缓存不刷新而无法发现新工具。对 MCP 重度用户影响较大，已给出可复现的 MCP server 示例。

9. **[#40339 — config.toml 迁移生成不兼容 strict-config 的权限块](https://github.com/openai/codex/issues/40339)** · 5 评论 / 0 👍
   新近出现：自动迁移生成的 `default_permissions = "protect-env"` 导致 `--strict-config` 解析失败，同时 `sandbox_workspace_write.network_access` 被静默忽略。配置校验与迁移逻辑需要一致化。

10. **[#38841 — macOS 上 SkyComputerUseService 无限重启导致应用约 2 分钟崩溃](https://github.com/openai/codex/issues/38841)** · 4 评论 / 3 👍
    Computer Use 辅助进程连接丢失后无退避机制，死循环崩溃。虽是较新的报告，但崩溃级影响 + 明确的技术归因（`onServiceConnectionLost` 无失败计数），值得关注。

---

## 重要 PR 进展（精选 10 个）

1. **[#40494 — 从 TUI 路由中隐藏临时系统线程](https://github.com/openai/codex/pull/40494)**（Open）
   过滤 `thread/started` 通知中 `feature_source = system` 的临时线程，防止隐藏的辅助线程干扰 TUI 路由和 agents 概览刷新。

2. **[#40477 — 通过父级重新加载 Multi-Agent V2 子级](https://github.com/openai/codex/pull/40477)**（已合并）
   修复 MAV2 子级直接恢复时用调用方配置而非父级权威配置重建的问题，统一通过父级路由子级重载。

3. **[#40464 — 在 app-server 输入上强制子代理所有权](https://github.com/openai/codex/pull/40464)**（已合并）
   中央化子代理所有权检查，阻止 app-server 端点（如 turn 注入、审批）越权操作非父级拥有的子代理。

4. **[#40481 — 为 Amazon Bedrock 支持托管 AWS 访问密钥](https://github.com/openai/codex/pull/40481)**（已合并）
   新增实验性 `amazonBedrockAccessKeys` 登录流程，凭据存入 auth store，用于 SigV4 签名 Bedrock 请求。

5. **[#40490 — 凭据代理激活时加固项目配置](https://github.com/openai/codex/pull/40490)**（已合并）
   确保凭据代理期间项目配置不能影响凭据提供者的环境变量或 shell 启动行为，防止配置注入风险。

6. **[#40484 — 在子环境中代理凭据别名](https://github.com/openai/codex/pull/40484)**（已合并）
   子环境中即使规范 provider 变量被过滤，也能发现并替换继承的凭据别名，支持更长值的嵌入替换。

7. **[#40460 — 防止 Unix PTY I/O 阻塞运行时关闭](https://github.com/openai/codex/pull/40460)**（已合并）
   将 PTY 读写改为非阻塞，避免分离的子进程持有终端或输出背压导致 Tokio runtime 关闭卡死。

8. **[#40488 — 将单轮成本导出为 OTEL 指标](https://github.com/openai/codex/pull/40488)**（已合并）
   新增 `codex.turn.cost_microusd` counter，带 turn、conversation、interruption、speed、reasoning-effort 等属性，便于成本观测。

9. **[#40471 — 在支持的终端中将 Markdown 链接渲染为可点击标签](https://github.com/openai/codex/pull/40471)**（已合并）
   支持 hyperlink 的终端显示青色下划线链接文本，未知终端/多路复用器仍显示完整 URL。

10. **[#40475 — 更新 Windows 沙箱 ACL 时请求读控制权限](https://github.com/openai/codex/pull/40475)**（已合并）
   修复 `SetSecurityInfo` 对只有 `WRITE_DAC` 的目录句柄报错的问题，补充 Windows 回归测试。

---

## 热门 Discussions

### Ideas

- **[#40291 — 为 Codex/Agent 功能提供固定价格高用量个人版](https://github.com/openai/codex/discussions/40291)** · 1 评论 / 1 👍
   用户反馈当前按量计费/限制模型让深度开发时不断担心额度，希望有一个公平使用下近乎无限的固定价格档。

- **[#40384 — 提示队列 / 暂存草稿而不触发转向](https://github.com/openai/codex/discussions/40384)** · 0 评论 / 1 👍
   希望在 Agent 运行期间预先准备多个后续指令，不立即发送（避免干扰当前任务），由 Agent 按需取用。

### Q&A

- **[#40385 — Windows 版「连接 — 控制其他设备」选项找不到](https://github.com/openai/codex/discussions/40385)** · 0 评论 / 1 👍
   用户按文档位置寻找远程设备控制入口，但在 Windows 桌面客户端中未发现对应选项。

- **[#40316 — 如何解决「Pull request object state is invalid」错误](https://github.com/openai/codex/discussions/40316)** · 0 评论 / 1 👍
   请求排查 Codex 处理 GitHub PR 时出现「对象状态无效」错误的解法。

### Show and tell

- **[#40309 — Harness Lens：检查哪些规则/技能/钩子/记忆会影响工作区](https://github.com/openai/codex/discussions/40309)** · 0 评论 / 1 👍
   作者自荐其开源工具 Harness Lens（v0.4.0），可审计 Codex 在当前工作区生效的个性化配置；用 Codex 辅助实现并验证，寻求反例和产品摩擦点。

---

## 功能需求趋势

1. **认证与会话恢复可靠性**（#39162、#40267）— 桌面端打开历史会话导致 token 失效、refresh token 未持久化，是最近一周最高频的痛点。
2. **会话历史持久化一致性**（#17354、#26157、#33771、#35746）— 应用更新后历史丢失/错乱的问题持续 4 个月未根治，社区已渐生不满。
3. **Windows 平台体验大幅补强** — 终端静默失败（#37104）、沙箱 ACL（#40475）、内核崩溃（#40119）、自动更新死循环（#38843）等问题密集出现。
4. **Multi-Agent V2 体系成熟化** — 模型标记（#35097）、子代理所有权（#40464）、父级重载（#40477）等修复紧随架构发布，AI Agent 协作模式正在快速收敛。
5. **企业/云平台支持** — 新增 Bedrock 托管访问密钥（#40481）、社区持续要求 AWS GovCloud（#29646）支持。
6. **成本可观测性** — 通过 OTEL 导出单轮成本（#40488）和根 turn ID 关联（#40486），说明团队开始认真做用量/费用追溯。
7. **Agent 交互控制面扩展** — 提示队列/草稿不转向（#40384）、自动压缩可感知（#21777）都指向同一个方向：用户想要更精细的 Agent 行为控制。

---

## 开发者关注点

- **认证是最大的雷区**：仅一天内就出现 2 个认证相关高热度 Issue（#39162 和 #40267），且均发生在 macOS 桌面端。开发者对此类「数据未丢、登录却失效」的问题容忍度极低。
- **Windows 用户处于「二等公民」状态**：从 WSL 终端到沙箱、再到 Computer Use 浏览器控制、内核崩溃，Windows 专属问题数量远高于其他平台，且许多是静默失败（无提示、无日志），排查成本极高。
- **配置迁移不够「安全」**：#40339 表明自动迁移可能生成破坏 strict-config 校验的配置，且新配置项被静默忽略——这种「改完不告诉你哪里坏了」的行为最伤信任。
- **历史数据不丢 ≠ 历史可用**：CLI 中明明有历史数据但桌面 UI 不显示（#17354），或更新后映射丢失（#26157），开发者对这种「数据其实还在，但你找不到」的状态很恼火。
- **对固定价格计划的呼声在增长**：#40291 是本周首个高赞的计费相关 Discussion，说明核心开发者开始将 Codex 当作日常主力工具，计费模型需要跟上「准无限」的场景。

---

> 数据来源：github.com/openai/codex（2026-08-24 更新）

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-08-25

## 今日速览
昨日发布的 v0.56.0-nightly.20260824 为常规 nightly 更新。社区讨论热度集中在 Subagent 可靠性问题上：多个 P1 级 Bug 报告子代理在失败后误报成功、通用 agent 挂起等，其中 Subagent 在 MAX_TURNS 超限后被误报为 GOAL 成功的问题引发 13 条评论。PR 侧则以 Git 环境变量安全修复、请求重试逻辑优化和 CLI 文档补全为主要方向。

## 版本发布
- **[v0.56.0-nightly.20260824.g5411f113c](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260824.g5411f113c)**：常规 nightly 构建，无显著公告内容。完整变更见 [Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260823.g5411f113c...v0.56.0-nightly.20260824.g5411f113c)。

## 社区热点 Issues

### 1. Subagent 恢复误报：MAX_TURNS 被隐藏为 GOAL 成功
- **Issue [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)**（P1, Bug, 🔒 maintainer）
- 作者: matei-anghel | 评论: 13 | 👍: 2
- **重要性**：`codebase_investigator` 子代理在达到最大轮次限制前未做任何分析，却报告 `status: success` 且 `Termination Reason: GOAL`，掩盖了真实的中断原因。这直接影响任务追踪的准确性，可能导致错误的下游决策。
- **社区反应**：13 条评论为今日最高，维护者已标记 `need-retesting`，说明可能有修复分支在测试中。

### 2. 通用 agent（Generalist agent）挂起无响应
- **Issue [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)**（P1, Bug, 🔒 maintainer）
- 作者: turmanticant | 评论: 8 | 👍: 8
- **重要性**：当 CLI 将任务交给通用 agent 时，即使简单的建文件夹操作也会无限期挂起（用户等过 1 小时）。用户找到的 workaround 是提示模型不要使用子代理，这暗示问题可能出在 agent 间通信或调度层。
- **社区反应**：8 个 👍 说明影响面较广，多位用户可能遭遇类似问题。

### 3. Shell 命令执行完成后卡在 “Waiting input”
- **Issue [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)**（P1, Bug, 🔒 maintainer）
- 作者: rnett | 评论: 4 | 👍: 3
- **重要性**：即使是完全不需要用户输入的最简命令，shell 执行完后界面仍显示命令活跃并等待输入。这会严重阻塞自动化流程。
- **社区反应**：P1 且已修复数月未关闭，维护者已 triage，标记 effort/medium。

### 4. Browser subagent 在 Wayland 下失败
- **Issue [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)**（P1, Bug, agent/browser）
- 作者: sigmaSd | 评论: 4 | 👍: 1
- **重要性**：Wayland 环境下的浏览器自动化子代理直接以 GOAL 终止但实际失败（附错误日志）。Linux/Wayland 用户占比不低，属于兼容性缺陷。

### 5. get-shit-done 输出 hook 崩溃
- **Issue [#22186](https://github.com/google-gemini/gemini-cli/issues/22186)**（P1, Bug, 🔒 maintainer）
- 作者: businesscasual98 | 评论: 3
- **重要性**：当 get-shit-done 输出接近完成（打印用户摘要）时反复触发 CLI 崩溃。虽然 PR #28934（历史回滚和重试优化）可能部分解决，但该特定 hook 场景仍待确认。

### 6. Auto Memory 无限重试低信号会话
- **Issue [#26522](https://github.com/google-gemini/gemini-cli/issues/26522)**（P2, Bug, 🔒 maintainer）
- 作者: SandyTao520 | 评论: 5
- **重要性**：Auto Memory 后台提取 agent 若判定某历史会话低信号而不读取，该会话将一直保持“未处理”状态，反复被重新推送给 agent，造成资源浪费与无效循环。
- **社区反应**：同一作者还提交了 #26516/#26523/#26525 系列关联 issue，表明 Auto Memory 相关设计较粗糙。

### 7. Auto Memory 缺少确定性敏感信息编辑
- **Issue [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)**（P2, Security, 🔒 maintainer）
- 作者: SandyTao520 | 评论: 4
- **重要性**：本地会话转录被发送到模型时，提示词虽要求编辑密钥，但内容已进入模型上下文（属事后行为）。此外服务可能记录现有 skills 等敏感元数据。对注重隐私的企业用户和本地开发者是显著顾虑。

### 8. Gemini 不会主动使用 skills 和 sub-agents
- **Issue [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)**（P2, Bug, 🔒 maintainer）
- 作者: rnett | 评论: 6
- **重要性**：用户反馈模型几乎从不主动调用自定义 skills 和子代理——即使任务与已配置的 skill 高度相关，除非显式指令。这削弱了自定义 agent 生态的价值。
- **社区反应**：开发者的普遍观察，维护者已标记 `need-retesting`，近期有 agent 调度优化的 PR 在推进。

### 9. 符号链接的 agent 定义文件不被识别
- **Issue [#20079](https://github.com/google-gemini/gemini-cli/issues/20079)**（P2, Bug, 🔒 maintainer）
- 作者: wtanaka | 评论: 4
- **重要性**：`~/.gemini/agents/foo.md` 若是指向其他位置的 symlink，则不会被视为 agent。限制了用户通过 dotfiles 仓库管理 agent 配置的能力。

### 10. 超过 128 个工具时收到 400 错误
- **Issue [#24246](https://github.com/google-gemini/gemini-cli/issues/24246)**（P2, Bug, 🔒 maintainer）
- 作者: gundermanc | 评论: 3
- **重要性**：当可用工具超过约 400 个时 API 报 400 错误。模型并未智能地仅启用与当前任务相关的工具子集，导致上下文膨胀与 API 限制问题。

## 重要 PR 进展

### 1. 历史回滚与重试提示优化（已关闭，待关联 Issue）
- **PR [#28934](https://github.com/google-gemini/gemini-cli/pull/28934)**（size/l, CLOSED）
- 作者: DavidAPierce
- **内容**：取消工具调用时进行历史回滚而非追加合成消息；重试提示不再重复喂入完整对话，从而压缩上下文占用、减少 API 请求、最大化前缀缓存命中。
- **意义**：有望同时缓解多个 context bloat 相关 issue（如 #22186），但被关闭可能因缺少关联 issue。

### 2. 在文本历史中保留 ask_user 问题
- **PR [#29022](https://github.com/google-gemini/gemini-cli/pull/29022)**（area/core, size/l, OPEN）
- 作者: RaphaelDDL
- **内容**：新增 `ui.keepAskUserQuestionsInHistory` 设置项。使用 ask_user 工具时，问题 GUI 会在回答后从历史中消失，此 PR 允许将其保留在文本历史中，便于恢复会话时回顾当时的选择。
- **意义**：提升长会话的可追溯性，是 UX 层面有意义的改进。

### 3. 修复 GIT_CONFIG_* 环境变量三元组内部一致性
- **PR [#28938](https://github.com/google-gemini/gemini-cli/pull/28938)**（P1, area/core, size/l, OPEN）
- 作者: Shivansh1980
- **内容**：当脱敏机制移除以数字编号的 key/value 对的一半时，`GIT_CONFIG_*` 变量变得不可解析；同时确保 ShellExecutionService 在脱敏后不会恢复敏感的 Git 配置值。
- **意义**：属于安全与功能正确性兼修的 PR，跟进 issue #29003。

### 4. 将 on-retry nudge 注入 contents 数组以保持前缀缓存
- **PR [#28914](https://github.com/google-gemini/gemini-cli/pull/28914)**（P1, area/agent, size/l, OPEN）
- 作者: Ultron09 | 修复 [#28909](https://github.com/google-gemini/gemini-cli/issues/28909)
- **内容**：把重试提示从 `systemInstruction` 移到 `contents` 数组末尾（user turn 后缀），既保留静态提示词前缀缓存，又能让模型在生成前立即看到恢复提示。
- **意义**：直接影响 API 成本与响应质量。

### 5. 避免持久化“响应被中断”占位符
- **PR [#28939](https://github.com/google-gemini/gemini-cli/pull/28939)**（P1, area/agent, size/l, OPEN）
- 作者: Shivansh1980 | 修复 [#28927](https://github.com/google-gemini/gemini-cli/issues/28927)
- **内容**：中断的工具响应回合后，CLI 会把“`[The previous response was interrupted before it completed.]`”作为合成模型响应写入会话，模型可能在后续工具调用后重复该占位符，污染会话记录。此 PR 改为避免持久化它。

### 6. 剥离执行敏感的 GIT_* 环境变量
- **PR [#29008](https://github.com/google-gemini/gemini-cli/pull/29008)**（P1, area/security, size/m, OPEN）
- 作者: chelsealong | 修复 [#29003](https://github.com/google-gemini/gemini-cli/issues/29003)
- **内容**：`getSafeGitEnv` 目前仅清理 `GIT_CONFIG_*`/`GIT_CONFIG_PARAMETERS`，但来自项目 `.env` 的其他 `GIT_*` 变量（如 `GIT_SSH_COMMAND`、`GIT_DIR`）仍可能影响 Git 执行行为。此 PR 全部剥离。
- **意义**：防止恶意仓库通过 `.env` 注入 Git 执行参数，是安全加固方向的重要一步。

### 7. Symlink/Junction 技能目录去重
- **PR [#29017](https://github.com/google-gemini/gemini-cli/pull/29017)**（P3, area/extensions, size/l, OPEN）
- 作者: Kanika0306 | 修复 [#28944](https://github.com/google-gemini/gemini-cli/issues/28944)
- **内容**：当用户通过 Windows junction 或 POSIX symlink 将 `.gemini` 链接到 `.agents` 时，技能发现逻辑会重复加载，此 PR 增加去重。

### 8. 从会话日志生成可评审的 Eval 草稿
- **PR [#29019](https://github.com/google-gemini/gemini-cli/pull/29019)**（P3, area/core, size/xl, help wanted）
- 作者: ved015
- **内容**：新增 `eval:from-log` 命令，可将真实 Gemini CLI 会话日志转化为行为评估（eval）草稿，便于维护者复现和评估失败场景。
- **意义**：降低编写 eval 的门槛，对构建高质量 agent 行为回归测试体系有帮助，同时标注了 `help wanted`。

### 9. A2A 服务器安全修复：移除误导性 security schemes 与硬编码凭证
- **PR [#29018](https://github.com/google-gemini/gemini-cli/pull/29018)**（area/security, size/xs, OPEN）
- 作者: CheesyWannabe | 修复 [#29001](https://github.com/google-gemini/gemini-cli/issues/29001)
- **内容**：清除 A2A 本地开发服务器 agent card 中不真实的 `securitySchemes` 声明及 `customUserBuilder` 中的硬编码凭证，让元数据与实际（未认证）行为一致。
- **意义**：消除误导，防止用户误以为端点有认证保护。

### 10. CLI 文档补全：记录缺失的六个 flags
- **PR [#29013](https://github.com/google-gemini/gemini-cli/pull/29013)**（area/documentation, size/xs, OPEN）
- 作者: harshil-mistry
- **内容**：在 CLI 参考表中补充 `--policy`、`--admin-policy`、`--session-id`、`--session-file`、`--raw-output`、`--accept-raw-output-risk` 六个已在 `config.ts` 注册但未写入文档的 flags。
- **意义**：文档完善类 PR，对用户可发现性有直接帮助。同作者还提交了 [#29011](https://github.com/google-gemini/gemini-cli/pull/29011)（修复 ACP 相关文档错误）和 [#29009](https://github.com/google-gemini/gemini-cli/pull/29009)（修正环境变量编辑设置键名）。

## 功能需求趋势

从近期 Issues 与 PRs 中可提炼出五个社区核心关注方向：

1. **Subagent/Agent 稳定性与可观测性**（需求最集中）
   - 子代理轨迹无法通过 `/chat share` 分享（[#22598](https://github.com/google-gemini/gemini-cli/issues/22598)），`/bug` 报告缺少 subagent 内部上下文（[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)）
   - 多次出现“subagent 实际失败却上报成功”或“挂起无响应”的可靠性问题（#22323、#21409）
   - 期望 agent 更聪明地自主使用 skills/sub-agents（[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)）

2. **Auto Memory 系统成熟化**
   - 低信号会话无限重试（[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)）
   - 内存补丁无效/逃逸路径的隔离与展示（[#26523](https://github.com/google-gemini/gemini-cli/issues/26523)）
   - 敏感信息在传输前即应被确定性编辑（[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)）

3. **安全与权限收紧**
   - 环境变量注入面收敛：Git 变量剥离（#29008/#28938）、扩展/子进程环境变量变更需显式同意（[#28863](https://github.com/google-gemini/gemini-cli/pull/28863)）
   - 提示模型避免破坏性 git/DB 操作（[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)）

4. **上下文窗口与成本优化**
   - 超过上百个工具时 400 错误（[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)）
   - 通过回滚策略和前缀缓存优化降低 token 消耗（PR #28934、#28914）
   - AST 感知的代码库映射以减少噪声 token（[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)、[#22746](https://github.com/google-gemini/gemini-cli/issues/22746)）

5. **终端体验与长会话可用性**
   - Shell 执行完成后错误地等待输入（#25166）
   - 终端 resize 时的闪烁与高性能渲染（[#21924](https://github.com/google-gemini/gemini-cli/issues/21924)）
   - 在历史中保留 ask_user 问题（PR #29022）

## 开发者关注点

- **对“假成功”报告的警惕**：开发者普遍在意子代理的终止原因是否有误导性（#22323 最高评论量即为证明）。状态报告的真实性直接影响开发者对其自动化结果的信任度。
- **挂起与卡死场景高频出现**：通用 agent 挂起（#21409）与 shell “等待输入”卡住（#25166）均属 P1，说明核心执行链路的稳定性仍是第一痛点。
- **敏感信息处理的安全细节**：Auto Memory 的编辑弱点和 Git 相关环境变量泄漏风险同时受到关注，表明开发者对 CLI 在本地以及 CI 中处理凭据的安全性有明确要求，并期待"在数据进入任何外部上下文之前就完成脱敏"的确定性机制。
- **工具数量扩展受限**：128+ 工具报 400 错是一个明确的平台限制，开发者期望 agent 能动态、按需地选择工具子集，而非全量注入。
- **配置与文档一致性**：多个 PR 聚焦"代码里已实现但文档缺失/错误"（#29013、#29011、#29009），侧面反映 CLI 功能迭代快、文档维护滞后，开发者在实际配置时易踩坑。

---
*本日报数据来源于 GitHub 上 google-gemini/gemini-cli 仓库的公开 Issues、PRs 与 Releases，统计时间截至 2026-08-25。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-08-25

## 今日速览
- 发布补丁版本 v1.0.81-9，在 `/model` 选择器中新增模型数据保留警告及链接。
- MCP OAuth 问题持续发酵：多个与 Entra ID / agentgateway 相关的 Issue 仍指向 1.0.81 预发布版中未彻底修复的回归；老牌 Issue #1274（400 错误）以 27 条评论在社区保持高热。
- 社区功能需求集中在权限精细化控制（工具白名单）、`/ask` 多轮对话、`/fork` 并行终端，以及 PDF / 图像等非纯代码资产支持。

## 版本发布
- **[v1.0.81-9](https://github.com/github/copilot-cli/releases/tag/v1.0.81-9)**
  - 改进：在 `/model` 选择器中展示模型数据保留警告，并附带官方说明链接。

## 社区热点 Issues
**1. [Issue #1274](https://github.com/github/copilot-cli/issues/1274) — CLI 频繁因 400 invalid request body 报错（27 评论 / 11 👍）**
  持续数月的老问题，近期大量用户反馈对 diff 文件做 code review 时约 95% 请求失败。社区推测是服务端校验或 CLI 构造请求头的问题，但尚无定论。稳定性核心痛点之一。

**2. [Issue #1973](https://github.com/github/copilot-cli/issues/1973) — 功能请求：交互模式的工具白名单（12 评论 / 27 👍）**
  当前交互模式对每个工具调用都要人工批准，包括 `grep`、`cat` 等只读操作；`/allow-all` 又过于危险。27 个 👍 表明社区对精细权限控制有强烈需求。

**3. [Issue #4584](https://github.com/github/copilot-cli/issues/4584) — MCP OAuth 在 agentgateway + Entra ID 下仍失败（1 评论）**
  这是 Issue #4490 的延续：原问题已被关闭，但用户在 1.0.81 预发布版中复测后确认失败依然存在，说明修复并未覆盖所有场景。

**4. [Issue #4582](https://github.com/github/copilot-cli/issues/4582) — MCP OAuth 授权请求缺失 scope 参数，触发 AADSTS900144（2 评论）**
  新上报的 OAuth bug：面向静态 `oauthClientId` 的 Entra ID 服务器，授权请求漏传 `scope`，导致登录无法完成。与 #4584 同属 MCP OAuth 兼容性问题。

**5. [Issue #4421](https://github.com/github/copilot-cli/issues/4421) — MCP initialize 握手固定 60s 超时且无重试（2 评论）**
  npx 启动的 stdio MCP 服务器中约 29% 的会话因握手超时失败，且该服务器整场会话内不会重生。缺少可配置项，对 MCP 重度用户是硬伤。

**6. [Issue #4224](https://github.com/github/copilot-cli/issues/4224) — subagent 调用的 OTel span 缺少计费属性（3 评论）**
  `task` 工具及自定义 agent 的模型调用未携带 `github.copilot.nano_aiu`、`github.copilot.cost` 等计费属性，导致外部成本核算不准确。

**7. [Issue #4566](https://github.com/github/copilot-cli/issues/4566) — Agent 只确认不执行工具动作（2 评论）**
  在 gpt-5.3-codex 下，agent 反复回复“稍后处理”却始终不发起实际工具调用。代理执行可靠性问题，影响自动化任务成功率。

**8. [Issue #4568](https://github.com/github/copilot-cli/issues/4568) — `--cloud` 模式挂起、重连崩溃与轮询 429（1 评论）**
  云模式三个症状叠加：无仓库上下文时卡死在 `Loading available owners...`，有仓库时任务停在 `session.requested`，轮询触发 429。云工作流目前几乎不可用。

**9. [Issue #4572](https://github.com/github/copilot-cli/issues/4572) — 后台压缩丢失并发的 GPT 工具结果并导致 HTTP 400（1 评论）**
  长上下文会话在自动压缩后偶发 `CAPIError: 400 No tool output found`，JSONL 事件流中确实缺少该函数的输出。属于数据丢失 + 请求错误双重问题。

**10. [Issue #4570](https://github.com/github/copilot-cli/issues/4570) — Windows 下 VS Code 运行时插件安装/更新失败（1 评论）**
  只要 VS Code 处于打开状态，`copilot plugin install` / `update` 就报 “Access is denied. (os error 5)”。影响所有插件，平台特定但极易触发。

## 重要 PR 进展
> 过去 24 小时仅见 1 个 PR 更新，且内容疑似非正常改动。本期无高价值代码合并。

- **[PR #4573](https://github.com/github/copilot-cli/pull/4573) — Rename README.md to README.mdmain（OPEN）**
  将 `README.md` 重命名为 `README.mdmain`。该改动不构成实质功能，疑似误操作或垃圾 PR，社区暂无讨论。

## 功能需求趋势
> 从 Issues 中提炼的社区高频功能方向：

- **权限精细化控制**：为交互模式提供工具白名单（#1973）——可安全放行只读命令，避免 `/allow-all` 的副作用。
- **会话机制增强**：`/ask` 支持多轮追问（#4579/#4577），`/fork` 可在新终端中开启并行会话并支持 `copilot --fork` 启动参数（#4580）。
- **非代码资产支持**：PDF 上传分析（#4583）与图片生成能力（图标、favicon、OG 图，见 #4581），扩展 CLI 在多模态场景下的用途。
- **计费与可观测性**：将原始 token 数显示在状态栏（#4589），并修复 OTel span 缺失计费属性的问题（#4224）。
- **代理执行行为可控**：解决 agent“只确认不行动”的问题（#4566），并允许用户自定义 `/footer` 与 `/statusline` 的截断规则（#4591）。

## 开发者关注点
- **MCP OAuth 兼容性回归**：多个 Issue（#4582、#4584、#4588 中的部分场景）指向同一根因—— Copilot CLI 对 RFC 8414 的异常处理，以及 Entra ID 场景下 scope 参数遗漏，导致企业用户无法接入 MCP 服务器。
- **核心工作流稳定性受阻**：400 错误、后台压缩数据丢失、`--cloud` 反复挂起等直接影响“code review 与云端任务”的核心路径，成为当日最热门的稳定性问题。
- **MCP 可靠性不足**：初始化固定 60s 超时、无重试、无恢复机制（#4421），对 npx 启动的 stdio 服务器非常不友好。
- **平台与进程冲突**：Windows 下插件安装与 VS Code 的文件占用冲突（#4570），以及 SIGKILL 后遗留的 `inuse.<pid>.lock` 文件（#3255），暴露出生命周期管理的短板。
- **成本与资源可见性缺失**：subagent 调用不计入账单属性、非 Anthropic 模型被迫全量加载工具 schema 造成 token 浪费（#4588），均是付费用户高度敏感的问题。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-08-25）

> 数据来源：github.com/anomalyco/opencode

## 1. 今日速览

- v1.18.22 发布，主要修复设备登录链接与 OpenAI 兼容 provider 参数兼容问题。
- 社区最集中的反馈是 provider 层 `network_error / Upstream request failed`，涉及 Ox Alpha Free、Console Go、Kimi K3 等多个模型；多个 PR 正在加强 finish_reason 校验与 AI 流恢复。
- 功能需求上，会话持久记忆、临时会话、小模型/本地模型支持、MCP 作用域配置是明显趋势。

## 2. 版本发布

### v1.18.22

**Core Bugfixes**

- 移除过时的 OpenCode Go 首月折扣文案与定价信息。
- 修复服务器返回相对 verification URL 或使用 base path 时，OpenCode 设备登录链接无法跳转的问题。
- 修复 `textVerbosity` 被错误发送到不支持该参数的 OpenAI 兼容 provider 的问题。

## 3. 社区热点 Issues

1. **#44528 [OPEN] Bug Report, network error**  
   https://github.com/anomalyco/opencode/issues/44528  
   评论数 19，为本次最高。Windows 10 + opencode go / ollama cloud + Big Pickle 模型，用户表示几天前正常，今天启动后持续出现网络错误。

2. **#4489 [CLOSED] Ephemeral one-off sessions for opencode run**  
   https://github.com/anomalyco/opencode/issues/4489  
   15 👍。用户希望 `opencode run` 支持临时一次性会话，不持久化到本地 session store，适合 CI/脚本化场景，并提出可自行实现。

3. **#16077 [OPEN] Persistent Session Memory**  
   https://github.com/anomalyco/opencode/issues/16077  
   讨论 14 条。希望启动时从本地文件加载历史对话上下文，使 CLI 陪伴类应用具备跨会话记忆。

4. **#30877 [OPEN] TUI sidebar "Modified Files" section completely hidden**  
   https://github.com/anomalyco/opencode/issues/30877  
   14 👍。v1.16.0 路径截断修复导致右侧边栏「Modified Files」整块消失，未提交变更完全不可见，TUI 明显回归。

5. **#37823 [CLOSED] GitHub Action fails on new OIDC sub format**  
   https://github.com/anomalyco/opencode/issues/37823  
   11 👍。2026-07-15 后创建的新仓库因 immutable OIDC sub 格式导致 `p.rest` 报错，影响 GitHub Action 自动化流程。

6. **#37815 [OPEN] Error from provider (Console Go): Kimi K3 upstream request failed**  
   https://github.com/anomalyco/opencode/issues/37815  
   6 👍。Console Go 下仅 Kimi K3 报错，其他模型正常，错误信息为 Upstream request failed。

7. **#44379 [OPEN] Ox Alpha Free 反复 `network_error`**  
   https://github.com/anomalyco/opencode/issues/44379  
   4 👍。Ox Alpha Free (Unlimited) 使用中反复出现 `finish_reason: network_error`，只有新开会话才能恢复。

8. **#6310 [CLOSED] LSP diagnostics 导致会话不可用**  
   https://github.com/anomalyco/opencode/issues/6310  
   Lua 大项目使用 edit/write 工具后，完整工作区 diagnostics 被写入 metadata，导致会话越来越慢直至不可用。

9. **#34344 [OPEN] 通过 VPN 轮询绕过免费模型限速**  
   https://github.com/anomalyco/opencode/issues/34344  
   免费模型限速绑定 IP，VPN 轮换即可立即重置配额。作者演示 Deepseek v4 Flash / mimo v2.5 可持续运行，存在滥用与成本风险。

10. **#44798 [OPEN] 上下文触顶后无续传机制**  
    https://github.com/anomalyco/opencode/issues/44798  
    长会话接近上下文窗口时，agent 拒绝开始新任务且没有自动压缩/续传机制，影响复杂多步骤工作流。

## 4. 重要 PR 进展

1. **#44242 feat(opencode): model capability tiers for small/local models**  
   https://github.com/anomalyco/opencode/pull/44242  
   为小上下文模型（如 Qwen 4B）引入能力分级和最小 system prompt，避免持续触发 compaction。

2. **#44743 fix(ai): enforce chat finish reasons**  
   https://github.com/anomalyco/opencode/pull/44743  
   默认要求非空 finish_reason，兼容端点可关闭；规范 `stop` / `tool-calls` / `end` / content-filter 等状态，直击多起 network_error 问题。

3. **#44796 fix(tui): restore TUI sidebar modified-files diff**  
   https://github.com/anomalyco/opencode/pull/44796  
   修复 #30877，恢复 Sidebar 中 Modified Files 的 diff 内容。

4. **#44683 feat(app): queue and steer follow-up prompts**  
   https://github.com/anomalyco/opencode/pull/44683  
   实现 composer 上方 prompt 队列，支持拖拽排序、热键、停止回合流程和 Follow-up 行为设置。

5. **#44808 fix(core): honor MCP OAuth metadata challenge**  
   https://github.com/anomalyco/opencode/pull/44808  
   在交互式 OAuth 发现前 preflight 远程 MCP 端点，并正确处理 `resource_metadata` URL 与 challenge scope。

6. **#44806 fix(core): recover missing assistant responses**  
   https://github.com/anomalyco/opencode/pull/44806  
   当 `stop` 后没有任何有效回答/tool call 时视为 provider 输出不完整，自动走重试或续跑路径，避免会话静默挂起。

7. **#44789 fix(core): validate JSON schema tool input**  
   https://github.com/anomalyco/opencode/pull/44789  
   将 Draft 2020-12 / Draft-07 工具 schema 导入 Effect Schema，tool 调用前先解码校验，失败时作为 tool error 返回。

8. **#44104 fix: GitHub Copilot Grok models endpoint error**  
   https://github.com/anomalyco/opencode/pull/44104  
   修复 Copilot Grok 模型因继承通用 OpenAI SDK 而产生 endpoint error 的问题。

9. **#44803 feat(mcp): scoped server config, project approval, and keychain storage**  
   https://github.com/anomalyco/opencode/pull/44803  
   MCP 服务器配置改为 local/project/user 作用域，支持项目审批与 keychain 凭据存储，向 Claude Code / Gemini CLI 看齐。

10. **#44767 feat(session): expose runtime execution status**  
    https://github.com/anomalyco/opencode/pull/44767  
    为 `session.get` 增加 `executing` 布尔字段，embedder（如 Slack bot）无需全量拉取 sessions 即可判断运行状态。

## 5. 功能需求趋势

- **会话上下文与连续性**：持久记忆、临时一次性会话、上下文超限续传、prompt 排队/转向、运行状态暴露成为高频关键词。
- **本地/小型模型适配**：社区希望 Qwen 等小参数模型在受限 context 下可用，不再频繁 compaction。
- **Provider 稳定性与兼容性**：大量 issue 集中在 provider 返回 network_error / 无 finish_reason / 流中断；PR 方向为强制 finish_reason、恢复缺失响应、解析部分 JSON、兼容 Copilot/Grok 等特有端点。
- **MCP 与插件生态**：MCP OAuth、MCP 服务器作用域与密钥存储、2.0 插件事件订阅可靠性都是开发者关注点。
- **TUI/桌面端回归治理**：Sidebar 隐藏、快捷键失效、窄屏按钮溢出等细节修复需求持续出现。
- **GitHub 自动化**：OIDC 新格式破坏 Actions、Action token 文档混乱，自动化集成稳定性有待加强。
- **安全与滥用控制**：免费模型 IP 限速被 VPN 轮询绕过，社区开始关注服务保护和成本风险。

## 6. 开发者关注点

- **provider 网络错误是最强痛点**：Ox Alpha Free、Console Go、Big Pickle、Kimi K3、GPT 5.6 Luna 等均出现 `network_error` 或 `Upstream request failed`，不少用户只能靠新开会话绕过。
- **免费/Go 套餐模型可用性不稳定**：部分区域无法使用 GPT 5.6 Luna，Kimi K3 返回 Forbidden，并已引发退款诉求。
- **TUI/Desktop 回归影响日常操作**：v1.16.0 后 Modified Files 不可见、Keybindings Shift+Enter 失效、Review Panel 尺寸异常等。
- **GitHub Actions OIDC 变更破坏既有工作流**：新仓库统一报 `undefined is not an object (evaluating 'p.rest')`，需要在 action 侧兼容新 sub 格式。
- **长会话可靠性不足**：LSP diagnostics 膨胀、上下文窗口触顶无自动接管、僵尸 running 会话阻塞消息投递，都是大型项目的拦路虎。
- **2.0 插件 API 还不完整**：beta 版 `event.subscribe` 收不到事件、context-hook 注不进 prompt，插件作者升级需谨慎。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

## Pi 社区动态日报 — 2026-08-25

---

### 1. 今日速览

Pi 发布 **v0.84.3**，引入可选 PowerShell 工具和分阶段验证的原子化托管更新机制，Windows 支持显著增强。社区侧围绕 **Windows 适配**（#7547，44 评论）与 **上下文压缩失效**（#6879，19 👍）展开激烈讨论；同时，面向 Amazon Bedrock Mantle 新 API 的适配（#8572/#8573）和多起 OpenAI 流式中止缺陷修复（#8585）成为 PR 焦点。

---

### 2. 版本发布

**v0.84.3**（含 v0.84.2 增量）

- **PowerShell 工具** — Windows 下可选执行原生 PowerShell 命令，不再强制依赖 Git Bash 环境（详见 [Windows 文档](https://github.com/earendil-works/pi/blob/v0.84.3/packages/coding-agent/docs/windows.md#powershell-tool)）。
- **更安全的托管更新** — 更新采用「分阶段 → 验证 → 原子激活」流程，降低更新中途失败导致环境损坏的风险。

---

### 3. 社区热点 Issues（10 条）

1. **[Windows] 你如何使用 Pi？遇到了哪些问题？**（#7547，44 评论，2 👍）
   作者 petrroll 发起的 Windows 生态摸底，旨在确定核心优化方向（错误修复、文档、开箱体验），已持续三周热度不减，是当前社区规模最大的讨论串。
   → https://github.com/earendil-works/pi/issues/7547

2. **[bug] 上下文超 100% 后自动压缩永不触发，直到提供方溢出**（#6879，22 评论，19 👍）
   GPT-5.6-sol 上 agentic turn 运行 2 小时，footer 超过压缩阈值后继续增长，直到 API 在 373k tokens 拒请求才触发。用户建议每个 agent 步骤后检查压缩，而非等待溢出。高赞说明受害者众多。
   → https://github.com/earendil-works/pi/issues/6879

3. **[bug] 默认模型不能是 llama.cpp 模型：启动显示 "No models available"**（#6922，11 评论，14 👍，已关闭）
   当 `defaultProvider: "llama.cpp"` 时启动直接报错退出。与 #8167 同源，已由 #8479 修复。
   → https://github.com/earendil-works/pi/issues/6922

4. **[bug] 内置 llama.cpp 的模型无法被选中**（#8167，11 评论，已关闭）
   Router 模式下 `/llama` 可以加载/卸载模型，但模型列表不显示。PR #8479 修复了预设未暴露的问题。
   → https://github.com/earendil-works/pi/issues/8167

5. **WebSocket 重试仅处理两种错误码，其他瞬时错误直接终止回合**（#7444，9 评论，已关闭）
   `openai-codex-responses.js` 只特判 `previous_response_not_found` 和 `websocket_connection_limit_reached`，其他 `response.failed` 会直接抛错终止整个 turn。
   → https://github.com/earendil-works/pi/issues/7444

6. **npm search 不再索引新发布的 pi-packages**（#7885，8 评论，已关闭）
   8 月 4 日后发布的新包（如 `pi-affix-prompt`）无法通过 `npm search` 发现，导致 pi.dev/packages 画廊停更，影响扩展生态可见性。
   → https://github.com/earendil-works/pi/issues/7885

7. **[bug] 编辑工具超时终止**（#3159，7 评论，已关闭）
   Qwen 27B 在编辑操作时频繁报 "terminated"，疑似编辑器操作超时阈值过低，新版复现率增高。
   → https://github.com/earendil-works/pi/issues/3159

8. **[last-read] 压缩摘要生成触及 token 上限时以截断单词持久化**（#7048，7 评论，1 👍，已关闭）
   `generateSummary` 未检查 `stopReason === "length"`，导致输出在单词中间切断并被持久化，压缩质量受损。
   → https://github.com/earendil-works/pi/issues/7048

9. **工具批次中间注入自定义消息破坏 tool_calls→tool 相邻性（DeepSeek 400）**（#8166，7 评论，开放）
   扩展调用 `pi.sendMessage(..., { triggerTurn: false })` 后，后续回合持续报 `Messages with role 'tool' must be a response to a preceding message with 'tool_calls'`，形成死锁。
   → https://github.com/earendil-works/pi/issues/8166

10. **[bug] 回归：中止的回合以 stopReason "error" 而非 "aborted" 结束**（#8409，4 评论，已关闭）
    0.84.2 起，在工具调用期间中止时，回合错误地标记为 `error: This operation was aborted`，破坏依赖 stopReason 判断与重试的自动化流程。
    → https://github.com/earendil-works/pi/issues/8409

---

### 4. 重要 PR 进展（10 条）

1. **fix(ai): abort OpenAI streams immediately when signal fires**（#8585，已合并候选）
   修复 OpenAI Responses/Completions 流循环不检查 abort signal 的问题——Anthropic 路径每次 `reader.read()` 都会检查，而 OpenAI 路径依赖 SDK 迭代器自终止（HTTP 响应体打开后不会）。对齐 #8586。
   → https://github.com/earendil-works/pi/pull/8585

2. **feat(ai): amazon bedrock mantle**（#8572，开放）
   为 Amazon Bedrock 新增 Mantle API 路由支持。Mantle 承载 GPT-5.x 等新模型，此前错误路由至 Converse 会报 `Validation error`。WIP，等待 e2e 权限。
   → https://github.com/earendil-works/pi/pull/8572

3. **feat(ai): bedrock mantle anthropic messages**（#8573，开放）
   #8572 的后续，在既有 `amazon-bedrock` provider 下将 Bedrock Mantle Anthropic Messages 路由接入现有 Anthropic Messages adapter。
   → https://github.com/earendil-works/pi/pull/8573

4. **fix(ai): pin createProvider TApi for xAI Responses provider**（#8578，已关闭）
   修复 #8124 将 xAI 目录路由到 OpenAI Responses API 后引发的 TS2322 类型构建错误。
   → https://github.com/earendil-works/pi/pull/8578

5. **fix(coding-agent): surface + bound the torn-append replay loss in session JSONL files**（#8575，已关闭）
   会话 JSONL 可能在一行内同时包含「撕裂条目前缀 + 完整下一条目」，`parseSessionEntryLine` 跳过整行导致单次存储事件丢失两条回放入口。该 PR 显式暴露并限制此损失。
   → https://github.com/earendil-works/pi/pull/8575

6. **fix: expose unloaded llama.cpp presets**（#8479，已关闭）
   修复 #8167：`llama-server --models-preset` 定义的预设未显示在模型列表中。llama-swap 用户同样受益。
   → https://github.com/earendil-works/pi/pull/8479

7. **fix(ai): preserve Codex thread affinity headers**（#8570，已关闭）
   为 OpenAI Codex Responses 请求补充 `thread-id` 亲和性头，与已发送的 `session-id`、`x-client-request-id` 对齐。
   → https://github.com/earendil-works/pi/pull/8570

8. **feat(coding-agent): attach clipboard images as atomic markers**（#8559，开放）
   粘贴图片时不再把临时文件路径插入 prompt，而是显示为编辑器中的附件标记，隐藏实现细节。
   → https://github.com/earendil-works/pi/pull/8559

9. **feat(tui): move editor cursor on click**（#8547，开放）
   Pi 支持鼠标选择文本，但点击 prompt 区域不会移动光标。该 PR 让主键单击将光标移动到点击位置，减少键盘导航需求。
   → https://github.com/earendil-works/pi/pull/8547

10. **feat: show llama presets if autoload enabled**（#8558，已关闭）
    当 llama.cpp router 开启 autoload 时，`/model` 应显示 `source: "preset"` 条目，此前被隐藏。
    → https://github.com/earendil-works/pi/pull/8558

---

### 5. 热门 Discussions（2 条）

**General**

1. **Benchmarking pi's harness**（#1637，1 评论，31 👍）
   用户 zdenham 询问是否有人对 Pi 与 Codex CLI、Claude Agent SDK 做过基准测试，希望获取客观证据以推动团队从 Claude Agent SDK 迁移。31 个 👍 表明社区对可量化对比有强烈需求。
   → https://github.com/earendil-works/pi/discussions/1637

2. **本地 llama-server 连接问题**（#8563，0 评论，1 👍）
   用户运行本地 llama-server，Pi 每次要求 API key 但本地并无 key。属于配置引导问题，尚无回复。
   → https://github.com/earendil-works/pi/discussions/8563

---

### 6. 功能需求趋势

- **Windows 一等公民化**：PowerShell 工具入内置（#8512）、路径分隔符修复（#8441）、Windows PowerShell 5.1 vs pwsh 不一致（#8582），以及 #7547 大规模摸底——Windows 支持已从「能用」迈向「好用」。
- **新模型/新提供方接入加速**：#4742 SiliconFlow、#5986 Merge Gateway、#6403 Eden AI、#8450 Parasail、#8546 DeepSeek Vision、#8491 DeepSeek 峰谷定价、xAI Grok Build（#8422）——社区对长尾模型提供方与新模型的首时间支持要求强烈。
- **压缩（Compaction）机制系统性改进**：#6879 触发时机、#7048 截断持久化、#8017 Anthropic refusal 降级——压缩是长会话场景的核心痛点，正在被系统性修补。
- **UI/UX 细节打磨**：#8583 重型扩展 schema 延迟加载、#8475 全屏覆盖层选择策略、#8569 共享会话按钮反馈、#8584 流式渲染单字换行、#8580 工具行垂直间距压缩——说明核心功能稳定后，社区开始关注终端渲染与交互品质。
- **会话可移植性**：#8554 git worktree 会话迁移、#8588 `pi preset` 导出/导入——高级用户希望 agent 配置与上下文能跨环境、跨机器复用。

---

### 7. 开发者关注点

- **Windows 路径处理仍是最痛**：#8441 工具「Path outside repository」误报（分隔符不匹配）、#7875 外部编辑器路径带空格解析失败——在 0.84.x 上仍高频出现，且直接影响日常编辑流程。
- **工具调用边界场景脆弱**：#8166 自定义消息注入破坏 tool_calls→tool 相邻性、#7444 WebSocket 重试覆盖不足、#8409 中止状态回归——这些错误让依赖工具链的自动化流程难以可靠运行。
- **AI 流式控制的缺口**：#8586 OpenAI 流忽略 abort signal 导致 RPC 中止无效——已在 #8585 修复，开发者对无法及时中断生成表示高度关注。
- **上下文窗口管理焦虑**：#6879 是本周最高赞 issue（19 👍），「压缩不触发直到 API 拒绝」揭示了 token 预算失控的严重后果，开发者在长会话场景下仍然缺乏安全感。
- **扩展生态可发现性受阻**：#7885 npm search 失效导致画廊停更——新扩展作者无法获得曝光，间接影响社区插件生态活跃度。
- **本地模型使用门槛**：#6922 默认 llama.cpp 模型启动失败、#8479 预设不显示、#8563 本地 API key 困惑——本地模型的配置流程仍有优化空间，是降低 Pi 入门门槛的关键一环。

---

*本日报由 AI 技术分析师根据 GitHub 公开数据自动生成，覆盖 2026-08-24 至 2026-08-25 的社区动态。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

## 1. 今日速览

今日社区动态聚焦于三个方向：MCP 工具链的可靠性问题（重连“假成功”、长结果渲染策略）、流式输出稳定性争议（#5975 的 120 秒超时已持续近两个月、评论数居首），以及 /review 审查体系的密集迭代（线程归位、minimal 拓扑、新审计角度等 6+ PR 并行推进）。版本侧发布 v0.22.0-nightly.20260824 快照，修复 web-shell 工作目录传递问题并更新 cua-driver 预编译产物。

## 2. 版本发布

**v0.22.0-nightly.20260824.3a1f86d805**（nightly 快照）

- fix(web-shell)：从概览面板打开时传递会话工作区 cwd（PR #9730）
- cua-driver-rs v0.20.0：发布预编译二进制（macOS 已签名+公证，含 QwenCuaDriver.app；Linux/Windows 未签名）；Node.js 同步推送

## 3. 社区热点 Issues

1. **[#5975] API Error: No stream activity for 120000ms** — 12 条评论  
   自 v0.19.3 起频繁出现“120 秒无流活动”错误，此前表现为长时间思考无输出后直接断流。已持续近两个月、评论数远超其他 Issue，是当前流式稳定性头号痛点。  
   https://github.com/QwenLM/qwen-code/issues/5975

2. **[#9944] MCP 重连报告成功但工具不可用** — 4 条评论  
   HTTP 传输下重启 MCP 服务器后，`qwen mcp reconnect --all` 报告成功，但任何工具调用均返回 "Tool not found"。服务端更换 mcp-session-id 后客户端未同步，属于高危伪成功缺陷。  
   https://github.com/QwenLM/qwen-code/issues/9944

3. **[#9942] 将 Skill 命令从顶层 `/` 补全中隐藏** — 4 条评论  
   大量安装技能后 `/` 补全菜单被淹没，内置命令查找困难。社区希望技能不进顶层补全，保持与内置命令的层级区分。  
   https://github.com/QwenLM/qwen-code/issues/9942

4. **[#9927] Artifact updatedAt 不更新、write_file 中间文件残留** — 4 条评论  
   内容更新不触发 `updatedAt` 变化（仅注册字段变更时更新）；中间写入文件始终停留在 "missing" 状态，影响会话工件追踪准确性。  
   https://github.com/QwenLM/qwen-code/issues/9927

5. **[#9005] Anthropic wire 缺少 OpenAI wire 已有的流安全保护** — 4 条评论  
   `anthropicContentGenerator` 缺少 OpenAI 侧已实现的流安全机制，且 `@anthropic-ai/sdk` 仍固定在 2025 年 1 月的旧版本，跨后端一致性风险高。  
   https://github.com/QwenLM/qwen-code/issues/9005

6. **[#9966] VP 模式渲染超出一行高度预算，触发 Ink 全量重绘** — 2 条评论  
   ctrl-s 提示作为虚拟列表兄弟节点渲染时突破高度预算，导致每次提示出现都触发 Ink 全量重绘，是新的终端渲染热区问题。  
   https://github.com/QwenLM/qwen-code/issues/9966

7. **[#9934] MCP 工具结果总是全量渲染，不像读/搜索工具可折叠** — 2 条评论  
   长 MCP 输出（如 81 行文件内容）在 transcript 中完整展开，造成大量滚动噪音，社区期望默认折叠长 MCP 结果。  
   https://github.com/QwenLM/qwen-code/issues/9934

8. **[#9928] 固定任务无法分配给项目组** — 2 条评论  
   Qwen Code Desktop 中固定任务打开组菜单选择分组后 UI 显示已选中，但数据层未移动任务，存在状态不同步。  
   https://github.com/QwenLM/qwen-code/issues/9928

9. **[#9951] 支持开源 Mem0 协议提供商（可配置 baseUrl）** — 2 条评论  
   当前仅内置硬编码 `https://api.mem0.ai` 的 Platform V3 适配器与 generic-http-search-v1，缺少 Mem0 自托管开源版适配，社区希望补齐。  
   https://github.com/QwenLM/qwen-code/issues/9951

10. **[#9911] WebShell 切换后恢复 VS Code 消息编辑与回退** — 2 条评论  
   自 #9811 WebShell cutover 后，旧版逐消息编辑/回退交互未恢复；嵌入式 VS Code 仍以 ACP 为运行时边界，需要重新设计回退快照选择器。  
    https://github.com/QwenLM/qwen-code/issues/9911

## 4. 重要 PR 进展

1. **[#9394] feat(channels): 新增钉钉工作区频道**  
   基于现有 DWS CLI 认证资料，支持私聊、@提及、配置群组、文档@通知、原生待办变更、来源作用域会话与最终回复。自动修复进行中。  
   https://github.com/QwenLM/qwen-code/pull/9394

2. **[#9955] fix(core): 暴露解析后的代理执行模式**  
   代理工具显示现在携带运行时解析的执行模式，Web Shell transcript 归一化保留该字段并作为前台/后台任务判断的权威依据。  
   https://github.com/QwenLM/qwen-code/pull/9955

3. **[#9305] fix(ui): 短 VP 内容底部对齐，空白区移到顶部**  
   修复 VP 模式下内容短于视口时空隙出现在最后消息与输入框之间的问题（对应 #9300），提升交互连续性。  
   https://github.com/QwenLM/qwen-code/pull/9305

4. **[#9871] fix(ci): 中和 autofix stdout 回显中的 `##[` 命令**  
   autofix 管道现在同时防御现代 `::name::` 与传统 `##[name]` 两种 Actions 命令语法，防止日志注入破坏 CI 行为。  
   https://github.com/QwenLM/qwen-code/pull/9871

5. **[#9590] feat: 支持提供商感知的推理控制**  
   为 DeepSeek V4、GLM 5.2、Kimi 模型引入路由匹配的 WebShell 推理控制：开关混合、规范化 effort 档次、强制思考模型无关闭开关，请求适配器同步调整。  
   https://github.com/QwenLM/qwen-code/pull/9590

6. **[#9940] fix(review): 将仍成立的问题回复进原线程并关闭已修复项**  
   多轮审查中仍然成立的问题以回复形式落入原评论线程而非重新开评论；已修复的问题也会将裁决反馈到 PR 对应线程，避免噪音。  
   https://github.com/QwenLM/qwen-code/pull/9940

7. **[#9950] feat(core): plan mode 支持额外只读 Shell 根命令**  
   新增 `permissions.planMode.extraReadOnlyCommands` 配置，项目专属 CLI 的只读探测命令不再每次都触发审批弹窗。  
   https://github.com/QwenLM/qwen-code/pull/9950

8. **[#9829] fix(core): permissions.allow 真正限制发送给模型的工具模式**  
   配置至少一条 allow 规则后，未被覆盖的内置工具不再注册——从 `/tools` 列表消失且模型不可调用，兑现注册表级白名单语义。  
   https://github.com/QwenLM/qwen-code/pull/9829

9. **[#9870] fix(core): 允许限定范围的 Git 凭据配置**  
   集中化 HTTPS 扩展克隆/更新的 Git 客户端构造；为受限的公开/认证操作授权配置路径、协议覆盖及 config-count 环境变量。  
   https://github.com/QwenLM/qwen-code/pull/9870

10. **[#9638] fix(cli): 队友消息在工具轮次边界送达，而非整个任务结束**  
   Agent Team 中队友→领导的汇报不再等到领导的完整多轮任务结束，而是在每轮工具调用结果提交前送达，显著降低长任务协作延迟。  
   https://github.com/QwenLM/qwen-code/pull/9638

## 5. 热门 Discussions

（未提供 Discussions 数据，本节省略。）

## 6. 功能需求趋势

- **MCP 生态成熟度成为第一优先级**：重连可靠性（#9944）、长结果折叠展示（#9934）、技能命令补全降噪（#9942）、开源 Mem0 自托管支持（#9951）、工具注册表白名单（#9829）——社区正在推动 MCP 从“能连用”走向“可靠、可控、可治理”。
- **/review 审查体系密集迭代**：线程归位（#9940）、minimal 拓扑 A/B 臂（#9919）、prose-exec 与 counter-frame 审计（#9717）、deferred 建议可恢复（#9761）、语言陷阱/包装代理独立审查角度（#9788），团队正将代码审查打磨为核心卖点。
- **多模型/多提供商适配深化**：提供商感知推理控制（#9590）、Kimi 工具模式兼容（#9865）、Anthropic wire 流保护（#9005）、scoped Git 凭据配置（#9870），不同后端提供商的差异化适配是持续高发需求。
- **终端 UI 渲染与交互优化**：OpenTUI 迁移讨论（#8662）、VP 模式重绘修复（#9966）、短内容对齐（#9305）、MCP 结果折叠（#9934），终端显示体验打磨仍在高频推进。

## 7. 开发者关注点

- **流式输出稳定性**：#5975“120 秒无流活动”报错持续近两月且未解决，直接阻塞长思考模型在真实项目中的使用，是当前最集中的反馈焦点。
- **MCP 重连与状态一致性**：HTTP 传输下 session-id 变更后重连“假成功”属高危缺陷——错误提示将排查方向带偏；长 MCP 输出渲染策略同样有待改进。
- **多提供商兼容的“最后一公里”**：Kimi 拒绝 `uniqueItems` 导致整个请求 400、Anthropic wire 缺少流安全保护——非主流场景的兼容性问题直接影响生产可用性。
- **配置系统可预期性**：`permissions.allow` 此前未真正限制工具注册（#9829）、计划模式缺少只读命令白名单（#9950）、配置上下文所有权模糊（#8083、#4063），开发者期望配置语义收敛清晰。
- **多代理协作的消息治理**：#9638 改善了队友消息送达时机，但 #9510 暴露的“关闭请求淹没报告通道”说明多代理消息通道的优先级与分区治理仍在早期阶段。

</details>

<details>
<summary><strong>CodeWhale</strong> — <a href="https://github.com/Hmbown/CodeWhale">Hmbown/CodeWhale</a></summary>

# CodeWhale 社区动态日报 — 2026-08-25

## 今日速览

v0.9.12 集成分支（`codex/v0912-integration-20260823`）进入发布冲刺阶段，主线 PR #5576 已累计 72 个提交并完成发布阻断项；核心维护者 Hmbown 集中提交了 Provider 中立性审计（#5588）、巨型文件拆分（#5586）及死代码清理（#5587）等多个架构级 Issue，预示 0.9.12 将是一次深度重构版本。此外社区贡献活跃，模型配置 Bug（#5601）与子代理生命周期缺陷（#5596）是用户侧最重要的待修复问题。


## 社区热点 Issues

**#5588 — [v0.9.12] Provider 中立性：18 个 DeepSeek 排他门应改为 Provider 中立**
作者：Hmbown | 更新：08-24 | 评论：4 | 状态：OPEN
对全部 2,281 处 `deepseek` 出现进行审计，发现 18 处行为级门控不应绑定 DeepSeek。首批修复已包含 NVIDIA NIM 环境变量泄漏等问题。
https://github.com/Hmbown/CodeWhale/issues/5588

**#5573 — v0.9.12 里程碑追踪器（从这开始选任务）**
作者：Hmbown | 更新：08-24 | 评论：3 | 状态：OPEN
0.9.12 发布的 P0 必修复清单（资金与安全相关），含 #5566 等阻断项，是当前版本的唯一优先级参考。
https://github.com/Hmbown/CodeWhale/issues/5573

**#5586 — [v0.9.12] 拆分巨型文件：lib.rs（18.7k）、config.rs（12.3k）、client.rs（11.1k）、runtime_threads.rs（9.3k）**
作者：Hmbown | 更新：08-24 | 评论：3 | 状态：OPEN
四个超过 1 万行的生产代码文件持续造成维护困难，计划随 0.9.12 清理通道拆分。
https://github.com/Hmbown/CodeWhale/issues/5586

**#5582 — [v0.9.12] 工作流所有者快照将 Degraded 折叠为 Completed**
作者：jbovard2016 | 更新：08-23 | 评论：3 | 状态：OPEN
工作流降级（Degraded）状态在 owner 投影中被错误显示为已完成，掩盖了部分失败的真实状况。
https://github.com/Hmbown/CodeWhale/issues/5582

**#5583 — [v0.9.12] Workflow responseSchema 失败需有界修复与原始输出凭证**
作者：jbovard2016 | 更新：08-24 | 评论：3 | 状态：OPEN
工作流中 `responseSchema` 校验失败时直接中断运行，丢失了一次有界的重试机会，也未提供失败原始输出的回执。
https://github.com/Hmbown/CodeWhal/issues/5583

**#5601 — [bug] 全新安装时首次配置 MiniMax 和 Xiaomi 模型返回 404**
作者：Brook-WZ | 更新：08-24 | 评论：2 | 状态：OPEN
新用户配置 MiniMax / Xiaomi 模型 API Key 时立即报 404，疑似内置 URL 错误；DeepSeek 正常。仅影响新装配置流程。
https://github.com/Hmbown/CodeWhale/issues/5601

**#5585 — [bug] 测试 setup_confirm_toast_names_secret_store_and_global_scope 栈溢出**
作者：Hmbown | 更新：08-24 | 评论：3 | 状态：OPEN
该测试在 macOS 上 SIGABRT 栈溢出，`main` 和 0.9.12 分支均可复现，非本次引入的回归（bisect 证实）。
https://github.com/Hmbown/CodeWhale/issues/5585

**#5596 — [bug, v0.9.12] Turn 结束静默取消 turn 拥有的子代理并销毁可恢复工作**
作者：Hmbown | 更新：08-24 | 评论：1 | 状态：OPEN
父模型 turn 结束时，其子代理被直接销毁，即使 UI 显示子代理仍在后台运行。长耗时 review 子代理可能丢失全部有用成果且无警告。
https://github.com/Hmbown/CodeWhale/issues/5596

**#5595 — [bug, v0.9.12] 只读检查子代理在执行时拒绝工作区内的绝对路径 git -C**
作者：Hmbown | 更新：08-24 | 评论：1 | 状态：OPEN
一个 reviewer 子代理消耗约 347k tokens 却无任何产出，因为 `git -C <workspace> log` 被执行层拒绝——模型侧分类器、角色姿态门和执行信封均认为合法，但最终操作层仍拦截。
https://github.com/Hmbown/CodeWhale/issues/5595

**#5589 — [v0.9.12] Fleet 配置视图：Enter 循环回同一屏幕，模型切换入口隐蔽**
作者：Hmbown | 更新：08-24 | 评论：2 | 状态：OPEN
用户在 `/fleet config` 视图中选中角色行按 Enter 后无状态变化、无下钻，感觉像死循环；模型切换操作缺乏可见性。
https://github.com/Hmbown/CodeWhale/issues/5589


## 重要 PR 进展

**#5576 — 0.9.12 集成：必须修复项 + UX 修复（进行中）**
作者：Hmbown | 更新：08-24 | 状态：OPEN
0.9.12 周期集成分支，72 个提交，发布阻断项已全部完成，剩余版本号提升和 changelog/RC 门禁（跟踪 #5573）。不可提前合并。
https://github.com/Hmbown/CodeWhale/pull/5576

**#5606 — feat(runtime): 0.9.12 中继集成——统一托管 Chat 与原生运行时线程**
作者：Hmbown | 更新：08-24 | 状态：OPEN
0.9.12 备用通道，将托管 Chat 迁移至原生运行时线程（turn_operation_idempotency），并附带 R2 审批修复（MCP 工具按 kinds 审查）及 doctor --fix 用户确认机制。
https://github.com/Hmbown/CodeWhale/pull/5606

**#5535 — 监督操作栈：生命周期 outbox、/relaunch、会话控制套接字及目标延续静默期修复**
作者：M-Maciej | 更新：08-24 | 状态：CLOSED
一个 PR 五个改动，统一支撑长期会话的机器可读监督：`[lifecycle_outbox]` JSONL+webhook、`turn_start/end/stalled` 事件、`subagent_spawn/complete`，以及 control socket。
https://github.com/Hmbown/CodeWhale/pull/5535

**#5602 — fix(shell): 可靠解码 Windows 输出**
作者：zhuowp | 更新：08-24 | 状态：OPEN
保留跨 shell 读取分割的 UTF-8 与 Windows ANSI 代码页字符；仅在严格 UTF-8 解码失败后再使用系统 ACP；同步、有界、raw-delta、snapshot、tail 与 detached-reader 路径保持一致。
https://github.com/Hmbown/CodeWhale/pull/5602

**#5603 — feat(tui): 展示工具与 MCP schema 成本**
作者：wuisabel-gif | 更新：08-24 | 状态：OPEN
实现 #5553 的展示层范围：context inspector 新增来自最后模型工具目录的有界 schema 成本估算，包含目录总计和按工具行。
https://github.com/Hmbown/CodeWhale/pull/5603

**#5591 — Fix: 目标延续节流修复 - part a**
作者：M-Maciej | 更新：08-24 | 状态：CLOSED
修复 #5534：[goal] continuation_delay_seconds 之前只接入了两条目标延续路径之一，turn 内调度钩子完全没有等待，导致恢复会话瞬间连发多轮。
https://github.com/Hmbown/CodeWhale/pull/5591

**#5584 — fix(subagents): 持久化子代理审批回执**
作者：cyq1017 | 更新：08-24 | 状态：OPEN
关闭 #5543：子代理审批提示可能仅凭内存决策授予工具调用，缺少持久化的 Asked/终态证据。此 PR 让子代理运行时继承会话审批回执存储，并在暴露提示前提交 Asked。
https://github.com/Hmbown/CodeWhale/pull/5584

**#5594 — 控制套接字 - part d（最终）**
作者：M-Maciej | 更新：08-24 | 状态：OPEN
监督操作控制面：可选、仅 Unix、按会话绑定的换行分隔 JSON-RPC 套接字。默认关闭，行为不变。
https://github.com/Hmbown/CodeWhale/pull/5594

**#5590 — ci: 在 Pull Request 上运行 Linux workspace 测试**
作者：wuisabel-gif | 更新：08-24 | 状态：CLOSED
解决 #5547 的 CI 覆盖范围：非镜像分支 PR 现在直接在 GitHub Ubuntu 矩阵上运行完整 workspace 测试（nextest 全特性 + doctests + lockfile 检查）。
https://github.com/Hmbown/CodeWhale/pull/5590

**#5523 — refactor(tui): 从 turn 循环抽取工具调用阶段**
作者：bistack | 更新：08-24 | 状态：CLOSED
将工具调用规划抽取为 `plan_tool_calls`，审批/执行抽取为 `execute_planned_tools`，结果投影抽取为 `process_tool_results`，保持原始控制顺序与取消行为不变。
https://github.com/Hmbown/CodeWhale/pull/5523


## 功能需求趋势

- **v0.9.12 架构治理**：Provider 中立性审计（#5588）、巨型文件拆分（#5586）、死代码清理（#5587）成为本阶段核心，社区对代码质量与可维护性的关注度显著上升。
- **子代理生命周期管理**：#5596（turn 结束销毁子代理）、#5595（git 命令被错误拦截）、#5584（审批回执持久化）共同指向子代理可靠性是当前最痛的一环。
- **工作流（Workflow）可靠性**：#5582（Degraded 状态折叠）、#5583（responseSchema 失败无重试）表明工作流引擎的错误语义与有界恢复机制亟待完善。
- **可观测性与成本透明**：#5553（工具与 MCP schema 的 token 成本展示）、#5597（detached 子代理使用量丢失）说明用户希望精确掌握每一分钱花在哪里。
- **外部模型接入体验**：#5601（MiniMax/Xiaomi 配置 404）、#1482（NVIDIA NIM 404）提示多 Provider 支持仍有配置层兼容性欠缺。
- **监督操作（Supervised Operation）**：M-Maciej 的 lifecycle outbox、control socket、/relaunch 系列 PR 收到集中关注，暗示面向自动化/无人值守场景的需求正在上升。

## 开发者关注点

- **模型配置是新用户第一道坎**：全新安装后 MiniMax 和 Xiaomi 模型 API Key 配置即报 404；用户表示只能回退到 0.6 版本通过命令配置，体验倒挂明显。
- **子代理静默失败成本极高**：只读审查子代理空耗 347k tokens 零产出，且 turn 结束后子代理被静默销毁可恢复工作——开发者对这类"隐形故障"容忍度极低。
- **角色姿态缺乏单一事实来源**：#5575 指出角色定义在至少五处独立实现并已多次漂移，#5562 的 verifier 角色自相矛盾并非个例。
- **缓存连续性缺少验证手段**：#5571（C5 请求前缀连续性 debug-assert）、#5570（C4 Anthropic 路由缺 cache_control 断点）表明企业在意的成本优化（prompt caching）目前缺少可观测、可验证的保障。
- **巨型文件拖累开发效率**：开发者在 #5586 中直接反馈 1 万行以上的文件"持续造成痛苦"，并期望 0.9.12 能大力拆解。

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*