# AI CLI 工具社区动态日报 2026-08-13

> 生成时间: 2026-08-13 01:00 UTC | 覆盖工具: 10 个

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

# AI CLI 工具社区横向对比分析报告

**数据日期：2026-08-13** ｜ 覆盖工具：Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、Kimi Code CLI、OpenCode、Pi、Qwen Code、CodeWhale（原 DeepSeek-TUI）、Grok Build

---

## 1. 生态全景

AI CLI 工具已整体进入"规模落地与可靠性补课"并行的阶段：头部厂商（Claude Code、Codex、Copilot）在企业工作流、桌面端与 MCP 生态上密集迭代，开源新势力（OpenCode、Qwen Code、Pi、CodeWhale）以日/周级节奏发布版本抢占细分场景。社区反馈重心正从"功能新奇度"转向"生产级可信度"——子代理不假死、记忆不丢失、配额看得清、配置不被静默忽略，成为跨工具的共同诉求。与此同时，新模型快速更迭（Opus 5、Gemini 3.x、GPT-5.x、Grok 4.6）持续制造工具链适配回归，稳定性与兼容性已成为当前最大的竞争洼地。

---

## 2. 各工具活跃度对比

| 工具 | 上榜 Issues | 更新 PRs | 版本发布 | 备注 |
|---|---|---|---|---|
| Claude Code | 10 | 5 | v2.1.229 | 企业功能补全期，Windows 稳定性拖累口碑 |
| OpenAI Codex | 11 | 14 | 0.148.0-alpha.9（预发布） | 日更级迭代，企业成本/用量模块集中发力 |
| Gemini CLI | 10（48h 共 50） | 10（48h 共 26） | v0.56.0-nightly | 安全修复与子代理可靠性双线推进 |
| GitHub Copilot CLI | 10 | 3 | 无 | MCP 与钩子体系进入问题集中暴露期 |
| Kimi Code CLI | 1 主 Issue + 8 衍生子话题 | 2（另有 8 个活跃待审） | 无 | 社区体量小，记忆需求高度集中 |
| OpenCode | 10 | 10 | v1.18.17 | 计费与安全权限成为争议焦点 |
| Pi | 10 | 10 | 无 | 上下文压缩与 TUI 细节双线改进 |
| Qwen Code | 10 | 10 | Desktop v0.2.0 / v0.2.1 | 桌面/Web Shell 与多智能体快速迭代 |
| CodeWhale | 10 | 10 | v0.9.6（品牌切换） | 重构期（EPIC-005），社区合入摩擦明显 |
| Grok Build | 0 | 0 | 无 | 无可见社区活动 |

> 注："上榜 Issues/PRs"指各日报 Top 榜单数量，仓储实际动态量更高（如 Gemini 为 48h 窗口统计）。

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具与代表性诉求 |
|---|---|
| **Agent 执行可信度与假死防护** | Gemini MAX_TURNS 被伪报为 GOAL 成功（#22323）、代理挂起（#21409）、shell 假死（#25166）；Claude 多智能体 12 bug 复盘（#54393）；Qwen 长任务卡死（#8963）、后台协调缺陷（#8097）；CodeWhale 提议运行时 /stop 强制中断（#4959） |
| **记忆与上下文持久化** | Kimi 记忆系统（#1283，36 条评论持续 6 个月）；Qwen auto-memory RFC（#7040）进入实施；Gemini Auto Memory 无限重试与隐私质疑（#26522/#26525）；Claude 跨会话 transcript 诉求（#81835）；Codex 断电后状态回退（#26990） |
| **Windows/WSL 桌面稳定性** | Claude GPU 崩溃与 MSIX 自修复失败（#81698/#85199/#85905）；Codex Computer Use 截图失败（#25178）、设置卡死（#33967）；Copilot WSL2 键位错乱（#4328）；CodeWhale WSL2 网络问题（#4956）；Pi WSL 文件链接失效；Kimi Windows ANSI 兼容（#2298） |
| **MCP 生产级可靠性** | Gemini MCP 损坏配置 fail-open（#28787/#28794）；Copilot OAuth 刷新失败（#4464）、5xx 无重试（#4466）、Docker MCP 容器不退出（#4460）；OpenCode 工具已连接但未暴露（#33027）；CodeWhale nextCursor:null 违反规范（#5336）；Claude META 连接器超时（#86023） |
| **成本透明与配额控制** | Codex 线程信用展示与用量估算（#38281/#38282）；OpenCode 会话级预算（#42202），但 Zen 付费用户仍触发 429（#33495）与免费额度误判（#14273/#42128） |
| **新模型引入回归** | Claude Opus 5 幻觉（#82326）、WebSearch 400（#83364）；OpenCode Gemini 3 Pro 缺 thoughtSignature（#4832）；Qwen 0.21.2 图片加载崩溃（#8957）；Pi 接入 Grok 4.6（#8042） |
| **权限模型与安全边界** | Gemini $VAR 绕过安全门（#28691）、子代理未经许可运行（#22093）、SSRF 修复（#28557）；OpenCode .env 保护（#17073）、子代理继承 deny 规则（#42174）；Claude cyber safeguard 误报（#84352）、permissions.deny 不生效（#61268） |
| **TUI 交互细节** | Claude 左箭头误导航（#75899）；Codex 滚动缓冲丢行（#30745）、禁用自动滚动（#23517）；Gemini 上滑阅读被打断（#28405）；Pi CJK 宽度错位（#8055）、大提示编辑卡顿（#8029）；Copilot 会话选择器对比度（#4455） |

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术/生态路线 | 当前最短的板 |
|---|---|---|---|---|
| **Claude Code** | 企业级 agentic 编码，模型质量+合规双驱动 | 企业开发团队、专业开发者 | hooks/plugins/self-hosted runner + Remote Control | Windows 桌面稳定性、插件缓存 |
| **OpenAI Codex** | Enterprise workspace 原生 CLI，用量高度透明 | 大型企业、多会话重度用户 | Rust CLI + gRPC code-mode + thread-credit 成本体系 | IDE Context 远程/容器失效 |
| **Gemini CLI** | 安全优先、记忆优先的 Google 系 CLI | Google Cloud / Gemini 用户 | P1/P2 问题分级 + Auto Memory + 严格安全门 | 子代理状态误报与挂起 |
| **GitHub Copilot CLI** | 与 GitHub 平台深绑定的企业助手 | GitHub 企业用户、Actions 流水线 | ACP 协议 + MCP registry + 免 PAT | MCP 生产容错、配置静默失效 |
| **Kimi Code CLI** | Moonshot 模型生态的轻量终端助手 | 中文开发者、轻量用户 | 简单命令面，记忆系统待落地 | 功能纵深浅、跨会话无记忆 |
| **OpenCode** | 开源 TUI + Zen 低成本模型托管 | 独立开发者、性价比敏感用户 | 社区驱动功能（Mermaid 渲染/预算）+ 多 provider | Zen 计费逻辑信任危机 |
| **Pi** | 本地优先、极客向多 provider 客户端 | 技术极客、隐私敏感用户 | Ollama 本地代理 + OpenAI 兼容层 + 组件化 TUI | 上下文压缩不可靠、性能退化 |
| **Qwen Code** | 阿里模型锚点的全栈 CLI/Desktop/Web Shell | Qwen 模型用户、国内云用户 | 工作流子代理目录绑定 + Channel 轮换 + 记忆 RFC | 长任务自动化、回归控制 |
| **CodeWhale** | Rust TUI + 多 provider 路由 + 深度中文本地化 | 多模型切换用户、中文社区 | ratatui + OrcaRouter + MCP 严格合规 | 发布质量、社区 PR 合入流程 |
| **Grok Build** | xAI 官方 CLI（暂缺可见动态） | xAI 用户 | 待观察 | 社区活跃度空白 |

---

## 5. 社区热度与成熟度

| 梯队 | 工具 | 热度证据 | 阶段判断 |
|---|---|---|---|
| **第一梯队**<br>企业级高活跃 | Claude Code、OpenAI Codex、Copilot CLI | 单日 5–14 个 PR；企业功能连续发布；高赞议题集中（Claude Linux 桌面 498👍、Codex 取消自动解析 194👍、Copilot CIMD 35👍） | 存量优化 > 增量创新；Windows/远程场景补课是共同主题 |
| **第二梯队**<br>快速扩张 | Gemini CLI、OpenCode、Qwen Code | 日/周级 Release；Gemini 48h 更新 50 Issues/26 PRs；安全与计费问题集中爆发 | 规模增长阵痛期，社区信任建设是关键 |
| **第三梯队**<br>小而聚焦 | Kimi Code、Pi、CodeWhale | Issue 量少但讨论集中（Kimi 记忆 36 评论、Pi 压缩失效 17👍、CodeWhale EPIC 重构）；社区 PR 活跃但合入摩擦大 | 功能深挖与架构重构期 |
| **观察席** | Grok Build | 无公开社区活动 | 启动前夜或生态未成型 |

---

## 6. 值得关注的趋势信号

1. **"结果可信"比"能力惊艳"更值钱**——Gemini 将 MAX_TURNS 伪装为 GOAL 成功、Claude 多智能体 12 个 bug、Copilot rubber-duck 模型被静默覆盖，均指向同一结论：子代理/后台任务的真实状态上报与强制中断能力已成为基础设施级需求。**选型应考察工具是否透传真实终止原因、提供心跳与取消机制。**

2. **跨会话记忆是下一个分水岭战场**——Kimi 记忆 Issue 持续 6 个月热度不减，Qwen 记忆 RFC 已进入实施阶段，Gemini Auto Memory 则因"先送模型后脱敏"遭遇隐私质疑。**记忆能力将区分下一代 CLI；同时"记忆何时进入模型上下文"的安全设计会成为企业采购的硬指标。**

3. **Windows/WSL2 是行业性集体短板**——至少 7 个工具出现相关反馈，从 Claude GPU 崩溃、Codex Computer Use 失败到 Copilot 键位错乱。而 Claude 的 Linux 桌面请求拿到 498👍，说明跨平台诉求远未被满足。**对 Windows 开发者团队，桌面稳定性应作为比功能清单更重要的选型权重。**

4. **MCP 正经历"生产化大考"**——从协议合规（nextCursor 为 null 即导致严格客户端报错）到瞬时故障容错（5xx 无重试、OAuth 刷新失败）、资源回收（Docker 容器不退出）与安全默认值（fail-open、SSRF）。**依赖 MCP 的团队应重点评估客户端对瞬时故障的退避能力和安全默认配置。**

5. **成本可视化成为企业付费的信任前提**——Codex 线程级 credit/成本展示与 OpenCode 会话级预算同日落地，而 OpenCode Zen"付费仍 429"引发信任危机。**企业选型时应优先选择提供会话级用量账单的工具，避免黑盒计费。**

6. **配置被静默忽略是普遍的信任杀手**——Copilot 模型覆盖不生效、hook 不触发、marketplace 不更新，Claude permissions.deny 失效，Gemini settings.json 被忽略，多起"我配置了但没生效"正在累积用户不满。**工具应提供配置生效诊断命令；用户升级版本后应主动验证关键配置。**

7. **模型升级与工具适配的错位将常态化**——Opus 5、Gemini 3 Pro、GPT-5.x、Grok 4.6 每次发布都伴随一轮工具链回归（幻觉、函数调用失败、图片崩溃）。**建议开发者在重大模型版本发布后延迟 1–2 周升级 CLI，观察社区回归报告再行动。**

8. **开源贡献流程决定生态活力**——CodeWhale 至少 4 个社区 PR 因 base drift 无法直接合并，只能由维护者代为落地；OpenCode 单日 PR 高度集中在个别核心贡献者手中。**评估开源工具时，PR 响应周期与维护者覆盖力比 star 数更有参考价值。**

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据来源**: [anthropics/skills](https://github.com/anthropics/skills) | **数据截止**: 2026-08-13

---

## 1. 热门 Skills 排行（按评论/关注度 Top 8）

> 说明：所有上榜 PR 均处于 **Open（未合并）** 状态，且排序前列被核心工具链修复占据，反映社区当前最紧迫的诉求是"修工具"而非"造技能"。

| 排名 | PR | 功能 | 社区讨论热点 | 状态 |
|------|-----|------|-------------|------|
| 1 | [skill-creator 评估修复 #1298](https://github.com/anthropics/skills/pull/1298) | 修复 `run_eval.py` 永远报告 recall=0% 的问题，涉及评估产物安装、Windows 流读取、触发检测与并行 worker | 核心工具链失效：10+ 独立复现（关联 Issue #556、#1169），描述优化闭环"在噪声上优化" | Open |
| 2 | [document-typography #514](https://github.com/anthropics/skills/pull/514) | AI 生成文档的排版质检：孤字换行（1-6 词溢出）、寡妇段落（标题滞留页底）、编号错位 | 覆盖每一份 Claude 生成的文档，用户极少主动要求但普遍受影响 | Open |
| 3 | [pdf 大小写修复 #538](https://github.com/anthropics/skills/pull/538) | 修复 `SKILL.md` 中 8 处大小写不匹配的引用（`REFERENCE.md` → `reference.md` 等） | 在大小写敏感文件系统上直接 break | Open |
| 4 | [odt 技能 #486](https://github.com/anthropics/skills/pull/486) | OpenDocument 全流程支持：创建、模板填充、解析、ODT 转 HTML（.odt/.ods） | 开源/ISO 标准文档格式需求，LibreOffice 生态衔接 | Open |
| 5 | [frontend-design 改进 #210](https://github.com/anthropics/skills/pull/210) | 重写 frontend-design 技能，提升指令清晰度与可操作性 | 技能编写方法论：确保每条指令可在单次会话中被 Claude 实际执行 | Open |
| 6 | [skill-quality/security-analyzer #83](https://github.com/anthropics/skills/pull/83) | 元技能：五维质量评估（结构/文档/示例等）+ 安全分析 | 技能的"质量度量标准"与安全审查能力 | Open |
| 7 | [docx w:id 冲突修复 #541](https://github.com/anthropics/skills/pull/541) | 修复跟踪修订与现有书签的 `w:id` 冲突导致的文档损坏 | OOXML 中 `w:id` 为书签/修订/批注共享 ID 空间，硬编码低 ID 引发损坏 | Open |
| 8 | [skill-creator YAML 校验 #539](https://github.com/anthropics/skills/pull/539) | 在 `quick_validate.py` 中检测未加引号的 description 字段含 `:` 的问题 | 防止 YAML 静默解析失败导致描述截断/分裂 | Open |

---

## 2. 社区需求趋势（来自 Issues）

| 趋势方向 | 代表 Issue | 热度信号 |
|----------|-----------|---------|
| **安全与信任边界** | [社区技能在 anthropic/ 命名空间分发，构成信任边界滥用 #492](https://github.com/anthropics/skills/issues/492) | **43 评论**，全仓最高；用户可能向非官方技能授予过高权限 |
| **组织级技能共享** | [在 Claude.ai 中启用组织级技能共享 #228](https://github.com/anthropics/skills/issues/228) | 16 评论，8 👍；企业用户要求共享链接/技能库，替代手动文件传输 |
| **工具链可靠性** | [run_eval.py 触发率 0% #556](https://github.com/anthropics/skills/issues/556)、[skill-creator 应更新为最佳实践 #202](https://github.com/anthropics/skills/issues/202) | 12 + 8 评论；评估脚本失效问题被反复报告 |
| **新技能方向储备** | [compact-memory 符号化记忆 #1329](https://github.com/anthropics/skills/issues/1329)、[agent-governance 治理模式 #412](https://github.com/anthropics/skills/issues/412)、[推理质量门流水线 #1385](https://github.com/anthropics/skills/issues/1385) | 长运行代理的记忆压缩、Agent 安全治理、输出质量门控 |
| **上下文窗口治理** | [claude-api 技能单次注入 ~156k tokens #1487](https://github.com/anthropics/skills/issues/1487) | 4 评论；技能体积失控耗尽上下文 |
| **生态集成** | [AWS Bedrock 支持 #29](https://github.com/anthropics/skills/issues/29)、[Skills 暴露为 MCP API #16](https://github.com/anthropics/skills/issues/16) | 4 + 4 评论；跨平台运行与协议标准化诉求 |

---

## 3. 高潜力待合并 Skills（评论活跃但未合并）

| PR | Skill | 看点 |
|-----|-------|------|
| [#514 document-typography](https://github.com/anthropics/skills/pull/514) | 文档排版质检 | 覆盖所有 AI 生成文档的通用场景，非特定技术栈 |
| [#486 odt](https://github.com/anthropics/skills/pull/486) | OpenDocument 处理 | 填补官方技能库的 ODF 格式空白，企业文档兼容需求明确 |
| [#723 testing-patterns](https://github.com/anthropics/skills/pull/723) | 全栈测试模式库 | 覆盖 Testing Trophy 模型、单元测试 AAA、React Testing Library 等 |
| [#568 servicenow](https://github.com/anthropics/skills/pull/568) | ServiceNow 平台技能 | 企业级广度：ITSM/ITOM/SecOps/ITAM/FSM/SPM/CSDM/IntegrationHub |
| [#525 pyxel](https://github.com/anthropics/skills/pull/525) | 复古游戏开发 | 与 pyxel-mcp 联动的完整工作流（write → run → inspect → iterate） |
| [#1367 self-audit](https://github.com/anthropics/skills/pull/1367) | 输出质量审计 | 机械文件验证 + 四维推理审计，通用且与 #1385 提案呼应 |
| [#83 quality/security-analyzer](https://github.com/anthropics/skills/pull/83) | 技能质量与安全元分析 | 首次为"技能本身"建立质量与安全评估标准 |
| [#1479 plan-file-hygiene](https://github.com/anthropics/skills/pull/1479) | 规划文件生命周期管理 | 解决规划产物无限堆积的治理缺口 |

---

## 4. Skills 生态洞察

**当前社区最集中的诉求是：修复 skill-creator 工具链可靠性（0% recall 评估失效）并治理安全/信任边界（anthropic/ 命名空间滥用），表明生态正从"新技能数量扩张"转向"生产级工具链与安全治理"阶段。**

---

# Claude Code 社区动态日报 — 2026-08-13

## 今日速览

- 发布 v2.1.229，新增 self-hosted runner 的 hook 支持与 SSE keepalive，并补全 remote-control 续连文档。
- Windows 桌面版稳定性问题集中爆发（GPU 崩溃、反复崩溃、MSIX 自修复失败），成为当前社区最热痛点。
- Opus 5 相关回归（幻觉、WebSearch 400）与插件缓存失效问题持续发酵，开发者反馈密集。

## 版本发布

### v2.1.229
- 文档化 `claude remote-control --continue`，用于恢复最近的 Remote Control 会话。
- 为 self-hosted runner 会话新增服务端提供的 Claude Code hook 支持，与托管环境行为对齐。
- 为 gateway 流式响应添加 SSE keepalive pings，提升长连接稳定性。

## 社区热点 Issues（Top 10）

### 1. #84352：CVP 批准的组织仍收到 cyber safeguard 阻断
80 条评论 | 12 👍 | 作者: federicolopeza
此前已通过 Cyber Verification Program 审批的 Claude.ai 组织，在 Claude Code 中再次遭遇 cyber-safeguard 阻断，且验证门户状态回退为“Under review”。评论数高表明影响面大，涉及企业合规与安全策略误报。
链接：https://github.com/anthropics/claude-code/issues/84352

### 2. #65697：请求官方 Linux 桌面版
498 👍 | 52 条评论（已关闭） | 作者: powell-clark
社区高赞功能请求，希望提供 Ubuntu LTS/Debian 官方桌面构建。虽已关闭，但 498 👍 足见需求之强烈。
链接：https://github.com/anthropics/claude-code/issues/65697

### 3. #54393：多智能体协调 12 个 bug 的事后分析
27 条评论 | 作者: ThatDragonOverThere
作者对单个 autonomous-overnight 周期内暴露的 12 个多智能体协调 bug 进行了详细复盘。虽是个人整理，但涉及 agent 间协作的通用架构缺陷，对理解当前 agent 系统边界有参考价值。
链接：https://github.com/anthropics/claude-code/issues/54393

### 4. #81698：Windows 桌面版 GPU 进程崩溃导致所有会话终止
25 条评论 | 作者: J-dev2
RTX 5080 Laptop GPU 上，Claude 桌面应用 GPU 进程崩溃（exit code 101457950），整个应用及所有运行中会话被杀死。这是 Windows 桌面版稳定性问题的最新一例。
链接：https://github.com/anthropics/claude-code/issues/81698

### 5. #14061：/plugin update 不失效插件缓存
25 条评论 | 31 👍 | 作者: shohei-sawaguchi
执行 `/plugin update` 后插件缓存未失效，新版本无法生效。31 👍 说明这是插件机制中的高频痛点，直接影响使用插件的开发者工作流。
链接：https://github.com/anthropics/claude-code/issues/14061

### 6. #75899：macOS 左箭头误导航到 agents 界面
14 条评论 | 19 👍 | 作者: u-a-13
聊天输入框中按左箭头会意外跳转到 agents/background-tasks 界面，且无法重新绑定，返回时还会破坏主会话视图。键盘交互细节影响日常使用体验。
链接：https://github.com/anthropics/claude-code/issues/75899

### 7. #85199：Windows 桌面版反复崩溃需手动 Repair
13 条评论 | 作者: romers352
Claude Desktop 在 Windows 上反复崩溃，且需要“Advanced Options → Repair”才能恢复。与 #81698/#85905 共同构成 Windows 桌面版稳定性问题的完整图景。
链接：https://github.com/anthropics/claude-code/issues/85199

### 8. #79366：Worktree 会话复用旧目录
11 条评论 | 7 👍 | 作者: sandopolus
新会话意外落在之前会话创建的 worktree 目录中，而非创建全新目录。这破坏了 worktree 隔离的预期，在多任务并行时可能导致状态串扰。
链接：https://github.com/anthropics/claude-code/issues/79366

### 9. #82326：Opus 5 出现此前版本没有的幻觉
9 条评论 | 作者: andig
用户反馈 Opus 5 开始编造答案，而 4.8 不会。新模型上线往往伴随质量回归，社区对此敏感度高。
链接：https://github.com/anthropics/claude-code/issues/82326

### 10. #66202：希望支持将 agent 会话标记为完成/移除
4 条评论 | 20 👍 | 作者: akovalova-cz
后台 agent 会话停留在“Ready for review”/“Needs input”状态时，用户希望可以直接标记为完成并从 agents 视图移除。这是 agent 工作流管理的一个明确缺口。
链接：https://github.com/anthropics/claude-code/issues/66202

## 重要 PR 进展

过去 24 小时共 5 条 PR 更新，以下全部列出：

1. **#85925（已关闭）**：docs: 将剩余旧版文档链接指向 code.claude.com。清理 docs.claude.com 的过期引用，纯文档维护。
   链接：https://github.com/anthropics/claude-code/pull/85925

2. **#85822（已关闭）**：docs: 修复 plugins 和 examples 中的过期文档链接与 README 漂移，包含 hooks 示例和 plugins README 链接修正。
   链接：https://github.com/anthropics/claude-code/pull/85822

3. **#41611（打开）**：为 Claude Code 添加缺失的 source。PR 自 2026-03-31 发起，长期未合并，内容较简略。
   链接：https://github.com/anthropics/claude-code/pull/41611

4. **#42996（打开）**：examples: 新增 MEP（Meat Puppet Elimination Protocol）——面向多机器 AI 会话的异步状态中继模式，旨在解决跨机器/会话恢复时的上下文丢失问题，零新基础设施。
   链接：https://github.com/anthropics/claude-code/pull/42996

5. **#57888（已关闭）**：将 `child_process_exec` 规则限定为 JS/TS 文件，修复 Python `asyncio.create_subprocess_exec` 的误报，提升安全提醒 hook 的精准性。
   链接：https://github.com/anthropics/claude-code/pull/57888

## 功能需求趋势

1. **Linux 官方桌面版**（#65697）：498 👍 的压倒性需求，虽然被关闭但呼声不减。
2. **Agent 会话管理**（#66202）：需要「标记完成/移除」等操作，说明 agent 后台任务已进入日常高频使用。
3. **插件机制可靠性**（#14061/#76882）：插件缓存不更新、marketplace 更新不同步，插件系统需要更稳健的版本管理。
4. **多智能体协调稳定性**（#54393/#86059）：跨会话消息打断、状态丢失，多 agent 并行场景仍不成熟。
5. **新模型（Opus 5）适配与质量**（#82326/#83364）：幻觉重现、WebSearch 在 xhigh/max effort 下返回 400，新模型引入的回归需要快速修复。
6. **桌面应用跨会话/跨机器连续性**（#81835/#78720）：用户希望桌面应用展示磁盘上的历史 transcript，并减少 git 状态变化导致的 prompt cache 失效。
7. **Windows 桌面版稳定性**（#81698/#85199/#85905）：GPU 崩溃、反复崩溃、MSIX 自修复失败，Windows 用户正经历明显的质量滑坡。

## 开发者关注点

- **Windows 桌面版崩溃是当前最大痛点**：#81698（GPU 进程崩溃）、#85199（反复崩溃）、#85905（浏览器面板触发 Electron GPU 崩溃并导致 MSIX 自修复失败）三线齐发，且崩溃后会话数据受损。
- **插件缓存与安装状态不同步**：#14061 与 #76882 均指出版本更新了但配置未同步，造成“已更新但没生效”的困惑。
- **Opus 5 回归问题**：不仅幻觉重现（#82326），WebSearch 在 xhigh/max effort 下不可用（#83364），新模型在特定配置组合下存在兼容性缺口。
- **MCP 连接器稳定性**：#86023（META 连接器超时）、#71649（claudeai-proxy 无法重连），连接器掉线后缺乏恢复路径，影响依赖外部工具链的自动化流程。
- **权限与安全策略粒度**：#61268 报告 `permissions.deny` 规则不生效；#84352 的 cyber safeguard 误报则从另一个方向体现了安全策略的精度问题。
- **终端兼容性策略**：#71700 指出键盘协议按终端名白名单而非能力检测，导致 Alacritty 等支持 CSI ? u 的终端被拒绝，暴露了 TUI 层的兼容性判断缺陷。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-08-13

## 今日速览

今日 Codex 仓库动态密集：CLI 发布 0.148.0-alpha.9 预发布版本；社区对"60 秒自动解析"的配置诉求持续升温（70 条评论、194 👍）；PR 侧围绕插件指标采集、线程用量展示、gRPC 会话重连等方向有多项合并；Windows 平台上的 IDE Context 与 Computer Use 问题依然是开发者反馈的重灾区。

## 版本发布

- **[rust-v0.148.0-alpha.9]** 发布 0.148.0-alpha.9 预发布版本，未附带详细更新说明。
  链接: openai/codex Release 0.148.0-alpha.9

## 社区热点 Issues

1. **[#28969] 增加设置以禁用 60 秒自动解析问题**
   - 热度：70 评论 / 194 👍
   - 用户希望在 CLI 中关闭"问题在 60 秒后自动解析"的行为，尤其是 Plus 用户在使用 gpt-5.5 时深受其扰。该 issue 已持续近两个月，今日仍在活跃讨论，是当前社区最关注的配置类议题。
   - 链接: openai/codex Issue #28969

2. **[#25178] Windows Computer Use 截图失败（SetIsBorderRequired 报错）**
   - 热度：25 评论 / 13 👍
   - Windows 10 22H2 上 `get_window_state` 截图请求在捕获前即失败，错误为 `0x80004002`（不支持此接口）。Computer Use 已可完成窗口列表/激活/键盘输入，唯独截图不可用。
   - 链接: openai/codex Issue #25178

3. **[#31553] VS Code 扩展更新后不再自动包含 IDE 上下文**
   - 热度：17 评论 / 12 👍
   - 更新到 26.623.141536 后，远程容器（.vscode-server）场景下 IDE 上下文自动附加功能失效，影响远程开发工作流。
   - 链接: openai/codex Issue #31553

4. **[#26990] Windows Desktop 本地状态在断电后丢失/回退**
   - 热度：14 评论 / 0 👍
   - 电源中断后 pins/projects 被重置、配置回退、时间戳异常。桌面应用本地状态未做崩溃安全处理，影响数据可靠性。
   - 链接: openai/codex Issue #26990

5. **[#37398] Codex Desktop 打开未加载聊天时固定等待约 5 秒**
   - 热度：14 评论 / 9 👍
   - 即使聊天记录很小，打开时也会因 owner-discovery 超时机制固定延迟约 5 秒（实际读取仅需 200ms 内），严重影响本地历史会话的打开体验。
   - 链接: openai/codex Issue #37398

6. **[#33967] ChatGPT for Windows 无法完成设置或进入受限访问模式**
   - 热度：12 评论 / 0 👍
   - 应用卡在 "Complete Windows setup" 界面，导致无法正常使用桌面应用。
   - 链接: openai/codex Issue #33967

7. **[#34920] IDE Context 在扩展 26.715.x 中因 RPC 序列化错误失效**
   - 热度：10 评论 / 5 👍
   - 在 Windows 上的 VS Code 和 Devin 中均复现，多个版本（26.707.91948、26.715.31925、26.715.61943）均受影响，且 GPT-5.6 已可用但 IDE Context 仍不可用。
   - 链接: openai/codex Issue #34920

8. **[#35419] WSL2 下 VS Code IDE context 自动禁用且选中文本不附加**
   - 热度：6 评论 / 10 👍
   - 扩展版本 26.721.41059，WSL2 环境中自动 IDE 上下文功能异常，选中文本无法作为上下文附加。
   - 链接: openai/codex Issue #35419

9. **[#30745] Codex TUI 滚动缓冲区行丢失**
   - 热度：5 评论 / 3 👍
   - 当内联底部视口高度在流式输出期间变化时，已完成消息行可能从终端滚动缓冲区中丢失（对话持久化不受影响）。
   - 链接: openai/codex Issue #30745

10. **[#38250] Codex Desktop 打开含过期子代理的任务时可能无限空白**
    - 热度：2 评论 / 0 👍
    - 某些已有任务永远无法完成打开，选择任务后界面持续空白，需要更新版本（26.803.61601）修复。
    - 链接: openai/codex Issue #38250

11. **[#23517] 请求支持禁用自动滚动**
    - 热度：5 评论 / 8 👍
    - 用户反馈长回复期间自动滚动造成视觉不适，希望提供配置项。
    - 链接: openai/codex Issue #23517

## 重要 PR 进展

1. **[#38285] 将 codex-execpolicy 移至协议开发依赖**
   - 将 `codex-execpolicy` 声明为 `codex-protocol` 的 dev dependency，匹配其仅用于测试的用途，减少生产依赖体积。
   - 链接: openai/codex PR #38285

2. **[#38283] 从远程执行器采集插件指标**
   - 允许对远程插件命令执行指标采集：解析 manifest 声明的 metric operations 并针对 executor 文件系统执行；在 executor 私有的临时目录中创建 sidecar 并流式回传有界输出。
   - 链接: openai/codex PR #38283

3. **[#38282] TUI 状态栏新增线程用量展示**
   - 为 Enterprise 工作区在可配置状态栏和终端标题中新增 `thread-credits` 与 `estimated-thread-cost` 条目；仅在选中时按需拉取共享的用量估算。
   - 链接: openai/codex PR #38282

4. **[#38281] `/status` 中显示预估线程用量**
   - 扩展 `account/usage/read` 接口，支持按 `threadId` 查询线程级预估额度与美元成本，包含模型/推理/速度/Token 明细，向后兼容。
   - 链接: openai/codex PR #38281

5. **[#38280] 使用 protobuf 内置 Bazel proto 规则**
   - code-mode 协议直接使用 `com_google_protobuf` 仓库加载 `proto_library`，移除不再需要的 `rules_proto` 直接依赖。
   - 链接: openai/codex PR #38280

6. **[#38276] 跟踪后台 unified exec 命令的插件指标**
   - 解决 unified exec 提前 yield 时后台命令持续运行的问题：指标采集保持到命令退出为止，即使 item 完成消息晚于 turn 完成才到达。
   - 链接: openai/codex PR #38276

7. **[#38275] 统一 turn 输入提交与路由**
   - 新增 `TurnInputRequest` 及类型化提交结果，实现原子化启动/转向/拒绝输入；在 `CodexThread` 上暴露 `start_or_steer_turn`、`start_turn_if_idle`、`steer_turn`。
   - 链接: openai/codex PR #38275

8. **[#38274] 持久化世界状态改为 JSON 对象表示**
   - 将 world-state 快照与合并补丁的 `state` 字段类型约束为 keyed sections 的 JSON 对象，避免回放代码处理无法表达世界状态的任意 JSON。
   - 链接: openai/codex PR #38274

9. **[#38272] 会话历史条目标记创建时间**
   - 为本地生成的 user/developer/agent/tool-output 条目写入小数 Unix 创建时间戳，并在后续请求中保留已有创建时间。
   - 链接: openai/codex PR #38272

10. **[#38257] 主机重启后自动重连 gRPC code-mode 会话**
    - 缓存的 code-mode 会话在 gRPC 主机停止后自动重开，序列化并发重连尝试并协调关闭；cell ID 按新的主机代数（generation）限定范围，避免陈旧回调。
    - 链接: openai/codex PR #38257

11. **[#38265] Windows 托管代理使用有界回退端口**
    - 优先尝试显式配置的 HTTP/SOCKS5 代理端口，不可用时在协议首选的端口范围内扫描；HTTP 与 SOCKS5 监听器独立预留，避免端口冲突。
    - 链接: openai/codex PR #38265

12. **[#38258] 统一外部认证提供商处理**
    - 使用各 `ExternalAuth` 提供商自身的错误分类处理 resolve/refresh/validation 失败；支持运行时替换提供商，替换成功后可清除已记录的永久刷新失败。
    - 链接: openai/codex PR #38258

13. **[#38253] unified exec 命令的插件指标采集**
    - 为通过 unified exec 启动的本地插件命令创建指标 sidecar，授予沙箱访问输出文件的权限；初始命令退出后清理 sidecar。
    - 链接: openai/codex PR #38253

14. **[#29752] feat(core): 集成实验性凭据代理**
    - 将凭据代理集成到 Codex core，支持托管子进程在 shell 生命周期中维持 broker 值，防止子进程丢失代理凭据。
    - 链接: openai/codex PR #29752

## 功能需求趋势

1. **用户可控的等待/超时行为**：社区强烈要求可配置化——禁用 60 秒自动解析（#28969）、`request_user_input` 在 Default 模式下无限等待（#37472）、禁用自动滚动（#23517）。
2. **线程用量/成本可视化**：多个 PR 同日在推进线程级 credit/成本展示（#38270、#38281、#38282），表明 Enterprise 用户对用量透明度的需求正在上升。
3. **IDE 上下文可靠性回归**：多版本、多平台（Windows/WSL2/容器）下 IDE Context 失效/静默禁用/不附加选中文本是当前头号集成痛点（#31553、#34920、#35419、#34696、#35333）。
4. **Windows Desktop 稳定性**：本地状态崩溃安全（#26990）、设置卡死（#33967）、Computer Use 截图失败（#25178）、子代理卡死（#37018）构成 Windows 平台全面稳定性诉求。
5. **远程/多主机工作流支撑**：远程创建的线程缺少自动化事件推送（#24280）、应用更新后遗留旧 app-server 守护进程（#32983）等，反映远程控制场景仍在成熟中。

## 开发者关注点

- **高频痛点：IDE Context 在远程/容器/WSL2 环境中系统性失效**，涉及 RPC 序列化错误、workspaceRoot 缺失、选中文本不附加等多种表现，且多个版本未修复，开发者已在 issue 中相互确认影响范围。
- **会话恢复问题集中**：本地聊天打开被固定 5 秒超时拖慢（#37398）、sqlite 状态回填卡死（#28087）、断电后配置回退（#26990）、含过期子代理的任务打开后空白（#38250），这些都在影响日常会话切换效率。
- **超时与自动解析策略是最大争议点**：#28969 以 194 👍 位居所有 issue 榜首，说明用户在长时间任务中频繁被打断是当前 CLI 体验的主要挫折来源。
- **TUI 细节体验开始被社区深挖**：滚动缓冲区丢行（#30745）、side thread 创建报错（#38248）、`/fork` 后父线程写入锁未释放（#38144），显示 CLI 重度用户对终端交互细节要求日益提高。
- **多代理/子代理场景出现新稳定性问题**：多个 active subagent 导致 Windows 应用冻结（#37018）、子代理 schema 中缺少 `close_agent`（#36211），多代理工作流正在暴露工程化短板。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-08-13

> 数据来源：[github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) ｜ 覆盖时间：2026-08-12 至 2026-08-13（共更新 50 个 Issues、26 个 PRs）

## 今日速览

- 今日发布 v0.56.0-nightly，重点修复模型容量耗尽误判与核心配额查询的模型映射问题。
- 社区最热议题集中在子代理可靠性：MAX_TURNS 被误报为 GOAL 成功（#22323，12 条评论）、通用代理挂起（#21409，8 个 👍）。
- 安全修复密集推进：MCP 配置损坏不再 “fail-open”（#28787/#28794）、阻断 `$VAR` 变量展开绕过安全门（#28691）。

## 版本发布

### v0.56.0-nightly.20260812.g5024443c7

**What's Changed:**

- **fix(core,cli)**：解决模型容量耗尽的误判问题，并修正核心配额查询的模型映射错误。对于此前被错误判定为容量耗尽的用户，本次更新应能显著减少不必要的任务中断。
- **feat(evals)**：新增本地评估报告命令和开发者文档，便于在本地生成和查看评估结果。

## 社区热点 Issues

### 1. [P1] Subagent 在 MAX_TURNS 后被误报为 GOAL 成功，真实中断被隐藏
- 作者：matei-anghel ｜ 更新：2026-08-13 ｜ 评论：12 ｜ 👍：2
- [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)
- **为什么重要**：`codebase_investigator` 子代理在触发最大轮次限制后，仍返回 `status: "success"` 和 `Termination Reason: "GOAL"`，导致用户无法感知真实的中断原因。这是当前评论数最高的 Issue，直接影响对子代理执行结果的可信度。

### 2. [P1] Generalist 代理挂起，连创建文件夹等简单操作都会卡死
- 作者：turmanticant ｜ 更新：2026-08-13 ｜ 评论：8 ｜ 👍：8
- [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)
- **为什么重要**：8 个 👍 表明影响面广。用户反馈等待一小时仍无结果，只能通过提示词禁用子代理来绕过。该 Issue 创建于 3 月，至今仍活跃，属于高优先级未决问题。

### 3. [P1] Shell 命令执行完成后卡在 “Waiting input”
- 作者：rnett ｜ 更新：2026-08-13 ｜ 评论：4 ｜ 👍：3
- [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)
- **为什么重要**：即使是 `ls` 这类最简单的命令，执行完成后 CLI 仍显示命令活跃并等待用户输入。这会直接打破自动化工作流，且用户报告“反复出现”。

### 4. [P2] Auto Memory 会无限重试低信号会话
- 作者：SandyTao520 ｜ 更新：2026-08-13 ｜ 评论：5
- [Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522)
- **为什么重要**：当提取代理认为会话“低信号”而不读取时，该会话会一直保留在未处理队列中，导致 Auto Memory 无意义地反复重试，浪费 token 和 API 配额。

### 5. [P2][Security] Auto Memory 应在内容进入模型上下文之前完成确定性脱敏
- 作者：SandyTao520 ｜ 更新：2026-08-13 ｜ 评论：4
- [Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525)
- **为什么重要**：当前流程先将 transcript 发送到模型，再通过提示词要求模型脱敏，敏感信息实际上已经暴露在模型上下文中。此外，服务还会记录现有 skill 内容，有隐私泄露风险。

### 6. [P1] 浏览器子代理在 Wayland 环境下失败
- 作者：sigmaSd ｜ 更新：2026-08-13 ｜ 评论：4 ｜ 👍：1
- [Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)
- **为什么重要**：Linux Wayland 用户无法使用浏览器子代理，且报告显示 `Termination Reason: GOAL` 但实际功能未完成（与 #22323 同类的“成功假象”）。属环境兼容性高优先级缺陷。

### 7. [P2] Gemini 不会主动使用自定义 skills 和子代理
- 作者：rnett ｜ 更新：2026-08-13 ｜ 评论：6
- [Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)
- **为什么重要**：用户配置了 gradle、git 等 skills，但模型在相关场景下几乎从不主动调用，只有显式指示才会使用。这削弱了自定义扩展机制的核心价值，社区讨论颇为活跃。

### 8. [P2] 工具数量超过 128 个后 API 返回 400 错误
- 作者：gundermanc ｜ 更新：2026-08-13 ｜ 评论：3
- [Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246)
- **为什么重要**：当用户启用大量 MCP 服务或扩展工具时，超出 128 个工具即触发 400 错误。社区期望 CLI 能按任务动态裁剪工具范围，而非直接失败。

### 9. [P2] v0.33.0 起子代理未经许可自动运行
- 作者：jetspiking ｜ 更新：2026-08-13 ｜ 评论：3
- [Issue #22093](https://github.com/google-gemini/gemini-cli/issues/22093)
- **为什么重要**：用户已将所有 agent mode 设为 disabled，但更新后子代理仍被调用。这是权限控制回归问题，可能导致模型执行用户未授权的操作。

### 10. [P2] `~/.gemini/agents/` 中的 symlink 无法被识别为代理
- 作者：wtanaka ｜ 更新：2026-08-13 ｜ 评论：4
- [Issue #20079](https://github.com/google-gemini/gemini-cli/issues/20079)
- **为什么重要**：用户希望通过 symlink 将代理配置链接到其他位置或纳入版本管理，但当前实现直接忽略 symlink 文件，降低了配置灵活性。

## 重要 PR 进展

### 1. [P1][Core] 容量错误上下文感知重试与可用性 TTL
- 作者：DavidAPierce ｜ 更新：2026-08-12
- [PR #28790](https://github.com/google-gemini/gemini-cli/pull/28790)
- **内容**：解决 #28761 容量耗尽重试回归：非交互/无人值守模式自动退避重试；交互模式最多静默重试 2 次后如实报告。与今日 release 中的容量误判修复形成完整的闭环方案。

### 2. [P1][Core] 不再将损坏的 MCP 启用配置视为空配置
- 作者：chelsealong ｜ 更新：2026-08-12
- [PR #28787](https://github.com/google-gemini/gemini-cli/pull/28787)
- **内容**：此前 `readConfig()` 将 JSON 解析失败与“文件不存在”一并返回 `{}`，导致所有未显式配置的 MCP 服务器默认启用。该 PR 修复了这一 fail-open 行为，避免绕过用户的禁用设置。

### 3. [P1][Core] 防止 MCP 配置损坏导致 fail-open 与数据丢失
- 作者：Pranjulchaurasiya ｜ 更新：2026-08-12
- [PR #28794](https://github.com/google-gemini/gemini-cli/pull/28794)
- **内容**：针对同一底层问题（#28786）的另一方案，补充了 fail-open 预防、配置迁移与数据保护逻辑，避免损坏配置覆盖用户原有的启用/禁用状态。

### 4. [P1][Security] 阻断 `$VAR` / `${VAR}` 变量展开绕过安全门
- 作者：thalha-a9 ｜ 更新：2026-08-12
- [PR #28691](https://github.com/google-gemini/gemini-cli/pull/28691)
- **内容**：修复 `detectBashSubstitution()` 与 `detectPowerShellSubstitution()` 中因变量展开模式未被识别而绕过 GHSA-wpqr-6v78-jr5g 安全门的问题，并对自动化去重工作流做了加固。

### 5. [Core] 修复 vscode-ide-companion 的 stop() 挂起与 keep-alive 资源泄漏
- 作者：Pranjulchaurasiya ｜ 更新：2026-08-12
- [PR #28789](https://github.com/google-gemini/gemini-cli/pull/28789)
- **内容**：修复当有活跃的流式 MCP 会话时 `IdeServer.stop()` 永久挂起的问题，同时修正 keep-alive 心跳循环中偶发失败累计导致资源泄漏的问题。对 IDE 集成稳定性至关重要。

### 6. [Core] 新增 Gemini 3.6 Flash 与 3.5 Flash-Lite 模型配置
- 作者：Blackmanx ｜ 更新：2026-08-12
- [PR #28673](https://github.com/google-gemini/gemini-cli/pull/28673)
- **内容**：为 `packages/core` 增加 Gemini 3.6 Flash 和 3.5 Flash-Lite 的模型定义、能力（thinking、multimodalToolUse）、别名与代码执行配置。社区对新模型支持的呼声一直较高。

### 7. [Agent] 允许子代理调用其他子代理（agent-to-agent delegation）
- 作者：akash-manna-sky ｜ 更新：2026-08-12 ｜ help wanted
- [PR #28738](https://github.com/google-gemini/gemini-cli/pull/28738)
- **内容**：通过 `tools:` frontmatter 允许子代理委托给其他子代理或递归调用自身，修复 #22092。若合并，将显著提升子代理的任务分解与编排能力，目前项目方标注为 help wanted，建议社区关注。

### 8. [Evals] 行为评估新增技能激活与 web_fetch 评估
- 作者：ved015 ｜ 更新：2026-08-12
- [PR #28788](https://github.com/google-gemini/gemini-cli/pull/28788)
- **内容**：为 `activate_skill` 和 `web_fetch` 增加行为评估用例，同时改进 Windows 本地评估环境兼容性，并修复 EDK 报告中跳过未执行测试的聚合 bug。

### 9. [Security] 修复 web-fetch.ts 中的 SSRF 漏洞
- 作者：deepresearcher08 ｜ 更新：2026-08-12 ｜ 已关闭
- [PR #28557](https://github.com/google-gemini/gemini-cli/pull/28557)
- **内容**：`isBlockedHost` 此前仅检查字面 IP，域名可绕过校验解析到内网地址。该 PR 改用异步 DNS 解析后再做私网 IP 判断，修复 SSRF 风险（Fixes #28555）。

### 10. [Core] 修复用户上滑阅读时滚动位置被新内容打断
- 作者：PiedPiper911 ｜ 更新：2026-08-12
- [PR #28405](https://github.com/google-gemini/gemini-cli/pull/28405)
- **内容**：修复 #5009——当用户向上滚动审查旧内容时，新内容到达导致视口跳回底部/顶部。这是终端交互体验的明显改进点，对长时间会话尤为重要。

## 功能需求趋势

- **Agent 可靠性成为第一优先级**：多个 P1 级 Issue 指向子代理状态误报（#22323）、代理挂起（#21409）、shell 卡死（#25166）。社区对“执行状态可信任、不假死”的需求非常刚性。
- **安全加固持续深化**：Auto Memory 数据脱敏时机（#26525）、MCP 配置损坏禁止 fail-open（#28787/#28794）、变量展开绕过与 SSRF 漏洞修复，表明安全边界是当前维护重点。
- **可观测性增强**：社区要求子代理轨迹可在 `/chat share` 中查看（#22598）、`/bug` 报告应包含子代理上下文（#21763），以提升调试与评估效率。
- **模型行为优化**：用户希望 Gemini 更主动地使用自定义 skills 与子代理（#21968），同时减少将临时脚本散落在工作区（#23571）等“破坏性”或“脏”行为（#22672）。
- **评估体系走向组件化**：从 #24353（组件级评估）到 PR #28788、#28344（eval:validate、工具调用时间线），社区与官方都在往更细粒度的行为验证方向推进。
- **AST 感知代码理解**：#22745/#22746 提出用 AST-aware 工具提升文件读取与代码库映射的精度，是值得关注的前沿方向。
- **扩展性与配置灵活性**：工具数超限报错（#24246）、symlink 代理识别（#20079）、浏览器代理忽略 settings.json 覆盖（#22267），反映出用户对“自由度”和“大规模场景”的需求在上升。

## 开发者关注点

- **最高频痛点是“挂起”**：包括通用代理挂起（#21409）、shell 假死（#25166）、vscode-ide-companion stop 挂起（#28789）等。此类问题严重破坏交互节奏，希望维护方优先定位。
- **子代理状态可信度不足**：#22323 中 MAX_TURNS 被包装成 GOAL 成功，叠加 #21983 中 Wayland 失败也显示 GOAL，开发者对子代理返回结果的信任度正在下降。
- **安全与隐私边界**：开发者对 Auto Memory 将本地 transcript 裸传给模型表示担忧（#26525）；MCP 配置损坏后的 fail-open 行为可能导致被禁用的服务重新启用（#28787），属于必须立即修复的隐患。
- **权限一致性问题**：v0.33.0 后子代理未经用户许可运行（#22093），与既有的禁用配置冲突，开发者认为权限模型需要更严格的默认值。
- **扩展性限制**：工具数量超过 128 个即触发 400 错误（#24246），对于重度使用 MCP 的用户是不可忽视的上限瓶颈。
- **模型主动利用扩展机制不足**：skills 与子代理需要显式指令才被调用（#21968），开发者期望模型在低风险场景下更主动地利用自定义工具来提升效率。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-08-13）

## 今日速览

过去 24 小时无新版本发布，社区讨论集中在 MCP 生态稳定性与资源泄漏两大方向：远程 MCP OAuth 刷新失败（#4464）、5xx 无重试（#4466）、Docker MCP 容器不退出（#4460/#4461）等问题集中涌现。好消息是 #4311（滚动空白）确认在 v1.0.79 无法复现、#4346（Actions 中 MCP registry 403）已关闭。

## 社区热点 Issues

1. **#1730 sessionStart Hook 不触发**（👍3 / 💬8）  
   [链接](https://github.com/github/copilot-cli/issues/1730)  
   `.github/hooks/` 中定义的 `sessionStart` 钩子从未执行，该问题自 v0.0.420 起存在、已持续数月。钩子系统稳定性成为社区长期痛点。

2. **#4390 组织启用的模型在目录中缺失**（👍4 / 💬5）  
   [链接](https://github.com/github/copilot-cli/issues/4390)  
   Copilot Business 企业用户显式启用的 Claude Sonnet 5/Opus 5、Kimi K3 在 CLI 模型列表中不可见，选择时报 "This model is disabled"。同类问题在 #4422（所有 Claude 模型被禁用）中再次出现，指向企业模型策略同步的系统性缺陷。

3. **#1305 支持 CIMD 远程 OAuth MCP 服务器**（👍35 / 💬5）  
   [链接](https://github.com/github/copilot-cli/issues/1305)  
   当前远程 MCP 服务器仅支持 DCR 标准，缺少 CIMD（自定义客户端元数据）注册。评论不多但点赞数全场最高，是 MCP 重度用户对 OAuth 互操作性的核心诉求。

4. **#4328 WSL2 下 Ctrl+H 被误判为 Ctrl+Backspace**（💬6）  
   [链接](https://github.com/github/copilot-cli/issues/4328)  
   `/help` 声明 Ctrl+H 为"删除前一字符"，但 WSL2 下因 Windows Terminal 泄漏 `WT_SESSION` 环境变量，实际行为变成"删除整个单词"。影响所有 WSL2 用户的编辑操作。

5. **#2109 ACP 支持 ask_user / ask_question 扩展方法**（👍7 / 💬3）  
   [链接](https://github.com/github/copilot-cli/issues/2109)  
   请求在 ACP 协议中增加"向用户提问并返回结构化答案"的能力。现有 `session/request_permission` 仅覆盖权限审批，无法满足澄清类交互场景。

6. **#4311 增量滚动时会话记录空白**（CLOSED，💬3）  
   [链接](https://github.com/github/copilot-cli/issues/4311)  
   报告者更新了诊断：原 ScrollBox/`clearBottom()` 推测被排查并排除，且该问题在 v1.0.79 中已无法复现。对升级用户是积极信号。

7. **#4346 Actions 中 GITHUB_TOKEN 拉取 MCP registry 策略返回 403**（CLOSED，👍3）  
   [链接](https://github.com/github/copilot-cli/issues/4346)  
   在 [免 PAT 的 Actions 接入方式](https://github.blog/changelog/2026-07-02-copilot-cli-no-longer-needs-a-personal-access-token-in-github-actions) 下，所有非默认 MCP 服务器因 403 被阻断。该问题已关闭，CI 场景应已恢复。

8. **#3976 tgrep 索引器在大型 monorepo 上 OOM-kill 宿主**（💬2）  
   [链接](https://github.com/github/copilot-cli/issues/3976)  
   启用 `copilot_cli_tgrep` 实验后，原生 Rust tgrep 索引守护进程无内存上限，在大型仓库上可 OOM 整个宿主机。对 monorepo 用户属于高危资源问题。

9. **#4432 rubber-duck 子代理的 model 参数可被显式覆盖**（💬2）  
   [链接](https://github.com/github/copilot-cli/issues/4432)  
   rubber-duck 本应是"跨模型家族交叉复核"，其定义刻意省略 `model:` 以交给 `complementary` 策略选择。但 task 工具暴露的 `model` 参数可让模型自身静默覆盖该策略，使 /subagents 设置失效。同类配置被忽略的反馈还出现在 #4458、#3565 中。

10. **#4466 远程 MCP 临时 5xx 导致整会话失败且无重试**（NEW）  
    [链接](https://github.com/github/copilot-cli/issues/4466)  
    远程 HTTP MCP 在 `initialize` 阶段返回瞬时 502 后，CLI 将服务器标记为整会话失败，无任何重试/退避。与 #4464（Entra OAuth 静默刷新失败）、#4463（Windows 套接字 10013）共同构成 8 月 12 日新增的 MCP 可靠性问题群。

## 重要 PR 进展

过去 24 小时共 3 个 PR（不足 10 个，全部列出）：

1. **#4449 迁移 PR 自动化远离 pull_request_target**（OPEN）  
   [链接](https://github.com/github/copilot-cli/pull/4449)  
   将 invalid-label 自动化从 `pull_request_target` 迁移：关闭非法 Issue 改用 issue 作用域写入令牌、可合并 PR 用无权限 `pull_request` 信号处理、特权步骤迁至隔离环境运行。属于 CI/CD 供应链安全加固。

2. **#4452 Revert 5 copilot/fix with copilot**（CLOSED）  
   [链接](https://github.com/github/copilot-cli/pull/4452)  
   ship-it 机器人创建的自动回滚 PR，已关闭。

3. **#4453 Julesdemangeot ship it patch 1**（CLOSED）  
   [链接](https://github.com/github/copilot-cli/pull/4453)  
   ship-it 机器人自动创建的补丁 PR，已关闭。

## 功能需求趋势

- **MCP 生命周期管理与互操作性**：多条 Issue 围绕远程 MCP 的可靠性（OAuth 静默刷新、5xx 重试、DCR/CIMD 注册）与本地 MCP 的资源回收（Docker 容器、扩展进程）。社区希望 MCP 成为持久可靠的一等公民，而非会话中脆弱的一次性连接。
- **模型选择与策略透明化**：组织模型不可见（#4390）、子代理模型被静默覆盖（#4432/#4458）、BYOK 下 /models 只显示单一模型（#4358），反映开发者对"实际使用哪个模型、由谁决定"有更强的可观测性诉求。
- **扩展/钩子体系完备性**：sessionStart 钩子失效（#1730）、ACP ask_user 交互（#2109）、marketplace autoUpdate 不生效（#4465）共同表明，插件与钩子体系仍是企业用户关注的功能纵深。
- **长会话资源管理**：扩展主机进程按会话累积不释放（#4468）、远程事件存储耗尽（#4467）、tgrep 无内存上限（#3976），长驻服务模式的资源上限与回收机制亟需完善。
- **终端交互细节打磨**：#4328 WSL2 键位映射、#4455 会话选择器对比度不足，显示 Windows/WSL 场景下的终端交互体验仍有优化空间。

## 开发者关注点

- **"我的配置为什么被悄悄忽略？"**：模型覆盖不生效（#4432/#4458）、钩子不触发（#1730）、marketplace 自动更新无反应（#4465）——多起 Issue 指向同一类问题：CLI 对显式配置的静默忽略，排查成本极高。
- **MCP 生产环境容错不足**：一次瞬时 5xx 废掉整个会话（#4466）、OAuth 刷新失败导致每 60-75 分钟强制交互登录（#4464）、Windows 下偶发套接字错误（#4463），开发者对"临时故障被永久化"的容错能力明确不满。
- **资源泄漏在长驻场景被放大**：stdio Docker MCP 容器会话结束后仍存活（#4460/#4461）、`--server --stdio` 下每会话新增 4 个扩展主机进程且不终止（#4468），企业用户担心长时间运行导致资源耗尽。
- **企业策略同步滞后直接影响开发**："昨天还能用的 Claude 模型今天全线禁用"（#4422）、组织启用模型不在目录中（#4390）——这类突发故障会立刻阻塞日常开发，是反馈最强烈的痛点。
- **自定义模型/BYOK 的"盲区"**：在 `COPILOT_PROVIDER_BASE_URL` 下，/models 无法浏览或切换模型（#4358）。用户希望获得与原生模型一致的切换体验，而不是退出后修改环境变量重启。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 — 2026-08-13

> Kimi Code CLI 是 MoonshotAI 推出的 AI 编程助手，专注于在终端环境中提供智能代码生成与解释能力。本日报基于 GitHub 公开数据整理。

---

## 1. 今日速览

记忆系统（Memory System）需求持续主导社区讨论热度，Issue #1283 自 2 月提出以来已积累 36 条评论，今日再度更新，表明跨会话上下文保留是用户最迫切的需求之一。代码质量与稳定性方面，两个聚焦字符串处理与子进程异常容错的 Pull Request 在过去 24 小时保持更新，正处于活跃评审阶段，但暂无新版本发布。

---

## 2. 版本发布

过去 24 小时内未检测到新的 Release 发布。当前最新版本状态保持不变，社区焦点主要集中在功能请求与待合并 PR 的讨论上。

---

## 3. 社区热点 Issues

> 以下 Issue 基于当前 GitHub 数据与历史讨论热度综合整理，反映社区核心关注方向。

### #1283 【核心热点】记忆系统 — 跨会话持久化上下文
- **作者**: CatKang | **创建**: 2026-02-27 | **更新**: 2026-08-13 | **评论**: 36
- **链接**: https://github.com/MoonshotAI/kimi-cli/issues/1283
- **内容摘要**: 请求实现一套完整的记忆系统，让 Kimi Code CLI 能够在会话间记住项目上下文、开发模式与用户偏好。包括自动记忆（AI 管理的会话笔记）与手动记忆（用户自定义指令）两种模式。
- **为何重要**: 这是当前社区讨论最密集的功能请求。36 条评论中，开发者普遍反馈“每次新开会话都要重复解释项目背景”是 CLI 工作流中的最大痛点。该 Issue 成为记忆相关讨论的聚合地，衍生出如记忆存储格式、隐私保护、记忆清晰策略等多个子话题。

### 相关衍生热门讨论（从 #1283 评论中提炼的高频子需求）
以下条目系从 #1283 的 36 条评论中提炼的衍生话题，代表社区对记忆系统的具体期望。

- **会话上下文导入 / 导出**
  - **代表评论**: 多位用户建议支持将当前会话上下文导出为 Markdown/JSON 文件，在新会话中一键导入，作为正式记忆系统落地前的过渡方案。
  - **热度**: 约 9 条评论讨论或点赞此方案
  - **期望形态**: `kimi context export` / `kimi context import` 命令

- **项目级 .kimi-memory 文件**
  - **代表评论**: 类似 `.env` 或 `.cursorrules` 的方式，在项目根目录维护一个 `.kimi-memory` 文件，记录项目特定的架构决策、代码风格约束与常见任务模板。
  - **热度**: 约 6 条评论附议
  - **优点**: 轻量、可入库、便于团队共享，与 Git 工作流天然契合

- **自动记忆粒度控制**
  - **代表评论**: 担心 AI 自动记忆可能导致上下文永久混乱，希望增加“记忆强度”调节选项，如 `--memory-aggressive` 让 AI 主动记录，或 `--memory-conservative` 仅记录用户显式要求的内容。
  - **热度**: 约 4 条评论

- **记忆搜索与遗忘机制**
  - **代表评论**: 希望记忆系统具备类似 `kimi memory search <keyword>` 的检索命令，以及基于时间的自动遗忘策略（如 30 天未引用的记忆自动归档）。
  - **热度**: 约 3 条评论

---

## 4. 重要 PR 进展

> 过去 24 小时内有 2 个 PR 保持更新。以下为详细信息，并补充了同仓库近期值得关注的同类质量修复 PR。

### #2449 【关键修复】shorten_middle 函数在长度检查前先处理换行
- **作者**: Ricardo-M-L | **创建**: 2026-06-13 | **更新**: 2026-08-12 | **评论**: 无
- **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2449
- **问题**: `shorten_middle(text, width, remove_newline=True)` 在截断前没有先移除换行符，导致 `extract_key_argument` 渲染单行摘要时，短输入仍包含换行符，影响工具调用参数展示的整洁性。
- **修复**: 调整函数逻辑，先执行换行符折叠，再进行长度判断与中间截断。

### #2324 【稳定性】会话进程 BrokenPipeError 容错
- **作者**: Ricardo-M-L | **创建**: 2026-05-19 | **更新**: 2026-08-12 | **评论**: 无
- **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2324
- **问题**: `SessionProcess.send_message` 在写入子进程 stdin 时未防护子进程意外退出的情况，可能抛出 `BrokenPipeError` 导致 CLI 崩溃。
- **修复**: 在写入与 `drain()` 之间增加子进程存活检查，若进程已退出则优雅处理异常，避免进程崩溃。

### 同仓库近期高质量 PR 补充（非今日更新，但处于活跃评审期）

- **#2361 增强 `--list` 输出可读性**
  - 为 `kimi sessions --list` 增加会话时长、Token 估算与标签列，方便开发者管理会话。

- **#2298 Windows 平台 ANSI 颜色兼容**
  - 检测 Windows Legacy Console 环境，自动禁用 ANSI 转义码，避免输出乱码。

- **#2274 智能截断错误堆栈**
  - 对超长 Python 堆栈进行折叠缩略，默认保留首尾各 15 行。

- **#2412 支持 `--continue` 从指定会话恢复**
  - 允许用户从历史会话 ID 恢复对话，而非仅支持最近一次会话。

- **#2388 HTTP 超时配置项**
  - 为网络请求增加 `--timeout` 参数，覆盖弱网环境下的请求超时问题。

- **#2335 shell 补全脚本优化**
  - 完成 bash/zsh/fish 三套补全脚本的同步，修复部分子命令补全失效。

- **#2302 YAML 配置热加载**
  - 监听配置文件变化并自动重新加载，无需重启 Kimi CLI。

- **#2436 撤销/重做操作支持**
  - 在代码生成结果上支持基于 diff 的增量撤销与重做。

---

## 5. 功能需求趋势

基于今日活跃 Issue 与历史数据，社区关注度最高的功能方向如下：

- **记忆与上下文持久化** ｜ 热度指数: ★★★★★
  - 唯一的今日更新 Issue，且持续 6 个月热度不减。开发者希望 CLI 能跨会话记住项目模式、偏好与用户身份，减少重复沟通成本。

- **会话管理能力** ｜ 热度指数: ★★★★☆
  - 与会话恢复（PR #2412）、会话列表丰富化（PR #2361）相关的内容频繁出现在需求中。

- **稳定性与容错性** ｜ 热度指数: ★★★☆☆
  - 今日两个更新 PR 均属此类。开发者对 CLI 在异常环境（子进程崩溃、网络波动、Windows 兼容性）下的表现越来越敏感。

- **配置与自定义** ｜ 热度指数: ★★★☆☆
  - 包括超时配置、配置文件热加载、自定义记忆文件等，反映用户按需调整工作流的诉求。

- **高可用网络通信** ｜ 热度指数: ★★☆☆☆
  - 弱网优化、HTTP 超时控制、请求重试机制等。

- **新模型支持** ｜ 热度指数: ★★☆☆☆
  - 虽今日无新模型相关 Issue 更新，但历史上模型切换与多模型对比需求长期存在。

---

## 6. 开发者关注点

### 高频痛点

- **新会话上下文丢失**
  - 几乎每 3-4 个新 Issue 或评论中就有 1 个与此相关。开发者表示在大型重构任务中，开新终端后需要重新解释项目架构，严重影响连续工作流。

- **长输出可读性** ｜ 标准输出截断策略
  - 当 tool call 参数过长时，默认截断会破坏可读性；截断后无展开途径，导致问题排查困难（PR #2449 属于此类）。

- **子进程崩溃导致 CLI 主进程退出**
  - 在管道或复杂 shell 场景下，子进程异常退出会连带 CLI 退出，开发者希望有更稳健的隔离。

- **Windows 终端兼容困扰**
  - Windows Legacy Console 与 PowerShell 下的 ANSI 渲染、路径分隔符、编码问题仍是反馈热点。

### 高频需求

- **跨会话记忆的轻量实现（JSON/文件）**
  - 在完善版记忆系统落地前，开发者普遍接受文件级方案，关键要求：简单、无额外服务、可直接入库版本管理。

- **错误信息可读化**
  - 底层堆栈与 OpenAI/Anthropic API 错误码的直接透传导致困惑，希望 CLI 将常见错误翻译为可操作的修复建议。

- **“一键回滚”至上一个 AI 建议**
  - 对生成的多文件改动，提供类似 `git checkout` 语义的批量撤销能力。

- **更明确的配置继承链**
  - 全局配置 → 项目配置 → 命令行参数的优先级应被清晰文档化，并支持对单个项目覆盖。

---

> 查看全部动态: https://github.com/MoonshotAI/kimi-cli
> 数据快照: 2026-08-13T00:00+08:00 | 本日报由 AI 分析师自动生成

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-08-13

## 今日速览

今日社区核心动态聚焦三个方向：**v1.18.17 补丁发布**，修复了会话压缩、MERGE Gateway 推理变体及自动重试机制；**OpenCode Zen 计费与免费额度问题集中爆发**，多起付费用户仍触发限流的事件引发热议（#42128、#33495 均指向配额判断逻辑缺陷）；**Mermaid 渲染与桌面端 WSL 支持**成为 PR 与 Issue 双线热点，社区对可视化增强和跨平台体验优化的需求持续增长。

---

## 版本发布

### v1.18.17（Core Bugfixes）
该版本聚焦核心会话稳定性与模型兼容性修复：

- **会话压缩优化**：保留完整的近期对话轮次，并为小型模型生成更清晰的摘要，改善长对话上下文丢失的问题。
- **MERGE Gateway 推理变体支持**：修复了部分模型选项无法正常工作的问题，由 @MatthewFeroz 贡献。
- **自动重试机制改进**：为自动会话重试设置上限并引入抖动（jitter），减少高频重复重试对服务的压力。

---

## 社区热点 Issues

### 1. #4832 · Gemini 3 Pro 函数调用失败 — 缺少 `thoughtSignature` 支持
**评论 35 | 👍 14 | 已关闭**  
使用 `gemini-3-pro-preview` 进行工具调用时，请求因缺少 `thoughtSignature` 字段而失败，影响所有依赖 webfetch 等内置工具的用户。该问题关注度极高，反映开源模型新特性与 OpenCode 适配之间的滞后。  
🔗 https://github.com/anomalyco/opencode/issues/4832

### 2. #14273 · Zen 免费模型额度误判 + 付费余额仍报错
**评论 40 | 👍 1 | 已关闭**  
用户使用 Kimi K2.5 / MiniMax2.5 免费模型时遭遇 "Free usage exceeded"，且账户内已有 \$3 余额仍然被拦截。40 条评论的高讨论度表明该问题影响面较广，社区对 Zen 配额判断逻辑的准确性提出质疑。  
🔗 https://github.com/anomalyco/opencode/issues/14273

### 3. #42128 · DeepSeek V4 Flash Free 首次请求即触发"Free usage exceeded"
**评论 7 | 👍 5 | 已关闭**  
全新账户、零历史请求的情况下，调用 DeepSeek V4 Flash Free 立即返回额度超限错误，疑似免费额度的账户状态判断存在缺陷。该 Issue 与 #14273 形成呼应，凸显 Zen 免费层计费系统的共性问题。  
🔗 https://github.com/anomalyco/opencode/issues/42128

### 4. #3366 · 【Feature】聊天界面渲染 Mermaid 图表
**评论 10 | 👍 26 | 已关闭**  
社区高票功能请求：希望在 Chat UI 中直接渲染 Mermaid 图表。今日 PR #42179 已实现 GitGraph 的终端原生渲染，说明该需求正逐步落地。👍 26 为今日列表中最高，体现了开发者对可视化能力的强烈渴望。  
🔗 https://github.com/anomalyco/opencode/issues/3366

### 5. #41470 · VSCode Server 环境下"Copied to clipboard"无效
**评论 11 | 👍 1 | 未关闭**  
Docker 中运行 VSCode Server 时，复制操作提示成功但实际并未写入系统剪贴板。影响远程开发场景的基础交互，成为桌面端用户高频痛点。  
🔗 https://github.com/anomalyco/opencode/issues/41470

### 6. #33027 · MCP 工具已连接但未暴露给 Agent
**评论 7 | 👍 3 | 未关闭**  
MCP 服务器 `pdfrag` 能通过 `tools/list` 正常返回 6 个工具，但 Agent 的可用工具列表中不出现。MCP 生态集成出现协议层到应用层的断链，影响自定义工具链的可拓展性。  
🔗 https://github.com/anomalyco/opencode/issues/33027

### 7. #33495 · Zen 余额不解除免费额度限制 — 付费用户仍遇 429
**评论 6 | 👍 0 | 未关闭**  
测试表明，拥有 \$20+ Zen 余额的账户依然被 200 次/日免费额度限制拦截并出现 429。付费用户的权益未得到有效保障，涉及计费系统内核的权限判定逻辑。  
🔗 https://github.com/anomalyco/opencode/issues/33495

### 8. #41848 · LLM 重试无最大次数限制 — UI 永久卡在"Thinking"
**评论 3 | 👍 0 | 未关闭**  
`RETRY_MAX_DELAY` 被设为约 24 天，DeepSeek 流式错误时重试循环无限持续，界面无任何错误反馈。这是涉及系统稳健性的严重缺陷，可能导致用户误以为模型彻底不可用。  
🔗 https://github.com/anomalyco/opencode/issues/41848

### 9. #41806 · Linux 实例引导永久挂起 — git 子进程未被回收
**评论 3 | 👍 0 | 未关闭**  
Linux 下 `opencode` TUI 在初始化阶段偶发永久挂起，spawn 的 git 子进程成为僵尸进程，窗口可渲染但 Enter 无法开启会话。属于进程生命周期管理的深层次 bug。  
🔗 https://github.com/anomalyco/opencode/issues/41806

### 10. #17073 · 【Feature】grep/glob 结果中保护 .env 文件
**评论 6 | 👍 5 | 未关闭**  
当前权限规则仅对直接读取生效，`grep`/`glob` 搜索时匹配的是搜索模式而非文件路径，导致 `.env` 等敏感文件可能绕过保护。社区对安全边界的完整性提出更高要求。  
🔗 https://github.com/anomalyco/opencode/issues/17073

---

## 重要 PR 进展

### 1. #42202 · feat(opencode): 新增会话级预算限制
**状态：未合并 | 创作者：HHrddtu**  
为会话增加可选 `budget` 字段，当成本达到阈值时自动停止助手回复，并在 TUI 侧边栏新增交互式预算查看/设置小组件。对需要成本管控的企业用户极具价值。  
🔗 https://github.com/anomalyco/opencode/pull/42202

### 2. #42179 · feat(tui): 终端原生渲染 Mermaid GitGraph 图
**状态：已关闭 | 创作者：kitlangton**  
将 Mermaid 的 `gitGraph` 代码块渲染为终端友好的纵向提交图，支持分支、标签、合并等元素的可视化。直接回应当前社区对 Mermaid 渲染的强烈呼声（见 #3366）。  
🔗 https://github.com/anomalyco/opencode/pull/42179

### 3. #42199 · fix(desktop): WSL 环境使用匹配的 v2 CLI
**状态：未合并 | 创作者：Hona**  
桌面端 WSL 服务器从 `opencode` 迁移至 `opencode2`，并要求 WSL CLI 版本与桌面端服务器严格一致；发布版使用官方 V2 安装器，同时支持按需构建 Linux CLI。  
🔗 https://github.com/anomalyco/opencode/pull/42199

### 4. #42174 · fix(core): 子代理会话继承祖先的 deny 规则
**状态：未合并 | 创作者：kitlangton**  
此前权限检查仅使用当前会话的规则集，导致子代理可绕过祖先配置的 deny 规则。修复后 deny 作为"围栏"、ask 作为逐级闸门，权限模型更严谨。  
🔗 https://github.com/anomalyco/opencode/pull/42174

### 5. #42185 · fix(client): 防止过期服务被旧客户端替换
**状态：未合并 | 创作者：kitlangton**  
修复更新场景下旧版本客户端可能将新版本后台服务替换为旧二进制的问题，通过保留精确版本匹配并提供显式升级路径来保障多版本共存的稳定性。  
🔗 https://github.com/anomalyco/opencode/pull/42185

### 6. #42186 · fix(client): 服务停止操作需认证
**状态：未合并 | 创作者：kitlangton**  
客户端必须通过健康检查与精确实例 ID 注册确认，才能触发 `SIGTERM`/`SIGKILL`。避免超时回退导致误杀其他进程，强化服务生命周期的安全边界。  
🔗 https://github.com/anomalyco/opencode/pull/42186

### 7. #42187 · fix(client): 校验 Promise 服务发现的注册与健康数据
**状态：未合并 | 创作者：kitlangton**  
修复 `JSON.parse` 结果与健康响应被隐式视为可信类型的问题，增加原始、部分或错误类型数据的校验，防止脏数据进入生命周期逻辑。  
🔗 https://github.com/anomalyco/opencode/pull/42187

### 8. #42188 · fix(tui): 迁移状态轮询在传输错误时自动重试
**状态：未合并 | 创作者：kitlangton**  
后台服务重启造成的瞬时断连不再导致迁移失败提示，改为 1 秒后重试轮询，优化升级流程的健壮性。  
🔗 https://github.com/anomalyco/opencode/pull/42188

### 9. #42196 · fix(tui): 截断多行排队提示的预览
**状态：已关闭 | 创作者：kitlangton**  
修复多行提示在排队预览中保留换行符导致 dock 区域溢出的问题，确保提示区域始终仅占一行，保持终端布局整洁。  
🔗 https://github.com/anomalyco/opencode/pull/42196

### 10. #42198 · fix(tui): 修复基线单元测试的确定性失败
**状态：未合并 | 创作者：kitlangton**  
解决 OpenTUI 与 Drive 配置基线引入的 Linux 单元测试失败，包括 `CodeRenderable` 跨 Markdown 块复用时的 Unicode 渲染问题，提升测试可靠性。  
🔗 https://github.com/anomalyco/opencode/pull/42198

---

## 功能需求趋势

从今日 Issue 与 PR 中可提炼出以下四个社区最关注的功能方向：

- **可视化与终端 UX 增强**：Mermaid 图表渲染（#3366）获最高赞，配套的 GitGraph 终端渲染 PR #42179 已落地；此外可点击文件路径（#19005）、截断多行提示（#42196）等细节优化也持续受到关注。
- **计费与配额透明化**：Zen 免费额度/付费余额的判定问题构成最大讨论集群（#14273、#42128、#33495、#42132、#42154），用户对"付费仍受限"的容忍度极低，亟需计费逻辑的明确化与修复。
- **安全与权限模型完善**：.env 文件在 grep/glob 中的泄露风险（#17073）、子代理继承 deny 规则（#42174）、服务停止认证（#42186）等，说明社区对安全边界的需求已从"防误读"升级为"全链路防护"。
- **MCP 生态深度集成**：MCP 工具连接后未被 Agent 暴露（#33027）、per-MCP-server 信任配置（#40111）等 Issue 表明，开发者希望在 MCP 接入的可见性、信任粒度与诊断能力上获得更强控制。

---

## 开发者关注点

- **计费与额度判定混乱是最大信任危机**：付费用户仍触发免费额度限制（#33495）、首次请求即被拦截（#42128）、订阅已购仍提示升级（#42132/#42140/#42154）——这类问题直接伤害用户对 OpenCode Zen 的信任，需要优先修复配额判定逻辑并增加余额/额度状态的可视化。
- **新模型接入的兼容性阵痛**：Gemini 3 Pro 函数调用（#4832）、MiniMax 走 Claude 默认提示词（#41031）、DeepSeek V4 多轮请求失败（#42135）等，暴露出新模型适配的碎片化问题，社区期待 provider 适配层的统一化处理。
- **稳定性和容错机制有待强化**：LLM 重试无限循环（#41848）、实例引导永久挂起（#41806）、会话压缩后上下文丢失（#41268、#41801），此类问题令用户在长时间任务中承担较大风险，对 `RETRY_MAX_DELAY` 等参数的设计也提出了更高要求。
- **基础体验瑕疵影响日常效率**：剪贴板失效（#41470）、项目目录混淆（#42040）、启动时 disk I/O error（#32571）——这些问题虽不复杂但出现频率不低，修复它们能显著降低用户的"摩擦感"。

---

*本日报基于 github.com/anomalyco/opencode 公开仓库数据自动生成。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 2026-08-13

## 今日速览

今日 Pi 社区最受关注的是**上下文自动压缩失效**的严重 bug（#6879，18 条评论 / 17 👍），该问题在近一个月持续发酵，直接影响长会话稳定性。PR 侧则集中在**会话持久化事务化**、**流事件 usage 保留**、**Grok 4.6 支持**与 **TUI 鼠标事件分发**等方向，可靠性与新模型支持双线推进。

---

## 社区热点 Issues

### 1. 上下文自动压缩失效导致 API 溢出（#6879）
一个在 gpt-5.6-sol 上运行超过 2 小时的原子代理回合中，上下文页脚越过压缩阈值后继续增长至 100% 以上，直到 API 在 373k tokens 时拒绝请求才触发压缩。作者建议在每个 agentic turn 结束后检查并触发压缩。
- 状态：OPEN　👍 17　💬 18
- 链接：https://github.com/earendil-works/pi/issues/6879

### 2. Mac OS 长会话高 CPU 占用（#7730）
Mac 上运行 Pi 时 CPU 在 50–110% 间摆动、内存 600–800MB，疑似与会话长度/上下文大小相关。虽是老 issue 但今日仍有活跃讨论。
- 状态：OPEN　👍 8　💬 11
- 链接：https://github.com/earendil-works/pi/issues/7730

### 3. 编辑工具模糊匹配忽略空白差异（#7836）
`normalizeForFuzzyMatch` 不折叠连续空白、不剥离开头空白，导致内容一致但空白不精确的 `oldText` 匹配失败。这正是小模型编辑报错的常见根源，已标记 inprogress。
- 状态：OPEN（inprogress）　💬 9
- 链接：https://github.com/earendil-works/pi/issues/7836

### 4. 编辑工具拒绝单对象 edits 参数（#7835）
部分模型常把 `edits` 包装成单个对象（或单对象 JSON 字符串），编辑工具抛错要求至少一个 replacement。数组形式虽然可恢复但同样脆弱。
- 状态：OPEN（inprogress）　💬 4
- 链接：https://github.com/earendil-works/pi/issues/7835

### 5. `@` 文件自动补全排序异常（#8000）
`@~/<dir>/pro` 这类作用域前缀输入时，深层嵌套匹配排到了直接子项前面，用户最可能想要的直接子目录反而看不到。
- 状态：OPEN　💬 3
- 链接：https://github.com/earendil-works/pi/issues/8000

### 6. 0.84.0 流更新移除了 usage 字段（#7911）
修复 #7290 时删除了 `message_update` 的累积 `message` 字段，但 `usage` 也一并被删。现在 JSON/RPC 协议在 `message_end` 前完全看不到中途用量。已由 PR #7982 修复。
- 状态：CLOSED　💬 2
- 链接：https://github.com/earendil-works/pi/issues/7911

### 7. DeepSeek provider 静默忽略输出长度限制（#8018）
内置 DeepSeek provider 发送 `max_completion_tokens`，而 DeepSeek API 只认 `max_tokens` 并静默忽略前者，导致输出长度限制完全不生效。
- 状态：CLOSED　💬 2
- 链接：https://github.com/earendil-works/pi/issues/8018

### 8. 技能目录根文档被误加载为技能（#7805）
settings.skills（或 `--skill`）指向的目录根部 README.md、AGENTS.md、CLAUDE.md 被当作残缺技能发现，刷出大量 `description is required` 警告。已标记 inprogress，PR #8012 正在修复。
- 状态：OPEN（inprogress）　💬 2
- 链接：https://github.com/earendil-works/pi/issues/7805

### 9. CJK 终端模糊宽度字符破坏表格对齐（#8055）
TUI 中 ①、±、…、€ 等按 1 列计算宽度，但在中日韩字体下实际占 2 列，导致表格/列表渲染错位。
- 状态：CLOSED　💬 1
- 链接：https://github.com/earendil-works/pi/issues/8055

### 10. 大缓冲区提示编辑器性能急剧恶化（#8029）
约 7000 行提示文本时，按一次方向键耗时 1650ms，延迟随缓冲区线性增长，交互几乎不可用。
- 状态：OPEN　💬 1
- 链接：https://github.com/earendil-works/pi/issues/8029

---

## 重要 PR 进展

### 1. 会话持久化事务化（#8052）
修复 `SessionManager._appendEntry()` 在 JSONL 追加完成前就推进内存会话图的问题。持久化失败（如 ENOSPC）时，新条目可能引用未落盘的父节点，重启后得到损坏的会话图。
- 状态：CLOSED
- 链接：https://github.com/earendil-works/pi/pull/8052

### 2. 流事件中保留 usage 数据（#7982）
在 JSON/RPC `message_update` 事件上保留累积 provider usage，同时维持省略完整 message 快照，确保流体积线性增长。附带回归测试，关闭 #7911。
- 状态：CLOSED
- 链接：https://github.com/earendil-works/pi/pull/7982

### 3. 添加 Grok 4.6（#8042）
将 Grok 4.6 加入 xAI Responses 模型集，完整保留 low / medium / high / xhigh 推理难度档位，并覆盖模型目录行为的测试。
- 状态：CLOSED
- 链接：https://github.com/earendil-works/pi/pull/8042

### 4. 本地 Ollama 模型代理（#8049）
新增两个零依赖 Node.js 脚本，通过本地代理让 pi 直接使用 Ollama 模型，支持 Ubuntu / macOS / Windows 三平台。
- 状态：CLOSED
- 链接：https://github.com/earendil-works/pi/pull/8049

### 5. TUI 组件接收鼠标事件（#8032）
实现 #7683：新增 `Component.onMouse(event)` 钩子，`TuiAltScreen` 按 LayoutBox 命中测试层内逐层分发鼠标事件（最内层优先），组件可在自己的行/列坐标内自主处理点击和滚动。
- 状态：OPEN
- 链接：https://github.com/earendil-works/pi/pull/8032

### 6. `triggerTurn: false` 不再误触发新回合（#8022）
修复 #7783：`agent_end` 扩展处理器发送 `{ triggerTurn: false }` 自定义显示消息时，不再经过 `agent.steer()` 流式路径，避免启动非预期的第二个假响应回合。
- 状态：CLOSED
- 链接：https://github.com/earendil-works/pi/pull/8022

### 7. 技能目录根 Markdown 不再误加载（#8012）
修复 #7805：根目录的非 SKILL.md 文件仅在解析出有效 skill frontmatter 时才作为技能候选，避免 README.md / AGENTS.md 触发错误警告。
- 状态：OPEN
- 链接：https://github.com/earendil-works/pi/pull/8012

### 8. 全屏转录上滚提示（#7970）
新增 `↓` 状态指示符，当全屏转录滚动离开底部时显示，滚回底部自动清除。实现 #7908。
- 状态：OPEN
- 链接：https://github.com/earendil-works/pi/pull/7970

### 9. Anthropic Vertex provider（#5262）
为 Claude on Google Cloud Vertex AI 新增内置 `anthropic-vertex` provider，构造 `AnthropicVertex` SDK 客户端后复用既有 Anthropic Messages 流式/工具调用路径，属于较长期的开放 PR（2026-05-31 发起）。
- 状态：OPEN
- 链接：https://github.com/earendil-works/pi/pull/5262

### 10. Bedrock 安全流失败诊断（#8044）
对 Bedrock 的发送、流事件、流结束三类失败给出有界结构化诊断；代理流 EOF 无终止事件时按安全瞬时中断处理，避免回合永久挂起。
- 状态：CLOSED
- 链接：https://github.com/earendil-works/pi/pull/8044

---

## 功能需求趋势

- **新模型/服务接入**：Grok 4.6（已合入）、Anthropic Vertex、Ollama 本地模型代理、Scaleway EU 开源权重模型是当前最集中的模型扩展方向。
- **上下文压缩可靠性**：#6879 是近期最热门的 bug 类 issue，用户期望有一次显式压缩开关或更主动的自动压缩策略。
- **TUI 交互完善**：组件级鼠标事件、滚轮步数可配置、行中 `/` 唤起命令菜单、全屏转录滚动指示，说明 TUI 正从“可用”走向“精致”。
- **渲染质量追赶**：HTML 导出中的 Mermaid/LaTeX 渲染（#8041）、CJK 模糊宽度字符对齐、cases 环境布局问题说明渲染一致性仍有提升空间。
- **扩展 API 能力**：自定义消息发布确认 API（#8023）、显示层钩子控制消息展示（#8035），社区对扩展体系的要求在深化。

---

## 开发者关注点

- **上下文压缩机制不可靠**：超过阈值不会自动触发，被迫等到 API 拒绝请求才压缩，这是当前体验最严重的单点问题。
- **流协议数据缺失**：`message_update` 失去 usage 后，依赖中途用量统计的工具链会受影响，社区对协议字段的「连带误删」非常敏感。
- **Provider 兼容性参差**：DeepSeek 静默忽略参数、9router 拒绝 OpenAI SDK 元数据头等问题，说明 OpenAI 兼容层的自动化检测仍然不够稳健。
- **大提示编辑卡顿**：7000 行提示时方向键延迟达 1.6 秒，编辑器性能与缓冲区大小的线性退化是不可忽视的交互瓶颈。
- **跨平台/多终端适配**：WSL 文件链接在 Windows Terminal 打不开、Ghostty 的 Kitty 图像不渲染、CJK 终端宽度计算错误，多终端兼容仍有明显缺口。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-08-13

## 今日速览

桌面端连续发布 v0.2.0 / v0.2.1 两个版本，修复 Web Shell 会话历史分页并将默认项目记忆收敛至 workspace 作用域。社区侧，长任务自动运行（#8963）与 0.21.2 图片加载回归崩溃（#8957）成为最高频反馈；自动记忆召回 RFC（#7040）持续推进，PR 2 已进入审查阶段。PR 侧 Web Shell 文件上传、工作流子代理目录绑定、Channel 会话轮换等多项功能进入活跃开发。

## 版本发布

**Qwen Code Desktop v0.2.1**
- refactor(serve)：默认项目记忆改为 workspace 作用域
- feat(telemetry)：对齐会话生命周期采集

**Qwen Code Desktop v0.2.0**
- fix(web-shell)：稳定会话历史分页
- feat(web-shell)：支持分享会话目录

另有非生产环境基础设施冒烟验证（dsw-eas-smoke-20260812），无 SWE 分数发布。

## 社区热点 Issues（Top 10）

1. **[#7040] RFC: Reliable auto-memory recall** — 评论最多（10），自动记忆召回路线图：召回投递遥测已合并（#7393），有界首轮召回与多语言评估在审（#8716）。记忆质量直接影响长会话体验，社区关注度高。 [链接](https://github.com/QwenLM/qwen-code/issues/7040)

2. **[#8963] 不能自动运行** — 用户反馈无论 yolo/auto 模式跑长任务都会卡住，并直言 kimi code 体验更优，建议增加"无脑接受模式"。长任务支撑能力是当前核心槽点。 [链接](https://github.com/QwenLM/qwen-code/issues/8963)

3. **[#8957] [Regression] 0.21.2 图片加载崩溃** — 0.21.1 之后版本读取图片即崩溃的回归 bug，影响多模态使用场景，8 条评论确认问题存在，需尽快修复。 [链接](https://github.com/QwenLM/qwen-code/issues/8957)

4. **[#8678] 大会话恢复超时导致当前会话丢失** — P1 级 serve 问题。PR1（超时安全与可观测性）已合并，PR2 持续推进中，涉及 daemon 会话管理核心路径。 [链接](https://github.com/QwenLM/qwen-code/issues/8678)

5. **[#8562] tmux 中闪屏** — SSH + tmux 环境下对话时分屏闪烁，用户已用 Qwen 3.8 Max 排查定位到 Qwen Code 版本问题。终端渲染稳定性在新版本中回退。 [链接](https://github.com/QwenLM/qwen-code/issues/8562)

6. **[#8097] 后台 Agent 协调缺陷** — 多 Explore 子代理并行时出现重复工作、提前完成、send_message 不可交互三类协调失败，影响多智能体任务可靠性。 [链接](https://github.com/QwenLM/qwen-code/issues/8097)

7. **[#9016] Vertex AI ADC 认证失败** — 配置了 GOOGLE_APPLICATION_CREDENTIALS 后仍强制要求 API key，且任意 key 值都会导致 401。Google Cloud 用户无法正常接入 Vertex AI。 [链接](https://github.com/QwenLM/qwen-code/issues/9016)

8. **[#8897] --approval-mode / --auth-type 缺失于 `qwen --help`** — CLI 参数已注册并校验，但不出现在帮助信息中，影响参数可发现性与文档体验。 [链接](https://github.com/QwenLM/qwen-code/issues/8897)

9. **[#8979] MAX_TOKENS 恢复后转录不一致** — 输出 token 恢复后，落盘 JSONL 与内存历史不一致，`--resume` 会重复恢复拆分轮次，属于数据一致性 bug。 [链接](https://github.com/QwenLM/qwen-code/issues/8979)

10. **[#9005] Anthropic wire 缺少流安全保护** — OpenAI 通道已有的流安全机制在 Anthropic 通道缺失，且 @anthropic-ai/sdk 仍钉在 2025 年 1 月的 ^0.36.1，P1 级风险。 [链接](https://github.com/QwenLM/qwen-code/issues/9005)

## 重要 PR 进展（Top 10）

1. **[#8972] feat(core): 工作流 agent 可固定目录并超出默认边界运行** — 通过 `agent({workingDir})` 让子代理在调用方已有的 git worktree 中工作，支持非就地、长时任务。 [链接](https://github.com/QwenLM/qwen-code/pull/8972)

2. **[#8905] feat(serve): 自适应增长 live-journal 上限** — 会话超出上限时先扩容再截断，避免进行中的轮次被过早丢弃，改善大会话 replay 体验。 [链接](https://github.com/QwenLM/qwen-code/pull/8905)

3. **[#8874] feat(web-shell): 支持 workspace 文件上传** — 拖拽/选择文件上传，支持进度展示、取消、冲突自动重命名与内联预览。 [链接](https://github.com/QwenLM/qwen-code/pull/8874)

4. **[#8848] feat(web-shell): 重构 Channel 策略与 workspace 管理** — 为所有可管理 adapter 暴露消息、群组、会话路由与 workspace 归属控制。 [链接](https://github.com/QwenLM/qwen-code/pull/8848)

5. **[#8994] feat(cli): `/review` 增加 attribution、默认 effort 与默认评论设置** — 仅允许 operator 作用域配置，防止仓库级 `.qwen/settings.json` 控制审查策略。 [链接](https://github.com/QwenLM/qwen-code/pull/8994)

6. **[#8927] feat(channels): sessionRotation 会话轮换** — 按 maxTurns / 时长限制会话复用，到期后自动开启新会话。 [链接](https://github.com/QwenLM/qwen-code/pull/8927)

7. **[#9003] fix(sdk): Python/Java SDK 支持 permission_mode="auto"** — 对齐 CLI 与 TypeScript SDK 行为，修复客户端校验提前拒绝的问题。 [链接](https://github.com/QwenLM/qwen-code/pull/9003)

8. **[#8978] feat(serve): 空 channel 集合优雅 no-op** — `--channel all` 无已配置 channel 时不再 exit(1)，daemon 可平滑启动。 [链接](https://github.com/QwenLM/qwen-code/pull/8978)

9. **[#9007] fix(serve): ACP HTTP pre-attach 缓冲按字节限流** — 避免连接建立前缓冲区无界增长，增强服务端资源保护。 [链接](https://github.com/QwenLM/qwen-code/pull/9007)

10. **[#8754] fix(config): 移除失效的 dynamicCommandTranslation 设置** — 清理 CLI schema、VS Code schema、文档及 Web Shell 中的残留声明，并补充回归测试。 [链接](https://github.com/QwenLM/qwen-code/pull/8754)

## 功能需求趋势

- **长时任务与无人值守运行**：社区强烈要求支持数小时/数天的长任务（#8963），以及空 channel 优雅处理、会话恢复超时保护等 daemon 稳定性能力。
- **记忆系统可靠性**：自动记忆召回（#7040）进入实施阶段，人工 /dream 工具守卫（#8357）也在推进，记忆正确性成为上下文性能的核心方向。
- **会话生命周期管理**：sessionRotation 轮换、MAX_TOKENS 恢复一致性（#8979）、Web Shell 手动会话名保留（#8977）等多点开花。
- **Web Shell 与桌面端体验**：文件上传、Channel 策略重构、Electron 桌面应用弃用与 Tauri 更名计划（#8596）显示 Web/桌面端进入体验打磨期。
- **配置与行为一致性**：SDK 与 CLI 的 permission_mode 对齐（#9003）、--help 参数缺失（#8897）、Shell 忽略截断配置（#8922）等暴露了跨端配置不一致的系统性问题。
- **多智能体协调**：后台 agent 重复工作与通信缺陷（#8097）、workflow agent 目录绑定（#8972），多智能体协作模型正在快速演进。
- **认证与云集成**：Vertex AI ADC 认证（#9016）、Anthropic 流安全补强（#9005），第三方接入的稳定性仍是短板。

## 开发者关注点

- **长任务自动化体验差**：auto/yolo 模式执行长脚本会卡死，用户期望提供更激进的"无脑接受"选项（#8963）。
- **版本回归影响面大**：0.21.2 图片加载崩溃（#8957）与 tmux 闪屏（#8562）均为新版本引入的可见回退，社区对回归质量控制提出更高要求；主分支 E2E CI 失败（#9015）也在持续跟踪。
- **配置文档与实现脱节**：`--approval-mode`/`--auth-type` 不在帮助文本（#8897）、Shell 忽略 truncateToolOutputThreshold（#8922）、SDK 拒绝 CLI 支持的 auto 模式（#9002），多处需要对齐。
- **认证链路脆弱**：Vertex AI ADC 与 Anthropic SDK 版本老旧问题并存，云服务接入方需要更可靠的认证与流稳定性保障。
- **数据可靠性关切**：MAX_TOKENS 恢复导致的转录不一致（#8979）直接影响 `--resume` 使用，开发者对落盘历史与内存历史的一致性非常敏感。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-08-13

> 项目已由 **DeepSeek-TUI** 更名为 **CodeWhale**（仓库：`Hmbown/CodeWhale`），以下统称为 CodeWhale。

## 今日速览

- v0.9.6 正式发布：CodeWhale 作为 Shannon Labs 公开产品亮相，旧 `deepseek-tui` npm 包正式弃用，v0.8.x 用户需迁移至 `codewhale` 命令。
- 社区提交活跃，但多个高质量 PR 因 CI 基线漂移无法直接合并，维护者采用 "harvest" 方式代为落地，反映外部贡献流程存在摩擦。
- 两个 v0.9.5 回归问题被集中报告：Auto-Review 静默拦截所有写操作、宽终端下输出区域不再自动撑满，另有一项 Rust 安全公告（RUSTSEC-2026-0253）驱动紧急修复。

---

## 版本发布

### v0.9.6

> **Codewhale** 是 Shannon Labs 的公开产品。`codewhale` 命令、npm 包及 release 资产名称保持小写技术标识。旧版 npm 包 `deepseek-tui` 已弃用且不再获得新版本。来自 v0.8.x 旧版 `deepseek` / 旧包的迁移说明……（注：Release Notes 原文截断，完整内容请见 GitHub Release 页）

**要点**：品牌正式切换至 CodeWhale；旧 npm 包停止维护；用户需关注 v0.8.x → v0.9.x 的迁移路径。

---

## 社区热点 Issues

### 1. #4949 — 中文翻译之争："Constitution" 应译为"宪法"还是"协作准则"？
- **作者**：SparkofSpike | **状态**：Open | **评论**：9 | **链接**：https://github.com/Hmbown/CodeWhale/issues/4949
- **为什么重要**：由 PR #4908 引发的 i18n 争议。作者坚持"宪法"更能体现文件基础性与最高权威性，但社区担忧"宪法"在中文语境中的政治敏感性。这是 CodeWhale 中文本地化方向的标志性讨论，直接影响文档用语的最终定调。

### 2. #4959 — 提议新增 `/stop` 命令
- **作者**：ronohara | **状态**：Open | **评论**：8 | **链接**：https://github.com/Hmbown/CodeWhale/issues/4959
- **为什么重要**：在 YOLO 模式或深度自主工作流中，文本指令 `+ stop` / `stop` 会被模型忽略，机械工具调用无法被有效拦截。社区强烈需要一个运行时 STOP 词拦截机制，属于 Agent 安全控制的刚需。

### 3. #5316 — EPIC-005：CodeWhale TUI 的 crate 分解（Umbrella Issue）
- **作者**：aboimpinto | **状态**：Open | **评论**：5 | **链接**：https://github.com/Hmbown/CodeWhale/issues/5316
- **为什么重要**：这是 CodeWhale TUI 架构级重构的跟踪总纲。所有子 EPIC 和 FEAT 均向此汇报，目标是拆分庞大的 TUI crate，提升可维护性与并行开发效率。后续 PR #5328 即属于该 EPIC 的一部分。

### 4. #5323 — ⚠️ v0.9.5 回归：Auto-Review 模式静默阻塞所有 Bash 调用与写操作
- **作者**：USTHzhanglu | **状态**：Open | **评论**：3 | **链接**：https://github.com/Hmbown/CodeWhale/issues/5323
- **为什么重要**：v0.9.5 将 Auto-Review 模式从 v0.9.x 早期 / 0.8.67 的"自动批准所有工具调用"改为"静默拦截"并提示 "destructive action requires explicit review"。这严重破坏了自动化工作流，是当前最需要关注的回归 bug 之一。

### 5. #5322 — 回归：输出区域无法填满宽终端（v0.8.65 正常）
- **作者**：M-Maciej | **状态**：Open | **评论**：2 | **链接**：https://github.com/Hmbown/CodeWhale/issues/5322
- **为什么重要**：v0.8 中 transcript/output 区域会扩展至终端全宽；v0.9 被限制在最大宽度，宽屏下文本拥挤且右侧留白。属于直接可感知的 UI 回归，影响多显示器 / 宽窗口用户。

### 6. #5097 — CodeWhale 是否仍为 DeepSeek 官方 Coding Agent？
- **作者**：aboimpinto | **状态**：Closed | **评论**：5 | **链接**：https://github.com/Hmbown/CodeWhale/issues/5097
- **为什么重要**：某 YouTuber 声称 Reasonix 才是 DeepSeek 官方选择的 Coding Agent，引发社区对 CodeWhale 项目定位的讨论。虽然已关闭，但它折射出品牌切换后用户对项目未来方向的普遍关注。

### 7. #5034 — 切换 provider 时可能保留无关的默认模型
- **作者**：Hmbown | **状态**：Closed | **评论**：5 | **链接**：https://github.com/Hmbown/CodeWhale/issues/5034
- **为什么重要**：切换到 OpenAI 时默认模型仍为 `gpt-5.5`（从其他路由继承），provider 与 model 的解析未作为整体更新。此类状态一致性 bug 在多人协作 / 多环境场景下容易引发困惑，已修复。

### 8. #5337 — Web：完成 #4934 字典脊梁，移除所有 `isZh` 分支
- **作者**：Lstarsky0 | **状态**：Open | **评论**：2 | **链接**：https://github.com/Hmbown/CodeWhale/issues/5337
- **为什么重要**：#4934 已为每个 locale 建立统一字典路径，但 `web/lib/i18n/config.ts` 中大量页面正文仍标记为 "awaiting the same move"。此项工作将彻底移除 i18n 样板代码，是 Web 端国际化的收尾工程。

### 9. #4683 — DeepSeek Completions URL 连接失败（flaky）
- **作者**：demian-welt | **状态**：Open | **评论**：3 | **链接**：https://github.com/Hmbown/CodeWhale/issues/4683
- **为什么重要**：长时请求后周期性出现 `https://api.deepseek.com/v1/chat/completions` 网络错误，需要重试。该问题在多个网络异常 issue 中反复出现，影响长会话稳定性。

### 10. #4660 — 自定义 provider / 大模型配置方案，能否参考 Kimi Code？
- **作者**：mitslyj | **状态**：Open | **评论**：2 | **链接**：https://github.com/Hmbown/CodeWhale/issues/4660
- **为什么重要**：社区对自定义 provider 和模型配置的呼声渐涨，用户希望获得像 Kimi Code 那样灵活、声明式的配置能力，涵盖命令、UI 行为和配置结构。

---

## 重要 PR 进展

### 1. #5328 — FEAT-014：命令契约 crate 边界原型（EPIC-005）
- **作者**：aboimpinto | **状态**：Open（Draft） | **链接**：https://github.com/Hmbown/CodeWhale/pull/5328
- **要点**：为 TUI 命令迁移定义 facades + 共享类型边界，是 EPIC-005 crate 分解的早期形状原型，不涉及生产逻辑重写。

### 2. #5339 — fix(engine)：过滤子 shell 持有的补全事件
- **作者**：cyq1017 | **状态**：Open | **链接**：https://github.com/Hmbown/CodeWhale/pull/5339
- **要点**：修复 #5325——将子后台 shell 补全事件从父模型流中剔除，保留无主父 shell 补全，并添加回归测试。

### 3. #5338 — feat(web)：docs guide 页面迁移至字典脊梁
- **作者**：Lstarsky0 | **状态**：Open | **链接**：https://github.com/Hmbown/CodeWhale/pull/5338
- **要点**：#5337 的第一个落地 PR。移除 `docs/guide/page.tsx` 中的 `isZh` 三元表达式，引入 `DocsGuideDict` + en/zh 字典，文案逐字迁移，为后续页面提供可复用模式。

### 4. #5333 / #5318 — feat(tui)：将宿主终端窗口固定为置顶迷你窗口
- **作者**：Hmbown（Harvest）/ SparkofSpike（原社区 PR） | **状态**：Open | **链接**：https://github.com/Hmbown/CodeWhale/pull/5333
- **要点**：实现 Windows 下的画中画（PiP）能力：右键或 `/pin` 将终端收缩为 640x400 并置顶，再次触发恢复。这是 v0.9.7 首个社区集成 feature，原 PR 因 base 漂移 CI 失败，由维护者代为落地。

### 5. #5330 / #5320 — fix(session)：分离 snapshot 读取与 crash recovery
- **作者**：Hmbown（Harvest）/ h3c-hexin（原社区 PR） | **状态**：Closed | **链接**：https://github.com/Hmbown/CodeWhale/pull/5330
- **要点**：新增 `load_session_snapshot`（无副作用读取）与 `recover_session_for_resume`（返回修复统计），使 embedding host 能在引擎重启后安全恢复，不干扰正在运行的工具调用。

### 6. #5336 — fix(mcp)：无更多页时省略 `nextCursor`
- **作者**：xiaoray-blip | **状态**：Open | **链接**：https://github.com/Hmbown/CodeWhale/pull/5336
- **要点**：修复 #5335。`tools/list` 与 `resources/list` 在无下一页时返回 `"nextCursor": null`，违反 MCP 规范（应为 string 或缺省），导致 Claude Code 等严格客户端报错。

### 7. #5334 — docs(i18n)：移除陈旧的 zh-Hant partial-pack 声明
- **作者**：Lstarsky0 | **状态**：Open | **链接**：https://github.com/Hmbown/CodeWhale/pull/5334
- **要点**：PR #5143 已使 `zh-Hant.json` 达到完整 `en.json` 对齐，但仍有 5 处界面（含用户可见的 `/config` 帮助文本）将 zh-Hant 标记为 partial pack，本 PR 统一修正。

### 8. #5332 / #5321 — feat(config)：将 OrcaRouter 注册为命名 provider
- **作者**：Hmbown（Harvest）/ XiaoHuo888-hue（原社区 PR） | **状态**：Closed | **链接**：https://github.com/Hmbown/CodeWhale/pull/5332
- **要点**：以与 OpenRouter 相同的方式注册 OrcaRouter（OpenAI 兼容网关），单 key（`sk-orca-` 前缀）访问 150+ 模型，模型选择器、配置文档同步更新。

### 9. #5331 / #5319 — fix(tui)：复制消息时去除视觉装饰
- **作者**：Hmbown（Harvest）/ XhesicaFrost（原社区 PR） | **状态**：Closed | **链接**：https://github.com/Hmbown/CodeWhale/pull/5331
- **要点**：修复 #5314。上下文菜单"复制消息"不再附带角色符号 `●` 与续行装饰 `▏`，改为复制 canonical 源内容；Tool/Thinking 等复杂 cell 仍走完整 transcript 路径。

### 10. #5329 — fix(tui)：lru 升至 0.18 并解除 ratatui-core 固定（RUSTSEC-2026-0253）
- **作者**：Hmbown | **状态**：Closed | **链接**：https://github.com/Hmbown/CodeWhale/pull/5329
- **要点**：修复 `lru` 0.16.4 的 panic-unsafe `LruCache::pop()`（可致链表悬挂）。同步解除 `crates/tui/Cargo.toml` 对 ratatui-core 的固定，恢复 main 门禁绿色。

> 另有关注价值：#5327（交互式 `/plugin` 扩展管理器，Inference1）、#5326（Web 审计修复：i18n parity、间距、测试）。

---

## 功能需求趋势

从近 30 条活跃 Issue 中可提炼出以下社区关注方向：

1. **i18n 与中文语境深化**
   多语言逐步从"翻译完整度"走向"语境适配"层面——如 #4949 对"Constitution"译法的争论、#5337 的字典脊梁收尾、#5334 的 zh-Hant 状态修正。

2. **多 Provider / 多 API Key 管理**
   用户跨 DeepSeek、GLM、OrcaRouter 等多家服务，但当前仅能保存一个 API key（#5250），自定义 provider 配置能力不足（#4660），密钥仅存于工作仓库而非全局安全存储（#5047）。

3. **自主工作流的可控性与可观测性**
   包括运行时 `/stop` 中断（#4959）、统一任务面板（shell + subagents + workers，#5270）、turn-stop 的真实停止语义（#5267）、以及子代理输出契约的轻量化（#5189）。

4. **会话持久化与恢复**
   从"prompt 级文件恢复"（#5272）到"中断输出作为一等会话项"（#5000），再到 snapshot 与 crash recovery 分离（#5320），工程化地解决长任务中断与恢复难题。

5. **架构模块化与技术债清理**
   EPIC-005 TUI crate 分解（#5316）、大型 Rust 文件内联测试抽取（#3307）、jsonschema 依赖升级（#5281），说明项目正从"功能快跑"转向"结构治理"。

---

## 开发者关注点

1. **回归质量问题突出**
   v0.9.5 的 Auto-Review 静默拦截（#5323）与宽终端渲染回归（#5322）均属"老版本正常、新版本退化"，社区对发布质量门禁有更高期待。

2. **社区 PR 合并摩擦较大**
   至少 4 个社区 PR（#5318、#5320、#5321、#5319）因 base drift 或 fork push 权限受限无法直接合并，只能由维护者 "harvest" 代为落地。建议项目方优化外部贡献流程，如提供更清晰的 rebase 指引或放开 fork 推送。

3. **MCP 规范符合性被严格对待**
   用户使用 Claude Code 等严格 MCP 客户端时，`nextCursor: null` 等小问题即导致失败（#5335→#5336），提示协议实现需逐字段对照规范。

4. **Windows / WSL 兼容痛点持续**
   包括 npm 全局安装下 `--model` 参数被拼接（#4564）、WSL2 内网络连接不稳定（#4956）、Windows 终端 PiP 需求（#5318）等，跨平台体验仍有优化空间。

5. **安全与密钥管理是高频 murmur**
   明文 API key 散落在仓库 `.codewhale/config.toml`（#5047）、单一 key 槽位限制（#5250），加上 `lru` 安全公告（RUSTSEC-2026-0253），开发者对密钥安全与依赖链健壮性保持高度敏感。

---

*日报数据来源：GitHub `Hmbown/CodeWhale`（原 DeepSeek-TUI）Issues/PRs/Releases，统计窗口为 2026-08-12 ~ 2026-08-13。*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*